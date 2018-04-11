webpackJsonp([18],{

/***/ 498:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(501)
}
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = __webpack_require__(499)
/* template */
var __vue_template__ = __webpack_require__(500)
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
Component.options.__file = "resources\\assets\\js\\views\\home\\books\\index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a65877e0", Component.options)
  } else {
    hotAPI.reload("data-v-a65877e0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 499:
/***/ (function(module, exports) {

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

/***/ }),

/***/ 500:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Layout",
    [
      _c(
        "Header",
        [
          _c(
            "Menu",
            {
              attrs: { mode: "horizontal", theme: "dark", "active-name": "1" }
            },
            [
              _c("div", { staticClass: "layout-logo" }),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "layout-nav" },
                [
                  _c(
                    "MenuItem",
                    { attrs: { name: "1" } },
                    [
                      _c("Icon", { attrs: { type: "ios-navigate" } }),
                      _vm._v("\n                  登录\n              ")
                    ],
                    1
                  )
                ],
                1
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "Layout",
        [
          _c("Sider", { attrs: { "hide-trigger": "" } }),
          _vm._v(" "),
          _c(
            "Content",
            { staticClass: "book-content" },
            [
              _c(
                "Row",
                [
                  _c(
                    "Col",
                    { staticClass: "thumbnail-box", attrs: { span: "6" } },
                    [_c("div", { staticClass: "thumbnail" })]
                  ),
                  _vm._v(" "),
                  _c(
                    "Col",
                    { staticClass: "thumbnail-box", attrs: { span: "6" } },
                    [_c("div", { staticClass: "thumbnail" })]
                  ),
                  _vm._v(" "),
                  _c(
                    "Col",
                    { staticClass: "thumbnail-box", attrs: { span: "6" } },
                    [_c("div", { staticClass: "thumbnail" })]
                  ),
                  _vm._v(" "),
                  _c(
                    "Col",
                    { staticClass: "thumbnail-box", attrs: { span: "6" } },
                    [_c("div", { staticClass: "thumbnail" })]
                  ),
                  _vm._v(" "),
                  _c(
                    "Col",
                    { staticClass: "thumbnail-box", attrs: { span: "6" } },
                    [_c("div", { staticClass: "thumbnail" })]
                  ),
                  _vm._v(" "),
                  _c(
                    "Col",
                    { staticClass: "thumbnail-box", attrs: { span: "6" } },
                    [_c("div", { staticClass: "thumbnail" })]
                  ),
                  _vm._v(" "),
                  _c(
                    "Col",
                    { staticClass: "thumbnail-box", attrs: { span: "6" } },
                    [_c("div", { staticClass: "thumbnail" })]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("Sider", { attrs: { "hide-trigger": "" } })
        ],
        1
      ),
      _vm._v(" "),
      _c("Footer", { staticClass: "layout-footer-center" }, [
        _vm._v("\n      2018-2018 © LuffyZhao\n    ")
      ])
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
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-a65877e0", module.exports)
  }
}

/***/ }),

/***/ 501:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(502);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(27)("56298ca4", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/_css-loader@0.28.9@css-loader/index.js!../../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-a65877e0\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../../node_modules/_css-loader@0.28.9@css-loader/index.js!../../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-a65877e0\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 502:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)(false);
// imports


// module
exports.push([module.i, "\n.book-content{\r\n  padding: 15px;\n}\n.thumbnail-box{\r\n  padding: 10px;\n}\n.thumbnail {\r\n    display: block;\r\n    padding: 4px;\r\n    margin-bottom: 20px;\r\n    line-height: 1.42857143;\r\n    background-color: #fff;\r\n    border: 1px solid #ddd;\r\n    -webkit-transition: border .2s ease-in-out;\r\n    transition: border .2s ease-in-out;\r\n    height: 200px;\n}\n.ivu-layout{\r\n    height: 100%;\n}\n.ivu-layout-sider{\r\n    background-color: #fff;\n}\n.layout{\r\n    border: 1px solid #d7dde4;\r\n    background: #f5f7f9;\r\n    position: relative;\r\n    border-radius: 4px;\r\n    overflow: hidden;\n}\n.layout-logo{\r\n    width: 100px;\r\n    height: 30px;\r\n    background: #5b6270;\r\n    border-radius: 3px;\r\n    float: left;\r\n    position: relative;\r\n    top: 15px;\r\n    left: 20px;\n}\n.layout-nav{\r\n    width: 120px;\r\n    margin: 0 auto;\r\n    margin-right: 20px;\n}\n.layout-footer-center{\r\n    text-align: center;\n}\r\n", ""]);

// exports


/***/ })

});