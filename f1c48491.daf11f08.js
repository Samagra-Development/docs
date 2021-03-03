(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{245:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(1),r=a(9),o=(a(0),a(256)),c={id:"UCIGlossary",title:"Glossary",sidebar_label:"Glossary"},i={id:"UCIGlossary",title:"Glossary",description:"| S. No | Term | Definition |",source:"@site/docs/UCI - Glossary.md",permalink:"/docs/docs/UCIGlossary",editUrl:"https://github.com/Samagra-Development/docs/edit/master/docs/UCI - Glossary.md",sidebar_label:"Glossary",sidebar:"uciSidebar",next:{title:"APIAdapter",permalink:"/docs/docs/APIAdapter"}},l=[],b={rightToc:l};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"S. No"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Term"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Definition"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"User"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Any person or system that interacts with the bot.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"UCI"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Unified Communication Interface")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"3"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Bot"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A bot orchestrates a conversation with a specific conversation logic assigned to a set of users. A bot remembers the state of a conversation for a particular user. A bot object references user segment(s) and conversation logic(s).")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Conversation"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Any exchange of recorded messages between two parties (users or systems) is called a conversation.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"5"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Conversation Logic"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Conversation logic defines the control flow for a specific conversation. A conversation logic object references a sequence of transformers that will be applied to arrive at the final response at a specific point in the conversation, and the associated adapter config for this conversation logic. (e.g. XForm logic, translation into Hindi - both associated with a Whatsapp-Gupshup adapter)")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"6"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Communication Channel"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Any application or channel that allows users to connect with each other to exchange information. Examples of communication channels include (but not limited to), WhatsApp, SMS, Email, Slack, IVRS, Telegram.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"7"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Conversation Data"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"All the data that is generated as a result of the communication on the bot. User input data as well as bot responses are called as conversation data.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"8"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Service Provider"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Any public or private organization that provides the service of gathering the response from the Communication Application and transmits the same over standard API\u2019s to this Unified Communications Interface. Examples of service providers include (but not limited to) Gupshup, Twillo, Infobip, Netcore.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"9"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"User Registry (Local, Federated)"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A place (index, directory or registry) where users profile data is stored, this can be a local storage as part of the Communication bot or a federated storage at different databases.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"10"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Adapter"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"An adapter translates between messages received from communication channels on specific providers and the internal XMessage format.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"11"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Transformer"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A transformer is a stateless processing object that takes inputs and converts the input into a processed response. Transformers may in turn call external services if needed. For example - Open Data Kit (ODK)")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"12"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Register a bot"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"An API that allows users to register for a new bot.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"12"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Remote Data Repositories"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Any remote repositories (e.g. user db, content db or others) required in a conversation logic can be to be accessed .")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"13"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Standards"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"These are set of standards that are defined in this Unified Communication Interfaces. These standards are the guardians and helpers to ensure basic functioning and to some extent modularity.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"14"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Logs"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"All the inbound and outbound interactions that happen with the bot are captured and stored.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"15"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Admin Console"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"An application that is built to consume UCI APIs, to enable bot configuration and visualizations on top of UCI configuration and conversation data.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"16"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"XMPP - XMessage"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"This is a standard defined for the UCI ecosystem. Key objective of this is to make the internal functioning UCI, independent of external factors viz. Communication channel and service provider.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"17"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"XForms"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"XForms is an XML markup for a new generation of forms and form-like applications on the Web.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"18"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Role Based Access Control"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Role-based access control or role-based security is an approach to restricting system access to authorized users. Amongst other functions this restricts bot usage only to a allowed group of users.")))))}s.isMDXComponent=!0},256:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},d=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),d=s(a),m=n,u=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return a?r.a.createElement(u,i({ref:t},b,{components:a})):r.a.createElement(u,i({ref:t},b))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var b=2;b<o;b++)c[b]=a[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);