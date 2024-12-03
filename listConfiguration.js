"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function batchFetch(obj, configName, filters) {
    configName = encodeURIComponent(configName);
    var filterStr = encodeURIComponent(JSON.stringify(filters));
    return new Promise(function (resolve, reject) {
        obj.ajaxCallback('', '', 'batch_fetch', '', "configName=".concat(configName)
            + "&filters=".concat(filterStr), {
            onComplete: resolve
        });
    });
}
function requestListConfig(obj, configName) {
    configName = encodeURIComponent(configName);
    return new Promise(function (resolve, reject) {
        obj.ajaxCallback('', '', 'request_list_config', '', "configName=".concat(configName), {
            onComplete: resolve
        });
    });
}
function checkIfAdmin(obj) {
    return new Promise(function (resolve) {
        obj.ajaxCallback('', '', 'is_admin', '', '', {
            onComplete: resolve
        });
    });
}
function tryRecoverConfig(obj, admin, configName) {
    var response = obj.stateInfo.apiResponse;
    if (response.err && !admin) {
        alert('The configuration does not exist or has an error. Log in as an administrator to fix.');
        throw new Error('The configuration does not exist or has an error. Log in as an administrator to fix.');
    }
    else if (response.err) {
        return {
            name: configName,
            dataSource: {
                type: 'json',
                static: [],
            },
            mappings: [],
            searchOptions: {},
        };
    }
    var ok = response.ok;
    if ('config' in ok)
        return ok.config;
    return ok;
}
function initialize(obj, configName, embeddedList, listWindow, embeddedSearch, searchWindow, filters, args) {
    var isAdmin = false;
    return batchFetch(embeddedList, configName, filters).then(function () {
        var _a;
        if ((_a = embeddedList.stateInfo.apiResponse) === null || _a === void 0 ? void 0 : _a.err) {
            console.error("Error while batch fetching, reverting to slow fetch. Message: ", embeddedList.stateInfo.apiResponse.err);
            return checkIfAdmin(obj)
                .then(function () {
                var _a;
                if (((_a = obj.stateInfo.apiResponse) === null || _a === void 0 ? void 0 : _a.ok) == true) {
                    isAdmin = true;
                }
                else {
                    isAdmin = false;
                }
            })
                .then(function () { return requestListConfig(obj, configName); })
                .then(function () {
                var config = tryRecoverConfig(obj, isAdmin, configName);
                return initList(filters, args, embeddedList, listWindow, embeddedSearch, searchWindow, obj, {
                    config: config,
                    isAdmin: isAdmin,
                });
            });
        }
        else {
            return initList(filters, args, embeddedList, listWindow, embeddedSearch, searchWindow, obj, embeddedList.stateInfo.apiResponse.ok);
        }
    });
}
function initList(filters, args, embeddedList, listWindow, embeddedSearch, searchWindow, obj, d) {
    var returnObj = {
        list: null,
        search: null,
        configUx: null,
    };
    var dataCopy = jQuery.extend(true, {}, d);
    DynamicList.makeDynamicList(embeddedList, listWindow, dataCopy, filters, args).then(function (list) {
        var search = new DynamicListSearch(list, embeddedSearch, searchWindow);
        returnObj.list = list;
        returnObj.search = search;
        returnObj.configUx = obj;
        manageConfigForm(d.isAdmin, obj, list, listWindow, search, searchWindow, d, filters, args, embeddedList, embeddedSearch);
        embeddedList.initialize(list);
    }).catch(function (err) {
        if (err instanceof ValidationError) {
            displayErrorMessage(err.toString());
        }
        else {
            displayErrorMessage("There was a fatal error while initializing the list (check logs). Please fix the configuration and reload.");
            console.error(err.toString());
        }
        manageConfigForm(d.isAdmin, obj, null, listWindow, null, searchWindow, d, filters, args, embeddedList, embeddedSearch);
    });
    return returnObj;
}
function manageConfigForm(adminConfig, obj, list, listWindow, search, searchWindow, preFetch, filters, args, embeddedList, embeddedSearch) {
    var allDataColumns = [];
    var allExpandableCols = [];
    var fillColInfo = function () {
        if (list == null)
            return;
        allDataColumns = list.dataScopeManager.getAvailableDataColumns().map(function (c) {
            return {
                text: c.split("___").join('.'),
                value: c,
                onSelect: function () { }
            };
        });
        allExpandableCols = list.dataScopeManager.getExpandableColumns().map(function (c) {
            return {
                text: "Open nested item " + c.split("___").join("."),
                value: c,
                onSelect: function () { }
            };
        });
    };
    var show;
    var reRender;
    var addColCallbacks = function (configInput) {
        var _loop_1 = function (col) {
            if (list == null)
                return { value: void 0 };
            col.onSelect = function () {
                var currData = configInput.serialize();
                Object.assign(preFetch.config.mappings, currData);
                list.dataScopeManager.setPath(col.value.split("___"));
                show(currData);
            };
        };
        for (var _i = 0, allExpandableCols_1 = allExpandableCols; _i < allExpandableCols_1.length; _i++) {
            var col = allExpandableCols_1[_i];
            var state_1 = _loop_1(col);
            if (typeof state_1 === "object")
                return state_1.value;
        }
    };
    var runValidation = function (config) {
        if ('name' in config) {
            validateConfig(config);
        }
        else {
            validateMapping(config);
        }
    };
    var extractRelevantConfig = function (config, global) {
        if (('name' in config) && global)
            return config;
        if (('name' in config) && !global)
            return config.mappings;
        // Global and no name means user isn't logged in 
        if (global) {
            throw new Error("Please log in as an administrator to save a list configuration globally.");
        }
        // Otherwise, the config is already just the mapping
        return config;
    };
    var configObj;
    var saveGlobal = function () {
        try {
            var maybeConfig = configObj.serialize();
            runValidation(maybeConfig);
            maybeConfig = extractRelevantConfig(maybeConfig, true);
            var data = encodeURIComponent(JSON.stringify(maybeConfig));
            obj.ajaxCallback('', '', 'save_config', '', "configName=".concat(list === null || list === void 0 ? void 0 : list.config.name, "&payload=").concat(data, "&global=").concat(true), {
                onComplete: function () {
                    var res = obj.stateInfo.apiResponse;
                    if (res && res.err) {
                        displayErrorMessage(res.err);
                        console.error(res.err);
                    }
                    else {
                        alert('Config saved.');
                    }
                    obj.applyConfigChanges();
                }
            });
        }
        catch (e) {
            displayErrorMessage(e.toString());
            console.error(e);
        }
    };
    var saveUser = function () {
        try {
            var maybeConfig = configObj.serialize();
            runValidation(maybeConfig);
            maybeConfig = extractRelevantConfig(maybeConfig, false);
            var data = encodeURIComponent(JSON.stringify(maybeConfig));
            obj.ajaxCallback('', '', 'save_config', '', "configName=".concat(list === null || list === void 0 ? void 0 : list.config.name, "&payload=").concat(data, "&global=").concat(false), {
                onComplete: function () {
                    var res = obj.stateInfo.apiResponse;
                    if (res && res.err) {
                        displayErrorMessage(res.err);
                        console.error(res.err);
                    }
                    else {
                        alert('Config saved.');
                    }
                    obj.applyConfigChanges();
                }
            });
        }
        catch (e) {
            displayErrorMessage(e.toString());
            console.error(e);
        }
    };
    show = function (dataOverride) {
        if (dataOverride === void 0) { dataOverride = undefined; }
        fillColInfo();
        configObj = buildConfigForm(adminConfig, __spreadArray(__spreadArray([], allDataColumns, true), allExpandableCols, true));
        addColCallbacks(configObj);
        try {
            var others = makeSQLSaveButtons(obj, saveUser, saveGlobal);
            reRender = buildFromConfig(obj, 'BUILDER', configObj, preFetch.config.name, others);
            var populateWith = adminConfig ? preFetch.config : preFetch.config.mappings;
            var d = configObj.getPopulateDataFromObj(dataOverride ? dataOverride : populateWith);
            obj.setValue('BUILDER', JSON.stringify(d));
            obj.applyConfigChanges = function () {
                var newConfig = configObj.serialize();
                if (adminConfig) {
                    preFetch.config = newConfig;
                }
                else {
                    preFetch.config.mappings = newConfig;
                }
                if (list == null || search == null)
                    return;
                list.destructor();
                var newSearch;
                var prefetchCopy = jQuery.extend(true, {}, preFetch);
                DynamicList.makeDynamicList(embeddedList, listWindow, prefetchCopy, filters, args).then(function (newList) {
                    newSearch = new DynamicListSearch(newList, embeddedSearch, searchWindow);
                    Object.assign(list, newList);
                    Object.assign(search, newSearch);
                    embeddedList.initialize(list);
                    show(dataOverride);
                }).catch(function (e) { return displayErrorMessage(e.toString()); });
            };
        }
        catch (e) {
            console.error(e);
            displayErrorMessage(e.toString());
        }
        reRender();
    };
    show();
}
function buildConfigForm(adminConfig, allColumns) {
    var singleInput = Input.singleInput;
    var singleValue = Input.singleValue;
    var btns = singleInput('array', 'List Buttons', {
        type: "array",
        default: [],
        arrayInput: singleInput('object', 'List Button', {
            type: "object",
            staticKeys: {
                columnTitle: singleInput('string', 'Column Title'),
                onClick: new Input({
                    values: [
                        {
                            value: new Value("object", {
                                type: "object",
                                staticKeys: {
                                    function: singleInput("string", "Javascript Code")
                                }
                            }),
                            dropdownLabel: "Custom Javascript Function"
                        },
                        {
                            value: new Value("object", {
                                type: "object",
                                staticKeys: {
                                    action: singleInput("string", "Action Name")
                                }
                            }),
                            dropdownLabel: "Javascript Action"
                        }
                    ],
                    label: "Click Action",
                    comments: '',
                    validate: function () { return true; },
                }),
                title: singleInput('string', 'Button Text (Optional)', { type: "string", default: undefined }),
                icon: singleInput('string', 'Button Icon (Optional)', { type: "string", default: undefined }),
            }
        })
    });
    var endpoint = singleInput('object', 'API Endpoint', {
        type: "object",
        staticKeys: {
            method: singleInput('string', 'HTTP Method (GET, POST, etc)'),
            endpoint: singleInput('string', 'Endpoint', {
                type: 'string',
            }, {
                comments: "XBasic Expression to evaluate"
            }),
            body: singleInput('object', 'Body (Optional)', {
                type: "object",
                staticKeys: {},
                dynamicKeys: singleInput('string', 'Value'),
            }),
            headers: singleInput('object', 'Headers (Optional)', {
                type: "object",
                staticKeys: {},
                dynamicKeys: singleInput('string', 'Value'),
            }),
            callback: singleInput('function', 'On Complete Callback (Optional)', { type: "function", default: undefined }),
        },
    });
    var mappings = new Input({
        values: singleValue(new Value('array', {
            type: 'array',
            default: [],
            arrayInput: singleInput('object', 'Column Settings', {
                type: "object",
                staticKeys: {
                    columnName: singleInput('dropdown', 'Column Name', {
                        type: "dropdown",
                        dropdownItems: allColumns,
                        onChange: function (x, dropdown) {
                            var selected = x.item.data;
                            for (var _i = 0, allColumns_1 = allColumns; _i < allColumns_1.length; _i++) {
                                var colInfo = allColumns_1[_i];
                                if (colInfo.value == selected && colInfo.onSelect) {
                                    colInfo.onSelect(dropdown);
                                    return;
                                }
                            }
                        },
                    }),
                    displayName: singleInput('string', 'Column Name to Display (Optional)', { type: "string", default: undefined }),
                    inList: singleInput('boolean', 'Show in List? (Optional)', { type: "boolean", default: true }),
                    inDetailView: singleInput('boolean', 'Show in Detail View? (Optional)', { type: "boolean", default: true }),
                    editType: singleInput('dropdown', 'Data Type (Optional)', {
                        default: 'text',
                        type: 'dropdown',
                        dropdownItems: [
                            { text: 'Text', value: 'text' },
                            { text: 'Dropdown', value: 'dropdown' },
                            { text: 'Time', value: 'time' },
                            { text: 'Date & Time', value: 'datetime' },
                            { text: 'True/False', value: 'bool' },
                            { text: 'Number', value: 'number' },
                            { text: 'JSON String', value: 'json' }
                        ],
                        onChange: function (change, v) {
                            var newVal = change.item.data;
                            if (newVal == 'json') {
                            }
                        },
                    }),
                    serverDateFormat: singleInput('string', 'Server Date Format', {
                        type: 'string',
                        default: undefined,
                    }, {
                        show: function (i) {
                            var _a;
                            var p = i.parent;
                            if (p == null)
                                return true;
                            var editType = (_a = p.selected().key("editType")) === null || _a === void 0 ? void 0 : _a.serialize();
                            return typeof editType == 'string' && editType == 'datetime';
                        }
                    }),
                    width: singleInput('string', 'Column Width (Optional)', { type: "string", default: undefined }),
                    template: singleInput('string', 'Column Template (Optional)', { type: "string", default: undefined }),
                    dropdownConfig: singleInput('object', 'Dropdown Config (Optional)', {
                        type: "object",
                        default: undefined,
                        staticKeys: {
                            choices: new Input({
                                values: singleValue(new Value('array', {
                                    type: "array",
                                    arrayInput: singleInput('string', 'Dropdown Item'),
                                    default: [],
                                })),
                                label: 'Dropdown Choices',
                                comments: '',
                                validate: function () { return true; },
                            }),
                            fromColumn: singleInput('string', 'Derive From Column', { type: "string", default: undefined }),
                        },
                    })
                },
            }, {
                onPopulate: function (input, d) {
                    var name = d.displayName ? d.displayName : d.columnName;
                    input.label = name + " options";
                },
            }),
        })),
        label: "List Mappings",
        comments: "Add or remove columns for the list",
        validate: function () { return true; },
    });
    var filters = singleInput('array', "Filters", {
        default: [],
        type: "array",
        arrayInput: singleInput('object', "Filter", {
            type: "object",
            staticKeys: {
                columnName: singleInput("string", "Column Name"),
                op: singleInput("dropdown", "Operator", {
                    default: "=",
                    type: "dropdown",
                    dropdownItems: [
                        { text: "Equals", value: "=" },
                        { text: "Not Equals", value: "<>" },
                        { text: "Less Than", value: "<" },
                        { text: "Less Than or Equal To", value: "<=" },
                        { text: "Greater Than", value: ">" },
                        { text: "Greater Than or Equal To", value: ">=" },
                        { text: "Pattern", value: "LIKE" },
                    ],
                }),
                columnVal: singleInput("object", "Column Value", {
                    type: "object",
                    staticKeys: {
                        tag: singleInput("dropdown", "Value Type", {
                            type: "dropdown",
                            dropdownItems: [
                                { text: "Argument", value: "arg" },
                                { text: "Static Value", value: "value" }
                            ],
                        }),
                        value: singleInput("string", "Value")
                    }
                }),
                connector: singleInput("dropdown", "Logical Connector", {
                    type: "dropdown",
                    default: "AND",
                    dropdownItems: [
                        { text: "And", value: "AND" },
                        { text: "Or", value: "OR" }
                    ],
                })
            }
        })
    });
    if (!adminConfig)
        return mappings;
    return singleInput('object', 'List Configuration', {
        type: "object",
        staticKeys: {
            name: singleInput('string', 'List Name'),
            onInitialize: singleInput('function', 'On Initialize Callback (Optional)', { type: "function", default: undefined }),
            dataSource: new Input({
                values: [
                    {
                        value: new Value('object', {
                            type: "object",
                            staticKeys: {
                                type: singleInput('dropdown', 'Input Type', {
                                    type: 'dropdown',
                                    dropdownItems: [{ value: 'json', text: 'json' }],
                                }),
                                endpoints: singleInput('object', 'Endpoints', { type: 'object', dynamicKeys: endpoint, staticKeys: {}, default: {} }, {
                                    comments: 'Key can be fetch, search, add, update, or delete'
                                }),
                                preprocess: singleInput('function', 'Preprocess Function (Optional)', { type: "function", default: undefined }),
                            }
                        }),
                        dropdownLabel: 'Fetch from API',
                    },
                    {
                        value: new Value('object', {
                            type: "object",
                            staticKeys: {
                                type: singleInput('dropdown', 'Input Type', { type: "dropdown", dropdownItems: [{ value: 'sql', text: 'sql' }] }),
                                table: singleInput('string', 'Table Name'),
                                filters: filters,
                                preprocess: singleInput('function', 'Preprocess Function (Optional)', { type: "function", default: undefined }),
                            }
                        }),
                        dropdownLabel: 'Fetch from SQL',
                    },
                    {
                        value: new Value('object', {
                            type: "object",
                            staticKeys: {
                                type: singleInput("dropdown", 'Input Type', { type: "dropdown", dropdownItems: [{ value: "sql", text: "sql" }] }),
                                sql: singleInput('string', 'SQL Query', undefined, {
                                    comments: "Supply only the SELECT and FROM parts of the query. Specify filters in the `filters` section."
                                }),
                                filters: filters,
                                preprocess: singleInput('function', 'Preprocess Function (Optional)', { type: "function", default: undefined }),
                            }
                        }),
                        dropdownLabel: 'Supply custom SQL'
                    },
                    {
                        value: new Value('object', {
                            type: "object",
                            staticKeys: {
                                type: singleInput('dropdown', 'Input Type', { type: "dropdown", dropdownItems: [{ value: 'json', text: 'json' }] }),
                                preprocess: singleInput('function', 'Preprocess Function (Optional)', { type: "function", default: undefined }),
                                static: singleInput('array', 'Static Items', {
                                    type: "array",
                                    arrayInput: singleInput("string", "Data Point")
                                }),
                            },
                        }),
                        dropdownLabel: "Static JSON"
                    }
                ],
                label: "Data Source",
                comments: "",
                validate: function () { return true; }
            }),
            mappings: mappings,
            searchOptions: singleInput('object', 'Search Options', {
                type: "object",
                staticKeys: {
                    paginate: singleInput('object', 'Pagination', {
                        type: "object",
                        default: undefined,
                        staticKeys: { pageSize: singleInput('number', 'Page Size') }
                    }),
                    advancedSearch: singleInput('boolean', 'Do Advanced Search?', { type: "boolean", default: false }),
                    serverSearch: singleInput('boolean', 'Do Server-Side Search?', { type: "boolean", default: false }),
                    onlyInclude: singleInput('array', 'Only include these search columns:', {
                        type: "array",
                        arrayInput: singleInput('string', 'Column Name'),
                        default: undefined
                    }),
                    onlyExclude: singleInput('array', 'Only exclude these search columns:', {
                        type: "array",
                        arrayInput: singleInput('string', 'Column Name'),
                        default: undefined
                    }),
                }
            }),
            buttons: btns,
        }
    });
}
// Helper function to make a button to serialize the form data
function makeSQLSaveButtons(obj, saveUser, saveGlobal) {
    return {
        type: "group",
        "id": "SERIALIZE_GROUP_" + uuidv4(),
        container: {
            style: 'width: 100%; display: flex; flex-direction: row;',
        },
        items: [
            {
                type: "button",
                id: "SERIALIZE_BTN_" + uuidv4(),
                control: {
                    layout: "text",
                    html: "<span class=\"\" style=\"\">Save to Current User</span>",
                    "icon": "",
                    "onClick": function () {
                        saveUser();
                    }
                },
                container: {
                    style: ";",
                    className: ""
                },
                data: { from: '' },
                layout: "{content}"
            },
            {
                type: "button",
                id: "LOAD_BTN_" + uuidv4(),
                control: {
                    layout: "text",
                    html: "<span class=\"\" style=\"\"><label for=\"loadFileElem\"> Save Globally </label></span>",
                    icon: "",
                    onClick: function () {
                        saveGlobal();
                    }
                },
                container: {
                    style: ";",
                    className: ""
                },
                data: { from: '' },
                layout: "{content}"
            },
        ]
    };
}
function makeSerializeButton(obj, writeToFileCallback, loadFromFileCallback) {
    return {
        type: "group",
        "id": "SERIALIZE_GROUP_" + uuidv4(),
        container: {
            style: 'width: 100%; display: flex; flex-direction: row;',
        },
        items: [
            {
                type: "button",
                id: "SERIALIZE_BTN_" + uuidv4(),
                control: {
                    layout: "text",
                    html: "<span class=\"\" style=\"\">Save</span>",
                    "icon": "",
                    "onClick": function () {
                        writeToFileCallback();
                    }
                },
                container: {
                    style: ";",
                    className: ""
                },
                data: { from: '' },
                layout: "{content}"
            },
            {
                type: "button",
                id: "LOAD_BTN_" + uuidv4(),
                control: {
                    layout: "text",
                    html: "<span class=\"\" style=\"\"><label for=\"loadFileElem\"> Load </label></span>",
                    icon: "",
                    onClick: function () {
                        var input = document.createElement('input');
                        input.type = 'file';
                        input.accept = 'application/json';
                        input.multiple = false;
                        input.onchange = function (_) {
                            var _a;
                            var files = Array.from((_a = input.files) !== null && _a !== void 0 ? _a : []);
                            if (files.length > 0) {
                                var reader_1 = new FileReader();
                                reader_1.readAsText(files[0]);
                                reader_1.onloadend = function (res) {
                                    var _a, _b;
                                    var text = (_b = (_a = reader_1.result) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : "";
                                    loadFromFileCallback(JSON.parse(text));
                                };
                            }
                        };
                        input.click();
                    }
                },
                container: {
                    style: ";",
                    className: ""
                },
                data: { from: '' },
                layout: "{content}"
            },
        ]
    };
}
