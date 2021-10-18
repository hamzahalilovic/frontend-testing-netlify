"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useIsMountedRef = useIsMountedRef;
exports.useFocus = void 0;

var _react = require("react");

// Gneral Focus Hook
var useFocus = function useFocus() {
  var htmlElRef = (0, _react.useRef)(null);

  var setFocus = function setFocus() {
    htmlElRef.current && htmlElRef.current.focus();
  };

  return [htmlElRef, setFocus];
};

exports.useFocus = useFocus;

function useIsMountedRef() {
  var isMountedRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    isMountedRef.current = true;
    return function () {
      return isMountedRef.current = false;
    };
  });
  return isMountedRef;
}