webpackJsonp([5],{

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_14_1_1_vue_loader_lib_selector_type_script_index_0_Login_vue__ = __webpack_require__(58);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_14_1_1_vue_loader_lib_template_compiler_index_id_data_v_44d4d72c_hasScoped_false_buble_transforms_node_modules_vue_loader_14_1_1_vue_loader_lib_selector_type_template_index_0_Login_vue__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_1_1_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(4);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_1_1_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_14_1_1_vue_loader_lib_selector_type_script_index_0_Login_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_14_1_1_vue_loader_lib_template_compiler_index_id_data_v_44d4d72c_hasScoped_false_buble_transforms_node_modules_vue_loader_14_1_1_vue_loader_lib_selector_type_template_index_0_Login_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_14_1_1_vue_loader_lib_template_compiler_index_id_data_v_44d4d72c_hasScoped_false_buble_transforms_node_modules_vue_loader_14_1_1_vue_loader_lib_selector_type_template_index_0_Login_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\views\\Login.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-44d4d72c", Component.options)
  } else {
    hotAPI.reload("data-v-44d4d72c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_Util__ = __webpack_require__(5);
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    login: function login() {
      __WEBPACK_IMPORTED_MODULE_0__libs_Util__["a" /* default */].cache.set('token', 'adf');
      this.$router.replace({ name: 'home' });
    }
  }
});

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("Button", { attrs: { type: "primary" }, on: { click: _vm.login } }, [
        _vm._v("登录")
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-44d4d72c", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ })

});