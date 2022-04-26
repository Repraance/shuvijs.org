"use strict";(self.webpackChunkshuvi_document=self.webpackChunkshuvi_document||[]).push([[5966],{9613:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(9496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,k=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return a?n.createElement(k,l(l({ref:t},u),{},{components:a})):n.createElement(k,l({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4132:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return c}});var n=a(7813),r=a(7044),o=(a(9496),a(9613)),l=["components"],p={sidebar_position:2,id:"Dynamic Routes"},i=void 0,s={unversionedId:"guide/features/Routes/Dynamic Routes",id:"guide/features/Routes/Dynamic Routes",title:"Dynamic Routes",description:"Defining routes by using predefined paths is not always enough for complex applications. In shuvi you can add brackets to a page ([param]) to create a dynamic route (a.k.a. url slugs, pretty urls, and others).",source:"@site/docs/guide/features/Routes/dynamic-routes.md",sourceDirName:"guide/features/Routes",slug:"/guide/features/Routes/Dynamic Routes",permalink:"/shuvijs.org/docs/guide/features/Routes/Dynamic Routes",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guide/features/Routes/dynamic-routes.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,id:"Dynamic Routes"},sidebar:"guideSidebar",previous:{title:"Introduction",permalink:"/shuvijs.org/docs/guide/features/Routes/Introduction"},next:{title:"On Demand Transpilation",permalink:"/shuvijs.org/docs/guide/features/Routes/On Demand Transpilation"}},u={},c=[{value:"Catch all routes",id:"catch-all-routes",level:2},{value:"Optional catch all routes",id:"optional-catch-all-routes",level:2},{value:"general rules",id:"general-rules",level:2}],d={toc:c};function m(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Defining routes by using predefined paths is not always enough for complex applications. In shuvi you can add brackets to a page (",(0,o.kt)("inlineCode",{parentName:"p"},"[param]"),") to create a dynamic route (a.k.a. url slugs, pretty urls, and others)."),(0,o.kt)("p",null,"Consider the following page ",(0,o.kt)("inlineCode",{parentName:"p"},"pages/post/[pid].js"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useCurrentRoute } from '@shuvi/app'\n\nconst Post = () => {\n  const { params } = useCurrentRoute()\n  const { pid } = params;\n\n  return <p>Post: {pid}</p>\n}\n\nexport default Post\n")),(0,o.kt)("p",null,"Any route like ",(0,o.kt)("inlineCode",{parentName:"p"},"/post/1"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"/post/abc"),", etc. will be matched by ",(0,o.kt)("inlineCode",{parentName:"p"},"pages/post/[pid].js"),". "),(0,o.kt)("p",null,"For example, the route ",(0,o.kt)("inlineCode",{parentName:"p"},"/post/abc")," will have the following ",(0,o.kt)("inlineCode",{parentName:"p"},"params")," object:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{ "pid": "abc" }\n')),(0,o.kt)("p",null,"Similarly, the route ",(0,o.kt)("inlineCode",{parentName:"p"},"/post/abc?foo=bar")," will have the following ",(0,o.kt)("inlineCode",{parentName:"p"},"params")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"query")," object:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// params\n{"pid": "abc"}\n// query\n{ "foo": "bar" }\n')),(0,o.kt)("p",null,"Multiple dynamic route segments work the same way. The page ",(0,o.kt)("inlineCode",{parentName:"p"},"pages/post/[pid]/[comment].js")," will match the route ",(0,o.kt)("inlineCode",{parentName:"p"},"/post/abc/a-comment")," and its ",(0,o.kt)("inlineCode",{parentName:"p"},"params")," object will be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{ "pid": "abc", "comment": "a-comment" }\n')),(0,o.kt)("h2",{id:"catch-all-routes"},"Catch all routes"),(0,o.kt)("p",null,"Dynamic routes can be extended to catch all paths by adding three dots (",(0,o.kt)("inlineCode",{parentName:"p"},"..."),") inside the brackets. For example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pages/post/[...slug].js")," matches ",(0,o.kt)("inlineCode",{parentName:"li"},"/post/a"),", but also ",(0,o.kt)("inlineCode",{parentName:"li"},"/post/a/b"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"/post/a/b/c")," and so on.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note"),": You can use names other than ",(0,o.kt)("inlineCode",{parentName:"p"},"slug"),", such as: ",(0,o.kt)("inlineCode",{parentName:"p"},"[...param]"))),(0,o.kt)("p",null,"Matched parameters will be sent as a query parameter (",(0,o.kt)("inlineCode",{parentName:"p"},"slug")," in the example) to the page, and it will always be an array, so, the path ",(0,o.kt)("inlineCode",{parentName:"p"},"/post/a")," will have the following ",(0,o.kt)("inlineCode",{parentName:"p"},"params")," object:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{ "slug": ["a"] }\n')),(0,o.kt)("p",null,"And in the case of ",(0,o.kt)("inlineCode",{parentName:"p"},"/post/a/b"),", and any other matching path, new parameters will be added to the array, like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{ "slug": ["a", "b"] }\n')),(0,o.kt)("h2",{id:"optional-catch-all-routes"},"Optional catch all routes"),(0,o.kt)("p",null,"Catch all routes can be made optional by including the parameter in double brackets (",(0,o.kt)("inlineCode",{parentName:"p"},"[[...slug]]"),")."),(0,o.kt)("p",null,"For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"pages/post/[[...slug]].js")," will match ",(0,o.kt)("inlineCode",{parentName:"p"},"/post"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"/post/a"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"/post/a/b"),", and so on."),(0,o.kt)("p",null,"The main difference between catch all and optional catch all routes is that with optional, the route without the parameter is also matched (",(0,o.kt)("inlineCode",{parentName:"p"},"/post")," in the example above)."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"params")," objects are as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'{ } // GET `/post` (empty object)\n{ "slug": ["a"] } // `GET /post/a` (single-element array)\n{ "slug": ["a", "b"] } // `GET /post/a/b` (multi-element array)\n')),(0,o.kt)("h2",{id:"general-rules"},"general rules"),(0,o.kt)("p",null,"files under ",(0,o.kt)("inlineCode",{parentName:"p"},"src/pages"),", file path ",(0,o.kt)("inlineCode",{parentName:"p"},"pages/*/*.js")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"path"),(0,o.kt)("th",{parentName:"tr",align:null},"route"),(0,o.kt)("th",{parentName:"tr",align:null},"matched url"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"pages/post/create.js"),(0,o.kt)("td",{parentName:"tr",align:null},"/post/create"),(0,o.kt)("td",{parentName:"tr",align:null},"/post/create")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"pages/post/","[pid]",".js"),(0,o.kt)("td",{parentName:"tr",align:null},"/post/:pid"),(0,o.kt)("td",{parentName:"tr",align:null},"/post/1, /post/abc")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"pages/post/[","[pid]","].js"),(0,o.kt)("td",{parentName:"tr",align:null},"/post/:pid?"),(0,o.kt)("td",{parentName:"tr",align:null},"/post, /post/1, /post/abc")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"pages/post/","[...pid]",".js"),(0,o.kt)("td",{parentName:"tr",align:null},"/post/:pid+"),(0,o.kt)("td",{parentName:"tr",align:null},"/post/1/2, /post/a/b/c")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"pages/post/[","[...pid]","].js"),(0,o.kt)("td",{parentName:"tr",align:null},"/post/:pid*"),(0,o.kt)("td",{parentName:"tr",align:null},"/post, /post/1/2, /post/a/b/c")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"../router-match-rules"},"details about matched rules"))))}m.isMDXComponent=!0}}]);