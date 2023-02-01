(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6674],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach(function(t){r(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var i=a.createContext({}),c=function(e){var t,n=a.useContext(i),r=n;return e&&(r="function"==typeof(t=e)?e(n):s(s({},n),e)),r},l=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef(function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=function(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["components","mdxType","originalType","parentName"]),p=c(n),m=p["".concat(i,".").concat(r)]||p[r]||u[r]||o;return n?a.createElement(m,s(s({ref:t},l),{},{components:n})):a.createElement(m,s({ref:t},l))});function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=Array(o);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},33594:function(e,t,n){"use strict";n.d(t,{EL:function(){return l}});var a,r=n(67294),o=["bottom","height","left","right","top","width"],s=new Map,i=function e(){var t=[];s.forEach(function(e,n){var a,r,s=n.getBoundingClientRect();a=s,r=e.rect,void 0===a&&(a={}),void 0===r&&(r={}),o.some(function(e){return a[e]!==r[e]})&&(e.rect=s,t.push(e))}),t.forEach(function(e){e.callbacks.forEach(function(t){return t(e.rect)})}),a=window.requestAnimationFrame(e)},c="undefined"!=typeof window&&window.document&&window.document.createElement?r.useLayoutEffect:r.useEffect;function l(e,t,n){"boolean"==typeof(o=t)?u=t:(u=null==(m=null==t?void 0:t.observe)||m,p=null==t?void 0:t.onChange),(l=n)&&"[object Function]"==({}).toString.call(l)&&(p=n);var o,l,u,p,m,d=(0,r.useState)(e.current),f=d[0],g=d[1],b=(0,r.useRef)(!1),h=(0,r.useRef)(!1),v=(0,r.useState)(null),y=v[0],k=v[1],O=(0,r.useRef)(p);return c(function(){O.current=p,e.current!==f&&g(e.current)}),c(function(){f&&!b.current&&(b.current=!0,k(f.getBoundingClientRect()))},[f]),c(function(){if(u){var t=f;if(h.current||(h.current=!0,t=e.current),t){var n,r,o=(n=t,r=function(e){null==O.current||O.current(e),k(e)},{observe:function(){var e=0===s.size;s.has(n)?s.get(n).callbacks.push(r):s.set(n,{rect:void 0,hasRectChanged:!1,callbacks:[r]}),e&&i()},unobserve:function(){var e=s.get(n);if(e){var t=e.callbacks.indexOf(r);t>=0&&e.callbacks.splice(t,1),e.callbacks.length||s.delete(n),s.size||cancelAnimationFrame(a)}}});return o.observe(),function(){o.unobserve()}}}},[u,f,e]),y}},30609:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/scroll-behavior",function(){return n(65839)}])},65839:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var a=n(99534);n(67294);var r=n(3905);n(41664);var o=n(5679),s=n(53339),i=n(74296);n(79583);var c,l=n(5566),u=n(6628),p=s.L,m=function(e){return console.warn("Component Heading was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",Object.assign({},e))},d={Layout:p,classes:{utilities:{".scroll-auto":{"scroll-behavior":"auto"},".scroll-smooth":{"scroll-behavior":"smooth"}}},meta:{title:"Scroll Behavior",description:"Utilities for controlling the scroll behavior of an element."},slug:"scroll-behavior",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Adding smooth scrolling",slug:"adding-smooth-scrolling",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]}]},f=i.X_;function g(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,r.kt)(f,Object.assign({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.X,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3}},"Basic usage"),(0,r.kt)(o.X,{level:3,id:"adding-smooth-scrolling",nextElement:{type:"paragraph"}},"Adding smooth scrolling"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"scroll-smooth")," utilities to enable smooth scrolling within an element."),(0,r.kt)("pre",Object.assign({},{className:"language-html"}),(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"html")," ",(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"scroll-smooth",(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- ... -->"),"\n",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"html"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,r.kt)("hr",null),(0,r.kt)(m,{level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},ignore:!0,mdxType:"Heading"},"Applying conditionally"),(0,r.kt)(m,{level:3,id:"hover-focus-and-other-states",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Hover, focus, and other states"),(0,r.kt)(u.k,{defaultClass:"scroll-smooth",featuredClass:"scroll-auto",element:"html",mdxType:"HoverFocusAndOtherStates"}),(0,r.kt)(m,{level:3,id:"breakpoints-and-media-queries",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Breakpoints and media queries"),(0,r.kt)(l.p,{defaultClass:"scroll-smooth",featuredClass:"scroll-auto",element:"html",mdxType:"BreakpointsAndMediaQueries"}))}g.isMDXComponent=!0,g.layoutProps=d},29815:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var a=n(20943),r=n(13375),o=n(91566);function s(e){return function(e){if(Array.isArray(e))return(0,a.Z)(e)}(e)||(0,r.Z)(e)||(0,o.Z)(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},function(e){e.O(0,[4713,1818,2474,566,9774,2888,179],function(){return e(e.s=30609)}),_N_E=e.O()}]);