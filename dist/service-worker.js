if(!self.define){let e,r={};const i=(i,s)=>(i=new URL(i+".js",s).href,r[i]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=r,document.head.appendChild(e)}else e=i,importScripts(i),r()})).then((()=>{let e=r[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(r[o])return;let d={};const t=e=>i(e,o),c={module:{uri:o},exports:d,require:t};r[o]=Promise.all(s.map((e=>c[e]||t(e)))).then((e=>(n(...e),d)))}}define(["./workbox-cc56af0c"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.html",revision:"14ddf52ba38b0a9b01b0a3a6c187262d"},{url:"main.js",revision:"aaed89583a509c343d5dc98db2ebbd5e"},{url:"resource/css/top.css",revision:"2bd5d34af51332085f40ede5e1c47f2f"},{url:"resource/img/aniyazan_image.png",revision:"e0e7352f0475f38ffb02b5228f5714fd"},{url:"resource/img/aniyazan_maker_template.png",revision:"fde30dac7508cd2a0f60f81864addd92"}],{})}));
