(self.webpackChunktitan_docs=self.webpackChunktitan_docs||[]).push([[514,75],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),p=a,h=m["".concat(c,".").concat(p)]||m[p]||d[p]||o;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2088:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return we}});var r=n(7294),a=n(3905),o=n(6291),l=n(6698),i=n(6010),c=n(941),s=n(3783),u=n(7898),d=n(5537),m=n(7462),p=function(e){return r.createElement("svg",(0,m.Z)({width:"20",height:"20","aria-hidden":"true"},e),r.createElement("g",{fill:"#7a7a7a"},r.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),r.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},h=n(4973),f=n(3366),y=n(6742),g=n(3919),b=n(8617),v="menuLinkText_1J2g",E=["items"],k=["item"],C=["item","onItemClick","activePath"],Z=["item","onItemClick","activePath"],N=function e(t,n){return"link"===t.type?(0,c.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},T=(0,r.memo)((function(e){var t=e.items,n=(0,f.Z)(e,E);return r.createElement(r.Fragment,null,t.map((function(e,t){return r.createElement(_,(0,m.Z)({key:t,item:e},n))})))}));function _(e){var t=e.item,n=(0,f.Z)(e,k);return"category"===t.type?0===t.items.length?null:r.createElement(S,(0,m.Z)({item:t},n)):r.createElement(j,(0,m.Z)({item:t},n))}function S(e){var t,n=e.item,a=e.onItemClick,o=e.activePath,l=(0,f.Z)(e,C),s=n.items,u=n.label,d=n.collapsible,p=N(n,o),h=(0,c.uR)({initialState:function(){return!!d&&(!p&&n.collapsed)}}),y=h.collapsed,g=h.setCollapsed,b=h.toggleCollapsed;return function(e){var t=e.isActive,n=e.collapsed,a=e.setCollapsed,o=(0,c.D9)(t);(0,r.useEffect)((function(){t&&!o&&n&&a(!1)}),[t,o,n])}({isActive:p,collapsed:y,setCollapsed:g}),r.createElement("li",{className:(0,i.Z)(c.kM.docs.docSidebarItemCategory,"menu__list-item",{"menu__list-item--collapsed":y})},r.createElement("a",(0,m.Z)({className:(0,i.Z)("menu__link",(t={"menu__link--sublist":d,"menu__link--active":d&&p},t[v]=!d,t)),onClick:d?function(e){e.preventDefault(),b()}:void 0,href:d?"#":void 0},l),u),r.createElement(c.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:y},r.createElement(T,{items:s,tabIndex:y?-1:0,onItemClick:a,activePath:o})))}function j(e){var t=e.item,n=e.onItemClick,a=e.activePath,o=(0,f.Z)(e,Z),l=t.href,s=t.label,u=N(t,a);return r.createElement("li",{className:(0,i.Z)(c.kM.docs.docSidebarItemLink,"menu__list-item"),key:s},r.createElement(y.Z,(0,m.Z)({className:(0,i.Z)("menu__link",{"menu__link--active":u}),"aria-current":u?"page":void 0,to:l},(0,g.Z)(l)&&{onClick:n},o),(0,g.Z)(l)?s:r.createElement("span",null,s,r.createElement(b.Z,null))))}var x="sidebar_15mo",O="sidebarWithHideableNavbar_267A",P="sidebarHidden_2kNb",w="sidebarLogo_3h0W",I="menu_Bmed",B="menuWithAnnouncementBar_2WvA",L="collapseSidebarButton_1CGd",D="collapseSidebarButtonIcon_3E-R";function M(e){var t=e.onClick;return r.createElement("button",{type:"button",title:(0,h.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,h.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,i.Z)("button button--secondary button--outline",L),onClick:t},r.createElement(p,{className:D}))}function A(e){var t,n,a=e.path,o=e.sidebar,l=e.onCollapse,s=e.isHidden,m=function(){var e=(0,c.nT)().isClosed,t=(0,r.useState)(!e),n=t[0],a=t[1];return(0,u.Z)((function(t){var n=t.scrollY;e||a(0===n)})),n}(),p=(0,c.LU)(),h=p.navbar.hideOnScroll,f=p.hideableSidebar,y=(0,c.nT)().isClosed;return r.createElement("div",{className:(0,i.Z)(x,(t={},t[O]=h,t[P]=s,t))},h&&r.createElement(d.Z,{tabIndex:-1,className:w}),r.createElement("nav",{className:(0,i.Z)("menu thin-scrollbar",I,(n={},n[B]=!y&&m,n))},r.createElement("ul",{className:(0,i.Z)(c.kM.docs.docSidebarMenu,"menu__list")},r.createElement(T,{items:o,activePath:a}))),f&&r.createElement(M,{onClick:l}))}var F=function(e){var t=e.toggleSidebar,n=e.sidebar,a=e.path;return r.createElement("ul",{className:(0,i.Z)(c.kM.docs.docSidebarMenu,"menu__list")},r.createElement(T,{items:n,activePath:a,onItemClick:function(){return t()}}))};function R(e){return r.createElement(c.Cv,{component:F,props:e})}var H=r.memo(A),W=r.memo(R);function z(e){var t=(0,s.Z)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return r.createElement(r.Fragment,null,n&&r.createElement(H,e),a&&r.createElement(W,e))}var U=n(9105),V={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},Y={Prism:n(7410).default,theme:V};function $(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function J(){return J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},J.apply(this,arguments)}var K=/\r\n|\r|\n/,G=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},X=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},q=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=J({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=J({},n,{backgroundColor:null}),a};function Q(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var ee=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),$(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?q(e.theme,e.language):void 0;return t.themeDict=n})),$(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=J({},Q(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==a&&(o.style=void 0!==o.style?J({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),$(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var l=r?{display:"inline-block"}:{},i=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(i))}})),$(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,l=J({},Q(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(l.style=void 0!==l.style?J({},l.style,a):a),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),$(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var o=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,l=0,i=[],c=[i];l>-1;){for(;(o=r[l]++)<a[l];){var s=void 0,u=t[l],d=n[l][o];if("string"==typeof d?(u=l>0?u:["plain"],s=d):(u=X(u,d.type),d.alias&&(u=X(u,d.alias)),s=d.content),"string"==typeof s){var m=s.split(K),p=m.length;i.push({types:u,content:m[0]});for(var h=1;h<p;h++)G(i),c.push(i=[]),i.push({types:u,content:m[h]})}else l++,t.push(u),n.push(s),r.push(0),a.push(s.length)}l--,t.pop(),n.pop(),r.pop(),a.pop()}return G(i),c}(void 0!==l?this.tokenize(t,r,l,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),te=ee;var ne=n(7594),re=n.n(ne),ae={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},oe=n(5350),le=function(){var e=(0,c.LU)().prism,t=(0,oe.Z)().isDarkTheme,n=e.theme||ae,r=e.darkTheme||n;return t?r:n},ie="codeBlockContainer_K1bP",ce="codeBlockContent_hGly",se="codeBlockTitle_eoMF",ue="codeBlock_23N8",de="copyButton_Ue-o",me="codeBlockLines_39YC",pe=/{([\d,-]+)}/,he=["js","jsBlock","jsx","python","html"],fe={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},ye=["highlight-next-line","highlight-start","highlight-end"],ge=function(e){void 0===e&&(e=he);var t=e.map((function(e){var t=fe[e],n=t.start,r=t.end;return"(?:"+n+"\\s*("+ye.join("|")+")\\s*"+r+")"})).join("|");return new RegExp("^\\s*(?:"+t+")\\s*$")};function be(e){var t=e.children,n=e.className,a=e.metastring,o=e.title,l=(0,c.LU)().prism,s=(0,r.useState)(!1),u=s[0],d=s[1],p=(0,r.useState)(!1),f=p[0],y=p[1];(0,r.useEffect)((function(){y(!0)}),[]);var g=(0,c.bc)(a)||o,b=(0,r.useRef)(null),v=[],E=le(),k=Array.isArray(t)?t.join(""):t;if(a&&pe.test(a)){var C=a.match(pe)[1];v=re()(C).filter((function(e){return e>0}))}var Z=null==n?void 0:n.replace(/language-/,"");!Z&&l.defaultLanguage&&(Z=l.defaultLanguage);var N=k.replace(/\n$/,"");if(0===v.length&&void 0!==Z){for(var T,_="",S=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return ge(["js","jsBlock"]);case"jsx":case"tsx":return ge(["js","jsBlock","jsx"]);case"html":return ge(["js","jsBlock","html"]);case"python":case"py":return ge(["python"]);default:return ge()}}(Z),j=k.replace(/\n$/,"").split("\n"),x=0;x<j.length;){var O=x+1,P=j[x].match(S);if(null!==P){switch(P.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":_+=O+",";break;case"highlight-start":T=O;break;case"highlight-end":_+=T+"-"+(O-1)+","}j.splice(x,1)}else x+=1}v=re()(_),N=j.join("\n")}var w=function(){!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),r=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const a=document.getSelection();let o=!1;a.rangeCount>0&&(o=a.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch{}n.remove(),o&&(a.removeAllRanges(),a.addRange(o)),r&&r.focus()}(N),d(!0),setTimeout((function(){return d(!1)}),2e3)};return r.createElement(te,(0,m.Z)({},Y,{key:String(f),theme:E,code:N,language:Z}),(function(e){var t=e.className,n=e.style,a=e.tokens,o=e.getLineProps,l=e.getTokenProps;return r.createElement("div",{className:ie},g&&r.createElement("div",{style:n,className:se},g),r.createElement("div",{className:(0,i.Z)(ce,Z)},r.createElement("pre",{tabIndex:0,className:(0,i.Z)(t,ue,"thin-scrollbar"),style:n},r.createElement("code",{className:me},a.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=o({line:e,key:t});return v.includes(t+1)&&(n.className+=" docusaurus-highlight-code-line"),r.createElement("span",(0,m.Z)({key:t},n),e.map((function(e,t){return r.createElement("span",(0,m.Z)({key:t},l({token:e,key:t})))})))})))),r.createElement("button",{ref:b,type:"button","aria-label":(0,h.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,i.Z)(de,"clean-btn"),onClick:w},u?r.createElement(h.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.createElement(h.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}var ve=n(6159),Ee="details_1VDD";function ke(e){var t=Object.assign({},e);return r.createElement(c.PO,(0,m.Z)({},t,{className:(0,i.Z)("alert alert--info",Ee,t.className)}))}var Ce=["mdxType","originalType"];var Ze={head:function(e){var t=r.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var a=e.props,o=(a.mdxType,a.originalType,(0,f.Z)(a,Ce));return r.createElement(e.props.originalType,o)}return e}(e)}));return r.createElement(U.Z,e,t)},code:function(e){var t=e.children;return(0,r.isValidElement)(t)?t:t.includes("\n")?r.createElement(be,e):r.createElement("code",e)},a:function(e){return r.createElement(y.Z,e)},pre:function(e){var t,n=e.children;return(0,r.isValidElement)(n)&&(0,r.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?n.props.children:r.createElement(be,(0,r.isValidElement)(n)?null==n?void 0:n.props:Object.assign({},e))},details:function(e){var t=r.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),a=r.createElement(r.Fragment,null,t.filter((function(e){return e!==n})));return r.createElement(ke,(0,m.Z)({},e,{summary:n}),a)},h1:(0,ve.Z)("h1"),h2:(0,ve.Z)("h2"),h3:(0,ve.Z)("h3"),h4:(0,ve.Z)("h4"),h5:(0,ve.Z)("h5"),h6:(0,ve.Z)("h6")},Ne=n(4608),Te=n(5977),_e="backToTopButton_35hR",Se="backToTopButtonShow_18ls";function je(){var e=(0,r.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var xe=function(){var e,t=(0,Te.TH)(),n=je(),a=n.smoothScrollTop,o=n.cancelScrollToTop,l=(0,r.useState)(!1),c=l[0],s=l[1];return(0,u.Z)((function(e,t){var n=e.scrollY;if(t){var r=n<t.scrollY;if(r||o(),n<300)s(!1);else if(r){var a=document.documentElement.scrollHeight;n+window.innerHeight<a&&s(!0)}else s(!1)}}),[t]),r.createElement("button",{className:(0,i.Z)("clean-btn",_e,(e={},e[Se]=c,e)),type:"button",onClick:function(){return a()}},r.createElement("svg",{viewBox:"0 0 24 24",width:"28"},r.createElement("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",fill:"currentColor"})))},Oe={docPage:"docPage_31aa",docMainContainer:"docMainContainer_3ufF",docSidebarContainer:"docSidebarContainer_3Kbt",docMainContainerEnhanced:"docMainContainerEnhanced_3NYZ",docSidebarContainerHidden:"docSidebarContainerHidden_3pA8",collapsedDocSidebar:"collapsedDocSidebar_2JMH",expandSidebarButtonIcon:"expandSidebarButtonIcon_1naQ",docItemWrapperEnhanced:"docItemWrapperEnhanced_2vyJ"};function Pe(e){var t,n,o,s=e.currentDocRoute,u=e.versionMetadata,d=e.children,m=u.pluginId,f=u.version,y=s.sidebar,g=y?u.docsSidebars[y]:void 0,b=(0,r.useState)(!1),v=b[0],E=b[1],k=(0,r.useState)(!1),C=k[0],Z=k[1],N=(0,r.useCallback)((function(){C&&Z(!1),E(!v)}),[C]);return r.createElement(l.Z,{wrapperClassName:c.kM.wrapper.docsPages,pageClassName:c.kM.page.docsDocPage,searchMetadatas:{version:f,tag:(0,c.os)(m,f)}},r.createElement("div",{className:Oe.docPage},r.createElement(xe,null),g&&r.createElement("aside",{className:(0,i.Z)(Oe.docSidebarContainer,(t={},t[Oe.docSidebarContainerHidden]=v,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(Oe.docSidebarContainer)&&v&&Z(!0)}},r.createElement(z,{key:y,sidebar:g,path:s.path,onCollapse:N,isHidden:C}),C&&r.createElement("div",{className:Oe.collapsedDocSidebar,title:(0,h.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,h.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:N,onClick:N},r.createElement(p,{className:Oe.expandSidebarButtonIcon}))),r.createElement("main",{className:(0,i.Z)(Oe.docMainContainer,(n={},n[Oe.docMainContainerEnhanced]=v||!g,n))},r.createElement("div",{className:(0,i.Z)("container padding-top--md padding-bottom--lg",Oe.docItemWrapper,(o={},o[Oe.docItemWrapperEnhanced]=v,o))},r.createElement(a.Zo,{components:Ze},d)))))}var we=function(e){var t=e.route.routes,n=e.versionMetadata,a=e.location,l=t.find((function(e){return(0,Te.LX)(a.pathname,e)}));return l?r.createElement(r.Fragment,null,r.createElement(U.Z,null,r.createElement("html",{className:n.className})),r.createElement(Pe,{currentDocRoute:l,versionMetadata:n},(0,o.Z)(t,{versionMetadata:n}))):r.createElement(Ne.default,e)}},6159:function(e,t,n){"use strict";n.d(t,{N:function(){return m},Z:function(){return p}});var r=n(3366),a=n(7462),o=n(7294),l=n(6010),i=n(4973),c=n(941),s="anchorWithStickyNavbar_31ik",u="anchorWithHideOnScrollNavbar_3R7-",d=["id"],m=function(e){var t=Object.assign({},e);return o.createElement("header",null,o.createElement("h1",(0,a.Z)({},t,{id:void 0}),t.children))},p=function(e){return"h1"===e?m:(t=e,function(e){var n,a=e.id,m=(0,r.Z)(e,d),p=(0,c.LU)().navbar.hideOnScroll;return a?o.createElement(t,m,o.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,l.Z)("anchor","anchor__"+t,(n={},n[u]=p,n[s]=!p,n)),id:a}),m.children,o.createElement("a",{className:"hash-link",href:"#"+a,title:(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):o.createElement(t,m)});var t}},4608:function(e,t,n){"use strict";n.r(t);var r=n(7294),a=n(6698),o=n(4973);t.default=function(){return r.createElement(a.Z,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})},r.createElement("main",{className:"container margin-vert--xl"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--6 col--offset-3"},r.createElement("h1",{className:"hero__title"},r.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),r.createElement("p",null,r.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),r.createElement("p",null,r.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},7594:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,a,o]=t;if(r&&o){r=parseInt(r),o=parseInt(o);const e=r<o?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(o+=e);for(let t=r;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);