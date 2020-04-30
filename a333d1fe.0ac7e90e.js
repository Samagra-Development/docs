(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{191:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return m}));var a=r(1),n=r(9),o=(r(0),r(223)),i={id:"chooseodk",title:"Why We Chose OpenDataKit?",author:"Umang Bhola",author_title:"Technology @Samagra",author_url:"https://www.linkedin.com/in/sukhpreetsekhon/",author_image_url:"https://avatars1.githubusercontent.com/u/2055384?v=4",tags:["govt engineers","govt product managers"]},s={permalink:"/docs/blog/chooseodk",source:"@site/blog/2020-05-05-odk.md",description:"```",date:"2020-05-05T00:00:00.000Z",tags:[{label:"govt engineers",permalink:"/docs/blog/tags/govt-engineers"},{label:"govt product managers",permalink:"/docs/blog/tags/govt-product-managers"}],title:"Why We Chose OpenDataKit?",truncated:!0,nextItem:{title:"Democratizing Technology Product Development for Governments",permalink:"/docs/blog/ourjourney"}},c=[{value:"Subscribe to this series",id:"subscribe-to-this-series",children:[]}],l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},p=l("Figure"),u=l("Mermaid"),b={rightToc:c};function m(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"import Figure from '../src/components/Figure'\nimport Mermaid from '../src/components/Mermaid'\nimport CustomCodeBlock from '../src/components/CustomCodeBlock'\nimport * as Snippets from '../support/blogBasicSlackClone'\n")),Object(o.b)("p",null,"This is the first of a multi-part series that will show you how to build a simple Slack clone."),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/supabase/supabase/blob/master/examples/slack-clone-basic/README.md"}),"Full code")," | ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://eepurl.com/gPWkwn"}),"Subscribe")),Object(o.b)(p,{src:"https://media.giphy.com/media/J07U8iblJhlKDqZOxV/source.gif",alt:"Slack Clone",caption:"A simple Next.js app that reacts to changes in your Postgres database.",mdxType:"Figure"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/blog/2020/04/03/basic-slack-clone-react-hooks"}),"Building a basic Slack clone with Postgres and React Hooks")),Object(o.b)("li",{parentName:"ul"},"Building a Slack backend ","[COMING SOON]"),Object(o.b)("li",{parentName:"ul"},"Building a Slack frontend ","[COMING SOON]"),Object(o.b)("li",{parentName:"ul"},"Adding realtime functionality ","[COMING SOON]")),Object(o.b)("p",null,"Throughout the series you'll learn how to use four amazing technologies that scale up to production-ready realtime applications:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.postgresql.org"}),"PostgreSQL")," - an extremely scalable relational database"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://supabase.io"}),"Supabase")," - a JS wrapper for Postgres for instant realtime and RESTful APIs"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://nextjs.org/"}),"Next.js")," - a JS framework for building server-rendered React apps"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://tailwindcss.com/"}),"Tailwind")," - a CSS framework for quickly styling our frontend app")),Object(o.b)(u,{caption:"Supabase listens to Postgres and sends all changes to Next.js. Tailwind makes our apps look great.",graph:"graph LR Supabase(Supabase) Postgres(PostgreSQL) NextJs(Next.js) Tailwind(Tailwind) Supabase--\x3eNextJs--\x3eSupabase Postgres--\x3eSupabase--\x3ePostgres NextJs-.-Tailwind subgraph Frontend NextJs Tailwind end subgraph Backend Postgres Supabase end",mdxType:"Mermaid"}),Object(o.b)("h2",{id:"subscribe-to-this-series"},"Subscribe to this series"),Object(o.b)("p",null,"Make sure you ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://eepurl.com/gPWkwn"}),"subscribe to our newsletter")," if you want to get notified when we release the next post in this series."))}m.isMDXComponent=!0},223:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s({},t,{},e)),r},u=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||o;return r?n.a.createElement(d,s({ref:t},l,{components:r})):n.a.createElement(d,s({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);