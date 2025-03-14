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
/* unused harmony exports EditTypeTypeSchema, EndpointTypeSchema, ListFilterTypeSchema, ListBtnTypeSchema, NestedSubfieldTypeSchema, FlattenedSubfieldTypeSchema, SearchOptionsTypeSchema, ServerSortTypeSchema, PrefetchedDataTypeSchema */
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
    headers: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Record(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String(), _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String())),
    endpoint: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String(),
    body: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Any()),
    // () => any
    callback: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String()),
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
const ListBtnTypeSchema = _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Recursive(Self => _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({
    columnTitle: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String(),
    title: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String()),
    icon: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String()),
    onClick: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Union([
        _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({ function: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String() }),
        _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({ action: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String() }),
    ]),
    children: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Array(Self)),
}));
const NestedSubfieldTypeSchema = _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Recursive(Self => _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Intersect([
    _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({
        defaultValue: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String()),
    }),
    _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Union([
        _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({ keys: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Record(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String(), Self) }),
        _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({ arrayItem: Self }),
        _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({
            editType: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Union([
                _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('string'),
                _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('number'),
                _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('boolean')
            ]),
            displayName: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String()),
        })
    ])
]));
const FlattenedSubfieldTypeSchema = _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Recursive(Self => _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Intersect([
    _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({
        defaultValue: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String()),
    }),
    _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Union([
        _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({ keys: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Record(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String(), Self) }),
        _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({ arrayItem: Self }),
        _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({
            editType: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Union([
                _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('string'),
                _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('number'),
                _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('boolean')
            ]),
            flattenedColumnName: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String(),
            displayName: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String()),
        })
    ])
]));
const MappingTypeSchema = _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({
    columnName: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String(),
    displayName: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String()),
    inList: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Boolean()),
    inDetailView: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Boolean()),
    editType: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(EditTypeTypeSchema),
    readOnly: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Boolean()),
    serverDateFormat: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String()),
    subMappings: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Union([NestedSubfieldTypeSchema, FlattenedSubfieldTypeSchema])),
    template: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String()),
    width: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String()),
    dropdownConfig: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Union([
        _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({ choices: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Array(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String()) }),
        _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({ fromColumn: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String() })
    ]))
});
const SearchOptionsTypeSchema = _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({
    advancedSearch: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Boolean()),
    serverSearch: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Boolean()),
    onlyInclude: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Array(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String())),
    onlyExclude: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Array(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String())),
});
const SchemaTypeSchema = _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Record(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String(), _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Union([
    _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({ alphaType: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String() }),
    _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal("nestedObject"),
    _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal("nestedArray")
]));
const ServerSortTypeSchema = _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Array(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({
    columnName: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String(),
    order: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Union([_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('asc'), _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('desc')])
}));
const ConfigTypeSchema = _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({
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
            endpoints: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Record(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String(), EndpointTypeSchema),
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

;// ./src/jsonForms.ts


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
        case "dropdown": return new DropdownForm(options.options, parent);
        case "multi": return new MultiForm(options.options, dynForm, parent);
        case "const": return new ConstForm(options.options, parent);
        case "button": return new ButtonForm(options.options, parent);
    }
}
class SimpleForm {
    constructor(options, dynForm, parent) {
        this.options = options;
        this.dynForm = dynForm;
        this.changed = false;
        this.id = formBuilder_uuidv4();
        this.parent = parent;
    }
    getOptions() {
        return { type: 'simple', options: this.options };
    }
    getParent() {
        return this.parent;
    }
    serialize(jsonFormData) {
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
            case "datetime":
            case "string":
                jsonVal = val;
                break;
            case "number":
                jsonVal = parseFloat(val);
                break;
            case "boolean":
                jsonVal = Boolean(val);
                break;
        }
        return {
            changed: this.changed,
            raw: jsonVal
        };
    }
    buildJsonForm() {
        var _a;
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
        let control = {
            onChange: () => {
                this.changed = true;
                this.dynForm.setDirty(true);
                this.dynForm.refresh();
            }
        };
        if (editType == 'picker') {
            control['picker'] = {
                type: 'date',
                format: (_a = this.options.dateFmt) !== null && _a !== void 0 ? _a : 'MM/dd/yyyy'
            };
            control['behavior'] = {
                show: {
                    mode: ""
                }
            };
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
                style: "; flex: 1 1;",
                className: ""
            },
            readonly: () => { var _a; return (_a = this.options.readonly) !== null && _a !== void 0 ? _a : false; },
        };
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
            d[this.id] = data.toFormat((_a = this.options.dateFmt) !== null && _a !== void 0 ? _a : DEFAULT_DATETIME_FMT);
            return d;
        }
        if (this.options.type == 'datetime' && typeof data == 'string') {
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
class ObjectForm {
    constructor(options, dynForm, parent) {
        this.data = {};
        this.dynForm = dynForm;
        this.options = options;
        this.entries = {};
        this.changed = false;
        this.parent = parent;
        this.id = formBuilder_uuidv4();
    }
    getOptions() {
        return { type: 'object', options: this.options };
    }
    serialize(jsonFormData) {
        let result = {};
        for (const key in this.entries) {
            let entry = this.entries[key];
            let serialized = entry.form.serialize(jsonFormData);
            if (!entry.enabled)
                continue;
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
        var _a;
        let children = [];
        let i = 0;
        for (const key in this.entries) {
            i += 1;
            let entry = this.entries[key];
            let formOps = entry.form.getOptions();
            let label;
            if (typeof formOps.options.label == 'function') {
                label = formOps.options.label(entry.form, this.data[key], key);
            }
            else {
                label = formOps.options.label;
            }
            switch (formOps.type) {
                case "simple":
                case "dropdown":
                case "multi":
                case "button":
                case "recursive": {
                    let enableFnId = this.id + '_enable_' + i;
                    let labelItem = {
                        type: 'html',
                        control: {
                            html: `<p class="dynamic-form-simple-label">
                                ${label}
                            </p>`
                        },
                        container: {
                            className: '',
                            style: `;
                                font-variant: all-petite-caps;
                                font-weight: bold;
                                color: #434343;
                            `
                        },
                        layout: '{content}',
                    };
                    this.dynForm.obj._functions.dynamicForm[enableFnId] = () => {
                        entry.enabled = false;
                    };
                    let isBoolForm = formOps.type == 'simple' && formOps.options.type == 'boolean';
                    let isOptional = key in ((_a = this.options.optionalKeys) !== null && _a !== void 0 ? _a : {});
                    let isDynamic = !isOptional && !(key in this.options.requiredKeys);
                    // Key is optional, need to display checkbox
                    if (isOptional && !isBoolForm) {
                        let labelOnly = labelItem;
                        let check = {
                            type: 'group',
                            items: [
                                {
                                    type: 'checkbox',
                                    data: {
                                        from: formBuilder_uuidv4(),
                                        blank: entry.enabled
                                    },
                                    control: {
                                        onChange: (e) => {
                                            entry.enabled = !entry.enabled;
                                            this.dynForm.refresh();
                                        }
                                    },
                                    container: {
                                        style: "",
                                        className: ""
                                    }
                                }
                            ],
                            container: {
                                style: 'display: flex; align-items: center;'
                            }
                        };
                        labelItem = {
                            type: 'group',
                            items: [check, labelOnly],
                            container: {
                                style: `;
                                    display: flex;
                                    justify-items: center;
                                    gap: 0.5rem;
                                `
                            }
                        };
                    }
                    // Key is dynamic, need to allow for deletion
                    else if (isDynamic) {
                        let delIcon = {
                            type: 'button',
                            control: {
                                html: A5.u.icon.html('svgIcon=#alpha-icon-trash:icon,24'),
                                onClick: () => {
                                    delete this.entries[key];
                                    delete this.data[key];
                                    this.dynForm.refresh();
                                }
                            }
                        };
                        labelItem = {
                            type: 'group',
                            items: [labelItem, delIcon],
                            container: {
                                style: `;
                                    display: flex;
                                    flex-direction: row;
                                    align-items: center;
                                    gap: 1rem;
                                `
                            }
                        };
                    }
                    let group = {
                        type: 'group',
                        items: [labelItem],
                        container: {
                            style: 'display: flex; flex-direction: column;'
                        }
                    };
                    if (entry.enabled) {
                        group.items.push(entry.form.buildJsonForm());
                    }
                    children.push(group);
                    break;
                }
                case "object":
                case "array": {
                    let fnId = this.id + '_' + i.toString();
                    this.dynForm.obj._functions.dynamicForm[fnId] = () => {
                        this.dynForm.launchNewTab(label, entry.form);
                    };
                    let btn = {
                        type: 'html',
                        control: {
                            html: `
                                <div class="dynamic-form-open-nested" style = "
                                    display: flex;
                                    flex-direction: row;
                                    align-items: center;
                                    gap: 0.5rem;
                                    cursor: pointer;
                                " onclick="${this.dynForm.obj.dialogId}_DlgObj._functions.dynamicForm['${fnId}']()">
                                    <p style = "font-variant: all-petite-caps; font-weight: bold;"> Edit ${label} </p>
                                    ${A5.u.icon.html('svgIcon=#alpha-icon-chevronRight:icon,24')} 
                                </div>
                            `,
                        }
                    };
                    children.push(btn);
                    break;
                }
                case "const":
                // Nothing
            }
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
                            let newForm = constructForm(newKey.definition, this, this.dynForm);
                            Object.assign(this.dynForm.formBox.data, newForm.getPopulateData(newKey.defaultValue));
                            this.data[name] = newKey.defaultValue;
                            this.entries[name] = {
                                enabled: true,
                                form: newForm
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
                    {
                        type: 'edit',
                        id: newKeyNameId,
                        data: {
                            from: newKeyNameId,
                            ensure: true
                        },
                    },
                ]
            };
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
            let newEntry = constructForm(this.options.requiredKeys[key], this, this.dynForm);
            this.entries[key] = {
                enabled: true,
                form: newEntry
            };
            Object.assign(populateData, newEntry.getPopulateData(data[key]));
        }
        for (const key in this.options.optionalKeys) {
            viewedKeys.add(key);
            let opt = this.options.optionalKeys[key];
            opt.definition.options.label = key;
            let d = (key in data) ? data[key] : opt.defaultValue;
            let newEntry = constructForm(this.options.optionalKeys[key].definition, this, this.dynForm);
            this.entries[key] = {
                enabled: key in data,
                form: newEntry
            };
            Object.assign(populateData, newEntry.getPopulateData(d));
        }
        for (const key in data) {
            if (viewedKeys.has(key))
                continue;
            if (this.options.newKeyTemplate === undefined) {
                if (this.options.skipUnknownKeys === true)
                    continue;
                throw new PopulateError("New key template is undefined.");
            }
            let newEntry = constructForm(this.options.newKeyTemplate.definition, this, this.dynForm);
            this.entries[key] = {
                enabled: true,
                form: newEntry
            };
            Object.assign(populateData, newEntry.getPopulateData(data[key]));
        }
        return populateData;
    }
}
class RecursiveForm {
    constructor(options, dynForm, parent) {
        this.options = options;
        this.dynForm = dynForm;
        this.parent = parent;
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
    }
    getOptions() {
        return { type: 'array', options: this.options };
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
        let arrayEntries = this.entries.map((f, i) => {
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
                            let newForm = constructForm(this.options.itemTemplate, this, this.dynForm);
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
            let newForm = constructForm(this.options.itemTemplate, this, this.dynForm);
            this.entries.push({ form: newForm, collapsed: true });
            Object.assign(d, newForm.getPopulateData(elem));
        }
        return d;
    }
}
class DropdownForm {
    constructor(options, parent) {
        this.options = options;
        this.id = formBuilder_uuidv4();
        this.changed = false;
        this.parent = parent;
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
                    if (this.options.onSelect)
                        this.options.onSelect(change, this);
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
        if (typeof data != 'string')
            throw new PopulateError("Cannot populate dropdown with non-string.");
        let d = {};
        d[this.id] = data !== null && data !== void 0 ? data : this.options.default;
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
        this.id = formBuilder_uuidv4();
        let dropdownItems = Object.keys(this.options.definitions).map(k => {
            return {
                value: k,
                text: k
            };
        });
        this.dropDown = new DropdownForm({
            dropdownItems: dropdownItems,
            default: dropdownItems[0].value,
            onSelect: (newVal, _) => {
                console.log('todo');
            },
            label: '',
        }, this);
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
    buildJsonForm() {
        if (this.elements[this.currDropdownItem] == undefined) {
            let f = constructForm(this.options.definitions[this.currDropdownItem].definition, this, this.dynForm);
            let newData = f.getPopulateData(this.options.definitions[this.currDropdownItem].defaultValue);
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
                    this.currDropdownItem = change.item.data;
                    this.dynForm.refresh();
                }
            }
        };
        let header = {
            type: 'group',
            items: [dropdown],
            container: {
                style: 'background-color: lightgray; padding: 0.5rem; border: 1px solid black;'
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
            let elem = constructForm(this.options.definitions[key].definition, this, this.dynForm);
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
            let elem = constructForm(this.options.definitions[correctKey].definition, this, this.dynForm);
            this.elements[correctKey] = elem;
            let d = {};
            d[this.dropDown.id] = correctKey;
            Object.assign(d, elem.getPopulateData(data));
            return d;
        }
        throw new PopulateError(errs);
    }
}
class ConstForm {
    constructor(options, parent) {
        this.options = options;
        this.parent = parent;
    }
    serialize(formData) {
        return { changed: false, raw: this.options.value };
    }
    buildJsonForm() {
        return {};
    }
    getPopulateData(data) {
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
    }
    buildJsonForm() {
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
// How is state handled?
// Form element can change its own state, then request a redraw
// How is data harvesting handled?
// Components gather their own data, and indicate changes
class DynamicForm {
    constructor(obj, containerId, formDefn, other) {
        this.firstTabLabel = '';
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
        this.otherItems = other;
        this.obj = obj;
        this.containerId = containerId;
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
        this.obj._functions = {
            dynamicForm: {},
        };
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
            let fnId = 'Tab' + i + "Click";
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
        this.formBox.isDirtyImmediate = true;
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
        this.formBox.load({ form: { items: [tabGroup, ...((_a = this.otherItems) !== null && _a !== void 0 ? _a : [])] }, guides: this.guides }, this.formBox.data);
    }
    serializeWithChanges() {
        return this.form.serialize(this.formBox.data);
    }
    serialize() {
        let withChanges = this.form.serialize(this.formBox.data);
        let getRaw = (c) => {
            if ('raw' in c)
                return c.raw;
            else if ('keys' in c) {
                let out = {};
                for (const key in c.keys) {
                    out[key] = getRaw(c.keys[key]);
                }
                return out;
            }
            else {
                return c.elements.map(x => getRaw(x));
            }
        };
        return getRaw(withChanges);
    }
}

// EXTERNAL MODULE: ./src/types.ts
var types = __webpack_require__(397);
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

;// ./src/listBuilder.ts
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





const DEFAULT_DATE_FMT = 'MM/dd/yyyy';
const DEFAULT_DATETIME_FMT = "MM/dd/yyyy hh:mm:ss";
const LIST_NAME = 'DYNAMIC_LIST';
const DETAIL_FORM_NAME = "DETAIL_VIEW";
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
        this.foreignKeys = [];
        // Used in _match
        this.searchMemoizationNeedsRebuild = false;
        this.searchMemoization = {};
        this.permanentFilters = [];
        this.searchFilters = [];
        this.orderings = [];
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
    static makeDynamicList(ops) {
        return new Promise((resolve) => {
            var _a, _b, _c;
            let list = new DynamicList();
            list.permanentFilters = (_a = ops.filters) !== null && _a !== void 0 ? _a : [];
            list.searchFilters = [];
            list.buttonFns = {};
            list.window = window;
            list.onRender = [];
            list.obj = ops.obj;
            list.listBox = null;
            list.config = jQuery.extend({}, ops.prefetch.config);
            list.data = [];
            list.rawData = [];
            list.schema = {};
            if (ops.otherProperties) {
                list.onSaveOverride = ops.otherProperties.onSaveOverride;
                list.staticDataOverride = ops.otherProperties.dataOverride;
                list.foreignKeys = (_b = ops.otherProperties.foreignKeys) !== null && _b !== void 0 ? _b : [];
            }
            validateConfig(list.config);
            if (list.config.onInitialize) {
                (0,types.stringReprToFn)(list.config.onInitialize)(list, (_c = ops.args) !== null && _c !== void 0 ? _c : []);
            }
            ops.obj.getControl(LIST_NAME)._size = () => { };
            ops.obj.getControl(LIST_NAME)._resize = () => { };
            ops.obj.saveDynamicListEdits = () => list.saveDynamicListEdits();
            list.settings = list.buildSettings();
            list.buildList();
            resolve(list);
        })
            .then((list) => {
            if (ops.prefetch.data === undefined || ops.prefetch.data.length == 0) {
                return list.fetchSchema(false).then(l => l.fetchData());
            }
            else {
                list.setData(ops.prefetch.data, true);
                return list;
            }
        })
            .then((list) => {
            if (Object.keys(list.dataScopeManager.expandedIdxToRawIdx).length == 0) {
                list.dataScopeManager = new DataScopeManager(list.schema);
            }
            return list.reRender(false);
        }).then((list) => {
            validateSchema(list.schema);
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
    newDetailViewRecord() {
        let makeForm = () => this.buildDetailViewForm();
        let openForm = () => this.obj.runAction('Navigate Detail View');
        let makeNew = () => this.listBox.newDetailViewRecord();
        A5.executeThisThenThat(makeForm, openForm, makeNew);
    }
    saveDynamicListEdits() {
        var _a;
        if (this.onSaveOverride) {
            let data = this.listBox._data.map(row => {
                let newRow = {};
                for (const mapping of this.config.mappings) {
                    newRow[mapping.columnName] = row[mapping.columnName];
                }
                return newRow;
            });
            this.onSaveOverride(this, data);
            this.obj.refreshClientSideComputations(true);
            this.reRender(true);
            return;
        }
        let harvest = this.listBox.harvestList();
        harvest.forEach(elem => {
            this.foreignKeys.forEach(fk => {
                elem[fk.columnName] = fk.value;
            });
        });
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
            populateQueries(newRows, 'add');
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
        if (this.config.multiSelect === true) {
            columns.push(this.buildCheckboxColumn());
        }
        for (const mapping of this.config.mappings) {
            if (mapping.subMappings && this.dataScopeManager.isFlattenedSubfield(mapping.subMappings)) {
                let collectSubColumns = (s) => {
                    if ('keys' in s) {
                        let res = [];
                        for (const key in s.keys) {
                            res.push(...collectSubColumns(s.keys[key]));
                        }
                        return res;
                    }
                    else if ('arrayItem' in s) {
                        return collectSubColumns(s.arrayItem);
                    }
                    else {
                        return [{
                                columnName: s.flattenedColumnName,
                                displayName: s.displayName,
                                inList: true,
                                inDetailView: true
                            }];
                    }
                };
                collectSubColumns(mapping.subMappings).forEach(m => {
                    columns.push(this.buildColumnDefn(m));
                    listFields.push(this.buildListFieldDefn(m));
                });
            }
            else {
                columns.push(this.buildColumnDefn(mapping));
                listFields.push(this.buildListFieldDefn(mapping));
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
                data.__selected = !data.__selected;
                var src = this.listBox.__checkedImage;
                if (!data.__selected)
                    src = this.listBox.__uncheckedImage;
                let id = this.obj.dialogId + '.' + LIST_NAME;
                var ele = $(`${id}.CHECKBOX` + data['*key']);
                A5.u.icon.update(ele.children[0], src);
                this.listBox._size();
                if (this.listBox.onCheckRow) {
                    var e = { data: data, renderIndex: data['*renderIndex'], rowNumber: data['*key'], value: data['*value'], checked: data.__selected };
                    this.listBox.onCheckRow(e);
                }
            }
        };
        items['__toggleAll'] = {
            "selectable": false,
            "onClick": (index, v, args) => {
                var data = this.listBox._data[this.listBox._dataMap[index]];
                var allrowschecked = true;
                let lObj = this.listBox;
                for (var i = 0; i < lObj._rData.length; i++) {
                    if (typeof lObj._rData[i]['__selected'] == 'undefined' || lObj._rData[i]['__selected'] == false) {
                        allrowschecked = false;
                    }
                }
                if (!allrowschecked) {
                    lObj.checkAllRows();
                    lObj._allrowschecked = true;
                }
                else {
                    lObj.unCheckAllRows();
                    lObj._allrowschecked = false;
                }
                var e2 = { data: lObj._data };
                if (lObj && lObj.onCheckRow)
                    lObj.onCheckRow(e2);
                this.listBox.refresh();
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
                        case 'number':
                            data[mapping.columnName] = $u.s.toNum(data[mapping.columnName]);
                            break;
                        case 'bool':
                            data[mapping.columnName] = $u.s.toBool(data[mapping.columnName]);
                            break;
                    }
                }
            },
            getCheckedRows: () => {
                let r = [];
                let _d = this.listBox._data;
                for (let i = 0; i < _d.length; i++) {
                    if (_d[i].__selected)
                        r.push(i);
                }
                return r;
            },
            unCheckAllRows: () => {
                let _d = this.listBox._rData;
                for (let i = 0; i < _d.length; i++) {
                    _d[i]['__selected'] = false;
                }
                this.listBox.refresh();
            },
            checkAllRows: () => {
                let _d = this.listBox._rData;
                for (let i = 0; i < _d.length; i++) {
                    _d[i]['__selected'] = true;
                }
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
                    let btns = listObj.window.document.getElementsByClassName(`${LIST_NAME}_BUTTON`);
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
            _match: (data, field, val, obj) => {
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
                    var _a, _b, _c, _e, _f, _g, _h;
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
                        o.v1 = A5.stringToDate(o.v1, (_b = (_a = this.getMapping(field)) === null || _a === void 0 ? void 0 : _a.serverDateFormat) !== null && _b !== void 0 ? _b : DEFAULT_DATETIME_FMT);
                        o.v2 = A5.stringToDate(o.v2, (_e = (_c = this.getMapping(field)) === null || _c === void 0 ? void 0 : _c.serverDateFormat) !== null && _e !== void 0 ? _e : DEFAULT_DATETIME_FMT);
                        if (typeof _d == 'string')
                            _d = A5.stringToDate(_d, (_g = (_f = this.getMapping(field)) === null || _f === void 0 ? void 0 : _f.serverDateFormat) !== null && _g !== void 0 ? _g : DEFAULT_DATETIME_FMT);
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
                        let op = (_h = obj.op) !== null && _h !== void 0 ? _h : "..x..";
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
                if (this.searchMemoizationNeedsRebuild) {
                    this.searchMemoization = {};
                    this.data.forEach((data, index) => {
                        this.searchMemoization[index] = matches(data, field);
                    });
                }
                let topLevel = this.dataScopeManager.getAllTopLevelColumns(this.config).map(x => x.columnName);
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
            __checkedImage: 'svgIcon=#alpha-icon-checkCircle:icon,24',
            __uncheckedImage: 'svgIcon=#alpha-icon-circle:icon,24',
            onListDraw: function (data, startIndex) {
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
                    this._hasrun = true;
                    this._allrowschecked = true;
                    let d = this._rData;
                    for (let i = 0; i < d.length; i++) {
                        if (!d[i].__selected) {
                            this._allrowschecked = false;
                            break;
                        }
                    }
                    if (d.length == 0)
                        this._allrowschecked = false;
                    let h;
                    if (this._allrowschecked) {
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
                let changes = (_b = (_a = this.detailView) === null || _a === void 0 ? void 0 : _a.serializeWithChanges()) !== null && _b !== void 0 ? _b : { changed: false, raw: null };
                let d = {};
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
                let d2 = {};
                for (let n in d) {
                    if (n.indexOf("*") != 0) {
                        d2[n] = d[n];
                    }
                }
                let selected = this.listBox.selection;
                selected.push(...this.listBox._data.filter(x => x.__selected).map(x => x['*key']));
                if (selected.length > 0) {
                    selected.forEach(s => this.listBox.updateTableRow(s, d2));
                }
                else {
                    this.listBox.addTableRow(d2, {
                        setFocusToTargetRow: true
                    });
                }
                this.listBox._updatingListFromUXControls = false;
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
    buildColumnDefn(mapping) {
        var _a, _b, _c;
        let template = '{' + mapping.columnName + '}';
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
            resize: true,
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
                else {
                    this.obj.runAction(button.onClick.action);
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
        return defn;
    }
    buildDetailViewForm(rowNum) {
        var _a, _b, _c, _e;
        let _d = {};
        let allSelected = this.listBox._data.filter(d => d.__selected);
        if (allSelected.length > 1) {
            // For each mapping, check that every entry in selected is the same
            // If it is, leave it alone
            // Otherwise, replace with empty string
            this.config.mappings.forEach(mapping => {
                if (!mapping.inDetailView)
                    return;
                let allSame = true;
                for (let i = 1; i < allSelected.length; i++) {
                    if (allSelected[i][mapping.columnName] !== allSelected[i - 1][mapping.columnName]) {
                        allSame = false;
                        break;
                    }
                }
                if (allSame) {
                    _d[mapping.columnName] = allSelected[0][mapping.columnName];
                }
                else {
                    _d[mapping.columnName] = this.makeObviousDefault(mapping);
                }
            });
        }
        else if (rowNum != undefined) {
            _d = jQuery.extend({}, this.listBox._data[this.listBox._dataMap[rowNum]]);
        }
        else {
            this.config.mappings.forEach(mapping => {
                if (mapping.inDetailView) {
                    _d[mapping.columnName] = this.makeObviousDefault(mapping);
                }
            });
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
                    let subData = undefined;
                    if (mapping.columnName in d)
                        subData = d[mapping.columnName];
                    inputs.requiredKeys[mapping.columnName] = this.buildSubDetailView(mapping.subMappings, (_a = mapping.displayName) !== null && _a !== void 0 ? _a : mapping.columnName, this.config.name + '.' + mapping.columnName, subData, (jsonFieldData) => {
                        d[mapping.columnName] = JSON.stringify(jsonFieldData);
                        this.listBox.updateRow(rowNum, d);
                    });
                    continue;
                }
                if (!mapping.editType)
                    mapping.editType = 'text';
                let value = {
                    type: 'simple',
                    options: {
                        type: 'string',
                        label: '',
                        readonly: (_b = mapping.readOnly) !== null && _b !== void 0 ? _b : false,
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
                        value.options.type = 'datetime';
                        value.options.dateFmt = (_c = mapping.serverDateFormat) !== null && _c !== void 0 ? _c : DEFAULT_DATETIME_FMT;
                        break;
                    case 'text':
                    case 'json':
                    default:
                        break;
                }
                value.options.label = (_e = mapping.displayName) !== null && _e !== void 0 ? _e : mapping.columnName;
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
                    let item = d[mapping.columnName];
                    if ('raw' in item) {
                        item.raw = JSON.stringify(item.raw);
                    }
                }
            }
            return d;
        };
        let bottomButtons = this.makeDetailContextButtons();
        let detailViewForm = new DynamicForm(this.obj, this.obj.getPointer(DETAIL_FORM_CONTAINER).id, { type: 'object', options: inputs }, [bottomButtons]);
        this.setFormDetailView(detailViewForm);
        this.detailView = detailViewForm;
        detailViewForm.populate(d);
    }
    makeDetailContextButtons() {
        let divStyle = "display: flex; flex-direction: row; align-items: center; gap: 0.5rem;";
        return {
            type: 'group',
            items: [
                {
                    disabled: () => { var _a, _b; return !((_b = (_a = this.detailView) === null || _a === void 0 ? void 0 : _a.formBox.isDirtyImmediate) !== null && _b !== void 0 ? _b : false); },
                    type: 'button',
                    control: {
                        html: `
                        <div style="${divStyle}">
                            ${A5.u.icon.html('svgIcon=#alpha-icon-save:icon,24')}
                            <p>Save</p>
                        </div>
                        `,
                        onClick: () => {
                            var _a, _b;
                            if ((_a = this.detailView) === null || _a === void 0 ? void 0 : _a.formBox.isDirtyImmediate) {
                                (_b = this.detailView) === null || _b === void 0 ? void 0 : _b.formBox._listDetailView('save');
                            }
                            if (this.detailView) {
                                this.detailView.formBox.isDirtyImmediate = false;
                            }
                        }
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
                        onClick: () => {
                            var _a;
                            (_a = this.detailView) === null || _a === void 0 ? void 0 : _a.formBox._listDetailView('deleterecord');
                        }
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
                            var _a;
                            (_a = this.detailView) === null || _a === void 0 ? void 0 : _a.formBox._listDetailView('newrecord');
                        }
                    }
                },
            ],
            container: {
                style: '; display: flex; flex-direction: row; gap: 1rem;'
            }
        };
    }
    buildSubDetailView(scheme, label, fullPath, data, onSave) {
        var _a;
        // Object type
        if ('keys' in scheme) {
            let form = {
                type: 'object',
                options: {
                    label: label,
                    requiredKeys: {},
                    inlineKeys: true,
                }
            };
            for (const key in scheme.keys) {
                let subData = undefined;
                if (key in data)
                    subData = data[key];
                form.options.requiredKeys[key] = this.buildSubDetailView(scheme.keys[key], key, fullPath + '.' + key, subData, (subValue) => {
                    data[key] = subValue;
                    onSave(data);
                });
            }
            return form;
        }
        // Array Type
        else if ('arrayItem' in scheme) {
            let form = {
                type: 'button',
                options: {
                    label: label,
                    text: `Open ${label} in new tab`,
                    action: (e) => {
                        this.openSublistFromNested(fullPath, label, data, onSave);
                    },
                    onSerialize: () => {
                        return data;
                    }
                }
            };
            return form;
        }
        // Regular value 
        else {
            let form = {
                type: 'simple',
                options: {
                    label: (_a = scheme.displayName) !== null && _a !== void 0 ? _a : label,
                    type: scheme.editType
                }
            };
            return form;
        }
    }
    openSublistFromNested(name, label, data, onSave) {
        let newSchema = {
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
    getMapping(name) {
        for (const m of this.config.mappings) {
            if (m.columnName == name)
                return m;
        }
    }
    // Open a new list with data that persists to a field on the current list
    linkSublistToField(name, label, columnName, populateWith, currRow, currData) {
        let onSave = (newData) => {
            currData[columnName] = JSON.stringify(newData);
            this.listBox.updateRow(currRow, currData);
        };
        this.openSublistFromNested(name, label, populateWith, onSave);
    }
    makeObviousDefault(mapping) {
        var _a, _b;
        let makeDefaultForSubfield = (scheme) => {
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
                    defaults[key] = makeDefaultForSubfield(scheme.keys[key]);
                }
                return defaults;
            }
            else {
                return makeDefaultForSubfield(scheme.arrayItem);
            }
        };
        switch ((_a = mapping.editType) !== null && _a !== void 0 ? _a : 'text') {
            case "number":
                return 0;
            case "bool":
                return false;
            case "json":
                if (mapping.subMappings) {
                    if ('arrayItem' in mapping.subMappings) {
                        return '[]';
                    }
                    else {
                        return JSON.stringify(makeDefaultForSubfield(mapping.subMappings));
                    }
                }
                else {
                    return '';
                }
            case "time":
            case "datetime":
                return new Date().toFormat((_b = mapping.serverDateFormat) !== null && _b !== void 0 ? _b : DEFAULT_DATETIME_FMT);
            case "text":
            case "dropdown":
                return '';
        }
    }
    launchNewPanel(configName, titleName, filters = []) {
        openNewPanel({
            configName: configName,
            titleName: titleName,
            filters: filters,
        });
    }
    linkNewPanel(configName, titleName, columns, makeFilter = true) {
        let cols = typeof columns == 'string' ? [columns] : columns;
        let allFilters = [];
        if (makeFilter) {
            cols.forEach(c => allFilters.push(...this.makeFilterFromSelected(c, c)));
        }
        openNewPanel({
            configName: configName,
            titleName: titleName,
            filters: allFilters,
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
        if (this.config.dataSource.preprocess)
            rawDataRows = (0,types.stringReprToFn)(this.config.dataSource.preprocess)(rawDataRows);
        this.rawData = rawDataRows;
        if (buildSchema)
            this.buildSchemaFromRawData();
        this.dataScopeManager = new DataScopeManager(this.schema);
        this.data = this.dataScopeManager.flattenData(this.rawData, this.config);
        if (this.listBox._state.recordCount === undefined) {
            this.listBox._state.recordCount = this.data.length;
        }
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
            let columns = [];
            this.config.mappings.forEach((c) => {
                columns.push(c.columnName);
            });
            return new Promise((resolve, reject) => {
                this.obj.ajaxCallback("", "", "getAllDataForTable", "", "configName=" + encodeURIComponent(this.config.name)
                    + "&filters=" + encodeURIComponent(filters)
                    + sortOptions
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
            return new Promise((resolve, reject) => {
                this.obj.ajaxCallback("", "", "getAllDataForTable", "", "configName=" + encodeURIComponent(this.config.name)
                    + "&filters=" + encodeURIComponent(filters)
                    + sortOptions
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
            count.innerHTML = "Records: " + this.listBox._state.recordCount;
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
        this.obj._controlInst['R1.' + LIST_NAME] = this.listBox;
    }
    setFormDetailView(form) {
        this.detailView = form;
        this.detailView.formBox._listDetailView = (mode) => {
            if (mode == 'getListName') {
                return LIST_NAME;
            }
            else if (mode == 'save') {
                this.listBox.updateListFromUXControls();
            }
            else if (mode == 'reset') {
                this.openDetailView();
            }
            else if (mode == 'deleterecord') {
                this.listBox.deleteRow();
                let formObj = this.obj.getControl(DETAIL_FORM_NAME);
                formObj.isDirtyImmediate = true;
                formObj.refresh();
                this.obj.refreshClientSideComputations(true);
            }
            else if (mode == 'newrecord') {
                this.listBox.newDetailViewRecord();
            }
            else if (mode == 'synchronize') {
                this.saveDynamicListEdits();
            }
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
            if (typeof instance !== 'object')
                return {};
            let s = {};
            for (const key in instance) {
                if (instance[key] instanceof Array)
                    s[key] = 'nestedArray';
                else if (typeof instance[key] === 'object' && instance[key] !== null)
                    s[key] = 'nestedObject';
                else {
                    s[key] = {
                        alphaType: jsTypeToAlphaType(typeof s[key])
                    };
                }
            }
            return s;
        };
        this.schema = {};
        this.rawData.forEach(d => deepAssign(this.schema, buildFromInstance(d)));
    }
    mapRawSchema(s) {
        s.jsonOutput.column.forEach((item) => this.schema[item.name] = { alphaType: item.alphaType });
    }
    fetchSchema(reuseData) {
        var _a;
        if (reuseData) {
            this.buildSchemaFromRawData();
            return Promise.resolve(this);
        }
        this.schema = {};
        if (this.config.dataSource.type == 'sql' && 'table' in this.config.dataSource) {
            return getSchema(this.obj, this.config.dataSource.table, (_a = this.config.dataSource.connectionString) !== null && _a !== void 0 ? _a : 'conn').then(() => {
                let response = this.obj.stateInfo.apiResult;
                if ('err' in response) {
                    throw new Error(response.err);
                }
                this.mapRawSchema(response.ok);
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
        else if (this.config.dataSource.type == 'json' && 'jsonData' in this.config.dataSource) {
            let staticData;
            if (this.staticDataOverride) {
                staticData = this.staticDataOverride;
            }
            else {
                staticData = JSON.parse(this.config.dataSource.jsonData);
            }
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
        this.schema = schema;
        this.expandedIdxToRawIdx = {};
    }
    flattenData(data, config) {
        let result = [];
        data.forEach((dataPoint, originalIndex) => {
            // Separate into expanded and not expanded 
            let expandedParts = {};
            let toExpand = [];
            for (const mapping of config.mappings) {
                // This field *should* be expanded
                if (mapping.subMappings !== undefined && this.isFlattenedSubfield(mapping.subMappings)) {
                    toExpand.push(mapping);
                }
                else {
                    expandedParts[mapping.columnName] = dataPoint[mapping.columnName];
                }
            }
            // Nothing to add
            if (toExpand.length == 0) {
                this.expandedIdxToRawIdx[result.length] = originalIndex;
                result.push(expandedParts);
            }
            else {
                let expandSub = (idx) => {
                    if (idx == toExpand.length - 1) {
                        return this.flattenSubfieldData(toExpand[idx].subMappings, dataPoint[toExpand[idx].columnName]);
                    }
                    else {
                        let nextLevel = expandSub(idx + 1);
                        let thisLevel = this.flattenSubfieldData(toExpand[idx].subMappings, dataPoint[toExpand[idx].columnName]);
                        let output = [];
                        for (const dp1 of nextLevel) {
                            for (const dp2 of thisLevel) {
                                // Perform Cartesian product of the two datapoints
                                output.push(Object.assign(dp1, dp2));
                            }
                        }
                        return output;
                    }
                };
                let expandedSubs = expandSub(0);
                for (const elem of expandedSubs) {
                    this.expandedIdxToRawIdx[result.length] = originalIndex;
                    result.push(Object.assign(elem, expandedParts));
                }
            }
        });
        return result;
    }
    flattenSubfieldData(sub, data) {
        let result = [];
        if ('flattenedColumnName' in sub) {
            let o = {};
            o[sub.flattenedColumnName] = data;
            result.push(o);
            return result;
        }
        else if ('arrayItem' in sub) {
            data.forEach(d => result.push(...this.flattenSubfieldData(sub.arrayItem, d)));
            return result;
        }
        else {
            // As with the top level, we separate the keys
            let expandedElems = {};
            // toExpand is a list of expanded sub-array elements
            let toExpand = [];
            for (const key in sub.keys) {
                let flattened = this.flattenSubfieldData(sub.keys[key], data[key]);
                // Expanded to 1 elem means no nested arrays
                if (flattened.length == 1) {
                    Object.assign(expandedElems, flattened[0]);
                }
                else {
                    toExpand.push(flattened);
                }
            }
            if (toExpand.length == 0)
                return [expandedElems];
            // Similar idea with the top level, basically Cartesian product
            let expandSub = (index) => {
                if (index == toExpand.length - 1)
                    return toExpand[index];
                else {
                    let nextLevel = expandSub(index + 1);
                    let results = [];
                    for (const dp1 of toExpand[index]) {
                        for (const dp2 of nextLevel) {
                            results.push(Object.assign(dp1, dp2));
                        }
                    }
                    return results;
                }
            };
            let expandedSubs = expandSub(0);
            for (const sub of expandedSubs) {
                result.push(Object.assign(sub, expandedElems));
            }
            return result;
        }
    }
    isFlattenedSubfield(sub) {
        if ('keys' in sub) {
            for (const key in sub.keys) {
                if (this.isFlattenedSubfield(sub.keys[key]))
                    return true;
            }
            return false;
        }
        else if ('arrayItem' in sub) {
            return this.isFlattenedSubfield(sub.arrayItem);
        }
        else {
            return 'flattenedColumnName' in sub;
        }
    }
    getAvailableColumns(config) {
        let allAvailable = [];
        for (const mapping of config.mappings) {
            if (mapping.subMappings !== undefined) {
                // Each sub mapping may be specified as part of the list
                if (this.isFlattenedSubfield(mapping.subMappings)) {
                    allAvailable.push(...this.getAvailableFlattenedCols(mapping.subMappings));
                    continue;
                }
            }
            allAvailable.push(mapping.columnName);
        }
        return allAvailable;
    }
    getSearchableColumns(config) {
        var _a, _b;
        let result = [];
        for (const mapping of config.mappings) {
            if (mapping.subMappings !== undefined) {
                if (this.isFlattenedSubfield(mapping.subMappings)) {
                    let sub = this.getSearchableFlattenedCols(mapping.subMappings);
                    result.push(...sub);
                }
            }
            else {
                result.push({
                    displayName: (_a = mapping.displayName) !== null && _a !== void 0 ? _a : mapping.columnName,
                    columnName: mapping.columnName,
                    quantifiable: false,
                    alphaType: (_b = mapping.editType) !== null && _b !== void 0 ? _b : 'text'
                });
            }
        }
        return result;
    }
    getSearchableFlattenedCols(sub) {
        var _a;
        let result = [];
        if ('keys' in sub) {
            for (const key in sub.keys) {
                result.push(...this.getSearchableFlattenedCols(sub.keys[key]));
            }
        }
        else if ('arrayItem' in sub) {
            result.push(...this.getSearchableFlattenedCols(sub.arrayItem));
        }
        else {
            let e = 'text';
            switch (sub.editType) {
                case 'string':
                    e = 'text';
                    break;
                case 'number':
                    e = 'number';
                    break;
                case 'boolean':
                    e = 'bool';
                    break;
            }
            result.push({
                displayName: (_a = sub.displayName) !== null && _a !== void 0 ? _a : sub.flattenedColumnName,
                columnName: sub.flattenedColumnName,
                quantifiable: true,
                alphaType: e
            });
        }
        return result;
    }
    getAvailableFlattenedCols(sub) {
        let res = [];
        if ('keys' in sub) {
            for (const key in sub) {
                res.push(...this.getAvailableFlattenedCols(sub[key]));
            }
        }
        else if ('arrayItem' in sub) {
            res.push(...this.getAvailableFlattenedCols(sub.arrayItem));
        }
        else {
            res.push(sub.flattenedColumnName);
        }
        return res;
    }
    getAllTopLevelColumns(config) {
        let allAvailable = new Set();
        for (const mapping of config.mappings) {
            allAvailable.add(mapping.columnName);
        }
        // Add items that may not appear in the mappings
        for (const key in this.schema) {
            allAvailable.add(key);
        }
        let result = [];
        allAvailable.forEach(col => {
            for (const mapping of config.mappings) {
                if (mapping.columnName == col) {
                    result.push({ displayName: mapping.displayName, columnName: col });
                    return;
                }
            }
            result.push({ columnName: col });
        });
        return result;
    }
    quantifiable(colName) {
        return false;
    }
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
        let allSearchCols = this.list.dataScopeManager.getSearchableColumns(this.list.config);
        for (const colInfo of allSearchCols) {
            let include = this.list.config.searchOptions.onlyInclude;
            let exclude = this.list.config.searchOptions.onlyExclude;
            let shouldInclude = true;
            if (include)
                shouldInclude = include.includes(colInfo.columnName);
            else if (exclude)
                shouldInclude = !exclude.includes(colInfo.columnName);
            if (shouldInclude) {
                let element = (new FormInput())
                    .withLabel(colInfo.displayName)
                    .withVariable(colInfo.columnName)
                    .withStyle('width: 100%');
                let advancedControl = {
                    type: 'default',
                    format: '',
                    data: [],
                    quantifier: colInfo.quantifiable
                };
                switch (colInfo.editType) {
                    case 'text':
                    case 'number': break;
                    case 'time':
                        element = element.asTime(DEFAULT_DATETIME_FMT);
                        advancedControl.type = 'datepicker';
                        advancedControl.format = DEFAULT_DATETIME_FMT;
                        break;
                    case 'datetime':
                        element = element.asDateTime(DEFAULT_DATETIME_FMT);
                        advancedControl.type = 'datepicker';
                        advancedControl.format = DEFAULT_DATETIME_FMT;
                        break;
                    case 'bool':
                        element = element.asBool();
                        advancedControl.type = 'switch';
                        advancedControl.data = ['true', 'false'];
                        break;
                    case 'dropdown':
                        let dropdownConfig;
                        for (const mapping of this.list.config.mappings) {
                            if (mapping.columnName == colInfo.columnName) {
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
                this.advForm.data.fields[colInfo.columnName] = {
                    control: advancedControl,
                    default: {
                        op: '='
                    },
                    label: colInfo.displayName
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
                let type = 'text';
                for (const column of allSearchCols) {
                    if (column.columnName == col)
                        return column.editType;
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
                            fmt = DEFAULT_DATETIME_FMT;
                        if (editType == 'time')
                            fmt = DEFAULT_DATETIME_FMT;
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
            .withClickHandler((x) => {
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
                    val = v.item.columnVal;
                else
                    val = v.item;
                obj_i = this.list.listBox._searchFieldOptions[v.name];
                this.list.listBox._setSearchOps(obj, obj_i);
                let strVal = val.toString();
                if (typeof val === 'string')
                    strVal = this.list.listBox._str(val);
                if (val instanceof Date)
                    strVal = this.list.listBox._str(val.toFormat(DEFAULT_DATETIME_FMT));
                if (v.item.op)
                    obj['op'] = v.item.op;
                if (v.item.quantifier)
                    obj['quantifier'] = v.item.quantifier;
                expn_i = 'this._match(data,' + this.list.listBox._str(v.name) + ',' + strVal + ',' + JSON.stringify(obj) + ')';
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
            let filters = searchObj ? searchObj.queryData : [];
            let map = this.list.listBox._searchPart.fieldMap;
            for (let i = 0; i < map.length; i++) {
                let val = this.obj.getValue(map[i].control);
                if (val != '' && val != undefined) {
                    let ops = this.list.listBox._searchFieldOptions[allSearchCols[i].columnName];
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
                    e.columnVal = e.columnVal.toFormat(DEFAULT_DATETIME_FMT);
                }
            });
            this.list.setFilterAndFetch(filters);
        };
        this.list.listBox.clearSearchList = (_obj) => {
            var _a;
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
            let map = this.list.listBox._searchPart.fieldMap;
            for (const m of map) {
                this.obj.setValue(m.control, '', false);
            }
            this.list.setFilterAndFetch([]);
            this.obj._setDVClean(this.list.listBox);
        };
        this.list.listBox._searchPartSubmit_clientSideFilterClear = () => {
            if (!this.list.listBox._searchPartHas)
                return true;
            this.list.listBox._state.highlight = {};
            this.list.listBox.setFilter(false);
            let map = this.list.listBox._searchPart.fieldMap;
            for (let i = 0; i < map.length; i++) {
                this.obj.setValue(map[i].control, '', false);
            }
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
                dateFormat: DEFAULT_DATETIME_FMT
            });
            this.list.listBox._searchFieldOptions[col.columnName] = {
                option: 2,
                qbs: true,
                searchField: col.columnName,
                type: col.editType,
                dateFormat: DEFAULT_DATETIME_FMT
            };
        }
    }
}

;// ./src/formBuilder.ts

// https://stackoverflow.com/questions/105034/how-do-i-create-a-guid-uuid
function formBuilder_uuidv4() {
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
        this.id = formBuilder_uuidv4() + '_GROUP';
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
        this.id = formBuilder_uuidv4() + '_INPUT';
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

;// ./src/listConfiguration.ts




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
    let isAdmin = false;
    return batchFetch(ops.embeddedList, ops.configName, (_a = ops.filters) !== null && _a !== void 0 ? _a : []).then(() => {
        var _a;
        if ((_a = ops.embeddedList.stateInfo.apiResponse) === null || _a === void 0 ? void 0 : _a.err) {
            return checkIfAdmin(ops.obj)
                .then(() => {
                var _a;
                if (((_a = ops.obj.stateInfo.apiResponse) === null || _a === void 0 ? void 0 : _a.ok) == true) {
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
            ops.prefetch = ops.embeddedList.stateInfo.apiResponse.ok;
            return initList(ops);
        }
    });
}
function initList(ops) {
    DynamicList.makeDynamicList({
        obj: ops.embeddedList,
        window: ops.listWindow,
        prefetch: ops.prefetch,
        filters: ops.filters,
        args: ops.args,
        otherProperties: ops.otherProps,
    }).then((list) => {
        let search = new DynamicListSearch(list, ops.embeddedSearch, ops.searchWindow);
        DYNAMIC_LIST_LOOKUP[ops.prefetch.config.name] = {
            list: list,
            search: search,
            config: ops.obj
        };
        manageConfigForm({
            obj: ops.obj,
            listWindow: ops.listWindow,
            searchWindow: ops.searchWindow,
            preFetch: ops.prefetch,
            filters: ops.filters,
            args: ops.args,
            embeddedList: ops.embeddedList,
            embeddedSearch: ops.embeddedSearch,
            otherProps: ops.otherProps
        });
        ops.embeddedList.initialize(list);
    }).catch((err) => {
        if (err instanceof ValidationError) {
            displayErrorMessage(err.toString());
        }
        else {
            displayErrorMessage("There was a fatal error while initializing the list (check logs). Please fix the configuration and reload.");
            if (err instanceof Error) {
                console.error("Error: ", err.name, "Message: ", err.message, "Stack Trace: ", err.stack);
            }
            else {
                console.error(err.toString());
            }
        }
        DYNAMIC_LIST_LOOKUP[ops.prefetch.config.name] = {
            list: undefined,
            search: undefined,
            config: ops.obj
        };
        manageConfigForm({
            obj: ops.obj,
            listWindow: ops.listWindow,
            searchWindow: ops.searchWindow,
            preFetch: ops.prefetch,
            filters: ops.filters,
            args: ops.args,
            embeddedList: ops.embeddedList,
            embeddedSearch: ops.embeddedSearch,
            otherProps: ops.otherProps
        });
    });
}
function manageConfigForm(ops) {
    let allDataColumns = [];
    let configForm;
    let fillColInfo = () => {
        var _a, _b;
        let list = (_b = (_a = DYNAMIC_LIST_LOOKUP[ops.preFetch.config.name]) === null || _a === void 0 ? void 0 : _a.list) !== null && _b !== void 0 ? _b : undefined;
        if (list === undefined)
            return;
        allDataColumns = list.dataScopeManager.getAllTopLevelColumns(list.config).map(m => {
            var _a;
            return {
                text: (_a = m.displayName) !== null && _a !== void 0 ? _a : m.columnName,
                value: m.columnName,
            };
        });
    };
    let show;
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
    let saveGlobal = () => {
        try {
            let maybeConfig = configForm.serialize();
            runValidation(maybeConfig);
            maybeConfig = extractRelevantConfig(maybeConfig, true);
            let data = encodeURIComponent(JSON.stringify(maybeConfig));
            ops.obj.ajaxCallback('', '', 'save_config', '', `configName=${ops.preFetch.config.name}&payload=${data}&global=${true}`, {
                onComplete: () => {
                    let res = ops.obj.stateInfo.apiResponse;
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
    };
    let saveUser = () => {
        try {
            let maybeConfig = configForm.serialize();
            runValidation(maybeConfig);
            maybeConfig = extractRelevantConfig(maybeConfig, false);
            let data = encodeURIComponent(JSON.stringify(maybeConfig));
            ops.obj.ajaxCallback('', '', 'save_config', '', `configName=${ops.preFetch.config.name}&payload=${data}&global=${false}`, {
                onComplete: () => {
                    let res = ops.obj.stateInfo.apiResponse;
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
    };
    show = (dataOverride = undefined) => {
        fillColInfo();
        configForm = buildConfigForm(ops.obj, ops.preFetch.isAdmin, allDataColumns);
        try {
            let others = makeSQLSaveButtons(ops.obj, saveUser, saveGlobal);
            let populateWith = ops.preFetch.isAdmin ? ops.preFetch.config : ops.preFetch.config.mappings;
            configForm.populate(dataOverride !== undefined ? dataOverride : populateWith);
            let obj = ops.obj;
            obj.saveConfigGlobally = saveGlobal;
            obj.saveConfigUser = saveUser;
            obj.applyConfigChanges = () => {
                var _a;
                let newConfig = configForm.serialize();
                if (ops.preFetch.isAdmin) {
                    ops.preFetch.config = newConfig;
                }
                else {
                    ops.preFetch.config.mappings = newConfig;
                }
                let dynamicItems = (_a = DYNAMIC_LIST_LOOKUP[ops.preFetch.config.name]) !== null && _a !== void 0 ? _a : undefined;
                if (dynamicItems === undefined)
                    return;
                dynamicItems.list.destructor();
                let newSearch;
                let prefetchCopy = jQuery.extend(true, {}, ops.preFetch);
                DynamicList.makeDynamicList({
                    obj: ops.embeddedList,
                    window: ops.listWindow,
                    prefetch: prefetchCopy,
                    filters: ops.filters,
                    args: ops.args,
                    otherProperties: ops.otherProps
                }).then((newList) => {
                    newSearch = new DynamicListSearch(newList, ops.embeddedSearch, ops.searchWindow);
                    dynamicItems.list = newList;
                    dynamicItems.search = newSearch;
                    dynamicItems.list.reRender(false);
                }).catch((e) => displayErrorMessage(e.toString()));
            };
        }
        catch (e) {
            console.error(e);
            displayErrorMessage(e.toString());
        }
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
    let nestedSubMappings = {
        label: "Nested Sub-Mappings",
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
                                                label: (_1, _2, k) => k,
                                                recurseOn: 'subMapping'
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        optionalKeys: {
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
    let flattenedSubMappings = {
        label: "Flattened Sub-Mappings",
        name: 'subMapping',
        definitions: {
            'JSON Value': {
                defaultValue: {
                    editType: 'string',
                    flattenedColumnName: ''
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
                            },
                            flattenedColumnName: {
                                type: 'simple',
                                options: {
                                    label: "Flattened Column Name",
                                    type: 'string'
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
                defaultValue: { arrayItem: { editType: 'string', flattenedColumnName: '' } },
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
                                            editType: 'string',
                                            flattenedColumnName: '',
                                        },
                                        definition: {
                                            type: 'recursive',
                                            options: {
                                                label: (_1, _2, k) => k,
                                                recurseOn: 'subMapping'
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        optionalKeys: {
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
        defaultValue: {
            columnName: '',
        },
        itemTemplate: {
            type: 'object',
            options: {
                skipUnknownKeys: true,
                label: (_, data) => {
                    return data.displayName ? data.displayName : data.columnName;
                },
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
                        defaultValue: false,
                        definition: {
                            type: 'simple',
                            options: {
                                type: 'boolean',
                                label: 'Display In List'
                            }
                        },
                        inline: true,
                    },
                    inDetailView: {
                        defaultValue: false,
                        definition: {
                            type: 'simple',
                            options: {
                                type: 'boolean',
                                label: 'Display In Detail View'
                            }
                        },
                        inline: true,
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
                            options: {
                                label: 'Sub-Mapping Type',
                                definitions: {
                                    'Nested Sub-Fields': {
                                        defaultValue: { editType: 'string' },
                                        definition: {
                                            type: 'multi',
                                            options: nestedSubMappings
                                        }
                                    },
                                    'Flattened Sub-Mappings': {
                                        defaultValue: {
                                            editType: 'string',
                                            flattenedColumnName: ''
                                        },
                                        definition: {
                                            type: 'multi',
                                            options: flattenedSubMappings
                                        }
                                    }
                                }
                            }
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
                                                            defaultValue: '',
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
        return new DynamicForm(obj, obj.getPointer(CONFIG_CONTAINER_NAME).id, { type: 'array', options: mappings });
    // Read-only option is available to admins only
    let mappingOps = mappings.itemTemplate.options;
    mappingOps.optionalKeys['readOnly'] = {
        defaultValue: false,
        definition: {
            type: 'simple',
            options: {
                type: 'boolean',
                label: 'Read-Only'
            }
        },
        inline: true
    };
    let filters = {
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
    };
    let serverSort = {
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
                            dropdownItems: allColumns,
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
    };
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
                                        serverSort: {
                                            defaultValue: [],
                                            definition: {
                                                type: 'array',
                                                options: serverSort
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
                                        },
                                        serverSort: {
                                            defaultValue: [],
                                            definition: {
                                                type: 'array',
                                                options: serverSort
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
            }
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
}
// Helper function to make a button to serialize the form data
function makeSQLSaveButtons(obj, saveUser, saveGlobal) {
    return {
        type: "group",
        "id": "SERIALIZE_GROUP_" + formBuilder_uuidv4(),
        container: {
            style: 'width: 100%; display: flex; flex-direction: row;',
        },
        items: [
            {
                type: "button",
                id: "SERIALIZE_BTN_" + formBuilder_uuidv4(),
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
                id: "LOAD_BTN_" + formBuilder_uuidv4(),
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

;// ./src/index.ts

window.initialize = initialize;

/******/ })()
;