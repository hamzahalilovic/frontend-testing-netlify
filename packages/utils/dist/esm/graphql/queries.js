"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listApps = exports.getLoginUserIdentityPool = exports.listDataSources = exports.listAppMarket = exports.getPrifinaSession = exports.listWaiting = exports.listNotificationsByDate = exports.getAddressBook = exports.getNotificationCount = exports.listNotifications = exports.getHeader = exports.getCountryCode = exports.getVerification = exports.checkCognitoAttribute = exports.checkUsername = exports.getInstalledApps = exports.getPrifinaApps = exports.getPrifinaWidgets = exports.getPrifinaUser = void 0;
var getPrifinaUser = "query prifinaUser($id:String!){\n        getPrifinaUser(id: $id) {\n          dataSources\n          installedApps\n          installedWidgets\n          appProfile\n          id\n\n        }\n      }";
exports.getPrifinaUser = getPrifinaUser;
var getPrifinaWidgets = "query prifinaWidgets {\n        getPrifinaApp(id: \"WIDGETS\") {\n          widgets\n        }\n      }";
exports.getPrifinaWidgets = getPrifinaWidgets;
var getPrifinaApps = "query prifinaApps {\n  getPrifinaApp(id: \"APPS\") {\n    apps\n  }\n}";
exports.getPrifinaApps = getPrifinaApps;
var getInstalledApps = "query getPrifinaUser($id: String!) {\n  getPrifinaUser(id: $id) {\n    installedApps\n  }\n}\n";
exports.getInstalledApps = getInstalledApps;
var checkUsername = "query checkUsername($userName: String!) {\n  checkUsername(userName: $userName)\n}\n";
exports.checkUsername = checkUsername;
var checkCognitoAttribute = "query checkCognitoAttribute($attrName: String!,$attrValue: String!,$poolID: String!) {\n  checkCognitoAttribute(attrName: $attrName,attrValue: $attrValue,poolID: $poolID)\n}\n";
exports.checkCognitoAttribute = checkCognitoAttribute;
var getVerification = "query getVerification($user_code: String!) {\n  getVerification(user_code: $user_code) {\n    user_code\n  }\n}\n";
exports.getVerification = getVerification;
var getCountryCode = "query getCountryCode {\n  getCountryCode\n}\n";
exports.getCountryCode = getCountryCode;
var getHeader = "query getHeader {\n  getHeader {\n    country\n    desktop\n    language\n    smarttv\n    mobile\n    tablet\n  }\n}\n";
exports.getHeader = getHeader;
var listNotifications = "query notificationList($filter: TableNotificationFilterInput,$sortDirection:String,$limit:Int,$nextToken:String) {\n  listNotifications(filter: $filter,sortDirection:$sortDirection,limit:$limit,nextToken:$nextToken}) {\n    items {\n      body\n      createdAt\n      notificationId\n      owner\n      status\n      type\n    }\n    nextToken\n  }\n}";
exports.listNotifications = listNotifications;
var getNotificationCount = "query notificationCount($filter:TableNotificationFilterInput){\n  getNotificationCount(filter: $filter)\n}";
exports.getNotificationCount = getNotificationCount;
var getAddressBook = "query addressBook($id: String!) {\n  getUserAddressBook(id: $id) {\n    id\n    addressBook\n  }\n}";
exports.getAddressBook = getAddressBook;
var listNotificationsByDate = "query listNotifications($owner: String!,$filter:TableNotificationByDateFilterInput,$sortDirection:String,$limit:Int,$nextToken:String) {\n  listNotificationsByDate(owner: $owner, filter: $filter,sortDirection:$sortDirection,limit:$limit,nextToken:$nextToken) {\n    items {\n      body\n      createdAt\n      notificationId\n      owner\n      status\n      type\n      updatedAt\n      sender\n    }\n  }\n}";
exports.listNotificationsByDate = listNotificationsByDate;
var listWaiting = "query waitingList($filter:TableWaitingFilterInput,$sortDirection:String,$limit:Int,$nextToken:String) {\n  listWaiting(filter: $filter, limit: $limit, nextToken: $nextToken,sortDirection:$sortDirection) {\n    items {\n      createdAt\n      endpoint\n      name\n      senderKey\n    }\n    nextToken\n  }\n}";
exports.listWaiting = listWaiting;
var getPrifinaSession = "query getSession($tracker: String!) {\n  getSession(tracker: $tracker) {\n    tokens\n    expire\n    identityPool\n  }\n}";
exports.getPrifinaSession = getPrifinaSession;
var listAppMarket = "query appMarketList($filter:TableAppMarketFilterInput,$sortDirection:String,$limit:Int,$nextToken:String) {\n  listAppMarket(filter: $filter, limit: $limit, nextToken: $nextToken,sortDirection:$sortDirection) {\n    items {\n      id\n      name\n      title\n      modifiedAt\n      createdAt\n      appType\n      version\n      manifest\n      route\n      dataSources\n      settings {\n        value\n        field\n        label\n        type\n      }\n    }\n    nextToken\n  }\n}";
exports.listAppMarket = listAppMarket;
var listDataSources = "query listDataSources($filter:TableDataSourceFilterInput,$sortDirection:String,$limit:Int,$nextToken:String) {\n  listDataSources(filter: $filter, limit: $limit, nextToken: $nextToken,sortDirection:$sortDirection) {\n    items {\n      module\n      sourceType\n      name\n      route\n      description\n    }\n    nextToken\n  }\n}";
exports.listDataSources = listDataSources;
var getLoginUserIdentityPool = "query getLoginUserIdentityPool($username: String!,$poolID: String!) {\n  getLoginUserIdentityPool(username: $username,poolID:$poolID)\n}\n";
exports.getLoginUserIdentityPool = getLoginUserIdentityPool;
var listApps = "query appsList($filter:TableAppsFilterInput,$sortDirection:String,$limit:Int,$nextToken:String) {\n  listApps(filter: $filter, limit: $limit, nextToken: $nextToken,sortDirection:$sortDirection) {\n    items {\n      id\n      name\n      title\n      nextVersion\n      modifiedAt\n      createdAt\n      status\n      appType\n      version\n    }\n    nextToken\n  }\n}";
/*

query MyQuery {
  getCountryCode
}

query MyQuery {
  getVerification(user_code: "55186bcc-4728-4512-aab1-a8f5f8db9b21##email#177143") {
    user_code
  }
}

export const getSchemaTypes = `query listTypesBySchema($schemaId: ID!, $nextToken: String) {
  listTypesBySchema(schemaId: $schemaId, nextToken: $nextToken) {
    items {
      id
      name
      alternateName
      description
      alternateDescription
      type
      lockName
      fields
    }
    nextToken
  }
}
`;

export const getAllDataModels = `query listDataModels($filter:TableDataModelsFilterInput) {
    listDataModels(filter:$filter) {
      items {
        uuid
        name
        description
        creator
        owner
        created
        modified
        status
        versions
        imported
      }
    }
  }
  `;

export const getDataModel = `query getDataModels($uuid: String!) {
    getDataModels(uuid: $uuid) {
        uuid
        name
        description
        creator
        owner
        created
        modified
        status
        major
        minor
        organization
        draftTypes
        versions
        imported
    }
  }
  `;
export const getDraftDataModel = `query getDataModels($uuid: String!) {
    getDataModels(uuid: $uuid) {
        uuid
        draftTypes
    }
  }
  `;
 */

/*
query getDataModels {
  getDataModels(uuid:"unique-id") {
      uuid
      name
      description
      creator
      owner
      created
      modified
      status
      organization
  }
}    
*/

/*
export const getAlbum = `
  query GetAlbum($id: ID!) {
    getAlbum(id: $id) {
      id
      name
      photos {
        items {
          id
          albumId
          bucket
          owner
        }
        nextToken
      }
      owner
    }
  }
`;
*/

/*
const modelfilter={
    "filter":{
      "owner":{"eq":"TERO"}
    }
  }
*/

exports.listApps = listApps;