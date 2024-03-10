
// Given a form, set all of its items and make sure it is sized correctly
function renderForm(obj, formName, items) {
	obj.setJSONFormItems(formName, items);
	obj.getControl(formName)._formBoxSize = "";
	obj.resizeFormBoxes();
}

// Build the search form for the generic list
// Form is in a tabbed layout, with an advanded search and a simple search
// Advanced search supports adding arbitrary queries about the data
// Simple search supports searching by equality of columns
function JSONSearchFormBuilder(obj, formName, listName, dialogStyle) {
	let listObj = obj.getControl(listName);
	if (!listObj) {
		console.error('Could not get list control ' + listName);
		return;
	}
	
	// Pointless to render this form twice, but due to issues with the DOM not being loaded, 
	// it is easier to just call this function whenever the search icon is clicked and then 
	// early return every time but the first
	if(obj.stateInfo.formWasRendered) return;
	obj.stateInfo.formWasRendered = true;
	
	// If the mapping specifies that a particular column is in the list, then we should be able to search by it.
	// So we loop through mappings and add the desired ones to our array.
	let simpleSearchItems = [];
	for (item of GLOBAL_CONFIG[obj.stateInfo.panelType].mappings) {
		if (!item.inList) continue;
		// Build an input box who's type matches the column type
		let component = buildFormComponent(genInputOptionsForCol(item), item.columnName, item.displayName ? item.displayName : item.columnName);
		let separator = buildFormComponentSeparator();
		simpleSearchItems.push(component);
		simpleSearchItems.push(separator);
	}
	
	// Add our search and clear items
	simpleSearchItems.push(
		buildFormButton((form) => simpleListSearch(obj, formName, listName), "Search", ""),
		buildFormButton((form) => clearSearch(obj, listName), "Clear", "")
	);
	
	// Create a tab pane for the simple search
	let simpleSearchTab = buildFormTabPane(simpleSearchItems, "Search");
	let simpleSearchId = simpleSearchTab.id;
	
	// The advanced tab should have buttons for Add, Search, and Clear, but does not have any queries defined yet
	let advancedSearchTab = buildFormTabPane([
			buildFormGroup([]),
			buildFormButton((form) => addQueryToAdvancedSearch(obj, formName, form), "Add", ""),
			buildFormButton((form) => advancedListSearch(obj, formName, listName), "Search", ""),
			buildFormButton((form) => clearSearch(obj, listName), "Clear", "")
		],
		"Advanced Search"
	);
	
	// Create and render form
	let form = buildFormBoilerplate([buildFormTabGroup([simpleSearchTab, advancedSearchTab], simpleSearchId, dialogStyle)]);
	// Save the form JSON so that we can "hot reload" when we add queries (more in addQueryToAdvancedSearch function)
	obj.stateInfo.searchFormJSON = form;
	renderForm(obj, formName, form);
}




function addQueryToAdvancedSearch(obj, formName, formObj) {
	// Need to store the number of advanced queries per search form. 
	// We need to know the precise index in order to label them.
	if (!obj.stateInfo.numAdvancedQueries) obj.stateInfo.numAdvancedQueries = 0;

	let form = obj.getControl(formName);
	let oldFormVals = obj.getValue(formName);
	// We save the definition of the form so we can repopulate it after refreshing
	let currDef = form.definition;
	let countStr = (obj.stateInfo.numAdvancedQueries++).toString();
	let items = currDef.form
		.items[0]	// Top level group
		.items[0]	// Top level section
		.items[0]	// Tab band
		.items[1]	// Advanced search
		.items[0]	// Advanced search queries group
		.items;		// Advanced search queries
			
	let currItemIndex = items.length;
	
	let queryType = buildSimpleDropdown(['AND', 'OR'], 'AND', '*querytype_' + countStr);
	
	// Our dropdown can have Display text and Value text. If the config object specifies display text, we should use it.
	let colDisp = [];
	let colVals = [];
	GLOBAL_CONFIG[obj.stateInfo.panelType].mappings.forEach((entry) => {
		colVals.push(entry.columnName);
		colDisp.push(entry.displayName ? entry.displayName : entry.columnName);
	});
	
	// Our form switches the operators we are allowed to use upon selection of different columns. 
	// To make this work, we store all possible editor input types in a map. 
	// We capture this map in a closure and, at runtime, switch out the input type for the desired one.
	
	let editInputs = {};
	let colNameToEditType = {};
	let firstEditType = '';
	
	// Loop through mappings and create input boxes for each type
	GLOBAL_CONFIG[obj.stateInfo.panelType].mappings.forEach((entry, i) => {
		let editType = entry.editType ? entry.editType : 'edit';
		colNameToEditType[entry.columnName] = editType;
	
		if (i == 0) firstEditType = editType;
		// If we already made an editor for this type, return
		if (editInputs[editType]) return;
		
		// Switch on edit type to create the correct dropdown and editor
		let operators;
		if (editType == 'date' || editType == 'datetime' || editType == 'time')
			operators = buildSimpleDropdown(
				['=', '!=', '<', '>'],
				'Equals', '*queryop_' + countStr, null,
				['Equals', 'Not Equals', 'Before', 'After']
			);
		else if (editType == 'bool') 
			operators = buildSimpleDropdown(
				['='],
				'Equals', '*queryop_' + countStr, null,
				['Equals']
			);
		else operators = buildSimpleDropdown(
			['=', '!=', 'CONTAINS', 'NOT CONTAINS'],
			'Equals', '*queryop_' + countStr, null,
			['Equals', 'Not Equals', 'Contains', 'Does Not Contain']
		);
		
		// Create the component and add it to the map
		let component = buildFormComponent(genInputOptionsForCol(entry), '*queryval_' + countStr, null, false, (dObj) => {return true;});
		editInputs[editType] = {"editor": component, "operators": operators};
	});
	
	// Create the dropdown. Upon selecting an item, invoke a function to switch out the input form box so that the type 
	// matches the data we are editing.
	let colName = buildSimpleDropdown(colVals, colVals[0], '*colname_' + countStr, (dObj) => {
		let currDef = form.definition;
		let queryItems = currDef.form
			.items[0]	// Top level group
			.items[0]	// Top level section
			.items[0]	// Tab band
			.items[1]	// Advanced search
			.items[0]	// Advanced search queries group
			.items 		// Queries
		
		// Edit box is third item in row, so index 2 (assuming this is the first row)
		let editorInputPosition = 2;
		// Operator position is second in row, so index 1
		let operatorPosition = 1;
		// Not first row? Adjust our indices by 1
		if(currItemIndex != 0) {
			editorInputPosition = 3;
			operatorPosition = 2;
		}
		
		// Swap out our editor and operators and refresh
		queryItems[currItemIndex].items[editorInputPosition] = editInputs[colNameToEditType[dObj.item.data]].editor;
		queryItems[currItemIndex].items[operatorPosition] = editInputs[colNameToEditType[dObj.item.data]].operators;
		form.load(currDef, dObj.form.data);
		form.refresh();
	}, colDisp);
	
	
	// Build a form component based on the components defined above and add it to the items in our form
	let newQueryJSON = buildFormGroup([queryType, colName, editInputs[firstEditType].operators, editInputs[firstEditType].editor]);
	items.push(newQueryJSON);
	
	// The first item does not have a query type, so we should get rid of it.
	if(items[0].items[0].data.from.startsWith('*querytype')) {
		items[0].items = items[0].items.slice(1);
	}
	
	// All subsequent items should have a query type, so we should add it if necessary
	for(let i = 1; i < items.length; i++) {
		if (!items[i] || !items[i].items) continue;
		if (items[i].items[0].data.from.startsWith('*querytype')) continue;
		else items[i].items.unshift(queryType);
	}
	
	// Reload and refresh form
	form.load(currDef, {});
	form.refresh();
	obj.setValue(formName, oldFormVals);
	// obj.getControl(formName)._formBoxSize = "";
	// obj.resizeFormBoxes();
}



// Build the detail view for our list 
// Only items that are specified to be in the detail view will appear here 
// Input editor types will match the typed defined in the config object
function JSONDetailFormBuilder(obj, formName, listName) {
	let listObj = obj.getControl(listName);
	if (!obj.stateInfo.schema) {
		console.error('The list schema has not been fetched yet (is there connection to the server?)');
		return;
	}
	if (!listObj) {
		console.error('Could not get list control ' + listName);
		return;
	}
	
	// Loop through all items that we want in the detail view and build an input box matching its editor type
	let allItems = [];
	for (item of GLOBAL_CONFIG[obj.stateInfo.panelType].mappings) {
		if (!item.inDetailView) continue;
		let component = buildFormComponent(genInputOptionsForCol(item), item.columnName, item.displayName ? item.displayName : item.columnName);
		allItems.push(component);
	}
	let form = buildFormBoilerplate(allItems);
	
	let selected = listObj.selectionData[0];
	renderForm(obj, formName, form);
	obj.setValue(formName, selected);
}


// Utility function to map a configuration object mapping field to a set of options suitable for buildFormComponent
function genInputOptionsForCol(column) {
	let editType = column.editType ? column.editType : "text";
	let outputObj = {
		"control": {
			"placeholder": "",
			"width": "100%"
		}
	};
	
	
	if (editType == 'datetime') {
		outputObj.control.picker = {"type": "date-time", "format": "yyyy-MM-dd hh:mm:ss" };
		outputObj.control.behavior = {"show": {"mode": ""}};
		outputObj.type = 'picker';
	}
	
	else if (editType == 'date') {
		outputObj.control.picker = {"type": "date", "format": "yyyy-MM-dd" };
		outputObj.control.behavior = {"show": {"mode": ""}};
		outputObj.type = 'picker';
	}
	
	else if (editType == 'time') {
		outputObj.control.picker = {"type": "date-time", "format": "hh:mm:ss" };
		outputObj.control.behavior = {"show": {"mode": ""}};
		outputObj.type = 'picker';
	}
	
	else if (editType == 'bool') {
		outputObj.type = 'checkbox';
		outputObj.control.icons = {
			"on": "svgIcon=#alpha-icon-checkRounded:icon,24{}",
			"off": "svgIcon=#alpha-icon-squareRounded:iconSizeable,24{stroke:black; }"
		};
		outputObj.control.values = {
			"on": true,
			"off": false
		};
	}
	
	else if (editType == 'dropdown') {
		let data = column.options ? column.options : [];
		outputObj.type = 'picker';
		let src = [];
		data.forEach((e) => {
			src.push({"text": e, "value": e});		
		});
		
		outputObj.control.data = {
			"src": src,
			"map": ["value", "text"]
		};
	}
	
	else {
		outputObj.type = 'edit';
	}

	return outputObj;

}

// Each form item needs a unique ID that we must generate at runtime
var UniqueID = 1;

// Given some information about a form component, create the JSON Form definition
// inputOptions -- result of genInputOptionsForCol
// varBinding -- string, variable name that this component is bound to
// labelName -- string, label that will appear above input
// twoColLayout -- should this component align itself to a two column layout?
// showHideFn -- return true/false to show or hide this component
function buildFormComponent(inputOptions, varBinding, labelName, twoColLayout = true, showHideFn = null) {
	let secLayout;
	if (twoColLayout) {
		secLayout = {
			"S": {
				"columns": 1,
				"width": 1,
				"height": 1,
				"position": "auto",
				"alignself": "start",
				"indent": true,
				"border": false
			},
			"M": {
				"columns": 1,
				"width": 1,
				"height": 1,
				"position": "Auto",
				"alignself": "start",
				"indent": false,
				"border": true
			},
			"L": {
				"columns": 1,
				"width": 1,
				"height": 1,
				"position": "auto",
				"alignself": "start",
				"indent": true,
				"border": false
			},
			"XL": {
				"columns": 1,
				"width": 1,
				"height": 1,
				"position": "auto",
				"alignself": "start",
				"indent": true,
				"border": false
			}
		};
	} else {
		secLayout = {};
	}
	
	// Most components should have a label above them. 
	// Buttons are a little different.
	let layout = "label-above";
	if (inputOptions.type === 'button') {
		layout = '{content}';
	}
	
	return {
		"sectionLayout": layout,
		"type": inputOptions.type,
		"id": "RUNTIME_FORM_ITEM_" + (UniqueID++).toString(),
		"show": showHideFn,
		"description": {
			"text": "",
			"style": ";",
			"className": ""
		},
		"data": {
			"from": varBinding,
			"defaultValue": "",
			"ensure": true,
			"validate": function(path,value) { ; }
		},
		"label": {
			"text": labelName,
			"icon": "",
			"style": ";",
			"className": ""
		},
		"layout": layout,
		"control": inputOptions.control,
		"container": {
			"style": ";flex:1 1;",
			"className": ""
		}
	};
}

// Create a group containing form items
function buildFormGroup(items) {
	return {
		"type": "group", 
		"id": "RUNTIME_FORM_ITEM_" + (UniqueID++).toString(),
		"container": {
			"style": "display: flex; flex-direction: row; flex-flow: wrap",
		},
		"layout": "",
		"items": items,
	}
}

// Create a tab group containing form items
// defaultId -- string, points to ID of the tab item to display by default
// dialogStyle -- dialog.style, must be passed as a parameter
function buildFormTabGroup(items, defaultId, dialogStyle) {
	return {
		"type": "tab", 
		"id": "RUNTIME_FORM_ITEM_" + (UniqueID++).toString(),
		"container": {
			"theme": dialogStyle,
			"tabband": {
				"tab": {"initial": defaultId }
			}
		},
		"layout": "",
		"items": items,
	}
}

// Make a tab pane containing specified items with specified title
function buildFormTabPane(items, title) {
	let id = "RUNTIME_FORM_ITEM_" + (UniqueID++).toString();
	return {
		"type": "pane", 
		"id": id,
		"container": {
			"title": title,
			"value": id,
		},
		layout: "",
		items: items,
	}
}

// Build form dropdown 
// itemVals -- array of strings, "backend" values for dropdown choices
// defaultChoice -- string
// varName -- string, variable binding for dropdown 
// onChange -- function, (value) => ...
// itemDisplays -- array of strings, displayed to user as dropdown choices
function buildSimpleDropdown(itemVals, defaultChoice, varName, onChange, itemDisplays = null) {
	let src = [];
	// If itemDisplays are specified, use them. Otherwise default to itemVals.
	if (!itemDisplays || itemVals.length != itemDisplays.length) {
		itemVals.forEach((e) => {
			src.push({"text": e, "value": e});		
		});
	} else {
		itemDisplays.map((e, i) => {
			src.push({"text": e, "value": itemVals[i]});
		});
	}

	
	return {
		"type": "picker",
		"sectionLayout": {},
		"show": () => {return true;},
		"description": {"text": "", "style": ";", className: ""},
		"layout": "label-before",
		"id": "RUNTIME_FORM_ITEM_" + (UniqueID++).toString(),
		"data": {"from": varName, "blank": defaultChoice},
		"control": {
			"placeholder": "",
			"width": "100%",
			"data": {
				"src": src,
				"map": ['value', 'text']
			},
			"onChange": onChange,
		},
		"container": {
			"style": "flex: 1 1;"
		}
	};
}

function buildFormComponentSeparator() {
	return {
		"type": "html",
		"container": {
			"style": "height: 0px; flex-basis: 100%; overflow:hidden;",
			"className": " "
		}
	}
}

// What it says on the tin
function buildFormButton(onClick, btnText, btnIcon) {
	let layout = "text";
	if (btnText && btnIcon) layout = "icon text";
	else if (btnIcon) layout = "icon";
	else layout = "text";
	return {
		"type": "button",
		"id": "RUNTIME_FORM_ITEM_" + (UniqueID++).toString(),
		"control": {
			"layout": layout,
			"html": '<span class = "" style = "">' + btnText + "</span>",
			"icon": btnIcon,
			"onClick": onClick,
		},
		"container": {
			"style": "display: inline",
			"className": ""
		},
		"layout": "{content}",
	}
}

// Build repeating section containing specified items
function buildFormRepeating(items) {
	return {
		"type": "repeat",
		"id": "RUNTIME_FORM_ITEM_" + (UniqueID++).toString(),
		"container": {
			"row": {
				"style": "width: 100%;;display:flex; flex-direction:row; flex-flow:wrap;",
				"header": {
					"html": "",
					"style": "width: 100%;"
				},
				"wrapper": {
					"tag": "",
					"className": "",
					"style": ""
				},
				"footer": {
					"html": "<repeat-remove/> <repeat-add/>",
					"style": "text-align:right; width: 100%;"
				}
			},
			"style": ";display:flex; flex-direction:row; flex-flow:wrap; ",
			"header": {
				"html": "",
				"style": "width: 100%;"
			},
			"footer": {
				"html": "",
				"style": "text-align:right; width: 100%;"
			},
			"empty": {
				"html": "<repeat-add/>",
				"style": "width: 100%;"
			},
			"buttons": {
				"add": {
					"html": "",
					"icon": "svgIcon=#alpha-icon-addCircleBorder:icon",
					"layout": "icon",
					"theme": "",
					"tip": ""
				},
				"remove": {
					"html": "",
					"icon": "svgIcon=#alpha-icon-removeCircleBorder:icon",
					"layout": "icon",
					"theme": "",
					"tip": ""
				},
			}
		},
		"layout": "",
		"items": items,
	}
}

// All forms have a wrapper around them. 
// This function takes all form items, wraps them in the wrapper, and returns that.
function buildFormBoilerplate(items, twoColLayout = true) {

	let sectionLayout = {};
	if (twoColLayout) {
		sectionLayout = {
			"S": {
				"columns": 1,
				"width": -1,
				"height": 1,
				"position": "auto",
				"alignself": "start",
				"indent": true,
				"border": false
			},
			"M": {
				"columns": 2,
				"width": -1,
				"height": 1,
				"position": 2,
				"alignself": "start",
				"indent": false,
				"border": true
			},
			"L": {
				"columns": 2,
				"width": -1,
				"height": 1,
				"position": "auto",
				"alignself": "end",
				"indent": true,
				"border": false
			},
			"XL": {
				"columns": 4,
				"width": -1,
				"height": 1,
				"position": "auto",
				"alignself": "center",
				"indent": true,
				"border": false
			}
		};
	}

	return [{
		"type": "group",
		"id": "FAKEGROUP",
		"container": {
			"style": "display:flex; flex-direction:row;;display:flex; flex-direction:row; flex-flow:wrap; "
		},
		"layout": "",
		"items": [{
			"type": "group",
			"id": "SECTION_1",
			"container": {
				"style": ";display:grid;width:100%;",
			},
			"data": {
				"from": ""
			},
			"layout": "",
			"sectionLayout": sectionLayout,
			"subtype": "section",
			"items": items
		}]
	}];
}