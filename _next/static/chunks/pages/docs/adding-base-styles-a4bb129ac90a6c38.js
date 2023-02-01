(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[203],{3905:function(e,a,n){"use strict";n.d(a,{Zo:function(){return i},kt:function(){return u}});var t=n(67294);function s(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function c(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?c(Object(n),!0).forEach(function(a){s(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}var p=t.createContext({}),r=function(e){var a,n=t.useContext(p),s=n;return e&&(s="function"==typeof(a=e)?e(n):o(o({},n),e)),s},i=function(e){var a=r(e.components);return t.createElement(p.Provider,{value:a},e.children)},l={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef(function(e,a){var n=e.components,s=e.mdxType,c=e.originalType,p=e.parentName,i=function(e,a){if(null==e)return{};var n,t,s=function(e,a){if(null==e)return{};var n,t,s={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],a.indexOf(n)>=0||(s[n]=e[n]);return s}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],!(a.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}(e,["components","mdxType","originalType","parentName"]),m=r(n),u=m["".concat(p,".").concat(s)]||m[s]||l[s]||c;return n?t.createElement(u,o(o({ref:a},i),{},{components:n})):t.createElement(u,o({ref:a},i))});function u(e,a){var n=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var c=n.length,o=Array(c);o[0]=m;var p={};for(var r in a)hasOwnProperty.call(a,r)&&(p[r]=a[r]);p.originalType=e,p.mdxType="string"==typeof e?e:s,o[1]=p;for(var i=2;i<c;i++)o[i]=n[i];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},33594:function(e,a,n){"use strict";n.d(a,{EL:function(){return i}});var t,s=n(67294),c=["bottom","height","left","right","top","width"],o=new Map,p=function e(){var a=[];o.forEach(function(e,n){var t,s,o=n.getBoundingClientRect();t=o,s=e.rect,void 0===t&&(t={}),void 0===s&&(s={}),c.some(function(e){return t[e]!==s[e]})&&(e.rect=o,a.push(e))}),a.forEach(function(e){e.callbacks.forEach(function(a){return a(e.rect)})}),t=window.requestAnimationFrame(e)},r="undefined"!=typeof window&&window.document&&window.document.createElement?s.useLayoutEffect:s.useEffect;function i(e,a,n){"boolean"==typeof(c=a)?l=a:(l=null==(u=null==a?void 0:a.observe)||u,m=null==a?void 0:a.onChange),(i=n)&&"[object Function]"==({}).toString.call(i)&&(m=n);var c,i,l,m,u,k=(0,s.useState)(e.current),N=k[0],d=k[1],g=(0,s.useRef)(!1),b=(0,s.useRef)(!1),j=(0,s.useState)(null),O=j[0],f=j[1],y=(0,s.useRef)(m);return r(function(){y.current=m,e.current!==N&&d(e.current)}),r(function(){N&&!g.current&&(g.current=!0,f(N.getBoundingClientRect()))},[N]),r(function(){if(l){var a=N;if(b.current||(b.current=!0,a=e.current),a){var n,s,c=(n=a,s=function(e){null==y.current||y.current(e),f(e)},{observe:function(){var e=0===o.size;o.has(n)?o.get(n).callbacks.push(s):o.set(n,{rect:void 0,hasRectChanged:!1,callbacks:[s]}),e&&p()},unobserve:function(){var e=o.get(n);if(e){var a=e.callbacks.indexOf(s);a>=0&&e.callbacks.splice(a,1),e.callbacks.length||o.delete(n),o.size||cancelAnimationFrame(t)}}});return c.observe(),function(){c.unobserve()}}}},[l,N,e]),O}},98750:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/adding-base-styles",function(){return n(50623)}])},50623:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return N}});var t=n(99534);n(67294);var s,c=n(3905),o=n(41664),p=n.n(o),r=n(59533),i=n(5679),l=n(53339),m=n(74296),u={Layout:l.L,meta:{title:"Adding Base Styles",description:"Best practices for adding your own global base styles on top of Tailwind."},slug:"adding-base-styles",tableOfContents:[{title:"Using classes in your HTML",slug:"using-classes-in-your-html",children:[]},{title:"Using CSS",slug:"using-css",children:[{title:"@font-face rules",slug:"font-face-rules",children:[]}]},{title:"Using a plugin",slug:"using-a-plugin",children:[]}]},k=m.X_;function N(e){var a=e.components,n=(0,t.Z)(e,["components"]);return(0,c.kt)(k,Object.assign({},u,n,{components:a,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Base (or global) styles are the styles at the beginning of a stylesheet that set useful defaults for basic HTML elements like ",(0,c.kt)("inlineCode",{parentName:"p"},"<a>")," tags, headings, etc. or apply opinionated resets like the popular ",(0,c.kt)("a",Object.assign({parentName:"p"},{href:"https://www.paulirish.com/2012/box-sizing-border-box-ftw/"}),"box-sizing reset"),"."),(0,c.kt)("p",null,"Tailwind includes a useful set of base styles out of the box that we call ",(0,c.kt)(p(),{href:"/docs/preflight",passHref:!0},(0,c.kt)("a",null,"Preflight")),", which is really just ",(0,c.kt)("a",Object.assign({parentName:"p"},{href:"https://github.com/sindresorhus/modern-normalize"}),"modern-normalize")," plus a thin layer of additional more opinionated styles."),(0,c.kt)("p",null,"Preflight is a great starting point for most projects, but if you’d ever like to add your own additional base styles, here are some recommendations for doing it idiomatically."),(0,c.kt)("hr",null),(0,c.kt)(i.X,{level:2,id:"using-classes-in-your-html",nextElement:{type:"paragraph"}},"Using classes in your HTML"),(0,c.kt)("p",null,"If you just want to apply some global styling to the ",(0,c.kt)("inlineCode",{parentName:"p"},"html")," or ",(0,c.kt)("inlineCode",{parentName:"p"},"body")," elements, consider just adding existing classes to those elements in your HTML instead of writing new CSS:"),(0,c.kt)("pre",Object.assign({},{className:"language-html"}),(0,c.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token doctype"}),(0,c.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<!"),(0,c.kt)("span",Object.assign({parentName:"span"},{className:"token doctype-tag"}),"doctype")," ",(0,c.kt)("span",Object.assign({parentName:"span"},{className:"token name"}),"html"),(0,c.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,c.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,c.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"html")," ",(0,c.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"lang"),(0,c.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,c.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,c.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"en",(0,c.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'))," ",(0,c.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,c.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,c.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,c.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"text-gray-900 leading-tight",(0,c.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,c.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- ... -->"),"\n  ",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,c.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,c.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"body")," ",(0,c.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,c.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,c.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,c.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"min-h-screen bg-gray-100",(0,c.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,c.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n    ",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- ... -->"),"\n  ",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,c.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,c.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"body"),(0,c.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,c.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,c.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"html"),(0,c.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,c.kt)("hr",null),(0,c.kt)(i.X,{level:2,id:"using-css",nextElement:{type:"paragraph"}},"Using CSS"),(0,c.kt)("p",null,"If you want to apply some base styles to specific elements, the easiest way is to simply add them in your CSS."),(0,c.kt)("pre",Object.assign({},{className:"language-css"}),(0,c.kt)("code",Object.assign({parentName:"pre"},{className:"language-css"}),(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token atrule"}),(0,c.kt)("span",Object.assign({parentName:"span"},{className:"token rule"}),"@tailwind")," base",(0,c.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),";")),"\n",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token atrule"}),(0,c.kt)("span",Object.assign({parentName:"span"},{className:"token rule"}),"@tailwind")," components",(0,c.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),";")),"\n",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token atrule"}),(0,c.kt)("span",Object.assign({parentName:"span"},{className:"token rule"}),"@tailwind")," utilities",(0,c.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),";")),"\n\n",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token atrule"}),(0,c.kt)("span",Object.assign({parentName:"span"},{className:"token rule"}),"@layer")," base")," ",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token selector"}),"h1")," ",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token atrule atapply"}),(0,c.kt)("span",Object.assign({parentName:"span"},{className:"token rule"}),"@apply")," text-2",(0,c.kt)("span",Object.assign({parentName:"span"},{className:"token unit"}),"xl"),(0,c.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),";")),"\n  ",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n  ",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token selector"}),"h2")," ",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token atrule atapply"}),(0,c.kt)("span",Object.assign({parentName:"span"},{className:"token rule"}),"@apply")," text-xl",(0,c.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),";")),"\n  ",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"))),(0,c.kt)("p",null,"By using the ",(0,c.kt)("inlineCode",{parentName:"p"},"@layer")," directive, Tailwind will automatically move those styles to the same place as ",(0,c.kt)("inlineCode",{parentName:"p"},"@tailwind base")," to avoid unintended specificity issues."),(0,c.kt)("p",null,"Using the ",(0,c.kt)("inlineCode",{parentName:"p"},"@layer")," directive will also instruct Tailwind to consider those styles for purging when purging the ",(0,c.kt)("inlineCode",{parentName:"p"},"base")," layer. Read our ",(0,c.kt)(p(),{href:"/docs/optimizing-for-production",passHref:!0},(0,c.kt)("a",null,"documentation on optimizing for production"))," for more details."),(0,c.kt)("p",null,"It’s a good idea to use ",(0,c.kt)(p(),{href:"/docs/functions-and-directives#apply",passHref:!0},(0,c.kt)("a",null,"@apply"))," or ",(0,c.kt)(p(),{href:"/docs/functions-and-directives#theme",passHref:!0},(0,c.kt)("a",null,"theme()"))," to define these styles to avoid accidentally deviating from your design system."),(0,c.kt)(i.X,{level:3,id:"font-face-rules",nextElement:{type:"paragraph"}},"@font-face rules"),(0,c.kt)("p",null,"You can use the same approach to add your ",(0,c.kt)("inlineCode",{parentName:"p"},"@font-face")," rules for any custom fonts you’re using:"),(0,c.kt)("pre",Object.assign({},{className:"language-css"}),(0,c.kt)("code",Object.assign({parentName:"pre"},{className:"language-css"}),(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token atrule"}),(0,c.kt)("span",Object.assign({parentName:"span"},{className:"token rule"}),"@tailwind")," base",(0,c.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),";")),"\n",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token atrule"}),(0,c.kt)("span",Object.assign({parentName:"span"},{className:"token rule"}),"@tailwind")," components",(0,c.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),";")),"\n",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token atrule"}),(0,c.kt)("span",Object.assign({parentName:"span"},{className:"token rule"}),"@tailwind")," utilities",(0,c.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),";")),"\n\n",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token atrule"}),(0,c.kt)("span",Object.assign({parentName:"span"},{className:"token rule"}),"@layer")," base")," ",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token atrule"}),(0,c.kt)("span",Object.assign({parentName:"span"},{className:"token rule"}),"@font-face"))," ",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token property"}),"font-family"),(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":")," Proxima Nova",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n    ",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token property"}),"font-weight"),(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":")," ",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token number"}),"400"),(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n    ",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token property"}),"src"),(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":")," ",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token url"}),(0,c.kt)("span",Object.assign({parentName:"span"},{className:"token function"}),"url"),(0,c.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"("),"/fonts/proxima-nova/400-regular.woff",(0,c.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),")"))," ",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token function"}),"format"),(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),'"woff"'),(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n  ",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token atrule"}),(0,c.kt)("span",Object.assign({parentName:"span"},{className:"token rule"}),"@font-face"))," ",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token property"}),"font-family"),(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":")," Proxima Nova",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n    ",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token property"}),"font-weight"),(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":")," ",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token number"}),"500"),(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n    ",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token property"}),"src"),(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":")," ",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token url"}),(0,c.kt)("span",Object.assign({parentName:"span"},{className:"token function"}),"url"),(0,c.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"("),"/fonts/proxima-nova/500-medium.woff",(0,c.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),")"))," ",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token function"}),"format"),(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),'"woff"'),(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"))),(0,c.kt)("hr",null),(0,c.kt)(i.X,{level:2,id:"using-a-plugin",nextElement:{type:"paragraph"}},"Using a plugin"),(0,c.kt)("p",null,"You can also add base styles by ",(0,c.kt)(p(),{href:"/docs/plugins#adding-base-styles",passHref:!0},(0,c.kt)("a",null,"writing a plugin"))," and using the ",(0,c.kt)("inlineCode",{parentName:"p"},"addBase")," function:"),(0,c.kt)(r.M,{filename:"tailwind.config.js"},(0,c.kt)("pre",Object.assign({},{className:"language-js"}),(0,c.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"const")," plugin ",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token function"}),"require"),(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'tailwindcss/plugin'"),(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n\nmodule",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token property-access"}),"exports")," ",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token literal-property property"}),"plugins"),(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"["),"\n    ",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token function"}),"plugin"),(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"function"),(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token parameter"}),(0,c.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{")," addBase",(0,c.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),",")," theme ",(0,c.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}")),(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n      ",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token function"}),"addBase"),(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n        ",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token string-property property"}),"'h1'"),(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{")," ",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token literal-property property"}),"fontSize"),(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token function"}),"theme"),(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'fontSize.2xl'"),(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n        ",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token string-property property"}),"'h2'"),(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{")," ",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token literal-property property"}),"fontSize"),(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token function"}),"theme"),(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'fontSize.xl'"),(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n        ",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token string-property property"}),"'h3'"),(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{")," ",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token literal-property property"}),"fontSize"),(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token function"}),"theme"),(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'fontSize.lg'"),(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n      ",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n    ",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n  ",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]"),"\n",(0,c.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")))),(0,c.kt)("p",null,"Any styles added using ",(0,c.kt)("inlineCode",{parentName:"p"},"addBase")," will be inserted into the ",(0,c.kt)("inlineCode",{parentName:"p"},"base")," layer alongside Tailwind’s other base styles."))}N.isMDXComponent=!0,N.layoutProps=u},59533:function(e,a,n){"use strict";n.d(a,{M:function(){return c}});var t=n(85893),s=n(6774);function c(e){var a=e.filename,n=e.children;return(0,t.jsxs)("div",{className:"mt-5 mb-8 first:mt-0 last:mb-0 pt-2 bg-slate-800 rounded-xl shadow-lg overflow-hidden dark:ring-1 dark:ring-white/10 dark:ring-inset",children:[(0,t.jsx)(s.n,{primary:{name:a},showTabMarkers:!1}),(0,t.jsx)("div",{className:"children:my-0 children:!shadow-none children:bg-transparent",children:n})]})}},6774:function(e,a,n){"use strict";n.d(a,{n:function(){return c}});var t=n(85893),s=n(86010);function c(e){var a=e.primary,n=e.secondary,c=e.showTabMarkers,o=e.side,p=e.translucent,r=e.children;return(0,t.jsxs)("div",{className:"flex text-slate-400 text-xs leading-6",children:[(0,t.jsxs)("div",{className:"flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center",children:[a.name,(void 0===c||c)&&(a.saved?(0,t.jsx)("svg",{viewBox:"0 0 4 4",className:"ml-2.5 flex-none w-1 h-1 text-slate-500 overflow-visible",children:(0,t.jsx)("path",{d:"M-1 -1L5 5M5 -1L-1 5",fill:"none",stroke:"currentColor",strokeLinecap:"round"})}):(0,t.jsx)("div",{className:"ml-2.5 flex-none w-1 h-1 rounded-full bg-current"}))]}),(0,t.jsxs)("div",{className:(0,s.Z)("flex-auto flex items-center bg-slate-700/50 border border-slate-500/30","left"===o?"rounded-tl lg:rounded-tr":"rounded-tl",void 0!==p&&p&&"dark:bg-slate-800/50"),children:[(void 0===n?[]:n).map(function(e){var a=e.name,n=e.open,c=e.className;return(0,t.jsx)("div",{className:(0,s.Z)("px-4 py-1 border-r border-slate-200/5",c,{italic:!(void 0===n||n)}),children:a},a)}),r&&(0,t.jsx)("div",{className:"flex-auto flex items-center justify-end px-4 space-x-4",children:r})]})]})}},29815:function(e,a,n){"use strict";n.d(a,{Z:function(){return o}});var t=n(20943),s=n(13375),c=n(91566);function o(e){return function(e){if(Array.isArray(e))return(0,t.Z)(e)}(e)||(0,s.Z)(e)||(0,c.Z)(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},function(e){e.O(0,[4713,1818,2474,9774,2888,179],function(){return e(e.s=98750)}),_N_E=e.O()}]);