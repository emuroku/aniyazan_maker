if(!self.define){let e,r={};const i=(i,s)=>(i=new URL(i+".js",s).href,r[i]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=r,document.head.appendChild(e)}else e=i,importScripts(i),r()})).then((()=>{let e=r[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(r[o])return;let c={};const f=e=>i(e,o),t={module:{uri:o},exports:c,require:f};r[o]=Promise.all(s.map((e=>t[e]||f(e)))).then((e=>(n(...e),c)))}}define(["./workbox-cc56af0c"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.html",revision:"4253c1f5ca288bdb93e485f454aa1ef6"},{url:"main.js",revision:"64c7742d5cd13510318fc85fd3dd3b2c"},{url:"resource/css/top.css",revision:"a59b4e86cfd431f056eafa5874d7ee09"},{url:"resource/img/aniyazan_image.png",revision:"e0e7352f0475f38ffb02b5228f5714fd"},{url:"resource/img/aniyazan_maker_template.png",revision:"fde30dac7508cd2a0f60f81864addd92"}],{})}));
