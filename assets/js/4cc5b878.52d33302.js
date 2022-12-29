"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[28378],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},f="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=p(r),b=i,d=f["".concat(u,".").concat(b)]||f[b]||s[b]||a;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=b;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[f]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},66875:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(87462),i=(r(67294),r(3905));const a={},o="Flush Libc Buffer",l={unversionedId:"Lab/I/O/Zero-Copy/quiz/flush-libc-buffer",id:"Lab/I/O/Zero-Copy/quiz/flush-libc-buffer",title:"Flush Libc Buffer",description:"Question Text",source:"@site/docs/Lab/I/O/Zero-Copy/quiz/flush-libc-buffer.md",sourceDirName:"Lab/I/O/Zero-Copy/quiz",slug:"/Lab/I/O/Zero-Copy/quiz/flush-libc-buffer",permalink:"/operating-systems/Lab/I/O/Zero-Copy/quiz/flush-libc-buffer",draft:!1,tags:[],version:"current",frontMatter:{}},u={},p=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2},{value:"Feedback",id:"feedback",level:2}],c={toc:p};function f(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"flush-libc-buffer"},"Flush Libc Buffer"),(0,i.kt)("h2",{id:"question-text"},"Question Text"),(0,i.kt)("p",null,"Which of the following is a method of flushing libc's internal buffer?"),(0,i.kt)("h2",{id:"question-answers"},"Question Answers"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"print a ",(0,i.kt)("inlineCode",{parentName:"li"},"\\0")," character")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"print a ",(0,i.kt)("inlineCode",{parentName:"li"},"\\n")," character")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"print a space character")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"print a ",(0,i.kt)("inlineCode",{parentName:"p"},"\\t")," character"))),(0,i.kt)("h2",{id:"feedback"},"Feedback"),(0,i.kt)("p",null,"Newlines (",(0,i.kt)("inlineCode",{parentName:"p"},"\\n"),") force ",(0,i.kt)("inlineCode",{parentName:"p"},"printf()")," to dump the internal buffer associated with the ",(0,i.kt)("inlineCode",{parentName:"p"},"stdout")," ",(0,i.kt)("inlineCode",{parentName:"p"},"FILE")," ",(0,i.kt)("inlineCode",{parentName:"p"},"struct"),".\nIf you place a ",(0,i.kt)("inlineCode",{parentName:"p"},"\\n")," character within one of the strings in ",(0,i.kt)("inlineCode",{parentName:"p"},"support/buffering/printf_buffering.c"),", a ",(0,i.kt)("inlineCode",{parentName:"p"},"write()")," syscall will be made right after it."))}f.isMDXComponent=!0}}]);