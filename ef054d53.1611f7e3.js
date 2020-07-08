(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{225:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(1),a=r(9),i=(r(0),r(233)),o={id:"PDFModuleArchitecture",title:"Architecture",sidebar_label:"Architecture"},s={id:"PDFModuleArchitecture",title:"Architecture",description:"## 1. Overview",source:"@site/docs/PDF Module - Guides - Architecture.md",permalink:"/docs/docs/PDFModuleArchitecture",editUrl:"https://github.com/Samagra-Development/docs/edit/master/docs/PDF Module - Guides - Architecture.md",sidebar_label:"Architecture",sidebar:"someSidebar",previous:{title:"Building A Plugin",permalink:"/docs/docs/PDFBuildAPlugin"},next:{title:"Conversations & Alerts",permalink:"/docs/docs/COConversations"}},c=[{value:"1. Overview",id:"1-overview",children:[]},{value:"2. What are these things?",id:"2-what-are-these-things",children:[]},{value:"3. FAQs",id:"3-faqs",children:[]},{value:"4. Coming Soon",id:"4-coming-soon",children:[]}],l={rightToc:c};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"1-overview"},"1. Overview"),Object(i.b)("p",null,"The following diagram illustrates the overall architecture of PDF Builder solution that allows various applications to interact with the PDF Builder solution to send requests and retrieve outputs."),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://i.ibb.co/NSk5p2H/Architecture-Diagram-PDF-Builder.png",alt:"enter image description here"}))),Object(i.b)("h2",{id:"2-what-are-these-things"},"2. What are these things?"),Object(i.b)("p",null,"A brief description of the function of each element of the architecture is provided below."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"External Application"),": This is the exit part of the application. This could be any mobile application, server or publishing platform that searches pdf status and retrieves them async.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Auth Server"),": It issues tokens to users verifies whether request is made to the srever is a verified request or not.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"PDF Server"),": This is a simple server that authorises the request from any external application and returns the valid PDFs for that API request. This is essesntiallyt the interface to the outside world. It opens up APIs to the outputs of the PDF builder.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Queue Manager"),": It does all the heavy lifting by actually running all the code to generate the PDF. Without this everything else is just a code layer.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Database"),": It saves requested data and and progress of pdf generation process and if pdf is generated then it\u2019s path is save.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Plugin"),": This is more an application specific code. It has information on how to get the data from an external resourse, how to modifiy a particular resource and how to manage the outputs.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"PDF Base"),": The glue that holds them all. Manages the queue system, has interfaces to the plugin system, checks for authenticity of a plugin.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Logging Module"),": This module is responsible for getting the logs from all the other modules and pass this data to central logging system.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Central Logging System"),": All logs are then subsequently sent to a central logging system where they are archived, processed and monitored."))),Object(i.b)("h2",{id:"3-faqs"},"3. FAQs"),Object(i.b)("p",null,"To be added based on incoming feedback"),Object(i.b)("h2",{id:"4-coming-soon"},"4. Coming Soon"),Object(i.b)("p",null,"Please review the following section to get information about planned updates to this module."))}u.isMDXComponent=!0},233:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s({},t,{},e)),r},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,h=p["".concat(o,".").concat(d)]||p[d]||b[d]||i;return r?a.a.createElement(h,s({ref:t},l,{components:r})):a.a.createElement(h,s({ref:t},l))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);