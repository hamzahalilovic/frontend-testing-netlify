(this["webpackJsonpapp-desktop"]=this["webpackJsonpapp-desktop"]||[]).push([[4],{1087:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(1088);Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===o[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}}))}))},1088:function(e,t,r){"use strict";function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.TabPanelList=t.TabPanel=t.TabList=t.Tab=t.Tabs=void 0;var n=s(r(0)),i=s(r(8)),a=r(19),l=r(3);function c(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function s(e){if(e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!==typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=n?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}return r.default=e,t&&t.set(e,r),r}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var h=(0,a.compose)(a.layout,a.color,a.space,a.border,a.typography),m=(0,i.css)(['margin:0;padding:0;position:relative;::after{position:absolute;content:"";width:100%;bottom:0;left:0;border-bottom:1px solid ',';z-index:1;}::before{z-index:1;content:"','";color:',";font-size:18px;font-weight:600;margin-left:64px;margin-right:45px;}"],(function(e){return e.theme&&e.theme.colors?e.theme.colors.baseSecondary:"#00847a"}),(function(e){return e.title}),(function(e){return e.theme&&e.theme.colors?e.theme.colors.baseWhite:"#F5F8F7"})),y=(0,i.css)(["text-align:center;display:inline-block;list-style:none outside none;background-color:",";margin:0 10px;padding:0 10px;border:1px solid ",";font-size:12px;font-weight:400;padding-top:12px;padding-bottom:11px;padding-left:21px;padding-right:21px;line-height:16px;color:",";position:relative;z-index:0;cursor:pointer;}"],(function(e){return e.theme&&e.theme.colors?e.theme.colors.baseSecondary:"#00847a"}),(function(e){return e.theme&&e.theme.colors?e.theme.colors.baseSecondary:"#00847a"}),(function(e){return e.theme&&e.theme.colors?e.theme.colors.baseWhite:"#F5F8F7"})),x=(0,i.css)(["border-top-left-radius:15px;border-top-right-radius:15px;background-color:",";color:",";z-index:2;border-bottom-color:",';::before,::after{position:absolute;bottom:-1px;width:30px;height:30px;content:" ";}::before{left:-32px;border-bottom-right-radius:15px;border-width:0 1px 1px 0;}::after{right:-32px;border-bottom-left-radius:11px;border-width:0 0 1px 1px;}::after,::before{border:1px solid transparent;}::before{box-shadow:6px 3px 0 ',";}::after{box-shadow:-6px 3px 0 ",";}"],(function(e){return e.theme&&e.theme.colors?e.theme.colors.baseWhite:"#F5F8F7"}),(function(e){return e.theme&&e.theme.colors?e.theme.colors.basePrimary:"#1E1D1D"}),(function(e){return e.theme&&e.theme.colors?e.theme.colors.baseWhite:"#F5F8F7"}),(function(e){return e.theme&&e.theme.colors?e.theme.colors.baseWhite:"#F5F8F7"}),(function(e){return e.theme&&e.theme.colors?e.theme.colors.baseWhite:"#F5F8F7"})),g=i.default.ul.withConfig({displayName:"Tabs__UnorderedList",componentId:"sc-1330ez9-0"})(["",""],m),j=i.default.li.withConfig({displayName:"Tabs__TabItem",componentId:"sc-1330ez9-1"})([""," ",""],y,(function(e){return e.selected?x:null})),T=i.default.div.withConfig({displayName:"Tabs__TabPanelItem",componentId:"sc-1330ez9-2"})(["z-index:2;background-color:",";border-top-left-radius:15px;border-top-right-radius:15px;padding-top:15px;height:100%;"],(function(e){return e.theme&&e.theme.colors?e.theme.colors.baseWhite:"#F5F8F7"})),O=i.default.div.withConfig({displayName:"Tabs__TabBackground",componentId:"sc-1330ez9-3"})([""," background-color:",";border:0px;padding-top:19px;"],h,(function(e){return e.theme&&e.theme.colors?e.theme.colors.baseSecondary:"#00847a"})),v=(0,n.createContext)(),P=function(){return(0,n.useContext)(v)},S=function(e){var t=e.activeTab,r=void 0===t?1:t,o=e.onClick,i=e.title,a=void 0===i?"":i,c=e.children,s=e.theme,d=f(e,["activeTab","onClick","title","children","theme"]);console.log("TABS ",d,s);var u=(0,l.useTheme)(),b=s||u;console.log(u);var h=null,m=null;return console.log("TABS CHILDRENS ",c),c&&Array.isArray(c)&&n.default.Children.forEach(c,(function(e,t){n.default.isValidElement(e)&&("TabList"===e.type.displayName&&(h=n.default.cloneElement(e,{theme:b})),"TabPanelList"===e.type.displayName&&(m=n.default.cloneElement(e,{theme:b})))})),console.log("TABS PANEL LIST ",m),n.default.createElement(v.Provider,{value:{activeTab:r,onClick:o,title:a}},n.default.createElement(O,p({theme:b},d),h,m))};t.Tabs=S;var w=(0,n.forwardRef)((function(e,t){var r=e.tab,o=f(e,["tab"]),i=P().onClick,a=(0,n.useRef)(),l=t||a;return n.default.createElement(j,p({},o,{onClick:function(e){return i(e,r)},ref:l}))}));t.Tab=w;var _=function(e){var t=e.children,r=f(e,["children"]),o=P(),i=o.activeTab,a=o.title,l=n.default.Children.map(t,(function(e,t){if(n.default.isValidElement(e))return"Tab"===e.type.displayName?t===i?n.default.cloneElement(e,u({selected:!0,tab:t},r)):n.default.cloneElement(e,u({tab:t},r)):void 0}));return n.default.createElement(g,p({title:a},r),l)};t.TabList=_;var E=function(e){var t=e.children,r=f(e,["children"]),o=P().activeTab,i=null;return console.log("PANEL ",r),console.log("CHILDREN ",t),t&&Array.isArray(t)&&t.length>=o&&n.default.isValidElement(t[o])&&(i=n.default.cloneElement(t[o],u({},r))),n.default.createElement(n.default.Fragment,null,i)};t.TabPanelList=E;var N=(0,n.forwardRef)((function(e,t){return n.default.createElement(T,p({},e,{ref:t}))}));t.TabPanel=N,S.displayName="Tabs",w.displayName="Tab",_.displayName="TabList",N.displayName="TabPanel",E.displayName="TabPanelList",S.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{activeTab:{defaultValue:{value:"1",computed:!1},required:!1},title:{defaultValue:{value:'""',computed:!1},required:!1}}},w.__docgenInfo={description:"",methods:[],displayName:"Tab"},_.__docgenInfo={description:"",methods:[],displayName:"TabList"},N.__docgenInfo={description:"",methods:[],displayName:"TabPanel"},E.__docgenInfo={description:"",methods:[],displayName:"TabPanelList"}},442:function(e,t,r){"use strict";r.r(t);var o=r(9),n=r(0),i=r(3),a=r(1087),l=r(1),c=function(e){console.log("SETTINGS PROPS ",e);var t=Object(n.useState)(0),r=Object(o.a)(t,2),c=r[0],s=r[1];return Object(l.jsxs)(a.Tabs,{activeTab:c,onClick:function(e,t){console.log("Click",e),console.log("TAB",t),s(t)},title:"Account Settings",children:[Object(l.jsxs)(a.TabList,{children:[Object(l.jsx)(a.Tab,{children:"User Details"}),Object(l.jsx)(a.Tab,{children:"Cloud Subscription"}),Object(l.jsx)(a.Tab,{children:"Usage"}),Object(l.jsx)(a.Tab,{children:"Security & Privacy"}),Object(l.jsx)(a.Tab,{children:"Settings"})]}),Object(l.jsxs)(a.TabPanelList,{children:[Object(l.jsx)(a.TabPanel,{children:Object(l.jsx)(i.Box,{children:Object(l.jsx)(i.Text,{colorStyle:"error",children:"Testing1"})})}),Object(l.jsx)(a.TabPanel,{children:Object(l.jsx)(i.Box,{children:Object(l.jsx)(i.Text,{colorStyle:"error",children:"Testing2"})})}),Object(l.jsx)(a.TabPanel,{children:Object(l.jsx)(i.Box,{children:Object(l.jsx)(i.Text,{colorStyle:"error",children:"Testing3"})})}),Object(l.jsx)(a.TabPanel,{children:Object(l.jsx)(i.Box,{children:Object(l.jsx)(i.Text,{colorStyle:"error",children:"Testing4"})})}),Object(l.jsx)(a.TabPanel,{children:Object(l.jsx)(i.Box,{children:Object(l.jsx)(i.Text,{colorStyle:"error",children:"Testing5"})})})]})]})};c.displayName="Settings",t.default=c}}]);
//# sourceMappingURL=4.df650645.chunk.js.map