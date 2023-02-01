(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3815],{29320:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/guides/adonisjs",function(){return t(56484)}])},32079:function(e,n,t){"use strict";t.d(n,{a:function(){return o}});var i=t(85893),s=t(74903);function o(e){var n=e.title,t=e.description,o=e.children;return(0,i.jsxs)(s.i,{children:[(0,i.jsx)("header",{id:"header",className:"mb-10 md:flex md:items-start",children:(0,i.jsxs)("div",{className:"flex-auto max-w-4xl",children:[(0,i.jsx)("p",{className:"mb-4 text-sm leading-6 font-semibold text-sky-500 dark:text-sky-400",children:"Installation"}),(0,i.jsx)("h1",{className:"text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200",children:n}),(0,i.jsx)("p",{className:"mt-4 text-lg text-slate-700 dark:text-slate-400",children:t})]})}),(0,i.jsx)("section",{className:"mb-16 relative",children:o})]})}},56484:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return r},default:function(){return c}});var i=t(85893),s=t(53339),o=t(32079),d=t(62223),l=[{title:"Create your project",body:function(){return(0,i.jsxs)("p",{children:["Start by"," ",(0,i.jsx)("a",{href:"https://docs.adonisjs.com/guides/installation",children:"creating a new AdonisJS project"})," ","if you don’t have one set up already. Choose ",(0,i.jsx)("code",{children:"web"})," for the project structure and"," ",(0,i.jsx)("code",{children:"y"})," when asked to include Webpack Encore."]})},code:{name:"Terminal",lang:"terminal",code:"npm init adonis-ts-app@latest my-project\ncd my-project"}},{title:"Install Tailwind CSS",body:function(){return(0,i.jsxs)("p",{children:["Using npm, install ",(0,i.jsx)("code",{children:"tailwindcss"})," and its peer dependencies, as well as"," ",(0,i.jsx)("code",{children:"postcss-loader"}),", and then run the init command to generate both"," ",(0,i.jsx)("code",{children:"tailwind.config.js"})," and ",(0,i.jsx)("code",{children:"postcss.config.js"}),"."]})},code:{name:"Terminal",lang:"terminal",code:"npm install -D tailwindcss postcss postcss-loader autoprefixer\nnpx tailwindcss init -p"}},{title:"Enable PostCSS support",body:function(){return(0,i.jsxs)("p",{children:["In your ",(0,i.jsx)("code",{children:"webpack.config.js"})," file, enable the PostCSS loader. See the"," ",(0,i.jsx)("a",{href:"https://symfony.com/doc/current/frontend/encore/postcss.html",children:"Webpack Encore documentation"})," ","for more information."]})},code:{name:"webpack.config.js",lang:"js",code:"  /*\n  |--------------------------------------------------------------------------\n  | CSS loaders\n  |--------------------------------------------------------------------------\n  |\n  | Uncomment one of the following line of code to enable support for\n  | PostCSS or CSS.\n  |\n  */\n> Encore.enablePostCssLoader();\n  // Encore.configureCssLoader(() => {})"}},{title:"Configure your template paths",body:function(){return(0,i.jsxs)("p",{children:["Add the paths to all of your template files in your ",(0,i.jsx)("code",{children:"tailwind.config.js"})," file."]})},code:{name:"tailwind.config.js",lang:"js",code:"  /** @type {import('tailwindcss').Config} */\n  module.exports = {\n>   content: [\n>     \"./resources/**/*.{edge,js,ts,jsx,tsx,vue}\",\n>   ],\n    theme: {\n      extend: {},\n    },\n    plugins: [],\n  }"}},{title:"Add the Tailwind directives to your CSS",body:function(){return(0,i.jsxs)("p",{children:["Add the ",(0,i.jsx)("code",{children:"@tailwind"})," directives for each of Tailwind’s layers to your"," ",(0,i.jsx)("code",{children:"./resources/css/app.css"})," file."]})},code:{name:"app.css",lang:"css",code:"@tailwind base;\n@tailwind components;\n@tailwind utilities;"}},{title:"Start your build process",body:function(){return(0,i.jsxs)("p",{children:["Run your build process with ",(0,i.jsx)("code",{children:"npm run dev"}),"."]})},code:{name:"Terminal",lang:"terminal",code:"npm run dev"}},{title:"Start using Tailwind in your project",body:function(){return(0,i.jsxs)("p",{children:["Make sure your compiled CSS is included in the ",(0,i.jsx)("code",{children:"<head>"})," then start using Tailwind’s utility classes to style your content."]})},code:{name:"welcome.edge",lang:"html",code:'  <!doctype html>\n  <html>\n  <head>\n    <meta charset="utf-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    @entryPointStyles(\'app\')\n  </head>\n  <body>\n>   <h1 class="text-3xl font-bold underline">\n>     Hello world!\n>   </h1>\n  </body>\n  </html>'}},],r=!0;function c(e){var n=e.code;return(0,i.jsx)(o.a,{title:"Install Tailwind CSS with AdonisJS",description:"Setting up Tailwind CSS in an AdonisJS project.",children:(0,i.jsx)(d.R,{steps:l,code:n})})}c.layoutProps={meta:{title:"Install Tailwind CSS with Adonis",section:"Installation"},Layout:s.L,allowOverflow:!1}}},function(e){e.O(0,[6637,4713,1818,8864,9774,2888,179],function(){return e(e.s=29320)}),_N_E=e.O()}]);