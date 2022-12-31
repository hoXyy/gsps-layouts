/*! For license information please see 898.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[898,151],{1151:(t,e,n)=>{n.d(e,{OV:()=>r,np:()=>f,rl:()=>h});var o,r,a=n(9937),c=n.n(a),i=n(3231),s=n(8209),u=n(2276),l=(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),p=function(t,e,n,o){var r,a=arguments.length,c=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(a<3?r(c):a>3?r(e,n,c):r(e,n))||c);return a>3&&c&&Object.defineProperty(e,n,c),c},d={totalReplicant:nodecg.Replicant("total"),autoUpdateTotalReplicant:nodecg.Replicant("autoUpdateTotal"),countdownReplicant:nodecg.Replicant("countdown",{persistent:!1}),countdownRunningReplicant:nodecg.Replicant("countdownRunning",{persistent:!1}),hostCountdownReplicant:nodecg.Replicant("hostCountdown",{persistent:!1}),hostCountdownRunningReplicant:nodecg.Replicant("hostCountdownRunning",{persistent:!1}),activeRunReplicant:nodecg.Replicant("runDataActiveRun","nodecg-speedcontrol"),nameCycleReplicant:nodecg.Replicant("nameCycle"),commentatorsReplicant:nodecg.Replicant("commentators"),readerReplicant:nodecg.Replicant("reader"),timerReplicant:nodecg.Replicant("timer","nodecg-speedcontrol"),sponsors:nodecg.Replicant("assets:sponsors"),sponsors_break:nodecg.Replicant("assets:sponsors-break"),currentBids:nodecg.Replicant("currentBids"),allBids:nodecg.Replicant("allBids"),runDataArray:nodecg.Replicant("runDataArray","nodecg-speedcontrol"),currentSong:nodecg.Replicant("song"),obsData:nodecg.Replicant("obsData",{persistent:!1}),runDataActiveSurrounding:nodecg.Replicant("runDataActiveRunSurrounding","nodecg-speedcontrol"),donationsToRead:nodecg.Replicant("donationsToRead"),hosterkaRep:nodecg.Replicant("hosterka"),logoCycles:nodecg.Replicant("logoCycles"),logoCyclesBreak:nodecg.Replicant("logoCyclesBreak"),videosCharity:nodecg.Replicant("assets:videos-charity"),videosSponsors:nodecg.Replicant("assets:videos-sponsors"),milestonesReplicant:nodecg.Replicant("milestones"),donationsToAccept:nodecg.Replicant("donationsToAccept"),bidsToAccept:nodecg.Replicant("bidsToAccept")},f=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.reps={},e}return l(e,t),e.prototype.setState=function(t){var e=t.name,n=t.val;i.ZP.set(this.reps,e,c()(n))},e.prototype.setReplicant=function(t){var e=t.name,n=t.val;i.ZP.set(this.reps,e,c()(n)),d[e].value=c()(n)},p([u.mm],e.prototype,"setState",null),p([u.mm],e.prototype,"setReplicant",null),p([(0,u.Yl)({name:"ReplicantModule",namespaced:!0})],e)}(u.g4);function h(t){return e=this,n=void 0,a=function(){return function(t,e){var n,o,r,a,c={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,i[0]&&(c=0)),c;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,o=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!((r=(r=c.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){c=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){c.label=i[1];break}if(6===i[0]&&c.label<r[1]){c.label=r[1],r=i;break}if(r&&c.label<r[2]){c.label=r[2],c.ops.push(i);break}r[2]&&c.ops.pop(),c.trys.pop();continue}i=e.call(t,c)}catch(t){i=[6,t],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}(this,(function(e){switch(e.label){case 0:return Object.keys(d).forEach((function(e){d[e].on("change",(function(n){t.commit("ReplicantModule/setState",{name:e,val:n})}))})),[4,NodeCG.waitForReplicants.apply(NodeCG,Object.keys(d).map((function(t){return d[t]})))];case 1:return e.sent(),r=(0,u.rT)(f,t),[2]}}))},new((o=Promise)||(o=Promise))((function(t,r){function c(t){try{s(a.next(t))}catch(t){r(t)}}function i(t){try{s(a.throw(t))}catch(t){r(t)}}function s(e){var n;e.done?t(e.value):(n=e.value,n instanceof o?n:new o((function(t){t(n)}))).then(c,i)}s((a=a.apply(e,n||[])).next())}));var e,n,o,a}(0,s.uD)("ReplicantModule")},3229:(t,e,n)=>{n.d(e,{Z:()=>i,d:()=>c});var o=n(3231),r=n(4160);const a={absolute:Boolean,bottom:Boolean,fixed:Boolean,left:Boolean,right:Boolean,top:Boolean};function c(t=[]){return o.ZP.extend({name:"positionable",props:t.length?(0,r.ji)(a,t):a})}const i=c()},2276:(t,e,n)=>{function o(t,e){for(var n=function(n){Object.defineProperty(t,n,{get:function(){return e[n]}})},o=0,r=Object.keys(e||{});o<r.length;o++)n(r[o])}function r(t){if(!t._vmdModuleName)throw new Error("ERR_GET_MODULE_NAME : Could not get module accessor.\n      Make sure your module has name, we can't make accessors for unnamed modules\n      i.e. @Module({ name: 'something' })");return"vuexModuleDecorators/".concat(t._vmdModuleName)}n.d(e,{Yl:()=>f,aU:()=>g,g4:()=>a,mm:()=>y,rT:()=>c});var a=function(t){this.actions=t.actions,this.mutations=t.mutations,this.state=t.state,this.getters=t.getters,this.namespaced=t.namespaced,this.modules=t.modules};function c(t,e){var n=r(t);if(e&&e.getters[n])return e.getters[n];if(t._statics)return t._statics;var o=t._genStatic;if(!o)throw new Error("ERR_GET_MODULE_NO_STATICS : Could not get module accessor.\n      Make sure your module has name, we can't make accessors for unnamed modules\n      i.e. @Module({ name: 'something' })");var a=o(e);return e?e.getters[n]=a:t._statics=a,a}var i=["actions","getters","mutations","modules","state","namespaced","commit"];function s(t,e,n,o){return new(n||(n=Promise))((function(r,a){function c(t){try{s(o.next(t))}catch(t){a(t)}}function i(t){try{s(o.throw(t))}catch(t){a(t)}}function s(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,i)}s((o=o.apply(t,e||[])).next())}))}function u(t,e){var n,o,r,a,c={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,o&&(r=2&a[0]?o.return:a[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;switch(o=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return c.label++,{value:a[1],done:!1};case 5:c.label++,o=a[1],a=[0];continue;case 7:a=c.ops.pop(),c.trys.pop();continue;default:if(!((r=(r=c.trys).length>0&&r[r.length-1])||6!==a[0]&&2!==a[0])){c=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){c.label=a[1];break}if(6===a[0]&&c.label<r[1]){c.label=r[1],r=a;break}if(r&&c.label<r[2]){c.label=r[2],c.ops.push(a);break}r[2]&&c.ops.pop(),c.trys.pop();continue}a=e.call(t,c)}catch(t){a=[6,t],o=0}finally{n=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}}function l(t,e,n){if(n||2===arguments.length)for(var o,r=0,a=e.length;r<a;r++)!o&&r in e||(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return t.concat(o||Array.prototype.slice.call(e))}function p(t,e){Object.getOwnPropertyNames(e.prototype).forEach((function(n){var r=Object.getOwnPropertyDescriptor(e.prototype,n);r.get&&t.getters&&(t.getters[n]=function(t,e,n,a){var c={context:{state:t,getters:e,rootState:n,rootGetters:a}};return o(c,t),o(c,e),r.get.call(c)})}))}function d(t){return function(e){var n=e,o=function(){return function(t){var e=new t.prototype.constructor({}),n={};return Object.keys(e).forEach((function(t){if(-1===i.indexOf(t))e.hasOwnProperty(t)&&"function"!=typeof e[t]&&(n[t]=e[t]);else if(void 0!==e[t])throw new Error("ERR_RESERVED_STATE_KEY_USED: You cannot use the following\n        ['actions', 'getters', 'mutations', 'modules', 'state', 'namespaced', 'commit']\n        as fields in your module. These are reserved as they have special purpose in Vuex")})),n}(n)};n.state||(n.state=t&&t.stateFactory?o:o()),n.getters||(n.getters={}),n.namespaced||(n.namespaced=t&&t.namespaced);for(var r=Object.getPrototypeOf(n);"VuexModule"!==r.name&&""!==r.name;)p(n,r),r=Object.getPrototypeOf(r);p(n,n);var a=t;return a.name&&(Object.defineProperty(e,"_genStatic",{value:function(t){var e={store:t||a.store};if(!e.store)throw new Error("ERR_STORE_NOT_PROVIDED: To use getModule(), either the module\n            should be decorated with store in decorator, i.e. @Module({store: store}) or\n            store should be passed when calling getModule(), i.e. getModule(MyModule, this.$store)");return function(t,e,n){var o=e.stateFactory?t.state():t.state;Object.keys(o).forEach((function(t){o.hasOwnProperty(t)&&-1===["undefined","function"].indexOf(typeof o[t])&&Object.defineProperty(n,t,{get:function(){for(var o=e.name.split("/"),r=n.store.state,a=0,c=o;a<c.length;a++)r=r[c[a]];return r[t]}})}))}(n,a,e),n.getters&&function(t,e,n){Object.keys(t.getters).forEach((function(o){t.namespaced?Object.defineProperty(n,o,{get:function(){return n.store.getters["".concat(e.name,"/").concat(o)]}}):Object.defineProperty(n,o,{get:function(){return n.store.getters[o]}})}))}(n,a,e),n.mutations&&function(t,e,n){Object.keys(t.mutations).forEach((function(o){t.namespaced?n[o]=function(){for(var t,r=[],a=0;a<arguments.length;a++)r[a]=arguments[a];(t=n.store).commit.apply(t,l(["".concat(e.name,"/").concat(o)],r,!1))}:n[o]=function(){for(var t,e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];(t=n.store).commit.apply(t,l([o],e,!1))}}))}(n,a,e),n.actions&&function(t,e,n){Object.keys(t.actions).forEach((function(o){t.namespaced?n[o]=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return s(this,void 0,void 0,(function(){var r;return u(this,(function(a){return[2,(r=n.store).dispatch.apply(r,l(["".concat(e.name,"/").concat(o)],t,!1))]}))}))}:n[o]=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return s(this,void 0,void 0,(function(){var e;return u(this,(function(r){return[2,(e=n.store).dispatch.apply(e,l([o],t,!1))]}))}))}}))}(n,a,e),e}}),Object.defineProperty(e,"_vmdModuleName",{value:a.name})),a.dynamic&&function(t,e){if(!e.name)throw new Error("Name of module not provided in decorator options");if(!e.store)throw new Error("Store not provided in decorator options when using dynamic option");e.store.registerModule(e.name,t,{preserveState:e.preserveState||!1})}(n,a),e}}function f(t){if("function"!=typeof t)return d(t);d({})(t)}var h={};function m(t){var e=t||{},n=e.commit,a=void 0===n?void 0:n,i=e.rawError,l=void 0===i?!!h.rawError:i,p=e.root,d=void 0!==p&&p;return function(t,e,n){var i=t.constructor;i.hasOwnProperty("actions")||(i.actions=Object.assign({},i.actions));var p=n.value,f=function(t,n){return s(this,void 0,void 0,(function(){var s,d,f,h,m;return u(this,(function(u){switch(u.label){case 0:return u.trys.push([0,5,,6]),s=null,i._genStatic?(d=r(i),(f=t.rootGetters[d]?t.rootGetters[d]:c(i)).context=t,[4,p.call(f,n)]):[3,2];case 1:return s=u.sent(),[3,4];case 2:return o(h={context:t},t.state),o(h,t.getters),[4,p.call(h,n)];case 3:s=u.sent(),u.label=4;case 4:return a&&t.commit(a,s),[2,s];case 5:throw m=u.sent(),l?m:new Error('ERR_ACTION_ACCESS_UNDEFINED: Are you trying to access this.someMutation() or this.someGetter inside an @Action? \nThat works only in dynamic modules. \nIf not dynamic use this.context.commit("mutationName", payload) and this.context.getters["getterName"]\n'+new Error("Could not perform action ".concat(e.toString())).stack+"\n"+m.stack);case 6:return[2]}}))}))};i.actions[e]=d?{root:d,handler:f}:f}}function g(t,e,n){if(!e&&!n)return m(t);m()(t,e,n)}function y(t,e,n){var o=t.constructor;o.hasOwnProperty("mutations")||(o.mutations=Object.assign({},o.mutations));var r=n.value;o.mutations[e]=function(t,e){r.call(t,e)}}}}]);