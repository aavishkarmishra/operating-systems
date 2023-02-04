"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[15015],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(n),u=r,h=c["".concat(p,".").concat(u)]||c[u]||d[u]||i;return n?a.createElement(h,l(l({ref:t},m),{},{components:n})):a.createElement(h,l({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},76063:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={},l=void 0,o={unversionedId:"Lab/Software-Stack/Libcall-Syscall/content/arena",id:"Lab/Software-Stack/Libcall-Syscall/content/arena",title:"arena",description:"Arena",source:"@site/docs/Lab/Software-Stack/Libcall-Syscall/content/arena.md",sourceDirName:"Lab/Software-Stack/Libcall-Syscall/content",slug:"/Lab/Software-Stack/Libcall-Syscall/content/arena",permalink:"/operating-systems/Lab/Software-Stack/Libcall-Syscall/content/arena",draft:!1,tags:[],version:"current",frontMatter:{}},p={},s=[{value:"Arena",id:"arena",level:2},{value:"System Calls",id:"system-calls",level:3},{value:"System Call Wrappers",id:"system-call-wrappers",level:3},{value:"Common Functions",id:"common-functions",level:3},{value:"Libraries and libc",id:"libraries-and-libc",level:3},{value:"High-Level Languages",id:"high-level-languages",level:3},{value:"App Investigation",id:"app-investigation",level:3}],m={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"arena"},"Arena"),(0,r.kt)("p",null,"Go through the practice items below to hone your skills in working with layers of the software stack."),(0,r.kt)("h3",{id:"system-calls"},"System Calls"),(0,r.kt)("p",null,"Enter the ",(0,r.kt)("inlineCode",{parentName:"p"},"support/basic-syscall/")," folder and go through the practice items below.\nIf you get stuck, take a sneak peak at the solutions in the ",(0,r.kt)("inlineCode",{parentName:"p"},"solution/basic-syscall/")," folder."),(0,r.kt)("p",null,"For debugging, use ",(0,r.kt)("inlineCode",{parentName:"p"},"strace")," to trace the system calls from your program and make sure the arguments are set right."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Update the ",(0,r.kt)("inlineCode",{parentName:"p"},"hello.asm")," and / or ",(0,r.kt)("inlineCode",{parentName:"p"},"hello.s")," files to pause the execution of the program before the ",(0,r.kt)("inlineCode",{parentName:"p"},"exit")," system call."),(0,r.kt)("p",{parentName:"li"},"You need to make the ",(0,r.kt)("inlineCode",{parentName:"p"},"sys_pause")," system call, with no arguments.\nFind its ID ",(0,r.kt)("a",{parentName:"p",href:"https://blog.rchapman.org/posts/Linux_System_Call_Table_for_x86_64/"},"here"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Update the ",(0,r.kt)("inlineCode",{parentName:"p"},"hello.asm")," and / or ",(0,r.kt)("inlineCode",{parentName:"p"},"hello.s")," files to read a message from standard input and print it to standard output."),(0,r.kt)("p",{parentName:"li"},"You'll need to define a buffer in the ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"bss")," section.\nUse the ",(0,r.kt)("inlineCode",{parentName:"p"},"read")," system call to read data in the buffer.\nThe return value of ",(0,r.kt)("inlineCode",{parentName:"p"},"read")," (placed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"rax")," register) is the number of bytes read.\nUse that value as the 3rd argument or ",(0,r.kt)("inlineCode",{parentName:"p"},"write"),", i.e. the number of bytes printed."),(0,r.kt)("p",{parentName:"li"},"Find the ID of the ",(0,r.kt)("inlineCode",{parentName:"p"},"read")," system call ",(0,r.kt)("a",{parentName:"p",href:"https://x64.syscall.sh/"},"here"),".\nTo find out more about its arguments, see ",(0,r.kt)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man2/read.2.html"},"its man page"),".\nStandard input descriptor is ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Difficult"),": Port the initial program to ARM on 64 bits (also called ",(0,r.kt)("strong",{parentName:"p"},"aarch64"),")."),(0,r.kt)("p",{parentName:"li"},"Use the skeleton files in the ",(0,r.kt)("inlineCode",{parentName:"p"},"arm/")," folder.\nFind information about the aarch64 system calls ",(0,r.kt)("a",{parentName:"p",href:"https://arm64.syscall.sh/"},"here"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create your own program, written in assembly, doing some system calls you want to learn more about.\nSome system calls you could try: ",(0,r.kt)("inlineCode",{parentName:"p"},"open"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"rename"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"mkdir"),".\nCreate a Makefile for that program.\nRun the resulting program with ",(0,r.kt)("inlineCode",{parentName:"p"},"strace")," to see the actual system calls being made (and their arguments)."))),(0,r.kt)("h3",{id:"system-call-wrappers"},"System Call Wrappers"),(0,r.kt)("p",null,"Enter the ",(0,r.kt)("inlineCode",{parentName:"p"},"support/syscall-wrapper/")," folder and go through the practice items below.\nIf you get stuck, take a sneak peak at the solutions in the ",(0,r.kt)("inlineCode",{parentName:"p"},"solution/syscall-wrapper/")," folder."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Update the files in the ",(0,r.kt)("inlineCode",{parentName:"p"},"syscall-wrapper/")," folder to make the ",(0,r.kt)("inlineCode",{parentName:"p"},"getpid")," system call available as a wrapper.\nCreate a function with the signature ",(0,r.kt)("inlineCode",{parentName:"p"},"unsigned int itoa(int n, char *a)")," that converts an integer to a string.\nIt returns the number of digits in the string.\nFor example, it will convert the number ",(0,r.kt)("inlineCode",{parentName:"p"},"1234")," to the string ",(0,r.kt)("inlineCode",{parentName:"p"},'"1234"')," string (NUL-terminated, 5 bytes long);\nthe return value is ",(0,r.kt)("inlineCode",{parentName:"p"},"4")," (the number of digits of the ",(0,r.kt)("inlineCode",{parentName:"p"},'"1234"')," string)."),(0,r.kt)("p",{parentName:"li"},"Then make the call to ",(0,r.kt)("inlineCode",{parentName:"p"},"getpid"),";\nit gets no arguments and returns an integer (the PID - ",(0,r.kt)("em",{parentName:"p"},"process ID")," of the current process)."))),(0,r.kt)("h3",{id:"common-functions"},"Common Functions"),(0,r.kt)("p",null,"Enter the ",(0,r.kt)("inlineCode",{parentName:"p"},"support/common-functions/")," folder and go through the practice items below.\nIf you get stuck, take a sneak peak at the solutions in the ",(0,r.kt)("inlineCode",{parentName:"p"},"solution/common-functions/")," folder."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Update the ",(0,r.kt)("inlineCode",{parentName:"p"},"putchar()")," function in ",(0,r.kt)("inlineCode",{parentName:"p"},"main_printf.c")," to implement a buffered functionality of ",(0,r.kt)("inlineCode",{parentName:"p"},"printf()"),".\nCharacters passed via the ",(0,r.kt)("inlineCode",{parentName:"p"},"putchar()")," call will be stored in a predefined static global buffer.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"write()")," call will be invoked when a newline is encountered or when the buffer is full.\nThis results in a reduced number of ",(0,r.kt)("inlineCode",{parentName:"p"},"write")," system calls.\nUse ",(0,r.kt)("inlineCode",{parentName:"p"},"strace")," to confirm the reduction of the number of ",(0,r.kt)("inlineCode",{parentName:"p"},"write")," system calls.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Update the ",(0,r.kt)("inlineCode",{parentName:"p"},"main_printf.c")," file to also feature a ",(0,r.kt)("inlineCode",{parentName:"p"},"flush()")," function that forces the flushing the static global buffer and a ",(0,r.kt)("inlineCode",{parentName:"p"},"write")," system call.\nMake calls to ",(0,r.kt)("inlineCode",{parentName:"p"},"printf()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"flush()")," to validate the implementation.\nUse ",(0,r.kt)("inlineCode",{parentName:"p"},"strace")," to inspect the ",(0,r.kt)("inlineCode",{parentName:"p"},"write")," system calls invoked by ",(0,r.kt)("inlineCode",{parentName:"p"},"printf()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"flush()"),"."))),(0,r.kt)("h3",{id:"libraries-and-libc"},"Libraries and libc"),(0,r.kt)("p",null,"Enter the ",(0,r.kt)("inlineCode",{parentName:"p"},"support/libc/")," folder and go through the practice items below.\nIf you get stuck, take a sneak peak at the solutions in the ",(0,r.kt)("inlineCode",{parentName:"p"},"solution/libc/")," folder."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"vendetta.c")," file make a call ",(0,r.kt)("inlineCode",{parentName:"p"},'open("a.txt", O_RDWR | O_CREAT, 0644)')," to open / create the ",(0,r.kt)("inlineCode",{parentName:"p"},"a.txt")," file.\nMake sure you include all required headers.\nCheck the system call being made."),(0,r.kt)("p",{parentName:"li"},"Make an ",(0,r.kt)("inlineCode",{parentName:"p"},"fopen()")," with the proper arguments that gets as close as possible to the ",(0,r.kt)("inlineCode",{parentName:"p"},"open()")," call, i.e. the system call arguments are as close as possible.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"vendetta.c")," file make a call to ",(0,r.kt)("inlineCode",{parentName:"p"},"sin()")," function (for sine).\nCompute ",(0,r.kt)("inlineCode",{parentName:"p"},"sin(0)")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"sin(PI/2)"),"."))),(0,r.kt)("h3",{id:"high-level-languages"},"High-Level Languages"),(0,r.kt)("p",null,"Enter the ",(0,r.kt)("inlineCode",{parentName:"p"},"support/high-level-lang/")," folder and go through the practice items below.\nIf you get stuck, take a sneak peak at the solutions in the ",(0,r.kt)("inlineCode",{parentName:"p"},"solution/high-level-lang/")," folder."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create programs in C, Python and Go that compute the N-th Fibonacci number.\n",(0,r.kt)("inlineCode",{parentName:"p"},"N")," is passed as a command-line argument."),(0,r.kt)("p",{parentName:"li"},"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"ltrace")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"strace")," to compute the number of library calls and system calls.\nUse ",(0,r.kt)("inlineCode",{parentName:"p"},"perf")," to measure the running time."),(0,r.kt)("p",{parentName:"li"},"Compare the values of the three programs.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create programs in C, Python and Go that copy a source file into a destination file.\nBoth files are passed as the two command-line arguments for the program.\nSample run:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},"student@so:~$ cp src dest\n")),(0,r.kt)("p",{parentName:"li"},"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"ltrace")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"strace")," to compute the number of library calls and system calls.\nUse ",(0,r.kt)("inlineCode",{parentName:"p"},"perf")," to measure the running time.\nUse source files of different sizes.\nCompare the ouputs of these commands on the three programs."))),(0,r.kt)("h3",{id:"app-investigation"},"App Investigation"),(0,r.kt)("p",null,"Enter the ",(0,r.kt)("inlineCode",{parentName:"p"},"support/app-investigation/")," folder and go through the practice items below."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check to see whether there are statically-linked application executables in the system.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"file")," command tells if the file passed as argument is a statically-linked executable.\nIf you can't find one, install the ",(0,r.kt)("inlineCode",{parentName:"p"},"busybox-static")," package.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Look into what ",(0,r.kt)("a",{parentName:"p",href:"https://busybox.net/"},"busybox")," is and explain why it's custom to have it as statically-linked executable.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"ldd"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"nm"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"strace"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ltrace")," on a statically-linked application executable.\nExplain the results."))))}d.isMDXComponent=!0}}]);