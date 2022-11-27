"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[33146],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(n),k=a,m=d["".concat(c,".").concat(k)]||d[k]||p[k]||l;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47981:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const l={},o="libc",i={unversionedId:"Lab/Software-Stack/Modern Software Stacks/quiz/libc",id:"Lab/Software-Stack/Modern Software Stacks/quiz/libc",title:"libc",description:"malloc()",source:"@site/docs/Lab/Software-Stack/Modern Software Stacks/quiz/libc.md",sourceDirName:"Lab/Software-Stack/Modern Software Stacks/quiz",slug:"/Lab/Software-Stack/Modern Software Stacks/quiz/libc",permalink:"/operating-systems/Lab/Software-Stack/Modern Software Stacks/quiz/libc",draft:!1,tags:[],version:"current",frontMatter:{}},c={},u=[{value:"<code>malloc()</code>",id:"malloc",level:2},{value:"Question Text",id:"question-text",level:3},{value:"Question Answers",id:"question-answers",level:3},{value:"Feedback",id:"feedback",level:3},{value:"Syscall Tool",id:"syscall-tool",level:2},{value:"Question Text",id:"question-text-1",level:3},{value:"Question Answers",id:"question-answers-1",level:3},{value:"Feedback",id:"feedback-1",level:3}],s={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"libc"},"libc"),(0,a.kt)("h2",{id:"malloc"},(0,a.kt)("inlineCode",{parentName:"h2"},"malloc()")),(0,a.kt)("h3",{id:"question-text"},"Question Text"),(0,a.kt)("p",null,"What system calls are invoked by the ",(0,a.kt)("inlineCode",{parentName:"p"},"malloc()")," library call for Linux libc? (choose 2 answers)"),(0,a.kt)("h3",{id:"question-answers"},"Question Answers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"brk"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"free"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"dup")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"mmap"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"copy"))),(0,a.kt)("h3",{id:"feedback"},"Feedback"),(0,a.kt)("p",null,"Depending on the allocation size, ",(0,a.kt)("inlineCode",{parentName:"p"},"malloc()")," invokes ",(0,a.kt)("inlineCode",{parentName:"p"},"brk")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"mmap"),"."),(0,a.kt)("h2",{id:"syscall-tool"},"Syscall Tool"),(0,a.kt)("h3",{id:"question-text-1"},"Question Text"),(0,a.kt)("p",null,"Which of following is ",(0,a.kt)("strong",{parentName:"p"},"not")," and advantage of using libc for programs?"),(0,a.kt)("h3",{id:"question-answers-1"},"Question Answers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"increased portability")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"reduced executable size")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"richer set of features")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"easier development"))),(0,a.kt)("h3",{id:"feedback-1"},"Feedback"),(0,a.kt)("p",null,"When using libc, because we add a new software component, the size of the resulting executable increases."))}p.isMDXComponent=!0}}]);