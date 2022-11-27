"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[71690],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,u=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(u,s(s({ref:t},h),{},{components:n})):a.createElement(u,s({ref:t},h))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93188:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={},s=void 0,i={unversionedId:"Lab/Compute/Scheduling/content/arena",id:"Lab/Compute/Scheduling/content/arena",title:"arena",description:"Arena",source:"@site/docs/Lab/Compute/Scheduling/content/arena.md",sourceDirName:"Lab/Compute/Scheduling/content",slug:"/Lab/Compute/Scheduling/content/arena",permalink:"/operating-systems/Lab/Compute/Scheduling/content/arena",draft:!1,tags:[],version:"current",frontMatter:{}},l={},p=[{value:"Arena",id:"arena",level:2},{value:"Threads and Processes: <code>clone</code>",id:"threads-and-processes-clone",level:3},{value:"Libraries for Parallel Processing",id:"libraries-for-parallel-processing",level:3},{value:"Shared Memory",id:"shared-memory",level:3},{value:"Mini-shell",id:"mini-shell",level:3},{value:"First Step: <code>system</code> Dissected",id:"first-step-system-dissected",level:4},{value:"Command Executor in Another language",id:"command-executor-in-another-language",level:4},{value:"The GIL",id:"the-gil",level:3},{value:"Practice: Array Sum in Python",id:"practice-array-sum-in-python",level:4},{value:"But Why?",id:"but-why",level:4},{value:"Atomic Assembly",id:"atomic-assembly",level:3},{value:"Synchronization - Thread-Safe Data Structure",id:"synchronization---thread-safe-data-structure",level:3}],h={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"arena"},"Arena"),(0,r.kt)("h3",{id:"threads-and-processes-clone"},"Threads and Processes: ",(0,r.kt)("inlineCode",{parentName:"h3"},"clone")),(0,r.kt)("p",null,"Let's go back to our initial demos that used threads and processes.\nWe'll see that in order to create both threads and processes, the underlying Linux syscall is ",(0,r.kt)("inlineCode",{parentName:"p"},"clone"),".\nFor this, we'll run both ",(0,r.kt)("inlineCode",{parentName:"p"},"sum_array_threads")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"sum_array_processes")," under ",(0,r.kt)("inlineCode",{parentName:"p"},"strace"),".\nAs we've already established, we're only interested in the ",(0,r.kt)("inlineCode",{parentName:"p"},"clone")," syscall:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../lab/support/sum-array/d$ strace -e clone ./sum_array_threads 2\nclone(child_stack=0x7f60b56482b0, flags=CLONE_VM|CLONE_FS|CLONE_FILES|CLONE_SIGHAND|CLONE_THREAD|CLONE_SYSVSEM|CLONE_SETTLS|CLONE_PARENT_SETTID|CLONE_CHILD_CLEARTID, parent_tid=[1819693], tls=0x7f60b5649640, child_tidptr=0x7f60b5649910) = 1819693\nclone(child_stack=0x7f60b4e472b0, flags=CLONE_VM|CLONE_FS|CLONE_FILES|CLONE_SIGHAND|CLONE_THREAD|CLONE_SYSVSEM|CLONE_SETTLS|CLONE_PARENT_SETTID|CLONE_CHILD_CLEARTID, parent_tid=[1819694], tls=0x7f60b4e48640, child_tidptr=0x7f60b4e48910) = 1819694\n\nstudent@os:~/.../lab/support/sum-array/d$ strace -e clone ./sum_array_processes 2\nclone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f7a4e346650) = 1820599\nclone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f7a4e346650) = 1820600\n")),(0,r.kt)("p",null,"We ran each program with an argument of 2, so we have 2 calls to ",(0,r.kt)("inlineCode",{parentName:"p"},"clone"),".\nNotice that in the case of threads, the ",(0,r.kt)("inlineCode",{parentName:"p"},"clone")," syscall receives more arguments.\nThe relevant flags passed as arguments when creating threads are documented in ",(0,r.kt)("a",{parentName:"p",href:"https://man.archlinux.org/man/clone3.2.en"},(0,r.kt)("inlineCode",{parentName:"a"},"clone"),"'s man page"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CLONE_VM"),": the child and the parent process share the same VAS"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CLONE_{FS,FILES,SIGHAND}"),": the new thread shares the filesystem information, file and signal handlers with the one that created it\nThe syscall also receives valid pointers to the new thread's stack and TLS, i.e. the only parts of the VAS that are distinct between threads (although they are technically accessible from all threads).")),(0,r.kt)("p",null,"By contrast, when creating a new process, the arguments of the ",(0,r.kt)("inlineCode",{parentName:"p"},"clone")," syscall are simpler (i.e. fewer flags are present).\nRemember that in both cases ",(0,r.kt)("inlineCode",{parentName:"p"},"clone")," creates a new ",(0,r.kt)("strong",{parentName:"p"},"thread"),".\nWhen creating a process, ",(0,r.kt)("inlineCode",{parentName:"p"},"clone")," creates this new thread within a new separate address space."),(0,r.kt)("h3",{id:"libraries-for-parallel-processing"},"Libraries for Parallel Processing"),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"support/sum-array/d/sum_array_threads.d"),' we spawned threads "manually" by using the ',(0,r.kt)("inlineCode",{parentName:"p"},"spawn")," function.\nThis is ",(0,r.kt)("strong",{parentName:"p"},"not")," a syscall, but a wrapper over the most common thread-management API in POSIX-based operating systems (such as Linux, FreeBSD, macOS): POSIX Threads or ",(0,r.kt)("inlineCode",{parentName:"p"},"pthreads"),".\nBy inspecting the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dlang/phobos/blob/352258539ca54e640e862f79b2b8ec18aafa7d94/std/concurrency.d#L618-L622"},"implementation of ",(0,r.kt)("inlineCode",{parentName:"a"},"spawn")),", we see that it creates a ",(0,r.kt)("inlineCode",{parentName:"p"},"Thread")," object, on which it calls the ",(0,r.kt)("inlineCode",{parentName:"p"},"start()")," method.\nIn turn, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dlang/dmd/blob/cc117cd45c7d72ce5a87b775e65a9d13fa4d4424/druntime/src/core/thread/osthread.d#L454-L486"},(0,r.kt)("inlineCode",{parentName:"a"},"start()")," uses ",(0,r.kt)("inlineCode",{parentName:"a"},"pthread_create()"))," on POSIX systems."),(0,r.kt)("p",null,"Still, ",(0,r.kt)("inlineCode",{parentName:"p"},"pthread_create()")," is not yet a syscall.\nIn order to see what syscall ",(0,r.kt)("inlineCode",{parentName:"p"},"pthread_create()")," uses, check out ",(0,r.kt)("a",{parentName:"p",href:"#threads-and-processes-clone"},"this section at the end of the lab"),"."),(0,r.kt)("p",null,"Most programming languages provide a more advanced API for handling parallel computation.\nD makes no exception.\nIts standard library exposes the ",(0,r.kt)("a",{parentName:"p",href:"https://dlang.org/phobos/std_parallelism.html"},(0,r.kt)("inlineCode",{parentName:"a"},"std.parallelism")),", which provides a series of parallel processing functions.\nOne such function is ",(0,r.kt)("inlineCode",{parentName:"p"},"reduce")," which splits an array between a given number of threads and applies a given operation to these chunks.\nIn our case, the operation simply adds the elements to an accumulator: ",(0,r.kt)("inlineCode",{parentName:"p"},"a + b"),".\nFollow and run the code in ",(0,r.kt)("inlineCode",{parentName:"p"},"support/sum-array/d/sum_array_threads_reduce.d"),"."),(0,r.kt)("p",null,"The number of threads is used within a ",(0,r.kt)("a",{parentName:"p",href:"https://dlang.org/phobos/std_parallelism.html#.TaskPool"},(0,r.kt)("inlineCode",{parentName:"a"},"TaskPool")),".\nThis structure is a thread manager (not scheduler).\nIt silently creates the number of threads we request and then ",(0,r.kt)("inlineCode",{parentName:"p"},"reduce")," spreads its workload between these threads."),(0,r.kt)("p",null,"Now run the ",(0,r.kt)("inlineCode",{parentName:"p"},"sum_array_threads_reduce")," binary using 1, 2, 4, and 8 threads as before.\nYou'll see lower running times than ",(0,r.kt)("inlineCode",{parentName:"p"},"sum_array_threads")," due to the highly-optimised code of the ",(0,r.kt)("inlineCode",{parentName:"p"},"reduce")," function.\nFor this reason and because library functions are usually much better tested than your own code, it is always preferred to use a library function for a given task."),(0,r.kt)("h3",{id:"shared-memory"},"Shared Memory"),(0,r.kt)("p",null,"As you remember from the ",(0,r.kt)("a",{parentName:"p",href:"../../data/"},"Data chapter"),", one way to allocate a given number of pages is to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"mmap()")," syscall.\nLet's look at its ",(0,r.kt)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man2/mmap.2.html"},"man page"),", specifically at the ",(0,r.kt)("inlineCode",{parentName:"p"},"flags")," argument.\nIts main purpose is to determine the way in which child processes interact with the mapped pages."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/operating-systems/Lab/Compute/Scheduling/quiz/mmap-cow-flag"},"Quiz")),(0,r.kt)("p",null,"Now let's test this flag, as well as its opposite: ",(0,r.kt)("inlineCode",{parentName:"p"},"MAP_SHARED"),".\nCompile and run the code in ",(0,r.kt)("inlineCode",{parentName:"p"},"support/shared-memory/shared_memory.c"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"See the value read by the parent is different from that written by the child.\nModify the ",(0,r.kt)("inlineCode",{parentName:"p"},"flags")," parameter of ",(0,r.kt)("inlineCode",{parentName:"p"},"mmap()")," so they are the same.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a semaphore in the shared page and use it to make the parent signal the child before it can exit.\nUse the API defined in ",(0,r.kt)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man0/semaphore.h.0p.html"},(0,r.kt)("inlineCode",{parentName:"a"},"semaphore.h")),".\n",(0,r.kt)("strong",{parentName:"p"},"Be careful!"),"\nThe value written and read previously by the child and the parent, respectively, must not change."))),(0,r.kt)("p",null,'One way of creating a shared semaphore is to place it within a shared memory area, as we\'ve just done.\nThis only works between "related" processes.\nIf you want to share a semaphore or other types of memory between any two processes, you need filesystem support.\nFor this, you should use ',(0,r.kt)("strong",{parentName:"p"},"named semaphores"),", created using ",(0,r.kt)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man3/sem_open.3.html"},(0,r.kt)("inlineCode",{parentName:"a"},"sem_open()")),".\nYou'll get more accustomed to such functions in the ",(0,r.kt)("a",{parentName:"p",href:"../../../app-interact/"},"Application Interaction chapter"),"."),(0,r.kt)("h3",{id:"mini-shell"},"Mini-shell"),(0,r.kt)("h4",{id:"first-step-system-dissected"},"First Step: ",(0,r.kt)("inlineCode",{parentName:"h4"},"system")," Dissected"),(0,r.kt)("p",null,"You already know that ",(0,r.kt)("inlineCode",{parentName:"p"},"system")," calls ",(0,r.kt)("inlineCode",{parentName:"p"},"fork()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"execve()")," to create the new process.\nLet's see how and why.\nFirst, we run the following command to trace the ",(0,r.kt)("inlineCode",{parentName:"p"},"execve()")," syscalls used by ",(0,r.kt)("inlineCode",{parentName:"p"},"sleepy_creator"),".\nWe'll leave ",(0,r.kt)("inlineCode",{parentName:"p"},"fork()")," for later."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../support/sleepy$ strace -e execve -ff -o syscalls ./sleepy_creator\n")),(0,r.kt)("p",null,"At this point you will get two files whose names start with ",(0,r.kt)("inlineCode",{parentName:"p"},"syscalls"),", followed by some numbers.\nThose numbers are the PIDs of the parent and the child process.\nTherefore, the file with the higher number contains logs of the ",(0,r.kt)("inlineCode",{parentName:"p"},"execve")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"clone")," syscalls issued by the parent process, while\nthe other logs those two syscalls when made by the child process.\nLet's take a look at them.\nThe numbers below will differ from those on your system:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'student@os:~/.../support/sleepy:$ cat syscalls.2523393  # syscalls from parent process\nexecve("sleepy_creator", ["sleepy_creator"], 0x7ffd2c157758 /* 39 vars */) = 0\n--- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=2523394, si_uid=1052093, si_status=0, si_utime=0, si_stime=0} ---\n+++ exited with 0 +++\n\nstudent@os:~/.../support/sleepy:$ cat syscalls.2523394  # syscalls from child process\nexecve("/bin/sh", ["sh", "-c", "sleep 10"], 0x7ffd36253be8 /* 39 vars */) = 0\nexecve("/usr/bin/sleep", ["sleep", "10"], 0x560f41659d40 /* 38 vars */) = 0\n+++ exited with 0 +++\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/operating-systems/Lab/Compute/Scheduling/quiz/who-calls-execve-parent"},"Quiz")),(0,r.kt)("p",null,"Now notice that the child process doesn't simply call ",(0,r.kt)("inlineCode",{parentName:"p"},'execve("/usr/bin/sleep" ...)'),".\nIt first changes its virtual address space (VAS) to that of a ",(0,r.kt)("inlineCode",{parentName:"p"},"bash")," process (",(0,r.kt)("inlineCode",{parentName:"p"},'execve("/bin/sh" ...)'),") and then that ",(0,r.kt)("inlineCode",{parentName:"p"},"bash")," process switches its VAS to ",(0,r.kt)("inlineCode",{parentName:"p"},"sleep"),".\nTherefore, calling ",(0,r.kt)("inlineCode",{parentName:"p"},"system(<some_command>)")," is equivalent to running ",(0,r.kt)("inlineCode",{parentName:"p"},"<some_command>")," in the command-line."),(0,r.kt)("p",null,"With this knowledge in mind, let's implement our own mini-shell.\nStart from the skeleton code in ",(0,r.kt)("inlineCode",{parentName:"p"},"support/mini-shell/mini_shell.c"),".\nWe're already running our Bash interpreter from the command-line, so there's no need to ",(0,r.kt)("inlineCode",{parentName:"p"},"exec")," another Bash from it.\nSimply ",(0,r.kt)("inlineCode",{parentName:"p"},"exec")," the command."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/operating-systems/Lab/Compute/Scheduling/quiz/mini-shell-stops-after-command"},"Quiz")),(0,r.kt)("p",null,'So we need a way to "save" the ',(0,r.kt)("inlineCode",{parentName:"p"},"mini_shell")," process before ",(0,r.kt)("inlineCode",{parentName:"p"},"exec()"),"-ing our command.\nFind a way to do this."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Hint"),":  You can see what ",(0,r.kt)("inlineCode",{parentName:"p"},"sleepy")," does and draw inspiration from there.\nUse ",(0,r.kt)("inlineCode",{parentName:"p"},"strace")," to also list the calls to ",(0,r.kt)("inlineCode",{parentName:"p"},"clone()")," perfromed by ",(0,r.kt)("inlineCode",{parentName:"p"},"sleepy")," or its children.\n",(0,r.kt)("a",{parentName:"p",href:"#threads-and-processes-clone"},"Remember")," what ",(0,r.kt)("inlineCode",{parentName:"p"},"clone()")," is used for and use its parameters to deduce which of the two scenarios happens to ",(0,r.kt)("inlineCode",{parentName:"p"},"sleepy"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Moral of the story"),": We can add another step to the moral of ",(0,r.kt)("a",{parentName:"p",href:"/operating-systems/Lab/Compute/Scheduling/content/processes#practice-fork"},"our previous story"),".\nWhen spawning a new command, the call order is:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"parent: ",(0,r.kt)("inlineCode",{parentName:"li"},"fork()"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"exec()"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"wait()")),(0,r.kt)("li",{parentName:"ul"},"child: ",(0,r.kt)("inlineCode",{parentName:"li"},"exit()"))),(0,r.kt)("h4",{id:"command-executor-in-another-language"},"Command Executor in Another language"),(0,r.kt)("p",null,"Now implement the same functionality (a Bash command executor) in any other language, other than C/C++.\nUse whatever API is provided by your language of choice for creating and waiting for processes."),(0,r.kt)("h3",{id:"the-gil"},"The GIL"),(0,r.kt)("p",null,"Throughout this lab you might have noticed that there were no thread exercises ",(0,r.kt)("em",{parentName:"p"},"in Python"),".\nIf you did, you probably wondered why.\nIt's not because Python does not support threads, because it does, but because of a mechanism called the ",(0,r.kt)("strong",{parentName:"p"},"Global Interpreter Lock"),", or GIL.\nAs its name suggests, this is a lock implemented inside most commonly used Python interpreter (CPython), which only allows ",(0,r.kt)("strong",{parentName:"p"},"one")," thread to run at a given time.\nAs a consequence, multithreaded programs written in Python run ",(0,r.kt)("strong",{parentName:"p"},"concurrently"),", not in parallel.\nFor this reason, you will see no speedup even when you run an embarrassingly parallel code in parallel."),(0,r.kt)("p",null,"However, keep in mind that this drawback does not make threads useless in Python.\nThey are still useful and widely used when a process needs to perform many IO-bound tasks (i.e.: tasks that involve many file reads / writes or network requests).\nSuch tasks run many blocking syscalls that require the thread to switch from the RUNNING state to WAITING.\nDoing so voluntarily makes threads viable because they rarely run for their entire time slice and spend most of the time waiting for data.\nSo it doesn't hurt them to run concurrently, instead of in parallel."),(0,r.kt)("p",null,"Do not make the confusion to believe threads in Python are ",(0,r.kt)("a",{parentName:"p",href:"/operating-systems/Lab/Compute/Scheduling/content/scheduling#user-level-vs-kernel-level-threads"},"user-level threads"),".\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/threading.html#threading.Thread"},(0,r.kt)("inlineCode",{parentName:"a"},"threading.Thread")),"s are kernel-level threads.\nIt's just that they are forced to run concurrenntly by the GIL."),(0,r.kt)("h4",{id:"practice-array-sum-in-python"},"Practice: Array Sum in Python"),(0,r.kt)("p",null,"Let's first probe this by implementing two parallel versions of the code in ",(0,r.kt)("inlineCode",{parentName:"p"},"support/sum-array/python/sum_array_sequential.py"),".\nOne version should use threads and the other should use processes.\nRun each of them using 1, 2, 4, and 8 threads / processes respectively and compare the running times.\nNotice that the running times of the multithreaded implementation do not decrease.\nThis is because the GIL makes it so that those threads that you create essentially run sequentially."),(0,r.kt)("p",null,"The GIL also makes it so that individual Python instructions are atomic.\nRun the code in ",(0,r.kt)("inlineCode",{parentName:"p"},"support/race-condition/python/race_condition.py"),".\nEvery time, ",(0,r.kt)("inlineCode",{parentName:"p"},"var")," will be 0 because the GIL doesn't allow the two threads to run in parallel and reach the critical section at the same time.\nThis means that the instructions ",(0,r.kt)("inlineCode",{parentName:"p"},"var += 1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"var -= 1")," become atomic."),(0,r.kt)("h4",{id:"but-why"},"But Why?"),(0,r.kt)("p",null,"Unlike Bigfoot, or the Loch Ness monster, we have proof that the GIL is real.\nAt first glance, this seems like a huge disadvantage.\nWhy force threads to run sequentially?\nThe answer has to do with memory management.\nIn the ",(0,r.kt)("a",{parentName:"p",href:"../../../data"},"Data chapter"),", you learned that one way of managing memory is via ",(0,r.kt)("em",{parentName:"p"},"garbage collection")," (GC).\nIn Python, the GC uses reference counting, i.e. each object also stores the number of live pointers to it (variables that reference it).\nYou can see that this number needs to be modified atomically by the interpreter to avoid race conditions.\nThis involves adding locks to ",(0,r.kt)("strong",{parentName:"p"},"all")," Python data structures.\nThis large number of locks doesn't scale for a language as large and open as Python.\nIn addition, it also introduces the risk of ",(0,r.kt)("em",{parentName:"p"},"deadlocks"),".\nYou can read more on this topic ",(0,r.kt)("a",{parentName:"p",href:"https://realpython.com/python-gil/"},"in this article")," and if you think eliminating the GIL looks like an easy task, which should have been done long ago, check the requirements ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.python.org/moin/GlobalInterpreterLock"},"here"),".\nThey're not trivial to meet."),(0,r.kt)("p",null,"Single-threadedness is a common trope for interpreted languages to use some sort of GIL.\n",(0,r.kt)("a",{parentName:"p",href:"https://git.ruby-lang.org/ruby.git"},"Ruby MRI, the reference Ruby interpreter")," uses a similar mechanism, called the ",(0,r.kt)("a",{parentName:"p",href:"https://ivoanjo.me/blog/2022/07/17/tracing-ruby-global-vm-lock/"},"Global VM Lock"),".\nJavaScript is even more straightforward: it is single-threaded by design, also for GC-related reasons.\nIt does, however support asynchronous actions, but these are executed on the same thread as every other code.\nThis is implemented by placing each instruction on a ",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/swlh/what-does-it-mean-by-javascript-is-single-threaded-language-f4130645d8a9"},"call stack"),"."),(0,r.kt)("h3",{id:"atomic-assembly"},"Atomic Assembly"),(0,r.kt)("p",null,"No, this section is not about nukes, sadly :(.\nInstead, we aim to get accustomed to the way in which the x86 ISA provides atomic instructions."),(0,r.kt)("p",null,"This mechanism looks very simple.\nIt is but ",(0,r.kt)("strong",{parentName:"p"},"one instruction prefix"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"lock"),".\nIt is not an instruction with its own separate opcode, but a prefix that slightly modifie the opcode of the following instructions to make the CPU execute it atomically (i.e. with exclusive access to the data bus)."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"lock")," must only be place before an instruction that executes a ",(0,r.kt)("em",{parentName:"p"},"read-modify-write")," action.\nFor example, we cannot place it before a ",(0,r.kt)("inlineCode",{parentName:"p"},"mov")," instruction, as the action of a ",(0,r.kt)("inlineCode",{parentName:"p"},"mov")," is simply ",(0,r.kt)("inlineCode",{parentName:"p"},"read")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"write"),".\nInstead, we can place it in front of an ",(0,r.kt)("inlineCode",{parentName:"p"},"inc")," instruction if its operand is memory."),(0,r.kt)("p",null,"Look at the code in ",(0,r.kt)("inlineCode",{parentName:"p"},"support/race-condition/asm/race_condition_lock.S"),".\nIt's an Assembly equivalent of the code you've already seen many times so far (such as ",(0,r.kt)("inlineCode",{parentName:"p"},"support/race-condition/d/race_condition.d"),").\nAssemble and run it a few times.\nNotice the different results you get."),(0,r.kt)("p",null,"Now add the ",(0,r.kt)("inlineCode",{parentName:"p"},"lock")," prefix before ",(0,r.kt)("inlineCode",{parentName:"p"},"inc")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"dec"),".\nReassemble and rerun the code.\nAnd now we have synchronized the two threads by leveraging CPU support."),(0,r.kt)("h3",{id:"synchronization---thread-safe-data-structure"},"Synchronization - Thread-Safe Data Structure"),(0,r.kt)("p",null,"Now it's time for a fully practical exercise.\nGo to ",(0,r.kt)("inlineCode",{parentName:"p"},"support/CLIST/"),".\nIn the file ",(0,r.kt)("inlineCode",{parentName:"p"},"clist.c")," you'll find a simple implementation of an array list.\nAlthough correct, it is not (yet) thread-safe."),(0,r.kt)("p",null,"The code in ",(0,r.kt)("inlineCode",{parentName:"p"},"test.c")," verifies its single-threaded correctness while the one in ",(0,r.kt)("inlineCode",{parentName:"p"},"test_parallel.c")," verifies it works properly with multiple threads.\nYour task is to synchronize this data structure using whichever primitives you like.\nTry to keep the implementation efficient.\nAim to decrease your running times as much as you can."))}c.isMDXComponent=!0}}]);