(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{143:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(152),o=a(150);e.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"Home",keywords:["gatsby","application","react"]}),r.a.createElement("h1",null,"Hi people"),r.a.createElement("p",null,"Welcome to front page"))}},146:function(t,e,a){"use strict";a.d(e,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(33),s=a.n(c);a.d(e,"a",function(){return s.a});a(147);var l=r.a.createContext({}),u=function(t){return r.a.createElement(l.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},147:function(t,e,a){var n;t.exports=(n=a(149))&&n.default||n},148:function(t){t.exports={data:{site:{siteMetadata:{title:"Sport talk"}}}}},149:function(t,e,a){"use strict";a.r(e);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(55),s=a(2),l=function(t){var e=t.location,a=s.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(c.a,Object.assign({location:e,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=l},150:function(t,e,a){"use strict";var n=a(151),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(154),l=a.n(s);function u(t){var e=t.description,a=t.lang,r=t.meta,o=t.keywords,c=t.title,s=n.data.site,u=e||s.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},e.a=u},151:function(t){t.exports={data:{site:{siteMetadata:{title:"Sport talk",description:"Sport talk",author:"swat"}}}}},152:function(t,e,a){"use strict";var n=a(148),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(146),l=function(t){t.siteTitle;return i.a.createElement("header",{style:{background:"#F6423F",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(s.a,{to:"/",style:{color:"white",textDecoration:"none"}},"Sport talk"))))};l.propTypes={siteTitle:c.a.string},l.defaultProps={siteTitle:"cvbcvbcv"};var u=l,d=(a(153),function(t){var e=t.children;return i.a.createElement(s.b,{query:"755544856",render:function(t){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,{siteTitle:t.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,e)))},data:n})});d.propTypes={children:c.a.node.isRequired};e.a=d}}]);
//# sourceMappingURL=component---src-pages-index-js-87219a60d4ec0326784c.js.map