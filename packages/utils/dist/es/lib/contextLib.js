"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAppContext = useAppContext;
exports.useAccountContext = useAccountContext;
exports.AccountContext = exports.AppContext = void 0;

var _react = require("react");

var AppContext = /*#__PURE__*/(0, _react.createContext)(null);
exports.AppContext = AppContext;

function useAppContext() {
  return (0, _react.useContext)(AppContext);
}

var AccountContext = /*#__PURE__*/(0, _react.createContext)(null);
exports.AccountContext = AccountContext;

function useAccountContext() {
  return (0, _react.useContext)(AccountContext);
}