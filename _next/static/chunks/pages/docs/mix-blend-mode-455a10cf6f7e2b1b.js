(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1348],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return u}});var a=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach(function(n){s(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var l=a.createContext({}),o=function(e){var n,t=a.useContext(l),s=t;return e&&(s="function"==typeof(n=e)?e(t):i(i({},t),e)),s},c=function(e){var n=o(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef(function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,c=function(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}(e,["components","mdxType","originalType","parentName"]),p=o(t),u=p["".concat(l,".").concat(s)]||p[s]||d[s]||r;return t?a.createElement(u,i(i({ref:n},c),{},{components:t})):a.createElement(u,i({ref:n},c))});function u(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,i=Array(r);i[0]=p;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:s,i[1]=l;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},33594:function(e,n,t){"use strict";t.d(n,{EL:function(){return c}});var a,s=t(67294),r=["bottom","height","left","right","top","width"],i=new Map,l=function e(){var n=[];i.forEach(function(e,t){var a,s,i=t.getBoundingClientRect();a=i,s=e.rect,void 0===a&&(a={}),void 0===s&&(s={}),r.some(function(e){return a[e]!==s[e]})&&(e.rect=i,n.push(e))}),n.forEach(function(e){e.callbacks.forEach(function(n){return n(e.rect)})}),a=window.requestAnimationFrame(e)},o="undefined"!=typeof window&&window.document&&window.document.createElement?s.useLayoutEffect:s.useEffect;function c(e,n,t){"boolean"==typeof(r=n)?d=n:(d=null==(u=null==n?void 0:n.observe)||u,p=null==n?void 0:n.onChange),(c=t)&&"[object Function]"==({}).toString.call(c)&&(p=t);var r,c,d,p,u,m=(0,s.useState)(e.current),g=m[0],b=m[1],f=(0,s.useRef)(!1),k=(0,s.useRef)(!1),h=(0,s.useState)(null),v=h[0],x=h[1],N=(0,s.useRef)(p);return o(function(){N.current=p,e.current!==g&&b(e.current)}),o(function(){g&&!f.current&&(f.current=!0,x(g.getBoundingClientRect()))},[g]),o(function(){if(d){var n=g;if(k.current||(k.current=!0,n=e.current),n){var t,s,r=(t=n,s=function(e){null==N.current||N.current(e),x(e)},{observe:function(){var e=0===i.size;i.has(t)?i.get(t).callbacks.push(s):i.set(t,{rect:void 0,hasRectChanged:!1,callbacks:[s]}),e&&l()},unobserve:function(){var e=i.get(t);if(e){var n=e.callbacks.indexOf(s);n>=0&&e.callbacks.splice(n,1),e.callbacks.length||i.delete(t),i.size||cancelAnimationFrame(a)}}});return r.observe(),function(){r.unobserve()}}}},[d,g,e]),v}},5031:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/mix-blend-mode",function(){return t(1362)}])},1362:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return f}});var a=t(99534);t(67294);var s=t(3905);t(41664);var r,i=t(5679),l=t(83434),o=t(53339),c=t(74296),d=t(5566),p=t(6628),u=o.L,m=function(e){return console.warn("Component Heading was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",Object.assign({},e))},g={Layout:u,classes:{utilities:{".mix-blend-normal":{"mix-blend-mode":"normal"},".mix-blend-multiply":{"mix-blend-mode":"multiply"},".mix-blend-screen":{"mix-blend-mode":"screen"},".mix-blend-overlay":{"mix-blend-mode":"overlay"},".mix-blend-darken":{"mix-blend-mode":"darken"},".mix-blend-lighten":{"mix-blend-mode":"lighten"},".mix-blend-color-dodge":{"mix-blend-mode":"color-dodge"},".mix-blend-color-burn":{"mix-blend-mode":"color-burn"},".mix-blend-hard-light":{"mix-blend-mode":"hard-light"},".mix-blend-soft-light":{"mix-blend-mode":"soft-light"},".mix-blend-difference":{"mix-blend-mode":"difference"},".mix-blend-exclusion":{"mix-blend-mode":"exclusion"},".mix-blend-hue":{"mix-blend-mode":"hue"},".mix-blend-saturation":{"mix-blend-mode":"saturation"},".mix-blend-color":{"mix-blend-mode":"color"},".mix-blend-luminosity":{"mix-blend-mode":"luminosity"},".mix-blend-plus-lighter":{"mix-blend-mode":"plus-lighter"}}},meta:{title:"Mix Blend Mode",description:"Utilities for controlling how an element should blend with the background."},slug:"mix-blend-mode",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Setting an element's blend mode",slug:"setting-an-element-s-blend-mode",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]}]},b=c.X_;function f(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,s.kt)(b,Object.assign({},g,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)(i.X,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3}},"Basic usage"),(0,s.kt)(i.X,{level:3,id:"setting-an-element-s-blend-mode",nextElement:{type:"paragraph"}},"Setting an element's blend mode"),(0,s.kt)("p",null,"Use the ",(0,s.kt)("inlineCode",{parentName:"p"},"mix-blend-{mode}")," utilities to control how an element’s content should be blended with the background."),(0,s.kt)(l.e,{containerClassName:"mt-4 -mb-3",html:'\n  <div class="flex justify-center -space-x-14">\n    <div class="w-32 h-32 mix-blend-multiply bg-blue-400 rounded-full"></div>\n    <div class="w-32 h-32 mix-blend-multiply bg-pink-400 rounded-full"></div>\n  </div>\n'}),(0,s.kt)("pre",Object.assign({},{className:"language-html"}),(0,s.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"flex justify-center -space-x-14",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"mix-blend-multiply")," bg-blue-400 ...",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"mix-blend-multiply")," bg-pink-400 ...",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,s.kt)("hr",null),(0,s.kt)(m,{level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},ignore:!0,mdxType:"Heading"},"Applying conditionally"),(0,s.kt)(m,{level:3,id:"hover-focus-and-other-states",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Hover, focus, and other states"),(0,s.kt)(p.k,{defaultClass:"mix-blend-multiply",featuredClass:"mix-blend-overlay",mdxType:"HoverFocusAndOtherStates"}),(0,s.kt)(m,{level:3,id:"breakpoints-and-media-queries",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Breakpoints and media queries"),(0,s.kt)(d.p,{defaultClass:"mix-blend-multiply",featuredClass:"mix-blend-overlay",mdxType:"BreakpointsAndMediaQueries"}))}f.isMDXComponent=!0,f.layoutProps=g},5566:function(e,n,t){"use strict";t.d(n,{p:function(){return s}});var a=t(85893);function s(e){var n=e.defaultClass,t=e.featuredClass,s=e.element,r=e.children;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("p",{children:["You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use ",(0,a.jsxs)("code",{children:["md:",t]})," to apply the ",(0,a.jsx)("code",{children:t})," utility at only medium screen sizes and above."]}),r||(0,a.jsx)("pre",{className:"language-html",children:(0,a.jsx)("code",{className:"language-html",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>{element}</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{defaultClass} <span class="code-highlight bg-code-highlight">md:{featuredClass}</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>{element}</span><span class="token punctuation">></span></span>\n'.replace(/{element}/g,void 0===s?"div":s).replace("{defaultClass} ",n?"".concat(n," "):"").replace("{featuredClass}",t)}})}),(0,a.jsxs)("p",{children:["To learn more, check out the documentation on"," ",(0,a.jsx)("a",{href:"/docs/responsive-design",children:"Responsive Design"}),","," ",(0,a.jsx)("a",{href:"/docs/dark-mode",children:"Dark Mode"})," and"," ",(0,a.jsx)("a",{href:"/docs/hover-focus-and-other-states#media-queries",children:"other media query modifiers"}),"."]})]})}},83434:function(e,n,t){"use strict";t.d(n,{e:function(){return d}});var a=t(26042),s=t(85893),r=t(86010),i=t(19150),l=t(67294),o={none:"",md:"p-8"};function c(e){var n=e.as,t=e.style,i=e.padding,l=e.p,c=e.className,d=e.containerClassName,p=e.html,u=e.children,m=e.hint,g=e.hintClassName,b=e.lightOnly,f=void 0!==b&&b,k=null!=i?i:void 0===l?"md":l,h=o[k];if(void 0===h)throw Error("Invalid padding value: ".concat(JSON.stringify(k)));return(0,s.jsxs)("div",{className:d,children:[void 0!==m&&(0,s.jsx)("div",{className:(0,r.Z)(g,"not-prose mb-4"),children:(0,s.jsxs)("div",{className:"flex space-x-2",children:[(0,s.jsxs)("svg",{className:"flex-none w-5 h-5",viewBox:"0 0 20 20",fill:"none",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,s.jsx)("path",{d:"m9.813 9.25.346-5.138a1.276 1.276 0 0 0-2.54-.235L6.75 11.25 5.147 9.327a1.605 1.605 0 0 0-2.388-.085.018.018 0 0 0-.004.019l1.98 4.87a5 5 0 0 0 4.631 3.119h3.885a4 4 0 0 0 4-4v-1a3 3 0 0 0-3-3H9.813Z",className:"stroke-slate-400 dark:stroke-slate-300"}),(0,s.jsx)("path",{d:"M3 5s.35-.47 1.25-.828m9.516-.422c2.078.593 3.484 1.5 3.484 1.5",className:"stroke-slate-400 dark:stroke-sky-400"})]}),(0,s.jsx)("p",{className:"text-slate-700 text-sm font-medium dark:text-slate-200",children:m})]})}),(0,s.jsxs)(void 0===n?"div":n,{style:t,className:(0,r.Z)("not-prose relative bg-slate-50 rounded-xl overflow-hidden",!f&&"dark:bg-slate-800/25"),children:[(0,s.jsx)("div",{style:{backgroundPosition:"10px 10px"},className:(0,r.Z)("absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]",!f&&"dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]")}),(0,s.jsx)("div",(0,a.Z)({className:(0,r.Z)("relative rounded-xl overflow-auto",h,c)},p?{dangerouslySetInnerHTML:{__html:p}}:{children:u})),(0,s.jsx)("div",{className:(0,r.Z)("absolute inset-0 pointer-events-none border border-black/5 rounded-xl",!f&&"dark:border-white/5")})]})]})}function d(e){return e.resizable?(0,s.jsx)(p,(0,a.Z)({},e)):(0,s.jsx)(c,(0,a.Z)({},e))}function p(e){var n=(0,l.useRef)(),t=(0,i.c$)(0),r=(0,l.useRef)(),o=(0,l.useRef)();return(0,l.useEffect)(function(){var e=new window.ResizeObserver(function(){t.set(0)});return e.observe(n.current),function(){e.disconnect()}},[]),(0,l.useEffect)(function(){o.current.onselectstart=function(){return!1}},[]),(0,s.jsxs)("div",{ref:n,className:"relative",children:[(0,s.jsx)(c,(0,a.Z)({as:i.ww.div,style:{marginRight:(0,i.Hm)(t,function(e){return-e})}},e)),(0,s.jsx)("div",{ref:r,className:"absolute inset-y-0 right-[-1.375rem] left-80 ml-4 pointer-events-none",children:(0,s.jsx)(i.ww.div,{ref:o,drag:"x",_dragX:t,dragMomentum:!1,dragElastic:0,dragConstraints:r,className:"pointer-events-auto absolute top-1/2 right-0 -mt-6 p-2 hidden md:block cursor-ew-resize",style:{x:t},onDragStart:function(){document.documentElement.classList.add("dragging-ew")},onDragEnd:function(){document.documentElement.classList.remove("dragging-ew")},children:(0,s.jsx)("div",{className:"w-1.5 h-8 bg-slate-500/60 rounded-full"})})})]})}},6628:function(e,n,t){"use strict";t.d(n,{k:function(){return s}});var a=t(85893);function s(e){e.property,e.utility;var n=e.variant,t=void 0===n?"hover":n,s=e.defaultClass,r=e.featuredClass,i=e.element,l=e.children;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("p",{children:["Tailwind lets you conditionally apply utility classes in different states using variant modifiers. For example, use"," ",(0,a.jsxs)("code",{children:[t,":",r]})," ","to only apply the ",(0,a.jsx)("code",{children:r})," utility on ",t,"."]}),l||(0,a.jsx)("pre",{className:"language-html",children:(0,a.jsx)("code",{className:"language-html",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>{element}</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{defaultClass} <span class="code-highlight bg-code-highlight">{variant}:{featuredClass}</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>{element}</span><span class="token punctuation">></span></span>\n'.replace(/{element}/g,void 0===i?"div":i).replace("{defaultClass} ",s?"".concat(s," "):"").replace("{variant}",t).replace("{featuredClass}",r)}})}),(0,a.jsxs)("p",{children:["For a complete list of all available state modifiers, check out the"," ",(0,a.jsx)("a",{href:"/docs/hover-focus-and-other-states",children:"Hover, Focus, & Other States"})," documentation."]})]})}}},function(e){e.O(0,[3430,2619,4713,1818,2474,9774,2888,179],function(){return e(e.s=5031)}),_N_E=e.O()}]);