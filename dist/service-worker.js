if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let c={};const t=e=>i(e,o),f={module:{uri:o},exports:c,require:t};s[o]=Promise.all(r.map((e=>f[e]||t(e)))).then((e=>(n(...e),c)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.html",revision:"f724b3517682c0e94b37a54383c86733"},{url:"main.js",revision:"934abda5ee136ced13b45ebf2f7d3ace"},{url:"resource/css/top.css",revision:"cfd16ac1c2da1fec5073a0acf41f5798"},{url:"resource/img/aniyazan_image.png",revision:"e0e7352f0475f38ffb02b5228f5714fd"}],{})}));
