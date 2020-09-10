/** @cbsinteractive/cv-player 1.0.0; 2020-09-03T15:15:22.553Z **/

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.cvp = factory());
}(this, (function () { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn, basedir, module) {
		return module = {
		  path: basedir,
		  exports: {},
		  require: function (path, base) {
	      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
	    }
		}, fn(module, module.exports), module.exports;
	}

	function commonjsRequire () {
		throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
	}

	/*! *****************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */
	/* global Reflect, Promise */

	var extendStatics = function(d, b) {
	    extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
	    return extendStatics(d, b);
	};

	function __extends(d, b) {
	    extendStatics(d, b);
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	}

	var __assign = function() {
	    __assign = Object.assign || function __assign(t) {
	        for (var s, i = 1, n = arguments.length; i < n; i++) {
	            s = arguments[i];
	            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	        }
	        return t;
	    };
	    return __assign.apply(this, arguments);
	};

	function __rest(s, e) {
	    var t = {};
	    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
	        t[p] = s[p];
	    if (s != null && typeof Object.getOwnPropertySymbols === "function")
	        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
	            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
	                t[p[i]] = s[p[i]];
	        }
	    return t;
	}

	function __decorate(decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	}

	function __param(paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	}

	function __metadata(metadataKey, metadataValue) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
	}

	function __awaiter(thisArg, _arguments, P, generator) {
	    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	}

	function __generator(thisArg, body) {
	    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
	    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
	    function verb(n) { return function (v) { return step([n, v]); }; }
	    function step(op) {
	        if (f) throw new TypeError("Generator is already executing.");
	        while (_) try {
	            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
	            if (y = 0, t) op = [op[0] & 2, t.value];
	            switch (op[0]) {
	                case 0: case 1: t = op; break;
	                case 4: _.label++; return { value: op[1], done: false };
	                case 5: _.label++; y = op[1]; op = [0]; continue;
	                case 7: op = _.ops.pop(); _.trys.pop(); continue;
	                default:
	                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
	                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
	                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
	                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
	                    if (t[2]) _.ops.pop();
	                    _.trys.pop(); continue;
	            }
	            op = body.call(thisArg, _);
	        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
	        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
	    }
	}

	var __createBinding = Object.create ? (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
	}) : (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    o[k2] = m[k];
	});

	function __exportStar(m, o) {
	    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
	}

	function __values(o) {
	    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
	    if (m) return m.call(o);
	    if (o && typeof o.length === "number") return {
	        next: function () {
	            if (o && i >= o.length) o = void 0;
	            return { value: o && o[i++], done: !o };
	        }
	    };
	    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
	}

	function __read(o, n) {
	    var m = typeof Symbol === "function" && o[Symbol.iterator];
	    if (!m) return o;
	    var i = m.call(o), r, ar = [], e;
	    try {
	        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
	    }
	    catch (error) { e = { error: error }; }
	    finally {
	        try {
	            if (r && !r.done && (m = i["return"])) m.call(i);
	        }
	        finally { if (e) throw e.error; }
	    }
	    return ar;
	}

	function __spread() {
	    for (var ar = [], i = 0; i < arguments.length; i++)
	        ar = ar.concat(__read(arguments[i]));
	    return ar;
	}

	function __spreadArrays() {
	    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
	    for (var r = Array(s), k = 0, i = 0; i < il; i++)
	        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
	            r[k] = a[j];
	    return r;
	}
	function __await(v) {
	    return this instanceof __await ? (this.v = v, this) : new __await(v);
	}

	function __asyncGenerator(thisArg, _arguments, generator) {
	    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
	    var g = generator.apply(thisArg, _arguments || []), i, q = [];
	    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
	    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
	    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
	    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
	    function fulfill(value) { resume("next", value); }
	    function reject(value) { resume("throw", value); }
	    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
	}

	function __asyncDelegator(o) {
	    var i, p;
	    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
	    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
	}

	function __asyncValues(o) {
	    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
	    var m = o[Symbol.asyncIterator], i;
	    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
	    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
	    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
	}

	function __makeTemplateObject(cooked, raw) {
	    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
	    return cooked;
	}
	var __setModuleDefault = Object.create ? (function(o, v) {
	    Object.defineProperty(o, "default", { enumerable: true, value: v });
	}) : function(o, v) {
	    o["default"] = v;
	};

	function __importStar(mod) {
	    if (mod && mod.__esModule) return mod;
	    var result = {};
	    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
	    __setModuleDefault(result, mod);
	    return result;
	}

	function __importDefault(mod) {
	    return (mod && mod.__esModule) ? mod : { default: mod };
	}

	function __classPrivateFieldGet(receiver, privateMap) {
	    if (!privateMap.has(receiver)) {
	        throw new TypeError("attempted to get private field on non-instance");
	    }
	    return privateMap.get(receiver);
	}

	function __classPrivateFieldSet(receiver, privateMap, value) {
	    if (!privateMap.has(receiver)) {
	        throw new TypeError("attempted to set private field on non-instance");
	    }
	    privateMap.set(receiver, value);
	    return value;
	}

	var tslib_es6 = /*#__PURE__*/Object.freeze({
		__proto__: null,
		__extends: __extends,
		get __assign () { return __assign; },
		__rest: __rest,
		__decorate: __decorate,
		__param: __param,
		__metadata: __metadata,
		__awaiter: __awaiter,
		__generator: __generator,
		__createBinding: __createBinding,
		__exportStar: __exportStar,
		__values: __values,
		__read: __read,
		__spread: __spread,
		__spreadArrays: __spreadArrays,
		__await: __await,
		__asyncGenerator: __asyncGenerator,
		__asyncDelegator: __asyncDelegator,
		__asyncValues: __asyncValues,
		__makeTemplateObject: __makeTemplateObject,
		__importStar: __importStar,
		__importDefault: __importDefault,
		__classPrivateFieldGet: __classPrivateFieldGet,
		__classPrivateFieldSet: __classPrivateFieldSet
	});

	/**
	 * Code refactored from Mozilla Developer Network:
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
	 */

	function assign(target, firstSource) {
	  if (target === undefined || target === null) {
	    throw new TypeError('Cannot convert first argument to object');
	  }

	  var to = Object(target);
	  for (var i = 1; i < arguments.length; i++) {
	    var nextSource = arguments[i];
	    if (nextSource === undefined || nextSource === null) {
	      continue;
	    }

	    var keysArray = Object.keys(Object(nextSource));
	    for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
	      var nextKey = keysArray[nextIndex];
	      var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
	      if (desc !== undefined && desc.enumerable) {
	        to[nextKey] = nextSource[nextKey];
	      }
	    }
	  }
	  return to;
	}

	function polyfill() {
	  if (!Object.assign) {
	    Object.defineProperty(Object, 'assign', {
	      enumerable: false,
	      configurable: true,
	      writable: true,
	      value: assign
	    });
	  }
	}

	var es6ObjectAssign = {
	  assign: assign,
	  polyfill: polyfill
	};

	var es6Promise = createCommonjsModule(function (module, exports) {
	/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
	 * @version   v4.2.8+1e68dce6
	 */

	(function (global, factory) {
		 module.exports = factory() ;
	}(commonjsGlobal, (function () {
	function objectOrFunction(x) {
	  var type = typeof x;
	  return x !== null && (type === 'object' || type === 'function');
	}

	function isFunction(x) {
	  return typeof x === 'function';
	}



	var _isArray = void 0;
	if (Array.isArray) {
	  _isArray = Array.isArray;
	} else {
	  _isArray = function (x) {
	    return Object.prototype.toString.call(x) === '[object Array]';
	  };
	}

	var isArray = _isArray;

	var len = 0;
	var vertxNext = void 0;
	var customSchedulerFn = void 0;

	var asap = function asap(callback, arg) {
	  queue[len] = callback;
	  queue[len + 1] = arg;
	  len += 2;
	  if (len === 2) {
	    // If len is 2, that means that we need to schedule an async flush.
	    // If additional callbacks are queued before the queue is flushed, they
	    // will be processed by this flush that we are scheduling.
	    if (customSchedulerFn) {
	      customSchedulerFn(flush);
	    } else {
	      scheduleFlush();
	    }
	  }
	};

	function setScheduler(scheduleFn) {
	  customSchedulerFn = scheduleFn;
	}

	function setAsap(asapFn) {
	  asap = asapFn;
	}

	var browserWindow = typeof window !== 'undefined' ? window : undefined;
	var browserGlobal = browserWindow || {};
	var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
	var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

	// test for web worker but not in IE10
	var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

	// node
	function useNextTick() {
	  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
	  // see https://github.com/cujojs/when/issues/410 for details
	  return function () {
	    return process.nextTick(flush);
	  };
	}

	// vertx
	function useVertxTimer() {
	  if (typeof vertxNext !== 'undefined') {
	    return function () {
	      vertxNext(flush);
	    };
	  }

	  return useSetTimeout();
	}

	function useMutationObserver() {
	  var iterations = 0;
	  var observer = new BrowserMutationObserver(flush);
	  var node = document.createTextNode('');
	  observer.observe(node, { characterData: true });

	  return function () {
	    node.data = iterations = ++iterations % 2;
	  };
	}

	// web worker
	function useMessageChannel() {
	  var channel = new MessageChannel();
	  channel.port1.onmessage = flush;
	  return function () {
	    return channel.port2.postMessage(0);
	  };
	}

	function useSetTimeout() {
	  // Store setTimeout reference so es6-promise will be unaffected by
	  // other code modifying setTimeout (like sinon.useFakeTimers())
	  var globalSetTimeout = setTimeout;
	  return function () {
	    return globalSetTimeout(flush, 1);
	  };
	}

	var queue = new Array(1000);
	function flush() {
	  for (var i = 0; i < len; i += 2) {
	    var callback = queue[i];
	    var arg = queue[i + 1];

	    callback(arg);

	    queue[i] = undefined;
	    queue[i + 1] = undefined;
	  }

	  len = 0;
	}

	function attemptVertx() {
	  try {
	    var vertx = Function('return this')().require('vertx');
	    vertxNext = vertx.runOnLoop || vertx.runOnContext;
	    return useVertxTimer();
	  } catch (e) {
	    return useSetTimeout();
	  }
	}

	var scheduleFlush = void 0;
	// Decide what async method to use to triggering processing of queued callbacks:
	if (isNode) {
	  scheduleFlush = useNextTick();
	} else if (BrowserMutationObserver) {
	  scheduleFlush = useMutationObserver();
	} else if (isWorker) {
	  scheduleFlush = useMessageChannel();
	} else if (browserWindow === undefined && typeof commonjsRequire === 'function') {
	  scheduleFlush = attemptVertx();
	} else {
	  scheduleFlush = useSetTimeout();
	}

	function then(onFulfillment, onRejection) {
	  var parent = this;

	  var child = new this.constructor(noop);

	  if (child[PROMISE_ID] === undefined) {
	    makePromise(child);
	  }

	  var _state = parent._state;


	  if (_state) {
	    var callback = arguments[_state - 1];
	    asap(function () {
	      return invokeCallback(_state, child, callback, parent._result);
	    });
	  } else {
	    subscribe(parent, child, onFulfillment, onRejection);
	  }

	  return child;
	}

	/**
	  `Promise.resolve` returns a promise that will become resolved with the
	  passed `value`. It is shorthand for the following:

	  ```javascript
	  let promise = new Promise(function(resolve, reject){
	    resolve(1);
	  });

	  promise.then(function(value){
	    // value === 1
	  });
	  ```

	  Instead of writing the above, your code now simply becomes the following:

	  ```javascript
	  let promise = Promise.resolve(1);

	  promise.then(function(value){
	    // value === 1
	  });
	  ```

	  @method resolve
	  @static
	  @param {Any} value value that the returned promise will be resolved with
	  Useful for tooling.
	  @return {Promise} a promise that will become fulfilled with the given
	  `value`
	*/
	function resolve$1(object) {
	  /*jshint validthis:true */
	  var Constructor = this;

	  if (object && typeof object === 'object' && object.constructor === Constructor) {
	    return object;
	  }

	  var promise = new Constructor(noop);
	  resolve(promise, object);
	  return promise;
	}

	var PROMISE_ID = Math.random().toString(36).substring(2);

	function noop() {}

	var PENDING = void 0;
	var FULFILLED = 1;
	var REJECTED = 2;

	function selfFulfillment() {
	  return new TypeError("You cannot resolve a promise with itself");
	}

	function cannotReturnOwn() {
	  return new TypeError('A promises callback cannot return that same promise.');
	}

	function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
	  try {
	    then$$1.call(value, fulfillmentHandler, rejectionHandler);
	  } catch (e) {
	    return e;
	  }
	}

	function handleForeignThenable(promise, thenable, then$$1) {
	  asap(function (promise) {
	    var sealed = false;
	    var error = tryThen(then$$1, thenable, function (value) {
	      if (sealed) {
	        return;
	      }
	      sealed = true;
	      if (thenable !== value) {
	        resolve(promise, value);
	      } else {
	        fulfill(promise, value);
	      }
	    }, function (reason) {
	      if (sealed) {
	        return;
	      }
	      sealed = true;

	      reject(promise, reason);
	    }, 'Settle: ' + (promise._label || ' unknown promise'));

	    if (!sealed && error) {
	      sealed = true;
	      reject(promise, error);
	    }
	  }, promise);
	}

	function handleOwnThenable(promise, thenable) {
	  if (thenable._state === FULFILLED) {
	    fulfill(promise, thenable._result);
	  } else if (thenable._state === REJECTED) {
	    reject(promise, thenable._result);
	  } else {
	    subscribe(thenable, undefined, function (value) {
	      return resolve(promise, value);
	    }, function (reason) {
	      return reject(promise, reason);
	    });
	  }
	}

	function handleMaybeThenable(promise, maybeThenable, then$$1) {
	  if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
	    handleOwnThenable(promise, maybeThenable);
	  } else {
	    if (then$$1 === undefined) {
	      fulfill(promise, maybeThenable);
	    } else if (isFunction(then$$1)) {
	      handleForeignThenable(promise, maybeThenable, then$$1);
	    } else {
	      fulfill(promise, maybeThenable);
	    }
	  }
	}

	function resolve(promise, value) {
	  if (promise === value) {
	    reject(promise, selfFulfillment());
	  } else if (objectOrFunction(value)) {
	    var then$$1 = void 0;
	    try {
	      then$$1 = value.then;
	    } catch (error) {
	      reject(promise, error);
	      return;
	    }
	    handleMaybeThenable(promise, value, then$$1);
	  } else {
	    fulfill(promise, value);
	  }
	}

	function publishRejection(promise) {
	  if (promise._onerror) {
	    promise._onerror(promise._result);
	  }

	  publish(promise);
	}

	function fulfill(promise, value) {
	  if (promise._state !== PENDING) {
	    return;
	  }

	  promise._result = value;
	  promise._state = FULFILLED;

	  if (promise._subscribers.length !== 0) {
	    asap(publish, promise);
	  }
	}

	function reject(promise, reason) {
	  if (promise._state !== PENDING) {
	    return;
	  }
	  promise._state = REJECTED;
	  promise._result = reason;

	  asap(publishRejection, promise);
	}

	function subscribe(parent, child, onFulfillment, onRejection) {
	  var _subscribers = parent._subscribers;
	  var length = _subscribers.length;


	  parent._onerror = null;

	  _subscribers[length] = child;
	  _subscribers[length + FULFILLED] = onFulfillment;
	  _subscribers[length + REJECTED] = onRejection;

	  if (length === 0 && parent._state) {
	    asap(publish, parent);
	  }
	}

	function publish(promise) {
	  var subscribers = promise._subscribers;
	  var settled = promise._state;

	  if (subscribers.length === 0) {
	    return;
	  }

	  var child = void 0,
	      callback = void 0,
	      detail = promise._result;

	  for (var i = 0; i < subscribers.length; i += 3) {
	    child = subscribers[i];
	    callback = subscribers[i + settled];

	    if (child) {
	      invokeCallback(settled, child, callback, detail);
	    } else {
	      callback(detail);
	    }
	  }

	  promise._subscribers.length = 0;
	}

	function invokeCallback(settled, promise, callback, detail) {
	  var hasCallback = isFunction(callback),
	      value = void 0,
	      error = void 0,
	      succeeded = true;

	  if (hasCallback) {
	    try {
	      value = callback(detail);
	    } catch (e) {
	      succeeded = false;
	      error = e;
	    }

	    if (promise === value) {
	      reject(promise, cannotReturnOwn());
	      return;
	    }
	  } else {
	    value = detail;
	  }

	  if (promise._state !== PENDING) ; else if (hasCallback && succeeded) {
	    resolve(promise, value);
	  } else if (succeeded === false) {
	    reject(promise, error);
	  } else if (settled === FULFILLED) {
	    fulfill(promise, value);
	  } else if (settled === REJECTED) {
	    reject(promise, value);
	  }
	}

	function initializePromise(promise, resolver) {
	  try {
	    resolver(function resolvePromise(value) {
	      resolve(promise, value);
	    }, function rejectPromise(reason) {
	      reject(promise, reason);
	    });
	  } catch (e) {
	    reject(promise, e);
	  }
	}

	var id = 0;
	function nextId() {
	  return id++;
	}

	function makePromise(promise) {
	  promise[PROMISE_ID] = id++;
	  promise._state = undefined;
	  promise._result = undefined;
	  promise._subscribers = [];
	}

	function validationError() {
	  return new Error('Array Methods must be provided an Array');
	}

	var Enumerator = function () {
	  function Enumerator(Constructor, input) {
	    this._instanceConstructor = Constructor;
	    this.promise = new Constructor(noop);

	    if (!this.promise[PROMISE_ID]) {
	      makePromise(this.promise);
	    }

	    if (isArray(input)) {
	      this.length = input.length;
	      this._remaining = input.length;

	      this._result = new Array(this.length);

	      if (this.length === 0) {
	        fulfill(this.promise, this._result);
	      } else {
	        this.length = this.length || 0;
	        this._enumerate(input);
	        if (this._remaining === 0) {
	          fulfill(this.promise, this._result);
	        }
	      }
	    } else {
	      reject(this.promise, validationError());
	    }
	  }

	  Enumerator.prototype._enumerate = function _enumerate(input) {
	    for (var i = 0; this._state === PENDING && i < input.length; i++) {
	      this._eachEntry(input[i], i);
	    }
	  };

	  Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {
	    var c = this._instanceConstructor;
	    var resolve$$1 = c.resolve;


	    if (resolve$$1 === resolve$1) {
	      var _then = void 0;
	      var error = void 0;
	      var didError = false;
	      try {
	        _then = entry.then;
	      } catch (e) {
	        didError = true;
	        error = e;
	      }

	      if (_then === then && entry._state !== PENDING) {
	        this._settledAt(entry._state, i, entry._result);
	      } else if (typeof _then !== 'function') {
	        this._remaining--;
	        this._result[i] = entry;
	      } else if (c === Promise$1) {
	        var promise = new c(noop);
	        if (didError) {
	          reject(promise, error);
	        } else {
	          handleMaybeThenable(promise, entry, _then);
	        }
	        this._willSettleAt(promise, i);
	      } else {
	        this._willSettleAt(new c(function (resolve$$1) {
	          return resolve$$1(entry);
	        }), i);
	      }
	    } else {
	      this._willSettleAt(resolve$$1(entry), i);
	    }
	  };

	  Enumerator.prototype._settledAt = function _settledAt(state, i, value) {
	    var promise = this.promise;


	    if (promise._state === PENDING) {
	      this._remaining--;

	      if (state === REJECTED) {
	        reject(promise, value);
	      } else {
	        this._result[i] = value;
	      }
	    }

	    if (this._remaining === 0) {
	      fulfill(promise, this._result);
	    }
	  };

	  Enumerator.prototype._willSettleAt = function _willSettleAt(promise, i) {
	    var enumerator = this;

	    subscribe(promise, undefined, function (value) {
	      return enumerator._settledAt(FULFILLED, i, value);
	    }, function (reason) {
	      return enumerator._settledAt(REJECTED, i, reason);
	    });
	  };

	  return Enumerator;
	}();

	/**
	  `Promise.all` accepts an array of promises, and returns a new promise which
	  is fulfilled with an array of fulfillment values for the passed promises, or
	  rejected with the reason of the first passed promise to be rejected. It casts all
	  elements of the passed iterable to promises as it runs this algorithm.

	  Example:

	  ```javascript
	  let promise1 = resolve(1);
	  let promise2 = resolve(2);
	  let promise3 = resolve(3);
	  let promises = [ promise1, promise2, promise3 ];

	  Promise.all(promises).then(function(array){
	    // The array here would be [ 1, 2, 3 ];
	  });
	  ```

	  If any of the `promises` given to `all` are rejected, the first promise
	  that is rejected will be given as an argument to the returned promises's
	  rejection handler. For example:

	  Example:

	  ```javascript
	  let promise1 = resolve(1);
	  let promise2 = reject(new Error("2"));
	  let promise3 = reject(new Error("3"));
	  let promises = [ promise1, promise2, promise3 ];

	  Promise.all(promises).then(function(array){
	    // Code here never runs because there are rejected promises!
	  }, function(error) {
	    // error.message === "2"
	  });
	  ```

	  @method all
	  @static
	  @param {Array} entries array of promises
	  @param {String} label optional string for labeling the promise.
	  Useful for tooling.
	  @return {Promise} promise that is fulfilled when all `promises` have been
	  fulfilled, or rejected if any of them become rejected.
	  @static
	*/
	function all(entries) {
	  return new Enumerator(this, entries).promise;
	}

	/**
	  `Promise.race` returns a new promise which is settled in the same way as the
	  first passed promise to settle.

	  Example:

	  ```javascript
	  let promise1 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 1');
	    }, 200);
	  });

	  let promise2 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 2');
	    }, 100);
	  });

	  Promise.race([promise1, promise2]).then(function(result){
	    // result === 'promise 2' because it was resolved before promise1
	    // was resolved.
	  });
	  ```

	  `Promise.race` is deterministic in that only the state of the first
	  settled promise matters. For example, even if other promises given to the
	  `promises` array argument are resolved, but the first settled promise has
	  become rejected before the other promises became fulfilled, the returned
	  promise will become rejected:

	  ```javascript
	  let promise1 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 1');
	    }, 200);
	  });

	  let promise2 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      reject(new Error('promise 2'));
	    }, 100);
	  });

	  Promise.race([promise1, promise2]).then(function(result){
	    // Code here never runs
	  }, function(reason){
	    // reason.message === 'promise 2' because promise 2 became rejected before
	    // promise 1 became fulfilled
	  });
	  ```

	  An example real-world use case is implementing timeouts:

	  ```javascript
	  Promise.race([ajax('foo.json'), timeout(5000)])
	  ```

	  @method race
	  @static
	  @param {Array} promises array of promises to observe
	  Useful for tooling.
	  @return {Promise} a promise which settles in the same way as the first passed
	  promise to settle.
	*/
	function race(entries) {
	  /*jshint validthis:true */
	  var Constructor = this;

	  if (!isArray(entries)) {
	    return new Constructor(function (_, reject) {
	      return reject(new TypeError('You must pass an array to race.'));
	    });
	  } else {
	    return new Constructor(function (resolve, reject) {
	      var length = entries.length;
	      for (var i = 0; i < length; i++) {
	        Constructor.resolve(entries[i]).then(resolve, reject);
	      }
	    });
	  }
	}

	/**
	  `Promise.reject` returns a promise rejected with the passed `reason`.
	  It is shorthand for the following:

	  ```javascript
	  let promise = new Promise(function(resolve, reject){
	    reject(new Error('WHOOPS'));
	  });

	  promise.then(function(value){
	    // Code here doesn't run because the promise is rejected!
	  }, function(reason){
	    // reason.message === 'WHOOPS'
	  });
	  ```

	  Instead of writing the above, your code now simply becomes the following:

	  ```javascript
	  let promise = Promise.reject(new Error('WHOOPS'));

	  promise.then(function(value){
	    // Code here doesn't run because the promise is rejected!
	  }, function(reason){
	    // reason.message === 'WHOOPS'
	  });
	  ```

	  @method reject
	  @static
	  @param {Any} reason value that the returned promise will be rejected with.
	  Useful for tooling.
	  @return {Promise} a promise rejected with the given `reason`.
	*/
	function reject$1(reason) {
	  /*jshint validthis:true */
	  var Constructor = this;
	  var promise = new Constructor(noop);
	  reject(promise, reason);
	  return promise;
	}

	function needsResolver() {
	  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
	}

	function needsNew() {
	  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
	}

	/**
	  Promise objects represent the eventual result of an asynchronous operation. The
	  primary way of interacting with a promise is through its `then` method, which
	  registers callbacks to receive either a promise's eventual value or the reason
	  why the promise cannot be fulfilled.

	  Terminology
	  -----------

	  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
	  - `thenable` is an object or function that defines a `then` method.
	  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
	  - `exception` is a value that is thrown using the throw statement.
	  - `reason` is a value that indicates why a promise was rejected.
	  - `settled` the final resting state of a promise, fulfilled or rejected.

	  A promise can be in one of three states: pending, fulfilled, or rejected.

	  Promises that are fulfilled have a fulfillment value and are in the fulfilled
	  state.  Promises that are rejected have a rejection reason and are in the
	  rejected state.  A fulfillment value is never a thenable.

	  Promises can also be said to *resolve* a value.  If this value is also a
	  promise, then the original promise's settled state will match the value's
	  settled state.  So a promise that *resolves* a promise that rejects will
	  itself reject, and a promise that *resolves* a promise that fulfills will
	  itself fulfill.


	  Basic Usage:
	  ------------

	  ```js
	  let promise = new Promise(function(resolve, reject) {
	    // on success
	    resolve(value);

	    // on failure
	    reject(reason);
	  });

	  promise.then(function(value) {
	    // on fulfillment
	  }, function(reason) {
	    // on rejection
	  });
	  ```

	  Advanced Usage:
	  ---------------

	  Promises shine when abstracting away asynchronous interactions such as
	  `XMLHttpRequest`s.

	  ```js
	  function getJSON(url) {
	    return new Promise(function(resolve, reject){
	      let xhr = new XMLHttpRequest();

	      xhr.open('GET', url);
	      xhr.onreadystatechange = handler;
	      xhr.responseType = 'json';
	      xhr.setRequestHeader('Accept', 'application/json');
	      xhr.send();

	      function handler() {
	        if (this.readyState === this.DONE) {
	          if (this.status === 200) {
	            resolve(this.response);
	          } else {
	            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
	          }
	        }
	      };
	    });
	  }

	  getJSON('/posts.json').then(function(json) {
	    // on fulfillment
	  }, function(reason) {
	    // on rejection
	  });
	  ```

	  Unlike callbacks, promises are great composable primitives.

	  ```js
	  Promise.all([
	    getJSON('/posts'),
	    getJSON('/comments')
	  ]).then(function(values){
	    values[0] // => postsJSON
	    values[1] // => commentsJSON

	    return values;
	  });
	  ```

	  @class Promise
	  @param {Function} resolver
	  Useful for tooling.
	  @constructor
	*/

	var Promise$1 = function () {
	  function Promise(resolver) {
	    this[PROMISE_ID] = nextId();
	    this._result = this._state = undefined;
	    this._subscribers = [];

	    if (noop !== resolver) {
	      typeof resolver !== 'function' && needsResolver();
	      this instanceof Promise ? initializePromise(this, resolver) : needsNew();
	    }
	  }

	  /**
	  The primary way of interacting with a promise is through its `then` method,
	  which registers callbacks to receive either a promise's eventual value or the
	  reason why the promise cannot be fulfilled.
	   ```js
	  findUser().then(function(user){
	    // user is available
	  }, function(reason){
	    // user is unavailable, and you are given the reason why
	  });
	  ```
	   Chaining
	  --------
	   The return value of `then` is itself a promise.  This second, 'downstream'
	  promise is resolved with the return value of the first promise's fulfillment
	  or rejection handler, or rejected if the handler throws an exception.
	   ```js
	  findUser().then(function (user) {
	    return user.name;
	  }, function (reason) {
	    return 'default name';
	  }).then(function (userName) {
	    // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
	    // will be `'default name'`
	  });
	   findUser().then(function (user) {
	    throw new Error('Found user, but still unhappy');
	  }, function (reason) {
	    throw new Error('`findUser` rejected and we're unhappy');
	  }).then(function (value) {
	    // never reached
	  }, function (reason) {
	    // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
	    // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
	  });
	  ```
	  If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
	   ```js
	  findUser().then(function (user) {
	    throw new PedagogicalException('Upstream error');
	  }).then(function (value) {
	    // never reached
	  }).then(function (value) {
	    // never reached
	  }, function (reason) {
	    // The `PedgagocialException` is propagated all the way down to here
	  });
	  ```
	   Assimilation
	  ------------
	   Sometimes the value you want to propagate to a downstream promise can only be
	  retrieved asynchronously. This can be achieved by returning a promise in the
	  fulfillment or rejection handler. The downstream promise will then be pending
	  until the returned promise is settled. This is called *assimilation*.
	   ```js
	  findUser().then(function (user) {
	    return findCommentsByAuthor(user);
	  }).then(function (comments) {
	    // The user's comments are now available
	  });
	  ```
	   If the assimliated promise rejects, then the downstream promise will also reject.
	   ```js
	  findUser().then(function (user) {
	    return findCommentsByAuthor(user);
	  }).then(function (comments) {
	    // If `findCommentsByAuthor` fulfills, we'll have the value here
	  }, function (reason) {
	    // If `findCommentsByAuthor` rejects, we'll have the reason here
	  });
	  ```
	   Simple Example
	  --------------
	   Synchronous Example
	   ```javascript
	  let result;
	   try {
	    result = findResult();
	    // success
	  } catch(reason) {
	    // failure
	  }
	  ```
	   Errback Example
	   ```js
	  findResult(function(result, err){
	    if (err) {
	      // failure
	    } else {
	      // success
	    }
	  });
	  ```
	   Promise Example;
	   ```javascript
	  findResult().then(function(result){
	    // success
	  }, function(reason){
	    // failure
	  });
	  ```
	   Advanced Example
	  --------------
	   Synchronous Example
	   ```javascript
	  let author, books;
	   try {
	    author = findAuthor();
	    books  = findBooksByAuthor(author);
	    // success
	  } catch(reason) {
	    // failure
	  }
	  ```
	   Errback Example
	   ```js
	   function foundBooks(books) {
	   }
	   function failure(reason) {
	   }
	   findAuthor(function(author, err){
	    if (err) {
	      failure(err);
	      // failure
	    } else {
	      try {
	        findBoooksByAuthor(author, function(books, err) {
	          if (err) {
	            failure(err);
	          } else {
	            try {
	              foundBooks(books);
	            } catch(reason) {
	              failure(reason);
	            }
	          }
	        });
	      } catch(error) {
	        failure(err);
	      }
	      // success
	    }
	  });
	  ```
	   Promise Example;
	   ```javascript
	  findAuthor().
	    then(findBooksByAuthor).
	    then(function(books){
	      // found books
	  }).catch(function(reason){
	    // something went wrong
	  });
	  ```
	   @method then
	  @param {Function} onFulfilled
	  @param {Function} onRejected
	  Useful for tooling.
	  @return {Promise}
	  */

	  /**
	  `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
	  as the catch block of a try/catch statement.
	  ```js
	  function findAuthor(){
	  throw new Error('couldn't find that author');
	  }
	  // synchronous
	  try {
	  findAuthor();
	  } catch(reason) {
	  // something went wrong
	  }
	  // async with promises
	  findAuthor().catch(function(reason){
	  // something went wrong
	  });
	  ```
	  @method catch
	  @param {Function} onRejection
	  Useful for tooling.
	  @return {Promise}
	  */


	  Promise.prototype.catch = function _catch(onRejection) {
	    return this.then(null, onRejection);
	  };

	  /**
	    `finally` will be invoked regardless of the promise's fate just as native
	    try/catch/finally behaves
	  
	    Synchronous example:
	  
	    ```js
	    findAuthor() {
	      if (Math.random() > 0.5) {
	        throw new Error();
	      }
	      return new Author();
	    }
	  
	    try {
	      return findAuthor(); // succeed or fail
	    } catch(error) {
	      return findOtherAuther();
	    } finally {
	      // always runs
	      // doesn't affect the return value
	    }
	    ```
	  
	    Asynchronous example:
	  
	    ```js
	    findAuthor().catch(function(reason){
	      return findOtherAuther();
	    }).finally(function(){
	      // author was either found, or not
	    });
	    ```
	  
	    @method finally
	    @param {Function} callback
	    @return {Promise}
	  */


	  Promise.prototype.finally = function _finally(callback) {
	    var promise = this;
	    var constructor = promise.constructor;

	    if (isFunction(callback)) {
	      return promise.then(function (value) {
	        return constructor.resolve(callback()).then(function () {
	          return value;
	        });
	      }, function (reason) {
	        return constructor.resolve(callback()).then(function () {
	          throw reason;
	        });
	      });
	    }

	    return promise.then(callback, callback);
	  };

	  return Promise;
	}();

	Promise$1.prototype.then = then;
	Promise$1.all = all;
	Promise$1.race = race;
	Promise$1.resolve = resolve$1;
	Promise$1.reject = reject$1;
	Promise$1._setScheduler = setScheduler;
	Promise$1._setAsap = setAsap;
	Promise$1._asap = asap;

	/*global self*/
	function polyfill() {
	  var local = void 0;

	  if (typeof commonjsGlobal !== 'undefined') {
	    local = commonjsGlobal;
	  } else if (typeof self !== 'undefined') {
	    local = self;
	  } else {
	    try {
	      local = Function('return this')();
	    } catch (e) {
	      throw new Error('polyfill failed because global object is unavailable in this environment');
	    }
	  }

	  var P = local.Promise;

	  if (P) {
	    var promiseToString = null;
	    try {
	      promiseToString = Object.prototype.toString.call(P.resolve());
	    } catch (e) {
	      // silently ignored
	    }

	    if (promiseToString === '[object Promise]' && !P.cast) {
	      return;
	    }
	  }

	  local.Promise = Promise$1;
	}

	// Strange compat..
	Promise$1.polyfill = polyfill;
	Promise$1.Promise = Promise$1;

	return Promise$1;

	})));




	});

	var auto = es6Promise.polyfill();

	var LogLevel_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.LogLevel = void 0;
	var LogLevel;
	(function (LogLevel) {
	    LogLevel["OFF"] = "off";
	    LogLevel["ERROR"] = "error";
	    LogLevel["WARN"] = "warn";
	    LogLevel["INFO"] = "info";
	    LogLevel["DEBUG"] = "debug";
	})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));

	});

	var BaseClass_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.BaseClass = void 0;
	var BaseClass = (function () {
	    function BaseClass() {
	    }
	    Object.defineProperty(BaseClass.prototype, "className", {
	        get: function () {
	            return this.constructor.name;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    return BaseClass;
	}());
	exports.BaseClass = BaseClass;

	});

	var CoreEvent_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.CoreEvent = void 0;
	var CoreEvent = (function () {
	    function CoreEvent(type, target, data) {
	        this.timeStamp = Date.now();
	        this.data = data;
	        this.target = target;
	        this.type = type;
	    }
	    return CoreEvent;
	}());
	exports.CoreEvent = CoreEvent;

	});

	var LinkedList_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.LinkedList = void 0;
	var LinkedNode = (function () {
	    function LinkedNode(value, next) {
	        this.value = value;
	        this.next = next;
	    }
	    return LinkedNode;
	}());
	var LinkedList = (function () {
	    function LinkedList() {
	        this.head = null;
	        this.tail = null;
	    }
	    Object.defineProperty(LinkedList.prototype, "empty", {
	        get: function () {
	            return this.head == null;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    LinkedList.prototype.forEach = function (func) {
	        var node = this.head;
	        while (node) {
	            func(node.value);
	            node = node.next;
	        }
	    };
	    LinkedList.prototype.add = function (value) {
	        var node = new LinkedNode(value);
	        if (this.head == null) {
	            this.head = node;
	        }
	        else if (this.tail == null) {
	            this.head.next = this.tail = node;
	        }
	        else {
	            this.tail.next = this.tail = node;
	        }
	    };
	    LinkedList.prototype.has = function (value) {
	        var node = this.head;
	        while (node) {
	            if (node.value == value) {
	                return true;
	            }
	            node = node.next;
	        }
	        return false;
	    };
	    LinkedList.prototype.delete = function (value) {
	        var previous = null;
	        var node = this.head;
	        while (node) {
	            if (node.value == value) {
	                if (previous) {
	                    previous.next = node.next;
	                }
	                if (node == this.head) {
	                    this.head = node.next;
	                }
	                else if (node == this.tail) {
	                    this.tail = previous;
	                }
	                return true;
	            }
	            previous = node;
	            node = node.next;
	        }
	        return false;
	    };
	    LinkedList.prototype.clear = function () {
	        var node = this.head;
	        var next;
	        while (node) {
	            next = node.next;
	            node.value = node.next = null;
	            node = next;
	        }
	        this.head = this.tail = null;
	    };
	    return LinkedList;
	}());
	exports.LinkedList = LinkedList;

	});

	var MediaCapabilitiesMimeType_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.MediaCapabilitiesMimeType = void 0;
	var MediaCapabilitiesMimeType;
	(function (MediaCapabilitiesMimeType) {
	    MediaCapabilitiesMimeType["MP4_VIDEO"] = "video/mp4";
	    MediaCapabilitiesMimeType["MP4_AUDIO"] = "audio/mp4";
	    MediaCapabilitiesMimeType["HLS"] = "application/vnd.apple.mpegurl";
	    MediaCapabilitiesMimeType["DASH"] = "application/dash+xml";
	    MediaCapabilitiesMimeType["WEBM_VIDEO"] = "video/webm";
	    MediaCapabilitiesMimeType["WEBM_AUDIO"] = "audio/webm";
	    MediaCapabilitiesMimeType["TS_VIDEO"] = "video/mp2t";
	})(MediaCapabilitiesMimeType = exports.MediaCapabilitiesMimeType || (exports.MediaCapabilitiesMimeType = {}));

	});

	var MimeType = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.MimeType = void 0;

	exports.MimeType = {
	    VTT: 'text/vtt',
	    XML: 'application/ttml+xml',
	    M3U8: MediaCapabilitiesMimeType_1.MediaCapabilitiesMimeType.HLS,
	    MPD: MediaCapabilitiesMimeType_1.MediaCapabilitiesMimeType.DASH,
	    TS: MediaCapabilitiesMimeType_1.MediaCapabilitiesMimeType.TS_VIDEO,
	    MP4: MediaCapabilitiesMimeType_1.MediaCapabilitiesMimeType.MP4_VIDEO,
	    MPV: MediaCapabilitiesMimeType_1.MediaCapabilitiesMimeType.MP4_VIDEO,
	    MPA: MediaCapabilitiesMimeType_1.MediaCapabilitiesMimeType.MP4_AUDIO,
	    WEBM: MediaCapabilitiesMimeType_1.MediaCapabilitiesMimeType.WEBM_VIDEO,
	};

	});

	var Util_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Util = void 0;


	var Util = (function () {
	    function Util() {
	    }
	    Util.camelToDash = function (term) {
	        var d = "-";
	        return (term.replace(this.cdr, d).replace(this.dre, '$1-$2')).toLowerCase();
	    };
	    Util.uid8 = function () {
	        var s4 = function () {
	            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	        };
	        return s4() + s4();
	    };
	    Util.isEmpty = function (obj) {
	        return obj === null || obj === undefined ||
	            (Array.isArray(obj) && obj.length === 0) ||
	            Util.isObject(obj) && Object.keys(obj).length === 0 ||
	            Util.isString(obj) && obj === '';
	    };
	    Util.isFunction = function (obj) {
	        return typeof obj === 'function';
	    };
	    Util.isString = function (obj) {
	        return typeof obj === 'string';
	    };
	    Util.isUndefined = function (obj) {
	        return typeof obj === 'undefined';
	    };
	    Util.isNumber = function (obj) {
	        return typeof obj === 'number';
	    };
	    Util.isBoolean = function (obj) {
	        return typeof obj === 'boolean';
	    };
	    Util.isObject = function (obj) {
	        return typeof obj === 'object';
	    };
	    Util.includes = function (search, item) {
	        return search.indexOf(item) > -1;
	    };
	    Util.assign = function (tgt) {
	        var args = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            args[_i - 1] = arguments[_i];
	        }
	        return Object.assign.apply(Object, tslib_es6.__spreadArrays([tgt || {}], args));
	    };
	    Util.entries = function (obj) {
	        return Object.keys(obj).reduce(function (a, k, i) { return (a[i] = [k, obj[k]], a); }, []);
	    };
	    Util.fromEntries = function (entries) {
	        return entries.reduce(function (o, _a) {
	            var k = _a[0], v = _a[1];
	            return (o[k] = v, o);
	        }, {});
	    };
	    Util.padStart = function (str, targetLength, padString) {
	        if (padString === void 0) { padString = ' '; }
	        targetLength = targetLength | 0;
	        var len = str.length;
	        if (len > targetLength) {
	            return str;
	        }
	        targetLength = targetLength - len;
	        if (targetLength > padString.length) {
	            padString += this.repeat(padString, targetLength / padString.length);
	        }
	        return padString.slice(0, targetLength) + str;
	    };
	    Util.repeat = function (str, count) {
	        if (count === void 0) { count = 0; }
	        count = count | 0;
	        var i = 0, result = "";
	        while (i++ < count) {
	            result += str;
	        }
	        return result;
	    };
	    Util.merge = function () {
	        var args = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            args[_i] = arguments[_i];
	        }
	        var override = function (base, overrides) {
	            if (base == null) {
	                return overrides;
	            }
	            else if (overrides == null) {
	                return base;
	            }
	            Object.getOwnPropertyNames(overrides).forEach(function (key) {
	                var value = overrides[key];
	                var baseValue = base[key];
	                var type = typeof value;
	                if (type === "undefined") {
	                    return;
	                }
	                else if (baseValue == null || !Util.isObject(baseValue) || Array.isArray(value)) {
	                    base[key] = value;
	                }
	                else if (type === "object") {
	                    base[key] = override(baseValue, value);
	                }
	            });
	            return base;
	        };
	        return args.reduce(function (acc, obj) { return override(acc, obj); }, {});
	    };
	    Util.secToHms = function (seconds, max) {
	        if (max === void 0) { max = 61; }
	        if (seconds == null || isNaN(seconds)) {
	            return "00:00";
	        }
	        seconds = seconds | 0;
	        var time = this.zeroFill(seconds % 60);
	        seconds = seconds / 60 | 0;
	        time = this.zeroFill(seconds % 60) + ":" + time;
	        seconds = seconds / 60 | 0;
	        if (seconds > 0) {
	            time = this.zeroFill(seconds) + ":" + time;
	        }
	        if (max >= 3600 && time.length === 5) {
	            time = "00:" + time;
	        }
	        return time;
	    };
	    Util.msToHms = function (ms) {
	        return this.formatTime(new Date(ms), "HH:mm:ss:sss", { offset: 0 });
	    };
	    Util.zeroFill = function (time, len) {
	        if (len === void 0) { len = 2; }
	        return this.padStart(String(time), len, "0");
	    };
	    Util.hmsToSec = function (timeCode, framerate) {
	        if (framerate === void 0) { framerate = 30; }
	        if (!timeCode) {
	            return NaN;
	        }
	        var pieces = timeCode.split(":");
	        var ms = 0;
	        if (pieces.length === 4) {
	            ms = parseInt(pieces.pop()) / framerate;
	        }
	        else if (pieces.length === 3) {
	            pieces[2] = pieces[2].replace(",", ".");
	            if (pieces[2].indexOf(".") !== -1) {
	                var parts = pieces[2].split(".");
	                if ((parts != null ? parts.length : void 0) > 1) {
	                    pieces[2] = parts[0];
	                    ms = parseInt(parts[1]) / 1000;
	                }
	            }
	        }
	        var time = parseInt(pieces.pop());
	        while (pieces.length > 0) {
	            time += Math.pow(60, pieces.length) * parseInt(pieces.shift());
	        }
	        return time + ms;
	    };
	    Util.formatTime = function (date, format, tz) {
	        if (format === void 0) { format = "h:mm:ss A"; }
	        if (tz === void 0) { tz = { timezone: "", offset: -((new Date()).getTimezoneOffset() / 60) }; }
	        if ((tz.offset != null) && tz.offset !== 0) {
	            date = new Date(date.getTime() + Math.round(tz.offset * 60 * 60 * 1000));
	        }
	        if (isNaN(date.getTime())) {
	            return "";
	        }
	        var hours = date.getUTCHours();
	        var minutes = date.getUTCMinutes();
	        var seconds = date.getUTCSeconds();
	        var milliseconds = date.getUTCMilliseconds();
	        var twelve = hours % 12 || 12;
	        var a = hours < 12 ? "am" : "pm";
	        var replace = {
	            hh: this.zeroFill(twelve),
	            h: twelve,
	            HH: this.zeroFill(hours),
	            H: hours,
	            mm: this.zeroFill(minutes),
	            m: minutes,
	            sss: this.zeroFill(milliseconds, 3),
	            ss: this.zeroFill(seconds),
	            s: seconds,
	            a: a,
	            A: a.toUpperCase(),
	            z: tz.timezone
	        };
	        for (var key in replace) {
	            format = format.replace(key, replace[key]);
	        }
	        return format;
	    };
	    Util.findIndex = function (arr, predicate) {
	        if (!Util.isFunction(predicate)) {
	            throw new TypeError('predicate must be a function');
	        }
	        var len = arr.length >>> 0;
	        var i = 0;
	        while (i < len) {
	            if (predicate(arr[i], i, arr)) {
	                return i;
	            }
	            i++;
	        }
	        return -1;
	    };
	    Util.find = function (arr, predicate) {
	        if (!Util.isFunction(predicate)) {
	            throw new TypeError('predicate must be a function');
	        }
	        var index = this.findIndex(arr, predicate);
	        return (index > -1) ? arr[index] : undefined;
	    };
	    Util.template = function (input, context, open, close) {
	        if (open === void 0) { open = "{{"; }
	        if (close === void 0) { close = "}}"; }
	        if (!input) {
	            return input;
	        }
	        var regex = new RegExp(open + "((?:(?!(" + open + "|" + close + ")).)+)" + close, "g");
	        return input.replace(regex, function (match, token) { return (!Util.isUndefined(context[token])) ? context[token] : match; });
	    };
	    Util.toArray = function (arr) {
	        return Array.prototype.slice.call(arr);
	    };
	    Util.forEach = function (list, func) {
	        if (!list || !list.length || !Util.isFunction(func)) {
	            return;
	        }
	        for (var i = 0, len = list.length; i < len; i++) {
	            func(list[i], i, list);
	        }
	    };
	    Util.debounce = function (func, delay) {
	        var timeout;
	        return function () {
	            clearTimeout(timeout);
	            timeout = setTimeout(func, delay);
	        };
	    };
	    Util.clampValue = function (value, min, max) {
	        return Math.max(min, Math.min(max, value));
	    };
	    Util.inRange = function (value, lower, upper) {
	        return Util.isNumber(value) && value >= lower && value <= upper;
	    };
	    Util.mapToRange = function (value, fromMin, fromMax, toMin, toMax) {
	        if (toMin === void 0) { toMin = 0; }
	        if (toMax === void 0) { toMax = 1; }
	        return (value - fromMin) * (toMax - toMin) / (fromMax - fromMin) + toMin;
	    };
	    Util.base64DecodeUint8Array = function (input) {
	        var raw = atob(input);
	        var rawLength = raw.length;
	        var array = new Uint8Array(new ArrayBuffer(rawLength));
	        for (var i = 0; i < rawLength; i++) {
	            array[i] = raw.charCodeAt(i);
	        }
	        return array;
	    };
	    Util.base64EncodeUint8Array = function (input) {
	        var str = String.fromCharCode.apply(null, input);
	        return btoa(str);
	    };
	    Util.xmlToJson = function (xml) {
	        var obj = {};
	        if (xml.nodeType === 1 && xml.attributes.length > 0) {
	            for (var j = 0, k = xml.attributes.length; j < k; j++) {
	                var attribute = xml.attributes.item(j);
	                obj[attribute.nodeName] = attribute.nodeValue;
	            }
	        }
	        else if (xml.nodeType === 3) {
	            obj = xml.nodeValue;
	        }
	        if (xml.nodeName === 'p') {
	            obj.text = '';
	            xml.childNodes.forEach(function (node) {
	                if (node.nodeName === 'metadata') {
	                    return;
	                }
	                var text = (new XMLSerializer()).serializeToString(node);
	                if (node.nodeType === 1) {
	                    obj.text += node.tagName === 'br' ? '\n' : text;
	                }
	                if (node.nodeType === 3) {
	                    obj.text += text;
	                }
	            });
	        }
	        if (xml.hasChildNodes()) {
	            for (var i = 0, h = xml.childNodes.length; i < h; i++) {
	                var item = xml.childNodes.item(i), nodeName = item.nodeName;
	                if (Util.isUndefined(obj[nodeName])) {
	                    obj[nodeName] = this.xmlToJson(item);
	                    continue;
	                }
	                if (Util.isUndefined(obj[nodeName].push)) {
	                    var old = obj[nodeName];
	                    obj[nodeName] = [];
	                    obj[nodeName].push(old);
	                }
	                obj[nodeName].push(this.xmlToJson(item));
	            }
	        }
	        return obj;
	    };
	    Util.getNumLines = function (text) {
	        return text && ((text.match(/\n/g) || []).length + 1);
	    };
	    Util.roundTo = function (num, len) {
	        return Math.round(num * Math.pow(10, len)) / Math.pow(10, len);
	    };
	    Util.makeUrl = function (ssl, location) {
	        return (ssl ? 'https:' : 'http:') + '//' + location;
	    };
	    Util.parseLanguageTag = function (tag) {
	        if (tag === void 0) { tag = ''; }
	        var regex = /^([a-zA-Z]{2,3})(?:[_-]+([a-zA-Z]{3})(?=$|[_-]+))?(?:[_-]+([a-zA-Z]{4})(?=$|[_-]+))?(?:[_-]+([a-zA-Z]{2}|[0-9]{3})(?=$|[_-]+))?/;
	        var match = tag.match(regex) || [];
	        return {
	            tag: tag,
	            language: match[1] || '',
	            extended: match[2] || '',
	            script: match[3] || '',
	            region: match[4] || '',
	            toString: function () {
	                return this.tag;
	            }
	        };
	    };
	    Util.getFileExtension = function (uri) {
	        return uri.replace(/\?.*/, '').replace(/#.*/, '').split('.').pop();
	    };
	    Util.getMimeType = function (uri) {
	        if (!uri) {
	            return '';
	        }
	        var ext = Util.getFileExtension(uri).toUpperCase();
	        return MimeType.MimeType[ext];
	    };
	    Util.dre = /([a-z\d])([A-Z])/g;
	    Util.cdr = /\W+/g;
	    return Util;
	}());
	exports.Util = Util;

	});

	var Emitter_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Emitter = void 0;





	var Emitter = (function (_super) {
	    tslib_es6.__extends(Emitter, _super);
	    function Emitter(options) {
	        var _this = _super.call(this) || this;
	        _this.opts = options || {};
	        _this.eventMap = {};
	        var o = _this.opts, e;
	        for (var q in o) {
	            if (Util_1.Util.isFunction(o[q]) && /^on[A-Z]/.test(q)) {
	                e = q.charAt(2).toLowerCase() + q.substring(3);
	                _this.on(e, o[q]);
	                delete _this.opts[q];
	            }
	        }
	        return _this;
	    }
	    Emitter.prototype.destroy = function () {
	        var q;
	        if (this.opts) {
	            for (q in this.opts) {
	                delete this.opts[q];
	            }
	            this.opts = null;
	        }
	        this.offAll(null);
	        if (this.eventMap) {
	            for (q in this.eventMap) {
	                delete this.eventMap[q];
	            }
	            this.eventMap = null;
	        }
	    };
	    Emitter.prototype.on = function (name, func) {
	        if (!this.eventMap || !name || !Util_1.Util.isFunction(func)) {
	            return;
	        }
	        var handlers = this.eventMap[name] || (this.eventMap[name] = new LinkedList_1.LinkedList());
	        if (handlers.has(func)) {
	            return;
	        }
	        handlers.add(func);
	    };
	    Emitter.prototype.once = function (name, func) {
	        var _this = this;
	        if (!this.eventMap || !name || !Util_1.Util.isFunction(func)) {
	            return;
	        }
	        var handler = function (event) {
	            _this.off(name, handler);
	            func(event);
	        };
	        this.on(name, handler);
	    };
	    Emitter.prototype.off = function (name, func) {
	        !func && this.offAll(name);
	        func && this.remove(name, func);
	    };
	    Emitter.prototype.offAll = function (name) {
	        if (!this.eventMap) {
	            return;
	        }
	        var map = this.eventMap, q;
	        if (name) {
	            this.remove(name, null);
	            return;
	        }
	        for (q in map) {
	            this.remove(q, null);
	        }
	    };
	    Emitter.prototype.hasListenerFor = function (name) {
	        return !!(this.eventMap && this.eventMap[name] && !this.eventMap[name].empty);
	    };
	    Emitter.prototype.emit = function (name, data) {
	        if (data === void 0) { data = null; }
	        var e = new CoreEvent_1.CoreEvent(name, this, data);
	        this.dispatchEvt(e);
	    };
	    Emitter.prototype.dispatchEvt = function (e) {
	        if (!this.eventMap || !this.eventMap[e.type]) {
	            return;
	        }
	        this.eventMap[e.type].forEach(function (h) { return h(e); });
	    };
	    Emitter.prototype.remove = function (name, func) {
	        if (func === void 0) { func = null; }
	        if (!this.eventMap || !this.eventMap[name]) {
	            return;
	        }
	        if (!func) {
	            this.eventMap[name].clear();
	        }
	        else {
	            this.eventMap[name].delete(func);
	        }
	    };
	    return Emitter;
	}(BaseClass_1.BaseClass));
	exports.Emitter = Emitter;

	});

	var Logger_1 = createCommonjsModule(function (module, exports) {
	var _a;
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Logger = void 0;




	var Levels = (_a = {},
	    _a[LogLevel_1.LogLevel.OFF] = 0,
	    _a[LogLevel_1.LogLevel.ERROR] = 100,
	    _a[LogLevel_1.LogLevel.WARN] = 200,
	    _a[LogLevel_1.LogLevel.INFO] = 300,
	    _a[LogLevel_1.LogLevel.DEBUG] = 400,
	    _a);
	var Logger = (function (_super) {
	    tslib_es6.__extends(Logger, _super);
	    function Logger(opts) {
	        var _this = _super.call(this, opts) || this;
	        _this.useConsole = false;
	        _this.useConsole = Util_1.Util.isObject(console);
	        _this.id = opts.id || Util_1.Util.uid8();
	        _this.tzero = Date.now();
	        _this.logLevel = Util_1.Util.isEmpty(_this.opts.logLevel) ? LogLevel_1.LogLevel.OFF : _this.opts.logLevel;
	        return _this;
	    }
	    Logger.error = function (e) {
	        console && console.error(e);
	    };
	    Logger.warn = function (m) {
	        console && console.warn(m);
	    };
	    Logger.log = function (m) {
	        console && console.log(m);
	    };
	    Object.defineProperty(Logger.prototype, "logLevel", {
	        get: function () {
	            return this.pLogLevel;
	        },
	        set: function (level) {
	            this.pLogLevel = level;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Logger.prototype.assert = function (expression, label) {
	        if (!expression) {
	            this.error("Assertion failed! - \"" + (label || '') + "\"");
	        }
	    };
	    Logger.prototype.log = function (logLevel) {
	        var items = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            items[_i - 1] = arguments[_i];
	        }
	        for (var i = 0, n = items.length; i < n; i++) {
	            this.emit(Logger.LOG_EVENT, this.assembleEvent(items[i], logLevel));
	        }
	        if (!this.shouldLog(logLevel)) {
	            return;
	        }
	        items.unshift(this.getStamp());
	        console.log.apply(console, items);
	    };
	    Logger.prototype.dir = function (logLevel, obj, label) {
	        var lbl = label || 'Unnamed Object';
	        this.emit(Logger.LOG_EVENT, this.assembleEvent(obj, logLevel, lbl));
	        if (!this.shouldLog(logLevel)) {
	            return;
	        }
	        console.log(this.getStamp() + (" Object: " + lbl));
	        console.dir(obj);
	    };
	    Logger.prototype.error = function (msg) {
	        this.emit(Logger.LOG_EVENT, this.assembleEvent(msg, LogLevel_1.LogLevel.ERROR));
	        if (!this.shouldLog(LogLevel_1.LogLevel.ERROR)) {
	            return;
	        }
	        console.error(this.getStamp() + msg);
	    };
	    Logger.prototype.warn = function (msg) {
	        this.emit(Logger.LOG_EVENT, this.assembleEvent(msg, LogLevel_1.LogLevel.WARN));
	        if (!this.shouldLog(LogLevel_1.LogLevel.WARN)) {
	            return;
	        }
	        console.warn(this.getStamp() + msg);
	    };
	    Logger.prototype.assembleEvent = function (item, level, label) {
	        if (label === void 0) { label = null; }
	        return {
	            item: item,
	            id: this.id,
	            level: level,
	            label: label
	        };
	    };
	    Logger.prototype.shouldLog = function (level) {
	        return this.useConsole && Levels[this.pLogLevel] >= Levels[level];
	    };
	    Logger.prototype.getStamp = function () {
	        return "[" + (this.id + ']  ' + Util_1.Util.msToHms(Date.now() - this.tzero)) + " > ";
	    };
	    Logger.LOG_EVENT = 'logEvent';
	    return Logger;
	}(Emitter_1.Emitter));
	exports.Logger = Logger;

	});

	var ServiceName_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ServiceName = void 0;
	var ServiceName;
	(function (ServiceName) {
	    ServiceName["ImaAd"] = "ImaAd";
	    ServiceName["DaiAd"] = "DaiAd";
	    ServiceName["System"] = "System";
	    ServiceName["MediaCapabilities"] = "MediaCapabilities";
	    ServiceName["Logging"] = "Logging";
	    ServiceName["Tracking"] = "Tracking";
	    ServiceName["BuildInfo"] = "BuildInfo";
	    ServiceName["TrackingService"] = "TrackingService";
	    ServiceName["AutoplayCapabilities"] = "AutoplayCapabilities";
	})(ServiceName = exports.ServiceName || (exports.ServiceName = {}));

	});

	var MvcMessages_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.MvcMessages = void 0;
	var MvcMessages = (function () {
	    function MvcMessages() {
	    }
	    return MvcMessages;
	}());
	exports.MvcMessages = MvcMessages;

	});

	var ServiceContainer_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ServiceContainer = void 0;


	var ServiceContainer = (function () {
	    function ServiceContainer(key) {
	        if (ServiceContainer.serviceContainerMap[key]) {
	            Logger_1.Logger.error(MvcMessages_1.MvcMessages.ERROR_KEY_EXISTS.replace('$ACTOR_NAME$', 'ServiceContainer'));
	            return;
	        }
	        this.multiCoreKey = key;
	        this.serviceMap = {};
	    }
	    ServiceContainer.getInstance = function (key) {
	        if (!key)
	            return null;
	        if (this.serviceContainerMap[key] == null) {
	            this.serviceContainerMap[key] = new ServiceContainer(key);
	        }
	        return this.serviceContainerMap[key];
	    };
	    ServiceContainer.removeServiceContainer = function (key) {
	        this.serviceContainerMap[key] && this.serviceContainerMap[key].destroy();
	        delete this.serviceContainerMap[key];
	    };
	    ServiceContainer.prototype.destroy = function () {
	        for (var q in this.serviceMap) {
	            this.removeService(q);
	        }
	        this.serviceMap = null;
	    };
	    ServiceContainer.prototype.registerService = function (service) {
	        this.serviceMap[service.name] = service;
	        service.onRegister(this.multiCoreKey);
	    };
	    ServiceContainer.prototype.retrieveService = function (serviceName) {
	        return this.serviceMap[serviceName] || null;
	    };
	    ServiceContainer.prototype.hasService = function (serviceName) {
	        return this.serviceMap[serviceName] != null;
	    };
	    ServiceContainer.prototype.removeService = function (serviceName) {
	        if (this.serviceMap[serviceName]) {
	            this.serviceMap[serviceName].destroy();
	        }
	        delete this.serviceMap[serviceName];
	    };
	    ServiceContainer.serviceContainerMap = {};
	    return ServiceContainer;
	}());
	exports.ServiceContainer = ServiceContainer;

	});

	var Observer_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Observer = void 0;
	var Observer = (function () {
	    function Observer(notifyMethod, notifyContext) {
	        this.setNotifyMethod(notifyMethod);
	        this.setNotifyContext(notifyContext);
	    }
	    Observer.prototype.destroy = function () {
	        this.context = null;
	        this.notify = null;
	    };
	    Observer.prototype.setNotifyMethod = function (notifyMethod) {
	        this.notify = notifyMethod;
	    };
	    Observer.prototype.setNotifyContext = function (notifyContext) {
	        this.context = notifyContext;
	    };
	    Observer.prototype.getNotifyMethod = function () {
	        return this.notify;
	    };
	    Observer.prototype.getNotifyContext = function () {
	        return this.context;
	    };
	    Observer.prototype.notifyObserver = function (notification) {
	        this.getNotifyMethod().call(this.getNotifyContext(), notification);
	    };
	    Observer.prototype.compareNotifyContext = function (object) {
	        return object === this.context;
	    };
	    return Observer;
	}());
	exports.Observer = Observer;

	});

	var View_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.View = void 0;



	var View = (function () {
	    function View(key) {
	        if (View.viewMap[key] != null) {
	            Logger_1.Logger.error(MvcMessages_1.MvcMessages.ERROR_KEY_EXISTS.replace('$ACTOR_NAME$', 'View'));
	            return;
	        }
	        this.multiCoreKey = key;
	        this.mediatorMap = {};
	        this.observerMap = {};
	        View.viewMap[this.multiCoreKey] = this;
	        this.initializeView();
	    }
	    View.getInstance = function (key) {
	        if (!key)
	            return null;
	        if (!this.viewMap[key]) {
	            this.viewMap[key] = new View(key);
	        }
	        return this.viewMap[key];
	    };
	    View.removeView = function (key) {
	        this.viewMap[key] && this.viewMap[key].destroy();
	        delete this.viewMap[key];
	    };
	    View.prototype.destroy = function () {
	        for (var q in this.mediatorMap) {
	            this.removeMediator(this.mediatorMap[q].name);
	        }
	        this.mediatorMap = null;
	        this.observerMap = null;
	    };
	    View.prototype.registerObserver = function (notificationName, observer) {
	        if (this.observerMap[notificationName] != null) {
	            this.observerMap[notificationName].push(observer);
	        }
	        else {
	            this.observerMap[notificationName] = [observer];
	        }
	    };
	    View.prototype.notifyObservers = function (notification) {
	        var i, n;
	        if (this.observerMap[notification.name] != null) {
	            var observers_ref = this.observerMap[notification.name], observers = [], observer = void 0;
	            for (i = 0, n = observers_ref.length; i < n; i++) {
	                observer = observers_ref[i];
	                observers.push(observer);
	            }
	            for (i = 0, n = observers.length; i < n; i++) {
	                observer = observers[i];
	                observer.notifyObserver(notification);
	            }
	        }
	    };
	    View.prototype.removeObserver = function (notificationName, notifyContext) {
	        if (!this.observerMap) {
	            return;
	        }
	        var observers = this.observerMap[notificationName], i = observers.length;
	        while (i--) {
	            if (observers[i].compareNotifyContext(notifyContext) === true) {
	                observers.splice(i, 1);
	                break;
	            }
	        }
	        if (observers.length == 0) {
	            delete this.observerMap[notificationName];
	        }
	    };
	    View.prototype.registerMediator = function (mediator) {
	        var name = mediator.name, interests, i, n, obs;
	        if (this.mediatorMap[name])
	            return;
	        mediator.initializeNotifier(this.multiCoreKey);
	        this.mediatorMap[name] = mediator;
	        interests = mediator.listNotificationInterests();
	        if (interests.length > 0) {
	            obs = new Observer_1.Observer(mediator.handleNotification, mediator);
	            for (i = 0, n = interests.length; i < n; i++) {
	                this.registerObserver(interests[i], obs);
	            }
	        }
	        mediator.onRegister();
	    };
	    View.prototype.retrieveMediator = function (mediatorName) {
	        return this.mediatorMap[mediatorName];
	    };
	    View.prototype.removeMediator = function (mediatorName) {
	        var mediator = this.mediatorMap[mediatorName], interests, i;
	        if (mediator) {
	            interests = mediator.listNotificationInterests();
	            i = interests.length;
	            while (i--) {
	                this.removeObserver(interests[i], mediator);
	            }
	            delete this.mediatorMap[mediatorName];
	            mediator.onRemove();
	        }
	    };
	    View.prototype.hasMediator = function (mediatorName) {
	        return this.mediatorMap[mediatorName] != null;
	    };
	    View.prototype.initializeView = function () {
	    };
	    View.viewMap = {};
	    return View;
	}());
	exports.View = View;

	});

	var Controller_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Controller = void 0;




	var Controller = (function () {
	    function Controller(key) {
	        if (Controller.controllerMap[key]) {
	            Logger_1.Logger.error(MvcMessages_1.MvcMessages.ERROR_KEY_EXISTS.replace('$ACTOR_NAME$', 'Controller'));
	            return;
	        }
	        this.multiCoreKey = key;
	        Controller.controllerMap[this.multiCoreKey] = this;
	        this.commandMap = {};
	        this.view = null;
	        this.initializeController();
	    }
	    Controller.getInstance = function (key) {
	        if (!key)
	            return null;
	        if (!this.controllerMap[key]) {
	            this.controllerMap[key] = new Controller(key);
	        }
	        return this.controllerMap[key];
	    };
	    Controller.removeController = function (key) {
	        this.controllerMap[key] && this.controllerMap[key].destroy();
	        delete this.controllerMap[key];
	    };
	    Controller.prototype.destroy = function () {
	        for (var q in this.commandMap) {
	            this.removeCommand(q);
	        }
	        this.commandMap = null;
	        this.view = null;
	    };
	    Controller.prototype.initializeController = function () {
	        this.view = View_1.View.getInstance(this.multiCoreKey);
	    };
	    Controller.prototype.executeCommand = function (notification) {
	        var commandClassRef = this.commandMap[notification.name];
	        if (!commandClassRef)
	            return;
	        var commandInstance = new commandClassRef();
	        commandInstance.initializeNotifier(this.multiCoreKey);
	        commandInstance.execute(notification);
	    };
	    Controller.prototype.registerCommand = function (notificationName, commandClassRef) {
	        if (!this.commandMap[notificationName]) {
	            this.view.registerObserver(notificationName, new Observer_1.Observer(this.executeCommand, this));
	        }
	        this.commandMap[notificationName] = commandClassRef;
	    };
	    Controller.prototype.hasCommand = function (notificationName) {
	        return !!this.commandMap[notificationName];
	    };
	    Controller.prototype.removeCommand = function (notificationName) {
	        if (this.hasCommand(notificationName)) {
	            this.view.removeObserver(notificationName, this);
	            this.commandMap[notificationName] = null;
	        }
	    };
	    Controller.controllerMap = {};
	    return Controller;
	}());
	exports.Controller = Controller;

	});

	var Model_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Model = void 0;


	var Model = (function () {
	    function Model(key) {
	        this.proxyMap = null;
	        if (Model.modelMap[key]) {
	            Logger_1.Logger.error(MvcMessages_1.MvcMessages.ERROR_KEY_EXISTS.replace('$ACTOR_NAME$', 'Model'));
	            return;
	        }
	        this.multiCoreKey = key;
	        Model.modelMap[key] = this;
	        this.proxyMap = {};
	        this.initializeModel();
	    }
	    Model.getInstance = function (key) {
	        if (!key)
	            return null;
	        if (this.modelMap[key] == null) {
	            this.modelMap[key] = new Model(key);
	        }
	        return this.modelMap[key];
	    };
	    Model.removeModel = function (key) {
	        this.modelMap[key] && this.modelMap[key].destroy();
	        delete this.modelMap[key];
	    };
	    Model.prototype.destroy = function () {
	        for (var q in this.proxyMap) {
	            this.removeProxy(q);
	        }
	        this.proxyMap = null;
	    };
	    Model.prototype.initializeModel = function () {
	    };
	    Model.prototype.registerProxy = function (proxy) {
	        this.proxyMap[proxy.name] = proxy;
	        proxy.initializeNotifier(this.multiCoreKey);
	        proxy.onRegister();
	    };
	    Model.prototype.retrieveProxy = function (proxyName) {
	        return this.proxyMap[proxyName] || null;
	    };
	    Model.prototype.hasProxy = function (proxyName) {
	        return this.proxyMap[proxyName] != null;
	    };
	    Model.prototype.removeProxy = function (proxyName) {
	        var proxy = this.proxyMap[proxyName];
	        if (proxy) {
	            proxy.onRemove();
	            this.proxyMap[proxyName] = null;
	        }
	    };
	    Model.modelMap = {};
	    return Model;
	}());
	exports.Model = Model;

	});

	var Notification_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Notification = void 0;
	var Notification = (function () {
	    function Notification(name, body, type) {
	        this.pName = name;
	        this.pBody = body;
	        this.pType = type;
	    }
	    Object.defineProperty(Notification.prototype, "name", {
	        get: function () {
	            return this.pName || null;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(Notification.prototype, "body", {
	        get: function () {
	            return this.pBody || null;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(Notification.prototype, "type", {
	        get: function () {
	            return this.pType || null;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Notification.prototype.toString = function () {
	        var bdy = "\nBody: " + (this.pBody == null ? 'null' : JSON.stringify(this.body)), typ = "\nType: " + (this.pType == null ? 'null' : this.type);
	        return "Notification Name: " + (this.name + bdy + typ);
	    };
	    return Notification;
	}());
	exports.Notification = Notification;

	});

	var Facade_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Facade = void 0;








	var Facade = (function () {
	    function Facade(key, commandMap) {
	        this.model = null;
	        this.view = null;
	        this.controller = null;
	        this.serviceContainer = null;
	        this.initialized = false;
	        this.multiCoreKey = key;
	        this.initializeFacade();
	        this.registerCommands(commandMap);
	    }
	    Facade.removeCore = function (key) {
	        if (!this.facadeMap[key]) {
	            return;
	        }
	        Model_1.Model.removeModel(key);
	        View_1.View.removeView(key);
	        Controller_1.Controller.removeController(key);
	        ServiceContainer_1.ServiceContainer.removeServiceContainer(key);
	        this.facadeMap[key].destroy();
	        delete this.facadeMap[key];
	    };
	    Facade.hasCore = function (key) {
	        return Facade.facadeMap[key] != null;
	    };
	    Facade.getInstance = function (key) {
	        if (!key) {
	            Logger_1.Logger.error(MvcMessages_1.MvcMessages.ERROR_NO_KEY);
	            return null;
	        }
	        return this.facadeMap[key];
	    };
	    Facade.createFacade = function (key, commandMap) {
	        if (!key) {
	            Logger_1.Logger.error(MvcMessages_1.MvcMessages.ERROR_NO_KEY);
	            return null;
	        }
	        if (!this.facadeMap[key]) {
	            this.facadeMap[key] = new Facade(key, commandMap);
	        }
	        else {
	            Logger_1.Logger.warn("Not creating facade - key \"" + key + "\" already exists!");
	        }
	        return this.facadeMap[key];
	    };
	    Facade.prototype.destroy = function () {
	        this.model = null;
	        this.view = null;
	        this.controller = null;
	        this.serviceContainer = null;
	    };
	    Object.defineProperty(Facade.prototype, "key", {
	        get: function () {
	            return this.multiCoreKey;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(Facade.prototype, "appId", {
	        get: function () {
	            return this.multiCoreKey;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(Facade.prototype, "logger", {
	        get: function () {
	            return this.retrieveService(ServiceName_1.ServiceName.Logging).logger;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Facade.prototype.log = function () {
	        var args = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            args[_i] = arguments[_i];
	        }
	        this.logger.log.apply(this.logger, args);
	    };
	    Facade.prototype.registerCommand = function (notificationName, commandClassRef) {
	        this.controller.registerCommand(notificationName, commandClassRef);
	    };
	    Facade.prototype.removeCommand = function (notificationName) {
	        this.controller.removeCommand(notificationName);
	    };
	    Facade.prototype.hasCommand = function (notificationName) {
	        return this.controller.hasCommand(notificationName);
	    };
	    Facade.prototype.registerProxy = function (proxy) {
	        this.model.registerProxy(proxy);
	    };
	    Facade.prototype.retrieveProxy = function (proxyName) {
	        return this.model ? this.model.retrieveProxy(proxyName) : null;
	    };
	    Facade.prototype.removeProxy = function (proxyName) {
	        this.model && this.model.removeProxy(proxyName);
	    };
	    Facade.prototype.hasProxy = function (proxyName) {
	        return this.model.hasProxy(proxyName);
	    };
	    Facade.prototype.registerMediator = function (mediator) {
	        this.view.registerMediator(mediator);
	    };
	    Facade.prototype.retrieveMediator = function (mediatorName) {
	        return this.view ? this.view.retrieveMediator(mediatorName) : null;
	    };
	    Facade.prototype.removeMediator = function (mediatorName) {
	        this.view && this.view.removeMediator(mediatorName);
	    };
	    Facade.prototype.hasMediator = function (mediatorName) {
	        return this.view.hasMediator(mediatorName);
	    };
	    Facade.prototype.registerService = function (service) {
	        this.serviceContainer.registerService(service);
	    };
	    Facade.prototype.retrieveService = function (serviceName) {
	        return this.serviceContainer ? this.serviceContainer.retrieveService(serviceName) : null;
	    };
	    Facade.prototype.removeService = function (serviceName) {
	        this.model && this.serviceContainer.removeService(serviceName);
	    };
	    Facade.prototype.hasService = function (serviceName) {
	        return this.serviceContainer.hasService(serviceName);
	    };
	    Facade.prototype.registerGlobalServices = function (svcCollection) {
	        for (var s in svcCollection) {
	            this.registerService(svcCollection[s]);
	        }
	    };
	    Facade.prototype.sendNotification = function (name, param1, param2) {
	        var notification;
	        if (typeof param1 === 'string') {
	            notification = new Notification_1.Notification(name, {}, param1);
	        }
	        else {
	            notification = new Notification_1.Notification(name, param1, param2);
	        }
	        this.notifyObservers(notification);
	    };
	    Facade.prototype.notifyObservers = function (notification) {
	        this.view != null && this.view.notifyObservers(notification);
	    };
	    Facade.prototype.registerCommands = function (map) {
	        if (!map) {
	            return;
	        }
	        for (var q in map) {
	            !!map[q] && this.registerCommand(q, map[q]);
	        }
	    };
	    Facade.prototype.initializeServiceContainer = function () {
	        this.serviceContainer = ServiceContainer_1.ServiceContainer.getInstance(this.multiCoreKey);
	    };
	    Facade.prototype.initializeController = function () {
	        this.controller = Controller_1.Controller.getInstance(this.multiCoreKey);
	    };
	    Facade.prototype.initializeModel = function () {
	        this.model = Model_1.Model.getInstance(this.multiCoreKey);
	    };
	    Facade.prototype.initializeView = function () {
	        this.view = View_1.View.getInstance(this.multiCoreKey);
	    };
	    Facade.prototype.initializeFacade = function () {
	        if (this.initialized) {
	            Logger_1.Logger.error('Unexpected Condition: Facade already initialized');
	            return;
	        }
	        this.initializeModel();
	        this.initializeController();
	        this.initializeView();
	        this.initializeServiceContainer();
	        this.initialized = true;
	    };
	    Facade.facadeMap = {};
	    return Facade;
	}());
	exports.Facade = Facade;

	});

	var ServiceBase_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ServiceBase = void 0;


	var ServiceBase = (function () {
	    function ServiceBase(name) {
	        this.pName = name;
	    }
	    Object.defineProperty(ServiceBase.prototype, "name", {
	        get: function () {
	            return this.pName;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    ServiceBase.prototype.destroy = function () {
	    };
	    ServiceBase.prototype.onRegister = function (key) {
	        this.facadeKey = key;
	    };
	    ServiceBase.prototype.getLogger = function () {
	        var logSvc = this.getService(ServiceName_1.ServiceName.Logging);
	        return logSvc.logger;
	    };
	    ServiceBase.prototype.getService = function (name) {
	        return Facade_1.Facade.getInstance(this.facadeKey).retrieveService(name);
	    };
	    return ServiceBase;
	}());
	exports.ServiceBase = ServiceBase;

	});

	var BuildInfoService_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.BuildInfoService = void 0;


	var BuildInfoService = (function (_super) {
	    tslib_es6.__extends(BuildInfoService, _super);
	    function BuildInfoService(name, buildInfo) {
	        var _this = _super.call(this, name) || this;
	        _this.pBuildInfo = buildInfo;
	        return _this;
	    }
	    BuildInfoService.getInstance = function (name, info) {
	        if (!this.instance) {
	            this.instance = new BuildInfoService(name, info);
	        }
	        return this.instance;
	    };
	    Object.defineProperty(BuildInfoService.prototype, "env", {
	        get: function () {
	            return this.pBuildInfo.env;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(BuildInfoService.prototype, "playerName", {
	        get: function () {
	            return this.pBuildInfo.playerName;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(BuildInfoService.prototype, "playerVersion", {
	        get: function () {
	            return this.pBuildInfo.playerVersion;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(BuildInfoService.prototype, "buildTime", {
	        get: function () {
	            return this.pBuildInfo.buildTime;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    BuildInfoService.prototype.toObject = function () {
	        return {
	            env: this.pBuildInfo.env,
	            playerName: this.pBuildInfo.playerName,
	            playerVersion: this.pBuildInfo.playerVersion,
	            buildTime: this.pBuildInfo.buildTime
	        };
	    };
	    return BuildInfoService;
	}(ServiceBase_1.ServiceBase));
	exports.BuildInfoService = BuildInfoService;

	});

	var MediaCapabilitiesService_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.MediaCapabilitiesService = void 0;


	var MediaCapabilitiesService = (function (_super) {
	    tslib_es6.__extends(MediaCapabilitiesService, _super);
	    function MediaCapabilitiesService(name, mediaCapabilities) {
	        var _this = _super.call(this, name) || this;
	        _this.mediaCaps = mediaCapabilities;
	        return _this;
	    }
	    MediaCapabilitiesService.getInstance = function (name, mcInstance) {
	        if (!this.instance) {
	            this.instance = new MediaCapabilitiesService(name, mcInstance);
	        }
	        return this.instance;
	    };
	    Object.defineProperty(MediaCapabilitiesService.prototype, "capabilities", {
	        get: function () {
	            return this.mediaCaps.capabilities;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    return MediaCapabilitiesService;
	}(ServiceBase_1.ServiceBase));
	exports.MediaCapabilitiesService = MediaCapabilitiesService;

	});

	var Device_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Device = void 0;
	var Device;
	(function (Device) {
	    Device["DESKTOP"] = "Desktop";
	    Device["ANDROID_PHONE"] = "Android Phone";
	    Device["WINDOWS_PHONE"] = "Windows Phone";
	    Device["IPHONE"] = "iPhone";
	    Device["IPOD"] = "iPod";
	    Device["IPAD"] = "iPad";
	    Device["KINDLE"] = "Kindle";
	    Device["TABLET"] = "Tablet";
	    Device["MOBILE"] = "Mobile";
	    Device["EMBEDDED"] = "Embedded";
	    Device["LG_SMART_TV"] = "LG Smart Tv";
	    Device["VIZIO_SMART_TV"] = "Vizio Smart Tv";
	    Device["SAMSUNG_SMART_TV"] = "Samsung Smart Tv";
	    Device["COMCAST_X1"] = "Comcast X1";
	    Device["XBOX_ONE"] = "Xbox One";
	    Device["UNKNOWN"] = "UNKNOWN";
	})(Device = exports.Device || (exports.Device = {}));

	});

	var Os_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Os = void 0;
	var Os;
	(function (Os) {
	    Os["OSX"] = "OS X";
	    Os["WINDOWS"] = "Windows";
	    Os["WINDOWS7"] = "Windows 7";
	    Os["WINDOWS8"] = "Windows 8";
	    Os["WINDOWS10"] = "Windows 10";
	    Os["WINDOWS_VISTA"] = "Windows Vista";
	    Os["WINDOWS_PHONE"] = "Windows Phone";
	    Os["IOS"] = "iOS";
	    Os["ANDROID"] = "Android";
	    Os["CHROMIUM"] = "Chromium";
	    Os["WEBOS"] = "Web0S";
	    Os["SMARTCAST"] = "SmartCast";
	    Os["TIZEN"] = "Tizen";
	    Os["UNKNOWN"] = "Unknown";
	})(Os = exports.Os || (exports.Os = {}));

	});

	var Browser_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Browser = void 0;
	var Browser;
	(function (Browser) {
	    Browser["ANDROID"] = "Android";
	    Browser["CHROME"] = "Chrome";
	    Browser["CHROME_IOS"] = "Chrome-iOS";
	    Browser["FIREFOX"] = "Firefox";
	    Browser["FIREFOX_IOS"] = "Firefox-iOS";
	    Browser["EDGE"] = "Edge";
	    Browser["MSIE"] = "MSIE";
	    Browser["SAFARI"] = "Safari";
	    Browser["OPERA"] = "Opera";
	    Browser["OPERA_MOBILE"] = "Opera-Mobile";
	    Browser["SILK"] = "Silk";
	    Browser["PLAYSTATION"] = "PlayStation";
	    Browser["UNKNOWN"] = "Unknown";
	})(Browser = exports.Browser || (exports.Browser = {}));

	});

	var Platform_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Platform = void 0;
	var Platform;
	(function (Platform) {
	    Platform["MAC"] = "Macintosh";
	    Platform["WINDOWS"] = "Windows";
	    Platform["LINUX"] = "Linux";
	    Platform["UNKNOWN"] = "Unknown";
	})(Platform = exports.Platform || (exports.Platform = {}));

	});

	var System_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.System = void 0;





	var System = (function () {
	    function System() {
	    }
	    Object.defineProperty(System, "info", {
	        get: function () {
	            return this.sysInfo;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(System, "global", {
	        get: function () {
	            return this.pGlobal;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    System.initialize = function () {
	        if (typeof window !== "object") {
	            System.pGlobal = null;
	            return;
	        }
	        System.pGlobal = window;
	        var ua = navigator.userAgent, platformInfo = this.getPlatform(ua), browserInfo = this.getBrowser(ua, platformInfo);
	        this.sysInfo = (Util_1.Util.assign({}, browserInfo, platformInfo));
	        var osVer = this.sysInfo.osVersion, osMajVer = osVer && Util_1.Util.isString(osVer) ? parseInt(osVer.split('.')[0]) : NaN;
	        this.sysInfo.osMajorVersion = osMajVer;
	    };
	    System.getBrowser = function (ua, platformInfo) {
	        var _a;
	        var re = (_a = {},
	            _a[Browser_1.Browser.CHROME] = /Chrome\/(\S+)/,
	            _a[Browser_1.Browser.CHROME_IOS] = /CriOS\/(\S+)/,
	            _a[Browser_1.Browser.FIREFOX_IOS] = /FxiOS\/(\S+)/,
	            _a[Browser_1.Browser.EDGE] = / Edge\/([^\s]+)/,
	            _a[Browser_1.Browser.FIREFOX] = /Firefox\/(\S+)/,
	            _a[Browser_1.Browser.OPERA] = /Opera|OPR\/(\S+)/,
	            _a[Browser_1.Browser.SAFARI] = /Version\/(\S+).*Safari/,
	            _a[Browser_1.Browser.MSIE] = /MSIE ([^\s]+)[\)\;]\ Windows/,
	            _a[Browser_1.Browser.ANDROID] = /Android/,
	            _a[Browser_1.Browser.SILK] = /Silk\/(\S+)/,
	            _a[Browser_1.Browser.PLAYSTATION] = /Playstation (\S+)/,
	            _a[Browser_1.Browser.UNKNOWN] = null,
	            _a), isChromeIos = re[Browser_1.Browser.CHROME_IOS].test(ua), isChrome = ((re[Browser_1.Browser.CHROME].test(ua) || isChromeIos) &&
	            !(re[Browser_1.Browser.OPERA].test(ua)) &&
	            !(/Edge/.test(ua))), assembleInfo = function (bName, re, ua) {
	            var browser = re && re.exec(ua), out = {
	                browser: bName,
	                browserVersion: '0',
	                browserMajorVersion: 0
	            };
	            if (browser && browser.length && browser.length > 1) {
	                out.browserVersion = browser[1] || '';
	                if (out.browserVersion.indexOf('.')) {
	                    var ar = out.browserVersion.split('.');
	                    if (Array.isArray(ar) && ar.length) {
	                        var mv = parseInt(ar[0]);
	                        !isNaN(mv) && (out.browserMajorVersion = mv);
	                    }
	                }
	                else {
	                    var mv = parseInt(out.browserVersion);
	                    !isNaN(mv) && (out.browserMajorVersion = mv);
	                }
	            }
	            return out;
	        };
	        if (isChrome) {
	            var name_1 = isChromeIos ? Browser_1.Browser.CHROME_IOS : Browser_1.Browser.CHROME;
	            return assembleInfo(name_1, re[name_1], ua);
	        }
	        var b = this.getMsBrowser(re[Browser_1.Browser.EDGE], re[Browser_1.Browser.MSIE], ua);
	        if (b.browser !== Browser_1.Browser.UNKNOWN) {
	            return assembleInfo(b.browser, b.re, ua);
	        }
	        for (var q in re) {
	            switch (q) {
	                case Browser_1.Browser.FIREFOX:
	                case Browser_1.Browser.FIREFOX_IOS:
	                case Browser_1.Browser.SILK:
	                case Browser_1.Browser.ANDROID:
	                case Browser_1.Browser.PLAYSTATION:
	                    if (re[q].test(ua)) {
	                        if (q === Browser_1.Browser.SILK) {
	                            platformInfo.device = Device_1.Device.KINDLE;
	                        }
	                        return assembleInfo(q, re[q], ua);
	                    }
	                    break;
	                case Browser_1.Browser.SAFARI:
	                    var b_1 = this.getSafariBrowser(re[q], ua, platformInfo);
	                    if (b_1) {
	                        return assembleInfo(q, re[q], ua);
	                    }
	                    break;
	                case Browser_1.Browser.OPERA:
	                    var test = re[q].exec(ua);
	                    if (test) {
	                        var browser = (test.indexOf('Opera Mini/') >= 0 ||
	                            test.indexOf('Opera Mobi') >= 0) ? Browser_1.Browser.OPERA_MOBILE : Browser_1.Browser.OPERA;
	                        return assembleInfo(browser, re[q], ua);
	                    }
	                    break;
	                case Browser_1.Browser.UNKNOWN:
	                    break;
	            }
	        }
	        return assembleInfo(Browser_1.Browser.UNKNOWN, re[Browser_1.Browser.UNKNOWN], ua);
	    };
	    System.getMsBrowser = function (reEdge, reIe, ua) {
	        var tri = /Trident.[^\s]+;.*rv:([^\s]+)[\)\;]/;
	        if (reIe.test(ua)) {
	            return { browser: Browser_1.Browser.MSIE, re: reIe };
	        }
	        else if (reEdge.test(ua)) {
	            return { browser: Browser_1.Browser.EDGE, re: reEdge };
	        }
	        else if (tri.test(ua)) {
	            return { browser: Browser_1.Browser.MSIE, re: tri };
	        }
	        return { browser: Browser_1.Browser.UNKNOWN, re: null };
	    };
	    System.getSafariBrowser = function (re, ua, platformInfo) {
	        var test = re.test(ua), browserName = platformInfo.os === Os_1.Os.ANDROID ? Browser_1.Browser.ANDROID : Browser_1.Browser.SAFARI;
	        if (test) {
	            return browserName;
	        }
	        return null;
	    };
	    System.getPlatform = function (userAgent) {
	        var _this = this;
	        var ual = userAgent.toLowerCase(), out = {
	            os: Os_1.Os.UNKNOWN,
	            platform: Platform_1.Platform.UNKNOWN,
	            osVersion: '',
	            device: Device_1.Device.UNKNOWN
	        };
	        if (ual.indexOf('fxios') >= 0) {
	            out.os = Os_1.Os.IOS;
	            out.platform = Platform_1.Platform.MAC;
	            if (ual.indexOf('iphone') >= 0) {
	                out.device = Device_1.Device.IPHONE;
	            }
	            else {
	                out.device = Device_1.Device.IPAD;
	            }
	            return out;
	        }
	        var re = /\s(\([^)]+\))/, test = re.exec(userAgent);
	        if (test && test.length && test.length > 1) {
	            var pStr = test[1].replace(/_/gi, '.'), tests = [
	                function (str, obj) { return _this.isLinux(str, obj); },
	                function (str, obj) { return _this.isMac(str, obj); },
	                function (str, obj) { return _this.isWin(str, obj); },
	            ], i = tests.length, ti = void 0;
	            while (i--) {
	                ti = tests[i];
	                if (ti(i === 0 ? userAgent : pStr, out)) {
	                    break;
	                }
	            }
	        }
	        return out;
	    };
	    System.isLinux = function (str, obj) {
	        var regex = new RegExp(Platform_1.Platform.LINUX, 'i');
	        var isArm = /Linux armv/.test(navigator.platform);
	        if (regex.test(str) || str.indexOf(Os_1.Os.ANDROID) >= 0) {
	            obj.platform = Platform_1.Platform.LINUX;
	            obj.device = Device_1.Device.UNKNOWN;
	            if (str.indexOf(Os_1.Os.CHROMIUM) >= 0) {
	                var re = /Chromium\/([\d+\.]*)\s/, test = re.exec(str);
	                obj.os = Os_1.Os.CHROMIUM;
	                obj.osVersion = (test && test[1]) || '';
	            }
	            else if (str.indexOf(Os_1.Os.ANDROID) >= 0) {
	                var re = / Android ([^\s]+);/, test = re.exec(str);
	                obj.os = Os_1.Os.ANDROID;
	                obj.osVersion = (test && test[1]) || '';
	                obj.device = Device_1.Device.ANDROID_PHONE;
	            }
	            else if (str.indexOf(Os_1.Os.WEBOS) >= 0) {
	                obj.os = Os_1.Os.WEBOS;
	                obj.osVersion = 'n/a';
	                obj.device = Device_1.Device.LG_SMART_TV;
	            }
	            else if (str.indexOf(Os_1.Os.SMARTCAST) >= 0) {
	                obj.os = Os_1.Os.SMARTCAST;
	                obj.osVersion = 'n/a';
	                obj.device = Device_1.Device.VIZIO_SMART_TV;
	            }
	            else if (str.indexOf(Os_1.Os.TIZEN) >= 0) {
	                var re = /Tizen ([^\s]+)(;|\))/, test = re.exec(str);
	                obj.os = Os_1.Os.TIZEN;
	                obj.osVersion = (test && test[1]) || '';
	                obj.device = Device_1.Device.SAMSUNG_SMART_TV;
	            }
	            else if (typeof $badger != 'undefined' || (/ WPE$/.test(str) && isArm)) {
	                obj.os = Platform_1.Platform.LINUX;
	                obj.osVersion = 'n/a';
	                obj.device = Device_1.Device.COMCAST_X1;
	            }
	            else if (isArm) {
	                obj.os = Platform_1.Platform.LINUX;
	                obj.osVersion = 'n/a';
	                obj.device = Device_1.Device.EMBEDDED;
	            }
	            return true;
	        }
	        return false;
	    };
	    System.isMac = function (str, obj) {
	        if (str.indexOf(Platform_1.Platform.MAC) >= 0) {
	            obj.platform = Platform_1.Platform.MAC;
	            obj.device = Device_1.Device.DESKTOP;
	            if (str.indexOf(Os_1.Os.OSX) >= 0) {
	                var re = /Mac OS X ([\d\.]+)/, test = re.exec(str);
	                obj.os = Os_1.Os.OSX;
	                obj.osVersion = (test && test[1]) ? test[1] : null;
	            }
	            return true;
	        }
	        else if (str.indexOf('like Mac OS X') !== -1) {
	            obj.platform = Platform_1.Platform.MAC;
	            obj.os = Os_1.Os.IOS;
	            obj.device = Device_1.Device.UNKNOWN;
	            var devices = [/\(iPhone;/, /\(iPad;/, /\(iPod;/], names = [Device_1.Device.IPHONE, Device_1.Device.IPAD, Device_1.Device.IPOD], i = devices.length, re = /\sOS\s([^\s]*)\s/, version = re.exec(str);
	            if (version && version[1]) {
	                obj.osVersion = version[1];
	            }
	            while (i--) {
	                if (devices[i].test(str)) {
	                    obj.device = names[i];
	                    return true;
	                }
	            }
	            return true;
	        }
	        return false;
	    };
	    System.isWin = function (ua, obj) {
	        var re = /(Windows Phone |Windows Phone OS )([^\s]+);/, reNt = /Windows NT ([^\s]+)[;\)]/, win = re.exec(ua);
	        if (win && win[2]) {
	            obj.platform = Platform_1.Platform.WINDOWS;
	            obj.os = Os_1.Os.WINDOWS_PHONE;
	            obj.osVersion = win[2];
	            obj.device = Device_1.Device.WINDOWS_PHONE;
	            return true;
	        }
	        else {
	            var test = reNt.exec(ua);
	            obj.device = Device_1.Device.DESKTOP;
	            if (test && test[1]) {
	                obj.platform = Platform_1.Platform.WINDOWS;
	                obj.os = Os_1.Os.WINDOWS;
	                var osVersionNbr = test[1];
	                if (/Xbox; Xbox One/.test(ua)) {
	                    obj.device = Device_1.Device.XBOX_ONE;
	                }
	                if (parseInt(osVersionNbr) == 10) {
	                    obj.os = Os_1.Os.WINDOWS10;
	                    obj.osVersion = osVersionNbr;
	                }
	                else {
	                    switch (osVersionNbr) {
	                        case '6.0':
	                            obj.os = Os_1.Os.WINDOWS_VISTA;
	                            break;
	                        case '6.1':
	                            obj.os = Os_1.Os.WINDOWS7;
	                            obj.osVersion = 7;
	                            break;
	                        case '6.2':
	                            obj.os = Os_1.Os.WINDOWS8;
	                            obj.osVersion = 8;
	                            break;
	                    }
	                }
	                return true;
	            }
	        }
	        return false;
	    };
	    System.sysInfo = null;
	    return System;
	}());
	exports.System = System;
	System.initialize();

	});

	var VirtualVideoElement_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.VirtualVideoElement = void 0;
	var VirtualVideoElement = (function () {
	    function VirtualVideoElement() {
	        this.muted = false;
	        this.volume = NaN;
	        this.currentTime = NaN;
	        this.duration = NaN;
	    }
	    return VirtualVideoElement;
	}());
	exports.VirtualVideoElement = VirtualVideoElement;

	});

	var SystemService_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.SystemService = void 0;






	var SystemService = (function (_super) {
	    tslib_es6.__extends(SystemService, _super);
	    function SystemService(name) {
	        var _this = _super.call(this, name) || this;
	        _this.infoCache = {};
	        return _this;
	    }
	    SystemService.getInstance = function (name) {
	        if (!this.instance) {
	            this.instance = new SystemService(name);
	        }
	        return this.instance;
	    };
	    Object.defineProperty(SystemService.prototype, "info", {
	        get: function () {
	            return System_1.System.info;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(SystemService.prototype, "webMafPlayer", {
	        get: function () {
	            return this.isWebMaf ? this.global['WM_videoPlayer'] : null;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(SystemService.prototype, "isWebMaf", {
	        get: function () {
	            return !!(this.global && this.global['WM_videoPlayer']);
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(SystemService.prototype, "isWebOs", {
	        get: function () {
	            return this.info.os === Os_1.Os.WEBOS;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(SystemService.prototype, "global", {
	        get: function () {
	            return System_1.System.global;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(SystemService.prototype, "document", {
	        get: function () {
	            return this.global && (this.global.document || null);
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(SystemService.prototype, "isDesktop", {
	        get: function () {
	            var _this = this;
	            var k = 'isDesktop', c = this.checkCache(k);
	            return c !== undefined ? c : this.cache(k, function () {
	                return _this.info.device === Device_1.Device.DESKTOP;
	            });
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(SystemService.prototype, "isMobile", {
	        get: function () {
	            return !this.isDesktop;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(SystemService.prototype, "isTv", {
	        get: function () {
	            switch (this.device) {
	                case Device_1.Device.LG_SMART_TV:
	                case Device_1.Device.VIZIO_SMART_TV:
	                case Device_1.Device.SAMSUNG_SMART_TV:
	                case Device_1.Device.COMCAST_X1:
	                    return true;
	                default:
	                    return false;
	            }
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(SystemService.prototype, "isTizenSmartTv", {
	        get: function () {
	            return this.device === Device_1.Device.SAMSUNG_SMART_TV;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(SystemService.prototype, "isXboxOne", {
	        get: function () {
	            return this.device === Device_1.Device.XBOX_ONE;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(SystemService.prototype, "isEmbedded", {
	        get: function () {
	            return this.device == Device_1.Device.EMBEDDED;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(SystemService.prototype, "browser", {
	        get: function () {
	            return this.info.browser;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(SystemService.prototype, "os", {
	        get: function () {
	            return this.info.os;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(SystemService.prototype, "device", {
	        get: function () {
	            return this.info.device;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(SystemService.prototype, "platform", {
	        get: function () {
	            return this.info.platform;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(SystemService.prototype, "isIos", {
	        get: function () {
	            return this.info.os === Os_1.Os.IOS;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(SystemService.prototype, "isAndroid", {
	        get: function () {
	            var _this = this;
	            var k = 'isAndroid', c = this.checkCache(k);
	            return c !== undefined ? c : this.cache(k, function () {
	                var i = _this.info;
	                return i.device === Device_1.Device.ANDROID_PHONE || i.device === Os_1.Os.ANDROID;
	            });
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(SystemService.prototype, "browserVersionInfo", {
	        get: function () {
	            var _this = this;
	            var k = 'browserVersionInfo', c = this.checkCache(k);
	            return c !== undefined ? c : this.cache(k, function () {
	                return _this.parseVerStr(_this.info.browserVersion);
	            });
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(SystemService.prototype, "osVersionInfo", {
	        get: function () {
	            var _this = this;
	            var k = 'osVersionInfo', c = this.checkCache(k);
	            return c !== undefined ? c : this.cache(k, function () {
	                return _this.parseVerStr(_this.info.osVersion);
	            });
	        },
	        enumerable: false,
	        configurable: true
	    });
	    SystemService.prototype.createSimpleVideoInterface = function () {
	        return new VirtualVideoElement_1.VirtualVideoElement();
	    };
	    SystemService.prototype.cache = function (key, fn) {
	        this.infoCache[key] = fn();
	        return this.infoCache[key];
	    };
	    SystemService.prototype.checkCache = function (key) {
	        return key in this.infoCache ? this.infoCache[key] : undefined;
	    };
	    SystemService.prototype.parseVerStr = function (str) {
	        var out = {
	            majorVersion: null,
	            minorVersion: null,
	            versionString: str || null,
	        };
	        if (str) {
	            var spl = str.split('.'), mj = parseInt(spl[0], 10), mn = parseInt(spl[1], 10);
	            !isNaN(mj) && (out.majorVersion = mj);
	            !isNaN(mn) && (out.minorVersion = mn);
	        }
	        return out;
	    };
	    return SystemService;
	}(ServiceBase_1.ServiceBase));
	exports.SystemService = SystemService;

	});

	var MediaDecodeConfigs = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.media_decode_configs = void 0;
	exports.media_decode_configs = [
	    {
	        type: 'avc',
	        config: {
	            type: 'media-source',
	            audio: {
	                contentType: 'audio/mp4; codecs=mp4a.40.2',
	                channels: '2',
	                bitrate: 132266,
	                samplerate: 48000
	            },
	            video: {
	                contentType: 'video/mp4; codecs="avc1.4D401E"',
	                width: 1920,
	                height: 1080,
	                bitrate: 2646242,
	                framerate: '25'
	            }
	        }
	    },
	    {
	        type: 'hevc',
	        config: {
	            type: 'media-source',
	            audio: {
	                contentType: 'audio/mp4; codecs=mp4a.40.2',
	                channels: '2',
	                bitrate: 132266,
	                samplerate: 48000
	            },
	            video: {
	                contentType: 'video/mp4; codecs="hev1.1.2.L93.B0"',
	                width: 1920,
	                height: 1080,
	                bitrate: 2646242,
	                framerate: '25'
	            }
	        }
	    },
	    {
	        type: 'webm',
	        config: {
	            type: 'media-source',
	            audio: {
	                contentType: 'audio/webm; codecs=opus',
	                channels: '2',
	                bitrate: 132266,
	                samplerate: 48000
	            },
	            video: {
	                contentType: 'video/webm; codecs="vp09.00.10.08"',
	                width: 1920,
	                height: 1080,
	                bitrate: 2646242,
	                framerate: '25'
	            }
	        }
	    }
	];

	});

	var MediaCapabilitiesCodec_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.MediaCapabilitiesCodec = void 0;
	var MediaCapabilitiesCodec;
	(function (MediaCapabilitiesCodec) {
	    MediaCapabilitiesCodec["AVC"] = "avc1.4D401E,mp4a.40.2";
	    MediaCapabilitiesCodec["HEVC"] = "hev1.1.2.L93.B0";
	    MediaCapabilitiesCodec["VP8"] = "vp8, opus, vorbis";
	    MediaCapabilitiesCodec["VP9"] = "vp9, opus, vorbis";
	    MediaCapabilitiesCodec["AV1"] = "av1.experimental.e87fb2378f01103d5d6e477a4ef6892dc714e614";
	})(MediaCapabilitiesCodec = exports.MediaCapabilitiesCodec || (exports.MediaCapabilitiesCodec = {}));

	});

	var MediaCapabilities_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.MediaCapabilities = void 0;







	var MediaCapabilities = (function (_super) {
	    tslib_es6.__extends(MediaCapabilities, _super);
	    function MediaCapabilities(options) {
	        var _this = _super.call(this, options) || this;
	        _this.types = {
	            video: {
	                HLS: MediaCapabilitiesMimeType_1.MediaCapabilitiesMimeType.HLS,
	                AVC: MediaCapabilitiesMimeType_1.MediaCapabilitiesMimeType.MP4_VIDEO + '; codecs=' + MediaCapabilitiesCodec_1.MediaCapabilitiesCodec.AVC,
	                HEVC: MediaCapabilitiesMimeType_1.MediaCapabilitiesMimeType.MP4_VIDEO + '; codecs=' + MediaCapabilitiesCodec_1.MediaCapabilitiesCodec.HEVC,
	                WEBM_VP8: MediaCapabilitiesMimeType_1.MediaCapabilitiesMimeType.WEBM_VIDEO + '; codecs=' + MediaCapabilitiesCodec_1.MediaCapabilitiesCodec.VP8,
	                WEBM_VP9: MediaCapabilitiesMimeType_1.MediaCapabilitiesMimeType.WEBM_VIDEO + '; codecs=' + MediaCapabilitiesCodec_1.MediaCapabilitiesCodec.VP9
	            },
	            audio: {
	                AVC: MediaCapabilitiesMimeType_1.MediaCapabilitiesMimeType.MP4_AUDIO + '; codecs=' + MediaCapabilitiesCodec_1.MediaCapabilitiesCodec.AVC,
	                HEVC: MediaCapabilitiesMimeType_1.MediaCapabilitiesMimeType.MP4_AUDIO + '; codecs=' + MediaCapabilitiesCodec_1.MediaCapabilitiesCodec.HEVC,
	                WEBM_VP8: MediaCapabilitiesMimeType_1.MediaCapabilitiesMimeType.WEBM_AUDIO + '; codecs=' + MediaCapabilitiesCodec_1.MediaCapabilitiesCodec.VP8,
	                WEBM_VP9: MediaCapabilitiesMimeType_1.MediaCapabilitiesMimeType.WEBM_AUDIO + '; codecs=' + MediaCapabilitiesCodec_1.MediaCapabilitiesCodec.VP9
	            }
	        };
	        _this.getCapabilities();
	        return _this;
	    }
	    MediaCapabilities.prototype.destroy = function () {
	        _super.prototype.destroy.call(this);
	    };
	    Object.defineProperty(MediaCapabilities.prototype, "capabilities", {
	        get: function () {
	            return this.pCapabilities;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    MediaCapabilities.prototype.getCapabilities = function () {
	        var _this = this;
	        var mediaCapabilitiesResult = {
	            mediaDecodeCapabilitiesResults: [],
	            drmCapabilitiesResults: [],
	            hasMediaSource: this.hasMediaSource,
	            hasEncryptedMediaSource: this.hasEncryptedMediaSource,
	            isWebKit: this.isWebKit,
	            supportsVp8: this.supportsVp8,
	            supportsMediaDecodeConfigurations: this.supportsMediaDecodeConfigurations,
	            supportsNativeHls: this.isTypeSupported(this.types.video.HLS),
	            supportsRequestMediaKeySystemAccess: this.supportsRequestMediaKeySystemAccess,
	            supportsAvc: false,
	            supportsHevc: false,
	            supportsWebM: false,
	            supportsVp9: false
	        };
	        this.pCapabilities = mediaCapabilitiesResult;
	        if (this.supportsMediaDecodeConfigurations) {
	            this.testMediaDecodeCapabilities(mediaCapabilitiesResult, function (mcResult) {
	                var mDcr = mcResult.mediaDecodeCapabilitiesResults;
	                mediaCapabilitiesResult.supportsAvc = mDcr[0].supported;
	                mediaCapabilitiesResult.supportsHevc = mDcr[1].supported;
	                mediaCapabilitiesResult.supportsWebM = mDcr[2].supported;
	                mediaCapabilitiesResult.supportsVp9 = mDcr[2].supported;
	                _this.completeTesting(mediaCapabilitiesResult);
	            });
	        }
	        else {
	            mediaCapabilitiesResult.supportsAvc = this.isTypeSupported(this.types.video.AVC);
	            mediaCapabilitiesResult.supportsHevc = this.isTypeSupported(this.types.video.HEVC);
	            mediaCapabilitiesResult.supportsWebM = this.supportsWebM;
	            mediaCapabilitiesResult.supportsVp9 = this.supportsVp9;
	            this.completeTesting(mediaCapabilitiesResult);
	        }
	    };
	    MediaCapabilities.prototype.completeTesting = function (result) {
	        var _this = this;
	        setTimeout(function () { return _this.emit(MediaCapabilities.event.COMPLETE, result); }, 1);
	    };
	    Object.defineProperty(MediaCapabilities.prototype, "hasMediaSource", {
	        get: function () {
	            return !!(System_1.System.global && (System_1.System.global.MediaSource || this.isWebKit));
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(MediaCapabilities.prototype, "hasEncryptedMediaSource", {
	        get: function () {
	            var g = System_1.System.global, eme = g && (g.MediaKeys || g.WebKitMediaKeys || g.MSMediaKeys);
	            return !!eme;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(MediaCapabilities.prototype, "isWebKit", {
	        get: function () {
	            return !!(System_1.System.global && System_1.System.global.WebKitMediaSource);
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(MediaCapabilities.prototype, "supportsWebM", {
	        get: function () {
	            return this.supportsVp8 || this.supportsVp9;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(MediaCapabilities.prototype, "supportsVp8", {
	        get: function () {
	            return this.isTypeSupported(this.types.video.WEBM_VP8);
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(MediaCapabilities.prototype, "supportsVp9", {
	        get: function () {
	            return this.isTypeSupported(this.types.video.WEBM_VP9);
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(MediaCapabilities.prototype, "supportsRequestMediaKeySystemAccess", {
	        get: function () {
	            return !!(System_1.System.global && System_1.System.global.MediaKeySystemAccess);
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(MediaCapabilities.prototype, "supportsMediaDecodeConfigurations", {
	        get: function () {
	            return !!navigator.mediaCapabilities;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    MediaCapabilities.prototype.isTypeSupported = function (codec) {
	        var supported = false;
	        if (!System_1.System.global) {
	            return false;
	        }
	        if (this.isWebKit) {
	            supported = System_1.System.global.WebKitMediaSource.isTypeSupported(codec);
	        }
	        else if (this.hasMediaSource) {
	            supported = System_1.System.global.MediaSource.isTypeSupported(codec);
	        }
	        if (!supported) {
	            var element = document.createElement('video');
	            if (Util_1.Util.isObject(element) && Util_1.Util.isFunction(element.canPlayType)) {
	                if (element.canPlayType(codec) === 'probably' || element.canPlayType(codec) === 'maybe') {
	                    supported = true;
	                }
	            }
	        }
	        return supported;
	    };
	    MediaCapabilities.prototype.testMediaDecodeCapabilities = function (mcResult, callback) {
	        if (!navigator) {
	            callback(mcResult);
	        }
	        var i = 0;
	        var hResults = function (result) {
	            mcResult.mediaDecodeCapabilitiesResults.push(result);
	            if (mcResult.mediaDecodeCapabilitiesResults.length === MediaDecodeConfigs.media_decode_configs.length) {
	                callback(mcResult);
	            }
	            else {
	                runTest(MediaDecodeConfigs.media_decode_configs[i]);
	                i++;
	            }
	        };
	        var runTest = function (config) {
	            var mdcResult = {
	                type: config.type
	            };
	            navigator.mediaCapabilities.decodingInfo(config.config).then(function (result) {
	                mdcResult.supported = result.supported;
	                mdcResult.smooth = result.smooth;
	                mdcResult.powerEfficient = result.powerEfficient;
	                hResults(mdcResult);
	            }).catch(function () {
	                hResults(mdcResult);
	            });
	        };
	        runTest(MediaDecodeConfigs.media_decode_configs[i]);
	        i++;
	    };
	    MediaCapabilities.event = {
	        COMPLETE: 'complete'
	    };
	    return MediaCapabilities;
	}(Emitter_1.Emitter));
	exports.MediaCapabilities = MediaCapabilities;

	});

	var ResourceConfiguration_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ResourceConfiguration = void 0;

	var ResourceConfiguration = (function () {
	    function ResourceConfiguration(config) {
	        if (config === void 0) { config = {}; }
	        this.ad = {
	            context: null,
	            showPrerollOnNonZeroStart: false,
	            viewabilityTracking: {
	                partner: null,
	                vguid: null,
	                ptype: null,
	            },
	            adTagParameters: {
	                description_url: null,
	                sz: '640x480',
	                url: null,
	                iu: null,
	                ad_rule: null,
	                ciu_szs: null,
	                pp: null,
	                cmsid: '2289',
	                vid: null,
	                hl: null,
	                msid: null,
	                an: null,
	                nofb: null,
	                ppid: null,
	                tfcd: null,
	                npa: null,
	                cust_params: null
	            },
	            ima: {
	                adCallUrl: null,
	                loadVideoTimeoutMs: 4000,
	                enableAdPreloading: false,
	                preloadContentAtEndOfPreRoll: false,
	            },
	            dai: {
	                contentSourceId: null,
	                daiVideoId: null,
	                assetKey: null,
	                apiKey: null,
	                ssbStreamUrl: null,
	                isLive: false,
	                format: null,
	                streamActivityMonitorId: null
	            }
	        };
	        this.location = {
	            cms: null,
	            tokenMap: null,
	            cmsUri: null,
	            mediaUrl: null,
	            textTrackUrl: null,
	            thumbnailTrackUrl: null,
	            drm: {
	                enabled: false,
	                sessionId: null,
	                ticket: null,
	                playready: {
	                    url: null,
	                    header: null
	                },
	                widevine: {
	                    url: null,
	                    header: null
	                },
	                fairplay: {
	                    appCertUrl: null,
	                    licenseUrl: null,
	                    header: null
	                }
	            }
	        };
	        this.playback = {
	            id3OwnerIds: null,
	            startTime: NaN,
	            preloadContent: false,
	            liveEdgeSyncFragmentCount: 3,
	            abr: {
	                maxBitrate: NaN,
	                minBitrate: NaN,
	                startBitrate: NaN,
	                capQualityToScreenSize: true
	            }
	        };
	        this.metadata = {};
	        this.tracking = {};
	        this.overrides = {};
	        Util_1.Util.merge(this, config);
	    }
	    return ResourceConfiguration;
	}());
	exports.ResourceConfiguration = ResourceConfiguration;

	});

	var MediatorName_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.MediatorName = void 0;
	var MediatorName;
	(function (MediatorName) {
	    MediatorName["APPLICATION"] = "AppMediator";
	    MediatorName["UI"] = "UiMediator";
	    MediatorName["FULLSCREEN"] = "FullscreenMediator";
	    MediatorName["TRACKING_MEDIATOR"] = "TrackingMediator";
	    MediatorName["TIMER_MEDIATOR"] = "TimerMediator";
	    MediatorName["PRESENTATION_MEDIATOR"] = "PresentationMediator";
	    MediatorName["PLUGIN_MEDIATOR"] = "pluginMediator";
	    MediatorName["KEY_COMMAND"] = "keyCommandMediator";
	    MediatorName["ACC_KEY_CMD_MEDIATOR"] = "accessibilityKeyCommandMediator";
	})(MediatorName = exports.MediatorName || (exports.MediatorName = {}));

	});

	var ModelName_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ModelName = void 0;
	var ModelName;
	(function (ModelName) {
	    ModelName["AdBreakInfo"] = "AdBreakInfo";
	    ModelName["AdItem"] = "AdItem";
	    ModelName["BuildInfo"] = "BuildInfo";
	    ModelName["ContentPlaybackState"] = "ContentPlaybackState";
	    ModelName["PlayerDom"] = "PlayerDom";
	    ModelName["PlayerOptions"] = "PlayerOptions";
	    ModelName["PresentationState"] = "PresentationState";
	})(ModelName = exports.ModelName || (exports.ModelName = {}));

	});

	var NativePlugin_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.NativePlugin = void 0;
	var NativePlugin;
	(function (NativePlugin) {
	    NativePlugin["REPLAY"] = "replay";
	    NativePlugin["DIAGNOSTIC"] = "diagnostic";
	})(NativePlugin = exports.NativePlugin || (exports.NativePlugin = {}));

	});

	var NotificationName_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.NotificationName = void 0;
	var NotificationName;
	(function (NotificationName) {
	    NotificationName["DEFAULT"] = "default";
	    NotificationName["BOOT_APP"] = "bootApp";
	    NotificationName["BOOT_WEBMAF_APP"] = "bootWebMafApp";
	    NotificationName["PREP_TRACKING"] = "prepTracking";
	    NotificationName["PREP_SERVICE"] = "prepService";
	    NotificationName["TIMER_TIC"] = "timerTic";
	    NotificationName["APP_EVENT"] = "appEvent";
	    NotificationName["APP_ERROR_EVENT"] = "appErrorEvent";
	    NotificationName["READY"] = "ready";
	    NotificationName["RESOURCE_ERROR"] = "resourceError";
	    NotificationName["VIDEO_START_ERROR"] = "videoStartError";
	    NotificationName["VIDEO_PLAYBACK_ERROR"] = "videoPlaybackError";
	    NotificationName["PREP_RESOURCE_COLLECTION"] = "prepResourceCollection";
	    NotificationName["VALIDATE_RESOURCE"] = "validateResource";
	    NotificationName["RETRIEVE_RESOURCE"] = "retrieveResource";
	    NotificationName["TRANSFORM_RESOURCE"] = "transformResourceData";
	    NotificationName["REGISTER_RESOURCE"] = "registerResource";
	    NotificationName["PLAY_RESOURCE"] = "playResource";
	    NotificationName["PREP_PLUGINS"] = "prepPlugins";
	    NotificationName["LOAD_PLUGINS"] = "loadPlugins";
	    NotificationName["REMOVE_PLUGIN"] = "removePlugin";
	    NotificationName["START_PRESENTATION"] = "startPresentation";
	    NotificationName["RESOURCE_START"] = "resourceStart";
	    NotificationName["RESOURCE_END"] = "resourceEnd";
	    NotificationName["RESOURCE_PLAYING"] = "resourcePlaying";
	    NotificationName["RESOURCE_PAUSED"] = "resourcePaused";
	    NotificationName["RESOURCE_COMPLETE"] = "resourceComplete";
	    NotificationName["ADVANCE_PLAYLIST"] = "advancePlaylist";
	    NotificationName["PLAYLIST_CHANGE"] = "playlistChanged";
	    NotificationName["PLAYLIST_ADVANCED"] = "playlistAdvanced";
	    NotificationName["PLAYLIST_COMPLETE"] = "playlistComplete";
	    NotificationName["PLAYLIST_CLEARED"] = "playlistCleared";
	    NotificationName["PLAYLIST_CURRENT_RESOURCE_CLEARED"] = "playlistCurrentResourceCleared";
	    NotificationName["PLAYLIST_OUT_OF_RANGE"] = "playlistOutOfRange";
	    NotificationName["RESOURCE_INTERRUPTED"] = "resourceInterrupted";
	    NotificationName["CONTENT_COMPLETE"] = "contentComplete";
	    NotificationName["LIVE_PRESENTATION_STOPPED"] = "livePresentationStopped";
	    NotificationName["KILL_RESOURCE_PRESENTATION"] = "killResourcePresentation";
	    NotificationName["POSTER_CLICK"] = "posterClick";
	    NotificationName["SUSPEND_PLAYBACK"] = "suspendPlayback";
	    NotificationName["RESUME_PLAYBACK"] = "resumePlayback";
	    NotificationName["PLAYBACK_SUSPENDED"] = "playbackSuspended";
	    NotificationName["PLAYBACK_RESUMED"] = "playbackResumed";
	    NotificationName["FULLSCREEN_ENTER"] = "fullscreenEnter";
	    NotificationName["FULLSCREEN_EXIT"] = "fullscreenExit";
	    NotificationName["PRESENTATION_SIZE_CHANGE"] = "presentationSizeChange";
	    NotificationName["MOUSE_ENTER_PRESENTATION"] = "mouseEnterPresentation";
	    NotificationName["MOUSE_LEAVE_PRESENTATION"] = "mouseLeavePresentation";
	    NotificationName["USER_PAUSE"] = "userPause";
	    NotificationName["METADATA_CUEPOINT"] = "metadataCuepoint";
	    NotificationName["TEXT_CUEPOINT"] = "textCuepoint";
	    NotificationName["TEXT_TRACK_CHANGE"] = "textTrackChange";
	    NotificationName["TEXT_TRACK_DISPLAY_MODE_CHANGE"] = "textTrackDisplayModeChange";
	    NotificationName["TEXT_TRACK_AVAILABLE"] = "textTrackAvailable";
	    NotificationName["TEXT_TRACK_INFO_CHANGE"] = "textTrackInfoChange";
	    NotificationName["AUDIO_TRACK_CHANGE"] = "audioTrackSwitched";
	    NotificationName["AUDIO_TRACK_INFO_CHANGE"] = "audioTrackInfoChange";
	    NotificationName["QUALITY_INFO_CHANGE"] = "qualityInfoChange";
	    NotificationName["THUMBNAIL_TRACK_AVAILABLE"] = "thumbnailTrackAvailable";
	    NotificationName["AUTO_QUALITY_SWITCHING"] = "autoQualitySwitching";
	    NotificationName["MIN_BITRATE"] = "minBitrate";
	    NotificationName["MAX_BITRATE"] = "maxBitrate";
	    NotificationName["PLAY_ON_USER_GESTURE"] = "playOnUSerGesture";
	    NotificationName["PLAY"] = "play";
	    NotificationName["PAUSE"] = "pause";
	    NotificationName["STOP"] = "stop";
	    NotificationName["SEEK"] = "seek";
	    NotificationName["SEEK_FORWARD"] = "seekForward";
	    NotificationName["SEEK_BACK"] = "seekBack";
	    NotificationName["SEEK_TO_LIVE"] = "seekToLive";
	    NotificationName["SWITCH_BITRATE"] = "switchBitrate";
	    NotificationName["SWITCH_QUALITY_CATEGORY"] = "switchQualityCategory";
	    NotificationName["SWITCH_AUDIO_TRACK"] = "switchAudioTrack";
	    NotificationName["SWITCH_TEXT_TRACK"] = "switchTextTrack";
	    NotificationName["SWITCH_TEXT_MODE"] = "switchTextMode";
	    NotificationName["CONTENT_START"] = "contentStart";
	    NotificationName["CONTENT_DURATION_AVAILABLE"] = "contentDurationAvailable";
	    NotificationName["CONTENT_SEGMENT_START"] = "contentSegmentStart";
	    NotificationName["CONTENT_SEEKING"] = "contentSeeking";
	    NotificationName["CONTENT_SEEKED"] = "contentSeeked";
	    NotificationName["SEEK_REDIRECT_START"] = "seekRedirectStart";
	    NotificationName["SEEK_REDIRECT_COMPLETE"] = "seekRedirectComplete";
	    NotificationName["CONTENT_BUFFERING"] = "contentBuffering";
	    NotificationName["CONTENT_PLAYING"] = "contentPlaying";
	    NotificationName["CONTENT_PAUSED"] = "contentPaused";
	    NotificationName["QUALITY_CHANGE"] = "contentQualityChange";
	    NotificationName["CDN_CHANGE"] = "contentCdnChange";
	    NotificationName["DRM_KEYSYSTEM_CREATED"] = "drmKeySystemCreated";
	    NotificationName["CONTENT_SEGMENT_END"] = "contentSegmentEnd";
	    NotificationName["CONTENT_TIME_UPDATE"] = "contentTimeupdate";
	    NotificationName["CONTENT_IS_LIVE_CHANGED"] = "contentIsLiveChanged";
	    NotificationName["STREAM_TYPE_CHANGE"] = "streamTypeChange";
	    NotificationName["STREAM_METADATA"] = "streamMetadata";
	    NotificationName["VIDEO_PROGRESS"] = "contentVideoProgress";
	    NotificationName["VIDEO_LOAD_START"] = "videoLoadStart";
	    NotificationName["VIDEO_LOAD_COMPLETE"] = "videoLoadComplete";
	    NotificationName["VIDEO_LOADED_METADATA"] = "videoLoadedMetadata";
	    NotificationName["AUTOPLAY_BLOCKED"] = "autoplayBlocked";
	    NotificationName["AD_BUFFERING"] = "adBuffering";
	    NotificationName["AD_CUEPOINTS_AVAILABLE"] = "adCuepointsAvailable";
	    NotificationName["AD_BREAK_START"] = "adBreakStart";
	    NotificationName["AD_BREAK_METADATA"] = "adBreakMetadata";
	    NotificationName["AD_START"] = "adStart";
	    NotificationName["AD_TIME_UPDATE"] = "adProgress";
	    NotificationName["AD_FIRST_QUARTILE"] = "adFirstQuartile";
	    NotificationName["AD_MIDPOINT"] = "adMidpoint";
	    NotificationName["AD_THIRD_QUARTILE"] = "adThirdQuartile";
	    NotificationName["AD_COMPLETE"] = "adComplete";
	    NotificationName["AD_BREAK_COMPLETE"] = "adBreakEnd";
	    NotificationName["AD_PAUSED"] = "adPaused";
	    NotificationName["AD_PLAYING"] = "adPlaying";
	    NotificationName["AD_ERROR"] = "adError";
	    NotificationName["AD_STALLED"] = "adStalled";
	    NotificationName["AD_BREAK_DISCARDED"] = "adBreakDiscarded";
	    NotificationName["AD_CLICK"] = "adClick";
	    NotificationName["AD_SKIPPED"] = "adSkipped";
	    NotificationName["ENABLE_UI"] = "enableUi";
	    NotificationName["DISABLE_UI"] = "disableUi";
	    NotificationName["FULLSCREEN_AVAILABLE"] = "fullscreenAvailable";
	    NotificationName["FULLSCREEN_CHANGE"] = "fullscreenChange";
	    NotificationName["ENTER_FULLSCREEN_REQUEST"] = "enterFullscreenRequest";
	    NotificationName["EXIT_FULLSCREEN_REQUEST"] = "exitFullscreenRequest";
	    NotificationName["BEFORE_CONTROLS_VISIBLE"] = "beforeControlsVisible";
	    NotificationName["CONTROLS_VISIBLE"] = "controlsVisible";
	    NotificationName["BEFORE_CONTROLS_HIDDEN"] = "beforeControlsHidden";
	    NotificationName["CONTROLS_HIDDEN"] = "controlsHidden";
	    NotificationName["MUTE"] = "mute";
	    NotificationName["UNMUTE"] = "unmute";
	    NotificationName["VOLUME_CHANGE"] = "volumeChange";
	    NotificationName["USER_KEY_COMMAND"] = "userKeyCommand";
	    NotificationName["USER_KEYBOARD_COMMAND"] = "userKeyboardCommand";
	    NotificationName["TT_OFFSET_REQUEST"] = "ttOffsetRequest";
	    NotificationName["USER_SETTINGS_REQUEST"] = "userSettingsRequest";
	    NotificationName["CHANGE_LANGUAGE"] = "changeLanguage";
	    NotificationName["LANGUAGE_CHANGE"] = "languageChange";
	})(NotificationName = exports.NotificationName || (exports.NotificationName = {}));

	});

	var NotificationType_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.NotificationType = void 0;
	var NotificationType;
	(function (NotificationType) {
	    NotificationType["EXTERNAL"] = "external";
	    NotificationType["INTERNAL"] = "internal";
	    NotificationType["UI"] = "ui";
	})(NotificationType = exports.NotificationType || (exports.NotificationType = {}));

	});

	var PlaybackState_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.PlaybackState = void 0;
	var PlaybackState;
	(function (PlaybackState) {
	    PlaybackState[PlaybackState["EMPTY"] = -2] = "EMPTY";
	    PlaybackState[PlaybackState["LOADING"] = -1] = "LOADING";
	    PlaybackState[PlaybackState["STOPPED"] = 0] = "STOPPED";
	    PlaybackState[PlaybackState["PLAYING"] = 1] = "PLAYING";
	    PlaybackState[PlaybackState["PAUSED"] = 2] = "PAUSED";
	    PlaybackState[PlaybackState["BUFFERING"] = 3] = "BUFFERING";
	})(PlaybackState = exports.PlaybackState || (exports.PlaybackState = {}));

	});

	var PlayerEvent_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.PlayerEvent = void 0;
	var PlayerEvent;
	(function (PlayerEvent) {
	    PlayerEvent["READY"] = "ready";
	    PlayerEvent["AD_CUEPOINTS_AVAILABLE"] = "adCuepointsAvailable";
	    PlayerEvent["AD_BREAK_START"] = "adBreakStart";
	    PlayerEvent["AD_BREAK_METADATA"] = "adBreakMetadata";
	    PlayerEvent["AD_BREAK_COMPLETE"] = "adBreakComplete";
	    PlayerEvent["AD_START"] = "adStart";
	    PlayerEvent["AD_COMPLETE"] = "adComplete";
	    PlayerEvent["AD_FIRST_QUARTILE"] = "adFirstQuartile";
	    PlayerEvent["AD_MIDPOINT"] = "adMidPoint";
	    PlayerEvent["AD_THIRD_QUARTILE"] = "adThirdQuartile";
	    PlayerEvent["AD_ERROR"] = "adError";
	    PlayerEvent["AD_CLICK"] = "adClick";
	    PlayerEvent["AD_SKIPPED"] = "adSkipped";
	    PlayerEvent["AD_PROGRESS"] = "adProgress";
	    PlayerEvent["AD_PAUSED"] = "adPaused";
	    PlayerEvent["AD_PLAYING"] = "adPlaying";
	    PlayerEvent["AD_STALLED"] = "adStalled";
	    PlayerEvent["AD_BREAK_DISCARDED"] = "adBreakDiscarded";
	    PlayerEvent["AUDIO_TRACK_INFO_CHANGE"] = "audioTrackInfoChange";
	    PlayerEvent["AUDIO_TRACK_CHANGE"] = "audioTrackChange";
	    PlayerEvent["QUALITY_CHANGE"] = "qualityChange";
	    PlayerEvent["QUALITY_INFO_CHANGE"] = "qualityInfoChange";
	    PlayerEvent["CDN_CHANGE"] = "cdnChange";
	    PlayerEvent["CONTENT_START"] = "contentStart";
	    PlayerEvent["CONTENT_DURATION_AVAILABLE"] = "contentDurationAvailable";
	    PlayerEvent["CONTENT_SEGMENT_START"] = "contentSegmentStart";
	    PlayerEvent["CONTENT_PLAYING"] = "contentPlaying";
	    PlayerEvent["CONTENT_PROGRESS"] = "contentProgress";
	    PlayerEvent["CONTENT_PAUSED"] = "contentPaused";
	    PlayerEvent["CONTENT_SEGMENT_END"] = "contentSegmentEnd";
	    PlayerEvent["CONTENT_COMPLETE"] = "contentComplete";
	    PlayerEvent["CONTENT_IS_PLAYING_LIVE"] = "contentIsPlayingLive";
	    PlayerEvent["STREAM_TYPE_CHANGE"] = "streamTypeChange";
	    PlayerEvent["STREAM_METADATA"] = "streamMetadata";
	    PlayerEvent["DRM_KEYSYSTEM_CREATED"] = "drmKeySystemCreated";
	    PlayerEvent["FATAL_ERROR"] = "fatalError";
	    PlayerEvent["ERROR"] = "error";
	    PlayerEvent["PLAYLIST_ADVANCED"] = "playlistAdvanced";
	    PlayerEvent["PLAYLIST_COMPLETE"] = "playlistComplete";
	    PlayerEvent["PLAYLIST_CHANGE"] = "playlistChange";
	    PlayerEvent["PLAYLIST_CLEARED"] = "playlistCleared";
	    PlayerEvent["PLAYLIST_OUT_OF_RANGE"] = "playlistOutOfRange";
	    PlayerEvent["PLAYLIST_CURRENT_RESOURCE_CLEARED"] = "playlistCurrentResourceCleared";
	    PlayerEvent["POSTER_CLICK"] = "posterClick";
	    PlayerEvent["PLAYBACK_SUSPENDED"] = "playbackSuspended";
	    PlayerEvent["PLAYBACK_RESUMED"] = "playbackResumed";
	    PlayerEvent["RESOURCE_START"] = "resourceStart";
	    PlayerEvent["RESOURCE_END"] = "resourceEnd";
	    PlayerEvent["RESOURCE_INTERRUPTED"] = "resourceInterrupted";
	    PlayerEvent["RESOURCE_ERROR"] = "resourceError";
	    PlayerEvent["RESOURCE_BUFFERING"] = "resourceBuffering";
	    PlayerEvent["SEEK_COMPLETE"] = "seekComplete";
	    PlayerEvent["SEEK_START"] = "seekStart";
	    PlayerEvent["SEEK_REDIRECT_START"] = "seekRedirectStart";
	    PlayerEvent["SEEK_REDIRECT_COMPLETE"] = "seekRedirectComplete";
	    PlayerEvent["METADATA_CUEPOINT"] = "metadataCuepoint";
	    PlayerEvent["TEXT_CUEPOINT"] = "textCuepoint";
	    PlayerEvent["TEXT_TRACK_CHANGE"] = "textTrackChange";
	    PlayerEvent["TEXT_TRACK_INFO_CHANGE"] = "textTrackInfoChange";
	    PlayerEvent["TEXT_TRACK_DISPLAY_MODE_CHANGE"] = "textTrackDisplayModeChange";
	    PlayerEvent["TEXT_TRACK_AVAILABLE"] = "textTrackAvailable";
	    PlayerEvent["THUMBNAIL_TRACK_AVAILABLE"] = "thumbnailTrackAvailable";
	    PlayerEvent["VIDEO_START_ERROR"] = "videoStartError";
	    PlayerEvent["VIDEO_PLAYBACK_ERROR"] = "videoPlaybackError";
	    PlayerEvent["VIDEO_LOAD_COMPLETE"] = "videoLoadComplete";
	    PlayerEvent["BEFORE_CONTROLS_VISIBLE"] = "beforeControlsVisible";
	    PlayerEvent["BEFORE_CONTROLS_HIDDEN"] = "beforeControlsHidden";
	    PlayerEvent["CONTROLS_VISIBLE"] = "controlsVisible";
	    PlayerEvent["CONTROLS_HIDDEN"] = "controlsHidden";
	    PlayerEvent["LIVE_PRESENTATION_STOPPED"] = "livePresentationStopped";
	    PlayerEvent["PRESENTATION_SIZE_CHANGE"] = "presentationSizeChange";
	    PlayerEvent["FULLSCREEN_ENTER"] = "fullscreenEnter";
	    PlayerEvent["FULLSCREEN_EXIT"] = "fullscreenExit";
	    PlayerEvent["MOUSE_ENTER_PRESENTATION"] = "mouseEnterPresentation";
	    PlayerEvent["MOUSE_LEAVE_PRESENTATION"] = "mouseLeavePresentation";
	    PlayerEvent["USER_PAUSE"] = "userPause";
	    PlayerEvent["USER_SETTINGS"] = "userSettings";
	    PlayerEvent["LOG_EVENT"] = "logEvent";
	    PlayerEvent["PLUGIN_EVENT"] = "pluginEvent";
	    PlayerEvent["LANGUAGE_CHANGE"] = "languageChange";
	    PlayerEvent["USER_KEYBOARD_COMMAND"] = "userKeyboardCommand";
	    PlayerEvent["AUTOPLAY_BLOCKED"] = "autoplayBlocked";
	})(PlayerEvent = exports.PlayerEvent || (exports.PlayerEvent = {}));

	});

	var ProxyName_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ProxyName = void 0;
	var ProxyName;
	(function (ProxyName) {
	    ProxyName["AdDataProxy"] = "AdDataProxy";
	    ProxyName["ContentPlaybackStateProxy"] = "ContentPlaybackStateProxy";
	    ProxyName["PlayerDomProxy"] = "PlayerDomProxy";
	    ProxyName["Playlist"] = "PlaylistProxy";
	    ProxyName["ModelCollectionProxy"] = "ModelCollectionProxy";
	    ProxyName["ResourceProxy"] = "ResourceProxy";
	    ProxyName["TrackingConfigProxy"] = "TrackingConfigProxy";
	    ProxyName["PerformanceProxy"] = "PerformanceProxy";
	    ProxyName["TextTrackProxy"] = "TextTrackProxy";
	    ProxyName["LocalizationProxy"] = "LocalizationProxy";
	})(ProxyName = exports.ProxyName || (exports.ProxyName = {}));

	});

	var StreamType_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.StreamType = void 0;
	var StreamType;
	(function (StreamType) {
	    StreamType["VOD"] = "VOD";
	    StreamType["LIVE"] = "LIVE";
	    StreamType["DVR"] = "DVR";
	})(StreamType = exports.StreamType || (exports.StreamType = {}));

	});

	var Playback_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Playback = void 0;
	var Playback;
	(function (Playback) {
	    Playback["MULTI_CDN"] = "x-cdn";
	    Playback["VIDEO"] = "video";
	    Playback["AUDIO"] = "audio";
	    Playback["TEXT"] = "text";
	    Playback["ABR_SWITCHING_MODE_AUTO"] = "auto";
	    Playback["ABR_SWITCHING_MODE_MANUAL"] = "manual";
	    Playback["ABR_SWITCHING_MODE_UNAVAILABLE"] = "unavailable";
	})(Playback = exports.Playback || (exports.Playback = {}));

	});

	var LogService_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.LogService = void 0;


	var LogService = (function (_super) {
	    tslib_es6.__extends(LogService, _super);
	    function LogService(name, logger) {
	        var _this = _super.call(this, name) || this;
	        _this.pLogger = logger;
	        return _this;
	    }
	    LogService.prototype.destroy = function () {
	        this.pLogger.destroy();
	        this.pLogger = null;
	    };
	    Object.defineProperty(LogService.prototype, "logger", {
	        get: function () {
	            return this.pLogger;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    return LogService;
	}(ServiceBase_1.ServiceBase));
	exports.LogService = LogService;

	});

	var event_map = createCommonjsModule(function (module, exports) {
	var _a;
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.event_map = void 0;


	exports.event_map = (_a = {},
	    _a[NotificationName_1.NotificationName.READY] = PlayerEvent_1.PlayerEvent.READY,
	    _a[NotificationName_1.NotificationName.POSTER_CLICK] = PlayerEvent_1.PlayerEvent.POSTER_CLICK,
	    _a[NotificationName_1.NotificationName.VIDEO_START_ERROR] = PlayerEvent_1.PlayerEvent.VIDEO_START_ERROR,
	    _a[NotificationName_1.NotificationName.VIDEO_PLAYBACK_ERROR] = PlayerEvent_1.PlayerEvent.VIDEO_PLAYBACK_ERROR,
	    _a[NotificationName_1.NotificationName.RESOURCE_ERROR] = PlayerEvent_1.PlayerEvent.RESOURCE_ERROR,
	    _a[NotificationName_1.NotificationName.PLAYLIST_ADVANCED] = PlayerEvent_1.PlayerEvent.PLAYLIST_ADVANCED,
	    _a[NotificationName_1.NotificationName.PLAYLIST_COMPLETE] = PlayerEvent_1.PlayerEvent.PLAYLIST_COMPLETE,
	    _a[NotificationName_1.NotificationName.PLAYLIST_CHANGE] = PlayerEvent_1.PlayerEvent.PLAYLIST_CHANGE,
	    _a[NotificationName_1.NotificationName.PLAYLIST_CLEARED] = PlayerEvent_1.PlayerEvent.PLAYLIST_CLEARED,
	    _a[NotificationName_1.NotificationName.PLAYLIST_CURRENT_RESOURCE_CLEARED] = PlayerEvent_1.PlayerEvent.PLAYLIST_CURRENT_RESOURCE_CLEARED,
	    _a[NotificationName_1.NotificationName.RESOURCE_START] = PlayerEvent_1.PlayerEvent.RESOURCE_START,
	    _a[NotificationName_1.NotificationName.RESOURCE_END] = PlayerEvent_1.PlayerEvent.RESOURCE_END,
	    _a[NotificationName_1.NotificationName.RESOURCE_INTERRUPTED] = PlayerEvent_1.PlayerEvent.RESOURCE_INTERRUPTED,
	    _a[NotificationName_1.NotificationName.PLAYLIST_OUT_OF_RANGE] = PlayerEvent_1.PlayerEvent.PLAYLIST_OUT_OF_RANGE,
	    _a[NotificationName_1.NotificationName.PLAYBACK_SUSPENDED] = PlayerEvent_1.PlayerEvent.PLAYBACK_SUSPENDED,
	    _a[NotificationName_1.NotificationName.PLAYBACK_RESUMED] = PlayerEvent_1.PlayerEvent.PLAYBACK_RESUMED,
	    _a[NotificationName_1.NotificationName.AUDIO_TRACK_INFO_CHANGE] = PlayerEvent_1.PlayerEvent.AUDIO_TRACK_INFO_CHANGE,
	    _a[NotificationName_1.NotificationName.AUDIO_TRACK_CHANGE] = PlayerEvent_1.PlayerEvent.AUDIO_TRACK_CHANGE,
	    _a[NotificationName_1.NotificationName.QUALITY_CHANGE] = PlayerEvent_1.PlayerEvent.QUALITY_CHANGE,
	    _a[NotificationName_1.NotificationName.QUALITY_INFO_CHANGE] = PlayerEvent_1.PlayerEvent.QUALITY_INFO_CHANGE,
	    _a[NotificationName_1.NotificationName.CDN_CHANGE] = PlayerEvent_1.PlayerEvent.CDN_CHANGE,
	    _a[NotificationName_1.NotificationName.CONTENT_START] = PlayerEvent_1.PlayerEvent.CONTENT_START,
	    _a[NotificationName_1.NotificationName.CONTENT_DURATION_AVAILABLE] = PlayerEvent_1.PlayerEvent.CONTENT_DURATION_AVAILABLE,
	    _a[NotificationName_1.NotificationName.CONTENT_SEGMENT_START] = PlayerEvent_1.PlayerEvent.CONTENT_SEGMENT_START,
	    _a[NotificationName_1.NotificationName.CONTENT_TIME_UPDATE] = PlayerEvent_1.PlayerEvent.CONTENT_PROGRESS,
	    _a[NotificationName_1.NotificationName.CONTENT_BUFFERING] = PlayerEvent_1.PlayerEvent.RESOURCE_BUFFERING,
	    _a[NotificationName_1.NotificationName.CONTENT_PLAYING] = PlayerEvent_1.PlayerEvent.CONTENT_PLAYING,
	    _a[NotificationName_1.NotificationName.CONTENT_PAUSED] = PlayerEvent_1.PlayerEvent.CONTENT_PAUSED,
	    _a[NotificationName_1.NotificationName.CONTENT_SEEKING] = PlayerEvent_1.PlayerEvent.SEEK_START,
	    _a[NotificationName_1.NotificationName.CONTENT_SEEKED] = PlayerEvent_1.PlayerEvent.SEEK_COMPLETE,
	    _a[NotificationName_1.NotificationName.CONTENT_IS_LIVE_CHANGED] = PlayerEvent_1.PlayerEvent.CONTENT_IS_PLAYING_LIVE,
	    _a[NotificationName_1.NotificationName.STREAM_TYPE_CHANGE] = PlayerEvent_1.PlayerEvent.STREAM_TYPE_CHANGE,
	    _a[NotificationName_1.NotificationName.STREAM_METADATA] = PlayerEvent_1.PlayerEvent.STREAM_METADATA,
	    _a[NotificationName_1.NotificationName.SEEK_REDIRECT_START] = PlayerEvent_1.PlayerEvent.SEEK_REDIRECT_START,
	    _a[NotificationName_1.NotificationName.SEEK_REDIRECT_COMPLETE] = PlayerEvent_1.PlayerEvent.SEEK_REDIRECT_COMPLETE,
	    _a[NotificationName_1.NotificationName.CONTENT_SEGMENT_END] = PlayerEvent_1.PlayerEvent.CONTENT_SEGMENT_END,
	    _a[NotificationName_1.NotificationName.CONTENT_COMPLETE] = PlayerEvent_1.PlayerEvent.CONTENT_COMPLETE,
	    _a[NotificationName_1.NotificationName.DRM_KEYSYSTEM_CREATED] = PlayerEvent_1.PlayerEvent.DRM_KEYSYSTEM_CREATED,
	    _a[NotificationName_1.NotificationName.METADATA_CUEPOINT] = PlayerEvent_1.PlayerEvent.METADATA_CUEPOINT,
	    _a[NotificationName_1.NotificationName.TEXT_CUEPOINT] = PlayerEvent_1.PlayerEvent.TEXT_CUEPOINT,
	    _a[NotificationName_1.NotificationName.TEXT_TRACK_DISPLAY_MODE_CHANGE] = PlayerEvent_1.PlayerEvent.TEXT_TRACK_DISPLAY_MODE_CHANGE,
	    _a[NotificationName_1.NotificationName.TEXT_TRACK_CHANGE] = PlayerEvent_1.PlayerEvent.TEXT_TRACK_CHANGE,
	    _a[NotificationName_1.NotificationName.TEXT_TRACK_INFO_CHANGE] = PlayerEvent_1.PlayerEvent.TEXT_TRACK_INFO_CHANGE,
	    _a[NotificationName_1.NotificationName.TEXT_TRACK_AVAILABLE] = PlayerEvent_1.PlayerEvent.TEXT_TRACK_AVAILABLE,
	    _a[NotificationName_1.NotificationName.VIDEO_LOAD_COMPLETE] = PlayerEvent_1.PlayerEvent.VIDEO_LOAD_COMPLETE,
	    _a[NotificationName_1.NotificationName.THUMBNAIL_TRACK_AVAILABLE] = PlayerEvent_1.PlayerEvent.THUMBNAIL_TRACK_AVAILABLE,
	    _a[NotificationName_1.NotificationName.AD_CUEPOINTS_AVAILABLE] = PlayerEvent_1.PlayerEvent.AD_CUEPOINTS_AVAILABLE,
	    _a[NotificationName_1.NotificationName.AD_BREAK_START] = PlayerEvent_1.PlayerEvent.AD_BREAK_START,
	    _a[NotificationName_1.NotificationName.AD_BREAK_METADATA] = PlayerEvent_1.PlayerEvent.AD_BREAK_METADATA,
	    _a[NotificationName_1.NotificationName.AD_START] = PlayerEvent_1.PlayerEvent.AD_START,
	    _a[NotificationName_1.NotificationName.AD_PAUSED] = PlayerEvent_1.PlayerEvent.AD_PAUSED,
	    _a[NotificationName_1.NotificationName.AD_PLAYING] = PlayerEvent_1.PlayerEvent.AD_PLAYING,
	    _a[NotificationName_1.NotificationName.AD_TIME_UPDATE] = PlayerEvent_1.PlayerEvent.AD_PROGRESS,
	    _a[NotificationName_1.NotificationName.AD_FIRST_QUARTILE] = PlayerEvent_1.PlayerEvent.AD_FIRST_QUARTILE,
	    _a[NotificationName_1.NotificationName.AD_MIDPOINT] = PlayerEvent_1.PlayerEvent.AD_MIDPOINT,
	    _a[NotificationName_1.NotificationName.AD_THIRD_QUARTILE] = PlayerEvent_1.PlayerEvent.AD_THIRD_QUARTILE,
	    _a[NotificationName_1.NotificationName.AD_COMPLETE] = PlayerEvent_1.PlayerEvent.AD_COMPLETE,
	    _a[NotificationName_1.NotificationName.AD_BREAK_COMPLETE] = PlayerEvent_1.PlayerEvent.AD_BREAK_COMPLETE,
	    _a[NotificationName_1.NotificationName.AD_ERROR] = PlayerEvent_1.PlayerEvent.AD_ERROR,
	    _a[NotificationName_1.NotificationName.AD_STALLED] = PlayerEvent_1.PlayerEvent.AD_STALLED,
	    _a[NotificationName_1.NotificationName.AD_BREAK_DISCARDED] = PlayerEvent_1.PlayerEvent.AD_BREAK_DISCARDED,
	    _a[NotificationName_1.NotificationName.AD_BUFFERING] = PlayerEvent_1.PlayerEvent.RESOURCE_BUFFERING,
	    _a[NotificationName_1.NotificationName.AD_CLICK] = PlayerEvent_1.PlayerEvent.AD_CLICK,
	    _a[NotificationName_1.NotificationName.AD_SKIPPED] = PlayerEvent_1.PlayerEvent.AD_SKIPPED,
	    _a[NotificationName_1.NotificationName.USER_PAUSE] = PlayerEvent_1.PlayerEvent.USER_PAUSE,
	    _a[NotificationName_1.NotificationName.BEFORE_CONTROLS_VISIBLE] = PlayerEvent_1.PlayerEvent.BEFORE_CONTROLS_VISIBLE,
	    _a[NotificationName_1.NotificationName.BEFORE_CONTROLS_HIDDEN] = PlayerEvent_1.PlayerEvent.BEFORE_CONTROLS_HIDDEN,
	    _a[NotificationName_1.NotificationName.CONTROLS_VISIBLE] = PlayerEvent_1.PlayerEvent.CONTROLS_VISIBLE,
	    _a[NotificationName_1.NotificationName.CONTROLS_HIDDEN] = PlayerEvent_1.PlayerEvent.CONTROLS_HIDDEN,
	    _a[NotificationName_1.NotificationName.USER_SETTINGS_REQUEST] = PlayerEvent_1.PlayerEvent.USER_SETTINGS,
	    _a[NotificationName_1.NotificationName.LIVE_PRESENTATION_STOPPED] = PlayerEvent_1.PlayerEvent.LIVE_PRESENTATION_STOPPED,
	    _a[NotificationName_1.NotificationName.PRESENTATION_SIZE_CHANGE] = PlayerEvent_1.PlayerEvent.PRESENTATION_SIZE_CHANGE,
	    _a[NotificationName_1.NotificationName.FULLSCREEN_ENTER] = PlayerEvent_1.PlayerEvent.FULLSCREEN_ENTER,
	    _a[NotificationName_1.NotificationName.FULLSCREEN_EXIT] = PlayerEvent_1.PlayerEvent.FULLSCREEN_EXIT,
	    _a[NotificationName_1.NotificationName.MOUSE_ENTER_PRESENTATION] = PlayerEvent_1.PlayerEvent.MOUSE_ENTER_PRESENTATION,
	    _a[NotificationName_1.NotificationName.MOUSE_LEAVE_PRESENTATION] = PlayerEvent_1.PlayerEvent.MOUSE_LEAVE_PRESENTATION,
	    _a[NotificationName_1.NotificationName.LANGUAGE_CHANGE] = PlayerEvent_1.PlayerEvent.LANGUAGE_CHANGE,
	    _a[NotificationName_1.NotificationName.USER_KEYBOARD_COMMAND] = PlayerEvent_1.PlayerEvent.USER_KEYBOARD_COMMAND,
	    _a[NotificationName_1.NotificationName.AUTOPLAY_BLOCKED] = PlayerEvent_1.PlayerEvent.AUTOPLAY_BLOCKED,
	    _a);

	});

	var bind = function bind(fn, thisArg) {
	  return function wrap() {
	    var args = new Array(arguments.length);
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }
	    return fn.apply(thisArg, args);
	  };
	};

	/*!
	 * Determine if an object is a Buffer
	 *
	 * @author   Feross Aboukhadijeh <https://feross.org>
	 * @license  MIT
	 */

	var isBuffer = function isBuffer (obj) {
	  return obj != null && obj.constructor != null &&
	    typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
	};

	/*global toString:true*/

	// utils is a library of generic helper functions non-specific to axios

	var toString = Object.prototype.toString;

	/**
	 * Determine if a value is an Array
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Array, otherwise false
	 */
	function isArray(val) {
	  return toString.call(val) === '[object Array]';
	}

	/**
	 * Determine if a value is an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
	 */
	function isArrayBuffer(val) {
	  return toString.call(val) === '[object ArrayBuffer]';
	}

	/**
	 * Determine if a value is a FormData
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an FormData, otherwise false
	 */
	function isFormData(val) {
	  return (typeof FormData !== 'undefined') && (val instanceof FormData);
	}

	/**
	 * Determine if a value is a view on an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
	 */
	function isArrayBufferView(val) {
	  var result;
	  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
	    result = ArrayBuffer.isView(val);
	  } else {
	    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
	  }
	  return result;
	}

	/**
	 * Determine if a value is a String
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a String, otherwise false
	 */
	function isString(val) {
	  return typeof val === 'string';
	}

	/**
	 * Determine if a value is a Number
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Number, otherwise false
	 */
	function isNumber(val) {
	  return typeof val === 'number';
	}

	/**
	 * Determine if a value is undefined
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if the value is undefined, otherwise false
	 */
	function isUndefined(val) {
	  return typeof val === 'undefined';
	}

	/**
	 * Determine if a value is an Object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Object, otherwise false
	 */
	function isObject(val) {
	  return val !== null && typeof val === 'object';
	}

	/**
	 * Determine if a value is a Date
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Date, otherwise false
	 */
	function isDate(val) {
	  return toString.call(val) === '[object Date]';
	}

	/**
	 * Determine if a value is a File
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a File, otherwise false
	 */
	function isFile(val) {
	  return toString.call(val) === '[object File]';
	}

	/**
	 * Determine if a value is a Blob
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Blob, otherwise false
	 */
	function isBlob(val) {
	  return toString.call(val) === '[object Blob]';
	}

	/**
	 * Determine if a value is a Function
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Function, otherwise false
	 */
	function isFunction(val) {
	  return toString.call(val) === '[object Function]';
	}

	/**
	 * Determine if a value is a Stream
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Stream, otherwise false
	 */
	function isStream(val) {
	  return isObject(val) && isFunction(val.pipe);
	}

	/**
	 * Determine if a value is a URLSearchParams object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
	 */
	function isURLSearchParams(val) {
	  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
	}

	/**
	 * Trim excess whitespace off the beginning and end of a string
	 *
	 * @param {String} str The String to trim
	 * @returns {String} The String freed of excess whitespace
	 */
	function trim(str) {
	  return str.replace(/^\s*/, '').replace(/\s*$/, '');
	}

	/**
	 * Determine if we're running in a standard browser environment
	 *
	 * This allows axios to run in a web worker, and react-native.
	 * Both environments support XMLHttpRequest, but not fully standard globals.
	 *
	 * web workers:
	 *  typeof window -> undefined
	 *  typeof document -> undefined
	 *
	 * react-native:
	 *  navigator.product -> 'ReactNative'
	 */
	function isStandardBrowserEnv() {
	  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
	    return false;
	  }
	  return (
	    typeof window !== 'undefined' &&
	    typeof document !== 'undefined'
	  );
	}

	/**
	 * Iterate over an Array or an Object invoking a function for each item.
	 *
	 * If `obj` is an Array callback will be called passing
	 * the value, index, and complete array for each item.
	 *
	 * If 'obj' is an Object callback will be called passing
	 * the value, key, and complete object for each property.
	 *
	 * @param {Object|Array} obj The object to iterate
	 * @param {Function} fn The callback to invoke for each item
	 */
	function forEach(obj, fn) {
	  // Don't bother if no value provided
	  if (obj === null || typeof obj === 'undefined') {
	    return;
	  }

	  // Force an array if not already something iterable
	  if (typeof obj !== 'object') {
	    /*eslint no-param-reassign:0*/
	    obj = [obj];
	  }

	  if (isArray(obj)) {
	    // Iterate over array values
	    for (var i = 0, l = obj.length; i < l; i++) {
	      fn.call(null, obj[i], i, obj);
	    }
	  } else {
	    // Iterate over object keys
	    for (var key in obj) {
	      if (Object.prototype.hasOwnProperty.call(obj, key)) {
	        fn.call(null, obj[key], key, obj);
	      }
	    }
	  }
	}

	/**
	 * Accepts varargs expecting each argument to be an object, then
	 * immutably merges the properties of each object and returns result.
	 *
	 * When multiple objects contain the same key the later object in
	 * the arguments list will take precedence.
	 *
	 * Example:
	 *
	 * ```js
	 * var result = merge({foo: 123}, {foo: 456});
	 * console.log(result.foo); // outputs 456
	 * ```
	 *
	 * @param {Object} obj1 Object to merge
	 * @returns {Object} Result of all merge properties
	 */
	function merge(/* obj1, obj2, obj3, ... */) {
	  var result = {};
	  function assignValue(val, key) {
	    if (typeof result[key] === 'object' && typeof val === 'object') {
	      result[key] = merge(result[key], val);
	    } else {
	      result[key] = val;
	    }
	  }

	  for (var i = 0, l = arguments.length; i < l; i++) {
	    forEach(arguments[i], assignValue);
	  }
	  return result;
	}

	/**
	 * Extends object a by mutably adding to it the properties of object b.
	 *
	 * @param {Object} a The object to be extended
	 * @param {Object} b The object to copy properties from
	 * @param {Object} thisArg The object to bind function to
	 * @return {Object} The resulting value of object a
	 */
	function extend(a, b, thisArg) {
	  forEach(b, function assignValue(val, key) {
	    if (thisArg && typeof val === 'function') {
	      a[key] = bind(val, thisArg);
	    } else {
	      a[key] = val;
	    }
	  });
	  return a;
	}

	var utils = {
	  isArray: isArray,
	  isArrayBuffer: isArrayBuffer,
	  isBuffer: isBuffer,
	  isFormData: isFormData,
	  isArrayBufferView: isArrayBufferView,
	  isString: isString,
	  isNumber: isNumber,
	  isObject: isObject,
	  isUndefined: isUndefined,
	  isDate: isDate,
	  isFile: isFile,
	  isBlob: isBlob,
	  isFunction: isFunction,
	  isStream: isStream,
	  isURLSearchParams: isURLSearchParams,
	  isStandardBrowserEnv: isStandardBrowserEnv,
	  forEach: forEach,
	  merge: merge,
	  extend: extend,
	  trim: trim
	};

	var normalizeHeaderName = function normalizeHeaderName(headers, normalizedName) {
	  utils.forEach(headers, function processHeader(value, name) {
	    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
	      headers[normalizedName] = value;
	      delete headers[name];
	    }
	  });
	};

	/**
	 * Update an Error with the specified config, error code, and response.
	 *
	 * @param {Error} error The error to update.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 * @param {Object} [request] The request.
	 * @param {Object} [response] The response.
	 * @returns {Error} The error.
	 */
	var enhanceError = function enhanceError(error, config, code, request, response) {
	  error.config = config;
	  if (code) {
	    error.code = code;
	  }
	  error.request = request;
	  error.response = response;
	  return error;
	};

	/**
	 * Create an Error with the specified message, config, error code, request and response.
	 *
	 * @param {string} message The error message.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 * @param {Object} [request] The request.
	 * @param {Object} [response] The response.
	 * @returns {Error} The created error.
	 */
	var createError = function createError(message, config, code, request, response) {
	  var error = new Error(message);
	  return enhanceError(error, config, code, request, response);
	};

	/**
	 * Resolve or reject a Promise based on response status.
	 *
	 * @param {Function} resolve A function that resolves the promise.
	 * @param {Function} reject A function that rejects the promise.
	 * @param {object} response The response.
	 */
	var settle = function settle(resolve, reject, response) {
	  var validateStatus = response.config.validateStatus;
	  // Note: status is not exposed by XDomainRequest
	  if (!response.status || !validateStatus || validateStatus(response.status)) {
	    resolve(response);
	  } else {
	    reject(createError(
	      'Request failed with status code ' + response.status,
	      response.config,
	      null,
	      response.request,
	      response
	    ));
	  }
	};

	function encode(val) {
	  return encodeURIComponent(val).
	    replace(/%40/gi, '@').
	    replace(/%3A/gi, ':').
	    replace(/%24/g, '$').
	    replace(/%2C/gi, ',').
	    replace(/%20/g, '+').
	    replace(/%5B/gi, '[').
	    replace(/%5D/gi, ']');
	}

	/**
	 * Build a URL by appending params to the end
	 *
	 * @param {string} url The base of the url (e.g., http://www.google.com)
	 * @param {object} [params] The params to be appended
	 * @returns {string} The formatted url
	 */
	var buildURL = function buildURL(url, params, paramsSerializer) {
	  /*eslint no-param-reassign:0*/
	  if (!params) {
	    return url;
	  }

	  var serializedParams;
	  if (paramsSerializer) {
	    serializedParams = paramsSerializer(params);
	  } else if (utils.isURLSearchParams(params)) {
	    serializedParams = params.toString();
	  } else {
	    var parts = [];

	    utils.forEach(params, function serialize(val, key) {
	      if (val === null || typeof val === 'undefined') {
	        return;
	      }

	      if (utils.isArray(val)) {
	        key = key + '[]';
	      } else {
	        val = [val];
	      }

	      utils.forEach(val, function parseValue(v) {
	        if (utils.isDate(v)) {
	          v = v.toISOString();
	        } else if (utils.isObject(v)) {
	          v = JSON.stringify(v);
	        }
	        parts.push(encode(key) + '=' + encode(v));
	      });
	    });

	    serializedParams = parts.join('&');
	  }

	  if (serializedParams) {
	    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
	  }

	  return url;
	};

	// Headers whose duplicates are ignored by node
	// c.f. https://nodejs.org/api/http.html#http_message_headers
	var ignoreDuplicateOf = [
	  'age', 'authorization', 'content-length', 'content-type', 'etag',
	  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
	  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
	  'referer', 'retry-after', 'user-agent'
	];

	/**
	 * Parse headers into an object
	 *
	 * ```
	 * Date: Wed, 27 Aug 2014 08:58:49 GMT
	 * Content-Type: application/json
	 * Connection: keep-alive
	 * Transfer-Encoding: chunked
	 * ```
	 *
	 * @param {String} headers Headers needing to be parsed
	 * @returns {Object} Headers parsed into an object
	 */
	var parseHeaders = function parseHeaders(headers) {
	  var parsed = {};
	  var key;
	  var val;
	  var i;

	  if (!headers) { return parsed; }

	  utils.forEach(headers.split('\n'), function parser(line) {
	    i = line.indexOf(':');
	    key = utils.trim(line.substr(0, i)).toLowerCase();
	    val = utils.trim(line.substr(i + 1));

	    if (key) {
	      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
	        return;
	      }
	      if (key === 'set-cookie') {
	        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
	      } else {
	        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
	      }
	    }
	  });

	  return parsed;
	};

	var isURLSameOrigin = (
	  utils.isStandardBrowserEnv() ?

	  // Standard browser envs have full support of the APIs needed to test
	  // whether the request URL is of the same origin as current location.
	  (function standardBrowserEnv() {
	    var msie = /(msie|trident)/i.test(navigator.userAgent);
	    var urlParsingNode = document.createElement('a');
	    var originURL;

	    /**
	    * Parse a URL to discover it's components
	    *
	    * @param {String} url The URL to be parsed
	    * @returns {Object}
	    */
	    function resolveURL(url) {
	      var href = url;

	      if (msie) {
	        // IE needs attribute set twice to normalize properties
	        urlParsingNode.setAttribute('href', href);
	        href = urlParsingNode.href;
	      }

	      urlParsingNode.setAttribute('href', href);

	      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
	      return {
	        href: urlParsingNode.href,
	        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
	        host: urlParsingNode.host,
	        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
	        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
	        hostname: urlParsingNode.hostname,
	        port: urlParsingNode.port,
	        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
	                  urlParsingNode.pathname :
	                  '/' + urlParsingNode.pathname
	      };
	    }

	    originURL = resolveURL(window.location.href);

	    /**
	    * Determine if a URL shares the same origin as the current location
	    *
	    * @param {String} requestURL The URL to test
	    * @returns {boolean} True if URL shares the same origin, otherwise false
	    */
	    return function isURLSameOrigin(requestURL) {
	      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
	      return (parsed.protocol === originURL.protocol &&
	            parsed.host === originURL.host);
	    };
	  })() :

	  // Non standard browser envs (web workers, react-native) lack needed support.
	  (function nonStandardBrowserEnv() {
	    return function isURLSameOrigin() {
	      return true;
	    };
	  })()
	);

	var cookies = (
	  utils.isStandardBrowserEnv() ?

	  // Standard browser envs support document.cookie
	  (function standardBrowserEnv() {
	    return {
	      write: function write(name, value, expires, path, domain, secure) {
	        var cookie = [];
	        cookie.push(name + '=' + encodeURIComponent(value));

	        if (utils.isNumber(expires)) {
	          cookie.push('expires=' + new Date(expires).toGMTString());
	        }

	        if (utils.isString(path)) {
	          cookie.push('path=' + path);
	        }

	        if (utils.isString(domain)) {
	          cookie.push('domain=' + domain);
	        }

	        if (secure === true) {
	          cookie.push('secure');
	        }

	        document.cookie = cookie.join('; ');
	      },

	      read: function read(name) {
	        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
	        return (match ? decodeURIComponent(match[3]) : null);
	      },

	      remove: function remove(name) {
	        this.write(name, '', Date.now() - 86400000);
	      }
	    };
	  })() :

	  // Non standard browser env (web workers, react-native) lack needed support.
	  (function nonStandardBrowserEnv() {
	    return {
	      write: function write() {},
	      read: function read() { return null; },
	      remove: function remove() {}
	    };
	  })()
	);

	var xhr = function xhrAdapter(config) {
	  return new Promise(function dispatchXhrRequest(resolve, reject) {
	    var requestData = config.data;
	    var requestHeaders = config.headers;

	    if (utils.isFormData(requestData)) {
	      delete requestHeaders['Content-Type']; // Let the browser set it
	    }

	    var request = new XMLHttpRequest();

	    // HTTP basic authentication
	    if (config.auth) {
	      var username = config.auth.username || '';
	      var password = config.auth.password || '';
	      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
	    }

	    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

	    // Set the request timeout in MS
	    request.timeout = config.timeout;

	    // Listen for ready state
	    request.onreadystatechange = function handleLoad() {
	      if (!request || request.readyState !== 4) {
	        return;
	      }

	      // The request errored out and we didn't get a response, this will be
	      // handled by onerror instead
	      // With one exception: request that using file: protocol, most browsers
	      // will return status as 0 even though it's a successful request
	      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
	        return;
	      }

	      // Prepare the response
	      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
	      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
	      var response = {
	        data: responseData,
	        status: request.status,
	        statusText: request.statusText,
	        headers: responseHeaders,
	        config: config,
	        request: request
	      };

	      settle(resolve, reject, response);

	      // Clean up request
	      request = null;
	    };

	    // Handle low level network errors
	    request.onerror = function handleError() {
	      // Real errors are hidden from us by the browser
	      // onerror should only fire if it's a network error
	      reject(createError('Network Error', config, null, request));

	      // Clean up request
	      request = null;
	    };

	    // Handle timeout
	    request.ontimeout = function handleTimeout() {
	      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
	        request));

	      // Clean up request
	      request = null;
	    };

	    // Add xsrf header
	    // This is only done if running in a standard browser environment.
	    // Specifically not if we're in a web worker, or react-native.
	    if (utils.isStandardBrowserEnv()) {
	      var cookies$1 = cookies;

	      // Add xsrf header
	      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
	          cookies$1.read(config.xsrfCookieName) :
	          undefined;

	      if (xsrfValue) {
	        requestHeaders[config.xsrfHeaderName] = xsrfValue;
	      }
	    }

	    // Add headers to the request
	    if ('setRequestHeader' in request) {
	      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
	        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
	          // Remove Content-Type if data is undefined
	          delete requestHeaders[key];
	        } else {
	          // Otherwise add header to the request
	          request.setRequestHeader(key, val);
	        }
	      });
	    }

	    // Add withCredentials to request if needed
	    if (config.withCredentials) {
	      request.withCredentials = true;
	    }

	    // Add responseType to request if needed
	    if (config.responseType) {
	      try {
	        request.responseType = config.responseType;
	      } catch (e) {
	        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
	        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
	        if (config.responseType !== 'json') {
	          throw e;
	        }
	      }
	    }

	    // Handle progress if needed
	    if (typeof config.onDownloadProgress === 'function') {
	      request.addEventListener('progress', config.onDownloadProgress);
	    }

	    // Not all browsers support upload events
	    if (typeof config.onUploadProgress === 'function' && request.upload) {
	      request.upload.addEventListener('progress', config.onUploadProgress);
	    }

	    if (config.cancelToken) {
	      // Handle cancellation
	      config.cancelToken.promise.then(function onCanceled(cancel) {
	        if (!request) {
	          return;
	        }

	        request.abort();
	        reject(cancel);
	        // Clean up request
	        request = null;
	      });
	    }

	    if (requestData === undefined) {
	      requestData = null;
	    }

	    // Send the request
	    request.send(requestData);
	  });
	};

	var DEFAULT_CONTENT_TYPE = {
	  'Content-Type': 'application/x-www-form-urlencoded'
	};

	function setContentTypeIfUnset(headers, value) {
	  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
	    headers['Content-Type'] = value;
	  }
	}

	function getDefaultAdapter() {
	  var adapter;
	  if (typeof XMLHttpRequest !== 'undefined') {
	    // For browsers use XHR adapter
	    adapter = xhr;
	  } else if (typeof process !== 'undefined') {
	    // For node use HTTP adapter
	    adapter = xhr;
	  }
	  return adapter;
	}

	var defaults = {
	  adapter: getDefaultAdapter(),

	  transformRequest: [function transformRequest(data, headers) {
	    normalizeHeaderName(headers, 'Content-Type');
	    if (utils.isFormData(data) ||
	      utils.isArrayBuffer(data) ||
	      utils.isBuffer(data) ||
	      utils.isStream(data) ||
	      utils.isFile(data) ||
	      utils.isBlob(data)
	    ) {
	      return data;
	    }
	    if (utils.isArrayBufferView(data)) {
	      return data.buffer;
	    }
	    if (utils.isURLSearchParams(data)) {
	      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
	      return data.toString();
	    }
	    if (utils.isObject(data)) {
	      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
	      return JSON.stringify(data);
	    }
	    return data;
	  }],

	  transformResponse: [function transformResponse(data) {
	    /*eslint no-param-reassign:0*/
	    if (typeof data === 'string') {
	      try {
	        data = JSON.parse(data);
	      } catch (e) { /* Ignore */ }
	    }
	    return data;
	  }],

	  /**
	   * A timeout in milliseconds to abort a request. If set to 0 (default) a
	   * timeout is not created.
	   */
	  timeout: 0,

	  xsrfCookieName: 'XSRF-TOKEN',
	  xsrfHeaderName: 'X-XSRF-TOKEN',

	  maxContentLength: -1,

	  validateStatus: function validateStatus(status) {
	    return status >= 200 && status < 300;
	  }
	};

	defaults.headers = {
	  common: {
	    'Accept': 'application/json, text/plain, */*'
	  }
	};

	utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
	  defaults.headers[method] = {};
	});

	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
	});

	var defaults_1 = defaults;

	function InterceptorManager() {
	  this.handlers = [];
	}

	/**
	 * Add a new interceptor to the stack
	 *
	 * @param {Function} fulfilled The function to handle `then` for a `Promise`
	 * @param {Function} rejected The function to handle `reject` for a `Promise`
	 *
	 * @return {Number} An ID used to remove interceptor later
	 */
	InterceptorManager.prototype.use = function use(fulfilled, rejected) {
	  this.handlers.push({
	    fulfilled: fulfilled,
	    rejected: rejected
	  });
	  return this.handlers.length - 1;
	};

	/**
	 * Remove an interceptor from the stack
	 *
	 * @param {Number} id The ID that was returned by `use`
	 */
	InterceptorManager.prototype.eject = function eject(id) {
	  if (this.handlers[id]) {
	    this.handlers[id] = null;
	  }
	};

	/**
	 * Iterate over all the registered interceptors
	 *
	 * This method is particularly useful for skipping over any
	 * interceptors that may have become `null` calling `eject`.
	 *
	 * @param {Function} fn The function to call for each interceptor
	 */
	InterceptorManager.prototype.forEach = function forEach(fn) {
	  utils.forEach(this.handlers, function forEachHandler(h) {
	    if (h !== null) {
	      fn(h);
	    }
	  });
	};

	var InterceptorManager_1 = InterceptorManager;

	/**
	 * Transform the data for a request or a response
	 *
	 * @param {Object|String} data The data to be transformed
	 * @param {Array} headers The headers for the request or response
	 * @param {Array|Function} fns A single function or Array of functions
	 * @returns {*} The resulting transformed data
	 */
	var transformData = function transformData(data, headers, fns) {
	  /*eslint no-param-reassign:0*/
	  utils.forEach(fns, function transform(fn) {
	    data = fn(data, headers);
	  });

	  return data;
	};

	var isCancel = function isCancel(value) {
	  return !!(value && value.__CANCEL__);
	};

	/**
	 * Determines whether the specified URL is absolute
	 *
	 * @param {string} url The URL to test
	 * @returns {boolean} True if the specified URL is absolute, otherwise false
	 */
	var isAbsoluteURL = function isAbsoluteURL(url) {
	  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
	  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
	  // by any combination of letters, digits, plus, period, or hyphen.
	  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
	};

	/**
	 * Creates a new URL by combining the specified URLs
	 *
	 * @param {string} baseURL The base URL
	 * @param {string} relativeURL The relative URL
	 * @returns {string} The combined URL
	 */
	var combineURLs = function combineURLs(baseURL, relativeURL) {
	  return relativeURL
	    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
	    : baseURL;
	};

	/**
	 * Throws a `Cancel` if cancellation has been requested.
	 */
	function throwIfCancellationRequested(config) {
	  if (config.cancelToken) {
	    config.cancelToken.throwIfRequested();
	  }
	}

	/**
	 * Dispatch a request to the server using the configured adapter.
	 *
	 * @param {object} config The config that is to be used for the request
	 * @returns {Promise} The Promise to be fulfilled
	 */
	var dispatchRequest = function dispatchRequest(config) {
	  throwIfCancellationRequested(config);

	  // Support baseURL config
	  if (config.baseURL && !isAbsoluteURL(config.url)) {
	    config.url = combineURLs(config.baseURL, config.url);
	  }

	  // Ensure headers exist
	  config.headers = config.headers || {};

	  // Transform request data
	  config.data = transformData(
	    config.data,
	    config.headers,
	    config.transformRequest
	  );

	  // Flatten headers
	  config.headers = utils.merge(
	    config.headers.common || {},
	    config.headers[config.method] || {},
	    config.headers || {}
	  );

	  utils.forEach(
	    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
	    function cleanHeaderConfig(method) {
	      delete config.headers[method];
	    }
	  );

	  var adapter = config.adapter || defaults_1.adapter;

	  return adapter(config).then(function onAdapterResolution(response) {
	    throwIfCancellationRequested(config);

	    // Transform response data
	    response.data = transformData(
	      response.data,
	      response.headers,
	      config.transformResponse
	    );

	    return response;
	  }, function onAdapterRejection(reason) {
	    if (!isCancel(reason)) {
	      throwIfCancellationRequested(config);

	      // Transform response data
	      if (reason && reason.response) {
	        reason.response.data = transformData(
	          reason.response.data,
	          reason.response.headers,
	          config.transformResponse
	        );
	      }
	    }

	    return Promise.reject(reason);
	  });
	};

	/**
	 * Create a new instance of Axios
	 *
	 * @param {Object} instanceConfig The default config for the instance
	 */
	function Axios(instanceConfig) {
	  this.defaults = instanceConfig;
	  this.interceptors = {
	    request: new InterceptorManager_1(),
	    response: new InterceptorManager_1()
	  };
	}

	/**
	 * Dispatch a request
	 *
	 * @param {Object} config The config specific for this request (merged with this.defaults)
	 */
	Axios.prototype.request = function request(config) {
	  /*eslint no-param-reassign:0*/
	  // Allow for axios('example/url'[, config]) a la fetch API
	  if (typeof config === 'string') {
	    config = utils.merge({
	      url: arguments[0]
	    }, arguments[1]);
	  }

	  config = utils.merge(defaults_1, {method: 'get'}, this.defaults, config);
	  config.method = config.method.toLowerCase();

	  // Hook up interceptors middleware
	  var chain = [dispatchRequest, undefined];
	  var promise = Promise.resolve(config);

	  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
	    chain.unshift(interceptor.fulfilled, interceptor.rejected);
	  });

	  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
	    chain.push(interceptor.fulfilled, interceptor.rejected);
	  });

	  while (chain.length) {
	    promise = promise.then(chain.shift(), chain.shift());
	  }

	  return promise;
	};

	// Provide aliases for supported request methods
	utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url
	    }));
	  };
	});

	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, data, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url,
	      data: data
	    }));
	  };
	});

	var Axios_1 = Axios;

	/**
	 * A `Cancel` is an object that is thrown when an operation is canceled.
	 *
	 * @class
	 * @param {string=} message The message.
	 */
	function Cancel(message) {
	  this.message = message;
	}

	Cancel.prototype.toString = function toString() {
	  return 'Cancel' + (this.message ? ': ' + this.message : '');
	};

	Cancel.prototype.__CANCEL__ = true;

	var Cancel_1 = Cancel;

	/**
	 * A `CancelToken` is an object that can be used to request cancellation of an operation.
	 *
	 * @class
	 * @param {Function} executor The executor function.
	 */
	function CancelToken(executor) {
	  if (typeof executor !== 'function') {
	    throw new TypeError('executor must be a function.');
	  }

	  var resolvePromise;
	  this.promise = new Promise(function promiseExecutor(resolve) {
	    resolvePromise = resolve;
	  });

	  var token = this;
	  executor(function cancel(message) {
	    if (token.reason) {
	      // Cancellation has already been requested
	      return;
	    }

	    token.reason = new Cancel_1(message);
	    resolvePromise(token.reason);
	  });
	}

	/**
	 * Throws a `Cancel` if cancellation has been requested.
	 */
	CancelToken.prototype.throwIfRequested = function throwIfRequested() {
	  if (this.reason) {
	    throw this.reason;
	  }
	};

	/**
	 * Returns an object that contains a new `CancelToken` and a function that, when called,
	 * cancels the `CancelToken`.
	 */
	CancelToken.source = function source() {
	  var cancel;
	  var token = new CancelToken(function executor(c) {
	    cancel = c;
	  });
	  return {
	    token: token,
	    cancel: cancel
	  };
	};

	var CancelToken_1 = CancelToken;

	/**
	 * Syntactic sugar for invoking a function and expanding an array for arguments.
	 *
	 * Common use case would be to use `Function.prototype.apply`.
	 *
	 *  ```js
	 *  function f(x, y, z) {}
	 *  var args = [1, 2, 3];
	 *  f.apply(null, args);
	 *  ```
	 *
	 * With `spread` this example can be re-written.
	 *
	 *  ```js
	 *  spread(function(x, y, z) {})([1, 2, 3]);
	 *  ```
	 *
	 * @param {Function} callback
	 * @returns {Function}
	 */
	var spread = function spread(callback) {
	  return function wrap(arr) {
	    return callback.apply(null, arr);
	  };
	};

	/**
	 * Create an instance of Axios
	 *
	 * @param {Object} defaultConfig The default config for the instance
	 * @return {Axios} A new instance of Axios
	 */
	function createInstance(defaultConfig) {
	  var context = new Axios_1(defaultConfig);
	  var instance = bind(Axios_1.prototype.request, context);

	  // Copy axios.prototype to instance
	  utils.extend(instance, Axios_1.prototype, context);

	  // Copy context to instance
	  utils.extend(instance, context);

	  return instance;
	}

	// Create the default instance to be exported
	var axios = createInstance(defaults_1);

	// Expose Axios class to allow class inheritance
	axios.Axios = Axios_1;

	// Factory for creating new instances
	axios.create = function create(instanceConfig) {
	  return createInstance(utils.merge(defaults_1, instanceConfig));
	};

	// Expose Cancel & CancelToken
	axios.Cancel = Cancel_1;
	axios.CancelToken = CancelToken_1;
	axios.isCancel = isCancel;

	// Expose all/spread
	axios.all = function all(promises) {
	  return Promise.all(promises);
	};
	axios.spread = spread;

	var axios_1 = axios;

	// Allow use of default import syntax in TypeScript
	var _default = axios;
	axios_1.default = _default;

	var axios$1 = axios_1;

	var RecoveryEnabledRequest_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.RecoveryEnabledRequest = void 0;


	var RecoveryEnabledRequest = (function (_super) {
	    tslib_es6.__extends(RecoveryEnabledRequest, _super);
	    function RecoveryEnabledRequest(options) {
	        var _this = _super.call(this, options) || this;
	        _this.retryCount = 0;
	        _this.limit = 0;
	        _this.retryIntervals = null;
	        var er = _this.opts.errorRecovery;
	        if (er && !isNaN(er.retryAttempts) && er.retryAttempts > 0) {
	            _this.limit = er.retryAttempts;
	        }
	        if (er && er.retryIntervals && Array.isArray(er.retryIntervals)) {
	            _this.retryIntervals = er.retryIntervals;
	        }
	        return _this;
	    }
	    RecoveryEnabledRequest.prototype.shouldRetry = function () {
	        return this.limit && !this.atLimit;
	    };
	    RecoveryEnabledRequest.prototype.incrementAttempts = function () {
	        this.retryCount++;
	    };
	    Object.defineProperty(RecoveryEnabledRequest.prototype, "retryLimit", {
	        get: function () {
	            return this.limit;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(RecoveryEnabledRequest.prototype, "atLimit", {
	        get: function () {
	            return this.retryCount == this.limit;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(RecoveryEnabledRequest.prototype, "retryInterval", {
	        get: function () {
	            return (this.retryIntervals && this.retryIntervals[this.retryCount - 1]) || this.retryCount * 300;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    return RecoveryEnabledRequest;
	}(Emitter_1.Emitter));
	exports.RecoveryEnabledRequest = RecoveryEnabledRequest;

	});

	var AsyncDataRequest_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.AsyncDataRequest = void 0;

	var axios_1 = tslib_es6.__importDefault(axios$1);


	var AsyncDataRequest = (function (_super) {
	    tslib_es6.__extends(AsyncDataRequest, _super);
	    function AsyncDataRequest(options) {
	        var _this = _super.call(this, options) || this;
	        if (_this.opts.url) {
	            _this.createXhr();
	        }
	        return _this;
	    }
	    AsyncDataRequest.load = function (options) {
	        return new Promise(function (resolve, reject) {
	            options.onComplete = function (_a) {
	                var data = _a.data;
	                return (data.error || data.timedOut) ? reject(data) : resolve(data);
	            };
	            new AsyncDataRequest(options);
	        });
	    };
	    AsyncDataRequest.prototype.createXhr = function () {
	        var _this = this;
	        axios_1.default(this.opts)
	            .then(function (response) {
	            if (response.headers['content-type'].indexOf('application/smil') >= 0) {
	                response.data = _this.processSmilResponse(response.data);
	            }
	            if (response.data === null) {
	                _this.emitCompleteWithError('Unable to parse response.', response.config);
	            }
	            else {
	                setTimeout(function () { _this.emitComplete(response); }, 1);
	            }
	        })
	            .catch(function (error) {
	            if (_this.shouldRetry()) {
	                _this.incrementAttempts();
	                setTimeout(function () { _this.createXhr(); }, _this.retryInterval);
	            }
	            else {
	                var msg = error.response || AsyncDataRequest.statusMessages['0'];
	                _this.emitCompleteWithError(msg, error.config);
	            }
	        });
	    };
	    AsyncDataRequest.prototype.emitComplete = function (res) {
	        this.emit(AsyncDataRequest.event.COMPLETE, {
	            response: res.data,
	            contentType: res.headers['content-type'],
	            error: false
	        });
	    };
	    AsyncDataRequest.prototype.emitCompleteWithError = function (errResponse, cfg) {
	        var msg = Util_1.Util.isString(errResponse) ? errResponse : null, res = !msg ? errResponse : null;
	        this.emit(AsyncDataRequest.event.COMPLETE, {
	            status: res && res.status,
	            error: true,
	            url: cfg && cfg.url || 'not available',
	            message: msg || this.getMsg(res && res.status || 0, res && res.data || null)
	        });
	    };
	    AsyncDataRequest.prototype.getMsg = function (stat, errorData) {
	        var m = AsyncDataRequest.statusMessages['' + stat];
	        if (!m) {
	            m = Util_1.Util.isString(errorData) ? errorData : "Unspecified error";
	        }
	        return "XhrDataRequest error: " + m;
	    };
	    AsyncDataRequest.prototype.processSmilResponse = function (data) {
	        var parser = new DOMParser(), parsedData = parser.parseFromString(data, 'application/xml');
	        return parsedData instanceof Document ? parsedData : null;
	    };
	    AsyncDataRequest.event = {
	        COMPLETE: "complete"
	    };
	    AsyncDataRequest.statusMessages = {
	        '0': 'Request failed; blocked or timed out',
	        '500': 'Server error encountered.',
	        '404': 'Resource not found.',
	        '403': 'Access denied.'
	    };
	    return AsyncDataRequest;
	}(RecoveryEnabledRequest_1.RecoveryEnabledRequest));
	exports.AsyncDataRequest = AsyncDataRequest;

	});

	var XhrResponseType_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.XhrResponseType = void 0;
	var XhrResponseType;
	(function (XhrResponseType) {
	    XhrResponseType["ARRAY_BUFFER"] = "arraybuffer";
	    XhrResponseType["TEXT"] = "text";
	    XhrResponseType["JSON"] = "json";
	    XhrResponseType["DOCUMENT"] = "document";
	    XhrResponseType["DEFAULT"] = "";
	})(XhrResponseType = exports.XhrResponseType || (exports.XhrResponseType = {}));

	});

	var AsyncDataRequestOptions_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.AsyncDataRequestOptions = void 0;

	var AsyncDataRequestOptions = (function () {
	    function AsyncDataRequestOptions() {
	    }
	    AsyncDataRequestOptions.create = function (options) {
	        return {
	            url: options.url || '',
	            method: options.method || 'get',
	            timeout: options.timeout || 4000,
	            headers: options.headers || {},
	            data: this.getBody(options.data, options.encodeList, options.sendJson),
	            withCredentials: options.withCredentials === true,
	            responseType: options.responseType || XhrResponseType_1.XhrResponseType.JSON,
	            onComplete: options.onComplete || null,
	            errorRecovery: options.errorRecovery || null
	        };
	    };
	    AsyncDataRequestOptions.getBody = function (objOrStr, enc, asJson) {
	        if (asJson === void 0) { asJson = false; }
	        if (!objOrStr)
	            return null;
	        if (typeof objOrStr === 'string')
	            return objOrStr;
	        if (!Object.keys(objOrStr).length)
	            return null;
	        var useEnc = Array.isArray(enc) && enc.length;
	        !useEnc && (enc = []);
	        for (var q in objOrStr) {
	            objOrStr[q] = this.getValue(q, objOrStr[q], enc);
	        }
	        if (asJson) {
	            return JSON.stringify(objOrStr);
	        }
	        var str = '', v;
	        for (var q in objOrStr) {
	            v = objOrStr[q];
	            v !== null && v != undefined && v != '' && (str += q + "=" + v + "&");
	        }
	        str = str.substr(0, str.length - 1);
	        return str;
	    };
	    AsyncDataRequestOptions.getValue = function (name, val, enc) {
	        return enc.indexOf(name) >= 0 ? encodeURIComponent(val) : val;
	    };
	    return AsyncDataRequestOptions;
	}());
	exports.AsyncDataRequestOptions = AsyncDataRequestOptions;

	});

	var QualityCategory_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.QualityCategory = void 0;
	var QualityCategory;
	(function (QualityCategory) {
	    QualityCategory["SD"] = "SD";
	    QualityCategory["HD"] = "HD";
	    QualityCategory["UHD"] = "UHD";
	})(QualityCategory = exports.QualityCategory || (exports.QualityCategory = {}));

	});

	var QualityMap = createCommonjsModule(function (module, exports) {
	var _a;
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.QualityMap = void 0;

	exports.QualityMap = (_a = {},
	    _a[QualityCategory_1.QualityCategory.UHD] = 1080,
	    _a[QualityCategory_1.QualityCategory.HD] = 720,
	    _a[QualityCategory_1.QualityCategory.SD] = 0,
	    _a);

	});

	var Utils_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Utils = void 0;






	var Utils = (function () {
	    function Utils() {
	    }
	    Utils.getMinAndMaxValuesForCategory = function (list, category) {
	        var minIndex = Infinity;
	        var maxIndex = 0;
	        var minBitrate = Infinity;
	        var maxBitrate = 0;
	        list.forEach(function (q) {
	            if (q.category.indexOf(category) >= 0) {
	                maxIndex = Math.max(maxIndex, q.index);
	                minIndex = Math.min(minIndex, q.index);
	                maxBitrate = Math.max(maxBitrate, q.bitrate);
	                minBitrate = Math.min(minBitrate, q.bitrate);
	            }
	        });
	        return { maxIndex: maxIndex, minIndex: minIndex, minBitrate: minBitrate, maxBitrate: maxBitrate };
	    };
	    Utils.getQualityCategoryForVideoHeight = function (ht) {
	        var m = QualityMap.QualityMap;
	        if (ht >= m[QualityCategory_1.QualityCategory.UHD])
	            return QualityCategory_1.QualityCategory.UHD;
	        if (ht >= m[QualityCategory_1.QualityCategory.HD])
	            return QualityCategory_1.QualityCategory.HD;
	        return QualityCategory_1.QualityCategory.SD;
	    };
	    Utils.getIndexForBitrate = function (list, bitrate, isMinLookup) {
	        if (!list) {
	            return 0;
	        }
	        var i = list.length - 1;
	        if (bitrate >= list[i].bitrate) {
	            return i;
	        }
	        while (i--) {
	            var rate = list[i].bitrate;
	            if (isMinLookup) {
	                if (bitrate > rate) {
	                    return i + 1;
	                }
	            }
	            else {
	                if (bitrate >= rate) {
	                    return i;
	                }
	            }
	        }
	        return 0;
	    };
	    Utils.classFromQualifiedName = function (qName) {
	        if (!Util_1.Util.isString(qName)) {
	            return qName;
	        }
	        var g = SystemService_1.SystemService.getInstance(ServiceName_1.ServiceName.System).global;
	        var a = qName.split('.'), o = g, len = a.length, i, n;
	        if (a[0] === 'window') {
	            a = a.slice(1);
	            len = a.length;
	        }
	        for (i = 0; i < len; i++) {
	            n = a[i];
	            if (o[n] === undefined) {
	                Logger_1.Logger.error("Util.classFromQualifiedName: '" + qName + "' is undefined.");
	                return null;
	            }
	            o = o[n];
	        }
	        return o;
	    };
	    Utils.serializeConfigSnapshot = function (playerOptions, playlist, buildInfo, system, spacing) {
	        if (spacing === void 0) { spacing = 0; }
	        var r = playlist.currentResource ? JSON.parse(JSON.stringify(playlist.currentResource)) : {};
	        var rmNullAndNan = function (p) {
	            var t = typeof p;
	            var del = '\0';
	            if (p && t == 'object') {
	                for (var q in p) {
	                    var v = rmNullAndNan(p[q]);
	                    if (v === del)
	                        delete p[q];
	                    else
	                        p[q] = v;
	                }
	                return p;
	            }
	            else {
	                return p === null || (t === 'number' && isNaN(p)) ? del : p;
	            }
	        };
	        rmNullAndNan(r);
	        var poStr = JSON.stringify(playerOptions.data);
	        var po = JSON.parse(poStr);
	        delete po.dataTransformers;
	        po.container = null;
	        var out = {
	            buildInfo: buildInfo,
	            playerOptions: po,
	            resource: r,
	            system: system.info,
	        };
	        return JSON.stringify(out, null, spacing);
	    };
	    return Utils;
	}());
	exports.Utils = Utils;

	});

	var Notifier_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Notifier = void 0;

	var Notifier = (function () {
	    function Notifier() {
	        this.multiCoreKey = null;
	    }
	    Notifier.prototype.destroy = function () {
	    };
	    Notifier.prototype.onRemove = function () {
	        this.multiCoreKey = null;
	    };
	    Object.defineProperty(Notifier.prototype, "facade", {
	        get: function () {
	            return Facade_1.Facade.getInstance(this.multiCoreKey);
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Notifier.prototype.sendNotification = function (notificationName, body, type) {
	        var f = this.facade;
	        f && f.sendNotification(notificationName, body, type);
	    };
	    Notifier.prototype.initializeNotifier = function (key) {
	        this.multiCoreKey = key;
	    };
	    return Notifier;
	}());
	exports.Notifier = Notifier;

	});

	var AbstractMediator_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.AbstractMediator = void 0;




	var AbstractMediator = (function (_super) {
	    tslib_es6.__extends(AbstractMediator, _super);
	    function AbstractMediator(name, viewControl) {
	        var _this = _super.call(this) || this;
	        _this.pViewControl = null;
	        _this.mediatorName = name;
	        viewControl && (_this.viewControl = viewControl);
	        return _this;
	    }
	    Object.defineProperty(AbstractMediator.prototype, "name", {
	        get: function () {
	            return this.mediatorName;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(AbstractMediator.prototype, "viewControl", {
	        get: function () {
	            return this.pViewControl;
	        },
	        set: function (viewControl) {
	            this.pViewControl = viewControl;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(AbstractMediator.prototype, "systemService", {
	        get: function () {
	            return this.facade.retrieveService(ServiceName_1.ServiceName.System);
	        },
	        enumerable: false,
	        configurable: true
	    });
	    AbstractMediator.prototype.getService = function (name) {
	        return this.facade ? (this.facade.retrieveService(name)) : null;
	    };
	    AbstractMediator.prototype.getModel = function (name) {
	        return (this.getModelCollection().getModel(name));
	    };
	    AbstractMediator.prototype.getProxy = function (name) {
	        return this.facade ? (this.facade.retrieveProxy(name)) : null;
	    };
	    AbstractMediator.prototype.getModelCollection = function () {
	        return this.facade ? this.facade.retrieveProxy(ProxyName_1.ProxyName.ModelCollectionProxy) : null;
	    };
	    AbstractMediator.prototype.listNotificationInterests = function () {
	        return [];
	    };
	    AbstractMediator.prototype.onRegister = function () {
	    };
	    AbstractMediator.prototype.onRemove = function () {
	        this.pViewControl = null;
	        _super.prototype.onRemove.call(this);
	    };
	    return AbstractMediator;
	}(Notifier_1.Notifier));
	exports.AbstractMediator = AbstractMediator;

	});

	var LogAwareMediator_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.LogAwareMediator = void 0;


	var LogAwareMediator = (function (_super) {
	    tslib_es6.__extends(LogAwareMediator, _super);
	    function LogAwareMediator(name, viewControl) {
	        return _super.call(this, name, viewControl) || this;
	    }
	    Object.defineProperty(LogAwareMediator.prototype, "logger", {
	        get: function () {
	            return this.facade.logger;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    LogAwareMediator.prototype.log = function () {
	        var args = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            args[_i] = arguments[_i];
	        }
	        this.logger.log.apply(this.logger, args);
	    };
	    return LogAwareMediator;
	}(AbstractMediator_1.AbstractMediator));
	exports.LogAwareMediator = LogAwareMediator;

	});

	var AppMediator_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.AppMediator = void 0;
















	var AppMediator = (function (_super) {
	    tslib_es6.__extends(AppMediator, _super);
	    function AppMediator(name, app) {
	        var _this = _super.call(this, name) || this;
	        _this.app = app;
	        return _this;
	    }
	    AppMediator.prototype.setFullscreenElement = function (el) {
	        var fsm = this.facade.retrieveMediator(MediatorName_1.MediatorName.FULLSCREEN);
	        fsm.fullscreenElement = el;
	    };
	    AppMediator.prototype.getFullscreenElement = function () {
	        var fsm = this.facade.retrieveMediator(MediatorName_1.MediatorName.FULLSCREEN);
	        return fsm.fullscreenElement;
	    };
	    AppMediator.prototype.onRemove = function () {
	        this.app = null;
	        _super.prototype.onRemove.call(this);
	    };
	    AppMediator.prototype.getAppApi = function () {
	        return this.app.getApi();
	    };
	    AppMediator.prototype.getSnapshot = function () {
	        return this.getProxy(ProxyName_1.ProxyName.ModelCollectionProxy).collection.getSnapshot();
	    };
	    AppMediator.prototype.getConfigAsJson = function (spacing) {
	        var m = this.getProxy(ProxyName_1.ProxyName.ModelCollectionProxy);
	        var o = m.getModel(ModelName_1.ModelName.PlayerOptions);
	        var p = this.getProxy(ProxyName_1.ProxyName.Playlist);
	        var b = this.facade.retrieveService(ServiceName_1.ServiceName.BuildInfo);
	        var s = this.facade.retrieveService(ServiceName_1.ServiceName.System);
	        return Utils_1.Utils.serializeConfigSnapshot(o, p, b.toObject(), s, spacing);
	    };
	    AppMediator.prototype.validateSeek = function (position, duration) {
	        if (isNaN(position)) {
	            this.log(LogLevel_1.LogLevel.WARN, "Invalid seek() time [" + position + "] supplied");
	            return null;
	        }
	        var pm = this.getModel(ModelName_1.ModelName.PresentationState);
	        var pbp = this.getProxy(ProxyName_1.ProxyName.ContentPlaybackStateProxy);
	        var linear = pbp && pbp.model.streamType === StreamType_1.StreamType.LIVE;
	        if (!pm || !pbp || pm.isCurrentVideoAd || linear) {
	            this.log(LogLevel_1.LogLevel.WARN, 'seek() may not be called in the current context');
	            return null;
	        }
	        return Util_1.Util.clampValue(position, 0, duration);
	    };
	    AppMediator.prototype.isPlaybackSuspended = function () {
	        var pm = this.getModel(ModelName_1.ModelName.PresentationState);
	        return pm.suspended;
	    };
	    AppMediator.prototype.getAutoplayCapabilities = function () {
	        var apc = this.getService(ServiceName_1.ServiceName.AutoplayCapabilities);
	        return apc.detectCapabilities();
	    };
	    AppMediator.prototype.getContainerRect = function () {
	        var domProxy = this.getProxy(ProxyName_1.ProxyName.PlayerDomProxy);
	        return domProxy ? domProxy.getPresentationRect() : null;
	    };
	    AppMediator.prototype.getCurrentResource = function () {
	        var plist = this.getProxy(ProxyName_1.ProxyName.Playlist);
	        return plist ? plist.currentResource : null;
	    };
	    AppMediator.prototype.killCurrentResource = function () {
	        var _this = this;
	        var pm = this.facade.retrieveMediator(MediatorName_1.MediatorName.PRESENTATION_MEDIATOR);
	        this.log(LogLevel_1.LogLevel.INFO, 'Killing current resource');
	        return Promise.resolve()
	            .then(function () { return pm && pm.close(); })
	            .then(function () {
	            var plist = _this.getProxy(ProxyName_1.ProxyName.Playlist);
	            plist && plist.removeResourceAtIndex(plist.currentIndex);
	        })
	            .catch(function (e) {
	            Logger_1.Logger.error(e);
	        });
	    };
	    AppMediator.prototype.performXhr = function (options) {
	        new AsyncDataRequest_1.AsyncDataRequest(AsyncDataRequestOptions_1.AsyncDataRequestOptions.create(options));
	    };
	    AppMediator.prototype.getPlugin = function (name) {
	        var pim = this.facade.retrieveMediator(MediatorName_1.MediatorName.PLUGIN_MEDIATOR);
	        return pim ? pim.getPlugin(name) : null;
	    };
	    AppMediator.prototype.dispatchPluginEvent = function (data) {
	        this.app.sendEvent(PlayerEvent_1.PlayerEvent.PLUGIN_EVENT, data);
	    };
	    AppMediator.prototype.prepForPlayerRemoval = function () {
	        var uim = this.facade.retrieveMediator(MediatorName_1.MediatorName.UI);
	        if (!uim) {
	            return;
	        }
	        uim.killUi();
	        this.log(LogLevel_1.LogLevel.INFO, 'UI layer destroyed');
	    };
	    AppMediator.prototype.getMuteState = function () {
	        var presoModel = this.getModel(ModelName_1.ModelName.PresentationState);
	        return presoModel ? presoModel.isMuted : null;
	    };
	    AppMediator.prototype.getVolume = function () {
	        var presoModel = this.getModel(ModelName_1.ModelName.PresentationState);
	        return presoModel ? presoModel.volume : NaN;
	    };
	    AppMediator.prototype.getDimensions = function () {
	        var domProxy = this.getProxy(ProxyName_1.ProxyName.PlayerDomProxy);
	        return domProxy ? domProxy.getDimensions() : null;
	    };
	    AppMediator.prototype.getAdBreakTimes = function () {
	        var pm = this.facade.retrieveMediator(MediatorName_1.MediatorName.PRESENTATION_MEDIATOR);
	        return pm ? pm.getAdBreakTimes() : null;
	    };
	    AppMediator.prototype.grabFrame = function () {
	        var domProxy = this.getProxy(ProxyName_1.ProxyName.PlayerDomProxy), vidEl = domProxy && domProxy.getVideo();
	        if (!domProxy || !vidEl) {
	            return null;
	        }
	        var cvs = document.createElement('canvas');
	        var ctx, dUrl, img;
	        ctx = cvs.getContext('2d');
	        var w = cvs.width = vidEl.videoWidth;
	        var h = cvs.height = vidEl.videoHeight;
	        ctx.drawImage(vidEl, 0, 0, w, h);
	        dUrl = cvs.toDataURL();
	        img = document.createElement('img');
	        img.setAttribute('src', dUrl);
	        return img;
	    };
	    AppMediator.prototype.listNotificationInterests = function () {
	        return [
	            NotificationName_1.NotificationName.APP_EVENT
	        ];
	    };
	    AppMediator.prototype.sendErrorEvent = function (event) {
	        this.app.sendErrorEvent(event);
	    };
	    AppMediator.prototype.handleNotification = function (notification) {
	        var b = notification.body;
	        var pe = event_map.event_map[b.notificationName];
	        switch (notification.name) {
	            case NotificationName_1.NotificationName.APP_EVENT:
	                pe && this.app.sendEvent(pe, b.data || null);
	                break;
	        }
	    };
	    AppMediator.prototype.onRegister = function () {
	        _super.prototype.onRegister.call(this);
	    };
	    return AppMediator;
	}(LogAwareMediator_1.LogAwareMediator));
	exports.AppMediator = AppMediator;

	});

	var AccessibilityAction_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.AccessibilityAction = void 0;
	var AccessibilityAction;
	(function (AccessibilityAction) {
	    AccessibilityAction["ENTER_FULLSCREEN"] = "enterFullScreen";
	    AccessibilityAction["INCREASE_VOLUME"] = "increaseVolume";
	    AccessibilityAction["DECREASE_VOLUME"] = "decreaseVolume";
	    AccessibilityAction["SEEK_BACK"] = "seekBack";
	    AccessibilityAction["SEEK_FORWARD"] = "seekForward";
	    AccessibilityAction["TOGGLE_PLAY"] = "togglePlay";
	    AccessibilityAction["TOGGLE_TT"] = "toggleTextTrack";
	    AccessibilityAction["TOGGLE_MUTE"] = "toggleMute";
	    AccessibilityAction["PLAYLIST_NEXT"] = "playListNext";
	    AccessibilityAction["PLAYLIST_PREV"] = "playListPrev";
	    AccessibilityAction["STOP"] = "stop";
	})(AccessibilityAction = exports.AccessibilityAction || (exports.AccessibilityAction = {}));

	});

	var DiagnosticAction_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.DiagnosticAction = void 0;
	var DiagnosticAction;
	(function (DiagnosticAction) {
	    DiagnosticAction["DIAGNOSTIC_PLUGIN"] = "toggleDiagnosticPlugin";
	    DiagnosticAction["CONFIG_TO_CLIPBOARD"] = "configToClipboard";
	    DiagnosticAction["CONFIG_TO_TEST_PAGE"] = "configToTestPage";
	})(DiagnosticAction = exports.DiagnosticAction || (exports.DiagnosticAction = {}));

	});

	var NonPrintingKey_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.NonPrintingKey = void 0;
	var NonPrintingKey;
	(function (NonPrintingKey) {
	    NonPrintingKey["SPACE"] = " ";
	    NonPrintingKey["ENTER"] = "Enter";
	    NonPrintingKey["TAB"] = "Tab";
	    NonPrintingKey["CONTROL"] = "Control";
	    NonPrintingKey["SHIFT"] = "Shift";
	    NonPrintingKey["ESCAPE"] = "Escape";
	    NonPrintingKey["META"] = "Meta";
	    NonPrintingKey["ARROW_LEFT"] = "ArrowLeft";
	    NonPrintingKey["ARROW_RIGHT"] = "ArrowRight";
	    NonPrintingKey["ARROW_UP"] = "ArrowUp";
	    NonPrintingKey["ARROW_DOWN"] = "ArrowDown";
	})(NonPrintingKey = exports.NonPrintingKey || (exports.NonPrintingKey = {}));

	});

	var PluginPriority_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.PluginPriority = void 0;
	var PluginPriority;
	(function (PluginPriority) {
	    PluginPriority["LOW"] = "low";
	    PluginPriority["HIGH"] = "high";
	})(PluginPriority = exports.PluginPriority || (exports.PluginPriority = {}));

	});

	var KeyCode = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.KeyCode = void 0;
	exports.KeyCode = {
	    ALT: 18,
	    BACKSPACE: 8,
	    CAPS_LOCK: 20,
	    CONTROL: 17,
	    END: 35,
	    ENTER: 13,
	    TAB: 9,
	    SHIFT: 16,
	    ESCAPE: 27,
	    PAGE_UP: 33,
	    PAGE_DOWN: 34,
	    LEFT_ARROW: 37,
	    UP_ARROW: 38,
	    RIGHT_ARROW: 39,
	    DOWN_ARROW: 40,
	    INSERT: 45,
	    DELETE: 46,
	    SPACE: 32,
	    "0": 48,
	    "1": 49,
	    "2": 50,
	    "3": 51,
	    "4": 52,
	    "5": 53,
	    "6": 54,
	    "7": 55,
	    "8": 56,
	    "9": 57,
	    A: 65,
	    B: 66,
	    C: 67,
	    D: 68,
	    E: 69,
	    F: 70,
	    G: 71,
	    H: 72,
	    I: 73,
	    J: 74,
	    K: 75,
	    L: 76,
	    M: 77,
	    N: 78,
	    O: 79,
	    P: 80,
	    Q: 81,
	    R: 82,
	    S: 83,
	    T: 84,
	    U: 85,
	    V: 86,
	    W: 87,
	    X: 88,
	    Y: 89,
	    Z: 90,
	    NUM_0: 96,
	    NUM_1: 97,
	    NUM_2: 98,
	    NUM_3: 99,
	    NUM_4: 100,
	    NUM_5: 101,
	    NUM_6: 102,
	    NUM_7: 103,
	    NUM_8: 104,
	    NUM_9: 105,
	    MULTIPLY: 106,
	    ADD: 107,
	    SUBTRACT: 109,
	    DECIMAL: 110,
	    DIVIDE: 111,
	    SEMICOLON: 186,
	    EQUAL: 187,
	    COMMA: 188,
	    DASH: 189,
	    PERIOD: 190,
	    FORWARD_SLASH: 191,
	    BACKSLASH: 220,
	    GRAVE_ACCENT: 192,
	    OPEN_BRACKET: 219,
	    CLOSE_BRACKET: 221,
	    SINGLE_QUOTE: 222,
	    MEDIA_TOGGLE_PLAY: 179,
	    MEDIA_TOGGLE_MUTE: 173,
	    MEDIA_STOP: 178,
	    MEDIA_INCREASE_VOLUME: 175,
	    MEDIA_INCREASE_VOLUME_ALT: 183,
	    MEDIA_DECREASE_VOLUME: 174,
	    MEDIA_DECREASE_VOLUME_ALT: 182,
	    MEDIA_PLAYLIST_NEXT: 176,
	    MEDIA_PLAYLIST_PREV: 177,
	};

	});

	var AppResources_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.AppResources = void 0;





	var AppResources = (function () {
	    function AppResources() {
	    }
	    AppResources.blankVideoUrl = 'https://vidtech.cbsinteractive.com/h5/blanks/uvp_blank.mp4';
	    AppResources.userKeyCmdDefs = [
	        {
	            action: DiagnosticAction_1.DiagnosticAction.DIAGNOSTIC_PLUGIN,
	            primaryKey: 'd',
	            keyCode: KeyCode.KeyCode.D,
	            requireCtrl: true,
	            requireShift: true
	        },
	        {
	            action: DiagnosticAction_1.DiagnosticAction.CONFIG_TO_CLIPBOARD,
	            primaryKey: 'c',
	            keyCode: KeyCode.KeyCode.C,
	            requireCtrl: true,
	            requireShift: true
	        },
	        {
	            action: DiagnosticAction_1.DiagnosticAction.CONFIG_TO_TEST_PAGE,
	            primaryKey: 't',
	            keyCode: KeyCode.KeyCode.T,
	            requireCtrl: true,
	            requireShift: true
	        },
	    ];
	    AppResources.accessibilityKeyCmdDefs = [
	        {
	            action: AccessibilityAction_1.AccessibilityAction.ENTER_FULLSCREEN,
	            primaryKey: 'f',
	            keyCode: KeyCode.KeyCode.F,
	        },
	        {
	            action: AccessibilityAction_1.AccessibilityAction.INCREASE_VOLUME,
	            primaryKey: NonPrintingKey_1.NonPrintingKey.ARROW_UP,
	            keyCode: KeyCode.KeyCode.UP_ARROW,
	        },
	        {
	            action: AccessibilityAction_1.AccessibilityAction.INCREASE_VOLUME,
	            primaryKey: null,
	            keyCode: KeyCode.KeyCode.MEDIA_INCREASE_VOLUME,
	        },
	        {
	            action: AccessibilityAction_1.AccessibilityAction.INCREASE_VOLUME,
	            primaryKey: null,
	            keyCode: KeyCode.KeyCode.MEDIA_INCREASE_VOLUME_ALT,
	        },
	        {
	            action: AccessibilityAction_1.AccessibilityAction.DECREASE_VOLUME,
	            primaryKey: NonPrintingKey_1.NonPrintingKey.ARROW_DOWN,
	            keyCode: KeyCode.KeyCode.DOWN_ARROW,
	        },
	        {
	            action: AccessibilityAction_1.AccessibilityAction.DECREASE_VOLUME,
	            primaryKey: null,
	            keyCode: KeyCode.KeyCode.MEDIA_DECREASE_VOLUME,
	        },
	        {
	            action: AccessibilityAction_1.AccessibilityAction.DECREASE_VOLUME,
	            primaryKey: null,
	            keyCode: KeyCode.KeyCode.MEDIA_DECREASE_VOLUME_ALT,
	        },
	        {
	            action: AccessibilityAction_1.AccessibilityAction.SEEK_BACK,
	            primaryKey: NonPrintingKey_1.NonPrintingKey.ARROW_LEFT,
	            keyCode: KeyCode.KeyCode.LEFT_ARROW,
	        },
	        {
	            action: AccessibilityAction_1.AccessibilityAction.SEEK_FORWARD,
	            primaryKey: NonPrintingKey_1.NonPrintingKey.ARROW_RIGHT,
	            keyCode: KeyCode.KeyCode.RIGHT_ARROW,
	        },
	        {
	            action: AccessibilityAction_1.AccessibilityAction.TOGGLE_PLAY,
	            primaryKey: NonPrintingKey_1.NonPrintingKey.SPACE,
	            keyCode: KeyCode.KeyCode.SPACE,
	        },
	        {
	            action: AccessibilityAction_1.AccessibilityAction.TOGGLE_PLAY,
	            primaryKey: null,
	            keyCode: KeyCode.KeyCode.MEDIA_TOGGLE_PLAY,
	        },
	        {
	            action: AccessibilityAction_1.AccessibilityAction.TOGGLE_MUTE,
	            primaryKey: 'm',
	            keyCode: KeyCode.KeyCode.M,
	        },
	        {
	            action: AccessibilityAction_1.AccessibilityAction.TOGGLE_MUTE,
	            primaryKey: '-',
	            keyCode: KeyCode.KeyCode.SUBTRACT,
	        },
	        {
	            action: AccessibilityAction_1.AccessibilityAction.TOGGLE_MUTE,
	            primaryKey: null,
	            keyCode: KeyCode.KeyCode.MEDIA_TOGGLE_MUTE,
	        },
	        {
	            action: AccessibilityAction_1.AccessibilityAction.TOGGLE_TT,
	            primaryKey: 'c',
	            keyCode: KeyCode.KeyCode.C,
	        },
	        {
	            action: AccessibilityAction_1.AccessibilityAction.STOP,
	            primaryKey: null,
	            keyCode: KeyCode.KeyCode.MEDIA_STOP
	        },
	        {
	            action: AccessibilityAction_1.AccessibilityAction.PLAYLIST_NEXT,
	            primaryKey: null,
	            keyCode: KeyCode.KeyCode.MEDIA_PLAYLIST_NEXT
	        },
	        {
	            action: AccessibilityAction_1.AccessibilityAction.PLAYLIST_PREV,
	            primaryKey: null,
	            keyCode: KeyCode.KeyCode.MEDIA_PLAYLIST_PREV
	        },
	    ];
	    AppResources.nativePluginConfig = {
	        diagnostic: {
	            name: 'VtgDiagnosticPlugin',
	            url: 'https://vidtech.cbsinteractive.com/cv-plugins/diagnostic/{{VER}}/diagnostic.min.js',
	            qualifiedClassName: 'window.VtgDiagnosticPlugin',
	            priority: PluginPriority_1.PluginPriority.HIGH,
	            options: null
	        },
	        replay: {
	            name: 'VtgReplayPlugin',
	            url: 'https://vidtech.cbsinteractive.com/cv-plugins/replay/{{VER}}/replay.min.js',
	            qualifiedClassName: 'window.VtgReplayPlugin',
	            priority: PluginPriority_1.PluginPriority.LOW
	        }
	    };
	    AppResources.messages = {
	        ABR_UNAVAILABLE: "Single bitrate stream detected, adaptive bitrate system is unavailable",
	        ABR_MANUAL_SWITCHING_REACHED_LOWER_BOUNDS: "You have reached the lowest available quality for this presentation.",
	        ABR_MANUAL_SWITCHING_REACHED_UPPER_BOUNDS: "You have reached the highest available quality for this presentation at this screen size",
	        ABR_MIN_BITRATE_RESTRICTION_UNAVAILABLE: 'Min bitrate restrictions are not offered with this streaming library',
	        AD_STALLED: 'Stalled ad detected',
	        ADAPTER_UNAVAILABLE: 'Unable to play the requested resource - mediaUrl not recognized',
	        ADAPTER_LIB_UNAVAILABLE: 'Unable to play the requested resource - External library is not loading',
	        CAP_LEVEL_MAXBITRATE: 'Max bitrate setting will be ignored since capQualityToPlayerSize is enabled',
	        CMS_RESOURCE_UNAVAILABLE: 'Resource unavailable',
	        CMS_UNKNOWN: 'CMS not supported',
	        CONTENT_PLAYBACK_SETTING_IGNORED: 'This API is only available after the CONTENT_START event has been dispatched. This setting will be ignored.',
	        DAI_MISSING_ASSET_URL: 'Unexpected condition: valid assetUrl not found in DAI stream data',
	        DAI_SDK_UNAVAILABLE: 'A DAI SDK is required for playback, but is not found',
	        ENVIRONMENT_NOT_SUPPORTED: 'Unable to locate a global "window" object or suitable alternative',
	        FAIRPLAY_LICENSE_ERROR: 'Issue with fairplay DRM and the provided license acquisition url',
	        FAIRPLAY_APP_CERT_ERROR: 'Issue creating a fairplay keysession with the provided application certificate',
	        FAIRPLAY_NO_CONTENT_ID: 'A valid content or asset id was not detected when creating fairplay drm session',
	        FAIRPLAY_WEBKIT_ERROR: 'Issue with webkit and keysession creations while using fairplay drm.',
	        FATAL_PLAYBACK_MEDIA_ERROR: 'Fatal media error, no option for recovery',
	        FATAL_PLAYBACK_NETWORK_ERROR: 'Fatal network error, no option for recovery',
	        IMA_SDK_MISSING: 'IMA SDK not found.',
	        INVALID_PLAYLIST_INDEX: 'Index provided to Playlist is out of range',
	        INVALID_RESOURCE: 'Resource configuration appears to be invalid',
	        MANUAL_ABR_SWITCHING_UNAVAILABLE: 'Native HTML5 Video does not allow manual bitrate switching',
	        PAUSING_LINEAR_LIVE_STREAM_NOT_ALLOWED: 'StreamType.LIVE is detected. Redirecting to the stop method since a DVR window is not detected.',
	        PLUGIN_LOAD_ERROR: "Unable to load plugin from url",
	        RESOURCE_NOT_SUPPORTED: 'Resource is not recognized or is currently unsupported',
	        RETRY_PLAYBACK_MEDIA_ERROR: 'Media error detected',
	        RETRY_PLAYBACK_NETWORK_ERROR: 'Network error detected',
	        UNEXPECTED_CONDITION: 'An unexpected condition was encountered',
	        UNSPECIFIED_ERROR: 'Unspecified error',
	        VIDEO_PLAYBACK_UNAVAILABLE: 'Unable to locate a video element or suitable alternative',
	        WEBKIT_KEY_ADDED_SUCCESS: "Webkit key added successfully",
	        WEBKIT_MEDIA_KEYS_NOT_SUPPORTED: 'WebKitMediaKeys are not supported for this type of media on this user agent'
	    };
	    return AppResources;
	}());
	exports.AppResources = AppResources;

	});

	var AutoplayCapabilitiesService_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.AutoplayCapabilitiesService = void 0;






	var AutoplayCapabilitiesService = (function (_super) {
	    tslib_es6.__extends(AutoplayCapabilitiesService, _super);
	    function AutoplayCapabilitiesService(name) {
	        var _this = _super.call(this, name) || this;
	        _this.testDom = null;
	        _this.checkCompleted = false;
	        _this.isMobile = null;
	        _this.testVideoSrc = AppResources_1.AppResources.blankVideoUrl;
	        _this.info = {
	            supportsUnmutedAutoplay: null,
	            supportsMutedAutoplay: null
	        };
	        return _this;
	    }
	    AutoplayCapabilitiesService.prototype.detectCapabilities = function () {
	        var _this = this;
	        return new Promise(function (resolve) {
	            if (!_this.checkCompleted) {
	                _this.createTestDom();
	                _this.internalCallback = function () { return resolve(_this.info); };
	                _this.checkUnmutedAutoplay();
	            }
	            else {
	                resolve(_this.info);
	            }
	        });
	    };
	    AutoplayCapabilitiesService.prototype.finishCheck = function (unmutedOk, mutedOk) {
	        var _this = this;
	        this.setInfo(unmutedOk, mutedOk);
	        this.checkCompleted = true;
	        this.internalCallback();
	        setTimeout(function () { return _this.cleanUp(); }, 100);
	    };
	    AutoplayCapabilitiesService.prototype.setInfo = function (unmutedOk, mutedOk) {
	        this.info.supportsUnmutedAutoplay = unmutedOk;
	        this.info.supportsMutedAutoplay = mutedOk;
	    };
	    AutoplayCapabilitiesService.prototype.cleanUp = function () {
	        this.testDom && this.testDom.parentNode.removeChild(this.testDom);
	        this.testDom = null;
	    };
	    AutoplayCapabilitiesService.prototype.checkUnmutedAutoplay = function () {
	        var _this = this;
	        var v = this.createVideoElement(false);
	        if (!v) {
	            this.finishCheck(true, true);
	            return;
	        }
	        v.load();
	        var promise = v.play();
	        if (promise === undefined) {
	            if (this.isMobile) {
	                this.detectMobileCapabilities();
	            }
	            else {
	                this.finishCheck(true, true);
	            }
	        }
	        else {
	            promise
	                .then(function () {
	                _this.finishCheck(true, true);
	            })
	                .catch(function (e) {
	                _this.checkMutedAutoplay();
	            });
	        }
	    };
	    AutoplayCapabilitiesService.prototype.checkMutedAutoplay = function () {
	        var _this = this;
	        if (this.isEarlySafari11()) {
	            this.finishCheck(false, false);
	            return;
	        }
	        var v = this.createVideoElement(true);
	        v.load();
	        v.play()
	            .then(function () {
	            _this.finishCheck(false, true);
	        })
	            .catch(function (e) {
	            _this.finishCheck(false, false);
	        });
	    };
	    AutoplayCapabilitiesService.prototype.isEarlySafari11 = function () {
	        var si = this.sysInfo, isS = si.browser === Browser_1.Browser.SAFARI, isD = isS && si.device === 'desktop', maj = isD ? si.browserVersionInfo.majorVersion : null, min = isD ? si.browserVersionInfo.minorVersion : null, majMinMatch = maj === 11 && min === 0, verStr = si.browserVersionInfo.versionString, verArr = verStr ? verStr.split('.') : null;
	        return majMinMatch && (!verArr[2] || parseInt(verArr[2]) < 3);
	    };
	    AutoplayCapabilitiesService.prototype.detectMobileCapabilities = function () {
	        var unmutedOk = false, mutedOk = this.isAutoplayEligibleAndroid() || this.isAutoplayEligibleIos();
	        this.finishCheck(unmutedOk, mutedOk);
	    };
	    AutoplayCapabilitiesService.prototype.isAutoplayEligibleAndroid = function () {
	        var si = this.sysInfo, isA = si.os === Os_1.Os.ANDROID, isOkChrome = isA && si.browser === Browser_1.Browser.CHROME && this.isChromeAutoplayEligible();
	        return isOkChrome;
	    };
	    AutoplayCapabilitiesService.prototype.isAutoplayEligibleIos = function () {
	        var si = this.sysInfo, is10 = si.os === Os_1.Os.IOS && si.browserVersionInfo.majorVersion >= 10, isOkSafari = is10 && si.browser === Browser_1.Browser.SAFARI, isOkChrome = is10 && !isOkSafari &&
	            (si.browser === Browser_1.Browser.CHROME_IOS || si.browser === Browser_1.Browser.CHROME) &&
	            this.isChromeAutoplayEligible();
	        return isOkSafari || isOkChrome;
	    };
	    AutoplayCapabilitiesService.prototype.isChromeAutoplayEligible = function () {
	        return this.sysInfo.browserVersionInfo.majorVersion >= 54;
	    };
	    AutoplayCapabilitiesService.prototype.createVideoElement = function (muted) {
	        var doc = this.document;
	        if (!doc)
	            return null;
	        var v = doc.createElement('video');
	        if (muted) {
	            v.muted = true;
	            v.setAttribute('muted', 'muted');
	            v.setAttribute('playsinline', 'playsinline');
	        }
	        v.volume = 0.005;
	        v.style.width = '100%';
	        v.style.height = '100%';
	        v.src = this.testVideoSrc;
	        this.testDom.appendChild(v);
	        return v;
	    };
	    AutoplayCapabilitiesService.prototype.createTestDom = function () {
	        var doc = this.document;
	        if (!this.document)
	            return null;
	        var d = doc.createElement('div'), ds = d.style, p = '-1000px';
	        ds.position = 'absolute';
	        ds.top = p;
	        ds.left = p;
	        ds.width = '400px';
	        ds.height = '225px';
	        doc.body.appendChild(d);
	        this.testDom = d;
	        return d;
	    };
	    Object.defineProperty(AutoplayCapabilitiesService.prototype, "sysInfo", {
	        get: function () {
	            return this.getService(ServiceName_1.ServiceName.System);
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(AutoplayCapabilitiesService.prototype, "document", {
	        get: function () {
	            return this.sysInfo.document || null;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    return AutoplayCapabilitiesService;
	}(ServiceBase_1.ServiceBase));
	exports.AutoplayCapabilitiesService = AutoplayCapabilitiesService;

	});

	var AbstractApplication_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.AbstractApplication = void 0;











	var AbstractApplication = (function (_super) {
	    tslib_es6.__extends(AbstractApplication, _super);
	    function AbstractApplication(options) {
	        var _this = _super.call(this, options || {}) || this;
	        _this.pAppId = options.id || Util_1.Util.uid8();
	        _this.pFacade = Facade_1.Facade.createFacade(_this.pAppId, options.commandMap || null);
	        return _this;
	    }
	    AbstractApplication.prototype.destroy = function () {
	        this.mdlCollProxy = null;
	        this.pFacade = null;
	        _super.prototype.destroy.call(this);
	        Facade_1.Facade.removeCore(this.pAppId);
	    };
	    Object.defineProperty(AbstractApplication.prototype, "appId", {
	        get: function () {
	            return this.pAppId;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    AbstractApplication.prototype.sendNotification = function (name, body, type) {
	        this.pFacade.sendNotification(name, body, type);
	    };
	    AbstractApplication.prototype.createLoggingService = function (logLvl) {
	        var _this = this;
	        var logger = new Logger_1.Logger({
	            logLevel: logLvl,
	            id: this.appId,
	            onLogEvent: function (e) { return _this.sendEvent(e.type, e.data); }
	        });
	        this.pFacade.registerService(new LogService_1.LogService(ServiceName_1.ServiceName.Logging, logger));
	    };
	    AbstractApplication.prototype.createAutoplayCapabilitiesService = function () {
	        var apc = new AutoplayCapabilitiesService_1.AutoplayCapabilitiesService(ServiceName_1.ServiceName.AutoplayCapabilities);
	        this.pFacade.registerService(apc);
	    };
	    AbstractApplication.prototype.registerGlobalServices = function (gServices) {
	        var f = this.pFacade;
	        for (var s in gServices) {
	            f.registerService(gServices[s]);
	        }
	    };
	    Object.defineProperty(AbstractApplication.prototype, "facade", {
	        get: function () {
	            return this.pFacade;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(AbstractApplication.prototype, "modelCollectionProxy", {
	        get: function () {
	            if (!this.mdlCollProxy) {
	                this.mdlCollProxy = this.facade.retrieveProxy(ProxyName_1.ProxyName.ModelCollectionProxy);
	            }
	            return this.mdlCollProxy;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(AbstractApplication.prototype, "appMediator", {
	        get: function () {
	            return this.pFacade.retrieveMediator(MediatorName_1.MediatorName.APPLICATION);
	        },
	        enumerable: false,
	        configurable: true
	    });
	    AbstractApplication.prototype.createApplicationMediator = function (name) {
	        var am = new AppMediator_1.AppMediator(name, this);
	        this.pFacade.registerMediator(am);
	    };
	    return AbstractApplication;
	}(Emitter_1.Emitter));
	exports.AbstractApplication = AbstractApplication;

	});

	var ApiDecorators = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.apiCollection = exports.apiAccessor = exports.apiMethod = void 0;

	function apiMethod() {
	    return function (target, propertyKey, descriptor) {
	        if (!Util_1.Util.isObject(target.apiMethods)) {
	            target.apiMethods = {};
	        }
	        target.apiMethods[propertyKey] = descriptor.value;
	    };
	}
	exports.apiMethod = apiMethod;
	function apiAccessor(readonly) {
	    if (readonly === void 0) { readonly = false; }
	    return function (target, propertyKey, descriptor) {
	        if (!Util_1.Util.isObject(target.apiAccessors)) {
	            target.apiAccessors = {};
	        }
	        var obj = {
	            get: descriptor.get,
	            set: readonly ? undefined : descriptor.set || undefined
	        };
	        target.apiAccessors[propertyKey] = obj;
	    };
	}
	exports.apiAccessor = apiAccessor;
	function apiCollection(obj, target) {
	    var _loop_1 = function (i) {
	        obj[i] = function () {
	            var args = Array.prototype.slice.call(arguments);
	            return (!!target &&
	                !!target.apiMethods &&
	                !!target.apiMethods[i] &&
	                target.apiMethods[i].apply(target, args)) || null;
	        };
	    };
	    for (var i in target.apiMethods) {
	        _loop_1(i);
	    }
	    var _loop_2 = function (p) {
	        var desc = target.apiAccessors[p];
	        var pd = {};
	        if (desc.get) {
	            pd.get = function () {
	                return target[p];
	            };
	        }
	        if (desc.set) {
	            pd.set = function (val) {
	                target[p] = val;
	            };
	        }
	        Object.defineProperty(obj, p, pd);
	    };
	    for (var p in target.apiAccessors) {
	        _loop_2(p);
	    }
	    return obj;
	}
	exports.apiCollection = apiCollection;

	});

	var AbstractSimpleCommand_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.AbstractSimpleCommand = void 0;



	var AbstractSimpleCommand = (function (_super) {
	    tslib_es6.__extends(AbstractSimpleCommand, _super);
	    function AbstractSimpleCommand() {
	        return _super.call(this) || this;
	    }
	    AbstractSimpleCommand.prototype.getModel = function (name) {
	        return (this.getModelCollection().getModel(name));
	    };
	    AbstractSimpleCommand.prototype.getProxy = function (name) {
	        return this.facade ? (this.facade.retrieveProxy(name)) : null;
	    };
	    AbstractSimpleCommand.prototype.getService = function (name) {
	        return this.facade ? (this.facade.retrieveService(name)) : null;
	    };
	    AbstractSimpleCommand.prototype.getModelCollection = function () {
	        return this.facade ? this.facade.retrieveProxy(ProxyName_1.ProxyName.ModelCollectionProxy) : null;
	    };
	    return AbstractSimpleCommand;
	}(Notifier_1.Notifier));
	exports.AbstractSimpleCommand = AbstractSimpleCommand;

	});

	var LogAwareSimpleCommand_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.LogAwareSimpleCommand = void 0;


	var LogAwareSimpleCommand = (function (_super) {
	    tslib_es6.__extends(LogAwareSimpleCommand, _super);
	    function LogAwareSimpleCommand() {
	        return _super.call(this) || this;
	    }
	    Object.defineProperty(LogAwareSimpleCommand.prototype, "logger", {
	        get: function () {
	            return this.facade.logger;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    LogAwareSimpleCommand.prototype.log = function () {
	        var args = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            args[_i] = arguments[_i];
	        }
	        this.logger.log.apply(this.logger, args);
	    };
	    return LogAwareSimpleCommand;
	}(AbstractSimpleCommand_1.AbstractSimpleCommand));
	exports.LogAwareSimpleCommand = LogAwareSimpleCommand;

	});

	var AbrSwitchCommand_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.AbrSwitchCommand = void 0;










	var AbrSwitchCommand = (function (_super) {
	    tslib_es6.__extends(AbrSwitchCommand, _super);
	    function AbrSwitchCommand() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    AbrSwitchCommand.prototype.execute = function (notification) {
	        var presoMediator = this.facade.retrieveMediator(MediatorName_1.MediatorName.PRESENTATION_MEDIATOR);
	        var stateProxy = this.facade.retrieveProxy(ProxyName_1.ProxyName.ContentPlaybackStateProxy);
	        var adapter = presoMediator.adapter;
	        var value = notification.body.value;
	        if (!stateProxy.isAbrSwitchingAvailable) {
	            stateProxy.qualitySwitchingMode = Playback_1.Playback.ABR_SWITCHING_MODE_UNAVAILABLE;
	            return;
	        }
	        switch (notification.name) {
	            case NotificationName_1.NotificationName.SWITCH_BITRATE:
	                var idx = Utils_1.Utils.getIndexForBitrate(stateProxy.model.manifestQualities, value, false);
	                this.switchToIndex(idx, stateProxy, adapter);
	                break;
	            case NotificationName_1.NotificationName.SWITCH_QUALITY_CATEGORY:
	                stateProxy.userQualityCategory = value;
	                this.switchQualityCategory(stateProxy, value, adapter);
	                break;
	            case NotificationName_1.NotificationName.AUTO_QUALITY_SWITCHING:
	                adapter.autoQualitySwitching = value;
	                stateProxy.qualitySwitchingMode = this.getAbrMode(value);
	                break;
	            case NotificationName_1.NotificationName.MIN_BITRATE:
	                adapter.minBitrate = value;
	                break;
	            case NotificationName_1.NotificationName.MAX_BITRATE:
	                adapter.maxBitrate = value;
	                break;
	        }
	    };
	    AbrSwitchCommand.prototype.switchToIndex = function (index, stateProxy, adapter) {
	        var minIndex = stateProxy.minIndex;
	        var maxIndex = stateProxy.maxIndex;
	        if (Util_1.Util.inRange(index, minIndex, maxIndex)) {
	            adapter.autoQualitySwitching = false;
	            stateProxy.qualitySwitchingMode = this.getAbrMode(false);
	            adapter.currentIndex = index;
	        }
	        else {
	            this.logger.log(LogLevel_1.LogLevel.WARN, index >= maxIndex ?
	                AppResources_1.AppResources.messages.ABR_MANUAL_SWITCHING_REACHED_UPPER_BOUNDS :
	                AppResources_1.AppResources.messages.ABR_MANUAL_SWITCHING_REACHED_LOWER_BOUNDS);
	        }
	    };
	    AbrSwitchCommand.prototype.switchQualityCategory = function (stateProxy, category, adapter) {
	        var qia = stateProxy.model.manifestQualities;
	        var _a = Utils_1.Utils.getMinAndMaxValuesForCategory(qia, category), minBitrate = _a.minBitrate, maxBitrate = _a.maxBitrate, minIndex = _a.minIndex, maxIndex = _a.maxIndex;
	        if (minIndex === maxIndex) {
	            this.switchToIndex(minIndex, stateProxy, adapter);
	        }
	        else {
	            adapter.minBitrate = minBitrate;
	            adapter.maxBitrate = maxBitrate;
	        }
	    };
	    AbrSwitchCommand.prototype.getAbrMode = function (enabled) {
	        return enabled ? Playback_1.Playback.ABR_SWITCHING_MODE_AUTO : Playback_1.Playback.ABR_SWITCHING_MODE_MANUAL;
	    };
	    return AbrSwitchCommand;
	}(LogAwareSimpleCommand_1.LogAwareSimpleCommand));
	exports.AbrSwitchCommand = AbrSwitchCommand;

	});

	var AbstractMacroCommand_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.AbstractMacroCommand = void 0;


	var AbstractMacroCommand = (function (_super) {
	    tslib_es6.__extends(AbstractMacroCommand, _super);
	    function AbstractMacroCommand() {
	        var _this = _super.call(this) || this;
	        _this.subCommands = null;
	        _this.subCommands = [];
	        _this.initializeMacroCommand();
	        return _this;
	    }
	    AbstractMacroCommand.prototype.addSubCommand = function (commandClassRef) {
	        this.subCommands.push(commandClassRef);
	    };
	    AbstractMacroCommand.prototype.execute = function (notification) {
	        var cmdClass, cmd;
	        while (this.subCommands.length > 0) {
	            cmdClass = this.subCommands.shift();
	            cmd = new cmdClass();
	            cmd.initializeNotifier(this.multiCoreKey);
	            cmd.execute(notification);
	        }
	    };
	    return AbstractMacroCommand;
	}(Notifier_1.Notifier));
	exports.AbstractMacroCommand = AbstractMacroCommand;

	});

	var LocalizationId_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.LocalizationId = void 0;
	var LocalizationId;
	(function (LocalizationId) {
	    LocalizationId["MEDIA_PLAYER"] = "media-player";
	})(LocalizationId = exports.LocalizationId || (exports.LocalizationId = {}));

	});

	var _Proxy = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Proxy = void 0;


	var Proxy = (function (_super) {
	    tslib_es6.__extends(Proxy, _super);
	    function Proxy(name, data) {
	        var _this = _super.call(this) || this;
	        _this.proxyName = null;
	        _this.pData = null;
	        _this.proxyName = name;
	        _this.pData = data || {};
	        return _this;
	    }
	    Object.defineProperty(Proxy.prototype, "name", {
	        get: function () {
	            return this.proxyName;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(Proxy.prototype, "data", {
	        get: function () {
	            return this.pData;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Proxy.prototype.onRegister = function () {
	    };
	    Proxy.prototype.onRemove = function () {
	        this.pData = null;
	        _super.prototype.onRemove.call(this);
	    };
	    return Proxy;
	}(Notifier_1.Notifier));
	exports.Proxy = Proxy;

	});

	var LocalizationProxy_1 = createCommonjsModule(function (module, exports) {
	var _a, _b;
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.LocalizationProxy = void 0;








	var LocalizationProxy = (function (_super) {
	    tslib_es6.__extends(LocalizationProxy, _super);
	    function LocalizationProxy(name, language) {
	        var _this = _super.call(this, name, {}) || this;
	        _this.pLocalizationData = [];
	        _this.pLocale = {};
	        _this.pLanguage = language;
	        _this.registerLocalizationData(LocalizationProxy.LocalizationData);
	        return _this;
	    }
	    LocalizationProxy.load = function (url) {
	        if (this.pExternalData[url] == null) {
	            this.pExternalData[url] = AsyncDataRequest_1.AsyncDataRequest.load({ url: url, responseType: XhrResponseType_1.XhrResponseType.JSON });
	        }
	        return this.pExternalData[url].then(function (request) { return request.response; });
	    };
	    LocalizationProxy.prototype.onRemove = function () {
	        this.pLocale = null;
	        this.pLocalizationData = null;
	        this.pLanguageTag = null;
	        this.pLanguage = null;
	    };
	    LocalizationProxy.prototype.getApi = function () {
	        return ApiDecorators.apiCollection({}, this);
	    };
	    Object.defineProperty(LocalizationProxy.prototype, "defaultLanguage", {
	        get: function () {
	            return (navigator && navigator.language) ? navigator.language : 'en';
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(LocalizationProxy.prototype, "language", {
	        get: function () {
	            return this.pLanguage || this.defaultLanguage;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(LocalizationProxy.prototype, "languageTag", {
	        get: function () {
	            return this.pLanguageTag;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    LocalizationProxy.prototype.changeLanguage = function (language) {
	        var _this = this;
	        if (language === void 0) { language = this.defaultLanguage; }
	        this.pLanguage = language;
	        this.pLanguageTag = Util_1.Util.parseLanguageTag(this.language);
	        var tag = new RegExp("^" + this.pLanguageTag.language, 'i');
	        var load = function (_a) {
	            var k = _a[0], v = _a[1];
	            return LocalizationProxy
	                .load(v)
	                .then(function (data) { return [k, data]; })
	                .catch(function (error) {
	                _this.facade.log(LogLevel_1.LogLevel.ERROR, "Could not load locale file " + v, error);
	                return [k, {}];
	            });
	        };
	        var data = this.pLocalizationData.map(function (data) {
	            var locale = Util_1.Util.entries(data)
	                .filter(function (e) { return tag.test(e[0]); })
	                .map(function (e) { return (typeof e[1] == 'string') ? load(e) : e; });
	            return Promise.all(locale);
	        });
	        return Promise.all(data)
	            .then(function (entries) {
	            var objs = entries.map(function (entry) { return Util_1.Util.fromEntries(entry); });
	            var data = Util_1.Util.merge.apply(Util_1.Util, objs);
	            return _this.pLocale = data;
	        });
	    };
	    LocalizationProxy.prototype.registerLocalizationData = function (data) {
	        if (Util_1.Util.isEmpty(data)) {
	            return;
	        }
	        this.pLocalizationData.push(data);
	    };
	    LocalizationProxy.prototype.localize = function (messageId, context) {
	        var message = this.lookup(messageId);
	        return Util_1.Util.template(message, context);
	    };
	    LocalizationProxy.prototype.lookup = function (messageId, language) {
	        var _this = this;
	        if (language === void 0) { language = this.language; }
	        var find = function (lang) {
	            var locale = (_this.pLocale[lang] || {});
	            return locale[messageId];
	        };
	        return find(language) || find(this.pLanguageTag.language) || messageId;
	    };
	    LocalizationProxy.pExternalData = {};
	    LocalizationProxy.LocalizationData = {
	        en: (_a = {},
	            _a[LocalizationId_1.LocalizationId.MEDIA_PLAYER] = 'Media Player',
	            _a),
	        es: (_b = {},
	            _b[LocalizationId_1.LocalizationId.MEDIA_PLAYER] = 'Reproductor multimedia',
	            _b)
	    };
	    tslib_es6.__decorate([
	        ApiDecorators.apiAccessor(true)
	    ], LocalizationProxy.prototype, "defaultLanguage", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiAccessor(true)
	    ], LocalizationProxy.prototype, "language", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiMethod()
	    ], LocalizationProxy.prototype, "languageTag", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiMethod()
	    ], LocalizationProxy.prototype, "changeLanguage", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiMethod()
	    ], LocalizationProxy.prototype, "registerLocalizationData", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiMethod()
	    ], LocalizationProxy.prototype, "localize", null);
	    return LocalizationProxy;
	}(_Proxy.Proxy));
	exports.LocalizationProxy = LocalizationProxy;

	});

	var ModelCollectionProxy_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ModelCollectionProxy = void 0;




	var ModelCollectionProxy = (function (_super) {
	    tslib_es6.__extends(ModelCollectionProxy, _super);
	    function ModelCollectionProxy(name, data) {
	        var _this = _super.call(this, name, data) || this;
	        _this.resettables = [
	            ModelName_1.ModelName.AdBreakInfo,
	            ModelName_1.ModelName.AdItem,
	            ModelName_1.ModelName.ContentPlaybackState
	        ];
	        return _this;
	    }
	    ModelCollectionProxy.prototype.onRemove = function () {
	        this.resettables = null;
	        var pdp = this.facade.retrieveProxy(ProxyName_1.ProxyName.PlayerDomProxy);
	        if (pdp) {
	            pdp.removeDom();
	        }
	        _super.prototype.onRemove.call(this);
	    };
	    Object.defineProperty(ModelCollectionProxy.prototype, "collection", {
	        get: function () {
	            return (this.data);
	        },
	        enumerable: false,
	        configurable: true
	    });
	    ModelCollectionProxy.prototype.getSnapshot = function () {
	        return this.collection.getSnapshot();
	    };
	    ModelCollectionProxy.prototype.getModel = function (name) {
	        return ((this.data).getModel(name));
	    };
	    ModelCollectionProxy.prototype.reset = function () {
	        var list = this.resettables;
	        var i = list.length;
	        while (i--) {
	            this.getModel(list[i]).reset();
	        }
	        var psi = this.getModel(ModelName_1.ModelName.PresentationState);
	        psi.skipAutoplayCheck = !psi.isAutoplay || psi.autoplaySupport !== null;
	        psi.isAutoplay = true;
	        psi.isCurrentVideoAd = false;
	        psi.started = false;
	        psi.streamDuration = NaN;
	        psi.streamTime = NaN;
	    };
	    return ModelCollectionProxy;
	}(_Proxy.Proxy));
	exports.ModelCollectionProxy = ModelCollectionProxy;

	});

	var PerformanceMode_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.PerformanceMode = void 0;
	var PerformanceMode;
	(function (PerformanceMode) {
	    PerformanceMode["AUTO"] = "auto";
	    PerformanceMode["DESKTOP"] = "desktop";
	    PerformanceMode["MOBILE"] = "mobile";
	    PerformanceMode["TV"] = "tv";
	})(PerformanceMode = exports.PerformanceMode || (exports.PerformanceMode = {}));

	});

	var PerformanceProxy_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.PerformanceProxy = void 0;






	var PerformanceProxy = (function (_super) {
	    tslib_es6.__extends(PerformanceProxy, _super);
	    function PerformanceProxy(name, data) {
	        return _super.call(this, name, data) || this;
	    }
	    PerformanceProxy.prototype.onRegister = function () {
	        var mcp = this.facade.retrieveProxy(ProxyName_1.ProxyName.ModelCollectionProxy);
	        var options = mcp.getModel(ModelName_1.ModelName.PlayerOptions);
	        this.pMode = (options.performanceMode == PerformanceMode_1.PerformanceMode.AUTO) ? this.calculatePerformanceMode() : options.performanceMode;
	    };
	    PerformanceProxy.prototype.calculatePerformanceMode = function () {
	        var sys = this.facade.retrieveService(ServiceName_1.ServiceName.System);
	        switch (true) {
	            case sys.isTv:
	            case sys.isEmbedded:
	                return PerformanceMode_1.PerformanceMode.TV;
	            case sys.isMobile:
	                return PerformanceMode_1.PerformanceMode.MOBILE;
	            default:
	                return PerformanceMode_1.PerformanceMode.DESKTOP;
	        }
	    };
	    Object.defineProperty(PerformanceProxy.prototype, "mode", {
	        get: function () {
	            return this.pMode;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(PerformanceProxy.prototype, "forwardBufferLength", {
	        get: function () {
	            switch (this.pMode) {
	                case PerformanceMode_1.PerformanceMode.MOBILE:
	                case PerformanceMode_1.PerformanceMode.TV:
	                    return 20;
	                default:
	                    return null;
	            }
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(PerformanceProxy.prototype, "backBufferLength", {
	        get: function () {
	            switch (this.pMode) {
	                case PerformanceMode_1.PerformanceMode.MOBILE:
	                case PerformanceMode_1.PerformanceMode.TV:
	                    return 30;
	                default:
	                    return 60;
	            }
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(PerformanceProxy.prototype, "topQualityForwardBufferLength", {
	        get: function () {
	            switch (this.pMode) {
	                case PerformanceMode_1.PerformanceMode.MOBILE:
	                case PerformanceMode_1.PerformanceMode.TV:
	                    return 60;
	                default:
	                    return null;
	            }
	        },
	        enumerable: false,
	        configurable: true
	    });
	    return PerformanceProxy;
	}(_Proxy.Proxy));
	exports.PerformanceProxy = PerformanceProxy;

	});

	var PlayerDom_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.PlayerDom = void 0;
	var PlayerDom;
	(function (PlayerDom) {
	    PlayerDom["MAIN_CONTAINER"] = "main";
	    PlayerDom["VIDEO_EL"] = "video";
	    PlayerDom["VIDEO_CONTAINER"] = "videoContainer";
	    PlayerDom["CC_CONTAINER"] = "ccContainer";
	    PlayerDom["AD_CONTAINER"] = "adContainer";
	    PlayerDom["PANEL_CONTAINER"] = "panelContainer";
	    PlayerDom["AD_CLICK_EL"] = "adClickEl";
	})(PlayerDom = exports.PlayerDom || (exports.PlayerDom = {}));

	});

	var PlayerDomProxy_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.PlayerDomProxy = void 0;




	var PlayerDomProxy = (function (_super) {
	    tslib_es6.__extends(PlayerDomProxy, _super);
	    function PlayerDomProxy(name, data) {
	        var _this = _super.call(this, name, data) || this;
	        _this.controlVisCssClass = 'cvui-ctrlbar-vis';
	        return _this;
	    }
	    PlayerDomProxy.prototype.setModel = function (coll) {
	        for (var q in coll) {
	            this.model[q] = coll[q];
	        }
	    };
	    PlayerDomProxy.prototype.removeDom = function () {
	        var main = this.getMain(), children = main.childNodes;
	        var i = children.length;
	        while (i--) {
	            main.removeChild(children[i]);
	        }
	    };
	    PlayerDomProxy.prototype.setControlVisibility = function (controlsVisible) {
	        var el = this.getMain();
	        if (!el) {
	            return;
	        }
	        var m = controlsVisible ? 'add' : 'remove';
	        el.classList[m](this.controlVisCssClass);
	    };
	    PlayerDomProxy.prototype.getElement = function (n) {
	        var el = this.model[n];
	        return el || null;
	    };
	    PlayerDomProxy.prototype.getSafeZIndex = function () {
	        var el = this.getElement(PlayerDom_1.PlayerDom.AD_CONTAINER);
	        if (!el)
	            return 10;
	        return Number(el.style.zIndex) + 10;
	    };
	    PlayerDomProxy.prototype.getVideo = function () {
	        return this.getElement(PlayerDom_1.PlayerDom.VIDEO_EL);
	    };
	    PlayerDomProxy.prototype.getTextTrackContainer = function () {
	        return this.getElement(PlayerDom_1.PlayerDom.CC_CONTAINER) || null;
	    };
	    PlayerDomProxy.prototype.setVideoVolume = function (v) {
	        var el = this.getVideo();
	        if (!el || this.getVideoVolume() == v) {
	            return;
	        }
	        el.volume = v;
	    };
	    PlayerDomProxy.prototype.getVideoVolume = function () {
	        var el = this.getVideo();
	        return el ? el.volume : null;
	    };
	    PlayerDomProxy.prototype.getMain = function () {
	        return this.getElement(PlayerDom_1.PlayerDom.MAIN_CONTAINER);
	    };
	    PlayerDomProxy.prototype.showAdClickElement = function (flag) {
	        var el = this.getElement(PlayerDom_1.PlayerDom.AD_CLICK_EL);
	        if (el) {
	            (el.style.display = flag !== false ? 'block' : 'none');
	        }
	    };
	    PlayerDomProxy.prototype.getDimensions = function () {
	        var r = this.getPresentationRect();
	        return r ? { width: r.width, height: r.height } : null;
	    };
	    PlayerDomProxy.prototype.showContainer = function (name, flag) {
	        var el = this.getElement(name);
	        if (el) {
	            el.style.display = flag ? 'inline-block' : 'none';
	        }
	    };
	    PlayerDomProxy.prototype.showAdContainer = function (flag) {
	        this.showContainer(PlayerDom_1.PlayerDom.AD_CONTAINER, flag);
	    };
	    PlayerDomProxy.prototype.getPresentationRect = function () {
	        var m = this.getMain(), r = m && m.getBoundingClientRect();
	        return r || null;
	    };
	    PlayerDomProxy.prototype.muteVideo = function (flag) {
	        var v = this.getVideo(), att = 'muted';
	        if (v) {
	            v.muted = flag;
	            flag && v.setAttribute(att, att);
	            !flag && v.removeAttribute(att);
	        }
	    };
	    PlayerDomProxy.prototype.primeVideo = function () {
	        var _this = this;
	        return Promise.resolve()
	            .then(function () {
	            var v = _this.getVideo();
	            if (v) {
	                v.src = AppResources_1.AppResources.blankVideoUrl;
	                v.load();
	                return v.play();
	            }
	        });
	    };
	    PlayerDomProxy.prototype.setVideoAttribute = function (name, value) {
	        var v = this.getVideo();
	        v && v.setAttribute(name, value);
	    };
	    PlayerDomProxy.prototype.removeVideoAttribute = function (name) {
	        var v = this.getVideo();
	        v && v.removeAttribute(name);
	    };
	    Object.defineProperty(PlayerDomProxy.prototype, "model", {
	        get: function () {
	            return this.data;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    return PlayerDomProxy;
	}(_Proxy.Proxy));
	exports.PlayerDomProxy = PlayerDomProxy;

	});

	var PlaylistProxy_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.PlaylistProxy = void 0;







	var PlaylistProxy = (function (_super) {
	    tslib_es6.__extends(PlaylistProxy, _super);
	    function PlaylistProxy(name, data) {
	        var _this = _super.call(this, name, data) || this;
	        _this.pCurrentIndex = -1;
	        _this.cachedApi = null;
	        _this.pList = [];
	        return _this;
	    }
	    PlaylistProxy.prototype.onRemove = function () {
	        this.clear();
	        this.pList = null;
	        this.cachedApi = null;
	        _super.prototype.onRemove.call(this);
	    };
	    PlaylistProxy.prototype.getApi = function () {
	        if (!this.cachedApi) {
	            this.cachedApi = ApiDecorators.apiCollection({}, this);
	        }
	        return this.cachedApi;
	    };
	    Object.defineProperty(PlaylistProxy.prototype, "list", {
	        get: function () {
	            var out = [];
	            var i = this.pList.length;
	            while (i--) {
	                out.unshift(Util_1.Util.merge({}, this.pList[i]));
	            }
	            return out;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(PlaylistProxy.prototype, "length", {
	        get: function () {
	            return this.pList.length;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(PlaylistProxy.prototype, "currentIndex", {
	        get: function () {
	            return this.pCurrentIndex;
	        },
	        set: function (index) {
	            if (index < 0 || index >= this.pList.length) {
	                this.notify(NotificationName_1.NotificationName.PLAYLIST_OUT_OF_RANGE);
	                return;
	            }
	            var cur = Math.max(this.pCurrentIndex, 0);
	            this.advance(index - cur);
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(PlaylistProxy.prototype, "currentResource", {
	        get: function () {
	            var r = this.find(this.pCurrentIndex);
	            return r ? Util_1.Util.merge({}, r) : null;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(PlaylistProxy.prototype, "nextResource", {
	        get: function () {
	            var r = this.find(this.pCurrentIndex + 1);
	            return r ? Util_1.Util.merge({}, r) : null;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(PlaylistProxy.prototype, "prevResource", {
	        get: function () {
	            var r = this.find(this.pCurrentIndex - 1);
	            return r ? Util_1.Util.merge({}, r) : null;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    PlaylistProxy.prototype.next = function () {
	        this.advance(1);
	    };
	    PlaylistProxy.prototype.prev = function () {
	        this.advance(-1);
	    };
	    PlaylistProxy.prototype.start = function (idx) {
	        if (idx === void 0) { idx = 0; }
	        this.pCurrentIndex = !isNaN(idx) ? idx - 1 : -1;
	        this.advance();
	    };
	    PlaylistProxy.prototype.addResources = function (resources, index) {
	        var _this = this;
	        if (index === void 0) { index = null; }
	        var a = !Array.isArray(resources) ? [resources] : resources;
	        a.forEach(function (v, i) {
	            var r = new ResourceConfiguration_1.ResourceConfiguration(v);
	            index !== null ? _this.pList.splice(index + i, 0, r) : _this.pList.push(r);
	        });
	        this.notifyChanged();
	    };
	    PlaylistProxy.prototype.removeResourceAtIndex = function (idx) {
	        var l = this.length;
	        if (idx === this.currentIndex && l === 1) {
	            this.clear();
	            return null;
	        }
	        if (idx >= 0 && idx < l) {
	            var itm = this.pList.splice(idx, 1);
	            if (idx === this.currentIndex) {
	                this.notify(NotificationName_1.NotificationName.PLAYLIST_CURRENT_RESOURCE_CLEARED, { interruptedResource: itm });
	            }
	            this.notifyChanged();
	            return (itm && itm[0]) || null;
	        }
	        return null;
	    };
	    PlaylistProxy.prototype.clear = function () {
	        var itm = this.find(this.pCurrentIndex);
	        this.pList = [];
	        this.pCurrentIndex = -1;
	        this.notify(NotificationName_1.NotificationName.PLAYLIST_CLEARED, { interruptedResource: itm });
	    };
	    PlaylistProxy.prototype.advance = function (inc) {
	        if (inc === void 0) { inc = 1; }
	        var idx = this.pCurrentIndex + inc, item = this.find(idx);
	        var note = null, data = null;
	        if (item) {
	            this.pCurrentIndex = idx;
	            data = { resource: item, currentIndex: idx };
	            note = NotificationName_1.NotificationName.PLAYLIST_ADVANCED;
	        }
	        else {
	            if (idx < 0) {
	                note = NotificationName_1.NotificationName.PLAYLIST_OUT_OF_RANGE;
	            }
	            else {
	                note = NotificationName_1.NotificationName.PLAYLIST_COMPLETE;
	            }
	        }
	        this.notify(note, data);
	    };
	    PlaylistProxy.prototype.find = function (idx) {
	        return (idx >= 0 && idx < this.pList.length && this.pList[idx]) || null;
	    };
	    PlaylistProxy.prototype.notify = function (name, data) {
	        if (data === void 0) { data = null; }
	        this.facade && this.facade.sendNotification(name, data || null, NotificationType_1.NotificationType.INTERNAL);
	    };
	    PlaylistProxy.prototype.notifyChanged = function () {
	        this.notify(NotificationName_1.NotificationName.PLAYLIST_CHANGE, null);
	    };
	    tslib_es6.__decorate([
	        ApiDecorators.apiAccessor(true)
	    ], PlaylistProxy.prototype, "list", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiAccessor()
	    ], PlaylistProxy.prototype, "length", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiAccessor()
	    ], PlaylistProxy.prototype, "currentIndex", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiAccessor()
	    ], PlaylistProxy.prototype, "currentResource", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiAccessor()
	    ], PlaylistProxy.prototype, "nextResource", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiAccessor()
	    ], PlaylistProxy.prototype, "prevResource", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiMethod()
	    ], PlaylistProxy.prototype, "next", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiMethod()
	    ], PlaylistProxy.prototype, "prev", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiMethod()
	    ], PlaylistProxy.prototype, "start", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiMethod()
	    ], PlaylistProxy.prototype, "addResources", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiMethod()
	    ], PlaylistProxy.prototype, "removeResourceAtIndex", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiMethod()
	    ], PlaylistProxy.prototype, "clear", null);
	    return PlaylistProxy;
	}(_Proxy.Proxy));
	exports.PlaylistProxy = PlaylistProxy;

	});

	var TextTrackMode_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.TextTrackMode = void 0;
	var TextTrackMode;
	(function (TextTrackMode) {
	    TextTrackMode["SHOWING"] = "showing";
	    TextTrackMode["HIDDEN"] = "hidden";
	    TextTrackMode["DISABLED"] = "disabled";
	})(TextTrackMode = exports.TextTrackMode || (exports.TextTrackMode = {}));

	});

	var TextTrackProxy_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.TextTrackProxy = void 0;



	var TextTrackProxy = (function (_super) {
	    tslib_es6.__extends(TextTrackProxy, _super);
	    function TextTrackProxy(name, data) {
	        if (data === void 0) { data = {}; }
	        return _super.call(this, name, {
	            native: data.native !== false,
	            mode: TextTrackMode_1.TextTrackMode.DISABLED,
	            language: (data.language != null) ? data.language : navigator.language
	        }) || this;
	    }
	    Object.defineProperty(TextTrackProxy.prototype, "mode", {
	        get: function () {
	            return this.data.mode;
	        },
	        set: function (value) {
	            this.data.mode = value;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(TextTrackProxy.prototype, "enabled", {
	        get: function () {
	            return this.data.mode != TextTrackMode_1.TextTrackMode.DISABLED;
	        },
	        set: function (value) {
	            if (value) {
	                this.mode = this.enabledMode;
	            }
	            else {
	                this.mode = TextTrackMode_1.TextTrackMode.DISABLED;
	            }
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(TextTrackProxy.prototype, "enabledMode", {
	        get: function () {
	            return (this.data.native) ? TextTrackMode_1.TextTrackMode.SHOWING : TextTrackMode_1.TextTrackMode.HIDDEN;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(TextTrackProxy.prototype, "native", {
	        get: function () {
	            return this.data.native;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(TextTrackProxy.prototype, "language", {
	        get: function () {
	            return this.data.language;
	        },
	        set: function (value) {
	            this.data.language = value;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    return TextTrackProxy;
	}(_Proxy.Proxy));
	exports.TextTrackProxy = TextTrackProxy;

	});

	var AdBreakType_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.AdBreakType = void 0;
	var AdBreakType;
	(function (AdBreakType) {
	    AdBreakType["PRE"] = "PRE";
	    AdBreakType["MID"] = "MID";
	    AdBreakType["POST"] = "POST";
	})(AdBreakType = exports.AdBreakType || (exports.AdBreakType = {}));

	});

	var Validator_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Validator = void 0;
	var Validator = (function () {
	    function Validator() {
	    }
	    Validator.checkType = function (val, type, allowNull) {
	        if (typeof type == "string") {
	            type = [type];
	        }
	        return allowNull && val === null ? true : type.some(function (t) { return typeof val === t; });
	    };
	    Validator.notEmpty = function (obj) {
	        return !(obj === null || obj === undefined ||
	            (Array.isArray(obj) && obj.length === 0) ||
	            ("object" === typeof obj && obj.constructor === Object && Object.keys(obj).length === 0) ||
	            "string" === typeof obj && obj === '');
	    };
	    Validator.isArray = function (obj) {
	        return Array.isArray(obj);
	    };
	    Validator.validNumber = function (val, defVal) {
	        return typeof val !== 'number' ? defVal : val;
	    };
	    Validator.isTypedArray = function (obj, type) {
	        if (this.isArray(obj) && this.notEmpty(obj)) {
	            var i = obj.length;
	            while (i--) {
	                if (typeof obj[i] !== type) {
	                    return false;
	                }
	            }
	            return true;
	        }
	        return false;
	    };
	    Validator.isType = function (value, type) {
	        return value instanceof type;
	    };
	    Validator.isPositiveNumber = function (value) {
	        return typeof value === 'number' && value >= 0;
	    };
	    return Validator;
	}());
	exports.Validator = Validator;

	});

	var ad_break_info_config = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ad_break_info_config = void 0;


	exports.ad_break_info_config = {
	    adBreakDuration: {
	        type: 'number',
	        defaultValue: -1,
	        setterTransformer: function (val) {
	            return typeof val !== 'number' ? -1 : val;
	        }
	    },
	    adTotal: {
	        type: 'number',
	        defaultValue: -1,
	        setterTransformer: function (val) {
	            return typeof val !== 'number' ? -1 : val;
	        }
	    },
	    adBreakPosition: {
	        type: 'number',
	        defaultValue: -1,
	        setterTransformer: function (val) {
	            return typeof val !== 'number' ? -1 : val;
	        }
	    },
	    adBreakType: {
	        type: 'string',
	        defaultValue: null,
	        setterTransformer: function (val) {
	            return (val === AdBreakType_1.AdBreakType.MID || val === AdBreakType_1.AdBreakType.POST || val === AdBreakType_1.AdBreakType.PRE)
	                ? val : null;
	        }
	    },
	    adServerName: {
	        type: 'string',
	        defaultValue: null,
	        validator: Validator_1.Validator.notEmpty
	    }
	};

	});

	var ad_item_config = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ad_item_config = void 0;

	exports.ad_item_config = {
	    adDuration: {
	        type: 'number',
	        defaultValue: -1,
	        setterTransformer: function (val) {
	            return Validator_1.Validator.validNumber(val, -1);
	        }
	    },
	    adTitle: {
	        type: 'string',
	        defaultValue: null
	    },
	    adId: {
	        type: 'string',
	        defaultValue: null
	    },
	    adPosition: {
	        type: 'number',
	        defaultValue: -1,
	        setterTransformer: function (val) {
	            return Validator_1.Validator.validNumber(val, -1);
	        }
	    },
	    adAssetUrl: {
	        type: 'string',
	        defaultValue: null
	    },
	    isVpaid: {
	        type: 'boolean',
	        defaultValue: false,
	        setterTransformer: function (val) {
	            return typeof val !== 'boolean' ? false : val;
	        }
	    },
	    wrapperAdId: {
	        type: 'string',
	        defaultValue: null
	    },
	    creativeId: {
	        type: 'string',
	        defaultValue: null
	    },
	    wrapperCreativeId: {
	        type: 'string',
	        defaultValue: null
	    },
	    vastMediaWidth: {
	        type: 'number',
	        defaultValue: null
	    },
	    vastMediaHeight: {
	        type: 'number',
	        defaultValue: null
	    },
	    vastMediaBitrate: {
	        type: 'number',
	        defaultValue: null
	    },
	};

	});

	var build_info_config = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.build_info_config = void 0;
	exports.build_info_config = {
	    env: {
	        type: 'string',
	        defaultValue: null
	    },
	    playerName: {
	        type: 'string',
	        defaultValue: null
	    },
	    playerVersion: {
	        type: 'string',
	        defaultValue: null
	    },
	    buildTime: {
	        type: 'string',
	        defaultValue: null
	    }
	};

	});

	var content_playback_state_config = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.content_playback_state_config = void 0;


	exports.content_playback_state_config = {
	    manifestQualities: {
	        type: 'object',
	        defaultValue: null,
	    },
	    qualityInfo: {
	        type: 'object',
	        defaultValue: null,
	    },
	    audioTracks: {
	        type: 'object',
	        defaultValue: null,
	    },
	    textTracks: {
	        type: 'object',
	        defaultValue: null,
	    },
	    streamType: {
	        type: 'string',
	        defaultValue: StreamType_1.StreamType.VOD,
	    },
	    liveStreamInfo: {
	        type: 'object',
	        defaultValue: null
	    },
	    bufferLength: {
	        type: 'number',
	        defaultValue: 0,
	    },
	    cdn: {
	        type: 'string',
	        defaultValue: null,
	        validator: Validator_1.Validator.notEmpty
	    },
	    drmType: {
	        type: 'string',
	        defaultValue: null,
	        validator: Validator_1.Validator.notEmpty
	    },
	    contentSegment: {
	        type: 'number',
	        defaultValue: NaN,
	    },
	    maxBandwidth: {
	        type: 'number',
	        defaultValue: NaN,
	    },
	    time: {
	        type: 'number',
	        defaultValue: NaN,
	    },
	    state: {
	        type: 'number',
	        defaultValue: NaN,
	    },
	    duration: {
	        type: 'number',
	        defaultValue: NaN,
	    },
	    bitrate: {
	        type: 'number',
	        defaultValue: NaN,
	    },
	    started: {
	        type: 'boolean',
	        defaultValue: false,
	    },
	    averageDroppedFps: {
	        type: 'number',
	        defaultValue: NaN,
	    },
	    framerate: {
	        type: 'number',
	        defaultValue: NaN,
	    }
	};

	});

	var player_dom_config = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.player_dom_config = void 0;
	exports.player_dom_config = {
	    main: {
	        type: 'object',
	        defaultValue: null,
	    },
	    video: {
	        type: 'object',
	        defaultValue: null,
	    },
	    videoContainer: {
	        type: 'object',
	        defaultValue: null,
	    },
	    ccContainer: {
	        type: 'object',
	        defaultValue: null,
	    },
	    adContainer: {
	        type: 'object',
	        defaultValue: null,
	    },
	    panelContainer: {
	        type: 'object',
	        defaultValue: null,
	    },
	    adClickEl: {
	        type: 'object',
	        defaultValue: null,
	    }
	};

	});

	var Autoplay_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Autoplay = void 0;
	var Autoplay;
	(function (Autoplay) {
	    Autoplay["NONE"] = "none";
	    Autoplay["ATTEMPT_MUTED"] = "attemptMuted";
	    Autoplay["ATTEMPT_UNMUTED"] = "attemptUnmuted";
	    Autoplay["ATTEMPT_UNMUTED_THEN_MUTED"] = "attemptUnmutedThenMuted";
	})(Autoplay = exports.Autoplay || (exports.Autoplay = {}));

	});

	var player_options_config = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.player_options_config = void 0;



	exports.player_options_config = {
	    container: {
	        type: ['object', 'string'],
	        defaultValue: null,
	    },
	    dataTransformers: {
	        type: 'object',
	        defaultValue: null,
	    },
	    plugins: {
	        type: 'object',
	        defaultValue: null,
	    },
	    autoplay: {
	        type: 'string',
	        defaultValue: Autoplay_1.Autoplay.NONE
	    },
	    offsetTextOnControlsVisible: {
	        type: 'boolean',
	        defaultValue: false
	    },
	    id: {
	        type: 'string',
	        defaultValue: null
	    },
	    networkErrorRecovery: {
	        type: 'object',
	        defaultValue: null
	    },
	    performanceMode: {
	        type: 'string',
	        defaultValue: PerformanceMode_1.PerformanceMode.AUTO
	    },
	    renderTextTrackNatively: {
	        type: 'boolean',
	        defaultValue: true
	    },
	    nativePlugins: {
	        type: 'object',
	        defaultValue: null
	    },
	    playsInline: {
	        type: 'boolean',
	        defaultValue: true
	    },
	    uiConfig: {
	        type: 'object',
	        defaultValue: null
	    },
	    useNativeControls: {
	        type: 'boolean',
	        defaultValue: false
	    },
	    overrides: {
	        type: 'object',
	        defaultValue: {}
	    },
	    logLevel: {
	        type: 'string',
	        defaultValue: LogLevel_1.LogLevel.OFF
	    },
	    language: {
	        type: 'string',
	        defaultValue: null
	    }
	};

	});

	var Transformer_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Transformer = void 0;
	var Transformer = (function () {
	    function Transformer() {
	    }
	    Transformer.clampValue = function (val, min, max) {
	        if (typeof val !== "number") {
	            return null;
	        }
	        return Math.max(min, Math.min(val, max));
	    };
	    Transformer.lowerCase = function (val) {
	        return typeof val === "string" ? val.toLowerCase() : val;
	    };
	    Transformer.strToNum = function (val) {
	        if (typeof val === 'number') {
	            return val;
	        }
	        if (typeof val === 'string') {
	            var pf = parseFloat(val);
	            return isNaN(pf) ? val : pf;
	        }
	        return val;
	    };
	    return Transformer;
	}());
	exports.Transformer = Transformer;

	});

	var presentation_state_config = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.presentation_state_config = void 0;


	exports.presentation_state_config = {
	    skipAutoplayCheck: {
	        type: 'boolean',
	        defaultValue: false,
	    },
	    streamTime: {
	        type: 'number',
	        defaultValue: NaN,
	        setterTransformer: function (value) {
	            return Validator_1.Validator.isPositiveNumber(value) ? value : NaN;
	        }
	    },
	    streamDuration: {
	        type: 'number',
	        defaultValue: NaN,
	        setterTransformer: function (value) {
	            return Validator_1.Validator.isPositiveNumber(value) ? value : NaN;
	        }
	    },
	    autoplaySupport: {
	        type: 'object',
	        defaultValue: null
	    },
	    isAutoplay: {
	        type: 'boolean',
	        defaultValue: false,
	    },
	    isCurrentVideoAd: {
	        type: 'boolean',
	        defaultValue: false,
	    },
	    isFullscreen: {
	        type: 'boolean',
	        defaultValue: false,
	    },
	    isMuted: {
	        type: 'boolean',
	        defaultValue: false,
	    },
	    isMuteAtPlayStart: {
	        type: 'boolean',
	        defaultValue: false,
	    },
	    started: {
	        type: 'boolean',
	        defaultValue: false,
	    },
	    userHasUnmuted: {
	        type: 'boolean',
	        defaultValue: false,
	    },
	    volume: {
	        type: 'number',
	        defaultValue: 0.35,
	        setterTransformer: function (value) {
	            return Transformer_1.Transformer.clampValue(value, 0, 1);
	        }
	    },
	    usesSsai: {
	        type: 'boolean',
	        defaultValue: false,
	    },
	    streamId: {
	        type: 'string',
	        defaultValue: null,
	    },
	    suspended: {
	        type: 'boolean',
	        defaultValue: false,
	    }
	};

	});

	var cfg = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.config = void 0;







	var config = {
	    build_info_config: build_info_config.build_info_config,
	    ad_break_info_config: ad_break_info_config.ad_break_info_config,
	    ad_item_config: ad_item_config.ad_item_config,
	    content_playback_state_config: content_playback_state_config.content_playback_state_config,
	    player_dom_config: player_dom_config.player_dom_config,
	    player_options_config: player_options_config.player_options_config,
	    presentation_state_config: presentation_state_config.presentation_state_config,
	};
	exports.config = config;

	});

	var _Generator = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Generator = void 0;

	var Generator = (function () {
	    function Generator() {
	    }
	    Generator.generateModel = function (scope, config, dataContainer, defaultValueContainer) {
	        for (var q in config) {
	            this.createProperty(q, config[q], scope, dataContainer, defaultValueContainer);
	        }
	    };
	    Generator.createProperty = function (name, config, scope, dataCtr, defaultValueCtr) {
	        var validator = config.validator, type = config.type, defValue = config.defaultValue, enumerable = config.enumerable !== false, setterTransformer = this.getTransformer(config, 'setter', scope), getterTransformer = this.getTransformer(config, 'getter', scope);
	        if (config.writable === false) {
	            Object.defineProperty(scope, name, {
	                enumerable: enumerable,
	                value: defValue,
	                writable: false
	            });
	            dataCtr[name] = defValue;
	        }
	        else {
	            Object.defineProperty(scope, name, {
	                enumerable: enumerable,
	                set: function (val) {
	                    var canWarn = console && console.warn, txVal = setterTransformer(val);
	                    if (validator && !validator(txVal)) {
	                        canWarn && console.warn("Invalid value '" + txVal + "' for property " + name);
	                        return;
	                    }
	                    if (!Validator_1.Validator.checkType(txVal, type, defValue === null)) {
	                        canWarn && console.warn("Invalid type supplied for property " + name);
	                        return;
	                    }
	                    dataCtr[name] = txVal;
	                },
	                get: function () {
	                    return getterTransformer(dataCtr[name]);
	                }
	            });
	            dataCtr[name] = defValue;
	        }
	        defaultValueCtr[name] = defValue;
	    };
	    Generator.getTransformer = function (pCfg, which, scope) {
	        var tx = pCfg[which + 'Transformer'];
	        if (tx && typeof tx === 'function') {
	            return tx.bind(scope);
	        }
	        return this.blankTransformer;
	    };
	    Generator.blankTransformer = function (val) {
	        return val;
	    };
	    return Generator;
	}());
	exports.Generator = Generator;

	});

	var ConfigurablePropertyContainer_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ConfigurablePropertyContainer = void 0;


	var ConfigurablePropertyContainer = (function () {
	    function ConfigurablePropertyContainer(config) {
	        this.pData = {};
	        this.defaultValues = {};
	        _Generator.Generator.generateModel(this, config, this.pData, this.defaultValues);
	    }
	    Object.defineProperty(ConfigurablePropertyContainer.prototype, "data", {
	        get: function () {
	            return Util_1.Util.assign({}, this.pData);
	        },
	        enumerable: false,
	        configurable: true
	    });
	    ConfigurablePropertyContainer.prototype.reset = function () {
	        for (var q in this.defaultValues) {
	            this.pData[q] = this.defaultValues[q];
	        }
	    };
	    return ConfigurablePropertyContainer;
	}());
	exports.ConfigurablePropertyContainer = ConfigurablePropertyContainer;

	});

	var AdBreakInfo_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.AdBreakInfo = void 0;

	var AdBreakInfo = (function () {
	    function AdBreakInfo(config) {
	        this.model = new ConfigurablePropertyContainer_1.ConfigurablePropertyContainer(config);
	    }
	    Object.defineProperty(AdBreakInfo, "modelName", {
	        get: function () { return 'AdBreakInfo'; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(AdBreakInfo.prototype, "data", {
	        get: function () { return (this.model.data); },
	        enumerable: false,
	        configurable: true
	    });
	    AdBreakInfo.prototype.reset = function () { this.model.reset(); };
	    Object.defineProperty(AdBreakInfo.prototype, "adBreakDuration", {
	        get: function () { return this.model.adBreakDuration; },
	        set: function (value) { this.model.adBreakDuration = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(AdBreakInfo.prototype, "adBreakPosition", {
	        get: function () { return this.model.adBreakPosition; },
	        set: function (value) { this.model.adBreakPosition = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(AdBreakInfo.prototype, "adBreakType", {
	        get: function () { return this.model.adBreakType; },
	        set: function (value) { this.model.adBreakType = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(AdBreakInfo.prototype, "adServerName", {
	        get: function () { return this.model.adServerName; },
	        set: function (value) { this.model.adServerName = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(AdBreakInfo.prototype, "adTotal", {
	        get: function () { return this.model.adTotal; },
	        set: function (value) { this.model.adTotal = value; },
	        enumerable: false,
	        configurable: true
	    });
	    return AdBreakInfo;
	}());
	exports.AdBreakInfo = AdBreakInfo;

	});

	var AdItem_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.AdItem = void 0;

	var AdItem = (function () {
	    function AdItem(config) {
	        this.model = new ConfigurablePropertyContainer_1.ConfigurablePropertyContainer(config);
	    }
	    Object.defineProperty(AdItem, "modelName", {
	        get: function () { return 'AdItem'; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(AdItem.prototype, "data", {
	        get: function () { return (this.model.data); },
	        enumerable: false,
	        configurable: true
	    });
	    AdItem.prototype.reset = function () { this.model.reset(); };
	    Object.defineProperty(AdItem.prototype, "adDuration", {
	        get: function () { return this.model.adDuration; },
	        set: function (value) { this.model.adDuration = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(AdItem.prototype, "adTitle", {
	        get: function () { return this.model.adTitle; },
	        set: function (value) { this.model.adTitle = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(AdItem.prototype, "adId", {
	        get: function () { return this.model.adId; },
	        set: function (value) { this.model.adId = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(AdItem.prototype, "adPosition", {
	        get: function () { return this.model.adPosition; },
	        set: function (value) { this.model.adPosition = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(AdItem.prototype, "adAssetUrl", {
	        get: function () { return this.model.adAssetUrl; },
	        set: function (value) { this.model.adAssetUrl = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(AdItem.prototype, "isVpaid", {
	        get: function () { return this.model.isVpaid; },
	        set: function (value) { this.model.isVpaid = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(AdItem.prototype, "wrapperAdId", {
	        get: function () { return this.model.wrapperAdId; },
	        set: function (value) { this.model.wrapperAdId = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(AdItem.prototype, "creativeId", {
	        get: function () { return this.model.creativeId; },
	        set: function (value) { this.model.creativeId = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(AdItem.prototype, "wrapperCreativeId", {
	        get: function () { return this.model.wrapperCreativeId; },
	        set: function (value) { this.model.wrapperCreativeId = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(AdItem.prototype, "vastMediaWidth", {
	        get: function () { return this.model.vastMediaWidth; },
	        set: function (value) { this.model.vastMediaWidth = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(AdItem.prototype, "vastMediaHeight", {
	        get: function () { return this.model.vastMediaHeight; },
	        set: function (value) { this.model.vastMediaHeight = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(AdItem.prototype, "vastMediaBitrate", {
	        get: function () { return this.model.vastMediaBitrate; },
	        set: function (value) { this.model.vastMediaBitrate = value; },
	        enumerable: false,
	        configurable: true
	    });
	    return AdItem;
	}());
	exports.AdItem = AdItem;

	});

	var BuildInfo_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.BuildInfo = void 0;

	var BuildInfo = (function () {
	    function BuildInfo(config) {
	        this.model = new ConfigurablePropertyContainer_1.ConfigurablePropertyContainer(config);
	    }
	    Object.defineProperty(BuildInfo, "modelName", {
	        get: function () { return 'BuildInfo'; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(BuildInfo.prototype, "data", {
	        get: function () { return (this.model.data); },
	        enumerable: false,
	        configurable: true
	    });
	    BuildInfo.prototype.reset = function () { this.model.reset(); };
	    Object.defineProperty(BuildInfo.prototype, "buildTime", {
	        get: function () { return this.model.buildTime; },
	        set: function (value) { this.model.buildTime = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(BuildInfo.prototype, "env", {
	        get: function () { return this.model.env; },
	        set: function (value) { this.model.env = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(BuildInfo.prototype, "playerName", {
	        get: function () { return this.model.playerName; },
	        set: function (value) { this.model.playerName = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(BuildInfo.prototype, "playerVersion", {
	        get: function () { return this.model.playerVersion; },
	        set: function (value) { this.model.playerVersion = value; },
	        enumerable: false,
	        configurable: true
	    });
	    return BuildInfo;
	}());
	exports.BuildInfo = BuildInfo;

	});

	var ContentPlaybackState_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ContentPlaybackState = void 0;

	var ContentPlaybackState = (function () {
	    function ContentPlaybackState(config) {
	        this.model = new ConfigurablePropertyContainer_1.ConfigurablePropertyContainer(config);
	    }
	    Object.defineProperty(ContentPlaybackState, "modelName", {
	        get: function () { return 'ContentPlaybackState'; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(ContentPlaybackState.prototype, "data", {
	        get: function () { return (this.model.data); },
	        enumerable: false,
	        configurable: true
	    });
	    ContentPlaybackState.prototype.reset = function () { this.model.reset(); };
	    Object.defineProperty(ContentPlaybackState.prototype, "manifestQualities", {
	        get: function () { return this.model.manifestQualities; },
	        set: function (value) { this.model.manifestQualities = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(ContentPlaybackState.prototype, "qualityInfo", {
	        get: function () { return this.model.qualityInfo; },
	        set: function (value) { this.model.qualityInfo = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(ContentPlaybackState.prototype, "audioTracks", {
	        get: function () { return this.model.audioTracks; },
	        set: function (value) { this.model.audioTracks = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(ContentPlaybackState.prototype, "textTracks", {
	        get: function () { return this.model.textTracks; },
	        set: function (value) { this.model.textTracks = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(ContentPlaybackState.prototype, "streamType", {
	        get: function () { return this.model.streamType; },
	        set: function (value) { this.model.streamType = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(ContentPlaybackState.prototype, "liveStreamInfo", {
	        get: function () { return this.model.liveStreamInfo; },
	        set: function (value) { this.model.liveStreamInfo = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(ContentPlaybackState.prototype, "bufferLength", {
	        get: function () { return this.model.bufferLength; },
	        set: function (value) { this.model.bufferLength = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(ContentPlaybackState.prototype, "cdn", {
	        get: function () { return this.model.cdn; },
	        set: function (value) { this.model.cdn = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(ContentPlaybackState.prototype, "drmType", {
	        get: function () { return this.model.drmType; },
	        set: function (value) { this.model.drmType = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(ContentPlaybackState.prototype, "contentSegment", {
	        get: function () { return this.model.contentSegment; },
	        set: function (value) { this.model.contentSegment = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(ContentPlaybackState.prototype, "maxBandwidth", {
	        get: function () { return this.model.maxBandwidth; },
	        set: function (value) { this.model.maxBandwidth = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(ContentPlaybackState.prototype, "time", {
	        get: function () { return this.model.time; },
	        set: function (value) { this.model.time = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(ContentPlaybackState.prototype, "state", {
	        get: function () { return this.model.state; },
	        set: function (value) { this.model.state = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(ContentPlaybackState.prototype, "duration", {
	        get: function () { return this.model.duration; },
	        set: function (value) { this.model.duration = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(ContentPlaybackState.prototype, "bitrate", {
	        get: function () { return this.model.bitrate; },
	        set: function (value) { this.model.bitrate = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(ContentPlaybackState.prototype, "started", {
	        get: function () { return this.model.started; },
	        set: function (value) { this.model.started = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(ContentPlaybackState.prototype, "averageDroppedFps", {
	        get: function () { return this.model.averageDroppedFps; },
	        set: function (value) { this.model.averageDroppedFps = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(ContentPlaybackState.prototype, "framerate", {
	        get: function () { return this.model.framerate; },
	        set: function (value) { this.model.framerate = value; },
	        enumerable: false,
	        configurable: true
	    });
	    return ContentPlaybackState;
	}());
	exports.ContentPlaybackState = ContentPlaybackState;

	});

	var PlayerDom_1$1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.PlayerDom = void 0;

	var PlayerDom = (function () {
	    function PlayerDom(config) {
	        this.model = new ConfigurablePropertyContainer_1.ConfigurablePropertyContainer(config);
	    }
	    Object.defineProperty(PlayerDom, "modelName", {
	        get: function () { return 'PlayerDom'; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(PlayerDom.prototype, "data", {
	        get: function () { return (this.model.data); },
	        enumerable: false,
	        configurable: true
	    });
	    PlayerDom.prototype.reset = function () { this.model.reset(); };
	    Object.defineProperty(PlayerDom.prototype, "main", {
	        get: function () { return this.model.main; },
	        set: function (value) { this.model.main = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(PlayerDom.prototype, "video", {
	        get: function () { return this.model.video; },
	        set: function (value) { this.model.video = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(PlayerDom.prototype, "videoContainer", {
	        get: function () { return this.model.videoContainer; },
	        set: function (value) { this.model.videoContainer = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(PlayerDom.prototype, "ccContainer", {
	        get: function () { return this.model.ccContainer; },
	        set: function (value) { this.model.ccContainer = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(PlayerDom.prototype, "adContainer", {
	        get: function () { return this.model.adContainer; },
	        set: function (value) { this.model.adContainer = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(PlayerDom.prototype, "panelContainer", {
	        get: function () { return this.model.panelContainer; },
	        set: function (value) { this.model.panelContainer = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(PlayerDom.prototype, "adClickEl", {
	        get: function () { return this.model.adClickEl; },
	        set: function (value) { this.model.adClickEl = value; },
	        enumerable: false,
	        configurable: true
	    });
	    return PlayerDom;
	}());
	exports.PlayerDom = PlayerDom;

	});

	var PlayerOptions_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.PlayerOptions = void 0;

	var PlayerOptions = (function () {
	    function PlayerOptions(config) {
	        this.model = new ConfigurablePropertyContainer_1.ConfigurablePropertyContainer(config);
	    }
	    Object.defineProperty(PlayerOptions, "modelName", {
	        get: function () { return 'PlayerOptions'; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(PlayerOptions.prototype, "data", {
	        get: function () { return (this.model.data); },
	        enumerable: false,
	        configurable: true
	    });
	    PlayerOptions.prototype.reset = function () { this.model.reset(); };
	    Object.defineProperty(PlayerOptions.prototype, "container", {
	        get: function () { return this.model.container; },
	        set: function (value) { this.model.container = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(PlayerOptions.prototype, "dataTransformers", {
	        get: function () { return this.model.dataTransformers; },
	        set: function (value) { this.model.dataTransformers = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(PlayerOptions.prototype, "plugins", {
	        get: function () { return this.model.plugins; },
	        set: function (value) { this.model.plugins = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(PlayerOptions.prototype, "autoplay", {
	        get: function () { return this.model.autoplay; },
	        set: function (value) { this.model.autoplay = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(PlayerOptions.prototype, "offsetTextOnControlsVisible", {
	        get: function () { return this.model.offsetTextOnControlsVisible; },
	        set: function (value) { this.model.offsetTextOnControlsVisible = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(PlayerOptions.prototype, "id", {
	        get: function () { return this.model.id; },
	        set: function (value) { this.model.id = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(PlayerOptions.prototype, "isEmbedded", {
	        get: function () { return this.model.isEmbedded; },
	        set: function (value) { this.model.isEmbedded = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(PlayerOptions.prototype, "networkErrorRecovery", {
	        get: function () { return this.model.networkErrorRecovery; },
	        set: function (value) { this.model.networkErrorRecovery = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(PlayerOptions.prototype, "performanceMode", {
	        get: function () { return this.model.performanceMode; },
	        set: function (value) { this.model.performanceMode = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(PlayerOptions.prototype, "nativePlugins", {
	        get: function () { return this.model.nativePlugins; },
	        set: function (value) { this.model.nativePlugins = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(PlayerOptions.prototype, "renderTextTrackNatively", {
	        get: function () { return this.model.renderTextTrackNatively; },
	        set: function (value) { this.model.renderTextTrackNatively = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(PlayerOptions.prototype, "playsInline", {
	        get: function () { return this.model.playsInline; },
	        set: function (value) { this.model.playsInline = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(PlayerOptions.prototype, "uiConfig", {
	        get: function () { return this.model.uiConfig; },
	        set: function (value) { this.model.uiConfig = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(PlayerOptions.prototype, "useNativeControls", {
	        get: function () { return this.model.useNativeControls; },
	        set: function (value) { this.model.useNativeControls = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(PlayerOptions.prototype, "overrides", {
	        get: function () { return this.model.overrides; },
	        set: function (value) { this.model.overrides = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(PlayerOptions.prototype, "logLevel", {
	        get: function () { return this.model.logLevel; },
	        set: function (value) { this.model.logLevel = value; },
	        enumerable: false,
	        configurable: true
	    });
	    return PlayerOptions;
	}());
	exports.PlayerOptions = PlayerOptions;

	});

	var PresentationState_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.PresentationState = void 0;

	var PresentationState = (function () {
	    function PresentationState(config) {
	        this.model = new ConfigurablePropertyContainer_1.ConfigurablePropertyContainer(config);
	    }
	    Object.defineProperty(PresentationState, "modelName", {
	        get: function () { return 'PresentationState'; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(PresentationState.prototype, "data", {
	        get: function () { return (this.model.data); },
	        enumerable: false,
	        configurable: true
	    });
	    PresentationState.prototype.reset = function () { this.model.reset(); };
	    Object.defineProperty(PresentationState.prototype, "skipAutoplayCheck", {
	        get: function () { return this.model.skipAutoplayCheck; },
	        set: function (value) { this.model.skipAutoplayCheck = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(PresentationState.prototype, "streamTime", {
	        get: function () { return this.model.streamTime; },
	        set: function (value) { this.model.streamTime = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(PresentationState.prototype, "streamDuration", {
	        get: function () { return this.model.streamDuration; },
	        set: function (value) { this.model.streamDuration = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(PresentationState.prototype, "autoplaySupport", {
	        get: function () { return this.model.autoplaySupport; },
	        set: function (value) { this.model.autoplaySupport = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(PresentationState.prototype, "isAutoplay", {
	        get: function () { return this.model.isAutoplay; },
	        set: function (value) { this.model.isAutoplay = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(PresentationState.prototype, "isCurrentVideoAd", {
	        get: function () { return this.model.isCurrentVideoAd; },
	        set: function (value) { this.model.isCurrentVideoAd = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(PresentationState.prototype, "isFullscreen", {
	        get: function () { return this.model.isFullscreen; },
	        set: function (value) { this.model.isFullscreen = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(PresentationState.prototype, "isMuted", {
	        get: function () { return this.model.isMuted; },
	        set: function (value) { this.model.isMuted = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(PresentationState.prototype, "isMuteAtPlayStart", {
	        get: function () { return this.model.isMuteAtPlayStart; },
	        set: function (value) { this.model.isMuteAtPlayStart = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(PresentationState.prototype, "started", {
	        get: function () { return this.model.started; },
	        set: function (value) { this.model.started = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(PresentationState.prototype, "userHasUnmuted", {
	        get: function () { return this.model.userHasUnmuted; },
	        set: function (value) { this.model.userHasUnmuted = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(PresentationState.prototype, "volume", {
	        get: function () { return this.model.volume; },
	        set: function (value) { this.model.volume = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(PresentationState.prototype, "usesSsai", {
	        get: function () { return this.model.usesSsai; },
	        set: function (value) { this.model.usesSsai = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(PresentationState.prototype, "streamId", {
	        get: function () { return this.model.streamId; },
	        set: function (value) { this.model.streamId = value; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(PresentationState.prototype, "suspended", {
	        get: function () { return this.model.suspended; },
	        set: function (value) { this.model.suspended = value; },
	        enumerable: false,
	        configurable: true
	    });
	    return PresentationState;
	}());
	exports.PresentationState = PresentationState;

	});

	var ModelCollection_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ModelCollection = void 0;








	var ModelCollection = (function () {
	    function ModelCollection() {
	        this.mdlCollection = {};
	        this.createModels();
	    }
	    ModelCollection.prototype.destroy = function () {
	        for (var q in this.mdlCollection) {
	            delete this.mdlCollection[q];
	        }
	        this.mdlCollection = null;
	    };
	    ModelCollection.prototype.getModel = function (name) {
	        return (this.mdlCollection[name]);
	    };
	    ModelCollection.prototype.getSnapshot = function () {
	        var out = {};
	        for (var q in this.mdlCollection) {
	            if (q == 'PlayerDom' || q == 'PlayerOptions' || q == 'BuildInfo')
	                continue;
	            out[q] = this.mdlCollection[q].data;
	        }
	        return out;
	    };
	    Object.defineProperty(ModelCollection.prototype, "AdBreakInfo", {
	        get: function () { return this.mdlCollection.AdBreakInfo; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(ModelCollection.prototype, "AdItem", {
	        get: function () { return this.mdlCollection.AdItem; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(ModelCollection.prototype, "BuildInfo", {
	        get: function () { return this.mdlCollection.BuildInfo; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(ModelCollection.prototype, "ContentPlaybackState", {
	        get: function () { return this.mdlCollection.ContentPlaybackState; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(ModelCollection.prototype, "PlayerDom", {
	        get: function () { return this.mdlCollection.PlayerDom; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(ModelCollection.prototype, "PlayerOptions", {
	        get: function () { return this.mdlCollection.PlayerOptions; },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(ModelCollection.prototype, "PresentationState", {
	        get: function () { return this.mdlCollection.PresentationState; },
	        enumerable: false,
	        configurable: true
	    });
	    ModelCollection.prototype.createModels = function () {
	        var models = [
	            AdBreakInfo_1.AdBreakInfo,
	            AdItem_1.AdItem,
	            BuildInfo_1.BuildInfo,
	            ContentPlaybackState_1.ContentPlaybackState,
	            PlayerDom_1$1.PlayerDom,
	            PlayerOptions_1.PlayerOptions,
	            PresentationState_1.PresentationState,
	        ], i = models.length;
	        while (i--) {
	            var c = models[i], n = c.modelName, cfg$1 = cfg.config[this.classToCfgName(n)];
	            this.mdlCollection[n] = new c(cfg$1);
	        }
	    };
	    ModelCollection.prototype.classToCfgName = function (str) {
	        return (str.replace(/(?:^|\.?)([A-Z])/g, function (x, y) {
	            return '_' + y.toLowerCase();
	        }).replace(/^_/, '')) + '_config';
	    };
	    return ModelCollection;
	}());
	exports.ModelCollection = ModelCollection;

	});

	var PrepModelCommand_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.PrepModelCommand = void 0;














	var PrepModelCommand = (function (_super) {
	    tslib_es6.__extends(PrepModelCommand, _super);
	    function PrepModelCommand() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    PrepModelCommand.prototype.execute = function (notification) {
	        var sys = this.facade.retrieveService(ServiceName_1.ServiceName.System), mdlColl = new ModelCollection_1.ModelCollection(), mdlCollProxy = new ModelCollectionProxy_1.ModelCollectionProxy(ProxyName_1.ProxyName.ModelCollectionProxy, mdlColl), playerOptions = notification.body.playerOptions;
	        this.facade.registerProxy(mdlCollProxy);
	        this.setPlayerOptions(mdlCollProxy, playerOptions);
	        this.setBuildInfo(mdlCollProxy);
	        this.facade.registerProxy(new PerformanceProxy_1.PerformanceProxy(ProxyName_1.ProxyName.PerformanceProxy));
	        var loc = new LocalizationProxy_1.LocalizationProxy(ProxyName_1.ProxyName.LocalizationProxy, playerOptions.language);
	        this.facade.registerProxy(loc);
	        this.facade.registerProxy(new TextTrackProxy_1.TextTrackProxy(ProxyName_1.ProxyName.TextTrackProxy, { native: playerOptions.renderTextTrackNatively, language: loc.language }));
	        !sys.isWebMaf && this.createDomProxy(mdlCollProxy);
	        this.facade.registerProxy(new PlaylistProxy_1.PlaylistProxy(ProxyName_1.ProxyName.Playlist));
	        this.log(LogLevel_1.LogLevel.DEBUG, 'Model prepared');
	    };
	    PrepModelCommand.prototype.setPlayerOptions = function (proxy, opts) {
	        var pOptsMdl = proxy.getModel(ModelName_1.ModelName.PlayerOptions);
	        for (var q in opts) {
	            !Util_1.Util.isUndefined(pOptsMdl[q]) && (pOptsMdl[q] = opts[q]);
	        }
	    };
	    PrepModelCommand.prototype.setBuildInfo = function (proxy) {
	        var fac = this.facade, buildInfoMdl = proxy.getModel(ModelName_1.ModelName.BuildInfo), buildInfoService = fac.retrieveService(ServiceName_1.ServiceName.BuildInfo), serviceInfo = buildInfoService;
	        for (var q in serviceInfo) {
	            buildInfoMdl[q] = serviceInfo[q];
	        }
	    };
	    PrepModelCommand.prototype.createDomProxy = function (proxy) {
	        var mdl = proxy.getModel(ModelName_1.ModelName.PlayerDom), domCollProxy = new PlayerDomProxy_1.PlayerDomProxy(ProxyName_1.ProxyName.PlayerDomProxy, mdl);
	        this.facade.registerProxy(domCollProxy);
	    };
	    return PrepModelCommand;
	}(LogAwareSimpleCommand_1.LogAwareSimpleCommand));
	exports.PrepModelCommand = PrepModelCommand;

	});

	var KeyboardScope_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.KeyboardScope = void 0;
	var KeyboardScope;
	(function (KeyboardScope) {
	    KeyboardScope["NONE"] = "none";
	    KeyboardScope["DOCUMENT"] = "document";
	    KeyboardScope["PLAYER"] = "player";
	})(KeyboardScope = exports.KeyboardScope || (exports.KeyboardScope = {}));

	});

	var AbstractKeyCommandMediator_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.AbstractKeyCommandMediator = void 0;




	var AbstractKeyCommandMediator = (function (_super) {
	    tslib_es6.__extends(AbstractKeyCommandMediator, _super);
	    function AbstractKeyCommandMediator(name) {
	        var _this = _super.call(this, name) || this;
	        _this.defs = [];
	        _this.pScope = null;
	        _this.keyUpHandler = null;
	        _this.keyDownHandler = null;
	        _this.pDisabled = false;
	        _this.suppressed = false;
	        _this.scopeActive = null;
	        return _this;
	    }
	    AbstractKeyCommandMediator.prototype.onRemove = function () {
	        this.activateScope(false);
	        this.pScope = null;
	        var mt = function (e) { };
	        this.keyUpHandler = mt;
	        this.keyDownHandler = mt;
	    };
	    Object.defineProperty(AbstractKeyCommandMediator.prototype, "disabled", {
	        get: function () {
	            return this.suppressed || this.pDisabled;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(AbstractKeyCommandMediator.prototype, "scope", {
	        set: function (scp) {
	            if (this.suppressed) {
	                return;
	            }
	            if (this.pScope && this.scopeActive) {
	                this.activateScope(false);
	            }
	            this.pScope = scp;
	            var active = !!this.scopeActive || this.scopeActive === null;
	            active && this.activateScope(true);
	        },
	        enumerable: false,
	        configurable: true
	    });
	    AbstractKeyCommandMediator.prototype.registerCommandDef = function (cmdDef) {
	        if (this.suppressed) {
	            return;
	        }
	        this.defs.push(cmdDef);
	    };
	    AbstractKeyCommandMediator.prototype.disable = function () {
	        if (this.suppressed) {
	            return;
	        }
	        this.scopeActive && this.activateScope(false);
	        this.pDisabled = true;
	    };
	    AbstractKeyCommandMediator.prototype.enable = function () {
	        if (this.suppressed) {
	            return;
	        }
	        !this.scopeActive && this.activateScope(true);
	        this.pDisabled = false;
	    };
	    AbstractKeyCommandMediator.prototype.validatePrimaryKey = function (def, e) {
	        var k = e.key, kl = Util_1.Util.isString(k) && k.toLowerCase(), kc = e.keyCode;
	        if (!k && !kc) {
	            return false;
	        }
	        var hasKey = def.primaryKey === k || def.primaryKey === kl || def.keyCode === kc;
	        return hasKey;
	    };
	    AbstractKeyCommandMediator.prototype.getCommand = function (e, checkModifiers) {
	        if (checkModifiers === void 0) { checkModifiers = true; }
	        var i = this.defs.length, def = null, mods, d;
	        while (i--) {
	            d = this.defs[i];
	            if (this.validatePrimaryKey(d, e)) {
	                mods = !checkModifiers || this.hasRequiredModifiers(d, e);
	                if (mods) {
	                    def = d;
	                    break;
	                }
	            }
	        }
	        return def;
	    };
	    AbstractKeyCommandMediator.prototype.hasRequiredModifiers = function (def, event) {
	        var c1 = !!((def.requireCtrl ? 1 : 0) ^ (event.ctrlKey ? 1 : 0)), c2 = !!((def.requireShift ? 1 : 0) ^ (event.shiftKey ? 1 : 0)), c3 = !!((def.requireMeta ? 1 : 0) ^ (event.metaKey ? 1 : 0));
	        return !c1 && !c2 && !c3;
	    };
	    AbstractKeyCommandMediator.prototype.activateScope = function (flag) {
	        if (!this.pScope || this.suppressed) {
	            return;
	        }
	        var m = flag ? 'addEventListener' : 'removeEventListener';
	        this.pScope[m]("keyup", this.keyUpHandler);
	        this.pScope[m]("keydown", this.keyDownHandler);
	        this.scopeActive = flag;
	    };
	    AbstractKeyCommandMediator.prototype.handleNotification = function (notification) {
	    };
	    AbstractKeyCommandMediator.prototype.onRegister = function () {
	        var _this = this;
	        _super.prototype.onRegister.call(this);
	        var sys = this.facade.retrieveService(ServiceName_1.ServiceName.System);
	        if (!sys.document || sys.isTv || sys.isWebMaf) {
	            this.suppressed = true;
	            return;
	        }
	        this.keyDownHandler = function (e) { return _this.hKeyDown(e); };
	        this.keyUpHandler = function (e) { return _this.hKeyUp(e); };
	    };
	    return AbstractKeyCommandMediator;
	}(LogAwareMediator_1.LogAwareMediator));
	exports.AbstractKeyCommandMediator = AbstractKeyCommandMediator;

	});

	var AccessibilityKeyCommandMediator_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.AccessibilityKeyCommandMediator = void 0;










	var AccessibilityKeyCommandMediator = (function (_super) {
	    tslib_es6.__extends(AccessibilityKeyCommandMediator, _super);
	    function AccessibilityKeyCommandMediator(name) {
	        var _this = _super.call(this, name) || this;
	        _this.uim = null;
	        _this.vpi = null;
	        _this.seekMoving = false;
	        _this.seekEnabled = false;
	        _this.VOLUME_INCREMENT = 0.05;
	        _this.SEEK_FACTOR_DISCRETE = 0.05;
	        _this.SEEK_INCREMENT_CONTINUOUS = 0.001;
	        _this.tZero = 0;
	        return _this;
	    }
	    AccessibilityKeyCommandMediator.prototype.onRemove = function () {
	        this.vpi = null;
	        this.uim = null;
	        _super.prototype.onRemove.call(this);
	    };
	    AccessibilityKeyCommandMediator.prototype.isControl = function (element) {
	        return element.nodeName == 'BUTTON' || element.nodeName == 'INPUT';
	    };
	    AccessibilityKeyCommandMediator.prototype.hKeyUp = function (e) {
	        if (this.disabled || this.isControl(document.activeElement)) {
	            return;
	        }
	        if (!this.seekMoving) {
	            this.processKeyEvent(e);
	        }
	        else {
	            this.disengageSeek();
	        }
	    };
	    AccessibilityKeyCommandMediator.prototype.hKeyDown = function (e) {
	        var k = e.key, kc = e.keyCode, up = k === NonPrintingKey_1.NonPrintingKey.ARROW_UP || kc === KeyCode.KeyCode.UP_ARROW, down = k === NonPrintingKey_1.NonPrintingKey.ARROW_DOWN || kc === KeyCode.KeyCode.DOWN_ARROW, space = k === NonPrintingKey_1.NonPrintingKey.SPACE || kc === KeyCode.KeyCode.SPACE, back = k === NonPrintingKey_1.NonPrintingKey.ARROW_LEFT || kc === KeyCode.KeyCode.LEFT_ARROW, fwd = k === NonPrintingKey_1.NonPrintingKey.ARROW_RIGHT || kc === KeyCode.KeyCode.RIGHT_ARROW, rep = e.repeat;
	        if ((fwd || back || up || down || space) && !this.isControl(document.activeElement)) {
	            e.preventDefault();
	            return;
	        }
	        if (!this.shouldSeekContinuous()) {
	            return;
	        }
	        if (!back && !fwd) {
	            return;
	        }
	        if (!this.seekMoving && rep) {
	            this.tZero = Date.now();
	            this.engageSeek();
	        }
	        else if (this.seekMoving && rep) {
	            var d = (Date.now() - this.tZero) * .001, n = d >= 5 ? 3 : (d >= 3 ? 2 : 1), mul = back ? -1 : 1;
	            this.moveSeekBy(mul * this.SEEK_INCREMENT_CONTINUOUS * n);
	        }
	        this.stopEvent(e);
	    };
	    AccessibilityKeyCommandMediator.prototype.engageSeek = function () {
	        this.uim && this.uim.engageSeek();
	        this.seekMoving = true;
	    };
	    AccessibilityKeyCommandMediator.prototype.disengageSeek = function () {
	        var _this = this;
	        this.uim && this.uim.disengageSeek();
	        this.seekMoving = false;
	        this.tZero = null;
	        setTimeout(function () {
	            _this.uim && _this.uim.forceControlsVisible(false);
	        }, 500);
	    };
	    AccessibilityKeyCommandMediator.prototype.moveSeekBy = function (inc) {
	        this.uim && this.uim.moveSeekBy(inc);
	    };
	    AccessibilityKeyCommandMediator.prototype.shouldSeekContinuous = function () {
	        var viewOk = this.uim && this.uim.uiIsStandardView();
	        return viewOk && !this.disabled && this.seekEnabled;
	    };
	    Object.defineProperty(AccessibilityKeyCommandMediator.prototype, "player", {
	        get: function () {
	            if (!this.vpi) {
	                var appMed = this.facade.retrieveMediator(MediatorName_1.MediatorName.APPLICATION);
	                this.vpi = appMed.getAppApi();
	            }
	            return this.vpi;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    AccessibilityKeyCommandMediator.prototype.stopEvent = function (e) {
	        e.stopImmediatePropagation();
	        e.preventDefault();
	    };
	    AccessibilityKeyCommandMediator.prototype.processKeyEvent = function (e) {
	        if (e.ctrlKey
	            || e.shiftKey
	            || e.metaKey
	            || e.key === NonPrintingKey_1.NonPrintingKey.META
	            || e.key === NonPrintingKey_1.NonPrintingKey.SHIFT
	            || e.key === NonPrintingKey_1.NonPrintingKey.CONTROL) {
	            return null;
	        }
	        var cmdDef = this.getCommand(e, false);
	        if (!cmdDef) {
	            return;
	        }
	        this.doAction(cmdDef);
	        this.stopEvent(e);
	    };
	    AccessibilityKeyCommandMediator.prototype.doAction = function (cmdDef) {
	        var a = cmdDef.action;
	        var cv, v, mul;
	        switch (a) {
	            case AccessibilityAction_1.AccessibilityAction.INCREASE_VOLUME:
	            case AccessibilityAction_1.AccessibilityAction.DECREASE_VOLUME:
	                mul = a === AccessibilityAction_1.AccessibilityAction.DECREASE_VOLUME ? -1 : 1;
	                cv = this.player.volume,
	                    v = Util_1.Util.clampValue(cv + (this.VOLUME_INCREMENT * mul), 0, 1);
	                this.player.volume = v;
	                this.uim && this.uim.setAccVolumeLevelIndicator(v);
	                break;
	            case AccessibilityAction_1.AccessibilityAction.SEEK_BACK:
	            case AccessibilityAction_1.AccessibilityAction.SEEK_FORWARD:
	                if (!this.seekEnabled) {
	                    return;
	                }
	                var d = this.player.contentDuration;
	                mul = a === AccessibilityAction_1.AccessibilityAction.SEEK_BACK ? -1 : 1;
	                cv = this.player.contentTime;
	                if (!d || isNaN(d) || (mul === 1 && this.player.streamType === StreamType_1.StreamType.DVR && this.player.isPlayingLive)) {
	                    return;
	                }
	                v = Util_1.Util.clampValue(cv + (this.SEEK_FACTOR_DISCRETE * mul * d), 0, d);
	                this.setSeekNotice(v, mul);
	                this.player.seek(v);
	                break;
	            case AccessibilityAction_1.AccessibilityAction.ENTER_FULLSCREEN:
	                this.player.enterFullscreen();
	                break;
	            case AccessibilityAction_1.AccessibilityAction.TOGGLE_PLAY:
	                if (this.player.streamType !== StreamType_1.StreamType.LIVE) {
	                    this.player.togglePlayPause();
	                }
	                break;
	            case AccessibilityAction_1.AccessibilityAction.TOGGLE_MUTE:
	                this.player.muted = !this.player.muted;
	                break;
	            case AccessibilityAction_1.AccessibilityAction.TOGGLE_TT:
	                this.player.textTrackEnabled = !this.player.textTrackEnabled;
	                break;
	            case AccessibilityAction_1.AccessibilityAction.PLAYLIST_NEXT:
	            case AccessibilityAction_1.AccessibilityAction.PLAYLIST_PREV:
	                mul = a == AccessibilityAction_1.AccessibilityAction.PLAYLIST_PREV ? -1 : 1;
	                if (this.player.playList.length > 1) {
	                    mul < 0 ? this.player.playList.prev() : this.player.playlist.next();
	                }
	                break;
	            case AccessibilityAction_1.AccessibilityAction.STOP:
	                if (this.player.streamType === StreamType_1.StreamType.LIVE) {
	                    this.player.stop();
	                }
	                else {
	                    this.player.pause();
	                }
	                break;
	        }
	    };
	    AccessibilityKeyCommandMediator.prototype.setSeekNotice = function (v, dir) {
	        if (!this.uim) {
	            return;
	        }
	        var t = Util_1.Util.secToHms(v), d = Util_1.Util.secToHms(this.player.contentDuration), msg = dir > 0 ? "&gt;&nbsp;&nbsp;" + t + "&nbsp;/&nbsp;" + d : t + "&nbsp;/&nbsp;" + d + "&nbsp;&nbsp;&lt;";
	        this.uim.setSeekNotice(msg, dir);
	    };
	    AccessibilityKeyCommandMediator.prototype.handleNotification = function (notification) {
	        var n = notification.name, nn = NotificationName_1.NotificationName;
	        switch (n) {
	            case nn.AD_BREAK_START:
	                this.seekEnabled = false;
	                break;
	            case nn.CONTENT_COMPLETE:
	                this.seekEnabled = false;
	                this.disable();
	                break;
	            case nn.CONTENT_START:
	            case nn.CONTENT_SEGMENT_START:
	                this.enable();
	                this.seekEnabled = this.player.streamType !== StreamType_1.StreamType.LIVE;
	                break;
	        }
	    };
	    AccessibilityKeyCommandMediator.prototype.listNotificationInterests = function () {
	        var n = NotificationName_1.NotificationName;
	        return [
	            n.AD_BREAK_START,
	            n.CONTENT_START,
	            n.CONTENT_SEGMENT_START,
	            n.CONTENT_COMPLETE,
	        ];
	    };
	    AccessibilityKeyCommandMediator.prototype.onRegister = function () {
	        _super.prototype.onRegister.call(this);
	        var acd = AppResources_1.AppResources.accessibilityKeyCmdDefs;
	        var i = acd.length;
	        while (i--) {
	            this.registerCommandDef(acd[i]);
	        }
	        var m = this.facade.retrieveMediator(MediatorName_1.MediatorName.UI);
	        if (m) {
	            this.uim = m;
	        }
	    };
	    return AccessibilityKeyCommandMediator;
	}(AbstractKeyCommandMediator_1.AbstractKeyCommandMediator));
	exports.AccessibilityKeyCommandMediator = AccessibilityKeyCommandMediator;

	});

	var screenfull = createCommonjsModule(function (module) {
	/*!
	* screenfull
	* v5.0.2 - 2020-02-13
	* (c) Sindre Sorhus; MIT License
	*/
	(function () {

		var document = typeof window !== 'undefined' && typeof window.document !== 'undefined' ? window.document : {};
		var isCommonjs =  module.exports;

		var fn = (function () {
			var val;

			var fnMap = [
				[
					'requestFullscreen',
					'exitFullscreen',
					'fullscreenElement',
					'fullscreenEnabled',
					'fullscreenchange',
					'fullscreenerror'
				],
				// New WebKit
				[
					'webkitRequestFullscreen',
					'webkitExitFullscreen',
					'webkitFullscreenElement',
					'webkitFullscreenEnabled',
					'webkitfullscreenchange',
					'webkitfullscreenerror'

				],
				// Old WebKit
				[
					'webkitRequestFullScreen',
					'webkitCancelFullScreen',
					'webkitCurrentFullScreenElement',
					'webkitCancelFullScreen',
					'webkitfullscreenchange',
					'webkitfullscreenerror'

				],
				[
					'mozRequestFullScreen',
					'mozCancelFullScreen',
					'mozFullScreenElement',
					'mozFullScreenEnabled',
					'mozfullscreenchange',
					'mozfullscreenerror'
				],
				[
					'msRequestFullscreen',
					'msExitFullscreen',
					'msFullscreenElement',
					'msFullscreenEnabled',
					'MSFullscreenChange',
					'MSFullscreenError'
				]
			];

			var i = 0;
			var l = fnMap.length;
			var ret = {};

			for (; i < l; i++) {
				val = fnMap[i];
				if (val && val[1] in document) {
					for (i = 0; i < val.length; i++) {
						ret[fnMap[0][i]] = val[i];
					}
					return ret;
				}
			}

			return false;
		})();

		var eventNameMap = {
			change: fn.fullscreenchange,
			error: fn.fullscreenerror
		};

		var screenfull = {
			request: function (element) {
				return new Promise(function (resolve, reject) {
					var onFullScreenEntered = function () {
						this.off('change', onFullScreenEntered);
						resolve();
					}.bind(this);

					this.on('change', onFullScreenEntered);

					element = element || document.documentElement;

					var returnPromise = element[fn.requestFullscreen]();

					if (returnPromise instanceof Promise) {
						returnPromise.then(onFullScreenEntered).catch(reject);
					}
				}.bind(this));
			},
			exit: function () {
				return new Promise(function (resolve, reject) {
					if (!this.isFullscreen) {
						resolve();
						return;
					}

					var onFullScreenExit = function () {
						this.off('change', onFullScreenExit);
						resolve();
					}.bind(this);

					this.on('change', onFullScreenExit);

					var returnPromise = document[fn.exitFullscreen]();

					if (returnPromise instanceof Promise) {
						returnPromise.then(onFullScreenExit).catch(reject);
					}
				}.bind(this));
			},
			toggle: function (element) {
				return this.isFullscreen ? this.exit() : this.request(element);
			},
			onchange: function (callback) {
				this.on('change', callback);
			},
			onerror: function (callback) {
				this.on('error', callback);
			},
			on: function (event, callback) {
				var eventName = eventNameMap[event];
				if (eventName) {
					document.addEventListener(eventName, callback, false);
				}
			},
			off: function (event, callback) {
				var eventName = eventNameMap[event];
				if (eventName) {
					document.removeEventListener(eventName, callback, false);
				}
			},
			raw: fn
		};

		if (!fn) {
			if (isCommonjs) {
				module.exports = {isEnabled: false};
			} else {
				window.screenfull = {isEnabled: false};
			}

			return;
		}

		Object.defineProperties(screenfull, {
			isFullscreen: {
				get: function () {
					return Boolean(document[fn.fullscreenElement]);
				}
			},
			element: {
				enumerable: true,
				get: function () {
					return document[fn.fullscreenElement];
				}
			},
			isEnabled: {
				enumerable: true,
				get: function () {
					// Coerce to boolean in case of old WebKit
					return Boolean(document[fn.fullscreenEnabled]);
				}
			}
		});

		if (isCommonjs) {
			module.exports = screenfull;
		} else {
			window.screenfull = screenfull;
		}
	})();
	});

	var FullscreenMediator_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.FullscreenMediator = void 0;

	var screenfull_1 = tslib_es6.__importDefault(screenfull);






	var FullscreenMediator = (function (_super) {
	    tslib_es6.__extends(FullscreenMediator, _super);
	    function FullscreenMediator(name, viewControl) {
	        var _this = _super.call(this, name, viewControl) || this;
	        _this.isFullscreen = false;
	        _this.fsElement = null;
	        _this.enabled = false;
	        _this.pIsAndroidFirefox = null;
	        _this.isIos = false;
	        _this.fsMgr = null;
	        _this.iosPropNames = {
	            ENTER_EVENT: 'webkitbeginfullscreen',
	            EXIT_EVENT: 'webkitendfullscreen',
	            ENTER_METHOD: 'webkitEnterFullscreen',
	            EXIT_METHOD: 'webkitExitFullscreen',
	            SUPPORTED: 'webkitSupportsFullscreen',
	        };
	        _this.fsMgr = screenfull_1.default;
	        _this.changeHandler = function (e) { return _this.hChange(e); };
	        return _this;
	    }
	    Object.defineProperty(FullscreenMediator.prototype, "fullscreenElement", {
	        get: function () {
	            return this.fsElement;
	        },
	        set: function (el) {
	            if (!(el instanceof HTMLElement)) {
	                return;
	            }
	            if (!this.systemService.isIos && !this.systemService.isAndroid) {
	                this.fsElement = el;
	            }
	        },
	        enumerable: false,
	        configurable: true
	    });
	    FullscreenMediator.prototype.onRemove = function () {
	        if (this.isIos && this.fsElement) {
	            this.fsElement.removeEventListener(this.iosPropNames.ENTER_EVENT, this.changeHandler);
	            this.fsElement.removeEventListener(this.iosPropNames.EXIT_EVENT, this.changeHandler);
	        }
	        this.fsMgr && this.fsMgr.off('change', this.changeHandler);
	        this.fsElement = null;
	        this.fsMgr = null;
	        _super.prototype.onRemove.call(this);
	    };
	    FullscreenMediator.prototype.enter = function () {
	        if (!this.enabled) {
	            return;
	        }
	        this.isIos ? this.enterFsIos() : this.fsMgr.request(this.fsElement);
	    };
	    FullscreenMediator.prototype.exit = function () {
	        if (!this.enabled) {
	            return;
	        }
	        this.isIos ? this.exitFsIos() : this.fsMgr.exit();
	    };
	    FullscreenMediator.prototype.isFullScreenPermitted = function () {
	        return this.enabled;
	    };
	    FullscreenMediator.prototype.isFullScreen = function () {
	        return this.isFullscreen;
	    };
	    Object.defineProperty(FullscreenMediator.prototype, "isAndroidFirefox", {
	        get: function () {
	            if (this.pIsAndroidFirefox === null) {
	                var sysSvc = this.systemService;
	                this.pIsAndroidFirefox = sysSvc.os === Os_1.Os.ANDROID && sysSvc.browser === Browser_1.Browser.FIREFOX;
	            }
	            return this.pIsAndroidFirefox;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    FullscreenMediator.prototype.handleNotification = function (notification) {
	        var n = notification.name;
	        if (n === NotificationName_1.NotificationName.VIDEO_LOADED_METADATA) {
	            this.handleMetadataLoaded();
	            return;
	        }
	        if (!this.enabled) {
	            return;
	        }
	        var enter = n === NotificationName_1.NotificationName.ENTER_FULLSCREEN_REQUEST;
	        enter ? this.enter() : this.exit();
	    };
	    FullscreenMediator.prototype.listNotificationInterests = function () {
	        return [
	            NotificationName_1.NotificationName.VIDEO_LOADED_METADATA,
	            NotificationName_1.NotificationName.ENTER_FULLSCREEN_REQUEST,
	            NotificationName_1.NotificationName.EXIT_FULLSCREEN_REQUEST
	        ];
	    };
	    FullscreenMediator.prototype.handleMetadataLoaded = function () {
	        this.enabled = this.enabled || this.webkitIosEnabled();
	        this.enabled && this.sendNotification(NotificationName_1.NotificationName.FULLSCREEN_AVAILABLE, null);
	    };
	    FullscreenMediator.prototype.hChange = function (e) {
	        this.isFullscreen = this.isIos ? this.checkWebkitIsoState(e) : screenfull_1.default.isFullscreen;
	        if (this.isAndroidFirefox) {
	            this.isFullscreen && this.fsElement.setAttribute('controls', '');
	            !this.isFullscreen && this.fsElement.removeAttribute('controls');
	        }
	        this.sendNotification(NotificationName_1.NotificationName.FULLSCREEN_CHANGE, { isFullscreen: this.isFullscreen }, NotificationType_1.NotificationType.INTERNAL);
	    };
	    FullscreenMediator.prototype.enterFsIos = function () {
	        this.fsElement[this.iosPropNames.ENTER_METHOD]();
	    };
	    FullscreenMediator.prototype.exitFsIos = function () {
	        this.fsElement[this.iosPropNames.EXIT_METHOD]();
	    };
	    FullscreenMediator.prototype.webkitIosEnabled = function () {
	        return this.systemService.isIos && this.fsElement[this.iosPropNames.SUPPORTED];
	    };
	    FullscreenMediator.prototype.checkWebkitIsoState = function (e) {
	        return e.type === this.iosPropNames.ENTER_EVENT;
	    };
	    FullscreenMediator.prototype.onRegister = function () {
	        var sys = this.systemService, dp = this.facade.retrieveProxy(ProxyName_1.ProxyName.PlayerDomProxy);
	        if (sys.isIos || sys.isAndroid) {
	            this.isIos = sys.isIos;
	            this.fsElement = dp.getVideo();
	        }
	        else {
	            this.fsElement = dp.getMain();
	        }
	        if (!this.isIos && this.fsElement && this.fsMgr.isEnabled) {
	            this.enabled = true;
	            this.fsMgr.on('change', this.changeHandler);
	        }
	        else if (this.fsElement && this.isIos) {
	            this.fsElement.addEventListener(this.iosPropNames.ENTER_EVENT, this.changeHandler);
	            this.fsElement.addEventListener(this.iosPropNames.EXIT_EVENT, this.changeHandler);
	        }
	    };
	    return FullscreenMediator;
	}(LogAwareMediator_1.LogAwareMediator));
	exports.FullscreenMediator = FullscreenMediator;

	});

	var VideoMode_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.VideoMode = void 0;
	var VideoMode;
	(function (VideoMode) {
	    VideoMode[VideoMode["AD"] = 0] = "AD";
	    VideoMode[VideoMode["CONTENT"] = 1] = "CONTENT";
	    VideoMode[VideoMode["IDLE"] = 2] = "IDLE";
	})(VideoMode = exports.VideoMode || (exports.VideoMode = {}));

	});

	var UiMediator_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.UiMediator = void 0;











	var UiMediator = (function (_super) {
	    tslib_es6.__extends(UiMediator, _super);
	    function UiMediator(name, viewControl) {
	        var _this = _super.call(this, name, viewControl) || this;
	        _this.seekRedirectPending = false;
	        _this.ccEnabled = false;
	        _this.ccAvail = false;
	        _this.fullScreenAccessRestricted = false;
	        _this.increment = 10;
	        _this.isPlayingLive = false;
	        _this.controlsVisible = false;
	        return _this;
	    }
	    UiMediator.prototype.onRegister = function () {
	        var _this = this;
	        var service = this.facade.retrieveProxy(ProxyName_1.ProxyName.LocalizationProxy);
	        this.ui.setLocalizationService(service);
	        var getThumbnail = function (time) {
	            var cps = _this.facade.retrieveProxy(ProxyName_1.ProxyName.ContentPlaybackStateProxy);
	            return cps.getThumbnail(time);
	        };
	        this.ui.setThumbnailService({ getThumbnail: getThumbnail });
	    };
	    UiMediator.prototype.onRemove = function () {
	        this.viewControl && this.viewControl.destroy();
	        this.viewControl = null;
	        this.enums = null;
	        this.fsm = null;
	        _super.prototype.onRemove.call(this);
	    };
	    Object.defineProperty(UiMediator.prototype, "viewController", {
	        get: function () {
	            return this.ui;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(UiMediator.prototype, "controlNames", {
	        get: function () {
	            return this.enums.ControlName;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    UiMediator.prototype.uiIsStandardView = function () {
	        return this.ui.isStandardView();
	    };
	    UiMediator.prototype.setSeekNotice = function (str, dir) {
	        this.ui.setSeekNotice(str, dir);
	    };
	    UiMediator.prototype.setFullScreenAccessRestricted = function (flag) {
	        this.fullScreenAccessRestricted = flag;
	    };
	    UiMediator.prototype.killUi = function () {
	        this.viewControl && this.viewControl.destroy();
	        this.viewControl = null;
	    };
	    UiMediator.prototype.initialize = function (enumCollection) {
	        this.enums = enumCollection;
	        this.init();
	    };
	    UiMediator.prototype.enableControl = function (name) {
	        this.ui.enableControl(name);
	    };
	    UiMediator.prototype.disableControl = function (name) {
	        this.ui.disableControl(name);
	    };
	    UiMediator.prototype.enableFullscreen = function () {
	        if (!this.fullScreenAccessRestricted && this.isFullScreenAvailable()) {
	            this.enableControl(this.controlNames.FULLSCREEN_TOGGLE);
	        }
	    };
	    UiMediator.prototype.disableFullscreen = function () {
	        this.disableControl(this.controlNames.FULLSCREEN_TOGGLE);
	    };
	    UiMediator.prototype.setMuteState = function (flag) {
	        this.ui.setMuteState(flag);
	    };
	    UiMediator.prototype.forceControlsVisible = function (flag) {
	        this.ui.forceControlsVisible(flag);
	    };
	    UiMediator.prototype.setSeekable = function (flag) {
	        this.ui.setSeekable(flag);
	    };
	    UiMediator.prototype.engageSeek = function () {
	        this.ui.forceControlsVisible(true);
	        this.ui.beginSeekMove();
	    };
	    UiMediator.prototype.disengageSeek = function () {
	        var _this = this;
	        this.ui.endSeekMove();
	        setTimeout(function () { return _this.ui.forceControlsVisible(false); }, 500);
	    };
	    UiMediator.prototype.moveSeekBy = function (inc) {
	        this.ui.moveSeekBy(inc);
	    };
	    UiMediator.prototype.setVolume = function (value) {
	        if (!isNaN(value) && value >= 0 && value <= 1) {
	            this.ui.setVolume(value);
	        }
	    };
	    UiMediator.prototype.setTransportType = function (type) {
	        var num = (type == StreamType_1.StreamType.LIVE) ? 1 : (type == StreamType_1.StreamType.DVR) ? 2 : 0;
	        this.ui.setTransportType(num);
	    };
	    UiMediator.prototype.setIsPlayingLive = function (isLive) {
	        this.isPlayingLive = isLive;
	        this.ui.setIsPlayingLive(isLive);
	    };
	    UiMediator.prototype.setClosedCaptionState = function (state) {
	        this.ui.setClosedCaptionState(state);
	    };
	    UiMediator.prototype.updateProgress = function (pdi) {
	        var playheadTime = pdi.playheadTime, duration = pdi.duration;
	        this.ui.updateProgress({
	            currentTime: playheadTime,
	            duration: duration
	        });
	        var cn = this.controlNames;
	        if (this.isPlayingLive || playheadTime + this.increment >= duration) {
	            this.ui.disableControl(cn.SEEK_FORWARD_BUTTON);
	        }
	        else {
	            this.ui.enableControl(cn.SEEK_FORWARD_BUTTON);
	        }
	        if (playheadTime <= this.increment) {
	            this.ui.disableControl(cn.SEEK_BACK_BUTTON);
	        }
	        else {
	            this.ui.enableControl(cn.SEEK_BACK_BUTTON);
	        }
	    };
	    UiMediator.prototype.setClickCatcherState = function (state) {
	        var s = state === PlaybackState_1.PlaybackState.PLAYING ? this.enums.PlayState.PLAYING : this.enums.PlayState.PAUSED;
	        this.ui.setClickCatcherState(s);
	    };
	    UiMediator.prototype.hideClickCatcher = function (flag) {
	        this.ui.hideClickCatcher(flag);
	    };
	    UiMediator.prototype.displayPoster = function (flag) {
	        this.ui.showDecorator(this.enums.DecoratorName.POSTER, flag);
	    };
	    UiMediator.prototype.activatePoster = function () {
	        this.ui.activatePoster();
	    };
	    UiMediator.prototype.showUnmutePrompt = function () {
	        this.ui.showDecorator(this.enums.DecoratorName.UNMUTE_PROMPT, true);
	    };
	    UiMediator.prototype.displaySpinner = function (flag) {
	        this.ui.showDecorator(this.enums.DecoratorName.SPINNER, flag);
	    };
	    UiMediator.prototype.setAccVolumeLevelIndicator = function (val) {
	        this.ui.setAccVolumeLevelIndicator(val);
	    };
	    UiMediator.prototype.setVideoMode = function (m) {
	        this.ui.setVideoMode(m);
	    };
	    UiMediator.prototype.resetUi = function () {
	        this.hideClickCatcher(true);
	        this.displayPoster(false);
	        this.ui.setChapterMarkers([]);
	        this.ui.setVideoMode(VideoMode_1.VideoMode.IDLE);
	    };
	    UiMediator.prototype.handleNotification = function (notification) {
	        var n = notification.name, data = notification.body;
	        if (!this.ui) {
	            return;
	        }
	        switch (n) {
	            case NotificationName_1.NotificationName.ENABLE_UI:
	                this.enableFullscreen();
	                this.ui.activateControls();
	                break;
	            case NotificationName_1.NotificationName.DISABLE_UI:
	                this.ui.setVideoMode(VideoMode_1.VideoMode.IDLE);
	                this.ui.inactivateControls();
	                break;
	            case NotificationName_1.NotificationName.VIDEO_LOAD_START:
	                this.displaySpinner(true);
	                break;
	            case NotificationName_1.NotificationName.VIDEO_LOAD_COMPLETE:
	                this.displaySpinner(false);
	                break;
	            case NotificationName_1.NotificationName.CONTENT_TIME_UPDATE:
	                if (this.seekRedirectPending) {
	                    return;
	                }
	                this.ui.updateProgress({
	                    currentTime: data.contentTime,
	                    duration: data.contentDuration
	                });
	                break;
	            case NotificationName_1.NotificationName.AD_CUEPOINTS_AVAILABLE:
	                this.ui.setChapterMarkers(data.cuepoints);
	                break;
	            case NotificationName_1.NotificationName.AD_TIME_UPDATE:
	                this.ui.updateProgress({
	                    currentTime: data.currentTime,
	                    duration: data.duration
	                });
	                break;
	            case NotificationName_1.NotificationName.TEXT_TRACK_AVAILABLE:
	                this.ccAvail = true;
	                this.ui.enableControl(this.controlNames.CC_TOGGLE);
	                if (this.ccEnabled) {
	                    this.ui.setClosedCaptionState(true);
	                    this.activateCaptions(true);
	                }
	                break;
	            case NotificationName_1.NotificationName.TEXT_TRACK_DISPLAY_MODE_CHANGE:
	                this.doCaptionCheckOnControlVisChange();
	                break;
	            case NotificationName_1.NotificationName.CONTENT_SEEKING:
	                this.displaySpinner(true);
	                if (this.seekRedirectPending) {
	                    return;
	                }
	                this.ui.setSeekComplete();
	                break;
	            case NotificationName_1.NotificationName.SEEK_REDIRECT_START:
	                this.seekRedirectPending = true;
	                break;
	            case NotificationName_1.NotificationName.SEEK_REDIRECT_COMPLETE:
	                this.seekRedirectPending = false;
	                break;
	            case NotificationName_1.NotificationName.CONTENT_SEEKED:
	                this.displaySpinner(false);
	                if (this.seekRedirectPending) {
	                    return;
	                }
	                this.ui.setSeekComplete();
	                break;
	            case NotificationName_1.NotificationName.CONTENT_BUFFERING:
	                this.displaySpinner(data.value);
	                break;
	            case NotificationName_1.NotificationName.FULLSCREEN_AVAILABLE:
	                this.enableFullscreen();
	                break;
	            case NotificationName_1.NotificationName.FULLSCREEN_CHANGE:
	                this.ui.setFullscreenState(notification.body.isFullscreen);
	                break;
	            case NotificationName_1.NotificationName.PRESENTATION_SIZE_CHANGE:
	                this.ui.updateSize();
	                break;
	            case NotificationName_1.NotificationName.RESOURCE_PLAYING:
	                this.displaySpinner(false);
	                this.setPlayState(PlaybackState_1.PlaybackState.PLAYING);
	                break;
	            case NotificationName_1.NotificationName.RESOURCE_PAUSED:
	                this.setPlayState(PlaybackState_1.PlaybackState.PAUSED);
	                break;
	            case NotificationName_1.NotificationName.AD_BREAK_START:
	                this.ui.hidePanelsForAdPlay(true);
	                this.ui.setVideoMode(VideoMode_1.VideoMode.AD);
	                break;
	            case NotificationName_1.NotificationName.CONTENT_START:
	            case NotificationName_1.NotificationName.CONTENT_SEGMENT_START:
	                this.ui.setVideoMode(VideoMode_1.VideoMode.CONTENT);
	                this.ccAvail && this.ui.enableControl(this.controlNames.CC_TOGGLE);
	                break;
	            case NotificationName_1.NotificationName.AD_BREAK_COMPLETE:
	            case NotificationName_1.NotificationName.CONTENT_SEGMENT_END:
	            case NotificationName_1.NotificationName.RESOURCE_INTERRUPTED:
	            case NotificationName_1.NotificationName.CONTENT_COMPLETE:
	                this.ui.resetProgress();
	                this.ui.setVideoMode(VideoMode_1.VideoMode.IDLE);
	                if (n === NotificationName_1.NotificationName.AD_BREAK_COMPLETE) {
	                    this.ui.hidePanelsForAdPlay(false);
	                }
	                else {
	                    this.ui.disableControl(this.controlNames.CC_TOGGLE);
	                }
	                if (n == NotificationName_1.NotificationName.RESOURCE_INTERRUPTED || n === NotificationName_1.NotificationName.CONTENT_COMPLETE) {
	                    this.ccAvail = false;
	                }
	                break;
	            case NotificationName_1.NotificationName.READY:
	            case NotificationName_1.NotificationName.LANGUAGE_CHANGE:
	                this.ui.updateText();
	                break;
	        }
	    };
	    UiMediator.prototype.listNotificationInterests = function () {
	        return [
	            NotificationName_1.NotificationName.AD_CUEPOINTS_AVAILABLE,
	            NotificationName_1.NotificationName.ENABLE_UI,
	            NotificationName_1.NotificationName.DISABLE_UI,
	            NotificationName_1.NotificationName.SEEK_REDIRECT_START,
	            NotificationName_1.NotificationName.SEEK_REDIRECT_COMPLETE,
	            NotificationName_1.NotificationName.CONTENT_SEEKED,
	            NotificationName_1.NotificationName.CONTENT_BUFFERING,
	            NotificationName_1.NotificationName.FULLSCREEN_AVAILABLE,
	            NotificationName_1.NotificationName.FULLSCREEN_CHANGE,
	            NotificationName_1.NotificationName.PRESENTATION_SIZE_CHANGE,
	            NotificationName_1.NotificationName.RESOURCE_PLAYING,
	            NotificationName_1.NotificationName.RESOURCE_PAUSED,
	            NotificationName_1.NotificationName.RESOURCE_INTERRUPTED,
	            NotificationName_1.NotificationName.AD_BREAK_START,
	            NotificationName_1.NotificationName.CONTENT_START,
	            NotificationName_1.NotificationName.CONTENT_COMPLETE,
	            NotificationName_1.NotificationName.CONTENT_SEGMENT_START,
	            NotificationName_1.NotificationName.AD_BREAK_COMPLETE,
	            NotificationName_1.NotificationName.CONTENT_SEGMENT_END,
	            NotificationName_1.NotificationName.AD_TIME_UPDATE,
	            NotificationName_1.NotificationName.CONTENT_TIME_UPDATE,
	            NotificationName_1.NotificationName.TEXT_TRACK_AVAILABLE,
	            NotificationName_1.NotificationName.TEXT_TRACK_DISPLAY_MODE_CHANGE,
	            NotificationName_1.NotificationName.VIDEO_LOAD_START,
	            NotificationName_1.NotificationName.VIDEO_LOAD_COMPLETE,
	            NotificationName_1.NotificationName.LANGUAGE_CHANGE,
	            NotificationName_1.NotificationName.READY,
	        ];
	    };
	    UiMediator.prototype.setPlayState = function (s) {
	        var key = PlaybackState_1.PlaybackState[s], st = this.enums.PlayState[key];
	        st !== null && st !== undefined && this.ui.setPlayState(st);
	    };
	    Object.defineProperty(UiMediator.prototype, "ui", {
	        get: function () {
	            return this.viewControl;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    UiMediator.prototype.hVisibilityEvent = function (e) {
	        var ps = this.getModel(ModelName_1.ModelName.PresentationState);
	        if (ps.isCurrentVideoAd) {
	            return;
	        }
	        var ce = this.enums.ControlEvent;
	        var name = null;
	        switch (e.type) {
	            case ce.BEFORE_CONTROLS_VISIBLE:
	                this.updateControlsVisible(true);
	                name = NotificationName_1.NotificationName.BEFORE_CONTROLS_VISIBLE;
	                break;
	            case ce.CONTROLS_VISIBLE:
	                name = NotificationName_1.NotificationName.CONTROLS_VISIBLE;
	                break;
	            case ce.BEFORE_CONTROLS_HIDDEN:
	                name = NotificationName_1.NotificationName.BEFORE_CONTROLS_HIDDEN;
	                break;
	            case ce.CONTROLS_HIDDEN:
	                this.updateControlsVisible(false);
	                name = NotificationName_1.NotificationName.CONTROLS_HIDDEN;
	                break;
	        }
	        name && this.sendNotification(name);
	    };
	    UiMediator.prototype.hActionEvent = function (e) {
	        var action = e.data.action;
	        var note = null, body = null;
	        switch (action) {
	            case 'mute':
	                note = NotificationName_1.NotificationName.MUTE;
	                break;
	            case 'unmute':
	                note = NotificationName_1.NotificationName.UNMUTE;
	                break;
	            case 'volume':
	                note = NotificationName_1.NotificationName.VOLUME_CHANGE;
	                body = { value: e.data.value };
	                break;
	            case 'pause':
	                note = NotificationName_1.NotificationName.PAUSE;
	                break;
	            case 'stop':
	                note = NotificationName_1.NotificationName.STOP;
	                break;
	            case 'play':
	                note = NotificationName_1.NotificationName.PLAY;
	                break;
	            case 'posterClick':
	                note = NotificationName_1.NotificationName.PLAY_ON_USER_GESTURE;
	                break;
	            case 'ccEnabled':
	            case 'ccDisabled':
	                var enabled = action === 'ccEnabled';
	                this.activateCaptions(enabled);
	                break;
	            case 'seek':
	                note = NotificationName_1.NotificationName.SEEK;
	                body = { value: e.data.value };
	                break;
	            case 'seekForward':
	                note = NotificationName_1.NotificationName.SEEK_FORWARD;
	                body = { value: e.data.value || this.increment };
	                break;
	            case 'seekBack':
	                note = NotificationName_1.NotificationName.SEEK_BACK;
	                body = { value: e.data.value || this.increment };
	                break;
	            case 'enterFullscreen':
	                note = NotificationName_1.NotificationName.ENTER_FULLSCREEN_REQUEST;
	                break;
	            case 'exitFullscreen':
	                note = NotificationName_1.NotificationName.EXIT_FULLSCREEN_REQUEST;
	                break;
	            case 'goLive':
	                note = NotificationName_1.NotificationName.SEEK_TO_LIVE;
	                break;
	            case 'settings':
	                note = NotificationName_1.NotificationName.USER_SETTINGS_REQUEST;
	                break;
	        }
	        note && this.sendNotification(note, body, NotificationType_1.NotificationType.UI);
	    };
	    UiMediator.prototype.doCaptionCheckOnControlVisChange = function () {
	        if (this.ui.isStandardView() && this.ccAvail) {
	            this.sendNotification(NotificationName_1.NotificationName.TT_OFFSET_REQUEST, { controlsVisible: this.controlsVisible }, NotificationType_1.NotificationType.UI);
	        }
	    };
	    UiMediator.prototype.updateControlsVisible = function (controlsVisible) {
	        this.controlsVisible = controlsVisible;
	        this.doCaptionCheckOnControlVisChange();
	    };
	    UiMediator.prototype.hGestureEvent = function (e) {
	        var presoMdl = this.getModel(ModelName_1.ModelName.PresentationState);
	        if (presoMdl.isCurrentVideoAd) {
	            return;
	        }
	        var n = e.type === this.enums.ControlEvent.MOUSE_ENTER_PRESENTATION ?
	            NotificationName_1.NotificationName.MOUSE_ENTER_PRESENTATION :
	            NotificationName_1.NotificationName.MOUSE_LEAVE_PRESENTATION;
	        this.sendNotification(n, null, NotificationType_1.NotificationType.UI);
	    };
	    UiMediator.prototype.activateCaptions = function (flag) {
	        this.ccEnabled = flag;
	        this.sendNotification(NotificationName_1.NotificationName.SWITCH_TEXT_MODE, { value: flag }, NotificationType_1.NotificationType.UI);
	    };
	    UiMediator.prototype.isFullScreenAvailable = function () {
	        return this.fsMediator && this.fsMediator.isFullScreenPermitted();
	    };
	    Object.defineProperty(UiMediator.prototype, "fsMediator", {
	        get: function () {
	            if (!this.fsm) {
	                this.fsm = this.facade.retrieveMediator(MediatorName_1.MediatorName.FULLSCREEN);
	            }
	            return this.fsm;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    UiMediator.prototype.init = function () {
	        var _this = this;
	        var ce = this.enums.ControlEvent, cn = this.controlNames, actionHandler = function (e) { return _this.hActionEvent(e); }, visibilityHandler = function (e) { return _this.hVisibilityEvent(e); }, gestureHandler = function (e) { return _this.hGestureEvent(e); };
	        var list = [
	            ce.BEFORE_CONTROLS_VISIBLE, ce.CONTROLS_VISIBLE,
	            ce.BEFORE_CONTROLS_HIDDEN, ce.CONTROLS_HIDDEN
	        ];
	        var i = list.length;
	        while (i--) {
	            this.ui.on(list[i], visibilityHandler);
	        }
	        this.ui.on(ce.ACTION, actionHandler);
	        this.ui.on(ce.MOUSE_ENTER_PRESENTATION, gestureHandler);
	        this.ui.on(ce.MOUSE_LEAVE_PRESENTATION, gestureHandler);
	        this.ui.disableControl(cn.CC_TOGGLE);
	        this.disableFullscreen();
	        this.ui.setVolume(0.35);
	        this.ui.setVideoMode(VideoMode_1.VideoMode.IDLE);
	        this.log(LogLevel_1.LogLevel.INFO, 'UI created.');
	    };
	    return UiMediator;
	}(LogAwareMediator_1.LogAwareMediator));
	exports.UiMediator = UiMediator;

	});

	var UserKeyCommandMediator_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.UserKeyCommandMediator = void 0;




	var UserKeyCommandMediator = (function (_super) {
	    tslib_es6.__extends(UserKeyCommandMediator, _super);
	    function UserKeyCommandMediator(name) {
	        return _super.call(this, name) || this;
	    }
	    UserKeyCommandMediator.prototype.hKeyUp = function (e) {
	        var def = this.getCommand(e);
	        if (def) {
	            this.sendNotification(NotificationName_1.NotificationName.USER_KEY_COMMAND, {
	                action: def.action
	            });
	        }
	    };
	    UserKeyCommandMediator.prototype.hKeyDown = function (e) {
	    };
	    UserKeyCommandMediator.prototype.onRegister = function () {
	        _super.prototype.onRegister.call(this);
	        var ucd = AppResources_1.AppResources.userKeyCmdDefs;
	        var i = ucd.length;
	        while (i--) {
	            this.registerCommandDef(ucd[i]);
	        }
	    };
	    return UserKeyCommandMediator;
	}(AbstractKeyCommandMediator_1.AbstractKeyCommandMediator));
	exports.UserKeyCommandMediator = UserKeyCommandMediator;

	});

	var PrepViewCommand_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.PrepViewCommand = void 0;












	var PrepViewCommand = (function (_super) {
	    tslib_es6.__extends(PrepViewCommand, _super);
	    function PrepViewCommand() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    PrepViewCommand.prototype.execute = function (notification) {
	        var f = this.facade, sysSvc = f.retrieveService(ServiceName_1.ServiceName.System), playerOpts = notification.body.playerOptions;
	        if (sysSvc.global) {
	            if (!playerOpts.useNativeControls && sysSvc.global.cvui) {
	                this.createUi(sysSvc.global.cvui, sysSvc, playerOpts);
	            }
	            else {
	                !playerOpts.useNativeControls && this.log(LogLevel_1.LogLevel.INFO, 'PrepView: Skipping UI creation.');
	            }
	            if (!sysSvc.isTv) {
	                f.registerMediator(new FullscreenMediator_1.FullscreenMediator(MediatorName_1.MediatorName.FULLSCREEN));
	            }
	            var kScope = this.getScopeForKeys(playerOpts.overrides && playerOpts.overrides.keyboardScope);
	            if (kScope !== KeyboardScope_1.KeyboardScope.NONE) {
	                var akm = new AccessibilityKeyCommandMediator_1.AccessibilityKeyCommandMediator(MediatorName_1.MediatorName.ACC_KEY_CMD_MEDIATOR);
	                f.registerMediator(akm);
	                var ukm = new UserKeyCommandMediator_1.UserKeyCommandMediator(MediatorName_1.MediatorName.KEY_COMMAND);
	                f.registerMediator(ukm);
	                var c = this.getPlayerContainer();
	                akm.scope = c;
	                ukm.scope = c;
	            }
	        }
	        else {
	            this.log(LogLevel_1.LogLevel.INFO, 'System.global is null');
	        }
	        this.log(LogLevel_1.LogLevel.DEBUG, 'View prepared');
	    };
	    PrepViewCommand.prototype.getScopeForKeys = function (scope) {
	        switch (scope) {
	            case KeyboardScope_1.KeyboardScope.PLAYER:
	            case KeyboardScope_1.KeyboardScope.DOCUMENT:
	            case KeyboardScope_1.KeyboardScope.NONE:
	                return scope;
	        }
	        return KeyboardScope_1.KeyboardScope.PLAYER;
	    };
	    PrepViewCommand.prototype.getPlayerContainer = function () {
	        var domProxy = this.facade.retrieveProxy(ProxyName_1.ProxyName.PlayerDomProxy);
	        return domProxy.getMain();
	    };
	    PrepViewCommand.prototype.createUi = function (ui, sysSvc, playerOpts) {
	        var viewController = this.getViewController(ui, sysSvc, playerOpts), enums = this.getEnums(ui);
	        var m = new UiMediator_1.UiMediator(MediatorName_1.MediatorName.UI, viewController);
	        this.facade.registerMediator(m);
	        m.initialize(enums);
	    };
	    PrepViewCommand.prototype.getEnums = function (ui) {
	        return {
	            ControlName: ui.ControlName,
	            ControlEvent: ui.ControlEvent,
	            PlayState: ui.PlayState,
	            DecoratorName: ui.DecoratorName,
	            VideoType: ui.VideoType,
	        };
	    };
	    PrepViewCommand.prototype.getViewController = function (ui, sysSvc, opts) {
	        var domProxy = this.facade.retrieveProxy(ProxyName_1.ProxyName.PlayerDomProxy);
	        var uic = opts.uiConfig;
	        if (sysSvc.isIos || sysSvc.isAndroid) {
	            if (!uic) {
	                uic = {};
	            }
	            if (!uic.exclude || !Array.isArray(uic.exclude)) {
	                uic.exclude = [];
	            }
	            uic.exclude.indexOf(ui.ControlName.CC_TOGGLE) == -1 && uic.exclude.push(ui.ControlName.CC_TOGGLE);
	        }
	        return ui.createUi({
	            controlContainer: domProxy.getMain(),
	            panelContainer: domProxy.getElement(PlayerDom_1.PlayerDom.PANEL_CONTAINER),
	            zOrigin: domProxy.getSafeZIndex(),
	            systemInfo: sysSvc.info,
	            configuration: uic || {},
	            omitVolume: !sysSvc.isDesktop
	        });
	    };
	    return PrepViewCommand;
	}(LogAwareSimpleCommand_1.LogAwareSimpleCommand));
	exports.PrepViewCommand = PrepViewCommand;

	});

	var PrepServiceCommand_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.PrepServiceCommand = void 0;


	var PrepServiceCommand = (function (_super) {
	    tslib_es6.__extends(PrepServiceCommand, _super);
	    function PrepServiceCommand() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    PrepServiceCommand.prototype.execute = function (notification) {
	    };
	    return PrepServiceCommand;
	}(LogAwareSimpleCommand_1.LogAwareSimpleCommand));
	exports.PrepServiceCommand = PrepServiceCommand;

	});

	var PlayerDomCreator_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.PlayerDomCreator = void 0;

	var PlayerDomCreator = (function () {
	    function PlayerDomCreator(container, document) {
	        this.document = document;
	        this.main = container;
	    }
	    PlayerDomCreator.prototype.destroy = function () {
	        this.main = null;
	        this.document = null;
	    };
	    PlayerDomCreator.prototype.create = function (skipEls) {
	        var _a, _b;
	        var coll = (_a = {},
	            _a[PlayerDom_1.PlayerDom.MAIN_CONTAINER] = this.main,
	            _a), main = this.main, s = {
	            position: 'absolute',
	            top: 0,
	            left: 0,
	            width: '100%',
	            height: '100%',
	            padding: 0,
	            margin: 0,
	            zIndex: 0,
	            overflow: 'hidden'
	        }, roles = [
	            PlayerDom_1.PlayerDom.VIDEO_CONTAINER,
	            PlayerDom_1.PlayerDom.CC_CONTAINER,
	            PlayerDom_1.PlayerDom.PANEL_CONTAINER,
	            PlayerDom_1.PlayerDom.AD_CONTAINER
	        ];
	        main.style.position = 'relative';
	        main.style.padding = '0';
	        main.style.width = '100%';
	        main.style.height = '100%';
	        main.style.background = '#000';
	        main.style.overflow = 'hidden';
	        main.classList.add('cvp-container');
	        var el;
	        for (var i = 0, n = roles.length; i < n; i++) {
	            if (skipEls && skipEls.indexOf(roles[i]) >= 0) {
	                continue;
	            }
	            s.zIndex += 10;
	            el = this.div(roles[i], s);
	            coll[roles[i]] = el;
	            main.appendChild(el);
	        }
	        var v = document.createElement("video");
	        v.style.height = '100%';
	        v.style.width = '100%';
	        coll[PlayerDom_1.PlayerDom.VIDEO_CONTAINER].appendChild(v);
	        coll[PlayerDom_1.PlayerDom.VIDEO_EL] = v;
	        coll[PlayerDom_1.PlayerDom.AD_CLICK_EL] = this.createAdClickEl(++s.zIndex);
	        main.appendChild(coll[PlayerDom_1.PlayerDom.AD_CLICK_EL]);
	        return _b = {},
	            _b[PlayerDom_1.PlayerDom.MAIN_CONTAINER] = coll[PlayerDom_1.PlayerDom.MAIN_CONTAINER],
	            _b[PlayerDom_1.PlayerDom.VIDEO_EL] = coll[PlayerDom_1.PlayerDom.VIDEO_EL],
	            _b[PlayerDom_1.PlayerDom.VIDEO_CONTAINER] = coll[PlayerDom_1.PlayerDom.VIDEO_CONTAINER],
	            _b[PlayerDom_1.PlayerDom.CC_CONTAINER] = coll[PlayerDom_1.PlayerDom.CC_CONTAINER],
	            _b[PlayerDom_1.PlayerDom.AD_CONTAINER] = coll[PlayerDom_1.PlayerDom.AD_CONTAINER],
	            _b[PlayerDom_1.PlayerDom.AD_CLICK_EL] = coll[PlayerDom_1.PlayerDom.AD_CLICK_EL],
	            _b[PlayerDom_1.PlayerDom.PANEL_CONTAINER] = coll[PlayerDom_1.PlayerDom.PANEL_CONTAINER],
	            _b;
	    };
	    PlayerDomCreator.prototype.createAdClickEl = function (z) {
	        var style = {
	            display: 'none',
	            padding: '4px 8px',
	            fontSize: '12px',
	            background: '#dedede',
	            lineHeight: '14px',
	            color: '#000',
	            position: 'absolute',
	            zIndex: z,
	            right: '2px',
	            top: '2px',
	            textAlign: 'center'
	        }, el = this.div('adClickEl', style);
	        el.innerHTML = 'Learn More';
	        return el;
	    };
	    PlayerDomCreator.prototype.div = function (role, style) {
	        var el = this.document.createElement('div');
	        el.setAttribute('data-role', role);
	        for (var q in style) {
	            el.style[q] = style[q];
	        }
	        return el;
	    };
	    return PlayerDomCreator;
	}());
	exports.PlayerDomCreator = PlayerDomCreator;

	});

	var CreateDomCommand_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.CreateDomCommand = void 0;








	var CreateDomCommand = (function (_super) {
	    tslib_es6.__extends(CreateDomCommand, _super);
	    function CreateDomCommand() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    CreateDomCommand.prototype.execute = function (notification) {
	        var cfg = notification.body.playerOptions, container = cfg.container, sysSvc = this.facade.retrieveService(ServiceName_1.ServiceName.System), playerOpts = this.getModel(ModelName_1.ModelName.PlayerOptions);
	        if (sysSvc.isWebMaf || !sysSvc.global || !sysSvc.document || !container) {
	            return;
	        }
	        var c = (typeof container === 'string' ? sysSvc.document.querySelector(container) : container);
	        var skipEls = null;
	        if (playerOpts.useNativeControls) {
	            skipEls = [PlayerDom_1.PlayerDom.CC_CONTAINER, PlayerDom_1.PlayerDom.PANEL_CONTAINER];
	        }
	        var dc = new PlayerDomCreator_1.PlayerDomCreator(c, sysSvc.document), domColl = dc.create(skipEls), domProxy = this.facade.retrieveProxy(ProxyName_1.ProxyName.PlayerDomProxy);
	        domProxy.setModel(domColl);
	        dc.destroy();
	        domProxy.showAdContainer(false);
	        if (playerOpts.useNativeControls) {
	            domProxy.setVideoAttribute('controls', '');
	        }
	        playerOpts.playsInline !== false && domProxy.setVideoAttribute('playsinline', '');
	        domProxy.setVideoAttribute('data-player-id', this.facade.appId);
	        this.log(LogLevel_1.LogLevel.INFO, 'Player DOM created.');
	    };
	    return CreateDomCommand;
	}(LogAwareSimpleCommand_1.LogAwareSimpleCommand));
	exports.CreateDomCommand = CreateDomCommand;

	});

	var Timer_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Timer = void 0;


	var Timer = (function (_super) {
	    tslib_es6.__extends(Timer, _super);
	    function Timer(pInterval) {
	        if (pInterval === void 0) { pInterval = 250; }
	        var _this = _super.call(this, {}) || this;
	        _this.timer = NaN;
	        _this.pCount = 0;
	        _this.pInterval = pInterval;
	        return _this;
	    }
	    Timer.prototype.destroy = function () {
	        this.stop();
	        _super.prototype.destroy.call(this);
	    };
	    Timer.prototype.start = function () {
	        var _this = this;
	        this.timer = setInterval(function () {
	            _this.pCount++;
	            _this.emit(Timer.TIC_EVENT, { count: _this.pCount });
	        }, this.pInterval);
	    };
	    Timer.prototype.stop = function () {
	        clearInterval(this.timer);
	        this.timer = NaN;
	        this.pCount = 0;
	    };
	    Object.defineProperty(Timer.prototype, "started", {
	        get: function () {
	            return !isNaN(this.timer);
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(Timer.prototype, "interval", {
	        get: function () {
	            return this.pInterval;
	        },
	        set: function (value) {
	            this.pInterval = value;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(Timer.prototype, "count", {
	        get: function () {
	            return this.pCount;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Timer.TIC_EVENT = 'tic';
	    return Timer;
	}(Emitter_1.Emitter));
	exports.Timer = Timer;

	});

	var TimerMediator_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.TimerMediator = void 0;





	var TimerMediator = (function (_super) {
	    tslib_es6.__extends(TimerMediator, _super);
	    function TimerMediator(name) {
	        var _this = _super.call(this, name) || this;
	        _this.timer = new Timer_1.Timer();
	        _this.timer.on(Timer_1.Timer.TIC_EVENT, function (e) { return _this.onTic(e); });
	        return _this;
	    }
	    TimerMediator.prototype.killTimer = function () {
	        if (this.timer && this.timer.started) {
	            this.timer.stop();
	        }
	    };
	    TimerMediator.prototype.listNotificationInterests = function () {
	        return [
	            NotificationName_1.NotificationName.RESOURCE_START
	        ];
	    };
	    TimerMediator.prototype.handleNotification = function (notification) {
	        switch (notification.name) {
	            case NotificationName_1.NotificationName.RESOURCE_START:
	                if (this.timer && !this.timer.started) {
	                    this.timer.start();
	                }
	                break;
	        }
	    };
	    TimerMediator.prototype.onRegister = function () {
	        _super.prototype.onRegister.call(this);
	    };
	    TimerMediator.prototype.onRemove = function () {
	        this.timer.destroy();
	        this.timer = null;
	        _super.prototype.onRemove.call(this);
	    };
	    TimerMediator.prototype.onTic = function (e) {
	        this.facade.sendNotification(NotificationName_1.NotificationName.TIMER_TIC, { count: e.data.count }, NotificationType_1.NotificationType.INTERNAL);
	    };
	    return TimerMediator;
	}(LogAwareMediator_1.LogAwareMediator));
	exports.TimerMediator = TimerMediator;

	});

	var PrepTimerCommand_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.PrepTimerCommand = void 0;





	var PrepTimerCommand = (function (_super) {
	    tslib_es6.__extends(PrepTimerCommand, _super);
	    function PrepTimerCommand() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    PrepTimerCommand.prototype.execute = function (notification) {
	        var f = this.facade;
	        f.registerMediator(new TimerMediator_1.TimerMediator(MediatorName_1.MediatorName.TIMER_MEDIATOR));
	        this.log(LogLevel_1.LogLevel.DEBUG, 'Timer mediator registered');
	    };
	    return PrepTimerCommand;
	}(LogAwareSimpleCommand_1.LogAwareSimpleCommand));
	exports.PrepTimerCommand = PrepTimerCommand;

	});

	var QueryString_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.QueryString = void 0;

	var QueryString = (function () {
	    function QueryString() {
	    }
	    QueryString.encode = function (obj) {
	        if (Util_1.Util.isEmpty(obj)) {
	            return '';
	        }
	        var str = Util_1.Util.entries(obj).map(function (_a) {
	            var k = _a[0], v = _a[1];
	            return k + "=" + encodeURIComponent(v);
	        });
	        return str.join("&");
	    };
	    QueryString.decode = function (uri) {
	        var results = {};
	        if (uri == null) {
	            return results;
	        }
	        uri
	            .replace(/^[^?]*\?/, '')
	            .replace(new RegExp('([^?=&]+)(=([^&]*))?', 'g'), function ($0, $1, $2, $3) {
	            var value;
	            try {
	                value = Util_1.Util.isUndefined($3) ? $3 : decodeURIComponent($3);
	            }
	            catch (error) {
	                value = $3;
	            }
	            results[decodeURIComponent($1)] = value;
	        });
	        return results;
	    };
	    QueryString.parseValue = function (value) {
	        if (Util_1.Util.isUndefined(value)) {
	            return true;
	        }
	        var temp = value.toLowerCase();
	        if (temp === "true" || temp === "false") {
	            return temp === "true";
	        }
	        if (value === "undefined") {
	            return undefined;
	        }
	        if (temp === "null") {
	            return null;
	        }
	        temp = parseFloat(value);
	        if (!isNaN(temp)) {
	            return temp;
	        }
	        return value;
	    };
	    QueryString.parse = function (uri) {
	        var params = QueryString.decode(uri);
	        for (var k in params) {
	            params[k] = QueryString.parseValue(params[k]);
	        }
	        return params;
	    };
	    QueryString.append = function (url, params) {
	        var prefix = Util_1.Util.includes(url, '?') ? '&' : '?';
	        return url + prefix + QueryString.encode(params);
	    };
	    return QueryString;
	}());
	exports.QueryString = QueryString;

	});

	var PluginServices_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.PluginServices = void 0;



	var PluginServices = (function () {
	    function PluginServices(options) {
	        var _this = this;
	        this.xhr = {
	            performXhr: function (options) {
	                var temp = options.onComplete;
	                options.onComplete = function (e) {
	                    temp(e);
	                    e.target.destroy();
	                };
	                new AsyncDataRequest_1.AsyncDataRequest(AsyncDataRequestOptions_1.AsyncDataRequestOptions.create(options));
	            }
	        };
	        this.event = {
	            dispatchPluginEvent: function (data) {
	                _this.dispatch(data);
	            }
	        };
	        this.util = {
	            queryStrFromObj: function (obj, encode) {
	                return QueryString_1.QueryString.encode(obj);
	            }
	        };
	        this.vc = null;
	        this.sys = null;
	        this.bi = null;
	        this.domProxy = null;
	        this.playerOpts = null;
	        this.loc = null;
	        this.vc = options.viewController;
	        this.sys = options.system;
	        this.bi = options.buildInfo;
	        this.domProxy = options.domProxy;
	        this.playerOpts = options.playerOptions;
	        this.loc = options.localization;
	        this.dispatch = options.dispatch;
	    }
	    Object.defineProperty(PluginServices.prototype, "viewController", {
	        get: function () {
	            return this.vc;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(PluginServices.prototype, "system", {
	        get: function () {
	            return this.sys;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(PluginServices.prototype, "playerOptions", {
	        get: function () {
	            return this.playerOpts;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(PluginServices.prototype, "buildInfo", {
	        get: function () {
	            return this.bi;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(PluginServices.prototype, "playerDomProxy", {
	        get: function () {
	            return this.domProxy;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(PluginServices.prototype, "localization", {
	        get: function () {
	            return this.loc;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    return PluginServices;
	}());
	exports.PluginServices = PluginServices;

	});

	var ScriptLoader_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ScriptLoader = void 0;



	var ScriptLoader = (function (_super) {
	    tslib_es6.__extends(ScriptLoader, _super);
	    function ScriptLoader(options) {
	        var _this = _super.call(this, Util_1.Util.assign({
	            timeout: 2000
	        }, options || {})) || this;
	        _this.timeoutHandles = {};
	        _this.map = {};
	        var hasListener = _this.hasListenerFor(ScriptLoader.event.COMPLETE);
	        if (_this.opts.url && hasListener) {
	            _this.loadScript(_this.opts.url);
	        }
	        else if (_this.opts.urls && hasListener) {
	            _this.loadScripts(_this.opts.urls);
	        }
	        return _this;
	    }
	    ScriptLoader.load = function (options) {
	        return new Promise(function (resolve, reject) {
	            options.onComplete = function (_a) {
	                var data = _a.data;
	                return (data.error || data.timedOut) ? reject(data) : resolve(data);
	            };
	            new ScriptLoader(options);
	        });
	    };
	    ScriptLoader.prototype.destroy = function () {
	        if (!this.timeoutHandles) {
	            return;
	        }
	        for (var q in this.timeoutHandles) {
	            clearTimeout(this.timeoutHandles[q]);
	        }
	        this.timeoutHandles = null;
	        _super.prototype.destroy.call(this);
	    };
	    ScriptLoader.prototype.loadScript = function (scriptUrl, completeListener) {
	        var _this = this;
	        var scr = document.createElement('script'), sec = window.location.protocol === 'https:', url = sec ? scriptUrl.replace('http:', 'https:') : scriptUrl;
	        this.map[url] = {
	            hLoad: function () { return _this.hLoadOrError(url); },
	            hError: function () { return _this.hLoadOrError(url, true, false); },
	            scriptEl: scr
	        };
	        var mapObj = this.map[url];
	        completeListener && this.on(ScriptLoader.event.COMPLETE, completeListener);
	        scr.async = true;
	        scr.addEventListener('load', mapObj.hLoad);
	        scr.addEventListener('error', mapObj.hError);
	        this.timeoutHandles[url] = setTimeout(function () { return _this.hLoadOrError(url, true, true); }, this.opts.timeout);
	        document.head.appendChild(scr);
	        scr.src = url;
	    };
	    ScriptLoader.prototype.loadScripts = function (urls, completeListener) {
	        completeListener && this.on(ScriptLoader.event.COMPLETE, completeListener);
	        for (var i = 0, n = urls.length; i < n; i++) {
	            this.loadScript(urls[i]);
	        }
	    };
	    ScriptLoader.prototype.hLoadOrError = function (url, error, timedOut) {
	        var _this = this;
	        clearTimeout(this.timeoutHandles[url]);
	        delete this.timeoutHandles[url];
	        var mapObj = this.map[url];
	        mapObj.scriptEl.removeEventListener('load', mapObj.hLoad);
	        mapObj.scriptEl.removeEventListener('error', mapObj.hError);
	        for (var q in mapObj) {
	            delete mapObj[q];
	        }
	        delete this.map[url];
	        if (error && this.shouldRetry()) {
	            this.incrementAttempts();
	            setTimeout(function () { _this.loadScript(url); }, this.retryInterval);
	        }
	        else {
	            this.emit(ScriptLoader.event.COMPLETE, {
	                url: url,
	                error: error,
	                timedOut: timedOut === true
	            });
	        }
	    };
	    ScriptLoader.event = {
	        COMPLETE: "complete"
	    };
	    return ScriptLoader;
	}(RecoveryEnabledRequest_1.RecoveryEnabledRequest));
	exports.ScriptLoader = ScriptLoader;

	});

	var PluginMediator_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.PluginMediator = void 0;














	var PluginMediator = (function (_super) {
	    tslib_es6.__extends(PluginMediator, _super);
	    function PluginMediator(name) {
	        var _this = _super.call(this, name) || this;
	        _this.plugins = {};
	        _this.pendingLoads = null;
	        _this.services = null;
	        _this.diagnosticPlugin = null;
	        _this.diagnosticPluginVisible = false;
	        return _this;
	    }
	    PluginMediator.prototype.onRemove = function () {
	        if (this.plugins) {
	            for (var q in this.plugins) {
	                this.killPlugin(q);
	            }
	        }
	        this.plugins = null;
	        _super.prototype.onRemove.call(this);
	    };
	    PluginMediator.prototype.removePlugin = function (name) {
	        this.killPlugin(name);
	    };
	    PluginMediator.prototype.getPlugin = function (name) {
	        return this.plugins[name] || null;
	    };
	    PluginMediator.prototype.toggleDiagnosticPlugin = function () {
	        if (!this.diagnosticPlugin) {
	            this.createDiagnosticPlugin();
	        }
	        else {
	            this.diagnosticPluginVisible = !this.diagnosticPluginVisible;
	            this.diagnosticPluginVisible ? this.diagnosticPlugin.show() : this.diagnosticPlugin.hide();
	        }
	    };
	    PluginMediator.prototype.listNotificationInterests = function () {
	        return [
	            NotificationName_1.NotificationName.LOAD_PLUGINS,
	            NotificationName_1.NotificationName.AD_BREAK_START,
	            NotificationName_1.NotificationName.CONTENT_START,
	            NotificationName_1.NotificationName.REMOVE_PLUGIN
	        ];
	    };
	    PluginMediator.prototype.handleNotification = function (notification) {
	        switch (notification.name) {
	            case NotificationName_1.NotificationName.LOAD_PLUGINS:
	                this.loadPlugins(notification.body);
	                break;
	            case NotificationName_1.NotificationName.REMOVE_PLUGIN:
	                this.removePlugin(notification.body.name);
	                break;
	            case NotificationName_1.NotificationName.AD_BREAK_START:
	            case NotificationName_1.NotificationName.CONTENT_START:
	                this.pendingLoads !== null && this.loadPendingPlugins();
	                break;
	        }
	    };
	    PluginMediator.prototype.createDiagnosticPlugin = function () {
	        var _this = this;
	        var dCfg = AppResources_1.AppResources.nativePluginConfig.diagnostic;
	        this.createPluginServices();
	        dCfg && this.loadScripts([dCfg], null, function () {
	            _this.diagnosticPlugin = _this.plugins[dCfg.name];
	            _this.diagnosticPluginVisible = true;
	        });
	    };
	    PluginMediator.prototype.createPluginServices = function () {
	        if (this.services) {
	            return;
	        }
	        var am = this.facade.retrieveMediator(MediatorName_1.MediatorName.APPLICATION), uim = this.facade.retrieveMediator(MediatorName_1.MediatorName.UI), pOptsMdl = this.getModel(ModelName_1.ModelName.PlayerOptions);
	        this.services = new PluginServices_1.PluginServices({
	            viewController: uim ? uim.viewController : null,
	            buildInfo: this.facade.retrieveService(ServiceName_1.ServiceName.BuildInfo),
	            system: this.facade.retrieveService(ServiceName_1.ServiceName.System),
	            domProxy: this.facade.retrieveProxy(ProxyName_1.ProxyName.PlayerDomProxy),
	            localization: this.facade.retrieveProxy(ProxyName_1.ProxyName.LocalizationProxy).getApi(),
	            playerOptions: pOptsMdl.model.data,
	            dispatch: function (data) {
	                am.dispatchPluginEvent(data);
	            }
	        });
	    };
	    PluginMediator.prototype.createPlugin = function (cfg) {
	        var am = this.facade.retrieveMediator(MediatorName_1.MediatorName.APPLICATION), c = cfg.classRef ? cfg.classRef : Utils_1.Utils.classFromQualifiedName(cfg.qualifiedClassName), opts = cfg.options || {};
	        if (cfg.name) {
	            opts.name = cfg.name;
	        }
	        if (c) {
	            var p = void 0;
	            if (Util_1.Util.isFunction(c.onRegister)) {
	                p = c;
	            }
	            else {
	                p = new c();
	            }
	            this.plugins[cfg.name] = p;
	            p.onRegister !== undefined && p.onRegister(am.getAppApi(), opts, this.services);
	            this.log(LogLevel_1.LogLevel.INFO, "Created plugin '" + cfg.name + "'");
	        }
	    };
	    PluginMediator.prototype.killPlugin = function (name) {
	        if (!this.plugins[name]) {
	            return;
	        }
	        Util_1.Util.isFunction(this.plugins[name].destroy) && this.plugins[name].destroy();
	        delete this.plugins[name];
	    };
	    PluginMediator.prototype.loadPendingPlugins = function () {
	        this.loadScripts(this.pendingLoads.slice());
	        this.pendingLoads = null;
	    };
	    PluginMediator.prototype.loadPlugins = function (obj) {
	        var playerOpts = this.getModel(ModelName_1.ModelName.PlayerOptions), plugins = obj.plugins || playerOpts.plugins, data = this.processCfg(plugins), ps = this.getModel(ModelName_1.ModelName.PresentationState), useP = !ps.started, next = (!!obj.nextNotification && obj.nextNotification) || null, callback = (!!obj.callback && obj.callback) || null;
	        if (!data.high.length && !data.low.length) {
	            next && this.sendNotification(next);
	            callback && callback();
	            return;
	        }
	        this.createPluginServices();
	        var loading = false;
	        if (useP) {
	            if (data.low.length) {
	                this.pendingLoads = data.low;
	            }
	            if (data.high.length) {
	                loading = true;
	                this.loadScripts(data.high, next, callback);
	            }
	        }
	        else {
	            var c = data.low.concat(data.high);
	            loading = true;
	            this.loadScripts(c, next, callback);
	        }
	        if (!loading) {
	            next && this.sendNotification(next);
	            callback && callback();
	        }
	    };
	    PluginMediator.prototype.loadScripts = function (pc, nextNotification, callback) {
	        var _this = this;
	        if (nextNotification === void 0) { nextNotification = null; }
	        if (callback === void 0) { callback = null; }
	        var map = {}, urls = [];
	        var i = pc.length;
	        while (i--) {
	            var cfg = pc[i];
	            if (!cfg.loaded) {
	                map[cfg.url] = i;
	                urls.push(cfg.url);
	            }
	            else {
	                this.createPlugin(cfg);
	            }
	        }
	        if (!urls.length) {
	            nextNotification && this.sendNotification(nextNotification);
	            callback && callback();
	            return;
	        }
	        var playerOpts = this.getModel(ModelName_1.ModelName.PlayerOptions);
	        new ScriptLoader_1.ScriptLoader({
	            urls: urls,
	            errorRecovery: playerOpts.networkErrorRecovery,
	            onComplete: function (e) {
	                if (!e.data.error && e.data.url) {
	                    map[e.data.url] !== undefined && _this.createPlugin(pc[map[e.data.url]]);
	                    delete map[e.data.url];
	                }
	                else {
	                    delete map[e.data.url];
	                    _this.log(LogLevel_1.LogLevel.ERROR, AppResources_1.AppResources.messages.PLUGIN_LOAD_ERROR);
	                }
	                if (Util_1.Util.isEmpty(map)) {
	                    nextNotification && _this.sendNotification(nextNotification);
	                    callback && callback();
	                }
	            }
	        });
	    };
	    PluginMediator.prototype.processCfg = function (cfg) {
	        if (!cfg) {
	            return { high: [], low: [] };
	        }
	        var ps = this.getModel(ModelName_1.ModelName.PresentationState), useP = !ps.started, hi = [], lo = [], ret = { high: hi, low: lo };
	        var i = cfg.length;
	        while (i--) {
	            var pc = cfg[i], loadReq = !Util_1.Util.isEmpty(pc.url) && !Util_1.Util.isEmpty(pc.qualifiedClassName), hasRef = !Util_1.Util.isEmpty(pc.classRef);
	            if (loadReq || hasRef) {
	                useP && pc.priority === PluginPriority_1.PluginPriority.HIGH ? hi.unshift(pc) : lo.unshift(pc);
	                pc.loaded = hasRef;
	            }
	        }
	        return ret;
	    };
	    return PluginMediator;
	}(LogAwareMediator_1.LogAwareMediator));
	exports.PluginMediator = PluginMediator;

	});

	var PrepPluginsCommand_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.PrepPluginsCommand = void 0;





	var PrepPluginsCommand = (function (_super) {
	    tslib_es6.__extends(PrepPluginsCommand, _super);
	    function PrepPluginsCommand() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    PrepPluginsCommand.prototype.execute = function (notification) {
	        var f = this.facade;
	        f.registerMediator(new PluginMediator_1.PluginMediator(MediatorName_1.MediatorName.PLUGIN_MEDIATOR));
	        this.log(LogLevel_1.LogLevel.DEBUG, 'Plugins Prepared');
	    };
	    return PrepPluginsCommand;
	}(LogAwareSimpleCommand_1.LogAwareSimpleCommand));
	exports.PrepPluginsCommand = PrepPluginsCommand;

	});

	var BootCommand_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.BootCommand = void 0;








	var BootCommand = (function (_super) {
	    tslib_es6.__extends(BootCommand, _super);
	    function BootCommand() {
	        return _super.call(this) || this;
	    }
	    BootCommand.prototype.initializeMacroCommand = function () {
	        this.addSubCommand(PrepModelCommand_1.PrepModelCommand);
	        this.addSubCommand(CreateDomCommand_1.CreateDomCommand);
	        this.addSubCommand(PrepServiceCommand_1.PrepServiceCommand);
	        this.addSubCommand(PrepTimerCommand_1.PrepTimerCommand);
	        this.addSubCommand(PrepViewCommand_1.PrepViewCommand);
	        this.addSubCommand(PrepPluginsCommand_1.PrepPluginsCommand);
	    };
	    return BootCommand;
	}(AbstractMacroCommand_1.AbstractMacroCommand));
	exports.BootCommand = BootCommand;

	});

	var BootWebMafCommand_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.BootWebMafCommand = void 0;






	var BootWebMafCommand = (function (_super) {
	    tslib_es6.__extends(BootWebMafCommand, _super);
	    function BootWebMafCommand() {
	        return _super.call(this) || this;
	    }
	    BootWebMafCommand.prototype.initializeMacroCommand = function () {
	        this.addSubCommand(PrepModelCommand_1.PrepModelCommand);
	        this.addSubCommand(PrepServiceCommand_1.PrepServiceCommand);
	        this.addSubCommand(PrepTimerCommand_1.PrepTimerCommand);
	        this.addSubCommand(PrepPluginsCommand_1.PrepPluginsCommand);
	    };
	    return BootWebMafCommand;
	}(AbstractMacroCommand_1.AbstractMacroCommand));
	exports.BootWebMafCommand = BootWebMafCommand;

	});

	var PlayerErrorEvent_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.PlayerErrorEvent = void 0;



	var PlayerErrorEvent = (function (_super) {
	    tslib_es6.__extends(PlayerErrorEvent, _super);
	    function PlayerErrorEvent(type, code, msg, data, fatal) {
	        if (fatal === void 0) { fatal = false; }
	        var _this = _super.call(this, type, null, Util_1.Util.assign({}, data)) || this;
	        _this.pCode = code;
	        _this.pMessage = msg;
	        _this.pFatal = fatal;
	        return _this;
	    }
	    Object.defineProperty(PlayerErrorEvent.prototype, "code", {
	        get: function () {
	            return this.pCode;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(PlayerErrorEvent.prototype, "message", {
	        get: function () {
	            return this.pMessage;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(PlayerErrorEvent.prototype, "fatal", {
	        get: function () {
	            return this.pFatal;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    return PlayerErrorEvent;
	}(CoreEvent_1.CoreEvent));
	exports.PlayerErrorEvent = PlayerErrorEvent;

	});

	var AdErrorEvent_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.AdErrorEvent = void 0;



	var AdErrorEvent = (function (_super) {
	    tslib_es6.__extends(AdErrorEvent, _super);
	    function AdErrorEvent(code, msg, data, fatal) {
	        var _this = _super.call(this, PlayerEvent_1.PlayerEvent.AD_ERROR, code, msg, data, fatal) || this;
	        _this.eInfo = (_this.data || {});
	        return _this;
	    }
	    Object.defineProperty(AdErrorEvent.prototype, "errorCode", {
	        get: function () {
	            return this.eInfo.errorCode || null;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(AdErrorEvent.prototype, "innerErrorMessage", {
	        get: function () {
	            return this.eInfo.innerErrorMessage || null;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(AdErrorEvent.prototype, "sdkVersion", {
	        get: function () {
	            return this.eInfo.sdkVersion || null;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(AdErrorEvent.prototype, "vastErrorCode", {
	        get: function () {
	            return this.eInfo.vastErrorCode || null;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(AdErrorEvent.prototype, "requestContext", {
	        get: function () {
	            return this.eInfo.requestContext || null;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(AdErrorEvent.prototype, "adInfo", {
	        get: function () {
	            return this.eInfo.adInfo || null;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    return AdErrorEvent;
	}(PlayerErrorEvent_1.PlayerErrorEvent));
	exports.AdErrorEvent = AdErrorEvent;

	});

	var HandleErrorCommand_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.HandleErrorCommand = void 0;








	var HandleErrorCommand = (function (_super) {
	    tslib_es6.__extends(HandleErrorCommand, _super);
	    function HandleErrorCommand() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    HandleErrorCommand.prototype.execute = function (notification) {
	        var appMed = this.facade.retrieveMediator(MediatorName_1.MediatorName.APPLICATION);
	        if (!appMed) {
	            return;
	        }
	        var name = notification.name, playerEvt = event_map.event_map[name], body = notification.body, isAdError = this.isAdRelatedError(name), evt = isAdError ?
	            new AdErrorEvent_1.AdErrorEvent(body.code, body.message, body.data, body.fatal) :
	            new PlayerErrorEvent_1.PlayerErrorEvent(playerEvt, body.code, body.message, body.data, body.fatal);
	        if (body.fatal) {
	            var fe = new PlayerErrorEvent_1.PlayerErrorEvent(PlayerEvent_1.PlayerEvent.FATAL_ERROR, body.code, body.message, body.data, body.fatal);
	            appMed.sendErrorEvent(fe);
	        }
	        appMed.sendErrorEvent(evt);
	        var e = new PlayerErrorEvent_1.PlayerErrorEvent(PlayerEvent_1.PlayerEvent.ERROR, body.code, body.message, body.data, body.fatal);
	        appMed.sendErrorEvent(e);
	    };
	    HandleErrorCommand.prototype.isAdRelatedError = function (name) {
	        return name === NotificationName_1.NotificationName.AD_ERROR ||
	            name === NotificationName_1.NotificationName.AD_STALLED;
	    };
	    return HandleErrorCommand;
	}(LogAwareSimpleCommand_1.LogAwareSimpleCommand));
	exports.HandleErrorCommand = HandleErrorCommand;

	});

	var KillResourcePresentationCommand_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.KillResourcePresentationCommand = void 0;




	var KillResourcePresentationCommand = (function (_super) {
	    tslib_es6.__extends(KillResourcePresentationCommand, _super);
	    function KillResourcePresentationCommand() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    KillResourcePresentationCommand.prototype.execute = function (notification) {
	        this.facade.removeMediator(MediatorName_1.MediatorName.PRESENTATION_MEDIATOR);
	        this.facade.removeProxy(ProxyName_1.ProxyName.ResourceProxy);
	        var p = this.facade.retrieveProxy(ProxyName_1.ProxyName.ModelCollectionProxy);
	        p.reset();
	    };
	    return KillResourcePresentationCommand;
	}(LogAwareSimpleCommand_1.LogAwareSimpleCommand));
	exports.KillResourcePresentationCommand = KillResourcePresentationCommand;

	});

	var LocalizationCommand_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.LocalizationCommand = void 0;





	var LocalizationCommand = (function (_super) {
	    tslib_es6.__extends(LocalizationCommand, _super);
	    function LocalizationCommand() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    LocalizationCommand.prototype.execute = function (notification) {
	        var _this = this;
	        var name = notification.name, body = notification.body;
	        switch (name) {
	            case NotificationName_1.NotificationName.CHANGE_LANGUAGE:
	                var localization_1 = this.facade.retrieveProxy(ProxyName_1.ProxyName.LocalizationProxy);
	                var lang = body.value;
	                localization_1.changeLanguage(lang).then(function () {
	                    var dom = _this.facade.retrieveProxy(ProxyName_1.ProxyName.PlayerDomProxy);
	                    if (dom) {
	                        var main = dom.getMain();
	                        main.setAttribute('aria-label', localization_1.localize(LocalizationId_1.LocalizationId.MEDIA_PLAYER));
	                        main.setAttribute('lang', localization_1.language);
	                    }
	                    _this.sendNotification(NotificationName_1.NotificationName.LANGUAGE_CHANGE, body);
	                });
	                break;
	            case NotificationName_1.NotificationName.LANGUAGE_CHANGE:
	                this.sendNotification(NotificationName_1.NotificationName.APP_EVENT, {
	                    notificationName: name,
	                    data: body
	                });
	                break;
	        }
	    };
	    return LocalizationCommand;
	}(LogAwareSimpleCommand_1.LogAwareSimpleCommand));
	exports.LocalizationCommand = LocalizationCommand;

	});

	var PlaybackCommand_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.PlaybackCommand = void 0;












	var PlaybackCommand = (function (_super) {
	    tslib_es6.__extends(PlaybackCommand, _super);
	    function PlaybackCommand() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    PlaybackCommand.prototype.execute = function (notification) {
	        var _this = this;
	        var presoMediator = this.facade.retrieveMediator(MediatorName_1.MediatorName.PRESENTATION_MEDIATOR), cps = this.contentPlaybackStateProxy.model;
	        var pos, presoMdl;
	        switch (notification.name) {
	            case NotificationName_1.NotificationName.PLAY_ON_USER_GESTURE:
	                if (!presoMediator) {
	                    this.facade.sendNotification(NotificationName_1.NotificationName.POSTER_CLICK, null, NotificationType_1.NotificationType.INTERNAL);
	                }
	                else {
	                    this.invokePlayOnUserGesture(presoMediator);
	                    var pl = this.facade.retrieveProxy(ProxyName_1.ProxyName.Playlist);
	                    this.facade.sendNotification(NotificationName_1.NotificationName.POSTER_CLICK, { resource: pl.currentResource }, NotificationType_1.NotificationType.INTERNAL);
	                }
	                break;
	            case NotificationName_1.NotificationName.PLAY:
	                var hasPreso = !!presoMediator, started = hasPreso && this.getModel(ModelName_1.ModelName.PresentationState).started;
	                if (hasPreso && notification.type === NotificationType_1.NotificationType.EXTERNAL && !started) {
	                    this.invokePlayOnUserGesture(presoMediator);
	                }
	                else if (started) {
	                    presoMediator && presoMediator.play();
	                }
	                break;
	            case NotificationName_1.NotificationName.PAUSE:
	                presoMediator && presoMediator.pause();
	                presoMdl = this.getModel(ModelName_1.ModelName.PresentationState);
	                if (!presoMdl.isCurrentVideoAd && notification.type === NotificationType_1.NotificationType.UI) {
	                    this.facade.sendNotification(NotificationName_1.NotificationName.USER_PAUSE, null, NotificationType_1.NotificationType.INTERNAL);
	                }
	                break;
	            case NotificationName_1.NotificationName.STOP:
	                var appMed = this.facade.retrieveMediator(MediatorName_1.MediatorName.APPLICATION), r_1 = this.facade.retrieveProxy(ProxyName_1.ProxyName.Playlist).currentResource, isVod_1 = this.isVod();
	                appMed.killCurrentResource()
	                    .then(function () {
	                    if (isVod_1) {
	                        return;
	                    }
	                    _this.sendNotification(NotificationName_1.NotificationName.APP_EVENT, {
	                        notificationName: NotificationName_1.NotificationName.LIVE_PRESENTATION_STOPPED,
	                        data: r_1
	                    });
	                });
	                break;
	            case NotificationName_1.NotificationName.SEEK:
	                presoMediator.seek(notification.body.value);
	                break;
	            case NotificationName_1.NotificationName.SEEK_FORWARD:
	                pos = cps.time + notification.body.value;
	                presoMediator.seek(Math.min(pos, cps.duration));
	                break;
	            case NotificationName_1.NotificationName.SEEK_BACK:
	                pos = cps.time - notification.body.value;
	                presoMediator.seek(Math.max(pos, 0));
	                break;
	            case NotificationName_1.NotificationName.SEEK_TO_LIVE:
	                if (!this.isVod() && cps.liveStreamInfo) {
	                    pos = cps.liveStreamInfo.relativeDuration;
	                    presoMediator.seek(Math.min(pos, cps.duration));
	                }
	                break;
	            case NotificationName_1.NotificationName.SWITCH_AUDIO_TRACK:
	                presoMediator.adapter.audioTrack = notification.body.value;
	                break;
	            case NotificationName_1.NotificationName.SWITCH_TEXT_TRACK:
	                var track = notification.body.value;
	                if (track) {
	                    this.facade.retrieveProxy(ProxyName_1.ProxyName.TextTrackProxy).language = track.language;
	                    var textTrack = this.contentPlaybackStateProxy.getTextTrackById(track.id);
	                    presoMediator.adapter.textTrack = textTrack;
	                }
	                break;
	            case NotificationName_1.NotificationName.SWITCH_TEXT_MODE:
	                var enabled = notification.body.value;
	                var textTrackProxy = this.facade.retrieveProxy(ProxyName_1.ProxyName.TextTrackProxy);
	                textTrackProxy.enabled = enabled;
	                presoMediator.adapter.textTrackMode = textTrackProxy.mode;
	                break;
	            case NotificationName_1.NotificationName.MUTE:
	                presoMediator.mute(true);
	                break;
	            case NotificationName_1.NotificationName.UNMUTE:
	                presoMediator.mute(false);
	                break;
	            case NotificationName_1.NotificationName.VOLUME_CHANGE:
	                var _a = notification.body, value = _a.value, muted = _a.muted;
	                !isNaN(value) && presoMediator.setVolume(value);
	                presoMdl = this.getModel(ModelName_1.ModelName.PresentationState);
	                if (!Util_1.Util.isUndefined(muted) && presoMdl.isMuted != muted) {
	                    presoMediator.mute(muted);
	                }
	                if (notification.type === NotificationType_1.NotificationType.EXTERNAL) {
	                    var uiMed = this.facade.retrieveMediator(MediatorName_1.MediatorName.UI);
	                    uiMed && uiMed.setVolume(value);
	                }
	                break;
	        }
	    };
	    Object.defineProperty(PlaybackCommand.prototype, "contentPlaybackStateProxy", {
	        get: function () {
	            return this.facade.retrieveProxy(ProxyName_1.ProxyName.ContentPlaybackStateProxy);
	        },
	        enumerable: false,
	        configurable: true
	    });
	    PlaybackCommand.prototype.isVod = function () {
	        var streamType = this.contentPlaybackStateProxy.model.streamType;
	        return (streamType != StreamType_1.StreamType.LIVE && streamType != StreamType_1.StreamType.DVR);
	    };
	    PlaybackCommand.prototype.invokePlayOnUserGesture = function (presoMediator) {
	        var _this = this;
	        var domProxy = this.facade.retrieveProxy(ProxyName_1.ProxyName.PlayerDomProxy), sys = this.facade.retrieveService(ServiceName_1.ServiceName.System), skipPriming = !domProxy || sys.device == Device_1.Device.IPAD || sys.device == Device_1.Device.LG_SMART_TV;
	        if (!skipPriming) {
	            var p = domProxy.primeVideo();
	            p.then(function () {
	                if (sys.device == Device_1.Device.IPHONE) {
	                    var ev_1 = 'timeupdate';
	                    var v_1 = domProxy.getVideo(), h_1 = function (e) {
	                        v_1.removeEventListener(ev_1, h_1);
	                        setTimeout(function () { return presoMediator.playOnUserGesture(); }, 200);
	                    };
	                    v_1.addEventListener(ev_1, h_1);
	                }
	                else {
	                    presoMediator.playOnUserGesture();
	                }
	            }).catch(function (e) {
	                _this.log(LogLevel_1.LogLevel.ERROR, "ERROR - PlaybackCommand: Priming FAILED.  " + e.message);
	                _this.facade.sendNotification(NotificationName_1.NotificationName.AUTOPLAY_BLOCKED, null, NotificationType_1.NotificationType.INTERNAL);
	            });
	        }
	        else {
	            presoMediator && presoMediator.playOnUserGesture();
	        }
	    };
	    return PlaybackCommand;
	}(LogAwareSimpleCommand_1.LogAwareSimpleCommand));
	exports.PlaybackCommand = PlaybackCommand;

	});

	var PlaylistCommand_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.PlaylistCommand = void 0;





	var PlaylistCommand = (function (_super) {
	    tslib_es6.__extends(PlaylistCommand, _super);
	    function PlaylistCommand() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    PlaylistCommand.prototype.execute = function (notification) {
	        var _this = this;
	        switch (notification.name) {
	            case NotificationName_1.NotificationName.PLAYLIST_ADVANCED:
	                this.close()
	                    .then(function () {
	                    _this.sendAppEventNotification(notification.name, notification.body);
	                    _this.sendNotification(NotificationName_1.NotificationName.VALIDATE_RESOURCE, notification.body, NotificationType_1.NotificationType.INTERNAL);
	                });
	                break;
	            case NotificationName_1.NotificationName.PLAYLIST_COMPLETE:
	            case NotificationName_1.NotificationName.PLAYLIST_CLEARED:
	            case NotificationName_1.NotificationName.PLAYLIST_CURRENT_RESOURCE_CLEARED:
	                this.close()
	                    .then(function () {
	                    _this.sendAppEventNotification(notification.name, notification.body);
	                });
	                break;
	        }
	    };
	    PlaylistCommand.prototype.sendAppEventNotification = function (n, data) {
	        if (data === void 0) { data = null; }
	        this.sendNotification(NotificationName_1.NotificationName.APP_EVENT, {
	            notificationName: n,
	            data: data
	        });
	    };
	    PlaylistCommand.prototype.close = function () {
	        var presoM = this.facade.retrieveMediator(MediatorName_1.MediatorName.PRESENTATION_MEDIATOR);
	        return (presoM) ? presoM.close() : Promise.resolve();
	    };
	    return PlaylistCommand;
	}(LogAwareSimpleCommand_1.LogAwareSimpleCommand));
	exports.PlaylistCommand = PlaylistCommand;

	});

	var ErrorCode_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ErrorCode = void 0;
	var ErrorCode;
	(function (ErrorCode) {
	    ErrorCode["INVALID_RESOURCE_FORMAT"] = "1000";
	    ErrorCode["RESOURCE_UNAVAILABLE"] = "1100";
	    ErrorCode["GEO_LOCATION_BLOCKED"] = "1101";
	    ErrorCode["DOMAIN_BLOCKED"] = "1102";
	    ErrorCode["IP_BLOCKED"] = "1103";
	    ErrorCode["SATELLITE_PROVIDER_BLOCKED"] = "1104";
	    ErrorCode["EXPIRED"] = "1105";
	    ErrorCode["SELECTOR_CALL_ERROR"] = "1106";
	    ErrorCode["IMA_SDK_MISSING"] = "1200";
	    ErrorCode["DAI_SDK_MISSING"] = "1201";
	    ErrorCode["DASH_SDK_MISSING"] = "1202";
	    ErrorCode["HLS_SDK_MISSING"] = "1203";
	    ErrorCode["SHAKA_SDK_MISSING"] = "1204";
	    ErrorCode["TWITCH_SDK_MISSING"] = "1205";
	    ErrorCode["HLSJS_PARSE_ERROR"] = "2101";
	    ErrorCode["DASHJS_PARSE_ERROR"] = "2102";
	    ErrorCode["SHAKA_PARSE_ERROR"] = "2103";
	    ErrorCode["TWITCH_PARSE_ERROR"] = "2104";
	    ErrorCode["USER_GESTURE_REQUIRED"] = "2300";
	    ErrorCode["HTML5_NETWORK_ERROR"] = "3001";
	    ErrorCode["HLSJS_NETWORK_ERROR"] = "3002";
	    ErrorCode["DASHJS_NETWORK_ERROR"] = "3003";
	    ErrorCode["WEBMAF_NETWORK_ERROR"] = "3004";
	    ErrorCode["SHAKA_NETWORK_ERROR"] = "3005";
	    ErrorCode["TWITCH_NETWORK_ERROR"] = "3006";
	    ErrorCode["MEDIA_ABORTED"] = "3100";
	    ErrorCode["HTML5_SRC_NOT_SUPPORTED"] = "3101";
	    ErrorCode["HLSJS_SRC_NOT_SUPPORTED"] = "3102";
	    ErrorCode["DASHJS_SRC_NOT_SUPPORTED"] = "3103";
	    ErrorCode["WEBMAF_SRC_NOT_SUPPORTED"] = "3104";
	    ErrorCode["SHAKA_SRC_NOT_SUPPORTED"] = "3105";
	    ErrorCode["TWITCH_SRC_NOT_SUPPORTED"] = "3106";
	    ErrorCode["HTML5_MEDIA_ERROR"] = "3200";
	    ErrorCode["HLSJS_MEDIA_ERROR"] = "3201";
	    ErrorCode["HLSJS_MUX_ERROR"] = "3202";
	    ErrorCode["DASHJS_MEDIA_ERROR"] = "3203";
	    ErrorCode["WEBMAF_MEDIA_ERROR"] = "3204";
	    ErrorCode["SHAKA_MEDIA_ERROR"] = "3205";
	    ErrorCode["TWITCH_MEDIA_ERROR"] = "3206";
	    ErrorCode["FAIRPLAY_APP_CERT_ERROR"] = "3300";
	    ErrorCode["FAIRPLAY_LIC_ERROR"] = "3301";
	    ErrorCode["DASHJS_DRM_ERROR"] = "3302";
	    ErrorCode["WEBMAF_DRM_ERROR"] = "3303";
	    ErrorCode["SHAKA_DRM_ERROR"] = "3304";
	    ErrorCode["UNSPECIFIED_VIDEO_PLAYBACK_ERROR"] = "3400";
	    ErrorCode["UNSPECIFIED_HLSJS_ERROR"] = "3401";
	    ErrorCode["UNSPECIFIED_DASHJS_ERROR"] = "3402";
	    ErrorCode["UNSPECIFIED_WEBMAF_ERROR"] = "3403";
	    ErrorCode["UNSPECIFIED_SHAKA_ERROR"] = "3404";
	    ErrorCode["UNSPECIFIED_TWITCH_ERROR"] = "3405";
	    ErrorCode["AD_STALLED"] = "4000";
	    ErrorCode["IMA_INIT_FAILURE"] = "4100";
	    ErrorCode["IMA_AD_ERROR"] = "4101";
	    ErrorCode["DAI_DATA_ERROR"] = "4200";
	    ErrorCode["DAI_NETWORK_ERROR"] = "4201";
	    ErrorCode["AD_BLOCKING_DETECTED"] = "4300";
	    ErrorCode["UNEXPECTED_CONDITION"] = "9999";
	})(ErrorCode = exports.ErrorCode || (exports.ErrorCode = {}));

	});

	var VideoFormat_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.VideoFormat = void 0;
	var VideoFormat;
	(function (VideoFormat) {
	    VideoFormat["HLS"] = "hls";
	    VideoFormat["DASH"] = "dash";
	    VideoFormat["MP4"] = "mp4";
	    VideoFormat["UNKNOWN"] = "unknown";
	})(VideoFormat = exports.VideoFormat || (exports.VideoFormat = {}));

	});

	var Ad_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Ad = void 0;
	var Ad = (function () {
	    function Ad(adResponse, podInfo) {
	        this.data = adResponse;
	        this.podInfo = podInfo;
	    }
	    Ad.prototype.getAdId = function () {
	        return this.data.ad_id;
	    };
	    Ad.prototype.getAdPodInfo = function () {
	        return this.podInfo;
	    };
	    Ad.prototype.getAdSystem = function () {
	        return this.data.advertiser || null;
	    };
	    Ad.prototype.getAdvertiserName = function () {
	        return this.data.advertiser || null;
	    };
	    Ad.prototype.getApiFramework = function () {
	        return null;
	    };
	    Ad.prototype.getCreativeAdId = function () {
	        return this.data.creative_ad_id;
	    };
	    Ad.prototype.getCreativeId = function () {
	        return this.data.creative_id;
	    };
	    Ad.prototype.getDealId = function () {
	        return this.data.deal_id || null;
	    };
	    Ad.prototype.getDescription = function () {
	        return this.data.description;
	    };
	    Ad.prototype.getDuration = function () {
	        return this.data.duration;
	    };
	    Ad.prototype.getTitle = function () {
	        return this.data.title;
	    };
	    Ad.prototype.getDaiWrapperData = function () {
	        var adId = null;
	        var creativeId = null;
	        var creativeAdId = null;
	        if (this.data.wrappers && this.data.wrappers[0]) {
	            var w0 = this.data.wrappers[0];
	            adId = w0.ad_id;
	            creativeId = w0.creative_id;
	            creativeAdId = w0.creative_ad_id;
	        }
	        return { adId: adId, creativeId: creativeId, creativeAdId: creativeAdId };
	    };
	    Ad.prototype.getWrapperAdIds = function () {
	        return this.getWrapperPropArray('ad_id');
	    };
	    Ad.prototype.getWrapperCreativeIds = function () {
	        return this.getWrapperPropArray('creative_id');
	    };
	    Ad.prototype.getWrapperCreativeAdIds = function () {
	        return this.getWrapperPropArray('creative_ad_id');
	    };
	    Ad.prototype.getWrapperAdSystems = function () {
	        return this.getWrapperPropArray('system');
	    };
	    Ad.prototype.getCompanionAds = function () {
	        return null;
	    };
	    Ad.prototype.getWrapperPropArray = function (propName) {
	        var out = [], wrappers = this.data.wrappers || null;
	        if (!wrappers) {
	            return null;
	        }
	        var item, w;
	        for (var i = 0, n = wrappers.length; i < n; i++) {
	            w = wrappers[i];
	            item = w[propName];
	            item && item != '' && out.push(item);
	        }
	        return out;
	    };
	    return Ad;
	}());
	exports.Ad = Ad;

	});

	var AdPodInfo_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.AdPodInfo = void 0;
	var AdPodInfo = (function () {
	    function AdPodInfo(data, adPos, idx) {
	        this.data = data;
	        this.podIdx = idx;
	        this.pos = adPos;
	    }
	    AdPodInfo.prototype.getAdPosition = function () {
	        return this.pos;
	    };
	    AdPodInfo.prototype.setAdPosition = function (n) {
	        this.pos = n;
	    };
	    AdPodInfo.prototype.getMaxDuration = function () {
	        return this.data.duration;
	    };
	    AdPodInfo.prototype.getPodIndex = function () {
	        return this.podIdx;
	    };
	    AdPodInfo.prototype.setPodIndex = function (n) {
	        this.podIdx = n;
	    };
	    AdPodInfo.prototype.getTimeOffset = function () {
	        return this.data.start;
	    };
	    AdPodInfo.prototype.getTotalAds = function () {
	        return this.data.ads && this.data.ads.length;
	    };
	    return AdPodInfo;
	}());
	exports.AdPodInfo = AdPodInfo;

	});

	var StreamEvent_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.StreamEvent = void 0;


	var StreamEvent = (function (_super) {
	    tslib_es6.__extends(StreamEvent, _super);
	    function StreamEvent(type, target, streamData, ad) {
	        var _this = _super.call(this, type, null, streamData) || this;
	        _this.ad = null;
	        _this.data = streamData;
	        _this.target = target;
	        ad && (_this.ad = ad);
	        return _this;
	    }
	    Object.defineProperty(StreamEvent.prototype, "Type", {
	        get: function () {
	            return StreamEvent.Type;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    StreamEvent.prototype.getAd = function () {
	        return this.ad;
	    };
	    StreamEvent.prototype.getStreamData = function () {
	        return this.data;
	    };
	    StreamEvent.Type = {
	        LOADED: 'loaded',
	        AD_BREAK_STARTED: 'adBreakStarted',
	        AD_BREAK_ENDED: 'adBreakEnded',
	        STARTED: 'started',
	        COMPLETE: 'complete',
	        FIRST_QUARTILE: 'firstQuartile',
	        MIDPOINT: 'midpoint',
	        THIRD_QUARTILE: 'thirdQuartile',
	        AD_PERIOD_STARTED: 'adPeriodStarted',
	        AD_PERIOD_ENDED: 'adPeriodEnded',
	        CUEPOINTS_CHANGED: 'cuePointsChanged',
	        STREAM_INITIALIZED: 'streamInitialized',
	        ERROR: 'error',
	        AD_PROGRESS: 'adProgress',
	        CLICK: 'click',
	    };
	    return StreamEvent;
	}(CoreEvent_1.CoreEvent));
	exports.StreamEvent = StreamEvent;

	});

	var StreamManager_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.StreamManager = void 0;












	var StreamManager = (function (_super) {
	    tslib_es6.__extends(StreamManager, _super);
	    function StreamManager(SimpleVideoInterface, adContainer, logger) {
	        var _this = _super.call(this, null) || this;
	        _this.adBreaks = [];
	        _this.currBreak = null;
	        _this.currBreakIndex = null;
	        _this.currAd = null;
	        _this.breakStatus = {};
	        _this.breakPoints = [];
	        _this.pollId = null;
	        _this.lastRecordedTime = -1;
	        _this.currEventStatus = _this.createEventStatus();
	        _this.currBreakIndex = null;
	        _this.vidIface = SimpleVideoInterface;
	        _this.logger = logger;
	        _this.setClickElement(adContainer);
	        return _this;
	    }
	    StreamManager.prototype.addEventListener = function (name, fn) {
	        this.on(name, fn);
	    };
	    StreamManager.prototype.removeEventListener = function (name, fn) {
	        this.off(name, fn);
	    };
	    StreamManager.prototype.requestStream = function (streamReq, er) {
	        var _this = this;
	        if (er === void 0) { er = null; }
	        streamReq.adTagParameters.correlator = this.getCorrelator();
	        if (streamReq.apiKey) {
	            streamReq.adTagParameters['api-key'] = streamReq.apiKey;
	        }
	        var reqOpts = AsyncDataRequestOptions_1.AsyncDataRequestOptions.create({
	            responseType: XhrResponseType_1.XhrResponseType.JSON,
	            timeout: 3000,
	            method: 'post',
	            errorRecovery: er,
	            headers: { 'Content-Type': 'application/x-www-form-urlencoded', },
	            url: this.getUrl(streamReq.contentSourceId, streamReq.videoId, streamReq.format || 'hls'),
	            data: streamReq.adTagParameters,
	            encodeList: ['cust_params'],
	            onComplete: function (e) {
	                _this.handleStreamLoaded(e);
	            }
	        });
	        new AsyncDataRequest_1.AsyncDataRequest(reqOpts);
	    };
	    StreamManager.prototype.setClickElement = function (clickElement) {
	        var _this = this;
	        if (!clickElement)
	            return;
	        this.clickEl = clickElement || null;
	        this.clickThruHandler = function (e) { _this.hClickThru(e); };
	        this.clickEl.addEventListener('click', this.clickThruHandler);
	    };
	    StreamManager.prototype.contentTimeForStreamTime = function (streamTime) {
	        var bks = this.adBreaks;
	        var breakSum = 0, b;
	        if (streamTime == undefined) {
	            streamTime = this.streamDur;
	        }
	        for (var i = 0, n = bks.length; i < n; i++) {
	            b = bks[i];
	            if (streamTime > b.start) {
	                if (streamTime >= b.end) {
	                    breakSum += b.duration;
	                    if (i == n - 1) {
	                        return streamTime - breakSum;
	                    }
	                }
	                else {
	                    return b.start - breakSum;
	                }
	            }
	            else {
	                return streamTime - breakSum;
	            }
	        }
	        return streamTime;
	    };
	    StreamManager.prototype.streamTimeForContentTime = function (t) {
	        var bks = this.adBreaks;
	        var sum = 0, bct, b;
	        for (var i = 0, n = bks.length; i < n; i++) {
	            b = bks[i];
	            bct = this.contentTimeForStreamTime(bks[i].start);
	            if (t >= bct)
	                sum += b.duration;
	            else
	                break;
	        }
	        return t + sum;
	    };
	    StreamManager.prototype.previousCuePointForStreamTime = function (streamTime) {
	        var bks = this.adBreaks;
	        var i = bks.length, b;
	        while (i--) {
	            b = bks[i];
	            if (streamTime >= b.start) {
	                return (!b.played) ? this.cuePointFromBreak(b) : null;
	            }
	        }
	        return null;
	    };
	    StreamManager.prototype.onTimedMetadata = function (metadata) {
	        var reqOpts = AsyncDataRequestOptions_1.AsyncDataRequestOptions.create({
	            responseType: XhrResponseType_1.XhrResponseType.JSON,
	            timeout: 2000,
	            url: this.mvu + metadata.TXXX,
	            onComplete: function (e) { },
	            errorRecovery: {}
	        });
	        new AsyncDataRequest_1.AsyncDataRequest(reqOpts);
	    };
	    StreamManager.prototype.processMetadata = function (type, data, timestamp) {
	    };
	    StreamManager.prototype.reset = function () {
	        clearInterval(this.pollId);
	        this.clickEl && this.clickEl.removeEventListener('click', this.clickThruHandler);
	        this.clickEl = null;
	        this.streamId = null;
	        this.adBreaks = [];
	        this.breakPoints = [];
	        this.streamDur = NaN;
	        this.currBreak = null;
	        this.currBreakIndex = null;
	        this.currAd = null;
	        this.mvu = null;
	        this.resetUponAdComplete();
	        this.lastRecordedTime = -1;
	        this.pollId = null;
	    };
	    StreamManager.prototype.beginPoll = function () {
	        var _this = this;
	        this.pollId = setInterval(function () { _this.checkState(); }, 100);
	    };
	    StreamManager.prototype.checkState = function () {
	        var t = this.vidIface.currentTime;
	        if (!isNaN(t) && t > 0 && t > this.lastRecordedTime) {
	            if (!this.currBreak) {
	                var info = this.getBreakForStreamTime(t);
	                var k = info.break;
	                if (k && k.played) {
	                    this.emitAdPeriodStarted(k);
	                }
	                else {
	                    k && this.beginBreak(k, info.index);
	                }
	            }
	            if (this.currBreak) {
	                var ck = this.currBreak;
	                if (t >= (ck.end)) {
	                    this.monitorAdStatus(t, ck);
	                    this.endBreak();
	                }
	                else {
	                    this.monitorAdStatus(t, ck);
	                }
	            }
	        }
	        !isNaN(t) && t >= 0 && (this.lastRecordedTime = t);
	    };
	    StreamManager.prototype.monitorAdStatus = function (t, brk) {
	        var ads = brk.ads, brkSt = brk.start;
	        if (this.currAd) {
	            this.monitorCurrentAd(t);
	            return;
	        }
	        var adSt, i = ads.length;
	        while (i--) {
	            adSt = ads[i].start || 0;
	            if (t >= adSt || adSt == undefined) {
	                if (!this.breakStatus["t_" + brkSt]["t_" + adSt]) {
	                    var btl = brk.type.toLowerCase();
	                    this.currBreakIndex = btl === 'pre' ? 0 : (btl === 'mid' ? brk.index : -1);
	                    this.beginAd(ads[i], adSt);
	                    break;
	                }
	            }
	        }
	    };
	    StreamManager.prototype.monitorCurrentAd = function (t) {
	        var evts = this.currAd.events, status = this.currEventStatus;
	        var emitProg = true, i = evts.length, evt;
	        while (i--) {
	            evt = evts[i];
	            if (t >= evt.time && !status[evt.type]) {
	                status[evt.type] = true;
	                if (evt.type === 'complete' || t >= (this.currAd.start + this.currAd.duration)) {
	                    emitProg = false;
	                    this.emitAdComplete();
	                    this.resetUponAdComplete();
	                    break;
	                }
	                else if (evt.type !== 'start') {
	                    emitProg = false;
	                    this.emit(StreamManager.eventStatusMap[evt.type], this.createStreamData());
	                    break;
	                }
	            }
	        }
	        emitProg && this.emitProgress(t);
	    };
	    StreamManager.prototype.resetUponAdComplete = function () {
	        this.currEventStatus = this.createEventStatus();
	        this.currAd = null;
	    };
	    StreamManager.prototype.beginBreak = function (brk, index) {
	        this.currBreak = brk;
	        this.currBreak.played = true;
	        this.emitCues();
	        var d = this.createStreamData();
	        d.streamId = this.streamId;
	        this.emit(StreamManager.event.AD_BREAK_STARTED, d);
	    };
	    StreamManager.prototype.endBreak = function () {
	        this.emit(StreamManager.event.AD_BREAK_ENDED, this.createStreamData());
	        this.currBreak = null;
	    };
	    StreamManager.prototype.beginAd = function (ad, adSt) {
	        this.currAd = ad;
	        this.breakStatus["t_" + this.currBreak.start]["t_" + adSt] = true;
	        this.currEventStatus.start = true;
	        var sd = this.createStreamData();
	        sd.streamId = this.streamId;
	        var podInfo = new AdPodInfo_1.AdPodInfo(this.currBreak, this.currAd.seq, this.currBreakIndex), adInfo = new Ad_1.Ad(this.currAd, podInfo);
	        var e = new StreamEvent_1.StreamEvent(StreamManager.event.STARTED, this, sd, adInfo);
	        this.dispatchEvt(e);
	    };
	    StreamManager.prototype.handleStreamLoaded = function (e) {
	        if (e.data.error) {
	            var msg = "Error. Status: " + (e.data.status || 'Unknown') + "; Message: " + e.data.message;
	            this.logger.log(LogLevel_1.LogLevel.ERROR, msg);
	            this.emitError(msg, ErrorCode_1.ErrorCode.DAI_NETWORK_ERROR);
	        }
	        else {
	            this.gatherStreamInfo(e.data.response);
	            this.emitCues();
	            this.beginPoll();
	            this.emitLoaded(e.data.response);
	        }
	    };
	    StreamManager.prototype.hClickThru = function (e) {
	        if (!this.currAd) {
	            return;
	        }
	        var u = this.currAd.clickthrough_url;
	        u && u !== '' && window.open(u);
	        this.emit(StreamManager.event.CLICK);
	    };
	    StreamManager.prototype.emit = function (name, data) {
	        if (data === void 0) { data = null; }
	        var e = new StreamEvent_1.StreamEvent(name, this, data);
	        this.dispatchEvt(e);
	    };
	    StreamManager.prototype.emitCues = function () {
	        var d = this.createStreamData();
	        d.cuepoints = this.assembleCuePoints();
	        this.emit(StreamManager.event.CUEPOINTS_CHANGED, d);
	    };
	    StreamManager.prototype.emitProgress = function (t) {
	        var ap = this.createAdProgressData(t === null ? (this.currAd.start || 0) + this.currAd.duration : t), sd = this.createStreamData();
	        sd.adProgressData = ap;
	        this.emit(StreamManager.event.AD_PROGRESS, sd);
	    };
	    StreamManager.prototype.emitLoaded = function (s) {
	        var d = this.createStreamData();
	        d.stream_id = this.streamId;
	        d.subtitles = s.subtitles;
	        d.manifestFormat = this.getFormat(s.stream_manifest);
	        d.url = s.stream_manifest;
	        this.emit(StreamManager.event.LOADED, d);
	    };
	    StreamManager.prototype.emitAdComplete = function () {
	        var sd = this.createStreamData();
	        sd.streamId = this.streamId;
	        this.emitProgress(null);
	        this.emit(StreamManager.event.COMPLETE, sd);
	    };
	    StreamManager.prototype.emitError = function (msg, code) {
	        var d = this.createStreamData();
	        d.streamId = this.streamId;
	        d.errorMessage = msg;
	        d.code = code;
	        this.emit(StreamManager.event.ERROR, d);
	    };
	    StreamManager.prototype.emitAdPeriodStarted = function (k) {
	        var d = this.createStreamData();
	        d.streamResumeTime = k.start + k.duration + 0.1;
	        this.emit(StreamManager.event.AD_PERIOD_STARTED, d);
	    };
	    StreamManager.prototype.createAdProgressData = function (t) {
	        return {
	            adBreakDuration: this.currBreak.duration,
	            adPeriodDuration: null,
	            adPosition: this.currAd.seq,
	            currentTime: Util_1.Util.clampValue(t - (this.currAd.start || 0), 0, this.currAd.duration),
	            duration: this.currAd.duration,
	            totalAds: this.currBreak.ads.length
	        };
	    };
	    StreamManager.prototype.createEventStatus = function () {
	        return {
	            start: false,
	            first: false,
	            mid: false,
	            third: false,
	            complete: false
	        };
	    };
	    StreamManager.prototype.assembleCuePoints = function () {
	        var cpa = [];
	        for (var i = 0, n = this.adBreaks.length; i < n; i++) {
	            cpa.push(this.cuePointFromBreak(this.adBreaks[i]));
	        }
	        return cpa;
	    };
	    StreamManager.prototype.getBreakForStreamTime = function (t) {
	        var b;
	        for (var i = 0, n = this.adBreaks.length; i < n; i++) {
	            b = this.adBreaks[i];
	            if (t >= b.start && ((t - b.start) <= 1)) {
	                if (!this.currBreak) {
	                    return { break: b, index: i };
	                }
	            }
	        }
	        return { break: null, index: null };
	    };
	    StreamManager.prototype.getUrl = function (cid, vid, format) {
	        var u = StreamManager.DAI_BASE_URL +
	            StreamManager.STREAM_PATH
	                .replace('{format}', format)
	                .replace('{contentSourceId}', cid)
	                .replace('{daiVideoId}', vid);
	        return u;
	    };
	    StreamManager.prototype.getCorrelator = function () {
	        var n = String(Math.round(1000000000000000 + Math.random() * 9000000000000000));
	        if (n.length < 16) {
	            while (n.length < 16)
	                n += '0';
	        }
	        if (n.length > 16) {
	            n = n.substr(0, 17);
	        }
	        return n;
	    };
	    StreamManager.prototype.cuePointFromBreak = function (b) {
	        return {
	            start: b.start,
	            end: b.end,
	            played: b.played
	        };
	    };
	    StreamManager.prototype.createStreamData = function () {
	        return {
	            adProgressData: null,
	            cuepoints: null,
	            errorMessage: null,
	            streamId: this.streamId || null,
	            manifestFormat: null,
	            subtitles: null,
	            url: null
	        };
	    };
	    StreamManager.prototype.getFormat = function (u) {
	        var isHls = u.indexOf('.m3u8') >= 0, isDsh = !isHls && u.indexOf('.mpd') >= 0;
	        return isHls ? VideoFormat_1.VideoFormat.HLS : (isDsh ? VideoFormat_1.VideoFormat.DASH : VideoFormat_1.VideoFormat.UNKNOWN);
	    };
	    StreamManager.prototype.gatherBreakInfo = function (b) {
	        var nBreaks = (b && b.length) || 0;
	        var k, s, e, d;
	        var midSeq = 1;
	        for (var i = 0; i < nBreaks; i++) {
	            k = b[i];
	            s = k.start;
	            d = k.duration;
	            e = s + d;
	            this.breakPoints.push(s);
	            this.adBreaks.push({
	                duration: d,
	                start: s,
	                end: e,
	                played: false,
	                type: k.type,
	                ads: k.ads,
	                index: i,
	                seq: k.type == 'mid' ? midSeq++ : 0
	            });
	            var adStat = this.breakStatus['t_' + s] = {};
	            var ast = void 0;
	            for (var q = 0, w = k.ads.length; q < w; q++) {
	                ast = k.ads[q].start || 0;
	                adStat['t_' + ast] = false;
	            }
	        }
	    };
	    StreamManager.prototype.gatherStreamInfo = function (s) {
	        this.streamDur = s.total_duration;
	        this.mvu = s.media_verification_url;
	        this.streamId = s.stream_id;
	        this.gatherBreakInfo(s.ad_breaks);
	    };
	    StreamManager.event = {
	        LOADED: 'loaded',
	        STREAM_INITIALIZED: 'streamInitialized',
	        CUEPOINTS_CHANGED: 'cuePointsChanged',
	        AD_BREAK_STARTED: 'adBreakStarted',
	        AD_BREAK_ENDED: 'adBreakEnded',
	        STARTED: 'started',
	        COMPLETE: 'complete',
	        AD_PROGRESS: 'adProgress',
	        FIRST_QUARTILE: 'firstQuartile',
	        MIDPOINT: 'midpoint',
	        THIRD_QUARTILE: 'thirdQuartile',
	        CLICK: 'click',
	        ERROR: 'error',
	        AD_PERIOD_STARTED: 'adPeriodStarted',
	        AD_PERIOD_ENDED: 'adPeriodEnded',
	    };
	    StreamManager.eventStatusMap = {
	        start: 'started',
	        firstquartile: 'firstQuartile',
	        midpoint: 'midpoint',
	        thirdquartile: 'thirdQuartile',
	        complete: 'complete',
	    };
	    StreamManager.DAI_BASE_URL = 'https://dai.google.com';
	    StreamManager.STREAM_PATH = '/ondemand/v1/{format}/content/{contentSourceId}/vid/{daiVideoId}/stream';
	    return StreamManager;
	}(Emitter_1.Emitter));
	exports.StreamManager = StreamManager;

	});

	var VODStreamRequest_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.VODStreamRequest = void 0;

	var VODStreamRequest = (function () {
	    function VODStreamRequest(vodStrReq) {
	        this.req = {
	            apiKey: null,
	            streamActivityMonitorId: null,
	            adTagParameters: null,
	            assetKey: null,
	            format: 'hls',
	            contentSourceId: null,
	            videoId: null
	        };
	        vodStrReq && Util_1.Util.assign(this.req, vodStrReq);
	    }
	    Object.defineProperty(VODStreamRequest.prototype, "adTagParameters", {
	        get: function () {
	            return this.req.adTagParameters;
	        },
	        set: function (val) {
	            this.req.adTagParameters = val;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(VODStreamRequest.prototype, "videoId", {
	        get: function () {
	            return this.req.videoId;
	        },
	        set: function (val) {
	            this.req.videoId = val;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(VODStreamRequest.prototype, "contentSourceId", {
	        get: function () {
	            return this.req.contentSourceId;
	        },
	        set: function (val) {
	            this.req.contentSourceId = val;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(VODStreamRequest.prototype, "apiKey", {
	        get: function () {
	            return this.req.apiKey;
	        },
	        set: function (val) {
	            this.req.apiKey = val;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(VODStreamRequest.prototype, "format", {
	        get: function () {
	            return this.req.format;
	        },
	        set: function (val) {
	            this.req.format = val;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(VODStreamRequest.prototype, "assetKey", {
	        get: function () {
	            return this.req.assetKey;
	        },
	        set: function (val) {
	            this.req.assetKey = val;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(VODStreamRequest.prototype, "streamActivityMonitorId", {
	        get: function () {
	            return this.req.streamActivityMonitorId;
	        },
	        set: function (val) {
	            this.req.streamActivityMonitorId = val;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    return VODStreamRequest;
	}());
	exports.VODStreamRequest = VODStreamRequest;

	});

	var DaiProxyApi = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.DaiProxyApi = void 0;



	var se = StreamEvent_1.StreamEvent;
	var vr = VODStreamRequest_1.VODStreamRequest;
	var sm = StreamManager_1.StreamManager;
	exports.DaiProxyApi = {
	    StreamManager: sm,
	    StreamEvent: se,
	    VODStreamRequest: vr
	};

	});

	var AdContext_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.AdContext = void 0;
	var AdContext;
	(function (AdContext) {
	    AdContext["IMA"] = "ima";
	    AdContext["DAI_SDK"] = "dai_sdk";
	    AdContext["DAI_API"] = "dai_api";
	    AdContext["DAI_SSB"] = "dai_ssb";
	    AdContext["NONE"] = "";
	})(AdContext = exports.AdContext || (exports.AdContext = {}));

	});

	var ContentPlaybackStateProxy_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ContentPlaybackStateProxy = void 0;







	var ContentPlaybackStateProxy = (function (_super) {
	    tslib_es6.__extends(ContentPlaybackStateProxy, _super);
	    function ContentPlaybackStateProxy(name, data) {
	        var _this = _super.call(this, name, data) || this;
	        _this.pUserQualityCategory = null;
	        return _this;
	    }
	    ContentPlaybackStateProxy.prototype.onRegister = function () {
	        _super.prototype.onRegister.call(this);
	        var mcp = this.facade.retrieveProxy(ProxyName_1.ProxyName.ModelCollectionProxy);
	        this.contentPlaybackState = mcp.getModel(ContentPlaybackState_1.ContentPlaybackState.modelName);
	        this.contentPlaybackState.qualityInfo = {
	            mode: Playback_1.Playback.ABR_SWITCHING_MODE_AUTO,
	            quality: null,
	            qualities: []
	        };
	        this.contentPlaybackState.textTracks = {
	            track: null,
	            tracks: []
	        };
	        this.contentPlaybackState.audioTracks = {
	            track: null,
	            tracks: []
	        };
	        this.pTextTracks = {};
	    };
	    ContentPlaybackStateProxy.prototype.onRemove = function () {
	        this.contentPlaybackState = null;
	        this.pTextTracks = null;
	        this.thumbnailTrack = null;
	        _super.prototype.onRemove.call(this);
	    };
	    ContentPlaybackStateProxy.prototype.processQualityProfile = function (qualities) {
	        this.tagQualities(qualities);
	        this.contentPlaybackState.qualityInfo.qualities = qualities;
	    };
	    ContentPlaybackStateProxy.prototype.updateQualityProfile = function (minIndex, maxIndex, arr) {
	        var profile = arr.slice(minIndex, maxIndex + 1);
	        this.processQualityProfile(profile);
	    };
	    ContentPlaybackStateProxy.prototype.updateAudioTracks = function (track, tracks) {
	        var info = this.contentPlaybackState.audioTracks;
	        info.track = track;
	        if (tracks) {
	            info.tracks = tracks;
	        }
	    };
	    ContentPlaybackStateProxy.prototype.addTextTrack = function (track) {
	        var id = track.id ? track.id.toString() : Util_1.Util.uid8();
	        var tt = Object.freeze({
	            id: id,
	            language: track.language,
	            kind: track.kind,
	            label: track.label
	        });
	        this.pTextTracks[id] = track;
	        this.contentPlaybackState.textTracks.tracks.push(tt);
	    };
	    ContentPlaybackStateProxy.prototype.getTextTrackId = function (track) {
	        var id = Util_1.Util.entries(this.pTextTracks)
	            .filter(function (entry) { return entry[1] == track; })
	            .map(function (entry) { return entry[0]; });
	        return id[0];
	    };
	    ContentPlaybackStateProxy.prototype.getTextTrackById = function (id) {
	        return this.pTextTracks[id];
	    };
	    ContentPlaybackStateProxy.prototype.tagQualities = function (qia) {
	        qia.forEach(function (q) {
	            if (!q.category) {
	                q.category = ["" + String(Utils_1.Utils.getQualityCategoryForVideoHeight(q.height)), q.height + "p"];
	            }
	        });
	    };
	    ContentPlaybackStateProxy.prototype.getThumbnail = function (time) {
	        var _a;
	        return (_a = this.thumbnailTrack) === null || _a === void 0 ? void 0 : _a.getCueAt(time);
	    };
	    Object.defineProperty(ContentPlaybackStateProxy.prototype, "nativeTextTrack", {
	        get: function () {
	            return this.pTextTrack;
	        },
	        set: function (track) {
	            this.pTextTrack = track;
	            var id = this.getTextTrackId(track);
	            var tt = Util_1.Util.find(this.contentPlaybackState.textTracks.tracks, function (item) { return item.id == id; });
	            this.contentPlaybackState.textTracks.track = tt;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(ContentPlaybackStateProxy.prototype, "textTrackInfo", {
	        get: function () {
	            return this.contentPlaybackState.textTracks;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(ContentPlaybackStateProxy.prototype, "textTrack", {
	        get: function () {
	            return this.contentPlaybackState.textTracks.track;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(ContentPlaybackStateProxy.prototype, "isAbrSwitchingAvailable", {
	        get: function () {
	            return this.manifestQualities ? this.manifestQualities.length > 1 : false;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(ContentPlaybackStateProxy.prototype, "userQualityCategory", {
	        get: function () {
	            return this.pUserQualityCategory;
	        },
	        set: function (q) {
	            this.pUserQualityCategory = q;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(ContentPlaybackStateProxy.prototype, "qualitySwitchingMode", {
	        get: function () {
	            return this.contentPlaybackState.qualityInfo.mode;
	        },
	        set: function (mode) {
	            this.contentPlaybackState.qualityInfo.mode = mode;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(ContentPlaybackStateProxy.prototype, "manifestQualities", {
	        get: function () {
	            return this.contentPlaybackState.manifestQualities;
	        },
	        set: function (value) {
	            this.contentPlaybackState.manifestQualities = value;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(ContentPlaybackStateProxy.prototype, "maxBandwidth", {
	        set: function (value) {
	            this.contentPlaybackState.maxBandwidth = isNaN(this.contentPlaybackState.maxBandwidth)
	                ? value : Math.max(value, this.contentPlaybackState.maxBandwidth);
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(ContentPlaybackStateProxy.prototype, "model", {
	        get: function () {
	            return this.contentPlaybackState;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(ContentPlaybackStateProxy.prototype, "minIndex", {
	        get: function () {
	            return 0;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(ContentPlaybackStateProxy.prototype, "maxIndex", {
	        get: function () {
	            var qualities = this.contentPlaybackState.qualityInfo.qualities;
	            return (qualities) ? this.contentPlaybackState.qualityInfo.qualities.length - 1 : 0;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(ContentPlaybackStateProxy.prototype, "minBitrate", {
	        get: function () {
	            return this.contentPlaybackState.qualityInfo.qualities[this.minIndex].bitrate;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(ContentPlaybackStateProxy.prototype, "maxBitrate", {
	        get: function () {
	            return this.contentPlaybackState.qualityInfo.qualities[this.maxIndex].bitrate;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(ContentPlaybackStateProxy.prototype, "qualityInfo", {
	        get: function () {
	            return this.contentPlaybackState.qualityInfo;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(ContentPlaybackStateProxy.prototype, "quality", {
	        set: function (value) {
	            this.contentPlaybackState.qualityInfo.quality = value;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    return ContentPlaybackStateProxy;
	}(_Proxy.Proxy));
	exports.ContentPlaybackStateProxy = ContentPlaybackStateProxy;

	});

	var MoatTracker_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.MoatTracker = void 0;
	var MoatTracker = (function () {
	    function MoatTracker() {
	        this.MOAT_PARTNER_CODE = 'cbsiimajsint708425247896';
	        this.adContextToVpaidEventMap = {
	            ima: {
	                start: 'AdVideoStart',
	                firstquartile: 'AdVideoFirstQuartile',
	                midpoint: 'AdVideoMidpoint',
	                thirdquartile: 'AdVideoThirdQuartile',
	                complete: 'AdVideoComplete',
	                pause: 'AdPaused',
	                resume: 'AdPlaying',
	                skip: 'AdSkipped',
	                volumechange: 'AdVolumeChange',
	                mute: 'AdVolumeChange'
	            },
	            dai_sdk: {
	                started: 'AdVideoStart',
	                firstquartile: 'AdVideoFirstQuartile',
	                midpoint: 'AdVideoMidpoint',
	                thirdquartile: 'AdVideoThirdQuartile',
	                complete: 'AdVideoComplete',
	                controlpause: 'AdPaused',
	                controlplay: 'AdPlaying',
	                controlvolumeset: 'AdVolumeChange',
	                controlmute: 'AdVolumeChange',
	                controlunmute: 'AdVolumeChange'
	            }
	        };
	    }
	    MoatTracker.prototype.destroy = function () {
	        this.adContextToVpaidEventMap = null;
	        this.trackingObj = null;
	    };
	    MoatTracker.prototype.track = function (info) {
	        var context = info.context, adData = info.adInfo;
	        var ids = {
	            level1: '',
	            level2: '',
	            level3: adData.wrapperAdId,
	            level4: adData.wrapperCreativeId,
	            slicer1: 'vaw-can',
	            slicer2: info.partner,
	            slicer3: info.pageType,
	            moatVASTSystem: context,
	            moatVASTAdID: adData.wrapperAdId,
	        };
	        info.viewGuid !== '' && (ids.zMoatVGUID = info.viewGuid);
	        info.pageType !== '' && (ids.zMoatPT = info.pageType);
	        this.initMoat(info.adVideoContainer, ids, adData.adDuration, this.MOAT_PARTNER_CODE, null);
	    };
	    MoatTracker.prototype.untrack = function () {
	        this.trackingObj = null;
	    };
	    MoatTracker.prototype.trackEvent = function (data) {
	        var vpEvt = this.adContextToVpaidEventMap[data.context][data.eventName.toLowerCase()];
	        if (!vpEvt || !this.trackingObj) {
	            return;
	        }
	        this.trackingObj.dispatchEvent({
	            type: vpEvt,
	            adVolume: data.volume
	        });
	    };
	    MoatTracker.prototype.initMoat = function (c, d, e, k, l) {
	        if (l === void 0) { l = null; }
	        var g = document.createElement('script');
	        var a = [];
	        var f, h, sfx;
	        var q = {
	            adData: { ids: d, duration: e, url: l },
	            dispatchEvent: function (b) {
	                this.sendEvent ? (a && (a.push(b), b = a, a = !1), this.sendEvent(b)) : a.push(b);
	            }
	        };
	        sfx = '_moatApi' + Math.floor(1E8 * Math.random());
	        try {
	            f = c.ownerDocument;
	            h = f.defaultView || f.parentWindow;
	        }
	        catch (b) {
	            h = window;
	        }
	        h[sfx] = q;
	        g.type = 'text/javascript';
	        c && c.insertBefore(g, c.childNodes[0] || null);
	        g.src = 'https://z.moatads.com/' + k + '/moatvideo.js#' + sfx;
	        this.trackingObj = q;
	    };
	    return MoatTracker;
	}());
	exports.MoatTracker = MoatTracker;

	});

	var GamAdService_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.GamAdService = void 0;






	var GamAdService = (function (_super) {
	    tslib_es6.__extends(GamAdService, _super);
	    function GamAdService(name, adContext) {
	        var _this = _super.call(this, name) || this;
	        _this.adContext = adContext;
	        return _this;
	    }
	    GamAdService.prototype.destroy = function () {
	        this.moatTracker && this.moatTracker.destroy();
	        this.moatTracker = null;
	        this.adContainer = null;
	        this.trackingData = null;
	        _super.prototype.destroy.call(this);
	    };
	    GamAdService.prototype.getGamPlatformString = function () {
	        var sys = this.getService(ServiceName_1.ServiceName.System);
	        return sys.isDesktop ? 'desktop' : 'mobile_web';
	    };
	    GamAdService.prototype.setTrackingData = function (obj) {
	        this.trackingData = obj;
	    };
	    GamAdService.prototype.getAdContext = function () {
	        return this.adContext;
	    };
	    GamAdService.prototype.setContainer = function (el) {
	        this.adContainer = el;
	    };
	    GamAdService.prototype.getAdBreakTypeFromPodIndex = function (idx) {
	        return idx === 0 ? AdBreakType_1.AdBreakType.PRE : idx === -1 ? AdBreakType_1.AdBreakType.POST : AdBreakType_1.AdBreakType.MID;
	    };
	    GamAdService.prototype.assembleAdBreakInfo = function (ad) {
	        var pi = ad.getAdPodInfo(), idx = pi.getPodIndex();
	        return {
	            adBreakDuration: pi.getMaxDuration(),
	            adBreakPosition: idx,
	            adTotal: pi.getTotalAds(),
	            adBreakType: this.getAdBreakTypeFromPodIndex(idx),
	            adServerName: this.adContext
	        };
	    };
	    GamAdService.prototype.assembleAdInfo = function (ad, adData) {
	        var podInfo = ad.getAdPodInfo(), adPos = (podInfo && podInfo.getAdPosition()) || -1, idInfo = this.getIdInfo(ad), isIma = this.adContext === AdContext_1.AdContext.IMA;
	        return {
	            adServerName: this.adContext,
	            adDuration: ad.getDuration(),
	            adTitle: ad.getTitle(),
	            adId: idInfo.adId,
	            adPosition: adPos,
	            adAssetUrl: isIma ? ad.getMediaUrl() : (adData.mediaUrl || null),
	            isVpaid: isIma ? this.getIsVpaid(ad) : null,
	            wrapperAdId: idInfo.wrapperAdId,
	            creativeId: idInfo.creativeId,
	            wrapperCreativeId: idInfo.wrapperCreativeId,
	            vastMediaHeight: isIma ? ad.getVastMediaHeight() : null,
	            vastMediaWidth: isIma ? ad.getVastMediaWidth() : null,
	            vastMediaBitrate: isIma ? ad.getVastMediaBitrate() : null
	        };
	    };
	    GamAdService.prototype.trackAd = function (adInfo) {
	        var td = this.trackingData;
	        this.moatTracker.track({
	            viewGuid: td.vguid,
	            pageType: td.ptype,
	            adInfo: adInfo,
	            adVideoContainer: this.adContainer,
	            context: this.adContext,
	            partner: td.partner
	        });
	    };
	    GamAdService.prototype.trackAdEvent = function (obj) {
	        this.moatTracker.trackEvent(obj);
	    };
	    GamAdService.prototype.untrackAd = function () {
	        this.moatTracker.untrack();
	    };
	    GamAdService.prototype.createViewabilityTracker = function () {
	        this.moatTracker = new MoatTracker_1.MoatTracker();
	    };
	    GamAdService.prototype.getIdInfo = function (ad) {
	        var w = this.getWrapperId(ad), c = this.getCreativeId(ad);
	        return {
	            adId: w.adId,
	            wrapperAdId: w.wrapperAdId,
	            creativeId: c.creativeId,
	            wrapperCreativeId: c.wrapperCreativeId,
	            adServerName: AdContext_1.AdContext.IMA,
	            adDuration: ad.getDuration()
	        };
	    };
	    GamAdService.prototype.getWrapperId = function (ad) {
	        var ids = ad.getWrapperAdIds(), len = Array.isArray(ids) && ids.length, defId = ad.getAdId() || '';
	        return {
	            adId: (len && len > 1) ? ids[0] : defId,
	            wrapperAdId: (len && len > 1) ? ids[1] : ''
	        };
	    };
	    GamAdService.prototype.getCreativeId = function (ad) {
	        var ids = ad.getWrapperCreativeIds(), len = Array.isArray(ids) && ids.length, defId = ad.getCreativeId() || null;
	        return {
	            creativeId: (len && len > 1) ? ids[0] : defId,
	            wrapperCreativeId: (len && len > 1) ? ids[1] : null
	        };
	    };
	    GamAdService.prototype.getIsVpaid = function (ad) {
	        return ad.getContentType() === 'application/javascript';
	    };
	    return GamAdService;
	}(ServiceBase_1.ServiceBase));
	exports.GamAdService = GamAdService;

	});

	var DaiAdService_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.DaiAdService = void 0;




	var DaiAdService = (function (_super) {
	    tslib_es6.__extends(DaiAdService, _super);
	    function DaiAdService(name, sdk) {
	        var _this = _super.call(this, name, sdk ? AdContext_1.AdContext.DAI_API : AdContext_1.AdContext.DAI_SDK) || this;
	        _this.pSdk = null;
	        _this.usesApi = false;
	        _this.videoIface = null;
	        if (sdk) {
	            _this.pSdk = sdk;
	            _this.usesApi = true;
	        }
	        return _this;
	    }
	    DaiAdService.prototype.destroy = function () {
	        this.streamMgr && this.streamMgr.reset();
	        this.streamMgr = null;
	        this.pSdk = null;
	        this.videoIface = null;
	        _super.prototype.destroy.call(this);
	    };
	    DaiAdService.prototype.initViewabilityTracking = function () {
	        this.createViewabilityTracker();
	    };
	    Object.defineProperty(DaiAdService.prototype, "videoInterface", {
	        get: function () {
	            return this.videoIface;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(DaiAdService.prototype, "usesDaiApi", {
	        get: function () {
	            return this.usesApi;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(DaiAdService.prototype, "sdk", {
	        get: function () {
	            if (!this.pSdk) {
	                var sysSvc = this.getService(ServiceName_1.ServiceName.System), global = sysSvc.global;
	                if (global &&
	                    global.google &&
	                    global.google.ima &&
	                    global.google.ima.dai) {
	                    this.pSdk = global.google.ima.dai.api;
	                }
	            }
	            return this.pSdk;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    DaiAdService.prototype.setVideoInterface = function (obj) {
	        this.videoIface = obj;
	    };
	    DaiAdService.prototype.setVolume = function (v) {
	        this.usesApi && (this.videoIface.volume = v);
	    };
	    DaiAdService.prototype.setMuted = function (flag) {
	        this.usesApi && (this.videoIface.muted = flag);
	    };
	    DaiAdService.prototype.setDuration = function (d) {
	        this.usesApi && (this.videoIface.duration = d);
	    };
	    DaiAdService.prototype.setCurrentTime = function (t) {
	        this.usesApi && (this.videoIface.currentTime = t);
	    };
	    DaiAdService.prototype.reset = function () {
	        this.streamMgr.reset();
	        if (this.usesApi) {
	            this.videoIface.duration = NaN;
	            this.videoIface.currentTime = NaN;
	        }
	    };
	    DaiAdService.prototype.assembleAdInfo = function (ad, adData) {
	        if (this.adContext === AdContext_1.AdContext.DAI_SDK) {
	            return _super.prototype.assembleAdInfo.call(this, ad, adData);
	        }
	        var podInfo = ad.getAdPodInfo();
	        var adPos = (podInfo && podInfo.getAdPosition()) || -1;
	        var _a = ad.getDaiWrapperData(), adId = _a.adId, creativeId = _a.creativeId;
	        return {
	            adServerName: this.adContext,
	            adDuration: ad.getDuration(),
	            adTitle: ad.getTitle(),
	            adId: adId,
	            adPosition: adPos,
	            adAssetUrl: adData.mediaUrl || null,
	            isVpaid: false,
	            wrapperAdId: adId,
	            creativeId: creativeId,
	            wrapperCreativeId: creativeId,
	            vastMediaHeight: null,
	            vastMediaWidth: null,
	            vastMediaBitrate: null
	        };
	    };
	    DaiAdService.prototype.getStreamManager = function () {
	        if (!this.streamMgr && this.sdk) {
	            if (this.usesApi) {
	                this.streamMgr = new this.sdk.StreamManager(this.videoIface, this.adContainer, this.getLogger());
	            }
	            else {
	                this.streamMgr = new this.sdk.StreamManager(this.videoIface, this.adContainer);
	            }
	        }
	        return this.streamMgr;
	    };
	    return DaiAdService;
	}(GamAdService_1.GamAdService));
	exports.DaiAdService = DaiAdService;

	});

	var ImaAdsLoader_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ImaAdsLoader = void 0;


	var ImaAdsLoader = (function (_super) {
	    tslib_es6.__extends(ImaAdsLoader, _super);
	    function ImaAdsLoader(options) {
	        var _this = _super.call(this, options) || this;
	        _this.eMap = {
	            errorHandler: null,
	            adsMgrLoadedHandler: null
	        };
	        _this.initialized = false;
	        _this.adService = _this.opts.adService;
	        _this.sdk = _this.adService.sdk;
	        _this.eMap.errorHandler = function (e) { return _this.hError(e); };
	        _this.eMap.adsMgrLoadedHandler = function (e) { return _this.hAdsMgrLoaded(e); };
	        return _this;
	    }
	    ImaAdsLoader.prototype.destroy = function () {
	        if (this.adsLoader) {
	            this.adsLoader.removeEventListener(this.sdk.AdErrorEvent.Type.AD_ERROR, this.eMap.errorHandler);
	            this.adsLoader.removeEventListener(this.sdk.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, this.eMap.adsMgrLoadedHandler);
	        }
	        this.adsLoader.destroy();
	        this.adsLoader = null;
	        this.adService = null;
	        this.sdk = null;
	        _super.prototype.destroy.call(this);
	    };
	    ImaAdsLoader.prototype.initialize = function () {
	        var o = this.opts, sdk = this.sdk;
	        if (!sdk || !sdk.AdsLoader) {
	            return false;
	        }
	        if (this.initialized) {
	            return true;
	        }
	        var adc = new sdk.AdDisplayContainer(o.adContainer, o.video, o.adClickEl);
	        adc.initialize();
	        this.adsLoader = new sdk.AdsLoader(adc);
	        var imaSettings = this.adsLoader.getSettings();
	        this.populateSdkSettings(imaSettings);
	        this.adsLoader.addEventListener(sdk.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, this.eMap.adsMgrLoadedHandler);
	        this.adsLoader.addEventListener(sdk.AdErrorEvent.Type.AD_ERROR, this.eMap.errorHandler);
	        this.initialized = true;
	        return true;
	    };
	    ImaAdsLoader.prototype.requestAds = function (adsRequest, userRequestContext) {
	        this.adsLoader && this.adsLoader.requestAds(adsRequest);
	    };
	    ImaAdsLoader.prototype.contentComplete = function () {
	        this.adsLoader && this.adsLoader.contentComplete();
	    };
	    ImaAdsLoader.prototype.getSettings = function () {
	        return this.adsLoader ? this.adsLoader.getSettings() : null;
	    };
	    ImaAdsLoader.prototype.hAdsMgrLoaded = function (e) {
	        this.emit(ImaAdsLoader.event.ADS_MANAGER_LOADED, e);
	    };
	    ImaAdsLoader.prototype.hError = function (e) {
	        var adErrorInfo = this.parseAdErrorEvent(e);
	        this.emit(ImaAdsLoader.event.ADS_LOADER_ERROR, adErrorInfo);
	    };
	    ImaAdsLoader.prototype.parseAdErrorEvent = function (e) {
	        return this.adService.parseAdError(e);
	    };
	    ImaAdsLoader.prototype.populateSdkSettings = function (settings) {
	        var cbsImaSettings = this.opts.sdkSettings, vpaidMode = this.sdk.ImaSdkSettings.VpaidMode[cbsImaSettings.vpaidMode];
	        settings.setVpaidMode(vpaidMode);
	        settings.setDisableCustomPlaybackForIOS10Plus(cbsImaSettings.disableCustomPlaybackForIOS10Plus);
	        settings.setPlayerType(cbsImaSettings.playerType);
	        settings.setPlayerVersion(cbsImaSettings.playerVersion);
	    };
	    ImaAdsLoader.event = {
	        ADS_MANAGER_LOADED: 'adsManagerLoaded',
	        ADS_LOADER_ERROR: 'adsLoaderError'
	    };
	    return ImaAdsLoader;
	}(Emitter_1.Emitter));
	exports.ImaAdsLoader = ImaAdsLoader;

	});

	var ImaVpaidMode_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ImaVpaidMode = void 0;
	var ImaVpaidMode;
	(function (ImaVpaidMode) {
	    ImaVpaidMode["DISABLED"] = "DISABLED";
	    ImaVpaidMode["ENABLED"] = "ENABLED";
	    ImaVpaidMode["INSECURE"] = "INSECURE";
	})(ImaVpaidMode = exports.ImaVpaidMode || (exports.ImaVpaidMode = {}));

	});

	var ImaAdService_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ImaAdService = void 0;







	var ImaAdService = (function (_super) {
	    tslib_es6.__extends(ImaAdService, _super);
	    function ImaAdService(name) {
	        return _super.call(this, name, AdContext_1.AdContext.IMA) || this;
	    }
	    ImaAdService.prototype.destroy = function () {
	        this.pAdsLoader && this.pAdsLoader.destroy();
	        this.pAdsLoader = null;
	        this.pAdsLoaderOptions = null;
	        _super.prototype.destroy.call(this);
	    };
	    Object.defineProperty(ImaAdService.prototype, "sdk", {
	        get: function () {
	            var sysSvc = this.getService(ServiceName_1.ServiceName.System), global = sysSvc.global;
	            return (global && global.google && global.google.ima) || null;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(ImaAdService.prototype, "sdkSettings", {
	        get: function () {
	            var biSvc = (this.getService(ServiceName_1.ServiceName.BuildInfo)), bi = biSvc;
	            return {
	                vpaidMode: ImaVpaidMode_1.ImaVpaidMode.INSECURE,
	                disableCustomPlaybackForIOS10Plus: false,
	                playerType: bi.playerName,
	                playerVersion: bi.playerVersion
	            };
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(ImaAdService.prototype, "defaultRenderingSettings", {
	        get: function () {
	            return {
	                bitrate: 900,
	                enablePreloading: false,
	                loadVideoTimeout: -1,
	                playAdsAfterTime: undefined,
	                restoreCustomPlaybackStateOnAdBreakComplete: false
	            };
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(ImaAdService.prototype, "adsLoaderOptions", {
	        set: function (options) {
	            this.pAdsLoaderOptions = options;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(ImaAdService.prototype, "adsLoader", {
	        get: function () {
	            return this.pAdsLoader;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    ImaAdService.prototype.createAdsLoader = function () {
	        if (!this.pAdsLoader) {
	            this.pAdsLoader = new ImaAdsLoader_1.ImaAdsLoader(this.pAdsLoaderOptions);
	        }
	    };
	    ImaAdService.prototype.initializeAdsLoader = function () {
	        this.createViewabilityTracker();
	        return this.pAdsLoader.initialize();
	    };
	    ImaAdService.prototype.parseAdError = function (e) {
	        var err = e.getError(), reqCtx = e.getUserRequestContext(), inner = err.getInnerError();
	        return {
	            type: this.getAdErrorType(err),
	            errorCode: err.getErrorCode(),
	            vastErrorCode: err.getVastErrorCode(),
	            message: err.getMessage(),
	            innerErrorMessage: Util_1.Util.isString(inner) ? inner : null,
	            sdkVersion: this.sdk.VERSION,
	            requestContext: reqCtx || null
	        };
	    };
	    ImaAdService.prototype.getAdErrorType = function (err) {
	        var t = err.getType();
	        return t == this.sdk.AdError.Type.AD_LOAD ? 'adLoad' : 'adPlay';
	    };
	    return ImaAdService;
	}(GamAdService_1.GamAdService));
	exports.ImaAdService = ImaAdService;

	});

	var ExtLibEndpoint_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ExtLibEndpoint = void 0;
	var ExtLibEndpoint;
	(function (ExtLibEndpoint) {
	    ExtLibEndpoint["DASHJS_GZIP_CDN"] = "//vidtech.cbsinteractive.com/cvp/lib/dashjs/{{VERSION}}/dash.all.min.js";
	    ExtLibEndpoint["HLSJS_GZIP_CDN"] = "//cdnjs.cloudflare.com/ajax/libs/hls.js/{{VERSION}}/hls.min.js";
	    ExtLibEndpoint["SHAKA_GZIP_CDN"] = "//vidtech.cbsinteractive.com/cvp/lib/shaka/{{VERSION}}/shaka-player.compiled{{DEBUG}}.js";
	    ExtLibEndpoint["TWITCH_GZIP_CDN"] = "//player.live-video.net/{{VERSION}}/mediaplayer.min.js";
	})(ExtLibEndpoint = exports.ExtLibEndpoint || (exports.ExtLibEndpoint = {}));

	});

	var PlaybackAdapterType_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.PlaybackAdapterType = void 0;
	var PlaybackAdapterType;
	(function (PlaybackAdapterType) {
	    PlaybackAdapterType["HLSJS"] = "hlsjs";
	    PlaybackAdapterType["DASHJS"] = "dashjs";
	    PlaybackAdapterType["SHAKA"] = "shaka";
	    PlaybackAdapterType["HTML5"] = "html5";
	    PlaybackAdapterType["PLAY_STATION"] = "playStation";
	    PlaybackAdapterType["TWITCH_LOW_LATENCY"] = "twitchLowLatency";
	    PlaybackAdapterType["UNKNOWN"] = "unknown";
	})(PlaybackAdapterType = exports.PlaybackAdapterType || (exports.PlaybackAdapterType = {}));

	});

	var StreamingLibraryVersion_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.StreamingLibraryVersion = void 0;
	var StreamingLibraryVersion;
	(function (StreamingLibraryVersion) {
	    StreamingLibraryVersion["DASHJS"] = "2.9.3-cvp.0.9.3";
	    StreamingLibraryVersion["HLSJS"] = "0.14.8";
	    StreamingLibraryVersion["SHAKA"] = "2.5.14";
	    StreamingLibraryVersion["TWITCH"] = "1.0.0-beta";
	})(StreamingLibraryVersion = exports.StreamingLibraryVersion || (exports.StreamingLibraryVersion = {}));

	});

	var TextTrackSurfaceEvents_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.TextTrackSurfaceEvents = void 0;
	var TextTrackSurfaceEvents;
	(function (TextTrackSurfaceEvents) {
	    TextTrackSurfaceEvents["METADATA_CUEPOINT"] = "metadataCuepoint";
	    TextTrackSurfaceEvents["TEXT_CUEPOINT"] = "textCuepoint";
	    TextTrackSurfaceEvents["TEXT_TRACK_DISPLAY_MODE_CHANGE"] = "textTrackModeChange";
	    TextTrackSurfaceEvents["TEXT_TRACK_ADDED"] = "textTrackAdded";
	    TextTrackSurfaceEvents["TEXT_TRACK_CHANGE"] = "textTrackChange";
	    TextTrackSurfaceEvents["TEXT_TRACK_AVAILABLE"] = "textTrackAvailable";
	})(TextTrackSurfaceEvents = exports.TextTrackSurfaceEvents || (exports.TextTrackSurfaceEvents = {}));

	});

	var VideoSurfaceEvents_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.VideoSurfaceEvents = void 0;
	var VideoSurfaceEvents;
	(function (VideoSurfaceEvents) {
	    VideoSurfaceEvents["ABORT"] = "abort";
	    VideoSurfaceEvents["CAN_PLAY"] = "canplay";
	    VideoSurfaceEvents["CAN_PLAY_THROUGH"] = "canplaythrough";
	    VideoSurfaceEvents["DURATION_CHANGE"] = "durationchange";
	    VideoSurfaceEvents["ENDED"] = "ended";
	    VideoSurfaceEvents["ERROR"] = "error";
	    VideoSurfaceEvents["LOADED_METADATA"] = "loadedmetadata";
	    VideoSurfaceEvents["LOAD_START"] = "loadstart";
	    VideoSurfaceEvents["PAUSE"] = "pause";
	    VideoSurfaceEvents["PLAY"] = "play";
	    VideoSurfaceEvents["PLAYING"] = "playing";
	    VideoSurfaceEvents["PROGRESS"] = "progress";
	    VideoSurfaceEvents["RATE_CHANGE"] = "ratechange";
	    VideoSurfaceEvents["SEEKED"] = "seeked";
	    VideoSurfaceEvents["SEEKING"] = "seeking";
	    VideoSurfaceEvents["STALLED"] = "stalled";
	    VideoSurfaceEvents["TIME_UPDATE"] = "timeupdate";
	    VideoSurfaceEvents["WEBKIT_NEED_KEY"] = "webkitneedkey";
	    VideoSurfaceEvents["VOLUME_CHANGE"] = "volumechange";
	})(VideoSurfaceEvents = exports.VideoSurfaceEvents || (exports.VideoSurfaceEvents = {}));

	});

	var TextTrackEvents_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.TextTrackEvents = void 0;
	var TextTrackEvents;
	(function (TextTrackEvents) {
	    TextTrackEvents["CUE_CHANGE"] = "cuechange";
	    TextTrackEvents["ADD_TRACK"] = "addtrack";
	    TextTrackEvents["CHANGE"] = "change";
	})(TextTrackEvents = exports.TextTrackEvents || (exports.TextTrackEvents = {}));

	});

	var TextTrackType_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.TextTrackType = void 0;
	var TextTrackType;
	(function (TextTrackType) {
	    TextTrackType["SUBTITLES"] = "subtitles";
	    TextTrackType["CAPTIONS"] = "captions";
	    TextTrackType["METADATA"] = "metadata";
	    TextTrackType["DESCRIPTIONS"] = "descriptions";
	    TextTrackType["CHAPTERS"] = "chapters";
	})(TextTrackType = exports.TextTrackType || (exports.TextTrackType = {}));

	});

	var SmpteToVttCueConverter_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.SmpteToVttCueConverter = void 0;





	var SmpteToVttCueConverter = (function () {
	    function SmpteToVttCueConverter(url, system) {
	        this.url = url;
	        this.system = system;
	        this.isVTTCueSupported = this.system.global.VTTCue !== undefined;
	    }
	    SmpteToVttCueConverter.prototype.convert = function () {
	        var _this = this;
	        return new Promise(function (resolve, reject) {
	            _this.loadXml(_this.url).then(function (result) {
	                var json = Util_1.Util.xmlToJson(result), smpteCues = json.tt.body.div.p;
	                if (smpteCues && smpteCues.length > 0) {
	                    var vttCues = _this.convertToVTTCues(smpteCues);
	                    return resolve(vttCues);
	                }
	                return reject(null);
	            }).catch(function (err) {
	                return reject(null);
	            });
	        });
	    };
	    SmpteToVttCueConverter.prototype.loadXml = function (url) {
	        return new Promise(function (resolve, reject) {
	            new AsyncDataRequest_1.AsyncDataRequest(AsyncDataRequestOptions_1.AsyncDataRequestOptions.create({
	                url: url,
	                method: 'GET',
	                responseType: XhrResponseType_1.XhrResponseType.DOCUMENT,
	                onComplete: function (e) {
	                    if (e.data.error) {
	                        return reject(null);
	                    }
	                    return resolve(e.data.response);
	                },
	                errorRecovery: {}
	            }));
	        });
	    };
	    SmpteToVttCueConverter.prototype.convertToVTTCues = function (cues) {
	        var list = [];
	        for (var i = 0, len = cues.length; i < len; i++) {
	            var item = cues[i];
	            var text = item.text;
	            if (Util_1.Util.isEmpty(text)) {
	                continue;
	            }
	            text = text.replace(/(.*)<span.*tts:fontStyle="italic">(.*)<\/span>(.*)/g, '$1<i>$2</i>$3');
	            text = text.replace(/(.*)<span.*tts:fontWeight="bold">(.*)<\/span>(.*)/g, '$1<b>$2</b>$3');
	            text = text.replace(/(.*)<span.*tts:textDecoration="under">(.*)<\/span>(.*)/g, '$1<u>$2</u>$3');
	            var lc = Util_1.Util.getNumLines(text);
	            item._lineCountPrev = item._lineCountPrev || 0;
	            item._lineCountNext = item._lineCountNext || 0;
	            var n = i + 1;
	            var nextItem = cues[n];
	            while ((nextItem && nextItem.begin) === item.begin) {
	                nextItem._lineCountPrev = lc + item._lineCountNext;
	                item._lineCountNext += Util_1.Util.getNumLines(nextItem.text);
	                nextItem = cues[++n];
	            }
	            var Cue = this.isVTTCueSupported ? this.system.global.VTTCue : this.system.global.TextTrackCue;
	            var newCue = new Cue(Util_1.Util.hmsToSec(item.begin), Util_1.Util.hmsToSec(item.end), text);
	            if (this.isVTTCueSupported) {
	                newCue = this.metadataToPosition(item, newCue);
	            }
	            list.push(newCue);
	        }
	        return list;
	    };
	    SmpteToVttCueConverter.prototype.metadataToPosition = function (item, cue) {
	        var metadata = item.metadata;
	        if (metadata) {
	            cue.snapToLines = true;
	            var xpos = Math.round(metadata.cccol / 35 * 100);
	            cue.position = xpos;
	            try {
	                cue.align = xpos < 45 ? 'start' : xpos > 55 ? 'end' : this.getAlignString();
	            }
	            catch (e) {
	                cue.align = 'center';
	            }
	            cue.positionAlign = xpos < 45 ? 'line-left' : xpos > 55 ? 'line-right' : 'center';
	            cue.line = metadata.ccrow - 17 + this.getLineOffset();
	        }
	        return cue;
	    };
	    SmpteToVttCueConverter.prototype.getAlignString = function () {
	        return this.system.browser === Browser_1.Browser.SAFARI ? 'middle' : 'center';
	    };
	    SmpteToVttCueConverter.prototype.getLineOffset = function () {
	        return this.system.browser === Browser_1.Browser.SAFARI ? -1 : 0;
	    };
	    return SmpteToVttCueConverter;
	}());
	exports.SmpteToVttCueConverter = SmpteToVttCueConverter;

	});

	var TextTrackSurface_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.TextTrackSurface = void 0;









	var TextTrackSurface = (function (_super) {
	    tslib_es6.__extends(TextTrackSurface, _super);
	    function TextTrackSurface(video, config, logger) {
	        var _this = _super.call(this) || this;
	        _this.pTextTracks = null;
	        _this.currentTextTrack = null;
	        _this.currentTextTrackMode = TextTrackMode_1.TextTrackMode.DISABLED;
	        _this.allowTextTrackCueDispatch = true;
	        _this.existingTrack = [];
	        _this.onTextTrackAddedHandler = function (e) { return _this.onTextTrackAdded(e); };
	        _this.onVideoTextTrackAddedHandler = function (e) { return _this.onVideoTextTrackAdded(e); };
	        _this.onTextTrackChangeHandler = function (e) { return _this.onTextTrackChange(e); };
	        _this.onCueChangeHandler = function (e) { return _this.onCueChange(e); };
	        _this.system = config.system;
	        _this.config = config;
	        _this.video = video;
	        _this.pTextTracks = video.textTracks;
	        _this.currentTextTrackMode = config.textTrackSettings.mode;
	        _this.allowTextTrackCueDispatch = !config.textTrackSettings.native;
	        _this.processTracks = Util_1.Util.debounce(_this.processTracks.bind(_this), 100);
	        _this.addTracks = Util_1.Util.debounce(_this.addTracks.bind(_this), 25);
	        _this.addEvents();
	        _this.logger = logger;
	        _this.logger.log(LogLevel_1.LogLevel.INFO, 'TextTrackSurface created');
	        return _this;
	    }
	    TextTrackSurface.prototype.destroy = function () {
	        var _this = this;
	        this.removeEvents();
	        Util_1.Util.forEach(this.pTextTracks, function (t) { return _this.cleanupTrack(t); });
	        Util_1.Util.forEach(this.video.querySelectorAll('track'), function (element) { return _this.video.removeChild(element); });
	        _super.prototype.destroy.call(this);
	    };
	    TextTrackSurface.prototype.cleanupTrack = function (track) {
	        Util_1.Util.forEach(track.cues, function (cue) { return cue && track.removeCue(cue); });
	        Util_1.Util.forEach(track.activeCues, function (cue) {
	            try {
	                cue && track.removeCue(cue);
	            }
	            catch (error) {
	            }
	        });
	        track.expired = true;
	        if (this.isTextTrack(track.kind)) {
	            track.textTrack1 = true;
	            track.textTrack2 = true;
	            track.isTTML = true;
	            track.isEmbedded = false;
	        }
	        track.mode = TextTrackMode_1.TextTrackMode.DISABLED;
	    };
	    Object.defineProperty(TextTrackSurface.prototype, "timeTextSrc", {
	        set: function (url) {
	            var isVtt = url.indexOf('.vtt') >= 0;
	            if (isVtt) {
	                this.createVttTextTrack(this.video, url);
	            }
	            else {
	                this.processSmpteTimedText(url);
	            }
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(TextTrackSurface.prototype, "textTrackMode", {
	        set: function (mode) {
	            if (this.currentTextTrack) {
	                this.setTrackMode(mode);
	            }
	            else {
	                this.logger.log(LogLevel_1.LogLevel.WARN, "No text track detected");
	            }
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(TextTrackSurface.prototype, "textTrack", {
	        get: function () {
	            return this.currentTextTrack;
	        },
	        set: function (newTrack) {
	            var _this = this;
	            if (!this.isValidTrack(newTrack) || newTrack == this.currentTextTrack) {
	                return;
	            }
	            if (this.currentTextTrack && this.currentTextTrack.mode !== TextTrackMode_1.TextTrackMode.DISABLED) {
	                this.currentTextTrack.mode = TextTrackMode_1.TextTrackMode.DISABLED;
	            }
	            this.currentTextTrack = newTrack;
	            this.setTrackMode(this.currentTextTrackMode).then(function () {
	                _this.logger.log(LogLevel_1.LogLevel.INFO, newTrack.language + " is being set as the current text track");
	                _this.emit(TextTrackSurfaceEvents_1.TextTrackSurfaceEvents.TEXT_TRACK_CHANGE, newTrack);
	            });
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(TextTrackSurface.prototype, "textTracks", {
	        get: function () {
	            var _this = this;
	            return Util_1.Util.toArray(this.pTextTracks).filter(function (t) { return _this.isValidTrack(t); });
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(TextTrackSurface.prototype, "activeTextTracks", {
	        get: function () {
	            var _this = this;
	            return Util_1.Util.toArray(this.pTextTracks).filter(function (t) { return !_this.isExpired(t); });
	        },
	        enumerable: false,
	        configurable: true
	    });
	    TextTrackSurface.prototype.setTrackMode = function (mode) {
	        var _this = this;
	        return new Promise(function (resolve, reject) {
	            var modeChanged = (mode != _this.currentTextTrackMode);
	            var applyMode = function () {
	                _this.currentTextTrack.mode = mode;
	                if (modeChanged) {
	                    setTimeout(function () { return _this.emit(TextTrackSurfaceEvents_1.TextTrackSurfaceEvents.TEXT_TRACK_DISPLAY_MODE_CHANGE, { mode: mode }); }, 0);
	                }
	                var msg = TextTrackMode_1.TextTrackMode.DISABLED;
	                mode === TextTrackMode_1.TextTrackMode.HIDDEN && (msg = 'enabled for event driven external custom rendering');
	                mode === TextTrackMode_1.TextTrackMode.SHOWING && (msg = 'enabled for native rendering by the user agent');
	                _this.logger.log(LogLevel_1.LogLevel.INFO, "The " + _this.currentTextTrack.kind + " track for language code " + _this.currentTextTrack.language + " is being " + msg + " ");
	                resolve();
	            };
	            _this.currentTextTrackMode = mode;
	            if (mode === TextTrackMode_1.TextTrackMode.SHOWING &&
	                _this.currentTextTrack.mode === TextTrackMode_1.TextTrackMode.DISABLED) {
	                _this.currentTextTrack.mode = TextTrackMode_1.TextTrackMode.HIDDEN;
	                setTimeout(applyMode, 10);
	            }
	            else {
	                applyMode();
	            }
	        });
	    };
	    TextTrackSurface.prototype.onVideoTextTrackAdded = function (e) {
	        var track = e.track;
	        track.expired = false;
	        this.addTracks();
	    };
	    TextTrackSurface.prototype.onTextTrackAdded = function (e) {
	        this.addTracks();
	    };
	    TextTrackSurface.prototype.onTextTrackChange = function (e) {
	        this.processTracks();
	    };
	    TextTrackSurface.prototype.onCueChange = function (e) {
	        var t = e.target, cues = t && t.activeCues;
	        if (!cues || !cues.length) {
	            return;
	        }
	        switch (t.kind) {
	            case TextTrackType_1.TextTrackType.METADATA:
	                this.processId3(cues[0]);
	                break;
	            case TextTrackType_1.TextTrackType.CAPTIONS:
	            case TextTrackType_1.TextTrackType.SUBTITLES:
	                if (this.allowTextTrackCueDispatch && t.mode === TextTrackMode_1.TextTrackMode.HIDDEN) {
	                    this.emit(TextTrackSurfaceEvents_1.TextTrackSurfaceEvents.TEXT_CUEPOINT, { activeCues: cues });
	                }
	                break;
	        }
	    };
	    TextTrackSurface.prototype.addTracks = function () {
	        var _this = this;
	        Util_1.Util.forEach(this.activeTextTracks, function (t) {
	            t.addEventListener(TextTrackEvents_1.TextTrackEvents.CUE_CHANGE, _this.onCueChangeHandler);
	            t.mode = t.kind === TextTrackType_1.TextTrackType.METADATA ? TextTrackMode_1.TextTrackMode.HIDDEN : TextTrackMode_1.TextTrackMode.DISABLED;
	            if (!_this.isTextTrack(t.kind) || _this.isDuplicateTrack(t)) {
	                return;
	            }
	            _this.logger.log(LogLevel_1.LogLevel.INFO, "A " + t.kind + " text track was added");
	            _this.emit(TextTrackSurfaceEvents_1.TextTrackSurfaceEvents.TEXT_TRACK_ADDED, t);
	        });
	        if (!this.currentTextTrack) {
	            this.textTrack = this.findDefaultTrack(this.textTracks, this.config.textTrackSettings.language);
	            if (!this.textTrack) {
	                return;
	            }
	            this.textTrack.mode = this.config.textTrackSettings.mode;
	            this.emit(TextTrackSurfaceEvents_1.TextTrackSurfaceEvents.TEXT_TRACK_AVAILABLE);
	        }
	        this.processTracks();
	    };
	    TextTrackSurface.prototype.processTracks = function () {
	        var _this = this;
	        var _a = this.config.textTrackSettings, enabled = _a.enabled, native = _a.native, enabledMode = _a.enabledMode;
	        var tracks = this.pTextTracks;
	        Util_1.Util.forEach(this.pTextTracks, function (t) {
	            if (_this.isExpired(t) && t.mode != TextTrackMode_1.TextTrackMode.DISABLED) {
	                t.mode = TextTrackMode_1.TextTrackMode.DISABLED;
	            }
	        });
	        if (!native) {
	            if (enabled) {
	                var track_1 = Util_1.Util.find(tracks, function (t) { return t.mode == TextTrackMode_1.TextTrackMode.SHOWING; });
	                if (track_1) {
	                    track_1.mode = enabledMode;
	                }
	            }
	            else {
	                var track_2 = Util_1.Util.find(tracks, function (t) { return t.mode != TextTrackMode_1.TextTrackMode.DISABLED; });
	                if (track_2) {
	                    track_2.mode = TextTrackMode_1.TextTrackMode.DISABLED;
	                }
	            }
	            return;
	        }
	        var track = Util_1.Util.find(tracks, function (t) { return t.mode == TextTrackMode_1.TextTrackMode.SHOWING; });
	        if (enabled) {
	            if (track == this.currentTextTrack) {
	                return;
	            }
	            if (!track) {
	                this.textTrackMode = TextTrackMode_1.TextTrackMode.DISABLED;
	            }
	            else {
	                this.textTrack = track;
	            }
	        }
	        else {
	            if (!track) {
	                return;
	            }
	            if (track != this.currentTextTrack) {
	                this.textTrack = track;
	            }
	            this.textTrackMode = TextTrackMode_1.TextTrackMode.SHOWING;
	        }
	    };
	    TextTrackSurface.prototype.processId3 = function (cue) {
	        var _this = this;
	        var val = cue.value, arr = this.config.resource.playback.id3OwnerIds;
	        if (!val) {
	            return;
	        }
	        if (val.key === 'TXXX') {
	            this.transmitMetadataCuepoint('google_dai', val);
	        }
	        else if (val.key === 'PRIV' && val.info === 'com.cbsi.live.sg') {
	            var data = {
	                info: val.info,
	                data: String.fromCharCode.apply(null, new Uint8Array(cue.value.data))
	            };
	            this.transmitMetadataCuepoint('com.cbsi.live.sg', data);
	        }
	        else {
	            Util_1.Util.forEach(arr, function (id) {
	                if (val.info.indexOf(id) !== -1) {
	                    _this.transmitMetadataCuepoint(id, val);
	                }
	            });
	        }
	    };
	    TextTrackSurface.prototype.transmitMetadataCuepoint = function (id, d) {
	        var vo = {
	            id: id,
	            info: d.info,
	            data: d.data
	        };
	        this.emit(TextTrackSurfaceEvents_1.TextTrackSurfaceEvents.METADATA_CUEPOINT, vo);
	    };
	    TextTrackSurface.prototype.addEvents = function () {
	        this.pTextTracks.addEventListener(TextTrackEvents_1.TextTrackEvents.ADD_TRACK, this.onTextTrackAddedHandler);
	        this.pTextTracks.addEventListener(TextTrackEvents_1.TextTrackEvents.CHANGE, this.onTextTrackChangeHandler);
	        this.video.addEventListener(TextTrackEvents_1.TextTrackEvents.ADD_TRACK, this.onVideoTextTrackAddedHandler);
	    };
	    TextTrackSurface.prototype.removeEvents = function () {
	        var _this = this;
	        this.pTextTracks.removeEventListener(TextTrackEvents_1.TextTrackEvents.ADD_TRACK, this.onTextTrackAddedHandler);
	        this.pTextTracks.removeEventListener(TextTrackEvents_1.TextTrackEvents.CHANGE, this.onTextTrackChangeHandler);
	        this.video.removeEventListener(TextTrackEvents_1.TextTrackEvents.ADD_TRACK, this.onVideoTextTrackAddedHandler);
	        Util_1.Util.forEach(this.pTextTracks, function (t) { return t.removeEventListener(TextTrackEvents_1.TextTrackEvents.CUE_CHANGE, _this.onCueChangeHandler); });
	    };
	    TextTrackSurface.prototype.isDuplicateTrack = function (t) {
	        var result = this.existingTrack.some(function (track) { return t.language == track.language && t.label == track.label && t.kind == track.kind; });
	        if (!result) {
	            this.existingTrack.push(t);
	        }
	        return result;
	    };
	    TextTrackSurface.prototype.isTextTrack = function (type) {
	        return type === TextTrackType_1.TextTrackType.CAPTIONS || type === TextTrackType_1.TextTrackType.SUBTITLES;
	    };
	    TextTrackSurface.prototype.isExpired = function (track) {
	        return track.expired;
	    };
	    TextTrackSurface.prototype.isValidTrack = function (track) {
	        if (!track) {
	            return false;
	        }
	        if (!this.isTextTrack(track.kind)) {
	            return false;
	        }
	        if (this.isExpired(track)) {
	            return false;
	        }
	        return true;
	    };
	    TextTrackSurface.prototype.createVttTextTrack = function (el, src) {
	        var t = document.createElement('track');
	        t.kind = TextTrackType_1.TextTrackType.CAPTIONS;
	        t.label = 'English';
	        t.srclang = 'en';
	        t.id = 'sidecar-vtt';
	        t.src = src;
	        el.appendChild(t);
	        t.track.mode = TextTrackMode_1.TextTrackMode.DISABLED;
	    };
	    TextTrackSurface.prototype.processSmpteTimedText = function (url) {
	        var _this = this;
	        var converter = new SmpteToVttCueConverter_1.SmpteToVttCueConverter(url, this.system);
	        converter.convert().then(function (result) {
	            _this.createSmpteTextTrack(_this.video, result);
	            _this.logger.log(LogLevel_1.LogLevel.INFO, 'Smpte XML conversion and text track creation successful');
	        }).catch(function (e) {
	            _this.logger.log(LogLevel_1.LogLevel.INFO, 'Smpte XML conversion and text track creation error');
	        });
	    };
	    TextTrackSurface.prototype.createSmpteTextTrack = function (el, cues) {
	        try {
	            var t_1 = el.addTextTrack(TextTrackType_1.TextTrackType.CAPTIONS, 'English', 'en');
	            Util_1.Util.forEach(cues, function (item) { return t_1.addCue(item); });
	        }
	        catch (error) {
	            this.logger.log(LogLevel_1.LogLevel.INFO, error);
	        }
	    };
	    TextTrackSurface.prototype.findDefaultTrack = function (tracks, language) {
	        var regex = new RegExp(language, "i");
	        var track = Util_1.Util.find(tracks, function (t) { return regex.test(t.language); });
	        if (!track) {
	            var short = Util_1.Util.parseLanguageTag(language).language;
	            if (short != language) {
	                regex = new RegExp(short, "i");
	                track = Util_1.Util.find(tracks, function (t) { return regex.test(t.language); });
	            }
	        }
	        return track || tracks[0];
	    };
	    return TextTrackSurface;
	}(Emitter_1.Emitter));
	exports.TextTrackSurface = TextTrackSurface;

	});

	var Html5VideoSurface_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Html5VideoSurface = void 0;






	var Html5VideoSurface = (function (_super) {
	    tslib_es6.__extends(Html5VideoSurface, _super);
	    function Html5VideoSurface(video, config, logger, useTextTrackSurface) {
	        if (useTextTrackSurface === void 0) { useTextTrackSurface = true; }
	        var _this = _super.call(this) || this;
	        _this.timeAtLastBufferCheck = NaN;
	        _this.textTrackSurface = null;
	        _this.pBuffering = false;
	        _this.pVideoEventHandler = function (e) { return _this.onVideoElementEvent(e); };
	        _this.pTextTrackEventHandler = function (e) { return _this.onTextTrackSurfaceEvent(e); };
	        _this.pVideo = video;
	        _this.logger = logger;
	        if (useTextTrackSurface) {
	            _this.textTrackSurface = new TextTrackSurface_1.TextTrackSurface(video, config, logger);
	        }
	        _this.logger.log(LogLevel_1.LogLevel.INFO, 'Html5VideoSurface created');
	        return _this;
	    }
	    Html5VideoSurface.prototype.destroy = function () {
	        this.removeEvents();
	        if (this.textTrackSurface) {
	            this.textTrackSurface.destroy();
	        }
	        this.textTrackSurface = null;
	        this.pVideo = null;
	        _super.prototype.destroy.call(this);
	    };
	    Html5VideoSurface.prototype.play = function () {
	        var _this = this;
	        if (this.pVideo) {
	            var p = this.pVideo.play();
	            if (p) {
	                p.then(function () { }).catch(function (e) {
	                    _this.logger.warn('Exception caught in play() Promise: ' + e.message, LogLevel_1.LogLevel.WARN);
	                });
	            }
	        }
	    };
	    Html5VideoSurface.prototype.pause = function () {
	        this.pVideo && this.pVideo.pause();
	    };
	    Html5VideoSurface.prototype.seek = function (value) {
	        this.pVideo && (this.pVideo.currentTime = value);
	    };
	    Html5VideoSurface.prototype.addEvents = function () {
	        for (var item in VideoSurfaceEvents_1.VideoSurfaceEvents) {
	            this.pVideo.addEventListener(VideoSurfaceEvents_1.VideoSurfaceEvents[item], this.pVideoEventHandler);
	        }
	        if (!this.textTrackSurface) {
	            return;
	        }
	        for (var item in TextTrackSurfaceEvents_1.TextTrackSurfaceEvents) {
	            this.textTrackSurface.on(TextTrackSurfaceEvents_1.TextTrackSurfaceEvents[item], this.pTextTrackEventHandler);
	        }
	    };
	    Object.defineProperty(Html5VideoSurface.prototype, "video", {
	        get: function () {
	            return this.pVideo;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(Html5VideoSurface.prototype, "src", {
	        set: function (value) {
	            this.pVideo && (this.pVideo.src = value);
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(Html5VideoSurface.prototype, "volume", {
	        get: function () {
	            return this.pVideo ? this.pVideo.volume : null;
	        },
	        set: function (value) {
	            this.pVideo && (this.pVideo.volume = value);
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(Html5VideoSurface.prototype, "muted", {
	        get: function () {
	            return this.pVideo ? this.pVideo.muted : null;
	        },
	        set: function (value) {
	            this.pVideo && (this.pVideo.muted = value);
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(Html5VideoSurface.prototype, "paused", {
	        get: function () {
	            return this.pVideo ? this.pVideo.paused : null;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(Html5VideoSurface.prototype, "time", {
	        get: function () {
	            return this.pVideo ? this.pVideo.currentTime : null;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(Html5VideoSurface.prototype, "duration", {
	        get: function () {
	            return this.pVideo ? this.pVideo.duration : null;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(Html5VideoSurface.prototype, "state", {
	        get: function () {
	            return '';
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(Html5VideoSurface.prototype, "textTrackMode", {
	        set: function (mode) {
	            if (!this.textTrackSurface) {
	                return;
	            }
	            this.textTrackSurface.textTrackMode = mode;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(Html5VideoSurface.prototype, "textTrack", {
	        get: function () {
	            return this.textTrackSurface.textTrack;
	        },
	        set: function (track) {
	            if (!this.textTrackSurface) {
	                return;
	            }
	            this.textTrackSurface.textTrack = track;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(Html5VideoSurface.prototype, "textTrackSrc", {
	        set: function (url) {
	            if (!this.textTrackSurface) {
	                return;
	            }
	            this.textTrackSurface.timeTextSrc = url;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(Html5VideoSurface.prototype, "textTracks", {
	        get: function () {
	            return this.textTrackSurface.textTracks;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(Html5VideoSurface.prototype, "bufferLength", {
	        get: function () {
	            var n = 0;
	            if (this.pVideo && this.pVideo.buffered.length > 0) {
	                n = this.pVideo.buffered.end(this.pVideo.buffered.length - 1) - this.pVideo.currentTime;
	            }
	            return n;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(Html5VideoSurface.prototype, "buffering", {
	        get: function () {
	            if (!this.paused && this.pVideo) {
	                var threshold = (this.timeAtLastBufferCheck + .001);
	                this.timeAtLastBufferCheck = this.pVideo.currentTime;
	                this.pBuffering = this.pVideo.readyState === 1 && this.pVideo.currentTime < threshold;
	            }
	            return this.pBuffering;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(Html5VideoSurface.prototype, "framerate", {
	        get: function () {
	            var frames = this.pVideo.webkitDecodedFrameCount || this.pVideo.mozPresentedFrames || Number.NaN;
	            return isNaN(frames) ? frames : frames / this.pVideo.currentTime;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(Html5VideoSurface.prototype, "metrics", {
	        get: function () {
	            var result = {
	                droppedVideoFrames: Number.NaN,
	                totalVideoFrames: Number.NaN
	            };
	            if (!this.pVideo) {
	                return result;
	            }
	            var hasWebKit = ('webkitDroppedFrameCount' in this.pVideo) && ('webkitDecodedFrameCount' in this.pVideo);
	            var hasQuality = ('getVideoPlaybackQuality' in this.pVideo);
	            if (hasQuality) {
	                result = this.pVideo.getVideoPlaybackQuality();
	            }
	            else if (hasWebKit) {
	                result = {
	                    droppedVideoFrames: this.pVideo.webkitDroppedFrameCount,
	                    totalVideoFrames: this.pVideo.webkitDroppedFrameCount + this.pVideo.webkitDecodedFrameCount
	                };
	            }
	            return result;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Html5VideoSurface.prototype.onVideoElementEvent = function (e) {
	        this.emit(e.type, e);
	    };
	    Html5VideoSurface.prototype.onTextTrackSurfaceEvent = function (e) {
	        this.emit(e.type, e.data);
	    };
	    Html5VideoSurface.prototype.removeEvents = function () {
	        for (var item in VideoSurfaceEvents_1.VideoSurfaceEvents) {
	            this.pVideo.removeEventListener(VideoSurfaceEvents_1.VideoSurfaceEvents[item], this.pVideoEventHandler);
	        }
	        if (!this.textTrackSurface) {
	            return;
	        }
	        for (var item in TextTrackSurfaceEvents_1.TextTrackSurfaceEvents) {
	            this.textTrackSurface.on(TextTrackSurfaceEvents_1.TextTrackSurfaceEvents[item], this.pTextTrackEventHandler);
	        }
	    };
	    return Html5VideoSurface;
	}(Emitter_1.Emitter));
	exports.Html5VideoSurface = Html5VideoSurface;

	});

	var PlaybackAdapterEvents_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.PlaybackAdapterEvents = void 0;
	var PlaybackAdapterEvents;
	(function (PlaybackAdapterEvents) {
	    PlaybackAdapterEvents["ABR_QUALITY_LOADED"] = "abrQualityLoaded";
	    PlaybackAdapterEvents["ABR_QUALITY_SWITCHED"] = "abrQualitySwitched";
	    PlaybackAdapterEvents["ABR_QUALITY_SWITCHING"] = "abrQualitySwitching";
	    PlaybackAdapterEvents["ABR_CONSTRAINTS_CHANGE"] = "maxLevelChanged";
	    PlaybackAdapterEvents["FRAGMENT_LOADED"] = "fragmentLoaded";
	    PlaybackAdapterEvents["FRAGMENT_PARSED"] = "fragmentParsed";
	    PlaybackAdapterEvents["MANIFEST_LOADED"] = "manifestLoaded";
	    PlaybackAdapterEvents["MANIFEST_PARSED"] = "manifestParsed";
	    PlaybackAdapterEvents["LOADED_METADATA"] = "loadedMetdata";
	    PlaybackAdapterEvents["DRM_KEYSYSTEM_CREATED"] = "drmKeySystemCreated";
	    PlaybackAdapterEvents["AUDIO_TRACK_UPDATED"] = "audioTrackUpdated";
	    PlaybackAdapterEvents["AUDIO_TRACK_CHANGE"] = "audioTrackChange";
	    PlaybackAdapterEvents["MULTI_CDN"] = "multiCdn";
	    PlaybackAdapterEvents["ERROR"] = "error";
	})(PlaybackAdapterEvents = exports.PlaybackAdapterEvents || (exports.PlaybackAdapterEvents = {}));

	});

	var PlayStation_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.PlayStation = void 0;
	var PlayStation;
	(function (PlayStation) {
	    PlayStation["BUFFERING"] = "buffering";
	    PlayStation["END_OF_STREAM"] = "endOfStream";
	    PlayStation["NOT_READY"] = "notReady";
	    PlayStation["OPENING"] = "opening";
	    PlayStation["PAUSED"] = "paused";
	    PlayStation["PLAYING"] = "playing";
	    PlayStation["STOPPED"] = "stopped";
	    PlayStation["DISPLAYING_VIDEO"] = "DisplayingVideo";
	    PlayStation["UNKNOWN"] = "unknown";
	    PlayStation["READY"] = "ready";
	    PlayStation["PLAYER_TIMED_EVENT"] = "playerTimedEvent";
	    PlayStation["NETWORK_STATUS_CHANGE"] = "networkStatusChange";
	    PlayStation["CONTENT_AVAILABLE"] = "contentAvailable";
	    PlayStation["PLAYER_STATUS_CHANGE"] = "playerStatusChange";
	    PlayStation["PLAYER_STREAMING_ERROR"] = "playerStreamingError";
	    PlayStation["PLAYER_ERROR"] = "playerError";
	    PlayStation["PLAYER_SUBTITLE"] = "playerSubtitle";
	    PlayStation["GET_AUDIO_TRACKS"] = "getAudioTracks";
	    PlayStation["GET_VIDEO_REP_COUNT"] = "getRepresentationsCount";
	    PlayStation["GET_VIDEO_REP_INFO"] = "getRepresentationInfo";
	    PlayStation["GET_SUBTITLE_TRACKS"] = "getSubtitleTracks";
	    PlayStation["GET_PLAYBACK_TIME"] = "getPlaybackTime";
	})(PlayStation = exports.PlayStation || (exports.PlayStation = {}));

	});

	var WebMafVideoSurface_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.WebMafVideoSurface = void 0;










	var WebMafVideoSurface = (function (_super) {
	    tslib_es6.__extends(WebMafVideoSurface, _super);
	    function WebMafVideoSurface(config, logger) {
	        var _this = _super.call(this) || this;
	        _this.onTicHandler = function (e) { return _this.onTic(e); };
	        _this.pTime = 0;
	        _this.pDuration = 0;
	        _this.pBitrate = 0;
	        _this.abrProfileCount = 0;
	        _this.pMasterBitrateProfile = [];
	        _this.audioTrackUpdated = false;
	        _this.pStartTime = NaN;
	        _this.seeking = false;
	        _this.logger = logger;
	        _this.timer = new Timer_1.Timer(500);
	        _this.timer.on(Timer_1.Timer.TIC_EVENT, _this.onTicHandler);
	        _this.config = config;
	        _this.logger.log(LogLevel_1.LogLevel.WARN, "" + _this.config);
	        _this.global = config.system.global;
	        _this.pVideo = _this.global.WM_videoPlayer;
	        _this.global.accessfunction = function (json) { return _this.accessfunction(json); };
	        _this.pMetrics = _this.global.videometrics;
	        _this.pMetrics.onBitrateChange = function (value) { return _this.onBitrateChange(value); };
	        _this.callExternalWebMafApi('{"command":"setAdaptiveStreamingParameters",' +
	            ' "bandwidthHistoryMaxEntries":30, ' +
	            ' "bandwidthHistoryMinEntries": 1, ' +
	            ' "bandwidthUtilisationPercentage": 80, ' +
	            ' "segmentsBetweenSwitchUp": 5}');
	        if (_this.logger) {
	            _this.pVideo.TTY = function (tty) {
	                _this.logger.log(LogLevel_1.LogLevel.INFO, tty);
	            };
	            _this.pVideo.TTYLevel = 0;
	        }
	        return _this;
	    }
	    WebMafVideoSurface.prototype.destroy = function () {
	        this.callExternalWebMafApi('{"command":"stop"}');
	        this.timer.off(Timer_1.Timer.TIC_EVENT, this.onTicHandler);
	        _super.prototype.destroy.call(this);
	    };
	    WebMafVideoSurface.prototype.play = function () {
	        this.callExternalWebMafApi('{"command":"play"}');
	    };
	    WebMafVideoSurface.prototype.pause = function () {
	        this.callExternalWebMafApi('{"command":"pause"}');
	    };
	    WebMafVideoSurface.prototype.seek = function (position) {
	        if (!this.seeking) {
	            this.seeking = true;
	            var pos = Math.floor(position);
	            this.callExternalWebMafApi('{"command":"setPlayTime","playTime":' + pos + '}');
	            this.logger.log(LogLevel_1.LogLevel.INFO, "seeking to " + pos);
	            this.emit(VideoSurfaceEvents_1.VideoSurfaceEvents.SEEKING, { position: pos });
	        }
	    };
	    WebMafVideoSurface.prototype.addEvents = function () {
	    };
	    Object.defineProperty(WebMafVideoSurface.prototype, "startTime", {
	        set: function (value) {
	            this.logger.log(LogLevel_1.LogLevel.INFO, "startTime set on webmaf " + value);
	            this.pStartTime = value;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(WebMafVideoSurface.prototype, "volume", {
	        get: function () {
	            return 1;
	        },
	        set: function (value) {
	            this.callExternalWebMafApi('{"command":"setVolume", "volume":' + value + '}');
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(WebMafVideoSurface.prototype, "muted", {
	        get: function () {
	            return false;
	        },
	        set: function (value) {
	            this.callExternalWebMafApi('{"command": "setVolume", "volume": 0.0}');
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(WebMafVideoSurface.prototype, "src", {
	        set: function (value) {
	            this.callExternalWebMafApi(value);
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(WebMafVideoSurface.prototype, "video", {
	        get: function () {
	            return this.pVideo;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(WebMafVideoSurface.prototype, "framerate", {
	        get: function () {
	            return Number.NaN;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(WebMafVideoSurface.prototype, "metrics", {
	        get: function () {
	            return this.pMetrics;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(WebMafVideoSurface.prototype, "time", {
	        get: function () {
	            return this.pTime;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(WebMafVideoSurface.prototype, "duration", {
	        get: function () {
	            return this.pDuration;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(WebMafVideoSurface.prototype, "bufferLength", {
	        get: function () {
	            return this.pVideo.bufferedRange;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(WebMafVideoSurface.prototype, "buffering", {
	        get: function () {
	            return this.pState === PlayStation_1.PlayStation.BUFFERING;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(WebMafVideoSurface.prototype, "paused", {
	        get: function () {
	            return this.pState === PlayStation_1.PlayStation.PAUSED;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(WebMafVideoSurface.prototype, "state", {
	        get: function () {
	            return this.pState;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(WebMafVideoSurface.prototype, "masterBitrateProfile", {
	        get: function () {
	            return this.pMasterBitrateProfile;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(WebMafVideoSurface.prototype, "bitrate", {
	        get: function () {
	            return this.pBitrate;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(WebMafVideoSurface.prototype, "startingBitrate", {
	        set: function (value) {
	            this.logger.log(LogLevel_1.LogLevel.INFO, "startingBitrate set on webmaf " + value);
	            this.callExternalWebMafApi('{"command":"setVideoStartingBandwidth","bandwidth":' + value + '}');
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(WebMafVideoSurface.prototype, "minBitrate", {
	        set: function (value) {
	            this.logger.log(LogLevel_1.LogLevel.INFO, "minBitrate set on webmaf " + value);
	            this.callExternalWebMafApi('{"command":"setFixVideoRepresentations", "minBitrate":' + value + '}');
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(WebMafVideoSurface.prototype, "maxBitrate", {
	        set: function (value) {
	            this.logger.log(LogLevel_1.LogLevel.INFO, "maxBitrate set on webmaf " + value);
	            this.callExternalWebMafApi('{"command":"setFixVideoRepresentations", "maxBitrate":' + value + '}');
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(WebMafVideoSurface.prototype, "audioTrack", {
	        set: function (track) {
	            var id = this.audioTrackInfo.tracks[track.index].id;
	            this.audioTrackUpdated = true;
	            this.callExternalWebMafApi('{"command":"setAudioTrack", "audioTrack":' + JSON.stringify(id) + '}');
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(WebMafVideoSurface.prototype, "textTrackMode", {
	        set: function (mode) {
	            var enable = mode !== TextTrackMode_1.TextTrackMode.DISABLED;
	            this.callExternalWebMafApi('{"command":"setClosedCaptions","enable": ' + enable + '}');
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(WebMafVideoSurface.prototype, "textTrack", {
	        set: function (track) {
	            this.callExternalWebMafApi('{"command":"setSubtitleTrack","subtitleTrack": ' + JSON.stringify(track.language) + '}');
	            this.emit(TextTrackSurfaceEvents_1.TextTrackSurfaceEvents.TEXT_TRACK_CHANGE, track);
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(WebMafVideoSurface.prototype, "textTrackSrc", {
	        set: function (url) {
	            this.logger.log(LogLevel_1.LogLevel.INFO, "Sidecar text is not supported on playstation " + url);
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(WebMafVideoSurface.prototype, "textTracks", {
	        get: function () {
	            return [];
	        },
	        enumerable: false,
	        configurable: true
	    });
	    WebMafVideoSurface.prototype.callExternalWebMafApi = function (command) {
	        this.global.external.user(command);
	    };
	    WebMafVideoSurface.prototype.onTic = function (e) {
	        this.callExternalWebMafApi('{"command":"getPlaybackTime"}');
	        if (this.audioTrackUpdated) {
	            this.audioTrackUpdated = false;
	        }
	        this.updateMetrics();
	    };
	    WebMafVideoSurface.prototype.onBitrateChange = function (value) {
	        var videoBitrate = value / 2;
	        var index = Utils_1.Utils.getIndexForBitrate(this.pMasterBitrateProfile, videoBitrate, false);
	        this.logger.log(LogLevel_1.LogLevel.INFO, "bitrate change " + videoBitrate);
	        this.emit(PlaybackAdapterEvents_1.PlaybackAdapterEvents.ABR_QUALITY_LOADED, { index: index });
	    };
	    WebMafVideoSurface.prototype.updateMetrics = function () {
	        this.metrics.poll();
	        this.pBitrate = this.metrics.currentBitrate / 2;
	    };
	    WebMafVideoSurface.prototype.parseAudioInfo = function (info) {
	        var rawTracks = info.audioTracks.split(',');
	        var channels = info.audioNumChannels.split(',');
	        var returnObj = { track: null, tracks: [] };
	        for (var i = 0, len = rawTracks.length; i < len; i++) {
	            var track = {
	                index: i,
	                id: rawTracks[i],
	                type: channels[i],
	                lang: rawTracks[i],
	                label: rawTracks[i],
	                codec: ''
	            };
	            returnObj.tracks.push(track);
	            if (rawTracks[i] === info.currentAudioTrack) {
	                returnObj.track = track;
	            }
	        }
	        return returnObj;
	    };
	    WebMafVideoSurface.prototype.accessfunction = function (json) {
	        var data = JSON.parse(json);
	        switch (data.command) {
	            case PlayStation_1.PlayStation.GET_AUDIO_TRACKS:
	                this.respondToAudioTrackInfo(data);
	                break;
	            case PlayStation_1.PlayStation.GET_VIDEO_REP_COUNT:
	                this.respondToVideoRepCount(data);
	                break;
	            case PlayStation_1.PlayStation.GET_VIDEO_REP_INFO:
	                this.respondToVideoRepInfo(data);
	                break;
	            case PlayStation_1.PlayStation.GET_SUBTITLE_TRACKS:
	                this.respondToGetSubtitleTracks(data);
	                break;
	            case PlayStation_1.PlayStation.GET_PLAYBACK_TIME:
	                this.respondToPlaybackTime(data);
	                break;
	            case PlayStation_1.PlayStation.NETWORK_STATUS_CHANGE:
	                break;
	            case PlayStation_1.PlayStation.CONTENT_AVAILABLE:
	                this.respondToContentAvailable(data);
	                break;
	            case PlayStation_1.PlayStation.PLAYER_SUBTITLE:
	                this.respondToPlayerSubtitle(data);
	                break;
	            case PlayStation_1.PlayStation.PLAYER_TIMED_EVENT:
	                this.respondToTimedMetadataEvent(data);
	                break;
	            case PlayStation_1.PlayStation.PLAYER_STREAMING_ERROR:
	                break;
	            case PlayStation_1.PlayStation.PLAYER_ERROR:
	                break;
	            case PlayStation_1.PlayStation.PLAYER_STATUS_CHANGE:
	                this.respondToPlayerStatusChange(data);
	                break;
	        }
	    };
	    WebMafVideoSurface.prototype.respondToTimedMetadataEvent = function (data) {
	        this.emit(TextTrackSurfaceEvents_1.TextTrackSurfaceEvents.METADATA_CUEPOINT, { timestamp: data.timestamp, msg: data.data });
	    };
	    WebMafVideoSurface.prototype.respondToGetSubtitleTracks = function (data) {
	        var _this = this;
	        var arr = data.subtitleTracks.split(',');
	        arr.forEach(function (item) {
	            if (item === 'und') {
	                _this.logger.log(LogLevel_1.LogLevel.INFO, "timed metadata detected.", data);
	                _this.callExternalWebMafApi('{"command":"setTimedMetadata","enable":true}');
	                _this.callExternalWebMafApi('{"command":"setSubtitleTrack","subtitleTrack":"und"}');
	            }
	            else {
	                var track = {
	                    language: item,
	                    kind: 'subtitle',
	                    label: item
	                };
	                _this.emit(TextTrackSurfaceEvents_1.TextTrackSurfaceEvents.TEXT_TRACK_ADDED, track);
	                _this.emit(TextTrackSurfaceEvents_1.TextTrackSurfaceEvents.TEXT_TRACK_CHANGE, track);
	            }
	        });
	        if (arr.length > 0) {
	            this.emit(TextTrackSurfaceEvents_1.TextTrackSurfaceEvents.TEXT_TRACK_AVAILABLE);
	        }
	    };
	    WebMafVideoSurface.prototype.respondToPlayerSubtitle = function (data) {
	        var p = data.text.split(';'), cueList = [];
	        if (p.length >= 8) {
	            if (p[6] == "action:caption_block") {
	                var len = p.length / 8;
	                for (var i = 0; i < len; i++) {
	                    var index = i * 8;
	                    cueList.push({
	                        text: decodeURIComponent(escape(atob(p[index + 7]))),
	                        x: p[index + 0].split(':')[1],
	                        y: p[index + 1].split(':')[1],
	                        r: p[index + 2].split(':')[1],
	                        g: p[index + 3].split(':')[1],
	                        b: p[index + 4].split(':')[1]
	                    });
	                }
	            }
	            else {
	                this.logger.log(LogLevel_1.LogLevel.INFO, "no style info cea 608", data);
	            }
	        }
	        else {
	            cueList.push({ text: data.text });
	        }
	        if (cueList.length > 0) {
	            this.emit(TextTrackSurfaceEvents_1.TextTrackSurfaceEvents.TEXT_CUEPOINT, { activeCues: cueList });
	        }
	    };
	    WebMafVideoSurface.prototype.respondToContentAvailable = function (data) {
	        if (this.pDuration !== data.totalLength) {
	            this.pDuration = data.totalLength;
	            this.emit(VideoSurfaceEvents_1.VideoSurfaceEvents.DURATION_CHANGE, { value: this.pDuration });
	        }
	    };
	    WebMafVideoSurface.prototype.respondToPlaybackTime = function (data) {
	        if (this.pTime !== data.elapsedTime &&
	            data.elapsedTime <= data.totalTime) {
	            this.pTime = data.elapsedTime;
	            this.emit(VideoSurfaceEvents_1.VideoSurfaceEvents.TIME_UPDATE, { value: this.pTime });
	            if (this.seeking) {
	                this.seeking = false;
	                this.emit(VideoSurfaceEvents_1.VideoSurfaceEvents.SEEKED);
	            }
	        }
	    };
	    WebMafVideoSurface.prototype.respondToVideoRepInfo = function (data) {
	        this.pMasterBitrateProfile.push(data);
	        if (this.pMasterBitrateProfile.length === this.abrProfileCount) {
	            this.emit(PlaybackAdapterEvents_1.PlaybackAdapterEvents.MANIFEST_PARSED, this.pMasterBitrateProfile);
	        }
	    };
	    WebMafVideoSurface.prototype.respondToVideoRepCount = function (data) {
	        this.abrProfileCount = data.count;
	        for (var i = 0; i < this.abrProfileCount; i++) {
	            this.callExternalWebMafApi('{"command":"getRepresentationInfo", "representation":' + i + '}');
	        }
	    };
	    WebMafVideoSurface.prototype.respondToAudioTrackInfo = function (data) {
	        this.audioTrackInfo = this.parseAudioInfo(data);
	        this.emit(PlaybackAdapterEvents_1.PlaybackAdapterEvents.AUDIO_TRACK_UPDATED, this.audioTrackInfo);
	    };
	    WebMafVideoSurface.prototype.respondToPlayerStatusChange = function (data) {
	        switch (data.playerState) {
	            case PlayStation_1.PlayStation.BUFFERING:
	                break;
	            case PlayStation_1.PlayStation.READY:
	                this.respondToPlayerStatusReady(data);
	                break;
	            case PlayStation_1.PlayStation.PAUSED:
	                this.emit(VideoSurfaceEvents_1.VideoSurfaceEvents.PAUSE);
	                break;
	            case PlayStation_1.PlayStation.PLAYING:
	                this.emit(VideoSurfaceEvents_1.VideoSurfaceEvents.PLAYING);
	                break;
	            case PlayStation_1.PlayStation.DISPLAYING_VIDEO:
	                !this.timer.started && this.timer.start();
	                break;
	            case PlayStation_1.PlayStation.END_OF_STREAM:
	                this.respondToPlayerStatusEOS();
	                break;
	        }
	        this.pState = data.playerState;
	    };
	    WebMafVideoSurface.prototype.respondToPlayerStatusEOS = function () {
	        this.timer.started && this.timer.stop();
	        this.emit(VideoSurfaceEvents_1.VideoSurfaceEvents.ENDED);
	    };
	    WebMafVideoSurface.prototype.respondToPlayerStatusReady = function (data) {
	        this.emit(VideoSurfaceEvents_1.VideoSurfaceEvents.CAN_PLAY_THROUGH);
	        this.callExternalWebMafApi('{"command":"getRepresentationsCount"}');
	        this.callExternalWebMafApi('{"command":"getSubtitleTracks"}');
	        !isNaN(this.pStartTime) && this.seek(this.pStartTime);
	    };
	    return WebMafVideoSurface;
	}(Emitter_1.Emitter));
	exports.WebMafVideoSurface = WebMafVideoSurface;

	});

	var DrmType_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.DrmType = void 0;
	var DrmType;
	(function (DrmType) {
	    DrmType["WIDEVINE"] = "com.widevine.alpha";
	    DrmType["PLAYREADY"] = "com.microsoft.playready";
	    DrmType["CLEAR_KEY"] = "org.w3.clearkey";
	    DrmType["FAIRPLAY_1_0"] = "com.apple.fps.1_0";
	})(DrmType = exports.DrmType || (exports.DrmType = {}));

	});

	var DashEmsg_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.DashEmsg = void 0;
	var DashEmsg;
	(function (DashEmsg) {
	    DashEmsg["GOOGLE_DAI"] = "urn:google:dai:2018";
	})(DashEmsg = exports.DashEmsg || (exports.DashEmsg = {}));

	});

	var DashjsRobustness_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.DashjsRobustness = void 0;
	var DashjsRobustness;
	(function (DashjsRobustness) {
	    DashjsRobustness[DashjsRobustness["MANIFEST_RETRY_ATTEMPTS"] = 2] = "MANIFEST_RETRY_ATTEMPTS";
	    DashjsRobustness[DashjsRobustness["MANIFEST_RETRY_INTERVAL"] = 1000] = "MANIFEST_RETRY_INTERVAL";
	    DashjsRobustness[DashjsRobustness["FRAGMENT_RETRY_ATTEMPTS"] = 6] = "FRAGMENT_RETRY_ATTEMPTS";
	    DashjsRobustness[DashjsRobustness["FRAGMENT_RETRY_INTERVAL"] = 2000] = "FRAGMENT_RETRY_INTERVAL";
	    DashjsRobustness[DashjsRobustness["FATAL_ERROR_RECOVERY_ATTEMPTS"] = 3] = "FATAL_ERROR_RECOVERY_ATTEMPTS";
	})(DashjsRobustness = exports.DashjsRobustness || (exports.DashjsRobustness = {}));

	});

	var BasePlaybackAdapter_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.BasePlaybackAdapter = void 0;









	var BasePlaybackAdapter = (function (_super) {
	    tslib_es6.__extends(BasePlaybackAdapter, _super);
	    function BasePlaybackAdapter(videoSurface, config, logger) {
	        var _this = _super.call(this) || this;
	        _this.enableLogger = false;
	        _this.networkErrorRetryCount = 0;
	        _this.mediaErrorRetryCount = 0;
	        _this.minAutoLevel = NaN;
	        _this.maxAutoLevel = NaN;
	        _this.multiCdnHeaderPresent = true;
	        _this.pIsLiveStream = false;
	        _this.lowLevelDvrDetails = null;
	        _this.liveStreamInfoVO = {
	            isPlayingLive: false,
	            liveEdgeOffset: NaN,
	            dvrWindowSize: NaN,
	            safeSeekingDuration: NaN,
	            safeSeekingTime: NaN,
	            relativeTime: NaN,
	            relativeDuration: NaN,
	            absoluteTime: NaN,
	            absoluteDuration: NaN
	        };
	        _this.blockTimeUpdateEvent = false;
	        _this.loaded = false;
	        _this.videoSurfaceEventHandler = function (e) { return _this.onVideoSurfaceEvent(e); };
	        _this.videoSurface = videoSurface;
	        _this.config = config;
	        _this.playback = _this.config.resource.playback;
	        _this.logger = logger;
	        _this.mediaUrl = config.resource.location.mediaUrl;
	        var o = _this.config.playerOptions.overrides;
	        if (!Util_1.Util.isEmpty(o.enableLowLevelStreamingLogs)) {
	            _this.enableLogger = o.enableLowLevelStreamingLogs;
	        }
	        return _this;
	    }
	    BasePlaybackAdapter.prototype.initialize = function () {
	        this.addEvents(this.videoSurface, VideoSurfaceEvents_1.VideoSurfaceEvents, this.videoSurfaceEventHandler);
	        this.addEvents(this.videoSurface, TextTrackSurfaceEvents_1.TextTrackSurfaceEvents, this.videoSurfaceEventHandler);
	    };
	    BasePlaybackAdapter.prototype.destroy = function () {
	        this.removeEvents(this.videoSurface, VideoSurfaceEvents_1.VideoSurfaceEvents, this.videoSurfaceEventHandler);
	        this.removeEvents(this.videoSurface, TextTrackSurfaceEvents_1.TextTrackSurfaceEvents, this.videoSurfaceEventHandler);
	        this.videoSurface.destroy();
	        this.videoSurface = null;
	        this.logger = null;
	        this.config = null;
	        this.playback = null;
	        this.liveStreamInfoVO = null;
	        this.lowLevelDvrDetails = null;
	        this.normalizedAudioTracks = null;
	        _super.prototype.destroy.call(this);
	        return Promise.resolve();
	    };
	    BasePlaybackAdapter.prototype.play = function () {
	        var _this = this;
	        this.load().then(function () {
	            _this.videoSurface.play();
	        });
	    };
	    BasePlaybackAdapter.prototype.pause = function () {
	        this.videoSurface.pause();
	    };
	    BasePlaybackAdapter.prototype.suspend = function () {
	    };
	    BasePlaybackAdapter.prototype.resume = function () {
	    };
	    BasePlaybackAdapter.prototype.seek = function (position) {
	        this.videoSurface.seek(position);
	    };
	    BasePlaybackAdapter.prototype.load = function (url) {
	        var _this = this;
	        if (this.loaded === true) {
	            return Promise.resolve();
	        }
	        else if (this.pendingLoad) {
	            return this.pendingLoad;
	        }
	        this.videoSurface.addEvents();
	        var textTrackUrl = this.config.resource.location.textTrackUrl;
	        if (!Util_1.Util.isEmpty(textTrackUrl)) {
	            this.videoSurface.textTrackSrc = textTrackUrl;
	        }
	        if (url) {
	            this.mediaUrl = url;
	        }
	        this.pendingLoad = this.loadMediaUrl().then(function () {
	            _this.loadComplete();
	        });
	        return this.pendingLoad;
	    };
	    BasePlaybackAdapter.prototype.resize = function () {
	    };
	    Object.defineProperty(BasePlaybackAdapter.prototype, "audioTrack", {
	        set: function (track) {
	            this.videoSurface.video.audioTracks[track.index].enabled = true;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(BasePlaybackAdapter.prototype, "textTrackMode", {
	        set: function (mode) {
	            this.videoSurface.textTrackMode = mode;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(BasePlaybackAdapter.prototype, "textTrack", {
	        set: function (track) {
	            this.videoSurface.textTrack = track;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(BasePlaybackAdapter.prototype, "bufferLength", {
	        get: function () {
	            return this.videoSurface.bufferLength;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(BasePlaybackAdapter.prototype, "time", {
	        get: function () {
	            return this.videoSurface.time;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(BasePlaybackAdapter.prototype, "duration", {
	        get: function () {
	            return this.videoSurface.duration;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(BasePlaybackAdapter.prototype, "isLiveStream", {
	        get: function () {
	            return this.pIsLiveStream;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(BasePlaybackAdapter.prototype, "droppedVideoFrames", {
	        get: function () {
	            return this.videoSurface.metrics.droppedVideoFrames;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(BasePlaybackAdapter.prototype, "framerate", {
	        get: function () {
	            return this.videoSurface.framerate;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(BasePlaybackAdapter.prototype, "buffering", {
	        get: function () {
	            return this.videoSurface.buffering;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(BasePlaybackAdapter.prototype, "type", {
	        get: function () {
	            return this.pType;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(BasePlaybackAdapter.prototype, "fragmentType", {
	        get: function () {
	            return '';
	        },
	        enumerable: false,
	        configurable: true
	    });
	    BasePlaybackAdapter.prototype.loadMediaUrl = function () {
	        var _this = this;
	        var video = this.videoSurface;
	        return new Promise(function (resolve, reject) {
	            var listener = function (action) {
	                return function (e) {
	                    video.off(VideoSurfaceEvents_1.VideoSurfaceEvents.LOADED_METADATA, loadedmetadata);
	                    video.off(VideoSurfaceEvents_1.VideoSurfaceEvents.ERROR, error);
	                    action();
	                };
	            };
	            var loadedmetadata = listener(function () {
	                _this.loadedMetadata();
	                resolve();
	            });
	            var error = listener(reject);
	            video.on(VideoSurfaceEvents_1.VideoSurfaceEvents.LOADED_METADATA, loadedmetadata);
	            video.on(VideoSurfaceEvents_1.VideoSurfaceEvents.ERROR, error);
	        });
	    };
	    BasePlaybackAdapter.prototype.getStreamMetadata = function () {
	        return {
	            manifest: {
	                mimeType: Util_1.Util.getMimeType(this.mediaUrl)
	            },
	            fragment: {
	                mimeType: this.fragmentType
	            }
	        };
	    };
	    BasePlaybackAdapter.prototype.loadedMetadata = function () {
	        var metadata = this.getStreamMetadata();
	        this.emit(PlaybackAdapterEvents_1.PlaybackAdapterEvents.LOADED_METADATA, metadata);
	    };
	    BasePlaybackAdapter.prototype.loadComplete = function () {
	        this.pendingLoad = null;
	        this.loaded = true;
	    };
	    BasePlaybackAdapter.prototype.checkAbrConstraints = function (max) {
	        if (this.manifestQualities.length > 0) {
	            var constraints = this.getCurrentAbrConstraints(max);
	            this.updateAbrConstraints(constraints.min, constraints.max, this.manifestQualities);
	        }
	    };
	    BasePlaybackAdapter.prototype.updateAbrConstraints = function (minIdx, maxIdx, profile) {
	        if (minIdx !== this.minAutoLevel || maxIdx !== this.maxAutoLevel) {
	            this.minAutoLevel = minIdx;
	            this.maxAutoLevel = maxIdx;
	            this.emit(PlaybackAdapterEvents_1.PlaybackAdapterEvents.ABR_CONSTRAINTS_CHANGE, {
	                minIndex: this.minAutoLevel,
	                maxIndex: this.maxAutoLevel,
	                manifestQualities: profile
	            });
	        }
	    };
	    BasePlaybackAdapter.prototype.getCurrentAbrConstraints = function (max) {
	        return {
	            min: (max) ? Utils_1.Utils.getIndexForBitrate(this.manifestQualities, this.minBitrate, true) : 0,
	            max: max
	        };
	    };
	    BasePlaybackAdapter.prototype.onVideoSurfaceEvent = function (e) {
	        if (e.type === VideoSurfaceEvents_1.VideoSurfaceEvents.ERROR ||
	            e.type === VideoSurfaceEvents_1.VideoSurfaceEvents.STALLED ||
	            e.type === VideoSurfaceEvents_1.VideoSurfaceEvents.ABORT) {
	            this.handleVideoSurfaceError(e);
	        }
	        else if (e.type === VideoSurfaceEvents_1.VideoSurfaceEvents.TIME_UPDATE && this.blockTimeUpdateEvent) {
	            return;
	        }
	        this.emit(e.type, e.data);
	    };
	    BasePlaybackAdapter.prototype.handleVideoSurfaceError = function (e) {
	        var error = this.videoSurface.video.error;
	        if (error) {
	            switch (error.code) {
	                case MediaError.MEDIA_ERR_ABORTED:
	                    this.throwError(ErrorCode_1.ErrorCode.MEDIA_ABORTED, error, error);
	                    break;
	            }
	        }
	    };
	    BasePlaybackAdapter.prototype.mapEvent = function (type, callback) {
	        return { type: type, callback: callback.bind(this) };
	    };
	    BasePlaybackAdapter.prototype.addEvents = function (adapter, map, callback) {
	        var hasOnMethod = Util_1.Util.isFunction(adapter.on);
	        for (var item in map) {
	            var node = map[item];
	            if (hasOnMethod) {
	                adapter.on(node.type || node, node.callback || callback);
	            }
	            else {
	                try {
	                    adapter.addEventListener(node.type || node, node.callback || callback);
	                }
	                catch (e) { }
	            }
	        }
	    };
	    BasePlaybackAdapter.prototype.removeEvents = function (adapter, map, callback) {
	        var hasOnMethod = Util_1.Util.isFunction(adapter.on);
	        for (var item in map) {
	            var node = map[item];
	            if (hasOnMethod) {
	                adapter.off(node.type || node, node.callback || callback);
	            }
	            else {
	                try {
	                    adapter.removeEventListener(node.type || node, node.callback || callback);
	                }
	                catch (e) { }
	            }
	        }
	    };
	    BasePlaybackAdapter.prototype.throwError = function (code, message, data, fatal) {
	        if (fatal === void 0) { fatal = true; }
	        this.log(LogLevel_1.LogLevel.ERROR, message);
	        this.emit(PlaybackAdapterEvents_1.PlaybackAdapterEvents.ERROR, { code: code, message: message, data: data, fatal: fatal });
	    };
	    BasePlaybackAdapter.prototype.log = function () {
	        var args = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            args[_i] = arguments[_i];
	        }
	        this.logger.log.apply(this.logger, args);
	    };
	    BasePlaybackAdapter.prototype.getErrorMessage = function (msg, isFatal, retry) {
	        if (retry === void 0) { retry = 'n/a'; }
	        return msg + " fatal: " + isFatal + " retry: " + retry;
	    };
	    BasePlaybackAdapter.prototype.normalizeAudioTracks = function (tracks, map) {
	        return tracks.map(function (item, index) { return ({
	            index: index,
	            id: !isNaN(item[map.id]) ? item[map.id].toString() : !isNaN(item.id) ? item.id.toString() : '',
	            type: item[map.type] || item.type || '',
	            lang: item[map.lang] || item.lang || '',
	            codec: item[map.codec] || item.codec || '',
	            label: item[map.label] || item.label || ''
	        }); }).filter(function (item) {
	            var c = item.codec;
	            return c === '' || c.indexOf('mp4a') !== -1;
	        });
	    };
	    BasePlaybackAdapter.prototype.normalizeQuality = function (item, index) {
	        return {
	            index: index,
	            bitrate: item.bitrate,
	            height: item.height,
	            width: item.width,
	            codec: item.codec || item.codecs
	        };
	    };
	    BasePlaybackAdapter.prototype.mergeStreamingConfigs = function (base, override) {
	        var _a;
	        if (!Util_1.Util.isEmpty((_a = override === null || override === void 0 ? void 0 : override[this.pType]) === null || _a === void 0 ? void 0 : _a.config)) {
	            return Util_1.Util.merge(base, override[this.pType].config);
	        }
	        return base;
	    };
	    return BasePlaybackAdapter;
	}(Emitter_1.Emitter));
	exports.BasePlaybackAdapter = BasePlaybackAdapter;

	});

	var DashjsAdapter_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.DashjsAdapter = void 0;














	var DashjsAdapter = (function (_super) {
	    tslib_es6.__extends(DashjsAdapter, _super);
	    function DashjsAdapter(videoSurface, config, logger) {
	        var _this = _super.call(this, videoSurface, config, logger) || this;
	        _this.dash = window.dashjs;
	        _this.dashFactory = window.dashjs;
	        _this.pType = PlaybackAdapterType_1.PlaybackAdapterType.DASHJS;
	        _this.startTime = NaN;
	        _this.seekTime = NaN;
	        _this.dashjsEventMap = [
	            {
	                type: _this.dash.MediaPlayer.events.STREAM_INITIALIZED,
	                callback: function (e) { return _this.onStreamInitialized(e); }
	            },
	            {
	                type: _this.dash.MediaPlayer.events.QUALITY_CHANGE_REQUESTED,
	                callback: function (e) { return _this.onQualityChangeRequested(e); }
	            },
	            {
	                type: _this.dash.MediaPlayer.events.QUALITY_CHANGE_RENDERED,
	                callback: function (e) { return _this.onQualityChangeRendered(e); }
	            },
	            {
	                type: _this.dash.MediaPlayer.events.FRAGMENT_LOADING_COMPLETED,
	                callback: function (e) { return _this.onFragmentLoadComplete(e); }
	            },
	            {
	                type: _this.dash.MediaPlayer.events.TRACK_CHANGE_RENDERED,
	                callback: function (e) { return _this.onTrackChangeRendered(e); }
	            },
	            {
	                type: _this.dash.MediaPlayer.events.ERROR,
	                callback: function (e) { return _this.onError(e); }
	            },
	            {
	                type: _this.dash.MediaPlayer.events.PLAYBACK_SEEKED,
	                callback: function (e) { return _this.onSeekComplete(e); }
	            },
	            {
	                type: _this.dash.MediaPlayer.events.PERIOD_SWITCH_STARTED,
	                callback: function (e) { return _this.onPeriodSwitchStarted(e); }
	            },
	            {
	                type: _this.dash.MediaPlayer.events.PERIOD_SWITCH_COMPLETED,
	                callback: function (e) { return _this.onPeriodSwitchCompleted(e); }
	            },
	            {
	                type: 'public_keySystemAccessComplete',
	                callback: function (e) { return _this.onKeySystemAccessComplete(e); }
	            },
	            {
	                type: DashEmsg_1.DashEmsg.GOOGLE_DAI,
	                callback: function (e) { return _this.onEmsgDai(e); }
	            }
	        ];
	        _this.logger.log(LogLevel_1.LogLevel.INFO, 'DashjsAdapter created');
	        return _this;
	    }
	    DashjsAdapter.prototype.initialize = function () {
	        _super.prototype.initialize.call(this);
	        var location = this.config.resource.location;
	        this.player = this.dashFactory.MediaPlayer().create();
	        this.logger.log(LogLevel_1.LogLevel.INFO, "Dashjs version: " + this.player.getVersion());
	        if (location.drm && location.drm.enabled) {
	            this.player.setProtectionData(this.getProtectionData(location.drm));
	        }
	        this.player.initialize(this.videoSurface.video, null, false);
	        this.configurePlayer(this.playback);
	        this.addEvents(this.player, this.dashjsEventMap);
	    };
	    DashjsAdapter.prototype.destroy = function () {
	        clearTimeout(this.periodSwitchTimeout);
	        this.removeEvents(this.player, this.dashjsEventMap);
	        this.player.reset();
	        this.player = null;
	        this.dash = null;
	        this.dashFactory = null;
	        return _super.prototype.destroy.call(this);
	    };
	    DashjsAdapter.prototype.configurePlayer = function (opts) {
	        var _a;
	        this.player.setLimitBitrateByPortal(opts.abr.capQualityToScreenSize);
	        this.player.setLiveDelayFragmentCount(opts.liveEdgeSyncFragmentCount);
	        this.player.getDebug().setLogToBrowserConsole(this.enableLogger);
	        this.player.setManifestLoaderRetryAttempts(DashjsRobustness_1.DashjsRobustness.MANIFEST_RETRY_ATTEMPTS);
	        this.player.setManifestLoaderRetryInterval(DashjsRobustness_1.DashjsRobustness.MANIFEST_RETRY_INTERVAL);
	        this.player.setFragmentLoaderRetryAttempts(DashjsRobustness_1.DashjsRobustness.FRAGMENT_RETRY_ATTEMPTS);
	        this.player.setFragmentLoaderRetryInterval(DashjsRobustness_1.DashjsRobustness.FRAGMENT_RETRY_INTERVAL);
	        this.player.enableForcedTextStreaming(true);
	        !isNaN(opts.abr.startBitrate) && this.player.setInitialBitrateFor(Playback_1.Playback.VIDEO, opts.abr.startBitrate / 1000);
	        !isNaN(opts.abr.minBitrate) && (this.minBitrate = opts.abr.minBitrate);
	        !isNaN(opts.abr.maxBitrate) && (this.maxBitrate = opts.abr.maxBitrate);
	        this.startTime = opts.startTime;
	        var settings = this.config.performanceSettings;
	        if (settings.forwardBufferLength != null) {
	            this.player.setStableBufferTime(settings.forwardBufferLength);
	        }
	        if (settings.backBufferLength != null) {
	            this.player.setBufferToKeep(settings.backBufferLength);
	        }
	        if (settings.topQualityForwardBufferLength != null) {
	            this.player.setBufferTimeAtTopQuality(settings.topQualityForwardBufferLength);
	            this.player.setBufferTimeAtTopQualityLongForm(settings.topQualityForwardBufferLength);
	        }
	        var o = (_a = this.config.resource.overrides) === null || _a === void 0 ? void 0 : _a.dashjs;
	        var fastSwitch = true, jumpGaps = true;
	        if (!Util_1.Util.isEmpty(o)) {
	            if (Util_1.Util.isBoolean(o.fastSwitchEnabled) && o.fastSwitchEnabled !== fastSwitch) {
	                this.logger.log(LogLevel_1.LogLevel.INFO, "Overriding fastSwitchEnabled default value of " + fastSwitch + " with " + o.fastSwitchEnabled);
	                fastSwitch = o.fastSwitchEnabled;
	            }
	            if (Util_1.Util.isBoolean(o.jumpGaps) && o.jumpGaps !== jumpGaps) {
	                this.logger.log(LogLevel_1.LogLevel.INFO, "Overriding jumpGaps default value of " + jumpGaps + " with " + o.jumpGaps);
	                jumpGaps = o.jumpGaps;
	            }
	        }
	        this.player.setFastSwitchEnabled(fastSwitch);
	        this.player.setJumpGaps(jumpGaps);
	    };
	    DashjsAdapter.prototype.loadMediaUrl = function () {
	        this.blockTimeUpdateEvent = true;
	        this.player.attachSource(this.mediaUrl);
	        return _super.prototype.loadMediaUrl.call(this);
	    };
	    DashjsAdapter.prototype.seek = function (position) {
	        this.seekTime = position;
	        this.blockTimeUpdateEvent = true;
	        this.player.seek(position);
	    };
	    DashjsAdapter.prototype.play = function () {
	        this.player.play();
	    };
	    DashjsAdapter.prototype.suspend = function () {
	        this.player.scheduleWhilePaused = false;
	    };
	    DashjsAdapter.prototype.resume = function () {
	        this.player.scheduleWhilePaused = true;
	    };
	    Object.defineProperty(DashjsAdapter.prototype, "audioTrack", {
	        set: function (track) {
	            var audioTrack = Util_1.Util.find(this.audioTracks, function (t) { return track.id == t.id; });
	            if (!audioTrack) {
	                return;
	            }
	            this.player.setCurrentTrack(audioTrack);
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(DashjsAdapter.prototype, "textTrack", {
	        set: function (track) {
	            this.videoSurface.textTrack = track;
	            this.player.setTextTrack(this.getTextTrackIndex(track));
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(DashjsAdapter.prototype, "time", {
	        get: function () {
	            return this.player.time();
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(DashjsAdapter.prototype, "duration", {
	        get: function () {
	            return this.player.duration();
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(DashjsAdapter.prototype, "currentIndex", {
	        get: function () {
	            return this.player.getQualityFor(Playback_1.Playback.VIDEO);
	        },
	        set: function (index) {
	            this.player.setQualityFor(Playback_1.Playback.VIDEO, index);
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(DashjsAdapter.prototype, "autoQualitySwitching", {
	        get: function () {
	            return this.player.getAutoSwitchQualityFor(Playback_1.Playback.VIDEO);
	        },
	        set: function (value) {
	            this.player.setAutoSwitchQualityFor(Playback_1.Playback.VIDEO, value);
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(DashjsAdapter.prototype, "minBitrate", {
	        get: function () {
	            return this.player.getMinAllowedBitrateFor(Playback_1.Playback.VIDEO) * 1000;
	        },
	        set: function (value) {
	            this.player.setMinAllowedBitrateFor(Playback_1.Playback.VIDEO, (value / 1000) - 1);
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(DashjsAdapter.prototype, "maxBitrate", {
	        get: function () {
	            return this.player.getMaxAllowedBitrateFor(Playback_1.Playback.VIDEO) * 1000;
	        },
	        set: function (value) {
	            this.player.setMaxAllowedBitrateFor(Playback_1.Playback.VIDEO, value / 1000);
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(DashjsAdapter.prototype, "manifestQualities", {
	        get: function () {
	            return this.player.getBitrateInfoListFor(Playback_1.Playback.VIDEO).map(function (item, index) { return ({
	                index: index,
	                bitrate: item.bitrate,
	                width: item.width,
	                height: item.height,
	                codec: null
	            }); });
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(DashjsAdapter.prototype, "liveStreamInfo", {
	        get: function () {
	            var details = this.liveStreamInfoVO;
	            if (this.pIsLiveStream && this.lowLevelDvrDetails && this.time >= 0) {
	                var d = this.lowLevelDvrDetails;
	                details.relativeTime = this.time;
	                details.relativeDuration = this.duration;
	                details.absoluteTime = Math.round(this.player.timeAsUTC() * 1000);
	                details.absoluteDuration = Math.round(this.player.durationAsUTC() * 1000);
	                details.dvrWindowSize = this.player.getDVRWindowSize();
	                details.liveEdgeOffset = Math.floor(this.player.getLiveDelay() + d.duration);
	                details.safeSeekingTime = Math.max(details.relativeDuration - details.dvrWindowSize, 0);
	                details.safeSeekingDuration = Math.floor(details.relativeDuration - details.liveEdgeOffset);
	                if (details.safeSeekingDuration < details.relativeTime) {
	                    details.safeSeekingDuration = Math.floor(details.relativeTime);
	                }
	                details.isPlayingLive = Math.ceil(details.relativeTime) >= details.safeSeekingDuration;
	            }
	            return details;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(DashjsAdapter.prototype, "fragmentType", {
	        get: function () {
	            var track = this.player.getCurrentTrackFor('video');
	            return track ? track.mimeType : '';
	        },
	        enumerable: false,
	        configurable: true
	    });
	    DashjsAdapter.prototype.onStreamInitialized = function (e) {
	        this.networkErrorRetryCount = 0;
	        this.pIsLiveStream = this.player.isDynamic();
	        this.emit(PlaybackAdapterEvents_1.PlaybackAdapterEvents.MANIFEST_PARSED, { profile: this.manifestQualities });
	        this.audioTracks = this.player.getTracksFor('audio');
	        this.updateAudioTracks();
	        if (this.startTime > 0) {
	            this.blockTimeUpdateEvent = true;
	            this.videoSurface.once(VideoSurfaceEvents_1.VideoSurfaceEvents.LOADED_METADATA, this.seek.bind(this, this.startTime));
	            this.startTime = NaN;
	        }
	    };
	    DashjsAdapter.prototype.onSeekComplete = function (e) {
	        var time = this.videoSurface.time;
	        var seek = this.seekTime;
	        if (seek > 0) {
	            var d = (this.lowLevelDvrDetails && this.lowLevelDvrDetails.duration) || 6;
	            if (Math.abs(seek - time) > d) {
	                this.seek(seek);
	                return;
	            }
	            else {
	                this.seekTime = NaN;
	            }
	        }
	        if (time > 0) {
	            this.blockTimeUpdateEvent = false;
	            this.emit(VideoSurfaceEvents_1.VideoSurfaceEvents.TIME_UPDATE);
	        }
	    };
	    DashjsAdapter.prototype.onPeriodSwitchStarted = function (e) {
	        if (this.videoSurface.time > 0) {
	            this.blockTimeUpdateEvent = true;
	        }
	        var _a = this.config.textTrackSettings, mode = _a.mode, enabledMode = _a.enabledMode;
	        if (mode == enabledMode) {
	            this.ccMode = mode;
	        }
	    };
	    DashjsAdapter.prototype.onEmsgDai = function (e) {
	        if (!e && !e.event) {
	            return;
	        }
	        var vo = {
	            id: DashEmsg_1.DashEmsg.GOOGLE_DAI,
	            info: e.event.messageData,
	            data: e.event
	        };
	        this.logger.log(LogLevel_1.LogLevel.DEBUG, "DAI - Event ID: " + e.event.id + " Start time: " + e.event.presentationTime + " Impression ID: " + e.event.messageData);
	        this.emit(TextTrackSurfaceEvents_1.TextTrackSurfaceEvents.METADATA_CUEPOINT, vo);
	    };
	    DashjsAdapter.prototype.onPeriodSwitchCompleted = function (e) {
	        var _this = this;
	        if (this.ccMode) {
	            var index_1 = this.getTextTrackIndex(this.videoSurface.textTrack);
	            this.player.setTextTrack(-1);
	            this.periodSwitchTimeout = setTimeout(function () {
	                _this.textTrackMode = _this.ccMode;
	                _this.ccMode = null;
	                _this.player.setTextTrack(index_1);
	            }, 1000);
	        }
	        if (this.seekTime > 0 || (e.toStreamInfo.index > 1 && this.videoSurface.time == 0)) {
	            return;
	        }
	        this.blockTimeUpdateEvent = false;
	    };
	    DashjsAdapter.prototype.onKeySystemAccessComplete = function (e) {
	        if (e.data) {
	            this.emit(PlaybackAdapterEvents_1.PlaybackAdapterEvents.DRM_KEYSYSTEM_CREATED, { keysystem: e.data.mksa.keySystem });
	        }
	    };
	    DashjsAdapter.prototype.updateAudioTracks = function () {
	        var current = this.getCurrentAudioTrackInfo(this.player.getCurrentTrackFor('audio').id);
	        this.normalizedAudioTracks = this.normalizeAudioTracks(this.audioTracks, {
	            type: 'roles',
	            label: 'lang'
	        });
	        this.normalizedAudioTracks.forEach(function (audioTrack) {
	            if (Array.isArray(audioTrack.type)) {
	                audioTrack.type = audioTrack.type.join(',');
	            }
	        });
	        if (current) {
	            this.emit(PlaybackAdapterEvents_1.PlaybackAdapterEvents.AUDIO_TRACK_UPDATED, {
	                tracks: this.normalizedAudioTracks,
	                track: this.normalizedAudioTracks[current.index],
	            });
	        }
	    };
	    DashjsAdapter.prototype.onTrackChangeRendered = function (e) {
	        if (e.mediaType === Playback_1.Playback.AUDIO) {
	            var current = this.getCurrentAudioTrackInfo(this.player.getCurrentTrackFor('audio').id);
	            this.emit(PlaybackAdapterEvents_1.PlaybackAdapterEvents.AUDIO_TRACK_CHANGE, { track: this.normalizedAudioTracks[current.index] });
	        }
	    };
	    DashjsAdapter.prototype.getCurrentAudioTrackInfo = function (id) {
	        var v = { index: 0, track: this.audioTracks[0] }, i = this.audioTracks.length;
	        while (i--) {
	            if (this.audioTracks[i].id === id) {
	                v = { index: i, track: this.audioTracks[i] };
	                return v;
	            }
	        }
	        return v;
	    };
	    DashjsAdapter.prototype.onQualityChangeRequested = function (e) {
	        if (e.mediaType === Playback_1.Playback.VIDEO) {
	            this.emit(PlaybackAdapterEvents_1.PlaybackAdapterEvents.ABR_QUALITY_SWITCHING, { index: e.newQuality });
	        }
	    };
	    DashjsAdapter.prototype.onQualityChangeRendered = function (e) {
	        if (e.mediaType === Playback_1.Playback.VIDEO) {
	            this.checkAbrConstraints(this.player.getTopBitrateInfoFor(Playback_1.Playback.VIDEO).qualityIndex);
	            this.emit(PlaybackAdapterEvents_1.PlaybackAdapterEvents.ABR_QUALITY_LOADED, { index: e.newQuality });
	        }
	    };
	    DashjsAdapter.prototype.onFragmentLoadComplete = function (e) {
	        this.networkErrorRetryCount = 0;
	        if (e.request.mediaType === Playback_1.Playback.VIDEO) {
	            this.lowLevelDvrDetails = e.request;
	            var info = this.player.getTopBitrateInfoFor(Playback_1.Playback.VIDEO);
	            if (info) {
	                this.checkAbrConstraints(info.qualityIndex);
	            }
	            if (this.multiCdnHeaderPresent) {
	                var metric = this.player.getMetricsFor(Playback_1.Playback.VIDEO).HttpList;
	                if (metric && metric.length > 0) {
	                    var header = this.getCdnResponseHeader(metric[metric.length - 1]._responseHeaders);
	                    this.multiCdnHeaderPresent = !!header;
	                    if (this.multiCdnHeaderPresent) {
	                        this.emit(PlaybackAdapterEvents_1.PlaybackAdapterEvents.MULTI_CDN, { cdn: header });
	                    }
	                }
	            }
	            this.emit(PlaybackAdapterEvents_1.PlaybackAdapterEvents.FRAGMENT_LOADED, { bandwidth: this.player.getAverageThroughput(Playback_1.Playback.VIDEO) });
	        }
	    };
	    DashjsAdapter.prototype.onError = function (e) {
	        if (e.error.code) {
	            switch (e.error.code) {
	                case this.dash.MediaPlayer.errors.DOWNLOAD_ERROR_ID_CONTENT_CODE:
	                case this.dash.MediaPlayer.errors.DOWNLOAD_ERROR_ID_INITIALIZATION_CODE:
	                case this.dash.MediaPlayer.errors.DOWNLOAD_ERROR_ID_MANIFEST_CODE:
	                    this.handleNetworkErrors(e);
	                    break;
	                case this.dash.MediaPlayer.errors.MANIFEST_LOADER_PARSING_FAILURE_ERROR_CODE:
	                    this.throwError(ErrorCode_1.ErrorCode.DASHJS_PARSE_ERROR, AppResources_1.AppResources.messages.FATAL_PLAYBACK_MEDIA_ERROR + " : " + e.error.message, e.error);
	                    break;
	                case this.dash.MediaPlayer.errors.MEDIASOURCE_TYPE_UNSUPPORTED_CODE:
	                    this.throwError(ErrorCode_1.ErrorCode.DASHJS_SRC_NOT_SUPPORTED, AppResources_1.AppResources.messages.FATAL_PLAYBACK_MEDIA_ERROR + " : " + e.error.message, e.error);
	                    break;
	                case this.dash.MediaPlayer.errors.MEDIA_KEYERR_CODE:
	                case this.dash.MediaPlayer.errors.MEDIA_KEYERR_UNKNOWN_CODE:
	                case this.dash.MediaPlayer.errors.MEDIA_KEYERR_CLIENT_CODE:
	                case this.dash.MediaPlayer.errors.MEDIA_KEYERR_SERVICE_CODE:
	                case this.dash.MediaPlayer.errors.MEDIA_KEYERR_OUTPUT_CODE:
	                case this.dash.MediaPlayer.errors.MEDIA_KEYERR_HARDWARECHANGE_CODE:
	                case this.dash.MediaPlayer.errors.MEDIA_KEYERR_DOMAIN_CODE:
	                case this.dash.MediaPlayer.errors.CAPABILITY_MEDIAKEYS_ERROR_CODE:
	                    this.throwError(ErrorCode_1.ErrorCode.DASHJS_DRM_ERROR, AppResources_1.AppResources.messages.FATAL_PLAYBACK_MEDIA_ERROR + " : " + e.error.message, e.error);
	                    break;
	                default:
	                    this.throwError(ErrorCode_1.ErrorCode.UNSPECIFIED_DASHJS_ERROR, e.error.message, e.error, false);
	            }
	        }
	    };
	    DashjsAdapter.prototype.handleNetworkErrors = function (e) {
	        var max = DashjsRobustness_1.DashjsRobustness.FATAL_ERROR_RECOVERY_ATTEMPTS;
	        if (this.networkErrorRetryCount < max) {
	            if (e.error.code === this.dash.MediaPlayer.errors.DOWNLOAD_ERROR_ID_MANIFEST_CODE) {
	                this.player.setManifestLoaderRetryAttempts(1);
	                this.player.setManifestLoaderRetryInterval(DashjsRobustness_1.DashjsRobustness.FATAL_ERROR_RECOVERY_ATTEMPTS * this.networkErrorRetryCount);
	            }
	            this.player.attachSource(this.mediaUrl += "#s=" + this.player.time());
	            this.player.play();
	            this.networkErrorRetryCount++;
	            this.log(LogLevel_1.LogLevel.ERROR, this.getErrorMessage(AppResources_1.AppResources.messages.RETRY_PLAYBACK_NETWORK_ERROR, false, this.networkErrorRetryCount + " / " + max), e.error);
	        }
	        else {
	            this.throwError(ErrorCode_1.ErrorCode.DASHJS_NETWORK_ERROR, AppResources_1.AppResources.messages.FATAL_PLAYBACK_NETWORK_ERROR + " : " + e.error.message, e.error);
	        }
	    };
	    DashjsAdapter.prototype.getCdnResponseHeader = function (headers) {
	        if (headers) {
	            var map = {};
	            headers = headers.trim().split(/[\r\n]+/);
	            headers.forEach(function (item) {
	                var parts = item.split(': ');
	                var header = parts.shift();
	                var value = parts.join(': ');
	                map[header] = value;
	            });
	            return map[Playback_1.Playback.MULTI_CDN] || null;
	        }
	        return null;
	    };
	    DashjsAdapter.prototype.getProtectionData = function (drmParams) {
	        var data = {};
	        if (!Util_1.Util.isEmpty(drmParams.widevine)) {
	            data[DrmType_1.DrmType.WIDEVINE] = {
	                serverURL: drmParams.widevine.url,
	                httpRequestHeaders: drmParams.widevine.header,
	                audioRobustness: 'SW_SECURE_CRYPTO',
	                videoRobustness: 'SW_SECURE_CRYPTO'
	            };
	        }
	        if (!Util_1.Util.isEmpty(drmParams.playready)) {
	            data[DrmType_1.DrmType.PLAYREADY] = {
	                serverURL: drmParams.playready.url,
	                httpRequestHeaders: drmParams.playready.header,
	                audioRobustness: 'SW_SECURE_CRYPTO',
	                videoRobustness: 'SW_SECURE_CRYPTO'
	            };
	        }
	        return data;
	    };
	    DashjsAdapter.prototype.getTextTrackIndex = function (track) {
	        return Util_1.Util.findIndex(this.videoSurface.textTracks, function (t) { return track == t; });
	    };
	    return DashjsAdapter;
	}(BasePlaybackAdapter_1.BasePlaybackAdapter));
	exports.DashjsAdapter = DashjsAdapter;

	});

	var HlsjsRobustness_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.HlsjsRobustness = void 0;
	var HlsjsRobustness;
	(function (HlsjsRobustness) {
	    HlsjsRobustness[HlsjsRobustness["BUFFER_LEVEL_PRELOAD"] = 12] = "BUFFER_LEVEL_PRELOAD";
	    HlsjsRobustness[HlsjsRobustness["BUFFER_LEVEL_PLAYBACK"] = 60] = "BUFFER_LEVEL_PLAYBACK";
	    HlsjsRobustness[HlsjsRobustness["MANIFEST_RETRY_ATTEMPTS"] = 2] = "MANIFEST_RETRY_ATTEMPTS";
	    HlsjsRobustness[HlsjsRobustness["MANIFEST_RETRY_DELAY"] = 1000] = "MANIFEST_RETRY_DELAY";
	    HlsjsRobustness[HlsjsRobustness["LEVEL_RETRY_TIMEOUT"] = 2000] = "LEVEL_RETRY_TIMEOUT";
	    HlsjsRobustness[HlsjsRobustness["LEVEL_RETRY_DELAY"] = 500] = "LEVEL_RETRY_DELAY";
	    HlsjsRobustness[HlsjsRobustness["FRAGMENT_RETRY_TIMEOUT"] = 2000] = "FRAGMENT_RETRY_TIMEOUT";
	    HlsjsRobustness[HlsjsRobustness["FRAGMENT_RETRY_DELAY"] = 500] = "FRAGMENT_RETRY_DELAY";
	    HlsjsRobustness[HlsjsRobustness["FATAL_ERROR_RECOVERY_ATTEMPTS"] = 3] = "FATAL_ERROR_RECOVERY_ATTEMPTS";
	})(HlsjsRobustness = exports.HlsjsRobustness || (exports.HlsjsRobustness = {}));

	});

	var BaseHtml5Adapter_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.BaseHtml5Adapter = void 0;



	var BaseHtml5Adapter = (function (_super) {
	    tslib_es6.__extends(BaseHtml5Adapter, _super);
	    function BaseHtml5Adapter() {
	        var _this = _super !== null && _super.apply(this, arguments) || this;
	        _this.lastKnownTimes = {
	            absolute: NaN,
	            relative: NaN,
	            end: NaN
	        };
	        return _this;
	    }
	    BaseHtml5Adapter.prototype.seek = function (position) {
	        if (this.pIsLiveStream) {
	            var lsi = this.liveStreamInfoVO;
	            position = Util_1.Util.mapToRange(position, 0, lsi.relativeDuration, lsi.safeSeekingTime, lsi.safeSeekingDuration);
	        }
	        _super.prototype.seek.call(this, position);
	    };
	    Object.defineProperty(BaseHtml5Adapter.prototype, "time", {
	        get: function () {
	            return (this.pIsLiveStream) ? this.liveStreamInfoVO.relativeTime : this.videoSurface.time;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(BaseHtml5Adapter.prototype, "duration", {
	        get: function () {
	            return (this.pIsLiveStream) ? this.liveStreamInfoVO.relativeDuration : this.videoSurface.duration;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(BaseHtml5Adapter.prototype, "seekable", {
	        get: function () {
	            var result = { start: 0, end: 0 };
	            var video = this.videoSurface.video;
	            var range = video.seekable;
	            var index = range.length - 1;
	            if (index >= 0) {
	                result.start = range.start(index);
	                result.end = range.end(index);
	            }
	            return result;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(BaseHtml5Adapter.prototype, "segmentDuration", {
	        get: function () {
	            return 6;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(BaseHtml5Adapter.prototype, "liveStreamInfo", {
	        get: function () {
	            var details = this.liveStreamInfoVO;
	            var video = this.videoSurface.video;
	            var _a = this.seekable, start = _a.start, end = _a.end;
	            var time = video.currentTime;
	            var duration = end - start;
	            var segmentDuration = this.segmentDuration;
	            var count = this.playback.liveEdgeSyncFragmentCount;
	            details.relativeTime = Math.max(time - start, 0);
	            details.relativeDuration = duration;
	            details.absoluteDuration = Date.now();
	            details.dvrWindowSize = Math.floor(duration);
	            details.liveEdgeOffset = (segmentDuration * count) + segmentDuration;
	            details.safeSeekingTime = Math.ceil(start);
	            details.safeSeekingDuration = Math.floor(end);
	            details.isPlayingLive = Math.ceil(time + details.liveEdgeOffset) >= details.safeSeekingDuration;
	            if (end != this.lastKnownTimes.end) {
	                this.lastKnownTimes.end = end;
	                this.lastKnownTimes.absolute = Math.round(details.absoluteDuration - (details.relativeTime * 1000));
	                this.lastKnownTimes.relative = time;
	            }
	            var delta = Math.round((time - this.lastKnownTimes.relative) * 1000);
	            details.absoluteTime = this.lastKnownTimes.absolute + delta;
	            return details;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    return BaseHtml5Adapter;
	}(BasePlaybackAdapter_1.BasePlaybackAdapter));
	exports.BaseHtml5Adapter = BaseHtml5Adapter;

	});

	var HlsjsAdapter_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.HlsjsAdapter = void 0;













	var HlsjsAdapter = (function (_super) {
	    tslib_es6.__extends(HlsjsAdapter, _super);
	    function HlsjsAdapter(videoSurface, config, logger) {
	        var _this = _super.call(this, videoSurface, config, logger) || this;
	        _this.pType = PlaybackAdapterType_1.PlaybackAdapterType.HLSJS;
	        _this.Hls = window.Hls;
	        _this.pFramerate = Number.NaN;
	        _this.pFragmentType = '';
	        _this.hlsjsEventMap = [
	            {
	                type: _this.Hls.Events.MANIFEST_PARSED,
	                callback: function (type, data) { return _this.onManifestParsed(type, data); }
	            },
	            {
	                type: _this.Hls.Events.MANIFEST_LOADED,
	                callback: function (type, data) { return _this.onManifestLoaded(type, data); }
	            },
	            {
	                type: _this.Hls.Events.LEVEL_LOADED,
	                callback: function (type, data) { return _this.onLevelLoaded(type, data); }
	            },
	            {
	                type: _this.Hls.Events.LEVEL_UPDATED,
	                callback: function (type, data) { return _this.onLevelUpdated(type, data); }
	            },
	            {
	                type: _this.Hls.Events.LEVEL_SWITCHING,
	                callback: function (type, data) { return _this.onLevelSwitching(type, data); }
	            },
	            {
	                type: _this.Hls.Events.LEVEL_SWITCHED,
	                callback: function (type, data) { return _this.onLevelSwitched(type, data); }
	            },
	            {
	                type: _this.Hls.Events.FRAG_LOADED,
	                callback: function (type, data) { return _this.onFragmentLoaded(type, data); }
	            },
	            {
	                type: _this.Hls.Events.FRAG_PARSING_DATA,
	                callback: function (type, data) { return _this.onFragmentParsingData(type, data); }
	            },
	            {
	                type: _this.Hls.Events.AUDIO_TRACKS_UPDATED,
	                callback: function (type, data) { return _this.onAudioTrackUpdated(type, data); }
	            },
	            {
	                type: _this.Hls.Events.AUDIO_TRACK_SWITCHED,
	                callback: function (type, data) { return _this.onAudioTrackSwitched(type, data); }
	            },
	            {
	                type: _this.Hls.Events.ERROR,
	                callback: function (type, data) { return _this.onError(type, data); }
	            }
	        ];
	        _this.logger.log(LogLevel_1.LogLevel.INFO, 'HlsjsAdapter created');
	        return _this;
	    }
	    HlsjsAdapter.prototype.initialize = function () {
	        _super.prototype.initialize.call(this);
	        var hlsConfig = this.Hls.DefaultConfig;
	        hlsConfig.debug = this.enableLogger;
	        hlsConfig.capLevelToPlayerSize = this.playback.abr.capQualityToScreenSize;
	        hlsConfig.autoStartLoad = false;
	        hlsConfig.liveSyncDurationCount = this.playback.liveEdgeSyncFragmentCount;
	        hlsConfig.manifestLoadingMaxRetry = HlsjsRobustness_1.HlsjsRobustness.MANIFEST_RETRY_ATTEMPTS;
	        hlsConfig.manifestLoadingRetryDelay = HlsjsRobustness_1.HlsjsRobustness.MANIFEST_RETRY_DELAY;
	        hlsConfig.levelLoadingRetryDelay = HlsjsRobustness_1.HlsjsRobustness.LEVEL_RETRY_DELAY;
	        hlsConfig.levelLoadingTimeOut = HlsjsRobustness_1.HlsjsRobustness.LEVEL_RETRY_TIMEOUT;
	        hlsConfig.fragLoadingRetryDelay = HlsjsRobustness_1.HlsjsRobustness.FRAGMENT_RETRY_DELAY;
	        hlsConfig.fragLoadingTimeOut = HlsjsRobustness_1.HlsjsRobustness.FRAGMENT_RETRY_TIMEOUT;
	        hlsConfig.enableCEA708Captions = true;
	        hlsConfig.xhrSetup = this.onRequest.bind(this);
	        var settings = this.config.performanceSettings;
	        if (settings.forwardBufferLength != null) {
	            hlsConfig.maxBufferLength = settings.forwardBufferLength;
	        }
	        if (settings.backBufferLength != null) {
	            hlsConfig.liveBackBufferLength = settings.backBufferLength;
	        }
	        if (settings.topQualityForwardBufferLength != null) {
	            hlsConfig.maxMaxBufferLength = settings.topQualityForwardBufferLength;
	        }
	        hlsConfig = this.mergeStreamingConfigs(hlsConfig, this.config.resource.overrides);
	        this.logger.log(LogLevel_1.LogLevel.INFO, "Hlsjs version: " + this.Hls.version);
	        this.player = new this.Hls(hlsConfig);
	        this.player.subtitleDisplay = this.config.textTrackSettings.native;
	        this.player.attachMedia(this.videoSurface.video);
	        this.addEvents(this.player, this.hlsjsEventMap);
	    };
	    HlsjsAdapter.prototype.loadMediaUrl = function () {
	        this.player.loadSource(this.mediaUrl);
	        return _super.prototype.loadMediaUrl.call(this);
	    };
	    HlsjsAdapter.prototype.destroy = function () {
	        var _this = this;
	        return _super.prototype.destroy.call(this)
	            .then(function () {
	            _this.removeEvents(_this.player, _this.hlsjsEventMap);
	            _this.player.destroy();
	            _this.player = null;
	            _this.Hls = null;
	        });
	    };
	    HlsjsAdapter.prototype.play = function () {
	        if (this.player.config.maxMaxBufferLength != HlsjsRobustness_1.HlsjsRobustness.BUFFER_LEVEL_PLAYBACK) {
	            this.player.config.maxMaxBufferLength = HlsjsRobustness_1.HlsjsRobustness.BUFFER_LEVEL_PLAYBACK;
	        }
	        _super.prototype.play.call(this);
	    };
	    HlsjsAdapter.prototype.suspend = function () {
	        this.player.stopLoad();
	    };
	    HlsjsAdapter.prototype.resume = function () {
	        this.player.startLoad();
	    };
	    Object.defineProperty(HlsjsAdapter.prototype, "audioTrack", {
	        set: function (track) {
	            this.player.audioTrack = track.index;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(HlsjsAdapter.prototype, "currentIndex", {
	        get: function () {
	            return this.player.loadLevel;
	        },
	        set: function (index) {
	            this.player.loadLevel = index;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(HlsjsAdapter.prototype, "autoQualitySwitching", {
	        get: function () {
	            return this.player.loadLevel === -1;
	        },
	        set: function (value) {
	            this.player.loadLevel = value ? -1 : this.player.nextLoadLevel;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(HlsjsAdapter.prototype, "minBitrate", {
	        get: function () {
	            return this.player.config.minAutoBitrate;
	        },
	        set: function (value) {
	            this.player.config.minAutoBitrate = value;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(HlsjsAdapter.prototype, "maxBitrate", {
	        get: function () {
	            return this.player.levels[this.player.autoLevelCapping].bitrate;
	        },
	        set: function (value) {
	            if (!this.player.config.capLevelToPlayerSize) {
	                this.player.autoLevelCapping = isNaN(value) ? -1 : Utils_1.Utils.getIndexForBitrate(this.player.levels, value, false);
	            }
	            else {
	                this.logger.log(LogLevel_1.LogLevel.WARN, AppResources_1.AppResources.messages.CAP_LEVEL_MAXBITRATE);
	            }
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(HlsjsAdapter.prototype, "manifestQualities", {
	        get: function () {
	            return this.player.levels.map(function (item, index) { return ({
	                index: index,
	                bitrate: item.bitrate,
	                width: item.width,
	                height: item.height,
	                codec: (item.attrs) ? item.attrs.CODECS : undefined
	            }); });
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(HlsjsAdapter.prototype, "seekable", {
	        get: function () {
	            var duration = this.videoSurface.video.duration;
	            var dvr = (this.lowLevelDvrDetails) ? this.lowLevelDvrDetails.totalduration : 0;
	            return { start: duration - dvr, end: duration };
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(HlsjsAdapter.prototype, "segmentDuration", {
	        get: function () {
	            return (this.lowLevelDvrDetails) ? this.lowLevelDvrDetails.averagetargetduration : _super.prototype['segmentDuration'];
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(HlsjsAdapter.prototype, "framerate", {
	        get: function () {
	            return this.pFramerate;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(HlsjsAdapter.prototype, "fragmentType", {
	        get: function () {
	            return this.pFragmentType;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    HlsjsAdapter.prototype.onVideoSurfaceEvent = function (e) {
	        switch (e.type) {
	            case TextTrackSurfaceEvents_1.TextTrackSurfaceEvents.TEXT_TRACK_CHANGE:
	            case TextTrackSurfaceEvents_1.TextTrackSurfaceEvents.TEXT_TRACK_DISPLAY_MODE_CHANGE:
	                var track_1 = this.videoSurface.textTrack;
	                var mode = track_1.mode;
	                var enabled = mode != TextTrackMode_1.TextTrackMode.DISABLED;
	                if (enabled) {
	                    var index = Util_1.Util.findIndex(this.player.subtitleTracks, function (t) { return t.lang == track_1.language && t.name == track_1.label; });
	                    if (this.player.subtitleTrack != index) {
	                        this.player.subtitleTrack = index;
	                    }
	                }
	                break;
	        }
	        _super.prototype.onVideoSurfaceEvent.call(this, e);
	    };
	    HlsjsAdapter.prototype.onManifestParsed = function (type, data) {
	        this.emit(PlaybackAdapterEvents_1.PlaybackAdapterEvents.MANIFEST_PARSED, { profile: this.manifestQualities });
	    };
	    HlsjsAdapter.prototype.onManifestLoaded = function (type, data) {
	        var startTime = this.playback.startTime;
	        this.player.startLoad(!isNaN(startTime) ? startTime : -1);
	        if (this.player.subtitleTracks.length > 0) {
	            this.player.subtitleTrack = -1;
	        }
	        this.setBitrateRestrictionAtStartup();
	        this.emit(PlaybackAdapterEvents_1.PlaybackAdapterEvents.MANIFEST_LOADED);
	    };
	    HlsjsAdapter.prototype.onLevelLoaded = function (type, data) {
	        this.lowLevelDvrDetails = data.details;
	        this.pIsLiveStream = this.lowLevelDvrDetails.live;
	        this.emit(PlaybackAdapterEvents_1.PlaybackAdapterEvents.ABR_QUALITY_LOADED, { index: data.level });
	    };
	    HlsjsAdapter.prototype.onLevelUpdated = function (type, data) {
	        this.checkAbrConstraints(this.player.maxAutoLevel);
	    };
	    HlsjsAdapter.prototype.onLevelSwitching = function (type, data) {
	        this.emit(PlaybackAdapterEvents_1.PlaybackAdapterEvents.ABR_QUALITY_SWITCHING, { index: data.level });
	    };
	    HlsjsAdapter.prototype.onLevelSwitched = function (type, data) {
	        this.emit(PlaybackAdapterEvents_1.PlaybackAdapterEvents.ABR_QUALITY_LOADED, { index: data.level });
	    };
	    HlsjsAdapter.prototype.onFragmentLoaded = function (type, data) {
	        this.networkErrorRetryCount = 0;
	        this.mediaErrorRetryCount = 0;
	        if (!this.pFragmentType) {
	            this.pFragmentType = Util_1.Util.getMimeType(data.frag.url);
	        }
	        this.checkAbrConstraints(this.player.maxAutoLevel);
	        var bw = (data.stats.loaded * 8000) / Number(window.performance.now() - data.stats.trequest);
	        this.emit(PlaybackAdapterEvents_1.PlaybackAdapterEvents.FRAGMENT_LOADED, { bandwidth: bw });
	    };
	    HlsjsAdapter.prototype.onFragmentParsingData = function (type, data) {
	        this.pFramerate = data.nb / (data.endPTS - data.startPTS);
	        this.emit(PlaybackAdapterEvents_1.PlaybackAdapterEvents.FRAGMENT_PARSED, { rate: this.pFramerate });
	    };
	    HlsjsAdapter.prototype.onAudioTrackUpdated = function (type, data) {
	        this.normalizedAudioTracks = this.normalizeAudioTracks(this.player.audioTracks, {
	            codec: 'audioCodec',
	            label: 'name'
	        });
	        this.emit(PlaybackAdapterEvents_1.PlaybackAdapterEvents.AUDIO_TRACK_UPDATED, {
	            tracks: this.normalizedAudioTracks,
	            track: this.normalizedAudioTracks[this.player.audioTrack],
	        });
	    };
	    HlsjsAdapter.prototype.onAudioTrackSwitched = function (type, data) {
	        this.emit(PlaybackAdapterEvents_1.PlaybackAdapterEvents.AUDIO_TRACK_CHANGE, { track: this.normalizedAudioTracks[parseInt(data.id)] });
	    };
	    HlsjsAdapter.prototype.onRequest = function (xhr, url) {
	        var _this = this;
	        xhr.withCredentials = (url.indexOf('akamaihd') > -1 && url.indexOf('csmil') > -1);
	        if (this.multiCdnHeaderPresent) {
	            xhr.addEventListener('readystatechange', function (e) {
	                if (url.indexOf('.ts') !== -1 && xhr.readyState === XMLHttpRequest.HEADERS_RECEIVED) {
	                    if (_this.multiCdnHeaderPresent) {
	                        var headers = xhr.getAllResponseHeaders();
	                        _this.multiCdnHeaderPresent = headers.indexOf(Playback_1.Playback.MULTI_CDN) !== -1;
	                        if (_this.multiCdnHeaderPresent) {
	                            _this.emit(PlaybackAdapterEvents_1.PlaybackAdapterEvents.MULTI_CDN, { cdn: xhr.getResponseHeader(Playback_1.Playback.MULTI_CDN.toUpperCase()) });
	                        }
	                    }
	                }
	            });
	        }
	    };
	    HlsjsAdapter.prototype.onError = function (type, data) {
	        var code = ErrorCode_1.ErrorCode.UNSPECIFIED_HLSJS_ERROR;
	        switch (data.type) {
	            case this.Hls.ErrorTypes.NETWORK_ERROR:
	                data.fatal && this.handleNetworkErrors(data);
	                break;
	            case this.Hls.ErrorTypes.MEDIA_ERROR:
	                data.fatal && this.handleMediaErrors(data);
	                break;
	            case this.Hls.ErrorTypes.MUX_ERROR:
	                code = ErrorCode_1.ErrorCode.HLSJS_MUX_ERROR;
	            default:
	                var msg = this.getErrorMessage("" + data.details, data.fatal);
	                this.log(LogLevel_1.LogLevel.ERROR, msg, data);
	                this.throwError(code, msg, data, data.fatal);
	        }
	    };
	    HlsjsAdapter.prototype.handleNetworkErrors = function (data) {
	        var max = HlsjsRobustness_1.HlsjsRobustness.FATAL_ERROR_RECOVERY_ATTEMPTS, ErrorDetails = this.Hls.ErrorDetails;
	        switch (data.details) {
	            case ErrorDetails.LEVEL_LOAD_ERROR:
	            case ErrorDetails.FRAG_LOAD_ERROR:
	                if (this.networkErrorRetryCount < max) {
	                    this.player.startLoad();
	                    this.networkErrorRetryCount++;
	                    this.log(LogLevel_1.LogLevel.ERROR, this.getErrorMessage(AppResources_1.AppResources.messages.RETRY_PLAYBACK_NETWORK_ERROR, false, this.networkErrorRetryCount + " / " + max));
	                    break;
	                }
	                this.throwError(ErrorCode_1.ErrorCode.HLSJS_NETWORK_ERROR, AppResources_1.AppResources.messages.FATAL_PLAYBACK_NETWORK_ERROR, data);
	                break;
	            case ErrorDetails.MANIFEST_PARSING_ERROR:
	                this.throwError(ErrorCode_1.ErrorCode.HLSJS_PARSE_ERROR, AppResources_1.AppResources.messages.FATAL_PLAYBACK_NETWORK_ERROR + " : " + data.details, data);
	                break;
	            default:
	                this.throwError(ErrorCode_1.ErrorCode.HLSJS_NETWORK_ERROR, AppResources_1.AppResources.messages.FATAL_PLAYBACK_NETWORK_ERROR + " : " + data.details, data, data.fatal);
	        }
	    };
	    HlsjsAdapter.prototype.handleMediaErrors = function (data) {
	        var max = HlsjsRobustness_1.HlsjsRobustness.FATAL_ERROR_RECOVERY_ATTEMPTS, ErrorDetails = this.Hls.ErrorDetails;
	        switch (data.details) {
	            case ErrorDetails.MANIFEST_INCOMPATIBLE_CODECS_ERROR:
	                this.throwError(ErrorCode_1.ErrorCode.HLSJS_SRC_NOT_SUPPORTED, AppResources_1.AppResources.messages.FATAL_PLAYBACK_MEDIA_ERROR + " : " + data.details, data);
	                break;
	            default:
	                if (this.mediaErrorRetryCount < max) {
	                    if (this.mediaErrorRetryCount === 1) {
	                        this.player.swapAudioCodec();
	                    }
	                    this.player.recoverMediaError();
	                    this.mediaErrorRetryCount++;
	                    this.log(LogLevel_1.LogLevel.ERROR, this.getErrorMessage(AppResources_1.AppResources.messages.RETRY_PLAYBACK_MEDIA_ERROR, false, this.mediaErrorRetryCount + " / " + max));
	                    break;
	                }
	                this.throwError(ErrorCode_1.ErrorCode.HLSJS_MEDIA_ERROR, AppResources_1.AppResources.messages.FATAL_PLAYBACK_MEDIA_ERROR + " : " + data.details, data);
	        }
	    };
	    HlsjsAdapter.prototype.setBitrateRestrictionAtStartup = function () {
	        var abr = this.playback.abr;
	        if (!isNaN(abr.minBitrate)) {
	            this.minBitrate = abr.minBitrate - 1;
	        }
	        if (!isNaN(abr.maxBitrate)) {
	            this.maxBitrate = abr.maxBitrate;
	        }
	        if (!isNaN(abr.startBitrate)) {
	            var levels = this.player.levels;
	            var index = Utils_1.Utils.getIndexForBitrate(levels, abr.startBitrate, false);
	            if (Util_1.Util.inRange(index, 0, levels.length - 1)) {
	                this.player.config.startLevel = index;
	            }
	        }
	    };
	    return HlsjsAdapter;
	}(BaseHtml5Adapter_1.BaseHtml5Adapter));
	exports.HlsjsAdapter = HlsjsAdapter;

	});

	var MediaError_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.MediaError = void 0;
	var MediaError;
	(function (MediaError) {
	    MediaError[MediaError["MEDIA_ERR_ABORTED"] = 1] = "MEDIA_ERR_ABORTED";
	    MediaError[MediaError["MEDIA_ERR_NETWORK"] = 2] = "MEDIA_ERR_NETWORK";
	    MediaError[MediaError["MEDIA_ERR_DECODE"] = 3] = "MEDIA_ERR_DECODE";
	    MediaError[MediaError["MEDIA_ERR_SRC_NOT_SUPPORTED"] = 4] = "MEDIA_ERR_SRC_NOT_SUPPORTED";
	})(MediaError = exports.MediaError || (exports.MediaError = {}));

	});

	var DrmVendor_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.DrmVendor = void 0;
	var DrmVendor;
	(function (DrmVendor) {
	    DrmVendor["IRDETO"] = "irdeto";
	    DrmVendor["DRM_TODAY"] = "drmtoday";
	    DrmVendor["UNKNOWN"] = "unknown";
	})(DrmVendor = exports.DrmVendor || (exports.DrmVendor = {}));

	});

	var FairPlay_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.FairPlay = void 0;
















	var FairPlay = (function (_super) {
	    tslib_es6.__extends(FairPlay, _super);
	    function FairPlay(videoSurface, config, logger) {
	        var _this = _super.call(this) || this;
	        _this.WEBKIT_KEY_MESSAGE = 'webkitkeymessage';
	        _this.WEBKIT_KEY_ADDED = 'webkitkeyadded';
	        _this.WEBKIT_KEY_ERROR = 'webkitkeyerror';
	        _this.appCertLoaded = false;
	        _this.webKitNeedKeyCalled = false;
	        _this.webkitNeedKeyHandler = function (e) { return _this.onWebkitNeedKey(e); };
	        _this.drmInfo = config.resource.location.drm;
	        _this.videoSurface = videoSurface;
	        _this.videoSurface.on(VideoSurfaceEvents_1.VideoSurfaceEvents.WEBKIT_NEED_KEY, _this.webkitNeedKeyHandler);
	        _this.logger = logger;
	        return _this;
	    }
	    FairPlay.prototype.initialize = function () {
	        var _this = this;
	        var reqOptions = AsyncDataRequestOptions_1.AsyncDataRequestOptions.create({
	            url: this.drmInfo.fairplay.appCertUrl,
	            method: 'GET',
	            responseType: XhrResponseType_1.XhrResponseType.ARRAY_BUFFER,
	            onComplete: function (e) { return _this.onAppCertLoaded(e); },
	            errorRecovery: {}
	        });
	        new AsyncDataRequest_1.AsyncDataRequest(reqOptions);
	    };
	    FairPlay.prototype.destroy = function () {
	        this.videoSurface.off(VideoSurfaceEvents_1.VideoSurfaceEvents.WEBKIT_NEED_KEY, this.webkitNeedKeyHandler);
	    };
	    FairPlay.prototype.onAppCertLoaded = function (e) {
	        this.appCertData = new Uint8Array(e.data.response);
	        this.appCertLoaded = true;
	        if (this.webKitNeedKeyCalled) {
	            this.initializeFairplayCDM();
	        }
	    };
	    FairPlay.prototype.onWebkitNeedKey = function (event) {
	        this.initData = event.data.initData;
	        this.webKitNeedKeyCalled = true;
	        if (this.appCertLoaded) {
	            this.initializeFairplayCDM();
	        }
	    };
	    FairPlay.prototype.onLicenseRequestReady = function (url, event) {
	        this.drmVendor = this.getDrmVendor(url);
	        var xhr = new XMLHttpRequest();
	        xhr.session = event.target;
	        xhr.addEventListener('load', this.onLicenseLoaded.bind(this), false);
	        xhr.open('POST', url, true);
	        xhr.responseType = this.drmVendor === DrmVendor_1.DrmVendor.IRDETO ? XhrResponseType_1.XhrResponseType.ARRAY_BUFFER : XhrResponseType_1.XhrResponseType.TEXT;
	        var spcMessage = encodeURIComponent(Util_1.Util.base64EncodeUint8Array(event.message));
	        var params = 'spc=' + spcMessage + '&' + xhr.session.contentId;
	        xhr = this.setRequestHeaders(xhr);
	        xhr.send(params);
	    };
	    FairPlay.prototype.setRequestHeaders = function (xhr) {
	        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	        if (!Util_1.Util.isEmpty(this.drmInfo.fairplay.header)) {
	            var h = this.drmInfo.fairplay.header;
	            for (var key in h) {
	                var v = h[key];
	                xhr.setRequestHeader(key, v);
	            }
	        }
	        return xhr;
	    };
	    FairPlay.prototype.onLicenseLoaded = function (event) {
	        var xhr = event.target;
	        var session = xhr.session;
	        if (!Util_1.Util.inRange(xhr.status, 200, 400)) {
	            this.throwFatalError(ErrorCode_1.ErrorCode.FAIRPLAY_LIC_ERROR, AppResources_1.AppResources.messages.FAIRPLAY_LICENSE_ERROR);
	        }
	        var key = xhr.responseType !== 'arraybuffer' ?
	            Util_1.Util.base64DecodeUint8Array(xhr.responseText) :
	            new Uint8Array(xhr.response);
	        session.update(key);
	    };
	    FairPlay.prototype.onWebkitKeyAdded = function (event) {
	        this.logger.log(LogLevel_1.LogLevel.INFO, AppResources_1.AppResources.messages.WEBKIT_KEY_ADDED_SUCCESS);
	    };
	    FairPlay.prototype.onWebkitError = function (event) {
	        this.throwFatalError(ErrorCode_1.ErrorCode.FAIRPLAY_LIC_ERROR, "" + AppResources_1.AppResources.messages.FAIRPLAY_LICENSE_ERROR);
	    };
	    FairPlay.prototype.initializeFairplayCDM = function () {
	        var licenseServerUrl = this.getLicenseServerUrl(this.initData);
	        var contentId = this.getId(licenseServerUrl);
	        var video = this.videoSurface.video;
	        var global = SystemService_1.SystemService.getInstance(ServiceName_1.ServiceName.System).global;
	        var errMsg = AppResources_1.AppResources.messages;
	        if (!contentId) {
	            this.throwFatalError(ErrorCode_1.ErrorCode.FAIRPLAY_APP_CERT_ERROR, errMsg.FAIRPLAY_NO_CONTENT_ID);
	            return;
	        }
	        if (!video.webkitKeys) {
	            var keySystem = DrmType_1.DrmType.FAIRPLAY_1_0;
	            if (!global.WebKitMediaKeys.isTypeSupported(keySystem, 'video/mp4')) {
	                this.throwFatalError(ErrorCode_1.ErrorCode.FAIRPLAY_APP_CERT_ERROR, errMsg.FAIRPLAY_WEBKIT_ERROR);
	                return;
	            }
	            try {
	                video.webkitSetMediaKeys(new global.WebKitMediaKeys(keySystem));
	            }
	            catch (e) {
	                this.throwFatalError(ErrorCode_1.ErrorCode.FAIRPLAY_APP_CERT_ERROR, e.message);
	                return;
	            }
	        }
	        var appCertInitData = this.concatInitDataIdAndCertificate(this.initData, contentId, this.appCertData);
	        var keySession = video.webkitKeys.createSession('video/mp4', appCertInitData);
	        if (!keySession) {
	            this.throwFatalError(ErrorCode_1.ErrorCode.FAIRPLAY_APP_CERT_ERROR, errMsg.FAIRPLAY_WEBKIT_ERROR);
	            return;
	        }
	        keySession.contentId = contentId;
	        keySession.addEventListener(this.WEBKIT_KEY_MESSAGE, this.onLicenseRequestReady.bind(this, licenseServerUrl), false);
	        keySession.addEventListener(this.WEBKIT_KEY_ADDED, this.onWebkitKeyAdded.bind(this), false);
	        keySession.addEventListener(this.WEBKIT_KEY_ERROR, this.onWebkitError.bind(this), false);
	    };
	    FairPlay.prototype.concatInitDataIdAndCertificate = function (initData, id, cert) {
	        if (typeof id === 'string') {
	            id = this.stringToArray(id);
	        }
	        var offset = 0;
	        var buffer = new ArrayBuffer(initData.byteLength + 4 + id.byteLength + 4 + cert.byteLength);
	        var dataView = new DataView(buffer);
	        var initDataArray = new Uint8Array(buffer, offset, initData.byteLength);
	        initDataArray.set(initData);
	        offset += initData.byteLength;
	        dataView.setUint32(offset, id.byteLength, true);
	        offset += 4;
	        var idArray = new Uint8Array(buffer, offset, id.byteLength);
	        idArray.set(id);
	        offset += idArray.byteLength;
	        dataView.setUint32(offset, cert.byteLength, true);
	        offset += 4;
	        var certArray = new Uint8Array(buffer, offset, cert.byteLength);
	        certArray.set(cert);
	        return new Uint8Array(buffer, 0, buffer.byteLength);
	    };
	    FairPlay.prototype.getLicenseServerUrl = function (initData) {
	        var url = null;
	        if (!Util_1.Util.isEmpty(this.drmInfo.fairplay.licenseUrl)) {
	            url = this.drmInfo.fairplay.licenseUrl;
	        }
	        else {
	            var initDataString = String.fromCharCode.apply(null, new Uint16Array(initData.buffer));
	            var splitString = initDataString.split('://');
	            url = 'https://' + splitString[1];
	        }
	        if (this.drmInfo.sessionId) {
	            url = QueryString_1.QueryString.append(url, { 'SessionId': this.drmInfo.sessionId });
	        }
	        if (this.drmInfo.ticket) {
	            url = QueryString_1.QueryString.append(url, { 'Ticket': this.drmInfo.ticket });
	        }
	        return url;
	    };
	    FairPlay.prototype.getId = function (licenseServerUrl) {
	        var obj = QueryString_1.QueryString.decode(licenseServerUrl);
	        return obj.ContentId || obj.contentId || obj.assetId || null;
	    };
	    FairPlay.prototype.getDrmVendor = function (url) {
	        var v = DrmVendor_1.DrmVendor.UNKNOWN;
	        if (url.indexOf(DrmVendor_1.DrmVendor.IRDETO) !== -1) {
	            v = DrmVendor_1.DrmVendor.IRDETO;
	        }
	        else if (url.indexOf(DrmVendor_1.DrmVendor.DRM_TODAY) !== -1) {
	            v = DrmVendor_1.DrmVendor.DRM_TODAY;
	        }
	        return v;
	    };
	    FairPlay.prototype.stringToArray = function (string) {
	        var buffer = new ArrayBuffer(string.length * 2);
	        var array = new Uint16Array(buffer);
	        for (var i = 0, strLen = string.length; i < strLen; i++) {
	            array[i] = string.charCodeAt(i);
	        }
	        return array;
	    };
	    FairPlay.prototype.throwFatalError = function (code, message) {
	        this.logger.log(LogLevel_1.LogLevel.ERROR, code, message);
	        this.emit(PlaybackAdapterEvents_1.PlaybackAdapterEvents.ERROR, {
	            code: code,
	            message: message,
	            fatal: true
	        });
	    };
	    return FairPlay;
	}(Emitter_1.Emitter));
	exports.FairPlay = FairPlay;

	});

	var Html5Adapter_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Html5Adapter = void 0;












	var Html5Adapter = (function (_super) {
	    tslib_es6.__extends(Html5Adapter, _super);
	    function Html5Adapter(videoSurface, config, logger) {
	        var _this = _super.call(this, videoSurface, config, logger) || this;
	        _this.pType = PlaybackAdapterType_1.PlaybackAdapterType.HTML5;
	        _this.audioTrackIdx = -1;
	        _this.fairPlayEventHandler = function (e) { return _this.onFairplayEvent(e); };
	        _this.logger.log(LogLevel_1.LogLevel.INFO, 'Html5Adapter created');
	        return _this;
	    }
	    Html5Adapter.prototype.initialize = function () {
	        _super.prototype.initialize.call(this);
	        if (this.hasFairplayDrm(this.config.resource.location.drm)) {
	            this.fairplay = new FairPlay_1.FairPlay(this.videoSurface, this.config, this.logger);
	            this.fairplay.on(PlaybackAdapterEvents_1.PlaybackAdapterEvents.ERROR, this.fairPlayEventHandler);
	            this.fairplay.initialize();
	            this.emit(PlaybackAdapterEvents_1.PlaybackAdapterEvents.DRM_KEYSYSTEM_CREATED, { keysystem: DrmType_1.DrmType.FAIRPLAY_1_0 });
	        }
	    };
	    Html5Adapter.prototype.destroy = function () {
	        this.videoSurface.video.removeAttribute('src');
	        this.videoSurface.video.load();
	        if (this.fairplay) {
	            this.fairplay.off(PlaybackAdapterEvents_1.PlaybackAdapterEvents.ERROR, this.fairPlayEventHandler);
	            this.fairplay.destroy();
	        }
	        return _super.prototype.destroy.call(this);
	    };
	    Object.defineProperty(Html5Adapter.prototype, "currentIndex", {
	        set: function (index) {
	            this.logger.log(LogLevel_1.LogLevel.INFO, AppResources_1.AppResources.messages.MANUAL_ABR_SWITCHING_UNAVAILABLE);
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(Html5Adapter.prototype, "autoQualitySwitching", {
	        set: function (value) {
	            this.logger.log(LogLevel_1.LogLevel.INFO, AppResources_1.AppResources.messages.MANUAL_ABR_SWITCHING_UNAVAILABLE);
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(Html5Adapter.prototype, "minBitrate", {
	        set: function (value) {
	            this.logger.log(LogLevel_1.LogLevel.INFO, AppResources_1.AppResources.messages.MANUAL_ABR_SWITCHING_UNAVAILABLE);
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(Html5Adapter.prototype, "maxBitrate", {
	        set: function (value) {
	            this.logger.log(LogLevel_1.LogLevel.INFO, AppResources_1.AppResources.messages.MANUAL_ABR_SWITCHING_UNAVAILABLE);
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(Html5Adapter.prototype, "manifestQualities", {
	        get: function () {
	            return [];
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Html5Adapter.prototype.onVideoSurfaceEvent = function (e) {
	        switch (e.type) {
	            case VideoSurfaceEvents_1.VideoSurfaceEvents.DURATION_CHANGE:
	                this.pIsLiveStream = this.videoSurface.duration == Infinity;
	                break;
	        }
	        _super.prototype.onVideoSurfaceEvent.call(this, e);
	        this.updateAudioTracks(e);
	    };
	    Html5Adapter.prototype.loadMediaUrl = function () {
	        this.videoSurface.src = this.mediaUrl;
	        return _super.prototype.loadMediaUrl.call(this);
	    };
	    Html5Adapter.prototype.updateAudioTracks = function (e) {
	        var audioTracksInitialized = this.audioTrackIdx !== -1, tracks = this.videoSurface && this.videoSurface.video && this.videoSurface.video.audioTracks;
	        if (!tracks) {
	            return;
	        }
	        var enabledAudioTrackIdx = this.getEnabledAudioTrackId(tracks);
	        switch (e.type) {
	            case VideoSurfaceEvents_1.VideoSurfaceEvents.CAN_PLAY:
	                if (!audioTracksInitialized) {
	                    this.audioTrackIdx = enabledAudioTrackIdx;
	                    this.normalizedAudioTracks = this.normalizeAudioTracks(Util_1.Util.toArray(tracks), {
	                        type: 'kind',
	                        lang: 'language'
	                    });
	                    this.emit(PlaybackAdapterEvents_1.PlaybackAdapterEvents.AUDIO_TRACK_UPDATED, {
	                        tracks: this.normalizedAudioTracks,
	                        track: this.normalizedAudioTracks[this.audioTrackIdx]
	                    });
	                }
	                break;
	            case VideoSurfaceEvents_1.VideoSurfaceEvents.PROGRESS:
	                if (audioTracksInitialized) {
	                    if (this.audioTrackIdx !== enabledAudioTrackIdx) {
	                        this.audioTrackIdx = enabledAudioTrackIdx;
	                        this.emit(PlaybackAdapterEvents_1.PlaybackAdapterEvents.AUDIO_TRACK_CHANGE, { track: this.normalizedAudioTracks[this.audioTrackIdx] });
	                    }
	                }
	                break;
	        }
	    };
	    Html5Adapter.prototype.onFairplayEvent = function (e) {
	        this.emit(e.type, e.data);
	    };
	    Html5Adapter.prototype.getEnabledAudioTrackId = function (tracks) {
	        var i = tracks.length;
	        while (i--) {
	            if (tracks[i].enabled) {
	                return i;
	            }
	        }
	        return i;
	    };
	    Html5Adapter.prototype.hasFairplayDrm = function (drmParams) {
	        return drmParams !== null ? !Util_1.Util.isEmpty(drmParams.fairplay) : false;
	    };
	    Html5Adapter.prototype.handleVideoSurfaceError = function (e) {
	        _super.prototype.handleVideoSurfaceError.call(this, e);
	        var error = this.videoSurface.video.error;
	        if (error) {
	            switch (error.code) {
	                case MediaError_1.MediaError.MEDIA_ERR_NETWORK:
	                    this.throwError(ErrorCode_1.ErrorCode.HTML5_NETWORK_ERROR, error, error);
	                    break;
	                case MediaError_1.MediaError.MEDIA_ERR_DECODE:
	                    this.throwError(ErrorCode_1.ErrorCode.HTML5_MEDIA_ERROR, error, error);
	                    break;
	                case MediaError_1.MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
	                    this.throwError(ErrorCode_1.ErrorCode.HTML5_SRC_NOT_SUPPORTED, error, error);
	                    break;
	                default:
	                    this.throwError(ErrorCode_1.ErrorCode.UNSPECIFIED_VIDEO_PLAYBACK_ERROR, error, error);
	            }
	        }
	    };
	    return Html5Adapter;
	}(BaseHtml5Adapter_1.BaseHtml5Adapter));
	exports.Html5Adapter = Html5Adapter;

	});

	var PlayStationAdapter_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.PlayStationAdapter = void 0;




	var PlayStationAdapter = (function (_super) {
	    tslib_es6.__extends(PlayStationAdapter, _super);
	    function PlayStationAdapter(videoSurface, config, logger) {
	        var _this = _super.call(this, videoSurface, config, logger) || this;
	        _this.pType = PlaybackAdapterType_1.PlaybackAdapterType.PLAY_STATION;
	        _this.psEventMap = [
	            {
	                type: PlaybackAdapterEvents_1.PlaybackAdapterEvents.MANIFEST_PARSED,
	                callback: function (e) { return _this.onManifestParsed(e); }
	            },
	            {
	                type: PlaybackAdapterEvents_1.PlaybackAdapterEvents.ABR_QUALITY_LOADED,
	                callback: function (e) { return _this.onBubble(e); }
	            },
	            {
	                type: PlaybackAdapterEvents_1.PlaybackAdapterEvents.AUDIO_TRACK_UPDATED,
	                callback: function (e) { return _this.onBubble(e); }
	            }
	        ];
	        _this.log(_this.pType, _this.videoSurface.video.version, _this.videoSurface.video.TTYLevel, _this.videoSurface.metrics);
	        return _this;
	    }
	    PlayStationAdapter.prototype.initialize = function () {
	        _super.prototype.initialize.call(this);
	        var opts = this.playback;
	        var surface = this.videoSurface;
	        !isNaN(opts.abr.startBitrate) && (surface.startingBitrate = opts.abr.startBitrate);
	        !isNaN(opts.abr.minBitrate) && (surface.minBitrate = opts.abr.minBitrate);
	        !isNaN(opts.abr.maxBitrate) && (surface.maxBitrate = opts.abr.maxBitrate);
	        !isNaN(opts.startTime) && (surface.startTime = opts.startTime);
	        this.addEvents(this.videoSurface, this.psEventMap);
	    };
	    PlayStationAdapter.prototype.loadMediaUrl = function () {
	        var _this = this;
	        return Promise.resolve().then(function () {
	            var drm = _this.config.resource.location.drm;
	            _this.videoSurface.src = '{"command":"load", "contentUri":"' + _this.mediaUrl + '", "licenseUri":"' + drm.playready.url + '","customData": "","sourceType":' + 0 + '}';
	        });
	    };
	    PlayStationAdapter.prototype.destroy = function () {
	        this.removeEvents(this.videoSurface, this.psEventMap);
	        this.videoSurface.destroy();
	        return _super.prototype.destroy.call(this);
	    };
	    PlayStationAdapter.prototype.play = function () {
	        this.videoSurface.play();
	    };
	    PlayStationAdapter.prototype.pause = function () {
	        this.videoSurface.pause();
	    };
	    PlayStationAdapter.prototype.seek = function (position) {
	        this.videoSurface.seek(position);
	    };
	    Object.defineProperty(PlayStationAdapter.prototype, "audioTrack", {
	        set: function (track) {
	            this.videoSurface.audioTrack = track;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(PlayStationAdapter.prototype, "type", {
	        get: function () {
	            return this.pType;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(PlayStationAdapter.prototype, "time", {
	        get: function () {
	            return this.videoSurface.time;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(PlayStationAdapter.prototype, "duration", {
	        get: function () {
	            return this.videoSurface.duration;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(PlayStationAdapter.prototype, "droppedVideoFrames", {
	        get: function () {
	            return this.videoSurface.metrics.droppedFrame;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(PlayStationAdapter.prototype, "buffering", {
	        get: function () {
	            return this.videoSurface.buffering;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(PlayStationAdapter.prototype, "currentIndex", {
	        set: function (index) {
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(PlayStationAdapter.prototype, "currentBitrate", {
	        get: function () {
	            return this.videoSurface.metrics.bitrate;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(PlayStationAdapter.prototype, "autoQualitySwitching", {
	        set: function (value) {
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(PlayStationAdapter.prototype, "minBitrate", {
	        set: function (value) {
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(PlayStationAdapter.prototype, "maxBitrate", {
	        set: function (value) {
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(PlayStationAdapter.prototype, "manifestQualities", {
	        get: function () {
	            return this.videoSurface.masterBitrateProfile.map(this.normalizeQuality);
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(PlayStationAdapter.prototype, "liveStreamInfo", {
	        get: function () {
	            return this.liveStreamInfoVO;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    PlayStationAdapter.prototype.onManifestParsed = function (e) {
	        this.emit(PlaybackAdapterEvents_1.PlaybackAdapterEvents.MANIFEST_PARSED, { profile: this.manifestQualities });
	    };
	    PlayStationAdapter.prototype.onBubble = function (e) {
	        this.emit(e.type, e.data);
	    };
	    return PlayStationAdapter;
	}(BasePlaybackAdapter_1.BasePlaybackAdapter));
	exports.PlayStationAdapter = PlayStationAdapter;

	});

	var ShakaRobustness_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ShakaRobustness = void 0;
	var ShakaRobustness;
	(function (ShakaRobustness) {
	    ShakaRobustness[ShakaRobustness["MANIFEST_RETRY_ATTEMPTS"] = 2] = "MANIFEST_RETRY_ATTEMPTS";
	    ShakaRobustness[ShakaRobustness["MANIFEST_RETRY_INTERVAL"] = 1000] = "MANIFEST_RETRY_INTERVAL";
	    ShakaRobustness[ShakaRobustness["FATAL_ERROR_RECOVERY_ATTEMPTS"] = 4] = "FATAL_ERROR_RECOVERY_ATTEMPTS";
	    ShakaRobustness[ShakaRobustness["FATAL_ERROR_RECOVERY_DELAY"] = 1000] = "FATAL_ERROR_RECOVERY_DELAY";
	    ShakaRobustness[ShakaRobustness["FATAL_ERROR_RECOVERY_BACKOFF"] = 2] = "FATAL_ERROR_RECOVERY_BACKOFF";
	    ShakaRobustness[ShakaRobustness["FATAL_ERROR_RECOVERY_FUZZ"] = 0] = "FATAL_ERROR_RECOVERY_FUZZ";
	})(ShakaRobustness = exports.ShakaRobustness || (exports.ShakaRobustness = {}));

	});

	var ShakaAdapter_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ShakaAdapter = void 0;














	var ShakaAdapter = (function (_super) {
	    tslib_es6.__extends(ShakaAdapter, _super);
	    function ShakaAdapter(videoSurface, config, logger) {
	        var _this = _super.call(this, videoSurface, config, logger) || this;
	        _this.pType = PlaybackAdapterType_1.PlaybackAdapterType.SHAKA;
	        _this.shaka = window.shaka;
	        _this.textTracks = [];
	        _this.playerEventMap = [
	            _this.mapEvent('error', _this.onError),
	            _this.mapEvent('streaming', _this.onManifestParsed),
	            _this.mapEvent('variantchanged', _this.onBitrateChanged),
	            _this.mapEvent('adaptation', _this.onBitrateChanged),
	            _this.mapEvent('emsg', _this.onEmsg),
	            _this.mapEvent('trackschanged', _this.onTracksChanged),
	            _this.mapEvent('variantchanged', _this.onVariantChanged),
	            _this.mapEvent('adaptation', _this.onAdaptation),
	            _this.mapEvent('drmsessionupdate', _this.onDrmSessionUpdate),
	            _this.mapEvent('texttrackvisibility', _this.onTextTrackVisibility),
	            _this.mapEvent('timelineregionenter', _this.onTimelineRegionEnter),
	        ];
	        _this.onCueChangeHandler = function (e) { return _this.onCueChange(e); };
	        _this.audioSwitching = false;
	        _this.renderTextTrackNatively = true;
	        _this.cleanUpVtt = false;
	        _this.logger.log(LogLevel_1.LogLevel.INFO, 'ShakaAdapter created');
	        _this.updateAudioTracks = Util_1.Util.debounce(_this.updateAudioTracks.bind(_this), 25);
	        _this.updateTextTracks = Util_1.Util.debounce(_this.updateTextTracks.bind(_this), 25);
	        return _this;
	    }
	    ShakaAdapter.prototype.initialize = function () {
	        _super.prototype.initialize.call(this);
	        if (typeof VTTCue == 'undefined') {
	            this.cleanUpVtt = true;
	        }
	        this.shaka.polyfill.installAll();
	        this.player = new this.shaka.Player(this.videoSurface.video);
	        this.logger.log(LogLevel_1.LogLevel.INFO, "Shaka version: " + this.shaka.Player.version);
	        this.playerConfig = this.player.getConfiguration();
	        this.addEvents(this.player, this.playerEventMap);
	        var retry = this.playerConfig.streaming.retryParameters;
	        retry.maxAttempts = ShakaRobustness_1.ShakaRobustness.FATAL_ERROR_RECOVERY_ATTEMPTS;
	        retry.baseDelay = ShakaRobustness_1.ShakaRobustness.FATAL_ERROR_RECOVERY_DELAY;
	        retry.backoffFactor = ShakaRobustness_1.ShakaRobustness.FATAL_ERROR_RECOVERY_BACKOFF;
	        retry.fuzzFactor = ShakaRobustness_1.ShakaRobustness.FATAL_ERROR_RECOVERY_FUZZ;
	        retry = this.playerConfig.manifest.retryParameters;
	        retry.maxAttempts = ShakaRobustness_1.ShakaRobustness.MANIFEST_RETRY_ATTEMPTS;
	        retry.baseDelay = ShakaRobustness_1.ShakaRobustness.MANIFEST_RETRY_INTERVAL;
	        this.networkEngine = this.player.getNetworkingEngine();
	        this.networkEngine.registerRequestFilter(this.onRequest.bind(this));
	        this.networkEngine.registerResponseFilter(this.onResponse.bind(this));
	        var drm = this.config.resource.location.drm;
	        if (drm.widevine && drm.widevine.url) {
	            this.playerConfig.drm.servers['com.widevine.alpha'] = drm.widevine.url;
	        }
	        if (drm.playready && drm.playready.url) {
	            this.playerConfig.drm.servers['com.microsoft.playready'] = drm.playready.url;
	        }
	        var abrConfig = this.playback.abr;
	        var abr = this.playerConfig.abr;
	        if (!isNaN(abrConfig.minBitrate)) {
	            abr.restrictions.minBandwidth = abrConfig.minBitrate;
	        }
	        if (!isNaN(abrConfig.maxBitrate)) {
	            abr.restrictions.maxBandwidth = abrConfig.maxBitrate;
	        }
	        if (!isNaN(abrConfig.startBitrate)) {
	            abr.defaultBandwidthEstimate = abrConfig.startBitrate * 1.15;
	        }
	        var settings = this.config.performanceSettings;
	        if (settings.forwardBufferLength != null) {
	            this.playerConfig.streaming.bufferingGoal = settings.forwardBufferLength;
	        }
	        if (settings.backBufferLength != null) {
	            this.playerConfig.streaming.bufferBehind = settings.backBufferLength;
	        }
	        this.renderTextTrackNatively = this.config.playerOptions.renderTextTrackNatively;
	        if (this.renderTextTrackNatively == false) {
	            this.playerConfig.streaming.alwaysStreamText = true;
	        }
	        this.playerConfig = this.mergeStreamingConfigs(this.playerConfig, this.config.resource.overrides);
	        this.configure();
	    };
	    ShakaAdapter.prototype.resize = function () {
	        if (!this.playback.abr.capQualityToScreenSize) {
	            return;
	        }
	        var low = this.getVariantTracks()[0];
	        if (!low) {
	            return;
	        }
	        var _a = this.videoSurface.video, clientWidth = _a.clientWidth, clientHeight = _a.clientHeight;
	        if (clientWidth < low.width || clientHeight < low.height) {
	            clientWidth = low.width;
	            clientHeight = low.height;
	        }
	        this.playerConfig.restrictions.maxWidth = clientWidth;
	        this.playerConfig.restrictions.maxHeight = clientHeight;
	        this.configure();
	    };
	    ShakaAdapter.prototype.destroy = function () {
	        var _this = this;
	        this.removeEvents(this.player, this.playerEventMap);
	        if (this.pTextTrack) {
	            this.pTextTrack.removeEventListener(TextTrackEvents_1.TextTrackEvents.CUE_CHANGE, this.onCueChangeHandler);
	        }
	        return this.player.destroy()
	            .then(function () {
	            _this.player = null;
	            _this.networkEngine = null;
	            _this.playerConfig = null;
	            _this.shaka = null;
	            _this.textTracks = null;
	            _this.audioTracks = null;
	            _this.variant = null;
	            _this.pTextTrack = null;
	            _this.currentTextTrack = null;
	            if (_this.cleanUpVtt) {
	                delete window.VTTCue;
	            }
	            return _super.prototype.destroy.call(_this);
	        });
	    };
	    ShakaAdapter.prototype.suspend = function () {
	        this.playerConfig.streaming.bufferingGoal = 1;
	        this.playerConfig.streaming.rebufferingGoal = 1;
	    };
	    ShakaAdapter.prototype.resume = function () {
	        this.playerConfig.streaming.bufferingGoal = 10;
	        this.playerConfig.streaming.rebufferingGoal = 10;
	    };
	    Object.defineProperty(ShakaAdapter.prototype, "seekable", {
	        get: function () {
	            return this.player.seekRange();
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(ShakaAdapter.prototype, "autoQualitySwitching", {
	        get: function () {
	            return this.playerConfig.abr.enabled;
	        },
	        set: function (value) {
	            this.playerConfig.abr.enabled = value;
	            this.configure();
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(ShakaAdapter.prototype, "currentIndex", {
	        get: function () {
	            var index = Util_1.Util.findIndex(this.getVariantTracks(), this.isActive);
	            return index;
	        },
	        set: function (index) {
	            var track = this.getVariantTracks()[index];
	            this.player.selectVariantTrack(track, true);
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(ShakaAdapter.prototype, "segmentDuration", {
	        get: function () {
	            return this.player.getManifest().presentationTimeline.getMaxSegmentDuration();
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(ShakaAdapter.prototype, "manifestQualities", {
	        get: function () {
	            return this.getVariantTracks().map(function (item, index) { return ({
	                index: index,
	                bitrate: item.bandwidth,
	                width: item.width,
	                height: item.height,
	                codec: item.codecs
	            }); });
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(ShakaAdapter.prototype, "maxBitrate", {
	        get: function () {
	            return this.playerConfig.abr.restrictions.maxBandwidth;
	        },
	        set: function (value) {
	            if (isNaN(value)) {
	                value = Infinity;
	            }
	            this.playerConfig.abr.restrictions.maxBandwidth = value;
	            this.configure();
	            this.constrainAbr();
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(ShakaAdapter.prototype, "minBitrate", {
	        get: function () {
	            return this.playerConfig.abr.restrictions.minBandwidth;
	        },
	        set: function (value) {
	            if (isNaN(value)) {
	                value = -Infinity;
	            }
	            this.playerConfig.abr.restrictions.minBandwidth = value;
	            this.configure();
	            this.constrainAbr();
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(ShakaAdapter.prototype, "audioTrack", {
	        set: function (track) {
	            this.audioSwitching = true;
	            this.player.selectAudioLanguage(track.lang, track.type);
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(ShakaAdapter.prototype, "droppedVideoFrames", {
	        get: function () {
	            var stats = this.player.getStats();
	            return stats.droppedFrames;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(ShakaAdapter.prototype, "framerate", {
	        get: function () {
	            var track = this.variant;
	            return track ? track.frameRate : Number.NaN;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(ShakaAdapter.prototype, "textTrackMode", {
	        set: function (mode) {
	            this.currentTextTrackMode = mode;
	            if (this.renderTextTrackNatively) {
	                this.player.setTextTrackVisibility(mode != TextTrackMode_1.TextTrackMode.DISABLED);
	                this.pTextTrack.mode = mode;
	            }
	            else {
	                this.onTextTrackVisibility();
	            }
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(ShakaAdapter.prototype, "textTrack", {
	        set: function (track) {
	            if (this.currentTextTrack && track.id == this.currentTextTrack.id) {
	                return;
	            }
	            this.currentTextTrack = track;
	            this.emit(TextTrackSurfaceEvents_1.TextTrackSurfaceEvents.TEXT_TRACK_CHANGE, this.currentTextTrack);
	            this.player.selectTextTrack(track);
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(ShakaAdapter.prototype, "fragmentType", {
	        get: function () {
	            var track = this.getVariantTrack();
	            return track ? track.mimeType : '';
	        },
	        enumerable: false,
	        configurable: true
	    });
	    ShakaAdapter.prototype.loadMediaUrl = function () {
	        var _this = this;
	        var startTime = this.playback.startTime;
	        return this.player.load(this.mediaUrl, (isNaN(startTime) || startTime < 0) ? 0 : startTime)
	            .then(function () {
	            _this.pIsLiveStream = _this.player.isLive();
	            _this.loadedMetadata();
	            var textTrackUrl = _this.config.resource.location.textTrackUrl;
	            if (!Util_1.Util.isEmpty(textTrackUrl)) {
	                var mime = Util_1.Util.getMimeType(textTrackUrl);
	                _this.player.addTextTrack(textTrackUrl, 'en', 'captions', mime);
	            }
	        })
	            .catch(function (detail) { return _this.onError({ detail: detail }); });
	    };
	    ShakaAdapter.prototype.onError = function (e) {
	        var error = e.detail;
	        var Error = this.shaka.util.Error;
	        var Category = Error.Category;
	        var Code = Error.Code;
	        var message = function (msg) {
	            var code = error.code;
	            for (var key in Code) {
	                var value = Code[key];
	                if (value == code) {
	                    msg += " : " + key + " / " + value;
	                    break;
	                }
	            }
	            return msg;
	        };
	        switch (error.category) {
	            case Category.NETWORK:
	                this.throwError(ErrorCode_1.ErrorCode.SHAKA_NETWORK_ERROR, message(AppResources_1.AppResources.messages.FATAL_PLAYBACK_NETWORK_ERROR), error);
	                break;
	            case Category.MANIFEST:
	                this.throwError(ErrorCode_1.ErrorCode.SHAKA_PARSE_ERROR, message(AppResources_1.AppResources.messages.FATAL_PLAYBACK_MEDIA_ERROR), error);
	                break;
	            case Category.MEDIA:
	                var code = (error.code == Code.VIDEO_ERROR && error.data[0] == MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED) ? ErrorCode_1.ErrorCode.SHAKA_SRC_NOT_SUPPORTED : ErrorCode_1.ErrorCode.SHAKA_MEDIA_ERROR;
	                this.throwError(code, message(AppResources_1.AppResources.messages.FATAL_PLAYBACK_MEDIA_ERROR), error);
	                break;
	            case Category.DRM:
	                this.throwError(ErrorCode_1.ErrorCode.SHAKA_DRM_ERROR, message(AppResources_1.AppResources.messages.FATAL_PLAYBACK_MEDIA_ERROR), error);
	                break;
	            default:
	                this.throwError(ErrorCode_1.ErrorCode.UNSPECIFIED_SHAKA_ERROR, message(AppResources_1.AppResources.messages.UNSPECIFIED_ERROR), error, false);
	        }
	    };
	    ShakaAdapter.prototype.onManifestParsed = function (e) {
	        this.emit(PlaybackAdapterEvents_1.PlaybackAdapterEvents.MANIFEST_PARSED, { profile: this.manifestQualities });
	    };
	    ShakaAdapter.prototype.onBitrateChanged = function (e) {
	        this.constrainAbr();
	        this.emit(PlaybackAdapterEvents_1.PlaybackAdapterEvents.ABR_QUALITY_LOADED, { index: this.currentIndex });
	    };
	    ShakaAdapter.prototype.onRequest = function (type, request) {
	        var drm = this.config.resource.location.drm;
	        if (type === this.shaka.net.NetworkingEngine.RequestType.LICENSE && drm.enabled) {
	            if (drm.widevine && drm.widevine.header) {
	                Util_1.Util.assign(request.headers, drm.widevine.header);
	            }
	            if (drm.playready && drm.playready.header) {
	                Util_1.Util.assign(request.headers, drm.playready.header);
	            }
	        }
	    };
	    ShakaAdapter.prototype.onResponse = function (type, response) {
	        if (this.multiCdnHeaderPresent) {
	            var cdn = response.headers[Playback_1.Playback.MULTI_CDN];
	            this.multiCdnHeaderPresent = (cdn != null);
	            if (this.multiCdnHeaderPresent) {
	                this.emit(PlaybackAdapterEvents_1.PlaybackAdapterEvents.MULTI_CDN, { cdn: cdn });
	            }
	        }
	        if (type === this.shaka.net.NetworkingEngine.RequestType.SEGMENT) {
	            var bandwidth = this.player.getStats().estimatedBandwidth;
	            this.emit(PlaybackAdapterEvents_1.PlaybackAdapterEvents.FRAGMENT_LOADED, { bandwidth: bandwidth });
	        }
	    };
	    ShakaAdapter.prototype.onEmsg = function (e) {
	        var emsg = e.detail;
	        var cue = {
	            id: emsg.schemeIdUri,
	            info: emsg.value,
	            data: emsg.messageData
	        };
	        this.emit(TextTrackSurfaceEvents_1.TextTrackSurfaceEvents.METADATA_CUEPOINT, cue);
	    };
	    ShakaAdapter.prototype.onTracksChanged = function (e) {
	        this.resize();
	        this.updateAudioTracks();
	        this.updateTextTracks();
	    };
	    ShakaAdapter.prototype.onAdaptation = function (e) {
	        this.variant = this.getVariantTrack();
	    };
	    ShakaAdapter.prototype.onVariantChanged = function (e) {
	        if (this.audioSwitching) {
	            this.audioSwitching = false;
	            this.emit(PlaybackAdapterEvents_1.PlaybackAdapterEvents.AUDIO_TRACK_CHANGE, { track: this.normalizedAudioTracks[this.getAudioTrackIndex()] });
	        }
	        this.variant = this.getVariantTrack();
	    };
	    ShakaAdapter.prototype.onDrmSessionUpdate = function (e) {
	        this.emit(PlaybackAdapterEvents_1.PlaybackAdapterEvents.DRM_KEYSYSTEM_CREATED, { keysystem: this.player.keySystem() });
	    };
	    ShakaAdapter.prototype.onTextTrackVisibility = function () {
	        if (!this.currentTextTrackMode) {
	            return;
	        }
	        this.emit(TextTrackSurfaceEvents_1.TextTrackSurfaceEvents.TEXT_TRACK_DISPLAY_MODE_CHANGE, { mode: this.currentTextTrackMode });
	    };
	    ShakaAdapter.prototype.onCueChange = function (e) {
	        if (this.renderTextTrackNatively || !this.config.textTrackSettings.enabled) {
	            return;
	        }
	        var t = event.target;
	        this.emit(TextTrackSurfaceEvents_1.TextTrackSurfaceEvents.TEXT_CUEPOINT, { activeCues: t.activeCues });
	    };
	    ShakaAdapter.prototype.onTimelineRegionEnter = function (e) {
	        if (this.videoSurface.video.seeking) {
	            return;
	        }
	        var info = e.detail;
	        var cue = {
	            id: info.schemeIdUri,
	            info: info.value || info.eventElement.getAttribute('messageData'),
	            data: info
	        };
	        this.emit(TextTrackSurfaceEvents_1.TextTrackSurfaceEvents.METADATA_CUEPOINT, cue);
	    };
	    ShakaAdapter.prototype.isActive = function (track) {
	        return track.active;
	    };
	    ShakaAdapter.prototype.getAudioTrackIndex = function () {
	        var _a = this.getVariantTracks()[this.currentIndex], language = _a.language, audioRoles = _a.audioRoles;
	        var role = audioRoles.join(',');
	        return Util_1.Util.findIndex(this.audioTracks, function (item) { return item.language == language && item.role == role; });
	    };
	    ShakaAdapter.prototype.configure = function () {
	        this.player.configure(this.playerConfig);
	    };
	    ShakaAdapter.prototype.constrainAbr = function () {
	        var maxIndex = Utils_1.Utils.getIndexForBitrate(this.manifestQualities, this.maxBitrate, false);
	        this.checkAbrConstraints(maxIndex);
	    };
	    ShakaAdapter.prototype.getVariantTracks = function () {
	        return this.player.getVariantTracks().sort(function (a, b) { return a.bandwidth - b.bandwidth; });
	    };
	    ShakaAdapter.prototype.getVariantTrack = function () {
	        return Util_1.Util.find(this.player.getVariantTracks(), this.isActive);
	    };
	    ShakaAdapter.prototype.updateAudioTracks = function () {
	        this.audioTracks = this.player.getAudioLanguagesAndRoles();
	        this.normalizedAudioTracks = this.normalizeAudioTracks(this.audioTracks, {
	            type: 'role',
	            lang: 'language',
	            label: 'language'
	        });
	        this.emit(PlaybackAdapterEvents_1.PlaybackAdapterEvents.AUDIO_TRACK_UPDATED, {
	            tracks: this.normalizedAudioTracks,
	            track: this.normalizedAudioTracks[this.getAudioTrackIndex()],
	        });
	    };
	    ShakaAdapter.prototype.updateTextTracks = function () {
	        var _this = this;
	        this.player.getTextTracks().forEach(function (track) {
	            var hasTrack = _this.textTracks.some(function (t) { return t.id == track.id; });
	            if (!hasTrack) {
	                _this.textTracks.push(track);
	                _this.emit(TextTrackSurfaceEvents_1.TextTrackSurfaceEvents.TEXT_TRACK_ADDED, track);
	            }
	        });
	        var available = !this.currentTextTrack;
	        var active = Util_1.Util.find(this.textTracks, this.isActive);
	        if (active && active != this.currentTextTrack) {
	            this.textTrack = active;
	        }
	        if (available) {
	            this.pTextTrack = Util_1.Util.find(this.videoSurface.video.textTracks, function (textTrack) { return textTrack.label == 'Shaka Player TextTrack'; });
	            this.pTextTrack.addEventListener(TextTrackEvents_1.TextTrackEvents.CUE_CHANGE, this.onCueChangeHandler);
	            var track = active || this.textTracks[0];
	            if (track) {
	                this.currentTextTrack = track;
	                this.emit(TextTrackSurfaceEvents_1.TextTrackSurfaceEvents.TEXT_TRACK_AVAILABLE);
	            }
	        }
	        if (this.renderTextTrackNatively) {
	            this.player.setTextTrackVisibility(this.config.textTrackSettings.enabled);
	        }
	    };
	    return ShakaAdapter;
	}(BaseHtml5Adapter_1.BaseHtml5Adapter));
	exports.ShakaAdapter = ShakaAdapter;

	});

	var TwitchLowLatencyAdapter_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.TwitchLowLatencyAdapter = void 0;










	var TwitchLowLatencyAdapter = (function (_super) {
	    tslib_es6.__extends(TwitchLowLatencyAdapter, _super);
	    function TwitchLowLatencyAdapter(videoSurface, config, logger) {
	        var _this = _super.call(this, videoSurface, config, logger) || this;
	        _this.MAX_BITRATE_CLEAR_VALUE = 100000000;
	        _this.pType = PlaybackAdapterType_1.PlaybackAdapterType.TWITCH_LOW_LATENCY;
	        _this.twitch = window.MediaPlayer;
	        _this.autoMaxBitrate = Number.POSITIVE_INFINITY;
	        _this.twitchEventMap = [
	            {
	                type: _this.twitch.PlayerState.READY,
	                callback: function (e) { return _this.onReady(e); }
	            },
	            {
	                type: _this.twitch.PlayerEventType.QUALITY_CHANGED,
	                callback: function (e) { return _this.onQualityChange(e); }
	            },
	            {
	                type: _this.twitch.PlayerEventType.ERROR,
	                callback: function (e) { return _this.onError(e); }
	            },
	            {
	                type: _this.twitch.PlayerEventType.AUDIO_BLOCKED,
	                callback: function (e) { return _this.onError(e); }
	            },
	            {
	                type: _this.twitch.PlayerEventType.PLAYBACK_BLOCKED,
	                callback: function (e) { return _this.onError(e); }
	            },
	        ];
	        _this.logger.log(LogLevel_1.LogLevel.INFO, 'TwitchLowLatencyAdapter created');
	        return _this;
	    }
	    TwitchLowLatencyAdapter.prototype.initialize = function () {
	        var _a;
	        _super.prototype.initialize.call(this);
	        this.player = this.twitch.create();
	        this.player.attachHTMLVideoElement(this.videoSurface.video);
	        this.player.setAutoplay(false);
	        var logLevel = this.enableLogger ? 'debug' : 'error';
	        this.player.setLogLevel(logLevel);
	        var o = ((_a = this.config.resource.overrides) === null || _a === void 0 ? void 0 : _a.twitch) || {};
	        var rebufferToLive = Util_1.Util.isBoolean(o.rebufferToLive) ? o.rebufferToLive : true;
	        this.player.setRebufferToLive(rebufferToLive);
	        this.addEvents(this.player, this.twitchEventMap);
	        !isNaN(this.playback.abr.maxBitrate) && (this.maxBitrate = this.playback.abr.maxBitrate);
	        !isNaN(this.playback.abr.minBitrate) && (this.minBitrate = this.playback.abr.minBitrate);
	        this.logger.log(LogLevel_1.LogLevel.INFO, 'Twitch Version', this.player.getVersion());
	    };
	    TwitchLowLatencyAdapter.prototype.seek = function (position) {
	        return;
	    };
	    TwitchLowLatencyAdapter.prototype.destroy = function () {
	        this.removeEvents(this.player, this.twitchEventMap);
	        this.player.delete();
	        this.player = null;
	        this.twitch = null;
	        return _super.prototype.destroy.call(this);
	    };
	    TwitchLowLatencyAdapter.prototype.play = function () {
	        this.player.play();
	    };
	    Object.defineProperty(TwitchLowLatencyAdapter.prototype, "duration", {
	        get: function () {
	            return this.player.getDuration();
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(TwitchLowLatencyAdapter.prototype, "time", {
	        get: function () {
	            return this.player.getPosition();
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(TwitchLowLatencyAdapter.prototype, "autoQualitySwitching", {
	        get: function () {
	            return this.player.getAutoSwitchQuality();
	        },
	        set: function (value) {
	            this.player.setAutoSwitchQuality(value);
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(TwitchLowLatencyAdapter.prototype, "currentIndex", {
	        get: function () {
	            var q = this.player.getQuality();
	            return Utils_1.Utils.getIndexForBitrate(this.manifestQualities, q.bitrate, false);
	        },
	        set: function (index) {
	            var q = this.player.getQualities();
	            this.player.setQuality(q[index]);
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(TwitchLowLatencyAdapter.prototype, "minBitrate", {
	        get: function () {
	            return this.manifestQualities[0].bitrate;
	        },
	        set: function (value) {
	            this.logger.log(LogLevel_1.LogLevel.INFO, AppResources_1.AppResources.messages.ABR_MIN_BITRATE_RESTRICTION_UNAVAILABLE);
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(TwitchLowLatencyAdapter.prototype, "maxBitrate", {
	        get: function () {
	            var index = !isNaN(this.autoMaxBitrate) ?
	                Utils_1.Utils.getIndexForBitrate(this.manifestQualities, this.autoMaxBitrate, false) :
	                this.manifestQualities.length - 1;
	            return this.manifestQualities[index].bitrate;
	        },
	        set: function (value) {
	            this.autoMaxBitrate = !isNaN(value) ? value : this.MAX_BITRATE_CLEAR_VALUE;
	            this.player.setAutoMaxBitrate(this.autoMaxBitrate);
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(TwitchLowLatencyAdapter.prototype, "manifestQualities", {
	        get: function () {
	            var qualities = this.player.getQualities();
	            return qualities.sort(function (a, b) { return a.bitrate - b.bitrate; }).map(this.normalizeQuality);
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(TwitchLowLatencyAdapter.prototype, "liveStreamInfo", {
	        get: function () {
	            var details = this.liveStreamInfoVO;
	            if (this.pIsLiveStream) {
	                details.isPlayingLive = true;
	                details.relativeDuration = this.duration;
	                details.relativeTime = this.time;
	                details.liveEdgeOffset = this.player.getLiveLatency();
	            }
	            return details;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    TwitchLowLatencyAdapter.prototype.onVideoSurfaceEvent = function (e) {
	        switch (e.type) {
	            case VideoSurfaceEvents_1.VideoSurfaceEvents.DURATION_CHANGE:
	                this.pIsLiveStream = this.duration === Infinity;
	                break;
	        }
	        _super.prototype.onVideoSurfaceEvent.call(this, e);
	    };
	    TwitchLowLatencyAdapter.prototype.loadMediaUrl = function () {
	        var _this = this;
	        return Promise.resolve().then(function () {
	            _this.player.load(_this.mediaUrl);
	        });
	    };
	    TwitchLowLatencyAdapter.prototype.onReady = function (e) {
	        this.emit(PlaybackAdapterEvents_1.PlaybackAdapterEvents.MANIFEST_PARSED, { profile: this.manifestQualities });
	    };
	    TwitchLowLatencyAdapter.prototype.onQualityChange = function (e) {
	        var index = Utils_1.Utils.getIndexForBitrate(this.manifestQualities, e.bitrate, false);
	        this.checkAbrConstraints(Utils_1.Utils.getIndexForBitrate(this.manifestQualities, this.maxBitrate, false));
	        this.emit(PlaybackAdapterEvents_1.PlaybackAdapterEvents.ABR_QUALITY_LOADED, { index: index });
	    };
	    TwitchLowLatencyAdapter.prototype.onError = function (e) {
	        if (e === void 0) { e = {}; }
	        switch (e.type) {
	            case this.twitch.ErrorType.NETWORK_IO:
	            case this.twitch.ErrorType.NETWORK:
	            case this.twitch.ErrorType.NOT_AVAILABLE:
	                this.throwError(ErrorCode_1.ErrorCode.TWITCH_NETWORK_ERROR, AppResources_1.AppResources.messages.FATAL_PLAYBACK_NETWORK_ERROR + " : " + e.message, e);
	                break;
	            case this.twitch.ErrorType.INVALID_DATA:
	                this.throwError(ErrorCode_1.ErrorCode.TWITCH_PARSE_ERROR, AppResources_1.AppResources.messages.FATAL_PLAYBACK_MEDIA_ERROR + " : " + e.message, e);
	                break;
	            case this.twitch.ErrorType.NOT_SUPPORTED:
	                this.throwError(ErrorCode_1.ErrorCode.TWITCH_SRC_NOT_SUPPORTED, AppResources_1.AppResources.messages.FATAL_PLAYBACK_MEDIA_ERROR + " : " + e.message, e);
	                break;
	            default:
	                switch (e.source) {
	                    case this.twitch.ErrorSource.DECODER:
	                    case this.twitch.ErrorSource.RENDERER:
	                    case this.twitch.ErrorSource.SEGMENT:
	                        this.throwError(ErrorCode_1.ErrorCode.TWITCH_MEDIA_ERROR, AppResources_1.AppResources.messages.FATAL_PLAYBACK_MEDIA_ERROR + " : " + e.message, e);
	                        break;
	                    default:
	                        this.throwError(ErrorCode_1.ErrorCode.UNSPECIFIED_TWITCH_ERROR, e.message, e, false);
	                }
	        }
	    };
	    return TwitchLowLatencyAdapter;
	}(BasePlaybackAdapter_1.BasePlaybackAdapter));
	exports.TwitchLowLatencyAdapter = TwitchLowLatencyAdapter;

	});

	var PlaybackAdapterFactory_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.PlaybackAdapterFactory = void 0;




















	var PlaybackAdapterFactory = (function () {
	    function PlaybackAdapterFactory() {
	    }
	    PlaybackAdapterFactory.getAdapterOverride = function (config) {
	        var _a;
	        return (_a = config.resource.overrides) === null || _a === void 0 ? void 0 : _a.adapter;
	    };
	    PlaybackAdapterFactory.getAdapterType = function (config) {
	        var override = this.getAdapterOverride(config);
	        if (!Util_1.Util.isEmpty(override)) {
	            if (override == PlaybackAdapterType_1.PlaybackAdapterType.SHAKA) {
	                if (PlaybackAdapterFactory.isShakaAdapter(config)) {
	                    return PlaybackAdapterType_1.PlaybackAdapterType.SHAKA;
	                }
	            }
	            else {
	                return override;
	            }
	        }
	        if (PlaybackAdapterFactory.isTwitchLowLatencyAdapter(config)) {
	            return PlaybackAdapterType_1.PlaybackAdapterType.TWITCH_LOW_LATENCY;
	        }
	        if (PlaybackAdapterFactory.isPlayStationAdapter(config)) {
	            return PlaybackAdapterType_1.PlaybackAdapterType.PLAY_STATION;
	        }
	        if (PlaybackAdapterFactory.isHTML5Adapter(config)) {
	            return PlaybackAdapterType_1.PlaybackAdapterType.HTML5;
	        }
	        if (PlaybackAdapterFactory.isDashAdapter(config)) {
	            return PlaybackAdapterType_1.PlaybackAdapterType.SHAKA;
	        }
	        if (PlaybackAdapterFactory.isHlsAdapter(config)) {
	            return PlaybackAdapterType_1.PlaybackAdapterType.HLSJS;
	        }
	        return PlaybackAdapterType_1.PlaybackAdapterType.UNKNOWN;
	    };
	    PlaybackAdapterFactory.getUrl = function (type, config) {
	        var _a;
	        var overrides = config.playerOptions.overrides || {};
	        var resolveVersionTemplate = function (url, version, context) {
	            if (context === void 0) { context = {}; }
	            return Util_1.Util.template(url, tslib_es6.__assign({ VERSION: version }, context));
	        };
	        if ((_a = overrides.dependencies) === null || _a === void 0 ? void 0 : _a[type]) {
	            return overrides.dependencies[type];
	        }
	        switch (type) {
	            case PlaybackAdapterType_1.PlaybackAdapterType.HLSJS:
	                return resolveVersionTemplate(ExtLibEndpoint_1.ExtLibEndpoint.HLSJS_GZIP_CDN, StreamingLibraryVersion_1.StreamingLibraryVersion.HLSJS);
	            case PlaybackAdapterType_1.PlaybackAdapterType.DASHJS:
	                return resolveVersionTemplate(ExtLibEndpoint_1.ExtLibEndpoint.DASHJS_GZIP_CDN, StreamingLibraryVersion_1.StreamingLibraryVersion.DASHJS);
	            case PlaybackAdapterType_1.PlaybackAdapterType.SHAKA:
	                var DEBUG = (overrides.enableLowLevelStreamingLogs === true) ? '.debug' : '';
	                return resolveVersionTemplate(ExtLibEndpoint_1.ExtLibEndpoint.SHAKA_GZIP_CDN, StreamingLibraryVersion_1.StreamingLibraryVersion.SHAKA, { DEBUG: DEBUG });
	            case PlaybackAdapterType_1.PlaybackAdapterType.TWITCH_LOW_LATENCY:
	                return resolveVersionTemplate(ExtLibEndpoint_1.ExtLibEndpoint.TWITCH_GZIP_CDN, StreamingLibraryVersion_1.StreamingLibraryVersion.TWITCH);
	            default:
	                return null;
	        }
	    };
	    PlaybackAdapterFactory.loadLib = function (url, config, lib) {
	        var _this = this;
	        return new Promise(function (resolve, reject) {
	            try {
	                if (lib() != null) {
	                    return resolve();
	                }
	            }
	            catch (error) { }
	            new ScriptLoader_1.ScriptLoader({
	                url: _this.checkSslForUrl(config.system, url),
	                urls: [],
	                timeout: PlaybackAdapterFactory.getScriptLoaderTimeout(config.playerOptions.overrides),
	                onComplete: function (e) {
	                    var d = e.data;
	                    if (d.error || d.timedOut) {
	                        reject(d);
	                    }
	                    else {
	                        resolve();
	                    }
	                },
	                errorRecovery: PlaybackAdapterFactory.getErrorRecoveryFromConfig(config)
	            });
	        });
	    };
	    PlaybackAdapterFactory.getAdapter = function (video, config, logger) {
	        var type = PlaybackAdapterFactory.getAdapterType(config);
	        var videoSurface = PlaybackAdapterFactory.getVideoSurface(type, video, config, logger);
	        var loadError = function (code) { return ({ target: type, code: code, message: AppResources_1.AppResources.messages.ADAPTER_LIB_UNAVAILABLE }); };
	        var url = this.getUrl(type, config);
	        switch (type) {
	            case PlaybackAdapterType_1.PlaybackAdapterType.HLSJS:
	                return this.loadLib(url, config, function () { return window.Hls; })
	                    .then(function () {
	                    logger.log(LogLevel_1.LogLevel.INFO, "Loading " + PlaybackAdapterType_1.PlaybackAdapterType.HLSJS + " external library version: " + StreamingLibraryVersion_1.StreamingLibraryVersion.HLSJS);
	                    return new HlsjsAdapter_1.HlsjsAdapter(videoSurface, config, logger);
	                })
	                    .catch(function (error) {
	                    throw loadError(ErrorCode_1.ErrorCode.HLS_SDK_MISSING);
	                });
	            case PlaybackAdapterType_1.PlaybackAdapterType.DASHJS:
	                return this.loadLib(url, config, function () { return window.dashjs.MediaPlayer; })
	                    .then(function () {
	                    logger.log(LogLevel_1.LogLevel.INFO, "Loading " + PlaybackAdapterType_1.PlaybackAdapterType.DASHJS + " external library version: " + StreamingLibraryVersion_1.StreamingLibraryVersion.DASHJS);
	                    return new DashjsAdapter_1.DashjsAdapter(videoSurface, config, logger);
	                })
	                    .catch(function (error) {
	                    throw loadError(ErrorCode_1.ErrorCode.DASH_SDK_MISSING);
	                });
	            case PlaybackAdapterType_1.PlaybackAdapterType.SHAKA:
	                return this.loadLib(url, config, function () { return window.shaka.Player; })
	                    .then(function () {
	                    logger.log(LogLevel_1.LogLevel.INFO, "Loading " + PlaybackAdapterType_1.PlaybackAdapterType.SHAKA + " external library version: " + StreamingLibraryVersion_1.StreamingLibraryVersion.SHAKA);
	                    return new ShakaAdapter_1.ShakaAdapter(videoSurface, config, logger);
	                })
	                    .catch(function (error) {
	                    throw loadError(ErrorCode_1.ErrorCode.SHAKA_SDK_MISSING);
	                });
	            case PlaybackAdapterType_1.PlaybackAdapterType.TWITCH_LOW_LATENCY:
	                return this.loadLib(url, config, function () { return window.MediaPlayer; })
	                    .then(function () {
	                    logger.log(LogLevel_1.LogLevel.INFO, "Loading " + PlaybackAdapterType_1.PlaybackAdapterType.TWITCH_LOW_LATENCY + " external library version: " + StreamingLibraryVersion_1.StreamingLibraryVersion.TWITCH);
	                    return new TwitchLowLatencyAdapter_1.TwitchLowLatencyAdapter(videoSurface, config, logger);
	                })
	                    .catch(function (error) {
	                    throw loadError(ErrorCode_1.ErrorCode.TWITCH_SDK_MISSING);
	                });
	            case PlaybackAdapterType_1.PlaybackAdapterType.HTML5:
	                return Promise.resolve(new Html5Adapter_1.Html5Adapter(videoSurface, config, logger));
	            case PlaybackAdapterType_1.PlaybackAdapterType.PLAY_STATION:
	                return Promise.resolve(new PlayStationAdapter_1.PlayStationAdapter(videoSurface, config, logger));
	            default:
	                return Promise.reject(loadError(ErrorCode_1.ErrorCode.UNEXPECTED_CONDITION));
	        }
	    };
	    PlaybackAdapterFactory.isPlayStationAdapter = function (config) {
	        return config.system.isWebMaf;
	    };
	    PlaybackAdapterFactory.isHTML5Adapter = function (config) {
	        var _a, _b;
	        var fairplayDetected = !Util_1.Util.isEmpty((_b = (_a = config.resource.location.drm) === null || _a === void 0 ? void 0 : _a.fairplay) === null || _b === void 0 ? void 0 : _b.appCertUrl), isSafari = config.system.info.browser === Browser_1.Browser.SAFARI, isIOS = config.system.os === Os_1.Os.IOS, isAndroid = config.system.os == Os_1.Os.ANDROID, osVersion = config.system.osVersionInfo, url = config.resource.location.mediaUrl, type = Util_1.Util.getMimeType(url), isM3u8 = type == MediaCapabilitiesMimeType_1.MediaCapabilitiesMimeType.HLS;
	        if (!isM3u8 && type == MediaCapabilitiesMimeType_1.MediaCapabilitiesMimeType.MP4_VIDEO) {
	            return true;
	        }
	        if (isM3u8 && fairplayDetected && isSafari) {
	            return true;
	        }
	        if (isM3u8 && isIOS) {
	            if (fairplayDetected && isSafari) {
	                return true;
	            }
	            else if (!fairplayDetected) {
	                return true;
	            }
	        }
	        if (isM3u8 && !fairplayDetected && isAndroid && osVersion.majorVersion < 5) {
	            return true;
	        }
	        return false;
	    };
	    PlaybackAdapterFactory.isDashAdapter = function (config) {
	        var url = config.resource.location.mediaUrl;
	        return Util_1.Util.getMimeType(url) == MediaCapabilitiesMimeType_1.MediaCapabilitiesMimeType.DASH;
	    };
	    PlaybackAdapterFactory.isTwitchLowLatencyAdapter = function (config) {
	        var type = this.getAdapterOverride(config);
	        return type === PlaybackAdapterType_1.PlaybackAdapterType.TWITCH_LOW_LATENCY;
	    };
	    PlaybackAdapterFactory.isHlsAdapter = function (config) {
	        var url = config.resource.location.mediaUrl, isSafari = config.system.info.browser === Browser_1.Browser.SAFARI, isIOS = config.system.os === Os_1.Os.IOS, isM3u8 = Util_1.Util.getMimeType(url) == MediaCapabilitiesMimeType_1.MediaCapabilitiesMimeType.HLS;
	        if (isM3u8 && isIOS && !isSafari) {
	            return false;
	        }
	        return isM3u8;
	    };
	    PlaybackAdapterFactory.isShakaAdapter = function (config) {
	        var url = config.resource.location.mediaUrl;
	        var type = this.getAdapterOverride(config);
	        return Util_1.Util.getMimeType(url) == MediaCapabilitiesMimeType_1.MediaCapabilitiesMimeType.DASH && type === PlaybackAdapterType_1.PlaybackAdapterType.SHAKA;
	    };
	    PlaybackAdapterFactory.checkSslForUrl = function (system, baseUrl) {
	        return system.isWebOs ? Util_1.Util.makeUrl(true, baseUrl) : baseUrl;
	    };
	    PlaybackAdapterFactory.getScriptLoaderTimeout = function (overrides) {
	        var timeout = 5000;
	        if (overrides.streamingLibLoaderTimeout > 0) {
	            timeout = overrides.streamingLibLoaderTimeout;
	        }
	        return timeout;
	    };
	    PlaybackAdapterFactory.getVideoSurface = function (type, video, config, logger) {
	        var useTextTrackSurface = (type != PlaybackAdapterType_1.PlaybackAdapterType.SHAKA);
	        return type === PlaybackAdapterType_1.PlaybackAdapterType.PLAY_STATION ?
	            new WebMafVideoSurface_1.WebMafVideoSurface(config, logger) : new Html5VideoSurface_1.Html5VideoSurface(video, config, logger, useTextTrackSurface);
	    };
	    PlaybackAdapterFactory.getErrorRecoveryFromConfig = function (config) {
	        var errorRecovery = null;
	        var er = config.playerOptions.networkErrorRecovery;
	        if (!Util_1.Util.isEmpty(er)) {
	            errorRecovery = {
	                retryAttempts: er.retryAttempts,
	                retryIntervals: er.retryIntervals
	            };
	        }
	        return errorRecovery;
	    };
	    return PlaybackAdapterFactory;
	}());
	exports.PlaybackAdapterFactory = PlaybackAdapterFactory;

	});

	var Request = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.request = void 0;


	function request(options) {
	    if (options.query) {
	        options.url = QueryString_1.QueryString.append(options.url, options.query);
	    }
	    return AsyncDataRequest_1.AsyncDataRequest.load(options).then(function (xhr) { return xhr.response; });
	}
	exports.request = request;

	});

	var WebVTTParser_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.WebVTTParser = void 0;


	var WebVTTParser = (function () {
	    function WebVTTParser() {
	    }
	    WebVTTParser.parseCaption = function (caption, id, style) {
	        if (id === void 0) { id = 0; }
	        if (style === void 0) { style = {}; }
	        var parts = caption.trim().split("\n");
	        var timecode = /([0-9:.]+)\s*-->\s*([0-9:.]+)([^\n]*)/;
	        var setting = /\s*([A-Za-z]+)\s*:\s*([\w\-%]+)/g;
	        try {
	            if (!timecode.test(parts[0])) {
	                id = parseInt(parts.shift());
	            }
	            var times = parts[0].match(timecode).slice(1);
	            var settings = times[2];
	            var startTime = Util_1.Util.hmsToSec(times[0]);
	            var endTime = Util_1.Util.hmsToSec(times[1]);
	            var text = parts.slice(1).join("\n");
	            if (settings != null) {
	                settings.replace(setting, function (match, key, value) { return style[key] = value; });
	            }
	            return tslib_es6.__assign({ id: id, startTime: startTime, endTime: endTime, text: text }, style);
	        }
	        catch (error) {
	            return null;
	        }
	    };
	    WebVTTParser.parse = function (txt) {
	        var _this = this;
	        txt = txt.replace(/\r/g, '');
	        var captions = txt.split("\n\n");
	        var ignore = /^(WEBVTT|NOTE|STYLE)/;
	        var cues = captions.reduce(function (acc, caption) {
	            if (!(ignore.test(caption) || !caption)) {
	                var cue = _this.parseCaption(caption, acc.length);
	                if (cue) {
	                    acc.push(cue);
	                }
	            }
	            return acc;
	        }, []);
	        return cues;
	    };
	    return WebVTTParser;
	}());
	exports.WebVTTParser = WebVTTParser;

	});

	var ThumbnailTrackSurface_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ThumbnailTrackSurface = void 0;



	var ThumbnailTrackSurface = (function () {
	    function ThumbnailTrackSurface(url, cues) {
	        this.url = url;
	        this.cues = cues;
	    }
	    ThumbnailTrackSurface.prototype.getCueAt = function (time) {
	        return Util_1.Util.find(this.cues, function (cue) { return cue.startTime <= time && cue.endTime >= time; });
	    };
	    ThumbnailTrackSurface.prototype.renderCueAt = function (time, container) {
	        ThumbnailTrackSurface.renderThumbnail(this.getCueAt(time), container);
	    };
	    ThumbnailTrackSurface.create = function (url) {
	        var a = document.createElement("a");
	        a.href = url;
	        var absolute = a.protocol + "//" + a.hostname;
	        var relative = absolute + a.pathname.split("/").slice(0, -1).join("/") + "/";
	        return Request.request({ url: url })
	            .then(function (response) {
	            var cues = WebVTTParser_1.WebVTTParser.parse(response);
	            cues.forEach(function (cue) {
	                var _a = cue.text.split("#"), file = _a[0], params = _a[1];
	                var src = file;
	                if (!/^(https?:)?\/\//.test(src)) {
	                    if (/^\//.test(src)) {
	                        src = absolute + src;
	                    }
	                    else {
	                        src = relative + src;
	                    }
	                }
	                var kv = params.split("=");
	                var keys = kv[0];
	                var values = kv[1].split(",");
	                var style = {
	                    backgroundImage: "url(" + src + ")"
	                };
	                var data = { url: src };
	                Util_1.Util.forEach(keys, function (key, i) {
	                    var value = values[i];
	                    switch (key) {
	                        case "w":
	                            data.width = parseInt(value);
	                            style.width = value + "px";
	                            break;
	                        case "h":
	                            data.height = parseInt(value);
	                            style.height = value + "px";
	                            break;
	                        case "x":
	                            data.x = parseInt(value);
	                            style.backgroundPositionX = "-" + value + "px";
	                            break;
	                        case "y":
	                            data.y = parseInt(value);
	                            style.backgroundPositionY = "-" + value + "px";
	                    }
	                });
	                cue.style = style;
	                cue.data = data;
	            });
	            return new ThumbnailTrackSurface(url, cues);
	        });
	    };
	    ThumbnailTrackSurface.renderThumbnail = function (cue, container) {
	        if ((cue === null || cue === void 0 ? void 0 : cue.style) && (container === null || container === void 0 ? void 0 : container.style)) {
	            Util_1.Util.assign(container.style, cue.style);
	        }
	    };
	    return ThumbnailTrackSurface;
	}());
	exports.ThumbnailTrackSurface = ThumbnailTrackSurface;

	});

	var AbstractPresentationMediator_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.AbstractPresentationMediator = void 0;




















	var AbstractPresentationMediator = (function (_super) {
	    tslib_es6.__extends(AbstractPresentationMediator, _super);
	    function AbstractPresentationMediator(name, viewControl) {
	        var _this = _super.call(this, name, viewControl) || this;
	        _this.started = false;
	        _this.preloadContent = true;
	        _this.minDvrDuration = 1800;
	        _this.contentIsBuffering = false;
	        _this.adapterEventHandler = function (e) { return _this.hPlaybackAdaptorEvents(e); };
	        _this.videoEventHandler = function (e) { return _this.hVideoAdapterEvents(e); };
	        _this.textTrackEventHandler = function (e) { return _this.hTextTrackEvents(e); };
	        _this.endFreezeTimeoutHandle = null;
	        _this.loadComplete = false;
	        _this.offsetTtOnControlVis = false;
	        _this.isMonitoringCueEvents = false;
	        _this.respondToTextTrackInfoChange = Util_1.Util.debounce(_this.respondToTextTrackInfoChange.bind(_this), 10);
	        return _this;
	    }
	    Object.defineProperty(AbstractPresentationMediator.prototype, "adapter", {
	        get: function () {
	            return this.pAdapter;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    AbstractPresentationMediator.prototype.onRemove = function () {
	        clearTimeout(this.endFreezeTimeoutHandle);
	        this.removeEvents(PlaybackAdapterEvents_1.PlaybackAdapterEvents, this.adapterEventHandler);
	        this.removeEvents(VideoSurfaceEvents_1.VideoSurfaceEvents, this.videoEventHandler);
	        this.removeEvents(TextTrackSurfaceEvents_1.TextTrackSurfaceEvents, this.textTrackEventHandler);
	        this.pAdapter = null;
	        this.contentPlaybackStateProxy = null;
	        this.resourceProxy = null;
	        this.presoModel = null;
	        this.playerOptions = null;
	        _super.prototype.onRemove.call(this);
	    };
	    AbstractPresentationMediator.prototype.setVolume = function (value) {
	        this.presoModel.volume = value;
	    };
	    AbstractPresentationMediator.prototype.load = function () {
	        return this.loadVideo();
	    };
	    AbstractPresentationMediator.prototype.play = function () {
	        this.playVideo();
	    };
	    AbstractPresentationMediator.prototype.pause = function () {
	        this.pauseVideo();
	    };
	    AbstractPresentationMediator.prototype.suspend = function () {
	        this.pAdapter.suspend();
	    };
	    AbstractPresentationMediator.prototype.resume = function () {
	        this.pAdapter.resume();
	    };
	    AbstractPresentationMediator.prototype.loadVideo = function () {
	        return this.pAdapter.load();
	    };
	    AbstractPresentationMediator.prototype.playVideo = function () {
	        this.pAdapter && this.pAdapter.play();
	    };
	    AbstractPresentationMediator.prototype.pauseVideo = function () {
	        this.pAdapter && this.pAdapter.pause();
	    };
	    AbstractPresentationMediator.prototype.muteVideo = function (flag) {
	        if (!flag && !this.presoModel.userHasUnmuted) {
	            this.presoModel.userHasUnmuted = true;
	        }
	        this.presoModel.isMuted = flag;
	    };
	    AbstractPresentationMediator.prototype.seekVideo = function (position) {
	        this.pAdapter && this.pAdapter.seek(position);
	    };
	    AbstractPresentationMediator.prototype.checkVideoBuffering = function () {
	        var buffering = this.pAdapter && this.pAdapter.buffering;
	        if (!this.contentIsBuffering && buffering) {
	            this.contentIsBuffering = true;
	            this.notify(NotificationName_1.NotificationName.CONTENT_BUFFERING, { value: true });
	        }
	        else if (this.contentIsBuffering && !buffering) {
	            this.contentIsBuffering = false;
	            this.notify(NotificationName_1.NotificationName.CONTENT_BUFFERING, { value: false });
	        }
	    };
	    Object.defineProperty(AbstractPresentationMediator.prototype, "video", {
	        get: function () {
	            return this.viewControl;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    AbstractPresentationMediator.prototype.notify = function (name, data) {
	        this.sendNotification(name, data || null, NotificationType_1.NotificationType.INTERNAL);
	    };
	    AbstractPresentationMediator.prototype.respondToIsPlayingLiveChange = function (isLive) {
	        this.notify(NotificationName_1.NotificationName.CONTENT_IS_LIVE_CHANGED, { value: isLive });
	    };
	    AbstractPresentationMediator.prototype.respondToStreamTypeChange = function (streamType) {
	        var cps = this.contentPlaybackStateProxy.model;
	        if (this.streamType != streamType) {
	            this.streamType = streamType;
	            cps.streamType = streamType;
	            this.notify(NotificationName_1.NotificationName.STREAM_TYPE_CHANGE, { value: streamType });
	        }
	    };
	    AbstractPresentationMediator.prototype.respondToTtOffsetRequest = function (controlsVisible) {
	        var sys = this.facade.retrieveService(ServiceName_1.ServiceName.System);
	        if (sys.browser === Browser_1.Browser.FIREFOX) {
	            this.monitorTtCues(controlsVisible);
	        }
	        else {
	            var dp = this.facade.retrieveProxy(ProxyName_1.ProxyName.PlayerDomProxy);
	            dp && dp.setControlVisibility(controlsVisible);
	        }
	    };
	    AbstractPresentationMediator.prototype.monitorTtCues = function (flag) {
	        var ctt = this.contentPlaybackStateProxy.nativeTextTrack, cues = ctt && ctt.activeCues;
	        this.isMonitoringCueEvents = flag;
	        if (!cues) {
	            return;
	        }
	        for (var i = 0, n = cues.length || 0; i < n; i++) {
	            this.respondToTtCue(cues[i]);
	        }
	    };
	    AbstractPresentationMediator.prototype.respondToTtCue = function (cue) {
	        cue.line = this.isMonitoringCueEvents ? 14 : 'auto';
	    };
	    AbstractPresentationMediator.prototype.handleNotification = function (notification) {
	        switch (notification.name) {
	            case NotificationName_1.NotificationName.TIMER_TIC:
	                this.respondToBufferingStatusCheck();
	                this.checkSize();
	                break;
	            case NotificationName_1.NotificationName.FULLSCREEN_CHANGE:
	                var data = notification.body;
	                this.presoModel.isFullscreen = data.isFullscreen;
	                this.respondToFullscreenChange(data.isFullscreen);
	                break;
	            case NotificationName_1.NotificationName.AUTO_QUALITY_SWITCHING:
	                this.notify(NotificationName_1.NotificationName.QUALITY_INFO_CHANGE, this.contentPlaybackStateProxy.model.qualityInfo);
	                break;
	            case NotificationName_1.NotificationName.TT_OFFSET_REQUEST:
	                if (this.offsetTtOnControlVis) {
	                    this.respondToTtOffsetRequest(notification.body.controlsVisible);
	                }
	                break;
	        }
	    };
	    AbstractPresentationMediator.prototype.listNotificationInterests = function () {
	        return [
	            NotificationName_1.NotificationName.TIMER_TIC,
	            NotificationName_1.NotificationName.FULLSCREEN_CHANGE,
	            NotificationName_1.NotificationName.TT_OFFSET_REQUEST
	        ];
	    };
	    AbstractPresentationMediator.prototype.onRegister = function () {
	        _super.prototype.onRegister.call(this);
	        this.contentPlaybackStateProxy = this.facade.retrieveProxy(ProxyName_1.ProxyName.ContentPlaybackStateProxy);
	        this.resourceProxy = this.facade.retrieveProxy(ProxyName_1.ProxyName.ResourceProxy);
	        this.presoModel = this.getModel(ModelName_1.ModelName.PresentationState);
	        this.playerOptions = this.getModel(ModelName_1.ModelName.PlayerOptions);
	        var overrides = this.resourceProxy.resource.overrides;
	        if (Util_1.Util.isNumber(overrides === null || overrides === void 0 ? void 0 : overrides.minDvrDuration)) {
	            this.minDvrDuration = overrides.minDvrDuration;
	        }
	        if (this.presoModel.isMuteAtPlayStart && !this.presoModel.userHasUnmuted) {
	            this.muteVideo(true);
	            this.presoModel.isMuted = true;
	        }
	        this.offsetTtOnControlVis = this.playerOptions.offsetTextOnControlsVisible;
	    };
	    AbstractPresentationMediator.prototype.prepareForPlayback = function (forcePlay) {
	        var _this = this;
	        if (forcePlay === void 0) { forcePlay = false; }
	        var config = {
	            system: this.systemService,
	            playerOptions: this.playerOptions,
	            resource: this.resourceProxy.resource,
	            performanceSettings: this.facade.retrieveProxy(ProxyName_1.ProxyName.PerformanceProxy),
	            textTrackSettings: this.facade.retrieveProxy(ProxyName_1.ProxyName.TextTrackProxy)
	        };
	        PlaybackAdapterFactory_1.PlaybackAdapterFactory.getAdapter(this.viewControl, config, this.logger)
	            .then(function (result) {
	            _this.pAdapter = result;
	            _this.addEvents(PlaybackAdapterEvents_1.PlaybackAdapterEvents, _this.adapterEventHandler);
	            _this.addEvents(VideoSurfaceEvents_1.VideoSurfaceEvents, _this.videoEventHandler);
	            _this.addEvents(TextTrackSurfaceEvents_1.TextTrackSurfaceEvents, _this.textTrackEventHandler);
	            _this.pAdapter.initialize();
	            Promise.resolve()
	                .then(function () {
	                if (_this.preloadContent === true) {
	                    return _this.pAdapter.load();
	                }
	            })
	                .then(function () {
	                if (_this.presoModel.isAutoplay || forcePlay) {
	                    _this.play();
	                }
	            });
	        })
	            .catch(function (error) {
	            _this.logger.log(LogLevel_1.LogLevel.ERROR, error.target, error.message);
	            _this.notify(NotificationName_1.NotificationName.RESOURCE_ERROR, error);
	        });
	    };
	    AbstractPresentationMediator.prototype.hPlaybackAdaptorEvents = function (e) {
	        var _this = this;
	        var cps = this.contentPlaybackStateProxy.model;
	        switch (e.type) {
	            case PlaybackAdapterEvents_1.PlaybackAdapterEvents.ABR_QUALITY_LOADED:
	                if (this.contentPlaybackStateProxy.isAbrSwitchingAvailable) {
	                    var qualityInfo = this.contentPlaybackStateProxy.qualityInfo, bitrate = this.contentPlaybackStateProxy.manifestQualities[e.data.index].bitrate, index = Utils_1.Utils.getIndexForBitrate(qualityInfo.qualities, bitrate, false), quality = qualityInfo.qualities[index];
	                    if (!qualityInfo.quality || qualityInfo.quality.bitrate !== quality.bitrate) {
	                        this.contentPlaybackStateProxy.quality = quality;
	                        cps.bitrate = quality.bitrate;
	                        this.respondToQualityChange(quality);
	                    }
	                }
	                break;
	            case PlaybackAdapterEvents_1.PlaybackAdapterEvents.ABR_CONSTRAINTS_CHANGE:
	                if (!this.contentPlaybackStateProxy.isAbrSwitchingAvailable) {
	                    this.logger.log(LogLevel_1.LogLevel.INFO, AppResources_1.AppResources.messages.ABR_UNAVAILABLE);
	                    this.contentPlaybackStateProxy.qualitySwitchingMode = Playback_1.Playback.ABR_SWITCHING_MODE_UNAVAILABLE;
	                }
	                else if (cps.qualityInfo) {
	                    this.contentPlaybackStateProxy.updateQualityProfile(e.data.minIndex, e.data.maxIndex, e.data.manifestQualities);
	                    this.log(LogLevel_1.LogLevel.INFO, 'Quality Info: ', cps.qualityInfo);
	                    this.notify(NotificationName_1.NotificationName.QUALITY_INFO_CHANGE, cps.qualityInfo);
	                }
	                break;
	            case PlaybackAdapterEvents_1.PlaybackAdapterEvents.AUDIO_TRACK_UPDATED:
	                this.contentPlaybackStateProxy.updateAudioTracks(e.data.track, e.data.tracks);
	                this.notify(NotificationName_1.NotificationName.AUDIO_TRACK_INFO_CHANGE, e.data);
	                break;
	            case PlaybackAdapterEvents_1.PlaybackAdapterEvents.AUDIO_TRACK_CHANGE:
	                this.contentPlaybackStateProxy.updateAudioTracks(e.data.track);
	                this.notify(NotificationName_1.NotificationName.AUDIO_TRACK_CHANGE, e.data.track);
	                break;
	            case PlaybackAdapterEvents_1.PlaybackAdapterEvents.FRAGMENT_LOADED:
	                this.contentPlaybackStateProxy.maxBandwidth = e.data.bandwidth;
	                break;
	            case PlaybackAdapterEvents_1.PlaybackAdapterEvents.FRAGMENT_PARSED:
	                cps.framerate = e.data.rate;
	                break;
	            case PlaybackAdapterEvents_1.PlaybackAdapterEvents.MANIFEST_PARSED:
	                this.contentPlaybackStateProxy.processQualityProfile(e.data.profile);
	                this.contentPlaybackStateProxy.manifestQualities = e.data.profile;
	                break;
	            case PlaybackAdapterEvents_1.PlaybackAdapterEvents.LOADED_METADATA:
	                this.notify(NotificationName_1.NotificationName.STREAM_METADATA, e.data);
	                try {
	                    var resource = this.facade.retrieveProxy(ProxyName_1.ProxyName.Playlist).currentResource;
	                    var url = resource.location.thumbnailTrackUrl;
	                    if (!this.contentPlaybackStateProxy.thumbnailTrack && url) {
	                        ThumbnailTrackSurface_1.ThumbnailTrackSurface.create(url)
	                            .then(function (t) {
	                            _this.contentPlaybackStateProxy.thumbnailTrack = t;
	                            _this.notify(NotificationName_1.NotificationName.THUMBNAIL_TRACK_AVAILABLE, t);
	                        })
	                            .catch(function (e) { return _this.log(LogLevel_1.LogLevel.WARN, "Could not load thumbnail track"); });
	                    }
	                }
	                catch (error) {
	                    this.log(LogLevel_1.LogLevel.WARN, "Could not load thumbnail track");
	                }
	                break;
	            case PlaybackAdapterEvents_1.PlaybackAdapterEvents.ERROR:
	                this.respondToError(e.data);
	                break;
	            case PlaybackAdapterEvents_1.PlaybackAdapterEvents.MULTI_CDN:
	                var cdn = e.data.cdn;
	                if (cdn !== cps.cdn) {
	                    cps.cdn = cdn;
	                    this.notify(NotificationName_1.NotificationName.CDN_CHANGE, e.data);
	                }
	                break;
	            case PlaybackAdapterEvents_1.PlaybackAdapterEvents.DRM_KEYSYSTEM_CREATED:
	                cps.drmType = e.data.keysystem;
	                this.notify(NotificationName_1.NotificationName.DRM_KEYSYSTEM_CREATED, e.data);
	                break;
	        }
	    };
	    AbstractPresentationMediator.prototype.hVideoAdapterEvents = function (e) {
	        var cps = this.contentPlaybackStateProxy.model;
	        switch (e.type) {
	            case VideoSurfaceEvents_1.VideoSurfaceEvents.PROGRESS:
	                cps.bufferLength = this.pAdapter.bufferLength;
	                cps.averageDroppedFps = this.pAdapter.droppedVideoFrames;
	                cps.framerate = this.pAdapter.framerate;
	                this.respondToVideoProgress();
	                break;
	            case VideoSurfaceEvents_1.VideoSurfaceEvents.CAN_PLAY_THROUGH:
	                if (!this.loadComplete) {
	                    this.loadComplete = true;
	                    this.notify(NotificationName_1.NotificationName.VIDEO_LOAD_COMPLETE);
	                }
	                break;
	            case VideoSurfaceEvents_1.VideoSurfaceEvents.LOADED_METADATA:
	                this.updateLiveStreamInfo();
	                this.notify(NotificationName_1.NotificationName.VIDEO_LOADED_METADATA);
	                break;
	            case VideoSurfaceEvents_1.VideoSurfaceEvents.TIME_UPDATE:
	                clearTimeout(this.endFreezeTimeoutHandle);
	                var t = this.pAdapter.time, d = this.presoModel.streamDuration;
	                if (this.pAdapter.isLiveStream) {
	                    this.updateLiveStreamInfo();
	                }
	                else if (!isNaN(d) && (d - t <= 0.15)) {
	                    this.protectAgainstEndFreeze(250);
	                }
	                this.respondToVideoTimeUpdate(t);
	                break;
	            case VideoSurfaceEvents_1.VideoSurfaceEvents.PLAYING:
	                this.updateLiveStreamInfo();
	                this.respondToVideoPlaying();
	                break;
	            case VideoSurfaceEvents_1.VideoSurfaceEvents.PAUSE:
	                this.respondToVideoPaused();
	                break;
	            case VideoSurfaceEvents_1.VideoSurfaceEvents.SEEKING:
	                this.respondToVideoSeeking();
	                break;
	            case VideoSurfaceEvents_1.VideoSurfaceEvents.SEEKED:
	                this.respondToVideoSeeked();
	                break;
	            case VideoSurfaceEvents_1.VideoSurfaceEvents.ENDED:
	                clearTimeout(this.endFreezeTimeoutHandle);
	                this.respondToVideoEnd();
	                break;
	            case VideoSurfaceEvents_1.VideoSurfaceEvents.DURATION_CHANGE:
	                var duration = this.pAdapter.duration;
	                if (duration > 0) {
	                    this.respondToDurationChange(duration);
	                }
	                break;
	            case VideoSurfaceEvents_1.VideoSurfaceEvents.VOLUME_CHANGE:
	                var video = e.data.target;
	                this.notify(NotificationName_1.NotificationName.VOLUME_CHANGE, { value: video.volume, muted: video.muted });
	                break;
	        }
	    };
	    AbstractPresentationMediator.prototype.hTextTrackEvents = function (e) {
	        var textTrackProxy = this.facade.retrieveProxy(ProxyName_1.ProxyName.TextTrackProxy);
	        switch (e.type) {
	            case TextTrackSurfaceEvents_1.TextTrackSurfaceEvents.METADATA_CUEPOINT:
	                this.respondToId3Data(e.data);
	                break;
	            case TextTrackSurfaceEvents_1.TextTrackSurfaceEvents.TEXT_CUEPOINT:
	                if (this.isMonitoringCueEvents) {
	                    this.respondToTtCue(e.data);
	                }
	                this.notify(NotificationName_1.NotificationName.TEXT_CUEPOINT, e.data);
	                break;
	            case TextTrackSurfaceEvents_1.TextTrackSurfaceEvents.TEXT_TRACK_DISPLAY_MODE_CHANGE:
	                var enabled = e.data.mode !== TextTrackMode_1.TextTrackMode.DISABLED;
	                textTrackProxy.mode = e.data.mode;
	                this.notify(NotificationName_1.NotificationName.TEXT_TRACK_DISPLAY_MODE_CHANGE, { enabled: enabled });
	                this.respondToTextTrackModeChange(enabled);
	                break;
	            case TextTrackSurfaceEvents_1.TextTrackSurfaceEvents.TEXT_TRACK_ADDED:
	                this.contentPlaybackStateProxy.addTextTrack(e.data);
	                this.respondToTextTrackInfoChange();
	                break;
	            case TextTrackSurfaceEvents_1.TextTrackSurfaceEvents.TEXT_TRACK_CHANGE:
	                var track = e.data;
	                this.contentPlaybackStateProxy.nativeTextTrack = track;
	                this.notify(NotificationName_1.NotificationName.TEXT_TRACK_CHANGE, this.contentPlaybackStateProxy.textTrack);
	                this.respondToTextTrackInfoChange();
	                break;
	            case TextTrackSurfaceEvents_1.TextTrackSurfaceEvents.TEXT_TRACK_AVAILABLE:
	                this.notify(NotificationName_1.NotificationName.TEXT_TRACK_AVAILABLE);
	                break;
	        }
	    };
	    AbstractPresentationMediator.prototype.respondToTextTrackInfoChange = function () {
	        this.notify(NotificationName_1.NotificationName.TEXT_TRACK_INFO_CHANGE, this.contentPlaybackStateProxy.textTrackInfo);
	    };
	    AbstractPresentationMediator.prototype.protectAgainstEndFreeze = function (delay) {
	        var _this = this;
	        this.endFreezeTimeoutHandle = setTimeout(function () {
	            _this.respondToVideoEnd();
	        }, delay);
	    };
	    AbstractPresentationMediator.prototype.addEvents = function (map, fn) {
	        if (!this.pAdapter) {
	            return;
	        }
	        for (var item in map) {
	            this.pAdapter.on(map[item], fn);
	        }
	    };
	    AbstractPresentationMediator.prototype.removeEvents = function (map, fn) {
	        if (!this.pAdapter) {
	            return;
	        }
	        for (var item in map) {
	            this.pAdapter.off(map[item], fn);
	        }
	    };
	    AbstractPresentationMediator.prototype.calculateStreamType = function () {
	        if (this.pAdapter.isLiveStream) {
	            var liveStreamInfo = this.pAdapter.liveStreamInfo;
	            var dvr = liveStreamInfo.dvrWindowSize;
	            var isLiveLinearStream = dvr < this.minDvrDuration || isNaN(dvr);
	            return (isLiveLinearStream) ? StreamType_1.StreamType.LIVE : StreamType_1.StreamType.DVR;
	        }
	        else {
	            return StreamType_1.StreamType.VOD;
	        }
	    };
	    AbstractPresentationMediator.prototype.updateLiveStreamInfo = function () {
	        if (!this.pAdapter.isLiveStream) {
	            this.respondToStreamTypeChange(StreamType_1.StreamType.VOD);
	            return;
	        }
	        var cps = this.contentPlaybackStateProxy.model;
	        var liveStreamInfo = this.pAdapter.liveStreamInfo;
	        cps.liveStreamInfo = liveStreamInfo;
	        var streamType = this.calculateStreamType();
	        this.respondToStreamTypeChange(streamType);
	        var isPlayingLive = (streamType == StreamType_1.StreamType.LIVE) ? true : liveStreamInfo.isPlayingLive;
	        if (this.isPlayingLive != isPlayingLive) {
	            this.isPlayingLive = isPlayingLive;
	            this.respondToIsPlayingLiveChange(isPlayingLive);
	        }
	        if (cps.streamType == StreamType_1.StreamType.DVR) {
	            this.respondToDurationChange(liveStreamInfo.relativeDuration);
	        }
	    };
	    return AbstractPresentationMediator;
	}(LogAwareMediator_1.LogAwareMediator));
	exports.AbstractPresentationMediator = AbstractPresentationMediator;

	});

	var CommonPresentationMediator_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.CommonPresentationMediator = void 0;













	var CommonPresentationMediator = (function (_super) {
	    tslib_es6.__extends(CommonPresentationMediator, _super);
	    function CommonPresentationMediator() {
	        var _this = _super !== null && _super.apply(this, arguments) || this;
	        _this.uim = null;
	        _this.liveTZero = null;
	        _this.currentPresentationWidth = null;
	        _this.contentDurationReleased = false;
	        _this.resumeTimeMaxProximityToAdBreak = 5.0;
	        _this.isClickToPlay = false;
	        _this.fullscreenRestrictedDuringAdPlay = false;
	        _this.hasContent = true;
	        return _this;
	    }
	    CommonPresentationMediator.prototype.onRemove = function () {
	        this.uim = null;
	        _super.prototype.onRemove.call(this);
	    };
	    CommonPresentationMediator.prototype.close = function () {
	        var _this = this;
	        this.pause();
	        this.log(LogLevel_1.LogLevel.INFO, 'Closing Presentation');
	        this.closeAds();
	        return Promise.resolve()
	            .then(function () { return (_this.adapter) ? _this.adapter.destroy() : null; })
	            .then(function () {
	            var isAdPlaying = _this.isAdPlaying();
	            if (_this.hasContent && (!_this.isContentComplete() || isAdPlaying)) {
	                var cps = _this.contentPlaybackStateProxy.model;
	                _this.sendNotification(NotificationName_1.NotificationName.RESOURCE_INTERRUPTED, {
	                    contentTime: cps.time,
	                    contentDuration: cps.duration,
	                    adInterrupted: isAdPlaying
	                });
	            }
	            else {
	                _this.notify(NotificationName_1.NotificationName.RESOURCE_END);
	            }
	        })
	            .catch(function (e) {
	            Logger_1.Logger.error(e);
	            throw e;
	        });
	    };
	    CommonPresentationMediator.prototype.closeAds = function () {
	    };
	    CommonPresentationMediator.prototype.playOnUserGesture = function () {
	        this.uiMediator && this.uiMediator.displayPoster(false);
	        this.notify(NotificationName_1.NotificationName.VIDEO_LOAD_START);
	        this.prepareForPlayback(true);
	    };
	    CommonPresentationMediator.prototype.mute = function (flag) {
	        this.muteVideo(flag);
	        this.uiMediator && this.uiMediator.setMuteState(flag);
	    };
	    CommonPresentationMediator.prototype.seek = function (position) {
	        this.seekVideo(position);
	    };
	    CommonPresentationMediator.prototype.setVolume = function (value) {
	        this.domProxy && this.domProxy.setVideoVolume(value);
	        _super.prototype.setVolume.call(this, value);
	    };
	    CommonPresentationMediator.prototype.getAdBreakTimes = function () {
	        return [];
	    };
	    CommonPresentationMediator.prototype.releaseContentDuration = function (duration) {
	        this.contentDurationReleased = true;
	        this.notify(NotificationName_1.NotificationName.CONTENT_DURATION_AVAILABLE, {
	            contentDuration: duration
	        });
	    };
	    CommonPresentationMediator.prototype.getLiveProgress = function () {
	        if (this.liveTZero === null) {
	            this.liveTZero = Date.now();
	        }
	        return Date.now() - this.liveTZero;
	    };
	    CommonPresentationMediator.prototype.adjustStartTimeForAdBreakProximity = function (requestedStartTime, breaks) {
	        for (var i = 0, n = breaks.length; i < n; i++) {
	            var bs = breaks[i].start, diff = bs - requestedStartTime;
	            if (diff >= 0 && diff < this.resumeTimeMaxProximityToAdBreak) {
	                return requestedStartTime - this.resumeTimeMaxProximityToAdBreak;
	            }
	        }
	        return requestedStartTime;
	    };
	    Object.defineProperty(CommonPresentationMediator.prototype, "uiMediator", {
	        get: function () {
	            return this.uim;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(CommonPresentationMediator.prototype, "domProxy", {
	        get: function () {
	            return this.facade.retrieveProxy(ProxyName_1.ProxyName.PlayerDomProxy);
	        },
	        enumerable: false,
	        configurable: true
	    });
	    CommonPresentationMediator.prototype.muteVideo = function (flag) {
	        _super.prototype.muteVideo.call(this, flag);
	        this.domProxy && this.domProxy.muteVideo(flag);
	    };
	    CommonPresentationMediator.prototype.respondToFullscreenChange = function (state) {
	        this.checkSize();
	        this.notify(state ? NotificationName_1.NotificationName.FULLSCREEN_ENTER : NotificationName_1.NotificationName.FULLSCREEN_EXIT);
	    };
	    CommonPresentationMediator.prototype.respondToVideoPaused = function () {
	        this.contentPlaybackStateProxy.model.state = PlaybackState_1.PlaybackState.PAUSED;
	        this.notify(NotificationName_1.NotificationName.RESOURCE_PAUSED);
	    };
	    CommonPresentationMediator.prototype.respondToVideoPlaying = function () {
	        this.contentPlaybackStateProxy.model.state = PlaybackState_1.PlaybackState.PLAYING;
	        this.notify(NotificationName_1.NotificationName.RESOURCE_PLAYING);
	    };
	    CommonPresentationMediator.prototype.respondToVideoSeeking = function () {
	        this.notify(NotificationName_1.NotificationName.CONTENT_SEEKING);
	    };
	    CommonPresentationMediator.prototype.respondToVideoSeeked = function () {
	        this.notify(NotificationName_1.NotificationName.CONTENT_SEEKED);
	    };
	    CommonPresentationMediator.prototype.respondToVideoProgress = function () {
	        this.notify(NotificationName_1.NotificationName.VIDEO_PROGRESS);
	    };
	    CommonPresentationMediator.prototype.respondToQualityChange = function (quality) {
	        if (quality === void 0) { quality = null; }
	        this.notify(NotificationName_1.NotificationName.QUALITY_CHANGE, quality);
	    };
	    CommonPresentationMediator.prototype.respondToError = function (data) {
	        this.uiMediator && this.uiMediator.displaySpinner(false);
	        if (!data.message) {
	            data.message = AppResources_1.AppResources.messages.UNSPECIFIED_ERROR;
	        }
	        if (!data.code) {
	            data.code = ErrorCode_1.ErrorCode.UNSPECIFIED_VIDEO_PLAYBACK_ERROR;
	        }
	        this.notify(NotificationName_1.NotificationName.VIDEO_PLAYBACK_ERROR, data);
	    };
	    CommonPresentationMediator.prototype.respondToVideoEnd = function () {
	        this.notify(NotificationName_1.NotificationName.DISABLE_UI);
	        this.notify(NotificationName_1.NotificationName.RESOURCE_COMPLETE);
	    };
	    CommonPresentationMediator.prototype.respondToBufferingStatusCheck = function () {
	        var t = this.presoModel.streamTime;
	        !isNaN(t) && t > 0 && this.checkVideoBuffering();
	    };
	    CommonPresentationMediator.prototype.respondToId3Data = function (d) {
	        this.notify(NotificationName_1.NotificationName.METADATA_CUEPOINT, d);
	    };
	    CommonPresentationMediator.prototype.respondToVideoTimeUpdate = function (streamTime) {
	        var cps = this.contentPlaybackStateProxy.model;
	        var data = {
	            contentTime: cps.time,
	            streamTime: streamTime,
	            contentDuration: cps.duration,
	            streamDuration: this.presoModel.streamDuration
	        };
	        var isLive = cps.streamType === StreamType_1.StreamType.LIVE;
	        if (isLive) {
	            data.elapsedTimeMs = this.getLiveProgress();
	        }
	        this.notify(NotificationName_1.NotificationName.CONTENT_TIME_UPDATE, data);
	    };
	    CommonPresentationMediator.prototype.respondToDurationChange = function (dur) {
	    };
	    CommonPresentationMediator.prototype.respondToSizeChange = function () {
	        if (!this.adapter) {
	            return;
	        }
	        this.adapter.resize();
	    };
	    CommonPresentationMediator.prototype.respondToTextTrackModeChange = function (enabled) {
	        if (this.uiMediator) {
	            this.uiMediator.setClosedCaptionState(enabled);
	        }
	    };
	    CommonPresentationMediator.prototype.checkSize = function () {
	        if (!this.domProxy)
	            return;
	        var pSz = this.domProxy.getPresentationRect(), currWidth = this.currentPresentationWidth;
	        this.currentPresentationWidth = pSz.width;
	        if ((currWidth && pSz.width !== currWidth)) {
	            this.respondToSizeChange();
	            this.notify(NotificationName_1.NotificationName.PRESENTATION_SIZE_CHANGE, {
	                width: pSz.width,
	                height: pSz.height
	            });
	        }
	    };
	    CommonPresentationMediator.prototype.setTransportType = function (streamType) {
	        if (streamType === void 0) { streamType = this.contentPlaybackStateProxy.model.streamType; }
	        var seekable = streamType != StreamType_1.StreamType.LIVE;
	        if (this.uiMediator) {
	            this.uiMediator.setSeekable(seekable);
	            this.uiMediator.setTransportType(streamType);
	            this.uiMediator.setIsPlayingLive(this.isPlayingLive);
	        }
	    };
	    CommonPresentationMediator.prototype.setForClickToPlay = function () {
	        var _this = this;
	        if (this.uiMediator) {
	            this.uiMediator.displayPoster(true);
	            this.uiMediator.activatePoster();
	        }
	        else {
	            var po = this.getModel(ModelName_1.ModelName.PlayerOptions);
	            if (po.useNativeControls) {
	                var m_1 = this.domProxy.getMain();
	                var lr_1 = function () {
	                    m_1.removeEventListener('click', lr_1);
	                    _this.notify(NotificationName_1.NotificationName.PLAY_ON_USER_GESTURE);
	                };
	                m_1.addEventListener('click', lr_1);
	            }
	        }
	    };
	    CommonPresentationMediator.prototype.setPausedState = function () {
	        if (this.uiMediator) {
	            this.uiMediator.setClickCatcherState(PlaybackState_1.PlaybackState.PAUSED);
	            this.uiMediator.hideClickCatcher(false);
	        }
	    };
	    CommonPresentationMediator.prototype.setPlayingState = function () {
	        if (this.uiMediator) {
	            this.uiMediator.setClickCatcherState(PlaybackState_1.PlaybackState.PLAYING);
	            this.uiMediator.hideClickCatcher(false);
	        }
	    };
	    CommonPresentationMediator.prototype.isContentComplete = function () {
	        var cps = this.contentPlaybackStateProxy.model;
	        return cps.streamType != StreamType_1.StreamType.LIVE && cps.streamType != StreamType_1.StreamType.DVR && !(isNaN(cps.time) || cps.time < cps.duration);
	    };
	    CommonPresentationMediator.prototype.isAdPlaying = function () {
	        return this.presoModel.isCurrentVideoAd;
	    };
	    CommonPresentationMediator.prototype.handleNotification = function (notification) {
	        _super.prototype.handleNotification.call(this, notification);
	    };
	    CommonPresentationMediator.prototype.listNotificationInterests = function () {
	        return _super.prototype.listNotificationInterests.call(this).concat([]);
	    };
	    CommonPresentationMediator.prototype.onRegister = function () {
	        _super.prototype.onRegister.call(this);
	        var o = this.playerOptions.overrides;
	        if (o.resumeTimeMaxProximityToAdBreak) {
	            this.resumeTimeMaxProximityToAdBreak = o.resumeTimeMaxProximityToAdBreak;
	        }
	        this.isClickToPlay = !this.presoModel.isAutoplay;
	        var uim = this.facade.retrieveMediator(MediatorName_1.MediatorName.UI);
	        uim && (this.uim = uim);
	        var sys = this.facade.retrieveService(ServiceName_1.ServiceName.System);
	        this.fullscreenRestrictedDuringAdPlay = sys.isIos || sys.isAndroid;
	        if (this.uim) {
	            this.uim.disableFullscreen();
	            this.uim.setFullScreenAccessRestricted(this.fullscreenRestrictedDuringAdPlay);
	        }
	        this.setTransportType(StreamType_1.StreamType.VOD);
	    };
	    return CommonPresentationMediator;
	}(AbstractPresentationMediator_1.AbstractPresentationMediator));
	exports.CommonPresentationMediator = CommonPresentationMediator;

	});

	var ContentPresentationMediator_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ContentPresentationMediator = void 0;



	var ContentPresentationMediator = (function (_super) {
	    tslib_es6.__extends(ContentPresentationMediator, _super);
	    function ContentPresentationMediator(name, viewControl) {
	        return _super.call(this, name, viewControl) || this;
	    }
	    ContentPresentationMediator.prototype.start = function () {
	        var pm = this.presoModel;
	        this.uiMediator && this.uiMediator.setMuteState(pm.isMuted);
	        if (this.isClickToPlay) {
	            this.setForClickToPlay();
	        }
	        else {
	            this.notify(NotificationName_1.NotificationName.VIDEO_LOAD_START);
	        }
	    };
	    ContentPresentationMediator.prototype.respondToVideoPlaying = function () {
	        var cps = this.contentPlaybackStateProxy.model;
	        var sendStart = false;
	        cps.started = true;
	        if (!this.presoModel.started) {
	            this.presoModel.started = true;
	            this.started = true;
	            if (this.uiMediator) {
	                this.uiMediator.displayPoster(false);
	                this.presoModel.isMuteAtPlayStart && !this.presoModel.userHasUnmuted && this.uiMediator.showUnmutePrompt();
	                this.notify(NotificationName_1.NotificationName.ENABLE_UI);
	                this.uiMediator.setFullScreenAccessRestricted(false);
	                this.uiMediator.enableFullscreen();
	                this.setTransportType();
	            }
	            sendStart = true;
	        }
	        _super.prototype.respondToVideoPlaying.call(this);
	        this.setPlayingState();
	        sendStart && this.notify(NotificationName_1.NotificationName.CONTENT_START);
	        this.notify(NotificationName_1.NotificationName.CONTENT_PLAYING);
	    };
	    ContentPresentationMediator.prototype.respondToVideoTimeUpdate = function (streamTime) {
	        var cps = this.contentPlaybackStateProxy.model;
	        if (this.presoModel.started) {
	            this.presoModel.streamTime = streamTime;
	            cps.time = streamTime;
	            _super.prototype.respondToVideoTimeUpdate.call(this, streamTime);
	        }
	    };
	    ContentPresentationMediator.prototype.respondToVideoPaused = function () {
	        _super.prototype.respondToVideoPaused.call(this);
	        this.setPausedState();
	        this.notify(NotificationName_1.NotificationName.CONTENT_PAUSED);
	    };
	    ContentPresentationMediator.prototype.respondToIsPlayingLiveChange = function (isLive) {
	        this.uiMediator && this.uiMediator.setIsPlayingLive(isLive);
	        _super.prototype.respondToIsPlayingLiveChange.call(this, isLive);
	    };
	    ContentPresentationMediator.prototype.respondToVideoEnd = function () {
	        this.notify(NotificationName_1.NotificationName.CONTENT_COMPLETE);
	        _super.prototype.respondToVideoEnd.call(this);
	    };
	    ContentPresentationMediator.prototype.respondToDurationChange = function (duration) {
	        this.presoModel.streamDuration = duration;
	        this.contentPlaybackStateProxy.model.duration = duration;
	        if (!this.contentDurationReleased) {
	            this.releaseContentDuration(duration);
	        }
	    };
	    ContentPresentationMediator.prototype.onRegister = function () {
	        _super.prototype.onRegister.call(this);
	        this.domProxy && this.domProxy.showAdContainer(false);
	        !this.isClickToPlay && this.prepareForPlayback();
	    };
	    return ContentPresentationMediator;
	}(CommonPresentationMediator_1.CommonPresentationMediator));
	exports.ContentPresentationMediator = ContentPresentationMediator;

	});

	var AdBreakSchedule_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.AdBreakSchedule = void 0;

	var AdBreakSchedule = (function () {
	    function AdBreakSchedule(cueTimes, cuePoints, contentDur) {
	        this.breaks = {
	            pre: null,
	            mid: [],
	            post: null
	        };
	        this.breaksById = {};
	        if (cueTimes)
	            this.createBreaksFromTimes(cueTimes);
	        else if (cuePoints)
	            this.createBreaksFromCuepoints(cuePoints, contentDur);
	    }
	    AdBreakSchedule.prototype.destroy = function () {
	        this.breaks = null;
	        this.breaksById = null;
	        this.breaks = null;
	    };
	    Object.defineProperty(AdBreakSchedule.prototype, "adBreaks", {
	        get: function () {
	            return this.breaks;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    AdBreakSchedule.prototype.hasMidRolls = function () {
	        return !!this.breaks.mid.length;
	    };
	    AdBreakSchedule.prototype.hasPostRoll = function () {
	        return !!this.breaks.post;
	    };
	    AdBreakSchedule.prototype.getBreakById = function (podId) {
	        return this.breaksById[podId] || null;
	    };
	    AdBreakSchedule.prototype.updateBreaks = function (cues) {
	        var played = [];
	        var brk;
	        var i = cues.length;
	        while (i--) {
	            cues[i].played && played.push(cues[i].start);
	        }
	        for (var q in this.breaksById) {
	            brk = this.breaksById[q];
	            if (!brk.hasPlayed && played.indexOf(brk.streamStartTime) >= 0) {
	                brk.hasPlayed = true;
	            }
	        }
	    };
	    AdBreakSchedule.prototype.isBreakPending = function (time, proximity) {
	        return !!this.processMid(function (mid) {
	            if (mid.startTime > time && ((mid.startTime - time) <= proximity)) {
	                return !mid.hasPlayed ? true : -1;
	            }
	            return null;
	        });
	    };
	    AdBreakSchedule.prototype.getBreakForContentSeekTime = function (time) {
	        return this.processMid(function (mid) {
	            if (mid.startTime <= time) {
	                return !mid.hasPlayed ? mid : -1;
	            }
	            return null;
	        });
	    };
	    AdBreakSchedule.prototype.hasPlayed = function (podId) {
	        return this.breaksById[podId] && this.breaksById[podId].hasPlayed === true;
	    };
	    AdBreakSchedule.prototype.markPlayed = function (podId) {
	        this.breaksById[podId] && (this.breaksById[podId].hasPlayed = true);
	    };
	    AdBreakSchedule.prototype.processMid = function (fn) {
	        if (!this.hasMidRolls()) {
	            return null;
	        }
	        var mid = this.breaks.mid;
	        var i = mid.length, r;
	        while (i--) {
	            r = fn(mid[i]);
	            if (r == -1) {
	                return null;
	            }
	            else if (r) {
	                return r;
	            }
	        }
	        return null;
	    };
	    AdBreakSchedule.prototype.createBreaksFromCuepoints = function (cues, contentDur) {
	        var midIdx = 1, t, e, id, d, sst, brk;
	        cues.sort(function (a, b) {
	            return a.start - b.start;
	        });
	        var brkTimeTotal = 0;
	        for (var i = 0, n = cues.length; i < n; i++) {
	            t = cues[i].start;
	            e = cues[i].end;
	            d = e - t;
	            sst = t;
	            if ((t - brkTimeTotal) >= contentDur) {
	                t = -1;
	            }
	            brkTimeTotal += d;
	            id = this.makeBrkId(t, t > 0 ? midIdx++ : null);
	            brk = this.makeBreak(t, id, sst);
	            brk.endTime = e,
	                brk.duration = d,
	                this.addBreak(t, brk, id);
	        }
	    };
	    AdBreakSchedule.prototype.createBreaksFromTimes = function (cues) {
	        var midIdx = 1, t, id;
	        cues.sort(function (a, b) {
	            return a - b;
	        });
	        for (var i = 0, n = cues.length; i < n; i++) {
	            t = cues[i];
	            id = this.makeBrkId(t, t > 0 ? midIdx++ : null);
	            this.addBreak(t, this.makeBreak(t, id), id);
	        }
	    };
	    AdBreakSchedule.prototype.addBreak = function (t, brk, id) {
	        var prefix = id.split('_')[0];
	        t <= 0 ? (this.breaks[prefix] = brk) : this.breaks.mid.push(brk);
	        this.breaksById[id] = brk;
	    };
	    AdBreakSchedule.prototype.makeBreak = function (t, id, sst) {
	        if (sst === void 0) { sst = null; }
	        return {
	            startTime: t,
	            hasPlayed: false,
	            streamStartTime: sst !== null ? sst : null,
	            breakId: id,
	            type: t === 0 ? AdBreakType_1.AdBreakType.PRE : t === -1 ? AdBreakType_1.AdBreakType.POST : AdBreakType_1.AdBreakType.MID
	        };
	    };
	    AdBreakSchedule.prototype.makeBrkId = function (t, idx) {
	        var idPrefix = t === 0 ? "pre" : (t === -1 ? "post" : "mid");
	        return idPrefix + (t > 0 ? "_" + idx : '_0');
	    };
	    return AdBreakSchedule;
	}());
	exports.AdBreakSchedule = AdBreakSchedule;

	});

	var DaiStreamManager_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.DaiStreamManager = void 0;







	var DaiStreamManager = (function (_super) {
	    tslib_es6.__extends(DaiStreamManager, _super);
	    function DaiStreamManager(adService) {
	        var _this = _super.call(this, null) || this;
	        _this.streamInfo = {};
	        _this.adBreakSchedule = null;
	        _this.pStreamDuration = NaN;
	        _this.pContentDuration = NaN;
	        _this.breakMetadataPending = false;
	        _this.cuesReleased = false;
	        _this.adBreakInProgress = false;
	        _this.breakCount = 0;
	        _this.unlockedBreaks = [];
	        _this.rawScheduleReleased = false;
	        _this.isIgnoringEvents = false;
	        _this.cuePoints = [];
	        _this.adService = adService;
	        _this.sdk = _this.adService.sdk;
	        _this.mgr = _this.adService.getStreamManager();
	        _this.streamEventHandler = function (e) { _this.hStreamEvent(e); };
	        _this.initialize();
	        return _this;
	    }
	    DaiStreamManager.prototype.destroy = function () {
	        this.listenToStreamManager(false);
	        this.cuePoints = null;
	        this.adService = null;
	        this.sdk = null;
	        this.adBreakSchedule = null;
	        this.mgr = null;
	    };
	    DaiStreamManager.prototype.getCuePoints = function () {
	        return this.cuePoints || [];
	    };
	    DaiStreamManager.prototype.getCuePointsInContentTime = function () {
	        var pts = this.cuePoints, out = [];
	        if (!pts) {
	            return out;
	        }
	        for (var i = 0, n = pts.length; i < n; i++) {
	            var p = pts[i], d = p.end - p.start, s = this.contentTimeForStreamTime(p.start);
	            out.push({
	                streamTimeStart: p.start,
	                streamTimeEnd: p.start + d,
	                start: s,
	                duration: d,
	                played: p.played
	            });
	        }
	        return out;
	    };
	    DaiStreamManager.prototype.ignoreAdEvents = function (flag) {
	        this.isIgnoringEvents = flag;
	    };
	    DaiStreamManager.prototype.setUnlockedBreaks = function (breakTimes) {
	        this.unlockedBreaks = breakTimes;
	    };
	    DaiStreamManager.prototype.getUnlockedBreaks = function () {
	        return this.unlockedBreaks;
	    };
	    DaiStreamManager.prototype.addUnlockedBreak = function (time) {
	        this.unlockedBreaks.push(time);
	    };
	    DaiStreamManager.prototype.hasPostRoll = function () {
	        return this.adBreakSchedule && this.adBreakSchedule.hasPostRoll();
	    };
	    DaiStreamManager.prototype.checkForAdPeriod = function (streamTime, suppressEvent) {
	        var n = this.cuePoints.length, q, diffStart, diff1Ok, diff2Ok;
	        for (var i = 0; i < n; i++) {
	            q = this.cuePoints[i];
	            diffStart = streamTime - q.start;
	            diff1Ok = diffStart > -0.3 && diffStart < 2;
	            diff2Ok = (q.end - streamTime) >= 3;
	            if (this.isUnlockedBreak(q) && diff1Ok && diff2Ok) {
	                this.emit(DaiStreamManager.event.AD_PERIOD_STARTED, {
	                    streamResumeTime: q.end
	                });
	                return true;
	            }
	        }
	        return false;
	    };
	    DaiStreamManager.prototype.isUnlockedBreak = function (q) {
	        var i = this.unlockedBreaks.length;
	        while (i--) {
	            if (Math.floor(this.unlockedBreaks[i]) === Math.floor(q.start)) {
	                return true;
	            }
	        }
	        return false;
	    };
	    DaiStreamManager.prototype.getPermittedSeekTime = function (requestedSeekTime) {
	        if (this.adBreakSchedule && this.adBreakSchedule.hasMidRolls()) {
	            var streamTime = this.mgr.streamTimeForContentTime(requestedSeekTime), b = this.adBreakSchedule.getBreakForContentSeekTime(streamTime);
	            if (b) {
	                var i = this.unlockedBreaks.length;
	                while (i--) {
	                    if (Math.floor(this.unlockedBreaks[i]) === Math.floor(b.streamStartTime)) {
	                        b.hasPlayed = true;
	                        return requestedSeekTime;
	                    }
	                }
	                return b.startTime;
	            }
	        }
	        return requestedSeekTime;
	    };
	    Object.defineProperty(DaiStreamManager.prototype, "streamDuration", {
	        get: function () {
	            return this.pStreamDuration || NaN;
	        },
	        set: function (d) {
	            this.pStreamDuration = d;
	            this.pContentDuration = this.mgr.contentTimeForStreamTime(d);
	            if (this.pendingCues && !this.cuesReleased) {
	                this.updateBreakSchedule(this.pendingCues);
	                this.releaseCues(this.pendingCues);
	                this.pendingCues = null;
	            }
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(DaiStreamManager.prototype, "contentDuration", {
	        get: function () {
	            return this.pContentDuration || NaN;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(DaiStreamManager.prototype, "streamId", {
	        get: function () {
	            return this.streamInfo.streamId;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    DaiStreamManager.prototype.onTimedMetadata = function (md) {
	        var obj = {
	            TXXX: md.TXXX || md.msg
	        };
	        this.mgr.onTimedMetadata(obj);
	    };
	    DaiStreamManager.prototype.contentTimeForStreamTime = function (t) {
	        return this.mgr.contentTimeForStreamTime(t);
	    };
	    DaiStreamManager.prototype.streamTimeForContentTime = function (t) {
	        return this.mgr.streamTimeForContentTime(t);
	    };
	    DaiStreamManager.prototype.requestVODStream = function (requestObject, er) {
	        if (er === void 0) { er = null; }
	        var req = new this.sdk.VODStreamRequest(requestObject);
	        this.isLiveStream = false;
	        this.mgr.requestStream(req, er);
	    };
	    DaiStreamManager.prototype.requestLiveStream = function (requestObject, er) {
	        if (er === void 0) { er = null; }
	        var req = new this.sdk.LiveStreamRequest(requestObject);
	        this.isLiveStream = true;
	        this.mgr.requestStream(req, er);
	    };
	    DaiStreamManager.prototype.hStreamEvent = function (e) {
	        if (!this.sdk || !this.adService || this.isIgnoringEvents) {
	            return;
	        }
	        var evtType = e.type, gamType = this.sdk.StreamEvent.Type, myEvent = DaiStreamManager.event;
	        switch (evtType) {
	            case gamType.LOADED:
	                this.handleStreamLoaded(e);
	                break;
	            case gamType.STREAM_INITIALIZED:
	                var d = e.getStreamData();
	                this.streamInfo.streamId = d.streamId;
	                this.emit(myEvent.STREAM_ID_AVAILABLE, { streamId: d.streamId });
	                break;
	            case gamType.AD_PERIOD_STARTED:
	                break;
	            case gamType.CUEPOINTS_CHANGED:
	                var cues = e.getStreamData().cuepoints;
	                if (!this.rawScheduleReleased) {
	                    this.emit(myEvent.RAW_AD_SCHEDULE_AVAILABLE, { schedule: this.getRawSchedule(cues) });
	                    this.rawScheduleReleased = true;
	                }
	                this.updateBreakSchedule(cues);
	                if (!isNaN(this.contentDuration) && !this.cuesReleased) {
	                    this.releaseCues(cues);
	                }
	                else {
	                    this.pendingCues = cues;
	                }
	                break;
	            case gamType.AD_BREAK_STARTED:
	                this.adBreakInProgress = true;
	                this.breakMetadataPending = true;
	                this.emit(myEvent.AD_BREAK_START);
	                break;
	            case gamType.STARTED:
	                var ad = e.getAd();
	                this.handleAdStart(ad, gamType.STARTED);
	                break;
	            case gamType.AD_PROGRESS:
	                if (this.adBreakInProgress) {
	                    var pData = e.getStreamData().adProgressData;
	                    this.emit(myEvent.AD_PROGRESS, pData);
	                }
	                break;
	            case gamType.FIRST_QUARTILE:
	                if (this.adBreakInProgress) {
	                    this.trackQuartile(gamType.FIRST_QUARTILE);
	                    this.emit(myEvent.AD_FIRST_QUARTILE);
	                }
	                break;
	            case gamType.MIDPOINT:
	                if (this.adBreakInProgress) {
	                    this.trackQuartile(gamType.MIDPOINT);
	                    this.emit(myEvent.AD_MIDPOINT);
	                }
	                break;
	            case gamType.THIRD_QUARTILE:
	                if (this.adBreakInProgress) {
	                    this.trackQuartile(gamType.THIRD_QUARTILE);
	                    this.emit(myEvent.AD_THIRD_QUARTILE);
	                }
	                break;
	            case gamType.COMPLETE:
	                if (this.adBreakInProgress) {
	                    this.handleAdComplete(gamType.COMPLETE);
	                }
	                break;
	            case gamType.AD_BREAK_ENDED:
	                this.adBreakInProgress && this.emit(myEvent.AD_BREAK_COMPLETE);
	                this.updateUnlockedBreaks();
	                this.adBreakInProgress = false;
	                break;
	            case gamType.CLICK:
	                this.adBreakInProgress && this.emit(myEvent.AD_CLICK);
	                break;
	            case gamType.ERROR:
	                this.adBreakInProgress = false;
	                this.emitError(e.getStreamData().errorMessage, e.data ? e.data.code : null);
	                break;
	        }
	    };
	    DaiStreamManager.prototype.handleAdComplete = function (evt) {
	        if (!this.adService.usesDaiApi) {
	            this.adService.trackAdEvent({
	                context: this.adService.getAdContext(),
	                eventName: evt,
	                volume: this.adService.videoInterface.volume
	            });
	            this.adService.untrackAd();
	        }
	        this.emit(DaiStreamManager.event.AD_COMPLETE);
	    };
	    DaiStreamManager.prototype.trackQuartile = function (evt) {
	        !this.adService.usesDaiApi && this.adService.trackAdEvent({
	            context: this.adService.getAdContext(),
	            eventName: evt,
	            volume: this.adService.videoInterface.volume
	        });
	    };
	    DaiStreamManager.prototype.handleAdStart = function (ad, evt) {
	        var abi = this.adService.assembleAdBreakInfo(ad), ai = this.adService.assembleAdInfo(ad, { mediaUrl: this.mediaUrl }), myEvent = DaiStreamManager.event;
	        if (this.breakMetadataPending || !this.adBreakInProgress) {
	            this.breakMetadataPending = false;
	            this.adBreakInProgress = true;
	            if (this.isLiveStream) {
	                abi.adBreakPosition = ++this.breakCount;
	                abi.adBreakType = AdBreakType_1.AdBreakType.MID;
	            }
	            this.emit(myEvent.AD_BREAK_METADATA, abi);
	        }
	        if (!this.adService) {
	            return;
	        }
	        if (!this.adService.usesDaiApi) {
	            this.adService.trackAd(ai);
	            this.adService.trackAdEvent({
	                context: this.adService.getAdContext(),
	                eventName: evt,
	                volume: this.adService.videoInterface.volume
	            });
	        }
	        this.emit(myEvent.AD_START, ai);
	    };
	    DaiStreamManager.prototype.handleStreamLoaded = function (e) {
	        var data = e.getStreamData(), assetUrl = data.url;
	        if (!Util_1.Util.isString(assetUrl) || assetUrl == '') {
	            this.emitError(AppResources_1.AppResources.messages.DAI_MISSING_ASSET_URL);
	            return;
	        }
	        this.mediaUrl = assetUrl;
	        this.streamInfo.streamId = data.streamId;
	        this.emit(DaiStreamManager.event.STREAM_ID_AVAILABLE, { streamId: data.streamId });
	        this.emit(DaiStreamManager.event.MEDIA_URL_AVAILABLE, {
	            mediaUrl: assetUrl
	        });
	    };
	    DaiStreamManager.prototype.updateUnlockedBreaks = function () {
	        var b = this.adBreakSchedule.adBreaks;
	        for (var q in b) {
	            if (q === 'pre')
	                this.updateUnlockedScheduleItems([b[q]]);
	            else
	                this.updateUnlockedScheduleItems(b[q]);
	        }
	    };
	    DaiStreamManager.prototype.updateUnlockedScheduleItems = function (ba) {
	        var i = ba ? ba.length : 0;
	        while (i--) {
	            var b = ba[i];
	            if (b && b.hasPlayed && this.unlockedBreaks.indexOf(b.startTime) === -1) {
	                this.addUnlockedBreak(b.startTime);
	            }
	        }
	    };
	    DaiStreamManager.prototype.getRawSchedule = function (cues) {
	        var out = [];
	        for (var i = 0, n = cues.length; i < n; i++) {
	            var q = cues[i];
	            out[i] = {
	                start: this.mgr.contentTimeForStreamTime(q.start),
	                streamTimeStart: q.start,
	                end: this.mgr.contentTimeForStreamTime(q.end),
	                streamTimeEnd: q.end,
	                played: false
	            };
	        }
	        return out;
	    };
	    DaiStreamManager.prototype.releaseCues = function (cues) {
	        var out = [], qlist = cues || this.cuePoints;
	        var i = qlist.length;
	        while (i--) {
	            out.unshift(this.contentTimeForStreamTime(qlist[i].start));
	        }
	        this.cuesReleased = true;
	        this.emit(DaiStreamManager.event.AD_CUEPOINTS_AVAILABLE, {
	            cuepoints: out
	        });
	    };
	    DaiStreamManager.prototype.emitError = function (msg, code) {
	        this.emit(DaiStreamManager.event.AD_ERROR, {
	            message: msg,
	            code: code || ErrorCode_1.ErrorCode.DAI_DATA_ERROR,
	            streamId: this.streamInfo.streamId || null
	        });
	    };
	    DaiStreamManager.prototype.listenToStreamManager = function (flag) {
	        var m = flag ? 'addEventListener' : 'removeEventListener', evts = this.getEventInterests();
	        var evt;
	        if (!this.sdk) {
	            return;
	        }
	        for (var i = 0, n = evts.length; i < n; i++) {
	            evt = this.sdk.StreamEvent.Type[evts[i]];
	            this.mgr[m](evt, this.streamEventHandler);
	        }
	    };
	    DaiStreamManager.prototype.getEventInterests = function () {
	        return [
	            'LOADED', 'STREAM_INITIALIZED', 'CUEPOINTS_CHANGED',
	            'AD_BREAK_STARTED', 'AD_BREAK_ENDED',
	            'STARTED', 'COMPLETE',
	            'AD_PERIOD_STARTED',
	            'AD_PROGRESS',
	            'FIRST_QUARTILE', 'MIDPOINT', 'THIRD_QUARTILE',
	            'CLICK',
	            'ERROR',
	        ];
	    };
	    DaiStreamManager.prototype.updateBreakSchedule = function (cues) {
	        var valid = cues && cues.length;
	        this.cuePoints = [];
	        if (valid && this.contentDuration) {
	            var c = void 0;
	            for (var i = 0, n = cues.length; i < n; i++) {
	                c = cues[i];
	                this.cuePoints.push({
	                    start: c.start,
	                    played: c.played,
	                    end: c.end
	                });
	            }
	            !this.adBreakSchedule && (this.adBreakSchedule = new AdBreakSchedule_1.AdBreakSchedule(null, cues, this.contentDuration));
	        }
	        valid && this.adBreakSchedule && this.adBreakSchedule.updateBreaks(cues);
	    };
	    DaiStreamManager.prototype.initialize = function () {
	        this.listenToStreamManager(true);
	    };
	    DaiStreamManager.event = {
	        MEDIA_URL_AVAILABLE: 'mediaUrlAvailable',
	        STREAM_ID_AVAILABLE: 'streamIdAvailable',
	        AD_PERIOD_STARTED: 'adPeriodStarted',
	        AD_CUEPOINTS_AVAILABLE: 'adCuepointsAvailable',
	        AD_BREAK_START: 'adBreakStarted',
	        AD_BREAK_METADATA: 'adBreakMetadata',
	        AD_BREAK_COMPLETE: 'adBreakEnded',
	        AD_ERROR: 'adError',
	        AD_START: 'adStarted',
	        AD_COMPLETE: 'adComplete',
	        AD_PROGRESS: 'adProgress',
	        AD_CLICK: 'adClick',
	        AD_FIRST_QUARTILE: 'firstQuartile',
	        AD_MIDPOINT: 'midpoint',
	        AD_THIRD_QUARTILE: 'thirdQuartile',
	        RAW_AD_SCHEDULE_AVAILABLE: 'rawAdScheduleAvailable',
	    };
	    return DaiStreamManager;
	}(Emitter_1.Emitter));
	exports.DaiStreamManager = DaiStreamManager;

	});

	var gam_static_params = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.gam_static_params = void 0;
	exports.gam_static_params = {
	    cmsid: 2289,
	    output: 'xml_vmap1',
	    unviewed_position_start: 1,
	    correlator: '1',
	    gdfp_req: 1,
	    env: 'vp'
	};

	});

	var AdParamAssembler_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.AdParamAssembler = void 0;



	var AdParamAssembler = (function () {
	    function AdParamAssembler() {
	    }
	    AdParamAssembler.prototype.assembleStdParams = function (rc, info) {
	        var constParams = gam_static_params.gam_static_params, stdp = rc.ad.adTagParameters, trkp = rc.ad.viewabilityTracking, out = {};
	        var q;
	        for (q in constParams) {
	            out[q] = stdp[q] || constParams[q];
	        }
	        for (q in stdp) {
	            if (q !== 'cust_params' && !Util_1.Util.isEmpty(stdp[q])) {
	                out[q] = stdp[q];
	            }
	        }
	        for (q in trkp) {
	            out[q] = trkp[q];
	        }
	        if (out.sz === AdParamAssembler.SZ_DEFAULT) {
	            var szStr = this.getSzStringForPlayback(info.mutedPlayback);
	            szStr && (out.sz = szStr);
	        }
	        return out;
	    };
	    AdParamAssembler.prototype.getSzStringForPlayback = function (muted) {
	        return muted ? AdParamAssembler.SZ_MUTED : null;
	    };
	    AdParamAssembler.prototype.substituteStringForMutedPlayback = function (str) {
	        var szStr = this.getSzStringForPlayback(true);
	        if (szStr) {
	            var re = new RegExp("sz=" + AdParamAssembler.SZ_DEFAULT, 'g');
	            return str.replace(re, "sz=" + szStr);
	        }
	        return str;
	    };
	    AdParamAssembler.prototype.queryStrFromObj = function (obj, encode) {
	        return QueryString_1.QueryString.encode(obj);
	    };
	    AdParamAssembler.prototype.objFromQueryStr = function (str) {
	        return QueryString_1.QueryString.decode(str);
	    };
	    AdParamAssembler.SZ_DEFAULT = '640x480';
	    AdParamAssembler.SZ_MUTED = '640x483';
	    return AdParamAssembler;
	}());
	exports.AdParamAssembler = AdParamAssembler;

	});

	var DaiStreamRequestAssembler_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.DaiStreamRequestAssembler = void 0;



	var DaiStreamRequestAssembler = (function (_super) {
	    tslib_es6.__extends(DaiStreamRequestAssembler, _super);
	    function DaiStreamRequestAssembler() {
	        return _super.call(this) || this;
	    }
	    DaiStreamRequestAssembler.prototype.assembleStreamRequest = function (r, info, skipEncode) {
	        if (skipEncode === void 0) { skipEncode = false; }
	        var stdParamsObj = this.assembleStdParams(r, info), daiParams = r.ad.dai;
	        if (daiParams.filterOutPremiumAudioCodecs) {
	            stdParamsObj['dai-excl'] = DaiStreamRequestAssembler.FILTER_OUT_PREMIUM_AUDIO;
	        }
	        var atp = Util_1.Util.assign({}, stdParamsObj);
	        atp.cust_params = this.queryStrFromObj(r.ad.adTagParameters.cust_params, skipEncode ? [] : []);
	        delete atp.output;
	        var obj = {
	            apiKey: daiParams.apiKey,
	            assetKey: daiParams.assetKey || null,
	            streamActivityMonitorId: daiParams.streamActivityMonitorId || null,
	            adTagParameters: atp,
	            videoId: daiParams.daiVideoId || null,
	            contentSourceId: daiParams.contentSourceId || null
	        };
	        Util_1.Util.isString(daiParams.format) && (obj.format = daiParams.format);
	        return obj;
	    };
	    DaiStreamRequestAssembler.FILTER_OUT_PREMIUM_AUDIO = 'codec:ac-3,codec:ec-3';
	    return DaiStreamRequestAssembler;
	}(AdParamAssembler_1.AdParamAssembler));
	exports.DaiStreamRequestAssembler = DaiStreamRequestAssembler;

	});

	var AdDataProxy_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.AdDataProxy = void 0;




	var AdDataProxy = (function (_super) {
	    tslib_es6.__extends(AdDataProxy, _super);
	    function AdDataProxy(name, data) {
	        return _super.call(this, name, data) || this;
	    }
	    AdDataProxy.prototype.onRegister = function () {
	        var mcp = this.facade.retrieveProxy(ProxyName_1.ProxyName.ModelCollectionProxy);
	        this.breakModel = mcp.getModel(ModelName_1.ModelName.AdBreakInfo);
	        this.adItemModel = mcp.getModel(ModelName_1.ModelName.AdItem);
	    };
	    AdDataProxy.prototype.onRemove = function () {
	        this.breakModel = null;
	        this.adItemModel = null;
	        _super.prototype.onRemove.call(this);
	    };
	    AdDataProxy.prototype.resetAll = function () {
	        this.breakModel.reset();
	        this.resetAd();
	    };
	    AdDataProxy.prototype.resetAd = function () {
	        this.adItemModel.reset();
	    };
	    Object.defineProperty(AdDataProxy.prototype, "breakInfo", {
	        get: function () {
	            var m = this.breakModel;
	            return (m.data);
	        },
	        set: function (bi) {
	            var m = this.breakModel.model;
	            for (var q in m) {
	                if (Object.prototype.hasOwnProperty.call(bi, q)) {
	                    m[q] = bi[q];
	                }
	            }
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(AdDataProxy.prototype, "adInfo", {
	        get: function () {
	            var m = this.adItemModel;
	            return (m.data);
	        },
	        set: function (ai) {
	            var m = this.adItemModel.model;
	            for (var q in m) {
	                if (Object.prototype.hasOwnProperty.call(ai, q)) {
	                    m[q] = ai[q];
	                }
	            }
	        },
	        enumerable: false,
	        configurable: true
	    });
	    return AdDataProxy;
	}(_Proxy.Proxy));
	exports.AdDataProxy = AdDataProxy;

	});

	var DaiPresentationMediator_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.DaiPresentationMediator = void 0;














	var DaiPresentationMediator = (function (_super) {
	    tslib_es6.__extends(DaiPresentationMediator, _super);
	    function DaiPresentationMediator(name, viewControl) {
	        var _this = _super.call(this, name, viewControl) || this;
	        _this.contentSegmentStarted = false;
	        _this.contentStartReleased = false;
	        _this.pendingSeekTime = null;
	        _this.contentCompleteReleased = false;
	        _this.presoComplete = false;
	        _this.rawAdSchedule = null;
	        return _this;
	    }
	    DaiPresentationMediator.prototype.onRemove = function () {
	        this.listenToStreamManager(false);
	        this.adService && this.adService.reset();
	        this.streamManager.destroy();
	        this.streamManager = null;
	        this.adDataProxy = null;
	        _super.prototype.onRemove.call(this);
	    };
	    DaiPresentationMediator.prototype.closeAds = function () {
	        this.listenToStreamManager(false);
	        this.adService && this.adService.reset();
	    };
	    DaiPresentationMediator.prototype.start = function () {
	        var pm = this.presoModel;
	        this.uiMediator && this.uiMediator.setMuteState(pm.isMuted);
	        this.adService.setMuted(pm.isMuteAtPlayStart && !pm.userHasUnmuted);
	        this.presoModel.usesSsai = true;
	        this.initStreamManager();
	    };
	    DaiPresentationMediator.prototype.getAdBreakTimes = function () {
	        return this.streamManager ? this.streamManager.getCuePointsInContentTime() : null;
	    };
	    DaiPresentationMediator.prototype.initStreamManager = function () {
	        var _this = this;
	        var streamRequest = this.assembleStreamRequest(), pOpts = this.getModel(ModelName_1.ModelName.PlayerOptions), isLive = !Util_1.Util.isEmpty(streamRequest.assetKey);
	        this.streamManager = new DaiStreamManager_1.DaiStreamManager(this.adService);
	        this.streamEventHandler = function (e) { _this.hStreamEvent(e); };
	        this.listenToStreamManager(true);
	        if (isLive) {
	            this.streamManager.requestLiveStream(streamRequest, pOpts.networkErrorRecovery);
	        }
	        else {
	            this.streamManager.requestVODStream(streamRequest, pOpts.networkErrorRecovery);
	        }
	    };
	    DaiPresentationMediator.prototype.assembleStreamRequest = function () {
	        var resource = this.facade.retrieveProxy(ProxyName_1.ProxyName.ResourceProxy).resource, context = {
	            buildEnv: this.getModel(ModelName_1.ModelName.BuildInfo).env,
	            platform: this.adService.getGamPlatformString(),
	            mutedPlayback: this.presoModel.isMuteAtPlayStart && !this.presoModel.userHasUnmuted
	        };
	        var assembler = new DaiStreamRequestAssembler_1.DaiStreamRequestAssembler();
	        return assembler.assembleStreamRequest(resource, context);
	    };
	    DaiPresentationMediator.prototype.mute = function (flag) {
	        this.muteVideo(flag);
	        this.uiMediator && this.uiMediator.setMuteState(flag);
	        this.adService.setMuted(flag);
	    };
	    DaiPresentationMediator.prototype.seek = function (position) {
	        if (this.isAdPlaying()) {
	            return;
	        }
	        var t = this.streamManager.getPermittedSeekTime(position), t2 = t === position ? this.streamManager.streamTimeForContentTime(t) : t;
	        if (t !== position) {
	            this.notify(NotificationName_1.NotificationName.SEEK_REDIRECT_START, {
	                requestedSeekTime: position,
	                actualSeekTime: t
	            });
	            this.pendingSeekTime = this.streamManager.streamTimeForContentTime(position);
	        }
	        this.seekVideo(t2);
	    };
	    DaiPresentationMediator.prototype.respondToId3Data = function (d) {
	        var msg = !Util_1.Util.isEmpty(d.info) ? d.info : (!Util_1.Util.isEmpty(d.data) ? d.data : null);
	        if (msg && (d.id === 'google_dai' || d.id == DashEmsg_1.DashEmsg.GOOGLE_DAI)) {
	            this.log(LogLevel_1.LogLevel.INFO, "metadata received - id: " + d.id + " msg " + msg);
	            this.streamManager.onTimedMetadata({ TXXX: msg });
	        }
	        else {
	            _super.prototype.respondToId3Data.call(this, d);
	        }
	    };
	    DaiPresentationMediator.prototype.respondToVideoPlaying = function () {
	        if (!this.presoModel.started) {
	            this.presoModel.started = true;
	            if (this.uiMediator) {
	                this.uiMediator && this.uiMediator.displayPoster(false);
	                this.uiMediator && this.uiMediator.hideClickCatcher(true);
	                this.presoModel.isMuteAtPlayStart && !this.presoModel.userHasUnmuted && this.uiMediator.showUnmutePrompt();
	                this.setTransportType();
	            }
	            this.notify(NotificationName_1.NotificationName.ENABLE_UI);
	        }
	        _super.prototype.respondToVideoPlaying.call(this);
	        if (this.isAdPlaying()) {
	            this.notify(NotificationName_1.NotificationName.AD_PLAYING);
	        }
	        else if (this.contentSegmentStarted) {
	            this.contentPlaybackStateProxy.model.state = PlaybackState_1.PlaybackState.PLAYING;
	            this.setPlayingState();
	            this.notify(NotificationName_1.NotificationName.CONTENT_PLAYING);
	        }
	    };
	    DaiPresentationMediator.prototype.respondToVideoPaused = function () {
	        _super.prototype.respondToVideoPaused.call(this);
	        if (this.isAdPlaying()) {
	            this.notify(NotificationName_1.NotificationName.AD_PAUSED);
	        }
	        else {
	            this.contentPlaybackStateProxy.model.state = PlaybackState_1.PlaybackState.PAUSED;
	            this.setPausedState();
	            this.notify(NotificationName_1.NotificationName.CONTENT_PAUSED);
	        }
	    };
	    DaiPresentationMediator.prototype.respondToVideoTimeUpdate = function (streamTime) {
	        var cps = this.contentPlaybackStateProxy.model;
	        this.adService.setCurrentTime(streamTime);
	        this.streamManager.ignoreAdEvents(false);
	        this.presoModel.streamTime = streamTime;
	        cps.time = this.streamManager.contentTimeForStreamTime(streamTime);
	        var willSkipBreak = this.streamManager.checkForAdPeriod(streamTime);
	        if (this.isAdPlaying() || willSkipBreak) {
	            return;
	        }
	        if (streamTime > 0.75 && !this.contentSegmentStarted) {
	            this.contentSegmentStarted = true;
	            this.contentPlaybackStateProxy.model.started = true;
	            this.domProxy && this.domProxy.showAdContainer(false);
	            this.setPlayingState();
	            this.setTransportType();
	            !this.contentStartReleased && this.signalContentStart();
	            if (this.fullscreenRestrictedDuringAdPlay && this.uiMediator) {
	                this.uiMediator.setFullScreenAccessRestricted(false);
	                this.uiMediator.enableFullscreen();
	            }
	            this.notify(NotificationName_1.NotificationName.CONTENT_SEGMENT_START);
	        }
	        if (this.contentSegmentStarted) {
	            _super.prototype.respondToVideoTimeUpdate.call(this, streamTime);
	        }
	        if (cps.streamType !== StreamType_1.StreamType.LIVE && (cps.time >= cps.duration) && !this.contentCompleteReleased) {
	            this.signalContentComplete();
	        }
	    };
	    DaiPresentationMediator.prototype.respondToVideoEnd = function () {
	        if (!this.streamManager.hasPostRoll() && !this.contentCompleteReleased) {
	            this.signalContentComplete();
	        }
	        this.presoComplete = true;
	        _super.prototype.respondToVideoEnd.call(this);
	    };
	    DaiPresentationMediator.prototype.respondToDurationChange = function (duration) {
	        var cd = this.streamManager.contentTimeForStreamTime(duration);
	        this.contentPlaybackStateProxy.model.duration = cd;
	        this.presoModel.streamDuration = duration;
	        this.adService.setDuration(duration);
	        if (!this.contentDurationReleased && cd && !isNaN(cd) && cd > 0) {
	            this.releaseContentDuration(cd);
	        }
	        this.streamManager.streamDuration = duration;
	    };
	    DaiPresentationMediator.prototype.isContentComplete = function () {
	        return this.presoComplete;
	    };
	    DaiPresentationMediator.prototype.signalContentStart = function () {
	        this.contentStartReleased = true;
	        this.notify(NotificationName_1.NotificationName.CONTENT_START);
	    };
	    DaiPresentationMediator.prototype.signalContentComplete = function () {
	        this.contentCompleteReleased = true;
	        this.notify(NotificationName_1.NotificationName.CONTENT_SEGMENT_END);
	        this.notify(NotificationName_1.NotificationName.CONTENT_COMPLETE);
	    };
	    Object.defineProperty(DaiPresentationMediator.prototype, "adService", {
	        get: function () {
	            return this.facade.retrieveService(ServiceName_1.ServiceName.DaiAd);
	        },
	        enumerable: false,
	        configurable: true
	    });
	    DaiPresentationMediator.prototype.handleMediaUrlAvailable = function (url) {
	        var suppliedContentStartTime = this.resourceProxy.playback.startTime, showPreRoll = this.resourceProxy.ad.showPrerollOnNonZeroStart, nonZeroStart = !isNaN(suppliedContentStartTime) && suppliedContentStartTime > 0;
	        if (nonZeroStart) {
	            var times = this.rawAdSchedule.map(function (o) { return o.streamTimeStart; }), actualContentStartTime = this.adjustStartTimeForAdBreakProximity(suppliedContentStartTime, this.rawAdSchedule), streamStartTime = this.streamManager.streamTimeForContentTime(actualContentStartTime);
	            this.checkForBreaksToUnlock(times);
	            if (showPreRoll) {
	                this.resourceProxy.playback.startTime = NaN;
	                this.pendingSeekTime = streamStartTime;
	            }
	            else {
	                var isDash = this.resourceProxy.ad.dai.format == 'dash';
	                if (isDash) {
	                    this.streamManager.ignoreAdEvents(true);
	                }
	                this.resourceProxy.playback.startTime = streamStartTime;
	            }
	        }
	        this.resourceProxy.location.mediaUrl = url;
	        this.adService.initViewabilityTracking();
	        if (this.isClickToPlay) {
	            this.setForClickToPlay();
	        }
	        else {
	            this.notify(NotificationName_1.NotificationName.VIDEO_LOAD_START);
	            this.prepareForPlayback();
	        }
	    };
	    DaiPresentationMediator.prototype.checkForBreaksToUnlock = function (brkTimes) {
	        if (!brkTimes || !brkTimes.length) {
	            return;
	        }
	        var t = this.resourceProxy.playback.startTime, pre = this.resourceProxy.ad.showPrerollOnNonZeroStart, st = this.streamManager.streamTimeForContentTime(t), out = [];
	        if (st > 0) {
	            if (pre !== true)
	                out.push(0);
	            var i = brkTimes.length;
	            while (i--) {
	                if (i > 0 && st > brkTimes[i]) {
	                    out.push(brkTimes[i]);
	                    break;
	                }
	            }
	            this.streamManager && this.streamManager.setUnlockedBreaks(out);
	        }
	    };
	    DaiPresentationMediator.prototype.hStreamEvent = function (e) {
	        var dse = DaiStreamManager_1.DaiStreamManager.event, t = e.type;
	        switch (t) {
	            case dse.RAW_AD_SCHEDULE_AVAILABLE:
	                this.rawAdSchedule = e.data.schedule;
	                break;
	            case dse.STREAM_ID_AVAILABLE:
	                this.presoModel.streamId = this.streamManager.streamId;
	                break;
	            case dse.MEDIA_URL_AVAILABLE:
	                this.handleMediaUrlAvailable(e.data.mediaUrl);
	                break;
	            case dse.AD_CUEPOINTS_AVAILABLE:
	                this.notify(NotificationName_1.NotificationName.AD_CUEPOINTS_AVAILABLE, e.data);
	                break;
	            case dse.AD_PERIOD_STARTED:
	                this.seekVideo(e.data.streamResumeTime);
	                break;
	            case dse.AD_BREAK_START:
	                if (this.contentSegmentStarted) {
	                    this.contentSegmentStarted = false;
	                    this.notify(NotificationName_1.NotificationName.CONTENT_SEGMENT_END);
	                }
	                this.domProxy && this.domProxy.showAdContainer(true);
	                this.presoModel.isCurrentVideoAd = true;
	                this.uiMediator && this.uiMediator.hideClickCatcher(true);
	                this.notify(NotificationName_1.NotificationName.AD_BREAK_START);
	                break;
	            case dse.AD_BREAK_METADATA:
	                var bi = e.data;
	                this.adDataProxy.breakInfo = bi;
	                this.notify(NotificationName_1.NotificationName.AD_BREAK_METADATA, { adBreakInfo: bi });
	                break;
	            case dse.AD_START:
	                var adData = e.data;
	                this.adDataProxy.adInfo = adData;
	                this.notify(NotificationName_1.NotificationName.AD_START, { adInfo: adData });
	                break;
	            case dse.AD_PROGRESS:
	                this.notify(NotificationName_1.NotificationName.AD_TIME_UPDATE, {
	                    currentTime: e.data.currentTime,
	                    duration: e.data.duration,
	                    streamTime: this.presoModel.streamTime,
	                    streamDuration: this.presoModel.streamDuration
	                });
	                break;
	            case dse.AD_FIRST_QUARTILE:
	                this.notify(NotificationName_1.NotificationName.AD_FIRST_QUARTILE);
	                break;
	            case dse.AD_MIDPOINT:
	                this.notify(NotificationName_1.NotificationName.AD_MIDPOINT);
	                break;
	            case dse.AD_THIRD_QUARTILE:
	                this.notify(NotificationName_1.NotificationName.AD_THIRD_QUARTILE);
	                break;
	            case dse.AD_COMPLETE:
	                this.notify(NotificationName_1.NotificationName.AD_COMPLETE);
	                break;
	            case dse.AD_BREAK_COMPLETE:
	                this.domProxy && this.domProxy.showAdContainer(false);
	                this.presoModel.isCurrentVideoAd = false;
	                this.notify(NotificationName_1.NotificationName.AD_BREAK_COMPLETE);
	                if (this.pendingSeekTime) {
	                    this.contentPlaybackStateProxy.model.started && this.notify(NotificationName_1.NotificationName.SEEK_REDIRECT_COMPLETE);
	                    this.seekVideo(this.pendingSeekTime);
	                    this.pendingSeekTime = null;
	                }
	                break;
	            case dse.AD_CLICK:
	                this.pause();
	                break;
	            case dse.AD_ERROR:
	                e.data.fatal = true;
	                this.notify(NotificationName_1.NotificationName.RESOURCE_ERROR, e.data);
	                break;
	        }
	    };
	    DaiPresentationMediator.prototype.listenToStreamManager = function (flag) {
	        if (!this.streamManager) {
	            return;
	        }
	        var dse = DaiStreamManager_1.DaiStreamManager.event, m = flag ? 'on' : 'off';
	        for (var q in dse) {
	            this.streamManager[m](dse[q], this.streamEventHandler);
	        }
	    };
	    DaiPresentationMediator.prototype.onRegister = function () {
	        _super.prototype.onRegister.call(this);
	        this.domProxy && this.domProxy.showAdContainer(false);
	        this.adDataProxy = new AdDataProxy_1.AdDataProxy(ProxyName_1.ProxyName.AdDataProxy, null);
	        this.facade.registerProxy(this.adDataProxy);
	    };
	    return DaiPresentationMediator;
	}(CommonPresentationMediator_1.CommonPresentationMediator));
	exports.DaiPresentationMediator = DaiPresentationMediator;

	});

	var Env_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Env = void 0;
	var Env;
	(function (Env) {
	    Env["DEV"] = "dev";
	    Env["STAGE"] = "stage";
	    Env["PROD"] = "prod";
	})(Env = exports.Env || (exports.Env = {}));

	});

	var ImaAdCallAssembler_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ImaAdCallAssembler = void 0;




	var ImaAdCallAssembler = (function (_super) {
	    tslib_es6.__extends(ImaAdCallAssembler, _super);
	    function ImaAdCallAssembler() {
	        return _super.call(this) || this;
	    }
	    ImaAdCallAssembler.prototype.assembleAdCall = function (rc, contextInfo) {
	        var baseUrl = ImaAdCallAssembler.adCallTemplate, stdParamsObj = this.assembleStdParams(rc, contextInfo), obj = Util_1.Util.assign({}, stdParamsObj);
	        var custParamsStr = this.queryStrFromObj(rc.ad.adTagParameters.cust_params);
	        obj.cust_params = custParamsStr;
	        (contextInfo.buildEnv === Env_1.Env.DEV) && (obj.pp = 'vpaid_js');
	        var qs = this.queryStrFromObj(obj, [
	            "description_url", "url", 'iu', "partner", "cust_params"
	        ]);
	        return baseUrl + qs;
	    };
	    ImaAdCallAssembler.adCallTemplate = 'http://pubads.g.doubleclick.net/gampad/ads?';
	    return ImaAdCallAssembler;
	}(AdParamAssembler_1.AdParamAssembler));
	exports.ImaAdCallAssembler = ImaAdCallAssembler;

	});

	var ImaAdPlayer_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ImaAdPlayer = void 0;








	var ImaAdPlayer = (function (_super) {
	    tslib_es6.__extends(ImaAdPlayer, _super);
	    function ImaAdPlayer(options) {
	        var _this = _super.call(this, options) || this;
	        _this.pIsFullscreen = false;
	        _this.inProgressAd = null;
	        _this.inProgressBreakId = null;
	        _this.isPaused = false;
	        _this.breakStartReleased = false;
	        _this.pendingSeekedBreakId = null;
	        _this.markedAsPlayed = null;
	        _this.adProgressData = {
	            lastRecordedTime: 0,
	            addTzero: null,
	            pollTzero: null,
	            timeoutHandle: null,
	            stallThreshold: 5,
	            adId: null,
	            duration: null,
	            pollInterval: 2000,
	        };
	        _this.adCallUrl = options.adCallUrl;
	        _this.presentationContainer = _this.opts.presentationContainer;
	        _this.adService = options.adService;
	        _this.sdk = _this.adService.sdk;
	        _this.adsLoader = _this.adService.adsLoader;
	        delete _this.opts.presentationContainer;
	        _this.adsLoaderEventMap = {};
	        var iae = ImaAdsLoader_1.ImaAdsLoader.event;
	        _this.adsLoaderEventMap[iae.ADS_LOADER_ERROR] = function (e) { return _this.hAdsLoaderError(e); };
	        _this.adsLoaderEventMap[iae.ADS_MANAGER_LOADED] = function (e) { return _this.hAdsMgrLoaded(e); };
	        _this.adEventHandler = function (e) { return _this.hAdEvent(e); };
	        _this.errorEventHandler = function (e) { return _this.hAdsManagerAdError(e); };
	        _this.initialize();
	        return _this;
	    }
	    ImaAdPlayer.prototype.destroy = function () {
	        this.listenToAdsLoader(false);
	        this.listenToAdsManager(false);
	        this.adsManager && this.adsManager.destroy();
	        this.adBreakSchedule && this.adBreakSchedule.destroy();
	        this.presentationContainer = null;
	        this.adsManager = null;
	        this.sdk = null;
	        this.adsLoader = null;
	        this.adEventHandler = null;
	        this.adBreakSchedule = null;
	        this.renderingSettings = null;
	        _super.prototype.destroy.call(this);
	    };
	    Object.defineProperty(ImaAdPlayer.prototype, "adBreaks", {
	        get: function () {
	            return this.adBreakSchedule ? this.adBreakSchedule.adBreaks : null;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(ImaAdPlayer.prototype, "contentBitrate", {
	        set: function (br) {
	            if (this.renderingSettings && this.adsManager) {
	                this.renderingSettings.bitrate = br;
	                this.adsManager.updateAdsRenderingSettings(this.renderingSettings);
	            }
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(ImaAdPlayer.prototype, "volume", {
	        set: function (value) {
	            this.adsManager && this.adsManager.setVolume(Util_1.Util.clampValue(value, 0, 1));
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(ImaAdPlayer.prototype, "isFullscreen", {
	        set: function (value) {
	            this.pIsFullscreen = value;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    ImaAdPlayer.prototype.pauseAd = function () {
	        var _a;
	        clearTimeout(this.adProgressData.timeoutHandle);
	        this.isPaused = true;
	        (_a = this.adsManager) === null || _a === void 0 ? void 0 : _a.pause();
	    };
	    ImaAdPlayer.prototype.resumeAd = function () {
	        var _a;
	        clearTimeout(this.adProgressData.timeoutHandle);
	        this.isPaused = false;
	        (_a = this.adsManager) === null || _a === void 0 ? void 0 : _a.resume();
	    };
	    ImaAdPlayer.prototype.mute = function () {
	        this.volume = 0;
	    };
	    ImaAdPlayer.prototype.unmute = function (volume) {
	        this.volume = volume;
	    };
	    ImaAdPlayer.prototype.hasPostRoll = function () {
	        return this.adBreakSchedule.hasPostRoll();
	    };
	    ImaAdPlayer.prototype.hasMidRolls = function () {
	        return this.adBreakSchedule.hasMidRolls();
	    };
	    ImaAdPlayer.prototype.startAds = function () {
	        var rect = this.getRect(), view = this.pIsFullscreen ? this.sdk.ViewMode.FULLSCREEN : this.sdk.ViewMode.NORMAL;
	        try {
	            this.adsManager.init(rect.width, rect.height, view);
	            this.adsManager.start();
	        }
	        catch (adError) {
	            this.emit(ImaAdPlayer.event.AD_INIT_ERROR, {
	                code: ErrorCode_1.ErrorCode.IMA_INIT_FAILURE,
	                message: adError.getMessage ? adError.getMessage() : AppResources_1.AppResources.messages.UNSPECIFIED_ERROR
	            });
	        }
	    };
	    ImaAdPlayer.prototype.markAsPlayed = function (ids) {
	        if (!this.markedAsPlayed) {
	            this.markedAsPlayed = ids;
	        }
	        else {
	            this.markedAsPlayed = this.markedAsPlayed.concat(ids);
	        }
	    };
	    ImaAdPlayer.prototype.getBreakForSeekTime = function (requestedSeekTime) {
	        if (this.adBreakSchedule && this.adBreakSchedule.hasMidRolls()) {
	            var b = this.adBreakSchedule.getBreakForContentSeekTime(requestedSeekTime);
	            if (b && (!this.markedAsPlayed || this.markedAsPlayed.indexOf(b.breakId) === -1)) {
	                this.pendingSeekedBreakId = b.breakId;
	                return b;
	            }
	        }
	        return null;
	    };
	    ImaAdPlayer.prototype.cancelPendingBreak = function (id) {
	        this.pendingSeekedBreakId === id && (this.pendingSeekedBreakId = null);
	    };
	    ImaAdPlayer.prototype.isUsingContentVideoElement = function () {
	        return this.adsManager && this.adsManager.isCustomPlaybackUsed();
	    };
	    ImaAdPlayer.prototype.isUsingCustomClickTracker = function () {
	        return !!(this.adsManager && this.adsManager.isCustomClickTrackingUsed());
	    };
	    ImaAdPlayer.prototype.setContentComplete = function () {
	        this.adsLoader && this.adsLoader.contentComplete();
	    };
	    ImaAdPlayer.prototype.updateSize = function (isFullscreen) {
	        var r = this.getRect();
	        if (this.adsManager) {
	            var vm = isFullscreen ? this.sdk.ViewMode.FULLSCREEN : this.sdk.ViewMode.NORMAL;
	            this.adsManager.resize(r.width, r.height, vm);
	        }
	    };
	    ImaAdPlayer.prototype.hAdsManagerAdError = function (e) {
	        var err = this.adService.parseAdError(e);
	        this.emit(ImaAdPlayer.event.AD_ERROR, {
	            code: ErrorCode_1.ErrorCode.IMA_AD_ERROR,
	            message: (err && err.message) || AppResources_1.AppResources.messages.UNSPECIFIED_ERROR,
	            data: err
	        });
	    };
	    ImaAdPlayer.prototype.hAdEvent = function (e) {
	        var _this = this;
	        var t = this.sdk.AdEvent.Type, ad = e.getAd(), adData = e.getAdData(), myEvt = ImaAdPlayer.event;
	        clearTimeout(this.adProgressData.timeoutHandle);
	        var restartPoll = this.opts.enableStalledAdCheck !== false;
	        switch (e.type) {
	            case t.CONTENT_PAUSE_REQUESTED:
	                restartPoll = false;
	                this.pendingSeekedBreakId = null;
	                this.emit(myEvt.CONTENT_PAUSE_REQUESTED);
	                break;
	            case t.CONTENT_RESUME_REQUESTED:
	                restartPoll = false;
	                this.pendingSeekedBreakId = null;
	                this.processBreakComplete();
	                break;
	            case t.LOADED:
	                this.processAdLoadOrStart(ad, adData, t.LOADED);
	                break;
	            case t.STARTED:
	                if (this.inProgressBreakId && !this.breakStartReleased) {
	                    this.breakStartReleased = true;
	                    this.emit(ImaAdPlayer.event.AD_BREAK_START, { adBreakId: this.inProgressBreakId });
	                }
	                this.processAdLoadOrStart(ad, adData, t.STARTED);
	                this.checkForCustomClickTracking();
	                this.beginPollForProgress(this.inProgressAd);
	                break;
	            case t.AD_PROGRESS:
	                this.processProgress();
	                break;
	            case t.FIRST_QUARTILE:
	                this.processQuartile(t.FIRST_QUARTILE, myEvt.AD_FIRST_QUARTILE);
	                break;
	            case t.MIDPOINT:
	                this.processQuartile(t.MIDPOINT, myEvt.AD_MIDPOINT);
	                break;
	            case t.THIRD_QUARTILE:
	                this.processQuartile(t.THIRD_QUARTILE, myEvt.AD_THIRD_QUARTILE);
	                break;
	            case t.COMPLETE:
	                restartPoll = false;
	                this.processAdComplete(t.COMPLETE);
	                break;
	            case t.ALL_ADS_COMPLETED:
	                restartPoll = false;
	                this.processAllComplete();
	                break;
	            case t.AD_BUFFERING:
	                this.emit(myEvt.AD_BUFFERING);
	                break;
	            case t.CLICK:
	                this.adsManager.pause();
	                this.emit(myEvt.AD_CLICK, { ad: this.inProgressAd });
	                break;
	            case t.PAUSED:
	                restartPoll = false;
	                this.isPaused = true;
	                this.emit(myEvt.AD_PAUSED);
	                break;
	            case t.RESUMED:
	                this.isPaused = false;
	                this.emit(myEvt.AD_RESUMED);
	                break;
	            case t.SKIPPED:
	                restartPoll = false;
	                this.processSkip(t.SKIPPED);
	                break;
	            case t.LOG:
	                restartPoll = false;
	                this.processLogEvent(adData);
	                break;
	            case t.USER_CLOSE:
	                restartPoll = false;
	                this.killAd();
	                break;
	            case t.VOLUME_CHANGED:
	            case t.VOLUME_MUTED:
	                this.processVolumeChange(e.type);
	                break;
	        }
	        if (!this.isPaused && restartPoll) {
	            this.adProgressData.timeoutHandle = setTimeout(function () { return _this.checkAdProgress(); }, this.adProgressData.pollInterval);
	        }
	    };
	    ImaAdPlayer.prototype.checkForCustomClickTracking = function () {
	        if (this.isUsingCustomClickTracker()) {
	            this.emit(ImaAdPlayer.event.AD_CLICK_ELEMENT_VISIBILITY_REQUESTED);
	        }
	    };
	    ImaAdPlayer.prototype.beginPollForProgress = function (ad) {
	        var _this = this;
	        var apd = this.adProgressData;
	        clearTimeout(apd.timeoutHandle);
	        apd.duration = ad.adDuration;
	        apd.adId = ad.adId;
	        apd.pollTzero = Date.now();
	        apd.timeoutHandle = setTimeout(function () { return _this.checkAdProgress(); }, apd.pollInterval);
	    };
	    ImaAdPlayer.prototype.checkAdProgress = function () {
	        var _this = this;
	        var apd = this.adProgressData, currT = apd.duration - this.adsManager.getRemainingTime(), now = Date.now();
	        clearTimeout(apd.timeoutHandle);
	        if (this.isPaused) {
	            return;
	        }
	        if (apd.pollTzero === null) {
	            apd.pollTzero = Date.now();
	        }
	        if (currT > apd.lastRecordedTime) {
	            apd.lastRecordedTime = currT;
	            apd.pollTzero = now;
	            apd.timeoutHandle = setTimeout(function () { return _this.checkAdProgress(); }, apd.pollInterval);
	        }
	        else if ((now - apd.pollTzero) > apd.stallThreshold) {
	            var adInfo = this.inProgressAd ? Util_1.Util.assign({}, this.inProgressAd) : null;
	            this.emit(ImaAdPlayer.event.AD_STALLED, {
	                code: ErrorCode_1.ErrorCode.AD_STALLED,
	                message: AppResources_1.AppResources.messages.AD_STALLED,
	                data: { adInfo: adInfo }
	            });
	            this.killAd();
	            this.emit(ImaAdPlayer.event.AD_BREAK_DISCARDED);
	            this.adsManager && this.adsManager.discardAdBreak();
	            this.processBreakComplete();
	        }
	    };
	    ImaAdPlayer.prototype.processAdLoadOrStart = function (ad, adData, evt) {
	        var abi = this.adService.assembleAdBreakInfo(ad), ai = this.adService.assembleAdInfo(ad, adData), isStart = evt === this.sdk.AdEvent.Type.STARTED, idx = abi.adBreakPosition, id = idx === 0 ? 'pre_0' : idx === -1 ? 'post_0' : 'mid_' + idx;
	        if (this.markedAsPlayed && this.markedAsPlayed.indexOf(id) >= 0) {
	            this.adBreakSchedule.markPlayed(id);
	            this.adsManager.discardAdBreak();
	            return;
	        }
	        if (isStart) {
	            this.inProgressAd = ai;
	            this.adService.trackAd(ai);
	            this.adService.trackAdEvent({
	                context: AdContext_1.AdContext.IMA,
	                eventName: evt,
	                volume: this.adsManager.getVolume()
	            });
	            this.emit(ImaAdPlayer.event.AD_BREAK_METADATA, abi);
	            this.emit(ImaAdPlayer.event.AD_START, ai);
	        }
	        else {
	            if (!this.adBreakSchedule.hasPlayed(id)) {
	                this.adBreakSchedule.markPlayed(id);
	                this.inProgressBreakId = id;
	            }
	            this.emitAdLoaded(ai);
	        }
	    };
	    ImaAdPlayer.prototype.emitAdLoaded = function (adInfo) {
	        this.emit(ImaAdPlayer.event.AD_LOADED, adInfo);
	    };
	    ImaAdPlayer.prototype.processProgress = function () {
	        if (!this.inProgressAd) {
	            return;
	        }
	        var dur = this.inProgressAd.adDuration, tRem = this.adsManager && this.adsManager.getRemainingTime();
	        if (isNaN(dur) || isNaN(tRem) || tRem < 0) {
	            return;
	        }
	        this.emit(ImaAdPlayer.event.AD_PROGRESS, {
	            currentTime: Math.min(dur, Math.max(0, dur - tRem)),
	            duration: dur
	        });
	    };
	    ImaAdPlayer.prototype.processQuartile = function (imaEvent, localEvent) {
	        this.emit(localEvent, { ad: this.inProgressAd });
	        this.adService.trackAdEvent({
	            context: AdContext_1.AdContext.IMA,
	            eventName: imaEvent,
	            volume: this.adsManager.getVolume()
	        });
	    };
	    ImaAdPlayer.prototype.processAdComplete = function (imaEvt) {
	        this.adService.trackAdEvent({
	            context: AdContext_1.AdContext.IMA,
	            eventName: imaEvt,
	            volume: this.adsManager.getVolume()
	        });
	        this.killAd();
	    };
	    ImaAdPlayer.prototype.processSkip = function (imaEvt) {
	        this.emit(ImaAdPlayer.event.AD_SKIPPED, {
	            ad: this.inProgressAd
	        });
	        this.adService.trackAdEvent({
	            context: AdContext_1.AdContext.IMA,
	            eventName: imaEvt,
	            volume: this.adsManager.getVolume()
	        });
	        this.killAd();
	    };
	    ImaAdPlayer.prototype.processBreakComplete = function () {
	        if (this.inProgressAd) {
	            this.killAd();
	        }
	        if (this.inProgressBreakId) {
	            this.emit(ImaAdPlayer.event.AD_BREAK_COMPLETE, { adBreakId: this.inProgressBreakId });
	            this.inProgressBreakId = null;
	        }
	        this.breakStartReleased = false;
	        this.emit(ImaAdPlayer.event.CONTENT_RESUME_REQUESTED);
	    };
	    ImaAdPlayer.prototype.processVolumeChange = function (imaEvtType) {
	        this.adService.trackAdEvent({
	            context: AdContext_1.AdContext.IMA,
	            eventName: imaEvtType,
	            volume: this.adsManager.getVolume()
	        });
	    };
	    ImaAdPlayer.prototype.processAllComplete = function () {
	        if (this.inProgressBreakId) {
	            this.processBreakComplete();
	        }
	        this.emit(ImaAdPlayer.event.ALL_ADS_COMPLETED);
	    };
	    ImaAdPlayer.prototype.processLogEvent = function (adData) {
	        if (this.pendingSeekedBreakId) {
	            this.adBreakSchedule.markPlayed(this.pendingSeekedBreakId);
	            this.pendingSeekedBreakId = null;
	        }
	        if (adData && adData.adError) {
	            this.emit(ImaAdPlayer.event.AD_ERROR, {
	                code: ErrorCode_1.ErrorCode.IMA_AD_ERROR,
	                message: adData.adError.getMessage() || AppResources_1.AppResources.messages.UNSPECIFIED_ERROR,
	                data: {
	                    errorCode: adData.adError.getErrorCode()
	                }
	            });
	            this.emit(ImaAdPlayer.event.AD_BREAK_DISCARDED);
	            this.adsManager && this.adsManager.discardAdBreak();
	        }
	    };
	    ImaAdPlayer.prototype.killAd = function () {
	        this.adService.untrackAd();
	        this.emit(ImaAdPlayer.event.AD_COMPLETE, { ad: this.inProgressAd });
	        this.inProgressAd = null;
	        var apd = this.adProgressData;
	        clearTimeout(apd.timeoutHandle);
	        apd.pollTzero = null;
	        apd.lastRecordedTime = null;
	    };
	    ImaAdPlayer.prototype.requestAds = function () {
	        var ar = new this.sdk.AdsRequest(), r = this.getRect();
	        ar.adTagUrl = this.adCallUrl;
	        ar.linearAdSlotWidth = r.width;
	        ar.linearAdSlotHeight = r.height;
	        ar.nonLinearAdSlotWidth = r.width;
	        ar.nonLinearAdSlotHeight = r.height;
	        ar.vastLoadTimeout = 12000;
	        ar.setAdWillAutoPlay(this.opts.initialPlayState.autoplay);
	        ar.setAdWillPlayMuted(this.opts.initialPlayState.muted);
	        this.adsLoader.requestAds(ar);
	    };
	    ImaAdPlayer.prototype.hAdsMgrLoaded = function (e) {
	        var amle = e.data;
	        this.renderingSettings = this.getRenderingSettings();
	        this.adsManager = amle.getAdsManager(this.opts.playheadInterface, this.renderingSettings);
	        this.createAdBreakSchedule(this.adsManager.getCuePoints());
	        this.listenToAdsManager(true);
	        this.startAds();
	    };
	    ImaAdPlayer.prototype.getRenderingSettings = function () {
	        var rs = new this.sdk.AdsRenderingSettings(), defs = this.adService.defaultRenderingSettings;
	        rs.bitrate = defs.bitrate;
	        rs.enablePreloading = true;
	        rs.loadVideoTimeout = 8000;
	        rs.restoreCustomPlaybackStateOnAdBreakComplete = defs.restoreCustomPlaybackStateOnAdBreakComplete;
	        return rs;
	    };
	    ImaAdPlayer.prototype.createAdBreakSchedule = function (cuePoints) {
	        if (Util_1.Util.isEmpty(cuePoints)) {
	            cuePoints = [0];
	        }
	        this.adBreakSchedule = new AdBreakSchedule_1.AdBreakSchedule(cuePoints);
	        this.emit(ImaAdPlayer.event.RAW_AD_SCHEDULE_AVAILABLE, {
	            cuepoints: cuePoints
	        });
	        this.emit(ImaAdPlayer.event.AD_CUEPOINTS_AVAILABLE, {
	            cuepoints: cuePoints
	        });
	    };
	    ImaAdPlayer.prototype.hAdsLoaderError = function (e) {
	        this.emit(ImaAdPlayer.event.AD_ERROR, e.data);
	        this.emit(ImaAdPlayer.event.CONTENT_RESUME_REQUESTED);
	    };
	    ImaAdPlayer.prototype.listenToAdsManager = function (flag) {
	        if (!this.adsManager) {
	            return;
	        }
	        var m = flag ? 'addEventListener' : 'removeEventListener', evts = this.getEventInterests();
	        var evt;
	        for (var i = 0, n = evts.length; i < n; i++) {
	            evt = this.sdk.AdEvent.Type[evts[i]];
	            this.adsManager[m](evt, this.adEventHandler);
	        }
	        this.adsManager[m](this.sdk.AdErrorEvent.Type.AD_ERROR, this.errorEventHandler);
	    };
	    ImaAdPlayer.prototype.listenToAdsLoader = function (flag) {
	        var map = this.adsLoaderEventMap, e = [ImaAdsLoader_1.ImaAdsLoader.event.ADS_MANAGER_LOADED, ImaAdsLoader_1.ImaAdsLoader.event.ADS_LOADER_ERROR];
	        if (!this.adsLoader) {
	            return;
	        }
	        var i = e.length;
	        while (i--) {
	            this.adsLoader[flag ? 'on' : 'off'](e[i], map[e[i]]);
	        }
	    };
	    ImaAdPlayer.prototype.getEventInterests = function () {
	        return [
	            'CONTENT_PAUSE_REQUESTED',
	            'CONTENT_RESUME_REQUESTED',
	            'LOADED',
	            'STARTED',
	            'AD_PROGRESS',
	            'FIRST_QUARTILE',
	            'MIDPOINT',
	            'THIRD_QUARTILE',
	            'COMPLETE',
	            'ALL_ADS_COMPLETED',
	            'AD_BUFFERING',
	            'CLICK',
	            'PAUSED',
	            'RESUMED',
	            'SKIPPED',
	            'LOG',
	            'USER_CLOSE'
	        ];
	    };
	    ImaAdPlayer.prototype.getRect = function () {
	        return this.presentationContainer.getBoundingClientRect();
	    };
	    ImaAdPlayer.prototype.initialize = function () {
	        this.listenToAdsLoader(true);
	        this.requestAds();
	    };
	    ImaAdPlayer.event = {
	        CONTENT_PAUSE_REQUESTED: 'contentPauseRequested',
	        CONTENT_RESUME_REQUESTED: 'contentResumeRequested',
	        AD_CLICK_ELEMENT_VISIBILITY_REQUESTED: 'adClickElementVisibilityRequested',
	        AD_CUEPOINTS_AVAILABLE: 'adCuepointsAvailable',
	        AD_INIT_ERROR: 'adInitError',
	        AD_BREAK_START: 'adBreakStart',
	        AD_BREAK_METADATA: 'adBreakMetadata',
	        AD_LOADED: 'adLoaded',
	        AD_START: 'adStarted',
	        AD_PROGRESS: 'adProgress',
	        AD_FIRST_QUARTILE: 'adFirstQuartile',
	        AD_MIDPOINT: 'adMidpoint',
	        AD_THIRD_QUARTILE: 'adThirdQuartile',
	        AD_COMPLETE: 'adComplete',
	        ALL_ADS_COMPLETED: 'allAdsCompleted',
	        AD_BREAK_COMPLETE: 'adBreakComplete',
	        AD_BREAK_DISCARDED: 'adBreakDiscarded',
	        AD_BUFFERING: 'adBuffering',
	        AD_PAUSED: 'paused',
	        AD_RESUMED: 'resumed',
	        AD_SKIPPED: 'adSkipped',
	        AD_CLICK: 'adClick',
	        AD_ERROR: 'adError',
	        AD_VOLUME_CHANGED: 'adVolumeChanged',
	        AD_MUTED: 'adMuted',
	        AD_STALLED: 'adStalled',
	        RAW_AD_SCHEDULE_AVAILABLE: 'rawAdScheduleAvailable'
	    };
	    return ImaAdPlayer;
	}(Emitter_1.Emitter));
	exports.ImaAdPlayer = ImaAdPlayer;

	});

	var ImaPresentationMediator_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ImaPresentationMediator = void 0;











	var ImaPresentationMediator = (function (_super) {
	    tslib_es6.__extends(ImaPresentationMediator, _super);
	    function ImaPresentationMediator(name, viewControl) {
	        var _this = _super.call(this, name, viewControl) || this;
	        _this.contentSegmentStarted = false;
	        _this.pendingSeekTime = null;
	        _this.contentComplete = false;
	        _this.contentStartReleased = false;
	        _this.fatalContentErrorReceived = false;
	        _this.breaksToSkip = null;
	        _this.breakMetaDataReleased = false;
	        _this.pendingBreak = null;
	        _this.preloadContent = false;
	        return _this;
	    }
	    ImaPresentationMediator.prototype.onRemove = function () {
	        this.killAdPlayer();
	        this.adDataProxy = null;
	        _super.prototype.onRemove.call(this);
	    };
	    ImaPresentationMediator.prototype.closeAds = function () {
	        this.listenToAdPlayer(false);
	        !!this.adPlayer && this.adPlayer.destroy();
	    };
	    ImaPresentationMediator.prototype.start = function () {
	        var contentStartTime = this.resourceProxy.playback.startTime, showPreRoll = this.resourceProxy.ad.showPrerollOnNonZeroStart, nonZeroStart = !isNaN(contentStartTime) && contentStartTime > 0, mUrl = this.resourceProxy.location.mediaUrl;
	        this.hasContent = Util_1.Util.isString(mUrl) && !Util_1.Util.isEmpty(mUrl);
	        if (nonZeroStart) {
	            var cp = this.resourceProxy.ad.adTagParameters.cust_params;
	            this.breaksToSkip = cp && cp.skippod || null;
	            if (!showPreRoll && this.breaksToSkip === null) {
	                this.breaksToSkip = '1';
	            }
	        }
	        if (nonZeroStart && showPreRoll) {
	            this.resourceProxy.playback.startTime = NaN;
	            this.pendingSeekTime = contentStartTime;
	        }
	        this.mute(this.presoModel.isMuted);
	        if (this.isClickToPlay) {
	            this.setForClickToPlay();
	        }
	        else {
	            if (this.hasContent) {
	                this.notify(NotificationName_1.NotificationName.VIDEO_LOAD_START);
	                this.prepareForPlayback();
	            }
	            else {
	                this.play();
	            }
	        }
	    };
	    ImaPresentationMediator.prototype.play = function () {
	        if (!this.presoModel.started) {
	            this.adService.initializeAdsLoader();
	            this.domProxy && this.domProxy.showAdContainer(true);
	            this.createAdPlayer();
	        }
	        else {
	            this.isAdPlaying() ? this.adPlayer.resumeAd() : this.playVideo();
	        }
	    };
	    ImaPresentationMediator.prototype.pause = function () {
	        this.isAdPlaying() && this.adPlayer ? this.adPlayer.pauseAd() : this.pauseVideo();
	    };
	    ImaPresentationMediator.prototype.mute = function (flag) {
	        this.muteVideo(flag);
	        if (this.adPlayer) {
	            flag && this.adPlayer.mute();
	            !flag && (this.adPlayer.unmute(this.domProxy.getVideoVolume()));
	        }
	        this.uiMediator && this.uiMediator.setMuteState(flag);
	    };
	    ImaPresentationMediator.prototype.seek = function (position) {
	        var seekT = position;
	        if (this.adPlayer) {
	            var b = this.adPlayer.getBreakForSeekTime(position);
	            if (b) {
	                seekT = b.startTime;
	                this.pendingSeekTime = position;
	                this.pendingBreak = b;
	                this.notify(NotificationName_1.NotificationName.SEEK_REDIRECT_START, {
	                    requestedSeekTime: position,
	                    actualSeekTime: seekT
	                });
	            }
	        }
	        this.seekVideo(seekT);
	    };
	    ImaPresentationMediator.prototype.getAdBreakTimes = function () {
	        var out = [], breaks = this.adPlayer && this.adPlayer.adBreaks;
	        if (!breaks) {
	            return out;
	        }
	        if (breaks.pre) {
	            out.push({
	                start: breaks.pre.startTime,
	                duration: breaks.pre.endTime - breaks.pre.startTime,
	                played: breaks.pre.hasPlayed
	            });
	        }
	        if (breaks.mid) {
	            var i = breaks.mid.length, b = void 0;
	            while (i--) {
	                b = breaks.mid[i];
	                out.unshift({
	                    start: b.startTime,
	                    duration: b.endTime - b.startTime,
	                    played: b.hasPlayed
	                });
	            }
	        }
	        if (breaks.post) {
	            out.push({
	                start: breaks.post.startTime,
	                duration: breaks.post.endTime - breaks.post.startTime,
	                played: breaks.post.hasPlayed
	            });
	        }
	        return out;
	    };
	    ImaPresentationMediator.prototype.respondToVideoPlaying = function () {
	        this.startPreso();
	        this.uiMediator && this.setTransportType();
	        _super.prototype.respondToVideoPlaying.call(this);
	        if (this.isAdPlaying()) {
	            this.notify(NotificationName_1.NotificationName.AD_PLAYING);
	        }
	        else if (this.contentSegmentStarted) {
	            this.contentPlaybackStateProxy.model.state = PlaybackState_1.PlaybackState.PLAYING;
	            this.setPlayingState();
	            this.notify(NotificationName_1.NotificationName.CONTENT_PLAYING);
	        }
	    };
	    ImaPresentationMediator.prototype.respondToVideoPaused = function () {
	        _super.prototype.respondToVideoPaused.call(this);
	        if (this.isAdPlaying()) {
	            this.notify(NotificationName_1.NotificationName.AD_PAUSED);
	        }
	        else {
	            this.contentPlaybackStateProxy.model.state = PlaybackState_1.PlaybackState.PAUSED;
	            this.setPausedState();
	            this.notify(NotificationName_1.NotificationName.CONTENT_PAUSED);
	        }
	    };
	    ImaPresentationMediator.prototype.respondToVideoTimeUpdate = function (streamTime) {
	        var cps = this.contentPlaybackStateProxy.model, isAd = this.isAdPlaying();
	        this.setAdPlayerBitrate();
	        if (isAd) {
	            return;
	        }
	        this.presoModel.streamTime = streamTime;
	        cps.time = streamTime;
	        if (this.pendingBreak && (streamTime - this.pendingBreak.startTime) > 1) {
	            if (this.adPlayer) {
	                this.adPlayer.cancelPendingBreak(this.pendingBreak.breakId);
	                this.adPlayer.markAsPlayed([this.pendingBreak.breakId]);
	            }
	            this.pendingBreak = null;
	            this.notify(NotificationName_1.NotificationName.SEEK_REDIRECT_COMPLETE);
	            this.pendingSeekTime && this.seek(this.pendingSeekTime);
	            return;
	        }
	        if (streamTime > 0.75 && !this.contentSegmentStarted) {
	            this.startContentSegment();
	        }
	        if (this.contentSegmentStarted) {
	            _super.prototype.respondToVideoTimeUpdate.call(this, streamTime);
	        }
	    };
	    ImaPresentationMediator.prototype.respondToVideoEnd = function () {
	        this.notify(NotificationName_1.NotificationName.CONTENT_SEGMENT_END);
	        this.notify(NotificationName_1.NotificationName.CONTENT_COMPLETE);
	        this.contentComplete = true;
	        var adp = !!this.adPlayer;
	        if (!adp || (adp && !this.adPlayer.hasPostRoll())) {
	            _super.prototype.respondToVideoEnd.call(this);
	        }
	    };
	    ImaPresentationMediator.prototype.respondToDurationChange = function (duration) {
	        this.contentPlaybackStateProxy.model.duration = duration;
	        this.presoModel.streamDuration = duration;
	        if (!isNaN(duration) && duration > 0) {
	            !this.contentDurationReleased && this.releaseContentDuration(duration);
	            if (this.pendingCuepoints) {
	                var temp = this.pendingCuepoints;
	                this.pendingCuepoints = null;
	                this.notify(NotificationName_1.NotificationName.AD_CUEPOINTS_AVAILABLE, {
	                    cuepoints: temp
	                });
	            }
	        }
	    };
	    ImaPresentationMediator.prototype.respondToBufferingStatusCheck = function () {
	        if (!this.isAdPlaying()) {
	            _super.prototype.respondToBufferingStatusCheck.call(this);
	        }
	    };
	    ImaPresentationMediator.prototype.respondToQualityChange = function (quality) {
	        if (quality === void 0) { quality = null; }
	        this.setAdPlayerBitrate();
	        _super.prototype.respondToQualityChange.call(this, quality);
	    };
	    ImaPresentationMediator.prototype.respondToSizeChange = function () {
	        this.adPlayer && this.adPlayer.updateSize(this.presoModel.isFullscreen);
	    };
	    ImaPresentationMediator.prototype.respondToError = function (data) {
	        this.fatalContentErrorReceived = data.fatal;
	        _super.prototype.respondToError.call(this, data);
	    };
	    ImaPresentationMediator.prototype.startPreso = function () {
	        if (this.presoModel.started) {
	            return;
	        }
	        this.presoModel.started = true;
	        if (this.uiMediator) {
	            this.uiMediator.displayPoster(false);
	            this.uiMediator.hideClickCatcher(true);
	            this.presoModel.isMuteAtPlayStart && !this.presoModel.userHasUnmuted && this.uiMediator.showUnmutePrompt();
	        }
	        this.notify(NotificationName_1.NotificationName.ENABLE_UI);
	    };
	    ImaPresentationMediator.prototype.startContentSegment = function () {
	        this.contentSegmentStarted = true;
	        this.contentPlaybackStateProxy.model.started = true;
	        this.domProxy && this.domProxy.showAdContainer(false);
	        this.setPlayingState();
	        if (this.uiMediator && !this.contentPlaybackStateProxy.model.liveStreamInfo) {
	            this.uiMediator.setSeekable(true);
	        }
	        if (!this.contentStartReleased) {
	            this.contentStartReleased = true;
	            this.notify(NotificationName_1.NotificationName.CONTENT_START);
	        }
	        if (this.fullscreenRestrictedDuringAdPlay && this.uiMediator) {
	            this.uiMediator.setFullScreenAccessRestricted(false);
	            this.uiMediator.enableFullscreen();
	        }
	        this.notify(NotificationName_1.NotificationName.CONTENT_SEGMENT_START);
	    };
	    ImaPresentationMediator.prototype.setAdPlayerBitrate = function () {
	        if (this.adPlayer) {
	            var pbsMdl = this.contentPlaybackStateProxy.model, br = pbsMdl.bitrate;
	            br && !isNaN(br) && (this.adPlayer.contentBitrate = br);
	        }
	    };
	    ImaPresentationMediator.prototype.hAdPlayerEvent = function (e) {
	        var iae = ImaAdPlayer_1.ImaAdPlayer.event, t = e.type;
	        switch (t) {
	            case iae.AD_CLICK_ELEMENT_VISIBILITY_REQUESTED:
	                this.domProxy.showAdClickElement(true);
	                break;
	            case iae.AD_CLICK:
	                this.notify(NotificationName_1.NotificationName.AD_CLICK, e.data);
	                break;
	            case iae.AD_SKIPPED:
	                this.notify(NotificationName_1.NotificationName.AD_SKIPPED, e.data);
	                break;
	            case iae.RAW_AD_SCHEDULE_AVAILABLE:
	                break;
	            case iae.AD_CUEPOINTS_AVAILABLE:
	                this.pendingCuepoints = e.data.cuepoints;
	                break;
	            case iae.CONTENT_PAUSE_REQUESTED:
	                this.breakMetaDataReleased = false;
	                this.respondToPauseRequestFromAdPlayer();
	                break;
	            case iae.CONTENT_RESUME_REQUESTED:
	                this.resumeContentPlay();
	                break;
	            case iae.AD_BREAK_START:
	                this.pendingBreak = null;
	                this.respondToContentEnd();
	                this.respondToAdBreakStart();
	                break;
	            case iae.AD_BREAK_METADATA:
	                this.pendingBreak = null;
	                this.respondToAdBreakMetadata(e.data);
	                break;
	            case iae.AD_LOADED:
	                this.pendingBreak = null;
	                this.respondToAdLoaded(e.data);
	                break;
	            case iae.AD_START:
	                this.pendingBreak = null;
	                this.respondToAdStart(e.data);
	                break;
	            case iae.AD_PROGRESS:
	                this.respondToAdProgress(e.data);
	                break;
	            case iae.AD_PAUSED:
	                this.notify(NotificationName_1.NotificationName.AD_PAUSED);
	                this.notify(NotificationName_1.NotificationName.RESOURCE_PAUSED);
	                break;
	            case iae.AD_RESUMED:
	                this.notify(NotificationName_1.NotificationName.AD_PLAYING);
	                this.notify(NotificationName_1.NotificationName.RESOURCE_PLAYING);
	                break;
	            case iae.AD_FIRST_QUARTILE:
	                this.notify(NotificationName_1.NotificationName.AD_FIRST_QUARTILE);
	                break;
	            case iae.AD_MIDPOINT:
	                this.notify(NotificationName_1.NotificationName.AD_MIDPOINT);
	                break;
	            case iae.AD_THIRD_QUARTILE:
	                this.notify(NotificationName_1.NotificationName.AD_THIRD_QUARTILE);
	                break;
	            case iae.AD_COMPLETE:
	                this.respondToAdComplete();
	                this.domProxy.showAdClickElement(false);
	                this.notify(NotificationName_1.NotificationName.AD_COMPLETE);
	                break;
	            case iae.AD_BREAK_COMPLETE:
	                this.breakMetaDataReleased = false;
	                this.respondToAdBreakComplete();
	                break;
	            case iae.ALL_ADS_COMPLETED:
	                this.breakMetaDataReleased = false;
	                this.killAdPlayer();
	                break;
	            case iae.AD_BREAK_DISCARDED:
	                this.breakMetaDataReleased = false;
	                this.domProxy.showAdClickElement(false);
	                this.notify(NotificationName_1.NotificationName.AD_BREAK_DISCARDED);
	                break;
	            case iae.AD_BUFFERING:
	                break;
	            case iae.AD_STALLED:
	                this.adDataProxy.resetAll();
	                this.notify(NotificationName_1.NotificationName.AD_STALLED, e.data);
	                break;
	            case iae.AD_ERROR:
	                this.domProxy.showAdClickElement(false);
	                this.notify(NotificationName_1.NotificationName.AD_ERROR, e.data);
	                break;
	            case iae.AD_INIT_ERROR:
	                this.killAdPlayer();
	                this.notify(NotificationName_1.NotificationName.AD_ERROR, e.data);
	                this.resumeContentPlay();
	                break;
	        }
	    };
	    ImaPresentationMediator.prototype.respondToPauseRequestFromAdPlayer = function () {
	        if (this.presoModel.started) {
	            this.pauseVideo();
	        }
	        else {
	            this.startPreso();
	        }
	    };
	    ImaPresentationMediator.prototype.resumeContentPlay = function () {
	        var _this = this;
	        this.domProxy.showAdClickElement(false);
	        if (this.fatalContentErrorReceived) {
	            this.notify(NotificationName_1.NotificationName.DISABLE_UI);
	            return;
	        }
	        if (!this.hasContent || this.contentComplete) {
	            _super.prototype.respondToVideoEnd.call(this);
	            return;
	        }
	        if (!this.contentSegmentStarted) {
	            if (!this.contentStartReleased) {
	                var contentStartTime = this.resourceProxy.playback.startTime, nonZeroStart = !isNaN(contentStartTime) && contentStartTime > 0;
	                if (nonZeroStart) {
	                    var breaks = this.getAdBreakTimes(), adjustedStart = this.adjustStartTimeForAdBreakProximity(contentStartTime, breaks);
	                    this.resourceProxy.playback.startTime = adjustedStart;
	                }
	            }
	            this.load().then(function () {
	                _this.startContentSegment();
	            });
	        }
	        if (this.pendingSeekTime) {
	            this.notify(NotificationName_1.NotificationName.SEEK_REDIRECT_COMPLETE);
	            this.seekVideo(this.pendingSeekTime);
	            this.pendingSeekTime = null;
	        }
	        this.startPreso();
	        this.play();
	    };
	    ImaPresentationMediator.prototype.respondToContentEnd = function () {
	        if (this.contentSegmentStarted) {
	            this.contentSegmentStarted = false;
	            this.notify(NotificationName_1.NotificationName.CONTENT_SEGMENT_END);
	        }
	    };
	    ImaPresentationMediator.prototype.respondToAdBreakStart = function () {
	        this.domProxy && this.domProxy.showAdContainer(true);
	        this.presoModel.isCurrentVideoAd = true;
	        if (this.uiMediator) {
	            this.uiMediator.hideClickCatcher(true);
	            this.fullscreenRestrictedDuringAdPlay && this.uiMediator.disableFullscreen();
	        }
	        this.notify(NotificationName_1.NotificationName.AD_BREAK_START);
	    };
	    ImaPresentationMediator.prototype.respondToAdBreakMetadata = function (data) {
	        if (!this.breakMetaDataReleased) {
	            this.adDataProxy.breakInfo = data;
	            this.breakMetaDataReleased = true;
	            this.notify(NotificationName_1.NotificationName.AD_BREAK_METADATA, { adBreakInfo: data });
	        }
	    };
	    ImaPresentationMediator.prototype.respondToAdStart = function (data) {
	        this.adDataProxy.adInfo = data;
	        this.notify(NotificationName_1.NotificationName.AD_START, { adInfo: data });
	        this.notify(NotificationName_1.NotificationName.RESOURCE_PLAYING);
	        this.checkPreload();
	    };
	    ImaPresentationMediator.prototype.checkPreload = function () {
	        var _this = this;
	        var preload = this.resourceProxy.ad.ima.preloadContentAtEndOfPreRoll === true;
	        var lastAd = this.adDataProxy.adInfo.adPosition === this.adDataProxy.breakInfo.adTotal;
	        if (preload && lastAd) {
	            var handler_1 = function (event) {
	                var ad = event.data;
	                var threshold = Util_1.Util.clampValue(Math.ceil(ad.duration / 4), 2, 10);
	                var time = Math.round(ad.currentTime);
	                if (time >= threshold) {
	                    _this.adPlayer.off(ImaAdPlayer_1.ImaAdPlayer.event.AD_PROGRESS, handler_1);
	                    _this.load();
	                }
	            };
	            this.adPlayer.on(ImaAdPlayer_1.ImaAdPlayer.event.AD_PROGRESS, handler_1);
	        }
	    };
	    ImaPresentationMediator.prototype.respondToAdComplete = function () {
	        this.adDataProxy.resetAd();
	    };
	    ImaPresentationMediator.prototype.respondToAdLoaded = function (data) {
	        this.adDataProxy.adInfo = data;
	    };
	    ImaPresentationMediator.prototype.respondToAdProgress = function (data) {
	        this.notify(NotificationName_1.NotificationName.AD_TIME_UPDATE, {
	            currentTime: data.currentTime,
	            duration: data.duration
	        });
	    };
	    ImaPresentationMediator.prototype.respondToAdBreakComplete = function () {
	        this.domProxy && this.domProxy.showAdContainer(false);
	        this.presoModel.isCurrentVideoAd = false;
	        this.notify(NotificationName_1.NotificationName.AD_BREAK_COMPLETE);
	    };
	    Object.defineProperty(ImaPresentationMediator.prototype, "adService", {
	        get: function () {
	            return this.facade.retrieveService(ServiceName_1.ServiceName.ImaAd);
	        },
	        enumerable: false,
	        configurable: true
	    });
	    ImaPresentationMediator.prototype.assembleAdContextInfo = function (muted) {
	        var sys = this.facade.retrieveService(ServiceName_1.ServiceName.System);
	        return {
	            buildEnv: this.getModel(ModelName_1.ModelName.BuildInfo).env,
	            platform: sys.platform,
	            mutedPlayback: muted
	        };
	    };
	    ImaPresentationMediator.prototype.listenToAdPlayer = function (flag) {
	        var _this = this;
	        if (!this.adPlayer) {
	            return;
	        }
	        var iae = ImaAdPlayer_1.ImaAdPlayer.event, m = flag ? 'on' : 'off';
	        for (var q in iae) {
	            this.adPlayer[m](iae[q], flag ? function (e) { return _this.hAdPlayerEvent(e); } : null);
	        }
	    };
	    ImaPresentationMediator.prototype.createAdPlayer = function () {
	        var resource = this.facade.retrieveProxy(ProxyName_1.ProxyName.ResourceProxy).resource, muteAtStart = this.presoModel.isMuteAtPlayStart, options = {
	            presentationContainer: this.domProxy.getMain(),
	            playheadInterface: this.domProxy.getVideo(),
	            initialPlayState: {
	                autoplay: this.presoModel.isAutoplay,
	                muted: muteAtStart
	            },
	            playAdsAfterTime: this.breaksToSkip && this.breaksToSkip.match(/^1/) !== null ? 0 : null,
	            adService: this.adService,
	            logger: this.logger,
	            ad: resource.ad,
	            adCallUrl: this.getAdCallUrl(resource, muteAtStart),
	            enableStalledAdCheck: true
	        };
	        this.adPlayer = new ImaAdPlayer_1.ImaAdPlayer(options);
	        if (this.breaksToSkip) {
	            var posArr = this.breaksToSkip.split(',').map(function (x) { return parseInt(x); }), ids = [];
	            var i = posArr.length;
	            while (i--) {
	                var v = posArr[i], vPrime = v === 1 ? 'pre_0' : 'mid_' + String(v - 1);
	                ids.push(vPrime);
	            }
	            this.adPlayer.markAsPlayed(ids);
	        }
	        this.listenToAdPlayer(true);
	    };
	    ImaPresentationMediator.prototype.getAdCallUrl = function (resource, muteAtStart) {
	        var acu = resource.ad.ima.adCallUrl, hasUrl = !Util_1.Util.isEmpty(acu), callAssembler = new ImaAdCallAssembler_1.ImaAdCallAssembler();
	        if (hasUrl) {
	            return muteAtStart ? callAssembler.substituteStringForMutedPlayback(acu) : acu;
	        }
	        var call = callAssembler.assembleAdCall(resource, this.assembleAdContextInfo(muteAtStart));
	        return call;
	    };
	    ImaPresentationMediator.prototype.killAdPlayer = function () {
	        if (this.adPlayer) {
	            this.listenToAdPlayer(false);
	            this.adPlayer.destroy();
	            this.adPlayer = null;
	        }
	    };
	    ImaPresentationMediator.prototype.onRegister = function () {
	        _super.prototype.onRegister.call(this);
	        this.domProxy && this.domProxy.showAdContainer(false);
	        this.adDataProxy = new AdDataProxy_1.AdDataProxy(ProxyName_1.ProxyName.AdDataProxy, null);
	        this.facade.registerProxy(this.adDataProxy);
	    };
	    return ImaPresentationMediator;
	}(CommonPresentationMediator_1.CommonPresentationMediator));
	exports.ImaPresentationMediator = ImaPresentationMediator;

	});

	var PrepPlaybackCommand_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.PrepPlaybackCommand = void 0;




















	var PrepPlaybackCommand = (function (_super) {
	    tslib_es6.__extends(PrepPlaybackCommand, _super);
	    function PrepPlaybackCommand() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    PrepPlaybackCommand.prototype.execute = function (notification) {
	        var _this = this;
	        var sysSvc = this.facade.retrieveService(ServiceName_1.ServiceName.System);
	        if (!sysSvc.global || !sysSvc.global.document) {
	            this.sendNotification(NotificationName_1.NotificationName.VIDEO_START_ERROR, { error: AppResources_1.AppResources.messages.ENVIRONMENT_NOT_SUPPORTED, fatal: true });
	            return;
	        }
	        var presoState = this.getModel(ModelName_1.ModelName.PresentationState), playerOpts = this.getModel(ModelName_1.ModelName.PlayerOptions), useAutoplay = this.isAutoplayRequested(playerOpts.autoplay);
	        this.facade.registerProxy(new ContentPlaybackStateProxy_1.ContentPlaybackStateProxy(ProxyName_1.ProxyName.ContentPlaybackStateProxy));
	        if (sysSvc.isWebMaf || sysSvc.isTizenSmartTv || sysSvc.isXboxOne) {
	            this.processAutoplaySupport({
	                supportsMutedAutoplay: true,
	                supportsUnmutedAutoplay: true
	            }, presoState, playerOpts);
	            this.createPresentation(sysSvc);
	        }
	        else if (!presoState.skipAutoplayCheck && useAutoplay) {
	            this.checkAutoplay().then(function (result) {
	                _this.processAutoplaySupport(result, presoState, playerOpts);
	                _this.createPresentation(sysSvc);
	            });
	        }
	        else {
	            this.createPresentation(sysSvc);
	        }
	    };
	    PrepPlaybackCommand.prototype.createPresentation = function (sysSvc) {
	        var presoMed = this.getPresoMediator(sysSvc);
	        if (!presoMed) {
	            return;
	        }
	        this.facade.registerMediator(presoMed);
	        this.sendNotification(NotificationName_1.NotificationName.START_PRESENTATION);
	    };
	    PrepPlaybackCommand.prototype.getPresoMediator = function (sysSvc) {
	        var domProxy = this.facade.retrieveProxy(ProxyName_1.ProxyName.PlayerDomProxy);
	        var video = this.getVideo(sysSvc, domProxy);
	        var resourceProxy = this.facade.retrieveProxy(ProxyName_1.ProxyName.ResourceProxy);
	        var adSets = resourceProxy.ad;
	        var adContext = (adSets && adSets.context) || null;
	        var presoMdl = this.getModel(ModelName_1.ModelName.PresentationState);
	        var n = MediatorName_1.MediatorName.PRESENTATION_MEDIATOR;
	        var ret = null, ok;
	        if (video === null) {
	            this.sendNotification(NotificationName_1.NotificationName.RESOURCE_ERROR, {
	                code: ErrorCode_1.ErrorCode.UNEXPECTED_CONDITION,
	                message: AppResources_1.AppResources.messages.VIDEO_PLAYBACK_UNAVAILABLE,
	                fatal: true,
	            });
	            return ret;
	        }
	        if (adContext !== AdContext_1.AdContext.NONE || presoMdl.isAutoplay) {
	            domProxy.setVideoAttribute('playsinline', '');
	        }
	        switch (adContext) {
	            case AdContext_1.AdContext.IMA:
	                ok = this.createImaAdService(resourceProxy);
	                if (!ok) {
	                    this.sendNotification(NotificationName_1.NotificationName.RESOURCE_ERROR, {
	                        code: ErrorCode_1.ErrorCode.IMA_SDK_MISSING,
	                        message: AppResources_1.AppResources.messages.IMA_SDK_MISSING,
	                        fatal: true,
	                    });
	                }
	                else {
	                    ret = new ImaPresentationMediator_1.ImaPresentationMediator(n, video);
	                }
	                break;
	            case AdContext_1.AdContext.DAI_SDK:
	            case AdContext_1.AdContext.DAI_API:
	                var useApi = adContext === AdContext_1.AdContext.DAI_API;
	                ok = this.createDaiAdService(domProxy, resourceProxy, useApi, sysSvc);
	                ok && (ret = new DaiPresentationMediator_1.DaiPresentationMediator(n, video));
	                !ok && this.sendNotification(NotificationName_1.NotificationName.RESOURCE_ERROR, {
	                    code: ErrorCode_1.ErrorCode.DAI_SDK_MISSING,
	                    message: AppResources_1.AppResources.messages.DAI_SDK_UNAVAILABLE,
	                    fatal: true,
	                });
	                break;
	            case AdContext_1.AdContext.DAI_SSB:
	                if (adSets.dai.ssbStreamUrl) {
	                    resourceProxy.location.mediaUrl = adSets.dai.ssbStreamUrl;
	                }
	                ret = new ContentPresentationMediator_1.ContentPresentationMediator(n, video);
	                break;
	            default:
	                ret = new ContentPresentationMediator_1.ContentPresentationMediator(n, video);
	                break;
	        }
	        return ret;
	    };
	    PrepPlaybackCommand.prototype.createDaiAdService = function (domProxy, res, useApi, sysSvc) {
	        if (this.facade.retrieveService(ServiceName_1.ServiceName.DaiAd)) {
	            return true;
	        }
	        var svc = new DaiAdService_1.DaiAdService(ServiceName_1.ServiceName.DaiAd, (useApi ? DaiProxyApi.DaiProxyApi : null));
	        this.facade.registerService(svc);
	        if (!svc.sdk) {
	            svc.destroy();
	            this.facade.removeService(ServiceName_1.ServiceName.DaiAd);
	            return false;
	        }
	        var trkSets = res.ad.viewabilityTracking;
	        domProxy && svc.setContainer(domProxy.getElement(PlayerDom_1.PlayerDom.AD_CONTAINER));
	        var videoIface = useApi ? sysSvc.createSimpleVideoInterface() : domProxy.getVideo();
	        svc.setVideoInterface(videoIface);
	        svc.setTrackingData({
	            ptype: trkSets.ptype,
	            vguid: trkSets.vguid,
	            partner: trkSets.partner
	        });
	        return true;
	    };
	    PrepPlaybackCommand.prototype.getVideoInterface = function (sysSvc, domProxy) {
	        return sysSvc.createSimpleVideoInterface();
	    };
	    PrepPlaybackCommand.prototype.getVideo = function (sysSvc, domProxy) {
	        if (sysSvc.isWebMaf) {
	            return sysSvc.webMafPlayer;
	        }
	        else if (domProxy) {
	            return domProxy.getVideo();
	        }
	        return null;
	    };
	    PrepPlaybackCommand.prototype.createImaAdService = function (res) {
	        if (this.facade.retrieveService(ServiceName_1.ServiceName.ImaAd)) {
	            return true;
	        }
	        var svc = new ImaAdService_1.ImaAdService(ServiceName_1.ServiceName.ImaAd);
	        this.facade.registerService(svc);
	        var sdk = svc.sdk;
	        if (sdk !== null) {
	            var domProxy = this.facade.retrieveProxy(ProxyName_1.ProxyName.PlayerDomProxy), adC = domProxy.getElement(PlayerDom_1.PlayerDom.AD_CONTAINER);
	            svc.setContainer(adC);
	            svc.adsLoaderOptions = {
	                adContainer: adC,
	                adClickEl: domProxy.getElement(PlayerDom_1.PlayerDom.AD_CLICK_EL),
	                video: domProxy.getVideo(),
	                sdkSettings: svc.sdkSettings,
	                adService: svc,
	            };
	            var trkSets = res.ad.viewabilityTracking;
	            svc.setTrackingData({
	                ptype: trkSets.ptype,
	                vguid: trkSets.vguid,
	                partner: trkSets.partner
	            });
	            svc.createAdsLoader();
	            return true;
	        }
	        else {
	            this.facade.removeService(ServiceName_1.ServiceName.ImaAd);
	            return false;
	        }
	    };
	    PrepPlaybackCommand.prototype.processAutoplaySupport = function (result, presoMdl, playerOpts) {
	        var apOpt = playerOpts.autoplay;
	        var mutedOk = result.supportsMutedAutoplay;
	        var unmutedOk = result.supportsUnmutedAutoplay;
	        presoMdl.autoplaySupport = {
	            supportsMutedAutoplay: mutedOk,
	            supportsUnmutedAutoplay: unmutedOk
	        };
	        presoMdl.isMuteAtPlayStart = (apOpt === Autoplay_1.Autoplay.ATTEMPT_MUTED && mutedOk ||
	            (apOpt === Autoplay_1.Autoplay.ATTEMPT_UNMUTED_THEN_MUTED && !unmutedOk && mutedOk));
	        presoMdl.isAutoplay = this.shouldAutoplay(apOpt, result);
	    };
	    PrepPlaybackCommand.prototype.isAutoplayRequested = function (opt) {
	        if (Util_1.Util.isEmpty(opt) || opt === Autoplay_1.Autoplay.NONE) {
	            return false;
	        }
	        return true;
	    };
	    PrepPlaybackCommand.prototype.shouldAutoplay = function (opt, info) {
	        if (Util_1.Util.isEmpty(opt) || opt === Autoplay_1.Autoplay.NONE) {
	            return false;
	        }
	        var mutedOk = info.supportsMutedAutoplay;
	        var unmutedOk = info.supportsUnmutedAutoplay;
	        var muteOnly = opt === Autoplay_1.Autoplay.ATTEMPT_MUTED && mutedOk;
	        var soundOnly = opt === Autoplay_1.Autoplay.ATTEMPT_UNMUTED && unmutedOk;
	        var fallback = !soundOnly && (opt === Autoplay_1.Autoplay.ATTEMPT_UNMUTED_THEN_MUTED && mutedOk);
	        return muteOnly || soundOnly || fallback;
	    };
	    PrepPlaybackCommand.prototype.checkAutoplay = function () {
	        var ads = this.getService(ServiceName_1.ServiceName.AutoplayCapabilities);
	        return ads.detectCapabilities();
	    };
	    return PrepPlaybackCommand;
	}(LogAwareSimpleCommand_1.LogAwareSimpleCommand));
	exports.PrepPlaybackCommand = PrepPlaybackCommand;

	});

	var ResourceProxy_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ResourceProxy = void 0;



	var ResourceProxy = (function (_super) {
	    tslib_es6.__extends(ResourceProxy, _super);
	    function ResourceProxy(name, data) {
	        return _super.call(this, name, data) || this;
	    }
	    ResourceProxy.prototype.mock = function (r) {
	        this.pResource = r;
	    };
	    ResourceProxy.prototype.onRemove = function () {
	        this.pResource = null;
	        _super.prototype.onRemove.call(this);
	    };
	    ResourceProxy.prototype.onRegister = function () {
	        _super.prototype.onRegister.call(this);
	        this.pResource = this.data;
	    };
	    Object.defineProperty(ResourceProxy.prototype, "resource", {
	        get: function () {
	            return this.pResource;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(ResourceProxy.prototype, "location", {
	        get: function () {
	            return this.pResource.location;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(ResourceProxy.prototype, "playback", {
	        get: function () {
	            return this.pResource.playback;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(ResourceProxy.prototype, "metadata", {
	        get: function () {
	            return this.pResource.metadata;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(ResourceProxy.prototype, "ad", {
	        get: function () {
	            return this.pResource.ad;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(ResourceProxy.prototype, "adTrackingSettings", {
	        get: function () {
	            return this.pResource.ad.viewabilityTracking;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(ResourceProxy.prototype, "hasValidMediaUrl", {
	        get: function () {
	            return !Util_1.Util.isEmpty(this.location.mediaUrl);
	        },
	        enumerable: false,
	        configurable: true
	    });
	    return ResourceProxy;
	}(_Proxy.Proxy));
	exports.ResourceProxy = ResourceProxy;

	});

	var ResourceValidator_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ResourceValidator = void 0;



	var ResourceValidator = (function () {
	    function ResourceValidator() {
	    }
	    ResourceValidator.validate = function (r) {
	        var hasRootKeys = this.hasRootKeys(r);
	        if (hasRootKeys.error)
	            return hasRootKeys;
	        var canAccessMedia = this.canAccessMedia(r);
	        if (canAccessMedia.error)
	            return canAccessMedia;
	        return { error: false, msg: '' };
	    };
	    ResourceValidator.hasRootKeys = function (r) {
	        var ks = Object.keys(this.defaultResource);
	        var i = ks.length, msg = '';
	        while (i--) {
	            if (!(ks[i] in r)) {
	                msg = "Property " + ks[i] + " not found.";
	                break;
	            }
	        }
	        return {
	            error: msg != '',
	            msg: msg
	        };
	    };
	    ResourceValidator.canAccessMedia = function (r) {
	        var hasCms = !Util_1.Util.isEmpty(r.location.cms), hasIdOrUri = !Util_1.Util.isEmpty(r.location.tokenMap) || !Util_1.Util.isEmpty(r.location.cmsUri), hasMediaUrl = !Util_1.Util.isEmpty(r.location.mediaUrl), hasSsbMedia = r.ad.context === AdContext_1.AdContext.DAI_SSB && !Util_1.Util.isEmpty(r.ad.dai.ssbStreamUrl), hasValidAdSettings = this.hasValidDaiSettings(r), mediaNotConfigured = !(hasSsbMedia || hasMediaUrl) && !(hasCms && hasIdOrUri), msg = hasValidAdSettings.error ? hasValidAdSettings.msg : (mediaNotConfigured ? 'Media not specified' : '');
	        return {
	            error: mediaNotConfigured && hasValidAdSettings.error,
	            msg: msg
	        };
	    };
	    ResourceValidator.hasValidDaiSettings = function (r) {
	        var adSets = r.ad, dp = adSets.dai;
	        var error = false, msg = '';
	        if (adSets.context === AdContext_1.AdContext.DAI_SDK || adSets.context === AdContext_1.AdContext.DAI_API) {
	            error = !this.isValidDaiResource(dp);
	            error && (msg = 'Invalid DAI configuration');
	        }
	        else if (adSets.context === AdContext_1.AdContext.DAI_SSB) {
	            error = Util_1.Util.isEmpty(dp.ssbStreamUrl);
	            error && (msg = 'SSB stream url missing');
	        }
	        return { error: error, msg: msg };
	    };
	    ResourceValidator.isValidDaiResource = function (p) {
	        if (p.isLive) {
	            return !Util_1.Util.isEmpty(p.assetKey);
	        }
	        return !Util_1.Util.isEmpty(p.contentSourceId) && !Util_1.Util.isEmpty(p.daiVideoId);
	    };
	    ResourceValidator.defaultResource = new ResourceConfiguration_1.ResourceConfiguration();
	    return ResourceValidator;
	}());
	exports.ResourceValidator = ResourceValidator;

	});

	var PrepResourceCommand_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.PrepResourceCommand = void 0;












	var PrepResourceCommand = (function (_super) {
	    tslib_es6.__extends(PrepResourceCommand, _super);
	    function PrepResourceCommand() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    PrepResourceCommand.prototype.execute = function (notification) {
	        switch (notification.name) {
	            case NotificationName_1.NotificationName.PREP_RESOURCE_COLLECTION:
	                this.prepResourceCollection(notification);
	                break;
	            case NotificationName_1.NotificationName.VALIDATE_RESOURCE:
	                if (Util_1.Util.isEmpty(notification.body.resource)) {
	                    this.facade.sendNotification(NotificationName_1.NotificationName.RESOURCE_ERROR, {
	                        code: ErrorCode_1.ErrorCode.INVALID_RESOURCE_FORMAT,
	                        message: AppResources_1.AppResources.messages.INVALID_RESOURCE + ": Resource missing.",
	                        fatal: true,
	                    }, NotificationType_1.NotificationType.INTERNAL);
	                    return;
	                }
	                this.validateResource(notification);
	                break;
	            case NotificationName_1.NotificationName.REGISTER_RESOURCE:
	                this.registerResource(notification);
	                break;
	        }
	    };
	    PrepResourceCommand.prototype.prepResourceCollection = function (notification) {
	        var resources = notification.body.resources;
	        var appMed = this.facade.retrieveMediator(MediatorName_1.MediatorName.APPLICATION);
	        var playlist = (this.getProxy(ProxyName_1.ProxyName.Playlist));
	        if (notification.body.clear === true && appMed && playlist.length) {
	            appMed.killCurrentResource().then(function () {
	                playlist.clear();
	                playlist.addResources(resources);
	                notification.body.start === true && playlist.start();
	            });
	        }
	        else {
	            playlist.addResources(resources);
	            notification.body.start === true && playlist.start();
	        }
	    };
	    PrepResourceCommand.prototype.validateResource = function (notification) {
	        var resource = notification.body.resource, resourceValidation = ResourceValidator_1.ResourceValidator.validate(resource);
	        if (!resourceValidation.error) {
	            this.facade.sendNotification(this.cmsDataRetrievalRequired(resource) ? NotificationName_1.NotificationName.RETRIEVE_RESOURCE : NotificationName_1.NotificationName.TRANSFORM_RESOURCE, { resource: resource }, NotificationType_1.NotificationType.INTERNAL);
	        }
	        else {
	            this.log(LogLevel_1.LogLevel.ERROR, AppResources_1.AppResources.messages.INVALID_RESOURCE);
	            this.facade.sendNotification(NotificationName_1.NotificationName.RESOURCE_ERROR, {
	                message: AppResources_1.AppResources.messages.INVALID_RESOURCE + ": " + resourceValidation.msg,
	                code: ErrorCode_1.ErrorCode.INVALID_RESOURCE_FORMAT,
	                fatal: true,
	            }, NotificationType_1.NotificationType.INTERNAL);
	        }
	    };
	    PrepResourceCommand.prototype.registerResource = function (notification) {
	        var resource = notification.body.resource, resourceProxy = new ResourceProxy_1.ResourceProxy(ProxyName_1.ProxyName.ResourceProxy, resource);
	        this.facade.registerProxy(resourceProxy);
	        this.facade.sendNotification(NotificationName_1.NotificationName.PLAY_RESOURCE, null, NotificationType_1.NotificationType.INTERNAL);
	    };
	    PrepResourceCommand.prototype.cmsDataRetrievalRequired = function (r) {
	        return !Util_1.Util.isEmpty(r.location.cms) &&
	            (!Util_1.Util.isEmpty(r.location.tokenMap) || !Util_1.Util.isEmpty(r.location.cmsUri));
	    };
	    return PrepResourceCommand;
	}(LogAwareSimpleCommand_1.LogAwareSimpleCommand));
	exports.PrepResourceCommand = PrepResourceCommand;

	});

	var PresentationStateChangeCommand_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.PresentationStateChangeCommand = void 0;





	var PresentationStateChangeCommand = (function (_super) {
	    tslib_es6.__extends(PresentationStateChangeCommand, _super);
	    function PresentationStateChangeCommand() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    PresentationStateChangeCommand.prototype.execute = function (notification) {
	        switch (notification.name) {
	            case NotificationName_1.NotificationName.RESOURCE_COMPLETE:
	                var pl = this.getProxy(ProxyName_1.ProxyName.Playlist);
	                pl && pl.next();
	                return;
	            case NotificationName_1.NotificationName.RESOURCE_END:
	            case NotificationName_1.NotificationName.RESOURCE_INTERRUPTED:
	                this.facade.retrieveMediator(MediatorName_1.MediatorName.TIMER_MEDIATOR).killTimer();
	                this.sendNotification(NotificationName_1.NotificationName.KILL_RESOURCE_PRESENTATION);
	                var uim = this.facade.retrieveMediator(MediatorName_1.MediatorName.UI);
	                uim && uim.resetUi();
	                break;
	            case NotificationName_1.NotificationName.CONTENT_BUFFERING:
	            case NotificationName_1.NotificationName.AD_BUFFERING:
	                var dom = this.facade.retrieveProxy(ProxyName_1.ProxyName.PlayerDomProxy);
	                var main = dom.getMain();
	                main.setAttribute('aria-busy', notification.body.value.toString());
	                break;
	        }
	        this.sendNotification(NotificationName_1.NotificationName.APP_EVENT, {
	            notificationName: notification.name,
	            data: notification.body
	        });
	    };
	    return PresentationStateChangeCommand;
	}(LogAwareSimpleCommand_1.LogAwareSimpleCommand));
	exports.PresentationStateChangeCommand = PresentationStateChangeCommand;

	});

	var ReadyCommand_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ReadyCommand = void 0;




	var ReadyCommand = (function (_super) {
	    tslib_es6.__extends(ReadyCommand, _super);
	    function ReadyCommand() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    ReadyCommand.prototype.execute = function (notification) {
	        var _this = this;
	        var name = notification.name, body = notification.body;
	        var dom = this.facade.retrieveProxy(ProxyName_1.ProxyName.PlayerDomProxy);
	        if (dom) {
	            var main = dom.getMain();
	            main.setAttribute('role', 'region');
	            var tabindex = main.getAttribute('tabindex') || "0";
	            main.setAttribute('tabindex', tabindex);
	        }
	        setTimeout(function () { return _this.sendNotification(NotificationName_1.NotificationName.APP_EVENT, { notificationName: name, data: body }); }, 0);
	    };
	    return ReadyCommand;
	}(LogAwareSimpleCommand_1.LogAwareSimpleCommand));
	exports.ReadyCommand = ReadyCommand;

	});

	var ResumePlaybackCommand_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ResumePlaybackCommand = void 0;






	var ResumePlaybackCommand = (function (_super) {
	    tslib_es6.__extends(ResumePlaybackCommand, _super);
	    function ResumePlaybackCommand() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    ResumePlaybackCommand.prototype.execute = function (notification) {
	        var presoState = this.getModel(ModelName_1.ModelName.PresentationState);
	        var pm = this.facade.retrieveMediator(MediatorName_1.MediatorName.PRESENTATION_MEDIATOR);
	        presoState.suspended = false;
	        pm.resume();
	        var cps = this.getProxy(ProxyName_1.ProxyName.ContentPlaybackStateProxy);
	        this.sendNotification(NotificationName_1.NotificationName.PLAYBACK_RESUMED, { contentTime: cps.model.time });
	    };
	    return ResumePlaybackCommand;
	}(LogAwareSimpleCommand_1.LogAwareSimpleCommand));
	exports.ResumePlaybackCommand = ResumePlaybackCommand;

	});

	var CmsDataRetriever_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.CmsDataRetriever = void 0;


	var CmsDataRetriever = (function () {
	    function CmsDataRetriever(options) {
	        var errRecovery = options.errorRecovery || null;
	        var errorMsg = null;
	        if (options.url) {
	            this.retrieveResource(options.url, options.responseType, options.callback, errRecovery);
	        }
	        else if (options.uriTemplate && options.tokenMap) {
	            var uri = this.replaceUriTokens(options.uriTemplate, options.tokenMap);
	            this.retrieveResource(uri, options.responseType, options.callback, errRecovery);
	        }
	        else {
	            errorMsg = 'Invalid options passed to CmsDataRetriever.';
	        }
	        if (errorMsg) {
	            options.callback && options.callback(null, {
	                status: 0,
	                error: true,
	                url: 'n/a',
	                message: errorMsg
	            });
	        }
	    }
	    CmsDataRetriever.prototype.replaceUriTokens = function (uri, tokenMap) {
	        var u = uri;
	        if (tokenMap) {
	            for (var q in tokenMap) {
	                u = u.replace(q, tokenMap[q]);
	            }
	        }
	        return u;
	    };
	    CmsDataRetriever.prototype.retrieveResource = function (u, responseType, callback, er) {
	        if (er === void 0) { er = null; }
	        var req = AsyncDataRequestOptions_1.AsyncDataRequestOptions.create({
	            responseType: responseType,
	            timeout: 2000,
	            url: u,
	            errorRecovery: er,
	            onComplete: function (e) {
	                var doc = e.data.response, err = e.data.error;
	                callback && callback(doc, err ? e.data : null);
	            }
	        });
	        new AsyncDataRequest_1.AsyncDataRequest(req);
	    };
	    return CmsDataRetriever;
	}());
	exports.CmsDataRetriever = CmsDataRetriever;

	});

	var RetrieveResourceCommand_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.RetrieveResourceCommand = void 0;









	var RetrieveResourceCommand = (function (_super) {
	    tslib_es6.__extends(RetrieveResourceCommand, _super);
	    function RetrieveResourceCommand() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    RetrieveResourceCommand.prototype.execute = function (notification) {
	        var _this = this;
	        var r = notification.body.resource, loc = r && r.location, cms = (loc && loc.cms) || null, cfg = this.getConfig(cms), valid = cfg && ((cfg.uriTemplate && loc.tokenMap) || loc.cmsUri);
	        if (valid) {
	            var pOpts = this.getModel(ModelName_1.ModelName.PlayerOptions);
	            var opts = {
	                uriTemplate: cfg.uriTemplate,
	                tokenMap: loc && loc.tokenMap || null,
	                url: loc && loc.cmsUri || null,
	                responseType: cfg.responseType,
	                errorRecovery: pOpts.networkErrorRecovery,
	                callback: function (doc, err) {
	                    if (err) {
	                        _this.log(LogLevel_1.LogLevel.ERROR, err.status, err.message);
	                        _this.sendNotification(NotificationName_1.NotificationName.RESOURCE_ERROR, {
	                            code: ErrorCode_1.ErrorCode.SELECTOR_CALL_ERROR,
	                            message: err.message,
	                            fatal: true,
	                        }, NotificationType_1.NotificationType.INTERNAL);
	                        return;
	                    }
	                    _this.sendNotification(NotificationName_1.NotificationName.TRANSFORM_RESOURCE, { resource: r, data: doc }, NotificationType_1.NotificationType.INTERNAL);
	                }
	            };
	            new CmsDataRetriever_1.CmsDataRetriever(opts);
	        }
	        else {
	            this.log(LogLevel_1.LogLevel.ERROR, "RetrieveResourceCommand: " + AppResources_1.AppResources.messages.UNEXPECTED_CONDITION + "; CMS config error.");
	        }
	    };
	    RetrieveResourceCommand.prototype.getConfig = function (cms) {
	        var playerOptions = this.getModel(ModelName_1.ModelName.PlayerOptions), txDefs = playerOptions.dataTransformers;
	        if (cms && txDefs && txDefs[cms] && txDefs[cms].objectRef && txDefs[cms].responseType) {
	            return txDefs[cms];
	        }
	        return null;
	    };
	    return RetrieveResourceCommand;
	}(LogAwareSimpleCommand_1.LogAwareSimpleCommand));
	exports.RetrieveResourceCommand = RetrieveResourceCommand;

	});

	var StartPresentationCommand_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.StartPresentationCommand = void 0;




	var StartPresentationCommand = (function (_super) {
	    tslib_es6.__extends(StartPresentationCommand, _super);
	    function StartPresentationCommand() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    StartPresentationCommand.prototype.execute = function (notification) {
	        var pm = this.facade.retrieveMediator(MediatorName_1.MediatorName.PRESENTATION_MEDIATOR);
	        this.sendNotification(NotificationName_1.NotificationName.RESOURCE_START);
	        pm.start();
	    };
	    return StartPresentationCommand;
	}(LogAwareSimpleCommand_1.LogAwareSimpleCommand));
	exports.StartPresentationCommand = StartPresentationCommand;

	});

	var SuspendPlaybackCommand_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.SuspendPlaybackCommand = void 0;






	var SuspendPlaybackCommand = (function (_super) {
	    tslib_es6.__extends(SuspendPlaybackCommand, _super);
	    function SuspendPlaybackCommand() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    SuspendPlaybackCommand.prototype.execute = function (notification) {
	        var presoState = this.getModel(ModelName_1.ModelName.PresentationState);
	        var pm = this.facade.retrieveMediator(MediatorName_1.MediatorName.PRESENTATION_MEDIATOR);
	        pm.suspend();
	        presoState.suspended = true;
	        var cps = this.getProxy(ProxyName_1.ProxyName.ContentPlaybackStateProxy);
	        this.sendNotification(NotificationName_1.NotificationName.PLAYBACK_SUSPENDED, { contentTime: cps.model.time });
	    };
	    return SuspendPlaybackCommand;
	}(LogAwareSimpleCommand_1.LogAwareSimpleCommand));
	exports.SuspendPlaybackCommand = SuspendPlaybackCommand;

	});

	var TransformResourceCommand_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.TransformResourceCommand = void 0;








	var TransformResourceCommand = (function (_super) {
	    tslib_es6.__extends(TransformResourceCommand, _super);
	    function TransformResourceCommand() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    TransformResourceCommand.prototype.execute = function (notification) {
	        var _this = this;
	        var r = notification.body.resource, data = notification.body.data || null, playerOpts = this.getModel(ModelName_1.ModelName.PlayerOptions), dtx = playerOpts.dataTransformers && playerOpts.dataTransformers[r.location.cms] && playerOpts.dataTransformers[r.location.cms].objectRef;
	        Promise.resolve()
	            .then(function () {
	            var resource = r;
	            if (dtx) {
	                var tx = Util_1.Util.isFunction(dtx.transform) ? dtx : new dtx();
	                resource = (tx.transform && tx.transform(data, r)) || r;
	            }
	            return resource;
	        })
	            .then(function (resource) {
	            if (!resource || resource.error) {
	                throw new Error(resource && resource.data);
	            }
	            _this.sendNotification(NotificationName_1.NotificationName.REGISTER_RESOURCE, { resource: resource }, NotificationType_1.NotificationType.INTERNAL);
	        })
	            .catch(function (error) {
	            var code = _this.getCodeForError(error);
	            var message = error.message || AppResources_1.AppResources.messages.CMS_RESOURCE_UNAVAILABLE;
	            var fatal = true;
	            _this.sendNotification(NotificationName_1.NotificationName.RESOURCE_ERROR, { code: code, message: message, fatal: fatal }, NotificationType_1.NotificationType.INTERNAL);
	        });
	    };
	    TransformResourceCommand.prototype.getCodeForError = function (obj) {
	        if (obj.cms === 'mpx') {
	            return this.getCodeForMpxError(obj);
	        }
	        else {
	            return ErrorCode_1.ErrorCode.RESOURCE_UNAVAILABLE;
	        }
	    };
	    TransformResourceCommand.prototype.getCodeForMpxError = function (obj) {
	        var exc = obj ? obj.exception : null;
	        switch (exc) {
	            case 'DomainBlocked':
	                return ErrorCode_1.ErrorCode.DOMAIN_BLOCKED;
	            case 'GeoLocationBlocked':
	                return ErrorCode_1.ErrorCode.GEO_LOCATION_BLOCKED;
	            case 'IpBlocked':
	                return ErrorCode_1.ErrorCode.IP_BLOCKED;
	            case 'SatelliteProviderBlocked':
	                return ErrorCode_1.ErrorCode.SATELLITE_PROVIDER_BLOCKED;
	            case 'Expired':
	                return ErrorCode_1.ErrorCode.EXPIRED;
	            default:
	                return ErrorCode_1.ErrorCode.RESOURCE_UNAVAILABLE;
	        }
	    };
	    return TransformResourceCommand;
	}(LogAwareSimpleCommand_1.LogAwareSimpleCommand));
	exports.TransformResourceCommand = TransformResourceCommand;

	});

	var UserKeyboardCommand_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.UserKeyboardCommand = void 0;






	var UserKeyboardCommand = (function (_super) {
	    tslib_es6.__extends(UserKeyboardCommand, _super);
	    function UserKeyboardCommand() {
	        var _this = _super !== null && _super.apply(this, arguments) || this;
	        _this.copyNoticeStyle = 'position: absolute; z-Index: 900000000; top: 0; right: 0; width: 180px; ' +
	            'background: #fc0; color: #000; font-family: Arial, sans-serif; text-align: center; height: 64px; line-height: 64px; font-size: 32px';
	        return _this;
	    }
	    UserKeyboardCommand.prototype.execute = function (notification) {
	        var action = notification.body && notification.body.action;
	        switch (action) {
	            case DiagnosticAction_1.DiagnosticAction.DIAGNOSTIC_PLUGIN:
	                var pim = this.facade.retrieveMediator(MediatorName_1.MediatorName.PLUGIN_MEDIATOR);
	                pim && pim.toggleDiagnosticPlugin();
	                break;
	            case DiagnosticAction_1.DiagnosticAction.CONFIG_TO_CLIPBOARD:
	            case DiagnosticAction_1.DiagnosticAction.CONFIG_TO_TEST_PAGE:
	                var toClip = action === DiagnosticAction_1.DiagnosticAction.CONFIG_TO_CLIPBOARD;
	                var d = this.getSerializedData();
	                if (toClip) {
	                    this.copyToClipboard(d);
	                    this.displayCopyNotice();
	                }
	                break;
	            default:
	                this.sendNotification(NotificationName_1.NotificationName.APP_EVENT, {
	                    notificationName: notification.name,
	                    data: notification.body
	                });
	                break;
	        }
	    };
	    UserKeyboardCommand.prototype.displayCopyNotice = function () {
	        var pdp = this.facade.retrieveProxy(ProxyName_1.ProxyName.PlayerDomProxy);
	        var m = pdp.getMain();
	        var d = document.createElement('div');
	        d.setAttribute('style', this.copyNoticeStyle);
	        d.innerHTML = 'Copied!';
	        m.appendChild(d);
	        setTimeout(function () { return m.removeChild(d); }, 2500);
	    };
	    UserKeyboardCommand.prototype.copyToClipboard = function (str) {
	        var t = document.createElement('textarea');
	        t.setAttribute('style', 'position: absolute; top: -120px;');
	        document.body.appendChild(t);
	        t.value = str;
	        t.select();
	        document.execCommand("copy");
	        document.body.removeChild(t);
	    };
	    UserKeyboardCommand.prototype.getSerializedData = function () {
	        var am = this.facade.retrieveMediator(MediatorName_1.MediatorName.APPLICATION);
	        return am.getConfigAsJson();
	    };
	    return UserKeyboardCommand;
	}(LogAwareSimpleCommand_1.LogAwareSimpleCommand));
	exports.UserKeyboardCommand = UserKeyboardCommand;

	});

	var command_map = createCommonjsModule(function (module, exports) {
	var _a;
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.command_map = void 0;



















	exports.command_map = (_a = {},
	    _a[NotificationName_1.NotificationName.DEFAULT] = null,
	    _a[NotificationName_1.NotificationName.BOOT_APP] = BootCommand_1.BootCommand,
	    _a[NotificationName_1.NotificationName.BOOT_WEBMAF_APP] = BootWebMafCommand_1.BootWebMafCommand,
	    _a[NotificationName_1.NotificationName.READY] = ReadyCommand_1.ReadyCommand,
	    _a[NotificationName_1.NotificationName.PLAY_ON_USER_GESTURE] = PlaybackCommand_1.PlaybackCommand,
	    _a[NotificationName_1.NotificationName.PLAY] = PlaybackCommand_1.PlaybackCommand,
	    _a[NotificationName_1.NotificationName.PAUSE] = PlaybackCommand_1.PlaybackCommand,
	    _a[NotificationName_1.NotificationName.STOP] = PlaybackCommand_1.PlaybackCommand,
	    _a[NotificationName_1.NotificationName.SEEK] = PlaybackCommand_1.PlaybackCommand,
	    _a[NotificationName_1.NotificationName.SEEK_FORWARD] = PlaybackCommand_1.PlaybackCommand,
	    _a[NotificationName_1.NotificationName.SEEK_BACK] = PlaybackCommand_1.PlaybackCommand,
	    _a[NotificationName_1.NotificationName.SEEK_TO_LIVE] = PlaybackCommand_1.PlaybackCommand,
	    _a[NotificationName_1.NotificationName.MUTE] = PlaybackCommand_1.PlaybackCommand,
	    _a[NotificationName_1.NotificationName.UNMUTE] = PlaybackCommand_1.PlaybackCommand,
	    _a[NotificationName_1.NotificationName.VOLUME_CHANGE] = PlaybackCommand_1.PlaybackCommand,
	    _a[NotificationName_1.NotificationName.SWITCH_AUDIO_TRACK] = PlaybackCommand_1.PlaybackCommand,
	    _a[NotificationName_1.NotificationName.SWITCH_TEXT_TRACK] = PlaybackCommand_1.PlaybackCommand,
	    _a[NotificationName_1.NotificationName.SWITCH_TEXT_MODE] = PlaybackCommand_1.PlaybackCommand,
	    _a[NotificationName_1.NotificationName.SUSPEND_PLAYBACK] = SuspendPlaybackCommand_1.SuspendPlaybackCommand,
	    _a[NotificationName_1.NotificationName.RESUME_PLAYBACK] = ResumePlaybackCommand_1.ResumePlaybackCommand,
	    _a[NotificationName_1.NotificationName.SWITCH_BITRATE] = AbrSwitchCommand_1.AbrSwitchCommand,
	    _a[NotificationName_1.NotificationName.SWITCH_QUALITY_CATEGORY] = AbrSwitchCommand_1.AbrSwitchCommand,
	    _a[NotificationName_1.NotificationName.AUTO_QUALITY_SWITCHING] = AbrSwitchCommand_1.AbrSwitchCommand,
	    _a[NotificationName_1.NotificationName.MIN_BITRATE] = AbrSwitchCommand_1.AbrSwitchCommand,
	    _a[NotificationName_1.NotificationName.MAX_BITRATE] = AbrSwitchCommand_1.AbrSwitchCommand,
	    _a[NotificationName_1.NotificationName.PREP_RESOURCE_COLLECTION] = PrepResourceCommand_1.PrepResourceCommand,
	    _a[NotificationName_1.NotificationName.VALIDATE_RESOURCE] = PrepResourceCommand_1.PrepResourceCommand,
	    _a[NotificationName_1.NotificationName.REGISTER_RESOURCE] = PrepResourceCommand_1.PrepResourceCommand,
	    _a[NotificationName_1.NotificationName.REGISTER_RESOURCE] = PrepResourceCommand_1.PrepResourceCommand,
	    _a[NotificationName_1.NotificationName.RETRIEVE_RESOURCE] = RetrieveResourceCommand_1.RetrieveResourceCommand,
	    _a[NotificationName_1.NotificationName.TRANSFORM_RESOURCE] = TransformResourceCommand_1.TransformResourceCommand,
	    _a[NotificationName_1.NotificationName.START_PRESENTATION] = StartPresentationCommand_1.StartPresentationCommand,
	    _a[NotificationName_1.NotificationName.PLAYLIST_ADVANCED] = PlaylistCommand_1.PlaylistCommand,
	    _a[NotificationName_1.NotificationName.PLAYLIST_COMPLETE] = PlaylistCommand_1.PlaylistCommand,
	    _a[NotificationName_1.NotificationName.PLAYLIST_CLEARED] = PlaylistCommand_1.PlaylistCommand,
	    _a[NotificationName_1.NotificationName.PLAYLIST_CURRENT_RESOURCE_CLEARED] = PlaylistCommand_1.PlaylistCommand,
	    _a[NotificationName_1.NotificationName.PLAY_RESOURCE] = PrepPlaybackCommand_1.PrepPlaybackCommand,
	    _a[NotificationName_1.NotificationName.KILL_RESOURCE_PRESENTATION] = KillResourcePresentationCommand_1.KillResourcePresentationCommand,
	    _a[NotificationName_1.NotificationName.RESOURCE_INTERRUPTED] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.VIDEO_START_ERROR] = HandleErrorCommand_1.HandleErrorCommand,
	    _a[NotificationName_1.NotificationName.VIDEO_PLAYBACK_ERROR] = HandleErrorCommand_1.HandleErrorCommand,
	    _a[NotificationName_1.NotificationName.RESOURCE_ERROR] = HandleErrorCommand_1.HandleErrorCommand,
	    _a[NotificationName_1.NotificationName.AD_ERROR] = HandleErrorCommand_1.HandleErrorCommand,
	    _a[NotificationName_1.NotificationName.AD_STALLED] = HandleErrorCommand_1.HandleErrorCommand,
	    _a[NotificationName_1.NotificationName.PLAYBACK_SUSPENDED] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.PLAYBACK_RESUMED] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.POSTER_CLICK] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.PLAYLIST_CHANGE] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.RESOURCE_START] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.VIDEO_PROGRESS] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.QUALITY_CHANGE] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.QUALITY_INFO_CHANGE] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.CDN_CHANGE] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.DRM_KEYSYSTEM_CREATED] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.PRESENTATION_SIZE_CHANGE] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.FULLSCREEN_ENTER] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.FULLSCREEN_EXIT] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.CONTENT_TIME_UPDATE] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.CONTENT_BUFFERING] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.CONTENT_START] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.CONTENT_DURATION_AVAILABLE] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.CONTENT_SEGMENT_START] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.CONTENT_PLAYING] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.CONTENT_PAUSED] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.CONTENT_SEEKING] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.CONTENT_SEEKED] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.SEEK_REDIRECT_START] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.SEEK_REDIRECT_COMPLETE] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.CONTENT_SEGMENT_END] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.CONTENT_COMPLETE] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.CONTENT_IS_LIVE_CHANGED] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.STREAM_TYPE_CHANGE] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.STREAM_METADATA] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.RESOURCE_END] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.RESOURCE_COMPLETE] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.AD_CUEPOINTS_AVAILABLE] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.AD_BREAK_START] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.AD_BREAK_METADATA] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.AD_BREAK_COMPLETE] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.AD_START] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.AD_PAUSED] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.AD_PLAYING] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.AD_TIME_UPDATE] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.AD_FIRST_QUARTILE] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.AD_MIDPOINT] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.AD_THIRD_QUARTILE] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.AD_COMPLETE] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.AD_BREAK_COMPLETE] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.AD_STALLED] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.AD_STALLED] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.AD_BUFFERING] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.AD_CLICK] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.AD_SKIPPED] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.VIDEO_LOAD_COMPLETE] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.METADATA_CUEPOINT] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.TEXT_CUEPOINT] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.TEXT_TRACK_DISPLAY_MODE_CHANGE] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.TEXT_TRACK_CHANGE] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.TEXT_TRACK_INFO_CHANGE] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.TEXT_TRACK_AVAILABLE] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.AUDIO_TRACK_INFO_CHANGE] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.AUDIO_TRACK_CHANGE] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.THUMBNAIL_TRACK_AVAILABLE] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.BEFORE_CONTROLS_VISIBLE] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.BEFORE_CONTROLS_HIDDEN] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.CONTROLS_VISIBLE] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.CONTROLS_HIDDEN] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.MOUSE_ENTER_PRESENTATION] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.MOUSE_LEAVE_PRESENTATION] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.USER_PAUSE] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.USER_SETTINGS_REQUEST] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.AUTOPLAY_BLOCKED] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.PLAYLIST_OUT_OF_RANGE] = PresentationStateChangeCommand_1.PresentationStateChangeCommand,
	    _a[NotificationName_1.NotificationName.CHANGE_LANGUAGE] = LocalizationCommand_1.LocalizationCommand,
	    _a[NotificationName_1.NotificationName.LANGUAGE_CHANGE] = LocalizationCommand_1.LocalizationCommand,
	    _a[NotificationName_1.NotificationName.USER_KEY_COMMAND] = UserKeyboardCommand_1.UserKeyboardCommand,
	    _a);

	});

	var VideoPlayer_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.VideoPlayer = void 0;



















	var VideoPlayer = (function (_super) {
	    tslib_es6.__extends(VideoPlayer, _super);
	    function VideoPlayer(options) {
	        var _this = _super.call(this, Util_1.Util.assign({
	            commandMap: command_map.command_map,
	            id: options.playerOptions.id || null
	        }, options)) || this;
	        _this.pIsReady = false;
	        _this.init();
	        return _this;
	    }
	    VideoPlayer.prototype.initialize = function () {
	        var _this = this;
	        var options = (this.opts.playerOptions || {});
	        var plugins = (options.plugins || []);
	        var api = this.getApi();
	        var note = { name: NotificationName_1.NotificationName.CHANGE_LANGUAGE, body: { value: options.language }, type: NotificationType_1.NotificationType.INTERNAL };
	        this.addNativePlugins(plugins, options);
	        return api.registerPlugins(plugins)
	            .then(function () { return _this.sendAsyncNotification(note, [PlayerEvent_1.PlayerEvent.LANGUAGE_CHANGE]); })
	            .then(function () {
	            _this.localization.registerLocalizationData(options.localization);
	            _this.pIsReady = true;
	            _this.sendNotification(NotificationName_1.NotificationName.READY, api);
	            return api;
	        })
	            .catch(function (error) {
	            Logger_1.Logger.error(error);
	            throw error;
	        });
	    };
	    VideoPlayer.prototype.destroy = function () {
	        var _this = this;
	        var destroy = _super.prototype.destroy.bind(this);
	        return this.killCurrentResource()
	            .then(function () {
	            _this.appMediator && _this.appMediator.prepForPlayerRemoval();
	            _this.pContentPlaybackStateProxy = null;
	            _this.apiAccessors = null;
	            _this.apiMethods = null;
	            destroy();
	        })
	            .catch(function (e) { Logger_1.Logger.error(e); });
	    };
	    VideoPlayer.prototype.getApi = function () {
	        var obj = ApiDecorators.apiCollection({}, this);
	        obj.EventType = PlayerEvent_1.PlayerEvent;
	        return obj;
	    };
	    VideoPlayer.prototype.killCurrentResource = function () {
	        return this.appMediator.killCurrentResource();
	    };
	    VideoPlayer.prototype.hasListenerFor = function (name) {
	        return _super.prototype.hasListenerFor.call(this, name);
	    };
	    VideoPlayer.prototype.on = function (name, func) {
	        _super.prototype.on.call(this, name, func);
	    };
	    VideoPlayer.prototype.once = function (name, func) {
	        _super.prototype.once.call(this, name, func);
	    };
	    VideoPlayer.prototype.off = function (name, func) {
	        _super.prototype.off.call(this, name, func);
	    };
	    Object.defineProperty(VideoPlayer.prototype, "isReady", {
	        get: function () {
	            return this.pIsReady;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(VideoPlayer.prototype, "id", {
	        get: function () {
	            return this.appId;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(VideoPlayer.prototype, "dimensions", {
	        get: function () {
	            return this.appMediator.getDimensions();
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(VideoPlayer.prototype, "muted", {
	        get: function () {
	            return this.appMediator.getMuteState();
	        },
	        set: function (value) {
	            var note = value ? NotificationName_1.NotificationName.MUTE : NotificationName_1.NotificationName.UNMUTE;
	            this.transmitExtRequest(note);
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(VideoPlayer.prototype, "volume", {
	        get: function () {
	            return this.appMediator.getVolume();
	        },
	        set: function (value) {
	            this.transmitExtRequest(NotificationName_1.NotificationName.VOLUME_CHANGE, { value: value });
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(VideoPlayer.prototype, "language", {
	        get: function () {
	            return this.localization.language;
	        },
	        set: function (value) {
	            this.transmitExtRequest(NotificationName_1.NotificationName.CHANGE_LANGUAGE, { value: value });
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(VideoPlayer.prototype, "contentTime", {
	        get: function () {
	            return this.contentPlaybackStateProxy ? this.contentPlaybackStateProxy.model.time : NaN;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(VideoPlayer.prototype, "contentDuration", {
	        get: function () {
	            return this.contentPlaybackStateProxy ? this.contentPlaybackStateProxy.model.duration : NaN;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(VideoPlayer.prototype, "streamTime", {
	        get: function () {
	            var presoModel = this.modelCollectionProxy.getModel(ModelName_1.ModelName.PresentationState);
	            return presoModel.streamTime;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(VideoPlayer.prototype, "streamDuration", {
	        get: function () {
	            var presoModel = this.modelCollectionProxy.getModel(ModelName_1.ModelName.PresentationState);
	            return presoModel.streamDuration;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(VideoPlayer.prototype, "playbackState", {
	        get: function () {
	            return this.contentPlaybackStateProxy ? this.contentPlaybackStateProxy.model.state : null;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(VideoPlayer.prototype, "playlist", {
	        get: function () {
	            var proxy = this.facade.retrieveProxy(ProxyName_1.ProxyName.Playlist);
	            return proxy ? proxy.getApi() : null;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(VideoPlayer.prototype, "autoQualitySwitching", {
	        get: function () {
	            return this.contentPlaybackStateProxy ? this.contentPlaybackStateProxy.qualitySwitchingMode === Playback_1.Playback.ABR_SWITCHING_MODE_AUTO : false;
	        },
	        set: function (value) {
	            if (this.contentPlaybackStateProxy) {
	                this.transmitExtRequest(NotificationName_1.NotificationName.AUTO_QUALITY_SWITCHING, { value: value });
	            }
	            else {
	                this.log(AppResources_1.AppResources.messages.CONTENT_PLAYBACK_SETTING_IGNORED);
	            }
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(VideoPlayer.prototype, "qualityInfo", {
	        get: function () {
	            return this.contentPlaybackStateProxy ? this.contentPlaybackStateProxy.qualityInfo : null;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(VideoPlayer.prototype, "bitrate", {
	        get: function () {
	            var quality = this.qualityInfo.quality || { bitrate: NaN };
	            var bitrate = (quality.bitrate != null) ? quality.bitrate : NaN;
	            return bitrate;
	        },
	        set: function (bitrate) {
	            if (this.contentPlaybackStateProxy) {
	                this.transmitExtRequest(NotificationName_1.NotificationName.SWITCH_BITRATE, { value: bitrate });
	            }
	            else {
	                this.log(AppResources_1.AppResources.messages.CONTENT_PLAYBACK_SETTING_IGNORED);
	            }
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(VideoPlayer.prototype, "qualityCategory", {
	        get: function () {
	            return this.contentPlaybackStateProxy ? this.contentPlaybackStateProxy.userQualityCategory : null;
	        },
	        set: function (category) {
	            if (this.contentPlaybackStateProxy) {
	                this.transmitExtRequest(NotificationName_1.NotificationName.SWITCH_QUALITY_CATEGORY, { value: category });
	            }
	            else {
	                this.log(AppResources_1.AppResources.messages.CONTENT_PLAYBACK_SETTING_IGNORED);
	            }
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(VideoPlayer.prototype, "minBitrate", {
	        get: function () {
	            return this.contentPlaybackStateProxy ? this.contentPlaybackStateProxy.minBitrate : NaN;
	        },
	        set: function (value) {
	            if (this.contentPlaybackStateProxy) {
	                this.transmitExtRequest(NotificationName_1.NotificationName.MIN_BITRATE, { value: value });
	            }
	            else {
	                this.log(AppResources_1.AppResources.messages.CONTENT_PLAYBACK_SETTING_IGNORED);
	            }
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(VideoPlayer.prototype, "maxBitrate", {
	        get: function () {
	            return this.contentPlaybackStateProxy ? this.contentPlaybackStateProxy.maxBitrate : NaN;
	        },
	        set: function (value) {
	            if (this.contentPlaybackStateProxy) {
	                this.transmitExtRequest(NotificationName_1.NotificationName.MAX_BITRATE, { value: value });
	            }
	            else {
	                this.log(AppResources_1.AppResources.messages.CONTENT_PLAYBACK_SETTING_IGNORED);
	            }
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(VideoPlayer.prototype, "audioTrackInfo", {
	        get: function () {
	            return this.contentPlaybackStateProxy ? this.contentPlaybackStateProxy.model.audioTracks : null;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(VideoPlayer.prototype, "audioTrack", {
	        get: function () {
	            return this.contentPlaybackStateProxy ? this.contentPlaybackStateProxy.model.audioTracks.track : null;
	        },
	        set: function (track) {
	            if (this.contentPlaybackStateProxy) {
	                this.transmitExtRequest(NotificationName_1.NotificationName.SWITCH_AUDIO_TRACK, { value: track });
	            }
	            else {
	                this.log(AppResources_1.AppResources.messages.CONTENT_PLAYBACK_SETTING_IGNORED);
	            }
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(VideoPlayer.prototype, "resource", {
	        get: function () {
	            return this.appMediator.getCurrentResource();
	        },
	        set: function (value) {
	            this.transmitExtRequest(NotificationName_1.NotificationName.PREP_RESOURCE_COLLECTION, { resources: [value], start: true, clear: true });
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(VideoPlayer.prototype, "textTrackEnabled", {
	        get: function () {
	            return this.facade.retrieveProxy(ProxyName_1.ProxyName.TextTrackProxy).enabled;
	        },
	        set: function (value) {
	            if (this.contentPlaybackStateProxy) {
	                this.transmitExtRequest(NotificationName_1.NotificationName.SWITCH_TEXT_MODE, { value: value });
	            }
	            else {
	                this.log(AppResources_1.AppResources.messages.CONTENT_PLAYBACK_SETTING_IGNORED);
	            }
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(VideoPlayer.prototype, "textTrack", {
	        get: function () {
	            return this.textTrackInfo ? this.textTrackInfo.track : null;
	        },
	        set: function (value) {
	            if (this.contentPlaybackStateProxy) {
	                this.transmitExtRequest(NotificationName_1.NotificationName.SWITCH_TEXT_TRACK, { value: value });
	            }
	            else {
	                this.log(AppResources_1.AppResources.messages.CONTENT_PLAYBACK_SETTING_IGNORED);
	            }
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(VideoPlayer.prototype, "textTrackInfo", {
	        get: function () {
	            return this.contentPlaybackStateProxy ? this.contentPlaybackStateProxy.textTrackInfo : null;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(VideoPlayer.prototype, "streamType", {
	        get: function () {
	            return this.contentPlaybackStateProxy ? this.contentPlaybackStateProxy.model.streamType : null;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(VideoPlayer.prototype, "isPlayingLive", {
	        get: function () {
	            var lsi = this.contentPlaybackStateProxy ? this.contentPlaybackStateProxy.model.liveStreamInfo : null;
	            return lsi && lsi.isPlayingLive === true;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(VideoPlayer.prototype, "liveStreamUtcTime", {
	        get: function () {
	            var lsi = this.contentPlaybackStateProxy ? this.contentPlaybackStateProxy.model.liveStreamInfo : null;
	            return lsi ? lsi.absoluteTime : NaN;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(VideoPlayer.prototype, "liveStreamUtcDuration", {
	        get: function () {
	            var lsi = this.contentPlaybackStateProxy ? this.contentPlaybackStateProxy.model.liveStreamInfo : null;
	            return lsi ? lsi.absoluteDuration : NaN;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(VideoPlayer.prototype, "isSuspended", {
	        get: function () {
	            return this.appMediator.isPlaybackSuspended();
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(VideoPlayer.prototype, "fullscreenElement", {
	        get: function () {
	            return this.appMediator.getFullscreenElement();
	        },
	        set: function (value) {
	            this.appMediator.setFullscreenElement(value);
	        },
	        enumerable: false,
	        configurable: true
	    });
	    VideoPlayer.prototype.enterFullscreen = function () {
	        this.transmitExtRequest(NotificationName_1.NotificationName.ENTER_FULLSCREEN_REQUEST);
	    };
	    VideoPlayer.prototype.exitFullscreen = function () {
	        this.transmitExtRequest(NotificationName_1.NotificationName.EXIT_FULLSCREEN_REQUEST);
	    };
	    VideoPlayer.prototype.play = function () {
	        if (this.appMediator.isPlaybackSuspended()) {
	            this.transmitExtRequest(NotificationName_1.NotificationName.RESUME_PLAYBACK);
	        }
	        var note = { name: NotificationName_1.NotificationName.PLAY, type: NotificationType_1.NotificationType.EXTERNAL };
	        return this.sendAsyncNotification(note, [PlayerEvent_1.PlayerEvent.CONTENT_PLAYING, PlayerEvent_1.PlayerEvent.AD_PLAYING], [PlayerEvent_1.PlayerEvent.AUTOPLAY_BLOCKED, PlayerEvent_1.PlayerEvent.VIDEO_PLAYBACK_ERROR, PlayerEvent_1.PlayerEvent.AD_ERROR]);
	    };
	    VideoPlayer.prototype.pause = function () {
	        if (this.streamType === StreamType_1.StreamType.LIVE) {
	            this.log(AppResources_1.AppResources.messages.PAUSING_LINEAR_LIVE_STREAM_NOT_ALLOWED);
	            return this.stop();
	        }
	        else {
	            var note = { name: NotificationName_1.NotificationName.PAUSE, type: NotificationType_1.NotificationType.EXTERNAL };
	            return this.sendAsyncNotification(note, [PlayerEvent_1.PlayerEvent.CONTENT_PAUSED, PlayerEvent_1.PlayerEvent.AD_PAUSED]);
	        }
	    };
	    VideoPlayer.prototype.togglePlayPause = function () {
	        var s = this.playbackState;
	        var req = s === PlaybackState_1.PlaybackState.PLAYING ? NotificationName_1.NotificationName.PAUSE :
	            (s === PlaybackState_1.PlaybackState.PAUSED ? NotificationName_1.NotificationName.PLAY : null);
	        req && this.transmitExtRequest(req);
	    };
	    VideoPlayer.prototype.seek = function (position) {
	        var seekPos = this.appMediator.validateSeek(position, this.contentDuration);
	        if (seekPos === null) {
	            return Promise.resolve();
	        }
	        var note = { name: NotificationName_1.NotificationName.SEEK, body: { value: seekPos }, type: NotificationType_1.NotificationType.EXTERNAL };
	        return this.sendAsyncNotification(note, [PlayerEvent_1.PlayerEvent.SEEK_COMPLETE], [PlayerEvent_1.PlayerEvent.VIDEO_PLAYBACK_ERROR, PlayerEvent_1.PlayerEvent.AD_ERROR]);
	    };
	    VideoPlayer.prototype.getModelSnapshot = function () {
	        return this.appMediator.getSnapshot();
	    };
	    VideoPlayer.prototype.getAdBreakTimes = function () {
	        return this.appMediator.getAdBreakTimes() || [];
	    };
	    VideoPlayer.prototype.grabFrame = function () {
	        return this.appMediator.grabFrame();
	    };
	    VideoPlayer.prototype.getThumbnail = function (time) {
	        return this.contentPlaybackStateProxy.getThumbnail(time);
	    };
	    VideoPlayer.prototype.getContainerRect = function () {
	        return this.appMediator.getContainerRect();
	    };
	    VideoPlayer.prototype.registerPlugins = function (pc, callback) {
	        var _this = this;
	        return new Promise(function (resolve, reject) {
	            _this.transmitExtRequest(NotificationName_1.NotificationName.LOAD_PLUGINS, {
	                plugins: pc,
	                callback: function () {
	                    if (typeof callback === 'function') {
	                        callback();
	                    }
	                    resolve();
	                }
	            });
	        });
	    };
	    VideoPlayer.prototype.removePlugin = function (name) {
	        this.transmitExtRequest(NotificationName_1.NotificationName.REMOVE_PLUGIN, {
	            name: name
	        });
	    };
	    VideoPlayer.prototype.getPlugin = function (name) {
	        return this.appMediator.getPlugin(name);
	    };
	    VideoPlayer.prototype.stop = function () {
	        var note = { name: NotificationName_1.NotificationName.STOP, type: NotificationType_1.NotificationType.EXTERNAL };
	        return this.sendAsyncNotification(note, [PlayerEvent_1.PlayerEvent.RESOURCE_INTERRUPTED, PlayerEvent_1.PlayerEvent.RESOURCE_END]);
	    };
	    VideoPlayer.prototype.goLive = function () {
	        if (this.streamType && this.streamType !== StreamType_1.StreamType.VOD) {
	            this.transmitExtRequest(NotificationName_1.NotificationName.SEEK_TO_LIVE);
	        }
	    };
	    VideoPlayer.prototype.focus = function (options) {
	        var main = this.dom.getMain();
	        if (main) {
	            main.focus(options);
	        }
	    };
	    VideoPlayer.prototype.blur = function () {
	        var main = this.dom.getMain();
	        if (main) {
	            main.blur();
	        }
	    };
	    VideoPlayer.prototype.getConfigAsJson = function (spacing) {
	        return this.appMediator.getConfigAsJson(spacing);
	    };
	    VideoPlayer.prototype.getAutoplayCapabilities = function () {
	        return this.appMediator.getAutoplayCapabilities();
	    };
	    VideoPlayer.prototype.suspendPlayback = function () {
	        var _this = this;
	        if (!this.appMediator.isPlaybackSuspended()) {
	            this.pause().then(function () {
	                _this.transmitExtRequest(NotificationName_1.NotificationName.SUSPEND_PLAYBACK);
	            });
	        }
	    };
	    VideoPlayer.prototype.resumePlayback = function () {
	        if (this.appMediator.isPlaybackSuspended()) {
	            this.transmitExtRequest(NotificationName_1.NotificationName.RESUME_PLAYBACK);
	        }
	    };
	    VideoPlayer.prototype.sendEvent = function (name, data) {
	        this.emit(name, data);
	    };
	    VideoPlayer.prototype.sendErrorEvent = function (event) {
	        this.dispatchEvt(event);
	    };
	    VideoPlayer.prototype.addNativePlugins = function (pluginsArray, playerOptions) {
	        var bi = this.facade.retrieveService(ServiceName_1.ServiceName.BuildInfo), ver = bi.playerVersion, pi = playerOptions.nativePlugins;
	        var i = pi && pi.length || 0, cfg;
	        while (i--) {
	            switch (pi[i]) {
	                case NativePlugin_1.NativePlugin.REPLAY:
	                    cfg = AppResources_1.AppResources.nativePluginConfig.replay;
	                    cfg.url = cfg.url.replace('{{VER}}', ver);
	                    pluginsArray.push(AppResources_1.AppResources.nativePluginConfig.replay);
	                    break;
	                case NativePlugin_1.NativePlugin.DIAGNOSTIC:
	                    cfg = AppResources_1.AppResources.nativePluginConfig.diagnostic;
	                    cfg.url = cfg.url.replace('{{VER}}', ver);
	                    pluginsArray.push(AppResources_1.AppResources.nativePluginConfig.diagnostic);
	                    break;
	            }
	        }
	    };
	    Object.defineProperty(VideoPlayer.prototype, "contentPlaybackStateProxy", {
	        get: function () {
	            if (!this.pContentPlaybackStateProxy) {
	                this.pContentPlaybackStateProxy = this.facade.retrieveProxy(ProxyName_1.ProxyName.ContentPlaybackStateProxy);
	            }
	            return this.pContentPlaybackStateProxy;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(VideoPlayer.prototype, "localization", {
	        get: function () {
	            return this.facade.retrieveProxy(ProxyName_1.ProxyName.LocalizationProxy);
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(VideoPlayer.prototype, "dom", {
	        get: function () {
	            return this.facade.retrieveProxy(ProxyName_1.ProxyName.PlayerDomProxy);
	        },
	        enumerable: false,
	        configurable: true
	    });
	    VideoPlayer.prototype.transmitExtRequest = function (name, data) {
	        this.sendNotification(name, data, NotificationType_1.NotificationType.EXTERNAL);
	    };
	    VideoPlayer.prototype.log = function (message, logLevelOverride) {
	        var lv = logLevelOverride ? logLevelOverride : LogLevel_1.LogLevel.DEBUG;
	        this.facade.log(lv, message);
	    };
	    VideoPlayer.prototype.init = function () {
	        var gServices = this.opts.globalServices, logLvl = this.opts.playerOptions.logLevel ? this.opts.playerOptions.logLevel : LogLevel_1.LogLevel.OFF;
	        this.registerGlobalServices(gServices);
	        this.createLoggingService(logLvl);
	        this.createAutoplayCapabilitiesService();
	        this.createApplicationMediator(MediatorName_1.MediatorName.APPLICATION);
	        var sys = gServices[ServiceName_1.ServiceName.System], isWebMaf = sys.isWebMaf, bootCom = isWebMaf ? NotificationName_1.NotificationName.BOOT_WEBMAF_APP : NotificationName_1.NotificationName.BOOT_APP;
	        delete this.opts.globalServices;
	        this.sendNotification(bootCom, {
	            playerOptions: this.opts.playerOptions || null,
	            app: this
	        }, NotificationType_1.NotificationType.INTERNAL);
	    };
	    VideoPlayer.prototype.sendAsyncNotification = function (notification, event, errorEvent) {
	        var _this = this;
	        if (errorEvent === void 0) { errorEvent = []; }
	        return new Promise(function (resolve, reject) {
	            errorEvent.push(PlayerEvent_1.PlayerEvent.FATAL_ERROR);
	            var success = function (event) {
	                remove();
	                resolve(event);
	            };
	            var fail = function (error) {
	                remove();
	                reject(error);
	            };
	            var remove = function () {
	                event.forEach(function (type) { return _this.off(type, success); });
	                errorEvent.forEach(function (type) { return _this.off(type, fail); });
	            };
	            try {
	                event.forEach(function (type) { return _this.on(type, success); });
	                errorEvent.forEach(function (type) { return _this.on(type, fail); });
	                _this.sendNotification(notification.name, notification.body, notification.type);
	            }
	            catch (error) {
	                fail(error);
	            }
	        });
	    };
	    tslib_es6.__decorate([
	        ApiDecorators.apiMethod()
	    ], VideoPlayer.prototype, "hasListenerFor", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiMethod()
	    ], VideoPlayer.prototype, "on", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiMethod()
	    ], VideoPlayer.prototype, "once", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiMethod()
	    ], VideoPlayer.prototype, "off", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiAccessor()
	    ], VideoPlayer.prototype, "isReady", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiAccessor()
	    ], VideoPlayer.prototype, "id", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiAccessor()
	    ], VideoPlayer.prototype, "dimensions", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiAccessor()
	    ], VideoPlayer.prototype, "muted", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiAccessor()
	    ], VideoPlayer.prototype, "volume", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiAccessor()
	    ], VideoPlayer.prototype, "language", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiAccessor()
	    ], VideoPlayer.prototype, "contentTime", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiAccessor()
	    ], VideoPlayer.prototype, "contentDuration", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiAccessor()
	    ], VideoPlayer.prototype, "streamTime", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiAccessor()
	    ], VideoPlayer.prototype, "streamDuration", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiAccessor()
	    ], VideoPlayer.prototype, "playbackState", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiAccessor()
	    ], VideoPlayer.prototype, "playlist", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiAccessor()
	    ], VideoPlayer.prototype, "autoQualitySwitching", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiAccessor()
	    ], VideoPlayer.prototype, "qualityInfo", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiAccessor()
	    ], VideoPlayer.prototype, "bitrate", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiAccessor()
	    ], VideoPlayer.prototype, "qualityCategory", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiAccessor()
	    ], VideoPlayer.prototype, "minBitrate", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiAccessor()
	    ], VideoPlayer.prototype, "maxBitrate", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiAccessor()
	    ], VideoPlayer.prototype, "audioTrackInfo", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiAccessor()
	    ], VideoPlayer.prototype, "audioTrack", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiAccessor()
	    ], VideoPlayer.prototype, "resource", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiAccessor()
	    ], VideoPlayer.prototype, "textTrackEnabled", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiAccessor()
	    ], VideoPlayer.prototype, "textTrack", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiAccessor()
	    ], VideoPlayer.prototype, "textTrackInfo", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiAccessor()
	    ], VideoPlayer.prototype, "streamType", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiAccessor()
	    ], VideoPlayer.prototype, "isPlayingLive", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiAccessor()
	    ], VideoPlayer.prototype, "liveStreamUtcTime", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiAccessor()
	    ], VideoPlayer.prototype, "liveStreamUtcDuration", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiAccessor()
	    ], VideoPlayer.prototype, "isSuspended", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiAccessor()
	    ], VideoPlayer.prototype, "fullscreenElement", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiMethod()
	    ], VideoPlayer.prototype, "enterFullscreen", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiMethod()
	    ], VideoPlayer.prototype, "exitFullscreen", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiMethod()
	    ], VideoPlayer.prototype, "play", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiMethod()
	    ], VideoPlayer.prototype, "pause", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiMethod()
	    ], VideoPlayer.prototype, "togglePlayPause", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiMethod()
	    ], VideoPlayer.prototype, "seek", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiMethod()
	    ], VideoPlayer.prototype, "getModelSnapshot", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiMethod()
	    ], VideoPlayer.prototype, "getAdBreakTimes", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiMethod()
	    ], VideoPlayer.prototype, "grabFrame", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiMethod()
	    ], VideoPlayer.prototype, "getThumbnail", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiMethod()
	    ], VideoPlayer.prototype, "getContainerRect", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiMethod()
	    ], VideoPlayer.prototype, "registerPlugins", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiMethod()
	    ], VideoPlayer.prototype, "removePlugin", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiMethod()
	    ], VideoPlayer.prototype, "getPlugin", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiMethod()
	    ], VideoPlayer.prototype, "stop", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiMethod()
	    ], VideoPlayer.prototype, "goLive", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiMethod()
	    ], VideoPlayer.prototype, "focus", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiMethod()
	    ], VideoPlayer.prototype, "blur", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiMethod()
	    ], VideoPlayer.prototype, "getConfigAsJson", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiMethod()
	    ], VideoPlayer.prototype, "getAutoplayCapabilities", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiMethod()
	    ], VideoPlayer.prototype, "suspendPlayback", null);
	    tslib_es6.__decorate([
	        ApiDecorators.apiMethod()
	    ], VideoPlayer.prototype, "resumePlayback", null);
	    return VideoPlayer;
	}(AbstractApplication_1.AbstractApplication));
	exports.VideoPlayer = VideoPlayer;

	});

	var Shell_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Shell = void 0;










	var Shell = (function () {
	    function Shell() {
	    }
	    Shell.createVideoPlayer = function (options, callback, buildInfo) {
	        if (this.initialized) {
	            this.createVideoPlayerApp({ options: options, callback: callback });
	            return;
	        }
	        else {
	            this.pendingPlayerRequests.push({ options: options, callback: callback });
	        }
	        if (this.initializing === null) {
	            this.initializing = true;
	            this.initialize(buildInfo);
	        }
	    };
	    Shell.createVideoPlayerApp = function (pro) {
	        var c = pro.options.container, sys = this.serviceCollection[ServiceName_1.ServiceName.System];
	        var ok = false;
	        if (sys.isWebMaf) {
	            ok = true;
	        }
	        else if (c !== null && c !== undefined &&
	            (c.constructor === HTMLDivElement ||
	                (typeof c == 'object' && typeof c.getBoundingClientRect === 'function') ||
	                (typeof c == 'string' && document.querySelector(c) != null))) {
	            ok = true;
	        }
	        if (!ok) {
	            var msg = 'Invalid player configuration: Missing presentation container.';
	            Logger_1.Logger.error(msg);
	            pro.callback(null, { message: msg });
	        }
	        var vp = new VideoPlayer_1.VideoPlayer({
	            globalServices: this.serviceCollection,
	            playerOptions: pro.options
	        });
	        this.playerCollection[vp.appId] = vp;
	        vp
	            .initialize()
	            .then(function (api) { return pro.callback(api, null); })
	            .catch(function (error) { return pro.callback(null, error); });
	    };
	    Shell.removeVideoPlayer = function (playerId) {
	        var _this = this;
	        var p = this.playerCollection[playerId];
	        if (!p) {
	            return Promise.resolve();
	        }
	        return p.destroy()
	            .then(function () {
	            delete _this.playerCollection[playerId];
	            Logger_1.Logger.log("[CVP] Player with id " + playerId + " removed.");
	        });
	    };
	    Shell.createResourceConfig = function (config) {
	        return new ResourceConfiguration_1.ResourceConfiguration(config);
	    };
	    Shell.getSysInfoForUser = function () {
	        if (this.serviceCollection === null) {
	            return null;
	        }
	        var info = Util_1.Util.assign({}, System_1.System.info), mc = this.serviceCollection[ServiceName_1.ServiceName.MediaCapabilities].capabilities;
	        info.hasMediaSource = mc.hasMediaSource;
	        info.supportsNativeHls = mc.supportsNativeHls;
	        return info;
	    };
	    Shell.processPending = function () {
	        var n = this.pendingPlayerRequests.length;
	        for (var i = 0; i < n; i++) {
	            this.createVideoPlayerApp(this.pendingPlayerRequests[i]);
	            this.pendingPlayerRequests[i] = null;
	        }
	        this.pendingPlayerRequests = [];
	    };
	    Shell.createServices = function (mediaCaps, buildInfo) {
	        var s = {};
	        s[ServiceName_1.ServiceName.System] = SystemService_1.SystemService.getInstance(ServiceName_1.ServiceName.System);
	        s[ServiceName_1.ServiceName.MediaCapabilities] = MediaCapabilitiesService_1.MediaCapabilitiesService.getInstance(ServiceName_1.ServiceName.MediaCapabilities, mediaCaps);
	        s[ServiceName_1.ServiceName.BuildInfo] = BuildInfoService_1.BuildInfoService.getInstance(ServiceName_1.ServiceName.BuildInfo, buildInfo);
	        this.serviceCollection = s;
	    };
	    Shell.initialize = function (buildInfo) {
	        var _this = this;
	        new MediaCapabilities_1.MediaCapabilities({
	            onComplete: function (e) {
	                _this.createServices(e.target, buildInfo);
	                _this.initialized = true;
	                _this.initializing = false;
	                _this.processPending();
	            }
	        });
	    };
	    Shell.serviceCollection = null;
	    Shell.playerCollection = {};
	    Shell.initialized = false;
	    Shell.initializing = null;
	    Shell.pendingPlayerRequests = [];
	    return Shell;
	}());
	exports.Shell = Shell;

	});

	var LocalizedLanguage_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.LocalizedLanguage = void 0;
	var LocalizedLanguage;
	(function (LocalizedLanguage) {
	    LocalizedLanguage["EN"] = "English";
	    LocalizedLanguage["ES"] = "Espa\u00F1ol";
	    LocalizedLanguage["FR"] = "Fran\u00E7ais";
	    LocalizedLanguage["PT"] = "Portugu\u00EAs";
	    LocalizedLanguage["DE"] = "Deutsche";
	    LocalizedLanguage["PL"] = "Polski";
	    LocalizedLanguage["JA"] = "\u65E5\u672C\u4EBA";
	    LocalizedLanguage["KO"] = "\uD55C\uAD6D\uC5B4";
	    LocalizedLanguage["ZH"] = "\u7B80\u4F53\u4E2D\u6587";
	    LocalizedLanguage["IT"] = "Italiano";
	    LocalizedLanguage["RU"] = "\u0420\u0443\u0441\u0441\u043A\u0438\u0439";
	})(LocalizedLanguage = exports.LocalizedLanguage || (exports.LocalizedLanguage = {}));

	});

	var cvp = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	var es6_object_assign_1 = tslib_es6.__importDefault(es6ObjectAssign);




























	es6_object_assign_1.default.polyfill();
	var bi = (function () {
	    var frag = '{__', i = {
	        env: '{__ENV__}',
	        playerVersion: '{__PLAYER_VER__}',
	        playerName: '{__PLAYER_NAME__}',
	        buildTime: '{__BUILD_TIME__}',
	    };
	    i.playerName = i.playerName.indexOf(frag) < 0 ? i.playerName : 'CBSi Video Player (CVP)';
	    i.playerVersion = i.playerVersion.indexOf(frag) < 0 ? i.playerVersion : '-dev';
	    i.buildTime = i.buildTime.indexOf(frag) < 0 ? i.buildTime : (new Date()).toLocaleDateString();
	    console && console.log(i.playerName + "; Ver. " + i.playerVersion + "  " + i.buildTime);
	    return i;
	}());
	exports.default = {
	    createVideoPlayer: function (options, callback) {
	        var _this = this;
	        return new Promise(function (resolve, reject) {
	            Shell_1.Shell.createVideoPlayer(options, function (player, error) {
	                if (Util_1.Util.isFunction(callback)) {
	                    callback(player, error);
	                }
	                if (error != null) {
	                    reject(error);
	                }
	                else {
	                    resolve(player);
	                }
	            }, _this.buildInfo);
	        });
	    },
	    removeVideoPlayer: function (playerId) {
	        return Shell_1.Shell.removeVideoPlayer(playerId);
	    },
	    createResourceConfig: function (config) {
	        return Shell_1.Shell.createResourceConfig(config);
	    },
	    get buildInfo() {
	        return bi;
	    },
	    get systemInfo() {
	        return Shell_1.Shell.getSysInfoForUser();
	    },
	    core: {
	        BaseClass: BaseClass_1.BaseClass,
	        CoreEvent: CoreEvent_1.CoreEvent,
	        Emitter: Emitter_1.Emitter,
	    },
	    util: {
	        QueryString: QueryString_1.QueryString,
	        Util: tslib_es6.__assign(tslib_es6.__assign({}, Util_1.Util), { request: Request.request, renderThumbnail: ThumbnailTrackSurface_1.ThumbnailTrackSurface.renderThumbnail }),
	    },
	    AdContext: AdContext_1.AdContext,
	    Autoplay: Autoplay_1.Autoplay,
	    Browser: Browser_1.Browser,
	    Device: Device_1.Device,
	    ErrorCode: ErrorCode_1.ErrorCode,
	    KeyboardScope: KeyboardScope_1.KeyboardScope,
	    LocalizationId: LocalizationId_1.LocalizationId,
	    LocalizedLanguage: LocalizedLanguage_1.LocalizedLanguage,
	    LogLevel: LogLevel_1.LogLevel,
	    NativePlugin: NativePlugin_1.NativePlugin,
	    Os: Os_1.Os,
	    PerformanceMode: PerformanceMode_1.PerformanceMode,
	    Platform: Platform_1.Platform,
	    PlaybackAdapterType: PlaybackAdapterType_1.PlaybackAdapterType,
	    PlaybackState: PlaybackState_1.PlaybackState,
	    PlayerEvent: PlayerEvent_1.PlayerEvent,
	    PluginPriority: PluginPriority_1.PluginPriority,
	    QualityCategory: QualityCategory_1.QualityCategory,
	    StreamType: StreamType_1.StreamType,
	};

	});

	return cvp;

})));
try { if (self.cvp && self.cvp.default) self.cvp = self.cvp.default; } catch (error) { console && console.log("Bundle error"); }
//# sourceMappingURL=cvp.js.map
