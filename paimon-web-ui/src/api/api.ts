/* Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
specific language governing permissions and limitations
under the License. */

import http from '@api/http'
import {API_ENDPOINTS} from '@api/endpoints';
import Result = API.Result;
import {CatalogItemList} from "@src/types/Catalog/data";
import {DatabaseItem} from "@src/types/Database/data";
import {TableItem} from "@src/types/Table/data";

export const createCatalog = async (catalogProp: Prop.CatalogProp) => {
    try {
        return await http.httpPost<Result<any>, Prop.CatalogProp>(API_ENDPOINTS.CRATE_CATALOG, catalogProp);
    } catch (error) {
        console.error('Failed to create catalog:', error);
    }
};

export const getAllCatalogs = async () => {
    try {
        return await http.httpGet<Result<CatalogItemList>, null>(API_ENDPOINTS.GET_ALL_CATALOGS)
    } catch (error: any) {
        console.error('Failed to get catalogs:', error);
    }
}

export const createDatabase = async (databaseProp: Prop.DatabaseProp) => {
    try {
        return await http.httpPost<Result<any>, Prop.DatabaseProp>(API_ENDPOINTS.CREATE_DATABASE, databaseProp);
    } catch (error) {
        console.error('Failed to create database:', error);
    }
};

export const getAllDatabases = async () => {
    try {
        return await http.httpGet<Result<DatabaseItem[]>, null>(API_ENDPOINTS.GET_ALL_DATABASES)
    } catch (error: any) {
        console.error('Failed to get database:', error);
    }
}

export const createTable = async (databaseProp: TableItem) => {
    try {
        debugger
        return await http.httpPost<Result<any>, TableItem>(API_ENDPOINTS.CREATE_TABLE, databaseProp);
    } catch (error) {
        console.error('Failed to create table:', error);
    }
};

export const getAllTables = async () => {
    try {
        return await http.httpPost<Result<TableItem[]>, any>(API_ENDPOINTS.GET_ALL_TABLES,{})
    } catch (error: any) {
        console.error('Failed to get tables:', error);
    }
}

const Api = {
    createCatalog,
    getAllCatalogs,
    createDatabase,
    getAllDatabases,
    createTable,
    getAllTables,
}

export default Api;

