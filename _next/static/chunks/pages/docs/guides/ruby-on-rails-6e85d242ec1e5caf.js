(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6706],{69334:function(e,i,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/guides/ruby-on-rails",function(){return n(47898)}])},32079:function(e,i,n){"use strict";n.d(i,{a:function(){return s}});var t=n(85893),l=n(74903);function s(e){var i=e.title,n=e.description,s=e.children;return(0,t.jsxs)(l.i,{children:[(0,t.jsx)("header",{id:"header",className:"mb-10 md:flex md:items-start",children:(0,t.jsxs)("div",{className:"flex-auto max-w-4xl",children:[(0,t.jsx)("p",{className:"mb-4 text-sm leading-6 font-semibold text-sky-500 dark:text-sky-400",children:"Installation"}),(0,t.jsx)("h1",{className:"text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200",children:i}),(0,t.jsx)("p",{className:"mt-4 text-lg text-slate-700 dark:text-slate-400",children:n})]})}),(0,t.jsx)("section",{className:"mb-16 relative",children:s})]})}},47898:function(e,i,n){"use strict";n.r(i),n.d(i,{__N_SSG:function(){return o},default:function(){return d}});var t=n(85893),l=n(53339),s=n(32079),a=n(62223),r=[{title:"Create your project",body:function(){return(0,t.jsxs)("p",{children:["Start by creating a new Rails project if you don't have one set up already. The most common approach is to use the"," ",(0,t.jsx)("a",{href:"https://guides.rubyonrails.org/command_line.html",children:"Rails Command Line"}),"."]})},code:{name:"Terminal",lang:"terminal",code:"rails new my-app\ncd my-app"}},{title:"Install Tailwind CSS",body:function(){return(0,t.jsxs)("p",{children:["Install the ",(0,t.jsx)("code",{children:"tailwindcss-rails"})," gem, and then run the install command to generate a ",(0,t.jsx)("code",{children:"tailwind.config.js"})," file in the ",(0,t.jsx)("code",{children:"./config"})," directory."]})},code:{name:"Terminal",lang:"terminal",code:"./bin/bundle add tailwindcss-rails\n./bin/rails tailwindcss:install"}},{title:"Configure your template paths",body:function(){return(0,t.jsxs)("p",{children:["Add the paths to all of your template files to your ",(0,t.jsx)("code",{children:"./config/tailwind.config.js"})," ","file."]})},code:{name:"tailwind.config.js",lang:"js",code:"  /** @type {import('tailwindcss').Config} */\n  module.exports = {\n>   content: [\n>     './app/helpers/**/*.rb',\n>     './app/javascript/**/*.js',\n>     './app/views/**/*',\n>   ],\n    theme: {\n      extend: {},\n    },\n    plugins: [],\n  }"}},{title:"Add the Tailwind directives to your CSS",body:function(){return(0,t.jsxs)("p",{children:["Add the ",(0,t.jsx)("code",{children:"@tailwind"})," directives for each of Tailwind's layers to your"," ",(0,t.jsx)("code",{children:"application.tailwind.css"})," file located in the"," ",(0,t.jsx)("code",{children:"./app/assets/stylesheets"})," directory."]})},code:{name:"application.tailwind.css",lang:"css",code:"@tailwind base;\n@tailwind components;\n@tailwind utilities;"}},{title:"Start your build process",body:function(){return(0,t.jsxs)("p",{children:["Run your build process with ",(0,t.jsx)("code",{children:"./bin/dev"}),"."]})},code:{name:"Terminal",lang:"terminal",code:"./bin/dev"}},{title:"Start using Tailwind in your project",body:function(){return(0,t.jsx)("p",{children:"Start using Tailwind's utility classes to style your content."})},code:{name:"index.html.erb",lang:"html",code:'<h1 class="text-3xl font-bold underline">\n    Hello world!\n</h1>'}},],o=!0;function d(e){var i=e.code;return(0,t.jsxs)(s.a,{title:"Install Tailwind CSS with Ruby on Rails",description:"Setting up Tailwind CSS in Ruby on Rails v7+ project.",children:[(0,t.jsx)("div",{className:"relative z-10 max-w-3xl mb-16 prose prose-slate dark:prose-dark",children:(0,t.jsxs)("p",{children:["The quickest way to start using Tailwind CSS in your Rails project is to use"," ",(0,t.jsx)("a",{href:"https://github.com/rails/tailwindcss-rails",children:"Tailwind CSS for Rails"})," by running"," ",(0,t.jsx)("code",{children:"rails new my-app --css tailwind"}),". This will automatically configure your Tailwind setup based on the official Rails example. If you'd like to configure Tailwind manually, continue with the rest of this guide."]})}),(0,t.jsx)(a.R,{steps:r,code:i})]})}d.layoutProps={meta:{title:"Install Tailwind CSS with Ruby on Rails",description:"Setting up Tailwind CSS in Ruby on Rails v7+ project.",section:"Installation"},Layout:l.L,allowOverflow:!1}}},function(e){e.O(0,[6637,4713,1818,8864,9774,2888,179],function(){return e(e.s=69334)}),_N_E=e.O()}]);