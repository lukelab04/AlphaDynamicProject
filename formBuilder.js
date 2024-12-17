"use strict";
// https://stackoverflow.com/questions/105034/how-do-i-create-a-guid-uuid
function uuidv4() {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c => (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16));
}
class FormBuilder {
    constructor(obj, formName) {
        this.obj = obj;
        this.formName = formName;
        this.root = new FormGroup();
    }
    withElement(element) {
        this.root.withChild(element);
        return this;
    }
    render() {
        let items = [this.root.getJSON()];
        A5.u.json.postparse(items);
        this.obj.setJSONFormItems(this.formName, items);
        this.obj.getControl(this.formName)._formBoxSize = "";
        this.obj.resizeFormBoxes();
    }
}
class FormGroup {
    constructor() {
        this.children = [];
        this.style = 'display: flex; flex-direction: row; flex-flow: wrap;';
        this.layout = '';
        this.id = uuidv4() + '_GROUP';
    }
    withStyle(style) {
        this.style = style;
        return this;
    }
    withLayout(layout) {
        this.layout = layout;
        return this;
    }
    withChildren(children) {
        this.children.push(...children);
        return this;
    }
    withChild(child) {
        this.children.push(child);
        return this;
    }
    getJSON() {
        return {
            type: 'group',
            id: this.id,
            container: {
                style: this.style,
            },
            layout: this.layout,
            items: this.children.map(c => c.getJSON()),
        };
    }
}
class FormInput {
    constructor() {
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
    withStyle(style) {
        this.style = style;
        return this;
    }
    withLabel(label) {
        this.label = label;
        return this;
    }
    withVariable(variable) {
        this.variable = variable;
        return this;
    }
    withLayout(layout) {
        this.layout = layout;
        return this;
    }
    asDateTime(format) {
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
    }
    asTime(format) {
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
    }
    asBool() {
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
    }
    asDropdown(items, onChange) {
        this.type = 'picker';
        if (onChange)
            this.control.onChange = onChange;
        this.control.width = '100%';
        this.control.data = {
            src: items.map(x => { return { text: x, value: x }; }),
            map: ['value', 'text']
        };
        return this;
    }
    getJSON() {
        let output = {
            sectionLayout: '',
            type: this.type,
            id: this.id,
            show: () => true,
            data: {
                from: this.variable ? this.variable : this.id,
                defaultValue: '',
                ensure: this.variable ? true : false,
                validate: () => true,
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
    }
}
class FormButton {
    constructor() {
        this.type = 'button';
        this.disabled = () => false;
        this.layout = 'text';
        this.html = 'Button';
        this.btnStyle = '';
        this.containerStyle = '';
        this.icon = '';
        this.onClick = () => { };
        this._listName = '';
    }
    withCheckDisabled(disabled) {
        this.disabled = disabled;
        return this;
    }
    withLayout(layout) {
        this.layout = layout;
        return this;
    }
    withHtml(html) {
        this.html = html;
        return this;
    }
    withBtnStyle(style) {
        this.btnStyle = style;
        return this;
    }
    withContainerStyle(style) {
        this.containerStyle = style;
        return this;
    }
    withIcon(icon) {
        this.icon = icon;
        return this;
    }
    withClickHandler(onClick) {
        this.onClick = onClick;
        return this;
    }
    getJSON() {
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
    }
}
