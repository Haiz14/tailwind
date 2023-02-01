(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2356],{3905:function(a,e,t){"use strict";t.d(e,{Zo:function(){return l},kt:function(){return u}});var n=t(67294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function c(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})),t.push.apply(t,n)}return t}function p(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?c(Object(t),!0).forEach(function(e){s(a,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach(function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))})}return a}var i=n.createContext({}),r=function(a){var e,t=n.useContext(i),s=t;return a&&(s="function"==typeof(e=a)?a(t):p(p({},t),a)),s},l=function(a){var e=r(a.components);return n.createElement(i.Provider,{value:e},a.children)},o={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef(function(a,e){var t=a.components,s=a.mdxType,c=a.originalType,i=a.parentName,l=function(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},c=Object.keys(a);for(n=0;n<c.length;n++)t=c[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(a);for(n=0;n<c.length;n++)t=c[n],!(e.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}(a,["components","mdxType","originalType","parentName"]),m=r(t),u=m["".concat(i,".").concat(s)]||m[s]||o[s]||c;return t?n.createElement(u,p(p({ref:e},l),{},{components:t})):n.createElement(u,p({ref:e},l))});function u(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var c=t.length,p=Array(c);p[0]=m;var i={};for(var r in e)hasOwnProperty.call(e,r)&&(i[r]=e[r]);i.originalType=a,i.mdxType="string"==typeof a?a:s,p[1]=i;for(var l=2;l<c;l++)p[l]=t[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},33594:function(a,e,t){"use strict";t.d(e,{EL:function(){return l}});var n,s=t(67294),c=["bottom","height","left","right","top","width"],p=new Map,i=function a(){var e=[];p.forEach(function(a,t){var n,s,p=t.getBoundingClientRect();n=p,s=a.rect,void 0===n&&(n={}),void 0===s&&(s={}),c.some(function(a){return n[a]!==s[a]})&&(a.rect=p,e.push(a))}),e.forEach(function(a){a.callbacks.forEach(function(e){return e(a.rect)})}),n=window.requestAnimationFrame(a)},r="undefined"!=typeof window&&window.document&&window.document.createElement?s.useLayoutEffect:s.useEffect;function l(a,e,t){"boolean"==typeof(c=e)?o=e:(o=null==(u=null==e?void 0:e.observe)||u,m=null==e?void 0:e.onChange),(l=t)&&"[object Function]"==({}).toString.call(l)&&(m=t);var c,l,o,m,u,g=(0,s.useState)(a.current),k=g[0],d=g[1],N=(0,s.useRef)(!1),b=(0,s.useRef)(!1),j=(0,s.useState)(null),f=j[0],O=j[1],h=(0,s.useRef)(m);return r(function(){h.current=m,a.current!==k&&d(a.current)}),r(function(){k&&!N.current&&(N.current=!0,O(k.getBoundingClientRect()))},[k]),r(function(){if(o){var e=k;if(b.current||(b.current=!0,e=a.current),e){var t,s,c=(t=e,s=function(a){null==h.current||h.current(a),O(a)},{observe:function(){var a=0===p.size;p.has(t)?p.get(t).callbacks.push(s):p.set(t,{rect:void 0,hasRectChanged:!1,callbacks:[s]}),a&&i()},unobserve:function(){var a=p.get(t);if(a){var e=a.callbacks.indexOf(s);e>=0&&a.callbacks.splice(e,1),a.callbacks.length||p.delete(t),p.size||cancelAnimationFrame(n)}}});return c.observe(),function(){c.unobserve()}}}},[o,k,a]),f}},33323:function(a,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/align-self",function(){return t(61910)}])},61910:function(a,e,t){"use strict";t.r(e),t.d(e,{default:function(){return N}});var n=t(99534);t(67294);var s=t(3905);t(41664);var c,p=t(5679),i=t(83434),r=t(53339),l=t(74296),o=t(5566),m=t(6628),u=r.L,g=function(a){return console.warn("Component Heading was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",Object.assign({},a))},k={Layout:u,classes:{utilities:{".self-auto":{"align-self":"auto"},".self-start":{"align-self":"flex-start"},".self-end":{"align-self":"flex-end"},".self-center":{"align-self":"center"},".self-stretch":{"align-self":"stretch"},".self-baseline":{"align-self":"baseline"}}},meta:{title:"Align Self",description:"Utilities for controlling how an individual flex or grid item is positioned along its container's cross axis."},slug:"align-self",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Auto",slug:"auto",children:[]},{title:"Start",slug:"start",children:[]},{title:"Center",slug:"center",children:[]},{title:"End",slug:"end",children:[]},{title:"Stretch",slug:"stretch",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]}]},d=l.X_;function N(a){var e=a.components,t=(0,n.Z)(a,["components"]);return(0,s.kt)(d,Object.assign({},k,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)(p.X,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3}},"Basic usage"),(0,s.kt)(p.X,{level:3,id:"auto",nextElement:{type:"paragraph"}},"Auto"),(0,s.kt)("p",null,"Use ",(0,s.kt)("inlineCode",{parentName:"p"},"self-auto")," to align an item based on the value of the container’s ",(0,s.kt)("inlineCode",{parentName:"p"},"align-items")," property:"),(0,s.kt)(i.e,{containerClassName:"mt-4 -mb-3",html:'\n  <div class="font-mono text-white text-sm font-bold leading-6">\n    <div class="flex items-stretch gap-4 w-full rounded-lg bg-stripes-sky h-24">\n      <div class="p-4 flex-1 flex items-center justify-center rounded-lg bg-sky-300 dark:bg-sky-800 dark:text-sky-500">01</div>\n      <div class="self-auto p-4 flex-1 flex items-center justify-center shadow-lg rounded-lg bg-sky-500">02</div>\n      <div class="p-4 flex-1 flex items-center justify-center rounded-lg bg-sky-300 dark:bg-sky-800 dark:text-sky-500">03</div>\n    </div>\n  </div>\n'}),(0,s.kt)("pre",Object.assign({},{className:"language-html"}),(0,s.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"flex items-stretch ...",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"01",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"self-auto")," ...",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"02",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"03",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,s.kt)(p.X,{level:3,id:"start",nextElement:{type:"paragraph"}},"Start"),(0,s.kt)("p",null,"Use ",(0,s.kt)("inlineCode",{parentName:"p"},"self-start")," to align an item to the start of the container’s cross axis, despite the container’s ",(0,s.kt)("inlineCode",{parentName:"p"},"align-items")," value:"),(0,s.kt)(i.e,{containerClassName:"mt-4 -mb-3",html:'\n  <div class="font-mono text-white text-sm font-bold leading-6">\n    <div class="flex items-stretch gap-4 w-full rounded-lg bg-stripes-pink h-24">\n      <div class="p-4 flex-1 flex items-center justify-center rounded-lg bg-pink-300 dark:bg-pink-800 dark:text-pink-400">01</div>\n      <div class="self-start p-4 flex-1 flex items-center justify-center shadow-lg rounded-lg bg-pink-500">02</div>\n      <div class="p-4 flex-1 flex items-center justify-center rounded-lg bg-pink-300 dark:bg-pink-800 dark:text-pink-400">03</div>\n    </div>\n  </div>\n'}),(0,s.kt)("pre",Object.assign({},{className:"language-html"}),(0,s.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"flex items-stretch ...",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"01",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"self-start")," ...",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"02",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"03",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,s.kt)(p.X,{level:3,id:"center",nextElement:{type:"paragraph"}},"Center"),(0,s.kt)("p",null,"Use ",(0,s.kt)("inlineCode",{parentName:"p"},"self-center")," to align an item along the center of the container’s cross axis, despite the container’s ",(0,s.kt)("inlineCode",{parentName:"p"},"align-items")," value:"),(0,s.kt)(i.e,{containerClassName:"mt-4 -mb-3",html:'\n  <div class="font-mono text-white text-sm font-bold leading-6">\n    <div class="flex items-stretch gap-4 w-full rounded-lg bg-stripes-purple h-24">\n      <div class="p-4 flex-1 flex items-center justify-center rounded-lg bg-purple-300 dark:bg-purple-800 dark:text-purple-400">01</div>\n      <div class="self-center p-4 flex-1 flex items-center justify-center shadow-lg rounded-lg bg-purple-500">02</div>\n      <div class="p-4 flex-1 flex items-center justify-center rounded-lg bg-purple-300 dark:bg-purple-800 dark:text-purple-400">03</div>\n    </div>\n  </div>\n'}),(0,s.kt)("pre",Object.assign({},{className:"language-html"}),(0,s.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"flex items-stretch ...",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"01",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"self-center")," ...",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"02",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"03",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,s.kt)(p.X,{level:3,id:"end",nextElement:{type:"paragraph"}},"End"),(0,s.kt)("p",null,"Use ",(0,s.kt)("inlineCode",{parentName:"p"},"self-end")," to align an item to the end of the container’s cross axis, despite the container’s ",(0,s.kt)("inlineCode",{parentName:"p"},"align-items")," value:"),(0,s.kt)(i.e,{containerClassName:"mt-4 -mb-3",html:'\n  <div class="font-mono text-white text-sm font-bold leading-6">\n    <div class="flex items-stretch gap-4 w-full rounded-lg bg-stripes-indigo h-24">\n      <div class="p-4 flex-1 flex items-center justify-center rounded-lg bg-indigo-300 dark:bg-indigo-800 dark:text-indigo-400">01</div>\n      <div class="self-end p-4 flex-1 flex items-center justify-center shadow-lg rounded-lg bg-indigo-500">02</div>\n      <div class="p-4 flex-1 flex items-center justify-center rounded-lg bg-indigo-300 dark:bg-indigo-800 dark:text-indigo-400">03</div>\n    </div>\n  </div>\n'}),(0,s.kt)("pre",Object.assign({},{className:"language-html"}),(0,s.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"flex items-stretch ...",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"01",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"self-end")," ...",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"02",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"03",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,s.kt)(p.X,{level:3,id:"stretch",nextElement:{type:"paragraph"}},"Stretch"),(0,s.kt)("p",null,"Use ",(0,s.kt)("inlineCode",{parentName:"p"},"self-stretch")," to stretch an item to fill the container’s cross axis, despite the container’s ",(0,s.kt)("inlineCode",{parentName:"p"},"align-items")," value:"),(0,s.kt)(i.e,{containerClassName:"mt-4 -mb-3",html:'\n  <div class="font-mono text-white text-sm font-bold leading-6">\n    <div class="flex items-stretch gap-4 w-full rounded-lg bg-stripes-fuchsia h-24">\n      <div class="p-4 flex-1 flex items-center justify-center rounded-lg bg-fuchsia-300 dark:bg-fuchsia-800 dark:text-fuchsia-400">01</div>\n      <div class="self-stretch p-4 flex-1 flex items-center justify-center shadow-lg rounded-lg bg-fuchsia-500">02</div>\n      <div class="p-4 flex-1 flex items-center justify-center rounded-lg bg-fuchsia-300 dark:bg-fuchsia-800 dark:text-fuchsia-400">03</div>\n    </div>\n  </div>\n'}),(0,s.kt)("pre",Object.assign({},{className:"language-html"}),(0,s.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"flex items-stretch ...",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"01",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"self-stretch")," ...",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"02",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"03",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,s.kt)("hr",null),(0,s.kt)(g,{level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},ignore:!0,mdxType:"Heading"},"Applying conditionally"),(0,s.kt)(g,{level:3,id:"hover-focus-and-other-states",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Hover, focus, and other states"),(0,s.kt)(m.k,{defaultClass:"self-auto",featuredClass:"self-end",mdxType:"HoverFocusAndOtherStates"}),(0,s.kt)(g,{level:3,id:"breakpoints-and-media-queries",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Breakpoints and media queries"),(0,s.kt)(o.p,{defaultClass:"self-auto",featuredClass:"self-end",mdxType:"BreakpointsAndMediaQueries"}))}N.isMDXComponent=!0,N.layoutProps=k},5566:function(a,e,t){"use strict";t.d(e,{p:function(){return s}});var n=t(85893);function s(a){var e=a.defaultClass,t=a.featuredClass,s=a.element,c=a.children;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("p",{children:["You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use ",(0,n.jsxs)("code",{children:["md:",t]})," to apply the ",(0,n.jsx)("code",{children:t})," utility at only medium screen sizes and above."]}),c||(0,n.jsx)("pre",{className:"language-html",children:(0,n.jsx)("code",{className:"language-html",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>{element}</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{defaultClass} <span class="code-highlight bg-code-highlight">md:{featuredClass}</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>{element}</span><span class="token punctuation">></span></span>\n'.replace(/{element}/g,void 0===s?"div":s).replace("{defaultClass} ",e?"".concat(e," "):"").replace("{featuredClass}",t)}})}),(0,n.jsxs)("p",{children:["To learn more, check out the documentation on"," ",(0,n.jsx)("a",{href:"/docs/responsive-design",children:"Responsive Design"}),","," ",(0,n.jsx)("a",{href:"/docs/dark-mode",children:"Dark Mode"})," and"," ",(0,n.jsx)("a",{href:"/docs/hover-focus-and-other-states#media-queries",children:"other media query modifiers"}),"."]})]})}},83434:function(a,e,t){"use strict";t.d(e,{e:function(){return o}});var n=t(26042),s=t(85893),c=t(86010),p=t(19150),i=t(67294),r={none:"",md:"p-8"};function l(a){var e=a.as,t=a.style,p=a.padding,i=a.p,l=a.className,o=a.containerClassName,m=a.html,u=a.children,g=a.hint,k=a.hintClassName,d=a.lightOnly,N=void 0!==d&&d,b=null!=p?p:void 0===i?"md":i,j=r[b];if(void 0===j)throw Error("Invalid padding value: ".concat(JSON.stringify(b)));return(0,s.jsxs)("div",{className:o,children:[void 0!==g&&(0,s.jsx)("div",{className:(0,c.Z)(k,"not-prose mb-4"),children:(0,s.jsxs)("div",{className:"flex space-x-2",children:[(0,s.jsxs)("svg",{className:"flex-none w-5 h-5",viewBox:"0 0 20 20",fill:"none",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,s.jsx)("path",{d:"m9.813 9.25.346-5.138a1.276 1.276 0 0 0-2.54-.235L6.75 11.25 5.147 9.327a1.605 1.605 0 0 0-2.388-.085.018.018 0 0 0-.004.019l1.98 4.87a5 5 0 0 0 4.631 3.119h3.885a4 4 0 0 0 4-4v-1a3 3 0 0 0-3-3H9.813Z",className:"stroke-slate-400 dark:stroke-slate-300"}),(0,s.jsx)("path",{d:"M3 5s.35-.47 1.25-.828m9.516-.422c2.078.593 3.484 1.5 3.484 1.5",className:"stroke-slate-400 dark:stroke-sky-400"})]}),(0,s.jsx)("p",{className:"text-slate-700 text-sm font-medium dark:text-slate-200",children:g})]})}),(0,s.jsxs)(void 0===e?"div":e,{style:t,className:(0,c.Z)("not-prose relative bg-slate-50 rounded-xl overflow-hidden",!N&&"dark:bg-slate-800/25"),children:[(0,s.jsx)("div",{style:{backgroundPosition:"10px 10px"},className:(0,c.Z)("absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]",!N&&"dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]")}),(0,s.jsx)("div",(0,n.Z)({className:(0,c.Z)("relative rounded-xl overflow-auto",j,l)},m?{dangerouslySetInnerHTML:{__html:m}}:{children:u})),(0,s.jsx)("div",{className:(0,c.Z)("absolute inset-0 pointer-events-none border border-black/5 rounded-xl",!N&&"dark:border-white/5")})]})]})}function o(a){return a.resizable?(0,s.jsx)(m,(0,n.Z)({},a)):(0,s.jsx)(l,(0,n.Z)({},a))}function m(a){var e=(0,i.useRef)(),t=(0,p.c$)(0),c=(0,i.useRef)(),r=(0,i.useRef)();return(0,i.useEffect)(function(){var a=new window.ResizeObserver(function(){t.set(0)});return a.observe(e.current),function(){a.disconnect()}},[]),(0,i.useEffect)(function(){r.current.onselectstart=function(){return!1}},[]),(0,s.jsxs)("div",{ref:e,className:"relative",children:[(0,s.jsx)(l,(0,n.Z)({as:p.ww.div,style:{marginRight:(0,p.Hm)(t,function(a){return-a})}},a)),(0,s.jsx)("div",{ref:c,className:"absolute inset-y-0 right-[-1.375rem] left-80 ml-4 pointer-events-none",children:(0,s.jsx)(p.ww.div,{ref:r,drag:"x",_dragX:t,dragMomentum:!1,dragElastic:0,dragConstraints:c,className:"pointer-events-auto absolute top-1/2 right-0 -mt-6 p-2 hidden md:block cursor-ew-resize",style:{x:t},onDragStart:function(){document.documentElement.classList.add("dragging-ew")},onDragEnd:function(){document.documentElement.classList.remove("dragging-ew")},children:(0,s.jsx)("div",{className:"w-1.5 h-8 bg-slate-500/60 rounded-full"})})})]})}},6628:function(a,e,t){"use strict";t.d(e,{k:function(){return s}});var n=t(85893);function s(a){a.property,a.utility;var e=a.variant,t=void 0===e?"hover":e,s=a.defaultClass,c=a.featuredClass,p=a.element,i=a.children;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("p",{children:["Tailwind lets you conditionally apply utility classes in different states using variant modifiers. For example, use"," ",(0,n.jsxs)("code",{children:[t,":",c]})," ","to only apply the ",(0,n.jsx)("code",{children:c})," utility on ",t,"."]}),i||(0,n.jsx)("pre",{className:"language-html",children:(0,n.jsx)("code",{className:"language-html",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>{element}</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{defaultClass} <span class="code-highlight bg-code-highlight">{variant}:{featuredClass}</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>{element}</span><span class="token punctuation">></span></span>\n'.replace(/{element}/g,void 0===p?"div":p).replace("{defaultClass} ",s?"".concat(s," "):"").replace("{variant}",t).replace("{featuredClass}",c)}})}),(0,n.jsxs)("p",{children:["For a complete list of all available state modifiers, check out the"," ",(0,n.jsx)("a",{href:"/docs/hover-focus-and-other-states",children:"Hover, Focus, & Other States"})," documentation."]})]})}}},function(a){a.O(0,[3430,2619,4713,1818,2474,9774,2888,179],function(){return a(a.s=33323)}),_N_E=a.O()}]);