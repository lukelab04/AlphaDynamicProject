function buildListFromStoredSchema(obj, listName) {
	let schema = obj.stateInfo.schema;
	let tableName = GLOBAL_CONFIG[obj.stateInfo.panelType].table;

	// We have to heavily escape brackets to avoid template errors and allow us to pass this around in a session variable.
	// We unescape those brackets here to correctly parse the JSON.
	let filters = obj.stateInfo.filter;
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
				let cols = [];
				GLOBAL_CONFIG[obj.stateInfo.panelType].mappings.forEach((mapping) => {
					if (!mapping.inList) return;
					cols.push({
						type: 'field',
						name: mapping.columnName,
						heading: mapping.displayName == undefined ? mapping.columnName : mapping.displayName,
						width: mapping.width? mapping.width : 'flex(1)',
					})
				});
			
				let ops = {
					template: generateListTemplate(obj, listName), 
					style: 'template',
					columns: cols,
					flagIncludeColumnObjects: true,
					
				};
				
				let colDef = [];
				cols.forEach((c) => {
					colDef.push({
						header: {html: `<div style="width: ${c.width}"> ${c.heading} </div>`},
						data: {
							template: '<span id="' + listObj.dialogId + '.' + listName.toUpperCase() + '.' + c.name.toUpperCase() + '.I.{*dataRow}">{' + c.name + '}</span>&nbsp;'
						},
						order: c.name,
						width: "250px",
						resize: true,
					});
				});
				
				
				obj.setListColumnsAndPopulate(listName, obj.stateInfo.allListData, ops);
				if (obj.stateInfo.allListData.length == 0) {
					console.log("no more");
					return;
				}
				
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

// This will only have an effect if list style is 'template'.
function generateListTemplate(obj, listName) {
	let options = GLOBAL_CONFIG[obj.stateInfo.panelType].mappings;
	let html = '<div style="display: table; width: 100%; table-layout: fixed;">';
	options.forEach((mapping) => {
		if (!mapping.inList) return;
		if (mapping.template) {
			html += mapping.template;
			return;
		}
		html += ('<div style="display: table-cell; ' + (mapping.width ? ('width: ' + mapping.width + ';') : '') + '">');
		html += '{' + mapping.columnName + '}';
		html += "</div>";
	});
	
	// Seems like Alpha does not one, but *two* template filling operations on this bit of code. 
	// Each operation works slightly differently. In order to include curly brackets, we need 
	// to succesfully evade both operations. One is easier to evade -- the escape at the beginning of 
	// the line does that. But that pass removes escape backslash characters (I think)! So to pass the next 
	// one and keep our brackets, we need to DOUBLE escape them.
	GLOBAL_CONFIG[obj.stateInfo.panelType].related.forEach((item) => {
		let js = "";
	
		if (item.overrideAction) {
			js = `${GLOBAL_CONFIG.parentObjName}.runAction('${item.overrideAction}')`;
		} else {
			let filterCol = item.foreignKey;
			let filterVal = obj.dialogId + "_DlgObj.getControl('" + listName + "').selectionData[0]['" + item.primaryKey + "']";
			js = `<escape<
				let filter = [{'columnName': '${filterCol}', 'columnVal': ${filterVal}}];
				openPanelWithParams('${item.typeToOpen}', filter, '${item.title}', ${GLOBAL_CONFIG.parentObjName});
			>>`;
			
			js = js.replace(new RegExp('\n','g'), ' ');
		}
		
		html += `
			<div style = "display: table-cell; text-align: center; vertical-align: middle;">
				<button onclick="${js}">
					<p>${item.title}</p>
				</button>
			</div>
		`;
	});

	html += `
		<div style="display: table-cell; width: 40px; text-align: right; vertical-align: middle;">
		<button  onclick="${obj.dialogId}_DlgObj.runAction('Open Detail View')">
			${getEditImageHtml()}
		</button>
		</div>
	</div>`;
	return html;
}
function JSONRelatedFieldsFormBuilder(obj, formName, listName) {

	relatedItems.forEach((item) => {
		allItems.push(buildFormComponent({
			type: 'button',
			primaryKey: false,
			control: {
				"layout": "text",
				"html": "<span class = \"\" style=\"\">" + item.title + "</span>",
				"icon": "",
				"onClick": function() {
					let filter = item.foreignKey + " = " + listObj.selectionData[0][item.primaryKey];
					openPanelWithParams(item.typeToOpen, filter, item.title, GLOBAL_CONFIG.parent);
				}
			}
		},
		"",
		"",
		false
		));
		
		allItems.push(buildFormComponentSeparator());
	})
	
	let form = buildFormBoilerplate(allItems, false);
	renderForm(obj, formName, form);
}
