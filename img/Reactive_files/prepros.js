
window.__PreprosConfig__ = {"projectPath":"/Users/MacbookPro/Documents/work/HTML/ReactiveWeb","webSocketServerPort":36642};
!function(n){var i={};function o(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=2)}([function(e,t,n){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function o(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}e.exports=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.disposed=!1,this.disposalAction=e}return o(t,null,[{key:"isDisposable",value:function(e){return"function"==typeof(null!=e?e.dispose:void 0)}}]),o(t,[{key:"dispose",value:function(){this.disposed||(this.disposed=!0,"function"==typeof this.disposalAction&&this.disposalAction(),this.disposalAction=null)}}]),t}()},function(e,t,n){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var o;function a(e){if(null==o&&(o=n(0)),!o.isDisposable(e))throw new TypeError("Arguments to CompositeDisposable.add must have a .dispose() method")}e.exports=function(){function r(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),this.disposed=!1,this.disposables=new Set;var e=!0,t=!1,n=void 0;try{for(var i,o=arguments[Symbol.iterator]();!(e=(i=o.next()).done);e=!0){var s=i.value;this.add(s)}}catch(e){t=!0,n=e}finally{try{e||null==o.return||o.return()}finally{if(t)throw n}}}var e,t,n;return e=r,(t=[{key:"dispose",value:function(){this.disposed||(this.disposed=!0,this.disposables.forEach(function(e){return e.dispose()}),this.disposables=null)}},{key:"add",value:function(){if(!this.disposed){var e=!0,t=!1,n=void 0;try{for(var i,o=arguments[Symbol.iterator]();!(e=(i=o.next()).done);e=!0){var s=i.value;a(s),this.disposables.add(s)}}catch(e){t=!0,n=e}finally{try{e||null==o.return||o.return()}finally{if(t)throw n}}}}},{key:"remove",value:function(e){this.disposed||this.disposables.delete(e)}},{key:"delete",value:function(e){this.remove(e)}},{key:"clear",value:function(){this.disposed||this.disposables.clear()}}])&&i(e.prototype,t),n&&i(e,n),r}()},function(e,t,n){"use strict";var i,s=function(){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}(),r=n(3),o=n(5),a=(i=o)&&i.__esModule?i:{default:i};new(function(){function o(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(window.__Prepros__=this).emitter=new r.Emitter,this.ready=!1,this.browserId=Math.random().toString();var e=window.__PreprosConfig__,t=e.webSocketServerPort,n=e.projectPath,i=document.querySelector("script[data-prepros-origin-host]").dataset.preprosOriginHost;this.config={webSocketServerPort:t,projectPath:n,originHostName:i},this.onMessage=this.onMessage.bind(this),this.onOpen=this.onOpen.bind(this),this.onClose=this.onClose.bind(this),this.initServerConnection()}return s(o,[{key:"onMessage",value:function(e){var t=JSON.parse(e.data),n=t.browserId,i=t.projectPath;i&&(0,a.default)(i)!==(0,a.default)(this.config.projectPath)||n!==this.browserId&&this.emitter.emit("event",t)}},{key:"onOpen",value:function(){clearInterval(this.connectionInterval),this.connectionInterval=null,this.webSocketConnection.removeEventListener("open",this.onOpen),this.ready=!0,this.emitter.emit("did-connect"),this.emitter.emit("ready")}},{key:"onClose",value:function(){var e=this;this.ready=!1,this.emitter.emit("did-disconnect"),this.unbindEvents(),this.connectionInterval||(this.connectionInterval=setInterval(function(){e.connect(),e.bindEvents()},1e3))}},{key:"bindEvents",value:function(){this.webSocketConnection.addEventListener("open",this.onOpen),this.webSocketConnection.addEventListener("close",this.onClose),this.webSocketConnection.addEventListener("message",this.onMessage)}},{key:"unbindEvents",value:function(){this.webSocketConnection.removeEventListener("open",this.onOpen),this.webSocketConnection.removeEventListener("close",this.onClose),this.webSocketConnection.removeEventListener("message",this.onMessage)}},{key:"connect",value:function(){this.webSocketConnection=new WebSocket("ws://"+this.config.originHostName+":"+this.config.webSocketServerPort)}},{key:"initServerConnection",value:function(){this.connect(),this.bindEvents()}},{key:"onWebSocketEvent",value:function(t,n){return this.emitter.on("event",function(e){e.eventName===t&&n(e)})}},{key:"sendWebSocketEvent",value:function(e,t){var n=JSON.stringify({eventName:e,data:t,browserId:this.browserId,projectPath:this.config.projectPath});this.webSocketConnection.send(n)}},{key:"onDidConnect",value:function(e){return this.emitter.on("did-connect",e)}},{key:"onDidDisconnect",value:function(e){return this.emitter.on("did-disconnect",e)}},{key:"onReady",value:function(e){if(this.ready)setTimeout(function(){return e()},0);else var t=this.emitter.on("ready",function(){t.dispose(),e()})}}]),o}())},function(e,t,n){"use strict";t.Emitter=n(4),t.Disposable=n(0),t.CompositeDisposable=n(1)},function(e,t,n){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function o(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}var s=n(0),r=n(1),a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.disposed=!1,this.clear()}return o(e,null,[{key:"onEventHandlerException",value:function(e){var t=this;return 0===this.exceptionHandlers.length&&(this.dispatch=this.exceptionHandlingDispatch),this.exceptionHandlers.push(e),new s(function(){if(t.exceptionHandlers.splice(t.exceptionHandlers.indexOf(e),1),0===t.exceptionHandlers.length)return t.dispatch=t.simpleDispatch})}},{key:"simpleDispatch",value:function(e,t){return e(t)}},{key:"exceptionHandlingDispatch",value:function(e,t){try{return e(t)}catch(t){return this.exceptionHandlers.map(function(e){return e(t)})}}}]),o(e,[{key:"clear",value:function(){null!=this.subscriptions&&this.subscriptions.dispose(),this.subscriptions=new r,this.handlersByEventName={}}},{key:"dispose",value:function(){this.subscriptions.dispose(),this.handlersByEventName=null,this.disposed=!0}},{key:"on",value:function(e,t,n){var i=this;if(null==n&&(n=!1),this.disposed)throw new Error("Emitter has been disposed");if("function"!=typeof t)throw new Error("Handler must be a function");this.handlersByEventName[e]?n?this.handlersByEventName[e].unshift(t):this.handlersByEventName[e].push(t):this.handlersByEventName[e]=[t];var o=new s(function(){return i.subscriptions.remove(o),i.off(e,t)});return this.subscriptions.add(o),o}},{key:"once",value:function(e,t,n){null==n&&(n=!1);var i=this.on(e,function(e){return i.dispose(),t(e)},n);return i}},{key:"preempt",value:function(e,t){return this.on(e,t,!0)}},{key:"off",value:function(e,t){if(!this.disposed){var n=this.handlersByEventName[e];if(n){var i=n.indexOf(t);0<=i&&n.splice(i,1),0===n.length&&delete this.handlersByEventName[e]}}}},{key:"emit",value:function(e,t){var n=this.handlersByEventName&&this.handlersByEventName[e];if(n)for(var i=n.slice(),o=0;o<i.length;o++)this.constructor.dispatch(i[o],t)}},{key:"emitAsync",value:function(e,t){var n=this,i=this.handlersByEventName&&this.handlersByEventName[e];if(i){var o=i.map(function(e){return n.constructor.dispatch(e,t)});return Promise.all(o).then(function(){})}return Promise.resolve()}},{key:"getEventNames",value:function(){return Object.keys(this.handlersByEventName)}},{key:"listenerCountForEventName",value:function(e){var t=this.handlersByEventName[e];return null==t?0:t.length}},{key:"getTotalListenerCount",value:function(){for(var e=0,t=Object.keys(this.handlersByEventName),n=0;n<t.length;n++){var i=t[n];e+=this.handlersByEventName[i].length}return e}}]),e}();a.dispatch=a.simpleDispatch,a.exceptionHandlers=[],e.exports=a},function(e,t,n){"use strict";e.exports=function(e){var t=/^\\\\\?\\/.test(e),n=/[^\x00-\x80]+/.test(e);return t||n?e:e.replace(/\\/g,"/")}}]);;
window.__PreprosBrowserSyncConfig__ = {"enable":false,"clicks":true,"forms":true,"scroll":true};
!function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}();var o=function(){function f(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),this.supportsCustomEvents=f.checkCustomEventSupport()}return r(f,[{key:"normalize",value:function(e){var t={},n=!0,r=!1,o=void 0;try{for(var i,a=f.syncProps[Symbol.iterator]();!(n=(i=a.next()).done);n=!0){var l=i.value;t[l]=e[l]}}catch(e){r=!0,o=e}finally{try{!n&&a.return&&a.return()}finally{if(r)throw o}}if(t.target=e.target||e.srcElement||document,t.which=t.charCode||t.keyCode,null!==e.clientX){var u=document.documentElement,c=u.body,s=u||c;s&&(t.pageX=e.clientX+(s.scrollLeft||0)-(s.clientLeft||0),t.pageY=e.clientY+(s.scrollTop||0)-(s.clientTop||0))}return t.targetPath=this.getPathFromElement(t.target),t.name=e.type,t}},{key:"dispatch",value:function(e,t){t.__SYNC_EVENT__=!0,e.dispatchEvent(t)}},{key:"listenToEvent",value:function(e,t,n){var r=this;n||(n=t,t=null),(t=t||document).addEventListener(e,function(e){e.__SYNC_EVENT__||n(r.normalize(e),e)})}},{key:"getElementFromPath",value:function(e){return document.querySelector(e)}},{key:"getPathFromElement",value:function(e){for(var t="";e&&"html"!==e.localName;){var n=e.localName;if(!n)break;var r=Array.prototype.slice.call(e.classList),o="",i=!0,a=!1,l=void 0;try{for(var u,c=r[Symbol.iterator]();!(i=(u=c.next()).done);i=!0){o=o+"."+u.value}}catch(e){a=!0,l=e}finally{try{!i&&c.return&&c.return()}finally{if(a)throw l}}var s=""+n+o,f=e.parentNode;if(1<Array.prototype.slice.call(f.querySelectorAll(n)).length)s=s+":nth-child("+(Array.prototype.slice.call(f.children).indexOf(e)+1)+")";t=s+(t?">"+t:""),e=f}return t}}],[{key:"checkCustomEventSupport",value:function(){var e=!1;try{new KeyboardEvent("click",{}),e=!0}catch(e){}return e}}]),f}();o.syncProps=["bubbles","cancelBubble","cancelable","target","targetPath","type","name","which","keyCode","charCode","ctrlKey","shiftKey","altKey","metaKey","button","buttons","screenX","screenY","clientX","clientY"],t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),l=i(n(2)),u=i(n(3)),o=i(n(4));function i(e){return e&&e.__esModule?e:{default:e}}var a=function(){function a(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),this.prepros=window.__Prepros__,this.config=window.__PreprosBrowserSyncConfig__,this.events={},(this.prepros.browserSync=this).listen()}return r(a,[{key:"listen",value:function(){var e=this;this.config.enable&&(this.listenServerEvents(),this.prepros.onReady(function(){e.listenBrowserEvents()}))}},{key:"listenServerEvents",value:function(){var t=this;this.prepros.onWebSocketEvent("sync",function(e){t.handleSyncEvent(e.data)})}},{key:"sendEvent",value:function(e){this.prepros.sendWebSocketEvent("sync",e)}},{key:"listenMouseEvents",value:function(){var e=!0,t=!1,n=void 0;try{for(var r,o=a.mouseEvents[Symbol.iterator]();!(e=(r=o.next()).done);e=!0){var i=r.value;this.events[i]=new l.default({name:i,onEvent:this.sendEvent.bind(this)})}}catch(e){t=!0,n=e}finally{try{!e&&o.return&&o.return()}finally{if(t)throw n}}}},{key:"listenKeyboardEvents",value:function(){var e=!0,t=!1,n=void 0;try{for(var r,o=a.keyboardEvents[Symbol.iterator]();!(e=(r=o.next()).done);e=!0){var i=r.value;this.events[i]=new u.default({name:i,onEvent:this.sendEvent.bind(this)})}}catch(e){t=!0,n=e}finally{try{!e&&o.return&&o.return()}finally{if(t)throw n}}}},{key:"listenScrollEvents",value:function(){this.events.scroll=new o.default({onEvent:this.sendEvent.bind(this)})}},{key:"listenBrowserEvents",value:function(){this.config.enable&&(this.config.clicks&&this.listenMouseEvents(),this.config.forms&&this.listenKeyboardEvents(),this.config.scroll&&this.listenScrollEvents())}},{key:"handleSyncEvent",value:function(e){var t=e.name;this.events[t]&&this.events[t].dispatch(e)}}]),a}();a.mouseEvents=["click","mousedown","mouseup"],a.keyboardEvents=["keyup","keypress","keydown","input","change"],new(t.default=a)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),a=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},o=n(0),l=(r=o)&&r.__esModule?r:{default:r};var u=function(e){function o(e){var t=e.name,n=e.onEvent;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(o.__proto__||Object.getPrototypeOf(o)).call(this));return r.onEvent=n,r.name=t,r.listen(),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(o,l.default),i(o,[{key:"listen",value:function(){var n=this;a(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"listenToEvent",this).call(this,this.name,function(e,t){["SELECT","LABEL","OPTION"].some(function(e){return e===t.target.tagName})||n.onEvent(e)})}},{key:"createEvent",value:function(e){var t=void 0;this.supportsCustomEvents?t=new MouseEvent(this.name,e):(t=document.createEvent("MouseEvent")).initEvent(e.type,!!e.bubbles,!!e.cancelable);var n=!0,r=!1,o=void 0;try{for(var i,a=Object.keys(e)[Symbol.iterator]();!(n=(i=a.next()).done);n=!0){var l=i.value;try{t[l]=e[l]}catch(e){}}}catch(e){r=!0,o=e}finally{try{!n&&a.return&&a.return()}finally{if(r)throw o}}return t}},{key:"dispatch",value:function(e){var t=this.getElementFromPath(e.targetPath);if(t){var n=this.createEvent(e);a(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"dispatch",this).call(this,t,n)}}}]),o}();t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),a=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},o=n(0),l=(r=o)&&r.__esModule?r:{default:r};var u=function(e){function o(e){var t=e.name,n=e.onEvent;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(o.__proto__||Object.getPrototypeOf(o)).call(this));return r.onEvent=n,r.name=t,r.listen(),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(o,l.default),i(o,[{key:"listen",value:function(){var t=this;a(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"listenToEvent",this).call(this,this.name,function(e){e.targetValue=e.target.value,t.onEvent(e)})}},{key:"createEvent",value:function(e){var t=void 0;this.supportsCustomEvents?t=new KeyboardEvent(this.name,e):(t=document.createEvent("KeyboardEvent")).initEvent(e.type,!!e.bubbles,!!e.cancelable);var n=!0,r=!1,o=void 0;try{for(var i,a=Object.keys(e)[Symbol.iterator]();!(n=(i=a.next()).done);n=!0){var l=i.value;try{t[l]=e[l]}catch(e){}}}catch(e){r=!0,o=e}finally{try{!n&&a.return&&a.return()}finally{if(r)throw o}}return t}},{key:"dispatch",value:function(e){var t=this.getElementFromPath(e.targetPath);if(t){var n=this.createEvent(e);t.value=e.targetValue,a(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"dispatch",this).call(this,t,n)}}}]),o}();t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),i=r(n(0)),a=r(n(5));function r(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function r(e){var t=e.onEvent;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(r.__proto__||Object.getPrototypeOf(r)).call(this));return n.onEvent=t,n.name="scroll",n.isLeader=!0,n.isFollower=!0,n.leaderTimeout=null,n.followerTimeout=null,n.leaderFollowerSwitchTime=2e3,n.listen(),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,i.default),o(r,[{key:"makeLeader",value:function(){var e=this;this.isLeader=!1,clearTimeout(this.leaderTimeout),this.leaderTimeout=setTimeout(function(){e.isLeader=!0},this.leaderFollowerSwitchTime)}},{key:"makeFollower",value:function(){var e=this;this.isFollower=!1,clearTimeout(this.followerTimeout),this.followerTimeout=setTimeout(function(){e.isFollower=!0},this.leaderFollowerSwitchTime)}},{key:"listen",value:function(){var i=this;(function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0})(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"listenToEvent",this).call(this,this.name,(0,a.default)(function(){if(i.isLeader){var e=document.body,t=document.documentElement,n=window.scrollY,r=Math.max(e.scrollHeight,e.offsetHeight,t.clientHeight,t.scrollHeight,t.offsetHeight),o=window.innerHeight;i.onEvent({relative:n/(r-o),name:i.name}),i.makeFollower()}},50))}},{key:"dispatch",value:function(e){if(this.isFollower){this.makeLeader();var t=document.body,n=document.documentElement,r=Math.max(t.scrollHeight,t.offsetHeight,n.clientHeight,n.scrollHeight,n.offsetHeight),o=window.innerHeight,i=e.relative*(r-o);window.scrollTo(window.scrollX,i)}}}]),r}();t.default=l},function(o,e,t){(function(e){var m="Expected a function",i=NaN,a="[object Symbol]",l=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,s=/^0o[0-7]+$/i,f=parseInt,t="object"==typeof e&&e&&e.Object===Object&&e,n="object"==typeof self&&self&&self.Object===Object&&self,r=t||n||Function("return this")(),v=Object.prototype.toString,g=Math.max,w=Math.min,E=function(){return r.Date.now()};function p(r,o,e){var i,a,l,u,c,s,f=0,v=!1,p=!1,t=!0;if("function"!=typeof r)throw new TypeError(m);function y(e){var t=i,n=a;return i=a=void 0,f=e,u=r.apply(n,t)}function h(e){var t=e-s;return void 0===s||o<=t||t<0||p&&l<=e-f}function d(){var e,t,n=E();if(h(n))return b(n);c=setTimeout(d,(t=o-((e=n)-s),p?w(t,l-(e-f)):t))}function b(e){return c=void 0,t&&i?y(e):(i=a=void 0,u)}function n(){var e,t=E(),n=h(t);if(i=arguments,a=this,s=t,n){if(void 0===c)return f=e=s,c=setTimeout(d,o),v?y(e):u;if(p)return c=setTimeout(d,o),y(s)}return void 0===c&&(c=setTimeout(d,o)),u}return o=O(o)||0,_(e)&&(v=!!e.leading,l=(p="maxWait"in e)?g(O(e.maxWait)||0,o):l,t="trailing"in e?!!e.trailing:t),n.cancel=function(){void 0!==c&&clearTimeout(c),i=s=a=c=void(f=0)},n.flush=function(){return void 0===c?u:b(E())},n}function _(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function O(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||(n=t)&&"object"==typeof n&&v.call(t)==a)return i;var t,n;if(_(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=_(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var o=c.test(e);return o||s.test(e)?f(e.slice(2),o?2:8):u.test(e)?i:+e}o.exports=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(m);return _(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:r,maxWait:t,trailing:o})}}).call(e,t(6))},function(eg,fg){var gg;gg=function(){return this}();try{gg=gg||Function("return this")()||eval("this")}catch(e){"object"==typeof window&&(gg=window)}eg.exports=gg}]);;
!function(r){var n={};function o(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=r,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}(),o=i(r(1)),C=i(r(4));function i(e){return e&&e.__esModule?e:{default:e}}function x(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.importCacheWaitPeriod=200,this.animationDuration=600,this.animationStyleAttached=!1,this.prepros=window.__Prepros__,(this.prepros.liveReload=this).listen()}return n(e,[{key:"listen",value:function(){var t=this;this.prepros.onWebSocketEvent("reload",function(e){t.reload(e.data.file,{animate:e.data.animate})})}},{key:"reload",value:function(e){return(1<arguments.length&&void 0!==arguments[1]?arguments[1]:{animate:!0}).animate&&this.startAnimation(),e.match(/\.css$/i)?this.reloadStylesheet(e):this.reloadPage()}},{key:"reloadPage",value:function(){window.location.reload()}},{key:"injectAnimation",value:function(){if(!this.animationStyleAttached){var e="\n      .__prepros-reload__ *, .__prepros-reload__ {\n         -webkit-transition: all "+this.animationDuration+"ms;\n        -moz-transition: all "+this.animationDuration+"ms;\n        transition: all "+this.animationDuration+"ms;\n     }",t=document.createElement("style");t.appendChild(document.createTextNode(e)),document.head.appendChild(t),this.animationStyleAttached=!0}}},{key:"startAnimation",value:function(){this.injectAnimation(),document.body.classList.add("__prepros-reload__"),setTimeout(function(){document.body.classList.remove("__prepros-reload__")},this.animationDuration+100)}},{key:"getLinkedStylesheets",value:function(){var e=document.getElementsByTagName("link");return e=(e=Array.prototype.slice.call(e)).filter(function(e){return e.rel.match(/^stylesheet$/i)&&!e.__RELOAD_PENDING_REMOVAL__})}},{key:"getStyleTagStyleSheets",value:function(){var e=document.getElementsByTagName("style");return e=Array.prototype.slice.call(e)}},{key:"pathFromUrl",value:function(e){var t=document.createElement("a");return t.href=e,decodeURIComponent(t.pathname)}},{key:"reloadStylesheet",value:function(e){for(var t=this,r=this.getLinkedStylesheets(),n=this.getStyleTagStyleSheets(),o=[],i=[].concat(x(r),x(n)),a=0;a<i.length;a++){var u=i[a];u.sheet&&(o=[].concat(x(o),x(this.collectImportedStylesheets(u,u.sheet))))}var l=C.default.basename(e),c=function(e){return C.default.basename(t.pathFromUrl(e.href))===l},s=o.filter(c),f=r.filter(c);if(s.length+f.length<1){var h=!0,p=!1,d=void 0;try{for(var y,m=r[Symbol.iterator]();!(h=(y=m.next()).done);h=!0){var v=y.value;this.reattachStylesheetLink(v)}}catch(e){p=!0,d=e}finally{try{!h&&m.return&&m.return()}finally{if(p)throw d}}}else{var g=!0,_=!1,b=void 0;try{for(var A,S=s[Symbol.iterator]();!(g=(A=S.next()).done);g=!0){var w=A.value;this.reattachImportedRule(w)}}catch(e){_=!0,b=e}finally{try{!g&&S.return&&S.return()}finally{if(_)throw b}}var E=!0,k=!1,T=void 0;try{for(var R,O=f[Symbol.iterator]();!(E=(R=O.next()).done);E=!0){var j=R.value;this.reattachStylesheetLink(j)}}catch(e){k=!0,T=e}finally{try{!E&&O.return&&O.return()}finally{if(k)throw T}}}}},{key:"collectImportedStylesheets",value:function(e,t){var r=[];try{r=t.cssRules}catch(e){}if(!r||!r.length)return[];r=Array.prototype.slice.call(r);var n=[],o=!0,i=!1,a=void 0;try{for(var u,l=r[Symbol.iterator]();!(o=(u=l.next()).done);o=!0){var c=u.value;c.type===CSSRule.IMPORT_RULE&&(n=[].concat(x(n),[{tag:e,rule:c,href:c.href,index:r.indexOf(c)}]),n=[].concat(x(n),x(this.collectImportedStylesheets(e,c.styleSheet))))}}catch(e){i=!0,a=e}finally{try{!o&&l.return&&l.return()}finally{if(i)throw a}}return n}},{key:"reattachStylesheetLink",value:function(e){if(!e.__RELOAD_PENDING_REMOVAL__){e.__RELOAD_PENDING_REMOVAL__=!0;var t=e.cloneNode(!1);t.href=this.generateCacheBustUrl(e.href);var r=e.parentNode;r.lastChild===e?r.appendChild(t):r.insertBefore(t,e),t.onload=function(){e.parentNode&&e.parentNode.removeChild(e)}}}},{key:"cacheStylesheet",value:function(e,t){var r=document.createElement("link");return r.setAttribute("rel","stylesheet"),r.__RELOAD_PENDING_REMOVAL__=!0,r.href=e,t.parentNode.insertBefore(r,t),function(){r.parentNode&&r.parentNode.removeChild(r)}}},{key:"reattachImportedRule",value:function(e){var t=e.rule,r=e.index,n=e.tag,o=t.parentStyleSheet,i=this.generateCacheBustUrl(t.href),a=t.media.length?[].join.call(t.media,", "):"",u='@import url("'+i+'") '+a+";";t.__SYNC_NEW_HREF__=i;var l=this.cacheStylesheet(i,n);setTimeout(function(){l(),t.__SYNC_NEW_HREF__===i&&(o.insertRule(u,r),o.deleteRule(r+1))},this.importCacheWaitPeriod)}},{key:"generateCacheBustUrl",value:function(e){var t=document.createElement("a");if(t.href=e,1<t.search.length){var r=o.default.parse(t.search.split("?")[1]);r["cache-bust"]=Math.random(),t.search="?"+o.default.stringify(r)}else t.search="?cache-bust="+Math.random();return t.href}}]),e}();new(t.default=a)},function(e,t,r){"use strict";t.decode=t.parse=r(2),t.encode=t.stringify=r(3)},function(e,t,r){"use strict";e.exports=function(e,t,r,n){t=t||"&",r=r||"=";var o={};if("string"!=typeof e||0===e.length)return o;var i=/\+/g;e=e.split(t);var a=1e3;n&&"number"==typeof n.maxKeys&&(a=n.maxKeys);var u,l,c=e.length;0<a&&a<c&&(c=a);for(var s=0;s<c;++s){var f,h,p,d,y=e[s].replace(i,"%20"),m=y.indexOf(r);h=0<=m?(f=y.substr(0,m),y.substr(m+1)):(f=y,""),p=decodeURIComponent(f),d=decodeURIComponent(h),u=o,l=p,Object.prototype.hasOwnProperty.call(u,l)?v(o[p])?o[p].push(d):o[p]=[o[p],d]:o[p]=d}return o};var v=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},function(e,t,r){"use strict";var i=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(r,n,o,e){return n=n||"&",o=o||"=",null===r&&(r=void 0),"object"==typeof r?u(l(r),function(e){var t=encodeURIComponent(i(e))+o;return a(r[e])?u(r[e],function(e){return t+encodeURIComponent(i(e))}).join(n):t+encodeURIComponent(i(r[e]))}).join(n):e?encodeURIComponent(i(e))+o+encodeURIComponent(i(r)):""};var a=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function u(e,t){if(e.map)return e.map(t);for(var r=[],n=0;n<e.length;n++)r.push(t(e[n],n));return r}var l=Object.keys||function(e){var t=[];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.push(r);return t}},function(e,c,t){(function(o){function i(e,t){for(var r=0,n=e.length-1;0<=n;n--){var o=e[n];"."===o?e.splice(n,1):".."===o?(e.splice(n,1),r++):r&&(e.splice(n,1),r--)}if(t)for(;r--;r)e.unshift("..");return e}var t=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,a=function(e){return t.exec(e).slice(1)};function u(e,t){if(e.filter)return e.filter(t);for(var r=[],n=0;n<e.length;n++)t(e[n],n,e)&&r.push(e[n]);return r}c.resolve=function(){for(var e="",t=!1,r=arguments.length-1;-1<=r&&!t;r--){var n=0<=r?arguments[r]:o.cwd();if("string"!=typeof n)throw new TypeError("Arguments to path.resolve must be strings");n&&(e=n+"/"+e,t="/"===n.charAt(0))}return(t?"/":"")+(e=i(u(e.split("/"),function(e){return!!e}),!t).join("/"))||"."},c.normalize=function(e){var t=c.isAbsolute(e),r="/"===n(e,-1);return(e=i(u(e.split("/"),function(e){return!!e}),!t).join("/"))||t||(e="."),e&&r&&(e+="/"),(t?"/":"")+e},c.isAbsolute=function(e){return"/"===e.charAt(0)},c.join=function(){var e=Array.prototype.slice.call(arguments,0);return c.normalize(u(e,function(e,t){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e}).join("/"))},c.relative=function(e,t){function r(e){for(var t=0;t<e.length&&""===e[t];t++);for(var r=e.length-1;0<=r&&""===e[r];r--);return r<t?[]:e.slice(t,r-t+1)}e=c.resolve(e).substr(1),t=c.resolve(t).substr(1);for(var n=r(e.split("/")),o=r(t.split("/")),i=Math.min(n.length,o.length),a=i,u=0;u<i;u++)if(n[u]!==o[u]){a=u;break}var l=[];for(u=a;u<n.length;u++)l.push("..");return(l=l.concat(o.slice(a))).join("/")},c.sep="/",c.delimiter=":",c.dirname=function(e){var t=a(e),r=t[0],n=t[1];return r||n?(n&&(n=n.substr(0,n.length-1)),r+n):"."},c.basename=function(e,t){var r=a(e)[2];return t&&r.substr(-1*t.length)===t&&(r=r.substr(0,r.length-t.length)),r},c.extname=function(e){return a(e)[3]};var n="b"==="ab".substr(-1)?function(e,t,r){return e.substr(t,r)}:function(e,t,r){return t<0&&(t=e.length+t),e.substr(t,r)}}).call(c,t(5))},function(e,t){var r,n,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function u(t){if(r===setTimeout)return setTimeout(t,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:i}catch(e){r=i}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(e){n=a}}();var l,c=[],s=!1,f=-1;function h(){s&&l&&(s=!1,l.length?c=l.concat(c):f=-1,c.length&&p())}function p(){if(!s){var e=u(h);s=!0;for(var t=c.length;t;){for(l=c,c=[];++f<t;)l&&l[f].run();f=-1,t=c.length}l=null,s=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function y(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(1<arguments.length)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new d(e,t)),1!==c.length||s||u(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}}]);;
!function(r){var t={};function i(e){if(t[e])return t[e].exports;var n=t[e]={i:e,l:!1,exports:{}};return r[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=r,i.c=t,i.d=function(e,n,r){i.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i(i.s=0)}([function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=function(){function t(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();var i=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.prepros=window.__Prepros__,(this.prepros.weinre=this).injected=!1,this.sendReady(),this.listen()}return t(e,[{key:"sendReady",value:function(){var e=this;this.prepros.onReady(function(){e.prepros.sendWebSocketEvent("weinre-ready",{})})}},{key:"injectWeinre",value:function(e){var n=e.weinreId,r=e.weinreServerPort;if(!this.injected){var t=document.createElement("script");t.src="http://"+window.location.hostname+":"+r+"/target/target-script-min.js#"+n,document.body.appendChild(t),this.injected=!0}}},{key:"listen",value:function(){var o=this;this.prepros.onWebSocketEvent("inject-weinre",function(e){var n=e.data,r=n.browserId,t=n.weinreId,i=n.weinreServerPort;r===o.prepros.browserId&&o.injectWeinre({weinreId:t,weinreServerPort:i})})}}]),e}();new(n.default=i)}]);;