/*! For license information please see d589d3a7.3e248df4.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{168:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return d}));var i=n(1),a=n(11),o=(n(0),n(174)),r=n(188),c=n(187),l={id:"getting-started",title:"React Native Notifications Getting Started Guide",sidebar_label:"Getting Started"},s={id:"getting-started",title:"React Native Notifications Getting Started Guide",description:"Currently this guide is written for `react-native-notifications@^3.0.0`.  ",source:"@site/docs/getting-started.md",permalink:"/react-native-notifications/docs/getting-started",editUrl:"https://github.com/wix/react-native-notifications/edit/master/docs/docs/getting-started.md",sidebar_label:"Getting Started",sidebar:"docs",next:{title:"Push Notifications Subscription",permalink:"/react-native-notifications/docs/subscription"}},p=[{value:"Add react-native-notifications to your dependencies",id:"add-react-native-notifications-to-your-dependencies",children:[]},{value:"Link native dependencies",id:"link-native-dependencies",children:[{value:"iOS",id:"ios",children:[]},{value:"Android",id:"android",children:[]}]},{value:"Register for notification events",id:"register-for-notification-events",children:[]}],u={rightToc:p};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Currently this guide is written for ",Object(o.b)("inlineCode",{parentName:"p"},"react-native-notifications@^3.0.0"),".",Object(o.b)("br",{parentName:"p"}),"\n","We also assume you use ",Object(o.b)("inlineCode",{parentName:"p"},"react-native@60.x.x")," and above."),Object(o.b)("p",null,"For older versions, visit this ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/wix/react-native-notifications/blob/v2/docs/installation.md"}),"installation guide"),"."),Object(o.b)("h2",{id:"add-react-native-notifications-to-your-dependencies"},"Add react-native-notifications to your dependencies"),Object(o.b)(r.a,{defaultValue:"npm",values:[{label:"Npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-shell"}),"$ npm install --save react-native-notifications\n"))),Object(o.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-shell"}),"$ yarn add react-native-notifications\n")))),Object(o.b)("h2",{id:"link-native-dependencies"},"Link native dependencies"),Object(o.b)("h3",{id:"ios"},"iOS"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-shell"}),"$ pod install --project-directory=ios/\n")),Object(o.b)("p",null,"Add the following line at the top of your ",Object(o.b)("inlineCode",{parentName:"p"},"AppDelegate.m")),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-objectivec"}),'#import "RNNotifications.h"\n')),Object(o.b)("p",null,"Start monitor notifications in ",Object(o.b)("inlineCode",{parentName:"p"},"AppDelegate.m"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-objectivec"}),"- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {\n    [RNNotifications startMonitorNotifications]; // -> Add this line\n\n    return YES;\n}\n")),Object(o.b)("p",null,"And add the following methods to support registration to ",Object(o.b)("inlineCode",{parentName:"p"},"AppDelegate.m"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-objectivec"}),"- (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken {\n  [RNNotifications didRegisterForRemoteNotificationsWithDeviceToken:deviceToken];\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-objectivec"}),"- (void)application:(UIApplication *)application didFailToRegisterForRemoteNotificationsWithError:(NSError *)error {\n  [RNNotifications didFailToRegisterForRemoteNotificationsWithError:error];\n}\n")),Object(o.b)("h3",{id:"android"},"Android"),Object(o.b)("p",null,"For Android installation, please refer to the ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/react-native-notifications/docs/installation-android"}),"Android installation doc")," where you can find detailed step on how to start using Google's FCM service."),Object(o.b)("h2",{id:"register-for-notification-events"},"Register for notification events"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-jsx"}),"import React, { Component } from 'react';\nimport {Notifications} from 'react-native-notifications';\n\nclass MyComponent extends Component {\n  constructor(props) {\n    super(props);\n    Notifications.registerRemoteNotifications();\n\n    Notifications.events().registerNotificationReceivedForeground((notification: Notification, completion) => {\n      console.log(`Notification received in foreground: ${notification.title} : ${notification.body}`);\n      completion({alert: false, sound: false, badge: false});\n    });\n\n    Notifications.events().registerNotificationOpened((notification: Notification, completion) => {\n      console.log(`Notification opened: ${notification.payload}`);\n      completion();\n    });\n  }\n}\n")),Object(o.b)("p",null,"Next, check out the ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"general-api.md"}),"API Reference"),"."))}d.isMDXComponent=!0},174:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var i=n(0),a=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=i,f=u["".concat(r,".").concat(b)]||u[b]||d[b]||o;return n?a.a.createElement(f,c({ref:t},s,{components:n})):a.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var s=2;s<o;s++)r[s]=n[s];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},176:function(e,t,n){var i;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var o=typeof i;if("string"===o||"number"===o)e.push(i);else if(Array.isArray(i)&&i.length){var r=a.apply(null,i);r&&e.push(r)}else if("object"===o)for(var c in i)n.call(i,c)&&i[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(i=function(){return a}.apply(t,[]))||(e.exports=i)}()},180:function(e,t,n){"use strict";var i=n(0),a=Object(i.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});t.a=a},187:function(e,t,n){"use strict";var i=n(0),a=n.n(i);t.a=function(e){return a.a.createElement("div",null,e.children)}},188:function(e,t,n){"use strict";n(85),n(84),n(86),n(34),n(22),n(23);var i=n(0),a=n.n(i),o=n(180);var r=function(){return Object(i.useContext)(o.a)},c=n(176),l=n.n(c),s=n(143),p=n.n(s),u=37,d=39;t.a=function(e){var t=e.block,n=e.children,o=e.defaultValue,c=e.values,s=e.groupId,b=r(),f=b.tabGroupChoices,m=b.setTabGroupChoices,v=Object(i.useState)(o),O=v[0],g=v[1];if(null!=s){var j=f[s];null!=j&&j!==O&&g(j)}var h=function(e){g(e),null!=s&&m(s,e)},y=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:l()("tabs",{"tabs--block":t})},c.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":O===t,className:l()("tab-item",p.a.tabItem,{"tab-item--active":O===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case d:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(y,e.target,e)},onFocus:function(){return h(t)},onClick:function(){return h(t)}},n)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},i.Children.toArray(n).filter((function(e){return e.props.value===O}))[0]))}}}]);