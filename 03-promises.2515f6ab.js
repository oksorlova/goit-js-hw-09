parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"GyVV":[function(require,module,exports) {
const e=document.querySelector("button[type = submit]"),t=document.querySelector("input[name = delay]"),o=document.querySelector("input[name = step]"),n=document.querySelector("input[name = amount]");function u(e){e.preventDefault();for(let u=0;u<Number(n.value);u+=1){let e=Number(t.value);u>0&&(e=Number(t.value)+u*Number(o.value)),l(u+1,e).then(e=>{let{position:t,delay:o}=e;console.log(`✅ Fulfilled promise ${t} in ${o}ms`)}).catch(e=>{let{position:t,delay:o}=e;console.log(`❌ Rejected promise ${t} in ${o}ms`)})}}function l(e,t){return new Promise((o,n)=>{const u=Math.random()>.3;setTimeout(()=>{u?o({position:e,delay:t}):n({position:e,delay:t})},t)})}e.addEventListener("click",u);
},{}]},{},["GyVV"], null)
//# sourceMappingURL=/goit-js-hw-09/03-promises.2515f6ab.js.map