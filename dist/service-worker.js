if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let t={};const c=e=>i(e,o),f={module:{uri:o},exports:t,require:c};s[o]=Promise.all(r.map((e=>f[e]||c(e)))).then((e=>(n(...e),t)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.html",revision:"806e3fcdbee6978e2ede37cbde4e0d2d"},{url:"main.js",revision:"1b9ec8b4ae8f5ae8eae56324e30b9e5a"},{url:"resource/css/top.css",revision:"2e346ceced69cf4d3b207a0a52ab52f1"},{url:"resource/img/aniyazan_image.png",revision:"e0e7352f0475f38ffb02b5228f5714fd"}],{})}));
