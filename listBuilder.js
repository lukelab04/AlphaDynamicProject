"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const LIST_NAME = 'DYNAMIC_LIST';
const DETAIL_FORM_NAME = "DETAIL_VIEW";
const objTimeFormat = () => A5.__tfmt;
const objDatetimeFormat = () => A5.__dtfmt + ' ' + objTimeFormat();
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "Validation Error";
        this.message = message;
    }
    newFn() {
        return 10;
    }
    toString() {
        return this.name + ": " + this.message;
    }
}
function stringReprToFn(s) {
    return eval(s);
}
function propExists(obj, prop) {
    return prop in obj;
}
function existsAndIs(obj, prop, val) {
    return prop in obj && typeof obj[prop.toString()] == typeof val;
}
function existsAndIsOrNone(obj, prop, val) {
    if (!(prop in obj))
        return true;
    if (prop in obj && typeof obj[prop.toString()] == 'undefined')
        return true;
    return existsAndIs(obj, prop, val);
}
function existsIsErr(root, prop, type) {
    return new ValidationError(`Expected "${root}" to have a prop "${prop}" of type "${type}"`);
}
function validateConfig(config) {
    if (config == null || typeof config != 'object')
        throw new ValidationError("Expected config to be an object, not " + JSON.stringify(config));
    if (!existsAndIs(config, 'name', 'string'))
        throw existsIsErr("config", "name", "string");
    if ('onInitialize' in config) {
        if (!existsAndIs(config, 'onInitialize', "string"))
            throw existsIsErr("config", "onInitialize", "function");
    }
    if (!existsAndIs(config, "dataSource", {}))
        throw existsIsErr("config", "dataSource", "object");
    if (!existsAndIs(config.dataSource, 'type', 'string'))
        throw existsIsErr("config.dataSource", "type", "string");
    if (config.dataSource.type == 'json') {
        if ('static' in config.dataSource) {
            if (!(config.dataSource.static instanceof Array))
                throw new ValidationError("Expected `config.dataSource.static` to be an array");
        }
        else if ('endpoints' in config.dataSource) {
            if (!existsAndIs(config.dataSource, "endpoints", {}))
                throw existsIsErr("config.dataSource", "endpoints", "object");
            for (const key in config.dataSource.endpoints) {
                validateEndpoint(config.dataSource.endpoints[key]);
            }
        }
        else {
            throw new ValidationError("Expected `config.dataSource` to have a prop `static` or a prop `endpoints`");
        }
    }
    else if (config.dataSource.type == 'sql') {
        if ('table' in config.dataSource) {
            if (!existsAndIs(config.dataSource, "table", "string"))
                throw existsIsErr("config.dataSource", "table", "string");
            if ('filters' in config.dataSource) {
                if (!(config.dataSource.filters instanceof Array)) {
                    throw new ValidationError("Expected `config.dataSource.filters` to be an array");
                }
                else {
                    config.dataSource.filters.forEach(f => validateFilter(f));
                }
            }
        }
        else if ('sql' in config.dataSource) {
            if (!existsAndIs(config.dataSource, "sql", "string"))
                throw existsIsErr("config.dataSource", "sql", "string");
            if ('filters' in config.dataSource) {
                if (!(config.dataSource.filters instanceof Array)) {
                    throw new ValidationError("Expected `config.dataSource.filters` to be an array");
                }
                else {
                    config.dataSource.filters.forEach(f => validateFilter(f));
                }
            }
        }
        else {
            throw new ValidationError("Expected `config.dataSource` to have a prop `table` or a prop `sql`");
        }
    }
    else {
        throw new ValidationError('Expected `config.dataSource.type` to be `json` or `sql`');
    }
    if (propExists(config.dataSource, "preprocess")) {
        if (typeof config.dataSource.preprocess != 'string')
            throw existsIsErr("config.dataSource", "preprocess", "string");
    }
    if (!('mappings' in config && config.mappings instanceof Array))
        throw new ValidationError('Expected `config` to have a prop `mappings` of type Array');
    config.mappings.forEach(x => validateMapping(x));
    if (!existsAndIs(config, "searchOptions", {}))
        throw existsIsErr("config", "searchOptions", "object");
    if (propExists(config.searchOptions, 'paginate')) {
        if (!existsAndIs(config.searchOptions, "paginate", {}))
            throw existsIsErr("config.searchOptions", "paginate", "object");
        if (!existsAndIs(config.searchOptions.paginate, "pageSize", 0))
            throw existsIsErr("config.searchOptions.paginate", "pageSize", "number");
    }
    if (propExists(config, "buttons")) {
        if (!(config.buttons instanceof Array))
            throw new ValidationError("Expected `config.buttons` to be of type `Array`");
        config.buttons.forEach(b => validateListBtn(b));
    }
    return config;
}
function validateConfigSchema(config, manager) {
    //config.mappings.forEach(m => validateMappingSchema(m, manager));
}
function validateListBtn(btn) {
    if (typeof btn != 'object' || btn == null)
        throw new ValidationError("Expected list button to be of type `object`");
    if (!existsAndIs(btn, "columnTitle", ""))
        throw existsIsErr("config.buttons", "columnTitle", "string");
    if (!existsAndIs(btn, "onClick", {}))
        throw existsIsErr("config.buttons", "onClick", "object");
    if ('function' in btn.onClick) {
        if (!existsAndIs(btn.onClick, "function", "string"))
            throw existsIsErr("config.buttons.function", "action", "string");
    }
    else if ('action' in btn.onClick) {
        if (!existsAndIs(btn.onClick, "action", "string"))
            throw existsIsErr("config.buttons.action", "action", "string");
    }
    else {
        throw new ValidationError('Expected button.onClick to have either a field "function" or a field "action"');
    }
    if (!existsAndIsOrNone(btn, "title", "string"))
        throw existsIsErr("config.buttons", "title", "string");
    if (!existsAndIsOrNone(btn, "icon", "string"))
        throw existsIsErr("config.buttons", "icon", "string");
    if (propExists(btn, "children")) {
        if (!(btn.children instanceof Array))
            throw existsIsErr("config.buttons", "children", "Array");
        btn.children.forEach(x => validateListBtn(x));
    }
    return btn;
}
function validateMapping(mapping) {
    if (typeof mapping != 'object' || mapping == null)
        throw new ValidationError('Expected "config" to have a prop "mapping" of type "object"');
    if (!existsAndIs(mapping, "columnName", "string"))
        throw existsIsErr("config.mappings", "columnName", "string");
    if (!existsAndIsOrNone(mapping, "displayName", "string"))
        throw existsAndIs("config.mappings", "displayName", "string");
    if (!existsAndIsOrNone(mapping, "inList", true))
        throw existsAndIs("config.mappings", "inList", "boolean");
    if (!existsAndIsOrNone(mapping, "inDetailView", true))
        throw existsAndIs("config.mappings", "inDetailView", "boolean");
    if (!existsAndIsOrNone(mapping, "editType", "string"))
        throw existsAndIs("config.mappings", "editType", "string");
    if ('editType' in mapping) {
        if (mapping.editType == undefined || (mapping.editType != 'text'
            && mapping.editType != 'dropdown'
            && mapping.editType != 'time'
            && mapping.editType != 'json'
            && mapping.editType != 'datetime'
            && mapping.editType != 'bool'
            && mapping.editType != 'number')) {
            throw existsIsErr("config.mappings", "editType", "one of text, dropdown, time, datetime, bool, number");
        }
    }
    if (!existsAndIsOrNone(mapping, "serverDateFormat", "string"))
        throw existsAndIs("config.mappings", "serverDateFormat", "string");
    if (!existsAndIsOrNone(mapping, "template", "string"))
        throw existsAndIs("config.mappings", "template", "string");
    if (!existsAndIsOrNone(mapping, "width", "string"))
        throw existsAndIs("config.mappings", "width", "string");
    if (existsAndIs(mapping, "dropdownConfig", {})) {
        if ('choices' in mapping.dropdownConfig && !(mapping.dropdownConfig.choices instanceof Array))
            throw existsIsErr("config.mappings.dropdownConfig", "choices", "String Array");
        else if ('fromColumn' in mapping.dropdownConfig && typeof mapping.dropdownConfig.fromColumn != 'string')
            throw existsIsErr("config.mappings.dropdownConfig", "fromColumn", "string");
        else if (!('choices' in mapping.dropdownConfig || 'fromColumn' in mapping.dropdownConfig))
            throw new ValidationError('Expected "config.mappings.dropdownConfig" to have a prop "choices" of type "String Array" or a prop "fromColumn" of type "string"');
    }
    return mapping;
}
function validateMappingSchema(mapping, manager) {
    if (!manager.getAvailableDataColumns().includes(mapping.columnName)) {
        throw new ValidationError(`Mapping "${mapping.columnName}" is not a column of the list data`);
    }
}
function validateEndpoint(endpoint) {
    if (endpoint == null || typeof endpoint != 'object')
        throw new ValidationError('Expected "config.mappings.endpoints.endpoint" to be of type "object"');
    let root = "config.mappings.endpoints.endpoint";
    if (!existsAndIs(endpoint, "method", "string"))
        throw existsIsErr(root, "method", "string");
    if (!existsAndIsOrNone(endpoint, "headers", {}))
        throw existsIsErr(root, "headers", "object");
    if (!existsAndIsOrNone(endpoint, "callback", "string"))
        throw existsIsErr(root, "callback", "string");
    if (!existsAndIs(endpoint, "endpoint", "string"))
        throw existsIsErr(root, "endpoint", "string");
    return endpoint;
}
function validateFilter(filter) {
    if (filter == null || typeof filter != 'object')
        throw new ValidationError("Expected list filter to be an object");
    if (!existsAndIs(filter, "columnName", "string"))
        throw existsIsErr("filter", "columnName", "string");
    if (!existsAndIs(filter, "columnVal", {}))
        throw existsIsErr("filter", "columnVal", "object");
    if (!existsAndIs(filter.columnVal, "tag", "string"))
        throw existsIsErr("filter.columnVal", "tag", "string");
    if (!existsAndIs(filter.columnVal, "value", "string"))
        throw existsIsErr("filter.columnVal", "value", "string");
    if (!existsAndIs(filter, "op", "string"))
        throw existsIsErr("filter", "op", "string");
    if (!existsAndIsOrNone(filter, "type", "string"))
        throw existsIsErr("filter", "type", "string");
    if (!existsAndIs(filter, "connector", "string")) {
        throw existsIsErr("filter", "connector", "string");
    }
    else {
        if (filter.connector != 'AND' && filter.connector != 'OR') {
            throw new ValidationError('Expected "filter.connector" to be "AND" or "OR"');
        }
    }
    if (!existsAndIsOrNone(filter, "quantifier", "string")) {
        throw existsIsErr("filter", "quantifier", "string");
    }
    else {
        if ('quantifier' in filter && filter.quantifier != 'ALL' && filter.quantifier != 'SOME') {
            throw new ValidationError('Expected "filter.quantifier" to be "ALL" or "SOME"');
        }
    }
    return filter;
}
function alphaTypeToEditType(t) {
    switch (t.toLowerCase()) {
        case 'c': return 'text';
        case 't':
        case 'd': return 'datetime';
        case 'l': return 'bool';
        case 'n': return 'number';
        case 'y': return 'time';
        default: return 'text';
    }
}
function editTypeToAlphaType(t) {
    switch (t.toLowerCase()) {
        case 'text':
        case 'dropdown': return 'c';
        case 'time': return 'y';
        case 'datetime': return 't';
        case 'bool': return 'l';
        case 'number': return 'n';
        default: return 'c';
    }
}
function jsTypeToAlphaType(t) {
    switch (t.toLowerCase()) {
        case 'boolean': return 'l';
        case 'number': return 'n';
        case 'bigint': return 'n';
        default: return 'c';
    }
}
function getSchema(obj, table) {
    return new Promise((resolve) => {
        obj.ajaxCallback("", "", "getSchemaAjaxCallback", "", "tableName=" + encodeURIComponent(table), {
            onComplete: resolve
        });
    });
}
function getSchemaCustomSql(obj, sql) {
    return new Promise((resolve) => {
        obj.ajaxCallback("", "", "getSchemaAjaxCallback", "", "sql=" + encodeURIComponent(sql), {
            onComplete: resolve
        });
    });
}
function fetch(obj, configName, endpoint) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            obj.ajaxCallback("", "", "fetch", "", `configName=${encodeURIComponent(configName)}`
                + (endpoint != undefined ? `&endpoint=${encodeURIComponent(endpoint)}` : ""), {
                onComplete: () => {
                    let result = obj.stateInfo.fetchResult;
                    resolve(result);
                }
            });
        });
    });
}
class DynamicList {
    constructor() {
        this.nestedPath = [];
        this.dataScopeManager = new DataScopeManager({});
        this.permanentFilters = [];
        this.searchFilters = [];
        this.buttonFns = {};
        this.onRender = [];
        this.config = undefined;
        this.data = [];
        this.rawData = [];
        this.schema = undefined;
        this.window = window;
    }
    destructor() {
        if (this.listBox.destroy)
            this.listBox.destroy();
    }
    static makeDynamicList(obj, window, prefetch, filters = [], args = []) {
        return new Promise((resolve) => {
            let list = new DynamicList();
            list.permanentFilters = filters;
            list.searchFilters = [];
            list.buttonFns = {};
            list.window = window;
            list.onRender = [];
            list.obj = obj;
            list.listBox = null;
            list.config = jQuery.extend({}, prefetch.config);
            list.data = [];
            list.rawData = [];
            list.schema = {};
            validateConfig(list.config);
            if (list.config.onInitialize) {
                stringReprToFn(list.config.onInitialize)(list, args);
            }
            obj.getControl('LIST1')._size = () => { };
            obj.getControl('LIST1')._resize = () => { };
            obj.saveDynamicListEdits = () => list.saveDynamicListEdits();
            list.settings = list.buildSettings();
            list.buildList();
            resolve(list);
        })
            .then((list) => {
            if (prefetch.data === undefined || prefetch.data.length == 0) {
                return list.fetchSchema(false).then(l => l.fetchData());
            }
            else {
                list.setData(prefetch.data, true);
                return list;
            }
        })
            .then((list) => {
            list.dataScopeManager = new DataScopeManager(list.schema);
            list.dataScopeManager.setPathFromConfig(list.config, list.rawData);
            return list.reRender(false);
        }).then((list) => {
            validateConfigSchema(list.config, list.dataScopeManager);
            return list;
        });
    }
    reRender(refetch) {
        if (refetch) {
            return this.fetchData().then(list => {
                list.populateListBox();
                return list;
            });
        }
        this.populateListBox();
        return Promise.resolve(this);
    }
    setStaticData(data) {
        this.config.dataSource = {
            type: 'json',
            static: data,
            preprocess: this.config.dataSource.preprocess,
        };
        this.settings = this.buildSettings();
        this.buildList();
        this.reRender(true);
    }
    selection() {
        return this.data[this.listBox.selectionKey[0]];
    }
    openDetailView() {
        this.obj.runAction('Navigate Detail View');
    }
    newDetailViewRecord() {
        let makeForm = () => this.buildDetailViewForm();
        let openForm = () => this.obj.runAction('Navigate Detail View');
        let makeNew = () => this.listBox.newDetailViewRecord();
        A5.executeThisThenThat(makeForm, openForm, makeNew);
    }
    saveDynamicListEdits() {
        let harvest = this.listBox.harvestList();
        let onComplete = () => {
            let result = this.obj.stateInfo.apiResult;
            if (result.err) {
                let errMsgTxt = "<p>There were errors while syncing data.</p> <ol>";
                result.err.forEach((e) => errMsgTxt += `<li>${e === null || e === void 0 ? void 0 : e.toString()}</li>`);
                errMsgTxt += "</ol>";
                displayErrorMessage(errMsgTxt);
            }
            this.listBox.__fixData(this.listBox);
            for (let i = 0; i < this.listBox._data.length; i++) {
                this.listBox._data[i]._isDirty = false;
            }
            this.listBox.populateUXControls();
            this.obj.refreshClientSideComputations(true);
            this.reRender(true);
        };
        if (this.config.dataSource.type == 'sql' && 'table' in this.config.dataSource) {
            this.obj.ajaxCallback("", "", "updateData", "", "tableName=" + encodeURI(this.config.dataSource.table)
                + "&dirty=" + encodeURI(JSON.stringify(harvest)), {
                onComplete: onComplete,
            });
        }
        else if (this.config.dataSource.type == 'sql' && 'sql' in this.config.dataSource) {
            this.obj.ajaxCallback("", "", "updateData", "", "customSql=" + encodeURI(this.config.dataSource.sql)
                + "&dirty=" + encodeURI(JSON.stringify(harvest)), {
                onComplete: onComplete,
            });
        }
        else if (this.config.dataSource.type == 'json' && 'endpoints' in this.config.dataSource) {
            let newRows = [];
            let updatedRows = [];
            let deletedRows = [];
            harvest.forEach((r) => {
                if ('_isNewRow' in r && r._isNewRow === true) {
                    newRows.push(r);
                }
                else if ('_isDeleted' in r && r._isDeleted === true) {
                    deletedRows.push(r);
                }
                else {
                    updatedRows.push(r);
                }
            });
            let allQueries = [];
            let populateQueries = (list, endpoint) => {
                list.forEach(_ => {
                    var _a;
                    if (!('endpoints' in this.config.dataSource))
                        return;
                    if (endpoint in this.config.dataSource.endpoints) {
                        let ep = this.config.dataSource.endpoints[endpoint];
                        allQueries.push({
                            endpoint: endpoint,
                            callback: stringReprToFn((_a = ep.callback) !== null && _a !== void 0 ? _a : "() => { }"),
                        });
                    }
                });
            };
            populateQueries(newRows, 'add');
            populateQueries(updatedRows, 'update');
            populateQueries(deletedRows, 'delete');
            allQueries.forEach(q => {
                fetch(this.obj, this.config.name, q.endpoint).then(q.callback);
            });
            onComplete();
        }
    }
    buildSettings() {
        let columns = this.window.Array();
        let listFields = this.window.Array();
        let menuSettings = this.window.Object();
        let items = this.window.Object();
        let listObj = this;
        if (!this.config.buttons)
            this.config.buttons = (this.window.Array());
        for (const mapping of this.config.mappings) {
            columns.push(this.buildColumnDefn(mapping));
            listFields.push(this.buildListFieldDefn(mapping));
        }
        for (let i = 0; i < this.config.buttons.length; i++) {
            columns.push(this.buildColumnButton(this.config.buttons[i], i, items));
            this.makeMenuSetting(this.config.buttons[i], i, menuSettings, items);
        }
        let dialogId = this.obj.dialogId;
        return {
            theme: this.obj.styleName,
            layout: 'Default',
            listVariableName: LIST_NAME,
            listVariableNameTrueCase: LIST_NAME,
            layouts: {
                Default: {
                    group: { auto: false },
                    type: 'column',
                    showColumnTitles: true,
                    item: {},
                    fixedFooterDefinition: '[]',
                    columns: columns,
                    _hasRCW: false,
                    _horizontalScrolling: false,
                    _hasColumnSeparators: false,
                }
            },
            _listFields: listFields,
            childLists: [],
            allParentLists: [],
            items: items,
            _menuSettings: menuSettings,
            onBeforeSelect: () => {
                let c = this.listBox.childLists;
                let lObj = '';
                if (typeof c != 'undefined') {
                    for (let i = 0; i < c.length; i++) {
                        lObj = this.obj.getControl(c[i]);
                        if (lObj) {
                            let flat = lObj.onBeforeSelect();
                        }
                    }
                }
                if (this.listBox._dvmode == 'search')
                    return true;
                if (!this.listBox._autoCommitDetailView) {
                    return this.listBox._showDirtyDetailViewWarning();
                }
                else {
                    if (this.listBox.detailViewIsDirty && this.listBox.detailViewIsDirty(true)) {
                        let result = this.listBox.updateListFromUXControls();
                        return result;
                    }
                }
            },
            onSelect: (index) => {
                // Will be assigned by Alpha later
                this.listBox.populateUXControls();
                this.listBox._selectedRow = this.listBox.selection[0];
                this.obj._listRowSelect(LIST_NAME, this.listBox);
                this.listBox._selectedRow = this.listBox.selection[0];
            },
            onClick: () => {
                this.obj._listSystemOnClick(LIST_NAME, this.listBox.selection[0]);
            },
            onBeforePopulate: (data) => {
                if (this.listBox)
                    this.listBox.__onPopulateHasFired = false;
                for (let i = 0; i < data.length; i++) {
                    for (const mapping of this.config.mappings) {
                        switch (mapping.editType) {
                            case 'time':
                                data[i][mapping.columnName] = A5.stringToDate(data[i][mapping.columnName]);
                                break;
                            case 'datetime':
                                data[i][mapping.columnName] = A5.stringToDate(data[i][mapping.columnName], mapping.serverDateFormat);
                                break;
                            case 'number':
                                data[i][mapping.columnName] = $u.s.toNum(data[i][mapping.columnName]);
                                break;
                            case 'bool':
                                data[i][mapping.columnName] = $u.s.toBool(data[i][mapping.columnName]);
                                break;
                        }
                    }
                }
            },
            onBeforeUpdateRow: (index, data) => {
                for (const mapping of this.config.mappings) {
                    switch (mapping.editType) {
                        case 'time':
                            data[mapping.columnName] = A5.stringToDate(data[mapping.columnName], objDatetimeFormat());
                            break;
                        case 'datetime':
                            data[mapping.columnName] = A5.stringToDate(data[mapping.columnName], objDatetimeFormat());
                            break;
                        case 'number':
                            data[mapping.columnName] = $u.s.toNum(data[mapping.columnName]);
                            break;
                        case 'bool':
                            data[mapping.columnName] = $u.s.toBool(data[mapping.columnName]);
                            break;
                    }
                }
            },
            _onSelect: (index) => this.listBox.onSelect(index),
            _hasDetailView: true,
            _JSONForm: true,
            _JSONFormName: DETAIL_FORM_NAME,
            _JSONFormDefinition: 'auto-generated-client-side',
            _detailViewHas: true,
            _detailView: {
                method: 'JSONForm'
            },
            _inplaceEditing: { allow: false },
            _dataSourceType: this.config.dataSource.type == 'sql' ? 'SQL' : 'Static',
            _detailViewGlobalErrorStyle: 'font-family: Arial; font-size: 10pt; color: red; border: solid 1px red; width: 100%;',
            _autoCommitDetailView: true,
            customization: {
                dv: {
                    clientSideErrorWarning: 'Cannot save because there are validation errors.',
                    dirtyDetailViewRecord: {
                        title: 'Warning',
                        icon: 'svgIcon=#alpha-icon-questionCircle:icon,24',
                        message: 'You must first save or undo the changes you have made to the List\'s Detail View.'
                    },
                    confirmFormResetWarning: {
                        title: 'Warning',
                        icon: 'svgIcon=#alpha-icon-questionCircle:icon,24',
                        message: 'Are you sure you want to undo changes made to the List\'s Detail View?'
                    },
                    confirmRowResetWarning: {
                        title: 'Warning',
                        icon: 'svgIcon=#alpha-icon-questionCircle:icon,24',
                        message: 'Are you sure you want to undo changes made to this record?'
                    },
                    confirmDeleteWarning: {
                        title: 'Warning',
                        icon: 'svgIcon=#alpha-icon-questionCircle:icon,24',
                        message: 'Are you sure you want to delete this record?'
                    },
                    writeConflict: {
                        useMineMessage: 'Use mine (\'{myvalue}\')',
                        useTheirsMessage: 'Use theirs (\'{theirvalue}\')',
                        useMineAll: 'Use mine for all fields',
                        useTheirsAll: 'Use theirs for all fields'
                    },
                    databaseError: {
                        update: 'Record was not updated.|More...|Less',
                        insert: 'Record was not inserted.|More...|Less',
                        delete: 'Record was not deleted.|More...|Less'
                    },
                    useCustomClasses: false,
                    setClassonEditedRows: true,
                    css: {}
                }
            },
            footer: {
                show: Boolean(this.config.searchOptions.paginate),
                html: '<div id="DYNAMIC_LIST_NAVIGATOR" style="width: 100%; text-align: center;"></div>'
            },
            _mediaFields: [],
            _getRoute: (_mode, _obj, _endPoint) => {
                let mode = typeof _mode != 'undefined' ? _mode : 'rowNumber';
                let obj = typeof _obj != 'undefined' ? _obj : [];
                if (typeof this.listBox.selection == 'undefined')
                    return false;
                if (typeof this.listBox.selection[0] == 'undefined')
                    return false;
                if (typeof this.listBox.getData(this.listBox.selection[0]) == 'undefined')
                    return false;
                if (mode == '*key') {
                }
                else {
                    if (mode != 'rowNumber') {
                        let _d = this.listBox.getData(this.listBox.selection[0]);
                        if (typeof _d.__primaryKey == 'undefined') {
                            mode = 'rowNumber';
                        }
                    }
                }
                let endPoint = typeof _endPoint != 'undefined' ? _endPoint : '';
                if (endPoint != '') {
                    let ra2 = [];
                    let lObj = this.obj.getControl(endPoint);
                    let parentList = lObj.parentList;
                    while (typeof parentList != 'undefined') {
                        let l2 = this.obj.getControl(parentList);
                        let row = '';
                        if (mode == 'rowNumber')
                            row = l2.selection[0];
                        else
                            row = l2.getData(l2.selection[0])['*key'];
                        ra2.push({ list: parentList.toUpperCase(), row: row });
                        parentList = l2.parentList;
                    }
                    return ra2.reverse();
                }
                if (mode == 'rowNumber' || mode == '*key') {
                    obj.push({
                        list: this.listBox.listVariableName.toUpperCase(),
                        row: this.listBox.getData(this.listBox.selection[0])['*key'], mode: mode
                    });
                }
                else {
                    let _d = this.listBox.getData(this.listBox.selection[0]);
                    let _pk = _d.__primaryKey;
                    if (typeof _d.__primaryKey == 'undefined') {
                        _pk = _d['*rowGUID'];
                    }
                    obj.push({
                        list: this.listBox.listVariableName.toUpperCase(),
                        row: _pk,
                        mode: mode
                    });
                }
                for (let i = 0; i < this.listBox.childLists.length; i++) {
                    let lname = this.listBox.childLists[i];
                    let lObj = this.obj.getControl(lname);
                    if (lObj)
                        lObj._getRoute(mode, obj);
                }
                return obj;
            },
            _setRoute: (route, _mode) => {
                if (this.listBox.multiple)
                    return;
                if (typeof route == 'undefined') {
                    route = this.listBox.__currentRoute;
                    if (typeof route == 'undefined')
                        return false;
                }
                let mode = _mode !== null && _mode !== void 0 ? _mode : 'rowNumber';
                if (mode == 'primaryKey') {
                    let _d = this.listBox._data;
                    if (typeof _d[0] != 'undefined') {
                        if (typeof _d[0].__primaryKey == 'undefined') {
                            mode = 'rowNumber';
                        }
                    }
                }
                let lObj = '';
                let row = '';
                let _pk = '';
                for (let i = 0; i < route.length; i++) {
                    lObj = this.obj.getControl(route[i].list);
                    row = route[i].row;
                    if (typeof route[i].mode != 'undefined') {
                        mode = route[i].mode;
                    }
                    if (mode == 'primaryKey')
                        _pk = row;
                    let flag = typeof this.listBox._restoringList != 'undefined' ? !this.listBox._restoringList : true;
                    if (mode == 'rowNumber') {
                        if (typeof row != 'undefined') {
                            let rowFixed = '';
                            if (typeof lObj._dataMap == 'undefined')
                                return false;
                            if (mode != 'rowNumber') {
                                rowFixed = row;
                            }
                            else {
                                rowFixed = lObj._dataMap.indexOf(route[i].row);
                            }
                            lObj.setValue(rowFixed, flag);
                            if (this.listBox._clearServerSideErrors)
                                this.listBox._clearServerSideErrors();
                            if (this.listBox.showServerSideErrors)
                                this.listBox.showServerSideErrors();
                            if (this.listBox._showWriteConflictErrors)
                                this.listBox._showWriteConflictErrors();
                        }
                    }
                    else {
                        lObj.setValue('' + _pk, flag);
                        if (this.listBox._clearServerSideErrors)
                            this.listBox._clearServerSideErrors();
                        if (this.listBox.showServerSideErrors)
                            this.listBox.showServerSideErrors();
                        if (this.listBox._showWriteConflictErrors)
                            this.listBox._showWriteConflictErrors();
                    }
                }
            },
            _executeEvent: (event, obj) => this.obj._list_executeEvent(LIST_NAME, event, obj),
            _refreshDebugInfo: () => { },
            _str: (txt) => {
                txt = txt.replace("'", "\\'");
                txt = '\'' + txt + '\'';
                return txt;
            },
            onBeforeItemDraw: function () { },
            onItemDraw: function (ele, data, index) {
                if (!('_rData' in this))
                    return;
                let _dirtyRowClassName = `_${dialogId}_LIST1_dirtyRow`;
                let _dirtyRowClassNameInherited = `_${dialogId}_LIST1_dirtyRowInherited`;
                let _dirtyRowStyle = `_${dialogId}_LIST1_dirtyRowStyle`;
                let _hasUnsyncedMediaFilesClassName = `_${dialogId}_LIST1_hasUnsyncedMediaFiles`;
                let _errorRowClassName = `_${dialogId}_LIST1_hasError`;
                let _errorRowClassNameInherited = `_${dialogId}_LIST1_hasErrorInherited _${dialogId}_LIST1_dirtyRowInherited`;
                let _errorRowClassNameInherited_1 = `_${dialogId}_LIST1_hasErrorInherited`;
                let _errorRowClassNameInherited_2 = `_${dialogId}_LIST1_dirtyRowInherited`;
                let _errorRowStyle = `_${dialogId}_LIST1_hasErrorStyle`;
                let _newRowClassName = `_${dialogId}_LIST1_newRow`;
                let _newRowStyle = `_${dialogId}_LIST1_newRowStyle`;
                let _deletedRowClassName = `_${dialogId}_LIST1_deletedRow`;
                let _deletedRowStyle = `_${dialogId}_LIST1_deletedRowStyle`;
                let _deletedRowClassNameInherited = `_${dialogId}_LIST1_deletedRowInherited`;
                let __d = this._rData[index];
                $rcn(ele, _dirtyRowClassName);
                $rcn(ele, _dirtyRowClassNameInherited);
                $rcn(ele, _dirtyRowStyle);
                $rcn(ele, _errorRowClassName);
                $rcn(ele, _errorRowClassNameInherited);
                $rcn(ele, _errorRowClassNameInherited_1);
                $rcn(ele, _errorRowClassNameInherited_2);
                $rcn(ele, _errorRowStyle);
                $rcn(ele, _newRowClassName);
                $rcn(ele, _newRowStyle);
                $rcn(ele, _deletedRowClassName);
                $rcn(ele, _deletedRowStyle);
                $rcn(ele, _hasUnsyncedMediaFilesClassName);
                if (data._isDirty && typeof data._isDeleted != 'undefined' && data._isDeleted) {
                    $acn(ele, _deletedRowClassName);
                    $acn(ele, _deletedRowStyle);
                    __d.__displayStyle = 'deletedRow';
                }
                else if ((data._isDirty && typeof data._oldData != 'undefined' && !data._isNewRow)) {
                    $acn(ele, _dirtyRowClassName);
                    $acn(ele, _dirtyRowStyle);
                    __d.__displayStyle = 'dirtyRow';
                }
                if (data._isDirty && typeof data._oldData == 'undefined' && !(data._isNewRow || data._isDeleted)) {
                    $acn(ele, _dirtyRowClassNameInherited);
                    $acn(ele, _dirtyRowStyle);
                    __d.__displayStyle = 'dirtyRowInherited';
                }
                if (data._isDeleted) {
                    $acn(ele, _deletedRowClassName);
                    $acn(ele, _deletedRowStyle);
                    __d.__displayStyle = 'deletedRow';
                }
                if (data._isNewRow) {
                    $acn(ele, _newRowClassName);
                    $acn(ele, _newRowStyle);
                    __d.__displayStyle = 'newRow';
                }
                let flagHasGlobalErrors = false;
                if (typeof data._globalErrors != 'undefined') {
                    if (data._globalErrors != '')
                        flagHasGlobalErrors = true;
                }
                let flagHasWriteConflictErrors = false;
                if (typeof data._hasWriteConflictErrors)
                    flagHasWriteConflictErrors = data._hasWriteConflictErrors;
                if (data._hasServerSideError || flagHasGlobalErrors || flagHasWriteConflictErrors) {
                    $acn(ele, _errorRowClassName);
                    $acn(ele, _errorRowStyle);
                    __d.__displayStyle = 'errorRow';
                }
                else {
                    if (data._flagServerSideErrorInChild || data._flagWriteConflictErrorInChild || data._flagGlobalErrorInChild) {
                        if (!data._isNewRow) {
                            $acn(ele, _errorRowClassNameInherited);
                            __d.__displayStyle = 'errorRowInherited';
                        }
                        else {
                            __d.__displayStyle = 'newRow errorRowInherited';
                            $acn(ele, _errorRowClassNameInherited_1);
                        }
                    }
                }
                if (data._hasUnsyncedMediaFiles && data._isDirty) {
                    $acn(ele, _hasUnsyncedMediaFilesClassName);
                }
                if (index == this._rData.length - 1) {
                    let btns = listObj.window.document.getElementsByClassName(`${LIST_NAME}_BUTTON`);
                    for (let i = 0; i < btns.length; i++) {
                        btns[i].parentElement.style.whiteSpace = 'normal';
                    }
                }
            },
            _navBarId: 'DYNAMIC_LIST_NAVIGATOR',
            _refreshStateMessages: () => {
                if (!this.config.searchOptions.paginate)
                    return;
                if (this.obj._listStateChange)
                    this.obj._listStateChange(this.listBox.listVariableName);
                let ele = '';
                ele = $(`_${this.obj.dialogId}.DUMMY.PAGENUMBER`);
                if (ele)
                    ele.innerHTML = this.listBox._state.page;
                ele = $(`_${this.obj.dialogId}.DUMMY.PAGECOUNT`);
                if (ele)
                    ele.innerHTML = this.listBox._state.pageCount;
                ele = $(`_${this.obj.dialogId}.DUMMY.PAGECOUNT.PAGESELECTOR`);
                if (ele)
                    ele.innerHTML = this.listBox._state.pageCount;
                ele = $(`_${this.obj.dialogId}.DUMMY.LISTSTATE`);
                if (ele) {
                    let listState = $u.o.toJSON(this.listBox._state);
                    ele.innerHTML = listState;
                }
                if (this.listBox._hasNavigationBar) {
                    let nObj = this.listBox._listNavigator;
                    if (!nObj) {
                        this.listBox._listNavigator = this.obj._navigationBar(this.listBox._navBarId);
                    }
                    nObj = this.listBox._listNavigator;
                    if (nObj) {
                        let obj = nObj.data;
                        obj.settings = this.listBox._navigationBar;
                        obj.pageNumber = this.listBox._state.page;
                        obj.totalPages = this.listBox._state.pageCount;
                        obj.totalRecords = this.listBox._state.recordCount;
                        nObj.items.clickNavigationLink.onClick = (v, ia, i, ele) => {
                            ia = ia.split('|');
                            let target = ia[1];
                            if (target == 'first') {
                                this.listBox._state.page = 1;
                            }
                            else if (target == 'prev') {
                                if (this.listBox._state.page >= 1) {
                                    this.listBox._state.page -= 1;
                                }
                            }
                            else if (target == 'next') {
                                if (this.listBox._state.page < this.listBox._state.pageCount) {
                                    this.listBox._state.page += 1;
                                }
                            }
                            else if (target == 'last') {
                                this.listBox._state.page = this.listBox._state.pageCount;
                            }
                            else {
                                this.listBox._state.page = Number(target);
                            }
                            this.reRender(true);
                        };
                        obj.listName = this.listBox.listVariableName;
                        nObj.populate(obj);
                        this.listBox.refresh();
                        this.listBox.resize(); //needed if the list has a fixed size and the style is gr*
                    }
                }
                ele = this.obj._buttons['BUTTON_LISTNAV_NEXT.LIST1'];
                if (ele) {
                    if (this.listBox._state.page == this.listBox._state.pageCount || this.listBox._state.pageCount == 0)
                        ele.setDisabled(true);
                    else
                        ele.setDisabled(false);
                }
                ele = this.obj._buttons['BUTTON_LISTNAV_LAST.LIST1'];
                if (ele) {
                    if (this.listBox._state.page == this.listBox._state.pageCount || this.listBox._state.pageCount == 0)
                        ele.setDisabled(true);
                    else
                        ele.setDisabled(false);
                }
                ele = this.obj._buttons['BUTTON_LISTNAV_FIRST.LIST1'];
                if (ele) {
                    if (this.listBox._state.page == 1 || this.listBox._state.pageCount == 0)
                        ele.setDisabled(true);
                    else
                        ele.setDisabled(false);
                }
                ele = this.obj._buttons['BUTTON_LISTNAV_PREV.LIST1'];
                if (ele) {
                    if (this.listBox._state.page == 1 || this.listBox._state.pageCount == 0)
                        ele.setDisabled(true);
                    else
                        ele.setDisabled(false);
                }
                ele = $(`${this.obj.dialogId}.V.R1.A5SYSTEM_LIST_PAGESELECTOR_LIST1`);
                if (ele) {
                    let data = this.listBox._recordNavigatorLinks;
                    if (data) {
                        A5.form.populateSelect(ele, '' + this.listBox._state.page, data, true);
                        //alert('page: ' + this._state.page);
                        //ele.value = this._state.page;
                    }
                }
            },
            _populateAllChildLists: function () { },
            _hasNavigationBar: true,
            _navigationBar: {
                style: 'dropdown',
                firstIcon: 'svgIcon=#alpha-icon-chevronDblLeft:icon,24',
                lastIcon: 'svgIcon=#alpha-icon-chevronDblRight:icon,24',
                prevIcon: 'svgIcon=#alpha-icon-chevronLeft:icon,24',
                nextIcon: 'svgIcon=#alpha-icon-chevronRight:icon,24',
                numberOfLinks: 5,
                justification: 'Center',
                buttonSize: 'Normal',
                buttonsubtheme: 'Circle',
                showCurrentPageNumber: true,
                currentPageNumberTemplate: '{pageNumber} of {pageCount}',
                showCurrentPageNumberasInputControl: false,
                currentPageNumberInputControlSize: '100px',
                showPageSizeSelector: false,
                pageSizeSelectorTemplate: 'Page size: {pageSizeSelector}',
                pageSizes: '1,10,20,50,100',
                navBarPlacement: 'ListFooter',
                navBarFooterPlacement: 'BelowUserContent',
                customization: {
                    messages: {
                        listDirty: 'List is dirty. Please save changes before navigating.'
                    }
                },
                navBarPlacementDivId: ''
            },
            _state: {
                pageSize: 20,
                page: 1,
                pageCount: 5,
                recordCount: 100,
            },
            _match: (data, field, val, obj) => {
                var _a;
                if (obj.qbf && obj.type == 'c')
                    val = $u.s.rTrim(val, ',');
                let _v = val;
                let flagC = false;
                if (obj.type == 'c') {
                    flagC = true;
                    if (!obj.caseSensitive)
                        _v = _v.toLowerCase();
                }
                else {
                    if (obj.mode > 1)
                        obj.mode = 1;
                    if (obj.mode < -1)
                        obj.mode = -1;
                }
                let flag = false;
                obj.usesQBFOperator = false;
                let o = {};
                let _vals = [];
                let matches = (data, field) => {
                    var _a;
                    o.flag = false;
                    o.v1 = _v;
                    o.v2 = '';
                    let _d = data[field];
                    if (obj.type == 'n') {
                        o.v1 = Number(o.v1);
                        o.v2 = Number(o.v2);
                        _d = Number(_d);
                    }
                    else if (obj.type == 'l') {
                        o.v1 = $u.s.toBool(o.v1);
                        o.v2 = $u.s.toBool(o.v2);
                        _d = $u.s.toBool(_d);
                    }
                    else if (obj.type == 'd' || obj.type == 't') {
                        o.v1 = A5.stringToDate(o.v1, objDatetimeFormat());
                        o.v2 = A5.stringToDate(o.v2, objDatetimeFormat());
                        if (typeof _d == 'string')
                            _d = A5.stringToDate(_d, objDatetimeFormat());
                        if (o.v1 != '' && o.v1 != null)
                            o.v1 = o.v1.getTime();
                        if (o.v2 != '' && o.v2 != null)
                            o.v2 = o.v2.getTime();
                        if (_d != '' && _d != null)
                            _d = _d.getTime();
                    }
                    if (flagC) {
                        if (!obj.caseSensitive && typeof _d == 'string')
                            _d = _d.toLowerCase();
                    }
                    if (o.flag) {
                        if (o.op == 'between') {
                            if (flagC) {
                                if (_d.substr(0, o.v1.length) >= o.v1 && _d.substr(0, o.v2.length) <= o.v2)
                                    flag = true;
                            }
                            else {
                                if (_d >= o.v1 && _d < o.v2 && (typeof _d == typeof o.v1))
                                    flag = true;
                            }
                        }
                        else {
                            if (flagC)
                                _d = _d.substr(0, o.v1.length);
                            if (o.op == '>=')
                                if (_d >= o.v1)
                                    flag = true;
                            if (o.op == '<=')
                                if (_d <= o.v1)
                                    flag = true;
                            if (o.op == '>')
                                if (_d > o.v1)
                                    flag = true;
                            if (o.op == '<')
                                if (_d < o.v1)
                                    flag = true;
                        }
                    }
                    else {
                        let op = (_a = obj.op) !== null && _a !== void 0 ? _a : "..x..";
                        switch (op) {
                            case '=':
                                flag = _d == o.v1;
                                break;
                            case '<>':
                                flag = _d != o.v1;
                                break;
                            case '>':
                                flag = _d > o.v1;
                                break;
                            case '<':
                                flag = _d < o.v1;
                                break;
                            case '>=':
                                flag = _d >= o.v1;
                                break;
                            case '<=':
                                flag = _d <= o.v1;
                                break;
                            case "..x..":
                                flag = _d.toString().includes(o.v1);
                                break;
                            case "x..":
                                flag = _d.toString().startsWith(o.v1);
                                break;
                            case "..x":
                                flag = _d.toString().endsWith(o.v1);
                                break;
                        }
                    }
                    if (o.v1 != '') {
                        if (_vals.indexOf(o.v1) == -1)
                            _vals.push(o.v1);
                    }
                    if (o.v2 != '') {
                        if (_vals.indexOf(o.v2) == -1)
                            _vals.push(o.v2);
                    }
                    return flag;
                };
                let matchNested = (quantifier, path, d) => {
                    if (path.length == 0)
                        return false;
                    if (path.length == 1) {
                        return matches(d, path[0]);
                    }
                    else {
                        let item = d[path[0]];
                        if (!(item instanceof Array))
                            return false;
                        let results = [];
                        for (const d of item) {
                            let m = matchNested(quantifier, path.slice(1), d);
                            results.push(m);
                        }
                        let result;
                        if (results.length == 0) {
                            result = false;
                        }
                        else {
                            result = results.reduce((a, b) => {
                                if (quantifier == 'SOME')
                                    return a || b;
                                return a && b;
                            });
                        }
                        return result;
                    }
                };
                let path = this.dataScopeManager.strToPath(field);
                if (this.dataScopeManager.inSubArray(path)) {
                    let rawDataPoint = this.rawData[this.dataScopeManager.getOriginalIndex(data['*key'])];
                    flag = matchNested((_a = obj.quantifier) !== null && _a !== void 0 ? _a : 'ALL', path, rawDataPoint);
                }
                else {
                    flag = matches(data, field);
                }
                if (flag) {
                    let lObj = this.listBox;
                    if (typeof lObj._state.highlight == 'undefined')
                        lObj._state.highlight = {};
                    lObj._state.highlight[field.toUpperCase()] = _vals;
                }
                return flag;
            },
            clickButton: (btnNumber) => {
                this.buttonFns[btnNumber](this);
            },
            __list_menu_show: (name, rowNumber) => {
                let flag;
                let lObj = this.listBox;
                if (lObj.beforeMenuOpen)
                    flag = lObj.beforeMenuOpen(name, rowNumber, lObj);
                if (typeof flag == 'undefined')
                    flag = true;
                if (!flag)
                    return;
                let obj = lObj._menuSettings[name];
                if (typeof obj == 'undefined')
                    return;
                let idIcon = this.obj.dialogId + '.' + lObj.listVariableName + '.MENU.' + name + '.' + rowNumber;
                let ele = $(idIcon);
                let menuData = obj.menuData;
                let menuSettings = obj.menuSettings;
                let objMenuObject = obj.menuObject;
                if (typeof objMenuObject == 'undefined') {
                    menuSettings.rowNumber = rowNumber;
                    obj.menuObject = new A5.Menu(menuData, menuSettings);
                    objMenuObject = obj.menuObject;
                }
                else {
                    objMenuObject.rowNumber = rowNumber;
                    objMenuObject.populate(menuData);
                }
                let flagIsOpen = obj.isOpen;
                let existingRowNumber = obj.existingRowNumber;
                if (typeof existingRowNumber == 'undefined')
                    existingRowNumber = -1;
                let closingRowNumber = obj.closingRowNumber;
                if (typeof closingRowNumber == 'undefined')
                    closingRowNumber = -1;
                if (typeof flagIsOpen == 'undefined')
                    flagIsOpen = false;
                if (rowNumber == closingRowNumber)
                    flagIsOpen = true;
                let that = this.listBox;
                setTimeout(function () {
                    if (!flagIsOpen) {
                        obj.isOpen = true;
                        obj.existingRowNumber = rowNumber;
                        lObj._menuName = name;
                        let duration = obj.image_rotate_duration;
                        if (typeof duration == 'undefined')
                            duration = 600;
                        if (obj.image_rotate)
                            that.__list_menu_rotate(ele, 0, 90, obj.imageOpen, duration);
                        objMenuObject.show('dropdown', ele);
                        return false;
                    }
                }, 0);
            },
            __list_menu_rotate: (ele, from, to, terminalImage, duration) => {
                if (typeof duration == 'undefined')
                    duration = 300;
                if (terminalImage == 'undefined')
                    terminalImage = '';
                let onComplete;
                if (terminalImage != '') {
                    onComplete = () => ele.innerHTML = A5.u.icon.html(terminalImage);
                }
                else {
                    onComplete = () => { };
                }
                A5.u.element.transition(ele, {
                    from: { transform: 'rotate(' + from + 'deg)' },
                    to: { transform: 'rotate(' + to + 'deg)' },
                    duration: duration
                }, onComplete);
            },
            __list_menu_hide: (lObj) => {
                let obj = lObj._menuSettings;
                let ele;
                let isOpen;
                let menuObject;
                let imageClosed;
                for (const n in obj) {
                    isOpen = obj[n].isOpen;
                    if (isOpen) {
                        imageClosed = obj[n].imageClosed;
                        menuObject = obj[n].menuObject;
                        if (menuObject)
                            menuObject.hide(lObj);
                        if (typeof imageClosed == 'undefined')
                            imageClosed = '';
                        if (lObj && lObj.__list_menu_rotate)
                            lObj.__list_menu_rotate(ele, 90, 0, imageClosed, 600);
                    }
                }
            },
            onListDraw: (data, startIndex) => {
                if (A5.flags.isMobile) {
                    $e.add(this.listBox.contId + '.CONTENT', 'abstractdown', (e) => {
                        let ele = e.target;
                        let tag = '';
                        if (ele && typeof ele.tagName == 'string')
                            tag = ele.tagName.toLowerCase();
                        if (tag != 'input' && tag != 'textarea')
                            $e.preventDefault(e);
                    });
                    this.listBox._hasrun = true;
                    this.listBox._allrowschecked = true;
                    let d = this.listBox._rData;
                    for (let i = 0; i < d.length; i++) {
                        if (!d[i].__selected) {
                            this.listBox._allrowschecked = false;
                            break;
                        }
                    }
                    if (d.length == 0)
                        this.listBox._allrowschecked = false;
                    let h;
                    if (this.listBox._allrowschecked) {
                        h = A5.u.icon.html(this.listBox.__checkedImage);
                    }
                    else {
                        h = A5.u.icon.html(this.listBox.__uncheckedImage);
                    }
                    let _id = this.obj.dialogId + '.' + this.listBox.listVariableName + '.CHECKBOXALL';
                    let ele = $(_id);
                    ele.innerHTML = h;
                }
            },
            onChange: () => {
                let btns = listObj.window.document.getElementsByClassName(`${LIST_NAME}_BUTTON`);
                for (let i = 0; i < btns.length; i++) {
                    btns[i].parentElement.style.whiteSpace = 'normal';
                }
            },
            updateListFromUXControls: () => {
                var _a, _b;
                if (this.listBox._updatingListFromUXControls)
                    return false;
                this.listBox._updatingListFromUXControls = true;
                let d = (_b = (_a = this.detailView) === null || _a === void 0 ? void 0 : _a.serialize()) !== null && _b !== void 0 ? _b : {};
                let d2 = {};
                for (let n in d) {
                    if (n.indexOf("*") != 0) {
                        d2[n] = d[n];
                    }
                }
                let r = this.listBox.selection[0];
                if (typeof r != 'undefined') {
                    this.listBox.updateTableRow(r, d2);
                }
                else {
                    this.listBox.addTableRow(d2, {
                        setFocusToTargetRow: true
                    });
                }
                // form.state.isDirty = false;
                // form.refresh();
                var arrState = this.listBox.__captureDetailViewControlsDirtyState();
                var dirtyControls = [];
                for (var i = 0; i < arrState.length; i++) {
                    if (arrState[i].isDirty)
                        dirtyControls.push(arrState[i].field);
                }
                var _dlgObj = this.obj;
                var arr = this.listBox._getControlsInDv();
                for (var i = 0; i < arr.length; i++) {
                    _dlgObj.clientSideValidateField(arr[i], 1, null);
                }
                var flagCSE = this.listBox._hasClientSideError();
                if (flagCSE) {
                    _dlgObj._list_executeEvent(this.listBox.listVariableName, 'detailView.hasClientSideValidationErrors', {});
                    var msg = this.listBox.customization.dv.clientSideErrorWarning;
                    if (typeof msg != 'undefined' && msg != '')
                        this.listBox._showGlobalError(msg);
                    this.listBox._updatingListFromUXControls = false;
                    return false;
                }
                else {
                    this.listBox._clearGlobalError();
                }
                var _route = this.listBox._getRoute();
                var _dlgObj = this.obj;
                var flagGetLocationData = this.listBox._submitLocationInfo;
                if (_dlgObj._embeddedMode || _dlgObj._livePreviewInBuilder)
                    flagGetLocationData = false;
                var that = this.listBox;
                if (flagGetLocationData) {
                    var _locationHighAccuracy = _dlgObj.locationHighAccuracy;
                    var _locationTimeout = _dlgObj.locationTimeout;
                    var _locationMaximumAge = _dlgObj.locationMaximumAge;
                    var classInst = this.listBox;
                    navigator.geolocation.getCurrentPosition(function (pos) {
                        if (typeof _dlgObj._location == 'undefined')
                            _dlgObj._location = {};
                        _dlgObj._location.lat = pos.coords.latitude;
                        _dlgObj._location.lng = pos.coords.longitude;
                        classInst._updateListFromUXControlsLow();
                        classInst.__modifyOldData(arrState);
                        if (that.synchronizeImmediately) {
                            var flagOnLine = _dlgObj._getOnlineStatus();
                            if (flagOnLine) {
                                _dlgObj.saveListEdits(that.listVariableName);
                            }
                            else { }
                        }
                        var dirtyClass = '';
                        if (typeof that.dirtyControlClassName != 'undefined')
                            dirtyClass = that.dirtyControlClassName;
                        if (dirtyClass != '')
                            that.populateUXControls();
                        that._setRoute(_route);
                        if (!that._restoringList)
                            _dlgObj.persistVariablesToLocalStorage();
                        _dlgObj.refreshClientSideComputations();
                        return true;
                    }, function (error) {
                        delete _dlgObj._location;
                        classInst._updateListFromUXControlsLow();
                        classInst.__modifyOldData(arrState);
                        if (that.synchronizeImmediately) {
                            var flagOnLine = _dlgObj._getOnlineStatus();
                            if (flagOnLine) {
                                _dlgObj.saveListEdits(that.listVariableName);
                            }
                            else { }
                        }
                        var dirtyClass = '';
                        if (typeof that.dirtyControlClassName != 'undefined')
                            dirtyClass = that.dirtyControlClassName;
                        if (dirtyClass != '')
                            that.populateUXControls();
                        that._setRoute(_route);
                        if (!that._restoringList)
                            _dlgObj.persistVariablesToLocalStorage();
                        _dlgObj.refreshClientSideComputations();
                        return true;
                    }, {
                        enableHighAccuracy: _locationHighAccuracy,
                        timeout: _locationTimeout,
                        maximumAge: _locationMaximumAge
                    });
                    this.listBox._updatingListFromUXControls = false;
                    return true;
                }
                else {
                    this.listBox.__modifyOldData(arrState);
                    if (!(this.listBox._JSONForm || this.listBox._propertyGrid)) {
                        this.listBox._updateListFromUXControlsLow();
                        this.listBox.__setJSONFormsInFieldMapClean();
                    }
                }
                this.listBox._saveTFEdits();
                this.listBox._setRoute(_route);
                if (!this.listBox._restoringList)
                    _dlgObj.persistVariablesToLocalStorage();
                _dlgObj.refreshClientSideComputations();
                if (this.listBox.synchronizeImmediately) {
                    var flagOnLine = _dlgObj._getOnlineStatus();
                    if (flagOnLine) {
                        this.listBox.__modifyOldData(arrState);
                        _dlgObj.saveListEdits(this.listBox.listVariableName);
                    }
                    else {
                        this.listBox.__modifyOldData(arrState);
                    }
                }
                var dirtyClass = '';
                if (typeof this.listBox.dirtyControlClassName != 'undefined')
                    dirtyClass = this.listBox.dirtyControlClassName;
                if (dirtyClass != '')
                    this.listBox.populateUXControls();
                if (this.listBox.showHideDetailView)
                    this.listBox.__toggleDetailView('hide');
                this.listBox.__modifyOldData(arrState);
                if (this.listBox.__pkisguid && this.listBox.__assignPKGuidClientSide) {
                    let r = this.listBox.selection[0];
                    if (typeof r != 'undefined') {
                        if (typeof this.listBox._data[r][this.listBox.__pkfieldname] != 'undefined' && this.listBox._data[r][this.listBox.__pkfieldname] == '') {
                            var flagNewRow = this.listBox._data[r]._isNewRow;
                            if (flagNewRow) {
                                var obj2 = {};
                                obj2[this.listBox.__pkfieldname] = A5.UUID();
                                if (!this.listBox.__stripcurlyfromguid) {
                                    obj2[this.listBox.__pkfieldname] = '{' + obj2[this.listBox.__pkfieldname] + '}';
                                }
                                this.listBox.updateTableRow(r, obj2);
                            }
                        }
                    }
                }
                if (this.listBox._detailView.method == 'JSONForm') {
                    var _name = this.listBox._JSONFormName;
                    var jObj = _dlgObj.getControl(_name);
                    if (jObj) {
                        jObj.state.isDirtyImmediate = false;
                        jObj.refresh();
                    }
                }
                _dlgObj._list_executeEvent(this.listBox.listVariableName, 'detailView.afterDetailViewSave', {
                    dirtyFields: dirtyControls.toString()
                });
                this.listBox.__indexDBAfterDetailViewSaveImages(dirtyControls.toString());
                this.listBox._updatingListFromUXControls = false;
            }
        };
    }
    buildColumnDefn(mapping) {
        var _a, _b, _c;
        let template = mapping.columnName;
        switch (mapping.editType) {
            case 'time':
                template += `:date("${objTimeFormat()}")`;
                break;
            case 'datetime':
                template += `:date("${objDatetimeFormat()}")`;
                break;
        }
        template = '{' + template + '}';
        if (mapping.template)
            template = mapping.template;
        return {
            show: (_a = mapping.inList) !== null && _a !== void 0 ? _a : false,
            header: {
                html: (_b = mapping.displayName) !== null && _b !== void 0 ? _b : mapping.columnName
            },
            data: {
                template: `<span id="${this.obj.dialogId}.${LIST_NAME}.${mapping.columnName}.I.{*dataRow}"> ${template} </span>`
            },
            width: (_c = mapping.width) !== null && _c !== void 0 ? _c : 'flex(1)',
            resize: false,
            order: mapping.columnName,
        };
    }
    buildColumnButton(button, btnNumber, items) {
        if (!button.title)
            button.title = '';
        let innerTemplate = button.title + '&nbsp';
        if (button.icon && button.icon != '') {
            innerTemplate += `{@A5.u.icon.html(<escape<'${button.icon}'>>)}`;
        }
        if (button.children != undefined) {
            return {
                header: {
                    html: button.columnTitle
                },
                _name: button.columnTitle,
                _type: 'Menu',
                resize: false,
                rcw: 0,
                data: {
                    template: `
						<div style="display:inline-block" id="${this.obj.dialogId}.${LIST_NAME}.MENU.${btnNumber}.{*dataRow}" title="" a5-item="_MENU_onClick_${btnNumber}" class="${LIST_NAME}_BUTTON">
							${innerTemplate}
						</div>&nbsp;
					`
                }
            };
        }
        let tmpThis = this;
        items[`_systemButtononClick_${btnNumber}`] = {
            'selectable': true,
            onClick: (idx, v, args) => {
                let data = this.listBox._data[this.listBox._dataMap[idx]];
                if ('function' in button.onClick) {
                    (function (rowNumber, value, ia, data, lObj, listObj) {
                        stringReprToFn(button.onClick.function)(tmpThis);
                    }(idx, v, args, data, this.listBox, this.listBox));
                }
                else {
                    this.obj.runAction(button.onClick.action);
                }
            }
        };
        return {
            header: { html: button.columnTitle },
            _name: btnNumber.toString(),
            _type: 'Button',
            resize: false,
            rcw: 0,
            data: {
                template: `
					<span class = "${LIST_NAME}_BUTTON" id="${this.obj.dialogId}.${LIST_NAME}.${btnNumber}.I.{*dataRow}">
						<button
							a5-item = "_systemButtononClick_${btnNumber}"
							class="button"
							style="cursor:pointer;"
							title="${button.title}"
							id="${this.obj.dialogId}.${LIST_NAME}.BTN.{*dataRow}"
						>${innerTemplate}</button>
					</span>
				`
            },
            order: false,
            width: 'flex(1)',
        };
    }
    makeMenuSetting(button, index, menuSettings, items) {
        if (!button.children)
            return;
        let makeMenuData = (button) => {
            var _a;
            let children = [];
            if (button.children) {
                button.children.forEach(c => children.push(makeMenuData(c)));
            }
            return {
                html: (_a = button.title) !== null && _a !== void 0 ? _a : null,
                icon: '',
                onClick: () => {
                    if ('function' in button.onClick) {
                        stringReprToFn(button.onClick.function)(this);
                    }
                    else {
                        this.obj.runAction(button.onClick.action);
                    }
                },
            };
        };
        let menuData = [];
        button.children.forEach(c => menuData.push(makeMenuData(c)));
        let type = (button.icon && button.icon != '') ? 'Image' : 'Text';
        menuSettings[index] = {
            type: type,
            imageClosed: 'svgIcon=#alpha-icon-bars:icon,24',
            image_rotate: type == 'Image',
            image_rotate_duration: 300,
            imageOpen: 'svgIcon=#alpha-icon-xLarge:icon,24',
            menuType: 'Cascading',
            menuData: menuData,
            menuSettings: {
                listName: `${LIST_NAME}`,
                theme: this.obj.styleName,
                style: '',
                iconColumn: { width: '20px' },
                animation: {
                    show: {
                        type: 'slide',
                        duration: 'fast',
                    },
                    hide: {
                        type: 'none',
                    }
                },
                onHide: () => {
                    let lObj = this.listBox;
                    if (lObj._menuName != '') {
                        let obj = lObj._menuSettings[lObj._menuName];
                        let rowNumber = obj.existingRowNumber;
                        if (lObj.onMenuClose)
                            lObj.onMenuClose(lObj._menuName, rowNumber, lObj);
                        let idIcon = this.obj.dialogId + '.' + lObj.listVariableName + '.MENU.' + lObj._menuName + '.' + rowNumber;
                        let ele = $(idIcon);
                        obj.isOpen = false;
                        obj.closingRowNumber = rowNumber;
                        setTimeout(() => { if (obj.closingRowNumber == rowNumber)
                            obj.closingRowNumber = -1; }, 600);
                        let duration = obj.image_rotate_duration;
                        if (typeof duration == 'undefined')
                            duration = 600;
                        obj.existingRowNumber = -1;
                        lObj._menuName = '';
                        if (obj.image_rotate)
                            lObj.__list_menu_rotate(ele, 90, 0, obj.imageClosed, duration);
                    }
                }
            }
        };
        items[`_MENU_onClick_${index}`] = {
            'selectable': true,
            onClick: (idx, v, args) => {
                let data = this.listBox._data[this.listBox._dataMap[idx]];
                (function (rowNumber, value, ia, data, lObj, listObj) {
                    lObj.__list_menu_show(index.toString(), rowNumber);
                }(idx, v, args, data, this.listBox, this.listBox));
            }
        };
    }
    buildListFieldDefn(mapping) {
        let defn = {
            name: mapping.columnName,
            defaultValue: `return this._controlDefaultValueForListField('${mapping.columnName}');`,
            onDetailViewPopulate: '',
            onListUpdate: '',
        };
        let onDvPopTemplate = (format) => {
            return `
				if(this._value == '') return '';
				if(this._value == null) return '';
				
				let formatIn = ${mapping.serverDateFormat};
				let formatOut = format;
				let _d = A5.stringToDate(this._value,formatIn);
				let _ds = _d.toFormat(formatOut);
				
				return _ds;
				
			`;
        };
        let onListUpdateTemplate = (format) => {
            return `
				if(this._value == '') 
					return '';
					
				if(this._value == null) 
					return '';
					
				let formatIn = ${mapping.serverDateFormat};
				let formatOut = format;
				let _d = A5.stringToDate(this._value,formatIn);
				let _ds = _d.toFormat(formatOut);
				
				return _ds;
			`;
        };
        if (mapping.editType === 'time') {
            defn.onDetailViewPopulate = onDvPopTemplate(objTimeFormat());
            defn.onListUpdate = onListUpdateTemplate(objTimeFormat());
        }
        else if (mapping.editType === 'datetime') {
            defn.onDetailViewPopulate = onDvPopTemplate(objDatetimeFormat());
            defn.onListUpdate = onListUpdateTemplate(objDatetimeFormat());
        }
        return defn;
    }
    buildDetailViewForm(rowNum) {
        var _a, _b;
        let _d = {};
        if (rowNum != undefined) {
            _d = jQuery.extend({}, this.listBox._data[this.listBox._dataMap[rowNum]]);
        }
        else {
            this.config.mappings.forEach(mapping => {
                var _a;
                if (mapping.inDetailView) {
                    let defaultVal;
                    switch ((_a = mapping.editType) !== null && _a !== void 0 ? _a : 'text') {
                        case "number":
                            defaultVal = 0;
                            break;
                        case "bool":
                            defaultVal = false;
                            break;
                        case "json":
                            if (mapping.subMappings) {
                                if ('arrayItem' in mapping.subMappings) {
                                    defaultVal = '[]';
                                }
                                else {
                                    defaultVal = JSON.stringify(this.makeObviousDefault(mapping.subMappings));
                                }
                            }
                            else {
                                defaultVal = '';
                            }
                            break;
                        case "text":
                        case "dropdown":
                        case "time":
                        case "datetime":
                            defaultVal = '';
                    }
                    _d[mapping.columnName] = defaultVal;
                }
            });
        }
        for (const mapping of this.config.mappings) {
            let val = _d[mapping.columnName];
            switch (mapping.editType) {
                case "time":
                case "datetime":
                    if (val instanceof Date)
                        val = val.toFormat(objDatetimeFormat());
                    _d[mapping.columnName] = val;
                    break;
            }
        }
        let d = JSON.parse(JSON.stringify(_d));
        delete d['*key'];
        delete d['*renderIndex'];
        delete d['*value'];
        // Expand any fields that are marked as nested json
        for (const mapping of this.config.mappings) {
            if (mapping.editType == 'json' && mapping.inDetailView) {
                d[mapping.columnName] = JSON.parse(d[mapping.columnName]);
            }
        }
        let inputs = {
            label: "Detail View",
            inlineKeys: true,
            requiredKeys: {}
        };
        let toInclude = new Set();
        for (const mapping of this.config.mappings) {
            if (mapping.inDetailView) {
                toInclude.add(mapping.columnName);
                if (mapping.editType == 'json' && mapping.subMappings !== undefined) {
                    inputs.requiredKeys[mapping.columnName] = this.buildSubDetailView(mapping.subMappings, (_a = mapping.displayName) !== null && _a !== void 0 ? _a : mapping.columnName);
                    continue;
                }
                if (!mapping.editType)
                    mapping.editType = 'text';
                let value = {
                    type: 'simple',
                    options: {
                        type: 'string',
                        label: '',
                    }
                };
                switch (mapping.editType) {
                    case 'number':
                        value.options.type = 'number';
                        break;
                    case 'dropdown':
                        if (mapping.dropdownConfig === undefined)
                            break;
                        // Static dropdown list
                        let choices = [];
                        if ('choices' in mapping.dropdownConfig) {
                            choices = mapping.dropdownConfig.choices;
                        }
                        else if ('fromColumn' in mapping.dropdownConfig) {
                            let set = new Set();
                            this.listBox._data.forEach((d) => {
                                if (mapping.dropdownConfig === undefined)
                                    return;
                                if (!('fromColumn' in mapping.dropdownConfig))
                                    return;
                                set.add(d[mapping.dropdownConfig.fromColumn].toString());
                            });
                            choices = Array.from(set);
                        }
                        value = {
                            type: 'dropdown',
                            options: {
                                label: '',
                                dropdownItems: choices.map(c => { return { value: c, text: c }; }),
                            }
                        };
                        break;
                    case 'bool':
                        value.options.type = 'boolean';
                        break;
                    case 'time':
                    case 'datetime':
                    case 'text':
                    case 'json':
                    default:
                        break;
                }
                value.options.label = (_b = mapping.displayName) !== null && _b !== void 0 ? _b : mapping.columnName;
                inputs.requiredKeys[mapping.columnName] = value;
            }
        }
        // If there are keys present in the data that aren't present 
        // in the config, we'll get an error. So we need to remove those.
        for (const key in d) {
            if (!toInclude.has(key)) {
                delete d[key];
            }
        }
        inputs.mapSerialized = (d) => {
            for (const mapping of this.config.mappings) {
                if (mapping.editType == 'json') {
                    d[mapping.columnName] = JSON.stringify(d[mapping.columnName]);
                }
            }
            return d;
        };
        let bottomButtons = makeDetailButtons().getJSON();
        let configForm = Form.create(this.obj, { type: 'object', options: inputs }, DETAIL_FORM_NAME, [bottomButtons]);
        this.detailView = configForm;
        let populateData = configForm.initializeWithData(d);
        Form.render(configForm);
        this.obj.setValue(DETAIL_FORM_NAME, JSON.stringify(populateData));
    }
    buildSubDetailView(scheme, label) {
        var _a, _b, _c;
        // Object type
        if ('keys' in scheme) {
            let form = {
                type: 'object',
                options: {
                    label: (_a = scheme.displayName) !== null && _a !== void 0 ? _a : label,
                    requiredKeys: {}
                }
            };
            for (const key in scheme.keys) {
                form.options.requiredKeys[key] = this.buildSubDetailView(scheme.keys[key], key);
            }
            return form;
        }
        // Array Type
        else if ('arrayItem' in scheme) {
            let defaultValue;
            if (scheme.defaultValue) {
                defaultValue = eval(scheme.defaultValue);
            }
            else {
                defaultValue = this.makeObviousDefault(scheme);
            }
            let form = {
                type: 'array',
                options: {
                    defaultValue: defaultValue,
                    label: (_b = scheme.displayName) !== null && _b !== void 0 ? _b : label,
                    itemTemplate: this.buildSubDetailView(scheme.arrayItem, 'Child of ' + label),
                }
            };
            return form;
        }
        // Regular value 
        else {
            let form = {
                type: 'simple',
                options: {
                    label: (_c = scheme.displayName) !== null && _c !== void 0 ? _c : label,
                    type: scheme.editType
                }
            };
            return form;
        }
    }
    makeObviousDefault(scheme) {
        if ('editType' in scheme) {
            switch (scheme.editType) {
                case "string": return '';
                case "number": return 0;
                case "boolean": return false;
            }
        }
        else if ('keys' in scheme) {
            let defaults = {};
            for (const key in scheme.keys) {
                defaults[key] = this.makeObviousDefault(scheme.keys[key]);
            }
            return defaults;
        }
        else {
            return this.makeObviousDefault(scheme.arrayItem);
        }
    }
    setFilterAndFetch(filters) {
        this.searchFilters = filters;
        this.reRender(true);
    }
    makeFilterFromSelected(colName, foreignColName) {
        let thisVal = '';
        if (this.listBox.selectionData.length > 0) {
            thisVal = this.listBox.selectionData[0][colName];
        }
        return [{
                columnName: foreignColName,
                columnVal: { tag: "value", value: thisVal.toString() },
                connector: 'AND',
                op: '='
            }];
    }
    setData(rawData, buildSchema) {
        let rawDataRows;
        if ('count' in rawData) {
            let pageSize = (this.config.searchOptions.paginate ? this.config.searchOptions.paginate.pageSize : rawData.count);
            this.listBox._state = {
                pageSize: pageSize,
                page: this.listBox._state.page,
                pageCount: Math.ceil(rawData.count / pageSize),
                recordCount: rawData.count,
            };
            rawDataRows = rawData.result;
        }
        else {
            rawDataRows = rawData;
        }
        if (this.config.dataSource.preprocess)
            rawDataRows = stringReprToFn(this.config.dataSource.preprocess)(rawDataRows);
        this.rawData = rawDataRows;
        if (buildSchema)
            this.buildSchemaFromRawData();
        this.dataScopeManager = new DataScopeManager(this.schema);
        this.dataScopeManager.setPathFromConfig(this.config, this.rawData);
        this.data = this.dataScopeManager.flattenData(this.rawData, this.config);
    }
    fetchData() {
        if (this.config.dataSource.type == 'sql' && 'table' in this.config.dataSource) {
            let columns = [];
            this.config.mappings.forEach((c) => {
                columns.push(c.columnName);
            });
            let filters = JSON.stringify([...this.permanentFilters, ...this.searchFilters]);
            let paginate = '';
            if (this.config.searchOptions.paginate) {
                paginate = "&pageOptions=" + encodeURIComponent(`{pageSize: ${this.config.searchOptions.paginate.pageSize}, getPage: ${this.listBox._state.page}}`);
            }
            return new Promise((resolve, reject) => {
                this.obj.ajaxCallback("", "", "getAllDataForTable", "", "configName=" + encodeURIComponent(this.config.name)
                    + "&filters=" + encodeURIComponent(filters)
                    + paginate, {
                    onComplete: () => {
                        let response = this.obj.stateInfo.apiResult;
                        if ("err" in response) {
                            reject(new Error(response.err));
                        }
                        this.setData(response.ok, false);
                        if (this.data === undefined) {
                            console.error("Error fetching data, defaulting to empty.");
                            this.data = [];
                            this.rawData = [];
                        }
                        resolve(this);
                    }
                });
            });
        }
        else if (this.config.dataSource.type == 'sql') {
            let paginate = '';
            if (this.config.searchOptions.paginate) {
                paginate = "&pageOptions=" + encodeURIComponent(`{pageSize: ${this.config.searchOptions.paginate.pageSize}, getPage: ${this.listBox._state.page}}`);
            }
            let filters = JSON.stringify([...this.permanentFilters, ...this.searchFilters]);
            return new Promise((resolve, reject) => {
                this.obj.ajaxCallback("", "", "getAllDataForTable", "", "configName=" + encodeURIComponent(this.config.name)
                    + "&filters=" + encodeURIComponent(filters)
                    + paginate, {
                    onComplete: () => {
                        let response = this.obj.stateInfo.apiResult;
                        if ("err" in response) {
                            reject(new Error(response.err));
                        }
                        this.setData(response.ok, false);
                        if (this.data === undefined) {
                            console.error("Error fetching data, defaulting to empty.");
                            this.data = [];
                            this.rawData = [];
                        }
                        resolve(this);
                    }
                });
            });
        }
        else if (this.config.dataSource.type == 'json' && 'static' in this.config.dataSource) {
            this.data = jQuery.extend(true, [], this.config.dataSource.static);
            this.setData(this.data, false);
            return Promise.resolve(this);
        }
        else if (this.config.dataSource.type == 'json' && this.config.dataSource.endpoints) {
            let endpoint;
            if (this.permanentFilters.length == 0 && this.searchFilters.length == 0) {
                endpoint = "fetch";
            }
            else {
                endpoint = "search";
            }
            return fetch(this.obj, this.config.name, endpoint)
                .then((json) => {
                if ('err' in json) {
                    throw new Error(json.err);
                }
                let body = JSON.parse(json.ok);
                let data = JSON.parse(body.body);
                this.setData(data, false);
                return this;
            });
        }
        else {
            throw new Error("Unhandled datasource " + JSON.stringify(this.config.dataSource));
        }
    }
    filtersAsSimpleObj() {
        let data = {};
        for (const item of [...this.permanentFilters, ...this.searchFilters]) {
            data[item.columnName] = item.columnVal;
        }
        return data;
    }
    addOnRenderCallback(f) {
        if (this.listBox != null)
            f();
        this.onRender.push(f);
    }
    updateRecordCount() {
        let count = this.window.document.getElementById(this.obj.dialogId + "_RECORD_COUNT");
        if (count) {
            count.innerHTML = "Records: " + this.listBox._rData.length;
        }
    }
    populateListBox() {
        this.listBox.populate(this.data);
        this.listBox._refreshStateMessages();
        for (const f of this.onRender) {
            f();
        }
        this.listBox.refresh();
        this.listBox.resize();
        this.updateRecordCount();
    }
    buildList() {
        this.listBox = new (this.window.A5).ListBox(this.obj.getPointer('LIST_CONTAINER').id, [], this.settings);
        this.listBox._hostComponentId = this.obj.dialogId;
        this.listBox._listSystemOnClickPopulateJSONForm = (rowNum) => this.buildDetailViewForm(rowNum);
        this.window[this.obj.dialogId + '.V.R1.' + this.listBox.listVariableName + 'Obj'] = this.listBox;
        setFormDetailView(this.obj, this.listBox);
    }
    buildSchemaFromRawData() {
        let deepAssign = (a, b) => {
            for (const key in b) {
                if (key in a) {
                    if (typeof b[key] == 'object') {
                        deepAssign(a[key], b[key]);
                    }
                    else {
                        a[key] = b[key];
                    }
                }
                else {
                    a[key] = b[key];
                }
            }
        };
        let buildFromInstance = (instance, path) => {
            if (typeof instance != 'object')
                return {};
            let schema = {};
            for (const key in instance) {
                let separator = this.dataScopeManager.separator;
                if (instance[key] === null) {
                    continue;
                }
                else if (instance[key] instanceof Array) {
                    schema[key] = { array: {} };
                    let item = schema[key];
                    if (!('array' in item))
                        break;
                    instance[key].forEach((i, idx) => {
                        if (!('array' in item))
                            return;
                        if (typeof i != 'object') {
                            item.array[idx] = { alphaType: jsTypeToAlphaType(typeof i) };
                        }
                        else {
                            deepAssign(item.array, buildFromInstance(i, path + key + separator));
                        }
                    });
                }
                else if (typeof instance[key] == 'object') {
                    schema[key] = { nested: buildFromInstance(instance[key], path + key + separator) };
                }
                else {
                    schema[key] = { alphaType: jsTypeToAlphaType(typeof instance[key]) };
                }
            }
            return schema;
        };
        this.rawData.forEach(d => deepAssign(this.schema, buildFromInstance(d, "")));
    }
    mapRawSchema(s) {
        s.jsonOutput.column.forEach((item) => this.schema[item.name] = { alphaType: item.alphaType });
    }
    fetchSchema(reuseData) {
        if (reuseData) {
            this.buildSchemaFromRawData();
            return Promise.resolve(this);
        }
        this.schema = {};
        if (this.config.dataSource.type == 'sql' && 'table' in this.config.dataSource) {
            return getSchema(this.obj, this.config.dataSource.table).then(() => {
                let sqlSchema = this.obj.stateInfo.schema;
                this.mapRawSchema(sqlSchema);
                return this;
            });
        }
        else if (this.config.dataSource.type == 'sql') {
            let filters = JSON.stringify([...this.permanentFilters, ...this.searchFilters]);
            return new Promise((resolve, reject) => this.obj.ajaxCallback("", "", "getAllDataForTable", "", "configName=" + encodeURIComponent(this.config.name)
                + "&filters=" + encodeURIComponent(filters), {
                onComplete: () => {
                    let response = this.obj.stateInfo.apiResult;
                    if ("err" in response) {
                        reject(new Error(response.err));
                    }
                    let data = response.ok.result;
                    if (this.data === undefined) {
                        console.error("Error fetching data, defaulting to empty.");
                        data = [];
                    }
                    this.setData(data, true);
                    resolve(this);
                }
            }));
        }
        else if (this.config.dataSource.type == 'json' && 'static' in this.config.dataSource) {
            let staticData = this.config.dataSource.static;
            this.setData(staticData, true);
            return Promise.resolve(this);
        }
        else if (this.config.dataSource.type == 'json' && 'endpoints' in this.config.dataSource) {
            return fetch(this.obj, this.config.name, "fetch")
                .then((res) => {
                if ('err' in res) {
                    throw new Error(res.err);
                }
                let body = JSON.parse(res.ok);
                let data = JSON.parse(body.body);
                this.setData(data, true);
                return this;
            });
        }
        else {
            return Promise.resolve(this);
        }
    }
}
class DataScopeManager {
    constructor(schema) {
        this.separator = '___';
        this.schema = schema;
        this.path = [];
        this.expandedIdxToRawIdx = {};
    }
    setPathFromConfig(config, data) {
        this.path = [];
        for (const dataPoint of data) {
            for (const mapping of config.mappings) {
                let path = mapping.columnName.split(this.separator);
                if (path.length > 1 && path[0] == this.separator) {
                    path[1] = this.separator + path[1];
                    path = path.slice(1);
                }
                let tmp = dataPoint;
                // Iterate through parts of path, 
                // descending through datapoint
                for (let i = 0; i < path.length; i++) {
                    tmp = tmp[path[i]];
                    if (tmp instanceof Array) {
                        this.path = path.slice(0, i + 1);
                        return;
                    }
                    if (tmp == undefined)
                        break;
                }
            }
        }
    }
    strToPath(str) {
        return str.split(this.separator);
    }
    getOriginalIndex(n) {
        return this.expandedIdxToRawIdx[n];
    }
    flattenData(data, config) {
        if (this.path.length == 0)
            return data;
        this.expandedIdxToRawIdx = {};
        let newData = [];
        // Given path part n, datapoint d
        // Flatten data around d, ignoring any arrays
        // Enter array n, if it exists
        // Repeat for part n + 1, datapoint d[n]
        for (let i = 0; i < data.length; i++) {
            let dataPoint = data[i];
            let newItems = this.flattenDataPoint(dataPoint, this.schema, this.path, "");
            let startIdx = newData.length;
            let endIdx = startIdx + newItems.length;
            for (let j = startIdx; j < endIdx; j++) {
                this.expandedIdxToRawIdx[j] = i;
            }
            newData.push(...newItems);
        }
        return newData;
    }
    getAvailableDataColumns() {
        return this._getAvailableDataColumns(this.schema, '', this.path);
    }
    getExpandableColumns() {
        return this._getExpandableColumns(this.schema, "", this.path);
    }
    setPath(path) {
        this.path = path;
    }
    inSubArray(path) {
        let part = this.schema;
        for (let i = 0; i < path.length; i++) {
            let tmp = part[path[i]];
            if (tmp == undefined)
                return false;
            if ('nested' in tmp)
                part = tmp.nested;
            else if ('array' in tmp)
                return true;
            else
                return false;
        }
        return false;
    }
    _getAvailableDataColumns(schema, prefix, path) {
        let result = [];
        for (const key in schema) {
            let part = schema[key];
            if ('alphaType' in part)
                result.push(prefix + key);
            else if ('nested' in part)
                result.push(...this._getAvailableDataColumns(part.nested, prefix + key + this.separator, path));
            else if ('array' in part && path.length > 0 && path[0] == key)
                result.push(...this._getAvailableDataColumns(part.array, prefix + key + this.separator, path.slice(1)));
        }
        return result;
    }
    _getExpandableColumns(schema, prefix, path) {
        let result = [];
        for (const key in schema) {
            let part = schema[key];
            if ('alphaType' in part)
                continue;
            else if ('nested' in part)
                result.push(...this._getExpandableColumns(part.nested, prefix + key + this.separator, path));
            else if ('array' in part && path.length > 0 && path[0] == key)
                result.push(...this._getExpandableColumns(part.array, prefix + key + this.separator, path.slice(1)));
            else if ('array' in part)
                result.push(prefix + key);
        }
        return result;
    }
    flattenDataPoint(point, schema, path, prefix) {
        let final = [];
        let flattenIgnoreArray = (point, schema, prefix) => {
            let result = {};
            for (const key in schema) {
                let part = schema[key];
                if (!(typeof point == "object") && 'alphaType' in part)
                    result[prefix + key] = point;
                else if (!(key in point))
                    continue;
                else if ('array' in part)
                    continue;
                else if ('alphaType' in part)
                    result[prefix + key] = point[key];
                else if ('nested' in part)
                    Object.assign(result, flattenIgnoreArray(point[key], part.nested, prefix + key + this.separator));
            }
            return result;
        };
        let root = flattenIgnoreArray(point, schema, prefix);
        if (path.length == 0)
            return [root];
        for (const key in schema) {
            let part = schema[key];
            if (!(key in point))
                continue;
            else if ('array' in part && path.length > 0 && path[0] == key) {
                let subData = [];
                for (const dataPoint of point[key]) {
                    subData.push(...this.flattenDataPoint(dataPoint, part.array, path.slice(1), prefix + key + this.separator));
                }
                subData.forEach(x => Object.assign(x, root));
                final.push(...subData);
            }
        }
        return final;
    }
}
function setFormDetailView(obj, listBox) {
    obj.getControl(DETAIL_FORM_NAME)._listDetailView = (mode) => {
        let listName = LIST_NAME;
        let lObj = obj.getControl(listName);
        if (mode == 'getListName') {
            return listName;
        }
        else if (mode == 'save') {
            if (lObj.selection[0] != 'undefined') {
                lObj._selectedRow = lObj.selection[0];
            }
            lObj.updateListFromUXControls();
        }
        else if (mode == 'reset') {
            if (lObj.selection[0] != 'undefined') {
                let _d = lObj.selectionData[0];
                let d = JSON.parse(JSON.stringify(_d));
                delete d['*key'];
                delete d['*renderIndex'];
                delete d['*value'];
                let json = JSON.stringify(d);
                obj.setValue(DETAIL_FORM_NAME, json);
            }
        }
        else if (mode == 'deleterecord') {
            lObj.deleteRow();
        }
        else if (mode == 'newrecord') {
            lObj.newDetailViewRecord();
        }
        else if (mode == 'synchronize') {
            listBox.saveDynamicListEdits();
        }
    };
}
function makeDetailButtons() {
    let btnTemplate = (new FormButton())
        .withLayout('icon text')
        .withBtnStyle('white-space:nowrap;');
    btnTemplate._listName = LIST_NAME;
    let copyTemplate = () => {
        let y = new FormButton();
        Object.assign(y, btnTemplate);
        return y;
    };
    return (new FormGroup())
        .withChildren([
        copyTemplate()
            .withHtml('Save')
            .withIcon('svgIcon=#alpha-icon-save:icon iconButton')
            .withCheckDisabled(function () { return this._saveButtonIsDisabled(); })
            .withClickHandler(function () { this._listDetailView("save"); }),
        copyTemplate()
            .withHtml('New Record')
            .withIcon('svgIcon=#alpha-icon-docAdd:icon iconButton')
            .withCheckDisabled(function () { return this._newRecordButtonIsDisabled(); })
            .withClickHandler(function () { this._listDetailView('newrecord'); }),
        copyTemplate()
            .withHtml('Delete Record')
            .withIcon('svgIcon=#alpha-icon-removeCircle:icon iconButton')
            .withCheckDisabled(function () { return this._deleteRecordButtonIsDisabled(); })
            .withClickHandler(function () { this._listDetailView('deleterecord'); }),
        copyTemplate()
            .withHtml('Reset')
            .withIcon('svgIcon=#alpha-icon-undo:icon iconButton')
            .withCheckDisabled(function () { return this._resetRecordButtonIsDisabled(); })
            .withClickHandler(function () { this._listDetailView('reset'); }),
    ]);
}
class DynamicListSearch {
    constructor(dynamicList, obj, window) {
        this.list = dynamicList;
        this.obj = obj;
        this.form = new FormBuilder(this.obj, "SearchForm");
        this.advForm = obj.getControl('AdvancedSearch');
        this.dynamicDropdowns = [];
        this.window = window;
        this.advForm.data.fields = {};
        this.buildForms();
        this.form.render();
    }
    findInSchema(path, schema) {
        let result = schema;
        for (const item of path) {
            let part = result[item];
            if (part === undefined)
                return undefined;
            if ('array' in part)
                result = part.array;
            else if ('nested' in part)
                result = part.nested;
            else
                result = part;
        }
        return result;
    }
    buildForms() {
        if (this.list.config.searchOptions.advancedSearch) {
            this.obj.setControlDisplay('SEARCHFORM' + '', false, 'display');
            this.obj.setControlDisplay('ADVANCEDSEARCH' + '', true, 'display');
        }
        else {
            this.obj.setControlDisplay('SEARCHFORM' + '', true, 'display');
            this.obj.setControlDisplay('ADVANCEDSEARCH' + '', false, 'display');
        }
        this.window.document.getElementById(this.obj.dialogId + ".V.R1.IMAGE_1").style.display = "none";
        let allSearchCols = this.list.dataScopeManager.getAvailableDataColumns();
        let getPreferredColumnOptions = (colName) => {
            let col = { name: '', editType: 'text' };
            let schemaEntry = this.findInSchema(colName.split(this.list.dataScopeManager.separator), this.list.schema);
            if (schemaEntry && "alphaType" in schemaEntry) {
                col.name = colName;
                col.editType = alphaTypeToEditType(schemaEntry.alphaType);
            }
            this.list.config.mappings.forEach(m => {
                var _a, _b;
                if (m.columnName == colName) {
                    col.name = (_a = m.displayName) !== null && _a !== void 0 ? _a : m.columnName;
                    col.editType = (_b = m.editType) !== null && _b !== void 0 ? _b : col.editType;
                }
            });
            return col;
        };
        for (const colName of allSearchCols) {
            let include = this.list.config.searchOptions.onlyInclude;
            let exclude = this.list.config.searchOptions.onlyExclude;
            let shouldInclude = true;
            if (include)
                shouldInclude = include.includes(colName);
            else if (exclude)
                shouldInclude = !exclude.includes(colName);
            if (shouldInclude) {
                let preferred = getPreferredColumnOptions(colName);
                let element = (new FormInput())
                    .withLabel(preferred.name)
                    .withVariable(colName)
                    .withStyle('width: 100%');
                let advancedControl = {
                    type: 'default',
                    format: '',
                    data: [],
                    quantifier: this.list.dataScopeManager.inSubArray(colName.split(this.list.dataScopeManager.separator))
                };
                let editType = preferred.editType;
                switch (editType) {
                    case 'text':
                    case 'number': break;
                    case 'time':
                        element = element.asTime(objTimeFormat());
                        advancedControl.type = 'datepicker';
                        advancedControl.format = objTimeFormat();
                        break;
                    case 'datetime':
                        element = element.asDateTime(objDatetimeFormat());
                        advancedControl.type = 'datepicker';
                        advancedControl.format = objDatetimeFormat();
                        break;
                    case 'bool':
                        element = element.asBool();
                        advancedControl.type = 'switch';
                        advancedControl.data = ['true', 'false'];
                        break;
                    case 'dropdown':
                        let dropdownConfig;
                        for (const mapping of this.list.config.mappings) {
                            if (mapping.columnName == colName) {
                                dropdownConfig = mapping.dropdownConfig;
                                break;
                            }
                        }
                        let choices = [];
                        if (dropdownConfig && 'choices' in dropdownConfig) {
                            choices = dropdownConfig.choices;
                        }
                        if (dropdownConfig && 'fromColumn' in dropdownConfig) {
                            this.dynamicDropdowns.push({ isAdvanced: false, elem: element, col: dropdownConfig.fromColumn });
                            this.dynamicDropdowns.push({ isAdvanced: true, elem: advancedControl, col: dropdownConfig.fromColumn });
                            choices = ['...'];
                        }
                        element = element.asDropdown(choices);
                        advancedControl.data = choices.map(x => { return { html: x, value: x }; });
                        advancedControl.type = 'combolist';
                }
                this.form.withElement(element);
                this.advForm.data.fields[colName] = {
                    control: advancedControl,
                    default: {
                        op: '='
                    },
                    label: preferred.name
                };
            }
        }
        this.modifyAdvFormTemplate();
        this.advForm.onBeforePopulate(this.advForm.data);
        this.advForm.refresh(false);
        this.advForm.items.clearSearch.onClick = () => {
            this.list.listBox.clearSearchList();
            let len = this.advForm.data._parsed.length;
            for (let i = 0; i < len; i++) {
                this.advForm.items.remove.onClick.bind(this.advForm)(i.toString());
            }
        };
        this.advForm.items.filter.onClick = (v, ia, i, ele, event) => {
            if (this.advForm._picker) {
                var _filterMenu = [{
                        html: 'Equals',
                        value: '='
                    }, {
                        html: 'Does Not Equal',
                        value: '<>'
                    }, {
                        html: 'Less Than',
                        value: '<'
                    }, {
                        html: 'Less Than or Equal',
                        value: '<='
                    }, {
                        html: 'Greater Than',
                        value: '>'
                    }, {
                        html: 'Greater Than or Equal',
                        value: '>='
                    }];
                var f = this.advForm.data._parsed[v].field;
                var type = this.advForm.data.fields[f].control.type;
                var exclude = ['datepicker', 'datepickerrange', 'step'];
                if (exclude.indexOf(type) == -1) {
                    _filterMenu = _filterMenu.concat([{
                            html: 'Contains',
                            value: '..x..'
                        }, {
                            html: 'Starts with',
                            value: 'x..'
                        }, {
                            html: 'Ends with',
                            value: '..x'
                        }]);
                }
                this.advForm._picker.layout = 'list';
                this.advForm._picker.populate(_filterMenu);
                this.advForm._picker.setValue(this.advForm.data._parsed[v].op || '');
                this.advForm.showPicker(ele, 'filter', v);
            }
        };
        this.advForm.items.runQuery.onClick = () => {
            let query = this.advForm.value;
            let obj = {
                advancedSearchControl: '',
                queryData: [],
            };
            obj.advancedSearchControl = 'AdvancedSearch';
            obj.queryData = JSON.parse(query[0]);
            let getEditType = (col) => {
                var _a;
                let type;
                for (const column of allSearchCols) {
                    let item = this.findInSchema(column.split(this.list.dataScopeManager.separator), this.list.schema);
                    if (item && column == col && 'alphaType' in item) {
                        type = alphaTypeToEditType(item.alphaType);
                        break;
                    }
                }
                for (const mapping of this.list.config.mappings) {
                    if (mapping.columnName == col) {
                        return (_a = mapping.editType) !== null && _a !== void 0 ? _a : 'text';
                    }
                }
                return type;
            };
            obj.queryData.forEach((e) => {
                var _a;
                let editType = (_a = getEditType(e.field)) !== null && _a !== void 0 ? _a : '';
                let d = new Date();
                if (['datetime', 'time'].includes(editType)) {
                    if (e.value == 'Today')
                        d.adjust('day', 0);
                    else if (e.value == 'Yesterday')
                        d.adjust('day', -1);
                    else if (e.value == 'Tomorrow')
                        d.adjust('day', 1);
                    else {
                        let fmt;
                        if (editType == 'datetime')
                            fmt = objDatetimeFormat();
                        if (editType == 'time')
                            fmt = objTimeFormat();
                        d.fromFormat(e.value, fmt);
                    }
                    e.value = d;
                }
                let alphaType = editTypeToAlphaType(editType);
                e.connector = e.andor == '.and.' ? 'AND' : 'OR';
                e.quantifier = e.quantifier == '.some.' ? 'SOME' : 'ALL';
                delete e.andor;
                e.columnName = e.field;
                delete e.field;
                e.op = e.op == '' ? '=' : e.op;
                e.columnVal = e.value;
                e.type = alphaType;
                delete e.value;
            });
            this.list.listBox.searchList(obj);
        };
        this.form.withElement((new FormButton())
            .withHtml("Search")
            .withClickHandler(() => {
            this.list.listBox.searchList({ searchMode: 'auto' });
        }));
        this.form.withElement((new FormButton())
            .withHtml("Clear")
            .withClickHandler(() => {
            this.list.listBox.clearSearchList({ searchMode: 'auto' });
        }));
        this.list.addOnRenderCallback(() => {
            this.setListSearchFns();
            this.dynamicDropdowns.forEach(element => {
                let set = new Set();
                this.list.listBox._data.forEach((d) => {
                    set.add(d[element.col].toString());
                });
                if (element.isAdvanced)
                    element.elem.data = (Array.from(set)).map(x => { return { html: x, value: x }; });
                else
                    element.elem = element.elem.asDropdown(Array.from(set));
                this.advForm.onBeforePopulate(this.advForm.data);
                this.advForm.refresh();
            });
        });
    }
    modifyAdvFormTemplate() {
        let template = this.advForm.layouts.Default.template;
        let onBtnClick = function (v, ia) {
            this.data._parsed[ia.toString()].quantifier = v;
            this.setValue(JSON.stringify(this.data._parsed));
            this.refresh();
        };
        this.advForm.items['quantifier'] = {
            onClick: onBtnClick,
            disabledClassName: "",
            drag: { allow: false, on: "down" },
            onBeforeSelect: false,
            onDblClick: false,
            onDown: false,
            onDownHold: false,
            onDragHold: false,
            onDragEnd: false,
            onDragMove: false,
            onDragStart: false,
            onRightClick: false,
            onSelect: false,
            onSwipe: false,
            onUp: false,
            selectable: false,
            selectedClassName: ""
        };
        if (template.indexOf("QUANTIFIER") >= 0)
            return;
        let newTemplate = `
            <div style="white-space: nowrap;">
                {*if [root].fields[field].control.quantifier} 
                    {A5.buttonLists.html(
                        '${this.obj.dialogId}.AdvancedSearch.QUANTIFIER' + [count],
                        <escape<
                            {
                                theme: "${this.advForm.theme}",
                                button: {style: 'width: 60px;' }
                            },
                            [
                                {
                                    html: 'ALL<div class="icon" style="width: 0px; display: inline-block;">&nbsp;</div>',
                                    value: '.all.'
                                },
                                {
                                    html: 'SOME<div class="icon" style="width: 0px; display: inline-block;">&nbsp;</div>',
                                    value: '.some.'
                                },
                            ],
                            (() => { try {return quantifier;} catch(_) {return '.all.'}})(),
                            'a5-item="quantifier:' + [count] + '" a5-value="{value}" id="${this.obj.dialogId}.AdvancedSearch.QUANTIFIER' + [count] + '.{index}"'
                        >>
                    )}
                {*endif}
            </div>
        `;
        newTemplate = newTemplate.replace(/(\r\n|\n|\r)/gm, '');
        let templateSplitPoint = template.indexOf("</div>	{/_parsed}");
        template = template.slice(0, templateSplitPoint) + newTemplate + template.slice(templateSplitPoint);
        this.advForm.layouts.Default.template = template;
        this.advForm.layouts.Default._t = undefined;
    }
    serverOrClientSearch(o) {
        let obj = typeof o != 'undefined' ? o : {};
        let mode = 'serverside';
        if (!(this.list.config.searchOptions.serverSearch))
            mode = 'clientside';
        return mode;
    }
    setListSearchFns() {
        let lObj = this.list.listBox;
        let allSearchCols = this.list.dataScopeManager.getAvailableDataColumns();
        if (lObj.searchList)
            return;
        lObj.searchList = (x) => {
            var _a;
            ((_a = this.obj.stateInfo.onSearchCallbacks) !== null && _a !== void 0 ? _a : []).forEach((f) => f(this));
            let obj = typeof x != 'undefined' ? x : {};
            let mode = this.serverOrClientSearch(x);
            let flagDirty = false;
            if (lObj.listIsDirty)
                flagDirty = lObj.listIsDirty();
            let flagResult = this.obj._list_executeEvent(lObj.listVariableName, 'beforeSearch', { searchMode: 'search', searchWhere: mode, listIsDirty: flagDirty });
            if (!flagResult)
                return false;
            if (!obj.queryData)
                obj = undefined;
            if (mode == 'serverside') {
                lObj._searchListServerSide(obj);
            }
            else if (mode == 'clientside') {
                lObj._searchPartSubmit_clientSideFilter(obj);
                let rowCount = lObj._rData.length;
                this.obj._list_executeEvent(lObj.listVariableName, 'afterSearchComplete', { searchMode: 'search', searchWhere: mode, recordsInQuery: rowCount });
            }
            this.list.updateRecordCount();
        };
        lObj._searchPartSubmit_clientSideFilter = (searchObj) => {
            lObj._state.highlight = {};
            let map = lObj._searchPart.fieldMap;
            let val = '';
            let expn = [];
            let expn_i = '';
            let obj = {};
            let obj_i = {};
            let ac = [];
            let aco = {};
            let _highlight = {};
            let values = [];
            allSearchCols.forEach((colName, i) => {
                let val;
                if (!searchObj) {
                    val = this.obj.getValue(map[i].control);
                    if (val != undefined && val != '')
                        values.push({ index: i, item: val, name: colName });
                }
                else {
                    for (const e of searchObj.queryData) {
                        if (e.columnName == map[i].field)
                            values.push({ index: i, item: e, name: colName });
                    }
                }
            });
            for (let i = 0; i < values.length; i++) {
                let v = values[i];
                let val;
                if (v.item.columnVal)
                    val = v.item.columnVal;
                else
                    val = v.item;
                obj_i = lObj._searchFieldOptions[v.name];
                lObj._setSearchOps(obj, obj_i);
                let strVal = val.toString();
                if (typeof val === 'string')
                    strVal = lObj._str(val);
                if (val instanceof Date)
                    strVal = lObj._str(val.toFormat(objDatetimeFormat()));
                if (v.item.op)
                    obj['op'] = v.item.op;
                if (v.item.quantifier)
                    obj['quantifier'] = v.item.quantifier;
                expn_i = 'this._match(data,' + lObj._str(v.name) + ',' + strVal + ',' + JSON.stringify(obj) + ')';
                expn.push(expn_i);
                if (v.item.connector && i < values.length - 1) {
                    if (v.item.connector == 'AND')
                        expn.push('&&');
                    else
                        expn.push('||');
                }
                aco.control = map[v.index].control;
                aco.value = val;
                ac.push(aco);
            }
            if (expn.length == 0)
                return true;
            if (expn[expn.length - 1] == '||' || expn[expn.length - 1] == '&&')
                expn.pop();
            let expn_str = expn.join('');
            let fnText = 'if (' + expn_str + ') { return true; } else { return false; }';
            let searchFn = new Function('data', fnText);
            lObj.setFilter(searchFn);
        };
        lObj._setSearchOps = function (obj, obj_i) {
            obj.mode = obj_i.option;
            obj.qbf = obj_i.qbf;
            obj.type = obj_i.type;
            obj.dateFormat = obj_i.dateFormat;
        };
        lObj._searchListServerSide = (searchObj) => {
            let flagDirty = false;
            if (lObj.listIsDirty)
                flagDirty = lObj.listIsDirty();
            if (flagDirty) {
                alert('Cannot search because List has edits that have not yet been synced');
                return false;
            }
            let filters = searchObj ? searchObj.queryData : [];
            let map = lObj._searchPart.fieldMap;
            for (let i = 0; i < map.length; i++) {
                let val = this.obj.getValue(map[i].control);
                if (val != '' && val != undefined) {
                    let ops = lObj._searchFieldOptions[allSearchCols[i]];
                    let columnVal = '';
                    let op = '';
                    if (ops.type == 'text') {
                        columnVal = '%' + val + '%';
                        op = 'LIKE';
                    }
                    else {
                        columnVal = val;
                        op = '=';
                    }
                    filters.push({
                        columnName: ops.searchField,
                        columnVal: { tag: 'value', value: columnVal.toString() },
                        connector: 'AND',
                        op: op,
                        type: ops.type,
                    });
                }
            }
            filters.forEach(e => {
                if (e.op == '..x..') {
                    e.op = 'LIKE';
                    e.columnVal = { tag: 'value', value: '%' + e.columnVal + '%' };
                }
                if (e.columnVal instanceof Date) {
                    e.columnVal = e.columnVal.toFormat(objDatetimeFormat());
                }
            });
            this.list.setFilterAndFetch(filters);
        };
        lObj.clearSearchList = (_obj) => {
            var _a;
            ((_a = this.obj.stateInfo.onClearSearchCallbacks) !== null && _a !== void 0 ? _a : []).forEach((f) => f(this));
            let mode = this.serverOrClientSearch(_obj);
            let flagResult = this.obj._list_executeEvent(lObj.listVariableName, 'beforeSearch', { searchMode: 'clear', searchWhere: mode });
            if (!flagResult)
                return false;
            lObj.setFilter(false);
            if (mode == 'serverside') {
                lObj._clearSearchListServerSide();
            }
            else if (mode == 'clientside') {
                lObj._searchPartSubmit_clientSideFilterClear();
                let rowCount = lObj._rData.length;
                this.obj._list_executeEvent(lObj.listVariableName, 'afterSearchComplete', { searchMode: 'clear', searchWhere: mode, recordsInQuery: rowCount });
            }
        };
        lObj._clearSearchListServerSide = () => {
            let map = lObj._searchPart.fieldMap;
            for (const m of map) {
                this.obj.setValue(m.control, '', false);
            }
            this.list.setFilterAndFetch([]);
            this.obj._setDVClean(lObj);
        };
        lObj._searchPartSubmit_clientSideFilterClear = () => {
            if (!lObj._searchPartHas)
                return true;
            lObj._state.highlight = {};
            lObj.setFilter(false);
            let map = lObj._searchPart.fieldMap;
            for (let i = 0; i < map.length; i++) {
                this.obj.setValue(map[i].control, '', false);
            }
            lObj.setFilter(false);
            delete lObj.__queryByFormValues;
            this.obj._setDVClean(lObj);
        };
        lObj._searchPartHas = true;
        lObj._searchPart = {};
        lObj._searchFieldOptions = {};
        lObj._searchPart.fieldMap = [];
        for (const col of this.list.dataScopeManager.getAvailableDataColumns()) {
            let path = col.split(this.list.dataScopeManager.separator);
            if (path.length > 1 && path[0] == '') {
                path[1] = this.list.dataScopeManager.separator + path[1];
                path = path.slice(1);
            }
            let item = this.findInSchema(path, this.list.schema);
            if (item && 'alphaType' in item) {
                let type = item.alphaType.toLowerCase();
                lObj._searchPart.fieldMap.push({
                    control: 'SearchForm::' + col,
                    field: col,
                    dateFormat: objDatetimeFormat()
                });
                lObj._searchFieldOptions[col] = {
                    option: 2,
                    qbs: true,
                    searchField: col,
                    type: type,
                    dateFormat: objDatetimeFormat()
                };
            }
        }
    }
}
