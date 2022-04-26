"use strict";(self.webpackChunkshuvi_document=self.webpackChunkshuvi_document||[]).push([[5146],{9613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var i=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),u=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return i.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||a;return n?i.createElement(f,l(l({ref:t},s),{},{components:n})):i.createElement(f,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7417:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var i=n(7813),r=n(7044),a=(n(9496),n(9613)),l=["components"],o={id:"config",title:"shuvi.config.js",sidebar_position:4},p="Config",u={unversionedId:"api-reference/config",id:"api-reference/config",title:"shuvi.config.js",description:"Shuvi uses a shuvi.config.js or shuvi.config.ts under root directory to customize project configurations.",source:"@site/docs/api-reference/config.md",sourceDirName:"api-reference",slug:"/api-reference/config",permalink:"/shuvijs.org/docs/api-reference/config",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-reference/config.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"config",title:"shuvi.config.js",sidebar_position:4},sidebar:"apiReferenceSidebar",previous:{title:"File Convention",permalink:"/shuvijs.org/docs/api-reference/file-convention"},next:{title:"Hook API",permalink:"/shuvijs.org/docs/api-reference/plugin/hook-api"}},s={},c=[{value:"ssr",id:"ssr",level:2},{value:"outputPath",id:"outputpath",level:2},{value:"publicPath",id:"publicpath",level:2},{value:"plugins",id:"plugins",level:2},{value:"presets",id:"presets",level:2},{value:"proxy",id:"proxy",level:2},{value:"runtimeConfig",id:"runtimeconfig",level:2},{value:"rootDir",id:"rootdir",level:2},{value:"router",id:"router",level:2},{value:"routes",id:"routes",level:2},{value:"apiRoutes",id:"apiroutes",level:2},{value:"platform",id:"platform",level:2},{value:"target",id:"target",level:2},{value:"analyze",id:"analyze",level:2},{value:"experimental",id:"experimental",level:2},{value:"experimental.parcelCss",id:"experimentalparcelcss",level:3}],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"config"},"Config"),(0,a.kt)("p",null,"Shuvi uses a ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"shuvi.config.js"))," or ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"shuvi.config.ts"))," under root directory to customize project configurations.\nThe config is an object and its type can be inferred by a ",(0,a.kt)("inlineCode",{parentName:"p"},"defineConfig")," method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="shuvi.config.js"',title:'"shuvi.config.js"'},"import { defineConfig } from 'shuvi'\n\nexport default defineConfig({\n  ssr: true\n})\n")),(0,a.kt)("h2",{id:"ssr"},"ssr"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean")),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"))),(0,a.kt)("p",null,"Config whether to enable server rendering."),(0,a.kt)("h2",{id:"outputpath"},"outputPath"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"string")),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'dist'"))),(0,a.kt)("p",null,"Specify output directory of the bundled files."),(0,a.kt)("h2",{id:"publicpath"},"publicPath"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"string")),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'/_shuvi'"))),(0,a.kt)("p",null,"Config publicPath of assets. This option is an equivalent of ",(0,a.kt)("inlineCode",{parentName:"p"},"output.publicPath")," in Webpack."),(0,a.kt)("h2",{id:"plugins"},"plugins"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Type: ",(0,a.kt)("inlineCode",{parentName:"p"},"Plugin[]")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Plugin")," can be"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"string"),": the path to the plugin or package name"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[string, PluginOptions = any]"),": the second item is the plugin options."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CorePluginInstance"),": the CorePlugin instance created by ",(0,a.kt)("a",{parentName:"li",href:"/shuvijs.org/docs/api-reference/plugin/corePlugin-api"},(0,a.kt)("inlineCode",{parentName:"a"},"createCorePlugin"))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Default: ",(0,a.kt)("inlineCode",{parentName:"p"},"[]")))),(0,a.kt)("p",null,"Config plugins"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="shuvi.config.js"',title:'"shuvi.config.js"'},"import { createCorePlugin, defineConfig } from 'shuvi'\n\nconst corePlugin = createCorePlugin({\n  afterInit: () => {\n    // do something\n  }\n})\n\nexport default defineConfig({\n  plugins: [\n    'src/path/to/some/plugin'\n    'some-plugin-package-name',\n    ['plugin-with-options', { hello: 'world' }],\n    corePlugin\n  ]\n}),\n")),(0,a.kt)("p",null,"todo: need to update"),(0,a.kt)("h2",{id:"presets"},"presets"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"Presets[]")),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[]"))),(0,a.kt)("p",null,"Config a set of plugins."),(0,a.kt)("h2",{id:"proxy"},"proxy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"object")),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"undefined"))),(0,a.kt)("p",null,"Config Api proxies."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="shuvi.config.js"',title:'"shuvi.config.js"'},"export default {\n  proxy: {\n    '/api': {\n      'target': 'http://api.host.com/',\n      'pathRewrite': { '^/api' : '' },\n    },\n  },\n")),(0,a.kt)("h2",{id:"runtimeconfig"},"runtimeConfig"),(0,a.kt)("p",null,"Set runtime variables which can be read on both server-side and client-side."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="shuvi.config.js"',title:'"shuvi.config.js"'},"export default {\n  runtimeConfig: {\n    staticFolder: '/static',\n    SOME_VALUE: process.env.SOME_VALUE\n  }\n}\n")),(0,a.kt)("p",null,"These runtimeConfig could be read via:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { getRuntimeConfig } from '@shuvi/app'\n\nconst { staticFolder } = getRuntimeConfig()\n// Will be available on both server-side and client-side\nconsole.log(staticFolder)\n\nexport default function MyImage() {\n  return (\n    <div>\n      <img src={`${staticFolder}/logo.png`} alt=\"logo\" />\n    </div>\n  )\n}\n")),(0,a.kt)("h2",{id:"rootdir"},"rootDir"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"string")),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"process.cwd()"))),(0,a.kt)("p",null,"Set root directory of the application."),(0,a.kt)("h2",{id:"router"},"router"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"object")),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{ history: 'auto' }"))),(0,a.kt)("p",null,"Set router options. There is one option ",(0,a.kt)("inlineCode",{parentName:"p"},"history")," indicates historyMode of the router."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="shuvi.config.js"',title:'"shuvi.config.js"'},"export default {\n  router: {\n    hisotry: 'auto', // 'auto' | 'browser' | 'hash'\n  },\n};\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"While ",(0,a.kt)("inlineCode",{parentName:"li"},"hisotry")," set to ",(0,a.kt)("inlineCode",{parentName:"li"},"auto"),", it will be ",(0,a.kt)("inlineCode",{parentName:"li"},"browser")," when ",(0,a.kt)("inlineCode",{parentName:"li"},"ssr")," is ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"hash")," when ",(0,a.kt)("inlineCode",{parentName:"li"},"ssr")," is ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,a.kt)("h2",{id:"routes"},"routes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"Route[]")),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"undefined"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export interface Route {\n  children?: Route[];\n  name?: string;\n  component?: string;      \n  middlewares?: string[];\n  redirect?: string;\n  path: string;\n  id?: string;\n}\n")),(0,a.kt)("p",null,"Specify page routes expicitly instead of using convention routing."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="shuvi.config.js"',title:'"shuvi.config.js"'},"export default {\n  routes: [\n    {\n      path: '/',\n      component: 'index',\n      children: [\n        { path: '/hello', redirect: '/path/to/hello' },\n        { path: '/user', component: 'user' },\n      ],\n    },\n  ],\n};\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"path")," will be resolved based on ",(0,a.kt)("inlineCode",{parentName:"p"},"src/pages")," directory."),(0,a.kt)("h2",{id:"apiroutes"},"apiRoutes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"ApiRoute[]")),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"undefined"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export interface ApiRoute {\n  path: string;\n  apiModule: string;\n}\n")),(0,a.kt)("p",null,"Specify api routes expicitly instead of using convention routing."),(0,a.kt)("h2",{id:"platform"},"platform"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"Platform[]")),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"{\n  name: 'web',\n  framework: 'react',\n  target: 'ssr'\n}\n")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export interface Platform {\n  name: string;\n  framework?: string;\n  target?: string;\n}\n")),(0,a.kt)("p",null,"Specify what platform and framework are used in this project.\nNeed to update."),(0,a.kt)("h2",{id:"target"},"target"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"'ssr'"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"'spa'")),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"undefined"))),(0,a.kt)("p",null,"If set, this options will be an alias of"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"{\n  name: 'web',\n  framework: 'react',\n  target\n}\n")),(0,a.kt)("h2",{id:"analyze"},"analyze"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"Boolean")),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"))),(0,a.kt)("p",null,"Set true to enable Webpack Bundle Analyzer."),(0,a.kt)("h2",{id:"experimental"},"experimental"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"Object")),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"undefined"))),(0,a.kt)("p",null,"Enable series of expermental features."),(0,a.kt)("h3",{id:"experimentalparcelcss"},"experimental.parcelCss"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"type: ",(0,a.kt)("inlineCode",{parentName:"li"},"Boolean"))),(0,a.kt)("p",null,"Set true to use parcel-css-loader"))}m.isMDXComponent=!0}}]);