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
function initialize(obj, configName, embeddedList, embeddedSearch, filters, args) {
    var isAdmin = false;
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
        var apiResponse = obj.stateInfo.apiResponse;
        var config;
        if (apiResponse.err && !isAdmin) {
            alert('The configuration does not exist or has an error. Log in as an administrator to fix.');
            throw new Error('The configuration does not exist or has an error. Log in as an administrator to fix.');
        }
        else if (apiResponse.err) {
            config = {
                name: configName,
                dataSource: {
                    type: 'json',
                    static: [],
                },
                mappings: [],
                searchOptions: {},
            };
        }
        else {
            config = apiResponse.ok;
        }
        var returnObj = {
            list: null,
            search: null,
            configUx: null,
        };
        DynamicList.makeDynamicList(embeddedList, config, filters, args).then(function (list) {
            var search = new DynamicListSearch(list, embeddedSearch);
            returnObj.list = list;
            returnObj.search = search;
            returnObj.configUx = obj;
            manageConfigForm(isAdmin, obj, list, search, config, filters, args, embeddedList, embeddedSearch);
        }).catch(function (err) {
            if (err instanceof ValidationError) {
                displayErrorMessage(err.toString());
            }
            else {
                displayErrorMessage("There was a fatal error while initializing the list (check logs). Please fix the configuration and reload.");
                console.error(err.toString());
            }
            manageConfigForm(isAdmin, obj, null, null, config, filters, args, embeddedList, embeddedSearch);
        });
        return returnObj;
    });
}
function manageConfigForm(adminConfig, obj, list, search, config, filters, args, embeddedList, embeddedSearch) {
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
                Object.assign(config.mappings, currData);
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
    show = function (dataOverride) {
        if (dataOverride === void 0) { dataOverride = undefined; }
        fillColInfo();
        var configInput = buildConfigForm(adminConfig, __spreadArray(__spreadArray([], allDataColumns, true), allExpandableCols, true));
        addColCallbacks(configInput);
        try {
            reRender = buildFromConfig(obj, 'BUILDER', configInput, config.name, true);
            var populateWith = adminConfig ? config : config.mappings;
            var d = configInput.getPopulateDataFromObj(dataOverride ? dataOverride : populateWith);
            obj.setValue('BUILDER', JSON.stringify(d));
            obj.applyConfigChanges = function () {
                var newConfig = configInput.serialize();
                if (adminConfig) {
                    config = newConfig;
                }
                else {
                    config.mappings = newConfig;
                }
                if (list == null || search == null)
                    return;
                list.destructor();
                var newSearch;
                DynamicList.makeDynamicList(embeddedList, config, filters, args).then(function (newList) {
                    newSearch = new DynamicListSearch(newList, embeddedSearch);
                    Object.assign(list, newList);
                    Object.assign(search, newSearch);
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
                onClick: singleInput('function', 'On Click Javascript'),
                title: singleInput('string', 'Button Text (Optional)', { type: "string", default: undefined }),
                icon: singleInput('string', 'Button Icon (Optional)', { type: "string", default: undefined }),
            }
        })
    });
    var endpoint = singleInput('object', 'API Endpoint', {
        type: "object",
        staticKeys: {
            method: singleInput('string', 'HTTP Method (GET, POST, etc)'),
            endpoint: new Input({
                values: [
                    {
                        value: new Value('object', {
                            type: "object",
                            staticKeys: {
                                template: singleInput('string', 'Template String'),
                            }
                        }),
                        dropdownLabel: 'Endpoint Template'
                    },
                    {
                        value: new Value('object', {
                            type: "object",
                            staticKeys: {
                                getEndpointURL: singleInput('function', 'Function to get endpoint'),
                            }
                        }),
                        dropdownLabel: 'Endpoint Function'
                    }
                ],
                label: 'Endpoint',
                comments: 'The endpoint can be a string template or a function accepting list filters and returning a string URL',
                validate: function () { return true; },
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
                    editType: singleInput('string', 'Data Type (Optional)', { type: "string", default: 'text' }),
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
                                    onChange: function (_1, _2) { }
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
                                type: singleInput('dropdown', 'Input Type', { type: "dropdown", dropdownItems: [{ value: 'sql', text: 'sql' }], onChange: function (_1, _2) { } }),
                                table: singleInput('string', 'Table Name'),
                                preprocess: singleInput('function', 'Preprocess Function (Optional)', { type: "function", default: undefined }),
                            }
                        }),
                        dropdownLabel: 'Fetch from SQL',
                    },
                    {
                        value: new Value('object', {
                            type: "object",
                            staticKeys: {
                                type: singleInput("dropdown", 'Input Type', { type: "dropdown", dropdownItems: [{ value: "sql", text: "sql" }], onChange: function (_1, _2) { } }),
                                sql: singleInput('string', 'SQL Query', undefined, {
                                    comments: "Supply only the SELECT and FROM parts of the query. Specify filters in the `filters` section."
                                }),
                                filters: singleInput('array', "Filters", {
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
                                                onChange: function (_1, _2) { }
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
                                                        onChange: function (_1, _2) { }
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
                                                onChange: function (_1, _2) { }
                                            })
                                        }
                                    })
                                }),
                                preprocess: singleInput('function', 'Preprocess Function (Optional)', { type: "function", default: undefined }),
                            }
                        }),
                        dropdownLabel: 'Supply custom SQL'
                    },
                    {
                        value: new Value('object', {
                            type: "object",
                            staticKeys: {
                                type: singleInput('dropdown', 'Input Type', { type: "dropdown", dropdownItems: [{ value: 'json', text: 'json' }], onChange: function (_1, _2) { } }),
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
