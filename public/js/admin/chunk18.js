webpackJsonp([18],{

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = __webpack_require__(434)
/* template */
var __vue_template__ = __webpack_require__(444)
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
Component.options.__file = "resources\\assets\\js\\views\\admin\\users\\list.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fadd4de8", Component.options)
  } else {
    hotAPI.reload("data-v-fadd4de8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__create_vue__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__create_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__create_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__update_vue__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__update_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__update_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__allot_vue__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__allot_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__allot_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__group_vue__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__group_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__group_vue__);







/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    const h = this.$createElement;

    return {
      Columns: [{
        "title": "用户名",
        "key": "username"
      }, {
        "title": "邮箱",
        "key": "email"
      }, {
        "title": "手机号码",
        "key": "phone"
      }, {
        'title': '操作',
        'render': (h, {
          row,
          column,
          index
        }) => {
          return h(
            'button-group',
            null,
            [h(
              'i-button',
              {
                on: {
                  'click': () => {
                    this.updateButton(row);
                  }
                },
                attrs: { size: 'small' }
              },
              ['\u66F4\u65B0']
            ), h(
              'i-button',
              {
                on: {
                  'click': () => {
                    this.allotButton(row);
                  }
                },
                attrs: { size: 'small' }
              },
              ['\u5206\u914D\u6743\u9650']
            ), h(
              'i-button',
              {
                on: {
                  'click': () => {
                    this.groupButton(row);
                  }
                },
                attrs: { size: 'small' }
              },
              ['\u5206\u914D\u7528\u6237\u7EC4']
            )]
          );
        }
      }],
      Datas: [],
      page: {
        total: 0,
        current: 1,
        page_size: 20
      },
      createModalShow: false,
      updateModalShow: false,
      updateId: 0,
      allotModalShow: false,
      allotId: 0,
      groupModalShow: false,
      groupId: 0
    };
  },
  mounted() {
    this.search(1);
  },
  methods: {
    search(current) {
      this.$get('user', {
        page: current
      }).then(res => {
        this.Datas = res.data.data;
        this.page.total = res.data.total;
        this.page.current = res.data.current_page;
        this.page.page_size = res.data.per_page;
      });
    },
    updateButton(row) {
      this.updateId = row.id;
      this.updateModalShow = true;
    },
    allotButton(row) {
      this.allotId = row.id;
      this.allotModalShow = true;
    },
    groupButton(row) {
      this.groupId = row.id;
      this.groupModalShow = true;
    },
    visibleChangeCreate(visible) {
      this.createModalShow = visible;
      if (visible === false) {
        this.search(1);
      }
    },
    visibleChangeAllot(visible) {
      this.allotModalShow = visible;
    },
    visibleChangeGroup(visible) {
      this.groupModalShow = visible;
    },
    visibleChangeUpdate(visible) {
      this.updateModalShow = visible;
      if (visible === false) {
        this.search(this.page.current);
      }
    }
  },
  components: {
    Create: __WEBPACK_IMPORTED_MODULE_0__create_vue___default.a,
    Update: __WEBPACK_IMPORTED_MODULE_1__update_vue___default.a,
    Allot: __WEBPACK_IMPORTED_MODULE_2__allot_vue___default.a,
    Group: __WEBPACK_IMPORTED_MODULE_3__group_vue___default.a
  }
});

/***/ }),

/***/ 435:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = __webpack_require__(436)
/* template */
var __vue_template__ = __webpack_require__(437)
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
Component.options.__file = "resources\\assets\\js\\views\\admin\\users\\create.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c321e62c", Component.options)
  } else {
    hotAPI.reload("data-v-c321e62c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 436:
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
      loadingVisible: false,
      formItem: {}
    };
  },

  methods: {
    visibleChange: function visibleChange(visible) {
      if (visible === false) {
        this.$emit('visibleChange', visible);
      } else {
        this.formItem = {};
      }
    },
    submit: function submit(name) {
      var _this = this;

      this.loadingVisible = true;
      this.$refs[name].validate(function (valid) {
        if (valid) {
          _this.$post('user', _this.formItem).then(function (res) {
            _this.loadingVisible = false;
            _this.visibleChange(false);
            _this.$Message.error('用户添加成功!');
          });
        }
      }).catch(function (e) {
        _this.loadingVisible = false;
      });
    }
  }
});

/***/ }),

/***/ 437:
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
          attrs: {
            title: "创建项目",
            "mask-closable": false,
            "class-name": "vertical-center-modal",
            width: "auto",
            "ok-text": "提交"
          },
          on: { "on-visible-change": _vm.visibleChange, "on-ok": _vm.submit },
          model: {
            value: _vm.modalShow,
            callback: function($$v) {
              _vm.modalShow = $$v
            },
            expression: "modalShow"
          }
        },
        [
          _c(
            "Form",
            {
              ref: "formItem",
              attrs: { model: _vm.formItem, "label-width": 100 }
            },
            [
              _c(
                "FormItem",
                {
                  attrs: {
                    label: "用户姓名:",
                    prop: "username",
                    rules: {
                      required: true,
                      message: "用户姓名不能为空！",
                      trigger: "blur"
                    }
                  }
                },
                [
                  _c("Input", {
                    staticStyle: { width: "300px" },
                    model: {
                      value: _vm.formItem.username,
                      callback: function($$v) {
                        _vm.$set(_vm.formItem, "username", $$v)
                      },
                      expression: "formItem.username"
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
                    label: "登录邮箱:",
                    prop: "email",
                    rules: {
                      required: true,
                      type: "email",
                      message: "请输出正确的邮箱号码！",
                      trigger: "blur"
                    }
                  }
                },
                [
                  _c("Input", {
                    staticStyle: { width: "300px" },
                    model: {
                      value: _vm.formItem.email,
                      callback: function($$v) {
                        _vm.$set(_vm.formItem, "email", $$v)
                      },
                      expression: "formItem.email"
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
                    label: "手机号码:",
                    prop: "phone",
                    rules: {
                      pattern: /^1[34578][0-9]{9}$/,
                      message: "手机号码格式不正确！",
                      trigger: "blur"
                    }
                  }
                },
                [
                  _c("Input", {
                    staticStyle: { width: "300px" },
                    model: {
                      value: _vm.formItem.phone,
                      callback: function($$v) {
                        _vm.$set(_vm.formItem, "phone", $$v)
                      },
                      expression: "formItem.phone"
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
                    label: "密码",
                    prop: "password",
                    rules: {
                      required: true,
                      message: "密码不能为空！",
                      trigger: "blur"
                    }
                  }
                },
                [
                  _c("Input", {
                    attrs: { type: "password" },
                    model: {
                      value: _vm.formItem.password,
                      callback: function($$v) {
                        _vm.$set(_vm.formItem, "password", $$v)
                      },
                      expression: "formItem.password"
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
                    label: "确认密码",
                    prop: "password_confirmation",
                    rules: {
                      required: true,
                      message: "确认密码不能为空！",
                      trigger: "blur"
                    }
                  }
                },
                [
                  _c("Input", {
                    attrs: { type: "password" },
                    model: {
                      value: _vm.formItem.password_confirmation,
                      callback: function($$v) {
                        _vm.$set(_vm.formItem, "password_confirmation", $$v)
                      },
                      expression: "formItem.password_confirmation"
                    }
                  })
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
                    loading: _vm.loadingVisible
                  },
                  on: {
                    click: function($event) {
                      _vm.submit("formItem")
                    }
                  }
                },
                [_vm._v("提交")]
              )
            ],
            1
          )
        ],
        1
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
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-c321e62c", module.exports)
  }
}

/***/ }),

/***/ 438:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = __webpack_require__(439)
/* template */
var __vue_template__ = __webpack_require__(440)
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
Component.options.__file = "resources\\assets\\js\\views\\admin\\users\\update.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3b2ef637", Component.options)
  } else {
    hotAPI.reload("data-v-3b2ef637", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 439:
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
    row: {
      type: Number,
      default: 0
    }
  },
  computed: {
    modalShow: {
      get: function get() {
        return this.show;
      },
      set: function set() {}
    },
    updateId: function updateId() {
      return this.row;
    }
  },
  data: function data() {
    return {
      loadingVisible: false,
      formItem: {},
      formSetPassword: {
        old_password: '',
        password: '',
        password_confirmation: ''
      },
      setPassword: false
    };
  },

  methods: {
    handlePassword: function handlePassword(e) {
      var _this = this;

      this.$put('user/' + this.updateId + '/password', this.formSetPassword).then(function (res) {
        _this.$Message.success('密码修改成功!');
        _this.$refs['modalSetPassword'].close();
      });
    },
    visibleChange: function visibleChange(visible) {
      if (visible === false) {
        this.$emit('visibleChange', visible);
      }
    },
    submit: function submit(name) {
      var _this2 = this;

      this.loadingVisible = true;
      this.$refs[name].validate(function (valid) {
        if (valid) {
          _this2.$put('user/' + _this2.updateId, {
            username: _this2.formItem.username,
            phone: _this2.formItem.phone,
            email: _this2.formItem.email
          }).then(function (res) {
            _this2.loadingVisible = false;
            _this2.visibleChange(false);
            _this2.$Message.error('用户更新成功!');
          }).catch(function (e) {
            _this2.loadingVisible = false;
          });
        }
      });
    }
  },
  watch: {
    // 监听组件显示
    modalShow: function modalShow(val, oldVal) {
      var _this3 = this;

      if (val) {
        this.$get('user/' + this.updateId).then(function (res) {
          _this3.formItem = res.data;
        });
      } else {
        this.formItem = {};
      }
    }
  }
});

/***/ }),

/***/ 440:
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
          attrs: {
            title: "修改文档",
            "mask-closable": false,
            "class-name": "vertical-center-modal",
            width: "auto",
            "ok-text": "提交"
          },
          on: { "on-visible-change": _vm.visibleChange, "on-ok": _vm.submit },
          model: {
            value: _vm.modalShow,
            callback: function($$v) {
              _vm.modalShow = $$v
            },
            expression: "modalShow"
          }
        },
        [
          _c(
            "Form",
            {
              ref: "formItem",
              attrs: { model: _vm.formItem, "label-width": 100 }
            },
            [
              _c(
                "FormItem",
                {
                  attrs: {
                    label: "用户姓名:",
                    prop: "username",
                    rules: {
                      required: true,
                      message: "用户姓名不能为空！",
                      trigger: "blur"
                    }
                  }
                },
                [
                  _c("Input", {
                    staticStyle: { width: "300px" },
                    model: {
                      value: _vm.formItem.username,
                      callback: function($$v) {
                        _vm.$set(_vm.formItem, "username", $$v)
                      },
                      expression: "formItem.username"
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
                    label: "登录邮箱:",
                    prop: "email",
                    rules: {
                      required: true,
                      type: "email",
                      message: "请输出正确的邮箱号码！",
                      trigger: "blur"
                    }
                  }
                },
                [
                  _c("Input", {
                    staticStyle: { width: "300px" },
                    model: {
                      value: _vm.formItem.email,
                      callback: function($$v) {
                        _vm.$set(_vm.formItem, "email", $$v)
                      },
                      expression: "formItem.email"
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
                    label: "手机号码:",
                    prop: "phone",
                    rules: {
                      pattern: /^1[34578][0-9]{9}$/,
                      message: "手机号码格式不正确！",
                      trigger: "blur"
                    }
                  }
                },
                [
                  _c("Input", {
                    staticStyle: { width: "300px" },
                    model: {
                      value: _vm.formItem.phone,
                      callback: function($$v) {
                        _vm.$set(_vm.formItem, "phone", $$v)
                      },
                      expression: "formItem.phone"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "FormItem",
                { attrs: { label: "登录密码:" } },
                [
                  _c(
                    "Button",
                    {
                      attrs: { type: "text" },
                      on: {
                        click: function($event) {
                          _vm.setPassword = true
                        }
                      }
                    },
                    [_vm._v("修改密码")]
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
                    loading: _vm.loadingVisible
                  },
                  on: {
                    click: function($event) {
                      _vm.submit("formItem")
                    }
                  }
                },
                [_vm._v("提交")]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "Modal",
        {
          ref: "modalSetPassword",
          attrs: {
            title: "修改密码",
            "ok-text": "提交",
            "cancel-text": "取消",
            loading: true
          },
          on: { "on-ok": _vm.handlePassword },
          model: {
            value: _vm.setPassword,
            callback: function($$v) {
              _vm.setPassword = $$v
            },
            expression: "setPassword"
          }
        },
        [
          _c(
            "Form",
            {
              ref: "formSetPassword",
              attrs: { model: _vm.formSetPassword, "label-width": 100 }
            },
            [
              _c(
                "FormItem",
                {
                  attrs: {
                    label: "原密码",
                    prop: "old_password",
                    rules: {
                      required: true,
                      message: "原密码不能为空！",
                      trigger: "blur"
                    }
                  }
                },
                [
                  _c("Input", {
                    attrs: { type: "password" },
                    model: {
                      value: _vm.formSetPassword.old_password,
                      callback: function($$v) {
                        _vm.$set(_vm.formSetPassword, "old_password", $$v)
                      },
                      expression: "formSetPassword.old_password"
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
                    label: "新密码",
                    prop: "password",
                    rules: {
                      required: true,
                      message: "密码不能为空！",
                      trigger: "blur"
                    }
                  }
                },
                [
                  _c("Input", {
                    attrs: { type: "password" },
                    model: {
                      value: _vm.formSetPassword.password,
                      callback: function($$v) {
                        _vm.$set(_vm.formSetPassword, "password", $$v)
                      },
                      expression: "formSetPassword.password"
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
                    label: "确认密码",
                    prop: "password_confirmation",
                    rules: {
                      required: true,
                      message: "确认密码不能为空！",
                      trigger: "blur"
                    }
                  }
                },
                [
                  _c("Input", {
                    attrs: { type: "password" },
                    model: {
                      value: _vm.formSetPassword.password_confirmation,
                      callback: function($$v) {
                        _vm.$set(
                          _vm.formSetPassword,
                          "password_confirmation",
                          $$v
                        )
                      },
                      expression: "formSetPassword.password_confirmation"
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
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-3b2ef637", module.exports)
  }
}

/***/ }),

/***/ 441:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = __webpack_require__(442)
/* template */
var __vue_template__ = __webpack_require__(443)
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
Component.options.__file = "resources\\assets\\js\\views\\admin\\users\\allot.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-313268c8", Component.options)
  } else {
    hotAPI.reload("data-v-313268c8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 442:
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
  props: {
    show: {
      type: Boolean,
      default: false
    },
    row: {
      type: Number,
      default: 0
    }
  },
  computed: {
    modalShow: {
      get: function get() {
        return this.show;
      },
      set: function set() {}
    },
    allotId: function allotId() {
      return this.row;
    }
  },
  data: function data() {
    return {
      loadingVisible: false,
      formItem: {
        permission: [],
        data: []
      }
    };
  },

  methods: {
    visibleChange: function visibleChange(visible) {
      if (visible === false) {
        this.$emit('visibleChange', visible);
      }
    },
    allCheck: function allCheck() {
      if (this.formItem.data.length === this.formItem.permission.length) {
        this.formItem.data = [];
      } else {
        this.formItem.data = this.formItem.permission.map(function (v) {
          return v.id;
        });
      }
    },
    submit: function submit(name) {
      var _this = this;

      this.loadingVisible = true;
      this.$post('user/' + this.allotId + '/role', {
        relation: this.formItem.data
      }).then(function (res) {
        _this.loadingVisible = false;
        _this.visibleChange(false);
      });
    }
  },
  watch: {
    // 监听组件显示
    modalShow: function modalShow(val, oldVal) {
      var _this2 = this;

      if (val) {
        this.$get('role/all').then(function (res) {
          _this2.formItem.permission = res.data;
        });
        this.$get('user/' + this.allotId + '/role').then(function (res) {
          _this2.formItem.data = res.data.map(function (v) {
            return v.id;
          });
        });
      } else {
        this.formItem.data = [];
      }
    }
  }
});

/***/ }),

/***/ 443:
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
          attrs: {
            title: "分配权限组",
            "mask-closable": false,
            "class-name": "vertical-center-modal",
            width: "500",
            "ok-text": "提交"
          },
          on: { "on-visible-change": _vm.visibleChange, "on-ok": _vm.submit },
          model: {
            value: _vm.modalShow,
            callback: function($$v) {
              _vm.modalShow = $$v
            },
            expression: "modalShow"
          }
        },
        [
          _c(
            "Form",
            {
              ref: "formItem",
              attrs: { model: _vm.formItem, "label-width": 1 }
            },
            [
              _c(
                "FormItem",
                [
                  _c(
                    "CheckboxGroup",
                    {
                      model: {
                        value: _vm.formItem.data,
                        callback: function($$v) {
                          _vm.$set(_vm.formItem, "data", $$v)
                        },
                        expression: "formItem.data"
                      }
                    },
                    _vm._l(_vm.formItem.permission, function(item) {
                      return _c(
                        "Checkbox",
                        { key: item.id, attrs: { label: item.id } },
                        [_vm._v(_vm._s(item.display_name))]
                      )
                    })
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
                { attrs: { size: "large" }, on: { click: _vm.allCheck } },
                [_vm._v("全选")]
              ),
              _vm._v(" "),
              _c(
                "Button",
                {
                  attrs: {
                    type: "primary",
                    size: "large",
                    loading: _vm.loadingVisible
                  },
                  on: {
                    click: function($event) {
                      _vm.submit("formItem")
                    }
                  }
                },
                [_vm._v("提交")]
              )
            ],
            1
          )
        ],
        1
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
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-313268c8", module.exports)
  }
}

/***/ }),

/***/ 444:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "box-flex" },
    [
      _c(
        "div",
        { staticClass: "box-flex-list" },
        [
          _c(
            "Card",
            { attrs: { bordered: false } },
            [
              _c(
                "p",
                { attrs: { slot: "title" }, slot: "title" },
                [
                  _c("span", [_vm._v("列表")]),
                  _vm._v(" "),
                  _c(
                    "Button",
                    {
                      attrs: { size: "small", type: "success" },
                      on: {
                        click: function($event) {
                          _vm.createModalShow = true
                        }
                      }
                    },
                    [_vm._v("添加")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("Table", {
                ref: "table",
                attrs: { columns: _vm.Columns, data: _vm.Datas, size: "small" }
              }),
              _vm._v(" "),
              _c("Page", {
                attrs: {
                  total: _vm.page.total,
                  size: "small",
                  current: _vm.page.current,
                  "page-size": _vm.page.page_size,
                  "show-total": ""
                },
                on: {
                  "update:current": function($event) {
                    _vm.$set(_vm.page, "current", $event)
                  }
                }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("Create", {
        attrs: { show: _vm.createModalShow },
        on: { visibleChange: _vm.visibleChangeCreate }
      }),
      _vm._v(" "),
      _c("Update", {
        attrs: { show: _vm.updateModalShow, row: _vm.updateId },
        on: { visibleChange: _vm.visibleChangeUpdate }
      }),
      _vm._v(" "),
      _c("Allot", {
        attrs: { show: _vm.allotModalShow, row: _vm.allotId },
        on: { visibleChange: _vm.visibleChangeAllot }
      }),
      _vm._v(" "),
      _c("Group", {
        attrs: { show: _vm.groupModalShow, row: _vm.groupId },
        on: { visibleChange: _vm.visibleChangeGroup }
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
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-fadd4de8", module.exports)
  }
}

/***/ }),

/***/ 492:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = __webpack_require__(493)
/* template */
var __vue_template__ = __webpack_require__(494)
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
Component.options.__file = "resources\\assets\\js\\views\\admin\\users\\group.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7a6910fe", Component.options)
  } else {
    hotAPI.reload("data-v-7a6910fe", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 493:
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
  props: {
    show: {
      type: Boolean,
      default: false
    },
    row: {
      type: Number,
      default: 0
    }
  },
  computed: {
    modalShow: {
      get: function get() {
        return this.show;
      },
      set: function set() {}
    },
    allotId: function allotId() {
      return this.row;
    }
  },
  data: function data() {
    return {
      loadingVisible: false,
      formItem: {
        permission: [],
        data: []
      }
    };
  },

  methods: {
    visibleChange: function visibleChange(visible) {
      if (visible === false) {
        this.$emit('visibleChange', visible);
      }
    },
    allCheck: function allCheck() {
      if (this.formItem.data.length === this.formItem.permission.length) {
        this.formItem.data = [];
      } else {
        this.formItem.data = this.formItem.permission.map(function (v) {
          return v.id;
        });
      }
    },
    submit: function submit(name) {
      var _this = this;

      this.loadingVisible = true;
      this.$post('user/' + this.allotId + '/group', {
        relation: this.formItem.data
      }).then(function (res) {
        _this.loadingVisible = false;
        _this.visibleChange(false);
      });
    }
  },
  watch: {
    // 监听组件显示
    modalShow: function modalShow(val, oldVal) {
      var _this2 = this;

      if (val) {
        this.$get('group/all').then(function (res) {
          _this2.formItem.permission = res.data;
        });
        this.$get('user/' + this.allotId + '/group').then(function (res) {
          _this2.formItem.data = res.data.map(function (v) {
            return v.id;
          });
        });
      } else {
        this.formItem.data = [];
      }
    }
  }
});

/***/ }),

/***/ 494:
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
          attrs: {
            title: "分配权限组",
            "mask-closable": false,
            "class-name": "vertical-center-modal",
            width: "500",
            "ok-text": "提交"
          },
          on: { "on-visible-change": _vm.visibleChange, "on-ok": _vm.submit },
          model: {
            value: _vm.modalShow,
            callback: function($$v) {
              _vm.modalShow = $$v
            },
            expression: "modalShow"
          }
        },
        [
          _c(
            "Form",
            {
              ref: "formItem",
              attrs: { model: _vm.formItem, "label-width": 1 }
            },
            [
              _c(
                "FormItem",
                [
                  _c(
                    "CheckboxGroup",
                    {
                      model: {
                        value: _vm.formItem.data,
                        callback: function($$v) {
                          _vm.$set(_vm.formItem, "data", $$v)
                        },
                        expression: "formItem.data"
                      }
                    },
                    _vm._l(_vm.formItem.permission, function(item) {
                      return _c(
                        "Checkbox",
                        { key: item.id, attrs: { label: item.id } },
                        [_vm._v(_vm._s(item.name))]
                      )
                    })
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
                { attrs: { size: "large" }, on: { click: _vm.allCheck } },
                [_vm._v("全选")]
              ),
              _vm._v(" "),
              _c(
                "Button",
                {
                  attrs: {
                    type: "primary",
                    size: "large",
                    loading: _vm.loadingVisible
                  },
                  on: {
                    click: function($event) {
                      _vm.submit("formItem")
                    }
                  }
                },
                [_vm._v("提交")]
              )
            ],
            1
          )
        ],
        1
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
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-7a6910fe", module.exports)
  }
}

/***/ })

});