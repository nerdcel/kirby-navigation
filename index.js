parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"DNnH":[function(require,module,exports) {

var t,e,n=module.exports={};function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===r||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}function u(t){if(e===clearTimeout)return clearTimeout(t);if((e===o||!e)&&clearTimeout)return e=clearTimeout,clearTimeout(t);try{return e(t)}catch(n){try{return e.call(null,t)}catch(n){return e.call(this,t)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:r}catch(n){t=r}try{e="function"==typeof clearTimeout?clearTimeout:o}catch(n){e=o}}();var c,s=[],l=!1,a=-1;function f(){l&&c&&(l=!1,c.length?s=c.concat(s):a=-1,s.length&&h())}function h(){if(!l){var t=i(f);l=!0;for(var e=s.length;e;){for(c=s,s=[];++a<e;)c&&c[a].run();a=-1,e=s.length}c=null,l=!1,u(t)}}function m(t,e){this.fun=t,this.array=e}function p(){}n.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new m(t,e)),1!==s.length||l||i(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.env={},n.argv=[],n.version="",n.versions={},n.on=p,n.addListener=p,n.once=p,n.off=p,n.removeListener=p,n.removeAllListeners=p,n.emit=p,n.prependListener=p,n.prependOnceListener=p,n.listeners=function(t){return[]},n.binding=function(t){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(t){throw new Error("process.chdir is not supported")},n.umask=function(){return 0};
},{}],"I6BE":[function(require,module,exports) {
var define;
var process = require("process");
var t,e=require("process");!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof t&&t.amd?t(["exports"],n):n((e=e||self).vueNestable={})}(this,function(t){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach(function(e){o(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function s(t){return function(t){if(Array.isArray(t))return l(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||u(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){if(t){if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function c(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=u(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var o=0,r=function(){};return{s:r,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,a=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return s=t.done,t},e:function(t){a=!0,i=t},f:function(){try{s||null==n.return||n.return()}finally{if(a)throw i}}}}var h={},p={methods:{registerNestable:function(t){var e=this._getByGroup(t.group);e.onDragStartListeners.push(t.onDragStart),e.onMouseEnterListeners.push(t.onMouseEnter),e.onMouseMoveListeners.push(t.onMouseMove)},notifyDragStart:function(t,e,n){var o,r=c(this._getByGroup(t).onDragStartListeners);try{for(r.s();!(o=r.n()).done;)(0,o.value)(e,n)}catch(t){r.e(t)}finally{r.f()}},notifyMouseEnter:function(t,e,n,o){var r,i=c(this._getByGroup(t).onMouseEnterListeners);try{for(i.s();!(r=i.n()).done;)(0,r.value)(e,n,o)}catch(t){i.e(t)}finally{i.f()}},notifyMouseMove:function(t,e){var n,o=c(this._getByGroup(t).onMouseMoveListeners);try{for(o.s();!(n=o.n()).done;)(0,n.value)(e)}catch(t){o.e(t)}finally{o.f()}},_getByGroup:function(t){return h[t]||(h[t]={onDragStartListeners:[],onMouseEnterListeners:[],onMouseMoveListeners:[],onDragStart:[],dragItem:null}),h[t]}}};function d(t,e,n,o,r,i,s,a,u,l){"boolean"!=typeof s&&(u=a,a=s,s=!1);const c="function"==typeof n?n.options:n;let h;if(t&&t.render&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0,r&&(c.functional=!0)),o&&(c._scopeId=o),i?(h=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,u(t)),t&&t._registeredComponents&&t._registeredComponents.add(i)},c._ssrRegister=h):e&&(h=s?function(t){e.call(this,l(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,a(t))}),h)if(c.functional){const t=c.render;c.render=function(e,n){return h.call(n),t(e,n)}}else{const t=c.beforeCreate;c.beforeCreate=t?[].concat(t,h):[h]}return n}var f,y=d({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{class:t.itemClasses},[n("div",{staticClass:"nestable-item-content",on:{mouseenter:t.onMouseEnter,mouseleave:t.onMouseLeave,mousemove:t.onMouseMove}},[t._t("default",null,{index:t.index,item:t.item,isChild:t.isChild})],2),t._v(" "),t.hasChildren?n("ol",{staticClass:"nestable-list"},[t._l(t.item[t.options.childrenProp],function(e,o){return[n("NestableItem",{key:e[t.keyProp],attrs:{item:e,index:o,options:t.options,"is-copy":t.isCopy,"is-child":""},scopedSlots:t._u([t._l(Object.keys(t.$scopedSlots),function(e){return{key:e,fn:function(n){return[t._t(e,null,null,n)]}}})],null,!0)})]})],2):t._e()])},staticRenderFns:[]},void 0,{name:"NestableItem",mixins:[p],props:{item:{type:Object,required:!0,default:function(){return{}}},index:{type:Number,required:!1,default:null},isChild:{type:Boolean,required:!1,default:!1},isCopy:{type:Boolean,required:!1,default:!1},options:{type:Object,required:!0,default:function(){return{}}}},inject:["listId","group","keyProp"],data:function(){return{breakPoint:null,moveDown:!1}},computed:{isDragging:function(){var t=this.options.dragItem;return!this.isCopy&&t&&t[this.options.keyProp]===this.item[this.options.keyProp]},hasChildren:function(){return this.item[this.options.childrenProp]&&this.item[this.options.childrenProp].length>0},hasHandle:function(){return!!this.$scopedSlots.handler},normalizedClassProp:function(){var t=this.item[this.options.classProp];return t?Array.isArray(t)?t:("undefined"==typeof a||n(a),[t]):[]},itemClasses:function(){var t=this.isDragging?["is-dragging"]:[];return["nestable-item".concat(this.isCopy?"-copy":""),"nestable-item".concat(this.isCopy?"-copy":"","-").concat(this.item[this.options.keyProp])].concat(t,s(this.normalizedClassProp))}},methods:{onMouseEnter:function(t){if(this.options.dragItem){if(!t.movementY)return this.sendNotification(t);this.moveDown=t.movementY>0,this.breakPoint=t.target.getBoundingClientRect().height/2}},onMouseLeave:function(){this.breakPoint=null},onMouseMove:function(t){if(this.breakPoint){var e=t.offsetY-this.breakPoint;this.moveDown&&e<this.breakPoint/4||!this.moveDown&&e>-this.breakPoint/4||this.sendNotification(t)}},sendNotification:function(t){this.breakPoint=null;var e=this.item||this.$parent.item;this.notifyMouseEnter(this.group,t,this.listId,e)}}},void 0,!1,void 0,!1,void 0,void 0,void 0),m=d({render:function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("div",{staticClass:"nestable-list-empty",on:{mouseenter:this.onMouseEnter}},[this._t("default")],2)])},staticRenderFns:[]},void 0,{name:"Placeholder",mixins:[p],props:{index:{type:Number,required:!1,default:null},options:{type:Object,required:!1,default:function(){return{}}}},inject:["listId","group"],computed:{isDragging:function(){return this.options.dragItem}},methods:{onMouseEnter:function(t){this.options.dragItem&&this.notifyMouseEnter(this.group,t,this.listId,null)}}},void 0,!1,void 0,!1,void 0,void 0,void 0),g={methods:{getPathById:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value,o=[];return n.every(function(n,r){if(n[e.keyProp]===t)o.push(r);else if(n[e.childrenProp]){var i=e.getPathById(t,n[e.childrenProp]);i.length&&(o=o.concat(r).concat(i))}return 0===o.length}),o},getItemByPath:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value,o=null;return t.forEach(function(t){var r=o&&o[e.childrenProp]?o[e.childrenProp]:n;o=r[t]}),o},getItemDepth:function(t){var e=1;if(t[this.childrenProp]&&t[this.childrenProp].length>0){var n=t[this.childrenProp].map(this.getItemDepth);e+=Math.max.apply(Math,s(n))}return e},getSplicePath:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={},r=e.numToRemove||0,i=e.itemsToInsert||[],a=t.length-1,u=n;return t.forEach(function(t,n){if(n===a)u.$splice=[[t,r].concat(s(i))];else{var l={};u[t]=o({},e.childrenProp,l),u=l}}),n},getRealNextPath:function(t,e){var n=t.length-1,o=e.length-1;if(t.length<e.length){var r=!1;return e.map(function(i,s){return r?s===o?i+1:i:"number"!=typeof t[s]?i:e[s]>t[s]&&s===n?(r=!0,i-1):i})}if(t.length===e.length&&e[o]>t[o]){var i=this.getItemByPath(e);if(i[this.childrenProp]&&i[this.childrenProp].length&&!this.isCollapsed(i))return e.slice(0,-1).concat(e[o]-1).concat(0)}return e}}},v=function(t,n){return function(t,n){function o(t){return"object"!=typeof t||"toString"in t?t:Object.prototype.toString.call(t).slice(8,-1)}Object.defineProperty(n,"__esModule",{value:!0});var r="object"==typeof e&&!0;function i(t,e){if(!t){if(r)throw new Error("Invariant failed");throw new Error(e())}}n.invariant=i;var s=Object.prototype.hasOwnProperty,a=Array.prototype.splice,u=Object.prototype.toString;function l(t){return u.call(t).slice(8,-1)}var c=Object.assign||function(t,e){return h(e).forEach(function(n){s.call(e,n)&&(t[n]=e[n])}),t},h="function"==typeof Object.getOwnPropertySymbols?function(t){return Object.keys(t).concat(Object.getOwnPropertySymbols(t))}:function(t){return Object.keys(t)};function p(t){return Array.isArray(t)?c(t.constructor(t.length),t):"Map"===l(t)?new Map(t):"Set"===l(t)?new Set(t):t&&"object"==typeof t?c(Object.create(Object.getPrototypeOf(t)),t):t}var d=function(){function t(){this.commands=c({},f),this.update=this.update.bind(this),this.update.extend=this.extend=this.extend.bind(this),this.update.isEquals=function(t,e){return t===e},this.update.newContext=function(){return(new t).update}}return Object.defineProperty(t.prototype,"isEquals",{get:function(){return this.update.isEquals},set:function(t){this.update.isEquals=t},enumerable:!0,configurable:!0}),t.prototype.extend=function(t,e){this.commands[t]=e},t.prototype.update=function(t,e){var n=this,o="function"==typeof e?{$apply:e}:e;Array.isArray(t)&&Array.isArray(o)||i(!Array.isArray(o),function(){return"update(): You provided an invalid spec to update(). The spec may not contain an array except as the value of $set, $push, $unshift, $splice or any custom command allowing an array value."}),i("object"==typeof o&&null!==o,function(){return"update(): You provided an invalid spec to update(). The spec and every included key path must be plain objects containing one of the following commands: "+Object.keys(n.commands).join(", ")+"."});var r=t;return h(o).forEach(function(e){if(s.call(n.commands,e)){var i=t===r;r=n.commands[e](o[e],r,o,t),i&&n.isEquals(r,t)&&(r=t)}else{var a="Map"===l(t)?n.update(t.get(e),o[e]):n.update(t[e],o[e]),u="Map"===l(r)?r.get(e):r[e];n.isEquals(a,u)&&(void 0!==a||s.call(t,e))||(r===t&&(r=p(t)),"Map"===l(r)?r.set(e,a):r[e]=a)}}),r},t}();n.Context=d;var f={$push:function(t,e,n){return m(e,n,"$push"),t.length?e.concat(t):e},$unshift:function(t,e,n){return m(e,n,"$unshift"),t.length?t.concat(e):e},$splice:function(t,e,n,r){return function(t,e){i(Array.isArray(t),function(){return"Expected $splice target to be an array; got "+o(t)}),v(e.$splice)}(e,n),t.forEach(function(t){v(t),e===r&&t.length&&(e=p(r)),a.apply(e,t)}),e},$set:function(t,e,n){return function(t){i(1===Object.keys(t).length,function(){return"Cannot have more than one key in an object with $set"})}(n),t},$toggle:function(t,e){g(t,"$toggle");var n=t.length?p(e):e;return t.forEach(function(t){n[t]=!e[t]}),n},$unset:function(t,e,n,o){return g(t,"$unset"),t.forEach(function(t){Object.hasOwnProperty.call(e,t)&&(e===o&&(e=p(o)),delete e[t])}),e},$add:function(t,e,n,o){return b(e,"$add"),g(t,"$add"),"Map"===l(e)?t.forEach(function(t){var n=t[0],r=t[1];e===o&&e.get(n)!==r&&(e=p(o)),e.set(n,r)}):t.forEach(function(t){e!==o||e.has(t)||(e=p(o)),e.add(t)}),e},$remove:function(t,e,n,o){return b(e,"$remove"),g(t,"$remove"),t.forEach(function(t){e===o&&e.has(t)&&(e=p(o)),e.delete(t)}),e},$merge:function(t,e,n,r){var s,a;return s=e,i((a=t)&&"object"==typeof a,function(){return"update(): $merge expects a spec of type 'object'; got "+o(a)}),i(s&&"object"==typeof s,function(){return"update(): $merge expects a target of type 'object'; got "+o(s)}),h(t).forEach(function(n){t[n]!==e[n]&&(e===r&&(e=p(r)),e[n]=t[n])}),e},$apply:function(t,e){var n;return i("function"==typeof(n=t),function(){return"update(): expected spec of $apply to be a function; got "+o(n)+"."}),t(e)}},y=new d;function m(t,e,n){i(Array.isArray(t),function(){return"update(): expected target of "+o(n)+" to be an array; got "+o(t)+"."}),g(e[n],n)}function g(t,e){i(Array.isArray(t),function(){return"update(): expected spec of "+o(e)+" to be an array; got "+o(t)+". Did you forget to wrap your parameter in an array?"})}function v(t){i(Array.isArray(t),function(){return"update(): expected spec of $splice to be an array of arrays; got "+o(t)+". Did you forget to wrap your parameters in an array?"})}function b(t,e){var n=l(t);i("Map"===n||"Set"===n,function(){return"update(): "+o(e)+" expects a target of type Set or Map; got "+o(n)})}n.isEquals=y.update.isEquals,n.extend=y.extend,n.default=y.update,n.default.default=t.exports=c(n.default,n)}(n={exports:{}},n.exports),n.exports}(),b=(f=v)&&f.__esModule&&Object.prototype.hasOwnProperty.call(f,"default")?f.default:f,P=(v.invariant,v.Context,v.isEquals,v.extend,d({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["nestable","nestable-"+t.group,t.rtl?"nestable-rtl":""]},[n("ol",{staticClass:"nestable-list nestable-group"},[t.listIsEmpty?n("Placeholder",{attrs:{options:t.itemOptions}},[t._t("placeholder",[t._v("\n        No content\n      ")])],2):t._e(),t._v(" "),t._l(t.value,function(e,o){return[n("NestableItem",{key:e[t.keyProp],attrs:{index:o,item:e,options:t.itemOptions},scopedSlots:t._u([t._l(Object.keys(t.$scopedSlots),function(e){return{key:e,fn:function(n){return[t._t(e,null,null,n)]}}})],null,!0)})]})],2),t._v(" "),t.dragItem?[n("div",{staticClass:"nestable-drag-layer"},[n("ol",{staticClass:"nestable-list",style:t.listStyles},[n("NestableItem",{attrs:{item:t.dragItem,options:t.itemOptions,"is-copy":!0},scopedSlots:t._u([t._l(Object.keys(t.$scopedSlots),function(e){return{key:e,fn:function(n){return[t._t(e,null,null,n)]}}})],null,!0)})],1)])]:t._e()],2)},staticRenderFns:[]},void 0,{name:"VueNestable",components:{NestableItem:y,Placeholder:m},mixins:[g,p,{methods:{hook:function(t,e){if(!this.hooks[t])return!0;var n=this.hooks[t](e);return n||void 0===n}}}],props:{value:{type:Array,required:!0,default:function(){return[]}},threshold:{type:Number,required:!1,default:30},maxDepth:{type:Number,required:!1,default:10},keyProp:{type:String,required:!1,default:"id"},classProp:{type:String,required:!1,default:null},group:{type:[String,Number],required:!1,default:function(){return Math.random().toString(36).slice(2)}},childrenProp:{type:String,required:!1,default:"children"},collapsed:{type:Boolean,required:!1,default:!1},hooks:{type:Object,required:!1,default:function(){return{}}},rtl:{type:Boolean,required:!1,default:!1}},provide:function(){return{listId:this.listId,group:this.group,keyProp:this.keyProp,onDragEnd:this.onDragEnd}},data:function(){return{itemsOld:null,dragItem:null,mouse:{last:{x:0},shift:{x:0}},el:null,elCopyStyles:null,isDirty:!1,collapsedGroups:[],listId:Math.random().toString(36).slice(2)}},computed:{listIsEmpty:function(){return 0===this.value.length},itemOptions:function(){return{dragItem:this.dragItem,keyProp:this.keyProp,classProp:this.classProp,childrenProp:this.childrenProp}},listStyles:function(){var t=document.querySelector(".nestable-"+this.group+" .nestable-item-"+this.dragItem[this.keyProp]),e={};return t&&(e.width="".concat(t.clientWidth,"px")),this.elCopyStyles&&(e=i(i({},e),this.elCopyStyles)),e}},created:function(){var t=function t(e,n){return e.map(function(e){return i(i({},e),{},o({},n,e[n]?t(e[n],n):[]))})}(this.value,this.childrenProp);this.$emit("input",t),this.isDirty=!1,this.registerNestable(this)},beforeDestroy:function(){this.stopTrackMouse()},methods:{startTrackMouse:function(){document.addEventListener("mousemove",this.onMouseMove),document.addEventListener("mouseup",this.onDragEnd),document.addEventListener("touchend",this.onDragEnd),document.addEventListener("touchcancel",this.onDragEnd),document.addEventListener("keydown",this.onKeyDown)},stopTrackMouse:function(){document.removeEventListener("mousemove",this.onMouseMove),document.removeEventListener("mouseup",this.onDragEnd),document.removeEventListener("touchend",this.onDragEnd),document.removeEventListener("touchcancel",this.onDragEnd),document.removeEventListener("keydown",this.onKeyDown),this.elCopyStyles=null},onDragStart:function(t,e){var n=this;t&&(t.preventDefault(),t.stopPropagation()),this.el=(".nestable-item",t.target.closest(".nestable-item")),this.startTrackMouse(),this.dragItem=e,this.itemsOld=this.value,this.$nextTick(function(){n.onMouseMove(t)})},onDragEnd:function(t,e){t&&t.preventDefault(),this.stopTrackMouse(),this.el=null,e?this.dragRevert():this.dragApply()},onKeyDown:function(t){27===t.which&&this.onDragEnd(null,!0)},getXandYFromEvent:function(t){var e=t.clientX,n=t.clientY,o=t.targetTouches;if(o){var r=o[0];e=r.clientX,n=r.clientY;var i=new Event("mouseenter"),s=document.elementFromPoint(e,n),a=s&&(s.closest(".nestable-item-content")||s.closest(".nestable-list-empty"));a&&a.dispatchEvent(i)}return{clientX:e,clientY:n}},onMouseMove:function(t){t&&t.preventDefault();var e=this.getXandYFromEvent(t),n=e.clientX,o=e.clientY;0===this.mouse.last.x&&(this.mouse.last.x=n);var r={transform:"translate("+n+"px, "+o+"px)"},s=document.querySelector(".nestable-"+this.group+" .nestable-drag-layer");if(s){var a,u=s.getBoundingClientRect(),l=u.top,c=u.left,h=document.querySelector(".nestable-"+this.group+" .nestable-drag-layer > .nestable-list");if(this.elCopyStyles){if(this.elCopyStyles=i(i({},this.elCopyStyles),r),h)for(var p in r)Object.prototype.hasOwnProperty.call(r,p)&&(h.style[p]=r[p]);var d=this.rtl?this.mouse.last.x-n:n-this.mouse.last.x;d>=0&&this.mouse.shift.x>=0||d<=0&&this.mouse.shift.x<=0?this.mouse.shift.x+=d:this.mouse.shift.x=0,this.mouse.last.x=n,Math.abs(this.mouse.shift.x)>this.threshold&&(this.mouse.shift.x>0?this.tryIncreaseDepth(this.dragItem):this.tryDecreaseDepth(this.dragItem),this.mouse.shift.x=0)}else{var f=(a=this.el.getBoundingClientRect(),{top:Math.round(a.top),left:Math.round(a.left)});this.elCopyStyles=i({marginTop:"".concat(f.top-o-l,"px"),marginLeft:"".concat(f.left-n-c,"px")},r)}}},moveItem:function(t){var e=t.dragItem,n=t.pathFrom,o=t.pathTo,r=this.getRealNextPath(n,o),i=this.getSplicePath(n,{numToRemove:1,childrenProp:this.childrenProp}),s=this.getSplicePath(r,{numToRemove:0,itemsToInsert:[e],childrenProp:this.childrenProp});if(this.hook("beforeMove",{dragItem:e,pathFrom:n,pathTo:r})){var a=this.value;a=b(a,i),a=b(a,s),this.isDirty=!0,this.pathTo=r,this.$emit("input",a)}},tryIncreaseDepth:function(t){var e=this.getPathById(t[this.keyProp]),n=e[e.length-1],o=e.length+this.getItemDepth(t);if(n>0&&o<=this.maxDepth){var r=this.getItemByPath(e.slice(0,-1).concat(n-1));if(r[this.childrenProp]&&(!r[this.childrenProp].length||!this.isCollapsed(r))){var i=e.slice(0,-1).concat(n-1).concat(r[this.childrenProp].length);this.moveItem({dragItem:t,pathFrom:e,pathTo:i})}}},tryDecreaseDepth:function(t){var e=this.getPathById(t[this.keyProp]),n=e[e.length-1];if(e.length>1&&n+1===this.getItemByPath(e.slice(0,-1))[this.childrenProp].length){var o=e.slice(0,-1);o[o.length-1]+=1,this.moveItem({dragItem:t,pathFrom:e,pathTo:o})}},onMouseEnter:function(t,e,n){t&&(t.preventDefault(),t.stopPropagation());var o=this.dragItem;if(o&&(null===n||o[this.keyProp]!==n[this.keyProp])){var r,i=this.getPathById(o[this.keyProp]);if(!(e!==this.listId&&0===i.length||(r=null===n?i.length>0?[]:[0]:this.getPathById(n[this.keyProp]),this.getRealNextPath(i,r).length+(this.getItemDepth(o)-1)>this.maxDepth))){var s={};if(this.collapsed&&i.length>1){var a=this.getItemByPath(i.slice(0,-1));1===a[this.childrenProp].length&&(s=this.onToggleCollapse(a,!0))}this.moveItem({dragItem:o,pathFrom:i,pathTo:r},s)}}},isCollapsed:function(t){return!!(this.collapsedGroups.indexOf(t[this.keyProp])>-1^this.collapsed)},dragApply:function(){this.$emit("change",this.dragItem,{items:this.value,pathTo:this.pathTo}),this.pathTo=null,this.itemsOld=null,this.dragItem=null,this.isDirty=!1},dragRevert:function(){this.$emit("input",this.itemsOld),this.pathTo=null,this.itemsOld=null,this.dragItem=null,this.isDirty=!1}}},void 0,!1,void 0,!1,void 0,void 0,void 0)),E=d({render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"nestable-handle",attrs:{draggable:""},on:{dragstart:this.dragstart,touchstart:this.dragstart,touchend:this.touchend,touchmove:this.touchmove}},[this._t("default")],2)},staticRenderFns:[]},void 0,{name:"VueNestableHandle",mixins:[p],props:{item:{type:Object,required:!1,default:function(){return{}}}},inject:["group","onDragEnd"],methods:{dragstart:function(t){var e=this.item||this.$parent.item;this.notifyDragStart(this.group,t,e)},touchend:function(t){this.onDragEnd(t)},touchmove:function(t){this.notifyMouseMove(this.group,t)}}},void 0,!1,void 0,!1,void 0,void 0,void 0),I={install:function(t,e){t.component("VueNestable",P),t.component("VueNestableHandle",E)}};t.VueNestable=P,t.VueNestableHandle=E,t.default=I,Object.defineProperty(t,"__esModule",{value:!0})});
},{"process":"DNnH"}],"buLr":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e={props:{item:Object},methods:{item_action:function(e){"edit"===e.type&&(this.active=!this.active),"remove"===e.type&&this.$emit("nav_remove",e),"duplicate"===e.type&&this.field_duplicate(e)}}};exports.default=e;
(function(){var t=exports.default||module.exports;"function"==typeof t&&(t=t.options),Object.assign(t,{render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"k-form-input"},[s("div",{staticClass:"k-form-inner"},[this._t("text"),this._v(" "),s("div",{staticClass:"k-form-actions"},[this._t("fetch"),this._v(" "),this._t("add")],2)],2)])},staticRenderFns:[],_compiled:!0,_scopeId:"data-v-1df260",functional:void 0});})();
},{}],"rIBQ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e={props:{item:Object,navigation:Array},data:function(){return{active:!1}},methods:{item_action:function(e){var t=this;if("edit"===e.type&&(this.active=!this.active),"remove"===e.type)return console.log("removing"),console.log(e.haystack),console.log(e.needle),this.navigation=e.haystack.filter(function(t){return t.uuid!==e.needle}).filter(function(i){if(i.children.length)return i.children=t.item_action({type:"remove",needle:e.needle,haystack:i.children}),i})}}};exports.default=e;
(function(){var t=exports.default||module.exports;"function"==typeof t&&(t=t.options),Object.assign(t,{render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"k-form-input"},[i("div",{staticClass:"k-form-actions"},[t._t("handle")],2),t._v(" "),i("div",{staticClass:"k-form-inner"},[i("k-list-item",{attrs:{text:t.item.text,options:[{icon:"add",text:t.active?"Close Field":"Edit Field",click:{type:"edit",id:t.item.uuid}},{icon:"trash",text:"Remove Field",click:{type:"remove",needle:t.item.uuid,haystack:t.navigation}}]},on:{action:t.item_action}}),t._v(" "),t.active?i("div",{ref:"config",staticClass:"k-form-config"},[i("div",{ref:"config",staticClass:"k-form-group"},[i("k-grid",[i("k-column",{attrs:{width:"1/2"}},[t._t("dropdown_column_one")],2),t._v(" "),i("k-column",{attrs:{width:"1/2"}},[t._t("dropdown_column_two")],2)],1)],1),t._v(" "),i("div",{staticClass:"k-form-footer"},[i("k-button",{attrs:{icon:"remove"},on:{click:function(e){return t.item_action({type:"edit"})}}},[t._v(" Close ")]),t._v(" "),i("k-button",{attrs:{icon:"trash",theme:"negative"},on:{click:function(e){return t.item_action({type:"remove",haystack:t.navigation,needle:t.item.uuid})}}},[t._v(" Remove ")])],1)]):t._e()],1)])},staticRenderFns:[],_compiled:!0,_scopeId:"data-v-d4a4d5",functional:void 0});})();
},{}],"LwU1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e={props:{modal:Object},methods:{modal_close:function(){this.$emit("modal_close")},modal_submit:function(){this.$emit("modal_submit")}}};exports.default=e;
(function(){var t=exports.default||module.exports;"function"==typeof t&&(t=t.options),Object.assign(t,{render:function(){var t=this.$createElement;return(this._self._c||t)("k-dialog",{staticClass:"k-pages-dialog",attrs:{size:"medium",visible:this.modal},on:{cancel:this.modal_close,submit:this.modal_submit}},[this._t("modal_header"),this._v(" "),this._t("modal_body")],2)},staticRenderFns:[],_compiled:!0,_scopeId:"data-v-aa5f31",functional:void 0});})();
},{}],"hWNS":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=o(require("vue-nestable")),e=o(require("./components/lists/modal.vue")),i=o(require("./components/lists/default.vue")),n=o(require("./components/modal/default.vue"));function o(t){return t&&t.__esModule?t:{default:t}}var s={props:{help:String,value:Array,label:String,levels:Number,disabled:Boolean,required:Boolean,endpoints:Object},components:{listModal:e.default,listDefault:i.default,modalDefault:n.default},data:function(){return{navigation:[],modal:{type:"",status:!1},query:{content:[],breadcrumbs:[]},item:{url:"",text:"",popup:!1}}},watch:{navigation:{handler:function(){this.$emit("input",this.navigation)},deep:!0}},methods:{modal_close:function(){this.modal={type:"",status:!1}},modal_open:function(t){this.modal={type:t,status:!0}},modal_submit:function(){"custom"===this.modal.type&&this.modal_add(this.item),this.modal={type:"",status:!1}},modal_add:function(t){this.navigation.push(JSON.parse(JSON.stringify(Object.assign(t,{uuid:Math.random().toString(36).substring(2,15)}))))},modal_fetch:function(t){var e=this;this.$api.get(this.endpoints.field+"/listings/"+t).then(function(t){e.query=t}).catch(function(t){console.log(t)})}},computed:{computed_navigation:function(){return this.navigation},computed_levels:function(){return this.levels?this.levels:10},computed_breadcrumbs:function(){return this.query.breadcrumbs.length>=2?this.query.breadcrumbs[this.query.breadcrumbs.length-2].id:"site"}},beforeCreate:function(){window.panel.app.$root.constructor.use(t.default)},mounted:function(){this.navigation=this.value,this.modal_fetch("site")}};exports.default=s;
(function(){var t=exports.default||module.exports;"function"==typeof t&&(t=t.options),Object.assign(t,{render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("k-field",{staticClass:"k-form-field navigation-field",attrs:{help:t.help,label:t.label,levels:t.levels,disabled:t.disabled,required:t.required},scopedSlots:t._u([{key:"options",fn:function(){return[n("k-dropdown",[n("k-button",{attrs:{icon:"add"},on:{click:function(e){return t.$refs.menu.toggle()}}},[t._v(" Add ")]),t._v(" "),n("k-dropdown-content",{ref:"menu",attrs:{align:"right"}},[n("k-dropdown-item",{on:{click:function(e){return t.modal_open("default")}}},[n("span",{staticClass:"k-menu-title"},[t._v(" Kirby Link ")]),t._v(" "),n("p",{staticClass:"k-menu-subtitle"},[t._v(" Adds a Kirby page to the menu ")]),n("p")]),t._v(" "),n("k-dropdown-item",{on:{click:function(e){return t.modal_open("custom")}}},[n("span",{staticClass:"k-menu-title"},[t._v(" Custom Link ")]),t._v(" "),n("p",{staticClass:"k-menu-subtitle"},[t._v(" Adds a custom link to the menu, useful external urls etc ")]),n("p")])],1)],1)]},proxy:!0},{key:"help",fn:function(){return[n("k-grid",[n("k-column",{attrs:{width:"1/2"}},[t.help?n("k-text",{staticClass:"k-field-help",attrs:{theme:"help"},domProps:{innerHTML:t._s(t.help)}}):t._e()],1),t._v(" "),n("k-column",{attrs:{width:"1/2"}},[n("k-text",{staticClass:"k-field-depth k-field-help",attrs:{theme:"help"}},[t._v(" Maximum allowed depth: "),n("strong",[t._v(t._s(t.computed_levels))])])],1)],1)]},proxy:!0}])},[t._v(" "),t.navigation.length?n("vue-nestable",{attrs:{keyProp:"uuid",childrenProp:"children",maxDepth:t.computed_levels},scopedSlots:t._u([{key:"default",fn:function(e){var l=e.item;return e.index,[n("listDefault",{attrs:{item:l,navigation:t.navigation},scopedSlots:t._u([{key:"handle",fn:function(){return[n("VueNestableHandle",{attrs:{item:l}},[n("k-button",{staticClass:"input-handle",attrs:{icon:"sort",tooltip:"Sort Items"}})],1)]},proxy:!0},{key:"dropdown_column_one",fn:function(){return[n("k-text-field",{attrs:{label:"Link Text"},model:{value:l.text,callback:function(e){t.$set(l,"text",e)},expression:"item.text"}}),t._v(" "),n("k-text-field",{attrs:{label:"Link Title"},model:{value:l.title,callback:function(e){t.$set(l,"title",e)},expression:"item.title"}}),t._v(" "),n("k-toggle-field",{attrs:{label:"Popup"},model:{value:l.popup,callback:function(e){t.$set(l,"popup",e)},expression:"item.popup"}})]},proxy:!0},{key:"dropdown_column_two",fn:function(){return[n("k-text-field",{attrs:{label:"Link ID"},model:{value:l.id,callback:function(e){t.$set(l,"id",e)},expression:"item.id"}}),t._v(" "),n("k-text-field",{attrs:{label:"Link Url"},model:{value:l.url,callback:function(e){t.$set(l,"url",e)},expression:"item.url"}})]},proxy:!0}],null,!0)})]}}],null,!1,2764682869),model:{value:t.navigation,callback:function(e){t.navigation=e},expression:"navigation"}}):n("k-empty",{attrs:{icon:"page"}},[t._v(" No menu items yet ")]),t._v(" "),t.modal.status?n("modalDefault",{attrs:{modal:t.modal.status},on:{modal_close:t.modal_close,modal_submit:t.modal_submit},scopedSlots:t._u([{key:"modal_header",fn:function(){return[n("header",{staticClass:"k-pages-dialog-navbar"},["default"===t.modal.type?[t.query.breadcrumbs.length>0?n("k-button",{attrs:{icon:"angle-left"},on:{click:function(e){return t.modal_fetch(t.computed_breadcrumbs)}}},[t._v(" Back ")]):t._e(),t._v(" "),n("k-headline",[t._v(" Add Pages ")])]:[n("k-headline",[t._v(" Add Custom Link ")])]],2)]},proxy:!0},{key:"modal_body",fn:function(){return["default"===t.modal.type?[n("k-list",[t._l(t.query.content,function(e,l){return n("listModal",{key:e.uuid,attrs:{item:e},scopedSlots:t._u([{key:"text",fn:function(){return[n("span",{staticClass:"k-menu-text"},[t._v(" "+t._s(e.text)+" ")])]},proxy:!0},{key:"fetch",fn:function(){return[e.count>0?n("k-button",{attrs:{icon:"angle-right"},on:{click:function(n){return t.modal_fetch(e.id)}}}):t._e()]},proxy:!0},{key:"add",fn:function(){return[n("k-button",{attrs:{icon:"add"},on:{click:function(n){return t.modal_add(e)}}})]},proxy:!0}],null,!0)})}),t._v(" "),n("k-list")],2)]:[n("k-grid",[n("k-column",{attrs:{width:"2/2"}},[n("k-text-field",{attrs:{label:"Link Text"},model:{value:t.item.text,callback:function(e){t.$set(t.item,"text",e)},expression:"item.text"}}),t._v(" "),n("k-text-field",{attrs:{label:"Link Url"},model:{value:t.item.url,callback:function(e){t.$set(t.item,"url",e)},expression:"item.url"}}),t._v(" "),n("k-toggle-field",{attrs:{label:"Popup"},model:{value:t.item.popup,callback:function(e){t.$set(t.item,"popup",e)},expression:"item.popup"}})],1)],1)]]},proxy:!0}],null,!1,1490159470)}):t._e()],1)},staticRenderFns:[],_compiled:!0,_scopeId:null,functional:void 0});})();
},{"vue-nestable":"I6BE","./components/lists/modal.vue":"buLr","./components/lists/default.vue":"rIBQ","./components/modal/default.vue":"LwU1"}],"Focm":[function(require,module,exports) {
"use strict";var e=a(require("./app.vue"));function a(e){return e&&e.__esModule?e:{default:e}}panel.plugin("beluga/navigation",{fields:{navigation:e.default}});
},{"./app.vue":"hWNS"}]},{},["Focm"], null)