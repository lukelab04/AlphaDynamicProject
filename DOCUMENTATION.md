# Table of Contents
- [Table of Contents](#table-of-contents)
- [List Configuration](#list-configuration)
- [DynamicList](#dynamiclist)
  - [Properties](#properties)
  - [Methods](#methods)
  - [DynamicListSearch](#dynamiclistsearch)
  - [Properties](#properties-1)
  - [Methods](#methods-1)
  - [Filters](#filters)
- [LIST\_UX, SEARCH\_UX](#list_ux-search_ux)


# List Configuration
Lists are created dynamically by referencing a JSON configuration object. The object has the following structure. 

> **onInitialize**: `function(DynamicList, any) => any`
> > If specified, this function will be called after the list object is created. The first 
> > parameter is a reference to the current dynamic list object. The second parameter contains any arguments passed in to `openNewPanel`.
> 
> **dataSource**: `object`
> > Specify where the list data comes from.
> >
> > **type**: `string`
> > > Can be `"sql"` or `"json"`. An `"sql"` list references a database, while a `"json"` list can reference either static data or an arbitrary API returning JSON data.
> >
> > **table**: `string`
> > > If `type="sql"`, then **table** is the name of the table where the data is stored
> >
> > **static**: `array`
> > > If `type="sql"` and you want static data, this property holds the array of list data. 
> >
> > **endpoints**: `object`
> > > If `type="json"` and you want to get data from an API, this object holds the endpoints. Each key is one of `fetch`, `search`, `add`, `update`, or `delete`, and each value is of the following form:
> > > 
> > > **method**: `string`
> > > > HTTP method. GET, POST, DELETE, etc.
> > >
> > > **headers**: `object`
> > > > Headers to pass to HTTP request
> > >
> > > **endpoint**: `string | function([filters]) => string`
> > > > Endpoint to fetch. If a string, then any templates will be filled and the string will be used as the URL. You can also supply a function accepting a list of filters based on the currently selected row and returning a string URL. This is useful for APIs with complex queries not covered by templates.
> > > 
> > > **callback**: `function(Promise) => any`
> > > > Callback accepting the Promise returned from the API call
> > > 
> >
> > **preprocess**: `function (object) => object`
> > > If `type="sql"`, this function will take in the raw data from the API and transform it. Useful if the API data is not in the correct format.
>
> **searchOptions**: `object`
> > Specify search options
> > 
> > **serverSearch**: `boolean`
> > > Specify whether the list should search server-side or not. This can be overridden by other properties if those properties do not support server-side searching (or vice versa).
> >
> >
> > **advancedSearch**: `boolean`
> > > Specify whether to show an advanced search builder or a simple search form. This option will be overridden if the dataSource type is not `"sql"`.
> > 
> > **onlyInclude**: `[string]`
> > > An array of column names. If specified, *only* these columns will appear in the search.
> >
> > **onlyExclude** `[string]`
> > > An array of column names. If specified, *only* these columns will be excluded in the search.
> > **paginate**: `object | undefined`
> > > If defined, specify pagination options
> > >
> > > 
> > > **pageSize**: `integer`
> > > > Specify how many entries to fetch per page
>
> **buttons**: `array`
> > Lists support action and dropdown buttons in addition to regular data cells. Those buttons are specified here. Each array entry is an object with the following form.
> >
> > **title**: `string`
> > > Title of the button. Leave blank for no title.
> >
> > **columnTitle**: `string`
> > > Column header for the column containing these buttons
> >
> > **icon**: `string`
> > > Name of icon to use in button. Leave blank for no icon.
> >
> > **onClick**: `function(list) => any`
> > > Function taking an instance of `DynamicList`, called whenever the button is clicked.
> >
> > **children**: `array`
> > > If this option is specified, the button will appear as a dropdown. Each element in the array is a `button` object of the form described above.
>
> **mappings**: `array`
> > Array of objects describing the mapping from the database to the list columns. Each object has the following form.
> >
> > **columnName**: `string`
> > > Name of the column in the table to fetch data from. If the dataSource is JSON, then this is the key in the JSON object from which to get data.
> >
> > **inList**: `boolean`
> > > Specify whether this field should show up in the list
> >
> > **inDetailView**: `boolean`
> > > Specify whether this field should show up in the detail view 
> >
> > **displayName**: `string`
> > > If `inList = true`, then this option specifies the column header text of this column
> > 
> > **editType**: `string`
> > > Specify what type of data this is. It is **very important** to fill out this option, otherwise searching and sorting will not work as expected. Options are `"time"`, `"date"`, `"datetime"`, `"number'`, "`bool`", "`text`", and "`dropdown`".
> >
> > **dropdownConfig**: `object`
> > > If `editType="dropdown"`, this object specifies the dropdown options. The dropdown can use static data or query a database.
> > >
> > > **choices**: `[string]`
> > > > If you want static data, specify the dropdown options here.
> > > 
> > > **fromColumn**: `string` 
> > > > If you want to query a database, specify the column from which to get the options from
>
> > **width**: `string`
> > > Specify the width of the column. Use a CSS flex value, like `flex(2)`.
> > 
> > **template**: `string`
> > > Specify a client-side template to apply. 


For practical examples using this configuration, see the [tutorial](./TUTORIAL.md).


# DynamicList
The `DynamicList` object controls all of the rendering and data syncing for the list. It also has some helper methods that may be called (like during a button onClick).

## Properties
> **obj**: `object`
> > A pointer to the Dialog Object containing the list
>
> **listBox**: `object`
> > A pointer to the Alpha List object. Useful to get the render data, force a refresh, etc.
>
> **data**: `object`
> > All list data
>
> **config**: `object`
> > The [configuration object](#list-configuration) used to create this list

## Methods 
> **constructor(obj, config, filters, args)**
>
> > **obj**: `object`
> > > Pointer to the Dialog Object containing this list
> >
> > **config**: `object`
> > > The configuration object used to create this list 
> > 
> > **filters**: `array`
> > > Array of filters used for this list. Defaults to an empty array. Filters should probably not be specified manually. See the section on filters for more information.
> >
> > **args**: `any`
> > > If the `onInitialize` function is specified, these arguments will be passed in.
>
> **openDetailView()**
> > Open the detail view for the selected row
>
> **saveDynamicListEdits()**
> > Synchronize the list edits to the database. Only works if the data source type is `"sql"`.
>
> **makeFilterFromSelected(colName, foreignColName)**
> > Create a filter array based on the selected row.
> >
> > **colName**
> > > Column name *in this list* to filter by. 
> > 
> > **foreignColName**
> > > Column in another list to match.
> >
> > For example, if `colName='Firstname'` and `foreignColName='Country'` and the *currently selected row* has a Firstname value of `John`, then the filter will be analogous to the SQL query `SELECT [...] FROM [...] WHERE "Country" = "John"`.
>
> **fetchData(callback)**
> > Query the database using the current filters. You will probably never have to call this function.
> > 
> > **callback**: `() => any`
>
> **addOnRenderCallback(f)**
> > Register a function to be called when the list is rendered.
> >
> > **f**: `() => any`
>
> **setStaticData(data)**
> > Set the static data for the list. This overrides any data provided in the configuration.
> >
> > **data**: `object`
> > > JSON data to show in the list.
>
> **selection()**
> > Return the currently selected list row.


## DynamicListSearch
The `DynamicListSearch` controls the search form and searching functions for the `DynamicList`.

## Properties 
> **form**: `object`
> > JSON Form with the search fields
>
> **advForm**: `object`
> > Advanced Search form object 
> 
> **list**: `object`
> > Pointer to `DynamicList` instance that this is attached to

## Methods
> **constructor(dynamicList, obj)**
> > **dynamicList**: `DynamicList`
> > > `DynamicList` object to attach to
> > 
> > **obj**: `object`
> > > Dialog Object containing this search form 


## Filters
Internally, filters are passed around to tell Dynamic Lists which data to fetch. However, if a custom function is supplied for an API URL, then you may need to interact with filters directly. 

> **columnName**: `string`
> > Name of the column in the list
>
> **columnVal**: `any`
> > Value specified for the column
>
> **connector**: `'AND' | 'OR'`
> > If this filter is coming from an Advanced Search form, then this field specifies whether this filter should be ANDed or ORed with the other filters.
> 
> **op**: `string`
> >  Any valid SQL comparison operation, like `=`, `LIKE`, or `<`.
>
> **type**: `string`
> > Type of the data stored. Can be `text`, `boolean`, `number`, `datetime`, `time`, or `dropdown`. 

Filters can come from a variety of sources. If a list is created with some filters (e.g. from opening it from another list's button), then those filters will appear. Filters can also come from both simple and advanced search forms.


# LIST_UX, SEARCH_UX
The `list_ux` and `search_ux` are the basic building blocks of any application using dynamic lists. You should not have to modify these UXs. Instead, embed them into one or more layouts, and use those in the application. See the [tutorial](./TUTORIAL.md) for more info.
