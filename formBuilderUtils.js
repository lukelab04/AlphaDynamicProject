function renderForm(obj, formName, items) {
	obj.setJSONFormItems(formName, items);
	obj.getControl(formName)._formBoxSize = "";
	obj.resizeFormBoxes();
}


function JSONSearchFormBuilder(obj, formName, listName, dialogStyle) {
	let listObj = obj.getControl(listName);
	if (!listObj) {
		console.error('Could not get list control ' + listName);
		return;
	}

	if(obj.stateInfo.formWasRendered) return;
	obj.stateInfo.formWasRendered = true;
	
	let simpleSearchItems = [];
	for (item of GLOBAL_CONFIG[obj.stateInfo.panelType].mappings) {
		if (!item.inList) continue;
		let component = buildFormComponent(genInputOptionsForCol(item), item.columnName, item.displayName ? item.displayName : item.columnName);
		let separator = buildFormComponentSeparator();
		simpleSearchItems.push(component);
		simpleSearchItems.push(separator);
	}
	
	simpleSearchItems.push(
		buildFormButton((form) => simpleListSearch(obj, formName, listName), "Search", ""),
		buildFormButton((form) => clearSearch(obj, listName), "Clear", "")
	);
	
	let simpleSearchTab = buildFormTabPane(simpleSearchItems, "Search");
	let simpleSearchId = simpleSearchTab.id;
	
	let advancedSearchTab = buildFormTabPane([
			buildFormGroup([]),
			buildFormButton((form) => addQueryToAdvancedSearch(obj, formName, form), "Add", ""),
			buildFormButton((form) => advancedListSearch(obj, formName, listName), "Search", ""),
			buildFormButton((form) => clearSearch(obj, listName), "Clear", "")
		],
		"Advanced Search"
	);
	
	let form = buildFormBoilerplate([buildFormTabGroup([simpleSearchTab, advancedSearchTab], simpleSearchId, dialogStyle)]);
	
	obj.stateInfo.searchFormJSON = form;
	renderForm(obj, formName, form);
}


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


function genInputOptionsForCol(column) {
	let editType = column.editType ? column.editType : "text";
	let outputObj = {
		"control": {
			"placeholder": "",
			"width": "100%"
		}
	};
	
	
	// Potentially switch on textarea/textbox based on column.length field
	
	
	/* Number intermediate types are non-integers
	if(alphaType == 'N' && column.intermediateType != 'Number' && column.intermediateType != 'Double' && column.intermediateType != 'Bit') {
		outputObj.control.layout = "middle";
		outputObj.control.flow = "ltr";
		outputObj.control.amount = 1;
		outputObj.control.min = 0;
		outputObj.control.max = 100000;
		outputObj.type = 'step-number';
	} */
	
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


var UniqueID = 1;

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

function buildSimpleDropdown(itemVals, defaultChoice, varName, onChange, itemDisplays = null) {
	let src = [];
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