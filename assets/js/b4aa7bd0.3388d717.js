"use strict";(self.webpackChunkshuvi_document=self.webpackChunkshuvi_document||[]).push([[84],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6269:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(2081),o=(n(9496),n(9613));const a={},i="No Head Element",l={unversionedId:"guides/rules/no-head-element",id:"guides/rules/no-head-element",title:"No Head Element",description:"Prevent usage of `` element.",source:"@site/docs/guides/rules/no-head-element.md",sourceDirName:"guides/rules",slug:"/guides/rules/no-head-element",permalink:"/shuvijs.org/docs/guides/rules/no-head-element",draft:!1,editUrl:"https://github.com/shuvijs/shuvijs.org/tree/master/docs/guides/rules/no-head-element.md",tags:[],version:"current",frontMatter:{},sidebar:"guides",previous:{title:"FaaS Suppport",permalink:"/shuvijs.org/docs/guides/FaaS Suppport"},next:{title:"No HTML link for pages",permalink:"/shuvijs.org/docs/guides/rules/no-html-link-for-pages"}},s={},u=[{value:"Why This Error Occurred",id:"why-this-error-occurred",level:3},{value:"Possible Ways to Fix It",id:"possible-ways-to-fix-it",level:3},{value:"Useful Links",id:"useful-links",level:3}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"no-head-element"},"No Head Element"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Prevent usage of ",(0,o.kt)("inlineCode",{parentName:"p"},"<head>")," element.")),(0,o.kt)("h3",{id:"why-this-error-occurred"},"Why This Error Occurred"),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"<head>")," element was used to include page-level metadata, but this can cause unexpected behavior in a Shuvi.js application. Use Shuvi.js' built-in ",(0,o.kt)("inlineCode",{parentName:"p"},"<Head />")," component instead."),(0,o.kt)("h3",{id:"possible-ways-to-fix-it"},"Possible Ways to Fix It"),(0,o.kt)("p",null,"Import and use the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Head />")," component:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Head } from \'@shuvi/runtime\'\n\nfunction Index() {\n  return (\n    <>\n      <Head>\n        <title>My page title</title>\n        <meta name="viewport" content="initial-scale=1.0, width=device-width" />\n      </Head>\n    </>\n  )\n}\n\nexport default Index\n')),(0,o.kt)("h3",{id:"useful-links"},"Useful Links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/runtime/components#head"},(0,o.kt)("inlineCode",{parentName:"a"},"<Head />")))))}p.isMDXComponent=!0}}]);