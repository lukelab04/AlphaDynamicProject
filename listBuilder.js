"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var LIST_NAME = 'DYNAMIC_LIST';
var DETAIL_FORM_NAME = "DETAIL_VIEW";
var SEPARATOR = '___';
var objTimeFormat = function () { return A5.__tfmt; };
var objDatetimeFormat = function () { return A5.__dtfmt + ' ' + objTimeFormat(); };
var ValidationError = /** @class */ (function (_super) {
    __extends(ValidationError, _super);
    function ValidationError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "Validation Error";
        _this.message = message;
        return _this;
    }
    ValidationError.prototype.newFn = function () {
        return 10;
    };
    ValidationError.prototype.toString = function () {
        return this.name + ": " + this.message;
    };
    return ValidationError;
}(Error));
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
    return new ValidationError("Expected \"".concat(root, "\" to have a prop \"").concat(prop, "\" of type \"").concat(type, "\""));
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
            for (var key in config.dataSource.endpoints) {
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
                    config.dataSource.filters.forEach(function (f) { return validateFilter(f); });
                }
            }
        }
        else if ('sql' in config.dataSource) {
            if (!existsAndIs(config.dataSource, "sql", "string"))
                throw existsIsErr("config.dataSource", "sql", "string");
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
    config.mappings.forEach(function (x) { return validateMapping(x); });
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
        config.buttons.forEach(function (b) { return validateListBtn(b); });
    }
    return config;
}
function validateConfigSchema(config, manager) {
    config.mappings.forEach(function (m) { return validateMappingSchema(m, manager); });
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
        btn.children.forEach(function (x) { return validateListBtn(x); });
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
        throw new ValidationError("Mapping \"".concat(mapping.columnName, "\" is not a column of the list data"));
    }
}
function validateEndpoint(endpoint) {
    if (endpoint == null || typeof endpoint != 'object')
        throw new ValidationError('Expected "config.mappings.endpoints.endpoint" to be of type "object"');
    var root = "config.mappings.endpoints.endpoint";
    if (!existsAndIs(endpoint, "method", "string"))
        throw existsIsErr(root, "method", "string");
    if (!existsAndIsOrNone(endpoint, "headers", {}))
        throw existsIsErr(root, "headers", "object");
    if (!existsAndIsOrNone(endpoint, "callback", "string"))
        throw existsIsErr(root, "callback", "string");
    if (!existsAndIs(endpoint, "endpoint", {}))
        throw existsIsErr(root, "endpoint", "object");
    if (!(existsAndIs(endpoint.endpoint, "template", "string") || existsAndIs(endpoint.endpoint, "getEndpointURL", "string"))) {
        throw existsIsErr(root, "template or getEndpointURL", "string");
    }
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
    return new Promise(function (resolve) {
        obj.ajaxCallback("", "", "getSchemaAjaxCallback", "", "tableName=" + encodeURIComponent(table), {
            onComplete: resolve
        });
    });
}
function getSchemaCustomSql(obj, sql) {
    return new Promise(function (resolve) {
        obj.ajaxCallback("", "", "getSchemaAjaxCallback", "", "sql=" + encodeURIComponent(sql), {
            onComplete: resolve
        });
    });
}
function fetch(obj, url, options) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            options = JSON.stringify(options);
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    obj.ajaxCallback("", "", "fetch", "", "url=".concat(encodeURIComponent(url), "&options=").concat(encodeURIComponent(options)), {
                        onComplete: function () {
                            var result = obj.stateInfo.fetchResult;
                            resolve(result);
                        }
                    });
                })];
        });
    });
}
var DynamicList = /** @class */ (function () {
    function DynamicList() {
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
    }
    DynamicList.prototype.destructor = function () {
        if (this.listBox.destroy)
            this.listBox.destroy();
    };
    DynamicList.makeDynamicList = function (obj, config, filters, args) {
        if (filters === void 0) { filters = []; }
        if (args === void 0) { args = []; }
        return new Promise(function (resolve) {
            var list = new DynamicList();
            list.permanentFilters = filters;
            list.searchFilters = [];
            list.buttonFns = {};
            list.onRender = [];
            list.obj = obj;
            list.listBox = null;
            list.config = jQuery.extend({}, config);
            list.data = [];
            list.rawData = [];
            list.schema = {};
            validateConfig(list.config);
            if (list.config.onInitialize) {
                stringReprToFn(list.config.onInitialize)(list, args);
            }
            obj.getControl('LIST1')._size = function () { };
            obj.getControl('LIST1')._resize = function () { };
            obj.saveDynamicListEdits = function () { return list.saveDynamicListEdits(); };
            resolve(list);
        })
            .then(function (list) { return list.fetchSchema(); })
            .then(function (list) {
            list.settings = list.buildSettings();
            list.buildList();
            list.dataScopeManager = new DataScopeManager(list.schema);
            return list.reRender();
        })
            .then(function (renderedList) {
            validateConfigSchema(renderedList.config, renderedList.dataScopeManager);
            return renderedList;
        });
    };
    DynamicList.prototype.reRender = function () {
        return this.fetchData().then(function (list) {
            list.populateListBox();
            return list;
        });
    };
    DynamicList.prototype.setStaticData = function (data) {
        this.config.dataSource = {
            type: 'json',
            static: data,
            preprocess: this.config.dataSource.preprocess,
        };
        this.settings = this.buildSettings();
        this.buildList();
        this.reRender();
    };
    DynamicList.prototype.selection = function () {
        return this.data[this.listBox.selectionKey[0]];
    };
    DynamicList.prototype.openDetailView = function () {
        this.obj.runAction('Navigate Detail View');
    };
    DynamicList.prototype.newDetailViewRecord = function () {
        var _this = this;
        var makeForm = function () { return _this.buildDetailViewForm(); };
        var openForm = function () { return _this.obj.runAction('Navigate Detail View'); };
        var makeNew = function () { return _this.listBox.newDetailViewRecord(); };
        A5.executeThisThenThat(makeForm, openForm, makeNew);
    };
    DynamicList.prototype.saveDynamicListEdits = function () {
        var _this = this;
        var harvest = this.listBox.harvestList();
        var onComplete = function () {
            _this.listBox.__fixData(_this.listBox);
            for (var i = 0; i < _this.listBox._data.length; i++) {
                _this.listBox._data[i]._isDirty = false;
            }
            _this.listBox.populateUXControls();
            _this.obj.refreshClientSideComputations(true);
            _this.reRender();
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
            var newRows_1 = [];
            var updatedRows_1 = [];
            var deletedRows_1 = [];
            harvest.forEach(function (r) {
                if ('_isNewRow' in r && r._isNewRow === true) {
                    newRows_1.push(r);
                }
                else if ('_isDeleted' in r && r._isDeleted === true) {
                    deletedRows_1.push(r);
                }
                else {
                    updatedRows_1.push(r);
                }
            });
            var allQueries_1 = [];
            var populateQueries = function (list, endpoint) {
                list.forEach(function (rowData) {
                    var _a;
                    if (!('endpoints' in _this.config.dataSource))
                        return;
                    if (endpoint in _this.config.dataSource.endpoints) {
                        var ep = _this.config.dataSource.endpoints[endpoint];
                        var ops = _this.getFetchOptions(ep, rowData);
                        allQueries_1.push({
                            ops: ops,
                            endpoint: _this.populateUrlParams(ep.endpoint, _this.filtersAsSimpleObj()),
                            callback: stringReprToFn((_a = ep.callback) !== null && _a !== void 0 ? _a : "() => { }"),
                        });
                    }
                });
            };
            populateQueries(newRows_1, 'add');
            populateQueries(updatedRows_1, 'update');
            populateQueries(deletedRows_1, 'delete');
            allQueries_1.forEach(function (q) {
                fetch(_this.obj, q.endpoint, q.ops).then(q.callback);
            });
            onComplete();
        }
    };
    DynamicList.prototype.buildSettings = function () {
        var _this = this;
        var columns = [];
        var listFields = [];
        var menuSettings = {};
        var items = {};
        if (!this.config.buttons)
            this.config.buttons = [];
        for (var _i = 0, _a = this.config.mappings; _i < _a.length; _i++) {
            var mapping = _a[_i];
            columns.push(this.buildColumnDefn(mapping));
            listFields.push(this.buildListFieldDefn(mapping));
        }
        for (var i = 0; i < this.config.buttons.length; i++) {
            columns.push(this.buildColumnButton(this.config.buttons[i], i, items));
            this.makeMenuSetting(this.config.buttons[i], i, menuSettings, items);
        }
        var dialogId = this.obj.dialogId;
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
            onBeforeSelect: function () {
                var c = _this.listBox.childLists;
                var lObj = '';
                if (typeof c != 'undefined') {
                    for (var i = 0; i < c.length; i++) {
                        lObj = _this.obj.getControl(c[i]);
                        if (lObj) {
                            var flat = lObj.onBeforeSelect();
                        }
                    }
                }
                if (_this.listBox._dvmode == 'search')
                    return true;
                if (!_this.listBox._autoCommitDetailView) {
                    return _this.listBox._showDirtyDetailViewWarning();
                }
                else {
                    if (_this.listBox.detailViewIsDirty && _this.listBox.detailViewIsDirty(true)) {
                        var result = _this.listBox.updateListFromUXControls();
                        return result;
                    }
                }
            },
            onSelect: function (index) {
                // Will be assigned by Alpha later
                _this.listBox.populateUXControls();
                _this.listBox._selectedRow = _this.listBox.selection[0];
                _this.obj._listRowSelect(LIST_NAME, _this.listBox);
                _this.listBox._selectedRow = _this.listBox.selection[0];
            },
            onClick: function () {
                _this.obj._listSystemOnClick(LIST_NAME, _this.listBox.selection[0]);
            },
            onBeforePopulate: function (data) {
                if (_this.listBox)
                    _this.listBox.__onPopulateHasFired = false;
                for (var i = 0; i < data.length; i++) {
                    for (var _i = 0, _a = _this.config.mappings; _i < _a.length; _i++) {
                        var mapping = _a[_i];
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
            onBeforeUpdateRow: function (index, data) {
                for (var _i = 0, _a = _this.config.mappings; _i < _a.length; _i++) {
                    var mapping = _a[_i];
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
            _onSelect: function (index) { return _this.listBox.onSelect(index); },
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
            _getRoute: function (_mode, _obj, _endPoint) {
                var mode = typeof _mode != 'undefined' ? _mode : 'rowNumber';
                var obj = typeof _obj != 'undefined' ? _obj : [];
                if (typeof _this.listBox.selection == 'undefined')
                    return false;
                if (typeof _this.listBox.selection[0] == 'undefined')
                    return false;
                if (typeof _this.listBox.getData(_this.listBox.selection[0]) == 'undefined')
                    return false;
                if (mode == '*key') {
                }
                else {
                    if (mode != 'rowNumber') {
                        var _d = _this.listBox.getData(_this.listBox.selection[0]);
                        if (typeof _d.__primaryKey == 'undefined') {
                            mode = 'rowNumber';
                        }
                    }
                }
                var endPoint = typeof _endPoint != 'undefined' ? _endPoint : '';
                if (endPoint != '') {
                    var ra2 = [];
                    var lObj = _this.obj.getControl(endPoint);
                    var parentList = lObj.parentList;
                    while (typeof parentList != 'undefined') {
                        var l2 = _this.obj.getControl(parentList);
                        var row = '';
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
                        list: _this.listBox.listVariableName.toUpperCase(),
                        row: _this.listBox.getData(_this.listBox.selection[0])['*key'], mode: mode
                    });
                }
                else {
                    var _d = _this.listBox.getData(_this.listBox.selection[0]);
                    var _pk = _d.__primaryKey;
                    if (typeof _d.__primaryKey == 'undefined') {
                        _pk = _d['*rowGUID'];
                    }
                    obj.push({
                        list: _this.listBox.listVariableName.toUpperCase(),
                        row: _pk,
                        mode: mode
                    });
                }
                for (var i = 0; i < _this.listBox.childLists.length; i++) {
                    var lname = _this.listBox.childLists[i];
                    var lObj = _this.obj.getControl(lname);
                    if (lObj)
                        lObj._getRoute(mode, obj);
                }
                return obj;
            },
            _setRoute: function (route, _mode) {
                if (_this.listBox.multiple)
                    return;
                if (typeof route == 'undefined') {
                    route = _this.listBox.__currentRoute;
                    if (typeof route == 'undefined')
                        return false;
                }
                var mode = _mode !== null && _mode !== void 0 ? _mode : 'rowNumber';
                if (mode == 'primaryKey') {
                    var _d = _this.listBox._data;
                    if (typeof _d[0] != 'undefined') {
                        if (typeof _d[0].__primaryKey == 'undefined') {
                            mode = 'rowNumber';
                        }
                    }
                }
                var lObj = '';
                var row = '';
                var _pk = '';
                for (var i = 0; i < route.length; i++) {
                    lObj = _this.obj.getControl(route[i].list);
                    row = route[i].row;
                    if (typeof route[i].mode != 'undefined') {
                        mode = route[i].mode;
                    }
                    if (mode == 'primaryKey')
                        _pk = row;
                    var flag = typeof _this.listBox._restoringList != 'undefined' ? !_this.listBox._restoringList : true;
                    if (mode == 'rowNumber') {
                        if (typeof row != 'undefined') {
                            var rowFixed = '';
                            if (typeof lObj._dataMap == 'undefined')
                                return false;
                            if (mode != 'rowNumber') {
                                rowFixed = row;
                            }
                            else {
                                rowFixed = lObj._dataMap.indexOf(route[i].row);
                            }
                            lObj.setValue(rowFixed, flag);
                            if (_this.listBox._clearServerSideErrors)
                                _this.listBox._clearServerSideErrors();
                            if (_this.listBox.showServerSideErrors)
                                _this.listBox.showServerSideErrors();
                            if (_this.listBox._showWriteConflictErrors)
                                _this.listBox._showWriteConflictErrors();
                        }
                    }
                    else {
                        lObj.setValue('' + _pk, flag);
                        if (_this.listBox._clearServerSideErrors)
                            _this.listBox._clearServerSideErrors();
                        if (_this.listBox.showServerSideErrors)
                            _this.listBox.showServerSideErrors();
                        if (_this.listBox._showWriteConflictErrors)
                            _this.listBox._showWriteConflictErrors();
                    }
                }
            },
            _executeEvent: function (event, obj) { return _this.obj._list_executeEvent(LIST_NAME, event, obj); },
            _refreshDebugInfo: function () { },
            _str: function (txt) {
                txt = txt.replace("'", "\\'");
                txt = '\'' + txt + '\'';
                return txt;
            },
            onBeforeItemDraw: function () { },
            onItemDraw: function (ele, data, index) {
                if (!('_rData' in this))
                    return;
                var _dirtyRowClassName = "_".concat(dialogId, "_LIST1_dirtyRow");
                var _dirtyRowClassNameInherited = "_".concat(dialogId, "_LIST1_dirtyRowInherited");
                var _dirtyRowStyle = "_".concat(dialogId, "_LIST1_dirtyRowStyle");
                var _hasUnsyncedMediaFilesClassName = "_".concat(dialogId, "_LIST1_hasUnsyncedMediaFiles");
                var _errorRowClassName = "_".concat(dialogId, "_LIST1_hasError");
                var _errorRowClassNameInherited = "_".concat(dialogId, "_LIST1_hasErrorInherited _").concat(dialogId, "_LIST1_dirtyRowInherited");
                var _errorRowClassNameInherited_1 = "_".concat(dialogId, "_LIST1_hasErrorInherited");
                var _errorRowClassNameInherited_2 = "_".concat(dialogId, "_LIST1_dirtyRowInherited");
                var _errorRowStyle = "_".concat(dialogId, "_LIST1_hasErrorStyle");
                var _newRowClassName = "_".concat(dialogId, "_LIST1_newRow");
                var _newRowStyle = "_".concat(dialogId, "_LIST1_newRowStyle");
                var _deletedRowClassName = "_".concat(dialogId, "_LIST1_deletedRow");
                var _deletedRowStyle = "_".concat(dialogId, "_LIST1_deletedRowStyle");
                var _deletedRowClassNameInherited = "_".concat(dialogId, "_LIST1_deletedRowInherited");
                var __d = this._rData[index];
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
                var flagHasGlobalErrors = false;
                if (typeof data._globalErrors != 'undefined') {
                    if (data._globalErrors != '')
                        flagHasGlobalErrors = true;
                }
                var flagHasWriteConflictErrors = false;
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
                    var btns = document.getElementsByClassName("".concat(LIST_NAME, "_BUTTON"));
                    for (var i = 0; i < btns.length; i++) {
                        btns[i].parentElement.style.whiteSpace = 'normal';
                    }
                }
            },
            _navBarId: 'DYNAMIC_LIST_NAVIGATOR',
            _refreshStateMessages: function () {
                if (!_this.config.searchOptions.paginate)
                    return;
                if (_this.obj._listStateChange)
                    _this.obj._listStateChange(_this.listBox.listVariableName);
                var ele = '';
                ele = $("_".concat(_this.obj.dialogId, ".DUMMY.PAGENUMBER"));
                if (ele)
                    ele.innerHTML = _this.listBox._state.page;
                ele = $("_".concat(_this.obj.dialogId, ".DUMMY.PAGECOUNT"));
                if (ele)
                    ele.innerHTML = _this.listBox._state.pageCount;
                ele = $("_".concat(_this.obj.dialogId, ".DUMMY.PAGECOUNT.PAGESELECTOR"));
                if (ele)
                    ele.innerHTML = _this.listBox._state.pageCount;
                ele = $("_".concat(_this.obj.dialogId, ".DUMMY.LISTSTATE"));
                if (ele) {
                    var listState = $u.o.toJSON(_this.listBox._state);
                    ele.innerHTML = listState;
                }
                if (_this.listBox._hasNavigationBar) {
                    var nObj = _this.listBox._listNavigator;
                    if (!nObj) {
                        _this.listBox._listNavigator = _this.obj._navigationBar(_this.listBox._navBarId);
                    }
                    nObj = _this.listBox._listNavigator;
                    if (nObj) {
                        var obj = nObj.data;
                        obj.settings = _this.listBox._navigationBar;
                        obj.pageNumber = _this.listBox._state.page;
                        obj.totalPages = _this.listBox._state.pageCount;
                        obj.totalRecords = _this.listBox._state.recordCount;
                        nObj.items.clickNavigationLink.onClick = function (v, ia, i, ele) {
                            ia = ia.split('|');
                            var target = ia[1];
                            if (target == 'first') {
                                _this.listBox._state.page = 1;
                            }
                            else if (target == 'prev') {
                                if (_this.listBox._state.page >= 1) {
                                    _this.listBox._state.page -= 1;
                                }
                            }
                            else if (target == 'next') {
                                if (_this.listBox._state.page < _this.listBox._state.pageCount) {
                                    _this.listBox._state.page += 1;
                                }
                            }
                            else if (target == 'last') {
                                _this.listBox._state.page = _this.listBox._state.pageCount;
                            }
                            else {
                                _this.listBox._state.page = Number(target);
                            }
                            _this.reRender();
                        };
                        obj.listName = _this.listBox.listVariableName;
                        nObj.populate(obj);
                        _this.listBox.refresh();
                        _this.listBox.resize(); //needed if the list has a fixed size and the style is gr*
                    }
                }
                ele = _this.obj._buttons['BUTTON_LISTNAV_NEXT.LIST1'];
                if (ele) {
                    if (_this.listBox._state.page == _this.listBox._state.pageCount || _this.listBox._state.pageCount == 0)
                        ele.setDisabled(true);
                    else
                        ele.setDisabled(false);
                }
                ele = _this.obj._buttons['BUTTON_LISTNAV_LAST.LIST1'];
                if (ele) {
                    if (_this.listBox._state.page == _this.listBox._state.pageCount || _this.listBox._state.pageCount == 0)
                        ele.setDisabled(true);
                    else
                        ele.setDisabled(false);
                }
                ele = _this.obj._buttons['BUTTON_LISTNAV_FIRST.LIST1'];
                if (ele) {
                    if (_this.listBox._state.page == 1 || _this.listBox._state.pageCount == 0)
                        ele.setDisabled(true);
                    else
                        ele.setDisabled(false);
                }
                ele = _this.obj._buttons['BUTTON_LISTNAV_PREV.LIST1'];
                if (ele) {
                    if (_this.listBox._state.page == 1 || _this.listBox._state.pageCount == 0)
                        ele.setDisabled(true);
                    else
                        ele.setDisabled(false);
                }
                ele = $("".concat(_this.obj.dialogId, ".V.R1.A5SYSTEM_LIST_PAGESELECTOR_LIST1"));
                if (ele) {
                    var data = _this.listBox._recordNavigatorLinks;
                    if (data) {
                        A5.form.populateSelect(ele, '' + _this.listBox._state.page, data, true);
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
            _match: function (data, field, val, obj) {
                var _a;
                if (obj.qbf && obj.type == 'c')
                    val = $u.s.rTrim(val, ',');
                var _v = val;
                var flagC = false;
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
                var flag = false;
                obj.usesQBFOperator = false;
                var o = {};
                var _vals = [];
                var matches = function (data, field) {
                    var _a;
                    o.flag = false;
                    o.v1 = _v;
                    o.v2 = '';
                    var _d = data[field];
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
                        var op = (_a = obj.op) !== null && _a !== void 0 ? _a : "..x..";
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
                var matchNested = function (quantifier, path, d) {
                    if (path.length == 0)
                        return false;
                    if (path.length == 1) {
                        return matches(d, path[0]);
                    }
                    else {
                        var item = d[path[0]];
                        if (!(item instanceof Array))
                            return false;
                        var results = [];
                        for (var _i = 0, item_1 = item; _i < item_1.length; _i++) {
                            var d_1 = item_1[_i];
                            var m = matchNested(quantifier, path.slice(1), d_1);
                            results.push(m);
                        }
                        var result = void 0;
                        if (results.length == 0) {
                            result = false;
                        }
                        else {
                            result = results.reduce(function (a, b) {
                                if (quantifier == 'SOME')
                                    return a || b;
                                return a && b;
                            });
                        }
                        return result;
                    }
                };
                var path = _this.dataScopeManager.strToPath(field);
                if (_this.dataScopeManager.inSubArray(path)) {
                    var rawDataPoint = _this.rawData[_this.dataScopeManager.getOriginalIndex(data['*key'])];
                    flag = matchNested((_a = obj.quantifier) !== null && _a !== void 0 ? _a : 'ALL', path, rawDataPoint);
                }
                else {
                    flag = matches(data, field);
                }
                if (flag) {
                    var lObj = _this.listBox;
                    if (typeof lObj._state.highlight == 'undefined')
                        lObj._state.highlight = {};
                    lObj._state.highlight[field.toUpperCase()] = _vals;
                }
                return flag;
            },
            clickButton: function (btnNumber) {
                _this.buttonFns[btnNumber](_this);
            },
            __list_menu_show: function (name, rowNumber) {
                var flag;
                var lObj = _this.listBox;
                if (lObj.beforeMenuOpen)
                    flag = lObj.beforeMenuOpen(name, rowNumber, lObj);
                if (typeof flag == 'undefined')
                    flag = true;
                if (!flag)
                    return;
                var obj = lObj._menuSettings[name];
                if (typeof obj == 'undefined')
                    return;
                var idIcon = _this.obj.dialogId + '.' + lObj.listVariableName + '.MENU.' + name + '.' + rowNumber;
                var ele = $(idIcon);
                var menuData = obj.menuData;
                var menuSettings = obj.menuSettings;
                var objMenuObject = obj.menuObject;
                if (typeof objMenuObject == 'undefined') {
                    menuSettings.rowNumber = rowNumber;
                    obj.menuObject = new A5.Menu(menuData, menuSettings);
                    objMenuObject = obj.menuObject;
                }
                else {
                    objMenuObject.rowNumber = rowNumber;
                    objMenuObject.populate(menuData);
                }
                var flagIsOpen = obj.isOpen;
                var existingRowNumber = obj.existingRowNumber;
                if (typeof existingRowNumber == 'undefined')
                    existingRowNumber = -1;
                var closingRowNumber = obj.closingRowNumber;
                if (typeof closingRowNumber == 'undefined')
                    closingRowNumber = -1;
                if (typeof flagIsOpen == 'undefined')
                    flagIsOpen = false;
                if (rowNumber == closingRowNumber)
                    flagIsOpen = true;
                var that = _this.listBox;
                setTimeout(function () {
                    if (!flagIsOpen) {
                        obj.isOpen = true;
                        obj.existingRowNumber = rowNumber;
                        lObj._menuName = name;
                        var duration = obj.image_rotate_duration;
                        if (typeof duration == 'undefined')
                            duration = 600;
                        if (obj.image_rotate)
                            that.__list_menu_rotate(ele, 0, 90, obj.imageOpen, duration);
                        objMenuObject.show('dropdown', ele);
                        return false;
                    }
                }, 0);
            },
            __list_menu_rotate: function (ele, from, to, terminalImage, duration) {
                if (typeof duration == 'undefined')
                    duration = 300;
                if (terminalImage == 'undefined')
                    terminalImage = '';
                var onComplete;
                if (terminalImage != '') {
                    onComplete = function () { return ele.innerHTML = A5.u.icon.html(terminalImage); };
                }
                else {
                    onComplete = function () { };
                }
                A5.u.element.transition(ele, {
                    from: { transform: 'rotate(' + from + 'deg)' },
                    to: { transform: 'rotate(' + to + 'deg)' },
                    duration: duration
                }, onComplete);
            },
            __list_menu_hide: function (lObj) {
                var obj = lObj._menuSettings;
                var ele;
                var isOpen;
                var menuObject;
                var imageClosed;
                for (var n in obj) {
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
            onListDraw: function (data, startIndex) {
                if (A5.flags.isMobile) {
                    $e.add(_this.listBox.contId + '.CONTENT', 'abstractdown', function (e) {
                        var ele = e.target;
                        var tag = '';
                        if (ele && typeof ele.tagName == 'string')
                            tag = ele.tagName.toLowerCase();
                        if (tag != 'input' && tag != 'textarea')
                            $e.preventDefault(e);
                    });
                    _this.listBox._hasrun = true;
                    _this.listBox._allrowschecked = true;
                    var d = _this.listBox._rData;
                    for (var i = 0; i < d.length; i++) {
                        if (!d[i].__selected) {
                            _this.listBox._allrowschecked = false;
                            break;
                        }
                    }
                    if (d.length == 0)
                        _this.listBox._allrowschecked = false;
                    var h = void 0;
                    if (_this.listBox._allrowschecked) {
                        h = A5.u.icon.html(_this.listBox.__checkedImage);
                    }
                    else {
                        h = A5.u.icon.html(_this.listBox.__uncheckedImage);
                    }
                    var _id = _this.obj.dialogId + '.' + _this.listBox.listVariableName + '.CHECKBOXALL';
                    var ele = $(_id);
                    ele.innerHTML = h;
                }
            },
            onChange: function () {
                var btns = document.getElementsByClassName("".concat(LIST_NAME, "_BUTTON"));
                for (var i = 0; i < btns.length; i++) {
                    btns[i].parentElement.style.whiteSpace = 'normal';
                }
            }
        };
    };
    DynamicList.prototype.buildColumnDefn = function (mapping) {
        var _a, _b, _c;
        var template = mapping.columnName;
        switch (mapping.editType) {
            case 'time':
                template += ":date(\"".concat(objTimeFormat(), "\")");
                break;
            case 'datetime':
                template += ":date(\"".concat(objDatetimeFormat(), "\")");
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
                template: "<span id=\"".concat(this.obj.dialogId, ".").concat(LIST_NAME, ".").concat(mapping.columnName, ".I.{*dataRow}\"> ").concat(template, " </span>")
            },
            width: (_c = mapping.width) !== null && _c !== void 0 ? _c : 'flex(1)',
            resize: false,
            order: mapping.columnName,
        };
    };
    DynamicList.prototype.buildColumnButton = function (button, btnNumber, items) {
        var _this = this;
        if (!button.title)
            button.title = '';
        var innerTemplate = button.title + '&nbsp';
        if (button.icon && button.icon != '') {
            innerTemplate += "{@A5.u.icon.html(<escape<'".concat(button.icon, "'>>)}");
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
                    template: "\n\t\t\t\t\t\t<div style=\"display:inline-block\" id=\"".concat(this.obj.dialogId, ".").concat(LIST_NAME, ".MENU.").concat(btnNumber, ".{*dataRow}\" title=\"\" a5-item=\"_MENU_onClick_").concat(btnNumber, "\" class=\"").concat(LIST_NAME, "_BUTTON\">\n\t\t\t\t\t\t\t").concat(innerTemplate, "\n\t\t\t\t\t\t</div>&nbsp;\n\t\t\t\t\t")
                }
            };
        }
        var tmpThis = this;
        items["_systemButtononClick_".concat(btnNumber)] = {
            'selectable': true,
            onClick: function (idx, v, args) {
                var data = _this.listBox._data[_this.listBox._dataMap[idx]];
                if ('function' in button.onClick) {
                    (function (rowNumber, value, ia, data, lObj, listObj) {
                        stringReprToFn(button.onClick.function)(tmpThis);
                    }(idx, v, args, data, _this.listBox, _this.listBox));
                }
                else {
                    _this.obj.runAction(button.onClick.action);
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
                template: "\n\t\t\t\t\t<span class = \"".concat(LIST_NAME, "_BUTTON\" id=\"").concat(this.obj.dialogId, ".").concat(LIST_NAME, ".").concat(btnNumber, ".I.{*dataRow}\">\n\t\t\t\t\t\t<button\n\t\t\t\t\t\t\ta5-item = \"_systemButtononClick_").concat(btnNumber, "\"\n\t\t\t\t\t\t\tclass=\"button\"\n\t\t\t\t\t\t\tstyle=\"cursor:pointer;\"\n\t\t\t\t\t\t\ttitle=\"").concat(button.title, "\"\n\t\t\t\t\t\t\tid=\"").concat(this.obj.dialogId, ".").concat(LIST_NAME, ".BTN.{*dataRow}\"\n\t\t\t\t\t\t>").concat(innerTemplate, "</button>\n\t\t\t\t\t</span>\n\t\t\t\t")
            },
            order: false,
            width: 'flex(1)',
        };
    };
    DynamicList.prototype.makeMenuSetting = function (button, index, menuSettings, items) {
        var _this = this;
        if (!button.children)
            return;
        var makeMenuData = function (button) {
            var _a;
            var children = [];
            if (button.children) {
                button.children.forEach(function (c) { return children.push(makeMenuData(c)); });
            }
            return {
                html: (_a = button.title) !== null && _a !== void 0 ? _a : null,
                icon: '',
                onClick: function () {
                    if ('function' in button.onClick) {
                        stringReprToFn(button.onClick.function)(_this);
                    }
                    else {
                        _this.obj.runAction(button.onClick.action);
                    }
                },
            };
        };
        var menuData = [];
        button.children.forEach(function (c) { return menuData.push(makeMenuData(c)); });
        var type = (button.icon && button.icon != '') ? 'Image' : 'Text';
        menuSettings[index] = {
            type: type,
            imageClosed: 'svgIcon=#alpha-icon-bars:icon,24',
            image_rotate: type == 'Image',
            image_rotate_duration: 300,
            imageOpen: 'svgIcon=#alpha-icon-xLarge:icon,24',
            menuType: 'Cascading',
            menuData: menuData,
            menuSettings: {
                listName: "".concat(LIST_NAME),
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
                onHide: function () {
                    var lObj = _this.listBox;
                    if (lObj._menuName != '') {
                        var obj_1 = lObj._menuSettings[lObj._menuName];
                        var rowNumber_1 = obj_1.existingRowNumber;
                        if (lObj.onMenuClose)
                            lObj.onMenuClose(lObj._menuName, rowNumber_1, lObj);
                        var idIcon = _this.obj.dialogId + '.' + lObj.listVariableName + '.MENU.' + lObj._menuName + '.' + rowNumber_1;
                        var ele = $(idIcon);
                        obj_1.isOpen = false;
                        obj_1.closingRowNumber = rowNumber_1;
                        setTimeout(function () { if (obj_1.closingRowNumber == rowNumber_1)
                            obj_1.closingRowNumber = -1; }, 600);
                        var duration = obj_1.image_rotate_duration;
                        if (typeof duration == 'undefined')
                            duration = 600;
                        obj_1.existingRowNumber = -1;
                        lObj._menuName = '';
                        if (obj_1.image_rotate)
                            lObj.__list_menu_rotate(ele, 90, 0, obj_1.imageClosed, duration);
                    }
                }
            }
        };
        items["_MENU_onClick_".concat(index)] = {
            'selectable': true,
            onClick: function (idx, v, args) {
                var data = _this.listBox._data[_this.listBox._dataMap[idx]];
                (function (rowNumber, value, ia, data, lObj, listObj) {
                    lObj.__list_menu_show(index.toString(), rowNumber);
                }(idx, v, args, data, _this.listBox, _this.listBox));
            }
        };
    };
    DynamicList.prototype.buildListFieldDefn = function (mapping) {
        var defn = {
            name: mapping.columnName,
            defaultValue: "return this._controlDefaultValueForListField('".concat(mapping.columnName, "');"),
            onDetailViewPopulate: '',
            onListUpdate: '',
        };
        var onDvPopTemplate = function (format) {
            return "\n\t\t\t\tif(this._value == '') return '';\n\t\t\t\tif(this._value == null) return '';\n\t\t\t\t\n\t\t\t\tlet formatIn = ".concat(mapping.serverDateFormat, ";\n\t\t\t\tlet formatOut = format;\n\t\t\t\tlet _d = A5.stringToDate(this._value,formatIn);\n\t\t\t\tlet _ds = _d.toFormat(formatOut);\n\t\t\t\t\n\t\t\t\treturn _ds;\n\t\t\t\t\n\t\t\t");
        };
        var onListUpdateTemplate = function (format) {
            return "\n\t\t\t\tif(this._value == '') \n\t\t\t\t\treturn '';\n\t\t\t\t\t\n\t\t\t\tif(this._value == null) \n\t\t\t\t\treturn '';\n\t\t\t\t\t\n\t\t\t\tlet formatIn = ".concat(mapping.serverDateFormat, ";\n\t\t\t\tlet formatOut = format;\n\t\t\t\tlet _d = A5.stringToDate(this._value,formatIn);\n\t\t\t\tlet _ds = _d.toFormat(formatOut);\n\t\t\t\t\n\t\t\t\treturn _ds;\n\t\t\t");
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
    };
    DynamicList.prototype.buildDetailViewForm = function (rowNum) {
        var _a;
        var _d = {};
        if (rowNum != undefined) {
            _d = jQuery.extend({}, this.listBox._data[this.listBox._dataMap[rowNum]]);
        }
        else {
            this.config.mappings.forEach(function (mapping) {
                if (mapping.inDetailView) {
                    _d[mapping.columnName] = "";
                }
            });
        }
        for (var _i = 0, _b = this.config.mappings; _i < _b.length; _i++) {
            var mapping = _b[_i];
            var val = _d[mapping.columnName];
            switch (mapping.editType) {
                case "time":
                case "datetime":
                    if (val instanceof Date)
                        val = val.toFormat(objDatetimeFormat());
                    _d[mapping.columnName] = val;
                    break;
            }
        }
        var d = JSON.parse(JSON.stringify(_d));
        delete d['*key'];
        delete d['*renderIndex'];
        delete d['*value'];
        var json = JSON.stringify(d);
        var fb = new FormBuilder(this.obj, DETAIL_FORM_NAME);
        var _loop_1 = function (mapping) {
            if (mapping.inDetailView) {
                var input = (new FormInput())
                    .withLabel((_a = mapping.displayName) !== null && _a !== void 0 ? _a : mapping.columnName)
                    .withStyle('width: 100%')
                    .withVariable(mapping.columnName);
                if (!mapping.editType)
                    mapping.editType = 'text';
                switch (mapping.editType) {
                    case 'text':
                    case 'number': break;
                    case 'dropdown':
                        if (mapping.dropdownConfig === undefined)
                            break;
                        // Static dropdown list
                        if ('choices' in mapping.dropdownConfig) {
                            input = input.asDropdown(mapping.dropdownConfig.choices);
                        }
                        else if ('fromColumn' in mapping.dropdownConfig) {
                            var set_1 = new Set();
                            this_1.listBox._data.forEach(function (d) {
                                if (mapping.dropdownConfig === undefined)
                                    return;
                                if (!('fromColumn' in mapping.dropdownConfig))
                                    return;
                                set_1.add(d[mapping.dropdownConfig.fromColumn].toString());
                            });
                            input = input.asDropdown(Array.from(set_1));
                        }
                        break;
                    case 'time':
                        input = input.asTime("hh:mm AM");
                        break;
                    case 'datetime':
                        input = input.asDateTime(objDatetimeFormat());
                        break;
                    case 'bool':
                        input = input.asBool();
                        break;
                }
                fb.withElement(input);
            }
        };
        var this_1 = this;
        for (var _c = 0, _e = this.config.mappings; _c < _e.length; _c++) {
            var mapping = _e[_c];
            _loop_1(mapping);
        }
        fb.withElement(makeDetailButtons());
        fb.render();
        this.obj.setValue(DETAIL_FORM_NAME, json);
    };
    DynamicList.prototype.setFilterAndFetch = function (filters) {
        this.searchFilters = filters;
        this.reRender();
    };
    DynamicList.prototype.makeFilterFromSelected = function (colName, foreignColName) {
        var thisVal = '';
        if (this.listBox.selectionData.length > 0) {
            thisVal = this.listBox.selectionData[0][colName];
        }
        return [{
                columnName: foreignColName,
                columnVal: { tag: "value", value: thisVal.toString() },
                connector: 'AND',
                op: '='
            }];
    };
    DynamicList.prototype.fetchData = function () {
        var _this = this;
        if (this.config.dataSource.type == 'sql' && 'table' in this.config.dataSource) {
            var columns_1 = [];
            this.config.mappings.forEach(function (c) {
                columns_1.push(c.columnName);
            });
            var filters_1 = JSON.stringify(__spreadArray(__spreadArray([], this.permanentFilters, true), this.searchFilters, true));
            var paginate_1 = '';
            if (this.config.searchOptions.paginate) {
                paginate_1 = "&pageOptions=" + encodeURIComponent("{pageSize: ".concat(this.config.searchOptions.paginate.pageSize, ", getPage: ").concat(this.listBox._state.page, "}"));
            }
            return new Promise(function (resolve, reject) {
                _this.obj.ajaxCallback("", "", "getAllDataForTable", "", "configName=" + encodeURIComponent(_this.config.name)
                    + "&filters=" + encodeURIComponent(filters_1)
                    + paginate_1, {
                    onComplete: function () {
                        var response = _this.obj.stateInfo.apiResult;
                        if ("err" in response) {
                            reject(new Error(response.err));
                        }
                        _this.data = _this.obj.stateInfo.apiResult.ok;
                        _this.rawData = _this.obj.stateInfo.apiResult.ok;
                        var pageSize = (_this.config.searchOptions.paginate ? _this.config.searchOptions.paginate.pageSize : response.count);
                        _this.listBox._state = {
                            pageSize: pageSize,
                            page: _this.listBox._state.page,
                            pageCount: Math.ceil(response.count / pageSize),
                            recordCount: response.count,
                        };
                        if (_this.data === undefined) {
                            console.error("Error fetching data, defaulting to empty.");
                            _this.data = [];
                            _this.rawData = [];
                        }
                        _this.dataScopeManager.setPathFromConfig(_this.config, _this.data);
                        _this.data = _this.dataScopeManager.flattenData(_this.data);
                        resolve(_this);
                    }
                });
            });
        }
        else if (this.config.dataSource.type == 'sql') {
            var paginate_2 = '';
            if (this.config.searchOptions.paginate) {
                paginate_2 = "&pageOptions=" + encodeURIComponent("{pageSize: ".concat(this.config.searchOptions.paginate.pageSize, ", getPage: ").concat(this.listBox._state.page, "}"));
            }
            var filters_2 = JSON.stringify(__spreadArray(__spreadArray([], this.permanentFilters, true), this.searchFilters, true));
            return new Promise(function (resolve, reject) {
                _this.obj.ajaxCallback("", "", "getAllDataForTable", "", "configName=" + encodeURIComponent(_this.config.name)
                    + "&filters=" + encodeURIComponent(filters_2)
                    + paginate_2, {
                    onComplete: function () {
                        var response = _this.obj.stateInfo.apiResult;
                        if ("err" in response) {
                            reject(new Error(response.err));
                        }
                        _this.data = _this.obj.stateInfo.apiResult.ok;
                        _this.rawData = _this.obj.stateInfo.apiResult.ok;
                        var pageSize = (_this.config.searchOptions.paginate ? _this.config.searchOptions.paginate.pageSize : response.count);
                        _this.listBox._state = {
                            pageSize: pageSize,
                            page: _this.listBox._state.page,
                            pageCount: Math.ceil(response.count / pageSize),
                            recordCount: response.count,
                        };
                        if (_this.data === undefined) {
                            console.error("Error fetching data, defaulting to empty.");
                            _this.data = [];
                            _this.rawData = [];
                        }
                        _this.dataScopeManager.setPathFromConfig(_this.config, _this.data);
                        _this.data = _this.dataScopeManager.flattenData(_this.data);
                        resolve(_this);
                    }
                });
            });
        }
        else if (this.config.dataSource.type == 'json' && 'static' in this.config.dataSource) {
            this.data = jQuery.extend(true, [], this.config.dataSource.static);
            if (this.config.dataSource.preprocess)
                this.data = stringReprToFn(this.config.dataSource.preprocess)(this.data);
            this.rawData = this.data;
            this.dataScopeManager.setPathFromConfig(this.config, this.data);
            this.data = this.dataScopeManager.flattenData(this.data);
            return Promise.resolve(this);
        }
        else if (this.config.dataSource.type == 'json' && this.config.dataSource.endpoints) {
            var endpoint = void 0;
            var url = void 0;
            if (this.permanentFilters.length == 0 && this.searchFilters.length == 0) {
                endpoint = this.config.dataSource.endpoints.fetch;
            }
            else {
                endpoint = this.config.dataSource.endpoints.search;
            }
            var options = this.getFetchOptions(endpoint);
            var data = this.filtersAsSimpleObj();
            url = encodeURI(this.populateUrlParams(endpoint.endpoint, data));
            return fetch(this.obj, url, options)
                .then(function (json) {
                var data = JSON.parse(json.body);
                if (_this.config.dataSource.preprocess)
                    data = stringReprToFn(_this.config.dataSource.preprocess)(data);
                _this.data = data;
                _this.rawData = _this.data;
                _this.dataScopeManager.setPathFromConfig(_this.config, _this.data);
                _this.data = _this.dataScopeManager.flattenData(_this.data);
                return _this;
            });
        }
        else {
            throw new Error("Unhandled datasource " + JSON.stringify(this.config.dataSource));
        }
    };
    DynamicList.prototype.getFetchOptions = function (endpoint, dataOverride) {
        var data = dataOverride ? dataOverride : this.filtersAsSimpleObj();
        var method = this.populateUrlParams({ template: endpoint.method }, data);
        var headers = {};
        var body = {};
        for (var header in endpoint.headers) {
            headers[header] = this.populateUrlParams({ template: endpoint.headers[header] }, data);
        }
        for (var item in endpoint.body) {
            body[item] = this.populateUrlParams(endpoint.body[item], data);
        }
        return {
            method: method,
            headers: headers,
            body: method == 'GET' ? undefined : JSON.stringify(body)
        };
    };
    DynamicList.prototype.filtersAsSimpleObj = function () {
        var data = {};
        for (var _i = 0, _a = __spreadArray(__spreadArray([], this.permanentFilters, true), this.searchFilters, true); _i < _a.length; _i++) {
            var item = _a[_i];
            data[item.columnName] = item.columnVal;
        }
        return data;
    };
    DynamicList.prototype.populateUrlParams = function (url, data) {
        /* Filters like
            columnName: string,
            columnVal: any,
            connector: 'AND' | 'OR',
            op: string (like '+', 'LIKE', '/', etc),
            type: string ('text', 'number', etc),
        */
        if ('getEndpointURL' in url) {
            return stringReprToFn(url.getEndpointURL)(__spreadArray(__spreadArray([], this.permanentFilters, true), this.searchFilters, true));
        }
        if (typeof url.template != 'string')
            return "";
        // Capture text contained within {...}. Ignore if \ precedes {.
        var parts = url.template.split(/([^\\]|^)({[^}]*})/);
        var final = "";
        parts.forEach(function (part) {
            if (part.length == 0)
                return;
            if (part[0] != '{') {
                final += part;
                return;
            }
            part = part.substring(1, part.length - 1);
            // Capture words starting with $. Ignore if \ precedes the $.
            var vars = part.split(/(?:[^\\]|^)(\$\w+)/);
            var evalStr = '';
            vars.forEach(function (v) {
                if (v.length == 0)
                    return;
                if (v[0] != '$') {
                    evalStr += v;
                    return;
                }
                var varname = v.substring(1);
                if (varname in data) {
                    evalStr += '"' + data[varname].toString() + '"';
                }
                else {
                    evalStr += '""';
                }
            });
            final += eval(evalStr);
        });
        return final;
    };
    DynamicList.prototype.addOnRenderCallback = function (f) {
        if (this.listBox != null)
            f();
        this.onRender.push(f);
    };
    DynamicList.prototype.updateRecordCount = function () {
        var count = document.getElementById(this.obj.dialogId + "_RECORD_COUNT");
        if (count) {
            count.innerHTML = "Records: " + this.listBox._rData.length;
        }
    };
    DynamicList.prototype.populateListBox = function () {
        this.listBox.populate(this.data);
        this.listBox._refreshStateMessages();
        for (var _i = 0, _a = this.onRender; _i < _a.length; _i++) {
            var f = _a[_i];
            f();
        }
        this.listBox.refresh();
        this.listBox.resize();
        this.updateRecordCount();
    };
    DynamicList.prototype.buildList = function () {
        var _this = this;
        this.listBox = new A5.ListBox(this.obj.getPointer('LIST_CONTAINER').id, [], this.settings);
        this.listBox._hostComponentId = this.obj.dialogId;
        this.listBox._listSystemOnClickPopulateJSONForm = function (rowNum) { return _this.buildDetailViewForm(rowNum); };
        window[this.obj.dialogId + '.V.R1.' + this.listBox.listVariableName + 'Obj'] = this.listBox;
        setFormDetailView(this.obj, this.listBox);
    };
    DynamicList.prototype.fetchSchema = function () {
        var _this = this;
        this.schema = {};
        var buildSchemaFromData = function (data) {
            var buildFromInstance = function (instance) {
                if (typeof instance != 'object')
                    return {};
                var schema = {};
                var _loop_2 = function (key) {
                    if (instance[key] instanceof Array) {
                        schema[key] = { array: {} };
                        var item_2 = schema[key];
                        if (!('array' in item_2))
                            return "break";
                        instance[key].forEach(function (i, idx) {
                            if (!('array' in item_2))
                                return;
                            if (typeof i != 'object') {
                                item_2.array[idx] = { alphaType: jsTypeToAlphaType(typeof i) };
                            }
                            else {
                                Object.assign(item_2.array, buildFromInstance(i));
                            }
                        });
                    }
                    else if (typeof instance[key] == 'object') {
                        schema[key] = { nested: buildFromInstance(instance[key]) };
                    }
                    else {
                        schema[key] = { alphaType: jsTypeToAlphaType(typeof instance[key]) };
                    }
                };
                for (var key in instance) {
                    var state_1 = _loop_2(key);
                    if (state_1 === "break")
                        break;
                }
                return schema;
            };
            data.forEach(function (d) { return Object.assign(_this.schema, buildFromInstance(d)); });
        };
        if (this.config.dataSource.type == 'sql' && 'table' in this.config.dataSource) {
            return getSchema(this.obj, this.config.dataSource.table).then(function () {
                var sqlSchema = _this.obj.stateInfo.schema.jsonOutput.column;
                sqlSchema.forEach(function (item) { return _this.schema[item.name] = { alphaType: item.alphaType }; });
                return _this;
            });
        }
        else if (this.config.dataSource.type == 'sql') {
            var filters_3 = JSON.stringify(__spreadArray(__spreadArray([], this.permanentFilters, true), this.searchFilters, true));
            return new Promise(function (resolve, reject) {
                return _this.obj.ajaxCallback("", "", "getAllDataForTable", "", "configName=" + encodeURIComponent(_this.config.name)
                    + "&filters=" + encodeURIComponent(filters_3), {
                    onComplete: function () {
                        var response = _this.obj.stateInfo.apiResult;
                        if ("err" in response) {
                            reject(new Error(response.err));
                        }
                        var data = _this.obj.stateInfo.apiResult.ok;
                        if (_this.data === undefined) {
                            console.error("Error fetching data, defaulting to empty.");
                            data = [];
                        }
                        if (_this.config.dataSource.preprocess) {
                            data = stringReprToFn(_this.config.dataSource.preprocess)(data);
                        }
                        buildSchemaFromData(data);
                        resolve(_this);
                    }
                });
            });
        }
        else if (this.config.dataSource.type == 'json' && 'static' in this.config.dataSource) {
            var staticData = this.config.dataSource.static;
            var preprocess = this.config.dataSource.preprocess;
            if (preprocess)
                staticData = stringReprToFn(preprocess)(staticData);
            buildSchemaFromData(staticData);
            return Promise.resolve(this);
        }
        else if (this.config.dataSource.type == 'json' && 'endpoints' in this.config.dataSource) {
            var data = this.filtersAsSimpleObj();
            var url = this.populateUrlParams(this.config.dataSource.endpoints.fetch.endpoint, data);
            var options = this.getFetchOptions(this.config.dataSource.endpoints.fetch);
            return fetch(this.obj, url, options)
                .then(function (res) {
                var data = JSON.parse(res.body);
                var preprocess = _this.config.dataSource.preprocess;
                if (preprocess)
                    data = stringReprToFn(preprocess)(data);
                buildSchemaFromData(data);
                return _this;
            });
        }
        else {
            return Promise.resolve(this);
        }
    };
    return DynamicList;
}());
var DataScopeManager = /** @class */ (function () {
    function DataScopeManager(schema) {
        this.schema = schema;
        this.path = [];
        this.expandedIdxToRawIdx = {};
    }
    DataScopeManager.prototype.setPathFromConfig = function (config, data) {
        this.path = [];
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var dataPoint = data_1[_i];
            for (var _a = 0, _b = config.mappings; _a < _b.length; _a++) {
                var mapping = _b[_a];
                var path = mapping.columnName.split(SEPARATOR);
                if (path.length > 1 && path[0] == SEPARATOR) {
                    path[1] = SEPARATOR + path[1];
                    path = path.slice(1);
                }
                var tmp = dataPoint;
                for (var i = 0; i < path.length; i++) {
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
    };
    DataScopeManager.prototype.strToPath = function (str) {
        return str.split(SEPARATOR);
    };
    DataScopeManager.prototype.getOriginalIndex = function (n) {
        return this.expandedIdxToRawIdx[n];
    };
    DataScopeManager.prototype.flattenData = function (data) {
        this.expandedIdxToRawIdx = {};
        var newData = [];
        // Given path part n, datapoint d
        // Flatten data around d, ignoring any arrays
        // Enter array n, if it exists
        // Repeat for part n + 1, datapoint d[n]
        for (var i = 0; i < data.length; i++) {
            var dataPoint = data[i];
            var newItems = this.flattenDataPoint(dataPoint, this.schema, this.path, "");
            var startIdx = newData.length;
            var endIdx = startIdx + newItems.length;
            for (var j = startIdx; j < endIdx; j++) {
                this.expandedIdxToRawIdx[j] = i;
            }
            newData.push.apply(newData, newItems);
        }
        return newData;
    };
    DataScopeManager.prototype.getAvailableDataColumns = function () {
        return this._getAvailableDataColumns(this.schema, '', this.path);
    };
    DataScopeManager.prototype.getExpandableColumns = function () {
        return this._getExpandableColumns(this.schema, "", this.path);
    };
    DataScopeManager.prototype.setPath = function (path) {
        this.path = path;
    };
    DataScopeManager.prototype.inSubArray = function (path) {
        var part = this.schema;
        for (var i = 0; i < path.length; i++) {
            var tmp = part[path[i]];
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
    };
    DataScopeManager.prototype._getAvailableDataColumns = function (schema, prefix, path) {
        var result = [];
        for (var key in schema) {
            var part = schema[key];
            if ('alphaType' in part)
                result.push(prefix + key);
            else if ('nested' in part)
                result.push.apply(result, this._getAvailableDataColumns(part.nested, prefix + key + SEPARATOR, path));
            else if ('array' in part && path.length > 0 && path[0] == key)
                result.push.apply(result, this._getAvailableDataColumns(part.array, prefix + key + SEPARATOR, path.slice(1)));
        }
        return result;
    };
    DataScopeManager.prototype._getExpandableColumns = function (schema, prefix, path) {
        var result = [];
        for (var key in schema) {
            var part = schema[key];
            if ('alphaType' in part)
                continue;
            else if ('nested' in part)
                result.push.apply(result, this._getExpandableColumns(part.nested, prefix + key + SEPARATOR, path));
            else if ('array' in part && path.length > 0 && path[0] == key)
                result.push.apply(result, this._getExpandableColumns(part.array, prefix + key + SEPARATOR, path.slice(1)));
            else if ('array' in part)
                result.push(prefix + key);
        }
        return result;
    };
    DataScopeManager.prototype.flattenDataPoint = function (point, schema, path, prefix) {
        var final = [];
        var flattenIgnoreArray = function (point, schema, prefix) {
            var result = {};
            for (var key in schema) {
                var part = schema[key];
                if (!(typeof point == "object") && 'alphaType' in part)
                    result[prefix + key] = point;
                else if (!(key in point))
                    continue;
                else if ('array' in part)
                    continue;
                else if ('alphaType' in part)
                    result[prefix + key] = point[key];
                else if ('nested' in part)
                    Object.assign(result, flattenIgnoreArray(point[key], part.nested, prefix + key + SEPARATOR));
            }
            return result;
        };
        var root = flattenIgnoreArray(point, schema, prefix);
        if (path.length == 0)
            return [root];
        for (var key in schema) {
            var part = schema[key];
            if (!(key in point))
                continue;
            else if ('array' in part && path.length > 0 && path[0] == key) {
                var subData = [];
                for (var _i = 0, _a = point[key]; _i < _a.length; _i++) {
                    var dataPoint = _a[_i];
                    subData.push.apply(subData, this.flattenDataPoint(dataPoint, part.array, path.slice(1), prefix + key + SEPARATOR));
                }
                subData.forEach(function (x) { return Object.assign(x, root); });
                final.push.apply(final, subData);
            }
        }
        return final;
    };
    return DataScopeManager;
}());
function setFormDetailView(obj, listBox) {
    obj.getControl(DETAIL_FORM_NAME)._listDetailView = function (mode) {
        var listName = LIST_NAME;
        var lObj = obj.getControl(listName);
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
                var _d = lObj.selectionData[0];
                var d = JSON.parse(JSON.stringify(_d));
                delete d['*key'];
                delete d['*renderIndex'];
                delete d['*value'];
                var json = JSON.stringify(d);
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
    var btnTemplate = (new FormButton())
        .withLayout('icon text')
        .withBtnStyle('white-space:nowrap;');
    btnTemplate._listName = LIST_NAME;
    var copyTemplate = function () {
        var y = new FormButton();
        Object.assign(y, btnTemplate);
        return y;
    };
    return (new FormGroup())
        .withChildren([
        copyTemplate()
            .withHtml('Save')
            .withIcon('svgIcon=#alpha-icon-save:icon iconButton')
            .withCheckDisabled({
            "*a5type": "function",
            "*data": "function (d) { return this._saveButtonIsDisabled() }"
        })
            .withClickHandler({
            '*a5type': 'function',
            '*data': 'function() { this._listDetailView("save") '
        }),
        copyTemplate()
            .withHtml('New Record')
            .withIcon('svgIcon=#alpha-icon-docAdd:icon iconButton')
            .withCheckDisabled({
            "*a5type": "function",
            "*data": "function (d) { return this._newRecordButtonIsDisabled() }"
        })
            .withClickHandler({
            "*a5type": "function",
            "*data": "function () { this._listDetailView('newrecord') }"
        }),
        copyTemplate()
            .withHtml('Delete Record')
            .withIcon('svgIcon=#alpha-icon-removeCircle:icon iconButton')
            .withCheckDisabled({
            "*a5type": "function",
            "*data": "function (d) { return this._deleteRecordButtonIsDisabled() }"
        })
            .withClickHandler({
            "*a5type": "function",
            "*data": "function () { this._listDetailView('deleterecord')}"
        }),
        copyTemplate()
            .withHtml('Reset')
            .withIcon('svgIcon=#alpha-icon-undo:icon iconButton')
            .withCheckDisabled({
            "*a5type": "function",
            "*data": "function (d) { return this._resetRecordButtonIsDisabled() }"
        })
            .withClickHandler({
            "*a5type": "function",
            "*data": "function () { this._listDetailView('reset') }"
        }),
    ]);
}
var DynamicListSearch = /** @class */ (function () {
    function DynamicListSearch(dynamicList, obj) {
        this.list = dynamicList;
        this.obj = obj;
        this.form = new FormBuilder(this.obj, "SearchForm");
        this.advForm = obj.getControl('AdvancedSearch');
        this.dynamicDropdowns = [];
        this.advForm.data.fields = {};
        this.buildForms();
        this.form.render();
    }
    DynamicListSearch.prototype.findInSchema = function (path, schema) {
        var result = schema;
        for (var _i = 0, path_1 = path; _i < path_1.length; _i++) {
            var item = path_1[_i];
            var part = result[item];
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
    };
    DynamicListSearch.prototype.buildForms = function () {
        var _this = this;
        if (this.list.config.searchOptions.advancedSearch) {
            this.obj.setControlDisplay('SEARCHFORM' + '', false, 'display');
            this.obj.setControlDisplay('ADVANCEDSEARCH' + '', true, 'display');
        }
        else {
            this.obj.setControlDisplay('SEARCHFORM' + '', true, 'display');
            this.obj.setControlDisplay('ADVANCEDSEARCH' + '', false, 'display');
        }
        document.getElementById(this.obj.dialogId + ".V.R1.IMAGE_1").style.display = "none";
        var allSearchCols = this.list.dataScopeManager.getAvailableDataColumns();
        var getPreferredColumnOptions = function (colName) {
            var col = { name: '', editType: 'text' };
            var schemaEntry = _this.findInSchema(colName.split(SEPARATOR), _this.list.schema);
            if (schemaEntry && "alphaType" in schemaEntry) {
                col.name = colName;
                col.editType = alphaTypeToEditType(schemaEntry.alphaType);
            }
            _this.list.config.mappings.forEach(function (m) {
                var _a, _b;
                if (m.columnName == colName) {
                    col.name = (_a = m.displayName) !== null && _a !== void 0 ? _a : m.columnName;
                    col.editType = (_b = m.editType) !== null && _b !== void 0 ? _b : col.editType;
                }
            });
            return col;
        };
        for (var _i = 0, allSearchCols_1 = allSearchCols; _i < allSearchCols_1.length; _i++) {
            var colName = allSearchCols_1[_i];
            var include = this.list.config.searchOptions.onlyInclude;
            var exclude = this.list.config.searchOptions.onlyExclude;
            var shouldInclude = true;
            if (include)
                shouldInclude = include.includes(colName);
            else if (exclude)
                shouldInclude = !exclude.includes(colName);
            if (shouldInclude) {
                var preferred = getPreferredColumnOptions(colName);
                var element = (new FormInput())
                    .withLabel(preferred.name)
                    .withVariable(colName)
                    .withStyle('width: 100%');
                var advancedControl = {
                    type: 'default',
                    format: '',
                    data: [],
                    quantifier: this.list.dataScopeManager.inSubArray(colName.split(SEPARATOR))
                };
                var editType = preferred.editType;
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
                        var dropdownConfig = void 0;
                        for (var _a = 0, _b = this.list.config.mappings; _a < _b.length; _a++) {
                            var mapping = _b[_a];
                            if (mapping.columnName == colName) {
                                dropdownConfig = mapping.dropdownConfig;
                                break;
                            }
                        }
                        var choices = [];
                        if (dropdownConfig && 'choices' in dropdownConfig) {
                            choices = dropdownConfig.choices;
                        }
                        if (dropdownConfig && 'fromColumn' in dropdownConfig) {
                            this.dynamicDropdowns.push({ isAdvanced: false, elem: element, col: dropdownConfig.fromColumn });
                            this.dynamicDropdowns.push({ isAdvanced: true, elem: advancedControl, col: dropdownConfig.fromColumn });
                            choices = ['...'];
                        }
                        element = element.asDropdown(choices);
                        advancedControl.data = choices.map(function (x) { return { html: x, value: x }; });
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
        this.advForm.items.clearSearch.onClick = function () {
            _this.list.listBox.clearSearchList();
            var len = _this.advForm.data._parsed.length;
            for (var i = 0; i < len; i++) {
                _this.advForm.items.remove.onClick.bind(_this.advForm)(i.toString());
            }
        };
        this.advForm.items.filter.onClick = function (v, ia, i, ele, event) {
            if (_this.advForm._picker) {
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
                var f = _this.advForm.data._parsed[v].field;
                var type = _this.advForm.data.fields[f].control.type;
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
                _this.advForm._picker.layout = 'list';
                _this.advForm._picker.populate(_filterMenu);
                _this.advForm._picker.setValue(_this.advForm.data._parsed[v].op || '');
                _this.advForm.showPicker(ele, 'filter', v);
            }
        };
        this.advForm.items.runQuery.onClick = function () {
            var query = _this.advForm.value;
            var obj = {
                advancedSearchControl: '',
                queryData: [],
            };
            obj.advancedSearchControl = 'AdvancedSearch';
            obj.queryData = JSON.parse(query[0]);
            var getEditType = function (col) {
                var _a;
                var type;
                for (var _i = 0, allSearchCols_2 = allSearchCols; _i < allSearchCols_2.length; _i++) {
                    var column = allSearchCols_2[_i];
                    var item = _this.findInSchema(column.split(SEPARATOR), _this.list.schema);
                    if (item && column == col && 'alphaType' in item) {
                        type = alphaTypeToEditType(item.alphaType);
                        break;
                    }
                }
                for (var _b = 0, _c = _this.list.config.mappings; _b < _c.length; _b++) {
                    var mapping = _c[_b];
                    if (mapping.columnName == col) {
                        return (_a = mapping.editType) !== null && _a !== void 0 ? _a : 'text';
                    }
                }
                return type;
            };
            obj.queryData.forEach(function (e) {
                var _a;
                var editType = (_a = getEditType(e.field)) !== null && _a !== void 0 ? _a : '';
                var d = new Date();
                if (['datetime', 'time'].includes(editType)) {
                    if (e.value == 'Today')
                        d.adjust('day', 0);
                    else if (e.value == 'Yesterday')
                        d.adjust('day', -1);
                    else if (e.value == 'Tomorrow')
                        d.adjust('day', 1);
                    else {
                        var fmt = void 0;
                        if (editType == 'datetime')
                            fmt = objDatetimeFormat();
                        if (editType == 'time')
                            fmt = objTimeFormat();
                        d.fromFormat(e.value, fmt);
                    }
                    e.value = d;
                }
                var alphaType = editTypeToAlphaType(editType);
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
            _this.list.listBox.searchList(obj);
        };
        this.form.withElement((new FormButton())
            .withHtml("Search")
            .withClickHandler(function () {
            _this.list.listBox.searchList({ searchMode: 'auto' });
        }));
        this.form.withElement((new FormButton())
            .withHtml("Clear")
            .withClickHandler(function () {
            _this.list.listBox.clearSearchList({ searchMode: 'auto' });
        }));
        this.list.addOnRenderCallback(function () {
            _this.setListSearchFns();
            _this.dynamicDropdowns.forEach(function (element) {
                var set = new Set();
                _this.list.listBox._data.forEach(function (d) {
                    set.add(d[element.col].toString());
                });
                if (element.isAdvanced)
                    element.elem.data = (Array.from(set)).map(function (x) { return { html: x, value: x }; });
                else
                    element.elem = element.elem.asDropdown(Array.from(set));
                _this.advForm.onBeforePopulate(_this.advForm.data);
                _this.advForm.refresh();
            });
        });
    };
    DynamicListSearch.prototype.modifyAdvFormTemplate = function () {
        var template = this.advForm.layouts.Default.template;
        var onBtnClick = function (v, ia) {
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
        var newTemplate = "\n            <div style=\"white-space: nowrap;\">\n                {*if [root].fields[field].control.quantifier} \n                    {A5.buttonLists.html(\n                        '".concat(this.obj.dialogId, ".AdvancedSearch.QUANTIFIER' + [count],\n                        <escape<\n                            {\n                                theme: \"").concat(this.advForm.theme, "\",\n                                button: {style: 'width: 60px;' }\n                            },\n                            [\n                                {\n                                    html: 'ALL<div class=\"icon\" style=\"width: 0px; display: inline-block;\">&nbsp;</div>',\n                                    value: '.all.'\n                                },\n                                {\n                                    html: 'SOME<div class=\"icon\" style=\"width: 0px; display: inline-block;\">&nbsp;</div>',\n                                    value: '.some.'\n                                },\n                            ],\n                            (() => { try {return quantifier;} catch(_) {return '.all.'}})(),\n                            'a5-item=\"quantifier:' + [count] + '\" a5-value=\"{value}\" id=\"").concat(this.obj.dialogId, ".AdvancedSearch.QUANTIFIER' + [count] + '.{index}\"'\n                        >>\n                    )}\n                {*endif}\n            </div>\n        ");
        newTemplate = newTemplate.replace(/(\r\n|\n|\r)/gm, '');
        var templateSplitPoint = template.indexOf("</div>	{/_parsed}");
        template = template.slice(0, templateSplitPoint) + newTemplate + template.slice(templateSplitPoint);
        this.advForm.layouts.Default.template = template;
        this.advForm.layouts.Default._t = undefined;
    };
    DynamicListSearch.prototype.serverOrClientSearch = function (o) {
        var obj = typeof o != 'undefined' ? o : {};
        var mode = 'serverside';
        if (!(this.list.config.searchOptions.serverSearch))
            mode = 'clientside';
        return mode;
    };
    DynamicListSearch.prototype.setListSearchFns = function () {
        var _this = this;
        var lObj = this.list.listBox;
        var allSearchCols = this.list.dataScopeManager.getAvailableDataColumns();
        if (lObj.searchList)
            return;
        lObj.searchList = function (x) {
            var _a;
            ((_a = _this.obj.stateInfo.onSearchCallbacks) !== null && _a !== void 0 ? _a : []).forEach(function (f) { return f(_this); });
            var obj = typeof x != 'undefined' ? x : {};
            var mode = _this.serverOrClientSearch(x);
            var flagDirty = false;
            if (lObj.listIsDirty)
                flagDirty = lObj.listIsDirty();
            var flagResult = _this.obj._list_executeEvent(lObj.listVariableName, 'beforeSearch', { searchMode: 'search', searchWhere: mode, listIsDirty: flagDirty });
            if (!flagResult)
                return false;
            if (!obj.queryData)
                obj = undefined;
            if (mode == 'serverside') {
                lObj._searchListServerSide(obj);
            }
            else if (mode == 'clientside') {
                lObj._searchPartSubmit_clientSideFilter(obj);
                var rowCount = lObj._rData.length;
                _this.obj._list_executeEvent(lObj.listVariableName, 'afterSearchComplete', { searchMode: 'search', searchWhere: mode, recordsInQuery: rowCount });
            }
            _this.list.updateRecordCount();
        };
        lObj._searchPartSubmit_clientSideFilter = function (searchObj) {
            lObj._state.highlight = {};
            var map = lObj._searchPart.fieldMap;
            var val = '';
            var expn = [];
            var expn_i = '';
            var obj = {};
            var obj_i = {};
            var ac = [];
            var aco = {};
            var _highlight = {};
            var values = [];
            allSearchCols.forEach(function (colName, i) {
                var val;
                if (!searchObj) {
                    val = _this.obj.getValue(map[i].control);
                    if (val != undefined && val != '')
                        values.push({ index: i, item: val, name: colName });
                }
                else {
                    for (var _i = 0, _a = searchObj.queryData; _i < _a.length; _i++) {
                        var e = _a[_i];
                        if (e.columnName == map[i].field)
                            values.push({ index: i, item: e, name: colName });
                    }
                }
            });
            for (var i = 0; i < values.length; i++) {
                var v = values[i];
                var val_1 = void 0;
                if (v.item.columnVal)
                    val_1 = v.item.columnVal;
                else
                    val_1 = v.item;
                obj_i = lObj._searchFieldOptions[v.name];
                lObj._setSearchOps(obj, obj_i);
                var strVal = val_1.toString();
                if (typeof val_1 === 'string')
                    strVal = lObj._str(val_1);
                if (val_1 instanceof Date)
                    strVal = lObj._str(val_1.toFormat(objDatetimeFormat()));
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
                aco.value = val_1;
                ac.push(aco);
            }
            if (expn.length == 0)
                return true;
            if (expn[expn.length - 1] == '||' || expn[expn.length - 1] == '&&')
                expn.pop();
            var expn_str = expn.join('');
            var fnText = 'if (' + expn_str + ') { return true; } else { return false; }';
            var searchFn = new Function('data', fnText);
            lObj.setFilter(searchFn);
        };
        lObj._setSearchOps = function (obj, obj_i) {
            obj.mode = obj_i.option;
            obj.qbf = obj_i.qbf;
            obj.type = obj_i.type;
            obj.dateFormat = obj_i.dateFormat;
        };
        lObj._searchListServerSide = function (searchObj) {
            var flagDirty = false;
            if (lObj.listIsDirty)
                flagDirty = lObj.listIsDirty();
            if (flagDirty) {
                alert('Cannot search because List has edits that have not yet been synced');
                return false;
            }
            var filters = searchObj ? searchObj.queryData : [];
            var map = lObj._searchPart.fieldMap;
            for (var i = 0; i < map.length; i++) {
                var val = _this.obj.getValue(map[i].control);
                if (val != '' && val != undefined) {
                    var ops = lObj._searchFieldOptions[allSearchCols[i]];
                    var columnVal = '';
                    var op = '';
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
            filters.forEach(function (e) {
                if (e.op == '..x..') {
                    e.op = 'LIKE';
                    e.columnVal = { tag: 'value', value: '%' + e.columnVal + '%' };
                }
                if (e.columnVal instanceof Date) {
                    e.columnVal = e.columnVal.toFormat(objDatetimeFormat());
                }
            });
            _this.list.setFilterAndFetch(filters);
        };
        lObj.clearSearchList = function (_obj) {
            var _a;
            ((_a = _this.obj.stateInfo.onClearSearchCallbacks) !== null && _a !== void 0 ? _a : []).forEach(function (f) { return f(_this); });
            var mode = _this.serverOrClientSearch(_obj);
            var flagResult = _this.obj._list_executeEvent(lObj.listVariableName, 'beforeSearch', { searchMode: 'clear', searchWhere: mode });
            if (!flagResult)
                return false;
            lObj.setFilter(false);
            if (mode == 'serverside') {
                lObj._clearSearchListServerSide();
            }
            else if (mode == 'clientside') {
                lObj._searchPartSubmit_clientSideFilterClear();
                var rowCount = lObj._rData.length;
                _this.obj._list_executeEvent(lObj.listVariableName, 'afterSearchComplete', { searchMode: 'clear', searchWhere: mode, recordsInQuery: rowCount });
            }
        };
        lObj._clearSearchListServerSide = function () {
            var map = lObj._searchPart.fieldMap;
            for (var _i = 0, map_1 = map; _i < map_1.length; _i++) {
                var m = map_1[_i];
                _this.obj.setValue(m.control, '', false);
            }
            _this.list.setFilterAndFetch([]);
            _this.obj._setDVClean(lObj);
        };
        lObj._searchPartSubmit_clientSideFilterClear = function () {
            if (!lObj._searchPartHas)
                return true;
            lObj._state.highlight = {};
            lObj.setFilter(false);
            var map = lObj._searchPart.fieldMap;
            for (var i = 0; i < map.length; i++) {
                _this.obj.setValue(map[i].control, '', false);
            }
            lObj.setFilter(false);
            delete lObj.__queryByFormValues;
            _this.obj._setDVClean(lObj);
        };
        lObj._searchPartHas = true;
        lObj._searchPart = {};
        lObj._searchFieldOptions = {};
        lObj._searchPart.fieldMap = [];
        for (var _i = 0, _a = this.list.dataScopeManager.getAvailableDataColumns(); _i < _a.length; _i++) {
            var col = _a[_i];
            var path = col.split(SEPARATOR);
            if (path.length > 1 && path[0] == '') {
                path[1] = SEPARATOR + path[1];
                path = path.slice(1);
            }
            var item = this.findInSchema(path, this.list.schema);
            if (item && 'alphaType' in item) {
                var type = item.alphaType.toLowerCase();
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
    };
    return DynamicListSearch;
}());
