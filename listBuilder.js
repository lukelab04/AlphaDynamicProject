const LIST_NAME = 'DYNAMIC_LIST';
const DETAIL_FORM_NAME = "DETAIL_VIEW";


function definedOr(item, val) {
	return item === undefined ? val : item;
}

function getSchema(obj, table, callback) {
	obj.ajaxCallback(
		"",
		"",
		"getSchemaAjaxCallback",
		"",
		"tableName=" + table,
		{
			onComplete: callback
		}
	)
}

class DynamicList {
	constructor(obj, config, openNewCallback, filters = []) {
		this.permanentFilters = filters;
		this.searchFilters = [];
		this.buttonFns = {};
		
		this.onRender = [];
		this.obj = obj;
		this.listBox = null;
		this.config = config;
		this.data = [];
		
		this.openNewCallback = openNewCallback;
		
		obj.getControl('LIST1')._size = () => {};
		obj.getControl('LIST1')._resize = () => {};
		obj.saveDynamicListEdits = () => this.saveDynamicListEdits();
		getSchema(obj, this.config.table, () => {
			this.schema = this.obj.stateInfo.schema;
			this.settings = this.buildSettings();
			this.buildList();
			this.fetchData(() => this.populateListBox());
		});
	}
	
	openNew(config, title, filters) {
		this.openNewCallback(config, title, filters);
	}
	
	openDetailView() {
		this.obj.runAction('Navigate Detail View');
	}
	
	saveDynamicListEdits() {
		let harvest = this.listBox.harvestList();
		this.obj.ajaxCallback(
			"", 
			"",
			"updateData",
			"",
			"tableName=" + this.config.table
			+ "&dirty=" + encodeURI(JSON.stringify(harvest)),
			{ onComplete: () => {
				this.listBox.__fixData(this.listBox);
				for (let i = 0; i < this.listBox._data.length; i++) {
					this.listBox._data[i]._isDirty = false;
				}
				this.listBox.populateUXControls();
				this.obj.refreshClientSideComputations(true);
				this.fetchData(() => this.populateListBox());
			}}
		);
	}
	
	buildSettings() {
		let columns = [];
		let listFields = [];
		let menuSettings = {};
		let items = {};
		
		for (const mapping of this.config.mappings) {
			columns.push(this.buildColumnDefn(mapping));
			listFields.push(this.buildListFieldDefn(mapping));
		}
		for (let i = 0; i < this.config.buttons.length; i++) {
			columns.push(this.buildColumnButton(this.config.buttons[i], i, items));
			this.makeMenuSetting(this.config.buttons[i], i, menuSettings, items);
		}
	
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
							if (typeof flag != 'undefined' && !flag) return false;
						}
					}
				}
				
				if (this.listBox._dvmode == 'search') return true;
				
				if (!this.listBox._autoCommitDetailView) {
					return this.listBox._showDirtyDetailViewWarning();
				} else {
					if (this.listBox.detailViewIsDirty && this.listBox.detailViewIsDirty(true)) {
						let result = this.listBox.updateListFromUXControls();
						return result;
					}
				}
			},
			onSelect: (index) => {
				// Will be assigned by Alpha later
				this.listBox.populateUXControls();
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
							case 'time':
								data[i][mapping.columnName] = A5.stringToDate(data[i][mapping.columnName], "0h:0m:0s am");
								break;
							case 'date':
								data[i][mapping.columnName] = A5.stringToDate(data[i][mapping.columnName], "MM/dd/yyyy");
								break;
							case 'datetime':
								data[i][mapping.columnName] = A5.stringToDate(data[i][mapping.columnName], "MM/dd/yyyy 0h:0m:0s 000 am");
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
			_dataSourceType: 'SQL',
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
					css: {
					}
				}
			},
			footer: {
				show: Boolean(this.config.paginate),
				html: '<div id="DYNAMIC_LIST_NAVIGATOR" style="width: 100%; text-align: center;"></div>'
			},
			_mediaFields: [],
			_getRoute: () => {
				let mode = typeof arguments[0] != 'undefined' ? arguments[0] : 'rowNumber';
				let obj = typeof arguments[1] != 'undefined' ? arguments[1] : [];
				
				if (typeof this.listBox.selection == 'undefined') return false;
				if (typeof this.listBox.selection[0] == 'undefined') return false;
				if (typeof this.listBox.getData(this.listBox.selection[0]) == 'undefined') return false;
				if (mode == '*key') {
				
				} else {
					if (mode != 'rowNumber') {
						let _d = this.listBox.getData(this.listBox.selection[0]);
						if (typeof _d.__primaryKey == 'undefined') {
							mode = 'rowNumber';
						}
					}
				}
				
				let endPoint = typeof arguments[2] != 'undefined' ? arguments[2] : '';
				if (endPoint != '') {
					let ra2 = [];
					let lObj = this.obj.getControl(endPoint);
					let parentList = lObj.parentList;
					while (typeof parentList != 'undefined') {
						let l2 = this.obj.getControl(parentList);
						let row = '';
						if (mode == 'rowNumber') row = l2.selection[0];
						else row = l2.getData(l2.selection[0])['*key'];
						ra2.push({list: parentList.toUpperCase(), row: row});
						parentList = l2.parentList;
					}
					return ra2.reverse();
				}
				
				if (mode == 'rowNumber' || mode == '*key') {
					obj.push({
						list: this.listBox.listVariableName.toUpperCase(), 
						row: this.listBox.getData(this.listBox.selection[0])['*key'], mode: mode
					});
				} else {
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
					if (lObj) lObj._getRoute(mode, obj);
				}
				return obj;
			},
			_setRoute: (route) => {
			
				if (this.listBox.multiple) return;
				if (typeof route == 'undefined') {
					route = this.listBox.__currentRoute;
					if (typeof route == 'undefined') return false;
				}
				
				let mode = typeof arguments[1] != 'undefined' ? arguments[1] : 'rowNumber';
			
				if(mode == 'primaryKey') {
					let _d = this.listBox._data;
					if (typeof _d[0] != 'undefined') {
						if (typeof _d[0].__primaryKey == 'undefined') {
							mode = 'rowNumber';
						}
					}
				}
				
				let lObj = '';
				let row = '';
				let pk = '';
				
				for (let i = 0; i < route.length; i++) {
					lObj = this.obj.getControl(route[i].list);
					row = route[i].row;
					if (typeof route[i].mode != 'undefined') {
						mode = route[i].mode;
					}
					if (mode == 'primaryKey') _pk = row;
					
					let flag = typeof this.listBox._restoringList != 'undefined' ? !this.listBox._restoringList : true;
					if (mode == 'rowNumber') {
						if (typeof row != 'undefined') {
							let rowFixed = '';
							if (typeof lObj._dataMap == 'undefined') return false;
							if (mode != 'rowNumber') {
								rowFixed = row;
							} else {
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
					} else {
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
			_refreshDebugInfo: () => {},
			_str: (txt) => {
				txt = txt.replace("'", "\\'");
				txt = '\'' + txt + '\'';
				return txt;
			},
			onBeforeItemDraw: function () {},
			onItemDraw: function(ele, data, index) {
				let _dirtyRowClassName = `_{dialog.componentName}_LIST1_dirtyRow`;
				let _dirtyRowClassNameInherited =`_{dialog.componentName}_LIST1_dirtyRowInherited`;
				let _dirtyRowStyle = `_{dialog.componentName}_LIST1_dirtyRowStyle`;
				let _hasUnsyncedMediaFilesClassName = `_{dialog.componentName}_LIST1_hasUnsyncedMediaFiles`;
				let _errorRowClassName = `_{dialog.componentName}_LIST1_hasError`;
				let _errorRowClassNameInherited = `_{dialog.componentName}_LIST1_hasErrorInherited _{dialog.componentName}_LIST1_dirtyRowInherited`;
				let _errorRowClassNameInherited_1 = `_{dialog.componentName}_LIST1_hasErrorInherited`;
				let _errorRowClassNameInherited_2 = `_{dialog.componentName}_LIST1_dirtyRowInherited`;
				let _errorRowStyle = `_{dialog.componentName}_LIST1_hasErrorStyle`;
				let _newRowClassName = `_{dialog.componentName}_LIST1_newRow`;
				let _newRowStyle = `_{dialog.componentName}_LIST1_newRowStyle`;
				let _deletedRowClassName = `_{dialog.componentName}_LIST1_deletedRow`;
				let _deletedRowStyle = `_{dialog.componentName}_LIST1_deletedRowStyle`;
				let _deletedRowClassNameInherited = `_{dialog.componentName}_LIST1_deletedRowInherited`;
				let __d = this._rData[index];
				$rcn(ele,_dirtyRowClassName);
				$rcn(ele,_dirtyRowClassNameInherited);
				$rcn(ele,_dirtyRowStyle);
				$rcn(ele,_errorRowClassName);
				$rcn(ele,_errorRowClassNameInherited);
				$rcn(ele,_errorRowClassNameInherited_1);
				$rcn(ele,_errorRowClassNameInherited_2);
				$rcn(ele,_errorRowStyle);
				$rcn(ele,_newRowClassName);
				$rcn(ele,_newRowStyle);
				$rcn(ele,_deletedRowClassName);
				$rcn(ele,_deletedRowStyle);
				$rcn(ele,_hasUnsyncedMediaFilesClassName);
				
				if (data._isDirty && typeof data._isDeleted != 'undefined' && data._isDeleted) {
					$acn(ele,_deletedRowClassName);
					$acn(ele,_deletedRowStyle);
					__d.__displayStyle = 'deletedRow';
				} else if ((data._isDirty && typeof data._oldData != 'undefined' && !data._isNewRow)) {
					$acn(ele,_dirtyRowClassName);
					$acn(ele,_dirtyRowStyle);
					__d.__displayStyle = 'dirtyRow';
				}
				if (data._isDirty && typeof data._oldData == 'undefined' && ! (data._isNewRow || data._isDeleted) ) {
					$acn(ele,_dirtyRowClassNameInherited);
					$acn(ele,_dirtyRowStyle);
					__d.__displayStyle = 'dirtyRowInherited';
				}
				if (data._isDeleted) {
					$acn(ele,_deletedRowClassName);
					$acn(ele,_deletedRowStyle);
					__d.__displayStyle = 'deletedRow';
				}
				if (data._isNewRow) {
					$acn(ele,_newRowClassName);
					$acn(ele,_newRowStyle);
					__d.__displayStyle = 'newRow';
				}
				let flagHasGlobalErrors = false;
				if (typeof data._globalErrors != 'undefined') {
					if ( data._globalErrors != '')
						flagHasGlobalErrors = true;
				}
				let flagHasWriteConflictErrors = false;
				if (typeof data._hasWriteConflictErrors)
					flagHasWriteConflictErrors = data._hasWriteConflictErrors
				if (data._hasServerSideError || flagHasGlobalErrors || flagHasWriteConflictErrors) {
					$acn(ele,_errorRowClassName);
					$acn(ele,_errorRowStyle);
					__d.__displayStyle = 'errorRow';
				} else {
					if(data._flagServerSideErrorInChild || data._flagWriteConflictErrorInChild || data._flagGlobalErrorInChild ){
						if(!data._isNewRow) {
							$acn(ele,_errorRowClassNameInherited);
							__d.__displayStyle = 'errorRowInherited';
						} else {
							__d.__displayStyle = 'newRow errorRowInherited';
							$acn(ele, _errorRowClassNameInherited_1);
						}
					}
				}
				if (data._hasUnsyncedMediaFiles && data._isDirty  ) {
					$acn(ele,_hasUnsyncedMediaFilesClassName);
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
				if (!this.config.paginate) return;
				
				if (this.obj._listStateChange)
					this.obj._listStateChange(this.listBox.listVariableName);
				
				let ele = '';
				ele = $(`_${this.obj.dialogId}.DUMMY.PAGENUMBER`);
				if(ele) ele.innerHTML = this._state.page;

				ele = $(`_${this.obj.dialogId}.DUMMY.PAGECOUNT`);
				if(ele) ele.innerHTML = this._state.pageCount;
				
				ele = $(`_${this.obj.dialogId}.DUMMY.PAGECOUNT.PAGESELECTOR`);
				if(ele) ele.innerHTML = this._state.pageCount;
				
				
				ele = $(`_${this.obj.dialogId}.DUMMY.LISTSTATE`);
				if(ele) {
					let listState = $u.o.toJSON(this._state);
					ele.innerHTML = listState;
				}
				
				if (this.listBox._hasNavigationBar) {
					let nObj = this.listBox._listNavigator;
					if(!nObj) {
						this.listBox._listNavigator = this.obj._navigationBar(this.listBox._navBarId);
					}
					nObj = this.listBox._listNavigator;
					if(nObj) {
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
							} else if (target == 'prev') {
								if (this.listBox._state.page >= 1) {
									this.listBox._state.page -= 1;
								}
							} else if (target == 'next') {
								if (this.listBox._state.page < this.listBox._state.pageCount) {
									this.listBox._state.page += 1;
								}
							} else if (target == 'last') {
								this.listBox._state.page = this.listBox._state.pageCount;
							}
							
							else {
								this.listBox._state.page = Number(target);
							}
							
							this.fetchData(() => this.populateListBox());
						};
						
						obj.listName = this.listBox.listVariableName;
						nObj.populate(obj);
						this.listBox.refresh();
						this.listBox.resize(); //needed if the list has a fixed size and the style is gr*
					}
				}
				
				ele = this.obj._buttons['BUTTON_LISTNAV_NEXT.LIST1'];
				if(ele) {
					if(this.listBox._state.page == this.listBox._state.pageCount || this.listBox._state.pageCount == 0) ele.setDisabled(true);
					else ele.setDisabled(false);
				}
				
				ele = this.obj._buttons['BUTTON_LISTNAV_LAST.LIST1'];
				if(ele) {
					if(this.listBox._state.page == this.listBox._state.pageCount || this.listBox._state.pageCount == 0) ele.setDisabled(true);
					else ele.setDisabled(false);
				}
				
				ele = this.obj._buttons['BUTTON_LISTNAV_FIRST.LIST1'];
				if(ele) {
					if(this.listBox._state.page == 1 || this.listBox._state.pageCount == 0) ele.setDisabled(true);
					else ele.setDisabled(false);
				}
				
				ele = this.obj._buttons['BUTTON_LISTNAV_PREV.LIST1'];
				if(ele) {
					if(this.listBox._state.page == 1 || this.listBox._state.pageCount == 0 ) ele.setDisabled(true);
					else ele.setDisabled(false);
				}
				
				ele = $(`${this.obj.dialogId}.V.R1.A5SYSTEM_LIST_PAGESELECTOR_LIST1`);
				if(ele) {
					let data = this.listBox._recordNavigatorLinks;
					if(data) {
						A5.form.populateSelect(ele,'' + this.listBox._state.page,data,true);
						//alert('page: ' + this._state.page);
						//ele.value = this._state.page;
					}
				}


			},
			childLists: [],
			_populateAllChildLists: function() { },
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
				if (obj.qbf && obj.type == 'c') val = $u.s.rTrim(val, ',');
				
				let flagKeyword = false;
				if (typeof obj.flagKeyword != 'undefined') flagKeyword = obj.flagKeyword;
				if (flagKeyword) {
					let _field = field.toUpperCase();
					let obj_i = lObj._searchFieldOptions[_field];
					lObj._setSearchOps(obj, obj_i);
					field = obj_i.searchField;
				}
				
				let _d = '';
				let _v = val;
				let flagC = false;
				
				if (obj.type == 'c') {
					flagC = true;
					if (!obj.caseSensitive) _v = _v.toLowerCase();
				} else {
					if (obj.mode > 1) obj.mode = 1;
					if (obj.mode < -1) obj.mode = -1;
				}
				
				let flag = false;
				obj.usesQBFOperator = false;
				if (obj.qbf) _v = _v.split(',');
				else _v = [_v];
				
				let o = {};
				let r = '';
				let _vals = [];
				
				for (let i = 0; i < _v.length; i++) {
					if (obj.qbf) o = lObj._QBF(_v[i]);
					else {
						o.flag = false;
						o.v1 = _v[i];
						o.v2 = '';
					}
					
					if (typeof data[field] == 'undefined') break;
					if (data[field] == null) break;
					
					_d = '' + data[field];
					if (obj.type == 'n') {
						o.v1 = Number(o.v1);
						o.v2 = Number(o.v2);
						_d = Number(_d);
					} else if (obj.type == 'l') {
						o.v1 = $u.s.toBool(o.v1);
						o.v2 = $u.s.toBool(o.v2);
						_d = $u.s.toBool(_d);
					} else if (obj.type == 'd') {
						o.v1 = A5.stringToDate(o.v1, obj.dateFormat);
						o.v2 = A5.stringToDate(o.v2, obj.dateFormat);
						
						if (typeof _d == 'string') _d = A5.stringToDate(_d, obj.dateFormat);
						if (o.v1 != '' && o.v1 != null) o.v1 = o.v1.getTime();
						if (o.v2 != '' && o.v2 != null) o.v2 = o.v2.getTime();
						if (_d != '' && _d != null) _d = _d.getTime();
					}
					
					if (flagC) {
						if (!obj.caseSensitive && typeof _d == 'string') _d = _d.toLowerCase();
					}
					
					if (o.flag) {
						if (o.op == 'between') {
							if (flagC) {
								if (_d.substr(0, o.v1.length) >= o.v1 && _d.substr(0, o.v2.length) <= o.v2) flag = true;
							} else {
								if (_d >= o.v1 && _d < o.v2 && (typeof _d == typeof o.v1)) flag = true;
							}
						} else {
							if (flagC) _d = _d.substr(0, o.v1.length);
							if (o.op == '>=') if (_d >= o.v1) flag = true;
							if (o.op == '<=') if (_d <= o.v1) flag = true;
							if (o.op == '>') if (_d > o.v1) flag = true;
							if (o.op == '<') if (_d < o.v1) flag = true;
						}
					} else {
						if(obj.mode == 1 || obj.mode == -1 ) {
						if(obj.mode == 1) if(_d == o.v1) flag = true;; //match
						if(obj.mode == -1) if(!(_d == o.v1)) flag = true;; //match
						} else if (obj.mode == 2 || obj.mode == -2) {
							if(obj.mode == 2) if(_d.indexOf(o.v1) > -1) flag = true; //contains
							if(obj.mode == -2) if(!(_d.indexOf(o.v1) > -1)) flag = true;
						} else if (obj.mode == 3 || obj.mode == -3) {
							if(obj.mode == 3) if(_d.indexOf(o.v1) == 0) flag = true; //starts with
							if(obj.mode == -3) if(!(_d.indexOf(o.v1) == 0)) flag = true; //starts with
						}
					}
					
					if (o.v1 != '') {
						if (_vals.indexOf(o.v1) == -1) _vals.push(o.v1);
					}
					
					if (o.v2 != '') {
						if (_vals.indexOf(o.v2) == -1) _vals.push(o.v2);
					}
				}
				
				if (flag) {
					let lObj = this.listBox;
					if (typeof lObj._state.highlight == 'undefined') lObj._state.highlight = {};
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
				if(lObj.beforeMenuOpen) flag = lObj.beforeMenuOpen(name,rowNumber,listObj);
				if(typeof flag == 'undefined') flag = true;
				if(!flag) return;
				let obj = lObj._menuSettings[name];
				if(typeof obj == 'undefined') return;
				let idIcon = this.obj.dialogId + '.' + lObj.listVariableName + '.MENU.' + name + '.' + rowNumber;
				let ele = $(idIcon);
				let menuData = obj.menuData;
				let menuSettings = obj.menuSettings;
				let objMenuObject = obj.menuObject;
				if(typeof objMenuObject == 'undefined') {
					menuSettings.rowNumber = rowNumber;
					obj.menuObject = new A5.Menu(menuData,menuSettings);
					objMenuObject = obj.menuObject
				} else {
					objMenuObject.rowNumber = rowNumber;
					objMenuObject.populate(menuData);
				}
				let flagIsOpen = obj.isOpen;
				let existingRowNumber = obj.existingRowNumber;
				if(typeof existingRowNumber == 'undefined') existingRowNumber = -1;
				let closingRowNumber = obj.closingRowNumber
				if(typeof closingRowNumber == 'undefined') closingRowNumber = -1;
				if(typeof flagIsOpen == 'undefined') flagIsOpen = false;
				if(rowNumber == closingRowNumber) flagIsOpen = true;
				let that = this.listBox;
				setTimeout(function() {
					if(!flagIsOpen ) {
						obj.isOpen = true;
						obj.existingRowNumber = rowNumber;
						lObj._menuName = name;
						let duration = obj.image_rotate_duration;
						if(typeof duration == 'undefined') duration = 600
						if (obj.image_rotate) that.__list_menu_rotate(ele,0,90,obj.imageOpen,duration);
						objMenuObject.show('dropdown',ele); return false;
					}
				},0);
			},
			__list_menu_rotate: (ele, from, to, terminalImage, duration) => {
				if (typeof duration == 'undefined') duration = 300;
				if (terminalImage == 'undefined') terminalImage = '';
				
				let onComplete;
				if (terminalImage != '') {
					onComplete = () => ele.innerHTML = A5.u.icon.html(terminalImage);
				} else {
					onComplete = () => {};
				}
				
				A5.u.element.transition(ele, {
						from: { transform: 'rotate(' + from + 'deg)' },
						to: { transform: 'rotate(' + to + 'deg)' },
						duration: duration
					},
					onComplete
				);
			},
			__list_menu_hide: () => {
				let obj = lObj._menuSettings;
				let isOpen;
				let menuObject;
				let imageClosed;
				for (const n in obj) {
					isOpen = obj[n].isOpen;
					if (isOpen) {
						imageClosed = obj[n].imageClosed;
						menuObject = obj[n].menuObject;
						if (menuObject) menuObject.hide(lObj);
						if (typeof imageClosed == 'undefined') imageClosed = '';
						if (lObj && lObj.__list_menu_rotate) lObj.__list_menu_rotate(ele, 90, 0, imageClosed, 600);
					}
				}
			},
			onListDraw: (data, startIndex) => {
				if (A5.flags.isMobile) {
					$e.add(this.listBox.contId + '.CONTENT', 'abstractdown', (e) => {
						let ele = e.target;
						let tag = '';
						if (ele && typeof ele.tagName == 'string') tag = ele.tagName.toLowerCase();
						if (tag != 'input' && tag != 'textarea') $e.preventDefault(e);
					});
					
					this.listBox._hasrun =  true;
					this.listBox._allrowschecked = true;
					let d = this.listBox._rData;
					for (let i = 0; i < d.length; i++) {
						if (!d[i].__selected) {
							this.listBox._allrowschecked = false;
							break;
						}
					}
					
					if (d.length == 0) this.listBox._allrowschecked = false;
					let h;
					if (this.listBox._allrowschecked) {
						h = A5.u.icon.html(this.listBox.__checkedImage);
					} else {
						h = A5.u.icon.html(this.listBox.__uncheckedImage);
					}
					
					let _id = this.obj.dialogId + '.' + this.listBox.listVariableName + '.CHECKBOXALL';
					let ele = $(_id);
					ele.innerHTML = h;
				}
			},
			onChange: () => {
				let btns = document.getElementsByClassName(`${LIST_NAME}_BUTTON`);
		
				for (let i = 0; i < btns.length; i++) {
					btns[i].parentElement.style.whiteSpace = 'normal';
				}
			}
		};
	}
	
	buildColumnDefn(mapping) {
		
		let template = mapping.columnName;
		switch (mapping.editType) {
			case 'time':
				template += ':dateString("MM/dd/yyyy 0h:0m:0s 000 am", "0h:0m AM")';
				break;
			case 'date':
				template += ':dateString("MM/dd/yyyy 0h:0m:0s 000 am", "MM/dd/yyyy")';
				break;
			case 'datetime':
				template += ':dateString("MM/dd/yyyy 0h:0m:0s 000 am", "MM/dd/yyyy 0h:0m AM")';
				break;
		}
		template = '{' + template + '}';
		
		if (mapping.template) template = mapping.template;
	
	
		return {
			show: definedOr(mapping.inList, true),
			header: {
				html: definedOr(mapping.displayName, mapping.columnName)
			},
			data: {
				template: `<span id="${this.obj.dialogId}.${LIST_NAME}.FIRSTNAME.I.{*dataRow}"> ${template} </span>`
			},
			width: mapping.width ? mapping.width : 'flex(1)',
			resize: false,
			order: mapping.columnName,
		}
	}
	
	buildColumnButton(button, btnNumber, items) {
		// Is this comment here?
		if (!button.title) button.title = '';
	
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
				resize: false,
				rcw: 0,
				data: {
					template: `
						<div style="display:inline-block" id="${this.obj.dialogId}.${LIST_NAME}.MENU.${btnNumber}.{*dataRow}" title="" a5-item="_MENU_onClick_${btnNumber}" class="${LIST_NAME}_BUTTON">
							${innerTemplate}
						</div>&nbsp;
					`
				}
			}
		}
		
		let tmpThis = this;
		items[`_systemButtononClick_${btnNumber}`] = {
			'selectable': true,
			onClick: (idx, v, args) => {
				let data = this.listBox._data[this.listBox._dataMap[idx]];
				(function(rowNumber, value, ia, data, lObj, listObj) {
					button.onClick(tmpThis);
				}(idx, v, args, data, this.listBox, this.listBox))
			}
		}
		
		return {
			header: { html: button.columnTitle },
			_name: btnNumber.toString(),
			_type: 'Button',
			resize: false,
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
		}
	}
	
	makeMenuSetting(button, index, menuSettings, items) {
		if (!button.children) return;
		
		let makeMenuData = (button) => {
			let children = [];
			if (button.children) {
				button.children.forEach(c => children.push(makeMenuData(c)));
			}
			
			return {
				html: button.title,
				icon: '',
				onClick: () => button.onClick(this),
			}
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
						if (lObj.onMenuClose) lObj.onMenuClose(lObj._menuName, rowNumber, lObj);
						let obj = lObj._menuSettings[lObj._menuName];
						let rowNumber = obj.existingRowNumber;
						let idIcon = this.obj.dialogId + '.' + lObj.listVariableName + '.MENU.' + lObj._menuName + '.' + rowNumber;
						let ele = $(idIcon);
						obj.isOpen = false;
						obj.closingRowNumber = rowNumber;
						setTimeout(() => { if (obj.closingRowNumber == rowNumber) obj.closingRowNumber = -1; }, 600);
						let duration = obj.image_rotate_duration;
						if (typeof duration == 'undefined') duration = 600;
						obj.existingRowNumber = -1;
						lObj._menuName = '';
						if (obj.image_rotate) lObj.__list_menu_rotate(ele, 90, 0, obj.imageClosed, duration);
					}
				}
			}
		};
		
		items[`_MENU_onClick_${index}`] = {
			'selectable': true,
			onClick: (idx, v, args) => {
				let data = this.listBox._data[this.listBox._dataMap[idx]];
				(function(rowNumber, value, ia, data, lObj, listObj) {
					lObj.__list_menu_show(index.toString(), rowNumber);
				}(idx, v, args, data, this.listBox, this.listBox))
			}
		}
	}
	
	buildListFieldDefn(mapping) {
		let defn = {
			name: mapping.columnName,
			defaultValue: `return this._controlDefaultValueForListField('${mapping.columnName}');`,
		};
		
		let onDvPopTemplate = (format) => {
			return `
				if(this._value == '') return '';
				if(this._value == null) return '';
				
				let formatIn = A5.serverSideDateFormat;
				formatIn = A5.__dtfmt + ' ' + A5.__tfmt;
				let timeSuffix = '';
				
				if( this._value.toLowerCase().indexOf('pm') > 0 || this._value.toLowerCase().indexOf('am') > 0) 
					timeSuffix = ' AM';
					
				formatIn = formatIn + ' 0h:0m:0s' + timeSuffix;
				let formatOut = format;
				let _d = A5.stringToDate(this._value,formatIn);
				let _ds = _d.toFormat(formatOut);
				
				return _ds;
				
			`;
		};
		
		let onListUpdateTemplate = (format) => {
			return `
				if(this._value == '') 
					return '';
					
				if(this._value == null) 
					return '';
					
				let formatIn = A5.serverSideDateFormat;
				formatIn = A5.__dtfmt + ' ' + A5.__tfmt;
				
				let timeSuffix = '';
				if (this._value.toLowerCase().indexOf('pm') > 0 || this._value.toLowerCase().indexOf('am') > 0)
					timeSuffix = ' AM';
					
				formatIn = formatIn + ' 0h:0m:0s' + timeSuffix;
				
				let formatOut = format;
				let _d = A5.stringToDate(this._value,formatIn);
				let _ds = _d.toFormat(formatOut);
				
				return _ds;
			`;
		};

		
		if (mapping.editType === 'time') {
			defn.onDetailViewPopulate = onDvPopTemplate('0h:0m AM');
			defn.onListUpdate = onListUpdateTemplate('0h:0m AM');
		} else if (mapping.editType === 'date') {
			defn.onDetailViewPopulate = onDvPopTemplate('MM/dd/yyyy');
			defn.onListUpdate = onListUpdateTemplate('MM/dd/yyyy');
		} else if (mapping.editType === 'datetime') {
			defn.onDetailViewPopulate = onDvPopTemplate('MM/dd/yyyy 0h:0m AM');
			defn.onListUpdate = onListUpdateTemplate('MM/dd/yyyy 0h:0m AM');
		}
		
		return defn;
	}
	
	buildDetailViewForm(listId, rowNum) {
		let _d = this.listBox._data[this.listBox._dataMap[rowNum]];
		
		for (const mapping of this.config.mappings) {
			let val = _d[mapping.columnName];
			switch (mapping.editType) {
				case "time":
				case "date":
				case "datetime":
					if (val instanceof Date) val = val.toFormat("MM/dd/yyyy 0h:0m:0s 000 am");
					_d[mapping.columnName] = val;
					break;
			}
		}
		
		let d = JSON.parse(JSON.stringify(_d))
		delete d['*key'];
		delete d['*renderIndex'];
		delete d['*value'];
		let json = JSON.stringify(d);
		
		let fb = new FormBuilder(this.obj, DETAIL_FORM_NAME);
		
		for(const mapping of this.config.mappings) {
			if (mapping.inDetailView) {
				let input = (new FormInput())
					.withLabel(mapping.displayName ? mapping.displayName : mapping.columnName)
					.withStyle('width: 100%')
					.withVariable(mapping.columnName);
					
				if (!mapping.editType) mapping.editType = 'text';
				switch (mapping.editType) {
					case 'text': 
					case 'number': break;
					case 'time': 
						input = input.asTime("hh:mm AM");
						break;
					case 'date':
						input = input.asDate("MM/dd/yyyy");
						break;
					case 'datetime':
						input = input.asDateTime("MM/dd/yyyy hh:mm AM");
						break;
					case 'bool':
						input = input.asBool();
						break;
				}
					
				fb.withElement(input);
			}
		}
		
		fb.withElement(makeDetailButtons());
		fb.render();
		
		this.obj.setValue(DETAIL_FORM_NAME, json);
	}
	
	setFilterAndFetch(filters) {
		this.searchFilters = filters;
		this.fetchData(() => this.populateListBox());
	}
	
	makeFilterFromSelected(colName, foreignColName) {
		let thisVal = '';
		if (this.listBox.selectionData.length > 0) {
			thisVal = this.listBox.selectionData[0][colName];
		}
		
		return [{
			columnName: foreignColName,
			columnVal: thisVal,
			connector: 'AND',
			op: '='
		}]
	}
	
	fetchData(callback) {
		let columns = [];
		this.config.mappings.forEach((c) => {
			columns.push(c.columnName);
		});
		
		let filters = JSON.stringify([...this.permanentFilters, ...this.searchFilters]);
		let paginate = '';
		if (this.config.paginate) {
			paginate = "&pageOptions=" + encodeURIComponent(`{pageSize: ${this.config.paginate.pageSize}, getPage: ${this.listBox._state.page}}`);
		}

		this.obj.ajaxCallback(
			"",
			"",
			"getAllDataForTable",
			"",
			"columns=" + encodeURIComponent(JSON.stringify(columns))
			+ "&tableName=" + encodeURIComponent(this.config.table)
			+ "&filters=" + encodeURIComponent(filters)
			+ paginate,
			{
				onComplete: () => {
					this.data = this.obj.stateInfo.allListData;
					let pageSize = (this.config.paginate ? this.config.paginate.pageSize : this.obj.stateInfo.numRowsAvailable);
					this.listBox._state = {
						pageSize: pageSize,
						page: this.listBox._state.page,
						pageCount: Math.ceil(this.obj.stateInfo.numRowsAvailable / pageSize),
						recordCount: this.obj.stateInfo.numRowsAvailable,
					};
					callback();
				}
			}
		);
	}
	
	countRows(callback) {
		let tableName = this.config.table;
		let filters = JSON.stringify(this.permanentFilters);
		
		obj.ajaxCallback(
			"",
			"",
			"countRows",
			"",
			"&tableName=" + encodeURIComponent(tableName)
			+ "&filters=" + encodeURIComponent(filters),
			{
				onComplete: callback
			}
		)
	}
	
	addOnRenderCallback(f) {
		if (this.listBox != null) f();
		this.onRender.push(f);
	}
	
	populateListBox() {
		this.listBox.populate(this.data);
		this.listBox._refreshStateMessages();
		this.listBox.refresh();
		for (const f of this.onRender) { f() }
	}
	
	buildList() {
		this.listBox = new A5.ListBox(this.obj.getPointer('LIST_CONTAINER').id, [], this.settings);
		this.listBox._hostComponentId = this.obj.dialogId;
		this.listBox._listSystemOnClickPopulateJSONForm = (rowNum) => this.buildDetailViewForm(LIST_NAME, rowNum);
		
		window[this.obj.dialogId + '.V.R1.' + this.listBox.listVariableName + 'Obj'] = this.listBox;
		
		setFormDetailView(this.obj, this.listBox);
	}
}

function setFormDetailView(obj, listBox) {
	obj.getControl(DETAIL_FORM_NAME)._listDetailView = (mode) => {
		let listName = LIST_NAME;
		let lObj = obj.getControl(listName);
		if (mode == 'getListName') {
			return listName;
		} else if (mode == 'save') {
			if (lObj.selection[0] != 'undefined') {
				lObj._selectedRow = lObj.selection[0];
			}
			lObj.updateListFromUXControls();
		} else if (mode == 'reset') {
			if (lObj.selection[0] != 'undefined') {
				let _d = lObj.selectionData[0];
				let d = JSON.parse(JSON.stringify(_d))
				delete d['*key'];
				delete d['*renderIndex'];
				delete d['*value'];
				let json = JSON.stringify(d);
				obj.setValue(DETAIL_FORM_NAME, json);
			}
		} else if (mode == 'deleterecord') {
			lObj.deleteRow();
		} else if (mode == 'newrecord') {
			lObj.newDetailViewRecord();
		} else if (mode == 'synchronize') {
			listBox.saveDynamicListEdits();
		}
	};
}

function makeDetailButtons() {
	let btnTemplate = (new FormButton())
		.withLayout('icon text')
		.withBtnStyle('white-space:nowrap;');
	btnTemplate._listName = LIST_NAME;
	
	let copyTemplate = () => {
		let y = new FormButton();
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




class DynamicListSearch {
	constructor(dynamicList, obj) {
		this.list = dynamicList;
		this.obj = obj;
		this.form = new FormBuilder(this.obj, "SearchForm");
		
		for (const mapping of this.list.config.mappings) {
			if (mapping.inList) {
				let element = (new FormInput())
					.withLabel(mapping.displayName ? mapping.displayName : mapping.columnName)
					.withVariable(mapping.columnName)
					.withStyle('width: 100%');
					
				if (!mapping.editType) mapping.editType = 'text';
				switch (mapping.editType) {
					case 'text': 
					case 'number': break;
					case 'time': 
						element = element.asTime("hh:mm AM");
						break;
					case 'date':
						element = element.asDate("MM/dd/yyyy");
						break;
					case 'datetime':
						element = element.asDateTime("MM/dd/yyyy hh:mm AM");
						break;
					case 'bool':
						element = element.asBool();
						break;
				}
				
				this.form.withElement(element);
			}
		}
		
		this.form.withElement((new FormButton())
			.withHtml("Search")
			.withClickHandler(() => {
				this.list.listBox.searchList({searchMode : 'auto'})
			})
		);
		
		this.form.withElement((new FormButton())
			.withHtml("Clear")
			.withClickHandler(() => {
				this.list.listBox.clearSearchList({searchMode : 'auto'});
			})
		);
		
		this.list.addOnRenderCallback(() => this.setListSearchFns());
		
		this.form.render();
	}
	
	setListSearchFns() {
		let lObj = this.list.listBox;
		
		if (lObj.searchList) return;
		
		lObj.searchList = () => {
			let obj = typeof arguments[0] != 'undefined' ? arguments[0] : {};
			let mode = 'serverSide';
			if (typeof obj.searchMode != 'undefined') mode = obj.searchMode;
			mode = mode.toLowerCase();
			
			if (mode.indexOf('auto') == 0) {
				let flagCS = false;
				if (typeof lObj.detailViewIsDirty == 'function') {
					if (lObj.listIsDirty() || lObj.detailViewIsDirty()) flagCS = true;
				} else {
					if (lObj.listIsDirty()) flagCS = true;
				}
				
				if (flagCS) mode = 'clientside';
			}
			
			if (!(this.list.config.serverSearch)) mode = 'clientside';
			
			
			let flagDirty = false;
			if (lObj.listIsDirty) flagDirty = lObj.listIsDirty();
			
			let flagResult = this.obj._list_executeEvent(lObj.listVariableName, 'beforeSearch', {searchMode: 'search', searchWhere: mode, listIsDirty: flagDirty});
			if (!flagResult) return false;
			
			if (mode == 'serverside') {
				lObj._searchListServerSide(obj);
			} else if (mode == 'clientside') {
				lObj._searchPartSubmit_clientSideFilter();
				let rowCount = lObj._rData.length;
				this.obj._list_executeEvent(lObj.listVariableName, 'afterSearchComplete', {searchMode: 'search', searchWhere: mode, recordsInQuery: rowCount});
			}
		}
		
		
		lObj._searchPartSubmit_clientSideFilter = () => {
			lObj._state.highlight = {};
			
			let map = lObj._searchPart.fieldMap;
			let val = '';
			let expn = [];
			let expn_i = '';
			let obj = {};
			let obj_i = {};
			let ac = [];
			let aco = {};
			let _highlight = {};
			
			
			for (let i = 0; i < map.length; i++) {
				let val = this.obj.getValue(map[i].control);
				if (val != '' && val != undefined) {
					obj_i = lObj._searchFieldOptions[lObj._listFields[i].name.toUpperCase()];
					lObj._setSearchOps(obj, obj_i);
					
					let strVal = val.toString();
					if (typeof val === 'string') strVal = lObj._str(val);
					if (val instanceof Date) strVal = val.toFormat('MM/dd/yyyy 0h:0m:0s 000 am');
					
					expn_i = 'this._match(data,' + lObj._str(lObj._listFields[i].name) + ',' + strVal + ','+JSON.stringify(obj)+')';
					expn.push(expn_i);
					aco.control = map[i].control;
					aco.value = val;
					ac.push(aco);
				}
			}
			
			let operator = '&&';
			if (typeof lObj._searchPartOperator != 'undefined') operator = lObj._searchPartOperator;
			expn = expn.join(' ' + operator + ' ');
			
			if (expn == '') return true;
			
			let fnText = 'if (' + expn + ') { return true; } else { return false; }';
			let searchFn = new Function('data', fnText);
			lObj.setFilter(searchFn);
				
		}
		
		lObj._setSearchOps = function(obj, obj_i) {
			obj.mode = obj_i.option;
			obj.qbf = obj_i.qbf;
			obj.type = obj_i.type;
			obj.dateFormat = obj_i.dateFormat;
		}
		
		lObj._searchListServerSide = () => {
			let flagDirty = false;
			if (lObj.listIsDirty) flagDirty = lObj.listIsDirty();
			
			if (flagDirty) {
				alert('Cannot search because List has edits that have not yet been synced');
				return false;
			}

			let filters = [];
			let map = lObj._searchPart.fieldMap;
			for (let i = 0; i < map.length; i++) {
				let val = this.obj.getValue(map[i].control);
				if (val != '' && val != undefined) {
					let ops = lObj._searchFieldOptions[lObj._listFields[i].name.toUpperCase()];
					
					let columnVal = '';
					let op = '';
					if (ops.type == 'text') {
						columnVal = '%' + val + '%';
						op = 'LIKE';
					} else {
						columnVal = val;
						op = '=';
					}
					
					filters.push({
						columnName: ops.searchField,
						columnVal: columnVal,
						connector: 'AND',
						op: op
					});
				}
			}
			
			this.list.setFilterAndFetch(filters);
		};
		
		lObj.clearSearchList = () => {
			let obj = typeof arguments[0] != 'undefined' ? arguments[0] : {};
			let mode = 'serverSide';
			if (typeof obj.searchMode != 'undefined') mode = obj.searchMode;
			mode = mode.toLowerCase();
			if (mode.indexOf('auto') == 0) {
				if (lObj.listIsDirty()) mode = 'clientside';
				else mode = 'serverside';
			}
			
			if (!this.list.config.serverSearch) mode = 'clientside';
			
			let parentList = lObj.parentList;
			if (typeof parentList != 'undefined') {
				if (parentList != '') mode = 'clientside';
			}
			
			let flagResult = this.obj._list_executeEvent(lObj.listVariableName, 'beforeSearch', {searchMode: 'clear', searchWhere: mode});
			if (!flagResult) return false;
			
			if (mode == 'serverside') {
				lObj._clearSearchListServerSide();
			} else if (mode == 'clientside') {
				lObj._searchPartSubmit_clientSideFilterClear();
				let rowCount = lObj._rData.length;
				this.obj._list_executeEvent(lObj.listVariableName, 'afterSearchComplete', {searchMode: 'clear', searchWhere: mode, recordsInQuery: rowCount});
			}
		};
		
		lObj._clearSearchListServerSide = () => {
			let map = lObj._searchPart.fieldMap;
			for (const m of map) {
				this.obj.setValue(m.control, '', false);
			}
		
			this.list.setFilterAndFetch([]);
			this.obj._setDVClean(lObj);
		};
		
		lObj._searchPartSubmit_clientSideFilterClear = () => {
			if (!lObj._searchPartHas) return true;
			lObj._state.highlight = {};
			lObj.setFilter(false);
			let map = lObj._searchPart.fieldMap;
			for (let i = 0; i < map.length; i++) {
				this.obj.setValue(map[i].control, '', false);
			}
			
			lObj.setFilter(false);
			delete lObj.__queryByFormValues;
			this.obj._setDVClean(lObj);
			
		};
		
		lObj._searchPartHas = true;
		lObj._searchPart = {};
		lObj._searchFieldOptions = {};
		lObj._searchPart.fieldMap = [];
		for (const mapping of this.list.config.mappings) {
		
			let type = 'c';
			if (!mapping.editType) mapping.editType = 'text';
			switch (mapping.editType) {
				case 'text':
					type = 'c';
					break;
				case 'time':
					type = 't';
					break;
				case 'date':
				case 'datetime':
					type = 'd';
					break;
				case 'bool':
					type = 'l';
					break;
				case 'number':
					type = 'n';
					break;
			}
		
			lObj._searchPart.fieldMap.push({
				control: 'SearchForm::' + mapping.columnName,
				field: mapping.columnName,
				dateFormat: 'MM/dd/yyyy 0h:0m:0s 000 am'
			});
			lObj._searchFieldOptions[mapping.columnName] = {
				option: 2,
				qbs: true,
				searchField: mapping.columnName, 
				type: type,
				dateFormat: 'MM/dd/yyyy 0h:0m:0s 000 am'
			};
		}
	}
}
