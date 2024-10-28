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
// Take items (should be string representation of JSON) and render form
function renderForm(obj, formName, items) {
    items = items.filter(function (x) { return Boolean(x); });
    obj.setJSONFormItems(formName, items);
    obj.getControl(formName)._formBoxSize = "";
    obj.resizeFormBoxes();
}
// Mapping from ID to boolean so components can look up if they are hidden
var SHOW_HIDE_MAP = {};
// https://stackoverflow.com/questions/105034/how-do-i-create-a-guid-uuid
function uuidv4() {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, function (c) {
        return (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
    });
}
// Helper to make sure arguments are what they should be
function typeCheck(x, type, msg) {
    if (typeof x !== type)
        throw new Error(msg);
    return x;
}
// Class to handle VALUES in the input. Numbers, strings, objects, arrays, etc.
// The options can be of multiple forms. Null for strings, numbers, and functions, 
// an object description for objects, or an Input instance for arrays.
var Value = /** @class */ (function () {
    function Value(type, options) {
        // Dialog object and form name
        this.obj = null;
        this.formName = "";
        this.options = options ? options : { type: 'string' };
        this.id = "INPUT_TYPE_" + uuidv4();
        this.dynamicElems = {};
        this.allArrayElems = {};
        SHOW_HIDE_MAP[this.id] = true;
        // Helper function to make sure object description matches what we expect
        var validateObj = function (o) {
            if (!('staticKeys' in o) || !o.staticKeys) {
                throw new Error("Expected input object to have field 'staticKeys'");
            }
            if (o.dynamicKeys) {
                if (!(o.dynamicKeys instanceof Input))
                    throw new Error("Expected field 'dynamicKeys' to be an instance of Input");
            }
            for (var prop in o.staticKeys) {
                if (!(o.staticKeys[prop] instanceof Input))
                    throw new Error("Key ".concat(prop, " is not associated with an instance of Input"));
            }
        };
        // Helper function to make sure array description is an Input
        var validateArr = function (options) {
            if (!('arrayInput' in options) || !(options.arrayInput instanceof Input))
                throw new Error("Expected 'options.arrayInput' to be an instance of Input");
        };
        // Set up class variables according to type of input
        switch (type) {
            case 'string':
            case 'number':
            case 'boolean':
            case 'function':
            case 'dropdown':
                this.options.type = type;
                break;
            case 'object':
                this.options.type = type;
                validateObj(options);
                this.dynamicElems = {};
                break;
            case 'array':
                this.options.type = type;
                validateArr(options);
                if ('arrayInput' in options) {
                    options.arrayInput.renderOptions.delete = true;
                }
                this.allArrayElems = {};
                break;
            default:
                throw new Error("Value: Unknown type ".concat(type));
        }
    }
    // Helper method to find instances of Input that are included in this class's description 
    // (i.e. in Arrays or Objects) and set those Input parents to the parent specified here
    Value.prototype.setParent = function (parent) {
        switch (this.options.type) {
            case 'object':
                for (var prop in this.options.staticKeys) {
                    this.options.staticKeys[prop].setParent(parent);
                }
                for (var prop in this.dynamicElems) {
                    this.dynamicElems[prop].setParent(parent);
                }
                if (this.options.dynamicKeys)
                    this.options.dynamicKeys.setParent(parent);
                return;
            case 'array':
                for (var prop in this.allArrayElems) {
                    this.allArrayElems[prop].setParent(parent);
                }
                this.options.arrayInput.setParent(parent);
                return;
            default: return;
        }
    };
    // Set the dialog object and form name for this and all children
    Value.prototype.setObjAndFormName = function (obj, formName) {
        this.obj = obj;
        this.formName = formName;
        switch (this.options.type) {
            case 'object':
                for (var prop in this.options.staticKeys) {
                    this.options.staticKeys[prop].setObjAndFormName(obj, formName);
                }
                for (var prop in this.dynamicElems) {
                    this.dynamicElems[prop].setObjAndFormName(obj, formName);
                }
                if (this.options.dynamicKeys) {
                    this.options.dynamicKeys.setObjAndFormName(obj, formName);
                }
                return;
            case 'array':
                for (var prop in this.allArrayElems) {
                    this.allArrayElems[prop].setObjAndFormName(obj, formName);
                }
                this.options.arrayInput.setObjAndFormName(obj, formName);
                return;
            default: return;
        }
    };
    Value.prototype.propagateDefaults = function (hasDefault, val) {
        if (!('default' in this.options) && hasDefault)
            this.options.default = val;
        switch (this.options.type) {
            case 'object':
                for (var prop in this.options.staticKeys) {
                    this.options.staticKeys[prop].propagateDefaults('default' in this.options, this.options.default);
                }
                for (var prop in this.dynamicElems) {
                    this.dynamicElems[prop].propagateDefaults('default' in this.options, this.options.default);
                }
                if (this.options.dynamicKeys) {
                    this.options.dynamicKeys.propagateDefaults('default' in this.options, this.options.default);
                }
                return;
            case 'array':
                for (var prop in this.allArrayElems) {
                    this.allArrayElems[prop].propagateDefaults('default' in this.options, this.options.default);
                }
                this.options.arrayInput.propagateDefaults('default' in this.options, this.options.default);
                return;
        }
    };
    // Return *value*
    // Will be a number, bool, string, array, etc
    Value.prototype.serialize = function () {
        var val;
        var form = this.obj.getControl(this.formName);
        switch (this.options.type) {
            // The simple input types can be parsed directly from the JSON
            case 'string':
                val = form.data[this.id];
                if ('default' in this.options && (val === undefined || val === ""))
                    return this.options.default;
                if (val === undefined || val === '')
                    throw new Error("Value must be filled out.");
                return val;
            case 'number':
                val = form.data[this.id];
                if ('default' in this.options && (val === undefined || val === ""))
                    return this.options.default;
                if (val === undefined || val == '')
                    throw new Error("Value must be filled out.");
                return parseFloat(val);
            case 'boolean':
                val = form.data[this.id];
                // Doesn't really make sense for a categorical value to be undefined. But the code is here to deal with it in case
                // if ('default' in this.options && (val === undefined || val === false)) return this.options.default;
                // if (val === undefined) throw new Error("Value must be filled out.");
                return Boolean(val);
            case 'function':
                val = eval(form.data[this.id]);
                if ('default' in this.options && (val === undefined || val === ""))
                    return this.options.default;
                if (val === undefined)
                    throw new Error("Value must be filled out.");
                return val.toString();
            case 'dropdown':
                val = form.data[this.id];
                if ('default' in this.options && (val == undefined || val === ""))
                    return this.options.default;
                return val;
            case 'object':
                // Collect all static & dynamic keys into objResult
                var objResult = {};
                for (var prop in this.options.staticKeys) {
                    var input = this.options.staticKeys[prop];
                    objResult[prop] = input.serialize();
                }
                for (var prop in this.dynamicElems) {
                    var input = this.dynamicElems[prop];
                    objResult[prop] = input.serialize();
                }
                // Undefined values can't be serialized anyway, so we'll clean them out
                // This also makes it possible to see if we should use the default value for this object 
                for (var key in objResult) {
                    if (objResult[key] === undefined)
                        delete objResult[key];
                }
                // If objResult empty and default exists, use the default
                if ('default' in this.options && Object.keys(objResult).length == 0) {
                    return this.options.default;
                }
                if (Object.keys(objResult).length == 0)
                    throw new Error('Object must specify at least one key.');
                return objResult;
            case 'array':
                var arrResult = [];
                for (var prop in this.allArrayElems) {
                    arrResult.push(this.allArrayElems[prop].serialize());
                }
                if (arrResult.length == 0 && 'default' in this.options)
                    return this.options.default;
                if (arrResult.length == 0)
                    throw new Error('Array must have at least one element.');
                return arrResult;
        }
    };
    // If this is an object, return the Input associated with this key
    Value.prototype.key = function (name) {
        if (this.options.type !== 'object')
            return;
        if (this.options.staticKeys[name]) {
            return this.options.staticKeys[name];
        }
        if (this.dynamicElems[name]) {
            return this.dynamicElems[name];
        }
    };
    // If this is an array, return the Input associated with the index
    Value.prototype.index = function (i) {
        if (this.options.type !== 'array')
            return;
        return Object.values(this.allArrayElems)[i];
    };
    // Return a JSON object that can be used to populate the form
    // Takes 'data', which is a JSON object *or JSON value* corresponding to this object
    Value.prototype.getPopulateDataFromObj = function (data) {
        // If data is undefined and we have a default, just return an object setting this item to our default
        if (data === undefined && 'default' in this.options) {
            var d = {};
            d[this.id] = this.options.default;
            return d;
        }
        var t = typeof data;
        // Simple types can be set directly to 'data'
        if ((t == 'string' || t == 'boolean' || t == 'number') && this.options.type === t) {
            var d = {};
            d[this.id] = data;
            return d;
        }
        if (t == 'string' && this.options.type == 'dropdown') {
            var d = {};
            d[this.id] = data;
            return d;
        }
        // Functions must be converted to string representation (we input functions through a text edit box).
        // Implies closures don't work, but the JSON object representation of whatever we are building
        // should be standalone anyway.
        if (t == 'string' && this.options.type === 'function') {
            var d = {};
            d[this.id] = data.toString();
            return d;
        }
        // Handle arrays
        else if (t == 'object' && data instanceof Array && this.options.type == 'array') {
            this.allArrayElems = {};
            var d = {};
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var elem = data_1[_i];
                // Make a new instance of the array element to hold this element of d
                var input = this.options.arrayInput.cloneWithNewId();
                // We don't actually need the form, we just need to populate the child map,
                // which is done when building the form
                input.buildJSONForm();
                Object.assign(d, input.getPopulateDataFromObj(elem));
                this.allArrayElems[input.id] = input;
            }
            return d;
        }
        // Handle objects
        else if (t == 'object' && this.options.type == 'object') {
            var d = {};
            // We will try to parse all remaining keys in d as a dynamic key.
            // So we should keep track of which keys we see while filling so we don't parse any twice.
            var seen = {};
            // If key corresponds to static entry, populate it.
            for (var elem in this.options.staticKeys) {
                // Ok if data[elem] undefined, input getPopulateDataFromObj will handle default items
                Object.assign(d, this.options.staticKeys[elem].getPopulateDataFromObj(data[elem]));
                seen[elem] = true;
            }
            // For remaining keys, try to parse according to dynamic keys
            this.dynamicElems = {};
            for (var elem in data) {
                if (seen[elem])
                    continue;
                var input = this.options.dynamicKeys;
                if (!input)
                    throw new Error('Could not parse keys ' + JSON.stringify(data));
                input = input.cloneWithNewId();
                // Same deal as with arrays
                input.buildJSONForm();
                this.dynamicElems[elem] = input;
                Object.assign(d, input.getPopulateDataFromObj(data[elem]));
            }
            return d;
        }
        // Type didn't match anything we recognize
        else {
            var str = JSON.stringify(data);
            var label = this.parent ? 'Value ' + this.parent.label + ': ' : '';
            throw new Error(label + 'Could not parse ' + (str ? str : 'empty value when no default was supplied'));
        }
    };
    // Return an object containing key-value pairs for data currently in the form 
    Value.prototype.getPopulateData = function () {
        var data = {};
        var form = this.obj.getControl(this.formName);
        switch (this.options.type) {
            case 'string':
            case 'number':
            case 'function':
            case 'boolean':
            case 'dropdown':
                data[this.id] = form.data[this.id];
                return data;
            case 'object':
                for (var prop in this.options.staticKeys) {
                    Object.assign(data, this.options.staticKeys[prop].getPopulateData());
                }
                for (var prop in this.dynamicElems) {
                    Object.assign(data, this.dynamicElems[prop].getPopulateData());
                }
                return data;
            case 'array':
                for (var prop in this.allArrayElems) {
                    Object.assign(data, this.allArrayElems[prop].getPopulateData());
                }
                return data;
        }
    };
    // Do a "fairly deep" clone of an object. The ID is new and all children will be cloned as well. 
    // Options will be kept. Array elements and dynamic keys are not kept.
    Value.prototype.cloneWithNewId = function () {
        var value = null;
        switch (this.options.type) {
            // No special handling for basic input types
            case 'string':
            case 'number':
            case 'function':
            case 'boolean':
            case 'dropdown':
                value = new Value(this.options.type, this.options);
                value.obj = this.obj;
                value.formName = this.formName;
                return value;
            case 'object':
                // Clone static & dynamic keys and return
                var objOptions = { type: 'object', staticKeys: {} };
                if ('default' in this.options)
                    objOptions.default = this.options.default;
                for (var prop in this.options.staticKeys) {
                    objOptions.staticKeys[prop] = this.options.staticKeys[prop].cloneWithNewId();
                }
                if (this.options.dynamicKeys) {
                    objOptions.dynamicKeys = this.options.dynamicKeys.cloneWithNewId();
                }
                objOptions.inline = this.options.inline;
                value = new Value(this.options.type, objOptions);
                value.setObjAndFormName(this.obj, this.formName);
                return value;
            case 'array':
                var arrOptions = { type: 'array', arrayInput: this.options.arrayInput.cloneWithNewId() };
                arrOptions.inline = this.options.inline;
                if ('default' in this.options)
                    arrOptions.default = this.options.default;
                value = new Value(this.options.type, arrOptions);
                value.setObjAndFormName(this.obj, this.formName);
                return value;
        }
    };
    // Build the JSON form input element corresponding to this object instance. 
    Value.prototype.buildFormInput = function (showMoveButtons, callbacks) {
        switch (this.options.type) {
            case 'string':
            case 'function':
            case 'number':
                return this.buildSimpleInput('edit');
            case 'boolean':
                return this.buildSimpleInput('checkbox');
            case 'dropdown':
                return this.buildDropdownInput();
            case 'object':
                return this.buildObjectInput(showMoveButtons, callbacks);
            case 'array':
                return this.buildArrayInput(callbacks);
        }
    };
    Value.prototype.buildOpenInTabButton = function (id, buttonText, onClick) {
        return {
            type: "button",
            id: id,
            control: {
                layout: "text",
                html: "<span class=\"\" style=\"\">" + buttonText + "</span>",
                icon: "svgIcon=#alpha-icon-addCircleBorder:icon,24",
                onClick: onClick,
            },
            container: {
                style: "width: 100%;",
                className: ""
            },
            layout: "{content}"
        };
    };
    // Build JSON form input for an Object input
    Value.prototype.buildObjectInput = function (showMoveButtons, callbacks) {
        var _this = this;
        if (this.options.type != 'object')
            return;
        var allChildren = [];
        var makeTabBtn = function (input, btnText, tabTitle) {
            var openBtn = _this.buildOpenInTabButton(_this.id + "_OPEN_BTN_" + input.id, btnText, function () {
                callbacks === null || callbacks === void 0 ? void 0 : callbacks.addObjAsTab(input, tabTitle);
            });
            var _a = input.buildMoveButtons(callbacks), up = _a.up, down = _a.down;
            if (showMoveButtons) {
                return {
                    type: "group",
                    id: _this.id + "_MOVE_AND_OPEN_BTNS",
                    container: {
                        style: "display: flex; flex-direction: row; align-items: center; width: 100%;"
                    },
                    items: [
                        up,
                        down,
                        openBtn
                    ]
                };
            }
            return openBtn;
        };
        // Get form JSON for all static & dynamic keys
        for (var key in this.options.staticKeys) {
            var input = this.options.staticKeys[key];
            var inputType = input.selected();
            var inputForm = null;
            if (inputType && (inputType.options.type == 'object' || inputType.options.type == 'array') && !inputType.options.inline) {
                inputForm = makeTabBtn(input, "Open " + key, input.label + " -- " + key);
            }
            else
                inputForm = input.buildJSONForm(false, callbacks);
            allChildren.push(inputForm);
        }
        for (var key in this.dynamicElems) {
            var input = this.dynamicElems[key];
            input.renderOptions.delete = true;
            input.renderOptions.keyName = key;
            var inputType = input.selected();
            var inputForm = null;
            if (inputType && (inputType.options.type == 'object' || inputType.options.type == 'array') && !inputType.options.inline) {
                showMoveButtons = true;
                inputForm = makeTabBtn(input, "Open " + key, input.label + ' -- ' + key);
            }
            else
                inputForm = input.buildJSONForm(true, callbacks);
            allChildren.push(inputForm);
        }
        // Callback function to add a key to this object
        var addDynamicKey = function () {
            if (_this.options.type != 'object')
                return;
            var form = _this.obj.getControl(_this.formName);
            // Get the key name from the input box and make sure it isn't empty, isn't null, and doesn't already exist
            var keyName = form.data[_this.id + "_ADD_KEY_INPUT"];
            // Reset key input
            form.data[_this.id + "_ADD_KEY_INPUT"] = "";
            if (keyName == "" || !keyName)
                return;
            if (!_this.options.dynamicKeys)
                return;
            // Clone dynamic keys input element, add it to this object instance, and re render
            var newItem = _this.options.dynamicKeys.cloneWithNewId();
            newItem.buildJSONForm(true, callbacks);
            _this.dynamicElems[keyName] = newItem;
            callbacks === null || callbacks === void 0 ? void 0 : callbacks.reRender();
        };
        var items = [];
        // If we have the ability to add dynamic keys, we need to add a button to create them
        if (this.options.dynamicKeys) {
            items = [
                {
                    type: "button",
                    id: this.id + "_ADD_KEY_BTN",
                    control: {
                        layout: "text",
                        html: "<span class=\"\" style=\"\">Add Key</span>",
                        "icon": "",
                        "onClick": addDynamicKey,
                    },
                    container: {
                        style: ";",
                        className: ""
                    },
                    layout: "{content}"
                },
                {
                    type: "edit",
                    id: this.id + "_ADD_KEY_INPUT",
                    data: {
                        from: this.id + "_ADD_KEY_INPUT",
                        ensure: true,
                    },
                    label: {
                        text: "New key name",
                    },
                    layout: 'label-above',
                    control: {
                        placeholder: "",
                        width: "100%",
                    },
                    container: {
                        style: ";width: 30%;",
                        className: ""
                    }
                }
            ];
        }
        allChildren.push({
            type: "group",
            id: this.id + "_ADD_KEY_GROUP",
            container: {
                style: ";width: 100%;display: flex; flex-direction: row; width: 100%; border-top: 1px solid black;"
            },
            items: items,
        });
        return {
            type: "group",
            id: this.id,
            container: {
                style: "; width: 100%;display: flex; flex-direction: row; flex-flow: wrap; box-sizing: border-box;"
            },
            // Show if the show hide map says we should show
            show: function () { return SHOW_HIDE_MAP[_this.id] === undefined ? true : SHOW_HIDE_MAP[_this.id]; },
            items: allChildren,
        };
    };
    // Build JSON form element from array input
    Value.prototype.buildArrayInput = function (callbacks) {
        var _this = this;
        if (this.options.type != 'array')
            return;
        var value = this.options.arrayInput;
        // Helper function to take an instance of Input and wrap it in a JSON form row (rows have buttons to delete)
        var injectIntoRow = function (input) {
            var inputForm = input.buildJSONForm(true, callbacks);
            var id = "ARRAY_ROW_" + uuidv4();
            return {
                type: "group",
                show: function () { return SHOW_HIDE_MAP[id] === undefined ? true : SHOW_HIDE_MAP[id]; },
                id: id,
                container: {
                    style: ";width: 100%; display: flex; flex-direction: row; flex-flow: wrap;"
                },
                items: [
                    inputForm,
                ]
            };
        };
        // Callback for the add row onclick
        var makeArrayRow = function () {
            var input = value.cloneWithNewId();
            _this.allArrayElems[input.id] = input;
            callbacks === null || callbacks === void 0 ? void 0 : callbacks.reRender();
        };
        return {
            type: "group",
            id: this.id,
            container: {
                style: "; width: 100%;display: flex; flex-direction: row; flex-flow: wrap; box-sizing: border-box;"
            },
            show: function () { return SHOW_HIDE_MAP[_this.id] === undefined ? true : SHOW_HIDE_MAP[_this.id]; },
            items: __spreadArray(__spreadArray([], Object.values(this.allArrayElems).map(injectIntoRow), true), [
                {
                    type: "button",
                    id: this.id + "_ADD_BTN",
                    control: {
                        layout: "icon",
                        html: "<span class=\"\" style=\"\"></span>",
                        icon: "svgIcon=#alpha-icon-addCircleBorder:icon,24",
                        onClick: makeArrayRow,
                    },
                    container: {
                        style: ";",
                        className: ""
                    },
                    layout: "{content}"
                }
            ], false)
        };
    };
    // Build input for "simple" values (number, bool, string, function)
    Value.prototype.buildSimpleInput = function (editType) {
        var _this = this;
        var input = {
            type: editType,
            id: this.id,
            data: {
                from: this.id,
                ensure: true,
            },
            show: function () { return SHOW_HIDE_MAP[_this.id] === undefined ? true : SHOW_HIDE_MAP[_this.id]; },
            control: {
                placeholder: "",
                width: "100%",
            },
            container: {
                style: "; flex: 1 1;",
                className: ""
            }
        };
        return input;
    };
    Value.prototype.buildDropdownInput = function () {
        var _this = this;
        if (this.options.type != 'dropdown')
            return;
        var dropdown = {
            type: "picker",
            id: this.id,
            data: {
                from: this.id,
                ensure: true,
            },
            show: function () { return SHOW_HIDE_MAP[_this.id] === undefined ? true : SHOW_HIDE_MAP[_this.id]; },
            control: {
                placeholder: "",
                data: {
                    src: this.options.dropdownItems,
                    map: ["value", "text"],
                },
                onChange: function (change) {
                    if (_this.options.type != 'dropdown')
                        return;
                    if (_this.options.onChange) {
                        _this.options.onChange(change, _this);
                    }
                }
            },
            container: {
                style: "; flex: 1 1;",
            }
        };
        return dropdown;
    };
    return Value;
}());
// Class to handle an input for an *abstract* value.
// For example, we may want an input to handle a shipping address. 
// The exact information we need for that may vary by state or country. 
// However, we are collecting the same abstract thing: a shipping address. 
// So, we would create an Input with a 'shipping address' label, then add multiple 
// values to encompass all of the options a user might need to input their address.
// That is the core difference between this and the Value class. 
// Input = abstract thing or piece of data, Value = literal JSON value that can be entered into the form
var Input = /** @class */ (function () {
    function Input(options) {
        this.currDropdownValue = "";
        this.renderOptions = {
            keyName: '',
            collapse: true,
            delete: false,
        };
        // Dialog object and form name 
        this.obj = null;
        this.formName = "";
        this.parent = undefined;
        // Helpful to keep track of the initial render because we want to set the default dropdown choice 
        // to the first one specified, but *only* on the initial render.
        this.initialRender = true;
        // Dropdown name -> child object
        this.childMap = {};
        this.dropdownId = "DROPDOWN_" + uuidv4();
        if (!options)
            throw new Error('Must supply options');
        this.id = "GROUP_" + uuidv4();
        SHOW_HIDE_MAP[this.id] = true;
        // Helper to validate that the 'values' array is of the expected form
        var validateTypes = function (t) {
            if (!(t instanceof Array))
                throw new Error("Expected 'values' to be an Array");
            if (t.length == 0)
                throw new Error("Expected 'values' to have at least one element");
            for (var _i = 0, t_1 = t; _i < t_1.length; _i++) {
                var item = t_1[_i];
                typeCheck(item, 'object', "All items in 'values' should be objects");
                typeCheck(item.dropdownLabel, 'string', "Expected 'dropdownLabel' to be a string");
                if (!item.value || !(item.value instanceof Value))
                    throw new Error("Field 'value' in an element of 'values' must be an instance of Value");
            }
        };
        validateTypes(options.values);
        this.currDropdownValue = options.values[0].dropdownLabel;
        this.values = typeCheck(options.values, 'object', 'options.values should be an array');
        this.label = typeCheck(options.label, 'string', 'options.label should be a string');
        this.comments = typeCheck(options.comments, 'string', 'options.comments should be a string');
        this.validate = typeCheck(options.validate, 'function', 'options.validate should be a function');
        if (options.onPopulate) {
            ;
            this.onPopulate = typeCheck(options.onPopulate, 'function', 'options.onPopulate should be a function');
        }
        else {
            this.onPopulate = undefined;
        }
        // If show is undefined, just default to true
        this.show = options.show ? typeCheck(options.show, 'function', 'options.show should be a function') : (function () { return true; });
    }
    // Helper function to return a 'values' array (used in the Input description) with a single value 
    // Takes value, an instance of the Value object
    Input.singleValue = function (value) {
        return [{
                value: value,
                dropdownLabel: ''
            }];
    };
    // Helper function to return an input that has just a single Value in the values array 
    // Takes a type string (object, array, number, etc)
    // Takes a label, used for the input
    // Takes options, which are used in the Value constructor (so you could pass in the object description, etc)
    // Takes show, a callback function, defaults to return true
    Input.singleInput = function (type, label, valueOptions, inputOptions) {
        var _a, _b, _c, _d;
        var valOps = valueOptions ? valueOptions : {
            type: type,
        };
        var inputOps = {
            label: label,
            comments: (_a = inputOptions === null || inputOptions === void 0 ? void 0 : inputOptions.comments) !== null && _a !== void 0 ? _a : '',
            values: [],
            validate: (_b = inputOptions === null || inputOptions === void 0 ? void 0 : inputOptions.validate) !== null && _b !== void 0 ? _b : (function () { return true; }),
            show: (_c = inputOptions === null || inputOptions === void 0 ? void 0 : inputOptions.show) !== null && _c !== void 0 ? _c : (function () { return true; }),
            onPopulate: (_d = inputOptions === null || inputOptions === void 0 ? void 0 : inputOptions.onPopulate) !== null && _d !== void 0 ? _d : (function () { })
        };
        return new Input({
            values: [{ value: new Value(type, valOps), dropdownLabel: '' }],
            label: label,
            comments: inputOps.comments,
            validate: inputOps.validate,
            show: inputOps.show,
            onPopulate: inputOps.onPopulate,
        });
    };
    // Set the parent of this object and recursivley set parents of all children
    Input.prototype.setParent = function (parent) {
        this.parent = parent;
        for (var _i = 0, _a = this.values; _i < _a.length; _i++) {
            var item = _a[_i];
            item.value.setParent(this);
        }
    };
    // Set the dialog object and form name for this and all children
    Input.prototype.setObjAndFormName = function (obj, formName) {
        this.obj = obj;
        this.formName = formName;
        for (var _i = 0, _a = this.values; _i < _a.length; _i++) {
            var item = _a[_i];
            item.value.setObjAndFormName(obj, formName);
        }
    };
    // Return a JSON object representing the data in this class
    Input.prototype.serialize = function () {
        try {
            var value = this.childMap[this.currDropdownValue].serialize();
            this.validate(value);
            return value;
        }
        catch (e) {
            var errMsg = "<p>Errors while attempting to serialize input <b>".concat(this.label, "</b>:</p>");
            errMsg += '<div style = "margin-left: 1rem;">';
            errMsg += e.toString();
            errMsg += "</div>";
            throw errMsg;
        }
    };
    // Return input corresponding to selected dropdown element
    Input.prototype.selected = function () {
        return this.childMap[this.currDropdownValue];
    };
    Input.prototype.propagateDefaults = function (hasDefault, val) {
        for (var _i = 0, _a = this.values; _i < _a.length; _i++) {
            var item = _a[_i];
            item.value.propagateDefaults(hasDefault, val);
        }
    };
    Input.prototype.preprocess = function (obj, formName, parent) {
        this.setParent(parent);
        this.setObjAndFormName(obj, formName);
        this.propagateDefaults(false, undefined);
    };
    // Similar to the method in Value. 
    // Clone this object with a new ID, and carry across the options specified. 
    // Children are also cloned with a new ID. 
    Input.prototype.cloneWithNewId = function () {
        var _a;
        var newOptions = {
            values: [],
            label: this.label,
            comments: this.comments,
            validate: this.validate,
            show: this.show,
            onPopulate: (_a = this.onPopulate) !== null && _a !== void 0 ? _a : (function (_1, _2) { }),
        };
        for (var _i = 0, _b = this.values; _i < _b.length; _i++) {
            var value = _b[_i];
            newOptions.values.push({
                value: value.value.cloneWithNewId(),
                dropdownLabel: value.dropdownLabel,
            });
        }
        var i = new Input(newOptions);
        i.renderOptions = JSON.parse(JSON.stringify(this.renderOptions));
        i.setParent(this.parent);
        i.setObjAndFormName(this.obj, this.formName);
        return i;
    };
    // Return a JSON object that can be used to set the JSON Form data.
    // 'data' should be a JSON object or value.
    Input.prototype.getPopulateDataFromObj = function (data) {
        // Loop through value definitions, searching for one that matches the data 
        // If none accept, return with false
        var recentErrs = {};
        for (var _i = 0, _a = this.values; _i < _a.length; _i++) {
            var valuedef = _a[_i];
            // getPopulateDataFromObj can throw an error, but we don't want to instantly return failure in that case. 
            // Instead we want to try and find at least one that doesn't fail, and use that.
            try {
                var d = valuedef.value.getPopulateDataFromObj(data);
                this.setDropdown({ item: { data: valuedef.dropdownLabel } });
                if (this.onPopulate) {
                    this.onPopulate(this, data);
                }
                return d;
            }
            catch (e) {
                // Just helpful for debugging. Errors logged here may not necessarily be critical, 
                // they just reflect why certain dropdown values failed to parse.
                recentErrs[valuedef.dropdownLabel] = e;
            }
        }
        var errMsg = "<p>Errors while attempting to parse input <b>".concat(this.label, "</b>:</p>");
        errMsg += '<div style = "margin-left: 1rem;">';
        for (var _b = 0, _c = this.values; _b < _c.length; _b++) {
            var valuedef = _c[_b];
            if (valuedef.dropdownLabel != '')
                errMsg += "<p>For dropdown <b>".concat(valuedef.dropdownLabel, " </b></p>");
            errMsg += recentErrs[valuedef.dropdownLabel].toString();
        }
        errMsg += "</div>";
        throw errMsg;
    };
    Input.prototype.getPopulateData = function () {
        var d = {};
        d[this.dropdownId] = this.currDropdownValue;
        for (var prop in this.childMap) {
            Object.assign(d, this.childMap[prop].getPopulateData());
        }
        return d;
    };
    // Helper function to select one of the dropdown values and update child visibility.
    Input.prototype.setDropdown = function (changeInfo) {
        var changedTo = changeInfo.item.data;
        for (var dropdownLabel in this.childMap) {
            if (dropdownLabel == changedTo) {
                SHOW_HIDE_MAP[this.childMap[dropdownLabel].id] = true;
            }
            else {
                SHOW_HIDE_MAP[this.childMap[dropdownLabel].id] = false;
            }
        }
        var form = this.obj.getControl(this.formName);
        form.data[this.dropdownId] = changedTo;
        this.obj.setValue(this.formName, this.obj.getValue(this.formName));
        this.currDropdownValue = changedTo;
    };
    // Return a JSON Form object based on this object instance
    Input.prototype.buildJSONForm = function (showMoveBtns, callbacks) {
        var _this = this;
        if (showMoveBtns === void 0) { showMoveBtns = false; }
        var childForms = [];
        // We clear the child map in case children were removed (i.e. an Array element was deleted).
        // It will be re populated in the below loop anyway.
        this.childMap = {};
        var first = true;
        for (var _i = 0, _a = this.values; _i < _a.length; _i++) {
            var item = _a[_i];
            // Push each child's form to the child array
            var component = item.value.buildFormInput(showMoveBtns, callbacks);
            childForms.push(component);
            // Don't want multiple children with the same label. 
            // Alt. option is to just overwrite or something but silent failure will likely come back to haunt us.
            if (this.childMap[item.dropdownLabel]) {
                throw new Error("Multiple components with same dropdown label (".concat(item.dropdownLabel));
            }
            this.childMap[item.dropdownLabel] = item.value;
            // Only want to update the show hide map if this is the first render. 
            // Otherwise we would reset the dropdown option that the user had selected.
            if (this.initialRender) {
                SHOW_HIDE_MAP[this.id + "_CHILDREN"] = false;
                SHOW_HIDE_MAP[item.value.id] = first;
                first = false;
            }
        }
        this.initialRender = false;
        // Information used for the dropdown in the JSON Form
        var textToVal = [];
        for (var label in this.childMap) {
            textToVal.push({ text: label, value: label });
        }
        // Callback for when the user selects a new dropdown option
        var onChange = function (info) {
            _this.setDropdown(info);
        };
        var header = this.makeHeader(textToVal, onChange, childForms, showMoveBtns, callbacks);
        return header;
    };
    // Helper function to create a JSON Form group with a dropdown element placed in the upper right corner
    Input.prototype.makeHeader = function (textToValue, onChange, children, showMoveBtns, callbacks) {
        var _this = this;
        var init = textToValue[0].value;
        var dropdown = {
            type: "picker",
            id: this.dropdownId,
            data: {
                from: this.dropdownId,
                ensure: true,
                blank: init,
            },
            label: {
                text: "Editor Types",
            },
            layout: "label-above",
            control: {
                placeholder: "",
                width: "fit-content;",
                data: {
                    src: textToValue,
                    map: ["value", "text"],
                },
                onChange: onChange,
            },
            container: {
                style: "min-width: 100px; background-color: #eaeaea; margin-left: auto;",
            }
        };
        var collapse = {
            type: "button",
            id: this.id + "_COLLAPSE_BTN",
            control: {
                layout: "icon",
                html: "<span class=\"\" style=\"\" id=\"".concat(this.id + '_COLLAPSE_ICON', "\"></span>"),
                icon: "svgIcon=#alpha-icon-chevronRight:icon,24",
                onClick: function () {
                    SHOW_HIDE_MAP[_this.id + "_CHILDREN"] = !SHOW_HIDE_MAP[_this.id + "_CHILDREN"];
                    _this.obj.setValue(_this.formName, _this.obj.getValue(_this.formName));
                    var rotation = SHOW_HIDE_MAP[_this.id + '_CHILDREN'] ? 'rotate(90deg)' : 'rotate(0deg)';
                    document
                        .getElementsByClassName(_this.id + '_COLLAPSE_ICON')[0]
                        .querySelectorAll('svg')[0]
                        .style
                        .transform = rotation;
                },
            },
            container: {
                style: "background-color: #eaeaea;",
                className: this.id + '_COLLAPSE_ICON'
            },
            layout: "{content}"
        };
        var deleteBtn = {
            type: 'button',
            id: this.id + "_DELETE_BTN",
            control: {
                layout: 'icon',
                icon: 'svgIcon=#alpha-icon-trash:icon,24',
                onClick: function () {
                    var parent = _this.parent;
                    if (parent) {
                        var selected = parent.selected();
                        if (selected.options.type == 'array') {
                            delete selected.allArrayElems[_this.id];
                        }
                        else if (selected.options.type == 'object') {
                            delete selected.dynamicElems[_this.renderOptions.keyName];
                            callbacks === null || callbacks === void 0 ? void 0 : callbacks.deleteTab(_this.id, true);
                        }
                        else
                            return;
                        callbacks === null || callbacks === void 0 ? void 0 : callbacks.reRender();
                    }
                }
            },
            container: {
                style: "background-color: #eaeaea;",
                className: ""
            },
            layout: "{content}"
        };
        var label = {
            type: 'html',
            control: {
                html: this.label,
            },
            container: {
                className: '',
                style: ';background-color: #eaeaea;',
            },
            layout: '{content}',
        };
        var keyName = {
            type: 'html',
            control: {
                html: this.renderOptions.keyName,
            },
            container: {
                className: '',
                style: ';background-color: #eaeaea;',
            },
            layout: '{content}',
        };
        var comments = {
            type: 'html',
            control: {
                html: this.comments,
            },
            container: {
                className: '',
                style: 'width: 100%; background-color: #f5f5f5; margin: 1rem; padding: 1rem; font-style: italic;',
            },
            layout: '{content}',
        };
        var barItems = [];
        if (this.renderOptions.collapse)
            barItems.push(collapse);
        if (this.renderOptions.delete)
            barItems.push(deleteBtn);
        var _a = this.buildMoveButtons(callbacks), up = _a.up, down = _a.down;
        if (showMoveBtns) {
            barItems.push(up);
            barItems.push(down);
        }
        barItems.push(label);
        if (this.renderOptions.keyName)
            barItems.push(keyName);
        if (Object.values(this.childMap).length > 1)
            barItems.push(dropdown);
        if (this.comments != '')
            barItems.push(comments);
        return {
            type: "group",
            id: this.id,
            container: {
                style: "width: 100%;display: flex; flex-direction: column; align-items: center; box-sizing: border-box; margin: 0px; padding: 0px; margin-bottom: 0.5rem; margin-top: 0.5rem"
            },
            // In addition to the show hide map, we should take into account the function that the user has supplied 
            // to show or hide. Both must return true to display the component.
            show: function () {
                var a = SHOW_HIDE_MAP[_this.id] === undefined ? true : SHOW_HIDE_MAP[_this.id];
                var b = _this.show(_this);
                return a && b;
            },
            // Multiple input values => display the dropdown options 
            // Single input value => do not display the dropdown options
            items: [
                {
                    type: 'group',
                    id: this.id + "_HEADER",
                    container: {
                        style: "; \n\t\t\t\t\t\t\twidth: 95%; \n\t\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\t\tflex-direction: row; \n\t\t\t\t\t\t\tbox-sizing: border-box;\n\t\t\t\t\t\t\tbackground-color: #eaeaea;\n\t\t\t\t\t\t\talign-items: center;\n\t\t\t\t\t\t\tborder: 1px solid black;\n\t\t\t\t\t\t\tflex-wrap: wrap;\n\t\t\t\t\t\t"
                    },
                    items: barItems,
                },
                {
                    type: 'group',
                    show: function () {
                        return SHOW_HIDE_MAP[_this.id + "_CHILDREN"] === undefined ? true : SHOW_HIDE_MAP[_this.id + "_CHILDREN"];
                    },
                    id: this.id + "_CHILDREN",
                    container: {
                        style: ";\n\t\t\t\t\t\t\twidth: 95%;\n\t\t\t\t\t\t\tborder: 1px solid black;\n\t\t\t\t\t\t\tborder-top: none;\n\t\t\t\t\t\t\tbox-sizing: border-box;\n\t\t\t\t\t\t"
                    },
                    items: children,
                }
            ]
        };
    };
    Input.prototype.buildMoveButtons = function (callbacks) {
        var _this = this;
        var moveBtnTemplate = function (dir) {
            var icon = dir == 'UP' ? 'chevronUp' : 'chevronDown';
            return {
                type: 'button',
                id: _this.id + "_MOVE_" + dir + '_BTN',
                control: {
                    layout: 'icon',
                    icon: 'svgIcon=#alpha-icon-' + icon + ':icon,24',
                    onClick: function () {
                        var _a;
                        var valContainer = (_a = _this.parent) === null || _a === void 0 ? void 0 : _a.selected();
                        if (valContainer == undefined)
                            return;
                        var move = function (keys, key) {
                            var idx = keys.indexOf(key);
                            if (idx >= 0) {
                                if (dir == 'UP' && idx > 0) {
                                    var tmp = keys[idx - 1];
                                    keys[idx - 1] = keys[idx];
                                    keys[idx] = tmp;
                                }
                                else if (dir == 'DOWN' && idx < keys.length - 1) {
                                    var tmp = keys[idx + 1];
                                    keys[idx + 1] = keys[idx];
                                    keys[idx] = tmp;
                                }
                            }
                        };
                        var reorderObj = function (keys, original) {
                            var newObj = {};
                            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                                var id = keys_1[_i];
                                newObj[id] = original[id];
                            }
                            return newObj;
                        };
                        if (valContainer.options.type == 'array') {
                            var valKeys = Object.keys(valContainer.allArrayElems);
                            move(valKeys, _this.id);
                            valContainer.allArrayElems = reorderObj(valKeys, valContainer.allArrayElems);
                        }
                        else if (valContainer.options.type == 'object') {
                            var valKeys = Object.keys(valContainer.dynamicElems);
                            var vals = Object.values(valContainer.dynamicElems);
                            var idx = -1;
                            for (var i = 0; i < vals.length; i++) {
                                if (_this.id == vals[i].id) {
                                    idx = i;
                                    break;
                                }
                            }
                            if (idx < 0)
                                return;
                            move(valKeys, valKeys[idx]);
                            valContainer.dynamicElems = reorderObj(valKeys, valContainer.dynamicElems);
                        }
                        callbacks === null || callbacks === void 0 ? void 0 : callbacks.reRender();
                    }
                },
                container: {
                    style: "background: transparent;",
                    className: ""
                },
                layout: "{content}"
            };
        };
        return { up: moveBtnTemplate('UP'), down: moveBtnTemplate('DOWN') };
    };
    return Input;
}());
// Given obj (dialog.object), the form name, and a config object (instance of Input or Value), 
// build and render a JSON Form.
function buildFromConfig(obj, formName, configObj, listName, isSql) {
    if (isSql === void 0) { isSql = false; }
    configObj.preprocess(obj, formName);
    if (!obj.stateInfo)
        obj.stateInfo = {};
    // ID -> Input Object
    var tabPanes = {};
    // Navigation Stack (empty means default tab)
    var tabStack = [];
    // Callback to pass into the form so that we can have a button that serializes the form
    var writeToFileCallback = function () {
        try {
            var json = JSON.stringify(configObj.serialize());
            var file = new Blob([json], { type: 'application/json' });
            var a_1 = document.createElement('a');
            var url_1 = URL.createObjectURL(file);
            a_1.href = url_1;
            a_1.download = 'ConfigurationJSON';
            document.body.appendChild(a_1);
            a_1.click();
            setTimeout(function () {
                document.body.removeChild(a_1);
                window.URL.revokeObjectURL(url_1);
            }, 0);
        }
        catch (e) {
            displayErrorMessage(e.toString());
        }
        reRender();
    };
    var loadFromFileCallback = function (data) {
        populateFromData(obj, formName, configObj, reRender, data);
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
    var saveGlobal = function () {
        try {
            var maybeConfig = configObj.serialize();
            runValidation(maybeConfig);
            maybeConfig = extractRelevantConfig(maybeConfig, true);
            var data = encodeURIComponent(JSON.stringify(maybeConfig));
            obj.ajaxCallback('', '', 'save_config', '', "configName=".concat(listName, "&payload=").concat(data, "&global=").concat(true), {
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
            obj.ajaxCallback('', '', 'save_config', '', "configName=".concat(listName, "&payload=").concat(data, "&global=").concat(false), {
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
    var bottomButtons;
    if (!isSql)
        bottomButtons = makeSerializeButton(obj, writeToFileCallback, loadFromFileCallback);
    else
        bottomButtons = makeSQLSaveButtons(obj, saveUser, saveGlobal);
    // Callback to re render form. Saves current form data and restores it after re rendering.
    var reRender = function () {
        configObj.setParent();
        var oldData = configObj.getPopulateData();
        var form = {};
        try {
            form = makeTabGroup(tabPanes, tabStack, obj, obj.styleName, allFormCallbacks, configObj.id);
        }
        catch (e) {
            displayErrorMessage(e.toString());
        }
        renderForm(obj, formName, [form, bottomButtons]);
        obj.setValue(formName, oldData);
    };
    function addObjAsTab(obj, tabTitle) {
        if (tabPanes[obj.id])
            return;
        tabPanes[obj.id] = { object: obj, title: tabTitle };
        tabStack.push(obj.id);
        reRender();
    }
    // Pop tabs off until we reach the tab we want
    // If 'includeSelf', then the tab with tabId is also deleted
    function deleteTab(tabId, includeSelf) {
        while (tabStack.length > 0) {
            var last = tabStack[tabStack.length - 1];
            if (last == tabId) {
                if (includeSelf) {
                    tabStack.pop();
                    delete tabPanes[last];
                }
                break;
            }
            tabStack.pop();
            delete tabPanes[last];
        }
        reRender();
    }
    var allFormCallbacks = {
        reRender: reRender,
        addObjAsTab: addObjAsTab,
        deleteTab: deleteTab,
    };
    obj.stateInfo.callbacks = allFormCallbacks;
    tabPanes[configObj.id] = { object: configObj, title: configObj.label };
    var form;
    try {
        // Don't need the form, but this sets some necessary information regarding dropdowns and child forms
        configObj.buildJSONForm();
        form = makeTabGroup(tabPanes, tabStack, obj, obj.styleName, allFormCallbacks, configObj.id);
    }
    catch (e) {
        displayErrorMessage(e.toString());
        form = {};
    }
    renderForm(obj, formName, [form, bottomButtons]);
    return reRender;
}
// Helper function to populate the form given an existing JSON object representing the data
function populateFromData(obj, formName, input, reRender, data) {
    try {
        var d = input.getPopulateDataFromObj(data);
        obj.setValue(formName, JSON.stringify(d));
    }
    catch (e) {
        displayErrorMessage(e.toString());
        console.error(e);
    }
    reRender();
}
function makeTabGroup(tabPaneObjs, tabStack, obj, style, callbacks, mainId) {
    var panes = [];
    var defaultId = undefined;
    var navTo = tabStack.length > 0 ? tabStack[tabStack.length - 1] : mainId;
    for (var id in tabPaneObjs) {
        var inner = tabPaneObjs[id].object.buildJSONForm(false, callbacks);
        var pane = wrapInTab(inner, tabPaneObjs[id].title, id, mainId, obj);
        if (!defaultId && navTo == id)
            defaultId = pane.id;
        panes.push(pane);
    }
    return {
        type: 'tab',
        id: 'TAB_' + uuidv4(),
        container: {
            theme: style,
            tabband: {
                tab: { initial: defaultId }
            }
        },
        items: panes,
    };
}
function wrapInTab(formJSON, title, id, mainId, obj) {
    var inner;
    // Change in requirement means that we no longer want to x out tabs. But this code may be useful in the future.
    /* if (id == mainId) inner = title;
    else inner = `
        <div style="display: flex; flex-direction: row; align-items: center; justify-content: center;">
            <button onclick="${obj.dialogId + '_DlgObj'}.stateInfo.callbacks.deleteTab('${id}');" style = "padding: 0px; height: 1.5em; width: 1.5em; margin-right: .5rem;"> X </button>
            <p>${title}</p>
        </div>
    `; */
    inner = "\n\t\t<div onclick=\"".concat(obj.dialogId + '_DlgObj', ".stateInfo.callbacks.deleteTab('").concat(id, "');\">\n\t\t\t<p>").concat(title, "</p>\n\t\t</div>\n\t");
    return {
        type: 'pane',
        id: 'TAB_PANE_' + uuidv4(),
        data: { from: '' },
        container: {
            title: inner,
            style: "display: flex; flex-direction: row; justify-content: center; align-items: center;",
        },
        items: [formJSON],
    };
}
// Helper function to make a button to serialize the form data
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
