(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[971],{3905:function(e,n,a){"use strict";a.d(n,{Zo:function(){return p},kt:function(){return m}});var t=a(67294);function s(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function c(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?c(Object(a),!0).forEach(function(n){s(e,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))})}return e}var r=t.createContext({}),i=function(e){var n,a=t.useContext(r),s=a;return e&&(s="function"==typeof(n=e)?e(a):o(o({},a),e)),s},p=function(e){var n=i(e.components);return t.createElement(r.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef(function(e,n){var a=e.components,s=e.mdxType,c=e.originalType,r=e.parentName,p=function(e,n){if(null==e)return{};var a,t,s=function(e,n){if(null==e)return{};var a,t,s={},c=Object.keys(e);for(t=0;t<c.length;t++)a=c[t],n.indexOf(a)>=0||(s[a]=e[a]);return s}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)a=c[t],!(n.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}(e,["components","mdxType","originalType","parentName"]),u=i(a),m=u["".concat(r,".").concat(s)]||u[s]||l[s]||c;return a?t.createElement(m,o(o({ref:n},p),{},{components:a})):t.createElement(m,o({ref:n},p))});function m(e,n){var a=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var c=a.length,o=Array(c);o[0]=u;var r={};for(var i in n)hasOwnProperty.call(n,i)&&(r[i]=n[i]);r.originalType=e,r.mdxType="string"==typeof e?e:s,o[1]=r;for(var p=2;p<c;p++)o[p]=a[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},33594:function(e,n,a){"use strict";a.d(n,{EL:function(){return p}});var t,s=a(67294),c=["bottom","height","left","right","top","width"],o=new Map,r=function e(){var n=[];o.forEach(function(e,a){var t,s,o=a.getBoundingClientRect();t=o,s=e.rect,void 0===t&&(t={}),void 0===s&&(s={}),c.some(function(e){return t[e]!==s[e]})&&(e.rect=o,n.push(e))}),n.forEach(function(e){e.callbacks.forEach(function(n){return n(e.rect)})}),t=window.requestAnimationFrame(e)},i="undefined"!=typeof window&&window.document&&window.document.createElement?s.useLayoutEffect:s.useEffect;function p(e,n,a){"boolean"==typeof(c=n)?l=n:(l=null==(m=null==n?void 0:n.observe)||m,u=null==n?void 0:n.onChange),(p=a)&&"[object Function]"==({}).toString.call(p)&&(u=a);var c,p,l,u,m,g=(0,s.useState)(e.current),k=g[0],d=g[1],N=(0,s.useRef)(!1),b=(0,s.useRef)(!1),f=(0,s.useState)(null),j=f[0],O=f[1],v=(0,s.useRef)(u);return i(function(){v.current=u,e.current!==k&&d(e.current)}),i(function(){k&&!N.current&&(N.current=!0,O(k.getBoundingClientRect()))},[k]),i(function(){if(l){var n=k;if(b.current||(b.current=!0,n=e.current),n){var a,s,c=(a=n,s=function(e){null==v.current||v.current(e),O(e)},{observe:function(){var e=0===o.size;o.has(a)?o.get(a).callbacks.push(s):o.set(a,{rect:void 0,hasRectChanged:!1,callbacks:[s]}),e&&r()},unobserve:function(){var e=o.get(a);if(e){var n=e.callbacks.indexOf(s);n>=0&&e.callbacks.splice(n,1),e.callbacks.length||o.delete(a),o.size||cancelAnimationFrame(t)}}});return c.observe(),function(){c.unobserve()}}}},[l,k,e]),j}},75206:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/appearance",function(){return a(51171)}])},51171:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return k}});var t=a(99534);a(67294);var s=a(3905),c=a(41664),o=a.n(c),r=a(5679),i=a(83434),p=a(53339),l=a(74296);a(79583),a(5566),a(6628);var u,m={Layout:p.L,classes:{utilities:{".appearance-none":{appearance:"none"}}},meta:{title:"Appearance",description:"Utilities for suppressing native form control styling."},slug:"appearance",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Removing default element appearance",slug:"removing-default-element-appearance",children:[]}]}]},g=l.X_;function k(e){var n=e.components,a=(0,t.Z)(e,["components"]);return(0,s.kt)(g,Object.assign({},m,a,{components:n,mdxType:"MDXLayout"}),(0,s.kt)(r.X,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3}},"Basic usage"),(0,s.kt)(r.X,{level:3,id:"removing-default-element-appearance",nextElement:{type:"paragraph"}},"Removing default element appearance"),(0,s.kt)("p",null,"Use ",(0,s.kt)("inlineCode",{parentName:"p"},"appearance-none")," to reset any browser specific styling on an element. This utility is often used when creating ",(0,s.kt)(o(),{href:"/docs/examples/forms",passHref:!0},(0,s.kt)("a",null,"custom form components")),"."),(0,s.kt)(i.e,{containerClassName:"mt-4 -mb-3",html:'\n  <div class="max-w-sm mx-auto items-center">\n    <div class="flex my-6">\n      <select class="w-16">\n        <option>Yes</option>\n        <option>No</option>\n        <option>Maybe</option>\n      </select>\n      <div class="mx-6 text-slate-900 text-sm font-semibold dark:text-slate-200">\n        Default browser styles applied\n      </div>\n    </div>\n    <div class="flex my-6 items-center">\n      <select class="appearance-none w-16">\n        <option>Yes</option>\n        <option>No</option>\n        <option>Maybe</option>\n      </select>\n      <div class="mx-6 text-slate-900 text-sm font-semibold dark:text-slate-200">\n        Default styles removed\n      </div>\n    </div>\n  </div>\n'}),(0,s.kt)("pre",Object.assign({},{className:"language-html"}),(0,s.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"select"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"option"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"Yes",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"option"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"option"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"No",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"option"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"option"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"Maybe",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"option"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"select"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n\n",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"select")," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"appearance-none",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"option"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"Yes",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"option"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"option"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"No",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"option"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"option"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"Maybe",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"option"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"select"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))))}k.isMDXComponent=!0,k.layoutProps=m},83434:function(e,n,a){"use strict";a.d(n,{e:function(){return l}});var t=a(26042),s=a(85893),c=a(86010),o=a(19150),r=a(67294),i={none:"",md:"p-8"};function p(e){var n=e.as,a=e.style,o=e.padding,r=e.p,p=e.className,l=e.containerClassName,u=e.html,m=e.children,g=e.hint,k=e.hintClassName,d=e.lightOnly,N=void 0!==d&&d,b=null!=o?o:void 0===r?"md":r,f=i[b];if(void 0===f)throw Error("Invalid padding value: ".concat(JSON.stringify(b)));return(0,s.jsxs)("div",{className:l,children:[void 0!==g&&(0,s.jsx)("div",{className:(0,c.Z)(k,"not-prose mb-4"),children:(0,s.jsxs)("div",{className:"flex space-x-2",children:[(0,s.jsxs)("svg",{className:"flex-none w-5 h-5",viewBox:"0 0 20 20",fill:"none",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,s.jsx)("path",{d:"m9.813 9.25.346-5.138a1.276 1.276 0 0 0-2.54-.235L6.75 11.25 5.147 9.327a1.605 1.605 0 0 0-2.388-.085.018.018 0 0 0-.004.019l1.98 4.87a5 5 0 0 0 4.631 3.119h3.885a4 4 0 0 0 4-4v-1a3 3 0 0 0-3-3H9.813Z",className:"stroke-slate-400 dark:stroke-slate-300"}),(0,s.jsx)("path",{d:"M3 5s.35-.47 1.25-.828m9.516-.422c2.078.593 3.484 1.5 3.484 1.5",className:"stroke-slate-400 dark:stroke-sky-400"})]}),(0,s.jsx)("p",{className:"text-slate-700 text-sm font-medium dark:text-slate-200",children:g})]})}),(0,s.jsxs)(void 0===n?"div":n,{style:a,className:(0,c.Z)("not-prose relative bg-slate-50 rounded-xl overflow-hidden",!N&&"dark:bg-slate-800/25"),children:[(0,s.jsx)("div",{style:{backgroundPosition:"10px 10px"},className:(0,c.Z)("absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]",!N&&"dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]")}),(0,s.jsx)("div",(0,t.Z)({className:(0,c.Z)("relative rounded-xl overflow-auto",f,p)},u?{dangerouslySetInnerHTML:{__html:u}}:{children:m})),(0,s.jsx)("div",{className:(0,c.Z)("absolute inset-0 pointer-events-none border border-black/5 rounded-xl",!N&&"dark:border-white/5")})]})]})}function l(e){return e.resizable?(0,s.jsx)(u,(0,t.Z)({},e)):(0,s.jsx)(p,(0,t.Z)({},e))}function u(e){var n=(0,r.useRef)(),a=(0,o.c$)(0),c=(0,r.useRef)(),i=(0,r.useRef)();return(0,r.useEffect)(function(){var e=new window.ResizeObserver(function(){a.set(0)});return e.observe(n.current),function(){e.disconnect()}},[]),(0,r.useEffect)(function(){i.current.onselectstart=function(){return!1}},[]),(0,s.jsxs)("div",{ref:n,className:"relative",children:[(0,s.jsx)(p,(0,t.Z)({as:o.ww.div,style:{marginRight:(0,o.Hm)(a,function(e){return-e})}},e)),(0,s.jsx)("div",{ref:c,className:"absolute inset-y-0 right-[-1.375rem] left-80 ml-4 pointer-events-none",children:(0,s.jsx)(o.ww.div,{ref:i,drag:"x",_dragX:a,dragMomentum:!1,dragElastic:0,dragConstraints:c,className:"pointer-events-auto absolute top-1/2 right-0 -mt-6 p-2 hidden md:block cursor-ew-resize",style:{x:a},onDragStart:function(){document.documentElement.classList.add("dragging-ew")},onDragEnd:function(){document.documentElement.classList.remove("dragging-ew")},children:(0,s.jsx)("div",{className:"w-1.5 h-8 bg-slate-500/60 rounded-full"})})})]})}}},function(e){e.O(0,[3430,2619,4713,1818,2474,566,9774,2888,179],function(){return e(e.s=75206)}),_N_E=e.O()}]);