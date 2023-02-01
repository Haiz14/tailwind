(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1888],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach(function(t){s(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var l=n.createContext({}),o=function(e){var t,a=n.useContext(l),s=a;return e&&(s="function"==typeof(t=e)?e(a):r(r({},a),e)),s},c=function(e){var t=o(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef(function(e,t){var a=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,c=function(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}(e,["components","mdxType","originalType","parentName"]),u=o(a),d=u["".concat(l,".").concat(s)]||u[s]||p[s]||i;return a?n.createElement(d,r(r({ref:t},c),{},{components:a})):n.createElement(d,r({ref:t},c))});function d(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=a.length,r=Array(i);r[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:s,r[1]=l;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},33594:function(e,t,a){"use strict";a.d(t,{EL:function(){return c}});var n,s=a(67294),i=["bottom","height","left","right","top","width"],r=new Map,l=function e(){var t=[];r.forEach(function(e,a){var n,s,r=a.getBoundingClientRect();n=r,s=e.rect,void 0===n&&(n={}),void 0===s&&(s={}),i.some(function(e){return n[e]!==s[e]})&&(e.rect=r,t.push(e))}),t.forEach(function(e){e.callbacks.forEach(function(t){return t(e.rect)})}),n=window.requestAnimationFrame(e)},o="undefined"!=typeof window&&window.document&&window.document.createElement?s.useLayoutEffect:s.useEffect;function c(e,t,a){"boolean"==typeof(i=t)?p=t:(p=null==(d=null==t?void 0:t.observe)||d,u=null==t?void 0:t.onChange),(c=a)&&"[object Function]"==({}).toString.call(c)&&(u=a);var i,c,p,u,d,m=(0,s.useState)(e.current),g=m[0],f=m[1],h=(0,s.useRef)(!1),k=(0,s.useRef)(!1),v=(0,s.useState)(null),b=v[0],N=v[1],x=(0,s.useRef)(u);return o(function(){x.current=u,e.current!==g&&f(e.current)}),o(function(){g&&!h.current&&(h.current=!0,N(g.getBoundingClientRect()))},[g]),o(function(){if(p){var t=g;if(k.current||(k.current=!0,t=e.current),t){var a,s,i=(a=t,s=function(e){null==x.current||x.current(e),N(e)},{observe:function(){var e=0===r.size;r.has(a)?r.get(a).callbacks.push(s):r.set(a,{rect:void 0,hasRectChanged:!1,callbacks:[s]}),e&&l()},unobserve:function(){var e=r.get(a);if(e){var t=e.callbacks.indexOf(s);t>=0&&e.callbacks.splice(t,1),e.callbacks.length||r.delete(a),r.size||cancelAnimationFrame(n)}}});return i.observe(),function(){i.unobserve()}}}},[p,g,e]),b}},71030:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/text-overflow",function(){return a(39736)}])},39736:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return h}});var n=a(99534);a(67294);var s=a(3905);a(41664);var i,r=a(5679),l=a(83434),o=a(53339),c=a(74296),p=a(5566),u=a(6628),d=o.L,m=function(e){return console.warn("Component Heading was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",Object.assign({},e))},g={Layout:d,classes:{utilities:{truncate:{overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap"},"text-ellipsis":{"text-overflow":"ellipsis"},"text-clip":{"text-overflow":"clip"}}},meta:{title:"Text Overflow",description:"Utilities for controlling text overflow in an element."},slug:"text-overflow",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Truncate",slug:"truncate",children:[]},{title:"Ellipsis",slug:"ellipsis",children:[]},{title:"Clip",slug:"clip",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]}]},f=c.X_;function h(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,s.kt)(f,Object.assign({},g,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(r.X,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3}},"Basic usage"),(0,s.kt)(r.X,{level:3,id:"truncate",nextElement:{type:"paragraph"}},"Truncate"),(0,s.kt)("p",null,"Use ",(0,s.kt)("inlineCode",{parentName:"p"},"truncate")," to truncate overflowing text with an ellipsis (",(0,s.kt)("code",null,"…"),") if needed."),(0,s.kt)(l.e,{p:"none",containerClassName:"mt-4 -mb-3",html:'\n  <div class="px-4 sm:px-0">\n    <div class="mx-auto max-w-sm bg-white shadow-xl p-8 text-slate-700 text-sm leading-6 sm:text-base sm:leading-7 dark:bg-slate-800 dark:text-slate-400">\n      <p class="truncate">\n        The longest word in any of the major English language dictionaries is <span class="text-slate-900 font-medium">pneumonoultramicroscopicsilicovolcanoconiosis,</span> a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.\n      </p>\n    </div>\n  </div>\n'}),(0,s.kt)("pre",Object.assign({},{className:"language-html"}),(0,s.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"p")," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"truncate")," ...",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"...",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"p"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,s.kt)(r.X,{level:3,id:"ellipsis",nextElement:{type:"paragraph"}},"Ellipsis"),(0,s.kt)("p",null,"Use ",(0,s.kt)("inlineCode",{parentName:"p"},"text-ellipsis")," to truncate overflowing text with an ellipsis (",(0,s.kt)("code",null,"…"),") if needed."),(0,s.kt)(l.e,{p:"none",containerClassName:"mt-4 -mb-3",html:'\n  <div class="px-4 sm:px-0">\n    <div class="mx-auto max-w-sm bg-white shadow-xl p-8 text-slate-700 text-sm leading-6 sm:text-base sm:leading-7 dark:bg-slate-800 dark:text-slate-400">\n      <p class="text-ellipsis overflow-hidden">\n        The longest word in any of the major English language dictionaries is <span class="text-slate-900 font-medium dark:text-slate-200">pneumonoultramicroscopicsilicovolcanoconiosis,</span> a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.\n      </p>\n    </div>\n  </div>\n'}),(0,s.kt)("pre",Object.assign({},{className:"language-html"}),(0,s.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"p")," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"text-ellipsis")," overflow-hidden ...",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"...",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"p"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,s.kt)(r.X,{level:3,id:"clip",nextElement:{type:"paragraph"}},"Clip"),(0,s.kt)("p",null,"Use ",(0,s.kt)("inlineCode",{parentName:"p"},"text-clip")," to truncate the text at the limit of the content area."),(0,s.kt)(l.e,{p:"none",containerClassName:"mt-4 -mb-3",html:'\n  <div class="px-4 sm:px-0">\n    <div class="mx-auto max-w-sm bg-white shadow-xl p-8 text-slate-700 text-sm leading-6 sm:text-base sm:leading-7 dark:bg-slate-800 dark:text-slate-400">\n      <p class="text-clip overflow-hidden">\n        The longest word in any of the major English language dictionaries is <span class="text-slate-900 font-medium dark:text-slate-200">pneumonoultramicroscopicsilicovolcanoconiosis,</span> a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.\n      </p>\n    </div>\n  </div>\n'}),(0,s.kt)("pre",Object.assign({},{className:"language-html"}),(0,s.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"p")," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"text-clip")," overflow-hidden ...",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"...",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"p"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,s.kt)("hr",null),(0,s.kt)(m,{level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},ignore:!0,mdxType:"Heading"},"Applying conditionally"),(0,s.kt)(m,{level:3,id:"hover-focus-and-other-states",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Hover, focus, and other states"),(0,s.kt)(u.k,{defaultClass:"truncate",featuredClass:"text-clip",element:"p",mdxType:"HoverFocusAndOtherStates"}),(0,s.kt)(m,{level:3,id:"breakpoints-and-media-queries",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Breakpoints and media queries"),(0,s.kt)(p.p,{defaultClass:"truncate",featuredClass:"text-clip",element:"p",mdxType:"BreakpointsAndMediaQueries"}))}h.isMDXComponent=!0,h.layoutProps=g},5566:function(e,t,a){"use strict";a.d(t,{p:function(){return s}});var n=a(85893);function s(e){var t=e.defaultClass,a=e.featuredClass,s=e.element,i=e.children;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("p",{children:["You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use ",(0,n.jsxs)("code",{children:["md:",a]})," to apply the ",(0,n.jsx)("code",{children:a})," utility at only medium screen sizes and above."]}),i||(0,n.jsx)("pre",{className:"language-html",children:(0,n.jsx)("code",{className:"language-html",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>{element}</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{defaultClass} <span class="code-highlight bg-code-highlight">md:{featuredClass}</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>{element}</span><span class="token punctuation">></span></span>\n'.replace(/{element}/g,void 0===s?"div":s).replace("{defaultClass} ",t?"".concat(t," "):"").replace("{featuredClass}",a)}})}),(0,n.jsxs)("p",{children:["To learn more, check out the documentation on"," ",(0,n.jsx)("a",{href:"/docs/responsive-design",children:"Responsive Design"}),","," ",(0,n.jsx)("a",{href:"/docs/dark-mode",children:"Dark Mode"})," and"," ",(0,n.jsx)("a",{href:"/docs/hover-focus-and-other-states#media-queries",children:"other media query modifiers"}),"."]})]})}},83434:function(e,t,a){"use strict";a.d(t,{e:function(){return p}});var n=a(26042),s=a(85893),i=a(86010),r=a(19150),l=a(67294),o={none:"",md:"p-8"};function c(e){var t=e.as,a=e.style,r=e.padding,l=e.p,c=e.className,p=e.containerClassName,u=e.html,d=e.children,m=e.hint,g=e.hintClassName,f=e.lightOnly,h=void 0!==f&&f,k=null!=r?r:void 0===l?"md":l,v=o[k];if(void 0===v)throw Error("Invalid padding value: ".concat(JSON.stringify(k)));return(0,s.jsxs)("div",{className:p,children:[void 0!==m&&(0,s.jsx)("div",{className:(0,i.Z)(g,"not-prose mb-4"),children:(0,s.jsxs)("div",{className:"flex space-x-2",children:[(0,s.jsxs)("svg",{className:"flex-none w-5 h-5",viewBox:"0 0 20 20",fill:"none",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,s.jsx)("path",{d:"m9.813 9.25.346-5.138a1.276 1.276 0 0 0-2.54-.235L6.75 11.25 5.147 9.327a1.605 1.605 0 0 0-2.388-.085.018.018 0 0 0-.004.019l1.98 4.87a5 5 0 0 0 4.631 3.119h3.885a4 4 0 0 0 4-4v-1a3 3 0 0 0-3-3H9.813Z",className:"stroke-slate-400 dark:stroke-slate-300"}),(0,s.jsx)("path",{d:"M3 5s.35-.47 1.25-.828m9.516-.422c2.078.593 3.484 1.5 3.484 1.5",className:"stroke-slate-400 dark:stroke-sky-400"})]}),(0,s.jsx)("p",{className:"text-slate-700 text-sm font-medium dark:text-slate-200",children:m})]})}),(0,s.jsxs)(void 0===t?"div":t,{style:a,className:(0,i.Z)("not-prose relative bg-slate-50 rounded-xl overflow-hidden",!h&&"dark:bg-slate-800/25"),children:[(0,s.jsx)("div",{style:{backgroundPosition:"10px 10px"},className:(0,i.Z)("absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]",!h&&"dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]")}),(0,s.jsx)("div",(0,n.Z)({className:(0,i.Z)("relative rounded-xl overflow-auto",v,c)},u?{dangerouslySetInnerHTML:{__html:u}}:{children:d})),(0,s.jsx)("div",{className:(0,i.Z)("absolute inset-0 pointer-events-none border border-black/5 rounded-xl",!h&&"dark:border-white/5")})]})]})}function p(e){return e.resizable?(0,s.jsx)(u,(0,n.Z)({},e)):(0,s.jsx)(c,(0,n.Z)({},e))}function u(e){var t=(0,l.useRef)(),a=(0,r.c$)(0),i=(0,l.useRef)(),o=(0,l.useRef)();return(0,l.useEffect)(function(){var e=new window.ResizeObserver(function(){a.set(0)});return e.observe(t.current),function(){e.disconnect()}},[]),(0,l.useEffect)(function(){o.current.onselectstart=function(){return!1}},[]),(0,s.jsxs)("div",{ref:t,className:"relative",children:[(0,s.jsx)(c,(0,n.Z)({as:r.ww.div,style:{marginRight:(0,r.Hm)(a,function(e){return-e})}},e)),(0,s.jsx)("div",{ref:i,className:"absolute inset-y-0 right-[-1.375rem] left-80 ml-4 pointer-events-none",children:(0,s.jsx)(r.ww.div,{ref:o,drag:"x",_dragX:a,dragMomentum:!1,dragElastic:0,dragConstraints:i,className:"pointer-events-auto absolute top-1/2 right-0 -mt-6 p-2 hidden md:block cursor-ew-resize",style:{x:a},onDragStart:function(){document.documentElement.classList.add("dragging-ew")},onDragEnd:function(){document.documentElement.classList.remove("dragging-ew")},children:(0,s.jsx)("div",{className:"w-1.5 h-8 bg-slate-500/60 rounded-full"})})})]})}},6628:function(e,t,a){"use strict";a.d(t,{k:function(){return s}});var n=a(85893);function s(e){e.property,e.utility;var t=e.variant,a=void 0===t?"hover":t,s=e.defaultClass,i=e.featuredClass,r=e.element,l=e.children;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("p",{children:["Tailwind lets you conditionally apply utility classes in different states using variant modifiers. For example, use"," ",(0,n.jsxs)("code",{children:[a,":",i]})," ","to only apply the ",(0,n.jsx)("code",{children:i})," utility on ",a,"."]}),l||(0,n.jsx)("pre",{className:"language-html",children:(0,n.jsx)("code",{className:"language-html",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>{element}</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{defaultClass} <span class="code-highlight bg-code-highlight">{variant}:{featuredClass}</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>{element}</span><span class="token punctuation">></span></span>\n'.replace(/{element}/g,void 0===r?"div":r).replace("{defaultClass} ",s?"".concat(s," "):"").replace("{variant}",a).replace("{featuredClass}",i)}})}),(0,n.jsxs)("p",{children:["For a complete list of all available state modifiers, check out the"," ",(0,n.jsx)("a",{href:"/docs/hover-focus-and-other-states",children:"Hover, Focus, & Other States"})," documentation."]})]})}}},function(e){e.O(0,[3430,2619,4713,1818,2474,9774,2888,179],function(){return e(e.s=71030)}),_N_E=e.O()}]);