(()=>{var e={299:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});var n=r(601),o=r.n(n),a=r(314),i=r.n(a)()(o());i.push([e.id,'*{margin:0;padding:0;box-sizing:border-box;font-family:inherit}html{font-family:"Playfair Display","sans-serif"}html p,html button,html small{font-family:"Open Sans","sans-serif"}p+p{margin-top:1lh}main{padding:.5rem}.onboarding{display:flex;height:96vh;justify-content:space-between;flex-direction:column}.carousel__container{width:100%;height:100%;overflow:hidden}.carousel__slides{display:flex}.carousel__slide{min-width:100%;text-align:center}.carousel__slide h2{font-size:2rem;margin-bottom:1rem}.carousel__slide p{font-size:1.125rem}.carousel__slide img{width:100%;margin-top:18px}.carousel__dots{display:flex;gap:.5rem;justify-content:center;margin-top:1rem}.carousel__nav{display:flex;justify-content:space-between;gap:1rem;margin-top:2rem;width:95%}.carousel__skip{display:flex;align-items:center;justify-content:center}.carousel__skip__button{background:none;border:none}.dot{border-radius:3rem;width:.8rem;height:.8rem;background-color:#4d861f;margin-top:2rem}.currentDot{background-color:#4d861f;width:3.5rem}',""]);const s=i},314:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);n&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},601:e=>{"use strict";e.exports=function(e){return e[1]}},72:e=>{"use strict";var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],u=n.base?c[0]+n.base:c[0],l=a[u]||0,d="".concat(u," ").concat(l);a[u]=l+1;var f=r(d),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)t[f].references++,t[f].updater(p);else{var m=o(p,n);n.byIndex=s,t.splice(s,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=r(a[i]);t[s].references--}for(var c=n(e,o),u=0;u<a.length;u++){var l=r(a[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=c}}},659:e=>{"use strict";var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},540:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,r)=>{"use strict";e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},825:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},929:()=>{document.querySelector("#carousel");const e=document.querySelector("#carousel__slides"),t=document.querySelector("#carousel__dots"),r=document.querySelector("#carousel__next");document.querySelector("#slide-one"),document.querySelector("#slide-two"),document.querySelector("#slide-three"),Array.from(e.children).forEach((e=>{t.innerHTML+=`<div class="dot ${0==e?"fill":""}"></div>`}));let n=0;const o=e.offsetWidth;function a(){Array.from(t.children).forEach(((e,t)=>{n===t?e.classList.add("currentDot"):e.classList.remove("currentDot")}))}r.addEventListener("click",(()=>{let t=n;t<e.children.length-1&&(t=n+1),n=t;const r=t*o;e.animate([{transform:`translateX(-${r}px)`}],{duration:300,fill:"both"}),a()})),a()}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nc=void 0,(()=>{"use strict";var e=r(72),t=r.n(e),n=r(825),o=r.n(n),a=r(659),i=r.n(a),s=r(56),c=r.n(s),u=r(540),l=r.n(u),d=r(113),f=r.n(d),p=r(299),m={};m.styleTagTransform=f(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),t()(p.A,m),p.A&&p.A.locals&&p.A.locals,r(929)})()})();