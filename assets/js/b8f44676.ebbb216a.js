"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[56111],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(r),f=o,y=p["".concat(u,".").concat(f)]||p[f]||d[f]||i;return r?n.createElement(y,a(a({ref:t},c),{},{components:r})):n.createElement(y,a({ref:t},c))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},97581:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const i={},a="Deluge: TCP or UDP",l={unversionedId:"Lab/I/O/I/O Multiplexing/quiz/deluge-tcp-udp",id:"Lab/I/O/I/O Multiplexing/quiz/deluge-tcp-udp",title:"Deluge: TCP or UDP",description:"Question Text",source:"@site/docs/Lab/I/O/I/O Multiplexing/quiz/deluge-tcp-udp.md",sourceDirName:"Lab/I/O/I/O Multiplexing/quiz",slug:"/Lab/I/O/I/O Multiplexing/quiz/deluge-tcp-udp",permalink:"/operating-systems/Lab/I/O/I/O Multiplexing/quiz/deluge-tcp-udp",draft:!1,tags:[],version:"current",frontMatter:{}},u={},s=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2},{value:"Feedback",id:"feedback",level:2}],c={toc:s};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deluge-tcp-or-udp"},"Deluge: TCP or UDP"),(0,o.kt)("h2",{id:"question-text"},"Question Text"),(0,o.kt)("p",null,"Should Deluge use UDP or TCP to transfer torrent files?"),(0,o.kt)("h2",{id:"question-answers"},"Question Answers"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It should use UDP for faster file transfers")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It should use TCP to guarantee the integrity of the transferred files")),(0,o.kt)("h2",{id:"feedback"},"Feedback"),(0,o.kt)("p",null,"Speed is nice to have.\nCorrectness is mandatory in most scenarios, including this one.\nThe only situation when correctness may be overlooked is when some given data will be quckly replaced by some other data.\nBut files are persistent.\nIf you download a video game from as a torrent (we've all done that), you want to keep it for a while and first and foremost, it has to work properly, i.e. not be corrupt."))}p.isMDXComponent=!0}}]);