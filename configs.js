let CUSTOMER_CONFIG = {
    "name": "Customers",
    "dataSource": {
        "type": "sql",
        "table": "Customer"
    },
    "searchOptions": {
        "serverSearch": true,
        "advancedSearch": true,
        "onlyInclude": [
            "FIRSTNAME",
            "LASTNAME",
            "EMAIL",
            "SHIP_SAME",
            "COMPANY"
        ]
    },
    "buttons": [
        {
            "title": "Open Invoices",
            "columnTitle": "Customer Invoices",
            "onClick": "(list) => {\n                let filters = list.makeFilterFromSelected('CUSTOMER_ID', 'CUSTOMER_ID');\n                let name = list.selection();\n                name = name['FIRSTNAME'] + ' ' + name['LASTNAME'];\n                openNewPanel(INVOICE_HEADER_CONFIG, `Invoice Headers for ${name}`, filters);\n            }"
        },
        {
            "title": "",
            "columnTitle": "Open Detail View",
            "icon": "svgIcon=#alpha-icon-edit:icon,24",
            "onClick": "(list) => list.openDetailView()"
        }
    ],
    "mappings": [
        {
            "columnName": "CUSTOMER_ID",
            "inList": false,
            "inDetailView": false
        },
        {
            "columnName": "FIRSTNAME",
            "displayName": "First Name",
            "inList": true,
            "inDetailView": true,
            "editType": "dropdown",
            "dropdownConfig": {
                "choices": [
                    "Luke",
                    "Emma"
                ],
                "fromColumn": "FIRSTNAME"
            }
        },
        {
            "columnName": "LASTNAME",
            "displayName": "Last Name",
            "inList": true,
            "inDetailView": true
        },
        {
            "columnName": "EMAIL",
            "displayName": "Email",
            "inList": true,
            "inDetailView": true
        },
        {
            "columnName": "SHIP_SAME",
            "displayName": "Ship Same",
            "inList": true,
            "inDetailView": true,
            "editType": "bool"
        }
    ]
};

let PRODUCT_CONFIG = {
    "name": "Products",
    "dataSource": {
        "type": "sql",
        "table": "Product",
    },
    searchOptions: {
        serverSearch: false,
        advancedSearch: true,
    },
    "buttons": [
        {
            "title": "Open Invoices",
            columnTitle: 'Product Invoices',
            onClick: `(list) => {
                let filters = list.makeFilterFromSelected('PRODUCT_ID', 'PRODUCT_ID');
                openNewPanel(INVOICE_ITEM_CONFIG, "Invoices", filters);
            }`
        },
        {
            "title": "",
            "columnTitle": "Open Detail View",
            "icon": 'svgIcon=#alpha-icon-edit:icon,24',
            onClick: `(list) => list.openDetailView()`,
        }
    ],
    "mappings": [
        {
            "columnName": "PRODUCT_ID",
            "inList": false,
            "inDetailView": false
        },
        {
            "columnName": "DESCRIPTION",
            "displayName": "Description",
            "inList": true,
            "inDetailView": true,
            "width": "flex(2)"
        },
        {
            "columnName": "COST",
            "displayName": "Cost",
            editType: 'number',
            "inList": true,
            "inDetailView": true,
            "template": "${COST}"
        },
        {
            "columnName": "RETAIL",
            "displayName": "Retail",
            "inList": true,
            "inDetailView": true,
            editType: 'number',
            "template": "${RETAIL}"
        }
    ]
};

let INVOICE_HEADER_CONFIG = {
    "name": "Invoice Headers",
    "dataSource": {
        "type": "sql",
        "table": "Invoice_Header",
    },
    searchOptions: {
        serverSearch: true,
        advancedSearch: false,
        onlyExclude: ["INVOICE_NUMBER"],
    },
    "buttons": [
        {
            columnTitle: 'Related Items',
            title: "Show Related",
            "children": [
                {
                    "title": "Customer",
                    onClick: `(list) => {
                        let filters = list.makeFilterFromSelected('CUSTOMER_ID', 'CUSTOMER_ID');
                        let id = list.listBox.selectionData[0]['INVOICE_NUMBER'];
                        openNewPanel(CUSTOMER_CONFIG, "Customer for invoice " + id, filters);
                    }`
                },
                {
                    "title": "Invoice Items",
                    onClick: `(list) => {
                        let filters = list.makeFilterFromSelected('INVOICE_NUMBER', 'INVOICE_NUMBER');
                        let id = list.listBox.selectionData[0]['INVOICE_NUMBER'];
                        openNewPanel(INVOICE_ITEM_CONFIG, "Invoice Items for Invoice " + id, filters);
                    }`
                }
            ]
        },
        {
            "title": "",
            "columnTitle": "Open Detail View",
            "icon": 'svgIcon=#alpha-icon-edit:icon,24',
            onClick: `(list) => list.openDetailView()`,
        }
    ],
    "mappings": [
        {
            "columnName": "INVOICE_NUMBER",
            "inList": false,
            "inDetailView": false
        },
        {
            "columnName": "INV_DATE",
            "displayName": "Date",
            "inList": true,
            "inDetailView": true,
            "editType": "datetime",
            serverDateFormat: 'MM/dd/yyyy 0h:0m:0s am',
        },
        {
            "columnName": "CUSTOMER_ID",
            "displayName": "Customer ID",
            "inList": true,
            "inDetailView": true,
            editType: 'number',
        },
    ]
};


let INVOICE_ITEM_CONFIG = {
    "name": "Invoice Items",
    "dataSource": {
        "type": "sql",
        "table": "Invoice_Items",
    },
    searchOptions: {
        serverSearch: false,
        advancedSearch: true,
    },
    "buttons": [
        {
            "title": "Open Product",
            columnTitle: 'Invoice Product',
            onClick: `(list) => {
                let filters = list.makeFilterFromSelected('PRODUCT_ID', 'PRODUCT_ID');
                let num = list.listBox.selectionData[0]['INVOICE_NUMBER'];
                openNewPanel(PRODUCT_CONFIG, "Product for Invoice " + num, filters);
            }`
        },
        {
            "title": "",
            "columnTitle": "Open Detail View",
            "icon": 'svgIcon=#alpha-icon-edit:icon,24',
            onClick: (list) => list.openDetailView(),
        }
    ],
    "mappings": [
        {
            "columnName": "ID",
            "inList": false,
            "inDetailView": false
        },
        {
            "columnName": "INVOICE_NUMBER",
            "displayName": "Invoice Number",
            "inList": true,
            "inDetailView": true,
            editType: 'number',
        },
        {
            "columnName": "PRODUCT_ID",
            "displayName": "Product",
            "inList": true,
            "inDetailView": true,
        },
        {
            "columnName": "PRICE",
            "displayName": "Price",
            "inList": true,
            "inDetailView": true,
            editType: 'number',
            "template": "${PRICE}"
        },
        {
            "columnName": "QUANTITY",
            "displayName": "Quantity",
            "inList": true,
            "inDetailView": true,
            editType: 'number'
        }
    ]
};

let API_CONFIG = {
    "name": "API Data",
    "dataSource": {
        "type": "json",
        "preprocess": "(result) => result.products",
        "endpoints": {
            "fetch": {
                "method": "GET",
                "headers": {},
                "endpoint": {
                    "template": "https://dummyjson.com/products"
                }
            },
            "search": {
                "method": "GET",
                "headers": {},
                "endpoint": {
                    "template": "https://dummyjson.com/products{$title.length > 0 ? '/search?q=' + $title : ''}"
                }
            },
            "add": {
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json",
                    "X-Api-Key": "__KEY__api key name"
                },
                "body": {
                    "title": "{$title}",
                    "description": "{$description}"
                },
                "callback": "result => result.then(x => alert(`Item ${JSON.parse(x.body).title} added successfully`))",
                "endpoint": {
                    "template": "https://dummyjson.com/products/add"
                }
            },
            "update": {
                "method": "PUT",
                "headers": {
                    "Content-Type": "application/json"
                },
                "body": {
                    "title": "{$title}",
                    "description": "{$description}"
                },
                "callback": "result => result.then(x => alert(`Item ${JSON.parse(x.body).title} updated successfully`))",
                "endpoint": {
                    "template": "https://dummyjson.com/products/{$id}"
                }
            },
            "delete": {
                "method": "DELETE",
                "callback": "result => result.then(x => alert(`Item ${JSON.parse(x.body).title} deleted successfully`))",
                "endpoint": {
                    "template": "https://dummyjson.com/products/{$id}"
                }
            }
        }
    },
    "searchOptions": {
        "serverSearch": false,
        "advancedSearch": false
    },
    "buttons": [
        {
            "title": "",
            "columnTitle": "Open Detail View",
            "icon": "svgIcon=#alpha-icon-edit:icon,24",
            "onClick": "(list) => list.openDetailView()"
        }
    ],
    "mappings": [
        {
            "columnName": "id",
            "inList": false,
            "inDetailView": false
        },
        {
            "columnName": "title",
            "displayName": "Product",
            "inList": true,
            "inDetailView": true
        },
        {
            "columnName": "category",
            "displayName": "Category"
        },
        {
            "columnName": "description",
            "displayName": "Description",
            "inList": true,
            "inDetailView": true
        },
        {
            "columnName": "brand",
            "displayName": "Brand",
            "inList": true,
            "inDetailView": true
        }
    ]
};


let TR_CONFIG = {
    "name": "Transform 5S Audit",
    "dataSource": {
        "type": "json",
        "preprocess": "result => result.result",
        "endpoints": {
            "fetch": {
                "method": "GET",
                "headers": {
                    "apikey": "__KEY__tfKey"
                },
                "endpoint": {
                    "template": "https://transform.alphasoftware.com/transformAPIVersion1.a5svc/GetFormDataArrayForFormId/QCAQL1"
                }
            },
            "search": {
                "method": "GET",
                "headers": {
                    "apikey": "__KEY__tfKey"
                },
                "endpoint": {
                    "getEndpointURL": "(filters) => {\n                    let endpointQuery = \"\";\n                    filters.forEach((f) => {\n                        let operator;\n                        switch (f.op) {\n                            case \"=\":\n                                operator = \"==\";\n                                break;\n                            case \"<>\":\n                                operator = \"!=\";\n                                break;\n                            default:\n                                operator = f.op;\n                                break;\n                        }\n                        let condition = \"data.\" + f.columnName + \" \" + operator + \" \" + f.columnVal;\n                        endpointQuery += `if (${condition}) { return true; }`;\n                    });\n                    endpointQuery += \"return false;\";\n                    return `https://transform.alphasoftware.com/transformAPIVersion1.a5svc/GetFormDataArrayForFormId/QCAQL1?formDataFilterJavascript=${endpointQuery}`;\n                }"
                }
            }
        }
    },
    "buttons": [],
    "searchOptions": {
        "serverSearch": false,
        "advancedSearch": true
    },
    "mappings": [
        {
            "columnName": "defectGroup___defect",
            "inList": true
        }
    ]
}