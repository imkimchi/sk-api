var skApi = (function () {
  'use strict';

  function _callSuper(t, o, e) {
    return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
  }
  function _construct(t, e, r) {
    if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
    var o = [null];
    o.push.apply(o, e);
    var p = new (t.bind.apply(t, o))();
    return r && _setPrototypeOf(p, r.prototype), p;
  }
  function _isNativeReflectConstruct() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function () {
      return !!t;
    })();
  }
  function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e,
        n,
        i,
        u,
        a = [],
        f = !0,
        o = !1;
      try {
        if (i = (t = t.call(r)).next, 0 === l) {
          if (Object(t) !== t) return;
          f = !1;
        } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
      } catch (r) {
        o = !0, n = r;
      } finally {
        try {
          if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }
  function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
        _defineProperty(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  function _regeneratorRuntime() {
    _regeneratorRuntime = function () {
      return e;
    };
    var t,
      e = {},
      r = Object.prototype,
      n = r.hasOwnProperty,
      o = Object.defineProperty || function (t, e, r) {
        t[e] = r.value;
      },
      i = "function" == typeof Symbol ? Symbol : {},
      a = i.iterator || "@@iterator",
      c = i.asyncIterator || "@@asyncIterator",
      u = i.toStringTag || "@@toStringTag";
    function define(t, e, r) {
      return Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), t[e];
    }
    try {
      define({}, "");
    } catch (t) {
      define = function (t, e, r) {
        return t[e] = r;
      };
    }
    function wrap(t, e, r, n) {
      var i = e && e.prototype instanceof Generator ? e : Generator,
        a = Object.create(i.prototype),
        c = new Context(n || []);
      return o(a, "_invoke", {
        value: makeInvokeMethod(t, r, c)
      }), a;
    }
    function tryCatch(t, e, r) {
      try {
        return {
          type: "normal",
          arg: t.call(e, r)
        };
      } catch (t) {
        return {
          type: "throw",
          arg: t
        };
      }
    }
    e.wrap = wrap;
    var h = "suspendedStart",
      l = "suspendedYield",
      f = "executing",
      s = "completed",
      y = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var p = {};
    define(p, a, function () {
      return this;
    });
    var d = Object.getPrototypeOf,
      v = d && d(d(values([])));
    v && v !== r && n.call(v, a) && (p = v);
    var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
    function defineIteratorMethods(t) {
      ["next", "throw", "return"].forEach(function (e) {
        define(t, e, function (t) {
          return this._invoke(e, t);
        });
      });
    }
    function AsyncIterator(t, e) {
      function invoke(r, o, i, a) {
        var c = tryCatch(t[r], t, o);
        if ("throw" !== c.type) {
          var u = c.arg,
            h = u.value;
          return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
            invoke("next", t, i, a);
          }, function (t) {
            invoke("throw", t, i, a);
          }) : e.resolve(h).then(function (t) {
            u.value = t, i(u);
          }, function (t) {
            return invoke("throw", t, i, a);
          });
        }
        a(c.arg);
      }
      var r;
      o(this, "_invoke", {
        value: function (t, n) {
          function callInvokeWithMethodAndArg() {
            return new e(function (e, r) {
              invoke(t, n, e, r);
            });
          }
          return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
      });
    }
    function makeInvokeMethod(e, r, n) {
      var o = h;
      return function (i, a) {
        if (o === f) throw new Error("Generator is already running");
        if (o === s) {
          if ("throw" === i) throw a;
          return {
            value: t,
            done: !0
          };
        }
        for (n.method = i, n.arg = a;;) {
          var c = n.delegate;
          if (c) {
            var u = maybeInvokeDelegate(c, n);
            if (u) {
              if (u === y) continue;
              return u;
            }
          }
          if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
            if (o === h) throw o = s, n.arg;
            n.dispatchException(n.arg);
          } else "return" === n.method && n.abrupt("return", n.arg);
          o = f;
          var p = tryCatch(e, r, n);
          if ("normal" === p.type) {
            if (o = n.done ? s : l, p.arg === y) continue;
            return {
              value: p.arg,
              done: n.done
            };
          }
          "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
        }
      };
    }
    function maybeInvokeDelegate(e, r) {
      var n = r.method,
        o = e.iterator[n];
      if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
      var i = tryCatch(o, e.iterator, r.arg);
      if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
      var a = i.arg;
      return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
    }
    function pushTryEntry(t) {
      var e = {
        tryLoc: t[0]
      };
      1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
    }
    function resetTryEntry(t) {
      var e = t.completion || {};
      e.type = "normal", delete e.arg, t.completion = e;
    }
    function Context(t) {
      this.tryEntries = [{
        tryLoc: "root"
      }], t.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(e) {
      if (e || "" === e) {
        var r = e[a];
        if (r) return r.call(e);
        if ("function" == typeof e.next) return e;
        if (!isNaN(e.length)) {
          var o = -1,
            i = function next() {
              for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
              return next.value = t, next.done = !0, next;
            };
          return i.next = i;
        }
      }
      throw new TypeError(typeof e + " is not iterable");
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: !0
    }), o(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: !0
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
      var e = "function" == typeof t && t.constructor;
      return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
    }, e.mark = function (t) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
    }, e.awrap = function (t) {
      return {
        __await: t
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
      return this;
    }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
      void 0 === i && (i = Promise);
      var a = new AsyncIterator(wrap(t, r, n, o), i);
      return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
        return t.done ? t.value : a.next();
      });
    }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
      return this;
    }), define(g, "toString", function () {
      return "[object Generator]";
    }), e.keys = function (t) {
      var e = Object(t),
        r = [];
      for (var n in e) r.push(n);
      return r.reverse(), function next() {
        for (; r.length;) {
          var t = r.pop();
          if (t in e) return next.value = t, next.done = !1, next;
        }
        return next.done = !0, next;
      };
    }, e.values = values, Context.prototype = {
      constructor: Context,
      reset: function (e) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
      },
      stop: function () {
        this.done = !0;
        var t = this.tryEntries[0].completion;
        if ("throw" === t.type) throw t.arg;
        return this.rval;
      },
      dispatchException: function (e) {
        if (this.done) throw e;
        var r = this;
        function handle(n, o) {
          return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
        }
        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
          var i = this.tryEntries[o],
            a = i.completion;
          if ("root" === i.tryLoc) return handle("end");
          if (i.tryLoc <= this.prev) {
            var c = n.call(i, "catchLoc"),
              u = n.call(i, "finallyLoc");
            if (c && u) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            } else if (c) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            } else {
              if (!u) throw new Error("try statement without catch or finally");
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            }
          }
        }
      },
      abrupt: function (t, e) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var o = this.tryEntries[r];
          if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
            var i = o;
            break;
          }
        }
        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
        var a = i ? i.completion : {};
        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
      },
      complete: function (t, e) {
        if ("throw" === t.type) throw t.arg;
        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
      },
      finish: function (t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
        }
      },
      catch: function (t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.tryLoc === t) {
            var n = r.completion;
            if ("throw" === n.type) {
              var o = n.arg;
              resetTryEntry(r);
            }
            return o;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function (e, r, n) {
        return this.delegate = {
          iterator: values(e),
          resultName: r,
          nextLoc: n
        }, "next" === this.method && (this.arg = t), y;
      }
    }, e;
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : String(i);
  }
  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
        args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(undefined);
      });
    };
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
  function _isNativeFunction(fn) {
    try {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    } catch (e) {
      return typeof fn === "function";
    }
  }
  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;
      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);
        _cache.set(Class, Wrapper);
      }
      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }
      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;
        var F = function () {};
        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true,
      didErr = false,
      err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  // eslint-lint-disable-next-line @typescript-eslint/naming-convention
  var HTTPError = /*#__PURE__*/function (_Error) {
    _inherits(HTTPError, _Error);
    function HTTPError(response, request, options) {
      var _this;
      _classCallCheck(this, HTTPError);
      var code = response.status || response.status === 0 ? response.status : '';
      var title = response.statusText || '';
      var status = "".concat(code, " ").concat(title).trim();
      var reason = status ? "status code ".concat(status) : 'an unknown error';
      _this = _callSuper(this, HTTPError, ["Request failed with ".concat(reason)]);
      Object.defineProperty(_assertThisInitialized(_this), "response", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      Object.defineProperty(_assertThisInitialized(_this), "request", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      Object.defineProperty(_assertThisInitialized(_this), "options", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      _this.name = 'HTTPError';
      _this.response = response;
      _this.request = request;
      _this.options = options;
      return _this;
    }
    return _createClass(HTTPError);
  }( /*#__PURE__*/_wrapNativeSuper(Error));

  var TimeoutError = /*#__PURE__*/function (_Error) {
    _inherits(TimeoutError, _Error);
    function TimeoutError(request) {
      var _this;
      _classCallCheck(this, TimeoutError);
      _this = _callSuper(this, TimeoutError, ['Request timed out']);
      Object.defineProperty(_assertThisInitialized(_this), "request", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      _this.name = 'TimeoutError';
      _this.request = request;
      return _this;
    }
    return _createClass(TimeoutError);
  }( /*#__PURE__*/_wrapNativeSuper(Error));

  // eslint-disable-next-line @typescript-eslint/ban-types
  var isObject = function isObject(value) {
    return value !== null && _typeof(value) === 'object';
  };

  var validateAndMerge = function validateAndMerge() {
    for (var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++) {
      sources[_key] = arguments[_key];
    }
    for (var _i = 0, _sources = sources; _i < _sources.length; _i++) {
      var source = _sources[_i];
      if ((!isObject(source) || Array.isArray(source)) && source !== undefined) {
        throw new TypeError('The `options` argument must be an object');
      }
    }
    return deepMerge.apply(void 0, [{}].concat(sources));
  };
  var mergeHeaders = function mergeHeaders() {
    var source1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var source2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var result = new globalThis.Headers(source1);
    var isHeadersInstance = source2 instanceof globalThis.Headers;
    var source = new globalThis.Headers(source2);
    var _iterator = _createForOfIteratorHelper(source.entries()),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _slicedToArray(_step.value, 2),
          key = _step$value[0],
          value = _step$value[1];
        if (isHeadersInstance && value === 'undefined' || value === undefined) {
          result["delete"](key);
        } else {
          result.set(key, value);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return result;
  };
  // TODO: Make this strongly-typed (no `any`).
  var deepMerge = function deepMerge() {
    var returnValue = {};
    var headers = {};
    for (var _len2 = arguments.length, sources = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      sources[_key2] = arguments[_key2];
    }
    for (var _i2 = 0, _sources2 = sources; _i2 < _sources2.length; _i2++) {
      var source = _sources2[_i2];
      if (Array.isArray(source)) {
        if (!Array.isArray(returnValue)) {
          returnValue = [];
        }
        returnValue = [].concat(_toConsumableArray(returnValue), _toConsumableArray(source));
      } else if (isObject(source)) {
        for (var _i3 = 0, _Object$entries = Object.entries(source); _i3 < _Object$entries.length; _i3++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i3], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];
          if (isObject(value) && key in returnValue) {
            value = deepMerge(returnValue[key], value);
          }
          returnValue = _objectSpread2(_objectSpread2({}, returnValue), {}, _defineProperty({}, key, value));
        }
        if (isObject(source.headers)) {
          headers = mergeHeaders(headers, source.headers);
          returnValue.headers = headers;
        }
      }
    }
    return returnValue;
  };

  var supportsRequestStreams = function () {
    var duplexAccessed = false;
    var hasContentType = false;
    var supportsReadableStream = typeof globalThis.ReadableStream === 'function';
    var supportsRequest = typeof globalThis.Request === 'function';
    if (supportsReadableStream && supportsRequest) {
      hasContentType = new globalThis.Request('https://empty.invalid', {
        body: new globalThis.ReadableStream(),
        method: 'POST',
        // @ts-expect-error - Types are outdated.
        get duplex() {
          duplexAccessed = true;
          return 'half';
        }
      }).headers.has('Content-Type');
    }
    return duplexAccessed && !hasContentType;
  }();
  var supportsAbortController = typeof globalThis.AbortController === 'function';
  var supportsResponseStreams = typeof globalThis.ReadableStream === 'function';
  var supportsFormData = typeof globalThis.FormData === 'function';
  var requestMethods = ['get', 'post', 'put', 'patch', 'head', 'delete'];
  var responseTypes = {
    json: 'application/json',
    text: 'text/*',
    formData: 'multipart/form-data',
    arrayBuffer: '*/*',
    blob: '*/*'
  };
  // The maximum value of a 32bit int (see issue #117)
  var maxSafeTimeout = 2147483647;
  var stop = Symbol('stop');
  var kyOptionKeys = {
    json: true,
    parseJson: true,
    searchParams: true,
    prefixUrl: true,
    retry: true,
    timeout: true,
    hooks: true,
    throwHttpErrors: true,
    onDownloadProgress: true,
    fetch: true
  };
  var requestOptionsRegistry = {
    method: true,
    headers: true,
    body: true,
    mode: true,
    credentials: true,
    cache: true,
    redirect: true,
    referrer: true,
    referrerPolicy: true,
    integrity: true,
    keepalive: true,
    signal: true,
    window: true,
    dispatcher: true,
    duplex: true
  };

  var normalizeRequestMethod = function normalizeRequestMethod(input) {
    return requestMethods.includes(input) ? input.toUpperCase() : input;
  };
  var retryMethods = ['get', 'put', 'head', 'delete', 'options', 'trace'];
  var retryStatusCodes = [408, 413, 429, 500, 502, 503, 504];
  var retryAfterStatusCodes = [413, 429, 503];
  var defaultRetryOptions = {
    limit: 2,
    methods: retryMethods,
    statusCodes: retryStatusCodes,
    afterStatusCodes: retryAfterStatusCodes,
    maxRetryAfter: Number.POSITIVE_INFINITY,
    backoffLimit: Number.POSITIVE_INFINITY,
    delay: function delay(attemptCount) {
      return 0.3 * Math.pow(2, attemptCount - 1) * 1000;
    }
  };
  var normalizeRetryOptions = function normalizeRetryOptions() {
    var retry = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (typeof retry === 'number') {
      return _objectSpread2(_objectSpread2({}, defaultRetryOptions), {}, {
        limit: retry
      });
    }
    if (retry.methods && !Array.isArray(retry.methods)) {
      throw new Error('retry.methods must be an array');
    }
    if (retry.statusCodes && !Array.isArray(retry.statusCodes)) {
      throw new Error('retry.statusCodes must be an array');
    }
    return _objectSpread2(_objectSpread2(_objectSpread2({}, defaultRetryOptions), retry), {}, {
      afterStatusCodes: retryAfterStatusCodes
    });
  };

  // `Promise.race()` workaround (#91)
  function timeout(_x, _x2, _x3, _x4) {
    return _timeout.apply(this, arguments);
  }
  function _timeout() {
    _timeout = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request, init, abortController, options) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              var timeoutId = setTimeout(function () {
                if (abortController) {
                  abortController.abort();
                }
                reject(new TimeoutError(request));
              }, options.timeout);
              void options.fetch(request, init).then(resolve)["catch"](reject).then(function () {
                clearTimeout(timeoutId);
              });
            }));
          case 1:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _timeout.apply(this, arguments);
  }

  // https://github.com/sindresorhus/delay/tree/ab98ae8dfcb38e1593286c94d934e70d14a4e111
  function delay(_x, _x2) {
    return _delay.apply(this, arguments);
  }
  function _delay() {
    _delay = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(ms, _ref) {
      var signal;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            signal = _ref.signal;
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              if (signal) {
                signal.throwIfAborted();
                signal.addEventListener('abort', abortHandler, {
                  once: true
                });
              }
              function abortHandler() {
                clearTimeout(timeoutId);
                reject(signal.reason);
              }
              var timeoutId = setTimeout(function () {
                signal === null || signal === void 0 || signal.removeEventListener('abort', abortHandler);
                resolve();
              }, ms);
            }));
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _delay.apply(this, arguments);
  }

  var findUnknownOptions = function findUnknownOptions(request, options) {
    var unknownOptions = {};
    for (var key in options) {
      if (!(key in requestOptionsRegistry) && !(key in kyOptionKeys) && !(key in request)) {
        unknownOptions[key] = options[key];
      }
    }
    return unknownOptions;
  };

  var Ky = /*#__PURE__*/function () {
    // eslint-disable-next-line complexity
    function Ky(input) {
      var _options$method,
        _options$timeout,
        _options$fetch,
        _this = this;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      _classCallCheck(this, Ky);
      Object.defineProperty(this, "request", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, "abortController", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, "_retryCount", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: 0
      });
      Object.defineProperty(this, "_input", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, "_options", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      this._input = input;
      var isCredentialsSupported = ('credentials' in Request.prototype);
      this._options = _objectSpread2(_objectSpread2({
        credentials: isCredentialsSupported ? this._input.credentials : undefined
      }, options), {}, {
        headers: mergeHeaders(this._input.headers, options.headers),
        hooks: deepMerge({
          beforeRequest: [],
          beforeRetry: [],
          beforeError: [],
          afterResponse: []
        }, options.hooks),
        method: normalizeRequestMethod((_options$method = options.method) !== null && _options$method !== void 0 ? _options$method : this._input.method),
        // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
        prefixUrl: String(options.prefixUrl || ''),
        retry: normalizeRetryOptions(options.retry),
        throwHttpErrors: options.throwHttpErrors !== false,
        timeout: (_options$timeout = options.timeout) !== null && _options$timeout !== void 0 ? _options$timeout : 10000,
        fetch: (_options$fetch = options.fetch) !== null && _options$fetch !== void 0 ? _options$fetch : globalThis.fetch.bind(globalThis)
      });
      if (typeof this._input !== 'string' && !(this._input instanceof URL || this._input instanceof globalThis.Request)) {
        throw new TypeError('`input` must be a string, URL, or Request');
      }
      if (this._options.prefixUrl && typeof this._input === 'string') {
        if (this._input.startsWith('/')) {
          throw new Error('`input` must not begin with a slash when using `prefixUrl`');
        }
        if (!this._options.prefixUrl.endsWith('/')) {
          this._options.prefixUrl += '/';
        }
        this._input = this._options.prefixUrl + this._input;
      }
      if (supportsAbortController) {
        this.abortController = new globalThis.AbortController();
        if (this._options.signal) {
          var originalSignal = this._options.signal;
          this._options.signal.addEventListener('abort', function () {
            _this.abortController.abort(originalSignal.reason);
          });
        }
        this._options.signal = this.abortController.signal;
      }
      if (supportsRequestStreams) {
        // @ts-expect-error - Types are outdated.
        this._options.duplex = 'half';
      }
      this.request = new globalThis.Request(this._input, this._options);
      if (this._options.searchParams) {
        // eslint-disable-next-line unicorn/prevent-abbreviations
        var textSearchParams = typeof this._options.searchParams === 'string' ? this._options.searchParams.replace(/^\?/, '') : new URLSearchParams(this._options.searchParams).toString();
        // eslint-disable-next-line unicorn/prevent-abbreviations
        var searchParams = '?' + textSearchParams;
        var url = this.request.url.replace(/(?:\?.*?)?(?=#|$)/, searchParams);
        // To provide correct form boundary, Content-Type header should be deleted each time when new Request instantiated from another one
        if ((supportsFormData && this._options.body instanceof globalThis.FormData || this._options.body instanceof URLSearchParams) && !(this._options.headers && this._options.headers['content-type'])) {
          this.request.headers["delete"]('content-type');
        }
        // The spread of `this.request` is required as otherwise it misses the `duplex` option for some reason and throws.
        this.request = new globalThis.Request(new globalThis.Request(url, _objectSpread2({}, this.request)), this._options);
      }
      if (this._options.json !== undefined) {
        var _this$_options$header;
        this._options.body = JSON.stringify(this._options.json);
        this.request.headers.set('content-type', (_this$_options$header = this._options.headers.get('content-type')) !== null && _this$_options$header !== void 0 ? _this$_options$header : 'application/json');
        this.request = new globalThis.Request(this.request, {
          body: this._options.body
        });
      }
    }
    _createClass(Ky, [{
      key: "_calculateRetryDelay",
      value: function _calculateRetryDelay(error) {
        this._retryCount++;
        if (this._retryCount <= this._options.retry.limit && !(error instanceof TimeoutError)) {
          if (error instanceof HTTPError) {
            if (!this._options.retry.statusCodes.includes(error.response.status)) {
              return 0;
            }
            var retryAfter = error.response.headers.get('Retry-After');
            if (retryAfter && this._options.retry.afterStatusCodes.includes(error.response.status)) {
              var after = Number(retryAfter);
              if (Number.isNaN(after)) {
                after = Date.parse(retryAfter) - Date.now();
              } else {
                after *= 1000;
              }
              if (this._options.retry.maxRetryAfter !== undefined && after > this._options.retry.maxRetryAfter) {
                return 0;
              }
              return after;
            }
            if (error.response.status === 413) {
              return 0;
            }
          }
          var retryDelay = this._options.retry.delay(this._retryCount);
          return Math.min(this._options.retry.backoffLimit, retryDelay);
        }
        return 0;
      }
    }, {
      key: "_decorateResponse",
      value: function _decorateResponse(response) {
        var _this2 = this;
        if (this._options.parseJson) {
          response.json = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.t0 = _this2._options;
                  _context.next = 3;
                  return response.text();
                case 3:
                  _context.t1 = _context.sent;
                  return _context.abrupt("return", _context.t0.parseJson.call(_context.t0, _context.t1));
                case 5:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
        }
        return response;
      }
    }, {
      key: "_retry",
      value: function () {
        var _retry2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(function_) {
          var ms, _iterator, _step, hook, hookResult;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return function_();
              case 3:
                return _context2.abrupt("return", _context2.sent);
              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](0);
                ms = Math.min(this._calculateRetryDelay(_context2.t0), maxSafeTimeout);
                if (!(ms !== 0 && this._retryCount > 0)) {
                  _context2.next = 33;
                  break;
                }
                _context2.next = 12;
                return delay(ms, {
                  signal: this._options.signal
                });
              case 12:
                _iterator = _createForOfIteratorHelper(this._options.hooks.beforeRetry);
                _context2.prev = 13;
                _iterator.s();
              case 15:
                if ((_step = _iterator.n()).done) {
                  _context2.next = 24;
                  break;
                }
                hook = _step.value;
                _context2.next = 19;
                return hook({
                  request: this.request,
                  options: this._options,
                  error: _context2.t0,
                  retryCount: this._retryCount
                });
              case 19:
                hookResult = _context2.sent;
                if (!(hookResult === stop)) {
                  _context2.next = 22;
                  break;
                }
                return _context2.abrupt("return");
              case 22:
                _context2.next = 15;
                break;
              case 24:
                _context2.next = 29;
                break;
              case 26:
                _context2.prev = 26;
                _context2.t1 = _context2["catch"](13);
                _iterator.e(_context2.t1);
              case 29:
                _context2.prev = 29;
                _iterator.f();
                return _context2.finish(29);
              case 32:
                return _context2.abrupt("return", this._retry(function_));
              case 33:
                throw _context2.t0;
              case 34:
              case "end":
                return _context2.stop();
            }
          }, _callee2, this, [[0, 6], [13, 26, 29, 32]]);
        }));
        function _retry(_x) {
          return _retry2.apply(this, arguments);
        }
        return _retry;
      }()
    }, {
      key: "_fetch",
      value: function () {
        var _fetch2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
          var _iterator2, _step2, hook, result, nonRequestOptions;
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                _iterator2 = _createForOfIteratorHelper(this._options.hooks.beforeRequest);
                _context3.prev = 1;
                _iterator2.s();
              case 3:
                if ((_step2 = _iterator2.n()).done) {
                  _context3.next = 15;
                  break;
                }
                hook = _step2.value;
                _context3.next = 7;
                return hook(this.request, this._options);
              case 7:
                result = _context3.sent;
                if (!(result instanceof Request)) {
                  _context3.next = 11;
                  break;
                }
                this.request = result;
                return _context3.abrupt("break", 15);
              case 11:
                if (!(result instanceof Response)) {
                  _context3.next = 13;
                  break;
                }
                return _context3.abrupt("return", result);
              case 13:
                _context3.next = 3;
                break;
              case 15:
                _context3.next = 20;
                break;
              case 17:
                _context3.prev = 17;
                _context3.t0 = _context3["catch"](1);
                _iterator2.e(_context3.t0);
              case 20:
                _context3.prev = 20;
                _iterator2.f();
                return _context3.finish(20);
              case 23:
                nonRequestOptions = findUnknownOptions(this.request, this._options);
                if (!(this._options.timeout === false)) {
                  _context3.next = 26;
                  break;
                }
                return _context3.abrupt("return", this._options.fetch(this.request.clone(), nonRequestOptions));
              case 26:
                return _context3.abrupt("return", timeout(this.request.clone(), nonRequestOptions, this.abortController, this._options));
              case 27:
              case "end":
                return _context3.stop();
            }
          }, _callee3, this, [[1, 17, 20, 23]]);
        }));
        function _fetch() {
          return _fetch2.apply(this, arguments);
        }
        return _fetch;
      }() /* istanbul ignore next */
    }, {
      key: "_stream",
      value: function _stream(response, onDownloadProgress) {
        var totalBytes = Number(response.headers.get('content-length')) || 0;
        var transferredBytes = 0;
        if (response.status === 204) {
          if (onDownloadProgress) {
            onDownloadProgress({
              percent: 1,
              totalBytes: totalBytes,
              transferredBytes: transferredBytes
            }, new Uint8Array());
          }
          return new globalThis.Response(null, {
            status: response.status,
            statusText: response.statusText,
            headers: response.headers
          });
        }
        return new globalThis.Response(new globalThis.ReadableStream({
          start: function start(controller) {
            return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
              var reader, read, _read;
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    _read = function _read3() {
                      _read = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
                        var _yield$reader$read, done, value, percent;
                        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                          while (1) switch (_context4.prev = _context4.next) {
                            case 0:
                              _context4.next = 2;
                              return reader.read();
                            case 2:
                              _yield$reader$read = _context4.sent;
                              done = _yield$reader$read.done;
                              value = _yield$reader$read.value;
                              if (!done) {
                                _context4.next = 8;
                                break;
                              }
                              controller.close();
                              return _context4.abrupt("return");
                            case 8:
                              if (onDownloadProgress) {
                                transferredBytes += value.byteLength;
                                percent = totalBytes === 0 ? 0 : transferredBytes / totalBytes;
                                onDownloadProgress({
                                  percent: percent,
                                  transferredBytes: transferredBytes,
                                  totalBytes: totalBytes
                                }, value);
                              }
                              controller.enqueue(value);
                              _context4.next = 12;
                              return read();
                            case 12:
                            case "end":
                              return _context4.stop();
                          }
                        }, _callee4);
                      }));
                      return _read.apply(this, arguments);
                    };
                    read = function _read2() {
                      return _read.apply(this, arguments);
                    };
                    reader = response.body.getReader();
                    if (onDownloadProgress) {
                      onDownloadProgress({
                        percent: 0,
                        transferredBytes: 0,
                        totalBytes: totalBytes
                      }, new Uint8Array());
                    }
                    _context5.next = 6;
                    return read();
                  case 6:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5);
            }))();
          }
        }), {
          status: response.status,
          statusText: response.statusText,
          headers: response.headers
        });
      }
    }], [{
      key: "create",
      value: function create(input, options) {
        var ky = new Ky(input, options);
        var function_ = /*#__PURE__*/function () {
          var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
            var response, _iterator3, _step3, _hook, modifiedResponse, error, _iterator4, _step4, hook;
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  if (!(typeof ky._options.timeout === 'number' && ky._options.timeout > maxSafeTimeout)) {
                    _context6.next = 2;
                    break;
                  }
                  throw new RangeError("The `timeout` option cannot be greater than ".concat(maxSafeTimeout));
                case 2:
                  _context6.next = 4;
                  return Promise.resolve();
                case 4:
                  _context6.next = 6;
                  return ky._fetch();
                case 6:
                  response = _context6.sent;
                  _iterator3 = _createForOfIteratorHelper(ky._options.hooks.afterResponse);
                  _context6.prev = 8;
                  _iterator3.s();
                case 10:
                  if ((_step3 = _iterator3.n()).done) {
                    _context6.next = 18;
                    break;
                  }
                  _hook = _step3.value;
                  _context6.next = 14;
                  return _hook(ky.request, ky._options, ky._decorateResponse(response.clone()));
                case 14:
                  modifiedResponse = _context6.sent;
                  if (modifiedResponse instanceof globalThis.Response) {
                    response = modifiedResponse;
                  }
                case 16:
                  _context6.next = 10;
                  break;
                case 18:
                  _context6.next = 23;
                  break;
                case 20:
                  _context6.prev = 20;
                  _context6.t0 = _context6["catch"](8);
                  _iterator3.e(_context6.t0);
                case 23:
                  _context6.prev = 23;
                  _iterator3.f();
                  return _context6.finish(23);
                case 26:
                  ky._decorateResponse(response);
                  if (!(!response.ok && ky._options.throwHttpErrors)) {
                    _context6.next = 48;
                    break;
                  }
                  error = new HTTPError(response, ky.request, ky._options);
                  _iterator4 = _createForOfIteratorHelper(ky._options.hooks.beforeError);
                  _context6.prev = 30;
                  _iterator4.s();
                case 32:
                  if ((_step4 = _iterator4.n()).done) {
                    _context6.next = 39;
                    break;
                  }
                  hook = _step4.value;
                  _context6.next = 36;
                  return hook(error);
                case 36:
                  error = _context6.sent;
                case 37:
                  _context6.next = 32;
                  break;
                case 39:
                  _context6.next = 44;
                  break;
                case 41:
                  _context6.prev = 41;
                  _context6.t1 = _context6["catch"](30);
                  _iterator4.e(_context6.t1);
                case 44:
                  _context6.prev = 44;
                  _iterator4.f();
                  return _context6.finish(44);
                case 47:
                  throw error;
                case 48:
                  if (!ky._options.onDownloadProgress) {
                    _context6.next = 54;
                    break;
                  }
                  if (!(typeof ky._options.onDownloadProgress !== 'function')) {
                    _context6.next = 51;
                    break;
                  }
                  throw new TypeError('The `onDownloadProgress` option must be a function');
                case 51:
                  if (supportsResponseStreams) {
                    _context6.next = 53;
                    break;
                  }
                  throw new Error('Streams are not supported in your environment. `ReadableStream` is missing.');
                case 53:
                  return _context6.abrupt("return", ky._stream(response.clone(), ky._options.onDownloadProgress));
                case 54:
                  return _context6.abrupt("return", response);
                case 55:
                case "end":
                  return _context6.stop();
              }
            }, _callee6, null, [[8, 20, 23, 26], [30, 41, 44, 47]]);
          }));
          return function function_() {
            return _ref2.apply(this, arguments);
          };
        }();
        var isRetriableMethod = ky._options.retry.methods.includes(ky.request.method.toLowerCase());
        var result = isRetriableMethod ? ky._retry(function_) : function_();
        var _loop = function _loop() {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            type = _Object$entries$_i[0],
            mimeType = _Object$entries$_i[1];
          result[type] = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
            var awaitedResult, response, arrayBuffer, responseSize;
            return _regeneratorRuntime().wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
                case 0:
                  // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
                  ky.request.headers.set('accept', ky.request.headers.get('accept') || mimeType);
                  _context7.next = 3;
                  return result;
                case 3:
                  awaitedResult = _context7.sent;
                  response = awaitedResult.clone();
                  if (!(type === 'json')) {
                    _context7.next = 20;
                    break;
                  }
                  if (!(response.status === 204)) {
                    _context7.next = 8;
                    break;
                  }
                  return _context7.abrupt("return", '');
                case 8:
                  _context7.next = 10;
                  return response.clone().arrayBuffer();
                case 10:
                  arrayBuffer = _context7.sent;
                  responseSize = arrayBuffer.byteLength;
                  if (!(responseSize === 0)) {
                    _context7.next = 14;
                    break;
                  }
                  return _context7.abrupt("return", '');
                case 14:
                  if (!options.parseJson) {
                    _context7.next = 20;
                    break;
                  }
                  _context7.t0 = options;
                  _context7.next = 18;
                  return response.text();
                case 18:
                  _context7.t1 = _context7.sent;
                  return _context7.abrupt("return", _context7.t0.parseJson.call(_context7.t0, _context7.t1));
                case 20:
                  return _context7.abrupt("return", response[type]());
                case 21:
                case "end":
                  return _context7.stop();
              }
            }, _callee7);
          }));
        };
        for (var _i = 0, _Object$entries = Object.entries(responseTypes); _i < _Object$entries.length; _i++) {
          _loop();
        }
        return result;
      }
    }]);
    return Ky;
  }();

  var createInstance = function createInstance(defaults) {
    // eslint-disable-next-line @typescript-eslint/promise-function-async
    var ky = function ky(input, options) {
      return Ky.create(input, validateAndMerge(defaults, options));
    };
    var _iterator = _createForOfIteratorHelper(requestMethods),
      _step;
    try {
      var _loop = function _loop() {
        var method = _step.value;
        // eslint-disable-next-line @typescript-eslint/promise-function-async
        ky[method] = function (input, options) {
          return Ky.create(input, validateAndMerge(defaults, options, {
            method: method
          }));
        };
      };
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    ky.create = function (newDefaults) {
      return createInstance(validateAndMerge(newDefaults));
    };
    ky.extend = function (newDefaults) {
      return createInstance(validateAndMerge(defaults, newDefaults));
    };
    ky.stop = stop;
    return ky;
  };
  var ky = createInstance();

  var skApi = /*#__PURE__*/function () {
    function skApi(baseUrl) {
      var headers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      _classCallCheck(this, skApi);
      this.baseUrl = baseUrl;
      this.headers = headers;
      this.endPoints = {
        insertCounsel: '/api/counsel/insert.do',
        infoSecRequest: '/api/inforsec/request.do',
        infoSecSave: '/api/inforsec/save.do',
        introSave: '/api/intro/save.do',
        customerIntro: '/api/customer-intro.do',
        officialReg: '/api/officialReg.do',
        uncomfortable: '/api/uncomfortable.do'
      };
    }
    _createClass(skApi, [{
      key: "request",
      value: function () {
        var _request = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(endpoint) {
          var method,
            data,
            options,
            url,
            kyOptions,
            response,
            _args = arguments;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                method = _args.length > 1 && _args[1] !== undefined ? _args[1] : 'GET';
                data = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
                options = _args.length > 3 && _args[3] !== undefined ? _args[3] : {};
                url = "".concat(this.baseUrl).concat(endpoint);
                kyOptions = _objectSpread2(_objectSpread2({}, options), {}, {
                  method: method,
                  headers: _objectSpread2(_objectSpread2({}, this.headers), {}, {
                    'Content-Type': method === 'POST' ? 'application/json' : undefined
                  }, options.headers),
                  json: method === 'POST' ? data : undefined
                });
                _context.prev = 5;
                _context.next = 8;
                return ky(url, kyOptions);
              case 8:
                response = _context.sent;
                _context.next = 11;
                return response.json();
              case 11:
                return _context.abrupt("return", _context.sent);
              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](5);
                throw _context.t0;
              case 17:
              case "end":
                return _context.stop();
            }
          }, _callee, this, [[5, 14]]);
        }));
        function request(_x) {
          return _request.apply(this, arguments);
        }
        return request;
      }()
    }, {
      key: "get",
      value: function get(endpoint) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return this.request(endpoint, 'GET', {}, options);
      }
    }, {
      key: "post",
      value: function post(endpoint, data) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        return this.request(endpoint, 'POST', data, options);
      }
    }, {
      key: "insertCounsel",
      value: function insertCounsel(data) {
        return this.post(this.endPoints.insertCounsel, data);
      }
    }, {
      key: "infoSecRequest",
      value: function infoSecRequest(data) {
        return this.post(this.endPoints.infoSecRequest, data);
      }
    }, {
      key: "infoSecSave",
      value: function infoSecSave(data) {
        return this.post(this.endPoints.infoSecSave, data);
      }
    }, {
      key: "introSave",
      value: function introSave(data) {
        return this.post(this.endPoints.introSave, data);
      }
    }, {
      key: "customerIntro",
      value: function customerIntro(data) {
        return this.post(this.endPoints.customerIntro, data);
      }
    }, {
      key: "officialReg",
      value: function officialReg(data) {
        return this.get(this.endPoints.officialReg, data);
      }
    }, {
      key: "uncomfortable",
      value: function uncomfortable(data) {
        return this.post(this.endPoints.uncomfortable, data);
      }
    }]);
    return skApi;
  }();

  return skApi;

})();
//# sourceMappingURL=sk-api.js.map
