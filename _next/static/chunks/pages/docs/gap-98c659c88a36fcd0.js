(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9532],{3905:function(a,e,n){"use strict";n.d(e,{Zo:function(){return o},kt:function(){return m}});var t=n(67294);function s(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function p(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})),n.push.apply(n,t)}return n}function r(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach(function(e){s(a,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach(function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))})}return a}var c=t.createContext({}),i=function(a){var e,n=t.useContext(c),s=n;return a&&(s="function"==typeof(e=a)?a(n):r(r({},n),a)),s},o=function(a){var e=i(a.components);return t.createElement(c.Provider,{value:e},a.children)},l={inlineCode:"code",wrapper:function(a){var e=a.children;return t.createElement(t.Fragment,{},e)}},g=t.forwardRef(function(a,e){var n=a.components,s=a.mdxType,p=a.originalType,c=a.parentName,o=function(a,e){if(null==a)return{};var n,t,s=function(a,e){if(null==a)return{};var n,t,s={},p=Object.keys(a);for(t=0;t<p.length;t++)n=p[t],e.indexOf(n)>=0||(s[n]=a[n]);return s}(a,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(a);for(t=0;t<p.length;t++)n=p[t],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(a,n)&&(s[n]=a[n])}return s}(a,["components","mdxType","originalType","parentName"]),g=i(n),m=g["".concat(c,".").concat(s)]||g[s]||l[s]||p;return n?t.createElement(m,r(r({ref:e},o),{},{components:n})):t.createElement(m,r({ref:e},o))});function m(a,e){var n=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var p=n.length,r=Array(p);r[0]=g;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=a,c.mdxType="string"==typeof a?a:s,r[1]=c;for(var o=2;o<p;o++)r[o]=n[o];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},33594:function(a,e,n){"use strict";n.d(e,{EL:function(){return o}});var t,s=n(67294),p=["bottom","height","left","right","top","width"],r=new Map,c=function a(){var e=[];r.forEach(function(a,n){var t,s,r=n.getBoundingClientRect();t=r,s=a.rect,void 0===t&&(t={}),void 0===s&&(s={}),p.some(function(a){return t[a]!==s[a]})&&(a.rect=r,e.push(a))}),e.forEach(function(a){a.callbacks.forEach(function(e){return e(a.rect)})}),t=window.requestAnimationFrame(a)},i="undefined"!=typeof window&&window.document&&window.document.createElement?s.useLayoutEffect:s.useEffect;function o(a,e,n){"boolean"==typeof(p=e)?l=e:(l=null==(m=null==e?void 0:e.observe)||m,g=null==e?void 0:e.onChange),(o=n)&&"[object Function]"==({}).toString.call(o)&&(g=n);var p,o,l,g,m,u=(0,s.useState)(a.current),k=u[0],N=u[1],d=(0,s.useRef)(!1),b=(0,s.useRef)(!1),j=(0,s.useState)(null),O=j[0],h=j[1],f=(0,s.useRef)(g);return i(function(){f.current=g,a.current!==k&&N(a.current)}),i(function(){k&&!d.current&&(d.current=!0,h(k.getBoundingClientRect()))},[k]),i(function(){if(l){var e=k;if(b.current||(b.current=!0,e=a.current),e){var n,s,p=(n=e,s=function(a){null==f.current||f.current(a),h(a)},{observe:function(){var a=0===r.size;r.has(n)?r.get(n).callbacks.push(s):r.set(n,{rect:void 0,hasRectChanged:!1,callbacks:[s]}),a&&c()},unobserve:function(){var a=r.get(n);if(a){var e=a.callbacks.indexOf(s);e>=0&&a.callbacks.splice(e,1),a.callbacks.length||r.delete(n),r.size||cancelAnimationFrame(t)}}});return p.observe(),function(){p.unobserve()}}}},[l,k,a]),O}},16442:function(a,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/gap",function(){return n(18997)}])},18997:function(a,e,n){"use strict";n.r(e),n.d(e,{default:function(){return v}});var t=n(99534);n(67294);var s,p=n(3905),r=n(41664),c=n.n(r),i=n(59533),o=n(5679),l=n(83434),g=n(53339),m=n(74296),u=n(83629),k=n(79583),N=n(5566),d=n(6628),b=g.L,j={utilities:{".gap-0":{gap:"0px"},".gap-1":{gap:"0.25rem"},".gap-2":{gap:"0.5rem"},".gap-3":{gap:"0.75rem"},".gap-4":{gap:"1rem"},".gap-5":{gap:"1.25rem"},".gap-6":{gap:"1.5rem"},".gap-7":{gap:"1.75rem"},".gap-8":{gap:"2rem"},".gap-9":{gap:"2.25rem"},".gap-10":{gap:"2.5rem"},".gap-11":{gap:"2.75rem"},".gap-12":{gap:"3rem"},".gap-14":{gap:"3.5rem"},".gap-16":{gap:"4rem"},".gap-20":{gap:"5rem"},".gap-24":{gap:"6rem"},".gap-28":{gap:"7rem"},".gap-32":{gap:"8rem"},".gap-36":{gap:"9rem"},".gap-40":{gap:"10rem"},".gap-44":{gap:"11rem"},".gap-48":{gap:"12rem"},".gap-52":{gap:"13rem"},".gap-56":{gap:"14rem"},".gap-60":{gap:"15rem"},".gap-64":{gap:"16rem"},".gap-72":{gap:"18rem"},".gap-80":{gap:"20rem"},".gap-96":{gap:"24rem"},".gap-px":{gap:"1px"},".gap-0\\.5":{gap:"0.125rem"},".gap-1\\.5":{gap:"0.375rem"},".gap-2\\.5":{gap:"0.625rem"},".gap-3\\.5":{gap:"0.875rem"},".gap-x-0":{"column-gap":"0px"},".gap-x-1":{"column-gap":"0.25rem"},".gap-x-2":{"column-gap":"0.5rem"},".gap-x-3":{"column-gap":"0.75rem"},".gap-x-4":{"column-gap":"1rem"},".gap-x-5":{"column-gap":"1.25rem"},".gap-x-6":{"column-gap":"1.5rem"},".gap-x-7":{"column-gap":"1.75rem"},".gap-x-8":{"column-gap":"2rem"},".gap-x-9":{"column-gap":"2.25rem"},".gap-x-10":{"column-gap":"2.5rem"},".gap-x-11":{"column-gap":"2.75rem"},".gap-x-12":{"column-gap":"3rem"},".gap-x-14":{"column-gap":"3.5rem"},".gap-x-16":{"column-gap":"4rem"},".gap-x-20":{"column-gap":"5rem"},".gap-x-24":{"column-gap":"6rem"},".gap-x-28":{"column-gap":"7rem"},".gap-x-32":{"column-gap":"8rem"},".gap-x-36":{"column-gap":"9rem"},".gap-x-40":{"column-gap":"10rem"},".gap-x-44":{"column-gap":"11rem"},".gap-x-48":{"column-gap":"12rem"},".gap-x-52":{"column-gap":"13rem"},".gap-x-56":{"column-gap":"14rem"},".gap-x-60":{"column-gap":"15rem"},".gap-x-64":{"column-gap":"16rem"},".gap-x-72":{"column-gap":"18rem"},".gap-x-80":{"column-gap":"20rem"},".gap-x-96":{"column-gap":"24rem"},".gap-x-px":{"column-gap":"1px"},".gap-x-0\\.5":{"column-gap":"0.125rem"},".gap-x-1\\.5":{"column-gap":"0.375rem"},".gap-x-2\\.5":{"column-gap":"0.625rem"},".gap-x-3\\.5":{"column-gap":"0.875rem"},".gap-y-0":{"row-gap":"0px"},".gap-y-1":{"row-gap":"0.25rem"},".gap-y-2":{"row-gap":"0.5rem"},".gap-y-3":{"row-gap":"0.75rem"},".gap-y-4":{"row-gap":"1rem"},".gap-y-5":{"row-gap":"1.25rem"},".gap-y-6":{"row-gap":"1.5rem"},".gap-y-7":{"row-gap":"1.75rem"},".gap-y-8":{"row-gap":"2rem"},".gap-y-9":{"row-gap":"2.25rem"},".gap-y-10":{"row-gap":"2.5rem"},".gap-y-11":{"row-gap":"2.75rem"},".gap-y-12":{"row-gap":"3rem"},".gap-y-14":{"row-gap":"3.5rem"},".gap-y-16":{"row-gap":"4rem"},".gap-y-20":{"row-gap":"5rem"},".gap-y-24":{"row-gap":"6rem"},".gap-y-28":{"row-gap":"7rem"},".gap-y-32":{"row-gap":"8rem"},".gap-y-36":{"row-gap":"9rem"},".gap-y-40":{"row-gap":"10rem"},".gap-y-44":{"row-gap":"11rem"},".gap-y-48":{"row-gap":"12rem"},".gap-y-52":{"row-gap":"13rem"},".gap-y-56":{"row-gap":"14rem"},".gap-y-60":{"row-gap":"15rem"},".gap-y-64":{"row-gap":"16rem"},".gap-y-72":{"row-gap":"18rem"},".gap-y-80":{"row-gap":"20rem"},".gap-y-96":{"row-gap":"24rem"},".gap-y-px":{"row-gap":"1px"},".gap-y-0\\.5":{"row-gap":"0.125rem"},".gap-y-1\\.5":{"row-gap":"0.375rem"},".gap-y-2\\.5":{"row-gap":"0.625rem"},".gap-y-3\\.5":{"row-gap":"0.875rem"}},sort:u.nR},O=function(a){return console.warn("Component Heading was not imported, exported, or provided by MDXProvider as global scope"),(0,p.kt)("div",Object.assign({},a))},h={Layout:b,classes:j,meta:{title:"Gap",description:"Utilities for controlling gutters between grid and flexbox items."},slug:"gap",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Setting the gap between elements",slug:"setting-the-gap-between-elements",children:[]},{title:"Changing row and column gaps independently",slug:"changing-row-and-column-gaps-independently",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]},{title:"Using custom values",slug:"using-custom-values",children:[{title:"Customizing your theme",slug:"customizing-your-theme",children:[]},{title:"Arbitrary values",slug:"arbitrary-values",children:[]}]}]},f=m.X_;function v(a){var e=a.components,n=(0,t.Z)(a,["components"]);return(0,p.kt)(f,Object.assign({},h,n,{components:e,mdxType:"MDXLayout"}),(0,p.kt)(o.X,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3}},"Basic usage"),(0,p.kt)(o.X,{level:3,id:"setting-the-gap-between-elements",nextElement:{type:"paragraph"}},"Setting the gap between elements"),(0,p.kt)("p",null,"Use ",(0,p.kt)("inlineCode",{parentName:"p"},"gap-{size}")," to change the gap between both rows and columns in grid and flexbox layouts."),(0,p.kt)(l.e,{containerClassName:"mt-4 -mb-3",html:'\n  <div class="grid grid-cols-2 gap-4 font-mono text-white text-sm text-center font-bold leading-6 bg-stripes-violet rounded-lg">\n    <div class="p-4 rounded-lg shadow-lg bg-violet-500">01</div>\n    <div class="p-4 rounded-lg shadow-lg bg-violet-500">02</div>\n    <div class="p-4 rounded-lg shadow-lg bg-violet-500">03</div>\n    <div class="p-4 rounded-lg shadow-lg bg-violet-500">04</div>\n  </div>\n'}),(0,p.kt)("pre",Object.assign({},{className:"language-html"}),(0,p.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,p.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"grid ",(0,p.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"gap-4")," grid-cols-2",(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,p.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"01",(0,p.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,p.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"02",(0,p.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,p.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"03",(0,p.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,p.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"04",(0,p.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,p.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,p.kt)(o.X,{level:3,id:"changing-row-and-column-gaps-independently",nextElement:{type:"paragraph"}},"Changing row and column gaps independently"),(0,p.kt)("p",null,"Use ",(0,p.kt)("inlineCode",{parentName:"p"},"gap-x-{size}")," and ",(0,p.kt)("inlineCode",{parentName:"p"},"gap-y-{size}")," to change the gap between rows and columns independently."),(0,p.kt)(l.e,{containerClassName:"mt-4 -mb-3",html:'\n  <div class="grid grid-cols-3 gap-x-8 gap-y-4 font-mono text-white text-sm text-center font-bold leading-6 bg-stripes-sky rounded-lg">\n    <div class="p-4 rounded-lg shadow-lg bg-sky-500">01</div>\n    <div class="p-4 rounded-lg shadow-lg bg-sky-500">02</div>\n    <div class="p-4 rounded-lg shadow-lg bg-sky-500">03</div>\n    <div class="p-4 rounded-lg shadow-lg bg-sky-500">04</div>\n    <div class="p-4 rounded-lg shadow-lg bg-sky-500">05</div>\n    <div class="p-4 rounded-lg shadow-lg bg-sky-500">06</div>\n  </div>\n'}),(0,p.kt)("pre",Object.assign({},{className:"language-html"}),(0,p.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,p.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"grid ",(0,p.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"gap-x-8")," ",(0,p.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"gap-y-4")," grid-cols-3",(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,p.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"01",(0,p.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,p.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"02",(0,p.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,p.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"03",(0,p.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,p.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"04",(0,p.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,p.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"05",(0,p.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,p.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"06",(0,p.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,p.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,p.kt)("hr",null),(0,p.kt)(O,{level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},ignore:!0,mdxType:"Heading"},"Applying conditionally"),(0,p.kt)(O,{level:3,id:"hover-focus-and-other-states",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Hover, focus, and other states"),(0,p.kt)(d.k,{defaultClass:"grid gap-4",featuredClass:"gap-6",mdxType:"HoverFocusAndOtherStates"}),(0,p.kt)(O,{level:3,id:"breakpoints-and-media-queries",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Breakpoints and media queries"),(0,p.kt)(N.p,{defaultClass:"grid gap-4",featuredClass:"gap-6",mdxType:"BreakpointsAndMediaQueries"}),(0,p.kt)("hr",null),(0,p.kt)(o.X,{level:2,id:"using-custom-values",nextElement:{type:"heading",depth:3}},"Using custom values"),(0,p.kt)(o.X,{level:3,id:"customizing-your-theme",nextElement:{type:"paragraph"}},"Customizing your theme"),(0,p.kt)("p",null,"By default, Tailwind’s gap scale uses the ",(0,p.kt)(c(),{href:"/docs/customizing-spacing",passHref:!0},(0,p.kt)("a",null,"default spacing scale")),". You can customize your spacing scale by editing ",(0,p.kt)("inlineCode",{parentName:"p"},"theme.spacing")," or ",(0,p.kt)("inlineCode",{parentName:"p"},"theme.extend.spacing")," in your ",(0,p.kt)("inlineCode",{parentName:"p"},"tailwind.config.js")," file."),(0,p.kt)(i.M,{filename:"tailwind.config.js"},(0,p.kt)("pre",Object.assign({},{className:"language-diff-js"}),(0,p.kt)("code",Object.assign({parentName:"pre"},{className:"language-diff-js"}),(0,p.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"module"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"."),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token property-access"}),"exports"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),"="),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,p.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"  "),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token literal-property property"}),"theme"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,p.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"    "),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token literal-property property"}),"extend"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,p.kt)("span",Object.assign({parentName:"code"},{className:"token language-js inserted"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"      "),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token literal-property property"}),"spacing"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,p.kt)("span",Object.assign({parentName:"code"},{className:"token language-js inserted"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"        "),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token string-property property"}),"'11'"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token string"}),"'2.75rem'"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),","),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,p.kt)("span",Object.assign({parentName:"code"},{className:"token language-js inserted"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"      "),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,p.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"    "),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,p.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"  "),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,p.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),"\n")))),(0,p.kt)("p",null,"Alternatively, you can customize just the gap scale by editing ",(0,p.kt)("inlineCode",{parentName:"p"},"theme.gap")," or ",(0,p.kt)("inlineCode",{parentName:"p"},"theme.extend.gap")," in your ",(0,p.kt)("inlineCode",{parentName:"p"},"tailwind.config.js")," file."),(0,p.kt)(i.M,{filename:"tailwind.config.js"},(0,p.kt)("pre",Object.assign({},{className:"language-diff-js"}),(0,p.kt)("code",Object.assign({parentName:"pre"},{className:"language-diff-js"}),(0,p.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"module"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"."),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token property-access"}),"exports"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),"="),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,p.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"  "),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token literal-property property"}),"theme"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,p.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"    "),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token literal-property property"}),"extend"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,p.kt)("span",Object.assign({parentName:"code"},{className:"token language-js inserted"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"      "),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token literal-property property"}),"gap"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,p.kt)("span",Object.assign({parentName:"code"},{className:"token language-js inserted"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"        "),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token string-property property"}),"'11'"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token string"}),"'2.75rem'"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),","),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,p.kt)("span",Object.assign({parentName:"code"},{className:"token language-js inserted"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"      "),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,p.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"    "),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,p.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"  "),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,p.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),(0,p.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),"\n")))),(0,p.kt)("p",null,"Learn more about customizing the default theme in the ",(0,p.kt)(c(),{href:"/docs/theme#customizing-the-default-theme",passHref:!0},(0,p.kt)("a",null,"theme customization"))," documentation."),(0,p.kt)(o.X,{level:3,id:"arbitrary-values",nextElement:{type:"jsx"}},"Arbitrary values"),(0,p.kt)(k.k,{property:"gap",defaultClass:"grid",featuredClass:"gap-[2.75rem]",mdxType:"ArbitraryValues"}))}v.isMDXComponent=!0,v.layoutProps=h},59533:function(a,e,n){"use strict";n.d(e,{M:function(){return p}});var t=n(85893),s=n(6774);function p(a){var e=a.filename,n=a.children;return(0,t.jsxs)("div",{className:"mt-5 mb-8 first:mt-0 last:mb-0 pt-2 bg-slate-800 rounded-xl shadow-lg overflow-hidden dark:ring-1 dark:ring-white/10 dark:ring-inset",children:[(0,t.jsx)(s.n,{primary:{name:e},showTabMarkers:!1}),(0,t.jsx)("div",{className:"children:my-0 children:!shadow-none children:bg-transparent",children:n})]})}},83434:function(a,e,n){"use strict";n.d(e,{e:function(){return l}});var t=n(26042),s=n(85893),p=n(86010),r=n(19150),c=n(67294),i={none:"",md:"p-8"};function o(a){var e=a.as,n=a.style,r=a.padding,c=a.p,o=a.className,l=a.containerClassName,g=a.html,m=a.children,u=a.hint,k=a.hintClassName,N=a.lightOnly,d=void 0!==N&&N,b=null!=r?r:void 0===c?"md":c,j=i[b];if(void 0===j)throw Error("Invalid padding value: ".concat(JSON.stringify(b)));return(0,s.jsxs)("div",{className:l,children:[void 0!==u&&(0,s.jsx)("div",{className:(0,p.Z)(k,"not-prose mb-4"),children:(0,s.jsxs)("div",{className:"flex space-x-2",children:[(0,s.jsxs)("svg",{className:"flex-none w-5 h-5",viewBox:"0 0 20 20",fill:"none",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,s.jsx)("path",{d:"m9.813 9.25.346-5.138a1.276 1.276 0 0 0-2.54-.235L6.75 11.25 5.147 9.327a1.605 1.605 0 0 0-2.388-.085.018.018 0 0 0-.004.019l1.98 4.87a5 5 0 0 0 4.631 3.119h3.885a4 4 0 0 0 4-4v-1a3 3 0 0 0-3-3H9.813Z",className:"stroke-slate-400 dark:stroke-slate-300"}),(0,s.jsx)("path",{d:"M3 5s.35-.47 1.25-.828m9.516-.422c2.078.593 3.484 1.5 3.484 1.5",className:"stroke-slate-400 dark:stroke-sky-400"})]}),(0,s.jsx)("p",{className:"text-slate-700 text-sm font-medium dark:text-slate-200",children:u})]})}),(0,s.jsxs)(void 0===e?"div":e,{style:n,className:(0,p.Z)("not-prose relative bg-slate-50 rounded-xl overflow-hidden",!d&&"dark:bg-slate-800/25"),children:[(0,s.jsx)("div",{style:{backgroundPosition:"10px 10px"},className:(0,p.Z)("absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]",!d&&"dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]")}),(0,s.jsx)("div",(0,t.Z)({className:(0,p.Z)("relative rounded-xl overflow-auto",j,o)},g?{dangerouslySetInnerHTML:{__html:g}}:{children:m})),(0,s.jsx)("div",{className:(0,p.Z)("absolute inset-0 pointer-events-none border border-black/5 rounded-xl",!d&&"dark:border-white/5")})]})]})}function l(a){return a.resizable?(0,s.jsx)(g,(0,t.Z)({},a)):(0,s.jsx)(o,(0,t.Z)({},a))}function g(a){var e=(0,c.useRef)(),n=(0,r.c$)(0),p=(0,c.useRef)(),i=(0,c.useRef)();return(0,c.useEffect)(function(){var a=new window.ResizeObserver(function(){n.set(0)});return a.observe(e.current),function(){a.disconnect()}},[]),(0,c.useEffect)(function(){i.current.onselectstart=function(){return!1}},[]),(0,s.jsxs)("div",{ref:e,className:"relative",children:[(0,s.jsx)(o,(0,t.Z)({as:r.ww.div,style:{marginRight:(0,r.Hm)(n,function(a){return-a})}},a)),(0,s.jsx)("div",{ref:p,className:"absolute inset-y-0 right-[-1.375rem] left-80 ml-4 pointer-events-none",children:(0,s.jsx)(r.ww.div,{ref:i,drag:"x",_dragX:n,dragMomentum:!1,dragElastic:0,dragConstraints:p,className:"pointer-events-auto absolute top-1/2 right-0 -mt-6 p-2 hidden md:block cursor-ew-resize",style:{x:n},onDragStart:function(){document.documentElement.classList.add("dragging-ew")},onDragEnd:function(){document.documentElement.classList.remove("dragging-ew")},children:(0,s.jsx)("div",{className:"w-1.5 h-8 bg-slate-500/60 rounded-full"})})})]})}},6774:function(a,e,n){"use strict";n.d(e,{n:function(){return p}});var t=n(85893),s=n(86010);function p(a){var e=a.primary,n=a.secondary,p=a.showTabMarkers,r=a.side,c=a.translucent,i=a.children;return(0,t.jsxs)("div",{className:"flex text-slate-400 text-xs leading-6",children:[(0,t.jsxs)("div",{className:"flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center",children:[e.name,(void 0===p||p)&&(e.saved?(0,t.jsx)("svg",{viewBox:"0 0 4 4",className:"ml-2.5 flex-none w-1 h-1 text-slate-500 overflow-visible",children:(0,t.jsx)("path",{d:"M-1 -1L5 5M5 -1L-1 5",fill:"none",stroke:"currentColor",strokeLinecap:"round"})}):(0,t.jsx)("div",{className:"ml-2.5 flex-none w-1 h-1 rounded-full bg-current"}))]}),(0,t.jsxs)("div",{className:(0,s.Z)("flex-auto flex items-center bg-slate-700/50 border border-slate-500/30","left"===r?"rounded-tl lg:rounded-tr":"rounded-tl",void 0!==c&&c&&"dark:bg-slate-800/50"),children:[(void 0===n?[]:n).map(function(a){var e=a.name,n=a.open,p=a.className;return(0,t.jsx)("div",{className:(0,s.Z)("px-4 py-1 border-r border-slate-200/5",p,{italic:!(void 0===n||n)}),children:e},e)}),i&&(0,t.jsx)("div",{className:"flex-auto flex items-center justify-end px-4 space-x-4",children:i})]})]})}},83629:function(a,e,n){"use strict";n.d(e,{Pg:function(){return p},nR:function(){return s}});var t=n(29815);function s(a){return(0,t.Z)(a).sort(function(a,e){a=a.endsWith("-px")?a.replace(/-px$/,"-0.25"):a,e=e.endsWith("-px")?e.replace(/-px$/,"-0.25"):e;var n=a.split(/\s+/)[0].replace(/\\/g,"").match(/-([0-9.]+)$/);n=null===n?NaN:parseFloat(n[1]);var t=e.split(/\s+/)[0].replace(/\\/g,"").match(/-([0-9.]+)$/);return(t=null===t?NaN:parseFloat(t[1]),isNaN(n)&&isNaN(t))?0:isNaN(n)?1:isNaN(t)?-1:n-t})}function p(a){return(0,t.Z)(a).sort(function(a,e){a=a.endsWith("-px")?a.replace(/-px$/,"-0.25"):a,e=e.endsWith("-px")?e.replace(/-px$/,"-0.25"):e;var n=a.split(/\s+/)[0].replace(/\\/g,"").match(/-([0-9.]+)$/);n=null===n?NaN:parseFloat(n[1]);var t=e.split(/\s+/)[0].replace(/\\/g,"").match(/-([0-9.]+)$/);return(t=null===t?NaN:parseFloat(t[1]),isNaN(n)&&isNaN(t))?0:isNaN(n)?-1:isNaN(t)?1:n-t})}}},function(a){a.O(0,[3430,2619,4713,1818,2474,566,9774,2888,179],function(){return a(a.s=16442)}),_N_E=a.O()}]);