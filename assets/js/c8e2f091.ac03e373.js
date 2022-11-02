"use strict";(self.webpackChunkshuvi_document=self.webpackChunkshuvi_document||[]).push([[1831],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=o.createContext({}),l=function(e){var t=o.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,m=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,h=p["".concat(m,".").concat(d)]||p[d]||u[d]||a;return n?o.createElement(h,s(s({ref:t},c),{},{components:n})):o.createElement(h,s({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=p;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8017:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=n(2081),r=(n(9496),n(9613));const a={sidebar_position:4,id:"custom-document-template",title:"Custom Document Template"},s=void 0,i={unversionedId:"guides/custom-behaviors/custom-document-template",id:"guides/custom-behaviors/custom-document-template",title:"Custom Document Template",description:"shuvi generate HTML by ejs engine. It works both spa and ssr mode.",source:"@site/docs/guides/custom-behaviors/custom-document.md",sourceDirName:"guides/custom-behaviors",slug:"/guides/custom-behaviors/custom-document-template",permalink:"/shuvijs.org/docs/guides/custom-behaviors/custom-document-template",draft:!1,editUrl:"https://github.com/shuvijs/shuvijs.org/tree/master/docs/guides/custom-behaviors/custom-document.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,id:"custom-document-template",title:"Custom Document Template"},sidebar:"guides",previous:{title:"Custom Server",permalink:"/shuvijs.org/docs/guides/custom-behaviors/custom-server"},next:{title:"Plugin",permalink:"/shuvijs.org/docs/guides/plugin"}},m={},l=[{value:"How to Custom Document Template",id:"how-to-custom-document-template",level:2}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"shuvi generate HTML by ",(0,r.kt)("a",{parentName:"p",href:"https://ejs.co/"},"ejs engine"),". It works both ",(0,r.kt)("inlineCode",{parentName:"p"},"spa")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ssr")," mode."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-template"},"// default template\n<!doctype html>\n<html<%- htmlAttrs %>>\n<head>\n  <%- head %>\n</head>\n<body>\n  <%- main %>\n  <%- script %>\n</body>\n</html>\n")),(0,r.kt)("p",null,"Intervention HTML with handle ",(0,r.kt)("inlineCode",{parentName:"p"},"documentProps"),", Keyof ",(0,r.kt)("inlineCode",{parentName:"p"},"documentProps")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"htmlAttrs, headTags, mainTags, scriptTags"),", all is ejs variables."),(0,r.kt)("p",null,"handle ",(0,r.kt)("inlineCode",{parentName:"p"},"documentProps")," in function ",(0,r.kt)("inlineCode",{parentName:"p"},"onDocumentProps")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"modifyHtml"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Detail type of ",(0,r.kt)("inlineCode",{parentName:"p"},"onDocumentProps")," is ",(0,r.kt)("a",{parentName:"p",href:"/shuvijs.org/docs/old-reference/runtime/interfaces/RuntimeServer.IDocumentModule#ondocumentprops"},"here"))),(0,r.kt)("h2",{id:"how-to-custom-document-template"},"How to Custom Document Template"),(0,r.kt)("p",null,"There is way to modify default ejs template, add ",(0,r.kt)("inlineCode",{parentName:"p"},"src/document.ejs"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-template"},'// /src/document.ejs\n<!doctype html>\n<html<%- htmlAttrs %>>\n<head>\n  <%- head %>\n</head>\n<body test="<%= test %>">\n  <%- main %>\n  <%- script %>\n</body>\n</html>\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'test="<%= test %>"')," is new variable."),(0,r.kt)("p",null,"To create a custom error page you can create a ",(0,r.kt)("inlineCode",{parentName:"p"},"src/document.js")," file.\n",(0,r.kt)("inlineCode",{parentName:"p"},"document.js")," collaboratively with ",(0,r.kt)("a",{parentName:"p",href:"#how-to-custom-document"},(0,r.kt)("inlineCode",{parentName:"a"},"document.ejs")),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// src/document.js\nexport function getTemplateData() {\n  return { test: 1 }; // inject data to ejs template\n}\n\nexport function onDocumentProps(documentProps, context) {\n  console.log(\'context: \', context);\n  documentProps.headTags.push({ // modify documentProps \n    tagName: "meta",\n    attrs: {\n      name: "test",\n      content: "1"\n    }\n  });\n\n  return documentProps;\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"document.ejs")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"document.js")," can work independently or collaboratively. In the example, they work collaboratively.")),(0,r.kt)("p",null,"render results:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-template"},'// html\n<!doctype html>\n<html>\n<head>\n<meta name="test" content="1">    \n</head>\n<body test="1">\n</body>\n</html>\n')))}u.isMDXComponent=!0}}]);