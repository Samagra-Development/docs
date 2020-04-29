(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{193:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(1),r=n(9),o=(n(0),n(222)),i={id:"AncillaryScreensModule",title:"Ancillary Screens Module",sidebar_label:"Ancillary Screens Module"},l={id:"AncillaryScreensModule",title:"Ancillary Screens Module",description:"## 1. Overview",source:"@site/docs/Ancillary Screens Module.md",permalink:"/docs/docs/AncillaryScreensModule",editUrl:"https://github.com/Samagra-Development/docs/edit/master/docs/Ancillary Screens Module.md",sidebar_label:"Ancillary Screens Module",sidebar:"someSidebar",previous:{title:"Form Management Module",permalink:"/docs/docs/FormManagementModule"},next:{title:"Profile Screens Module",permalink:"/docs/docs/AndroidProfileManagementModule"}},c=[{value:"1. Overview",id:"1-overview",children:[]},{value:"2. Setup Module In Starter App",id:"2-setup-module-in-starter-app",children:[{value:"2.1 Integrate Module",id:"21-integrate-module",children:[]},{value:"2.2 Start The Module",id:"22-start-the-module",children:[]},{value:"2.3 Use Elements of The Module",id:"23-use-elements-of-the-module",children:[]}]},{value:"3. FAQs",id:"3-faqs",children:[]}],s={rightToc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"1-overview"},"1. Overview"),Object(o.b)("p",null,"For any android app, it becomes imperative, as the usage increases and the features enhance, it is needed to provide an access control to the app. Hence, we developed a module, with certain UI modules which can be easily integrated with your app, to provide basic features which are to be generally present in almost every android application, which are Splash scree, Login Screen, Forgot Password and Reset password via OTP. The screens included in the Ancillary Screens Module are:"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"1.1 Splash Screen")),Object(o.b)("p",null,"User sees this activity in the fist time when app is launched."),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"https://media.giphy.com/media/Y2i2NPuqPXVsraOT5r/giphy.gif",alt:null}))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"1.2 Login Screen")),Object(o.b)("p",null,"User can login via user id and password, we are using FusionAuth for the management and authentication of users."),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"https://media.giphy.com/media/KbS5UlifRktNSOwhY5/giphy.gif",alt:null}))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"1.3 About Us Screen")),Object(o.b)("p",null,"Ability to confiure the title, icon and the description text of the About Us Screen"),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"https://media.giphy.com/media/dUC9M2a78pLyOx3boS/giphy.gif",alt:null}))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"1.4 Reset Password")),Object(o.b)("p",null,"User can reset the app password from the Login screen via OTP sent to his registered Mobile number"),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"https://media.giphy.com/media/IczhDEFjoH9Bf3jbBL/giphy.gif",alt:null}))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"1.5 Tutorials Screen")),Object(o.b)("p",null,"In order to guide the app user about the flow of app via Youtube video, you can configure those videos inside these screens by passing in your Youtube API Key and Video ID. You can also remotely configure the video IDs."),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"https://media.giphy.com/media/VJl5bEHCqoMZcsFnsS/giphy.gif",alt:null}))),Object(o.b)("h2",{id:"2-setup-module-in-starter-app"},"2. Setup Module In Starter App"),Object(o.b)("h3",{id:"21-integrate-module"},"2.1 Integrate Module"),Object(o.b)("p",null,"2.1.1 Unzip and Pre-set up"),Object(o.b)("p",null,"Unzip the github project to a folder. You can find the github repository at this ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Samagra-Development/mobile-ancillary-screens"}),"link"),". Download it as zip locally and then unzip the root directory. Launch Android Studio. Open the main project where you are to integrate these modules."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note: Please note that,before you start integrating the module into your project, please do get a run thorugh the demo project downloaded from the github repository, to understand the user flow.")),Object(o.b)("p",null,"2.1.2 Add the Module/Android Library"),Object(o.b)("p",null,"Note: This is applicable for any android module, you want to import."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"If you have not customworkmanager/commons module in the project, you would need to integrate these first sequentially, to integrate the ancillaryscreens module later, using the following steps.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Import the library module to your project (the library source becomes part of your project). Click File > New > Import Module")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Select the source directory of the Module you want to import and click Finish. The library module is copied to your project, so you can actually edit the library code.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Open the Dependencies tab.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click the (+) icon and select Module Dependency. Select the module and click Ok.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Open your build.gradle file and check that the module is now listed under dependencies.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Sync your gradle. Clean your project.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Please follow the same steps for the integration of ancillaryscreens module."))),Object(o.b)("p",null,"2.1.5 Edit settings.gradle"),Object(o.b)("p",null,"Make sure the library is listed at the top of your settings.gradle file, as shown here for a library named ':ancillaryscreens'. This means for other modules included as well."),Object(o.b)("p",null,"2.1.6 Verify Project level build.gradle"),Object(o.b)("p",null,"Open the app module's build.gradle file and add a new line to the dependencies block as shown in the following snippet:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'dependencies {\n    implementation project(":ancillaryscreens")\n}\n')),Object(o.b)("h3",{id:"22-start-the-module"},"2.2 Start The Module"),Object(o.b)("p",null,"Inside onCreate of Application class or Launcher Activity, in the manner as follows"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"AncillaryScreensDriver.init(this,\n                BASE_API_URL,\n                SEND_OTP_API_ENDPOINT,\n                RESET_PASSWORD_API_ENDPOINT,\n                APPLICATIO_ID);\n")),Object(o.b)("p",null,"The method signature of the initialisation invocation is as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"/**\n* \n* @param mainApplication - Instance of Application Class (Main Application, as you will see is an Interface implemented by\nApplication class)\n* @param BASE_API_URL - String (Base API URL for the Fusion Auth, to be later used for user authentication and user data related tasks.)\n* @param SEND_OTP_URL - String (API Endpoint to send OTP to the mobile number for resetting app password.)\n* @param RESET_PASSWORD_API_ENDPOINT - String (API Endpoint to post user data to reset App Password.)\n* @param APPLICATION_ID - String (Application ID sent for this app in Fusion Auth Backend.)\n*/\n public static void init(@NonNull MainApplication mainApplication, @NonNull String BASE_URL, \n                            @NonNull String SEND_OTP_URL,\n                            @NonNull String UPDATE_PASSWORD_URL, \n                            @NonNull String APPLICATION_ID) \n")),Object(o.b)("h3",{id:"23-use-elements-of-the-module"},"2.3 Use Elements of The Module"),Object(o.b)("p",null,"2.3.1 In order to make Splash Screen the launcher activity for your application, please add the following statement in the AndroidManifest.xml file of this module, if not present"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<activity\nandroid:name="com.samagra.ancillaryscreens.screens.splash.SplashActivity"\n        android:theme="@style/Theme.AppCompat.Light.NoActionBar">\n          <intent-filter>\n                <action android:name="android.intent.action.MAIN" />\n                <category android:name="android.intent.category.LAUNCHER" />\n                </intent-filter>\n                </activity>\n')),Object(o.b)("p",null,"2.3.2 Use Login Flow"),Object(o.b)("p",null,"The module comes in such a way that you won't need to do any config changes with respect to Login flow for the user. Same goes for the Change Password flow of the user."),Object(o.b)("p",null,"2.3.3 Use About Us Screen"),Object(o.b)("p",null,"To launch the About Us Screen from the module, use the following code:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"AncillaryScreensDriver.launchAboutActivity(context, aboutBundle);\n")),Object(o.b)("p",null,"Here, context is the Context Instance used to launch the About Us screen, AboutBundle is bundle object containing the information transferred to the Activity to render the UI. "),Object(o.b)("p",null,"2.3.4 Use Tutorials Screen",Object(o.b)("br",null),Object(o.b)("br",null)),Object(o.b)("p",null,"To launch the Tutorials Screen from the module, use the following code:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"AncillaryScreensDriver.launchTutorialsActivity(context, tutorialBundle);\n")),Object(o.b)("p",null,"Here, context is the Context Instance used to launch the Tutorials screen, tutorialBundle is bundle object containing the information transferred to the Activity to render the UI. It contains the video id and Youtube API Key "),Object(o.b)("p",null,"2.3.5  Communication"),Object(o.b)("p",null,"We are using RxBus to communicate back and forth with the main app module. Please refer to the SplashPresenter class of the downloaded project where we communicate back with the main app module to notify Login success and launching of home screen."),Object(o.b)("h2",{id:"3-faqs"},"3. FAQs"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"3.1 How to manage User Authentication?")),Object(o.b)("p",null,"We are using Fusion Auth for the authentication of users at the time of Login. Invoking to reset the app password is also done via. Fusion Auth. You can override the backend using any other Authentication service."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"3.2 How to set remotely configured data?")),Object(o.b)("p",null,"We generally use Firebase Remote Config for controlling remote data, but you can are free to use your own custom APIs to get the remote data."))}u.isMDXComponent=!0},222:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return n?r.a.createElement(m,l({ref:t},s,{components:n})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);