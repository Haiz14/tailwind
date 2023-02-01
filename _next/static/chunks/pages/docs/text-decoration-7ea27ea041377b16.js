(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3821],{3905:function(e,n,a){"use strict";a.d(n,{Zo:function(){return l},kt:function(){return m}});var t=a(67294);function s(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach(function(n){s(e,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))})}return e}var i=t.createContext({}),c=function(e){var n,a=t.useContext(i),s=a;return e&&(s="function"==typeof(n=e)?e(a):o(o({},a),e)),s},l=function(e){var n=c(e.components);return t.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef(function(e,n){var a=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,l=function(e,n){if(null==e)return{};var a,t,s=function(e,n){if(null==e)return{};var a,t,s={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(s[a]=e[a]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],!(n.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}(e,["components","mdxType","originalType","parentName"]),u=c(a),m=u["".concat(i,".").concat(s)]||u[s]||p[s]||r;return a?t.createElement(m,o(o({ref:n},l),{},{components:a})):t.createElement(m,o({ref:n},l))});function m(e,n){var a=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=a.length,o=Array(r);o[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var l=2;l<r;l++)o[l]=a[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},33594:function(e,n,a){"use strict";a.d(n,{EL:function(){return l}});var t,s=a(67294),r=["bottom","height","left","right","top","width"],o=new Map,i=function e(){var n=[];o.forEach(function(e,a){var t,s,o=a.getBoundingClientRect();t=o,s=e.rect,void 0===t&&(t={}),void 0===s&&(s={}),r.some(function(e){return t[e]!==s[e]})&&(e.rect=o,n.push(e))}),n.forEach(function(e){e.callbacks.forEach(function(n){return n(e.rect)})}),t=window.requestAnimationFrame(e)},c="undefined"!=typeof window&&window.document&&window.document.createElement?s.useLayoutEffect:s.useEffect;function l(e,n,a){"boolean"==typeof(r=n)?p=n:(p=null==(m=null==n?void 0:n.observe)||m,u=null==n?void 0:n.onChange),(l=a)&&"[object Function]"==({}).toString.call(l)&&(u=a);var r,l,p,u,m,d=(0,s.useState)(e.current),g=d[0],k=d[1],h=(0,s.useRef)(!1),N=(0,s.useRef)(!1),f=(0,s.useState)(null),b=f[0],v=f[1],j=(0,s.useRef)(u);return c(function(){j.current=u,e.current!==g&&k(e.current)}),c(function(){g&&!h.current&&(h.current=!0,v(g.getBoundingClientRect()))},[g]),c(function(){if(p){var n=g;if(N.current||(N.current=!0,n=e.current),n){var a,s,r=(a=n,s=function(e){null==j.current||j.current(e),v(e)},{observe:function(){var e=0===o.size;o.has(a)?o.get(a).callbacks.push(s):o.set(a,{rect:void 0,hasRectChanged:!1,callbacks:[s]}),e&&i()},unobserve:function(){var e=o.get(a);if(e){var n=e.callbacks.indexOf(s);n>=0&&e.callbacks.splice(n,1),e.callbacks.length||o.delete(a),o.size||cancelAnimationFrame(t)}}});return r.observe(),function(){r.unobserve()}}}},[p,g,e]),b}},95498:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/text-decoration",function(){return a(84207)}])},84207:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return h}});var t=a(99534);a(67294);var s=a(3905);a(41664);var r,o=a(5679),i=a(83434),c=a(53339),l=a(74296),p=a(5566),u=a(6628),m=c.L,d=function(e){return console.warn("Component Heading was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",Object.assign({},e))},g={Layout:m,classes:{utilities:{".underline":{"text-decoration-line":"underline"},".overline":{"text-decoration-line":"overline"},".line-through":{"text-decoration-line":"line-through"},".no-underline":{"text-decoration-line":"none"}}},meta:{title:"Text Decoration",description:"Utilities for controlling the decoration of text."},slug:"text-decoration",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Setting the text decoration",slug:"setting-the-text-decoration",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]}]},k=l.X_;function h(e){var n=e.components,a=(0,t.Z)(e,["components"]);return(0,s.kt)(k,Object.assign({},g,a,{components:n,mdxType:"MDXLayout"}),(0,s.kt)(o.X,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3}},"Basic usage"),(0,s.kt)(o.X,{level:3,id:"setting-the-text-decoration",nextElement:{type:"paragraph"}},"Setting the text decoration"),(0,s.kt)("p",null,"Control how text is decorated with the ",(0,s.kt)("inlineCode",{parentName:"p"},"underline"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"no-underline"),", and ",(0,s.kt)("inlineCode",{parentName:"p"},"line-through")," utilities."),(0,s.kt)(i.e,{containerClassName:"mt-4 -mb-3",html:'\n  <div class="flex flex-col gap-8">\n    <div>\n      <span class="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">underline</span>\n      <p class="underline text-lg font-medium text-slate-900 dark:text-slate-200">\n        The quick brown fox jumps over the lazy dog.\n      </p>\n    </div>\n    <div>\n      <span class="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">overline</span>\n      <p class="overline text-lg font-medium text-slate-900 dark:text-slate-200">\n        The quick brown fox jumps over the lazy dog.\n      </p>\n    </div>\n    <div>\n      <span class="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">line-through</span>\n      <p class="line-through text-lg font-medium text-slate-900 dark:text-slate-200">\n        The quick brown fox jumps over the lazy dog.\n      </p>\n    </div>\n    <div>\n      <span class="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">no-underline</span>\n      <p class="text-lg font-medium text-slate-900 dark:text-slate-200">\n        The quick brown fox jumps over the lazy dog.\n      </p>\n    </div>\n  </div>\n'}),(0,s.kt)("pre",Object.assign({},{className:"language-html"}),(0,s.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"p")," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"underline")," ...",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"The quick brown fox ...",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"p"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"p")," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"overline")," ...",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"The quick brown fox ...",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"p"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"p")," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"line-through")," ...",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"The quick brown fox ...",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"p"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"p")," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"no-underline")," ...",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"The quick brown fox ...",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"p"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,s.kt)("hr",null),(0,s.kt)(d,{level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},ignore:!0,mdxType:"Heading"},"Applying conditionally"),(0,s.kt)(d,{level:3,id:"hover-focus-and-other-states",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Hover, focus, and other states"),(0,s.kt)(u.k,{featuredClass:"text-center",mdxType:"HoverFocusAndOtherStates"},(0,s.kt)(i.e,{hint:"Try hovering over the text to see the expected behaviour",containerClassName:"mt-4 -mb-3",html:'\n  <div class="text-xl text-center font-medium leading-6 space-y-4">\n    <a href="#" class="no-underline hover:underline text-cyan-600 dark:text-cyan-400">Link with no underline</a>\n  </div>\n'}),(0,s.kt)("pre",Object.assign({},{className:"language-html"}),(0,s.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"a")," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"href"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"#",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'))," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"no-underline ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"hover:underline")," ...",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"Link",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"a"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">"))))),(0,s.kt)(d,{level:3,id:"breakpoints-and-media-queries",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Breakpoints and media queries"),(0,s.kt)(p.p,{defaultClass:"no-underline",featuredClass:"underline",element:"p",mdxType:"BreakpointsAndMediaQueries"}))}h.isMDXComponent=!0,h.layoutProps=g},5566:function(e,n,a){"use strict";a.d(n,{p:function(){return s}});var t=a(85893);function s(e){var n=e.defaultClass,a=e.featuredClass,s=e.element,r=e.children;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("p",{children:["You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use ",(0,t.jsxs)("code",{children:["md:",a]})," to apply the ",(0,t.jsx)("code",{children:a})," utility at only medium screen sizes and above."]}),r||(0,t.jsx)("pre",{className:"language-html",children:(0,t.jsx)("code",{className:"language-html",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>{element}</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{defaultClass} <span class="code-highlight bg-code-highlight">md:{featuredClass}</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>{element}</span><span class="token punctuation">></span></span>\n'.replace(/{element}/g,void 0===s?"div":s).replace("{defaultClass} ",n?"".concat(n," "):"").replace("{featuredClass}",a)}})}),(0,t.jsxs)("p",{children:["To learn more, check out the documentation on"," ",(0,t.jsx)("a",{href:"/docs/responsive-design",children:"Responsive Design"}),","," ",(0,t.jsx)("a",{href:"/docs/dark-mode",children:"Dark Mode"})," and"," ",(0,t.jsx)("a",{href:"/docs/hover-focus-and-other-states#media-queries",children:"other media query modifiers"}),"."]})]})}},83434:function(e,n,a){"use strict";a.d(n,{e:function(){return p}});var t=a(26042),s=a(85893),r=a(86010),o=a(19150),i=a(67294),c={none:"",md:"p-8"};function l(e){var n=e.as,a=e.style,o=e.padding,i=e.p,l=e.className,p=e.containerClassName,u=e.html,m=e.children,d=e.hint,g=e.hintClassName,k=e.lightOnly,h=void 0!==k&&k,N=null!=o?o:void 0===i?"md":i,f=c[N];if(void 0===f)throw Error("Invalid padding value: ".concat(JSON.stringify(N)));return(0,s.jsxs)("div",{className:p,children:[void 0!==d&&(0,s.jsx)("div",{className:(0,r.Z)(g,"not-prose mb-4"),children:(0,s.jsxs)("div",{className:"flex space-x-2",children:[(0,s.jsxs)("svg",{className:"flex-none w-5 h-5",viewBox:"0 0 20 20",fill:"none",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,s.jsx)("path",{d:"m9.813 9.25.346-5.138a1.276 1.276 0 0 0-2.54-.235L6.75 11.25 5.147 9.327a1.605 1.605 0 0 0-2.388-.085.018.018 0 0 0-.004.019l1.98 4.87a5 5 0 0 0 4.631 3.119h3.885a4 4 0 0 0 4-4v-1a3 3 0 0 0-3-3H9.813Z",className:"stroke-slate-400 dark:stroke-slate-300"}),(0,s.jsx)("path",{d:"M3 5s.35-.47 1.25-.828m9.516-.422c2.078.593 3.484 1.5 3.484 1.5",className:"stroke-slate-400 dark:stroke-sky-400"})]}),(0,s.jsx)("p",{className:"text-slate-700 text-sm font-medium dark:text-slate-200",children:d})]})}),(0,s.jsxs)(void 0===n?"div":n,{style:a,className:(0,r.Z)("not-prose relative bg-slate-50 rounded-xl overflow-hidden",!h&&"dark:bg-slate-800/25"),children:[(0,s.jsx)("div",{style:{backgroundPosition:"10px 10px"},className:(0,r.Z)("absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]",!h&&"dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]")}),(0,s.jsx)("div",(0,t.Z)({className:(0,r.Z)("relative rounded-xl overflow-auto",f,l)},u?{dangerouslySetInnerHTML:{__html:u}}:{children:m})),(0,s.jsx)("div",{className:(0,r.Z)("absolute inset-0 pointer-events-none border border-black/5 rounded-xl",!h&&"dark:border-white/5")})]})]})}function p(e){return e.resizable?(0,s.jsx)(u,(0,t.Z)({},e)):(0,s.jsx)(l,(0,t.Z)({},e))}function u(e){var n=(0,i.useRef)(),a=(0,o.c$)(0),r=(0,i.useRef)(),c=(0,i.useRef)();return(0,i.useEffect)(function(){var e=new window.ResizeObserver(function(){a.set(0)});return e.observe(n.current),function(){e.disconnect()}},[]),(0,i.useEffect)(function(){c.current.onselectstart=function(){return!1}},[]),(0,s.jsxs)("div",{ref:n,className:"relative",children:[(0,s.jsx)(l,(0,t.Z)({as:o.ww.div,style:{marginRight:(0,o.Hm)(a,function(e){return-e})}},e)),(0,s.jsx)("div",{ref:r,className:"absolute inset-y-0 right-[-1.375rem] left-80 ml-4 pointer-events-none",children:(0,s.jsx)(o.ww.div,{ref:c,drag:"x",_dragX:a,dragMomentum:!1,dragElastic:0,dragConstraints:r,className:"pointer-events-auto absolute top-1/2 right-0 -mt-6 p-2 hidden md:block cursor-ew-resize",style:{x:a},onDragStart:function(){document.documentElement.classList.add("dragging-ew")},onDragEnd:function(){document.documentElement.classList.remove("dragging-ew")},children:(0,s.jsx)("div",{className:"w-1.5 h-8 bg-slate-500/60 rounded-full"})})})]})}},6628:function(e,n,a){"use strict";a.d(n,{k:function(){return s}});var t=a(85893);function s(e){e.property,e.utility;var n=e.variant,a=void 0===n?"hover":n,s=e.defaultClass,r=e.featuredClass,o=e.element,i=e.children;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("p",{children:["Tailwind lets you conditionally apply utility classes in different states using variant modifiers. For example, use"," ",(0,t.jsxs)("code",{children:[a,":",r]})," ","to only apply the ",(0,t.jsx)("code",{children:r})," utility on ",a,"."]}),i||(0,t.jsx)("pre",{className:"language-html",children:(0,t.jsx)("code",{className:"language-html",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>{element}</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{defaultClass} <span class="code-highlight bg-code-highlight">{variant}:{featuredClass}</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>{element}</span><span class="token punctuation">></span></span>\n'.replace(/{element}/g,void 0===o?"div":o).replace("{defaultClass} ",s?"".concat(s," "):"").replace("{variant}",a).replace("{featuredClass}",r)}})}),(0,t.jsxs)("p",{children:["For a complete list of all available state modifiers, check out the"," ",(0,t.jsx)("a",{href:"/docs/hover-focus-and-other-states",children:"Hover, Focus, & Other States"})," documentation."]})]})}}},function(e){e.O(0,[3430,2619,4713,1818,2474,9774,2888,179],function(){return e(e.s=95498)}),_N_E=e.O()}]);