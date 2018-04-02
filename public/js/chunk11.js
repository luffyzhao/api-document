webpackJsonp([11],{

/***/ 479:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(484)
}
var normalizeComponent = __webpack_require__(10)
/* script */
var __vue_script__ = __webpack_require__(480)
/* template */
var __vue_template__ = __webpack_require__(481)
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
Component.options.__file = "resources\\assets\\js\\views\\document\\view.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-12bc2b29", Component.options)
  } else {
    hotAPI.reload("data-v-12bc2b29", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 480:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      bookId: this.$route.query.id,
      documents: [],
      document: {}
    };
  },
  mounted: function mounted() {
    this.getDocuments();
  },

  methods: {
    getDocuments: function getDocuments() {
      var _this = this;

      this.$get("book/" + this.bookId + "/document").then(function (res) {
        _this.documents = res.data;
        if (_this.documents.length > 0) {
          _this.getDocument(_this.documents[0].id);
        }
      });
    },
    getDocument: function getDocument(id) {
      var _this2 = this;

      this.$get("book/" + this.bookId + "/document/" + id).then(function (res) {
        _this2.document = res.data;
      });
    }
  }
});

/***/ }),

/***/ 481:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "writing-box" }, [
    _c("div", { staticClass: "writing-title" }),
    _vm._v(" "),
    _c("div", { staticClass: "writing-content" }, [
      _c("div", { staticClass: "api-list" }, [
        _c("div", { staticClass: "api-list-nav" }, [
          _c(
            "div",
            { staticClass: "nav-item active" },
            [
              _c("Icon", { attrs: { type: "navicon-round" } }),
              _vm._v("\n          列表\n        ")
            ],
            1
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-12bc2b29", module.exports)
  }
}

/***/ }),

/***/ 484:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(485);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(27)("425f9ebd", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/_css-loader@0.28.9@css-loader/index.js!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-12bc2b29\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_less-loader@4.0.5@less-loader/dist/cjs.js!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./view.vue", function() {
     var newContent = require("!!../../../../../node_modules/_css-loader@0.28.9@css-loader/index.js!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-12bc2b29\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_less-loader@4.0.5@less-loader/dist/cjs.js!../../../../../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=styles&index=0!./view.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 485:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)(false);
// imports


// module
exports.push([module.i, "\n.vertical-center-modal {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.vertical-center-modal .ivu-modal {\n  top: 0;\n}\n.writing-box {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.writing-box .writing-title {\n  -ms-flex-preferred-size: 40px;\n      flex-basis: 40px;\n  border-bottom: 1px solid #DDDDDD;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 3px 10px;\n}\n.writing-box .writing-content {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  height: 100%;\n  overflow-y: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.writing-box .writing-content .api-list {\n  -ms-flex-preferred-size: 200px;\n      flex-basis: 200px;\n  border-right: 1px solid #ddd;\n}\n.writing-box .writing-content .api-list .api-list-nav {\n  font-size: 14px;\n  color: #333333;\n  font-weight: 200;\n  zoom: 1;\n  border-bottom: 1px solid #ddd;\n}\n.writing-box .writing-content .api-list .api-list-nav .nav-item {\n  font-size: 14px;\n  padding: 0 9px;\n  cursor: pointer;\n  float: left;\n  height: 30px;\n  line-height: 30px;\n  color: #666;\n}\n.writing-box .writing-content .api-list .api-list-nav .nav-item.active {\n  border-bottom: 1px solid #fafafa;\n  margin-bottom: -1px;\n  border-left: 1px solid #ddd;\n  border-right: 1px solid #ddd;\n  padding-left: 8px;\n  padding-right: 8px;\n}\n.writing-box .writing-content .api-list .api-list-nav .plus-right {\n  float: right;\n  color: #999;\n  cursor: pointer;\n  height: 24px;\n  width: 24px;\n  line-height: 24px;\n  display: inline-block;\n  margin-top: 4px;\n}\n.writing-box .writing-content .api-list .api-list-nav:after {\n  display: block;\n  content: '';\n  clear: both;\n  visibility: hidden;\n}\n.writing-box .writing-content .api-list .api-list-center {\n  width: 199px;\n  overflow: hidden;\n}\n.writing-box .writing-content .api-list .api-list-center li {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  line-height: 30px;\n  position: relative;\n}\n.writing-box .writing-content .api-list .api-list-center li .ivu-icon {\n  width: 24px;\n  height: 24px;\n  text-align: center;\n  line-height: 24px;\n}\n.writing-box .writing-content .api-list .api-list-center li .ivu-icon-arrow-expand,\n.writing-box .writing-content .api-list .api-list-center li strong {\n  cursor: pointer;\n}\n.writing-box .writing-content .api-list .api-list-center li .hover-visble {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n.writing-box .writing-content .api-list .api-list-center li .hover-visble .ivu-icon {\n  cursor: pointer;\n}\n.writing-box .writing-content .api-content {\n  height: 100%;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n.writing-box .writing-content .api-content .markdown-editor {\n  height: 100%;\n}\n", ""]);

// exports


/***/ })

});