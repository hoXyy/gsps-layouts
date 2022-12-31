(()=>{"use strict";var t,e={6688:(t,e,n)=>{var o=n(1151),r=n(9193),i=n(3231),l=n(5287),u=n(6324),a=n(8707),s=n(4160);const c=["sm","md","lg","xl"],f=c.reduce(((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t)),{}),p=c.reduce(((t,e)=>(t["offset"+(0,s.jC)(e)]={type:[String,Number],default:null},t)),{}),d=c.reduce(((t,e)=>(t["order"+(0,s.jC)(e)]={type:[String,Number],default:null},t)),{}),y={col:Object.keys(f),offset:Object.keys(p),order:Object.keys(d)};function g(t,e,n){let o=t;if(null!=n&&!1!==n)return e&&(o+=`-${e.replace(t,"")}`),"col"!==t||""!==n&&!0!==n?(o+=`-${n}`,o.toLowerCase()):o.toLowerCase()}const h=new Map,v=i.ZP.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...f,offset:{type:[String,Number],default:null},...p,order:{type:[String,Number],default:null},...d,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:n,children:o,parent:r}){let i="";for(const t in e)i+=String(e[t]);let l=h.get(i);if(!l){let t;for(t in l=[],y)y[t].forEach((n=>{const o=e[n],r=g(t,n,o);r&&l.push(r)}));const n=l.some((t=>t.startsWith("col-")));l.push({col:!n||!e.cols,[`col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),h.set(i,l)}return t(e.tag,(0,a.ZP)(n,{class:l}),o)}});var b=n(6010);const w=["sm","md","lg","xl"],j=["start","end","center"];function O(t,e){return w.reduce(((n,o)=>(n[t+(0,s.jC)(o)]=e(),n)),{})}const m=t=>[...j,"baseline","stretch"].includes(t),C=O("align",(()=>({type:String,default:null,validator:m}))),$=t=>[...j,"space-between","space-around"].includes(t),S=O("justify",(()=>({type:String,default:null,validator:$}))),_=t=>[...j,"space-between","space-around","stretch"].includes(t),P=O("alignContent",(()=>({type:String,default:null,validator:_}))),x={align:Object.keys(C),justify:Object.keys(S),alignContent:Object.keys(P)},R={align:"align",justify:"justify",alignContent:"align-content"};function T(t,e,n){let o=R[t];if(null!=n)return e&&(o+=`-${e.replace(t,"")}`),o+=`-${n}`,o.toLowerCase()}const Z=new Map,k=i.ZP.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:m},...C,justify:{type:String,default:null,validator:$},...S,alignContent:{type:String,default:null,validator:_},...P},render(t,{props:e,data:n,children:o}){let r="";for(const t in e)r+=String(e[t]);let i=Z.get(r);if(!i){let t;for(t in i=[],x)x[t].forEach((n=>{const o=e[n],r=T(t,n,o);r&&i.push(r)}));i.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),Z.set(r,i)}return t(e.tag,(0,a.ZP)(n,{staticClass:"row",class:i}),o)}});var M=n(1197),B=n(4196);function A(t,e){void 0===e&&(e={});var n=e.deep,o=void 0!==n&&n,r=e.immediate,i=void 0!==r&&r;return(0,B.yh)((function(e,n){"object"!=typeof e.watch&&(e.watch=Object.create(null));var r=e.watch;"object"!=typeof r[t]||Array.isArray(r[t])?void 0===r[t]&&(r[t]=[]):r[t]=[r[t]],r[t].push({handler:n,deep:o,immediate:i})}))}n(1660),n(8297),n(9414),n(3921),n(7554);var L,N=n(8209),z=(L=function(t,e){return L=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},L(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}L(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),E=function(t,e,n,o){var r,i=arguments.length,l=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,o);else for(var u=t.length-1;u>=0;u--)(r=t[u])&&(l=(i<3?r(l):i>3?r(e,n,l):r(e,n))||l);return i>3&&l&&Object.defineProperty(e,n,l),l};const H=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return z(e,t),e.prototype.data=function(){return{countdownText:"3:00",enteredTime:"3:00"}},e.prototype.startHostCountdown=function(){this.$data.enteredTime=this.$data.countdownText,nodecg.sendMessage("startHostCountdown",this.$data.countdownText)},e.prototype.stopHostCountdown=function(){nodecg.sendMessage("stopHostCountdown"),this.$data.countdownText=this.$data.enteredTime},e.prototype.mounted=function(){this.$data.countdownText=this.hostCountdownReplicant.formatted},e.prototype.onHostCountdownChanged=function(t){this.$data.countdownText=t.formatted},E([N.aD],e.prototype,"hostCountdownReplicant",void 0),E([N.aD],e.prototype,"hostCountdownRunningReplicant",void 0),E([A("hostCountdownReplicant")],e.prototype,"onHostCountdownChanged",null),E([B.ZP],e)}(i.ZP),D=(0,n(1902).Z)(H,(function(){var t=this,e=t._self._c;return t._self._setupProxy,e(l.Z,[e(M.Z,{attrs:{disabled:t.hostCountdownRunningReplicant,label:"Czas odliczania hostów",filled:""},model:{value:t.countdownText,callback:function(e){t.countdownText=e},expression:"countdownText"}}),t._v(" "),e(k,{attrs:{"no-gutters":""}},[e(v,[e(u.Z,{attrs:{disabled:t.hostCountdownRunningReplicant||0==t.countdownText.length},on:{click:function(e){return t.startHostCountdown()}}},[e(b.Z,{attrs:{left:""}},[t._v("mdi-play")]),t._v("Rozpocznij")],1)],1),t._v(" "),e(v,[e(u.Z,{attrs:{disabled:!t.hostCountdownRunningReplicant},on:{click:function(e){return t.stopHostCountdown()}}},[e(b.Z,{attrs:{left:""}},[t._v("mdi-stop")]),t._v("Zatrzymaj")],1)],1)],1)],1)}),[],!1,null,null,null).exports;var G=n(6271),F=n(2276),U=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();i.ZP.use(G.ZP);var W=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return U(e,t),Object.defineProperty(e.prototype,"reps",{get:function(){return this.context.rootState.ReplicantModule.reps},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"hostCountdownReplicant",{get:function(){return this.reps.hostCountdownReplicant},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"hostCountdownRunningReplicant",{get:function(){return this.reps.hostCountdownRunningReplicant},enumerable:!1,configurable:!0}),function(t,e,n,o){var r,i=arguments.length,l=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,o);else for(var u=t.length-1;u>=0;u--)(r=t[u])&&(l=(i<3?r(l):i>3?r(e,n,l):r(e,n))||l);return i>3&&l&&Object.defineProperty(e,n,l),l}([(0,F.Yl)({name:"OurModule"})],e)}(F.g4),q=new G.yh({strict:!1,state:{},modules:{ReplicantModule:o.np,OurModule:W}});const I=q;(0,F.rT)(W,q),(0,o.rl)(I).then((function(){new i.ZP({vuetify:r.Z,store:I,el:"#App",render:function(t){return t(D)}})}))},3229:(t,e,n)=>{n.d(e,{Z:()=>u,d:()=>l});var o=n(3231),r=n(4160);const i={absolute:Boolean,bottom:Boolean,fixed:Boolean,left:Boolean,right:Boolean,top:Boolean};function l(t=[]){return o.ZP.extend({name:"positionable",props:t.length?(0,r.ji)(i,t):i})}const u=l()},4160:(t,e,n)=>{n.d(e,{Do:()=>f,Ee:()=>j,GL:()=>s,RB:()=>p,TI:()=>v,XP:()=>d,_A:()=>g,jC:()=>h,ji:()=>u,kb:()=>a,qw:()=>r,uZ:()=>w,vO:()=>l,vZ:()=>i,z9:()=>b});let o=!1;try{if("undefined"!=typeof window){const t=Object.defineProperty({},"passive",{get:()=>{o=!0}});window.addEventListener("testListener",t,t),window.removeEventListener("testListener",t,t)}}catch(t){console.warn(t)}function r(t,e,n){const o=e.length-1;if(o<0)return void 0===t?n:t;for(let r=0;r<o;r++){if(null==t)return n;t=t[e[r]]}return null==t||void 0===t[e[o]]?n:t[e[o]]}function i(t,e){if(t===e)return!0;if(t instanceof Date&&e instanceof Date&&t.getTime()!==e.getTime())return!1;if(t!==Object(t)||e!==Object(e))return!1;const n=Object.keys(t);return n.length===Object.keys(e).length&&n.every((n=>i(t[n],e[n])))}function l(t,e,n){return null!=t&&e&&"string"==typeof e?void 0!==t[e]?t[e]:r(t,(e=(e=e.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),n):n}function u(t,e){const n={};for(let o=0;o<e.length;o++){const r=e[o];void 0!==t[r]&&(n[r]=t[r])}return n}function a(t,e="px"){return null==t||""===t?void 0:isNaN(+t)?String(t):`${Number(t)}${e}`}function s(t){return(t||"").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function c(t){return null!==t&&"object"==typeof t}const f=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});function p(t,e){const n=t.$vuetify.icons.component;if(e.startsWith("$")){const n=l(t,`$vuetify.icons.values.${e.split("$").pop().split(".").pop()}`,e);if("string"!=typeof n)return n;e=n}return null==n?e:{component:n,props:{icon:e}}}function d(t){return Object.keys(t)}const y=/-(\w)/g,g=t=>t.replace(y,((t,e)=>e?e.toUpperCase():""));function h(t){return t.charAt(0).toUpperCase()+t.slice(1)}function v(t){return null!=t?Array.isArray(t)?t:[t]:[]}function b(t,e="default",n,o=!1){return t.$scopedSlots.hasOwnProperty(e)?t.$scopedSlots[e](n instanceof Function?n():n):!t.$slots.hasOwnProperty(e)||n&&!o?void 0:t.$slots[e]}function w(t,e=0,n=1){return Math.max(e,Math.min(n,t))}function j(t={},e={}){for(const n in e){const o=t[n],r=e[n];c(o)&&c(r)?t[n]=j(o,r):t[n]=r}return t}}},n={};function o(t){var r=n[t];if(void 0!==r)return r.exports;var i=n[t]={exports:{}};return e[t](i,i.exports,o),i.exports}o.m=e,t=[],o.O=(e,n,r,i)=>{if(!n){var l=1/0;for(c=0;c<t.length;c++){for(var[n,r,i]=t[c],u=!0,a=0;a<n.length;a++)(!1&i||l>=i)&&Object.keys(o.O).every((t=>o.O[t](n[a])))?n.splice(a--,1):(u=!1,i<l&&(l=i));if(u){t.splice(c--,1);var s=r();void 0!==s&&(e=s)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[n,r,i]},o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t={35:0,505:0,752:0};o.O.j=e=>0===t[e];var e=(e,n)=>{var r,i,[l,u,a]=n,s=0;if(l.some((e=>0!==t[e]))){for(r in u)o.o(u,r)&&(o.m[r]=u[r]);if(a)var c=a(o)}for(e&&e(n);s<l.length;s++)i=l[s],o.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return o.O(c)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})();var r=o.O(void 0,[797,298,361,311,505,450,324,151,752],(()=>o(6688)));r=o.O(r)})();