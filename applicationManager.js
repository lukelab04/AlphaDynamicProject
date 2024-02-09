
const GLOBAL_CONFIG = {
	parent: null,
	"CustomerPanel": {
		"title": "Customers",
		"table": "customers",
		"related": [{
			"title": "Orders",
			"typeToOpen": "OrderPanel",
			"primaryKey": "id",
			"foreignKey": "CustomerID"
		}]
	},
	"OrderPanel": {
		"title": "Orders",
		"table": "orders",
		"related": [
			{
				"title": "Products",
				"typeToOpen": "ProductPanel",
				"primaryKey": "ProductID",
				"foreignKey": "id"
			},
			{
				"title": "Customers",
				"typeToOpen": "CustomerPanel",
				"primaryKey": "CustomerID",
				"foreignKey": "id"
			},
			{
				"title": "Related",
				"typeToOpen": "RecurringPanel",
				"primaryKey": "id",
				"foreignKey": "OrderID"
			}
		
		]
	},
	"ProductPanel": {
		"title": "Products",
		"table": "products",
		"related": [{
			"title": "Orders",
			"typeToOpen": "OrderPanel",
			"primaryKey": "id",
			"foreignKey": "ProductID"
		}]
	},
	"RecurringPanel": {
		"title": "Recurring",
		"table": "recurring",
		"related": []
	}
}


let FILTER = "";
let PANELTYPE = "";
let TITLE = "";

function getFilter() { return FILTER; }
function getPanelType() { return PANELTYPE; }
function getTitle() { return TITLE; }

function openPanelWithParams(type, filter, title, parentObj) {
	FILTER = filter;
	PANELTYPE = type;
	TITLE = title;
	parentObj.runAction("Add Panel");
}

function openBasePanelWithParams(type, filter, title, parentObj) {
	FILTER = filter;
	PANELTYPE = type;
	TITLE = title;
	parentObj.runAction("Add Panel No Close");
}

var gen_alias_count = 0;
function GEN_ALIAS() {
	gen_alias_count += 1;
	return "AUTO_GEN_ALIAS_" + gen_alias_count.toString();
}

