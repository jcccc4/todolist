(()=>{"use strict";var e={271:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(81),r=n.n(o),a=n(645),c=n.n(a)()(r());c.push([e.id,"",""]),c.locals={};const s=c},586:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(81),r=n.n(o),a=n(645),c=n.n(a)()(r());c.push([e.id,".SR10TgcAH8qYnuGcXKXP {\n    background-color: red;\n    color: wheat;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 40px;\n    font-size: 20px;\n    gap:2px;\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    \n  }\n",""]),c.locals={header:"SR10TgcAH8qYnuGcXKXP"};const s=c},994:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(81),r=n.n(o),a=n(645),c=n.n(a)()(r());c.push([e.id,".Bm3izBel9P9nfFWTj7tr{\n    position: absolute;\n    top: 40px;\n    left: 0;\n    background-color: aqua;\n    width: 20%;\n    min-height: calc(100% - 60px);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-items: center;\n    padding-top: 20px;\n    gap: 10px;\n}",""]),c.locals={sideBar:"Bm3izBel9P9nfFWTj7tr"};const s=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var s=0;s<this.length;s++){var i=this[s][0];null!=i&&(c[i]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);o&&c[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},c=[],s=0;s<e.length;s++){var i=e[s],l=o.base?i[0]+o.base:i[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=n(u),m={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=r(m,o);o.byIndex=s,t.splice(s,0,{identifier:u,updater:f,references:1})}c.push(u)}return c}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var s=n(a[c]);t[s].references--}for(var i=o(e,r),l=0;l<a.length;l++){var d=n(a[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=i}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),a=n(569),c=n.n(a),s=n(565),i=n.n(s),l=n(216),d=n.n(l),u=n(589),p=n.n(u),m=n(586),f={};f.styleTagTransform=p(),f.setAttributes=i(),f.insert=c().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=d(),t()(m.Z,f);const v=m.Z&&m.Z.locals?m.Z.locals:void 0,h=n.p+"b56afdf7fa880b6ab96a.svg",y=n.p+"12cc977624701c64c3bb.svg";var g=n(994),b={};b.styleTagTransform=p(),b.setAttributes=i(),b.insert=c().bind(null,"head"),b.domAPI=r(),b.insertStyleElement=d(),t()(g.Z,b);const E=g.Z&&g.Z.locals?g.Z.locals:void 0;var x=n(271),T={};T.styleTagTransform=p(),T.setAttributes=i(),T.insert=c().bind(null,"head"),T.domAPI=r(),T.insertStyleElement=d(),t()(x.Z,T),x.Z&&x.Z.locals&&x.Z.locals;(function(){const e=document.getElementById("root"),t=document.createElement("div"),n=document.createElement("object"),o=document.createElement("object"),r=document.createTextNode("To-DO");n.data=h,o.data=y,n.classList.add(`${v.logos}`),o.classList.add(`${v.logos}`),n.classList.add("red"),t.classList.add(`${v.header}`),e.appendChild(t),t.append(n,r,o)})(),function(){const e=document.getElementById("root"),t=document.createElement("div");t.classList.add(`${E.sideBar}`);const n=["Inbox","Today","Upcoming"];for(let e of n){const n=document.createElement("div");n.className=e.toLowerCase(),n.innerText=e,t.appendChild(n)}e.appendChild(t)}(),function(){const e=document.querySelector("#root");e.appendChild(function(){const e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("div"),o=document.createElement("div"),r=document.createElement("span"),a=document.createElement("div"),c=document.createElement("form"),s=document.createElement("div"),i=document.createElement("button"),l=document.createElement("div");t.className="plusButton",n.className="modalMenu",o.className="modalContent",r.className="closeModal",a.className="form",c.className="formContainer",s.className="formTitle",i.className="formButton",l.className="formButtonContainer",r.innerHTML="&times;",s.innerHTML="Create New Task",i.innerHTML="Add to do",i.type="submit";const d=["Title","Date","Description","Priority","Project"];for(let e of d){const t=document.createElement("label"),n=document.createElement("input"),o=document.createElement("div");o.className="formBox",t.className=e.toLowerCase(),t.setAttribute("for",e.toLowerCase()),n.setAttribute("name",e.toLowerCase()),t.innerHTML=`${e}: `,"Title"===e||"Description"===e?n.type="text":"Date"==e&&(n.type="date"),o.append(t,n),a.appendChild(o)}return l.appendChild(i),c.append(a,l),o.append(s,r,c),n.append(r,o),e.append(t,n),e}()),function(){const e=document.querySelector(".modalMenu"),t=document.querySelector(".plusButton"),n=document.querySelector(".closeModal");t.addEventListener("click",(()=>{e.style.display="block"})),n.onclick=function(){e.style.display="none"},window.addEventListener("click",(t=>{t.target==e&&(e.style.display="none")}))}(),function(){const e={};let t=[];document.querySelector(".modalMenu");const n=document.querySelector("form"),o=document.querySelectorAll("input");console.log(n),console.log(o),n.addEventListener("submit",(n=>{if(n.preventDefault(),o.forEach((n=>{e[`${n.name}`]=n.value,""==n.value?t.push(!1):t.push(!0)})),t.every((e=>!0===e))){if(localStorage.getItem("taskList")){const t=JSON.parse(localStorage.getItem("taskList"));localStorage.setItem("taskList",JSON.stringify([...t,e]))}else localStorage.setItem("taskList",JSON.stringify([e]));location.reload()}}))}(),function(e){const t=document.createElement("div");t.className="contentBox";const n=[...JSON.parse(localStorage.getItem("taskList"))];console.log(n);for(let e of n){const o=document.createElement("div");o.className="itemBox";for(let t of Object.keys(e)){const r=document.createElement("div"),a=document.createElement("div"),c=document.createElement("div");a.className=`keys ${t}`,c.className=`values ${t}`,console.log(n),a.innerText=t,c.innerText=e[t],r.append(a,c),o.appendChild(r)}t.appendChild(o)}e.appendChild(t)}(e)}()})()})();