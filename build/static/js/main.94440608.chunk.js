(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{14:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(8),r=n.n(o),i=(n(14),n(6)),l=n(2),s=n(3),u=(n(20),"https://api.openweathermap.org/data/2.5/weather?q="),m="700f70f04cf30aa36c37d654a5c98d34";var d=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],o=t[1],r=Object(a.useState)({}),d=Object(i.a)(r,2),h=d[0],p=d[1],f=Math.round((new Date).getTime()/1e3),F=[];return c.a.createElement("div",{className:"main-wrapper ".concat(("undefined"!==typeof h.sys&&((f+=h.timezone)>h.sys.sunrise&&f<h.sys.sunset?F.push("day"):F.push("night")),"undefined"!=typeof h.main&&(h.main.temp>25?F.push("hot"):F.push("cold"),F.push(h.weather[0].main.toLowerCase())),F.length>1?F.join(" "):"hot"))},c.a.createElement("input",{autoFocus:!0,className:"location-input",type:"text",placeholder:"Type location here...",value:n,onChange:function(e){return o(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(u).concat(n,"&units=metric&APPID=").concat(m)).then((function(e){return e.json()})).then((function(e){o(""),p(e)}))}}),"undefined"!==typeof h.main?c.a.createElement("div",null,c.a.createElement("div",{className:"temperature"},c.a.createElement("strong",null,Math.round(h.main.temp)),"\xb0 C"),c.a.createElement("div",{className:"weather-type"},h.weather[0].main),c.a.createElement("div",{className:"icons"},F.includes("day")?F.includes("clear")&&F.includes("clouds")?c.a.createElement(l.a,{icon:s.d,color:"#FFF"}):F.includes("clear")?c.a.createElement(l.a,{icon:s.g,color:"#FFF"}):F.includes("clouds")?c.a.createElement(l.a,{icon:s.a,color:"#FFF"}):F.includes("rain")?c.a.createElement(l.a,{icon:s.e,color:"#FFF"}):void 0:F.includes("clouds")?c.a.createElement(l.a,{icon:s.b,color:"#FFF"}):F.includes("rain")?c.a.createElement(l.a,{icon:s.c,color:"#FFF"}):c.a.createElement(l.a,{icon:s.f,color:"#FFF"})),c.a.createElement("div",{className:"curr-time"},function(){var e=new Date(1e3*f).toGMTString().split(" ")[4].split(":"),t="AM",n=e[0];return n>=12&&(t="PM",n>13&&(n-=12)),"".concat(n," : ").concat(e[1]," ").concat(t)}()),c.a.createElement("div",{className:"location"},c.a.createElement("strong",null,h.name,", ",h.sys.country))):"")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(21)}},[[9,1,2]]]);
//# sourceMappingURL=main.94440608.chunk.js.map