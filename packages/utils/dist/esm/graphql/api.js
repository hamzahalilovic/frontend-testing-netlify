"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addAppVersionMutation = exports.newAppVersionMutation = exports.listAppsQuery = exports.getLoginUserIdentityPoolQuery = exports.listDataSourcesQuery = exports.deletePrifinaSessionMutation = exports.listAppMarketQuery = exports.updateUserProfileMutation = exports.getPrifinaSessionQuery = exports.addPrifinaSessionMutation = exports.getPrifinaUserQuery = exports.getPrifinaWidgetsQuery = exports.getPrifinaAppsQuery = exports.getInstalledAppsQuery = exports.checkCognitoAttributeQuery = exports.checkUsernameQuery = exports.getHeaderQuery = exports.getCountryCodeQuery = exports.getVerificationQuery = exports.verifyCodeMutation = exports.sendVerificationMutation = exports.addSearchKeyMutation = exports.addSearchResultMutation = exports.createNotificationMutation = exports.updateActivityMutation = exports.installWidgetMutation = void 0;

var _queries = require("./queries");

var _mutations = require("./mutations");

//import Amplify, { Auth, API } from "aws-amplify";

/*
input SearchKeyInput {
	owner: String!
	searchKey: String
	role: String
}

input SearchResultInput {
	owner: String!
	searchKey: String!
	selectedResult: AWSJSON
}
*/
var installWidgetMutation = function installWidgetMutation(API, id, widget) {
  return API.graphql({
    query: _mutations.installWidget,
    variables: {
      id: id,
      widget: widget
    },
    authMode: "AMAZON_COGNITO_USER_POOLS"
  });
};

exports.installWidgetMutation = installWidgetMutation;

var updateActivityMutation = function updateActivityMutation(API, id, app) {
  return API.graphql({
    query: _mutations.updateActivity,
    variables: {
      id: id,
      activeApp: app
    },
    authMode: "AMAZON_COGNITO_USER_POOLS"
  });
};

exports.updateActivityMutation = updateActivityMutation;

var createNotificationMutation = function createNotificationMutation(API, input) {
  return API.graphql({
    query: _mutations.createNotification,
    variables: {
      input: input
    },
    authMode: "AMAZON_COGNITO_USER_POOLS"
  });
};

exports.createNotificationMutation = createNotificationMutation;

var addSearchResultMutation = function addSearchResultMutation(API, input) {
  return API.graphql({
    query: _mutations.addSearchResult,
    variables: {
      input: input
    },
    authMode: "AWS_IAM"
  });
};

exports.addSearchResultMutation = addSearchResultMutation;

var addSearchKeyMutation = function addSearchKeyMutation(API, input) {
  return API.graphql({
    query: _mutations.addSearchKey,
    variables: {
      input: input
    },
    authMode: "AWS_IAM"
  });
};

exports.addSearchKeyMutation = addSearchKeyMutation;

var sendVerificationMutation = function sendVerificationMutation(API, subject, message) {
  return API.graphql({
    query: _mutations.sendVerification,
    variables: {
      subject: subject,
      message: message
    },
    authMode: "AWS_IAM"
  });
};

exports.sendVerificationMutation = sendVerificationMutation;

var verifyCodeMutation = function verifyCodeMutation(API, userCode) {
  return API.graphql({
    query: _mutations.verifyCode,
    variables: {
      user_code: userCode
    },
    authMode: "AMAZON_COGNITO_USER_POOLS"
  });
};

exports.verifyCodeMutation = verifyCodeMutation;

var getVerificationQuery = function getVerificationQuery(API, userCode) {
  return API.graphql({
    query: _queries.getVerification,
    variables: {
      user_code: userCode
    },
    authMode: "AWS_IAM"
  });
};

exports.getVerificationQuery = getVerificationQuery;

var getCountryCodeQuery = function getCountryCodeQuery(API) {
  return API.graphql({
    query: _queries.getCountryCode,
    authMode: "AWS_IAM"
  });
};

exports.getCountryCodeQuery = getCountryCodeQuery;

var getHeaderQuery = function getHeaderQuery(API) {
  return API.graphql({
    query: getHeader,
    authMode: "AWS_IAM"
  });
};

exports.getHeaderQuery = getHeaderQuery;

var checkUsernameQuery = function checkUsernameQuery(API, userName, poolID) {
  return API.graphql({
    query: _queries.checkCognitoAttribute,
    variables: {
      attrName: "username",
      attrValue: userName,
      poolID: poolID
    },
    authMode: "AWS_IAM"
  });
};

exports.checkUsernameQuery = checkUsernameQuery;

var checkCognitoAttributeQuery = function checkCognitoAttributeQuery(API, attrName, attrValue, poolID) {
  return API.graphql({
    query: _queries.checkCognitoAttribute,
    variables: {
      attrName: attrName,
      attrValue: attrValue,
      poolID: poolID
    },
    authMode: "AWS_IAM"
  });
};

exports.checkCognitoAttributeQuery = checkCognitoAttributeQuery;

var getInstalledAppsQuery = function getInstalledAppsQuery(API, userName) {
  return API.graphql({
    query: _queries.getInstalledApps,
    variables: {
      id: userName
    },
    authMode: "AMAZON_COGNITO_USER_POOLS"
  });
};

exports.getInstalledAppsQuery = getInstalledAppsQuery;

var getPrifinaAppsQuery = function getPrifinaAppsQuery(API, id) {
  return API.graphql({
    query: _queries.getPrifinaApps,
    variables: {
      id: id
    },
    authMode: "AMAZON_COGNITO_USER_POOLS"
  });
};

exports.getPrifinaAppsQuery = getPrifinaAppsQuery;

var getPrifinaWidgetsQuery = function getPrifinaWidgetsQuery(API, id) {
  return API.graphql({
    query: _queries.getPrifinaWidgets,
    variables: {
      id: id
    },
    authMode: "AMAZON_COGNITO_USER_POOLS"
  });
};

exports.getPrifinaWidgetsQuery = getPrifinaWidgetsQuery;

var getPrifinaUserQuery = function getPrifinaUserQuery(API, id) {
  //console.log("API ", id);
  return API.graphql({
    query: _queries.getPrifinaUser,
    variables: {
      id: id
    },
    authMode: "AMAZON_COGNITO_USER_POOLS"
  });
};

exports.getPrifinaUserQuery = getPrifinaUserQuery;

var addPrifinaSessionMutation = function addPrifinaSessionMutation(API, input) {
  return API.graphql({
    query: _mutations.addPrifinaSession,
    variables: {
      input: input
    },
    authMode: "AMAZON_COGNITO_USER_POOLS"
  });
};

exports.addPrifinaSessionMutation = addPrifinaSessionMutation;

var getPrifinaSessionQuery = function getPrifinaSessionQuery(API, tracker) {
  return API.graphql({
    query: _queries.getPrifinaSession,
    variables: {
      tracker: tracker
    },
    authMode: "AWS_IAM"
  });
};

exports.getPrifinaSessionQuery = getPrifinaSessionQuery;

var updateUserProfileMutation = function updateUserProfileMutation(API, id) {
  var profile = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  return API.graphql({
    query: _mutations.updateUserProfile,
    variables: {
      id: id,
      profile: profile
    },
    authMode: "AMAZON_COGNITO_USER_POOLS"
  });
};

exports.updateUserProfileMutation = updateUserProfileMutation;

var listAppMarketQuery = function listAppMarketQuery(API, opts) {
  // AMAZON_COGNITO_USER_POOLS
  return API.graphql({
    query: _queries.listAppMarket,
    variables: {
      filter: opts.filter || {},
      limit: opts.limit || 100,
      sortDirection: opts.sortDirection || "DESC",
      nextToken: opts.nextToken || null
    },
    authMode: "AMAZON_COGNITO_USER_POOLS"
  });
};

exports.listAppMarketQuery = listAppMarketQuery;

var deletePrifinaSessionMutation = function deletePrifinaSessionMutation(API, tracker) {
  return API.graphql({
    query: _mutations.deletePrifinaSession,
    variables: {
      tracker: tracker
    },
    authMode: "AMAZON_COGNITO_USER_POOLS"
  });
};

exports.deletePrifinaSessionMutation = deletePrifinaSessionMutation;

var listDataSourcesQuery = function listDataSourcesQuery(API, opts) {
  // AMAZON_COGNITO_USER_POOLS
  return API.graphql({
    query: _queries.listDataSources,
    variables: {
      filter: opts.filter || {},
      limit: opts.limit || 100,
      sortDirection: opts.sortDirection || "DESC",
      nextToken: opts.nextToken || null
    },
    authMode: "AMAZON_COGNITO_USER_POOLS"
  });
};

exports.listDataSourcesQuery = listDataSourcesQuery;

var getLoginUserIdentityPoolQuery = function getLoginUserIdentityPoolQuery(API, username, poolID) {
  return API.graphql({
    query: _queries.getLoginUserIdentityPool,
    variables: {
      username: username,
      poolID: poolID
    },
    authMode: "AWS_IAM"
  });
};

exports.getLoginUserIdentityPoolQuery = getLoginUserIdentityPoolQuery;

var listAppsQuery = function listAppsQuery(API, opts) {
  // AMAZON_COGNITO_USER_POOLS
  return API.graphql({
    query: _queries.listApps,
    variables: {
      filter: opts.filter || {},
      limit: opts.limit || 100,
      sortDirection: opts.sortDirection || "DESC",
      nextToken: opts.nextToken || null
    },
    authMode: "AMAZON_COGNITO_USER_POOLS"
  });
};

exports.listAppsQuery = listAppsQuery;

var newAppVersionMutation = function newAppVersionMutation(API, id, prifinaId, opts) {
  return API.graphql({
    query: _mutations.newAppVersion,
    variables: {
      id: id,
      prifinaId: prifinaId,
      name: opts.name || null,
      title: opts.title || null,
      version: opts.version || null,
      appType: opts.appType || 1,
      identity: opts.identity || null,
      identityPool: opts.identityPool || null
    },
    authMode: "AMAZON_COGNITO_USER_POOLS"
  });
};

exports.newAppVersionMutation = newAppVersionMutation;

var addAppVersionMutation = function addAppVersionMutation(API, input) {
  return API.graphql({
    query: _mutations.addAppVersion,
    variables: {
      input: input
    },
    authMode: "AMAZON_COGNITO_USER_POOLS"
  });
};

exports.addAppVersionMutation = addAppVersionMutation;