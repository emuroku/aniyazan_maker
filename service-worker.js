if(!self.define){let e,r={};const i=(i,s)=>(i=new URL(i+".js",s).href,r[i]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=r,document.head.appendChild(e)}else e=i,importScripts(i),r()})).then((()=>{let e=r[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(r[c])return;let o={};const t=e=>i(e,c),d={module:{uri:c},exports:o,require:t};r[c]=Promise.all(s.map((e=>d[e]||t(e)))).then((e=>(n(...e),o)))}}define(["./workbox-cc56af0c"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.html",revision:"c5ed19b216b084505e5263c92703b7e3"},{url:"main.js",revision:"4cf1baddd7a38c7e79b0c73469c1b0c1"},{url:"resource/css/top.css",revision:"8bdc2b904eda024d91ef2d99b511e6e0"},{url:"resource/img/aniyazan_image.png",revision:"e0e7352f0475f38ffb02b5228f5714fd"},{url:"resource/img/aniyazan_maker_template.png",revision:"fde30dac7508cd2a0f60f81864addd92"}],{})}));
