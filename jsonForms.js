"use strict";
// Mapping from ID to boolean so components can look up if they are hidden
// My comment is changing
var SHOW_HIDE_MAP = {};
var ENABLED_MAP = {};
class SerializeError extends Error {
    constructor(message) {
        super(message);
        this.message = message;
    }
}
class JsonBuildError extends Error {
    constructor(message) {
        super(message);
        this.message = message;
    }
}
class PopulateError extends Error {
    constructor(message) {
        super(message);
        this.message = message;
    }
}
function lookupShow(id) {
    return SHOW_HIDE_MAP[id] === undefined ? true : SHOW_HIDE_MAP[id];
}
class Form {
    static create(obj, options, formName, otherItems = []) {
        let form = Form.makeFormFromOption(obj, options, undefined, formName);
        form.obj = obj;
        form.otherItems = otherItems;
        form.formName = formName;
        return form;
    }
    constructor(obj, formName) {
        this.id = uuidv4();
        this.formName = '';
        this.otherItems = [];
        this.obj = obj;
        this.id = uuidv4();
        this.formName = formName;
    }
    getId() {
        return this.id;
    }
    static render(form) {
        form.obj.setJSONFormItems(form.formName, [form.buildJsonForm(), ...form.otherItems]);
        form.obj.getControl(form.formName)._formBoxSize = "";
        form.obj.resizeFormBoxes();
    }
    refresh() {
        this.obj.getControl(this.formName).refresh();
    }
    reRender() {
        let oldData = this.obj.getValue(this.formName);
        let root = this.getRoot(this);
        this.obj.setJSONFormItems(this.formName, [root.buildJsonForm(), ...root.otherItems]);
        this.obj.setValue(this.formName, oldData);
        this.obj.getControl(this.formName)._formBoxSize = "";
        this.obj.resizeFormBoxes();
    }
    getRoot(f) {
        if (f.parent)
            return this.getRoot(f.parent);
        return f;
    }
    setParent(parent) {
        this.parent = parent;
    }
    static makeFormFromOption(obj, option, parent, formName) {
        let optCopy = jQuery.extend(true, {}, option);
        let form;
        switch (optCopy.type) {
            case "object":
                form = new ObjectForm(obj, optCopy.options, formName);
                break;
            case "simple":
                form = new SimpleForm(obj, optCopy.options, formName);
                break;
            case "array":
                form = new ArrayForm(obj, optCopy.options, formName);
                break;
            case "recursive":
                form = new RecursiveForm(obj, optCopy.options, formName);
                break;
            case "dropdown":
                form = new DropdownForm(obj, optCopy.options, formName);
                break;
            case "multi":
                form = new MultiForm(obj, optCopy.options, formName);
                break;
            case 'const':
                form = new ConstForm(obj, optCopy.options, formName);
                break;
        }
        form.setParent(parent);
        return form;
    }
    makeInput(options) {
        var _a;
        let bar = (_a = options.beforeBarItems) !== null && _a !== void 0 ? _a : [];
        let id = options.idPrefix + '_' + this.id;
        let className = id + '_HEADER_AND_ELEM_';
        let childContainerId = id + '_CHILDREN';
        if (options.onCollapse)
            bar.push(this.makeCollapseButton(options.onCollapse, childContainerId, id));
        if (options.onDelete)
            bar.push(this.makeDeleteButton(options.onDelete, className, id));
        if (options.onMove)
            bar.push(...this.makeMoveButtons(options.onMove, id));
        if (options.labelText)
            bar.push(this.makeLabel(options.labelText));
        if (options.afterBarItems)
            bar.push(...options.afterBarItems);
        if (options.comments)
            bar.push(this.makeComments(options.comments));
        if (options.inline) {
            return {
                type: 'group',
                id: id + '_LABEL_AND_ELEM',
                container: {
                    style: "width: 100%;display: flex; flex-direction: column; box-sizing: border-box; margin: 0px; padding: 0px; margin-bottom: 0.5rem; margin-top: 0.5rem",
                    className: className
                },
                show: () => lookupShow(id + '_LABEL_AND_ELEM'),
                items: options.children
            };
        }
        if (options.labelOnly && options.labelText) {
            return {
                type: 'group',
                id: id + '_LABEL_AND_ELEM',
                container: {
                    style: "width: 100%;display: flex; flex-direction: column; box-sizing: border-box; margin: 0px; padding: 0px; margin-bottom: 0.5rem; margin-top: 0.5rem",
                    className: className
                },
                show: () => lookupShow(id + '_LABEL_AND_ELEM'),
                items: [
                    {
                        type: 'html',
                        control: {
                            html: options.labelText,
                        },
                        container: {
                            className: '',
                            style: 'margin-top: 1rem; margin-bottom: 0.2rem; font-weight: bold;',
                        },
                        layout: '{content}',
                    },
                    ...options.children
                ]
            };
        }
        return {
            type: "group",
            id: id + '_HEADER_AND_ELEM',
            show: () => lookupShow(id + '_HEADER_AND_ELEM'),
            container: {
                style: "width: 100%;display: flex; flex-direction: column; align-items: center; box-sizing: border-box; margin: 0px; padding: 0px; margin-bottom: 0.5rem; margin-top: 0.5rem",
                className: className
            },
            items: [
                {
                    type: 'group',
                    id: id + "_HEADER",
                    container: {
                        style: `; 
							width: 100%; 
							display: flex;
							flex-direction: row; 
							box-sizing: border-box;
							background-color: #eaeaea;
							align-items: center;
							border: 1px solid black;
							flex-wrap: wrap;
                            padding: .3rem;
						`
                    },
                    items: bar,
                },
                {
                    type: 'group',
                    id: id + "_CHILDREN",
                    show: () => lookupShow(id + '_CHILDREN'),
                    container: {
                        style: `;
							width: 100%;
							border: 1px solid black;
							border-top: none;
							box-sizing: border-box;
                            padding: 1rem;
						`,
                        className: id + '_CHILDREN'
                    },
                    items: options.children,
                }
            ]
        };
    }
    makeComments(comments) {
        return {
            type: 'html',
            control: {
                html: comments,
            },
            container: {
                className: '',
                style: 'width: 100%; background-color: #f5f5f5; margin: 1rem; padding: 1rem; font-style: italic;',
            },
            layout: '{content}',
        };
    }
    makeMoveButtons(onMove, id) {
        let moveBtnTemplate = (dir) => {
            let icon = dir == 'up' ? 'chevronUp' : 'chevronDown';
            return {
                type: 'button',
                id: id + "_MOVE_" + dir + '_BTN',
                control: {
                    layout: 'icon',
                    icon: 'svgIcon=#alpha-icon-' + icon + ':icon,24',
                    onClick: () => {
                        onMove(dir);
                    }
                },
                container: {
                    style: "background: transparent;",
                    className: `CONTEXT_BUTTONS_${id}`
                },
                layout: "{content}"
            };
        };
        return [moveBtnTemplate('up'), moveBtnTemplate('down')];
    }
    makeLabel(text) {
        return {
            type: 'html',
            control: {
                html: text,
            },
            container: {
                className: '',
                style: ';background-color: #eaeaea;',
            },
            layout: '{content}',
        };
    }
    setCollapsed(collapsed, childContainerId, id) {
        // Set container to display or hide
        SHOW_HIDE_MAP[childContainerId] = !collapsed;
        let rotation = collapsed ? '-90deg' : '0deg';
        document.documentElement.style.setProperty(`--${id}-rotation`, rotation);
    }
    makeCollapseButton(onClick, childContainerId, id) {
        let collapse = {
            type: "button",
            id: id + "_COLLAPSE_BTN",
            control: {
                layout: "icon",
                html: `<span class="" style="" id="${id + '_COLLAPSE_ICON'}"></span>`,
                icon: "svgIcon=#alpha-icon-chevronDown:icon,24",
                onClick: () => {
                    var _a;
                    let oldShow = (_a = SHOW_HIDE_MAP[childContainerId]) !== null && _a !== void 0 ? _a : true;
                    SHOW_HIDE_MAP[childContainerId] = !oldShow;
                    onClick();
                    this.setCollapsed(oldShow, childContainerId, id);
                    this.refresh();
                },
            },
            container: {
                style: `background-color: #eaeaea; transform: rotate(var(--${id}-rotation));`,
                className: id + '_COLLAPSE_ICON ' + `CONTEXT_BUTTONS_${id}`
            },
            layout: "{content}"
        };
        if (SHOW_HIDE_MAP[childContainerId] === undefined) {
            this.setCollapsed(true, childContainerId, id);
        }
        return collapse;
    }
    makeDeleteButton(onDelete, elementId, id) {
        let deleteBtn = {
            type: 'button',
            id: id + "_DELETE_BTN",
            control: {
                layout: 'icon',
                icon: 'svgIcon=#alpha-icon-trash:icon,24',
                onClick: () => {
                    // Just hide, don't actually delete the DOM element
                    document.getElementsByClassName(elementId)[0].style.display = 'none';
                    onDelete();
                },
            },
            container: {
                style: "background-color: #eaeaea;",
                className: `CONTEXT_BUTTONS_${id}`
            },
            layout: "{content}"
        };
        return deleteBtn;
    }
}
class SimpleForm extends Form {
    constructor(obj, options, formName) {
        super(obj, formName);
        this.options = options;
    }
    getOptions() {
        return { type: 'simple', options: this.options };
    }
    serialize() {
        let form = this.obj.getControl(this.formName);
        let val = form.data[this.id];
        if (val === undefined && this.options.default === undefined) {
            throw new SerializeError("No value was supplied and field does not have a default value.");
        }
        else if (val === undefined) {
            return this.options.default;
        }
        switch (this.options.type) {
            case "string": return val;
            case "number": return parseFloat(val);
            case "boolean": return Boolean(val);
            case "function": {
                let evaluated = eval(val);
                if (typeof evaluated != 'function')
                    throw new SerializeError("A JavaScript string was supplied, but it did not evaluate to a function.");
                return evaluated;
            }
        }
    }
    buildJsonForm() {
        let editType;
        switch (this.options.type) {
            case "function":
            case "string":
            case "number":
                editType = 'edit';
                break;
            case "boolean":
                editType = 'checkbox';
                break;
        }
        let input = {
            type: editType,
            id: this.id,
            data: {
                from: this.id,
                ensure: true
            },
            container: {
                style: "; flex: 1 1;",
                className: ""
            }
        };
        return this.makeInput({
            children: [input],
            labelText: this.options.label,
            labelOnly: true,
            idPrefix: ""
        });
    }
    initializeWithData(data) {
        if (data === undefined && this.options.default === undefined) {
            throw new PopulateError("Data is empty and no default value is specified for this field.");
        }
        let d = {};
        if (this.options.type == 'function' && typeof data == 'function') {
            d[this.id] = data.toString();
            return d;
        }
        if (this.options.type == 'function' && typeof data == 'string') {
            d[this.id] = data;
            return d;
        }
        if (typeof data != this.options.type) {
            throw new PopulateError("Data type does not match declared type.");
        }
        d[this.id] = data;
        return d;
    }
}
class ObjectForm extends Form {
    constructor(obj, options, formName) {
        super(obj, formName);
        this.options = options;
        this.entries = {};
    }
    getOptions() {
        return { type: 'object', options: this.options };
    }
    serialize() {
        let result = {};
        for (const key in this.entries) {
            let checkId = this.getOptionalCheckId(key);
            if (ENABLED_MAP[checkId] === false)
                continue;
            result[key] = this.entries[key].serialize();
        }
        if (this.options.mapSerialized) {
            result = this.options.mapSerialized(result);
        }
        return result;
    }
    buildJsonForm() {
        var _a, _b;
        let allChildren = [];
        for (const key in this.entries) {
            let form = this.entries[key].buildJsonForm();
            let label = this.entries[key].getOptions().options.label;
            let onDelete = undefined;
            let itemIsStatic = key in this.options.requiredKeys || key in ((_a = this.options.optionalKeys) !== null && _a !== void 0 ? _a : {});
            if (!itemIsStatic) {
                let onDelete = () => {
                    delete this.entries[key];
                    this.reRender();
                };
                label = key;
            }
            let input = this.makeInput({
                children: [form],
                onCollapse: () => { },
                onDelete: onDelete,
                labelText: label,
                inline: this.options.inlineKeys === true,
                idPrefix: key
            });
            let optional = key in ((_b = this.options.optionalKeys) !== null && _b !== void 0 ? _b : {});
            if (optional) {
                input = this.wrapInOptional(input, key);
            }
            allChildren.push(input);
        }
        if (this.options.newKeyTemplate !== undefined) {
            allChildren.push(...[
                {
                    type: "button",
                    id: this.id + "_ADD_KEY_BTN",
                    control: {
                        layout: "text",
                        html: "<span class=\"\" style=\"\">Add Key</span>",
                        icon: "",
                        onClick: () => {
                            let form = this.obj.getControl(this.formName);
                            let keyName = form.data[this.id + '_ADD_KEY_INPUT'];
                            form.data[this.id + '_ADD_KEY_INPUT'] = '';
                            if (keyName == "" || !keyName)
                                return;
                            if (this.options.newKeyTemplate) {
                                this.options.newKeyTemplate.definition.options.label = keyName;
                                this.entries[keyName] = Form.makeFormFromOption(this.obj, this.options.newKeyTemplate.definition, this, this.formName);
                                this.entries[keyName].initializeWithData(this.options.newKeyTemplate.defaultValue);
                                this.reRender();
                            }
                        },
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
            ]);
        }
        return {
            type: "group",
            id: this.id,
            show: lookupShow(this.id),
            container: {
                style: "; width: 100%;display: flex; flex-direction: row; flex-flow: wrap; box-sizing: border-box;"
            },
            items: allChildren,
        };
    }
    getOptionalCheckId(key) {
        return this.id + '_' + key + '_ENABLED';
    }
    wrapInOptional(item, key) {
        let id = this.getOptionalCheckId(key);
        let check = {
            type: 'checkbox',
            id: id,
            data: {
                from: id,
                ensure: true,
                blank: ENABLED_MAP[id] !== false
            },
            control: {
                onChange: (e) => {
                    let checked = e.item.data;
                    ENABLED_MAP[id] = checked;
                    SHOW_HIDE_MAP[id + '_WRAPPER'] = checked;
                    this.refresh();
                },
            },
            container: {
                style: "background: transparent;"
            }
        };
        let group1 = {
            type: 'group',
            container: {
                style: '; width: 100%; display: flex; flex-direction: row; box-sizing: border-box;'
            },
            items: [
                {
                    type: 'html',
                    control: {
                        html: `Field ${key} is optional. Enable?`,
                    },
                    container: {
                        className: '',
                        style: ';background-color: transparent;',
                    },
                    layout: '{content}',
                },
                check
            ]
        };
        let group2 = {
            type: 'group',
            id: id + '_WRAPPER',
            show: () => lookupShow(id + '_WRAPPER'),
            items: [item],
            container: {
                className: id + '_WRAPPEr'
            },
        };
        SHOW_HIDE_MAP[id + '_WRAPPER'] = ENABLED_MAP[this.getOptionalCheckId(key)];
        return {
            type: 'group',
            container: {
                style: '; width: 100%; '
            },
            items: [
                group1, group2
            ]
        };
    }
    initializeWithData(data) {
        if (typeof data != 'object')
            throw new PopulateError("Cannot populate object with non-object data.");
        if (this.options.onPopulate) {
            this.options.onPopulate(data, this);
        }
        this.entries = {};
        let populateData = {};
        let viewedKeys = new Set();
        for (const key in this.options.requiredKeys) {
            viewedKeys.add(key);
            let newEntry = Form.makeFormFromOption(this.obj, this.options.requiredKeys[key], this, this.formName);
            this.entries[key] = newEntry;
            Object.assign(populateData, newEntry.initializeWithData(data[key]));
        }
        for (const key in this.options.optionalKeys) {
            viewedKeys.add(key);
            let opt = this.options.optionalKeys[key];
            opt.definition.options.label = key;
            let d = (key in data) ? data[key] : opt.defaultValue;
            let newEntry = Form.makeFormFromOption(this.obj, opt.definition, this, this.formName);
            this.entries[key] = newEntry;
            Object.assign(populateData, newEntry.initializeWithData(d));
            // The key wasn't supplied, so set the initial optional state to no
            if (!(key in data)) {
                ENABLED_MAP[this.getOptionalCheckId(key)] = false;
            }
        }
        for (const key in data) {
            if (viewedKeys.has(key))
                continue;
            if (this.options.newKeyTemplate === undefined)
                throw new PopulateError("New key template is undefined.");
            let newEntry = Form.makeFormFromOption(this.obj, this.options.newKeyTemplate.definition, this, this.formName);
            this.entries[key] = newEntry;
            Object.assign(populateData, newEntry.initializeWithData(data[key]));
        }
        return populateData;
    }
}
class RecursiveForm extends Form {
    constructor(obj, options, formName) {
        super(obj, formName);
        this.options = options;
    }
    getOptions() {
        return { type: 'recursive', options: this.options };
    }
    serialize() {
        if (this.recursiveElement) {
            return this.recursiveElement.serialize();
        }
        else {
            throw new Error("Tried to serialize a recursive element that hasn't been initialized.");
        }
    }
    buildJsonForm() {
        if (!this.recursiveElement)
            throw new JsonBuildError("Cannot build JSON form from uninitialized Recursive form.");
        return this.recursiveElement.buildJsonForm();
    }
    initializeWithData(data) {
        let recElemOps = this.searchForRecOptions(this.parent);
        if (recElemOps) {
            this.recursiveElement = Form.makeFormFromOption(this.obj, recElemOps, this, this.formName);
            return this.recursiveElement.initializeWithData(data);
        }
        throw new PopulateError("Unable to find named item " + this.options.recurseOn);
    }
    searchForRecOptions(f) {
        if (f === undefined)
            return null;
        if (f.getOptions().options.name === this.options.recurseOn)
            return f.getOptions();
        return this.searchForRecOptions(f.parent);
    }
}
class ArrayForm extends Form {
    constructor(obj, options, formName) {
        super(obj, formName);
        this.options = options;
        this.entries = [];
    }
    getOptions() {
        return { type: 'array', options: this.options };
    }
    serialize() {
        let results = [];
        this.entries.forEach(f => results.push(f.serialize()));
        if (results.length == 0 && this.options.allowEmpty === false) {
            throw new SerializeError("Array is not allowed to be empty.");
        }
        return results;
    }
    buildJsonForm() {
        let arrayEntries = [];
        this.entries.forEach((form, index) => {
            arrayEntries.push(this.makeInput({
                children: [form.buildJsonForm()],
                labelText: form.getOptions().options.label,
                idPrefix: 'ARRAY_ELEM_' + index,
                onCollapse: () => { },
                onDelete: () => {
                    this.entries.splice(index, 1);
                    this.reRender();
                },
                onMove: (dir) => {
                    if (dir == 'up') {
                        if (index == 0)
                            return;
                        let tmp = this.entries[index - 1];
                        this.entries[index - 1] = this.entries[index];
                        this.entries[index] = tmp;
                        this.reRender();
                    }
                    else {
                        if (index == this.entries.length - 1)
                            return;
                        let tmp = this.entries[index + 1];
                        this.entries[index + 1] = this.entries[index];
                        this.entries[index] = tmp;
                        this.reRender();
                    }
                }
            }));
        });
        return this.makeInput({
            children: [
                // allArrayElems are Input instances, so we need to map those to JSON forms
                ...arrayEntries,
                {
                    type: "button",
                    id: this.id + "_ADD_BTN",
                    control: {
                        layout: "icon",
                        html: "<span class=\"\" style=\"\"></span>",
                        icon: "svgIcon=#alpha-icon-addCircleBorder:icon,24",
                        onClick: () => {
                            let newItem = Form.makeFormFromOption(this.obj, this.options.itemTemplate, this, this.formName);
                            newItem.initializeWithData(this.options.defaultValue);
                            this.entries.push(newItem);
                            this.reRender();
                        },
                    },
                    container: {
                        style: ";",
                        className: ""
                    },
                    layout: "{content}"
                }
            ],
            labelText: this.options.label,
            idPrefix: ''
        });
    }
    initializeWithData(data) {
        if (!(data instanceof Array))
            throw new PopulateError("Data is not an array.");
        this.entries = [];
        let d = {};
        for (const elem of data) {
            let newForm = Form.makeFormFromOption(this.obj, this.options.itemTemplate, this, this.formName);
            this.entries.push(newForm);
            Object.assign(d, newForm.initializeWithData(elem));
        }
        return d;
    }
}
class DropdownForm extends Form {
    constructor(obj, options, formName) {
        super(obj, formName);
        this.options = options;
    }
    getOptions() {
        return { type: 'dropdown', options: this.options };
    }
    serialize() {
        let form = this.obj.getControl(this.formName);
        let val = form.data[this.id];
        if (val === undefined && this.options.default !== undefined) {
            return this.options.default;
        }
        else if (val === undefined) {
            throw new SerializeError("No value was supplied and field does not specify a default value.");
        }
        return val;
    }
    buildJsonForm() {
        let dropdown = {
            type: "picker",
            id: this.id,
            data: {
                from: this.id,
                ensure: true,
            },
            control: {
                placeholder: "",
                data: {
                    src: this.options.dropdownItems,
                    map: ["value", "text"],
                },
                onChange: (change) => {
                    console.log("todo");
                }
            },
            container: {
                style: "; flex: 1 1;",
            }
        };
        return this.makeInput({
            children: [dropdown],
            labelText: this.options.label,
            idPrefix: ''
        });
    }
    initializeWithData(data) {
        if (data === undefined && this.options.default === undefined)
            throw new PopulateError("Data is not defined and no default is specified.");
        if (typeof data != 'string')
            throw new PopulateError("Cannot populate dropdown with non-string.");
        let d = {};
        d[this.id] = data !== null && data !== void 0 ? data : this.options.default;
        return d;
    }
}
class MultiForm extends Form {
    constructor(obj, options, formName) {
        let keys = Object.keys(options.definitions);
        if (keys.length == 0)
            throw new Error("MultiForm must have at least one option.");
        super(obj, formName);
        this.dropdownId = uuidv4();
        this.options = options;
    }
    getOptions() {
        return { type: 'multi', options: this.options };
    }
    serialize() {
        var _a, _b;
        return (_b = (_a = this.element) === null || _a === void 0 ? void 0 : _a.serialize()) !== null && _b !== void 0 ? _b : {};
    }
    buildJsonForm() {
        if (!this.element)
            return {};
        let textToVal = Object.keys(this.options.definitions).map(k => { return { text: k, value: k }; });
        let init = textToVal[0].value;
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
                    src: textToVal,
                    map: ["value", "text"],
                },
                onChange: (e) => {
                    let newKey = e.item.data;
                    if (newKey && newKey in this.options.definitions) {
                        let newElem = Form.makeFormFromOption(this.obj, this.options.definitions[newKey].definition, this, this.formName);
                        newElem.initializeWithData(this.options.definitions[newKey].defaultValue);
                        this.element = newElem;
                        this.reRender();
                    }
                },
            },
            container: {
                style: "min-width: 100px; background-color: #eaeaea; margin-left: auto;",
            }
        };
        return this.makeInput({
            children: [this.element.buildJsonForm()],
            afterBarItems: [dropdown],
            idPrefix: ''
        });
    }
    initializeWithData(data) {
        let errs = {};
        let correctKey = undefined;
        for (const key in this.options.definitions) {
            let elem = Form.makeFormFromOption(this.obj, this.options.definitions[key].definition, this, this.formName);
            try {
                elem.initializeWithData(data);
                correctKey = key;
                break;
            }
            catch (e) {
                if (e instanceof PopulateError) {
                    errs[key] = e;
                }
                else {
                    throw e;
                }
            }
        }
        if (correctKey) {
            let newElem = Form.makeFormFromOption(this.obj, this.options.definitions[correctKey].definition, this, this.formName);
            this.element = newElem;
            let d = {};
            d[this.dropdownId] = correctKey;
            Object.assign(d, newElem.initializeWithData(data));
            return d;
        }
        throw new PopulateError(errs);
    }
}
class ConstForm extends Form {
    constructor(obj, options, formName) {
        super(obj, formName);
        this.options = options;
    }
    serialize() {
        return this.options.value;
    }
    buildJsonForm() {
        return {};
    }
    initializeWithData(data) {
        return {};
    }
    getOptions() {
        return { type: 'const', options: this.options };
    }
}
