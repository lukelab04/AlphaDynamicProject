

function buildListFromStoredSchema(obj, listName) {
	let schema = obj.stateInfo.schema;
	let tableName = GLOBAL_CONFIG[obj.getSessionVariable("PANELTYPE")].table;
	let query = "SELECT * FROM " + tableName;
	console.log(query);
	obj.ajaxCallback(
		"",
		"",
		"getAllDataForTable",
		"",
		"query=" + query,
		{
			onComplete: () => {
				obj.setListColumnsAndPopulate(listName, obj.stateInfo.allListData, {returnExpression: 'data.' + schema.primaryKey});
			}
		}
	)
}

function buildUpdateQuery(listUpdateRow, obj) {
	let table = GLOBAL_CONFIG[obj.getSessionVariable("PANELTYPE")].table;
	let query = "UPDATE " + table + " SET ";
	let primaryKeyQuote = "";
	let schema = obj.stateInfo.schema;
	
	schema.jsonOutput.column.forEach((element) => {
		let quote = element.alphaType == "C" ? "'" : "";
		if (element.name != schema.primaryKey) {
			query += '[' + element.name + "] = ";
			query += quote + listUpdateRow[element.name] + quote;
			query += ",";
		} else {
			primaryKeyQuote = quote;
		}
	});
	if (query[query.length - 1] == ',') {
		query = query.slice(0, query.length - 1);
	}
	
	query += " WHERE [" + schema.primaryKey + "] = " + primaryKeyQuote +  listUpdateRow[schema.primaryKey] + primaryKeyQuote;
	
	return query;
}

function buildInsertNewQuery(listUpdateRow, obj) {
	let table = GLOBAL_CONFIG[obj.getSessionVariable("PANELTYPE")].table;
	let query = "INSERT INTO " + table + "(";
	let schema = obj.stateInfo.schema;
	
	schema.jsonOutput.column.forEach((element) => {
		if (element.name != schema.primaryKey) {
			query += "[" +  element.name + "],";
		}
	});
	
	if (query[query.length - 1] == ',') {
		query = query.slice(0, query.length - 1);
	}
	query += ") VALUES (";
	
	schema.jsonOutput.column.forEach((element) => {
		let quote = element.alphaType == "C" ? "'" : "";
		if (element.name != schema.primaryKey) {
			query += quote + listUpdateRow[element.name] + quote;
			query += ",";
		}
	});
	
	if (query[query.length - 1] == ',') {
		query = query.slice(0, query.length - 1);
	}
	
	query += ")";
	
	return query;
}

function buildDeleteQuery(listUpdateRow, obj) {
	 // sql = "DELETE FROM customers WHERE id = :primaryKey_1
	 
	 let primaryKey = obj.stateInfo.schema.primaryKey;
	 let schema = obj.stateInfo.schema;
	 let table = GLOBAL_CONFIG[obj.getSessionVariable("PANELTYPE")].table;
	 
	 let primaryKeyQuote = "";
	 for (const elt of schema.jsonOutput.column) {
	 	if (elt.alphaType == "C" && elt.name == schema.primaryKey) {
	 		primaryKeyQuote = "'";
	 		break;
	 	}
	 }
	 
	 
	 return "DELETE FROM [" + table + "] WHERE [" + primaryKey + "] = " + primaryKeyQuote + listUpdateRow[primaryKey] + primaryKeyQuote;
}

function syncList(obj, listName) {
	let lObj = obj.getControl(listName);
	let toUpdate = lObj.harvestList();
	let queries = [];
	let schema = obj.stateInfo.schema;
	
	toUpdate.forEach((row) => {
		let query;
		if (row._isNewRow) {
			query = buildInsertNewQuery(row, obj);
		} else if (row._isDeleted) {
			query = buildDeleteQuery(row, obj);
		} else {
			query = buildUpdateQuery(row, obj);
		}
		
		queries.push(query);
		
	});
	
	obj.ajaxCallback(
		"", 
		"",
		"updateData",
		"",
		"queries=" + JSON.stringify(queries),
		{ onComplete: () => {
			buildListFromStoredSchema(obj, listName);
		}}
	)
}




