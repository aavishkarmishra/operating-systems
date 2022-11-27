"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[80168],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68658:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const i={},l="Common Functions",o={unversionedId:"Lab/Software-Stack/Basic System Calls/quiz/common-functions",id:"Lab/Software-Stack/Basic System Calls/quiz/common-functions",title:"Common Functions",description:"printf() System Call",source:"@site/docs/Lab/Software-Stack/Basic System Calls/quiz/common-functions.md",sourceDirName:"Lab/Software-Stack/Basic System Calls/quiz",slug:"/Lab/Software-Stack/Basic System Calls/quiz/common-functions",permalink:"/operating-systems/Lab/Software-Stack/Basic System Calls/quiz/common-functions",draft:!1,tags:[],version:"current",frontMatter:{}},s={},u=[{value:"printf() System Call",id:"printf-system-call",level:2},{value:"Question Text",id:"question-text",level:3},{value:"Question Answers",id:"question-answers",level:3},{value:"Feedback",id:"feedback",level:3},{value:"strcpy() System Call",id:"strcpy-system-call",level:2},{value:"Question Text",id:"question-text-1",level:3},{value:"Question Answers",id:"question-answers-1",level:3},{value:"Feedback",id:"feedback-1",level:3},{value:"printf() vs write",id:"printf-vs-write",level:2},{value:"Question Text",id:"question-text-2",level:3},{value:"Question Answers",id:"question-answers-2",level:3},{value:"Feedback",id:"feedback-2",level:3}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"common-functions"},"Common Functions"),(0,r.kt)("h2",{id:"printf-system-call"},"printf() System Call"),(0,r.kt)("h3",{id:"question-text"},"Question Text"),(0,r.kt)("p",null,"What system call does the ",(0,r.kt)("inlineCode",{parentName:"p"},"printf()")," function invoke?"),(0,r.kt)("h3",{id:"question-answers"},"Question Answers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"read"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"write"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"exec"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"exit")))),(0,r.kt)("h3",{id:"feedback"},"Feedback"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"printf()")," invokes the ",(0,r.kt)("inlineCode",{parentName:"p"},"write")," system call to print messages to standard output."),(0,r.kt)("h2",{id:"strcpy-system-call"},"strcpy() System Call"),(0,r.kt)("h3",{id:"question-text-1"},"Question Text"),(0,r.kt)("p",null,"What system call does the ",(0,r.kt)("inlineCode",{parentName:"p"},"strcpy()")," function invoke?"),(0,r.kt)("h3",{id:"question-answers-1"},"Question Answers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"cpy"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"touch"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"memcpy")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"no system call")),(0,r.kt)("h3",{id:"feedback-1"},"Feedback"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"strcpy()")," doesn't invoke system calls, because it doesn't require any feature that is only provided by the operating system"),(0,r.kt)("h2",{id:"printf-vs-write"},"printf() vs write"),(0,r.kt)("h3",{id:"question-text-2"},"Question Text"),(0,r.kt)("p",null,"What are features provided by ",(0,r.kt)("inlineCode",{parentName:"p"},"printf()")," when compared to ",(0,r.kt)("inlineCode",{parentName:"p"},"write"),"? (choose 2 answers)"),(0,r.kt)("h3",{id:"question-answers-2"},"Question Answers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"buffering")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"outputs to standard output")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"may write to file"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"does output formatting")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"can work with binary data")),(0,r.kt)("h3",{id:"feedback-2"},"Feedback"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"printf()")," can do buffering to reduce the number of system calls.\nAlso, ",(0,r.kt)("inlineCode",{parentName:"p"},"printf()"),", as it name suggests (the ",(0,r.kt)("inlineCode",{parentName:"p"},"f")," suffix), does output formatting."))}c.isMDXComponent=!0}}]);