(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{150:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(178),i=t(185),c=(t(34),t(197)),r=t(198),m=t.n(r),o=t(152),u=t(189),M=t(201),N=t.n(M),g=(t(202),t(161)),d=t(177),I=function(e){var a=Object(n.useState)(null),t=a[0],s=a[1],i=Object(n.useState)({sliderItem:0,sliderCount:0}),r=i[0],u=i[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,Object.assign({},e.param,{getSwiper:s,modules:e.modules}),l.a.createElement(o.b,{query:"2812912476",render:function(e){return l.a.createElement(l.a.Fragment,null,e.sporttalk.polls.map(function(e,a){return l.a.createElement("div",{key:a,className:"slider-item swiper-slide",style:{backgroundImage:"url("+g.a+e.title_bg.url+")"}},l.a.createElement("div",{className:"wrap-content"},l.a.createElement("div",{className:"container container-h-100"},l.a.createElement("div",{className:"slider-content d-flex flex-column justify-content-end"},l.a.createElement("div",{className:"info"},l.a.createElement("p",{className:"title"},l.a.createElement("span",{className:"rectangle rectangle__red"},"?"),e.title),l.a.createElement("div",{className:"desc d-flex align-items-center"},l.a.createElement("div",{className:"desc-item"},l.a.createElement("span",{className:"number"},"1.2k"),l.a.createElement("span",{className:"text"},"Votes")),l.a.createElement("div",{className:"desc-item"},l.a.createElement("span",{className:"number"},"2.7k"),l.a.createElement("span",{className:"text"},"Repies")),l.a.createElement("div",{className:"desc-item"},l.a.createElement("span",{className:"number"},"512"),l.a.createElement("span",{className:"text"},"Views")))))),l.a.createElement("div",{className:"mask"})))}))},data:c})),l.a.createElement(d.a,{style:{justifyContent:"flex-end",display:"flex"}},l.a.createElement("div",{className:"slider-button d-none d-md-flex align-items-center",style:{position:"absolute",bottom:"0",zIndex:"2",float:"right",minWidth:"288px",minHeight:"96px"}},l.a.createElement("div",{style:{cursor:"pointer"},onClick:function(){null!==t&&(t.slidePrev(),u({sliderItem:t.activeIndex+1,sliderCount:t.slides.length}))},className:"arrow-link arrow-link__left"},l.a.createElement("span",{className:"icon-arrow icon-arrow__left"})),l.a.createElement("span",{className:"count-slide",style:{color:"#ffffff"}},null!==t?t.activeIndex+1:r.sliderItem,"/",null!==t?t.slides.length:r.sliderCount),l.a.createElement("div",{style:{cursor:"pointer"},onClick:function(){null!==t&&(t.slideNext(),u({sliderItem:t.activeIndex+1,sliderCount:t.slides.length}))},className:"arrow-link arrow-link__right"},l.a.createElement("span",{className:"icon-arrow icon-arrow__right"})))))},j=function(){var e={modules:[u.Pagination,u.Navigation],pagination:{el:".swiper-pagination",type:"fraction"},slidesPerView:1,allowTouchMove:!1,containerClass:"slider intro-slider"},a={modules:[u.Pagination],pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},slidesPerView:1,containerClass:"slider intro-slider"};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"intro"},l.a.createElement(N.a,{query:"(min-width: 768px)"},l.a.createElement(I,{param:e,modules:[u.Navigation,u.Pagination]})),l.a.createElement(N.a,{query:"(max-width: 767px)"},l.a.createElement(I,{param:a,modules:[u.Pagination]}))))},E=t(7),D=t.n(E),y=t(203),p=t(181),T=t(171),A=function(e){return l.a.createElement(l.a.Fragment,null,e.data.map(function(e,a){return l.a.createElement(T.a,{key:a,md:0!==a&&6!==a?4:8,className:"marg-b"},0!==a&&6!==a?l.a.createElement("div",{className:"list-item"},l.a.createElement(o.a,{to:"/poll_"+e.id,className:"box-link"},l.a.createElement("div",{className:"img-box"},l.a.createElement("img",{src:g.a+e.title_bg.url,height:200,alt:"img item"}))),l.a.createElement("div",{className:"info"},l.a.createElement(o.a,{to:"/poll_"+e.id,className:"box-link"},l.a.createElement("p",{className:"title"},l.a.createElement("span",{className:"rectangle rectangle__red"},"?"),"Should the Seahawks focus the offense around Russell Wilson instead of the running game?")),l.a.createElement("div",{className:"text"},"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?"),l.a.createElement("div",{className:"desc d-flex align-items-center"},l.a.createElement("div",{className:"desc-item"},l.a.createElement("span",{className:"number"},"1.2k"),l.a.createElement("span",{className:"text"},"Votes")),l.a.createElement("div",{className:"desc-item"},l.a.createElement("span",{className:"number"},"2.7k"),l.a.createElement("span",{className:"text"},"Repies")),l.a.createElement("div",{className:"desc-item"},l.a.createElement("span",{className:"number"},"512"),l.a.createElement("span",{className:"text"},"Views"))))):l.a.createElement(o.a,{to:"/poll_"+e.id,className:"box-link"},l.a.createElement("div",{className:"list-item-main"},l.a.createElement("div",{className:"img-box",style:{backgroundImage:"url("+g.a+e.title_bg.url+")"}},l.a.createElement("div",{className:"mask"})),l.a.createElement("div",{className:"info d-flex flex-column justify-content-end"},l.a.createElement("p",{className:"title"},l.a.createElement("span",{className:"rectangle rectangle__red"},"?"),"Should the Seahawks focus the offense around Russell Wilson instead of the running game?"),l.a.createElement("div",{className:"desc d-flex align-items-center"},l.a.createElement("div",{className:"desc-item"},l.a.createElement("span",{className:"number"},"1.2k"),l.a.createElement("span",{className:"text"},"Votes")),l.a.createElement("div",{className:"desc-item"},l.a.createElement("span",{className:"number"},"2.7k"),l.a.createElement("span",{className:"text"},"Repies")),l.a.createElement("div",{className:"desc-item"},l.a.createElement("span",{className:"number"},"512"),l.a.createElement("span",{className:"text"},"Views")))))))}))},z=function(e){function a(){return e.apply(this,arguments)||this}return D()(a,e),a.prototype.render=function(){var e=this.props.chunk;return l.a.createElement(l.a.Fragment,null,this.props.polls.map(function(a,t){return l.a.createElement(l.a.Fragment,{key:t},t<=e?l.a.createElement(A,{data:a}):"")}))},a}(n.Component),x=(t(204),function(e){function a(a){var t;return(t=e.call(this,a)||this).state={listItem:0,chunk:0},t}D()(a,e);var t=a.prototype;return t.componentWillMount=function(){this.setState({listItem:function e(a,t){if(!a.length)return[];var n=a.slice(0,t),l=a.slice(t);return[n].concat(e(l,t))}(this.props.polls,5)})},t.render=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"content"},l.a.createElement(d.a,null,l.a.createElement("div",{className:"list-news"},l.a.createElement("div",{className:"title-h"},l.a.createElement("span",{className:"color-red"},"Live")," / archived"),l.a.createElement("div",{className:"list-news-content"},l.a.createElement(p.a,null,l.a.createElement(z,{polls:this.state.listItem,chunk:this.state.chunk}))),this.props.polls.length>8?l.a.createElement("div",{className:"btn-wrapp"},l.a.createElement(o.a,{to:"/",className:"button button__general"},l.a.createElement("span",{className:"text"},l.a.createElement("span",{className:"icon"}),"Show more"))):""))))},a}(n.Component)),f=function(){return l.a.createElement(o.b,{query:"286184901",render:function(e){return l.a.createElement(x,{polls:e.sporttalk.polls})},data:y})};a.default=function(){return l.a.createElement(s.a,null,l.a.createElement(i.a,{title:"Home",keywords:["gatsby","application","react"]}),l.a.createElement(j,null),l.a.createElement(f,null))}},152:function(e,a,t){"use strict";t.d(a,"b",function(){return o});var n=t(0),l=t.n(n),s=t(4),i=t.n(s),c=t(33),r=t.n(c);t.d(a,"a",function(){return r.a}),t.d(a,"c",function(){return c.navigate});t(160);var m=l.a.createContext({}),o=function(e){return l.a.createElement(m.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):l.a.createElement("div",null,"Loading (StaticQuery)")})};o.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},159:function(e,a,t){"use strict";t.d(a,"a",function(){return n}),t.d(a,"b",function(){return s}),t.d(a,"c",function(){return i}),t.d(a,"d",function(){return c});var n=function(){return"undefined"!=typeof window&&window.localStorage.getItem("gatsbyUser")?JSON.parse(window.localStorage.getItem("gatsbyUser")):{}},l=function(e){return window.localStorage.setItem("gatsbyUser",JSON.stringify(e))},s=function(e){var a=e.username,t=e.password;return"john"===a&&"pass"===t&&l({username:"john",name:"Johnny",email:"johnny@example.org"})},i=function(){return!!n().username},c=function(e){l({}),e()}},160:function(e,a,t){var n;e.exports=(n=t(162))&&n.default||n},161:function(e,a,t){"use strict";t.d(a,"a",function(){return n});var n="http://localhost:1337"},162:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),l=t.n(n),s=t(4),i=t.n(s),c=t(55),r=t(2),m=function(e){var a=e.location,t=r.default.getResourcesForPathnameSync(a.pathname);return l.a.createElement(c.a,Object.assign({location:a,pageResources:t},t.json))};m.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},a.default=m},163:function(e){e.exports={data:{sporttalk:{leagues:[{id:"1",name:"NFL",club:null,logo:{url:"/uploads/5d2e13f921d749aaabd992f3f49d3bc9.png"}},{id:"2",name:"NBA",club:null,logo:{url:"/uploads/80c94e24a9c94c72827a1ed5acd95e66.png"}},{id:"3",name:"NHL",club:null,logo:{url:"/uploads/bcfa5c39853f421d86daf0b9a60ad4a1.png"}},{id:"4",name:"MLB",club:null,logo:{url:"/uploads/de661f5bf2364edfb6aa90fbcb0c294a.png"}},{id:"5",name:"Warriors",club:null,logo:{url:"/uploads/affbfdd6f090421583ca3c51ef43c93c.png"}},{id:"6",name:"Stanford",club:null,logo:{url:"/uploads/bf7f51a4f21a44b8bef4f31ab45e9c67.png"}}]}}}},164:function(e,a,t){"use strict";t(35);var n=t(165),l=t(0),s=t.n(l),i=t(152),c=t(177),r=t(181),m=t(182),o=t(180),u=t(171),M=t(166),N=t.n(M),g=t(167),d=t.n(g),I=t(168),j=t.n(I),E=t(169),D=t.n(E),y=t(170),p=t.n(y);t(176);a.a=function(){return s.a.createElement(i.b,{query:"3579751786",render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement("footer",{className:"footer"},s.a.createElement(c.a,null,s.a.createElement("div",{className:"footer-top"},s.a.createElement(r.a,null,s.a.createElement(u.a,{md:6},s.a.createElement("div",{className:"logo"},s.a.createElement(i.a,{to:"/",className:"logo-item"},"Sports",s.a.createElement("span",{className:"color-red"},"Talk"))),s.a.createElement("div",{className:"footer-nav"},s.a.createElement(m.a,{className:"list"},e.sporttalk.pages.map(function(e,a){return!0===e.in_footer?s.a.createElement(o.a,{key:a,className:"list-item"},s.a.createElement(i.a,{partiallyActive:!0,activeClassName:"nav-active",className:"nav-link",to:"/"+e.title.toLowerCase().replace(" ","_"),style:{padding:0}},e.title)):""})))),s.a.createElement(u.a,{md:6},s.a.createElement("div",{className:"title title__small title__footer"},s.a.createElement("span",{className:"rectangle rectangle__red"}),"Follow us"),s.a.createElement("div",{className:"footer-nav footer-nav__social"},s.a.createElement(m.a,{className:"list"},s.a.createElement(o.a,{className:"list-item"},s.a.createElement(i.a,{to:"/",className:"list-link"},s.a.createElement("img",{src:N.a,alt:"facebook"}))),s.a.createElement(o.a,{className:"list-item"},s.a.createElement(i.a,{to:"/",className:"list-link"},s.a.createElement("img",{src:d.a,alt:"twitter"}))),s.a.createElement(o.a,{className:"list-item"},s.a.createElement(i.a,{to:"/",className:"list-link"},s.a.createElement("img",{src:j.a,alt:"google"}))),s.a.createElement(o.a,{className:"list-item"},s.a.createElement(i.a,{to:"/",className:"list-link"},s.a.createElement("img",{src:D.a,alt:"instagram"}))),s.a.createElement(o.a,{className:"list-item"},s.a.createElement(i.a,{to:"/",className:"list-link"},s.a.createElement("img",{src:p.a,alt:"youtube"})))))))),s.a.createElement("div",{className:"footer-bottom"},s.a.createElement(r.a,null,s.a.createElement(u.a,{md:12},s.a.createElement("div",{className:"service-policy"},s.a.createElement(i.a,{to:"/terms_of%20service",className:"link service"},"Terms of Service"),s.a.createElement(i.a,{to:"/privacy_policy",className:"link policy"},"Privacy Policy")),s.a.createElement("div",{className:"copyright"},"Copyright © 2018 Lorem Ipsum, Inc. abc System, Inc. All Rights Reserved.")))))))},data:n})}},165:function(e){e.exports={data:{sporttalk:{pages:[{id:"1",title:"contact us",in_footer:!0},{id:"2",title:"FAQ",in_footer:!0},{id:"3",title:"About Us",in_footer:!0},{id:"5",title:"Privacy Policy",in_footer:null},{id:"4",title:"Terms of Service",in_footer:null}]}}}},166:function(e,a){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAgMCAxMiAyMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTEuNDQ4NCAwLjUwMDMwNUw4LjY3ODA4IDAuNDk1NzI4QzUuNTY1NzMgMC40OTU3MjggMy41NTQzOCAyLjYyMDgyIDMuNTU0MzggNS45MDk5NlY4LjQwNjI4SDAuNzY4OTQ5QzAuNTI4MjU1IDguNDA2MjggMC4zMzMzNDQgOC42MDcyMyAwLjMzMzM0NCA4Ljg1NTFWMTIuNDcyQzAuMzMzMzQ0IDEyLjcxOTkgMC41Mjg0NzcgMTIuOTIwNiAwLjc2ODk0OSAxMi45MjA2SDMuNTU0MzhWMjIuMDQ3MUMzLjU1NDM4IDIyLjI5NSAzLjc0OTI5IDIyLjQ5NTcgMy45ODk5OSAyMi40OTU3SDcuNjI0MTlDNy44NjQ4OCAyMi40OTU3IDguMDU5NzkgMjIuMjk0OCA4LjA1OTc5IDIyLjA0NzFWMTIuOTIwNkgxMS4zMTY2QzExLjU1NzMgMTIuOTIwNiAxMS43NTIyIDEyLjcxOTkgMTEuNzUyMiAxMi40NzJMMTEuNzUzNiA4Ljg1NTFDMTEuNzUzNiA4LjczNjA5IDExLjcwNzUgOC42MjIxMSAxMS42MjYgOC41Mzc4OEMxMS41NDQ0IDguNDUzNjYgMTEuNDMzMyA4LjQwNjI4IDExLjMxNzcgOC40MDYyOEg4LjA1OTc5VjYuMjkwMTJDOC4wNTk3OSA1LjI3MyA4LjI5NTE1IDQuNzU2NjYgOS41ODE3NCA0Ljc1NjY2TDExLjQ0OCA0Ljc1NTk4QzExLjY4ODQgNC43NTU5OCAxMS44ODMzIDQuNTU1MDMgMTEuODgzMyA0LjMwNzM5VjAuOTQ4ODk3QzExLjg4MzMgMC43MDE0ODUgMTEuNjg4NyAwLjUwMDc2MyAxMS40NDg0IDAuNTAwMzA1WiIgZmlsbD0iIzEyMTUyMSIvPg0KPC9zdmc+DQo="},167:function(e,a){e.exports="data:image/svg+xml;base64,ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMzIgMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI4IDguMjkyNjRDMjcuMTUzNSA4LjY4MTY5IDI2LjI0NTIgOC45NDU1NCAyNS4yOTA4IDkuMDYzMzNDMjYuMjY1MyA4LjQ1ODEgMjcuMDExMiA3LjQ5ODEzIDI3LjM2NDcgNi4zNTc3NUMyNi40NTA3IDYuOTE4MjMgMjUuNDQxNyA3LjMyNTIxIDI0LjM2NjYgNy41NDU4NEMyMy41MDU3IDYuNTkzMyAyMi4yODEyIDYgMjAuOTIzIDZDMTguMzE3MyA2IDE2LjIwNDYgOC4xOTEyOSAxNi4yMDQ2IDEwLjg5MjRDMTYuMjA0NiAxMS4yNzU1IDE2LjI0NjMgMTEuNjQ5NiAxNi4zMjY4IDEyLjAwNzRDMTIuNDA2IDExLjgwMzIgOC45MjkzNiA5Ljg1NDg4IDYuNjAyNDkgNi44OTQzOEM2LjE5NTc0IDcuNjE1ODggNS45NjQzNSA4LjQ1NjU4IDUuOTY0MzUgOS4zNTRDNS45NjQzNSAxMS4wNTE5IDYuNzk3OTUgMTIuNTUgOC4wNjI3MyAxMy40MjY1QzcuMjg5NDggMTMuMzk5NyA2LjU2MjI0IDEzLjE3OTEgNS45MjU1NiAxMi44MTI0VjEyLjg3MzVDNS45MjU1NiAxNS4yNDM2IDcuNTUyNTIgMTcuMjIxOCA5LjcwOTc4IDE3LjY3MkM5LjMxNDU0IDE3Ljc4MjMgOC44OTc3NSAxNy44NDM0IDguNDY2NTggMTcuODQzNEM4LjE2MTkgMTcuODQzNCA3Ljg2NzI2IDE3LjgxMjEgNy41NzgzNyAxNy43NTI1QzguMTc5MTIgMTkuNjk3OCA5LjkyMTA3IDIxLjExMjQgMTEuOTg0OSAyMS4xNTEyQzEwLjM3MDkgMjIuNDYzIDguMzM1NzkgMjMuMjQyNiA2LjEyNTM1IDIzLjI0MjZDNS43NDQ0OSAyMy4yNDI2IDUuMzY5MzUgMjMuMjE4OCA1IDIzLjE3NTZDNy4wODgzMSAyNC41NjY0IDkuNTY3NTQgMjUuMzc3MyAxMi4yMzIyIDI1LjM3NzNDMjAuOTExNiAyNS4zNzczIDI1LjY1NTkgMTcuOTIwOSAyNS42NTU5IDExLjQ1NDRMMjUuNjQwMSAxMC44MjA5QzI2LjU2NzEgMTAuMTM1MSAyNy4zNjkgOS4yNzM1MSAyOCA4LjI5MjY0WiIgZmlsbD0iIzEyMTUyMSIvPg0KPC9zdmc+DQo="},168:function(e,a){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0yNi45OTk5IDE0Ljc3NzdIMTYuNzMzM1YxOC4xOTk5SDIyLjk5N0MyMi4wNjI2IDIxLjE3NTEgMTkuMjgzNiAyMy4zMzMzIDE1Ljk5OTkgMjMuMzMzM0MxMS45NDk4IDIzLjMzMzMgOC42NjY2NiAyMC4wNDk5IDguNjY2NjYgMTUuOTk5OUM4LjY2NjY2IDExLjk0OTcgMTEuOTQ5OSA4LjY2NjYyIDE1Ljk5OTkgOC42NjY2MkMxOC4wMzk0IDguNjY2NjIgMTkuODg0MSA5LjQ5OTQyIDIxLjIxMzQgMTAuODQzMkwyMy42OTc1IDguMTQzMTJDMjEuNzEzNiA2LjE5OTExIDE4Ljk5NyA1IDE1Ljk5OTkgNUM5LjkyNDg2IDQuOTk5OTQgNSA5LjkyNDgyIDUgMTUuOTk5OUM1IDIyLjA3NSA5LjkyNDg2IDI3IDE2IDI3QzIxLjMyMTYgMjcgMjUuOTgwNyAyMy4yMjA3IDI3IDE4LjJWMTQuNzc3N0wyNi45OTk5IDE0Ljc3NzdWMTQuNzc3N1oiIGZpbGw9ImJsYWNrIi8+DQo8L3N2Zz4NCg=="},169:function(e,a){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNi42MjI5OSAwSDE3LjM3NjdDMjEuMDI4OSAwIDI0LjAwMDEgMi45NzEyMiAyNCA2LjYyMzEzVjE3LjM3NjlDMjQgMjEuMDI4OCAyMS4wMjg5IDI0IDE3LjM3NjcgMjRINi42MjI5OUMyLjk3MTA4IDI0IDAgMjEuMDI4OSAwIDE3LjM3NjlWNi42MjMxM0MwIDIuOTcxMjIgMi45NzEwOCAwIDYuNjIyOTkgMFpNMTcuMzc2OSAyMS44NzA2QzE5Ljg1NDggMjEuODcwNiAyMS44NzA3IDE5Ljg1NDggMjEuODcwNyAxNy4zNzY5SDIxLjg3MDZWNi42MjMxM0MyMS44NzA2IDQuMTQ1MzcgMTkuODU0NiAyLjEyOTQgMTcuMzc2NyAyLjEyOTRINi42MjI5OUM0LjE0NTIyIDIuMTI5NCAyLjEyOTQgNC4xNDUzNyAyLjEyOTQgNi42MjMxM1YxNy4zNzY5QzIuMTI5NCAxOS44NTQ4IDQuMTQ1MjIgMjEuODcwNyA2LjYyMjk5IDIxLjg3MDZIMTcuMzc2OVoiIGZpbGw9ImJsYWNrIi8+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTYgMTIuMDAwMUM2IDguNjkxNjEgOC42OTE1NSA2IDEyIDZDMTUuMzA4NCA2IDE4IDguNjkxNjEgMTggMTIuMDAwMUMxOCAxNS4zMDg1IDE1LjMwODQgMTggMTIgMThDOC42OTE1NSAxOCA2IDE1LjMwODUgNiAxMi4wMDAxWk04LjA2NTk3IDEyQzguMDY1OTcgMTQuMTY5MiA5LjgzMDg5IDE1LjkzMzggMTIuMDAwMSAxNS45MzM4QzE0LjE2OTIgMTUuOTMzOCAxNS45MzQxIDE0LjE2OTIgMTUuOTM0MSAxMkMxNS45MzQxIDkuODMwNjggMTQuMTY5NCA4LjA2NTg4IDEyLjAwMDEgOC4wNjU4OEM5LjgzMDc1IDguMDY1ODggOC4wNjU5NyA5LjgzMDY4IDguMDY1OTcgMTJaIiBmaWxsPSJibGFjayIvPg0KPHBhdGggZD0iTTE4LjUgNEMxOC4xMDU5IDQgMTcuNzE4OCA0LjE1OTU1IDE3LjQ0MDUgNC40MzkwOUMxNy4xNjA4IDQuNzE3MjcgMTcgNS4xMDQ1NSAxNyA1LjVDMTcgNS44OTQyMyAxNy4xNjA5IDYuMjgxMzYgMTcuNDQwNSA2LjU2MDkxQzE3LjcxODYgNi44MzkwOSAxOC4xMDU5IDcgMTguNSA3QzE4Ljg5NTUgNyAxOS4yODE0IDYuODM5MDkgMTkuNTYwOSA2LjU2MDkxQzE5Ljg0MDUgNi4yODEzNiAyMCA1Ljg5NDA5IDIwIDUuNUMyMCA1LjEwNDU1IDE5Ljg0MDUgNC43MTcyNyAxOS41NjA5IDQuNDM5MDlDMTkuMjgyNyA0LjE1OTU1IDE4Ljg5NTUgNCAxOC41IDRaIiBmaWxsPSJibGFjayIvPg0KPC9zdmc+DQo="},170:function(e,a){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAyNCAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTcuNTQ0MSAwQzIwLjU5ODcgMCAyMi4xOTgyIDAuNDIyODA3IDIzLjA2NDUgMS40NTkzM0MyMy45MzQ5IDIuNTAwNDUgMjQgNC4wOTUxMyAyNCA2LjQwOTAzVjEwLjU5MUMyNCAxMy4yNDI2IDIzLjU4NDUgMTQuNzc0MSAyMi42MTA2IDE1LjcxMjJDMjEuNjYxIDE2LjYyNjkgMjAuMTkzMSAxNyAxNy41NDQyIDE3SDYuNDU1NjlDMC45OTg0IDE3IDAgMTQuODQxOCAwIDEwLjU5MVY2LjQwOTAzQzAgNC4yMTQ5IDAgMi42Mjk1NyAwLjg0MTQ3MSAxLjU1MzYyQzEuNzA0NTQgMC40NTAwNzkgMy4zMzExMiAwIDYuNDU1NjkgMEgxNy41NDQxWk0xMC4zNzI5IDExLjcyNjFMMTUuNDA4MSA5LjA3NzRDMTUuNjYzOSA4Ljk0MjkxIDE1LjgyNDEgOC42NzYzNCAxNS44MjM3IDguMzg1NjlDMTUuODIzNCA4LjA5NTI3IDE1LjY2MjUgNy44MjkwOSAxNS40MDYzIDcuNjk1MjJMMTAuMzcxMSA1LjA2MzYzQzEwLjEzMTIgNC45MzgxNyA5Ljg0MzU2IDQuOTQ3ODMgOS42MTIzMSA1LjA4OTE4QzkuMzgxMTMgNS4yMzA1NCA5LjI0MDA4IDUuNDgzIDkuMjQwMDggNS43NTUxMVYxMS4wMzU0QzkuMjQwMDggMTEuMzA4IDkuMzgxNTIgMTEuNTYwNyA5LjYxMzE2IDExLjcwMkM5LjczNjE4IDExLjc3NjkgOS44NzUwNyAxMS44MTQ3IDEwLjAxNDMgMTEuODE0N0MxMC4xMzcyIDExLjgxNDcgMTAuMjYwMyAxMS43ODUzIDEwLjM3MjkgMTEuNzI2MVoiIGZpbGw9ImJsYWNrIi8+DQo8L3N2Zz4NCg=="},172:function(e,a,t){"use strict";var n=t(152),l=t(4),s=t.n(l),i=(t(157),t(0)),c=t.n(i),r=t(183),m=t(159),o=function(){var e={message:"",login:!0};return Object(m.c)()?e.message="Hello, "+Object(m.a)().name:e.message="You are not logged in",c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"header-top-right",style:{display:"flex",alignItems:"center"}},c.a.createElement("div",{className:"search d-none d-md-block"},c.a.createElement(r.a,null,c.a.createElement("input",{type:"search",className:"header-search",placeholder:"Search"}),c.a.createElement("input",{type:"submit",className:"search-icon",value:""}))),c.a.createElement("div",{className:"user-login d-none d-md-block"},Object(m.c)()?c.a.createElement(c.a.Fragment,null,c.a.createElement(n.a,{to:"/user/profile"},"Profile"),c.a.createElement("a",{href:"/",onClick:function(e){e.preventDefault(),Object(m.d)(function(){return Object(n.c)("/")})}},"Logout")):c.a.createElement(c.a.Fragment,null,c.a.createElement(n.a,{activeClassName:"nav-active",className:"user-login-item sign-in",to:"/user/login"},"Sign in"),c.a.createElement(n.a,{activeClassName:"nav-active",className:"user-login-item register",to:"/user/login"},"Register")))))},u=(t(175),t(163)),M=t(180),N=t(161),g=function(){return c.a.createElement(n.b,{query:"1515509770",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("nav",{style:{display:"flex",alignItems:"center",justifyContent:"center"},className:"header-nav "},c.a.createElement("ul",{style:{display:"flex",alignItems:"center"},className:"nav-list"},e.sporttalk.leagues.map(function(e,a){return c.a.createElement(M.a,{key:a},c.a.createElement(n.a,{activeClassName:"nav-active",className:"nav-link",to:"/league/"+e.name},c.a.createElement("span",{className:"icon"},c.a.createElement("img",{src:N.a+e.logo.url,alt:"logo item"})),c.a.createElement("span",{className:"text"},e.name)))}))))},data:u})},d=function(e){e.siteTitle;return c.a.createElement(c.a.Fragment,null,c.a.createElement("header",{className:"header"},c.a.createElement("div",{className:"header-top",style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},c.a.createElement("div",{className:"header-top-left ",style:{display:"flex",alignItems:"center"}},c.a.createElement("div",{className:"burger"},c.a.createElement(n.a,{to:"/",className:"burger-btn"},c.a.createElement("span",{className:"burger-line"}),c.a.createElement("span",{className:"burger-line"}),c.a.createElement("span",{className:"burger-line"}))),c.a.createElement("div",{className:"logo"},c.a.createElement(n.a,{className:"logo-item",to:"/"},"Sports",c.a.createElement("span",{className:"color-red"},"Talk"))),c.a.createElement("div",{className:"serch-icon-mobile d-md-none",style:{display:"block"}},c.a.createElement("input",{type:"submit",className:"search-icon",value:""}))),c.a.createElement(o,null)),c.a.createElement(g,null)))};d.propTypes={siteTitle:s.a.string},d.defaultProps={siteTitle:"cvbcvbcv"};a.a=d},178:function(e,a,t){"use strict";var n=t(179),l=t(0),s=t.n(l),i=t(4),c=t.n(i),r=t(152),m=t(172),o=t(164),u=(t(184),function(e){var a=e.children;return s.a.createElement(r.b,{query:"755544856",render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(m.a,{siteTitle:e.site.siteMetadata.title}),s.a.createElement("main",null,a),s.a.createElement(o.a,null))},data:n})});u.propTypes={children:c.a.node.isRequired},a.a=u},179:function(e){e.exports={data:{site:{siteMetadata:{title:"Sport talk"}}}}},185:function(e,a,t){"use strict";var n=t(186),l=t(0),s=t.n(l),i=t(4),c=t.n(i),r=t(187),m=t.n(r);function o(e){var a=e.description,t=e.lang,l=e.meta,i=e.keywords,c=e.title,r=n.data.site,o=a||r.siteMetadata.description;return s.a.createElement(m.a,{htmlAttributes:{lang:t},title:c,titleTemplate:"%s | "+r.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:c},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:r.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:o}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(l)})}o.defaultProps={lang:"en",meta:[],keywords:[],description:""},o.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},a.a=o},186:function(e){e.exports={data:{site:{siteMetadata:{title:"Sport talk",description:"Sport talk",author:"swat"}}}}},197:function(e){e.exports={data:{sporttalk:{polls:[{id:"1",title:"Should the Seahawks focus the  offense around Russell Wilson instead of the running game?",body:"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",votes:null,title_bg:{id:"9",name:"slider-img1.png",url:"/uploads/936b87b4d4c34e24848fbc7a89f6a02b.png"},tags:[]},{id:"2",title:"Should the Seahawks focus the offense around Russell Wilson instead of the running game? \t\t\t\t\t\t\t\t",body:"Should the Seahawks focus the offense around Russell Wilson instead of the running game? \t\t\t\t\t\t\t\t",votes:0,title_bg:{id:"10",name:"slider-img1.png",url:"/uploads/6dec1af4924846f689e39083a233cb45.png"},tags:[]}]}}}},203:function(e){e.exports={data:{sporttalk:{polls:[{id:"1",title:"Should the Seahawks focus the  offense around Russell Wilson instead of the running game?",body:"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",votes:null,title_bg:{id:"9",name:"slider-img1.png",url:"/uploads/936b87b4d4c34e24848fbc7a89f6a02b.png"},tags:[]},{id:"2",title:"Should the Seahawks focus the offense around Russell Wilson instead of the running game? \t\t\t\t\t\t\t\t",body:"Should the Seahawks focus the offense around Russell Wilson instead of the running game? \t\t\t\t\t\t\t\t",votes:0,title_bg:{id:"10",name:"slider-img1.png",url:"/uploads/6dec1af4924846f689e39083a233cb45.png"},tags:[]}]}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-d26cc1ecbdfe49da0cc4.js.map