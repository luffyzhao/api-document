webpackJsonp([0],{

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(243)
}
var normalizeComponent = __webpack_require__(10)
/* script */
var __vue_script__ = __webpack_require__(245)
/* template */
var __vue_template__ = __webpack_require__(263)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\views\\document\\writing.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c25244f0", Component.options)
  } else {
    hotAPI.reload("data-v-c25244f0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 186:
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(203);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(189),
    getRawTag = __webpack_require__(204),
    objectToString = __webpack_require__(205);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(187);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(186),
    isSymbol = __webpack_require__(209);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(186),
    now = __webpack_require__(212),
    toNumber = __webpack_require__(190);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(193)
}
var normalizeComponent = __webpack_require__(10)
/* script */
var __vue_script__ = __webpack_require__(195)
/* template */
var __vue_template__ = __webpack_require__(225)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\markdown.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9af28074", Component.options)
  } else {
    hotAPI.reload("data-v-9af28074", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(194);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(14)("60d3588d", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/_css-loader@0.28.9@css-loader/index.js!../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9af28074\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./markdown.vue", function() {
     var newContent = require("!!../../../../node_modules/_css-loader@0.28.9@css-loader/index.js!../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9af28074\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./markdown.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "\n.markdown-editor {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\n}\n.markdown-textarea,\r\n.markdown-preview {\r\n  vertical-align: top;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  -webkit-box-flex: 0;\r\n      -ms-flex: 0 0 50%;\r\n          flex: 0 0 50%;\r\n  overflow: auto;\r\n  padding: 10px;\n}\n.markdown-textarea {\r\n  border: none;\r\n  background-color: #f6f6f6;\r\n  font-size: 12px;\r\n  font-family: 'Monaco', courier, monospace;\r\n  outline: none;\r\n  line-height: 2;\n}\n.markdown-preview{\r\n  border-left: 1px solid #ccc;\n}\n.editormd-preview {\r\n  display: block;\r\n  width: 100%;\n}\n.markdown-preview ul{\r\n  list-style-type: disc;\n}\n.markdown-preview ol{\r\n  list-style-type: decimal;\n}\r\n\r\n\r\n", ""]);

// exports


/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contenteditable__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contenteditable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__contenteditable__);



/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      innerText: this.value
    };
  },
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  computed: {},
  components: {
    markdown: __WEBPACK_IMPORTED_MODULE_0__contenteditable___default.a // 声明mardown组件
  },
  methods: {
    childEventHandler: function (res) {
      this.$emit('input', res);
    }
  }
});

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(197)
}
var normalizeComponent = __webpack_require__(10)
/* script */
var __vue_script__ = __webpack_require__(199)
/* template */
var __vue_template__ = __webpack_require__(224)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\contenteditable.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-782c9156", Component.options)
  } else {
    hotAPI.reload("data-v-782c9156", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(198);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(14)("144c2eeb", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/_css-loader@0.28.9@css-loader/index.js!../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-782c9156\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/_sass-loader@6.0.6@sass-loader/lib/loader.js!../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./contenteditable.vue", function() {
     var newContent = require("!!../../../../node_modules/_css-loader@0.28.9@css-loader/index.js!../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-782c9156\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/_sass-loader@6.0.6@sass-loader/lib/loader.js!../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./contenteditable.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "\n.mdContainer {\n  width: 100%;\n  height: 100%;\n  background: lightblue;\n}\n.mdContainer.fullPage {\n    position: fixed;\n    z-index: 1000;\n    left: 0;\n    top: 0;\n}\n.mdContainer .navContainer {\n    width: 100%;\n    height: 36px;\n    background: #fff;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    border-bottom: 1px solid #eee;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding: 0 10px;\n}\n.mdContainer .navContainer .nameContainer {\n      color: lightblue;\n      margin-right: 10px;\n      cursor: pointer;\n}\n.mdContainer .navContainer .markContainer {\n      width: auto;\n      height: 100%;\n      margin-left: 0px;\n}\n.mdContainer .navContainer .markContainer ul.markListGroup {\n        height: 100%;\n        width: auto;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: start;\n            -ms-flex-pack: start;\n                justify-content: flex-start;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n}\n.mdContainer .navContainer .markContainer ul.markListGroup li.markListItem {\n          list-style: none;\n          width: 20px;\n          height: 20px;\n          margin: 0 2px;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          cursor: pointer;\n          font-size: 12px;\n          color: #333;\n}\n.mdContainer .navContainer .markContainer ul.markListGroup li.markListItem:hover {\n            background: #eee;\n}\n.mdContainer .mdBodyContainer {\n    width: 100%;\n    height: calc(100% - 36px);\n    background: #fff;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n.mdContainer .mdBodyContainer.noMenu {\n      height: 100%;\n}\n.editContainer {\n  height: 100%;\n  width: 100%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  border-right: 1px solid #ddd;\n  background: #333;\n  color: #fff;\n  padding: 10px;\n}\n.editContainer .mdEditor {\n    height: 100%;\n    width: 100%;\n    background: transparent;\n    outline: none;\n    color: #fff;\n    resize: none;\n}\n.previewContainer {\n  width: 100%;\n  height: 100%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  background: #fff;\n  overflow: auto;\n  padding: 10px;\n}\n", ""]);

// exports


/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_marked__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_marked___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_marked__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_scroll__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__libs_rangeFn__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__libs_rangeFn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__libs_rangeFn__);






__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_2_vue_scroll__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_1_marked___default.a.setOptions({
    renderer: new __WEBPACK_IMPORTED_MODULE_1_marked___default.a.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false
});

function insertContent(val, that) {
    let textareaDom = document.querySelector('.mdEditor');
    let value = textareaDom.value;
    let point = __WEBPACK_IMPORTED_MODULE_3__libs_rangeFn___default.a.getCursortPosition(textareaDom);
    let lastChart = value.substring(point - 1, point);
    let lastFourCharts = value.substring(point - 4, point);
    if (lastChart != '\n' && value != '' && lastFourCharts != '    ') {
        val = '\n' + val;
        __WEBPACK_IMPORTED_MODULE_3__libs_rangeFn___default.a.insertAfterText(textareaDom, val);
    } else {
        __WEBPACK_IMPORTED_MODULE_3__libs_rangeFn___default.a.insertAfterText(textareaDom, val);
    }
    that.input = document.querySelector('.mdEditor').value;
}
/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'markdown',
    props: ['mdValuesP', 'fullPageStatusP', 'editStatusP', 'previewStatusP', 'navStatusP', 'icoStatusP'],
    data() {
        return {
            input: this.MdValue(),
            editStatus: Boolean(this.editStatusP),
            previewStatus: Boolean(this.previewStatusP),
            fullPageStatus: Boolean(this.fullPageStatusP),
            navStatus: Boolean(this.navStatusP),
            icoStatus: Boolean(this.icoStatusP),
            maxEditScrollHeight: 0,
            maxPreviewScrollHeight: 0
        };
    },
    created: function () {
        if (!this.editStatus && !this.previewStatus) {
            this.editStatus = true;
            this.previewStatus = true;
        }
    },
    methods: {
        tabFn: function (evt) {
            insertContent("    ", this);
            // 屏蔽屌tab切换事件
            if (evt.preventDefault) {
                evt.preventDefault();
            } else {
                evt.returnValue = false;
            }
        },
        addImage: function (evt) {
            insertContent("![Vue](https://cn.vuejs.org/images/logo.png)", this);
        },
        addHTitle: function (index) {
            let tmp = '';
            switch (index) {
                case 1:
                    tmp = '# ';
                    break;
                case 2:
                    tmp = '## ';
                    break;
                case 3:
                    tmp = '### ';
                    break;
                case 4:
                    tmp = '#### ';
                    break;
                case 5:
                    tmp = '##### ';
                    break;
                case 6:
                    tmp = '###### ';
                    break;
                default:
                    break;
            }
            insertContent(tmp, this);
        },
        addCode: function () {
            let textareaDom = document.querySelector('.mdEditor');
            let value = textareaDom.value;
            let point = __WEBPACK_IMPORTED_MODULE_3__libs_rangeFn___default.a.getCursortPosition(textareaDom);
            let lastChart = value.substring(point - 1, point);
            insertContent('```\n\n```', this);
            if (lastChart != '\n' && value != '') {
                __WEBPACK_IMPORTED_MODULE_3__libs_rangeFn___default.a.setCaretPosition(textareaDom, point + 5);
            } else {
                __WEBPACK_IMPORTED_MODULE_3__libs_rangeFn___default.a.setCaretPosition(textareaDom, point + 4);
            }
        },
        addStrikethrough: function () {
            let textareaDom = document.querySelector('.mdEditor');
            let value = textareaDom.value;
            let point = __WEBPACK_IMPORTED_MODULE_3__libs_rangeFn___default.a.getCursortPosition(textareaDom);
            let lastChart = value.substring(point - 1, point);
            insertContent('~~~~', this);
            if (lastChart != '\n' && value != '') {
                __WEBPACK_IMPORTED_MODULE_3__libs_rangeFn___default.a.setCaretPosition(textareaDom, point + 3);
            } else {
                __WEBPACK_IMPORTED_MODULE_3__libs_rangeFn___default.a.setCaretPosition(textareaDom, point + 2);
            }
        },
        addStrong: function () {
            let textareaDom = document.querySelector('.mdEditor');
            let value = textareaDom.value;
            let point = __WEBPACK_IMPORTED_MODULE_3__libs_rangeFn___default.a.getCursortPosition(textareaDom);
            let lastChart = value.substring(point - 1, point);
            insertContent('****', this);
            if (lastChart != '\n' && value != '') {
                __WEBPACK_IMPORTED_MODULE_3__libs_rangeFn___default.a.setCaretPosition(textareaDom, point + 3);
            } else {
                __WEBPACK_IMPORTED_MODULE_3__libs_rangeFn___default.a.setCaretPosition(textareaDom, point + 2);
            }
        },
        addItalic: function () {
            let textareaDom = document.querySelector('.mdEditor');
            let value = textareaDom.value;
            let point = __WEBPACK_IMPORTED_MODULE_3__libs_rangeFn___default.a.getCursortPosition(textareaDom);
            let lastChart = value.substring(point - 1, point);
            insertContent('**', this);
            if (lastChart != '\n' && value != '') {
                __WEBPACK_IMPORTED_MODULE_3__libs_rangeFn___default.a.setCaretPosition(textareaDom, point + 2);
            } else {
                __WEBPACK_IMPORTED_MODULE_3__libs_rangeFn___default.a.setCaretPosition(textareaDom, point + 1);
            }
        },
        setStrong: function () {
            let textareaDom = document.querySelector('.mdEditor');
            let point = __WEBPACK_IMPORTED_MODULE_3__libs_rangeFn___default.a.getCursortPosition(textareaDom);
        },
        addLine: function () {
            insertContent('\n----\n', this);
        },
        addLink: function () {
            insertContent("[Vue](https://cn.vuejs.org/images/logo.png)", this);
        },
        addQuote: function () {
            let textareaDom = document.querySelector('.mdEditor');
            let value = textareaDom.value;
            let point = __WEBPACK_IMPORTED_MODULE_3__libs_rangeFn___default.a.getCursortPosition(textareaDom);
            let lastChart = value.substring(point - 1, point);
            insertContent('> ', this);
            if (lastChart != '\n' && value != '') {
                __WEBPACK_IMPORTED_MODULE_3__libs_rangeFn___default.a.setCaretPosition(textareaDom, point + 3);
            } else {
                __WEBPACK_IMPORTED_MODULE_3__libs_rangeFn___default.a.setCaretPosition(textareaDom, point + 2);
            }
        },
        addTable: function () {
            insertContent('\nheader 1 | header 2\n', this);
            insertContent('---|---\n', this);
            insertContent('row 1 col 1 | row 1 col 2\n', this);
            insertContent('row 2 col 1 | row 2 col 2\n\n', this);
        },
        addUl: function () {
            insertContent('* ', this);
        },
        addOl: function () {
            insertContent('1. ', this);
        },
        previewFn: function () {
            if (!this.editStatus) {
                this.editStatus = true;
                this.previewStatus = !this.previewStatus;
            } else {
                this.previewStatus = !this.previewStatus;
            }
        },
        previewAllFn: function () {
            if (!this.editStatus && this.previewStatus) {
                this.editStatus = true;
                this.previewStatus = true;
            } else {
                this.editStatus = false;
                this.previewStatus = true;
            }
        },
        fullPageFn: function () {
            this.fullPageStatus = !this.fullPageStatus;
            let maxEditScrollHeight = document.querySelector('.mdEditor').scrollHeight - document.querySelector('.mdEditor').clientHeight;
            let maxPreviewScrollHeight = document.querySelector('.previewContainer').scrollHeight - document.querySelector('.previewContainer').clientHeight;
            this.maxEditScrollHeight = maxEditScrollHeight;
            this.maxPreviewScrollHeight = maxPreviewScrollHeight;
        },
        previewScroll: function (e, position) {
            if (this.maxEditScrollHeight !== 0) {
                let topPercent = position.scrollTop / this.maxPreviewScrollHeight;
                document.querySelector('.mdEditor').scrollTop = this.maxEditScrollHeight * topPercent;
            }
        },
        editScroll: function (e, position) {
            if (this.maxPreviewScrollHeight !== 0) {
                let topPercent = position.scrollTop / this.maxEditScrollHeight;
                document.querySelector('.previewContainer').scrollTop = this.maxPreviewScrollHeight * topPercent;
            }
        },
        happyDay: function () {
            window.open('https://github.com/ovenslove/vue-mdEditor');
        },
        MdValue() {
            return this.mdValuesP || '';
        }
    },
    computed: {
        compiledMarkdown: function () {
            return __WEBPACK_IMPORTED_MODULE_1_marked___default()(this.input, {
                sanitize: true
            });
        }
    },
    watch: {
        input: function () {
            let data = {};
            data.mdValue = this.input;
            data.htmlValue = __WEBPACK_IMPORTED_MODULE_1_marked___default()(this.input, {
                sanitize: true
            });
            this.$emit('childevent', data);
            let maxEditScrollHeight = document.querySelector('.mdEditor').scrollHeight - document.querySelector('.mdEditor').clientHeight;
            let maxPreviewScrollHeight = document.querySelector('.previewContainer').scrollHeight - document.querySelector('.previewContainer').clientHeight;
            this.maxEditScrollHeight = maxEditScrollHeight;
            this.maxPreviewScrollHeight = maxPreviewScrollHeight;
        }
    }
});

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * marked - a markdown parser
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/markedjs/marked
 */

;(function(root) {
'use strict';

/**
 * Block-Level Grammar
 */

var block = {
  newline: /^\n+/,
  code: /^( {4}[^\n]+\n*)+/,
  fences: noop,
  hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
  heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
  nptable: noop,
  blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
  list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
  html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
  def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
  table: noop,
  lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
  paragraph: /^([^\n]+(?:\n?(?!hr|heading|lheading| {0,3}>|tag)[^\n]+)+)/,
  text: /^[^\n]+/
};

block._label = /(?:\\[\[\]]|[^\[\]])+/;
block._title = /(?:"(?:\\"|[^"]|"[^"\n]*")*"|'\n?(?:[^'\n]+\n?)*'|\([^()]*\))/;
block.def = edit(block.def)
  .replace('label', block._label)
  .replace('title', block._title)
  .getRegex();

block.bullet = /(?:[*+-]|\d+\.)/;
block.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;
block.item = edit(block.item, 'gm')
  .replace(/bull/g, block.bullet)
  .getRegex();

block.list = edit(block.list)
  .replace(/bull/g, block.bullet)
  .replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))')
  .replace('def', '\\n+(?=' + block.def.source + ')')
  .getRegex();

block._tag = '(?!(?:'
  + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code'
  + '|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo'
  + '|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b';

block.html = edit(block.html)
  .replace('comment', /<!--[\s\S]*?-->/)
  .replace('closed', /<(tag)[\s\S]+?<\/\1>/)
  .replace('closing', /<tag(?:"[^"]*"|'[^']*'|\s[^'"\/>\s]*)*?\/?>/)
  .replace(/tag/g, block._tag)
  .getRegex();

block.paragraph = edit(block.paragraph)
  .replace('hr', block.hr)
  .replace('heading', block.heading)
  .replace('lheading', block.lheading)
  .replace('tag', '<' + block._tag)
  .getRegex();

block.blockquote = edit(block.blockquote)
  .replace('paragraph', block.paragraph)
  .getRegex();

/**
 * Normal Block Grammar
 */

block.normal = merge({}, block);

/**
 * GFM Block Grammar
 */

block.gfm = merge({}, block.normal, {
  fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\n? *\1 *(?:\n+|$)/,
  paragraph: /^/,
  heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
});

block.gfm.paragraph = edit(block.paragraph)
  .replace('(?!', '(?!'
    + block.gfm.fences.source.replace('\\1', '\\2') + '|'
    + block.list.source.replace('\\1', '\\3') + '|')
  .getRegex();

/**
 * GFM + Tables Block Grammar
 */

block.tables = merge({}, block.gfm, {
  nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
  table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
});

/**
 * Block Lexer
 */

function Lexer(options) {
  this.tokens = [];
  this.tokens.links = {};
  this.options = options || marked.defaults;
  this.rules = block.normal;

  if (this.options.gfm) {
    if (this.options.tables) {
      this.rules = block.tables;
    } else {
      this.rules = block.gfm;
    }
  }
}

/**
 * Expose Block Rules
 */

Lexer.rules = block;

/**
 * Static Lex Method
 */

Lexer.lex = function(src, options) {
  var lexer = new Lexer(options);
  return lexer.lex(src);
};

/**
 * Preprocessing
 */

Lexer.prototype.lex = function(src) {
  src = src
    .replace(/\r\n|\r/g, '\n')
    .replace(/\t/g, '    ')
    .replace(/\u00a0/g, ' ')
    .replace(/\u2424/g, '\n');

  return this.token(src, true);
};

/**
 * Lexing
 */

Lexer.prototype.token = function(src, top) {
  src = src.replace(/^ +$/gm, '');
  var next,
      loose,
      cap,
      bull,
      b,
      item,
      space,
      i,
      tag,
      l,
      isordered;

  while (src) {
    // newline
    if (cap = this.rules.newline.exec(src)) {
      src = src.substring(cap[0].length);
      if (cap[0].length > 1) {
        this.tokens.push({
          type: 'space'
        });
      }
    }

    // code
    if (cap = this.rules.code.exec(src)) {
      src = src.substring(cap[0].length);
      cap = cap[0].replace(/^ {4}/gm, '');
      this.tokens.push({
        type: 'code',
        text: !this.options.pedantic
          ? cap.replace(/\n+$/, '')
          : cap
      });
      continue;
    }

    // fences (gfm)
    if (cap = this.rules.fences.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'code',
        lang: cap[2],
        text: cap[3] || ''
      });
      continue;
    }

    // heading
    if (cap = this.rules.heading.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'heading',
        depth: cap[1].length,
        text: cap[2]
      });
      continue;
    }

    // table no leading pipe (gfm)
    if (top && (cap = this.rules.nptable.exec(src))) {
      src = src.substring(cap[0].length);

      item = {
        type: 'table',
        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        cells: cap[3].replace(/\n$/, '').split('\n')
      };

      for (i = 0; i < item.align.length; i++) {
        if (/^ *-+: *$/.test(item.align[i])) {
          item.align[i] = 'right';
        } else if (/^ *:-+: *$/.test(item.align[i])) {
          item.align[i] = 'center';
        } else if (/^ *:-+ *$/.test(item.align[i])) {
          item.align[i] = 'left';
        } else {
          item.align[i] = null;
        }
      }

      for (i = 0; i < item.cells.length; i++) {
        item.cells[i] = item.cells[i].split(/ *\| */);
      }

      this.tokens.push(item);

      continue;
    }

    // hr
    if (cap = this.rules.hr.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'hr'
      });
      continue;
    }

    // blockquote
    if (cap = this.rules.blockquote.exec(src)) {
      src = src.substring(cap[0].length);

      this.tokens.push({
        type: 'blockquote_start'
      });

      cap = cap[0].replace(/^ *> ?/gm, '');

      // Pass `top` to keep the current
      // "toplevel" state. This is exactly
      // how markdown.pl works.
      this.token(cap, top);

      this.tokens.push({
        type: 'blockquote_end'
      });

      continue;
    }

    // list
    if (cap = this.rules.list.exec(src)) {
      src = src.substring(cap[0].length);
      bull = cap[2];
      isordered = bull.length > 1;

      this.tokens.push({
        type: 'list_start',
        ordered: isordered,
        start: isordered ? +bull : ''
      });

      // Get each top-level item.
      cap = cap[0].match(this.rules.item);

      next = false;
      l = cap.length;
      i = 0;

      for (; i < l; i++) {
        item = cap[i];

        // Remove the list item's bullet
        // so it is seen as the next token.
        space = item.length;
        item = item.replace(/^ *([*+-]|\d+\.) +/, '');

        // Outdent whatever the
        // list item contains. Hacky.
        if (~item.indexOf('\n ')) {
          space -= item.length;
          item = !this.options.pedantic
            ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '')
            : item.replace(/^ {1,4}/gm, '');
        }

        // Determine whether the next list item belongs here.
        // Backpedal if it does not belong in this list.
        if (this.options.smartLists && i !== l - 1) {
          b = block.bullet.exec(cap[i + 1])[0];
          if (bull !== b && !(bull.length > 1 && b.length > 1)) {
            src = cap.slice(i + 1).join('\n') + src;
            i = l - 1;
          }
        }

        // Determine whether item is loose or not.
        // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
        // for discount behavior.
        loose = next || /\n\n(?!\s*$)/.test(item);
        if (i !== l - 1) {
          next = item.charAt(item.length - 1) === '\n';
          if (!loose) loose = next;
        }

        this.tokens.push({
          type: loose
            ? 'loose_item_start'
            : 'list_item_start'
        });

        // Recurse.
        this.token(item, false);

        this.tokens.push({
          type: 'list_item_end'
        });
      }

      this.tokens.push({
        type: 'list_end'
      });

      continue;
    }

    // html
    if (cap = this.rules.html.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: this.options.sanitize
          ? 'paragraph'
          : 'html',
        pre: !this.options.sanitizer
          && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
        text: cap[0]
      });
      continue;
    }

    // def
    if (top && (cap = this.rules.def.exec(src))) {
      src = src.substring(cap[0].length);
      if (cap[3]) cap[3] = cap[3].substring(1, cap[3].length - 1);
      tag = cap[1].toLowerCase();
      if (!this.tokens.links[tag]) {
        this.tokens.links[tag] = {
          href: cap[2],
          title: cap[3]
        };
      }
      continue;
    }

    // table (gfm)
    if (top && (cap = this.rules.table.exec(src))) {
      src = src.substring(cap[0].length);

      item = {
        type: 'table',
        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        cells: cap[3].replace(/(?: *\| *)?\n$/, '').split('\n')
      };

      for (i = 0; i < item.align.length; i++) {
        if (/^ *-+: *$/.test(item.align[i])) {
          item.align[i] = 'right';
        } else if (/^ *:-+: *$/.test(item.align[i])) {
          item.align[i] = 'center';
        } else if (/^ *:-+ *$/.test(item.align[i])) {
          item.align[i] = 'left';
        } else {
          item.align[i] = null;
        }
      }

      for (i = 0; i < item.cells.length; i++) {
        item.cells[i] = item.cells[i]
          .replace(/^ *\| *| *\| *$/g, '')
          .split(/ *\| */);
      }

      this.tokens.push(item);

      continue;
    }

    // lheading
    if (cap = this.rules.lheading.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'heading',
        depth: cap[2] === '=' ? 1 : 2,
        text: cap[1]
      });
      continue;
    }

    // top-level paragraph
    if (top && (cap = this.rules.paragraph.exec(src))) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'paragraph',
        text: cap[1].charAt(cap[1].length - 1) === '\n'
          ? cap[1].slice(0, -1)
          : cap[1]
      });
      continue;
    }

    // text
    if (cap = this.rules.text.exec(src)) {
      // Top-level should never reach here.
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'text',
        text: cap[0]
      });
      continue;
    }

    if (src) {
      throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
    }
  }

  return this.tokens;
};

/**
 * Inline-Level Grammar
 */

var inline = {
  escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: noop,
  tag: /^<!--[\s\S]*?-->|^<\/?[a-zA-Z0-9\-]+(?:"[^"]*"|'[^']*'|\s[^<'">\/\s]*)*?\/?>/,
  link: /^!?\[(inside)\]\(href\)/,
  reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
  nolink: /^!?\[((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\]/,
  strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
  em: /^_([^\s_](?:[^_]|__)+?[^\s_])_\b|^\*((?:\*\*|[^*])+?)\*(?!\*)/,
  code: /^(`+)\s*([\s\S]*?[^`]?)\s*\1(?!`)/,
  br: /^ {2,}\n(?!\s*$)/,
  del: noop,
  text: /^[\s\S]+?(?=[\\<!\[`*]|\b_| {2,}\n|$)/
};

inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;

inline.autolink = edit(inline.autolink)
  .replace('scheme', inline._scheme)
  .replace('email', inline._email)
  .getRegex()

inline._inside = /(?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]]|\](?=[^\[]*\]))*/;
inline._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;

inline.link = edit(inline.link)
  .replace('inside', inline._inside)
  .replace('href', inline._href)
  .getRegex();

inline.reflink = edit(inline.reflink)
  .replace('inside', inline._inside)
  .getRegex();

/**
 * Normal Inline Grammar
 */

inline.normal = merge({}, inline);

/**
 * Pedantic Inline Grammar
 */

inline.pedantic = merge({}, inline.normal, {
  strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
  em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
});

/**
 * GFM Inline Grammar
 */

inline.gfm = merge({}, inline.normal, {
  escape: edit(inline.escape).replace('])', '~|])').getRegex(),
  url: edit(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/)
    .replace('email', inline._email)
    .getRegex(),
  _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
  del: /^~~(?=\S)([\s\S]*?\S)~~/,
  text: edit(inline.text)
    .replace(']|', '~]|')
    .replace('|', '|https?://|ftp://|www\\.|[a-zA-Z0-9.!#$%&\'*+/=?^_`{\\|}~-]+@|')
    .getRegex()
});

/**
 * GFM + Line Breaks Inline Grammar
 */

inline.breaks = merge({}, inline.gfm, {
  br: edit(inline.br).replace('{2,}', '*').getRegex(),
  text: edit(inline.gfm.text).replace('{2,}', '*').getRegex()
});

/**
 * Inline Lexer & Compiler
 */

function InlineLexer(links, options) {
  this.options = options || marked.defaults;
  this.links = links;
  this.rules = inline.normal;
  this.renderer = this.options.renderer || new Renderer();
  this.renderer.options = this.options;

  if (!this.links) {
    throw new Error('Tokens array requires a `links` property.');
  }

  if (this.options.gfm) {
    if (this.options.breaks) {
      this.rules = inline.breaks;
    } else {
      this.rules = inline.gfm;
    }
  } else if (this.options.pedantic) {
    this.rules = inline.pedantic;
  }
}

/**
 * Expose Inline Rules
 */

InlineLexer.rules = inline;

/**
 * Static Lexing/Compiling Method
 */

InlineLexer.output = function(src, links, options) {
  var inline = new InlineLexer(links, options);
  return inline.output(src);
};

/**
 * Lexing/Compiling
 */

InlineLexer.prototype.output = function(src) {
  var out = '',
      link,
      text,
      href,
      cap;

  while (src) {
    // escape
    if (cap = this.rules.escape.exec(src)) {
      src = src.substring(cap[0].length);
      out += cap[1];
      continue;
    }

    // autolink
    if (cap = this.rules.autolink.exec(src)) {
      src = src.substring(cap[0].length);
      if (cap[2] === '@') {
        text = escape(this.mangle(cap[1]));
        href = 'mailto:' + text;
      } else {
        text = escape(cap[1]);
        href = text;
      }
      out += this.renderer.link(href, null, text);
      continue;
    }

    // url (gfm)
    if (!this.inLink && (cap = this.rules.url.exec(src))) {
      cap[0] = this.rules._backpedal.exec(cap[0])[0];
      src = src.substring(cap[0].length);
      if (cap[2] === '@') {
        text = escape(cap[0]);
        href = 'mailto:' + text;
      } else {
        text = escape(cap[0]);
        if (cap[1] === 'www.') {
          href = 'http://' + text;
        } else {
          href = text;
        }
      }
      out += this.renderer.link(href, null, text);
      continue;
    }

    // tag
    if (cap = this.rules.tag.exec(src)) {
      if (!this.inLink && /^<a /i.test(cap[0])) {
        this.inLink = true;
      } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
        this.inLink = false;
      }
      src = src.substring(cap[0].length);
      out += this.options.sanitize
        ? this.options.sanitizer
          ? this.options.sanitizer(cap[0])
          : escape(cap[0])
        : cap[0]
      continue;
    }

    // link
    if (cap = this.rules.link.exec(src)) {
      src = src.substring(cap[0].length);
      this.inLink = true;
      out += this.outputLink(cap, {
        href: cap[2],
        title: cap[3]
      });
      this.inLink = false;
      continue;
    }

    // reflink, nolink
    if ((cap = this.rules.reflink.exec(src))
        || (cap = this.rules.nolink.exec(src))) {
      src = src.substring(cap[0].length);
      link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
      link = this.links[link.toLowerCase()];
      if (!link || !link.href) {
        out += cap[0].charAt(0);
        src = cap[0].substring(1) + src;
        continue;
      }
      this.inLink = true;
      out += this.outputLink(cap, link);
      this.inLink = false;
      continue;
    }

    // strong
    if (cap = this.rules.strong.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.strong(this.output(cap[2] || cap[1]));
      continue;
    }

    // em
    if (cap = this.rules.em.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.em(this.output(cap[2] || cap[1]));
      continue;
    }

    // code
    if (cap = this.rules.code.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.codespan(escape(cap[2].trim(), true));
      continue;
    }

    // br
    if (cap = this.rules.br.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.br();
      continue;
    }

    // del (gfm)
    if (cap = this.rules.del.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.del(this.output(cap[1]));
      continue;
    }

    // text
    if (cap = this.rules.text.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.text(escape(this.smartypants(cap[0])));
      continue;
    }

    if (src) {
      throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
    }
  }

  return out;
};

/**
 * Compile Link
 */

InlineLexer.prototype.outputLink = function(cap, link) {
  var href = escape(link.href),
      title = link.title ? escape(link.title) : null;

  return cap[0].charAt(0) !== '!'
    ? this.renderer.link(href, title, this.output(cap[1]))
    : this.renderer.image(href, title, escape(cap[1]));
};

/**
 * Smartypants Transformations
 */

InlineLexer.prototype.smartypants = function(text) {
  if (!this.options.smartypants) return text;
  return text
    // em-dashes
    .replace(/---/g, '\u2014')
    // en-dashes
    .replace(/--/g, '\u2013')
    // opening singles
    .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
    // closing singles & apostrophes
    .replace(/'/g, '\u2019')
    // opening doubles
    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
    // closing doubles
    .replace(/"/g, '\u201d')
    // ellipses
    .replace(/\.{3}/g, '\u2026');
};

/**
 * Mangle Links
 */

InlineLexer.prototype.mangle = function(text) {
  if (!this.options.mangle) return text;
  var out = '',
      l = text.length,
      i = 0,
      ch;

  for (; i < l; i++) {
    ch = text.charCodeAt(i);
    if (Math.random() > 0.5) {
      ch = 'x' + ch.toString(16);
    }
    out += '&#' + ch + ';';
  }

  return out;
};

/**
 * Renderer
 */

function Renderer(options) {
  this.options = options || {};
}

Renderer.prototype.code = function(code, lang, escaped) {
  if (this.options.highlight) {
    var out = this.options.highlight(code, lang);
    if (out != null && out !== code) {
      escaped = true;
      code = out;
    }
  }

  if (!lang) {
    return '<pre><code>'
      + (escaped ? code : escape(code, true))
      + '\n</code></pre>';
  }

  return '<pre><code class="'
    + this.options.langPrefix
    + escape(lang, true)
    + '">'
    + (escaped ? code : escape(code, true))
    + '\n</code></pre>\n';
};

Renderer.prototype.blockquote = function(quote) {
  return '<blockquote>\n' + quote + '</blockquote>\n';
};

Renderer.prototype.html = function(html) {
  return html;
};

Renderer.prototype.heading = function(text, level, raw) {
  return '<h'
    + level
    + ' id="'
    + this.options.headerPrefix
    + raw.toLowerCase().replace(/[^\w]+/g, '-')
    + '">'
    + text
    + '</h'
    + level
    + '>\n';
};

Renderer.prototype.hr = function() {
  return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
};

Renderer.prototype.list = function(body, ordered, start) {
  var type = ordered ? 'ol' : 'ul',
      startatt = (ordered && start !== 1) ? (' start="' + start + '"') : '';
  return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
};

Renderer.prototype.listitem = function(text) {
  return '<li>' + text + '</li>\n';
};

Renderer.prototype.paragraph = function(text) {
  return '<p>' + text + '</p>\n';
};

Renderer.prototype.table = function(header, body) {
  return '<table>\n'
    + '<thead>\n'
    + header
    + '</thead>\n'
    + '<tbody>\n'
    + body
    + '</tbody>\n'
    + '</table>\n';
};

Renderer.prototype.tablerow = function(content) {
  return '<tr>\n' + content + '</tr>\n';
};

Renderer.prototype.tablecell = function(content, flags) {
  var type = flags.header ? 'th' : 'td';
  var tag = flags.align
    ? '<' + type + ' style="text-align:' + flags.align + '">'
    : '<' + type + '>';
  return tag + content + '</' + type + '>\n';
};

// span level renderer
Renderer.prototype.strong = function(text) {
  return '<strong>' + text + '</strong>';
};

Renderer.prototype.em = function(text) {
  return '<em>' + text + '</em>';
};

Renderer.prototype.codespan = function(text) {
  return '<code>' + text + '</code>';
};

Renderer.prototype.br = function() {
  return this.options.xhtml ? '<br/>' : '<br>';
};

Renderer.prototype.del = function(text) {
  return '<del>' + text + '</del>';
};

Renderer.prototype.link = function(href, title, text) {
  if (this.options.sanitize) {
    try {
      var prot = decodeURIComponent(unescape(href))
        .replace(/[^\w:]/g, '')
        .toLowerCase();
    } catch (e) {
      return text;
    }
    if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
      return text;
    }
  }
  if (this.options.baseUrl && !originIndependentUrl.test(href)) {
    href = resolveUrl(this.options.baseUrl, href);
  }
  var out = '<a href="' + href + '"';
  if (title) {
    out += ' title="' + title + '"';
  }
  out += '>' + text + '</a>';
  return out;
};

Renderer.prototype.image = function(href, title, text) {
  if (this.options.baseUrl && !originIndependentUrl.test(href)) {
    href = resolveUrl(this.options.baseUrl, href);
  }
  var out = '<img src="' + href + '" alt="' + text + '"';
  if (title) {
    out += ' title="' + title + '"';
  }
  out += this.options.xhtml ? '/>' : '>';
  return out;
};

Renderer.prototype.text = function(text) {
  return text;
};

/**
 * TextRenderer
 * returns only the textual part of the token
 */

function TextRenderer() {}

// no need for block level renderers

TextRenderer.prototype.strong =
TextRenderer.prototype.em =
TextRenderer.prototype.codespan =
TextRenderer.prototype.del =
TextRenderer.prototype.text = function (text) {
  return text;
}

TextRenderer.prototype.link =
TextRenderer.prototype.image = function(href, title, text) {
  return '' + text;
}

TextRenderer.prototype.br = function() {
  return '';
}

/**
 * Parsing & Compiling
 */

function Parser(options) {
  this.tokens = [];
  this.token = null;
  this.options = options || marked.defaults;
  this.options.renderer = this.options.renderer || new Renderer();
  this.renderer = this.options.renderer;
  this.renderer.options = this.options;
}

/**
 * Static Parse Method
 */

Parser.parse = function(src, options) {
  var parser = new Parser(options);
  return parser.parse(src);
};

/**
 * Parse Loop
 */

Parser.prototype.parse = function(src) {
  this.inline = new InlineLexer(src.links, this.options);
  // use an InlineLexer with a TextRenderer to extract pure text
  this.inlineText = new InlineLexer(
    src.links,
    merge({}, this.options, {renderer: new TextRenderer()})
  );
  this.tokens = src.reverse();

  var out = '';
  while (this.next()) {
    out += this.tok();
  }

  return out;
};

/**
 * Next Token
 */

Parser.prototype.next = function() {
  return this.token = this.tokens.pop();
};

/**
 * Preview Next Token
 */

Parser.prototype.peek = function() {
  return this.tokens[this.tokens.length - 1] || 0;
};

/**
 * Parse Text Tokens
 */

Parser.prototype.parseText = function() {
  var body = this.token.text;

  while (this.peek().type === 'text') {
    body += '\n' + this.next().text;
  }

  return this.inline.output(body);
};

/**
 * Parse Current Token
 */

Parser.prototype.tok = function() {
  switch (this.token.type) {
    case 'space': {
      return '';
    }
    case 'hr': {
      return this.renderer.hr();
    }
    case 'heading': {
      return this.renderer.heading(
        this.inline.output(this.token.text),
        this.token.depth,
        unescape(this.inlineText.output(this.token.text)));
    }
    case 'code': {
      return this.renderer.code(this.token.text,
        this.token.lang,
        this.token.escaped);
    }
    case 'table': {
      var header = '',
          body = '',
          i,
          row,
          cell,
          j;

      // header
      cell = '';
      for (i = 0; i < this.token.header.length; i++) {
        cell += this.renderer.tablecell(
          this.inline.output(this.token.header[i]),
          { header: true, align: this.token.align[i] }
        );
      }
      header += this.renderer.tablerow(cell);

      for (i = 0; i < this.token.cells.length; i++) {
        row = this.token.cells[i];

        cell = '';
        for (j = 0; j < row.length; j++) {
          cell += this.renderer.tablecell(
            this.inline.output(row[j]),
            { header: false, align: this.token.align[j] }
          );
        }

        body += this.renderer.tablerow(cell);
      }
      return this.renderer.table(header, body);
    }
    case 'blockquote_start': {
      body = '';

      while (this.next().type !== 'blockquote_end') {
        body += this.tok();
      }

      return this.renderer.blockquote(body);
    }
    case 'list_start': {
      body = '';
      var ordered = this.token.ordered,
          start = this.token.start;

      while (this.next().type !== 'list_end') {
        body += this.tok();
      }

      return this.renderer.list(body, ordered, start);
    }
    case 'list_item_start': {
      body = '';

      while (this.next().type !== 'list_item_end') {
        body += this.token.type === 'text'
          ? this.parseText()
          : this.tok();
      }

      return this.renderer.listitem(body);
    }
    case 'loose_item_start': {
      body = '';

      while (this.next().type !== 'list_item_end') {
        body += this.tok();
      }

      return this.renderer.listitem(body);
    }
    case 'html': {
      var html = !this.token.pre && !this.options.pedantic
        ? this.inline.output(this.token.text)
        : this.token.text;
      return this.renderer.html(html);
    }
    case 'paragraph': {
      return this.renderer.paragraph(this.inline.output(this.token.text));
    }
    case 'text': {
      return this.renderer.paragraph(this.parseText());
    }
  }
};

/**
 * Helpers
 */

function escape(html, encode) {
  return html
    .replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function unescape(html) {
  // explicitly match decimal, hex, and named HTML entities
  return html.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, function(_, n) {
    n = n.toLowerCase();
    if (n === 'colon') return ':';
    if (n.charAt(0) === '#') {
      return n.charAt(1) === 'x'
        ? String.fromCharCode(parseInt(n.substring(2), 16))
        : String.fromCharCode(+n.substring(1));
    }
    return '';
  });
}

function edit(regex, opt) {
  regex = regex.source;
  opt = opt || '';
  return {
    replace: function(name, val) {
      val = val.source || val;
      val = val.replace(/(^|[^\[])\^/g, '$1');
      regex = regex.replace(name, val);
      return this;
    },
    getRegex: function() {
      return new RegExp(regex, opt);
    }
  };
}

function resolveUrl(base, href) {
  if (!baseUrls[' ' + base]) {
    // we can ignore everything in base after the last slash of its path component,
    // but we might need to add _that_
    // https://tools.ietf.org/html/rfc3986#section-3
    if (/^[^:]+:\/*[^/]*$/.test(base)) {
      baseUrls[' ' + base] = base + '/';
    } else {
      baseUrls[' ' + base] = base.replace(/[^/]*$/, '');
    }
  }
  base = baseUrls[' ' + base];

  if (href.slice(0, 2) === '//') {
    return base.replace(/:[\s\S]*/, ':') + href;
  } else if (href.charAt(0) === '/') {
    return base.replace(/(:\/*[^/]*)[\s\S]*/, '$1') + href;
  } else {
    return base + href;
  }
}
var baseUrls = {};
var originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;

function noop() {}
noop.exec = noop;

function merge(obj) {
  var i = 1,
      target,
      key;

  for (; i < arguments.length; i++) {
    target = arguments[i];
    for (key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        obj[key] = target[key];
      }
    }
  }

  return obj;
}

/**
 * Marked
 */

function marked(src, opt, callback) {
  // throw error in case of non string input
  if (typeof src === 'undefined' || src === null) {
    throw new Error('marked(): input parameter is undefined or null');
  }
  if (typeof src !== 'string') {
    throw new Error('marked(): input parameter is of type '
      + Object.prototype.toString.call(src) + ', string expected');
  }

  if (callback || typeof opt === 'function') {
    if (!callback) {
      callback = opt;
      opt = null;
    }

    opt = merge({}, marked.defaults, opt || {});

    var highlight = opt.highlight,
        tokens,
        pending,
        i = 0;

    try {
      tokens = Lexer.lex(src, opt)
    } catch (e) {
      return callback(e);
    }

    pending = tokens.length;

    var done = function(err) {
      if (err) {
        opt.highlight = highlight;
        return callback(err);
      }

      var out;

      try {
        out = Parser.parse(tokens, opt);
      } catch (e) {
        err = e;
      }

      opt.highlight = highlight;

      return err
        ? callback(err)
        : callback(null, out);
    };

    if (!highlight || highlight.length < 3) {
      return done();
    }

    delete opt.highlight;

    if (!pending) return done();

    for (; i < tokens.length; i++) {
      (function(token) {
        if (token.type !== 'code') {
          return --pending || done();
        }
        return highlight(token.text, token.lang, function(err, code) {
          if (err) return done(err);
          if (code == null || code === token.text) {
            return --pending || done();
          }
          token.text = code;
          token.escaped = true;
          --pending || done();
        });
      })(tokens[i]);
    }

    return;
  }
  try {
    if (opt) opt = merge({}, marked.defaults, opt);
    return Parser.parse(Lexer.lex(src, opt), opt);
  } catch (e) {
    e.message += '\nPlease report this to https://github.com/markedjs/marked.';
    if ((opt || marked.defaults).silent) {
      return '<p>An error occurred:</p><pre>'
        + escape(e.message + '', true)
        + '</pre>';
    }
    throw e;
  }
}

/**
 * Options
 */

marked.options =
marked.setOptions = function(opt) {
  merge(marked.defaults, opt);
  return marked;
};

marked.defaults = {
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  sanitizer: null,
  mangle: true,
  smartLists: false,
  silent: false,
  highlight: null,
  langPrefix: 'lang-',
  smartypants: false,
  headerPrefix: '',
  renderer: new Renderer(),
  xhtml: false,
  baseUrl: null
};

/**
 * Expose
 */

marked.Parser = Parser;
marked.parser = Parser.parse;

marked.Renderer = Renderer;
marked.TextRenderer = TextRenderer;

marked.Lexer = Lexer;
marked.lexer = Lexer.lex;

marked.InlineLexer = InlineLexer;
marked.inlineLexer = InlineLexer.output;

marked.parse = marked;

if (true) {
  module.exports = marked;
} else if (typeof define === 'function' && define.amd) {
  define(function() { return marked; });
} else {
  root.marked = marked;
}
})(this || (typeof window !== 'undefined' ? window : global));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_isObject__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_isObject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_isObject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_isFunction__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_isFunction___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_isFunction__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_isInteger__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_isInteger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_isInteger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_isFinite__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_isFinite___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_isFinite__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_debounce__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_debounce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash_debounce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_throttle__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_throttle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash_throttle__);
/**
  * vue-scroll v2.1.7
  * (c) 2018 Wang Pin
  * @license MIT
  */







var dom = (function () {
  var listeners = new Map();

  var SCROLL = 'scroll';

  function addEventListener (element, event, funcs, opt) {

    function fn (e) {
      var data;
      var target = e.target || e.srcElement;
      e = e || window.e;

      if (e.type === SCROLL) {
        if (target === document) {
          data = { scrollTop: document.body.scrollTop, scrollLeft: document.body.scrollLeft };
        } else {
          data = { scrollTop: target.scrollTop, scrollLeft: target.scrollLeft };
        }
      }

      funcs.forEach(function (f) {
        f(e, data);
      });
    }

    if (__WEBPACK_IMPORTED_MODULE_0_lodash_isObject___default()(opt)) {
      if (__WEBPACK_IMPORTED_MODULE_2_lodash_isInteger___default()(opt.throttle) && __WEBPACK_IMPORTED_MODULE_3_lodash_isFinite___default()(opt.throttle) && opt.throttle > -1) {
        fn = __WEBPACK_IMPORTED_MODULE_5_lodash_throttle___default()(fn, opt.throttle);
      }

      if (__WEBPACK_IMPORTED_MODULE_2_lodash_isInteger___default()(opt.debounce) && __WEBPACK_IMPORTED_MODULE_3_lodash_isFinite___default()(opt.debounce) && opt.debounce > -1) {
        fn = __WEBPACK_IMPORTED_MODULE_4_lodash_debounce___default()(fn, opt.debounce);
      }
    }

    // https://github.com/wangpin34/vue-scroll/issues/1
    if (event === SCROLL) {
      if(element === document.body || element === document || element === window) {
        document.onscroll = fn;
      } else {
        if (element.addEventListener) {
          element.addEventListener(event, fn);
        } else {
          element.attachEvent('on' + event, fn);
        }
      }
    }

  }


  function bind (element, event, fn, opt) {

    var funcs, eventFuncs;

    if (!__WEBPACK_IMPORTED_MODULE_1_lodash_isFunction___default()(fn)) {
      throw new Error('Scroll handler is not a function');
    }

    if (!listeners.has(element)) {
      listeners.set(element, new Map());
    }

    funcs = listeners.get(element);

    if (!funcs.has(event)) {
      funcs.set(event, []);
    }

    eventFuncs = funcs.get(event);

    if (!eventFuncs.length) {
      addEventListener(element, event, eventFuncs, opt);
    }

    eventFuncs.push(fn);

  }

  function unbind (element, event, fn) {

    var funcs, eventFuncs;

    if (!__WEBPACK_IMPORTED_MODULE_1_lodash_isFunction___default()(fn)) {
      return;
    }

    if (!listeners.has(element)) {
      listeners.set(element, new Map());
    }

    funcs = listeners.get(element);

    if (!funcs.has(event)) {
      funcs.set(event, []);
    }

    eventFuncs = funcs.get(event);

    if (eventFuncs.indexOf(fn) > -1) {
      eventFuncs.splice(eventFuncs.indexOf(fn), 1);
      return true;
    }

    return false;

  }

  return {
    bind: bind,
    unbind: unbind
  }

})();

var vuescroll = new Object;

vuescroll.install = function (Vue, options) {

  options = options || {};
  var SCROLL = 'scroll';
  var THROTTLE = 'throttle';
  var DEBOUNCE = 'debounce';
  var VALID_ARGS = [THROTTLE, DEBOUNCE];

  function bindValue (el, value, arg) {
    var fn, opt = Object.assign({}, options);
    if (__WEBPACK_IMPORTED_MODULE_0_lodash_isObject___default()(value) || __WEBPACK_IMPORTED_MODULE_1_lodash_isFunction___default()(value)) {
      fn = value;

      if (VALID_ARGS.indexOf(arg) > -1) {
        fn = value.fn;
        if (arg === THROTTLE) {
          opt = { throttle: value.throttle};
        } else if(arg === DEBOUNCE) {
          opt = { debounce: value.debounce};
        }
      }

      try {
        dom.bind(el, SCROLL, fn, opt);
      } catch(err) {
        console.warn('Unexpected error happened when binding listener');
      }

    } else {
      console.warn('Unexpected scroll properties');
    }
  }

  function unbindValue (el, value, arg) {
    var fn;
    if (__WEBPACK_IMPORTED_MODULE_0_lodash_isObject___default()(value) || __WEBPACK_IMPORTED_MODULE_1_lodash_isFunction___default()(value)) {
      fn = value;
      if (VALID_ARGS.indexOf(arg) > -1)  {
        fn = value.fn;
      }
      dom.unbind(el, SCROLL, fn);
    }
  }

  Vue.directive(SCROLL, {

    bind: function(el, binding, vnode, oldVnode) {
      bindValue(el, binding.value, binding.arg);
    },

    inserted: function(el, binding) {
        //To do, check whether element is scrollable and give warn message when not
    },

    update: function(el, binding) {
      if (binding.value === binding.oldValue) {
        return;
      }
      bindValue(el, binding.value, binding.arg);
      unbindValue(el, binding.oldValue, binding.arg);
    },

    unbind: function(el, binding) {
      unbindValue(el, binding.value, binding.arg);
    }

  });

};

/* harmony default export */ __webpack_exports__["a"] = (vuescroll);


/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(188),
    isObject = __webpack_require__(186);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(189);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ 205:
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(207);

/**
 * Checks if `value` is an integer.
 *
 * **Note:** This method is based on
 * [`Number.isInteger`](https://mdn.io/Number/isInteger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
 * @example
 *
 * _.isInteger(3);
 * // => true
 *
 * _.isInteger(Number.MIN_VALUE);
 * // => false
 *
 * _.isInteger(Infinity);
 * // => false
 *
 * _.isInteger('3');
 * // => false
 */
function isInteger(value) {
  return typeof value == 'number' && value == toInteger(value);
}

module.exports = isInteger;


/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

var toFinite = __webpack_require__(208);

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__(190);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(188),
    isObjectLike = __webpack_require__(210);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ 210:
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(187);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsFinite = root.isFinite;

/**
 * Checks if `value` is a finite primitive number.
 *
 * **Note:** This method is based on
 * [`Number.isFinite`](https://mdn.io/Number/isFinite).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
 * @example
 *
 * _.isFinite(3);
 * // => true
 *
 * _.isFinite(Number.MIN_VALUE);
 * // => true
 *
 * _.isFinite(Infinity);
 * // => false
 *
 * _.isFinite('3');
 * // => false
 */
function isFinite(value) {
  return typeof value == 'number' && nativeIsFinite(value);
}

module.exports = isFinite;


/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(187);

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

var debounce = __webpack_require__(191),
    isObject = __webpack_require__(186);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

module.exports = throttle;


/***/ }),

/***/ 223:
/***/ (function(module, exports) {

// 获取光标位置
function getCursortPosition(textDom) {
    var cursorPos = 0;
    if (document.selection) {
        // IE Support
        textDom.focus();
        var selectRange = document.selection.createRange();
        selectRange.moveStart('character', -textDom.value.length);
        cursorPos = selectRange.text.length;
    } else if (textDom.selectionStart || textDom.selectionStart == '0') {
        // Firefox support
        cursorPos = textDom.selectionStart;
    }
    return cursorPos;
}

// 设置光标位置
function setCaretPosition(textDom, pos) {
    if (textDom.setSelectionRange) {
        // IE Support
        textDom.focus();
        textDom.setSelectionRange(pos, pos);
    } else if (textDom.createTextRange) {
        // Firefox support
        var range = textDom.createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
}
// 获取选中文字
function getSelectText() {
    var userSelection, text;
    if (window.getSelection) {
        // Firefox support
        userSelection = window.getSelection();
    } else if (document.selection) {
        // IE Support
        userSelection = document.selection.createRange();
    }
    if (!(text = userSelection.text)) {
        text = userSelection;
    }
    return text;
}

/**
 * 选中特定范围的文本
 * 参数：
 *     textDom  [JavaScript DOM String] 当前对象
 *     startPos  [Int]  起始位置
 *     endPos  [Int]  终点位置
 */
function setSelectText(textDom, startPos, endPos) {
    var startPos = parseInt(startPos),
        endPos = parseInt(endPos),
        textLength = textDom.value.length;
    if (textLength) {
        if (!startPos) {
            startPos = 0;
        }
        if (!endPos) {
            endPos = textLength;
        }
        if (startPos > textLength) {
            startPos = textLength;
        }
        if (endPos > textLength) {
            endPos = textLength;
        }
        if (startPos < 0) {
            startPos = textLength + startPos;
        }
        if (endPos < 0) {
            endPos = textLength + endPos;
        }
        if (textDom.createTextRange) {
            // IE Support
            var range = textDom.createTextRange();
            range.moveStart("character", -textLength);
            range.moveEnd("character", -textLength);
            range.moveStart("character", startPos);
            range.moveEnd("character", endPos);
            range.select();
        } else {
            // Firefox support
            textDom.setSelectionRange(startPos, endPos);
            textDom.focus();
        }
    }
}

/**
 * 在光标后插入文本
 * 参数：
 *     textDom  [JavaScript DOM String] 当前对象
 *     value  [String]  要插入的文本
 */
function insertAfterText(textDom, value) {
    var selectRange;
    if (document.selection) {
        // IE Support
        textDom.focus();
        selectRange = document.selection.createRange();
        selectRange.text = value;
        textDom.focus();
    } else if (textDom.selectionStart || textDom.selectionStart == '0') {
        // Firefox support
        var startPos = textDom.selectionStart;
        var endPos = textDom.selectionEnd;
        var scrollTop = textDom.scrollTop;
        textDom.value = textDom.value.substring(0, startPos) + value + textDom.value.substring(endPos, textDom.value.length);
        textDom.focus();
        textDom.selectionStart = startPos + value.length;
        textDom.selectionEnd = startPos + value.length;
        textDom.scrollTop = scrollTop;
    } else {
        textDom.value += value;
        textDom.focus();
    }
}

module.exports = {
    getCursortPosition: getCursortPosition,
    setCaretPosition: setCaretPosition,
    getSelectText: getSelectText,
    setSelectText: setSelectText,
    insertAfterText: insertAfterText
};

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "mdContainer", class: { fullPage: _vm.fullPageStatus } },
    [
      _vm.navStatus
        ? _c("div", { staticClass: "navContainer" }, [
            _vm.icoStatusP
              ? _c(
                  "div",
                  { staticClass: "nameContainer", on: { click: _vm.happyDay } },
                  [_vm._v("OVEN-mdEditor")]
                )
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "markContainer" }, [
              _c("ul", { staticClass: "markListGroup" }, [
                _c(
                  "li",
                  {
                    staticClass: "markListItem",
                    attrs: { title: "strong" },
                    on: { click: _vm.addStrong }
                  },
                  [_c("b", [_vm._v("B")])]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    staticClass: "markListItem",
                    attrs: { title: "italic" },
                    on: { click: _vm.addItalic }
                  },
                  [_c("i", [_vm._v("I")])]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    staticClass: "markListItem",
                    attrs: { title: "strikethrough" },
                    on: { click: _vm.addStrikethrough }
                  },
                  [
                    _c("i", {
                      staticClass: "fa fa-strikethrough",
                      attrs: { "aria-hidden": "true" }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    staticClass: "markListItem",
                    attrs: { title: "H1-title" },
                    on: {
                      click: function($event) {
                        _vm.addHTitle(1)
                      }
                    }
                  },
                  [_vm._v("H1")]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    staticClass: "markListItem",
                    attrs: { title: "H2-title" },
                    on: {
                      click: function($event) {
                        _vm.addHTitle(2)
                      }
                    }
                  },
                  [_vm._v("H2")]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    staticClass: "markListItem",
                    attrs: { title: "H3-title" },
                    on: {
                      click: function($event) {
                        _vm.addHTitle(3)
                      }
                    }
                  },
                  [_vm._v("H3")]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    staticClass: "markListItem",
                    attrs: { title: "H4-title" },
                    on: {
                      click: function($event) {
                        _vm.addHTitle(4)
                      }
                    }
                  },
                  [_vm._v("H4")]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    staticClass: "markListItem",
                    attrs: { title: "H5-title" },
                    on: {
                      click: function($event) {
                        _vm.addHTitle(5)
                      }
                    }
                  },
                  [_vm._v("H5")]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    staticClass: "markListItem",
                    attrs: { title: "H6-title" },
                    on: {
                      click: function($event) {
                        _vm.addHTitle(6)
                      }
                    }
                  },
                  [_vm._v("H6")]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    staticClass: "markListItem",
                    attrs: { title: "line" },
                    on: { click: _vm.addLine }
                  },
                  [_vm._v("一")]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    staticClass: "markListItem",
                    attrs: { title: "quote" },
                    on: { click: _vm.addQuote }
                  },
                  [
                    _c("i", {
                      staticClass: "fa fa-quote-left",
                      attrs: { "aria-hidden": "true" }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "markListItem", on: { click: _vm.addCode } },
                  [
                    _c("i", {
                      staticClass: "fa fa-code",
                      attrs: { "aria-hidden": "true" }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "markListItem", on: { click: _vm.addLink } },
                  [
                    _c("i", {
                      staticClass: "fa fa-link",
                      attrs: { "aria-hidden": "true" }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "markListItem", on: { click: _vm.addImage } },
                  [
                    _c("i", {
                      staticClass: "fa fa-picture-o",
                      attrs: { "aria-hidden": "true" }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    staticClass: "markListItem",
                    attrs: { title: "table" },
                    on: { click: _vm.addTable }
                  },
                  [
                    _c("i", {
                      staticClass: "fa fa-table",
                      attrs: { "aria-hidden": "true" }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    staticClass: "markListItem",
                    attrs: { title: "ul-list" },
                    on: { click: _vm.addUl }
                  },
                  [
                    _c("i", {
                      staticClass: "fa fa-list-ul",
                      attrs: { "aria-hidden": "true" }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    staticClass: "markListItem",
                    attrs: { title: "ol-list" },
                    on: { click: _vm.addOl }
                  },
                  [
                    _c("i", {
                      staticClass: "fa fa-list-ol",
                      attrs: { "aria-hidden": "true" }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    staticClass: "markListItem",
                    attrs: { title: "fullpage" },
                    on: { click: _vm.fullPageFn }
                  },
                  [
                    _c("i", {
                      staticClass: "fa fa-arrows-alt",
                      attrs: { "aria-hidden": "true" }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    staticClass: "markListItem",
                    attrs: { title: "preview" },
                    on: { click: _vm.previewFn }
                  },
                  [
                    _c("i", {
                      staticClass: "fa fa-eye-slash",
                      attrs: { "aria-hidden": "true" }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    staticClass: "markListItem",
                    attrs: { title: "previewAll" },
                    on: { click: _vm.previewAllFn }
                  },
                  [
                    _c("i", {
                      staticClass: "fa fa-eye",
                      attrs: { "aria-hidden": "true" }
                    })
                  ]
                )
              ])
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mdBodyContainer", class: { noMenu: !_vm.navStatus } },
        [
          _vm.editStatus
            ? _c("div", { staticClass: "editContainer" }, [
                _c("textarea", {
                  directives: [
                    {
                      name: "scroll",
                      rawName: "v-scroll",
                      value: _vm.editScroll,
                      expression: "editScroll"
                    },
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.input,
                      expression: "input"
                    }
                  ],
                  staticClass: "mdEditor",
                  attrs: { name: "" },
                  domProps: { value: _vm.input },
                  on: {
                    keydown: function($event) {
                      if (!("button" in $event) && $event.keyCode !== 9) {
                        return null
                      }
                      _vm.tabFn($event)
                    },
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.input = $event.target.value
                    }
                  }
                })
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.previewStatus
            ? _c("div", {
                directives: [
                  {
                    name: "scroll",
                    rawName: "v-scroll",
                    value: _vm.previewScroll,
                    expression: "previewScroll"
                  }
                ],
                staticClass: "previewContainer markdown-body",
                domProps: { innerHTML: _vm._s(_vm.compiledMarkdown) }
              })
            : _vm._e()
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-782c9156", module.exports)
  }
}

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "markdown-editor" },
    [
      _c("markdown", {
        attrs: {
          mdValuesP: _vm.value,
          fullPageStatusP: false,
          editStatusP: false,
          previewStatusP: false,
          navStatusP: false,
          icoStatusP: true
        },
        on: { childevent: _vm.childEventHandler }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-9af28074", module.exports)
  }
}

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(244);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(14)("517dc326", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/_css-loader@0.28.9@css-loader/index.js!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c25244f0\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_less-loader@4.0.5@less-loader/dist/cjs.js!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./writing.vue", function() {
     var newContent = require("!!../../../../../node_modules/_css-loader@0.28.9@css-loader/index.js!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c25244f0\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_less-loader@4.0.5@less-loader/dist/cjs.js!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./writing.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "\n.vertical-center-modal {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.vertical-center-modal .ivu-modal {\n  top: 0;\n}\n.writing-box {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.writing-box .writing-title {\n  -ms-flex-preferred-size: 40px;\n      flex-basis: 40px;\n  border-bottom: 1px solid #DDDDDD;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 3px 10px;\n}\n.writing-box .writing-content {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  height: 100%;\n  overflow-y: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.writing-box .writing-content .api-list {\n  -ms-flex-preferred-size: 200px;\n      flex-basis: 200px;\n  border-right: 1px solid #ddd;\n}\n.writing-box .writing-content .api-list .api-list-nav {\n  font-size: 14px;\n  color: #333333;\n  font-weight: 200;\n  zoom: 1;\n  border-bottom: 1px solid #ddd;\n}\n.writing-box .writing-content .api-list .api-list-nav .nav-item {\n  font-size: 14px;\n  padding: 0 9px;\n  cursor: pointer;\n  float: left;\n  height: 30px;\n  line-height: 30px;\n  color: #666;\n}\n.writing-box .writing-content .api-list .api-list-nav .nav-item.active {\n  border-bottom: 1px solid #fafafa;\n  margin-bottom: -1px;\n  border-left: 1px solid #ddd;\n  border-right: 1px solid #ddd;\n  padding-left: 8px;\n  padding-right: 8px;\n}\n.writing-box .writing-content .api-list .api-list-nav .plus-right {\n  float: right;\n  color: #999;\n  cursor: pointer;\n  height: 24px;\n  width: 24px;\n  line-height: 24px;\n  display: inline-block;\n  margin-top: 4px;\n}\n.writing-box .writing-content .api-list .api-list-nav:after {\n  display: block;\n  content: '';\n  clear: both;\n  visibility: hidden;\n}\n.writing-box .writing-content .api-list .api-list-center {\n  width: 199px;\n  overflow: hidden;\n}\n.writing-box .writing-content .api-list .api-list-center li {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  line-height: 30px;\n  position: relative;\n}\n.writing-box .writing-content .api-list .api-list-center li .ivu-icon {\n  width: 24px;\n  height: 24px;\n  text-align: center;\n  line-height: 24px;\n}\n.writing-box .writing-content .api-list .api-list-center li .ivu-icon-arrow-expand,\n.writing-box .writing-content .api-list .api-list-center li strong {\n  cursor: pointer;\n}\n.writing-box .writing-content .api-list .api-list-center li .hover-visble {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n.writing-box .writing-content .api-list .api-list-center li .hover-visble .ivu-icon {\n  cursor: pointer;\n}\n.writing-box .writing-content .api-content {\n  height: 100%;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n.writing-box .writing-content .api-content .markdown-editor {\n  height: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_markdown_vue__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_markdown_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_markdown_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_list_vue__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_list_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__api_list_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__history_vue__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__history_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__history_vue__);


var _computed$data$comput;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = (_computed$data$comput = {
  computed: {},
  data: function data() {
    return {
      bookId: this.$route.query.id,
      documents: [],
      loadingVisible: false,
      historyVisble: false,
      document: {}
    };
  }
}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_computed$data$comput, 'computed', {}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_computed$data$comput, 'mounted', function mounted() {
  this.getDocuments();
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_computed$data$comput, 'methods', {
  goBack: function goBack() {
    this.$router.go(-1);
  },
  goHistory: function goHistory() {
    this.historyVisble = true;
  },
  useHelp: function useHelp() {
    window.open("http://wowubuntu.com/markdown/index.html");
  },
  onResultChange: function onResultChange(string) {
    this.document.markdown = string;
  },
  getDocuments: function getDocuments() {
    var _this = this;

    this.$get('book/' + this.bookId + '/document').then(function (res) {
      _this.documents = res.data;
      if (_this.documents.length > 0) {
        _this.getDocument(_this.documents[0].id);
      }
    });
  },
  getDocument: function getDocument(id) {
    var _this2 = this;

    this.$get('book/' + this.bookId + '/document/' + id).then(function (res) {
      _this2.document = res.data;
    });
  }
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_computed$data$comput, 'components', {
  markdown: __WEBPACK_IMPORTED_MODULE_1__components_markdown_vue___default.a,
  ApiList: __WEBPACK_IMPORTED_MODULE_2__api_list_vue___default.a,
  History: __WEBPACK_IMPORTED_MODULE_3__history_vue___default.a
}), _computed$data$comput);

/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(247);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(248), __esModule: true };

/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(249);
var $Object = __webpack_require__(3).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(11);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(6), 'Object', { defineProperty: __webpack_require__(4).f });


/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(251)
}
var normalizeComponent = __webpack_require__(10)
/* script */
var __vue_script__ = __webpack_require__(253)
/* template */
var __vue_template__ = __webpack_require__(259)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\views\\document\\api-list.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-dd56a616", Component.options)
  } else {
    hotAPI.reload("data-v-dd56a616", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(252);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(14)("a543b01a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/_css-loader@0.28.9@css-loader/index.js!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-dd56a616\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_less-loader@4.0.5@less-loader/dist/cjs.js!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./api-list.vue", function() {
     var newContent = require("!!../../../../../node_modules/_css-loader@0.28.9@css-loader/index.js!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-dd56a616\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_less-loader@4.0.5@less-loader/dist/cjs.js!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./api-list.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add_api_vue__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add_api_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__add_api_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    data: {
      type: Array,
      default: []
    }
  },
  computed: {},
  data: function data() {
    return {
      AddApiVisible: false,
      AddApiData: {}
    };
  },

  methods: {
    deleteItem: function deleteItem(id) {
      var _this = this;

      this.$delete('book/' + this.$route.query.id + '/document/' + id).then(function (res) {
        _this.$Message.success(res.msg);
        _this.update();
      });
    },
    update: function update() {
      this.$emit('update');
    }
  },
  filters: {},
  components: {
    AddApi: __WEBPACK_IMPORTED_MODULE_0__add_api_vue___default.a
  }
});

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(255)
}
var normalizeComponent = __webpack_require__(10)
/* script */
var __vue_script__ = __webpack_require__(257)
/* template */
var __vue_template__ = __webpack_require__(258)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\views\\document\\add-api.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1eb5ba9a", Component.options)
  } else {
    hotAPI.reload("data-v-1eb5ba9a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(256);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(14)("7eaa47ce", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/_css-loader@0.28.9@css-loader/index.js!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1eb5ba9a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_less-loader@4.0.5@less-loader/dist/cjs.js!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./add-api.vue", function() {
     var newContent = require("!!../../../../../node_modules/_css-loader@0.28.9@css-loader/index.js!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1eb5ba9a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_less-loader@4.0.5@less-loader/dist/cjs.js!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./add-api.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    show: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object
    }
  },
  computed: {
    modalShow: {
      get: function get() {
        return this.show;
      },
      set: function set() {}
    }
  },
  data: function data() {
    return {
      addApiModel: {
        name: '',
        identify: '',
        sort: 10
      },
      loading: false
    };
  },

  methods: {
    visibleChange: function visibleChange(visible) {
      if (visible === false) {
        this.$emit('visibleChange', visible);
      }
      this.addApiModel = {
        name: this.data.name,
        sort: this.data.sort
      };
    },
    submit: function submit(name) {
      var _this = this;

      this.$refs[name].validate(function (valid) {
        if (valid) {
          _this.loading = true;
          if (_this.data.id > 0) {
            _this.$put('book/' + _this.$route.query.id + '/document/' + _this.data.id, _this.addApiModel).then(function (res) {
              _this.documents = res.data;
              _this.loading = false;
              _this.$Message.success('请求成功!');
              _this.visibleChange(false);
              _this.update();
            });
          } else {
            _this.$post('book/' + _this.$route.query.id + '/document', _this.addApiModel).then(function (res) {
              _this.documents = res.data;
              _this.loading = false;
              _this.$Message.success('请求成功!');
              _this.visibleChange(false);
              _this.update();
            });
          }
        }
      });
    },
    update: function update() {
      this.$emit('update');
    }
  }
});

/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "Modal",
        {
          attrs: { width: "550" },
          on: { "on-visible-change": _vm.visibleChange },
          model: {
            value: _vm.modalShow,
            callback: function($$v) {
              _vm.modalShow = $$v
            },
            expression: "modalShow"
          }
        },
        [
          _c("p", { attrs: { slot: "header" }, slot: "header" }, [
            _vm._v("添加文档")
          ]),
          _vm._v(" "),
          _c(
            "div",
            [
              _c(
                "Form",
                {
                  ref: "addApiModel",
                  attrs: { model: _vm.addApiModel, "label-width": 100 }
                },
                [
                  _c(
                    "FormItem",
                    {
                      attrs: {
                        label: "文档名称",
                        prop: "name",
                        rules: {
                          required: true,
                          message: "文档名称不能为空！",
                          trigger: "blur"
                        }
                      }
                    },
                    [
                      _c("Input", {
                        model: {
                          value: _vm.addApiModel.name,
                          callback: function($$v) {
                            _vm.$set(_vm.addApiModel, "name", $$v)
                          },
                          expression: "addApiModel.name"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "FormItem",
                    {
                      attrs: {
                        label: "排序",
                        prop: "sort",
                        rules: {
                          message: "排序必须是整数！",
                          trigger: "blur",
                          pattern: /^[1-9]+[0-9]*$/
                        }
                      }
                    },
                    [
                      _c("Input", {
                        attrs: { placeholder: "非必填" },
                        model: {
                          value: _vm.addApiModel.sort,
                          callback: function($$v) {
                            _vm.$set(_vm.addApiModel, "sort", $$v)
                          },
                          expression: "addApiModel.sort"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { attrs: { slot: "footer" }, slot: "footer" },
            [
              _c(
                "Button",
                {
                  attrs: {
                    type: "primary",
                    size: "large",
                    loading: _vm.loading
                  },
                  on: {
                    click: function($event) {
                      _vm.submit("addApiModel")
                    }
                  }
                },
                [_vm._v("提交")]
              )
            ],
            1
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-1eb5ba9a", module.exports)
  }
}

/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("div", { staticClass: "api-list-nav" }, [
        _c(
          "div",
          { staticClass: "nav-item active" },
          [
            _c("Icon", { attrs: { type: "navicon-round" } }),
            _vm._v("\r\n      列表\r\n    ")
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "plus-right" }, [
          _c(
            "div",
            {
              on: {
                click: function($event) {
                  _vm.AddApiVisible = true
                  _vm.AddApiData = {}
                }
              }
            },
            [_c("Icon", { attrs: { type: "plus-round" } })],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "api-list-center" }, [
        _c(
          "ul",
          _vm._l(_vm.data, function(item) {
            return _c(
              "li",
              [
                _c("Icon", { attrs: { type: "clipboard" } }),
                _vm._v(" "),
                _c("strong", [_vm._v(_vm._s(item.name))]),
                _vm._v(" "),
                _c("div", { staticClass: "hover-visble" }, [
                  _c("i", {
                    staticClass: "ivu-icon ivu-icon-edit",
                    on: {
                      click: function($event) {
                        _vm.AddApiVisible = true
                        _vm.AddApiData = item
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("i", {
                    staticClass: "ivu-icon ivu-icon-trash-a",
                    on: {
                      click: function($event) {
                        _vm.deleteItem(item.id)
                      }
                    }
                  })
                ])
              ],
              1
            )
          })
        )
      ]),
      _vm._v(" "),
      _c("AddApi", {
        attrs: { show: _vm.AddApiVisible, data: _vm.AddApiData },
        on: {
          visibleChange: function($event) {
            _vm.AddApiVisible = false
          },
          update: _vm.update
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-dd56a616", module.exports)
  }
}

/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(10)
/* script */
var __vue_script__ = __webpack_require__(261)
/* template */
var __vue_template__ = __webpack_require__(262)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\views\\document\\history.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5ebe2d40", Component.options)
  } else {
    hotAPI.reload("data-v-5ebe2d40", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    modalShow: {
      get: function get() {
        return this.show;
      },
      set: function set() {}
    }
  },
  data: function data() {
    return {
      historyColumns: [{
        title: 'ID',
        key: 'id'
      }, {
        title: '修改时间',
        key: 'updated_at'
      }, {
        title: '修改人',
        key: 'address'
      }, {
        title: '版本',
        key: 'version'
      }, {
        title: '操作',
        key: 'address'
      }],
      historyData: []
    };
  },

  methods: {
    visibleChange: function visibleChange(visible) {
      if (visible === false) {
        this.$emit('visibleChange', visible);
      }
    },
    submit: function submit(name) {
      this.$refs[name].validate(function (valid) {
        if (valid) {}
      });
    }
  }
});

/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "Modal",
        {
          attrs: { width: "550" },
          on: { "on-visible-change": _vm.visibleChange },
          model: {
            value: _vm.modalShow,
            callback: function($$v) {
              _vm.modalShow = $$v
            },
            expression: "modalShow"
          }
        },
        [
          _c("p", { attrs: { slot: "header" }, slot: "header" }, [
            _vm._v("修改记录")
          ]),
          _vm._v(" "),
          _c(
            "div",
            [
              _c("Table", {
                attrs: { columns: _vm.historyColumns, data: _vm.historyData }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { attrs: { slot: "footer" }, slot: "footer" })
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-5ebe2d40", module.exports)
  }
}

/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "writing-box" },
    [
      _c(
        "div",
        { staticClass: "writing-title" },
        [
          _c(
            "Row",
            [
              _c(
                "Col",
                { attrs: { span: "12" } },
                [
                  _c(
                    "Tooltip",
                    { attrs: { content: "返回" } },
                    [
                      _c("Button", {
                        attrs: { icon: "arrow-return-left" },
                        on: { click: _vm.goBack }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "Tooltip",
                    { attrs: { content: "保存" } },
                    [
                      _c("Button", { attrs: { type: "success", icon: "cube" } })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "Col",
                {
                  staticStyle: { "text-align": "right" },
                  attrs: { span: "12" }
                },
                [
                  _c(
                    "Tooltip",
                    { attrs: { content: "发布" } },
                    [_c("Button", { attrs: { icon: "ios-cloud-upload" } })],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "Tooltip",
                    { attrs: { content: "修改历史" } },
                    [
                      _c("Button", {
                        attrs: { icon: "map" },
                        on: { click: _vm.goHistory }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "Tooltip",
                    { attrs: { content: "保用帮助" } },
                    [
                      _c("Button", {
                        attrs: { icon: "information-circled" },
                        on: { click: _vm.useHelp }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "writing-content" }, [
        _c(
          "div",
          { staticClass: "api-list" },
          [
            _c("ApiList", {
              attrs: { data: _vm.documents },
              on: { update: _vm.getDocuments }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "api-content" },
          [
            _c("markdown", {
              attrs: { value: _vm.document.markdown },
              on: { onResultChange: _vm.onResultChange }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("History", {
        attrs: { show: _vm.historyVisble },
        on: {
          visibleChange: function($event) {
            _vm.historyVisble = false
          }
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-c25244f0", module.exports)
  }
}

/***/ })

});