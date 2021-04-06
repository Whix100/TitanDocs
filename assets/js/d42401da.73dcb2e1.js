(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{80:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return r})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var i=t(3),o=t(7),s=(t(0),t(90)),a={title:"User Configs"},r={unversionedId:"user-config",id:"user-config",isDocsHomePage:!1,title:"User Configs",description:"Interacting with your user configs is done through the t!uconfig command. If you want to view your current configs, use the t!uconfig command with no arguments.",source:"@site/docs/user-config.md",slug:"/user-config",permalink:"/TitanDocs/docs/user-config",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/user-config.md",version:"current",sidebar:"docs",previous:{title:"Server Configs",permalink:"/TitanDocs/docs/server-config"},next:{title:"Frequently Asked Questions",permalink:"/TitanDocs/docs/faq"}},c=[{value:"Available Configs",id:"available-configs",children:[]},{value:"Settings Up Configs",id:"settings-up-configs",children:[]},{value:"Resetting Configs",id:"resetting-configs",children:[]}],u={toc:c};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(i.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Interacting with your user configs is done through the ",Object(s.b)("inlineCode",{parentName:"p"},"t!uconfig")," command. If you want to view your current configs, use the ",Object(s.b)("inlineCode",{parentName:"p"},"t!uconfig")," command with no arguments."),Object(s.b)("h2",{id:"available-configs"},"Available Configs"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Color (color): This is the color you want Titan to use in dms and in servers without a server color assigned."),Object(s.b)("li",{parentName:"ul"},"Can DM (can_dm): This is whether or not Titan is allowed to DM you."),Object(s.b)("li",{parentName:"ul"},"Can Mention (can_mention): This is whether or not Titan has permission to mention you in messages."),Object(s.b)("li",{parentName:"ul"},"Can Announce Birthday (can_announce_birthday): This is whether or not Titan has permission to announce your birthday in servers."),Object(s.b)("li",{parentName:"ul"},"Time Zone (time_zone): This is the time zone that Titan uses when displaying times in responses.")),Object(s.b)("h2",{id:"settings-up-configs"},"Settings Up Configs"),Object(s.b)("p",null,"To modify a server config, use the config command with the config id and the value you want it to have. Command formats for each config can be seen below."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"t!uconfig color <color>"),": Set the color you want Titan to use in dms and in servers without a server color assigned."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"t!uconfig can_dm <permission>"),": Set whether Titan is allowed to dm you. Some commands will not work properly if this is set to false. Allows true or false."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"t!uconfig can_mention <permission>"),": Set whether Titan is allowed to mention you in responses. Accepts true or false."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"t!uconfig can_announce_birthday <permission>"),": Set whether Titan can announce your birthday in servers that have birthday announcements setup. Accepts true or false."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"t!uconfig time_zone <time_zone>"),": Set what time zone Titan uses in responses. Please visit ",Object(s.b)("a",{parentName:"li",href:"https://kevinnovak.github.io/Time-Zone-Picker/"},"https://kevinnovak.github.io/Time-Zone-Picker/")," for help picking a time zone.")),Object(s.b)("h2",{id:"resetting-configs"},"Resetting Configs"),Object(s.b)("p",null,"You can reset a user config to its default value by using the command ",Object(s.b)("inlineCode",{parentName:"p"},"t!uconfig reset <config_id>"),". You could also instead of using a config id, use the command ",Object(s.b)("inlineCode",{parentName:"p"},"t!uconfig reset all")," to reset all of your configs to default values."))}l.isMDXComponent=!0}}]);