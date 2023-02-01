(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9643],{3905:function(e,a,n){"use strict";n.d(a,{Zo:function(){return i},kt:function(){return m}});var t=n(67294);function s(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function c(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,t)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?c(Object(n),!0).forEach(function(a){s(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}var o=t.createContext({}),p=function(e){var a,n=t.useContext(o),s=n;return e&&(s="function"==typeof(a=e)?e(n):r(r({},n),e)),s},i=function(e){var a=p(e.components);return t.createElement(o.Provider,{value:a},e.children)},l={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef(function(e,a){var n=e.components,s=e.mdxType,c=e.originalType,o=e.parentName,i=function(e,a){if(null==e)return{};var n,t,s=function(e,a){if(null==e)return{};var n,t,s={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],a.indexOf(n)>=0||(s[n]=e[n]);return s}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],!(a.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}(e,["components","mdxType","originalType","parentName"]),u=p(n),m=u["".concat(o,".").concat(s)]||u[s]||l[s]||c;return n?t.createElement(m,r(r({ref:a},i),{},{components:n})):t.createElement(m,r({ref:a},i))});function m(e,a){var n=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var c=n.length,r=Array(c);r[0]=u;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o.mdxType="string"==typeof e?e:s,r[1]=o;for(var i=2;i<c;i++)r[i]=n[i];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},33594:function(e,a,n){"use strict";n.d(a,{EL:function(){return i}});var t,s=n(67294),c=["bottom","height","left","right","top","width"],r=new Map,o=function e(){var a=[];r.forEach(function(e,n){var t,s,r=n.getBoundingClientRect();t=r,s=e.rect,void 0===t&&(t={}),void 0===s&&(s={}),c.some(function(e){return t[e]!==s[e]})&&(e.rect=r,a.push(e))}),a.forEach(function(e){e.callbacks.forEach(function(a){return a(e.rect)})}),t=window.requestAnimationFrame(e)},p="undefined"!=typeof window&&window.document&&window.document.createElement?s.useLayoutEffect:s.useEffect;function i(e,a,n){"boolean"==typeof(c=a)?l=a:(l=null==(m=null==a?void 0:a.observe)||m,u=null==a?void 0:a.onChange),(i=n)&&"[object Function]"==({}).toString.call(i)&&(u=n);var c,i,l,u,m,g=(0,s.useState)(e.current),k=g[0],d=g[1],N=(0,s.useRef)(!1),b=(0,s.useRef)(!1),f=(0,s.useState)(null),h=f[0],j=f[1],O=(0,s.useRef)(u);return p(function(){O.current=u,e.current!==k&&d(e.current)}),p(function(){k&&!N.current&&(N.current=!0,j(k.getBoundingClientRect()))},[k]),p(function(){if(l){var a=k;if(b.current||(b.current=!0,a=e.current),a){var n,s,c=(n=a,s=function(e){null==O.current||O.current(e),j(e)},{observe:function(){var e=0===r.size;r.has(n)?r.get(n).callbacks.push(s):r.set(n,{rect:void 0,hasRectChanged:!1,callbacks:[s]}),e&&o()},unobserve:function(){var e=r.get(n);if(e){var a=e.callbacks.indexOf(s);a>=0&&e.callbacks.splice(a,1),e.callbacks.length||r.delete(n),r.size||cancelAnimationFrame(t)}}});return c.observe(),function(){c.unobserve()}}}},[l,k,e]),h}},74507:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/screen-readers",function(){return n(19229)}])},19229:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return d}});var t=n(99534);n(67294);var s=n(3905);n(41664);var c,r=n(5679),o=n(53339),p=n(74296),i=n(5566),l=n(6628),u=o.L,m=function(e){return console.warn("Component Heading was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",Object.assign({},e))},g={Layout:u,classes:{utilities:{".sr-only":{position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)","white-space":"nowrap","border-width":"0"},".not-sr-only":{position:"static",width:"auto",height:"auto",padding:"0",margin:"0",overflow:"visible",clip:"auto","white-space":"normal"}}},meta:{title:"Screen Readers",description:"Utilities for improving accessibility with screen readers."},slug:"screen-readers",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Screen-reader-only elements",slug:"screen-reader-only-elements",children:[]},{title:"Undoing screen-reader-only elements",slug:"undoing-screen-reader-only-elements",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]}]},k=p.X_;function d(e){var a=e.components,n=(0,t.Z)(e,["components"]);return(0,s.kt)(k,Object.assign({},g,n,{components:a,mdxType:"MDXLayout"}),(0,s.kt)(r.X,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3}},"Basic usage"),(0,s.kt)(r.X,{level:3,id:"screen-reader-only-elements",nextElement:{type:"paragraph"}},"Screen-reader-only elements"),(0,s.kt)("p",null,"Use ",(0,s.kt)("inlineCode",{parentName:"p"},"sr-only")," to hide an element visually without hiding it from screen readers:"),(0,s.kt)("pre",Object.assign({},{className:"language-html"}),(0,s.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"a")," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"href"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"#",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"svg"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- ... -->"),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"svg"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"span")," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"sr-only",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"Settings",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"span"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"a"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,s.kt)(r.X,{level:3,id:"undoing-screen-reader-only-elements",nextElement:{type:"paragraph"}},"Undoing screen-reader-only elements"),(0,s.kt)("p",null,"Use ",(0,s.kt)("inlineCode",{parentName:"p"},"not-sr-only")," to undo ",(0,s.kt)("inlineCode",{parentName:"p"},"sr-only"),", making an element visible to sighted users as well as screen readers. This can be useful when you want to visually hide something on small screens but show it on larger screens for example:"),(0,s.kt)("pre",Object.assign({},{className:"language-html"}),(0,s.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"a")," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"href"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"#",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"svg"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- ... -->"),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"svg"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"span")," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"sr-only sm:not-sr-only",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"Settings",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"span"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"a"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,s.kt)("hr",null),(0,s.kt)(m,{level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},ignore:!0,mdxType:"Heading"},"Applying conditionally"),(0,s.kt)(m,{level:3,id:"hover-focus-and-other-states",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Hover, focus, and other states"),(0,s.kt)(l.k,{featuredClass:"not-sr-only",variant:"focus",mdxType:"HoverFocusAndOtherStates"},(0,s.kt)("pre",Object.assign({},{className:"language-html"}),(0,s.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"a")," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"href"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"#content",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'))," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"sr-only ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"focus:not-sr-only"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  Skip to content\n",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"a"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">"))))),(0,s.kt)(m,{level:3,id:"breakpoints-and-media-queries",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Breakpoints and media queries"),(0,s.kt)(i.p,{defaultClass:"sr-only",featuredClass:"not-sr-only",mdxType:"BreakpointsAndMediaQueries"}))}d.isMDXComponent=!0,d.layoutProps=g},5566:function(e,a,n){"use strict";n.d(a,{p:function(){return s}});var t=n(85893);function s(e){var a=e.defaultClass,n=e.featuredClass,s=e.element,c=e.children;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("p",{children:["You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use ",(0,t.jsxs)("code",{children:["md:",n]})," to apply the ",(0,t.jsx)("code",{children:n})," utility at only medium screen sizes and above."]}),c||(0,t.jsx)("pre",{className:"language-html",children:(0,t.jsx)("code",{className:"language-html",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>{element}</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{defaultClass} <span class="code-highlight bg-code-highlight">md:{featuredClass}</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>{element}</span><span class="token punctuation">></span></span>\n'.replace(/{element}/g,void 0===s?"div":s).replace("{defaultClass} ",a?"".concat(a," "):"").replace("{featuredClass}",n)}})}),(0,t.jsxs)("p",{children:["To learn more, check out the documentation on"," ",(0,t.jsx)("a",{href:"/docs/responsive-design",children:"Responsive Design"}),","," ",(0,t.jsx)("a",{href:"/docs/dark-mode",children:"Dark Mode"})," and"," ",(0,t.jsx)("a",{href:"/docs/hover-focus-and-other-states#media-queries",children:"other media query modifiers"}),"."]})]})}},6628:function(e,a,n){"use strict";n.d(a,{k:function(){return s}});var t=n(85893);function s(e){e.property,e.utility;var a=e.variant,n=void 0===a?"hover":a,s=e.defaultClass,c=e.featuredClass,r=e.element,o=e.children;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("p",{children:["Tailwind lets you conditionally apply utility classes in different states using variant modifiers. For example, use"," ",(0,t.jsxs)("code",{children:[n,":",c]})," ","to only apply the ",(0,t.jsx)("code",{children:c})," utility on ",n,"."]}),o||(0,t.jsx)("pre",{className:"language-html",children:(0,t.jsx)("code",{className:"language-html",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>{element}</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{defaultClass} <span class="code-highlight bg-code-highlight">{variant}:{featuredClass}</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>{element}</span><span class="token punctuation">></span></span>\n'.replace(/{element}/g,void 0===r?"div":r).replace("{defaultClass} ",s?"".concat(s," "):"").replace("{variant}",n).replace("{featuredClass}",c)}})}),(0,t.jsxs)("p",{children:["For a complete list of all available state modifiers, check out the"," ",(0,t.jsx)("a",{href:"/docs/hover-focus-and-other-states",children:"Hover, Focus, & Other States"})," documentation."]})]})}},29815:function(e,a,n){"use strict";n.d(a,{Z:function(){return r}});var t=n(20943),s=n(13375),c=n(91566);function r(e){return function(e){if(Array.isArray(e))return(0,t.Z)(e)}(e)||(0,s.Z)(e)||(0,c.Z)(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},function(e){e.O(0,[4713,1818,2474,9774,2888,179],function(){return e(e.s=74507)}),_N_E=e.O()}]);