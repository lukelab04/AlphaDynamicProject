
// The schema is stored in the stateInfo for obj. 
// Given this schema, we can:
// 		1) Query the database for the information we want
// 		2) Construct a list template
// We also use some of the data in the config option to determine 
// foreign relationships. 

function buildListFromStoredSchema(obj, listName) {
	let schema = obj.stateInfo.schema;
	let tableName = GLOBAL_CONFIG[obj.stateInfo.panelType].table;

	// Doing the spread operator here ensures that we are not taking a reference to obj.stateInfo.filter
	let filters = [...obj.stateInfo.filter];
	let otherFilters = obj.stateInfo.otherFilters;
	filters.push(...otherFilters);
	filters = JSON.stringify(filters);
	
	let columns = [];
	GLOBAL_CONFIG[obj.stateInfo.panelType].mappings.forEach((c) => {
		columns.push(c.columnName);
	});

	obj.ajaxCallback(
		"",
		"",
		"getAllDataForTable",
		"",
		"columns=" + encodeURIComponent(JSON.stringify(columns))
		+ "&tableName=" + encodeURIComponent(tableName)
		+ "&filters=" + encodeURIComponent(filters)
		+ (obj.stateInfo.pageOptions ? ("&pageOptions=" + encodeURIComponent(JSON.stringify(obj.stateInfo.pageOptions))) : ""),
		{
			onComplete: () => {
				let listObj = obj.getControl(listName);
				
				// cols is an array that can be passed in to Alpha when constructing the list. 
				// We just loop through the mappings, select the fields we want, and create columns for those fields.
				let cols = [];
				GLOBAL_CONFIG[obj.stateInfo.panelType].mappings.forEach((mapping) => {
					if (!mapping.inList) return;
										
					let lookupVal = null;
					if (mapping.lookup) {
						lookupVal = `@lookup(
							${obj.dialogId + '_DlgObj'}, 
							"${mapping.lookup.table}", 
							['${mapping.lookup.getColumns.join("','")}'], 
							"${mapping.lookup.foreignKey}", 
							${mapping.lookup.primaryKey}, 
							${mapping.lookup.formatter}
						)`;
					}
					
					cols.push({
						type: 'field',
						name: mapping.columnName,
						heading: mapping.displayName == undefined ? mapping.columnName : mapping.displayName,
						width: mapping.width? mapping.width : 'flex(1)',
						lookupVal: lookupVal
					})
				});
			
				// List options
				let ops = {
					template: generateListTemplate(obj, listName), 
					style: 'template',
					columns: cols,
					flagIncludeColumnObjects: true,
					
				};
				
				// colDef is also used by Alpha, and includes a little more info than cols.
				// We can create it pretty easily from the info already in cols.
				let colDef = [];
				cols.forEach((c) => {
					let innerTemplate = c.lookupVal ? c.lookupVal : c.name;
					colDef.push({
						header: {html: `<div style="width: ${c.width}"> ${c.heading} </div>`},
						data: {
							template: '<span id="' + listObj.dialogId + '.' + listName.toUpperCase() + '.' + c.name.toUpperCase() + '.I.{*dataRow}">{' + innerTemplate + '}</span>&nbsp;'
						},
						order: c.name,
						width: "250px",
						resize: true,
					});
				});
				
				obj.setListColumnsAndPopulate(listName, obj.stateInfo.allListData, ops);
				obj.refreshClientSideComputations(true);
				
				/*
				listObj.columnLayout.header.show = true;
				listObj.layouts[listObj.layout].columns = colDef;
				listObj._clfFlex = true;
				listObj.columns = cols;
				listObj.refresh();
				*/
			}
		}
	)
}

// formatter: ({colName: colVal}) => string
function lookup(obj, table, columns, primaryKeyName, primaryKeyVal, formatter) {
	let row = obj.stateInfo.lookupFields[table][primaryKeyVal];
	return formatter(row);
}

// Helper function to change the show/hide prop of an object, given its id
function showRow(idStr) {
	let dropDown = document.getElementById(idStr);
	if (dropDown) {
		dropDown.style.display = dropDown.style.display == 'none' ? 'table' : 'none';
	}
}

// Given a button definition from 'related' in the config object, 
// create a button template according to the definition
function buildButtonHtml(obj, listName, item, rowIdStr) {
	let js = "";
	
	// Dropdown means that instead of opening a new panel, we expand the current list row to show more data. 
	// Fairly straightforward, uses the 'showRow' function defined above.
	if (item.buttonType == 'Dropdown') {
		return `
			<div style = "display: table-cell; text-align: center; vertical-align: middle;">
				<button  onclick="showRow('${rowIdStr}')">
					<p>${item.title}</p>
				</button>
			</div>
		`;
	} else if (item.overrideAction) {
		// By default, buttons just open the panel they point to. If we want to call some arbitrary action, 
		// we need to handle that here.
		js = `${GLOBAL_CONFIG.parentObjName}.runAction('${item.overrideAction}')`;
	} else {
		// Get values for the SQL query (will be like ... WHERE [filterCol] = [filterVal])
		let filterCol = item.foreignKey;
		let filterVal = obj.dialogId + "_DlgObj.getControl('" + listName + "').selectionData[0]['" + item.primaryKey + "']";
		js = `<escape<
			let filter = [{'columnName': '${filterCol}', 'columnVal': ${filterVal}}];
			openPanelWithParams('${item.typeToOpen}', filter, '${item.title}', ${GLOBAL_CONFIG.parentObjName});
		>>`;
		
		// Templates have a bug?/feature where, if there exists a newline inside <escape<...>>, then the whole thing breaks.
		// So we need to replace those.
		js = js.replace(new RegExp('\n','g'), ' ');
	}
	
	// Define a regular HTML button and inject our JS
	return `
		<div style = "display: table-cell; text-align: center; vertical-align: middle;">
			<button onclick="${js}">
				<p>${item.title}</p>
			</button>
		</div>
	`;
}

// This will only have an effect if list style is 'template'.
function generateListTemplate(obj, listName) {
	// {[temp].info.index} will be expanded by the List templater to be the numeric row id
	let rowIdStr = obj.dialogId + "_GENERATED_LIST_ROW_ID_{[temp].info.index}";
	let options = GLOBAL_CONFIG[obj.stateInfo.panelType].mappings;
	
	let html = `{*assign [temp].formatted <gets> new Object()}`;
	html += `<div style="display: table; width: 100%; table-layout: fixed;">`;
	options.forEach((mapping) => {
		if (!mapping.inList) return;
				
		let lookupVal = null;
		if (mapping.lookup) {
			lookupVal = `@lookup(
				${obj.dialogId + '_DlgObj'}, 
				"${mapping.lookup.table}", 
				['${mapping.lookup.getColumns.join("','")}'], 
				"${mapping.lookup.foreignKey}", 
				${mapping.lookup.primaryKey}, 
				${mapping.lookup.formatter}
			)`;
		}
		
		// If the mapping has a template already defined, use that instead of the one we have here
		if (mapping.template) {
			html += `{*assign [temp].formatted["${mapping.columnName}"] <gets> ${lookupVal ? lookupVal.substr(1) : '"undefined"'}}`;
			html += mapping.template;
			return;
		}
		let innerTemplate = lookupVal ? lookupVal : mapping.columnName;
		html += ('<div style="display: table-cell; ' + (mapping.width ? ('width: ' + mapping.width + ';') : '') + '">');
		html += '{' + innerTemplate + '}';
		html += "</div>";
	});
	
	// We only want to define one single element to be used as a list dropdown. 
	// If more are specified, we skip them and just use the first.
	let didDropdown = false;
	let dropDown = "";
	
	// For each button in our panel definition, consider their type and create a template button according to that definition
	GLOBAL_CONFIG[obj.stateInfo.panelType].buttons.forEach((item) => {
		if (item.buttonType == 'Open Panel') {
			html += buildButtonHtml(obj, listName, item, rowIdStr);
		} else if (item.buttonType == 'Dropdown' && !didDropdown) {
			// Add button html. Add dropdown div to a separate string that will be concatenated to html later.
		
			html += buildButtonHtml(obj, listName, item, rowIdStr);
		
			dropDown += `<div id = "${rowIdStr}" style = "display: none; table-layout: auto; border-spacing: 20px;">`;
			
			for (const btn of item.buttons) {
				dropDown += buildButtonHtml(obj, listName, btn, rowIdStr);
			}
					
			dropDown += `</div>`;
			didDropdown = true;
		}
	});
	
	// getEditImageHTML contains a reference to an Alpha icon that must be resolved by some preprocessing phase. 
	// It would appear that this file is not preprocessed, so we just generate it in a file that is and call it from here.
	html += `
		<div style="display: table-cell; width: 40px; text-align: right; vertical-align: middle;">
		<button  onclick="${obj.dialogId}_DlgObj.runAction('Open Detail View')">
			${getEditImageHtml()}
		</button>
		</div>
	</div>`;
	
	html += dropDown;
	return html;
}

