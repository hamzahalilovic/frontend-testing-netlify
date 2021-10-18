"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addAppVersion = exports.newAppVersion = exports.deletePrifinaSession = exports.updateUserProfile = exports.addPrifinaSession = exports.installWidget = exports.addWaiting = exports.updateActivity = exports.updateNotificationStatus = exports.addNotification = exports.createNotification = exports.addSearchKey = exports.addSearchResult = exports.sendVerification = exports.verifyCode = void 0;
var verifyCode = "mutation verifyCode($user_code: String!) {\n    verifyCode(user_code: $user_code) {\n        user_code\n    }\n  }\n  ";
exports.verifyCode = verifyCode;
var sendVerification = "mutation sendVerification($subject: String!,$message:String!) {\n    sendVerification(subject: $subject,message: $message)\n  }\n  ";
exports.sendVerification = sendVerification;
var addSearchResult = "mutation searchResult($input:SearchResultInput) {\n  addSearchResult(input: $input)\n}";
exports.addSearchResult = addSearchResult;
var addSearchKey = "mutation searchKey($input:SearchKeyInput) {\n  addSearchKey(input: $input)\n}";
exports.addSearchKey = addSearchKey;
var createNotification = "mutation newNotification($input: NotificationInput!) {\n  createNotification(input: $input) {\n    body\n    createdAt\n    notificationId\n    owner\n    status\n    type\n  }\n}";
exports.createNotification = createNotification;
var addNotification = "mutation addNotification($input: NotificationInput!) {\n  addNotification(input: $input) {\n    notificationId\n    owner\n  }\n}";
exports.addNotification = addNotification;
var updateNotificationStatus = "mutation updateStatus($notificationId: String!,$status:Int!) {\n  updateNotificationStatus(notificationId: $notificationId, status: $status) {\n    body\n    createdAt\n    notificationId\n    owner\n    status\n    type\n    updatedAt\n  }\n}";
exports.updateNotificationStatus = updateNotificationStatus;
var updateActivity = "mutation updateUserActivity($id: String!,$activeApp: String!) {\n \n  updateActivity( id: $id,activeApp: $activeApp)\n}";
exports.updateActivity = updateActivity;
var addWaiting = "mutation newWaiting($input: WaitingInput) {\n  waiting(input: $input) {\n    createdAt\n    endpoint\n    region\n    name\n    senderKey\n  }\n}";
exports.addWaiting = addWaiting;
var installWidget = "mutation addInstalledWidget($id:String!,$widget:WidgetInput) {\n  addInstalledWidgets(id: $id, widget: $widget) {\n    id\n    installedWidgets\n  }\n}";
exports.installWidget = installWidget;
var addPrifinaSession = "mutation addSession($input:SessionInput) {\n  addSession(input: $input)\n}";
exports.addPrifinaSession = addPrifinaSession;
var updateUserProfile = "mutation updateUserProfile($id:String!, $profile:AWSJSON) {\n  updateUserProfile(id:$id,profile:$profile) {\n    appProfile\n    id\n  }\n}";
exports.updateUserProfile = updateUserProfile;
var deletePrifinaSession = "mutation deleteSession($tracker: String!) {\n  deleteSession(tracker: $tracker) \n}";
exports.deletePrifinaSession = deletePrifinaSession;
var newAppVersion = "mutation newAppVersion($id:String!, $prifinaId:String!,$name:String,$title:String, $version:String,$appType:Int!,$identity:String,$identityPool:String) {\n  newAppVersion(id:$id,prifinaId:$prifinaId,name:$name,title:$title,version:$version,appType:$appType,identity:$identity,identityPool:$identityPool) {\n    appType\n    id\n    identity\n    identityPool\n    name\n    prifinaId\n  }\n}";
exports.newAppVersion = newAppVersion;
var addAppVersion = "mutation addAppVersion($input:AppVersionInput) {\n  addAppVersion(input: $input) {\n    appType\n    id\n    name\n    version\n    nextVersion  \n  }\n}";
exports.addAppVersion = addAppVersion;