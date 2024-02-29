
const GLOBAL_CONFIG = {
	parent: null,
	parentObjName: "",
	CustomerPanel: {
		title: "Customers",
		table: "customers",
		serverSearch: false,
		related: [{
			title: "Orders",
			typeToOpen: "OrderPanel",
			primaryKey: "id",
			foreignKey: "CustomerID"
		},
		{
			title: "Static Panel",
			overrideAction: "openStaticPanel",
		}],
		mappings: [
			{
				columnName: "id",
				inList: false,
				inDetailView: false,
			},
			{
				columnName: "FirstName",
				displayName: "First Name",
				inList: true,
				inDetailView: true,
			},
			{
				columnName: "LastName",
				displayName: "Last Name",
				inList: true,
				inDetailView: true,
			},
			{
				columnName: "Email",
				displayName: "Email",
				inList: true,
				inDetailView: true,
			},
		]
	},
	OrderPanel: {
		title: "Orders",
		table: "orders",
		serverSearch: false,
		related: [
			{
				title: "Products",
				typeToOpen: "ProductPanel",
				primaryKey: "ProductID",
				foreignKey: "id"
			},
			{
				title: "Customers",
				typeToOpen: "CustomerPanel",
				primaryKey: "CustomerID",
				foreignKey: "id"
			},
		],
		mappings: [
			{
				columnName: "id",
				inList: false,
				inDetailView: false,
			},
			{
				columnName: "Quantity",
				inList: true,
				inDetailView: true,
			},
			{
				columnName: "OrderDate",
				displayName: "Order Date",
				inList: true,
				inDetailView: true,
				editType: 'datetime',
			}
		]
	},
	ProductPanel: {
		title: "Products",
		table: "products",
		serverSearch: true,
		related: [{
			title: "Orders",
			typeToOpen: "OrderPanel",
			primaryKey: "id",
			foreignKey: "ProductID"
		}],
		mappings: [
			{
				columnName: "id",
				inList: false,
				inDetailView: false,
			},
			{
				columnName: "ProductName",
				displayName: "Product Name",
				inList: true,
				inDetailView: true,
			},
			{
				columnName: "WholesaleCost",
				displayName: "Wholesale Cost",
				inList: true,
				inDetailView: true,
				template: '<div style="display: table-cell; vertical-align: middle; horizontal-align: middle;">${WholesaleCost}</div>'
			},
			{
				columnName: "RetailPrice",
				displayName: "Retail Price",
				inList: true,
				inDetailView: true,
			}
		]
	},
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

