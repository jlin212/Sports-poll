(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{146:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(177),l=t(172),i=t(164);a.default=function(e){var a=e.pageContext,t=a.page;return c.a.createElement(c.a.Fragment,null,c.a.createElement(l.a,null),c.a.createElement(r.a,null,c.a.createElement("h1",null,t.title),console.log(a)),c.a.createElement(i.a,null))}},152:function(e,a,t){"use strict";t.d(a,"b",function(){return o});var n=t(0),c=t.n(n),r=t(4),l=t.n(r),i=t(33),s=t.n(i);t.d(a,"a",function(){return s.a}),t.d(a,"c",function(){return i.navigate});t(160);var M=c.a.createContext({}),o=function(e){return c.a.createElement(M.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):c.a.createElement("div",null,"Loading (StaticQuery)")})};o.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},153:function(e,a,t){"use strict";function n(){return(n=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}t.d(a,"a",function(){return n})},154:function(e,a,t){"use strict";function n(e,a){if(null==e)return{};var t,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(c[t]=e[t]);return c}t.d(a,"a",function(){return n})},155:function(e,a,t){var n;!function(){"use strict";var t={}.hasOwnProperty;function c(){for(var e=[],a=0;a<arguments.length;a++){var n=arguments[a];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var l=c.apply(null,n);l&&e.push(l)}else if("object"===r)for(var i in n)t.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):void 0===(n=function(){return c}.apply(a,[]))||(e.exports=n)}()},156:function(e,a,t){"use strict";t.d(a,"a",function(){return l}),t.d(a,"b",function(){return s});t(173);var n,c=t(4),r=t.n(c);function l(e,a){return void 0===e&&(e=""),void 0===a&&(a=n),a?e.split(" ").map(function(e){return a[e]||e}).join(" "):e}var i="object"==typeof window&&window.Element||function(){};r.a.oneOfType([r.a.string,r.a.func,function(e,a,t){if(!(e[a]instanceof i))return new Error("Invalid prop `"+a+"` supplied to `"+t+"`. Expected prop to be an instance of Element. Validation failed.")},r.a.shape({current:r.a.any})]);var s=r.a.oneOfType([r.a.func,r.a.string,r.a.shape({$$typeof:r.a.symbol,render:r.a.func}),r.a.arrayOf(r.a.oneOfType([r.a.func,r.a.string,r.a.shape({$$typeof:r.a.symbol,render:r.a.func})]))]);"undefined"==typeof window||!window.document||window.document.createElement},157:function(e,a,t){var n=t(25).f,c=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in c||t(18)&&n(c,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},159:function(e,a,t){"use strict";t.d(a,"a",function(){return n}),t.d(a,"b",function(){return r}),t.d(a,"c",function(){return l}),t.d(a,"d",function(){return i});var n=function(){return"undefined"!=typeof window&&window.localStorage.getItem("gatsbyUser")?JSON.parse(window.localStorage.getItem("gatsbyUser")):{}},c=function(e){return window.localStorage.setItem("gatsbyUser",JSON.stringify(e))},r=function(e){var a=e.username,t=e.password;return"john"===a&&"pass"===t&&c({username:"john",name:"Johnny",email:"johnny@example.org"})},l=function(){return!!n().username},i=function(e){c({}),e()}},160:function(e,a,t){var n;e.exports=(n=t(162))&&n.default||n},161:function(e,a,t){"use strict";t.d(a,"a",function(){return n});var n="http://localhost:1337"},162:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),c=t.n(n),r=t(4),l=t.n(r),i=t(55),s=t(2),M=function(e){var a=e.location,t=s.default.getResourcesForPathnameSync(a.pathname);return c.a.createElement(i.a,Object.assign({location:a,pageResources:t},t.json))};M.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},a.default=M},163:function(e){e.exports={data:{sporttalk:{leagues:[{id:"1",name:"NFL",club:null,logo:{url:"/uploads/5d2e13f921d749aaabd992f3f49d3bc9.png"}},{id:"2",name:"NBA",club:null,logo:{url:"/uploads/80c94e24a9c94c72827a1ed5acd95e66.png"}},{id:"3",name:"NHL",club:null,logo:{url:"/uploads/bcfa5c39853f421d86daf0b9a60ad4a1.png"}},{id:"4",name:"MLB",club:null,logo:{url:"/uploads/de661f5bf2364edfb6aa90fbcb0c294a.png"}},{id:"5",name:"Warriors",club:null,logo:{url:"/uploads/affbfdd6f090421583ca3c51ef43c93c.png"}},{id:"6",name:"Stanford",club:null,logo:{url:"/uploads/bf7f51a4f21a44b8bef4f31ab45e9c67.png"}}]}}}},164:function(e,a,t){"use strict";t(35);var n=t(165),c=t(0),r=t.n(c),l=t(152),i=t(177),s=t(181),M=t(182),o=t(180),u=t(171),N=t(166),g=t.n(N),j=t(167),I=t.n(j),D=t(168),m=t.n(D),y=t(169),d=t.n(y),f=t(170),E=t.n(f);t(176);a.a=function(){return r.a.createElement(l.b,{query:"3579751786",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("footer",{className:"footer"},r.a.createElement(i.a,null,r.a.createElement("div",{className:"footer-top"},r.a.createElement(s.a,null,r.a.createElement(u.a,{md:6},r.a.createElement("div",{className:"logo"},r.a.createElement(l.a,{to:"/",className:"logo-item"},"Sports",r.a.createElement("span",{className:"color-red"},"Talk"))),r.a.createElement("div",{className:"footer-nav"},r.a.createElement(M.a,{className:"list"},e.sporttalk.pages.map(function(e,a){return!0===e.in_footer?r.a.createElement(o.a,{key:a,className:"list-item"},r.a.createElement(l.a,{partiallyActive:!0,activeClassName:"nav-active",className:"nav-link",to:"/"+e.title.toLowerCase().replace(" ","_"),style:{padding:0}},e.title)):""})))),r.a.createElement(u.a,{md:6},r.a.createElement("div",{className:"title title__small title__footer"},r.a.createElement("span",{className:"rectangle rectangle__red"}),"Follow us"),r.a.createElement("div",{className:"footer-nav footer-nav__social"},r.a.createElement(M.a,{className:"list"},r.a.createElement(o.a,{className:"list-item"},r.a.createElement(l.a,{to:"/",className:"list-link"},r.a.createElement("img",{src:g.a,alt:"facebook"}))),r.a.createElement(o.a,{className:"list-item"},r.a.createElement(l.a,{to:"/",className:"list-link"},r.a.createElement("img",{src:I.a,alt:"twitter"}))),r.a.createElement(o.a,{className:"list-item"},r.a.createElement(l.a,{to:"/",className:"list-link"},r.a.createElement("img",{src:m.a,alt:"google"}))),r.a.createElement(o.a,{className:"list-item"},r.a.createElement(l.a,{to:"/",className:"list-link"},r.a.createElement("img",{src:d.a,alt:"instagram"}))),r.a.createElement(o.a,{className:"list-item"},r.a.createElement(l.a,{to:"/",className:"list-link"},r.a.createElement("img",{src:E.a,alt:"youtube"})))))))),r.a.createElement("div",{className:"footer-bottom"},r.a.createElement(s.a,null,r.a.createElement(u.a,{md:12},r.a.createElement("div",{className:"service-policy"},r.a.createElement(l.a,{to:"/terms_of%20service",className:"link service"},"Terms of Service"),r.a.createElement(l.a,{to:"/privacy_policy",className:"link policy"},"Privacy Policy")),r.a.createElement("div",{className:"copyright"},"Copyright © 2018 Lorem Ipsum, Inc. abc System, Inc. All Rights Reserved.")))))))},data:n})}},165:function(e){e.exports={data:{sporttalk:{pages:[{id:"1",title:"contact us",in_footer:!0},{id:"2",title:"FAQ",in_footer:!0},{id:"3",title:"About Us",in_footer:!0},{id:"5",title:"Privacy Policy",in_footer:null},{id:"4",title:"Terms of Service",in_footer:null}]}}}},166:function(e,a){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAgMCAxMiAyMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTEuNDQ4NCAwLjUwMDMwNUw4LjY3ODA4IDAuNDk1NzI4QzUuNTY1NzMgMC40OTU3MjggMy41NTQzOCAyLjYyMDgyIDMuNTU0MzggNS45MDk5NlY4LjQwNjI4SDAuNzY4OTQ5QzAuNTI4MjU1IDguNDA2MjggMC4zMzMzNDQgOC42MDcyMyAwLjMzMzM0NCA4Ljg1NTFWMTIuNDcyQzAuMzMzMzQ0IDEyLjcxOTkgMC41Mjg0NzcgMTIuOTIwNiAwLjc2ODk0OSAxMi45MjA2SDMuNTU0MzhWMjIuMDQ3MUMzLjU1NDM4IDIyLjI5NSAzLjc0OTI5IDIyLjQ5NTcgMy45ODk5OSAyMi40OTU3SDcuNjI0MTlDNy44NjQ4OCAyMi40OTU3IDguMDU5NzkgMjIuMjk0OCA4LjA1OTc5IDIyLjA0NzFWMTIuOTIwNkgxMS4zMTY2QzExLjU1NzMgMTIuOTIwNiAxMS43NTIyIDEyLjcxOTkgMTEuNzUyMiAxMi40NzJMMTEuNzUzNiA4Ljg1NTFDMTEuNzUzNiA4LjczNjA5IDExLjcwNzUgOC42MjIxMSAxMS42MjYgOC41Mzc4OEMxMS41NDQ0IDguNDUzNjYgMTEuNDMzMyA4LjQwNjI4IDExLjMxNzcgOC40MDYyOEg4LjA1OTc5VjYuMjkwMTJDOC4wNTk3OSA1LjI3MyA4LjI5NTE1IDQuNzU2NjYgOS41ODE3NCA0Ljc1NjY2TDExLjQ0OCA0Ljc1NTk4QzExLjY4ODQgNC43NTU5OCAxMS44ODMzIDQuNTU1MDMgMTEuODgzMyA0LjMwNzM5VjAuOTQ4ODk3QzExLjg4MzMgMC43MDE0ODUgMTEuNjg4NyAwLjUwMDc2MyAxMS40NDg0IDAuNTAwMzA1WiIgZmlsbD0iIzEyMTUyMSIvPg0KPC9zdmc+DQo="},167:function(e,a){e.exports="data:image/svg+xml;base64,ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMzIgMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI4IDguMjkyNjRDMjcuMTUzNSA4LjY4MTY5IDI2LjI0NTIgOC45NDU1NCAyNS4yOTA4IDkuMDYzMzNDMjYuMjY1MyA4LjQ1ODEgMjcuMDExMiA3LjQ5ODEzIDI3LjM2NDcgNi4zNTc3NUMyNi40NTA3IDYuOTE4MjMgMjUuNDQxNyA3LjMyNTIxIDI0LjM2NjYgNy41NDU4NEMyMy41MDU3IDYuNTkzMyAyMi4yODEyIDYgMjAuOTIzIDZDMTguMzE3MyA2IDE2LjIwNDYgOC4xOTEyOSAxNi4yMDQ2IDEwLjg5MjRDMTYuMjA0NiAxMS4yNzU1IDE2LjI0NjMgMTEuNjQ5NiAxNi4zMjY4IDEyLjAwNzRDMTIuNDA2IDExLjgwMzIgOC45MjkzNiA5Ljg1NDg4IDYuNjAyNDkgNi44OTQzOEM2LjE5NTc0IDcuNjE1ODggNS45NjQzNSA4LjQ1NjU4IDUuOTY0MzUgOS4zNTRDNS45NjQzNSAxMS4wNTE5IDYuNzk3OTUgMTIuNTUgOC4wNjI3MyAxMy40MjY1QzcuMjg5NDggMTMuMzk5NyA2LjU2MjI0IDEzLjE3OTEgNS45MjU1NiAxMi44MTI0VjEyLjg3MzVDNS45MjU1NiAxNS4yNDM2IDcuNTUyNTIgMTcuMjIxOCA5LjcwOTc4IDE3LjY3MkM5LjMxNDU0IDE3Ljc4MjMgOC44OTc3NSAxNy44NDM0IDguNDY2NTggMTcuODQzNEM4LjE2MTkgMTcuODQzNCA3Ljg2NzI2IDE3LjgxMjEgNy41NzgzNyAxNy43NTI1QzguMTc5MTIgMTkuNjk3OCA5LjkyMTA3IDIxLjExMjQgMTEuOTg0OSAyMS4xNTEyQzEwLjM3MDkgMjIuNDYzIDguMzM1NzkgMjMuMjQyNiA2LjEyNTM1IDIzLjI0MjZDNS43NDQ0OSAyMy4yNDI2IDUuMzY5MzUgMjMuMjE4OCA1IDIzLjE3NTZDNy4wODgzMSAyNC41NjY0IDkuNTY3NTQgMjUuMzc3MyAxMi4yMzIyIDI1LjM3NzNDMjAuOTExNiAyNS4zNzczIDI1LjY1NTkgMTcuOTIwOSAyNS42NTU5IDExLjQ1NDRMMjUuNjQwMSAxMC44MjA5QzI2LjU2NzEgMTAuMTM1MSAyNy4zNjkgOS4yNzM1MSAyOCA4LjI5MjY0WiIgZmlsbD0iIzEyMTUyMSIvPg0KPC9zdmc+DQo="},168:function(e,a){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0yNi45OTk5IDE0Ljc3NzdIMTYuNzMzM1YxOC4xOTk5SDIyLjk5N0MyMi4wNjI2IDIxLjE3NTEgMTkuMjgzNiAyMy4zMzMzIDE1Ljk5OTkgMjMuMzMzM0MxMS45NDk4IDIzLjMzMzMgOC42NjY2NiAyMC4wNDk5IDguNjY2NjYgMTUuOTk5OUM4LjY2NjY2IDExLjk0OTcgMTEuOTQ5OSA4LjY2NjYyIDE1Ljk5OTkgOC42NjY2MkMxOC4wMzk0IDguNjY2NjIgMTkuODg0MSA5LjQ5OTQyIDIxLjIxMzQgMTAuODQzMkwyMy42OTc1IDguMTQzMTJDMjEuNzEzNiA2LjE5OTExIDE4Ljk5NyA1IDE1Ljk5OTkgNUM5LjkyNDg2IDQuOTk5OTQgNSA5LjkyNDgyIDUgMTUuOTk5OUM1IDIyLjA3NSA5LjkyNDg2IDI3IDE2IDI3QzIxLjMyMTYgMjcgMjUuOTgwNyAyMy4yMjA3IDI3IDE4LjJWMTQuNzc3N0wyNi45OTk5IDE0Ljc3NzdWMTQuNzc3N1oiIGZpbGw9ImJsYWNrIi8+DQo8L3N2Zz4NCg=="},169:function(e,a){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNi42MjI5OSAwSDE3LjM3NjdDMjEuMDI4OSAwIDI0LjAwMDEgMi45NzEyMiAyNCA2LjYyMzEzVjE3LjM3NjlDMjQgMjEuMDI4OCAyMS4wMjg5IDI0IDE3LjM3NjcgMjRINi42MjI5OUMyLjk3MTA4IDI0IDAgMjEuMDI4OSAwIDE3LjM3NjlWNi42MjMxM0MwIDIuOTcxMjIgMi45NzEwOCAwIDYuNjIyOTkgMFpNMTcuMzc2OSAyMS44NzA2QzE5Ljg1NDggMjEuODcwNiAyMS44NzA3IDE5Ljg1NDggMjEuODcwNyAxNy4zNzY5SDIxLjg3MDZWNi42MjMxM0MyMS44NzA2IDQuMTQ1MzcgMTkuODU0NiAyLjEyOTQgMTcuMzc2NyAyLjEyOTRINi42MjI5OUM0LjE0NTIyIDIuMTI5NCAyLjEyOTQgNC4xNDUzNyAyLjEyOTQgNi42MjMxM1YxNy4zNzY5QzIuMTI5NCAxOS44NTQ4IDQuMTQ1MjIgMjEuODcwNyA2LjYyMjk5IDIxLjg3MDZIMTcuMzc2OVoiIGZpbGw9ImJsYWNrIi8+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTYgMTIuMDAwMUM2IDguNjkxNjEgOC42OTE1NSA2IDEyIDZDMTUuMzA4NCA2IDE4IDguNjkxNjEgMTggMTIuMDAwMUMxOCAxNS4zMDg1IDE1LjMwODQgMTggMTIgMThDOC42OTE1NSAxOCA2IDE1LjMwODUgNiAxMi4wMDAxWk04LjA2NTk3IDEyQzguMDY1OTcgMTQuMTY5MiA5LjgzMDg5IDE1LjkzMzggMTIuMDAwMSAxNS45MzM4QzE0LjE2OTIgMTUuOTMzOCAxNS45MzQxIDE0LjE2OTIgMTUuOTM0MSAxMkMxNS45MzQxIDkuODMwNjggMTQuMTY5NCA4LjA2NTg4IDEyLjAwMDEgOC4wNjU4OEM5LjgzMDc1IDguMDY1ODggOC4wNjU5NyA5LjgzMDY4IDguMDY1OTcgMTJaIiBmaWxsPSJibGFjayIvPg0KPHBhdGggZD0iTTE4LjUgNEMxOC4xMDU5IDQgMTcuNzE4OCA0LjE1OTU1IDE3LjQ0MDUgNC40MzkwOUMxNy4xNjA4IDQuNzE3MjcgMTcgNS4xMDQ1NSAxNyA1LjVDMTcgNS44OTQyMyAxNy4xNjA5IDYuMjgxMzYgMTcuNDQwNSA2LjU2MDkxQzE3LjcxODYgNi44MzkwOSAxOC4xMDU5IDcgMTguNSA3QzE4Ljg5NTUgNyAxOS4yODE0IDYuODM5MDkgMTkuNTYwOSA2LjU2MDkxQzE5Ljg0MDUgNi4yODEzNiAyMCA1Ljg5NDA5IDIwIDUuNUMyMCA1LjEwNDU1IDE5Ljg0MDUgNC43MTcyNyAxOS41NjA5IDQuNDM5MDlDMTkuMjgyNyA0LjE1OTU1IDE4Ljg5NTUgNCAxOC41IDRaIiBmaWxsPSJibGFjayIvPg0KPC9zdmc+DQo="},170:function(e,a){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAyNCAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTcuNTQ0MSAwQzIwLjU5ODcgMCAyMi4xOTgyIDAuNDIyODA3IDIzLjA2NDUgMS40NTkzM0MyMy45MzQ5IDIuNTAwNDUgMjQgNC4wOTUxMyAyNCA2LjQwOTAzVjEwLjU5MUMyNCAxMy4yNDI2IDIzLjU4NDUgMTQuNzc0MSAyMi42MTA2IDE1LjcxMjJDMjEuNjYxIDE2LjYyNjkgMjAuMTkzMSAxNyAxNy41NDQyIDE3SDYuNDU1NjlDMC45OTg0IDE3IDAgMTQuODQxOCAwIDEwLjU5MVY2LjQwOTAzQzAgNC4yMTQ5IDAgMi42Mjk1NyAwLjg0MTQ3MSAxLjU1MzYyQzEuNzA0NTQgMC40NTAwNzkgMy4zMzExMiAwIDYuNDU1NjkgMEgxNy41NDQxWk0xMC4zNzI5IDExLjcyNjFMMTUuNDA4MSA5LjA3NzRDMTUuNjYzOSA4Ljk0MjkxIDE1LjgyNDEgOC42NzYzNCAxNS44MjM3IDguMzg1NjlDMTUuODIzNCA4LjA5NTI3IDE1LjY2MjUgNy44MjkwOSAxNS40MDYzIDcuNjk1MjJMMTAuMzcxMSA1LjA2MzYzQzEwLjEzMTIgNC45MzgxNyA5Ljg0MzU2IDQuOTQ3ODMgOS42MTIzMSA1LjA4OTE4QzkuMzgxMTMgNS4yMzA1NCA5LjI0MDA4IDUuNDgzIDkuMjQwMDggNS43NTUxMVYxMS4wMzU0QzkuMjQwMDggMTEuMzA4IDkuMzgxNTIgMTEuNTYwNyA5LjYxMzE2IDExLjcwMkM5LjczNjE4IDExLjc3NjkgOS44NzUwNyAxMS44MTQ3IDEwLjAxNDMgMTEuODE0N0MxMC4xMzcyIDExLjgxNDcgMTAuMjYwMyAxMS43ODUzIDEwLjM3MjkgMTEuNzI2MVoiIGZpbGw9ImJsYWNrIi8+DQo8L3N2Zz4NCg=="},171:function(e,a,t){"use strict";var n=t(153),c=t(154),r=t(174),l=t.n(r),i=t(0),s=t.n(i),M=t(4),o=t.n(M),u=t(155),N=t.n(u),g=t(156),j=o.a.oneOfType([o.a.number,o.a.string]),I=o.a.oneOfType([o.a.bool,o.a.number,o.a.string,o.a.shape({size:o.a.oneOfType([o.a.bool,o.a.number,o.a.string]),order:j,offset:j})]),D={tag:g.b,xs:I,sm:I,md:I,lg:I,xl:I,className:o.a.string,cssModule:o.a.object,widths:o.a.array},m={tag:"div",widths:["xs","sm","md","lg","xl"]},y=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},d=function(e){var a=e.className,t=e.cssModule,r=e.widths,i=e.tag,M=Object(c.a)(e,["className","cssModule","widths","tag"]),o=[];r.forEach(function(a,n){var c=e[a];if(delete M[a],c||""===c){var r=!n;if(l()(c)){var i,s=r?"-":"-"+a+"-",u=y(r,a,c.size);o.push(Object(g.a)(N()(((i={})[u]=c.size||""===c.size,i["order"+s+c.order]=c.order||0===c.order,i["offset"+s+c.offset]=c.offset||0===c.offset,i)),t))}else{var j=y(r,a,c);o.push(j)}}}),o.length||o.push("col");var u=Object(g.a)(N()(a,o),t);return s.a.createElement(i,Object(n.a)({},M,{className:u}))};d.propTypes=D,d.defaultProps=m,a.a=d},172:function(e,a,t){"use strict";var n=t(152),c=t(4),r=t.n(c),l=(t(157),t(0)),i=t.n(l),s=t(183),M=t(159),o=function(){var e={message:"",login:!0};return Object(M.c)()?e.message="Hello, "+Object(M.a)().name:e.message="You are not logged in",i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"header-top-right",style:{display:"flex",alignItems:"center"}},i.a.createElement("div",{className:"search d-none d-md-block"},i.a.createElement(s.a,null,i.a.createElement("input",{type:"search",className:"header-search",placeholder:"Search"}),i.a.createElement("input",{type:"submit",className:"search-icon",value:""}))),i.a.createElement("div",{className:"user-login d-none d-md-block"},Object(M.c)()?i.a.createElement(i.a.Fragment,null,i.a.createElement(n.a,{to:"/user/profile"},"Profile"),i.a.createElement("a",{href:"/",onClick:function(e){e.preventDefault(),Object(M.d)(function(){return Object(n.c)("/")})}},"Logout")):i.a.createElement(i.a.Fragment,null,i.a.createElement(n.a,{activeClassName:"nav-active",className:"user-login-item sign-in",to:"/user/login"},"Sign in"),i.a.createElement(n.a,{activeClassName:"nav-active",className:"user-login-item register",to:"/user/login"},"Register")))))},u=(t(175),t(163)),N=t(180),g=t(161),j=function(){return i.a.createElement(n.b,{query:"1515509770",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("nav",{style:{display:"flex",alignItems:"center",justifyContent:"center"},className:"header-nav "},i.a.createElement("ul",{style:{display:"flex",alignItems:"center"},className:"nav-list"},e.sporttalk.leagues.map(function(e,a){return i.a.createElement(N.a,{key:a},i.a.createElement(n.a,{activeClassName:"nav-active",className:"nav-link",to:"/league/"+e.name},i.a.createElement("span",{className:"icon"},i.a.createElement("img",{src:g.a+e.logo.url,alt:"logo item"})),i.a.createElement("span",{className:"text"},e.name)))}))))},data:u})},I=function(e){e.siteTitle;return i.a.createElement(i.a.Fragment,null,i.a.createElement("header",{className:"header"},i.a.createElement("div",{className:"header-top",style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},i.a.createElement("div",{className:"header-top-left ",style:{display:"flex",alignItems:"center"}},i.a.createElement("div",{className:"burger"},i.a.createElement(n.a,{to:"/",className:"burger-btn"},i.a.createElement("span",{className:"burger-line"}),i.a.createElement("span",{className:"burger-line"}),i.a.createElement("span",{className:"burger-line"}))),i.a.createElement("div",{className:"logo"},i.a.createElement(n.a,{className:"logo-item",to:"/"},"Sports",i.a.createElement("span",{className:"color-red"},"Talk"))),i.a.createElement("div",{className:"serch-icon-mobile d-md-none",style:{display:"block"}},i.a.createElement("input",{type:"submit",className:"search-icon",value:""}))),i.a.createElement(o,null)),i.a.createElement(j,null)))};I.propTypes={siteTitle:r.a.string},I.defaultProps={siteTitle:"cvbcvbcv"};a.a=I},173:function(e,a,t){(function(a){var t="[object AsyncFunction]",n="[object Function]",c="[object GeneratorFunction]",r="[object Null]",l="[object Proxy]",i="[object Undefined]",s="object"==typeof a&&a&&a.Object===Object&&a,M="object"==typeof self&&self&&self.Object===Object&&self,o=s||M||Function("return this")(),u=Object.prototype,N=u.hasOwnProperty,g=u.toString,j=o.Symbol,I=j?j.toStringTag:void 0;function D(e){return null==e?void 0===e?i:r:I&&I in Object(e)?function(e){var a=N.call(e,I),t=e[I];try{e[I]=void 0;var n=!0}catch(r){}var c=g.call(e);n&&(a?e[I]=t:delete e[I]);return c}(e):function(e){return g.call(e)}(e)}e.exports=function(e){if(!function(e){var a=typeof e;return null!=e&&("object"==a||"function"==a)}(e))return!1;var a=D(e);return a==n||a==c||a==t||a==l}}).call(this,t(75))},174:function(e,a){e.exports=function(e){var a=typeof e;return!!e&&("object"==a||"function"==a)}},177:function(e,a,t){"use strict";var n=t(153),c=t(154),r=t(0),l=t.n(r),i=t(4),s=t.n(i),M=t(155),o=t.n(M),u=t(156),N={tag:u.b,fluid:s.a.bool,className:s.a.string,cssModule:s.a.object},g=function(e){var a=e.className,t=e.cssModule,r=e.fluid,i=e.tag,s=Object(c.a)(e,["className","cssModule","fluid","tag"]),M=Object(u.a)(o()(a,r?"container-fluid":"container"),t);return l.a.createElement(i,Object(n.a)({},s,{className:M}))};g.propTypes=N,g.defaultProps={tag:"div"},a.a=g},180:function(e,a,t){"use strict";var n=t(153),c=t(154),r=t(0),l=t.n(r),i=t(4),s=t.n(i),M=t(155),o=t.n(M),u=t(156),N={tag:u.b,active:s.a.bool,className:s.a.string,cssModule:s.a.object},g=function(e){var a=e.className,t=e.cssModule,r=e.active,i=e.tag,s=Object(c.a)(e,["className","cssModule","active","tag"]),M=Object(u.a)(o()(a,"nav-item",!!r&&"active"),t);return l.a.createElement(i,Object(n.a)({},s,{className:M}))};g.propTypes=N,g.defaultProps={tag:"li"},a.a=g},181:function(e,a,t){"use strict";var n=t(153),c=t(154),r=t(0),l=t.n(r),i=t(4),s=t.n(i),M=t(155),o=t.n(M),u=t(156),N={tag:u.b,noGutters:s.a.bool,className:s.a.string,cssModule:s.a.object,form:s.a.bool},g=function(e){var a=e.className,t=e.cssModule,r=e.noGutters,i=e.tag,s=e.form,M=Object(c.a)(e,["className","cssModule","noGutters","tag","form"]),N=Object(u.a)(o()(a,r?"no-gutters":null,s?"form-row":"row"),t);return l.a.createElement(i,Object(n.a)({},M,{className:N}))};g.propTypes=N,g.defaultProps={tag:"div"},a.a=g},182:function(e,a,t){"use strict";var n=t(153),c=t(154),r=t(0),l=t.n(r),i=t(4),s=t.n(i),M=t(155),o=t.n(M),u=t(156),N={tabs:s.a.bool,pills:s.a.bool,vertical:s.a.oneOfType([s.a.bool,s.a.string]),horizontal:s.a.string,justified:s.a.bool,fill:s.a.bool,navbar:s.a.bool,card:s.a.bool,tag:u.b,className:s.a.string,cssModule:s.a.object},g=function(e){var a=e.className,t=e.cssModule,r=e.tabs,i=e.pills,s=e.vertical,M=e.horizontal,N=e.justified,g=e.fill,j=e.navbar,I=e.card,D=e.tag,m=Object(c.a)(e,["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"]),y=Object(u.a)(o()(a,j?"navbar-nav":"nav",!!M&&"justify-content-"+M,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(s),{"nav-tabs":r,"card-header-tabs":I&&r,"nav-pills":i,"card-header-pills":I&&i,"nav-justified":N,"nav-fill":g}),t);return l.a.createElement(D,Object(n.a)({},m,{className:y}))};g.propTypes=N,g.defaultProps={tag:"ul",vertical:!1},a.a=g},183:function(e,a,t){"use strict";var n=t(153),c=t(154);function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var l=t(0),i=t.n(l),s=t(4),M=t.n(s),o=t(155),u=t.n(o),N=t(156),g={children:M.a.node,inline:M.a.bool,tag:N.b,innerRef:M.a.oneOfType([M.a.object,M.a.func,M.a.string]),className:M.a.string,cssModule:M.a.object},j=function(e){var a,t;function l(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(r(t)),t.submit=t.submit.bind(r(t)),t}t=e,(a=l).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t;var s=l.prototype;return s.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},s.submit=function(){this.ref&&this.ref.submit()},s.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.inline,l=e.tag,s=e.innerRef,M=Object(c.a)(e,["className","cssModule","inline","tag","innerRef"]),o=Object(N.a)(u()(a,!!r&&"form-inline"),t);return i.a.createElement(l,Object(n.a)({},M,{ref:s,className:o}))},l}(l.Component);j.propTypes=g,j.defaultProps={tag:"form"};a.a=j}}]);
//# sourceMappingURL=component---src-templates-page-js-417d23034d665700f71f.js.map