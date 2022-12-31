/*! For license information please see edit-total.js.LICENSE.txt */
(()=>{"use strict";var e,t={3956:(e,t,n)=>{var o=n(9193),r=n(3231),i=n(5287),a=n(1197);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(){return"undefined"!=typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys}function s(e,t){l(e,t),Object.getOwnPropertyNames(t.prototype).forEach((function(n){l(e.prototype,t.prototype,n)})),Object.getOwnPropertyNames(t).forEach((function(n){l(e,t,n)}))}function l(e,t,n){(n?Reflect.getOwnMetadataKeys(t,n):Reflect.getOwnMetadataKeys(t)).forEach((function(o){var r=n?Reflect.getOwnMetadata(o,t,n):Reflect.getOwnMetadata(o,t);n?Reflect.defineMetadata(o,r,e,n):Reflect.defineMetadata(o,r,e)}))}var p={__proto__:[]}instanceof Array;function d(e,t){var n=t.prototype._init;t.prototype._init=function(){var t=this,n=Object.getOwnPropertyNames(e);if(e.$options.props)for(var o in e.$options.props)e.hasOwnProperty(o)||n.push(o);n.forEach((function(n){Object.defineProperty(t,n,{get:function(){return e[n]},set:function(t){e[n]=t},configurable:!0})}))};var o=new t;t.prototype._init=n;var r={};return Object.keys(o).forEach((function(e){void 0!==o[e]&&(r[e]=o[e])})),r}var y=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.name=t.name||e._componentTag||e.name;var n=e.prototype;Object.getOwnPropertyNames(n).forEach((function(e){if("constructor"!==e)if(y.indexOf(e)>-1)t[e]=n[e];else{var o=Object.getOwnPropertyDescriptor(n,e);void 0!==o.value?"function"==typeof o.value?(t.methods||(t.methods={}))[e]=o.value:(t.mixins||(t.mixins=[])).push({data:function(){return u({},e,o.value)}}):(o.get||o.set)&&((t.computed||(t.computed={}))[e]={get:o.get,set:o.set})}})),(t.mixins||(t.mixins=[])).push({data:function(){return d(this,e)}});var o=e.__decorators__;o&&(o.forEach((function(e){return e(t)})),delete e.__decorators__);var i=Object.getPrototypeOf(e.prototype),a=i instanceof r.ZP?i.constructor:r.ZP,c=a.extend(t);return b(c,e,a),f()&&s(c,e),c}var g={prototype:!0,arguments:!0,callee:!0,caller:!0};function b(e,t,n){Object.getOwnPropertyNames(t).forEach((function(o){if(!g[o]){var r=Object.getOwnPropertyDescriptor(e,o);if(!r||r.configurable){var i,a,u=Object.getOwnPropertyDescriptor(t,o);if(!p){if("cid"===o)return;var f=Object.getOwnPropertyDescriptor(n,o);if(a=c(i=u.value),null!=i&&("object"===a||"function"===a)&&f&&f.value===u.value)return}Object.defineProperty(e,o,u)}}}))}function h(e){return"function"==typeof e?v(e):function(t){return v(t,e)}}h.registerHooks=function(e){var t;y.push.apply(y,function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(t=e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}())};const m=h;n(1660),n(8297),n(9414),n(3921),n(7554);var O,w=(O=function(e,t){return O=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},O(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}O(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});const j=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return w(t,e),t.prototype.data=function(){return{amount:0}},t.prototype.updateTotal=function(e){nodecg.sendMessage("setTotal",{type:"cash",newValue:e})},t.prototype.mounted=function(){var e=this;document.addEventListener("dialog-confirmed",(function(){e.updateTotal(e.$data.amount)}))},function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}([m],t)}(r.ZP),_=(0,n(1902).Z)(j,(function(){var e=this,t=e._self._c;return e._self._setupProxy,t(i.Z,[t(a.Z,{attrs:{label:"Kwota",filled:""},model:{value:e.amount,callback:function(t){e.amount=t},expression:"amount"}})],1)}),[],!1,null,null,null).exports;new r.ZP({vuetify:o.Z,el:"#App",render:function(e){return e(_)}})},3229:(e,t,n)=>{n.d(t,{d:()=>a});var o=n(3231),r=n(4160);const i={absolute:Boolean,bottom:Boolean,fixed:Boolean,left:Boolean,right:Boolean,top:Boolean};function a(e=[]){return o.ZP.extend({name:"positionable",props:e.length?(0,r.ji)(i,e):i})}a()},4061:(e,t,n)=>{n.d(t,{Kd:()=>i,N6:()=>a,fK:()=>c});var o=n(8363);function r(e,t,n){if(!o.Z.config.silent){if(n&&(t={_isVue:!0,$parent:n,$options:t}),t){if(t.$_alreadyWarned=t.$_alreadyWarned||[],t.$_alreadyWarned.includes(e))return;t.$_alreadyWarned.push(e)}return`[Vuetify] ${e}`+(t?function(e){if(e._isVue&&e.$parent){const t=[];let n=0;for(;e;){if(t.length>0){const o=t[t.length-1];if(o.constructor===e.constructor){n++,e=e.$parent;continue}n>0&&(t[t.length-1]=[o,n],n=0)}t.push(e),e=e.$parent}return"\n\nfound in\n\n"+t.map(((e,t)=>`${0===t?"---\x3e ":" ".repeat(5+2*t)}${Array.isArray(e)?`${f(e[0])}... (${e[1]} recursive calls)`:f(e)}`)).join("\n")}return`\n\n(found in ${f(e)})`}(t):"")}}function i(e,t,n){const o=r(e,t,n);null!=o&&console.warn(o)}function a(e,t,n){const o=r(e,t,n);null!=o&&console.error(o)}function c(e,t,n,o){a(`[BREAKING] '${e}' has been removed, use '${t}' instead. For more information, see the upgrade guide https://github.com/vuetifyjs/vuetify/releases/tag/v2.0.0#user-content-upgrade-guide`,n,o)}const u=/(?:^|[-_])(\w)/g;function f(e,t){if(e.$root===e)return"<Root>";const n="function"==typeof e&&null!=e.cid?e.options:e._isVue?e.$options||e.constructor.options:e||{};let o=n.name||n._componentTag;const r=n.__file;if(!o&&r){const e=r.match(/([^/\\]+)\.vue$/);o=e&&e[1]}return(o?`<${i=o,i.replace(u,(e=>e.toUpperCase())).replace(/[-_]/g,"")}>`:"<Anonymous>")+(r&&!1!==t?` at ${r}`:"");var i}},4160:(e,t,n)=>{n.d(t,{Do:()=>l,Ee:()=>O,GL:()=>f,RB:()=>p,TI:()=>b,XP:()=>d,_A:()=>v,jC:()=>g,ji:()=>c,kb:()=>u,qw:()=>r,uZ:()=>m,vO:()=>a,vZ:()=>i,z9:()=>h});let o=!1;try{if("undefined"!=typeof window){const e=Object.defineProperty({},"passive",{get:()=>{o=!0}});window.addEventListener("testListener",e,e),window.removeEventListener("testListener",e,e)}}catch(e){console.warn(e)}function r(e,t,n){const o=t.length-1;if(o<0)return void 0===e?n:e;for(let r=0;r<o;r++){if(null==e)return n;e=e[t[r]]}return null==e||void 0===e[t[o]]?n:e[t[o]]}function i(e,t){if(e===t)return!0;if(e instanceof Date&&t instanceof Date&&e.getTime()!==t.getTime())return!1;if(e!==Object(e)||t!==Object(t))return!1;const n=Object.keys(e);return n.length===Object.keys(t).length&&n.every((n=>i(e[n],t[n])))}function a(e,t,n){return null!=e&&t&&"string"==typeof t?void 0!==e[t]?e[t]:r(e,(t=(t=t.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),n):n}function c(e,t){const n={};for(let o=0;o<t.length;o++){const r=t[o];void 0!==e[r]&&(n[r]=e[r])}return n}function u(e,t="px"){return null==e||""===e?void 0:isNaN(+e)?String(e):`${Number(e)}${t}`}function f(e){return(e||"").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function s(e){return null!==e&&"object"==typeof e}const l=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});function p(e,t){const n=e.$vuetify.icons.component;if(t.startsWith("$")){const n=a(e,`$vuetify.icons.values.${t.split("$").pop().split(".").pop()}`,t);if("string"!=typeof n)return n;t=n}return null==n?t:{component:n,props:{icon:t}}}function d(e){return Object.keys(e)}const y=/-(\w)/g,v=e=>e.replace(y,((e,t)=>t?t.toUpperCase():""));function g(e){return e.charAt(0).toUpperCase()+e.slice(1)}function b(e){return null!=e?Array.isArray(e)?e:[e]:[]}function h(e,t="default",n,o=!1){return e.$scopedSlots.hasOwnProperty(t)?e.$scopedSlots[t](n instanceof Function?n():n):!e.$slots.hasOwnProperty(t)||n&&!o?void 0:e.$slots[t]}function m(e,t=0,n=1){return Math.max(t,Math.min(n,e))}function O(e={},t={}){for(const n in t){const o=e[n],r=t[n];s(o)&&s(r)?e[n]=O(o,r):e[n]=r}return e}}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,o),i.exports}o.m=t,e=[],o.O=(t,n,r,i)=>{if(!n){var a=1/0;for(s=0;s<e.length;s++){for(var[n,r,i]=e[s],c=!0,u=0;u<n.length;u++)(!1&i||a>=i)&&Object.keys(o.O).every((e=>o.O[e](n[u])))?n.splice(u--,1):(c=!1,i<a&&(a=i));if(c){e.splice(s--,1);var f=r();void 0!==f&&(t=f)}}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[n,r,i]},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={809:0,505:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var r,i,[a,c,u]=n,f=0;if(a.some((t=>0!==e[t]))){for(r in c)o.o(c,r)&&(o.m[r]=c[r]);if(u)var s=u(o)}for(t&&t(n);f<a.length;f++)i=a[f],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(s)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r=o.O(void 0,[797,298,311,505,450],(()=>o(3956)));r=o.O(r)})();