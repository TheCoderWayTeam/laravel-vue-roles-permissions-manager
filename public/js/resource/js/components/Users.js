"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resource/js/components/Users"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Users.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Users.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "users",
  data: function data() {
    return {
      users: {},
      user: {
        id: "",
        name: "",
        email: "",
        currentroles: [],
        currentpermissions: []
      },
      errors: {
        name: "",
        email: ""
      },
      roles: [],
      permissions: [],
      processing: false,
      isError: false,
      addform: false
    };
  },
  mounted: function mounted() {
    this.getUsers();
    this.getRoles();
    this.getPermissions();
  },
  methods: {
    validEmail: function validEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    getUsers: function getUsers() {
      var _arguments = arguments,
          _this = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var page;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                page = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : 1;
                _context.next = 3;
                return axios.get('/api/users?page=' + page).then(function (response) {
                  _this.users = response.data;
                })["catch"](function (error) {
                  console.log(error);
                  _this.users = {};
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    editUser: function editUser(id) {
      var _this2 = this;

      axios.post('/api/users/' + id).then(function (response) {
        _this2.user.id = response.data.data.id;
        _this2.user.name = response.data.data.name;
        _this2.user.email = response.data.data.email;
        _this2.user.currentroles = response.data.data.currentroles;
        _this2.user.currentpermissions = response.data.data.currentpermissions;
        _this2.addform = true;
      })["catch"](function (error) {
        console.log(error);
        _this2.roles = [];
      });
    },
    saveUser: function saveUser() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this3.isError = false;

                if (!_this3.user.name) {
                  _this3.errors.name = ['User name is required'];
                  _this3.isError = true;
                } else {
                  _this3.errors.name = '';
                }

                if (!_this3.addform) {
                  if (!_this3.user.email) {
                    _this3.errors.email = ['The email is required'];
                    _this3.isError = true;
                  } else if (!_this3.validEmail(_this3.user.email)) {
                    _this3.errors.email = ['The email must be a valid email address.'];
                    _this3.isError = true;
                  } else {
                    _this3.errors.email = '';
                  }

                  if (!_this3.user.password) {
                    _this3.errors.password = ['Password is required'];
                    _this3.isError = true;
                  } else {
                    _this3.errors.password = '';
                  }

                  if (!_this3.user.password_confirmation) {
                    _this3.errors.password_confirmation = ['Password confirmation is required'];
                    _this3.isError = true;
                  } else if (_this3.user.password_confirmation != _this3.user.password) {
                    _this3.errors.password_confirmation = ['Password confirmation did\'t match.'];
                    _this3.isError = true;
                  } else {
                    _this3.errors.password_confirmation = '';
                  }
                }

                if (!_this3.isError) {
                  _context2.next = 7;
                  break;
                }

                return _context2.abrupt("return", false);

              case 7:
                _this3.errors.name = '';
                _this3.errors.email = '';
                _this3.errors.password = '';
                _this3.errors.password_confirmation = '';

              case 11:
                _this3.processing = true;
                _context2.next = 14;
                return axios.post('/api/usersdata/save', _this3.user).then(function (_ref) {
                  var data = _ref.data;

                  _this3.$bvToast.toast(data.message, {
                    title: data.title,
                    toaster: "b-toaster-top-right",
                    variant: "success",
                    autoHideDelay: 5000
                  });
                })["catch"](function (_ref2) {
                  var data = _ref2.response.data;
                  _this3.errors = data.errors;
                })["finally"](function () {
                  _this3.processing = false;

                  _this3.getUsers();
                });

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    deleteUser: function deleteUser(id) {
      var _this4 = this;

      if (confirm("Are you sure to delete this user ?")) {
        axios["delete"]("/api/users/delete/".concat(id)).then(function (response) {
          _this4.getUsers();
        })["catch"](function (error) {
          console.log(error);
        });
      }
    },
    resetform: function resetform() {
      this.user.id = '';
      this.user.name = '';
      this.user.email = '';
      this.user.currentroles = [];
      this.user.currentpermissions = [];
      this.addform = false;
    },
    getRoles: function getRoles() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios.get('/api/roles').then(function (response) {
                  _this5.roles = response.data.data;
                })["catch"](function (error) {
                  console.log(error);
                  _this5.roles = [];
                });

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    getPermissions: function getPermissions() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return axios.get('/api/permissions').then(function (response) {
                  _this6.permissions = response.data.data;
                })["catch"](function (error) {
                  console.log(error);
                  _this6.permissions = [];
                });

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Users.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/Users.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_vue_vue_type_template_id_30c27aa6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Users.vue?vue&type=template&id=30c27aa6& */ "./resources/js/components/Users.vue?vue&type=template&id=30c27aa6&");
/* harmony import */ var _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Users.vue?vue&type=script&lang=js& */ "./resources/js/components/Users.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Users_vue_vue_type_template_id_30c27aa6___WEBPACK_IMPORTED_MODULE_0__.render,
  _Users_vue_vue_type_template_id_30c27aa6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Users.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Users.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/Users.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Users.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Users.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Users.vue?vue&type=template&id=30c27aa6&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Users.vue?vue&type=template&id=30c27aa6& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_30c27aa6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_30c27aa6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_30c27aa6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Users.vue?vue&type=template&id=30c27aa6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Users.vue?vue&type=template&id=30c27aa6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Users.vue?vue&type=template&id=30c27aa6&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Users.vue?vue&type=template&id=30c27aa6& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12" }, [
        _c("div", { staticClass: "card shadow-sm" }, [
          _c("div", { staticClass: "card-header" }, [
            _c("div", { staticClass: "d-flex align-items-center" }, [
              _c("h3", { staticClass: "mr-auto p-3" }, [_vm._v("Users")]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "btn-group float-right",
                  attrs: { role: "group" },
                },
                [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary btn-block",
                      attrs: { type: "button" },
                      on: { click: _vm.resetform },
                    },
                    [
                      _vm._v(
                        "\r\n                                    Add New\r\n                                "
                      ),
                    ]
                  ),
                ]
              ),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "d-flex" }, [
              _c(
                "div",
                { staticClass: "col-6 mr-auto" },
                [
                  _c("div", { staticClass: "table-responsive" }, [
                    _c("table", { staticClass: "table table-bordered" }, [
                      _vm._m(0),
                      _vm._v(" "),
                      _vm.users && (_vm.users.data || []).length > 0
                        ? _c(
                            "tbody",
                            _vm._l(_vm.users.data, function (user, key) {
                              return _c("tr", { key: key }, [
                                _c("td", [_vm._v(_vm._s(user.id))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(user.name))]),
                                _vm._v(" "),
                                _c("td", [
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-success",
                                      attrs: { type: "button" },
                                      on: {
                                        click: function ($event) {
                                          return _vm.editUser(user.id)
                                        },
                                      },
                                    },
                                    [_vm._v("Edit")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-danger",
                                      attrs: { type: "button" },
                                      on: {
                                        click: function ($event) {
                                          return _vm.deleteUser(user.id)
                                        },
                                      },
                                    },
                                    [_vm._v("Delete")]
                                  ),
                                ]),
                              ])
                            }),
                            0
                          )
                        : _c("tbody", [_vm._m(1)]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("pagination", {
                    attrs: { align: "center", data: _vm.users },
                    on: { "pagination-change-page": _vm.getUsers },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-5" }, [
                _c(
                  "form",
                  {
                    ref: "RoleForm",
                    staticClass: "row",
                    attrs: { action: "javascript:void(0)", method: "post" },
                    on: { submit: _vm.saveUser },
                  },
                  [
                    _c("div", { staticClass: "form-group col-12 mb-2" }, [
                      _vm._m(2),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.user.id,
                            expression: "user.id",
                          },
                        ],
                        attrs: { type: "hidden", name: "id" },
                        domProps: { value: _vm.user.id },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.user, "id", $event.target.value)
                          },
                        },
                      }),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.user.name,
                            expression: "user.name",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          name: "name",
                          id: "name",
                          placeholder: "Enter user name",
                        },
                        domProps: { value: _vm.user.name },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.user, "name", $event.target.value)
                          },
                        },
                      }),
                      _vm._v(" "),
                      _vm.errors.name
                        ? _c("span", { staticClass: "text-danger" }, [
                            _vm._v(_vm._s(_vm.errors.name[0])),
                          ])
                        : _vm._e(),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group col-12 mb-2" }, [
                      _vm._m(3),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.user.email,
                            expression: "user.email",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          name: "email",
                          id: "email",
                          placeholder: "Enter Email",
                          disabled: _vm.addform,
                        },
                        domProps: { value: _vm.user.email },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.user, "email", $event.target.value)
                          },
                        },
                      }),
                      _vm._v(" "),
                      _vm.errors.email
                        ? _c("span", { staticClass: "text-danger" }, [
                            _vm._v(_vm._s(_vm.errors.email[0])),
                          ])
                        : _vm._e(),
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "form-group col-12 mb-2",
                        attrs: { hidden: _vm.addform },
                      },
                      [
                        _vm._m(4),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.user.password,
                              expression: "user.password",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "password",
                            name: "password",
                            id: "password",
                            placeholder: "Enter Password",
                          },
                          domProps: { value: _vm.user.password },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.user,
                                "password",
                                $event.target.value
                              )
                            },
                          },
                        }),
                        _vm._v(" "),
                        _vm.errors.password
                          ? _c("span", { staticClass: "text-danger" }, [
                              _vm._v(_vm._s(_vm.errors.password[0])),
                            ])
                          : _vm._e(),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "form-group col-12 mb-2",
                        attrs: { hidden: _vm.addform },
                      },
                      [
                        _vm._m(5),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.user.password_confirmation,
                              expression: "user.password_confirmation",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "password_confirmation",
                            name: "password_confirmation",
                            id: "password_confirmation",
                            placeholder: "Enter Password",
                          },
                          domProps: { value: _vm.user.password_confirmation },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.user,
                                "password_confirmation",
                                $event.target.value
                              )
                            },
                          },
                        }),
                        _vm._v(" "),
                        _vm.errors.password_confirmation
                          ? _c("span", { staticClass: "text-danger" }, [
                              _vm._v(
                                _vm._s(_vm.errors.password_confirmation[0])
                              ),
                            ])
                          : _vm._e(),
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group col-12 mb-2 mt-2" }, [
                      _vm._m(6),
                      _vm._v(" "),
                      _c("div", { staticClass: "d-flex" }, [
                        _c(
                          "div",
                          { staticClass: "row" },
                          _vm._l(_vm.roles, function (role, key) {
                            return _c(
                              "div",
                              {
                                key: key,
                                staticClass: "col-4 checkbox-inline",
                              },
                              [
                                _c("label", { attrs: { for: role.name } }, [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.user.currentroles,
                                        expression: "user.currentroles",
                                      },
                                    ],
                                    attrs: { type: "checkbox" },
                                    domProps: {
                                      value: role.id,
                                      checked:
                                        _vm.user.currentroles.indexOf(
                                          role.id
                                        ) !== -1,
                                      checked: Array.isArray(
                                        _vm.user.currentroles
                                      )
                                        ? _vm._i(
                                            _vm.user.currentroles,
                                            role.id
                                          ) > -1
                                        : _vm.user.currentroles,
                                    },
                                    on: {
                                      change: function ($event) {
                                        var $$a = _vm.user.currentroles,
                                          $$el = $event.target,
                                          $$c = $$el.checked ? true : false
                                        if (Array.isArray($$a)) {
                                          var $$v = role.id,
                                            $$i = _vm._i($$a, $$v)
                                          if ($$el.checked) {
                                            $$i < 0 &&
                                              _vm.$set(
                                                _vm.user,
                                                "currentroles",
                                                $$a.concat([$$v])
                                              )
                                          } else {
                                            $$i > -1 &&
                                              _vm.$set(
                                                _vm.user,
                                                "currentroles",
                                                $$a
                                                  .slice(0, $$i)
                                                  .concat($$a.slice($$i + 1))
                                              )
                                          }
                                        } else {
                                          _vm.$set(
                                            _vm.user,
                                            "currentroles",
                                            $$c
                                          )
                                        }
                                      },
                                    },
                                  }),
                                  _vm._v(
                                    " " +
                                      _vm._s(role.name) +
                                      "\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t"
                                  ),
                                ]),
                              ]
                            )
                          }),
                          0
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group col-12 mb-2 mt-2" }, [
                      _vm._m(7),
                      _vm._v(" "),
                      _c("div", { staticClass: "d-flex" }, [
                        _c(
                          "div",
                          { staticClass: "row" },
                          _vm._l(_vm.permissions, function (permission, key) {
                            return _c(
                              "div",
                              {
                                key: key,
                                staticClass: "col-4 checkbox-inline",
                              },
                              [
                                _c(
                                  "label",
                                  { attrs: { for: permission.name } },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.user.currentpermissions,
                                          expression: "user.currentpermissions",
                                        },
                                      ],
                                      attrs: { type: "checkbox" },
                                      domProps: {
                                        value: permission.id,
                                        checked:
                                          _vm.user.currentpermissions.indexOf(
                                            permission.id
                                          ) !== -1,
                                        checked: Array.isArray(
                                          _vm.user.currentpermissions
                                        )
                                          ? _vm._i(
                                              _vm.user.currentpermissions,
                                              permission.id
                                            ) > -1
                                          : _vm.user.currentpermissions,
                                      },
                                      on: {
                                        change: function ($event) {
                                          var $$a = _vm.user.currentpermissions,
                                            $$el = $event.target,
                                            $$c = $$el.checked ? true : false
                                          if (Array.isArray($$a)) {
                                            var $$v = permission.id,
                                              $$i = _vm._i($$a, $$v)
                                            if ($$el.checked) {
                                              $$i < 0 &&
                                                _vm.$set(
                                                  _vm.user,
                                                  "currentpermissions",
                                                  $$a.concat([$$v])
                                                )
                                            } else {
                                              $$i > -1 &&
                                                _vm.$set(
                                                  _vm.user,
                                                  "currentpermissions",
                                                  $$a
                                                    .slice(0, $$i)
                                                    .concat($$a.slice($$i + 1))
                                                )
                                            }
                                          } else {
                                            _vm.$set(
                                              _vm.user,
                                              "currentpermissions",
                                              $$c
                                            )
                                          }
                                        },
                                      },
                                    }),
                                    _vm._v(
                                      " " +
                                        _vm._s(permission.name) +
                                        "\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t"
                                    ),
                                  ]
                                ),
                              ]
                            )
                          }),
                          0
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-2 mb-2 mt-2" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary btn-block",
                          attrs: { type: "submit", disabled: _vm.processing },
                        },
                        [
                          _vm._v(
                            "\r\n\t\t\t\t\t\t\t\t\t\t\t" +
                              _vm._s(_vm.processing ? "Please wait" : "Save") +
                              "\r\n\t\t\t\t\t\t\t\t\t\t"
                          ),
                        ]
                      ),
                    ]),
                  ]
                ),
              ]),
            ]),
          ]),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("Title")]),
        _vm._v(" "),
        _c("th", [_vm._v("Actions")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", { attrs: { colspan: "4", align: "center" } }, [
        _vm._v("No User Found."),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "font-weight-bold col-12", attrs: { for: "name" } },
      [
        _vm._v("User Name "),
        _c("i", { staticClass: "bi bi-asterisk text-danger small-font" }),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "font-weight-bold", attrs: { for: "email" } },
      [
        _vm._v("Email "),
        _c("i", { staticClass: "bi bi-asterisk text-danger small-font" }),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "font-weight-bold", attrs: { for: "password" } },
      [
        _vm._v("Password "),
        _c("i", { staticClass: "bi bi-asterisk text-danger small-font" }),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      {
        staticClass: "font-weight-bold",
        attrs: { for: "password_confirmation" },
      },
      [
        _vm._v("Confirm Password "),
        _c("i", { staticClass: "bi bi-asterisk text-danger small-font" }),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "font-weight-bold col-12", attrs: { for: "roles" } },
      [
        _c("h2", [_vm._v("Assign Roles")]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "Please check the roles which you want to assign to this user"
          ),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "font-weight-bold col-12", attrs: { for: "permissions" } },
      [
        _c("h2", [_vm._v("Assign Permissions")]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "Please check the special permissions other then role permissions you want to assign to this user"
          ),
        ]),
      ]
    )
  },
]
render._withStripped = true



/***/ })

}]);