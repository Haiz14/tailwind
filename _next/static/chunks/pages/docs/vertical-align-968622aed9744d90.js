(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1185],{3905:function(e,a,t){"use strict";t.d(a,{Zo:function(){return c},kt:function(){return m}});var n=t(67294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach(function(a){s(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var i=n.createContext({}),o=function(e){var a,t=n.useContext(i),s=t;return e&&(s="function"==typeof(a=e)?e(t):r(r({},t),e)),s},c=function(e){var a=o(e.components);return n.createElement(i.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef(function(e,a){var t=e.components,s=e.mdxType,l=e.originalType,i=e.parentName,c=function(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],!(a.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}(e,["components","mdxType","originalType","parentName"]),d=o(t),m=d["".concat(i,".").concat(s)]||d[s]||p[s]||l;return t?n.createElement(m,r(r({ref:a},c),{},{components:t})):n.createElement(m,r({ref:a},c))});function m(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var l=t.length,r=Array(l);r[0]=d;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i.mdxType="string"==typeof e?e:s,r[1]=i;for(var c=2;c<l;c++)r[c]=t[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},33594:function(e,a,t){"use strict";t.d(a,{EL:function(){return c}});var n,s=t(67294),l=["bottom","height","left","right","top","width"],r=new Map,i=function e(){var a=[];r.forEach(function(e,t){var n,s,r=t.getBoundingClientRect();n=r,s=e.rect,void 0===n&&(n={}),void 0===s&&(s={}),l.some(function(e){return n[e]!==s[e]})&&(e.rect=r,a.push(e))}),a.forEach(function(e){e.callbacks.forEach(function(a){return a(e.rect)})}),n=window.requestAnimationFrame(e)},o="undefined"!=typeof window&&window.document&&window.document.createElement?s.useLayoutEffect:s.useEffect;function c(e,a,t){"boolean"==typeof(l=a)?p=a:(p=null==(m=null==a?void 0:a.observe)||m,d=null==a?void 0:a.onChange),(c=t)&&"[object Function]"==({}).toString.call(c)&&(d=t);var l,c,p,d,m,g=(0,s.useState)(e.current),u=g[0],b=g[1],k=(0,s.useRef)(!1),h=(0,s.useRef)(!1),N=(0,s.useState)(null),f=N[0],v=N[1],j=(0,s.useRef)(d);return o(function(){j.current=d,e.current!==u&&b(e.current)}),o(function(){u&&!k.current&&(k.current=!0,v(u.getBoundingClientRect()))},[u]),o(function(){if(p){var a=u;if(h.current||(h.current=!0,a=e.current),a){var t,s,l=(t=a,s=function(e){null==j.current||j.current(e),v(e)},{observe:function(){var e=0===r.size;r.has(t)?r.get(t).callbacks.push(s):r.set(t,{rect:void 0,hasRectChanged:!1,callbacks:[s]}),e&&i()},unobserve:function(){var e=r.get(t);if(e){var a=e.callbacks.indexOf(s);a>=0&&e.callbacks.splice(a,1),e.callbacks.length||r.delete(t),r.size||cancelAnimationFrame(n)}}});return l.observe(),function(){l.unobserve()}}}},[p,u,e]),f}},12336:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/vertical-align",function(){return t(23615)}])},23615:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return h}});var n=t(99534);t(67294);var s=t(3905);t(41664);var l,r=t(5679),i=t(83434),o=t(53339),c=t(74296),p=t(79583),d=t(5566),m=t(6628),g=o.L,u=function(e){return console.warn("Component Heading was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",Object.assign({},e))},b={Layout:g,classes:{utilities:{".align-baseline":{"vertical-align":"baseline"},".align-top":{"vertical-align":"top"},".align-middle":{"vertical-align":"middle"},".align-bottom":{"vertical-align":"bottom"},".align-text-top":{"vertical-align":"text-top"},".align-text-bottom":{"vertical-align":"text-bottom"},".align-sub":{"vertical-align":"sub"},".align-super":{"vertical-align":"super"}}},meta:{title:"Vertical Align",shortTitle:"Vertical Align",description:"Utilities for controlling the vertical alignment of an inline or table-cell box."},slug:"vertical-align",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Baseline",slug:"baseline",children:[]},{title:"Top",slug:"top",children:[]},{title:"Middle",slug:"middle",children:[]},{title:"Bottom",slug:"bottom",children:[]},{title:"Text Top",slug:"text-top",children:[]},{title:"Text Bottom",slug:"text-bottom",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]},{title:"Using custom values",slug:"using-custom-values",children:[{title:"Arbitrary values",slug:"arbitrary-values",children:[]}]}]},k=c.X_;function h(e){var a=e.components,t=(0,n.Z)(e,["components"]);return(0,s.kt)(k,Object.assign({},b,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)(r.X,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3}},"Basic usage"),(0,s.kt)(r.X,{level:3,id:"baseline",nextElement:{type:"paragraph"}},"Baseline"),(0,s.kt)("p",null,"Use ",(0,s.kt)("inlineCode",{parentName:"p"},"align-baseline")," to align the baseline of an element with the baseline of its parent."),(0,s.kt)(i.e,{containerClassName:"mt-4 -mb-3",html:'\n  <div class="bg-white rounded-lg shadow-lg ring-1 ring-slate-900/5 py-4 max-w-md mx-auto dark:bg-slate-800 dark:ring-0 dark:highlight-white/5">\n    <div class="leading-none relative">\n      <span class="w-0 h-8 inline-block align-baseline">\n        <span class="absolute top-0 border-slate-200 border-t border-b border-dashed w-full h-8 dark:border-slate-700"></span>\n        <span class="absolute top-0 border-slate-200 border-b border-dashed w-full h-4 dark:border-slate-700"></span>\n      </span>\n      <span class="relative z-10 text-slate-700 font-medium px-4 dark:text-slate-200">The quick brown fox jumps over the lazy dog.</span>\n    </div>\n  </div>\n'}),(0,s.kt)("pre",Object.assign({},{className:"language-html"}),(0,s.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"span")," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"inline-block ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"align-baseline")," ...",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"...",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"span"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,s.kt)(r.X,{level:3,id:"top",nextElement:{type:"paragraph"}},"Top"),(0,s.kt)("p",null,"Use ",(0,s.kt)("inlineCode",{parentName:"p"},"align-top")," to align the top of an element and its descendants with the top of the entire line."),(0,s.kt)(i.e,{containerClassName:"mt-4 -mb-3",html:'\n  <div class="bg-white rounded-lg shadow-lg ring-1 ring-slate-900/5 py-4 max-w-md mx-auto dark:bg-slate-800 dark:ring-0 dark:highlight-white/5">\n    <div class="leading-none relative">\n      <span class="w-0 h-8 inline-block align-top">\n        <span class="absolute top-0 border-slate-200 border-t border-b border-dashed w-full h-8 dark:border-slate-700"></span>\n        <span class="absolute top-0 border-slate-200 border-b border-dashed w-full h-4 dark:border-slate-700"></span>\n      </span>\n      <span class="relative z-10 text-slate-700 font-medium px-4 dark:text-slate-200">The quick brown fox jumps over the lazy dog.</span>\n    </div>\n  </div>\n'}),(0,s.kt)("pre",Object.assign({},{className:"language-html"}),(0,s.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"span")," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"inline-block ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"align-top")," ...",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"...",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"span"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,s.kt)(r.X,{level:3,id:"middle",nextElement:{type:"paragraph"}},"Middle"),(0,s.kt)("p",null,"Use ",(0,s.kt)("inlineCode",{parentName:"p"},"align-middle")," to align the middle of an element with the baseline plus half the x-height of the parent."),(0,s.kt)(i.e,{containerClassName:"mt-4 -mb-3",html:'\n  <div class="bg-white rounded-lg shadow-lg ring-1 ring-slate-900/5 py-4 max-w-md mx-auto dark:bg-slate-800 dark:ring-0 dark:highlight-white/5">\n    <div class="leading-none relative">\n      <span class="w-0 h-8 inline-block align-middle">\n        <span class="absolute top-0 border-slate-200 border-t border-b border-dashed w-full h-8 dark:border-slate-700"></span>\n        <span class="absolute top-0 border-slate-200 border-b border-dashed w-full h-4 dark:border-slate-700"></span>\n      </span>\n      <span class="relative z-10 text-slate-700 font-medium px-4 dark:text-slate-200">The quick brown fox jumps over the lazy dog.</span>\n    </div>\n  </div>\n'}),(0,s.kt)("pre",Object.assign({},{className:"language-html"}),(0,s.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"span")," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"inline-block ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"align-middle")," ...",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"...",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"span"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,s.kt)(r.X,{level:3,id:"bottom",nextElement:{type:"paragraph"}},"Bottom"),(0,s.kt)("p",null,"Use ",(0,s.kt)("inlineCode",{parentName:"p"},"align-bottom")," to align the bottom of an element and its descendants with the bottom of the entire line."),(0,s.kt)(i.e,{containerClassName:"mt-4 -mb-3",html:'\n  <div class="bg-white rounded-lg shadow-lg ring-1 ring-slate-900/5 py-4 max-w-md mx-auto dark:bg-slate-800 dark:ring-0 dark:highlight-white/5">\n    <div class="leading-none relative">\n      <span class="w-0 h-8 inline-block align-bottom">\n        <span class="absolute top-0 border-slate-200 border-t border-b border-dashed w-full h-8 dark:border-slate-700"></span>\n        <span class="absolute top-0 border-slate-200 border-b border-dashed w-full h-4 dark:border-slate-700"></span>\n      </span>\n      <span class="relative z-10 text-slate-700 font-medium px-4 dark:text-slate-200">The quick brown fox jumps over the lazy dog.</span>\n    </div>\n  </div>\n'}),(0,s.kt)("pre",Object.assign({},{className:"language-html"}),(0,s.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"span")," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"inline-block ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"align-bottom")," ...",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"...",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"span"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,s.kt)(r.X,{level:3,id:"text-top",nextElement:{type:"paragraph"}},"Text Top"),(0,s.kt)("p",null,"Use ",(0,s.kt)("inlineCode",{parentName:"p"},"align-text-top")," to align the top of an element with the top of the parent element’s font."),(0,s.kt)(i.e,{containerClassName:"mt-4 -mb-3",html:'\n  <div class="bg-white rounded-lg shadow-lg ring-1 ring-slate-900/5 py-4 max-w-md mx-auto dark:bg-slate-800 dark:ring-0 dark:highlight-white/5">\n    <div class="leading-none relative">\n      <span class="w-0 h-8 inline-block align-text-top">\n        <span class="absolute top-0 border-slate-200 border-t border-b border-dashed w-full h-8 dark:border-slate-700"></span>\n        <span class="absolute top-0 border-slate-200 border-b border-dashed w-full h-4 dark:border-slate-700"></span>\n      </span>\n      <span class="relative z-10 text-slate-700 font-medium px-4 dark:text-slate-200">The quick brown fox jumps over the lazy dog.</span>\n    </div>\n  </div>\n'}),(0,s.kt)("pre",Object.assign({},{className:"language-html"}),(0,s.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"span")," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"inline-block ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"align-text-top")," ...",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"...",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"span"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,s.kt)(r.X,{level:3,id:"text-bottom",nextElement:{type:"paragraph"}},"Text Bottom"),(0,s.kt)("p",null,"Use ",(0,s.kt)("inlineCode",{parentName:"p"},"align-text-bottom")," to align the bottom of an element with the bottom of the parent element’s font."),(0,s.kt)(i.e,{containerClassName:"mt-4 -mb-3",html:'\n  <div class="bg-white rounded-lg shadow-lg ring-1 ring-slate-900/5 py-4 max-w-md mx-auto dark:bg-slate-800 dark:ring-0 dark:highlight-white/5">\n    <div class="leading-none relative">\n      <span class="w-0 h-8 inline-block align-text-bottom">\n        <span class="absolute top-0 border-slate-200 border-t border-b border-dashed w-full h-8 dark:border-slate-700"></span>\n        <span class="absolute top-0 border-slate-200 border-b border-dashed w-full h-4 dark:border-slate-700"></span>\n      </span>\n      <span class="relative z-10 text-slate-700 font-medium px-4 dark:text-slate-200">The quick brown fox jumps over the lazy dog.</span>\n    </div>\n  </div>\n'}),(0,s.kt)("pre",Object.assign({},{className:"language-html"}),(0,s.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"span")," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"inline-block ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"align-text-bottom")," ...",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"...",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"span"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,s.kt)("hr",null),(0,s.kt)(u,{level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},ignore:!0,mdxType:"Heading"},"Applying conditionally"),(0,s.kt)(u,{level:3,id:"hover-focus-and-other-states",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Hover, focus, and other states"),(0,s.kt)(m.k,{defaultClass:"align-middle",featuredClass:"align-top",element:"p",mdxType:"HoverFocusAndOtherStates"}),(0,s.kt)(u,{level:3,id:"breakpoints-and-media-queries",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Breakpoints and media queries"),(0,s.kt)(d.p,{defaultClass:"align-middle",featuredClass:"align-top",element:"p",mdxType:"BreakpointsAndMediaQueries"}),(0,s.kt)("hr",null),(0,s.kt)(r.X,{level:2,id:"using-custom-values",nextElement:{type:"heading",depth:3}},"Using custom values"),(0,s.kt)(r.X,{level:3,id:"arbitrary-values",nextElement:{type:"jsx"}},"Arbitrary values"),(0,s.kt)(p.k,{property:"vertical-align",featuredClass:"align-[4px]",hasTheme:!1,mdxType:"ArbitraryValues"}))}h.isMDXComponent=!0,h.layoutProps=b},83434:function(e,a,t){"use strict";t.d(a,{e:function(){return p}});var n=t(26042),s=t(85893),l=t(86010),r=t(19150),i=t(67294),o={none:"",md:"p-8"};function c(e){var a=e.as,t=e.style,r=e.padding,i=e.p,c=e.className,p=e.containerClassName,d=e.html,m=e.children,g=e.hint,u=e.hintClassName,b=e.lightOnly,k=void 0!==b&&b,h=null!=r?r:void 0===i?"md":i,N=o[h];if(void 0===N)throw Error("Invalid padding value: ".concat(JSON.stringify(h)));return(0,s.jsxs)("div",{className:p,children:[void 0!==g&&(0,s.jsx)("div",{className:(0,l.Z)(u,"not-prose mb-4"),children:(0,s.jsxs)("div",{className:"flex space-x-2",children:[(0,s.jsxs)("svg",{className:"flex-none w-5 h-5",viewBox:"0 0 20 20",fill:"none",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,s.jsx)("path",{d:"m9.813 9.25.346-5.138a1.276 1.276 0 0 0-2.54-.235L6.75 11.25 5.147 9.327a1.605 1.605 0 0 0-2.388-.085.018.018 0 0 0-.004.019l1.98 4.87a5 5 0 0 0 4.631 3.119h3.885a4 4 0 0 0 4-4v-1a3 3 0 0 0-3-3H9.813Z",className:"stroke-slate-400 dark:stroke-slate-300"}),(0,s.jsx)("path",{d:"M3 5s.35-.47 1.25-.828m9.516-.422c2.078.593 3.484 1.5 3.484 1.5",className:"stroke-slate-400 dark:stroke-sky-400"})]}),(0,s.jsx)("p",{className:"text-slate-700 text-sm font-medium dark:text-slate-200",children:g})]})}),(0,s.jsxs)(void 0===a?"div":a,{style:t,className:(0,l.Z)("not-prose relative bg-slate-50 rounded-xl overflow-hidden",!k&&"dark:bg-slate-800/25"),children:[(0,s.jsx)("div",{style:{backgroundPosition:"10px 10px"},className:(0,l.Z)("absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]",!k&&"dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]")}),(0,s.jsx)("div",(0,n.Z)({className:(0,l.Z)("relative rounded-xl overflow-auto",N,c)},d?{dangerouslySetInnerHTML:{__html:d}}:{children:m})),(0,s.jsx)("div",{className:(0,l.Z)("absolute inset-0 pointer-events-none border border-black/5 rounded-xl",!k&&"dark:border-white/5")})]})]})}function p(e){return e.resizable?(0,s.jsx)(d,(0,n.Z)({},e)):(0,s.jsx)(c,(0,n.Z)({},e))}function d(e){var a=(0,i.useRef)(),t=(0,r.c$)(0),l=(0,i.useRef)(),o=(0,i.useRef)();return(0,i.useEffect)(function(){var e=new window.ResizeObserver(function(){t.set(0)});return e.observe(a.current),function(){e.disconnect()}},[]),(0,i.useEffect)(function(){o.current.onselectstart=function(){return!1}},[]),(0,s.jsxs)("div",{ref:a,className:"relative",children:[(0,s.jsx)(c,(0,n.Z)({as:r.ww.div,style:{marginRight:(0,r.Hm)(t,function(e){return-e})}},e)),(0,s.jsx)("div",{ref:l,className:"absolute inset-y-0 right-[-1.375rem] left-80 ml-4 pointer-events-none",children:(0,s.jsx)(r.ww.div,{ref:o,drag:"x",_dragX:t,dragMomentum:!1,dragElastic:0,dragConstraints:l,className:"pointer-events-auto absolute top-1/2 right-0 -mt-6 p-2 hidden md:block cursor-ew-resize",style:{x:t},onDragStart:function(){document.documentElement.classList.add("dragging-ew")},onDragEnd:function(){document.documentElement.classList.remove("dragging-ew")},children:(0,s.jsx)("div",{className:"w-1.5 h-8 bg-slate-500/60 rounded-full"})})})]})}}},function(e){e.O(0,[3430,2619,4713,1818,2474,566,9774,2888,179],function(){return e(e.s=12336)}),_N_E=e.O()}]);