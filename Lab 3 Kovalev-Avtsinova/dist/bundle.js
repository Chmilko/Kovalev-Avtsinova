(()=>{"use strict";var e={983:(e,r,n)=>{n.d(r,{Z:()=>l});var t=n(81),o=n.n(t),a=n(645),i=n.n(a)()(o());i.push([e.id,"body{\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n}\r\ndiv {\r\n    display: inline-block;\r\n    width: 45%;\r\n    vertical-align: top;   \r\n    overflow: visible;\r\n    text-align: center;\r\n    padding: 0;\r\n}\r\n\r\n.main\r\n{\r\n    width: 100%;\r\n    \r\n}\r\n\r\n.field p{\r\n    vertical-align: middle;\r\n    font-size: large;\r\n    margin-left: 10%;\r\n    width: 80%;\r\n}\r\n.field\r\n{\r\n    \r\n    padding-top: 50px;\r\n    text-align: center;\r\n    height: 150px;\r\n    vertical-align: middle;\r\n    border-width: 4px;\r\n    border-radius: 10px;\r\n    border-style: solid;\r\n    border-color:cornflowerblue;\r\n    \r\n}\r\n\r\nselect, input{\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n    background-color: #d6e1f7;\r\n    text-align: center;\r\n    width:40%;\r\n    padding: 0;\r\n    font-size: large;\r\n    border-width: 2px;\r\n    border-radius: 5px;\r\n}\r\n\r\nbutton{\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n    width: 30%;\r\n    height: 50px;\r\n    padding: 0;\r\n    font-size: large;\r\n    font-weight:bold;\r\n    color: aliceblue;\r\n    text-shadow: 1px 1px 1px #b1b1b1;\r\n    border-width: 2px;\r\n    border-radius: 8px;\r\n    border: none;\r\n    border-color: rgb(63, 97, 159);\r\n    background-color: cornflowerblue;\r\n}\r\n\r\n@media (max-width: 480px)\r\n{\r\n    div{\r\n        width: 100%;\r\n        \r\n    }\r\n}",""]);const l=i},645:e=>{e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var n="",t=void 0!==r[5];return r[4]&&(n+="@supports (".concat(r[4],") {")),r[2]&&(n+="@media ".concat(r[2]," {")),t&&(n+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),n+=e(r),t&&(n+="}"),r[2]&&(n+="}"),r[4]&&(n+="}"),n})).join("")},r.i=function(e,n,t,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(t)for(var l=0;l<this.length;l++){var c=this[l][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);t&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),r.push(u))}},r}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var r=[];function n(e){for(var n=-1,t=0;t<r.length;t++)if(r[t].identifier===e){n=t;break}return n}function t(e,t){for(var a={},i=[],l=0;l<e.length;l++){var c=e[l],d=t.base?c[0]+t.base:c[0],u=a[d]||0,s="".concat(d," ").concat(u);a[d]=u+1;var p=n(s),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)r[p].references++,r[p].updater(f);else{var v=o(f,t);t.byIndex=l,r.splice(l,0,{identifier:s,updater:v,references:1})}i.push(s)}return i}function o(e,r){var n=r.domAPI(r);return n.update(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap&&r.supports===e.supports&&r.layer===e.layer)return;n.update(e=r)}else n.remove()}}e.exports=function(e,o){var a=t(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var l=n(a[i]);r[l].references--}for(var c=t(e,o),d=0;d<a.length;d++){var u=n(a[d]);0===r[u].references&&(r[u].updater(),r.splice(u,1))}a=c}}},569:e=>{var r={};e.exports=function(e,n){var t=function(e){if(void 0===r[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}r[e]=n}return r[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(n)}},216:e=>{e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r,e.options),r}},565:(e,r,n)=>{e.exports=function(e){var r=n.nc;r&&e.setAttribute("nonce",r)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=e.insertStyleElement(e);return{update:function(n){!function(e,r,n){var t="";n.supports&&(t+="@supports (".concat(n.supports,") {")),n.media&&(t+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(t+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),t+=n.css,o&&(t+="}"),n.media&&(t+="}"),n.supports&&(t+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,e,r.options)}(r,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)}}}},589:e=>{e.exports=function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var a=r[t]={id:t,exports:{}};return e[t](a,a.exports,n),a.exports}n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n.nc=void 0,(()=>{var e=n(379),r=n.n(e),t=n(795),o=n.n(t),a=n(569),i=n.n(a),l=n(565),c=n.n(l),d=n(216),u=n.n(d),s=n(589),p=n.n(s),f=n(983),v={};v.styleTagTransform=p(),v.setAttributes=c(),v.insert=i().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=u(),r()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals;const h=document.querySelector(".type-dep"),m=document.querySelector(".term-dep"),b=document.querySelector("button"),y=document.querySelector("input"),g=document.querySelector(".field");var x={0:"6 месяцев",1:"1 год",2:"1,5 года",3:"2 года"},w={0:"3 месяца",1:"6 месяцев",2:"9 месяцев",3:"1 год",4:"1,5 года",5:"2 года"},T=[20,22,15,10],S=[20,22,23,24,18,15];h.addEventListener("change",(function(e){let r=m.children.length;for(let e=0;e<r;e++)m.remove(1);if(0==h.value)for(let e=0;e<4;e++)(n=document.createElement("option")).value=e,n.text=x[e],m.appendChild(n);else if(1==h.value)for(let e=0;e<6;e++){var n;(n=document.createElement("option")).value=e,n.text=w[e],m.appendChild(n)}})),b.onclick=function(){if("disabled"==h.value)alert("Сначала выберите вид вклада!");else if("disabled"==m.value)alert("Выберите срок вклада!");else if(""==y.value||y.value<=0)alert("Введите корректную сумму вклада!");else{var e;0==h.value?e=y.value*(T[m.value]/100+1):h&&(e=y.value*(S[m.value]/100+1)),g.innerHTML='Вид вклада: "'+h.children[+h.value+1].text+'". Срок вклада: '+m.children[+m.value+1].text+" на сумму "+y.value+" руб<br> В конце срока вы получите "+e+" руб"}}})()})();