(()=>{var t,e,a,o=260,n=300,r=420,l=150,i=150,d=new Image;d.src="resource/img/aniyazan_maker_template.png";var c=document.querySelector("#cv").getContext("2d");function u(e){t.innerHTML=e}function f(){var t=e.value,o=a.valueAsNumber;h.add({name:t,wins:o}),h.save(),h.load(),u(h.getHtml())}function s(){h.data=[],h.save(),h.load(),e.value="",a.value="",c.clearRect,u(h.getHtml())}function m(){h.createImg()}d.onload=function(){c.drawImage(d,0,0)};var h=new(function(){function t(){this.data=[]}return t.prototype.add=function(t){this.data.unshift(t)},t.prototype.save=function(){localStorage.setItem("player_data",JSON.stringify(this.data))},t.prototype.load=function(){var t=JSON.parse(localStorage.getItem("player_data"));this.data=t||[]},t.prototype.getHtml=function(){for(var t="<thead><th>投手名</th><th>勝利数</th></thead><tbody>",e=0,a=this.data;e<a.length;e++){var o=a[e];t+="<tr><td>"+o.name+"</td><td>"+o.wins.toLocaleString()+"</td></tr>"}return t+"</tbody>"},t.prototype.createImg=function(){for(var t=0;t<this.data.length;t++)e=this.data[t].name,a=this.data[t].wins.toLocaleString(),d=t,c.font="bold 65px 'M PLUS 1'",c.textAlign="center",c.fillStyle="#666666",c.textBaseline="bottom",c.strokeText(e,o+d%3*r,n+Math.floor(d/3)*l,i),c.fillText(e,o+d%3*r,n+Math.floor(d/3)*l,i),c.font="bold 80px 'M PLUS 1'",c.fillStyle="#ff0000",c.strokeText(a,410+d%3*r,n+Math.floor(d/3)*l,100),c.fillText(a,410+d%3*r,n+Math.floor(d/3)*l,100),c.font="bold 50px 'M PLUS 1'",c.fillStyle="#666666",c.fillText("勝",510+d%3*r,n+Math.floor(d/3)*l,100);var e,a,d},t}());window.addEventListener("load",(function(){t=document.querySelector("#table"),e=document.querySelector("#player"),a=document.querySelector("#wins"),document.querySelector("#btn").addEventListener("click",f),document.querySelector("#initial").addEventListener("click",s),document.querySelector("#create").addEventListener("click",m),h.load(),u(h.getHtml())}))})();