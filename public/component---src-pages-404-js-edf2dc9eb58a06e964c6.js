(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{142:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(152),o=a(150);e.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},146:function(t,e,a){"use strict";a.d(e,"b",function(){return l});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(33),c=a.n(s);a.d(e,"a",function(){return c.a});a(147);var u=r.a.createContext({}),l=function(t){return r.a.createElement(u.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},147:function(t,e,a){var n;t.exports=(n=a(149))&&n.default||n},148:function(t){t.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},149:function(t,e,a){"use strict";a.r(e);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(55),c=a(2),u=function(t){var e=t.location,a=c.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(s.a,Object.assign({location:e,pageResources:a},a.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=u},150:function(t,e,a){"use strict";var n=a(151),r=a(0),i=a.n(r),o=a(4),s=a.n(o),c=a(154),u=a.n(c);function l(t){var e=t.description,a=t.lang,r=t.meta,o=t.keywords,s=t.title,c=n.data.site,l=e||c.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:s},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:l}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}l.defaultProps={lang:"en",meta:[],keywords:[],description:""},l.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},e.a=l},151:function(t){t.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},152:function(t,e,a){"use strict";var n=a(148),r=a(0),i=a.n(r),o=a(4),s=a.n(o),c=a(146),u=function(t){t.siteTitle;return i.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(c.a,{to:"/",style:{color:"white",textDecoration:"none"}},"Sport talk"))))};u.propTypes={siteTitle:s.a.string},u.defaultProps={siteTitle:"cvbcvbcv"};var l=u,d=(a(153),function(t){var e=t.children;return i.a.createElement(c.b,{query:"755544856",render:function(t){return i.a.createElement(i.a.Fragment,null,i.a.createElement(l,{siteTitle:t.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,e)))},data:n})});d.propTypes={children:s.a.node.isRequired};e.a=d}}]);
//# sourceMappingURL=component---src-pages-404-js-edf2dc9eb58a06e964c6.js.map