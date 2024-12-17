"use strict";
function batchFetch(obj, configName, filters) {
    configName = encodeURIComponent(configName);
    let filterStr = encodeURIComponent(JSON.stringify(filters));
    return new Promise((resolve, reject) => {
        obj.ajaxCallback('', '', 'batch_fetch', '', `configName=${configName}`
            + `&filters=${filterStr}`, {
            onComplete: resolve
        });
    });
}
function requestListConfig(obj, configName) {
    configName = encodeURIComponent(configName);
    return new Promise((resolve, reject) => {
        obj.ajaxCallback('', '', 'request_list_config', '', `configName=${configName}`, {
            onComplete: resolve
        });
    });
}
function checkIfAdmin(obj) {
    return new Promise((resolve) => {
        obj.ajaxCallback('', '', 'is_admin', '', '', {
            onComplete: resolve
        });
    });
}
function tryRecoverConfig(obj, admin, configName) {
    let response = obj.stateInfo.apiResponse;
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
    let ok = response.ok;
    if ('config' in ok)
        return ok.config;
    return ok;
}
function initialize(obj, configName, embeddedList, listWindow, embeddedSearch, searchWindow, filters, args) {
    let isAdmin = false;
    return batchFetch(embeddedList, configName, filters).then(() => {
        var _a;
        if ((_a = embeddedList.stateInfo.apiResponse) === null || _a === void 0 ? void 0 : _a.err) {
            console.error("Error while batch fetching, reverting to slow fetch. Message: ", embeddedList.stateInfo.apiResponse.err);
            return checkIfAdmin(obj)
                .then(() => {
                var _a;
                if (((_a = obj.stateInfo.apiResponse) === null || _a === void 0 ? void 0 : _a.ok) == true) {
                    isAdmin = true;
                }
                else {
                    isAdmin = false;
                }
            })
                .then(() => requestListConfig(obj, configName))
                .then(() => {
                let config = tryRecoverConfig(obj, isAdmin, configName);
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
    let returnObj = {
        list: null,
        search: null,
        configUx: null,
    };
    let dataCopy = jQuery.extend(true, {}, d);
    DynamicList.makeDynamicList(embeddedList, listWindow, dataCopy, filters, args).then((list) => {
        let search = new DynamicListSearch(list, embeddedSearch, searchWindow);
        returnObj.list = list;
        returnObj.search = search;
        returnObj.configUx = obj;
        manageConfigForm(d.isAdmin, obj, list, listWindow, search, searchWindow, d, filters, args, embeddedList, embeddedSearch);
        embeddedList.initialize(list);
    }).catch((err) => {
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
    let allDataColumns = [];
    let allExpandableCols = [];
    let fillColInfo = () => {
        if (list == null)
            return;
        allDataColumns = list.dataScopeManager.getAvailableDataColumns().map(c => {
            return {
                text: c.split("___").join('.'),
                value: c,
                onSelect: () => { }
            };
        });
        allExpandableCols = list.dataScopeManager.getExpandableColumns().map(c => {
            return {
                text: "Open nested item " + c.split("___").join("."),
                value: c,
                onSelect: () => { }
            };
        });
    };
    let show;
    let reRender;
    let addColCallbacks = (configForm) => {
        for (let col of allExpandableCols) {
            if (list == null)
                return;
            col.onSelect = () => {
                let currData = configForm.serialize();
                Object.assign(preFetch.config.mappings, currData);
                list.dataScopeManager.setPath(col.value.split("___"));
                show(currData);
            };
        }
    };
    let runValidation = (config) => {
        if ('name' in config) {
            validateConfig(config);
        }
        else {
            let c = config;
            c.forEach(m => validateMapping(m));
        }
    };
    let extractRelevantConfig = (config, global) => {
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
    let configForm;
    let saveGlobal = () => {
        try {
            let maybeConfig = configForm.serialize();
            runValidation(maybeConfig);
            maybeConfig = extractRelevantConfig(maybeConfig, true);
            let data = encodeURIComponent(JSON.stringify(maybeConfig));
            obj.ajaxCallback('', '', 'save_config', '', `configName=${list === null || list === void 0 ? void 0 : list.config.name}&payload=${data}&global=${true}`, {
                onComplete: () => {
                    let res = obj.stateInfo.apiResponse;
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
    let saveUser = () => {
        try {
            debugger;
            let maybeConfig = configForm.serialize();
            runValidation(maybeConfig);
            maybeConfig = extractRelevantConfig(maybeConfig, false);
            let data = encodeURIComponent(JSON.stringify(maybeConfig));
            obj.ajaxCallback('', '', 'save_config', '', `configName=${list === null || list === void 0 ? void 0 : list.config.name}&payload=${data}&global=${false}`, {
                onComplete: () => {
                    let res = obj.stateInfo.apiResponse;
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
    show = (dataOverride = undefined) => {
        fillColInfo();
        configForm = buildConfigForm(obj, adminConfig, [...allDataColumns, ...allExpandableCols]);
        addColCallbacks(configForm);
        try {
            let others = makeSQLSaveButtons(obj, saveUser, saveGlobal);
            //reRender = buildFromConfig(obj, 'BUILDER', configObj, preFetch.config.name, others);
            reRender = () => { };
            let populateWith = adminConfig ? preFetch.config : preFetch.config.mappings;
            let d = configForm.initializeWithData(dataOverride !== undefined ? dataOverride : populateWith);
            Form.render(configForm);
            obj.setValue('BUILDER', JSON.stringify(d));
            obj.saveConfigGlobally = saveGlobal;
            obj.saveConfigUser = saveUser;
            obj.applyConfigChanges = () => {
                let newConfig = configForm.serialize();
                if (adminConfig) {
                    preFetch.config = newConfig;
                }
                else {
                    preFetch.config.mappings = newConfig;
                }
                if (list == null || search == null)
                    return;
                list.destructor();
                let newSearch;
                let prefetchCopy = jQuery.extend(true, {}, preFetch);
                DynamicList.makeDynamicList(embeddedList, listWindow, prefetchCopy, filters, args).then((newList) => {
                    newSearch = new DynamicListSearch(newList, embeddedSearch, searchWindow);
                    Object.assign(list, newList);
                    Object.assign(search, newSearch);
                    embeddedList.initialize(list);
                    show(dataOverride);
                }).catch((e) => displayErrorMessage(e.toString()));
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
function buildConfigForm(obj, adminConfig, allColumns) {
    let buttons = {
        label: 'List Buttons',
        itemTemplate: {
            type: 'object',
            options: {
                label: 'List Button',
                requiredKeys: {
                    columnTitle: {
                        type: 'simple',
                        options: {
                            label: 'Column Title',
                            type: 'string'
                        }
                    },
                    onClick: {
                        type: 'multi',
                        options: {
                            label: 'Click Action',
                            definitions: {
                                'Custom Javascript Function': {
                                    defaultValue: { function: "" },
                                    definition: {
                                        type: 'object',
                                        options: {
                                            label: 'Custom Javascript Function',
                                            requiredKeys: {
                                                function: {
                                                    type: 'simple',
                                                    options: {
                                                        label: 'Javascript Code',
                                                        type: 'string'
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                'Javascript Action': {
                                    defaultValue: { action: '' },
                                    definition: {
                                        type: 'object',
                                        options: {
                                            label: 'Javascript Action',
                                            requiredKeys: {
                                                action: {
                                                    type: 'simple',
                                                    options: {
                                                        label: 'Javascript Action Name',
                                                        type: 'string'
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                            }
                        }
                    }
                },
                optionalKeys: {
                    title: {
                        defaultValue: "",
                        definition: {
                            type: 'simple',
                            options: {
                                label: 'Button Text',
                                type: 'string'
                            }
                        }
                    },
                    icon: {
                        defaultValue: "",
                        definition: {
                            type: 'simple',
                            options: {
                                label: 'Button Icon',
                                type: 'string'
                            }
                        }
                    }
                }
            }
        },
        defaultValue: []
    };
    let endpoint = {
        label: "Endpoint Options",
        requiredKeys: {
            method: {
                type: 'simple',
                options: {
                    label: 'HTTP Method (GET, POST, etc.)',
                    type: 'string'
                }
            },
            endpoint: {
                type: 'simple',
                options: {
                    label: 'XBasic Expression Endpoint',
                    type: 'string'
                }
            }
        },
        optionalKeys: {
            body: {
                defaultValue: {},
                definition: {
                    type: 'object',
                    options: {
                        label: 'Body',
                        requiredKeys: {},
                        newKeyTemplate: {
                            defaultValue: '',
                            definition: {
                                type: 'simple',
                                options: {
                                    type: 'string',
                                    label: 'Value'
                                }
                            }
                        }
                    }
                }
            },
            headers: {
                defaultValue: {},
                definition: {
                    type: 'object',
                    options: {
                        label: 'Headers',
                        requiredKeys: {},
                        newKeyTemplate: {
                            defaultValue: '',
                            definition: {
                                type: 'simple',
                                options: {
                                    type: 'string',
                                    label: 'Value'
                                }
                            }
                        }
                    }
                }
            },
            callback: {
                defaultValue: () => { },
                definition: {
                    type: 'simple',
                    options: {
                        type: 'function',
                        label: 'On Complete Callback'
                    }
                }
            }
        }
    };
    let editTypeDropdown = {
        label: 'Data Type',
        dropdownItems: [
            { text: 'Text', value: 'text' },
            { text: 'Dropdown', value: 'dropdown' },
            { text: 'Time', value: 'time' },
            { text: 'Date & Time', value: 'datetime' },
            { text: 'True/False', value: 'bool' },
            { text: 'Number', value: 'number' },
            { text: 'JSON String', value: 'json' }
        ],
        default: 'text'
    };
    let subMappings = {
        label: "Sub-Mappings",
        name: 'subMapping',
        definitions: {
            'JSON Value': {
                defaultValue: {
                    editType: 'string',
                },
                definition: {
                    type: 'object',
                    options: {
                        label: 'JSON Value',
                        requiredKeys: {
                            editType: {
                                type: 'dropdown',
                                options: {
                                    label: 'Edit Type',
                                    dropdownItems: [
                                        { value: 'string', 'text': 'String' },
                                        { value: 'number', 'text': 'Number' },
                                        { value: 'boolean', 'text': 'Boolean' },
                                    ]
                                }
                            }
                        },
                        optionalKeys: {
                            displayName: {
                                defaultValue: "",
                                definition: {
                                    type: 'simple',
                                    options: {
                                        label: 'Display Name',
                                        type: 'string'
                                    }
                                }
                            },
                            defaultValue: {
                                defaultValue: "",
                                definition: {
                                    type: 'simple',
                                    options: {
                                        label: 'Default Value (JavaScript expression)',
                                        type: 'string'
                                    }
                                }
                            }
                        }
                    }
                }
            },
            'JSON Array': {
                defaultValue: { arrayItem: { editType: 'string' } },
                definition: {
                    type: 'object',
                    options: {
                        label: 'JSON Array',
                        requiredKeys: {
                            arrayItem: {
                                type: 'recursive',
                                options: {
                                    label: 'Array Item',
                                    recurseOn: 'subMapping'
                                }
                            }
                        },
                        optionalKeys: {
                            displayName: {
                                defaultValue: "",
                                definition: {
                                    type: 'simple',
                                    options: {
                                        label: 'Display Name',
                                        type: 'string'
                                    }
                                }
                            },
                            defaultValue: {
                                defaultValue: "",
                                definition: {
                                    type: 'simple',
                                    options: {
                                        label: 'Default Value (JavaScript expression)',
                                        type: 'string'
                                    }
                                }
                            }
                        }
                    }
                }
            },
            'JSON Object': {
                defaultValue: { keys: {} },
                definition: {
                    type: 'object',
                    options: {
                        label: 'JSON Object',
                        requiredKeys: {
                            keys: {
                                type: 'object',
                                options: {
                                    label: 'Keys',
                                    requiredKeys: {},
                                    newKeyTemplate: {
                                        defaultValue: {
                                            editType: 'string'
                                        },
                                        definition: {
                                            type: 'recursive',
                                            options: {
                                                label: 'Keys',
                                                recurseOn: 'subMapping'
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        optionalKeys: {
                            displayName: {
                                defaultValue: "",
                                definition: {
                                    type: 'simple',
                                    options: {
                                        label: 'Display Name',
                                        type: 'string'
                                    }
                                }
                            },
                            defaultValue: {
                                defaultValue: "",
                                definition: {
                                    type: 'simple',
                                    options: {
                                        label: 'Default Value (JavaScript expression)',
                                        type: 'string'
                                    }
                                }
                            }
                        },
                    }
                }
            },
        }
    };
    let mappings = {
        label: 'List Mappings',
        defaultValue: [],
        itemTemplate: {
            type: 'object',
            options: {
                onPopulate(data, form) {
                    let d = data;
                    let name = d.displayName ? d.displayName : d.columnName;
                    form.getOptions().options.label = name;
                },
                label: 'Column Settings',
                requiredKeys: {
                    columnName: {
                        type: 'dropdown',
                        options: {
                            label: 'Column Name',
                            dropdownItems: allColumns
                        }
                    }
                },
                optionalKeys: {
                    displayName: {
                        defaultValue: "",
                        definition: {
                            type: 'simple',
                            options: {
                                type: 'string',
                                label: 'Display Name'
                            }
                        }
                    },
                    inList: {
                        defaultValue: true,
                        definition: {
                            type: 'simple',
                            options: {
                                type: 'boolean',
                                label: 'Display In List'
                            }
                        }
                    },
                    inDetailView: {
                        defaultValue: true,
                        definition: {
                            type: 'simple',
                            options: {
                                type: 'boolean',
                                label: 'Display In Detail View'
                            }
                        }
                    },
                    editType: {
                        defaultValue: 'text',
                        definition: {
                            type: 'dropdown',
                            options: editTypeDropdown
                        },
                    },
                    subMappings: {
                        defaultValue: {
                            editType: 'string'
                        },
                        definition: {
                            type: 'multi',
                            options: subMappings
                        }
                    },
                    serverDateFormat: {
                        defaultValue: '',
                        definition: {
                            type: 'simple',
                            options: {
                                type: 'string',
                                label: 'Server Date Format'
                            }
                        }
                    },
                    width: {
                        defaultValue: '',
                        definition: {
                            type: 'simple',
                            options: {
                                type: 'string',
                                label: 'Width'
                            }
                        }
                    },
                    template: {
                        defaultValue: '',
                        definition: {
                            type: 'simple',
                            options: {
                                type: 'string',
                                label: 'Template'
                            }
                        }
                    },
                    dropdownConfig: {
                        defaultValue: {
                            choices: [],
                            fromColumn: ''
                        },
                        definition: {
                            type: 'multi',
                            options: {
                                label: 'Dropdown Config',
                                definitions: {
                                    'Choices': {
                                        defaultValue: { choices: [] },
                                        definition: {
                                            type: 'object',
                                            options: {
                                                label: 'Choices',
                                                requiredKeys: {
                                                    choices: {
                                                        type: 'array',
                                                        options: {
                                                            defaultValue: [],
                                                            label: 'Dropdown Choices',
                                                            itemTemplate: {
                                                                type: 'simple',
                                                                options: {
                                                                    label: 'Dropdown Item',
                                                                    type: 'string'
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    'From Column': {
                                        defaultValue: { fromColumn: '' },
                                        definition: {
                                            type: 'object',
                                            options: {
                                                label: 'From Column',
                                                requiredKeys: {
                                                    fromColumn: {
                                                        type: 'simple',
                                                        options: {
                                                            label: 'Derive from Column',
                                                            type: 'string'
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    if (!adminConfig)
        return Form.create(obj, { type: 'array', options: mappings }, 'BUILDER');
    let filters = {
        label: 'List Filters',
        defaultValue: [],
        itemTemplate: {
            type: 'object',
            options: {
                label: 'Filter',
                requiredKeys: {
                    columnName: {
                        type: 'simple',
                        options: {
                            type: 'string',
                            label: 'Column Name'
                        }
                    },
                    op: {
                        type: 'dropdown',
                        options: {
                            label: 'Operator',
                            dropdownItems: [
                                { text: "Equals", value: "=" },
                                { text: "Not Equals", value: "<>" },
                                { text: "Less Than", value: "<" },
                                { text: "Less Than or Equal To", value: "<=" },
                                { text: "Greater Than", value: ">" },
                                { text: "Greater Than or Equal To", value: ">=" },
                                { text: "Pattern", value: "LIKE" },
                            ]
                        },
                    },
                    columnVal: {
                        type: 'object',
                        options: {
                            label: 'Column Value',
                            requiredKeys: {
                                tag: {
                                    type: 'dropdown',
                                    options: {
                                        label: 'Value Type',
                                        dropdownItems: [
                                            { text: "Argument", value: "arg" },
                                            { text: "Static Value", value: "value" }
                                        ]
                                    }
                                },
                                value: {
                                    type: 'simple',
                                    options: {
                                        label: 'Value',
                                        type: 'string'
                                    }
                                }
                            }
                        }
                    },
                    connector: {
                        type: 'dropdown',
                        options: {
                            default: 'AND',
                            label: 'Logical Connector',
                            dropdownItems: [
                                { text: "And", value: "AND" },
                                { text: "Or", value: "OR" }
                            ]
                        }
                    }
                }
            }
        }
    };
    let form = {
        label: 'List Configuration',
        requiredKeys: {
            name: {
                type: 'simple',
                options: {
                    type: 'string',
                    label: 'List Name'
                }
            },
            dataSource: {
                type: 'multi',
                options: {
                    label: 'Data Source',
                    definitions: {
                        'Fetch From API': {
                            defaultValue: { type: 'json', endpoints: {} },
                            definition: {
                                type: 'object',
                                options: {
                                    label: "Fetch from API",
                                    requiredKeys: {
                                        type: {
                                            type: 'const',
                                            options: {
                                                label: '',
                                                value: 'json'
                                            }
                                        },
                                        endpoints: {
                                            type: 'object',
                                            options: {
                                                label: 'Endpoints',
                                                requiredKeys: {},
                                                newKeyTemplate: {
                                                    defaultValue: {
                                                        method: 'GET',
                                                        endpoint: 'my_xbasic_expression'
                                                    },
                                                    definition: {
                                                        type: 'object',
                                                        options: endpoint
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    optionalKeys: {
                                        preprocess: {
                                            defaultValue: () => { },
                                            definition: {
                                                type: 'simple',
                                                options: {
                                                    type: 'function',
                                                    label: 'Preprocess Function'
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        'Fetch From SQL': {
                            defaultValue: { type: 'sql', table: '', filters: [] },
                            definition: {
                                type: 'object',
                                options: {
                                    label: "Fetch from API",
                                    requiredKeys: {
                                        type: {
                                            type: 'const',
                                            options: {
                                                label: '',
                                                value: 'sql'
                                            }
                                        },
                                        table: {
                                            type: 'simple',
                                            options: {
                                                label: 'Table Name',
                                                type: 'string'
                                            }
                                        },
                                    },
                                    optionalKeys: {
                                        filters: {
                                            defaultValue: [],
                                            definition: {
                                                type: 'array',
                                                options: filters
                                            }
                                        },
                                        preprocess: {
                                            defaultValue: () => { },
                                            definition: {
                                                type: 'simple',
                                                options: {
                                                    type: 'function',
                                                    label: 'Preprocess Function'
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        'Supply Custom SQL': {
                            defaultValue: { type: 'sql', sql: '', filters: [] },
                            definition: {
                                type: 'object',
                                options: {
                                    label: "Fetch from API",
                                    requiredKeys: {
                                        type: {
                                            type: 'const',
                                            options: {
                                                label: '',
                                                value: 'sql'
                                            }
                                        },
                                        sql: {
                                            type: 'simple',
                                            options: {
                                                label: 'SQL Query',
                                                type: 'string'
                                            }
                                        },
                                        filters: {
                                            type: 'array',
                                            options: filters
                                        }
                                    },
                                    optionalKeys: {
                                        preprocess: {
                                            defaultValue: () => { },
                                            definition: {
                                                type: 'simple',
                                                options: {
                                                    type: 'function',
                                                    label: 'Preprocess Function'
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        'Static JSON': {
                            defaultValue: { type: 'json', static: [] },
                            definition: {
                                type: 'object',
                                options: {
                                    label: "Fetch from API",
                                    requiredKeys: {
                                        type: {
                                            type: 'const',
                                            options: {
                                                label: '',
                                                value: 'json'
                                            }
                                        },
                                        static: {
                                            type: 'array',
                                            options: {
                                                label: 'Static Items',
                                                defaultValue: [],
                                                itemTemplate: {
                                                    type: 'simple',
                                                    options: {
                                                        type: 'string',
                                                        label: 'Data Point'
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    optionalKeys: {
                                        preprocess: {
                                            defaultValue: () => { },
                                            definition: {
                                                type: 'simple',
                                                options: {
                                                    type: 'function',
                                                    label: 'Preprocess Function'
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            mappings: {
                type: 'array',
                options: mappings
            },
            buttons: {
                type: 'array',
                options: buttons
            },
            searchOptions: {
                type: 'object',
                options: {
                    label: 'Search Options',
                    requiredKeys: {
                        advancedSearch: {
                            type: 'simple',
                            options: {
                                label: 'Do Advanced Search?',
                                type: 'boolean'
                            }
                        },
                        serverSearch: {
                            type: 'simple',
                            options: {
                                label: "Do Server-side Search?",
                                type: 'boolean'
                            }
                        },
                    },
                    optionalKeys: {
                        paginate: {
                            defaultValue: { pageSize: 10 },
                            definition: {
                                type: 'object',
                                options: {
                                    label: 'Pagination Options',
                                    requiredKeys: {
                                        pageSize: {
                                            type: 'simple',
                                            options: {
                                                label: 'Page Size',
                                                type: 'number'
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        onlyInclude: {
                            defaultValue: [],
                            definition: {
                                type: 'array',
                                options: {
                                    defaultValue: [],
                                    label: 'Only include these columns in search',
                                    itemTemplate: {
                                        type: 'simple',
                                        options: {
                                            label: 'Column Name',
                                            type: 'string'
                                        }
                                    }
                                }
                            }
                        },
                        onlyExclude: {
                            defaultValue: [],
                            definition: {
                                type: 'array',
                                options: {
                                    defaultValue: [],
                                    label: 'Only exclude these columns in search',
                                    itemTemplate: {
                                        type: 'simple',
                                        options: {
                                            label: 'Column Name',
                                            type: 'string'
                                        }
                                    }
                                }
                            }
                        },
                    }
                }
            }
        },
        optionalKeys: {
            onInitialize: {
                defaultValue: () => { },
                definition: {
                    type: 'simple',
                    options: {
                        label: 'On Initialize Callback',
                        type: 'function'
                    }
                }
            }
        }
    };
    return Form.create(obj, { type: 'object', options: form }, 'BUILDER');
}
function buildConfigForm2(adminConfig, allColumns) {
    let singleInput = Input.singleInput;
    let singleValue = Input.singleValue;
    let btns = singleInput('array', 'List Buttons', {
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
                    validate: () => true,
                }),
                title: singleInput('string', 'Button Text (Optional)', { type: "string", default: undefined }),
                icon: singleInput('string', 'Button Icon (Optional)', { type: "string", default: undefined }),
            }
        })
    });
    let endpoint = singleInput('object', 'API Endpoint', {
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
    let editTypeDropdown = singleInput('dropdown', 'Data Type (Optional)', {
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
        ]
    });
    let subMappings = new Input({
        name: 'subMapping',
        values: [
            {
                dropdownLabel: 'JSON Value',
                value: new Value('object', {
                    type: 'object',
                    staticKeys: {
                        displayName: singleInput('string', 'Display Name (optional)'),
                        defaultValue: singleInput('string', 'Default Value (optional)', undefined, {
                            comments: "Specify a Javascript expression for the default value"
                        }),
                    }
                })
            },
            {
                dropdownLabel: 'JSON Object',
                value: new Value('object', {
                    type: 'object',
                    staticKeys: {
                        displayName: singleInput('string', 'Display Name (optional)'),
                        defaultValue: singleInput('string', 'Default Value (optional)', undefined, {
                            comments: "Specify a Javascript expression for the default value"
                        }),
                    },
                    dynamicKeys: singleInput('recursive', 'Keys', {
                        type: 'recursive',
                        recurseOn: 'subMapping'
                    })
                }),
            },
            {
                dropdownLabel: 'JSON Array',
                value: new Value('object', {
                    type: 'object',
                    staticKeys: {
                        displayName: singleInput('string', 'Display Name (optional)'),
                        defaultValue: singleInput('string', 'Default Value (optional)', undefined, {
                            comments: "Specify a Javascript expression for the default value"
                        }),
                        arrayItem: singleInput('recursive', 'Array Item', {
                            type: 'recursive',
                            recurseOn: 'subMapping'
                        })
                    }
                }),
            }
        ],
        label: 'Sub-Mappings',
        comments: "Specify mappings for nested JSON data (JSON type only)",
        validate: () => true
    });
    let mappings = new Input({
        values: singleValue(new Value('array', {
            type: 'array',
            default: [],
            arrayInput: singleInput('object', 'Column Settings', {
                type: "object",
                staticKeys: {
                    columnName: singleInput('dropdown', 'Column Name', {
                        type: "dropdown",
                        dropdownItems: allColumns,
                        onChange: (x, dropdown) => {
                            let selected = x.item.data;
                            for (const colInfo of allColumns) {
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
                    editType: editTypeDropdown,
                    subMappings: subMappings,
                    serverDateFormat: singleInput('string', 'Server Date Format', {
                        type: 'string',
                        default: undefined,
                    }, {
                        show: (i) => {
                            var _a;
                            let p = i.parent;
                            if (p == null)
                                return true;
                            let editType = (_a = p.selected().key("editType")) === null || _a === void 0 ? void 0 : _a.serialize();
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
                                validate: () => true,
                            }),
                            fromColumn: singleInput('string', 'Derive From Column', { type: "string", default: undefined }),
                        },
                    })
                },
            }, {
                onPopulate: (input, d) => {
                    let name = d.displayName ? d.displayName : d.columnName;
                    input.label = name + " options";
                },
                name: "mapping",
            }),
        })),
        label: "List Mappings",
        comments: "Add or remove columns for the list",
        validate: () => true,
    });
    let filters = singleInput('array', "Filters", {
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
                validate: () => true
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
                    "onClick": () => {
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
                    onClick: () => {
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
                    "onClick": () => {
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
                    onClick: () => {
                        let input = document.createElement('input');
                        input.type = 'file';
                        input.accept = 'application/json';
                        input.multiple = false;
                        input.onchange = _ => {
                            var _a;
                            let files = Array.from((_a = input.files) !== null && _a !== void 0 ? _a : []);
                            if (files.length > 0) {
                                let reader = new FileReader();
                                reader.readAsText(files[0]);
                                reader.onloadend = (res) => {
                                    var _a, _b;
                                    let text = (_b = (_a = reader.result) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : "";
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
