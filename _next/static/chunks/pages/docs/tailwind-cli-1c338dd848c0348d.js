(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1837],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return l},kt:function(){return p}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach(function(n){o(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var u=r.createContext({}),a=function(e){var n,t=r.useContext(u),o=t;return e&&(o="function"==typeof(n=e)?e(t):i(i({},t),e)),o},l=function(e){var n=a(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef(function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,l=function(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,["components","mdxType","originalType","parentName"]),f=a(t),p=f["".concat(u,".").concat(o)]||f[o]||s[o]||c;return t?r.createElement(p,i(i({ref:n},l),{},{components:t})):r.createElement(p,i({ref:n},l))});function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,i=Array(c);i[0]=f;var u={};for(var a in n)hasOwnProperty.call(n,a)&&(u[a]=n[a]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var l=2;l<c;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},33594:function(e,n,t){"use strict";t.d(n,{EL:function(){return l}});var r,o=t(67294),c=["bottom","height","left","right","top","width"],i=new Map,u=function e(){var n=[];i.forEach(function(e,t){var r,o,i=t.getBoundingClientRect();r=i,o=e.rect,void 0===r&&(r={}),void 0===o&&(o={}),c.some(function(e){return r[e]!==o[e]})&&(e.rect=i,n.push(e))}),n.forEach(function(e){e.callbacks.forEach(function(n){return n(e.rect)})}),r=window.requestAnimationFrame(e)},a="undefined"!=typeof window&&window.document&&window.document.createElement?o.useLayoutEffect:o.useEffect;function l(e,n,t){"boolean"==typeof(c=n)?s=n:(s=null==(p=null==n?void 0:n.observe)||p,f=null==n?void 0:n.onChange),(l=t)&&"[object Function]"==({}).toString.call(l)&&(f=t);var c,l,s,f,p,d=(0,o.useState)(e.current),b=d[0],m=d[1],v=(0,o.useRef)(!1),y=(0,o.useRef)(!1),g=(0,o.useState)(null),w=g[0],h=g[1],O=(0,o.useRef)(f);return a(function(){O.current=f,e.current!==b&&m(e.current)}),a(function(){b&&!v.current&&(v.current=!0,h(b.getBoundingClientRect()))},[b]),a(function(){if(s){var n=b;if(y.current||(y.current=!0,n=e.current),n){var t,o,c=(t=n,o=function(e){null==O.current||O.current(e),h(e)},{observe:function(){var e=0===i.size;i.has(t)?i.get(t).callbacks.push(o):i.set(t,{rect:void 0,hasRectChanged:!1,callbacks:[o]}),e&&u()},unobserve:function(){var e=i.get(t);if(e){var n=e.callbacks.indexOf(o);n>=0&&e.callbacks.splice(n,1),e.callbacks.length||i.delete(t),i.size||cancelAnimationFrame(r)}}});return c.observe(),function(){c.unobserve()}}}},[s,b,e]),w}},73911:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/tailwind-cli",function(){return t(30542)}])},30542:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return s}});var r=t(99534);t(67294);var o=t(3905);t(41664),t(5679);var c,i=t(53339),u=t(74296),a={Layout:i.L,meta:{title:"Tailwind CLI",description:"Understanding which browsers Tailwind supports and how to manage vendor prefixes."},slug:"tailwind-cli",tableOfContents:[]},l=u.X_;function s(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,o.kt)(l,Object.assign({},a,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Notes:"),(0,o.kt)("ul",Object.assign({},{role:"list"}),(0,o.kt)("li",{parentName:"ul"},"Using ",(0,o.kt)("inlineCode",{parentName:"li"},"npm-run-all")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"concurrently")," to run alongside other build processes")))}s.isMDXComponent=!0,s.layoutProps=a},29815:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(20943),o=t(13375),c=t(91566);function i(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||(0,o.Z)(e)||(0,c.Z)(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},function(e){e.O(0,[4713,1818,2474,9774,2888,179],function(){return e(e.s=73911)}),_N_E=e.O()}]);