(this["webpackJsonpapp-desktop"]=this["webpackJsonpapp-desktop"]||[]).push([[8],{446:function(e,t,n){"use strict";n.r(t);var i=n(9),r=n(0),a=n.n(r),o=n(3),c=n(247),s=n.p+"static/media/mobile-background.d0a7cbfa.png",l=n(393),j=n(68),d=n(5),u=n(171),x=n.n(u),b=n(111),h=n.n(b),O=n(146),p=(n(21),n(91)),m=n(41),f=n(56),g=n(33),_=n(22),B=n(1);d.a.init();t.default=function(e){var t=Object(f.useToast)(),n=Object(p.a)({username:"",password:""}),u=Object(i.a)(n,2),b=u[0],v=u[1],y=Object(r.useState)({status:!1,msg:"Error message"}),w=Object(i.a)(y,2),k=w[0],F=w[1],C=Object(r.useState)({status:!1,msg:"Error message"}),E=Object(i.a)(C,2),I=E[0],S=E[1],P=Object(m.a)(),T=Object(i.a)(P,2),A=T[0],L=T[1],z=Object(m.a)(),D=Object(i.a)(z,2),J=D[0],K=D[1],M=Object(r.useState)(0),N=Object(i.a)(M,2),Q=N[0],U=N[1],G=function(e){console.log("USERNAME ",e);var n="";if(0===e.length)n=d.a.__("invalidEntry");else{var i=Object(g.l)(e,_.d.usernameLength);"LENGTH"===i&&(n=d.a.__("usernameError",{length:_.d.usernameLength})),"SPACES"===i&&(n=d.a.__("usernameError2"))}return""!==n?(t.check().some((function(e){return e.message===n}))||t.error(n,{}),F({status:!0})):F({status:!1}),n},H=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!1;return e.length<_.d.passwordLength&&!t?n=!0:Object(g.h)(e)&&Object(g.j)(e)&&Object(g.d)(e)&&Object(g.e)(e)&&!Object(g.f)(e)||(n=!0),n},R="",W=0;switch(Q){case 1:R="loginButton",W=50;break;case 2:R="confirmTitle",W=100;break;default:R="welcomeMessage",W=50}return Object(B.jsx)(a.a.Fragment,{children:Object(B.jsxs)(c.b,{textAlign:"center",pt:20,pb:20,children:[Object(B.jsx)(l.a,{height:"27px"}),Object(B.jsx)(o.Image,{src:s}),Object(B.jsxs)(j.a,{title:d.a.__(R),progress:W,mobileApp:!0,children:[2===Q&&Object(B.jsxs)(o.Box,{ml:30,mr:30,children:[Object(B.jsx)(o.Box,{children:Object(B.jsx)(o.Text,{textAlign:"left",textStyle:"caption",as:"p",m:0,children:d.a.__("authConfirmationText")})}),Object(B.jsx)(o.Box,{mt:15,children:Object(B.jsxs)(o.IconField,{width:"200px",children:[Object(B.jsx)(o.IconField.LeftIcon,{iconify:h.a,color:"componentPrimary",size:"17"}),Object(B.jsx)(o.IconField.InputField,{placeholder:d.a.__("codePropmt"),id:"confirmationCode",name:"confirmationCode"})]})}),Object(B.jsxs)(o.Box,{mt:35,display:"inline-flex",children:[Object(B.jsx)(o.Flex,{children:Object(B.jsx)(o.Button,{variation:"outline",onClick:function(){U(1)},children:d.a.__("backButton")})}),Object(B.jsx)(o.Flex,{ml:45,children:Object(B.jsx)(o.Button,{children:d.a.__("confirmButton")})})]})]}),1===Q&&Object(B.jsxs)(o.Box,{ml:30,mr:30,children:[Object(B.jsxs)(o.IconField,{children:[Object(B.jsx)(o.IconField.LeftIcon,{iconify:x.a,color:"componentPrimary",size:"17"}),Object(B.jsx)(o.IconField.InputField,{autoFocus:!0,placeholder:d.a.__("usernamePlaceholder"),id:"username",name:"username",ref:A,error:k.status,onChange:v,onKeyDown:function(e){if("Enter"===e.key)G(e.target.value,!0)},onBlur:function(e){""!==G(e.target.value)&&(L(),e.preventDefault())}})]}),Object(B.jsx)(o.Box,{display:"inline-flex",justifyContent:"flex-end",width:[1],style:{position:"relative",top:"-2px"},children:Object(B.jsx)(o.Flex,{children:Object(B.jsx)(o.Button,{variation:"link",fontSize:"10px",children:d.a.__("forgotUsername")})})}),Object(B.jsx)(o.Box,{mt:7,children:Object(B.jsx)(O.a,{placeholder:d.a.__("passwordPlaceholder"),id:"password",name:"password",ref:J,error:I.status,onChange:v,onKeyDown:function(e){if("Enter"===e.key){var n="";if(0===e.target.value.length)n=d.a.__("invalidEntry");else H(e.target.value)&&(n=d.a.__("passwordQuality"));""!==n?(t.check().some((function(e){return e.message===n}))||t.error(n,{}),S({status:!0})):(S({status:!1}),G(b.username))}},onBlur:function(e){if(H(e.target.value,!0)){var n=d.a.__("passwordQuality");t.check().some((function(e){return e.message===n}))||t.error(n,{}),S({status:!0}),K(),e.preventDefault()}else S({status:!1})}})}),Object(B.jsx)(o.Box,{display:"inline-flex",justifyContent:"flex-end",width:[1],style:{position:"relative",top:"-2px"},children:Object(B.jsx)(o.Flex,{children:Object(B.jsx)(o.Button,{variation:"link",fontSize:"10px",children:d.a.__("forgotPassword")})})}),Object(B.jsxs)(o.Box,{mt:35,display:"inline-flex",children:[Object(B.jsx)(o.Flex,{children:Object(B.jsx)(o.Button,{variation:"outline",onClick:function(){U(0)},children:d.a.__("backButton")})}),Object(B.jsx)(o.Flex,{ml:45,children:Object(B.jsx)(o.Button,{onClick:function(){U(2)},children:d.a.__("loginButton")})})]})]}),0===Q&&Object(B.jsxs)(a.a.Fragment,{children:[Object(B.jsx)(o.Box,{mt:12,pl:35,pr:35,children:Object(B.jsx)(o.Text,{textStyle:"body",style:{wordBreak:"break-word"},children:"We are a team working on the future of personal applications. This is why we have created this personal cloud environment that will help you implement your boldest ideas while allowing individuals to keep their data."})}),Object(B.jsxs)(o.Box,{mt:35,textAlign:"center",children:[Object(B.jsx)(o.Box,{children:Object(B.jsx)(o.Button,{onClick:function(){U(1)},children:d.a.__("loginButton")})}),Object(B.jsx)(o.Box,{mt:20,children:Object(B.jsx)(o.Button,{variation:"outline",children:d.a.__("registerButton")})})]})]})]})]})})}}}]);
//# sourceMappingURL=8.531d0513.chunk.js.map