
const GLOBAL_CONFIG = {
	parent: null,
	parentObjName: "",
	CustomerPanel: {
		title: "Customers",
		table: "Customer",
		serverSearch: false,
		related: [{
			title: "Invoice Headers",
			typeToOpen: "InvoiceHeadersPanel",
			primaryKey: "CUSTOMER_ID",
			foreignKey: "CUSTOMER_ID"
		},
		{
			title: "Static Panel",
			overrideAction: "openStaticPanel",
		}],
		mappings: [
			{
				columnName: "CUSTOMER_ID",
				inList: false,
				inDetailView: false,
			},
			{
				columnName: "FIRSTNAME",
				displayName: "First Name",
				inList: true,
				inDetailView: true,
			},
			{
				columnName: "LASTNAME",
				displayName: "Last Name",
				inList: true,
				inDetailView: true,
			},
			{
				columnName: "EMAIL",
				displayName: "Email",
				inList: true,
				inDetailView: true,
			},
		]
	},
	InvoiceHeadersPanel: {
		title: "Invoice Headers",
		table: "Invoice_Header",
		serverSearch: false,
		related: [
			{
				title: "Customer",
				typeToOpen: "CustomerPanel",
				primaryKey: "CUSTOMER_ID",
				foreignKey: "CUSTOMER_ID"
			},
		],
		mappings: [
			{
				columnName: "INVOICE_NUMBER",
				inList: false,
				inDetailView: false,
			},
			{
				columnName: "INV_DATE",
				displayName: "Date",
				inList: true,
				inDetailView: true,
				editType: 'datetime',
				template: '<div style="display: table-cell; horizontal-align: middle;">{INV_DATE:dateString("MM/dd/yyyy", "MM/dd/yyyy")}</div>'
			},
			{
				columnName: "CUSTOMER_",
				displayName: "Customer",
				inList: true,
				inDetailView: true,
			}
		]
	},
	ProductPanel: {
		title: "Products",
		table: "Product",
		serverSearch: true,
		related: [],
		mappings: [
			{
				columnName: "PRODUCT_ID",
				inList: false,
				inDetailView: false,
			},
			{
				columnName: "DESCRIPTION",
				displayName: "Description",
				inList: true,
				inDetailView: true,
				width: '70%;',
			},
			{
				columnName: "COST",
				displayName: "Cost",
				inList: true,
				inDetailView: true,
				template: '<div style="display: table-cell; vertical-align: middle; horizontal-align: middle;">${COST}</div>'
			},
			{
				columnName: "RETAIL",
				displayName: "Retai",
				inList: true,
				inDetailView: true,
				template:  '<div style="display: table-cell; vertical-align: middle; horizontal-align: middle;">${RETAIL}</div>'
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

