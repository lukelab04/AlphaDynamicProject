
const GLOBAL_CONFIG = {
	parent: null,
	parentObjName: "",
	CustomerPanel: {
		topLevel: true,
		title: "Customers",
		table: "Customer",
		serverSearch: true,
		paginate: {
			pageSize: 30,
		},
		buttons: [
			{
				buttonType: 'Open Panel',
				title: "Invoice Headers",
				typeToOpen: "InvoiceHeadersPanel",
				primaryKey: "CUSTOMER_ID",
				foreignKey: "CUSTOMER_ID"
			},
			{
				buttonType: 'Open Panel',
				title: "Static Panel",
				overrideAction: "openStaticPanel",
			}
		],
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
		buttons: [
			{
				buttonType: 'Dropdown',
				title: 'Related Items',
				buttons: [
					{
						buttonType: 'Open Panel',
						title: "Customer",
						typeToOpen: "CustomerPanel",
						primaryKey: "CUSTOMER_ID",
						foreignKey: "CUSTOMER_ID"
					},
					{
						buttonType: 'Open Panel',
						title: "Invoices",
						typeToOpen: "InvoiceItemPanel",
						primaryKey: "INVOICE_NUMBER",
						foreignKey: "INVOICE_NUMBER",
					}
				]
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
				lookup: {
					table: "Customer",
					primaryKey: "CUSTOMER_ID",
					foreignKey: "CUSTOMER_ID",
					getColumns: ["FIRSTNAME", "LASTNAME"],
					formatter: (row) => row['FIRSTNAME'] + ' ' + row['LASTNAME'],
				}
			}
		]
	},
	ProductPanel: {
		topLevel: true,
		title: "Products",
		table: "Product",
		serverSearch: true,
		buttons: [
			{
				buttonType: 'Open Panel',
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
				width: '20%;',
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
		topLevel: true,
		title: "Invoice Items",
		table: "Invoice_Items",
		serverSearch: true,
		buttons: [
			{
				buttonType: 'Open Panel',
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
				width: '30px',
			},
			{
				columnName: "PRODUCT_ID",
				displayName: "Product",
				inList: true,
				inDetailView: true,
				template:  '<div style="display: table-cell; vertical-align: middle; horizontal-align: middle; width: 60%">{[temp].formatted.PRODUCT_ID}</div>',
				lookup: {
					table: "Product",
					primaryKey: "PRODUCT_ID",
					foreignKey: "PRODUCT_ID",
					getColumns: ["DESCRIPTION"],
					formatter: (row) => row['DESCRIPTION']
				}
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



