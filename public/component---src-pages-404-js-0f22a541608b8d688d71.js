(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{148:function(e,a,t){"use strict";t.r(a);var M=t(0),n=t.n(M),c=t(180),N=t(188);a.default=function(){return n.a.createElement(c.a,null,n.a.createElement(N.a,{title:"404: Not found"}),n.a.createElement("h1",null,"NOT FOUND"),n.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},152:function(e,a,t){"use strict";t.d(a,"b",function(){return g});var M=t(0),n=t.n(M),c=t(4),N=t.n(c),l=t(33),i=t.n(l);t.d(a,"a",function(){return i.a}),t.d(a,"c",function(){return l.navigate});t(160);var r=n.a.createContext({}),g=function(e){return n.a.createElement(r.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};g.propTypes={data:N.a.object,query:N.a.string.isRequired,render:N.a.func,children:N.a.func}},159:function(e,a,t){"use strict";t.d(a,"a",function(){return M}),t.d(a,"b",function(){return c}),t.d(a,"c",function(){return N}),t.d(a,"d",function(){return l});var M=function(){return"undefined"!=typeof window&&window.localStorage.getItem("gatsbyUser")?JSON.parse(window.localStorage.getItem("gatsbyUser")):{}},n=function(e){return window.localStorage.setItem("gatsbyUser",JSON.stringify(e))},c=function(e){var a=e.username,t=e.password;return"john"===a&&"pass"===t&&n({username:"john",name:"Johnny",email:"johnny@example.org"})},N=function(){return!!M().username},l=function(e){n({}),e()}},160:function(e,a,t){var M;e.exports=(M=t(164))&&M.default||M},161:function(e,a,t){"use strict";t.d(a,"a",function(){return M});var M=""},164:function(e,a,t){"use strict";t.r(a);t(34);var M=t(0),n=t.n(M),c=t(4),N=t.n(c),l=t(55),i=t(2),r=function(e){var a=e.location,t=i.default.getResourcesForPathnameSync(a.pathname);return t?n.a.createElement(l.a,Object.assign({location:a,pageResources:t},t.json)):null};r.propTypes={location:N.a.shape({pathname:N.a.string.isRequired}).isRequired},a.default=r},165:function(e){e.exports={data:{sporttalk:{leagues:[{id:"1",name:"NFL",club:null,logo:{url:"/uploads/5d2e13f921d749aaabd992f3f49d3bc9.png"}},{id:"2",name:"NBA",club:null,logo:{url:"/uploads/80c94e24a9c94c72827a1ed5acd95e66.png"}},{id:"3",name:"NHL",club:null,logo:{url:"/uploads/bcfa5c39853f421d86daf0b9a60ad4a1.png"}},{id:"4",name:"MLB",club:null,logo:{url:"/uploads/de661f5bf2364edfb6aa90fbcb0c294a.png"}},{id:"5",name:"Warriors",club:null,logo:{url:"/uploads/affbfdd6f090421583ca3c51ef43c93c.png"}},{id:"6",name:"Stanford",club:null,logo:{url:"/uploads/bf7f51a4f21a44b8bef4f31ab45e9c67.png"}}]}}}},166:function(e,a,t){"use strict";t(35);var M=t(167),n=t(0),c=t.n(n),N=t(152),l=t(179),i=t(183),r=t(184),g=t(182),u=t(163),s=t(168),I=t.n(s),j=t(169),D=t.n(j),o=t(170),m=t.n(o),y=t(171),E=t.n(y),T=t(172),A=t.n(T);t(178);a.a=function(){return c.a.createElement(N.b,{query:"3579751786",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("footer",{className:"footer"},c.a.createElement(l.a,null,c.a.createElement("div",{className:"footer-top"},c.a.createElement(i.a,null,c.a.createElement(u.a,{md:6},c.a.createElement("div",{className:"logo"},c.a.createElement(N.a,{to:"/",className:"logo-item"},"Sports",c.a.createElement("span",{className:"color-red"},"Talk"))),c.a.createElement("div",{className:"footer-nav"},c.a.createElement(r.a,{className:"list"},e.sporttalk.pages.map(function(e,a){return!0===e.in_footer?c.a.createElement(g.a,{key:a,className:"list-item"},c.a.createElement(N.a,{partiallyActive:!0,activeClassName:"nav-active",className:"nav-link",to:"/"+e.title.toLowerCase().replace(" ","_"),style:{padding:0}},e.title)):""})))),c.a.createElement(u.a,{md:6},c.a.createElement("div",{className:"title title__small title__footer"},c.a.createElement("span",{className:"rectangle rectangle__red"}),"Follow us"),c.a.createElement("div",{className:"footer-nav footer-nav__social"},c.a.createElement(r.a,{className:"list"},c.a.createElement(g.a,{className:"list-item"},c.a.createElement(N.a,{to:"/",className:"list-link"},c.a.createElement("img",{src:I.a,alt:"facebook"}))),c.a.createElement(g.a,{className:"list-item"},c.a.createElement(N.a,{to:"/",className:"list-link"},c.a.createElement("img",{src:D.a,alt:"twitter"}))),c.a.createElement(g.a,{className:"list-item"},c.a.createElement(N.a,{to:"/",className:"list-link"},c.a.createElement("img",{src:m.a,alt:"google"}))),c.a.createElement(g.a,{className:"list-item"},c.a.createElement(N.a,{to:"/",className:"list-link"},c.a.createElement("img",{src:E.a,alt:"instagram"}))),c.a.createElement(g.a,{className:"list-item"},c.a.createElement(N.a,{to:"/",className:"list-link"},c.a.createElement("img",{src:A.a,alt:"youtube"})))))))),c.a.createElement("div",{className:"footer-bottom"},c.a.createElement(i.a,null,c.a.createElement(u.a,{md:12},c.a.createElement("div",{className:"service-policy"},c.a.createElement(N.a,{to:"/terms_of%20service",className:"link service"},"Terms of Service"),c.a.createElement(N.a,{to:"/privacy_policy",className:"link policy"},"Privacy Policy")),c.a.createElement("div",{className:"copyright"},"Copyright © 2018 Lorem Ipsum, Inc. abc System, Inc. All Rights Reserved.")))))))},data:M})}},167:function(e){e.exports={data:{sporttalk:{pages:[{id:"1",title:"contact us",in_footer:!0},{id:"2",title:"FAQ",in_footer:!0},{id:"3",title:"About Us",in_footer:!0},{id:"5",title:"Privacy Policy",in_footer:null},{id:"4",title:"Terms of Service",in_footer:null}]}}}},168:function(e,a){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAgMCAxMiAyMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTEuNDQ4NCAwLjUwMDMwNUw4LjY3ODA4IDAuNDk1NzI4QzUuNTY1NzMgMC40OTU3MjggMy41NTQzOCAyLjYyMDgyIDMuNTU0MzggNS45MDk5NlY4LjQwNjI4SDAuNzY4OTQ5QzAuNTI4MjU1IDguNDA2MjggMC4zMzMzNDQgOC42MDcyMyAwLjMzMzM0NCA4Ljg1NTFWMTIuNDcyQzAuMzMzMzQ0IDEyLjcxOTkgMC41Mjg0NzcgMTIuOTIwNiAwLjc2ODk0OSAxMi45MjA2SDMuNTU0MzhWMjIuMDQ3MUMzLjU1NDM4IDIyLjI5NSAzLjc0OTI5IDIyLjQ5NTcgMy45ODk5OSAyMi40OTU3SDcuNjI0MTlDNy44NjQ4OCAyMi40OTU3IDguMDU5NzkgMjIuMjk0OCA4LjA1OTc5IDIyLjA0NzFWMTIuOTIwNkgxMS4zMTY2QzExLjU1NzMgMTIuOTIwNiAxMS43NTIyIDEyLjcxOTkgMTEuNzUyMiAxMi40NzJMMTEuNzUzNiA4Ljg1NTFDMTEuNzUzNiA4LjczNjA5IDExLjcwNzUgOC42MjIxMSAxMS42MjYgOC41Mzc4OEMxMS41NDQ0IDguNDUzNjYgMTEuNDMzMyA4LjQwNjI4IDExLjMxNzcgOC40MDYyOEg4LjA1OTc5VjYuMjkwMTJDOC4wNTk3OSA1LjI3MyA4LjI5NTE1IDQuNzU2NjYgOS41ODE3NCA0Ljc1NjY2TDExLjQ0OCA0Ljc1NTk4QzExLjY4ODQgNC43NTU5OCAxMS44ODMzIDQuNTU1MDMgMTEuODgzMyA0LjMwNzM5VjAuOTQ4ODk3QzExLjg4MzMgMC43MDE0ODUgMTEuNjg4NyAwLjUwMDc2MyAxMS40NDg0IDAuNTAwMzA1WiIgZmlsbD0iIzEyMTUyMSIvPg0KPC9zdmc+DQo="},169:function(e,a){e.exports="data:image/svg+xml;base64,ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMzIgMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI4IDguMjkyNjRDMjcuMTUzNSA4LjY4MTY5IDI2LjI0NTIgOC45NDU1NCAyNS4yOTA4IDkuMDYzMzNDMjYuMjY1MyA4LjQ1ODEgMjcuMDExMiA3LjQ5ODEzIDI3LjM2NDcgNi4zNTc3NUMyNi40NTA3IDYuOTE4MjMgMjUuNDQxNyA3LjMyNTIxIDI0LjM2NjYgNy41NDU4NEMyMy41MDU3IDYuNTkzMyAyMi4yODEyIDYgMjAuOTIzIDZDMTguMzE3MyA2IDE2LjIwNDYgOC4xOTEyOSAxNi4yMDQ2IDEwLjg5MjRDMTYuMjA0NiAxMS4yNzU1IDE2LjI0NjMgMTEuNjQ5NiAxNi4zMjY4IDEyLjAwNzRDMTIuNDA2IDExLjgwMzIgOC45MjkzNiA5Ljg1NDg4IDYuNjAyNDkgNi44OTQzOEM2LjE5NTc0IDcuNjE1ODggNS45NjQzNSA4LjQ1NjU4IDUuOTY0MzUgOS4zNTRDNS45NjQzNSAxMS4wNTE5IDYuNzk3OTUgMTIuNTUgOC4wNjI3MyAxMy40MjY1QzcuMjg5NDggMTMuMzk5NyA2LjU2MjI0IDEzLjE3OTEgNS45MjU1NiAxMi44MTI0VjEyLjg3MzVDNS45MjU1NiAxNS4yNDM2IDcuNTUyNTIgMTcuMjIxOCA5LjcwOTc4IDE3LjY3MkM5LjMxNDU0IDE3Ljc4MjMgOC44OTc3NSAxNy44NDM0IDguNDY2NTggMTcuODQzNEM4LjE2MTkgMTcuODQzNCA3Ljg2NzI2IDE3LjgxMjEgNy41NzgzNyAxNy43NTI1QzguMTc5MTIgMTkuNjk3OCA5LjkyMTA3IDIxLjExMjQgMTEuOTg0OSAyMS4xNTEyQzEwLjM3MDkgMjIuNDYzIDguMzM1NzkgMjMuMjQyNiA2LjEyNTM1IDIzLjI0MjZDNS43NDQ0OSAyMy4yNDI2IDUuMzY5MzUgMjMuMjE4OCA1IDIzLjE3NTZDNy4wODgzMSAyNC41NjY0IDkuNTY3NTQgMjUuMzc3MyAxMi4yMzIyIDI1LjM3NzNDMjAuOTExNiAyNS4zNzczIDI1LjY1NTkgMTcuOTIwOSAyNS42NTU5IDExLjQ1NDRMMjUuNjQwMSAxMC44MjA5QzI2LjU2NzEgMTAuMTM1MSAyNy4zNjkgOS4yNzM1MSAyOCA4LjI5MjY0WiIgZmlsbD0iIzEyMTUyMSIvPg0KPC9zdmc+DQo="},170:function(e,a){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0yNi45OTk5IDE0Ljc3NzdIMTYuNzMzM1YxOC4xOTk5SDIyLjk5N0MyMi4wNjI2IDIxLjE3NTEgMTkuMjgzNiAyMy4zMzMzIDE1Ljk5OTkgMjMuMzMzM0MxMS45NDk4IDIzLjMzMzMgOC42NjY2NiAyMC4wNDk5IDguNjY2NjYgMTUuOTk5OUM4LjY2NjY2IDExLjk0OTcgMTEuOTQ5OSA4LjY2NjYyIDE1Ljk5OTkgOC42NjY2MkMxOC4wMzk0IDguNjY2NjIgMTkuODg0MSA5LjQ5OTQyIDIxLjIxMzQgMTAuODQzMkwyMy42OTc1IDguMTQzMTJDMjEuNzEzNiA2LjE5OTExIDE4Ljk5NyA1IDE1Ljk5OTkgNUM5LjkyNDg2IDQuOTk5OTQgNSA5LjkyNDgyIDUgMTUuOTk5OUM1IDIyLjA3NSA5LjkyNDg2IDI3IDE2IDI3QzIxLjMyMTYgMjcgMjUuOTgwNyAyMy4yMjA3IDI3IDE4LjJWMTQuNzc3N0wyNi45OTk5IDE0Ljc3NzdWMTQuNzc3N1oiIGZpbGw9ImJsYWNrIi8+DQo8L3N2Zz4NCg=="},171:function(e,a){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNi42MjI5OSAwSDE3LjM3NjdDMjEuMDI4OSAwIDI0LjAwMDEgMi45NzEyMiAyNCA2LjYyMzEzVjE3LjM3NjlDMjQgMjEuMDI4OCAyMS4wMjg5IDI0IDE3LjM3NjcgMjRINi42MjI5OUMyLjk3MTA4IDI0IDAgMjEuMDI4OSAwIDE3LjM3NjlWNi42MjMxM0MwIDIuOTcxMjIgMi45NzEwOCAwIDYuNjIyOTkgMFpNMTcuMzc2OSAyMS44NzA2QzE5Ljg1NDggMjEuODcwNiAyMS44NzA3IDE5Ljg1NDggMjEuODcwNyAxNy4zNzY5SDIxLjg3MDZWNi42MjMxM0MyMS44NzA2IDQuMTQ1MzcgMTkuODU0NiAyLjEyOTQgMTcuMzc2NyAyLjEyOTRINi42MjI5OUM0LjE0NTIyIDIuMTI5NCAyLjEyOTQgNC4xNDUzNyAyLjEyOTQgNi42MjMxM1YxNy4zNzY5QzIuMTI5NCAxOS44NTQ4IDQuMTQ1MjIgMjEuODcwNyA2LjYyMjk5IDIxLjg3MDZIMTcuMzc2OVoiIGZpbGw9ImJsYWNrIi8+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTYgMTIuMDAwMUM2IDguNjkxNjEgOC42OTE1NSA2IDEyIDZDMTUuMzA4NCA2IDE4IDguNjkxNjEgMTggMTIuMDAwMUMxOCAxNS4zMDg1IDE1LjMwODQgMTggMTIgMThDOC42OTE1NSAxOCA2IDE1LjMwODUgNiAxMi4wMDAxWk04LjA2NTk3IDEyQzguMDY1OTcgMTQuMTY5MiA5LjgzMDg5IDE1LjkzMzggMTIuMDAwMSAxNS45MzM4QzE0LjE2OTIgMTUuOTMzOCAxNS45MzQxIDE0LjE2OTIgMTUuOTM0MSAxMkMxNS45MzQxIDkuODMwNjggMTQuMTY5NCA4LjA2NTg4IDEyLjAwMDEgOC4wNjU4OEM5LjgzMDc1IDguMDY1ODggOC4wNjU5NyA5LjgzMDY4IDguMDY1OTcgMTJaIiBmaWxsPSJibGFjayIvPg0KPHBhdGggZD0iTTE4LjUgNEMxOC4xMDU5IDQgMTcuNzE4OCA0LjE1OTU1IDE3LjQ0MDUgNC40MzkwOUMxNy4xNjA4IDQuNzE3MjcgMTcgNS4xMDQ1NSAxNyA1LjVDMTcgNS44OTQyMyAxNy4xNjA5IDYuMjgxMzYgMTcuNDQwNSA2LjU2MDkxQzE3LjcxODYgNi44MzkwOSAxOC4xMDU5IDcgMTguNSA3QzE4Ljg5NTUgNyAxOS4yODE0IDYuODM5MDkgMTkuNTYwOSA2LjU2MDkxQzE5Ljg0MDUgNi4yODEzNiAyMCA1Ljg5NDA5IDIwIDUuNUMyMCA1LjEwNDU1IDE5Ljg0MDUgNC43MTcyNyAxOS41NjA5IDQuNDM5MDlDMTkuMjgyNyA0LjE1OTU1IDE4Ljg5NTUgNCAxOC41IDRaIiBmaWxsPSJibGFjayIvPg0KPC9zdmc+DQo="},172:function(e,a){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAyNCAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTcuNTQ0MSAwQzIwLjU5ODcgMCAyMi4xOTgyIDAuNDIyODA3IDIzLjA2NDUgMS40NTkzM0MyMy45MzQ5IDIuNTAwNDUgMjQgNC4wOTUxMyAyNCA2LjQwOTAzVjEwLjU5MUMyNCAxMy4yNDI2IDIzLjU4NDUgMTQuNzc0MSAyMi42MTA2IDE1LjcxMjJDMjEuNjYxIDE2LjYyNjkgMjAuMTkzMSAxNyAxNy41NDQyIDE3SDYuNDU1NjlDMC45OTg0IDE3IDAgMTQuODQxOCAwIDEwLjU5MVY2LjQwOTAzQzAgNC4yMTQ5IDAgMi42Mjk1NyAwLjg0MTQ3MSAxLjU1MzYyQzEuNzA0NTQgMC40NTAwNzkgMy4zMzExMiAwIDYuNDU1NjkgMEgxNy41NDQxWk0xMC4zNzI5IDExLjcyNjFMMTUuNDA4MSA5LjA3NzRDMTUuNjYzOSA4Ljk0MjkxIDE1LjgyNDEgOC42NzYzNCAxNS44MjM3IDguMzg1NjlDMTUuODIzNCA4LjA5NTI3IDE1LjY2MjUgNy44MjkwOSAxNS40MDYzIDcuNjk1MjJMMTAuMzcxMSA1LjA2MzYzQzEwLjEzMTIgNC45MzgxNyA5Ljg0MzU2IDQuOTQ3ODMgOS42MTIzMSA1LjA4OTE4QzkuMzgxMTMgNS4yMzA1NCA5LjI0MDA4IDUuNDgzIDkuMjQwMDggNS43NTUxMVYxMS4wMzU0QzkuMjQwMDggMTEuMzA4IDkuMzgxNTIgMTEuNTYwNyA5LjYxMzE2IDExLjcwMkM5LjczNjE4IDExLjc3NjkgOS44NzUwNyAxMS44MTQ3IDEwLjAxNDMgMTEuODE0N0MxMC4xMzcyIDExLjgxNDcgMTAuMjYwMyAxMS43ODUzIDEwLjM3MjkgMTEuNzI2MVoiIGZpbGw9ImJsYWNrIi8+DQo8L3N2Zz4NCg=="},173:function(e,a,t){"use strict";var M=t(152),n=t(4),c=t.n(n),N=(t(157),t(0)),l=t.n(N),i=t(186),r=t(159),g=function(){var e={message:"",login:!0};return Object(r.c)()?e.message="Hello, "+Object(r.a)().name:e.message="You are not logged in",l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"header-top-right",style:{display:"flex",alignItems:"center"}},l.a.createElement("div",{className:"search d-none d-md-block"},l.a.createElement(i.a,null,l.a.createElement("input",{type:"search",className:"header-search",placeholder:"Search"}),l.a.createElement("input",{type:"submit",className:"search-icon",value:""}))),l.a.createElement("div",{className:"user-login d-none d-md-block"},Object(r.c)()?l.a.createElement(l.a.Fragment,null,l.a.createElement(M.a,{to:"/user/profile"},"Profile"),l.a.createElement("a",{href:"/",onClick:function(e){e.preventDefault(),Object(r.d)(function(){return Object(M.c)("/")})}},"Logout")):l.a.createElement(l.a.Fragment,null,l.a.createElement(M.a,{activeClassName:"nav-active",className:"user-login-item sign-in",to:"/user/login"},"Sign in"),l.a.createElement(M.a,{activeClassName:"nav-active",className:"user-login-item register",to:"/user/login"},"Register")))))},u=(t(177),t(165)),s=t(182),I=t(161),j=function(){return l.a.createElement(M.b,{query:"1515509770",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{style:{display:"flex",alignItems:"center",justifyContent:"center"},className:"header-nav "},l.a.createElement("ul",{style:{display:"flex",alignItems:"center"},className:"nav-list"},e.sporttalk.leagues.map(function(e,a){return l.a.createElement(s.a,{key:a},l.a.createElement(M.a,{activeClassName:"nav-active",className:"nav-link",to:"/league/"+e.name},l.a.createElement("span",{className:"icon"},l.a.createElement("img",{src:I.a+e.logo.url,alt:"logo item"})),l.a.createElement("span",{className:"text"},e.name)))}))))},data:u})},D=function(e){e.siteTitle;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:"header"},l.a.createElement("div",{className:"header-top",style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},l.a.createElement("div",{className:"header-top-left ",style:{display:"flex",alignItems:"center"}},l.a.createElement("div",{className:"burger"},l.a.createElement(M.a,{to:"/",className:"burger-btn"},l.a.createElement("span",{className:"burger-line"}),l.a.createElement("span",{className:"burger-line"}),l.a.createElement("span",{className:"burger-line"}))),l.a.createElement("div",{className:"logo"},l.a.createElement(M.a,{className:"logo-item",to:"/"},"Sports",l.a.createElement("span",{className:"color-red"},"Talk"))),l.a.createElement("div",{className:"serch-icon-mobile d-md-none",style:{display:"block"}},l.a.createElement("input",{type:"submit",className:"search-icon",value:""}))),l.a.createElement(g,null)),l.a.createElement(j,null)))};D.propTypes={siteTitle:c.a.string},D.defaultProps={siteTitle:"cvbcvbcv"};a.a=D},180:function(e,a,t){"use strict";var M=t(181),n=t(0),c=t.n(n),N=t(4),l=t.n(N),i=t(152),r=t(173),g=t(166),u=(t(187),function(e){var a=e.children;return c.a.createElement(i.b,{query:"755544856",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(r.a,{siteTitle:e.site.siteMetadata.title}),c.a.createElement("main",null,a),c.a.createElement(g.a,null))},data:M})});u.propTypes={children:l.a.node.isRequired},a.a=u},181:function(e){e.exports={data:{site:{siteMetadata:{title:"Sport talk"}}}}},188:function(e,a,t){"use strict";var M=t(189),n=t(0),c=t.n(n),N=t(4),l=t.n(N),i=t(195),r=t.n(i);function g(e){var a=e.description,t=e.lang,n=e.meta,N=e.keywords,l=e.title,i=M.data.site,g=a||i.siteMetadata.description;return c.a.createElement(r.a,{htmlAttributes:{lang:t},title:l,titleTemplate:"%s | "+i.siteMetadata.title,meta:[{name:"description",content:g},{property:"og:title",content:l},{property:"og:description",content:g},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:g}].concat(N.length>0?{name:"keywords",content:N.join(", ")}:[]).concat(n)})}g.defaultProps={lang:"en",meta:[],keywords:[],description:""},g.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},a.a=g},189:function(e){e.exports={data:{site:{siteMetadata:{title:"Sport talk",description:"Sport talk",author:"swat"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-0f22a541608b8d688d71.js.map