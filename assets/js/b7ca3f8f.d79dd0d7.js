"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[58399],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=s,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:s,o[1]=p;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61505:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var r=n(87462),s=(n(67294),n(3905));const a={},o="Parent of `sleep` Processes",p={unversionedId:"Lab/Compute/Benchmarks/quiz/parent-of-sleep-processes",id:"Lab/Compute/Benchmarks/quiz/parent-of-sleep-processes",title:"Parent of `sleep` Processes",description:"Question Text",source:"@site/docs/Lab/Compute/Benchmarks/quiz/parent-of-sleep-processes.md",sourceDirName:"Lab/Compute/Benchmarks/quiz",slug:"/Lab/Compute/Benchmarks/quiz/parent-of-sleep-processes",permalink:"/operating-systems/Lab/Compute/Benchmarks/quiz/parent-of-sleep-processes",draft:!1,tags:[],version:"current",frontMatter:{}},i={},l=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2},{value:"Feedback",id:"feedback",level:2}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"parent-of-sleep-processes"},"Parent of ",(0,s.kt)("inlineCode",{parentName:"h1"},"sleep")," Processes"),(0,s.kt)("h2",{id:"question-text"},"Question Text"),(0,s.kt)("p",null,"Who is the parent of the ",(0,s.kt)("inlineCode",{parentName:"p"},"sleep")," processes?\nWhy?"),(0,s.kt)("h2",{id:"question-answers"},"Question Answers"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"sleepy_creator.py")," because it is the one who created them")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"bash")," because it is ",(0,s.kt)("inlineCode",{parentName:"p"},"sleepy_creator.py"),"'s parent and when a process dies, its parent adopts its orphan children"))),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"systemd")," because this is the default process that adopts orphans")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"systemd")," because it is ",(0,s.kt)("inlineCode",{parentName:"li"},"sleepy_creator.py"),"'s parent and when a process dies, its parent adopts its orphan children")),(0,s.kt)("h2",{id:"feedback"},"Feedback"),(0,s.kt)("p",null,"When a process dies without waiting for the termination of all its children, those processes are now orphans.\nThen the ",(0,s.kt)("inlineCode",{parentName:"p"},"systemd")," process adopts those orphan processes by default.\nOn older Linux systems, it was the ",(0,s.kt)("inlineCode",{parentName:"p"},"init")," process who adopted orphans."))}u.isMDXComponent=!0}}]);