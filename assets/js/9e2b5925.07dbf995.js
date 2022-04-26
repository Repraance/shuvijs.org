"use strict";(self.webpackChunkshuvi_document=self.webpackChunkshuvi_document||[]).push([[1230],{9613:function(e,r,n){n.d(r,{Zo:function(){return u},kt:function(){return f}});var t=n(9496);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),i=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},u=function(e){var r=i(e.components);return t.createElement(c.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=i(n),f=o,v=d["".concat(c,".").concat(f)]||d[f]||l[f]||a;return n?t.createElement(v,s(s({ref:r},u),{},{components:n})):t.createElement(v,s({ref:r},u))}));function f(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,s[1]=p;for(var i=2;i<a;i++)s[i]=n[i];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5275:function(e,r,n){n.r(r),n.d(r,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return p},metadata:function(){return i},toc:function(){return l}});var t=n(7813),o=n(7044),a=(n(9496),n(9613)),s=["components"],p={sidebar_position:90,id:"FaaS Suppport"},c=void 0,i={unversionedId:"guide/features/FaaS Suppport",id:"guide/features/FaaS Suppport",title:"FaaS Suppport",description:"shuvi can be Functions as a Service for other server or even docker to handle request and response.",source:"@site/docs/guide/features/FaaS.md",sourceDirName:"guide/features",slug:"/guide/features/FaaS Suppport",permalink:"/shuvijs.org/docs/guide/features/FaaS Suppport",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guide/features/FaaS.md",tags:[],version:"current",sidebarPosition:90,frontMatter:{sidebar_position:90,id:"FaaS Suppport"},sidebar:"guideSidebar",previous:{title:"Custom Server",permalink:"/shuvijs.org/docs/guide/features/Custom Server"},next:{title:"Plugin",permalink:"/shuvijs.org/docs/guide/features/plugin"}},u={},l=[],d={toc:l};function f(e){var r=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,t.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"shuvi can be Functions as a Service for other server or even docker to handle ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/api/http.html#class-httpclientrequest"},"request")," and ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/api/http.html#class-httpserverresponse"},"response"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"work with koa server"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const Koa = require('koa');\nconst { shuvi } = require('shuvi');\n\nconst port = parseInt(process.env.PORT, 10) || 3000;\nconst dev = process.env.NODE_ENV !== 'production';\nconst config = process.env.CONFIGOVERRIDES\n  ? JSON.parse(process.env.CONFIGOVERRIDES)\n  : {};\nconst app = shuvi({\n  dev,\n  cwd: __dirname,\n  config\n});\n\napp.prepare().then(() => {\n  const server = new Koa();\n  const handle = app.getRequestHandler();\n\n  server.use(async (ctx, next) => {\n    ctx.res.statusCode = 200;\n    await handle(ctx.req, ctx.res);\n    ctx.respond = false;\n    next();\n  });\n\n  server.listen(port, () => {\n    console.log(`> Koa server Ready on http://localhost:${port}`);\n  });\n});\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"work with express server"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const express = require('express');\nconst { shuvi } = require('shuvi');\n\nconst port = parseInt(process.env.PORT, 10) || 3000;\nconst dev = process.env.NODE_ENV !== 'production';\nconst config = process.env.CONFIGOVERRIDES\n  ? JSON.parse(process.env.CONFIGOVERRIDES)\n  : {};\nconst app = shuvi({\n  dev,\n  cwd: __dirname,\n  config\n});\n\napp.prepare().then(() => {\n  const handle = app.getRequestHandler();\n  const server = express();\n\n  server.all('*', (req, res) => {\n    return handle(req, res);\n  });\n\n  server.listen(port, err => {\n    if (err) throw err;\n    console.log(`> Express server Ready on http://localhost:${port}`);\n  });\n});\n")))))}f.isMDXComponent=!0}}]);