
const GLOBAL_CONFIG = {
	parent: null,
	parentObjName: "",
	CustomerPanel: {
		topLevel: true,
		title: "Customers",
		table: "Customer",
		serverSearch: false,
		paginate: {
			pageSize: 10,
		},
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
		topLevel: true,
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
			{
				title: "Invoices",
				typeToOpen: "InvoiceItemPanel",
				primaryKey: "INVOICE_NUMBER",
				foreignKey: "INVOICE_NUMBER",
			}
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
				columnName: "CUSTOMER_ID",
				displayName: "Customer",
				inList: true,
				inDetailView: true,
			}
		]
	},
	ProductPanel: {
		topLevel: true,
		title: "Products",
		table: "Product",
		serverSearch: true,
		related: [
			{
				title: "Invoices",
				typeToOpen: "InvoiceItemPanel",
				primaryKey: "PRODUCT_ID",
				foreignKey: "PRODUCT_ID",
			}
		],
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
	InvoiceItemPanel: {
		topLevel: false,
		title: "Invoice Items",
		table: "Invoice_Items",
		serverSearch: true,
		related: [
			{
				title: "Product",
				typeToOpen: "ProductPanel",
				primaryKey: "PRODUCT_ID",
				foreignKey: "PRODUCT_ID"
			},
		],
		mappings: [
			{
				columnName: "ID",
				inList: false,
				inDetailView: false,
			},
			{
				columnName: "INVOICE_NUMBER",
				displayName: "Invoice Number",
				inList: true,
				inDetailView: true,
			},
			{
				columnName: "PRICE",
				displayName: "Price",
				inList: true,
				inDetailView: true,
				template:  '<div style="display: table-cell; vertical-align: middle; horizontal-align: middle;">${PRICE}</div>'
			},
			{
				columnName: "QUANTITY",
				displayName: "Quantity",
				inList: true,
				inDetailView: true,
			}
		]
	}
}



