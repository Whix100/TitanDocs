(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{82:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return u}));var i=t(3),o=t(7),r=(t(0),t(91)),a={title:"Config Module"},s={unversionedId:"command-modules/config",id:"command-modules/config",isDocsHomePage:!1,title:"Config Module",description:"Server Configs",source:"@site/docs/command-modules/config.md",slug:"/command-modules/config",permalink:"/TitanDocs/docs/command-modules/config",editUrl:"https://github.com/Whix100/TitanDocs/docs/command-modules/config.md",version:"current",sidebar:"docs",previous:{title:"User Configs",permalink:"/TitanDocs/docs/user-config"},next:{title:"Event Announcements Module",permalink:"/TitanDocs/docs/command-modules/event-announcements"}},c=[{value:"Server Configs",id:"server-configs",children:[{value:"Setting Configs",id:"setting-configs",children:[]},{value:"Resetting Configs",id:"resetting-configs",children:[]},{value:"Updating Channel Permissions",id:"updating-channel-permissions",children:[]}]},{value:"User Configs",id:"user-configs",children:[{value:"Settings Configs",id:"settings-configs",children:[]},{value:"Resetting Configs",id:"resetting-configs-1",children:[]}]}],l={toc:c};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"server-configs"},"Server Configs"),Object(r.b)("h3",{id:"setting-configs"},"Setting Configs"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"t!config prefix <prefix>"),": Assign the prefix you want Titan to use."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"t!config color <color>"),": Set the color you want Titan to use in this server. Currently supports color names and hexcodes. Accepts color name or hex code."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"t!config admin_role <role>"),": Set the role that Titan uses to determine who are the administrators of the server."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"t!config muted_role <role>"),": Set the role that prevents users from speaking and sending messages."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"t!config time_zone <time_zone>"),": Set what time zone Titan uses in responses in the server. Please visit ",Object(r.b)("a",{parentName:"li",href:"https://kevinnovak.github.io/Time-Zone-Picker/"},"https://kevinnovak.github.io/Time-Zone-Picker/")," for help picking a time zone."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"t!config force_server_time <permission>"),": Set whether Titan uses the server's time zone even if a user has their own time zone set. Accepts true or false.")),Object(r.b)("h3",{id:"resetting-configs"},"Resetting Configs"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"t!uconfig reset <config>"),": Reset a user config to its default value or reset all of them by using the all argument.")),Object(r.b)("h3",{id:"updating-channel-permissions"},"Updating Channel Permissions"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"t!update_channel_permissions"),": Update the permissions of all of the channels to match the muted roles permissions.")),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"If you want Titan to not modify a channel's permissions, update Titan's permissions for that channel so thatnit doesn't have the Manage Channel permission or the View Channel Permission."))),Object(r.b)("h2",{id:"user-configs"},"User Configs"),Object(r.b)("h3",{id:"settings-configs"},"Settings Configs"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"t!uconfig color <color>"),": Set the color you want Titan to use in dms and in servers without a server color assigned."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"t!uconfig can_dm <permission>"),": Set whether Titan is allowed to dm you. Some commands will not work properly if this is set to false. Allows true or false."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"t!uconfig can_mention <permission>"),": Set whether Titan is allowed to mention you in responses. Accepts true or false."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"t!uconfig can_announce_birthday <permission>"),": Set whether Titan can announce your birthday in servers that have birthday announcements setup. Accepts true or false."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"t!uconfig time_zone <time_zone>"),": Set what time zone Titan uses in responses. Please visit ",Object(r.b)("a",{parentName:"li",href:"https://kevinnovak.github.io/Time-Zone-Picker/"},"https://kevinnovak.github.io/Time-Zone-Picker/")," for help picking a time zone.")),Object(r.b)("h3",{id:"resetting-configs-1"},"Resetting Configs"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"t!uconfig reset <config>"),": Reset a user config to its default value or reset all of them by using the all argument.")))}u.isMDXComponent=!0},91:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return d}));var i=t(0),o=t.n(i);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),u=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=u(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=u(t),b=i,d=m["".concat(a,".").concat(b)]||m[b]||p[b]||r;return t?o.a.createElement(d,s(s({ref:n},l),{},{components:t})):o.a.createElement(d,s({ref:n},l))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,a=new Array(r);a[0]=b;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<r;l++)a[l]=t[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);