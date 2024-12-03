"use strict";
// https://stackoverflow.com/questions/105034/how-do-i-create-a-guid-uuid
function uuidv4() {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, function (c) {
        return (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16);
    });
}
var FormBuilder = /** @class */ (function () {
    function FormBuilder(obj, formName) {
        this.obj = obj;
        this.formName = formName;
        this.root = new FormGroup();
    }
    FormBuilder.prototype.withElement = function (element) {
        this.root.withChild(element);
        return this;
    };
    FormBuilder.prototype.render = function () {
        var items = [this.root.getJSON()];
        A5.u.json.postparse(items);
        this.obj.setJSONFormItems(this.formName, items);
        this.obj.getControl(this.formName)._formBoxSize = "";
        this.obj.resizeFormBoxes();
    };
    return FormBuilder;
}());
var FormGroup = /** @class */ (function () {
    function FormGroup() {
        this.children = [];
        this.style = 'display: flex; flex-direction: row; flex-flow: wrap;';
        this.layout = '';
        this.id = uuidv4() + '_GROUP';
    }
    FormGroup.prototype.withStyle = function (style) {
        this.style = style;
        return this;
    };
    FormGroup.prototype.withLayout = function (layout) {
        this.layout = layout;
        return this;
    };
    FormGroup.prototype.withChildren = function (children) {
        var _a;
        (_a = this.children).push.apply(_a, children);
        return this;
    };
    FormGroup.prototype.withChild = function (child) {
        this.children.push(child);
        return this;
    };
    FormGroup.prototype.getJSON = function () {
        return {
            type: 'group',
            id: this.id,
            container: {
                style: this.style,
            },
            layout: this.layout,
            items: this.children.map(function (c) { return c.getJSON(); }),
        };
    };
    return FormGroup;
}());
var FormInput = /** @class */ (function () {
    function FormInput() {
        this.type = 'edit';
        this.control = {
            placeholder: '',
            width: '100%',
        };
        this.id = uuidv4() + '_INPUT';
        this.style = ';flex: 1 1;';
        this.layout = '';
        this.label = '';
        this.variable = undefined;
        this.format = undefined;
    }
    FormInput.prototype.withStyle = function (style) {
        this.style = style;
        return this;
    };
    FormInput.prototype.withLabel = function (label) {
        this.label = label;
        return this;
    };
    FormInput.prototype.withVariable = function (variable) {
        this.variable = variable;
        return this;
    };
    FormInput.prototype.withLayout = function (layout) {
        this.layout = layout;
        return this;
    };
    FormInput.prototype.asDateTime = function (format) {
        this.type = 'picker';
        this.control.picker = {
            type: 'date-time',
            format: objDatetimeFormat(),
        };
        this.control.behavior = {
            show: { mode: '' }
        };
        this.format = function (v, dObj) {
            if (v) {
                var fmtIn = objDatetimeFormat();
                var fmtOut = format ? format : objDatetimeFormat();
                var d = new Date();
                d.fromFormat(v, fmtIn);
                return d.toFormat(fmtOut);
            }
        };
        return this;
    };
    FormInput.prototype.asTime = function (format) {
        this.type = 'picker';
        this.control.picker = {
            type: 'date-time',
            format: objDatetimeFormat(),
        };
        this.control.behavior = {
            show: { mode: '' }
        };
        this.format = function (v, dObj) {
            if (v) {
                var fmtIn = objDatetimeFormat();
                var fmtOut = format ? format : objTimeFormat();
                var d = new Date();
                d.fromFormat(v, fmtIn);
                return d.toFormat(fmtOut);
            }
        };
        return this;
    };
    FormInput.prototype.asBool = function () {
        this.type = 'checkbox';
        this.control.icons = {
            on: "svgIcon=#alpha-icon-checkRounded:icon,24{}",
            off: "svgIcon=#alpha-icon-squareRounded:iconSizeable,24{stroke:black; }"
        };
        this.control.values = {
            on: true,
            off: false,
        };
        return this;
    };
    FormInput.prototype.asDropdown = function (items, onChange) {
        this.type = 'picker';
        if (onChange)
            this.control.onChange = onChange;
        this.control.width = '100%';
        this.control.data = {
            src: items.map(function (x) { return { text: x, value: x }; }),
            map: ['value', 'text']
        };
        return this;
    };
    FormInput.prototype.getJSON = function () {
        var output = {
            sectionLayout: '',
            type: this.type,
            id: this.id,
            show: function () { return true; },
            data: {
                from: this.variable ? this.variable : this.id,
                defaultValue: '',
                ensure: this.variable ? true : false,
                validate: function () { return true; },
            },
            label: {
                text: this.label,
                icon: '',
                style: '',
                className: '',
            },
            layout: this.layout,
            control: this.control,
            container: {
                style: this.style,
                className: '',
            }
        };
        if (this.format != undefined) {
            output.data.format = this.format;
        }
        return output;
    };
    return FormInput;
}());
var FormButton = /** @class */ (function () {
    function FormButton() {
        this.type = 'button';
        this.disabled = function () { return false; };
        this.layout = 'text';
        this.html = 'Button';
        this.btnStyle = '';
        this.containerStyle = '';
        this.icon = '';
        this.onClick = function () { };
        this._listName = '';
    }
    FormButton.prototype.withCheckDisabled = function (disabled) {
        this.disabled = disabled;
        return this;
    };
    FormButton.prototype.withLayout = function (layout) {
        this.layout = layout;
        return this;
    };
    FormButton.prototype.withHtml = function (html) {
        this.html = html;
        return this;
    };
    FormButton.prototype.withBtnStyle = function (style) {
        this.btnStyle = style;
        return this;
    };
    FormButton.prototype.withContainerStyle = function (style) {
        this.containerStyle = style;
        return this;
    };
    FormButton.prototype.withIcon = function (icon) {
        this.icon = icon;
        return this;
    };
    FormButton.prototype.withClickHandler = function (onClick) {
        this.onClick = onClick;
        return this;
    };
    FormButton.prototype.getJSON = function () {
        return {
            type: this.type,
            disabled: this.disabled,
            control: {
                layout: this.layout,
                html: this.html,
                style: this.btnStyle,
                icon: this.icon,
                listName: this._listName,
                onClick: this.onClick,
            },
            container: {
                style: this.containerStyle,
                className: '',
            }
        };
    };
    return FormButton;
}());
