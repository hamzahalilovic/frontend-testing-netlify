"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newWaiting = exports.newNotification = void 0;
var newNotification = "subscription UserNotification($owner:String!) {\n    newNotification(owner: $owner) {\n      notificationId\n      owner\n    }\n  }";
exports.newNotification = newNotification;
var newWaiting = "subscription addWaiting($key:String!) {\n  Messaging(key: $key) {\n    createdAt\n    endpoint\n    name\n    senderKey\n  }\n}";
exports.newWaiting = newWaiting;