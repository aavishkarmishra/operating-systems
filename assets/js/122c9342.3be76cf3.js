"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[89426],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=i,m=u["".concat(l,".").concat(d)]||u[d]||f[d]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},20253:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={},o="I/O Intenals",s={unversionedId:"Lab/I/O/Redirections/content/io-internals",id:"Lab/I/O/Redirections/content/io-internals",title:"I/O Intenals",description:"Now we will take a short look at how the file descriptors you've just learnt about are handled in libc.",source:"@site/docs/Lab/I/O/Redirections/content/io-internals.md",sourceDirName:"Lab/I/O/Redirections/content",slug:"/Lab/I/O/Redirections/content/io-internals",permalink:"/operating-systems/Lab/I/O/Redirections/content/io-internals",draft:!1,tags:[],version:"current",frontMatter:{}},l={},c=[{value:"I/O Buffering",id:"io-buffering",level:2},{value:"Practice",id:"practice",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"io-intenals"},"I/O Intenals"),(0,i.kt)("p",null,"Now we will take a short look at how the file descriptors you've just learnt about are handled in libc.\nThe Software Stack chapter has taught us that applications generally interact with libraries which expose wrappers on top of syscalls.\nThe most important library in a POSIX system (such as Linux) is libc.\nAmong many others, it provides higher-level abstractions over I/O-related syscalls."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Musl"),' (read just like "muscle") is a lightweight implementation of libc, which exposes the same API that you have used so far, while also being fit for embedded and OS development.\nFor example, ',(0,i.kt)("a",{parentName:"p",href:"https://unikraft.org/"},"Unikraft")," ",(0,i.kt)("a",{parentName:"p",href:"https://unikraft.org/docs/concepts/"},"unikernels")," may ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/unikraft/lib-musl"},"use musl"),"."),(0,i.kt)("p",null,"First, it provides a ",(0,i.kt)("inlineCode",{parentName:"p"},"struct")," that groups together multiple data that is necessary when handling files.\nWe know from the example in ",(0,i.kt)("inlineCode",{parentName:"p"},"support/simple-file-operations/file_operations.c")," that the file handler employed by libc is ",(0,i.kt)("inlineCode",{parentName:"p"},"FILE *"),".\n",(0,i.kt)("inlineCode",{parentName:"p"},"FILE")," is just a ",(0,i.kt)("inlineCode",{parentName:"p"},"typedef")," for ",(0,i.kt)("a",{parentName:"p",href:"https://elixir.bootlin.com/musl/v1.2.3/source/src/internal/stdio_impl.h#L28"},(0,i.kt)("inlineCode",{parentName:"a"},"struct _IO_FILE")),".\nHere are the most important fields in ",(0,i.kt)("inlineCode",{parentName:"p"},"struct _IO_FILE"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"struct _IO_FILE {\n        int fd;         /* File descriptor */      \n        \n        unsigned flags; /* Flags with which `open()` was called */\n\n        int mode;       /* File permissions; passed to `open()` */\n\n        off_t off;      /* File offset from where to read / write */\n\n        /**\n         * Internal buffer used to make fewer costly `read()`/`write()`\n         * syscalls.\n         */\n        unsigned char *buf;\n        size_t buf_size;\n\n        /* Pointers for reading and writing from/to the buffer defined above. */\n        unsigned char *rpos, *rend;\n        unsigned char *wend, *wpos;\n\n        /* Function pointers to syscalls. */\n        size_t (*read)(FILE *, unsigned char *, size_t);\n        size_t (*write)(FILE *, const unsigned char *, size_t);\n        off_t (*seek)(FILE *, off_t, int);\n        int (*close)(FILE *);\n\n        /* Lock for concurrent file access. */\n        volatile int lock;\n};\n")),(0,i.kt)("h2",{id:"io-buffering"},"I/O Buffering"),(0,i.kt)("h3",{id:"practice"},"Practice"),(0,i.kt)("p",null,"Implement simple buffering on your own.\nMeasure time."))}u.isMDXComponent=!0}}]);