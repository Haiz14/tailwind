(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8307],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return i},kt:function(){return p}});var a=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach(function(n){s(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var l=a.createContext({}),c=function(e){var n,t=a.useContext(l),s=t;return e&&(s="function"==typeof(n=e)?e(t):o(o({},t),e)),s},i=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef(function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,i=function(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}(e,["components","mdxType","originalType","parentName"]),d=c(t),p=d["".concat(l,".").concat(s)]||d[s]||u[s]||r;return t?a.createElement(p,o(o({ref:n},i),{},{components:t})):a.createElement(p,o({ref:n},i))});function p(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,o=Array(r);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:s,o[1]=l;for(var i=2;i<r;i++)o[i]=t[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},33594:function(e,n,t){"use strict";t.d(n,{EL:function(){return i}});var a,s=t(67294),r=["bottom","height","left","right","top","width"],o=new Map,l=function e(){var n=[];o.forEach(function(e,t){var a,s,o=t.getBoundingClientRect();a=o,s=e.rect,void 0===a&&(a={}),void 0===s&&(s={}),r.some(function(e){return a[e]!==s[e]})&&(e.rect=o,n.push(e))}),n.forEach(function(e){e.callbacks.forEach(function(n){return n(e.rect)})}),a=window.requestAnimationFrame(e)},c="undefined"!=typeof window&&window.document&&window.document.createElement?s.useLayoutEffect:s.useEffect;function i(e,n,t){"boolean"==typeof(r=n)?u=n:(u=null==(p=null==n?void 0:n.observe)||p,d=null==n?void 0:n.onChange),(i=t)&&"[object Function]"==({}).toString.call(i)&&(d=t);var r,i,u,d,p,g=(0,s.useState)(e.current),m=g[0],b=g[1],f=(0,s.useRef)(!1),k=(0,s.useRef)(!1),h=(0,s.useState)(null),v=h[0],y=h[1],j=(0,s.useRef)(d);return c(function(){j.current=d,e.current!==m&&b(e.current)}),c(function(){m&&!f.current&&(f.current=!0,y(m.getBoundingClientRect()))},[m]),c(function(){if(u){var n=m;if(k.current||(k.current=!0,n=e.current),n){var t,s,r=(t=n,s=function(e){null==j.current||j.current(e),y(e)},{observe:function(){var e=0===o.size;o.has(t)?o.get(t).callbacks.push(s):o.set(t,{rect:void 0,hasRectChanged:!1,callbacks:[s]}),e&&l()},unobserve:function(){var e=o.get(t);if(e){var n=e.callbacks.indexOf(s);n>=0&&e.callbacks.splice(n,1),e.callbacks.length||o.delete(t),o.size||cancelAnimationFrame(a)}}});return r.observe(),function(){r.unobserve()}}}},[u,m,e]),v}},67560:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/background-blend-mode",function(){return t(17320)}])},17320:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return b}});var a=t(99534);t(67294);var s=t(3905);t(41664);var r,o=t(5679),l=t(53339),c=t(74296),i=t(5566),u=t(6628),d=l.L,p=function(e){return console.warn("Component Heading was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",Object.assign({},e))},g={Layout:d,classes:{utilities:{".bg-blend-normal":{"background-blend-mode":"normal"},".bg-blend-multiply":{"background-blend-mode":"multiply"},".bg-blend-screen":{"background-blend-mode":"screen"},".bg-blend-overlay":{"background-blend-mode":"overlay"},".bg-blend-darken":{"background-blend-mode":"darken"},".bg-blend-lighten":{"background-blend-mode":"lighten"},".bg-blend-color-dodge":{"background-blend-mode":"color-dodge"},".bg-blend-color-burn":{"background-blend-mode":"color-burn"},".bg-blend-hard-light":{"background-blend-mode":"hard-light"},".bg-blend-soft-light":{"background-blend-mode":"soft-light"},".bg-blend-difference":{"background-blend-mode":"difference"},".bg-blend-exclusion":{"background-blend-mode":"exclusion"},".bg-blend-hue":{"background-blend-mode":"hue"},".bg-blend-saturation":{"background-blend-mode":"saturation"},".bg-blend-color":{"background-blend-mode":"color"},".bg-blend-luminosity":{"background-blend-mode":"luminosity"}}},meta:{title:"Background Blend Mode",description:"Utilities for controlling how an element's background image should blend with its background color."},slug:"background-blend-mode",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Setting the background blend mode",slug:"setting-the-background-blend-mode",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]}]},m=c.X_;function b(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,s.kt)(m,Object.assign({},g,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)(o.X,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3}},"Basic usage"),(0,s.kt)(o.X,{level:3,id:"setting-the-background-blend-mode",nextElement:{type:"paragraph"}},"Setting the background blend mode"),(0,s.kt)("p",null,"Use the ",(0,s.kt)("inlineCode",{parentName:"p"},"bg-blend-{mode}")," utilities to control how an element’s background image(s) should blend with its background color."),(0,s.kt)("pre",Object.assign({},{className:"language-html"}),(0,s.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"bg-blend-multiply ...",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- ... -->"),"\n",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,s.kt)("hr",null),(0,s.kt)(p,{level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},ignore:!0,mdxType:"Heading"},"Applying conditionally"),(0,s.kt)(p,{level:3,id:"hover-focus-and-other-states",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Hover, focus, and other states"),(0,s.kt)(u.k,{defaultClass:"bg-blend-lighten",featuredClass:"bg-blend-darken",mdxType:"HoverFocusAndOtherStates"}),(0,s.kt)(p,{level:3,id:"breakpoints-and-media-queries",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Breakpoints and media queries"),(0,s.kt)(i.p,{defaultClass:"bg-blend-lighten",featuredClass:"bg-blend-darken",mdxType:"BreakpointsAndMediaQueries"}))}b.isMDXComponent=!0,b.layoutProps=g},5566:function(e,n,t){"use strict";t.d(n,{p:function(){return s}});var a=t(85893);function s(e){var n=e.defaultClass,t=e.featuredClass,s=e.element,r=e.children;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("p",{children:["You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use ",(0,a.jsxs)("code",{children:["md:",t]})," to apply the ",(0,a.jsx)("code",{children:t})," utility at only medium screen sizes and above."]}),r||(0,a.jsx)("pre",{className:"language-html",children:(0,a.jsx)("code",{className:"language-html",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>{element}</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{defaultClass} <span class="code-highlight bg-code-highlight">md:{featuredClass}</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>{element}</span><span class="token punctuation">></span></span>\n'.replace(/{element}/g,void 0===s?"div":s).replace("{defaultClass} ",n?"".concat(n," "):"").replace("{featuredClass}",t)}})}),(0,a.jsxs)("p",{children:["To learn more, check out the documentation on"," ",(0,a.jsx)("a",{href:"/docs/responsive-design",children:"Responsive Design"}),","," ",(0,a.jsx)("a",{href:"/docs/dark-mode",children:"Dark Mode"})," and"," ",(0,a.jsx)("a",{href:"/docs/hover-focus-and-other-states#media-queries",children:"other media query modifiers"}),"."]})]})}},6628:function(e,n,t){"use strict";t.d(n,{k:function(){return s}});var a=t(85893);function s(e){e.property,e.utility;var n=e.variant,t=void 0===n?"hover":n,s=e.defaultClass,r=e.featuredClass,o=e.element,l=e.children;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("p",{children:["Tailwind lets you conditionally apply utility classes in different states using variant modifiers. For example, use"," ",(0,a.jsxs)("code",{children:[t,":",r]})," ","to only apply the ",(0,a.jsx)("code",{children:r})," utility on ",t,"."]}),l||(0,a.jsx)("pre",{className:"language-html",children:(0,a.jsx)("code",{className:"language-html",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>{element}</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{defaultClass} <span class="code-highlight bg-code-highlight">{variant}:{featuredClass}</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>{element}</span><span class="token punctuation">></span></span>\n'.replace(/{element}/g,void 0===o?"div":o).replace("{defaultClass} ",s?"".concat(s," "):"").replace("{variant}",t).replace("{featuredClass}",r)}})}),(0,a.jsxs)("p",{children:["For a complete list of all available state modifiers, check out the"," ",(0,a.jsx)("a",{href:"/docs/hover-focus-and-other-states",children:"Hover, Focus, & Other States"})," documentation."]})]})}},29815:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var a=t(20943),s=t(13375),r=t(91566);function o(e){return function(e){if(Array.isArray(e))return(0,a.Z)(e)}(e)||(0,s.Z)(e)||(0,r.Z)(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},function(e){e.O(0,[4713,1818,2474,9774,2888,179],function(){return e(e.s=67560)}),_N_E=e.O()}]);