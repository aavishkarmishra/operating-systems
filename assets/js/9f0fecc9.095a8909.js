"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[50325],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var l=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=l.createContext({}),u=function(e){var t=l.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return l.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,k=d["".concat(c,".").concat(m)]||d[m]||p[m]||r;return n?l.createElement(k,i(i({ref:t},s),{},{components:n})):l.createElement(k,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<r;u++)i[u]=n[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},57159:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var l=n(87462),a=(n(67294),n(3905));const r={},i="libc",o={unversionedId:"Lab/Software-Stack/Lybcall-Syscall/quiz/libc",id:"Lab/Software-Stack/Lybcall-Syscall/quiz/libc",title:"libc",description:"malloc()",source:"@site/docs/Lab/Software-Stack/Lybcall-Syscall/quiz/libc.md",sourceDirName:"Lab/Software-Stack/Lybcall-Syscall/quiz",slug:"/Lab/Software-Stack/Lybcall-Syscall/quiz/libc",permalink:"/operating-systems/Lab/Software-Stack/Lybcall-Syscall/quiz/libc",draft:!1,tags:[],version:"current",frontMatter:{}},c={},u=[{value:"<code>malloc()</code>",id:"malloc",level:2},{value:"Question Text",id:"question-text",level:3},{value:"Question Answers",id:"question-answers",level:3},{value:"Feedback",id:"feedback",level:3},{value:"Syscall Tool",id:"syscall-tool",level:2},{value:"Question Text",id:"question-text-1",level:3},{value:"Question Answers",id:"question-answers-1",level:3},{value:"Feedback",id:"feedback-1",level:3}],s={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"libc"},"libc"),(0,a.kt)("h2",{id:"malloc"},(0,a.kt)("inlineCode",{parentName:"h2"},"malloc()")),(0,a.kt)("h3",{id:"question-text"},"Question Text"),(0,a.kt)("p",null,"What system calls are invoked by the ",(0,a.kt)("inlineCode",{parentName:"p"},"malloc()")," library call for Linux libc? (choose 2 answers)"),(0,a.kt)("h3",{id:"question-answers"},"Question Answers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"brk"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"free"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"dup")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"mmap"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"copy"))),(0,a.kt)("h3",{id:"feedback"},"Feedback"),(0,a.kt)("p",null,"Depending on the allocation size, ",(0,a.kt)("inlineCode",{parentName:"p"},"malloc()")," invokes ",(0,a.kt)("inlineCode",{parentName:"p"},"brk")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"mmap"),"."),(0,a.kt)("h2",{id:"syscall-tool"},"Syscall Tool"),(0,a.kt)("h3",{id:"question-text-1"},"Question Text"),(0,a.kt)("p",null,"Which of following is ",(0,a.kt)("strong",{parentName:"p"},"not")," and advantage of using libc for programs?"),(0,a.kt)("h3",{id:"question-answers-1"},"Question Answers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"increased portability")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"reduced executable size")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"richer set of features")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"easier development"))),(0,a.kt)("h3",{id:"feedback-1"},"Feedback"),(0,a.kt)("p",null,"When using libc, because we add a new software component, the size of the resulting executable increases."))}p.isMDXComponent=!0}}]);