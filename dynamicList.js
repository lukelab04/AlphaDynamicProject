/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 397:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfigTypeSchema: () => (/* binding */ ConfigTypeSchema),
/* harmony export */   MappingTypeSchema: () => (/* binding */ MappingTypeSchema),
/* harmony export */   SchemaTypeSchema: () => (/* binding */ SchemaTypeSchema),
/* harmony export */   stringReprToFn: () => (/* binding */ stringReprToFn)
/* harmony export */ });
/* unused harmony exports EditTypeTypeSchema, EndpointTypeSchema, ListFilterTypeSchema, ListActionTypeSchema, ListBtnTypeSchema, JsonFieldTypeSchema, DataMappingTypeSchema, NestedMappingTypeSchema, SearchOptionsTypeSchema, ServerSortTypeSchema, PrefetchedDataTypeSchema */
/* harmony import */ var _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(811);

function stringReprToFn(s) {
    return eval(s);
}
const EditTypeTypeSchema = _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Union([
    _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('text'),
    _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('dropdown'),
    _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('time'),
    _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('datetime'),
    _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('bool'),
    _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('number'),
    _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('json'),
]);
const EndpointTypeSchema = _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({
    method: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String(),
    headers: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Record(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String(), _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Union([
        _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({ tag: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('template'), value: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String() }),
        _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({ tag: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('argument'), value: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String() })
    ]))),
    endpoint: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Union([
        _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({ tag: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('template'), value: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String() }),
        _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({ tag: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('argument'), value: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String() })
    ]),
    body: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Any()),
});
const ListFilterTypeSchema = _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({
    columnName: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String(),
    columnVal: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Union([
        _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({
            tag: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('value'),
            value: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String(),
        }),
        _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({
            tag: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('arg'),
            value: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String(),
        })
    ]),
    connector: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Union([_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('AND'), _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('OR')]),
    op: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String(),
    type: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String()),
    quantifier: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Union([_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('ALL'), _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('SOME')]))
});
const ListActionTypeSchema = _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Union([
    _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({
        actionName: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('openDetailView'),
    }),
    _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({
        actionName: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('openLinkedList'),
        configurationName: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String(),
        tabName: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String(),
        linkedColumns: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Array(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({
            columnName: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String(),
            foreignName: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String(),
        })),
        makeFilter: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Boolean(),
    }),
    _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({
        actionName: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('openJSONSublist'),
        configurationName: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String(),
        tabName: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String(),
        fromColumn: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String(),
    })
]);
const ListBtnTypeSchema = _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Recursive(Self => _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({
    columnTitle: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String(),
    title: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String()),
    icon: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String()),
    onClick: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Union([
        _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({ function: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String() }),
        _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({ action: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String() }),
        _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({ listAction: ListActionTypeSchema })
    ]),
    children: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Array(Self)),
}));
const JsonFieldTypeSchema = _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Recursive(Self => _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Union([
    _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({
        tag: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal("object"),
        keys: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Record(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String(), Self)
    }),
    _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({
        tag: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal("array"),
        item: Self
    }),
    _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({
        tag: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal("data"),
        dataType: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Union([
            _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('string'),
            _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('number'),
            _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('boolean')
        ]),
        defaultValue: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String())
    })
]));
const DataMappingTypeSchema = _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({
    tag: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('data'),
    displayName: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String()),
    // If top level, mapping is the column key
    // Otherwise it is a unique identifier
    flattenedName: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String(),
    inList: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Boolean()),
    inDetailView: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Boolean()),
    editType: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(EditTypeTypeSchema),
    readOnly: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Boolean()),
    serverDateFormat: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String()),
    template: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String()),
    width: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String()),
    // Required iff edit type is json
    jsonConfig: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({
        editorType: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Union([_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('text'), _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('form')]),
        definition: JsonFieldTypeSchema
    })),
    dropdownConfig: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Union([
        _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({ choices: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Array(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String()), allowCustom: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Boolean()) }),
        _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({ fromColumn: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String(), allowCustom: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Boolean()) }),
    ]))
});
const NestedMappingTypeSchema = _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Recursive((Self) => _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Union([
    _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({
        tag: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('object'),
        key: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String(),
        item: Self
    }),
    _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({
        tag: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('array'),
        item: Self
    }),
    DataMappingTypeSchema,
]));
const MappingTypeSchema = _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Union([
    _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({
        tag: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('nested'),
        key: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String(),
        mapping: NestedMappingTypeSchema
    }),
    DataMappingTypeSchema,
]);
const SearchOptionsTypeSchema = _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({
    advancedSearch: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Boolean()),
    serverSearch: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Boolean()),
    onlyInclude: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Array(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String())),
    onlyExclude: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Array(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String())),
});
const SchemaTypeSchema = _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Recursive(Self => _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Union([
    _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({
        tag: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('none')
    }),
    _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({
        tag: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('rawData'),
        jsType: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String()
    }),
    _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({
        tag: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('object'),
        keys: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Record(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String(), Self)
    }),
    _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({
        tag: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('array'),
        elem: Self
    })
]));
const ServerSortTypeSchema = _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Array(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({
    columnName: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String(),
    order: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Union([_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('asc'), _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('desc')])
}));
const ConfigTypeSchema = _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({
    version: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String(),
    name: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String(),
    onInitialize: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String()),
    dataSource: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Union([
        _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({
            type: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('json'),
            jsonData: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String(),
            preprocess: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String())
        }),
        _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({
            type: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('sql'),
            table: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String(),
            connectionString: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String()),
            filters: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Array(ListFilterTypeSchema)),
            serverSort: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(ServerSortTypeSchema),
            paginate: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({ pageSize: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Number() })),
            preprocess: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String())
        }),
        _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({
            type: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('sql'),
            sql: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String(),
            connectionString: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String()),
            filters: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Array(ListFilterTypeSchema)),
            serverSort: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(ServerSortTypeSchema),
            paginate: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({ pageSize: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Number() })),
            preprocess: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String())
        }),
        _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({
            type: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('json'),
            endpoints: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({
                fetch: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(EndpointTypeSchema),
                search: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(EndpointTypeSchema),
                add: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(EndpointTypeSchema),
                update: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(EndpointTypeSchema),
                delete: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(EndpointTypeSchema),
            }),
            preprocess: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String())
        }),
    ]),
    mappings: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Array(MappingTypeSchema),
    searchOptions: SearchOptionsTypeSchema,
    multiSelect: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Boolean()),
    buttons: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Array(ListBtnTypeSchema),
});
const PrefetchedDataTypeSchema = _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({
    data: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Array(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Any())),
    schema: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(SchemaTypeSchema),
    isAdmin: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Boolean(),
    config: ConfigTypeSchema,
});


/***/ }),

/***/ 297:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TypeSystemPolicy: () => (/* binding */ TypeSystemPolicy)
/* harmony export */ });
/* harmony import */ var _value_guard_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(154);

var TypeSystemPolicy;
(function (TypeSystemPolicy) {
    // ------------------------------------------------------------------
    // TypeSystemPolicy: Instancing
    // ------------------------------------------------------------------
    /**
     * Configures the instantiation behavior of TypeBox types. The `default` option assigns raw JavaScript
     * references for embedded types, which may cause side effects if type properties are explicitly updated
     * outside the TypeBox type builder. The `clone` option creates copies of any shared types upon creation,
     * preventing unintended side effects. The `freeze` option applies `Object.freeze()` to the type, making
     * it fully readonly and immutable. Implementations should use `default` whenever possible, as it is the
     * fastest way to instantiate types. The default setting is `default`.
     */
    TypeSystemPolicy.InstanceMode = 'default';
    // ------------------------------------------------------------------
    // TypeSystemPolicy: Checking
    // ------------------------------------------------------------------
    /** Sets whether TypeBox should assert optional properties using the TypeScript `exactOptionalPropertyTypes` assertion policy. The default is `false` */
    TypeSystemPolicy.ExactOptionalPropertyTypes = false;
    /** Sets whether arrays should be treated as a kind of objects. The default is `false` */
    TypeSystemPolicy.AllowArrayObject = false;
    /** Sets whether `NaN` or `Infinity` should be treated as valid numeric values. The default is `false` */
    TypeSystemPolicy.AllowNaN = false;
    /** Sets whether `null` should validate for void types. The default is `false` */
    TypeSystemPolicy.AllowNullVoid = false;
    /** Checks this value using the ExactOptionalPropertyTypes policy */
    function IsExactOptionalProperty(value, key) {
        return TypeSystemPolicy.ExactOptionalPropertyTypes ? key in value : value[key] !== undefined;
    }
    TypeSystemPolicy.IsExactOptionalProperty = IsExactOptionalProperty;
    /** Checks this value using the AllowArrayObjects policy */
    function IsObjectLike(value) {
        const isObject = (0,_value_guard_index_mjs__WEBPACK_IMPORTED_MODULE_0__.IsObject)(value);
        return TypeSystemPolicy.AllowArrayObject ? isObject : isObject && !(0,_value_guard_index_mjs__WEBPACK_IMPORTED_MODULE_0__.IsArray)(value);
    }
    TypeSystemPolicy.IsObjectLike = IsObjectLike;
    /** Checks this value as a record using the AllowArrayObjects policy */
    function IsRecordLike(value) {
        return IsObjectLike(value) && !(value instanceof Date) && !(value instanceof Uint8Array);
    }
    TypeSystemPolicy.IsRecordLike = IsRecordLike;
    /** Checks this value using the AllowNaN policy */
    function IsNumberLike(value) {
        return TypeSystemPolicy.AllowNaN ? (0,_value_guard_index_mjs__WEBPACK_IMPORTED_MODULE_0__.IsNumber)(value) : Number.isFinite(value);
    }
    TypeSystemPolicy.IsNumberLike = IsNumberLike;
    /** Checks this value using the AllowVoidNull policy */
    function IsVoidLike(value) {
        const isUndefined = (0,_value_guard_index_mjs__WEBPACK_IMPORTED_MODULE_0__.IsUndefined)(value);
        return TypeSystemPolicy.AllowNullVoid ? isUndefined || value === null : isUndefined;
    }
    TypeSystemPolicy.IsVoidLike = IsVoidLike;
})(TypeSystemPolicy || (TypeSystemPolicy = {}));


/***/ }),

/***/ 835:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Clone: () => (/* binding */ Clone)
/* harmony export */ });
/* harmony import */ var _guard_value_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(331);

function ArrayType(value) {
    return value.map((value) => Visit(value));
}
function DateType(value) {
    return new Date(value.getTime());
}
function Uint8ArrayType(value) {
    return new Uint8Array(value);
}
function RegExpType(value) {
    return new RegExp(value.source, value.flags);
}
function ObjectType(value) {
    const result = {};
    for (const key of Object.getOwnPropertyNames(value)) {
        result[key] = Visit(value[key]);
    }
    for (const key of Object.getOwnPropertySymbols(value)) {
        result[key] = Visit(value[key]);
    }
    return result;
}
// prettier-ignore
function Visit(value) {
    return (_guard_value_mjs__WEBPACK_IMPORTED_MODULE_0__.IsArray(value) ? ArrayType(value) :
        _guard_value_mjs__WEBPACK_IMPORTED_MODULE_0__.IsDate(value) ? DateType(value) :
            _guard_value_mjs__WEBPACK_IMPORTED_MODULE_0__.IsUint8Array(value) ? Uint8ArrayType(value) :
                _guard_value_mjs__WEBPACK_IMPORTED_MODULE_0__.IsRegExp(value) ? RegExpType(value) :
                    _guard_value_mjs__WEBPACK_IMPORTED_MODULE_0__.IsObject(value) ? ObjectType(value) :
                        value);
}
/** Clones a value */
function Clone(value) {
    return Visit(value);
}


/***/ }),

/***/ 821:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  CreateType: () => (/* binding */ CreateType)
});

// EXTERNAL MODULE: ./node_modules/@sinclair/typebox/build/esm/system/policy.mjs
var policy = __webpack_require__(297);
// EXTERNAL MODULE: ./node_modules/@sinclair/typebox/build/esm/type/guard/value.mjs
var guard_value = __webpack_require__(331);
;// ./node_modules/@sinclair/typebox/build/esm/type/create/immutable.mjs

function ImmutableArray(value) {
    return globalThis.Object.freeze(value).map((value) => Immutable(value));
}
function ImmutableDate(value) {
    return value;
}
function ImmutableUint8Array(value) {
    return value;
}
function ImmutableRegExp(value) {
    return value;
}
function ImmutableObject(value) {
    const result = {};
    for (const key of Object.getOwnPropertyNames(value)) {
        result[key] = Immutable(value[key]);
    }
    for (const key of Object.getOwnPropertySymbols(value)) {
        result[key] = Immutable(value[key]);
    }
    return globalThis.Object.freeze(result);
}
/** Specialized deep immutable value. Applies freeze recursively to the given value */
// prettier-ignore
function Immutable(value) {
    return (guard_value.IsArray(value) ? ImmutableArray(value) :
        guard_value.IsDate(value) ? ImmutableDate(value) :
            guard_value.IsUint8Array(value) ? ImmutableUint8Array(value) :
                guard_value.IsRegExp(value) ? ImmutableRegExp(value) :
                    guard_value.IsObject(value) ? ImmutableObject(value) :
                        value);
}

// EXTERNAL MODULE: ./node_modules/@sinclair/typebox/build/esm/type/clone/value.mjs
var value = __webpack_require__(835);
;// ./node_modules/@sinclair/typebox/build/esm/type/create/type.mjs



/** Creates TypeBox schematics using the configured InstanceMode */
function CreateType(schema, options) {
    const result = options !== undefined ? { ...options, ...schema } : schema;
    switch (policy.TypeSystemPolicy.InstanceMode) {
        case 'freeze':
            return Immutable(result);
        case 'clone':
            return (0,value.Clone)(result);
        default:
            return result;
    }
}


/***/ }),

/***/ 231:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TypeBoxError: () => (/* binding */ TypeBoxError)
/* harmony export */ });
/** The base Error type thrown for all TypeBox exceptions  */
class TypeBoxError extends Error {
    constructor(message) {
        super(message);
    }
}


/***/ }),

/***/ 582:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IsAny: () => (/* binding */ IsAny),
/* harmony export */   IsArray: () => (/* binding */ IsArray),
/* harmony export */   IsAsyncIterator: () => (/* binding */ IsAsyncIterator),
/* harmony export */   IsBigInt: () => (/* binding */ IsBigInt),
/* harmony export */   IsBoolean: () => (/* binding */ IsBoolean),
/* harmony export */   IsComputed: () => (/* binding */ IsComputed),
/* harmony export */   IsConstructor: () => (/* binding */ IsConstructor),
/* harmony export */   IsFunction: () => (/* binding */ IsFunction),
/* harmony export */   IsInteger: () => (/* binding */ IsInteger),
/* harmony export */   IsIntersect: () => (/* binding */ IsIntersect),
/* harmony export */   IsIterator: () => (/* binding */ IsIterator),
/* harmony export */   IsLiteral: () => (/* binding */ IsLiteral),
/* harmony export */   IsLiteralValue: () => (/* binding */ IsLiteralValue),
/* harmony export */   IsMappedKey: () => (/* binding */ IsMappedKey),
/* harmony export */   IsMappedResult: () => (/* binding */ IsMappedResult),
/* harmony export */   IsNever: () => (/* binding */ IsNever),
/* harmony export */   IsNumber: () => (/* binding */ IsNumber),
/* harmony export */   IsObject: () => (/* binding */ IsObject),
/* harmony export */   IsOptional: () => (/* binding */ IsOptional),
/* harmony export */   IsPromise: () => (/* binding */ IsPromise),
/* harmony export */   IsReadonly: () => (/* binding */ IsReadonly),
/* harmony export */   IsRecord: () => (/* binding */ IsRecord),
/* harmony export */   IsRef: () => (/* binding */ IsRef),
/* harmony export */   IsRegExp: () => (/* binding */ IsRegExp),
/* harmony export */   IsSchema: () => (/* binding */ IsSchema),
/* harmony export */   IsString: () => (/* binding */ IsString),
/* harmony export */   IsTemplateLiteral: () => (/* binding */ IsTemplateLiteral),
/* harmony export */   IsTransform: () => (/* binding */ IsTransform),
/* harmony export */   IsTuple: () => (/* binding */ IsTuple),
/* harmony export */   IsUnion: () => (/* binding */ IsUnion)
/* harmony export */ });
/* unused harmony exports IsDate, IsImport, IsProperties, IsKindOf, IsLiteralString, IsLiteralNumber, IsLiteralBoolean, IsNot, IsNull, IsRecursive, IsSymbol, IsThis, IsUndefined, IsUint8Array, IsUnknown, IsUnsafe, IsVoid, IsKind */
/* harmony import */ var _value_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(331);
/* harmony import */ var _symbols_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(192);


/** `[Kind-Only]` Returns true if this value has a Readonly symbol */
function IsReadonly(value) {
    return _value_mjs__WEBPACK_IMPORTED_MODULE_0__.IsObject(value) && value[_symbols_index_mjs__WEBPACK_IMPORTED_MODULE_1__.ReadonlyKind] === 'Readonly';
}
/** `[Kind-Only]` Returns true if this value has a Optional symbol */
function IsOptional(value) {
    return _value_mjs__WEBPACK_IMPORTED_MODULE_0__.IsObject(value) && value[_symbols_index_mjs__WEBPACK_IMPORTED_MODULE_1__.OptionalKind] === 'Optional';
}
/** `[Kind-Only]` Returns true if the given value is TAny */
function IsAny(value) {
    return IsKindOf(value, 'Any');
}
/** `[Kind-Only]` Returns true if the given value is TArray */
function IsArray(value) {
    return IsKindOf(value, 'Array');
}
/** `[Kind-Only]` Returns true if the given value is TAsyncIterator */
function IsAsyncIterator(value) {
    return IsKindOf(value, 'AsyncIterator');
}
/** `[Kind-Only]` Returns true if the given value is TBigInt */
function IsBigInt(value) {
    return IsKindOf(value, 'BigInt');
}
/** `[Kind-Only]` Returns true if the given value is TBoolean */
function IsBoolean(value) {
    return IsKindOf(value, 'Boolean');
}
/** `[Kind-Only]` Returns true if the given value is TComputed */
function IsComputed(value) {
    return IsKindOf(value, 'Computed');
}
/** `[Kind-Only]` Returns true if the given value is TConstructor */
function IsConstructor(value) {
    return IsKindOf(value, 'Constructor');
}
/** `[Kind-Only]` Returns true if the given value is TDate */
function IsDate(value) {
    return IsKindOf(value, 'Date');
}
/** `[Kind-Only]` Returns true if the given value is TFunction */
function IsFunction(value) {
    return IsKindOf(value, 'Function');
}
/** `[Kind-Only]` Returns true if the given value is TInteger */
function IsImport(value) {
    return IsKindOf(value, 'Import');
}
/** `[Kind-Only]` Returns true if the given value is TInteger */
function IsInteger(value) {
    return IsKindOf(value, 'Integer');
}
/** `[Kind-Only]` Returns true if the given schema is TProperties */
function IsProperties(value) {
    return ValueGuard.IsObject(value);
}
/** `[Kind-Only]` Returns true if the given value is TIntersect */
function IsIntersect(value) {
    return IsKindOf(value, 'Intersect');
}
/** `[Kind-Only]` Returns true if the given value is TIterator */
function IsIterator(value) {
    return IsKindOf(value, 'Iterator');
}
/** `[Kind-Only]` Returns true if the given value is a TKind with the given name. */
function IsKindOf(value, kind) {
    return _value_mjs__WEBPACK_IMPORTED_MODULE_0__.IsObject(value) && _symbols_index_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind in value && value[_symbols_index_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind] === kind;
}
/** `[Kind-Only]` Returns true if the given value is TLiteral<string> */
function IsLiteralString(value) {
    return IsLiteral(value) && ValueGuard.IsString(value.const);
}
/** `[Kind-Only]` Returns true if the given value is TLiteral<number> */
function IsLiteralNumber(value) {
    return IsLiteral(value) && ValueGuard.IsNumber(value.const);
}
/** `[Kind-Only]` Returns true if the given value is TLiteral<boolean> */
function IsLiteralBoolean(value) {
    return IsLiteral(value) && ValueGuard.IsBoolean(value.const);
}
/** `[Kind-Only]` Returns true if the given value is TLiteralValue */
function IsLiteralValue(value) {
    return _value_mjs__WEBPACK_IMPORTED_MODULE_0__.IsBoolean(value) || _value_mjs__WEBPACK_IMPORTED_MODULE_0__.IsNumber(value) || _value_mjs__WEBPACK_IMPORTED_MODULE_0__.IsString(value);
}
/** `[Kind-Only]` Returns true if the given value is TLiteral */
function IsLiteral(value) {
    return IsKindOf(value, 'Literal');
}
/** `[Kind-Only]` Returns true if the given value is a TMappedKey */
function IsMappedKey(value) {
    return IsKindOf(value, 'MappedKey');
}
/** `[Kind-Only]` Returns true if the given value is TMappedResult */
function IsMappedResult(value) {
    return IsKindOf(value, 'MappedResult');
}
/** `[Kind-Only]` Returns true if the given value is TNever */
function IsNever(value) {
    return IsKindOf(value, 'Never');
}
/** `[Kind-Only]` Returns true if the given value is TNot */
function IsNot(value) {
    return IsKindOf(value, 'Not');
}
/** `[Kind-Only]` Returns true if the given value is TNull */
function IsNull(value) {
    return IsKindOf(value, 'Null');
}
/** `[Kind-Only]` Returns true if the given value is TNumber */
function IsNumber(value) {
    return IsKindOf(value, 'Number');
}
/** `[Kind-Only]` Returns true if the given value is TObject */
function IsObject(value) {
    return IsKindOf(value, 'Object');
}
/** `[Kind-Only]` Returns true if the given value is TPromise */
function IsPromise(value) {
    return IsKindOf(value, 'Promise');
}
/** `[Kind-Only]` Returns true if the given value is TRecord */
function IsRecord(value) {
    return IsKindOf(value, 'Record');
}
/** `[Kind-Only]` Returns true if this value is TRecursive */
function IsRecursive(value) {
    return ValueGuard.IsObject(value) && Hint in value && value[Hint] === 'Recursive';
}
/** `[Kind-Only]` Returns true if the given value is TRef */
function IsRef(value) {
    return IsKindOf(value, 'Ref');
}
/** `[Kind-Only]` Returns true if the given value is TRegExp */
function IsRegExp(value) {
    return IsKindOf(value, 'RegExp');
}
/** `[Kind-Only]` Returns true if the given value is TString */
function IsString(value) {
    return IsKindOf(value, 'String');
}
/** `[Kind-Only]` Returns true if the given value is TSymbol */
function IsSymbol(value) {
    return IsKindOf(value, 'Symbol');
}
/** `[Kind-Only]` Returns true if the given value is TTemplateLiteral */
function IsTemplateLiteral(value) {
    return IsKindOf(value, 'TemplateLiteral');
}
/** `[Kind-Only]` Returns true if the given value is TThis */
function IsThis(value) {
    return IsKindOf(value, 'This');
}
/** `[Kind-Only]` Returns true of this value is TTransform */
function IsTransform(value) {
    return _value_mjs__WEBPACK_IMPORTED_MODULE_0__.IsObject(value) && _symbols_index_mjs__WEBPACK_IMPORTED_MODULE_1__.TransformKind in value;
}
/** `[Kind-Only]` Returns true if the given value is TTuple */
function IsTuple(value) {
    return IsKindOf(value, 'Tuple');
}
/** `[Kind-Only]` Returns true if the given value is TUndefined */
function IsUndefined(value) {
    return IsKindOf(value, 'Undefined');
}
/** `[Kind-Only]` Returns true if the given value is TUnion */
function IsUnion(value) {
    return IsKindOf(value, 'Union');
}
/** `[Kind-Only]` Returns true if the given value is TUint8Array */
function IsUint8Array(value) {
    return IsKindOf(value, 'Uint8Array');
}
/** `[Kind-Only]` Returns true if the given value is TUnknown */
function IsUnknown(value) {
    return IsKindOf(value, 'Unknown');
}
/** `[Kind-Only]` Returns true if the given value is a raw TUnsafe */
function IsUnsafe(value) {
    return IsKindOf(value, 'Unsafe');
}
/** `[Kind-Only]` Returns true if the given value is TVoid */
function IsVoid(value) {
    return IsKindOf(value, 'Void');
}
/** `[Kind-Only]` Returns true if the given value is TKind */
function IsKind(value) {
    return _value_mjs__WEBPACK_IMPORTED_MODULE_0__.IsObject(value) && _symbols_index_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind in value && _value_mjs__WEBPACK_IMPORTED_MODULE_0__.IsString(value[_symbols_index_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind]);
}
/** `[Kind-Only]` Returns true if the given value is TSchema */
function IsSchema(value) {
    // prettier-ignore
    return (IsAny(value) ||
        IsArray(value) ||
        IsBoolean(value) ||
        IsBigInt(value) ||
        IsAsyncIterator(value) ||
        IsComputed(value) ||
        IsConstructor(value) ||
        IsDate(value) ||
        IsFunction(value) ||
        IsInteger(value) ||
        IsIntersect(value) ||
        IsIterator(value) ||
        IsLiteral(value) ||
        IsMappedKey(value) ||
        IsMappedResult(value) ||
        IsNever(value) ||
        IsNot(value) ||
        IsNull(value) ||
        IsNumber(value) ||
        IsObject(value) ||
        IsPromise(value) ||
        IsRecord(value) ||
        IsRef(value) ||
        IsRegExp(value) ||
        IsString(value) ||
        IsSymbol(value) ||
        IsTemplateLiteral(value) ||
        IsThis(value) ||
        IsTuple(value) ||
        IsUndefined(value) ||
        IsUnion(value) ||
        IsUint8Array(value) ||
        IsUnknown(value) ||
        IsUnsafe(value) ||
        IsVoid(value) ||
        IsKind(value));
}


/***/ }),

/***/ 331:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IsArray: () => (/* binding */ IsArray),
/* harmony export */   IsAsyncIterator: () => (/* binding */ IsAsyncIterator),
/* harmony export */   IsBigInt: () => (/* binding */ IsBigInt),
/* harmony export */   IsBoolean: () => (/* binding */ IsBoolean),
/* harmony export */   IsDate: () => (/* binding */ IsDate),
/* harmony export */   IsFunction: () => (/* binding */ IsFunction),
/* harmony export */   IsIterator: () => (/* binding */ IsIterator),
/* harmony export */   IsNull: () => (/* binding */ IsNull),
/* harmony export */   IsNumber: () => (/* binding */ IsNumber),
/* harmony export */   IsObject: () => (/* binding */ IsObject),
/* harmony export */   IsRegExp: () => (/* binding */ IsRegExp),
/* harmony export */   IsString: () => (/* binding */ IsString),
/* harmony export */   IsSymbol: () => (/* binding */ IsSymbol),
/* harmony export */   IsUint8Array: () => (/* binding */ IsUint8Array),
/* harmony export */   IsUndefined: () => (/* binding */ IsUndefined)
/* harmony export */ });
/* unused harmony export HasPropertyKey */
// --------------------------------------------------------------------------
// PropertyKey
// --------------------------------------------------------------------------
/** Returns true if this value has this property key */
function HasPropertyKey(value, key) {
    return key in value;
}
// --------------------------------------------------------------------------
// Object Instances
// --------------------------------------------------------------------------
/** Returns true if this value is an async iterator */
function IsAsyncIterator(value) {
    return IsObject(value) && !IsArray(value) && !IsUint8Array(value) && Symbol.asyncIterator in value;
}
/** Returns true if this value is an array */
function IsArray(value) {
    return Array.isArray(value);
}
/** Returns true if this value is bigint */
function IsBigInt(value) {
    return typeof value === 'bigint';
}
/** Returns true if this value is a boolean */
function IsBoolean(value) {
    return typeof value === 'boolean';
}
/** Returns true if this value is a Date object */
function IsDate(value) {
    return value instanceof globalThis.Date;
}
/** Returns true if this value is a function */
function IsFunction(value) {
    return typeof value === 'function';
}
/** Returns true if this value is an iterator */
function IsIterator(value) {
    return IsObject(value) && !IsArray(value) && !IsUint8Array(value) && Symbol.iterator in value;
}
/** Returns true if this value is null */
function IsNull(value) {
    return value === null;
}
/** Returns true if this value is number */
function IsNumber(value) {
    return typeof value === 'number';
}
/** Returns true if this value is an object */
function IsObject(value) {
    return typeof value === 'object' && value !== null;
}
/** Returns true if this value is RegExp */
function IsRegExp(value) {
    return value instanceof globalThis.RegExp;
}
/** Returns true if this value is string */
function IsString(value) {
    return typeof value === 'string';
}
/** Returns true if this value is symbol */
function IsSymbol(value) {
    return typeof value === 'symbol';
}
/** Returns true if this value is a Uint8Array */
function IsUint8Array(value) {
    return value instanceof globalThis.Uint8Array;
}
/** Returns true if this value is undefined */
function IsUndefined(value) {
    return value === undefined;
}


/***/ }),

/***/ 692:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KeyOfPattern: () => (/* binding */ KeyOfPattern),
/* harmony export */   KeyOfPropertyKeys: () => (/* binding */ KeyOfPropertyKeys)
/* harmony export */ });
/* harmony import */ var _sets_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(384);
/* harmony import */ var _guard_kind_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(582);

// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------

// prettier-ignore
function FromRest(types) {
    const result = [];
    for (const L of types)
        result.push(KeyOfPropertyKeys(L));
    return result;
}
// prettier-ignore
function FromIntersect(types) {
    const propertyKeysArray = FromRest(types);
    const propertyKeys = (0,_sets_index_mjs__WEBPACK_IMPORTED_MODULE_0__.SetUnionMany)(propertyKeysArray);
    return propertyKeys;
}
// prettier-ignore
function FromUnion(types) {
    const propertyKeysArray = FromRest(types);
    const propertyKeys = (0,_sets_index_mjs__WEBPACK_IMPORTED_MODULE_0__.SetIntersectMany)(propertyKeysArray);
    return propertyKeys;
}
// prettier-ignore
function FromTuple(types) {
    return types.map((_, indexer) => indexer.toString());
}
// prettier-ignore
function FromArray(_) {
    return (['[number]']);
}
// prettier-ignore
function FromProperties(T) {
    return (globalThis.Object.getOwnPropertyNames(T));
}
// ------------------------------------------------------------------
// FromPatternProperties
// ------------------------------------------------------------------
// prettier-ignore
function FromPatternProperties(patternProperties) {
    if (!includePatternProperties)
        return [];
    const patternPropertyKeys = globalThis.Object.getOwnPropertyNames(patternProperties);
    return patternPropertyKeys.map(key => {
        return (key[0] === '^' && key[key.length - 1] === '$')
            ? key.slice(1, key.length - 1)
            : key;
    });
}
/** Returns a tuple of PropertyKeys derived from the given TSchema. */
// prettier-ignore
function KeyOfPropertyKeys(type) {
    return ((0,_guard_kind_mjs__WEBPACK_IMPORTED_MODULE_1__.IsIntersect)(type) ? FromIntersect(type.allOf) :
        (0,_guard_kind_mjs__WEBPACK_IMPORTED_MODULE_1__.IsUnion)(type) ? FromUnion(type.anyOf) :
            (0,_guard_kind_mjs__WEBPACK_IMPORTED_MODULE_1__.IsTuple)(type) ? FromTuple(type.items ?? []) :
                (0,_guard_kind_mjs__WEBPACK_IMPORTED_MODULE_1__.IsArray)(type) ? FromArray(type.items) :
                    (0,_guard_kind_mjs__WEBPACK_IMPORTED_MODULE_1__.IsObject)(type) ? FromProperties(type.properties) :
                        (0,_guard_kind_mjs__WEBPACK_IMPORTED_MODULE_1__.IsRecord)(type) ? FromPatternProperties(type.patternProperties) :
                            []);
}
// ----------------------------------------------------------------
// KeyOfPattern
// ----------------------------------------------------------------
let includePatternProperties = false;
/** Returns a regular expression pattern derived from the given TSchema */
function KeyOfPattern(schema) {
    includePatternProperties = true;
    const keys = KeyOfPropertyKeys(schema);
    includePatternProperties = false;
    const pattern = keys.map((key) => `(${key})`);
    return `^(${pattern.join('|')})$`;
}


/***/ }),

/***/ 263:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Never: () => (/* binding */ Never)
/* harmony export */ });
/* harmony import */ var _create_type_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(821);
/* harmony import */ var _symbols_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(192);


/** `[Json]` Creates a Never type */
function Never(options) {
    return (0,_create_type_mjs__WEBPACK_IMPORTED_MODULE_0__.CreateType)({ [_symbols_index_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind]: 'Never', not: {} }, options);
}


/***/ }),

/***/ 384:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SetDistinct: () => (/* binding */ SetDistinct),
/* harmony export */   SetIncludes: () => (/* binding */ SetIncludes),
/* harmony export */   SetIntersectMany: () => (/* binding */ SetIntersectMany),
/* harmony export */   SetUnionMany: () => (/* binding */ SetUnionMany)
/* harmony export */ });
/* unused harmony exports SetIsSubset, SetIntersect, SetUnion, SetComplement */
/** Returns true if element right is in the set of left */
// prettier-ignore
function SetIncludes(T, S) {
    return T.includes(S);
}
/** Returns true if left is a subset of right */
function SetIsSubset(T, S) {
    return T.every((L) => SetIncludes(S, L));
}
/** Returns a distinct set of elements */
function SetDistinct(T) {
    return [...new Set(T)];
}
/** Returns the Intersect of the given sets */
function SetIntersect(T, S) {
    return T.filter((L) => S.includes(L));
}
/** Returns the Union of the given sets */
function SetUnion(T, S) {
    return [...T, ...S];
}
/** Returns the Complement by omitting elements in T that are in S */
// prettier-ignore
function SetComplement(T, S) {
    return T.filter(L => !S.includes(L));
}
// prettier-ignore
function SetIntersectManyResolve(T, Init) {
    return T.reduce((Acc, L) => {
        return SetIntersect(Acc, L);
    }, Init);
}
// prettier-ignore
function SetIntersectMany(T) {
    return (T.length === 1
        ? T[0]
        // Use left to initialize the accumulator for resolve
        : T.length > 1
            ? SetIntersectManyResolve(T.slice(1), T[0])
            : []);
}
/** Returns the Union of multiple sets */
function SetUnionMany(T) {
    const Acc = [];
    for (const L of T)
        Acc.push(...L);
    return Acc;
}


/***/ }),

/***/ 192:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hint: () => (/* binding */ Hint),
/* harmony export */   Kind: () => (/* binding */ Kind),
/* harmony export */   OptionalKind: () => (/* binding */ OptionalKind),
/* harmony export */   ReadonlyKind: () => (/* binding */ ReadonlyKind),
/* harmony export */   TransformKind: () => (/* binding */ TransformKind)
/* harmony export */ });
/** Symbol key applied to transform types */
const TransformKind = Symbol.for('TypeBox.Transform');
/** Symbol key applied to readonly types */
const ReadonlyKind = Symbol.for('TypeBox.Readonly');
/** Symbol key applied to optional types */
const OptionalKind = Symbol.for('TypeBox.Optional');
/** Symbol key applied to types */
const Hint = Symbol.for('TypeBox.Hint');
/** Symbol key applied to types */
const Kind = Symbol.for('TypeBox.Kind');


/***/ }),

/***/ 811:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Type: () => (/* binding */ Type)
});

// UNUSED EXPORTS: JavaScriptTypeBuilder, JsonTypeBuilder

// NAMESPACE OBJECT: ./node_modules/@sinclair/typebox/build/esm/type/type/type.mjs
var type_type_namespaceObject = {};
__webpack_require__.r(type_type_namespaceObject);
__webpack_require__.d(type_type_namespaceObject, {
  Any: () => (Any),
  Array: () => (array_Array),
  AsyncIterator: () => (AsyncIterator),
  Awaited: () => (Awaited),
  BigInt: () => (BigInt),
  Boolean: () => (Boolean),
  Capitalize: () => (Capitalize),
  Composite: () => (Composite),
  Const: () => (Const),
  Constructor: () => (Constructor),
  ConstructorParameters: () => (ConstructorParameters),
  Date: () => (date_Date),
  Enum: () => (Enum),
  Exclude: () => (Exclude),
  Extends: () => (Extends),
  Extract: () => (Extract),
  Function: () => (Function),
  Index: () => (Index),
  InstanceType: () => (InstanceType),
  Integer: () => (Integer),
  Intersect: () => (Intersect),
  Iterator: () => (Iterator),
  KeyOf: () => (KeyOf),
  Literal: () => (Literal),
  Lowercase: () => (Lowercase),
  Mapped: () => (Mapped),
  Module: () => (Module),
  Never: () => (never.Never),
  Not: () => (Not),
  Null: () => (Null),
  Number: () => (number_Number),
  Object: () => (object_Object),
  Omit: () => (Omit),
  Optional: () => (Optional),
  Parameters: () => (Parameters),
  Partial: () => (Partial),
  Pick: () => (Pick),
  Promise: () => (Promise),
  Readonly: () => (Readonly),
  ReadonlyOptional: () => (ReadonlyOptional),
  Record: () => (Record),
  Recursive: () => (Recursive),
  Ref: () => (Ref),
  RegExp: () => (regexp_RegExp),
  Required: () => (Required),
  Rest: () => (Rest),
  ReturnType: () => (ReturnType),
  String: () => (string_String),
  Symbol: () => (symbol_Symbol),
  TemplateLiteral: () => (TemplateLiteral),
  Transform: () => (Transform),
  Tuple: () => (Tuple),
  Uint8Array: () => (Uint8Array),
  Uncapitalize: () => (Uncapitalize),
  Undefined: () => (Undefined),
  Union: () => (Union),
  Unknown: () => (Unknown),
  Unsafe: () => (Unsafe),
  Uppercase: () => (Uppercase),
  Void: () => (Void)
});

// EXTERNAL MODULE: ./node_modules/@sinclair/typebox/build/esm/type/create/type.mjs + 1 modules
var create_type = __webpack_require__(821);
// EXTERNAL MODULE: ./node_modules/@sinclair/typebox/build/esm/type/symbols/symbols.mjs
var symbols = __webpack_require__(192);
;// ./node_modules/@sinclair/typebox/build/esm/type/any/any.mjs


/** `[Json]` Creates an Any type */
function Any(options) {
    return (0,create_type.CreateType)({ [symbols.Kind]: 'Any' }, options);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/array/array.mjs


/** `[Json]` Creates an Array type */
function array_Array(items, options) {
    return (0,create_type.CreateType)({ [symbols.Kind]: 'Array', type: 'array', items }, options);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/async-iterator/async-iterator.mjs


/** `[JavaScript]` Creates a AsyncIterator type */
function AsyncIterator(items, options) {
    return (0,create_type.CreateType)({ [symbols.Kind]: 'AsyncIterator', type: 'AsyncIterator', items }, options);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/computed/computed.mjs


/** `[Internal]` Creates a deferred computed type. This type is used exclusively in modules to defer resolution of computable types that contain interior references  */
function computed_Computed(target, parameters, options) {
    return (0,create_type.CreateType)({ [symbols.Kind]: 'Computed', target, parameters }, options);
}

// EXTERNAL MODULE: ./node_modules/@sinclair/typebox/build/esm/type/never/never.mjs
var never = __webpack_require__(263);
// EXTERNAL MODULE: ./node_modules/@sinclair/typebox/build/esm/type/guard/kind.mjs
var kind = __webpack_require__(582);
;// ./node_modules/@sinclair/typebox/build/esm/type/intersect/intersect-create.mjs


// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------

// ------------------------------------------------------------------
// IntersectCreate
// ------------------------------------------------------------------
// prettier-ignore
function IntersectCreate(T, options = {}) {
    const allObjects = T.every((schema) => (0,kind.IsObject)(schema));
    const clonedUnevaluatedProperties = (0,kind.IsSchema)(options.unevaluatedProperties)
        ? { unevaluatedProperties: options.unevaluatedProperties }
        : {};
    return (0,create_type.CreateType)((options.unevaluatedProperties === false || (0,kind.IsSchema)(options.unevaluatedProperties) || allObjects
        ? { ...clonedUnevaluatedProperties, [symbols.Kind]: 'Intersect', type: 'object', allOf: T }
        : { ...clonedUnevaluatedProperties, [symbols.Kind]: 'Intersect', allOf: T }), options);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/intersect/intersect.mjs



// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------

/** `[Json]` Creates an evaluated Intersect type */
function Intersect(types, options) {
    if (types.length === 1)
        return (0,create_type.CreateType)(types[0], options);
    if (types.length === 0)
        return (0,never.Never)(options);
    if (types.some((schema) => (0,kind.IsTransform)(schema)))
        throw new Error('Cannot intersect transform types');
    return IntersectCreate(types, options);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/union/union-create.mjs


function UnionCreate(T, options) {
    return (0,create_type.CreateType)({ [symbols.Kind]: 'Union', anyOf: T }, options);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/union/union.mjs



/** `[Json]` Creates a Union type */
function Union(types, options) {
    // prettier-ignore
    return (types.length === 0 ? (0,never.Never)(options) :
        types.length === 1 ? (0,create_type.CreateType)(types[0], options) :
            UnionCreate(types, options));
}

// EXTERNAL MODULE: ./node_modules/@sinclair/typebox/build/esm/type/error/error.mjs
var error_error = __webpack_require__(231);
;// ./node_modules/@sinclair/typebox/build/esm/type/ref/ref.mjs



/** `[Json]` Creates a Ref type. The referenced type must contain a $id */
function Ref(...args) {
    const [$ref, options] = typeof args[0] === 'string' ? [args[0], args[1]] : [args[0].$id, args[1]];
    if (typeof $ref !== 'string')
        throw new error_error.TypeBoxError('Ref: $ref must be a string');
    return (0,create_type.CreateType)({ [symbols.Kind]: 'Ref', $ref }, options);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/awaited/awaited.mjs





// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------

// prettier-ignore
function FromComputed(target, parameters) {
    return computed_Computed('Awaited', [computed_Computed(target, parameters)]);
}
// prettier-ignore
function FromRef($ref) {
    return computed_Computed('Awaited', [Ref($ref)]);
}
// prettier-ignore
function FromIntersect(types) {
    return Intersect(FromRest(types));
}
// prettier-ignore
function FromUnion(types) {
    return Union(FromRest(types));
}
// prettier-ignore
function FromPromise(type) {
    return Awaited(type);
}
// prettier-ignore
function FromRest(types) {
    return types.map(type => Awaited(type));
}
/** `[JavaScript]` Constructs a type by recursively unwrapping Promise types */
function Awaited(type, options) {
    return (0,create_type.CreateType)((0,kind.IsComputed)(type) ? FromComputed(type.target, type.parameters) : (0,kind.IsIntersect)(type) ? FromIntersect(type.allOf) : (0,kind.IsUnion)(type) ? FromUnion(type.anyOf) : (0,kind.IsPromise)(type) ? FromPromise(type.item) : (0,kind.IsRef)(type) ? FromRef(type.$ref) : type, options);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/bigint/bigint.mjs


/** `[JavaScript]` Creates a BigInt type */
function BigInt(options) {
    return (0,create_type.CreateType)({ [symbols.Kind]: 'BigInt', type: 'bigint' }, options);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/boolean/boolean.mjs


/** `[Json]` Creates a Boolean type */
function Boolean(options) {
    return (0,create_type.CreateType)({ [symbols.Kind]: 'Boolean', type: 'boolean' }, options);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/discard/discard.mjs
function DiscardKey(value, key) {
    const { [key]: _, ...rest } = value;
    return rest;
}
/** Discards property keys from the given value. This function returns a shallow Clone. */
function Discard(value, keys) {
    return keys.reduce((acc, key) => DiscardKey(acc, key), value);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/mapped/mapped-result.mjs


// prettier-ignore
function MappedResult(properties) {
    return (0,create_type.CreateType)({
        [symbols.Kind]: 'MappedResult',
        properties
    });
}

;// ./node_modules/@sinclair/typebox/build/esm/type/optional/optional-from-mapped-result.mjs


// prettier-ignore
function FromProperties(P, F) {
    const Acc = {};
    for (const K2 of globalThis.Object.getOwnPropertyNames(P))
        Acc[K2] = Optional(P[K2], F);
    return Acc;
}
// prettier-ignore
function FromMappedResult(R, F) {
    return FromProperties(R.properties, F);
}
// prettier-ignore
function OptionalFromMappedResult(R, F) {
    const P = FromMappedResult(R, F);
    return MappedResult(P);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/optional/optional.mjs





function RemoveOptional(schema) {
    return (0,create_type.CreateType)(Discard(schema, [symbols.OptionalKind]));
}
function AddOptional(schema) {
    return (0,create_type.CreateType)({ ...schema, [symbols.OptionalKind]: 'Optional' });
}
// prettier-ignore
function OptionalWithFlag(schema, F) {
    return (F === false
        ? RemoveOptional(schema)
        : AddOptional(schema));
}
/** `[Json]` Creates a Optional property */
function Optional(schema, enable) {
    const F = enable ?? true;
    return (0,kind.IsMappedResult)(schema) ? OptionalFromMappedResult(schema, F) : OptionalWithFlag(schema, F);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/intersect/intersect-evaluated.mjs






// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------

// prettier-ignore
function IsIntersectOptional(types) {
    return types.every(left => (0,kind.IsOptional)(left));
}
// prettier-ignore
function RemoveOptionalFromType(type) {
    return (Discard(type, [symbols.OptionalKind]));
}
// prettier-ignore
function RemoveOptionalFromRest(types) {
    return types.map(left => (0,kind.IsOptional)(left) ? RemoveOptionalFromType(left) : left);
}
// prettier-ignore
function ResolveIntersect(types, options) {
    return (IsIntersectOptional(types)
        ? Optional(IntersectCreate(RemoveOptionalFromRest(types), options))
        : IntersectCreate(RemoveOptionalFromRest(types), options));
}
/** `[Json]` Creates an evaluated Intersect type */
function IntersectEvaluated(types, options = {}) {
    if (types.length === 1)
        return (0,create_type.CreateType)(types[0], options);
    if (types.length === 0)
        return (0,never.Never)(options);
    if (types.some((schema) => (0,kind.IsTransform)(schema)))
        throw new Error('Cannot intersect transform types');
    return ResolveIntersect(types, options);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/union/union-evaluated.mjs






// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------

// prettier-ignore
function IsUnionOptional(types) {
    return types.some(type => (0,kind.IsOptional)(type));
}
// prettier-ignore
function union_evaluated_RemoveOptionalFromRest(types) {
    return types.map(left => (0,kind.IsOptional)(left) ? union_evaluated_RemoveOptionalFromType(left) : left);
}
// prettier-ignore
function union_evaluated_RemoveOptionalFromType(T) {
    return (Discard(T, [symbols.OptionalKind]));
}
// prettier-ignore
function ResolveUnion(types, options) {
    const isOptional = IsUnionOptional(types);
    return (isOptional
        ? Optional(UnionCreate(union_evaluated_RemoveOptionalFromRest(types), options))
        : UnionCreate(union_evaluated_RemoveOptionalFromRest(types), options));
}
/** `[Json]` Creates an evaluated Union type */
function UnionEvaluated(T, options) {
    // prettier-ignore
    return (T.length === 1 ? (0,create_type.CreateType)(T[0], options) :
        T.length === 0 ? (0,never.Never)(options) :
            ResolveUnion(T, options));
}

;// ./node_modules/@sinclair/typebox/build/esm/type/template-literal/parse.mjs

// ------------------------------------------------------------------
// TemplateLiteralParserError
// ------------------------------------------------------------------
class TemplateLiteralParserError extends error_error.TypeBoxError {
}
// -------------------------------------------------------------------
// Unescape
//
// Unescape for these control characters specifically. Note that this
// function is only called on non union group content, and where we
// still want to allow the user to embed control characters in that
// content. For review.
// -------------------------------------------------------------------
// prettier-ignore
function Unescape(pattern) {
    return pattern
        .replace(/\\\$/g, '$')
        .replace(/\\\*/g, '*')
        .replace(/\\\^/g, '^')
        .replace(/\\\|/g, '|')
        .replace(/\\\(/g, '(')
        .replace(/\\\)/g, ')');
}
// -------------------------------------------------------------------
// Control Characters
// -------------------------------------------------------------------
function IsNonEscaped(pattern, index, char) {
    return pattern[index] === char && pattern.charCodeAt(index - 1) !== 92;
}
function IsOpenParen(pattern, index) {
    return IsNonEscaped(pattern, index, '(');
}
function IsCloseParen(pattern, index) {
    return IsNonEscaped(pattern, index, ')');
}
function IsSeparator(pattern, index) {
    return IsNonEscaped(pattern, index, '|');
}
// -------------------------------------------------------------------
// Control Groups
// -------------------------------------------------------------------
function IsGroup(pattern) {
    if (!(IsOpenParen(pattern, 0) && IsCloseParen(pattern, pattern.length - 1)))
        return false;
    let count = 0;
    for (let index = 0; index < pattern.length; index++) {
        if (IsOpenParen(pattern, index))
            count += 1;
        if (IsCloseParen(pattern, index))
            count -= 1;
        if (count === 0 && index !== pattern.length - 1)
            return false;
    }
    return true;
}
// prettier-ignore
function InGroup(pattern) {
    return pattern.slice(1, pattern.length - 1);
}
// prettier-ignore
function IsPrecedenceOr(pattern) {
    let count = 0;
    for (let index = 0; index < pattern.length; index++) {
        if (IsOpenParen(pattern, index))
            count += 1;
        if (IsCloseParen(pattern, index))
            count -= 1;
        if (IsSeparator(pattern, index) && count === 0)
            return true;
    }
    return false;
}
// prettier-ignore
function IsPrecedenceAnd(pattern) {
    for (let index = 0; index < pattern.length; index++) {
        if (IsOpenParen(pattern, index))
            return true;
    }
    return false;
}
// prettier-ignore
function Or(pattern) {
    let [count, start] = [0, 0];
    const expressions = [];
    for (let index = 0; index < pattern.length; index++) {
        if (IsOpenParen(pattern, index))
            count += 1;
        if (IsCloseParen(pattern, index))
            count -= 1;
        if (IsSeparator(pattern, index) && count === 0) {
            const range = pattern.slice(start, index);
            if (range.length > 0)
                expressions.push(TemplateLiteralParse(range));
            start = index + 1;
        }
    }
    const range = pattern.slice(start);
    if (range.length > 0)
        expressions.push(TemplateLiteralParse(range));
    if (expressions.length === 0)
        return { type: 'const', const: '' };
    if (expressions.length === 1)
        return expressions[0];
    return { type: 'or', expr: expressions };
}
// prettier-ignore
function And(pattern) {
    function Group(value, index) {
        if (!IsOpenParen(value, index))
            throw new TemplateLiteralParserError(`TemplateLiteralParser: Index must point to open parens`);
        let count = 0;
        for (let scan = index; scan < value.length; scan++) {
            if (IsOpenParen(value, scan))
                count += 1;
            if (IsCloseParen(value, scan))
                count -= 1;
            if (count === 0)
                return [index, scan];
        }
        throw new TemplateLiteralParserError(`TemplateLiteralParser: Unclosed group parens in expression`);
    }
    function Range(pattern, index) {
        for (let scan = index; scan < pattern.length; scan++) {
            if (IsOpenParen(pattern, scan))
                return [index, scan];
        }
        return [index, pattern.length];
    }
    const expressions = [];
    for (let index = 0; index < pattern.length; index++) {
        if (IsOpenParen(pattern, index)) {
            const [start, end] = Group(pattern, index);
            const range = pattern.slice(start, end + 1);
            expressions.push(TemplateLiteralParse(range));
            index = end;
        }
        else {
            const [start, end] = Range(pattern, index);
            const range = pattern.slice(start, end);
            if (range.length > 0)
                expressions.push(TemplateLiteralParse(range));
            index = end - 1;
        }
    }
    return ((expressions.length === 0) ? { type: 'const', const: '' } :
        (expressions.length === 1) ? expressions[0] :
            { type: 'and', expr: expressions });
}
// ------------------------------------------------------------------
// TemplateLiteralParse
// ------------------------------------------------------------------
/** Parses a pattern and returns an expression tree */
function TemplateLiteralParse(pattern) {
    // prettier-ignore
    return (IsGroup(pattern) ? TemplateLiteralParse(InGroup(pattern)) :
        IsPrecedenceOr(pattern) ? Or(pattern) :
            IsPrecedenceAnd(pattern) ? And(pattern) :
                { type: 'const', const: Unescape(pattern) });
}
// ------------------------------------------------------------------
// TemplateLiteralParseExact
// ------------------------------------------------------------------
/** Parses a pattern and strips forward and trailing ^ and $ */
function TemplateLiteralParseExact(pattern) {
    return TemplateLiteralParse(pattern.slice(1, pattern.length - 1));
}

;// ./node_modules/@sinclair/typebox/build/esm/type/template-literal/finite.mjs


// ------------------------------------------------------------------
// TemplateLiteralFiniteError
// ------------------------------------------------------------------
class TemplateLiteralFiniteError extends error_error.TypeBoxError {
}
// ------------------------------------------------------------------
// IsTemplateLiteralFiniteCheck
// ------------------------------------------------------------------
// prettier-ignore
function IsNumberExpression(expression) {
    return (expression.type === 'or' &&
        expression.expr.length === 2 &&
        expression.expr[0].type === 'const' &&
        expression.expr[0].const === '0' &&
        expression.expr[1].type === 'const' &&
        expression.expr[1].const === '[1-9][0-9]*');
}
// prettier-ignore
function IsBooleanExpression(expression) {
    return (expression.type === 'or' &&
        expression.expr.length === 2 &&
        expression.expr[0].type === 'const' &&
        expression.expr[0].const === 'true' &&
        expression.expr[1].type === 'const' &&
        expression.expr[1].const === 'false');
}
// prettier-ignore
function IsStringExpression(expression) {
    return expression.type === 'const' && expression.const === '.*';
}
// ------------------------------------------------------------------
// IsTemplateLiteralExpressionFinite
// ------------------------------------------------------------------
// prettier-ignore
function IsTemplateLiteralExpressionFinite(expression) {
    return (IsNumberExpression(expression) || IsStringExpression(expression) ? false :
        IsBooleanExpression(expression) ? true :
            (expression.type === 'and') ? expression.expr.every((expr) => IsTemplateLiteralExpressionFinite(expr)) :
                (expression.type === 'or') ? expression.expr.every((expr) => IsTemplateLiteralExpressionFinite(expr)) :
                    (expression.type === 'const') ? true :
                        (() => { throw new TemplateLiteralFiniteError(`Unknown expression type`); })());
}
/** Returns true if this TemplateLiteral resolves to a finite set of values */
function IsTemplateLiteralFinite(schema) {
    const expression = TemplateLiteralParseExact(schema.pattern);
    return IsTemplateLiteralExpressionFinite(expression);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/template-literal/generate.mjs



// ------------------------------------------------------------------
// TemplateLiteralGenerateError
// ------------------------------------------------------------------
class TemplateLiteralGenerateError extends error_error.TypeBoxError {
}
// ------------------------------------------------------------------
// TemplateLiteralExpressionGenerate
// ------------------------------------------------------------------
// prettier-ignore
function* GenerateReduce(buffer) {
    if (buffer.length === 1)
        return yield* buffer[0];
    for (const left of buffer[0]) {
        for (const right of GenerateReduce(buffer.slice(1))) {
            yield `${left}${right}`;
        }
    }
}
// prettier-ignore
function* GenerateAnd(expression) {
    return yield* GenerateReduce(expression.expr.map((expr) => [...TemplateLiteralExpressionGenerate(expr)]));
}
// prettier-ignore
function* GenerateOr(expression) {
    for (const expr of expression.expr)
        yield* TemplateLiteralExpressionGenerate(expr);
}
// prettier-ignore
function* GenerateConst(expression) {
    return yield expression.const;
}
function* TemplateLiteralExpressionGenerate(expression) {
    return expression.type === 'and'
        ? yield* GenerateAnd(expression)
        : expression.type === 'or'
            ? yield* GenerateOr(expression)
            : expression.type === 'const'
                ? yield* GenerateConst(expression)
                : (() => {
                    throw new TemplateLiteralGenerateError('Unknown expression');
                })();
}
/** Generates a tuple of strings from the given TemplateLiteral. Returns an empty tuple if infinite. */
function TemplateLiteralGenerate(schema) {
    const expression = TemplateLiteralParseExact(schema.pattern);
    // prettier-ignore
    return (IsTemplateLiteralExpressionFinite(expression)
        ? [...TemplateLiteralExpressionGenerate(expression)]
        : []);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/indexed/indexed-property-keys.mjs

// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------

// prettier-ignore
function FromTemplateLiteral(templateLiteral) {
    const keys = TemplateLiteralGenerate(templateLiteral);
    return keys.map(key => key.toString());
}
// prettier-ignore
function indexed_property_keys_FromUnion(types) {
    const result = [];
    for (const type of types)
        result.push(...IndexPropertyKeys(type));
    return result;
}
// prettier-ignore
function FromLiteral(literalValue) {
    return ([literalValue.toString()] // TS 5.4 observes TLiteralValue as not having a toString()
    );
}
/** Returns a tuple of PropertyKeys derived from the given TSchema */
// prettier-ignore
function IndexPropertyKeys(type) {
    return [...new Set(((0,kind.IsTemplateLiteral)(type) ? FromTemplateLiteral(type) :
            (0,kind.IsUnion)(type) ? indexed_property_keys_FromUnion(type.anyOf) :
                (0,kind.IsLiteral)(type) ? FromLiteral(type.const) :
                    (0,kind.IsNumber)(type) ? ['[number]'] :
                        (0,kind.IsInteger)(type) ? ['[number]'] :
                            []))];
}

// EXTERNAL MODULE: ./node_modules/@sinclair/typebox/build/esm/type/clone/value.mjs
var value = __webpack_require__(835);
;// ./node_modules/@sinclair/typebox/build/esm/type/indexed/indexed-from-mapped-key.mjs



// prettier-ignore
function MappedIndexPropertyKey(type, key, options) {
    return { [key]: Index(type, [key], (0,value.Clone)(options)) };
}
// prettier-ignore
function MappedIndexPropertyKeys(type, propertyKeys, options) {
    return propertyKeys.reduce((result, left) => {
        return { ...result, ...MappedIndexPropertyKey(type, left, options) };
    }, {});
}
// prettier-ignore
function MappedIndexProperties(type, mappedKey, options) {
    return MappedIndexPropertyKeys(type, mappedKey.keys, options);
}
// prettier-ignore
function IndexFromMappedKey(type, mappedKey, options) {
    const properties = MappedIndexProperties(type, mappedKey, options);
    return MappedResult(properties);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/indexed/indexed-from-mapped-result.mjs



// prettier-ignore
function indexed_from_mapped_result_FromProperties(type, properties, options) {
    const result = {};
    for (const K2 of Object.getOwnPropertyNames(properties)) {
        result[K2] = Index(type, IndexPropertyKeys(properties[K2]), options);
    }
    return result;
}
// prettier-ignore
function indexed_from_mapped_result_FromMappedResult(type, mappedResult, options) {
    return indexed_from_mapped_result_FromProperties(type, mappedResult.properties, options);
}
// prettier-ignore
function IndexFromMappedResult(type, mappedResult, options) {
    const properties = indexed_from_mapped_result_FromMappedResult(type, mappedResult, options);
    return MappedResult(properties);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/indexed/indexed.mjs









// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------

// prettier-ignore
function indexed_FromRest(types, key) {
    return types.map(type => IndexFromPropertyKey(type, key));
}
// prettier-ignore
function FromIntersectRest(types) {
    return types.filter(type => !(0,kind.IsNever)(type));
}
// prettier-ignore
function indexed_FromIntersect(types, key) {
    return (IntersectEvaluated(FromIntersectRest(indexed_FromRest(types, key))));
}
// prettier-ignore
function FromUnionRest(types) {
    return (types.some(L => (0,kind.IsNever)(L))
        ? []
        : types);
}
// prettier-ignore
function indexed_FromUnion(types, key) {
    return (UnionEvaluated(FromUnionRest(indexed_FromRest(types, key))));
}
// prettier-ignore
function FromTuple(types, key) {
    return (key in types ? types[key] :
        key === '[number]' ? UnionEvaluated(types) :
            (0,never.Never)());
}
// prettier-ignore
function FromArray(type, key) {
    return (key === '[number]'
        ? type
        : (0,never.Never)());
}
// prettier-ignore
function FromProperty(properties, propertyKey) {
    return (propertyKey in properties ? properties[propertyKey] : (0,never.Never)());
}
// prettier-ignore
function IndexFromPropertyKey(type, propertyKey) {
    return ((0,kind.IsIntersect)(type) ? indexed_FromIntersect(type.allOf, propertyKey) :
        (0,kind.IsUnion)(type) ? indexed_FromUnion(type.anyOf, propertyKey) :
            (0,kind.IsTuple)(type) ? FromTuple(type.items ?? [], propertyKey) :
                (0,kind.IsArray)(type) ? FromArray(type.items, propertyKey) :
                    (0,kind.IsObject)(type) ? FromProperty(type.properties, propertyKey) :
                        (0,never.Never)());
}
// prettier-ignore
function IndexFromPropertyKeys(type, propertyKeys) {
    return propertyKeys.map(propertyKey => IndexFromPropertyKey(type, propertyKey));
}
// prettier-ignore
function FromSchema(type, propertyKeys) {
    return (UnionEvaluated(IndexFromPropertyKeys(type, propertyKeys)));
}
// prettier-ignore
function IndexFromComputed(type, key) {
    return Computed('Index', [type, key]);
}
/** `[Json]` Returns an Indexed property type for the given keys */
function Index(type, key, options) {
    // computed-type
    if ((0,kind.IsRef)(type) || (0,kind.IsRef)(key)) {
        const error = `Index types using Ref parameters require both Type and Key to be of TSchema`;
        if (!(0,kind.IsSchema)(type) || !(0,kind.IsSchema)(key))
            throw new error_error.TypeBoxError(error);
        return computed_Computed('Index', [type, key]);
    }
    // mapped-types
    if ((0,kind.IsMappedResult)(key))
        return IndexFromMappedResult(type, key, options);
    if ((0,kind.IsMappedKey)(key))
        return IndexFromMappedKey(type, key, options);
    // prettier-ignore
    return (0,create_type.CreateType)((0,kind.IsSchema)(key)
        ? FromSchema(type, IndexPropertyKeys(key))
        : FromSchema(type, key), options);
}

// EXTERNAL MODULE: ./node_modules/@sinclair/typebox/build/esm/type/keyof/keyof-property-keys.mjs
var keyof_property_keys = __webpack_require__(692);
;// ./node_modules/@sinclair/typebox/build/esm/type/object/object.mjs


// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------

function RequiredKeys(properties) {
    const keys = [];
    for (let key in properties) {
        if (!(0,kind.IsOptional)(properties[key]))
            keys.push(key);
    }
    return keys;
}
/** `[Json]` Creates an Object type */
function _Object(properties, options) {
    const required = RequiredKeys(properties);
    const schematic = required.length > 0 ? { [symbols.Kind]: 'Object', type: 'object', properties, required } : { [symbols.Kind]: 'Object', type: 'object', properties };
    return (0,create_type.CreateType)(schematic, options);
}
/** `[Json]` Creates an Object type */
var object_Object = _Object;

// EXTERNAL MODULE: ./node_modules/@sinclair/typebox/build/esm/type/sets/set.mjs
var set = __webpack_require__(384);
;// ./node_modules/@sinclair/typebox/build/esm/type/composite/composite.mjs





// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------

// prettier-ignore
function CompositeKeys(T) {
    const Acc = [];
    for (const L of T)
        Acc.push(...(0,keyof_property_keys.KeyOfPropertyKeys)(L));
    return (0,set.SetDistinct)(Acc);
}
// prettier-ignore
function FilterNever(T) {
    return T.filter(L => !(0,kind.IsNever)(L));
}
// prettier-ignore
function CompositeProperty(T, K) {
    const Acc = [];
    for (const L of T)
        Acc.push(...IndexFromPropertyKeys(L, [K]));
    return FilterNever(Acc);
}
// prettier-ignore
function CompositeProperties(T, K) {
    const Acc = {};
    for (const L of K) {
        Acc[L] = IntersectEvaluated(CompositeProperty(T, L));
    }
    return Acc;
}
// prettier-ignore
function Composite(T, options) {
    const K = CompositeKeys(T);
    const P = CompositeProperties(T, K);
    const R = object_Object(P, options);
    return R;
}

;// ./node_modules/@sinclair/typebox/build/esm/type/date/date.mjs


/** `[JavaScript]` Creates a Date type */
function date_Date(options) {
    return (0,create_type.CreateType)({ [symbols.Kind]: 'Date', type: 'Date' }, options);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/function/function.mjs


/** `[JavaScript]` Creates a Function type */
function Function(parameters, returns, options) {
    return (0,create_type.CreateType)({ [symbols.Kind]: 'Function', type: 'Function', parameters, returns }, options);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/literal/literal.mjs


/** `[Json]` Creates a Literal type */
function Literal(value, options) {
    return (0,create_type.CreateType)({
        [symbols.Kind]: 'Literal',
        const: value,
        type: typeof value,
    }, options);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/null/null.mjs


/** `[Json]` Creates a Null type */
function Null(options) {
    return (0,create_type.CreateType)({ [symbols.Kind]: 'Null', type: 'null' }, options);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/symbol/symbol.mjs


/** `[JavaScript]` Creates a Symbol type */
function symbol_Symbol(options) {
    return (0,create_type.CreateType)({ [symbols.Kind]: 'Symbol', type: 'symbol' }, options);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/tuple/tuple.mjs


/** `[Json]` Creates a Tuple type */
function Tuple(types, options) {
    // prettier-ignore
    return (0,create_type.CreateType)(types.length > 0 ?
        { [symbols.Kind]: 'Tuple', type: 'array', items: types, additionalItems: false, minItems: types.length, maxItems: types.length } :
        { [symbols.Kind]: 'Tuple', type: 'array', minItems: types.length, maxItems: types.length }, options);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/readonly/readonly-from-mapped-result.mjs


// prettier-ignore
function readonly_from_mapped_result_FromProperties(K, F) {
    const Acc = {};
    for (const K2 of globalThis.Object.getOwnPropertyNames(K))
        Acc[K2] = Readonly(K[K2], F);
    return Acc;
}
// prettier-ignore
function readonly_from_mapped_result_FromMappedResult(R, F) {
    return readonly_from_mapped_result_FromProperties(R.properties, F);
}
// prettier-ignore
function ReadonlyFromMappedResult(R, F) {
    const P = readonly_from_mapped_result_FromMappedResult(R, F);
    return MappedResult(P);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/readonly/readonly.mjs





function RemoveReadonly(schema) {
    return (0,create_type.CreateType)(Discard(schema, [symbols.ReadonlyKind]));
}
function AddReadonly(schema) {
    return (0,create_type.CreateType)({ ...schema, [symbols.ReadonlyKind]: 'Readonly' });
}
// prettier-ignore
function ReadonlyWithFlag(schema, F) {
    return (F === false
        ? RemoveReadonly(schema)
        : AddReadonly(schema));
}
/** `[Json]` Creates a Readonly property */
function Readonly(schema, enable) {
    const F = enable ?? true;
    return (0,kind.IsMappedResult)(schema) ? ReadonlyFromMappedResult(schema, F) : ReadonlyWithFlag(schema, F);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/undefined/undefined.mjs


/** `[JavaScript]` Creates a Undefined type */
function Undefined(options) {
    return (0,create_type.CreateType)({ [symbols.Kind]: 'Undefined', type: 'undefined' }, options);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/uint8array/uint8array.mjs


/** `[JavaScript]` Creates a Uint8Array type */
function Uint8Array(options) {
    return (0,create_type.CreateType)({ [symbols.Kind]: 'Uint8Array', type: 'Uint8Array' }, options);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/unknown/unknown.mjs


/** `[Json]` Creates an Unknown type */
function Unknown(options) {
    return (0,create_type.CreateType)({ [symbols.Kind]: 'Unknown' }, options);
}

// EXTERNAL MODULE: ./node_modules/@sinclair/typebox/build/esm/type/guard/value.mjs
var guard_value = __webpack_require__(331);
;// ./node_modules/@sinclair/typebox/build/esm/type/const/const.mjs














// ------------------------------------------------------------------
// ValueGuard
// ------------------------------------------------------------------

// prettier-ignore
function const_FromArray(T) {
    return T.map(L => FromValue(L, false));
}
// prettier-ignore
function const_FromProperties(value) {
    const Acc = {};
    for (const K of globalThis.Object.getOwnPropertyNames(value))
        Acc[K] = Readonly(FromValue(value[K], false));
    return Acc;
}
function ConditionalReadonly(T, root) {
    return (root === true ? T : Readonly(T));
}
// prettier-ignore
function FromValue(value, root) {
    return ((0,guard_value.IsAsyncIterator)(value) ? ConditionalReadonly(Any(), root) :
        (0,guard_value.IsIterator)(value) ? ConditionalReadonly(Any(), root) :
            (0,guard_value.IsArray)(value) ? Readonly(Tuple(const_FromArray(value))) :
                (0,guard_value.IsUint8Array)(value) ? Uint8Array() :
                    (0,guard_value.IsDate)(value) ? date_Date() :
                        (0,guard_value.IsObject)(value) ? ConditionalReadonly(object_Object(const_FromProperties(value)), root) :
                            (0,guard_value.IsFunction)(value) ? ConditionalReadonly(Function([], Unknown()), root) :
                                (0,guard_value.IsUndefined)(value) ? Undefined() :
                                    (0,guard_value.IsNull)(value) ? Null() :
                                        (0,guard_value.IsSymbol)(value) ? symbol_Symbol() :
                                            (0,guard_value.IsBigInt)(value) ? BigInt() :
                                                (0,guard_value.IsNumber)(value) ? Literal(value) :
                                                    (0,guard_value.IsBoolean)(value) ? Literal(value) :
                                                        (0,guard_value.IsString)(value) ? Literal(value) :
                                                            object_Object({}));
}
/** `[JavaScript]` Creates a readonly const type from the given value. */
function Const(T, options) {
    return (0,create_type.CreateType)(FromValue(T, true), options);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/constructor/constructor.mjs


/** `[JavaScript]` Creates a Constructor type */
function Constructor(parameters, returns, options) {
    return (0,create_type.CreateType)({ [symbols.Kind]: 'Constructor', type: 'Constructor', parameters, returns }, options);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/constructor-parameters/constructor-parameters.mjs

/** `[JavaScript]` Extracts the ConstructorParameters from the given Constructor type */
function ConstructorParameters(schema, options) {
    return Tuple(schema.parameters, options);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/enum/enum.mjs



// ------------------------------------------------------------------
// ValueGuard
// ------------------------------------------------------------------

/** `[Json]` Creates a Enum type */
function Enum(item, options) {
    if ((0,guard_value.IsUndefined)(item))
        throw new Error('Enum undefined or empty');
    const values1 = globalThis.Object.getOwnPropertyNames(item)
        .filter((key) => isNaN(key))
        .map((key) => item[key]);
    const values2 = [...new Set(values1)];
    const anyOf = values2.map((value) => Literal(value));
    return Union(anyOf, { ...options, [symbols.Hint]: 'Enum' });
}

;// ./node_modules/@sinclair/typebox/build/esm/type/number/number.mjs


/** `[Json]` Creates a Number type */
function number_Number(options) {
    return (0,create_type.CreateType)({ [symbols.Kind]: 'Number', type: 'number' }, options);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/string/string.mjs


/** `[Json]` Creates a String type */
function string_String(options) {
    return (0,create_type.CreateType)({ [symbols.Kind]: 'String', type: 'string' }, options);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/template-literal/union.mjs



/** Returns a Union from the given TemplateLiteral */
function TemplateLiteralToUnion(schema) {
    const R = TemplateLiteralGenerate(schema);
    const L = R.map((S) => Literal(S));
    return UnionEvaluated(L);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/patterns/patterns.mjs
const PatternBoolean = '(true|false)';
const PatternNumber = '(0|[1-9][0-9]*)';
const PatternString = '(.*)';
const PatternNever = '(?!.*)';
const PatternBooleanExact = (/* unused pure expression or super */ null && (`^${PatternBoolean}$`));
const PatternNumberExact = `^${PatternNumber}$`;
const PatternStringExact = `^${PatternString}$`;
const PatternNeverExact = `^${PatternNever}$`;

;// ./node_modules/@sinclair/typebox/build/esm/type/guard/type.mjs



class TypeGuardUnknownTypeError extends (/* unused pure expression or super */ null && (TypeBoxError)) {
}
const KnownTypes = [
    'Any',
    'Array',
    'AsyncIterator',
    'BigInt',
    'Boolean',
    'Computed',
    'Constructor',
    'Date',
    'Enum',
    'Function',
    'Integer',
    'Intersect',
    'Iterator',
    'Literal',
    'MappedKey',
    'MappedResult',
    'Not',
    'Null',
    'Number',
    'Object',
    'Promise',
    'Record',
    'Ref',
    'RegExp',
    'String',
    'Symbol',
    'TemplateLiteral',
    'This',
    'Tuple',
    'Undefined',
    'Union',
    'Uint8Array',
    'Unknown',
    'Void',
];
function IsPattern(value) {
    try {
        new RegExp(value);
        return true;
    }
    catch {
        return false;
    }
}
function IsControlCharacterFree(value) {
    if (!guard_value.IsString(value))
        return false;
    for (let i = 0; i < value.length; i++) {
        const code = value.charCodeAt(i);
        if ((code >= 7 && code <= 13) || code === 27 || code === 127) {
            return false;
        }
    }
    return true;
}
function IsAdditionalProperties(value) {
    return IsOptionalBoolean(value) || IsSchema(value);
}
function IsOptionalBigInt(value) {
    return guard_value.IsUndefined(value) || guard_value.IsBigInt(value);
}
function IsOptionalNumber(value) {
    return guard_value.IsUndefined(value) || guard_value.IsNumber(value);
}
function IsOptionalBoolean(value) {
    return guard_value.IsUndefined(value) || guard_value.IsBoolean(value);
}
function IsOptionalString(value) {
    return guard_value.IsUndefined(value) || guard_value.IsString(value);
}
function IsOptionalPattern(value) {
    return guard_value.IsUndefined(value) || (guard_value.IsString(value) && IsControlCharacterFree(value) && IsPattern(value));
}
function IsOptionalFormat(value) {
    return guard_value.IsUndefined(value) || (guard_value.IsString(value) && IsControlCharacterFree(value));
}
function IsOptionalSchema(value) {
    return guard_value.IsUndefined(value) || IsSchema(value);
}
// ------------------------------------------------------------------
// Modifiers
// ------------------------------------------------------------------
/** Returns true if this value has a Readonly symbol */
function IsReadonly(value) {
    return ValueGuard.IsObject(value) && value[ReadonlyKind] === 'Readonly';
}
/** Returns true if this value has a Optional symbol */
function IsOptional(value) {
    return guard_value.IsObject(value) && value[symbols.OptionalKind] === 'Optional';
}
// ------------------------------------------------------------------
// Types
// ------------------------------------------------------------------
/** Returns true if the given value is TAny */
function IsAny(value) {
    // prettier-ignore
    return (IsKindOf(value, 'Any') &&
        IsOptionalString(value.$id));
}
/** Returns true if the given value is TArray */
function IsArray(value) {
    return (IsKindOf(value, 'Array') &&
        value.type === 'array' &&
        IsOptionalString(value.$id) &&
        IsSchema(value.items) &&
        IsOptionalNumber(value.minItems) &&
        IsOptionalNumber(value.maxItems) &&
        IsOptionalBoolean(value.uniqueItems) &&
        IsOptionalSchema(value.contains) &&
        IsOptionalNumber(value.minContains) &&
        IsOptionalNumber(value.maxContains));
}
/** Returns true if the given value is TAsyncIterator */
function IsAsyncIterator(value) {
    // prettier-ignore
    return (IsKindOf(value, 'AsyncIterator') &&
        value.type === 'AsyncIterator' &&
        IsOptionalString(value.$id) &&
        IsSchema(value.items));
}
/** Returns true if the given value is TBigInt */
function IsBigInt(value) {
    // prettier-ignore
    return (IsKindOf(value, 'BigInt') &&
        value.type === 'bigint' &&
        IsOptionalString(value.$id) &&
        IsOptionalBigInt(value.exclusiveMaximum) &&
        IsOptionalBigInt(value.exclusiveMinimum) &&
        IsOptionalBigInt(value.maximum) &&
        IsOptionalBigInt(value.minimum) &&
        IsOptionalBigInt(value.multipleOf));
}
/** Returns true if the given value is TBoolean */
function IsBoolean(value) {
    // prettier-ignore
    return (IsKindOf(value, 'Boolean') &&
        value.type === 'boolean' &&
        IsOptionalString(value.$id));
}
/** Returns true if the given value is TComputed */
function IsComputed(value) {
    // prettier-ignore
    return (IsKindOf(value, 'Computed') &&
        guard_value.IsString(value.target) &&
        guard_value.IsArray(value.parameters) &&
        value.parameters.every((schema) => IsSchema(schema)));
}
/** Returns true if the given value is TConstructor */
function IsConstructor(value) {
    // prettier-ignore
    return (IsKindOf(value, 'Constructor') &&
        value.type === 'Constructor' &&
        IsOptionalString(value.$id) &&
        guard_value.IsArray(value.parameters) &&
        value.parameters.every(schema => IsSchema(schema)) &&
        IsSchema(value.returns));
}
/** Returns true if the given value is TDate */
function IsDate(value) {
    return (IsKindOf(value, 'Date') &&
        value.type === 'Date' &&
        IsOptionalString(value.$id) &&
        IsOptionalNumber(value.exclusiveMaximumTimestamp) &&
        IsOptionalNumber(value.exclusiveMinimumTimestamp) &&
        IsOptionalNumber(value.maximumTimestamp) &&
        IsOptionalNumber(value.minimumTimestamp) &&
        IsOptionalNumber(value.multipleOfTimestamp));
}
/** Returns true if the given value is TFunction */
function IsFunction(value) {
    // prettier-ignore
    return (IsKindOf(value, 'Function') &&
        value.type === 'Function' &&
        IsOptionalString(value.$id) &&
        guard_value.IsArray(value.parameters) &&
        value.parameters.every(schema => IsSchema(schema)) &&
        IsSchema(value.returns));
}
/** Returns true if the given value is TImport */
function IsImport(value) {
    // prettier-ignore
    return (IsKindOf(value, 'Import') &&
        ValueGuard.HasPropertyKey(value, '$defs') &&
        ValueGuard.IsObject(value.$defs) &&
        IsProperties(value.$defs) &&
        ValueGuard.HasPropertyKey(value, '$ref') &&
        ValueGuard.IsString(value.$ref) &&
        value.$ref in value.$defs // required
    );
}
/** Returns true if the given value is TInteger */
function IsInteger(value) {
    return (IsKindOf(value, 'Integer') &&
        value.type === 'integer' &&
        IsOptionalString(value.$id) &&
        IsOptionalNumber(value.exclusiveMaximum) &&
        IsOptionalNumber(value.exclusiveMinimum) &&
        IsOptionalNumber(value.maximum) &&
        IsOptionalNumber(value.minimum) &&
        IsOptionalNumber(value.multipleOf));
}
/** Returns true if the given schema is TProperties */
function IsProperties(value) {
    // prettier-ignore
    return (guard_value.IsObject(value) &&
        Object.entries(value).every(([key, schema]) => IsControlCharacterFree(key) && IsSchema(schema)));
}
/** Returns true if the given value is TIntersect */
function IsIntersect(value) {
    // prettier-ignore
    return (IsKindOf(value, 'Intersect') &&
        (guard_value.IsString(value.type) && value.type !== 'object' ? false : true) &&
        guard_value.IsArray(value.allOf) &&
        value.allOf.every(schema => IsSchema(schema) && !IsTransform(schema)) &&
        IsOptionalString(value.type) &&
        (IsOptionalBoolean(value.unevaluatedProperties) || IsOptionalSchema(value.unevaluatedProperties)) &&
        IsOptionalString(value.$id));
}
/** Returns true if the given value is TIterator */
function IsIterator(value) {
    // prettier-ignore
    return (IsKindOf(value, 'Iterator') &&
        value.type === 'Iterator' &&
        IsOptionalString(value.$id) &&
        IsSchema(value.items));
}
/** Returns true if the given value is a TKind with the given name. */
function IsKindOf(value, kind) {
    return guard_value.IsObject(value) && symbols.Kind in value && value[symbols.Kind] === kind;
}
/** Returns true if the given value is TLiteral<string> */
function IsLiteralString(value) {
    return IsLiteral(value) && guard_value.IsString(value.const);
}
/** Returns true if the given value is TLiteral<number> */
function IsLiteralNumber(value) {
    return IsLiteral(value) && guard_value.IsNumber(value.const);
}
/** Returns true if the given value is TLiteral<boolean> */
function IsLiteralBoolean(value) {
    return IsLiteral(value) && guard_value.IsBoolean(value.const);
}
/** Returns true if the given value is TLiteral */
function IsLiteral(value) {
    // prettier-ignore
    return (IsKindOf(value, 'Literal') &&
        IsOptionalString(value.$id) && IsLiteralValue(value.const));
}
/** Returns true if the given value is a TLiteralValue */
function IsLiteralValue(value) {
    return guard_value.IsBoolean(value) || guard_value.IsNumber(value) || guard_value.IsString(value);
}
/** Returns true if the given value is a TMappedKey */
function IsMappedKey(value) {
    // prettier-ignore
    return (IsKindOf(value, 'MappedKey') &&
        guard_value.IsArray(value.keys) &&
        value.keys.every(key => guard_value.IsNumber(key) || guard_value.IsString(key)));
}
/** Returns true if the given value is TMappedResult */
function IsMappedResult(value) {
    // prettier-ignore
    return (IsKindOf(value, 'MappedResult') &&
        IsProperties(value.properties));
}
/** Returns true if the given value is TNever */
function IsNever(value) {
    // prettier-ignore
    return (IsKindOf(value, 'Never') &&
        guard_value.IsObject(value.not) &&
        Object.getOwnPropertyNames(value.not).length === 0);
}
/** Returns true if the given value is TNot */
function IsNot(value) {
    // prettier-ignore
    return (IsKindOf(value, 'Not') &&
        IsSchema(value.not));
}
/** Returns true if the given value is TNull */
function IsNull(value) {
    // prettier-ignore
    return (IsKindOf(value, 'Null') &&
        value.type === 'null' &&
        IsOptionalString(value.$id));
}
/** Returns true if the given value is TNumber */
function IsNumber(value) {
    return (IsKindOf(value, 'Number') &&
        value.type === 'number' &&
        IsOptionalString(value.$id) &&
        IsOptionalNumber(value.exclusiveMaximum) &&
        IsOptionalNumber(value.exclusiveMinimum) &&
        IsOptionalNumber(value.maximum) &&
        IsOptionalNumber(value.minimum) &&
        IsOptionalNumber(value.multipleOf));
}
/** Returns true if the given value is TObject */
function IsObject(value) {
    // prettier-ignore
    return (IsKindOf(value, 'Object') &&
        value.type === 'object' &&
        IsOptionalString(value.$id) &&
        IsProperties(value.properties) &&
        IsAdditionalProperties(value.additionalProperties) &&
        IsOptionalNumber(value.minProperties) &&
        IsOptionalNumber(value.maxProperties));
}
/** Returns true if the given value is TPromise */
function IsPromise(value) {
    // prettier-ignore
    return (IsKindOf(value, 'Promise') &&
        value.type === 'Promise' &&
        IsOptionalString(value.$id) &&
        IsSchema(value.item));
}
/** Returns true if the given value is TRecord */
function IsRecord(value) {
    // prettier-ignore
    return (IsKindOf(value, 'Record') &&
        value.type === 'object' &&
        IsOptionalString(value.$id) &&
        IsAdditionalProperties(value.additionalProperties) &&
        guard_value.IsObject(value.patternProperties) &&
        ((schema) => {
            const keys = Object.getOwnPropertyNames(schema.patternProperties);
            return (keys.length === 1 &&
                IsPattern(keys[0]) &&
                guard_value.IsObject(schema.patternProperties) &&
                IsSchema(schema.patternProperties[keys[0]]));
        })(value));
}
/** Returns true if this value is TRecursive */
function IsRecursive(value) {
    return ValueGuard.IsObject(value) && Hint in value && value[Hint] === 'Recursive';
}
/** Returns true if the given value is TRef */
function IsRef(value) {
    // prettier-ignore
    return (IsKindOf(value, 'Ref') &&
        IsOptionalString(value.$id) &&
        guard_value.IsString(value.$ref));
}
/** Returns true if the given value is TRegExp */
function IsRegExp(value) {
    // prettier-ignore
    return (IsKindOf(value, 'RegExp') &&
        IsOptionalString(value.$id) &&
        guard_value.IsString(value.source) &&
        guard_value.IsString(value.flags) &&
        IsOptionalNumber(value.maxLength) &&
        IsOptionalNumber(value.minLength));
}
/** Returns true if the given value is TString */
function IsString(value) {
    // prettier-ignore
    return (IsKindOf(value, 'String') &&
        value.type === 'string' &&
        IsOptionalString(value.$id) &&
        IsOptionalNumber(value.minLength) &&
        IsOptionalNumber(value.maxLength) &&
        IsOptionalPattern(value.pattern) &&
        IsOptionalFormat(value.format));
}
/** Returns true if the given value is TSymbol */
function IsSymbol(value) {
    // prettier-ignore
    return (IsKindOf(value, 'Symbol') &&
        value.type === 'symbol' &&
        IsOptionalString(value.$id));
}
/** Returns true if the given value is TTemplateLiteral */
function IsTemplateLiteral(value) {
    // prettier-ignore
    return (IsKindOf(value, 'TemplateLiteral') &&
        value.type === 'string' &&
        guard_value.IsString(value.pattern) &&
        value.pattern[0] === '^' &&
        value.pattern[value.pattern.length - 1] === '$');
}
/** Returns true if the given value is TThis */
function IsThis(value) {
    // prettier-ignore
    return (IsKindOf(value, 'This') &&
        IsOptionalString(value.$id) &&
        guard_value.IsString(value.$ref));
}
/** Returns true of this value is TTransform */
function IsTransform(value) {
    return guard_value.IsObject(value) && symbols.TransformKind in value;
}
/** Returns true if the given value is TTuple */
function IsTuple(value) {
    // prettier-ignore
    return (IsKindOf(value, 'Tuple') &&
        value.type === 'array' &&
        IsOptionalString(value.$id) &&
        guard_value.IsNumber(value.minItems) &&
        guard_value.IsNumber(value.maxItems) &&
        value.minItems === value.maxItems &&
        (( // empty
        guard_value.IsUndefined(value.items) &&
            guard_value.IsUndefined(value.additionalItems) &&
            value.minItems === 0) || (guard_value.IsArray(value.items) &&
            value.items.every(schema => IsSchema(schema)))));
}
/** Returns true if the given value is TUndefined */
function IsUndefined(value) {
    // prettier-ignore
    return (IsKindOf(value, 'Undefined') &&
        value.type === 'undefined' &&
        IsOptionalString(value.$id));
}
/** Returns true if the given value is TUnion<Literal<string | number>[]> */
function IsUnionLiteral(value) {
    return IsUnion(value) && value.anyOf.every((schema) => IsLiteralString(schema) || IsLiteralNumber(schema));
}
/** Returns true if the given value is TUnion */
function IsUnion(value) {
    // prettier-ignore
    return (IsKindOf(value, 'Union') &&
        IsOptionalString(value.$id) &&
        guard_value.IsObject(value) &&
        guard_value.IsArray(value.anyOf) &&
        value.anyOf.every(schema => IsSchema(schema)));
}
/** Returns true if the given value is TUint8Array */
function IsUint8Array(value) {
    // prettier-ignore
    return (IsKindOf(value, 'Uint8Array') &&
        value.type === 'Uint8Array' &&
        IsOptionalString(value.$id) &&
        IsOptionalNumber(value.minByteLength) &&
        IsOptionalNumber(value.maxByteLength));
}
/** Returns true if the given value is TUnknown */
function IsUnknown(value) {
    // prettier-ignore
    return (IsKindOf(value, 'Unknown') &&
        IsOptionalString(value.$id));
}
/** Returns true if the given value is a raw TUnsafe */
function IsUnsafe(value) {
    return IsKindOf(value, 'Unsafe');
}
/** Returns true if the given value is TVoid */
function IsVoid(value) {
    // prettier-ignore
    return (IsKindOf(value, 'Void') &&
        value.type === 'void' &&
        IsOptionalString(value.$id));
}
/** Returns true if the given value is TKind */
function IsKind(value) {
    return guard_value.IsObject(value) && symbols.Kind in value && guard_value.IsString(value[symbols.Kind]) && !KnownTypes.includes(value[symbols.Kind]);
}
/** Returns true if the given value is TSchema */
function IsSchema(value) {
    // prettier-ignore
    return (guard_value.IsObject(value)) && (IsAny(value) ||
        IsArray(value) ||
        IsBoolean(value) ||
        IsBigInt(value) ||
        IsAsyncIterator(value) ||
        IsComputed(value) ||
        IsConstructor(value) ||
        IsDate(value) ||
        IsFunction(value) ||
        IsInteger(value) ||
        IsIntersect(value) ||
        IsIterator(value) ||
        IsLiteral(value) ||
        IsMappedKey(value) ||
        IsMappedResult(value) ||
        IsNever(value) ||
        IsNot(value) ||
        IsNull(value) ||
        IsNumber(value) ||
        IsObject(value) ||
        IsPromise(value) ||
        IsRecord(value) ||
        IsRef(value) ||
        IsRegExp(value) ||
        IsString(value) ||
        IsSymbol(value) ||
        IsTemplateLiteral(value) ||
        IsThis(value) ||
        IsTuple(value) ||
        IsUndefined(value) ||
        IsUnion(value) ||
        IsUint8Array(value) ||
        IsUnknown(value) ||
        IsUnsafe(value) ||
        IsVoid(value) ||
        IsKind(value));
}

;// ./node_modules/@sinclair/typebox/build/esm/type/extends/extends-check.mjs










class ExtendsResolverError extends error_error.TypeBoxError {
}
var ExtendsResult;
(function (ExtendsResult) {
    ExtendsResult[ExtendsResult["Union"] = 0] = "Union";
    ExtendsResult[ExtendsResult["True"] = 1] = "True";
    ExtendsResult[ExtendsResult["False"] = 2] = "False";
})(ExtendsResult || (ExtendsResult = {}));
// ------------------------------------------------------------------
// IntoBooleanResult
// ------------------------------------------------------------------
// prettier-ignore
function IntoBooleanResult(result) {
    return result === ExtendsResult.False ? result : ExtendsResult.True;
}
// ------------------------------------------------------------------
// Throw
// ------------------------------------------------------------------
// prettier-ignore
function Throw(message) {
    throw new ExtendsResolverError(message);
}
// ------------------------------------------------------------------
// StructuralRight
// ------------------------------------------------------------------
// prettier-ignore
function IsStructuralRight(right) {
    return (IsNever(right) ||
        IsIntersect(right) ||
        IsUnion(right) ||
        IsUnknown(right) ||
        IsAny(right));
}
// prettier-ignore
function StructuralRight(left, right) {
    return (IsNever(right) ? FromNeverRight(left, right) :
        IsIntersect(right) ? FromIntersectRight(left, right) :
            IsUnion(right) ? FromUnionRight(left, right) :
                IsUnknown(right) ? FromUnknownRight(left, right) :
                    IsAny(right) ? FromAnyRight(left, right) :
                        Throw('StructuralRight'));
}
// ------------------------------------------------------------------
// Any
// ------------------------------------------------------------------
// prettier-ignore
function FromAnyRight(left, right) {
    return ExtendsResult.True;
}
// prettier-ignore
function FromAny(left, right) {
    return (IsIntersect(right) ? FromIntersectRight(left, right) :
        (IsUnion(right) && right.anyOf.some((schema) => IsAny(schema) || IsUnknown(schema))) ? ExtendsResult.True :
            IsUnion(right) ? ExtendsResult.Union :
                IsUnknown(right) ? ExtendsResult.True :
                    IsAny(right) ? ExtendsResult.True :
                        ExtendsResult.Union);
}
// ------------------------------------------------------------------
// Array
// ------------------------------------------------------------------
// prettier-ignore
function FromArrayRight(left, right) {
    return (IsUnknown(left) ? ExtendsResult.False :
        IsAny(left) ? ExtendsResult.Union :
            IsNever(left) ? ExtendsResult.True :
                ExtendsResult.False);
}
// prettier-ignore
function extends_check_FromArray(left, right) {
    return (IsObject(right) && IsObjectArrayLike(right) ? ExtendsResult.True :
        IsStructuralRight(right) ? StructuralRight(left, right) :
            !IsArray(right) ? ExtendsResult.False :
                IntoBooleanResult(Visit(left.items, right.items)));
}
// ------------------------------------------------------------------
// AsyncIterator
// ------------------------------------------------------------------
// prettier-ignore
function FromAsyncIterator(left, right) {
    return (IsStructuralRight(right) ? StructuralRight(left, right) :
        !IsAsyncIterator(right) ? ExtendsResult.False :
            IntoBooleanResult(Visit(left.items, right.items)));
}
// ------------------------------------------------------------------
// BigInt
// ------------------------------------------------------------------
// prettier-ignore
function FromBigInt(left, right) {
    return (IsStructuralRight(right) ? StructuralRight(left, right) :
        IsObject(right) ? FromObjectRight(left, right) :
            IsRecord(right) ? FromRecordRight(left, right) :
                IsBigInt(right) ? ExtendsResult.True :
                    ExtendsResult.False);
}
// ------------------------------------------------------------------
// Boolean
// ------------------------------------------------------------------
// prettier-ignore
function FromBooleanRight(left, right) {
    return (IsLiteralBoolean(left) ? ExtendsResult.True :
        IsBoolean(left) ? ExtendsResult.True :
            ExtendsResult.False);
}
// prettier-ignore
function FromBoolean(left, right) {
    return (IsStructuralRight(right) ? StructuralRight(left, right) :
        IsObject(right) ? FromObjectRight(left, right) :
            IsRecord(right) ? FromRecordRight(left, right) :
                IsBoolean(right) ? ExtendsResult.True :
                    ExtendsResult.False);
}
// ------------------------------------------------------------------
// Constructor
// ------------------------------------------------------------------
// prettier-ignore
function FromConstructor(left, right) {
    return (IsStructuralRight(right) ? StructuralRight(left, right) :
        IsObject(right) ? FromObjectRight(left, right) :
            !IsConstructor(right) ? ExtendsResult.False :
                left.parameters.length > right.parameters.length ? ExtendsResult.False :
                    (!left.parameters.every((schema, index) => IntoBooleanResult(Visit(right.parameters[index], schema)) === ExtendsResult.True)) ? ExtendsResult.False :
                        IntoBooleanResult(Visit(left.returns, right.returns)));
}
// ------------------------------------------------------------------
// Date
// ------------------------------------------------------------------
// prettier-ignore
function FromDate(left, right) {
    return (IsStructuralRight(right) ? StructuralRight(left, right) :
        IsObject(right) ? FromObjectRight(left, right) :
            IsRecord(right) ? FromRecordRight(left, right) :
                IsDate(right) ? ExtendsResult.True :
                    ExtendsResult.False);
}
// ------------------------------------------------------------------
// Function
// ------------------------------------------------------------------
// prettier-ignore
function FromFunction(left, right) {
    return (IsStructuralRight(right) ? StructuralRight(left, right) :
        IsObject(right) ? FromObjectRight(left, right) :
            !IsFunction(right) ? ExtendsResult.False :
                left.parameters.length > right.parameters.length ? ExtendsResult.False :
                    (!left.parameters.every((schema, index) => IntoBooleanResult(Visit(right.parameters[index], schema)) === ExtendsResult.True)) ? ExtendsResult.False :
                        IntoBooleanResult(Visit(left.returns, right.returns)));
}
// ------------------------------------------------------------------
// Integer
// ------------------------------------------------------------------
// prettier-ignore
function FromIntegerRight(left, right) {
    return (IsLiteral(left) && guard_value.IsNumber(left.const) ? ExtendsResult.True :
        IsNumber(left) || IsInteger(left) ? ExtendsResult.True :
            ExtendsResult.False);
}
// prettier-ignore
function FromInteger(left, right) {
    return (IsInteger(right) || IsNumber(right) ? ExtendsResult.True :
        IsStructuralRight(right) ? StructuralRight(left, right) :
            IsObject(right) ? FromObjectRight(left, right) :
                IsRecord(right) ? FromRecordRight(left, right) :
                    ExtendsResult.False);
}
// ------------------------------------------------------------------
// Intersect
// ------------------------------------------------------------------
// prettier-ignore
function FromIntersectRight(left, right) {
    return right.allOf.every((schema) => Visit(left, schema) === ExtendsResult.True)
        ? ExtendsResult.True
        : ExtendsResult.False;
}
// prettier-ignore
function extends_check_FromIntersect(left, right) {
    return left.allOf.some((schema) => Visit(schema, right) === ExtendsResult.True)
        ? ExtendsResult.True
        : ExtendsResult.False;
}
// ------------------------------------------------------------------
// Iterator
// ------------------------------------------------------------------
// prettier-ignore
function FromIterator(left, right) {
    return (IsStructuralRight(right) ? StructuralRight(left, right) :
        !IsIterator(right) ? ExtendsResult.False :
            IntoBooleanResult(Visit(left.items, right.items)));
}
// ------------------------------------------------------------------
// Literal
// ------------------------------------------------------------------
// prettier-ignore
function extends_check_FromLiteral(left, right) {
    return (IsLiteral(right) && right.const === left.const ? ExtendsResult.True :
        IsStructuralRight(right) ? StructuralRight(left, right) :
            IsObject(right) ? FromObjectRight(left, right) :
                IsRecord(right) ? FromRecordRight(left, right) :
                    IsString(right) ? FromStringRight(left, right) :
                        IsNumber(right) ? FromNumberRight(left, right) :
                            IsInteger(right) ? FromIntegerRight(left, right) :
                                IsBoolean(right) ? FromBooleanRight(left, right) :
                                    ExtendsResult.False);
}
// ------------------------------------------------------------------
// Never
// ------------------------------------------------------------------
// prettier-ignore
function FromNeverRight(left, right) {
    return ExtendsResult.False;
}
// prettier-ignore
function FromNever(left, right) {
    return ExtendsResult.True;
}
// ------------------------------------------------------------------
// Not
// ------------------------------------------------------------------
// prettier-ignore
function UnwrapTNot(schema) {
    let [current, depth] = [schema, 0];
    while (true) {
        if (!IsNot(current))
            break;
        current = current.not;
        depth += 1;
    }
    return depth % 2 === 0 ? current : Unknown();
}
// prettier-ignore
function FromNot(left, right) {
    // TypeScript has no concept of negated types, and attempts to correctly check the negated
    // type at runtime would put TypeBox at odds with TypeScripts ability to statically infer
    // the type. Instead we unwrap to either unknown or T and continue evaluating.
    // prettier-ignore
    return (IsNot(left) ? Visit(UnwrapTNot(left), right) :
        IsNot(right) ? Visit(left, UnwrapTNot(right)) :
            Throw('Invalid fallthrough for Not'));
}
// ------------------------------------------------------------------
// Null
// ------------------------------------------------------------------
// prettier-ignore
function FromNull(left, right) {
    return (IsStructuralRight(right) ? StructuralRight(left, right) :
        IsObject(right) ? FromObjectRight(left, right) :
            IsRecord(right) ? FromRecordRight(left, right) :
                IsNull(right) ? ExtendsResult.True :
                    ExtendsResult.False);
}
// ------------------------------------------------------------------
// Number
// ------------------------------------------------------------------
// prettier-ignore
function FromNumberRight(left, right) {
    return (IsLiteralNumber(left) ? ExtendsResult.True :
        IsNumber(left) || IsInteger(left) ? ExtendsResult.True :
            ExtendsResult.False);
}
// prettier-ignore
function FromNumber(left, right) {
    return (IsStructuralRight(right) ? StructuralRight(left, right) :
        IsObject(right) ? FromObjectRight(left, right) :
            IsRecord(right) ? FromRecordRight(left, right) :
                IsInteger(right) || IsNumber(right) ? ExtendsResult.True :
                    ExtendsResult.False);
}
// ------------------------------------------------------------------
// Object
// ------------------------------------------------------------------
// prettier-ignore
function IsObjectPropertyCount(schema, count) {
    return Object.getOwnPropertyNames(schema.properties).length === count;
}
// prettier-ignore
function IsObjectStringLike(schema) {
    return IsObjectArrayLike(schema);
}
// prettier-ignore
function IsObjectSymbolLike(schema) {
    return IsObjectPropertyCount(schema, 0) || (IsObjectPropertyCount(schema, 1) && 'description' in schema.properties && IsUnion(schema.properties.description) && schema.properties.description.anyOf.length === 2 && ((IsString(schema.properties.description.anyOf[0]) &&
        IsUndefined(schema.properties.description.anyOf[1])) || (IsString(schema.properties.description.anyOf[1]) &&
        IsUndefined(schema.properties.description.anyOf[0]))));
}
// prettier-ignore
function IsObjectNumberLike(schema) {
    return IsObjectPropertyCount(schema, 0);
}
// prettier-ignore
function IsObjectBooleanLike(schema) {
    return IsObjectPropertyCount(schema, 0);
}
// prettier-ignore
function IsObjectBigIntLike(schema) {
    return IsObjectPropertyCount(schema, 0);
}
// prettier-ignore
function IsObjectDateLike(schema) {
    return IsObjectPropertyCount(schema, 0);
}
// prettier-ignore
function IsObjectUint8ArrayLike(schema) {
    return IsObjectArrayLike(schema);
}
// prettier-ignore
function IsObjectFunctionLike(schema) {
    const length = number_Number();
    return IsObjectPropertyCount(schema, 0) || (IsObjectPropertyCount(schema, 1) && 'length' in schema.properties && IntoBooleanResult(Visit(schema.properties['length'], length)) === ExtendsResult.True);
}
// prettier-ignore
function IsObjectConstructorLike(schema) {
    return IsObjectPropertyCount(schema, 0);
}
// prettier-ignore
function IsObjectArrayLike(schema) {
    const length = number_Number();
    return IsObjectPropertyCount(schema, 0) || (IsObjectPropertyCount(schema, 1) && 'length' in schema.properties && IntoBooleanResult(Visit(schema.properties['length'], length)) === ExtendsResult.True);
}
// prettier-ignore
function IsObjectPromiseLike(schema) {
    const then = Function([Any()], Any());
    return IsObjectPropertyCount(schema, 0) || (IsObjectPropertyCount(schema, 1) && 'then' in schema.properties && IntoBooleanResult(Visit(schema.properties['then'], then)) === ExtendsResult.True);
}
// ------------------------------------------------------------------
// Property
// ------------------------------------------------------------------
// prettier-ignore
function Property(left, right) {
    return (Visit(left, right) === ExtendsResult.False ? ExtendsResult.False :
        IsOptional(left) && !IsOptional(right) ? ExtendsResult.False :
            ExtendsResult.True);
}
// prettier-ignore
function FromObjectRight(left, right) {
    return (IsUnknown(left) ? ExtendsResult.False :
        IsAny(left) ? ExtendsResult.Union : (IsNever(left) ||
            (IsLiteralString(left) && IsObjectStringLike(right)) ||
            (IsLiteralNumber(left) && IsObjectNumberLike(right)) ||
            (IsLiteralBoolean(left) && IsObjectBooleanLike(right)) ||
            (IsSymbol(left) && IsObjectSymbolLike(right)) ||
            (IsBigInt(left) && IsObjectBigIntLike(right)) ||
            (IsString(left) && IsObjectStringLike(right)) ||
            (IsSymbol(left) && IsObjectSymbolLike(right)) ||
            (IsNumber(left) && IsObjectNumberLike(right)) ||
            (IsInteger(left) && IsObjectNumberLike(right)) ||
            (IsBoolean(left) && IsObjectBooleanLike(right)) ||
            (IsUint8Array(left) && IsObjectUint8ArrayLike(right)) ||
            (IsDate(left) && IsObjectDateLike(right)) ||
            (IsConstructor(left) && IsObjectConstructorLike(right)) ||
            (IsFunction(left) && IsObjectFunctionLike(right))) ? ExtendsResult.True :
            (IsRecord(left) && IsString(RecordKey(left))) ? (() => {
                // When expressing a Record with literal key values, the Record is converted into a Object with
                // the Hint assigned as `Record`. This is used to invert the extends logic.
                return right[symbols.Hint] === 'Record' ? ExtendsResult.True : ExtendsResult.False;
            })() :
                (IsRecord(left) && IsNumber(RecordKey(left))) ? (() => {
                    return IsObjectPropertyCount(right, 0) ? ExtendsResult.True : ExtendsResult.False;
                })() :
                    ExtendsResult.False);
}
// prettier-ignore
function FromObject(left, right) {
    return (IsStructuralRight(right) ? StructuralRight(left, right) :
        IsRecord(right) ? FromRecordRight(left, right) :
            !IsObject(right) ? ExtendsResult.False :
                (() => {
                    for (const key of Object.getOwnPropertyNames(right.properties)) {
                        if (!(key in left.properties) && !IsOptional(right.properties[key])) {
                            return ExtendsResult.False;
                        }
                        if (IsOptional(right.properties[key])) {
                            return ExtendsResult.True;
                        }
                        if (Property(left.properties[key], right.properties[key]) === ExtendsResult.False) {
                            return ExtendsResult.False;
                        }
                    }
                    return ExtendsResult.True;
                })());
}
// ------------------------------------------------------------------
// Promise
// ------------------------------------------------------------------
// prettier-ignore
function extends_check_FromPromise(left, right) {
    return (IsStructuralRight(right) ? StructuralRight(left, right) :
        IsObject(right) && IsObjectPromiseLike(right) ? ExtendsResult.True :
            !IsPromise(right) ? ExtendsResult.False :
                IntoBooleanResult(Visit(left.item, right.item)));
}
// ------------------------------------------------------------------
// Record
// ------------------------------------------------------------------
// prettier-ignore
function RecordKey(schema) {
    return (PatternNumberExact in schema.patternProperties ? number_Number() :
        PatternStringExact in schema.patternProperties ? string_String() :
            Throw('Unknown record key pattern'));
}
// prettier-ignore
function RecordValue(schema) {
    return (PatternNumberExact in schema.patternProperties ? schema.patternProperties[PatternNumberExact] :
        PatternStringExact in schema.patternProperties ? schema.patternProperties[PatternStringExact] :
            Throw('Unable to get record value schema'));
}
// prettier-ignore
function FromRecordRight(left, right) {
    const [Key, Value] = [RecordKey(right), RecordValue(right)];
    return ((IsLiteralString(left) && IsNumber(Key) && IntoBooleanResult(Visit(left, Value)) === ExtendsResult.True) ? ExtendsResult.True :
        IsUint8Array(left) && IsNumber(Key) ? Visit(left, Value) :
            IsString(left) && IsNumber(Key) ? Visit(left, Value) :
                IsArray(left) && IsNumber(Key) ? Visit(left, Value) :
                    IsObject(left) ? (() => {
                        for (const key of Object.getOwnPropertyNames(left.properties)) {
                            if (Property(Value, left.properties[key]) === ExtendsResult.False) {
                                return ExtendsResult.False;
                            }
                        }
                        return ExtendsResult.True;
                    })() :
                        ExtendsResult.False);
}
// prettier-ignore
function FromRecord(left, right) {
    return (IsStructuralRight(right) ? StructuralRight(left, right) :
        IsObject(right) ? FromObjectRight(left, right) :
            !IsRecord(right) ? ExtendsResult.False :
                Visit(RecordValue(left), RecordValue(right)));
}
// ------------------------------------------------------------------
// RegExp
// ------------------------------------------------------------------
// prettier-ignore
function FromRegExp(left, right) {
    // Note: RegExp types evaluate as strings, not RegExp objects.
    // Here we remap either into string and continue evaluating.
    const L = IsRegExp(left) ? string_String() : left;
    const R = IsRegExp(right) ? string_String() : right;
    return Visit(L, R);
}
// ------------------------------------------------------------------
// String
// ------------------------------------------------------------------
// prettier-ignore
function FromStringRight(left, right) {
    return (IsLiteral(left) && guard_value.IsString(left.const) ? ExtendsResult.True :
        IsString(left) ? ExtendsResult.True :
            ExtendsResult.False);
}
// prettier-ignore
function FromString(left, right) {
    return (IsStructuralRight(right) ? StructuralRight(left, right) :
        IsObject(right) ? FromObjectRight(left, right) :
            IsRecord(right) ? FromRecordRight(left, right) :
                IsString(right) ? ExtendsResult.True :
                    ExtendsResult.False);
}
// ------------------------------------------------------------------
// Symbol
// ------------------------------------------------------------------
// prettier-ignore
function FromSymbol(left, right) {
    return (IsStructuralRight(right) ? StructuralRight(left, right) :
        IsObject(right) ? FromObjectRight(left, right) :
            IsRecord(right) ? FromRecordRight(left, right) :
                IsSymbol(right) ? ExtendsResult.True :
                    ExtendsResult.False);
}
// ------------------------------------------------------------------
// TemplateLiteral
// ------------------------------------------------------------------
// prettier-ignore
function extends_check_FromTemplateLiteral(left, right) {
    // TemplateLiteral types are resolved to either unions for finite expressions or string
    // for infinite expressions. Here we call to TemplateLiteralResolver to resolve for
    // either type and continue evaluating.
    return (IsTemplateLiteral(left) ? Visit(TemplateLiteralToUnion(left), right) :
        IsTemplateLiteral(right) ? Visit(left, TemplateLiteralToUnion(right)) :
            Throw('Invalid fallthrough for TemplateLiteral'));
}
// ------------------------------------------------------------------
// Tuple
// ------------------------------------------------------------------
// prettier-ignore
function IsArrayOfTuple(left, right) {
    return (IsArray(right) &&
        left.items !== undefined &&
        left.items.every((schema) => Visit(schema, right.items) === ExtendsResult.True));
}
// prettier-ignore
function FromTupleRight(left, right) {
    return (IsNever(left) ? ExtendsResult.True :
        IsUnknown(left) ? ExtendsResult.False :
            IsAny(left) ? ExtendsResult.Union :
                ExtendsResult.False);
}
// prettier-ignore
function extends_check_FromTuple(left, right) {
    return (IsStructuralRight(right) ? StructuralRight(left, right) :
        IsObject(right) && IsObjectArrayLike(right) ? ExtendsResult.True :
            IsArray(right) && IsArrayOfTuple(left, right) ? ExtendsResult.True :
                !IsTuple(right) ? ExtendsResult.False :
                    (guard_value.IsUndefined(left.items) && !guard_value.IsUndefined(right.items)) || (!guard_value.IsUndefined(left.items) && guard_value.IsUndefined(right.items)) ? ExtendsResult.False :
                        (guard_value.IsUndefined(left.items) && !guard_value.IsUndefined(right.items)) ? ExtendsResult.True :
                            left.items.every((schema, index) => Visit(schema, right.items[index]) === ExtendsResult.True) ? ExtendsResult.True :
                                ExtendsResult.False);
}
// ------------------------------------------------------------------
// Uint8Array
// ------------------------------------------------------------------
// prettier-ignore
function FromUint8Array(left, right) {
    return (IsStructuralRight(right) ? StructuralRight(left, right) :
        IsObject(right) ? FromObjectRight(left, right) :
            IsRecord(right) ? FromRecordRight(left, right) :
                IsUint8Array(right) ? ExtendsResult.True :
                    ExtendsResult.False);
}
// ------------------------------------------------------------------
// Undefined
// ------------------------------------------------------------------
// prettier-ignore
function FromUndefined(left, right) {
    return (IsStructuralRight(right) ? StructuralRight(left, right) :
        IsObject(right) ? FromObjectRight(left, right) :
            IsRecord(right) ? FromRecordRight(left, right) :
                IsVoid(right) ? FromVoidRight(left, right) :
                    IsUndefined(right) ? ExtendsResult.True :
                        ExtendsResult.False);
}
// ------------------------------------------------------------------
// Union
// ------------------------------------------------------------------
// prettier-ignore
function FromUnionRight(left, right) {
    return right.anyOf.some((schema) => Visit(left, schema) === ExtendsResult.True)
        ? ExtendsResult.True
        : ExtendsResult.False;
}
// prettier-ignore
function extends_check_FromUnion(left, right) {
    return left.anyOf.every((schema) => Visit(schema, right) === ExtendsResult.True)
        ? ExtendsResult.True
        : ExtendsResult.False;
}
// ------------------------------------------------------------------
// Unknown
// ------------------------------------------------------------------
// prettier-ignore
function FromUnknownRight(left, right) {
    return ExtendsResult.True;
}
// prettier-ignore
function FromUnknown(left, right) {
    return (IsNever(right) ? FromNeverRight(left, right) :
        IsIntersect(right) ? FromIntersectRight(left, right) :
            IsUnion(right) ? FromUnionRight(left, right) :
                IsAny(right) ? FromAnyRight(left, right) :
                    IsString(right) ? FromStringRight(left, right) :
                        IsNumber(right) ? FromNumberRight(left, right) :
                            IsInteger(right) ? FromIntegerRight(left, right) :
                                IsBoolean(right) ? FromBooleanRight(left, right) :
                                    IsArray(right) ? FromArrayRight(left, right) :
                                        IsTuple(right) ? FromTupleRight(left, right) :
                                            IsObject(right) ? FromObjectRight(left, right) :
                                                IsUnknown(right) ? ExtendsResult.True :
                                                    ExtendsResult.False);
}
// ------------------------------------------------------------------
// Void
// ------------------------------------------------------------------
// prettier-ignore
function FromVoidRight(left, right) {
    return (IsUndefined(left) ? ExtendsResult.True :
        IsUndefined(left) ? ExtendsResult.True :
            ExtendsResult.False);
}
// prettier-ignore
function FromVoid(left, right) {
    return (IsIntersect(right) ? FromIntersectRight(left, right) :
        IsUnion(right) ? FromUnionRight(left, right) :
            IsUnknown(right) ? FromUnknownRight(left, right) :
                IsAny(right) ? FromAnyRight(left, right) :
                    IsObject(right) ? FromObjectRight(left, right) :
                        IsVoid(right) ? ExtendsResult.True :
                            ExtendsResult.False);
}
// prettier-ignore
function Visit(left, right) {
    return (
    // resolvable
    (IsTemplateLiteral(left) || IsTemplateLiteral(right)) ? extends_check_FromTemplateLiteral(left, right) :
        (IsRegExp(left) || IsRegExp(right)) ? FromRegExp(left, right) :
            (IsNot(left) || IsNot(right)) ? FromNot(left, right) :
                // standard
                IsAny(left) ? FromAny(left, right) :
                    IsArray(left) ? extends_check_FromArray(left, right) :
                        IsBigInt(left) ? FromBigInt(left, right) :
                            IsBoolean(left) ? FromBoolean(left, right) :
                                IsAsyncIterator(left) ? FromAsyncIterator(left, right) :
                                    IsConstructor(left) ? FromConstructor(left, right) :
                                        IsDate(left) ? FromDate(left, right) :
                                            IsFunction(left) ? FromFunction(left, right) :
                                                IsInteger(left) ? FromInteger(left, right) :
                                                    IsIntersect(left) ? extends_check_FromIntersect(left, right) :
                                                        IsIterator(left) ? FromIterator(left, right) :
                                                            IsLiteral(left) ? extends_check_FromLiteral(left, right) :
                                                                IsNever(left) ? FromNever(left, right) :
                                                                    IsNull(left) ? FromNull(left, right) :
                                                                        IsNumber(left) ? FromNumber(left, right) :
                                                                            IsObject(left) ? FromObject(left, right) :
                                                                                IsRecord(left) ? FromRecord(left, right) :
                                                                                    IsString(left) ? FromString(left, right) :
                                                                                        IsSymbol(left) ? FromSymbol(left, right) :
                                                                                            IsTuple(left) ? extends_check_FromTuple(left, right) :
                                                                                                IsPromise(left) ? extends_check_FromPromise(left, right) :
                                                                                                    IsUint8Array(left) ? FromUint8Array(left, right) :
                                                                                                        IsUndefined(left) ? FromUndefined(left, right) :
                                                                                                            IsUnion(left) ? extends_check_FromUnion(left, right) :
                                                                                                                IsUnknown(left) ? FromUnknown(left, right) :
                                                                                                                    IsVoid(left) ? FromVoid(left, right) :
                                                                                                                        Throw(`Unknown left type operand '${left[symbols.Kind]}'`));
}
function ExtendsCheck(left, right) {
    return Visit(left, right);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/exclude/exclude-from-mapped-result.mjs


// prettier-ignore
function exclude_from_mapped_result_FromProperties(P, U) {
    const Acc = {};
    for (const K2 of globalThis.Object.getOwnPropertyNames(P))
        Acc[K2] = Exclude(P[K2], U);
    return Acc;
}
// prettier-ignore
function exclude_from_mapped_result_FromMappedResult(R, T) {
    return exclude_from_mapped_result_FromProperties(R.properties, T);
}
// prettier-ignore
function ExcludeFromMappedResult(R, T) {
    const P = exclude_from_mapped_result_FromMappedResult(R, T);
    return MappedResult(P);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/exclude/exclude-from-template-literal.mjs


function ExcludeFromTemplateLiteral(L, R) {
    return Exclude(TemplateLiteralToUnion(L), R);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/exclude/exclude.mjs






// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------

function ExcludeRest(L, R) {
    const excluded = L.filter((inner) => ExtendsCheck(inner, R) === ExtendsResult.False);
    return excluded.length === 1 ? excluded[0] : Union(excluded);
}
/** `[Json]` Constructs a type by excluding from unionType all union members that are assignable to excludedMembers */
function Exclude(L, R, options = {}) {
    // overloads
    if ((0,kind.IsTemplateLiteral)(L))
        return (0,create_type.CreateType)(ExcludeFromTemplateLiteral(L, R), options);
    if ((0,kind.IsMappedResult)(L))
        return (0,create_type.CreateType)(ExcludeFromMappedResult(L, R), options);
    // prettier-ignore
    return (0,create_type.CreateType)((0,kind.IsUnion)(L) ? ExcludeRest(L.anyOf, R) :
        ExtendsCheck(L, R) !== ExtendsResult.False ? (0,never.Never)() : L, options);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/extends/extends-from-mapped-key.mjs




// prettier-ignore
function FromPropertyKey(K, U, L, R, options) {
    return {
        [K]: Extends(Literal(K), U, L, R, (0,value.Clone)(options))
    };
}
// prettier-ignore
function FromPropertyKeys(K, U, L, R, options) {
    return K.reduce((Acc, LK) => {
        return { ...Acc, ...FromPropertyKey(LK, U, L, R, options) };
    }, {});
}
// prettier-ignore
function FromMappedKey(K, U, L, R, options) {
    return FromPropertyKeys(K.keys, U, L, R, options);
}
// prettier-ignore
function ExtendsFromMappedKey(T, U, L, R, options) {
    const P = FromMappedKey(T, U, L, R, options);
    return MappedResult(P);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/extends/extends-from-mapped-result.mjs



// prettier-ignore
function extends_from_mapped_result_FromProperties(P, Right, True, False, options) {
    const Acc = {};
    for (const K2 of globalThis.Object.getOwnPropertyNames(P))
        Acc[K2] = Extends(P[K2], Right, True, False, (0,value.Clone)(options));
    return Acc;
}
// prettier-ignore
function extends_from_mapped_result_FromMappedResult(Left, Right, True, False, options) {
    return extends_from_mapped_result_FromProperties(Left.properties, Right, True, False, options);
}
// prettier-ignore
function ExtendsFromMappedResult(Left, Right, True, False, options) {
    const P = extends_from_mapped_result_FromMappedResult(Left, Right, True, False, options);
    return MappedResult(P);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/extends/extends.mjs





// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------

// prettier-ignore
function ExtendsResolve(left, right, trueType, falseType) {
    const R = ExtendsCheck(left, right);
    return (R === ExtendsResult.Union ? Union([trueType, falseType]) :
        R === ExtendsResult.True ? trueType :
            falseType);
}
/** `[Json]` Creates a Conditional type */
function Extends(L, R, T, F, options) {
    // prettier-ignore
    return ((0,kind.IsMappedResult)(L) ? ExtendsFromMappedResult(L, R, T, F, options) :
        (0,kind.IsMappedKey)(L) ? (0,create_type.CreateType)(ExtendsFromMappedKey(L, R, T, F, options)) :
            (0,create_type.CreateType)(ExtendsResolve(L, R, T, F), options));
}

;// ./node_modules/@sinclair/typebox/build/esm/type/extract/extract-from-mapped-result.mjs


// prettier-ignore
function extract_from_mapped_result_FromProperties(P, T) {
    const Acc = {};
    for (const K2 of globalThis.Object.getOwnPropertyNames(P))
        Acc[K2] = Extract(P[K2], T);
    return Acc;
}
// prettier-ignore
function extract_from_mapped_result_FromMappedResult(R, T) {
    return extract_from_mapped_result_FromProperties(R.properties, T);
}
// prettier-ignore
function ExtractFromMappedResult(R, T) {
    const P = extract_from_mapped_result_FromMappedResult(R, T);
    return MappedResult(P);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/extract/extract-from-template-literal.mjs


function ExtractFromTemplateLiteral(L, R) {
    return Extract(TemplateLiteralToUnion(L), R);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/extract/extract.mjs






// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------

function ExtractRest(L, R) {
    const extracted = L.filter((inner) => ExtendsCheck(inner, R) !== ExtendsResult.False);
    return extracted.length === 1 ? extracted[0] : Union(extracted);
}
/** `[Json]` Constructs a type by extracting from type all union members that are assignable to union */
function Extract(L, R, options) {
    // overloads
    if ((0,kind.IsTemplateLiteral)(L))
        return (0,create_type.CreateType)(ExtractFromTemplateLiteral(L, R), options);
    if ((0,kind.IsMappedResult)(L))
        return (0,create_type.CreateType)(ExtractFromMappedResult(L, R), options);
    // prettier-ignore
    return (0,create_type.CreateType)((0,kind.IsUnion)(L) ? ExtractRest(L.anyOf, R) :
        ExtendsCheck(L, R) !== ExtendsResult.False ? L : (0,never.Never)(), options);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/instance-type/instance-type.mjs

/** `[JavaScript]` Extracts the InstanceType from the given Constructor type */
function InstanceType(schema, options) {
    return (0,create_type.CreateType)(schema.returns, options);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/integer/integer.mjs


/** `[Json]` Creates an Integer type */
function Integer(options) {
    return (0,create_type.CreateType)({ [symbols.Kind]: 'Integer', type: 'integer' }, options);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/template-literal/syntax.mjs







// ------------------------------------------------------------------
// SyntaxParsers
// ------------------------------------------------------------------
// prettier-ignore
function* syntax_FromUnion(syntax) {
    const trim = syntax.trim().replace(/"|'/g, '');
    return (trim === 'boolean' ? yield Boolean() :
        trim === 'number' ? yield number_Number() :
            trim === 'bigint' ? yield BigInt() :
                trim === 'string' ? yield string_String() :
                    yield (() => {
                        const literals = trim.split('|').map((literal) => Literal(literal.trim()));
                        return (literals.length === 0 ? (0,never.Never)() :
                            literals.length === 1 ? literals[0] :
                                UnionEvaluated(literals));
                    })());
}
// prettier-ignore
function* FromTerminal(syntax) {
    if (syntax[1] !== '{') {
        const L = Literal('$');
        const R = FromSyntax(syntax.slice(1));
        return yield* [L, ...R];
    }
    for (let i = 2; i < syntax.length; i++) {
        if (syntax[i] === '}') {
            const L = syntax_FromUnion(syntax.slice(2, i));
            const R = FromSyntax(syntax.slice(i + 1));
            return yield* [...L, ...R];
        }
    }
    yield Literal(syntax);
}
// prettier-ignore
function* FromSyntax(syntax) {
    for (let i = 0; i < syntax.length; i++) {
        if (syntax[i] === '$') {
            const L = Literal(syntax.slice(0, i));
            const R = FromTerminal(syntax.slice(i));
            return yield* [L, ...R];
        }
    }
    yield Literal(syntax);
}
/** Parses TemplateLiteralSyntax and returns a tuple of TemplateLiteralKinds */
function TemplateLiteralSyntax(syntax) {
    return [...FromSyntax(syntax)];
}

;// ./node_modules/@sinclair/typebox/build/esm/type/template-literal/pattern.mjs



// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------

// ------------------------------------------------------------------
// TemplateLiteralPatternError
// ------------------------------------------------------------------
class TemplateLiteralPatternError extends error_error.TypeBoxError {
}
// ------------------------------------------------------------------
// TemplateLiteralPattern
// ------------------------------------------------------------------
function Escape(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
// prettier-ignore
function pattern_Visit(schema, acc) {
    return ((0,kind.IsTemplateLiteral)(schema) ? schema.pattern.slice(1, schema.pattern.length - 1) :
        (0,kind.IsUnion)(schema) ? `(${schema.anyOf.map((schema) => pattern_Visit(schema, acc)).join('|')})` :
            (0,kind.IsNumber)(schema) ? `${acc}${PatternNumber}` :
                (0,kind.IsInteger)(schema) ? `${acc}${PatternNumber}` :
                    (0,kind.IsBigInt)(schema) ? `${acc}${PatternNumber}` :
                        (0,kind.IsString)(schema) ? `${acc}${PatternString}` :
                            (0,kind.IsLiteral)(schema) ? `${acc}${Escape(schema.const.toString())}` :
                                (0,kind.IsBoolean)(schema) ? `${acc}${PatternBoolean}` :
                                    (() => { throw new TemplateLiteralPatternError(`Unexpected Kind '${schema[symbols.Kind]}'`); })());
}
function TemplateLiteralPattern(kinds) {
    return `^${kinds.map((schema) => pattern_Visit(schema, '')).join('')}\$`;
}

;// ./node_modules/@sinclair/typebox/build/esm/type/template-literal/template-literal.mjs





/** `[Json]` Creates a TemplateLiteral type */
// prettier-ignore
function TemplateLiteral(unresolved, options) {
    const pattern = (0,guard_value.IsString)(unresolved)
        ? TemplateLiteralPattern(TemplateLiteralSyntax(unresolved))
        : TemplateLiteralPattern(unresolved);
    return (0,create_type.CreateType)({ [symbols.Kind]: 'TemplateLiteral', type: 'string', pattern }, options);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/intrinsic/intrinsic-from-mapped-key.mjs




// prettier-ignore
function MappedIntrinsicPropertyKey(K, M, options) {
    return {
        [K]: Intrinsic(Literal(K), M, (0,value.Clone)(options))
    };
}
// prettier-ignore
function MappedIntrinsicPropertyKeys(K, M, options) {
    const result = K.reduce((Acc, L) => {
        return { ...Acc, ...MappedIntrinsicPropertyKey(L, M, options) };
    }, {});
    return result;
}
// prettier-ignore
function MappedIntrinsicProperties(T, M, options) {
    return MappedIntrinsicPropertyKeys(T['keys'], M, options);
}
// prettier-ignore
function IntrinsicFromMappedKey(T, M, options) {
    const P = MappedIntrinsicProperties(T, M, options);
    return MappedResult(P);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/intrinsic/intrinsic.mjs





// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------

// ------------------------------------------------------------------
// Apply
// ------------------------------------------------------------------
function ApplyUncapitalize(value) {
    const [first, rest] = [value.slice(0, 1), value.slice(1)];
    return [first.toLowerCase(), rest].join('');
}
function ApplyCapitalize(value) {
    const [first, rest] = [value.slice(0, 1), value.slice(1)];
    return [first.toUpperCase(), rest].join('');
}
function ApplyUppercase(value) {
    return value.toUpperCase();
}
function ApplyLowercase(value) {
    return value.toLowerCase();
}
function intrinsic_FromTemplateLiteral(schema, mode, options) {
    // note: template literals require special runtime handling as they are encoded in string patterns.
    // This diverges from the mapped type which would otherwise map on the template literal kind.
    const expression = TemplateLiteralParseExact(schema.pattern);
    const finite = IsTemplateLiteralExpressionFinite(expression);
    if (!finite)
        return { ...schema, pattern: FromLiteralValue(schema.pattern, mode) };
    const strings = [...TemplateLiteralExpressionGenerate(expression)];
    const literals = strings.map((value) => Literal(value));
    const mapped = intrinsic_FromRest(literals, mode);
    const union = Union(mapped);
    return TemplateLiteral([union], options);
}
// prettier-ignore
function FromLiteralValue(value, mode) {
    return (typeof value === 'string' ? (mode === 'Uncapitalize' ? ApplyUncapitalize(value) :
        mode === 'Capitalize' ? ApplyCapitalize(value) :
            mode === 'Uppercase' ? ApplyUppercase(value) :
                mode === 'Lowercase' ? ApplyLowercase(value) :
                    value) : value.toString());
}
// prettier-ignore
function intrinsic_FromRest(T, M) {
    return T.map(L => Intrinsic(L, M));
}
/** Applies an intrinsic string manipulation to the given type. */
function Intrinsic(schema, mode, options = {}) {
    // prettier-ignore
    return (
    // Intrinsic-Mapped-Inference
    (0,kind.IsMappedKey)(schema) ? IntrinsicFromMappedKey(schema, mode, options) :
        // Standard-Inference
        (0,kind.IsTemplateLiteral)(schema) ? intrinsic_FromTemplateLiteral(schema, mode, options) :
            (0,kind.IsUnion)(schema) ? Union(intrinsic_FromRest(schema.anyOf, mode), options) :
                (0,kind.IsLiteral)(schema) ? Literal(FromLiteralValue(schema.const, mode), options) :
                    // Default Type
                    (0,create_type.CreateType)(schema, options));
}

;// ./node_modules/@sinclair/typebox/build/esm/type/intrinsic/capitalize.mjs

/** `[Json]` Intrinsic function to Capitalize LiteralString types */
function Capitalize(T, options = {}) {
    return Intrinsic(T, 'Capitalize', options);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/intrinsic/uncapitalize.mjs

/** `[Json]` Intrinsic function to Uncapitalize LiteralString types */
function Uncapitalize(T, options = {}) {
    return Intrinsic(T, 'Uncapitalize', options);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/intrinsic/lowercase.mjs

/** `[Json]` Intrinsic function to Lowercase LiteralString types */
function Lowercase(T, options = {}) {
    return Intrinsic(T, 'Lowercase', options);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/intrinsic/uppercase.mjs

/** `[Json]` Intrinsic function to Uppercase LiteralString types */
function Uppercase(T, options = {}) {
    return Intrinsic(T, 'Uppercase', options);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/iterator/iterator.mjs


/** `[JavaScript]` Creates an Iterator type */
function Iterator(items, options) {
    return (0,create_type.CreateType)({ [symbols.Kind]: 'Iterator', type: 'Iterator', items }, options);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/keyof/keyof-from-mapped-result.mjs



// prettier-ignore
function keyof_from_mapped_result_FromProperties(properties, options) {
    const result = {};
    for (const K2 of globalThis.Object.getOwnPropertyNames(properties))
        result[K2] = KeyOf(properties[K2], (0,value.Clone)(options));
    return result;
}
// prettier-ignore
function keyof_from_mapped_result_FromMappedResult(mappedResult, options) {
    return keyof_from_mapped_result_FromProperties(mappedResult.properties, options);
}
// prettier-ignore
function KeyOfFromMappedResult(mappedResult, options) {
    const properties = keyof_from_mapped_result_FromMappedResult(mappedResult, options);
    return MappedResult(properties);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/keyof/keyof.mjs








// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------

// prettier-ignore
function keyof_FromComputed(target, parameters) {
    return computed_Computed('KeyOf', [computed_Computed(target, parameters)]);
}
// prettier-ignore
function keyof_FromRef($ref) {
    return computed_Computed('KeyOf', [Ref($ref)]);
}
// prettier-ignore
function KeyOfFromType(type, options) {
    const propertyKeys = (0,keyof_property_keys.KeyOfPropertyKeys)(type);
    const propertyKeyTypes = KeyOfPropertyKeysToRest(propertyKeys);
    const result = UnionEvaluated(propertyKeyTypes);
    return (0,create_type.CreateType)(result, options);
}
// prettier-ignore
function KeyOfPropertyKeysToRest(propertyKeys) {
    return propertyKeys.map(L => L === '[number]' ? number_Number() : Literal(L));
}
/** `[Json]` Creates a KeyOf type */
function KeyOf(type, options) {
    return ((0,kind.IsComputed)(type) ? keyof_FromComputed(type.target, type.parameters) : (0,kind.IsRef)(type) ? keyof_FromRef(type.$ref) : (0,kind.IsMappedResult)(type) ? KeyOfFromMappedResult(type, options) : KeyOfFromType(type, options));
}

;// ./node_modules/@sinclair/typebox/build/esm/type/promise/promise.mjs


/** `[JavaScript]` Creates a Promise type */
function Promise(item, options) {
    return (0,create_type.CreateType)({ [symbols.Kind]: 'Promise', type: 'Promise', item }, options);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/mapped/mapped.mjs


// evaluation types














// operator

// mapping types

// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------

// prettier-ignore
function mapped_FromMappedResult(K, P) {
    return (K in P
        ? FromSchemaType(K, P[K])
        : MappedResult(P));
}
// prettier-ignore
function MappedKeyToKnownMappedResultProperties(K) {
    return { [K]: Literal(K) };
}
// prettier-ignore
function MappedKeyToUnknownMappedResultProperties(P) {
    const Acc = {};
    for (const L of P)
        Acc[L] = Literal(L);
    return Acc;
}
// prettier-ignore
function MappedKeyToMappedResultProperties(K, P) {
    return ((0,set.SetIncludes)(P, K)
        ? MappedKeyToKnownMappedResultProperties(K)
        : MappedKeyToUnknownMappedResultProperties(P));
}
// prettier-ignore
function mapped_FromMappedKey(K, P) {
    const R = MappedKeyToMappedResultProperties(K, P);
    return mapped_FromMappedResult(K, R);
}
// prettier-ignore
function mapped_FromRest(K, T) {
    return T.map(L => FromSchemaType(K, L));
}
// prettier-ignore
function mapped_FromProperties(K, T) {
    const Acc = {};
    for (const K2 of globalThis.Object.getOwnPropertyNames(T))
        Acc[K2] = FromSchemaType(K, T[K2]);
    return Acc;
}
// prettier-ignore
function FromSchemaType(K, T) {
    // required to retain user defined options for mapped type
    const options = { ...T };
    return (
    // unevaluated modifier types
    (0,kind.IsOptional)(T) ? Optional(FromSchemaType(K, Discard(T, [symbols.OptionalKind]))) :
        (0,kind.IsReadonly)(T) ? Readonly(FromSchemaType(K, Discard(T, [symbols.ReadonlyKind]))) :
            // unevaluated mapped types
            (0,kind.IsMappedResult)(T) ? mapped_FromMappedResult(K, T.properties) :
                (0,kind.IsMappedKey)(T) ? mapped_FromMappedKey(K, T.keys) :
                    // unevaluated types
                    (0,kind.IsConstructor)(T) ? Constructor(mapped_FromRest(K, T.parameters), FromSchemaType(K, T.returns), options) :
                        (0,kind.IsFunction)(T) ? Function(mapped_FromRest(K, T.parameters), FromSchemaType(K, T.returns), options) :
                            (0,kind.IsAsyncIterator)(T) ? AsyncIterator(FromSchemaType(K, T.items), options) :
                                (0,kind.IsIterator)(T) ? Iterator(FromSchemaType(K, T.items), options) :
                                    (0,kind.IsIntersect)(T) ? Intersect(mapped_FromRest(K, T.allOf), options) :
                                        (0,kind.IsUnion)(T) ? Union(mapped_FromRest(K, T.anyOf), options) :
                                            (0,kind.IsTuple)(T) ? Tuple(mapped_FromRest(K, T.items ?? []), options) :
                                                (0,kind.IsObject)(T) ? object_Object(mapped_FromProperties(K, T.properties), options) :
                                                    (0,kind.IsArray)(T) ? array_Array(FromSchemaType(K, T.items), options) :
                                                        (0,kind.IsPromise)(T) ? Promise(FromSchemaType(K, T.item), options) :
                                                            T);
}
// prettier-ignore
function MappedFunctionReturnType(K, T) {
    const Acc = {};
    for (const L of K)
        Acc[L] = FromSchemaType(L, T);
    return Acc;
}
/** `[Json]` Creates a Mapped object type */
function Mapped(key, map, options) {
    const K = (0,kind.IsSchema)(key) ? IndexPropertyKeys(key) : key;
    const RT = map({ [symbols.Kind]: 'MappedKey', keys: K });
    const R = MappedFunctionReturnType(K, RT);
    return object_Object(R, options);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/omit/omit-from-mapped-key.mjs



// prettier-ignore
function omit_from_mapped_key_FromPropertyKey(type, key, options) {
    return { [key]: Omit(type, [key], (0,value.Clone)(options)) };
}
// prettier-ignore
function omit_from_mapped_key_FromPropertyKeys(type, propertyKeys, options) {
    return propertyKeys.reduce((Acc, LK) => {
        return { ...Acc, ...omit_from_mapped_key_FromPropertyKey(type, LK, options) };
    }, {});
}
// prettier-ignore
function omit_from_mapped_key_FromMappedKey(type, mappedKey, options) {
    return omit_from_mapped_key_FromPropertyKeys(type, mappedKey.keys, options);
}
// prettier-ignore
function OmitFromMappedKey(type, mappedKey, options) {
    const properties = omit_from_mapped_key_FromMappedKey(type, mappedKey, options);
    return MappedResult(properties);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/omit/omit-from-mapped-result.mjs



// prettier-ignore
function omit_from_mapped_result_FromProperties(properties, propertyKeys, options) {
    const result = {};
    for (const K2 of globalThis.Object.getOwnPropertyNames(properties))
        result[K2] = Omit(properties[K2], propertyKeys, (0,value.Clone)(options));
    return result;
}
// prettier-ignore
function omit_from_mapped_result_FromMappedResult(mappedResult, propertyKeys, options) {
    return omit_from_mapped_result_FromProperties(mappedResult.properties, propertyKeys, options);
}
// prettier-ignore
function OmitFromMappedResult(mappedResult, propertyKeys, options) {
    const properties = omit_from_mapped_result_FromMappedResult(mappedResult, propertyKeys, options);
    return MappedResult(properties);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/omit/omit.mjs









// ------------------------------------------------------------------
// Mapped
// ------------------------------------------------------------------


// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------


// prettier-ignore
function omit_FromIntersect(types, propertyKeys) {
    return types.map((type) => OmitResolve(type, propertyKeys));
}
// prettier-ignore
function omit_FromUnion(types, propertyKeys) {
    return types.map((type) => OmitResolve(type, propertyKeys));
}
// ------------------------------------------------------------------
// FromProperty
// ------------------------------------------------------------------
// prettier-ignore
function omit_FromProperty(properties, key) {
    const { [key]: _, ...R } = properties;
    return R;
}
// prettier-ignore
function omit_FromProperties(properties, propertyKeys) {
    return propertyKeys.reduce((T, K2) => omit_FromProperty(T, K2), properties);
}
// prettier-ignore
function omit_FromObject(properties, propertyKeys) {
    const options = Discard(properties, [symbols.TransformKind, '$id', 'required', 'properties']);
    const omittedProperties = omit_FromProperties(properties['properties'], propertyKeys);
    return object_Object(omittedProperties, options);
}
// prettier-ignore
function UnionFromPropertyKeys(propertyKeys) {
    const result = propertyKeys.reduce((result, key) => (0,kind.IsLiteralValue)(key) ? [...result, Literal(key)] : result, []);
    return Union(result);
}
// prettier-ignore
function OmitResolve(properties, propertyKeys) {
    return ((0,kind.IsIntersect)(properties) ? Intersect(omit_FromIntersect(properties.allOf, propertyKeys)) :
        (0,kind.IsUnion)(properties) ? Union(omit_FromUnion(properties.anyOf, propertyKeys)) :
            (0,kind.IsObject)(properties) ? omit_FromObject(properties, propertyKeys) :
                object_Object({}));
}
/** `[Json]` Constructs a type whose keys are picked from the given type */
// prettier-ignore
function Omit(type, key, options) {
    const typeKey = (0,guard_value.IsArray)(key) ? UnionFromPropertyKeys(key) : key;
    const propertyKeys = (0,kind.IsSchema)(key) ? IndexPropertyKeys(key) : key;
    const isTypeRef = (0,kind.IsRef)(type);
    const isKeyRef = (0,kind.IsRef)(key);
    return ((0,kind.IsMappedResult)(type) ? OmitFromMappedResult(type, propertyKeys, options) :
        (0,kind.IsMappedKey)(key) ? OmitFromMappedKey(type, key, options) :
            (isTypeRef && isKeyRef) ? computed_Computed('Omit', [type, typeKey], options) :
                (!isTypeRef && isKeyRef) ? computed_Computed('Omit', [type, typeKey], options) :
                    (isTypeRef && !isKeyRef) ? computed_Computed('Omit', [type, typeKey], options) :
                        (0,create_type.CreateType)({ ...OmitResolve(type, propertyKeys), ...options }));
}

;// ./node_modules/@sinclair/typebox/build/esm/type/pick/pick-from-mapped-key.mjs



// prettier-ignore
function pick_from_mapped_key_FromPropertyKey(type, key, options) {
    return {
        [key]: Pick(type, [key], (0,value.Clone)(options))
    };
}
// prettier-ignore
function pick_from_mapped_key_FromPropertyKeys(type, propertyKeys, options) {
    return propertyKeys.reduce((result, leftKey) => {
        return { ...result, ...pick_from_mapped_key_FromPropertyKey(type, leftKey, options) };
    }, {});
}
// prettier-ignore
function pick_from_mapped_key_FromMappedKey(type, mappedKey, options) {
    return pick_from_mapped_key_FromPropertyKeys(type, mappedKey.keys, options);
}
// prettier-ignore
function PickFromMappedKey(type, mappedKey, options) {
    const properties = pick_from_mapped_key_FromMappedKey(type, mappedKey, options);
    return MappedResult(properties);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/pick/pick-from-mapped-result.mjs



// prettier-ignore
function pick_from_mapped_result_FromProperties(properties, propertyKeys, options) {
    const result = {};
    for (const K2 of globalThis.Object.getOwnPropertyNames(properties))
        result[K2] = Pick(properties[K2], propertyKeys, (0,value.Clone)(options));
    return result;
}
// prettier-ignore
function pick_from_mapped_result_FromMappedResult(mappedResult, propertyKeys, options) {
    return pick_from_mapped_result_FromProperties(mappedResult.properties, propertyKeys, options);
}
// prettier-ignore
function PickFromMappedResult(mappedResult, propertyKeys, options) {
    const properties = pick_from_mapped_result_FromMappedResult(mappedResult, propertyKeys, options);
    return MappedResult(properties);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/pick/pick.mjs









// ------------------------------------------------------------------
// Guards
// ------------------------------------------------------------------


// ------------------------------------------------------------------
// Infrastructure
// ------------------------------------------------------------------


function pick_FromIntersect(types, propertyKeys) {
    return types.map((type) => PickResolve(type, propertyKeys));
}
// prettier-ignore
function pick_FromUnion(types, propertyKeys) {
    return types.map((type) => PickResolve(type, propertyKeys));
}
// prettier-ignore
function pick_FromProperties(properties, propertyKeys) {
    const result = {};
    for (const K2 of propertyKeys)
        if (K2 in properties)
            result[K2] = properties[K2];
    return result;
}
// prettier-ignore
function pick_FromObject(T, K) {
    const options = Discard(T, [symbols.TransformKind, '$id', 'required', 'properties']);
    const properties = pick_FromProperties(T['properties'], K);
    return object_Object(properties, options);
}
// prettier-ignore
function pick_UnionFromPropertyKeys(propertyKeys) {
    const result = propertyKeys.reduce((result, key) => (0,kind.IsLiteralValue)(key) ? [...result, Literal(key)] : result, []);
    return Union(result);
}
// prettier-ignore
function PickResolve(properties, propertyKeys) {
    return ((0,kind.IsIntersect)(properties) ? Intersect(pick_FromIntersect(properties.allOf, propertyKeys)) :
        (0,kind.IsUnion)(properties) ? Union(pick_FromUnion(properties.anyOf, propertyKeys)) :
            (0,kind.IsObject)(properties) ? pick_FromObject(properties, propertyKeys) :
                object_Object({}));
}
/** `[Json]` Constructs a type whose keys are picked from the given type */
// prettier-ignore
function Pick(type, key, options) {
    const typeKey = (0,guard_value.IsArray)(key) ? pick_UnionFromPropertyKeys(key) : key;
    const propertyKeys = (0,kind.IsSchema)(key) ? IndexPropertyKeys(key) : key;
    const isTypeRef = (0,kind.IsRef)(type);
    const isKeyRef = (0,kind.IsRef)(key);
    return ((0,kind.IsMappedResult)(type) ? PickFromMappedResult(type, propertyKeys, options) :
        (0,kind.IsMappedKey)(key) ? PickFromMappedKey(type, key, options) :
            (isTypeRef && isKeyRef) ? computed_Computed('Pick', [type, typeKey], options) :
                (!isTypeRef && isKeyRef) ? computed_Computed('Pick', [type, typeKey], options) :
                    (isTypeRef && !isKeyRef) ? computed_Computed('Pick', [type, typeKey], options) :
                        (0,create_type.CreateType)({ ...PickResolve(type, propertyKeys), ...options }));
}

;// ./node_modules/@sinclair/typebox/build/esm/type/partial/partial-from-mapped-result.mjs



// prettier-ignore
function partial_from_mapped_result_FromProperties(K, options) {
    const Acc = {};
    for (const K2 of globalThis.Object.getOwnPropertyNames(K))
        Acc[K2] = Partial(K[K2], (0,value.Clone)(options));
    return Acc;
}
// prettier-ignore
function partial_from_mapped_result_FromMappedResult(R, options) {
    return partial_from_mapped_result_FromProperties(R.properties, options);
}
// prettier-ignore
function PartialFromMappedResult(R, options) {
    const P = partial_from_mapped_result_FromMappedResult(R, options);
    return MappedResult(P);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/partial/partial.mjs










// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------

// prettier-ignore
function partial_FromComputed(target, parameters) {
    return computed_Computed('Partial', [computed_Computed(target, parameters)]);
}
// prettier-ignore
function partial_FromRef($ref) {
    return computed_Computed('Partial', [Ref($ref)]);
}
// prettier-ignore
function partial_FromProperties(properties) {
    const partialProperties = {};
    for (const K of globalThis.Object.getOwnPropertyNames(properties))
        partialProperties[K] = Optional(properties[K]);
    return partialProperties;
}
// prettier-ignore
function partial_FromObject(T) {
    const options = Discard(T, [symbols.TransformKind, '$id', 'required', 'properties']);
    const properties = partial_FromProperties(T['properties']);
    return object_Object(properties, options);
}
// prettier-ignore
function partial_FromRest(types) {
    return types.map(type => PartialResolve(type));
}
// ------------------------------------------------------------------
// PartialResolve
// ------------------------------------------------------------------
// prettier-ignore
function PartialResolve(type) {
    return ((0,kind.IsComputed)(type) ? partial_FromComputed(type.target, type.parameters) :
        (0,kind.IsRef)(type) ? partial_FromRef(type.$ref) :
            (0,kind.IsIntersect)(type) ? Intersect(partial_FromRest(type.allOf)) :
                (0,kind.IsUnion)(type) ? Union(partial_FromRest(type.anyOf)) :
                    (0,kind.IsObject)(type) ? partial_FromObject(type) :
                        object_Object({}));
}
/** `[Json]` Constructs a type where all properties are optional */
function Partial(type, options) {
    if ((0,kind.IsMappedResult)(type)) {
        return PartialFromMappedResult(type, options);
    }
    else {
        // special: mapping types require overridable options
        return (0,create_type.CreateType)({ ...PartialResolve(type), ...options });
    }
}

;// ./node_modules/@sinclair/typebox/build/esm/type/record/record.mjs










// ------------------------------------------------------------------
// ValueGuard
// ------------------------------------------------------------------

// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------

// ------------------------------------------------------------------
// RecordCreateFromPattern
// ------------------------------------------------------------------
// prettier-ignore
function RecordCreateFromPattern(pattern, T, options) {
    return (0,create_type.CreateType)({ [symbols.Kind]: 'Record', type: 'object', patternProperties: { [pattern]: T } }, options);
}
// ------------------------------------------------------------------
// RecordCreateFromKeys
// ------------------------------------------------------------------
// prettier-ignore
function RecordCreateFromKeys(K, T, options) {
    const result = {};
    for (const K2 of K)
        result[K2] = T;
    return object_Object(result, { ...options, [symbols.Hint]: 'Record' });
}
// prettier-ignore
function FromTemplateLiteralKey(K, T, options) {
    return (IsTemplateLiteralFinite(K)
        ? RecordCreateFromKeys(IndexPropertyKeys(K), T, options)
        : RecordCreateFromPattern(K.pattern, T, options));
}
// prettier-ignore
function FromUnionKey(key, type, options) {
    return RecordCreateFromKeys(IndexPropertyKeys(Union(key)), type, options);
}
// prettier-ignore
function FromLiteralKey(key, type, options) {
    return RecordCreateFromKeys([key.toString()], type, options);
}
// prettier-ignore
function FromRegExpKey(key, type, options) {
    return RecordCreateFromPattern(key.source, type, options);
}
// prettier-ignore
function FromStringKey(key, type, options) {
    const pattern = (0,guard_value.IsUndefined)(key.pattern) ? PatternStringExact : key.pattern;
    return RecordCreateFromPattern(pattern, type, options);
}
// prettier-ignore
function FromAnyKey(_, type, options) {
    return RecordCreateFromPattern(PatternStringExact, type, options);
}
// prettier-ignore
function FromNeverKey(_key, type, options) {
    return RecordCreateFromPattern(PatternNeverExact, type, options);
}
// prettier-ignore
function FromIntegerKey(_key, type, options) {
    return RecordCreateFromPattern(PatternNumberExact, type, options);
}
// prettier-ignore
function FromNumberKey(_, type, options) {
    return RecordCreateFromPattern(PatternNumberExact, type, options);
}
// ------------------------------------------------------------------
// TRecordOrObject
// ------------------------------------------------------------------
/** `[Json]` Creates a Record type */
function Record(key, type, options = {}) {
    // prettier-ignore
    return ((0,kind.IsComputed)(type) ? computed_Computed('Record', [key, computed_Computed(type.target, type.parameters)], options) :
        (0,kind.IsComputed)(key) ? computed_Computed('Record', [computed_Computed(type.target, type.parameters), type], options) :
            (0,kind.IsRef)(key) ? computed_Computed('Record', [Ref(key.$ref), type]) :
                (0,kind.IsUnion)(key) ? FromUnionKey(key.anyOf, type, options) :
                    (0,kind.IsTemplateLiteral)(key) ? FromTemplateLiteralKey(key, type, options) :
                        (0,kind.IsLiteral)(key) ? FromLiteralKey(key.const, type, options) :
                            (0,kind.IsInteger)(key) ? FromIntegerKey(key, type, options) :
                                (0,kind.IsNumber)(key) ? FromNumberKey(key, type, options) :
                                    (0,kind.IsRegExp)(key) ? FromRegExpKey(key, type, options) :
                                        (0,kind.IsString)(key) ? FromStringKey(key, type, options) :
                                            (0,kind.IsAny)(key) ? FromAnyKey(key, type, options) :
                                                (0,kind.IsNever)(key) ? FromNeverKey(key, type, options) :
                                                    (0,never.Never)(options));
}

;// ./node_modules/@sinclair/typebox/build/esm/type/required/required-from-mapped-result.mjs


// prettier-ignore
function required_from_mapped_result_FromProperties(P, options) {
    const Acc = {};
    for (const K2 of globalThis.Object.getOwnPropertyNames(P))
        Acc[K2] = Required(P[K2], options);
    return Acc;
}
// prettier-ignore
function required_from_mapped_result_FromMappedResult(R, options) {
    return required_from_mapped_result_FromProperties(R.properties, options);
}
// prettier-ignore
function RequiredFromMappedResult(R, options) {
    const P = required_from_mapped_result_FromMappedResult(R, options);
    return MappedResult(P);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/required/required.mjs









// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------

// prettier-ignore
function required_FromComputed(target, parameters) {
    return computed_Computed('Required', [computed_Computed(target, parameters)]);
}
// prettier-ignore
function required_FromRef($ref) {
    return computed_Computed('Required', [Ref($ref)]);
}
// prettier-ignore
function required_FromProperties(properties) {
    const requiredProperties = {};
    for (const K of globalThis.Object.getOwnPropertyNames(properties))
        requiredProperties[K] = Discard(properties[K], [symbols.OptionalKind]);
    return requiredProperties;
}
// prettier-ignore
function required_FromObject(type) {
    const options = Discard(type, [symbols.TransformKind, '$id', 'required', 'properties']);
    const properties = required_FromProperties(type['properties']);
    return object_Object(properties, options);
}
// prettier-ignore
function required_FromRest(types) {
    return types.map(type => RequiredResolve(type));
}
// ------------------------------------------------------------------
// RequiredResolve
// ------------------------------------------------------------------
// prettier-ignore
function RequiredResolve(type) {
    return ((0,kind.IsComputed)(type) ? required_FromComputed(type.target, type.parameters) :
        (0,kind.IsRef)(type) ? required_FromRef(type.$ref) :
            (0,kind.IsIntersect)(type) ? Intersect(required_FromRest(type.allOf)) :
                (0,kind.IsUnion)(type) ? Union(required_FromRest(type.anyOf)) :
                    (0,kind.IsObject)(type) ? required_FromObject(type) :
                        object_Object({}));
}
/** `[Json]` Constructs a type where all properties are required */
function Required(type, options) {
    if ((0,kind.IsMappedResult)(type)) {
        return RequiredFromMappedResult(type, options);
    }
    else {
        // special: mapping types require overridable options
        return (0,create_type.CreateType)({ ...RequiredResolve(type), ...options });
    }
}

;// ./node_modules/@sinclair/typebox/build/esm/type/module/compute.mjs





















// ------------------------------------------------------------------
// KindGuard
// ------------------------------------------------------------------

// prettier-ignore
function DerefParameters(moduleProperties, types) {
    return types.map((type) => {
        return kind.IsRef(type)
            ? Deref(moduleProperties, type.$ref)
            : FromType(moduleProperties, type);
    });
}
// prettier-ignore
function Deref(moduleProperties, ref) {
    return (ref in moduleProperties
        ? kind.IsRef(moduleProperties[ref])
            ? Deref(moduleProperties, moduleProperties[ref].$ref)
            : FromType(moduleProperties, moduleProperties[ref])
        : (0,never.Never)());
}
// prettier-ignore
function FromAwaited(parameters) {
    return Awaited(parameters[0]);
}
// prettier-ignore
function FromIndex(parameters) {
    return Index(parameters[0], parameters[1]);
}
// prettier-ignore
function FromKeyOf(parameters) {
    return KeyOf(parameters[0]);
}
// prettier-ignore
function FromPartial(parameters) {
    return Partial(parameters[0]);
}
// prettier-ignore
function FromOmit(parameters) {
    return Omit(parameters[0], parameters[1]);
}
// prettier-ignore
function FromPick(parameters) {
    return Pick(parameters[0], parameters[1]);
}
// prettier-ignore
function compute_FromRecord(parameters) {
    return Record(parameters[0], parameters[1]);
}
// prettier-ignore
function FromRequired(parameters) {
    return Required(parameters[0]);
}
// prettier-ignore
function compute_FromComputed(moduleProperties, target, parameters) {
    const dereferenced = DerefParameters(moduleProperties, parameters);
    return (target === 'Awaited' ? FromAwaited(dereferenced) :
        target === 'Index' ? FromIndex(dereferenced) :
            target === 'KeyOf' ? FromKeyOf(dereferenced) :
                target === 'Partial' ? FromPartial(dereferenced) :
                    target === 'Omit' ? FromOmit(dereferenced) :
                        target === 'Pick' ? FromPick(dereferenced) :
                            target === 'Record' ? compute_FromRecord(dereferenced) :
                                target === 'Required' ? FromRequired(dereferenced) :
                                    (0,never.Never)());
}
function compute_FromObject(moduleProperties, properties) {
    return object_Object(globalThis.Object.keys(properties).reduce((result, key) => {
        return { ...result, [key]: FromType(moduleProperties, properties[key]) };
    }, {}));
}
// prettier-ignore
function compute_FromConstructor(moduleProperties, parameters, instanceType) {
    return Constructor(compute_FromRest(moduleProperties, parameters), FromType(moduleProperties, instanceType));
}
// prettier-ignore
function compute_FromFunction(moduleProperties, parameters, returnType) {
    return Function(compute_FromRest(moduleProperties, parameters), FromType(moduleProperties, returnType));
}
function compute_FromTuple(moduleProperties, types) {
    return Tuple(compute_FromRest(moduleProperties, types));
}
function compute_FromIntersect(moduleProperties, types) {
    return Intersect(compute_FromRest(moduleProperties, types));
}
function compute_FromUnion(moduleProperties, types) {
    return Union(compute_FromRest(moduleProperties, types));
}
function compute_FromArray(moduleProperties, type) {
    return array_Array(FromType(moduleProperties, type));
}
function compute_FromAsyncIterator(moduleProperties, type) {
    return AsyncIterator(FromType(moduleProperties, type));
}
function compute_FromIterator(moduleProperties, type) {
    return Iterator(FromType(moduleProperties, type));
}
function compute_FromRest(moduleProperties, types) {
    return types.map((type) => FromType(moduleProperties, type));
}
// prettier-ignore
function FromType(moduleProperties, type) {
    return (
    // Modifier Unwrap - Reapplied via CreateType Options
    kind.IsOptional(type) ? (0,create_type.CreateType)(FromType(moduleProperties, Discard(type, [symbols.OptionalKind])), type) :
        kind.IsReadonly(type) ? (0,create_type.CreateType)(FromType(moduleProperties, Discard(type, [symbols.ReadonlyKind])), type) :
            // Traveral
            kind.IsArray(type) ? (0,create_type.CreateType)(compute_FromArray(moduleProperties, type.items), type) :
                kind.IsAsyncIterator(type) ? (0,create_type.CreateType)(compute_FromAsyncIterator(moduleProperties, type.items), type) :
                    kind.IsComputed(type) ? (0,create_type.CreateType)(compute_FromComputed(moduleProperties, type.target, type.parameters)) :
                        kind.IsConstructor(type) ? (0,create_type.CreateType)(compute_FromConstructor(moduleProperties, type.parameters, type.returns), type) :
                            kind.IsFunction(type) ? (0,create_type.CreateType)(compute_FromFunction(moduleProperties, type.parameters, type.returns), type) :
                                kind.IsIntersect(type) ? (0,create_type.CreateType)(compute_FromIntersect(moduleProperties, type.allOf), type) :
                                    kind.IsIterator(type) ? (0,create_type.CreateType)(compute_FromIterator(moduleProperties, type.items), type) :
                                        kind.IsObject(type) ? (0,create_type.CreateType)(compute_FromObject(moduleProperties, type.properties), type) :
                                            kind.IsTuple(type) ? (0,create_type.CreateType)(compute_FromTuple(moduleProperties, type.items || []), type) :
                                                kind.IsUnion(type) ? (0,create_type.CreateType)(compute_FromUnion(moduleProperties, type.anyOf), type) :
                                                    type);
}
// prettier-ignore
function ComputeType(moduleProperties, key) {
    return (key in moduleProperties
        ? FromType(moduleProperties, moduleProperties[key])
        : (0,never.Never)());
}
// prettier-ignore
function ComputeModuleProperties(moduleProperties) {
    return globalThis.Object.getOwnPropertyNames(moduleProperties).reduce((result, key) => {
        return { ...result, [key]: ComputeType(moduleProperties, key) };
    }, {});
}

;// ./node_modules/@sinclair/typebox/build/esm/type/module/module.mjs


// ------------------------------------------------------------------
// Module Infrastructure Types
// ------------------------------------------------------------------

// ------------------------------------------------------------------
// Module
// ------------------------------------------------------------------
// prettier-ignore
class TModule {
    constructor($defs) {
        const computed = ComputeModuleProperties($defs);
        const identified = this.WithIdentifiers(computed);
        this.$defs = identified;
    }
    /** `[Json]` Imports a Type by Key. */
    Import(key, options) {
        const $defs = { ...this.$defs, [key]: (0,create_type.CreateType)(this.$defs[key], options) };
        return (0,create_type.CreateType)({ [symbols.Kind]: 'Import', $defs, $ref: key });
    }
    // prettier-ignore
    WithIdentifiers($defs) {
        return globalThis.Object.getOwnPropertyNames($defs).reduce((result, key) => {
            return { ...result, [key]: { ...$defs[key], $id: key } };
        }, {});
    }
}
/** `[Json]` Creates a Type Definition Module. */
function Module(properties) {
    return new TModule(properties);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/not/not.mjs


/** `[Json]` Creates a Not type */
function Not(type, options) {
    return (0,create_type.CreateType)({ [symbols.Kind]: 'Not', not: type }, options);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/parameters/parameters.mjs

/** `[JavaScript]` Extracts the Parameters from the given Function type */
function Parameters(schema, options) {
    return Tuple(schema.parameters, options);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/readonly-optional/readonly-optional.mjs


/** `[Json]` Creates a Readonly and Optional property */
function ReadonlyOptional(schema) {
    return Readonly(Optional(schema));
}

;// ./node_modules/@sinclair/typebox/build/esm/type/clone/type.mjs

/** Clones a Rest */
function CloneRest(schemas) {
    return schemas.map((schema) => CloneType(schema));
}
/** Clones a Type */
function CloneType(schema, options) {
    return options === undefined ? (0,value.Clone)(schema) : (0,value.Clone)({ ...options, ...schema });
}

;// ./node_modules/@sinclair/typebox/build/esm/type/recursive/recursive.mjs




// Auto Tracked For Recursive Types without ID's
let Ordinal = 0;
/** `[Json]` Creates a Recursive type */
function Recursive(callback, options = {}) {
    if ((0,guard_value.IsUndefined)(options.$id))
        options.$id = `T${Ordinal++}`;
    const thisType = CloneType(callback({ [symbols.Kind]: 'This', $ref: `${options.$id}` }));
    thisType.$id = options.$id;
    // prettier-ignore
    return (0,create_type.CreateType)({ [symbols.Hint]: 'Recursive', ...thisType }, options);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/regexp/regexp.mjs



/** `[JavaScript]` Creates a RegExp type */
function regexp_RegExp(unresolved, options) {
    const expr = (0,guard_value.IsString)(unresolved) ? new globalThis.RegExp(unresolved) : unresolved;
    return (0,create_type.CreateType)({ [symbols.Kind]: 'RegExp', type: 'RegExp', source: expr.source, flags: expr.flags }, options);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/rest/rest.mjs
// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------

// prettier-ignore
function RestResolve(T) {
    return ((0,kind.IsIntersect)(T) ? T.allOf :
        (0,kind.IsUnion)(T) ? T.anyOf :
            (0,kind.IsTuple)(T) ? T.items ?? [] :
                []);
}
/** `[Json]` Extracts interior Rest elements from Tuple, Intersect and Union types */
function Rest(T) {
    return RestResolve(T);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/return-type/return-type.mjs

/** `[JavaScript]` Extracts the ReturnType from the given Function type */
function ReturnType(schema, options) {
    return (0,create_type.CreateType)(schema.returns, options);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/transform/transform.mjs

// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------

// ------------------------------------------------------------------
// TransformBuilders
// ------------------------------------------------------------------
class TransformDecodeBuilder {
    constructor(schema) {
        this.schema = schema;
    }
    Decode(decode) {
        return new TransformEncodeBuilder(this.schema, decode);
    }
}
// prettier-ignore
class TransformEncodeBuilder {
    constructor(schema, decode) {
        this.schema = schema;
        this.decode = decode;
    }
    EncodeTransform(encode, schema) {
        const Encode = (value) => schema[symbols.TransformKind].Encode(encode(value));
        const Decode = (value) => this.decode(schema[symbols.TransformKind].Decode(value));
        const Codec = { Encode: Encode, Decode: Decode };
        return { ...schema, [symbols.TransformKind]: Codec };
    }
    EncodeSchema(encode, schema) {
        const Codec = { Decode: this.decode, Encode: encode };
        return { ...schema, [symbols.TransformKind]: Codec };
    }
    Encode(encode) {
        return ((0,kind.IsTransform)(this.schema) ? this.EncodeTransform(encode, this.schema) : this.EncodeSchema(encode, this.schema));
    }
}
/** `[Json]` Creates a Transform type */
function Transform(schema) {
    return new TransformDecodeBuilder(schema);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/unsafe/unsafe.mjs


/** `[Json]` Creates a Unsafe type that will infers as the generic argument T */
function Unsafe(options = {}) {
    return (0,create_type.CreateType)({ [symbols.Kind]: options[symbols.Kind] ?? 'Unsafe' }, options);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/void/void.mjs


/** `[JavaScript]` Creates a Void type */
function Void(options) {
    return (0,create_type.CreateType)({ [symbols.Kind]: 'Void', type: 'void' }, options);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/type/type.mjs
// ------------------------------------------------------------------
// Type: Module
// ------------------------------------------------------------------


























































;// ./node_modules/@sinclair/typebox/build/esm/type/type/index.mjs
// ------------------------------------------------------------------
// JsonTypeBuilder
// ------------------------------------------------------------------

// ------------------------------------------------------------------
// JavaScriptTypeBuilder
// ------------------------------------------------------------------


/** JavaScript Type Builder with Static Resolution for TypeScript */
const Type = type_type_namespaceObject;




/***/ }),

/***/ 154:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IsArray: () => (/* binding */ IsArray),
/* harmony export */   IsAsyncIterator: () => (/* binding */ IsAsyncIterator),
/* harmony export */   IsBigInt: () => (/* binding */ IsBigInt),
/* harmony export */   IsBoolean: () => (/* binding */ IsBoolean),
/* harmony export */   IsDate: () => (/* binding */ IsDate),
/* harmony export */   IsFunction: () => (/* binding */ IsFunction),
/* harmony export */   IsInteger: () => (/* binding */ IsInteger),
/* harmony export */   IsIterator: () => (/* binding */ IsIterator),
/* harmony export */   IsNull: () => (/* binding */ IsNull),
/* harmony export */   IsNumber: () => (/* binding */ IsNumber),
/* harmony export */   IsObject: () => (/* binding */ IsObject),
/* harmony export */   IsPromise: () => (/* binding */ IsPromise),
/* harmony export */   IsString: () => (/* binding */ IsString),
/* harmony export */   IsSymbol: () => (/* binding */ IsSymbol),
/* harmony export */   IsUint8Array: () => (/* binding */ IsUint8Array),
/* harmony export */   IsUndefined: () => (/* binding */ IsUndefined)
/* harmony export */ });
/* unused harmony exports IsStandardObject, IsInstanceObject, IsMap, IsSet, IsRegExp, IsTypedArray, IsInt8Array, IsUint8ClampedArray, IsInt16Array, IsUint16Array, IsInt32Array, IsUint32Array, IsFloat32Array, IsFloat64Array, IsBigInt64Array, IsBigUint64Array, HasPropertyKey, IsValueType */
// --------------------------------------------------------------------------
// Iterators
// --------------------------------------------------------------------------
/** Returns true if this value is an async iterator */
function IsAsyncIterator(value) {
    return IsObject(value) && Symbol.asyncIterator in value;
}
/** Returns true if this value is an iterator */
function IsIterator(value) {
    return IsObject(value) && Symbol.iterator in value;
}
// --------------------------------------------------------------------------
// Object Instances
// --------------------------------------------------------------------------
/** Returns true if this value is not an instance of a class */
function IsStandardObject(value) {
    return IsObject(value) && (Object.getPrototypeOf(value) === Object.prototype || Object.getPrototypeOf(value) === null);
}
/** Returns true if this value is an instance of a class */
function IsInstanceObject(value) {
    return IsObject(value) && !IsArray(value) && IsFunction(value.constructor) && value.constructor.name !== 'Object';
}
// --------------------------------------------------------------------------
// JavaScript
// --------------------------------------------------------------------------
/** Returns true if this value is a Promise */
function IsPromise(value) {
    return value instanceof Promise;
}
/** Returns true if this value is a Date */
function IsDate(value) {
    return value instanceof Date && Number.isFinite(value.getTime());
}
/** Returns true if this value is an instance of Map<K, T> */
function IsMap(value) {
    return value instanceof globalThis.Map;
}
/** Returns true if this value is an instance of Set<T> */
function IsSet(value) {
    return value instanceof globalThis.Set;
}
/** Returns true if this value is RegExp */
function IsRegExp(value) {
    return value instanceof globalThis.RegExp;
}
/** Returns true if this value is a typed array */
function IsTypedArray(value) {
    return ArrayBuffer.isView(value);
}
/** Returns true if the value is a Int8Array */
function IsInt8Array(value) {
    return value instanceof globalThis.Int8Array;
}
/** Returns true if the value is a Uint8Array */
function IsUint8Array(value) {
    return value instanceof globalThis.Uint8Array;
}
/** Returns true if the value is a Uint8ClampedArray */
function IsUint8ClampedArray(value) {
    return value instanceof globalThis.Uint8ClampedArray;
}
/** Returns true if the value is a Int16Array */
function IsInt16Array(value) {
    return value instanceof globalThis.Int16Array;
}
/** Returns true if the value is a Uint16Array */
function IsUint16Array(value) {
    return value instanceof globalThis.Uint16Array;
}
/** Returns true if the value is a Int32Array */
function IsInt32Array(value) {
    return value instanceof globalThis.Int32Array;
}
/** Returns true if the value is a Uint32Array */
function IsUint32Array(value) {
    return value instanceof globalThis.Uint32Array;
}
/** Returns true if the value is a Float32Array */
function IsFloat32Array(value) {
    return value instanceof globalThis.Float32Array;
}
/** Returns true if the value is a Float64Array */
function IsFloat64Array(value) {
    return value instanceof globalThis.Float64Array;
}
/** Returns true if the value is a BigInt64Array */
function IsBigInt64Array(value) {
    return value instanceof globalThis.BigInt64Array;
}
/** Returns true if the value is a BigUint64Array */
function IsBigUint64Array(value) {
    return value instanceof globalThis.BigUint64Array;
}
// --------------------------------------------------------------------------
// PropertyKey
// --------------------------------------------------------------------------
/** Returns true if this value has this property key */
function HasPropertyKey(value, key) {
    return key in value;
}
// --------------------------------------------------------------------------
// Standard
// --------------------------------------------------------------------------
/** Returns true of this value is an object type */
function IsObject(value) {
    return value !== null && typeof value === 'object';
}
/** Returns true if this value is an array, but not a typed array */
function IsArray(value) {
    return Array.isArray(value) && !ArrayBuffer.isView(value);
}
/** Returns true if this value is an undefined */
function IsUndefined(value) {
    return value === undefined;
}
/** Returns true if this value is an null */
function IsNull(value) {
    return value === null;
}
/** Returns true if this value is an boolean */
function IsBoolean(value) {
    return typeof value === 'boolean';
}
/** Returns true if this value is an number */
function IsNumber(value) {
    return typeof value === 'number';
}
/** Returns true if this value is an integer */
function IsInteger(value) {
    return Number.isInteger(value);
}
/** Returns true if this value is bigint */
function IsBigInt(value) {
    return typeof value === 'bigint';
}
/** Returns true if this value is string */
function IsString(value) {
    return typeof value === 'string';
}
/** Returns true if this value is a function */
function IsFunction(value) {
    return typeof value === 'function';
}
/** Returns true if this value is a symbol */
function IsSymbol(value) {
    return typeof value === 'symbol';
}
/** Returns true if this value is a value type such as number, string, boolean */
function IsValueType(value) {
    // prettier-ignore
    return (IsBigInt(value) ||
        IsBoolean(value) ||
        IsNull(value) ||
        IsNumber(value) ||
        IsString(value) ||
        IsSymbol(value) ||
        IsUndefined(value));
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXTERNAL MODULE: ./node_modules/@sinclair/typebox/build/esm/system/policy.mjs
var policy = __webpack_require__(297);
// EXTERNAL MODULE: ./node_modules/@sinclair/typebox/build/esm/type/keyof/keyof-property-keys.mjs
var keyof_property_keys = __webpack_require__(692);
;// ./node_modules/@sinclair/typebox/build/esm/type/registry/format.mjs
/** A registry for user defined string formats */
const map = new Map();
/** Returns the entries in this registry */
function Entries() {
    return new Map(map);
}
/** Clears all user defined string formats */
function Clear() {
    return map.clear();
}
/** Deletes a registered format */
function Delete(format) {
    return map.delete(format);
}
/** Returns true if the user defined string format exists */
function Has(format) {
    return map.has(format);
}
/** Sets a validation function for a user defined string format */
function format_Set(format, func) {
    map.set(format, func);
}
/** Gets a validation function for a user defined string format */
function Get(format) {
    return map.get(format);
}

;// ./node_modules/@sinclair/typebox/build/esm/type/registry/type.mjs
/** A registry for user defined types */
const type_map = new Map();
/** Returns the entries in this registry */
function type_Entries() {
    return new Map(type_map);
}
/** Clears all user defined types */
function type_Clear() {
    return type_map.clear();
}
/** Deletes a registered type */
function type_Delete(kind) {
    return type_map.delete(kind);
}
/** Returns true if this registry contains this kind */
function type_Has(kind) {
    return type_map.has(kind);
}
/** Sets a validation function for a user defined type */
function type_Set(kind, func) {
    type_map.set(kind, func);
}
/** Gets a custom validation function for a user defined type */
function type_Get(kind) {
    return type_map.get(kind);
}

// EXTERNAL MODULE: ./node_modules/@sinclair/typebox/build/esm/type/symbols/symbols.mjs
var symbols = __webpack_require__(192);
;// ./node_modules/@sinclair/typebox/build/esm/type/extends/extends-undefined.mjs

/** Fast undefined check used for properties of type undefined */
function Intersect(schema) {
    return schema.allOf.every((schema) => ExtendsUndefinedCheck(schema));
}
function Union(schema) {
    return schema.anyOf.some((schema) => ExtendsUndefinedCheck(schema));
}
function Not(schema) {
    return !ExtendsUndefinedCheck(schema.not);
}
/** Fast undefined check used for properties of type undefined */
// prettier-ignore
function ExtendsUndefinedCheck(schema) {
    return (schema[symbols.Kind] === 'Intersect' ? Intersect(schema) :
        schema[symbols.Kind] === 'Union' ? Union(schema) :
            schema[symbols.Kind] === 'Not' ? Not(schema) :
                schema[symbols.Kind] === 'Undefined' ? true :
                    false);
}

;// ./node_modules/@sinclair/typebox/build/esm/errors/function.mjs


/** Creates an error message using en-US as the default locale */
function DefaultErrorFunction(error) {
    switch (error.errorType) {
        case ValueErrorType.ArrayContains:
            return 'Expected array to contain at least one matching value';
        case ValueErrorType.ArrayMaxContains:
            return `Expected array to contain no more than ${error.schema.maxContains} matching values`;
        case ValueErrorType.ArrayMinContains:
            return `Expected array to contain at least ${error.schema.minContains} matching values`;
        case ValueErrorType.ArrayMaxItems:
            return `Expected array length to be less or equal to ${error.schema.maxItems}`;
        case ValueErrorType.ArrayMinItems:
            return `Expected array length to be greater or equal to ${error.schema.minItems}`;
        case ValueErrorType.ArrayUniqueItems:
            return 'Expected array elements to be unique';
        case ValueErrorType.Array:
            return 'Expected array';
        case ValueErrorType.AsyncIterator:
            return 'Expected AsyncIterator';
        case ValueErrorType.BigIntExclusiveMaximum:
            return `Expected bigint to be less than ${error.schema.exclusiveMaximum}`;
        case ValueErrorType.BigIntExclusiveMinimum:
            return `Expected bigint to be greater than ${error.schema.exclusiveMinimum}`;
        case ValueErrorType.BigIntMaximum:
            return `Expected bigint to be less or equal to ${error.schema.maximum}`;
        case ValueErrorType.BigIntMinimum:
            return `Expected bigint to be greater or equal to ${error.schema.minimum}`;
        case ValueErrorType.BigIntMultipleOf:
            return `Expected bigint to be a multiple of ${error.schema.multipleOf}`;
        case ValueErrorType.BigInt:
            return 'Expected bigint';
        case ValueErrorType.Boolean:
            return 'Expected boolean';
        case ValueErrorType.DateExclusiveMinimumTimestamp:
            return `Expected Date timestamp to be greater than ${error.schema.exclusiveMinimumTimestamp}`;
        case ValueErrorType.DateExclusiveMaximumTimestamp:
            return `Expected Date timestamp to be less than ${error.schema.exclusiveMaximumTimestamp}`;
        case ValueErrorType.DateMinimumTimestamp:
            return `Expected Date timestamp to be greater or equal to ${error.schema.minimumTimestamp}`;
        case ValueErrorType.DateMaximumTimestamp:
            return `Expected Date timestamp to be less or equal to ${error.schema.maximumTimestamp}`;
        case ValueErrorType.DateMultipleOfTimestamp:
            return `Expected Date timestamp to be a multiple of ${error.schema.multipleOfTimestamp}`;
        case ValueErrorType.Date:
            return 'Expected Date';
        case ValueErrorType.Function:
            return 'Expected function';
        case ValueErrorType.IntegerExclusiveMaximum:
            return `Expected integer to be less than ${error.schema.exclusiveMaximum}`;
        case ValueErrorType.IntegerExclusiveMinimum:
            return `Expected integer to be greater than ${error.schema.exclusiveMinimum}`;
        case ValueErrorType.IntegerMaximum:
            return `Expected integer to be less or equal to ${error.schema.maximum}`;
        case ValueErrorType.IntegerMinimum:
            return `Expected integer to be greater or equal to ${error.schema.minimum}`;
        case ValueErrorType.IntegerMultipleOf:
            return `Expected integer to be a multiple of ${error.schema.multipleOf}`;
        case ValueErrorType.Integer:
            return 'Expected integer';
        case ValueErrorType.IntersectUnevaluatedProperties:
            return 'Unexpected property';
        case ValueErrorType.Intersect:
            return 'Expected all values to match';
        case ValueErrorType.Iterator:
            return 'Expected Iterator';
        case ValueErrorType.Literal:
            return `Expected ${typeof error.schema.const === 'string' ? `'${error.schema.const}'` : error.schema.const}`;
        case ValueErrorType.Never:
            return 'Never';
        case ValueErrorType.Not:
            return 'Value should not match';
        case ValueErrorType.Null:
            return 'Expected null';
        case ValueErrorType.NumberExclusiveMaximum:
            return `Expected number to be less than ${error.schema.exclusiveMaximum}`;
        case ValueErrorType.NumberExclusiveMinimum:
            return `Expected number to be greater than ${error.schema.exclusiveMinimum}`;
        case ValueErrorType.NumberMaximum:
            return `Expected number to be less or equal to ${error.schema.maximum}`;
        case ValueErrorType.NumberMinimum:
            return `Expected number to be greater or equal to ${error.schema.minimum}`;
        case ValueErrorType.NumberMultipleOf:
            return `Expected number to be a multiple of ${error.schema.multipleOf}`;
        case ValueErrorType.Number:
            return 'Expected number';
        case ValueErrorType.Object:
            return 'Expected object';
        case ValueErrorType.ObjectAdditionalProperties:
            return 'Unexpected property';
        case ValueErrorType.ObjectMaxProperties:
            return `Expected object to have no more than ${error.schema.maxProperties} properties`;
        case ValueErrorType.ObjectMinProperties:
            return `Expected object to have at least ${error.schema.minProperties} properties`;
        case ValueErrorType.ObjectRequiredProperty:
            return 'Expected required property';
        case ValueErrorType.Promise:
            return 'Expected Promise';
        case ValueErrorType.RegExp:
            return 'Expected string to match regular expression';
        case ValueErrorType.StringFormatUnknown:
            return `Unknown format '${error.schema.format}'`;
        case ValueErrorType.StringFormat:
            return `Expected string to match '${error.schema.format}' format`;
        case ValueErrorType.StringMaxLength:
            return `Expected string length less or equal to ${error.schema.maxLength}`;
        case ValueErrorType.StringMinLength:
            return `Expected string length greater or equal to ${error.schema.minLength}`;
        case ValueErrorType.StringPattern:
            return `Expected string to match '${error.schema.pattern}'`;
        case ValueErrorType.String:
            return 'Expected string';
        case ValueErrorType.Symbol:
            return 'Expected symbol';
        case ValueErrorType.TupleLength:
            return `Expected tuple to have ${error.schema.maxItems || 0} elements`;
        case ValueErrorType.Tuple:
            return 'Expected tuple';
        case ValueErrorType.Uint8ArrayMaxByteLength:
            return `Expected byte length less or equal to ${error.schema.maxByteLength}`;
        case ValueErrorType.Uint8ArrayMinByteLength:
            return `Expected byte length greater or equal to ${error.schema.minByteLength}`;
        case ValueErrorType.Uint8Array:
            return 'Expected Uint8Array';
        case ValueErrorType.Undefined:
            return 'Expected undefined';
        case ValueErrorType.Union:
            return 'Expected union value';
        case ValueErrorType.Void:
            return 'Expected void';
        case ValueErrorType.Kind:
            return `Expected kind '${error.schema[symbols.Kind]}'`;
        default:
            return 'Unknown error type';
    }
}
/** Manages error message providers */
let errorFunction = DefaultErrorFunction;
/** Sets the error function used to generate error messages. */
function SetErrorFunction(callback) {
    errorFunction = callback;
}
/** Gets the error function used to generate error messages */
function GetErrorFunction() {
    return errorFunction;
}

// EXTERNAL MODULE: ./node_modules/@sinclair/typebox/build/esm/type/error/error.mjs
var error = __webpack_require__(231);
// EXTERNAL MODULE: ./node_modules/@sinclair/typebox/build/esm/value/guard/guard.mjs
var guard = __webpack_require__(154);
;// ./node_modules/@sinclair/typebox/build/esm/value/deref/deref.mjs



class TypeDereferenceError extends error.TypeBoxError {
    constructor(schema) {
        super(`Unable to dereference schema with $id '${schema.$ref}'`);
        this.schema = schema;
    }
}
function Resolve(schema, references) {
    const target = references.find((target) => target.$id === schema.$ref);
    if (target === undefined)
        throw new TypeDereferenceError(schema);
    return Deref(target, references);
}
/** `[Internal]` Pushes a schema onto references if the schema has an $id and does not exist on references */
function Pushref(schema, references) {
    if (!(0,guard.IsString)(schema.$id) || references.some((target) => target.$id === schema.$id))
        return references;
    references.push(schema);
    return references;
}
/** `[Internal]` Dereferences a schema from the references array or throws if not found */
function Deref(schema, references) {
    // prettier-ignore
    return (schema[symbols.Kind] === 'This' || schema[symbols.Kind] === 'Ref')
        ? Resolve(schema, references)
        : schema;
}

;// ./node_modules/@sinclair/typebox/build/esm/value/hash/hash.mjs


// ------------------------------------------------------------------
// Errors
// ------------------------------------------------------------------
class ValueHashError extends error.TypeBoxError {
    constructor(value) {
        super(`Unable to hash value`);
        this.value = value;
    }
}
// ------------------------------------------------------------------
// ByteMarker
// ------------------------------------------------------------------
var ByteMarker;
(function (ByteMarker) {
    ByteMarker[ByteMarker["Undefined"] = 0] = "Undefined";
    ByteMarker[ByteMarker["Null"] = 1] = "Null";
    ByteMarker[ByteMarker["Boolean"] = 2] = "Boolean";
    ByteMarker[ByteMarker["Number"] = 3] = "Number";
    ByteMarker[ByteMarker["String"] = 4] = "String";
    ByteMarker[ByteMarker["Object"] = 5] = "Object";
    ByteMarker[ByteMarker["Array"] = 6] = "Array";
    ByteMarker[ByteMarker["Date"] = 7] = "Date";
    ByteMarker[ByteMarker["Uint8Array"] = 8] = "Uint8Array";
    ByteMarker[ByteMarker["Symbol"] = 9] = "Symbol";
    ByteMarker[ByteMarker["BigInt"] = 10] = "BigInt";
})(ByteMarker || (ByteMarker = {}));
// ------------------------------------------------------------------
// State
// ------------------------------------------------------------------
let Accumulator = BigInt('14695981039346656037');
const [Prime, Size] = [BigInt('1099511628211'), BigInt('18446744073709551616' /* 2 ^ 64 */)];
const Bytes = Array.from({ length: 256 }).map((_, i) => BigInt(i));
const F64 = new Float64Array(1);
const F64In = new DataView(F64.buffer);
const F64Out = new Uint8Array(F64.buffer);
// ------------------------------------------------------------------
// NumberToBytes
// ------------------------------------------------------------------
function* NumberToBytes(value) {
    const byteCount = value === 0 ? 1 : Math.ceil(Math.floor(Math.log2(value) + 1) / 8);
    for (let i = 0; i < byteCount; i++) {
        yield (value >> (8 * (byteCount - 1 - i))) & 0xff;
    }
}
// ------------------------------------------------------------------
// Hashing Functions
// ------------------------------------------------------------------
function ArrayType(value) {
    FNV1A64(ByteMarker.Array);
    for (const item of value) {
        Visit(item);
    }
}
function BooleanType(value) {
    FNV1A64(ByteMarker.Boolean);
    FNV1A64(value ? 1 : 0);
}
function BigIntType(value) {
    FNV1A64(ByteMarker.BigInt);
    F64In.setBigInt64(0, value);
    for (const byte of F64Out) {
        FNV1A64(byte);
    }
}
function DateType(value) {
    FNV1A64(ByteMarker.Date);
    Visit(value.getTime());
}
function NullType(value) {
    FNV1A64(ByteMarker.Null);
}
function NumberType(value) {
    FNV1A64(ByteMarker.Number);
    F64In.setFloat64(0, value);
    for (const byte of F64Out) {
        FNV1A64(byte);
    }
}
function ObjectType(value) {
    FNV1A64(ByteMarker.Object);
    for (const key of globalThis.Object.getOwnPropertyNames(value).sort()) {
        Visit(key);
        Visit(value[key]);
    }
}
function StringType(value) {
    FNV1A64(ByteMarker.String);
    for (let i = 0; i < value.length; i++) {
        for (const byte of NumberToBytes(value.charCodeAt(i))) {
            FNV1A64(byte);
        }
    }
}
function SymbolType(value) {
    FNV1A64(ByteMarker.Symbol);
    Visit(value.description);
}
function Uint8ArrayType(value) {
    FNV1A64(ByteMarker.Uint8Array);
    for (let i = 0; i < value.length; i++) {
        FNV1A64(value[i]);
    }
}
function UndefinedType(value) {
    return FNV1A64(ByteMarker.Undefined);
}
function Visit(value) {
    if ((0,guard.IsArray)(value))
        return ArrayType(value);
    if ((0,guard.IsBoolean)(value))
        return BooleanType(value);
    if ((0,guard.IsBigInt)(value))
        return BigIntType(value);
    if ((0,guard.IsDate)(value))
        return DateType(value);
    if ((0,guard.IsNull)(value))
        return NullType(value);
    if ((0,guard.IsNumber)(value))
        return NumberType(value);
    if ((0,guard.IsObject)(value))
        return ObjectType(value);
    if ((0,guard.IsString)(value))
        return StringType(value);
    if ((0,guard.IsSymbol)(value))
        return SymbolType(value);
    if ((0,guard.IsUint8Array)(value))
        return Uint8ArrayType(value);
    if ((0,guard.IsUndefined)(value))
        return UndefinedType(value);
    throw new ValueHashError(value);
}
function FNV1A64(byte) {
    Accumulator = Accumulator ^ Bytes[byte];
    Accumulator = (Accumulator * Prime) % Size;
}
// ------------------------------------------------------------------
// Hash
// ------------------------------------------------------------------
/** Creates a FNV1A-64 non cryptographic hash of the given value */
function Hash(value) {
    Accumulator = BigInt('14695981039346656037');
    Visit(value);
    return Accumulator;
}

// EXTERNAL MODULE: ./node_modules/@sinclair/typebox/build/esm/type/never/never.mjs
var never = __webpack_require__(263);
// EXTERNAL MODULE: ./node_modules/@sinclair/typebox/build/esm/type/guard/kind.mjs
var kind = __webpack_require__(582);
;// ./node_modules/@sinclair/typebox/build/esm/value/check/check.mjs









// ------------------------------------------------------------------
// ValueGuard
// ------------------------------------------------------------------

// ------------------------------------------------------------------
// KindGuard
// ------------------------------------------------------------------

// ------------------------------------------------------------------
// Errors
// ------------------------------------------------------------------
class ValueCheckUnknownTypeError extends error.TypeBoxError {
    constructor(schema) {
        super(`Unknown type`);
        this.schema = schema;
    }
}
// ------------------------------------------------------------------
// TypeGuards
// ------------------------------------------------------------------
function IsAnyOrUnknown(schema) {
    return schema[symbols.Kind] === 'Any' || schema[symbols.Kind] === 'Unknown';
}
// ------------------------------------------------------------------
// Guards
// ------------------------------------------------------------------
function IsDefined(value) {
    return value !== undefined;
}
// ------------------------------------------------------------------
// Types
// ------------------------------------------------------------------
function FromAny(schema, references, value) {
    return true;
}
function FromArray(schema, references, value) {
    if (!(0,guard.IsArray)(value))
        return false;
    if (IsDefined(schema.minItems) && !(value.length >= schema.minItems)) {
        return false;
    }
    if (IsDefined(schema.maxItems) && !(value.length <= schema.maxItems)) {
        return false;
    }
    if (!value.every((value) => check_Visit(schema.items, references, value))) {
        return false;
    }
    // prettier-ignore
    if (schema.uniqueItems === true && !((function () { const set = new Set(); for (const element of value) {
        const hashed = Hash(element);
        if (set.has(hashed)) {
            return false;
        }
        else {
            set.add(hashed);
        }
    } return true; })())) {
        return false;
    }
    // contains
    if (!(IsDefined(schema.contains) || (0,guard.IsNumber)(schema.minContains) || (0,guard.IsNumber)(schema.maxContains))) {
        return true; // exit
    }
    const containsSchema = IsDefined(schema.contains) ? schema.contains : (0,never.Never)();
    const containsCount = value.reduce((acc, value) => (check_Visit(containsSchema, references, value) ? acc + 1 : acc), 0);
    if (containsCount === 0) {
        return false;
    }
    if ((0,guard.IsNumber)(schema.minContains) && containsCount < schema.minContains) {
        return false;
    }
    if ((0,guard.IsNumber)(schema.maxContains) && containsCount > schema.maxContains) {
        return false;
    }
    return true;
}
function FromAsyncIterator(schema, references, value) {
    return (0,guard.IsAsyncIterator)(value);
}
function FromBigInt(schema, references, value) {
    if (!(0,guard.IsBigInt)(value))
        return false;
    if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
        return false;
    }
    if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
        return false;
    }
    if (IsDefined(schema.maximum) && !(value <= schema.maximum)) {
        return false;
    }
    if (IsDefined(schema.minimum) && !(value >= schema.minimum)) {
        return false;
    }
    if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === BigInt(0))) {
        return false;
    }
    return true;
}
function FromBoolean(schema, references, value) {
    return (0,guard.IsBoolean)(value);
}
function FromConstructor(schema, references, value) {
    return check_Visit(schema.returns, references, value.prototype);
}
function FromDate(schema, references, value) {
    if (!(0,guard.IsDate)(value))
        return false;
    if (IsDefined(schema.exclusiveMaximumTimestamp) && !(value.getTime() < schema.exclusiveMaximumTimestamp)) {
        return false;
    }
    if (IsDefined(schema.exclusiveMinimumTimestamp) && !(value.getTime() > schema.exclusiveMinimumTimestamp)) {
        return false;
    }
    if (IsDefined(schema.maximumTimestamp) && !(value.getTime() <= schema.maximumTimestamp)) {
        return false;
    }
    if (IsDefined(schema.minimumTimestamp) && !(value.getTime() >= schema.minimumTimestamp)) {
        return false;
    }
    if (IsDefined(schema.multipleOfTimestamp) && !(value.getTime() % schema.multipleOfTimestamp === 0)) {
        return false;
    }
    return true;
}
function FromFunction(schema, references, value) {
    return (0,guard.IsFunction)(value);
}
function FromImport(schema, references, value) {
    const definitions = globalThis.Object.values(schema.$defs);
    const target = schema.$defs[schema.$ref];
    return check_Visit(target, [...references, ...definitions], value);
}
function FromInteger(schema, references, value) {
    if (!(0,guard.IsInteger)(value)) {
        return false;
    }
    if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
        return false;
    }
    if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
        return false;
    }
    if (IsDefined(schema.maximum) && !(value <= schema.maximum)) {
        return false;
    }
    if (IsDefined(schema.minimum) && !(value >= schema.minimum)) {
        return false;
    }
    if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === 0)) {
        return false;
    }
    return true;
}
function FromIntersect(schema, references, value) {
    const check1 = schema.allOf.every((schema) => check_Visit(schema, references, value));
    if (schema.unevaluatedProperties === false) {
        const keyPattern = new RegExp((0,keyof_property_keys.KeyOfPattern)(schema));
        const check2 = Object.getOwnPropertyNames(value).every((key) => keyPattern.test(key));
        return check1 && check2;
    }
    else if ((0,kind.IsSchema)(schema.unevaluatedProperties)) {
        const keyCheck = new RegExp((0,keyof_property_keys.KeyOfPattern)(schema));
        const check2 = Object.getOwnPropertyNames(value).every((key) => keyCheck.test(key) || check_Visit(schema.unevaluatedProperties, references, value[key]));
        return check1 && check2;
    }
    else {
        return check1;
    }
}
function FromIterator(schema, references, value) {
    return (0,guard.IsIterator)(value);
}
function FromLiteral(schema, references, value) {
    return value === schema.const;
}
function FromNever(schema, references, value) {
    return false;
}
function FromNot(schema, references, value) {
    return !check_Visit(schema.not, references, value);
}
function FromNull(schema, references, value) {
    return (0,guard.IsNull)(value);
}
function FromNumber(schema, references, value) {
    if (!policy.TypeSystemPolicy.IsNumberLike(value))
        return false;
    if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
        return false;
    }
    if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
        return false;
    }
    if (IsDefined(schema.minimum) && !(value >= schema.minimum)) {
        return false;
    }
    if (IsDefined(schema.maximum) && !(value <= schema.maximum)) {
        return false;
    }
    if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === 0)) {
        return false;
    }
    return true;
}
function FromObject(schema, references, value) {
    if (!policy.TypeSystemPolicy.IsObjectLike(value))
        return false;
    if (IsDefined(schema.minProperties) && !(Object.getOwnPropertyNames(value).length >= schema.minProperties)) {
        return false;
    }
    if (IsDefined(schema.maxProperties) && !(Object.getOwnPropertyNames(value).length <= schema.maxProperties)) {
        return false;
    }
    const knownKeys = Object.getOwnPropertyNames(schema.properties);
    for (const knownKey of knownKeys) {
        const property = schema.properties[knownKey];
        if (schema.required && schema.required.includes(knownKey)) {
            if (!check_Visit(property, references, value[knownKey])) {
                return false;
            }
            if ((ExtendsUndefinedCheck(property) || IsAnyOrUnknown(property)) && !(knownKey in value)) {
                return false;
            }
        }
        else {
            if (policy.TypeSystemPolicy.IsExactOptionalProperty(value, knownKey) && !check_Visit(property, references, value[knownKey])) {
                return false;
            }
        }
    }
    if (schema.additionalProperties === false) {
        const valueKeys = Object.getOwnPropertyNames(value);
        // optimization: value is valid if schemaKey length matches the valueKey length
        if (schema.required && schema.required.length === knownKeys.length && valueKeys.length === knownKeys.length) {
            return true;
        }
        else {
            return valueKeys.every((valueKey) => knownKeys.includes(valueKey));
        }
    }
    else if (typeof schema.additionalProperties === 'object') {
        const valueKeys = Object.getOwnPropertyNames(value);
        return valueKeys.every((key) => knownKeys.includes(key) || check_Visit(schema.additionalProperties, references, value[key]));
    }
    else {
        return true;
    }
}
function FromPromise(schema, references, value) {
    return (0,guard.IsPromise)(value);
}
function FromRecord(schema, references, value) {
    if (!policy.TypeSystemPolicy.IsRecordLike(value)) {
        return false;
    }
    if (IsDefined(schema.minProperties) && !(Object.getOwnPropertyNames(value).length >= schema.minProperties)) {
        return false;
    }
    if (IsDefined(schema.maxProperties) && !(Object.getOwnPropertyNames(value).length <= schema.maxProperties)) {
        return false;
    }
    const [patternKey, patternSchema] = Object.entries(schema.patternProperties)[0];
    const regex = new RegExp(patternKey);
    // prettier-ignore
    const check1 = Object.entries(value).every(([key, value]) => {
        return (regex.test(key)) ? check_Visit(patternSchema, references, value) : true;
    });
    // prettier-ignore
    const check2 = typeof schema.additionalProperties === 'object' ? Object.entries(value).every(([key, value]) => {
        return (!regex.test(key)) ? check_Visit(schema.additionalProperties, references, value) : true;
    }) : true;
    const check3 = schema.additionalProperties === false
        ? Object.getOwnPropertyNames(value).every((key) => {
            return regex.test(key);
        })
        : true;
    return check1 && check2 && check3;
}
function FromRef(schema, references, value) {
    return check_Visit(Deref(schema, references), references, value);
}
function FromRegExp(schema, references, value) {
    const regex = new RegExp(schema.source, schema.flags);
    if (IsDefined(schema.minLength)) {
        if (!(value.length >= schema.minLength))
            return false;
    }
    if (IsDefined(schema.maxLength)) {
        if (!(value.length <= schema.maxLength))
            return false;
    }
    return regex.test(value);
}
function FromString(schema, references, value) {
    if (!(0,guard.IsString)(value)) {
        return false;
    }
    if (IsDefined(schema.minLength)) {
        if (!(value.length >= schema.minLength))
            return false;
    }
    if (IsDefined(schema.maxLength)) {
        if (!(value.length <= schema.maxLength))
            return false;
    }
    if (IsDefined(schema.pattern)) {
        const regex = new RegExp(schema.pattern);
        if (!regex.test(value))
            return false;
    }
    if (IsDefined(schema.format)) {
        if (!Has(schema.format))
            return false;
        const func = Get(schema.format);
        return func(value);
    }
    return true;
}
function FromSymbol(schema, references, value) {
    return (0,guard.IsSymbol)(value);
}
function FromTemplateLiteral(schema, references, value) {
    return (0,guard.IsString)(value) && new RegExp(schema.pattern).test(value);
}
function FromThis(schema, references, value) {
    return check_Visit(Deref(schema, references), references, value);
}
function FromTuple(schema, references, value) {
    if (!(0,guard.IsArray)(value)) {
        return false;
    }
    if (schema.items === undefined && !(value.length === 0)) {
        return false;
    }
    if (!(value.length === schema.maxItems)) {
        return false;
    }
    if (!schema.items) {
        return true;
    }
    for (let i = 0; i < schema.items.length; i++) {
        if (!check_Visit(schema.items[i], references, value[i]))
            return false;
    }
    return true;
}
function FromUndefined(schema, references, value) {
    return (0,guard.IsUndefined)(value);
}
function FromUnion(schema, references, value) {
    return schema.anyOf.some((inner) => check_Visit(inner, references, value));
}
function FromUint8Array(schema, references, value) {
    if (!(0,guard.IsUint8Array)(value)) {
        return false;
    }
    if (IsDefined(schema.maxByteLength) && !(value.length <= schema.maxByteLength)) {
        return false;
    }
    if (IsDefined(schema.minByteLength) && !(value.length >= schema.minByteLength)) {
        return false;
    }
    return true;
}
function FromUnknown(schema, references, value) {
    return true;
}
function FromVoid(schema, references, value) {
    return policy.TypeSystemPolicy.IsVoidLike(value);
}
function FromKind(schema, references, value) {
    if (!type_Has(schema[symbols.Kind]))
        return false;
    const func = type_Get(schema[symbols.Kind]);
    return func(schema, value);
}
function check_Visit(schema, references, value) {
    const references_ = IsDefined(schema.$id) ? Pushref(schema, references) : references;
    const schema_ = schema;
    switch (schema_[symbols.Kind]) {
        case 'Any':
            return FromAny(schema_, references_, value);
        case 'Array':
            return FromArray(schema_, references_, value);
        case 'AsyncIterator':
            return FromAsyncIterator(schema_, references_, value);
        case 'BigInt':
            return FromBigInt(schema_, references_, value);
        case 'Boolean':
            return FromBoolean(schema_, references_, value);
        case 'Constructor':
            return FromConstructor(schema_, references_, value);
        case 'Date':
            return FromDate(schema_, references_, value);
        case 'Function':
            return FromFunction(schema_, references_, value);
        case 'Import':
            return FromImport(schema_, references_, value);
        case 'Integer':
            return FromInteger(schema_, references_, value);
        case 'Intersect':
            return FromIntersect(schema_, references_, value);
        case 'Iterator':
            return FromIterator(schema_, references_, value);
        case 'Literal':
            return FromLiteral(schema_, references_, value);
        case 'Never':
            return FromNever(schema_, references_, value);
        case 'Not':
            return FromNot(schema_, references_, value);
        case 'Null':
            return FromNull(schema_, references_, value);
        case 'Number':
            return FromNumber(schema_, references_, value);
        case 'Object':
            return FromObject(schema_, references_, value);
        case 'Promise':
            return FromPromise(schema_, references_, value);
        case 'Record':
            return FromRecord(schema_, references_, value);
        case 'Ref':
            return FromRef(schema_, references_, value);
        case 'RegExp':
            return FromRegExp(schema_, references_, value);
        case 'String':
            return FromString(schema_, references_, value);
        case 'Symbol':
            return FromSymbol(schema_, references_, value);
        case 'TemplateLiteral':
            return FromTemplateLiteral(schema_, references_, value);
        case 'This':
            return FromThis(schema_, references_, value);
        case 'Tuple':
            return FromTuple(schema_, references_, value);
        case 'Undefined':
            return FromUndefined(schema_, references_, value);
        case 'Union':
            return FromUnion(schema_, references_, value);
        case 'Uint8Array':
            return FromUint8Array(schema_, references_, value);
        case 'Unknown':
            return FromUnknown(schema_, references_, value);
        case 'Void':
            return FromVoid(schema_, references_, value);
        default:
            if (!type_Has(schema_[symbols.Kind]))
                throw new ValueCheckUnknownTypeError(schema_);
            return FromKind(schema_, references_, value);
    }
}
/** Returns true if the value matches the given type. */
function Check(...args) {
    return args.length === 3 ? check_Visit(args[0], args[1], args[2]) : check_Visit(args[0], [], args[1]);
}

;// ./node_modules/@sinclair/typebox/build/esm/errors/errors.mjs











// ------------------------------------------------------------------
// ValueGuard
// ------------------------------------------------------------------
// prettier-ignore

// ------------------------------------------------------------------
// ValueErrorType
// ------------------------------------------------------------------
var ValueErrorType;
(function (ValueErrorType) {
    ValueErrorType[ValueErrorType["ArrayContains"] = 0] = "ArrayContains";
    ValueErrorType[ValueErrorType["ArrayMaxContains"] = 1] = "ArrayMaxContains";
    ValueErrorType[ValueErrorType["ArrayMaxItems"] = 2] = "ArrayMaxItems";
    ValueErrorType[ValueErrorType["ArrayMinContains"] = 3] = "ArrayMinContains";
    ValueErrorType[ValueErrorType["ArrayMinItems"] = 4] = "ArrayMinItems";
    ValueErrorType[ValueErrorType["ArrayUniqueItems"] = 5] = "ArrayUniqueItems";
    ValueErrorType[ValueErrorType["Array"] = 6] = "Array";
    ValueErrorType[ValueErrorType["AsyncIterator"] = 7] = "AsyncIterator";
    ValueErrorType[ValueErrorType["BigIntExclusiveMaximum"] = 8] = "BigIntExclusiveMaximum";
    ValueErrorType[ValueErrorType["BigIntExclusiveMinimum"] = 9] = "BigIntExclusiveMinimum";
    ValueErrorType[ValueErrorType["BigIntMaximum"] = 10] = "BigIntMaximum";
    ValueErrorType[ValueErrorType["BigIntMinimum"] = 11] = "BigIntMinimum";
    ValueErrorType[ValueErrorType["BigIntMultipleOf"] = 12] = "BigIntMultipleOf";
    ValueErrorType[ValueErrorType["BigInt"] = 13] = "BigInt";
    ValueErrorType[ValueErrorType["Boolean"] = 14] = "Boolean";
    ValueErrorType[ValueErrorType["DateExclusiveMaximumTimestamp"] = 15] = "DateExclusiveMaximumTimestamp";
    ValueErrorType[ValueErrorType["DateExclusiveMinimumTimestamp"] = 16] = "DateExclusiveMinimumTimestamp";
    ValueErrorType[ValueErrorType["DateMaximumTimestamp"] = 17] = "DateMaximumTimestamp";
    ValueErrorType[ValueErrorType["DateMinimumTimestamp"] = 18] = "DateMinimumTimestamp";
    ValueErrorType[ValueErrorType["DateMultipleOfTimestamp"] = 19] = "DateMultipleOfTimestamp";
    ValueErrorType[ValueErrorType["Date"] = 20] = "Date";
    ValueErrorType[ValueErrorType["Function"] = 21] = "Function";
    ValueErrorType[ValueErrorType["IntegerExclusiveMaximum"] = 22] = "IntegerExclusiveMaximum";
    ValueErrorType[ValueErrorType["IntegerExclusiveMinimum"] = 23] = "IntegerExclusiveMinimum";
    ValueErrorType[ValueErrorType["IntegerMaximum"] = 24] = "IntegerMaximum";
    ValueErrorType[ValueErrorType["IntegerMinimum"] = 25] = "IntegerMinimum";
    ValueErrorType[ValueErrorType["IntegerMultipleOf"] = 26] = "IntegerMultipleOf";
    ValueErrorType[ValueErrorType["Integer"] = 27] = "Integer";
    ValueErrorType[ValueErrorType["IntersectUnevaluatedProperties"] = 28] = "IntersectUnevaluatedProperties";
    ValueErrorType[ValueErrorType["Intersect"] = 29] = "Intersect";
    ValueErrorType[ValueErrorType["Iterator"] = 30] = "Iterator";
    ValueErrorType[ValueErrorType["Kind"] = 31] = "Kind";
    ValueErrorType[ValueErrorType["Literal"] = 32] = "Literal";
    ValueErrorType[ValueErrorType["Never"] = 33] = "Never";
    ValueErrorType[ValueErrorType["Not"] = 34] = "Not";
    ValueErrorType[ValueErrorType["Null"] = 35] = "Null";
    ValueErrorType[ValueErrorType["NumberExclusiveMaximum"] = 36] = "NumberExclusiveMaximum";
    ValueErrorType[ValueErrorType["NumberExclusiveMinimum"] = 37] = "NumberExclusiveMinimum";
    ValueErrorType[ValueErrorType["NumberMaximum"] = 38] = "NumberMaximum";
    ValueErrorType[ValueErrorType["NumberMinimum"] = 39] = "NumberMinimum";
    ValueErrorType[ValueErrorType["NumberMultipleOf"] = 40] = "NumberMultipleOf";
    ValueErrorType[ValueErrorType["Number"] = 41] = "Number";
    ValueErrorType[ValueErrorType["ObjectAdditionalProperties"] = 42] = "ObjectAdditionalProperties";
    ValueErrorType[ValueErrorType["ObjectMaxProperties"] = 43] = "ObjectMaxProperties";
    ValueErrorType[ValueErrorType["ObjectMinProperties"] = 44] = "ObjectMinProperties";
    ValueErrorType[ValueErrorType["ObjectRequiredProperty"] = 45] = "ObjectRequiredProperty";
    ValueErrorType[ValueErrorType["Object"] = 46] = "Object";
    ValueErrorType[ValueErrorType["Promise"] = 47] = "Promise";
    ValueErrorType[ValueErrorType["RegExp"] = 48] = "RegExp";
    ValueErrorType[ValueErrorType["StringFormatUnknown"] = 49] = "StringFormatUnknown";
    ValueErrorType[ValueErrorType["StringFormat"] = 50] = "StringFormat";
    ValueErrorType[ValueErrorType["StringMaxLength"] = 51] = "StringMaxLength";
    ValueErrorType[ValueErrorType["StringMinLength"] = 52] = "StringMinLength";
    ValueErrorType[ValueErrorType["StringPattern"] = 53] = "StringPattern";
    ValueErrorType[ValueErrorType["String"] = 54] = "String";
    ValueErrorType[ValueErrorType["Symbol"] = 55] = "Symbol";
    ValueErrorType[ValueErrorType["TupleLength"] = 56] = "TupleLength";
    ValueErrorType[ValueErrorType["Tuple"] = 57] = "Tuple";
    ValueErrorType[ValueErrorType["Uint8ArrayMaxByteLength"] = 58] = "Uint8ArrayMaxByteLength";
    ValueErrorType[ValueErrorType["Uint8ArrayMinByteLength"] = 59] = "Uint8ArrayMinByteLength";
    ValueErrorType[ValueErrorType["Uint8Array"] = 60] = "Uint8Array";
    ValueErrorType[ValueErrorType["Undefined"] = 61] = "Undefined";
    ValueErrorType[ValueErrorType["Union"] = 62] = "Union";
    ValueErrorType[ValueErrorType["Void"] = 63] = "Void";
})(ValueErrorType || (ValueErrorType = {}));
// ------------------------------------------------------------------
// ValueErrors
// ------------------------------------------------------------------
class ValueErrorsUnknownTypeError extends error.TypeBoxError {
    constructor(schema) {
        super('Unknown type');
        this.schema = schema;
    }
}
// ------------------------------------------------------------------
// EscapeKey
// ------------------------------------------------------------------
function EscapeKey(key) {
    return key.replace(/~/g, '~0').replace(/\//g, '~1'); // RFC6901 Path
}
// ------------------------------------------------------------------
// Guards
// ------------------------------------------------------------------
function errors_IsDefined(value) {
    return value !== undefined;
}
// ------------------------------------------------------------------
// ValueErrorIterator
// ------------------------------------------------------------------
class ValueErrorIterator {
    constructor(iterator) {
        this.iterator = iterator;
    }
    [Symbol.iterator]() {
        return this.iterator;
    }
    /** Returns the first value error or undefined if no errors */
    First() {
        const next = this.iterator.next();
        return next.done ? undefined : next.value;
    }
}
// --------------------------------------------------------------------------
// Create
// --------------------------------------------------------------------------
function Create(errorType, schema, path, value, errors = []) {
    return {
        type: errorType,
        schema,
        path,
        value,
        message: GetErrorFunction()({ errorType, path, schema, value, errors }),
        errors,
    };
}
// --------------------------------------------------------------------------
// Types
// --------------------------------------------------------------------------
function* errors_FromAny(schema, references, path, value) { }
function* errors_FromArray(schema, references, path, value) {
    if (!(0,guard.IsArray)(value)) {
        return yield Create(ValueErrorType.Array, schema, path, value);
    }
    if (errors_IsDefined(schema.minItems) && !(value.length >= schema.minItems)) {
        yield Create(ValueErrorType.ArrayMinItems, schema, path, value);
    }
    if (errors_IsDefined(schema.maxItems) && !(value.length <= schema.maxItems)) {
        yield Create(ValueErrorType.ArrayMaxItems, schema, path, value);
    }
    for (let i = 0; i < value.length; i++) {
        yield* errors_Visit(schema.items, references, `${path}/${i}`, value[i]);
    }
    // prettier-ignore
    if (schema.uniqueItems === true && !((function () { const set = new Set(); for (const element of value) {
        const hashed = Hash(element);
        if (set.has(hashed)) {
            return false;
        }
        else {
            set.add(hashed);
        }
    } return true; })())) {
        yield Create(ValueErrorType.ArrayUniqueItems, schema, path, value);
    }
    // contains
    if (!(errors_IsDefined(schema.contains) || errors_IsDefined(schema.minContains) || errors_IsDefined(schema.maxContains))) {
        return;
    }
    const containsSchema = errors_IsDefined(schema.contains) ? schema.contains : (0,never.Never)();
    const containsCount = value.reduce((acc, value, index) => (errors_Visit(containsSchema, references, `${path}${index}`, value).next().done === true ? acc + 1 : acc), 0);
    if (containsCount === 0) {
        yield Create(ValueErrorType.ArrayContains, schema, path, value);
    }
    if ((0,guard.IsNumber)(schema.minContains) && containsCount < schema.minContains) {
        yield Create(ValueErrorType.ArrayMinContains, schema, path, value);
    }
    if ((0,guard.IsNumber)(schema.maxContains) && containsCount > schema.maxContains) {
        yield Create(ValueErrorType.ArrayMaxContains, schema, path, value);
    }
}
function* errors_FromAsyncIterator(schema, references, path, value) {
    if (!(0,guard.IsAsyncIterator)(value))
        yield Create(ValueErrorType.AsyncIterator, schema, path, value);
}
function* errors_FromBigInt(schema, references, path, value) {
    if (!(0,guard.IsBigInt)(value))
        return yield Create(ValueErrorType.BigInt, schema, path, value);
    if (errors_IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
        yield Create(ValueErrorType.BigIntExclusiveMaximum, schema, path, value);
    }
    if (errors_IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
        yield Create(ValueErrorType.BigIntExclusiveMinimum, schema, path, value);
    }
    if (errors_IsDefined(schema.maximum) && !(value <= schema.maximum)) {
        yield Create(ValueErrorType.BigIntMaximum, schema, path, value);
    }
    if (errors_IsDefined(schema.minimum) && !(value >= schema.minimum)) {
        yield Create(ValueErrorType.BigIntMinimum, schema, path, value);
    }
    if (errors_IsDefined(schema.multipleOf) && !(value % schema.multipleOf === BigInt(0))) {
        yield Create(ValueErrorType.BigIntMultipleOf, schema, path, value);
    }
}
function* errors_FromBoolean(schema, references, path, value) {
    if (!(0,guard.IsBoolean)(value))
        yield Create(ValueErrorType.Boolean, schema, path, value);
}
function* errors_FromConstructor(schema, references, path, value) {
    yield* errors_Visit(schema.returns, references, path, value.prototype);
}
function* errors_FromDate(schema, references, path, value) {
    if (!(0,guard.IsDate)(value))
        return yield Create(ValueErrorType.Date, schema, path, value);
    if (errors_IsDefined(schema.exclusiveMaximumTimestamp) && !(value.getTime() < schema.exclusiveMaximumTimestamp)) {
        yield Create(ValueErrorType.DateExclusiveMaximumTimestamp, schema, path, value);
    }
    if (errors_IsDefined(schema.exclusiveMinimumTimestamp) && !(value.getTime() > schema.exclusiveMinimumTimestamp)) {
        yield Create(ValueErrorType.DateExclusiveMinimumTimestamp, schema, path, value);
    }
    if (errors_IsDefined(schema.maximumTimestamp) && !(value.getTime() <= schema.maximumTimestamp)) {
        yield Create(ValueErrorType.DateMaximumTimestamp, schema, path, value);
    }
    if (errors_IsDefined(schema.minimumTimestamp) && !(value.getTime() >= schema.minimumTimestamp)) {
        yield Create(ValueErrorType.DateMinimumTimestamp, schema, path, value);
    }
    if (errors_IsDefined(schema.multipleOfTimestamp) && !(value.getTime() % schema.multipleOfTimestamp === 0)) {
        yield Create(ValueErrorType.DateMultipleOfTimestamp, schema, path, value);
    }
}
function* errors_FromFunction(schema, references, path, value) {
    if (!(0,guard.IsFunction)(value))
        yield Create(ValueErrorType.Function, schema, path, value);
}
function* errors_FromImport(schema, references, path, value) {
    const definitions = globalThis.Object.values(schema.$defs);
    const target = schema.$defs[schema.$ref];
    yield* errors_Visit(target, [...references, ...definitions], path, value);
}
function* errors_FromInteger(schema, references, path, value) {
    if (!(0,guard.IsInteger)(value))
        return yield Create(ValueErrorType.Integer, schema, path, value);
    if (errors_IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
        yield Create(ValueErrorType.IntegerExclusiveMaximum, schema, path, value);
    }
    if (errors_IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
        yield Create(ValueErrorType.IntegerExclusiveMinimum, schema, path, value);
    }
    if (errors_IsDefined(schema.maximum) && !(value <= schema.maximum)) {
        yield Create(ValueErrorType.IntegerMaximum, schema, path, value);
    }
    if (errors_IsDefined(schema.minimum) && !(value >= schema.minimum)) {
        yield Create(ValueErrorType.IntegerMinimum, schema, path, value);
    }
    if (errors_IsDefined(schema.multipleOf) && !(value % schema.multipleOf === 0)) {
        yield Create(ValueErrorType.IntegerMultipleOf, schema, path, value);
    }
}
function* errors_FromIntersect(schema, references, path, value) {
    let hasError = false;
    for (const inner of schema.allOf) {
        for (const error of errors_Visit(inner, references, path, value)) {
            hasError = true;
            yield error;
        }
    }
    if (hasError) {
        return yield Create(ValueErrorType.Intersect, schema, path, value);
    }
    if (schema.unevaluatedProperties === false) {
        const keyCheck = new RegExp((0,keyof_property_keys.KeyOfPattern)(schema));
        for (const valueKey of Object.getOwnPropertyNames(value)) {
            if (!keyCheck.test(valueKey)) {
                yield Create(ValueErrorType.IntersectUnevaluatedProperties, schema, `${path}/${valueKey}`, value);
            }
        }
    }
    if (typeof schema.unevaluatedProperties === 'object') {
        const keyCheck = new RegExp((0,keyof_property_keys.KeyOfPattern)(schema));
        for (const valueKey of Object.getOwnPropertyNames(value)) {
            if (!keyCheck.test(valueKey)) {
                const next = errors_Visit(schema.unevaluatedProperties, references, `${path}/${valueKey}`, value[valueKey]).next();
                if (!next.done)
                    yield next.value; // yield interior
            }
        }
    }
}
function* errors_FromIterator(schema, references, path, value) {
    if (!(0,guard.IsIterator)(value))
        yield Create(ValueErrorType.Iterator, schema, path, value);
}
function* errors_FromLiteral(schema, references, path, value) {
    if (!(value === schema.const))
        yield Create(ValueErrorType.Literal, schema, path, value);
}
function* errors_FromNever(schema, references, path, value) {
    yield Create(ValueErrorType.Never, schema, path, value);
}
function* errors_FromNot(schema, references, path, value) {
    if (errors_Visit(schema.not, references, path, value).next().done === true)
        yield Create(ValueErrorType.Not, schema, path, value);
}
function* errors_FromNull(schema, references, path, value) {
    if (!(0,guard.IsNull)(value))
        yield Create(ValueErrorType.Null, schema, path, value);
}
function* errors_FromNumber(schema, references, path, value) {
    if (!policy.TypeSystemPolicy.IsNumberLike(value))
        return yield Create(ValueErrorType.Number, schema, path, value);
    if (errors_IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
        yield Create(ValueErrorType.NumberExclusiveMaximum, schema, path, value);
    }
    if (errors_IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
        yield Create(ValueErrorType.NumberExclusiveMinimum, schema, path, value);
    }
    if (errors_IsDefined(schema.maximum) && !(value <= schema.maximum)) {
        yield Create(ValueErrorType.NumberMaximum, schema, path, value);
    }
    if (errors_IsDefined(schema.minimum) && !(value >= schema.minimum)) {
        yield Create(ValueErrorType.NumberMinimum, schema, path, value);
    }
    if (errors_IsDefined(schema.multipleOf) && !(value % schema.multipleOf === 0)) {
        yield Create(ValueErrorType.NumberMultipleOf, schema, path, value);
    }
}
function* errors_FromObject(schema, references, path, value) {
    if (!policy.TypeSystemPolicy.IsObjectLike(value))
        return yield Create(ValueErrorType.Object, schema, path, value);
    if (errors_IsDefined(schema.minProperties) && !(Object.getOwnPropertyNames(value).length >= schema.minProperties)) {
        yield Create(ValueErrorType.ObjectMinProperties, schema, path, value);
    }
    if (errors_IsDefined(schema.maxProperties) && !(Object.getOwnPropertyNames(value).length <= schema.maxProperties)) {
        yield Create(ValueErrorType.ObjectMaxProperties, schema, path, value);
    }
    const requiredKeys = Array.isArray(schema.required) ? schema.required : [];
    const knownKeys = Object.getOwnPropertyNames(schema.properties);
    const unknownKeys = Object.getOwnPropertyNames(value);
    for (const requiredKey of requiredKeys) {
        if (unknownKeys.includes(requiredKey))
            continue;
        yield Create(ValueErrorType.ObjectRequiredProperty, schema.properties[requiredKey], `${path}/${EscapeKey(requiredKey)}`, undefined);
    }
    if (schema.additionalProperties === false) {
        for (const valueKey of unknownKeys) {
            if (!knownKeys.includes(valueKey)) {
                yield Create(ValueErrorType.ObjectAdditionalProperties, schema, `${path}/${EscapeKey(valueKey)}`, value[valueKey]);
            }
        }
    }
    if (typeof schema.additionalProperties === 'object') {
        for (const valueKey of unknownKeys) {
            if (knownKeys.includes(valueKey))
                continue;
            yield* errors_Visit(schema.additionalProperties, references, `${path}/${EscapeKey(valueKey)}`, value[valueKey]);
        }
    }
    for (const knownKey of knownKeys) {
        const property = schema.properties[knownKey];
        if (schema.required && schema.required.includes(knownKey)) {
            yield* errors_Visit(property, references, `${path}/${EscapeKey(knownKey)}`, value[knownKey]);
            if (ExtendsUndefinedCheck(schema) && !(knownKey in value)) {
                yield Create(ValueErrorType.ObjectRequiredProperty, property, `${path}/${EscapeKey(knownKey)}`, undefined);
            }
        }
        else {
            if (policy.TypeSystemPolicy.IsExactOptionalProperty(value, knownKey)) {
                yield* errors_Visit(property, references, `${path}/${EscapeKey(knownKey)}`, value[knownKey]);
            }
        }
    }
}
function* errors_FromPromise(schema, references, path, value) {
    if (!(0,guard.IsPromise)(value))
        yield Create(ValueErrorType.Promise, schema, path, value);
}
function* errors_FromRecord(schema, references, path, value) {
    if (!policy.TypeSystemPolicy.IsRecordLike(value))
        return yield Create(ValueErrorType.Object, schema, path, value);
    if (errors_IsDefined(schema.minProperties) && !(Object.getOwnPropertyNames(value).length >= schema.minProperties)) {
        yield Create(ValueErrorType.ObjectMinProperties, schema, path, value);
    }
    if (errors_IsDefined(schema.maxProperties) && !(Object.getOwnPropertyNames(value).length <= schema.maxProperties)) {
        yield Create(ValueErrorType.ObjectMaxProperties, schema, path, value);
    }
    const [patternKey, patternSchema] = Object.entries(schema.patternProperties)[0];
    const regex = new RegExp(patternKey);
    for (const [propertyKey, propertyValue] of Object.entries(value)) {
        if (regex.test(propertyKey))
            yield* errors_Visit(patternSchema, references, `${path}/${EscapeKey(propertyKey)}`, propertyValue);
    }
    if (typeof schema.additionalProperties === 'object') {
        for (const [propertyKey, propertyValue] of Object.entries(value)) {
            if (!regex.test(propertyKey))
                yield* errors_Visit(schema.additionalProperties, references, `${path}/${EscapeKey(propertyKey)}`, propertyValue);
        }
    }
    if (schema.additionalProperties === false) {
        for (const [propertyKey, propertyValue] of Object.entries(value)) {
            if (regex.test(propertyKey))
                continue;
            return yield Create(ValueErrorType.ObjectAdditionalProperties, schema, `${path}/${EscapeKey(propertyKey)}`, propertyValue);
        }
    }
}
function* errors_FromRef(schema, references, path, value) {
    yield* errors_Visit(Deref(schema, references), references, path, value);
}
function* errors_FromRegExp(schema, references, path, value) {
    if (!(0,guard.IsString)(value))
        return yield Create(ValueErrorType.String, schema, path, value);
    if (errors_IsDefined(schema.minLength) && !(value.length >= schema.minLength)) {
        yield Create(ValueErrorType.StringMinLength, schema, path, value);
    }
    if (errors_IsDefined(schema.maxLength) && !(value.length <= schema.maxLength)) {
        yield Create(ValueErrorType.StringMaxLength, schema, path, value);
    }
    const regex = new RegExp(schema.source, schema.flags);
    if (!regex.test(value)) {
        return yield Create(ValueErrorType.RegExp, schema, path, value);
    }
}
function* errors_FromString(schema, references, path, value) {
    if (!(0,guard.IsString)(value))
        return yield Create(ValueErrorType.String, schema, path, value);
    if (errors_IsDefined(schema.minLength) && !(value.length >= schema.minLength)) {
        yield Create(ValueErrorType.StringMinLength, schema, path, value);
    }
    if (errors_IsDefined(schema.maxLength) && !(value.length <= schema.maxLength)) {
        yield Create(ValueErrorType.StringMaxLength, schema, path, value);
    }
    if ((0,guard.IsString)(schema.pattern)) {
        const regex = new RegExp(schema.pattern);
        if (!regex.test(value)) {
            yield Create(ValueErrorType.StringPattern, schema, path, value);
        }
    }
    if ((0,guard.IsString)(schema.format)) {
        if (!Has(schema.format)) {
            yield Create(ValueErrorType.StringFormatUnknown, schema, path, value);
        }
        else {
            const format = Get(schema.format);
            if (!format(value)) {
                yield Create(ValueErrorType.StringFormat, schema, path, value);
            }
        }
    }
}
function* errors_FromSymbol(schema, references, path, value) {
    if (!(0,guard.IsSymbol)(value))
        yield Create(ValueErrorType.Symbol, schema, path, value);
}
function* errors_FromTemplateLiteral(schema, references, path, value) {
    if (!(0,guard.IsString)(value))
        return yield Create(ValueErrorType.String, schema, path, value);
    const regex = new RegExp(schema.pattern);
    if (!regex.test(value)) {
        yield Create(ValueErrorType.StringPattern, schema, path, value);
    }
}
function* errors_FromThis(schema, references, path, value) {
    yield* errors_Visit(Deref(schema, references), references, path, value);
}
function* errors_FromTuple(schema, references, path, value) {
    if (!(0,guard.IsArray)(value))
        return yield Create(ValueErrorType.Tuple, schema, path, value);
    if (schema.items === undefined && !(value.length === 0)) {
        return yield Create(ValueErrorType.TupleLength, schema, path, value);
    }
    if (!(value.length === schema.maxItems)) {
        return yield Create(ValueErrorType.TupleLength, schema, path, value);
    }
    if (!schema.items) {
        return;
    }
    for (let i = 0; i < schema.items.length; i++) {
        yield* errors_Visit(schema.items[i], references, `${path}/${i}`, value[i]);
    }
}
function* errors_FromUndefined(schema, references, path, value) {
    if (!(0,guard.IsUndefined)(value))
        yield Create(ValueErrorType.Undefined, schema, path, value);
}
function* errors_FromUnion(schema, references, path, value) {
    if (Check(schema, references, value))
        return;
    const errors = schema.anyOf.map((variant) => new ValueErrorIterator(errors_Visit(variant, references, path, value)));
    yield Create(ValueErrorType.Union, schema, path, value, errors);
}
function* errors_FromUint8Array(schema, references, path, value) {
    if (!(0,guard.IsUint8Array)(value))
        return yield Create(ValueErrorType.Uint8Array, schema, path, value);
    if (errors_IsDefined(schema.maxByteLength) && !(value.length <= schema.maxByteLength)) {
        yield Create(ValueErrorType.Uint8ArrayMaxByteLength, schema, path, value);
    }
    if (errors_IsDefined(schema.minByteLength) && !(value.length >= schema.minByteLength)) {
        yield Create(ValueErrorType.Uint8ArrayMinByteLength, schema, path, value);
    }
}
function* errors_FromUnknown(schema, references, path, value) { }
function* errors_FromVoid(schema, references, path, value) {
    if (!policy.TypeSystemPolicy.IsVoidLike(value))
        yield Create(ValueErrorType.Void, schema, path, value);
}
function* errors_FromKind(schema, references, path, value) {
    const check = type_Get(schema[symbols.Kind]);
    if (!check(schema, value))
        yield Create(ValueErrorType.Kind, schema, path, value);
}
function* errors_Visit(schema, references, path, value) {
    const references_ = errors_IsDefined(schema.$id) ? [...references, schema] : references;
    const schema_ = schema;
    switch (schema_[symbols.Kind]) {
        case 'Any':
            return yield* errors_FromAny(schema_, references_, path, value);
        case 'Array':
            return yield* errors_FromArray(schema_, references_, path, value);
        case 'AsyncIterator':
            return yield* errors_FromAsyncIterator(schema_, references_, path, value);
        case 'BigInt':
            return yield* errors_FromBigInt(schema_, references_, path, value);
        case 'Boolean':
            return yield* errors_FromBoolean(schema_, references_, path, value);
        case 'Constructor':
            return yield* errors_FromConstructor(schema_, references_, path, value);
        case 'Date':
            return yield* errors_FromDate(schema_, references_, path, value);
        case 'Function':
            return yield* errors_FromFunction(schema_, references_, path, value);
        case 'Import':
            return yield* errors_FromImport(schema_, references_, path, value);
        case 'Integer':
            return yield* errors_FromInteger(schema_, references_, path, value);
        case 'Intersect':
            return yield* errors_FromIntersect(schema_, references_, path, value);
        case 'Iterator':
            return yield* errors_FromIterator(schema_, references_, path, value);
        case 'Literal':
            return yield* errors_FromLiteral(schema_, references_, path, value);
        case 'Never':
            return yield* errors_FromNever(schema_, references_, path, value);
        case 'Not':
            return yield* errors_FromNot(schema_, references_, path, value);
        case 'Null':
            return yield* errors_FromNull(schema_, references_, path, value);
        case 'Number':
            return yield* errors_FromNumber(schema_, references_, path, value);
        case 'Object':
            return yield* errors_FromObject(schema_, references_, path, value);
        case 'Promise':
            return yield* errors_FromPromise(schema_, references_, path, value);
        case 'Record':
            return yield* errors_FromRecord(schema_, references_, path, value);
        case 'Ref':
            return yield* errors_FromRef(schema_, references_, path, value);
        case 'RegExp':
            return yield* errors_FromRegExp(schema_, references_, path, value);
        case 'String':
            return yield* errors_FromString(schema_, references_, path, value);
        case 'Symbol':
            return yield* errors_FromSymbol(schema_, references_, path, value);
        case 'TemplateLiteral':
            return yield* errors_FromTemplateLiteral(schema_, references_, path, value);
        case 'This':
            return yield* errors_FromThis(schema_, references_, path, value);
        case 'Tuple':
            return yield* errors_FromTuple(schema_, references_, path, value);
        case 'Undefined':
            return yield* errors_FromUndefined(schema_, references_, path, value);
        case 'Union':
            return yield* errors_FromUnion(schema_, references_, path, value);
        case 'Uint8Array':
            return yield* errors_FromUint8Array(schema_, references_, path, value);
        case 'Unknown':
            return yield* errors_FromUnknown(schema_, references_, path, value);
        case 'Void':
            return yield* errors_FromVoid(schema_, references_, path, value);
        default:
            if (!type_Has(schema_[symbols.Kind]))
                throw new ValueErrorsUnknownTypeError(schema);
            return yield* errors_FromKind(schema_, references_, path, value);
    }
}
/** Returns an iterator for each error in this value. */
function Errors(...args) {
    const iterator = args.length === 3 ? errors_Visit(args[0], args[1], '', args[2]) : errors_Visit(args[0], [], '', args[1]);
    return new ValueErrorIterator(iterator);
}

;// ./src/util.ts
function displayErrorMessage(msg) {
    let errContainer;
    let existing = document.getElementById("list-config-error-container");
    if (existing) {
        existing.innerHTML = "";
        errContainer = existing;
    }
    else {
        errContainer = document.createElement('div');
        document.body.append(errContainer);
    }
    let msgContainer = document.createElement('div');
    msgContainer.style.marginBottom = "2rem";
    let ok = document.createElement('button');
    ok.innerText = "OK";
    ok.onclick = () => {
        errContainer.style.display = "none";
    };
    msgContainer.innerHTML = msg;
    msgContainer.classList.add("error-message-content");
    errContainer.append(msgContainer, ok);
    errContainer.style.position = "absolute";
    errContainer.style.top = "50%";
    errContainer.style.left = "50%";
    errContainer.style.transform = "translate(-50%, -50%)";
    errContainer.style.zIndex = "5";
    errContainer.style.display = "flex";
    errContainer.style.backgroundColor = "white";
    errContainer.style.flexDirection = "column";
    errContainer.style.padding = "1rem";
    errContainer.style.alignItems = "center";
    errContainer.style.border = "2px solid red";
    errContainer.style.fontSize = "1.3rem";
}

;// ./src/jsonForms.ts



function safe(text) {
    const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
    return text.replace(/[&<>"']/g, c => map[c]);
}
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
function constructForm(options, parent, dynForm) {
    switch (options.type) {
        case "object": return new ObjectForm(options.options, dynForm, parent);
        case "simple": return new SimpleForm(options.options, dynForm, parent);
        case "array": return new ArrayForm(options.options, dynForm, parent);
        case "recursive": return new RecursiveForm(options.options, dynForm, parent);
        case "dropdown": return new DropdownForm(options.options, parent, dynForm);
        case "multi": return new MultiForm(options.options, dynForm, parent);
        case "const": return new ConstForm(options.options, parent);
        case "button": return new ButtonForm(options.options, parent);
        case 'supplier': return new ConfigSupplierForm(options.options, parent, dynForm);
    }
}
class SimpleForm {
    constructor(options, dynForm, parent) {
        this.jsonEditorRenderCallbackId = null;
        this.options = options;
        this.dynForm = dynForm;
        this.changed = false;
        this.id = uuidv4();
        this.parent = parent;
    }
    getId() {
        return this.id;
    }
    setValue(v) {
        this.dynForm.formBox.data[this.id] = v;
        this.dynForm.formBox.refresh();
    }
    getValue() {
        return this.dynForm.formBox.data[this.id];
    }
    getOptions() {
        return { type: 'simple', options: this.options };
    }
    getParent() {
        return this.parent;
    }
    serialize(jsonFormData) {
        var _a;
        let val = jsonFormData[this.id];
        let jsonVal;
        if (val === undefined && this.options.default === undefined) {
            throw new SerializeError("No value was supplied and field does not have a default value.");
        }
        else if (val === undefined) {
            jsonVal = this.options.default;
        }
        switch (this.options.type) {
            case "function":
            case "string":
                jsonVal = val;
                break;
            case "number":
                jsonVal = parseFloat(val);
                break;
            case "boolean":
                jsonVal = Boolean(val);
                break;
            case "datetime": {
                if (val instanceof Date) {
                    jsonVal = val;
                }
                else {
                    let d = new Date();
                    d.fromFormat(val, (_a = this.options.dateFmt) !== null && _a !== void 0 ? _a : listBuilder_DEFAULT_DATETIME_FMT);
                    jsonVal = d;
                }
                break;
            }
            case "json":
                jsonVal = JSON.parse(val);
                break;
        }
        return {
            changed: this.changed,
            raw: jsonVal
        };
    }
    buildJsonForm() {
        var _a;
        if (this.options.display && !this.options.display(this, this.parent)) {
            return {};
        }
        if (this.options.type == 'json') {
            let container = {
                type: 'html',
                control: {
                    html: `<div class="dynamic-form-json-editor" id="${this.id}" style="width: 80%"></div>`
                }
            };
            if (this.jsonEditorRenderCallbackId)
                this.dynForm.removeCallback(this.jsonEditorRenderCallbackId);
            this.jsonEditorRenderCallbackId = this.dynForm.addCallback('afterRender', () => {
                if ($(this.id).children.length > 0)
                    return;
                let editor = new TF.u.code.Editor(this.id, {
                    lang: 'json'
                });
                editor.setValue(this.dynForm.formBox.data[this.id]);
                let simpleForm = this;
                editor.onChange = function () {
                    simpleForm.dynForm.formBox.data[simpleForm.id] = this.value;
                };
            });
            return container;
        }
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
            case 'datetime':
                editType = 'picker';
                break;
        }
        let style = '';
        let control = {
            width: '85%',
            onChange: () => {
                if (!this.dynForm.formBox.isDirtyImmediate) {
                    this.dynForm.setDirty(true);
                    this.changed = true;
                    this.dynForm.refresh();
                }
            },
            onKeyDown: () => {
                if (!this.dynForm.formBox.isDirtyImmediate) {
                    this.dynForm.setDirty(true);
                    this.changed = true;
                }
            }
        };
        if (editType == 'picker') {
            control['picker'] = {
                type: 'date',
                format: (_a = this.options.dateFmt) !== null && _a !== void 0 ? _a : listBuilder_DEFAULT_DATETIME_FMT
            };
            control['behavior'] = {
                show: {
                    mode: ""
                }
            };
        }
        else if (editType == 'edit' && this.options.textarea) {
            control['multiLine'] = true;
        }
        let input = {
            type: editType,
            id: this.id,
            data: {
                from: this.id,
                ensure: true
            },
            control: control,
            container: {
                style: style,
                className: "dynamic-form-simple-item"
            },
            readonly: () => { var _a; return (_a = this.options.readonly) !== null && _a !== void 0 ? _a : false; },
        };
        if (this.options.postInputItems) {
            let others;
            if (this.options.postInputItems instanceof Array) {
                others = this.options.postInputItems;
            }
            else {
                others = this.options.postInputItems(this);
            }
            let g = {
                type: 'group',
                items: [
                    input,
                    ...others
                ]
            };
            return g;
        }
        return input;
    }
    getPopulateData(data) {
        var _a;
        this.changed = false;
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
        if (this.options.type == 'datetime' && data instanceof Date) {
            d[this.id] = data.toFormat((_a = this.options.dateFmt) !== null && _a !== void 0 ? _a : listBuilder_DEFAULT_DATETIME_FMT);
            return d;
        }
        if (this.options.type == 'datetime' && typeof data == 'string') {
            d[this.id] = data;
            return d;
        }
        if (this.options.type == 'json' && data instanceof Object) {
            d[this.id] = JSON.stringify(data, undefined, '\t');
            return d;
        }
        if (typeof data != this.options.type && this.options.default == undefined) {
            throw new PopulateError("Data type does not match declared type.");
        }
        d[this.id] = data;
        if (this.options.onPopulate) {
            this.options.onPopulate(this, d[this.id]);
        }
        return d;
    }
}
class ObjectForm {
    constructor(options, dynForm, parent) {
        this.cachedOptionals = {};
        this.data = {};
        this.dynForm = dynForm;
        this.options = options;
        this.entries = {};
        this.changed = false;
        this.parent = parent;
        this.id = uuidv4();
    }
    getRequiredDefn(k) {
        let d = this.options.requiredKeys[k];
        if (typeof d == 'function')
            return d(this);
        return d;
    }
    evalKeyDependentFn(f, key) {
        if (typeof f == 'function') {
            return f(key);
        }
        return f;
    }
    getId() {
        return this.id;
    }
    getChild(name) {
        let f = this.entries[name];
        if (f === undefined)
            return f;
        return f.form;
    }
    numChildren() {
        return Object.keys(this.entries).length;
    }
    getOptions() {
        return { type: 'object', options: this.options };
    }
    serialize(jsonFormData) {
        let result = {};
        for (const key in this.entries) {
            let entry = this.entries[key];
            let serialized = entry.form.serialize(jsonFormData);
            result[key] = serialized;
        }
        if (this.options.mapSerialized) {
            result = this.options.mapSerialized(result);
        }
        let keyChanged = Object.values(result).reduce((a, b) => a || b.changed, false);
        return {
            changed: keyChanged || this.changed,
            keys: result
        };
    }
    buildJsonForm() {
        var _a, _b, _c, _d;
        if (this.options.display && !this.options.display(this, this.parent))
            return {};
        let children = [];
        let i = 0;
        let allKeys = new Set(Object.keys(this.options.requiredKeys));
        (Object.keys((_a = this.options.optionalKeys) !== null && _a !== void 0 ? _a : {})).forEach(k => allKeys.add(k));
        Object.keys(this.entries).forEach(k => allKeys.add(k));
        let allKeyList = Array.from(allKeys);
        for (const key of allKeyList) {
            i += 1;
            let formDef;
            if (key in this.options.requiredKeys) {
                formDef = this.getRequiredDefn(key);
            }
            else if (this.options.optionalKeys && key in this.options.optionalKeys) {
                formDef = this.options.optionalKeys[key].definition;
            }
            else if (this.options.newKeyTemplate) {
                formDef = this.evalKeyDependentFn(this.options.newKeyTemplate.definition, key);
            }
            else {
                continue;
            }
            if (formDef.type == 'const')
                continue;
            if (formDef.options.display) {
                if (formDef.options.display(key in this.entries ? this.entries[key].form : null, this) == false)
                    continue;
            }
            let headerItems = { label: this.makeLabelText(formDef, key) };
            let formEnabled = key in this.entries;
            let formOptional = key in ((_b = this.options.optionalKeys) !== null && _b !== void 0 ? _b : {});
            let formDynamic = !formOptional && !(key in this.options.requiredKeys);
            let formIsBool = formDef.type == 'simple' && formDef.options.type == 'boolean';
            if (formDynamic) {
                headerItems.deleteBtns = this.makeDeleteButtons(key);
                headerItems.moveBtns = this.makeMoveButtons(key);
            }
            if (!formEnabled || formIsBool) {
                let check;
                let initValue = formEnabled;
                if (initValue) {
                    initValue = this.entries[key].form.getValue();
                }
                if (formIsBool) {
                    check = this.makeEnableCheck(key, () => {
                        // If the form doesn't exist yet, create it and set it to true
                        if (!(key in this.entries)) {
                            let form = constructForm(formDef, this, this.dynForm);
                            let d = form.getPopulateData(true);
                            Object.assign(this.dynForm.formBox.data, d);
                            this.data[key] = true;
                            this.entries[key] = {
                                form: form,
                                collapsed: false
                            };
                        }
                        // If the form does exist, then reverse its value.
                        else {
                            let form = this.entries[key].form;
                            let currVal = form.getValue();
                            form.setValue(!currVal);
                            this.data[key] = !currVal;
                        }
                        this.dynForm.refresh();
                    }, initValue);
                }
                else {
                    check = this.makeEnableCheck(key);
                }
                headerItems.enableCheck = check;
                children.push(this.makeHeader(headerItems));
                // Don't want to draw any of the form contents.
                continue;
            }
            // From this point, the form is enabled, so it exists in entries
            let entry = this.entries[key];
            if (formOptional) {
                headerItems.enableCheck = this.makeEnableCheck(key);
            }
            if (formDef.type == 'supplier') {
                formDef = entry.form.getGeneratedOptions();
                headerItems.label = this.makeLabelText(formDef, key);
            }
            // Multis and Objects should display with a collapse icon,
            // and shouldn't render their contents if they are collapsed.
            // This can be overriden by the 'force launch in tab' option or the 'no collapse' option
            let isMultiOrObj = formDef.type == 'multi' || formDef.type == 'object';
            let noLaunch = ((_c = formDef.options.forceLaunchInTab) !== null && _c !== void 0 ? _c : false) == false;
            let allowCollapse = ((_d = formDef.options.forceNoCollapse) !== null && _d !== void 0 ? _d : false) == false;
            let shouldCollapse = isMultiOrObj && noLaunch && allowCollapse;
            if (shouldCollapse) {
                headerItems.collapseBtn = this.makeCollapseBtn(key);
                if (entry.collapsed) {
                    children.push(this.makeHeader(headerItems));
                    continue;
                }
                else {
                    let header = this.makeHeader(headerItems);
                    let body = entry.form.buildJsonForm();
                    children.push(this.makeInputGroup(header, body));
                    continue;
                }
            }
            // Arrays should have a button to expand the entry.
            // The user can  manually override this as well
            if (formDef.type == 'array' || formDef.options.forceLaunchInTab) {
                let fnId = this.id + "_OPEN_" + i.toString();
                let label = this.getLabel(formDef, key);
                this.dynForm.obj._functions.dynamicForm[fnId] = () => {
                    this.dynForm.launchNewTab(label, entry.form);
                };
                headerItems.label = {
                    type: 'html',
                    control: {
                        html: `
                            <div class="dynamic-form-open-nested" style="
                                display: flex;
                                flex-direction: row;
                                align-items: center;
                                gap: 0.5rem;
                                cursor: pointer;
                            " onclick="${this.dynForm.obj.dialogId}_DlgObj._functions.dynamicForm['${fnId}']()">
                                <p style="font-variant: all-petite-caps: font-weight: bold;"> Edit ${label} </p>
                                ${A5.u.icon.html('svgIcon=#alpha-icon-chevronRight:icon,24')}
                            </div>
                        `
                    }
                };
                children.push(this.makeHeader(headerItems));
                continue;
            }
            // Otherwise, we can just display the form as usual.
            let body = entry.form.buildJsonForm();
            children.push(this.makeInputGroup(this.makeHeader(headerItems), body));
        }
        let newKey = this.options.newKeyTemplate;
        if (newKey) {
            let newKeyNameId = this.id + '_newKeyEntry';
            let addNewBtn = {
                type: 'button',
                control: {
                    html: A5.u.icon.html('svgIcon=#alpha-icon-add:icon,24'),
                    onClick: () => {
                        let name = this.dynForm.formBox.data[newKeyNameId];
                        if (name && name != '') {
                            if (name in this.entries) {
                                displayErrorMessage("The key " + name + " was already added.");
                                this.dynForm.formBox.data[newKeyNameId] = '';
                                this.dynForm.refresh();
                                return;
                            }
                            let definition = this.evalKeyDependentFn(newKey.definition, name);
                            let newForm = constructForm(definition, this, this.dynForm);
                            let defaultVal = this.evalKeyDependentFn(newKey.defaultValue, name);
                            Object.assign(this.dynForm.formBox.data, newForm.getPopulateData(defaultVal));
                            this.data[name] = defaultVal;
                            this.entries[name] = {
                                form: newForm,
                                collapsed: false
                            };
                            this.dynForm.formBox.data[newKeyNameId] = '';
                            this.dynForm.refresh();
                        }
                    }
                }
            };
            let rowGroup = {
                type: 'group',
                container: {
                    className: 'dynamic-form-add-new-key',
                    style: `;
                        display: flex;
                        flex-direction: row;
                        gap: 1rem;
                        padding: 0.5rem;
                    `
                },
                items: [
                    addNewBtn,
                ]
            };
            if (newKey.keyOptions) {
                rowGroup.items.push({
                    type: 'edit-picker',
                    id: newKeyNameId,
                    data: {
                        from: newKeyNameId,
                        ensure: true
                    },
                    control: {
                        data: {
                            src: newKey.keyOptions,
                            map: ['value', 'text']
                        },
                    }
                });
            }
            else {
                rowGroup.items.push({
                    type: 'edit',
                    id: newKeyNameId,
                    data: {
                        from: newKeyNameId,
                        ensure: true
                    },
                });
            }
            children.push(rowGroup);
        }
        return {
            type: 'group',
            container: {
                className: 'dynamic-form-object-group',
                style: `; 
                    display: flex; 
                    flex-direction: column;
                    gap: 1rem;
                    padding: 0.5rem;
                    border: 1px solid gray;
                    padding-left: 1rem;
                `
            },
            items: children,
        };
    }
    makeInputGroup(header, body) {
        return {
            type: 'group',
            items: [header, body],
            container: {
                style: `; display: flex; flex-direction: column;`,
                className: `dynamic-form-item-group`
            }
        };
    }
    makeHeader(items) {
        let i = [];
        if (items.enableCheck)
            i.push(items.enableCheck);
        if (items.collapseBtn)
            i.push(items.collapseBtn);
        if (items.label)
            i.push(items.label);
        if (items.deleteBtns)
            i.push(items.deleteBtns);
        if (items.moveBtns)
            i.push(items.moveBtns);
        return {
            type: 'group',
            items: i,
            container: {
                className: 'dynamic-form-item-group',
                style: `;
                    display: flex;
                    flex-direction: row;
                    gap: 0.5rem;
                    align-items: center;
                `
            }
        };
    }
    makeEnableCheck(key, onChange, initValue) {
        let id = this.id + '_ENABLE_' + key;
        let val = initValue !== null && initValue !== void 0 ? initValue : (key in this.entries);
        this.dynForm.formBox.data[id] = val;
        return {
            id: id,
            type: 'checkbox',
            data: {
                from: id,
                blank: val,
            },
            control: {
                onChange: onChange !== null && onChange !== void 0 ? onChange : (() => {
                    var _a;
                    if (key in this.entries) {
                        delete this.entries[key];
                        delete this.data[key];
                    }
                    else {
                        if (key in this.cachedOptionals) {
                            this.entries[key] = {
                                form: this.cachedOptionals[key],
                                collapsed: false
                            };
                        }
                        else {
                            let f = ((_a = this.options.optionalKeys) !== null && _a !== void 0 ? _a : {})[key];
                            let form = constructForm(f.definition, this, this.dynForm);
                            let d = form.getPopulateData(f.defaultValue);
                            Object.assign(this.dynForm.formBox.data, d);
                            this.cachedOptionals[key] = form;
                            this.entries[key] = {
                                form: form,
                                collapsed: false
                            };
                        }
                        this.data[key] = changeDetectionToRaw(this.cachedOptionals[key].serialize(this.dynForm.formBox.data));
                    }
                    this.dynForm.refresh();
                })
            }
        };
    }
    makeDeleteButtons(key) {
        return {
            type: 'button',
            control: {
                html: A5.u.icon.html('svgIcon=#alpha-icon-trash:icon,24'),
                onClick: () => {
                    delete this.entries[key];
                    this.dynForm.refresh();
                }
            }
        };
    }
    makeMoveButtons(key) {
        let swap = (arr, i1, i2) => {
            let tmp = arr[i1];
            arr[i1] = arr[i2];
            arr[i2] = tmp;
        };
        let reorder = newKeys => {
            let newEntries = {};
            newKeys.forEach(k => newEntries[k] = this.entries[k]);
            this.entries = newEntries;
        };
        return {
            type: 'group',
            items: [
                {
                    type: 'button',
                    disabled: () => Object.keys(this.entries)[0] == key,
                    control: {
                        html: A5.u.icon.html('svgIcon=#alpha-icon-chevronUp:icon,24'),
                        onClick: () => {
                            var _a;
                            let entries = Object.keys(this.entries);
                            let idx = entries.findIndex(s => s == key);
                            if (idx >= 1) {
                                let optional = entries[idx - 1] in ((_a = this.options.optionalKeys) !== null && _a !== void 0 ? _a : {});
                                let required = entries[idx - 1] in this.options.requiredKeys;
                                if (optional || required)
                                    return;
                                swap(entries, idx, idx - 1);
                                reorder(entries);
                                this.dynForm.refresh();
                            }
                        }
                    }
                },
                {
                    type: 'button',
                    disabled: () => {
                        let entries = Object.keys(this.entries);
                        return entries[entries.length - 1] == key;
                    },
                    control: {
                        html: A5.u.icon.html('svgIcon=#alpha-icon-chevronDown:icon,24'),
                        onClick: () => {
                            var _a;
                            let entries = Object.keys(this.entries);
                            let idx = entries.findIndex(s => s == key);
                            if (idx < entries.length - 1) {
                                let optional = entries[idx + 1] in ((_a = this.options.optionalKeys) !== null && _a !== void 0 ? _a : {});
                                let required = entries[idx + 1] in this.options.requiredKeys;
                                if (optional || required)
                                    return;
                                swap(entries, idx, idx + 1);
                                reorder(entries);
                                this.dynForm.refresh();
                            }
                        }
                    }
                }
            ]
        };
    }
    makeCollapseBtn(key) {
        let f;
        let icon;
        if (key in this.entries) {
            f = this.entries[key];
            icon = f.collapsed ? 'chevronRight' : 'chevronDown';
        }
        else {
            f = null;
            icon = 'chevronRight';
        }
        return {
            type: 'button',
            control: {
                html: A5.u.icon.html(`svgIcon=#alpha-icon-${icon}:icon,24`),
                onClick: () => {
                    if (key in this.entries) {
                        let entry = this.entries[key];
                        entry.collapsed = !entry.collapsed;
                        this.dynForm.refresh();
                    }
                },
            },
            disabled: () => f == null,
        };
    }
    getLabel(def, key) {
        if (typeof def.options.label === 'string') {
            return def.options.label;
        }
        else if (typeof def.options.label === 'function') {
            let form = null;
            if (key in this.entries) {
                form = this.entries[key].form;
                return def.options.label(form, this.data[key], key);
            }
            return def.options.label(null, undefined, key);
        }
        return '';
    }
    makeLabelText(def, key) {
        return {
            type: 'html',
            control: {
                html: `<p class="dynamic-form-simple-label">${this.getLabel(def, key)}</p>` + this.makeHelpText(def)
            },
            container: {
                style: `;
                    font-variant: all-petite-caps;
                    font-weight: bold;
                    color: #434343;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap: 0.5rem;
                `
            },
            layout: '{content}'
        };
    }
    makeHelpText(formDef) {
        if (formDef.options.help) {
            return `<div title="${safe(formDef.options.help)}" style="display: flex; justify-content: center;">
                ${A5.u.icon.html('svgIcon=#alpha-icon-questionCircle:icon,16')}
            </div>`;
        }
        return "";
    }
    getPopulateData(data) {
        this.data = data;
        this.changed = false;
        if (typeof data != 'object' || data instanceof Array)
            throw new PopulateError("Cannot populate object with non-object data.");
        this.entries = {};
        let populateData = {};
        let viewedKeys = new Set();
        for (const key in this.options.requiredKeys) {
            viewedKeys.add(key);
            let newEntry = constructForm(this.getRequiredDefn(key), this, this.dynForm);
            this.entries[key] = {
                form: newEntry,
                collapsed: true
            };
            Object.assign(populateData, newEntry.getPopulateData(data[key]));
        }
        for (const key in this.options.optionalKeys) {
            viewedKeys.add(key);
            if (key in data) {
                let d = data[key];
                let newEntry = constructForm(this.options.optionalKeys[key].definition, this, this.dynForm);
                this.entries[key] = {
                    form: newEntry,
                    collapsed: true
                };
                Object.assign(populateData, newEntry.getPopulateData(d));
            }
        }
        for (const key in data) {
            if (viewedKeys.has(key))
                continue;
            if (this.options.newKeyTemplate === undefined) {
                if (this.options.skipUnknownKeys === true)
                    continue;
                throw new PopulateError("New key template is undefined.");
            }
            let def = this.evalKeyDependentFn(this.options.newKeyTemplate.definition, key);
            let newEntry = constructForm(def, this, this.dynForm);
            this.entries[key] = {
                form: newEntry,
                collapsed: true
            };
            Object.assign(populateData, newEntry.getPopulateData(data[key]));
        }
        if (this.options.onPopulate) {
            this.options.onPopulate(this, this.data);
        }
        return populateData;
    }
}
class RecursiveForm {
    constructor(options, dynForm, parent) {
        this.options = options;
        this.dynForm = dynForm;
        this.parent = parent;
        this.id = uuidv4();
    }
    getId() {
        return this.id;
    }
    getOptions() {
        return { type: 'recursive', options: this.options };
    }
    serialize(formData) {
        if (this.recursiveElement) {
            return this.recursiveElement.serialize(formData);
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
    getPopulateData(data) {
        let recElemOps = this.searchForRecOptions(this.parent);
        if (recElemOps) {
            this.recursiveElement = constructForm(recElemOps, this, this.dynForm);
            if (this.options.onPopulate) {
                this.options.onPopulate(this, data);
            }
            return this.recursiveElement.getPopulateData(data);
        }
        throw new PopulateError("Unable to find named item " + this.options.recurseOn);
    }
    searchForRecOptions(f) {
        if (f === null)
            return null;
        if (f.getOptions().options.name === this.options.recurseOn)
            return f.getOptions();
        return this.searchForRecOptions(f.parent);
    }
}
class ArrayForm {
    constructor(options, dynForm, parent) {
        this.data = [];
        this.options = options;
        this.entries = [];
        this.dynForm = dynForm;
        this.parent = parent;
        this.changed = false;
        this.id = uuidv4();
    }
    calcTempate() {
        if (typeof this.options.itemTemplate == 'function')
            return this.options.itemTemplate(this);
        return this.options.itemTemplate;
    }
    getOptions() {
        return { type: 'array', options: this.options };
    }
    getId() {
        return this.id;
    }
    numChildren() {
        return this.entries.length;
    }
    serialize(formData) {
        let results = [];
        this.entries.forEach(f => results.push(f.form.serialize(formData)));
        if (results.length == 0 && this.options.allowEmpty === false) {
            throw new SerializeError("Array is not allowed to be empty.");
        }
        let childChanged = results.reduce((a, b) => a || b.changed, false);
        return {
            changed: childChanged || this.changed,
            elements: results
        };
    }
    buildJsonForm() {
        if (this.options.display && !this.options.display(this, this.parent))
            return {};
        let arrayEntries = this.entries.map((f, i) => {
            let ops = f.form.getOptions();
            if (ops.options.display && !ops.options.display(f.form, this)) {
                return {};
            }
            let collapseIcon = f.collapsed ? 'chevronRight' : 'chevronDown';
            let label = f.form.getOptions().options.label;
            let labelStr;
            if (typeof label == 'function') {
                labelStr = label(f.form, this.data[i], i.toString());
            }
            else {
                labelStr = label;
            }
            let header = {
                type: 'group',
                container: {
                    style: `;
                        padding: 0.5rem;
                        display: flex;
                        flex-direction: row;
                        gap: 0.5rem;
                        border: 1px solid black;
                        background-color: lightgray;
                        align-items: center;
                    `,
                },
                items: [
                    {
                        type: 'button',
                        control: {
                            html: A5.u.icon.html(`svgIcon=#alpha-icon-${collapseIcon}:icon,24`),
                            onClick: () => {
                                f.collapsed = !f.collapsed;
                                this.dynForm.refresh();
                            },
                        },
                    },
                    {
                        type: 'html',
                        control: {
                            html: `
                                <p 
                                    class="dynamic-form-array-item-label"
                                    style="margin: 0px;"
                                >
                                    ${labelStr}
                                </p>
                            `
                        },
                        container: {
                            style: '; height: fit-content;'
                        }
                    },
                    {
                        type: 'button',
                        control: {
                            html: A5.u.icon.html('svgIcon=#alpha-icon-trash:icon,24'),
                            onClick: () => {
                                this.entries = [...this.entries.slice(0, i), ...this.entries.slice(i + 1, this.entries.length)];
                                this.data = [...this.data.slice(0, i), ...this.data.slice(i + 1, this.data.length)];
                                this.dynForm.refresh();
                            },
                        },
                        container: {
                            className: 'dynamic-form-array-delete'
                        }
                    },
                    {
                        type: 'button',
                        control: {
                            html: A5.u.icon.html('svgIcon=#alpha-icon-chevronUp:icon,24'),
                            onClick: () => {
                                if (i > 0 && this.entries.length > 1) {
                                    let tmp = this.entries[i - 1];
                                    this.entries[i - 1] = this.entries[i];
                                    this.entries[i] = tmp;
                                    tmp = this.data[i - 1];
                                    this.data[i - 1] = this.data[i];
                                    this.data[i] = tmp;
                                    this.dynForm.refresh();
                                }
                            },
                        },
                    },
                    {
                        type: 'button',
                        control: {
                            html: A5.u.icon.html('svgIcon=#alpha-icon-chevronDown:icon,24'),
                            onClick: () => {
                                if (i < this.entries.length - 1 && this.entries.length > 1) {
                                    let tmp = this.entries[i + 1];
                                    this.entries[i + 1] = this.entries[i];
                                    this.entries[i] = tmp;
                                    tmp = this.data[i + 1];
                                    this.data[i + 1] = this.data[i];
                                    this.data[i] = tmp;
                                    this.dynForm.refresh();
                                }
                            },
                        },
                    }
                ]
            };
            let group = {
                type: 'group',
                items: [header],
                container: {
                    className: 'dynamic-form-array-item-group'
                }
            };
            if (!f.collapsed) {
                group.items.push({
                    type: 'group',
                    items: [f.form.buildJsonForm()],
                    container: {
                        style: `;
                            border: 1px solid black;
                            padding: 0.5rem; 
                        `
                    }
                });
            }
            return group;
        });
        let addNewItem = {
            type: 'group',
            items: [{
                    type: 'button',
                    control: {
                        html: A5.u.icon.html('svgIcon=#alpha-icon-add:icon,24'),
                        onClick: () => {
                            let newForm = constructForm(this.calcTempate(), this, this.dynForm);
                            Object.assign(this.dynForm.formBox.data, newForm.getPopulateData(this.options.defaultValue));
                            this.entries.push({ collapsed: false, form: newForm });
                            this.data.push(this.options.defaultValue);
                            this.dynForm.refresh();
                        }
                    }
                }],
            container: {
                className: 'dynamic-form-array-add-item-group'
            }
        };
        arrayEntries.push(addNewItem);
        return {
            type: 'group',
            container: {
                style: `
                    display: flex; 
                    flex-direction: column;
                    padding: 0.5rem;
                    gap: 0.5rem;
                `
            },
            items: arrayEntries
        };
    }
    getPopulateData(data) {
        this.data = data;
        this.changed = false;
        if (!(data instanceof Array))
            throw new PopulateError("Data is not an array.");
        this.entries = [];
        let d = {};
        for (const elem of data) {
            let newForm = constructForm(this.calcTempate(), this, this.dynForm);
            this.entries.push({ form: newForm, collapsed: true });
            Object.assign(d, newForm.getPopulateData(elem));
        }
        if (this.options.onPopulate) {
            this.options.onPopulate(this, data);
        }
        return d;
    }
}
class DropdownForm {
    constructor(options, parent, dynForm) {
        this.options = options;
        this.selected = '';
        this.id = uuidv4();
        this.changed = false;
        this.parent = parent;
        this.dynForm = dynForm;
    }
    getId() {
        return this.id;
    }
    getOptions() {
        return { type: 'dropdown', options: this.options };
    }
    serialize(formData) {
        let val = formData[this.id];
        if (val === undefined && this.options.default !== undefined) {
            return {
                changed: this.changed,
                raw: this.options.default
            };
        }
        else if (val === undefined) {
            throw new SerializeError("No value was supplied and field does not specify a default value.");
        }
        return {
            changed: this.changed,
            raw: val
        };
    }
    buildJsonForm() {
        var _a;
        if (this.options.display && !this.options.display(this, this.parent))
            return {};
        let dropdown = {
            type: this.options.allowCustomValue ? "edit-picker" : 'picker',
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
                picker: {
                    data: {
                        empty: {
                            message: (_a = this.options.emptyMsg) !== null && _a !== void 0 ? _a : ""
                        }
                    }
                },
                onChange: (change) => {
                    if (change.item.data != undefined) {
                        this.selected = change.item.data;
                        if (this.options.onSelect) {
                            this.options.onSelect(change.item.data, this);
                        }
                    }
                    if (change.item.data == undefined) {
                        this.dynForm.formBox.data[this.id] = this.selected;
                        this.dynForm.formBox.refresh();
                    }
                    else {
                        this.dynForm.setDirty(true);
                        this.changed = true;
                        this.dynForm.refresh();
                    }
                }
            },
            container: {
                style: "; flex: 1 1;",
            }
        };
        return dropdown;
    }
    getPopulateData(data) {
        this.changed = false;
        if (data === undefined && this.options.default === undefined)
            throw new PopulateError("Data is not defined and no default is specified.");
        if (typeof data != 'string' && this.options.default === undefined) {
            throw new PopulateError("Cannot populate dropdown with non-string.");
        }
        let d = {};
        let opt = this.options.dropdownItems.find(x => x.value == data);
        if (opt) {
            d[this.id] = data;
        }
        else if (this.options.default) {
            d[this.id] = this.options.default;
        }
        else if (this.options.dropdownItems.length > 0) {
            d[this.id] = this.options.dropdownItems[0].value;
        }
        else if (this.options.allowCustomValue) {
            d[this.id] = data;
        }
        else {
            throw new PopulateError("No dropdown items exist and no default was supplied.");
        }
        this.selected = d[this.id];
        if (this.options.onPopulate) {
            this.options.onPopulate(this, d[this.id]);
        }
        return d;
    }
}
class MultiForm {
    constructor(options, dynForm, parent) {
        let keys = Object.keys(options.definitions);
        if (keys.length == 0)
            throw new Error("MultiForm must have at least one option.");
        this.options = options;
        this.elements = {};
        this.currDropdownItem = '';
        this.dynForm = dynForm;
        this.parent = parent;
        this.changed = false;
        this.id = uuidv4();
    }
    clearCache() {
        this.elements = {};
    }
    getId() {
        return this.id;
    }
    getOptions() {
        return { type: 'multi', options: this.options };
    }
    serialize(formData) {
        let e = this.elements[this.currDropdownItem];
        let d;
        if (e !== undefined) {
            d = e.serialize(formData);
        }
        else {
            d = this.elements[Object.keys(this.elements)[0]].serialize(formData);
        }
        if (this.changed)
            d.changed = true;
        return d;
    }
    getDefaultValue() {
        let val = this.options.definitions[this.currDropdownItem].defaultValue;
        if (typeof val == 'function') {
            return this.options.definitions[this.currDropdownItem].defaultValue(this);
        }
        return val;
    }
    buildJsonForm() {
        if (this.options.display && !this.options.display(this, this.parent))
            return {};
        if (this.elements[this.currDropdownItem] == undefined) {
            let defn;
            let currDef = this.options.definitions[this.currDropdownItem].definition;
            if (typeof currDef == 'function') {
                defn = currDef(this);
            }
            else {
                defn = currDef;
            }
            let f = constructForm(defn, this, this.dynForm);
            let newData = f.getPopulateData(this.getDefaultValue());
            Object.assign(this.dynForm.formBox.data, newData);
            this.elements[this.currDropdownItem] = f;
        }
        this.dynForm.formBox.data[this.id] = this.currDropdownItem;
        let element = this.elements[this.currDropdownItem];
        let dropdown = {
            type: 'picker',
            id: this.id,
            data: {
                from: this.id,
                ensure: true
            },
            control: {
                placeholder: "",
                data: {
                    src: Object.keys(this.options.definitions).map(x => {
                        return {
                            value: x,
                            text: x
                        };
                    }),
                    map: ['value', 'text'],
                },
                onChange: (change) => {
                    if (change.item.data !== null && change.item.data !== undefined) {
                        this.currDropdownItem = change.item.data;
                        this.dynForm.refresh();
                    }
                    else {
                        this.dynForm.formBox.data[this.id] = this.currDropdownItem;
                        this.dynForm.formBox.refresh();
                    }
                }
            }
        };
        let formOps = element.getOptions();
        let help;
        if (formOps.options.help) {
            help = {
                type: 'html',
                control: {
                    html: `
                        <div title="${safe(formOps.options.help)}" style="display: flex; justify-content: center;">
                            ${A5.u.icon.html("svgIcon=#alpha-icon-questionCircle:16")}
                        </div>
                    `
                },
            };
        }
        else {
            help = {};
        }
        let header = {
            type: 'group',
            items: [dropdown, help],
            container: {
                style: `;
                    background-color: lightgray; 
                    padding: 0.5rem; 
                    border: 1px solid black;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap: 0.5rem;
                `
            }
        };
        let body = {
            type: 'group',
            items: [element.buildJsonForm()],
            container: {
                style: '; padding: .5rem; border: 1px solid black; '
            }
        };
        return {
            type: 'group',
            items: [header, body],
            container: {
                className: 'dynamic-form-multiform-group'
            }
        };
    }
    getPopulateData(data) {
        this.changed = false;
        let errs = {};
        let correctKey = undefined;
        this.elements = {};
        for (const key in this.options.definitions) {
            let currDefn = this.options.definitions[key].definition;
            let defn;
            if (typeof currDefn == 'function') {
                defn = currDefn(this);
            }
            else {
                defn = currDefn;
            }
            let elem = constructForm(defn, this, this.dynForm);
            try {
                elem.getPopulateData(data);
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
            this.currDropdownItem = correctKey;
            let currDefn = this.options.definitions[correctKey].definition;
            let defn;
            if (typeof currDefn == 'function') {
                defn = currDefn(this);
            }
            else {
                defn = currDefn;
            }
            let elem = constructForm(defn, this, this.dynForm);
            this.elements[correctKey] = elem;
            let d = {};
            Object.assign(d, elem.getPopulateData(data));
            return d;
        }
        if (this.options.onPopulate) {
            this.options.onPopulate(this, data);
        }
        throw new PopulateError(errs);
    }
}
class ConstForm {
    constructor(options, parent) {
        this.options = options;
        this.parent = parent;
        this.id = uuidv4();
    }
    getId() {
        return this.id;
    }
    serialize(formData) {
        return { changed: false, raw: this.options.value };
    }
    buildJsonForm() {
        return {};
    }
    getPopulateData(data) {
        if (data !== this.options.value) {
            throw new PopulateError(`Const value ${data} does not match ${this.options.value}`);
        }
        return {};
    }
    getOptions() {
        return { type: 'const', options: this.options };
    }
}
class ButtonForm {
    constructor(options, parent) {
        this.options = options;
        this.parent = parent;
        this.id = uuidv4();
    }
    getId() {
        return this.id;
    }
    buildJsonForm() {
        if (this.options.display && !this.options.display(this, this.parent))
            return {};
        return {
            type: 'button',
            control: {
                html: `<span class="" style="">${this.options.text}</span>`,
                onClick: this.options.action,
            },
            container: {
                style: "width: 100%;",
                className: ""
            },
            layout: "{content}"
        };
    }
    serialize(jsonFormData) {
        return { changed: false, raw: this.options.onSerialize() };
    }
    getPopulateData(data) {
        return {};
    }
    getOptions() {
        return {
            type: 'button',
            options: this.options
        };
    }
}
class ConfigSupplierForm {
    constructor(options, parent, dynForm) {
        this.options = options;
        this.id = uuidv4();
        this.parent = parent;
        this.generatedForm = null;
        this.dynForm = dynForm;
    }
    buildJsonForm() {
        if (this.options.display && !this.options.display(this, this.parent))
            return {};
        if (this.generatedForm)
            return this.generatedForm.buildJsonForm();
        return {};
    }
    getId() {
        return this.id;
    }
    rebuild(value) {
        let newDefn = this.options.supply(this.parent, null);
        this.options.default = newDefn;
        this.generatedForm = constructForm(newDefn, this, this.dynForm);
        let d = this.generatedForm.getPopulateData(value);
        Object.assign(this.dynForm.formBox.data, d);
        this.dynForm.formBox.refresh();
    }
    getOptions() {
        return { type: 'supplier', options: this.options };
    }
    getGeneratedOptions() {
        var _a;
        let genForm = (_a = this.generatedForm) !== null && _a !== void 0 ? _a : null;
        if (!genForm)
            throw new Error("Form was not generated!");
        let ops = genForm.getOptions();
        if (ops.type == 'supplier') {
            return this.generatedForm.getGeneratedOptions();
        }
        return ops;
    }
    getPopulateData(inputData) {
        let config = this.options.supply(this.parent, inputData);
        this.options.default = config;
        let form = constructForm(config, this, this.dynForm);
        this.generatedForm = form;
        return form.getPopulateData(inputData);
    }
    serialize(jsonFormData) {
        if (this.generatedForm) {
            return this.generatedForm.serialize(jsonFormData);
        }
        return { changed: false, raw: null };
    }
}
class DynamicForm {
    constructor(obj, containerId, formDefn, other) {
        this.firstTabLabel = '';
        this.otherItems = other;
        this.obj = obj;
        this.containerId = containerId;
        this.callbacks = {
            beforeRender: {},
            afterRender: {}
        };
        let oldContainer = $(containerId);
        DynamicForm.removeOldEventHandlers(oldContainer);
        this.form = constructForm(formDefn, null, this);
        this.formBox = new A5.FormBox(containerId, [], null, {
            theme: 'Alpha',
            item: {
                label: {
                    style: ''
                },
                description: {
                    style: ''
                },
            },
            onChange: () => { }
        });
        // This, apparently, needs to be defined.
        // Otherwise Alpha will throw an error if an HTML button is clicked.
        A5.formBox.guides.controls['html'].handle = null;
        if (!this.obj._functions) {
            this.obj._functions = {};
        }
        if (!this.obj._functions.dynamicForm) {
            this.obj._functions.dynamicForm = {};
        }
        if (typeof formDefn.options.label == 'string') {
            this.firstTabLabel = formDefn.options.label;
        }
        this.tabs = [{
                title: this.firstTabLabel,
                form: this.form
            }];
        let boxHtmlElem = $(containerId);
        boxHtmlElem.childNodes.forEach(n => n.style.width = '100%');
    }
    /// Given a JSON Form Definition, return a FormBox
    static makeFromRaw(defn, data, containerId) {
        A5.formBox.guides.controls['html'].handle = null;
        let oldContainer = $(containerId);
        this.removeOldEventHandlers(oldContainer);
        let fb = new A5.FormBox(containerId, [], null, {
            theme: 'Alpha',
            item: {
                label: {
                    style: ''
                },
                description: {
                    style: ''
                },
            },
            onChange: () => { }
        });
        fb.load({ form: { items: [defn] }, guides: DynamicForm.guides }, data);
        return fb;
    }
    static removeOldEventHandlers(elem) {
        // Alpha hooks its own event handlers into objects. 
        // They are not all removed when the old form is destroyed. 
        // If the old handlers are not removed, then (e.g.) clicking a button will 
        // call the current onClick along with every single previous existing version of 
        // that onclick function (which is not, I imagine, what you want to do.)
        // Alpha also doesn't seem to have a way to remove all the event handlers. 
        // We have to do them individually, and we need a handle to the function being called..
        let allEvents = $e._e;
        let toRemove = [];
        allEvents.forEach(e => {
            if (e[0] == elem) {
                toRemove.push({ event: e[1], fn: e[2] });
            }
        });
        toRemove.forEach(r => $e.remove(elem, r.event, r.fn));
        for (let i = 0; i < elem.childElementCount; i++) {
            this.removeOldEventHandlers(elem.children[i]);
        }
    }
    launchNewTab(name, form) {
        this.tabs.push({
            title: name,
            form: form
        });
        this.refresh();
        return this.tabs.length - 1;
    }
    setActiveTab(tab) {
        if (tab <= 0)
            tab = 0;
        while (tab < this.tabs.length - 1) {
            this.tabs.pop();
        }
        this.refresh();
    }
    populate(d) {
        let labelF = this.form.getOptions().options.label;
        if (typeof labelF == 'function') {
            this.firstTabLabel = labelF(this.form, d, '');
        }
        this.formBox.data = this.form.getPopulateData(d);
        this.refresh();
    }
    makeTabs() {
        let allTabs = [];
        for (let i = 0; i < this.tabs.length; i++) {
            let activeTab = i == this.tabs.length - 1;
            let style = '; font-variant: all-petite-caps: font-weight: bold; cursor: pointer;';
            if (activeTab) {
                style += 'color: black; text-decoration: underline;';
            }
            else {
                style += 'color: #4d4d4d;';
            }
            let fnId = this.containerId + '_Tab' + i + "Click";
            this.obj._functions.dynamicForm[fnId] = () => {
                this.setActiveTab(i);
            };
            let tab = {
                type: 'html',
                control: {
                    html: `
                        <div class="dynamic-form-top-tab" style="display: flex; gap: 0.5rem; align-items: center;">
                            <p style="${style}" onclick="${this.obj.dialogId}_DlgObj._functions.dynamicForm['${fnId}']()">${this.tabs[i].title}</p>
                    `
                }
            };
            if (i < this.tabs.length - 1) {
                tab.control.html += A5.u.icon.html('svgIcon=#alpha-icon-chevronRight:icon,24');
            }
            tab.control.html += "</div>";
            allTabs.push(tab);
        }
        let containerStyle = `;
                display: flex;
                gap: 0.5rem;
                flex-direction: row;
                justify-content: center;
                background-color: lightgray;
                padding: .3rem;
            `;
        return {
            type: 'group',
            items: allTabs,
            container: {
                style: containerStyle
            }
        };
    }
    setDirty(dirty) {
        this.formBox.isDirtyImmediate = dirty;
        this.obj.refreshClientSideComputations(true);
        Object.values(this.callbacks.beforeRender).forEach(f => f());
        this.formBox.refresh();
        Object.values(this.callbacks.afterRender).forEach(f => f());
    }
    refresh() {
        var _a;
        // Only want to display the last (active) tab
        let defn = this.tabs[this.tabs.length - 1].form.buildJsonForm();
        let tabGroup = {
            type: 'group',
            items: [
                this.makeTabs(),
                defn
            ],
            container: {
                style: `;
                    display: flex;
                    flex-direction: column;
                    outline: 1px solid black;
                `
            }
        };
        Object.values(this.callbacks.beforeRender).forEach(f => f());
        this.formBox.load({ form: { items: [tabGroup, ...((_a = this.otherItems) !== null && _a !== void 0 ? _a : [])] }, guides: DynamicForm.guides }, this.formBox.data);
        Object.values(this.callbacks.afterRender).forEach(f => f());
    }
    serializeWithChanges() {
        return this.form.serialize(this.formBox.data);
    }
    serialize() {
        let withChanges = this.form.serialize(this.formBox.data);
        return changeDetectionToRaw(withChanges);
    }
    addCallback(point, f) {
        let id = uuidv4();
        this.callbacks[point][id] = f;
        return id;
    }
    removeCallback(id) {
        delete this.callbacks.beforeRender[id];
        delete this.callbacks.afterRender[id];
    }
}
DynamicForm.guides = {
    "layouts": {
        "flex-label": "<div style=\"display: flex; width: 100%;\"><div style=\"flex: 1 1;\">{label}</div><div >{content}</div></div>{error}{description}",
        "label-float-above": { draw: function (dObj) { var l = dObj.item.def.sys.item.layout.settings; if (dObj.item.isNull)
                return '<div style="position: relative;"><div float-state="1" style="position: absolute; top: 0px; left: 0px; right: 0px; height: 100%;"><div style="position: absolute; top: 50%; transform: translate(0px,-50%);">{label}</div></div>{content}</div><div>{error}</div><div>{description}</div>';
            else
                return '<div style="position: relative;"><div float-state="2" style="position: absolute; top: -' + l.size + '; left: 0px; right: 0px; height: ' + l.size + ';' + l.style + '"><div style="position: absolute; top: 50%; transform: translate(0px,-50%);">{label}</div></div>{content}</div><div>{error}</div><div>{description}</div>'; }, settings: { size: '14px', style: '', duration: 300 }, handle: { focus: function (dObj) { var e = this.getElements(dObj.item.path.def); if (e) {
                    e = e[0].children[0].children[0];
                    if (e && e.getAttribute('float-state') == '1') {
                        var l = dObj.item.def.sys.item.layout.settings;
                        e.setAttribute('float-state', '2');
                        if (dObj.item.isNull) {
                            if (l.style != '')
                                A5.u.element.style(e, '+=' + l.style);
                            A5.u.element.transition(e, { from: { top: '0px', height: '100%' }, to: { top: '-' + l.size, height: l.size }, duration: l.duration });
                        }
                    }
                } }, blur: function (dObj) { var e = this.getElements(dObj.item.path.def); if (e) {
                    e = e[0].children[0].children[0];
                    if (e && e.getAttribute('float-state') == '2') {
                        var l = dObj.item.def.sys.item.layout.settings;
                        e.setAttribute('float-state', '1');
                        if (dObj.item.isNull) {
                            if (l.style != '')
                                A5.u.element.style(e, '-=' + l.style);
                            A5.u.element.transition(e, { from: { top: '-' + l.size, height: l.size }, to: { top: '0px', height: '100%' }, duration: l.duration });
                        }
                    }
                } } } },
    }
};
function changeDetectionToRaw(c) {
    if ('raw' in c)
        return c.raw;
    else if ('keys' in c) {
        let out = {};
        for (const key in c.keys) {
            out[key] = changeDetectionToRaw(c.keys[key]);
        }
        return out;
    }
    else {
        return c.elements.map(x => changeDetectionToRaw(x));
    }
}

// EXTERNAL MODULE: ./src/types.ts
var types = __webpack_require__(397);
;// ./src/listAction.ts
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



// let t = A5.u.template.parse("{x}");
// A5.u.template.expand({x: 5}, {template: t});
function fetchConfigNames(obj) {
    return new Promise((resolve, reject) => {
        obj.ajaxCallback("", "", "fetch_config_names", "", "", {
            onComplete: () => {
                let result = obj.stateInfo.apiResult;
                if (result.ok) {
                    resolve(result.ok.map(x => x.config_name));
                }
                else {
                    reject(result.err);
                }
            }
        });
    });
}
function executeListAction(list, action, rowData, row) {
    if (action.actionName == 'openDetailView') {
        list.newDetailViewRecord(row);
    }
    else if (action.actionName == 'openLinkedList') {
        let tabTemplate = A5.u.template.parse(action.tabName);
        let templateData = {
            list: list,
            row: rowData
        };
        let filled = A5.u.template.expand(templateData, { template: tabTemplate });
        list.linkNewPanel(action.configurationName, filled, action.linkedColumns, action.makeFilter);
    }
    else if (action.actionName == 'openJSONSublist') {
        let selected;
        if (row !== undefined) {
            selected = list.data[row];
        }
        else {
            selected = list.data[list.getSelectedRows()[0]];
        }
        let tabTemplate = A5.u.template.parse(action.tabName);
        let templateData = {
            list: list,
            row: rowData
        };
        let filled = A5.u.template.expand(templateData, { template: tabTemplate });
        list.linkSublistToField(action.configurationName, filled, action.fromColumn, selected[action.fromColumn], list.getSelectedRows()[0], selected);
    }
}
function listActionEditor(obj, config) {
    return __awaiter(this, void 0, void 0, function* () {
        let formConfigOptions = {
            linkableCols: DataScopeManager.getDataMappings(config).map(x => { var _a; return ({ text: (_a = x.displayName) !== null && _a !== void 0 ? _a : x.flattenedName, value: x.flattenedName }); }),
            foreignCols: [],
            availableConfigs: yield fetchConfigNames(obj)
        };
        let getForeignColsFor = (config) => {
            return requestListConfig(obj, config).then(() => {
                let c = obj.stateInfo.apiResult;
                if ('ok' in c) {
                    return c.ok.mappings.filter(x => x.tag == 'data').map(x => { var _a; return ({ text: (_a = x.displayName) !== null && _a !== void 0 ? _a : x.flattenedName, value: x.flattenedName }); });
                }
                return [];
            });
        };
        let jsonCols = [];
        for (const key in config.mappings.keys) {
            let m = config.mappings.keys[key];
            if (m.tag == 'array') {
                jsonCols.push({ text: key, value: key });
            }
        }
        let f = {
            type: 'multi',
            options: {
                displayInline: true,
                label: 'List Action Editor',
                definitions: {
                    'Open Detail View': {
                        defaultValue: {
                            actionName: 'openDetailView'
                        },
                        definition: {
                            type: 'object',
                            options: {
                                label: 'Arguments for Open Detail View',
                                requiredKeys: {
                                    actionName: {
                                        type: 'const',
                                        options: { label: '', value: 'openDetailView' }
                                    }
                                }
                            }
                        }
                    },
                    'Launch New List with Linked Field(s)': {
                        defaultValue: {
                            actionName: 'openLinkedList',
                            configurationName: '',
                            tabName: 'New List',
                            linkedColumns: [],
                            makeFilter: true
                        },
                        definition: {
                            type: 'supplier',
                            options: {
                                default: { type: 'const', options: { value: 0 } },
                                supply: (parent, _) => {
                                    return {
                                        type: 'object',
                                        options: {
                                            label: 'Arguments for Linked List',
                                            requiredKeys: {
                                                actionName: {
                                                    type: 'const',
                                                    options: { label: '', value: 'openLinkedList' }
                                                },
                                                configurationName: {
                                                    type: 'dropdown',
                                                    options: {
                                                        label: 'Linked Configuration',
                                                        dropdownItems: formConfigOptions.availableConfigs.map(x => { return { text: x, value: x }; }),
                                                        allowCustomValue: true,
                                                        onSelect: (e, f) => {
                                                            getForeignColsFor(e).then(cols => {
                                                                formConfigOptions.foreignCols.length = 0;
                                                                formConfigOptions.foreignCols.push(...cols);
                                                                f.dynForm.refresh();
                                                            });
                                                        },
                                                    }
                                                },
                                                tabName: templateHelper(formConfigOptions.linkableCols.map(x => x.value), 'New Tab Title'),
                                                linkedColumns: {
                                                    type: 'array',
                                                    options: {
                                                        label: 'Columns to Link',
                                                        defaultValue: { columnName: '', foreignName: '' },
                                                        itemTemplate: {
                                                            type: 'object',
                                                            options: {
                                                                label: 'Column Name',
                                                                requiredKeys: {
                                                                    columnName: {
                                                                        type: 'dropdown',
                                                                        options: {
                                                                            allowCustomValue: true,
                                                                            label: 'Column Name',
                                                                            dropdownItems: formConfigOptions.linkableCols,
                                                                        }
                                                                    },
                                                                    foreignName: {
                                                                        type: 'dropdown',
                                                                        options: {
                                                                            label: 'Foreign Name',
                                                                            dropdownItems: formConfigOptions.foreignCols,
                                                                            default: '',
                                                                            allowCustomValue: true
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        },
                                                    },
                                                    allowEmpty: false
                                                },
                                                makeFilter: {
                                                    type: 'simple',
                                                    options: {
                                                        type: 'boolean',
                                                        label: 'Filter Linked List to Current Selection'
                                                    }
                                                }
                                            },
                                        }
                                    };
                                }
                            }
                        }
                    },
                    'Launch New List from Nested JSON Field': {
                        defaultValue: {
                            actionName: 'openJSONSublist',
                            configurationName: "",
                            tabName: "",
                            fromColumn: ""
                        },
                        definition: {
                            type: 'object',
                            options: {
                                label: 'Arguments for Nested JSON List',
                                requiredKeys: {
                                    actionName: {
                                        type: 'const',
                                        options: {
                                            label: '',
                                            value: 'openJSONSublist'
                                        }
                                    },
                                    configurationName: {
                                        type: 'dropdown',
                                        options: {
                                            label: 'Configuration Name',
                                            allowCustomValue: true,
                                            dropdownItems: formConfigOptions.availableConfigs.map(x => { return { text: x, value: x }; })
                                        }
                                    },
                                    tabName: templateHelper(DataScopeManager.getDataMappings(config).map(x => x.flattenedName), 'Tab Name'),
                                    fromColumn: {
                                        type: 'dropdown',
                                        options: {
                                            label: 'Column with JSON Data',
                                            allowCustomValue: true,
                                            dropdownItems: jsonCols
                                        }
                                    },
                                }
                            }
                        }
                    }
                }
            }
        };
        return f;
    });
}

;// ./src/listBuilder.ts
var listBuilder_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





const DEFAULT_DATE_FMT = 'MM/dd/yyyy';
const listBuilder_DEFAULT_DATETIME_FMT = "MM/dd/yyyy hh:mm:ss";
const DETAIL_FORM_NAME = "DETAIL_VIEW";
const LIST_NAME = 'DYNAMIC_LIST';
const DETAIL_FORM_CONTAINER = 'EDITOR_CONTAINER';
class ValidationError extends Error {
    constructor(message, errors) {
        let finalMsg = `<h4>${message}</h4>`;
        errors.forEach(e => {
            finalMsg += `<p>${e.message}</p>`;
        });
        super(finalMsg);
        this.errors = errors;
        this.message = finalMsg;
    }
}
function validateConfig(config) {
    const errors = [...Errors(types.ConfigTypeSchema, config)];
    if (errors.length > 0)
        throw new ValidationError("Could not validate config -- check logs.", errors);
    return config;
}
function validateMapping(mapping) {
    const errors = [...Errors(types.MappingTypeSchema, mapping)];
    if (errors.length > 0)
        throw new ValidationError("Could not validate config -- check logs.", errors);
    return mapping;
}
function validateSchema(schema) {
    const errors = [...Errors(types.SchemaTypeSchema, schema)];
    if (errors.length > 0)
        throw new ValidationError("Could not validate schema -- check logs.", errors);
    return schema;
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
function getSchema(obj, table, connection) {
    return new Promise((resolve) => {
        obj.ajaxCallback("", "", "getSchemaAjaxCallback", "", "tableName=" + encodeURIComponent(table)
            + "&connectionName=" + encodeURIComponent(connection), {
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
function listBuilder_fetch(obj, configName, endpoint) {
    return listBuilder_awaiter(this, void 0, void 0, function* () {
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
        this.selectedRows = new Set();
        this.clickedRow = null;
        this.dataScopeManager = new DataScopeManager();
        this.foreignKeys = [];
        // Used in _match
        this.searchMemoizationNeedsRebuild = false;
        this.searchMemoization = {};
        this.initialLoadComplete = false;
        this.permanentFilters = [];
        this.searchFilters = [];
        this.orderings = [];
        this.buttonFns = {};
        this.onRender = [];
        this.config = undefined;
        this.dataBridge = undefined;
        this.data = [];
        this.rawData = [];
        this.schema = undefined;
        this.containerId = '';
    }
    destructor() {
        if (this.listBox.destroy)
            this.listBox.destroy();
    }
    static makeDynamicList(ops) {
        return new Promise((resolve) => {
            var _a, _b, _c;
            let list = new DynamicList();
            list.permanentFilters = (_a = ops.filters) !== null && _a !== void 0 ? _a : [];
            list.searchFilters = [];
            list.buttonFns = {};
            list.onRender = [];
            list.obj = ops.obj;
            list.config = jQuery.extend({}, ops.prefetch.config);
            list.dataBridge = new DataBridge(list.config);
            list.data = [];
            list.rawData = [];
            list.schema = { tag: 'none' };
            ops.obj.stateInfo.configName = list.config.name;
            if (ops.prefetch.schema) {
                list.mapRawSchema(ops.prefetch.schema);
            }
            list.containerId = ops.obj.getPointer(ops.containerId).id;
            if (ops.otherProperties) {
                list.onSaveOverride = ops.otherProperties.onSaveOverride;
                list.staticDataOverride = ops.otherProperties.dataOverride;
                list.foreignKeys = (_b = ops.otherProperties.foreignKeys) !== null && _b !== void 0 ? _b : [];
            }
            validateConfig(list.config);
            if (list.config.onInitialize) {
                try {
                    (0,types.stringReprToFn)(list.config.onInitialize)(list, (_c = ops.args) !== null && _c !== void 0 ? _c : []);
                }
                catch (e) {
                    console.error("Initialize function failed.");
                    console.error(e);
                }
            }
            ops.obj.saveDynamicListEdits = () => list.saveDynamicListEdits();
            list.settings = list.buildSettings();
            list.buildList();
            resolve(list);
        })
            .then((list) => {
            if (ops.prefetch.data === undefined || ops.prefetch.data.length == 0) {
                return list.fetchData().then(l => l.fetchSchema());
            }
            else {
                list.setData(ops.prefetch.data, list.schema.tag == 'none');
                return list;
            }
        })
            .then((list) => {
            list.initialLoadComplete = true;
            return list.reRender(false);
        }).then((list) => {
            validateSchema(list.schema);
            list.refreshMultiSelectButton();
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
            jsonData: JSON.stringify(data),
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
    downloadExcelTemplate() {
        this.obj.runAction('Download Excel Template');
    }
    uploadFileToList() {
        let filters = JSON.stringify([...this.permanentFilters, ...this.searchFilters]);
        this.obj.stateInfo.currentFilters = filters;
        this.obj.runAction('File Upload');
    }
    downloadDataToFile() {
        let filters = JSON.stringify([...this.permanentFilters, ...this.searchFilters]);
        this.obj.stateInfo.currentFilters = filters;
        this.obj.runAction('File Download');
    }
    newDetailViewRecord(row, allowMultipleEdit = false) {
        let rowNum;
        if (row !== undefined)
            rowNum = row;
        else if (this.selectedRows.size > 0) {
            rowNum = this.getSelectedRows()[0];
        }
        else {
            rowNum = null;
        }
        let makeForm = () => this.buildDetailViewForm(rowNum, allowMultipleEdit);
        let openForm = () => this.obj.runAction('Navigate Detail View');
        let makeNew = () => this.listBox.newDetailViewRecord();
        A5.executeThisThenThat(makeForm, openForm, makeNew);
    }
    saveDynamicListEdits() {
        var _a;
        let harvest = this.listBox.harvestList();
        harvest.forEach(elem => {
            this.foreignKeys.forEach(fk => {
                elem[fk.columnName] = fk.value;
            });
        });
        let removeMetadataFields = (x) => {
            if (x instanceof Array) {
                for (let i = 0; i < x.length; i++) {
                    x[i] = removeMetadataFields(x[i]);
                }
            }
            else if (typeof x == 'object') {
                for (const key in x) {
                    let alphaFields = ['__displayStyle', '_isDirty', '_isNewRow', '_oldData', '_hasServerSideErrors', '_hasWriteConflictErrors', '_isDeleted', '_serverWideErrors', '_writeConflictErrors'];
                    if (key.startsWith("*") || alphaFields.includes(key)) {
                        delete x[key];
                        continue;
                    }
                    x[key] = removeMetadataFields(x[key]);
                }
            }
            return x;
        };
        for (let i = 0; i < harvest.length; i++) {
            harvest[i] = removeMetadataFields(harvest[i]);
        }
        harvest = this.dataBridge.processedToRaw(harvest);
        if (this.onSaveOverride) {
            this.onSaveOverride(this, harvest);
            this.obj.refreshClientSideComputations(true);
            this.reRender(true);
            return;
        }
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
        if (this.config.dataSource.type == 'sql') {
            this.obj.ajaxCallback("", "", "updateData", "", "configName=" + encodeURI(this.config.name)
                + "&dirty=" + encodeURI(JSON.stringify(harvest))
                + "&connectionName=" + encodeURIComponent((_a = this.config.dataSource.connectionString) !== null && _a !== void 0 ? _a : 'conn'), {
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
            let queryPopulateErrors = [];
            let populateQueries = (list, endpoint) => {
                list.forEach(_ => {
                    var _a;
                    if (!('endpoints' in this.config.dataSource))
                        return;
                    if (endpoint in this.config.dataSource.endpoints) {
                        let ep = this.config.dataSource.endpoints[endpoint];
                        allQueries.push({
                            endpoint: endpoint,
                            callback: (0,types.stringReprToFn)((_a = ep.callback) !== null && _a !== void 0 ? _a : "() => { }"),
                        });
                    }
                    else {
                        let errMsgTxt = `<p>The necessary endpoint (${endpoint}) is not defined for this list.</p>`;
                        queryPopulateErrors.push(errMsgTxt);
                    }
                });
            };
            populateQueries(newRows, 'create');
            populateQueries(updatedRows, 'update');
            populateQueries(deletedRows, 'delete');
            if (queryPopulateErrors.length > 0) {
                let msg = "<p>There were errors while synchronizing the list.</p><ul>";
                queryPopulateErrors.forEach(x => msg += x);
                msg += "</ul>";
                displayErrorMessage(msg);
                return;
            }
            allQueries.forEach(q => {
                listBuilder_fetch(this.obj, this.config.name, q.endpoint).then(q.callback);
            });
            onComplete();
        }
    }
    refreshMultiSelectButton() {
        let b = this.obj.getControl('MULTI_EDIT_BTN');
        if (b) {
            let selectedCount = this.getSelectedRows().length;
            if (selectedCount > 1) {
                b.setDisabled(false);
            }
            else {
                b.setDisabled(true);
            }
            b.onClick = () => {
                this.newDetailViewRecord(undefined, true);
            };
        }
    }
    buildSettings() {
        let columns = [];
        let listFields = [];
        let menuSettings = {};
        let items = {};
        let listObj = this;
        if (!this.config.buttons)
            this.config.buttons = [];
        if (this.config.multiSelect === true) {
            columns.push(this.buildCheckboxColumn());
        }
        for (const mapping of DataScopeManager.getDataMappings(this.config)) {
            if (mapping.tag == 'data') {
                columns.push(this.buildColumnDefinition(mapping, mapping.flattenedName));
                listFields.push(this.buildListFieldDefn(mapping.flattenedName));
            }
        }
        for (let i = 0; i < this.config.buttons.length; i++) {
            columns.push(this.buildColumnButton(this.config.buttons[i], i, items));
            this.makeMenuSetting(this.config.buttons[i], i, menuSettings, items);
        }
        let dialogId = this.obj.dialogId;
        items['__toggleCheck'] = {
            "selectable": false,
            "onClick": (index, v, args) => {
                var data = this.listBox._data[this.listBox._dataMap[index]];
                let selected = !this.isRowSelected(data['*key']);
                this.setRowSelected(data['*key'], selected);
                var src = this.listBox.__checkedImage;
                if (!selected)
                    src = this.listBox.__uncheckedImage;
                let id = this.obj.dialogId + '.' + LIST_NAME;
                var ele = $(`${id}.CHECKBOX` + data['*key']);
                A5.u.icon.update(ele.children[0], src);
                this.listBox._size();
                if (this.listBox.onCheckRow) {
                    var e = { data: data, renderIndex: data['*renderIndex'], rowNumber: data['*key'], value: data['*value'], checked: selected };
                    this.listBox.onCheckRow(e);
                }
                this.refreshMultiSelectButton();
            }
        };
        items['__toggleAll'] = {
            "selectable": false,
            "onClick": (index, v, args) => {
                if (this.selectedRows.size == this.data.length) {
                    this.setAllRowsSelected(false);
                }
                else {
                    this.setAllRowsSelected(true);
                }
                this.listBox.refresh();
                this.refreshMultiSelectButton();
            }
        };
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
            setOrder: (order) => {
                if (this.listBox.onBeforeOrder.constructor == Function) {
                    let res = this.listBox.onBeforeOrder.call(this.listBox, order);
                    if (typeof res == 'boolean') {
                        if (!res)
                            return false;
                    }
                }
                this.listBox.order = order;
                if ('paginate' in this.config.dataSource && this.config.dataSource.paginate) {
                    let colName = Object.keys(order)[0];
                    if (order[colName]) {
                        // Remove from current sorting, if applicable
                        this.orderings = this.orderings.filter(o => o.columnName != colName);
                        let ordering = order[colName] > 0 ? 'asc' : 'desc';
                        this.orderings.push({
                            columnName: colName,
                            order: ordering
                        });
                    }
                    else {
                        this.orderings = [];
                    }
                    this.reRender(true);
                }
                else {
                    this.listBox.populate(this.listBox._data, true, false, false);
                }
            },
            onSelect: (index) => {
                let populateControls = this.listBox.populateUXControls.bind(this.listBox);
                populateControls();
                this.listBox._selectedRow = this.getSelectedRows()[0];
                this.obj._listRowSelect(LIST_NAME, this.listBox);
                this.listBox._selectedRow = this.getSelectedRows()[0];
            },
            onClick: () => {
                this.obj._listSystemOnClick(LIST_NAME, this.getSelectedRows()[0]);
            },
            onBeforePopulate: (data) => {
                if (this.listBox)
                    this.listBox.__onPopulateHasFired = false;
            },
            onBeforeUpdateRow: (index, data) => {
            },
            getCheckedRows: () => {
                return this.getSelectedRows();
            },
            unCheckAllRows: () => {
                this.setAllRowsSelected(false);
                this.refreshMultiSelectButton();
                this.listBox.refresh();
            },
            checkAllRows: () => {
                this.setAllRowsSelected(true);
                this.refreshMultiSelectButton();
                this.listBox.refresh();
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
                show: 'paginate' in this.config.dataSource,
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
            addTableRow: function (dataObj, options) {
                var parentList = this.parentList;
                if (typeof parentList != 'undefined' && parentList != '') {
                    var _dlgObj = window[this._hostComponentId + '_DlgObj'];
                    var lp = _dlgObj.getControl(parentList);
                    var r = lp.selection[0];
                    if (typeof r == 'undefined') {
                        alert('Can not add row to list ' + this.listVariableName + ' as there is no row selected in this List\'s parent list (\'' + parentList + '\')');
                        return false;
                    }
                }
                if (typeof options == 'undefined') {
                    options = {};
                }
                if (typeof options.setFocusToTargetRow == 'undefined')
                    options.setFocusToTargetRow = false;
                var obj = {};
                obj.programmatic = true;
                obj.data = {};
                if (this.__pkisguid) {
                    if (this.__assignPKGuidClientSide) {
                        if (typeof dataObj[this.__pkfieldname] == 'undefined') {
                            dataObj[this.__pkfieldname] = A5.UUID();
                            if (!this.__stripcurlyfromguid) {
                                dataObj[this.__pkfieldname] = '{' + dataObj[this.__pkfieldname] + '}';
                            }
                        }
                    }
                }
                $u.o.assign(obj.data, dataObj);
                obj.primaryKeyOrRowNumber = null;
                obj.setFocusToTargetRow = options.setFocusToTargetRow;
                if (typeof options.insertRow == 'undefined')
                    options.insertRow = false;
                obj.insertRow = options.insertRow;
                obj.insertRowPosition = options.insertPosition;
                var _dlg = window[this._hostComponentId + '_DlgObj'];
                _dlg._updateListDataFromUXControls(this.listVariableName, null, obj);
                var parentListName = this.parentList;
                if (typeof parentListName != 'undefined' && parentListName != '') {
                    var thisData = obj.data;
                    var plObj = window[this._hostComponentId + '_DlgObj'].getControl(this.parentList);
                    if (plObj._setDirtyByChild) {
                        plObj._setDirtyByChild(true, thisData, this.listVariableName);
                    }
                }
                if (!options.preventOnSelect)
                    this._onSelect();
                _dlg.refreshClientSideComputations();
                return obj.data;
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
                let _dirtyRowClassName = `_${dialogId}_${LIST_NAME}_dirtyRow`;
                let _dirtyRowClassNameInherited = `_${dialogId}_${LIST_NAME}_dirtyRowInherited`;
                let _dirtyRowStyle = `_${dialogId}_${LIST_NAME}_dirtyRowStyle`;
                let _hasUnsyncedMediaFilesClassName = `_${dialogId}_${LIST_NAME}_hasUnsyncedMediaFiles`;
                let _errorRowClassName = `_${dialogId}_${LIST_NAME}_hasError`;
                let _errorRowClassNameInherited = `_${dialogId}_${LIST_NAME}_hasErrorInherited _${dialogId}_${LIST_NAME}_dirtyRowInherited`;
                let _errorRowClassNameInherited_1 = `_${dialogId}_${LIST_NAME}_hasErrorInherited`;
                let _errorRowClassNameInherited_2 = `_${dialogId}_${LIST_NAME}_dirtyRowInherited`;
                let _errorRowStyle = `_${dialogId}_${LIST_NAME}_hasErrorStyle`;
                let _newRowClassName = `_${dialogId}_${LIST_NAME}_newRow`;
                let _newRowStyle = `_${dialogId}_${LIST_NAME}_newRowStyle`;
                let _deletedRowClassName = `_${dialogId}_${LIST_NAME}_deletedRow`;
                let _deletedRowStyle = `_${dialogId}_${LIST_NAME}_deletedRowStyle`;
                let _deletedRowClassNameInherited = `_${dialogId}_${LIST_NAME}_deletedRowInherited`;
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
                    let btns = document.getElementsByClassName(`${LIST_NAME}_BUTTON`);
                    for (let i = 0; i < btns.length; i++) {
                        btns[i].parentElement.style.whiteSpace = 'normal';
                    }
                }
            },
            _navBarId: 'DYNAMIC_LIST_NAVIGATOR',
            _refreshStateMessages: () => {
                if (!('paginate' in this.config.dataSource))
                    return;
                if (this.obj._listStateChange)
                    this.obj._listStateChange(this.listBox.listVariableName);
                let ele = '';
                ele = $(`_${this.obj.dialogId}.${LIST_NAME}.PAGENUMBER`);
                if (ele)
                    ele.innerHTML = this.listBox._state.page;
                ele = $(`_${this.obj.dialogId}.${LIST_NAME}.PAGECOUNT`);
                if (ele)
                    ele.innerHTML = this.listBox._state.pageCount;
                ele = $(`_${this.obj.dialogId}.${LIST_NAME}.PAGECOUNT.PAGESELECTOR`);
                if (ele)
                    ele.innerHTML = this.listBox._state.pageCount;
                ele = $(`_${this.obj.dialogId}.${LIST_NAME}.LISTSTATE`);
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
                ele = this.obj._buttons[`BUTTON_LISTNAV_NEXT.${LIST_NAME}`];
                if (ele) {
                    if (this.listBox._state.page == this.listBox._state.pageCount || this.listBox._state.pageCount == 0)
                        ele.setDisabled(true);
                    else
                        ele.setDisabled(false);
                }
                ele = this.obj._buttons[`BUTTON_LISTNAV_LAST.${LIST_NAME}`];
                if (ele) {
                    if (this.listBox._state.page == this.listBox._state.pageCount || this.listBox._state.pageCount == 0)
                        ele.setDisabled(true);
                    else
                        ele.setDisabled(false);
                }
                ele = this.obj._buttons[`BUTTON_LISTNAV_FIRST.${LIST_NAME}`];
                if (ele) {
                    if (this.listBox._state.page == 1 || this.listBox._state.pageCount == 0)
                        ele.setDisabled(true);
                    else
                        ele.setDisabled(false);
                }
                ele = this.obj._buttons[`BUTTON_LISTNAV_PREV.${LIST_NAME}`];
                if (ele) {
                    if (this.listBox._state.page == 1 || this.listBox._state.pageCount == 0)
                        ele.setDisabled(true);
                    else
                        ele.setDisabled(false);
                }
                ele = $(`${this.obj.dialogId}.V.R1.A5SYSTEM_LIST_PAGESELECTOR_${LIST_NAME}`);
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
            _match: (data, field, compareWith, obj) => {
                let matches = (data, field) => {
                    var _a;
                    let rowValue = data[field];
                    let op = (_a = obj.op) !== null && _a !== void 0 ? _a : '=';
                    let rowValDateStr = '';
                    let rowValDate = new Date();
                    let compareWithDate = new Date();
                    if (obj.type == 'datetime' || obj.type == 'time') {
                        if (rowValue instanceof Date) {
                            rowValDate = rowValue;
                            rowValDateStr = rowValue.toFormat(obj.dateFormat);
                        }
                        else {
                            rowValDateStr = rowValue;
                            rowValDate.fromFormat(rowValue, obj.dateFormat);
                        }
                        if (compareWith instanceof Date) {
                            compareWithDate = compareWith;
                        }
                        else {
                            compareWithDate.fromFormat(compareWith, obj.dateFormat);
                        }
                    }
                    let cmpDate = obj.type == 'datetime' || obj.type == 'time';
                    let cmpText = obj.type == 'dropdown' || obj.type == 'text';
                    switch (op) {
                        case '=': {
                            if (cmpDate) {
                                return compareWith == rowValDateStr;
                            }
                            return compareWith == rowValue;
                        }
                        case '<>': {
                            if (cmpDate) {
                                return compareWith != rowValDateStr;
                            }
                            return compareWith != rowValue;
                        }
                        case '<': {
                            if (cmpDate) {
                                return rowValDate < compareWithDate;
                            }
                            return rowValue < compareWith;
                        }
                        case '>': {
                            if (cmpDate) {
                                return rowValDate > compareWithDate;
                            }
                            return rowValue > compareWith;
                        }
                        case '<=': {
                            if (cmpDate) {
                                return rowValDate <= compareWithDate;
                            }
                            return rowValue <= compareWith;
                        }
                        case '>=': {
                            if (cmpDate) {
                                return rowValDate >= compareWithDate;
                            }
                            return rowValue >= compareWith;
                        }
                        case 'x..': {
                            if (cmpText) {
                                return (rowValue).startsWith(compareWith);
                            }
                            return false;
                        }
                        case '..x': {
                            if (cmpText) {
                                return (rowValue).endsWith(compareWith);
                            }
                            return false;
                        }
                        case '..x..': {
                            if (cmpDate) {
                                return (rowValue).includes(compareWith);
                            }
                            return false;
                        }
                        default: {
                            return true;
                        }
                    }
                };
                if (this.searchMemoizationNeedsRebuild) {
                    this.searchMemoization = {};
                    this.data.forEach((data, index) => {
                        this.searchMemoization[index] = matches(data, field);
                    });
                }
                let topLevel = this.config.mappings.filter(x => x.tag == 'data').map(x => x.flattenedName);
                let flag;
                if (topLevel.includes(field)) {
                    flag = matches(data, field);
                }
                else {
                    let row = data['*key'];
                    let unflattenedIndex = this.dataScopeManager.expandedIdxToRawIdx[row];
                    if (obj.quantifier === 'ALL') {
                        // If every row belonging to this parent index matches,
                        // then we match.
                        let allMatch = true;
                        this.data.forEach((_, index) => {
                            if (this.dataScopeManager.expandedIdxToRawIdx[index] != unflattenedIndex)
                                return;
                            allMatch = allMatch && this.searchMemoization[index];
                        });
                        flag = allMatch;
                    }
                    else {
                        // If *some* row belonging to the parent index matches,
                        // then we match
                        let someMatch = false;
                        this.data.forEach((_, index) => {
                            if (this.dataScopeManager.expandedIdxToRawIdx[index] != unflattenedIndex)
                                return;
                            someMatch = someMatch || this.searchMemoization[index];
                        });
                        flag = someMatch;
                    }
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
            __checkedImage: 'svgIcon=#alpha-icon-checkCircle:icon,24',
            __uncheckedImage: 'svgIcon=#alpha-icon-circle:icon,24',
            onListDraw: function (data, startIndex) {
                if (data.length == 0) {
                    let content = $(this.contId + '.CONTENT');
                    let msg = !listObj.initialLoadComplete ? 'Fetching Data...' : 'No Records in List';
                    content.innerHTML = `
                        <div id="${this.contId + '.NORECORDSINLIST'}" style="text-align: center; padding: 1rem;">
                            <span>${msg}</span>
                        </div>
                    `;
                }
                if (A5.flags.isMobile) {
                    $e.add(this.contId + '.CONTENT', 'abstractdown', (e) => {
                        let ele = e.target;
                        let tag = '';
                        if (ele && typeof ele.tagName == 'string')
                            tag = ele.tagName.toLowerCase();
                        if (tag != 'input' && tag != 'textarea')
                            $e.preventDefault(e);
                    });
                }
                if (listObj.config.multiSelect === true) {
                    let allChecked = listObj.selectedRows.size == listObj.data.length;
                    let h;
                    if (allChecked) {
                        h = A5.u.icon.html(this.__checkedImage);
                    }
                    else {
                        h = A5.u.icon.html(this.__uncheckedImage);
                    }
                    let _id = listObj.obj.dialogId + '.' + this.listVariableName + '.CHECKBOXALL';
                    let ele = $(_id);
                    ele.innerHTML = h;
                }
            },
            onChange: () => {
                let btns = document.getElementsByClassName(`${LIST_NAME}_BUTTON`);
                for (let i = 0; i < btns.length; i++) {
                    btns[i].parentElement.style.whiteSpace = 'normal';
                }
            },
            updateListFromUXControls: () => {
                if (this.listBox._updatingListFromUXControls)
                    return false;
                this.listBox._updatingListFromUXControls = true;
                this.listBox._updatingListFromUXControls = false;
            },
            _trimNonDirtyData: function (data) { return data; },
            updateRow: function (indx, rowData) {
                indx = this.getIndex(indx);
                let dIndx = indx[0].renderIndex;
                indx = indx[0].index;
                if (indx == -1)
                    return false;
                if (this.onBeforeUpdateRow.constructor == Function) {
                    var res = this.onBeforeUpdateRow.call(this, indx, rowData);
                    if (typeof res == 'boolean') {
                        if (!res)
                            return false;
                    }
                }
                if (typeof rowData == 'object')
                    Object.assign(this._data[indx], rowData);
                else
                    this._data[indx] = rowData;
                if (!this._brd) {
                    let html;
                    let value;
                    if (this.filter || this.order || this.state.group.auto.active || this._curLObj.type == 'custom')
                        this.populate(this._data, true, false, false);
                    else {
                        var tData = {};
                        A5.u.object.assign(tData, this._data[indx]);
                        if (this._template == '') {
                            if (this._hasOBIDEvnt && dIndx != -1)
                                this.onBeforeItemDraw.call(this, tData, dIndx);
                            html = tData.toString();
                            value = tData.toString();
                        }
                        else {
                            var temp = this._template;
                            if (this._tempIsDyn)
                                var temp = A5.u.template.parse(temp(iData));
                            if (this._hasOBIDEvnt && dIndx != -1)
                                this.onBeforeItemDraw.call(this, tData, dIndx);
                            html = this._fillTemplate(temp, tData, dIndx, indx, {
                                info: {},
                                state: this.state
                            });
                            html = html.split('{*row}').join(indx);
                            html = html.split('{*dataRow}').join(dIndx);
                            html = html.split('{*dataRowOneBased}').join(dIndx + 1);
                            value = this.calculateValue(tData, indx);
                        }
                        this._data[indx]['*value'] = value;
                        if (dIndx != -1)
                            this._values[dIndx] = value;
                        var ele = $(this.contId + '.' + dIndx);
                        if (ele) {
                            ele.innerHTML = html;
                            if (this._hasOIDEvnt)
                                this.onItemDraw.call(this, ele, tData, dIndx);
                            if (this.onListDraw.constructor == Function)
                                this.onListDraw.call(this, this._rData, -1);
                        }
                    }
                }
                if (this.onUpdateRow.constructor == Function)
                    this.onUpdateRow.call(this, indx, this._data[indx]);
                return true;
            }
        };
    }
    buildCheckboxColumn() {
        let id = this.obj.dialogId + '.' + LIST_NAME;
        let checked = A5.u.icon.html("svgIcon=#alpha-icon-checkCircle:icon,24");
        let unchecked = A5.u.icon.html("svgIcon=#alpha-icon-circle:icon,24");
        let template = `
            <div 
                style="display: inline-block;" 
                id="${id + '.CHECKBOX{*key}'}" 
                a5-item="__toggleCheck"
            >
                {*if <defined<__selected>>}
                    {*if __selected}
                        ${checked}
                    {*else}
                        ${unchecked}
                    {*endif}
                {*else}
                    ${unchecked}
                {*endif}
            </div>`;
        return {
            header: {
                html: `<span id="${id + '.CHECKBOXALL'}" a5-item="__toggleAll"></span>`
            },
            _name: '<CheckBoxSelect>',
            _type: '',
            resize: true,
            rcw: 0,
            data: {
                template: template.replace(/(\r\n|\n|\r|\t)/gm, ""),
                style: 'text-align: left; text-overflow: clip !important; white-space: normal !important;'
            },
            order: false,
            width: '50px'
        };
    }
    buildColumnDefinition(mapping, key) {
        var _a, _b, _c, _e, _f;
        let name = (_a = mapping.flattenedName) !== null && _a !== void 0 ? _a : key;
        let template = '{' + name + '}';
        if (mapping.editType == 'datetime' || mapping.editType == 'time') {
            template = `{${name}:date("${(_b = mapping.serverDateFormat) !== null && _b !== void 0 ? _b : listBuilder_DEFAULT_DATETIME_FMT}")}`;
        }
        if (mapping.template)
            template = mapping.template;
        return {
            show: (_c = mapping.inList) !== null && _c !== void 0 ? _c : false,
            header: {
                html: (_e = mapping.displayName) !== null && _e !== void 0 ? _e : name
            },
            data: {
                template: `<span id="${this.obj.dialogId}.${LIST_NAME}.${name}.I.{*dataRow}"> ${template} </span>`
            },
            width: (_f = mapping.width) !== null && _f !== void 0 ? _f : 'flex(1)',
            resize: true,
            order: name,
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
                resize: true,
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
                        (0,types.stringReprToFn)(button.onClick.function)(tmpThis, rowNumber, data);
                    }(idx, v, args, data, this.listBox, this.listBox));
                }
                else if ('action' in button.onClick) {
                    this.obj.runAction(button.onClick.action);
                }
                else {
                    executeListAction(this, button.onClick.listAction, data, idx);
                }
            }
        };
        return {
            header: { html: button.columnTitle },
            _name: btnNumber.toString(),
            _type: 'Button',
            resize: true,
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
                        (0,types.stringReprToFn)(button.onClick.function)(this);
                    }
                    else if ('action' in button.onClick) {
                        this.obj.runAction(button.onClick.action);
                    }
                    else {
                        executeListAction(this, button.onClick.listAction, this.data[index]);
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
    buildListFieldDefn(name) {
        let defn = {
            name: name,
            defaultValue: `return this._controlDefaultValueForListField('${name}');`,
            onDetailViewPopulate: '',
            onListUpdate: '',
        };
        return defn;
    }
    buildDetailViewForm(rowNum = null, allowMultiSelect = false) {
        if (rowNum !== null) {
            this.clickedRow = rowNum;
        }
        let _d = {};
        let allSelected = this.getSelectedRows();
        if (allSelected.length > 1 && allowMultiSelect) {
            let selectedData = allSelected.map(i => this.data[i]);
            // For each mapping, check that every entry in selected is the same
            // If it is, leave it alone
            // Otherwise, replace with empty string
            DataScopeManager.getDetailViewMappings(this.config).forEach(mapping => {
                var _a;
                let name = mapping.key;
                if ('flattenedName' in mapping.mapping)
                    name = (_a = mapping.mapping.flattenedName) !== null && _a !== void 0 ? _a : mapping.key;
                let allSame = true;
                for (let i = 1; i < selectedData.length; i++) {
                    if (selectedData[i][name] !== selectedData[i - 1][name]) {
                        allSame = false;
                        break;
                    }
                }
                if (allSame) {
                    _d[name] = selectedData[0][name];
                }
                else {
                    _d[name] = makeObviousDefault(mapping.mapping);
                }
            });
        }
        else if (rowNum != undefined) {
            allSelected = [rowNum];
            _d = jQuery.extend({}, this.listBox._data[this.listBox._dataMap[rowNum]]);
        }
        else {
            DataScopeManager.getDetailViewMappings(this.config).forEach(mapping => {
                let name = mapping.key;
                if (mapping.mapping.tag == 'data' && mapping.mapping.flattenedName)
                    name = mapping.mapping.flattenedName;
                _d[name] = makeObviousDefault(mapping.mapping);
            });
        }
        let d = JSON.parse(JSON.stringify(_d));
        delete d['*key'];
        delete d['*renderIndex'];
        delete d['*value'];
        let inputs = {
            label: "Detail View",
            inlineKeys: true,
            requiredKeys: {}
        };
        let toInclude = new Set();
        for (const mapping of DataScopeManager.getDetailViewMappings(this.config)) {
            let name = mapping.key;
            if (mapping.mapping.tag == 'data' && mapping.mapping.flattenedName)
                name = mapping.mapping.flattenedName;
            toInclude.add(name);
            let value = mappingToInput(this, mapping.mapping, mapping.key);
            inputs.requiredKeys[name] = value;
        }
        // If there are keys present in the data that aren't present 
        // in the config, we'll get an error. So we need to remove those.
        for (const key in d) {
            if (!toInclude.has(key)) {
                delete d[key];
            }
        }
        let bottomButtons = this.makeDetailContextButtons(allSelected);
        let detailViewForm = new DynamicForm(this.obj, this.obj.getPointer(DETAIL_FORM_CONTAINER).id, { type: 'object', options: inputs }, [bottomButtons]);
        this.setFormDetailView(detailViewForm);
        this.detailView = detailViewForm;
        detailViewForm.populate(d);
    }
    makeDetailContextButtons(rowsToChange) {
        let divStyle = "display: flex; flex-direction: row; align-items: center; gap: 0.5rem;";
        // Alpha overrides all events on all elements with its own handlers. 
        // Apparently, there is a bug where the old 'onclick' version of a button is kept 
        // around. (No other properties of the old button are kept). 
        // I cannot figure out how or why this is happening, and so the workaround 
        // is to store the function in the dialog object, so that the 
        // button onclick method doesn't carry any captured variables. 
        // We can edit the dialog object properties to change the function.
        let doDelete = () => {
            rowsToChange.forEach(r => {
                this.listBox.selection = [r];
                this.listBox.deleteRow();
            });
            if (this.detailView) {
                this.detailView.formBox.isDirtyImmediate = true;
                this.detailView.formBox.refresh();
            }
            this.obj.refreshClientSideComputations(true);
        };
        let doSave = () => {
            var _a, _b, _c;
            let d = {};
            if (rowsToChange.length <= 1) {
                d = (_a = this.detailView) === null || _a === void 0 ? void 0 : _a.serialize();
            }
            else {
                let changes = (_c = (_b = this.detailView) === null || _b === void 0 ? void 0 : _b.serializeWithChanges()) !== null && _c !== void 0 ? _c : { changed: false, raw: null };
                if ('keys' in changes) {
                    for (const key in changes.keys) {
                        let item = changes.keys[key];
                        if ('raw' in item && item.changed) {
                            d[key] = item.raw;
                        }
                        else if ('keys' in item && item.changed) {
                            d[key] = item.keys;
                        }
                        else if ('elements' in item && item.changed) {
                            d[key] = item.elements;
                        }
                    }
                }
            }
            if (rowsToChange.length == 0) {
                this.listBox.addTableRow(d, { setFocusToTargetRow: true });
            }
            else {
                rowsToChange.forEach(s => this.listBox.updateTableRow(s, d));
            }
            if (this.detailView) {
                this.detailView.formBox.isDirtyImmediate = false;
            }
        };
        this.obj._functions.DELETE_BUTTON_ONCLICK_BUG_WORKAROUND_DYNAMIC_LIST = doDelete;
        this.obj._functions.SAVE_BUTTON_ONCLICK_BUG_WORKAROUND_DYNAMIC_LIST = doSave;
        return {
            type: 'group',
            items: [
                {
                    type: 'button',
                    control: {
                        html: `
                        <div style="${divStyle}">
                            ${A5.u.icon.html('svgIcon=#alpha-icon-save:icon,24')}
                            <p>Save</p>
                        </div>
                        `,
                        onClick: () => this.obj._functions.SAVE_BUTTON_ONCLICK_BUG_WORKAROUND_DYNAMIC_LIST()
                    }
                },
                {
                    type: 'button',
                    control: {
                        html: `
                        <div style="${divStyle}">
                            ${A5.u.icon.html('svgIcon=#alpha-icon-trash:icon,24')}
                            <p>Delete</p>
                        </div>
                        `,
                        onClick: () => this.obj._functions.DELETE_BUTTON_ONCLICK_BUG_WORKAROUND_DYNAMIC_LIST()
                    }
                },
                {
                    type: 'button',
                    control: {
                        html: `
                        <div style="${divStyle}">
                            ${A5.u.icon.html('svgIcon=#alpha-icon-add:icon,24')}
                            <p>New Record</p>
                        </div>
                        `,
                        onClick: () => {
                            if (!this.listBox.openingDetailView) {
                                this.listBox.openingDetailView = true;
                                this.setAllRowsSelected(false);
                                this.refreshMultiSelectButton();
                                this.newDetailViewRecord();
                                this.listBox.openingDetailView = false;
                            }
                        }
                    }
                },
            ],
            container: {
                style: '; display: flex; flex-direction: row; gap: 1rem;'
            }
        };
    }
    openSublistFromNested(name, label, data, onSave) {
        let newSchema = {
            version: this.config.version,
            name: name,
            dataSource: {
                type: 'json',
                jsonData: JSON.stringify(data)
            },
            mappings: [],
            searchOptions: {},
            buttons: [],
        };
        let ops = {
            listContainerId: "LIST_CONTAINER",
            searchContainerId: "SEARCH_CONTAINER",
            configName: name,
            titleName: label,
            fallbackConfig: newSchema,
            otherProps: {
                onSaveOverride: (list, newData) => {
                    Object.assign(data, newData);
                    onSave(newData);
                },
                dataOverride: data,
            }
        };
        openNewPanel(ops);
    }
    linkSublistToField(name, label, columnName, populateWith, currRow, currData) {
        let onSave = (newData) => {
            currData[columnName] = this.dataBridge.rawToProcessed(newData);
            this.listBox.updateRow(currRow, currData);
        };
        this.openSublistFromNested(name, label, populateWith, onSave);
    }
    launchNewPanel(configName, titleName, filters = []) {
        openNewPanel({
            configName: configName,
            titleName: titleName,
            filters: filters,
            listContainerId: 'LIST_CONTAINER',
            searchContainerId: 'SEARCH_CONTAINER',
        });
    }
    linkNewPanel(configName, titleName, columns, makeFilter = true) {
        let allFilters = [];
        columns.forEach(c => allFilters.push(...this.makeFilterFromSelected(c.columnName, c.foreignName)));
        openNewPanel({
            configName: configName,
            listContainerId: 'LIST_CONTAINER',
            searchContainerId: 'SEARCH_CONTAINER',
            titleName: titleName,
            filters: makeFilter ? allFilters : [],
            otherProps: {
                foreignKeys: allFilters.map(x => {
                    if (x.columnVal.tag == 'arg') {
                        throw new Error('Cannot link new panel on an argument');
                    }
                    let value = x.columnVal.value;
                    return {
                        columnName: x.columnName,
                        value: value
                    };
                })
            }
        });
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
            let pageSize;
            if ('paginate' in this.config.dataSource && this.config.dataSource.paginate) {
                pageSize = this.config.dataSource.paginate.pageSize;
            }
            else {
                pageSize = rawData.count;
            }
            this.listBox._state = {
                pageSize: pageSize,
                page: this.listBox._state.page,
                pageCount: Math.ceil(rawData.count / pageSize),
                recordCount: rawData.count
            };
            rawDataRows = rawData.result;
        }
        else {
            rawDataRows = rawData;
            this.listBox._state.recordCount = undefined;
        }
        try {
            if (this.config.dataSource.preprocess)
                rawDataRows = (0,types.stringReprToFn)(this.config.dataSource.preprocess)(rawDataRows);
        }
        catch (e) {
            console.log(e);
            rawDataRows = undefined;
        }
        if (rawDataRows === undefined) {
            rawDataRows = [];
        }
        this.rawData = rawDataRows;
        if (buildSchema)
            this.buildSchemaFromRawData();
        this.dataScopeManager = new DataScopeManager();
        this.data = this.dataBridge.rawToProcessed(this.rawData);
        this.data = this.dataScopeManager.flattenData(this.data, this.config);
        if (this.listBox._state.recordCount === undefined) {
            this.listBox._state.recordCount = this.data.length;
        }
        this.refreshMultiSelectButton();
    }
    fetchData() {
        // There is a bug where the parent somehow doesn't point to the most recent list object
        // During a refresh, the message is something like "cannot set property whiteSpace of undefined"
        // This is the fix
        this.obj._controlInst['R1.' + LIST_NAME] = this.listBox;
        let filters = JSON.stringify([...this.permanentFilters, ...this.searchFilters]);
        let paginate = '';
        if ('paginate' in this.config.dataSource && this.config.dataSource.paginate) {
            paginate = "&pageOptions=" + encodeURIComponent(`{pageSize: ${this.config.dataSource.paginate.pageSize}, getPage: ${this.listBox._state.page}}`);
        }
        let sortOptions = '';
        if (this.orderings.length > 0) {
            sortOptions = '&sortOptions=' + encodeURIComponent(JSON.stringify(this.orderings));
        }
        if (this.config.dataSource.type == 'sql' && 'table' in this.config.dataSource) {
            return new Promise((resolve, reject) => {
                this.obj.ajaxCallback("", "", "getAllDataForTable", "", "configName=" + encodeURIComponent(this.config.name)
                    + "&filters=" + encodeURIComponent(filters)
                    + sortOptions
                    + paginate, {
                    onComplete: () => {
                        let response = this.obj.stateInfo.apiResult;
                        if ("err" in response) {
                            reject(new Error(response.err));
                            return;
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
            return new Promise((resolve, reject) => {
                this.obj.ajaxCallback("", "", "getAllDataForTable", "", "configName=" + encodeURIComponent(this.config.name)
                    + "&filters=" + encodeURIComponent(filters)
                    + sortOptions
                    + paginate, {
                    onComplete: () => {
                        let response = this.obj.stateInfo.apiResult;
                        if ("err" in response) {
                            reject(new Error(response.err));
                            return;
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
        else if (this.config.dataSource.type == 'json' && 'jsonData' in this.config.dataSource) {
            if (this.staticDataOverride) {
                this.data = jQuery.extend(true, [], this.staticDataOverride);
            }
            else {
                this.data = jQuery.extend(true, [], JSON.parse(this.config.dataSource.jsonData));
            }
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
            return listBuilder_fetch(this.obj, this.config.name, endpoint)
                .then((json) => {
                if ('err' in json) {
                    throw new Error(json.err);
                }
                this.setData(json.ok, false);
                return this;
            });
        }
        else {
            throw new Error("Unhandled datasource " + JSON.stringify(this.config.dataSource));
        }
    }
    refreshSelectionChecks() {
        this.listBox._data.forEach(d => {
            d['__selected'] = this.selectedRows.has(d['*key']);
        });
        this.listBox.refresh();
    }
    setRowSelected(rowNum, selected) {
        if (selected) {
            this.selectedRows.add(rowNum);
        }
        else {
            this.selectedRows.delete(rowNum);
        }
        this.listBox.selection = this.getSelectedRows();
        this.refreshSelectionChecks();
    }
    setAllRowsSelected(selected) {
        if (selected) {
            this.selectedRows = new Set(this.data.map((_, i) => i));
        }
        else {
            this.selectedRows.clear();
        }
        this.listBox.selection = this.getSelectedRows();
        this.refreshSelectionChecks();
    }
    getSelectedRows() {
        return Array.from(this.selectedRows);
    }
    isRowSelected(rowNum) {
        return this.selectedRows.has(rowNum);
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
        let count = document.getElementById(this.obj.dialogId + "_RECORD_COUNT");
        if (count) {
            count.innerHTML = "Records: " + this.listBox._state.recordCount;
        }
    }
    populateListBox() {
        this.listBox.populate(jQuery.extend(true, [], this.data));
        this.listBox._refreshStateMessages();
        for (const f of this.onRender) {
            f();
        }
        this.listBox.refresh();
        this.listBox.resize();
        this.updateRecordCount();
    }
    buildList() {
        this.listBox = new A5.ListBox(this.containerId, [], this.settings);
        this.listBox._hostComponentId = this.obj.dialogId;
        //this.listBox._listSystemOnClickPopulateJSONForm = (rowNum: number) => this.buildDetailViewForm(rowNum);
        this.listBox._listSystemOnClickPopulateJSONForm = (rowNum) => { };
        window[this.obj.dialogId + '.V.R1.' + this.listBox.listVariableName + 'Obj'] = this.listBox;
        this.obj._controlInst['R1.' + LIST_NAME] = this.listBox;
    }
    setFormDetailView(form) {
        this.detailView = form;
        this.detailView.formBox._listDetailView = (mode) => {
        };
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
        let buildFromInstance = (instance) => {
            if (typeof instance !== 'object') {
                return { tag: 'rawData', jsType: typeof instance };
            }
            else if (instance instanceof Array) {
                if (instance.length == 0) {
                    return { tag: 'array', elem: { tag: 'none' } };
                }
                let s1 = buildFromInstance(instance[0]);
                for (let i = 1; i < instance.length; i++) {
                    deepAssign(s1, buildFromInstance(instance[i]));
                }
                return { tag: 'array', elem: s1 };
            }
            else {
                let keys = {};
                for (const key in instance) {
                    keys[key] = buildFromInstance(instance[key]);
                }
                return { tag: 'object', keys: keys };
            }
        };
        this.schema = buildFromInstance(this.rawData[0]);
        for (let i = 0; i < this.rawData.length; i++) {
            deepAssign(this.schema, buildFromInstance(this.rawData[i]));
        }
    }
    mapRawSchema(s) {
        s.jsonOutput.column.forEach((item) => this.schema[item.name] = { alphaType: item.alphaType });
    }
    fetchSchema() {
        var _a;
        this.schema = { tag: 'none' };
        if (this.config.dataSource.type == 'sql' && 'table' in this.config.dataSource) {
            return getSchema(this.obj, this.config.dataSource.table, (_a = this.config.dataSource.connectionString) !== null && _a !== void 0 ? _a : 'conn').then(() => {
                let response = this.obj.stateInfo.apiResult;
                if ('err' in response) {
                    throw new Error(response.err);
                }
                this.mapRawSchema(JSON.parse(response.ok));
                return this;
            });
        }
        this.buildSchemaFromRawData();
        return Promise.resolve(this);
    }
}
class DataScopeManager {
    constructor() {
        this.expandedIdxToRawIdx = {};
    }
    static lookupMapping(name, config) {
        for (const mapping of config.mappings) {
            if (mapping.tag == 'data' && mapping.flattenedName == name)
                return mapping;
        }
        throw new Error("No mapping " + name);
    }
    static getDetailViewMappings(config) {
        let traverse = (s) => {
            if (s.tag == 'data' && s.inDetailView)
                return s;
            else if (s.tag == 'array' || s.tag == 'object')
                return traverse(s.item);
            return null;
        };
        let out = [];
        for (const mapping of config.mappings) {
            if (mapping.tag == 'data' && mapping.inDetailView)
                out.push({ mapping, key: mapping.flattenedName });
            else if (mapping.tag == 'nested') {
                let x = traverse(mapping.mapping);
                if (x)
                    out.push({ mapping: x, key: mapping.key });
            }
        }
        return out;
    }
    static getDataMappings(config) {
        let traverse = (s) => {
            if (s.tag == 'data')
                return s;
            return traverse(s.item);
        };
        return config.mappings.map(x => x.tag == 'nested' ? traverse(x.mapping) : x);
    }
    flattenData(data, config) {
        let result = [];
        data.forEach((dataPoint, originalIndex) => {
            let n1 = result.length;
            let toExpand = [];
            for (const mapping of config.mappings) {
                let key = (mapping.tag == 'nested') ? mapping.key : mapping.flattenedName;
                let flatName = (mapping.tag == 'nested') ? this.flatName(mapping.mapping) : mapping.flattenedName;
                if (key in dataPoint) {
                    let items = this._flattenPoint(dataPoint, mapping);
                    dataPoint[flatName] = items;
                    toExpand.push(flatName);
                }
            }
            result.push(...this.explodeObject(dataPoint, toExpand));
            let n2 = result.length;
            for (let i = n1; i < n2; i++) {
                this.expandedIdxToRawIdx[i] = originalIndex;
            }
        });
        return result;
    }
    explodeObject(obj, keys) {
        if (keys.length == 0)
            return [obj];
        let toExplode = {};
        for (const key in obj) {
            if (keys.includes(key)) {
                toExplode[key] = obj[key];
                delete obj[key];
            }
        }
        let out = [];
        for (const key in toExplode) {
            let points = toExplode[key];
            if (out.length == 0) {
                out = points;
                continue;
            }
            let newOut = [];
            for (const point of points) {
                for (const elem of out) {
                    let eCpy = jQuery.extend(true, {}, elem);
                    Object.assign(eCpy, point);
                    newOut.push(eCpy);
                }
            }
            out = newOut;
        }
        for (let elem of out) {
            let pCpy = jQuery.extend(true, {}, obj);
            Object.assign(elem, pCpy);
        }
        return out;
    }
    _flattenPoint(point, mapping) {
        if (mapping.tag == 'data') {
            let p = {};
            p[mapping.flattenedName] = point[mapping.flattenedName];
            return [p];
        }
        else {
            return this.flattenSubPoint(point[mapping.key], mapping.mapping);
        }
    }
    flatName(s) {
        if (s.tag == 'data')
            return s.flattenedName;
        if (s.tag == 'array')
            return this.flatName(s.item);
        return this.flatName(s.item);
    }
    flattenSubPoint(point, sub) {
        if (sub.tag == 'data')
            return [point];
        else if (sub.tag == 'array') {
            let out = [];
            for (const elem of point) {
                out.push(...this.flattenSubPoint(elem, sub.item));
            }
            return out;
        }
        else {
            let expandedSub = this.flattenSubPoint(point[sub.key], sub.item);
            let out = [];
            let newKey = this.flatName(sub);
            for (const elem of expandedSub) {
                let pointCpy = jQuery.extend(true, {}, point);
                delete pointCpy[sub.key];
                pointCpy[newKey] = elem;
                out.push(pointCpy);
            }
            return out;
        }
    }
    getSearchableColumns(config) {
        var _a, _b;
        let traverse = (m, quantifiable, key) => {
            var _a, _b, _c;
            if (m.tag == 'data' && m.editType != 'json') {
                let name = (_a = m.flattenedName) !== null && _a !== void 0 ? _a : key;
                return {
                    displayName: (_b = m.displayName) !== null && _b !== void 0 ? _b : name,
                    columnName: name,
                    quantifiable: quantifiable,
                    editType: (_c = m.editType) !== null && _c !== void 0 ? _c : 'text',
                    mapping: m
                };
            }
            else if (m.tag == 'array') {
                return traverse(m.item, true, key);
            }
            else if (m.tag == 'object') {
                return traverse(m.item, quantifiable, m.key);
            }
            return undefined;
        };
        let arr = [];
        for (const mapping of config.mappings) {
            if (mapping.tag == 'data' && mapping.editType != 'json') {
                arr.push({
                    displayName: (_a = mapping.displayName) !== null && _a !== void 0 ? _a : mapping.flattenedName,
                    columnName: mapping.flattenedName,
                    quantifiable: false,
                    editType: (_b = mapping.editType) !== null && _b !== void 0 ? _b : 'text',
                    mapping: mapping
                });
            }
            else if (mapping.tag == 'nested') {
                let x = traverse(mapping.mapping, false, mapping.key);
                if (x)
                    arr.push(x);
            }
        }
        return arr;
    }
}
function mappingToInput(list, m, key) {
    var _a, _b, _c, _e, _f, _g;
    let mapping;
    if (m.tag == 'data')
        mapping = m;
    else {
        let traverse = (s) => {
            if (s.tag == 'data')
                return s;
            return traverse(s.item);
        };
        mapping = traverse(m.mapping);
    }
    let value = {
        type: 'simple',
        options: {
            type: 'string',
            label: '',
            readonly: (_a = mapping.readOnly) !== null && _a !== void 0 ? _a : false,
        }
    };
    switch ((_b = mapping.editType) !== null && _b !== void 0 ? _b : 'text') {
        case 'number':
            value.options.type = 'number';
            value.options.default = 0;
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
                list.listBox._data.forEach((d) => {
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
                    default: '',
                    dropdownItems: choices.map(c => { return { value: c, text: c }; }),
                    allowCustomValue: mapping.dropdownConfig.allowCustom
                }
            };
            break;
        case 'bool':
            value.options.type = 'boolean';
            value.options.default = false;
            break;
        case 'time':
        case 'datetime':
            value.options.type = 'datetime';
            value.options.dateFmt = (_c = mapping.serverDateFormat) !== null && _c !== void 0 ? _c : listBuilder_DEFAULT_DATETIME_FMT;
            value.options.default = new Date();
            break;
        case 'text':
            value.options.default = '';
            break;
        case 'json': {
            let makeForm = (j, fullPath) => {
                if (j.tag == 'data') {
                    return {
                        type: 'simple',
                        options: {
                            label: fullPath.join('.'),
                            type: j.dataType,
                            default: makeObviousJsonDefault(j, false)
                        }
                    };
                }
                else if (j.tag == 'array') {
                    return {
                        type: 'array',
                        options: {
                            label: fullPath.join('.'),
                            defaultValue: makeObviousJsonDefault(j.item, false),
                            itemTemplate: makeForm(j.item, [...fullPath, '[...]']),
                        }
                    };
                }
                else {
                    let f = {
                        type: 'object',
                        options: {
                            requiredKeys: {},
                            label: fullPath.join('.'),
                        }
                    };
                    for (const key in j.keys) {
                        f.options.requiredKeys[key] = makeForm(j.keys[key], [...fullPath, key]);
                    }
                    return f;
                }
            };
            let jConfig = (_e = mapping.jsonConfig) !== null && _e !== void 0 ? _e : { editorType: 'form', definition: { tag: 'data', dataType: 'string' } };
            if (jConfig.editorType == 'form') {
                value = makeForm(jConfig.definition, [mapping.flattenedName || key]);
            }
            else {
                value.options.textarea = true;
                value.options.default = JSON.stringify(makeObviousJsonDefault(jConfig.definition, true), undefined, '\t');
                value.options.type = 'json';
            }
        }
    }
    let name = (_f = mapping.flattenedName) !== null && _f !== void 0 ? _f : key;
    value.options.label = (_g = mapping.displayName) !== null && _g !== void 0 ? _g : name;
    return value;
}
function makeObviousDefault(m) {
    var _a, _b, _c;
    let mapping;
    if (m.tag == 'data')
        mapping = m;
    else {
        let traverse = (s) => {
            if (s.tag == 'data')
                return s;
            return traverse(s.item);
        };
        mapping = traverse(m.mapping);
    }
    switch ((_a = mapping.editType) !== null && _a !== void 0 ? _a : 'text') {
        case "number":
            return 0;
        case "bool":
            return false;
        case "time":
        case "datetime":
            return new Date();
        case "text":
        case "dropdown":
            return '';
        case 'json': {
            return makeObviousJsonDefault((_c = (_b = mapping.jsonConfig) === null || _b === void 0 ? void 0 : _b.definition) !== null && _c !== void 0 ? _c : { tag: 'data', dataType: 'string' }, false);
        }
    }
}
function makeObviousJsonDefault(j, fillArray) {
    if (j.tag == 'data') {
        switch (j.dataType) {
            case 'string': return '';
            case 'number': return 0;
            case 'boolean': return false;
        }
    }
    else if (j.tag == 'array') {
        if (fillArray)
            return [makeObviousJsonDefault(j.item, fillArray)];
        return [];
    }
    else {
        let defaultVal = {};
        for (const key in j.keys) {
            defaultVal[key] = makeObviousJsonDefault(j.keys[key], fillArray);
        }
        return defaultVal;
    }
}
// Convert raw data -> usable data
// Usable data -> raw data
class DataBridge {
    constructor(config) {
        this.config = config;
        this.dateConverters = {};
        this.numConverters = {};
        this.boolConverters = {};
        this.jsonConverters = {};
    }
    processDate(key, date, format) {
        if (key in this.dateConverters) {
            return this.dateConverters[key].process(date);
        }
        if (date instanceof Date) {
            let converter = {
                process: (d) => d,
                unprocess: (d) => d,
            };
            this.dateConverters[key] = converter;
            return converter.process(date);
        }
        else {
            let converter = {
                process: (d) => {
                    let date = new Date();
                    date.fromFormat(d.toString(), format);
                    return date;
                },
                unprocess: (d) => {
                    return d.toFormat(format);
                }
            };
            this.dateConverters[key] = converter;
            return converter.process(date);
        }
    }
    unprocessDate(key, date) {
        if (key in this.dateConverters)
            return this.dateConverters[key].unprocess(date);
        return date;
    }
    processBool(key, b) {
        if (key in this.boolConverters)
            return this.boolConverters[key].process(b);
        if (typeof b == 'string') {
            this.boolConverters[key] = {
                process: n => $u.s.toBool(n),
                unprocess: n => n.toString()
            };
            return $u.s.toBool(b);
        }
        return b;
    }
    unprocessBool(key, b) {
        if (key in this.boolConverters)
            return this.boolConverters[key].unprocess(b);
        return b;
    }
    processNum(key, n) {
        if (key in this.numConverters)
            return this.numConverters[key].process(n);
        if (typeof n == 'string') {
            this.numConverters[key] = {
                process: n => $u.s.toNum(n),
                unprocess: n => n.toString()
            };
            return $u.s.toNum(n);
        }
        return n;
    }
    unprocessNum(key, n) {
        if (key in this.numConverters)
            return this.numConverters[key].unprocess(n);
        return n;
    }
    processJSON(key, data) {
        if (key in this.jsonConverters)
            return this.jsonConverters[key].process(data);
        if (typeof data == 'string') {
            this.jsonConverters[key] = {
                process: d => JSON.parse(d),
                unprocess: d => JSON.stringify(d)
            };
            return JSON.parse(data);
        }
        return data;
    }
    unprocessJSON(key, data) {
        if (key in this.jsonConverters)
            return this.jsonConverters[key].unprocess(data);
        return data;
    }
    rawToProcessed(d) {
        let data = jQuery.extend(true, [], d);
        data.forEach(x => {
            for (const mapping of this.config.mappings) {
                if (mapping.tag == 'data' && mapping.flattenedName in x) {
                    x[mapping.flattenedName] = this._processPoint(x[mapping.flattenedName], mapping, mapping.flattenedName);
                }
                else if (mapping.tag == 'nested' && mapping.key in x) {
                    x[mapping.key] = this._processSubMapping(x[mapping.key], mapping.mapping, mapping.key);
                }
            }
        });
        return data;
    }
    processedToRaw(d) {
        let data = jQuery.extend(true, [], d);
        data.forEach(x => {
            for (const mapping of this.config.mappings) {
                if (mapping.tag == 'data' && mapping.flattenedName in x) {
                    x[mapping.flattenedName] = this._unprocessPoint(x[mapping.flattenedName], mapping, mapping.flattenedName);
                }
                else if (mapping.tag == 'nested' && mapping.key in x) {
                    x[mapping.key] = this._unprocessSubmapping(x[mapping.key], mapping.mapping, mapping.key);
                }
            }
        });
        return data;
    }
    _processPoint(point, mapping, key) {
        var _a, _b;
        let name = (_a = mapping.flattenedName) !== null && _a !== void 0 ? _a : key;
        if (mapping.editType == 'datetime' || mapping.editType == 'time') {
            return this.processDate(name, point, (_b = mapping.serverDateFormat) !== null && _b !== void 0 ? _b : listBuilder_DEFAULT_DATETIME_FMT);
        }
        else if (mapping.editType == 'bool' && typeof point == 'string') {
            return this.processBool(name, point);
        }
        else if (mapping.editType == 'number' && typeof point == 'string') {
            return this.processNum(name, point);
        }
        else if (mapping.editType == 'json' && typeof point == 'string') {
            return this.processJSON(name, point);
        }
        return point;
    }
    _processSubMapping(point, mapping, key) {
        if (mapping.tag == 'data')
            return this._processPoint(point, mapping, mapping.flattenedName);
        else if (mapping.tag == 'array') {
            point = this.processJSON(key, point);
            for (let i = 0; i < point.length; i++) {
                point[i] = this._processSubMapping(point[i], mapping.item, key + '_ARRAY_ITEM_');
            }
            return point;
        }
        else {
            point = this.processJSON(key, point);
            if (mapping.key in point) {
                point[mapping.key] = this._processSubMapping(point[mapping.key], mapping.item, key + '.' + mapping.key);
            }
            return point;
        }
    }
    _unprocessPoint(point, mapping, key) {
        var _a;
        let name = (_a = mapping.flattenedName) !== null && _a !== void 0 ? _a : key;
        if (mapping.editType == 'datetime' || mapping.editType == 'time') {
            return this.unprocessDate(name, point);
        }
        else if (mapping.editType == 'bool') {
            return this.unprocessBool(name, point);
        }
        else if (mapping.editType == 'number') {
            return this.unprocessNum(name, point);
        }
        else if (mapping.editType == 'json') {
            return this.unprocessJSON(name, point);
        }
        return point;
    }
    _unprocessSubmapping(point, sub, key) {
        if (sub.tag == 'data')
            return this._unprocessPoint(point, sub, key);
        else if (sub.tag == 'array') {
            for (let i = 0; i < point.length; i++) {
                point[i] = this._unprocessSubmapping(point[i], sub.item, key + '_ARRAY_ITEM_');
            }
            return this.unprocessJSON(key, point);
        }
        else {
            if (sub.key in point) {
                point[sub.key] = this._unprocessSubmapping(point[sub.key], sub.item, key + '.' + sub.key);
            }
            return this.unprocessJSON(key, point);
        }
    }
}
class DynamicListSearch {
    constructor(dynamicList, obj, contId) {
        this.guides = {
            "layouts": {
                "flex-label": "<div style=\"display: flex; width: 100%;\"><div style=\"flex: 1 1;\">{label}</div><div >{content}</div></div>{error}{description}",
                "label-float-above": { draw: function (dObj) { var l = dObj.item.def.sys.item.layout.settings; if (dObj.item.isNull)
                        return '<div style="position: relative;"><div float-state="1" style="position: absolute; top: 0px; left: 0px; right: 0px; height: 100%;"><div style="position: absolute; top: 50%; transform: translate(0px,-50%);">{label}</div></div>{content}</div><div>{error}</div><div>{description}</div>';
                    else
                        return '<div style="position: relative;"><div float-state="2" style="position: absolute; top: -' + l.size + '; left: 0px; right: 0px; height: ' + l.size + ';' + l.style + '"><div style="position: absolute; top: 50%; transform: translate(0px,-50%);">{label}</div></div>{content}</div><div>{error}</div><div>{description}</div>'; }, settings: { size: '14px', style: '', duration: 300 }, handle: { focus: function (dObj) { var e = this.getElements(dObj.item.path.def); if (e) {
                            e = e[0].children[0].children[0];
                            if (e && e.getAttribute('float-state') == '1') {
                                var l = dObj.item.def.sys.item.layout.settings;
                                e.setAttribute('float-state', '2');
                                if (dObj.item.isNull) {
                                    if (l.style != '')
                                        A5.u.element.style(e, '+=' + l.style);
                                    A5.u.element.transition(e, { from: { top: '0px', height: '100%' }, to: { top: '-' + l.size, height: l.size }, duration: l.duration });
                                }
                            }
                        } }, blur: function (dObj) { var e = this.getElements(dObj.item.path.def); if (e) {
                            e = e[0].children[0].children[0];
                            if (e && e.getAttribute('float-state') == '2') {
                                var l = dObj.item.def.sys.item.layout.settings;
                                e.setAttribute('float-state', '1');
                                if (dObj.item.isNull) {
                                    if (l.style != '')
                                        A5.u.element.style(e, '-=' + l.style);
                                    A5.u.element.transition(e, { from: { top: '-' + l.size, height: l.size }, to: { top: '0px', height: '100%' }, duration: l.duration });
                                }
                            }
                        } } } },
            }
        };
        this.list = dynamicList;
        this.obj = obj;
        this.dynamicDropdowns = [];
        this.formContainerId = obj.getPointer(contId).id;
        this.form = new DynamicForm(this.obj, this.formContainerId, this.buildForm(), [this.makeButtons()]);
        this.resetForm();
    }
    resetForm() {
        this.form.populate(this.list.config.searchOptions.advancedSearch ? [] : {});
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
    buildForm() {
        this.setListSearchFns();
        if (this.list.config.searchOptions.advancedSearch) {
            return this.buildAdvancedSearch();
        }
        else {
            return this.buildSimpleSearch();
        }
    }
    makeSearchFilters() {
        if (this.list.config.searchOptions.advancedSearch) {
            let d = this.form.serialize();
            return d.map(x => {
                x.columnVal = {
                    tag: 'value',
                    value: x.columnVal
                };
                return x;
            });
        }
        let d = this.form.serialize();
        let filters = [];
        Object.entries(d).forEach(([colName, v]) => {
            if (v && v != "") {
                let f = {
                    columnVal: {
                        tag: 'value',
                        value: v
                    },
                    columnName: colName,
                    connector: "OR",
                    op: '=',
                };
                filters.push(f);
            }
        });
        return filters;
    }
    buildSimpleSearch() {
        let cols = this.list.dataScopeManager.getSearchableColumns(this.list.config);
        let form = {
            type: 'object',
            options: {
                label: 'Search List',
                requiredKeys: {}
            },
        };
        for (const col of cols) {
            if (this.list.config.searchOptions.onlyInclude) {
                if (!this.list.config.searchOptions.onlyInclude.includes(col.columnName))
                    continue;
            }
            if (this.list.config.searchOptions.onlyExclude) {
                if (this.list.config.searchOptions.onlyExclude.includes(col.columnName))
                    continue;
            }
            form.options.requiredKeys[col.displayName] = mappingToInput(this.list, col.mapping, col.columnName);
        }
        return form;
    }
    buildAdvancedSearch() {
        let cols = this.list.dataScopeManager.getSearchableColumns(this.list.config).filter(x => {
            if (this.list.config.searchOptions.onlyInclude) {
                if (!this.list.config.searchOptions.onlyInclude.includes(x.columnName))
                    return false;
            }
            if (this.list.config.searchOptions.onlyExclude) {
                if (this.list.config.searchOptions.onlyExclude.includes(x.columnName))
                    return false;
            }
            return true;
        });
        let definitions = {};
        let defaults = [];
        for (const col of cols) {
            let defaultVal = makeObviousDefault(col.mapping);
            let def = {
                type: 'object',
                options: {
                    label: col.displayName,
                    requiredKeys: {
                        columnName: {
                            type: 'const',
                            options: {
                                label: '',
                                value: col.columnName
                            }
                        },
                        connector: {
                            type: 'dropdown',
                            options: {
                                label: 'Connector',
                                dropdownItems: [
                                    { text: 'And', value: 'AND' },
                                    { text: 'Or', value: 'OR' }
                                ],
                                display: (form) => {
                                    var _a;
                                    let d = form;
                                    let multi = (_a = d.parent) === null || _a === void 0 ? void 0 : _a.parent;
                                    let arr = multi.parent;
                                    return arr.entries[0].form !== multi;
                                }
                            }
                        },
                        op: {
                            type: 'dropdown',
                            options: {
                                dropdownItems: [
                                    {
                                        text: 'Equal To',
                                        value: '='
                                    },
                                    {
                                        text: 'Not Equal To',
                                        value: '<>'
                                    },
                                ],
                                label: 'Operator'
                            }
                        },
                        columnVal: mappingToInput(this.list, col.mapping, col.columnName)
                    }
                }
            };
            if (col.editType == 'text') {
                def.options.requiredKeys.op.options.dropdownItems.push({
                    text: 'Starts With',
                    value: "x.."
                }, {
                    text: 'Ends With',
                    value: "..x"
                }, {
                    text: 'Includes',
                    value: '..x..'
                });
            }
            else {
                def.options.requiredKeys.op.options.dropdownItems.push({
                    text: 'Less Than',
                    value: '<'
                }, {
                    text: 'Greater Than',
                    value: '>'
                }, {
                    text: 'Less Than or Equal To',
                    value: '<='
                }, {
                    text: 'Greater Than or Equal To',
                    value: '>='
                });
            }
            if (col.quantifiable) {
                def.options.requiredKeys['quantifier'] = {
                    type: 'dropdown',
                    options: {
                        label: 'Nested Datagroup Satisfies',
                        dropdownItems: [
                            { text: 'All', value: 'ALL' },
                            { text: 'Some', value: 'SOME' }
                        ]
                    }
                };
            }
            let defaultObj = {
                columnVal: defaultVal,
                connector: 'AND',
                op: '=',
                columnName: col.columnName
            };
            if (col.quantifiable) {
                defaultObj['quantifier'] = 'SOME';
            }
            defaults.push(defaultObj);
            definitions[col.columnName] = {
                defaultValue: defaultObj,
                definition: def
            };
        }
        let form = {
            type: 'array',
            options: {
                label: 'Advanced List Search',
                defaultValue: defaults[0],
                itemTemplate: {
                    type: 'multi',
                    options: {
                        label: 'Search Parameter',
                        definitions: definitions
                    }
                }
            }
        };
        return form;
    }
    makeButtons() {
        return {
            type: 'group',
            items: [
                {
                    type: 'button',
                    control: {
                        html: `<span class="dynamic-form-search-btn">Search</span>`,
                        onClick: () => {
                            this.list.listBox.searchList({ searchMode: 'auto', queryData: this.makeSearchFilters() });
                            this.obj._functions.search.onSearch();
                        },
                    }
                },
                {
                    type: 'button',
                    control: {
                        html: `<span class="dynamic-form-clear-btn">Clear</span>`,
                        onClick: () => {
                            this.list.listBox.clearSearchList({ searchMode: 'auto' });
                            this.obj._functions.search.onClear();
                        }
                    }
                },
            ],
            container: {
                className: 'dynamic-search-buttons',
                style: `
                    display: flex;
                    flex-direction: row;
                    gap: 0.5rem;
                `,
            }
        };
    }
    serverOrClientSearch(o) {
        let obj = typeof o != 'undefined' ? o : {};
        let mode = 'serverside';
        if (!(this.list.config.searchOptions.serverSearch))
            mode = 'clientside';
        return mode;
    }
    setListSearchFns() {
        let allSearchCols = this.list.dataScopeManager.getSearchableColumns(this.list.config);
        if (this.list.listBox.searchList)
            return;
        this.list.listBox.searchList = (x) => {
            var _a;
            ((_a = this.obj.stateInfo.onSearchCallbacks) !== null && _a !== void 0 ? _a : []).forEach((f) => f(this));
            let obj = typeof x != 'undefined' ? x : {};
            let mode = this.serverOrClientSearch(x);
            let flagDirty = false;
            if (this.list.listBox.listIsDirty)
                flagDirty = this.list.listBox.listIsDirty();
            let flagResult = this.obj._list_executeEvent(this.list.listBox.listVariableName, 'beforeSearch', { searchMode: 'search', searchWhere: mode, listIsDirty: flagDirty });
            if (!flagResult)
                return false;
            if (!obj.queryData)
                obj = undefined;
            if (mode == 'serverside') {
                this.list.listBox._searchListServerSide(obj);
            }
            else if (mode == 'clientside') {
                this.list.listBox._searchPartSubmit_clientSideFilter(obj);
                let rowCount = this.list.listBox._rData.length;
                this.obj._list_executeEvent(this.list.listBox.listVariableName, 'afterSearchComplete', { searchMode: 'search', searchWhere: mode, recordsInQuery: rowCount });
            }
            this.list.listBox._state.recordCount = this.list.listBox._rData.length;
            this.list.updateRecordCount();
        };
        this.list.listBox._searchPartSubmit_clientSideFilter = (searchObj) => {
            this.list.listBox._state.highlight = {};
            let map = this.list.listBox._searchPart.fieldMap;
            let val = '';
            let expn = [];
            let expn_i = '';
            let obj = {};
            let obj_i = {};
            let ac = [];
            let aco = {};
            let _highlight = {};
            let values = [];
            allSearchCols.forEach((colDefn, i) => {
                let val;
                if (!searchObj) {
                    val = this.obj.getValue(map[i].control);
                    if (val != undefined && val != '')
                        values.push({ index: i, item: val, name: colDefn.columnName });
                }
                else {
                    for (const e of searchObj.queryData) {
                        if (e.columnName == map[i].field)
                            values.push({ index: i, item: e, name: colDefn.columnName });
                    }
                }
            });
            for (let i = 0; i < values.length; i++) {
                let v = values[i];
                let val;
                if (v.item.columnVal)
                    val = v.item.columnVal.value;
                else
                    val = v.item;
                obj_i = this.list.listBox._searchFieldOptions[v.name];
                this.list.listBox._setSearchOps(obj, obj_i);
                let strVal = val.toString();
                if (typeof val === 'string')
                    strVal = this.list.listBox._str(val);
                // We want to compare the string version of dates so we don't get mixed up with precision.
                if (val instanceof Date)
                    strVal = this.list.listBox._str(val.toFormat(listBuilder_DEFAULT_DATETIME_FMT));
                if (v.item.op)
                    obj['op'] = v.item.op;
                if (v.item.quantifier)
                    obj['quantifier'] = v.item.quantifier;
                expn_i = 'this._match(data,' + this.list.listBox._str(v.name) + ',' + strVal + ',' + JSON.stringify(obj) + ')';
                expn.push(expn_i);
                if (i < values.length - 1) {
                    let next = values[i + 1];
                    if (next.item.connector == 'AND')
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
            this.list.searchMemoizationNeedsRebuild = true;
            this.list.listBox.setFilter(searchFn);
        };
        this.list.listBox._setSearchOps = function (obj, obj_i) {
            obj.mode = obj_i.option;
            obj.qbf = obj_i.qbf;
            obj.type = obj_i.type;
            obj.dateFormat = obj_i.dateFormat;
        };
        this.list.listBox._searchListServerSide = (searchObj) => {
            let flagDirty = false;
            if (this.list.listBox.listIsDirty)
                flagDirty = this.list.listBox.listIsDirty();
            if (flagDirty) {
                alert('Cannot search because List has edits that have not yet been synced');
                return false;
            }
            let filters = searchObj.queryData;
            filters.forEach(e => {
                if (e.columnVal instanceof Date) {
                    let m = DataScopeManager.lookupMapping(e.columnName, this.list.config);
                    e.columnVal = e.columnVal.toFormat('serverDateFormat' in m ? m.serverDateFormat : listBuilder_DEFAULT_DATETIME_FMT);
                }
            });
            this.list.setFilterAndFetch(filters);
        };
        this.list.listBox.clearSearchList = (_obj) => {
            var _a;
            this.resetForm();
            ((_a = this.obj.stateInfo.onClearSearchCallbacks) !== null && _a !== void 0 ? _a : []).forEach((f) => f(this));
            let mode = this.serverOrClientSearch(_obj);
            let flagResult = this.obj._list_executeEvent(this.list.listBox.listVariableName, 'beforeSearch', { searchMode: 'clear', searchWhere: mode });
            if (!flagResult)
                return false;
            this.list.listBox.setFilter(false);
            if (mode == 'serverside') {
                this.list.listBox._clearSearchListServerSide();
            }
            else if (mode == 'clientside') {
                this.list.listBox._searchPartSubmit_clientSideFilterClear();
                let rowCount = this.list.listBox._rData.length;
                this.obj._list_executeEvent(this.list.listBox.listVariableName, 'afterSearchComplete', { searchMode: 'clear', searchWhere: mode, recordsInQuery: rowCount });
            }
        };
        this.list.listBox._clearSearchListServerSide = () => {
            this.list.setFilterAndFetch([]);
            this.obj._setDVClean(this.list.listBox);
        };
        this.list.listBox._searchPartSubmit_clientSideFilterClear = () => {
            if (!this.list.listBox._searchPartHas)
                return true;
            this.list.listBox._state.highlight = {};
            this.list.listBox.setFilter(false);
            this.list.listBox.setFilter(false);
            delete this.list.listBox.__queryByFormValues;
            this.obj._setDVClean(this.list.listBox);
        };
        this.list.listBox._searchPartHas = true;
        this.list.listBox._searchPart = {};
        this.list.listBox._searchFieldOptions = {};
        this.list.listBox._searchPart.fieldMap = [];
        for (const col of this.list.dataScopeManager.getSearchableColumns(this.list.config)) {
            this.list.listBox._searchPart.fieldMap.push({
                control: 'SearchForm::' + col.columnName,
                field: col.columnName,
                dateFormat: listBuilder_DEFAULT_DATETIME_FMT
            });
            this.list.listBox._searchFieldOptions[col.columnName] = {
                option: 2,
                qbs: true,
                searchField: col.columnName,
                type: col.editType,
                dateFormat: listBuilder_DEFAULT_DATETIME_FMT
            };
        }
    }
}

;// ./src/formBuilder.ts

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
            format: DEFAULT_DATETIME_FMT,
        };
        this.control.behavior = {
            show: { mode: '' }
        };
        this.format = function (v, dObj) {
            if (v) {
                var fmtIn = DEFAULT_DATETIME_FMT;
                var fmtOut = format ? format : DEFAULT_DATETIME_FMT;
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
            format: DEFAULT_DATETIME_FMT,
        };
        this.control.behavior = {
            show: { mode: '' }
        };
        this.format = function (v, dObj) {
            if (v) {
                var fmtIn = DEFAULT_DATETIME_FMT;
                var fmtOut = format ? format : DEFAULT_DATETIME_FMT;
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

;// ./src/formComponents.ts

function templateHelper(colNames, label) {
    return {
        type: 'simple',
        options: {
            label: label,
            type: 'string',
            textarea: true,
            postInputItems: (form) => [
                {
                    type: 'button',
                    control: {
                        html: `<p>Add Template Item</p>`,
                        onClick: (_, btn) => {
                            let popup = templateHelperHTML(form, colNames);
                            popup.style.position = 'absolute';
                            let rect = btn.getBoundingClientRect();
                            popup.style.left = `${rect.width + 20}px`;
                            popup.style.top = `0px`;
                            btn.appendChild(popup);
                            btn.addEventListener('blur', () => {
                                // focusout happens before 
                                // the click handler, apparently.
                                setTimeout(() => {
                                    popup.remove();
                                }, 200);
                            });
                        }
                    }
                }
            ]
        }
    };
}
function templateHelperHTML(form, colNames) {
    let id = uuidv4();
    let templateHelper = document.createElement('div');
    templateHelper.id = id;
    templateHelper.tabIndex = 0;
    let makeItem = (text, onclick) => {
        let d = document.createElement('div');
        d.onmouseenter = () => {
            d.style.backgroundColor = 'lightgray';
        };
        d.onmouseleave = () => {
            d.style.backgroundColor = 'white';
        };
        d.style.margin = "";
        d.innerHTML = `<p style="margin: 0px;">${text}</p>`;
        d.style.padding = "0.5rem";
        d.onclick = onclick;
        return d;
    };
    templateHelper.style.color = 'black';
    templateHelper.style.backgroundColor = 'white';
    templateHelper.style.border = "1px solid black";
    templateHelper.style.textAlign = "left";
    templateHelper.style.width = "200px";
    colNames.forEach(name => {
        templateHelper.appendChild(makeItem('Add field ' + name, () => {
            let curr = form.getValue();
            form.setValue(curr + `{row["${name}"]}`);
        }));
    });
    return templateHelper;
}

;// ./src/listConfiguration.ts
var listConfiguration_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





const CONFIG_CONTAINER_NAME = 'CONFIG_CONTAINER';
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
class FlatNameSuggestor {
    constructor(mappings) {
        this.reservedNames = new Set();
        this.paths = {};
        this.init(mappings);
    }
    init(mappings) {
        let traverse = (s, path) => {
            if (s.tag == "data") {
                this.setName(path, s.flattenedName);
            }
            else if (s.tag == 'object') {
                traverse(s.item, [...path, s.key]);
            }
            else {
                traverse(s.item, path);
            }
        };
        for (const mapping of mappings) {
            if (mapping.tag == 'data') {
                this.setName([mapping.flattenedName], mapping.flattenedName);
            }
            else {
                traverse(mapping.mapping, [mapping.key]);
            }
        }
    }
    lookup(path) {
        let curr = this.paths;
        for (let i = 0; i < path.length; i++) {
            if (typeof curr == 'object' && path[i] in curr)
                curr = curr[path[i]];
            else
                return undefined;
        }
        if (typeof curr == 'string')
            return curr;
        return undefined;
    }
    set(path, value) {
        let curr = this.paths;
        for (let i = 0; i < path.length - 1; i++) {
            if (typeof curr != 'object')
                throw new Error('Bad path: ' + JSON.stringify(path));
            if (!(path[i] in curr))
                curr[path[i]] = {};
            curr = curr[path[i]];
        }
        if (typeof curr != 'object')
            throw new Error('Bad path: ' + JSON.stringify(path));
        let last = path[path.length - 1];
        curr[last] = value;
    }
    suggestName(starter) {
        let s = starter !== null && starter !== void 0 ? starter : "property";
        if (!this.reservedNames.has(s))
            return s;
        let idx = 1;
        let curr = s + '_' + idx;
        while (this.reservedNames.has(curr)) {
            idx += 1;
            curr = s + '_' + idx;
        }
        return curr;
    }
    nameExists(name) {
        return this.reservedNames.has(name);
    }
    setName(path, name) {
        if (path.length == 0)
            throw new Error("Empty path");
        if (this.nameExists(name))
            throw new Error("Name " + name + " already exists");
        this.reservedNames.add(name);
        this.set(path, name);
    }
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
    let response = obj.stateInfo.apiResult;
    if (response.err && !admin) {
        alert('The configuration does not exist or has an error. Log in as an administrator to fix.');
        throw new Error('The configuration does not exist or has an error. Log in as an administrator to fix.');
    }
    else if (response.err) {
        return {
            version: response.err.configVersion,
            name: configName,
            dataSource: {
                type: 'json',
                jsonData: '[]',
            },
            mappings: [],
            searchOptions: {},
            buttons: []
        };
    }
    let ok = response.ok;
    if ('config' in ok)
        return ok.config;
    return ok;
}
function initialize(ops) {
    var _a;
    if (ops.embeddedList === undefined) {
        ops.embeddedList = ops.obj;
    }
    if (ops.embeddedSearch === undefined) {
        ops.embeddedSearch = ops.obj;
    }
    ops.embeddedSearch._functions.search = {
        onSearch: () => {
            ops.obj.runAction('hide docks');
        },
        onClear: () => {
            ops.obj.runAction('hide docks');
        }
    };
    let isAdmin = false;
    return batchFetch(ops.embeddedList, ops.configName, (_a = ops.filters) !== null && _a !== void 0 ? _a : []).then(() => {
        var _a;
        if ((_a = ops.embeddedList.stateInfo.apiResult) === null || _a === void 0 ? void 0 : _a.err) {
            return checkIfAdmin(ops.obj)
                .then(() => {
                var _a;
                if (((_a = ops.obj.stateInfo.apiResult) === null || _a === void 0 ? void 0 : _a.ok) == true) {
                    isAdmin = true;
                }
                else {
                    isAdmin = false;
                }
                if (ops.fallbackConfig) {
                    console.warn("Config does not exist, but fallback was specified.");
                    ops.prefetch = {
                        isAdmin: isAdmin,
                        config: ops.fallbackConfig
                    };
                    return initList(ops);
                }
                else {
                    console.warn("Config prefetch failed -- reverting to slow fetch.");
                    return requestListConfig(ops.obj, ops.configName)
                        .then(() => {
                        let config = tryRecoverConfig(ops.obj, isAdmin, ops.configName);
                        ops.prefetch = {
                            isAdmin: isAdmin,
                            config: config
                        };
                        return initList(ops);
                    });
                }
            });
        }
        else {
            ops.prefetch = ops.embeddedList.stateInfo.apiResult.ok;
            return initList(ops);
        }
    }).then(() => {
        ops.obj.applyConfigChanges = () => {
            DYNAMIC_LIST_LOOKUP[ops.configName].config.applyChanges();
        };
        ops.obj.getDynamicList = () => DYNAMIC_LIST_LOOKUP[ops.configName].list;
        ops.obj.saveConfigGlobally = () => DYNAMIC_LIST_LOOKUP[ops.configName].config.saveConfigGlobally();
        ops.obj.saveConfigUser = () => DYNAMIC_LIST_LOOKUP[ops.configName].config.saveConfigUser();
    });
}
function initList(ops) {
    DynamicList.makeDynamicList({
        obj: ops.embeddedList,
        prefetch: ops.prefetch,
        containerId: ops.listContainerId,
        filters: ops.filters,
        args: ops.args,
        otherProperties: ops.otherProps,
    }).then((list) => {
        let search = new DynamicListSearch(list, ops.embeddedSearch, ops.embeddedSearch.getPointer('SEARCH_CONTAINER').id);
        let nameSuggestor = new FlatNameSuggestor(list.config.mappings);
        DYNAMIC_LIST_LOOKUP[ops.prefetch.config.name] = {
            list: list,
            search: search,
            config: ops.obj,
            nameSuggestor
        };
        manageConfigForm({
            obj: ops.obj,
            preFetch: ops.prefetch,
            filters: ops.filters,
            args: ops.args,
            list: list,
            embeddedList: ops.embeddedList,
            listContainerId: ops.listContainerId,
            embeddedSearch: ops.embeddedSearch,
            otherProps: ops.otherProps
        });
    }).catch((err) => {
        if (err instanceof ValidationError) {
            displayErrorMessage(err.toString());
        }
        else {
            displayErrorMessage("There was a fatal error while initializing the list (check logs). Please fix the configuration and reload.");
            console.error(err);
        }
        DYNAMIC_LIST_LOOKUP[ops.prefetch.config.name] = {
            list: undefined,
            search: undefined,
            config: ops.obj,
            nameSuggestor: new FlatNameSuggestor(ops.prefetch.config.mappings)
        };
        manageConfigForm({
            obj: ops.obj,
            preFetch: ops.prefetch,
            filters: ops.filters,
            args: ops.args,
            embeddedList: ops.embeddedList,
            listContainerId: ops.listContainerId,
            list: null,
            embeddedSearch: ops.embeddedSearch,
            otherProps: ops.otherProps
        });
    });
}
function manageConfigForm(ops) {
    let configForm;
    let show;
    let runValidation = (config) => {
        if ('name' in config) {
            // Throws error if names clash
            new FlatNameSuggestor(config.mappings);
            validateConfig(config);
        }
        else {
            let c = config;
            new FlatNameSuggestor(c);
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
    let saveGlobal = () => listConfiguration_awaiter(this, void 0, void 0, function* () {
        try {
            let maybeConfig = (yield configForm).serialize();
            runValidation(maybeConfig);
            maybeConfig = extractRelevantConfig(maybeConfig, true);
            let data = encodeURIComponent(JSON.stringify(maybeConfig));
            ops.obj.ajaxCallback('', '', 'save_config', '', `configName=${ops.preFetch.config.name}&payload=${data}&global=${true}`, {
                onComplete: () => {
                    let res = ops.obj.stateInfo.apiResult;
                    if (res && res.err) {
                        displayErrorMessage(res.err);
                        console.error(res.err);
                    }
                    else {
                        alert('Config saved.');
                    }
                    ops.obj.applyConfigChanges();
                }
            });
        }
        catch (e) {
            displayErrorMessage(e.toString());
            console.error(e);
        }
    });
    let saveUser = () => listConfiguration_awaiter(this, void 0, void 0, function* () {
        try {
            let maybeConfig = (yield configForm).serialize();
            runValidation(maybeConfig);
            maybeConfig = extractRelevantConfig(maybeConfig, false);
            let data = encodeURIComponent(JSON.stringify(maybeConfig));
            ops.obj.ajaxCallback('', '', 'save_config', '', `configName=${ops.preFetch.config.name}&payload=${data}&global=${false}`, {
                onComplete: () => {
                    let res = ops.obj.stateInfo.apiResult;
                    if (res && res.err) {
                        displayErrorMessage(res.err);
                        console.error(res.err);
                    }
                    else {
                        alert('Config saved.');
                    }
                    ops.obj.applyConfigChanges();
                }
            });
        }
        catch (e) {
            displayErrorMessage(e.toString());
            console.error(e);
        }
    });
    configForm = buildConfigForm(ops.obj, ops.preFetch.isAdmin, ops.preFetch.config);
    let populateWith = ops.preFetch.isAdmin ? ops.preFetch.config : ops.preFetch.config.mappings;
    const showError = (e) => {
        console.error(e);
        displayErrorMessage(e.toString());
    };
    show = (configData) => listConfiguration_awaiter(this, void 0, void 0, function* () {
        let config = yield configForm;
        try {
            config.populate(configData);
            let obj = ops.obj;
            obj.saveConfigGlobally = saveGlobal;
            obj.saveConfigUser = saveUser;
            obj.applyConfigChanges = () => {
                var _a;
                let newConfig = config.serialize();
                if (ops.preFetch.isAdmin) {
                    ops.preFetch.config = newConfig;
                }
                else {
                    ops.preFetch.config.mappings = newConfig;
                }
                try {
                    runValidation(newConfig);
                }
                catch (e) {
                    showError(e);
                    return;
                }
                let dynamicItems = (_a = DYNAMIC_LIST_LOOKUP[ops.preFetch.config.name]) !== null && _a !== void 0 ? _a : undefined;
                if (dynamicItems === undefined)
                    return;
                dynamicItems.list.destructor();
                let newSearch;
                let prefetchCopy = jQuery.extend(true, {}, ops.preFetch);
                DynamicList.makeDynamicList({
                    obj: ops.embeddedList,
                    prefetch: prefetchCopy,
                    containerId: ops.listContainerId,
                    filters: ops.filters,
                    args: ops.args,
                    otherProperties: ops.otherProps
                }).then((newList) => {
                    newSearch = new DynamicListSearch(newList, ops.embeddedSearch, ops.embeddedSearch.getPointer('SEARCH_CONTAINER').id);
                    dynamicItems.list = newList;
                    dynamicItems.search = newSearch;
                    dynamicItems.list.reRender(false);
                    config.populate(newConfig);
                }).catch(showError);
            };
        }
        catch (e) {
            showError(e);
        }
    });
    show(populateWith);
}
function buildConfigForm(obj, adminConfig, config) {
    return listConfiguration_awaiter(this, void 0, void 0, function* () {
        let schema = { tag: 'none' };
        if (config.name in DYNAMIC_LIST_LOOKUP && DYNAMIC_LIST_LOOKUP[config.name].list !== undefined) {
            schema = DYNAMIC_LIST_LOOKUP[config.name].list.schema;
        }
        let mappings = buildMappingForm(config.name, adminConfig, schema);
        if (!adminConfig) {
            return new DynamicForm(obj, obj.getPointer(CONFIG_CONTAINER_NAME).id, mappings);
        }
        let form = {
            label: 'List Configuration',
            requiredKeys: {
                version: {
                    type: 'const', options: { value: config.version }
                },
                name: {
                    type: 'simple',
                    options: {
                        type: 'string',
                        label: 'List Name'
                    }
                },
                dataSource: {
                    type: 'supplier',
                    options: {
                        default: { type: 'const', options: { value: '' } },
                        supply(_parent, _data) {
                            let cols = [];
                            if (config.name in DYNAMIC_LIST_LOOKUP) {
                                cols = DataScopeManager.getDataMappings(config).map(x => { var _a; return ({ text: (_a = x.displayName) !== null && _a !== void 0 ? _a : x.flattenedName, value: x.flattenedName }); });
                            }
                            return buildDatasourceForm(cols);
                        },
                    }
                },
                mappings: mappings,
                buttons: yield buildButtonsForm(obj, config),
                searchOptions: buildSearchOptionsForm()
            },
            optionalKeys: {
                multiSelect: {
                    defaultValue: false,
                    definition: {
                        type: 'simple',
                        options: {
                            label: "Allow Multiple Column Selection",
                            type: 'boolean'
                        }
                    },
                    inline: true,
                },
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
        return new DynamicForm(obj, obj.getPointer(CONFIG_CONTAINER_NAME).id, { type: 'object', options: form });
    });
}
function buildMappingForm(configName, isAdmin, schema) {
    var _a;
    let cols = [];
    let nestedCols = [];
    if (schema.tag == 'object') {
        for (const key in schema.keys) {
            cols.push(key);
            let tag = schema.keys[key].tag;
            if (tag == 'array' || tag == 'object')
                nestedCols.push(key);
        }
    }
    let { dataMappingForm, dataMappingDefault } = dataMapping(configName, cols, isAdmin);
    let { nestedMappingForm, nestedDefault } = nestedMapping(configName, isAdmin, [nestedCols[0]], schema.tag == 'object' ? schema.keys[nestedCols[0]] : undefined);
    let nestedOps = {
        nestedDefault,
        nestedMappingForm,
        key: (_a = nestedCols[0]) !== null && _a !== void 0 ? _a : ''
    };
    let tryGetFullPath = (n) => {
        if (n.tag == 'object')
            return [n.key, ...tryGetFullPath(n.item)];
        if (n.tag == 'nested')
            return [n.key, ...tryGetFullPath(n.mapping)];
        if (n.tag == 'array')
            return tryGetFullPath(n.item);
        return [];
    };
    return {
        type: 'array',
        options: {
            label: 'List Mappings',
            defaultValue: dataMappingDefault,
            itemTemplate: {
                type: 'multi',
                options: {
                    label: (_, b) => {
                        if (!b)
                            return '';
                        if ('tag' in b && b.tag == "nested") {
                            return tryGetFullPath(b).join('.');
                        }
                        else if ('tag' in b && b.tag == 'data') {
                            return b.flattenedName;
                        }
                        return '';
                    },
                    definitions: {
                        'Data Mapping': {
                            defaultValue: dataMappingDefault,
                            definition: dataMappingForm
                        },
                        'Nested Mapping': {
                            defaultValue: () => ({
                                tag: 'nested',
                                key: nestedOps.key,
                                mapping: nestedOps.nestedDefault
                            }),
                            definition: () => ({
                                type: 'object',
                                options: {
                                    label: 'Nested Mapping',
                                    requiredKeys: {
                                        tag: {
                                            type: 'const',
                                            options: { value: 'nested' }
                                        },
                                        key: {
                                            type: 'dropdown',
                                            options: {
                                                label: 'From Column',
                                                dropdownItems: nestedCols.map(x => ({ text: x, value: x })),
                                                allowCustomValue: true,
                                                onSelect: (val, form) => {
                                                    if (val) {
                                                        let { nestedMappingForm, nestedDefault } = nestedMapping(configName, isAdmin, [val], schema.tag == 'object' ? schema.keys[val] : undefined);
                                                        nestedOps.nestedMappingForm = nestedMappingForm;
                                                        nestedOps.nestedDefault = nestedDefault;
                                                        nestedOps.key = val;
                                                        let objForm = form.parent;
                                                        let multiForm = objForm.parent;
                                                        multiForm.clearCache();
                                                    }
                                                }
                                            }
                                        },
                                        mapping: () => nestedOps.nestedMappingForm
                                    },
                                    optionalKeys: {
                                        inDetailView: {
                                            defaultValue: false,
                                            definition: {
                                                type: 'simple',
                                                options: {
                                                    label: "In Detail View",
                                                    type: 'boolean'
                                                }
                                            }
                                        }
                                    }
                                }
                            })
                        }
                    }
                }
            }
        }
    };
}
function nestedMapping(configName, isAdmin, fullPath, schema) {
    var _a;
    let dataDefault = {
        tag: 'data',
        flattenedName: 
        // If the schema exists, then we must have been able to pass a key in, so fullPath is good
        schema
            ? DYNAMIC_LIST_LOOKUP[configName].nameSuggestor.suggestName(fullPath[fullPath.length - 1])
            : ''
    };
    let objDefault = {
        tag: 'object',
        key: '',
        item: dataDefault
    };
    let arrDefault = {
        tag: 'array',
        item: dataDefault
    };
    let setDefault = dataDefault;
    if (schema && schema.tag == 'object') {
        let keys = Object.keys(schema.keys);
        let defaultKey = (_a = keys[0]) !== null && _a !== void 0 ? _a : '';
        let { nestedDefault } = nestedMapping(configName, isAdmin, [...fullPath, defaultKey], schema.keys[defaultKey]);
        objDefault = {
            tag: 'object',
            key: defaultKey,
            item: nestedDefault
        };
        setDefault = objDefault;
    }
    else if (schema && schema.tag == 'array') {
        let { nestedDefault } = nestedMapping(configName, isAdmin, fullPath, schema.elem);
        arrDefault.item = nestedDefault;
        setDefault = arrDefault;
    }
    let f = {
        type: 'multi',
        options: {
            label: 'Nested Item Definition',
            definitions: {
                'Object Mapping': {
                    defaultValue: objDefault,
                    definition: {
                        type: 'object',
                        options: {
                            label: 'Object Mapping',
                            requiredKeys: {
                                tag: {
                                    type: 'const',
                                    options: { value: 'object' }
                                },
                                key: {
                                    type: 'dropdown',
                                    options: {
                                        label: 'Object Key',
                                        dropdownItems: ((schema === null || schema === void 0 ? void 0 : schema.tag) == 'object') ? Object.keys(schema.keys).map(x => ({ value: x, text: x })) : [],
                                        allowCustomValue: true,
                                        onSelect: (newKey, d) => {
                                            let parent = d.parent;
                                            let item = parent.getChild('item');
                                            let populateWith = objDefault;
                                            if (schema && schema.tag == 'object' && newKey in schema.keys) {
                                                populateWith = nestedMapping(configName, isAdmin, [...fullPath, newKey], schema.keys[newKey]).nestedDefault;
                                            }
                                            item.rebuild(populateWith);
                                            d.dynForm.refresh();
                                        }
                                    }
                                },
                                item: {
                                    type: "supplier",
                                    options: {
                                        label: 'Key Definition',
                                        default: { type: 'const', options: { value: 0 } },
                                        supply: (parent) => {
                                            let keyForm = parent.getChild('key');
                                            let key = undefined;
                                            if (keyForm) {
                                                key = keyForm.selected;
                                            }
                                            let s = undefined;
                                            if (schema && schema.tag == 'object')
                                                s = schema.keys[key];
                                            if (schema && schema.tag == 'array')
                                                s = schema.elem;
                                            return nestedMapping(configName, isAdmin, [...fullPath, key]).nestedMappingForm;
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                'Array Mapping': {
                    defaultValue: arrDefault,
                    definition: {
                        type: 'object',
                        options: {
                            label: "Array Mapping",
                            requiredKeys: {
                                tag: { type: 'const', options: { value: 'array' } },
                                item: {
                                    type: 'supplier',
                                    options: {
                                        default: { type: 'const', options: { value: '' } },
                                        supply: () => nestedMapping(configName, isAdmin, fullPath, (schema && schema.tag == 'array') ? schema.elem : undefined).nestedMappingForm
                                    }
                                }
                            }
                        }
                    }
                },
                'Data Mapping': {
                    defaultValue: dataDefault,
                    definition: dataMapping(configName, null, isAdmin).dataMappingForm
                }
            }
        }
    };
    return {
        nestedDefault: setDefault,
        nestedMappingForm: f
    };
}
function dataMapping(configName, column, isAdmin) {
    let flatName;
    if (column) {
        flatName = {
            type: 'dropdown',
            options: {
                label: 'Column Name',
                dropdownItems: column.map(x => ({ text: x, value: x })),
                allowCustomValue: true
            }
        };
    }
    else {
        flatName = {
            type: 'simple',
            options: {
                label: "Flattened Column Name",
                type: 'string',
            }
        };
    }
    let f = {
        type: 'object',
        options: {
            label: 'Data Mapping',
            requiredKeys: {
                tag: { type: 'const', options: { value: 'data' } },
                flattenedName: flatName,
            },
            optionalKeys: {
                displayName: {
                    defaultValue: '',
                    definition: {
                        type: 'simple',
                        options: {
                            type: 'string',
                            label: 'Display Name'
                        }
                    }
                },
                readOnly: {
                    defaultValue: false,
                    definition: {
                        type: 'simple',
                        options: {
                            label: "Read Only",
                            type: 'boolean',
                            display: () => isAdmin
                        }
                    }
                },
                inList: {
                    defaultValue: false,
                    definition: { type: 'simple', options: { type: 'boolean', label: 'Display In List' } },
                },
                inDetailView: {
                    defaultValue: false,
                    definition: { type: 'simple', options: { type: 'boolean', label: 'Display In Detail View' } },
                },
                editType: {
                    defaultValue: 'text',
                    definition: editTypeDropdown()
                },
                serverDateFormat: {
                    defaultValue: '',
                    definition: {
                        type: 'simple',
                        options: {
                            type: 'string',
                            label: 'Server Date Format',
                            display: (_, parent) => {
                                var _a;
                                let val = (_a = parent.getChild('editType')) === null || _a === void 0 ? void 0 : _a.selected;
                                if (val === 'datetime')
                                    return true;
                                return false;
                            }
                        },
                    },
                },
                jsonConfig: {
                    defaultValue: { editorType: 'form', definition: { tag: 'object', keys: {} } },
                    definition: {
                        type: 'object',
                        options: {
                            display: (_, parent) => {
                                var _a;
                                if (!parent || !parent.getChild)
                                    return true;
                                let val = (_a = parent.getChild('editType')) === null || _a === void 0 ? void 0 : _a.selected;
                                if (val === 'json')
                                    return true;
                                return false;
                            },
                            label: 'JSON Options',
                            requiredKeys: {
                                definition: {
                                    type: "multi",
                                    options: {
                                        name: "JsonField",
                                        label: "JSON Field Schema",
                                        definitions: {
                                            "Object": {
                                                defaultValue: { tag: 'object', keys: {} },
                                                definition: {
                                                    type: 'object',
                                                    options: {
                                                        label: 'JSON Object Definition',
                                                        requiredKeys: {
                                                            tag: {
                                                                type: 'const', options: { value: 'object' }
                                                            },
                                                            keys: {
                                                                type: 'object',
                                                                options: {
                                                                    label: 'Object Keys',
                                                                    requiredKeys: {},
                                                                    newKeyTemplate: {
                                                                        defaultValue: { tag: 'data', dataType: 'string' },
                                                                        definition: {
                                                                            type: 'recursive',
                                                                            options: { label: (_1, _2, k) => "Key Definition for " + k, recurseOn: 'JsonField' }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        },
                                                    }
                                                }
                                            },
                                            "Array": {
                                                defaultValue: { tag: 'array', item: { tag: 'data', dataType: 'string' } },
                                                definition: {
                                                    type: 'object',
                                                    options: {
                                                        label: "Array Definition",
                                                        requiredKeys: {
                                                            tag: { type: 'const', options: { value: 'array' } },
                                                            item: {
                                                                type: 'recursive',
                                                                options: { label: "Item Definition", recurseOn: 'JsonField' }
                                                            }
                                                        }
                                                    }
                                                }
                                            },
                                            "Data": {
                                                defaultValue: { tag: 'data', dataType: 'string' },
                                                definition: {
                                                    type: 'object',
                                                    options: {
                                                        label: "Data Definition",
                                                        requiredKeys: {
                                                            tag: { type: 'const', options: { value: 'data' } },
                                                            dataType: {
                                                                type: 'dropdown',
                                                                options: {
                                                                    label: 'Data Type',
                                                                    dropdownItems: [
                                                                        { text: 'String', value: 'string' },
                                                                        { text: 'Number', value: 'number' },
                                                                        { text: 'Boolean', value: 'boolean' },
                                                                    ]
                                                                }
                                                            }
                                                        },
                                                        optionalKeys: {
                                                            defaultValue: {
                                                                defaultValue: '',
                                                                definition: {
                                                                    type: 'simple',
                                                                    options: {
                                                                        label: "Default Value",
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
                                },
                                editorType: {
                                    type: 'dropdown',
                                    options: {
                                        label: 'Editor Type',
                                        dropdownItems: [{ text: 'Text Window', value: 'text' }, { text: 'Form', value: 'form' }]
                                    }
                                }
                            }
                        }
                    }
                },
                dropdownConfig: {
                    defaultValue: { choices: [] },
                    definition: {
                        type: 'multi',
                        options: {
                            label: "Dropdown Config",
                            display: (_, p) => {
                                let edit = p.getChild("editType");
                                if (edit) {
                                    return edit.selected == "dropdown";
                                }
                                return true;
                            },
                            definitions: {
                                'Static Choices': {
                                    defaultValue: { choices: [] },
                                    definition: {
                                        type: 'object',
                                        options: {
                                            label: 'Static Choices',
                                            requiredKeys: {
                                                choices: {
                                                    type: 'array',
                                                    options: {
                                                        label: 'Choices',
                                                        defaultValue: '',
                                                        itemTemplate: {
                                                            type: 'simple',
                                                            options: {
                                                                label: "Choice",
                                                                type: 'string'
                                                            }
                                                        }
                                                    }
                                                }
                                            },
                                            optionalKeys: {
                                                allowCustom: {
                                                    defaultValue: false,
                                                    definition: {
                                                        type: 'simple',
                                                        options: {
                                                            label: "Allow Custom Value",
                                                            type: 'boolean'
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
                                        type: 'supplier',
                                        options: {
                                            default: { type: 'const', options: { value: 0 } },
                                            supply: () => {
                                                var _a;
                                                let l = (_a = DYNAMIC_LIST_LOOKUP[configName]) === null || _a === void 0 ? void 0 : _a.list;
                                                let topLvlCols = [];
                                                if (l && l.config) {
                                                    topLvlCols = DataScopeManager.getDataMappings(l.config).map(x => { var _a; return ({ text: (_a = x.displayName) !== null && _a !== void 0 ? _a : x.flattenedName, value: x.flattenedName }); });
                                                }
                                                return {
                                                    type: 'object',
                                                    options: {
                                                        label: 'Choose From Column',
                                                        requiredKeys: {
                                                            fromColumn: {
                                                                type: 'dropdown',
                                                                options: {
                                                                    label: "Column Name",
                                                                    dropdownItems: topLvlCols,
                                                                    allowCustomValue: true
                                                                }
                                                            }
                                                        },
                                                        optionalKeys: {
                                                            allowCustom: {
                                                                defaultValue: false,
                                                                definition: {
                                                                    type: 'simple',
                                                                    options: {
                                                                        label: "Allow Custom Value",
                                                                        type: 'boolean'
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                };
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                tempalte: {
                    defaultValue: '',
                    definition: {
                        type: 'simple',
                        options: {
                            label: "Template",
                            type: 'string'
                        }
                    }
                },
                width: {
                    defaultValue: '',
                    definition: {
                        type: 'simple',
                        options: {
                            label: "Width",
                            type: 'string'
                        }
                    }
                },
            }
        }
    };
    let defaultValue = { tag: 'data', flattenedName: (column && column[0]) ? column[0] : '' };
    return { dataMappingDefault: defaultValue, dataMappingForm: f };
}
function buildSearchOptionsForm() {
    return {
        type: 'object',
        options: {
            label: 'Search Options',
            requiredKeys: {},
            optionalKeys: {
                advancedSearch: {
                    defaultValue: false,
                    definition: {
                        type: 'simple',
                        options: {
                            label: 'Do Advanced Search?',
                            type: 'boolean'
                        },
                    },
                    inline: true,
                },
                serverSearch: {
                    defaultValue: false,
                    definition: {
                        type: 'simple',
                        options: {
                            label: "Do Server-side Search?",
                            type: 'boolean'
                        }
                    },
                    inline: true,
                },
                onlyInclude: {
                    defaultValue: [],
                    definition: {
                        type: 'array',
                        options: {
                            defaultValue: '',
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
                            defaultValue: '',
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
    };
}
function buildDatasourceForm(allColumns) {
    let paginate = {
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
    };
    let epDefault = {
        method: 'GET',
        endpoint: {
            tag: 'template',
            value: ''
        }
    };
    let endpoint = buildEndpointForm(allColumns.map(x => x.value));
    let endpoints = {
        label: 'Endpoints',
        requiredKeys: {},
        optionalKeys: {
            fetch: {
                defaultValue: epDefault,
                definition: endpoint
            },
            search: {
                defaultValue: epDefault,
                definition: endpoint
            },
            add: {
                defaultValue: epDefault,
                definition: endpoint
            },
            update: {
                defaultValue: epDefault,
                definition: endpoint
            },
            delete: {
                defaultValue: epDefault,
                definition: endpoint
            },
        }
    };
    let filters = buildFiltersForm();
    let serverSort = buildServerSortForm(allColumns);
    return {
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
                                    options: endpoints,
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
                    defaultValue: { type: 'sql', table: '' },
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
                                    definition: filters
                                },
                                serverSort: {
                                    defaultValue: [],
                                    definition: serverSort
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
                                },
                                paginate: {
                                    defaultValue: { pageSize: 10 },
                                    definition: paginate,
                                },
                                connectionString: {
                                    defaultValue: 'conn',
                                    definition: {
                                        type: 'simple',
                                        options: {
                                            type: 'string',
                                            label: "Connection String"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                'Supply Custom SQL': {
                    defaultValue: { type: 'sql', sql: '' },
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
                                        textarea: true,
                                        type: 'string',
                                    }
                                },
                            },
                            optionalKeys: {
                                filters: {
                                    defaultValue: {
                                        columnName: '',
                                        columnVal: {
                                            tag: 'value',
                                            value: ''
                                        },
                                        connector: 'AND',
                                        op: '=',
                                    },
                                    definition: filters
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
                                },
                                serverSort: {
                                    defaultValue: [],
                                    definition: serverSort
                                },
                                paginate: {
                                    defaultValue: { pageSize: 10 },
                                    definition: paginate,
                                },
                                connectionString: {
                                    defaultValue: 'conn',
                                    definition: {
                                        type: 'simple',
                                        options: {
                                            type: 'string',
                                            label: "Connection String"
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
                                jsonData: {
                                    type: 'simple',
                                    options: {
                                        label: 'JSON Data',
                                        type: 'string'
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
    };
}
function buildServerSortForm(columns) {
    return {
        type: 'array',
        options: {
            label: "Server-side Sorting",
            defaultValue: { columnName: '', order: 'asc' },
            itemTemplate: {
                type: 'object',
                options: {
                    label: "Column Sorting Option",
                    requiredKeys: {
                        columnName: {
                            type: 'dropdown',
                            options: {
                                label: 'Column to Sort On',
                                dropdownItems: columns,
                            }
                        },
                        order: {
                            type: 'dropdown',
                            options: {
                                label: 'Order',
                                dropdownItems: [
                                    { text: 'Ascending', value: 'asc' },
                                    { text: 'Descending', value: 'desc' }
                                ]
                            }
                        }
                    }
                }
            }
        }
    };
}
function buildFiltersForm() {
    return {
        type: 'array',
        options: {
            label: 'List Filters',
            defaultValue: {
                columnName: '',
                op: '=',
                columnVal: {
                    tag: 'value',
                    val: '',
                },
                connector: 'AND',
            },
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
        }
    };
}
function buildButtonsForm(obj, config) {
    return listConfiguration_awaiter(this, void 0, void 0, function* () {
        return {
            type: 'array',
            options: {
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
                                                                type: 'function'
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
                                                                type: 'function'
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        'List Action Builder': {
                                            defaultValue: {
                                                listAction: {
                                                    actionName: 'openDetailView'
                                                }
                                            },
                                            definition: {
                                                type: 'object',
                                                options: {
                                                    label: 'List Action',
                                                    requiredKeys: {
                                                        listAction: yield listActionEditor(obj, config)
                                                    }
                                                }
                                            }
                                        }
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
                defaultValue: {
                    columnTitle: '',
                    onClick: {
                        function: () => { },
                    }
                }
            }
        };
    });
}
function buildEndpointForm(allColumns) {
    return {
        type: 'object',
        options: {
            label: (_1, _2, key) => "Endpoint Settings for " + key,
            requiredKeys: {
                method: {
                    type: 'dropdown',
                    options: {
                        label: 'HTTP Verb',
                        dropdownItems: ['GET', 'POST', 'DELETE', 'PUT', 'HEAD', 'CONNECT', 'OPTIONS', 'TRACE', 'PATCH'].map(x => { return { text: x, value: x }; })
                    },
                },
                endpoint: {
                    type: 'multi',
                    options: {
                        label: 'Endpoint Value',
                        definitions: {
                            'Template String': {
                                defaultValue: {
                                    tag: 'template',
                                    value: ''
                                },
                                definition: {
                                    type: 'object',
                                    options: {
                                        label: 'Endpoint',
                                        requiredKeys: {
                                            tag: {
                                                type: 'const',
                                                options: {
                                                    label: '',
                                                    value: 'template'
                                                }
                                            },
                                            value: templateHelper(allColumns, 'Template')
                                        },
                                    }
                                }
                            },
                            'Argument': {
                                defaultValue: {
                                    tag: 'argument',
                                    value: ''
                                },
                                definition: {
                                    type: 'object',
                                    options: {
                                        label: 'Endpoint',
                                        requiredKeys: {
                                            tag: {
                                                type: 'const',
                                                options: {
                                                    label: '',
                                                    value: 'argument'
                                                }
                                            },
                                            value: {
                                                type: 'simple',
                                                options: {
                                                    label: 'Argument',
                                                    type: 'string'
                                                }
                                            }
                                        },
                                    }
                                }
                            }
                        }
                    }
                },
            },
            optionalKeys: {
                body: {
                    defaultValue: '',
                    definition: templateHelper(allColumns, 'Body Value'),
                },
                headers: {
                    defaultValue: {},
                    definition: {
                        type: 'object',
                        options: {
                            label: 'Headers',
                            requiredKeys: {},
                            newKeyTemplate: {
                                defaultValue: {
                                    tag: 'template',
                                    value: ''
                                },
                                definition: {
                                    type: 'multi',
                                    options: {
                                        label: (_1, _2, k) => 'Header ' + k,
                                        definitions: {
                                            'Template String': {
                                                defaultValue: {
                                                    tag: 'template',
                                                    value: ''
                                                },
                                                definition: {
                                                    type: 'object',
                                                    options: {
                                                        label: 'Header',
                                                        requiredKeys: {
                                                            tag: {
                                                                type: 'const',
                                                                options: {
                                                                    label: '',
                                                                    value: 'template'
                                                                }
                                                            },
                                                            value: templateHelper(allColumns, 'Template')
                                                        }
                                                    }
                                                }
                                            },
                                            'Argument': {
                                                defaultValue: {
                                                    tag: 'argument',
                                                    value: ''
                                                },
                                                definition: {
                                                    type: 'object',
                                                    options: {
                                                        label: 'Header',
                                                        requiredKeys: {
                                                            tag: {
                                                                type: 'const',
                                                                options: {
                                                                    label: '',
                                                                    value: 'argument'
                                                                }
                                                            },
                                                            value: {
                                                                type: 'simple',
                                                                options: {
                                                                    type: 'string',
                                                                    label: 'Argument'
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
                },
            }
        }
    };
}
function editTypeDropdown() {
    return {
        type: 'dropdown',
        options: {
            label: 'Data Type',
            dropdownItems: [
                { text: 'Text', value: 'text' },
                { text: 'Dropdown', value: 'dropdown' },
                { text: 'Time', value: 'time' },
                { text: 'Date & Time', value: 'datetime' },
                { text: 'True/False', value: 'bool' },
                { text: 'Number', value: 'number' },
                { text: 'JSON Data', value: 'json' },
            ],
            default: 'text',
        }
    };
}

;// ./src/transformInterface.ts
var transformInterface_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function transformAPI(path) {
    return fetch('https://transform.alphasoftware.com/transformAPIVersion1.a5svc/' + path, {
        method: 'GET',
        headers: {
            apikey: 'eed9a06d3e3148569a450361d91c3232_RDACFIDFIEI'
        }
    }).then(x => x.json());
}
function prepareTFList(obj, formId) {
    return new Promise((resolve) => {
        obj.ajaxCallback('', '', 'prepare_transform_form_list', '', 'formid=' + encodeURIComponent(formId), {
            onComplete: () => {
                resolve(obj.stateInfo.apiResult);
            }
        });
    });
}
function initTFSelector(containerId, obj) {
    return transformInterface_awaiter(this, void 0, void 0, function* () {
        let cId = obj.getPointer(containerId).id;
        let loading = {
            type: 'html',
            control: {
                html: '<p> Loading Form Definitions... </p>'
            }
        };
        let formObj = DynamicForm.makeFromRaw(loading, {}, cId);
        let dropdownItems = yield transformAPI('GetListOfFormDefinitionsForAccount?includeFormDefinitions=false')
            .then(json => {
            if (json.error) {
                console.error(json.errorText);
                return [];
            }
            return json.result.map(row => {
                return {
                    text: `${row.formname} (${row.formid})`,
                    value: row.formid
                };
            });
        });
        let formJson = {
            type: 'group',
            items: [
                {
                    type: 'picker',
                    id: 'form-picker',
                    data: {
                        from: 'form-picker',
                        ensure: true
                    },
                    control: {
                        data: {
                            src: dropdownItems,
                            map: ['value', 'text']
                        },
                        picker: {
                            data: {
                                empty: {
                                    message: "No Forms Loaded"
                                }
                            }
                        }
                    }
                },
                {
                    type: 'button',
                    control: {
                        html: `<span> Load Form into List </span> `,
                        onClick: () => {
                            launch(formObj.data['form-picker'], obj);
                        },
                    }
                }
            ],
            container: {
                style: `;
                display: flex;
                flex-direction: column;
                gap: 1rem;
            `
            }
        };
        formObj = DynamicForm.makeFromRaw(formJson, {}, obj.getPointer(containerId).id);
        formObj.data['form-picker'] = dropdownItems[0].value;
        formObj.refresh();
    });
}
function launch(formId, obj) {
    return transformInterface_awaiter(this, void 0, void 0, function* () {
        let prepareResult = yield prepareTFList(obj, formId);
        if ('err' in prepareResult) {
            console.error(prepareResult.err);
            return;
        }
        openNewPanel({
            obj: obj,
            configName: formId,
            listContainerId: 'LIST_CONTAINER',
            searchContainerId: 'SEARCH_CONTAINER',
            titleName: 'Form ' + formId,
        });
    });
}

;// ./src/tfc.js
const tfc_TF = {
	theme: 'Alpha',
	url: 'tfc.a5w',
	_: {
		saveState: function (refresh) {
			var sl = tfc_TF.state.login;
			localStorage.setItem('A5TFState', JSON.stringify(sl));
			if (refresh) {
				if (typeof tfc_TF.ui.main._.vb != 'undefined') tfc_TF.ui.main._.vb.refresh();
				if (typeof tfc_TF.ui.user._.h != 'undefined') tfc_TF.ui.user._.h.refresh();
				if (typeof tfc_TF.ui.account._.h != 'undefined') tfc_TF.ui.account._.h.refresh();
				if (typeof tfc_TF.ui.home._.vb != 'undefined') tfc_TF.ui.home._.vb.getStructure();
			}
		},
		act: function (t, d) {
			// t: navigate, login, logout
			tfc_TF.state.login.activity.unshift({ type: t, data: d, at: Date.now() });
		},
		beta: function () {
			return location.hostname != 'transform.alphasoftware.com';
		},
		r: {
			t: {
				'login': { method: 'GET' },
				'login-confirm': { method: 'GET' },
				'login-two-factor': { method: 'GET' },
				'login-account': { method: 'GET' },
				'login-reset-pw': { method: 'GET' },
				'login-forgot-pw': { method: 'GET' },
				'login-check-user': { method: 'GET' },
				'login-create-user': { method: 'GET' },
				'login-create-account': { method: 'GET' },
				'login-confirm-user': { method: 'GET' },

				'get-preferences': { method: 'GET' },
				'set-preferences': { method: 'POST' },
				'get-profile': { method: 'GET' },
				'set-profile': { method: 'POST' },

				'get-log': { method: 'GET' },
				'update-log': { method: 'GET' },


				'get-api-keys': { method: 'GET' },
				'create-api-key': { method: 'GET' },
				'revoke-api-key': { method: 'GET' },
				'remove-api-key': { method: 'GET' },

				'get-members': { method: 'GET' },
				'update-members': { method: 'POST' },

				'get-connections': { method: 'GET' },
				'authenticate-connection': { method: 'GET' },
				'create-connection': { method: 'POST' },
				'update-connection': { method: 'POST' },
				'remove-connections': { method: 'GET' },

				'get-plan': { method: 'GET' },
				'update-plan': { method: 'POST' },

				'get-structure': { method: 'GET' },

				'get-form-info': { method: 'GET' },

				'get-form-defs': { method: 'POST' },
				'update-form-defs': { method: 'POST' },

			},
			i: {},
			e: { // errors
				pd: { // permission-denied
					'generic': { title: 'Permission Denied', text: 'You do not have permission to do the requested action on this account.' }
				},
				lad: { // login-account-denied
					'generic': { title: 'Account Error', text: 'You cannot login to the selected account. Please contact your account administrator to fix the issue.' },
					'user-count': { title: 'Account Error', text: 'The account you are trying to log into has exceeded the licensed user count. Please contact your account administrator to fix the issue.' },
				},
				id: { // invalid-data
					'plan-key': {
						'exists': { title: 'Key', text: 'The key that you entered is already in use.' },
						'invalid': { title: 'Key', text: 'The key that you entered is not valid.' }
					}
				}
			}
		},
		l: {
			ra: [],
			i: function () { // login initialize
				var s = tfc_TF.state;
				var sl = s.login;
				var sJSON = localStorage.getItem('A5TFState');
				if (sJSON) {
					try {
						var lss = JSON.parse(sJSON);
						A5.u.object.assign(sl, lss);
						if (typeof sl.expires == 'string') sl.expires = new Date(sl.expires);
						if (sl.expires.getFullYear() == NaN) sl.expires = new Date();
						if (sl.expires <= Date.now() && sl.state != 'logged-out') {
							sl.state = 'login-expired';
						}
						if (typeof tfc_TF.ui.main._.vb != 'undefined') tfc_TF.ui.main._.vb.refresh();
					} catch (e) {
						//console.log('couldn\'t restore state from storage');
					}
				}

				var args = location.href.split('?');
				args.shift();
				args = args.join('?').split('&');
				var arg = null;
				var argsObj = {};
				for (var i = 0; i < args.length; i++) {
					arg = args[i].split('=');
					if (arg.length == 2) argsObj[arg[0].trim()] = arg[1].trim();
				}

				if (argsObj.mode == 'dev') {
					s.ui.editing.json.forms = true;
					s.ui.editing.json.lists = true;
				} else if (argsObj.mode == 'create-account' || argsObj.mode == 'confirm-invite' || argsObj.mode == 'code-reset-pw') {
					sl.mode = { type: argsObj.mode };
					if (argsObj.mode == 'confirm-invite' || argsObj.mode == 'code-reset-pw') {
						if (typeof argsObj.code == 'string') sl.mode.code = argsObj.code;
						else sl.mode = null;
					}
				}
				// page interval
				setInterval(function () {
					// activity log
					var a = tfc_TF.state.login.activity;
					if (Array.isArray(a)) {
						var al = a.length;
						if (al != 0) {
							tfc_TF.request('update-log', { type: 'activity', log: a }).then(function () {
								if (tfc_TF.state.login.activity.length == al) tfc_TF.state.login.activity = [];
								else tfc_TF.state.login.activity.splice(0, al);
							});
						}
					}
				}, 60000);
				tfc_TF._.l.initialized = true;
			},
			d: function (d, c) { // login done - set variables
				var s = tfc_TF.state;
				var sl = s.login;
				sl.state = 'logged-in';
				sl.mode = null;
				sl.expires = new Date(d.expires);
				if (sl.expires.getFullYear() == NaN) {
					sl.expires = new Date();
					sl.state = 'login-expired';
				}

				if (A5.u.typeOf(d.user) == 'object') {
					A5.u.object.assign(d.user, {
						id: null, // logged in user ID (email)
						name: null // logged in user name
					}, true);
					sl.user = d.user;
				}
				if (A5.u.typeOf(d.account) == 'object') {
					A5.u.object.assign(d.account, {
						id: null, // account ID
						name: null, // selected account name
						member: {
							roles: null,
							ui: { allow: { design: false, manage: false, dashboard: false, account: false, developer: false, filler: { web: false, mobile: false } } }
						}, // information about logged in user relative to account
						permissions: {} // account permissions
					}, true);
					sl.account = d.account;
				}

				var slam = sl.account.member;
				slam.ui = {
					allow: {
						design: (slam.roles.indexOf('FormDesigner') != -1),
						manage: (slam.roles.indexOf('ManagementConsole') != -1),
						dashboard: (slam.roles.indexOf('ManagementConsole') != -1),
						filler: {
							web: (slam.roles.indexOf('browseruser') != -1),
							mobile: (slam.roles.indexOf('user') != -1)
						},
						account: (slam.roles.indexOf('AccountAdmin') != -1),
						developer: (slam.roles.indexOf('AccountAdmin') != -1)
					}
				}
				if (typeof tfc_TF.ui.main._.vb != 'undefined') tfc_TF.ui.main._.vb.refresh();
				this.ele.style.display = 'none';
				tfc_TF._.saveState(true);
				var ra = this.ra;
				var ri, args = null;
				for (var i = 0; i < ra.length; i++) {
					ri = tfc_TF._.r.i[ra[i]];
					if (typeof ri != 'undefined') {
						args = ['type=' + ri.type];
						if (typeof ri.data == 'object' && ri.data) args.push('data=' + urlencode(JSON.stringify(ri.data)));
						args.push('token=' + (tfc_TF.state.login.token ? urlencode(tfc_TF.state.login.token) : ""));
						args = args.join('&');
						ri.xhr.open('POST', tfc_TF.url);
						ri.xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
						ri.xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=UTF-8');
						ri.xhr.overrideMimeType('text/html; charset=UTF-8');
						ri.xhr.send(args);
					}
				}
				this.ra = [];
				// clear data
				tfc_TF.u.filler._.route.m = false;
				tfc_TF.u.filler._.route.q = false;
				var m_ = tfc_TF.ui.main._;
				// reset ui
				if (c) {
					// need to update JWT on loaded UXs
					var ux = m_.ux;
					if (m_.d.ux) ux.sendMessageToChild('FORMDASHBOARD', { type: "action", cmd: "updatejwtusertoken", newjwtusertoken: sl.token });
					if (m_.m.ux) ux.sendMessageToChild('FORMBROWSER', { type: "action", cmd: "updatejwtusertoken", newjwtusertoken: sl.token });
					if (m_.b.ux) ux.sendMessageToChild('FORMBUILDER', { type: "action", cmd: "updatejwtusertoken", newjwtusertoken: sl.token });
				} else {
					// diff user/account - reset all
					var p = m_.ux.panelGet('TRANSFORM_MAIN_NAV');
					m_.vb.setTab('home');

					// TFIFrameLoading
					if (m_.d.ux) { // dash
						m_.d.ux._destroy();
						m_.d.ux = null;
						delete p.state._render['TRANSFORM_DASHBOARD'];
						var pc = m_.ux.panelGet('TRANSFORM_DASHBOARD');
						A5.u.element.cls($(pc.getPanelId('body')).children[0], 'TFIFrameLoading');
					}
					if (m_.m.ux) { // manage
						m_.m.ux._destroy();
						m_.m.ux = null;
						delete p.state._render['TRANSFORM_MANAGE'];
						var pc = m_.ux.panelGet('TRANSFORM_MANAGE');
						A5.u.element.cls($(pc.getPanelId('body')).children[0], 'TFIFrameLoading');
					}
					if (m_.b.ux) { // designer
						m_.b.ux._destroy();
						m_.b.ux = null;
						delete p.state._render['TRANSFORM_DESIGN'];
						var pc = m_.ux.panelGet('TRANSFORM_DESIGN');
						A5.u.element.cls($(pc.getPanelId('body')).children[0], 'TFIFrameLoading');
					}
				}

				if (tfc_TF.u.filler._.iEle) tfc_TF.u.filler._.iEle.src = '';

				var l = tfc_TF.state.login;
				tfc_TF._.act('login', { user: l.user, account: { name: l.account.name, id: l.account.id }, token: l.token });
			},
			a: function (t) { // login actions
				var f = this.f;
				var fd = f.data;
				if (t == 'login') {
					var id = fd.userId;
					tfc_TF.request('login', {
						userId: id,
						pw: fd.pw
					}).then(function (d) {
						var _l = tfc_TF._.l;
						var l = tfc_TF.state.login;
						if (d.token) l.token = d.token;
						tfc_TF.state.login.user.id = id;
						if (d.step == 'done') _l.d(d, false);
						else if (d.step == 'account') {
							l.state = 'logging-in';
							_l.f.accounts = d.accounts;
							tfc_TF.login('account');
						} else if (d.step == 'two-factor') {
							l.state = 'logging-in';
							_l.f.tfSentTo = d.sentTo;
							tfc_TF.login('two-factor');
						}
					}).catch(function (d) {
						if (d.error == 'login-id-pw') {
							tfc_TF.u.message.show('confirm', 'Error', 'Invalid email or password.');
						}
					});
				} else if (t == 'confirm') {
					tfc_TF.request('login-confirm', {
						userId: tfc_TF.state.login.user.id,
						account: tfc_TF.state.login.account.id,
						pw: fd.confirmPW,
					}).then(function (d) {
						var _l = tfc_TF._.l;
						var l = tfc_TF.state.login;
						if (d.token) l.token = d.token;
						if (d.step == 'done') _l.d(d, true);
						else if (d.step == 'two-factor') {
							l.state = 'logging-in';
							_l.f.tfSentTo = d.sentTo;
							tfc_TF.login('two-factor');
						}
					}).catch(function (d) {
						if (d.error == 'login-id-pw') {
							tfc_TF.u.message.show('confirm', 'Error', 'Invalid email or password.');
						}
					});
				} else if (t == 'account') {
					tfc_TF.request('login-account', {
						account: fd.account,
					}).then(function (d) {
						var _l = tfc_TF._.l;
						var l = tfc_TF.state.login;
						if (d.token) l.token = d.token;
						if (d.step == 'done') _l.d(d, false);
						else if (d.step == 'two-factor') {
							_l.f.tfSentTo = d.sentTo;
							tfc_TF.login('two-factor');
						}
					});
				} else if (t == 'forgot-pw') {
					var id = fd.userId;
					tfc_TF.request('login-forgot-pw', { userId: id }).then(function (d) {
						var _l = tfc_TF._.l;
						var l = tfc_TF.state.login;
						tfc_TF.state.login.user.id = id;
						tfc_TF.login('code-reset-pw');
					}).catch(function (d) {
						var _l = tfc_TF._.l;
						var l = tfc_TF.state.login;
						tfc_TF.state.login.user.id = id;
						tfc_TF.login('code-reset-pw');
					});
				} else if (t == 'reset-pw') {
					var d = {
						method: 'pw',
						newPW: fd.newPW1
					}
					if (fd.state == 'code-reset-pw') {
						d.method = 'code'
						d.code = fd.fpCode;
					} else d.oldPW = fd.currentPW;
					tfc_TF.request('login-reset-pw', d).then(function (d) {
						tfc_TF.u.message.show('confirm', 'Password Changed', 'Your password was reset.');
						if (d.step == 'login') tfc_TF.login();
						else {
							var _l = tfc_TF._.l;
							var l = tfc_TF.state.login;
							if (d.token) l.token = d.token;
							if (d.step == 'done') _l.d(d, false);
						}

					}).catch(function (d) {
						if (d.error == 'login-code') {
							if (d.type == 'used') tfc_TF.u.message.show('confirm', 'Error', 'The code has already been used. Please request a new code to be sent.');
							else if (d.type == 'expired') tfc_TF.u.message.show('confirm', 'Error', 'The code has expired. Please request a new code to be sent.');
							else if (d.type == 'invalid') tfc_TF.u.message.show('confirm', 'Error', 'Invalid code. Please correct or request a new code to be sent.');
						} else tfc_TF.u.message.show('confirm', 'Error', 'Could not reset password.');
					});
				} else if (t == 'tf-submit') {
					tfc_TF.request('login-two-factor', {
						type: 'submit',
						code: fd.tfCode,
						sentTo: f.tfSentTo
					}).then(function (d) {
						var _l = tfc_TF._.l;
						var l = tfc_TF.state.login;
						if (d.token) l.token = d.token;
						if (d.step == 'done') _l.d(d, false);
					}).catch(function (d) {
						if (d.error == 'login-code') {
							tfc_TF.u.message.show('confirm', 'Error', 'Invalid two-factor authentication code. Please try again.');
						}
					});;
				} else if (t == 'tf-resend') {
					tfc_TF.request('login-two-factor', {
						type: 'resend',
						method: arguments[1]
					}).then(function (d) {
						var _l = tfc_TF._.l;
						var l = tfc_TF.state.login;
						if (d.token) l.token = d.token;
						_l.f.tfSentTo = d.sentTo;
						_l.f.refresh();
						A5.u.element.cls('TF.LOGIN.TWO-FACTOR.MSG', '+=TFElementIndicate');
					});
				} else if (t == 'tf-resend-choose') {
					tfc_TF.u.message.show('choice-cancel', 'Choose method', 'Choose how you would like to perform your two-factor authentication.', {
						options: [
							{ html: 'Email', value: 'email' },
							{ html: 'SMS', value: 'sms' },
							{ html: 'Authenticator App', value: 'app' }
						],
						action: function (t) {
							if (t == 'email' || t == 'sms' || t == 'app') tfc_TF._.l.a('tf-resend', t);
						}
					});
				} else if (t == 'create-pw') {
					tfc_TF.request('login-check-user', { userId: fd.userId }).then(function (d) {
						var f = tfc_TF._.l.f;
						f.data.exists = d.exists;
						f.data.state = 'create-user-pw';
						f.refresh();
					}).catch(function () {

					});
				} else if (t == 'create-user-pw') {
					tfc_TF.request('login-create-user', {
						userId: fd.userId,
						firstName: fd.firstName,
						lastName: fd.lastName,
						company: fd.company,
						phone: fd.phone,
						agree: {
							tos: fd.readTOS,
							pp: fd.readPP,
							email: fd.allowEmail
						}
					}).then(function (d) {
						var f = tfc_TF._.l.f;
						var l = tfc_TF.state.login;
						if (d.token) l.token = d.token;
						f.data.state = 'create-account';
						f.refresh();
					}).catch(function () {
						if (d.error == 'login-id-pw') {
							tfc_TF.u.message.show('confirm', 'Error', 'Invalid email or password.');
						}
					});
				} else if (t == 'create-account') {
					tfc_TF.request('login-create-user', {
						account: fd.account
					}).then(function (d) {
						var l = tfc_TF.state.login;
						if (d.token) l.token = d.token;
						if (d.step == 'done') _l.d(d, true);
					}).catch(function () {
						if (d.error == 'login-id-pw') {
							tfc_TF.u.message.show('confirm', 'Error', 'Invalid email or password.');
						}
					});
				}

			},
			c: function () { // login create UI
				if (!this.ele) {
					var id = 'TF.LOGIN';
					var idP = 'TF.LOGIN.PANEL';
					var ele = document.createElement('div');
					ele.id = id;
					ele.className = 'TFLogin';
					A5.u.element.style(ele, 'position: absolute; top: 0px; left: 0px; right: 0px; bottom:0px; z-index: 49;');
					ele.innerHTML = '<div id="' + idP + '" class="TFLoginPanel"></div>';
					document.body.appendChild(ele);
					this.ele = ele;
					this.f = new A5.FormBox(idP, {
						form: {
							items: [
								{ // LOGIN PANEL
									"type": "group",
									"id": "login",
									"include": function () {
										return this.data.state == 'login';
									},
									"items": [
										{
											"type": "html",
											"layout": "tf-simple",
											"control": {
												"html": function () {
													var html = [
														'<div style="text-align: center;"><img src="TFLoginLogo.png"></div>',
														'<div class="TFLoginHeader">What will you TransForm today?</div>'
													].join('');
													return html
												},
												"width": "100%"
											}
										},
										{
											"type": "group",
											"container": { "className": "TFLoginFields" },
											"items": [
												{
													"type": "edit",
													"layout": "tf-simple",
													"data": {
														"from": "userId",
														"required": true,
														"validate": function (p, v, d) {
															if (['login', 'create-user', 'forgot-pw'].indexOf(this.data.state) == -1) return;
															if (v == '') {
																return 'You must enter a valid email address.';
															}
														}
													},
													"control": {
														"theme": tfc_TF.theme + ":primary",
														"width": "100%",
														"placeholder": { "text": "Email" },
														"behavior": {
															"edit": {
																"type": "email",
																"autocomplete": "email"
															}
														}
													}
												},
												{
													"type": "edit-password",
													"layout": "tf-simple",
													"data": {
														"from": "pw",
														"required": true,
														"validate": function (p, v, d) {
															if (this.data.state != 'login') return;
															if (v == '') {
																return 'You must enter your password.';
															}
														}
													},
													"control": {
														"theme": tfc_TF.theme + ":primary",
														"width": "100%",
														"placeholder": { "text": "Password" },
														"onKeyUp": function (dObj, ele, e) {
															if (e.key == 'Enter') {
																if (this.validate()) tfc_TF._.l.a('login');
															}
														}
													}
												}
											]
										},
										{
											"type": "button",
											"layout": "tf-simple",
											"control": {
												"theme": tfc_TF.theme + ":primary",
												"html": "Sign In",
												"style": "width: 100%;",
												"width": "100%",
												"onClick": function () {
													if (this.validate()) tfc_TF._.l.a('login');
												}
											}
										},
										{
											"type": "html",
											"container": { "className": "TFLoginFooter" },
											"control": {
												"html": function () {

													var html = [
														'<div style="font-size: 90%;">',
														'With sign in, you agree to the ',
														'<a class="link" onclick="$e.stopPropagation(event);" href="https://server.alphasoftware.com/transform_terms_of_service" target="_blank">Terms of Service</a> ',
														'and ',
														'<a class="link" onclick="$e.stopPropagation(event);" href="https://server.alphasoftware.com/transform_privacy_policy" target="_blank">Privacy Policy</a>.',
														'</div>',
														'<div>',
														'<a class="link" href="#" onclick="TF.login(\'forgot-pw\');">Forgot password?</a>',
														'</div>',
														'<div style="font-size: 90%;">',
														'or',
														'</div>',
														'<div>',
														'<a class="link" href="#" onclick="TF.login(\'create-user\');">Create a new user & account.</a>',
														'</div>'
													].join('');
													return html;
												}
											}
										}
									]
								},
								{ // CREATE USER PANEL
									"type": "group",
									"id": "create-user",
									"include": function () {
										return this.data.state == 'create-user';
									},
									"items": [
										{
											"type": "html",
											"layout": "tf-simple",
											"control": {
												"html": function () {
													var html = [
														'<div style="text-align: center;"><img src="TFLoginLogo.png"></div>',
														'<div class="TFLoginHeader">Step 1: Register Email Address</div>'
													].join('');
													return html
												},
												"width": "100%"
											}
										},
										{
											"type": "group",
											"container": { "className": "TFLoginFields" },
											"items": [
												{
													"type": "edit",
													"layout": "tf-label-above",
													"data": {
														"from": "userId",
														"required": true,
														"validate": function (p, v, d) {
															if (['login', 'create-user', 'forgot-pw'].indexOf(this.data.state) == -1) return;
															if (v == '') {
																return 'You must enter a valid email address.';
															}
														}
													},
													"label": { "text": "Email" },
													"control": {
														"theme": tfc_TF.theme + ":primary",
														"width": "100%",
														"placeholder": { "text": "Email" },
														"behavior": {
															"edit": {
																"type": "email",
																"autocomplete": "email"
															}
														}
													}
												},
												{
													"type": "edit",
													"layout": "tf-label-above",
													"data": {
														"from": "firstname",
														"required": true,
													},
													"label": { "text": "First Name" },
													"control": {
														"theme": tfc_TF.theme + ":primary",
														"width": "100%",
														"placeholder": { "text": "First Name" }
													}
												},
												{
													"type": "edit",
													"layout": "tf-label-above",
													"data": {
														"from": "lastname",
														"required": true,
													},
													"label": { "text": "Last Name" },
													"control": {
														"theme": tfc_TF.theme + ":primary",
														"width": "100%",
														"placeholder": { "text": "Last Name" }
													}
												},
												{
													"type": "edit",
													"layout": "tf-label-above",
													"data": { "from": "company" },
													"label": { "text": "Company" },
													"control": {
														"theme": tfc_TF.theme + ":primary",
														"width": "100%",
														"placeholder": { "text": "Company" }
													}
												},
												{
													"type": "edit",
													"layout": "tf-label-above",
													"data": { "from": "phone" },
													"label": { "text": "Phone" },
													"control": {
														"theme": tfc_TF.theme + ":primary",
														"width": "100%",
														"placeholder": { "text": "Phone" }
													}
												},
												{
													"type": "checkbox",
													"layout": "tf-simple",
													"data": { "from": "readTOS" },
													"container": { "style": "cursor: default;" },
													"control": { "html": " I agree to Alpha TransForm <a href=\"https://server.alphasoftware.com/transform_terms_of_service\" target=\"_blank\" class=\"link\" onclick=\"$e.stopPropagation(event);\">Terms of Service</a>." },
												},
												{
													"type": "checkbox",
													"layout": "tf-simple",
													"data": { "from": "readPP" },
													"container": { "style": "cursor: default;" },
													"control": { "html": " I have read and understand the <a href=\"https://server.alphasoftware.com/transform_privacy_policy\" target=\"_blank\" class=\"link\" onclick=\"$e.stopPropagation(event);\">Private Policy</a>." },
												},
												{
													"type": "checkbox",
													"layout": "tf-simple",
													"data": { "from": "allowEmail" },
													"container": { "style": "cursor: default;" },
													"control": { "html": " You may send emails about new features, info, and offers." },
												},
												{
													"type": "group",
													"container": { "className": "TFLoginButtonRow TFLoginVerticalSpace" },
													"items": [
														{
															"type": "button",
															"layout": "tf-simple",
															"control": {
																"theme": tfc_TF.theme + ":subtle",
																"html": "Cancel",
																"style": "width: 100%;",
																"width": "100%",
																"onClick": function () {
																	tfc_TF.state.login.mode = null;
																	tfc_TF.login();
																}
															}
														},
														{
															"type": "button",
															"layout": "tf-simple",
															"control": {
																"theme": tfc_TF.theme + ":primary",
																"html": "Next",
																"style": "width: 100%;",
																"width": "100%",
																"onClick": function () {
																	if (this.validate()) {
																		if (!this.data.readTOS || !this.data.readPP) {
																			tfc_TF.u.message.show('confirm', 'Error', 'You must read and agree to both the terms of service and private policy,');
																		} else tfc_TF._.l.a('create-pw');
																	}
																}
															}
														}
													]
												}
											]
										}
									]
								},
								{ // CREATE USER PASSWORD PANEL
									"type": "group",
									"id": "create-pw",
									"include": function () {
										return this.data.state == 'create-user-pw';
									},
									"items": [
										{
											"type": "html",
											"layout": "tf-simple",
											"control": {
												"html": function () {
													var html = [
														'<div style="text-align: center;"><img src="TFLoginLogo.png"></div>',
														'<div class="TFLoginHeader">',
														(this.data.exists ? 'Step 2: Enter Password' : 'Step 2: Create Password'),
														'</div>'
													].join('');

													return html
												},
												"width": "100%"
											}
										},
										{
											"type": "group",
											"container": { "className": "TFLoginFields" },
											"items": [
												{
													"type": "edit",
													"layout": "tf-label-above",
													"data": {
														"from": "pw",
														"required": true,
														"validate": function (p, v, d) { if (v == '') return 'You must enter a password.'; }
													},
													"label": { "text": "Password" },
													"control": {
														"theme": tfc_TF.theme + ":primary",
														"width": "100%",
														"placeholder": { "text": "Password" },
														"behavior": { "edit": { "autocomplete": "password" } }
													}
												},
												{
													"type": "edit",
													"layout": "tf-label-above",
													"include": function () {
														return !this.data.exists;
													},
													"data": {
														"from": "confirmPW",
														"required": true,
														"validate": function (p, v, d) {
															if (this.data.state == 'create-user-pw') {
																if (v == '') return 'You must enter a password.';
																else if (v != this.data.pw) return 'Passwords do not match.';
															}
														}
													},
													"label": { "text": "Confirm Password" },
													"control": {
														"theme": tfc_TF.theme + ":primary",
														"width": "100%",
														"placeholder": { "text": "Password" },
														"behavior": { "edit": { "autocomplete": "password" } }
													}
												}
											]
										},
										{
											"type": "group",
											"container": { "className": "TFLoginButtonRow TFLoginVerticalSpace" },
											"items": [
												{
													"type": "button",
													"layout": "tf-simple",
													"control": {
														"theme": tfc_TF.theme + ":subtle",
														"html": "Back",
														"style": "width: 100%;",
														"width": "100%",
														"onClick": function () {
															this.data.state = 'create-user';
															this.refresh();
														}
													}
												},
												{
													"type": "button",
													"layout": "tf-simple",
													"include": function () { return this.data.exists },
													"control": {
														"theme": tfc_TF.theme + ":primary",
														"html": "Login",
														"style": "width: 100%;",
														"width": "100%",
														"onClick": function () {
															if (this.validate()) tfc_TF._.l.a('create-user-pw');
														}
													}
												},
												{
													"type": "button",
													"layout": "tf-simple",
													"include": function () { return !this.data.exists },
													"control": {
														"theme": tfc_TF.theme + ":primary",
														"html": "Create User",
														"style": "width: 100%;",
														"width": "100%",
														"onClick": function () {
															if (this.validate()) tfc_TF._.l.a('create-user-pw');
														}
													}
												}
											]
										}
									]
								},
								{ // CREATE ACCOUNT PANEL
									"type": "group",
									"id": "create-account",
									"include": function () {
										return this.data.state == 'create-account';
									},
									"items": [

									]
								},
								{ // CONFIRM LOGIN PANEL
									"type": "group",
									"id": "confirm",
									"include": function () {
										return this.data.state == 'confirm';
									},
									"items": [
										{
											"type": "html",
											"layout": "tf-simple",
											"control": {
												"html": function () {
													var ls = tfc_TF.state.login.state;
													var html = [
														'<div style="text-align: center;"><img src="TFLoginLogo.png"></div>',
														'<div class="TFLoginConfirmMsg">',
														(ls == 'login-expired' ? 'Session has expired. Please confirm login for: ' : 'Confirm login for: '),
														'<strong>' + tfc_TF.state.login.user.id + '</strong>',
														'<br/>Account: <strong>' + tfc_TF.state.login.account.name + ' <span style="font-family: monospace; font-size: 10px;">(' + tfc_TF.state.login.account.id + ')</span></strong>',
														'</div>'
													].join('');
													return html
												},
												"width": "100%"
											}
										},
										{
											"type": "group",
											"container": { "className": "TFLoginFields" },
											"items": [
												{
													"type": "edit-password",
													"layout": "tf-simple",
													"data": {
														"from": "confirmPW",
														"required": true,
														"validate": function (p, v, d) {
															if (this.data.state != 'confirm') return;
															if (v == '') {
																return 'You must enter your password.';
															}
														}
													},
													"control": {
														"theme": tfc_TF.theme + ":primary",
														"width": "100%",
														"placeholder": { "text": "Password" },
														"onKeyUp": function (dObj, ele, e) {
															if (e.key == 'Enter') {
																if (this.validate()) tfc_TF._.l.a('confirm');
															}
														}
													}
												}
											]
										},
										{
											"type": "button",
											"layout": "tf-simple",
											"control": {
												"theme": tfc_TF.theme + ":primary",
												"html": "Confirm Login",
												"style": "width: 100%;",
												"width": "100%",
												"onClick": function () {
													if (this.validate()) tfc_TF._.l.a('confirm');
												}
											}
										},
										{
											"type": "group",
											"container": { "className": "TFLoginButtonRowSpaced TFLoginVerticalSpace" },
											"items": [
												{
													"type": "button",
													"layout": "tf-simple",
													"control": {
														"theme": tfc_TF.theme + ":subtle",
														"html": "Logout",
														"style": "width: 100%;",
														"width": "100%",
														"onClick": function () { tfc_TF.logout(); }
													}
												},
												{
													"type": "button",
													"layout": "tf-simple",
													"control": {
														"theme": tfc_TF.theme + ":subtle",
														"html": "Cancel",
														"style": "width: 100%;",
														"width": "100%",
														"onClick": function () { $('TF.LOGIN').style.display = 'none'; }
													}
												},
											]
										}

									]
								},
								{ // FORGOT PASSWORD PANEL
									"type": "group",
									"id": "forgot-pw",
									"include": function () {
										return this.data.state == 'forgot-pw';
									},
									"items": [
										{
											"type": "html",
											"layout": "tf-simple",
											"control": {
												"html": function () {
													var html = [
														'<div style="text-align: center;"><img src="TFLoginLogo.png"></div>',
														'<div class="TFLoginPWMsg">',
														'Enter your email and press the "Send Code" button. ',
														'A reset password code will be sent to your email. ',
														'</div>'
													].join('');
													return html;
												},
												"width": "100%"
											}
										},
										{
											"type": "group",
											"container": { "className": "TFLoginFields" },
											"items": [
												{
													"type": "edit",
													"layout": "tf-simple",
													"data": {
														"from": "userId",
														"required": true,
														"validate": function (p, v, d) {
															if (['login', 'create-user', 'forgot-pw'].indexOf(this.data.state) == -1) return;
															if (v == '') {
																return 'You must enter a valid email address.';
															}
														}
													},
													"control": {
														"theme": tfc_TF.theme + ":primary",
														"width": "100%",
														"placeholder": { "text": "Email" },
														"behavior": {
															"edit": {
																"type": "email",
																"autocomplete": "email"
															}
														}
													}
												}
											]
										},
										{
											"type": "group",
											"container": { "className": "TFLoginButtonRow" },
											"items": [
												{
													"type": "button",
													"layout": "tf-simple",
													"control": {
														"theme": tfc_TF.theme + ":subtle",
														"html": "Cancel",
														"style": "width: 100%;",
														"width": "100%",
														"onClick": function () {
															if (tfc_TF.state.login.state == 'logged-in') $('TF.LOGIN').style.display = 'none';
															else tfc_TF.login();
														}
													}
												},
												{
													"type": "button",
													"layout": "tf-simple",
													"control": {
														"theme": tfc_TF.theme + ":primary",
														"html": "Send Code",
														"style": "width: 100%;",
														"width": "100%",
														"onClick": function () {
															if (this.validate()) tfc_TF._.l.a('forgot-pw');
														}
													}
												}
											]
										}
									]
								},
								{ // RESET PASSWORD PANEL
									"type": "group",
									"id": "reset-pw",
									"include": function () {
										return this.data.state == 'reset-pw' || this.data.state == 'force-reset-pw' || this.data.state == 'code-reset-pw';
									},
									"items": [
										{
											"type": "html",
											"layout": "tf-simple",
											"control": {
												"html": function () {
													var html = [
														'<div style="text-align: center;"><img src="TFLoginLogo.png"></div>',
														'<div class="TFLoginPWMsg">',
														(this.data.state == 'force-reset-pw' ? 'You must reset ' : 'Reset '),
														'the password for: ',
														'<strong>' + tfc_TF.state.login.user.id + '</strong>',
														'</div>'
													].join('');
													return html
												},
												"width": "100%"
											}
										},
										{
											"type": "group",
											"container": { "className": "TFLoginFields" },
											"items": [
												{
													"type": "edit-password",
													"include": function () {
														return this.data.state == 'reset-pw';
													},
													"layout": "tf-simple",
													"data": {
														"from": "currentPW",
														"required": true,
														"validate": function (p, v, d) {
															if (this.data.state != 'reset-pw') return;
															if (v == '') {
																return 'You must enter your current password.';
															}
														}
													},
													"control": {
														"theme": tfc_TF.theme + ":primary",
														"width": "100%",
														"placeholder": { "text": "Current password" }
													}
												},
												{
													"type": "edit",
													"include": function () { return this.data.state == 'code-reset-pw'; },
													"layout": "tf-simple",
													"data": {
														"from": "fpCode",
														"required": true,
														"validate": function (p, v, d) {
															if (this.data.state != 'code-reset-pw') return;
															if (v == '') {
																return 'You must enter the code that was emailed to you.';
															}
														}
													},
													"control": {
														"theme": tfc_TF.theme + ":primary",
														"width": "100%",
														"style": "text-align: center;",
														"placeholder": { "text": "Code" }
													}
												},
												{
													"type": "button",
													"layout": "tf-simple",
													"include": function () {
														return this.data.state == 'code-reset-pw';
													},
													"container": { "style": "text-align: right;" },
													"control": {
														"theme": tfc_TF.theme + ":subtle",
														"html": "Send New Code",
														"style": "",
														"width": "",
														"onClick": function () { this.data.userId = tfc_TF.state.login.user.id; tfc_TF._.l.a('forgot-pw'); }
													}
												},
												{
													"type": "edit-password",
													"layout": "tf-simple",
													"data": {
														"from": "newPW1",
														"required": true,
														"validate": function (p, v, d) {
															if (this.data.state.indexOf('reset-pw') == -1) return;
															if (v == '') {
																return 'You must enter a new password.';
															}
														}
													},
													"control": {
														"theme": tfc_TF.theme + ":primary",
														"width": "100%",
														"placeholder": { "text": "New password" }
													}
												},
												{
													"type": "edit-password",
													"layout": "tf-simple",
													"data": {
														"from": "newPW2",
														"required": true,
														"validate": function (p, v, d) {
															if (this.data.state.indexOf('reset-pw') == -1) return;
															if (v == '') {
																return 'You must enter a new password.';
															} else if (v != d.newPW1) {
																return 'Your passwords do not match.';
															}
														}
													},
													"control": {
														"theme": tfc_TF.theme + ":primary",
														"width": "100%",
														"placeholder": { "text": "Confirm new password" },
														"onKeyUp": function (dObj, ele, e) {
															if (e.key == 'Enter') {
																if (this.validate()) tfc_TF._.l.a('reset-pw');
															}
														}
													}
												}
											]
										},
										{
											"type": "group",
											"container": { "className": "TFLoginButtonRow" },
											"items": [
												{
													"type": "button",
													"include": function () {
														return this.data.state != 'force-reset-pw';
													},
													"layout": "tf-simple",
													"control": {
														"theme": tfc_TF.theme + ":subtle",
														"html": "Cancel",
														"style": "width: 100%;",
														"width": "100%",
														"onClick": function () {
															if (tfc_TF.state.login.state == 'logged-in') $('TF.LOGIN').style.display = 'none';
															else tfc_TF.login();
														}
													}
												},
												{
													"type": "button",
													"layout": "tf-simple",
													"control": {
														"theme": tfc_TF.theme + ":primary",
														"html": "Change Password",
														"style": "width: 100%;",
														"width": "100%",
														"onClick": function () {
															if (this.validate()) tfc_TF._.l.a('reset-pw');
														}
													}
												}
											]
										}
									]
								},
								{ // ACCOUNT PANEL
									"type": "group",
									"id": "account",
									"include": function () {
										return this.data.state == 'account';
									},
									"items": [
										{
											"type": "html",
											"layout": "tf-simple",
											"control": {
												"html": function () {
													var html = [
														'<div style="text-align: center;"><img src="TFLoginLogo.png"></div>',
														'<div class="TFLoginAccountMsg">Logged in as: ',
														'<strong>' + tfc_TF.state.login.user.id + '</strong>',
														'<br />',
														'Please select the TransForm account you wish to use.',
														'</div>'
													].join('');
													return html;
												},
												"width": "100%"
											}
										},
										{
											"type": "group",
											"container": { "className": "TFLoginFields" },
											"items": [
												{
													"type": "list",
													"layout": "tf-simple",
													"data": {
														"from": "account",
														"required": true,
														"validate": function (p, v, d) {
															if (this.data.state != 'account') return;
															if (v == '') {
																return 'You must chose an account.';
															}
														}
													},
													"control": {
														"onDblClick": function () {
															if (this.validate()) tfc_TF._.l.a('account');
														},
														"theme": tfc_TF.theme + ":primary",
														"width": "100%",
														"content": {
															"style": "max-height: 120px; overflow: auto; text-align: left;"
														},
														"data": {
															"src": function () {
																return { src: this.accounts };
															}
														},
														"layout": "main",
														"layouts": {
															"main": {
																"item": {
																	"html": '<div style="display: flex; flex-direction: row; align-items: center;"><div style="flex: 1 1 auto;">{name}</div><div style="font-size: 10px;">({id})</div></div>',
																	"value": "id"
																}
															}
														}
													}
												}
											]
										},
										{
											"type": "group",
											"container": { "className": "TFLoginButtonRow" },
											"items": [
												{
													"type": "button",
													"layout": "tf-simple",
													"control": {
														"theme": tfc_TF.theme + ":subtle",
														"html": "Logout",
														"style": "width: 100%;",
														"width": "100%",
														"onClick": function () { tfc_TF.login(); }
													}
												},
												{
													"type": "button",
													"layout": "tf-simple",
													"control": {
														"theme": tfc_TF.theme + ":primary",
														"html": "Select Account",
														"style": "width: 100%;",
														"width": "100%",
														"onClick": function () {
															if (this.validate()) tfc_TF._.l.a('account');
														}
													}
												}
											]
										}
									]
								},
								{ // TWO-FACTOR PANEL
									"type": "group",
									"id": "two-factor",
									"include": function () {
										return this.data.state == 'two-factor';
									},
									"items": [
										{
											"type": "html",
											"layout": "tf-simple",
											"control": {
												"html": function () {
													var method = this.tfSentTo;
													var msg = '';
													if (method == 'app') msg = 'Use the authenticator application to finish login.';
													else if (method == 'sms') msg = 'Enter the authentication code you\'ve received via SMS.';
													else if (method == 'email') msg = 'Enter the authentication code you\'ve received via email.';
													var html = [
														'<div style="text-align: center;"><img src="TFLoginLogo.png"></div>',
														'<div id="TF.LOGIN.TWO-FACTOR.MSG" class="TFLoginTwoFactorMsg">' + msg + '</div>'
													].join('');
													return html
												},
												"width": "100%"
											}
										},
										{
											"type": "group",
											"container": { "className": "TFLoginFields" },
											"items": [
												{
													"type": "edit",
													"layout": "tf-simple",
													"data": {
														"from": "tfCode",
														"required": true,
														"validate": function (p, v, d) {
															if (this.data.state != 'two-factor') return;
															if (v == '') {
																return 'You must must enter the authentication code you received via email or SMS.';
															}
														}
													},
													"control": {
														"theme": tfc_TF.theme + ":primary",
														"width": "100%",
														"style": "text-align: center;",
														"placeholder": { "text": "Authentication code" },
														"onKeyUp": function (dObj, ele, e) {
															if (e.key == 'Enter') {
																if (this.validate()) tfc_TF._.l.a('tf-submit');
															}
														}
													}
												}
											]
										},
										{
											"type": "button",
											"layout": "tf-simple",
											"container": { "className": "TFLoginVerticalSpace" },
											"control": {
												"theme": tfc_TF.theme + ":primary",
												"html": "Submit Code",
												"style": "width: 100%;",
												"width": "100%",
												"onClick": function () {
													if (this.validate()) tfc_TF._.l.a('tf-submit');
												}
											}
										},
										{
											"type": "group",
											"container": { "className": "TFLoginButtonRowSpaced" },
											"items": [
												{
													"type": "button",
													"layout": "tf-simple",
													"control": {
														"theme": tfc_TF.theme + ":subtle",
														"html": "Resend code",
														"style": "width: 100%;",
														"width": "100%",
														"onClick": function () { tfc_TF._.l.a('tf-resend', 'default'); }
													}
												},
												{
													"type": "button",
													"layout": "tf-simple",
													"control": {
														"theme": tfc_TF.theme + ":subtle",
														"html": "Use a different method",
														"style": "width: 100%;",
														"width": "100%",
														"onClick": function () { tfc_TF._.l.a('tf-resend-choose', 'default'); }
													}
												}
											]
										},
										{
											"type": "button",
											"layout": "tf-simple",
											"container": { "style": "text-align: left;" },
											"control": {
												"theme": tfc_TF.theme + ":subtle",
												"html": "Logout",
												"onClick": function () { tfc_TF.login(); }
											}
										}
									]
								},
								{
									"type": "html",
									"include": function () {
										var s = this.data.state;
										return s == 'login' || s == 'create-user';
									},
									"container": { "className": "TFLoginCopyright" },
									"control": {
										"html": function () {
											var d = new Date();
											return '&copy; Copyright ' + d.getFullYear() + ' Alpha Software Corporation.<br/>All Rights Reserved.';
										}
									}
								}
							]
						}
					}, {}, {
						theme: tfc_TF.theme
					});
				}
			}
		}

	},


	// current state
	state: {
		login: {
			state: 'logged-out',
			mode: null,
			expires: null,
			token: null,
			user: {
				id: null, // logged in user ID (email)
				name: null // logged in user name
			},
			account: {
				id: null, // account ID
				name: null, // selected account name
				member: {
					roles: null,
					ui: { allow: { design: false, manage: false, dashboard: false, account: false, developer: false, filler: { web: false, mobile: false } } }
				}, // information about logged in user relative to account
				permissions: {} // account permissions
			},
			activity: []
		},
		ui: {
			tab: 'home',
			dirty: {
				dashboard: false,
				manage: false,
				design: false
			},
			dock: {
				type: '',
				active: false
			},
			help: {
				mode: 'docked'
			},
			home: {
				forms: { collapsed: false },
				dashboards: { collapsed: false }
			},
			editing: {
				json: {
					forms: false
				}
			}
		}
	},

	init: function () {
		if (typeof A5.formBox != 'undefined') {
			A5.u.object.assign(A5.formBox.guides.layouts, {
				"tf-label-flex": "<div class=\"TFFormItem\"><div class=\"TFFormItemFlex\"><div class=\"TFFormItemLabel\">{label}</div><div class=\"TFFormItemContent\">{content}</div></div><div class=\"TFFormItemExtra\">{error}{description}</div></div>",
				"tf-label-above": "<div class=\"TFFormItem\"><div class=\"TFFormItemLabel\">{label}</div><div class=\"TFFormItemContent\">{content}</div><div class=\"TFFormItemExtra\">{error}{description}</div></div>",
				"tf-button": "<div class=\"TFFormItem\"><div class=\"TFFormItemFlex\"><div class=\"TFFormItemLabel\">&nbsp;</div><div class=\"TFFormItemContent\">{content}</div></div><div class=\"TFFormItemExtra\">{error}{description}</div></div>",
				"tf-simple": "{content}{error}"
			});
		}
		if (!this._.l.initialized) this._.l.i();
	},

	// login/out
	login: function () {
		var type = typeof arguments[0] == 'string' ? arguments[0] : 'login';
		var ls = this.state.login.state;
		var d = {
			state: '',
			userId: '',
			pw: '',
			confirmPW: '',
			currentPW: '',
			newPW1: '',
			newPW2: '',
			account: '',
			tfCode: '',
			fpCode: ''
		}
		if (type != 'forgot-pw' && type != 'create-user' && type != 'code-reset-pw') {
			if (ls == 'login-expired') {
				if (type != 'confirm') type = 'login';
			} else if (ls != 'logged-in' && ls != 'logging-in') type = 'login';

			var lm = this.state.login.mode;
			if (lm) {
				if (lm.type == 'create-account') type = 'create-user';
				else if (lm.type == 'confirm-user') type = 'create-user';
				else if (lm.type == 'code-reset-pw') {
					type = lm.type;
					d.fpCode = lm.code;
				}
			}
		}


		// make old create user get opened
		if (!tfc_TF._.beta() && type == 'create-user') {
			window.open('CreateAccount.html');
			return false;
		}

		d.state = type;
		var l = this._.l;
		l.c();
		l.f.populate(d);
		l.ele.style.display = '';
		if (type == 'confirm' || type == 'reset-pw') A5.u.element.cls(l.ele, '+=TFLoginTrans');
		else A5.u.element.cls(l.ele, '-=TFLoginTrans');
	},
	logout: function () {
		tfc_TF.u.message.show('confirm-cancel', 'Logout', 'Are you sure you want to logout?', {
			action: function (v) {
				if (v == 'confirm') {
					var l = tfc_TF.state.login;
					tfc_TF._.act('logout', { user: l.user, account: { name: l.account.name, id: l.account.id }, token: l.token });
					A5.u.object.assign(tfc_TF.state.login, {
						state: 'logged-out',
						expires: null,
						token: null,
						user: {
							name: null,
							id: null,
						},
						account: {
							id: null,
							name: null,
							member: {
								roles: null,
								ui: { allow: { design: false, manage: false, dashboard: false, account: false, developer: false } }
							},
							permissions: {}
						},
						activity: []
					});
					tfc_TF._.saveState();
					location.href = location.href;
				}
			}
		});
	},

	// request
	request: function (type, data) {
		return new Promise(function (resolve, reject) {
			const td = tfc_TF._.r.t[type];
			if (typeof td == 'undefined') {
				// error - not a valid type
				reject({ error: 'request-type', type: type });
			} else {
				const url = tfc_TF.url;
				const uid = Date.now();

				var args = ['type=' + type];
				if (typeof data == 'object' && data) args.push('data=' + urlencode(JSON.stringify(data)));
				args.push('token=' + (tfc_TF.state.login.token ? urlencode(tfc_TF.state.login.token) : ""));
				args = args.join('&')
				const xhr = new XMLHttpRequest();
				xhr.open('POST', url);
				xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
				xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=UTF-8');
				xhr.overrideMimeType('text/html; charset=UTF-8');
				xhr.onload = function () {
					// server response
					if (xhr.status >= 200 && xhr.status < 300) {
						try {
							// parse JSON response
							var res = JSON.parse(xhr.response);
						} catch (err) {
							// error - response not JSON
							reject({ error: 'request-response', type: 'json-parse', data: err });
							delete tfc_TF._.r.i[uid];
						}
						if (res) {
							if (!res.success) {
								// problem on server
								if (res.data?.error == 'login-expired') {
									tfc_TF.state.login.state = 'login-expired';
									tfc_TF.login('confirm');
									tfc_TF._.l.ra.push(uid);
								} else if (res.data?.error == 'login-required') {
									tfc_TF.state.login.state = 'logged-out';
									tfc_TF.login();
									tfc_TF._.l.ra.push(uid);
								} else {
									reject(res.data);
									delete tfc_TF._.r.i[uid];
									if (res.data?.error == 'custom') tfc_TF.u.message.show('confirm', res.data.message.title, res.data.message.text, { icon: 'warning' });
									else if (res.data?.error == 'permission-denied' || res.data?.error == 'invalid-data' || res.data?.error == 'login-account-denied') {
										var msg = null;
										var ed = tfc_TF._.r.e;
										if (res.data.error == 'permission-denied') msg = ed.pd.generic;
										else if (res.data.error == 'login-account-denied') {
											msg = ed.lad.generic;
											if (typeof ed.lad[res.data?.type] == 'object') msg = ed.lad[res.data.type];
											tfc_TF.login();
										} else {
											// get the type
											var edt = A5.u.object.get(ed.id, res.data?.type);
											// get the issue
											if (edt) msg = A5.u.object.get(edt, res.data?.issue);
										}
										if (msg) tfc_TF.u.message.show('confirm', msg.title, msg.text, { icon: 'warning' });
									}
								}
							} else {
								resolve(res.data);
								delete tfc_TF._.r.i[uid];
							}
						}
					} else {
						// no success on server - preform resend?
					}
				};
				xhr.onerror = function (err) {
					// callback error
					reject({ error: 'request-response', type: 'server', data: err });
					delete tfc_TF._.r.i[uid];
				};
				tfc_TF._.r.i[uid] = { type: type, data: data, def: td, count: 0, xhr: xhr };

				if ((tfc_TF.state.login.state == 'login-expired' || tfc_TF.state.login.state == 'logged-out') && !(type.indexOf('login') == 0 || (type == 'update-log' && data?.type == 'activity'))) {
					tfc_TF.login((tfc_TF.state.login.state == 'login-expired' ? 'confirm' : null));
					tfc_TF._.l.ra.push(uid);
				} else xhr.send(args);
			}
		});
	},

	// utilities
	u: {
		re: {
			url: /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i,
			email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
		},
		code: {
			lang: {
				'json': {
					validate: function (json) {
						try {
							var o = JSON.parse(json);
						} catch (e) {
							return e;
						}
						return true;
					},
					reformat: function (json) {
						try {
							var o = JSON.parse(json);
							json = JSON.stringify(o, '', '\t');
						} catch (e) { }
						return json;
					},
					keywords: {
						caseSensitive: true,
						values: []
					},
					draw: function (v) {
						var ti = v[0];
						var tin = '';
						var lookFor = false;
						var v2 = [];
						var lookI = 0;
						for (var i = 0; i < v.length; i++) {
							tin = v[i + 1];
							if (lookFor) {
								lookI = v.substr(i).search(lookFor);
								if (lookI == -1) {
									v2.push(v.substr(i));
									break;
								} else {
									v2.push(v.substr(i, lookI + 1));
									v2.push('__ENDSPAN__');
									i += lookI;
								}
								tin = v[i + 1];
								lookFor = false;
							} else {
								if (ti == '"') {
									lookFor = '"';
									v2.push('__STR__');
								} else if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].indexOf(ti) != -1) {
									lookFor = /[^0-9\.]/;
									v2.push('__NUM__');
								}
								v2.push(ti);
							}
							ti = tin;
						}
						v = v2.join('');
						v = A5.u.html.escape(v);
						v = v.replace(/(\{|\}|\[|\])/g, '<span class="TFCodeJSONBrackets">$1</span>');
						v = v.replace(/(,|:)/g, '<span class="TFCodeJSONSep">$1</span>');
						v = v.replace(/(false|true)([^A-z]|$)/g, '<span class="TFCodeJSONBool">$1</span>$2');
						v = v.split('__STR__').join('<span class="TFCodeJSONStr">');
						v = v.split('__NUM__').join('<span class="TFCodeJSONNum">');
						v = v.split('__ENDSPAN__').join('</span>');
						return { html: v, lines: { errorsOn: [], errors: {}, count: v.split('\n').length } };
					}
				},
				'js': {
					keywords: {
						caseSensitive: true,
						values: ['Array', 'Date', 'eval', 'function', 'hasOwnProperty', 'Infinity', 'isFinite', 'isNaN', 'isPrototypeOf', 'length', 'Math', 'NaN', 'Number', 'Object', 'prototype', 'String', 'toString', 'undefined', 'valueOf', 'abstract', 'arguments', 'await', 'boolean', 'break', 'byte', 'case', 'catch', 'char', 'const', 'continue', 'debugger', 'default', 'delete', 'do', 'double', 'else', 'enum', 'eval', 'export', 'extends', 'false', 'final', 'finally', 'float', 'for', 'function', 'goto', 'if', 'implements', 'import', 'in', 'instanceof', 'int', 'interface', 'let', 'long', 'native', 'new', 'null', 'package', 'private', 'protected', 'public', 'return', 'short', 'static', 'super', 'switch', 'synchronized', 'this', 'throw', 'throws', 'transient', 'true', 'try', 'typeof', 'var', 'void', 'volatile', 'while', 'with', 'yield']
					},
					draw: function (v) {
						var ti = v[0];
						var tin = '';
						var lookFor = false;
						var v2 = [];
						var lookI = 0;
						for (var i = 0; i < v.length; i++) {
							tin = v[i + 1];
							if (lookFor) {
								lookI = v.substr(i).search(lookFor);
								if (lookI == -1) {
									v2.push(v.substr(i));
									break;
								} else {
									v2.push(v.substr(i, lookI + 1));
									v2.push('__ENDSPAN__');
									i += lookI;
								}
								tin = v[i + 1];
								lookFor = false;
							} else {
								if (ti == '/' && tin == '/') {
									lookFor = '\n';
									v2.push('__COMMENT__');
								} else if (ti == '/' && tin == '*') {
									lookFor = '\\*/';
									v2.push('__COMMENT__');
								} else if (ti == '\'') {
									lookFor = '\'';
									v2.push('__STR__');
								} else if (ti == '"') {
									lookFor = '"';
									v2.push('__STR__');
								} else if (ti == '`') {
									lookFor = '`';
									v2.push('__STR__');
								} else if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].indexOf(ti) != -1) {
									lookFor = /[^0-9\.]/;
									v2.push('__NUM__');
								}
								v2.push(ti);
							}
							ti = tin;
						}
						v = v2.join('');
						v = v.replace(/(\{|\}|\[|\]|\(|\)|instanceof|typeof|>>>|!==|===|\*\*=|>>|<<|\|\||&&|<=|>=|!=|==|%=|\/=|\*=|-=|\+=|--|\+\+|\*\*|\^|~|\||&|!|\?|<|>|=|%|\/|\*|-|\+|;|:)/g, '<span class="op">$1</span>');
						v = v.replace(/(Array|Date|eval|function|hasOwnProperty|Infinity|isFinite|isNaN|isPrototypeOf|length|Math|NaN|Number|Object|prototype|String|toString|undefined|valueOf|abstract|arguments|await|boolean|break|byte|case|catch|char|const|continue|debugger|default|delete|do|double|else|enum|eval|export|extends|false|final|finally|float|for|function|goto|if|implements|import|in|instanceof|int|interface|let|long|native|new|null|package|private|protected|public|return|short|static|super|switch|synchronized|this|throw|throws|transient|true|try|typeof|var|void|volatile|while|with|yield)([^A-z]|$)/g, '<span class="keyword">$1</span>$2');
						v = v.split('__STR__').join('<span class="str">');
						v = v.split('__NUM__').join('<span class="num">');
						v = v.split('__COMMENT__').join('<span class="comment">');
						v = v.split('__ENDSPAN__').join('</span>');
						return { html: v, lines: { errorsOn: [], errors: {}, count: v.split('\n').length } };
					}
				},
				'tpl': {
					keywords: {
						caseSensitive: false,
						values: ['IF', 'ELSEIF', 'ELSE', 'ENDIF', 'FOR', 'TO', 'STEP', 'CONTINUE', 'EXITFOR', 'ENDFOR', 'ON', 'ENDON', 'FUNCTION', 'ENDFUNCTION', 'RETURN', 'DEBUGGER'],
					},
					draw: function (v) {
						v = v.split('\n');
						var t = null;
						var ti = null;
						var pti = null;
						var nti = null;
						var html = [];
						var lErr = null;
						var errors = {};
						var errorsOn = [];
						var suf = '';
						var qRE = /"/g;
						for (var i = 0; i < v.length; i++) {
							lErr = null;
							html.push('<div>');
							if (v[i] == '') html.push('\n');
							else if (v[i][0] == '\'') html.push('<span class="tplCode-comment">' + v[i] + '</span>\n');
							else {
								t = breakIntoTokens(v[i], 0);
								pti = null;
								if (t.length > 0) {
									ti = t[0];
									for (var j = 0; j < t.length; j++) {
										nti = j < t.length - 1 ? t[j + 1] : null;
										if (nti && nti.type == 'error') {
											if (ti.type == 'string') html.push('<span class="tplCode-error">"' + A5.u.html.escape(ti.text) + '</span>');
											else html.push('<span class="tplCode-error">' + A5.u.html.escape(ti.text) + '</span>');
											lErr = A5.u.html.escape(nti.text.replace(qRE, '\\"'));
										} else if (ti.type != 'error' && ti.type != 'eol') {
											if (ti.type == 'spacing') html.push(ti.text);
											else if (ti.type == 'string') html.push('<span class="tplCode-string">"' + A5.u.html.escape(ti.text.replace(qRE, '\\"')) + '"</span>');
											else if (ti.type == 'text') {
												if (this.keywords.values.indexOf(ti.text.toUpperCase()) != -1) html.push('<span class="tplCode-keyword">' + A5.u.html.escape(ti.text) + '</span>');
												else if (nti && nti.type == 'op' && nti.text == '(') html.push('<span class="tplCode-call">' + A5.u.html.escape(ti.text) + '</span>');
												else html.push('<span class="tplCode-text">' + A5.u.html.escape(ti.text) + '</span>');
											} else if (ti.type == 'op') {
												if (ti.op == 'M') html.push('<span class="tplCode-number">-</span>');
												else if (ti.op == 'P') html.push('<span class="tplCode-number">+</span>');
												else html.push('<span class="tplCode-op">' + A5.u.html.escape(ti.op) + '</span>');
											} else html.push('<span class="tplCode-' + ti.type + '">' + A5.u.html.escape(ti.text) + '</span>');
										}
										pti = ti;
										ti = nti;
									}

									if (pti.pos < v[i].length) {
										suf = v[i].substr(pti.pos + (pti.typeof != 'eol' ? pti.text.length : 0));
										if (suf[0] == '\'') suf = '<span class="tplCode-comment">' + suf + '</span>';
										else suf = '<span class="tplCode-text">' + suf + '</span>';
										html.push(suf);
									}
								}
							}
							html.push('</div>');

							if (lErr) {
								errorsOn.push(i);
								errors['line-' + i] = lErr;
							}
						}
						html = html.join('');

						return { html: html, lines: { errors: errors, errorsOn: errorsOn, count: v.length } };
					}
				}
			},
			Editor: A5.u.object.creator({
				init: function (id, s) {
					A5.u.object.assign(s, {
						lang: '',
						className: '',
						size: {
							font: '15px',
							line: '20px',
							tab: '20px',
							padding: '6px'
						},
						margin: {
							show: true,
							className: '',
							line: {
								base: 1,
								className: '',
								errorClassName: ''
							}
						},
						onChange: null,
						onStateChange: null
					}, true);
					A5.u.object.assign(this, s);

					var ele = $(id);
					var html = [
						'<div class="' + this.margin.className + '" style="min-width: 40px; line-height: inherit; font-family: inherit; font-size: 12px; overflow: hidden; ' + (!this.margin.show ? 'display: none;' : '') + '"><div class="' + this.margin.line.className + '">' + this.margin.line.base + '</div></div>',
						'<div style="overflow: auto; flex: 1 1 0%;" onscroll="this.previousSibling.scrollTop = this.scrollTop;">',
						'<div style="position: relative; min-width: 100%; min-height: 100%; width: fit-content;">',
						'<div id="' + id + '.COLORIZED" style="white-space: pre; line-height: inherit; font-family: inherit; font-size: inherit; tab-size: inherit; padding: 0px ' + this.size.padding + '; box-sizing: border-box;"></div>',
						'<textarea id="' + id + '.CODE" spellcheck="false" style="position: absolute; top: 0px; left: 0px; bottom: 0px; width: 100%; color: transparent; caret-color: #000; background: transparent; resize: none; padding: 0px ' + this.size.padding + '; border: none; outline: none; white-space: pre; line-height: inherit; font-family: inherit; font-size: inherit; tab-size: inherit; box-sizing: border-box;"></textarea>',
						'&nbsp;',
						'</div>',
						'</div>'
					];


					ele.innerHTML = html.join('');
					ele.className = this.className;
					A5.u.element.style(ele, '+=position: relative; display: inline-flex; font-family: monospace; font-size: ' + this.size.font + '; line-height: ' + this.size.line + '; tab-size: ' + this.size.tab + '; overflow: hidden;');

					$e.add(id + '.CODE', 'input', function (e, c) {
						if (c.value == this.value) return false;
						var cc = tfc_TF.u.code.lang[c.lang];
						var res = {};
						if (cc) res = cc.draw(this.value);
						else {
							res.html = this.value;
							res.lines = {
								errorsOn: [],
								errors: {},
								count: res.html.split('\n').length
							}

							/*
								var res = cc.parse(value[,start[,end]])
								res.html = ['<div>....','...']
								res.errors = [{index: n, text: ''}]
								res.warnings = [{index: n, text: ''}]
								res.info = [{index: n, text: ''}]
							*/
						}

						this.previousSibling.innerHTML = res.html;
						var lHTML = [];
						var lb = c.margin.line.base;
						for (var i = 0; i < res.lines.count; i++) {
							if (res.lines.errorsOn.indexOf(i) != -1) lHTML.push('<div class="' + c.margin.line.className + ' ' + c.margin.line.errorClassName + '" title="' + res.lines.errors['line-' + i] + '">' + (i + lb) + '</div>');
							else lHTML.push('<div class="' + c.margin.line.className + '">' + (i + lb) + '</div>');
						}

						lHTML.push('<div style="height: 100px;">&nbsp;</div>')
						lHTML = lHTML.join('');
						this.parentNode.parentNode.previousSibling.innerHTML = lHTML;
						c._.state(c, 'dirty', true);
						c.value = this.value;
						if (typeof c.onChange == 'function') c.onChange();
					}, this);
					$e.add(id + '.CODE', 'keyup', function (e, c) {
						if (['ArrowLeft', 'ArrowRight', 'ArrowDown', 'ArrowUp', 'PageUp', 'PageDown', 'Home', 'End', 'Backspace', 'Enter'].indexOf(e.code) != -1) {
							c._.nav();
						} else if (e.code[0] == 'K') {
							c._.sel.start++;
							c._.sel.end = c._.sel.start;
							c._.sel.length = 0;
						}
					}, this);
					$e.add(id + '.CODE', 'keydown', function (e, c) {
						if (e.code == 'Tab') {
							e.preventDefault();
							A5.edit.insert(this, '\t');
						} else if (e.code == 'Enter' && c._.line > 0) {
							e.preventDefault();
							var ele = c._.ele;
							var ws = ele.value.split('\n')[c._.line];
							var txt = ws.replace(/^[\s]+/, '');
							ws = ws.substr(0, ws.length - txt.length)
							A5.edit.insert(this, '\n' + ws);

						}
					}, this);
					$e.add(id + '.CODE', A5.d.evnts.click, function (e, c) { c._.nav(); }, this);

					this.state = {
						isDirty: false
					}
					this._ = {
						id: id,
						ele: $(id + '.CODE'),
						sel: null,
						line: -1,
						col: -1,
						state: function (c, t, v) {
							if (t == 'dirty') {
								if (c.state.isDirty != v) {
									c.state.isDirty = v;
									if (typeof c.onStateChange == 'function') c.onStateChange(t, v);
								}
							}
						},
						nav: function () {
							var ele = this.ele;
							var sel = A5.edit.getSelection(ele);
							var lns = ele.value.substr(0, sel.end).split('\n');
							this.line = lns.length - 1;
							this.col = lns[lns.length - 1].length;
							this.sel = sel;
						}
					}
				},
				setValue: function (v) {
					var ele = this._.ele;
					A5.edit.setSelection(ele, 0, ele.value.length);
					A5.edit.insert(ele, v);
					$e.execute(ele, 'input');
					this._.state(this, 'dirty', false);
					if (typeof this.onChange == 'function') this.onChange();
				},
				setDirty: function (v) { this._.state(this, 'dirty', v); }
			}),
			editors: {
				json: {
					_: { h: null },
					edit: function (d, h) {
						if (!this._.je) {
							var ele = document.createElement('div');
							ele.id = 'TF.JSON.EDIT';
							A5.u.element.style(ele, 'position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; z-index: 10;');
							ele.className = '';
							ele.innerHTML = [
								'<div class="window" style="position: absolute; top: 12px; left: 12px; right: 12px; bottom: 12px; display: flex; flex-direction: column;">',
								'<div class="TFDockHeader" style="display: flex; flex-direction: row;">',
								'<div style="flex: 1 1 auto;">',
								A5.buttons.html('TF.JSON.EDIT.VALIDATE', { theme: tfc_TF.theme, html: 'Validate', icon: 'svgIcon=#alpha-icon-exclamationTriangle:icon' }),
								A5.buttons.html('TF.JSON.EDIT.REFORMAT', { theme: tfc_TF.theme, html: 'Reformat', icon: 'svgIcon=#alpha-icon-textAlignLeft:icon' }),
								'</div>',
								'<div>',
								A5.buttons.html('TF.JSON.EDIT.SAVE', { theme: tfc_TF.theme, className: 'button buttonConfirm buttonIcon', icon: 'svgIcon=#alpha-icon-save:icon' }),
								A5.buttons.html('TF.JSON.EDIT.CANCEL', { theme: tfc_TF.theme, className: 'button buttonDeny buttonIcon', icon: 'svgIcon=#alpha-icon-x:icon' }),
								'</div>',
								'</div>',
								'<div id="TF.JSON.EDIT.EDITOR" style="flex: 1 1 auto"></div>',
								'</div>'
							].join('');
							document.body.appendChild(ele);

							$e.add('TF.JSON.EDIT.CANCEL', 'click', function () {
								tfc_TF.u.code.editors.json._.ele.style.display = 'none';
								tfc_TF.u.code.editors.json._.h = null;
							});
							$e.add('TF.JSON.EDIT.SAVE', 'click', function () {
								var json = tfc_TF.u.code.editors.json._.je.value;
								var res = tfc_TF.u.code.lang.json.validate(json);
								if (res !== true) {
									tfc_TF.u.message.show('confirm', 'Error', res.message);
								} else {
									var d = JSON.parse(json);
									var h = tfc_TF.u.code.editors.json._.h;
									if (typeof h == 'function') h(d);
									else if (typeof h == 'object' && typeof h.populate == 'function') h.populate(d);
									tfc_TF.u.code.editors.json._.ele.style.display = 'none';
									tfc_TF.u.code.editors.json._.h = null;
								}
							});
							$e.add('TF.JSON.EDIT.VALIDATE', 'click', function (e) {
								var json = tfc_TF.u.code.editors.json._.je.value;
								var res = tfc_TF.u.code.lang.json.validate(json);
								if (res !== true) {
									tfc_TF.u.message.show('confirm', 'Error', res.message);
								}
							});
							$e.add('TF.JSON.EDIT.REFORMAT', 'click', function (e) {
								var json = tfc_TF.u.code.editors.json._.je.value;
								json = tfc_TF.u.code.lang.json.reformat(json);
								tfc_TF.u.code.editors.json._.je.setValue(json);
							});

							var je = new tfc_TF.u.code.Editor('TF.JSON.EDIT.EDITOR', {
								lang: 'json',
								className: 'TFCodeEditor',
								margin: {
									show: true,
									className: 'TFCodeEditorMargin'
								},
								onStateChange: function (t, v) {
									if (t == 'dirty') {

									}
								}
							});
							this._.ele = ele;
							this._.je = je;
						}
						var json = JSON.stringify(d, '', '\t');
						this._.je.setValue(json);
						this._.h = h;
						this._.ele.style.display = 'flex';
					}
				}
			}
		},
		docks: {
			tabs: {
				html: function (idp, tabs, tab) {
					var html = [];
					if (!this.buttons) {
						this.icons = {
							dirty: A5.u.icon.html('svgIcon=#alpha-icon-circleSolid:icon {fill: #ff9000; width: 7px; height: 7px;}')
						}
						this.buttons = {
							save: A5.buttons.html('', { theme: tfc_TF.theme, className: 'button buttonConfirm buttonIcon', icon: 'svgIcon=#alpha-icon-save:icon' }),
							cancel: A5.buttons.html('', { theme: tfc_TF.theme, className: 'button buttonDeny buttonIcon', icon: 'svgIcon=#alpha-icon-x:icon' })
						}
					}

					var hasGroup = false;
					var ti = null;
					var tk = null;
					var ta = null;
					var count = 0;
					for (var i = 0; i < tabs.length; i++) {
						ti = tabs[i];
						if (Array.isArray(ti.items)) {
							hasGroup = true;
							html.push('<div class="TFDockTabGroup"' + (typeof ti.color == 'string' ? ' style="background: ' + ti.color + ';"' : '') + '>');
							html.push('<div>' + ti.title + '</div>');
							html.push('<div>');
							for (var k = 0; k < ti.items.length; k++) {
								tk = ti.items[k];
								if (tab == tk.value) ta = tk;
								this.tabHTML(idp, count, tk, tab, html);
								count++;
							}
							html.push('</div>');
							html.push('</div>');
						} else {
							if (tab == ti.value) ta = ti;
							html.push('<div class="TFDockTabSingle">');
							this.tabHTML(idp, count, ti, tab, html);
							html.push('</div>');
						}
						count++;
					}
					html.push('<div class="TFDockTabEnd">');
					html.push('<div></div>');
					html.push('<div>');
					if (ta && ta.dirty) {
						html.push('<div class="TFDockTabActions">');
						html.push('<div id="' + idp + '.TAB.COMMIT" a5-item="tab-action:commit" onmouseenter="TF.u.flyout.show(this,\'Save changes to current tab...\',{direction: \'vertical\'})" onmouseleave="TF.u.flyout.hide();">' + this.buttons.save + '</div>');
						html.push('<div id="' + idp + '.TAB.CANCEL" a5-item="tab-action:cancel" onmouseenter="TF.u.flyout.show(this,\'Discard changes to current tab...\',{direction: \'vertical\'})" onmouseleave="TF.u.flyout.hide();">' + this.buttons.cancel + '</div>');
						html.push('</div>');
					}
					html.push('</div>');
					html.push('</div>');

					if (hasGroup) html.unshift('<div class="TFDockTabs TFDockTabsGroups">');
					else html.unshift('<div class="TFDockTabs">');

					html.push('</div>');
					return html.join('');
				},
				tabHTML: function (idp, i, ti, tab, html) {
					html.push('<div id="' + idp + '.TAB.' + i + '" a5-item="tab:' + ti.value + '" class="TFDockTab' + (tab == ti.value ? ' TFDockTabSelected' : '') + '">' + ti.html + (ti.dirty ? '<div style="position: absolute; top: 7px; right: 7px; font-size: 0px;">' + this.icons.dirty + '</div>' : '') + '</div>');
				},
				setTabDirty: function (t, v) {
					var ti, tk = null;
					for (var i = 0; i < this.data.tabs.length; i++) {
						ti = this.data.tabs[i];
						if (Array.isArray(ti.items)) {
							for (var k = 0; k < ti.items.length; k++) {
								tk = ti.items[k];
								if (t == tk.value) {
									tk.dirty = v;
									this.refresh();
									return true;
								}
							}
						} else if (t == ti.value) {
							ti.dirty = v;
							this.refresh();
							return true;
						}

					}
					return false;
				},
				getTab: function (t) {
					var ti, tk = null;
					if (typeof t == 'undefined') t = this.data.tab;
					for (var i = 0; i < this.data.tabs.length; i++) {
						ti = this.data.tabs[i];
						if (Array.isArray(ti.items)) {
							for (var k = 0; k < ti.items.length; k++) {
								tk = ti.items[k];
								if (t == tk.value) {
									return tk;
								}
							}
						} else if (t == ti.value) return ti;
					}
					return false;
				},
				items: {
					'tab': {
						selectable: false,
						onClick: function (v, ia) {
							var otv = this.data.tab;
							var ntv = ia;
							if (otv == ntv) return false;
							var ot, nt, ti, tk = null;
							for (var i = 0; i < this.data.tabs.length; i++) {
								ti = this.data.tabs[i];
								if (Array.isArray(ti.items)) {
									for (var k = 0; k < ti.items.length; k++) {
										tk = ti.items[k];
										if (tk.value == otv) ot = tk;
										else if (tk.value == ntv) nt = tk;
									}
								} else {
									if (ti.value == otv) ot = ti;
									else if (ti.value == ntv) nt = ti;
								}
							}
							var res = true;
							if (ot && typeof ot.onBeforeHide == 'function') var res = ot.onBeforeHide();
							if (res) {
								if (nt && typeof nt.onShow == 'function') nt.onShow();
								if (ot && typeof ot.onHide == 'function') var res = ot.onHide();
								this.data.tab = ntv;
								tfc_TF._.act('navigate', { context: this.context, target: ntv });
								this.refresh();
							}
						}
					},
					'tab-action': {
						selectable: false,
						onClick: function (v, ia) {
							tfc_TF.u.flyout.hide();
							var tv = this.data.tab;
							var t, ti, tk = null;
							for (var i = 0; i < this.data.tabs.length; i++) {
								ti = this.data.tabs[i];

								if (Array.isArray(ti.items)) {
									for (var k = 0; k < ti.items.length; k++) {
										tk = ti.items[k];
										if (tk.value == tv) {
											t = tk;
											break;
										}
									}
								} else {
									if (ti.value == tv) {
										t = ti;
										break;
									}
								}
							}
							if (t) {
								if (typeof t.action == 'function') t.action(ia, false);
							}
						}
					}
				}
			}
		},
		panels: {
			lockable: function (p) {
				var id = p.getPanelId();
				var ele = $(id);
				var lEle = document.createElement('div');
				lEle.id = id + '.LOCK';
				lEle.className = 'TFWorkingMessageOverlay';
				lEle.innerHTML = '<div class="TFWorkingMessage"></div>';
				lEle.style.display = 'none';
				ele.appendChild(lEle);

				p.lock = function (m) {
					var lEle = $(this.contId + '.LOCK');
					var mEle = lEle.children[0]
					if (arguments[1]) A5.u.element.cls(mEle, '+=TFWorkingMessageNoInd');
					else A5.u.element.cls(mEle, '-=TFWorkingMessageNoInd');
					mEle.innerHTML = m;
					lEle.style.display = '';
				}
				p.unlock = function (m) {
					var lEle = $(this.contId + '.LOCK');
					lEle.style.display = 'none';
				}
			}
		},
		flyout: {
			_: {
				t: false,
				id: '',
				hide: function (id) {
					if (id != this.id) this.t.hide();
				}
			},
			/*
				show a flyout message
					e = element to flyout from
					m = message 
			*/
			show: function (e, m, s) {
				var id = Date.now().toString(36);
				if (!this._.t) {
					this._.t = new A5.Transient({
						theme: 'Alpha',
						content: { type: 'html', html: '' },
						layout: 'v',
						layouts: {
							v: {
								stretch: 'none',
								innerClassName: 'TFFlyout',
								location: ['dropdown-center'],
								behavior: { type: 'modeless' }
							},
							vl: {
								stretch: 'none',
								innerClassName: 'TFFlyout',
								location: ['dropdown-left'],
								behavior: { type: 'modeless' }
							},
							vr: {
								stretch: 'none',
								innerClassName: 'TFFlyout',
								location: ['dropdown-right'],
								behavior: { type: 'modeless' }
							},
							h: {
								stretch: 'none',
								innerClassName: 'TFFlyout',
								location: ['flyout-top'],
								behavior: { type: 'modeless' }
							}
						}
					});
					var tEle = this._.t.getElement()
					tEle.style.zIndex = '1000';
					tEle.style.pointerEvents = 'none'
				}
				if (typeof s.direction == 'string') {
					var l = 'v';
					if (s.direction[0] == 'h') l = 'h';
					else if (s.direction == 'vertical-left') l = 'vl';
					else if (s.direction == 'vertical-right') l = 'vr';

					if (this._.t.layout != l) this._.t.setLayout(l);
				}
				var cEle = this._.t.getElement('content');
				cEle.innerHTML = m;
				this._.id = id;
				this._.t.show(e);
				return id;
			},
			hide: function () {
				var hide = true;
				if (typeof arguments[0] == 'string' && arguments[0] != this._.id) hide = false;
				if (hide) this._.t.hide();

			},
			/*
				show a flyout message
					id = flyout message instance ID
					m = message html
			*/
			update: function (id, m) {
				if (id == this._.id) {
					var cEle = this._.t.getElement('content');
					cEle.innerHTML = m;
				}
			}
		},

		message: {
			_: {
				ele: null
			},
			show: function (t, mt, m, s) {
				if (typeof s == 'undefined') s = {};
				if (!this._.ele) {
					var ele = document.createElement('div');
					ele.id = 'TF.MSG';
					A5.u.element.style(ele, 'display: none; position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; z-index: 50;');
					ele.className = 'TFMsg';
					ele.innerHTML = '<div id="TF.MSG.CONTENT" class="TFMsgPanel"></div>';
					document.body.appendChild(ele);
					this._.ele = ele;

					var vb = new A5.ViewBox('TF.MSG.CONTENT', [], {
						captureFocus: false,
						buttons: {
							confirm: A5.buttons.html('TF.MSG.B.[[[i]]].CONFIRM', {
								theme: tfc_TF.theme + ':confirm',
								html: '[[[text]]]'
							}, 'a5-item=button:confirm|[[[i]]]'),
							deny: A5.buttons.html('TF.MSG.B.[[[i]]].DENY', {
								theme: tfc_TF.theme + ':deny',
								html: '[[[text]]]'
							}, 'a5-item=button:deny|[[[i]]]'),
							cancel: A5.buttons.html('TF.MSG.B.[[[i]]].CANCEL', {
								theme: tfc_TF.theme + ':subtle',
								html: '[[[text]]]'
							}, 'a5-item=button:cancel|[[[i]]]')
						},
						icons: {
							defaults: {
								'confirm': 'info',
								'confirm-deny': 'question',
								'confirm-cancel': 'question',
								'choice': 'question',
								'choice-deny': 'question',
								'choice-cancel': 'question',
								'prompt': 'question',
								'prompt-cancel': 'question',
								'deny-cancel': 'warning',
								'confirm-deny-cancel': 'warning'
							},
							q: A5.u.icon.html('svgIcon=#alpha-icon-questionCircle:icon{width: 32px; height: 32px;}'),
							e: A5.u.icon.html('svgIcon=#alpha-icon-exclamationTriangle:icon{width: 32px; height: 32px;}'),
							i: A5.u.icon.html('svgIcon=#alpha-icon-infoCircle:icon{width: 32px; height: 32px;}')
						},
						layout: 'main',
						layouts: {
							'main': {
								type: 'static',
								html: function () {
									var d = this.data;
									var di, dit, opk = null;
									var html = [];
									for (var i = 0; i < d.length; i++) {
										di = d[i]
										html.push('<div class="TFMsgItem">');
										html.push('<div>');
										html.push('<div>');
										if (di.type == 'wait' || di.type == 'wait-cancel') {
											html.push('<div class="TFMsgItemWait"></div>');
										} else {
											var icon = di.settings.icon || (typeof this.icons.defaults[di.type] == 'string' ? this.icons.defaults[di.type] : 'info');
											if (icon == 'question') html.push(this.icons.q);
											else if (icon == 'warning') html.push(this.icons.e);
											else if (icon != 'info') html.push(A5.u.icon.html(icon));
											else html.push(this.icons.i);
										}
										html.push('</div>');
										html.push('<div style="flex: 1 1 auto;">');
										if (di.title) {
											html.push('<div class="TFMsgItemTitle">');
											html.push(di.title);
											html.push('</div>');
										}
										if (di.msg) {
											html.push('<div class="TFMsgItemMsg">');
											html.push(di.msg);
											html.push('</div>');
										}
										html.push('</div>');
										html.push('</div>');
										if (di.type == 'confirm' || di.type == 'confirm-deny' || di.type == 'confirm-cancel' || di.type == 'deny-cancel' || di.type == 'confirm-deny-cancel' || di.type == 'wait-cancel') {
											dit = di.settings.text;
											html.push('<div class="TFMsgItemButtons">');
											if (di.type == 'confirm') {
												html.push(this.buttons.confirm.split('[[[i]]]').join(i).replace('[[[text]]]', dit.confirm));
											} else if (di.type == 'confirm-deny') {
												html.push(this.buttons.confirm.split('[[[i]]]').join(i).replace('[[[text]]]', dit.confirm));
												html.push(this.buttons.deny.split('[[[i]]]').join(i).replace('[[[text]]]', dit.deny));
											} else if (di.type == 'confirm-cancel') {
												html.push(this.buttons.confirm.split('[[[i]]]').join(i).replace('[[[text]]]', dit.confirm));
												html.push(this.buttons.cancel.split('[[[i]]]').join(i).replace('[[[text]]]', dit.cancel));
											} else if (di.type == 'deny-cancel') {
												html.push(this.buttons.deny.split('[[[i]]]').join(i).replace('[[[text]]]', dit.deny));
												html.push(this.buttons.cancel.split('[[[i]]]').join(i).replace('[[[text]]]', dit.cancel));
											} else if (di.type == 'confirm-deny-cancel') {
												html.push(this.buttons.confirm.split('[[[i]]]').join(i).replace('[[[text]]]', dit.confirm));
												html.push(this.buttons.deny.split('[[[i]]]').join(i).replace('[[[text]]]', dit.deny));
												html.push(this.buttons.cancel.split('[[[i]]]').join(i).replace('[[[text]]]', dit.cancel));
											} else if (di.type == 'wait-cancel') {
												html.push(this.buttons.cancel.split('[[[i]]]').join(i).replace('[[[text]]]', dit.cancel));
											}
											html.push('</div>');
										} else if (di.type == 'choice' || di.type == 'choice-deny' || di.type == 'choice-cancel') {
											html.push('<div class="TFMsgItemButtons" style="flex-wrap: wrap;">');

											for (var k = 0; k < di.settings.options.length; k++) {
												opk = di.settings.options[k];
												html.push(A5.buttons.html('TF.MSG.B.' + i + '.OPTION.' + k, {
													theme: tfc_TF.theme + ':confirm',
													html: (typeof opk == 'string' ? opk : opk.html)
												}, 'a5-item=button:choose|' + i + '|' + k));
											}
											dit = di.settings.text;
											if (di.type == 'choice-cancel') html.push(this.buttons.cancel.split('[[[i]]]').join(i).replace('[[[text]]]', dit.cancel));
											else if (di.type == 'choice-deny') html.push(this.buttons.deny.split('[[[i]]]').join(i).replace('[[[text]]]', dit.deny));
											html.push('</div>');
										} else if (di.type == 'prompt' || di.type == 'prompt-cancel') {
											html.push('<div class="TFMsgItemEdit">');
											if (Array.isArray(di.settings.value)) {
												for (var k = 0; k < di.settings.value.length; k++) {
													html.push('<input class="editPrimary' + (di.error[k] ? ' editError' : '') + '" value="' + di.settings.value[k] + '" oninput="TF.u.message._.vb.data[' + i + '].settings.value[' + k + '] = this.value;" placeholder="' + di.settings.placeholder[k] + '">');
													if (di.error[k]) html.push('<div class="TFMsgItemEditError">' + di.error[k] + '</div>');
												}
											} else {
												html.push('<input class="editPrimary' + (di.error ? ' editError' : '') + '" value="' + di.settings.value + '" oninput="TF.u.message._.vb.data[' + i + '].settings.value = this.value;" placeholder="' + di.settings.placeholder + '">');
												if (di.error) html.push('<div class="TFMsgItemEditError">' + di.error + '</div>');
											}
											html.push('</div>');
											html.push('<div class="TFMsgItemButtons" style="flex-wrap: wrap;">');
											dit = di.settings.text;
											html.push(this.buttons.confirm.split('[[[i]]]').join(i).replace('[[[text]]]', dit.confirm));
											if (di.type == 'prompt-cancel') html.push(this.buttons.cancel.split('[[[i]]]').join(i).replace('[[[text]]]', dit.cancel));
											html.push('</div>');
										}
										html.push('</div>');
									}
									return html.join('');
								}
							}
						},
						items: {
							'button': {
								selectable: false,
								onClick: function (v, ia) {
									ia = ia.split('|');
									var di = this.data[ia[1]];
									if (typeof di.settings.action == 'function') {
										if (ia[0] == 'choose') {
											var o = di.settings.options[ia[2]];
											if (o) di.settings.action((typeof o == 'string' ? o : o.value));
										} else if (di.type.indexOf('prompt') == 0) {
											var res = di.settings.action(ia[0], di.settings.value);
											if (A5.u.typeOf(res) == 'object') {
												di.error = res.error;
												this.refresh();
												return false;
											}
										} else di.settings.action(ia[0]);
									}
									tfc_TF.u.message.hide(di.id, false);
								}
							}
						}
					});
					this._.vb = vb;
				} else {
					var ele = this._.ele;
					var vb = this._.vb;
				}

				var d = vb.data;

				if (t.indexOf('deny') != -1) {
					A5.u.object.assign(s, {
						text: { confirm: 'Yes', deny: 'No', cancel: 'Cancel' }
					}, true);
				} else {
					A5.u.object.assign(s, {
						text: { confirm: 'OK', deny: 'No', cancel: 'Cancel' }
					}, true);
				}

				if (t.indexOf('prompt') == 0) {
					A5.u.object.assign(s, {
						value: '',
						placeholder: ''
					}, true);
				}
				var di = {
					id: (typeof s.id == 'string' ? s.id : 'pid:' + Date.now()),
					type: t,
					title: mt,
					msg: m,
					error: false,
					settings: (A5.u.typeOf(s) == 'object' ? s : {})
				}
				var res = di.id;

				if (typeof s.duration == 'number') setTimeout(function () { tfc_TF.u.message.hide(res); }, s.duration);

				d.push(di);
				ele.style.display = '';
				if (d.length == 1) {
					A5.u.element.transition(ele.children[0], {
						from: { transform: 'translateY(-110%)' },
						to: { transform: 'translateY(0px)' },
						duration: 200
					});
				}
				vb.refresh();
				return res;
			},
			update: function (id, mt, m) {
				var vb = this._.vb;
				var d = vb.data;
				var di = null;
				for (var i = d.length - 1; i >= 0; i--) {
					di = d[i];
					if (di.id == id) {
						if (typeof mt == 'string') di.title = mt;
						if (typeof m == 'string') di.msg = m;
						vb.refresh();
						break;
					}
				}
			},
			hide: function (id) {
				var ele = this._.ele;
				var vb = this._.vb;
				var d = vb.data;
				var di = null;
				var fa = typeof arguments[1] == 'boolean' ? arguments[1] : true;
				for (var i = d.length - 1; i >= 0; i--) {
					di = d[i];
					if (di.id == id) {
						if (typeof di.settings.action == 'function' && fa) di.settings.action('hide');
						d.splice(i, 1);
						break;
					}
				}
				if (d.length == 0) {
					A5.u.element.transition(ele.children[0], {
						from: { transform: 'translateY(0px)' },
						to: { transform: 'translateY(-110%)' },
						duration: 200
					}, function () {
						if (tfc_TF.u.message._.vb.data.length == 0) this.parentNode.style.display = 'none';
					}
					);
				} else vb.refresh();
			}
		},

		filler: {
			_: {
				ele: null,
				iEle: null,
				dirty: false,
				route: {
					m: false,
					q: false,
					default: null,
					current: null,
					tip: function (ele, show) {
						if (show) {
							var m = 'Form will not be routed on save.';
							var c = this.current;
							if (c) {
								if (c.indexOf('queue:') == 0) {
									c = c.split(':');
									c.shift();
									c.pop();
									var q = this.q ? this.q.src : false;
									if (q) {
										var cq = '';
										for (var i = 0; i < c.length; i++) {
											cq = c[i];
											for (var k = 0; k < q.length; k++) {
												if (q[k].queueID == cq) {
													cq = q[k].name;
													break;
												}
											}
											c[i] = '"' + cq + '"';
										}
									} else {
										for (var i = 0; i < c.length; i++) c[i] = '"' + c[i] + '"';
									}
									m = 'Form will be routed to the ' + c.join(', ') + ' queue' + (c.length > 1 ? 's' : '') + ' on save.';
								} else m = 'Form will be routed to "' + A5.u.html.escape(c) + '" on save.';
							}
							tfc_TF.u.flyout.show(ele, m, { direction: 'vertical' });
						} else {
							tfc_TF.u.flyout.hide();
						}
					},
					shown: false,
					show: function () {
						var _f = tfc_TF.u.filler._;
						var _r = _f.route;

						var d = { type: 'none' };
						var c = _r.current;
						if (typeof c == 'string') {
							if (c.indexOf('queue:') == 0) {
								c = c.split(':');
								c.shift();
								c.pop();
								d.type = 'queue';
								d.queue = c;
							} else if (c.trim() != '') {
								d.type = 'member';
								d.member = c;
							}
						}
						_r.f.populate(d);
						_f.rEle.style.display = '';
						_f.lEle.setAttribute('mode', 'route');
						_f.lEle.style.display = '';
						this.shown = true;
						A5.u.element.transition(_f.rEle, {
							from: { transform: 'translateY(-100%)' },
							to: { transform: 'translateY(0%)' }
						});
					},
					hide: function () {
						if (this.shown) {
							A5.u.element.transition(tfc_TF.u.filler._.rEle, {
								from: { transform: 'translateY(0%)' },
								to: { transform: 'translateY(-100%)' },
								after: { display: 'none' }
							}, function () { tfc_TF.u.filler._.lEle.style.display = 'none'; });
							this.shown = false;
						}
					},
					set: function () {
						var _f = tfc_TF.u.filler._;
						var p = _f.route.current;
						if (!p) p = tfc_TF.state.login.user.id;
						_f.iEle.contentWindow.postMessage({ cmd: 'setPersonFiller', person: p }, "*");
					}
				},
				jwtMsg: function (args) {
					var l = tfc_TF.state.login;
					var d = l.expires;
					var e = String(Number(d) / 1000);
					var p = JSON.stringify(l.account.permissions);
					var res = {
						cmd: 'setJWTFromParent',
						efobj: {
							JWTname: l.user.id,
							JWTuserToken: l.token,
							JWTexpiration: e,
							JWTdisplayName: l.user.name,
							JWTaccount: l.account.id,
							JWTrole: l.account.member.roles.join(','),
							JWTpermissions: p,
							EFJWTname: l.user.id,
							EFJWTuserToken: l.token,
							EFJWTexpiration: e,
							EFJWTdisplayName: l.user.name,
							EFJWTaccount: l.account.id,
							EFJWTrole: l.account.member.roles.join(','),
							EFJWTpermissions: p,

						}
					}
					if (typeof args == 'string' && args.trim() != '') res.efobj.JWToverridesearchparams = args;
					return res;
				},
				msg: function (event) {
					var msg = event.data;
					if (typeof msg != 'object') msg = {};
					if (event.origin != location.origin) return; // 2023-11-15 DSB let go to some other handler
					var f = tfc_TF.u.filler;
					var ele = f._.iEle;
					if (!ele || event.source != ele.contentWindow) return; // 2023-11-15 DSB let go to some other handler
					switch (msg.cmd) {
						case 'fillerCentralDoneLogout':
							//console.log('Got quicklink embed logout. Should not.');
							break;
						case 'fillerCentralGetParentJWT':
							ele.contentWindow.postMessage(f._.jwtMsg(), "*");
							break;
						case 'fillerCentralLoggedInEditForm':
							//console.log('Quicklink embed LoggedInEditForm.');
							setTimeout(function () {
								tfc_TF.u.filler._.lEle.style.display = 'none';
							}, 600);
							if (f._.route.current) f._.route.set();
							break;
						case 'fillerCentralUpdateDirtyValue':
							f._.dirty = msg.isDirty;
							f._.setState();
							//console.log("Quicklink embed message: "+(msg.isDirty ? "Is dirty" : "Is not dirty."));
							break;

						case 'fillerCentralAfterSyncWithErrors':
							//console.log('Got AfterSyncWithErrors. Updated:'+msg.updated+", inserted:"+msg.inserted);
							//console.log(JSON.stringify(msg.errors));
							break;

						case 'fillerCentralAfterSuccessfulSync':
							//console.log('Got AfterSuccessfulSync. Updated:'+msg.updated+", inserted:"+msg.inserted);
							if (typeof f._.s.onCommit == 'function') f._.s.onCommit(f._.m, f._.id, f._.s);
							f._.ele.style.display = 'none';
							f._.route.hide();
							break;

						case 'ignore':
							break;

						default:
					}
				},
				setState: function () {
					var bEle = $('TF.FILLER.COMMIT');
					if (this.dirty) {
						bEle.disabled = false;
						A5.u.element.cls(bEle, '-=buttonDisabled');
					} else {
						bEle.disabled = true;
						A5.u.element.cls(bEle, '+=buttonDisabled');
					}
					if (this.route.current) {
						A5.u.icon.update('TF.FILLER.ROUTE.ICON', 'svgIcon=#alpha-icon-routeOn:icon');
						$('TF.FILLER.ROUTE.TEXT').innerHTML = 'Routed';
					} else {
						A5.u.icon.update('TF.FILLER.ROUTE.ICON', 'svgIcon=#alpha-icon-routeEnd:icon');
						$('TF.FILLER.ROUTE.TEXT').innerHTML = 'Not Routed';
					}
				},
				cancel: function () {
					tfc_TF._.act('filler', { action: 'cancel', mode: this.m, id: this.id });
					this.iEle.contentWindow.postMessage({ cmd: 'cancelFiller' }, "*");
					this.ele.style.display = 'none';
					this.route.hide();
				}
			},

			start: function (m, id, s) { // mode, formId / formInstId
				if (this._.ele == null) {
					var ele = document.createElement('div');
					ele.id = 'TF.FILLER';
					A5.u.element.style(ele, 'display: none; z-index: 49;');
					ele.className = 'TFModal';
					var html = [
						'<div id="TF.FILLER.CONTENT" class="TFModalPanel TFFillerPanel">',
						'<div class="TFModalPanelHeader">',
						'<div id="TF.FILLER.TITLE">',
						'Filler',
						'</div>',
						'<div>',
						A5.buttons.html('TF.FILLER.ROUTE', { theme: tfc_TF.theme + ':subtle', html: A5.u.icon.html('svgIcon=#alpha-icon-routeEnd:icon', 'id="TF.FILLER.ROUTE.ICON"') + ' <span id="TF.FILLER.ROUTE.TEXT">Route</span>' }),
						A5.buttons.html('TF.FILLER.COMMIT', { theme: tfc_TF.theme + ':confirm', html: 'Save', icon: 'svgIcon=#alpha-icon-save:icon' }),
						A5.buttons.html('TF.FILLER.CANCEL', { theme: tfc_TF.theme + ':deny', html: 'Cancel', icon: 'svgIcon=#alpha-icon-x:icon' }),
						'</div>',
						'</div>',
						'<div style="position: relative; overflow: hidden;">',
						'<div id="TF.FILLER.IFRAME.LOCK" mode="loading" style="position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px;" onclick="if(this.getAttribute(\'mode\') == \'route\') TF.u.filler._.route.hide();"></div>',
						'<div id="TF.FILLER.ROUTE.PANEL" class="TFFillerRoutePanel" style="display: none; position: absolute; top: 0px; right: 0px; width: 320px; max-height: 100%;">',
						'<div id="TF.FILLER.ROUTE.FORM" class="TFForm"></div>',
						'</div>',
						'<iframe id="TF.FILLER.IFRAME" src="" border="0" style="width: 100%; height: 100%;" />',
						'</div>',
						'</div>'
					];
					ele.innerHTML = html.join('');
					document.body.appendChild(ele);

					$e.add('TF.FILLER.COMMIT', 'click', function () { tfc_TF.u.filler.commit(); });
					$e.add('TF.FILLER.CANCEL', 'click', function () { tfc_TF.u.filler.cancel(); });
					$e.add('TF.FILLER.ROUTE', 'click', function () {
						var r = tfc_TF.u.filler._.route;
						if (r.shown) r.hide();
						else {
							tfc_TF.u.flyout.hide();
							r.show();
						}
					});
					$e.add('TF.FILLER.ROUTE', 'mouseenter', function () { tfc_TF.u.filler._.route.tip(this, true); });
					$e.add('TF.FILLER.ROUTE', 'mouseleave', function () { tfc_TF.u.filler._.route.tip(this, false); });

					this._.route.f = new A5.FormBox('TF.FILLER.ROUTE.FORM', {
						form: {
							items: [
								{
									type: 'button-list',
									layout: 'tf-label-above',
									data: { from: 'type' },
									label: { text: 'Route to' },
									control: {
										style: 'display: flex; flex-direction: row;',
										allowNullSelection: false,
										data: {
											src: [
												{ html: A5.u.icon.html('svgIcon=#alpha-icon-docCheckSolid:icon') + ' Myself', value: 'none', style: 'flex: 1 1 0%;' },
												{ html: A5.u.icon.html('svgIcon=#alpha-icon-personInSolid:icon') + ' Member', value: 'member', style: 'flex: 1 1 0%;' },
												{ html: A5.u.icon.html('svgIcon=#alpha-icon-trayFull:icon') + ' Queue', value: 'queue', style: 'flex: 1 1 0%;' }
											]
										}
									}
								},
								{
									type: 'edit-picker',
									show: function (d) { return d.form.data.type == 'member' },
									data: { from: 'member' },
									container: { className: 'TFFormItem' },
									control: {
										width: '100%',
										behavior: { show: { mode: 'change' } },
										picker: {
											type: 'list',
											data: { filter: 'contains' }
										},
										buttons: {
											after: [{
												html: A5.u.icon.html('svgIcon=#alpha-icon-refresh:icon'),
												click: function () { tfc_TF.u.filler._.route.m = false; }
											}]
										},
										data: {
											src: function () {
												if (tfc_TF.u.filler._.route.m) return tfc_TF.u.filler._.route.m;
												else {
													tfc_TF.request('get-members', { manage: false }).then(function (d) {
														var ld = [];
														var di = null
														for (var i = 0; i < d.members.length; i++) {
															di = d.members[i];
															ld.push({
																html: '<div class="listItemPartMain">' + di.name + '</div><div class="listItemPartSub">' + di.userId + '</div>',
																value: di.userId
															});
														}
														tfc_TF.u.filler._.route.m = { src: ld };
														tfc_TF.u.filler._.route.f.ctrls.picker.update('data', ld);
													}).catch(function () {
														tfc_TF.u.filler._.route.f.ctrls.picker.hide();
													});
													return null;
												}
											}
										}
									}
								},
								{
									type: 'group',
									show: function (d) { return d.form.data.type == 'queue' },
									items: [
										{
											type: 'list',
											data: { from: 'queue' },
											container: { className: 'TFFormItem' },
											control: {
												width: '100%',
												style: 'max-height: 200px; overflow: auto;',
												multiple: true,
												selectionMode: 'additive',
												className: 'list TFFillerQueuesList',
												data: {
													src: function () {
														if (tfc_TF.u.filler._.route.q) return tfc_TF.u.filler._.route.q;
														else {
															tfc_TF.request('get-preferences', { type: 'device-assets-options' }).then(function (d) {
																var qd = A5.u.object.get(d.data, 'queues.listOfQueues');
																if (!Array.isArray(qd)) qd = [];
																tfc_TF.u.filler._.route.q = { src: qd };
																tfc_TF.u.filler._.route.f.refresh();
															});
															return null;
														}
													}
												},
												layout: 'main',
												layouts: { main: { item: { html: '<div style="display: flex; flex-direction: row; gap: 6px; align-items: center;"><div style="display: inline-block; width: 20px; height: 20px; background: {color}; border: 1px solid #fff; border-radius: 4px;"></div><div>{name}</div></div>', value: 'queueID' } } }
											}
										},
										{
											type: 'group',
											container: { className: 'TFFormItem', style: 'display: flex; flex-direction: row;' },
											items: [
												{
													type: 'button',
													layout: 'tf-simple',
													container: { style: 'flex: 1 1 auto;' },
													control: {
														theme: tfc_TF.theme + ':subtle',
														html: 'Clear Selection',
														onClick: function () { this.update('queue', []); }
													}
												},
												{
													type: 'button',
													layout: 'tf-simple',
													control: {
														theme: tfc_TF.theme + ':subtle',
														html: 'Refresh Queues List',
														onClick: function () {
															tfc_TF.u.filler._.route.q = false;
															tfc_TF.u.filler._.route.f.refresh();
														}
													}
												}
											]
										}
									]
								},
								{
									type: 'switch',
									layout: 'tf-label-flex',
									data: { from: 'makeDefault' },
									label: { text: 'Make default route' },
									control: { width: '50px' }
								},
								{
									type: 'html',
									show: function (d) { return d.form.data.makeDefault },
									container: { className: 'TFFormNote' },
									control: {
										html: 'When you press "Done", the selected value will be stored, and the next time you fill in a form instance the form will be routed to the same location.'
									}
								},
								{
									type: 'group',
									container: { className: 'TFFormItem', style: 'display: flex; flex-direction: row' },
									items: [
										{
											type: 'button',
											container: { style: 'flex: 1 1 auto;' },
											control: {
												html: 'Done',
												style: 'width: 100%;',
												onClick: function () {
													var _f = tfc_TF.u.filler._;
													var _r = _f.route;

													_r.hide();
													var d = this.data;
													if (d.type == 'none') _r.current = null;
													else if (d.type == 'member') _r.current = d.member;
													else if (d.type == 'queue') _r.current = 'queue:' + d.queue.join(':') + ':';
													if (d.makeDefault) _r.default = _r.current;
													_r.set();
													_f.setState();
												}
											}
										},
										{
											type: 'button',
											container: { style: 'flex: 1 1 auto;' },
											control: {
												html: 'Cancel',
												theme: tfc_TF.theme + ':subtle',
												style: 'width: 100%;',
												onClick: function () {
													tfc_TF.u.filler._.route.hide();
												}
											}
										}
									]
								}
							]
						}
					}, {}, { theme: tfc_TF.theme, item: { label: { style: '' }, description: { style: '' } } });

					this._.ele = ele;
					this._.tEle = $('TF.FILLER.TITLE');
					this._.lEle = $('TF.FILLER.IFRAME.LOCK');
					this._.iEle = $('TF.FILLER.IFRAME');
					this._.rEle = $('TF.FILLER.ROUTE.PANEL');
					window.addEventListener("message", this._.msg, false);
				}
				var bEle = $('TF.FILLER.ROUTE');
				if (tfc_TF.state.login.account.member.ui.allow.manage) bEle.style.display = '';
				else bEle.style.display = 'none';
				this._.dirty = false;
				this._.route.current = this._.route.default;
				this._.setState();

				if (this._.iEle.src.indexOf('QuickLink.html') != -1) this._.iEle.contentWindow.postMessage(this._.jwtMsg('m=n&a=' + tfc_TF.state.login.account.id + '&d=' + id + '&parentjwt&postmessage=Y&closemsg=Created new form instance.&postmessageprefix=fillerCentral&windowmargin=0px auto&askonleave=N'), "*");
				else this._.iEle.src = 'QuickLink.html?m=n&a=' + tfc_TF.state.login.account.id + '&d=' + id + '&parentjwt&postmessage=Y&closemsg=Created new form instance.&postmessageprefix=fillerCentral&windowmargin=0px auto&askonleave=N';
				//m=q&a=Account1&q=default3 - get queue

				if (m == 'create') {
					this._.tEle.innerHTML = 'New Form Instance';
					this._.lEle.setAttribute('message', 'Creating form...');
				} else {
					this._.tEle.innerHTML = 'Edit Form Instance';
					this._.lEle.setAttribute('message', 'Loading form...');
				}
				this._.lEle.setAttribute('mode', 'loading');
				this._.lEle.style.display = '';
				this._.ele.style.display = '';
				this._.m = m;
				this._.id = id;
				this._.s = s || {};

				tfc_TF._.act('filler', { action: 'start', mode: m, id: id });
			},

			commit: function () {
				this._.iEle.contentWindow.postMessage({ cmd: 'saveFiller' }, "*");
				tfc_TF._.act('filler', { action: 'commit', mode: this._.m, id: this._.id });
			},
			cancel: function () {
				if (this._.ele) {
					if (this._.dirty) {
						tfc_TF.u.message.show('confirm-cancel', 'Discard Form', 'Are you sure you want to discard the current form?', {
							action: function (a) {
								if (a == 'confirm') tfc_TF.u.filler._.cancel();
							}
						});
					} else this._.cancel();
				}
			}
		}
	},
	forms: {},

	// UI element definitions and helper functions
	ui: {
		// top level UI (e.g. the masthead)
		main: {
			_: {
				ux: null,
				d: {
					id: null,
					gotoList: false,
					ux: null,
					getIndx: function (id) {
						var d = this.ux.getControl('REPORTCHOOSERVIEWBOX').data;
						for (var i = 0; i < d.reports.defs.length; i++) {
							if (d.reports.defs[i].name == id) {
								return i;
								break;
							}
						}
						return null;
					}
				},
				m: {
					id: null,
					ux: null
				},
				b: {
					id: null,
					ux: null
				},
				di: {
					"adv": {
						"include": function () {
							return tfc_TF.state.ui.editing.json.forms;
						},
						"type": "frame",
						"container": {
							"collapse": { "allow": true, "initial": true },
							"title": { "html": "Advanced" }
						},
						"items": [
							{
								"layout": "tf-button",
								"type": "button",
								"control": {
									"html": "Edit JSON...",
									"onClick": function () {
										tfc_TF.u.code.editors.json.edit(this.data, this);
									}
								}
							}
						]
					}
				}
			},
			init: function (ux) {
				setInterval(function () { ux.getControl('TRANSFORM_MASTHEAD').refresh(); }, 30000);
				this._.vb = ux.getControl('TRANSFORM_MASTHEAD');
				this._.p = ux.panelGet('TRANSFORM');
			},
			html: function (vb) {
				var html = [];
				const iconHome = A5.u.icon.html('svgIcon=#alpha-icon-home:icon');
				const iconDashboard = A5.u.icon.html('svgIcon=#alpha-icon-trendingUp:icon');
				const iconFormDesign = A5.u.icon.html('svgIcon=#alpha-icon-screwdriverAndWrench:icon');
				const iconManage = A5.u.icon.html('svgIcon=#alpha-icon-magGlass:icon');
				const iconApps = A5.u.icon.html('svgIcon=#alpha-icon-appGrid:icon {width: 32px; height: 32px;}');

				const iconNotification = A5.u.icon.html('svgIcon=#alpha-icon-bell:icon {width: 32px; height: 32px;}');
				const iconDeveloper = A5.u.icon.html('svgIcon=#alpha-icon-docXMLSolid:icon {width: 32px; height: 32px;}');
				const iconAccount = A5.u.icon.html('svgIcon=#alpha-icon-gear:icon {width: 32px; height: 32px;}');
				const iconPerson = A5.u.icon.html('svgIcon=#alpha-icon-personSolid:icon {position: absolute; top: 0px; left: 4px; width: 52px; height: 52px;}');
				const iconHelp = A5.u.icon.html('svgIcon=#alpha-icon-questionCircle:icon {width: 32px; height: 32px;}');
				const iconDot = A5.u.icon.html('svgIcon=#alpha-icon-circleSolid:icon {width: 10px; height: 10px;}');


				const sui = tfc_TF.state.ui;
				const sl = tfc_TF.state.login;


				const tab = sui.tab;
				const allow = sl.account.member.ui.allow;
				const dirty = sui.dirty;
				const dock = sui.dock;
				const idp = vb.contId + '.';

				html.push('<div class="TFHeadLine"></div>');
				html.push('<div class="TFHead">');
				html.push('<div class="TFHeadLogo">');
				html.push('<img src="TFLogo78x78.png" style="height: 100%;"/>');
				html.push('</div>');
				html.push('<div class="TFHeadTabs">');
				html.push('<div id="' + idp + 'HOME" a5-item="tab:home" class="TFHeadTab TFHeadTabHome' + (tab == 'home' ? ' TFHeadTabSelected' : '') + '">' + iconHome + '<span class="TFHeadTabText">Home</span>&ZeroWidthSpace;</div>');
				if (allow.dashboard) html.push('<div id="' + idp + 'DASHBOARD" a5-item="tab:dashboard" class="TFHeadTab TFHeadTabDashboard' + (tab == 'dashboard' ? ' TFHeadTabSelected' : '') + '">' + iconDashboard + '<span class="TFHeadTabText">Dashboard</span>&ZeroWidthSpace;' + (dirty.dashboard ? '<div style="position: absolute; top: 7px; right: 7px; font-size: 0px;">' + iconDot + '</div>' : '') + '</div>');
				if (allow.manage) html.push('<div id="' + idp + 'MANAGE" a5-item="tab:manage" class="TFHeadTab TFHeadTabManage' + (tab == 'manage' ? ' TFHeadTabSelected' : '') + '">' + iconManage + '<span class="TFHeadTabText">Manage</span>&ZeroWidthSpace;' + (dirty.manage ? '<div style="position: absolute; top: 7px; right: 7px; font-size: 0px;">' + iconDot + '</div>' : '') + '</div>');
				if (allow.design) html.push('<div id="' + idp + 'DESIGNER" a5-item="tab:designer" class="TFHeadTab TFHeadTabDesign' + (tab == 'designer' ? ' TFHeadTabSelected' : '') + '">' + iconFormDesign + '<span class="TFHeadTabText">Design</span>&ZeroWidthSpace;' + (dirty.designer ? '<div style="position: absolute; top: 7px; right: 7px; font-size: 0px;">' + iconDot + '</div>' : '') + '</div>');
				html.push('</div>');
				html.push('<div class="TFHeadSettings">');
				/*	
				var n = vb.data.notifications;
				var ii = null;
				var now = Date.now();
				for(var i=n.items.length-1;i>=0;i--){
					ii = n.items[i];
					if(ii.dismiss && ii.dismiss < now) n.items.splice(i,1);
				}
				
				if(n.items.length > 0){
					html.push('<div id="'+idp+'NOTIFICATIONS" a5-item="docks:notifications" class="TFHeadSettingsButton TFHeadButton'+(dock.active && dock.type == 'notifications' ? ' TFHeadSettingsButtonActive' : '')+'">'+iconNotification+'<br/>Notices<div class="TFHeadButtonNotification">'+iconDot+'</div></div>');
				} else{
					html.push('<div id="'+idp+'NOTIFICATIONS" a5-item="docks:notifications" class="TFHeadSettingsButton TFHeadButton'+(dock.active && dock.type == 'notifications' ? ' TFHeadSettingsButtonActive' : '')+'">'+iconNotification+'<br/>Notices</div>');
				}
				*/

				html.push('<div id="' + idp + 'APPS" a5-item="docks:apps" class="TFHeadSettingsButton TFHeadButton' + (dock.active && dock.type == 'apps' ? ' TFHeadSettingsButtonActive' : '') + '">' + iconApps + '<br/>Apps</div>');
				if (allow.developer) html.push('<div id="' + idp + 'DEVELOPER" a5-item="docks:developer" class="TFHeadSettingsButton TFHeadButton' + (dock.active && dock.type == 'developer' ? ' TFHeadSettingsButtonActive' : '') + '">' + iconDeveloper + '<br/>Configure</div>');
				if (allow.account) html.push('<div id="' + idp + 'ACCOUNT" a5-item="docks:account" class="TFHeadSettingsButton TFHeadButton' + (dock.active && dock.type == 'account' ? ' TFHeadSettingsButtonActive' : '') + '">' + iconAccount + '<br/>Account</div>');
				html.push('</div>');

				html.push('<div a5-item="docks:user" class="TFHeadUser TFHeadButton' + (dock.active && dock.type == 'user' ? ' TFHeadUserActive' : '') + '">');
				html.push(iconPerson + '<div class="TFHeadUserName">' + sl.user.name + '</div><div class="TFHeadUserAccount">' + sl.account.name + '</div>');

				var lsDelta = (sl.expires - Date.now()) / 60000;
				var lss = 'Good';
				if (lsDelta <= 0) lss = 'Expired';
				else if (lsDelta < 60) lss = 'Expiring';
				vb.data.expiresStatus = lss.toLowerCase();
				html.push('<div class="TFHeadLoginStatus' + lss + '" style="position: absolute; top: 7px; right: 7px; font-size: 0px;">' + iconDot + '</div>');
				html.push('</div>');
				if (tfc_TF.state.ui.help.mode != 'pinned') {
					html.push('<div id="' + idp + 'HELP" a5-item="help" class="TFHeadHelp TFHeadButton">');
					html.push(iconHelp + '<br/>Help');
					html.push('</div>');
				}
				html.push('</div>');


				return html.join('');
			},
			action: function (a, d, f) {
				var pp = 'TRANSFORM_MAIN_NAV:';
				var vb = tfc_TF.ui.main._.vb;
				var pUX = tfc_TF.ui.main._.ux;
				if (a == 'home') {
					vb.setTab('home');
				} else if (a.indexOf('dashboard') == 0) {
					var _d = tfc_TF.ui.main._.d;
					var ux = _d.ux;
					if (ux && !f) {
						var s = pUX.sendMessageToChild('FORMDASHBOARD', { type: "query", cmd: "uistate" });
						if (s.busy) {
							tfc_TF.u.message.show('confirm-deny', 'Dashboard', 'The dashboard is currently in a unsaved state. Would you like to overwrite any unsaved data?', {
								action: function (ba) {
									if (ba == 'confirm') tfc_TF.ui.main.action(a, d, true);
									else tfc_TF.ui.main._.vb.setTab('dashboard');
								}
							});
							return false;
						}
					}
					if (a == 'dashboard') {
						if (d.id) {
							if (ux) {
								var id = _d.getIndx(d.id);
								pUX.sendMessageToChild('FORMDASHBOARD', { type: "action", cmd: "resetuistate" });
								pUX.sendMessageToChild('FORMDASHBOARD', { type: "action", cmd: "loadreport", reportnum: id });
							} else _d.id = d.id;
							vb.setTab('dashboard');
						}
					} else if (a == 'dashboard-create') {
						tfc_TF.u.message.show('confirm', 'Dashboard', 'Create new dashboard.');
						vb.setTab('dashboard');
					} else if (a == 'dashboard-manage') {
						if (d.id) {
							if (ux) {
								var id = _d.getIndx(d.id);
								pUX.sendMessageToChild('FORMDASHBOARD', { type: "action", cmd: "resetuistate" });
								pUX.sendMessageToChild('FORMDASHBOARD', { type: "action", cmd: "loadreport", reportnum: id });
							} else _d.id = d.id;
							_d.gotoList = true;
							vb.setTab('dashboard');
						}
					}
				} else if (a == 'manage') {
					if (d.id) {
						var _m = tfc_TF.ui.main._.m;
						var ux = _m.ux;
						if (ux) {
							if (!f) {
								var s = pUX.sendMessageToChild('FORMBROWSER', { type: "query", cmd: "uistate" });
								if (s.busy) {
									tfc_TF.u.message.show('confirm-deny', 'Manager', 'The form manger is currently in a unsaved state. Would you like to overwrite any unsaved data?', {
										action: function (ba) {
											if (ba == 'confirm') tfc_TF.ui.main.action(a, d, true);
											else tfc_TF.ui.main._.vb.setTab('manage');
										}
									});
									return false;
								}
							}

							pUX.sendMessageToChild('FORMBROWSER', { type: "action", cmd: "resetuistate" });
							pUX.sendMessageToChild('FORMBROWSER', { type: "action", cmd: "loadformtype", formid: d.id });
						} else _m.id = d.id;
						vb.setTab('manage');
					}
				} else if (a == 'form-design') {
					if (d.id) {
						var _b = tfc_TF.ui.main._.b;
						var ux = _b.ux;
						if (ux) {
							if (!f) {
								var s = pUX.sendMessageToChild('FORMBUILDER', { type: "query", cmd: "uistate" });
								if (s.busy) {
									tfc_TF.u.message.show('confirm-deny', 'Designer', 'The form designer is currently in a unsaved state. Would you like to overwrite any unsaved data?', {
										action: function (ba) {
											if (ba == 'confirm') tfc_TF.ui.main.action(a, d, true);
											else tfc_TF.ui.main._.vb.setTab('designer');
										}
									});
									return false;
								}
							}
							pUX.sendMessageToChild('FORMBUILDER', { type: "action", cmd: "resetuistate" });
							pUX.sendMessageToChild('FORMBUILDER', { type: "action", cmd: "loadformtype", formid: d.id });
						} else {
							_b.id = d.id;
							_b.mode = 'edit';
						}
						vb.setTab('designer');
					}
				} else if (a == 'form-create') {
					var _b = tfc_TF.ui.main._.b;
					if (d.create) {
						var ux = _b.ux;
						if (ux) {
							if (!f) {
								var s = pUX.sendMessageToChild('FORMBUILDER', { type: "query", cmd: "uistate" });
								if (s.busy) {
									tfc_TF.u.message.show('confirm-deny', 'Designer', 'The form designer is currently in a unsaved state. Would you like to overwrite any unsaved data?', {
										action: function (ba) {
											if (ba == 'confirm') tfc_TF.ui.main.action(a, d, true);
											else tfc_TF.ui.main._.vb.setTab('designer');
										}
									});
									return false;
								}
							}
							pUX.sendMessageToChild('FORMBUILDER', { type: "action", cmd: "resetuistate" });
							if (d.from == 'blank') pUX.sendMessageToChild('FORMBUILDER', { type: "action", cmd: "addformtype", formid: '' });
							else if (d.from == 'copy') pUX.sendMessageToChild('FORMBUILDER', { type: "action", cmd: "addformtype", formid: d.id });
							else if (d.from == 'template') pUX.sendMessageToChild('FORMBUILDER', { type: "action", cmd: "addtemplateformtype" });
						} else {
							_b.mode = 'create';
							_b.from = d.from;
							_b.id = d.id;
						}
						vb.setTab('designer');
					} else {
						if (!_b.t) {
							_b.t = new A5.Transient({
								theme: tfc_TF.theme,
								content: {
									type: 'html',
									html: ''
								},
								layout: 'main',
								layouts: {
									'main': {
										stretch: 'none',
										animation: { show: { type: 'fade' }, hide: { type: 'fade' } },
										location: 'flyout-center',
										offset: { major: 4 }
									}
								},
								onShow: function () {
									var p = tfc_TF.ui.main._.ux.panelGet('TRANSFORM_HOME');
									p.lock('', true);
								},
								onHide: function () {
									var p = tfc_TF.ui.main._.ux.panelGet('TRANSFORM_HOME');
									p.unlock();
								}
							});
							var tEle = _b.t.getElement('top');
							tEle.style.zIndex = '1000';
							var id = _b.t.getElement('content').id;

							_b.tVB = new A5.ViewBox(id, { mode: 'main' }, {
								icons: {
									ai: A5.u.icon.html('svgIcon=#alpha-icon-ai:icon'),
									template: A5.u.icon.html('svgIcon=#alpha-icon-folderOpen:icon'),
									copy: A5.u.icon.html('svgIcon=#alpha-icon-docDuplicate:icon'),
									blank: A5.u.icon.html('svgIcon=#alpha-icon-docAdd:icon'),
									children: A5.u.icon.html('svgIcon=#alpha-icon-chevronRight:icon'),
								},
								buttons: {
									back: A5.buttons.html(id + '.COPY.BACK', { theme: tfc_TF.theme + ':subtle', className: 'button buttonSubtle buttonIcon', icon: 'svgIcon=#alpha-icon-chevronLeft:icon' }, 'a5-item="back"'),
									cancel: A5.buttons.html(id + '.CANCEL', { theme: tfc_TF.theme + ':subtle', className: 'button buttonSubtle buttonIcon', icon: 'svgIcon=#alpha-icon-chevronLeft:icon' }, 'a5-item="cancel"'),
								},
								layout: 'main',
								layouts: {
									'main': {
										type: 'static',
										html: function () {
											var html = [];
											var idp = this.contId + '.';
											var fStyle = ' style="display: flex; flex-direction: row; align-items: center;"';
											html.push('<div class="TFTileAddMenu" style="display: flex; flex-direction: column;">');
											var liEvnts = ' onmouseenter="A5.u.element.cls(this,\'+=listItemHover\')" onmouseleave="A5.u.element.cls(this,\'-=listItemHover\')"';
											if (this.data.mode == 'copy') {
												html.push('<div class="listItemTitle"' + fStyle + '>');
												html.push(this.buttons.back);
												html.push('<div>&nbsp;Select Form Type</div>')
												html.push('</div>');
												html.push('<div style="flex: 1 1 0%; overflow: auto;">');
												var ft = tfc_TF.ui.home._.vb.data.forms.types;
												var fti = null;
												for (var i = 0; i < ft.length; i++) {
													fti = ft[i];
													html.push('<div id="' + idp + 'COPY.' + i + '" a5-item="create:' + fti.id + '" a5-value="copy" class="listItem"' + liEvnts + '>' + fti.name + '</div>');
												}
												html.push('</div>');

											} else {

												html.push('<div>');
												html.push('<div class="listItemTitle"' + fStyle + '>');
												html.push(this.buttons.cancel);
												html.push('<div>&nbsp;Add Form Type</div>')
												html.push('</div>');
												if (tfc_TF._.beta()) {
													html.push('<div id="' + idp + 'AI" a5-item="create" a5-value="ai" class="listItem"' + fStyle + liEvnts + '>' + this.icons.ai + '<div><span class="TFAIFont">AI</span> Form Builder &nbsp;&nbsp;<span class="TFFormItemDescData">BETA</span></div></div>');
												}
												html.push('<div id="' + idp + 'TEMPLATE" a5-item="create" a5-value="template" class="listItem"' + fStyle + liEvnts + '>' + this.icons.template + '<div>New from Template</div></div>');
												html.push('<div id="' + idp + 'BLANK" a5-item="create" a5-value="blank" class="listItem"' + fStyle + liEvnts + '>' + this.icons.blank + '<div>Blank Form Type</div></div>');
												html.push('<div id="' + idp + 'COPY" a5-item="copy" class="listItem"' + fStyle + liEvnts + '>' + this.icons.copy + '<div style="flex: 1 1 auto;">Copy Existing</div>' + this.icons.children + '</div>');
												html.push('</div>');
											}
											html.push('</div>');
											return html.join('');
										}
									}
								},
								items: {
									'create': {
										onClick: function (v, ia) {
											if (v == 'blank') tfc_TF.ui.main.action('form-create', { create: true, from: 'blank' });
											else if (v == 'template') tfc_TF.ui.main.action('form-create', { create: true, from: 'template' });
											else if (v == 'copy') tfc_TF.ui.main.action('form-create', { create: true, from: 'copy', id: ia });
											else if (v == 'ai') tfc_TF.ui.ai.form.start();
											tfc_TF.ui.main._.b.t.hide();

										}
									},
									'copy': {
										onClick: function () {
											this.data.mode = 'copy';
											this.refresh();
											tfc_TF.ui.main._.b.t.refresh();
										}
									},
									'back': {
										onClick: function () {
											this.data.mode = 'main';
											this.refresh();
											tfc_TF.ui.main._.b.t.refresh();
										}
									},
									'cancel': {
										onClick: function () {
											tfc_TF.ui.main._.b.t.hide();
										}
									}
								}
							});

						}
						_b.tVB.populate({ mode: 'main' });
						_b.t.show(tfc_TF.ui.home._.vb.contId + '.FORMS.CREATE');
					}
				} else if (a == 'form-fill') {
					tfc_TF.u.filler.start('create', d.id, {
						onCommit: function (m, id, s) {
							if (m == 'create') {
								var vb = tfc_TF.ui.home._.vb;
								var indx = -1;
								var ft = vb.data.forms.types;
								for (var i = 0; i < ft.length; i++) {
									if (ft[i].id == id) {
										indx = i;
										break;
									}
								}
								if (indx != -1) {
									var ele = $(vb.contId + '.FORMS.' + indx + '.COUNT');
									var count = String(ele.innerText).toNumber() + 1 || 1;
									if (count > 99) count = '99+';
									ele.innerText = count;
									vb.badgeUpdated(vb.contId + '.FORMS.' + indx + '.COUNT', 1);
								}
							}
						}
					});
				}
				return true;
			}
		},
		// AI
		ai: {
			form: {
				_: { ele: false },
				start: function () {
					if (!this._.ele) {
						var ele = document.createElement('div');
						ele.id = 'TF.AI.FORM';
						ele.className = 'TFModal';
						A5.u.element.style(ele, 'display: none; z-index: 49;');
						ele.innerHTML = [
							'<div class="TFModalPanel" style="position: absolute; top: 12px; left: 12px; right: 12px; bottom: 12px;">',
							'<div class="TFModalPanelHeader">',
							'<div style="flex: 1 1 auto;"><span class="TFAIFont">AI</span> Form Builder</div>',
							A5.buttons.html('TF.AI.FORM.SAVE', { theme: tfc_TF.theme, html: 'Save', icon: 'svgIcon=#alpha-icon-save:icon' }),
							A5.buttons.html('TF.AI.FORM.CLOSE', { theme: tfc_TF.theme + ':deny', html: 'Cancel', icon: 'svgIcon=#alpha-icon-x:icon' }, 'onclick="this.parentNode.parentNode.parentNode.style.display = \'none\';"'),
							'</div>',
							'<div id="TF.AI.FORM.BUILDER" style="flex: 1 1 auto"></div>',
							'</div>'
						].join('');
						document.body.appendChild(ele);
						this._.ele = ele;

						A5.component.runGenericComponent({
							dialog2Div: 'TF.AI.FORM.BUILDER',
							dialog2Name: 'transformAIFormBuilder01',
							type: 'dialog2',
							alias: 'TF_AI_FB',
							workingMessage: '<div class="TFWorkingMessage">Loading...</div>'
						});
						$e.add('TF.AI.FORM.SAVE', A5.d.evnts.click, function () {
							tfc_TF.ui.ai.form._.ux
							var pUX = tfc_TF.ui.main._.ux;
							var cmds = pUX.sendMessageToChild('TF_AI_FB', { type: "action", cmd: "getDefinition" });
							if (cmds) {
								// DLG1_DlgObj.getControl('formslist')._data[0].formdata
								tfc_TF.u.message.show('prompt-cancel', 'Save Form', 'Please enter the ID you would like to use for the form.', {
									action: function (a, id) {
										if (a == 'confirm') {
											var fd = {
												id: id,
												version: 1,
												display: {
													name: id,
													color: { main: '', text: '' },
													icon: '',
													templates: {
														heading: '',
														listing: '',
														printing: ''
													}
												},
												data: {
													preview: {},
													instance: {
														init: '',
														status: ''
													}
												},
												settings: { generation: 2 },
												security: { statusRoleGroup: '' },
												tpl: { code: '' },
												cmds: cmds
											};
											tfc_TF.u.message.show('wait', 'Creating Form', 'Please wait while the form is created.', { id: 'ai-form-save-wait' });
											tfc_TF.request('update-form-defs', { create: [fd] }).then(function () {
												tfc_TF.u.message.hide('ai-form-save-wait');
												$('TF.AI.FORM').style.display = 'none';
												tfc_TF.ui.home._.vb.getStructure();
											}).catch(function () {
												tfc_TF.u.message.hide('ai-form-save-wait');
												tfc_TF.u.message.show('confirm', 'Error', 'Form was unable to be saved.');
											});
										}
									}
								})
							}
						});
						$e.add(window, 'resize', function () { $e.execute('TF.AI.FORM.BUILDER', 'a5resize'); });
					}
					this._.ele.style.display = '';
				},
				builder: {
					init: function (ux) {
						tfc_TF.ui.ai.form._.ux = ux;
						var pId = ux.panelGetId('AI_BUILDER_PREVIEW', 'body');
						var ele = $(pId);
						var html = [
							'<div><iframe id="TF.AI.FORM.BUILDER.FILLER" style=""></iframe></div>',
							'<div class="TFAIBuilderPreviewShownHide" style="position: absolute; top: 5px; left: 5px;">',
							A5.buttons.html('TF.AI.FORM.BUILDER.PREVIEW.HIDE', { theme: tfc_TF.theme + ':subtle', className: 'button buttonSubtle buttonIcon', icon: 'svgIcon=#alpha-icon-x:icon' }),
							'</div>'
						];
						ele.innerHTML = html.join('');
						//'<div><iframe id="TF.AI.FORM.BUILDER.FILLER" style="" /></div>';
						ele.className = 'TFAIBuilderPreview';
						ele.parentNode.className = 'TFAIBuilderPreviewPanel';

						ele = $('TF.AI.FORM.BUILDER.FILLER');
						$e.add(ele, 'load', function (e, ux) {
							var iEle = this;
							if (typeof ux != 'undefined' && ux.f && typeof ux.f.fillerembedIFRAMELoaded != 'undefined') setTimeout(function () { ux.f.fillerembedIFRAMELoaded(iEle) }, 0);
						}, ux);
						pId = ux.panelGetId('AI_BUILDER_CHAT', 'footer');
						html = [
							'<div class="TFAIBuilderChatCmdBar" style="">',
							'<div>',
							'<div>',
							A5.buttons.html('TF.AI.FORM.BUILDER.REVERT', { theme: tfc_TF.theme, layout: 'text icon', html: 'Revert', icon: 'svgIcon=#alpha-icon-triUpSolid:icon', style: 'text-align: right; width: 100%;' }),
							'</div>',
							'<div>',
							A5.buttons.html('TF.AI.FORM.BUILDER.RESTORE', { theme: tfc_TF.theme, layout: 'text icon', html: 'Restore', icon: 'svgIcon=#alpha-icon-triDownSolid:icon', style: 'text-align: right; width: 100%;' }),
							'</div>',
							'</div>',
							'<div style="flex: 1 1 auto;">',
							'<textarea id="TF.AI.FORM.BUILDER.INPUT" class="edit" style="resize: none; width: 100%; height: 100%; box-sizing: border-box;" placeholder="Type your instructions here..." onkeydown="if(!event.shiftKey && event.key == \'Enter\' && this.value.trim() != \'\'){ $e.stopEvent(event); doCreateForm(); }"></textarea>',
							'</div>',
							'<div>',
							A5.buttons.html('TF.AI.FORM.BUILDER.SEND', { theme: tfc_TF.theme, html: 'Send', icon: 'svgIcon=#alpha-icon-paperPlaneSolid:icon', style: 'height: 100%;' }, 'onclick="if($(\'TF.AI.FORM.BUILDER.INPUT\').value.trim() != \'\') doCreateForm();"'),
							'</div>',
							'</div>'
						];
						ele = $(pId);
						ele.innerHTML = html.join('');
						ele.className = 'TFDockFooter';

						$e.add('TF.AI.FORM.BUILDER.REVERT', A5.d.evnts.click, ux.f.doRevert);
						$e.add('TF.AI.FORM.BUILDER.RESTORE', A5.d.evnts.click, ux.f.doRestore);

						var p = ux.panelGet('AI_BUILDER_CHAT');
						p.setDisplay('footer', true);

						pId = ux.panelGetId('AI_BUILDER_PREVIEW', 'footer');
						html = [
							'<div style="display: flex; flex-direction: row; gap: 4px; padding: 4px;">',
							'<div style="flex: 1 1 auto;"></div>',
							'<div>',
							A5.buttons.html('TF.AI.FORM.BUILDER.PREVIEW.PHONE', { theme: tfc_TF.theme + ':subtle', html: 'Phone', icon: 'svgIcon=#alpha-icon-devicePhone:icon' }),
							A5.buttons.html('TF.AI.FORM.BUILDER.PREVIEW.TABLET', { theme: tfc_TF.theme + ':subtle', html: 'Tablet', icon: 'svgIcon=#alpha-icon-deviceTablet:icon' }),
							'&nbsp;',
							A5.buttons.html('TF.AI.FORM.BUILDER.PREVIEW.ORIENTATION', { theme: tfc_TF.theme, className: 'button buttonSubtle buttonIcon', html: A5.u.icon.html('svgIcon=#alpha-icon-arrowCounterClockwise:icon', 'id="TF.AI.FORM.BUILDER.PREVIEW.ORIENTATION.ICON"') }),
							'</div>',
							'<div style="flex: 1 1 auto;"></div>',
							'</div>'
						];
						ele = $(pId);
						ele.innerHTML = html.join('');
						ele.className = 'TFDockFooter';
						p = ux.panelGet('AI_BUILDER_PREVIEW');
						p.setDisplay('footer', true);

						p = ux.panelGet('AI_BUILDER');
						$e.add('TF.AI.FORM.BUILDER.PREVIEW.HIDE', A5.d.evnts.click, function (e, ci) {
							ci.hideDock();
						}, p);
						$e.add('TF.AI.FORM.BUILDER.PREVIEW.PHONE', A5.d.evnts.click, function () {
							var p = tfc_TF.ui.ai.form.builder.preview;
							if (p.active.device != 'phone') {
								p.active.device = 'phone';
								p.refresh();
							}
						});
						$e.add('TF.AI.FORM.BUILDER.PREVIEW.TABLET', A5.d.evnts.click, function () {
							var p = tfc_TF.ui.ai.form.builder.preview;
							if (p.active.device != 'tablet') {
								p.active.device = 'tablet';
								p.refresh();
							}
						});
						$e.add('TF.AI.FORM.BUILDER.PREVIEW.ORIENTATION', A5.d.evnts.click, function () {
							var p = tfc_TF.ui.ai.form.builder.preview;
							p.active.landscape = !p.active.landscape;
							p.refresh();
						});

						tfc_TF.ui.ai.form._.p = ux.panelGet('AI_BUILDER');

						ele = $('TF.AI.FORM.BUILDER.CHAT');
						ele.style.position = 'absolute';
						A5.u.element.setScroll(ele, 0, 10000);

						this.preview.refresh();

					},

					preview: {
						active: {
							device: 'phone',
							landscape: false
						},
						refresh: function () {
							var p = tfc_TF.ui.ai.form._.p;

							var pd = this.devices;
							var pa = this.active;
							var pSize = pd.phone;
							var ele = $('TF.AI.FORM.BUILDER.FILLER').parentNode;
							var bpEle = $('TF.AI.FORM.BUILDER.PREVIEW.PHONE');
							var btEle = $('TF.AI.FORM.BUILDER.PREVIEW.TABLET');
							var iEle = $('TF.AI.FORM.BUILDER.PREVIEW.ORIENTATION.ICON')
							if (pa.device == 'tablet') {
								pSize = pd.tablet;
								A5.u.element.cls(btEle, '+=buttonPressed');
								btEle.setAttribute('a5-pressed', 'true');
								A5.u.element.cls(bpEle, '-=buttonPressed');
								bpEle.setAttribute('a5-pressed', 'false');
							} else {
								A5.u.element.cls(bpEle, '+=buttonPressed');
								bpEle.setAttribute('a5-pressed', 'true');
								A5.u.element.cls(btEle, '-=buttonPressed');
								btEle.setAttribute('a5-pressed', 'false');
							}
							if (pa.landscape) {
								pSize = pSize.l;
								ele.className = 'TFAIBuilderPreviewLandscape';
								A5.u.icon.update(iEle, 'svgIcon=#alpha-icon-arrowCounterClockwise:icon{transform: rotate(0deg); transition: transform 500ms;}');
							} else {
								pSize = pSize.p;
								ele.className = 'TFAIBuilderPreviewPortrait';
								A5.u.icon.update(iEle, 'svgIcon=#alpha-icon-arrowCounterClockwise:icon{transform: rotate(90deg); transition: transform 500ms;}');
							}

							var sAdj = 20;
							ele.style.maxHeight = (pSize.height + sAdj) + 'px';
							ele.style.width = (pSize.width + sAdj) + 'px';

							p.panels[1].size = '1064px'; //(pSize.width+sAdj+20)+'px';

							p.refresh();
						},
						devices: {
							phone: {
								p: { width: 320, height: 600 },
								l: { width: 600, height: 320 }
							},
							tablet: {
								p: { width: 768, height: 1024 },
								l: { width: 1024, height: 768 }
							}
						}
					}
				}
			}
		},

		// help dock UI
		help: {
			_: { w: null },
			setMode: function (mode) {
				if (mode == tfc_TF.state.ui.help.mode) mode = 'docked';
				var ux = tfc_TF.ui.main._.ux;
				var uis = tfc_TF.state.ui;
				var p = ux.panelGet('TRANSFORM');
				var hp = p.getPanel('TRANSFORM_HELP');
				var vb = ux.getControl('TRANSFORM_HELP');
				if (mode == 'pinned') {
					uis.help.mode = 'pinned';
					hp.dock = '';
					uis.dock.type = '';
					uis.dock.active = false;
					A5.u.element.cls(hp.src.getPanelId(), '-=panelDockAfter');
					$(p.contId + '.DOCKOVERLAY').style.display = 'none';
					//} else if(mode == 'float'){
					//	uis.help.mode = 'float';
					//	hp.show = false;
					//	$(p.contId+'.DOCKOVERLAY').style.display = 'none';
					//	this._.w = window.open('about:blank','TFHelp');
					//	this._.w.onbeforeunload = function(){ this.opener.TF.ui.help._.w = null;}
					//	p.hideDock();
				} else {
					uis.help.mode = 'docked';
					hp.dock = 'collapse-after';
					A5.u.element.cls(hp.src.getPanelId(), '-=panelDockAfter');
				}
				if (uis.help.mode != 'float' && this._.w) this._.w.close();
				p.refresh();
				vb.refresh();
				tfc_TF.ui.main._.vb.refresh();
			},
			html: function (vb) {
				var html = [];
				html.push('<div class="TFHelpHeader">');
				html.push(A5.buttons.html('TF.HELP.PIN', { theme: tfc_TF.theme, className: 'button buttonSubtle buttonIcon', icon: (tfc_TF.state.ui.help.mode == 'pinned' ? 'svgIcon=#alpha-icon-unpin:icon' : 'svgIcon=#alpha-icon-pin:icon') }, 'a5-item="mode:pinned"'));
				html.push('<div style="flex: 1 1 auto;">');
				html.push('<input class="editPrimary" style="width: 100%; box-sizing: border-box;" placeholder="Search help..."/>');
				html.push('</div>');
				html.push(A5.buttons.html('TF.HELP.SEARCH.DO', { theme: tfc_TF.theme, className: 'button buttonSubtle buttonIcon', icon: 'svgIcon=#alpha-icon-magGlass:icon' }, 'a5-item="search:execute"'));
				html.push(A5.buttons.html('TF.HELP.SEARCH.CLEAR', { theme: tfc_TF.theme, className: 'button buttonSubtle buttonIcon', icon: 'svgIcon=#alpha-icon-x:icon' }, 'a5-item="search:clear"'));
				html.push('</div>');
				var ii = null;
				var co = vb.data.contexts[vb.data.context];
				if (co) {
					html.push('<div class="TFHelpContext">');
					html.push('<div class="TFHelpTitle">' + co.name + '</div>');
					html.push('<div class="TFHelpGroupTitle">Videos</div>');
					html.push('<div class="TFHelpGroup">');
					for (var i = 0; i < co.videos.length; i++) {
						ii = co.videos[i];
						html.push('<div id="' + vb.contId + '.CV' + i + '" a5-item="video:' + ii.url + '" class="TFHelpItem">' + ii.name + '</div>');
					}
					html.push('</div>');
					html.push('</div>');
				}
				html.push('<div class="TFHelpItem">Documentation</div>');
				html.push('<div class="TFHelpItem">Release notes</div>');

				html.push('<div class="TFHelpGroupTitle" id="' + vb.contId + '.V" a5-item="toggle:allVideos">All Videos</div>');
				html.push('<div class="TFHelpGroup" style="' + (vb.data.show.allVideos ? '' : 'display: none; ') + 'overflow: hidden;">');
				for (var c in vb.data.contexts) {
					co = vb.data.contexts[c];
					for (var i = 0; i < co.videos.length; i++) {
						ii = co.videos[i];
						html.push('<div id="' + vb.contId + '.V' + i + '" a5-item="video:' + ii.url + '" class="TFHelpItem">' + ii.name + '</div>');
					}
				}
				html.push('</div>');

				html.push('<div class="TFHelpExtra">Version ' + 2 + '</div>');

				return html.join('');
			}
		},
		// user dock UI
		user: {
			_: {},
			init: function (ux) {
				if (typeof tfc_TF.ui.user._.h == 'undefined') {
					var p = ux.panelGet('TRANSFORM_USER_PREFERENCES');
					tfc_TF.u.panels.lockable(p);
					ux.userPreferencesForm = new A5.FormBox(p.getPanelId('body'), tfc_TF.forms.userPreferences, {}, {
						theme: tfc_TF.theme,
						item: {
							label: { style: '' },
							description: { style: '' }
						},
						onStateChange: function (t, d) {
							if (t == 'isDirty') {
								tfc_TF.ui.user._.h.setTabDirty('preferences', d.value);
							}
						}
					});
					var p = ux.panelGet('TRANSFORM_USER_PROFILE');
					tfc_TF.u.panels.lockable(p);
					ux.userProfileForm = new A5.FormBox(p.getPanelId('body'), tfc_TF.forms.userProfile, {}, {
						theme: tfc_TF.theme,
						item: {
							label: { style: '' },
							description: { style: '' }
						},
						onStateChange: function (t, d) {
							if (t == 'isDirty') {
								tfc_TF.ui.user._.h.setTabDirty('profile', d.value);
							}
						}
					});

					var p = ux.panelGet('TRANSFORM_USER');
					var ele = $(p.getPanelId('header'));
					ele.className = 'TFDockPanelHeader';
					tfc_TF.ui.user._.h = new A5.ViewBox(ele.id, {
						tab: 'preferences',
						tabs: [
							{
								html: 'Preferences',
								value: 'preferences',
								onShow: function () {
									ux.panelSetActive('TRANSFORM_USER_PREFERENCES');
									if (!this.dirty) {
										var p = ux.panelGet('TRANSFORM_USER_PREFERENCES');
										p.lock('Loading preferences...');
										tfc_TF.request('get-preferences', { type: 'user' }).then(function (d) {
											var fd = d.data;
											if (typeof fd == 'string') fd = JSON.parse(d.data);
											ux.userPreferencesForm.populate(fd);
											p.unlock();
										}).catch(function () {
											p.unlock();
										});
									}
								},
								action: function (t) {
									var p = ux.panelGet('TRANSFORM_USER_PREFERENCES');
									if (t == 'commit') {
										p.lock('Saving preferences...');
										tfc_TF.request('set-preferences', { type: 'user', data: ux.userPreferencesForm.data }).then(function (d) {
											ux.userPreferencesForm.setDirty(false);
											p.unlock();
										}).catch(function () {
											p.unlock();
										});
									} else if (t == 'cancel') {
										p.lock('Loading preferences...');
										tfc_TF.request('get-preferences', { type: 'user' }).then(function (d) {
											var fd = d.data;
											if (typeof fd == 'string') fd = JSON.parse(d.data);
											ux.userPreferencesForm.populate(fd);
											p.unlock();
										}).catch(function () {
											p.unlock();
										});
									} else if (t == 'discard') {
										ux.userPreferencesForm.setDirty(false);
									}
								}
							},
							{
								html: 'Your Profile',
								value: 'profile',
								onShow: function () {
									ux.panelSetActive('TRANSFORM_USER_PROFILE');
									if (!this.dirty) {
										var p = ux.panelGet('TRANSFORM_USER_PROFILE');
										p.lock('Loading profile...');
										tfc_TF.request('get-profile', { type: 'user' }).then(function (d) {
											ux.userProfileForm.populate(d.data);
											p.unlock();
										}).catch(function () {
											p.unlock();
										});
									}
								},
								action: function (t) {
									var p = ux.panelGet('TRANSFORM_USER_PROFILE');
									if (t == 'commit') {
										p.lock('Saving profile...');
										var fd = JSON.stringify(ux.userProfileForm.data);
										tfc_TF.request('set-profile', { type: 'user', data: fd }).then(function (d) {
											ux.userProfileForm.setDirty(false);
											tfc_TF.state.login.user.name = ux.userProfileForm.data.name;
											tfc_TF._.saveState(true);
											p.unlock();
										}).catch(function () {
											p.unlock();
										});
									} else if (t == 'cancel') {
										p.lock('Loading profile...');
										tfc_TF.request('get-profile', { type: 'user' }).then(function (d) {
											ux.userProfileForm.populate(d.data);
											p.unlock();
										}).catch(function () {
											p.unlock();
										});
									} else if (t == 'discard') {
										ux.userProfileForm.setDirty(false);
									}
								}
							}
						]
					}, {
						context: 'user',
						setTabDirty: tfc_TF.u.docks.tabs.setTabDirty,
						getTab: tfc_TF.u.docks.tabs.getTab,
						icons: {
							status: A5.u.icon.html('svgIcon=#alpha-icon-circleSolid:icon {width: 10px; height: 10px;}')
						},
						buttons: {
							login: [
								'<div style="display: flex; flex-direction: row;">',
								A5.buttons.html('TFUserButtonConfirmLogin', { theme: tfc_TF.theme + ':confirm', html: 'Confirm Login', icon: 'svgIcon=#alpha-icon-checkShield:icon' }, 'a5-item="confirmLogin"'),
								'<div style="flex: 1 1 auto;"></div>',
								A5.buttons.html('TFUserButtonLogout', { theme: tfc_TF.theme + ':deny', html: 'Logout', icon: 'svgIcon=#alpha-icon-exit:icon' }, 'a5-item="logout"'),
								'</div>'
							].join(''),
							edit: A5.buttons.html('', { theme: tfc_TF.theme, className: 'button buttonSubtle buttonIcon', icon: 'svgIcon=#alpha-icon-edit:icon' }),
							commit: A5.buttons.html('', { theme: tfc_TF.theme, className: 'button buttonConfirm buttonIcon', icon: 'svgIcon=#alpha-icon-check:icon' }),
							cancel: A5.buttons.html('', { theme: tfc_TF.theme, className: 'button buttonDeny buttonIcon', icon: 'svgIcon=#alpha-icon-x:icon' })
						},
						layout: 'main',
						layouts: {
							'main': {
								type: 'static',
								html: function () {
									var html = [];
									var d = this.data;
									var hObj = ux.getControl('TRANSFORM_MASTHEAD');
									var ed = tfc_TF.state.login.expires;
									var es = hObj.data.expiresStatus;
									var loginMsg = '';
									var iconDot = this.icons.status;
									var loginMsgCls = '';
									if (es == 'good') {
										if (ed.same('day')) {
											loginMsg = iconDot + 'Login will expire today at ' + ed.toFormat('hh:mm') + '.';
										} else if (ed.same('week')) {
											loginMsg = iconDot + 'Login will expire ' + ed.toFormat('Weekday') + ' at ' + ed.toFormat('hh:mm') + '.';
										} else {
											loginMsg = iconDot + 'Login will expire on ' + ed.toFormat('Month d') + ' at ' + ed.toFormat('hh:mm') + '.';
										}
										loginMsgCls = 'TFUserLoginStatusMessageGood';
									} else if (es == 'expiring') {
										loginMsg = iconDot + 'Login will expire today at ' + ed.toFormat('h:mm') + '.';
										loginMsgCls = 'TFUserLoginStatusMessageExpiring';
									} else {
										loginMsg = iconDot + 'Login has expired. You must re-confirm login.';
										loginMsgCls = 'TFUserLoginStatusMessageExpired';
									}

									html.push('<div class="TFDockHeader">');
									html.push(this.buttons.login);
									html.push('<div class="' + loginMsgCls + '">' + loginMsg + '</div>');
									html.push('</div>');
									html.push(tfc_TF.u.docks.tabs.html(this.contId, d.tabs, d.tab));
									return html.join('');
								}
							}
						},
						items: {
							'confirmLogin': {
								selectable: false,
								onClick: function () {
									tfc_TF.login('confirm');
								}
							},
							'logout': {
								selectable: false,
								onClick: function () {
									tfc_TF.logout();
								}
							},
							'tab': tfc_TF.u.docks.tabs.items['tab'],
							'tab-action': tfc_TF.u.docks.tabs.items['tab-action']
						}
					});
					p.setDisplay('header', true);
				} else {
					tfc_TF.ui.user._.h.refresh();
				}
				tfc_TF.ui.user._.h.getTab().onShow();
			}
		},

		// account dock UI
		account: {
			_: {},
			init: function (ux) {
				if (typeof tfc_TF.ui.account._.h == 'undefined') {
					var p = ux.panelGet('TRANSFORM_ACCOUNT_PREFERENCES');
					tfc_TF.u.panels.lockable(p);
					ux.accountPreferencesForm = new A5.FormBox(p.getPanelId('body'), tfc_TF.forms.accountPreferences, {}, {
						theme: tfc_TF.theme,
						item: {
							label: { style: '' },
							description: { style: '' }
						},
						onStateChange: function (t, d) {
							if (t == 'isDirty') {
								tfc_TF.ui.account._.h.setTabDirty('preferences', d.value);
							}
						}
					});
					p = ux.panelGet('TRANSFORM_ACCOUNT_PROFILE');
					tfc_TF.u.panels.lockable(p);
					ux.accountProfileForm = new A5.FormBox(p.getPanelId('body'), tfc_TF.forms.accountProfile, {}, {
						theme: tfc_TF.theme,
						item: {
							label: { style: '' },
							description: { style: '' }
						},
						onStateChange: function (t, d) {
							if (t == 'isDirty') {
								tfc_TF.ui.account._.h.setTabDirty('profile', d.value);
							}
						}
					});
					p = ux.panelGet('TRANSFORM_ACCOUNT_BILLINGANDUSAGE');
					tfc_TF.u.panels.lockable(p);

					p = ux.panelGet('TRANSFORM_ACCOUNT');
					var ele = $(p.getPanelId('header'));
					ele.className = 'TFDockPanelHeader';
					tfc_TF.ui.account._.h = new A5.ViewBox(ele.id, {
						account: { rename: false },
						tab: 'preferences',
						tabs: [
							{
								html: 'Preferences',
								value: 'preferences',
								onShow: function () {
									ux.panelSetActive('TRANSFORM_ACCOUNT_PREFERENCES');
									if (!this.dirty) {
										var p = ux.panelGet('TRANSFORM_ACCOUNT_PREFERENCES');
										p.lock('Loading preferences...');
										tfc_TF.request('get-preferences', { type: 'account' }).then(function (d) {
											var fd = d.data;
											if (typeof fd == 'string') fd = JSON.parse(d.data);
											ux.accountPreferencesForm.populate(fd);
											p.unlock();
										}).catch(function () {
											p.unlock();
										});
									}
								},
								action: function (t) {
									var p = ux.panelGet('TRANSFORM_ACCOUNT_PREFERENCES');
									if (t == 'commit') {
										p.lock('Saving preferences...');
										tfc_TF.request('set-preferences', { type: 'account', data: ux.accountPreferencesForm.data }).then(function (d) {
											ux.accountPreferencesForm.setDirty(false);
											p.unlock();
										}).catch(function () {
											p.unlock();
										});
									} else if (t == 'cancel') {
										p.lock('Loading preferences...');
										tfc_TF.request('get-preferences', { type: 'account' }).then(function (d) {
											var fd = d.data;
											if (typeof fd == 'string') fd = JSON.parse(d.data);
											ux.accountPreferencesForm.populate(fd);
											p.unlock();
										}).catch(function () {
											p.unlock();
										});
									} else if (t == 'discard') {
										ux.accountPreferencesForm.setDirty(false);
									}
								}
							},
							{
								html: 'Account Profile', value: 'profile',
								onShow: function () {
									ux.panelSetActive('TRANSFORM_ACCOUNT_PROFILE');
									if (!this.dirty) {
										var p = ux.panelGet('TRANSFORM_ACCOUNT_PROFILE');
										p.lock('Loading profile...');
										tfc_TF.request('get-profile', { type: 'account' }).then(function (d) {
											ux.accountProfileForm.populate(d.data);
											p.unlock();
										}).catch(function () {
											p.unlock();
										});
									}
								},
								action: function (t, hide) {
									if (t == 'commit') {
										var p = ux.panelGet('TRANSFORM_ACCOUNT_PROFILE');
										p.lock('Saving profile...');
										var d = A5.u.object.clone(ux.accountProfileForm.data);
										tfc_TF.request('set-profile', { type: 'account', data: d }).then(function () {
											tfc_TF.state.login.account.name = d.name;
											tfc_TF._.saveState(true);
											p.unlock();
											tfc_TF.ui.account._.h.setTabDirty('profile', false);
										}).catch(function () {
											p.unlock();
										});
									} else if (t == 'cancel') {
										tfc_TF.ui.members.list._.l.getMembersData();
									} else if (t == 'discard') {
										tfc_TF.ui.account._.h.setTabDirty('profile', false);
									}
								}
							},
							{
								html: 'Billing & Usage', value: 'billingAndUsage',
								onShow: function () {
									ux.panelSetActive('TRANSFORM_ACCOUNT_BILLINGANDUSAGE');
									var p = ux.panelGet('TRANSFORM_ACCOUNT_BILLINGANDUSAGE');
									p.lock('Loading billing & usage...');
									tfc_TF.request('get-plan', {}).then(function (d) {
										ux.getControl('TRANSFORM_BILLING_USAGE').populate(d);
										p.unlock();
									}).catch(function () {
										p.unlock();
									});
								}
							},
							{
								html: 'Members', value: 'members', onShow: function () {
									ux.panelSetActive('TRANSFORM_ACCOUNT_MEMBERS');
									if (!this.dirty) {
										var l = tfc_TF.ui.members.list._.l;
										if (l) l.getMembersData();
									}
								},
								action: function (t) {
									var po = ux.getChildObject('members');
									var p = po.panelGet('TRANSFORM_ACCOUNT_MEMBERS');
									if (t == 'commit') {
										p.lock('Saving members...');
										var d = tfc_TF.ui.members.list._.l.generateCRUD();
										tfc_TF.request('update-members', d).then(function (d) {
											tfc_TF.ui.members.list._.l.getMembersData();
											p.unlock();
										}).catch(function () {
											p.unlock();
										});
									} else if (t == 'cancel') {
										tfc_TF.ui.members.list._.l.getMembersData();
									} else if (t == 'discard') {
										tfc_TF.ui.account._.h.setTabDirty('members', false);
									}
								}
							}
						]
					}, {
						context: 'account',
						setTabDirty: tfc_TF.u.docks.tabs.setTabDirty,
						getTab: tfc_TF.u.docks.tabs.getTab,
						icons: {
							dirty: A5.u.icon.html('svgIcon=#alpha-icon-circleSolid:icon {width: 7px; height: 7px;}')
						},
						buttons: {
							edit: A5.buttons.html('', { theme: tfc_TF.theme, className: 'button buttonSubtle buttonIcon', icon: 'svgIcon=#alpha-icon-edit:icon' }),
							commit: A5.buttons.html('', { theme: tfc_TF.theme, className: 'button buttonConfirm buttonIcon', icon: 'svgIcon=#alpha-icon-check:icon' }),
							cancel: A5.buttons.html('', { theme: tfc_TF.theme, className: 'button buttonDeny buttonIcon', icon: 'svgIcon=#alpha-icon-x:icon' })
						},
						layout: 'main',
						layouts: {
							'main': {
								type: 'static',
								html: function () {
									var d = this.data;
									return tfc_TF.u.docks.tabs.html(this.contId, d.tabs, d.tab);
								}
							}
						},
						items: {
							'tab': tfc_TF.u.docks.tabs.items['tab'],
							'tab-action': tfc_TF.u.docks.tabs.items['tab-action']
						}
					});
					p.setDisplay('header', true);
				} else {
					tfc_TF.ui.account._.h.refresh();
				}
				tfc_TF.ui.account._.h.getTab().onShow();
			}
		},

		members: {
			init: function (ux) {
				var p = ux.panelGet('TRANSFORM_ACCOUNT_MEMBERS');
				tfc_TF.u.panels.lockable(p);
			},
			list: {
				_: {},
				init: function (ux, l) {
					var html = [];
					html.push('<div style="display: flex; flex-direction: row;">');
					html.push('<div style="display: flex; flex-direction: row; width: 385px;">');
					html.push(A5.buttons.html('TF.MEMBERS.SELECTALL', { theme: tfc_TF.theme + ':subtle', className: 'button buttonSubtle buttonIcon', html: A5.u.icon.html('svgIcon=#alpha-icon-circle:icon') + A5.u.icon.html('svgIcon=#alpha-icon-checkCircle:icon') + A5.u.icon.html('svgIcon=#alpha-icon-checkCircleBorder:icon') }));
					html.push(A5.buttons.html('TF.MEMBERS.ADD', { theme: tfc_TF.theme, style: 'flex: 1 1 0%; white-space: nowrap;', html: 'Add', icon: 'svgIcon=#alpha-icon-peopleAddSolid:icon' }));
					html.push(A5.buttons.html('TF.MEMBERS.REMOVE', { theme: tfc_TF.theme + ':deny', style: 'flex: 1 1 0%; white-space: nowrap;', html: 'Remove', icon: 'svgIcon=#alpha-icon-personXSolid:icon' }, '', 'disabled'));
					html.push(A5.buttons.html('TF.MEMBERS.RESTORE', { theme: tfc_TF.theme, style: 'flex: 1 1 0%; white-space: nowrap;', html: 'Restore', icon: 'svgIcon=#alpha-icon-personInSolid:icon' }, '', 'disabled'));
					html.push(A5.buttons.html('TF.MEMBERS.SETROLES', { theme: tfc_TF.theme, style: 'flex: 1 1 0%; white-space: nowrap;', html: 'Roles', icon: 'svgIcon=#alpha-icon-personDocSolid:icon' }, '', 'disabled'));
					html.push(A5.buttons.html('TF.MEMBERS.RESENDINVITE', { theme: tfc_TF.theme, style: 'white-space: nowrap; width: 125px;', html: 'Resend Invite', icon: 'svgIcon=#alpha-icon-envelopeOut:icon' }, '', 'disabled'));
					html.push(A5.buttons.html('TF.MEMBERS.RESENDINVITECANCEL', { theme: tfc_TF.theme, style: 'white-space: nowrap; width: 125px;', html: 'Cancel Resend', icon: 'svgIcon=#alpha-icon-envelopeIn:icon' }));
					html.push('</div>');
					html.push(A5.buttons.html('TF.MEMBERS.EXPORT', { theme: tfc_TF.theme, className: 'button buttonIcon', layout: 'icon', icon: 'svgIcon=#alpha-icon-export:icon' }));
					html.push('<div style="width: 4px;"></div>');
					html.push('<input id="TF.MEMBERS.FILTER.EDIT" class="TFEdit edit" style="flex: 1 1 auto;" placeholder="Quick search..." />');
					html.push('<div style="width: 4px;"></div>');
					html.push(A5.buttons.html('TF.MEMBERS.FILTER.CLEAR', { theme: tfc_TF.theme + ':subtle', className: 'button buttonSubtle buttonIcon', layout: 'icon', icon: 'svgIcon=#alpha-icon-x:icon' }, '', 'disabled'));
					html.push(A5.buttons.html('TF.MEMBERS.SORT', { theme: tfc_TF.theme + ':subtle', className: 'button buttonSubtle buttonIcon', layout: 'icon', icon: 'svgIcon=#alpha-icon-sort:icon' }));
					html.push('</div>');

					//var ele = $('TF.MEMBERS.LISTHEADER');
					var p = ux.panelGet('TRANSFORM_ACCOUNT_MEMBERS_LIST');
					var ele = $(p.getPanelId('header'));
					ele.className = 'TFPanelHeader';
					ele.innerHTML = html.join('');

					$e.add('TF.MEMBERS.FILTER.EDIT', 'keyup', function (e, l) { l.quickSearch(this.value); }, l);
					$e.add('TF.MEMBERS.FILTER.CLEAR', 'click', function (e, l) { l.quickSearch(''); }, l);
					$e.add('TF.MEMBERS.SORT', 'click', function (e, l) { l.sortMenu.show('dropdown', this); }, l);
					$e.add('TF.MEMBERS.SELECTALL', 'click', function (e, l) {
						if (l.selection.length != 0) l.setValue(false);
						else l.setValue({ select: 'all' });
					}, l);
					$e.add('TF.MEMBERS.ADD', 'click', function (e, l) { l.inviteMembers(); }, l);
					$e.add('TF.MEMBERS.REMOVE', 'click', function (e, l) { if (!this.disabled) l.removeMembers(true); }, l);
					$e.add('TF.MEMBERS.RESTORE', 'click', function (e, l) { if (!this.disabled) l.removeMembers(false); }, l);
					$e.add('TF.MEMBERS.SETROLES', 'click', function (e, l) { if (!this.disabled) l.setRoles(); }, l);
					$e.add('TF.MEMBERS.RESENDINVITE', 'click', function (e, l) { if (!this.disabled) l.resendInvite(true); }, l);
					$e.add('TF.MEMBERS.RESENDINVITECANCEL', 'click', function (e, l) { if (!this.disabled) l.resendInvite(false); }, l);
					$e.add('TF.MEMBERS.EXPORT', 'click', function () {
						tfc_TF.ui.members.list._.ux.exportListData('members', {
							data: 'listData',
							exportType: 'excel',
							action: 'download',
							clientsidefilename: '',
							maxRecords: -1,
							onlyexportcolumnsinschema: true,
							datatransformationjavascript: 'data.state = data._.state; if(data.invite.guid) data.link = location.origin+\'/transformAcceptInvite.a5w?mode=acceptInvite&uid=\'+urlencode(data.userId)+\'&invitationguid=\'+data.invite.guid; ',
							schema: {
								userId: { type: 'C', size: 30, columnHeading: 'User ID' },
								name: { type: 'C', size: 20, columnHeading: 'User Name' },
								roles: { type: 'C', size: 100, columnHeading: 'User Roles' },
								state: { type: 'C', size: 20, columnHeading: 'Invitation State' },
								link: { type: 'C', size: 20, columnHeading: 'Invitation Link' }
							}
						});
					});

					$e.add('TF.MEMBERS.EXPORT', 'mouseenter', function () {
						tfc_TF.u.flyout.show(this, 'Export visible members to Excel...</div>', { direction: 'vertical-left' });
					});
					$e.add('TF.MEMBERS.EXPORT', 'mouseleave', function () { tfc_TF.u.flyout.hide(); });

					$e.add('TF.MEMBERS.FILTER.EDIT', 'mouseenter', function () {
						var html = [
							'<div style="display: flex; flex-direction: row;">',
							'<div style="align-self: center;">',
							A5.u.icon.html('svgIcon=#alpha-icon-infoCircle:icon{width: 32px; height: 32px;}'),
							'</div>',
							'<div class="TFFormItemExtra" style="max-width: 300px; white-space: wrap; text-align: justify;">',
							'<div>',
							'A prefix of <span class="TFFormItemDescData">roles:</span> will target the search to roles.',
							'</div>',
							'<div style="margin-top: 6px;">',
							'A prefix of <span class="TFFormItemDescData">state:</span> will filter on the states ',
							'<span class="TFFormItemDescData">dirty</span>, <span class="TFFormItemDescData">clean</span>, <span class="TFFormItemDescData">deleted</span>, <span class="TFFormItemDescData">pending</span>, <span class="TFFormItemDescData">expired</span>, <span class="TFFormItemDescData">unsent</span> and <span class="TFFormItemDescData">resend</span>.',
							'</div>',
							'<div style="margin-top: 6px;">',
							'For <span class="TFFormItemDescData">roles:</span> and <span class="TFFormItemDescData">state:</span> multiple values are allowed using a <span class="TFFormItemDescData">,</span> as a separator.',
							'</div>',
							'</div>',
							'</div>'
						]
						tfc_TF.u.flyout.show(this, html.join(''), { direction: 'vertical-right' });
					});
					$e.add('TF.MEMBERS.FILTER.EDIT', 'mouseleave', function () { tfc_TF.u.flyout.hide(); });

					A5.u.element.cls(l.contId, 'TFMembersList TFMembersDragAllow');

					p.setDisplay('header', true);
					l.refreshToolbar();

					l.sortMenu = new A5.Menu([
						{ html: 'Clear Sort', value: 'none', icon: 'svgIcon=#alpha-icon-x:icon' },
						'-',
						{ html: 'Name Ascending', value: 'name:1', icon: 'svgIcon=#alpha-icon-sortAlphaAsc:icon' },
						{ html: 'Name Descending', value: 'name:-1', icon: 'svgIcon=#alpha-icon-sortAlphaDesc:icon' },
						{ html: 'Date Added Ascending', value: 'invite.added:1', icon: 'svgIcon=#alpha-icon-calendarDate:icon' },
						{ html: 'Date Added Descending', value: 'invite.added:-1', icon: 'svgIcon=#alpha-icon-calendarDate:icon' },
						'-',
						{ html: 'Unsaved', value: '_.isDirty:-1', icon: 'svgIcon=#alpha-icon-broom:icon' },
						{ html: 'Pending Members', value: '_.sortP:1', icon: 'svgIcon=#alpha-icon-questionCircle:icon' },
						{ html: 'Expired Members', value: '_.sortE:1', icon: 'svgIcon=#alpha-icon-exclamationTriangle:icon' }
					], {
						theme: tfc_TF.theme,
						style: 'white-space: nowrap;',
						onClick: function (i) {
							var v = i.value.split(':');
							var l = tfc_TF.ui.members.list._.l;
							if (v.length > 1) {
								var dir = v[1].toNumber();
								l.setOrder([[v[0], dir]]);
							} else l.setOrder(false);
						}
					});

					this._.l = l;
					this._.ux = ux;
				}
			},
			invite: {
				html: function (vb) {

					var html = [];
					var d = vb.data;
					html.push('<div class="TFFormItemFlex" style="margin-top: 4px;">');
					html.push('<div class="TFFormItemLabel">Create users without sending invitations</div>');
					html.push('<div class="TFFormItemContent" style="display: inline-block; width: 60px;">');
					html.push(A5.switches.html(vb.noInvite || false, { theme: tfc_TF.theme }, ' id="' + this.contId + '.NOINVITE" a5-item="noInvite"'));
					html.push('</div>');
					html.push('</div>');
					if (Array.isArray(d) && d.length > 0) {
						var di, rk, idp = null;
						var rm = vb._rm;
						html.push('<div id="' + vb.contId + '.LIST" style="display: grid; grid-template-columns: 150px 100px' + (vb.noInvite ? ' 100px' : '') + ' 1fr auto auto; grid-column-gap: 4px; row-gap: 4px; margin-top: 4px;">');
						html.push('<div class="TFFormItemLabel">Email</div>');
						html.push('<div class="TFFormItemLabel">Name</div>');
						if (vb.noInvite) html.push('<div class="TFFormItemLabel">Password</div>');
						html.push('<div class="TFFormItemLabel">Roles</div>');
						html.push('<div class="TFFormItemLabel"></div>');
						html.push('<div class="TFFormItemLabel"></div>');
						var rolesBtn = A5.buttons.html(vb.contId + '.__I__.ROLES', { theme: tfc_TF.theme, icon: 'svgIcon=#alpha-icon-personDocSolid:icon' }, 'a5-item="setRoles:__I__"');
						var remBtn = A5.buttons.html(vb.contId + '.__I__.REMOVE', { theme: tfc_TF.theme + ':deny', layout: 'icon', icon: 'svgIcon=#alpha-icon-x:icon' }, 'a5-item="remove:__I__"');
						var re = /__I__/g;
						for (var i = 0; i < d.length; i++) {
							di = d[i]
							idp = vb.contId + '.' + i + '.';
							html.push('<input id="' + idp + 'email" a5-value-from="' + i + ':email" value="' + di.email + '" spellcheck="false" class="edit' + (tfc_TF.u.re.email.test(di.email) ? '' : ' editError') + '" style="align-self: start;"/>');
							html.push('<input id="' + idp + 'name" a5-value-from="' + i + ':name" value="' + di.name + '" placeholder="Display name..." spellcheck="false" class="edit' + (di.name.trim() != '' ? '' : ' editError') + '" style="align-self: start;"/>');
							if (vb.noInvite) html.push('<input id="' + idp + 'pw" a5-value-from="' + i + ':pw" value="' + di.pw + '" ondblclick="this.select();" spellcheck="false" class="edit' + (di.pw != '' ? '' : ' editError') + '" style="align-self: start;"/>');
							html.push('<div style="flex: 1 1 auto; align-self: center;">');
							if (di.roles.length == 0) {
								html.push('<div class="TFFormItemLabel">Click button to select roles...</div>');
							} else {
								for (var k = 0; k < di.roles.length; k++) {
									rk = di.roles[k];
									html.push('<div class="TFListDataBadge">' + (typeof rm[rk] == 'string' ? rm[rk] : rk) + '</div>');
								}
							}

							html.push('</div>');
							html.push(rolesBtn.replace(re, i));
							html.push(remBtn.replace(re, i));
						}
						html.push('</div>');
					}
					html.push('<div style="margin-top: 4px; margin-bottom: 8px;">');
					html.push('<textarea id="' + vb.contId + '.ADD" a5-value-from="add" onkeyup="if(event.key == \'Enter\'){this.dispatchEvent(new Event(\'change\',{bubbles: true}));}" class="edit" style="width: 100%; resize: none; box-sizing: border-box;" placeholder="Enter or paste email addresses..."></textarea>');
					html.push('</div>');

					html.push('<div class="TFFormNote">');
					html.push('<p>');
					html.push('You may use standard email formatting in the above input. ');
					html.push('When entering a member by typing in above input, you must hit the ENTER key to add the member. ');
					html.push('When pasting, you may enter multiple members with one member on each line. ');
					html.push('</p>');
					html.push('<p>');
					html.push('You can select the roles to give each member by clicking the <span class="button" style="display: inline-block;">' + A5.u.icon.html('svgIcon=#alpha-icon-personDocSolid:icon') + '</span> button.');
					html.push('</p>');
					html.push('<p>');
					html.push('Once you have entered the members you wish to add to the account you must press the <span class="button" style="display: inline-block;">' + A5.u.icon.html('svgIcon=#alpha-icon-peopleAddSolid:icon') + 'Add Members</span> button to add the members to the account.');
					html.push('</p>');
					html.push('</div>');
					return html.join('');

				}
			},
			roles: {
				_: {},
				select: function (ele, v, r, c) {
					if (typeof this._.vb == 'undefined') {
						this._.t = new A5.Transient({
							theme: tfc_TF.theme,
							content: {
								type: 'html',
								html: ''
							},
							layout: 'main',
							layouts: {
								'main': {
									stretch: 'none',
									location: ['dropdown-left', 'dropdown-right']
								}
							}
						});
						var tEle = this._.t.getElement('top');
						tEle.style.zIndex = '1000';
						var id = this._.t.getElement('content').id;
						this._.vb = new A5.ViewBox(id, [], {
							wrapper: {
								allow: true,
								html: [
									'<div a5-layout-target="true" class="TFListSubtle" style="max-height: 200px; min-width: 200px;"></div>',
									'<div class="windowButtons">',
									'<div id="TF.MEMBERS.ROLES.MULTIPLE" style="display: flex; flex-direction: row; padding: 4px; padding-bottom: 0px;">',
									A5.buttons.html('TF.MEMBERS.ROLES.ADD', { theme: tfc_TF.theme, html: 'Add', style: 'flex: 1 1 0%;' }, 'a5-item="done:add"'),
									A5.buttons.html('TF.MEMBERS.ROLES.REMOVE', { theme: tfc_TF.theme + ':deny', html: 'Remove', style: 'flex: 1 1 0%;' }, 'a5-item="done:remove"'),
									'</div>',
									'<div style="display: flex; flex-direction: row; padding: 4px;">',
									A5.buttons.html('TF.MEMBERS.ROLES.COMMIT', { theme: tfc_TF.theme, html: 'Set Roles', style: 'flex: 1 1 0%;' }, 'a5-item="done:set"'),
									A5.buttons.html('TF.MEMBERS.ROLES.CANCEL', { theme: tfc_TF.theme + ':subtle', html: 'Cancel', style: 'flex: 1 1 0%;' }, 'a5-item="done:cancel"'),
									'</div>',
									'</div>'
								].join('')

							},
							scroll: { axis: 'y' },
							multiple: true,
							selectionMode: 'additive',
							allowNullDeselection: true,
							allowTextSelection: false,
							layout: 'main',
							layouts: {
								'main': {
									type: 'template',
									template: [
										'<div id="' + id + '.{[count]}" a5-item="item" a5-value="{value}" class="listItem listItemSubtle" style="display: flex; flex-direction: row;">',
										'<div style="align-self: center;">',
										A5.u.icon.html('svgIcon=#alpha-icon-circle:icon TFCheckboxListUnselected'),
										A5.u.icon.html('svgIcon=#alpha-icon-checkCircle:icon TFCheckboxListSelected'),
										'</div>',
										'<div style="flex: 1 1 auto; align-self: center; padding-left: 4px;">',
										'{html}',
										'</div>',
										'</div>'
									].join('')
								}
							},
							items: {
								'item': {
									selectable: true,
									selectedClassName: 'listItemSelected'
								},
								'done': {
									selectable: false,
									onClick: function (v, ia) {
										if (ia != 'cancel') this.commit(this.value, ia);
										tfc_TF.ui.members.roles._.t.hide();
									}
								}
							}
						});
					}
					this._.vb.populate(r);
					var s = { multiple: false };
					if (!Array.isArray(v)) {
						A5.u.object.assign(s, v);
						v = [];
					}

					if (s.multiple) $('TF.MEMBERS.ROLES.MULTIPLE').style.display = 'flex';
					else $('TF.MEMBERS.ROLES.MULTIPLE').style.display = 'none';

					this._.vb.setValue(v);
					this._.t.show(ele);
					this._.vb.commit = c;
				}
			}
		},

		// dev dock UI
		dev: {
			_: { e: {} },
			init: function (ux) {
				if (typeof tfc_TF.ui.dev._.h == 'undefined') {
					var p = ux.panelGet('TRANSFORM_DEVELOPER');
					var ele = $(p.getPanelId('header'));
					ele.className = 'TFDockPanelHeader';

					tfc_TF.ui.dev._.h = new A5.ViewBox(ele.id, {
						tab: 'preferences',
						tabs: [
							{
								html: 'Settings',
								value: 'preferences',
								onShow: function () {
									ux.panelSetActive('TRANSFORM_DEVELOPER_PREFERENCES');
									if (!this.dirty) {
										var p = ux.panelGet('TRANSFORM_DEVELOPER_PREFERENCES');
										p.lock('Loading preferences JSON...');
										tfc_TF.request('get-preferences', { type: 'developer' }).then(function (d) {
											var v = d.data;
											if (A5.u.typeOf(v) == 'object') v = JSON.stringify(v, '', '\t');
											tfc_TF.ui.dev._.e.p.setValue(v);
											p.unlock();
										}).catch(function () {
											p.unlock();
										});
									}
								},
								action: function (t) {
									var p = ux.panelGet('TRANSFORM_DEVELOPER_PREFERENCES');
									if (t == 'commit') {
										if (tfc_TF.u.code.lang.json.validate(tfc_TF.ui.dev._.e.p.value) !== true) {
											tfc_TF.u.message.show('confirm', 'Syntax Error', 'Invalid JSON.');
											return false;
										}
										p.lock('Saving preferences JSON...');
										tfc_TF.request('set-preferences', { type: 'developer', data: JSON.parse(tfc_TF.ui.dev._.e.p.value) }).then(function (d) {
											tfc_TF.ui.dev._.e.p.setDirty(false);
											p.unlock();
										}).catch(function () {
											p.unlock();
										});
									} else if (t == 'cancel') {
										p.lock('Loading preferences JSON...');
										tfc_TF.request('get-preferences', { type: 'developer' }).then(function (d) {
											var v = d.data;
											if (A5.u.typeOf(v) == 'object') v = JSON.stringify(v, '', '\t');
											tfc_TF.ui.dev._.e.p.setValue(v);
											p.unlock();
										}).catch(function () {
											p.unlock();
										});
									}
								}
							},
							{
								html: 'Permissions',
								value: 'permissions',
								onShow: function () {
									ux._currentPermissions = null;
									ux.panelSetActive('TRANSFORM_DEVELOPER_PERMISSIONS');
									ux.sendMessageToChild('PERMISSIONS', { type: "action", cmd: "load" });
								},
								action: function (t) {
									var pUX = tfc_TF.ui.main._.ux;
									if (t == 'commit') {
										pUX.sendMessageToChild('PERMISSIONS', { type: "action", cmd: "save" });
									} else if (t == 'cancel') {
										pUX.sendMessageToChild('PERMISSIONS', { type: "action", cmd: "load" });
									}
								}
							},
							{
								html: 'Dispatch Forms',
								value: 'dispatch',
								onShow: function () { ux.panelSetActive('TRANSFORM_DEVELOPER_DISPATCH_FORMS'); },
							},
							{
								title: 'Actions',
								color: '#fdd5b3',
								items: [
									{
										html: 'Builder', value: 'onsubmit',
										onShow: function () {
											ux.panelSetActive('TRANSFORM_DEVELOPER_ACTIONS');
											if (!this.dirty) {
												var po = ux.getChildObject('actionEditor');
												if (po) po.getActions();
											}
										},
										action: function (t) {
											var p = tfc_TF.ui.dev.actions._.p;
											if (t == 'commit') {
												if (tfc_TF.u.code.lang.json.validate(tfc_TF.ui.dev.actions._.e.value) !== true) {
													tfc_TF.u.message.show('confirm', 'Syntax Error', 'Invalid JSON.');
													return false;
												}
												p.lock('Saving actions JSON...');
												tfc_TF.request('set-preferences', { type: 'actions', data: JSON.parse(tfc_TF.ui.dev.actions._.e.value) }).then(function (d) {
													tfc_TF.ui.dev.actions._.e.setDirty(false);
													p.unlock();
												}).catch(function () {
													p.unlock();
												});
											} else if (t == 'cancel') {
												var po = ux.getChildObject('actionEditor');
												if (po) po.getActions();
											}

										}
									},
									{ html: 'Event Log', value: 'onsubmitLog', onShow: function () { ux.panelSetActive('TRANSFORM_DEVELOPER_ACTIONS_LOG'); } }
								]
							},
							{
								title: 'Assets',
								color: '#b0d6fd',
								items: [
									{
										html: 'On Device', value: 'deviceAssets',
										onShow: function () {
											ux.panelSetActive('TRANSFORM_DEVELOPER_ASSETS');
											if (!this.dirty) {
												if (typeof tfc_TF.ui.dev.assets.list._.l != 'undefined') tfc_TF.ui.dev.assets.list._.l.getAssetsData();
											}
										},
										action: function (t) {
											if (t == 'commit') {
												tfc_TF.ui.dev.assets.list._.l.setAssetsData();
											} else if (t == 'cancel') {
												tfc_TF.ui.dev.assets.list._.l.getAssetsData();
											}

										}
									},
									{
										html: 'Policies & Queues',
										value: 'policiesAndQueues',
										onShow: function () {
											ux.panelSetActive('TRANSFORM_DEVELOPER_POLICIES_QUEUES');
											if (!this.dirty) {
												var p = ux.panelGet('TRANSFORM_DEVELOPER_POLICIES_QUEUES');
												p.lock('Loading policies & queues JSON...');
												tfc_TF.request('get-preferences', { type: 'device-assets-options' }).then(function (d) {
													var v = d.data;
													if (A5.u.typeOf(v) == 'object') v = JSON.stringify(v, '', '\t');
													tfc_TF.ui.dev._.e.pq.setValue(v);
													p.unlock();
												}).catch(function () {
													p.unlock();
												});
											}
										},
										action: function (t) {
											var p = ux.panelGet('TRANSFORM_DEVELOPER_POLICIES_QUEUES');
											if (t == 'commit') {
												if (tfc_TF.u.code.lang.json.validate(tfc_TF.ui.dev._.e.pq.value) !== true) {
													tfc_TF.u.message.show('confirm', 'Syntax Error', 'Invalid JSON.');
													return false;
												}
												p.lock('Saving policies & queues JSON...');
												tfc_TF.request('set-preferences', { type: 'device-assets-options', data: JSON.parse(tfc_TF.ui.dev._.e.pq.value) }).then(function (d) {
													tfc_TF.ui.dev._.e.pq.setDirty(false);
													p.unlock();
												}).catch(function () {
													p.unlock();
												});
											} else if (t == 'cancel') {
												p.lock('Loading policies & queues JSON...');
												tfc_TF.request('get-preferences', { type: 'device-assets-options' }).then(function (d) {
													var v = d.data;
													if (A5.u.typeOf(v) == 'object') v = JSON.stringify(v, '', '\t');
													tfc_TF.ui.dev._.e.pq.setValue(v);
													p.unlock();
												}).catch(function () {
													p.unlock();
												});
											}
										}
									}
								]
							},
							{
								title: 'Integrations',
								items: [
									{ html: 'API Keys', value: 'apiKeys', onShow: function () { ux.panelSetActive('TRANSFORM_DEVELOPER_APIKEYS'); } },
									{
										html: 'Connected Apps', value: 'connectedApps',
										onShow: function () {
											ux.panelSetActive('TRANSFORM_DEVELOPER_APPS');
											if (!this.dirty) {
												if (typeof tfc_TF.ui.dev.apps.list._.l != 'undefined') tfc_TF.ui.dev.apps.list._.l.getConnectedAppsData();
											}
										},
										action: function (t) {
											if (t == 'commit') {
												tfc_TF.ui.dev.apps.list._.l.setConnectedAppsData();
											} else if (t == 'cancel') {
												tfc_TF.ui.dev.apps.list._.l.getConnectedAppsData();
											}
										}
									},
									{ html: 'Zapier', value: 'zapier', onShow: function () { ux.panelSetActive('TRANSFORM_DEVELOPER_ZAPIER'); } },
								]
							}
						]
					}, {
						context: 'configure',
						setTabDirty: tfc_TF.u.docks.tabs.setTabDirty,
						getTab: tfc_TF.u.docks.tabs.getTab,
						icons: {
							dirty: A5.u.icon.html('svgIcon=#alpha-icon-circleSolid:icon {width: 7px; height: 7px;}')
						},
						buttons: {
							edit: A5.buttons.html('', { theme: tfc_TF.theme, className: 'button buttonSubtle buttonIcon', icon: 'svgIcon=#alpha-icon-edit:icon' }),
							commit: A5.buttons.html('', { theme: tfc_TF.theme, className: 'button buttonConfirm buttonIcon', icon: 'svgIcon=#alpha-icon-check:icon' }),
							cancel: A5.buttons.html('', { theme: tfc_TF.theme, className: 'button buttonDeny buttonIcon', icon: 'svgIcon=#alpha-icon-x:icon' })
						},
						layout: 'main',
						layouts: {
							'main': {
								type: 'static',
								html: function () {
									var d = this.data;
									return tfc_TF.u.docks.tabs.html(this.contId, d.tabs, d.tab);
								}
							}
						},
						items: {
							'tab': tfc_TF.u.docks.tabs.items['tab'],
							'tab-action': tfc_TF.u.docks.tabs.items['tab-action']
						}
					});
					p.setDisplay('header', true);

					p = ux.panelGet('TRANSFORM_DEVELOPER_PREFERENCES');
					tfc_TF.u.panels.lockable(p);
					ele = $(p.getPanelId('body'));
					ele.innerHTML = '<div id="TF.DEV.PREFERENCES"style="width: 100%; height: 100%; box-sizing: border-box;"></div>';
					tfc_TF.ui.dev._.e.p = new tfc_TF.u.code.Editor('TF.DEV.PREFERENCES', {
						lang: 'json',
						className: 'TFCodeEditor',
						margin: {
							show: true,
							className: 'TFCodeEditorMargin'

						},
						onStateChange: function (t, v) {
							if (t == 'dirty') {
								tfc_TF.ui.dev._.h.setTabDirty('preferences', v);
							}
						}
					});
					ele = $(p.getPanelId('header'));
					var html = ['<div style="display: flex; flex-direction: row; align-items: center;">'];
					html.push('<div style="flex: 1 1 auto; padding-left: 4px;">The preferences are defined using JSON. For help with syntax click <a class="link" href="https://documentation.alphasoftware.com/TransFormDocumentation/index?search=otheraccountsettings" target="_blank">here</a>.</div>');
					html.push(A5.buttons.html('TF.DEV.PREFERENCES.VALIDATE', { theme: tfc_TF.theme, html: 'Validate', icon: 'svgIcon=#alpha-icon-exclamationTriangle:icon' }));
					html.push(A5.buttons.html('TF.DEV.PREFERENCES.REFORMAT', { theme: tfc_TF.theme, html: 'Reformat', icon: 'svgIcon=#alpha-icon-textAlignLeft:icon' }));
					html.push('</div>');
					ele.innerHTML = html.join('');
					$e.add('TF.DEV.PREFERENCES.VALIDATE', 'click', function (e) {
						var json = tfc_TF.ui.dev._.e.p.value;
						var res = tfc_TF.u.code.lang.json.validate(json);
						if (res !== true) {
							tfc_TF.u.message.show('confirm', 'Error', res.message);
						}
					});
					$e.add('TF.DEV.PREFERENCES.REFORMAT', 'click', function (e) {
						var json = tfc_TF.ui.dev._.e.p.value;
						json = tfc_TF.u.code.lang.json.reformat(json);
						tfc_TF.ui.dev._.e.p.setValue(json);
					});
					ele.className = 'TFPanelHeader';
					p.setDisplay('header', true);

					p = ux.panelGet('TRANSFORM_DEVELOPER_PERMISSIONS');
					tfc_TF.u.panels.lockable(p);

					p = ux.panelGet('TRANSFORM_DEVELOPER_POLICIES_QUEUES');
					tfc_TF.u.panels.lockable(p);
					ele = $(p.getPanelId('body'));
					ele.innerHTML = '<div id="TF.DEV.POLICIES_QUEUES"style="width: 100%; height: 100%; box-sizing: border-box;"></div>';
					tfc_TF.ui.dev._.e.pq = new tfc_TF.u.code.Editor('TF.DEV.POLICIES_QUEUES', {
						lang: 'json',
						className: 'TFCodeEditor',
						margin: {
							show: true,
							className: 'TFCodeEditorMargin'

						},
						onStateChange: function (t, v) {
							if (t == 'dirty') {
								tfc_TF.ui.dev._.h.setTabDirty('policiesAndQueues', v);
							}
						}
					});
					ele = $(p.getPanelId('header'));

					var html = ['<div style="display: flex; flex-direction: row; align-items: center;">'];
					html.push('<div style="flex: 1 1 auto; padding-left: 4px;">The policies & queues are defined using JSON. For help with syntax click <a class="link" href="https://documentation.alphasoftware.com/TransFormDocumentation/index?search=ondevice%20assets%20policy" target="_blank">here</a>.</div>');
					html.push(A5.buttons.html('TF.DEV.POLICIES_QUEUES.VALIDATE', { theme: tfc_TF.theme, html: 'Validate', icon: 'svgIcon=#alpha-icon-exclamationTriangle:icon' }));
					html.push(A5.buttons.html('TF.DEV.POLICIES_QUEUES.REFORMAT', { theme: tfc_TF.theme, html: 'Reformat', icon: 'svgIcon=#alpha-icon-textAlignLeft:icon' }));
					html.push('</div>');
					ele.innerHTML = html.join('');
					$e.add('TF.DEV.POLICIES_QUEUES.VALIDATE', 'click', function (e) {
						var json = tfc_TF.ui.dev._.e.pq.value;
						var res = tfc_TF.u.code.lang.json.validate(json);
						if (res !== true) {
							tfc_TF.u.message.show('confirm', 'Error', res.message);
						}
					});
					$e.add('TF.DEV.POLICIES_QUEUES.REFORMAT', 'click', function (e) {
						var json = tfc_TF.ui.dev._.e.pq.value;
						json = tfc_TF.u.code.lang.json.reformat(json);
						tfc_TF.ui.dev._.e.pq.setValue(json);
					});

					ele.className = 'TFPanelHeader';
					p.setDisplay('header', true);
				} else {
					tfc_TF.ui.dev._.h.refresh();
				}
				tfc_TF.ui.dev._.h.getTab().onShow();
			},
			assets: {
				_: {},
				init: function (ux) {
					var p = ux.panelGet('TRANSFORM_DEVICE_ASSETS');
					this._.p = p;
					tfc_TF.u.panels.lockable(p);
					var pId = p.getPanelId();
					var ele = $(pId);
					var fEle = document.createElement('div');
					fEle.id = 'TF.ASSETS.FORM';
					fEle.style.display = 'none';
					fEle.style.zIndex = '5';
					fEle.className = 'TFOverlayForm';
					fEle.innerHTML = '<div id="TF.ASSETS.FORM.CONTENT" class="TFForm"></div>';
					ele.appendChild(fEle);
					this._.f = new A5.FormBox('TF.ASSETS.FORM.CONTENT', tfc_TF.forms.deviceAssets, {}, {
						theme: tfc_TF.theme
					});
				},
				getFoldersList: function () {
					var d = this.list._.l._data;
					var dtf = null;
					var res = [];
					for (var i = 0; i < d.length; i++) {
						dtf = d[i].targetFolder;
						if (typeof dtf == 'string' && dtf != '' && res.indexOf(dtf) == -1) res.push(dtf);
					}
					res.unshift({ "html": "[Top Level]", "value": "" });
					return res;
				},
				list: {
					_: {},
					init: function (ux, l) {
						var dev = tfc_TF.state.ui.editing.json.lists;
						var html = [];
						html.push('<div style="display: flex; flex-direction: row; align-items: center; gap: 4px; padding-bottom: 2px;">');
						html.push('<div class="TFFormItemLabel">Manifest source</div>');
						html.push('<div id="TF.ASSETS.SRC"><button class="button" style="visibility: hidden;">Button</button></div>');
						html.push('<input id="TF.ASSETS.SRC.URL" class="TFEdit edit" style="flex: 1 1 auto;" placeholder="Specify the URL of the JSON file..." spellcheck="false" />');
						html.push('</div>');
						html.push('<div style="display: flex; flex-direction: row;">');
						html.push('<div style="display: flex; flex-direction: row;">');
						html.push(A5.buttons.html('TF.ASSETS.SELECTALL', { theme: tfc_TF.theme + ':subtle', className: 'button buttonSubtle buttonIcon', html: A5.u.icon.html('svgIcon=#alpha-icon-circle:icon') + A5.u.icon.html('svgIcon=#alpha-icon-checkCircle:icon') + A5.u.icon.html('svgIcon=#alpha-icon-checkCircleBorder:icon') }));
						html.push(A5.buttons.html('TF.ASSETS.ADD', { theme: tfc_TF.theme, html: 'Add', icon: 'svgIcon=#alpha-icon-add:icon' }));
						html.push(A5.buttons.html('TF.ASSETS.EDIT', { theme: tfc_TF.theme, html: 'Edit', icon: 'svgIcon=#alpha-icon-edit:icon' }));
						html.push(A5.buttons.html('TF.ASSETS.REMOVE', { theme: tfc_TF.theme + ':deny', html: 'Remove', icon: 'svgIcon=#alpha-icon-x:icon' }));
						html.push(A5.buttons.html('TF.ASSETS.RESTORE', { theme: tfc_TF.theme, html: 'Restore', icon: 'svgIcon=#alpha-icon-docInSolid:icon' }));
						html.push('</div>');
						html.push('<div style="width: 4px;"></div>');
						html.push('<input id="TF.ASSETS.FILTER.EDIT" class="TFEdit edit" style="flex: 1 1 auto;" placeholder="Quick search..." spellcheck="false" />');
						html.push('<div style="width: 4px;"></div>');
						html.push(A5.buttons.html('TF.ASSETS.FILTER.CLEAR', { theme: tfc_TF.theme + ':subtle', className: 'button buttonSubtle buttonIcon', layout: 'icon', icon: 'svgIcon=#alpha-icon-x:icon' }, '', 'disabled'));
						html.push(A5.buttons.html('TF.ASSETS.SORT', { theme: tfc_TF.theme + ':subtle', className: 'button buttonSubtle buttonIcon', layout: 'icon', icon: 'svgIcon=#alpha-icon-sort:icon' }));
						if (dev) html.push(A5.buttons.html('TF.ASSETS.JSON.EDIT', { theme: tfc_TF.theme + ':subtle', className: 'button buttonSubtle buttonIcon', layout: 'icon', icon: 'svgIcon=#alpha-icon-dataJSON:icon' }))


						html.push('</div>');

						//var ele = $('TF.ASSETS.LISTHEADER');
						var p = ux.panelGet('TRANSFORM_DEVICE_ASSETS');
						var ele = $(p.getPanelId('header'));
						ele.className = 'TFPanelHeader';
						ele.innerHTML = html.join('');

						$e.add('TF.ASSETS.SRC.URL', 'change', function (e, l) {
							var url = $('TF.ASSETS.SRC.URL').value;
							l.getAssetsFromURL(url);
							l.setDirty();
						}, l);
						$e.add('TF.ASSETS.SRC', 'click', function (e, l) {
							var v = e.target.value;
							if (l.source != v) {
								l.source = v;
								var iEle = $('TF.ASSETS.SRC.URL');
								if (v == 'url') {
									l._localData = [].concat(l._data);
									l.populate([]);
									iEle.style.visibility = '';
									var url = $('TF.ASSETS.SRC.URL').value;
									if (url != '') l.getAssetsFromURL(url);
								} else {
									l.populate(l._localData);
									iEle.style.visibility = 'hidden';
								}
								l.setDirty();
							}
						}, l);
						$e.add('TF.ASSETS.SELECTALL', 'click', function (e, l) {
							if (l.selection.length != 0) l.setValue(false);
							else l.setValue({ select: 'all' });
						}, l);

						$e.add('TF.ASSETS.ADD', 'click', function (e, l) {
							$('TF.ASSETS.FORM').style.display = '';
							tfc_TF.ui.dev.assets._.f.populate({
								mode: 'add',
								asset: {
									type: 'file',
									url: '',
									version: 1,
									targetFolder: ''
								}
							});
						}, l);
						$e.add('TF.ASSETS.EDIT', 'click', function (e, l) {
							$('TF.ASSETS.FORM').style.display = '';
							var d = l.selectionData[0];
							tfc_TF.ui.dev.assets._.f.populate({
								mode: 'edit',
								asset: {
									type: d.type,
									url: d.url,
									version: d.version,
									targetFolder: (typeof d.targetFolder == 'string' ? d.targetFolder : '')
								}
							});
						}, l);
						$e.add('TF.ASSETS.REMOVE', 'click', function (e, l) {
							l.removeAssets(true);
						}, l);
						$e.add('TF.ASSETS.RESTORE', 'click', function (e, l) {
							l.removeAssets(false);
						}, l);
						$e.add('TF.ASSETS.FILTER.EDIT', 'keyup', function (e, l) { l.quickSearch(this.value); }, l);
						$e.add('TF.ASSETS.FILTER.CLEAR', 'click', function (e, l) { l.quickSearch(''); }, l);
						$e.add('TF.ASSETS.SORT', 'click', function (e, l) { if (l.source == 'local') l.sortMenu.show('dropdown', this); }, l);
						$e.add('TF.ASSETS.JSON.EDIT', 'click', function (e, l) {
							if (l.source == 'local') {
								var ld = l._data;
								var d = [];
								var di = null;
								for (var i = 0; i < ld.length; i++) {
									di = {};
									A5.u.object.assign(di, ld[i], true, ['*key', '*renderIndex', '*value', '_']);
									if (ld[i]._.deleted) di._ = { deleted: true, note: 'This asset has been marked for deletion. You can cancel this by setting the deleted property to false.' };
									d.push(di);
								}
								tfc_TF.u.code.editors.json.edit(d, l);
							}
						}, l);
						$e.add('TF.ASSETS.JSON.EDIT', 'mouseenter', function () { tfc_TF.u.flyout.show(this, 'Edit JSON...', {}) });
						$e.add('TF.ASSETS.JSON.EDIT', 'mouseleave', function () { tfc_TF.u.flyout.hide() });


						p.setDisplay('header', true);
						l.refreshToolbar();

						l.sortMenu = new A5.Menu([
							{ html: 'Clear Sort', value: 'none', icon: 'svgIcon=#alpha-icon-x:icon' },
							'-',
							{ html: 'URL Ascending', value: 'url:1', icon: 'svgIcon=#alpha-icon-sortAlphaAsc:icon' },
							{ html: 'URL Descending', value: 'url:-1', icon: 'svgIcon=#alpha-icon-sortAlphaDesc:icon' },
							'-',
							{ html: 'Type Ascending', value: 'type:1', icon: 'svgIcon=#alpha-icon-sortAmountAsc:icon' },
							{ html: 'Type Descending', value: 'type:-1', icon: 'svgIcon=#alpha-icon-sortAmountDesc:icon' },
							'-',
							{ html: 'Version Ascending', value: 'version:1', icon: 'svgIcon=#alpha-icon-sortNumericAsc:icon' },
							{ html: 'Version Descending', value: 'version:-1', icon: 'svgIcon=#alpha-icon-sortNumericDesc:icon' }
						], {
							theme: tfc_TF.theme,
							style: 'white-space: nowrap;',
							onClick: function (i) {
								var v = i.value.split(':');
								var l = tfc_TF.ui.dev.assets.list._.l;
								if (v.length > 1) {
									var dir = v[1].toNumber();
									l.setOrder([[v[0], dir]]);
								} else l.setOrder(false);
							}
						});

						this._.l = l;
					}
				}
			},
			apps: {
				_: {},
				init: function (ux) {
					var p = ux.panelGet('TRANSFORM_CONNECTED_APPS');
					this._.p = p;
					tfc_TF.u.panels.lockable(p);
					var pId = p.getPanelId();
					var ele = $(pId);
					var fEle = document.createElement('div');
					fEle.id = 'TF.APPS.FORM';
					fEle.style.display = 'none';
					fEle.className = 'TFOverlayForm';
					fEle.innerHTML = '<div id="TF.APPS.FORM.CONTENT" class="TFForm"></div>';
					ele.appendChild(fEle);
					this._.f = new A5.FormBox('TF.APPS.FORM.CONTENT', tfc_TF.forms.connectedApps, {}, {
						theme: tfc_TF.theme
					});
				},
				list: {
					_: {},
					init: function (ux, l) {
						var html = [];
						html.push('<div style="display: flex; flex-direction: row;">');
						html.push('<div style="display: flex; flex-direction: row;">');
						html.push(A5.buttons.html('TF.APPS.SELECTALL', { theme: tfc_TF.theme + ':subtle', className: 'button buttonSubtle buttonIcon', html: A5.u.icon.html('svgIcon=#alpha-icon-circle:icon') + A5.u.icon.html('svgIcon=#alpha-icon-checkCircle:icon') + A5.u.icon.html('svgIcon=#alpha-icon-checkCircleBorder:icon') }));
						html.push(A5.buttons.html('TF.APPS.ADD', { theme: tfc_TF.theme, html: 'Add', icon: 'svgIcon=#alpha-icon-add:icon' }));
						html.push(A5.buttons.html('TF.APPS.EDIT', { theme: tfc_TF.theme, html: 'Edit', icon: 'svgIcon=#alpha-icon-edit:icon' }));
						html.push(A5.buttons.html('TF.APPS.REMOVE', { theme: tfc_TF.theme + ':deny', html: 'Delete', icon: 'svgIcon=#alpha-icon-x:icon' }));

						html.push('</div>');
						html.push('<div style="width: 4px;"></div>');
						html.push('<input id="TF.APPS.FILTER.EDIT" class="TFEdit edit" style="flex: 1 1 auto;" placeholder="Quick search..." />');
						html.push('<div style="width: 4px;"></div>');
						html.push(A5.buttons.html('TF.APPS.FILTER.CLEAR', { theme: tfc_TF.theme + ':subtle', className: 'button buttonSubtle buttonIcon', layout: 'icon', icon: 'svgIcon=#alpha-icon-x:icon' }, '', 'disabled'));
						html.push(A5.buttons.html('TF.APPS.SORT', { theme: tfc_TF.theme + ':subtle', className: 'button buttonSubtle buttonIcon', layout: 'icon', icon: 'svgIcon=#alpha-icon-sort:icon' }));
						html.push('</div>');

						var p = ux.panelGet('TRANSFORM_CONNECTED_APPS');
						var ele = $(p.getPanelId('header'));
						ele.className = 'TFPanelHeader';
						ele.innerHTML = html.join('');

						$e.add('TF.APPS.SELECTALL', 'click', function (e, l) {
							if (l.selection.length != 0) l.setValue(false);
							else l.setValue({ select: 'all' });
						}, l);
						$e.add('TF.APPS.ADD', 'click', function (e, l) {
							$('TF.APPS.FORM').style.display = '';
							var f = tfc_TF.ui.dev.apps._.f;
							f.editMode = 'create';
							f.populate({
								name: '',
								type: 'amazon-s3',
								def: {}
							});
						}, l);
						$e.add('TF.APPS.EDIT', 'click', function (e, l) {
							$('TF.APPS.FORM').style.display = '';
							var d = l.selectionData[0];
							var f = tfc_TF.ui.dev.apps._.f;
							f.editMode = 'edit';
							f.populate({
								name: d.name,
								rename: d.name,
								type: d.type,
								def: (d.def ? A5.u.object.clone(d.def) : {})
							});
						}, l);
						$e.add('TF.APPS.REMOVE', 'click', function (e, l) {
							tfc_TF.u.message.show('confirm-cancel', 'Delete Connection', 'Are you sure you want to delete the specified connection?', {
								action: function (a) {
									if (a == 'confirm') {
										tfc_TF.ui.dev.apps._.p.lock('Removing connection...');
										var n = [];
										var d = tfc_TF.ui.dev.apps.list._.l.selectionData;
										for (var i = 0; i < d.length; i++) {
											n.push(d[i].name);
										}
										tfc_TF.request('remove-connections', { names: n }).then(function (d) {
											tfc_TF.ui.dev.apps.list._.l.populate(d, false);
											tfc_TF.ui.dev.apps._.p.unlock();
										}).catch(function () {
											tfc_TF.ui.dev.apps._.p.unlock();
										});
									}
								}
							})
						}, l);
						$e.add('TF.APPS.FILTER.EDIT', 'keyup', function (e, l) { l.quickSearch(this.value); }, l);
						$e.add('TF.APPS.FILTER.CLEAR', 'click', function (e, l) { l.quickSearch(''); }, l);
						$e.add('TF.APPS.SORT', 'click', function (e, l) { l.sortMenu.show('dropdown', this); }, l);


						p.setDisplay('header', true);
						l.refreshToolbar();

						l.sortMenu = new A5.Menu([
							{ html: 'Clear Sort', value: 'none', icon: 'svgIcon=#alpha-icon-x:icon' },
							'-',
							{ html: 'Name Ascending', value: 'name:1', icon: 'svgIcon=#alpha-icon-sortAlphaAsc:icon' },
							{ html: 'Name Descending', value: 'name:-1', icon: 'svgIcon=#alpha-icon-sortAlphaDesc:icon' },
							'-',
							{ html: 'Application Ascending', value: 'application:1', icon: 'svgIcon=#alpha-icon-sortAlphaAsc:icon' },
							{ html: 'Application Descending', value: 'application:-1', icon: 'svgIcon=#alpha-icon-sortAlphaDesc:icon' },
						], {
							theme: tfc_TF.theme,
							style: 'white-space: nowrap;',
							onClick: function (i) {
								var v = i.value.split(':');
								var l = tfc_TF.ui.dev.apps.list._.l;
								if (v.length > 1) {
									var dir = v[1].toNumber();
									l.setOrder([[v[0], dir]]);
								} else l.setOrder(false);
							}
						});

						this._.l = l;
					}
				}
			},
			actions: {
				_: {},
				init: function (ux) {
					var p = ux.panelGet('TRANSFORM_ACTIONS');
					this._.p = p;
					tfc_TF.u.panels.lockable(p);

					p = ux.panelGet('TRANSFORM_ACTIONS_CODE');
					tfc_TF.u.panels.lockable(p);
					ele = $(p.getPanelId('body'));
					ele.innerHTML = '<div id="TF.DEV.ACTIONS"style="width: 100%; height: 100%; box-sizing: border-box;"></div>';
					tfc_TF.ui.dev.actions._.e = new tfc_TF.u.code.Editor('TF.DEV.ACTIONS', {
						lang: 'json',
						className: 'TFCodeEditor',
						margin: {
							show: true,
							className: 'TFCodeEditorMargin'

						},
						onStateChange: function (t, v) {
							if (t == 'dirty') {
								if (tfc_TF.ui.dev._.h) tfc_TF.ui.dev._.h.setTabDirty('onsubmit', v);
							}
						},
						onChange: function () {
							clearTimeout(this.pto);
							this.pto = setTimeout(function () {
								var json = $('TF.DEV.ACTIONS.CODE').value;
								var d = null;
								try {
									d = JSON.parse(json);
								} catch (err) {
									tfc_TF.ui.dev.actions.list._.l.jsonError(err);
									return false;
								}
								if (Array.isArray(d)) {
									tfc_TF.ui.dev.actions.list._.l.updateData(d);
								}
							}, 400);
						}
					});
					ele = $(p.getPanelId('header'));
					var html = ['<div style="display: flex; flex-direction: row; align-items: center;">'];
					html.push('<div style="flex: 1 1 auto; padding-left: 4px;">The onsubmit actions are defined using JSON. For help with syntax click <a class="link" href="https://documentation.alphasoftware.com/TransFormDocumentation/index?search=json%20syntax%20for%20onsubmit" target="_blank">here</a>.</div>');
					html.push(A5.buttons.html('TF.DEV.ACTIONS.REFORMAT', { theme: tfc_TF.theme, html: 'Reformat', icon: 'svgIcon=#alpha-icon-textAlignLeft:icon' }));
					html.push('</div>');
					ele.innerHTML = html.join('');
					$e.add('TF.DEV.ACTIONS.REFORMAT', 'click', function (e, c) {
						var json = tfc_TF.ui.dev.actions._.e.value;
						json = tfc_TF.u.code.lang.json.reformat(json);
						tfc_TF.ui.dev.actions._.e.setValue(json);
					}, ux);
					ele.className = 'TFPanelHeader';
					p.setDisplay('header', true);
				},
				list: {
					_: {},
					icons: {
						condition: A5.u.icon.html('svgIcon=#alpha-icon-questionCircle:icon{fill: #2f83a8}')
					},
					init: function (ux, l) {
						this._.l = l;
						p = ux.panelGet('TRANSFORM_ACTIONS_LIST');
						tfc_TF.u.panels.lockable(p);
						ele = $(p.getPanelId('header'));
						var html = [];
						html.push(A5.buttons.html('TF.DEV.ACTIONS.MOVE.ADD', { theme: tfc_TF.theme, html: 'Add Action', icon: 'svgIcon=#alpha-icon-add:icon' }));
						html.push(A5.buttons.html('TF.DEV.ACTIONS.MOVE.REMOVE', { theme: tfc_TF.theme + ':deny', className: 'button buttonDeny buttonIcon', layout: 'icon', icon: 'svgIcon=#alpha-icon-x:icon' }));
						html.push(A5.buttons.html('TF.DEV.ACTIONS.MOVE.UP', { theme: tfc_TF.theme + ':icon', layout: 'icon', icon: 'svgIcon=#alpha-icon-arrowUp:icon' }));
						html.push(A5.buttons.html('TF.DEV.ACTIONS.MOVE.DOWN', { theme: tfc_TF.theme + ':icon', layout: 'icon', icon: 'svgIcon=#alpha-icon-arrowDown:icon' }));

						ele.innerHTML = html.join('');
						$e.add('TF.DEV.ACTIONS.MOVE.ADD', 'click', function (e, c) {
							var m = tfc_TF.ui.dev.actions.list._.m;
							if (m._data.length == 0) {
								var a = c.actions;
								var items = [];
								for (var i = 0; i < a.length; i++) items.push({ html: a[i][0], value: i });
								m.populate(items);
							}
							m.show('dropdown', this);
						}, ux);
						$e.add('TF.DEV.ACTIONS.MOVE.REMOVE', 'click', function (e) {
							tfc_TF.u.message.show('confirm-cancel', 'Delete Action', 'Are you sure you would like to delete the selected action?', {
								action: function (a) {
									if (a == 'confirm') {
										var json = tfc_TF.ui.dev.actions._.e.value;
										var d = JSON.parse(json);
										var l = tfc_TF.ui.dev.actions.list._.l;
										var indx = l.selection[0];
										d.splice(indx, 1);
										json = JSON.stringify(d, '', '\t');
										tfc_TF.ui.dev.actions._.e.setValue(json);
										tfc_TF.ui.dev.actions._.e.setDirty(true);
										l.setValue(false);
									}
								}
							});
						});
						$e.add('TF.DEV.ACTIONS.MOVE.UP', 'click', function (e) {
							var json = tfc_TF.ui.dev.actions._.e.value;
							var d = JSON.parse(json);
							var l = tfc_TF.ui.dev.actions.list._.l;
							var indx = l.selection[0];
							A5.u.array.move(d, indx, 'up');
							json = JSON.stringify(d, '', '\t');
							tfc_TF.ui.dev.actions._.e.setValue(json);
							tfc_TF.ui.dev.actions._.e.setDirty(true);
							l.setValue(indx - 1);
						});
						$e.add('TF.DEV.ACTIONS.MOVE.DOWN', 'click', function (e) {
							var json = tfc_TF.ui.dev.actions._.e.value;
							var d = JSON.parse(json);
							var l = tfc_TF.ui.dev.actions.list._.l;
							var indx = l.selection[0];
							A5.u.array.move(d, indx, 'down');
							json = JSON.stringify(d, '', '\t');
							tfc_TF.ui.dev.actions._.e.setValue(json);
							tfc_TF.ui.dev.actions._.e.setDirty(true);
							l.setValue(indx + 1);
						});
						ele.className = 'TFPanelHeader';
						p.setDisplay('header', true);
						this._.m = new A5.Menu([], {
							theme: tfc_TF.theme,
							style: 'white-space: nowrap;',
							iconColumn: { show: false },
							onClick: function (i) {
								var nd = A5.u.object.clone(ux.actions[i.value][2]);
								var l = tfc_TF.ui.dev.actions.list._.l;
								var json = tfc_TF.ui.dev.actions._.e.value;
								var d = JSON.parse(json);
								if (l.selection.length == 1) d.splice(l.selection[0], 0, nd);
								else d.push(nd);
								json = JSON.stringify(d, '', '\t');
								tfc_TF.ui.dev.actions._.e.setValue(json);
								tfc_TF.ui.dev.actions._.e.setDirty(true);
							}
						})
					},
					html: function (d) {
						var html = [];
						html.push('<div>');
						html.push(d.actionName);
						html.push('</div>');

						if (Array.isArray(d.formIds)) {
							html.push('<div>');
							for (var i = 0; i < d.formIds.length; i++) {
								html.push('<div class="TFListDataBadge">' + d.formIds[i] + '</div>');
							}
							html.push('</div>');
						}

						html.push('<div style="position: absolute; top: 3px; right: 5px; display: flex; flex-direction row; align-items: center; gap: 4px; font: 12px monospace;" onmouseenter="TF.u.flyout.show(this,\'' + (d.condition == 'none' ? 'Action is not conditioned' : 'Action has conditional logic') + '\',{direction: \'horizontal\'});" onmouseleave="TF.u.flyout.hide();">');
						if (d.condition == 'none') {
							html.push('<div style="opacity: .15">' + this.icons.condition + '</div>');
						} else {
							html.push('<div>' + d.condition.toUpperCase() + '</div>');
							html.push(this.icons.condition);
						}
						html.push('</div>');
						var ik = Object.keys(d.info);
						var iki = null;
						if (ik.length > 0) {
							html.push('<table>');
							for (var i = 0; i < ik.length; i++) {
								iki = ik[i];
								html.push('<tr>');
								html.push('<td class="TFFormItemLabel" style="text-align: right; white-space: nowrap;">' + iki + '</td>');
								html.push('<td>');
								if (Array.isArray(d.info[iki])) html.push(d.info[iki].join(', '))
								else html.push(d.info[iki]);
								html.push('</td>');
								html.push('</tr>');
							}
							html.push('</table>');
						}
						return html.join('');
					}
				},
				log: {
					_: {},
					init: function (ux, l) {
						var p = ux.panelGet('TRANSFORM_ACTIONS_LOG');
						tfc_TF.u.panels.lockable(p);
						ele = $(p.getPanelId('header'));
						var html = [];
						html.push('<div style="display: flex; flex-direction: row; align-items: center; gap: 4px;">');
						html.push(A5.buttons.html('TF.ACTIONS.LOG.REFRESH', { theme: tfc_TF.theme, icon: 'svgIcon=#alpha-icon-refresh:icon', html: 'Refresh' }));
						html.push(A5.buttons.html('TF.ACTIONS.LOG.EXPORT', { theme: tfc_TF.theme, icon: 'svgIcon=#alpha-icon-export:icon', html: 'Export' }));
						html.push('<div class="TFFormItemLabel" style="padding-left: 4px;">Group by</div>');
						html.push('<div id="TF.ACTIONS.LOG.GROUP"></div>');
						html.push('<input id="TF.ACTIONS.LOG.FILTER.EDIT" class="TFEdit edit" style="flex: 1 1 auto;" placeholder="Quick search..." />');
						html.push(A5.buttons.html('TF.ACTIONS.LOG.FILTER.CLEAR', { theme: tfc_TF.theme + ':subtle', className: 'button buttonSubtle buttonIcon', layout: 'icon', icon: 'svgIcon=#alpha-icon-x:icon' }, '', 'disabled'));
						html.push(A5.buttons.html('TF.ACTIONS.LOG.GROUP.TOGGLE', { theme: tfc_TF.theme + ':subtle', className: 'button buttonSubtle buttonIcon', layout: 'icon', icon: 'svgIcon=#alpha-icon-chevronDown:icon' }, 'a5-state="expanded"', 'disabled'));
						html.push('</div>');
						ele.innerHTML = html.join('');
						$e.add('TF.ACTIONS.LOG.REFRESH', 'click', function (e, c) {
							c.getActionsLogData();
						}, ux);
						$e.add('TF.ACTIONS.LOG.EXPORT', 'click', function (e, c) {
							var obj = {
								data: 'listData',
								exportType: 'excel',
								action: 'download',
								clientsidefilename: 'log',
								maxRecords: -1,
								decryptfields: false,
								onlyexportvisibilecolumns: false
							};
							c.exportListData('log', obj);
						}, ux);

						$e.add('TF.ACTIONS.LOG.GROUP.TOGGLE', 'click', function (e) {
							var l = tfc_TF.ui.dev.actions.log._.l;
							if (this.getAttribute('a5-state') == 'collapsed') {
								l.setGroupCollapse(['all'], false);
								$('TF.ACTIONS.LOG.GROUP.TOGGLE.ICON').style.transform = '';
								this.setAttribute('a5-state', 'expanded');
							} else {
								l.setGroupCollapse(['all'], true);
								$('TF.ACTIONS.LOG.GROUP.TOGGLE.ICON').style.transform = 'rotate(-90deg)';
								this.setAttribute('a5-state', 'collapsed');
							}
						});
						$e.add('TF.ACTIONS.LOG.FILTER.EDIT', 'keyup', function (e, l) { l.quickSearch(this.value); }, l);
						$e.add('TF.ACTIONS.LOG.FILTER.CLEAR', 'click', function (e, l) { l.quickSearch(''); }, l);
						this._.gb = new A5.ButtonList('TF.ACTIONS.LOG.GROUP', [
							{ html: 'None', value: 'none' },
							{ html: 'Action', value: 'action' },
							{ html: 'Errors', value: 'errors' },
							{ html: 'Form Type', value: 'form' },
							{ html: 'Form Instance', value: 'instance' },
							{ html: 'Date', value: 'date' },
						], {
							theme: tfc_TF.theme,
							onClick: function () {
								var v = this.value[0];
								var l = tfc_TF.ui.dev.actions.log._.l;
								var gb = false;
								var bEle = $('TF.ACTIONS.LOG.GROUP.TOGGLE');

								if (v == 'action') gb = { order: { actionName: 1 }, group: function (d) { return d.actionName; }, header: { html: function (g, d) { return '<div style="display: flex; flex-direction: row; align-items: center; padding-right: 1px;"><div style="flex: 1 1 auto;"><i>Action:</i> ' + g + '</div><div>{indicator}</div></div>'; } } };
								else if (v == 'errors') gb = { order: { flagError: -1 }, group: function (d) { return '' + d.flagError; }, header: { html: function (g, d) { return '<div style="display: flex; flex-direction: row; align-items: center; padding-right: 1px;"><div style="flex: 1 1 auto;">' + (g == 'true' ? 'Errors' : 'Successful') + '</div><div>{indicator}</div></div>'; } } };
								else if (v == 'form') gb = { order: { formId: 1 }, group: function (d) { return d.formId; }, header: { html: function (g, d) { return '<div style="display: flex; flex-direction: row; align-items: center; padding-right: 1px;"><div style="flex: 1 1 auto;"><i>Form Type:</i> ' + g + '</div><div>{indicator}</div></div>'; } } };
								else if (v == 'instance') gb = { order: { formInstanceId: 1 }, group: function (d) { return d.formInstanceId + ' of ' + d.formId; }, header: { html: function (g, d) { return '<div style="display: flex; flex-direction: row; align-items: center; padding-right: 1px;"><div style="flex: 1 1 auto;"><i>Form Instance:</i> ' + g + '</div><div>{indicator}</div></div>'; } } };
								else if (v == 'date') {
									gb = {
										order: { dateTime: -1 },
										group: function (d) {
											var dt = d.dateTime;
											dt = dt.substr(0, 10);
											return dt;
										},
										header: { html: function (g, d) { return '<div style="display: flex; flex-direction: row; align-items: center; padding-right: 1px;"><div style="flex: 1 1 auto;"><i>On:</i> ' + g + '</div><div>{indicator}</div></div>'; } }
									};
								}
								if (gb) {
									l.layouts['Default'].group.auto = null;
									gb.className = 'TFListGroup';
									l.group.auto = [gb];
									bEle.disabled = false;
									A5.u.element.cls(bEle, '-=buttonDisabled');
								} else {
									l.group.auto = false;
									bEle.disabled = true;
									A5.u.element.cls(bEle, '+=buttonDisabled');
								}

								$('TF.ACTIONS.LOG.GROUP.TOGGLE.ICON').style.transform = '';
								bEle.setAttribute('a5-state', 'expanded');
								l.groupBy = v;
								l.refresh();
							}
						});
						this._.gb.setValue('none');
						ele.className = 'TFPanelHeader';
						p.setDisplay('header', true);

						l.group.collapse.allow = 'title';
						l.group.collapse.auto = false;
						l.group.collapse.indicator.collapse = A5.u.icon.html('svgIcon=#alpha-icon-chevronDown:icon');
						l.group.collapse.indicator.expand = A5.u.icon.html('svgIcon=#alpha-icon-chevronRight:icon');
						this._.l = l;
					}
				}
			}
		},

		// home page UI
		home: {
			_: {},
			init: function (vb, ux) {
				var p = ux.panelGet('TRANSFORM_HOME');
				tfc_TF.u.panels.lockable(p);
				tfc_TF.ui.home._.vb = vb;
				vb.getStructure();
			},
			html: function (vb, uxId) {
				var html = [];
				var sl = tfc_TF.state.login;
				var bEle = $('TF.HOME.BLOCK');
				if (sl.state != 'logged-in') {
					bEle.setAttribute('login-state', (tfc_TF.state.login.state == 'logged-out' ? 'Login required...' : 'Login confirmation required...'));
					bEle.style.display = '';
				} else bEle.style.display = 'none';

				var fd = vb.data.forms.types;
				var dd = vb.data.dashboards.types;
				var allow = tfc_TF.state.login.account.member.ui.allow;
				var di = null;
				var idp = vb.contId + '.';
				// icons
				var iconForm = A5.u.icon.html('svgIcon=#alpha-icon-doc:icon {width: 52px; height: 52px;}');
				var iconDashboard = A5.u.icon.html('svgIcon=#alpha-icon-trendingUp:icon {width: 52px; height: 52px;}');
				var iconFill = A5.u.icon.html('svgIcon=#alpha-icon-docEdit:icon');
				var iconData = A5.u.icon.html('svgIcon=#alpha-icon-magGlass:icon');
				var iconFormStatus = A5.u.icon.html('svgIcon=#alpha-icon-infoCircle:icon iconButton');
				var iconFormDesign = A5.u.icon.html('svgIcon=#alpha-icon-screwdriverAndWrench:icon iconButton');
				var iconX = A5.u.icon.html('svgIcon=#alpha-icon-xCircle:icon iconButton');
				var iconGoto = A5.u.icon.html('svgIcon=#alpha-icon-chevronDblRight:icon');
				var iconCollapse = A5.u.icon.html('svgIcon=#alpha-icon-chevronDown:icon');
				var iconAdd = A5.u.icon.html('svgIcon=#alpha-icon-add:icon {width: 52px; height: 52px;}');

				// flyout events
				var getUX = uxId + '_DlgObj.getControl(\'' + vb.variableName + '\')';
				var foEvnts = 'onmouseenter="' + getUX + '.showFlyout(this);" onmouseleave="' + getUX + '.hideFlyout();"';


				// filter
				var filter = function () { return true; };
				if (!vb.filter) {
					vb.filter = { text: '', state: 0 };
					var iconFilter = A5.u.icon.html('svgIcon=#alpha-icon-x:icon iconButton', 'id="TF.HOME.FILTER.QSICON" a5-item="clearQuickSearch" flyout-type="tip:Clear quick search..." ' + foEvnts);
					var iconCalendar = A5.u.icon.html('svgIcon=#alpha-icon-calendar:icon iconButton');

					html.push('<div style="display: flex; align-items: center;">');
					html.push('<div style="flex: 1 1 auto;">');
					html.push('<input id="TF.HOME.FILTER.QS" placeholder="Quick search..." class="TFEdit edit" onkeyup="var vb = ' + getUX + '.quickSearch(this.value);" /> ');
					html.push(iconFilter);
					html.push('</div>');
					html.push('<div>');
					html.push(A5.buttons.html('TF.HOME.REFRESH', { theme: tfc_TF.theme + ':subtle', className: 'button buttonSubtle buttonIcon', icon: 'svgIcon=#alpha-icon-refresh:icon' }, 'a5-item="refresh" flyout-type="tip:Refresh account data..." ' + foEvnts));
					html.push('</div>');
					html.push('</div>');
					//html.push(iconCalendar);
					$('TF.HOME.FILTER').innerHTML = html.join('');
					html = [];

					$e.add('TF.HOME.ALLTILES', 'scroll', function (e, c) {
						var cs = A5.u.element.getScroll(this);
						var ps = c._ps || 0;
						if (ps == 0 && cs.top != 0) {
							A5.u.element.cls(this.parentNode, '+=TFTilesBodyScrolled');
						} else if (cs.top == 0 && ps != 0) {
							A5.u.element.cls(this.parentNode, '-=TFTilesBodyScrolled');
						}
						c._ps = cs.top;
					}, vb);
				} else {
					if (vb.filter.text != '') {
						filter = function (t, i) {
							if (i.name.toLowerCase().indexOf(vb.filter.text) == -1) return false;
							return true;
						}.bind(this);
						//if(vb.filter.state != 1) A5.u.icon.update('TF.HOME.FILTER.QSICON','svgIcon=#alpha-icon-filterOff:icon iconButton');
						vb.filter.state = 1;
					} else {
						//if(vb.filter.state != -1) A5.u.icon.update('TF.HOME.FILTER.QSICON','svgIcon=#alpha-icon-filter:icon iconButton');
						vb.filter.state = -1;
					}
				}

				// header
				var mrat = '<span class="TFTilesFormInstCallout">form submit</span>';
				var mra = 0;
				var dt = null;
				for (var i = 0; i < fd.length; i++) {
					dt = new Date(fd[i].times.instance);
					if (dt > mra) mra = dt;
				}

				html.push('<div class="TFTilesMainHeaderWelcome">Hello, ' + sl.user.name + '. Welcome to TransForm Central.</div>');
				html.push('<div>');
				html.push('You have <span class="TFTilesFormCallout">' + (fd.length == 0 ? 'No' : fd.length) + ' Form Type' + (fd.length != 1 ? 's' : '') + '</span>');
				if (allow.dashboard) html.push(' and <span class="TFTilesDashboardCallout">' + (dd.length == 0 ? 'No' : dd.length) + ' Dashboard' + (dd.length != 1 ? 's' : '') + '</span>');
				html.push('.');
				if (Number(mra) > 0) html.push(' Last activity was a ' + mrat + ' on <span style="font-weight: bold;">' + (mra.same('year', new Date()) ? mra.toFormat('Month x') : mra.toFormat('Month x yyyy')) + '</span> at <span style="font-weight: bold;">' + mra.toFormat('0h:0m') + '</span>.');

				// back to old
				html.push('<div style="position: absolute; top: 10px; right: 10px; font-size: 12px;">');
				html.push('<a href="#" onclick="localStorage.removeItem(\'A5.transform\'); if(event.ctrlKey || event.shiftKey) window.open(\'transFormCentralNew_FAST.a5w\'); else location.href = \'transFormCentralNew_FAST.a5w\';" oncontextmenu="$e.stopEvent(event);" class="link" flyout-type="tip:Revert to old TransForm Central..." ' + foEvnts + '>Revert</a>');
				html.push('</div>');
				html.push('</div>');

				$('TF.HOME.HEADING').innerHTML = html.join('');
				html = [];

				// start form tiles
				var canFill = tfc_TF.state.login.account.member.ui.allow.filler.web;
				html.push('<div class="TFTileGroup"><div id="' + idp + 'FORMS" a5-item="groupToggle:forms" class="TFTileGroupTitle">Forms<div>' + iconCollapse + '</div></div><div class="TFTileGroupTiles"' + (tfc_TF.state.ui.home.forms.collapsed ? ' style="display: none;"' : '') + '><div>');
				for (var i = 0; i < fd.length; i++) {
					di = fd[i];
					if (filter('form', di)) {
						html.push('<div id="' + idp + 'FORM.' + i + '" class="TFTileFlip">');
						html.push('<div class="TFTile TFTileForm TFTileFront">');
						html.push('<div class="TFTileMain">');
						html.push('<div><div class="TFTileIcon">' + (di.icon != '' ? di.icon : iconForm) + '</div><div style="white-space: normal; overflow: hidden; text-overflow: ellipsis; padding: 4px 28px;"><span id="' + idp + 'FORM.' + i + '.TITLE" flyout-type="form:name" flyout-tile="' + i + '" ' + foEvnts + '>' + di.name + '</span></div></div>');
						html.push('<div class="TFTileToolbarTR">');
						html.push('<div id="' + idp + 'FORM.' + i + '.STATUS" flyout-type="form:status" flyout-tile="' + i + '" ' + foEvnts + ' a5-item="formStatus:' + i + '">' + iconFormStatus + '</div>');
						html.push('</div>');
						html.push('<div id="' + idp + 'FORM.' + i + '.DESIGN" class="TFTileToolbarBR" flyout-type="form:design" flyout-tile="' + i + '" ' + foEvnts + '>');
						if (allow.design) html.push('<div id="' + idp + 'FORMS.' + i + '.DESIGN" a5-item="formDesign:' + di.id + '">' + iconFormDesign + '</div>');
						html.push('</div>');
						if (di.color) html.push('<div class="TFTileFormColor"><div style="background: ' + di.color + ';"></div></div>');
						html.push('</div>');

						if (di.allow.manage) html.push('<div id="' + idp + 'FORMS.' + i + '.VIEW" a5-item="formView:' + di.id + '" class="TFTileButton TFTileFormData">' + iconData + '<div class="TFTileButtonText">View Instances</div><div id="' + idp + 'FORMS.' + i + '.COUNT" class="TFTileBadge">' + (di.count > 99 ? '99+' : di.count) + '</div></div>');
						if (canFill && di.allow.fill) html.push('<div id="' + idp + 'FORMS.' + i + '.FILL" a5-item="formFill:' + di.id + '" class="TFTileButton TFTileFormCreate">' + iconFill + '<div class="TFTileButtonText">Fill New Instance</div></div>');
						html.push('</div>');
						html.push('<div class="TFTileBack">');
						html.push('<div class="TFTileFormBack">');
						html.push('<div>');
						html.push('<div class="TFTileToolbarTR">');
						html.push('<div id="' + idp + 'FORM.' + i + '.STATUS" a5-item="formStatus:' + i + '">' + iconX + '</div>');
						html.push('</div>');
						html.push('<div a5-item="formStatus:' + i + '" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; padding: 4px 28px; text-align: center;"><span id="' + idp + 'FORM.' + i + '.TITLE.BACK" flyout-type="form:name" flyout-tile="' + i + '" ' + foEvnts + '>' + di.name + '</span></div>');
						html.push('</div>');
						html.push('<div id="' + idp + 'FORM.' + i + '.STATUS.LIST" style="display: flex; flex-direction: column; min-height: 100%; flex: 1 1 auto;"></div>');
						html.push('</div>');
						html.push('</div>');
						html.push('</div>');
					}
				}
				if (allow.design) {
					html.push('<div id="' + idp + 'FORMS.CREATE" a5-item="formCreate" class="TFTileAdd TFTileForm"><div>' + iconAdd + '</div><div style="position: absolute; bottom: 18px; left: 0px; right: 0px;">Add<br/>Form<br/>Type</div></div>');
				}

				html.push('</div></div></div>');
				// end form tiles

				// start dashboard tiles
				if (A5.u.typeOf(dd) == 'array' && allow.dashboard) {
					html.push('<div class="TFTileGroup"><div id="' + idp + 'DASHBORADS" a5-item="groupToggle:dashboards" class="TFTileGroupTitle">Dashboards<div>' + iconCollapse + '</div></div><div class="TFTileGroupTiles"' + (tfc_TF.state.ui.home.dashboards.collapsed ? ' style="display: none;"' : '') + '><div>');
					for (var i = 0; i < dd.length; i++) {
						di = dd[i];
						if (filter('dashboard', di)) {
							html.push('<div class="TFTile TFTileDash">');
							html.push('<div class="TFTileMain"><div><div class="TFTileIcon">' + iconDashboard + '</div><div style="white-space: normal; overflow: hidden; text-overflow: ellipsis; padding: 4px 20px;"><span id="' + idp + 'DASH.' + i + '.TITLE" flyout-type="dashboard:name" flyout-tile="' + i + '" ' + foEvnts + '>' + di.name + '</span></div></div></div>');
							html.push('<div id="' + idp + 'DASHBOARDS.' + i + '.VIEW" a5-item="dashboardView:' + di.id + '" class="TFTileButton TFTileDashGoto">' + iconGoto + '<div class="TFTileButtonText">Goto Dashboard</div></div>');
							html.push('<div id="' + idp + 'DASHBOARDS.' + i + '.MANAGE" a5-item="dashboardManage:' + di.id + '" class="TFTileButton TFTileFormData">' + iconData + '<div class="TFTileButtonText">Linked Data</div></div>');
							html.push('</div>');
						}
					}
					//html.push('<div id="'+idp+'DASHBORADS.CREATE" a5-item="dashboardCreate" class="TFTileAdd TFTileDash"><div>'+iconAdd+'</div><div style="position: absolute; bottom: 18px; left: 0px; right: 0px;">Add<br/>Dashboard</div></div>');
					html.push('</div></div></div>');
				}
				// end dashboard tiles

				// output HTML
				html = html.join('');
				return html;
			},
			forms: {
				info: {
					html: function (d) {
						var info = d.info;
						var html = [];
						html.push('<div style="flex: 1 1 auto;">');
						if (info.errors.count > 0) {
							html.push('<div class="TFTileBadge TFTileBadgeErrors">' + info.errors.count + '</div> Errors<br/>');
							if (info.errors.missingRequired > 0) html.push('<div class="TFTileBadge TFTileBadgeErrors">' + info.errors.missingRequired + '</div> Missing required values<br/>');
						}
						var sl = tfc_TF.state.login.account.permissions.statusesList;
						var sli = null;
						for (var i = 0; i < sl.length; i++) {
							sli = sl[i];
							if (typeof info.status[sli.statusID] == 'number' && info.status[sli.statusID] > 0) {
								html.push('<div class="TFTileBadge TFTileBadgeStatus">' + (info.status[sli.statusID] > 99 ? '99+' : info.status[sli.statusID]) + '</div> ' + sli.display + '<br/>');
							}
						}
						if (html.length == 0) html.push('<div>No statuses</div>');
						html.push('</div>');
						html.push('<div class="TFTileActivity"><div>Last activity:</div><div>' + info.times.instance + '</div></div>');
						return html.join('');
					}
				}
			}
		}
	}
}




;// ./src/style.ts
/* harmony default export */ const style = (`
    body {
        --json-punctuation:rgb(196, 26, 97);
        --json-value:rgb(18, 119, 214);
    }

    .TFCodeJSONBrackets, .TFCodeJSONSep, .TFCodeJSONBool {
        color: var(--json-punctuation);
    }
    
    .TFCodeJSONStr, .TFCodeJSONNum {
        color: var(--json-value);
    }
`);

;// ./src/index.ts




window.initialize = initialize;
window.initTFSelector = initTFSelector;
window.TF = tfc_TF;
window.addEventListener('load', () => {
    let styleNode = document.createElement('style');
    styleNode.innerHTML = style;
    document.body.appendChild(styleNode);
});

/******/ })()
;