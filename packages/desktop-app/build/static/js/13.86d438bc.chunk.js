(this["webpackJsonp@prifina-apps/desktop-app"]=this["webpackJsonp@prifina-apps/desktop-app"]||[]).push([[13],{413:function(e,t,n){"use strict";n.r(t),n.d(t,"TabText",(function(){return U})),n.d(t,"PageContainer",(function(){return L})),n.d(t,"WidgetWrapper",(function(){return P})),n.d(t,"IconDiv",(function(){return W})),n.d(t,"EmptyDiv",(function(){return K})),n.d(t,"WidgetContainer",(function(){return N})),n.d(t,"ModalBackground",(function(){return G})),n.d(t,"SearchContainer",(function(){return H})),n.d(t,"SettingsDiv",(function(){return Z})),n.d(t,"BlurImageDiv",(function(){return _})),n.d(t,"WidgetList",(function(){return q})),n.d(t,"SettingsDialog",(function(){return M})),n.d(t,"SearchBox",(function(){return Q})),n.d(t,"SearchResults",(function(){return X})),n.d(t,"SearchHistory",(function(){return $}));var i,r,c,o,a,d,s,l,h,u,x,g,p,j=n(10),b=n(33),f=n(9),O=n(46),w=n(2),m=n.n(w),v=n(15),y=n(6),k=n(414),S=n.n(k),T=n(257),z=n.n(T),I=n(258),C=n.n(I),D=n(17),E=n(5),F=n(1082),R=n.n(F),B=(n(1084),n(1)),A=["widgetIndex","widgetSettings","onUpdate"];E.i18n.init();var U=Object(v.default)(y.Text)(i||(i=Object(O.a)(["\n  padding-left: 20px;\n  padding-top: 25px;\n"]))),L=v.default.div(r||(r=Object(O.a)(["\n  margin-left: 64px;\n  margin-right: 64px;\n  margin-top: 24px;\n\n  background: #ffffff;\n  box-shadow: 0px -4px 8px #f5f6f6;\n"]))),P=v.default.div(c||(c=Object(O.a)(["\n  width: 100%;\n  height: 100%;\n  border: 2px outset;\n  border-radius: 8px;\n  /*\n  margin: 10px;\n  min-height: 200px;\n  min-width: 200px;\n  */\n"]))),W=v.default.div(o||(o=Object(O.a)(["\n  &:hover {\n    transform: scale(0.9);\n    box-shadow: 3px 2px 30px 1px rgb(0 0 0 / 24%);\n  }\n  height: 20px;\n  width: 20px;\n  position: absolute;\n  left: 275px;\n  top: 20px;\n  opacity: 1;\n  cursor: ",";\n  background-image: radial-gradient(\n    circle,\n    "," 2px,\n    transparent 0px\n  );\n  background-size: 100% 33.33%;\n  z-index: 10;\n"])),(function(e){return e.open?"default":"pointer"}),(function(e){return"dark"===e.widgetTheme?"white":"black"})),K=v.default.div(a||(a=Object(O.a)(["\n  height: 20px;\n  width: 20px;\n  position: absolute;\n  left: 180px;\n  top: 20px;\n  opacity: 1;\n"]))),N=Object(v.default)(y.Flex)(d||(d=Object(O.a)(["\n  /*\nwidth: 100%;\nheight: 100vh;\ndisplay: flex;\n*/\n  flex-wrap: wrap;\n  flex-direction: row;\n  align-content: flex-start;\n  justify-content: flex-start;\n  position: relative;\n  top: 0px;\n  left: 0px;\n  overflow-y: auto;\n"]))),G=v.default.div(s||(s=Object(O.a)(["\n  width: 100%;\n  height: 100vh;\n  z-index: 40;\n  background-color: rgba(30, 29, 29, 0.3);\n  position: absolute;\n  left: 0;\n  top: 0;\n"]))),H=v.default.div(l||(l=Object(O.a)(["\n  width: ","px;\n  /* height: 100vh; */\n  max-height: 400px;\n  overflow-y: auto;\n  z-index: 20;\n  background-color: white;\n  position: absolute;\n  left: ","px;\n  top: ","px;\n  padding-top: 10px;\n  padding-left: 10px;\n  padding-right: 10px;\n"])),(function(e){return e.width}),(function(e){return e.left}),(function(e){return e.top})),Z=v.default.div(h||(h=Object(O.a)(["\n  background-color: white;\n  width: 100%;\n  height: 100%;\n  /*border: 2px outset; */\n  border-radius: 8px;\n  z-index: 50;\n"]))),_=v.default.div(u||(u=Object(O.a)(["\n  filter: blur(4px);\n  -webkit-filter: blur(4px);\n\n  height: 100%;\n\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n"]))),Y=v.default.div(g||(g=Object(O.a)(["\n  color: ",";\n  position: absolute;\n  top: 110px;\n  height: 69px;\n  width: 69px;\n  margin: 0 10px 0 0;\n  text-align: left;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 5px solid\n    ",";\n  border-radius: 50%;\n  z-index: 20;\n  div {\n    animation: ","\n      4s linear infinite;\n  }\n  div:nth-child(1) {\n    animation-delay: 1s;\n  }\n\n  div:nth-child(2) {\n    animation-delay: 2s;\n  }\n  div:nth-child(3) {\n    animation-delay: 3s;\n  }\n"])),(function(e){return"dark"===e.widgetTheme?"white":"black"}),(function(e){return"dark"===e.widgetTheme?"white":"black"}),(function(e){return t="dark"===e.widgetTheme?["white","gray"]:["black","gray"],Object(v.keyframes)(x||(x=Object(O.a)(["\n{\n  10% {\n   background-color: ","; \n  }\n  0%, 20%,100% {\n    background-color: ",";\n  }\n}\n"])),t[0],t[1]);var t})),J=v.default.div(p||(p=Object(O.a)(["\n  position: relative;\n\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background-color: ","\n\n  float: left;\n  z-index: 21;\n  margin-right: 9px;\n  &:last-of-type {\n    margin-right: 0;\n  }\n"])),(function(e){return"dark"===e.widgetTheme?"white":"black"})),V=function(e){var t=Object(y.useTheme)();return console.log(t.colors),Object(B.jsxs)(Y,Object(f.a)(Object(f.a)({theme:t},e),{},{children:[Object(B.jsx)(J,Object(f.a)({theme:t},e)),Object(B.jsx)(J,Object(f.a)({theme:t},e)),Object(B.jsx)(J,Object(f.a)({theme:t},e))]}))},q=m.a.memo((function(e){var t=e.widgetList,n=e.widgetData,i=e.currentUser,r=e.dataSources;console.log("WIDGET LIST ",t),console.log("WIDGET DATA",n),console.log("WIDGET USER",i),console.log("DATASOURCES",r);var c=Object.keys(i.dataConnectors);return Object(B.jsx)(B.Fragment,{children:t.map((function(e,t){var o=n[t].dataConnectors[0];if(n[t].dataConnectors.length>0){var a=0;c.length>0&&c.indexOf(o)>-1&&(a=i.dataConnectors[o].status);var d=r[o].sourceType;if(console.log("DATASOURCE TYPE",t,o,d),a<2)return Object(B.jsxs)("div",{style:{width:n[t].widget.size.width+"px",height:n[t].widget.size.height+"px",margin:"10px"},children:[Object(B.jsx)(K,{}),Object(B.jsxs)(P,{children:[Object(B.jsx)(_,{style:{backgroundImage:"url(".concat(n[t].widget.image,")")}},"prifina-widget-"+t),Object(B.jsxs)("div",{style:{width:n[t].widget.size.width+"px",bottom:"60px",padding:"10px",position:"absolute",textAlign:"center"},children:[Object(B.jsx)(y.Text,{textStyle:"h6",color:"dark"===n[t].widget.theme?"white":"black",children:n[t].widget.title}),Object(B.jsx)(y.Text,{textStyle:"caption",color:"dark"===n[t].widget.theme?"white":"black",children:n[t].widget.shortDescription})]}),Object(B.jsxs)("div",{style:{width:n[t].widget.size.width+"px",bottom:"15px",paddingLeft:"10px",position:"absolute"},children:[0===a&&Object(B.jsx)(y.Button,{children:1===d?"Connect Data":"Import"}),1===a&&Object(B.jsx)(y.Button,{children:"Activate"})]})]},"widget-wrapper-"+t)]},"widget-processing-"+t);if(2===a)return Object(B.jsxs)("div",{style:{width:n[t].widget.size.width+"px",height:n[t].widget.size.height+"px",margin:"10px"},children:[Object(B.jsx)(K,{}),Object(B.jsxs)(P,{children:[Object(B.jsx)(_,{style:{backgroundImage:"url(".concat(n[t].widget.image,")")}},"prifina-widget-"+t),Object(B.jsxs)("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",top:"0px",zIndex:19},children:[Object(B.jsx)(V,{widgetTheme:n[t].widget.theme}),Object(B.jsxs)("div",{style:{width:n[t].widget.size.width+"px",bottom:"70px",padding:"5px",position:"absolute",textAlign:"center"},children:[Object(B.jsx)(y.Text,{textStyle:"h6",color:"dark"===n[t].widget.theme?"white":"black",children:"Prosessing your data..."}),Object(B.jsx)(y.Text,{textStyle:"caption",color:"dark"===n[t].widget.theme?"white":"black",children:"You will be notified as soon as the data becomes available in your cloud."})]})]},"widget-dot-"+t)]},"widget-wrapper-"+t)]},"widget-processing-"+t)}return Object(B.jsx)(e,{data:{settings:n[t].currentSettings,currentUser:i}},"prifina-widget-"+t)}))})})),M=function(e){var t=e.widgetIndex,n=e.widgetSettings,i=e.onUpdate,r=Object(b.a)(e,A);console.log("SETTINGS ",t,n);var c=Object(w.useRef)({}),o=Object(w.useRef)([]),a=Object(w.useRef)(),d=Object(w.useState)(!1),s=Object(j.a)(d,2),l=s[0],h=s[1];Object(w.useEffect)((function(){Object.keys(n.currentSettings).forEach((function(e){c.current[e]=n.currentSettings[e]})),console.log("FLDS ",c),console.log("DIALOG ",r);var e=[];n.settings.forEach((function(t){console.log(t),-1===e.indexOf(t.type)&&e.push(t.type)})),e.indexOf("TZ")>-1&&R.a.tz.names().forEach((function(e){o.current.push({text:e+": "+R.a.tz(e).format("Z"),tz:e,offset:R.a.tz(e).utcOffset()})})),h(!0)}),[]);var u=Object(E.useFormFields)(c.current),x=Object(j.a)(u,2),g=x[0],p=x[1];if(console.log("RENDER FIELDS ",g,c),o.current.length>0){var f=R.a.tz(g.tz).utcOffset();console.log("TZ ",c,f),f!==c.current.offset&&(c.current.offset=f,c.current.tz=g.tz,console.log("INPUT ",a),a.current&&(a.current.value=f),p({target:{id:"offset",value:f}}))}return Object(B.jsxs)(y.Box,{m:2,children:[Object(B.jsx)(y.Text,{textStyle:"h3",textAlign:"center",mt:10,children:n.title}),Object(B.jsx)(y.Divider,{}),l&&Object(B.jsxs)(y.Box,{mt:10,ml:5,mr:5,children:[n.settings.map((function(e,t){return Object(B.jsxs)(m.a.Fragment,{children:["text"===e.type&&Object(B.jsx)(y.Input,{mt:15,placeholder:e.label,mb:2,id:e.field,name:e.field,defaultValue:g[e.field],onChange:p,ref:a},"widget-setting-"+t),"TZ"===e.type&&Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(y.Label,{mt:10,children:e.label},"setting-label-"+t),Object(B.jsx)(y.Select,{mb:10,size:"sm",id:e.field,name:e.field,defaultValue:g[e.value],onChange:p,children:o.current.map((function(e,n){return Object(B.jsx)("option",{value:e.tz,children:e.text},"widget-setting-"+t+"-"+n)}))},"widget-setting-"+t)]})]},"settings-"+t)})),Object(B.jsx)(y.Box,{mt:10,children:Object(B.jsx)(y.Button,{width:"100%",onClick:function(e){console.log("UPDATE BUTTON ",g),o.length>0&&g.hasOwnProperty("tz")?i({tz:g.tz,offset:R.a.tz(g.tz).utcOffset()}):i(g)},children:"Update"})})]})]})},Q=Object(w.forwardRef)((function(e,t){var n=e.showHistory,i=e.chevronOpen,r=e.searchKey,c=e.searchOpen,o=e.saveSearchKey,a=Object(E.useFormFields)({search:""}),d=Object(j.a)(a,2),s=d[0],l=d[1],h=Object(w.useRef)();return Object(B.jsx)(y.Box,{ml:10,mr:10,ref:t,children:Object(B.jsxs)(y.IconField,{children:[Object(B.jsx)(y.IconField.LeftIcon,{iconify:S.a,color:"componentPrimary",size:"17"}),Object(B.jsx)(y.IconField.InputField,{ref:h,autoFocus:!0,placeholder:E.i18n.__("Search"),id:"search",name:"search",onChange:l,onKeyDown:function(e){"Enter"===e.key&&(o(s.search),r(s.search))}}),Object(B.jsx)(y.Box,{display:"inline-flex",onClick:function(){c||n((function(e){return!e})),h.current.value="",r("")},children:Object(B.jsx)(y.IconField.RightIcon,{iconify:i||c?z.a:C.a,color:"componentPrimary",size:"17"})})]})})})),X=function(e){var t=e.searchBox,n=e.searchKey,i=e.roleKey,r=e.saveSearchResult,c=t.current.getBoundingClientRect(),o={width:c.width,left:c.left,top:c.top+c.height+5};console.log(o),console.log("NEW SEARCH ",n);var a=Object(w.useState)(null),d=Object(j.a)(a,2),s=d[0],l=d[1],h=Object(E.useFetch)(),u=h.data,x=h.error,g=h.isLoading,p=h.setUrl;return Object(w.useEffect)((function(){if(g||p("".concat(D.b,"?cx=").concat(D.d,"&exactTerms=").concat(i.length>0?encodeURIComponent(i):"","&q=").concat(encodeURIComponent(n),"&lr=lang_en&key=").concat(D.a)),x&&l(Object(B.jsxs)("h2",{children:["Error when fetching: ",x]})),!u&&g&&l(Object(B.jsx)("h2",{children:"LOADING..."})),u||g||l(null),u){console.log(u);var e=u.items.map((function(e,t){return Object(B.jsxs)("li",{children:[Object(B.jsx)("div",{children:Object(B.jsx)("a",{href:e.link,"data-link":t,onClick:function(e){var t=parseInt(e.currentTarget.dataset.link);console.log("LINK CLICK ",u.items[t]),r(n,u.items[t])},target:"_blank",children:e.title})}),Object(B.jsx)("div",{style:{fontSize:"0.75rem"},children:e.snippet})]},"search-result-"+t)}));l(Object(B.jsx)("ol",{children:e}))}}),[n,x,g,u]),Object(B.jsx)(B.Fragment,{children:Object(B.jsxs)(H,Object(f.a)(Object(f.a)({},o),{},{children:[Object(B.jsx)(y.Text,{textStyle:"h4",children:"Search results"}),Object(B.jsx)(y.Divider,{}),s]}))})},$=function(e){var t=e.searchBox;console.log("HISTORY ",t);var n=t.current.getBoundingClientRect(),i={width:n.width,left:n.left,top:n.top+n.height+5};console.log(i);var r=[];return Object(B.jsx)(B.Fragment,{children:Object(B.jsxs)(H,Object(f.a)(Object(f.a)({},i),{},{children:[Object(B.jsx)(y.Text,{textStyle:"h4",children:"Search history"}),Object(B.jsx)(y.Divider,{}),Object(B.jsx)("ol",{children:r.length>0&&r.map((function(e,t){return Object(B.jsx)("li",{children:e.search},"search-"+t)}))})]}))})}}}]);
//# sourceMappingURL=13.86d438bc.chunk.js.map