(()=>{"use strict";var e,t={3591:(e,t,r)=>{var n=r(1151),o=r(9193),i=r(3231),c=r(5287),u=r(6324),a=r(1197),l=r(4196);function p(e,t){void 0===t&&(t={});var r=t.deep,n=void 0!==r&&r,o=t.immediate,i=void 0!==o&&o;return(0,l.yh)((function(t,r){"object"!=typeof t.watch&&(t.watch=Object.create(null));var o=t.watch;"object"!=typeof o[e]||Array.isArray(o[e])?void 0===o[e]&&(o[e]=[]):o[e]=[o[e]],o[e].push({handler:r,deep:n,immediate:i})}))}r(1660),r(8297),r(9414),r(3921),r(7554);var f,s=r(8209),d=r(6271),y=r(2276),v=(f=function(e,t){return f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},f(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}f(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),h=function(e,t,r,n){var o,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,n);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(c=(i<3?o(c):i>3?o(t,r,c):o(t,r))||c);return i>3&&c&&Object.defineProperty(t,r,c),c};i.ZP.use(d.ZP);var b=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return v(t,e),Object.defineProperty(t.prototype,"reps",{get:function(){return this.context.rootState.ReplicantModule.reps},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"reader",{get:function(){return this.reps.readerReplicant},enumerable:!1,configurable:!0}),t.prototype.updateReader=function(e){n.OV.setReplicant({name:"readerReplicant",val:e})},h([(0,y.aU)({rawError:!0})],t.prototype,"updateReader",null),h([(0,y.Yl)({name:"OurModule"})],t)}(y.g4),O=new d.yh({strict:!1,state:{},modules:{ReplicantModule:n.np,OurModule:b}});const g=O;var w=(0,y.rT)(b,O),j=function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},e(t,r)};return function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),m=function(e,t,r,n){var o,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,n);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(c=(i<3?o(c):i>3?o(t,r,c):o(t,r))||c);return i>3&&c&&Object.defineProperty(t,r,c),c};const _=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.readerName="",t}return j(t,e),t.prototype.mounted=function(){this.readerName=this.reader},t.prototype.updateReader=function(){w.updateReader(this.readerName)},t.prototype.onReaderChange=function(e){this.readerName=e},m([s.aD],t.prototype,"reader",void 0),m([p("reader")],t.prototype,"onReaderChange",null),m([l.ZP],t)}(i.ZP),P=(0,r(1902).Z)(_,(function(){var e=this,t=e._self._c;return e._self._setupProxy,t(c.Z,[t(a.Z,{attrs:{id:"readerField",label:"Obecny czytający",filled:""},model:{value:e.readerName,callback:function(t){e.readerName=t},expression:"readerName"}}),e._v(" "),t(u.Z,{on:{click:()=>{e.updateReader()}}},[e._v("Aktualizuj czytającego")])],1)}),[],!1,null,null,null).exports;(0,n.rl)(g).then((function(){new i.ZP({vuetify:o.Z,store:g,el:"#App",render:function(e){return e(P)}})}))},4160:(e,t,r)=>{r.d(t,{Do:()=>f,Ee:()=>w,GL:()=>l,RB:()=>s,TI:()=>b,XP:()=>d,_A:()=>v,jC:()=>h,ji:()=>u,kb:()=>a,qw:()=>o,uZ:()=>g,vO:()=>c,vZ:()=>i,z9:()=>O});let n=!1;try{if("undefined"!=typeof window){const e=Object.defineProperty({},"passive",{get:()=>{n=!0}});window.addEventListener("testListener",e,e),window.removeEventListener("testListener",e,e)}}catch(e){console.warn(e)}function o(e,t,r){const n=t.length-1;if(n<0)return void 0===e?r:e;for(let o=0;o<n;o++){if(null==e)return r;e=e[t[o]]}return null==e||void 0===e[t[n]]?r:e[t[n]]}function i(e,t){if(e===t)return!0;if(e instanceof Date&&t instanceof Date&&e.getTime()!==t.getTime())return!1;if(e!==Object(e)||t!==Object(t))return!1;const r=Object.keys(e);return r.length===Object.keys(t).length&&r.every((r=>i(e[r],t[r])))}function c(e,t,r){return null!=e&&t&&"string"==typeof t?void 0!==e[t]?e[t]:o(e,(t=(t=t.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),r):r}function u(e,t){const r={};for(let n=0;n<t.length;n++){const o=t[n];void 0!==e[o]&&(r[o]=e[o])}return r}function a(e,t="px"){return null==e||""===e?void 0:isNaN(+e)?String(e):`${Number(e)}${t}`}function l(e){return(e||"").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function p(e){return null!==e&&"object"==typeof e}const f=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});function s(e,t){const r=e.$vuetify.icons.component;if(t.startsWith("$")){const r=c(e,`$vuetify.icons.values.${t.split("$").pop().split(".").pop()}`,t);if("string"!=typeof r)return r;t=r}return null==r?t:{component:r,props:{icon:t}}}function d(e){return Object.keys(e)}const y=/-(\w)/g,v=e=>e.replace(y,((e,t)=>t?t.toUpperCase():""));function h(e){return e.charAt(0).toUpperCase()+e.slice(1)}function b(e){return null!=e?Array.isArray(e)?e:[e]:[]}function O(e,t="default",r,n=!1){return e.$scopedSlots.hasOwnProperty(t)?e.$scopedSlots[t](r instanceof Function?r():r):!e.$slots.hasOwnProperty(t)||r&&!n?void 0:e.$slots[t]}function g(e,t=0,r=1){return Math.max(t,Math.min(r,e))}function w(e={},t={}){for(const r in t){const n=e[r],o=t[r];p(n)&&p(o)?e[r]=w(n,o):e[r]=o}return e}}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return t[e](i,i.exports,n),i.exports}n.m=t,e=[],n.O=(t,r,o,i)=>{if(!r){var c=1/0;for(p=0;p<e.length;p++){for(var[r,o,i]=e[p],u=!0,a=0;a<r.length;a++)(!1&i||c>=i)&&Object.keys(n.O).every((e=>n.O[e](r[a])))?r.splice(a--,1):(u=!1,i<c&&(c=i));if(u){e.splice(p--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var p=e.length;p>0&&e[p-1][2]>i;p--)e[p]=e[p-1];e[p]=[r,o,i]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={207:0,505:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,i,[c,u,a]=r,l=0;if(c.some((t=>0!==e[t]))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(a)var p=a(n)}for(t&&t(r);l<c.length;l++)i=c[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(p)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=n.O(void 0,[797,298,361,311,505,450,324,898],(()=>n(3591)));o=n.O(o)})();