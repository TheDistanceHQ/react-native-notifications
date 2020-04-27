(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{164:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return a})),i.d(t,"metadata",(function(){return c})),i.d(t,"rightToc",(function(){return l})),i.d(t,"default",(function(){return d}));var n=i(1),o=i(11),r=(i(0),i(174)),a={id:"general-events",title:"General",sidebar_label:"General"},c={id:"general-events",title:"General",description:"## registerRemoteNotificationsRegistered()",source:"@site/api/general-events.md",permalink:"/react-native-notifications/api/general-events",editUrl:"https://github.com/wix/react-native-notifications/edit/master/api/api/general-events.md",sidebar_label:"General",sidebar:"docs",previous:{title:"iOS Specific Commands",permalink:"/react-native-notifications/api/ios-api"},next:{title:"iOS",permalink:"/react-native-notifications/api/ios-events"}},l=[{value:"registerRemoteNotificationsRegistered()",id:"registerremotenotificationsregistered",children:[]},{value:"registerNotificationReceivedForeground()",id:"registernotificationreceivedforeground",children:[]},{value:"registerNotificationReceivedBackground()",id:"registernotificationreceivedbackground",children:[]},{value:"registerNotificationOpened()",id:"registernotificationopened",children:[]},{value:"registerRemoteNotificationsRegistrationFailed()",id:"registerremotenotificationsregistrationfailed",children:[]}],s={rightToc:l};function d(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"registerremotenotificationsregistered"},"registerRemoteNotificationsRegistered()"),Object(r.b)("p",null,"Fired when the user registers for remote notifications. The handler will be invoked with an event holding the hex string representing the ",Object(r.b)("inlineCode",{parentName:"p"},"deviceToken")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"Notifications.events().registerRemoteNotificationsRegistered((event: Registered) => {\n  console.log(event.deviceToken);\n});\n")),Object(r.b)("h2",{id:"registernotificationreceivedforeground"},"registerNotificationReceivedForeground()"),Object(r.b)("p",null,"Fired when a remote notification is received in foreground state. The handler will be invoked with an instance of ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"notification-obj"}),"Notification"),".\nShould call completion function on iOS, will be ignored on Android."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"Notifications.events().registerNotificationReceivedForeground((notification: Notification, completion: (response: NotificationCompletion) => void) => {\n  console.log(JSON.stringify(notification.payload));\n\n  // Calling completion on iOS with `alert: true` will present the native iOS inApp notification.\n  completion({alert: true, sound: true, badge: false});\n});\n")),Object(r.b)("h2",{id:"registernotificationreceivedbackground"},"registerNotificationReceivedBackground()"),Object(r.b)("p",null,"Fired when a remote notification is received in background state. The handler will be invoked with an instance of ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"notification-obj"}),"Notification"),".\nShould call completion function on iOS, will be ignored on Android."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"Notifications.events().registerNotificationReceivedBackground((notification: Notification, completion: (response: NotificationCompletion) => void) => {\n  console.log(JSON.stringify(notification.payload));\n\n  // Calling completion on iOS with `alert: true` will present the native iOS inApp notification.\n  completion({alert: true, sound: true, badge: false});\n});\n")),Object(r.b)("p",null,"To receive background notifications on iOS follow ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/pushing_background_updates_to_your_app"}),"this guide")),Object(r.b)("h2",{id:"registernotificationopened"},"registerNotificationOpened()"),Object(r.b)("p",null,"Fired when a remote notification is opened from dead or background state. The handler will be invoked with an instance of ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"notification-obj"}),"Notification"),".\nShould call completion function on iOS, will be ignored on Android."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"Notifications.events().registerNotificationOpened((notification: Notification, completion: () => void) => {\n  console.log(JSON.stringify(notification.payload));\n  completion();\n});\n")),Object(r.b)("h2",{id:"registerremotenotificationsregistrationfailed"},"registerRemoteNotificationsRegistrationFailed()"),Object(r.b)("p",null,"Fired when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. The handler will be invoked with {localizedDescription: string, code: string, domain: string}."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"Notifications.events().registerRemoteNotificationsRegistrationFailed((event: RegistrationError) => {\n  console.log(event.code, event.localizedDescription, event.domain);\n});\n")))}d.isMDXComponent=!0},174:function(e,t,i){"use strict";i.d(t,"a",(function(){return p})),i.d(t,"b",(function(){return b}));var n=i(0),o=i.n(n);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function c(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var s=o.a.createContext({}),d=function(e){var t=o.a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):c({},t,{},e)),i},p=function(e){var t=d(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(i),u=n,b=p["".concat(a,".").concat(u)]||p[u]||f[u]||r;return i?o.a.createElement(b,c({ref:t},s,{components:i})):o.a.createElement(b,c({ref:t},s))}));function b(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,a=new Array(r);a[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var s=2;s<r;s++)a[s]=i[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,i)}u.displayName="MDXCreateElement"}}]);