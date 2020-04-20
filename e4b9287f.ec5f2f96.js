(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{194:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(1),r=n(9),o=(n(0),n(202)),i={id:"GettingStartedMobileComponent",title:"Getting Started with Samargra Mobile App Package",sidebar_label:"Getting Started"},l={id:"GettingStartedMobileComponent",title:"Getting Started with Samargra Mobile App Package",description:"## What to expect from the tutorial",source:"@site/docs/Getting Started.md",permalink:"/docs/docs/GettingStartedMobileComponent",editUrl:"https://github.com/Samagra-Development/docs/edit/master/docs/Getting Started.md",sidebar_label:"Getting Started",sidebar:"someSidebar",previous:{title:"Component Overview (Mobile Application)",permalink:"/docs/docs/COMobileApplication"},next:{title:"Form Management Module",permalink:"/docs/docs/FormManagementModule"}},c=[{value:"What to expect from the tutorial",id:"what-to-expect-from-the-tutorial",children:[]},{value:"Getting familiar with the basics",id:"getting-familiar-with-the-basics",children:[]},{value:"Setting up Samagra Android starter App",id:"setting-up-samagra-android-starter-app",children:[]},{value:"Configuring Home Screen",id:"configuring-home-screen",children:[]}],p={rightToc:c};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"what-to-expect-from-the-tutorial"},"What to expect from the tutorial"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Attached video link for full-fledged application.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Link to executable file for the same.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Link to the code repository containing (codes for different modules, a coupled together app and a starter app)."))),Object(o.b)("h2",{id:"getting-familiar-with-the-basics"},"Getting familiar with the basics"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"The Android app to be developed along the lines of this document is a modular app, developed with different modules, with a main module and different child modules attached to it.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"In order to start up with the development, we would like to recommend giving a read through the basic tutorial on how to build and run a basic android app via this ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.android.com/training/basics/firstapp"}),"link"),".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Note: In all the modules, you would come across a commons module. This module contains common functionalities that can be used by all the modules rather than duplicating the code along the modules."))),Object(o.b)("h2",{id:"setting-up-samagra-android-starter-app"},"Setting up Samagra Android starter App"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Unzip the github project to a folder. You can find the github repository at this link. (Insert repo. link here). Download it as zip locally and then unzip the root directory.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Launch Android Studio. Go to File -> New -> Import Project.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Choose the specific project you want to import and then click Next->Finish. It will build the Gradle automatically and'll be ready for you to use.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"The starter app, basically provides a skeleton app to integrate with modules mentioned ahead. The skeleton app UI looks like the screenshot attached on the right side. ",Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"https://lh3.googleusercontent.com/xOtDvkRhN5DlhkBK8lW8QkIk5mc0vMMtcBCcre7as6pLhO8Af2mZFqf2UKH-plbCjUp-yU5YDRPCuinuZi8Oj8wrAoypMrIdSc6S4LPN9jPAu8KbI1fKdSoBqCsp_6yiijcMKaQM",alt:null}))," '"))),Object(o.b)("h2",{id:"configuring-home-screen"},"Configuring Home Screen"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"As you will install and run the app, you will see that the home screen icons, when clicked just show a snackbar.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"This is intended to just show the functionality of MVP design pattern, where click action is listened to by the View and then the action is handled by the presenter.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"You can configure the home screen to redirect the user to the modules which will be discussed ahead. The steps would also be discussed in the further part of the document."))))}d.isMDXComponent=!0},202:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),d=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},s=function(e){var t=d(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=d(n),u=a,m=s["".concat(i,".").concat(u)]||s[u]||b[u]||o;return n?r.a.createElement(m,l({ref:t},p,{components:n})):r.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);