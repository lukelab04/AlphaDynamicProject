"use strict";
// Take items (should be string representation of JSON) and render form
function renderForm(obj, formName, items) {
    items = items.filter((x) => Boolean(x));
    obj.setJSONFormItems(formName, items);
    obj.getControl(formName)._formBoxSize = "";
    obj.resizeFormBoxes();
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
class Value {
    constructor(type, options) {
        // Dialog object and form name
        this.obj = null;
        this.formName = "";
        this.options = options ? options : { type: 'string' };
        this.id = "INPUT_TYPE_" + uuidv4();
        this.dynamicElems = {};
        this.allArrayElems = {};
        SHOW_HIDE_MAP[this.id] = true;
        // Helper function to make sure object description matches what we expect
        let validateObj = (o) => {
            if (!('staticKeys' in o) || !o.staticKeys) {
                throw new Error("Expected input object to have field 'staticKeys'");
            }
            if (o.dynamicKeys) {
                if (!(o.dynamicKeys instanceof Input))
                    throw new Error("Expected field 'dynamicKeys' to be an instance of Input");
            }
            for (const prop in o.staticKeys) {
                if (!(o.staticKeys[prop] instanceof Input))
                    throw new Error(`Key ${prop} is not associated with an instance of Input`);
            }
        };
        // Helper function to make sure array description is an Input
        let validateArr = (options) => {
            if (!('arrayInput' in options) || !(options.arrayInput instanceof Input))
                throw new Error(`Expected 'options.arrayInput' to be an instance of Input`);
        };
        // Set up class variables according to type of input
        switch (type) {
            case 'string':
            case 'number':
            case 'boolean':
            case 'function':
            case 'dropdown':
            case 'recursive':
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
                throw new Error(`Value: Unknown type ${type}`);
        }
    }
    expandOneRecursionLevel() {
        var _a;
        switch (this.options.type) {
            case 'string':
            case 'number':
            case 'boolean':
            case 'function':
            case 'dropdown':
                return;
            case 'recursive':
                if (this.recursiveElement != undefined) {
                    this.recursiveElement.expandOneRecursionLevel();
                }
                else {
                    // Do not further expand
                    this.recursiveElement = (_a = this.findRecursiveElem(this.options.recurseOn, this.parent)) === null || _a === void 0 ? void 0 : _a.cloneWithNewId();
                }
                return;
            case 'array':
                for (const prop in this.allArrayElems) {
                    this.allArrayElems[prop].expandOneRecursionLevel();
                }
                this.options.arrayInput.expandOneRecursionLevel();
                return;
            case 'object':
                for (const prop in this.options.staticKeys) {
                    this.options.staticKeys[prop].expandOneRecursionLevel();
                }
                for (const prop in this.dynamicElems) {
                    this.dynamicElems[prop].expandOneRecursionLevel();
                }
                if (this.options.dynamicKeys) {
                    this.options.dynamicKeys.expandOneRecursionLevel();
                }
                return;
        }
    }
    // Helper method to find instances of Input that are included in this class's description 
    // (i.e. in Arrays or Objects) and set those Input parents to the parent specified here
    setParent(parent) {
        var _a;
        this.parent = parent;
        switch (this.options.type) {
            case 'object':
                for (const prop in this.options.staticKeys) {
                    this.options.staticKeys[prop].setParent(parent);
                }
                for (const prop in this.dynamicElems) {
                    this.dynamicElems[prop].setParent(parent);
                }
                if (this.options.dynamicKeys)
                    this.options.dynamicKeys.setParent(parent);
                return;
            case 'array':
                for (const prop in this.allArrayElems) {
                    this.allArrayElems[prop].setParent(parent);
                }
                this.options.arrayInput.setParent(parent);
                return;
            case 'recursive':
                (_a = this.recursiveElement) === null || _a === void 0 ? void 0 : _a.setParent(parent);
                return;
            default: return;
        }
    }
    // Set the dialog object and form name for this and all children
    setObjAndFormName(obj, formName) {
        var _a;
        this.obj = obj;
        this.formName = formName;
        switch (this.options.type) {
            case 'recursive':
                if (this.recursiveElement) {
                    if (this.recursiveElement.obj != obj || this.recursiveElement.formName != formName) {
                        (_a = this.recursiveElement) === null || _a === void 0 ? void 0 : _a.setObjAndFormName(obj, formName);
                    }
                }
                return;
            case 'object':
                for (const prop in this.options.staticKeys) {
                    this.options.staticKeys[prop].setObjAndFormName(obj, formName);
                }
                for (const prop in this.dynamicElems) {
                    this.dynamicElems[prop].setObjAndFormName(obj, formName);
                }
                if (this.options.dynamicKeys) {
                    this.options.dynamicKeys.setObjAndFormName(obj, formName);
                }
                return;
            case 'array':
                for (const prop in this.allArrayElems) {
                    this.allArrayElems[prop].setObjAndFormName(obj, formName);
                }
                this.options.arrayInput.setObjAndFormName(obj, formName);
                return;
            default: return;
        }
    }
    propagateDefaults(hasDefault, val) {
        if (!('default' in this.options) && hasDefault)
            this.options.default = val;
        switch (this.options.type) {
            case 'object':
                for (const prop in this.options.staticKeys) {
                    this.options.staticKeys[prop].propagateDefaults('default' in this.options, this.options.default);
                }
                for (const prop in this.dynamicElems) {
                    this.dynamicElems[prop].propagateDefaults('default' in this.options, this.options.default);
                }
                if (this.options.dynamicKeys) {
                    this.options.dynamicKeys.propagateDefaults('default' in this.options, this.options.default);
                }
                return;
            case 'array':
                for (const prop in this.allArrayElems) {
                    this.allArrayElems[prop].propagateDefaults('default' in this.options, this.options.default);
                }
                this.options.arrayInput.propagateDefaults('default' in this.options, this.options.default);
                return;
        }
    }
    // Return *value*
    // Will be a number, bool, string, array, etc
    serialize() {
        var _a;
        let val;
        let form = this.obj.getControl(this.formName);
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
                let objResult = {};
                for (const prop in this.options.staticKeys) {
                    let input = this.options.staticKeys[prop];
                    objResult[prop] = input.serialize();
                }
                for (const prop in this.dynamicElems) {
                    let input = this.dynamicElems[prop];
                    objResult[prop] = input.serialize();
                }
                // Undefined values can't be serialized anyway, so we'll clean them out
                // This also makes it possible to see if we should use the default value for this object 
                for (const key in objResult) {
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
                let arrResult = [];
                for (const prop in this.allArrayElems) {
                    arrResult.push(this.allArrayElems[prop].serialize());
                }
                if (arrResult.length == 0 && 'default' in this.options)
                    return this.options.default;
                if (arrResult.length == 0)
                    throw new Error('Array must have at least one element.');
                return arrResult;
            case 'recursive':
                return (_a = this.recursiveElement) === null || _a === void 0 ? void 0 : _a.serialize();
        }
    }
    // If this is an object, return the Input associated with this key
    // Alt. this can be recursive
    key(name) {
        var _a;
        if (this.options.type == 'recursive')
            return (_a = this.recursiveElement) === null || _a === void 0 ? void 0 : _a.selected().key(name);
        if (this.options.type !== 'object')
            return;
        if (this.options.staticKeys[name]) {
            return this.options.staticKeys[name];
        }
        if (this.dynamicElems[name]) {
            return this.dynamicElems[name];
        }
    }
    // If this is an array, return the Input associated with the index
    index(i) {
        var _a;
        if (this.options.type == 'recursive')
            return (_a = this.recursiveElement) === null || _a === void 0 ? void 0 : _a.selected().index(i);
        if (this.options.type !== 'array')
            return;
        return Object.values(this.allArrayElems)[i];
    }
    findRecursiveElem(name, parent) {
        if ((parent === null || parent === void 0 ? void 0 : parent.name) === name) {
            return parent;
        }
        if (parent !== undefined)
            return this.findRecursiveElem(name, parent.parent);
        return undefined;
    }
    // Return a JSON object that can be used to populate the form
    // Takes 'data', which is a JSON object *or JSON value* corresponding to this object
    getPopulateDataFromObj(data) {
        var _a, _b, _c;
        // If data is undefined and we have a default, just return an object setting this item to our default
        if (data === undefined && 'default' in this.options) {
            let d = {};
            d[this.id] = this.options.default;
            return d;
        }
        // Recursive elems just forward the request 
        if (this.options.type == 'recursive') {
            // Cloning will break the recursive link
            if (!this.recursiveElement) {
                this.recursiveElement = (_a = this.findRecursiveElem(this.options.recurseOn, this.parent)) === null || _a === void 0 ? void 0 : _a.cloneWithNewId();
            }
            return (_c = (_b = this.recursiveElement) === null || _b === void 0 ? void 0 : _b.getPopulateDataFromObj(data)) !== null && _c !== void 0 ? _c : {};
        }
        let t = typeof data;
        // Simple types can be set directly to 'data'
        if ((t == 'string' || t == 'boolean' || t == 'number') && this.options.type === t) {
            let d = {};
            d[this.id] = data;
            return d;
        }
        if (t == 'string' && this.options.type == 'dropdown') {
            let d = {};
            d[this.id] = data;
            return d;
        }
        // Functions must be converted to string representation (we input functions through a text edit box).
        // Implies closures don't work, but the JSON object representation of whatever we are building
        // should be standalone anyway.
        if (t == 'string' && this.options.type === 'function') {
            let d = {};
            d[this.id] = data.toString();
            return d;
        }
        // Handle arrays
        else if (t == 'object' && data instanceof Array && this.options.type == 'array') {
            this.allArrayElems = {};
            let d = {};
            for (const elem of data) {
                // Make a new instance of the array element to hold this element of d
                let input = this.options.arrayInput.cloneWithNewId();
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
            let d = {};
            // We will try to parse all remaining keys in d as a dynamic key.
            // So we should keep track of which keys we see while filling so we don't parse any twice.
            let seen = {};
            // If key corresponds to static entry, populate it.
            for (const elem in this.options.staticKeys) {
                // Ok if data[elem] undefined, input getPopulateDataFromObj will handle default items
                Object.assign(d, this.options.staticKeys[elem].getPopulateDataFromObj(data[elem]));
                seen[elem] = true;
            }
            // For remaining keys, try to parse according to dynamic keys
            this.dynamicElems = {};
            for (const elem in data) {
                if (seen[elem])
                    continue;
                let input = this.options.dynamicKeys;
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
            let str = JSON.stringify(data);
            let label = this.parent ? 'Value ' + this.parent.label + ': ' : '';
            throw new Error(label + 'Could not parse ' + (str ? str : 'empty value when no default was supplied'));
        }
    }
    // Return an object containing key-value pairs for data currently in the form 
    getPopulateData() {
        var _a, _b, _c;
        let data = {};
        let form = this.obj.getControl(this.formName);
        switch (this.options.type) {
            case 'string':
            case 'number':
            case 'function':
            case 'boolean':
            case 'dropdown':
                data[this.id] = form.data[this.id];
                return data;
            case 'object':
                for (const prop in this.options.staticKeys) {
                    Object.assign(data, this.options.staticKeys[prop].getPopulateData());
                }
                for (const prop in this.dynamicElems) {
                    Object.assign(data, this.dynamicElems[prop].getPopulateData());
                }
                return data;
            case 'array':
                for (const prop in this.allArrayElems) {
                    Object.assign(data, this.allArrayElems[prop].getPopulateData());
                }
                return data;
            case 'recursive':
                if (this.recursiveElement == undefined) {
                    this.recursiveElement = (_a = this.findRecursiveElem(this.options.recurseOn, this.parent)) === null || _a === void 0 ? void 0 : _a.cloneWithNewId();
                }
                return (_c = (_b = this.recursiveElement) === null || _b === void 0 ? void 0 : _b.getPopulateData()) !== null && _c !== void 0 ? _c : {};
        }
    }
    // Do a "fairly deep" clone of an object. The ID is new and all children will be cloned as well. 
    // Options will be kept. Array elements and dynamic keys are not kept.
    cloneWithNewId() {
        let value = null;
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
            case 'recursive':
                value = new Value(this.options.type, this.options);
                value.obj = this.obj;
                value.formName = this.formName;
                value.recursiveElement = undefined;
                return value;
            case 'object':
                // Clone static & dynamic keys and return
                let objOptions = { type: 'object', staticKeys: {} };
                if ('default' in this.options)
                    objOptions.default = this.options.default;
                for (const prop in this.options.staticKeys) {
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
                let arrOptions = { type: 'array', arrayInput: this.options.arrayInput.cloneWithNewId() };
                arrOptions.inline = this.options.inline;
                if ('default' in this.options)
                    arrOptions.default = this.options.default;
                value = new Value(this.options.type, arrOptions);
                value.setObjAndFormName(this.obj, this.formName);
                return value;
        }
    }
    // Build the JSON form input element corresponding to this object instance. 
    buildFormInput(showMoveButtons, callbacks) {
        var _a, _b;
        switch (this.options.type) {
            case 'recursive':
                // If recursive element doesn't exist, we should create it
                // User should have a base case specified, so if we get here, 
                // then we will definitely want to create it.
                if (!this.recursiveElement) {
                    this.recursiveElement = (_a = this.findRecursiveElem(this.options.recurseOn, this.parent)) === null || _a === void 0 ? void 0 : _a.cloneWithNewId();
                }
                return (_b = this.recursiveElement) === null || _b === void 0 ? void 0 : _b.buildJSONForm(showMoveButtons, callbacks);
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
    }
    buildOpenInTabButton(id, buttonText, onClick) {
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
    }
    // Build JSON form input for an Object input
    buildObjectInput(showMoveButtons, callbacks) {
        if (this.options.type != 'object')
            return;
        let allChildren = [];
        let makeTabBtn = (input, btnText, tabTitle) => {
            let openBtn = this.buildOpenInTabButton(this.id + "_OPEN_BTN_" + input.id, btnText, () => {
                callbacks === null || callbacks === void 0 ? void 0 : callbacks.addObjAsTab(input, tabTitle);
            });
            let { up, down } = input.buildMoveButtons(callbacks);
            if (showMoveButtons) {
                return {
                    type: "group",
                    id: this.id + "_MOVE_AND_OPEN_BTNS",
                    container: {
                        style: "display: flex; flex-direction: row; align-items: center; width: 100%;"
                    },
                    show: () => {
                        let a = SHOW_HIDE_MAP[this.id] === undefined ? true : SHOW_HIDE_MAP[this.id];
                        let b = input.show(input);
                        return a && b;
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
        for (const key in this.options.staticKeys) {
            let input = this.options.staticKeys[key];
            let inputType = input.selected();
            let inputForm = null;
            if (inputType && (inputType.options.type == 'object' || inputType.options.type == 'array') && !inputType.options.inline) {
                inputForm = makeTabBtn(input, "Open " + key, input.label + " -- " + key);
            }
            else
                inputForm = input.buildJSONForm(false, callbacks);
            allChildren.push(inputForm);
        }
        for (const key in this.dynamicElems) {
            let input = this.dynamicElems[key];
            input.renderOptions.delete = true;
            input.renderOptions.keyName = key;
            let inputType = input.selected();
            let inputForm = null;
            if (inputType && (inputType.options.type == 'object' || inputType.options.type == 'array') && !inputType.options.inline) {
                showMoveButtons = true;
                inputForm = makeTabBtn(input, "Open " + key, input.label + ' -- ' + key);
            }
            else
                inputForm = input.buildJSONForm(true, callbacks);
            allChildren.push(inputForm);
        }
        // Callback function to add a key to this object
        let addDynamicKey = () => {
            if (this.options.type != 'object')
                return;
            let form = this.obj.getControl(this.formName);
            // Get the key name from the input box and make sure it isn't empty, isn't null, and doesn't already exist
            let keyName = form.data[this.id + "_ADD_KEY_INPUT"];
            // Reset key input
            form.data[this.id + "_ADD_KEY_INPUT"] = "";
            if (keyName == "" || !keyName)
                return;
            if (!this.options.dynamicKeys)
                return;
            // Clone dynamic keys input element, add it to this object instance, and re render
            let newItem = this.options.dynamicKeys.cloneWithNewId();
            newItem.expandOneRecursionLevel();
            newItem.buildJSONForm(true, callbacks);
            this.dynamicElems[keyName] = newItem;
            callbacks === null || callbacks === void 0 ? void 0 : callbacks.reRender();
        };
        let items = [];
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
            show: () => { return SHOW_HIDE_MAP[this.id] === undefined ? true : SHOW_HIDE_MAP[this.id]; },
            items: allChildren,
        };
    }
    // Build JSON form element from array input
    buildArrayInput(callbacks) {
        if (this.options.type != 'array')
            return;
        let value = this.options.arrayInput;
        // Helper function to take an instance of Input and wrap it in a JSON form row (rows have buttons to delete)
        let injectIntoRow = (input) => {
            let inputForm = input.buildJSONForm(true, callbacks);
            let id = "ARRAY_ROW_" + uuidv4();
            return {
                type: "group",
                show: () => { return SHOW_HIDE_MAP[id] === undefined ? true : SHOW_HIDE_MAP[id]; },
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
        let makeArrayRow = () => {
            let input = value.cloneWithNewId();
            this.allArrayElems[input.id] = input;
            callbacks === null || callbacks === void 0 ? void 0 : callbacks.reRender();
        };
        return {
            type: "group",
            id: this.id,
            container: {
                style: "; width: 100%;display: flex; flex-direction: row; flex-flow: wrap; box-sizing: border-box;"
            },
            show: () => { return SHOW_HIDE_MAP[this.id] === undefined ? true : SHOW_HIDE_MAP[this.id]; },
            items: [
                // allArrayElems are Input instances, so we need to map those to JSON forms
                ...Object.values(this.allArrayElems).map(injectIntoRow),
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
            ]
        };
    }
    // Build input for "simple" values (number, bool, string, function)
    buildSimpleInput(editType) {
        let input = {
            type: editType,
            id: this.id,
            data: {
                from: this.id,
                ensure: true,
            },
            show: () => { return SHOW_HIDE_MAP[this.id] === undefined ? true : SHOW_HIDE_MAP[this.id]; },
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
    }
    buildDropdownInput() {
        if (this.options.type != 'dropdown')
            return;
        let dropdown = {
            type: "picker",
            id: this.id,
            data: {
                from: this.id,
                ensure: true,
            },
            show: () => { return SHOW_HIDE_MAP[this.id] === undefined ? true : SHOW_HIDE_MAP[this.id]; },
            control: {
                placeholder: "",
                data: {
                    src: this.options.dropdownItems,
                    map: ["value", "text"],
                },
                onChange: (change) => {
                    if (this.options.type != 'dropdown')
                        return;
                    if (this.options.onChange) {
                        this.options.onChange(change, this);
                    }
                }
            },
            container: {
                style: "; flex: 1 1;",
            }
        };
        return dropdown;
    }
}
// Class to handle an input for an *abstract* value.
// For example, we may want an input to handle a shipping address. 
// The exact information we need for that may vary by state or country. 
// However, we are collecting the same abstract thing: a shipping address. 
// So, we would create an Input with a 'shipping address' label, then add multiple 
// values to encompass all of the options a user might need to input their address.
// That is the core difference between this and the Value class. 
// Input = abstract thing or piece of data, Value = literal JSON value that can be entered into the form
class Input {
    constructor(options) {
        var _a;
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
        let validateTypes = (t) => {
            if (!(t instanceof Array))
                throw new Error("Expected 'values' to be an Array");
            if (t.length == 0)
                throw new Error("Expected 'values' to have at least one element");
            for (const item of t) {
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
            this.onPopulate = typeCheck(options.onPopulate, 'function', 'options.onPopulate should be a function');
        }
        else {
            this.onPopulate = undefined;
        }
        // If show is undefined, just default to true
        this.show = options.show ? typeCheck(options.show, 'function', 'options.show should be a function') : (() => true);
        this.onPopulate = (_a = options.onPopulate) !== null && _a !== void 0 ? _a : undefined;
        this.mapSerialized = options.mapSerialized;
        this.name = options.name;
    }
    // Helper function to return a 'values' array (used in the Input description) with a single value 
    // Takes value, an instance of the Value object
    static singleValue(value) {
        return [{
                value: value,
                dropdownLabel: ''
            }];
    }
    // Helper function to return an input that has just a single Value in the values array 
    // Takes a type string (object, array, number, etc)
    // Takes a label, used for the input
    // Takes options, which are used in the Value constructor (so you could pass in the object description, etc)
    // Takes show, a callback function, defaults to return true
    static singleInput(type, label, valueOptions, inputOptions) {
        var _a, _b, _c, _d;
        let valOps = valueOptions ? valueOptions : {
            type: type,
        };
        let inputOps = {
            name: inputOptions === null || inputOptions === void 0 ? void 0 : inputOptions.name,
            label: label,
            comments: (_a = inputOptions === null || inputOptions === void 0 ? void 0 : inputOptions.comments) !== null && _a !== void 0 ? _a : '',
            values: [],
            validate: (_b = inputOptions === null || inputOptions === void 0 ? void 0 : inputOptions.validate) !== null && _b !== void 0 ? _b : (() => true),
            show: (_c = inputOptions === null || inputOptions === void 0 ? void 0 : inputOptions.show) !== null && _c !== void 0 ? _c : (() => true),
            onPopulate: (_d = inputOptions === null || inputOptions === void 0 ? void 0 : inputOptions.onPopulate) !== null && _d !== void 0 ? _d : (() => { }),
            mapSerialized: inputOptions === null || inputOptions === void 0 ? void 0 : inputOptions.mapSerialized
        };
        return new Input({
            values: [{ value: new Value(type, valOps), dropdownLabel: '' }],
            label: label,
            comments: inputOps.comments,
            validate: inputOps.validate,
            show: inputOps.show,
            onPopulate: inputOps.onPopulate,
            mapSerialized: inputOptions === null || inputOptions === void 0 ? void 0 : inputOptions.mapSerialized,
            name: inputOps.name
        });
    }
    // Set the parent of this object and recursivley set parents of all children
    setParent(parent) {
        this.parent = parent;
        for (const item of this.values) {
            item.value.setParent(this);
        }
    }
    // Set the dialog object and form name for this and all children
    setObjAndFormName(obj, formName) {
        this.obj = obj;
        this.formName = formName;
        for (const item of this.values) {
            item.value.setObjAndFormName(obj, formName);
        }
    }
    // Return a JSON object representing the data in this class
    serialize() {
        try {
            let value = this.childMap[this.currDropdownValue].serialize();
            this.validate(value);
            if (this.mapSerialized) {
                value = this.mapSerialized(value);
            }
            return value;
        }
        catch (e) {
            let errMsg = `<p>Errors while attempting to serialize input <b>${this.label}</b>:</p>`;
            errMsg += '<div style = "margin-left: 1rem;">';
            errMsg += e.toString();
            errMsg += "</div>";
            throw errMsg;
        }
    }
    // Return input corresponding to selected dropdown element
    selected() {
        return this.childMap[this.currDropdownValue];
    }
    propagateDefaults(hasDefault, val) {
        for (const item of this.values) {
            item.value.propagateDefaults(hasDefault, val);
        }
    }
    preprocess(obj, formName, parent) {
        this.setParent(parent);
        this.setObjAndFormName(obj, formName);
        this.propagateDefaults(false, undefined);
    }
    // Similar to the method in Value. 
    // Clone this object with a new ID, and carry across the options specified. 
    // Children are also cloned with a new ID. 
    cloneWithNewId() {
        var _a;
        let newOptions = {
            values: [],
            label: this.label,
            comments: this.comments,
            validate: this.validate,
            show: this.show,
            onPopulate: (_a = this.onPopulate) !== null && _a !== void 0 ? _a : ((_1, _2) => { }),
            mapSerialized: this.mapSerialized,
            name: this.name
        };
        for (const value of this.values) {
            newOptions.values.push({
                value: value.value.cloneWithNewId(),
                dropdownLabel: value.dropdownLabel,
            });
        }
        let i = new Input(newOptions);
        i.renderOptions = JSON.parse(JSON.stringify(this.renderOptions));
        i.setParent(this.parent);
        i.setObjAndFormName(this.obj, this.formName);
        return i;
    }
    expandOneRecursionLevel() {
        for (const valuedef of this.values) {
            valuedef.value.expandOneRecursionLevel();
        }
    }
    // Return a JSON object that can be used to set the JSON Form data.
    // 'data' should be a JSON object or value.
    getPopulateDataFromObj(data) {
        // Loop through value definitions, searching for one that matches the data 
        // If none accept, return with false
        let recentErrs = {};
        for (const valuedef of this.values) {
            // getPopulateDataFromObj can throw an error, but we don't want to instantly return failure in that case. 
            // Instead we want to try and find at least one that doesn't fail, and use that.
            try {
                let d = valuedef.value.getPopulateDataFromObj(data);
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
        let errMsg = `<p>Errors while attempting to parse input <b>${this.label}</b>:</p>`;
        errMsg += '<div style = "margin-left: 1rem;">';
        for (const valuedef of this.values) {
            if (valuedef.dropdownLabel != '')
                errMsg += `<p>For dropdown <b>${valuedef.dropdownLabel} </b></p>`;
            errMsg += recentErrs[valuedef.dropdownLabel].toString();
        }
        errMsg += "</div>";
        throw errMsg;
    }
    getPopulateData() {
        let d = {};
        d[this.dropdownId] = this.currDropdownValue;
        for (const prop in this.childMap) {
            Object.assign(d, this.childMap[prop].getPopulateData());
        }
        return d;
    }
    // Helper function to select one of the dropdown values and update child visibility.
    setDropdown(changeInfo) {
        let changedTo = changeInfo.item.data;
        for (const dropdownLabel in this.childMap) {
            if (dropdownLabel == changedTo) {
                SHOW_HIDE_MAP[this.childMap[dropdownLabel].id] = true;
            }
            else {
                SHOW_HIDE_MAP[this.childMap[dropdownLabel].id] = false;
            }
        }
        let form = this.obj.getControl(this.formName);
        form.data[this.dropdownId] = changedTo;
        this.obj.setValue(this.formName, this.obj.getValue(this.formName));
        this.currDropdownValue = changedTo;
    }
    // Return a JSON Form object based on this object instance
    buildJSONForm(showMoveBtns = false, callbacks) {
        let childForms = [];
        // We clear the child map in case children were removed (i.e. an Array element was deleted).
        // It will be re populated in the below loop anyway.
        this.childMap = {};
        let first = true;
        for (const item of this.values) {
            // Push each child's form to the child array
            let component = item.value.buildFormInput(showMoveBtns, callbacks);
            childForms.push(component);
            // Don't want multiple children with the same label. 
            // Alt. option is to just overwrite or something but silent failure will likely come back to haunt us.
            if (this.childMap[item.dropdownLabel]) {
                throw new Error(`Multiple components with same dropdown label (${item.dropdownLabel}`);
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
        let textToVal = [];
        for (const label in this.childMap) {
            textToVal.push({ text: label, value: label });
        }
        // Callback for when the user selects a new dropdown option
        let onChange = (info) => {
            this.setDropdown(info);
        };
        let header = this.makeHeader(textToVal, onChange, childForms, showMoveBtns, callbacks);
        return header;
    }
    // Helper function to create a JSON Form group with a dropdown element placed in the upper right corner
    makeHeader(textToValue, onChange, children, showMoveBtns, callbacks) {
        let init = textToValue[0].value;
        let dropdown = {
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
        let collapse = {
            type: "button",
            id: this.id + "_COLLAPSE_BTN",
            control: {
                layout: "icon",
                html: `<span class="" style="" id="${this.id + '_COLLAPSE_ICON'}"></span>`,
                icon: "svgIcon=#alpha-icon-chevronRight:icon,24",
                onClick: () => {
                    SHOW_HIDE_MAP[this.id + "_CHILDREN"] = !SHOW_HIDE_MAP[this.id + "_CHILDREN"];
                    this.obj.setValue(this.formName, this.obj.getValue(this.formName));
                    let rotation = SHOW_HIDE_MAP[this.id + '_CHILDREN'] ? 'rotate(90deg)' : 'rotate(0deg)';
                    document
                        .getElementsByClassName(this.id + '_COLLAPSE_ICON')[0]
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
        let deleteBtn = {
            type: 'button',
            id: this.id + "_DELETE_BTN",
            control: {
                layout: 'icon',
                icon: 'svgIcon=#alpha-icon-trash:icon,24',
                onClick: () => {
                    let parent = this.parent;
                    if (parent) {
                        let selected = parent.selected();
                        if (selected.options.type == 'array') {
                            delete selected.allArrayElems[this.id];
                        }
                        else if (selected.options.type == 'object') {
                            delete selected.dynamicElems[this.renderOptions.keyName];
                            callbacks === null || callbacks === void 0 ? void 0 : callbacks.deleteTab(this.id, true);
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
        let label = {
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
        let keyName = {
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
        let comments = {
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
        let barItems = [];
        if (this.renderOptions.collapse)
            barItems.push(collapse);
        if (this.renderOptions.delete)
            barItems.push(deleteBtn);
        let { up, down } = this.buildMoveButtons(callbacks);
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
            show: () => {
                let a = SHOW_HIDE_MAP[this.id] === undefined ? true : SHOW_HIDE_MAP[this.id];
                let b = this.show(this);
                return a && b;
            },
            // Multiple input values => display the dropdown options 
            // Single input value => do not display the dropdown options
            items: [
                {
                    type: 'group',
                    id: this.id + "_HEADER",
                    container: {
                        style: `; 
							width: 95%; 
							display: flex;
							flex-direction: row; 
							box-sizing: border-box;
							background-color: #eaeaea;
							align-items: center;
							border: 1px solid black;
							flex-wrap: wrap;
						`
                    },
                    items: barItems,
                },
                {
                    type: 'group',
                    show: () => {
                        return SHOW_HIDE_MAP[this.id + "_CHILDREN"] === undefined ? true : SHOW_HIDE_MAP[this.id + "_CHILDREN"];
                    },
                    id: this.id + "_CHILDREN",
                    container: {
                        style: `;
							width: 95%;
							border: 1px solid black;
							border-top: none;
							box-sizing: border-box;
						`
                    },
                    items: children,
                }
            ]
        };
    }
    buildMoveButtons(callbacks) {
        let moveBtnTemplate = (dir) => {
            let icon = dir == 'UP' ? 'chevronUp' : 'chevronDown';
            return {
                type: 'button',
                id: this.id + "_MOVE_" + dir + '_BTN',
                control: {
                    layout: 'icon',
                    icon: 'svgIcon=#alpha-icon-' + icon + ':icon,24',
                    onClick: () => {
                        var _a;
                        let valContainer = (_a = this.parent) === null || _a === void 0 ? void 0 : _a.selected();
                        if (valContainer == undefined)
                            return;
                        let move = (keys, key) => {
                            let idx = keys.indexOf(key);
                            if (idx >= 0) {
                                if (dir == 'UP' && idx > 0) {
                                    let tmp = keys[idx - 1];
                                    keys[idx - 1] = keys[idx];
                                    keys[idx] = tmp;
                                }
                                else if (dir == 'DOWN' && idx < keys.length - 1) {
                                    let tmp = keys[idx + 1];
                                    keys[idx + 1] = keys[idx];
                                    keys[idx] = tmp;
                                }
                            }
                        };
                        let reorderObj = (keys, original) => {
                            let newObj = {};
                            for (const id of keys)
                                newObj[id] = original[id];
                            return newObj;
                        };
                        if (valContainer.options.type == 'array') {
                            let valKeys = Object.keys(valContainer.allArrayElems);
                            move(valKeys, this.id);
                            valContainer.allArrayElems = reorderObj(valKeys, valContainer.allArrayElems);
                        }
                        else if (valContainer.options.type == 'object') {
                            let valKeys = Object.keys(valContainer.dynamicElems);
                            let vals = Object.values(valContainer.dynamicElems);
                            let idx = -1;
                            for (let i = 0; i < vals.length; i++) {
                                if (this.id == vals[i].id) {
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
    }
}
// Given obj (dialog.object), the form name, and a config object (instance of Input or Value), 
// build and render a JSON Form.
function buildFromConfig(obj, formName, configObj, listName, otherItems) {
    configObj.preprocess(obj, formName);
    if (!obj.stateInfo)
        obj.stateInfo = {};
    // ID -> Input Object
    let tabPanes = {};
    // Navigation Stack (empty means default tab)
    let tabStack = [];
    // Callback to re render form. Saves current form data and restores it after re rendering.
    let reRender = () => {
        configObj.setParent();
        let oldData = configObj.getPopulateData();
        let form = {};
        try {
            form = makeTabGroup(tabPanes, tabStack, obj, obj.styleName, allFormCallbacks, configObj.id);
        }
        catch (e) {
            displayErrorMessage(e.toString());
        }
        renderForm(obj, formName, [form, otherItems]);
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
            let last = tabStack[tabStack.length - 1];
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
    let allFormCallbacks = {
        reRender: reRender,
        addObjAsTab: addObjAsTab,
        deleteTab: deleteTab,
    };
    obj.stateInfo.callbacks = allFormCallbacks;
    tabPanes[configObj.id] = { object: configObj, title: configObj.label };
    let form;
    try {
        // Don't need the form, but this sets some necessary information regarding dropdowns and child forms
        configObj.buildJSONForm();
        form = makeTabGroup(tabPanes, tabStack, obj, obj.styleName, allFormCallbacks, configObj.id);
    }
    catch (e) {
        displayErrorMessage(e.toString());
        form = {};
    }
    renderForm(obj, formName, [form, otherItems]);
    return reRender;
}
// Helper function to populate the form given an existing JSON object representing the data
function populateFromData(obj, formName, input, reRender, data) {
    try {
        let d = input.getPopulateDataFromObj(data);
        obj.setValue(formName, JSON.stringify(d));
    }
    catch (e) {
        displayErrorMessage(e.toString());
        console.error(e);
    }
    reRender();
}
function makeTabGroup(tabPaneObjs, tabStack, obj, style, callbacks, mainId) {
    let panes = [];
    let defaultId = undefined;
    let navTo = tabStack.length > 0 ? tabStack[tabStack.length - 1] : mainId;
    for (let id in tabPaneObjs) {
        let inner = tabPaneObjs[id].object.buildJSONForm(false, callbacks);
        let pane = wrapInTab(inner, tabPaneObjs[id].title, id, mainId, obj);
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
    let inner;
    // Change in requirement means that we no longer want to x out tabs. But this code may be useful in the future.
    /* if (id == mainId) inner = title;
    else inner = `
        <div style="display: flex; flex-direction: row; align-items: center; justify-content: center;">
            <button onclick="${obj.dialogId + '_DlgObj'}.stateInfo.callbacks.deleteTab('${id}');" style = "padding: 0px; height: 1.5em; width: 1.5em; margin-right: .5rem;"> X </button>
            <p>${title}</p>
        </div>
    `; */
    inner = `
		<div onclick="${obj.dialogId + '_DlgObj'}.stateInfo.callbacks.deleteTab('${id}');">
			<p>${title}</p>
		</div>
	`;
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
