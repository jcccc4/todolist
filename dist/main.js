(()=>{"use strict";var e={271:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(81),r=n.n(o),a=n(645),s=n.n(a)()(r());s.push([e.id,"",""]),s.locals={};const i=s},586:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(81),r=n.n(o),a=n(645),s=n.n(a)()(r());s.push([e.id,".SR10TgcAH8qYnuGcXKXP {\n    background-color: red;\n    color: wheat;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 40px;\n    font-size: 20px;\n    gap:2px;\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    \n  }\n",""]),s.locals={header:"SR10TgcAH8qYnuGcXKXP"};const i=s},994:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(81),r=n.n(o),a=n(645),s=n.n(a)()(r());s.push([e.id,".Bm3izBel9P9nfFWTj7tr{\n    position: absolute;\n    top: 40px;\n    left: 0;\n    background-color: aqua;\n    width: 20%;\n    min-height: calc(100% - 60px);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-items: center;\n    padding-top: 20px;\n    gap: 10px;\n}",""]),s.locals={sideBar:"Bm3izBel9P9nfFWTj7tr"};const i=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(o)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);o&&s[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},s=[],i=0;i<e.length;i++){var c=e[i],l=o.base?c[0]+o.base:c[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=n(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=r(m,o);o.byIndex=i,t.splice(i,0,{identifier:u,updater:f,references:1})}s.push(u)}return s}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var s=0;s<a.length;s++){var i=n(a[s]);t[i].references--}for(var c=o(e,r),l=0;l<a.length;l++){var d=n(a[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=c}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),a=n(569),s=n.n(a),i=n(565),c=n.n(i),l=n(216),d=n.n(l),u=n(589),p=n.n(u),m=n(586),f={};f.styleTagTransform=p(),f.setAttributes=c(),f.insert=s().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=d(),t()(m.Z,f);const v=m.Z&&m.Z.locals?m.Z.locals:void 0,h=n.p+"b56afdf7fa880b6ab96a.svg",y=n.p+"12cc977624701c64c3bb.svg";var g=n(994),b={};b.styleTagTransform=p(),b.setAttributes=c(),b.insert=s().bind(null,"head"),b.domAPI=r(),b.insertStyleElement=d(),t()(g.Z,b);const T=g.Z&&g.Z.locals?g.Z.locals:void 0;var x=n(271),E={};E.styleTagTransform=p(),E.setAttributes=c(),E.insert=s().bind(null,"head"),E.domAPI=r(),E.insertStyleElement=d(),t()(x.Z,E),x.Z&&x.Z.locals&&x.Z.locals;const S={contentDiv:document.createElement("div"),state:{arrItems:[]},template:e=>0==e.length?"<div class = 'noneBox' >Nothing To Display</div>":`${e.map((e=>function(e){let t="";return Object.keys(e).map((n=>{t+=`  <div class = "objAttribute">\n                                    <div class = "${n}">${n} </div>: \n                                    <div class = "${n} ${e[n]}">${e[n]} \n                                </div></div>`})),`<div class = "objContainer">${t}</div>`}(e)))}`,initialize(e){this.contentDiv.className="contentBox",localStorage.getItem("taskList")||localStorage.setItem("taskList",JSON.stringify([])),this.state.arrItems=JSON.parse(localStorage.getItem("taskList")),e.appendChild(this.contentDiv),document.querySelector(".contentBox").innerHTML=this.template(this.state.arrItems).split(",").join(""),document.querySelector("form").addEventListener("submit",(e=>this.onSubmit(e)))},onSubmit(e){const t=document.querySelectorAll("input"),n=document.querySelector(".modalMenu");e.preventDefault();const o={},r=[];t.forEach((e=>{o[`${e.name}`]=e.value,""==e.value?r.push(!1):r.push(!0)})),r.every((e=>!0===e))&&(this.state.arrItems.push(o),n.style.display="none",localStorage.setItem("taskList",JSON.stringify(this.state.arrItems))),this.updateUI()},updateUI(){document.querySelector(".contentBox").innerHTML=this.template(this.state.arrItems).split(",").join("")}};(function(){const e=document.getElementById("root"),t=document.createElement("div");t.classList.add(`${v.header}`),t.innerHTML=`\n    <object data="${h}" class="red" ></object>\n    <div>To-DO</div>\n    <object data="${y}" class="red" ></object>\n    `,e.appendChild(t)})(),function(){const e=document.getElementById("root"),t=document.createElement("div");t.classList.add(`${T.sideBar}`);const n=["Inbox","Today","Upcoming"];for(let e of n){const n=document.createElement("div");n.className=e.toLowerCase(),n.innerText=e,t.appendChild(n)}e.appendChild(t)}(),function(){const e=document.querySelector("#root");e.appendChild(function(){const e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("div"),o=document.createElement("div"),r=document.createElement("span"),a=document.createElement("div"),s=document.createElement("form"),i=document.createElement("div"),c=document.createElement("button"),l=document.createElement("div");t.className="plusButton",n.className="modalMenu",o.className="modalContent",r.className="closeModal",a.className="form",s.className="formContainer",i.className="formTitle",c.className="formButton",l.className="formButtonContainer",r.innerHTML="&times;",i.innerHTML="Create New Task",c.innerHTML="Add to do",c.type="submit";const d=["Title","Date","Description","Priority","Project"];for(let e of d){const t=document.createElement("label"),n=document.createElement("input"),o=document.createElement("div");o.className="formBox",t.className=e.toLowerCase(),t.setAttribute("for",e.toLowerCase()),n.setAttribute("name",e.toLowerCase()),t.innerHTML=`${e}: `,"Title"===e||"Description"===e?n.type="text":"Date"==e&&(n.type="date"),o.append(t,n),a.appendChild(o)}return l.appendChild(c),s.append(a,l),o.append(i,r,s),n.append(r,o),e.append(t,n),e}()),function(){const e=document.querySelector(".modalMenu"),t=document.querySelector(".plusButton"),n=document.querySelector(".closeModal");t.addEventListener("click",(()=>{e.style.display="block"})),n.onclick=function(){e.style.display="none"},window.addEventListener("click",(t=>{t.target==e&&(e.style.display="none")}))}(),S.initialize(e)}()})()})();