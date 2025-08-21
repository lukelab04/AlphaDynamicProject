/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 876:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfigTypeSchema: () => (/* binding */ ConfigTypeSchema),
/* harmony export */   Err: () => (/* binding */ Err),
/* harmony export */   ErrMsg: () => (/* binding */ ErrMsg),
/* harmony export */   MappingTypeSchema: () => (/* binding */ MappingTypeSchema),
/* harmony export */   MsgWithCtx: () => (/* binding */ MsgWithCtx),
/* harmony export */   Ok: () => (/* binding */ Ok),
/* harmony export */   stringReprToFn: () => (/* binding */ stringReprToFn)
/* harmony export */ });
/* unused harmony exports EditTypeTypeSchema, EndpointTypeSchema, PathTypeSchema, ListFilterTypeSchema, ListActionTypeSchema, ListBtnTypeSchema, DataModelTypeSchema, SearchOptionsTypeSchema, ServerSortTypeSchema, ForcedValueTypeSchema, DataSourceTypeSchema, RawSchemaTypeSchema, PrefetchedDataTypeSchema */
/* harmony import */ var _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(811);

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
function stringReprToFn(s) {
    return eval(s);
}
const Ok = (value) => ({
    map: f => Ok(f(value)),
    mapErr: () => Ok(value),
    flatMap: f => f(value),
    match: x => x.ok(value),
    asErr: () => undefined,
    asOk: () => value,
    isOk: () => true
});
const Err = (err) => ({
    map: () => Err(err),
    mapErr: f => Err(f(err)),
    flatMap: () => Err(err),
    match: x => x.err(err),
    asErr: () => err,
    asOk: () => undefined,
    isOk: () => false
});
class MsgWithCtx {
    constructor(msg, ctx) {
        this.msg = msg;
        this.ctx = ctx;
    }
    log() {
        console.error(this.ctx);
    }
    show() {
        return this.msg;
    }
}
class ErrMsg {
    constructor(msg) {
        this.msg = msg;
    }
    log() {
        console.error(this.msg);
    }
    show() {
        return this.msg;
    }
}
const EditTypeTypeSchema = _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Union([
    _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('text'),
    _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('dropdown'),
    _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('datetime'),
    _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('bool'),
    _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('number'),
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
const PathTypeSchema = _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Array(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Union([
    _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({ tag: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('object'), key: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String() }),
    _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({ tag: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('array') }),
]));
const ListFilterTypeSchema = _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({
    columnName: PathTypeSchema,
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
    type: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Union([EditTypeTypeSchema, _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('json')])),
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
            foreignCol: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String(),
            value: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String(),
        })),
    }),
    _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({
        actionName: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('openJSONSublist'),
        configurationName: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String(),
        tabName: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String(),
        fromColumn: PathTypeSchema,
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
const DataModelTypeSchema = _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Recursive(This => _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Intersect([
    _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Union([
        _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({
            tag: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('object'),
            fromString: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Boolean()),
            keys: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Record(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String(), This)
        }),
        _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({
            tag: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('array'),
            fromString: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Boolean()),
            item: This,
        }),
        _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({
            tag: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('data'),
            type: EditTypeTypeSchema,
        }),
        _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({
            tag: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('unknown'),
        })
    ]),
    _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({
        uniqueName: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String(),
        nullable: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Boolean(),
        optional: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Boolean(),
        // Function (data: unknown, serverTimeOffset: number) => any
        // Data is unchanged from the server
        // serverTimeOffset is the timezone offset from GMT
        preprocess: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String()),
        postprocess: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String()),
        defaultValue: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Any()),
    })
]));
const MappingTypeSchema = _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({
    displayName: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String()),
    fullPath: PathTypeSchema,
    inList: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Boolean()),
    inDetailView: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Boolean()),
    readOnly: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Boolean()),
    dateSettings: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({
        // Format as specified by Alpha date templating
        clientFormat: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String()),
    })),
    template: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String()),
    width: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String()),
    // Required if edit type is json
    jsonEditorType: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Union([_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('text'), _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('list')])),
    // Visible if jsonEditorType is 'list'
    jsonEditorListConfigName: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String()),
    dropdownConfig: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Union([
        _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({ choices: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Array(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String()), allowCustom: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Boolean()) }),
        _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({ fromColumn: PathTypeSchema, allowCustom: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Boolean()) }),
    ]))
});
const SearchOptionsTypeSchema = _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({
    advancedSearch: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Boolean()),
    serverSearch: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Boolean()),
    onlyInclude: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Array(PathTypeSchema)),
    onlyExclude: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Array(PathTypeSchema)),
});
const ServerSortTypeSchema = _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Array(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({
    // Must be a top-level name
    columnName: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String(),
    order: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Union([_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('asc'), _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('desc')])
}));
const ForcedValueTypeSchema = _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({
    // Must be top-level
    column: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String(),
    value: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Union([
        _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({ tag: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('value'), value: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String() }),
        _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({ tag: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('argument'), value: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String() }),
    ])
});
const DataSourceTypeSchema = _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Union([
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
        preprocess: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String()),
        forcedValues: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Array(ForcedValueTypeSchema))
    }),
    _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({
        type: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Literal('sql'),
        sql: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String(),
        connectionString: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String()),
        filters: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Array(ListFilterTypeSchema)),
        serverSort: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(ServerSortTypeSchema),
        paginate: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({ pageSize: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Number() })),
        preprocess: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String()),
        forcedValues: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Array(ForcedValueTypeSchema))
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
]);
const RawSchemaTypeSchema = _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({
    primaryKey: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String(),
    jsonOutput: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({
        name: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String(),
        nativeAPI: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String(),
        tableName: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String(),
        index: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Array(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({
            deleteRule: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String(),
            indexMethod: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String(),
            name: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String(),
            primaryKey: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Boolean(),
            reference: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Boolean(),
            unique: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Boolean(),
            updateRule: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String(),
            referenceTable: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String(),
            column: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Array(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({
                ascending: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Boolean(),
                name: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String(),
                nullAllowed: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String(),
                referenceName: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String()
            }))
        })),
        column: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Array(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({
            alphaType: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String(),
            autoGenerate: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Boolean(),
            autoIncrement: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Boolean(),
            name: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String(),
            nullable: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Boolean(),
            sourceTableName: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String(),
        }))
    })
});
const ConfigTypeSchema = _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({
    version: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String(),
    name: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String(),
    onInitialize: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.String()),
    dataSource: DataSourceTypeSchema,
    dataModel: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(DataModelTypeSchema),
    mappings: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Array(MappingTypeSchema),
    searchOptions: SearchOptionsTypeSchema,
    rowOptions: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({
        multiSelect: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Boolean()),
        moveRows: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Boolean()),
    })),
    buttons: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Array(ListBtnTypeSchema),
});
const PrefetchedDataTypeSchema = _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Object({
    data: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Array(_sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Any())),
    schema: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Optional(RawSchemaTypeSchema),
    editFullConfig: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Boolean(),
    serverTimeOffset: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Number(),
    editConfigMappings: _sinclair_typebox__WEBPACK_IMPORTED_MODULE_0__.Type.Boolean(),
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

;// ./src/data/FlatNameSuggester.ts


class FlatNameSuggestor {
    constructor(initial) {
        this.taken = new Set(initial.map(x => x[1]));
        this.names = initial;
    }
    lookup(path) {
        let entry = this.names.find(x => pathsEq(x[0], path));
        if (entry)
            return entry[1];
        return undefined;
    }
    get(path) {
        let existing = this.lookup(path);
        if (existing)
            return existing;
        let baseName = DataModel.printPath(path);
        if (this.taken.has(baseName)) {
            let n = 1;
            let currName = baseName + `_${n}`;
            while (this.taken.has(currName)) {
                n += 1;
                currName = baseName + `_${n}`;
            }
            baseName = currName;
        }
        this.names.push([path, baseName]);
        this.taken.add(baseName);
        return baseName;
    }
}

;// ./src/data/DataModel.ts


class DataModel {
    constructor(props) {
        if (props.root)
            this.model = props.root;
        else if (props.rawSchema)
            this.model = DataModel.buildModelFromRawSchema(props.rawSchema);
        else
            this.model = DataModel.buildModelFromRawData(props.rawRows);
        this.uniqueNameLookup = this.fillLookupMap();
    }
    static printPath(p) {
        return p.map(p => p.tag == 'object' ? p.key : '[...]')
            .join('.');
    }
    getUniqueName(m) {
        let p;
        if ('fullPath' in m)
            p = m.fullPath;
        else
            p = m;
        return this.find(p)?.uniqueName;
    }
    reverseNameLookup(uniqueName) {
        return this.uniqueNameLookup.get(uniqueName);
    }
    getNestingLevel(item) {
        if (item instanceof Array) {
            let i = 0;
            item.forEach(p => {
                if (p.tag == 'array')
                    i += 1;
            });
            return i;
        }
        if (item.tag == 'array')
            return 1 + this.getNestingLevel(item.item);
        else if (item.tag == 'object')
            return Math.max(...Object.values(item.keys).map(x => this.getNestingLevel(x)));
        else
            return 0;
    }
    isTopLevel(path) {
        if (path.length == 1 && path[0].tag == 'object')
            return path[0].key;
        return undefined;
    }
    find(path) {
        let dm;
        this.pathTraverser(path, (_, i, e) => {
            if (i == path.length - 1)
                dm = e;
        });
        return dm;
    }
    pathTraverser(path, callback) {
        let curr = this.model;
        for (let i = 0; i < path.length; i++) {
            let currPath = path[i];
            if (currPath.tag == 'object' && curr.tag == 'object' && currPath.key in curr.keys) {
                curr = curr.keys[currPath.key];
            }
            else if (currPath.tag == 'array' && curr.tag == 'array') {
                curr = curr.item;
            }
            else
                return;
            callback(currPath, i, curr);
        }
    }
    topLevelPaths() {
        return this.allPaths().filter(x => x.length == 1);
    }
    allPaths() {
        let paths = [];
        this.traverse({
            default: () => null,
            processArray: (_, p) => paths.push(p),
            processData: (_, p) => paths.push(p),
            // Intentially do not want to include JSON paths, since they are sort of fake
            //processJson: (_, p) => paths.push(p),
            processObject: (_, p) => paths.push(p),
            processUnknown: (_, p) => paths.push(p),
        });
        return paths.filter(x => x.length > 0);
    }
    traverse(traverser) {
        const order = traverser.visitChildren ?? 'preSelf';
        const visitObj = traverser.visitObject ?? ((o, path) => {
            let result;
            if (order == 'postSelf')
                result = (traverser.processObject ?? traverser.default)(o, path);
            for (const key in o.keys) {
                _traverse(o.keys[key], [...path, { tag: 'object', key }]);
            }
            if (order == 'preSelf')
                result = (traverser.processObject ?? traverser.default)(o, path);
            return result;
        });
        const visitArr = traverser.visitArray ?? ((a, path) => {
            let result;
            if (order == 'postSelf')
                result = (traverser.processArray ?? traverser.default)(a, path);
            _traverse(a.item, [...path, { tag: 'array' }]);
            if (order == 'preSelf')
                result = (traverser.processArray ?? traverser.default)(a, path);
            return result;
        });
        const visitData = traverser.visitData ?? ((d, path) => {
            return (traverser.processData ?? traverser.default)(d, path);
        });
        const visitUnknown = traverser.visitUnknown ?? ((d, path) => {
            return (traverser.processUnknown ?? traverser.default)(d, path);
        });
        const _traverse = (m, path) => {
            if (m.tag == 'object')
                return visitObj(m, path);
            else if (m.tag == 'array')
                return visitArr(m, path);
            else if (m.tag == 'data')
                return visitData(m, path);
            else
                visitUnknown(m, path);
        };
        return _traverse(this.model, []);
    }
    static buildModelFromRawSchema(s) {
        const suggestor = new FlatNameSuggestor([[[], '']]);
        const dmt = {
            keys: {},
            tag: 'object',
            nullable: false,
            optional: false,
            uniqueName: '',
        };
        const alphaToJs = (a) => {
            switch (a.toLowerCase()) {
                case 'c': return 'text';
                case 'l': return 'bool';
                case 'n': return 'number';
                default: return 'text';
            }
        };
        for (const col of s.jsonOutput.column) {
            dmt.keys[col.name] = {
                tag: 'data',
                nullable: col.nullable,
                optional: col.autoGenerate || col.autoIncrement,
                type: alphaToJs(col.alphaType),
                uniqueName: suggestor.get([{ tag: 'object', key: col.name }])
            };
        }
        return dmt;
    }
    static buildModelFromRawData(data) {
        if (data.length == 0)
            return {
                tag: 'object',
                keys: {},
                nullable: false,
                optional: false,
                uniqueName: ''
            };
        return data.map(d => this.modelFromPoint(d, [])).reduce((a, b) => this.combine(a, b));
    }
    static modelFromPoint(point, path) {
        const uniqueName = this.printPath(path);
        if (point === null)
            return { tag: 'unknown', uniqueName, nullable: true, optional: false };
        if (point === undefined)
            return { tag: 'unknown', uniqueName, nullable: false, optional: true };
        if (point instanceof Array) {
            let subPath = [...path, { tag: 'array' }];
            return {
                tag: 'array',
                nullable: false,
                optional: false,
                uniqueName,
                item: point.length == 0
                    ? { tag: 'unknown', nullable: false, optional: false, uniqueName: this.printPath(subPath) }
                    : point.map(x => this.modelFromPoint(x, subPath)).reduce((a, b) => this.combine(a, b))
            };
        }
        else if (typeof point === 'object') {
            let dmt = {
                tag: 'object',
                keys: {},
                uniqueName,
                nullable: false,
                optional: false
            };
            for (const key in point) {
                dmt.keys[key] = this.modelFromPoint(point[key], [...path, { tag: 'object', key }]);
            }
            return dmt;
        }
        else if (typeof point === 'string') {
            const stripped = point.trimStart();
            if (stripped.length >= 2 && (stripped[0] == '[' || stripped[0] == '{')) {
                let maybeJson = safeJsonParse(stripped);
                if (maybeJson.asErr() === undefined) {
                    const model = this.modelFromPoint(maybeJson.asOk(), path);
                    model.fromString = true;
                    return model;
                }
            }
        }
        let ty;
        switch (typeof point) {
            case 'boolean':
                ty = 'bool';
                break;
            case 'number':
                ty = 'number';
                break;
            default:
                ty = 'text';
                break;
        }
        return {
            tag: 'data',
            type: ty,
            nullable: false,
            optional: false,
            uniqueName
        };
    }
    static combine(a, b) {
        if (a.tag === 'unknown')
            return b;
        if (b.tag === 'unknown')
            return a;
        const nullable = a.nullable || b.nullable;
        const optional = a.optional || b.optional;
        const uniqueName = a.uniqueName;
        if (a.tag == 'array' && b.tag == 'array') {
            return {
                tag: 'array',
                item: this.combine(a.item, b.item),
                fromString: (a.fromString ?? false) || (b.fromString ?? false),
                nullable,
                optional,
                uniqueName
            };
        }
        else if (a.tag == 'data' && b.tag == 'data') {
            if (a.type != b.type)
                return { tag: 'unknown', uniqueName, nullable: false, optional: false };
            return {
                tag: 'data',
                uniqueName,
                nullable,
                optional,
                type: a.type
            };
        }
        else if (a.tag == 'object' && b.tag == 'object') {
            let dmt = {
                tag: 'object',
                keys: {},
                uniqueName,
                fromString: (a.fromString ?? false) || (b.fromString ?? false),
                nullable,
                optional
            };
            const allKeys = [...Object.keys(a.keys), ...Object.keys(b.keys)];
            for (const key of allKeys) {
                if (key in a.keys && key in b.keys) {
                    dmt.keys[key] = this.combine(a.keys[key], b.keys[key]);
                }
                else if (key in a.keys) {
                    dmt.keys[key] = {
                        ...a.keys[key],
                        optional: true
                    };
                }
                else {
                    dmt.keys[key] = {
                        ...b.keys[key],
                        optional: true
                    };
                }
            }
            return dmt;
        }
        return { tag: 'unknown', uniqueName: a.uniqueName, nullable: false, optional: false };
    }
    fillLookupMap() {
        let map = new Map();
        let traverser = {
            visitChildren: 'postSelf',
            default: () => null,
            processArray: (a, path) => map.set(a.uniqueName, path),
            processData: (d, path) => map.set(d.uniqueName, path),
            processObject: (o, path) => map.set(o.uniqueName, path),
            processUnknown: (o, path) => map.set(o.uniqueName, path),
        };
        this.traverse(traverser);
        return map;
    }
}

// EXTERNAL MODULE: ./src/util/types.ts
var types = __webpack_require__(876);
;// ./src/util/util.ts


const DEFAULT_DATETIME_FMT = "yyyy/MM/dd 0h:0m:0s.3";
function uuidv4() {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c => (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16));
}
function safeJsonParse(s) {
    try {
        const json = JSON.parse(s);
        return (0,types.Ok)(json);
    }
    catch (e) {
        if (e instanceof SyntaxError) {
            return (0,types.Err)(e);
        }
        return (0,types.Err)(new SyntaxError("There was an unknown error parsing the json."));
    }
}
function pathsEq(p1, p2) {
    if (p1.length !== p2.length)
        return false;
    for (let i = 0; i < p1.length; i++) {
        let curr1 = p1[i];
        let curr2 = p2[i];
        if (curr1.tag == 'object' && curr2.tag == 'object') {
            if (curr1.key !== curr2.key)
                return false;
        }
        else if (curr1.tag == 'array' && curr2.tag == 'array') {
            // ok
        }
        else {
            return false;
        }
    }
    return true;
}
function safeServerFilters(f) {
    let out = [];
    for (let i = 0; i < f.length; i++) {
        let col = f[i].columnName;
        if (col.length != 1)
            return (0,types.Err)(`Column ${DataModel.printPath(col)} is nested, and cannot be searched server-side.`);
        if (col[0].tag != 'object')
            return (0,types.Err)(`Column ${DataModel.printPath(col)} cannot be searched server-side3.`);
        out.push({ ...f[i], columnName: col });
    }
    return (0,types.Ok)(out);
}
function okOrLog(p) {
    p.catch(e => displayErrorMessage(new types.MsgWithCtx("There was an unexpected error.", e)));
}
function displayErrorMessage(e) {
    e.log();
    /* eslint-disable */
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
    msgContainer.innerHTML = e.show();
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
    /* eslint-enable */
}

;// ./src/tfc.js
const TF = {
	theme: 'Alpha',
	url: 'tfc.a5w',
	_: {
		saveState: function (refresh) {
			var sl = TF.state.login;
			localStorage.setItem('A5TFState', JSON.stringify(sl));
			if (refresh) {
				if (typeof TF.ui.main._.vb != 'undefined') TF.ui.main._.vb.refresh();
				if (typeof TF.ui.user._.h != 'undefined') TF.ui.user._.h.refresh();
				if (typeof TF.ui.account._.h != 'undefined') TF.ui.account._.h.refresh();
				if (typeof TF.ui.home._.vb != 'undefined') TF.ui.home._.vb.getStructure();
			}
		},
		act: function (t, d) {
			// t: navigate, login, logout
			TF.state.login.activity.unshift({ type: t, data: d, at: Date.now() });
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
				var s = TF.state;
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
						if (typeof TF.ui.main._.vb != 'undefined') TF.ui.main._.vb.refresh();
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
					var a = TF.state.login.activity;
					if (Array.isArray(a)) {
						var al = a.length;
						if (al != 0) {
							TF.request('update-log', { type: 'activity', log: a }).then(function () {
								if (TF.state.login.activity.length == al) TF.state.login.activity = [];
								else TF.state.login.activity.splice(0, al);
							});
						}
					}
				}, 60000);
				TF._.l.initialized = true;
			},
			d: function (d, c) { // login done - set variables
				var s = TF.state;
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
				if (typeof TF.ui.main._.vb != 'undefined') TF.ui.main._.vb.refresh();
				this.ele.style.display = 'none';
				TF._.saveState(true);
				var ra = this.ra;
				var ri, args = null;
				for (var i = 0; i < ra.length; i++) {
					ri = TF._.r.i[ra[i]];
					if (typeof ri != 'undefined') {
						args = ['type=' + ri.type];
						if (typeof ri.data == 'object' && ri.data) args.push('data=' + urlencode(JSON.stringify(ri.data)));
						args.push('token=' + (TF.state.login.token ? urlencode(TF.state.login.token) : ""));
						args = args.join('&');
						ri.xhr.open('POST', TF.url);
						ri.xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
						ri.xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=UTF-8');
						ri.xhr.overrideMimeType('text/html; charset=UTF-8');
						ri.xhr.send(args);
					}
				}
				this.ra = [];
				// clear data
				TF.u.filler._.route.m = false;
				TF.u.filler._.route.q = false;
				var m_ = TF.ui.main._;
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

				if (TF.u.filler._.iEle) TF.u.filler._.iEle.src = '';

				var l = TF.state.login;
				TF._.act('login', { user: l.user, account: { name: l.account.name, id: l.account.id }, token: l.token });
			},
			a: function (t) { // login actions
				var f = this.f;
				var fd = f.data;
				if (t == 'login') {
					var id = fd.userId;
					TF.request('login', {
						userId: id,
						pw: fd.pw
					}).then(function (d) {
						var _l = TF._.l;
						var l = TF.state.login;
						if (d.token) l.token = d.token;
						TF.state.login.user.id = id;
						if (d.step == 'done') _l.d(d, false);
						else if (d.step == 'account') {
							l.state = 'logging-in';
							_l.f.accounts = d.accounts;
							TF.login('account');
						} else if (d.step == 'two-factor') {
							l.state = 'logging-in';
							_l.f.tfSentTo = d.sentTo;
							TF.login('two-factor');
						}
					}).catch(function (d) {
						if (d.error == 'login-id-pw') {
							TF.u.message.show('confirm', 'Error', 'Invalid email or password.');
						}
					});
				} else if (t == 'confirm') {
					TF.request('login-confirm', {
						userId: TF.state.login.user.id,
						account: TF.state.login.account.id,
						pw: fd.confirmPW,
					}).then(function (d) {
						var _l = TF._.l;
						var l = TF.state.login;
						if (d.token) l.token = d.token;
						if (d.step == 'done') _l.d(d, true);
						else if (d.step == 'two-factor') {
							l.state = 'logging-in';
							_l.f.tfSentTo = d.sentTo;
							TF.login('two-factor');
						}
					}).catch(function (d) {
						if (d.error == 'login-id-pw') {
							TF.u.message.show('confirm', 'Error', 'Invalid email or password.');
						}
					});
				} else if (t == 'account') {
					TF.request('login-account', {
						account: fd.account,
					}).then(function (d) {
						var _l = TF._.l;
						var l = TF.state.login;
						if (d.token) l.token = d.token;
						if (d.step == 'done') _l.d(d, false);
						else if (d.step == 'two-factor') {
							_l.f.tfSentTo = d.sentTo;
							TF.login('two-factor');
						}
					});
				} else if (t == 'forgot-pw') {
					var id = fd.userId;
					TF.request('login-forgot-pw', { userId: id }).then(function (d) {
						var _l = TF._.l;
						var l = TF.state.login;
						TF.state.login.user.id = id;
						TF.login('code-reset-pw');
					}).catch(function (d) {
						var _l = TF._.l;
						var l = TF.state.login;
						TF.state.login.user.id = id;
						TF.login('code-reset-pw');
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
					TF.request('login-reset-pw', d).then(function (d) {
						TF.u.message.show('confirm', 'Password Changed', 'Your password was reset.');
						if (d.step == 'login') TF.login();
						else {
							var _l = TF._.l;
							var l = TF.state.login;
							if (d.token) l.token = d.token;
							if (d.step == 'done') _l.d(d, false);
						}

					}).catch(function (d) {
						if (d.error == 'login-code') {
							if (d.type == 'used') TF.u.message.show('confirm', 'Error', 'The code has already been used. Please request a new code to be sent.');
							else if (d.type == 'expired') TF.u.message.show('confirm', 'Error', 'The code has expired. Please request a new code to be sent.');
							else if (d.type == 'invalid') TF.u.message.show('confirm', 'Error', 'Invalid code. Please correct or request a new code to be sent.');
						} else TF.u.message.show('confirm', 'Error', 'Could not reset password.');
					});
				} else if (t == 'tf-submit') {
					TF.request('login-two-factor', {
						type: 'submit',
						code: fd.tfCode,
						sentTo: f.tfSentTo
					}).then(function (d) {
						var _l = TF._.l;
						var l = TF.state.login;
						if (d.token) l.token = d.token;
						if (d.step == 'done') _l.d(d, false);
					}).catch(function (d) {
						if (d.error == 'login-code') {
							TF.u.message.show('confirm', 'Error', 'Invalid two-factor authentication code. Please try again.');
						}
					});;
				} else if (t == 'tf-resend') {
					TF.request('login-two-factor', {
						type: 'resend',
						method: arguments[1]
					}).then(function (d) {
						var _l = TF._.l;
						var l = TF.state.login;
						if (d.token) l.token = d.token;
						_l.f.tfSentTo = d.sentTo;
						_l.f.refresh();
						A5.u.element.cls('TF.LOGIN.TWO-FACTOR.MSG', '+=TFElementIndicate');
					});
				} else if (t == 'tf-resend-choose') {
					TF.u.message.show('choice-cancel', 'Choose method', 'Choose how you would like to perform your two-factor authentication.', {
						options: [
							{ html: 'Email', value: 'email' },
							{ html: 'SMS', value: 'sms' },
							{ html: 'Authenticator App', value: 'app' }
						],
						action: function (t) {
							if (t == 'email' || t == 'sms' || t == 'app') TF._.l.a('tf-resend', t);
						}
					});
				} else if (t == 'create-pw') {
					TF.request('login-check-user', { userId: fd.userId }).then(function (d) {
						var f = TF._.l.f;
						f.data.exists = d.exists;
						f.data.state = 'create-user-pw';
						f.refresh();
					}).catch(function () {

					});
				} else if (t == 'create-user-pw') {
					TF.request('login-create-user', {
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
						var f = TF._.l.f;
						var l = TF.state.login;
						if (d.token) l.token = d.token;
						f.data.state = 'create-account';
						f.refresh();
					}).catch(function () {
						if (d.error == 'login-id-pw') {
							TF.u.message.show('confirm', 'Error', 'Invalid email or password.');
						}
					});
				} else if (t == 'create-account') {
					TF.request('login-create-user', {
						account: fd.account
					}).then(function (d) {
						var l = TF.state.login;
						if (d.token) l.token = d.token;
						if (d.step == 'done') _l.d(d, true);
					}).catch(function () {
						if (d.error == 'login-id-pw') {
							TF.u.message.show('confirm', 'Error', 'Invalid email or password.');
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
														"theme": TF.theme + ":primary",
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
														"theme": TF.theme + ":primary",
														"width": "100%",
														"placeholder": { "text": "Password" },
														"onKeyUp": function (dObj, ele, e) {
															if (e.key == 'Enter') {
																if (this.validate()) TF._.l.a('login');
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
												"theme": TF.theme + ":primary",
												"html": "Sign In",
												"style": "width: 100%;",
												"width": "100%",
												"onClick": function () {
													if (this.validate()) TF._.l.a('login');
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
														"theme": TF.theme + ":primary",
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
														"theme": TF.theme + ":primary",
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
														"theme": TF.theme + ":primary",
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
														"theme": TF.theme + ":primary",
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
														"theme": TF.theme + ":primary",
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
																"theme": TF.theme + ":subtle",
																"html": "Cancel",
																"style": "width: 100%;",
																"width": "100%",
																"onClick": function () {
																	TF.state.login.mode = null;
																	TF.login();
																}
															}
														},
														{
															"type": "button",
															"layout": "tf-simple",
															"control": {
																"theme": TF.theme + ":primary",
																"html": "Next",
																"style": "width: 100%;",
																"width": "100%",
																"onClick": function () {
																	if (this.validate()) {
																		if (!this.data.readTOS || !this.data.readPP) {
																			TF.u.message.show('confirm', 'Error', 'You must read and agree to both the terms of service and private policy,');
																		} else TF._.l.a('create-pw');
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
														"theme": TF.theme + ":primary",
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
														"theme": TF.theme + ":primary",
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
														"theme": TF.theme + ":subtle",
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
														"theme": TF.theme + ":primary",
														"html": "Login",
														"style": "width: 100%;",
														"width": "100%",
														"onClick": function () {
															if (this.validate()) TF._.l.a('create-user-pw');
														}
													}
												},
												{
													"type": "button",
													"layout": "tf-simple",
													"include": function () { return !this.data.exists },
													"control": {
														"theme": TF.theme + ":primary",
														"html": "Create User",
														"style": "width: 100%;",
														"width": "100%",
														"onClick": function () {
															if (this.validate()) TF._.l.a('create-user-pw');
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
													var ls = TF.state.login.state;
													var html = [
														'<div style="text-align: center;"><img src="TFLoginLogo.png"></div>',
														'<div class="TFLoginConfirmMsg">',
														(ls == 'login-expired' ? 'Session has expired. Please confirm login for: ' : 'Confirm login for: '),
														'<strong>' + TF.state.login.user.id + '</strong>',
														'<br/>Account: <strong>' + TF.state.login.account.name + ' <span style="font-family: monospace; font-size: 10px;">(' + TF.state.login.account.id + ')</span></strong>',
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
														"theme": TF.theme + ":primary",
														"width": "100%",
														"placeholder": { "text": "Password" },
														"onKeyUp": function (dObj, ele, e) {
															if (e.key == 'Enter') {
																if (this.validate()) TF._.l.a('confirm');
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
												"theme": TF.theme + ":primary",
												"html": "Confirm Login",
												"style": "width: 100%;",
												"width": "100%",
												"onClick": function () {
													if (this.validate()) TF._.l.a('confirm');
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
														"theme": TF.theme + ":subtle",
														"html": "Logout",
														"style": "width: 100%;",
														"width": "100%",
														"onClick": function () { TF.logout(); }
													}
												},
												{
													"type": "button",
													"layout": "tf-simple",
													"control": {
														"theme": TF.theme + ":subtle",
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
														"theme": TF.theme + ":primary",
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
														"theme": TF.theme + ":subtle",
														"html": "Cancel",
														"style": "width: 100%;",
														"width": "100%",
														"onClick": function () {
															if (TF.state.login.state == 'logged-in') $('TF.LOGIN').style.display = 'none';
															else TF.login();
														}
													}
												},
												{
													"type": "button",
													"layout": "tf-simple",
													"control": {
														"theme": TF.theme + ":primary",
														"html": "Send Code",
														"style": "width: 100%;",
														"width": "100%",
														"onClick": function () {
															if (this.validate()) TF._.l.a('forgot-pw');
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
														'<strong>' + TF.state.login.user.id + '</strong>',
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
														"theme": TF.theme + ":primary",
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
														"theme": TF.theme + ":primary",
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
														"theme": TF.theme + ":subtle",
														"html": "Send New Code",
														"style": "",
														"width": "",
														"onClick": function () { this.data.userId = TF.state.login.user.id; TF._.l.a('forgot-pw'); }
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
														"theme": TF.theme + ":primary",
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
														"theme": TF.theme + ":primary",
														"width": "100%",
														"placeholder": { "text": "Confirm new password" },
														"onKeyUp": function (dObj, ele, e) {
															if (e.key == 'Enter') {
																if (this.validate()) TF._.l.a('reset-pw');
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
														"theme": TF.theme + ":subtle",
														"html": "Cancel",
														"style": "width: 100%;",
														"width": "100%",
														"onClick": function () {
															if (TF.state.login.state == 'logged-in') $('TF.LOGIN').style.display = 'none';
															else TF.login();
														}
													}
												},
												{
													"type": "button",
													"layout": "tf-simple",
													"control": {
														"theme": TF.theme + ":primary",
														"html": "Change Password",
														"style": "width: 100%;",
														"width": "100%",
														"onClick": function () {
															if (this.validate()) TF._.l.a('reset-pw');
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
														'<strong>' + TF.state.login.user.id + '</strong>',
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
															if (this.validate()) TF._.l.a('account');
														},
														"theme": TF.theme + ":primary",
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
														"theme": TF.theme + ":subtle",
														"html": "Logout",
														"style": "width: 100%;",
														"width": "100%",
														"onClick": function () { TF.login(); }
													}
												},
												{
													"type": "button",
													"layout": "tf-simple",
													"control": {
														"theme": TF.theme + ":primary",
														"html": "Select Account",
														"style": "width: 100%;",
														"width": "100%",
														"onClick": function () {
															if (this.validate()) TF._.l.a('account');
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
														"theme": TF.theme + ":primary",
														"width": "100%",
														"style": "text-align: center;",
														"placeholder": { "text": "Authentication code" },
														"onKeyUp": function (dObj, ele, e) {
															if (e.key == 'Enter') {
																if (this.validate()) TF._.l.a('tf-submit');
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
												"theme": TF.theme + ":primary",
												"html": "Submit Code",
												"style": "width: 100%;",
												"width": "100%",
												"onClick": function () {
													if (this.validate()) TF._.l.a('tf-submit');
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
														"theme": TF.theme + ":subtle",
														"html": "Resend code",
														"style": "width: 100%;",
														"width": "100%",
														"onClick": function () { TF._.l.a('tf-resend', 'default'); }
													}
												},
												{
													"type": "button",
													"layout": "tf-simple",
													"control": {
														"theme": TF.theme + ":subtle",
														"html": "Use a different method",
														"style": "width: 100%;",
														"width": "100%",
														"onClick": function () { TF._.l.a('tf-resend-choose', 'default'); }
													}
												}
											]
										},
										{
											"type": "button",
											"layout": "tf-simple",
											"container": { "style": "text-align: left;" },
											"control": {
												"theme": TF.theme + ":subtle",
												"html": "Logout",
												"onClick": function () { TF.login(); }
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
						theme: TF.theme
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
		if (!TF._.beta() && type == 'create-user') {
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
		TF.u.message.show('confirm-cancel', 'Logout', 'Are you sure you want to logout?', {
			action: function (v) {
				if (v == 'confirm') {
					var l = TF.state.login;
					TF._.act('logout', { user: l.user, account: { name: l.account.name, id: l.account.id }, token: l.token });
					A5.u.object.assign(TF.state.login, {
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
					TF._.saveState();
					location.href = location.href;
				}
			}
		});
	},

	// request
	request: function (type, data) {
		return new Promise(function (resolve, reject) {
			const td = TF._.r.t[type];
			if (typeof td == 'undefined') {
				// error - not a valid type
				reject({ error: 'request-type', type: type });
			} else {
				const url = TF.url;
				const uid = Date.now();

				var args = ['type=' + type];
				if (typeof data == 'object' && data) args.push('data=' + urlencode(JSON.stringify(data)));
				args.push('token=' + (TF.state.login.token ? urlencode(TF.state.login.token) : ""));
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
							delete TF._.r.i[uid];
						}
						if (res) {
							if (!res.success) {
								// problem on server
								if (res.data?.error == 'login-expired') {
									TF.state.login.state = 'login-expired';
									TF.login('confirm');
									TF._.l.ra.push(uid);
								} else if (res.data?.error == 'login-required') {
									TF.state.login.state = 'logged-out';
									TF.login();
									TF._.l.ra.push(uid);
								} else {
									reject(res.data);
									delete TF._.r.i[uid];
									if (res.data?.error == 'custom') TF.u.message.show('confirm', res.data.message.title, res.data.message.text, { icon: 'warning' });
									else if (res.data?.error == 'permission-denied' || res.data?.error == 'invalid-data' || res.data?.error == 'login-account-denied') {
										var msg = null;
										var ed = TF._.r.e;
										if (res.data.error == 'permission-denied') msg = ed.pd.generic;
										else if (res.data.error == 'login-account-denied') {
											msg = ed.lad.generic;
											if (typeof ed.lad[res.data?.type] == 'object') msg = ed.lad[res.data.type];
											TF.login();
										} else {
											// get the type
											var edt = A5.u.object.get(ed.id, res.data?.type);
											// get the issue
											if (edt) msg = A5.u.object.get(edt, res.data?.issue);
										}
										if (msg) TF.u.message.show('confirm', msg.title, msg.text, { icon: 'warning' });
									}
								}
							} else {
								resolve(res.data);
								delete TF._.r.i[uid];
							}
						}
					} else {
						// no success on server - preform resend?
					}
				};
				xhr.onerror = function (err) {
					// callback error
					reject({ error: 'request-response', type: 'server', data: err });
					delete TF._.r.i[uid];
				};
				TF._.r.i[uid] = { type: type, data: data, def: td, count: 0, xhr: xhr };

				if ((TF.state.login.state == 'login-expired' || TF.state.login.state == 'logged-out') && !(type.indexOf('login') == 0 || (type == 'update-log' && data?.type == 'activity'))) {
					TF.login((TF.state.login.state == 'login-expired' ? 'confirm' : null));
					TF._.l.ra.push(uid);
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
						var cc = TF.u.code.lang[c.lang];
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
								A5.buttons.html('TF.JSON.EDIT.VALIDATE', { theme: TF.theme, html: 'Validate', icon: 'svgIcon=#alpha-icon-exclamationTriangle:icon' }),
								A5.buttons.html('TF.JSON.EDIT.REFORMAT', { theme: TF.theme, html: 'Reformat', icon: 'svgIcon=#alpha-icon-textAlignLeft:icon' }),
								'</div>',
								'<div>',
								A5.buttons.html('TF.JSON.EDIT.SAVE', { theme: TF.theme, className: 'button buttonConfirm buttonIcon', icon: 'svgIcon=#alpha-icon-save:icon' }),
								A5.buttons.html('TF.JSON.EDIT.CANCEL', { theme: TF.theme, className: 'button buttonDeny buttonIcon', icon: 'svgIcon=#alpha-icon-x:icon' }),
								'</div>',
								'</div>',
								'<div id="TF.JSON.EDIT.EDITOR" style="flex: 1 1 auto"></div>',
								'</div>'
							].join('');
							document.body.appendChild(ele);

							$e.add('TF.JSON.EDIT.CANCEL', 'click', function () {
								TF.u.code.editors.json._.ele.style.display = 'none';
								TF.u.code.editors.json._.h = null;
							});
							$e.add('TF.JSON.EDIT.SAVE', 'click', function () {
								var json = TF.u.code.editors.json._.je.value;
								var res = TF.u.code.lang.json.validate(json);
								if (res !== true) {
									TF.u.message.show('confirm', 'Error', res.message);
								} else {
									var d = JSON.parse(json);
									var h = TF.u.code.editors.json._.h;
									if (typeof h == 'function') h(d);
									else if (typeof h == 'object' && typeof h.populate == 'function') h.populate(d);
									TF.u.code.editors.json._.ele.style.display = 'none';
									TF.u.code.editors.json._.h = null;
								}
							});
							$e.add('TF.JSON.EDIT.VALIDATE', 'click', function (e) {
								var json = TF.u.code.editors.json._.je.value;
								var res = TF.u.code.lang.json.validate(json);
								if (res !== true) {
									TF.u.message.show('confirm', 'Error', res.message);
								}
							});
							$e.add('TF.JSON.EDIT.REFORMAT', 'click', function (e) {
								var json = TF.u.code.editors.json._.je.value;
								json = TF.u.code.lang.json.reformat(json);
								TF.u.code.editors.json._.je.setValue(json);
							});

							var je = new TF.u.code.Editor('TF.JSON.EDIT.EDITOR', {
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
							save: A5.buttons.html('', { theme: TF.theme, className: 'button buttonConfirm buttonIcon', icon: 'svgIcon=#alpha-icon-save:icon' }),
							cancel: A5.buttons.html('', { theme: TF.theme, className: 'button buttonDeny buttonIcon', icon: 'svgIcon=#alpha-icon-x:icon' })
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
								TF._.act('navigate', { context: this.context, target: ntv });
								this.refresh();
							}
						}
					},
					'tab-action': {
						selectable: false,
						onClick: function (v, ia) {
							TF.u.flyout.hide();
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
								theme: TF.theme + ':confirm',
								html: '[[[text]]]'
							}, 'a5-item=button:confirm|[[[i]]]'),
							deny: A5.buttons.html('TF.MSG.B.[[[i]]].DENY', {
								theme: TF.theme + ':deny',
								html: '[[[text]]]'
							}, 'a5-item=button:deny|[[[i]]]'),
							cancel: A5.buttons.html('TF.MSG.B.[[[i]]].CANCEL', {
								theme: TF.theme + ':subtle',
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
													theme: TF.theme + ':confirm',
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
									TF.u.message.hide(di.id, false);
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

				if (typeof s.duration == 'number') setTimeout(function () { TF.u.message.hide(res); }, s.duration);

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
						if (TF.u.message._.vb.data.length == 0) this.parentNode.style.display = 'none';
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
							TF.u.flyout.show(ele, m, { direction: 'vertical' });
						} else {
							TF.u.flyout.hide();
						}
					},
					shown: false,
					show: function () {
						var _f = TF.u.filler._;
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
							A5.u.element.transition(TF.u.filler._.rEle, {
								from: { transform: 'translateY(0%)' },
								to: { transform: 'translateY(-100%)' },
								after: { display: 'none' }
							}, function () { TF.u.filler._.lEle.style.display = 'none'; });
							this.shown = false;
						}
					},
					set: function () {
						var _f = TF.u.filler._;
						var p = _f.route.current;
						if (!p) p = TF.state.login.user.id;
						_f.iEle.contentWindow.postMessage({ cmd: 'setPersonFiller', person: p }, "*");
					}
				},
				jwtMsg: function (args) {
					var l = TF.state.login;
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
					var f = TF.u.filler;
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
								TF.u.filler._.lEle.style.display = 'none';
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
					TF._.act('filler', { action: 'cancel', mode: this.m, id: this.id });
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
						A5.buttons.html('TF.FILLER.ROUTE', { theme: TF.theme + ':subtle', html: A5.u.icon.html('svgIcon=#alpha-icon-routeEnd:icon', 'id="TF.FILLER.ROUTE.ICON"') + ' <span id="TF.FILLER.ROUTE.TEXT">Route</span>' }),
						A5.buttons.html('TF.FILLER.COMMIT', { theme: TF.theme + ':confirm', html: 'Save', icon: 'svgIcon=#alpha-icon-save:icon' }),
						A5.buttons.html('TF.FILLER.CANCEL', { theme: TF.theme + ':deny', html: 'Cancel', icon: 'svgIcon=#alpha-icon-x:icon' }),
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

					$e.add('TF.FILLER.COMMIT', 'click', function () { TF.u.filler.commit(); });
					$e.add('TF.FILLER.CANCEL', 'click', function () { TF.u.filler.cancel(); });
					$e.add('TF.FILLER.ROUTE', 'click', function () {
						var r = TF.u.filler._.route;
						if (r.shown) r.hide();
						else {
							TF.u.flyout.hide();
							r.show();
						}
					});
					$e.add('TF.FILLER.ROUTE', 'mouseenter', function () { TF.u.filler._.route.tip(this, true); });
					$e.add('TF.FILLER.ROUTE', 'mouseleave', function () { TF.u.filler._.route.tip(this, false); });

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
												click: function () { TF.u.filler._.route.m = false; }
											}]
										},
										data: {
											src: function () {
												if (TF.u.filler._.route.m) return TF.u.filler._.route.m;
												else {
													TF.request('get-members', { manage: false }).then(function (d) {
														var ld = [];
														var di = null
														for (var i = 0; i < d.members.length; i++) {
															di = d.members[i];
															ld.push({
																html: '<div class="listItemPartMain">' + di.name + '</div><div class="listItemPartSub">' + di.userId + '</div>',
																value: di.userId
															});
														}
														TF.u.filler._.route.m = { src: ld };
														TF.u.filler._.route.f.ctrls.picker.update('data', ld);
													}).catch(function () {
														TF.u.filler._.route.f.ctrls.picker.hide();
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
														if (TF.u.filler._.route.q) return TF.u.filler._.route.q;
														else {
															TF.request('get-preferences', { type: 'device-assets-options' }).then(function (d) {
																var qd = A5.u.object.get(d.data, 'queues.listOfQueues');
																if (!Array.isArray(qd)) qd = [];
																TF.u.filler._.route.q = { src: qd };
																TF.u.filler._.route.f.refresh();
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
														theme: TF.theme + ':subtle',
														html: 'Clear Selection',
														onClick: function () { this.update('queue', []); }
													}
												},
												{
													type: 'button',
													layout: 'tf-simple',
													control: {
														theme: TF.theme + ':subtle',
														html: 'Refresh Queues List',
														onClick: function () {
															TF.u.filler._.route.q = false;
															TF.u.filler._.route.f.refresh();
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
													var _f = TF.u.filler._;
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
												theme: TF.theme + ':subtle',
												style: 'width: 100%;',
												onClick: function () {
													TF.u.filler._.route.hide();
												}
											}
										}
									]
								}
							]
						}
					}, {}, { theme: TF.theme, item: { label: { style: '' }, description: { style: '' } } });

					this._.ele = ele;
					this._.tEle = $('TF.FILLER.TITLE');
					this._.lEle = $('TF.FILLER.IFRAME.LOCK');
					this._.iEle = $('TF.FILLER.IFRAME');
					this._.rEle = $('TF.FILLER.ROUTE.PANEL');
					window.addEventListener("message", this._.msg, false);
				}
				var bEle = $('TF.FILLER.ROUTE');
				if (TF.state.login.account.member.ui.allow.manage) bEle.style.display = '';
				else bEle.style.display = 'none';
				this._.dirty = false;
				this._.route.current = this._.route.default;
				this._.setState();

				if (this._.iEle.src.indexOf('QuickLink.html') != -1) this._.iEle.contentWindow.postMessage(this._.jwtMsg('m=n&a=' + TF.state.login.account.id + '&d=' + id + '&parentjwt&postmessage=Y&closemsg=Created new form instance.&postmessageprefix=fillerCentral&windowmargin=0px auto&askonleave=N'), "*");
				else this._.iEle.src = 'QuickLink.html?m=n&a=' + TF.state.login.account.id + '&d=' + id + '&parentjwt&postmessage=Y&closemsg=Created new form instance.&postmessageprefix=fillerCentral&windowmargin=0px auto&askonleave=N';
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

				TF._.act('filler', { action: 'start', mode: m, id: id });
			},

			commit: function () {
				this._.iEle.contentWindow.postMessage({ cmd: 'saveFiller' }, "*");
				TF._.act('filler', { action: 'commit', mode: this._.m, id: this._.id });
			},
			cancel: function () {
				if (this._.ele) {
					if (this._.dirty) {
						TF.u.message.show('confirm-cancel', 'Discard Form', 'Are you sure you want to discard the current form?', {
							action: function (a) {
								if (a == 'confirm') TF.u.filler._.cancel();
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
							return TF.state.ui.editing.json.forms;
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
										TF.u.code.editors.json.edit(this.data, this);
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


				const sui = TF.state.ui;
				const sl = TF.state.login;


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
				if (TF.state.ui.help.mode != 'pinned') {
					html.push('<div id="' + idp + 'HELP" a5-item="help" class="TFHeadHelp TFHeadButton">');
					html.push(iconHelp + '<br/>Help');
					html.push('</div>');
				}
				html.push('</div>');


				return html.join('');
			},
			action: function (a, d, f) {
				var pp = 'TRANSFORM_MAIN_NAV:';
				var vb = TF.ui.main._.vb;
				var pUX = TF.ui.main._.ux;
				if (a == 'home') {
					vb.setTab('home');
				} else if (a.indexOf('dashboard') == 0) {
					var _d = TF.ui.main._.d;
					var ux = _d.ux;
					if (ux && !f) {
						var s = pUX.sendMessageToChild('FORMDASHBOARD', { type: "query", cmd: "uistate" });
						if (s.busy) {
							TF.u.message.show('confirm-deny', 'Dashboard', 'The dashboard is currently in a unsaved state. Would you like to overwrite any unsaved data?', {
								action: function (ba) {
									if (ba == 'confirm') TF.ui.main.action(a, d, true);
									else TF.ui.main._.vb.setTab('dashboard');
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
						TF.u.message.show('confirm', 'Dashboard', 'Create new dashboard.');
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
						var _m = TF.ui.main._.m;
						var ux = _m.ux;
						if (ux) {
							if (!f) {
								var s = pUX.sendMessageToChild('FORMBROWSER', { type: "query", cmd: "uistate" });
								if (s.busy) {
									TF.u.message.show('confirm-deny', 'Manager', 'The form manger is currently in a unsaved state. Would you like to overwrite any unsaved data?', {
										action: function (ba) {
											if (ba == 'confirm') TF.ui.main.action(a, d, true);
											else TF.ui.main._.vb.setTab('manage');
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
						var _b = TF.ui.main._.b;
						var ux = _b.ux;
						if (ux) {
							if (!f) {
								var s = pUX.sendMessageToChild('FORMBUILDER', { type: "query", cmd: "uistate" });
								if (s.busy) {
									TF.u.message.show('confirm-deny', 'Designer', 'The form designer is currently in a unsaved state. Would you like to overwrite any unsaved data?', {
										action: function (ba) {
											if (ba == 'confirm') TF.ui.main.action(a, d, true);
											else TF.ui.main._.vb.setTab('designer');
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
					var _b = TF.ui.main._.b;
					if (d.create) {
						var ux = _b.ux;
						if (ux) {
							if (!f) {
								var s = pUX.sendMessageToChild('FORMBUILDER', { type: "query", cmd: "uistate" });
								if (s.busy) {
									TF.u.message.show('confirm-deny', 'Designer', 'The form designer is currently in a unsaved state. Would you like to overwrite any unsaved data?', {
										action: function (ba) {
											if (ba == 'confirm') TF.ui.main.action(a, d, true);
											else TF.ui.main._.vb.setTab('designer');
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
								theme: TF.theme,
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
									var p = TF.ui.main._.ux.panelGet('TRANSFORM_HOME');
									p.lock('', true);
								},
								onHide: function () {
									var p = TF.ui.main._.ux.panelGet('TRANSFORM_HOME');
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
									back: A5.buttons.html(id + '.COPY.BACK', { theme: TF.theme + ':subtle', className: 'button buttonSubtle buttonIcon', icon: 'svgIcon=#alpha-icon-chevronLeft:icon' }, 'a5-item="back"'),
									cancel: A5.buttons.html(id + '.CANCEL', { theme: TF.theme + ':subtle', className: 'button buttonSubtle buttonIcon', icon: 'svgIcon=#alpha-icon-chevronLeft:icon' }, 'a5-item="cancel"'),
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
												var ft = TF.ui.home._.vb.data.forms.types;
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
												if (TF._.beta()) {
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
											if (v == 'blank') TF.ui.main.action('form-create', { create: true, from: 'blank' });
											else if (v == 'template') TF.ui.main.action('form-create', { create: true, from: 'template' });
											else if (v == 'copy') TF.ui.main.action('form-create', { create: true, from: 'copy', id: ia });
											else if (v == 'ai') TF.ui.ai.form.start();
											TF.ui.main._.b.t.hide();

										}
									},
									'copy': {
										onClick: function () {
											this.data.mode = 'copy';
											this.refresh();
											TF.ui.main._.b.t.refresh();
										}
									},
									'back': {
										onClick: function () {
											this.data.mode = 'main';
											this.refresh();
											TF.ui.main._.b.t.refresh();
										}
									},
									'cancel': {
										onClick: function () {
											TF.ui.main._.b.t.hide();
										}
									}
								}
							});

						}
						_b.tVB.populate({ mode: 'main' });
						_b.t.show(TF.ui.home._.vb.contId + '.FORMS.CREATE');
					}
				} else if (a == 'form-fill') {
					TF.u.filler.start('create', d.id, {
						onCommit: function (m, id, s) {
							if (m == 'create') {
								var vb = TF.ui.home._.vb;
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
							A5.buttons.html('TF.AI.FORM.SAVE', { theme: TF.theme, html: 'Save', icon: 'svgIcon=#alpha-icon-save:icon' }),
							A5.buttons.html('TF.AI.FORM.CLOSE', { theme: TF.theme + ':deny', html: 'Cancel', icon: 'svgIcon=#alpha-icon-x:icon' }, 'onclick="this.parentNode.parentNode.parentNode.style.display = \'none\';"'),
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
							TF.ui.ai.form._.ux
							var pUX = TF.ui.main._.ux;
							var cmds = pUX.sendMessageToChild('TF_AI_FB', { type: "action", cmd: "getDefinition" });
							if (cmds) {
								// DLG1_DlgObj.getControl('formslist')._data[0].formdata
								TF.u.message.show('prompt-cancel', 'Save Form', 'Please enter the ID you would like to use for the form.', {
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
											TF.u.message.show('wait', 'Creating Form', 'Please wait while the form is created.', { id: 'ai-form-save-wait' });
											TF.request('update-form-defs', { create: [fd] }).then(function () {
												TF.u.message.hide('ai-form-save-wait');
												$('TF.AI.FORM').style.display = 'none';
												TF.ui.home._.vb.getStructure();
											}).catch(function () {
												TF.u.message.hide('ai-form-save-wait');
												TF.u.message.show('confirm', 'Error', 'Form was unable to be saved.');
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
						TF.ui.ai.form._.ux = ux;
						var pId = ux.panelGetId('AI_BUILDER_PREVIEW', 'body');
						var ele = $(pId);
						var html = [
							'<div><iframe id="TF.AI.FORM.BUILDER.FILLER" style=""></iframe></div>',
							'<div class="TFAIBuilderPreviewShownHide" style="position: absolute; top: 5px; left: 5px;">',
							A5.buttons.html('TF.AI.FORM.BUILDER.PREVIEW.HIDE', { theme: TF.theme + ':subtle', className: 'button buttonSubtle buttonIcon', icon: 'svgIcon=#alpha-icon-x:icon' }),
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
							A5.buttons.html('TF.AI.FORM.BUILDER.REVERT', { theme: TF.theme, layout: 'text icon', html: 'Revert', icon: 'svgIcon=#alpha-icon-triUpSolid:icon', style: 'text-align: right; width: 100%;' }),
							'</div>',
							'<div>',
							A5.buttons.html('TF.AI.FORM.BUILDER.RESTORE', { theme: TF.theme, layout: 'text icon', html: 'Restore', icon: 'svgIcon=#alpha-icon-triDownSolid:icon', style: 'text-align: right; width: 100%;' }),
							'</div>',
							'</div>',
							'<div style="flex: 1 1 auto;">',
							'<textarea id="TF.AI.FORM.BUILDER.INPUT" class="edit" style="resize: none; width: 100%; height: 100%; box-sizing: border-box;" placeholder="Type your instructions here..." onkeydown="if(!event.shiftKey && event.key == \'Enter\' && this.value.trim() != \'\'){ $e.stopEvent(event); doCreateForm(); }"></textarea>',
							'</div>',
							'<div>',
							A5.buttons.html('TF.AI.FORM.BUILDER.SEND', { theme: TF.theme, html: 'Send', icon: 'svgIcon=#alpha-icon-paperPlaneSolid:icon', style: 'height: 100%;' }, 'onclick="if($(\'TF.AI.FORM.BUILDER.INPUT\').value.trim() != \'\') doCreateForm();"'),
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
							A5.buttons.html('TF.AI.FORM.BUILDER.PREVIEW.PHONE', { theme: TF.theme + ':subtle', html: 'Phone', icon: 'svgIcon=#alpha-icon-devicePhone:icon' }),
							A5.buttons.html('TF.AI.FORM.BUILDER.PREVIEW.TABLET', { theme: TF.theme + ':subtle', html: 'Tablet', icon: 'svgIcon=#alpha-icon-deviceTablet:icon' }),
							'&nbsp;',
							A5.buttons.html('TF.AI.FORM.BUILDER.PREVIEW.ORIENTATION', { theme: TF.theme, className: 'button buttonSubtle buttonIcon', html: A5.u.icon.html('svgIcon=#alpha-icon-arrowCounterClockwise:icon', 'id="TF.AI.FORM.BUILDER.PREVIEW.ORIENTATION.ICON"') }),
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
							var p = TF.ui.ai.form.builder.preview;
							if (p.active.device != 'phone') {
								p.active.device = 'phone';
								p.refresh();
							}
						});
						$e.add('TF.AI.FORM.BUILDER.PREVIEW.TABLET', A5.d.evnts.click, function () {
							var p = TF.ui.ai.form.builder.preview;
							if (p.active.device != 'tablet') {
								p.active.device = 'tablet';
								p.refresh();
							}
						});
						$e.add('TF.AI.FORM.BUILDER.PREVIEW.ORIENTATION', A5.d.evnts.click, function () {
							var p = TF.ui.ai.form.builder.preview;
							p.active.landscape = !p.active.landscape;
							p.refresh();
						});

						TF.ui.ai.form._.p = ux.panelGet('AI_BUILDER');

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
							var p = TF.ui.ai.form._.p;

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
				if (mode == TF.state.ui.help.mode) mode = 'docked';
				var ux = TF.ui.main._.ux;
				var uis = TF.state.ui;
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
				TF.ui.main._.vb.refresh();
			},
			html: function (vb) {
				var html = [];
				html.push('<div class="TFHelpHeader">');
				html.push(A5.buttons.html('TF.HELP.PIN', { theme: TF.theme, className: 'button buttonSubtle buttonIcon', icon: (TF.state.ui.help.mode == 'pinned' ? 'svgIcon=#alpha-icon-unpin:icon' : 'svgIcon=#alpha-icon-pin:icon') }, 'a5-item="mode:pinned"'));
				html.push('<div style="flex: 1 1 auto;">');
				html.push('<input class="editPrimary" style="width: 100%; box-sizing: border-box;" placeholder="Search help..."/>');
				html.push('</div>');
				html.push(A5.buttons.html('TF.HELP.SEARCH.DO', { theme: TF.theme, className: 'button buttonSubtle buttonIcon', icon: 'svgIcon=#alpha-icon-magGlass:icon' }, 'a5-item="search:execute"'));
				html.push(A5.buttons.html('TF.HELP.SEARCH.CLEAR', { theme: TF.theme, className: 'button buttonSubtle buttonIcon', icon: 'svgIcon=#alpha-icon-x:icon' }, 'a5-item="search:clear"'));
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
				if (typeof TF.ui.user._.h == 'undefined') {
					var p = ux.panelGet('TRANSFORM_USER_PREFERENCES');
					TF.u.panels.lockable(p);
					ux.userPreferencesForm = new A5.FormBox(p.getPanelId('body'), TF.forms.userPreferences, {}, {
						theme: TF.theme,
						item: {
							label: { style: '' },
							description: { style: '' }
						},
						onStateChange: function (t, d) {
							if (t == 'isDirty') {
								TF.ui.user._.h.setTabDirty('preferences', d.value);
							}
						}
					});
					var p = ux.panelGet('TRANSFORM_USER_PROFILE');
					TF.u.panels.lockable(p);
					ux.userProfileForm = new A5.FormBox(p.getPanelId('body'), TF.forms.userProfile, {}, {
						theme: TF.theme,
						item: {
							label: { style: '' },
							description: { style: '' }
						},
						onStateChange: function (t, d) {
							if (t == 'isDirty') {
								TF.ui.user._.h.setTabDirty('profile', d.value);
							}
						}
					});

					var p = ux.panelGet('TRANSFORM_USER');
					var ele = $(p.getPanelId('header'));
					ele.className = 'TFDockPanelHeader';
					TF.ui.user._.h = new A5.ViewBox(ele.id, {
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
										TF.request('get-preferences', { type: 'user' }).then(function (d) {
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
										TF.request('set-preferences', { type: 'user', data: ux.userPreferencesForm.data }).then(function (d) {
											ux.userPreferencesForm.setDirty(false);
											p.unlock();
										}).catch(function () {
											p.unlock();
										});
									} else if (t == 'cancel') {
										p.lock('Loading preferences...');
										TF.request('get-preferences', { type: 'user' }).then(function (d) {
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
										TF.request('get-profile', { type: 'user' }).then(function (d) {
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
										TF.request('set-profile', { type: 'user', data: fd }).then(function (d) {
											ux.userProfileForm.setDirty(false);
											TF.state.login.user.name = ux.userProfileForm.data.name;
											TF._.saveState(true);
											p.unlock();
										}).catch(function () {
											p.unlock();
										});
									} else if (t == 'cancel') {
										p.lock('Loading profile...');
										TF.request('get-profile', { type: 'user' }).then(function (d) {
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
						setTabDirty: TF.u.docks.tabs.setTabDirty,
						getTab: TF.u.docks.tabs.getTab,
						icons: {
							status: A5.u.icon.html('svgIcon=#alpha-icon-circleSolid:icon {width: 10px; height: 10px;}')
						},
						buttons: {
							login: [
								'<div style="display: flex; flex-direction: row;">',
								A5.buttons.html('TFUserButtonConfirmLogin', { theme: TF.theme + ':confirm', html: 'Confirm Login', icon: 'svgIcon=#alpha-icon-checkShield:icon' }, 'a5-item="confirmLogin"'),
								'<div style="flex: 1 1 auto;"></div>',
								A5.buttons.html('TFUserButtonLogout', { theme: TF.theme + ':deny', html: 'Logout', icon: 'svgIcon=#alpha-icon-exit:icon' }, 'a5-item="logout"'),
								'</div>'
							].join(''),
							edit: A5.buttons.html('', { theme: TF.theme, className: 'button buttonSubtle buttonIcon', icon: 'svgIcon=#alpha-icon-edit:icon' }),
							commit: A5.buttons.html('', { theme: TF.theme, className: 'button buttonConfirm buttonIcon', icon: 'svgIcon=#alpha-icon-check:icon' }),
							cancel: A5.buttons.html('', { theme: TF.theme, className: 'button buttonDeny buttonIcon', icon: 'svgIcon=#alpha-icon-x:icon' })
						},
						layout: 'main',
						layouts: {
							'main': {
								type: 'static',
								html: function () {
									var html = [];
									var d = this.data;
									var hObj = ux.getControl('TRANSFORM_MASTHEAD');
									var ed = TF.state.login.expires;
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
									html.push(TF.u.docks.tabs.html(this.contId, d.tabs, d.tab));
									return html.join('');
								}
							}
						},
						items: {
							'confirmLogin': {
								selectable: false,
								onClick: function () {
									TF.login('confirm');
								}
							},
							'logout': {
								selectable: false,
								onClick: function () {
									TF.logout();
								}
							},
							'tab': TF.u.docks.tabs.items['tab'],
							'tab-action': TF.u.docks.tabs.items['tab-action']
						}
					});
					p.setDisplay('header', true);
				} else {
					TF.ui.user._.h.refresh();
				}
				TF.ui.user._.h.getTab().onShow();
			}
		},

		// account dock UI
		account: {
			_: {},
			init: function (ux) {
				if (typeof TF.ui.account._.h == 'undefined') {
					var p = ux.panelGet('TRANSFORM_ACCOUNT_PREFERENCES');
					TF.u.panels.lockable(p);
					ux.accountPreferencesForm = new A5.FormBox(p.getPanelId('body'), TF.forms.accountPreferences, {}, {
						theme: TF.theme,
						item: {
							label: { style: '' },
							description: { style: '' }
						},
						onStateChange: function (t, d) {
							if (t == 'isDirty') {
								TF.ui.account._.h.setTabDirty('preferences', d.value);
							}
						}
					});
					p = ux.panelGet('TRANSFORM_ACCOUNT_PROFILE');
					TF.u.panels.lockable(p);
					ux.accountProfileForm = new A5.FormBox(p.getPanelId('body'), TF.forms.accountProfile, {}, {
						theme: TF.theme,
						item: {
							label: { style: '' },
							description: { style: '' }
						},
						onStateChange: function (t, d) {
							if (t == 'isDirty') {
								TF.ui.account._.h.setTabDirty('profile', d.value);
							}
						}
					});
					p = ux.panelGet('TRANSFORM_ACCOUNT_BILLINGANDUSAGE');
					TF.u.panels.lockable(p);

					p = ux.panelGet('TRANSFORM_ACCOUNT');
					var ele = $(p.getPanelId('header'));
					ele.className = 'TFDockPanelHeader';
					TF.ui.account._.h = new A5.ViewBox(ele.id, {
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
										TF.request('get-preferences', { type: 'account' }).then(function (d) {
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
										TF.request('set-preferences', { type: 'account', data: ux.accountPreferencesForm.data }).then(function (d) {
											ux.accountPreferencesForm.setDirty(false);
											p.unlock();
										}).catch(function () {
											p.unlock();
										});
									} else if (t == 'cancel') {
										p.lock('Loading preferences...');
										TF.request('get-preferences', { type: 'account' }).then(function (d) {
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
										TF.request('get-profile', { type: 'account' }).then(function (d) {
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
										TF.request('set-profile', { type: 'account', data: d }).then(function () {
											TF.state.login.account.name = d.name;
											TF._.saveState(true);
											p.unlock();
											TF.ui.account._.h.setTabDirty('profile', false);
										}).catch(function () {
											p.unlock();
										});
									} else if (t == 'cancel') {
										TF.ui.members.list._.l.getMembersData();
									} else if (t == 'discard') {
										TF.ui.account._.h.setTabDirty('profile', false);
									}
								}
							},
							{
								html: 'Billing & Usage', value: 'billingAndUsage',
								onShow: function () {
									ux.panelSetActive('TRANSFORM_ACCOUNT_BILLINGANDUSAGE');
									var p = ux.panelGet('TRANSFORM_ACCOUNT_BILLINGANDUSAGE');
									p.lock('Loading billing & usage...');
									TF.request('get-plan', {}).then(function (d) {
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
										var l = TF.ui.members.list._.l;
										if (l) l.getMembersData();
									}
								},
								action: function (t) {
									var po = ux.getChildObject('members');
									var p = po.panelGet('TRANSFORM_ACCOUNT_MEMBERS');
									if (t == 'commit') {
										p.lock('Saving members...');
										var d = TF.ui.members.list._.l.generateCRUD();
										TF.request('update-members', d).then(function (d) {
											TF.ui.members.list._.l.getMembersData();
											p.unlock();
										}).catch(function () {
											p.unlock();
										});
									} else if (t == 'cancel') {
										TF.ui.members.list._.l.getMembersData();
									} else if (t == 'discard') {
										TF.ui.account._.h.setTabDirty('members', false);
									}
								}
							}
						]
					}, {
						context: 'account',
						setTabDirty: TF.u.docks.tabs.setTabDirty,
						getTab: TF.u.docks.tabs.getTab,
						icons: {
							dirty: A5.u.icon.html('svgIcon=#alpha-icon-circleSolid:icon {width: 7px; height: 7px;}')
						},
						buttons: {
							edit: A5.buttons.html('', { theme: TF.theme, className: 'button buttonSubtle buttonIcon', icon: 'svgIcon=#alpha-icon-edit:icon' }),
							commit: A5.buttons.html('', { theme: TF.theme, className: 'button buttonConfirm buttonIcon', icon: 'svgIcon=#alpha-icon-check:icon' }),
							cancel: A5.buttons.html('', { theme: TF.theme, className: 'button buttonDeny buttonIcon', icon: 'svgIcon=#alpha-icon-x:icon' })
						},
						layout: 'main',
						layouts: {
							'main': {
								type: 'static',
								html: function () {
									var d = this.data;
									return TF.u.docks.tabs.html(this.contId, d.tabs, d.tab);
								}
							}
						},
						items: {
							'tab': TF.u.docks.tabs.items['tab'],
							'tab-action': TF.u.docks.tabs.items['tab-action']
						}
					});
					p.setDisplay('header', true);
				} else {
					TF.ui.account._.h.refresh();
				}
				TF.ui.account._.h.getTab().onShow();
			}
		},

		members: {
			init: function (ux) {
				var p = ux.panelGet('TRANSFORM_ACCOUNT_MEMBERS');
				TF.u.panels.lockable(p);
			},
			list: {
				_: {},
				init: function (ux, l) {
					var html = [];
					html.push('<div style="display: flex; flex-direction: row;">');
					html.push('<div style="display: flex; flex-direction: row; width: 385px;">');
					html.push(A5.buttons.html('TF.MEMBERS.SELECTALL', { theme: TF.theme + ':subtle', className: 'button buttonSubtle buttonIcon', html: A5.u.icon.html('svgIcon=#alpha-icon-circle:icon') + A5.u.icon.html('svgIcon=#alpha-icon-checkCircle:icon') + A5.u.icon.html('svgIcon=#alpha-icon-checkCircleBorder:icon') }));
					html.push(A5.buttons.html('TF.MEMBERS.ADD', { theme: TF.theme, style: 'flex: 1 1 0%; white-space: nowrap;', html: 'Add', icon: 'svgIcon=#alpha-icon-peopleAddSolid:icon' }));
					html.push(A5.buttons.html('TF.MEMBERS.REMOVE', { theme: TF.theme + ':deny', style: 'flex: 1 1 0%; white-space: nowrap;', html: 'Remove', icon: 'svgIcon=#alpha-icon-personXSolid:icon' }, '', 'disabled'));
					html.push(A5.buttons.html('TF.MEMBERS.RESTORE', { theme: TF.theme, style: 'flex: 1 1 0%; white-space: nowrap;', html: 'Restore', icon: 'svgIcon=#alpha-icon-personInSolid:icon' }, '', 'disabled'));
					html.push(A5.buttons.html('TF.MEMBERS.SETROLES', { theme: TF.theme, style: 'flex: 1 1 0%; white-space: nowrap;', html: 'Roles', icon: 'svgIcon=#alpha-icon-personDocSolid:icon' }, '', 'disabled'));
					html.push(A5.buttons.html('TF.MEMBERS.RESENDINVITE', { theme: TF.theme, style: 'white-space: nowrap; width: 125px;', html: 'Resend Invite', icon: 'svgIcon=#alpha-icon-envelopeOut:icon' }, '', 'disabled'));
					html.push(A5.buttons.html('TF.MEMBERS.RESENDINVITECANCEL', { theme: TF.theme, style: 'white-space: nowrap; width: 125px;', html: 'Cancel Resend', icon: 'svgIcon=#alpha-icon-envelopeIn:icon' }));
					html.push('</div>');
					html.push(A5.buttons.html('TF.MEMBERS.EXPORT', { theme: TF.theme, className: 'button buttonIcon', layout: 'icon', icon: 'svgIcon=#alpha-icon-export:icon' }));
					html.push('<div style="width: 4px;"></div>');
					html.push('<input id="TF.MEMBERS.FILTER.EDIT" class="TFEdit edit" style="flex: 1 1 auto;" placeholder="Quick search..." />');
					html.push('<div style="width: 4px;"></div>');
					html.push(A5.buttons.html('TF.MEMBERS.FILTER.CLEAR', { theme: TF.theme + ':subtle', className: 'button buttonSubtle buttonIcon', layout: 'icon', icon: 'svgIcon=#alpha-icon-x:icon' }, '', 'disabled'));
					html.push(A5.buttons.html('TF.MEMBERS.SORT', { theme: TF.theme + ':subtle', className: 'button buttonSubtle buttonIcon', layout: 'icon', icon: 'svgIcon=#alpha-icon-sort:icon' }));
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
						TF.ui.members.list._.ux.exportListData('members', {
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
						TF.u.flyout.show(this, 'Export visible members to Excel...</div>', { direction: 'vertical-left' });
					});
					$e.add('TF.MEMBERS.EXPORT', 'mouseleave', function () { TF.u.flyout.hide(); });

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
						TF.u.flyout.show(this, html.join(''), { direction: 'vertical-right' });
					});
					$e.add('TF.MEMBERS.FILTER.EDIT', 'mouseleave', function () { TF.u.flyout.hide(); });

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
						theme: TF.theme,
						style: 'white-space: nowrap;',
						onClick: function (i) {
							var v = i.value.split(':');
							var l = TF.ui.members.list._.l;
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
					html.push(A5.switches.html(vb.noInvite || false, { theme: TF.theme }, ' id="' + this.contId + '.NOINVITE" a5-item="noInvite"'));
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
						var rolesBtn = A5.buttons.html(vb.contId + '.__I__.ROLES', { theme: TF.theme, icon: 'svgIcon=#alpha-icon-personDocSolid:icon' }, 'a5-item="setRoles:__I__"');
						var remBtn = A5.buttons.html(vb.contId + '.__I__.REMOVE', { theme: TF.theme + ':deny', layout: 'icon', icon: 'svgIcon=#alpha-icon-x:icon' }, 'a5-item="remove:__I__"');
						var re = /__I__/g;
						for (var i = 0; i < d.length; i++) {
							di = d[i]
							idp = vb.contId + '.' + i + '.';
							html.push('<input id="' + idp + 'email" a5-value-from="' + i + ':email" value="' + di.email + '" spellcheck="false" class="edit' + (TF.u.re.email.test(di.email) ? '' : ' editError') + '" style="align-self: start;"/>');
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
							theme: TF.theme,
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
									A5.buttons.html('TF.MEMBERS.ROLES.ADD', { theme: TF.theme, html: 'Add', style: 'flex: 1 1 0%;' }, 'a5-item="done:add"'),
									A5.buttons.html('TF.MEMBERS.ROLES.REMOVE', { theme: TF.theme + ':deny', html: 'Remove', style: 'flex: 1 1 0%;' }, 'a5-item="done:remove"'),
									'</div>',
									'<div style="display: flex; flex-direction: row; padding: 4px;">',
									A5.buttons.html('TF.MEMBERS.ROLES.COMMIT', { theme: TF.theme, html: 'Set Roles', style: 'flex: 1 1 0%;' }, 'a5-item="done:set"'),
									A5.buttons.html('TF.MEMBERS.ROLES.CANCEL', { theme: TF.theme + ':subtle', html: 'Cancel', style: 'flex: 1 1 0%;' }, 'a5-item="done:cancel"'),
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
										TF.ui.members.roles._.t.hide();
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
				if (typeof TF.ui.dev._.h == 'undefined') {
					var p = ux.panelGet('TRANSFORM_DEVELOPER');
					var ele = $(p.getPanelId('header'));
					ele.className = 'TFDockPanelHeader';

					TF.ui.dev._.h = new A5.ViewBox(ele.id, {
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
										TF.request('get-preferences', { type: 'developer' }).then(function (d) {
											var v = d.data;
											if (A5.u.typeOf(v) == 'object') v = JSON.stringify(v, '', '\t');
											TF.ui.dev._.e.p.setValue(v);
											p.unlock();
										}).catch(function () {
											p.unlock();
										});
									}
								},
								action: function (t) {
									var p = ux.panelGet('TRANSFORM_DEVELOPER_PREFERENCES');
									if (t == 'commit') {
										if (TF.u.code.lang.json.validate(TF.ui.dev._.e.p.value) !== true) {
											TF.u.message.show('confirm', 'Syntax Error', 'Invalid JSON.');
											return false;
										}
										p.lock('Saving preferences JSON...');
										TF.request('set-preferences', { type: 'developer', data: JSON.parse(TF.ui.dev._.e.p.value) }).then(function (d) {
											TF.ui.dev._.e.p.setDirty(false);
											p.unlock();
										}).catch(function () {
											p.unlock();
										});
									} else if (t == 'cancel') {
										p.lock('Loading preferences JSON...');
										TF.request('get-preferences', { type: 'developer' }).then(function (d) {
											var v = d.data;
											if (A5.u.typeOf(v) == 'object') v = JSON.stringify(v, '', '\t');
											TF.ui.dev._.e.p.setValue(v);
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
									var pUX = TF.ui.main._.ux;
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
											var p = TF.ui.dev.actions._.p;
											if (t == 'commit') {
												if (TF.u.code.lang.json.validate(TF.ui.dev.actions._.e.value) !== true) {
													TF.u.message.show('confirm', 'Syntax Error', 'Invalid JSON.');
													return false;
												}
												p.lock('Saving actions JSON...');
												TF.request('set-preferences', { type: 'actions', data: JSON.parse(TF.ui.dev.actions._.e.value) }).then(function (d) {
													TF.ui.dev.actions._.e.setDirty(false);
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
												if (typeof TF.ui.dev.assets.list._.l != 'undefined') TF.ui.dev.assets.list._.l.getAssetsData();
											}
										},
										action: function (t) {
											if (t == 'commit') {
												TF.ui.dev.assets.list._.l.setAssetsData();
											} else if (t == 'cancel') {
												TF.ui.dev.assets.list._.l.getAssetsData();
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
												TF.request('get-preferences', { type: 'device-assets-options' }).then(function (d) {
													var v = d.data;
													if (A5.u.typeOf(v) == 'object') v = JSON.stringify(v, '', '\t');
													TF.ui.dev._.e.pq.setValue(v);
													p.unlock();
												}).catch(function () {
													p.unlock();
												});
											}
										},
										action: function (t) {
											var p = ux.panelGet('TRANSFORM_DEVELOPER_POLICIES_QUEUES');
											if (t == 'commit') {
												if (TF.u.code.lang.json.validate(TF.ui.dev._.e.pq.value) !== true) {
													TF.u.message.show('confirm', 'Syntax Error', 'Invalid JSON.');
													return false;
												}
												p.lock('Saving policies & queues JSON...');
												TF.request('set-preferences', { type: 'device-assets-options', data: JSON.parse(TF.ui.dev._.e.pq.value) }).then(function (d) {
													TF.ui.dev._.e.pq.setDirty(false);
													p.unlock();
												}).catch(function () {
													p.unlock();
												});
											} else if (t == 'cancel') {
												p.lock('Loading policies & queues JSON...');
												TF.request('get-preferences', { type: 'device-assets-options' }).then(function (d) {
													var v = d.data;
													if (A5.u.typeOf(v) == 'object') v = JSON.stringify(v, '', '\t');
													TF.ui.dev._.e.pq.setValue(v);
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
												if (typeof TF.ui.dev.apps.list._.l != 'undefined') TF.ui.dev.apps.list._.l.getConnectedAppsData();
											}
										},
										action: function (t) {
											if (t == 'commit') {
												TF.ui.dev.apps.list._.l.setConnectedAppsData();
											} else if (t == 'cancel') {
												TF.ui.dev.apps.list._.l.getConnectedAppsData();
											}
										}
									},
									{ html: 'Zapier', value: 'zapier', onShow: function () { ux.panelSetActive('TRANSFORM_DEVELOPER_ZAPIER'); } },
								]
							}
						]
					}, {
						context: 'configure',
						setTabDirty: TF.u.docks.tabs.setTabDirty,
						getTab: TF.u.docks.tabs.getTab,
						icons: {
							dirty: A5.u.icon.html('svgIcon=#alpha-icon-circleSolid:icon {width: 7px; height: 7px;}')
						},
						buttons: {
							edit: A5.buttons.html('', { theme: TF.theme, className: 'button buttonSubtle buttonIcon', icon: 'svgIcon=#alpha-icon-edit:icon' }),
							commit: A5.buttons.html('', { theme: TF.theme, className: 'button buttonConfirm buttonIcon', icon: 'svgIcon=#alpha-icon-check:icon' }),
							cancel: A5.buttons.html('', { theme: TF.theme, className: 'button buttonDeny buttonIcon', icon: 'svgIcon=#alpha-icon-x:icon' })
						},
						layout: 'main',
						layouts: {
							'main': {
								type: 'static',
								html: function () {
									var d = this.data;
									return TF.u.docks.tabs.html(this.contId, d.tabs, d.tab);
								}
							}
						},
						items: {
							'tab': TF.u.docks.tabs.items['tab'],
							'tab-action': TF.u.docks.tabs.items['tab-action']
						}
					});
					p.setDisplay('header', true);

					p = ux.panelGet('TRANSFORM_DEVELOPER_PREFERENCES');
					TF.u.panels.lockable(p);
					ele = $(p.getPanelId('body'));
					ele.innerHTML = '<div id="TF.DEV.PREFERENCES"style="width: 100%; height: 100%; box-sizing: border-box;"></div>';
					TF.ui.dev._.e.p = new TF.u.code.Editor('TF.DEV.PREFERENCES', {
						lang: 'json',
						className: 'TFCodeEditor',
						margin: {
							show: true,
							className: 'TFCodeEditorMargin'

						},
						onStateChange: function (t, v) {
							if (t == 'dirty') {
								TF.ui.dev._.h.setTabDirty('preferences', v);
							}
						}
					});
					ele = $(p.getPanelId('header'));
					var html = ['<div style="display: flex; flex-direction: row; align-items: center;">'];
					html.push('<div style="flex: 1 1 auto; padding-left: 4px;">The preferences are defined using JSON. For help with syntax click <a class="link" href="https://documentation.alphasoftware.com/TransFormDocumentation/index?search=otheraccountsettings" target="_blank">here</a>.</div>');
					html.push(A5.buttons.html('TF.DEV.PREFERENCES.VALIDATE', { theme: TF.theme, html: 'Validate', icon: 'svgIcon=#alpha-icon-exclamationTriangle:icon' }));
					html.push(A5.buttons.html('TF.DEV.PREFERENCES.REFORMAT', { theme: TF.theme, html: 'Reformat', icon: 'svgIcon=#alpha-icon-textAlignLeft:icon' }));
					html.push('</div>');
					ele.innerHTML = html.join('');
					$e.add('TF.DEV.PREFERENCES.VALIDATE', 'click', function (e) {
						var json = TF.ui.dev._.e.p.value;
						var res = TF.u.code.lang.json.validate(json);
						if (res !== true) {
							TF.u.message.show('confirm', 'Error', res.message);
						}
					});
					$e.add('TF.DEV.PREFERENCES.REFORMAT', 'click', function (e) {
						var json = TF.ui.dev._.e.p.value;
						json = TF.u.code.lang.json.reformat(json);
						TF.ui.dev._.e.p.setValue(json);
					});
					ele.className = 'TFPanelHeader';
					p.setDisplay('header', true);

					p = ux.panelGet('TRANSFORM_DEVELOPER_PERMISSIONS');
					TF.u.panels.lockable(p);

					p = ux.panelGet('TRANSFORM_DEVELOPER_POLICIES_QUEUES');
					TF.u.panels.lockable(p);
					ele = $(p.getPanelId('body'));
					ele.innerHTML = '<div id="TF.DEV.POLICIES_QUEUES"style="width: 100%; height: 100%; box-sizing: border-box;"></div>';
					TF.ui.dev._.e.pq = new TF.u.code.Editor('TF.DEV.POLICIES_QUEUES', {
						lang: 'json',
						className: 'TFCodeEditor',
						margin: {
							show: true,
							className: 'TFCodeEditorMargin'

						},
						onStateChange: function (t, v) {
							if (t == 'dirty') {
								TF.ui.dev._.h.setTabDirty('policiesAndQueues', v);
							}
						}
					});
					ele = $(p.getPanelId('header'));

					var html = ['<div style="display: flex; flex-direction: row; align-items: center;">'];
					html.push('<div style="flex: 1 1 auto; padding-left: 4px;">The policies & queues are defined using JSON. For help with syntax click <a class="link" href="https://documentation.alphasoftware.com/TransFormDocumentation/index?search=ondevice%20assets%20policy" target="_blank">here</a>.</div>');
					html.push(A5.buttons.html('TF.DEV.POLICIES_QUEUES.VALIDATE', { theme: TF.theme, html: 'Validate', icon: 'svgIcon=#alpha-icon-exclamationTriangle:icon' }));
					html.push(A5.buttons.html('TF.DEV.POLICIES_QUEUES.REFORMAT', { theme: TF.theme, html: 'Reformat', icon: 'svgIcon=#alpha-icon-textAlignLeft:icon' }));
					html.push('</div>');
					ele.innerHTML = html.join('');
					$e.add('TF.DEV.POLICIES_QUEUES.VALIDATE', 'click', function (e) {
						var json = TF.ui.dev._.e.pq.value;
						var res = TF.u.code.lang.json.validate(json);
						if (res !== true) {
							TF.u.message.show('confirm', 'Error', res.message);
						}
					});
					$e.add('TF.DEV.POLICIES_QUEUES.REFORMAT', 'click', function (e) {
						var json = TF.ui.dev._.e.pq.value;
						json = TF.u.code.lang.json.reformat(json);
						TF.ui.dev._.e.pq.setValue(json);
					});

					ele.className = 'TFPanelHeader';
					p.setDisplay('header', true);
				} else {
					TF.ui.dev._.h.refresh();
				}
				TF.ui.dev._.h.getTab().onShow();
			},
			assets: {
				_: {},
				init: function (ux) {
					var p = ux.panelGet('TRANSFORM_DEVICE_ASSETS');
					this._.p = p;
					TF.u.panels.lockable(p);
					var pId = p.getPanelId();
					var ele = $(pId);
					var fEle = document.createElement('div');
					fEle.id = 'TF.ASSETS.FORM';
					fEle.style.display = 'none';
					fEle.style.zIndex = '5';
					fEle.className = 'TFOverlayForm';
					fEle.innerHTML = '<div id="TF.ASSETS.FORM.CONTENT" class="TFForm"></div>';
					ele.appendChild(fEle);
					this._.f = new A5.FormBox('TF.ASSETS.FORM.CONTENT', TF.forms.deviceAssets, {}, {
						theme: TF.theme
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
						var dev = TF.state.ui.editing.json.lists;
						var html = [];
						html.push('<div style="display: flex; flex-direction: row; align-items: center; gap: 4px; padding-bottom: 2px;">');
						html.push('<div class="TFFormItemLabel">Manifest source</div>');
						html.push('<div id="TF.ASSETS.SRC"><button class="button" style="visibility: hidden;">Button</button></div>');
						html.push('<input id="TF.ASSETS.SRC.URL" class="TFEdit edit" style="flex: 1 1 auto;" placeholder="Specify the URL of the JSON file..." spellcheck="false" />');
						html.push('</div>');
						html.push('<div style="display: flex; flex-direction: row;">');
						html.push('<div style="display: flex; flex-direction: row;">');
						html.push(A5.buttons.html('TF.ASSETS.SELECTALL', { theme: TF.theme + ':subtle', className: 'button buttonSubtle buttonIcon', html: A5.u.icon.html('svgIcon=#alpha-icon-circle:icon') + A5.u.icon.html('svgIcon=#alpha-icon-checkCircle:icon') + A5.u.icon.html('svgIcon=#alpha-icon-checkCircleBorder:icon') }));
						html.push(A5.buttons.html('TF.ASSETS.ADD', { theme: TF.theme, html: 'Add', icon: 'svgIcon=#alpha-icon-add:icon' }));
						html.push(A5.buttons.html('TF.ASSETS.EDIT', { theme: TF.theme, html: 'Edit', icon: 'svgIcon=#alpha-icon-edit:icon' }));
						html.push(A5.buttons.html('TF.ASSETS.REMOVE', { theme: TF.theme + ':deny', html: 'Remove', icon: 'svgIcon=#alpha-icon-x:icon' }));
						html.push(A5.buttons.html('TF.ASSETS.RESTORE', { theme: TF.theme, html: 'Restore', icon: 'svgIcon=#alpha-icon-docInSolid:icon' }));
						html.push('</div>');
						html.push('<div style="width: 4px;"></div>');
						html.push('<input id="TF.ASSETS.FILTER.EDIT" class="TFEdit edit" style="flex: 1 1 auto;" placeholder="Quick search..." spellcheck="false" />');
						html.push('<div style="width: 4px;"></div>');
						html.push(A5.buttons.html('TF.ASSETS.FILTER.CLEAR', { theme: TF.theme + ':subtle', className: 'button buttonSubtle buttonIcon', layout: 'icon', icon: 'svgIcon=#alpha-icon-x:icon' }, '', 'disabled'));
						html.push(A5.buttons.html('TF.ASSETS.SORT', { theme: TF.theme + ':subtle', className: 'button buttonSubtle buttonIcon', layout: 'icon', icon: 'svgIcon=#alpha-icon-sort:icon' }));
						if (dev) html.push(A5.buttons.html('TF.ASSETS.JSON.EDIT', { theme: TF.theme + ':subtle', className: 'button buttonSubtle buttonIcon', layout: 'icon', icon: 'svgIcon=#alpha-icon-dataJSON:icon' }))


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
							TF.ui.dev.assets._.f.populate({
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
							TF.ui.dev.assets._.f.populate({
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
								TF.u.code.editors.json.edit(d, l);
							}
						}, l);
						$e.add('TF.ASSETS.JSON.EDIT', 'mouseenter', function () { TF.u.flyout.show(this, 'Edit JSON...', {}) });
						$e.add('TF.ASSETS.JSON.EDIT', 'mouseleave', function () { TF.u.flyout.hide() });


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
							theme: TF.theme,
							style: 'white-space: nowrap;',
							onClick: function (i) {
								var v = i.value.split(':');
								var l = TF.ui.dev.assets.list._.l;
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
					TF.u.panels.lockable(p);
					var pId = p.getPanelId();
					var ele = $(pId);
					var fEle = document.createElement('div');
					fEle.id = 'TF.APPS.FORM';
					fEle.style.display = 'none';
					fEle.className = 'TFOverlayForm';
					fEle.innerHTML = '<div id="TF.APPS.FORM.CONTENT" class="TFForm"></div>';
					ele.appendChild(fEle);
					this._.f = new A5.FormBox('TF.APPS.FORM.CONTENT', TF.forms.connectedApps, {}, {
						theme: TF.theme
					});
				},
				list: {
					_: {},
					init: function (ux, l) {
						var html = [];
						html.push('<div style="display: flex; flex-direction: row;">');
						html.push('<div style="display: flex; flex-direction: row;">');
						html.push(A5.buttons.html('TF.APPS.SELECTALL', { theme: TF.theme + ':subtle', className: 'button buttonSubtle buttonIcon', html: A5.u.icon.html('svgIcon=#alpha-icon-circle:icon') + A5.u.icon.html('svgIcon=#alpha-icon-checkCircle:icon') + A5.u.icon.html('svgIcon=#alpha-icon-checkCircleBorder:icon') }));
						html.push(A5.buttons.html('TF.APPS.ADD', { theme: TF.theme, html: 'Add', icon: 'svgIcon=#alpha-icon-add:icon' }));
						html.push(A5.buttons.html('TF.APPS.EDIT', { theme: TF.theme, html: 'Edit', icon: 'svgIcon=#alpha-icon-edit:icon' }));
						html.push(A5.buttons.html('TF.APPS.REMOVE', { theme: TF.theme + ':deny', html: 'Delete', icon: 'svgIcon=#alpha-icon-x:icon' }));

						html.push('</div>');
						html.push('<div style="width: 4px;"></div>');
						html.push('<input id="TF.APPS.FILTER.EDIT" class="TFEdit edit" style="flex: 1 1 auto;" placeholder="Quick search..." />');
						html.push('<div style="width: 4px;"></div>');
						html.push(A5.buttons.html('TF.APPS.FILTER.CLEAR', { theme: TF.theme + ':subtle', className: 'button buttonSubtle buttonIcon', layout: 'icon', icon: 'svgIcon=#alpha-icon-x:icon' }, '', 'disabled'));
						html.push(A5.buttons.html('TF.APPS.SORT', { theme: TF.theme + ':subtle', className: 'button buttonSubtle buttonIcon', layout: 'icon', icon: 'svgIcon=#alpha-icon-sort:icon' }));
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
							var f = TF.ui.dev.apps._.f;
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
							var f = TF.ui.dev.apps._.f;
							f.editMode = 'edit';
							f.populate({
								name: d.name,
								rename: d.name,
								type: d.type,
								def: (d.def ? A5.u.object.clone(d.def) : {})
							});
						}, l);
						$e.add('TF.APPS.REMOVE', 'click', function (e, l) {
							TF.u.message.show('confirm-cancel', 'Delete Connection', 'Are you sure you want to delete the specified connection?', {
								action: function (a) {
									if (a == 'confirm') {
										TF.ui.dev.apps._.p.lock('Removing connection...');
										var n = [];
										var d = TF.ui.dev.apps.list._.l.selectionData;
										for (var i = 0; i < d.length; i++) {
											n.push(d[i].name);
										}
										TF.request('remove-connections', { names: n }).then(function (d) {
											TF.ui.dev.apps.list._.l.populate(d, false);
											TF.ui.dev.apps._.p.unlock();
										}).catch(function () {
											TF.ui.dev.apps._.p.unlock();
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
							theme: TF.theme,
							style: 'white-space: nowrap;',
							onClick: function (i) {
								var v = i.value.split(':');
								var l = TF.ui.dev.apps.list._.l;
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
					TF.u.panels.lockable(p);

					p = ux.panelGet('TRANSFORM_ACTIONS_CODE');
					TF.u.panels.lockable(p);
					ele = $(p.getPanelId('body'));
					ele.innerHTML = '<div id="TF.DEV.ACTIONS"style="width: 100%; height: 100%; box-sizing: border-box;"></div>';
					TF.ui.dev.actions._.e = new TF.u.code.Editor('TF.DEV.ACTIONS', {
						lang: 'json',
						className: 'TFCodeEditor',
						margin: {
							show: true,
							className: 'TFCodeEditorMargin'

						},
						onStateChange: function (t, v) {
							if (t == 'dirty') {
								if (TF.ui.dev._.h) TF.ui.dev._.h.setTabDirty('onsubmit', v);
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
									TF.ui.dev.actions.list._.l.jsonError(err);
									return false;
								}
								if (Array.isArray(d)) {
									TF.ui.dev.actions.list._.l.updateData(d);
								}
							}, 400);
						}
					});
					ele = $(p.getPanelId('header'));
					var html = ['<div style="display: flex; flex-direction: row; align-items: center;">'];
					html.push('<div style="flex: 1 1 auto; padding-left: 4px;">The onsubmit actions are defined using JSON. For help with syntax click <a class="link" href="https://documentation.alphasoftware.com/TransFormDocumentation/index?search=json%20syntax%20for%20onsubmit" target="_blank">here</a>.</div>');
					html.push(A5.buttons.html('TF.DEV.ACTIONS.REFORMAT', { theme: TF.theme, html: 'Reformat', icon: 'svgIcon=#alpha-icon-textAlignLeft:icon' }));
					html.push('</div>');
					ele.innerHTML = html.join('');
					$e.add('TF.DEV.ACTIONS.REFORMAT', 'click', function (e, c) {
						var json = TF.ui.dev.actions._.e.value;
						json = TF.u.code.lang.json.reformat(json);
						TF.ui.dev.actions._.e.setValue(json);
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
						TF.u.panels.lockable(p);
						ele = $(p.getPanelId('header'));
						var html = [];
						html.push(A5.buttons.html('TF.DEV.ACTIONS.MOVE.ADD', { theme: TF.theme, html: 'Add Action', icon: 'svgIcon=#alpha-icon-add:icon' }));
						html.push(A5.buttons.html('TF.DEV.ACTIONS.MOVE.REMOVE', { theme: TF.theme + ':deny', className: 'button buttonDeny buttonIcon', layout: 'icon', icon: 'svgIcon=#alpha-icon-x:icon' }));
						html.push(A5.buttons.html('TF.DEV.ACTIONS.MOVE.UP', { theme: TF.theme + ':icon', layout: 'icon', icon: 'svgIcon=#alpha-icon-arrowUp:icon' }));
						html.push(A5.buttons.html('TF.DEV.ACTIONS.MOVE.DOWN', { theme: TF.theme + ':icon', layout: 'icon', icon: 'svgIcon=#alpha-icon-arrowDown:icon' }));

						ele.innerHTML = html.join('');
						$e.add('TF.DEV.ACTIONS.MOVE.ADD', 'click', function (e, c) {
							var m = TF.ui.dev.actions.list._.m;
							if (m._data.length == 0) {
								var a = c.actions;
								var items = [];
								for (var i = 0; i < a.length; i++) items.push({ html: a[i][0], value: i });
								m.populate(items);
							}
							m.show('dropdown', this);
						}, ux);
						$e.add('TF.DEV.ACTIONS.MOVE.REMOVE', 'click', function (e) {
							TF.u.message.show('confirm-cancel', 'Delete Action', 'Are you sure you would like to delete the selected action?', {
								action: function (a) {
									if (a == 'confirm') {
										var json = TF.ui.dev.actions._.e.value;
										var d = JSON.parse(json);
										var l = TF.ui.dev.actions.list._.l;
										var indx = l.selection[0];
										d.splice(indx, 1);
										json = JSON.stringify(d, '', '\t');
										TF.ui.dev.actions._.e.setValue(json);
										TF.ui.dev.actions._.e.setDirty(true);
										l.setValue(false);
									}
								}
							});
						});
						$e.add('TF.DEV.ACTIONS.MOVE.UP', 'click', function (e) {
							var json = TF.ui.dev.actions._.e.value;
							var d = JSON.parse(json);
							var l = TF.ui.dev.actions.list._.l;
							var indx = l.selection[0];
							A5.u.array.move(d, indx, 'up');
							json = JSON.stringify(d, '', '\t');
							TF.ui.dev.actions._.e.setValue(json);
							TF.ui.dev.actions._.e.setDirty(true);
							l.setValue(indx - 1);
						});
						$e.add('TF.DEV.ACTIONS.MOVE.DOWN', 'click', function (e) {
							var json = TF.ui.dev.actions._.e.value;
							var d = JSON.parse(json);
							var l = TF.ui.dev.actions.list._.l;
							var indx = l.selection[0];
							A5.u.array.move(d, indx, 'down');
							json = JSON.stringify(d, '', '\t');
							TF.ui.dev.actions._.e.setValue(json);
							TF.ui.dev.actions._.e.setDirty(true);
							l.setValue(indx + 1);
						});
						ele.className = 'TFPanelHeader';
						p.setDisplay('header', true);
						this._.m = new A5.Menu([], {
							theme: TF.theme,
							style: 'white-space: nowrap;',
							iconColumn: { show: false },
							onClick: function (i) {
								var nd = A5.u.object.clone(ux.actions[i.value][2]);
								var l = TF.ui.dev.actions.list._.l;
								var json = TF.ui.dev.actions._.e.value;
								var d = JSON.parse(json);
								if (l.selection.length == 1) d.splice(l.selection[0], 0, nd);
								else d.push(nd);
								json = JSON.stringify(d, '', '\t');
								TF.ui.dev.actions._.e.setValue(json);
								TF.ui.dev.actions._.e.setDirty(true);
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
						TF.u.panels.lockable(p);
						ele = $(p.getPanelId('header'));
						var html = [];
						html.push('<div style="display: flex; flex-direction: row; align-items: center; gap: 4px;">');
						html.push(A5.buttons.html('TF.ACTIONS.LOG.REFRESH', { theme: TF.theme, icon: 'svgIcon=#alpha-icon-refresh:icon', html: 'Refresh' }));
						html.push(A5.buttons.html('TF.ACTIONS.LOG.EXPORT', { theme: TF.theme, icon: 'svgIcon=#alpha-icon-export:icon', html: 'Export' }));
						html.push('<div class="TFFormItemLabel" style="padding-left: 4px;">Group by</div>');
						html.push('<div id="TF.ACTIONS.LOG.GROUP"></div>');
						html.push('<input id="TF.ACTIONS.LOG.FILTER.EDIT" class="TFEdit edit" style="flex: 1 1 auto;" placeholder="Quick search..." />');
						html.push(A5.buttons.html('TF.ACTIONS.LOG.FILTER.CLEAR', { theme: TF.theme + ':subtle', className: 'button buttonSubtle buttonIcon', layout: 'icon', icon: 'svgIcon=#alpha-icon-x:icon' }, '', 'disabled'));
						html.push(A5.buttons.html('TF.ACTIONS.LOG.GROUP.TOGGLE', { theme: TF.theme + ':subtle', className: 'button buttonSubtle buttonIcon', layout: 'icon', icon: 'svgIcon=#alpha-icon-chevronDown:icon' }, 'a5-state="expanded"', 'disabled'));
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
							var l = TF.ui.dev.actions.log._.l;
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
							theme: TF.theme,
							onClick: function () {
								var v = this.value[0];
								var l = TF.ui.dev.actions.log._.l;
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
				TF.u.panels.lockable(p);
				TF.ui.home._.vb = vb;
				vb.getStructure();
			},
			html: function (vb, uxId) {
				var html = [];
				var sl = TF.state.login;
				var bEle = $('TF.HOME.BLOCK');
				if (sl.state != 'logged-in') {
					bEle.setAttribute('login-state', (TF.state.login.state == 'logged-out' ? 'Login required...' : 'Login confirmation required...'));
					bEle.style.display = '';
				} else bEle.style.display = 'none';

				var fd = vb.data.forms.types;
				var dd = vb.data.dashboards.types;
				var allow = TF.state.login.account.member.ui.allow;
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
					html.push(A5.buttons.html('TF.HOME.REFRESH', { theme: TF.theme + ':subtle', className: 'button buttonSubtle buttonIcon', icon: 'svgIcon=#alpha-icon-refresh:icon' }, 'a5-item="refresh" flyout-type="tip:Refresh account data..." ' + foEvnts));
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
				var canFill = TF.state.login.account.member.ui.allow.filler.web;
				html.push('<div class="TFTileGroup"><div id="' + idp + 'FORMS" a5-item="groupToggle:forms" class="TFTileGroupTitle">Forms<div>' + iconCollapse + '</div></div><div class="TFTileGroupTiles"' + (TF.state.ui.home.forms.collapsed ? ' style="display: none;"' : '') + '><div>');
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
					html.push('<div class="TFTileGroup"><div id="' + idp + 'DASHBORADS" a5-item="groupToggle:dashboards" class="TFTileGroupTitle">Dashboards<div>' + iconCollapse + '</div></div><div class="TFTileGroupTiles"' + (TF.state.ui.home.dashboards.collapsed ? ' style="display: none;"' : '') + '><div>');
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
						var sl = TF.state.login.account.permissions.statusesList;
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




;// ./src/util/declares.ts

const _A5 = A5;
const declares_TF = TF;
const _$ = $;
const _openNewPanel = openNewPanel;
const _jQuery = jQuery;
const _$u = (/* unused pure expression or super */ null && ($u));
const _$e = $e;

;// ./src/forms/ReactiveFormManager.ts

class ReactiveForm {
    constructor() {
        this.symbol = Symbol();
    }
}
class ReactiveFormManager {
    constructor(root, containerId, obj, injectInto) {
        this.inject = j => j;
        this.root = root;
        this.fragments = new Map();
        this.containerId = containerId;
        this.afterRender = [];
        this.formDataUpdateRequests = {};
        this.context = new Map();
        this.obj = obj;
        this.changed = false;
        this.formBox = ReactiveFormManager.constructFormBox(this.containerId);
        if (injectInto)
            this.inject = injectInto;
        this.render(this.root);
    }
    static constructFormBox(cId) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
        const fb = new _A5.FormBox(cId, [], null, {
            theme: 'Alpha',
            item: {
                label: { style: '' },
                description: { style: '' }
            },
            onChange: () => { }
        });
        _A5.formBox.guides.controls['html'].handle = null;
        return fb;
    }
    addRefreshCallback(callback) {
        this.afterRender.push(callback);
        return callback;
    }
    removeRefreshCallback(callback) {
        this.afterRender = this.afterRender.filter(x => x != callback);
    }
    setContext(form, name, context) {
        const existing = this.context.get(name);
        if (existing !== undefined && existing.setBy == form.symbol) {
            existing.context = context;
        }
        else {
            this.context.set(name, { setBy: form.symbol, context });
        }
    }
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
    getContext(name) {
        return this.context.get(name)?.context;
    }
    setFormData(name, value) {
        this.formDataUpdateRequests[name] = value;
        // eslint-disable-next-line @typescript-eslint/no-base-to-string
        if (this.formBox.data)
            this.formBox.data[name] = value?.toString() ?? '';
    }
    getFormData(name) {
        if (this.formBox.data)
            return this.formBox.data[name];
        return undefined;
    }
    render(form) {
        const _render = (form) => {
            const jsonForm = form.render(this);
            if (!jsonForm)
                return undefined;
            const raw = resolve(jsonForm);
            const fragment = this.fragments.get(form.symbol);
            if (fragment) {
                // We NEED fragment to point to the same obj in memory (i.e. can't just reassign to an empty object).
                for (const key in fragment) {
                    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
                    if (Object.prototype.hasOwnProperty.call(fragment, key))
                        delete fragment[key];
                }
                Object.assign(fragment, raw);
            }
            else {
                this.fragments.set(form.symbol, raw);
            }
            return this.fragments.get(form.symbol);
        };
        const resolve = (j) => {
            if (j.type == 'group') {
                return {
                    type: 'group',
                    container: j.container,
                    items: j.items.map(x => {
                        if (x === undefined)
                            return undefined;
                        if (x instanceof ReactiveForm)
                            return _render(x);
                        return resolve(x);
                    })
                };
            }
            else if (j.type == 'html')
                return j;
            else
                return j;
        };
        _render(form);
        this.refresh();
    }
    rebuildFormBox() {
        if (this.formBox.ctrls?.picker) {
            this.formBox.ctrls.picker.destroy();
        }
        const activePickers = _A5.transients._.tci;
        for (const key in activePickers) {
            // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
            if (activePickers[key] == null)
                delete activePickers[key];
        }
        _A5.transients._.t = _A5.transients._.t.filter(x => x in activePickers);
        const container = _$(this.formBox.contId);
        if (container) {
            ReactiveFormManager.removeOldEventHandlers(container);
            this.formBox.destroy();
            this.formBox = ReactiveFormManager.constructFormBox(this.containerId);
        }
    }
    refresh() {
        // Alpha pickers (dropdowns, date pickers, etc) do not immediately update upon selection. 
        // Instead, they set a timeout and refresh after that. 
        // If we rebuild the form immediately, then the definition will be replaced, *then* the old callback for the (deleted) picker 
        // will be called, resulting in an error.
        setTimeout(() => {
            const frag = this.fragments.get(this.root.symbol);
            if (!frag)
                return;
            const form = this.inject(frag);
            this.hookIntoChangeEvents(form);
            const oldFormData = Object.assign(this.formBox.data ?? {}, this.formDataUpdateRequests);
            this.formDataUpdateRequests = {};
            this.rebuildFormBox();
            const oldRefresh = this.formBox.refresh.bind(this.formBox);
            this.formBox.refresh = () => {
                oldRefresh();
                this.afterRender.forEach(f => { f(); });
            };
            this.formBox.load({ form: { items: [form] }, guides: ReactiveFormManager.guides }, oldFormData);
        }, 1);
    }
    hookIntoChangeEvents(f) {
        if (f.type == 'group')
            f.items.forEach(i => { if (i)
                this.hookIntoChangeEvents(i); });
        else if (f.type == 'edit' || f.type == 'edit-picker' || f.type == 'checkbox' || f.type == 'picker') {
            const oldChange = f.control?.onChange;
            if (f.control === undefined)
                f.control = { onChange: () => { } };
            f.control.onChange = (d) => {
                if (!this.changed) {
                    this.changed = true;
                    this.formBox.refresh();
                }
                if (oldChange)
                    oldChange(d);
            };
        }
    }
    static removeOldEventHandlers(elem) {
        // Alpha hooks its own event handlers into objects. 
        // They are not all removed when the old form is destroyed. 
        // If the old handlers are not removed, then (e.g.) clicking a button will 
        // call the current onClick along with every single previous existing version of 
        // that onclick function (which is not, I imagine, what you want to do.)
        // Alpha also doesn't seem to have a way to remove all the event handlers. 
        // We have to do them individually, and we need a handle to the function being called..
        /*eslint-disable*/
        const allEvents = _$e._e;
        const toRemove = [];
        allEvents.forEach(e => {
            if (e[0] == elem) {
                toRemove.push({ event: e[1], fn: e[2] });
            }
        });
        toRemove.forEach(r => _$e.remove(elem, r.event, r.fn));
        for (let i = 0; i < elem.childElementCount; i++) {
            this.removeOldEventHandlers(elem.children[i]);
        }
        /*eslint-enable*/
    }
    isDirty() {
        return this.changed;
    }
    setDirty(dirty) {
        this.changed = dirty;
    }
    serialize() {
        return this.root.serialize(this.formBox.data ?? {}).map(v => changeDetectionToRaw(v));
    }
    serializeWithChanges() {
        return this.root.serialize(this.formBox.data ?? {});
    }
}
ReactiveFormManager.guides = {
    "layouts": {
        "flex-label": "<div style=\"display: flex; width: 100%;\"><div style=\"flex: 1 1;\">{label}</div><div >{content}</div></div>{error}{description}",
        /*eslint-disable*/
        "label-float-above": { draw: function (dObj) { const l = dObj.item.def.sys.item.layout.settings; if (dObj.item.isNull)
                return '<div style="position: relative;"><div float-state="1" style="position: absolute; top: 0px; left: 0px; right: 0px; height: 100%;"><div style="position: absolute; top: 50%; transform: translate(0px,-50%);">{label}</div></div>{content}</div><div>{error}</div><div>{description}</div>';
            else
                return '<div style="position: relative;"><div float-state="2" style="position: absolute; top: -' + l.size + '; left: 0px; right: 0px; height: ' + l.size + ';' + l.style + '"><div style="position: absolute; top: 50%; transform: translate(0px,-50%);">{label}</div></div>{content}</div><div>{error}</div><div>{description}</div>'; }, settings: { size: '14px', style: '', duration: 300 }, handle: { focus: function (dObj) { var e = this.getElements(dObj.item.path.def); if (e) {
                    e = e[0].children[0].children[0];
                    if (e && e.getAttribute('float-state') == '1') {
                        var l = dObj.item.def.sys.item.layout.settings;
                        e.setAttribute('float-state', '2');
                        if (dObj.item.isNull) {
                            if (l.style != '')
                                _A5.u.element.style(e, '+=' + l.style);
                            _A5.u.element.transition(e, { from: { top: '0px', height: '100%' }, to: { top: '-' + l.size, height: l.size }, duration: l.duration });
                        }
                    }
                } }, blur: function (dObj) { var e = this.getElements(dObj.item.path.def); if (e) {
                    e = e[0].children[0].children[0];
                    if (e && e.getAttribute('float-state') == '2') {
                        var l = dObj.item.def.sys.item.layout.settings;
                        e.setAttribute('float-state', '1');
                        if (dObj.item.isNull) {
                            if (l.style != '')
                                _A5.u.element.style(e, '-=' + l.style);
                            _A5.u.element.transition(e, { from: { top: '-' + l.size, height: l.size }, to: { top: '0px', height: '100%' }, duration: l.duration });
                        }
                    }
                } } } },
        /*eslint-enable*/
    }
};
function changeDetectionToRaw(c) {
    if ('raw' in c)
        return c.raw;
    else if ('keys' in c) {
        const out = {};
        for (const key in c.keys) {
            out[key] = changeDetectionToRaw(c.keys[key]);
        }
        return out;
    }
    else {
        return c.elements.map(x => changeDetectionToRaw(x));
    }
}

;// ./src/list/listAction.ts





function executeListAction(list, action, rowData, row) {
    const flatIndex = row !== undefined ? list.listBox.getIndex(row)[0].index : undefined;
    if (action.actionName == 'openDetailView') {
        list.newDetailViewRecord(flatIndex !== undefined ? { tag: 'editExistingRecord', record: flatIndex } : { tag: 'newRecord' });
    }
    else if (action.actionName == 'openLinkedList') {
        const tabTemplate = _A5.u.template.parse(action.tabName);
        const templateData = {
            list: list,
            row: rowData
        };
        const filled = _A5.u.template.expand(templateData, { template: tabTemplate });
        const filters = action.linkedColumns.map(linked => {
            const template = _A5.u.template.parse(linked.value);
            const data = { list: list, row: rowData };
            const filled = _A5.u.template.expand(data, { template });
            return {
                columnName: [{ tag: 'object', key: linked.foreignCol }],
                columnVal: { tag: 'value', value: filled },
                connector: 'AND',
                op: '=',
            };
        });
        list.linkNewPanel(action.configurationName, filled, filters);
    }
    else if (action.actionName == 'openJSONSublist') {
        if (row === undefined)
            return;
        const tabTemplate = _A5.u.template.parse(action.tabName);
        const templateData = {
            list: list,
            row: rowData
        };
        const filled = _A5.u.template.expand(templateData, { template: tabTemplate });
        const name = list.dataModel.getUniqueName(action.fromColumn);
        if (!name)
            return;
        const path = list.dataController.getFlatRow(row)[name].path;
        list.linkSublistToField(action.configurationName, filled, flatIndex ?? 0, path);
    }
}
class ListActionEditor extends ReactiveForm {
    constructor(data) {
        super();
        this.data = data ?? { actionName: 'openDetailView' };
    }
    buildForm(m) {
        if (this.data === undefined)
            this.data = { actionName: 'openDetailView' };
        let defaultSelected;
        switch (this.data.actionName) {
            case "openDetailView":
                defaultSelected = 'Open Detail View';
                break;
            case "openLinkedList":
                defaultSelected = 'Open Linked List';
                break;
            case "openJSONSublist":
                defaultSelected = 'Open JSON Sub-list';
                break;
        }
        this.form = new MultiForm({
            options: ['Open Detail View', 'Open Linked List', 'Open JSON Sub-list'],
            defaultOption: defaultSelected,
            chooseForm: selected => {
                if (selected == 'Open Detail View') {
                    if (!this.data)
                        this.data = { actionName: 'openDetailView' };
                    const d = (this.data.actionName == 'openDetailView') ? this.data : { actionName: 'openDetailView' };
                    return new ObjectForm(d, {
                        "actionName": () => new ConstForm("openDetailView")
                    });
                }
                if (selected == 'Open JSON Sub-list')
                    return this.jsonSublistForm(m, this.data);
                return this.linkedListForm(m, this.data);
            },
            allowCollapse: false
        });
    }
    jsonSublistForm(m, initialData) {
        const ctx = m.getContext(ConfigContext.id);
        if (!ctx)
            throw new Error();
        // eslint-disable-next-line @typescript-eslint/require-await
        return new AsyncForm(async () => {
            const data = (initialData && initialData.actionName == 'openJSONSublist')
                ? initialData
                : {
                    actionName: 'openJSONSublist',
                    configurationName: '',
                    tabName: '',
                    fromColumn: []
                };
            return new ObjectForm(data, {
                "actionName": () => new ConstForm("openJSONSublist"),
                "configurationName": (data, i) => new StringInput(i, "Configuration Name", data),
                "tabName": (data, i) => new ItemLabel(i, {
                    label: "Tab Name",
                    item: new TemplateHelper(data)
                }),
                "fromColumn": (data, i) => new ItemLabel(i, {
                    label: "From Column",
                    item: new ColumnSelector(data ?? [], dm => dm.allPaths(), false),
                })
            });
        }, initialData);
    }
    linkedListForm(m, initialData) {
        const ctx = m.getContext(ConfigContext.id);
        if (!ctx)
            throw new Error();
        return new AsyncForm(
        // eslint-disable-next-line @typescript-eslint/require-await
        async () => {
            const data = (initialData && initialData.actionName == 'openLinkedList') ? initialData : {
                actionName: 'openLinkedList',
                configurationName: '',
                tabName: '',
                linkedColumns: [],
                makeFilter: true
            };
            return new ObjectForm(data, {
                "actionName": () => new ConstForm("openLinkedList"),
                "configurationName": (data, i) => new StringInput(i, "Configuration Name", data),
                "tabName": (data, i) => new ItemLabel(i, {
                    label: "Tab Name",
                    item: new TemplateHelper(data)
                }),
                "linkedColumns": (columns, i) => new ItemLabel(i, {
                    label: "Filters",
                    collapsed: true,
                    enclosed: true,
                    item: new ArrayForm(columns, (item, i) => new ItemLabel(i, {
                        label: 'Filter',
                        enclosed: true,
                        collapsed: true,
                        showDelete: true,
                        item: new ObjectForm(item, {
                            'foreignCol': (c, i) => new StringInput(i, "Foreign Column", c),
                            'value': (c, i) => new ItemLabel(i, {
                                label: 'Value',
                                item: new TemplateHelper(c)
                            })
                        })
                    }), () => ({ foreignCol: '', value: '' }))
                }),
            });
        }, initialData);
    }
    render(m) {
        if (this.form === undefined) {
            this.buildForm(m);
        }
        return { type: 'group', items: [this.form] };
    }
    serialize(formData) {
        if (!this.form) {
            return (0,types.Ok)({ changed: false, raw: this.data });
        }
        else
            return this.form.serialize(formData);
    }
}

;// ./src/list-configuration/ConfigForm.ts







class ConfigContext {
    constructor(viewEntireConfig, config, obj, model, nameSuggestor, list) {
        this.viewEntireConfig = viewEntireConfig;
        this.nameSuggestor = nameSuggestor;
        this.config = config;
        this.obj = obj;
        this.dataModel = model;
        this.list = list;
    }
}
ConfigContext.id = "ConfigContext";
class ConfigForm extends ReactiveForm {
    constructor(config, showEntireConfig, obj, model, suggestor, list) {
        super();
        this.showEntireConfig = showEntireConfig;
        this.obj = obj;
        this.config = config;
        this.dataModel = model;
        this.nameSuggestor = suggestor;
        this.list = list;
        let subForm;
        if (this.showEntireConfig) {
            subForm = new ObjectForm(config, {
                "name": data => new ConstForm(data),
                // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
                "onInitialize": (data, i) => new ItemLabel(i, { enabled: data !== undefined, label: "On Initialize", item: new Input({ type: 'function', initialData: data }) }),
                "dataSource": (dataSource, i) => new ItemLabel(i, {
                    label: "Data Source",
                    enclosed: true,
                    collapsed: true,
                    launchInTab: "tabs",
                    item: new ConfigDataSource(dataSource)
                }),
                "mappings": (mappings, i) => new ItemLabel(i, {
                    collapsed: true,
                    enclosed: true,
                    launchInTab: "tabs",
                    label: "Mappings",
                    item: new MappingsForm(mappings)
                }),
                "dataModel": (dm, i) => new ItemLabel(i, {
                    collapsed: true,
                    enclosed: true,
                    launchInTab: "tabs",
                    label: "Data Model",
                    item: new DataModelForm(dm ?? model.model)
                }),
                "searchOptions": (ops, i) => new ItemLabel(i, {
                    label: "Search Options",
                    collapsed: true,
                    enclosed: true,
                    launchInTab: "tabs",
                    item: new SearchOptionsForm(ops),
                }),
                "rowOptions": (data, i) => new ItemLabel(i, {
                    enclosed: true,
                    collapsed: true,
                    label: 'Row Options',
                    item: new ObjectForm(data ?? {}, {
                        'multiSelect': (d, i) => new LabelBool('Multi-Select', d),
                        'moveRows': (d, i) => new LabelBool('Move Rows', d)
                    })
                }),
                "buttons": (data, i) => new ItemLabel(i, {
                    label: "List Buttons",
                    collapsed: true,
                    enclosed: true,
                    launchInTab: "tabs",
                    item: new ListButtonsForm(data)
                })
            });
        }
        else {
            subForm = new MappingsForm(config.mappings);
        }
        this.form = new TabForm("List Configuration", subForm, "tabs");
    }
    setDataModel(m) {
        this.dataModel = m;
        if (this.manager)
            this.manager.render(this);
    }
    render(m) {
        this.manager = m;
        m.setContext(this, ConfigContext.id, new ConfigContext(this.showEntireConfig, this.config, this.obj, this.dataModel, this.nameSuggestor, this.list));
        return {
            type: 'group',
            id: 'dynamic-form-config-form',
            items: [this.form]
        };
    }
    serialize(formData) {
        return this.form.serialize(formData).map(s => {
            if ('keys' in s)
                s.keys['version'] = { changed: false, raw: this.config.version };
            return s;
        });
    }
}
class MappingsForm extends ReactiveForm {
    constructor(mappings) {
        super();
        this.mappings = mappings;
    }
    render(m) {
        const ctx = m.getContext(ConfigContext.id);
        // Data model hasn't been specified yet.
        if (Object.keys(ctx.dataModel.model.keys).length == 0) {
            return {
                type: 'html',
                control: {
                    html: `
                        <h2>No data model specified!</h2>
                        <p>You can't specify mappings until you set up the data model. 
                            Please go to the Data Model tab to define your data. </p>
                    `
                },
                layout: '{content}',
            };
        }
        if (this.form === undefined) {
            this.form = new ArrayForm(this.mappings, (mapping, i) => {
                const observer = new Observer();
                const jsonTypeObserver = new Observer();
                let collapsed = true;
                return new ObserverForm(observer, mapping.fullPath, path => {
                    const mapping = ctx.config.mappings.find(x => pathsEq(x.fullPath, path))
                        ?? { fullPath: path };
                    const dataModelObj = ctx.dataModel.find(path) ?? { tag: 'unknown' };
                    return new ItemLabel(i, {
                        label: DataModel.printPath(path),
                        collapsed,
                        onCollapse: c => collapsed = c,
                        enclosed: true,
                        showDelete: true,
                        showMove: true,
                        item: new ObjectForm(mapping, {
                            "fullPath": (data, i) => new ItemLabel(i, {
                                label: "Column",
                                item: new ColumnSelector(data, dm => dm.allPaths(), false, newPath => observer.notify(newPath)),
                            }),
                            "displayName": (data, i) => new StringInput(i, "Display Name", data, true),
                            "inList": data => new LabelBool("In List", data),
                            "inDetailView": data => new LabelBool("In Detail View", data),
                            "readOnly": ctx.viewEntireConfig
                                ? data => new LabelBool("Read Only", data)
                                : data => new ConstForm(data),
                            "dateSettings": dataModelObj.tag == 'data' && dataModelObj.type == 'datetime'
                                ? (d, i) => new ItemLabel(i, {
                                    label: 'Date Settings',
                                    collapsed: true,
                                    enclosed: true,
                                    item: new ObjectForm(d ?? {}, {
                                        "clientFormat": (d, i) => new StringInput(i, "Client Format", d ?? DEFAULT_DATETIME_FMT, true)
                                    })
                                })
                                : (d, i) => new ConstForm(d),
                            "template": (d, i) => new StringInput(i, "Template", d, true),
                            "width": (d, i) => new StringInput(i, "Width", d, true),
                            "jsonEditorType": dataModelObj.tag == 'array' || dataModelObj.tag == 'object'
                                ? (d, i) => new ItemLabel(i, {
                                    label: "JSON Editor Type",
                                    item: new DropdownForm({
                                        defaultValue: d ?? 'text',
                                        options: [{ text: 'Text', value: 'text' }, { text: 'List', value: 'list' }],
                                    })
                                })
                                : (d, i) => new ConstForm(d),
                            "jsonEditorListConfigName": (d, i) => new ObserverForm(jsonTypeObserver, mapping.jsonEditorType ?? 'text', type => {
                                if ((dataModelObj.tag == 'array' || dataModelObj.tag == 'object') && type == 'list') {
                                    let blankName = ctx.config.name + '_' + ctx.dataModel.getUniqueName(mapping);
                                    return new StringInput(i, 'JSON Editor List Config Name', d ?? blankName);
                                }
                                return new ConstForm(d);
                            }),
                            "dropdownConfig": dataModelObj.tag == 'data' && dataModelObj.type == 'dropdown'
                                ? (d, i) => new ItemLabel(i, {
                                    label: 'Dropdown Config',
                                    item: new MultiForm({
                                        defaultOption: ('fromColumn' in (d ?? {})) ? 'Column' : 'Values',
                                        options: ['Column', 'Values'],
                                        chooseForm: chosen => chosen == 'Column'
                                            ? new ObjectForm(d ?? { choices: [] }, {
                                                "choices": (c, i) => new ItemLabel(i, {
                                                    label: 'Choices',
                                                    collapsed: true,
                                                    enclosed: true,
                                                    item: new ArrayForm(c, (choice, i) => new StringInput(i, "Choice", choice), () => "")
                                                }),
                                                "allowCustom": d => new LabelBool("Allow Custom Values", d)
                                            })
                                            : new ObjectForm(d ?? { fromColumn: ctx.config.mappings[0]?.fullPath ?? [] }, {
                                                "fromColumn": (d, i) => new ItemLabel(i, {
                                                    label: 'From Column',
                                                    item: new ColumnSelector(d, dm => dm.allPaths(), false)
                                                }),
                                                "allowCustom": d => new LabelBool("Allow Custom Values", d)
                                            })
                                    })
                                })
                                : (d, i) => new ConstForm(d),
                        })
                    });
                });
            }, () => ({ fullPath: ctx.dataModel.topLevelPaths()[0] ?? [] }));
        }
        return {
            type: 'group', items: [
                {
                    type: 'button',
                    control: {
                        html: 'Load Mappings from Data Model',
                        onClick: () => {
                            if (ctx.list === undefined) {
                                _A5.msgBox.show('Cannot Load', "The list hasn't been loaded yet. Set up the data source and save the config to the server.", "o", () => { });
                            }
                            else {
                                _A5.msgBox.show('Load Mappings from Data Model', "This will remove any mappings you currently have.", "yn", () => {
                                    const dm = ctx.list.dataModel;
                                    const mappings = dm.allPaths()
                                        .map(path => ({ p: path, m: dm.find(path) }))
                                        .filter(({ m }) => m && m?.tag == 'data')
                                        .map(({ p }) => {
                                        let displayName = '';
                                        const last = p[p.length - 1];
                                        if (last.tag == 'object')
                                            displayName = last.key;
                                        return {
                                            fullPath: p,
                                            displayName,
                                            inDetailView: true,
                                            inList: false,
                                        };
                                    });
                                    this.mappings = mappings;
                                    ctx.config.mappings = mappings;
                                    this.form = undefined;
                                    m.render(this);
                                });
                            }
                        },
                    },
                    sys: { isEmbedded: false },
                },
                this.form
            ]
        };
    }
    serialize(formData) {
        if (this.form !== undefined)
            return this.form.serialize(formData);
        return (0,types.Ok)({ raw: this.mappings, changed: false });
    }
}
class ForcedValueForm extends ReactiveForm {
    constructor(data) {
        super();
        data = data ?? { column: '', value: { tag: 'value', value: '' } };
        this.form = new ObjectForm(data, {
            "column": (d, i) => new ItemLabel(i, {
                label: "Column",
                //item: new ColumnSelector(d as string, true, model)
                item: new ValueMapper(new ColumnSelector([{ tag: 'object', key: d }], dm => dm.allPaths().filter(x => x.length == 1), false), change => {
                    if ('raw' in change) {
                        return { raw: change.raw[0].key, changed: change.changed };
                    }
                    return change;
                })
            }),
            "value": (d) => {
                let data = d;
                return new MultiForm({
                    options: ['Value', 'XBasic Argument'],
                    defaultOption: data.tag == 'value' ? 'Value' : 'XBasic Argument',
                    chooseForm: selected => {
                        if (selected == 'Value') {
                            if (data.tag == 'argument')
                                data = { tag: 'value', value: '' };
                            return new ObjectForm(data, {
                                "tag": () => new ConstForm("value"),
                                "value": (v, i) => new StringInput(i, "Value", v)
                            });
                        }
                        else {
                            if (data.tag == 'value')
                                data = { tag: 'argument', value: '' };
                            return new ObjectForm(data, {
                                "tag": () => new ConstForm("argument"),
                                "value": (v, i) => new StringInput(i, "Value", v)
                            });
                        }
                    },
                    allowCollapse: false,
                });
            }
        });
    }
    render() {
        return { type: 'group', items: [this.form] };
    }
    serialize(formData) {
        return this.form.serialize(formData);
    }
}
class ConfigDataSource extends ReactiveForm {
    constructor(dataSource) {
        super();
        this.cached = {};
        let defaultItem;
        if (dataSource.type == 'json') {
            if ('endpoints' in dataSource)
                defaultItem = 'API';
            else
                defaultItem = "Static JSON";
        }
        else {
            if ('table' in dataSource)
                defaultItem = 'SQL Table';
            else
                defaultItem = 'Custom SQL';
        }
        const onSelect = (option) => {
            if (option in this.cached)
                return this.cached[option];
            const getInitValue = () => {
                if (option == 'SQL Table') {
                    if (dataSource.type == 'sql' && 'table' in dataSource)
                        return dataSource;
                    return { type: 'sql', table: '' };
                }
                if (option == 'Custom SQL') {
                    if (dataSource.type == 'sql' && 'sql' in dataSource)
                        return dataSource;
                    return { type: 'sql', sql: '' };
                }
                if (option == 'API') {
                    if (dataSource.type == 'json' && 'endpoints' in dataSource)
                        return dataSource;
                    return { type: 'json', endpoints: {} };
                }
                if (dataSource.type == 'json' && 'jsonData' in dataSource)
                    return dataSource;
                return { type: 'json', jsonData: '' };
            };
            const initValue = getInitValue();
            const preprocess = {
                'preprocess': (p, i) => new ItemLabel(i, {
                    enabled: p !== undefined,
                    label: 'Preprocess Function',
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
                    item: new Input({ initialData: p, type: 'function', textarea: true })
                })
            };
            const commonSqlOptions = {
                'connectionString': (conn, i) => new ItemLabel(i, {
                    enabled: conn !== undefined,
                    label: 'Connection String',
                    item: new Input({ initialData: conn, type: 'string' })
                }),
                "filters": (f, i) => new ItemLabel(i, {
                    label: 'List Filters',
                    enabled: f !== undefined,
                    enclosed: true,
                    collapsed: true,
                    item: new ListFiltersForm(f ?? [])
                }),
                "serverSort": (f, i) => new ItemLabel(i, {
                    label: 'Server-side Sorting Options',
                    enabled: f !== undefined,
                    enclosed: true,
                    collapsed: true,
                    item: new ServerSortForm(f)
                }),
                'paginate': (p, i) => new ItemLabel(i, {
                    enabled: p !== undefined,
                    label: "Pagination Options",
                    enclosed: true,
                    collapsed: true,
                    item: new ObjectForm(p ?? { pageSize: 20 }, {
                        'pageSize': (size, i) => new ItemLabel(i, {
                            label: 'Page Size',
                            item: new Input({ initialData: size, type: 'number' })
                        })
                    })
                }),
                'forcedValues': (data, i) => new ItemLabel(i, {
                    enabled: data !== undefined,
                    label: "Forced Values",
                    enclosed: true,
                    collapsed: true,
                    item: new ArrayForm(data ?? [], (item, i) => new ItemLabel(i, {
                        label: "Forced Value",
                        enclosed: true,
                        collapsed: true,
                        showDelete: true,
                        item: new ForcedValueForm(item)
                    }), () => ({ column: '', value: { tag: 'value', value: '' } }))
                }),
                ...preprocess
            };
            let form;
            switch (option) {
                case 'SQL Table': {
                    form = new ObjectForm(initValue, {
                        'type': () => new ConstForm('sql'),
                        'table': (name, i) => new ItemLabel(i, { label: 'Table Name', item: new Input({ initialData: name, type: 'string' }) }),
                        ...commonSqlOptions
                    });
                    break;
                }
                case 'Custom SQL':
                    {
                        form = new ObjectForm(initValue, {
                            "type": () => new ConstForm('sql'),
                            "sql": (data, i) => new ItemLabel(i, {
                                label: 'SQL',
                                item: new Input({ initialData: data, type: 'string', textarea: true })
                            }),
                            ...commonSqlOptions
                        });
                        break;
                    }
                    ;
                case 'API':
                    {
                        const endpointNames = ['fetch', 'search', 'add', 'update', 'delete'];
                        const endpoints = {};
                        endpointNames.forEach(name => endpoints[name] = (data, i) => new ItemLabel(i, {
                            label: "Endpoint for " + name,
                            enclosed: true,
                            enabled: data !== undefined,
                            collapsed: true,
                            item: new EndpointForm(data)
                        }));
                        form = new ObjectForm(initValue, {
                            'type': () => new ConstForm('json'),
                            'endpoints': (data, i) => new ItemLabel(i, {
                                label: "Endpoints",
                                enclosed: true,
                                collapsed: true,
                                item: new ObjectForm(data, endpoints)
                            }),
                            ...preprocess
                        });
                        break;
                    }
                    ;
                case 'Static JSON':
                    {
                        form = new ObjectForm(initValue, {
                            'type': () => new ConstForm('json'),
                            'jsonData': (data, i) => new ItemLabel(i, {
                                label: 'JSON Data',
                                item: new CodeEditor({ data: data, lang: 'json' }),
                            }),
                            ...preprocess
                        });
                        break;
                    }
                    ;
                default: throw new Error();
            }
            this.cached[option] = form;
            return form;
        };
        this.form = new MultiForm({
            options: ['SQL Table', 'Custom SQL', 'API', 'Static JSON'],
            defaultOption: defaultItem,
            chooseForm: onSelect
        });
    }
    render() {
        return {
            type: 'group',
            id: 'dynamic-form-data-source',
            items: [this.form]
        };
    }
    serialize(formData) {
        return this.form.serialize(formData);
    }
}
class ListFiltersForm extends ReactiveForm {
    constructor(filters) {
        super();
        this.form = new ArrayForm(filters, (filter, i) => new ItemLabel(i, {
            label: "List Filter",
            showDelete: true,
            showMove: true,
            enclosed: true,
            item: new ObjectForm(filter, {
                "columnName": (name, i) => new ItemLabel(i, { label: "Column Name", item: new ColumnSelector(name, dm => dm.topLevelPaths(), false) }),
                "columnVal": (v) => {
                    const val = v;
                    return new MultiForm({
                        options: ['Filter on Value', 'Filter on XBasic Argument'],
                        defaultOption: val.tag == 'value' ? 'Filter on Value' : 'Filter on XBasic Argument',
                        chooseForm: selected => selected == 'Filter on Value'
                            ? new ObjectForm(val, {
                                "tag": () => new ConstForm("value"),
                                "value": (val, i) => new ItemLabel(i, { label: "Value", item: new Input({ initialData: val, type: 'string' }) })
                            })
                            : new ObjectForm(val, {
                                "tag": () => new ConstForm("arg"),
                                "value": (val, i) => new ItemLabel(i, { label: "Argument Name", item: new Input({ initialData: val, type: 'string' }) })
                            })
                    });
                },
                "connector": (c, i) => new ItemLabel(i, {
                    label: "Connector",
                    item: new DropdownForm({
                        options: [{ text: 'And', value: 'AND' }, { text: 'Or', value: 'OR' }],
                        defaultValue: c ?? 'AND',
                    })
                }),
                "op": (op, i) => new ItemLabel(i, {
                    label: "Operator", item: new DropdownForm({
                        options: [{ text: "Equals", value: "=" },
                            { text: "Not Equals", value: "<>" },
                            { text: "Less Than", value: "<" },
                            { text: "Less Than or Equal To", value: "<=" },
                            { text: "Greater Than", value: ">" },
                            { text: "Greater Than or Equal To", value: ">=" },
                            { text: "Pattern", value: "LIKE" }],
                        defaultValue: op
                    })
                }),
                "quantifier": (q, i) => new ItemLabel(i, {
                    label: "Quantifier",
                    enabled: q !== undefined,
                    item: new DropdownForm({
                        options: [{ text: 'All', value: 'ALL' }, { text: 'Some', value: 'SOME' }],
                        defaultValue: q ?? 'ALL',
                    })
                })
            })
        }), () => ({ columnName: [], columnVal: { tag: 'value', value: '' }, connector: 'AND', op: '=', quantifier: 'ALL' }));
    }
    render() {
        return {
            type: 'group',
            id: 'dynamic-form-list-filters',
            items: [this.form]
        };
    }
    serialize(formData) {
        return this.form.serialize(formData);
    }
}
class ServerSortForm extends ReactiveForm {
    constructor(data) {
        super();
        data = data ?? [];
        this.form = new ArrayForm(data, (item, i) => new ItemLabel(i, {
            label: "Sort Parameter",
            enclosed: true,
            showMove: true,
            showDelete: true,
            collapsed: true,
            item: new ObjectForm(item, {
                "columnName": (name, i) => new ItemLabel(i, {
                    label: 'Column to Sort By',
                    item: new ValueMapper(new ColumnSelector([{ tag: 'object', key: name }], dm => dm.topLevelPaths(), false), change => {
                        if ('raw' in change)
                            return { raw: change.raw[0].key, changed: change.changed };
                        return change;
                    })
                }),
                "order": (name, i) => new ItemLabel(i, {
                    label: 'Ordering', item: new DropdownForm({
                        options: [{ text: 'Ascending', value: 'asc' }, { text: 'Descending', value: 'desc' }],
                        defaultValue: name,
                    })
                })
            })
        }), () => ({ columnName: '', order: 'asc' }));
    }
    render() {
        return {
            type: 'group',
            items: [this.form]
        };
    }
    serialize(formData) {
        return this.form.serialize(formData);
    }
}
class EndpointForm extends ReactiveForm {
    constructor(e) {
        super();
        e = e ?? { method: 'GET', endpoint: { tag: 'template', value: '' } };
        const templateOrArgSelector = d => {
            const data = d;
            return new MultiForm({
                options: ['Template', 'XBasic Argument'],
                defaultOption: data.tag == 'template' ? 'Template' : 'XBasic Argument',
                chooseForm: selected => selected == 'Template'
                    ? new ObjectForm(data, {
                        "tag": () => new ConstForm("template"),
                        "value": (data, i) => new ItemLabel(i, {
                            label: "Template",
                            item: new TemplateHelper(data)
                        })
                    })
                    : new ObjectForm(data, {
                        "tag": () => new ConstForm("argument"),
                        "value": (data, i) => new ItemLabel(i, {
                            label: "Argument",
                            item: new Input({ initialData: data, type: 'string' })
                        })
                    })
            });
        };
        this.form = new ObjectForm(e, {
            "method": (m, i) => new ItemLabel(i, {
                label: "HTTP Verb",
                item: new DropdownForm({
                    options: ['GET', 'POST', 'DELETE', 'PUT', 'HEAD', 'CONNECT', 'OPTIONS', 'TRACE', 'PATCH'].map(x => ({ text: x, value: x })),
                    defaultValue: m,
                })
            }),
            "endpoint": (ep, i) => new ItemLabel(i, {
                label: "Endpoint",
                collapsed: true,
                enclosed: true,
                item: templateOrArgSelector(ep)
            }),
            "headers": (headers, i) => new ItemLabel(i, {
                label: "Headers",
                enabled: headers !== undefined,
                enclosed: true,
                collapsed: true,
                item: new ObjectForm(headers ?? {}, {}, {
                    onAdd: (headerName, data, i) => new ItemLabel(i, {
                        label: "Header " + headerName,
                        enclosed: true,
                        showMove: true,
                        showDelete: true,
                        item: templateOrArgSelector(data ?? { tag: 'template', value: '' })
                    })
                })
            }),
            "body": (b, i) => new ItemLabel(i, { label: 'Body', enabled: b !== undefined, item: new Input({ initialData: b, type: 'string', textarea: true }) })
        });
    }
    render() {
        return { type: 'group', items: [this.form] };
    }
    serialize(formData) {
        return this.form.serialize(formData);
    }
}
class ListButtonsForm extends ReactiveForm {
    constructor(data) {
        super();
        this.form = new ArrayForm(data ?? [], (item, i) => new ItemLabel(i, {
            label: "Button",
            enclosed: true,
            collapsed: true,
            showMove: true,
            showDelete: true,
            item: new ObjectForm(item, {
                "columnTitle": (data, i) => new StringInput(i, "Column Title", data),
                "title": (data, i) => new StringInput(i, "Title", data, true),
                "icon": (data, i) => new StringInput(i, "Icon", data, true),
                "onClick": (d, i) => {
                    const data = d;
                    return new ItemLabel(i, {
                        label: "Click Action",
                        collapsed: true,
                        enclosed: true,
                        item: new MultiForm({
                            options: ["Javascript Function", "Javascript Action", "List Action"],
                            defaultOption: ('function' in data ? 'Javascript Function' : ('action' in data ? 'Javascript Action' : 'List Action')),
                            chooseForm: selected => {
                                if (selected == 'Javascript Function') {
                                    const d = ('function' in data) ? data : { function: '() => {}' };
                                    return new ObjectForm(d, {
                                        "function": (data, i) => new StringInput(i, "Function", data, undefined, true)
                                    });
                                }
                                else if (selected == 'Javascript Action') {
                                    const d = ('action' in data) ? data : { action: '' };
                                    return new ObjectForm(d, {
                                        "action": (data, i) => new StringInput(i, "Action Name", data)
                                    });
                                }
                                else {
                                    const d = ('listAction' in data) ? data : { listAction: { actionName: 'openDetailView' } };
                                    return new ObjectForm(d, {
                                        "listAction": d => new ListActionEditor(d)
                                    });
                                }
                            }
                        })
                    });
                }
            })
        }), () => ({ columnTitle: '', onClick: { function: '() => {}' } }));
    }
    render() {
        return { type: 'group', items: [this.form] };
    }
    serialize(formData) {
        return this.form.serialize(formData);
    }
}
class SearchOptionsForm extends ReactiveForm {
    constructor(ops) {
        super();
        if (ops == undefined)
            ops = {};
        this.form = new ObjectForm(ops, {
            "advancedSearch": data => new LabelBool("Advanced Search", data),
            "serverSearch": data => new LabelBool("Server-side Search", data),
            "onlyInclude": (data, i) => new ItemLabel(i, {
                label: "Include columns in search",
                enclosed: true,
                collapsed: true,
                enabled: data !== undefined,
                item: new ArrayForm(data ?? [], (d, i) => new ItemLabel(i, {
                    label: 'Column',
                    item: new ColumnSelector(d ?? [], dm => dm.allPaths(), false)
                }), () => []),
            }),
            "onlyExclude": (data, i) => new ItemLabel(i, {
                label: "Exclude columns in search",
                enabled: data !== undefined,
                enclosed: true,
                collapsed: true,
                item: new ArrayForm(data ?? [], (d, i) => new ItemLabel(i, {
                    label: 'Column',
                    item: new ColumnSelector(d ?? [], dm => dm.allPaths(), false)
                }), () => []),
            })
        });
    }
    render() {
        return { type: 'group', items: [this.form] };
    }
    serialize(formData) {
        return this.form.serialize(formData);
    }
}
class EditTypeDropdown extends ReactiveForm {
    constructor(data, onChange) {
        super();
        this.form = new DropdownForm({
            options: [
                { text: 'Text', value: 'text' },
                { text: 'Dropdown', value: 'dropdown' },
                { text: 'Datetime', value: 'datetime' },
                { text: 'True/False', value: 'bool' },
                { text: 'Number', value: 'number' },
            ],
            defaultValue: data ?? 'text',
            onChange
        });
    }
    render() {
        return { type: 'group', items: [this.form] };
    }
    serialize() {
        return this.form.serialize();
    }
}
const DEFAULT_PROCESS = `
// data is the raw data point, straight from the data source.
//
// serverTimeOffset is the time offset of the server from GMT.
// This may be useful for Date/Time formatting.
(data, serverTimeOffset) => {
    return data;
}`;
const DEFAULT_UNPROCESS = `
// data is the datapoint in the list. If \`preprocess\` is defined,
// then this point will have already been transformed by that function.
//
// serverTimeOffset is the time offset of the server from GMT.
// This may be useful for Date/Time formatting.
(data, serverTimeOffset) => {
    return data;
}`;
class DataModelForm extends ReactiveForm {
    constructor(data) {
        super();
        this.data = data;
    }
    constOptions() {
        return {
            "uniqueName": d => new ConstForm(d),
            "nullable": d => new LabelBool("Nullable", d),
            "optional": d => new LabelBool("Optional", d),
            "preprocess": (d, i) => new ItemLabel(i, {
                label: 'Preprocess Function',
                enabled: d !== undefined,
                collapsed: true,
                enclosed: true,
                item: new CodeEditor({
                    data: d ?? DEFAULT_PROCESS,
                    lang: 'js',
                })
            }),
            "postprocess": (d, i) => new ItemLabel(i, {
                label: 'Postprocess Function',
                enabled: d !== undefined,
                collapsed: true,
                enclosed: true,
                item: new CodeEditor({
                    data: d ?? DEFAULT_UNPROCESS,
                    lang: 'js',
                })
            }),
        };
    }
    dmAny(o, path, suggestor) {
        return new MultiForm({
            label: path.length == 0 ? 'Data Root' : DataModel.printPath(path),
            dropdownOnRight: true,
            options: [
                { text: 'Object', value: 'object' },
                { text: 'Array', value: 'array' },
                { text: 'Data', value: 'data' },
                { text: 'Unknown', value: 'unknown' }
            ],
            defaultOption: o.tag,
            chooseForm: (name) => {
                switch (name) {
                    case "object":
                        if (o.tag == 'object')
                            return this.dmObj(o, path, suggestor);
                        return this.dmObj({ ...o, tag: 'object', keys: {} }, path, suggestor);
                    case "array":
                        if (o.tag == 'array')
                            return this.dmArray(o, path, suggestor);
                        return this.dmArray({
                            ...o,
                            tag: 'array',
                            item: { tag: 'data', nullable: false, optional: false, type: 'text', uniqueName: suggestor.get([...path, { tag: 'array' }]) }
                        }, path, suggestor);
                    case "data":
                        if (o.tag == 'data')
                            return this.dmData(o, path);
                        return this.dmData({
                            ...o,
                            tag: 'data',
                            type: 'text',
                        }, path);
                    case "unknown":
                        if (o.tag == 'unknown')
                            return this.dmUnknown(o, path);
                        return this.dmUnknown({ ...o, tag: 'unknown' }, path);
                }
            },
        });
    }
    dmObj(o, path, suggestor) {
        return new ObjectForm(o, {
            "tag": d => new ConstForm(d),
            "fromString": d => new LabelBool("From String?", d),
            "keys": (d, i) => new ItemLabel(i, {
                label: 'Object Keys',
                enclosed: true,
                collapsed: false,
                item: new ObjectForm(d, {}, {
                    onAdd: (name, data, i) => {
                        let model = data ?? { tag: 'data', nullable: false, optional: false, uniqueName: suggestor.get([...path, { tag: 'object', key: name }]), type: 'text' };
                        return new ItemLabel(i, {
                            label: name,
                            showDelete: true,
                            item: this.dmAny(model, [...path, { tag: 'object', key: name }], suggestor)
                        });
                    },
                })
            }),
            ...this.constOptions()
        });
    }
    dmArray(o, path, suggestor) {
        return new ObjectForm(o, {
            "tag": d => new ConstForm(d),
            "fromString": d => new LabelBool("From String?", d),
            "item": (d, i) => new ItemLabel(i, {
                label: 'Array Item',
                enclosed: true,
                collapsed: false,
                item: this.dmAny(o.item, [...path, { tag: 'array' }], suggestor)
            }),
            ...this.constOptions()
        });
    }
    dmData(d, path) {
        return new ObjectForm(d, {
            "tag": d => new ConstForm(d),
            "type": (d, i) => new ItemLabel(i, {
                label: "Edit Type",
                item: new EditTypeDropdown(d),
            }),
            ...this.constOptions()
        });
    }
    dmUnknown(d, path) {
        return new ObjectForm(d, {
            "tag": d => new ConstForm(d),
            ...this.constOptions()
        });
    }
    render(m) {
        const ctx = m.getContext(ConfigContext.id);
        this.ctx = ctx;
        if (this.form === undefined) {
            this.form = this.dmAny(this.data, [], ctx.nameSuggestor);
        }
        return {
            type: 'group',
            items: [
                {
                    type: 'button',
                    control: {
                        html: 'Auto-Fill from Data',
                        onClick: () => {
                            if (ctx.list === undefined) {
                                _A5.msgBox.show('Cannot Auto-Fill', 'The list datasource is not set up. Configure it, save globally, then try again.', 'o', () => { });
                            }
                            else {
                                _A5.msgBox.show('Auto-Fill Data Model', 'This will remove any data model settings you currently have.', 'oc', answer => {
                                    if (answer == "ok") {
                                        ctx.list.reRender(true).then(() => {
                                            ctx.dataModel = new DataModel({
                                                rawRows: ctx.list.rawFetchedData,
                                            });
                                            this.data = ctx.dataModel.model;
                                            this.form = this.dmAny(this.data, [], ctx.nameSuggestor);
                                            m.render(this);
                                        });
                                    }
                                });
                            }
                        },
                    },
                    sys: {
                        isEmbedded: false
                    }
                },
                this.form
            ]
        };
    }
    serialize(formData) {
        if (this.form === undefined)
            return (0,types.Ok)({ changed: false, raw: this.data });
        return this.form.serialize(formData);
    }
}
class StringInput extends ReactiveForm {
    constructor(i, label, data, optional, multiLine) {
        super();
        this.form = new ItemLabel(i, {
            label,
            enabled: optional ? (data !== undefined) : undefined,
            item: new Input({ initialData: data, type: 'string', textarea: multiLine })
        });
    }
    render() {
        return { type: 'group', items: [this.form] };
    }
    serialize(formData) {
        return this.form.serialize(formData);
    }
}
class ColumnSelector extends ReactiveForm {
    constructor(data, getCols, showDisplay, onChange) {
        super();
        this.onChange = onChange;
        this.showDisplay = showDisplay;
        this.data = data;
        this.getCols = getCols;
    }
    render(m) {
        const ctx = m.getContext(ConfigContext.id);
        let dataCols = this.getCols(ctx.dataModel);
        let names = dataCols.map((x, i) => {
            let mapping = ctx.config.mappings.find(m => pathsEq(m.fullPath, x));
            let unique = ctx.dataModel.getUniqueName(x);
            let display = (this.showDisplay ? mapping?.displayName : unique) ?? unique;
            return { text: display, value: i.toString() };
        });
        let defaultVal = dataCols.findIndex(x => pathsEq(x, this.data));
        if (defaultVal == -1) {
            defaultVal = 0;
            if (dataCols.length > 0)
                this.data = dataCols[0];
        }
        this.dropdown = new DropdownForm({
            defaultValue: (defaultVal ?? 0).toString(),
            options: names,
            onChange: (n) => {
                let newCol = dataCols[Number.parseInt(n)];
                this.data = newCol;
                if (this.onChange)
                    this.onChange(this.data);
            }
        });
        return { type: 'group', items: [this.dropdown] };
    }
    serialize() {
        if (this.dropdown === undefined)
            return (0,types.Ok)({ changed: false, raw: this.data });
        return (0,types.Ok)({ changed: true, raw: this.data });
    }
}

;// ./src/forms/formComponents.ts





class TemplateHelper extends ReactiveForm {
    constructor(data) {
        super();
        this.inputForm = new Input({ initialData: data, type: 'string', textarea: true });
    }
    render(m) {
        const ctx = m.getContext(ConfigContext.id);
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const colNames = ctx.config.mappings.map(x => ctx.dataModel.getUniqueName(x)).filter(x => x !== undefined);
        return {
            type: 'group',
            items: [
                this.inputForm,
                {
                    type: 'button',
                    control: {
                        html: `<p>Add Template Item</p>`,
                        onClick: (_, btn) => {
                            const popup = templateHelperHTML(this.inputForm, colNames, m);
                            popup.style.position = 'absolute';
                            const rect = btn.getBoundingClientRect();
                            popup.style.left = `${(rect.width + 20).toString()}px`;
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
                    },
                    sys: { isEmbedded: false },
                }
            ]
        };
    }
    serialize(formData) {
        return this.inputForm.serialize(formData);
    }
}
function templateHelperHTML(form, colNames, m) {
    const id = uuidv4();
    const templateHelper = document.createElement('div');
    templateHelper.id = id;
    templateHelper.tabIndex = 0;
    const makeItem = (text, onclick) => {
        const d = document.createElement('div');
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
            const curr = form.getValue(m)?.toString() ?? '';
            form.setValue(m, curr + `{row["${name}"]}`);
        }));
    });
    return templateHelper;
}
class ObjectForm extends ReactiveForm {
    constructor(data, keymap, newKey) {
        super();
        this.data = data;
        this.initialized = false;
        this.id = uuidv4();
        this.keyMap = keymap;
        this.formMap = new Map();
        this.changed = false;
        this.newKey = newKey;
    }
    makeInteractor(key, m) {
        const keyDynamic = (k) => !(k in this.keyMap);
        const keyMaps = () => {
            const idxToKey = {};
            const keyToIdx = {};
            let idx = 0;
            for (const k of this.formMap.keys()) {
                idxToKey[idx] = k;
                keyToIdx[k] = idx;
                idx += 1;
            }
            return [idxToKey, keyToIdx];
        };
        const swapKeys = (idx1, idx2) => {
            const ordering = Array.from(this.formMap.keys()).map((k, idx) => ({
                k,
                i: idx == idx1 ? idx2 : (idx == idx2 ? idx1 : idx)
            }));
            ordering.sort((a, b) => a.i - b.i);
            const newFormMap = new Map();
            ordering.forEach(item => {
                const x = this.formMap.get(item.k);
                if (x)
                    newFormMap.set(item.k, x);
            });
            this.formMap = newFormMap;
            m.render(this);
        };
        return {
            currentIndex: () => {
                const [, keyToIdx] = keyMaps();
                return keyToIdx[key];
            },
            canDelete: () => keyDynamic(key),
            delete: () => {
                this.formMap.delete(key);
                m.render(this);
            },
            canMoveDown: () => {
                const [, keyToIdx] = keyMaps();
                const idx = keyToIdx[key];
                if (idx >= this.formMap.size - 1)
                    return false;
                return true;
            },
            moveDown: () => {
                const [, keyToIdx] = keyMaps();
                const idx = keyToIdx[key];
                swapKeys(idx, idx + 1);
            },
            canMoveUp: () => {
                const [idxToKey, keyToIdx] = keyMaps();
                const idx = keyToIdx[key];
                if (idx <= 0)
                    return false;
                if (!keyDynamic(idxToKey[idx - 1]))
                    return false;
                return true;
            },
            moveUp: () => {
                const [, keyToIdx] = keyMaps();
                const idx = keyToIdx[key];
                swapKeys(idx, idx - 1);
            }
        };
    }
    initialize(m) {
        this.initialized = true;
        const seen = new Set();
        for (const key in this.keyMap) {
            seen.add(key);
            const f = this.keyMap[key];
            this.formMap.set(key, this.keyMap[key](this.data[key], this.makeInteractor(key, m)));
        }
        if (this.newKey) {
            for (const key in this.data) {
                if (seen.has(key))
                    continue;
                this.formMap.set(key, this.newKey.onAdd(key, this.data[key], this.makeInteractor(key, m)));
            }
        }
    }
    render(m) {
        if (!this.initialized) {
            this.initialize(m);
        }
        let newKeyBtn = undefined;
        if (this.newKey) {
            let keyInput;
            const inputId = this.id + '_newKeyInput';
            if (this.newKey.dropdownOptions) {
                keyInput = {
                    type: this.newKey.dropdownOptions.allowAny ? 'edit-picker' : 'picker',
                    id: inputId,
                    data: {
                        from: inputId,
                        ensure: true,
                        blank: this.newKey.dropdownOptions.defaultOption,
                        defaultValue: this.newKey.dropdownOptions.defaultOption
                    },
                    control: {
                        data: {
                            src: this.newKey.dropdownOptions.options,
                            map: ['value', 'text']
                        }
                    },
                    sys: {
                        isEmbedded: false,
                        item: {
                            layout: {
                                handle: {}
                            }
                        }
                    }
                };
            }
            else {
                keyInput = {
                    type: 'edit',
                    id: inputId,
                    data: {
                        from: inputId,
                        ensure: true
                    },
                    sys: {
                        isEmbedded: false,
                        item: {
                            layout: {
                                handle: {}
                            }
                        }
                    }
                };
            }
            newKeyBtn = {
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
                    keyInput,
                    {
                        type: 'button',
                        control: {
                            html: _A5.u.icon.html('svgIcon=#alpha-icon-add:icon,24'),
                            onClick: () => {
                                const newName = m.getFormData(inputId);
                                if (typeof newName == 'string' && newName !== '') {
                                    if (this.formMap.has(newName)) {
                                        displayErrorMessage(new types.ErrMsg("Key " + newName + " was already added."));
                                    }
                                    else {
                                        if (this.newKey) {
                                            const newForm = this.newKey.onAdd(newName, undefined, this.makeInteractor(newName, m));
                                            this.formMap.set(newName, newForm);
                                        }
                                    }
                                }
                                m.setFormData(inputId, '');
                                m.render(this);
                            }
                        },
                        sys: { isEmbedded: false }
                    }
                ]
            };
        }
        return {
            type: 'group',
            container: {
                className: 'dynamic-form-object-group',
                style: `; 
                    display: flex; 
                    flex-direction: column;
                    gap: 1rem;
                `
            },
            items: [...this.formMap.values(), newKeyBtn]
        };
    }
    serialize(formData) {
        if (!this.initialized)
            return (0,types.Ok)({ changed: false, raw: this.data });
        const keys = {};
        for (const [k, v] of this.formMap.entries()) {
            const s = v.serialize(formData);
            if (s.isOk())
                keys[k] = s.asOk();
            else
                return s;
        }
        return (0,types.Ok)({
            keys,
            changed: this.changed
        });
    }
}
class ArrayForm extends ReactiveForm {
    constructor(data, item, onAdd) {
        super();
        this.item = item;
        this.onAdd = onAdd;
        this.initialized = false;
        this.entries = [];
        this.data = data;
    }
    makeEntry(elem, idx, m) {
        const swap = (i1, i2) => {
            if (i1 < 0 || i1 >= this.entries.length)
                return;
            if (i2 < 0 || i2 >= this.entries.length)
                return;
            const e1 = this.entries[i1];
            const e2 = this.entries[i2];
            e1.interactorCtx.index = i2;
            e2.interactorCtx.index = i1;
            this.entries[i2] = e1;
            this.entries[i1] = e2;
            m.render(this);
        };
        const ctx = {
            index: idx
        };
        const interactor = {
            currentIndex: () => ctx.index,
            canDelete: () => true,
            delete: () => {
                this.entries = this.entries.filter(e => e.interactorCtx.index != ctx.index);
                for (const entry of this.entries) {
                    if (entry.interactorCtx.index > ctx.index)
                        entry.interactorCtx.index -= 1;
                }
                m.render(this);
            },
            canMoveUp: () => ctx.index > 0,
            moveUp: () => { swap(ctx.index, ctx.index - 1); },
            canMoveDown: () => ctx.index < this.entries.length - 1,
            moveDown: () => { swap(ctx.index, ctx.index + 1); }
        };
        return {
            form: this.item(elem, interactor),
            interactorCtx: ctx
        };
    }
    render(m) {
        if (!this.initialized) {
            this.entries = this.data.map((elem, idx) => this.makeEntry(elem, idx, m));
            this.initialized = true;
        }
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
            items: [
                ...this.entries.map(e => e.form),
                {
                    type: 'group',
                    items: [{
                            type: 'button',
                            control: {
                                html: _A5.u.icon.html('svgIcon=#alpha-icon-add:icon,24'),
                                onClick: () => {
                                    const newItem = this.onAdd();
                                    this.entries.push(this.makeEntry(newItem, this.entries.length, m));
                                    m.render(this);
                                }
                            },
                            sys: { isEmbedded: false }
                        }],
                    container: {
                        className: 'dynamic-form-array-add-item-group'
                    }
                }
            ]
        };
    }
    serialize(formData) {
        if (!this.initialized)
            return (0,types.Ok)({ changed: false, raw: this.data });
        const items = [];
        for (const e of this.entries) {
            const s = e.form.serialize(formData);
            if (s.isOk())
                items.push(s.asOk());
            else
                return s;
        }
        return (0,types.Ok)({
            elements: items,
            changed: items.reduce((a, b) => a || b.changed, false)
        });
    }
}
class ItemLabel extends ReactiveForm {
    constructor(interactor, options) {
        super();
        this.options = options;
        this.id = uuidv4();
        this.interactor = interactor;
    }
    setLabel(l) {
        this.options.label = l;
    }
    enabledCheck(m) {
        if (this.options.enabled === undefined)
            return undefined;
        const enabled = {
            id: this.id + '_enabled',
            type: 'checkbox',
            data: {
                from: this.id + '_enabled',
                blank: this.options.enabled
            },
            control: {
                onChange: () => {
                    this.options.enabled = !this.options.enabled;
                    m.render(this);
                }
            },
            sys: {
                isEmbedded: false,
                item: {
                    layout: {
                        handle: {}
                    }
                }
            }
        };
        m.setFormData(this.id + '_enabled', this.options.enabled);
        return enabled;
    }
    collapseBtn(m) {
        if (this.options.collapsed === undefined)
            return undefined;
        const icon = this.options.collapsed ? 'chevronRight' : 'chevronDown';
        return {
            type: 'button',
            disabled: () => !(this.options.enabled ?? true),
            control: {
                html: _A5.u.icon.html(`svgIcon=#alpha-icon-${icon}:icon,24`),
                onClick: () => {
                    this.options.collapsed = !this.options.collapsed;
                    if (this.options.onCollapse)
                        this.options.onCollapse(this.options.collapsed);
                    m.render(this);
                }
            },
            sys: { isEmbedded: false }
        };
    }
    moveBtns(m) {
        if (!(this.options.showMove ?? false))
            return undefined;
        return {
            type: 'group',
            items: [
                {
                    type: 'button',
                    disabled: () => !this.interactor.canMoveUp(),
                    control: {
                        html: _A5.u.icon.html('svgIcon=#alpha-icon-arrowUp:icon,24'),
                        onClick: () => {
                            this.interactor.moveUp();
                            m.render(this);
                        }
                    },
                    sys: { isEmbedded: false }
                },
                {
                    type: 'button',
                    disabled: () => !this.interactor.canMoveDown(),
                    control: {
                        html: _A5.u.icon.html('svgIcon=#alpha-icon-arrowDown:icon,24'),
                        onClick: () => {
                            this.interactor.moveDown();
                            m.render(this);
                        }
                    },
                    sys: { isEmbedded: false }
                }
            ]
        };
    }
    deleteBtn(m) {
        if (!(this.options.showDelete ?? false))
            return undefined;
        return {
            type: 'button',
            disabled: () => !this.interactor.canDelete(),
            control: {
                html: _A5.u.icon.html('svgIcon=#alpha-icon-trash:icon,24'),
                onClick: () => {
                    this.interactor.delete();
                    m.render(this);
                }
            },
            sys: { isEmbedded: false }
        };
    }
    render(m) {
        const label = {
            type: 'html',
            control: {
                html: `<p class="dynamic-form-simple-label">${this.options.label}</p>`
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
        let shouldDisplay = true;
        if (this.options.collapsed ?? false)
            shouldDisplay = false;
        if (!(this.options.enabled ?? true))
            shouldDisplay = false;
        const labelGroup = {
            type: 'group',
            container: {
                className: 'dynamic-form-item-group',
                style: `;
                            display: flex;
                            flex-direction: row;
                            gap: 0.5rem;
                            align-items: center;
                        `
            },
            items: [
                this.enabledCheck(m),
                this.collapseBtn(m),
                !(this.options.labelRight ?? false) ? label : undefined,
                this.deleteBtn(m),
                this.moveBtns(m),
                this.options.labelRight ? {
                    type: 'group',
                    items: [label],
                    container: { style: 'margin-left: 1rem;' },
                } : undefined
            ]
        };
        const tabCtx = m.getContext(this.options.launchInTab ?? '');
        const newTabLaunch = {
            type: 'button',
            control: {
                html: `
                    <div class="dynamic-form-open-nested" style="
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        gap: 0.5rem;
                        cursor: pointer;
                    >
                        <p style="font-variant: all-petite-caps: font-weight: bold;"> Edit ${this.options.label} </p>
                        ${_A5.u.icon.html('svgIcon=#alpha-icon-chevronRight:icon,24')}
                    </div>
                `,
                onClick: () => {
                    if (tabCtx)
                        tabCtx.tabForm.pushTab(m, this.options.label, this.options.item);
                },
                style: 'color: black !important;'
            },
            sys: { isEmbedded: false }
        };
        const itemGroup = {
            type: 'group',
            items: [this.options.launchInTab
                    ? newTabLaunch
                    : this.options.item
            ]
        };
        if (this.options.enclosed && labelGroup.container) {
            // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
            labelGroup.container.style += `
                padding: 0.5rem;
                border: 1px solid black;
                background-color: lightgray;
            `;
            itemGroup.container = {
                className: 'dynamic-form-label-item-group',
                style: `
                    padding: 0.5rem;
                    border: 1px solid black;
                `,
            };
        }
        return {
            type: 'group',
            container: {
                style: `; display: flex; flex-direction: column;`,
                className: 'dynamic-form-item-group'
            },
            items: [
                labelGroup,
                shouldDisplay ? itemGroup : undefined
            ]
        };
    }
    serialize(formData) {
        if (this.options.enabled ?? true) {
            return this.options.item.serialize(formData);
        }
        return (0,types.Ok)({ changed: false, raw: undefined });
    }
}
class LabelBool extends ReactiveForm {
    constructor(label, value) {
        super();
        this.id = uuidv4();
        this.label = label;
        this.value = value ?? false;
        this.changed = false;
    }
    render(m) {
        return {
            type: 'group',
            container: {
                style: `; display: flex; flex-direction: column;`,
                className: 'dynamic-form-item-group'
            },
            items: [{
                    type: 'group',
                    container: {
                        className: 'dynamic-form-item-group',
                        style: `;
                                display: flex;
                                flex-direction: row;
                                gap: 0.5rem;
                                align-items: center;
                            `
                    },
                    items: [
                        {
                            type: 'checkbox',
                            id: this.id,
                            data: {
                                from: this.id,
                                blank: this.value,
                            },
                            control: {
                                onChange: () => {
                                    this.value = !this.value;
                                    this.changed = true;
                                    m.setFormData(this.id, this.value);
                                    m.render(this);
                                }
                            },
                            sys: {
                                isEmbedded: false,
                                item: {
                                    layout: {
                                        handle: {}
                                    }
                                }
                            }
                        },
                        {
                            type: 'html',
                            control: {
                                html: `<p class="dynamic-form-simple-label">${this.label}</p>`
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
                        }
                    ]
                }]
        };
    }
    serialize() {
        return (0,types.Ok)({ changed: this.changed, raw: this.value });
    }
}
class Input extends ReactiveForm {
    constructor(options) {
        super();
        this.id = uuidv4();
        this.options = options;
        this.changed = false;
        let fromWorld = (x) => x;
        let toWorld = (x) => (0,types.Ok)(x);
        if (this.options.type == 'datetime' && this.options.initialData instanceof Date) {
            fromWorld = x => x.toFormat(options.dateFmt ?? DEFAULT_DATETIME_FMT);
            toWorld = x => {
                if (typeof x === 'string') {
                    const d = new Date();
                    d.fromFormat(x, this.options.dateFmt ?? DEFAULT_DATETIME_FMT);
                    return (0,types.Ok)(d);
                }
                return (0,types.Ok)(x);
            };
        }
        this.converters = { fromWorld, toWorld };
        this.data = this.converters.fromWorld(options.initialData);
    }
    render(m) {
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
        const input = {
            control: {
                multiLine: this.options.textarea,
                width: '100%',
                style: '',
                picker: (editType == 'picker') ? {
                    type: 'date-time',
                    format: this.options.dateFmt ?? DEFAULT_DATETIME_FMT
                } : undefined,
                behavior: (editType == 'picker') ? {
                    show: {
                        mode: ''
                    }
                } : undefined,
                onChange: () => {
                    this.changed = true;
                },
                onKeyDown: (_1, _2, e) => {
                    this.changed = true;
                    e.stopPropagation();
                }
            },
            sys: {
                isEmbedded: false,
                item: {
                    layout: {
                        handle: {}
                    }
                }
            },
            id: this.id,
            type: editType,
            data: {
                from: this.id,
                ensure: true,
                blank: this.data
            },
            container: {
                style: `; flex: 1 1; ${this.options.readonly ? 'cursor: not-allowed;' : ''}`,
                className: "dynamic-form-simple-item"
            },
            readonly: () => this.options.readonly ?? false,
        };
        return input;
    }
    getValue(m) {
        return m.getFormData(this.id);
    }
    setValue(m, data) {
        m.setFormData(this.id, data);
        m.render(this);
    }
    serialize(formData) {
        const val = formData[this.id];
        let jsonVal;
        if (!(this.id in formData)) {
            return (0,types.Ok)({ changed: false, raw: this.options.initialData });
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
                const result = this.converters.toWorld(val);
                if (result.isOk())
                    jsonVal = result.asOk();
                else
                    return (0,types.Err)("There was an error parsing the date value.");
            }
        }
        return (0,types.Ok)({
            changed: this.changed,
            raw: jsonVal
        });
    }
}
class MultiForm extends ReactiveForm {
    constructor(options) {
        super();
        this.cache = {};
        this.activeOption = options.defaultOption;
        this.label = options.label;
        this.allowCollapse = options.allowCollapse ?? true;
        this.collapsed = this.allowCollapse ? true : false;
        this.id = uuidv4();
        this.dropdownOptions = typeof options.options[0] == 'string'
            ? options.options.map(x => ({ text: x, value: x }))
            : options.options;
        this.chooseForm = options.chooseForm;
        this.onSelect = options.onSelect;
        this.activeForm = this.chooseForm(this.activeOption, this);
        this.dropdownOnRight = options.dropdownOnRight ?? false;
    }
    current() {
        return this.activeForm;
    }
    render(m) {
        const icon = this.collapsed ? 'chevronRight' : 'chevronDown';
        const header = {
            type: 'group',
            items: [
                this.allowCollapse ? {
                    type: 'button',
                    control: {
                        html: _A5.u.icon.html(`svgIcon=#alpha-icon-${icon}:icon,24`),
                        onClick: () => {
                            this.collapsed = !this.collapsed;
                            m.render(this);
                        },
                    },
                    sys: { isEmbedded: false }
                } : undefined,
                this.label !== undefined ? {
                    type: 'html',
                    control: {
                        html: this.label,
                    },
                    layout: '{content}'
                } : undefined,
                {
                    type: 'picker',
                    id: this.id,
                    data: {
                        from: this.id,
                        ensure: true,
                        blank: this.activeOption
                    },
                    sys: {
                        isEmbedded: false,
                        item: {
                            layout: {
                                handle: {}
                            }
                        }
                    },
                    control: {
                        data: {
                            src: this.dropdownOptions,
                            map: ['value', 'text']
                        },
                        onChange: (change) => {
                            if (change.item.data !== null && change.item.data !== undefined) {
                                if (typeof change.item.data !== 'string')
                                    return;
                                this.activeOption = change.item.data;
                                if (this.onSelect)
                                    this.onSelect(this.activeOption, this);
                                if (this.activeOption in this.cache) {
                                    this.activeForm = this.cache[this.activeOption];
                                }
                                else {
                                    this.activeForm = this.chooseForm(this.activeOption, this);
                                    this.cache[this.activeOption] = this.activeForm;
                                }
                                m.render(this);
                            }
                        },
                        style: this.dropdownOnRight ? 'margin-left: auto;' : undefined,
                    },
                }
            ],
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
        return {
            type: 'group',
            items: [
                header,
                this.collapsed ? undefined : {
                    type: 'group',
                    items: [this.activeForm],
                    container: {
                        style: '; padding: .5rem; border: 1px solid black; '
                    }
                }
            ],
            container: {
                className: 'dynamic-form-multiform-group'
            }
        };
    }
    serialize(formData) {
        return this.activeForm.serialize(formData);
    }
}
class DropdownForm extends ReactiveForm {
    constructor(options) {
        super();
        this.id = uuidv4();
        this.changed = false;
        this.options = options;
        this.currentOption = this.options.defaultValue;
    }
    render(m) {
        return {
            type: this.options.allowAny ? 'edit-picker' : 'picker',
            id: this.id,
            data: {
                from: this.id,
                ensure: true,
                blank: this.currentOption,
                defaultValue: this.currentOption
            },
            readonly: () => this.options.readonly ?? false,
            control: {
                data: {
                    src: this.options.options,
                    map: ['value', 'text']
                },
                picker: {
                    data: {
                        empty: {
                            message: "No Items"
                        }
                    }
                },
                onChange: (change) => {
                    if (change.item.data != undefined) {
                        if (typeof change.item.data !== 'string')
                            return;
                        this.changed = true;
                        this.currentOption = change.item.data;
                        if (this.options.onChange)
                            this.options.onChange(this.currentOption);
                    }
                    if (change.item.data == undefined) {
                        m.setFormData(this.id, this.currentOption);
                    }
                },
                width: '85%',
            },
            container: {
                style: `; flex: 1 1; ${this.options.readonly ? 'cursor: not-allowed;' : ''}; max-width: 350px;`
            },
            sys: {
                isEmbedded: false,
                item: {
                    layout: {
                        handle: {}
                    }
                }
            }
        };
    }
    serialize() {
        return (0,types.Ok)({ changed: true, raw: this.currentOption });
    }
}
class ConstForm extends ReactiveForm {
    constructor(value) {
        super();
        this.value = value;
    }
    render() {
        return undefined;
    }
    serialize() {
        return (0,types.Ok)({ changed: false, raw: this.value });
    }
}
class Observer {
    constructor() {
        this.watching = new Map();
    }
    onNotify(f) {
        const id = uuidv4();
        this.watching.set(id, f);
        return id;
    }
    removeOnNotify(id) {
        this.watching.delete(id);
    }
    notify(t) {
        for (const f of this.watching.values()) {
            f(t);
        }
    }
}
class ObserverForm extends ReactiveForm {
    constructor(o, initial, makeForm) {
        super();
        this.observer = o;
        this.form = makeForm(initial);
        this.makeForm = makeForm;
        this.fId = this.observer.onNotify(t => {
            this.form = this.makeForm(t);
            if (this.manager)
                this.manager.render(this);
        });
    }
    render(m) {
        this.manager = m;
        return { type: 'group', items: [this.form] };
    }
    serialize(formData) {
        return this.form.serialize(formData);
    }
}
class AsyncForm extends ReactiveForm {
    constructor(form, defaultValue) {
        super();
        this.needInitialize = true;
        this.defaultValue = defaultValue;
        this.loader = form;
    }
    render(m) {
        if (this.needInitialize) {
            this.needInitialize = false;
            okOrLog(this.loader().then(f => {
                this.form = f;
                m.render(this);
            }));
        }
        if (this.form == undefined) {
            return {
                type: 'html',
                control: {
                    html: "<p>Loading...</p>"
                },
                layout: '{content}'
            };
        }
        else {
            return { type: 'group', items: [this.form] };
        }
    }
    serialize(formData) {
        if (this.form === undefined) {
            return (0,types.Ok)({ changed: false, raw: this.defaultValue });
        }
        return this.form.serialize(formData);
    }
}
class WithContext extends ReactiveForm {
    constructor(name, ctx, form) {
        super();
        this.c = ctx;
        this.form = form;
        this.name = name;
    }
    render(m) {
        m.setContext(this, this.name, this.c);
        return { type: 'group', items: [this.form] };
    }
    serialize(formData) {
        return this.form.serialize(formData);
    }
}
class TabContext {
    constructor(t) {
        this.tabForm = t;
    }
}
class TabForm extends ReactiveForm {
    constructor(baseTabName, baseTab, name) {
        super();
        this.tabs = [{ name: baseTabName, tab: baseTab }];
        this.name = name;
    }
    render(m) {
        m.setContext(this, this.name, new TabContext(this));
        const tabs = this.tabs.map((tab, index) => {
            let style = '; font-variant: all-petite-caps: font-weight: bold; cursor: pointer;';
            if (index == this.tabs.length - 1) {
                style += 'color: black; text-decoration: underline;';
            }
            else {
                style += 'color: #4d4d4d !important;';
            }
            const t = {
                type: 'button',
                control: {
                    html: `<p style="${style}">${tab.name}</p>`,
                    onClick: () => { this.navigateToTab(m, index); },
                    style: `display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;`
                },
                container: {
                    className: 'dynamic-form-top-tab',
                },
                sys: { isEmbedded: false }
            };
            if (index < this.tabs.length - 1) {
                t.control.html += _A5.u.icon.html('svgIcon=#alpha-icon-chevronRight:icon,24');
            }
            return t;
        });
        const header = {
            type: 'group',
            items: tabs,
            container: {
                style: `
                    display: flex;
                    gap: 0.5rem;
                    flex-direction: row;
                    justify-content: center;
                    background-color: lightgray;
                    padding: .3rem;
                `
            }
        };
        return {
            type: 'group',
            items: [
                header,
                { type: 'group', items: [this.tabs[this.tabs.length - 1].tab], container: { style: 'padding: 0.5rem' } }
            ],
            container: {
                style: `;
                    display: flex;
                    flex-direction: column;
                    outline: 1px solid black;
                `
            }
        };
    }
    navigateToTab(m, index) {
        if (index < 0 || index > this.tabs.length - 1)
            return;
        this.tabs = this.tabs.filter((_, i) => i <= index);
        m.render(this);
    }
    pushTab(m, name, tab) {
        this.tabs.push({ name, tab });
        m.render(this);
    }
    serialize(formData) {
        return this.tabs[0].tab.serialize(formData);
    }
}
class Show extends ReactiveForm {
    constructor(form, show) {
        super();
        this.form = form;
        this.show = show;
    }
    render(m) {
        if (this.show(m))
            return { type: 'group', items: [this.form] };
        return undefined;
    }
    serialize(formData) {
        return this.form.serialize(formData);
    }
}
class ValueMapper extends ReactiveForm {
    constructor(form, mapper) {
        super();
        this.form = form;
        this.mapper = mapper;
    }
    render(m) {
        return { type: 'group', items: [this.form] };
    }
    serialize(formData) {
        return this.form.serialize(formData).map(this.mapper);
    }
}
class ButtonForm extends ReactiveForm {
    constructor(label, onClick, data) {
        super();
        this.onClick = onClick;
        this.data = data;
        this.label = label;
        this.changed = false;
        this.form = {
            type: 'button',
            control: {
                html: this.label,
                onClick: () => this.onClick(this),
            },
            sys: { isEmbedded: false },
        };
    }
    render(m) {
        return this.form;
    }
    serialize(formData) {
        return (0,types.Ok)({ changed: this.changed, raw: this.data });
    }
}
class CodeEditor extends ReactiveForm {
    constructor(props) {
        super();
        this.id = uuidv4();
        this.props = props;
        this.changed = false;
        if (typeof this.props.data == 'string') {
            this.converters = {
                fromWorld: d => d,
                toWorld: d => (0,types.Ok)(d),
            };
        }
        else {
            this.converters = {
                fromWorld: d => JSON.stringify(d, null, ' '),
                toWorld: d => safeJsonParse(d).mapErr(e => e.message).map(x => x)
            };
        }
        this.data = this.converters.fromWorld(props.data);
    }
    render(m) {
        const containerId = this.id + '_CONTAINER';
        if (!this.editorElem) {
            const displayEditor = () => {
                if (!_$(this.id)) {
                    return;
                }
                const editor = new declares_TF.u.code.Editor(this.id, {
                    lang: this.props.lang
                });
                this.editorElem = document.getElementById(editor._.id);
                editor.setValue(this.data);
                const _this = this;
                editor.onChange = function () {
                    if (_this.props.readonly)
                        return;
                    m.setFormData(_this.id, this.value);
                    _this.data = this.value;
                    _this.changed = true;
                    m.setDirty(true);
                };
            };
            m.setFormData(this.id, this.data);
            this.initializationCallback = m.addRefreshCallback(displayEditor);
        }
        else {
            m.removeRefreshCallback(this.initializationCallback);
        }
        if (!this.reDisplayEditor) {
            this.reDisplayEditor = m.addRefreshCallback(() => {
                const elem = document.getElementById(containerId);
                if (!elem) {
                    m.removeRefreshCallback(this.reDisplayEditor);
                    this.reDisplayEditor = undefined;
                    return;
                }
                elem.innerHTML = "";
                elem.appendChild(this.editorElem);
            });
        }
        return {
            type: 'html',
            control: {
                html: `
                    <div id="${containerId}">
                    <div class="dynamic-form-code-editor"
                        id="${this.id}" 
                        style="width: 80%; ${this.props.readonly ? 'pointer-events: none; cursor: not-allowed;' : ''}">
                    </div>
                    </div>
                `
            },
            layout: '{content}',
        };
    }
    serialize(formData) {
        if (this.props.readonly || !(this.id in formData)) {
            return (0,types.Ok)({ changed: false, raw: this.props.data });
        }
        const val = formData[this.id];
        return this.converters.toWorld(val).map(raw => ({
            changed: this.changed,
            raw
        }));
    }
}

;// ./src/transformInterface.ts




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
    const ptr = obj.getPointer(containerId);
    if (!ptr)
        throw new Error("Container " + containerId + " does not exist.");
    const cId = ptr.id;
    const dropdownItems = transformAPI('GetListOfFormDefinitionsForAccount?includeFormDefinitions=false')
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
    let selected = '';
    const form = new AsyncForm(async () => {
        const items = await dropdownItems;
        return new DropdownForm({
            defaultValue: selected,
            options: items,
            onChange: x => selected = x
        });
    }, []);
    new ReactiveFormManager(form, cId, obj, raw => {
        return {
            type: 'group',
            items: [
                raw,
                {
                    type: 'button',
                    control: {
                        html: `<span> Load Form into List </span> `,
                        onClick: () => {
                            okOrLog(launch(selected, obj));
                        },
                    }
                }
            ]
        };
    });
}
async function launch(formId, obj) {
    const prepareResult = await prepareTFList(obj, formId);
    if ('err' in prepareResult) {
        console.error(prepareResult.err);
        return;
    }
    okOrLog(_openNewPanel({
        obj: obj,
        configName: formId,
        listContainerId: 'LIST_CONTAINER',
        searchContainerId: 'SEARCH_CONTAINER',
        titleName: 'Form ' + formId,
    }));
}

;// ./src/util/style.ts
/* harmony default export */ const style = (`
    body {
        --json-punctuation:rgb(196, 26, 97);
        --json-value:rgb(18, 119, 214);
        --js-keyword: rgba(230, 53, 206, 1);
        --js-string: rgba(204, 63, 7, 1);
        --js-num: rgba(61, 206, 162, 1);
        --js-comment: rgba(10, 180, 81, 1);
        --js-op: black;
    }

    .TFCodeJSONBrackets, .TFCodeJSONSep, .TFCodeJSONBool {
        color: var(--json-punctuation);
    }
    
    .TFCodeJSONStr, .TFCodeJSONNum {
        color: var(--json-value);
    }

    .op {
        color: var(--js-op);
    }

    .keyword {
        color: var(--js-keyword); 
    }

    .str {
        color: var(--js-string);
    }

    .num { color: var(--js-num); }
    .comment { color: var(--js-comment); }
`);

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

;// ./src/list/listUtils.ts






function makeObviousDefault(p, model) {
    const segments = [];
    model.pathTraverser(p, (_1, _2, m) => segments.push(m));
    const makeDefault = (segments) => {
        let top = segments.pop();
        if (segments.length == 0) {
            if (top.tag == 'data') {
                switch (top.type) {
                    case 'number': return 0;
                    case 'text': return '';
                    case 'dropdown': return '';
                    case 'datetime': return new Date();
                    case 'bool': return false;
                }
            }
            else {
                // Shouldn't ever get here anyway
                return null;
            }
        }
        switch (top.tag) {
            case 'object': {
                let obj = {};
                for (const key in top.keys) {
                    obj[key] = makeDefault(segments);
                }
                return obj;
            }
            case 'array': return [];
            case 'data': return null;
        }
    };
    segments.reverse();
    return makeDefault(segments);
}
function mappingToInput(list, dataModel, m, ops) {
    const readonly = ops.forceReadonly || (m.readOnly && !ops.forceNoReadonly);
    const modelType = dataModel.find(m.fullPath);
    return (data, i) => {
        let form;
        if (modelType?.tag == 'data') {
            if (modelType.type == 'dropdown' && m.dropdownConfig) {
                const config = m.dropdownConfig;
                let options;
                if ('choices' in config) {
                    options = config.choices.map(x => ({ text: x, value: x }));
                }
                else {
                    const s = new Set();
                    list.dataController.getAllFlattenedRows().forEach(dataPoint => s.add(dataPoint[dataModel.getUniqueName(m)]));
                    options = Array.from(s).map(x => ({ text: x, value: x }));
                }
                form = new DropdownForm({
                    defaultValue: data,
                    options,
                    allowAny: m.dropdownConfig.allowCustom,
                    readonly
                });
            }
            else {
                let ty = modelType.type;
                if (ty == 'bool')
                    ty = 'boolean';
                else if (ty == 'text')
                    ty = 'string';
                form = new Input({
                    initialData: data,
                    type: ty,
                    dateFmt: m.dateSettings?.clientFormat ?? DEFAULT_DATETIME_FMT,
                    readonly
                });
            }
        }
        else {
            if (!ops.jsonAsText && m.jsonEditorType) {
                const name = m.displayName ?? DataModel.printPath(m.fullPath);
                const configName = m.jsonEditorListConfigName ?? list.config.name + '_' + name;
                form = new ButtonForm('Open ' + name, (btnForm) => {
                    list.openSublistFromNested(configName, name, btnForm.data, (newData, childList) => {
                        btnForm.data = newData;
                        if (ops.requestSave)
                            ops.requestSave();
                        childList.obj.refreshClientSideComputations(true);
                        childList.recalculateButtons();
                        childList.listBox.refresh(true);
                    });
                }, data ?? []);
            }
            else if (ops.jsonAsText) {
                form = new Input({
                    initialData: data,
                    type: 'string',
                    readonly
                });
            }
            else {
                form = new CodeEditor({
                    data: data,
                    lang: 'json',
                    readonly
                });
            }
        }
        return new ItemLabel(i, {
            label: m.displayName ?? DataModel.printPath(m.fullPath),
            item: form,
            enabled: ops.forceOptional ? data !== undefined : undefined
        });
    };
}
const listUtils_openNewPanel = openNewPanel;
const _DYNAMIC_LIST_LOOKUP = DYNAMIC_LIST_LOOKUP;
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
    log() {
        console.error(this);
    }
    show() {
        return this.message;
    }
}
const FILE_UPLOAD_STACK = [];
function AFTER_FILE_UPLOAD() {
    let top = FILE_UPLOAD_STACK.pop();
    while (top) {
        top.afterFileUpload();
        top = FILE_UPLOAD_STACK.pop();
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
function clone(t) {
    if (t instanceof Array)
        return _jQuery.extend(true, [], t);
    return _jQuery.extend(true, {}, t);
}
async function listUtils_fetch(obj, configName, endpoint) {
    return new Promise((resolve) => {
        obj.ajaxCallback("", "", "fetch", "", `configName=${encodeURIComponent(configName)}`
            + (endpoint != undefined ? `&endpoint=${encodeURIComponent(endpoint)}` : ""), {
            onComplete: () => {
                const result = obj.stateInfo.apiResult;
                resolve(result);
            }
        });
    });
}
async function preFileInteraction(obj, list) {
    const oldGetListData = obj.getListDataAll;
    const rawData = list.dataController.getAllFlattenedRows();
    const processed = list.dataBridge.processedToRawStayFlattened(rawData, list.dataModel);
    if (processed.isOk() == false) {
        displayErrorMessage(new types.ErrMsg("There was an error processing the list data: " + processed.asErr()));
        return Promise.reject();
    }
    obj.getListDataAll = () => {
        return processed.asOk() ?? [];
    };
    let mappingNames = [];
    if (list.dataController.mappingInfo.isEntirelyTopLevel()) {
        mappingNames = list.config.mappings.map(x => {
            const unique = list.dataModel.getUniqueName(x);
            return {
                unique,
                display: x.displayName ?? unique
            };
        });
    }
    else {
        mappingNames = list.config.mappings
            .filter(x => list.dataController.mappingInfo.pathIsDeeplyNested(x.fullPath))
            .map(x => {
            const unique = list.dataModel.getUniqueName(x);
            return {
                unique,
                display: x.displayName ?? unique
            };
        });
    }
    return new Promise((resolve) => {
        obj.ajaxCallback("", "", "pre_file_upload", "", `DYNAMIC_LIST_COLUMN_NAMES=${encodeURIComponent(JSON.stringify(mappingNames.map(x => x.unique)))}`
            + `&DYNAMIC_LIST_COLUMN_DISPLAY_NAMES=${encodeURIComponent(JSON.stringify(mappingNames.map(x => x.display)))}`, {
            flagSaveListData: true,
            submitListData: true,
            onComplete: () => {
                obj.getListDataAll = oldGetListData;
                resolve({ ok: undefined });
            }
        });
    });
}
async function postFileInteraction(obj) {
    return new Promise((resolve, reject) => {
        obj.ajaxCallback("", "", "post_file_upload", "", "", {
            onComplete: () => {
                const result = obj.stateInfo.apiResult;
                if ('err' in result)
                    resolve(result);
                else {
                    safeJsonParse(result.ok).match({
                        ok: data => resolve({ ok: data }),
                        err: e => resolve({ err: e.message })
                    });
                }
            }
        });
    });
}

;// ./src/list/DynamicListSearch.ts






class DynamicListSearch {
    constructor(dynamicList, obj, contId) {
        // Used in _match
        this.searchMemoizationNeedsRebuild = false;
        this.searchMemoization = {};
        this.flatRowData = [];
        this.list = dynamicList;
        this.obj = obj;
        const ptr = obj.getPointer(contId);
        if (!ptr) {
            throw new Error("Container ID " + contId + " does not point to a container.");
        }
        this.formContainerId = ptr.id;
        this.resetForm();
    }
    resetForm() {
        this.form = new ReactiveFormManager(this.buildForm(), this.formContainerId, this.obj, f => ({
            type: 'group',
            items: [
                f,
                this.makeButtons()
            ]
        }));
    }
    buildForm() {
        let f;
        let title;
        if (this.list.config.searchOptions.advancedSearch) {
            title = "Advanced Search";
            f = this.buildAdvancedSearch();
        }
        else {
            title = "List Search";
            f = this.buildSimpleSearch();
        }
        return new TabForm(title, f, "search");
    }
    buildSimpleSearch() {
        const keyMap = {};
        for (const col of this.list.config.mappings) {
            if (this.list.config.searchOptions.onlyInclude) {
                if (this.list.config.searchOptions.onlyInclude.find(x => pathsEq(x, col.fullPath)) === undefined)
                    continue;
            }
            if (this.list.config.searchOptions.onlyExclude) {
                if (this.list.config.searchOptions.onlyExclude.find(x => pathsEq(x, col.fullPath)) !== undefined)
                    continue;
            }
            keyMap[this.list.dataModel.getUniqueName(col)] = (d, i) => {
                let data = d; // ?? makeObviousDefault(col.fullPath, this.list.dataModel);
                return mappingToInput(this.list, this.list.dataModel, col, {
                    forceNoReadonly: true,
                    forceOptional: true,
                    jsonAsText: true
                })(data, i);
            };
        }
        return new ObjectForm({}, keyMap);
    }
    buildAdvancedSearch() {
        const cols = this.list.config.mappings.filter(col => {
            if (this.list.config.searchOptions.onlyInclude) {
                if (this.list.config.searchOptions.onlyInclude.find(x => pathsEq(x, col.fullPath)) === undefined)
                    return false;
            }
            if (this.list.config.searchOptions.onlyExclude) {
                if (this.list.config.searchOptions.onlyExclude.find(x => pathsEq(x, col.fullPath)) !== undefined)
                    return false;
            }
            return true;
        });
        const arr = new ArrayForm([], (filter, i) => {
            const colChangeObserver = new Observer();
            return new ItemLabel(i, {
                label: "Filter",
                enclosed: true,
                collapsed: false,
                showDelete: true,
                item: new ObjectForm(filter, {
                    "columnName": (n, i) => new ItemLabel(i, {
                        label: 'Column Name',
                        item: new ColumnSelector(n, () => cols.map(x => x.fullPath), true, newName => { colChangeObserver.notify(newName); }),
                    }),
                    "columnVal": (n) => new ObserverForm(colChangeObserver, filter.columnName, (newCol) => {
                        const mapping = cols.find(x => pathsEq(x.fullPath, newCol)) ?? { fullPath: newCol };
                        const item = mappingToInput(this.list, this.list.dataModel, mapping, {
                            forceNoReadonly: true,
                            jsonAsText: true
                        });
                        return new ObjectForm(n, {
                            "tag": () => new ConstForm("value"),
                            "value": item
                        });
                    }),
                    "connector": (c, cnI) => {
                        if (i.currentIndex() == 0)
                            return new ConstForm(c ?? "AND");
                        return new ItemLabel(cnI, {
                            label: "Connector",
                            item: new DropdownForm({
                                options: [{ text: "And", value: "AND" }, { text: "Or", value: "OR" }],
                                defaultValue: c,
                            })
                        });
                    },
                    "op": (n, i) => new ObserverForm(colChangeObserver, filter.columnName, (newCol) => {
                        const newMapping = this.list.dataModel.find(newCol);
                        const ops = [{ text: 'Equal To', value: '=' }, { text: 'Not Equal To', value: '<>' }];
                        if (newMapping?.tag == 'data' && newMapping?.type == 'text') {
                            ops.push({ text: 'Starts With', value: 'x..' }, { text: 'Ends With', value: '..x' }, { text: 'Contains', value: '..x..' });
                        }
                        else if (newMapping?.tag === 'data') {
                            ops.push({ text: 'Less Than', value: '<' }, { text: 'Greater Than', value: '>' }, { text: 'Less Than or Equal To', value: '<=' }, { text: 'Greater Than or Equal To', value: '>=' });
                        }
                        return new ItemLabel(i, {
                            label: 'Operator',
                            item: new DropdownForm({
                                options: ops,
                                defaultValue: n,
                            })
                        });
                    }),
                    "quantifier": (q, i) => new ObserverForm(colChangeObserver, filter.columnName, (path) => {
                        const depthSpread = new Set();
                        this.list.dataModel
                            .allPaths()
                            .forEach(p => depthSpread.add(this.list.dataModel.getNestingLevel(p)));
                        const quantifiable = this.list.dataModel.getNestingLevel(path) > 0;
                        const multiLevelData = depthSpread.size > 2;
                        if (!quantifiable || !multiLevelData)
                            return new ConstForm(undefined);
                        return new ItemLabel(i, {
                            label: "Quantifier",
                            item: new DropdownForm({
                                options: [{ text: 'All', value: 'ALL' }, { 'text': 'Some', value: 'SOME' }],
                                defaultValue: q ?? 'ALL',
                            })
                        });
                    })
                })
            });
        }, () => ({ columnName: cols[0]?.fullPath ?? [], columnVal: { tag: 'value', value: '' }, connector: 'AND', op: '=', quantifier: 'ALL' }));
        return new WithContext(ConfigContext.id, new ConfigContext(false, this.list.config, this.list.obj, this.list.dataModel, undefined, this.list), arr);
    }
    makeButtons() {
        const makeFilters = () => {
            let filters = [];
            const serializeResult = this.form.serialize();
            if (serializeResult.isOk() == false) {
                displayErrorMessage(new types.ErrMsg(serializeResult.asErr()));
            }
            const serialized = serializeResult.asOk();
            if (this.list.config.searchOptions.advancedSearch) {
                filters = serialized;
                filters.forEach(f => {
                    const m = this.list.dataModel.find(f.columnName);
                    if (m?.tag === 'object' || m?.tag == 'array') {
                        f.op = "..x..";
                        f.type = 'json';
                    }
                });
            }
            else {
                const data = serialized;
                for (const key in data) {
                    if (data[key] === undefined)
                        continue;
                    if (!(key in data))
                        continue;
                    const path = this.list.dataModel.reverseNameLookup(key);
                    const schema = this.list.dataModel.find(path);
                    const filter = {
                        type: schema?.tag === 'data' ? schema.type : ((schema?.tag === 'object' || schema?.tag == 'array') ? 'json' : 'text'),
                        columnName: path,
                        columnVal: {
                            tag: 'value',
                            value: data[key],
                        },
                        op: "=",
                        connector: "AND"
                    };
                    if (filter.type === 'json') {
                        filter.op = '..x..';
                    }
                    filters.push(filter);
                }
            }
            for (const f of filters) {
                if (f.type === 'json')
                    continue;
                const dmType = this.list.dataModel.find(f.columnName);
                const processed = this.list.dataBridge.unprocessPoint(dmType, f.columnVal.value);
                if (processed.isOk()) {
                    f.columnVal.value = processed.asOk();
                }
                else {
                    return processed.map(() => []);
                }
            }
            ;
            return (0,types.Ok)(filters);
        };
        return {
            type: 'group',
            items: [
                {
                    type: 'button',
                    control: {
                        html: `<span class="dynamic-form-search-btn">Search</span>`,
                        onClick: () => {
                            makeFilters().match({
                                ok: filters => this.doSearch(filters),
                                err: e => {
                                    displayErrorMessage(new types.ErrMsg(e));
                                }
                            });
                        },
                    },
                    sys: { isEmbedded: false }
                },
                {
                    type: 'button',
                    control: {
                        html: `<span class="dynamic-form-clear-btn">Clear</span>`,
                        onClick: () => {
                            this.clearSearch();
                        }
                    },
                    sys: { isEmbedded: false }
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
    doSearch(filters) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return
        (this.obj.stateInfo.onSearchCallbacks ?? []).forEach((f) => f(this));
        const mode = this.serverOrClientSearch();
        if (mode == 'serverside') {
            this.serverSearch(filters);
        }
        else {
            this.clientSearch(filters);
        }
        this.obj._functions.search.onSearch();
        this.list.updateRecordCount();
    }
    clientSearch(filters) {
        this.searchMemoizationNeedsRebuild = true;
        const colLookup = {};
        const allowQuantified = this.list.config.searchOptions.advancedSearch === true;
        this.list.listBox.setFilter((data) => {
            const flatKey = data['*key'];
            const flatData = this.list.dataController.getFlatRow(flatKey);
            data = {};
            for (const key in flatData) {
                data[key] = flatData[key].data;
            }
            let matches = true;
            filters.forEach(query => {
                const uniqueName = this.list.dataModel.getUniqueName(query.columnName);
                let col;
                if (uniqueName in colLookup)
                    col = colLookup[uniqueName];
                else {
                    col = this.list.config.mappings.find(x => pathsEq(x.fullPath, query.columnName));
                    colLookup[uniqueName] = col;
                }
                const val = query.columnVal.value;
                const thisMatch = this._match(data, uniqueName, val, flatKey, {
                    dateFormat: col.dateSettings?.clientFormat ?? DEFAULT_DATETIME_FMT,
                    quantifier: query.quantifier,
                    op: query.op
                }, allowQuantified);
                if (query.connector === 'OR')
                    matches = thisMatch || matches;
                else
                    matches = thisMatch && matches;
            });
            return matches;
        });
    }
    serverSearch(filters) {
        this.list.setFilterAndFetch(filters);
    }
    clearSearch() {
        this.resetForm();
        (this.obj.stateInfo.onClearSearchCallbacks ?? []).forEach((f) => { f(this); });
        const mode = this.serverOrClientSearch();
        if (mode == 'serverside') {
            this.list.setFilterAndFetch([]);
        }
        else {
            this.list.clearSearchFilters();
        }
        this.obj._functions.search.onClear();
        this.list.updateRecordCount();
    }
    serverOrClientSearch() {
        let mode = 'serverside';
        if (!(this.list.config.searchOptions.serverSearch))
            mode = 'clientside';
        return mode;
    }
    _match(data, field, compareWith, flatIndex, obj, allowQuantified) {
        const path = this.list.dataModel.reverseNameLookup(field);
        if (!path)
            return false;
        const scheme = this.list.dataModel.find(path);
        if (!scheme)
            return false;
        const matches = (data, field) => {
            let rowValue = data[field];
            const op = obj.op ?? '=';
            let rowValDateStr = '';
            let rowValDate = new Date();
            let compareWithDate = new Date();
            if (scheme.tag === 'data' && scheme.type == 'datetime') {
                if (rowValue instanceof Date) {
                    rowValDate = rowValue;
                    rowValDateStr = rowValue.toFormat(obj.dateFormat);
                }
                else {
                    // eslint-disable-next-line @typescript-eslint/no-base-to-string
                    rowValDateStr = rowValue?.toString() ?? '';
                    // eslint-disable-next-line @typescript-eslint/no-base-to-string
                    rowValDate.fromFormat(rowValue?.toString() ?? '', obj.dateFormat);
                }
                if (compareWith instanceof Date) {
                    compareWithDate = compareWith;
                }
                else {
                    // eslint-disable-next-line @typescript-eslint/no-base-to-string
                    compareWithDate.fromFormat(compareWith?.toString() ?? '', obj.dateFormat);
                }
            }
            else if (scheme.tag === 'object' || scheme.tag == 'array') {
                if (typeof rowValue !== 'string')
                    rowValue = JSON.stringify(rowValue);
                if (typeof compareWith !== 'string')
                    compareWith = JSON.stringify(compareWith);
            }
            const cmpDate = scheme.tag === 'data' && scheme.type === 'datetime';
            const cmpText = (scheme.tag === 'object' || scheme.tag == 'array') || (scheme.tag === 'data' && (scheme.type == 'dropdown' || scheme.type == 'text'));
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
                    if (rowValue === null || rowValue === undefined || compareWith === null || compareWith === undefined)
                        return false;
                    return rowValue < compareWith;
                }
                case '>': {
                    if (cmpDate) {
                        return rowValDate > compareWithDate;
                    }
                    if (rowValue === null || rowValue === undefined || compareWith === null || compareWith === undefined)
                        return false;
                    return rowValue > compareWith;
                }
                case '<=': {
                    if (cmpDate) {
                        return rowValDate <= compareWithDate;
                    }
                    if (rowValue === null || rowValue === undefined || compareWith === null || compareWith === undefined)
                        return false;
                    return rowValue <= compareWith;
                }
                case '>=': {
                    if (cmpDate) {
                        return rowValDate >= compareWithDate;
                    }
                    if (rowValue === null || rowValue === undefined || compareWith === null || compareWith === undefined)
                        return false;
                    return rowValue >= compareWith;
                }
                case 'x..': {
                    if (cmpText) {
                        if (rowValue === null || rowValue === undefined || compareWith === null || compareWith === undefined)
                            return false;
                        // eslint-disable-next-line @typescript-eslint/no-base-to-string
                        return (rowValue.toString()).startsWith(compareWith.toString());
                    }
                    return false;
                }
                case '..x': {
                    if (cmpText) {
                        if (rowValue === null || rowValue === undefined || compareWith === null || compareWith === undefined)
                            return false;
                        // eslint-disable-next-line @typescript-eslint/no-base-to-string
                        return (rowValue.toString()).endsWith(compareWith.toString());
                    }
                    return false;
                }
                case '..x..': {
                    if (cmpText) {
                        if (rowValue === null || rowValue === undefined || compareWith === null || compareWith === undefined)
                            return false;
                        // eslint-disable-next-line @typescript-eslint/no-base-to-string
                        return (rowValue.toString()).includes(compareWith.toString());
                    }
                    return false;
                }
                default: {
                    return true;
                }
            }
        };
        if (this.searchMemoizationNeedsRebuild) {
            this.searchMemoizationNeedsRebuild = false;
            this.searchMemoization = {};
            this.flatRowData = this.list.dataController.getAllFlattenedRows();
            this.flatRowData.forEach((data, index) => {
                this.searchMemoization[index] = matches(data, field);
            });
        }
        let flag;
        let rawRow = this.list.dataController.originalIndexOf(flatIndex).asOk();
        if (this.list.dataModel.getNestingLevel(path) == 0 || allowQuantified == false) {
            flag = matches(data, field);
        }
        else {
            if (obj.quantifier === 'ALL') {
                // If every row belonging to this parent index matches,
                // then we match.
                let allMatch = true;
                this.flatRowData.forEach((_, index) => {
                    if (this.list.dataController.originalIndexOf(index).asOk() !== rawRow)
                        return;
                    allMatch = allMatch && this.searchMemoization[index];
                });
                flag = allMatch;
            }
            else {
                // If *some* row belonging to the parent index matches,
                // then we match
                // let someMatch = false;
                // this.flatRowData.forEach((_, index) => {
                //     if (this.list.dataController.originalIndexOf(index).asOk() !== rawRow) return;
                //     someMatch = someMatch || this.searchMemoization[index];
                // })
                // flag = someMatch;
                // If we got to this point of quantification, then there must be some nested mapping.
                // When searching existentially, we just want to show matching records.
                // So we just return the search memo entry.
                flag = this.searchMemoization[flatIndex] ?? false;
            }
        }
        return flag;
    }
}

;// ./src/list/DataBridge.ts



// Convert raw data -> usable data
// Usable data -> raw data
class DataBridge {
    constructor(config, serverTzOffset) {
        this.serverTzOffset = serverTzOffset;
        this.config = config;
    }
    setTzOffset(n) {
        this.serverTzOffset = n;
    }
    // Imported data should already be aligned with the flattening scheme
    processImportedData(data, model) {
        debugger;
        const dataCpy = clone(data);
        dataCpy.forEach(point => {
            if (typeof point === 'object' && point !== null) {
                for (const key in point) {
                    const path = model.reverseNameLookup(key);
                    if (!path)
                        continue;
                    const dm = model.find(path);
                    if (!dm)
                        continue;
                    const processResult = this.processPoint(dm, point[key]);
                    if (processResult.asErr() !== undefined)
                        return processResult;
                    point[key] = processResult.asOk();
                }
            }
        });
        return (0,types.Ok)(dataCpy);
    }
    rawToProcessed(d, model) {
        const data = clone(d);
        for (let i = 0; i < data.length; i++) {
            let result = this.processPoint(model.model, data[i]);
            if (result.asErr() !== undefined)
                return result;
            data[i] = result.asOk();
        }
        return (0,types.Ok)(data);
    }
    processPoint(dm, point) {
        if (dm.preprocess)
            point = (0,types.stringReprToFn)(dm.preprocess)(point, this.serverTzOffset);
        if (point === null && dm.nullable)
            return (0,types.Ok)(null);
        if (point === undefined && dm.optional)
            return (0,types.Ok)(undefined);
        if (dm.tag == 'object') {
            if (dm.fromString && typeof point == 'string') {
                let parsedResult = safeJsonParse(point);
                if (parsedResult.asErr() !== undefined)
                    return parsedResult;
                point = parsedResult.asOk();
            }
            if (typeof point != 'object')
                return (0,types.Err)(`Expected ${JSON.stringify(point)} to be an object.`);
            for (const key in dm.keys) {
                const keyModel = dm.keys[key];
                const res = this.processPoint(keyModel, point[key]);
                const err = res.asErr();
                if (err === undefined)
                    point[key] = res.asOk();
                else
                    return res;
            }
            return (0,types.Ok)(point);
        }
        else if (dm.tag == 'array') {
            if (dm.fromString && typeof point == 'string') {
                let parsedResult = safeJsonParse(point);
                if (parsedResult.asErr() !== undefined)
                    return parsedResult;
                point = parsedResult.asOk();
            }
            if (!(point instanceof Array))
                return (0,types.Err)(`Expected ${JSON.stringify(point)} to be an array.`);
            let result = [];
            point.forEach(x => {
                let res = this.processPoint(dm.item, x);
                if (res.asErr() !== undefined)
                    return res;
                result.push(res.asOk());
            });
            return (0,types.Ok)(result);
        }
        else if (dm.tag == 'data') {
            if (dm.type == 'datetime' && dm.preprocess === undefined && typeof point === 'string') {
                let date = new Date();
                date.fromFormat(point, DEFAULT_DATETIME_FMT);
                point = date;
            }
            return (0,types.Ok)(point);
        }
        else {
            return (0,types.Ok)(point);
        }
    }
    processedToRaw(d, dm) {
        const data = clone(d);
        for (let i = 0; i < data.length; i++) {
            const res = this.unprocessPoint(dm.model, data[i]);
            if (res.asErr() !== undefined) {
                return res;
            }
            data[i] = res.asOk();
        }
        return (0,types.Ok)(data);
    }
    unprocessPoint(dm, point) {
        if (dm.postprocess)
            point = (0,types.stringReprToFn)(dm.postprocess)(point, this.serverTzOffset);
        if (point === null && dm.nullable)
            return (0,types.Ok)(null);
        if (point === undefined && dm.optional)
            return (0,types.Ok)(undefined);
        if (dm.tag == 'object') {
            if (typeof point != 'object')
                return (0,types.Err)(`Expected ${JSON.stringify(point)} to be an object.`);
            for (const key in dm.keys) {
                const keyModel = dm.keys[key];
                const res = this.unprocessPoint(keyModel, point[key]);
                const err = res.asErr();
                if (err === undefined)
                    point[key] = res.asOk();
                else
                    return res;
            }
            if (dm.fromString && typeof point !== 'string') {
                return (0,types.Ok)(JSON.stringify(point));
            }
            return (0,types.Ok)(point);
        }
        else if (dm.tag == 'array') {
            if (!(point instanceof Array))
                return (0,types.Err)(`Expected ${JSON.stringify(point)} to be an array.`);
            let result = [];
            point.forEach(x => {
                let res = this.unprocessPoint(dm.item, x);
                if (res.asErr() !== undefined)
                    return res;
                result.push(res.asOk());
            });
            if (dm.fromString && typeof point !== 'string') {
                return (0,types.Ok)(JSON.stringify(result));
            }
            return (0,types.Ok)(result);
        }
        else if (dm.tag == 'data') {
            if (point instanceof Date && dm.postprocess === undefined && dm.type === 'datetime') {
                point = point.toFormat(DEFAULT_DATETIME_FMT);
            }
            return (0,types.Ok)(point);
        }
        else {
            return (0,types.Ok)(point);
        }
    }
    processedToRawStayFlattened(d, model) {
        const data = clone(d);
        for (let i = 0; i < data.length; i++) {
            for (const key in data[i]) {
                let path = model.reverseNameLookup(key);
                if (path) {
                    let scheme = model.find(path);
                    const res = this.processPoint(scheme, data[i][key]);
                    if (res.asErr() !== undefined)
                        return res;
                    data[i][key] = res.asOk();
                }
            }
        }
        return (0,types.Ok)(data);
    }
}

;// ./src/list/DataMappingInfo.ts

class DataMappingInfo {
    constructor(model, config) {
        this.dataModel = model;
        if (config.mappings.length == 0) {
            this.deepestNested = [];
            return;
        }
        const deepestNest = config.mappings.map(x => model.getNestingLevel(x.fullPath))
            .reduce((a, b) => Math.max(a, b));
        if (deepestNest == 0) {
            this.deepestNested = [];
        }
        else {
            this.deepestNested = config.mappings
                .filter(x => model.getNestingLevel(x.fullPath) == deepestNest)
                .map(x => {
                let dataPath = x.fullPath.map(segment => {
                    if (segment.tag == 'object')
                        return { tag: 'object', key: segment.key };
                    else
                        return { tag: 'array', index: 0 };
                });
                return { path: x.fullPath, dataPath };
            });
        }
    }
    pathIsDeeplyNested(p) {
        return this.deepestNested.find(x => pathsEq(x.path, p)) !== undefined;
    }
    deeplyNestedPaths() {
        return this.deepestNested;
    }
    isEntirelyTopLevel() {
        return this.deepestNested.length == 0;
    }
}

;// ./src/list/DataController.ts




class DataController {
    constructor(rawData, config, dataModel) {
        this.rowExplosionInfo = new Map();
        this.config = config;
        this.rawData = rawData;
        this.dataModel = dataModel;
        this.mappingInfo = new DataMappingInfo(dataModel, config);
        this.calculateFlattenedData();
        this.rawDirtyRows = new Set();
        this.rawDeletedRows = new Set();
        this.rawInsertedRows = new Set();
    }
    isDirty() {
        return this.rawInsertedRows.size > 0 || this.rawDeletedRows.size > 0 || this.rawDirtyRows.size > 0;
    }
    // Get non-flattened dirty rows
    getDirtyRows() {
        const out = {
            toUpdate: this.rawData.filter((_, i) => this.rawDirtyRows.has(i)),
            toDelete: this.rawData.filter((_, i) => this.rawDeletedRows.has(i)),
            toInsert: this.rawData.filter((_, i) => this.rawInsertedRows.has(i) && !this.rawDeletedRows.has(i)),
        };
        return clone(out);
    }
    getAllFlattenedRows() {
        return clone(this.flattenedData).map(x => DataController.unflattenPoint(x));
    }
    static unflattenPoint(f) {
        const out = {};
        for (const key in f)
            out[key] = f[key].data;
        return out;
    }
    getFlattenedRow(i) {
        return DataController.unflattenPoint(this.flattenedData[i]);
    }
    getFlatRow(i) {
        return this.flattenedData[i];
    }
    getRawRow(i) {
        return this.rawData[i];
    }
    /// Delete deleted rows, set other rows clean. Return (copy of) data.
    applyChanges() {
        // No insertion keys ==> 1:1 mapping with flat data
        // Insertion keys ==> literally cannot delete a top level row because 
        // we only operate on sub-elements 
        if (this.mappingInfo.isEntirelyTopLevel()) {
            this.rawData = this.rawData.filter((_, i) => !this.rawDeletedRows.has(i));
        }
        this.rawDeletedRows.clear();
        this.rawInsertedRows.clear();
        this.rawDirtyRows.clear();
        return clone(this.rawData);
    }
    length() {
        return { raw: this.rawData.length, flattened: this.flattenedData.length };
    }
    rowMetadata(index) {
        const idx = this.rowExplosionInfo.get(index);
        if (idx === undefined) {
            return undefined;
        }
        return {
            isDeleted: this.rawDeletedRows.has(idx),
            isInserted: this.rawInsertedRows.has(idx),
            isDirty: this.rawDirtyRows.has(idx)
        };
    }
    getData(index, path) {
        const idx = this.rowExplosionInfo.get(index);
        if (idx === undefined) {
            return (0,types.Err)(void (0));
        }
        return (0,types.Ok)(this.chasePath(this.rawData[idx], path));
    }
    getAllRawData() {
        return clone(this.rawData);
    }
    swapRows(rawIdx1, rawIdx2) {
        const tmp = this.rawData[rawIdx1];
        this.rawData[rawIdx1] = this.rawData[rawIdx2];
        this.rawData[rawIdx2] = tmp;
        this.rawDirtyRows.add(rawIdx1);
        this.rawDirtyRows.add(rawIdx2);
        this.calculateFlattenedData();
    }
    updateRows(items) {
        items.forEach(({ index, newData }) => {
            const relaventRow = this.flattenedData[index];
            const unflattenedIndex = this.rowExplosionInfo.get(index);
            if (unflattenedIndex === undefined) {
                displayErrorMessage(new types.ErrMsg("The index " + index + " is out of range. This is a bug."));
                return;
            }
            for (const key in relaventRow) {
                if (key in newData) {
                    this.pathUpdate(this.rawData[unflattenedIndex], relaventRow[key].path, newData[key]);
                }
            }
            this.rawDirtyRows.add(unflattenedIndex);
        });
        this.calculateFlattenedData();
    }
    // For if we're appending to a brand new item
    newRowFromBlank(data) {
        let parent = this.rawData[0];
        this.mappingInfo.deeplyNestedPaths().forEach(({ path, dataPath }) => {
            const k = this.dataModel.getUniqueName(path);
            if (k in data) {
                this.pathUpdate(parent, dataPath, data[k]);
            }
        });
        this.rawDirtyRows.add(0);
        this.calculateFlattenedData();
    }
    insertRows(data, indexIsRaw) {
        if (this.mappingInfo.isEntirelyTopLevel()) {
            data.forEach(x => {
                const d = x.data;
                const f = {};
                for (const key in d) {
                    f[key] = {
                        path: [{ tag: 'object', key }],
                        data: d[key]
                    };
                }
                ;
                this.rawData.push(d);
                this.rawInsertedRows.add(this.rawData.length - 1);
            });
            this.calculateFlattenedData();
            return;
        }
        if (this.flattenedData.length == 0) {
            let rest = data.splice(1);
            this.newRowFromBlank(data[0].data);
            this.insertRows(rest, indexIsRaw);
            return;
        }
        data.forEach(d => {
            let originalRow;
            if (indexIsRaw) {
                originalRow = this.rawData[d.attachToIndex];
                this.rawDirtyRows.add(d.attachToIndex);
            }
            else {
                const rawIndex = this.rowExplosionInfo.get(d.attachToIndex);
                if (rawIndex === undefined) {
                    displayErrorMessage(new types.ErrMsg("The index " + rawIndex + " is out of range. This is a bug."));
                    return;
                }
                originalRow = this.rawData[rawIndex];
                this.rawDirtyRows.add(rawIndex);
            }
            let deeplyNestedExample = clone(this.mappingInfo.deeplyNestedPaths()[0].dataPath);
            while (deeplyNestedExample.length > 0 && deeplyNestedExample[deeplyNestedExample.length - 1].tag != 'array')
                deeplyNestedExample.pop();
            deeplyNestedExample.pop();
            let currArray = this.chasePath(originalRow, deeplyNestedExample);
            const length = currArray.length;
            for (const key in d.data) {
                let path = this.dataModel.reverseNameLookup(key);
                if (!path)
                    continue;
                if (this.mappingInfo.pathIsDeeplyNested(path) == false)
                    continue;
                const dataPath = path.map(x => x.tag == 'object' ? x : { tag: 'array', index: length });
                this.pathUpdate(originalRow, dataPath, d.data[key]);
            }
        });
        this.calculateFlattenedData();
    }
    originalIndexOf(index) {
        const idx = this.rowExplosionInfo.get(index);
        if (idx === undefined) {
            return (0,types.Err)(void (0));
        }
        return (0,types.Ok)(idx);
    }
    deleteRows(indexes) {
        if (this.mappingInfo.isEntirelyTopLevel()) {
            indexes.forEach(i => {
                this.rawDeletedRows.add(i);
                this.rawInsertedRows.delete(i);
            });
        }
        else {
            indexes.forEach(i => {
                const flatRow = this.flattenedData[i];
                const rawIndex = this.rowExplosionInfo.get(i);
                if (rawIndex === undefined) {
                    displayErrorMessage(new types.ErrMsg("Index " + i + "can't be unflattened. This is a bug."));
                    return;
                }
                const rawRow = this.rawData[rawIndex];
                const deepestArrayPath = (p) => {
                    for (let i = p.length - 1; i >= 0; i--) {
                        if (p[i].tag == 'array')
                            return p.slice(0, i + 1);
                    }
                };
                const insertionKey = this.dataModel.getUniqueName(this.mappingInfo.deeplyNestedPaths()[0].path);
                const pathToDelete = flatRow[insertionKey].path;
                const arrayPart = deepestArrayPath(pathToDelete);
                if (arrayPart === undefined)
                    return;
                const last = arrayPart[arrayPart.length - 1];
                if (last.tag != 'array')
                    return;
                const idxToRemove = last.index;
                const newArray = this.chasePath(rawRow, arrayPart.slice(0, arrayPart.length - 1));
                if (!(newArray instanceof Array))
                    return;
                newArray.splice(idxToRemove, 1);
                this.rawDirtyRows.add(rawIndex);
                this.rowExplosionInfo.delete(i);
            });
        }
        this.calculateFlattenedData();
    }
    chasePath(o, path) {
        if (path.length == 0)
            return o;
        if (o === undefined || o === null)
            return null;
        if (path[0].tag == 'array')
            return this.chasePath(o[path[0].index], path.slice(1));
        return this.chasePath(o[path[0].key], path.slice(1));
    }
    // Get any raw rows that were not expanded
    getFreeRows() {
        const allShownRows = new Set(this.rowExplosionInfo.values());
        return clone(this.rawData)
            .map((x, i) => ({ index: i, row: x }))
            .filter((_, i) => !allShownRows.has(i));
    }
    pathUpdate(o, path, data) {
        path = clone(path);
        if (path.length == 0)
            return;
        const front = path.splice(0, 1)[0];
        const expectObj = new types.ErrMsg(`The data in the configuration is misconfigured. Datapoint ${JSON.stringify(o)} should be an object, but it is not.`);
        const expectArr = new types.ErrMsg(`The data in the configuration is misconfigured. Datapoint ${JSON.stringify(o)} should be an array, but it is not.`);
        if (path.length == 0) {
            if (front.tag == 'object') {
                if (o === null)
                    o = {};
                else if (typeof o != 'object') {
                    displayErrorMessage(expectObj);
                    return;
                }
                o[front.key] = data;
            }
            else {
                if (!Array.isArray(o)) {
                    displayErrorMessage(expectArr);
                    return;
                }
                if (front.index >= o.length) {
                    o.push(data);
                }
                else {
                    o[front.index] = data;
                }
            }
        }
        else {
            if (front.tag == 'object') {
                if (typeof o != 'object' || o === null) {
                    displayErrorMessage(expectObj);
                    return;
                }
                if (o[front.key] == null || o[front.key] == undefined) {
                    if (path[0].tag == 'object')
                        o[front.key] = {};
                    else
                        o[front.key] = [];
                }
                this.pathUpdate(o[front.key], path, data);
            }
            else {
                if (!Array.isArray(o)) {
                    displayErrorMessage(expectArr);
                    return;
                }
                if (o[front.index] == null || o[front.index] == undefined) {
                    if (path[0].tag == 'object')
                        o[front.index] = {};
                    else
                        o[front.index] = [];
                }
                this.pathUpdate(o[front.index], path, data);
            }
        }
    }
    calculateFlattenedData() {
        const dataCpy = clone(this.rawData);
        this.rowExplosionInfo = new Map();
        this.flattenedData = [];
        dataCpy.forEach((entry, index) => {
            const currIdx = this.flattenedData.length;
            const toInsert = this.flatten(entry);
            for (let i = currIdx; i < currIdx + toInsert.length; i++) {
                this.rowExplosionInfo.set(i, index);
            }
            this.flattenedData.push(...toInsert);
        });
    }
    flatten(point) {
        let leadsToNested = new Map();
        let allNested = this.dataModel.allPaths()
            .filter(x => this.dataModel.getNestingLevel(x) > 0)
            .filter(x => this.config.mappings.find(m => pathsEq(m.fullPath, x)));
        allNested.forEach(path => {
            let subPath = [];
            path.forEach(p => {
                subPath.push(p);
                leadsToNested.set(this.dataModel.getUniqueName(subPath), true);
            });
        });
        const recurse = (point, model, dataPath) => {
            if (model.tag == 'object') {
                let constants = {};
                let toExpand = [];
                if (!(typeof point === 'object') || point === null)
                    return [];
                for (const key in model.keys) {
                    if (key in point) {
                        const subPath = [...dataPath, { tag: 'object', key }];
                        if (!leadsToNested.get(model.keys[key].uniqueName)) {
                            constants[model.keys[key].uniqueName] = { data: point[key], path: subPath };
                        }
                        else {
                            toExpand.push(recurse(point[key], model.keys[key], subPath));
                        }
                    }
                }
                if (toExpand.length == 0)
                    return [constants];
                const cartesian = toExpand.reduce((a, b) => {
                    const out = [];
                    for (const elemA of a) {
                        for (const elemB of b) {
                            const bCpy = clone(elemB);
                            Object.assign(bCpy, elemA);
                            out.push(bCpy);
                        }
                    }
                    return out;
                });
                cartesian.forEach(point => {
                    let constCpy = clone(constants);
                    Object.assign(point, constCpy);
                });
                return cartesian;
            }
            else if (model.tag == 'array') {
                if (!(point instanceof Array))
                    return [];
                return point.flatMap((p, i) => recurse(p, model.item, [...dataPath, { tag: 'array', index: i }]));
            }
            else if (model.tag == 'data' || model.tag == 'unknown') {
                return [{ [this.dataModel.getUniqueName(dataPath)]: { data: point, path: dataPath } }];
            }
            return [];
        };
        let flattened = recurse(point, this.dataModel.model, []);
        return flattened;
    }
}

;// ./src/list/DynamicList.ts











class DynamicList {
    constructor() {
        this.rawFetchedData = [];
        this.selectedRows = new Set();
        this.clickedRow = null;
        this.initialLoadComplete = false;
        this._rowDragState = {
            listItem: null,
            moveToIdx: -1,
        };
        this.permanentFilters = [];
        this.searchFilters = [];
        this.orderings = [];
        this.buttonFns = {};
        this.onRender = [];
        this.permissions = {
            editConfigMappings: false,
            editFullConfig: false
        };
        this.containerId = '';
        this.id = 'list_' + uuidv4();
        _DYNAMIC_LIST_LOOKUP[this.id] = this;
    }
    destructor() {
        if (this.listBox.destroy)
            this.listBox.destroy();
    }
    static makeDynamicList(ops) {
        return new Promise((resolve) => {
            const list = new DynamicList();
            list.permanentFilters = ops.filters ?? [];
            list.searchFilters = [];
            list.buttonFns = {};
            list.onRender = [];
            list.obj = ops.obj;
            list.prefetched = ops.prefetch;
            list.config = clone(ops.prefetch.config);
            list.permissions = ops.permissions;
            ops.obj.stateInfo.configName = list.config.name;
            const ptr = ops.obj.getPointer(ops.containerId);
            if (!ptr) {
                throw new Error("Container ID " + ops.containerId + " does not exist.");
            }
            list.containerId = ptr.id;
            if (ops.otherProperties) {
                list.onSaveOverride = ops.otherProperties.onSaveOverride;
                list.staticDataOverride = ops.otherProperties.dataOverride;
            }
            validateConfig(list.config);
            if (list.config.onInitialize) {
                try {
                    (0,types.stringReprToFn)(list.config.onInitialize)(list);
                }
                catch (e) {
                    console.error("Initialize function failed.");
                    console.error(e);
                }
            }
            ops.obj.saveDynamicListEdits = () => list.saveDynamicListEdits();
            let prefetchedData = [];
            if (list.prefetched.data) {
                if ('count' in list.prefetched.data)
                    prefetchedData = list.prefetched.data.result;
                else
                    prefetchedData = list.prefetched.data;
            }
            list.dataModel = new DataModel({
                rawRows: prefetchedData,
                root: ops.prefetch.config.dataModel
            });
            list.uniqueNameToSafeName = list.safeNameMapping();
            list.buildList();
            resolve(list);
        })
            .then((list) => {
            if (ops.prefetch.data === undefined || ops.prefetch.data.length == 0) {
                return list.fetchData();
            }
            else {
                list.setData(ops.prefetch.data, ops.prefetch.serverTimeOffset);
                return list;
            }
        })
            .then((list) => {
            list.initialLoadComplete = true;
            return list.reRender(false);
        }).then((list) => {
            list.recalculateButtons();
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
        this.buildList();
        return this.reRender(true);
    }
    downloadExcelTemplate() {
        okOrLog(preFileInteraction(this.obj, this)
            .then(() => { this.obj.runAction('Download Excel Template'); }));
    }
    uploadFileToList() {
        const safeFiltersRes = safeServerFilters([...this.permanentFilters, ...this.searchFilters]);
        const safeFilters = safeFiltersRes.asOk();
        if (safeFilters === undefined) {
            displayErrorMessage(new types.ErrMsg(safeFiltersRes.asErr()));
            return;
        }
        this.obj.stateInfo.currentFilters = JSON.stringify(safeFilters);
        FILE_UPLOAD_STACK.length = 0;
        FILE_UPLOAD_STACK.push(this);
        okOrLog(preFileInteraction(this.obj, this)
            .then(() => { this.obj.runAction('File Upload'); }));
    }
    afterFileUpload() {
        okOrLog(postFileInteraction(this.obj)
            .then(uploadResult => {
            if ('ok' in uploadResult) {
                const onDone = () => {
                    okOrLog(this.reRender(false).then(() => { this.recalculateButtons(); }));
                };
                this.dataBridge.processImportedData(uploadResult.ok, this.dataModel).match({
                    ok: data => {
                        const regularInsert = () => {
                            this.dataController.insertRows(data.map(x => ({ data: x, attachToIndex: 0 })), true);
                            onDone();
                        };
                        if (this.dataController.mappingInfo.isEntirelyTopLevel() === false) {
                            this.showRowPicker({
                                onUnneeded: regularInsert,
                                onSelect: idx => {
                                    this.dataController.insertRows(data.map(x => ({ data: x, attachToIndex: idx })), true);
                                    onDone();
                                },
                            });
                        }
                        else {
                            regularInsert();
                        }
                    },
                    err: e => {
                        displayErrorMessage(new types.ErrMsg("There was an error processing the imported data: " + e));
                    }
                });
            }
            else {
                displayErrorMessage(new types.ErrMsg("There was an error uploading the data: " + uploadResult.err));
            }
        }));
    }
    downloadDataToFile() {
        const safeFiltersRes = safeServerFilters([...this.permanentFilters, ...this.searchFilters]);
        const safeFilters = safeFiltersRes.asOk();
        if (safeFilters === undefined) {
            displayErrorMessage(new types.ErrMsg(safeFiltersRes.asErr()));
            return;
        }
        this.obj.stateInfo.currentFilters = JSON.stringify(safeFilters);
        okOrLog(preFileInteraction(this.obj, this)
            .then(() => { this.obj.runAction('File Download'); }));
    }
    async saveDynamicListEdits() {
        let { toUpdate, toDelete, toInsert } = this.dataController.getDirtyRows();
        const override = this.onSaveOverride;
        if (override) {
            let data = this.dataController.applyChanges();
            this.dataBridge.processedToRaw(data, this.dataModel).match({
                ok: data => {
                    const result = override(this, data);
                    if (result !== undefined) {
                        return result.then(() => {
                            this.obj.refreshClientSideComputations(true);
                            this.recalculateButtons();
                            return this.reRender(true);
                        }).then(() => { });
                    }
                },
                err: e => Promise.resolve(displayErrorMessage(new types.ErrMsg(e)))
            });
        }
        const onComplete = async () => {
            const result = this.obj.stateInfo.apiResult;
            if ('err' in result) {
                let errMsgTxt = "<p>There were errors while syncing data.</p> <ol>";
                errMsgTxt = `<li>${result.err.toString()}</li>`;
                errMsgTxt += "</ol>";
                displayErrorMessage(new types.ErrMsg(errMsgTxt));
            }
            this.obj.refreshClientSideComputations(true);
            this.recalculateButtons();
            await this.reRender(true);
        };
        const processed = this.dataBridge.processedToRaw(toUpdate, this.dataModel)
            .flatMap(x => this.dataBridge.processedToRaw(toDelete, this.dataModel).map(y => [x, y]))
            .flatMap(([x, y]) => this.dataBridge.processedToRaw(toInsert, this.dataModel).map(z => [x, y, z]));
        if (processed.isOk()) {
            [toUpdate, toDelete, toInsert] = processed.asOk();
        }
        else {
            displayErrorMessage(new types.ErrMsg("There was an error processing the data: " + processed.asErr()));
            return Promise.reject();
        }
        if (this.config.dataSource.type == 'sql') {
            return new Promise(resolve => {
                this.obj.ajaxCallback("", "", "updateData", "", "configName=" + encodeURI(this.config.name)
                    + "&toUpdate=" + encodeURI(JSON.stringify(toUpdate))
                    + "&toInsert=" + encodeURI(JSON.stringify(toInsert))
                    + "&toDelete=" + encodeURI(JSON.stringify(toDelete)), {
                    onComplete: () => onComplete().then(() => resolve())
                });
            });
        }
        else if ('endpoints' in this.config.dataSource) {
            const allQueries = [];
            const queryPopulateErrors = [];
            const populateQueries = (list, endpoint) => {
                list.forEach(() => {
                    if (!('endpoints' in this.config.dataSource))
                        return;
                    if (!(endpoint in this.config.dataSource.endpoints))
                        return;
                    const ep = this.config.dataSource.endpoints[endpoint];
                    if (ep) {
                        allQueries.push({
                            endpoint: endpoint,
                            callback: (0,types.stringReprToFn)("() => {}"),
                        });
                    }
                    else {
                        const errMsgTxt = `<p>The necessary endpoint (${endpoint}) is not defined for this list.</p>`;
                        queryPopulateErrors.push(errMsgTxt);
                    }
                });
            };
            populateQueries(toInsert, 'create');
            populateQueries(toUpdate, 'update');
            populateQueries(toDelete, 'delete');
            if (queryPopulateErrors.length > 0) {
                let msg = "<p>There were errors while synchronizing the list.</p><ul>";
                queryPopulateErrors.forEach(x => msg += x);
                msg += "</ul>";
                displayErrorMessage(new types.ErrMsg(msg));
                return;
            }
            const promises = allQueries.map(q => listUtils_fetch(this.obj, this.config.name, q.endpoint).then(q.callback));
            await Promise.all(promises);
            return onComplete();
        }
    }
    addOnRenderCallback(f) {
        this.onRender.push(f);
    }
    buildSettings() {
        const allColumns = [];
        if (this.config.rowOptions?.moveRows)
            allColumns.push(this.buildMoveColumn());
        if (this.config.rowOptions?.multiSelect)
            allColumns.push(this.buildCheckboxColumn());
        allColumns.push(...this.config.mappings.map(x => this.buildColumnDefinition(x)).filter(x => x !== undefined));
        const items = {};
        const dialogId = this.obj.dialogId;
        this.config.buttons.forEach((b, i) => allColumns.push(this.buildColumnButton(b, i, items)));
        items['__toggleCheck'] = {
            selectable: false,
            onClick: (index) => {
                const idx = this.listBox.getIndex(index)[0].index;
                let src = this.listBox.__checkedImage;
                if (this.selectedRows.has(index)) {
                    this.selectedRows.delete(index);
                    src = this.listBox.__uncheckedImage;
                }
                else {
                    this.selectedRows.add(index);
                }
                const ele = document.getElementById(`${dialogId}.${LIST_NAME}.CHECKBOX${idx.toString()}`);
                if (ele) {
                    _A5.u.icon.update(ele.children[0], src);
                }
                this.recalculateButtons();
            }
        };
        items['__toggleAll'] = {
            selectable: false,
            onClick: () => {
                if (this.selectedRows.size == this.dataController.length().flattened)
                    this.selectedRows.clear();
                else {
                    for (let i = 0; i < this.dataController.length().flattened; i++) {
                        this.selectedRows.add(i);
                    }
                }
                ;
                this.recalculateButtons();
                this.listBox.refresh();
            }
        };
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const listObj = this;
        return {
            theme: this.obj.styleName,
            containerId: this.containerId,
            layout: 'Default',
            layouts: {
                'Default': {
                    type: 'column',
                    columns: allColumns
                }
            },
            items,
            group: this.makeGroupingSettings(),
            onItemDraw: (elem, data, index) => {
                const dirtyRowClass = `_${dialogId}_${LIST_NAME}_dirtyRow`;
                const dirtyStyle = `_${dialogId}_${LIST_NAME}_dirtyRowStyle`;
                const newRowClass = `_${dialogId}_${LIST_NAME}_newRow`;
                const newRowStyle = `_${dialogId}_${LIST_NAME}_newRowStyle`;
                const deletedRowClass = `_${dialogId}_${LIST_NAME}_deletedRow`;
                const deletedRowStyle = `_${dialogId}_${LIST_NAME}_deletedStyle`;
                const meta = this.dataController.rowMetadata(index);
                if (!meta)
                    return;
                if (meta.isDeleted)
                    elem.classList.add(deletedRowClass, deletedRowStyle);
                else if (meta.isInserted)
                    elem.classList.add(newRowClass, newRowStyle);
                else if (meta.isDirty)
                    elem.classList.add(dirtyRowClass, dirtyStyle);
            },
            onListDraw(data) {
                if (data.length == 0 || listObj.dataController === undefined) {
                    const content = _$(this.contId + '.CONTENT');
                    if (!content) {
                        console.error("Couldn't find element " + this.contId + '.CONTENT');
                        return;
                    }
                    ;
                    const msg = !listObj.initialLoadComplete ? 'Fetching Data...' : 'No Records in List';
                    content.innerHTML = `
                        <div id="${this.contId + '.NORECORDSINLIST'}" style="text-align: center; padding: 1rem;">
                            <span>${msg}</span>
                        </div>
                    `;
                }
                else if (listObj.config.rowOptions?.multiSelect === true) {
                    const allChecked = listObj.selectedRows.size == listObj.dataController.length().flattened;
                    let h;
                    if (allChecked) {
                        h = _A5.u.icon.html(this.__checkedImage);
                    }
                    else {
                        h = _A5.u.icon.html(this.__uncheckedImage);
                    }
                    const _id = listObj.obj.dialogId + '.' + LIST_NAME + '.CHECKBOXALL';
                    const ele = _$(_id);
                    if (ele)
                        ele.innerHTML = h;
                }
            },
            setOrder: (order) => {
                const origOrder = _A5.ListBox.prototype.setOrder.bind(this.listBox);
                if ('paginate' in this.config.dataSource && this.config.dataSource.paginate) {
                    // Current page should be reset, otherwise we'll be looking at a seemingly 
                    // random slice of the data after a sort.
                    this.listBox._state.page = 1;
                    let colName = undefined;
                    if (typeof order === 'object')
                        colName = Object.keys(order)[0];
                    else {
                        this.orderings = [];
                        okOrLog(this.reRender(true).then(() => { origOrder(order); }));
                        return;
                    }
                    if (!colName)
                        this.orderings = [];
                    else {
                        const model = this.dataModel.reverseNameLookup(colName);
                        if (!model) {
                            origOrder(order);
                            return;
                        }
                        this.orderings = this.orderings.filter(o => o.columnName != colName);
                        if (order[colName] !== false) {
                            const ordering = order[colName] > 0 ? 'asc' : 'desc';
                            this.orderings.push({ columnName: colName, order: ordering });
                        }
                    }
                    okOrLog(this.reRender(true).then(() => { origOrder(order); }));
                    return;
                }
                origOrder(order);
            },
            _state: {
                page: 1,
                pageCount: 5,
                pageSize: 20,
                recordCount: 100
            },
            _refreshStateMessages: () => {
                /*eslint-disable */
                if ('paginate' in this.config.dataSource) {
                    const pNum = document.getElementById(`_${dialogId}.${LIST_NAME}.PAGENUMBER`);
                    const pCnt = document.getElementById(`_${dialogId}.${LIST_NAME}.PAGECOUNT`);
                    const pSelector = document.getElementById(`_${dialogId}.${LIST_NAME}.PAGECOUNT.SELECTOR`);
                    const lState = document.getElementById(`_${dialogId}.${LIST_NAME}.LISTSTATE`);
                    const lAny = this.listBox;
                    if (pNum)
                        pNum.innerHTML = lAny._state.page;
                    if (pCnt)
                        pCnt.innerHTML = lAny._state.pageCount;
                    if (pSelector)
                        pSelector.innerHTML = lAny._state.pageCount;
                    if (lState) {
                        let listState = JSON.stringify(lAny._state);
                        lState.innerHTML = listState;
                    }
                    let navObj = lAny._listNavigator;
                    if (!navObj) {
                        lAny._listNavigator = this.obj._navigationBar(this.listBox._navBarId ?? '');
                        navObj = lAny._listNavigator;
                    }
                    if (navObj) {
                        let data = navObj.data;
                        data.settings = lAny._navigationBar;
                        data.pageNumber = lAny._state.page;
                        data.totalPages = lAny._state.pageCount;
                        data.totalRecords = lAny._state.recordCount;
                        navObj.items.clickNavigationLink.onClick = (v, ia, i, ele) => {
                            ia = ia.split('|');
                            let target = ia[1];
                            if (target == 'first') {
                                lAny._state.page = 1;
                            }
                            else if (target == 'prev') {
                                if (lAny._state.page >= 1) {
                                    lAny._state.page -= 1;
                                }
                            }
                            else if (target == 'next') {
                                if (lAny._state.page < lAny._state.pageCount) {
                                    lAny._state.page += 1;
                                }
                            }
                            else if (target == 'last') {
                                lAny._state.page = lAny._state.pageCount;
                            }
                            else {
                                lAny._state.page = Number(target);
                            }
                            this.reRender(true);
                        };
                        data.listName = lAny.listVariableName;
                        navObj.populate(data);
                        this.listBox.refresh();
                        this.listBox.resize();
                    }
                }
                /* eslint-enable */
            },
            view: {
                navigation: {
                    next: {
                        className: 'lsitNavButtonNext'
                    },
                    prev: {
                        className: 'listNavButtonPrev'
                    }
                }
            },
            _hasNavigationBar: true,
            _navBarId: `${dialogId}_DYNAMIC_LIST_NAVIGATOR`,
            _navigationBar: {
                style: 'dropdown',
                firstIcon: 'svgIcon=#alpha-icon-chevronDblLeft:icon,24',
                lastIcon: 'svgIcon=#alpha-icon-chevronDblRight:icon,24',
                prevIcon: 'svgIcon=#alpha-icon-chevronLeft:icon,24',
                nextIcon: 'svgIcon=#alpha-icon-chevronRight:icon,24',
                numberOfLinks: 6,
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
                        listDirty: 'List is dirty. Please save changes first before navigating.'
                    }
                },
                navBarPlacementDivId: ''
            },
            __checkedImage: 'svgIcon=#alpha-icon-checkCircle:icon,24',
            __uncheckedImage: 'svgIcon=#alpha-icon-circle:icon,24',
            customization: {
                confirmDeleteWarning: {
                    title: 'Warning',
                    icon: 'svgIcon=#alpha-icon-questionCircle:icon,24',
                    message: 'Are you sure you want to delete this record?'
                }
            },
            footer: {
                show: 'paginate' in this.config.dataSource,
                html: `<div id="${dialogId}_DYNAMIC_LIST_NAVIGATOR" style="width: 100%; text-align: center;"></div>`,
            },
        };
    }
    buildListFieldDefn(name) {
        const defn = {
            name: name,
            defaultValue: `return this._controlDefaultValueForListField('${name}');`,
            onDetailViewPopulate: '',
            onListUpdate: '',
        };
        return defn;
    }
    linkSublistToField(configName, label, index, path) {
        const onSave = (newData, childList) => {
            const dirty = this.dataController.isDirty();
            const updatedData = this.dataController.getFlattenedRow(index);
            this.dataController.pathUpdate(updatedData, path, newData);
            this.dataController.updateRows([{ index, newData: updatedData }]);
            const rest = () => {
                this.obj.refreshClientSideComputations(true);
                this.recalculateButtons();
                this.listBox.refresh(true);
                this.dataController.getData(index, path).match({
                    ok: newData => {
                        if (Array.isArray(newData)) {
                            childList.setData(newData, this.dataBridge.serverTzOffset);
                        }
                        childList.reRender(false);
                    },
                    err: v => {
                        displayErrorMessage(new types.ErrMsg("The index " + index + " is out of range. This is a bug."));
                    }
                });
            };
            if (dirty) {
                _A5.msgBox.show("Sync Parent?", "The parent list has other edits. Sync those edits to the server?", "yn", (answer) => {
                    if (answer == 'yes')
                        okOrLog(this.saveDynamicListEdits());
                    else
                        rest();
                });
            }
            else {
                okOrLog(this.saveDynamicListEdits().then(rest));
            }
        };
        this.dataController.getData(index, path).match({
            ok: nestedData => {
                if (!Array.isArray(nestedData)) {
                    const pathName = path.map(p => {
                        if (p.tag == 'object')
                            return p.key;
                        else
                            return '[...]';
                    }).join('.');
                    const msg = `
                        <p>The field ${pathName} is not an array. Please ensure the following: </p>
                        <ul>
                            <li> "${pathName}" is in the Data Mapping with type JSON </li>
                            <li> The JSON data in "${pathName}" <em>is</em> actually an array, and not an object or value </li>
                        </ul>
                    `;
                    displayErrorMessage(new types.ErrMsg(msg));
                }
                else {
                    this.openSublistFromNested(configName, label, nestedData, onSave);
                }
            },
            err: v => {
                displayErrorMessage(new types.ErrMsg("The index " + index + " is out of range. This is a bug."));
            }
        });
    }
    launchNewPanel(configName, titleName, filters = []) {
        okOrLog(listUtils_openNewPanel({
            configName: configName,
            filters: filters,
            listContainerId: 'LIST_CONTAINER',
            searchContainerId: 'SEARCH_CONTAINER',
            obj: this.obj,
            titleName
        }));
    }
    linkNewPanel(configName, titleName, filters) {
        okOrLog(listUtils_openNewPanel({
            configName: configName,
            listContainerId: 'LIST_CONTAINER',
            searchContainerId: 'SEARCH_CONTAINER',
            titleName: titleName,
            filters: filters,
            obj: this.obj,
        }));
    }
    showRowPicker(ops) {
        if (this.dataController.mappingInfo.isEntirelyTopLevel()) {
            ops.onUnneeded();
            return;
        }
        const id = this.id + '_ROW_PICKER_MODAL';
        let modal = document.getElementById(id);
        if (!modal) {
            modal = document.createElement('div');
            modal.id = id;
            modal.style.position = 'absolute';
            modal.style.left = '0px';
            modal.style.top = '0px';
            modal.style.width = '100%';
            modal.style.height = '100%';
            modal.style.display = 'flex';
            modal.style.alignItems = 'center';
            modal.style.justifyContent = 'center';
            modal.style.zIndex = '100';
            document.body.appendChild(modal);
        }
        const close = () => {
            document.body.removeChild(modal);
        };
        modal.onclick = close;
        const body = document.createElement('div');
        const bodyId = this.id + '_ROW_PICKER_BODY';
        body.id = bodyId;
        body.style.width = '90%';
        body.style.height = '90%';
        body.style.backgroundColor = 'white';
        body.style.boxShadow = '0px 0px 100px 20px';
        const listContainer = document.createElement('div');
        listContainer.id = body.id + "_LIST";
        listContainer.style.flex = '1';
        listContainer.style.width = '100%';
        const title = document.createElement('p');
        title.innerText = "Select a row to append data to.";
        title.style.marginLeft = '1rem';
        body.appendChild(title);
        body.appendChild(listContainer);
        modal.appendChild(body);
        let cols = this.config.mappings
            .filter(m => this.dataModel.getNestingLevel(m.fullPath) == 0)
            .map(m => this.buildColumnDefinition(m))
            .filter(x => x !== undefined);
        if (cols.length == 0) {
            cols = [{
                    show: true,
                    header: {
                        html: 'Row'
                    },
                    data: {
                        template: `<span>{[countOneBased]}</span>`
                    },
                    width: 'flex(1)'
                }];
        }
        const settings = {
            theme: this.obj.styleName,
            allParentLists: [],
            layout: 'default',
            layouts: {
                'default': {
                    type: 'column',
                    columns: cols
                }
            },
            onSelect(index) {
                const rawIdx = this.getIndex(index)[0].index;
                ops.onSelect(rawIdx);
                close();
            },
        };
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
        const l = new _A5.ListBox(listContainer.id, [], settings);
        l.populate(this.dataController.getAllRawData());
    }
    updateRecordCount() {
        const count = document.getElementById(this.obj.dialogId + "_RECORD_COUNT");
        if (count) {
            const len = this.listBox._rData.filter(x => !('*group' in x)).length;
            count.innerHTML = "Records: " + len.toString();
        }
    }
    setFilterAndFetch(filters) {
        this.searchFilters = filters;
        okOrLog(this.reRender(true));
    }
    newDetailViewRecord(x) {
        const buildForm = () => {
            const makeForm = () => { this.buildDetailViewForm(x); };
            const openForm = () => { this.obj.runAction('Navigate Detail View'); };
            _A5.executeThisThenThat(makeForm, openForm);
        };
        if (x.tag == 'newRecord' && this.dataController.mappingInfo.isEntirelyTopLevel() === false) {
            const html = `<div id="dynamic-list-row-selector-${this.id}"></div>`;
            const dd = document.createElement('select');
            _A5.msgBox.show("Select a row to add to", html, 'o', () => {
                const v = Number.parseInt(dd.value);
                if (!Number.isNaN(v)) {
                    x = { tag: 'appendToRawRow', rawRow: v };
                    buildForm();
                }
            });
            this.dataController.getFreeRows().forEach(({ row, index }) => {
                const opt = document.createElement('option');
                const descriptor = this.config.mappings
                    .filter(x => x.inList)
                    .map(x => {
                    const name = this.dataModel.getUniqueName(x);
                    return name !== undefined ? row[name] : undefined;
                })
                    .filter(x => typeof x === 'string')
                    .join(' | ');
                opt.innerText = descriptor;
                opt.value = index.toString();
                dd.appendChild(opt);
            });
            document.getElementById(`dynamic-list-row-selector-${this.id}`)?.appendChild(dd);
        }
        else {
            buildForm();
        }
    }
    clearSearchFilters() {
        this.listBox.setFilter(false);
    }
    recalculateButtons() {
        const sync = this.obj.getControl('BUTTON_DVSYNCHRONIZE_LIST1');
        if (sync) {
            if (this.dataController.isDirty())
                sync.setDisabled(false);
            else
                sync.setDisabled(true);
            sync.onClick = () => { okOrLog(this.saveDynamicListEdits()); };
        }
        const multiEdit = this.obj.getControl('MULTI_EDIT_BTN');
        if (multiEdit) {
            const selectedCount = this.selectedRows.size;
            if (selectedCount > 1) {
                multiEdit.setDisabled(false);
            }
            else {
                multiEdit.setDisabled(true);
            }
            multiEdit.onClick = () => {
                this.newDetailViewRecord({ tag: 'multiEditRecords', records: Array.from(this.selectedRows) });
            };
        }
        const addRow = this.obj.getControl("BUTTON_4");
        if (addRow) {
            addRow.onClick = () => {
                this.showRowPicker({
                    onUnneeded: () => { this.newDetailViewRecord({ tag: 'newRecord' }); },
                    onSelect: idx => { this.newDetailViewRecord({ tag: 'appendToRawRow', rawRow: idx }); }
                });
            };
        }
        const panelNavigator = this.obj.getPanelObject('PANELNAVIGATOR_1');
        if (panelNavigator) {
            panelNavigator.panels.forEach(panel => {
                if (panel.title == 'List Options') {
                    if (!this.permissions.editConfigMappings) {
                        panel.show = false;
                    }
                }
            });
            panelNavigator.refresh();
        }
    }
    makeGroupingSettings() {
        const arrays = this.config.mappings.filter(m => this.dataModel.getNestingLevel(m.fullPath) > 0);
        if (arrays.length == 0)
            return { auto: [] };
        return {
            auto: [
                {
                    order: false,
                    group: (row) => {
                        const num = row['*key'];
                        if (typeof num == 'number') {
                            const idx = this.dataController.originalIndexOf(num).asOk();
                            if (idx !== undefined)
                                return idx.toString();
                        }
                        return '';
                    },
                    header: {
                        className: `A5ListGroupHeaders ${_A5.themes._t.Alpha.listbox.base.item.titleClassName}`,
                        html: (group, data) => {
                            const num = data[0]['*key'];
                            if (typeof num == 'number') {
                                const record = this.dataController.originalIndexOf(num).asOk();
                                if (record !== undefined)
                                    return "{indicator} Record: " + record.toString();
                            }
                            return "{indicator}";
                        },
                    },
                    footer: {
                        show: false,
                    },
                    collapse: {
                        allow: 'indicator',
                        indicator: {
                            collapse: _A5.u.icon.html('svgIcon=#alpha-icon-chevronDown:icon'),
                            expand: _A5.u.icon.html('svgIcon=#alpha-icon-chevronRight:icon'),
                        },
                    },
                }
            ],
            continued: { wrap: false }
        };
    }
    buildColumnDefinition(mapping) {
        const name = this.dataModel.getUniqueName(mapping);
        const modelItem = this.dataModel.find(mapping.fullPath);
        if (name === undefined || modelItem === undefined) {
            console.warn(`There was an issue creating a column definition for the mapping ${DataModel.printPath(mapping.fullPath)}`);
            return undefined;
        }
        const safeName = this.uniqueNameToSafeName.get(name) ?? name;
        let template = '{' + safeName + '}';
        if (modelItem.tag == 'data' && modelItem.type == 'datetime') {
            template = `{${safeName}:date("${mapping?.dateSettings?.clientFormat ?? DEFAULT_DATETIME_FMT}")}`;
        }
        if (mapping.template)
            template = mapping.template;
        return {
            show: mapping.inList ?? false,
            header: {
                html: mapping.displayName ?? name
            },
            data: {
                template: `<span id="${this.obj.dialogId}.${LIST_NAME}.${name}.I.{*dataRow}"> ${template} </span>`
            },
            width: mapping.width ?? 'flex(1)',
            resize: true,
            order: safeName,
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
						<div style="display:inline-block" id="${this.obj.dialogId}.${LIST_NAME}.MENU.${btnNumber.toString()}.{*dataRow}" title="" a5-item="_MENU_onClick_${btnNumber.toString()}" class="${LIST_NAME}_BUTTON">
							${innerTemplate}
						</div>&nbsp;
					`
                }
            };
        }
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const tmpThis = this;
        items[`_systemButtononClick_${btnNumber.toString()}`] = {
            'selectable': true,
            onClick: (idx, v, args) => {
                const data = this.dataController.getFlattenedRow(idx);
                if ('function' in button.onClick) {
                    (function (rowNumber, value, ia, data) {
                        (0,types.stringReprToFn)(button.onClick.function)(tmpThis, rowNumber, data);
                    }(idx, v, args, data));
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
            data: {
                template: `
						<button
							a5-item = "_systemButtononClick_${btnNumber.toString()}"
							class="button"
							style="cursor:pointer;"
							title="${button.title}"
							id="${this.obj.dialogId}.${LIST_NAME}.BTN.{*dataRow}"
						>${innerTemplate}</button>
				`,
                style: 'white-space: normal !important;'
            },
            order: false,
        };
    }
    rowDrag(elem, e, key) {
        if (this._rowDragState.listItem == null)
            return;
        const listContent = document.getElementById(this.listBox.contId + '.CONTENT');
        const my = e.y;
        let closestElem = this._rowDragState.listItem;
        let closestDist = Number.MAX_SAFE_INTEGER;
        let closestIdx = 0;
        let direction = 1;
        for (let i = 0; i < listContent.children.length; i++) {
            const child = listContent.children[i];
            let bb = child.getBoundingClientRect();
            if (Math.abs(my - bb.bottom) < closestDist) {
                closestIdx = i;
                closestElem = child;
                closestDist = Math.abs(my - bb.bottom);
                direction = 1;
            }
            if (Math.abs(my - bb.top) < closestDist) {
                closestIdx = i;
                closestDist = Math.abs(my - bb.top);
                closestElem = child;
                direction = -1;
            }
        }
        if (direction == -1) {
            listContent.insertBefore(this._rowDragState.listItem, closestElem);
            this._rowDragState.moveToIdx = closestIdx;
        }
        else {
            this._rowDragState.moveToIdx = closestIdx;
            const after = closestElem?.nextElementSibling;
            if (after) {
                listContent.insertBefore(this._rowDragState.listItem, after);
            }
            else {
                listContent.appendChild(this._rowDragState.listItem);
            }
        }
    }
    rowDragStart(elem, e, key) {
        if (this.dataController.mappingInfo.isEntirelyTopLevel() == false) {
            alert('Row Dragging is only for non-flattened lists!');
            return;
        }
        e.dataTransfer.setDragImage(document.getElementById(this.obj.dialogId + '.' + LIST_NAME + '.MOVE_IMG'), 0, 0);
        let parent = elem.parentElement;
        while (!parent.classList.contains('listItem')) {
            parent = parent.parentElement;
        }
        this._rowDragState.listItem = parent;
        this._rowDragState.moveToIdx = key;
        parent.style.border = '1px solid #0df';
    }
    rowDragEnd(elem, e, key) {
        if (this._rowDragState.listItem) {
            this._rowDragState.listItem.style.border = 'none';
            let newIdx = this._rowDragState.moveToIdx;
            if (newIdx < 0)
                newIdx = 0;
            if (newIdx >= this.dataController.length().raw)
                newIdx = this.dataController.length().raw;
            this.dataController.swapRows(key, newIdx);
            this.reRender(false);
            this.recalculateButtons();
            this._rowDragState.listItem = null;
        }
    }
    buildMoveColumn() {
        const id = this.obj.dialogId + '.' + LIST_NAME;
        const icon = `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
            <svg width="24px" height="24px" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 8C10.3284 8 11 7.32843 11 6.5C11 5.67157 10.3284 5 9.5 5C8.67157 5 8 5.67157 8 6.5C8 7.32843 8.67157 8 9.5 8ZM9.5 14C10.3284 14 11 13.3284 11 12.5C11 11.6716 10.3284 11 9.5 11C8.67157 11 8 11.6716 8 12.5C8 13.3284 8.67157 14 9.5 14ZM11 18.5C11 19.3284 10.3284 20 9.5 20C8.67157 20 8 19.3284 8 18.5C8 17.6716 8.67157 17 9.5 17C10.3284 17 11 17.6716 11 18.5ZM15.5 8C16.3284 8 17 7.32843 17 6.5C17 5.67157 16.3284 5 15.5 5C14.6716 5 14 5.67157 14 6.5C14 7.32843 14.6716 8 15.5 8ZM17 12.5C17 13.3284 16.3284 14 15.5 14C14.6716 14 14 13.3284 14 12.5C14 11.6716 14.6716 11 15.5 11C16.3284 11 17 11.6716 17 12.5ZM15.5 20C16.3284 20 17 19.3284 17 18.5C17 17.6716 16.3284 17 15.5 17C14.6716 17 14 17.6716 14 18.5C14 19.3284 14.6716 20 15.5 20Z" fill="#121923"/>
            </svg>`;
        const dragImg = document.createElement('div');
        dragImg.style.display = 'none';
        dragImg.id = id + '.MOVE_IMG';
        document.body.appendChild(dragImg);
        const template = `
            <div
                style="display: inline-block;"
                id="${id + '.MOVE_{*key}'}"
                draggable="true"
                ondragstart="DYNAMIC_LIST_LOOKUP['${this.id}'].rowDragStart(this, event, {*key})"
                ondragend="DYNAMIC_LIST_LOOKUP['${this.id}'].rowDragEnd(this, event, {*key})"
                ondrag="DYNAMIC_LIST_LOOKUP['${this.id}'].rowDrag(this, event, {*key})"
            >
                ${icon}
            </div>
        `;
        return {
            header: {
                html: ''
            },
            data: {
                template: template.replace(/(\r\n|\n|\r|\t)/gm, ""),
                style: 'text-align: left; text-overflow: clip !important; white-space: normal !important;'
            },
            width: '50px'
        };
    }
    buildCheckboxColumn() {
        const id = this.obj.dialogId + '.' + LIST_NAME;
        const checked = _A5.u.icon.html("svgIcon=#alpha-icon-checkCircle:icon,24");
        const unchecked = _A5.u.icon.html("svgIcon=#alpha-icon-circle:icon,24");
        const template = `
            <div 
                style="display: inline-block;" 
                id="${id + '.CHECKBOX{*key}'}" 
                a5-item="__toggleCheck"
            >
                {*if DYNAMIC_LIST_LOOKUP["${this.id}"].selectedRows.has([value]["*key"])}
                    ${checked}
                {*else}
                    ${unchecked}
                {*endif}
            </div>`;
        return {
            header: {
                html: `<span id="${id + '.CHECKBOXALL'}" a5-item="__toggleAll"></span>`
            },
            _name: '<CheckBoxSelect>',
            resize: true,
            data: {
                template: template.replace(/(\r\n|\n|\r|\t)/gm, ""),
                style: 'text-align: left; text-overflow: clip !important; white-space: normal !important;'
            },
            width: '50px'
        };
    }
    buildDetailViewForm(addInfo) {
        let selectedData;
        if (addInfo.tag == 'editExistingRecord') {
            selectedData = this.dataController.getFlattenedRow(addInfo.record);
        }
        else if (addInfo.tag == 'multiEditRecords') {
            selectedData = {};
            addInfo.records.forEach(r => {
                const d = this.dataController.getFlattenedRow(r);
                for (const key in d) {
                    if (key in selectedData && selectedData[key] !== d[key]) {
                        selectedData[key] = makeObviousDefault(this.dataModel.reverseNameLookup(key), this.dataModel);
                    }
                    else {
                        selectedData[key] = d[key];
                    }
                }
            });
        }
        else if (addInfo.tag == 'newRecord') {
            selectedData = {};
            this.config.mappings.forEach(m => _A5.u.object.assign(selectedData, makeObviousDefault(m.fullPath, this.dataModel)));
        }
        else if (addInfo.tag == 'newRecordInRow') {
            selectedData = this.dataController.getFlattenedRow(addInfo.row);
            this.dataController.mappingInfo.deeplyNestedPaths().forEach(k => {
                selectedData[this.dataModel.getUniqueName(k.path)] = makeObviousDefault(k.path, this.dataModel);
            });
            this.config.mappings.forEach(m => _A5.u.object.assign(selectedData, makeObviousDefault(m.fullPath, this.dataModel)));
        }
        else {
            selectedData = {};
            const rawRow = this.dataController.getRawRow(addInfo.rawRow);
            this.dataController.mappingInfo.deeplyNestedPaths().forEach(({ path }) => {
                selectedData[this.dataModel.getUniqueName(path)] = makeObviousDefault(path, this.dataModel);
            });
            this.config.mappings.forEach(mapping => {
                const uniqueName = this.dataModel.getUniqueName(mapping);
                if (uniqueName in rawRow) {
                    selectedData[uniqueName] = rawRow[uniqueName];
                }
            });
        }
        const saveOps = {};
        if (addInfo.tag == 'editExistingRecord') {
            saveOps.onDelete = [addInfo.record];
            saveOps.onNew = { tag: 'newRecordInRow', row: addInfo.record };
            saveOps.onSave = { tag: 'update', rows: [addInfo.record] };
        }
        else if (addInfo.tag == 'multiEditRecords') {
            saveOps.onDelete = addInfo.records;
            saveOps.onNew = { tag: 'newRecord' };
            saveOps.onSave = { tag: 'update', rows: addInfo.records };
        }
        else if (addInfo.tag == 'newRecord') {
            saveOps.onDelete = [];
            saveOps.onNew = { tag: 'newRecord' };
            saveOps.onSave = { tag: 'insert' };
        }
        else if (addInfo.tag == 'newRecordInRow') {
            saveOps.onDelete = [];
            saveOps.onNew = { tag: 'newRecordInRow', row: addInfo.row };
            saveOps.onSave = { tag: 'insert', attachTo: addInfo.row };
        }
        else {
            saveOps.onDelete = [];
            saveOps.onNew = { tag: 'appendToRawRow', rawRow: addInfo.rawRow };
            saveOps.onSave = { tag: 'insertRaw', rawRow: addInfo.rawRow };
        }
        const { bottomButtons, doSave } = this.makeDetailContextButtons(saveOps);
        const keyMap = {};
        this.config.mappings.forEach(m => {
            if (!m.inDetailView)
                return;
            keyMap[this.dataModel.getUniqueName(m)] = mappingToInput(this, this.dataModel, m, {
                forceReadonly: this.dataController.mappingInfo.isEntirelyTopLevel()
                    ? false
                    : !this.dataController.mappingInfo.pathIsDeeplyNested(m.fullPath),
                baseOnly: true,
                requestSave: doSave
            });
        });
        const form = new ObjectForm(selectedData, keyMap);
        const container = this.obj.getPointer(DETAIL_FORM_CONTAINER);
        const id = container ? container.id : '';
        this.detailView = new ReactiveFormManager(form, id, this.obj, objForm => ({
            type: 'group',
            items: [
                objForm,
                bottomButtons
            ]
        }));
    }
    makeDetailContextButtons(options) {
        const divStyle = "display: flex; flex-direction: row; align-items: center; gap: 0.5rem;";
        // Alpha overrides all events on all elements with its own handlers. 
        // Apparently, there is a bug where the old 'onclick' version of a button is kept 
        // around. (No other properties of the old button are kept). 
        // I cannot figure out how or why this is happening, and so the workaround 
        // is to store the function in the dialog object, so that the 
        // button onclick method doesn't carry any captured variables. 
        // We can edit the dialog object properties to change the function.
        const doDelete = () => {
            if (this.listBox.customization?.confirmDeleteWarning) {
                const c = this.listBox.customization.confirmDeleteWarning;
                _A5.msgBox.show(c.title, c.message, "oc", (action) => {
                    if (action === 'ok') {
                        this.dataController.deleteRows(options.onDelete);
                        this.listBox.populate(this.flatRowToListSafeRow());
                        this.obj.refreshClientSideComputations(true);
                        this.recalculateButtons();
                    }
                });
            }
        };
        const doSave = () => {
            let d = {};
            if (options.onSave.tag == 'insert' || options.onSave.tag == 'insertRaw' || (options.onSave.rows.length <= 1)) {
                const s = this.detailView?.serialize();
                if (s === undefined) {
                    displayErrorMessage(new types.ErrMsg('The detail view was never constructed. This is a bug.'));
                    return;
                }
                if (s.isOk() === false) {
                    displayErrorMessage(new types.ErrMsg(s.asErr()));
                    return;
                }
                d = s.asOk();
            }
            else {
                const serialized = this.detailView?.serializeWithChanges() ?? (0,types.Ok)({ changed: false, raw: null });
                if (serialized.isOk() == false) {
                    displayErrorMessage(new types.ErrMsg(serialized.asErr()));
                    return;
                }
                const changes = serialized.asOk();
                if ('keys' in changes) {
                    for (const key in changes.keys) {
                        const item = changes.keys[key];
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
            if (typeof d != 'object' || Array.isArray(d)) {
                displayErrorMessage(new types.ErrMsg('The serialized detail view is neither an object or an array. This is a bug.'));
                return;
            }
            if (options.onSave.tag == 'insert') {
                this.dataController.insertRows([{ attachToIndex: options.onSave.attachTo ?? 0, data: d }], false);
            }
            else if (options.onSave.tag == 'update') {
                this.dataController.updateRows(options.onSave.rows.map(s => ({ index: s, newData: d })));
            }
            else {
                this.dataController.insertRows([{ data: d, attachToIndex: options.onSave.rawRow }], true);
            }
            this.listBox.populate(this.flatRowToListSafeRow());
            this.recalculateButtons();
            this.detailView?.setDirty(false);
            this.detailView?.refresh();
        };
        this.obj._functions.DELETE_BUTTON_ONCLICK_BUG_WORKAROUND_DYNAMIC_LIST = doDelete;
        this.obj._functions.SAVE_BUTTON_ONCLICK_BUG_WORKAROUND_DYNAMIC_LIST = doSave;
        return {
            bottomButtons: {
                type: 'group',
                items: [
                    {
                        type: 'button',
                        control: {
                            html: `
                        <div style="${divStyle}">
                            ${_A5.u.icon.html('svgIcon=#alpha-icon-save:icon,24')}
                            <p>Save</p>
                        </div>
                        `,
                            onClick: () => { this.obj._functions.SAVE_BUTTON_ONCLICK_BUG_WORKAROUND_DYNAMIC_LIST(); }
                        },
                        sys: { isEmbedded: false },
                        disabled: () => this.detailView?.isDirty() === false
                    },
                    {
                        type: 'button',
                        control: {
                            html: `
                        <div style="${divStyle}">
                            ${_A5.u.icon.html('svgIcon=#alpha-icon-trash:icon,24')}
                            <p>Delete</p>
                        </div>
                        `,
                            onClick: () => { this.obj._functions.DELETE_BUTTON_ONCLICK_BUG_WORKAROUND_DYNAMIC_LIST(); }
                        },
                        sys: { isEmbedded: false }
                    },
                    {
                        type: 'button',
                        control: {
                            html: `
                        <div style="${divStyle}">
                            ${_A5.u.icon.html('svgIcon=#alpha-icon-add:icon,24')}
                            <p>New Record</p>
                        </div>
                        `,
                            onClick: () => {
                                this.recalculateButtons();
                                this.newDetailViewRecord(options.onNew);
                            }
                        },
                        sys: { isEmbedded: false }
                    },
                ],
                container: {
                    style: '; display: flex; flex-direction: row; gap: 1rem;'
                }
            }, doSave, doDelete
        };
    }
    openSublistFromNested(configName, label, data, onSave) {
        const newSchema = {
            version: this.config.version,
            name: configName,
            dataSource: {
                type: 'json',
                jsonData: JSON.stringify(data)
            },
            mappings: [],
            searchOptions: {},
            buttons: [],
        };
        const ops = {
            obj: this.obj,
            listContainerId: "LIST_CONTAINER",
            searchContainerId: "SEARCH_CONTAINER",
            configName: configName,
            titleName: label,
            fallbackConfig: newSchema,
            otherProps: {
                onSaveOverride: (list, newData) => {
                    onSave(newData, list);
                },
                dataOverride: data,
            }
        };
        okOrLog(listUtils_openNewPanel(ops));
    }
    setData(rawData, serverTzOffset) {
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
                page: this.listBox._state?.page ?? 1,
                pageCount: Math.ceil(rawData.count / pageSize),
                recordCount: rawData.count
            };
            rawDataRows = rawData.result;
        }
        else {
            rawDataRows = rawData;
        }
        if (this.staticDataOverride !== undefined)
            this.staticDataOverride = rawDataRows;
        try {
            if (this.config.dataSource.preprocess)
                rawDataRows = (0,types.stringReprToFn)(this.config.dataSource.preprocess)(rawDataRows);
        }
        catch (e) {
            console.log(e);
            rawDataRows = [];
        }
        this.dataModel = new DataModel({ rawRows: rawDataRows, root: this.config.dataModel });
        this.rawFetchedData = rawDataRows;
        this.uniqueNameToSafeName = this.safeNameMapping();
        this.dataBridge = new DataBridge(this.config, this.prefetched.serverTimeOffset);
        this.dataBridge.rawToProcessed(rawDataRows, this.dataModel).match({
            ok: processedRows => {
                this.dataController = new DataController(processedRows, this.config, this.dataModel);
                if (this.listBox._state == undefined)
                    this.listBox._state = { page: 0, pageCount: 0, pageSize: 0, recordCount: 0 };
                this.listBox._state.recordCount = this.dataController.length().flattened;
                this.recalculateButtons();
            },
            err: e => {
                displayErrorMessage(new types.ErrMsg("There was an error processing your data: " + e));
            }
        });
    }
    fetchData() {
        // There is a bug where the parent somehow doesn't point to the most recent list object
        // During a refresh, the message is something like "cannot set property whiteSpace of undefined"
        // This is the fix
        this.obj._controlInst['R1.' + LIST_NAME] = this.listBox;
        const allFilters = [...this.permanentFilters, ...this.searchFilters];
        let filters = JSON.stringify(allFilters);
        if (this.config.dataSource.type == 'sql') {
            let safeFiltersRes = safeServerFilters(allFilters);
            let safeFilters = safeFiltersRes.asOk();
            if (safeFilters === undefined) {
                displayErrorMessage(new types.ErrMsg(safeFiltersRes.asErr()));
                return Promise.resolve(this);
            }
            filters = JSON.stringify(safeFilters);
        }
        let paginate = '';
        if ('paginate' in this.config.dataSource && this.config.dataSource.paginate) {
            const page = this.listBox._state?.page ?? 1;
            paginate = "&pageOptions=" + encodeURIComponent(`{pageSize: ${this.config.dataSource.paginate.pageSize.toString()}, getPage: ${page.toString()}}`);
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
                        const response = this.obj.stateInfo.apiResult;
                        if ("err" in response) {
                            reject(new Error(response.err));
                            return;
                        }
                        this.setData(response.ok.fetchedData, response.ok.serverTimeOffset);
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
                        const response = this.obj.stateInfo.apiResult;
                        if ("err" in response) {
                            reject(new Error(response.err));
                            return;
                        }
                        this.setData(response.ok.fetchedData, response.ok.serverTimeOffset);
                        resolve(this);
                    }
                });
            });
        }
        else if ('jsonData' in this.config.dataSource) {
            let data = [];
            if (this.staticDataOverride) {
                data = clone(this.staticDataOverride);
            }
            else {
                safeJsonParse(this.config.dataSource.jsonData).flatMap(d => {
                    if (!Array.isArray(d))
                        return (0,types.Err)(new SyntaxError("Expected JSON to be an array."));
                    return (0,types.Ok)(d);
                }).match({
                    ok: v => data = clone(v),
                    err: e => {
                        data = [];
                        displayErrorMessage(new types.MsgWithCtx("The data supplied in Static JSON could not be parsed as a JSON array.", e));
                    }
                });
            }
            this.setData(data, this.prefetched.serverTimeOffset);
            return Promise.resolve(this);
        }
        else {
            let endpoint;
            if (this.permanentFilters.length == 0 && this.searchFilters.length == 0) {
                endpoint = "fetch";
            }
            else {
                endpoint = "search";
            }
            return listUtils_fetch(this.obj, this.config.name, endpoint)
                .then((json) => {
                if ('err' in json) {
                    displayErrorMessage(new types.ErrMsg(json.err));
                    return this;
                }
                this.setData(json.ok.fetchedData, json.ok.serverTimeOffset);
                return this;
            });
        }
    }
    safeNameMapping() {
        let toSafeName = new Map();
        this.config.mappings.forEach(m => {
            let dm = this.dataModel.find(m.fullPath);
            if (!dm)
                return;
            let preferredName = dm.uniqueName.replace(/[\W]/g, '_');
            let i = 1;
            let currName = preferredName;
            while (toSafeName.has(currName)) {
                currName = currName + '_' + i;
                i += 1;
            }
            toSafeName.set(dm.uniqueName, currName);
        });
        return toSafeName;
    }
    flatRowToListSafeRow() {
        let rows = this.dataController.getAllFlattenedRows();
        let out = [];
        rows.forEach(row => {
            let newRow = {};
            for (const key in row) {
                newRow[this.uniqueNameToSafeName.get(key) ?? key] = row[key];
            }
            out.push(newRow);
        });
        return out;
    }
    populateListBox() {
        this.listBox.populate(this.flatRowToListSafeRow());
        for (const f of this.onRender) {
            f();
        }
        this.listBox.refresh();
        this.listBox.resize();
        this.updateRecordCount();
        if (this.listBox._refreshStateMessages)
            this.listBox._refreshStateMessages();
        let listContainer = document.getElementById(this.listBox.contId);
        listContainer.ondragover = e => {
            e.preventDefault();
        };
    }
    buildList() {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-explicit-any
        this.listBox = new _A5.ListBox(this.containerId, [], this.buildSettings());
        this.obj._controlInst['R1.' + LIST_NAME] = this.listBox;
    }
}

;// ./src/list-configuration/ListInitializer.ts










function batchFetch(obj, configName, filters) {
    configName = encodeURIComponent(configName);
    const filterStr = encodeURIComponent(JSON.stringify(filters));
    return new Promise((resolve) => {
        obj.ajaxCallback('', '', 'batch_fetch', '', `configName=${configName}`
            + `&filters=${filterStr}`, {
            onComplete: () => {
                resolve(obj.stateInfo.apiResult);
            }
        });
    });
}
function requestListConfig(obj, configName) {
    configName = encodeURIComponent(configName);
    return new Promise((resolve) => {
        obj.ajaxCallback('', '', 'request_list_config', '', `configName=${configName}`, {
            onComplete: () => {
                const response = obj.stateInfo.apiResult;
                resolve(response);
            }
        });
    });
}
function getUserPermissions(obj) {
    return new Promise((resolve => {
        obj.ajaxCallback('', '', 'get_user_permissions', '', '', {
            onComplete: () => {
                const response = obj.stateInfo.apiResult;
                resolve(response);
            }
        });
    }));
}
function tryRecoverConfig(config, editFullConfig, configName) {
    if ('err' in config && !editFullConfig) {
        alert('The configuration does not exist or has an error. Log in with proper permissions to fix.');
        throw new Error('The configuration does not exist or has an error. Log in with proper permissions to fix.');
    }
    else if ('err' in config) {
        return {
            version: config.err.version,
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
    return config.ok;
}
class ListInitializer {
    constructor(ops) {
        // Override until I can get Nikos to fix this
        if (ops.filters) {
            ops.filters.forEach(f => {
                if (typeof f.columnName === 'string') {
                    f.columnName = [{ tag: 'object', key: f.columnName }];
                }
            });
        }
        ops.embeddedList = ops.embeddedList ?? ops.obj;
        ops.embeddedSearch = ops.embeddedSearch ?? ops.obj;
        ops.embeddedSearch._functions.search = {
            onSearch: () => {
                ops.obj.runAction('hide docks');
            },
            onClear: () => {
                ops.obj.runAction('hide docks');
            }
        };
        this.options = ops;
        this.fetchConfig().catch((e) => { this.showError(e, "There was an error fetching the config."); });
    }
    async fetchConfig() {
        const permissions = await getUserPermissions(this.options.obj);
        if ('ok' in permissions) {
            this.perms = permissions.ok;
        }
        else {
            this.perms = {
                editConfigMappings: false,
                editFullConfig: false
            };
        }
        if (!this.options.embeddedList)
            throw new Error("Embedded list is null.");
        const fetchResponse = await batchFetch(this.options.embeddedList, this.options.configName, this.options.filters ?? []);
        if ("err" in fetchResponse) {
            if (this.options.fallbackConfig) {
                console.warn("Config does not exist, but fallback was specified.");
                this.prefetched = {
                    editFullConfig: this.perms.editFullConfig,
                    editConfigMappings: this.perms.editConfigMappings,
                    config: this.options.fallbackConfig,
                    // Will be set during list fetch anyway
                    serverTimeOffset: 0
                };
                await this.initializeList();
            }
            else {
                console.warn("Config prefetch failed -- reverting to slow fetch.");
                const requestResult = await requestListConfig(this.options.obj, this.options.configName);
                const config = tryRecoverConfig(requestResult, this.perms.editConfigMappings, this.options.configName);
                this.prefetched = {
                    editFullConfig: this.perms.editFullConfig,
                    editConfigMappings: this.perms.editConfigMappings,
                    config: config,
                    serverTimeOffset: 0
                };
                await this.initializeList();
            }
        }
        else {
            this.prefetched = fetchResponse.ok;
            this.prefetched.config.mappings = this.prefetched.config.mappings.filter(x => Object.keys(x).length > 0);
            await this.initializeList();
        }
        this.options.obj.getDynamicList = () => this.list;
    }
    async initializeList() {
        try {
            if (!this.options.embeddedList) {
                throw new Error('Embedded list is null');
            }
            this.list = await DynamicList.makeDynamicList({
                obj: this.options.embeddedList,
                prefetch: this.prefetched,
                containerId: this.options.listContainerId ?? 'LIST_CONTAINER',
                filters: this.options.filters,
                permissions: this.perms,
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
                otherProperties: this.options.otherProps
            });
            if (!this.options.embeddedSearch) {
                throw new Error('Embedded list is null');
            }
            this.search = new DynamicListSearch(this.list, this.options.embeddedSearch, this.options.searchContainerId ?? 'SEARCH_CONTAINER');
            this.manageConfigForm();
        }
        catch (err) {
            if (err instanceof ValidationError) {
                // eslint-disable-next-line @typescript-eslint/no-base-to-string
                displayErrorMessage(err);
            }
            else if (err instanceof Error) {
                displayErrorMessage(new types.MsgWithCtx(err.message, err));
            }
            else {
                displayErrorMessage(new types.ErrMsg("There was a fatal error while initializing the list (check logs). Please fix the configuration and reload."));
            }
            this.manageConfigForm();
        }
    }
    manageConfigForm() {
        if (!this.prefetched.editConfigMappings)
            return;
        this.options.obj.saveConfigGlobally = this.saveGlobal.bind(this);
        this.options.obj.saveConfigUser = this.saveUser.bind(this);
        this.options.obj.applyConfigChanges = async () => {
            if (!this.configFormManager)
                return;
            if (!this.configForm)
                return;
            const newConfigResult = this.configFormManager.serialize();
            if (newConfigResult.isOk() == false) {
                displayErrorMessage(new types.ErrMsg(newConfigResult.asErr()));
                return;
            }
            const newConfig = newConfigResult.asOk();
            if (this.prefetched.editFullConfig) {
                this.prefetched.config = newConfig;
            }
            else if (this.prefetched.editConfigMappings) {
                this.prefetched.config.mappings = newConfig;
            }
            else {
                return;
            }
            this.configForm.config = newConfig;
            try {
                this.runValidation(newConfig);
            }
            catch (e) {
                this.showError(e, "There was an error validating the config.");
                return;
            }
            if (this.list === undefined || this.search === undefined)
                return;
            if (!this.options.embeddedList || !this.options.embeddedSearch)
                return;
            this.list.destructor();
            const prefetchCopy = _jQuery.extend(true, {}, this.prefetched);
            this.list = await DynamicList.makeDynamicList({
                obj: this.options.embeddedList,
                prefetch: prefetchCopy,
                containerId: this.options.listContainerId ?? 'LIST_CONTAINER',
                filters: this.options.filters,
                permissions: this.perms,
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
                otherProperties: this.options.otherProps
            });
            this.search = new DynamicListSearch(this.list, this.options.embeddedSearch, this.options.searchContainerId ?? 'LIST_CONTAINER');
            this.configFormManager.render(this.configForm);
            alert('Changes applied locally.');
        };
        if (!this.perms.editConfigMappings)
            return;
        this.remakeConfig();
    }
    showError(e, msg) {
        if (e !== null && e !== undefined)
            displayErrorMessage(new types.MsgWithCtx(msg, e));
    }
    runValidation(config) {
        if (typeof config !== 'object' || config === null) {
            throw new Error('Config is not an object.');
        }
        if ('name' in config) {
            validateConfig(config);
        }
        else {
            const c = config;
            c.forEach(m => validateMapping(m));
        }
    }
    extractRelevantConfig(config, global) {
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
    }
    trySerialize() {
        return this.configFormManager?.serialize().match({
            ok: v => v,
            err: e => {
                displayErrorMessage(new types.ErrMsg(e));
                return undefined;
            }
        });
    }
    saveGlobal() {
        if (!this.configFormManager)
            return;
        try {
            let maybeConfig = this.trySerialize();
            if (maybeConfig === undefined)
                return;
            this.runValidation(maybeConfig);
            maybeConfig = this.extractRelevantConfig(maybeConfig, true);
            const data = encodeURIComponent(JSON.stringify(maybeConfig));
            this.options.obj.ajaxCallback('', '', 'save_config', '', `configName=${this.prefetched.config.name}&payload=${data}&global=true`, {
                onComplete: () => {
                    const res = this.options.obj.stateInfo.apiResult;
                    if ('err' in res) {
                        displayErrorMessage(new types.ErrMsg(res.err));
                    }
                    else {
                        alert('Config saved.');
                    }
                    okOrLog(this.options.obj.applyConfigChanges().then(() => {
                        this.remakeConfig();
                    }));
                }
            });
        }
        catch (e) {
            displayErrorMessage(new types.MsgWithCtx("There was an error saving the config.", e));
            console.error(e);
        }
    }
    ;
    remakeConfig() {
        let dm = this.list?.dataModel ?? new DataModel({ rawRows: this.prefetched.data ?? [] });
        let nameSet = [];
        dm.traverse({
            default: () => null,
            processArray: (a, p) => nameSet.push([p, a.uniqueName]),
            processData: (a, p) => nameSet.push([p, a.uniqueName]),
            processObject: (a, p) => nameSet.push([p, a.uniqueName]),
            processUnknown: (a, p) => nameSet.push([p, a.uniqueName]),
        });
        this.configForm = new ConfigForm(this.prefetched.config, this.perms.editFullConfig, this.options.obj, this.list?.dataModel ?? new DataModel({ rawRows: [], root: this.prefetched.config.dataModel }), new FlatNameSuggestor(nameSet), this.list);
        const ptr = this.options.obj.getPointer("CONFIG_CONTAINER");
        if (!ptr)
            return;
        this.configFormManager = new ReactiveFormManager(this.configForm, ptr.id, this.options.obj);
    }
    saveUser() {
        if (!this.configFormManager)
            return;
        try {
            let maybeConfig = this.trySerialize();
            if (maybeConfig === undefined)
                return;
            this.runValidation(maybeConfig);
            maybeConfig = this.extractRelevantConfig(maybeConfig, false);
            const data = encodeURIComponent(JSON.stringify(maybeConfig));
            this.options.obj.ajaxCallback('', '', 'save_config', '', `configName=${this.prefetched.config.name}&payload=${data}&global=false`, {
                onComplete: () => {
                    const res = this.options.obj.stateInfo.apiResult;
                    if ('err' in res) {
                        displayErrorMessage(new types.ErrMsg(res.err));
                    }
                    else {
                        alert('Config saved.');
                    }
                    okOrLog(this.options.obj.applyConfigChanges().then(() => {
                        this.remakeConfig();
                    }));
                }
            });
        }
        catch (e) {
            displayErrorMessage(new types.MsgWithCtx("There was an error saving the config.", e));
        }
    }
    ;
}
function initialize(ops) {
    new ListInitializer(ops);
}

;// ./src/index.ts




/*eslint-disable*/
window.initialize = initialize;
window.initTFSelector = initTFSelector;
window.afterFileUpload = AFTER_FILE_UPLOAD;
window.addEventListener('load', () => {
    let styleNode = document.createElement('style');
    styleNode.innerHTML = style;
    document.body.appendChild(styleNode);
});

/******/ })()
;