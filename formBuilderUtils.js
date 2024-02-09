function JSONSearchFormBuilder(obj, formName, listName) {
	let listObj = obj.getControl(listName);
	if (!listObj) {
		console.error('Could not get list control ' + listName);
		return;
	}

	if(obj.stateInfo.formWasRendered) return;
	obj.stateInfo.formWasRendered = true;
	
	let form = makeForm(obj);
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
	
	let form = makeForm(obj, false);
	let selected = listObj.selectionData[0];
	renderForm(obj, formName, form);
	obj.setValue(formName, selected);
}

function JSONRelatedFieldsFormBuilder(obj, formName, listName) {
	let listObj = obj.getControl(listName);
	if (!listObj) {
		console.error('Could not get list control ' + listName);
		return;
	}
	let relatedItems = GLOBAL_CONFIG[obj.getSessionVariable("PANELTYPE")].related;
	let allItems = [
		buildFormComponent({
			type: 'button',
			primaryKey: false,
			control: {
				"layout": "text",
				"html": "<span class = \"\" style=\"\"> View Details</span>",
				"icon": "",
				"onClick": function() {obj.runAction('Open Detail View');}
			}
		},
		"",
		"", 
		false
	)];
	
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
					openPanelWithParams(item.typeToOpen, filter, GLOBAL_CONFIG.parent);
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

function makeForm(obj, includeSeparators = true) {
	let primaryKey = obj.stateInfo.schema.primaryKey;
		
	let allItems = [];
	for (item of obj.stateInfo.schema.jsonOutput.column) {
		let component = buildFormComponent(genInputOptionsForCol(item, primaryKey), item.name, item.name);
		let separator = buildFormComponentSeparator();
		allItems.push(component);
		if (includeSeparators) {
			allItems.push(separator);
		}
	}
	let boilerplate = buildFormBoilerplate(allItems);
	return boilerplate;
}

function genInputOptionsForCol(column, primaryKey) {
	let alphaType = column.alphaType.toUpperCase();
	let outputObj = {
		"control": {
			"placeholder": "",
			"width": "100%"
		}
	};
	
	
	// Potentially switch on textarea/textbox based on column.length field
	
	if (column.name === primaryKey) outputObj.primaryKey = true;
	
	
	// Number intermediate types are non-integers
	if(alphaType == 'N' && column.intermediateType != 'Number' && column.intermediateType != 'Double' && column.intermediateType != 'Bit') {
		outputObj.control.layout = "middle";
		outputObj.control.flow = "ltr";
		outputObj.control.amount = 1;
		outputObj.control.min = 0;
		outputObj.control.max = 100000;
		outputObj.type = 'step-number';
	} 
	
	// Datetime
	else if (alphaType == 'T') {
		outputObj.control.picker = {"type": "date-time", "format": "MM/dd/yyyy 0h:0m:0s AM" };
		outputObj.control.behavior = {"show": {"mode": ""}};
		outputObj.type = 'picker';
	}
	
	// Date only
	else if (alphaType == 'D') {
		outputObj.control.picker = {"type": "date", "format": "MM/dd/yyyy" };
		outputObj.control.behavior = {"show": {"mode": ""}};
		outputObj.type = 'picker';
	}
	
	// Time only
	else if (alphaType == 'Y') {
		outputObj.control.picker = {"type": "date-time", "format": "0h:0m:0s AM" };
		outputObj.control.behavior = {"show": {"mode": ""}};
		outputObj.type = 'picker';
	}
	
	// Boolean 
	else if (column.intermediateType == 'Bit') {
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
	
	else {
		outputObj.type = 'edit';
	}

	return outputObj;

}

// Possible Types
// 'edit' (textbox)

var UniqueID = 1;

function buildFormComponent(inputOptions, varBinding, labelName, twoColLayout = true) {
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
		"show": function(dObj) { return !(inputOptions.primaryKey); },
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

function buildFormComponentSeparator() {
	return {
		"type": "html",
		"container": {
			"style": "height: 0px; flex-basis: 100%; overflow:hidden;",
			"className": " "
		}
	}
}

function renderForm(obj, formName, items) {
	obj.setJSONFormItems(formName, items);
	obj.getControl(formName)._formBoxSize = "";
	obj.resizeFormBoxes();
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

function fillAjaxCallbackVariable(obj, callback) {
	let tableName = GLOBAL_CONFIG[obj.getSessionVariable("PANELTYPE")].table;
	obj.ajaxCallback(
		"",
		"",
		"getSchemaAjaxCallback",
		"",
		"tableName=" + tableName,
		{
			onComplete: callback
		}
	)
}
