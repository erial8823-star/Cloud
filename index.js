function $c(e, t) {
    for (var n = 0; n < t.length; n++) {
        const i = t[n];
        if (typeof i != "string" && !Array.isArray(i)) {
            for (const r in i)
                if (r !== "default" && !(r in e)) {
                    const a = Object.getOwnPropertyDescriptor(i, r);
                    a && Object.defineProperty(e, r, a.get ? a : {
                        enumerable: !0,
                        get: ()=>i[r]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]'))
        i(r);
    new MutationObserver(r=>{
        for (const a of r)
            if (a.type === "childList")
                for (const o of a.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && i(o)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(r) {
        const a = {};
        return r.integrity && (a.integrity = r.integrity),
        r.referrerPolicy && (a.referrerPolicy = r.referrerPolicy),
        r.crossOrigin === "use-credentials" ? a.credentials = "include" : r.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin",
        a
    }
    function i(r) {
        if (r.ep)
            return;
        r.ep = !0;
        const a = n(r);
        fetch(r.href, a)
    }
}
)();
function Zc(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Yc = {
    exports: {}
}
  , Io = {}
  , Kc = {
    exports: {}
}
  , ae = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qr = Symbol.for("react.element")
  , Fh = Symbol.for("react.portal")
  , Hh = Symbol.for("react.fragment")
  , Wh = Symbol.for("react.strict_mode")
  , Gh = Symbol.for("react.profiler")
  , Vh = Symbol.for("react.provider")
  , Xh = Symbol.for("react.context")
  , $h = Symbol.for("react.forward_ref")
  , Zh = Symbol.for("react.suspense")
  , Yh = Symbol.for("react.memo")
  , Kh = Symbol.for("react.lazy")
  , Jd = Symbol.iterator;
function Qh(e) {
    return e === null || typeof e != "object" ? null : (e = Jd && e[Jd] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Qc = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Jc = Object.assign
  , qc = {};
function Zi(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = qc,
    this.updater = n || Qc
}
Zi.prototype.isReactComponent = {};
Zi.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
Zi.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function eu() {}
eu.prototype = Zi.prototype;
function Ws(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = qc,
    this.updater = n || Qc
}
var Gs = Ws.prototype = new eu;
Gs.constructor = Ws;
Jc(Gs, Zi.prototype);
Gs.isPureReactComponent = !0;
var qd = Array.isArray
  , tu = Object.prototype.hasOwnProperty
  , Vs = {
    current: null
}
  , nu = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function iu(e, t, n) {
    var i, r = {}, a = null, o = null;
    if (t != null)
        for (i in t.ref !== void 0 && (o = t.ref),
        t.key !== void 0 && (a = "" + t.key),
        t)
            tu.call(t, i) && !nu.hasOwnProperty(i) && (r[i] = t[i]);
    var l = arguments.length - 2;
    if (l === 1)
        r.children = n;
    else if (1 < l) {
        for (var s = Array(l), c = 0; c < l; c++)
            s[c] = arguments[c + 2];
        r.children = s
    }
    if (e && e.defaultProps)
        for (i in l = e.defaultProps,
        l)
            r[i] === void 0 && (r[i] = l[i]);
    return {
        $$typeof: Qr,
        type: e,
        key: a,
        ref: o,
        props: r,
        _owner: Vs.current
    }
}
function Jh(e, t) {
    return {
        $$typeof: Qr,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function Xs(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Qr
}
function qh(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var ef = /\/+/g;
function rl(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? qh("" + e.key) : t.toString(36)
}
function ja(e, t, n, i, r) {
    var a = typeof e;
    (a === "undefined" || a === "boolean") && (e = null);
    var o = !1;
    if (e === null)
        o = !0;
    else
        switch (a) {
        case "string":
        case "number":
            o = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case Qr:
            case Fh:
                o = !0
            }
        }
    if (o)
        return o = e,
        r = r(o),
        e = i === "" ? "." + rl(o, 0) : i,
        qd(r) ? (n = "",
        e != null && (n = e.replace(ef, "$&/") + "/"),
        ja(r, t, n, "", function(c) {
            return c
        })) : r != null && (Xs(r) && (r = Jh(r, n + (!r.key || o && o.key === r.key ? "" : ("" + r.key).replace(ef, "$&/") + "/") + e)),
        t.push(r)),
        1;
    if (o = 0,
    i = i === "" ? "." : i + ":",
    qd(e))
        for (var l = 0; l < e.length; l++) {
            a = e[l];
            var s = i + rl(a, l);
            o += ja(a, t, n, s, r)
        }
    else if (s = Qh(e),
    typeof s == "function")
        for (e = s.call(e),
        l = 0; !(a = e.next()).done; )
            a = a.value,
            s = i + rl(a, l++),
            o += ja(a, t, n, s, r);
    else if (a === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return o
}
function ha(e, t, n) {
    if (e == null)
        return e;
    var i = []
      , r = 0;
    return ja(e, i, "", "", function(a) {
        return t.call(n, a, r++)
    }),
    i
}
function e4(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var lt = {
    current: null
}
  , Ba = {
    transition: null
}
  , t4 = {
    ReactCurrentDispatcher: lt,
    ReactCurrentBatchConfig: Ba,
    ReactCurrentOwner: Vs
};
ae.Children = {
    map: ha,
    forEach: function(e, t, n) {
        ha(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return ha(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return ha(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Xs(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
ae.Component = Zi;
ae.Fragment = Hh;
ae.Profiler = Gh;
ae.PureComponent = Ws;
ae.StrictMode = Wh;
ae.Suspense = Zh;
ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = t4;
ae.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var i = Jc({}, e.props)
      , r = e.key
      , a = e.ref
      , o = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (a = t.ref,
        o = Vs.current),
        t.key !== void 0 && (r = "" + t.key),
        e.type && e.type.defaultProps)
            var l = e.type.defaultProps;
        for (s in t)
            tu.call(t, s) && !nu.hasOwnProperty(s) && (i[s] = t[s] === void 0 && l !== void 0 ? l[s] : t[s])
    }
    var s = arguments.length - 2;
    if (s === 1)
        i.children = n;
    else if (1 < s) {
        l = Array(s);
        for (var c = 0; c < s; c++)
            l[c] = arguments[c + 2];
        i.children = l
    }
    return {
        $$typeof: Qr,
        type: e.type,
        key: r,
        ref: a,
        props: i,
        _owner: o
    }
}
;
ae.createContext = function(e) {
    return e = {
        $$typeof: Xh,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: Vh,
        _context: e
    },
    e.Consumer = e
}
;
ae.createElement = iu;
ae.createFactory = function(e) {
    var t = iu.bind(null, e);
    return t.type = e,
    t
}
;
ae.createRef = function() {
    return {
        current: null
    }
}
;
ae.forwardRef = function(e) {
    return {
        $$typeof: $h,
        render: e
    }
}
;
ae.isValidElement = Xs;
ae.lazy = function(e) {
    return {
        $$typeof: Kh,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: e4
    }
}
;
ae.memo = function(e, t) {
    return {
        $$typeof: Yh,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
ae.startTransition = function(e) {
    var t = Ba.transition;
    Ba.transition = {};
    try {
        e()
    } finally {
        Ba.transition = t
    }
}
;
ae.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.")
}
;
ae.useCallback = function(e, t) {
    return lt.current.useCallback(e, t)
}
;
ae.useContext = function(e) {
    return lt.current.useContext(e)
}
;
ae.useDebugValue = function() {}
;
ae.useDeferredValue = function(e) {
    return lt.current.useDeferredValue(e)
}
;
ae.useEffect = function(e, t) {
    return lt.current.useEffect(e, t)
}
;
ae.useId = function() {
    return lt.current.useId()
}
;
ae.useImperativeHandle = function(e, t, n) {
    return lt.current.useImperativeHandle(e, t, n)
}
;
ae.useInsertionEffect = function(e, t) {
    return lt.current.useInsertionEffect(e, t)
}
;
ae.useLayoutEffect = function(e, t) {
    return lt.current.useLayoutEffect(e, t)
}
;
ae.useMemo = function(e, t) {
    return lt.current.useMemo(e, t)
}
;
ae.useReducer = function(e, t, n) {
    return lt.current.useReducer(e, t, n)
}
;
ae.useRef = function(e) {
    return lt.current.useRef(e)
}
;
ae.useState = function(e) {
    return lt.current.useState(e)
}
;
ae.useSyncExternalStore = function(e, t, n) {
    return lt.current.useSyncExternalStore(e, t, n)
}
;
ae.useTransition = function() {
    return lt.current.useTransition()
}
;
ae.version = "18.2.0";
Kc.exports = ae;
var R = Kc.exports;
const ru = Zc(R)
  , n4 = $c({
    __proto__: null,
    default: ru
}, [R]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var i4 = R
  , r4 = Symbol.for("react.element")
  , a4 = Symbol.for("react.fragment")
  , o4 = Object.prototype.hasOwnProperty
  , l4 = i4.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , s4 = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function au(e, t, n) {
    var i, r = {}, a = null, o = null;
    n !== void 0 && (a = "" + n),
    t.key !== void 0 && (a = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
    for (i in t)
        o4.call(t, i) && !s4.hasOwnProperty(i) && (r[i] = t[i]);
    if (e && e.defaultProps)
        for (i in t = e.defaultProps,
        t)
            r[i] === void 0 && (r[i] = t[i]);
    return {
        $$typeof: r4,
        type: e,
        key: a,
        ref: o,
        props: r,
        _owner: l4.current
    }
}
Io.Fragment = a4;
Io.jsx = au;
Io.jsxs = au;
Yc.exports = Io;
var d = Yc.exports
  , zl = {}
  , ou = {
    exports: {}
}
  , wt = {}
  , lu = {
    exports: {}
}
  , su = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(j, $) {
        var K = j.length;
        j.push($);
        e: for (; 0 < K; ) {
            var re = K - 1 >>> 1
              , de = j[re];
            if (0 < r(de, $))
                j[re] = $,
                j[K] = de,
                K = re;
            else
                break e
        }
    }
    function n(j) {
        return j.length === 0 ? null : j[0]
    }
    function i(j) {
        if (j.length === 0)
            return null;
        var $ = j[0]
          , K = j.pop();
        if (K !== $) {
            j[0] = K;
            e: for (var re = 0, de = j.length, qe = de >>> 1; re < qe; ) {
                var Ae = 2 * (re + 1) - 1
                  , Xe = j[Ae]
                  , be = Ae + 1
                  , et = j[be];
                if (0 > r(Xe, K))
                    be < de && 0 > r(et, Xe) ? (j[re] = et,
                    j[be] = K,
                    re = be) : (j[re] = Xe,
                    j[Ae] = K,
                    re = Ae);
                else if (be < de && 0 > r(et, K))
                    j[re] = et,
                    j[be] = K,
                    re = be;
                else
                    break e
            }
        }
        return $
    }
    function r(j, $) {
        var K = j.sortIndex - $.sortIndex;
        return K !== 0 ? K : j.id - $.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var a = performance;
        e.unstable_now = function() {
            return a.now()
        }
    } else {
        var o = Date
          , l = o.now();
        e.unstable_now = function() {
            return o.now() - l
        }
    }
    var s = []
      , c = []
      , f = 1
      , u = null
      , y = 3
      , T = !1
      , v = !1
      , E = !1
      , A = typeof setTimeout == "function" ? setTimeout : null
      , h = typeof clearTimeout == "function" ? clearTimeout : null
      , p = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function m(j) {
        for (var $ = n(c); $ !== null; ) {
            if ($.callback === null)
                i(c);
            else if ($.startTime <= j)
                i(c),
                $.sortIndex = $.expirationTime,
                t(s, $);
            else
                break;
            $ = n(c)
        }
    }
    function O(j) {
        if (E = !1,
        m(j),
        !v)
            if (n(s) !== null)
                v = !0,
                ft(C);
            else {
                var $ = n(c);
                $ !== null && se(O, $.startTime - j)
            }
    }
    function C(j, $) {
        v = !1,
        E && (E = !1,
        h(_),
        _ = -1),
        T = !0;
        var K = y;
        try {
            for (m($),
            u = n(s); u !== null && (!(u.expirationTime > $) || j && !ne()); ) {
                var re = u.callback;
                if (typeof re == "function") {
                    u.callback = null,
                    y = u.priorityLevel;
                    var de = re(u.expirationTime <= $);
                    $ = e.unstable_now(),
                    typeof de == "function" ? u.callback = de : u === n(s) && i(s),
                    m($)
                } else
                    i(s);
                u = n(s)
            }
            if (u !== null)
                var qe = !0;
            else {
                var Ae = n(c);
                Ae !== null && se(O, Ae.startTime - $),
                qe = !1
            }
            return qe
        } finally {
            u = null,
            y = K,
            T = !1
        }
    }
    var x = !1
      , S = null
      , _ = -1
      , B = 5
      , G = -1;
    function ne() {
        return !(e.unstable_now() - G < B)
    }
    function ye() {
        if (S !== null) {
            var j = e.unstable_now();
            G = j;
            var $ = !0;
            try {
                $ = S(!0, j)
            } finally {
                $ ? pe() : (x = !1,
                S = null)
            }
        } else
            x = !1
    }
    var pe;
    if (typeof p == "function")
        pe = function() {
            p(ye)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var Be = new MessageChannel
          , dt = Be.port2;
        Be.port1.onmessage = ye,
        pe = function() {
            dt.postMessage(null)
        }
    } else
        pe = function() {
            A(ye, 0)
        }
        ;
    function ft(j) {
        S = j,
        x || (x = !0,
        pe())
    }
    function se(j, $) {
        _ = A(function() {
            j(e.unstable_now())
        }, $)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(j) {
        j.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        v || T || (v = !0,
        ft(C))
    }
    ,
    e.unstable_forceFrameRate = function(j) {
        0 > j || 125 < j ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : B = 0 < j ? Math.floor(1e3 / j) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return y
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(s)
    }
    ,
    e.unstable_next = function(j) {
        switch (y) {
        case 1:
        case 2:
        case 3:
            var $ = 3;
            break;
        default:
            $ = y
        }
        var K = y;
        y = $;
        try {
            return j()
        } finally {
            y = K
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(j, $) {
        switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            j = 3
        }
        var K = y;
        y = j;
        try {
            return $()
        } finally {
            y = K
        }
    }
    ,
    e.unstable_scheduleCallback = function(j, $, K) {
        var re = e.unstable_now();
        switch (typeof K == "object" && K !== null ? (K = K.delay,
        K = typeof K == "number" && 0 < K ? re + K : re) : K = re,
        j) {
        case 1:
            var de = -1;
            break;
        case 2:
            de = 250;
            break;
        case 5:
            de = 1073741823;
            break;
        case 4:
            de = 1e4;
            break;
        default:
            de = 5e3
        }
        return de = K + de,
        j = {
            id: f++,
            callback: $,
            priorityLevel: j,
            startTime: K,
            expirationTime: de,
            sortIndex: -1
        },
        K > re ? (j.sortIndex = K,
        t(c, j),
        n(s) === null && j === n(c) && (E ? (h(_),
        _ = -1) : E = !0,
        se(O, K - re))) : (j.sortIndex = de,
        t(s, j),
        v || T || (v = !0,
        ft(C))),
        j
    }
    ,
    e.unstable_shouldYield = ne,
    e.unstable_wrapCallback = function(j) {
        var $ = y;
        return function() {
            var K = y;
            y = $;
            try {
                return j.apply(this, arguments)
            } finally {
                y = K
            }
        }
    }
}
)(su);
lu.exports = su;
var d4 = lu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var du = R
  , bt = d4;
function M(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var fu = new Set
  , Mr = {};
function li(e, t) {
    zi(e, t),
    zi(e + "Capture", t)
}
function zi(e, t) {
    for (Mr[e] = t,
    e = 0; e < t.length; e++)
        fu.add(t[e])
}
var sn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , Dl = Object.prototype.hasOwnProperty
  , f4 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , tf = {}
  , nf = {};
function c4(e) {
    return Dl.call(nf, e) ? !0 : Dl.call(tf, e) ? !1 : f4.test(e) ? nf[e] = !0 : (tf[e] = !0,
    !1)
}
function u4(e, t, n, i) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return i ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function h4(e, t, n, i) {
    if (t === null || typeof t > "u" || u4(e, t, n, i))
        return !0;
    if (i)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function st(e, t, n, i, r, a, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = i,
    this.attributeNamespace = r,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = a,
    this.removeEmptyString = o
}
var Ve = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Ve[e] = new st(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    Ve[t] = new st(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Ve[e] = new st(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Ve[e] = new st(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Ve[e] = new st(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Ve[e] = new st(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    Ve[e] = new st(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    Ve[e] = new st(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    Ve[e] = new st(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var $s = /[\-:]([a-z])/g;
function Zs(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace($s, Zs);
    Ve[t] = new st(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace($s, Zs);
    Ve[t] = new st(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace($s, Zs);
    Ve[t] = new st(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    Ve[e] = new st(e,1,!1,e.toLowerCase(),null,!1,!1)
});
Ve.xlinkHref = new st("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    Ve[e] = new st(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function Ys(e, t, n, i) {
    var r = Ve.hasOwnProperty(t) ? Ve[t] : null;
    (r !== null ? r.type !== 0 : i || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (h4(t, n, r, i) && (n = null),
    i || r === null ? c4(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : r.mustUseProperty ? e[r.propertyName] = n === null ? r.type === 3 ? !1 : "" : n : (t = r.attributeName,
    i = r.attributeNamespace,
    n === null ? e.removeAttribute(t) : (r = r.type,
    n = r === 3 || r === 4 && n === !0 ? "" : "" + n,
    i ? e.setAttributeNS(i, t, n) : e.setAttribute(t, n))))
}
var un = du.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , pa = Symbol.for("react.element")
  , xi = Symbol.for("react.portal")
  , Ti = Symbol.for("react.fragment")
  , Ks = Symbol.for("react.strict_mode")
  , Fl = Symbol.for("react.profiler")
  , cu = Symbol.for("react.provider")
  , uu = Symbol.for("react.context")
  , Qs = Symbol.for("react.forward_ref")
  , Hl = Symbol.for("react.suspense")
  , Wl = Symbol.for("react.suspense_list")
  , Js = Symbol.for("react.memo")
  , Tn = Symbol.for("react.lazy")
  , hu = Symbol.for("react.offscreen")
  , rf = Symbol.iterator;
function tr(e) {
    return e === null || typeof e != "object" ? null : (e = rf && e[rf] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var we = Object.assign, al;
function pr(e) {
    if (al === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            al = t && t[1] || ""
        }
    return `
` + al + e
}
var ol = !1;
function ll(e, t) {
    if (!e || ol)
        return "";
    ol = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (c) {
                    var i = c
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (c) {
                    i = c
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (c) {
                i = c
            }
            e()
        }
    } catch (c) {
        if (c && i && typeof c.stack == "string") {
            for (var r = c.stack.split(`
`), a = i.stack.split(`
`), o = r.length - 1, l = a.length - 1; 1 <= o && 0 <= l && r[o] !== a[l]; )
                l--;
            for (; 1 <= o && 0 <= l; o--,
            l--)
                if (r[o] !== a[l]) {
                    if (o !== 1 || l !== 1)
                        do
                            if (o--,
                            l--,
                            0 > l || r[o] !== a[l]) {
                                var s = `
` + r[o].replace(" at new ", " at ");
                                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)),
                                s
                            }
                        while (1 <= o && 0 <= l);
                    break
                }
        }
    } finally {
        ol = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? pr(e) : ""
}
function p4(e) {
    switch (e.tag) {
    case 5:
        return pr(e.type);
    case 16:
        return pr("Lazy");
    case 13:
        return pr("Suspense");
    case 19:
        return pr("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = ll(e.type, !1),
        e;
    case 11:
        return e = ll(e.type.render, !1),
        e;
    case 1:
        return e = ll(e.type, !0),
        e;
    default:
        return ""
    }
}
function Gl(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case Ti:
        return "Fragment";
    case xi:
        return "Portal";
    case Fl:
        return "Profiler";
    case Ks:
        return "StrictMode";
    case Hl:
        return "Suspense";
    case Wl:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case uu:
            return (e.displayName || "Context") + ".Consumer";
        case cu:
            return (e._context.displayName || "Context") + ".Provider";
        case Qs:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case Js:
            return t = e.displayName || null,
            t !== null ? t : Gl(e.type) || "Memo";
        case Tn:
            t = e._payload,
            e = e._init;
            try {
                return Gl(e(t))
            } catch {}
        }
    return null
}
function g4(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return Gl(t);
    case 8:
        return t === Ks ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function Nn(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function pu(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function m4(e) {
    var t = pu(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , i = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var r = n.get
          , a = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return r.call(this)
            },
            set: function(o) {
                i = "" + o,
                a.call(this, o)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return i
            },
            setValue: function(o) {
                i = "" + o
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function ga(e) {
    e._valueTracker || (e._valueTracker = m4(e))
}
function gu(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , i = "";
    return e && (i = pu(e) ? e.checked ? "true" : "false" : e.value),
    e = i,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function Qa(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function Vl(e, t) {
    var n = t.checked;
    return we({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function af(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , i = t.checked != null ? t.checked : t.defaultChecked;
    n = Nn(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: i,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function mu(e, t) {
    t = t.checked,
    t != null && Ys(e, "checked", t, !1)
}
function Xl(e, t) {
    mu(e, t);
    var n = Nn(t.value)
      , i = t.type;
    if (n != null)
        i === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (i === "submit" || i === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? $l(e, t.type, n) : t.hasOwnProperty("defaultValue") && $l(e, t.type, Nn(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function of(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var i = t.type;
        if (!(i !== "submit" && i !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function $l(e, t, n) {
    (t !== "number" || Qa(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var gr = Array.isArray;
function _i(e, t, n, i) {
    if (e = e.options,
    t) {
        t = {};
        for (var r = 0; r < n.length; r++)
            t["$" + n[r]] = !0;
        for (n = 0; n < e.length; n++)
            r = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== r && (e[n].selected = r),
            r && i && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Nn(n),
        t = null,
        r = 0; r < e.length; r++) {
            if (e[r].value === n) {
                e[r].selected = !0,
                i && (e[r].defaultSelected = !0);
                return
            }
            t !== null || e[r].disabled || (t = e[r])
        }
        t !== null && (t.selected = !0)
    }
}
function Zl(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(M(91));
    return we({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function lf(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(M(92));
            if (gr(n)) {
                if (1 < n.length)
                    throw Error(M(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: Nn(n)
    }
}
function yu(e, t) {
    var n = Nn(t.value)
      , i = Nn(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    i != null && (e.defaultValue = "" + i)
}
function sf(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function xu(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function Yl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? xu(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var ma, Tu = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, i, r) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, i, r)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (ma = ma || document.createElement("div"),
        ma.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = ma.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function _r(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Tr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , y4 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Tr).forEach(function(e) {
    y4.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        Tr[t] = Tr[e]
    })
});
function vu(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Tr.hasOwnProperty(e) && Tr[e] ? ("" + t).trim() : t + "px"
}
function bu(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var i = n.indexOf("--") === 0
              , r = vu(n, t[n], i);
            n === "float" && (n = "cssFloat"),
            i ? e.setProperty(n, r) : e[n] = r
        }
}
var x4 = we({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function Kl(e, t) {
    if (t) {
        if (x4[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(M(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(M(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(M(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(M(62))
    }
}
function Ql(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var Jl = null;
function qs(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var ql = null
  , Ni = null
  , Ui = null;
function df(e) {
    if (e = ea(e)) {
        if (typeof ql != "function")
            throw Error(M(280));
        var t = e.stateNode;
        t && (t = _o(t),
        ql(e.stateNode, e.type, t))
    }
}
function Eu(e) {
    Ni ? Ui ? Ui.push(e) : Ui = [e] : Ni = e
}
function Ou() {
    if (Ni) {
        var e = Ni
          , t = Ui;
        if (Ui = Ni = null,
        df(e),
        t)
            for (e = 0; e < t.length; e++)
                df(t[e])
    }
}
function wu(e, t) {
    return e(t)
}
function Au() {}
var sl = !1;
function ku(e, t, n) {
    if (sl)
        return e(t, n);
    sl = !0;
    try {
        return wu(e, t, n)
    } finally {
        sl = !1,
        (Ni !== null || Ui !== null) && (Au(),
        Ou())
    }
}
function Nr(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var i = _o(n);
    if (i === null)
        return null;
    n = i[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (i = !i.disabled) || (e = e.type,
        i = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !i;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(M(231, t, typeof n));
    return n
}
var es = !1;
if (sn)
    try {
        var nr = {};
        Object.defineProperty(nr, "passive", {
            get: function() {
                es = !0
            }
        }),
        window.addEventListener("test", nr, nr),
        window.removeEventListener("test", nr, nr)
    } catch {
        es = !1
    }
function T4(e, t, n, i, r, a, o, l, s) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, c)
    } catch (f) {
        this.onError(f)
    }
}
var vr = !1
  , Ja = null
  , qa = !1
  , ts = null
  , v4 = {
    onError: function(e) {
        vr = !0,
        Ja = e
    }
};
function b4(e, t, n, i, r, a, o, l, s) {
    vr = !1,
    Ja = null,
    T4.apply(v4, arguments)
}
function E4(e, t, n, i, r, a, o, l, s) {
    if (b4.apply(this, arguments),
    vr) {
        if (vr) {
            var c = Ja;
            vr = !1,
            Ja = null
        } else
            throw Error(M(198));
        qa || (qa = !0,
        ts = c)
    }
}
function si(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function Iu(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function ff(e) {
    if (si(e) !== e)
        throw Error(M(188))
}
function O4(e) {
    var t = e.alternate;
    if (!t) {
        if (t = si(e),
        t === null)
            throw Error(M(188));
        return t !== e ? null : e
    }
    for (var n = e, i = t; ; ) {
        var r = n.return;
        if (r === null)
            break;
        var a = r.alternate;
        if (a === null) {
            if (i = r.return,
            i !== null) {
                n = i;
                continue
            }
            break
        }
        if (r.child === a.child) {
            for (a = r.child; a; ) {
                if (a === n)
                    return ff(r),
                    e;
                if (a === i)
                    return ff(r),
                    t;
                a = a.sibling
            }
            throw Error(M(188))
        }
        if (n.return !== i.return)
            n = r,
            i = a;
        else {
            for (var o = !1, l = r.child; l; ) {
                if (l === n) {
                    o = !0,
                    n = r,
                    i = a;
                    break
                }
                if (l === i) {
                    o = !0,
                    i = r,
                    n = a;
                    break
                }
                l = l.sibling
            }
            if (!o) {
                for (l = a.child; l; ) {
                    if (l === n) {
                        o = !0,
                        n = a,
                        i = r;
                        break
                    }
                    if (l === i) {
                        o = !0,
                        i = a,
                        n = r;
                        break
                    }
                    l = l.sibling
                }
                if (!o)
                    throw Error(M(189))
            }
        }
        if (n.alternate !== i)
            throw Error(M(190))
    }
    if (n.tag !== 3)
        throw Error(M(188));
    return n.stateNode.current === n ? e : t
}
function Cu(e) {
    return e = O4(e),
    e !== null ? Su(e) : null
}
function Su(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = Su(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var Ru = bt.unstable_scheduleCallback
  , cf = bt.unstable_cancelCallback
  , w4 = bt.unstable_shouldYield
  , A4 = bt.unstable_requestPaint
  , Re = bt.unstable_now
  , k4 = bt.unstable_getCurrentPriorityLevel
  , ed = bt.unstable_ImmediatePriority
  , Mu = bt.unstable_UserBlockingPriority
  , eo = bt.unstable_NormalPriority
  , I4 = bt.unstable_LowPriority
  , _u = bt.unstable_IdlePriority
  , Co = null
  , Yt = null;
function C4(e) {
    if (Yt && typeof Yt.onCommitFiberRoot == "function")
        try {
            Yt.onCommitFiberRoot(Co, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var Dt = Math.clz32 ? Math.clz32 : M4
  , S4 = Math.log
  , R4 = Math.LN2;
function M4(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (S4(e) / R4 | 0) | 0
}
var ya = 64
  , xa = 4194304;
function mr(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function to(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var i = 0
      , r = e.suspendedLanes
      , a = e.pingedLanes
      , o = n & 268435455;
    if (o !== 0) {
        var l = o & ~r;
        l !== 0 ? i = mr(l) : (a &= o,
        a !== 0 && (i = mr(a)))
    } else
        o = n & ~r,
        o !== 0 ? i = mr(o) : a !== 0 && (i = mr(a));
    if (i === 0)
        return 0;
    if (t !== 0 && t !== i && !(t & r) && (r = i & -i,
    a = t & -t,
    r >= a || r === 16 && (a & 4194240) !== 0))
        return t;
    if (i & 4 && (i |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= i; 0 < t; )
            n = 31 - Dt(t),
            r = 1 << n,
            i |= e[n],
            t &= ~r;
    return i
}
function _4(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function N4(e, t) {
    for (var n = e.suspendedLanes, i = e.pingedLanes, r = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
        var o = 31 - Dt(a)
          , l = 1 << o
          , s = r[o];
        s === -1 ? (!(l & n) || l & i) && (r[o] = _4(l, t)) : s <= t && (e.expiredLanes |= l),
        a &= ~l
    }
}
function ns(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function Nu() {
    var e = ya;
    return ya <<= 1,
    !(ya & 4194240) && (ya = 64),
    e
}
function dl(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function Jr(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - Dt(t),
    e[t] = n
}
function U4(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var i = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var r = 31 - Dt(n)
          , a = 1 << r;
        t[r] = 0,
        i[r] = -1,
        e[r] = -1,
        n &= ~a
    }
}
function td(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var i = 31 - Dt(n)
          , r = 1 << i;
        r & t | e[i] & t && (e[i] |= t),
        n &= ~r
    }
}
var fe = 0;
function Uu(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Lu, nd, Pu, ju, Bu, is = !1, Ta = [], An = null, kn = null, In = null, Ur = new Map, Lr = new Map, bn = [], L4 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function uf(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        An = null;
        break;
    case "dragenter":
    case "dragleave":
        kn = null;
        break;
    case "mouseover":
    case "mouseout":
        In = null;
        break;
    case "pointerover":
    case "pointerout":
        Ur.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Lr.delete(t.pointerId)
    }
}
function ir(e, t, n, i, r, a) {
    return e === null || e.nativeEvent !== a ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: i,
        nativeEvent: a,
        targetContainers: [r]
    },
    t !== null && (t = ea(t),
    t !== null && nd(t)),
    e) : (e.eventSystemFlags |= i,
    t = e.targetContainers,
    r !== null && t.indexOf(r) === -1 && t.push(r),
    e)
}
function P4(e, t, n, i, r) {
    switch (t) {
    case "focusin":
        return An = ir(An, e, t, n, i, r),
        !0;
    case "dragenter":
        return kn = ir(kn, e, t, n, i, r),
        !0;
    case "mouseover":
        return In = ir(In, e, t, n, i, r),
        !0;
    case "pointerover":
        var a = r.pointerId;
        return Ur.set(a, ir(Ur.get(a) || null, e, t, n, i, r)),
        !0;
    case "gotpointercapture":
        return a = r.pointerId,
        Lr.set(a, ir(Lr.get(a) || null, e, t, n, i, r)),
        !0
    }
    return !1
}
function zu(e) {
    var t = Xn(e.target);
    if (t !== null) {
        var n = si(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = Iu(n),
                t !== null) {
                    e.blockedOn = t,
                    Bu(e.priority, function() {
                        Pu(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function za(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = rs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var i = new n.constructor(n.type,n);
            Jl = i,
            n.target.dispatchEvent(i),
            Jl = null
        } else
            return t = ea(n),
            t !== null && nd(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function hf(e, t, n) {
    za(e) && n.delete(t)
}
function j4() {
    is = !1,
    An !== null && za(An) && (An = null),
    kn !== null && za(kn) && (kn = null),
    In !== null && za(In) && (In = null),
    Ur.forEach(hf),
    Lr.forEach(hf)
}
function rr(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    is || (is = !0,
    bt.unstable_scheduleCallback(bt.unstable_NormalPriority, j4)))
}
function Pr(e) {
    function t(r) {
        return rr(r, e)
    }
    if (0 < Ta.length) {
        rr(Ta[0], e);
        for (var n = 1; n < Ta.length; n++) {
            var i = Ta[n];
            i.blockedOn === e && (i.blockedOn = null)
        }
    }
    for (An !== null && rr(An, e),
    kn !== null && rr(kn, e),
    In !== null && rr(In, e),
    Ur.forEach(t),
    Lr.forEach(t),
    n = 0; n < bn.length; n++)
        i = bn[n],
        i.blockedOn === e && (i.blockedOn = null);
    for (; 0 < bn.length && (n = bn[0],
    n.blockedOn === null); )
        zu(n),
        n.blockedOn === null && bn.shift()
}
var Li = un.ReactCurrentBatchConfig
  , no = !0;
function B4(e, t, n, i) {
    var r = fe
      , a = Li.transition;
    Li.transition = null;
    try {
        fe = 1,
        id(e, t, n, i)
    } finally {
        fe = r,
        Li.transition = a
    }
}
function z4(e, t, n, i) {
    var r = fe
      , a = Li.transition;
    Li.transition = null;
    try {
        fe = 4,
        id(e, t, n, i)
    } finally {
        fe = r,
        Li.transition = a
    }
}
function id(e, t, n, i) {
    if (no) {
        var r = rs(e, t, n, i);
        if (r === null)
            Tl(e, t, i, io, n),
            uf(e, i);
        else if (P4(r, e, t, n, i))
            i.stopPropagation();
        else if (uf(e, i),
        t & 4 && -1 < L4.indexOf(e)) {
            for (; r !== null; ) {
                var a = ea(r);
                if (a !== null && Lu(a),
                a = rs(e, t, n, i),
                a === null && Tl(e, t, i, io, n),
                a === r)
                    break;
                r = a
            }
            r !== null && i.stopPropagation()
        } else
            Tl(e, t, i, null, n)
    }
}
var io = null;
function rs(e, t, n, i) {
    if (io = null,
    e = qs(i),
    e = Xn(e),
    e !== null)
        if (t = si(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = Iu(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return io = e,
    null
}
function Du(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (k4()) {
        case ed:
            return 1;
        case Mu:
            return 4;
        case eo:
        case I4:
            return 16;
        case _u:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var On = null
  , rd = null
  , Da = null;
function Fu() {
    if (Da)
        return Da;
    var e, t = rd, n = t.length, i, r = "value"in On ? On.value : On.textContent, a = r.length;
    for (e = 0; e < n && t[e] === r[e]; e++)
        ;
    var o = n - e;
    for (i = 1; i <= o && t[n - i] === r[a - i]; i++)
        ;
    return Da = r.slice(e, 1 < i ? 1 - i : void 0)
}
function Fa(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function va() {
    return !0
}
function pf() {
    return !1
}
function At(e) {
    function t(n, i, r, a, o) {
        this._reactName = n,
        this._targetInst = r,
        this.type = i,
        this.nativeEvent = a,
        this.target = o,
        this.currentTarget = null;
        for (var l in e)
            e.hasOwnProperty(l) && (n = e[l],
            this[l] = n ? n(a) : a[l]);
        return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? va : pf,
        this.isPropagationStopped = pf,
        this
    }
    return we(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = va)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = va)
        },
        persist: function() {},
        isPersistent: va
    }),
    t
}
var Yi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, ad = At(Yi), qr = we({}, Yi, {
    view: 0,
    detail: 0
}), D4 = At(qr), fl, cl, ar, So = we({}, qr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: od,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== ar && (ar && e.type === "mousemove" ? (fl = e.screenX - ar.screenX,
        cl = e.screenY - ar.screenY) : cl = fl = 0,
        ar = e),
        fl)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : cl
    }
}), gf = At(So), F4 = we({}, So, {
    dataTransfer: 0
}), H4 = At(F4), W4 = we({}, qr, {
    relatedTarget: 0
}), ul = At(W4), G4 = we({}, Yi, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), V4 = At(G4), X4 = we({}, Yi, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), $4 = At(X4), Z4 = we({}, Yi, {
    data: 0
}), mf = At(Z4), Y4 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, K4 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, Q4 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function J4(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Q4[e]) ? !!t[e] : !1
}
function od() {
    return J4
}
var q4 = we({}, qr, {
    key: function(e) {
        if (e.key) {
            var t = Y4[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Fa(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? K4[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: od,
    charCode: function(e) {
        return e.type === "keypress" ? Fa(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? Fa(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , e1 = At(q4)
  , t1 = we({}, So, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , yf = At(t1)
  , n1 = we({}, qr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: od
})
  , i1 = At(n1)
  , r1 = we({}, Yi, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , a1 = At(r1)
  , o1 = we({}, So, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , l1 = At(o1)
  , s1 = [9, 13, 27, 32]
  , ld = sn && "CompositionEvent"in window
  , br = null;
sn && "documentMode"in document && (br = document.documentMode);
var d1 = sn && "TextEvent"in window && !br
  , Hu = sn && (!ld || br && 8 < br && 11 >= br)
  , xf = String.fromCharCode(32)
  , Tf = !1;
function Wu(e, t) {
    switch (e) {
    case "keyup":
        return s1.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function Gu(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var vi = !1;
function f1(e, t) {
    switch (e) {
    case "compositionend":
        return Gu(t);
    case "keypress":
        return t.which !== 32 ? null : (Tf = !0,
        xf);
    case "textInput":
        return e = t.data,
        e === xf && Tf ? null : e;
    default:
        return null
    }
}
function c1(e, t) {
    if (vi)
        return e === "compositionend" || !ld && Wu(e, t) ? (e = Fu(),
        Da = rd = On = null,
        vi = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return Hu && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var u1 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function vf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!u1[e.type] : t === "textarea"
}
function Vu(e, t, n, i) {
    Eu(i),
    t = ro(t, "onChange"),
    0 < t.length && (n = new ad("onChange","change",null,n,i),
    e.push({
        event: n,
        listeners: t
    }))
}
var Er = null
  , jr = null;
function h1(e) {
    n0(e, 0)
}
function Ro(e) {
    var t = Oi(e);
    if (gu(t))
        return e
}
function p1(e, t) {
    if (e === "change")
        return t
}
var Xu = !1;
if (sn) {
    var hl;
    if (sn) {
        var pl = "oninput"in document;
        if (!pl) {
            var bf = document.createElement("div");
            bf.setAttribute("oninput", "return;"),
            pl = typeof bf.oninput == "function"
        }
        hl = pl
    } else
        hl = !1;
    Xu = hl && (!document.documentMode || 9 < document.documentMode)
}
function Ef() {
    Er && (Er.detachEvent("onpropertychange", $u),
    jr = Er = null)
}
function $u(e) {
    if (e.propertyName === "value" && Ro(jr)) {
        var t = [];
        Vu(t, jr, e, qs(e)),
        ku(h1, t)
    }
}
function g1(e, t, n) {
    e === "focusin" ? (Ef(),
    Er = t,
    jr = n,
    Er.attachEvent("onpropertychange", $u)) : e === "focusout" && Ef()
}
function m1(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Ro(jr)
}
function y1(e, t) {
    if (e === "click")
        return Ro(t)
}
function x1(e, t) {
    if (e === "input" || e === "change")
        return Ro(t)
}
function T1(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Ht = typeof Object.is == "function" ? Object.is : T1;
function Br(e, t) {
    if (Ht(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , i = Object.keys(t);
    if (n.length !== i.length)
        return !1;
    for (i = 0; i < n.length; i++) {
        var r = n[i];
        if (!Dl.call(t, r) || !Ht(e[r], t[r]))
            return !1
    }
    return !0
}
function Of(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function wf(e, t) {
    var n = Of(e);
    e = 0;
    for (var i; n; ) {
        if (n.nodeType === 3) {
            if (i = e + n.textContent.length,
            e <= t && i >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = i
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Of(n)
    }
}
function Zu(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Zu(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Yu() {
    for (var e = window, t = Qa(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Qa(e.document)
    }
    return t
}
function sd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function v1(e) {
    var t = Yu()
      , n = e.focusedElem
      , i = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Zu(n.ownerDocument.documentElement, n)) {
        if (i !== null && sd(n)) {
            if (t = i.start,
            e = i.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var r = n.textContent.length
                  , a = Math.min(i.start, r);
                i = i.end === void 0 ? a : Math.min(i.end, r),
                !e.extend && a > i && (r = i,
                i = a,
                a = r),
                r = wf(n, a);
                var o = wf(n, i);
                r && o && (e.rangeCount !== 1 || e.anchorNode !== r.node || e.anchorOffset !== r.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(),
                t.setStart(r.node, r.offset),
                e.removeAllRanges(),
                a > i ? (e.addRange(t),
                e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var b1 = sn && "documentMode"in document && 11 >= document.documentMode
  , bi = null
  , as = null
  , Or = null
  , os = !1;
function Af(e, t, n) {
    var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    os || bi == null || bi !== Qa(i) || (i = bi,
    "selectionStart"in i && sd(i) ? i = {
        start: i.selectionStart,
        end: i.selectionEnd
    } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(),
    i = {
        anchorNode: i.anchorNode,
        anchorOffset: i.anchorOffset,
        focusNode: i.focusNode,
        focusOffset: i.focusOffset
    }),
    Or && Br(Or, i) || (Or = i,
    i = ro(as, "onSelect"),
    0 < i.length && (t = new ad("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: i
    }),
    t.target = bi)))
}
function ba(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var Ei = {
    animationend: ba("Animation", "AnimationEnd"),
    animationiteration: ba("Animation", "AnimationIteration"),
    animationstart: ba("Animation", "AnimationStart"),
    transitionend: ba("Transition", "TransitionEnd")
}
  , gl = {}
  , Ku = {};
sn && (Ku = document.createElement("div").style,
"AnimationEvent"in window || (delete Ei.animationend.animation,
delete Ei.animationiteration.animation,
delete Ei.animationstart.animation),
"TransitionEvent"in window || delete Ei.transitionend.transition);
function Mo(e) {
    if (gl[e])
        return gl[e];
    if (!Ei[e])
        return e;
    var t = Ei[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Ku)
            return gl[e] = t[n];
    return e
}
var Qu = Mo("animationend")
  , Ju = Mo("animationiteration")
  , qu = Mo("animationstart")
  , e0 = Mo("transitionend")
  , t0 = new Map
  , kf = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function jn(e, t) {
    t0.set(e, t),
    li(t, [e])
}
for (var ml = 0; ml < kf.length; ml++) {
    var yl = kf[ml]
      , E1 = yl.toLowerCase()
      , O1 = yl[0].toUpperCase() + yl.slice(1);
    jn(E1, "on" + O1)
}
jn(Qu, "onAnimationEnd");
jn(Ju, "onAnimationIteration");
jn(qu, "onAnimationStart");
jn("dblclick", "onDoubleClick");
jn("focusin", "onFocus");
jn("focusout", "onBlur");
jn(e0, "onTransitionEnd");
zi("onMouseEnter", ["mouseout", "mouseover"]);
zi("onMouseLeave", ["mouseout", "mouseover"]);
zi("onPointerEnter", ["pointerout", "pointerover"]);
zi("onPointerLeave", ["pointerout", "pointerover"]);
li("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
li("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
li("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
li("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
li("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
li("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var yr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , w1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(yr));
function If(e, t, n) {
    var i = e.type || "unknown-event";
    e.currentTarget = n,
    E4(i, t, void 0, e),
    e.currentTarget = null
}
function n0(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var i = e[n]
          , r = i.event;
        i = i.listeners;
        e: {
            var a = void 0;
            if (t)
                for (var o = i.length - 1; 0 <= o; o--) {
                    var l = i[o]
                      , s = l.instance
                      , c = l.currentTarget;
                    if (l = l.listener,
                    s !== a && r.isPropagationStopped())
                        break e;
                    If(r, l, c),
                    a = s
                }
            else
                for (o = 0; o < i.length; o++) {
                    if (l = i[o],
                    s = l.instance,
                    c = l.currentTarget,
                    l = l.listener,
                    s !== a && r.isPropagationStopped())
                        break e;
                    If(r, l, c),
                    a = s
                }
        }
    }
    if (qa)
        throw e = ts,
        qa = !1,
        ts = null,
        e
}
function xe(e, t) {
    var n = t[cs];
    n === void 0 && (n = t[cs] = new Set);
    var i = e + "__bubble";
    n.has(i) || (i0(t, e, 2, !1),
    n.add(i))
}
function xl(e, t, n) {
    var i = 0;
    t && (i |= 4),
    i0(n, e, i, t)
}
var Ea = "_reactListening" + Math.random().toString(36).slice(2);
function zr(e) {
    if (!e[Ea]) {
        e[Ea] = !0,
        fu.forEach(function(n) {
            n !== "selectionchange" && (w1.has(n) || xl(n, !1, e),
            xl(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Ea] || (t[Ea] = !0,
        xl("selectionchange", !1, t))
    }
}
function i0(e, t, n, i) {
    switch (Du(t)) {
    case 1:
        var r = B4;
        break;
    case 4:
        r = z4;
        break;
    default:
        r = id
    }
    n = r.bind(null, t, n, e),
    r = void 0,
    !es || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (r = !0),
    i ? r !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: r
    }) : e.addEventListener(t, n, !0) : r !== void 0 ? e.addEventListener(t, n, {
        passive: r
    }) : e.addEventListener(t, n, !1)
}
function Tl(e, t, n, i, r) {
    var a = i;
    if (!(t & 1) && !(t & 2) && i !== null)
        e: for (; ; ) {
            if (i === null)
                return;
            var o = i.tag;
            if (o === 3 || o === 4) {
                var l = i.stateNode.containerInfo;
                if (l === r || l.nodeType === 8 && l.parentNode === r)
                    break;
                if (o === 4)
                    for (o = i.return; o !== null; ) {
                        var s = o.tag;
                        if ((s === 3 || s === 4) && (s = o.stateNode.containerInfo,
                        s === r || s.nodeType === 8 && s.parentNode === r))
                            return;
                        o = o.return
                    }
                for (; l !== null; ) {
                    if (o = Xn(l),
                    o === null)
                        return;
                    if (s = o.tag,
                    s === 5 || s === 6) {
                        i = a = o;
                        continue e
                    }
                    l = l.parentNode
                }
            }
            i = i.return
        }
    ku(function() {
        var c = a
          , f = qs(n)
          , u = [];
        e: {
            var y = t0.get(e);
            if (y !== void 0) {
                var T = ad
                  , v = e;
                switch (e) {
                case "keypress":
                    if (Fa(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    T = e1;
                    break;
                case "focusin":
                    v = "focus",
                    T = ul;
                    break;
                case "focusout":
                    v = "blur",
                    T = ul;
                    break;
                case "beforeblur":
                case "afterblur":
                    T = ul;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    T = gf;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    T = H4;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    T = i1;
                    break;
                case Qu:
                case Ju:
                case qu:
                    T = V4;
                    break;
                case e0:
                    T = a1;
                    break;
                case "scroll":
                    T = D4;
                    break;
                case "wheel":
                    T = l1;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    T = $4;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    T = yf
                }
                var E = (t & 4) !== 0
                  , A = !E && e === "scroll"
                  , h = E ? y !== null ? y + "Capture" : null : y;
                E = [];
                for (var p = c, m; p !== null; ) {
                    m = p;
                    var O = m.stateNode;
                    if (m.tag === 5 && O !== null && (m = O,
                    h !== null && (O = Nr(p, h),
                    O != null && E.push(Dr(p, O, m)))),
                    A)
                        break;
                    p = p.return
                }
                0 < E.length && (y = new T(y,v,null,n,f),
                u.push({
                    event: y,
                    listeners: E
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (y = e === "mouseover" || e === "pointerover",
                T = e === "mouseout" || e === "pointerout",
                y && n !== Jl && (v = n.relatedTarget || n.fromElement) && (Xn(v) || v[dn]))
                    break e;
                if ((T || y) && (y = f.window === f ? f : (y = f.ownerDocument) ? y.defaultView || y.parentWindow : window,
                T ? (v = n.relatedTarget || n.toElement,
                T = c,
                v = v ? Xn(v) : null,
                v !== null && (A = si(v),
                v !== A || v.tag !== 5 && v.tag !== 6) && (v = null)) : (T = null,
                v = c),
                T !== v)) {
                    if (E = gf,
                    O = "onMouseLeave",
                    h = "onMouseEnter",
                    p = "mouse",
                    (e === "pointerout" || e === "pointerover") && (E = yf,
                    O = "onPointerLeave",
                    h = "onPointerEnter",
                    p = "pointer"),
                    A = T == null ? y : Oi(T),
                    m = v == null ? y : Oi(v),
                    y = new E(O,p + "leave",T,n,f),
                    y.target = A,
                    y.relatedTarget = m,
                    O = null,
                    Xn(f) === c && (E = new E(h,p + "enter",v,n,f),
                    E.target = m,
                    E.relatedTarget = A,
                    O = E),
                    A = O,
                    T && v)
                        t: {
                            for (E = T,
                            h = v,
                            p = 0,
                            m = E; m; m = ui(m))
                                p++;
                            for (m = 0,
                            O = h; O; O = ui(O))
                                m++;
                            for (; 0 < p - m; )
                                E = ui(E),
                                p--;
                            for (; 0 < m - p; )
                                h = ui(h),
                                m--;
                            for (; p--; ) {
                                if (E === h || h !== null && E === h.alternate)
                                    break t;
                                E = ui(E),
                                h = ui(h)
                            }
                            E = null
                        }
                    else
                        E = null;
                    T !== null && Cf(u, y, T, E, !1),
                    v !== null && A !== null && Cf(u, A, v, E, !0)
                }
            }
            e: {
                if (y = c ? Oi(c) : window,
                T = y.nodeName && y.nodeName.toLowerCase(),
                T === "select" || T === "input" && y.type === "file")
                    var C = p1;
                else if (vf(y))
                    if (Xu)
                        C = x1;
                    else {
                        C = m1;
                        var x = g1
                    }
                else
                    (T = y.nodeName) && T.toLowerCase() === "input" && (y.type === "checkbox" || y.type === "radio") && (C = y1);
                if (C && (C = C(e, c))) {
                    Vu(u, C, n, f);
                    break e
                }
                x && x(e, y, c),
                e === "focusout" && (x = y._wrapperState) && x.controlled && y.type === "number" && $l(y, "number", y.value)
            }
            switch (x = c ? Oi(c) : window,
            e) {
            case "focusin":
                (vf(x) || x.contentEditable === "true") && (bi = x,
                as = c,
                Or = null);
                break;
            case "focusout":
                Or = as = bi = null;
                break;
            case "mousedown":
                os = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                os = !1,
                Af(u, n, f);
                break;
            case "selectionchange":
                if (b1)
                    break;
            case "keydown":
            case "keyup":
                Af(u, n, f)
            }
            var S;
            if (ld)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var _ = "onCompositionStart";
                        break e;
                    case "compositionend":
                        _ = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        _ = "onCompositionUpdate";
                        break e
                    }
                    _ = void 0
                }
            else
                vi ? Wu(e, n) && (_ = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
            _ && (Hu && n.locale !== "ko" && (vi || _ !== "onCompositionStart" ? _ === "onCompositionEnd" && vi && (S = Fu()) : (On = f,
            rd = "value"in On ? On.value : On.textContent,
            vi = !0)),
            x = ro(c, _),
            0 < x.length && (_ = new mf(_,e,null,n,f),
            u.push({
                event: _,
                listeners: x
            }),
            S ? _.data = S : (S = Gu(n),
            S !== null && (_.data = S)))),
            (S = d1 ? f1(e, n) : c1(e, n)) && (c = ro(c, "onBeforeInput"),
            0 < c.length && (f = new mf("onBeforeInput","beforeinput",null,n,f),
            u.push({
                event: f,
                listeners: c
            }),
            f.data = S))
        }
        n0(u, t)
    })
}
function Dr(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function ro(e, t) {
    for (var n = t + "Capture", i = []; e !== null; ) {
        var r = e
          , a = r.stateNode;
        r.tag === 5 && a !== null && (r = a,
        a = Nr(e, n),
        a != null && i.unshift(Dr(e, a, r)),
        a = Nr(e, t),
        a != null && i.push(Dr(e, a, r))),
        e = e.return
    }
    return i
}
function ui(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function Cf(e, t, n, i, r) {
    for (var a = t._reactName, o = []; n !== null && n !== i; ) {
        var l = n
          , s = l.alternate
          , c = l.stateNode;
        if (s !== null && s === i)
            break;
        l.tag === 5 && c !== null && (l = c,
        r ? (s = Nr(n, a),
        s != null && o.unshift(Dr(n, s, l))) : r || (s = Nr(n, a),
        s != null && o.push(Dr(n, s, l)))),
        n = n.return
    }
    o.length !== 0 && e.push({
        event: t,
        listeners: o
    })
}
var A1 = /\r\n?/g
  , k1 = /\u0000|\uFFFD/g;
function Sf(e) {
    return (typeof e == "string" ? e : "" + e).replace(A1, `
`).replace(k1, "")
}
function Oa(e, t, n) {
    if (t = Sf(t),
    Sf(e) !== t && n)
        throw Error(M(425))
}
function ao() {}
var ls = null
  , ss = null;
function ds(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var fs = typeof setTimeout == "function" ? setTimeout : void 0
  , I1 = typeof clearTimeout == "function" ? clearTimeout : void 0
  , Rf = typeof Promise == "function" ? Promise : void 0
  , C1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Rf < "u" ? function(e) {
    return Rf.resolve(null).then(e).catch(S1)
}
: fs;
function S1(e) {
    setTimeout(function() {
        throw e
    })
}
function vl(e, t) {
    var n = t
      , i = 0;
    do {
        var r = n.nextSibling;
        if (e.removeChild(n),
        r && r.nodeType === 8)
            if (n = r.data,
            n === "/$") {
                if (i === 0) {
                    e.removeChild(r),
                    Pr(t);
                    return
                }
                i--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || i++;
        n = r
    } while (n);
    Pr(t)
}
function Cn(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function Mf(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Ki = Math.random().toString(36).slice(2)
  , Zt = "__reactFiber$" + Ki
  , Fr = "__reactProps$" + Ki
  , dn = "__reactContainer$" + Ki
  , cs = "__reactEvents$" + Ki
  , R1 = "__reactListeners$" + Ki
  , M1 = "__reactHandles$" + Ki;
function Xn(e) {
    var t = e[Zt];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[dn] || n[Zt]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = Mf(e); e !== null; ) {
                    if (n = e[Zt])
                        return n;
                    e = Mf(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function ea(e) {
    return e = e[Zt] || e[dn],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function Oi(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(M(33))
}
function _o(e) {
    return e[Fr] || null
}
var us = []
  , wi = -1;
function Bn(e) {
    return {
        current: e
    }
}
function Te(e) {
    0 > wi || (e.current = us[wi],
    us[wi] = null,
    wi--)
}
function me(e, t) {
    wi++,
    us[wi] = e.current,
    e.current = t
}
var Un = {}
  , Je = Bn(Un)
  , pt = Bn(!1)
  , ti = Un;
function Di(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return Un;
    var i = e.stateNode;
    if (i && i.__reactInternalMemoizedUnmaskedChildContext === t)
        return i.__reactInternalMemoizedMaskedChildContext;
    var r = {}, a;
    for (a in n)
        r[a] = t[a];
    return i && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = r),
    r
}
function gt(e) {
    return e = e.childContextTypes,
    e != null
}
function oo() {
    Te(pt),
    Te(Je)
}
function _f(e, t, n) {
    if (Je.current !== Un)
        throw Error(M(168));
    me(Je, t),
    me(pt, n)
}
function r0(e, t, n) {
    var i = e.stateNode;
    if (t = t.childContextTypes,
    typeof i.getChildContext != "function")
        return n;
    i = i.getChildContext();
    for (var r in i)
        if (!(r in t))
            throw Error(M(108, g4(e) || "Unknown", r));
    return we({}, n, i)
}
function lo(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Un,
    ti = Je.current,
    me(Je, e),
    me(pt, pt.current),
    !0
}
function Nf(e, t, n) {
    var i = e.stateNode;
    if (!i)
        throw Error(M(169));
    n ? (e = r0(e, t, ti),
    i.__reactInternalMemoizedMergedChildContext = e,
    Te(pt),
    Te(Je),
    me(Je, e)) : Te(pt),
    me(pt, n)
}
var rn = null
  , No = !1
  , bl = !1;
function a0(e) {
    rn === null ? rn = [e] : rn.push(e)
}
function _1(e) {
    No = !0,
    a0(e)
}
function zn() {
    if (!bl && rn !== null) {
        bl = !0;
        var e = 0
          , t = fe;
        try {
            var n = rn;
            for (fe = 1; e < n.length; e++) {
                var i = n[e];
                do
                    i = i(!0);
                while (i !== null)
            }
            rn = null,
            No = !1
        } catch (r) {
            throw rn !== null && (rn = rn.slice(e + 1)),
            Ru(ed, zn),
            r
        } finally {
            fe = t,
            bl = !1
        }
    }
    return null
}
var Ai = []
  , ki = 0
  , so = null
  , fo = 0
  , It = []
  , Ct = 0
  , ni = null
  , an = 1
  , on = "";
function Wn(e, t) {
    Ai[ki++] = fo,
    Ai[ki++] = so,
    so = e,
    fo = t
}
function o0(e, t, n) {
    It[Ct++] = an,
    It[Ct++] = on,
    It[Ct++] = ni,
    ni = e;
    var i = an;
    e = on;
    var r = 32 - Dt(i) - 1;
    i &= ~(1 << r),
    n += 1;
    var a = 32 - Dt(t) + r;
    if (30 < a) {
        var o = r - r % 5;
        a = (i & (1 << o) - 1).toString(32),
        i >>= o,
        r -= o,
        an = 1 << 32 - Dt(t) + r | n << r | i,
        on = a + e
    } else
        an = 1 << a | n << r | i,
        on = e
}
function dd(e) {
    e.return !== null && (Wn(e, 1),
    o0(e, 1, 0))
}
function fd(e) {
    for (; e === so; )
        so = Ai[--ki],
        Ai[ki] = null,
        fo = Ai[--ki],
        Ai[ki] = null;
    for (; e === ni; )
        ni = It[--Ct],
        It[Ct] = null,
        on = It[--Ct],
        It[Ct] = null,
        an = It[--Ct],
        It[Ct] = null
}
var vt = null
  , Tt = null
  , ve = !1
  , zt = null;
function l0(e, t) {
    var n = St(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function Uf(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        vt = e,
        Tt = Cn(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        vt = e,
        Tt = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = ni !== null ? {
            id: an,
            overflow: on
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = St(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        vt = e,
        Tt = null,
        !0) : !1;
    default:
        return !1
    }
}
function hs(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function ps(e) {
    if (ve) {
        var t = Tt;
        if (t) {
            var n = t;
            if (!Uf(e, t)) {
                if (hs(e))
                    throw Error(M(418));
                t = Cn(n.nextSibling);
                var i = vt;
                t && Uf(e, t) ? l0(i, n) : (e.flags = e.flags & -4097 | 2,
                ve = !1,
                vt = e)
            }
        } else {
            if (hs(e))
                throw Error(M(418));
            e.flags = e.flags & -4097 | 2,
            ve = !1,
            vt = e
        }
    }
}
function Lf(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    vt = e
}
function wa(e) {
    if (e !== vt)
        return !1;
    if (!ve)
        return Lf(e),
        ve = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !ds(e.type, e.memoizedProps)),
    t && (t = Tt)) {
        if (hs(e))
            throw s0(),
            Error(M(418));
        for (; t; )
            l0(e, t),
            t = Cn(t.nextSibling)
    }
    if (Lf(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(M(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Tt = Cn(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Tt = null
        }
    } else
        Tt = vt ? Cn(e.stateNode.nextSibling) : null;
    return !0
}
function s0() {
    for (var e = Tt; e; )
        e = Cn(e.nextSibling)
}
function Fi() {
    Tt = vt = null,
    ve = !1
}
function cd(e) {
    zt === null ? zt = [e] : zt.push(e)
}
var N1 = un.ReactCurrentBatchConfig;
function Pt(e, t) {
    if (e && e.defaultProps) {
        t = we({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
var co = Bn(null)
  , uo = null
  , Ii = null
  , ud = null;
function hd() {
    ud = Ii = uo = null
}
function pd(e) {
    var t = co.current;
    Te(co),
    e._currentValue = t
}
function gs(e, t, n) {
    for (; e !== null; ) {
        var i = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function Pi(e, t) {
    uo = e,
    ud = Ii = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (ht = !0),
    e.firstContext = null)
}
function Mt(e) {
    var t = e._currentValue;
    if (ud !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Ii === null) {
            if (uo === null)
                throw Error(M(308));
            Ii = e,
            uo.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Ii = Ii.next = e;
    return t
}
var $n = null;
function gd(e) {
    $n === null ? $n = [e] : $n.push(e)
}
function d0(e, t, n, i) {
    var r = t.interleaved;
    return r === null ? (n.next = n,
    gd(t)) : (n.next = r.next,
    r.next = n),
    t.interleaved = n,
    fn(e, i)
}
function fn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var vn = !1;
function md(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function f0(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function ln(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function Sn(e, t, n) {
    var i = e.updateQueue;
    if (i === null)
        return null;
    if (i = i.shared,
    le & 2) {
        var r = i.pending;
        return r === null ? t.next = t : (t.next = r.next,
        r.next = t),
        i.pending = t,
        fn(e, n)
    }
    return r = i.interleaved,
    r === null ? (t.next = t,
    gd(i)) : (t.next = r.next,
    r.next = t),
    i.interleaved = t,
    fn(e, n)
}
function Ha(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var i = t.lanes;
        i &= e.pendingLanes,
        n |= i,
        t.lanes = n,
        td(e, n)
    }
}
function Pf(e, t) {
    var n = e.updateQueue
      , i = e.alternate;
    if (i !== null && (i = i.updateQueue,
    n === i)) {
        var r = null
          , a = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                a === null ? r = a = o : a = a.next = o,
                n = n.next
            } while (n !== null);
            a === null ? r = a = t : a = a.next = t
        } else
            r = a = t;
        n = {
            baseState: i.baseState,
            firstBaseUpdate: r,
            lastBaseUpdate: a,
            shared: i.shared,
            effects: i.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function ho(e, t, n, i) {
    var r = e.updateQueue;
    vn = !1;
    var a = r.firstBaseUpdate
      , o = r.lastBaseUpdate
      , l = r.shared.pending;
    if (l !== null) {
        r.shared.pending = null;
        var s = l
          , c = s.next;
        s.next = null,
        o === null ? a = c : o.next = c,
        o = s;
        var f = e.alternate;
        f !== null && (f = f.updateQueue,
        l = f.lastBaseUpdate,
        l !== o && (l === null ? f.firstBaseUpdate = c : l.next = c,
        f.lastBaseUpdate = s))
    }
    if (a !== null) {
        var u = r.baseState;
        o = 0,
        f = c = s = null,
        l = a;
        do {
            var y = l.lane
              , T = l.eventTime;
            if ((i & y) === y) {
                f !== null && (f = f.next = {
                    eventTime: T,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                });
                e: {
                    var v = e
                      , E = l;
                    switch (y = t,
                    T = n,
                    E.tag) {
                    case 1:
                        if (v = E.payload,
                        typeof v == "function") {
                            u = v.call(T, u, y);
                            break e
                        }
                        u = v;
                        break e;
                    case 3:
                        v.flags = v.flags & -65537 | 128;
                    case 0:
                        if (v = E.payload,
                        y = typeof v == "function" ? v.call(T, u, y) : v,
                        y == null)
                            break e;
                        u = we({}, u, y);
                        break e;
                    case 2:
                        vn = !0
                    }
                }
                l.callback !== null && l.lane !== 0 && (e.flags |= 64,
                y = r.effects,
                y === null ? r.effects = [l] : y.push(l))
            } else
                T = {
                    eventTime: T,
                    lane: y,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                },
                f === null ? (c = f = T,
                s = u) : f = f.next = T,
                o |= y;
            if (l = l.next,
            l === null) {
                if (l = r.shared.pending,
                l === null)
                    break;
                y = l,
                l = y.next,
                y.next = null,
                r.lastBaseUpdate = y,
                r.shared.pending = null
            }
        } while (1);
        if (f === null && (s = u),
        r.baseState = s,
        r.firstBaseUpdate = c,
        r.lastBaseUpdate = f,
        t = r.shared.interleaved,
        t !== null) {
            r = t;
            do
                o |= r.lane,
                r = r.next;
            while (r !== t)
        } else
            a === null && (r.shared.lanes = 0);
        ri |= o,
        e.lanes = o,
        e.memoizedState = u
    }
}
function jf(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var i = e[t]
              , r = i.callback;
            if (r !== null) {
                if (i.callback = null,
                i = n,
                typeof r != "function")
                    throw Error(M(191, r));
                r.call(i)
            }
        }
}
var c0 = new du.Component().refs;
function ms(e, t, n, i) {
    t = e.memoizedState,
    n = n(i, t),
    n = n == null ? t : we({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Uo = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? si(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var i = ot()
          , r = Mn(e)
          , a = ln(i, r);
        a.payload = t,
        n != null && (a.callback = n),
        t = Sn(e, a, r),
        t !== null && (Ft(t, e, r, i),
        Ha(t, e, r))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var i = ot()
          , r = Mn(e)
          , a = ln(i, r);
        a.tag = 1,
        a.payload = t,
        n != null && (a.callback = n),
        t = Sn(e, a, r),
        t !== null && (Ft(t, e, r, i),
        Ha(t, e, r))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = ot()
          , i = Mn(e)
          , r = ln(n, i);
        r.tag = 2,
        t != null && (r.callback = t),
        t = Sn(e, r, i),
        t !== null && (Ft(t, e, i, n),
        Ha(t, e, i))
    }
};
function Bf(e, t, n, i, r, a, o) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(i, a, o) : t.prototype && t.prototype.isPureReactComponent ? !Br(n, i) || !Br(r, a) : !0
}
function u0(e, t, n) {
    var i = !1
      , r = Un
      , a = t.contextType;
    return typeof a == "object" && a !== null ? a = Mt(a) : (r = gt(t) ? ti : Je.current,
    i = t.contextTypes,
    a = (i = i != null) ? Di(e, r) : Un),
    t = new t(n,a),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = Uo,
    e.stateNode = t,
    t._reactInternals = e,
    i && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = r,
    e.__reactInternalMemoizedMaskedChildContext = a),
    t
}
function zf(e, t, n, i) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, i),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, i),
    t.state !== e && Uo.enqueueReplaceState(t, t.state, null)
}
function ys(e, t, n, i) {
    var r = e.stateNode;
    r.props = n,
    r.state = e.memoizedState,
    r.refs = c0,
    md(e);
    var a = t.contextType;
    typeof a == "object" && a !== null ? r.context = Mt(a) : (a = gt(t) ? ti : Je.current,
    r.context = Di(e, a)),
    r.state = e.memoizedState,
    a = t.getDerivedStateFromProps,
    typeof a == "function" && (ms(e, t, a, n),
    r.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (t = r.state,
    typeof r.componentWillMount == "function" && r.componentWillMount(),
    typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(),
    t !== r.state && Uo.enqueueReplaceState(r, r.state, null),
    ho(e, n, r, i),
    r.state = e.memoizedState),
    typeof r.componentDidMount == "function" && (e.flags |= 4194308)
}
function or(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(M(309));
                var i = n.stateNode
            }
            if (!i)
                throw Error(M(147, e));
            var r = i
              , a = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === a ? t.ref : (t = function(o) {
                var l = r.refs;
                l === c0 && (l = r.refs = {}),
                o === null ? delete l[a] : l[a] = o
            }
            ,
            t._stringRef = a,
            t)
        }
        if (typeof e != "string")
            throw Error(M(284));
        if (!n._owner)
            throw Error(M(290, e))
    }
    return e
}
function Aa(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(M(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function Df(e) {
    var t = e._init;
    return t(e._payload)
}
function h0(e) {
    function t(h, p) {
        if (e) {
            var m = h.deletions;
            m === null ? (h.deletions = [p],
            h.flags |= 16) : m.push(p)
        }
    }
    function n(h, p) {
        if (!e)
            return null;
        for (; p !== null; )
            t(h, p),
            p = p.sibling;
        return null
    }
    function i(h, p) {
        for (h = new Map; p !== null; )
            p.key !== null ? h.set(p.key, p) : h.set(p.index, p),
            p = p.sibling;
        return h
    }
    function r(h, p) {
        return h = _n(h, p),
        h.index = 0,
        h.sibling = null,
        h
    }
    function a(h, p, m) {
        return h.index = m,
        e ? (m = h.alternate,
        m !== null ? (m = m.index,
        m < p ? (h.flags |= 2,
        p) : m) : (h.flags |= 2,
        p)) : (h.flags |= 1048576,
        p)
    }
    function o(h) {
        return e && h.alternate === null && (h.flags |= 2),
        h
    }
    function l(h, p, m, O) {
        return p === null || p.tag !== 6 ? (p = Cl(m, h.mode, O),
        p.return = h,
        p) : (p = r(p, m),
        p.return = h,
        p)
    }
    function s(h, p, m, O) {
        var C = m.type;
        return C === Ti ? f(h, p, m.props.children, O, m.key) : p !== null && (p.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Tn && Df(C) === p.type) ? (O = r(p, m.props),
        O.ref = or(h, p, m),
        O.return = h,
        O) : (O = Za(m.type, m.key, m.props, null, h.mode, O),
        O.ref = or(h, p, m),
        O.return = h,
        O)
    }
    function c(h, p, m, O) {
        return p === null || p.tag !== 4 || p.stateNode.containerInfo !== m.containerInfo || p.stateNode.implementation !== m.implementation ? (p = Sl(m, h.mode, O),
        p.return = h,
        p) : (p = r(p, m.children || []),
        p.return = h,
        p)
    }
    function f(h, p, m, O, C) {
        return p === null || p.tag !== 7 ? (p = qn(m, h.mode, O, C),
        p.return = h,
        p) : (p = r(p, m),
        p.return = h,
        p)
    }
    function u(h, p, m) {
        if (typeof p == "string" && p !== "" || typeof p == "number")
            return p = Cl("" + p, h.mode, m),
            p.return = h,
            p;
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
            case pa:
                return m = Za(p.type, p.key, p.props, null, h.mode, m),
                m.ref = or(h, null, p),
                m.return = h,
                m;
            case xi:
                return p = Sl(p, h.mode, m),
                p.return = h,
                p;
            case Tn:
                var O = p._init;
                return u(h, O(p._payload), m)
            }
            if (gr(p) || tr(p))
                return p = qn(p, h.mode, m, null),
                p.return = h,
                p;
            Aa(h, p)
        }
        return null
    }
    function y(h, p, m, O) {
        var C = p !== null ? p.key : null;
        if (typeof m == "string" && m !== "" || typeof m == "number")
            return C !== null ? null : l(h, p, "" + m, O);
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
            case pa:
                return m.key === C ? s(h, p, m, O) : null;
            case xi:
                return m.key === C ? c(h, p, m, O) : null;
            case Tn:
                return C = m._init,
                y(h, p, C(m._payload), O)
            }
            if (gr(m) || tr(m))
                return C !== null ? null : f(h, p, m, O, null);
            Aa(h, m)
        }
        return null
    }
    function T(h, p, m, O, C) {
        if (typeof O == "string" && O !== "" || typeof O == "number")
            return h = h.get(m) || null,
            l(p, h, "" + O, C);
        if (typeof O == "object" && O !== null) {
            switch (O.$$typeof) {
            case pa:
                return h = h.get(O.key === null ? m : O.key) || null,
                s(p, h, O, C);
            case xi:
                return h = h.get(O.key === null ? m : O.key) || null,
                c(p, h, O, C);
            case Tn:
                var x = O._init;
                return T(h, p, m, x(O._payload), C)
            }
            if (gr(O) || tr(O))
                return h = h.get(m) || null,
                f(p, h, O, C, null);
            Aa(p, O)
        }
        return null
    }
    function v(h, p, m, O) {
        for (var C = null, x = null, S = p, _ = p = 0, B = null; S !== null && _ < m.length; _++) {
            S.index > _ ? (B = S,
            S = null) : B = S.sibling;
            var G = y(h, S, m[_], O);
            if (G === null) {
                S === null && (S = B);
                break
            }
            e && S && G.alternate === null && t(h, S),
            p = a(G, p, _),
            x === null ? C = G : x.sibling = G,
            x = G,
            S = B
        }
        if (_ === m.length)
            return n(h, S),
            ve && Wn(h, _),
            C;
        if (S === null) {
            for (; _ < m.length; _++)
                S = u(h, m[_], O),
                S !== null && (p = a(S, p, _),
                x === null ? C = S : x.sibling = S,
                x = S);
            return ve && Wn(h, _),
            C
        }
        for (S = i(h, S); _ < m.length; _++)
            B = T(S, h, _, m[_], O),
            B !== null && (e && B.alternate !== null && S.delete(B.key === null ? _ : B.key),
            p = a(B, p, _),
            x === null ? C = B : x.sibling = B,
            x = B);
        return e && S.forEach(function(ne) {
            return t(h, ne)
        }),
        ve && Wn(h, _),
        C
    }
    function E(h, p, m, O) {
        var C = tr(m);
        if (typeof C != "function")
            throw Error(M(150));
        if (m = C.call(m),
        m == null)
            throw Error(M(151));
        for (var x = C = null, S = p, _ = p = 0, B = null, G = m.next(); S !== null && !G.done; _++,
        G = m.next()) {
            S.index > _ ? (B = S,
            S = null) : B = S.sibling;
            var ne = y(h, S, G.value, O);
            if (ne === null) {
                S === null && (S = B);
                break
            }
            e && S && ne.alternate === null && t(h, S),
            p = a(ne, p, _),
            x === null ? C = ne : x.sibling = ne,
            x = ne,
            S = B
        }
        if (G.done)
            return n(h, S),
            ve && Wn(h, _),
            C;
        if (S === null) {
            for (; !G.done; _++,
            G = m.next())
                G = u(h, G.value, O),
                G !== null && (p = a(G, p, _),
                x === null ? C = G : x.sibling = G,
                x = G);
            return ve && Wn(h, _),
            C
        }
        for (S = i(h, S); !G.done; _++,
        G = m.next())
            G = T(S, h, _, G.value, O),
            G !== null && (e && G.alternate !== null && S.delete(G.key === null ? _ : G.key),
            p = a(G, p, _),
            x === null ? C = G : x.sibling = G,
            x = G);
        return e && S.forEach(function(ye) {
            return t(h, ye)
        }),
        ve && Wn(h, _),
        C
    }
    function A(h, p, m, O) {
        if (typeof m == "object" && m !== null && m.type === Ti && m.key === null && (m = m.props.children),
        typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
            case pa:
                e: {
                    for (var C = m.key, x = p; x !== null; ) {
                        if (x.key === C) {
                            if (C = m.type,
                            C === Ti) {
                                if (x.tag === 7) {
                                    n(h, x.sibling),
                                    p = r(x, m.props.children),
                                    p.return = h,
                                    h = p;
                                    break e
                                }
                            } else if (x.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Tn && Df(C) === x.type) {
                                n(h, x.sibling),
                                p = r(x, m.props),
                                p.ref = or(h, x, m),
                                p.return = h,
                                h = p;
                                break e
                            }
                            n(h, x);
                            break
                        } else
                            t(h, x);
                        x = x.sibling
                    }
                    m.type === Ti ? (p = qn(m.props.children, h.mode, O, m.key),
                    p.return = h,
                    h = p) : (O = Za(m.type, m.key, m.props, null, h.mode, O),
                    O.ref = or(h, p, m),
                    O.return = h,
                    h = O)
                }
                return o(h);
            case xi:
                e: {
                    for (x = m.key; p !== null; ) {
                        if (p.key === x)
                            if (p.tag === 4 && p.stateNode.containerInfo === m.containerInfo && p.stateNode.implementation === m.implementation) {
                                n(h, p.sibling),
                                p = r(p, m.children || []),
                                p.return = h,
                                h = p;
                                break e
                            } else {
                                n(h, p);
                                break
                            }
                        else
                            t(h, p);
                        p = p.sibling
                    }
                    p = Sl(m, h.mode, O),
                    p.return = h,
                    h = p
                }
                return o(h);
            case Tn:
                return x = m._init,
                A(h, p, x(m._payload), O)
            }
            if (gr(m))
                return v(h, p, m, O);
            if (tr(m))
                return E(h, p, m, O);
            Aa(h, m)
        }
        return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m,
        p !== null && p.tag === 6 ? (n(h, p.sibling),
        p = r(p, m),
        p.return = h,
        h = p) : (n(h, p),
        p = Cl(m, h.mode, O),
        p.return = h,
        h = p),
        o(h)) : n(h, p)
    }
    return A
}
var Hi = h0(!0)
  , p0 = h0(!1)
  , ta = {}
  , Kt = Bn(ta)
  , Hr = Bn(ta)
  , Wr = Bn(ta);
function Zn(e) {
    if (e === ta)
        throw Error(M(174));
    return e
}
function yd(e, t) {
    switch (me(Wr, t),
    me(Hr, e),
    me(Kt, ta),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Yl(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = Yl(t, e)
    }
    Te(Kt),
    me(Kt, t)
}
function Wi() {
    Te(Kt),
    Te(Hr),
    Te(Wr)
}
function g0(e) {
    Zn(Wr.current);
    var t = Zn(Kt.current)
      , n = Yl(t, e.type);
    t !== n && (me(Hr, e),
    me(Kt, n))
}
function xd(e) {
    Hr.current === e && (Te(Kt),
    Te(Hr))
}
var Ee = Bn(0);
function po(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var El = [];
function Td() {
    for (var e = 0; e < El.length; e++)
        El[e]._workInProgressVersionPrimary = null;
    El.length = 0
}
var Wa = un.ReactCurrentDispatcher
  , Ol = un.ReactCurrentBatchConfig
  , ii = 0
  , Oe = null
  , Pe = null
  , ze = null
  , go = !1
  , wr = !1
  , Gr = 0
  , U1 = 0;
function $e() {
    throw Error(M(321))
}
function vd(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Ht(e[n], t[n]))
            return !1;
    return !0
}
function bd(e, t, n, i, r, a) {
    if (ii = a,
    Oe = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    Wa.current = e === null || e.memoizedState === null ? B1 : z1,
    e = n(i, r),
    wr) {
        a = 0;
        do {
            if (wr = !1,
            Gr = 0,
            25 <= a)
                throw Error(M(301));
            a += 1,
            ze = Pe = null,
            t.updateQueue = null,
            Wa.current = D1,
            e = n(i, r)
        } while (wr)
    }
    if (Wa.current = mo,
    t = Pe !== null && Pe.next !== null,
    ii = 0,
    ze = Pe = Oe = null,
    go = !1,
    t)
        throw Error(M(300));
    return e
}
function Ed() {
    var e = Gr !== 0;
    return Gr = 0,
    e
}
function $t() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return ze === null ? Oe.memoizedState = ze = e : ze = ze.next = e,
    ze
}
function _t() {
    if (Pe === null) {
        var e = Oe.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = Pe.next;
    var t = ze === null ? Oe.memoizedState : ze.next;
    if (t !== null)
        ze = t,
        Pe = e;
    else {
        if (e === null)
            throw Error(M(310));
        Pe = e,
        e = {
            memoizedState: Pe.memoizedState,
            baseState: Pe.baseState,
            baseQueue: Pe.baseQueue,
            queue: Pe.queue,
            next: null
        },
        ze === null ? Oe.memoizedState = ze = e : ze = ze.next = e
    }
    return ze
}
function Vr(e, t) {
    return typeof t == "function" ? t(e) : t
}
function wl(e) {
    var t = _t()
      , n = t.queue;
    if (n === null)
        throw Error(M(311));
    n.lastRenderedReducer = e;
    var i = Pe
      , r = i.baseQueue
      , a = n.pending;
    if (a !== null) {
        if (r !== null) {
            var o = r.next;
            r.next = a.next,
            a.next = o
        }
        i.baseQueue = r = a,
        n.pending = null
    }
    if (r !== null) {
        a = r.next,
        i = i.baseState;
        var l = o = null
          , s = null
          , c = a;
        do {
            var f = c.lane;
            if ((ii & f) === f)
                s !== null && (s = s.next = {
                    lane: 0,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                }),
                i = c.hasEagerState ? c.eagerState : e(i, c.action);
            else {
                var u = {
                    lane: f,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                };
                s === null ? (l = s = u,
                o = i) : s = s.next = u,
                Oe.lanes |= f,
                ri |= f
            }
            c = c.next
        } while (c !== null && c !== a);
        s === null ? o = i : s.next = l,
        Ht(i, t.memoizedState) || (ht = !0),
        t.memoizedState = i,
        t.baseState = o,
        t.baseQueue = s,
        n.lastRenderedState = i
    }
    if (e = n.interleaved,
    e !== null) {
        r = e;
        do
            a = r.lane,
            Oe.lanes |= a,
            ri |= a,
            r = r.next;
        while (r !== e)
    } else
        r === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function Al(e) {
    var t = _t()
      , n = t.queue;
    if (n === null)
        throw Error(M(311));
    n.lastRenderedReducer = e;
    var i = n.dispatch
      , r = n.pending
      , a = t.memoizedState;
    if (r !== null) {
        n.pending = null;
        var o = r = r.next;
        do
            a = e(a, o.action),
            o = o.next;
        while (o !== r);
        Ht(a, t.memoizedState) || (ht = !0),
        t.memoizedState = a,
        t.baseQueue === null && (t.baseState = a),
        n.lastRenderedState = a
    }
    return [a, i]
}
function m0() {}
function y0(e, t) {
    var n = Oe
      , i = _t()
      , r = t()
      , a = !Ht(i.memoizedState, r);
    if (a && (i.memoizedState = r,
    ht = !0),
    i = i.queue,
    Od(v0.bind(null, n, i, e), [e]),
    i.getSnapshot !== t || a || ze !== null && ze.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        Xr(9, T0.bind(null, n, i, r, t), void 0, null),
        De === null)
            throw Error(M(349));
        ii & 30 || x0(n, t, r)
    }
    return r
}
function x0(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = Oe.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    Oe.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function T0(e, t, n, i) {
    t.value = n,
    t.getSnapshot = i,
    b0(t) && E0(e)
}
function v0(e, t, n) {
    return n(function() {
        b0(t) && E0(e)
    })
}
function b0(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Ht(e, n)
    } catch {
        return !0
    }
}
function E0(e) {
    var t = fn(e, 1);
    t !== null && Ft(t, e, 1, -1)
}
function Ff(e) {
    var t = $t();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Vr,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = j1.bind(null, Oe, e),
    [t.memoizedState, e]
}
function Xr(e, t, n, i) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: i,
        next: null
    },
    t = Oe.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    Oe.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (i = n.next,
    n.next = e,
    e.next = i,
    t.lastEffect = e)),
    e
}
function O0() {
    return _t().memoizedState
}
function Ga(e, t, n, i) {
    var r = $t();
    Oe.flags |= e,
    r.memoizedState = Xr(1 | t, n, void 0, i === void 0 ? null : i)
}
function Lo(e, t, n, i) {
    var r = _t();
    i = i === void 0 ? null : i;
    var a = void 0;
    if (Pe !== null) {
        var o = Pe.memoizedState;
        if (a = o.destroy,
        i !== null && vd(i, o.deps)) {
            r.memoizedState = Xr(t, n, a, i);
            return
        }
    }
    Oe.flags |= e,
    r.memoizedState = Xr(1 | t, n, a, i)
}
function Hf(e, t) {
    return Ga(8390656, 8, e, t)
}
function Od(e, t) {
    return Lo(2048, 8, e, t)
}
function w0(e, t) {
    return Lo(4, 2, e, t)
}
function A0(e, t) {
    return Lo(4, 4, e, t)
}
function k0(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function I0(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    Lo(4, 4, k0.bind(null, t, e), n)
}
function wd() {}
function C0(e, t) {
    var n = _t();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    return i !== null && t !== null && vd(t, i[1]) ? i[0] : (n.memoizedState = [e, t],
    e)
}
function S0(e, t) {
    var n = _t();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    return i !== null && t !== null && vd(t, i[1]) ? i[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function R0(e, t, n) {
    return ii & 21 ? (Ht(n, t) || (n = Nu(),
    Oe.lanes |= n,
    ri |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    ht = !0),
    e.memoizedState = n)
}
function L1(e, t) {
    var n = fe;
    fe = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var i = Ol.transition;
    Ol.transition = {};
    try {
        e(!1),
        t()
    } finally {
        fe = n,
        Ol.transition = i
    }
}
function M0() {
    return _t().memoizedState
}
function P1(e, t, n) {
    var i = Mn(e);
    if (n = {
        lane: i,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    _0(e))
        N0(t, n);
    else if (n = d0(e, t, n, i),
    n !== null) {
        var r = ot();
        Ft(n, e, i, r),
        U0(n, t, i)
    }
}
function j1(e, t, n) {
    var i = Mn(e)
      , r = {
        lane: i,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (_0(e))
        N0(t, r);
    else {
        var a = e.alternate;
        if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer,
        a !== null))
            try {
                var o = t.lastRenderedState
                  , l = a(o, n);
                if (r.hasEagerState = !0,
                r.eagerState = l,
                Ht(l, o)) {
                    var s = t.interleaved;
                    s === null ? (r.next = r,
                    gd(t)) : (r.next = s.next,
                    s.next = r),
                    t.interleaved = r;
                    return
                }
            } catch {} finally {}
        n = d0(e, t, r, i),
        n !== null && (r = ot(),
        Ft(n, e, i, r),
        U0(n, t, i))
    }
}
function _0(e) {
    var t = e.alternate;
    return e === Oe || t !== null && t === Oe
}
function N0(e, t) {
    wr = go = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function U0(e, t, n) {
    if (n & 4194240) {
        var i = t.lanes;
        i &= e.pendingLanes,
        n |= i,
        t.lanes = n,
        td(e, n)
    }
}
var mo = {
    readContext: Mt,
    useCallback: $e,
    useContext: $e,
    useEffect: $e,
    useImperativeHandle: $e,
    useInsertionEffect: $e,
    useLayoutEffect: $e,
    useMemo: $e,
    useReducer: $e,
    useRef: $e,
    useState: $e,
    useDebugValue: $e,
    useDeferredValue: $e,
    useTransition: $e,
    useMutableSource: $e,
    useSyncExternalStore: $e,
    useId: $e,
    unstable_isNewReconciler: !1
}
  , B1 = {
    readContext: Mt,
    useCallback: function(e, t) {
        return $t().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: Mt,
    useEffect: Hf,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        Ga(4194308, 4, k0.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return Ga(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return Ga(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = $t();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var i = $t();
        return t = n !== void 0 ? n(t) : t,
        i.memoizedState = i.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        i.queue = e,
        e = e.dispatch = P1.bind(null, Oe, e),
        [i.memoizedState, e]
    },
    useRef: function(e) {
        var t = $t();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: Ff,
    useDebugValue: wd,
    useDeferredValue: function(e) {
        return $t().memoizedState = e
    },
    useTransition: function() {
        var e = Ff(!1)
          , t = e[0];
        return e = L1.bind(null, e[1]),
        $t().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var i = Oe
          , r = $t();
        if (ve) {
            if (n === void 0)
                throw Error(M(407));
            n = n()
        } else {
            if (n = t(),
            De === null)
                throw Error(M(349));
            ii & 30 || x0(i, t, n)
        }
        r.memoizedState = n;
        var a = {
            value: n,
            getSnapshot: t
        };
        return r.queue = a,
        Hf(v0.bind(null, i, a, e), [e]),
        i.flags |= 2048,
        Xr(9, T0.bind(null, i, a, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = $t()
          , t = De.identifierPrefix;
        if (ve) {
            var n = on
              , i = an;
            n = (i & ~(1 << 32 - Dt(i) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = Gr++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = U1++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , z1 = {
    readContext: Mt,
    useCallback: C0,
    useContext: Mt,
    useEffect: Od,
    useImperativeHandle: I0,
    useInsertionEffect: w0,
    useLayoutEffect: A0,
    useMemo: S0,
    useReducer: wl,
    useRef: O0,
    useState: function() {
        return wl(Vr)
    },
    useDebugValue: wd,
    useDeferredValue: function(e) {
        var t = _t();
        return R0(t, Pe.memoizedState, e)
    },
    useTransition: function() {
        var e = wl(Vr)[0]
          , t = _t().memoizedState;
        return [e, t]
    },
    useMutableSource: m0,
    useSyncExternalStore: y0,
    useId: M0,
    unstable_isNewReconciler: !1
}
  , D1 = {
    readContext: Mt,
    useCallback: C0,
    useContext: Mt,
    useEffect: Od,
    useImperativeHandle: I0,
    useInsertionEffect: w0,
    useLayoutEffect: A0,
    useMemo: S0,
    useReducer: Al,
    useRef: O0,
    useState: function() {
        return Al(Vr)
    },
    useDebugValue: wd,
    useDeferredValue: function(e) {
        var t = _t();
        return Pe === null ? t.memoizedState = e : R0(t, Pe.memoizedState, e)
    },
    useTransition: function() {
        var e = Al(Vr)[0]
          , t = _t().memoizedState;
        return [e, t]
    },
    useMutableSource: m0,
    useSyncExternalStore: y0,
    useId: M0,
    unstable_isNewReconciler: !1
};
function Gi(e, t) {
    try {
        var n = ""
          , i = t;
        do
            n += p4(i),
            i = i.return;
        while (i);
        var r = n
    } catch (a) {
        r = `
Error generating stack: ` + a.message + `
` + a.stack
    }
    return {
        value: e,
        source: t,
        stack: r,
        digest: null
    }
}
function kl(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function xs(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var F1 = typeof WeakMap == "function" ? WeakMap : Map;
function L0(e, t, n) {
    n = ln(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var i = t.value;
    return n.callback = function() {
        xo || (xo = !0,
        Cs = i),
        xs(e, t)
    }
    ,
    n
}
function P0(e, t, n) {
    n = ln(-1, n),
    n.tag = 3;
    var i = e.type.getDerivedStateFromError;
    if (typeof i == "function") {
        var r = t.value;
        n.payload = function() {
            return i(r)
        }
        ,
        n.callback = function() {
            xs(e, t)
        }
    }
    var a = e.stateNode;
    return a !== null && typeof a.componentDidCatch == "function" && (n.callback = function() {
        xs(e, t),
        typeof i != "function" && (Rn === null ? Rn = new Set([this]) : Rn.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : ""
        })
    }
    ),
    n
}
function Wf(e, t, n) {
    var i = e.pingCache;
    if (i === null) {
        i = e.pingCache = new F1;
        var r = new Set;
        i.set(t, r)
    } else
        r = i.get(t),
        r === void 0 && (r = new Set,
        i.set(t, r));
    r.has(n) || (r.add(n),
    e = t2.bind(null, e, t, n),
    t.then(e, e))
}
function Gf(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function Vf(e, t, n, i, r) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = r,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = ln(-1, 1),
    t.tag = 2,
    Sn(n, t, 1))),
    n.lanes |= 1),
    e)
}
var H1 = un.ReactCurrentOwner
  , ht = !1;
function at(e, t, n, i) {
    t.child = e === null ? p0(t, null, n, i) : Hi(t, e.child, n, i)
}
function Xf(e, t, n, i, r) {
    n = n.render;
    var a = t.ref;
    return Pi(t, r),
    i = bd(e, t, n, i, a, r),
    n = Ed(),
    e !== null && !ht ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~r,
    cn(e, t, r)) : (ve && n && dd(t),
    t.flags |= 1,
    at(e, t, i, r),
    t.child)
}
function $f(e, t, n, i, r) {
    if (e === null) {
        var a = n.type;
        return typeof a == "function" && !_d(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = a,
        j0(e, t, a, i, r)) : (e = Za(n.type, null, i, t, t.mode, r),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (a = e.child,
    !(e.lanes & r)) {
        var o = a.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : Br,
        n(o, i) && e.ref === t.ref)
            return cn(e, t, r)
    }
    return t.flags |= 1,
    e = _n(a, i),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function j0(e, t, n, i, r) {
    if (e !== null) {
        var a = e.memoizedProps;
        if (Br(a, i) && e.ref === t.ref)
            if (ht = !1,
            t.pendingProps = i = a,
            (e.lanes & r) !== 0)
                e.flags & 131072 && (ht = !0);
            else
                return t.lanes = e.lanes,
                cn(e, t, r)
    }
    return Ts(e, t, n, i, r)
}
function B0(e, t, n) {
    var i = t.pendingProps
      , r = i.children
      , a = e !== null ? e.memoizedState : null;
    if (i.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            me(Si, xt),
            xt |= n;
        else {
            if (!(n & 1073741824))
                return e = a !== null ? a.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                me(Si, xt),
                xt |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            i = a !== null ? a.baseLanes : n,
            me(Si, xt),
            xt |= i
        }
    else
        a !== null ? (i = a.baseLanes | n,
        t.memoizedState = null) : i = n,
        me(Si, xt),
        xt |= i;
    return at(e, t, r, n),
    t.child
}
function z0(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function Ts(e, t, n, i, r) {
    var a = gt(n) ? ti : Je.current;
    return a = Di(t, a),
    Pi(t, r),
    n = bd(e, t, n, i, a, r),
    i = Ed(),
    e !== null && !ht ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~r,
    cn(e, t, r)) : (ve && i && dd(t),
    t.flags |= 1,
    at(e, t, n, r),
    t.child)
}
function Zf(e, t, n, i, r) {
    if (gt(n)) {
        var a = !0;
        lo(t)
    } else
        a = !1;
    if (Pi(t, r),
    t.stateNode === null)
        Va(e, t),
        u0(t, n, i),
        ys(t, n, i, r),
        i = !0;
    else if (e === null) {
        var o = t.stateNode
          , l = t.memoizedProps;
        o.props = l;
        var s = o.context
          , c = n.contextType;
        typeof c == "object" && c !== null ? c = Mt(c) : (c = gt(n) ? ti : Je.current,
        c = Di(t, c));
        var f = n.getDerivedStateFromProps
          , u = typeof f == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        u || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (l !== i || s !== c) && zf(t, o, i, c),
        vn = !1;
        var y = t.memoizedState;
        o.state = y,
        ho(t, i, o, r),
        s = t.memoizedState,
        l !== i || y !== s || pt.current || vn ? (typeof f == "function" && (ms(t, n, f, i),
        s = t.memoizedState),
        (l = vn || Bf(t, n, l, i, y, s, c)) ? (u || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(),
        typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
        typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = i,
        t.memoizedState = s),
        o.props = i,
        o.state = s,
        o.context = c,
        i = l) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        i = !1)
    } else {
        o = t.stateNode,
        f0(e, t),
        l = t.memoizedProps,
        c = t.type === t.elementType ? l : Pt(t.type, l),
        o.props = c,
        u = t.pendingProps,
        y = o.context,
        s = n.contextType,
        typeof s == "object" && s !== null ? s = Mt(s) : (s = gt(n) ? ti : Je.current,
        s = Di(t, s));
        var T = n.getDerivedStateFromProps;
        (f = typeof T == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (l !== u || y !== s) && zf(t, o, i, s),
        vn = !1,
        y = t.memoizedState,
        o.state = y,
        ho(t, i, o, r);
        var v = t.memoizedState;
        l !== u || y !== v || pt.current || vn ? (typeof T == "function" && (ms(t, n, T, i),
        v = t.memoizedState),
        (c = vn || Bf(t, n, c, i, y, v, s) || !1) ? (f || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(i, v, s),
        typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(i, v, s)),
        typeof o.componentDidUpdate == "function" && (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || l === e.memoizedProps && y === e.memoizedState || (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = i,
        t.memoizedState = v),
        o.props = i,
        o.state = v,
        o.context = s,
        i = c) : (typeof o.componentDidUpdate != "function" || l === e.memoizedProps && y === e.memoizedState || (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024),
        i = !1)
    }
    return vs(e, t, n, i, a, r)
}
function vs(e, t, n, i, r, a) {
    z0(e, t);
    var o = (t.flags & 128) !== 0;
    if (!i && !o)
        return r && Nf(t, n, !1),
        cn(e, t, a);
    i = t.stateNode,
    H1.current = t;
    var l = o && typeof n.getDerivedStateFromError != "function" ? null : i.render();
    return t.flags |= 1,
    e !== null && o ? (t.child = Hi(t, e.child, null, a),
    t.child = Hi(t, null, l, a)) : at(e, t, l, a),
    t.memoizedState = i.state,
    r && Nf(t, n, !0),
    t.child
}
function D0(e) {
    var t = e.stateNode;
    t.pendingContext ? _f(e, t.pendingContext, t.pendingContext !== t.context) : t.context && _f(e, t.context, !1),
    yd(e, t.containerInfo)
}
function Yf(e, t, n, i, r) {
    return Fi(),
    cd(r),
    t.flags |= 256,
    at(e, t, n, i),
    t.child
}
var bs = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Es(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function F0(e, t, n) {
    var i = t.pendingProps, r = Ee.current, a = !1, o = (t.flags & 128) !== 0, l;
    if ((l = o) || (l = e !== null && e.memoizedState === null ? !1 : (r & 2) !== 0),
    l ? (a = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (r |= 1),
    me(Ee, r & 1),
    e === null)
        return ps(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (o = i.children,
        e = i.fallback,
        a ? (i = t.mode,
        a = t.child,
        o = {
            mode: "hidden",
            children: o
        },
        !(i & 1) && a !== null ? (a.childLanes = 0,
        a.pendingProps = o) : a = Bo(o, i, 0, null),
        e = qn(e, i, n, null),
        a.return = t,
        e.return = t,
        a.sibling = e,
        t.child = a,
        t.child.memoizedState = Es(n),
        t.memoizedState = bs,
        e) : Ad(t, o));
    if (r = e.memoizedState,
    r !== null && (l = r.dehydrated,
    l !== null))
        return W1(e, t, o, i, l, r, n);
    if (a) {
        a = i.fallback,
        o = t.mode,
        r = e.child,
        l = r.sibling;
        var s = {
            mode: "hidden",
            children: i.children
        };
        return !(o & 1) && t.child !== r ? (i = t.child,
        i.childLanes = 0,
        i.pendingProps = s,
        t.deletions = null) : (i = _n(r, s),
        i.subtreeFlags = r.subtreeFlags & 14680064),
        l !== null ? a = _n(l, a) : (a = qn(a, o, n, null),
        a.flags |= 2),
        a.return = t,
        i.return = t,
        i.sibling = a,
        t.child = i,
        i = a,
        a = t.child,
        o = e.child.memoizedState,
        o = o === null ? Es(n) : {
            baseLanes: o.baseLanes | n,
            cachePool: null,
            transitions: o.transitions
        },
        a.memoizedState = o,
        a.childLanes = e.childLanes & ~n,
        t.memoizedState = bs,
        i
    }
    return a = e.child,
    e = a.sibling,
    i = _n(a, {
        mode: "visible",
        children: i.children
    }),
    !(t.mode & 1) && (i.lanes = n),
    i.return = t,
    i.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = i,
    t.memoizedState = null,
    i
}
function Ad(e, t) {
    return t = Bo({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function ka(e, t, n, i) {
    return i !== null && cd(i),
    Hi(t, e.child, null, n),
    e = Ad(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function W1(e, t, n, i, r, a, o) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        i = kl(Error(M(422))),
        ka(e, t, o, i)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (a = i.fallback,
        r = t.mode,
        i = Bo({
            mode: "visible",
            children: i.children
        }, r, 0, null),
        a = qn(a, r, o, null),
        a.flags |= 2,
        i.return = t,
        a.return = t,
        i.sibling = a,
        t.child = i,
        t.mode & 1 && Hi(t, e.child, null, o),
        t.child.memoizedState = Es(o),
        t.memoizedState = bs,
        a);
    if (!(t.mode & 1))
        return ka(e, t, o, null);
    if (r.data === "$!") {
        if (i = r.nextSibling && r.nextSibling.dataset,
        i)
            var l = i.dgst;
        return i = l,
        a = Error(M(419)),
        i = kl(a, i, void 0),
        ka(e, t, o, i)
    }
    if (l = (o & e.childLanes) !== 0,
    ht || l) {
        if (i = De,
        i !== null) {
            switch (o & -o) {
            case 4:
                r = 2;
                break;
            case 16:
                r = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                r = 32;
                break;
            case 536870912:
                r = 268435456;
                break;
            default:
                r = 0
            }
            r = r & (i.suspendedLanes | o) ? 0 : r,
            r !== 0 && r !== a.retryLane && (a.retryLane = r,
            fn(e, r),
            Ft(i, e, r, -1))
        }
        return Md(),
        i = kl(Error(M(421))),
        ka(e, t, o, i)
    }
    return r.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = n2.bind(null, e),
    r._reactRetry = t,
    null) : (e = a.treeContext,
    Tt = Cn(r.nextSibling),
    vt = t,
    ve = !0,
    zt = null,
    e !== null && (It[Ct++] = an,
    It[Ct++] = on,
    It[Ct++] = ni,
    an = e.id,
    on = e.overflow,
    ni = t),
    t = Ad(t, i.children),
    t.flags |= 4096,
    t)
}
function Kf(e, t, n) {
    e.lanes |= t;
    var i = e.alternate;
    i !== null && (i.lanes |= t),
    gs(e.return, t, n)
}
function Il(e, t, n, i, r) {
    var a = e.memoizedState;
    a === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: n,
        tailMode: r
    } : (a.isBackwards = t,
    a.rendering = null,
    a.renderingStartTime = 0,
    a.last = i,
    a.tail = n,
    a.tailMode = r)
}
function H0(e, t, n) {
    var i = t.pendingProps
      , r = i.revealOrder
      , a = i.tail;
    if (at(e, t, i.children, n),
    i = Ee.current,
    i & 2)
        i = i & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && Kf(e, n, t);
                else if (e.tag === 19)
                    Kf(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        i &= 1
    }
    if (me(Ee, i),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (r) {
        case "forwards":
            for (n = t.child,
            r = null; n !== null; )
                e = n.alternate,
                e !== null && po(e) === null && (r = n),
                n = n.sibling;
            n = r,
            n === null ? (r = t.child,
            t.child = null) : (r = n.sibling,
            n.sibling = null),
            Il(t, !1, r, n, a);
            break;
        case "backwards":
            for (n = null,
            r = t.child,
            t.child = null; r !== null; ) {
                if (e = r.alternate,
                e !== null && po(e) === null) {
                    t.child = r;
                    break
                }
                e = r.sibling,
                r.sibling = n,
                n = r,
                r = e
            }
            Il(t, !0, n, null, a);
            break;
        case "together":
            Il(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Va(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function cn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    ri |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(M(153));
    if (t.child !== null) {
        for (e = t.child,
        n = _n(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = _n(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function G1(e, t, n) {
    switch (t.tag) {
    case 3:
        D0(t),
        Fi();
        break;
    case 5:
        g0(t);
        break;
    case 1:
        gt(t.type) && lo(t);
        break;
    case 4:
        yd(t, t.stateNode.containerInfo);
        break;
    case 10:
        var i = t.type._context
          , r = t.memoizedProps.value;
        me(co, i._currentValue),
        i._currentValue = r;
        break;
    case 13:
        if (i = t.memoizedState,
        i !== null)
            return i.dehydrated !== null ? (me(Ee, Ee.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? F0(e, t, n) : (me(Ee, Ee.current & 1),
            e = cn(e, t, n),
            e !== null ? e.sibling : null);
        me(Ee, Ee.current & 1);
        break;
    case 19:
        if (i = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (i)
                return H0(e, t, n);
            t.flags |= 128
        }
        if (r = t.memoizedState,
        r !== null && (r.rendering = null,
        r.tail = null,
        r.lastEffect = null),
        me(Ee, Ee.current),
        i)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        B0(e, t, n)
    }
    return cn(e, t, n)
}
var W0, Os, G0, V0;
W0 = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
Os = function() {}
;
G0 = function(e, t, n, i) {
    var r = e.memoizedProps;
    if (r !== i) {
        e = t.stateNode,
        Zn(Kt.current);
        var a = null;
        switch (n) {
        case "input":
            r = Vl(e, r),
            i = Vl(e, i),
            a = [];
            break;
        case "select":
            r = we({}, r, {
                value: void 0
            }),
            i = we({}, i, {
                value: void 0
            }),
            a = [];
            break;
        case "textarea":
            r = Zl(e, r),
            i = Zl(e, i),
            a = [];
            break;
        default:
            typeof r.onClick != "function" && typeof i.onClick == "function" && (e.onclick = ao)
        }
        Kl(n, i);
        var o;
        n = null;
        for (c in r)
            if (!i.hasOwnProperty(c) && r.hasOwnProperty(c) && r[c] != null)
                if (c === "style") {
                    var l = r[c];
                    for (o in l)
                        l.hasOwnProperty(o) && (n || (n = {}),
                        n[o] = "")
                } else
                    c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Mr.hasOwnProperty(c) ? a || (a = []) : (a = a || []).push(c, null));
        for (c in i) {
            var s = i[c];
            if (l = r != null ? r[c] : void 0,
            i.hasOwnProperty(c) && s !== l && (s != null || l != null))
                if (c === "style")
                    if (l) {
                        for (o in l)
                            !l.hasOwnProperty(o) || s && s.hasOwnProperty(o) || (n || (n = {}),
                            n[o] = "");
                        for (o in s)
                            s.hasOwnProperty(o) && l[o] !== s[o] && (n || (n = {}),
                            n[o] = s[o])
                    } else
                        n || (a || (a = []),
                        a.push(c, n)),
                        n = s;
                else
                    c === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0,
                    l = l ? l.__html : void 0,
                    s != null && l !== s && (a = a || []).push(c, s)) : c === "children" ? typeof s != "string" && typeof s != "number" || (a = a || []).push(c, "" + s) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Mr.hasOwnProperty(c) ? (s != null && c === "onScroll" && xe("scroll", e),
                    a || l === s || (a = [])) : (a = a || []).push(c, s))
        }
        n && (a = a || []).push("style", n);
        var c = a;
        (t.updateQueue = c) && (t.flags |= 4)
    }
}
;
V0 = function(e, t, n, i) {
    n !== i && (t.flags |= 4)
}
;
function lr(e, t) {
    if (!ve)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var i = null; n !== null; )
                n.alternate !== null && (i = n),
                n = n.sibling;
            i === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : i.sibling = null
        }
}
function Ze(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , i = 0;
    if (t)
        for (var r = e.child; r !== null; )
            n |= r.lanes | r.childLanes,
            i |= r.subtreeFlags & 14680064,
            i |= r.flags & 14680064,
            r.return = e,
            r = r.sibling;
    else
        for (r = e.child; r !== null; )
            n |= r.lanes | r.childLanes,
            i |= r.subtreeFlags,
            i |= r.flags,
            r.return = e,
            r = r.sibling;
    return e.subtreeFlags |= i,
    e.childLanes = n,
    t
}
function V1(e, t, n) {
    var i = t.pendingProps;
    switch (fd(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return Ze(t),
        null;
    case 1:
        return gt(t.type) && oo(),
        Ze(t),
        null;
    case 3:
        return i = t.stateNode,
        Wi(),
        Te(pt),
        Te(Je),
        Td(),
        i.pendingContext && (i.context = i.pendingContext,
        i.pendingContext = null),
        (e === null || e.child === null) && (wa(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        zt !== null && (Ms(zt),
        zt = null))),
        Os(e, t),
        Ze(t),
        null;
    case 5:
        xd(t);
        var r = Zn(Wr.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            G0(e, t, n, i, r),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!i) {
                if (t.stateNode === null)
                    throw Error(M(166));
                return Ze(t),
                null
            }
            if (e = Zn(Kt.current),
            wa(t)) {
                i = t.stateNode,
                n = t.type;
                var a = t.memoizedProps;
                switch (i[Zt] = t,
                i[Fr] = a,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    xe("cancel", i),
                    xe("close", i);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    xe("load", i);
                    break;
                case "video":
                case "audio":
                    for (r = 0; r < yr.length; r++)
                        xe(yr[r], i);
                    break;
                case "source":
                    xe("error", i);
                    break;
                case "img":
                case "image":
                case "link":
                    xe("error", i),
                    xe("load", i);
                    break;
                case "details":
                    xe("toggle", i);
                    break;
                case "input":
                    af(i, a),
                    xe("invalid", i);
                    break;
                case "select":
                    i._wrapperState = {
                        wasMultiple: !!a.multiple
                    },
                    xe("invalid", i);
                    break;
                case "textarea":
                    lf(i, a),
                    xe("invalid", i)
                }
                Kl(n, a),
                r = null;
                for (var o in a)
                    if (a.hasOwnProperty(o)) {
                        var l = a[o];
                        o === "children" ? typeof l == "string" ? i.textContent !== l && (a.suppressHydrationWarning !== !0 && Oa(i.textContent, l, e),
                        r = ["children", l]) : typeof l == "number" && i.textContent !== "" + l && (a.suppressHydrationWarning !== !0 && Oa(i.textContent, l, e),
                        r = ["children", "" + l]) : Mr.hasOwnProperty(o) && l != null && o === "onScroll" && xe("scroll", i)
                    }
                switch (n) {
                case "input":
                    ga(i),
                    of(i, a, !0);
                    break;
                case "textarea":
                    ga(i),
                    sf(i);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof a.onClick == "function" && (i.onclick = ao)
                }
                i = r,
                t.updateQueue = i,
                i !== null && (t.flags |= 4)
            } else {
                o = r.nodeType === 9 ? r : r.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = xu(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof i.is == "string" ? e = o.createElement(n, {
                    is: i.is
                }) : (e = o.createElement(n),
                n === "select" && (o = e,
                i.multiple ? o.multiple = !0 : i.size && (o.size = i.size))) : e = o.createElementNS(e, n),
                e[Zt] = t,
                e[Fr] = i,
                W0(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (o = Ql(n, i),
                    n) {
                    case "dialog":
                        xe("cancel", e),
                        xe("close", e),
                        r = i;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        xe("load", e),
                        r = i;
                        break;
                    case "video":
                    case "audio":
                        for (r = 0; r < yr.length; r++)
                            xe(yr[r], e);
                        r = i;
                        break;
                    case "source":
                        xe("error", e),
                        r = i;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        xe("error", e),
                        xe("load", e),
                        r = i;
                        break;
                    case "details":
                        xe("toggle", e),
                        r = i;
                        break;
                    case "input":
                        af(e, i),
                        r = Vl(e, i),
                        xe("invalid", e);
                        break;
                    case "option":
                        r = i;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!i.multiple
                        },
                        r = we({}, i, {
                            value: void 0
                        }),
                        xe("invalid", e);
                        break;
                    case "textarea":
                        lf(e, i),
                        r = Zl(e, i),
                        xe("invalid", e);
                        break;
                    default:
                        r = i
                    }
                    Kl(n, r),
                    l = r;
                    for (a in l)
                        if (l.hasOwnProperty(a)) {
                            var s = l[a];
                            a === "style" ? bu(e, s) : a === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0,
                            s != null && Tu(e, s)) : a === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && _r(e, s) : typeof s == "number" && _r(e, "" + s) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (Mr.hasOwnProperty(a) ? s != null && a === "onScroll" && xe("scroll", e) : s != null && Ys(e, a, s, o))
                        }
                    switch (n) {
                    case "input":
                        ga(e),
                        of(e, i, !1);
                        break;
                    case "textarea":
                        ga(e),
                        sf(e);
                        break;
                    case "option":
                        i.value != null && e.setAttribute("value", "" + Nn(i.value));
                        break;
                    case "select":
                        e.multiple = !!i.multiple,
                        a = i.value,
                        a != null ? _i(e, !!i.multiple, a, !1) : i.defaultValue != null && _i(e, !!i.multiple, i.defaultValue, !0);
                        break;
                    default:
                        typeof r.onClick == "function" && (e.onclick = ao)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        i = !!i.autoFocus;
                        break e;
                    case "img":
                        i = !0;
                        break e;
                    default:
                        i = !1
                    }
                }
                i && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return Ze(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            V0(e, t, e.memoizedProps, i);
        else {
            if (typeof i != "string" && t.stateNode === null)
                throw Error(M(166));
            if (n = Zn(Wr.current),
            Zn(Kt.current),
            wa(t)) {
                if (i = t.stateNode,
                n = t.memoizedProps,
                i[Zt] = t,
                (a = i.nodeValue !== n) && (e = vt,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        Oa(i.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && Oa(i.nodeValue, n, (e.mode & 1) !== 0)
                    }
                a && (t.flags |= 4)
            } else
                i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i),
                i[Zt] = t,
                t.stateNode = i
        }
        return Ze(t),
        null;
    case 13:
        if (Te(Ee),
        i = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (ve && Tt !== null && t.mode & 1 && !(t.flags & 128))
                s0(),
                Fi(),
                t.flags |= 98560,
                a = !1;
            else if (a = wa(t),
            i !== null && i.dehydrated !== null) {
                if (e === null) {
                    if (!a)
                        throw Error(M(318));
                    if (a = t.memoizedState,
                    a = a !== null ? a.dehydrated : null,
                    !a)
                        throw Error(M(317));
                    a[Zt] = t
                } else
                    Fi(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                Ze(t),
                a = !1
            } else
                zt !== null && (Ms(zt),
                zt = null),
                a = !0;
            if (!a)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (i = i !== null,
        i !== (e !== null && e.memoizedState !== null) && i && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || Ee.current & 1 ? je === 0 && (je = 3) : Md())),
        t.updateQueue !== null && (t.flags |= 4),
        Ze(t),
        null);
    case 4:
        return Wi(),
        Os(e, t),
        e === null && zr(t.stateNode.containerInfo),
        Ze(t),
        null;
    case 10:
        return pd(t.type._context),
        Ze(t),
        null;
    case 17:
        return gt(t.type) && oo(),
        Ze(t),
        null;
    case 19:
        if (Te(Ee),
        a = t.memoizedState,
        a === null)
            return Ze(t),
            null;
        if (i = (t.flags & 128) !== 0,
        o = a.rendering,
        o === null)
            if (i)
                lr(a, !1);
            else {
                if (je !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (o = po(e),
                        o !== null) {
                            for (t.flags |= 128,
                            lr(a, !1),
                            i = o.updateQueue,
                            i !== null && (t.updateQueue = i,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            i = n,
                            n = t.child; n !== null; )
                                a = n,
                                e = i,
                                a.flags &= 14680066,
                                o = a.alternate,
                                o === null ? (a.childLanes = 0,
                                a.lanes = e,
                                a.child = null,
                                a.subtreeFlags = 0,
                                a.memoizedProps = null,
                                a.memoizedState = null,
                                a.updateQueue = null,
                                a.dependencies = null,
                                a.stateNode = null) : (a.childLanes = o.childLanes,
                                a.lanes = o.lanes,
                                a.child = o.child,
                                a.subtreeFlags = 0,
                                a.deletions = null,
                                a.memoizedProps = o.memoizedProps,
                                a.memoizedState = o.memoizedState,
                                a.updateQueue = o.updateQueue,
                                a.type = o.type,
                                e = o.dependencies,
                                a.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return me(Ee, Ee.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                a.tail !== null && Re() > Vi && (t.flags |= 128,
                i = !0,
                lr(a, !1),
                t.lanes = 4194304)
            }
        else {
            if (!i)
                if (e = po(o),
                e !== null) {
                    if (t.flags |= 128,
                    i = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    lr(a, !0),
                    a.tail === null && a.tailMode === "hidden" && !o.alternate && !ve)
                        return Ze(t),
                        null
                } else
                    2 * Re() - a.renderingStartTime > Vi && n !== 1073741824 && (t.flags |= 128,
                    i = !0,
                    lr(a, !1),
                    t.lanes = 4194304);
            a.isBackwards ? (o.sibling = t.child,
            t.child = o) : (n = a.last,
            n !== null ? n.sibling = o : t.child = o,
            a.last = o)
        }
        return a.tail !== null ? (t = a.tail,
        a.rendering = t,
        a.tail = t.sibling,
        a.renderingStartTime = Re(),
        t.sibling = null,
        n = Ee.current,
        me(Ee, i ? n & 1 | 2 : n & 1),
        t) : (Ze(t),
        null);
    case 22:
    case 23:
        return Rd(),
        i = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== i && (t.flags |= 8192),
        i && t.mode & 1 ? xt & 1073741824 && (Ze(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : Ze(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(M(156, t.tag))
}
function X1(e, t) {
    switch (fd(t),
    t.tag) {
    case 1:
        return gt(t.type) && oo(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return Wi(),
        Te(pt),
        Te(Je),
        Td(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return xd(t),
        null;
    case 13:
        if (Te(Ee),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(M(340));
            Fi()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return Te(Ee),
        null;
    case 4:
        return Wi(),
        null;
    case 10:
        return pd(t.type._context),
        null;
    case 22:
    case 23:
        return Rd(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Ia = !1
  , Ye = !1
  , $1 = typeof WeakSet == "function" ? WeakSet : Set
  , z = null;
function Ci(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (i) {
                Ie(e, t, i)
            }
        else
            n.current = null
}
function ws(e, t, n) {
    try {
        n()
    } catch (i) {
        Ie(e, t, i)
    }
}
var Qf = !1;
function Z1(e, t) {
    if (ls = no,
    e = Yu(),
    sd(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var i = n.getSelection && n.getSelection();
                if (i && i.rangeCount !== 0) {
                    n = i.anchorNode;
                    var r = i.anchorOffset
                      , a = i.focusNode;
                    i = i.focusOffset;
                    try {
                        n.nodeType,
                        a.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var o = 0
                      , l = -1
                      , s = -1
                      , c = 0
                      , f = 0
                      , u = e
                      , y = null;
                    t: for (; ; ) {
                        for (var T; u !== n || r !== 0 && u.nodeType !== 3 || (l = o + r),
                        u !== a || i !== 0 && u.nodeType !== 3 || (s = o + i),
                        u.nodeType === 3 && (o += u.nodeValue.length),
                        (T = u.firstChild) !== null; )
                            y = u,
                            u = T;
                        for (; ; ) {
                            if (u === e)
                                break t;
                            if (y === n && ++c === r && (l = o),
                            y === a && ++f === i && (s = o),
                            (T = u.nextSibling) !== null)
                                break;
                            u = y,
                            y = u.parentNode
                        }
                        u = T
                    }
                    n = l === -1 || s === -1 ? null : {
                        start: l,
                        end: s
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (ss = {
        focusedElem: e,
        selectionRange: n
    },
    no = !1,
    z = t; z !== null; )
        if (t = z,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            z = e;
        else
            for (; z !== null; ) {
                t = z;
                try {
                    var v = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (v !== null) {
                                var E = v.memoizedProps
                                  , A = v.memoizedState
                                  , h = t.stateNode
                                  , p = h.getSnapshotBeforeUpdate(t.elementType === t.type ? E : Pt(t.type, E), A);
                                h.__reactInternalSnapshotBeforeUpdate = p
                            }
                            break;
                        case 3:
                            var m = t.stateNode.containerInfo;
                            m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(M(163))
                        }
                } catch (O) {
                    Ie(t, t.return, O)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    z = e;
                    break
                }
                z = t.return
            }
    return v = Qf,
    Qf = !1,
    v
}
function Ar(e, t, n) {
    var i = t.updateQueue;
    if (i = i !== null ? i.lastEffect : null,
    i !== null) {
        var r = i = i.next;
        do {
            if ((r.tag & e) === e) {
                var a = r.destroy;
                r.destroy = void 0,
                a !== void 0 && ws(t, n, a)
            }
            r = r.next
        } while (r !== i)
    }
}
function Po(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var i = n.create;
                n.destroy = i()
            }
            n = n.next
        } while (n !== t)
    }
}
function As(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function X0(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    X0(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[Zt],
    delete t[Fr],
    delete t[cs],
    delete t[R1],
    delete t[M1])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function $0(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Jf(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || $0(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function ks(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = ao));
    else if (i !== 4 && (e = e.child,
    e !== null))
        for (ks(e, t, n),
        e = e.sibling; e !== null; )
            ks(e, t, n),
            e = e.sibling
}
function Is(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (i !== 4 && (e = e.child,
    e !== null))
        for (Is(e, t, n),
        e = e.sibling; e !== null; )
            Is(e, t, n),
            e = e.sibling
}
var We = null
  , jt = !1;
function yn(e, t, n) {
    for (n = n.child; n !== null; )
        Z0(e, t, n),
        n = n.sibling
}
function Z0(e, t, n) {
    if (Yt && typeof Yt.onCommitFiberUnmount == "function")
        try {
            Yt.onCommitFiberUnmount(Co, n)
        } catch {}
    switch (n.tag) {
    case 5:
        Ye || Ci(n, t);
    case 6:
        var i = We
          , r = jt;
        We = null,
        yn(e, t, n),
        We = i,
        jt = r,
        We !== null && (jt ? (e = We,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : We.removeChild(n.stateNode));
        break;
    case 18:
        We !== null && (jt ? (e = We,
        n = n.stateNode,
        e.nodeType === 8 ? vl(e.parentNode, n) : e.nodeType === 1 && vl(e, n),
        Pr(e)) : vl(We, n.stateNode));
        break;
    case 4:
        i = We,
        r = jt,
        We = n.stateNode.containerInfo,
        jt = !0,
        yn(e, t, n),
        We = i,
        jt = r;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!Ye && (i = n.updateQueue,
        i !== null && (i = i.lastEffect,
        i !== null))) {
            r = i = i.next;
            do {
                var a = r
                  , o = a.destroy;
                a = a.tag,
                o !== void 0 && (a & 2 || a & 4) && ws(n, t, o),
                r = r.next
            } while (r !== i)
        }
        yn(e, t, n);
        break;
    case 1:
        if (!Ye && (Ci(n, t),
        i = n.stateNode,
        typeof i.componentWillUnmount == "function"))
            try {
                i.props = n.memoizedProps,
                i.state = n.memoizedState,
                i.componentWillUnmount()
            } catch (l) {
                Ie(n, t, l)
            }
        yn(e, t, n);
        break;
    case 21:
        yn(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (Ye = (i = Ye) || n.memoizedState !== null,
        yn(e, t, n),
        Ye = i) : yn(e, t, n);
        break;
    default:
        yn(e, t, n)
    }
}
function qf(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new $1),
        t.forEach(function(i) {
            var r = i2.bind(null, e, i);
            n.has(i) || (n.add(i),
            i.then(r, r))
        })
    }
}
function Ut(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var i = 0; i < n.length; i++) {
            var r = n[i];
            try {
                var a = e
                  , o = t
                  , l = o;
                e: for (; l !== null; ) {
                    switch (l.tag) {
                    case 5:
                        We = l.stateNode,
                        jt = !1;
                        break e;
                    case 3:
                        We = l.stateNode.containerInfo,
                        jt = !0;
                        break e;
                    case 4:
                        We = l.stateNode.containerInfo,
                        jt = !0;
                        break e
                    }
                    l = l.return
                }
                if (We === null)
                    throw Error(M(160));
                Z0(a, o, r),
                We = null,
                jt = !1;
                var s = r.alternate;
                s !== null && (s.return = null),
                r.return = null
            } catch (c) {
                Ie(r, t, c)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            Y0(t, e),
            t = t.sibling
}
function Y0(e, t) {
    var n = e.alternate
      , i = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (Ut(t, e),
        Vt(e),
        i & 4) {
            try {
                Ar(3, e, e.return),
                Po(3, e)
            } catch (E) {
                Ie(e, e.return, E)
            }
            try {
                Ar(5, e, e.return)
            } catch (E) {
                Ie(e, e.return, E)
            }
        }
        break;
    case 1:
        Ut(t, e),
        Vt(e),
        i & 512 && n !== null && Ci(n, n.return);
        break;
    case 5:
        if (Ut(t, e),
        Vt(e),
        i & 512 && n !== null && Ci(n, n.return),
        e.flags & 32) {
            var r = e.stateNode;
            try {
                _r(r, "")
            } catch (E) {
                Ie(e, e.return, E)
            }
        }
        if (i & 4 && (r = e.stateNode,
        r != null)) {
            var a = e.memoizedProps
              , o = n !== null ? n.memoizedProps : a
              , l = e.type
              , s = e.updateQueue;
            if (e.updateQueue = null,
            s !== null)
                try {
                    l === "input" && a.type === "radio" && a.name != null && mu(r, a),
                    Ql(l, o);
                    var c = Ql(l, a);
                    for (o = 0; o < s.length; o += 2) {
                        var f = s[o]
                          , u = s[o + 1];
                        f === "style" ? bu(r, u) : f === "dangerouslySetInnerHTML" ? Tu(r, u) : f === "children" ? _r(r, u) : Ys(r, f, u, c)
                    }
                    switch (l) {
                    case "input":
                        Xl(r, a);
                        break;
                    case "textarea":
                        yu(r, a);
                        break;
                    case "select":
                        var y = r._wrapperState.wasMultiple;
                        r._wrapperState.wasMultiple = !!a.multiple;
                        var T = a.value;
                        T != null ? _i(r, !!a.multiple, T, !1) : y !== !!a.multiple && (a.defaultValue != null ? _i(r, !!a.multiple, a.defaultValue, !0) : _i(r, !!a.multiple, a.multiple ? [] : "", !1))
                    }
                    r[Fr] = a
                } catch (E) {
                    Ie(e, e.return, E)
                }
        }
        break;
    case 6:
        if (Ut(t, e),
        Vt(e),
        i & 4) {
            if (e.stateNode === null)
                throw Error(M(162));
            r = e.stateNode,
            a = e.memoizedProps;
            try {
                r.nodeValue = a
            } catch (E) {
                Ie(e, e.return, E)
            }
        }
        break;
    case 3:
        if (Ut(t, e),
        Vt(e),
        i & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                Pr(t.containerInfo)
            } catch (E) {
                Ie(e, e.return, E)
            }
        break;
    case 4:
        Ut(t, e),
        Vt(e);
        break;
    case 13:
        Ut(t, e),
        Vt(e),
        r = e.child,
        r.flags & 8192 && (a = r.memoizedState !== null,
        r.stateNode.isHidden = a,
        !a || r.alternate !== null && r.alternate.memoizedState !== null || (Cd = Re())),
        i & 4 && qf(e);
        break;
    case 22:
        if (f = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (Ye = (c = Ye) || f,
        Ut(t, e),
        Ye = c) : Ut(t, e),
        Vt(e),
        i & 8192) {
            if (c = e.memoizedState !== null,
            (e.stateNode.isHidden = c) && !f && e.mode & 1)
                for (z = e,
                f = e.child; f !== null; ) {
                    for (u = z = f; z !== null; ) {
                        switch (y = z,
                        T = y.child,
                        y.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Ar(4, y, y.return);
                            break;
                        case 1:
                            Ci(y, y.return);
                            var v = y.stateNode;
                            if (typeof v.componentWillUnmount == "function") {
                                i = y,
                                n = y.return;
                                try {
                                    t = i,
                                    v.props = t.memoizedProps,
                                    v.state = t.memoizedState,
                                    v.componentWillUnmount()
                                } catch (E) {
                                    Ie(i, n, E)
                                }
                            }
                            break;
                        case 5:
                            Ci(y, y.return);
                            break;
                        case 22:
                            if (y.memoizedState !== null) {
                                tc(u);
                                continue
                            }
                        }
                        T !== null ? (T.return = y,
                        z = T) : tc(u)
                    }
                    f = f.sibling
                }
            e: for (f = null,
            u = e; ; ) {
                if (u.tag === 5) {
                    if (f === null) {
                        f = u;
                        try {
                            r = u.stateNode,
                            c ? (a = r.style,
                            typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (l = u.stateNode,
                            s = u.memoizedProps.style,
                            o = s != null && s.hasOwnProperty("display") ? s.display : null,
                            l.style.display = vu("display", o))
                        } catch (E) {
                            Ie(e, e.return, E)
                        }
                    }
                } else if (u.tag === 6) {
                    if (f === null)
                        try {
                            u.stateNode.nodeValue = c ? "" : u.memoizedProps
                        } catch (E) {
                            Ie(e, e.return, E)
                        }
                } else if ((u.tag !== 22 && u.tag !== 23 || u.memoizedState === null || u === e) && u.child !== null) {
                    u.child.return = u,
                    u = u.child;
                    continue
                }
                if (u === e)
                    break e;
                for (; u.sibling === null; ) {
                    if (u.return === null || u.return === e)
                        break e;
                    f === u && (f = null),
                    u = u.return
                }
                f === u && (f = null),
                u.sibling.return = u.return,
                u = u.sibling
            }
        }
        break;
    case 19:
        Ut(t, e),
        Vt(e),
        i & 4 && qf(e);
        break;
    case 21:
        break;
    default:
        Ut(t, e),
        Vt(e)
    }
}
function Vt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if ($0(n)) {
                        var i = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(M(160))
            }
            switch (i.tag) {
            case 5:
                var r = i.stateNode;
                i.flags & 32 && (_r(r, ""),
                i.flags &= -33);
                var a = Jf(e);
                Is(e, a, r);
                break;
            case 3:
            case 4:
                var o = i.stateNode.containerInfo
                  , l = Jf(e);
                ks(e, l, o);
                break;
            default:
                throw Error(M(161))
            }
        } catch (s) {
            Ie(e, e.return, s)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function Y1(e, t, n) {
    z = e,
    K0(e)
}
function K0(e, t, n) {
    for (var i = (e.mode & 1) !== 0; z !== null; ) {
        var r = z
          , a = r.child;
        if (r.tag === 22 && i) {
            var o = r.memoizedState !== null || Ia;
            if (!o) {
                var l = r.alternate
                  , s = l !== null && l.memoizedState !== null || Ye;
                l = Ia;
                var c = Ye;
                if (Ia = o,
                (Ye = s) && !c)
                    for (z = r; z !== null; )
                        o = z,
                        s = o.child,
                        o.tag === 22 && o.memoizedState !== null ? nc(r) : s !== null ? (s.return = o,
                        z = s) : nc(r);
                for (; a !== null; )
                    z = a,
                    K0(a),
                    a = a.sibling;
                z = r,
                Ia = l,
                Ye = c
            }
            ec(e)
        } else
            r.subtreeFlags & 8772 && a !== null ? (a.return = r,
            z = a) : ec(e)
    }
}
function ec(e) {
    for (; z !== null; ) {
        var t = z;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Ye || Po(5, t);
                        break;
                    case 1:
                        var i = t.stateNode;
                        if (t.flags & 4 && !Ye)
                            if (n === null)
                                i.componentDidMount();
                            else {
                                var r = t.elementType === t.type ? n.memoizedProps : Pt(t.type, n.memoizedProps);
                                i.componentDidUpdate(r, n.memoizedState, i.__reactInternalSnapshotBeforeUpdate)
                            }
                        var a = t.updateQueue;
                        a !== null && jf(t, a, i);
                        break;
                    case 3:
                        var o = t.updateQueue;
                        if (o !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            jf(t, o, n)
                        }
                        break;
                    case 5:
                        var l = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = l;
                            var s = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                s.autoFocus && n.focus();
                                break;
                            case "img":
                                s.src && (n.src = s.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var c = t.alternate;
                            if (c !== null) {
                                var f = c.memoizedState;
                                if (f !== null) {
                                    var u = f.dehydrated;
                                    u !== null && Pr(u)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(M(163))
                    }
                Ye || t.flags & 512 && As(t)
            } catch (y) {
                Ie(t, t.return, y)
            }
        }
        if (t === e) {
            z = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            z = n;
            break
        }
        z = t.return
    }
}
function tc(e) {
    for (; z !== null; ) {
        var t = z;
        if (t === e) {
            z = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            z = n;
            break
        }
        z = t.return
    }
}
function nc(e) {
    for (; z !== null; ) {
        var t = z;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    Po(4, t)
                } catch (s) {
                    Ie(t, n, s)
                }
                break;
            case 1:
                var i = t.stateNode;
                if (typeof i.componentDidMount == "function") {
                    var r = t.return;
                    try {
                        i.componentDidMount()
                    } catch (s) {
                        Ie(t, r, s)
                    }
                }
                var a = t.return;
                try {
                    As(t)
                } catch (s) {
                    Ie(t, a, s)
                }
                break;
            case 5:
                var o = t.return;
                try {
                    As(t)
                } catch (s) {
                    Ie(t, o, s)
                }
            }
        } catch (s) {
            Ie(t, t.return, s)
        }
        if (t === e) {
            z = null;
            break
        }
        var l = t.sibling;
        if (l !== null) {
            l.return = t.return,
            z = l;
            break
        }
        z = t.return
    }
}
var K1 = Math.ceil
  , yo = un.ReactCurrentDispatcher
  , kd = un.ReactCurrentOwner
  , Rt = un.ReactCurrentBatchConfig
  , le = 0
  , De = null
  , Ne = null
  , Ge = 0
  , xt = 0
  , Si = Bn(0)
  , je = 0
  , $r = null
  , ri = 0
  , jo = 0
  , Id = 0
  , kr = null
  , ut = null
  , Cd = 0
  , Vi = 1 / 0
  , nn = null
  , xo = !1
  , Cs = null
  , Rn = null
  , Ca = !1
  , wn = null
  , To = 0
  , Ir = 0
  , Ss = null
  , Xa = -1
  , $a = 0;
function ot() {
    return le & 6 ? Re() : Xa !== -1 ? Xa : Xa = Re()
}
function Mn(e) {
    return e.mode & 1 ? le & 2 && Ge !== 0 ? Ge & -Ge : N1.transition !== null ? ($a === 0 && ($a = Nu()),
    $a) : (e = fe,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : Du(e.type)),
    e) : 1
}
function Ft(e, t, n, i) {
    if (50 < Ir)
        throw Ir = 0,
        Ss = null,
        Error(M(185));
    Jr(e, n, i),
    (!(le & 2) || e !== De) && (e === De && (!(le & 2) && (jo |= n),
    je === 4 && En(e, Ge)),
    mt(e, i),
    n === 1 && le === 0 && !(t.mode & 1) && (Vi = Re() + 500,
    No && zn()))
}
function mt(e, t) {
    var n = e.callbackNode;
    N4(e, t);
    var i = to(e, e === De ? Ge : 0);
    if (i === 0)
        n !== null && cf(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = i & -i,
    e.callbackPriority !== t) {
        if (n != null && cf(n),
        t === 1)
            e.tag === 0 ? _1(ic.bind(null, e)) : a0(ic.bind(null, e)),
            C1(function() {
                !(le & 6) && zn()
            }),
            n = null;
        else {
            switch (Uu(i)) {
            case 1:
                n = ed;
                break;
            case 4:
                n = Mu;
                break;
            case 16:
                n = eo;
                break;
            case 536870912:
                n = _u;
                break;
            default:
                n = eo
            }
            n = rh(n, Q0.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function Q0(e, t) {
    if (Xa = -1,
    $a = 0,
    le & 6)
        throw Error(M(327));
    var n = e.callbackNode;
    if (ji() && e.callbackNode !== n)
        return null;
    var i = to(e, e === De ? Ge : 0);
    if (i === 0)
        return null;
    if (i & 30 || i & e.expiredLanes || t)
        t = vo(e, i);
    else {
        t = i;
        var r = le;
        le |= 2;
        var a = q0();
        (De !== e || Ge !== t) && (nn = null,
        Vi = Re() + 500,
        Jn(e, t));
        do
            try {
                q1();
                break
            } catch (l) {
                J0(e, l)
            }
        while (1);
        hd(),
        yo.current = a,
        le = r,
        Ne !== null ? t = 0 : (De = null,
        Ge = 0,
        t = je)
    }
    if (t !== 0) {
        if (t === 2 && (r = ns(e),
        r !== 0 && (i = r,
        t = Rs(e, r))),
        t === 1)
            throw n = $r,
            Jn(e, 0),
            En(e, i),
            mt(e, Re()),
            n;
        if (t === 6)
            En(e, i);
        else {
            if (r = e.current.alternate,
            !(i & 30) && !Q1(r) && (t = vo(e, i),
            t === 2 && (a = ns(e),
            a !== 0 && (i = a,
            t = Rs(e, a))),
            t === 1))
                throw n = $r,
                Jn(e, 0),
                En(e, i),
                mt(e, Re()),
                n;
            switch (e.finishedWork = r,
            e.finishedLanes = i,
            t) {
            case 0:
            case 1:
                throw Error(M(345));
            case 2:
                Gn(e, ut, nn);
                break;
            case 3:
                if (En(e, i),
                (i & 130023424) === i && (t = Cd + 500 - Re(),
                10 < t)) {
                    if (to(e, 0) !== 0)
                        break;
                    if (r = e.suspendedLanes,
                    (r & i) !== i) {
                        ot(),
                        e.pingedLanes |= e.suspendedLanes & r;
                        break
                    }
                    e.timeoutHandle = fs(Gn.bind(null, e, ut, nn), t);
                    break
                }
                Gn(e, ut, nn);
                break;
            case 4:
                if (En(e, i),
                (i & 4194240) === i)
                    break;
                for (t = e.eventTimes,
                r = -1; 0 < i; ) {
                    var o = 31 - Dt(i);
                    a = 1 << o,
                    o = t[o],
                    o > r && (r = o),
                    i &= ~a
                }
                if (i = r,
                i = Re() - i,
                i = (120 > i ? 120 : 480 > i ? 480 : 1080 > i ? 1080 : 1920 > i ? 1920 : 3e3 > i ? 3e3 : 4320 > i ? 4320 : 1960 * K1(i / 1960)) - i,
                10 < i) {
                    e.timeoutHandle = fs(Gn.bind(null, e, ut, nn), i);
                    break
                }
                Gn(e, ut, nn);
                break;
            case 5:
                Gn(e, ut, nn);
                break;
            default:
                throw Error(M(329))
            }
        }
    }
    return mt(e, Re()),
    e.callbackNode === n ? Q0.bind(null, e) : null
}
function Rs(e, t) {
    var n = kr;
    return e.current.memoizedState.isDehydrated && (Jn(e, t).flags |= 256),
    e = vo(e, t),
    e !== 2 && (t = ut,
    ut = n,
    t !== null && Ms(t)),
    e
}
function Ms(e) {
    ut === null ? ut = e : ut.push.apply(ut, e)
}
function Q1(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var i = 0; i < n.length; i++) {
                    var r = n[i]
                      , a = r.getSnapshot;
                    r = r.value;
                    try {
                        if (!Ht(a(), r))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function En(e, t) {
    for (t &= ~Id,
    t &= ~jo,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Dt(t)
          , i = 1 << n;
        e[n] = -1,
        t &= ~i
    }
}
function ic(e) {
    if (le & 6)
        throw Error(M(327));
    ji();
    var t = to(e, 0);
    if (!(t & 1))
        return mt(e, Re()),
        null;
    var n = vo(e, t);
    if (e.tag !== 0 && n === 2) {
        var i = ns(e);
        i !== 0 && (t = i,
        n = Rs(e, i))
    }
    if (n === 1)
        throw n = $r,
        Jn(e, 0),
        En(e, t),
        mt(e, Re()),
        n;
    if (n === 6)
        throw Error(M(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    Gn(e, ut, nn),
    mt(e, Re()),
    null
}
function Sd(e, t) {
    var n = le;
    le |= 1;
    try {
        return e(t)
    } finally {
        le = n,
        le === 0 && (Vi = Re() + 500,
        No && zn())
    }
}
function ai(e) {
    wn !== null && wn.tag === 0 && !(le & 6) && ji();
    var t = le;
    le |= 1;
    var n = Rt.transition
      , i = fe;
    try {
        if (Rt.transition = null,
        fe = 1,
        e)
            return e()
    } finally {
        fe = i,
        Rt.transition = n,
        le = t,
        !(le & 6) && zn()
    }
}
function Rd() {
    xt = Si.current,
    Te(Si)
}
function Jn(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    I1(n)),
    Ne !== null)
        for (n = Ne.return; n !== null; ) {
            var i = n;
            switch (fd(i),
            i.tag) {
            case 1:
                i = i.type.childContextTypes,
                i != null && oo();
                break;
            case 3:
                Wi(),
                Te(pt),
                Te(Je),
                Td();
                break;
            case 5:
                xd(i);
                break;
            case 4:
                Wi();
                break;
            case 13:
                Te(Ee);
                break;
            case 19:
                Te(Ee);
                break;
            case 10:
                pd(i.type._context);
                break;
            case 22:
            case 23:
                Rd()
            }
            n = n.return
        }
    if (De = e,
    Ne = e = _n(e.current, null),
    Ge = xt = t,
    je = 0,
    $r = null,
    Id = jo = ri = 0,
    ut = kr = null,
    $n !== null) {
        for (t = 0; t < $n.length; t++)
            if (n = $n[t],
            i = n.interleaved,
            i !== null) {
                n.interleaved = null;
                var r = i.next
                  , a = n.pending;
                if (a !== null) {
                    var o = a.next;
                    a.next = r,
                    i.next = o
                }
                n.pending = i
            }
        $n = null
    }
    return e
}
function J0(e, t) {
    do {
        var n = Ne;
        try {
            if (hd(),
            Wa.current = mo,
            go) {
                for (var i = Oe.memoizedState; i !== null; ) {
                    var r = i.queue;
                    r !== null && (r.pending = null),
                    i = i.next
                }
                go = !1
            }
            if (ii = 0,
            ze = Pe = Oe = null,
            wr = !1,
            Gr = 0,
            kd.current = null,
            n === null || n.return === null) {
                je = 1,
                $r = t,
                Ne = null;
                break
            }
            e: {
                var a = e
                  , o = n.return
                  , l = n
                  , s = t;
                if (t = Ge,
                l.flags |= 32768,
                s !== null && typeof s == "object" && typeof s.then == "function") {
                    var c = s
                      , f = l
                      , u = f.tag;
                    if (!(f.mode & 1) && (u === 0 || u === 11 || u === 15)) {
                        var y = f.alternate;
                        y ? (f.updateQueue = y.updateQueue,
                        f.memoizedState = y.memoizedState,
                        f.lanes = y.lanes) : (f.updateQueue = null,
                        f.memoizedState = null)
                    }
                    var T = Gf(o);
                    if (T !== null) {
                        T.flags &= -257,
                        Vf(T, o, l, a, t),
                        T.mode & 1 && Wf(a, c, t),
                        t = T,
                        s = c;
                        var v = t.updateQueue;
                        if (v === null) {
                            var E = new Set;
                            E.add(s),
                            t.updateQueue = E
                        } else
                            v.add(s);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Wf(a, c, t),
                            Md();
                            break e
                        }
                        s = Error(M(426))
                    }
                } else if (ve && l.mode & 1) {
                    var A = Gf(o);
                    if (A !== null) {
                        !(A.flags & 65536) && (A.flags |= 256),
                        Vf(A, o, l, a, t),
                        cd(Gi(s, l));
                        break e
                    }
                }
                a = s = Gi(s, l),
                je !== 4 && (je = 2),
                kr === null ? kr = [a] : kr.push(a),
                a = o;
                do {
                    switch (a.tag) {
                    case 3:
                        a.flags |= 65536,
                        t &= -t,
                        a.lanes |= t;
                        var h = L0(a, s, t);
                        Pf(a, h);
                        break e;
                    case 1:
                        l = s;
                        var p = a.type
                          , m = a.stateNode;
                        if (!(a.flags & 128) && (typeof p.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (Rn === null || !Rn.has(m)))) {
                            a.flags |= 65536,
                            t &= -t,
                            a.lanes |= t;
                            var O = P0(a, l, t);
                            Pf(a, O);
                            break e
                        }
                    }
                    a = a.return
                } while (a !== null)
            }
            th(n)
        } catch (C) {
            t = C,
            Ne === n && n !== null && (Ne = n = n.return);
            continue
        }
        break
    } while (1)
}
function q0() {
    var e = yo.current;
    return yo.current = mo,
    e === null ? mo : e
}
function Md() {
    (je === 0 || je === 3 || je === 2) && (je = 4),
    De === null || !(ri & 268435455) && !(jo & 268435455) || En(De, Ge)
}
function vo(e, t) {
    var n = le;
    le |= 2;
    var i = q0();
    (De !== e || Ge !== t) && (nn = null,
    Jn(e, t));
    do
        try {
            J1();
            break
        } catch (r) {
            J0(e, r)
        }
    while (1);
    if (hd(),
    le = n,
    yo.current = i,
    Ne !== null)
        throw Error(M(261));
    return De = null,
    Ge = 0,
    je
}
function J1() {
    for (; Ne !== null; )
        eh(Ne)
}
function q1() {
    for (; Ne !== null && !w4(); )
        eh(Ne)
}
function eh(e) {
    var t = ih(e.alternate, e, xt);
    e.memoizedProps = e.pendingProps,
    t === null ? th(e) : Ne = t,
    kd.current = null
}
function th(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = X1(n, t),
            n !== null) {
                n.flags &= 32767,
                Ne = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                je = 6,
                Ne = null;
                return
            }
        } else if (n = V1(n, t, xt),
        n !== null) {
            Ne = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            Ne = t;
            return
        }
        Ne = t = e
    } while (t !== null);
    je === 0 && (je = 5)
}
function Gn(e, t, n) {
    var i = fe
      , r = Rt.transition;
    try {
        Rt.transition = null,
        fe = 1,
        e2(e, t, n, i)
    } finally {
        Rt.transition = r,
        fe = i
    }
    return null
}
function e2(e, t, n, i) {
    do
        ji();
    while (wn !== null);
    if (le & 6)
        throw Error(M(327));
    n = e.finishedWork;
    var r = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(M(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var a = n.lanes | n.childLanes;
    if (U4(e, a),
    e === De && (Ne = De = null,
    Ge = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ca || (Ca = !0,
    rh(eo, function() {
        return ji(),
        null
    })),
    a = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || a) {
        a = Rt.transition,
        Rt.transition = null;
        var o = fe;
        fe = 1;
        var l = le;
        le |= 4,
        kd.current = null,
        Z1(e, n),
        Y0(n, e),
        v1(ss),
        no = !!ls,
        ss = ls = null,
        e.current = n,
        Y1(n),
        A4(),
        le = l,
        fe = o,
        Rt.transition = a
    } else
        e.current = n;
    if (Ca && (Ca = !1,
    wn = e,
    To = r),
    a = e.pendingLanes,
    a === 0 && (Rn = null),
    C4(n.stateNode),
    mt(e, Re()),
    t !== null)
        for (i = e.onRecoverableError,
        n = 0; n < t.length; n++)
            r = t[n],
            i(r.value, {
                componentStack: r.stack,
                digest: r.digest
            });
    if (xo)
        throw xo = !1,
        e = Cs,
        Cs = null,
        e;
    return To & 1 && e.tag !== 0 && ji(),
    a = e.pendingLanes,
    a & 1 ? e === Ss ? Ir++ : (Ir = 0,
    Ss = e) : Ir = 0,
    zn(),
    null
}
function ji() {
    if (wn !== null) {
        var e = Uu(To)
          , t = Rt.transition
          , n = fe;
        try {
            if (Rt.transition = null,
            fe = 16 > e ? 16 : e,
            wn === null)
                var i = !1;
            else {
                if (e = wn,
                wn = null,
                To = 0,
                le & 6)
                    throw Error(M(331));
                var r = le;
                for (le |= 4,
                z = e.current; z !== null; ) {
                    var a = z
                      , o = a.child;
                    if (z.flags & 16) {
                        var l = a.deletions;
                        if (l !== null) {
                            for (var s = 0; s < l.length; s++) {
                                var c = l[s];
                                for (z = c; z !== null; ) {
                                    var f = z;
                                    switch (f.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Ar(8, f, a)
                                    }
                                    var u = f.child;
                                    if (u !== null)
                                        u.return = f,
                                        z = u;
                                    else
                                        for (; z !== null; ) {
                                            f = z;
                                            var y = f.sibling
                                              , T = f.return;
                                            if (X0(f),
                                            f === c) {
                                                z = null;
                                                break
                                            }
                                            if (y !== null) {
                                                y.return = T,
                                                z = y;
                                                break
                                            }
                                            z = T
                                        }
                                }
                            }
                            var v = a.alternate;
                            if (v !== null) {
                                var E = v.child;
                                if (E !== null) {
                                    v.child = null;
                                    do {
                                        var A = E.sibling;
                                        E.sibling = null,
                                        E = A
                                    } while (E !== null)
                                }
                            }
                            z = a
                        }
                    }
                    if (a.subtreeFlags & 2064 && o !== null)
                        o.return = a,
                        z = o;
                    else
                        e: for (; z !== null; ) {
                            if (a = z,
                            a.flags & 2048)
                                switch (a.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Ar(9, a, a.return)
                                }
                            var h = a.sibling;
                            if (h !== null) {
                                h.return = a.return,
                                z = h;
                                break e
                            }
                            z = a.return
                        }
                }
                var p = e.current;
                for (z = p; z !== null; ) {
                    o = z;
                    var m = o.child;
                    if (o.subtreeFlags & 2064 && m !== null)
                        m.return = o,
                        z = m;
                    else
                        e: for (o = p; z !== null; ) {
                            if (l = z,
                            l.flags & 2048)
                                try {
                                    switch (l.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Po(9, l)
                                    }
                                } catch (C) {
                                    Ie(l, l.return, C)
                                }
                            if (l === o) {
                                z = null;
                                break e
                            }
                            var O = l.sibling;
                            if (O !== null) {
                                O.return = l.return,
                                z = O;
                                break e
                            }
                            z = l.return
                        }
                }
                if (le = r,
                zn(),
                Yt && typeof Yt.onPostCommitFiberRoot == "function")
                    try {
                        Yt.onPostCommitFiberRoot(Co, e)
                    } catch {}
                i = !0
            }
            return i
        } finally {
            fe = n,
            Rt.transition = t
        }
    }
    return !1
}
function rc(e, t, n) {
    t = Gi(n, t),
    t = L0(e, t, 1),
    e = Sn(e, t, 1),
    t = ot(),
    e !== null && (Jr(e, 1, t),
    mt(e, t))
}
function Ie(e, t, n) {
    if (e.tag === 3)
        rc(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                rc(t, e, n);
                break
            } else if (t.tag === 1) {
                var i = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (Rn === null || !Rn.has(i))) {
                    e = Gi(n, e),
                    e = P0(t, e, 1),
                    t = Sn(t, e, 1),
                    e = ot(),
                    t !== null && (Jr(t, 1, e),
                    mt(t, e));
                    break
                }
            }
            t = t.return
        }
}
function t2(e, t, n) {
    var i = e.pingCache;
    i !== null && i.delete(t),
    t = ot(),
    e.pingedLanes |= e.suspendedLanes & n,
    De === e && (Ge & n) === n && (je === 4 || je === 3 && (Ge & 130023424) === Ge && 500 > Re() - Cd ? Jn(e, 0) : Id |= n),
    mt(e, t)
}
function nh(e, t) {
    t === 0 && (e.mode & 1 ? (t = xa,
    xa <<= 1,
    !(xa & 130023424) && (xa = 4194304)) : t = 1);
    var n = ot();
    e = fn(e, t),
    e !== null && (Jr(e, t, n),
    mt(e, n))
}
function n2(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    nh(e, n)
}
function i2(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var i = e.stateNode
          , r = e.memoizedState;
        r !== null && (n = r.retryLane);
        break;
    case 19:
        i = e.stateNode;
        break;
    default:
        throw Error(M(314))
    }
    i !== null && i.delete(t),
    nh(e, n)
}
var ih;
ih = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || pt.current)
            ht = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return ht = !1,
                G1(e, t, n);
            ht = !!(e.flags & 131072)
        }
    else
        ht = !1,
        ve && t.flags & 1048576 && o0(t, fo, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var i = t.type;
        Va(e, t),
        e = t.pendingProps;
        var r = Di(t, Je.current);
        Pi(t, n),
        r = bd(null, t, i, e, r, n);
        var a = Ed();
        return t.flags |= 1,
        typeof r == "object" && r !== null && typeof r.render == "function" && r.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        gt(i) ? (a = !0,
        lo(t)) : a = !1,
        t.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null,
        md(t),
        r.updater = Uo,
        t.stateNode = r,
        r._reactInternals = t,
        ys(t, i, e, n),
        t = vs(null, t, i, !0, a, n)) : (t.tag = 0,
        ve && a && dd(t),
        at(null, t, r, n),
        t = t.child),
        t;
    case 16:
        i = t.elementType;
        e: {
            switch (Va(e, t),
            e = t.pendingProps,
            r = i._init,
            i = r(i._payload),
            t.type = i,
            r = t.tag = a2(i),
            e = Pt(i, e),
            r) {
            case 0:
                t = Ts(null, t, i, e, n);
                break e;
            case 1:
                t = Zf(null, t, i, e, n);
                break e;
            case 11:
                t = Xf(null, t, i, e, n);
                break e;
            case 14:
                t = $f(null, t, i, Pt(i.type, e), n);
                break e
            }
            throw Error(M(306, i, ""))
        }
        return t;
    case 0:
        return i = t.type,
        r = t.pendingProps,
        r = t.elementType === i ? r : Pt(i, r),
        Ts(e, t, i, r, n);
    case 1:
        return i = t.type,
        r = t.pendingProps,
        r = t.elementType === i ? r : Pt(i, r),
        Zf(e, t, i, r, n);
    case 3:
        e: {
            if (D0(t),
            e === null)
                throw Error(M(387));
            i = t.pendingProps,
            a = t.memoizedState,
            r = a.element,
            f0(e, t),
            ho(t, i, null, n);
            var o = t.memoizedState;
            if (i = o.element,
            a.isDehydrated)
                if (a = {
                    element: i,
                    isDehydrated: !1,
                    cache: o.cache,
                    pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                    transitions: o.transitions
                },
                t.updateQueue.baseState = a,
                t.memoizedState = a,
                t.flags & 256) {
                    r = Gi(Error(M(423)), t),
                    t = Yf(e, t, i, n, r);
                    break e
                } else if (i !== r) {
                    r = Gi(Error(M(424)), t),
                    t = Yf(e, t, i, n, r);
                    break e
                } else
                    for (Tt = Cn(t.stateNode.containerInfo.firstChild),
                    vt = t,
                    ve = !0,
                    zt = null,
                    n = p0(t, null, i, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (Fi(),
                i === r) {
                    t = cn(e, t, n);
                    break e
                }
                at(e, t, i, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return g0(t),
        e === null && ps(t),
        i = t.type,
        r = t.pendingProps,
        a = e !== null ? e.memoizedProps : null,
        o = r.children,
        ds(i, r) ? o = null : a !== null && ds(i, a) && (t.flags |= 32),
        z0(e, t),
        at(e, t, o, n),
        t.child;
    case 6:
        return e === null && ps(t),
        null;
    case 13:
        return F0(e, t, n);
    case 4:
        return yd(t, t.stateNode.containerInfo),
        i = t.pendingProps,
        e === null ? t.child = Hi(t, null, i, n) : at(e, t, i, n),
        t.child;
    case 11:
        return i = t.type,
        r = t.pendingProps,
        r = t.elementType === i ? r : Pt(i, r),
        Xf(e, t, i, r, n);
    case 7:
        return at(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return at(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return at(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (i = t.type._context,
            r = t.pendingProps,
            a = t.memoizedProps,
            o = r.value,
            me(co, i._currentValue),
            i._currentValue = o,
            a !== null)
                if (Ht(a.value, o)) {
                    if (a.children === r.children && !pt.current) {
                        t = cn(e, t, n);
                        break e
                    }
                } else
                    for (a = t.child,
                    a !== null && (a.return = t); a !== null; ) {
                        var l = a.dependencies;
                        if (l !== null) {
                            o = a.child;
                            for (var s = l.firstContext; s !== null; ) {
                                if (s.context === i) {
                                    if (a.tag === 1) {
                                        s = ln(-1, n & -n),
                                        s.tag = 2;
                                        var c = a.updateQueue;
                                        if (c !== null) {
                                            c = c.shared;
                                            var f = c.pending;
                                            f === null ? s.next = s : (s.next = f.next,
                                            f.next = s),
                                            c.pending = s
                                        }
                                    }
                                    a.lanes |= n,
                                    s = a.alternate,
                                    s !== null && (s.lanes |= n),
                                    gs(a.return, n, t),
                                    l.lanes |= n;
                                    break
                                }
                                s = s.next
                            }
                        } else if (a.tag === 10)
                            o = a.type === t.type ? null : a.child;
                        else if (a.tag === 18) {
                            if (o = a.return,
                            o === null)
                                throw Error(M(341));
                            o.lanes |= n,
                            l = o.alternate,
                            l !== null && (l.lanes |= n),
                            gs(o, n, t),
                            o = a.sibling
                        } else
                            o = a.child;
                        if (o !== null)
                            o.return = a;
                        else
                            for (o = a; o !== null; ) {
                                if (o === t) {
                                    o = null;
                                    break
                                }
                                if (a = o.sibling,
                                a !== null) {
                                    a.return = o.return,
                                    o = a;
                                    break
                                }
                                o = o.return
                            }
                        a = o
                    }
            at(e, t, r.children, n),
            t = t.child
        }
        return t;
    case 9:
        return r = t.type,
        i = t.pendingProps.children,
        Pi(t, n),
        r = Mt(r),
        i = i(r),
        t.flags |= 1,
        at(e, t, i, n),
        t.child;
    case 14:
        return i = t.type,
        r = Pt(i, t.pendingProps),
        r = Pt(i.type, r),
        $f(e, t, i, r, n);
    case 15:
        return j0(e, t, t.type, t.pendingProps, n);
    case 17:
        return i = t.type,
        r = t.pendingProps,
        r = t.elementType === i ? r : Pt(i, r),
        Va(e, t),
        t.tag = 1,
        gt(i) ? (e = !0,
        lo(t)) : e = !1,
        Pi(t, n),
        u0(t, i, r),
        ys(t, i, r, n),
        vs(null, t, i, !0, e, n);
    case 19:
        return H0(e, t, n);
    case 22:
        return B0(e, t, n)
    }
    throw Error(M(156, t.tag))
}
;
function rh(e, t) {
    return Ru(e, t)
}
function r2(e, t, n, i) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = i,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function St(e, t, n, i) {
    return new r2(e,t,n,i)
}
function _d(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function a2(e) {
    if (typeof e == "function")
        return _d(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === Qs)
            return 11;
        if (e === Js)
            return 14
    }
    return 2
}
function _n(e, t) {
    var n = e.alternate;
    return n === null ? (n = St(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function Za(e, t, n, i, r, a) {
    var o = 2;
    if (i = e,
    typeof e == "function")
        _d(e) && (o = 1);
    else if (typeof e == "string")
        o = 5;
    else
        e: switch (e) {
        case Ti:
            return qn(n.children, r, a, t);
        case Ks:
            o = 8,
            r |= 8;
            break;
        case Fl:
            return e = St(12, n, t, r | 2),
            e.elementType = Fl,
            e.lanes = a,
            e;
        case Hl:
            return e = St(13, n, t, r),
            e.elementType = Hl,
            e.lanes = a,
            e;
        case Wl:
            return e = St(19, n, t, r),
            e.elementType = Wl,
            e.lanes = a,
            e;
        case hu:
            return Bo(n, r, a, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case cu:
                    o = 10;
                    break e;
                case uu:
                    o = 9;
                    break e;
                case Qs:
                    o = 11;
                    break e;
                case Js:
                    o = 14;
                    break e;
                case Tn:
                    o = 16,
                    i = null;
                    break e
                }
            throw Error(M(130, e == null ? e : typeof e, ""))
        }
    return t = St(o, n, t, r),
    t.elementType = e,
    t.type = i,
    t.lanes = a,
    t
}
function qn(e, t, n, i) {
    return e = St(7, e, i, t),
    e.lanes = n,
    e
}
function Bo(e, t, n, i) {
    return e = St(22, e, i, t),
    e.elementType = hu,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function Cl(e, t, n) {
    return e = St(6, e, null, t),
    e.lanes = n,
    e
}
function Sl(e, t, n) {
    return t = St(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function o2(e, t, n, i, r) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = dl(0),
    this.expirationTimes = dl(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = dl(0),
    this.identifierPrefix = i,
    this.onRecoverableError = r,
    this.mutableSourceEagerHydrationData = null
}
function Nd(e, t, n, i, r, a, o, l, s) {
    return e = new o2(e,t,n,l,s),
    t === 1 ? (t = 1,
    a === !0 && (t |= 8)) : t = 0,
    a = St(3, null, null, t),
    e.current = a,
    a.stateNode = e,
    a.memoizedState = {
        element: i,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    md(a),
    e
}
function l2(e, t, n) {
    var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: xi,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function ah(e) {
    if (!e)
        return Un;
    e = e._reactInternals;
    e: {
        if (si(e) !== e || e.tag !== 1)
            throw Error(M(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (gt(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(M(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (gt(n))
            return r0(e, n, t)
    }
    return t
}
function oh(e, t, n, i, r, a, o, l, s) {
    return e = Nd(n, i, !0, e, r, a, o, l, s),
    e.context = ah(null),
    n = e.current,
    i = ot(),
    r = Mn(n),
    a = ln(i, r),
    a.callback = t ?? null,
    Sn(n, a, r),
    e.current.lanes = r,
    Jr(e, r, i),
    mt(e, i),
    e
}
function zo(e, t, n, i) {
    var r = t.current
      , a = ot()
      , o = Mn(r);
    return n = ah(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = ln(a, o),
    t.payload = {
        element: e
    },
    i = i === void 0 ? null : i,
    i !== null && (t.callback = i),
    e = Sn(r, t, o),
    e !== null && (Ft(e, r, o, a),
    Ha(e, r, o)),
    o
}
function bo(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function ac(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Ud(e, t) {
    ac(e, t),
    (e = e.alternate) && ac(e, t)
}
function s2() {
    return null
}
var lh = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Ld(e) {
    this._internalRoot = e
}
Do.prototype.render = Ld.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(M(409));
    zo(e, t, null, null)
}
;
Do.prototype.unmount = Ld.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        ai(function() {
            zo(null, e, null, null)
        }),
        t[dn] = null
    }
}
;
function Do(e) {
    this._internalRoot = e
}
Do.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = ju();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < bn.length && t !== 0 && t < bn[n].priority; n++)
            ;
        bn.splice(n, 0, e),
        n === 0 && zu(e)
    }
}
;
function Pd(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Fo(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function oc() {}
function d2(e, t, n, i, r) {
    if (r) {
        if (typeof i == "function") {
            var a = i;
            i = function() {
                var c = bo(o);
                a.call(c)
            }
        }
        var o = oh(t, i, e, 0, null, !1, !1, "", oc);
        return e._reactRootContainer = o,
        e[dn] = o.current,
        zr(e.nodeType === 8 ? e.parentNode : e),
        ai(),
        o
    }
    for (; r = e.lastChild; )
        e.removeChild(r);
    if (typeof i == "function") {
        var l = i;
        i = function() {
            var c = bo(s);
            l.call(c)
        }
    }
    var s = Nd(e, 0, !1, null, null, !1, !1, "", oc);
    return e._reactRootContainer = s,
    e[dn] = s.current,
    zr(e.nodeType === 8 ? e.parentNode : e),
    ai(function() {
        zo(t, s, n, i)
    }),
    s
}
function Ho(e, t, n, i, r) {
    var a = n._reactRootContainer;
    if (a) {
        var o = a;
        if (typeof r == "function") {
            var l = r;
            r = function() {
                var s = bo(o);
                l.call(s)
            }
        }
        zo(t, o, e, r)
    } else
        o = d2(n, t, e, r, i);
    return bo(o)
}
Lu = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = mr(t.pendingLanes);
            n !== 0 && (td(t, n | 1),
            mt(t, Re()),
            !(le & 6) && (Vi = Re() + 500,
            zn()))
        }
        break;
    case 13:
        ai(function() {
            var i = fn(e, 1);
            if (i !== null) {
                var r = ot();
                Ft(i, e, 1, r)
            }
        }),
        Ud(e, 1)
    }
}
;
nd = function(e) {
    if (e.tag === 13) {
        var t = fn(e, 134217728);
        if (t !== null) {
            var n = ot();
            Ft(t, e, 134217728, n)
        }
        Ud(e, 134217728)
    }
}
;
Pu = function(e) {
    if (e.tag === 13) {
        var t = Mn(e)
          , n = fn(e, t);
        if (n !== null) {
            var i = ot();
            Ft(n, e, t, i)
        }
        Ud(e, t)
    }
}
;
ju = function() {
    return fe
}
;
Bu = function(e, t) {
    var n = fe;
    try {
        return fe = e,
        t()
    } finally {
        fe = n
    }
}
;
ql = function(e, t, n) {
    switch (t) {
    case "input":
        if (Xl(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var i = n[t];
                if (i !== e && i.form === e.form) {
                    var r = _o(i);
                    if (!r)
                        throw Error(M(90));
                    gu(i),
                    Xl(i, r)
                }
            }
        }
        break;
    case "textarea":
        yu(e, n);
        break;
    case "select":
        t = n.value,
        t != null && _i(e, !!n.multiple, t, !1)
    }
}
;
wu = Sd;
Au = ai;
var f2 = {
    usingClientEntryPoint: !1,
    Events: [ea, Oi, _o, Eu, Ou, Sd]
}
  , sr = {
    findFiberByHostInstance: Xn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom"
}
  , c2 = {
    bundleType: sr.bundleType,
    version: sr.version,
    rendererPackageName: sr.rendererPackageName,
    rendererConfig: sr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: un.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = Cu(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: sr.findFiberByHostInstance || s2,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Sa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Sa.isDisabled && Sa.supportsFiber)
        try {
            Co = Sa.inject(c2),
            Yt = Sa
        } catch {}
}
wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = f2;
wt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Pd(t))
        throw Error(M(200));
    return l2(e, t, null, n)
}
;
wt.createRoot = function(e, t) {
    if (!Pd(e))
        throw Error(M(299));
    var n = !1
      , i = ""
      , r = lh;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (r = t.onRecoverableError)),
    t = Nd(e, 1, !1, null, null, n, !1, i, r),
    e[dn] = t.current,
    zr(e.nodeType === 8 ? e.parentNode : e),
    new Ld(t)
}
;
wt.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(M(188)) : (e = Object.keys(e).join(","),
        Error(M(268, e)));
    return e = Cu(t),
    e = e === null ? null : e.stateNode,
    e
}
;
wt.flushSync = function(e) {
    return ai(e)
}
;
wt.hydrate = function(e, t, n) {
    if (!Fo(t))
        throw Error(M(200));
    return Ho(null, e, t, !0, n)
}
;
wt.hydrateRoot = function(e, t, n) {
    if (!Pd(e))
        throw Error(M(405));
    var i = n != null && n.hydratedSources || null
      , r = !1
      , a = ""
      , o = lh;
    if (n != null && (n.unstable_strictMode === !0 && (r = !0),
    n.identifierPrefix !== void 0 && (a = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    t = oh(t, null, e, 1, n ?? null, r, !1, a, o),
    e[dn] = t.current,
    zr(e),
    i)
        for (e = 0; e < i.length; e++)
            n = i[e],
            r = n._getVersion,
            r = r(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, r] : t.mutableSourceEagerHydrationData.push(n, r);
    return new Do(t)
}
;
wt.render = function(e, t, n) {
    if (!Fo(t))
        throw Error(M(200));
    return Ho(null, e, t, !1, n)
}
;
wt.unmountComponentAtNode = function(e) {
    if (!Fo(e))
        throw Error(M(40));
    return e._reactRootContainer ? (ai(function() {
        Ho(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[dn] = null
        })
    }),
    !0) : !1
}
;
wt.unstable_batchedUpdates = Sd;
wt.unstable_renderSubtreeIntoContainer = function(e, t, n, i) {
    if (!Fo(n))
        throw Error(M(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(M(38));
    return Ho(e, t, n, !1, i)
}
;
wt.version = "18.2.0-next-9e3b772b8-20220608";
function sh() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sh)
        } catch (e) {
            console.error(e)
        }
}
sh(),
ou.exports = wt;
var jd = ou.exports;
const u2 = Zc(jd)
  , h2 = $c({
    __proto__: null,
    default: u2
}, [jd]);
var lc = jd;
zl.createRoot = lc.createRoot,
zl.hydrateRoot = lc.hydrateRoot;
var it = globalThis && globalThis.__awaiter || function(e, t, n, i) {
    function r(a) {
        return a instanceof n ? a : new n(function(o) {
            o(a)
        }
        )
    }
    return new (n || (n = Promise))(function(a, o) {
        function l(f) {
            try {
                c(i.next(f))
            } catch (u) {
                o(u)
            }
        }
        function s(f) {
            try {
                c(i.throw(f))
            } catch (u) {
                o(u)
            }
        }
        function c(f) {
            f.done ? a(f.value) : r(f.value).then(l, s)
        }
        c((i = i.apply(e, t || [])).next())
    }
    )
}
;
class p2 {
    constructor(t) {
        this.messageBus = t
    }
    get id() {
        if (!this.messageBus.userId)
            throw Error("Unable to get user ID: not ready");
        return this.messageBus.userId
    }
    getSelection() {
        return it(this, void 0, void 0, function*() {
            const {selection: t} = yield this.messageBus.sendAsync("OBR_PLAYER_GET_SELECTION", {});
            return t
        })
    }
    select(t, n) {
        return it(this, void 0, void 0, function*() {
            yield this.messageBus.sendAsync("OBR_PLAYER_SELECT", {
                items: t,
                replace: n
            })
        })
    }
    deselect(t) {
        return it(this, void 0, void 0, function*() {
            yield this.messageBus.sendAsync("OBR_PLAYER_DESELECt", {
                items: t
            })
        })
    }
    getName() {
        return it(this, void 0, void 0, function*() {
            const {name: t} = yield this.messageBus.sendAsync("OBR_PLAYER_GET_NAME", {});
            return t
        })
    }
    setName(t) {
        return it(this, void 0, void 0, function*() {
            yield this.messageBus.sendAsync("OBR_PLAYER_SET_NAME", {
                name: t
            })
        })
    }
    getColor() {
        return it(this, void 0, void 0, function*() {
            const {color: t} = yield this.messageBus.sendAsync("OBR_PLAYER_GET_COLOR", {});
            return t
        })
    }
    setColor(t) {
        return it(this, void 0, void 0, function*() {
            yield this.messageBus.sendAsync("OBR_PLAYER_SET_COLOR", {
                color: t
            })
        })
    }
    getSyncView() {
        return it(this, void 0, void 0, function*() {
            const {syncView: t} = yield this.messageBus.sendAsync("OBR_PLAYER_GET_SYNC_VIEW", {});
            return t
        })
    }
    setSyncView(t) {
        return it(this, void 0, void 0, function*() {
            yield this.messageBus.sendAsync("OBR_PLAYER_SET_SYNC_VIEW", {
                syncView: t
            })
        })
    }
    getId() {
        return it(this, void 0, void 0, function*() {
            const {id: t} = yield this.messageBus.sendAsync("OBR_PLAYER_GET_ID", {});
            return t
        })
    }
    getRole() {
        return it(this, void 0, void 0, function*() {
            const {role: t} = yield this.messageBus.sendAsync("OBR_PLAYER_GET_ROLE", {});
            return t
        })
    }
    getMetadata() {
        return it(this, void 0, void 0, function*() {
            const {metadata: t} = yield this.messageBus.sendAsync("OBR_PLAYER_GET_METADATA", {});
            return t
        })
    }
    setMetadata(t) {
        return it(this, void 0, void 0, function*() {
            yield this.messageBus.sendAsync("OBR_PLAYER_SET_METADATA", {
                update: t
            })
        })
    }
    hasPermission(t) {
        return it(this, void 0, void 0, function*() {
            if ((yield this.getRole()) === "GM")
                return !0;
            const {permissions: i} = yield this.messageBus.sendAsync("OBR_ROOM_GET_PERMISSIONS", {});
            return i.indexOf(t) === -1
        })
    }
    getConnectionId() {
        return it(this, void 0, void 0, function*() {
            const {connectionId: t} = yield this.messageBus.sendAsync("OBR_PLAYER_GET_CONNECTION_ID", {});
            return t
        })
    }
    onChange(t) {
        const n = i=>{
            t(i.player)
        }
        ;
        return this.messageBus.send("OBR_PLAYER_SUBSCRIBE", {}),
        this.messageBus.on("OBR_PLAYER_EVENT_CHANGE", n),
        ()=>{
            this.messageBus.send("OBR_PLAYER_UNSUBSCRIBE", {}),
            this.messageBus.off("OBR_PLAYER_EVENT_CHANGE", n)
        }
    }
}
var Lt = globalThis && globalThis.__awaiter || function(e, t, n, i) {
    function r(a) {
        return a instanceof n ? a : new n(function(o) {
            o(a)
        }
        )
    }
    return new (n || (n = Promise))(function(a, o) {
        function l(f) {
            try {
                c(i.next(f))
            } catch (u) {
                o(u)
            }
        }
        function s(f) {
            try {
                c(i.throw(f))
            } catch (u) {
                o(u)
            }
        }
        function c(f) {
            f.done ? a(f.value) : r(f.value).then(l, s)
        }
        c((i = i.apply(e, t || [])).next())
    }
    )
}
;
class g2 {
    constructor(t) {
        this.messageBus = t
    }
    reset() {
        return Lt(this, void 0, void 0, function*() {
            const {transform: t} = yield this.messageBus.sendAsync("OBR_VIEWPORT_RESET", {});
            return t
        })
    }
    animateTo(t) {
        return Lt(this, void 0, void 0, function*() {
            yield this.messageBus.sendAsync("OBR_VIEWPORT_ANIMATE_TO", {
                transform: t
            })
        })
    }
    animateToBounds(t) {
        return Lt(this, void 0, void 0, function*() {
            yield this.messageBus.sendAsync("OBR_VIEWPORT_ANIMATE_TO_BOUNDS", {
                bounds: t
            })
        })
    }
    getPosition() {
        return Lt(this, void 0, void 0, function*() {
            const {position: t} = yield this.messageBus.sendAsync("OBR_VIEWPORT_GET_POSITION", {});
            return t
        })
    }
    setPosition(t) {
        return Lt(this, void 0, void 0, function*() {
            yield this.messageBus.sendAsync("OBR_VIEWPORT_SET_POSITION", {
                position: t
            })
        })
    }
    getScale() {
        return Lt(this, void 0, void 0, function*() {
            const {scale: t} = yield this.messageBus.sendAsync("OBR_VIEWPORT_GET_SCALE", {});
            return t
        })
    }
    setScale(t) {
        return Lt(this, void 0, void 0, function*() {
            yield this.messageBus.sendAsync("OBR_VIEWPORT_SET_SCALE", {
                scale: t
            })
        })
    }
    getWidth() {
        return Lt(this, void 0, void 0, function*() {
            const {width: t} = yield this.messageBus.sendAsync("OBR_VIEWPORT_GET_WIDTH", {});
            return t
        })
    }
    getHeight() {
        return Lt(this, void 0, void 0, function*() {
            const {height: t} = yield this.messageBus.sendAsync("OBR_VIEWPORT_GET_HEIGHT", {});
            return t
        })
    }
    transformPoint(t) {
        return Lt(this, void 0, void 0, function*() {
            const {point: n} = yield this.messageBus.sendAsync("OBR_VIEWPORT_TRANSFORM_POINT", {
                point: t
            });
            return n
        })
    }
    inverseTransformPoint(t) {
        return Lt(this, void 0, void 0, function*() {
            const {point: n} = yield this.messageBus.sendAsync("OBR_VIEWPORT_INVERSE_TRANSFORM_POINT", {
                point: t
            });
            return n
        })
    }
}
function m2(e) {
    return typeof e.id == "string"
}
var Bd = {
    exports: {}
}, Bi = typeof Reflect == "object" ? Reflect : null, sc = Bi && typeof Bi.apply == "function" ? Bi.apply : function(t, n, i) {
    return Function.prototype.apply.call(t, n, i)
}
, Ya;
Bi && typeof Bi.ownKeys == "function" ? Ya = Bi.ownKeys : Object.getOwnPropertySymbols ? Ya = function(t) {
    return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))
}
: Ya = function(t) {
    return Object.getOwnPropertyNames(t)
}
;
function y2(e) {
    console && console.warn && console.warn(e)
}
var dh = Number.isNaN || function(t) {
    return t !== t
}
;
function he() {
    he.init.call(this)
}
Bd.exports = he;
Bd.exports.once = b2;
he.EventEmitter = he;
he.prototype._events = void 0;
he.prototype._eventsCount = 0;
he.prototype._maxListeners = void 0;
var dc = 10;
function Wo(e) {
    if (typeof e != "function")
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
}
Object.defineProperty(he, "defaultMaxListeners", {
    enumerable: !0,
    get: function() {
        return dc
    },
    set: function(e) {
        if (typeof e != "number" || e < 0 || dh(e))
            throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
        dc = e
    }
});
he.init = function() {
    (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null),
    this._eventsCount = 0),
    this._maxListeners = this._maxListeners || void 0
}
;
he.prototype.setMaxListeners = function(t) {
    if (typeof t != "number" || t < 0 || dh(t))
        throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
    return this._maxListeners = t,
    this
}
;
function fh(e) {
    return e._maxListeners === void 0 ? he.defaultMaxListeners : e._maxListeners
}
he.prototype.getMaxListeners = function() {
    return fh(this)
}
;
he.prototype.emit = function(t) {
    for (var n = [], i = 1; i < arguments.length; i++)
        n.push(arguments[i]);
    var r = t === "error"
      , a = this._events;
    if (a !== void 0)
        r = r && a.error === void 0;
    else if (!r)
        return !1;
    if (r) {
        var o;
        if (n.length > 0 && (o = n[0]),
        o instanceof Error)
            throw o;
        var l = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
        throw l.context = o,
        l
    }
    var s = a[t];
    if (s === void 0)
        return !1;
    if (typeof s == "function")
        sc(s, this, n);
    else
        for (var c = s.length, f = gh(s, c), i = 0; i < c; ++i)
            sc(f[i], this, n);
    return !0
}
;
function ch(e, t, n, i) {
    var r, a, o;
    if (Wo(n),
    a = e._events,
    a === void 0 ? (a = e._events = Object.create(null),
    e._eventsCount = 0) : (a.newListener !== void 0 && (e.emit("newListener", t, n.listener ? n.listener : n),
    a = e._events),
    o = a[t]),
    o === void 0)
        o = a[t] = n,
        ++e._eventsCount;
    else if (typeof o == "function" ? o = a[t] = i ? [n, o] : [o, n] : i ? o.unshift(n) : o.push(n),
    r = fh(e),
    r > 0 && o.length > r && !o.warned) {
        o.warned = !0;
        var l = new Error("Possible EventEmitter memory leak detected. " + o.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        l.name = "MaxListenersExceededWarning",
        l.emitter = e,
        l.type = t,
        l.count = o.length,
        y2(l)
    }
    return e
}
he.prototype.addListener = function(t, n) {
    return ch(this, t, n, !1)
}
;
he.prototype.on = he.prototype.addListener;
he.prototype.prependListener = function(t, n) {
    return ch(this, t, n, !0)
}
;
function x2() {
    if (!this.fired)
        return this.target.removeListener(this.type, this.wrapFn),
        this.fired = !0,
        arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
}
function uh(e, t, n) {
    var i = {
        fired: !1,
        wrapFn: void 0,
        target: e,
        type: t,
        listener: n
    }
      , r = x2.bind(i);
    return r.listener = n,
    i.wrapFn = r,
    r
}
he.prototype.once = function(t, n) {
    return Wo(n),
    this.on(t, uh(this, t, n)),
    this
}
;
he.prototype.prependOnceListener = function(t, n) {
    return Wo(n),
    this.prependListener(t, uh(this, t, n)),
    this
}
;
he.prototype.removeListener = function(t, n) {
    var i, r, a, o, l;
    if (Wo(n),
    r = this._events,
    r === void 0)
        return this;
    if (i = r[t],
    i === void 0)
        return this;
    if (i === n || i.listener === n)
        --this._eventsCount === 0 ? this._events = Object.create(null) : (delete r[t],
        r.removeListener && this.emit("removeListener", t, i.listener || n));
    else if (typeof i != "function") {
        for (a = -1,
        o = i.length - 1; o >= 0; o--)
            if (i[o] === n || i[o].listener === n) {
                l = i[o].listener,
                a = o;
                break
            }
        if (a < 0)
            return this;
        a === 0 ? i.shift() : T2(i, a),
        i.length === 1 && (r[t] = i[0]),
        r.removeListener !== void 0 && this.emit("removeListener", t, l || n)
    }
    return this
}
;
he.prototype.off = he.prototype.removeListener;
he.prototype.removeAllListeners = function(t) {
    var n, i, r;
    if (i = this._events,
    i === void 0)
        return this;
    if (i.removeListener === void 0)
        return arguments.length === 0 ? (this._events = Object.create(null),
        this._eventsCount = 0) : i[t] !== void 0 && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete i[t]),
        this;
    if (arguments.length === 0) {
        var a = Object.keys(i), o;
        for (r = 0; r < a.length; ++r)
            o = a[r],
            o !== "removeListener" && this.removeAllListeners(o);
        return this.removeAllListeners("removeListener"),
        this._events = Object.create(null),
        this._eventsCount = 0,
        this
    }
    if (n = i[t],
    typeof n == "function")
        this.removeListener(t, n);
    else if (n !== void 0)
        for (r = n.length - 1; r >= 0; r--)
            this.removeListener(t, n[r]);
    return this
}
;
function hh(e, t, n) {
    var i = e._events;
    if (i === void 0)
        return [];
    var r = i[t];
    return r === void 0 ? [] : typeof r == "function" ? n ? [r.listener || r] : [r] : n ? v2(r) : gh(r, r.length)
}
he.prototype.listeners = function(t) {
    return hh(this, t, !0)
}
;
he.prototype.rawListeners = function(t) {
    return hh(this, t, !1)
}
;
he.listenerCount = function(e, t) {
    return typeof e.listenerCount == "function" ? e.listenerCount(t) : ph.call(e, t)
}
;
he.prototype.listenerCount = ph;
function ph(e) {
    var t = this._events;
    if (t !== void 0) {
        var n = t[e];
        if (typeof n == "function")
            return 1;
        if (n !== void 0)
            return n.length
    }
    return 0
}
he.prototype.eventNames = function() {
    return this._eventsCount > 0 ? Ya(this._events) : []
}
;
function gh(e, t) {
    for (var n = new Array(t), i = 0; i < t; ++i)
        n[i] = e[i];
    return n
}
function T2(e, t) {
    for (; t + 1 < e.length; t++)
        e[t] = e[t + 1];
    e.pop()
}
function v2(e) {
    for (var t = new Array(e.length), n = 0; n < t.length; ++n)
        t[n] = e[n].listener || e[n];
    return t
}
function b2(e, t) {
    return new Promise(function(n, i) {
        function r(o) {
            e.removeListener(t, a),
            i(o)
        }
        function a() {
            typeof e.removeListener == "function" && e.removeListener("error", r),
            n([].slice.call(arguments))
        }
        mh(e, t, a, {
            once: !0
        }),
        t !== "error" && E2(e, r, {
            once: !0
        })
    }
    )
}
function E2(e, t, n) {
    typeof e.on == "function" && mh(e, "error", t, n)
}
function mh(e, t, n, i) {
    if (typeof e.on == "function")
        i.once ? e.once(t, n) : e.on(t, n);
    else if (typeof e.addEventListener == "function")
        e.addEventListener(t, function r(a) {
            i.once && e.removeEventListener(t, r),
            n(a)
        });
    else
        throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e)
}
var O2 = Bd.exports;
let Ra;
const w2 = new Uint8Array(16);
function A2() {
    if (!Ra && (Ra = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto),
    !Ra))
        throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    return Ra(w2)
}
const He = [];
for (let e = 0; e < 256; ++e)
    He.push((e + 256).toString(16).slice(1));
function k2(e, t=0) {
    return (He[e[t + 0]] + He[e[t + 1]] + He[e[t + 2]] + He[e[t + 3]] + "-" + He[e[t + 4]] + He[e[t + 5]] + "-" + He[e[t + 6]] + He[e[t + 7]] + "-" + He[e[t + 8]] + He[e[t + 9]] + "-" + He[e[t + 10]] + He[e[t + 11]] + He[e[t + 12]] + He[e[t + 13]] + He[e[t + 14]] + He[e[t + 15]]).toLowerCase()
}
const I2 = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto)
  , fc = {
    randomUUID: I2
};
function C2(e, t, n) {
    if (fc.randomUUID && !t && !e)
        return fc.randomUUID();
    e = e || {};
    const i = e.random || (e.rng || A2)();
    if (i[6] = i[6] & 15 | 64,
    i[8] = i[8] & 63 | 128,
    t) {
        n = n || 0;
        for (let r = 0; r < 16; ++r)
            t[n + r] = i[r];
        return t
    }
    return k2(i)
}
class S2 extends O2.EventEmitter {
    constructor(t, n) {
        super(),
        this.ready = !1,
        this.userId = null,
        this.ref = null,
        this.handleMessage = i=>{
            const r = i.data;
            if (i.origin === this.targetOrigin && m2(r)) {
                if (r.id === "OBR_READY") {
                    this.ready = !0;
                    const a = r.data;
                    this.ref = a.ref,
                    this.userId = a.userId
                }
                this.emit(r.id, r.data)
            }
        }
        ,
        this.send = (i,r,a)=>{
            var o;
            if (!this.ref)
                throw Error("Unable to send message: not ready");
            (o = window.parent) === null || o === void 0 || o.postMessage({
                id: i,
                data: r,
                ref: this.ref,
                nonce: a
            }, this.targetOrigin)
        }
        ,
        this.sendAsync = (i,r,a=5e3)=>{
            const o = `_${C2()}`;
            return this.send(i, r, o),
            Promise.race([new Promise((l,s)=>{
                const c = this;
                function f(y) {
                    c.off(`${i}_RESPONSE${o}`, f),
                    c.off(`${i}_ERROR${o}`, u),
                    l(y)
                }
                function u(y) {
                    c.off(`${i}_RESPONSE${o}`, f),
                    c.off(`${i}_ERROR${o}`, u),
                    s(y)
                }
                this.on(`${i}_RESPONSE${o}`, f),
                this.on(`${i}_ERROR${o}`, u)
            }
            ), new Promise((l,s)=>window.setTimeout(()=>s(new Error(`Message ${i} took longer than ${a}ms to get a result`)), a))])
        }
        ,
        this.roomId = n,
        this.targetOrigin = t,
        window.addEventListener("message", this.handleMessage),
        this.setMaxListeners(100)
    }
    destroy() {
        window.removeEventListener("message", this.handleMessage)
    }
}
var cc = globalThis && globalThis.__awaiter || function(e, t, n, i) {
    function r(a) {
        return a instanceof n ? a : new n(function(o) {
            o(a)
        }
        )
    }
    return new (n || (n = Promise))(function(a, o) {
        function l(f) {
            try {
                c(i.next(f))
            } catch (u) {
                o(u)
            }
        }
        function s(f) {
            try {
                c(i.throw(f))
            } catch (u) {
                o(u)
            }
        }
        function c(f) {
            f.done ? a(f.value) : r(f.value).then(l, s)
        }
        c((i = i.apply(e, t || [])).next())
    }
    )
}
;
class R2 {
    constructor(t) {
        this.messageBus = t
    }
    show(t, n) {
        return cc(this, void 0, void 0, function*() {
            const {id: i} = yield this.messageBus.sendAsync("OBR_NOTIFICATION_SHOW", {
                message: t,
                variant: n
            });
            return i
        })
    }
    close(t) {
        return cc(this, void 0, void 0, function*() {
            yield this.messageBus.sendAsync("OBR_NOTIFICATION_CLOSE", {
                id: t
            })
        })
    }
}
var hi = globalThis && globalThis.__awaiter || function(e, t, n, i) {
    function r(a) {
        return a instanceof n ? a : new n(function(o) {
            o(a)
        }
        )
    }
    return new (n || (n = Promise))(function(a, o) {
        function l(f) {
            try {
                c(i.next(f))
            } catch (u) {
                o(u)
            }
        }
        function s(f) {
            try {
                c(i.throw(f))
            } catch (u) {
                o(u)
            }
        }
        function c(f) {
            f.done ? a(f.value) : r(f.value).then(l, s)
        }
        c((i = i.apply(e, t || [])).next())
    }
    )
}
;
class M2 {
    constructor(t) {
        this.messageBus = t
    }
    getColor() {
        return hi(this, void 0, void 0, function*() {
            const {color: t} = yield this.messageBus.sendAsync("OBR_SCENE_FOG_GET_COLOR", {});
            return t
        })
    }
    setColor(t) {
        return hi(this, void 0, void 0, function*() {
            yield this.messageBus.sendAsync("OBR_SCENE_FOG_SET_COLOR", {
                color: t
            })
        })
    }
    getStrokeWidth() {
        return hi(this, void 0, void 0, function*() {
            const {strokeWidth: t} = yield this.messageBus.sendAsync("OBR_SCENE_FOG_GET_STROKE_WIDTH", {});
            return t
        })
    }
    setStrokeWidth(t) {
        return hi(this, void 0, void 0, function*() {
            yield this.messageBus.sendAsync("OBR_SCENE_FOG_SET_STROKE_WIDTH", {
                strokeWidth: t
            })
        })
    }
    getFilled() {
        return hi(this, void 0, void 0, function*() {
            const {filled: t} = yield this.messageBus.sendAsync("OBR_SCENE_FOG_GET_FILLED", {});
            return t
        })
    }
    setFilled(t) {
        return hi(this, void 0, void 0, function*() {
            yield this.messageBus.sendAsync("OBR_SCENE_FOG_SET_FILLED", {
                filled: t
            })
        })
    }
    onChange(t) {
        const n = i=>{
            t(i.fog)
        }
        ;
        return this.messageBus.send("OBR_SCENE_FOG_SUBSCRIBE", {}),
        this.messageBus.on("OBR_SCENE_FOG_EVENT_CHANGE", n),
        ()=>{
            this.messageBus.send("OBR_SCENE_FOG_UNSUBSCRIBE", {}),
            this.messageBus.off("OBR_SCENE_FOG_EVENT_CHANGE", n)
        }
    }
}
var rt = globalThis && globalThis.__awaiter || function(e, t, n, i) {
    function r(a) {
        return a instanceof n ? a : new n(function(o) {
            o(a)
        }
        )
    }
    return new (n || (n = Promise))(function(a, o) {
        function l(f) {
            try {
                c(i.next(f))
            } catch (u) {
                o(u)
            }
        }
        function s(f) {
            try {
                c(i.throw(f))
            } catch (u) {
                o(u)
            }
        }
        function c(f) {
            f.done ? a(f.value) : r(f.value).then(l, s)
        }
        c((i = i.apply(e, t || [])).next())
    }
    )
}
;
class _2 {
    constructor(t) {
        this.messageBus = t
    }
    getDpi() {
        return rt(this, void 0, void 0, function*() {
            const {dpi: t} = yield this.messageBus.sendAsync("OBR_SCENE_GRID_GET_DPI", {});
            return t
        })
    }
    getScale() {
        return rt(this, void 0, void 0, function*() {
            return yield this.messageBus.sendAsync("OBR_SCENE_GRID_GET_SCALE", {})
        })
    }
    setScale(t) {
        return rt(this, void 0, void 0, function*() {
            yield this.messageBus.sendAsync("OBR_SCENE_GRID_SET_SCALE", {
                scale: t
            })
        })
    }
    getColor() {
        return rt(this, void 0, void 0, function*() {
            const {color: t} = yield this.messageBus.sendAsync("OBR_SCENE_GRID_GET_COLOR", {});
            return t
        })
    }
    setColor(t) {
        return rt(this, void 0, void 0, function*() {
            yield this.messageBus.sendAsync("OBR_SCENE_GRID_SET_COLOR", {
                color: t
            })
        })
    }
    getOpacity() {
        return rt(this, void 0, void 0, function*() {
            const {opacity: t} = yield this.messageBus.sendAsync("OBR_SCENE_GRID_GET_OPACITY", {});
            return t
        })
    }
    setOpacity(t) {
        return rt(this, void 0, void 0, function*() {
            yield this.messageBus.sendAsync("OBR_SCENE_GRID_SET_OPACITY", {
                opacity: t
            })
        })
    }
    getType() {
        return rt(this, void 0, void 0, function*() {
            const {type: t} = yield this.messageBus.sendAsync("OBR_SCENE_GRID_GET_TYPE", {});
            return t
        })
    }
    setType(t) {
        return rt(this, void 0, void 0, function*() {
            yield this.messageBus.sendAsync("OBR_SCENE_GRID_SET_TYPE", {
                type: t
            })
        })
    }
    getLineType() {
        return rt(this, void 0, void 0, function*() {
            const {lineType: t} = yield this.messageBus.sendAsync("OBR_SCENE_GRID_GET_LINE_TYPE", {});
            return t
        })
    }
    setLineType(t) {
        return rt(this, void 0, void 0, function*() {
            yield this.messageBus.sendAsync("OBR_SCENE_GRID_SET_LINE_TYPE", {
                lineType: t
            })
        })
    }
    getMeasurement() {
        return rt(this, void 0, void 0, function*() {
            const {measurement: t} = yield this.messageBus.sendAsync("OBR_SCENE_GRID_GET_MEASUREMENT", {});
            return t
        })
    }
    setMeasurement(t) {
        return rt(this, void 0, void 0, function*() {
            yield this.messageBus.sendAsync("OBR_SCENE_GRID_SET_MEASUREMENT", {
                measurement: t
            })
        })
    }
    snapPosition(t, n, i) {
        return rt(this, void 0, void 0, function*() {
            const {position: r} = yield this.messageBus.sendAsync("OBR_SCENE_GRID_SNAP_POSITION", {
                position: t,
                snappingSensitivity: n,
                useCorners: i
            });
            return r
        })
    }
    getDistance(t, n) {
        return rt(this, void 0, void 0, function*() {
            const {distance: i} = yield this.messageBus.sendAsync("OBR_SCENE_GRID_GET_DISTANCE", {
                from: t,
                to: n
            });
            return i
        })
    }
    onChange(t) {
        const n = i=>{
            t(i.grid)
        }
        ;
        return this.messageBus.send("OBR_SCENE_GRID_SUBSCRIBE", {}),
        this.messageBus.on("OBR_SCENE_GRID_EVENT_CHANGE", n),
        ()=>{
            this.messageBus.send("OBR_SCENE_GRID_UNSUBSCRIBE", {}),
            this.messageBus.off("OBR_SCENE_GRID_EVENT_CHANGE", n)
        }
    }
}
var Ma = globalThis && globalThis.__awaiter || function(e, t, n, i) {
    function r(a) {
        return a instanceof n ? a : new n(function(o) {
            o(a)
        }
        )
    }
    return new (n || (n = Promise))(function(a, o) {
        function l(f) {
            try {
                c(i.next(f))
            } catch (u) {
                o(u)
            }
        }
        function s(f) {
            try {
                c(i.throw(f))
            } catch (u) {
                o(u)
            }
        }
        function c(f) {
            f.done ? a(f.value) : r(f.value).then(l, s)
        }
        c((i = i.apply(e, t || [])).next())
    }
    )
}
;
class N2 {
    constructor(t) {
        this.messageBus = t
    }
    undo() {
        return Ma(this, void 0, void 0, function*() {
            yield this.messageBus.sendAsync("OBR_SCENE_HISTORY_UNDO", {})
        })
    }
    redo() {
        return Ma(this, void 0, void 0, function*() {
            yield this.messageBus.sendAsync("OBR_SCENE_HISTORY_REDO", {})
        })
    }
    canUndo() {
        return Ma(this, void 0, void 0, function*() {
            const {canUndo: t} = yield this.messageBus.sendAsync("OBR_SCENE_HISTORY_CAN_UNDO", {});
            return t
        })
    }
    canRedo() {
        return Ma(this, void 0, void 0, function*() {
            const {canRedo: t} = yield this.messageBus.sendAsync("OBR_SCENE_HISTORY_CAN_REDO", {});
            return t
        })
    }
}
function Ke(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
        n[i - 1] = arguments[i];
    throw Error("[Immer] minified error nr: " + e + (n.length ? " " + n.map(function(r) {
        return "'" + r + "'"
    }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf")
}
function oi(e) {
    return !!e && !!e[Et]
}
function Ln(e) {
    var t;
    return !!e && (function(n) {
        if (!n || typeof n != "object")
            return !1;
        var i = Object.getPrototypeOf(n);
        if (i === null)
            return !0;
        var r = Object.hasOwnProperty.call(i, "constructor") && i.constructor;
        return r === Object || typeof r == "function" && Function.toString.call(r) === F2
    }(e) || Array.isArray(e) || !!e[Cr] || !!(!((t = e.constructor) === null || t === void 0) && t[Cr]) || Go(e) || Vo(e))
}
function Xi(e, t, n) {
    n === void 0 && (n = !1),
    Pn(e) === 0 ? (n ? Object.keys : Vd)(e).forEach(function(i) {
        n && typeof i == "symbol" || t(i, e[i], e)
    }) : e.forEach(function(i, r) {
        return t(r, i, e)
    })
}
function Pn(e) {
    var t = e[Et];
    return t ? t.i > 3 ? t.i - 4 : t.i : Array.isArray(e) ? 1 : Go(e) ? 2 : Vo(e) ? 3 : 0
}
function Zr(e, t) {
    return Pn(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
}
function Ka(e, t) {
    return Pn(e) === 2 ? e.get(t) : e[t]
}
function yh(e, t, n) {
    var i = Pn(e);
    i === 2 ? e.set(t, n) : i === 3 ? e.add(n) : e[t] = n
}
function U2(e, t) {
    return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t
}
function Go(e) {
    return z2 && e instanceof Map
}
function Vo(e) {
    return D2 && e instanceof Set
}
function Vn(e) {
    return e.o || e.t
}
function zd(e) {
    if (Array.isArray(e))
        return Array.prototype.slice.call(e);
    var t = H2(e);
    delete t[Et];
    for (var n = Vd(t), i = 0; i < n.length; i++) {
        var r = n[i]
          , a = t[r];
        a.writable === !1 && (a.writable = !0,
        a.configurable = !0),
        (a.get || a.set) && (t[r] = {
            configurable: !0,
            writable: !0,
            enumerable: a.enumerable,
            value: e[r]
        })
    }
    return Object.create(Object.getPrototypeOf(e), t)
}
function Dd(e, t) {
    return t === void 0 && (t = !1),
    Fd(e) || oi(e) || !Ln(e) || (Pn(e) > 1 && (e.set = e.add = e.clear = e.delete = L2),
    Object.freeze(e),
    t && Xi(e, function(n, i) {
        return Dd(i, !0)
    }, !0)),
    e
}
function L2() {
    Ke(2)
}
function Fd(e) {
    return e == null || typeof e != "object" || Object.isFrozen(e)
}
function Qt(e) {
    var t = Ls[e];
    return t || Ke(18, e),
    t
}
function P2(e, t) {
    Ls[e] || (Ls[e] = t)
}
function uc() {
    return Yr
}
function Rl(e, t) {
    t && (Qt("Patches"),
    e.u = [],
    e.s = [],
    e.v = t)
}
function Eo(e) {
    _s(e),
    e.p.forEach(j2),
    e.p = null
}
function _s(e) {
    e === Yr && (Yr = e.l)
}
function hc(e) {
    return Yr = {
        p: [],
        l: Yr,
        h: e,
        m: !0,
        _: 0
    }
}
function j2(e) {
    var t = e[Et];
    t.i === 0 || t.i === 1 ? t.j() : t.g = !0
}
function Ml(e, t) {
    t._ = t.p.length;
    var n = t.p[0]
      , i = e !== void 0 && e !== n;
    return t.h.O || Qt("ES5").S(t, e, i),
    i ? (n[Et].P && (Eo(t),
    Ke(4)),
    Ln(e) && (e = Oo(t, e),
    t.l || wo(t, e)),
    t.u && Qt("Patches").M(n[Et].t, e, t.u, t.s)) : e = Oo(t, n, []),
    Eo(t),
    t.u && t.v(t.u, t.s),
    e !== Gd ? e : void 0
}
function Oo(e, t, n) {
    if (Fd(t))
        return t;
    var i = t[Et];
    if (!i)
        return Xi(t, function(l, s) {
            return pc(e, i, t, l, s, n)
        }, !0),
        t;
    if (i.A !== e)
        return t;
    if (!i.P)
        return wo(e, i.t, !0),
        i.t;
    if (!i.I) {
        i.I = !0,
        i.A._--;
        var r = i.i === 4 || i.i === 5 ? i.o = zd(i.k) : i.o
          , a = r
          , o = !1;
        i.i === 3 && (a = new Set(r),
        r.clear(),
        o = !0),
        Xi(a, function(l, s) {
            return pc(e, i, r, l, s, n, o)
        }),
        wo(e, r, !1),
        n && e.u && Qt("Patches").N(i, n, e.u, e.s)
    }
    return i.o
}
function pc(e, t, n, i, r, a, o) {
    if (oi(r)) {
        var l = Oo(e, r, a && t && t.i !== 3 && !Zr(t.R, i) ? a.concat(i) : void 0);
        if (yh(n, i, l),
        !oi(l))
            return;
        e.m = !1
    } else
        o && n.add(r);
    if (Ln(r) && !Fd(r)) {
        if (!e.h.D && e._ < 1)
            return;
        Oo(e, r),
        t && t.A.l || wo(e, r)
    }
}
function wo(e, t, n) {
    n === void 0 && (n = !1),
    !e.l && e.h.D && e.m && Dd(t, n)
}
function _l(e, t) {
    var n = e[Et];
    return (n ? Vn(n) : e)[t]
}
function gc(e, t) {
    if (t in e)
        for (var n = Object.getPrototypeOf(e); n; ) {
            var i = Object.getOwnPropertyDescriptor(n, t);
            if (i)
                return i;
            n = Object.getPrototypeOf(n)
        }
}
function Ns(e) {
    e.P || (e.P = !0,
    e.l && Ns(e.l))
}
function Nl(e) {
    e.o || (e.o = zd(e.t))
}
function Us(e, t, n) {
    var i = Go(t) ? Qt("MapSet").F(t, n) : Vo(t) ? Qt("MapSet").T(t, n) : e.O ? function(r, a) {
        var o = Array.isArray(r)
          , l = {
            i: o ? 1 : 0,
            A: a ? a.A : uc(),
            P: !1,
            I: !1,
            R: {},
            l: a,
            t: r,
            k: null,
            o: null,
            j: null,
            C: !1
        }
          , s = l
          , c = Ps;
        o && (s = [l],
        c = xr);
        var f = Proxy.revocable(s, c)
          , u = f.revoke
          , y = f.proxy;
        return l.k = y,
        l.j = u,
        y
    }(t, n) : Qt("ES5").J(t, n);
    return (n ? n.A : uc()).p.push(i),
    i
}
function B2(e) {
    return oi(e) || Ke(22, e),
    function t(n) {
        if (!Ln(n))
            return n;
        var i, r = n[Et], a = Pn(n);
        if (r) {
            if (!r.P && (r.i < 4 || !Qt("ES5").K(r)))
                return r.t;
            r.I = !0,
            i = mc(n, a),
            r.I = !1
        } else
            i = mc(n, a);
        return Xi(i, function(o, l) {
            r && Ka(r.t, o) === l || yh(i, o, t(l))
        }),
        a === 3 ? new Set(i) : i
    }(e)
}
function mc(e, t) {
    switch (t) {
    case 2:
        return new Map(e);
    case 3:
        return Array.from(e)
    }
    return zd(e)
}
function Hd() {
    function e(i) {
        if (!Ln(i))
            return i;
        if (Array.isArray(i))
            return i.map(e);
        if (Go(i))
            return new Map(Array.from(i.entries()).map(function(o) {
                return [o[0], e(o[1])]
            }));
        if (Vo(i))
            return new Set(Array.from(i).map(e));
        var r = Object.create(Object.getPrototypeOf(i));
        for (var a in i)
            r[a] = e(i[a]);
        return Zr(i, Cr) && (r[Cr] = i[Cr]),
        r
    }
    function t(i) {
        return oi(i) ? e(i) : i
    }
    var n = "add";
    P2("Patches", {
        $: function(i, r) {
            return r.forEach(function(a) {
                for (var o = a.path, l = a.op, s = i, c = 0; c < o.length - 1; c++) {
                    var f = Pn(s)
                      , u = o[c];
                    typeof u != "string" && typeof u != "number" && (u = "" + u),
                    f !== 0 && f !== 1 || u !== "__proto__" && u !== "constructor" || Ke(24),
                    typeof s == "function" && u === "prototype" && Ke(24),
                    typeof (s = Ka(s, u)) != "object" && Ke(15, o.join("/"))
                }
                var y = Pn(s)
                  , T = e(a.value)
                  , v = o[o.length - 1];
                switch (l) {
                case "replace":
                    switch (y) {
                    case 2:
                        return s.set(v, T);
                    case 3:
                        Ke(16);
                    default:
                        return s[v] = T
                    }
                case n:
                    switch (y) {
                    case 1:
                        return v === "-" ? s.push(T) : s.splice(v, 0, T);
                    case 2:
                        return s.set(v, T);
                    case 3:
                        return s.add(T);
                    default:
                        return s[v] = T
                    }
                case "remove":
                    switch (y) {
                    case 1:
                        return s.splice(v, 1);
                    case 2:
                        return s.delete(v);
                    case 3:
                        return s.delete(a.value);
                    default:
                        return delete s[v]
                    }
                default:
                    Ke(17, l)
                }
            }),
            i
        },
        N: function(i, r, a, o) {
            switch (i.i) {
            case 0:
            case 4:
            case 2:
                return function(l, s, c, f) {
                    var u = l.t
                      , y = l.o;
                    Xi(l.R, function(T, v) {
                        var E = Ka(u, T)
                          , A = Ka(y, T)
                          , h = v ? Zr(u, T) ? "replace" : n : "remove";
                        if (E !== A || h !== "replace") {
                            var p = s.concat(T);
                            c.push(h === "remove" ? {
                                op: h,
                                path: p
                            } : {
                                op: h,
                                path: p,
                                value: A
                            }),
                            f.push(h === n ? {
                                op: "remove",
                                path: p
                            } : h === "remove" ? {
                                op: n,
                                path: p,
                                value: t(E)
                            } : {
                                op: "replace",
                                path: p,
                                value: t(E)
                            })
                        }
                    })
                }(i, r, a, o);
            case 5:
            case 1:
                return function(l, s, c, f) {
                    var u = l.t
                      , y = l.R
                      , T = l.o;
                    if (T.length < u.length) {
                        var v = [T, u];
                        u = v[0],
                        T = v[1];
                        var E = [f, c];
                        c = E[0],
                        f = E[1]
                    }
                    for (var A = 0; A < u.length; A++)
                        if (y[A] && T[A] !== u[A]) {
                            var h = s.concat([A]);
                            c.push({
                                op: "replace",
                                path: h,
                                value: t(T[A])
                            }),
                            f.push({
                                op: "replace",
                                path: h,
                                value: t(u[A])
                            })
                        }
                    for (var p = u.length; p < T.length; p++) {
                        var m = s.concat([p]);
                        c.push({
                            op: n,
                            path: m,
                            value: t(T[p])
                        })
                    }
                    u.length < T.length && f.push({
                        op: "replace",
                        path: s.concat(["length"]),
                        value: u.length
                    })
                }(i, r, a, o);
            case 3:
                return function(l, s, c, f) {
                    var u = l.t
                      , y = l.o
                      , T = 0;
                    u.forEach(function(v) {
                        if (!y.has(v)) {
                            var E = s.concat([T]);
                            c.push({
                                op: "remove",
                                path: E,
                                value: v
                            }),
                            f.unshift({
                                op: n,
                                path: E,
                                value: v
                            })
                        }
                        T++
                    }),
                    T = 0,
                    y.forEach(function(v) {
                        if (!u.has(v)) {
                            var E = s.concat([T]);
                            c.push({
                                op: n,
                                path: E,
                                value: v
                            }),
                            f.unshift({
                                op: "remove",
                                path: E,
                                value: v
                            })
                        }
                        T++
                    })
                }(i, r, a, o)
            }
        },
        M: function(i, r, a, o) {
            a.push({
                op: "replace",
                path: [],
                value: r === Gd ? void 0 : r
            }),
            o.push({
                op: "replace",
                path: [],
                value: i
            })
        }
    })
}
var yc, Yr, Wd = typeof Symbol < "u" && typeof Symbol("x") == "symbol", z2 = typeof Map < "u", D2 = typeof Set < "u", xc = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u", Gd = Wd ? Symbol.for("immer-nothing") : ((yc = {})["immer-nothing"] = !0,
yc), Cr = Wd ? Symbol.for("immer-draftable") : "__$immer_draftable", Et = Wd ? Symbol.for("immer-state") : "__$immer_state", F2 = "" + Object.prototype.constructor, Vd = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function(e) {
    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
}
: Object.getOwnPropertyNames, H2 = Object.getOwnPropertyDescriptors || function(e) {
    var t = {};
    return Vd(e).forEach(function(n) {
        t[n] = Object.getOwnPropertyDescriptor(e, n)
    }),
    t
}
, Ls = {}, Ps = {
    get: function(e, t) {
        if (t === Et)
            return e;
        var n = Vn(e);
        if (!Zr(n, t))
            return function(r, a, o) {
                var l, s = gc(a, o);
                return s ? "value"in s ? s.value : (l = s.get) === null || l === void 0 ? void 0 : l.call(r.k) : void 0
            }(e, n, t);
        var i = n[t];
        return e.I || !Ln(i) ? i : i === _l(e.t, t) ? (Nl(e),
        e.o[t] = Us(e.A.h, i, e)) : i
    },
    has: function(e, t) {
        return t in Vn(e)
    },
    ownKeys: function(e) {
        return Reflect.ownKeys(Vn(e))
    },
    set: function(e, t, n) {
        var i = gc(Vn(e), t);
        if (i != null && i.set)
            return i.set.call(e.k, n),
            !0;
        if (!e.P) {
            var r = _l(Vn(e), t)
              , a = r == null ? void 0 : r[Et];
            if (a && a.t === n)
                return e.o[t] = n,
                e.R[t] = !1,
                !0;
            if (U2(n, r) && (n !== void 0 || Zr(e.t, t)))
                return !0;
            Nl(e),
            Ns(e)
        }
        return e.o[t] === n && (n !== void 0 || t in e.o) || Number.isNaN(n) && Number.isNaN(e.o[t]) || (e.o[t] = n,
        e.R[t] = !0),
        !0
    },
    deleteProperty: function(e, t) {
        return _l(e.t, t) !== void 0 || t in e.t ? (e.R[t] = !1,
        Nl(e),
        Ns(e)) : delete e.R[t],
        e.o && delete e.o[t],
        !0
    },
    getOwnPropertyDescriptor: function(e, t) {
        var n = Vn(e)
          , i = Reflect.getOwnPropertyDescriptor(n, t);
        return i && {
            writable: !0,
            configurable: e.i !== 1 || t !== "length",
            enumerable: i.enumerable,
            value: n[t]
        }
    },
    defineProperty: function() {
        Ke(11)
    },
    getPrototypeOf: function(e) {
        return Object.getPrototypeOf(e.t)
    },
    setPrototypeOf: function() {
        Ke(12)
    }
}, xr = {};
Xi(Ps, function(e, t) {
    xr[e] = function() {
        return arguments[0] = arguments[0][0],
        t.apply(this, arguments)
    }
}),
xr.deleteProperty = function(e, t) {
    return xr.set.call(this, e, t, void 0)
}
,
xr.set = function(e, t, n) {
    return Ps.set.call(this, e[0], t, n, e[0])
}
;
var W2 = function() {
    function e(n) {
        var i = this;
        this.O = xc,
        this.D = !0,
        this.produce = function(r, a, o) {
            if (typeof r == "function" && typeof a != "function") {
                var l = a;
                a = r;
                var s = i;
                return function(E) {
                    var A = this;
                    E === void 0 && (E = l);
                    for (var h = arguments.length, p = Array(h > 1 ? h - 1 : 0), m = 1; m < h; m++)
                        p[m - 1] = arguments[m];
                    return s.produce(E, function(O) {
                        var C;
                        return (C = a).call.apply(C, [A, O].concat(p))
                    })
                }
            }
            var c;
            if (typeof a != "function" && Ke(6),
            o !== void 0 && typeof o != "function" && Ke(7),
            Ln(r)) {
                var f = hc(i)
                  , u = Us(i, r, void 0)
                  , y = !0;
                try {
                    c = a(u),
                    y = !1
                } finally {
                    y ? Eo(f) : _s(f)
                }
                return typeof Promise < "u" && c instanceof Promise ? c.then(function(E) {
                    return Rl(f, o),
                    Ml(E, f)
                }, function(E) {
                    throw Eo(f),
                    E
                }) : (Rl(f, o),
                Ml(c, f))
            }
            if (!r || typeof r != "object") {
                if ((c = a(r)) === void 0 && (c = r),
                c === Gd && (c = void 0),
                i.D && Dd(c, !0),
                o) {
                    var T = []
                      , v = [];
                    Qt("Patches").M(r, c, T, v),
                    o(T, v)
                }
                return c
            }
            Ke(21, r)
        }
        ,
        this.produceWithPatches = function(r, a) {
            if (typeof r == "function")
                return function(c) {
                    for (var f = arguments.length, u = Array(f > 1 ? f - 1 : 0), y = 1; y < f; y++)
                        u[y - 1] = arguments[y];
                    return i.produceWithPatches(c, function(T) {
                        return r.apply(void 0, [T].concat(u))
                    })
                }
                ;
            var o, l, s = i.produce(r, a, function(c, f) {
                o = c,
                l = f
            });
            return typeof Promise < "u" && s instanceof Promise ? s.then(function(c) {
                return [c, o, l]
            }) : [s, o, l]
        }
        ,
        typeof (n == null ? void 0 : n.useProxies) == "boolean" && this.setUseProxies(n.useProxies),
        typeof (n == null ? void 0 : n.autoFreeze) == "boolean" && this.setAutoFreeze(n.autoFreeze)
    }
    var t = e.prototype;
    return t.createDraft = function(n) {
        Ln(n) || Ke(8),
        oi(n) && (n = B2(n));
        var i = hc(this)
          , r = Us(this, n, void 0);
        return r[Et].C = !0,
        _s(i),
        r
    }
    ,
    t.finishDraft = function(n, i) {
        var r = n && n[Et]
          , a = r.A;
        return Rl(a, i),
        Ml(void 0, a)
    }
    ,
    t.setAutoFreeze = function(n) {
        this.D = n
    }
    ,
    t.setUseProxies = function(n) {
        n && !xc && Ke(20),
        this.O = n
    }
    ,
    t.applyPatches = function(n, i) {
        var r;
        for (r = i.length - 1; r >= 0; r--) {
            var a = i[r];
            if (a.path.length === 0 && a.op === "replace") {
                n = a.value;
                break
            }
        }
        r > -1 && (i = i.slice(r + 1));
        var o = Qt("Patches").$;
        return oi(n) ? o(n, i) : this.produce(n, function(l) {
            return o(l, i)
        })
    }
    ,
    e
}()
  , Ot = new W2;
Ot.produce;
var Xd = Ot.produceWithPatches.bind(Ot);
Ot.setAutoFreeze.bind(Ot);
Ot.setUseProxies.bind(Ot);
Ot.applyPatches.bind(Ot);
Ot.createDraft.bind(Ot);
Ot.finishDraft.bind(Ot);
var pi = globalThis && globalThis.__awaiter || function(e, t, n, i) {
    function r(a) {
        return a instanceof n ? a : new n(function(o) {
            o(a)
        }
        )
    }
    return new (n || (n = Promise))(function(a, o) {
        function l(f) {
            try {
                c(i.next(f))
            } catch (u) {
                o(u)
            }
        }
        function s(f) {
            try {
                c(i.throw(f))
            } catch (u) {
                o(u)
            }
        }
        function c(f) {
            f.done ? a(f.value) : r(f.value).then(l, s)
        }
        c((i = i.apply(e, t || [])).next())
    }
    )
}
;
Hd();
class G2 {
    constructor(t) {
        this.messageBus = t
    }
    getItems(t) {
        return pi(this, void 0, void 0, function*() {
            if (Array.isArray(t)) {
                const {items: n} = yield this.messageBus.sendAsync("OBR_SCENE_ITEMS_GET_ITEMS", {
                    ids: t
                });
                return n
            } else if (t) {
                const {items: n} = yield this.messageBus.sendAsync("OBR_SCENE_ITEMS_GET_ALL_ITEMS", {});
                return n.filter(t)
            } else {
                const {items: n} = yield this.messageBus.sendAsync("OBR_SCENE_ITEMS_GET_ALL_ITEMS", {});
                return n
            }
        })
    }
    isItemArray(t) {
        return Array.isArray(t) && t.every(n=>typeof n != "string")
    }
    updateItems(t, n) {
        return pi(this, void 0, void 0, function*() {
            let i;
            this.isItemArray(t) ? i = t : i = yield this.getItems(t);
            const [r,a] = Xd(i, n)
              , o = r.map(l=>({
                id: l.id,
                type: l.type
            }));
            for (const l of a) {
                const [s,c] = l.path;
                typeof s == "number" && typeof c == "string" && (o[s][c] = r[s][c])
            }
            yield this.messageBus.sendAsync("OBR_SCENE_ITEMS_UPDATE_ITEMS", {
                updates: o
            })
        })
    }
    addItems(t) {
        return pi(this, void 0, void 0, function*() {
            yield this.messageBus.sendAsync("OBR_SCENE_ITEMS_ADD_ITEMS", {
                items: t
            })
        })
    }
    deleteItems(t) {
        return pi(this, void 0, void 0, function*() {
            yield this.messageBus.sendAsync("OBR_SCENE_ITEMS_DELETE_ITEMS", {
                ids: t
            })
        })
    }
    getItemAttachments(t) {
        return pi(this, void 0, void 0, function*() {
            const {items: n} = yield this.messageBus.sendAsync("OBR_SCENE_ITEMS_GET_ITEM_ATTACHMENTS", {
                ids: t
            });
            return n
        })
    }
    getItemBounds(t) {
        return pi(this, void 0, void 0, function*() {
            const {bounds: n} = yield this.messageBus.sendAsync("OBR_SCENE_ITEMS_GET_ITEM_BOUNDS", {
                ids: t
            });
            return n
        })
    }
    onChange(t) {
        const n = i=>{
            t(i.items)
        }
        ;
        return this.messageBus.send("OBR_SCENE_ITEMS_SUBSCRIBE", {}),
        this.messageBus.on("OBR_SCENE_ITEMS_EVENT_CHANGE", n),
        ()=>{
            this.messageBus.send("OBR_SCENE_ITEMS_UNSUBSCRIBE", {}),
            this.messageBus.off("OBR_SCENE_ITEMS_EVENT_CHANGE", n)
        }
    }
}
var gi = globalThis && globalThis.__awaiter || function(e, t, n, i) {
    function r(a) {
        return a instanceof n ? a : new n(function(o) {
            o(a)
        }
        )
    }
    return new (n || (n = Promise))(function(a, o) {
        function l(f) {
            try {
                c(i.next(f))
            } catch (u) {
                o(u)
            }
        }
        function s(f) {
            try {
                c(i.throw(f))
            } catch (u) {
                o(u)
            }
        }
        function c(f) {
            f.done ? a(f.value) : r(f.value).then(l, s)
        }
        c((i = i.apply(e, t || [])).next())
    }
    )
}
;
Hd();
class V2 {
    constructor(t) {
        this.messageBus = t
    }
    getItems(t) {
        return gi(this, void 0, void 0, function*() {
            if (Array.isArray(t)) {
                const {items: n} = yield this.messageBus.sendAsync("OBR_SCENE_LOCAL_GET_ITEMS", {
                    ids: t
                });
                return n
            } else if (t) {
                const {items: n} = yield this.messageBus.sendAsync("OBR_SCENE_LOCAL_GET_ALL_ITEMS", {});
                return n.filter(t)
            } else {
                const {items: n} = yield this.messageBus.sendAsync("OBR_SCENE_LOCAL_GET_ALL_ITEMS", {});
                return n
            }
        })
    }
    updateItems(t, n, i) {
        return gi(this, void 0, void 0, function*() {
            const r = yield this.getItems(t)
              , [a,o] = Xd(r, n)
              , l = a.map(s=>({
                id: s.id,
                type: s.type
            }));
            for (const s of o) {
                const [c,f] = s.path;
                typeof c == "number" && typeof f == "string" && (l[c][f] = a[c][f])
            }
            yield this.messageBus.sendAsync("OBR_SCENE_LOCAL_UPDATE_ITEMS", {
                updates: l,
                fastUpdate: i
            })
        })
    }
    addItems(t) {
        return gi(this, void 0, void 0, function*() {
            yield this.messageBus.sendAsync("OBR_SCENE_LOCAL_ADD_ITEMS", {
                items: t
            })
        })
    }
    deleteItems(t) {
        return gi(this, void 0, void 0, function*() {
            yield this.messageBus.sendAsync("OBR_SCENE_LOCAL_DELETE_ITEMS", {
                ids: t
            })
        })
    }
    getItemAttachments(t) {
        return gi(this, void 0, void 0, function*() {
            const {items: n} = yield this.messageBus.sendAsync("OBR_SCENE_LOCAL_GET_ITEM_ATTACHMENTS", {
                ids: t
            });
            return n
        })
    }
    getItemBounds(t) {
        return gi(this, void 0, void 0, function*() {
            const {bounds: n} = yield this.messageBus.sendAsync("OBR_SCENE_LOCAL_GET_ITEM_BOUNDS", {
                ids: t
            });
            return n
        })
    }
    onChange(t) {
        const n = i=>{
            t(i.items)
        }
        ;
        return this.messageBus.send("OBR_SCENE_LOCAL_SUBSCRIBE", {}),
        this.messageBus.on("OBR_SCENE_LOCAL_EVENT_CHANGE", n),
        ()=>{
            this.messageBus.send("OBR_SCENE_LOCAL_UNSUBSCRIBE", {}),
            this.messageBus.off("OBR_SCENE_LOCAL_EVENT_CHANGE", n)
        }
    }
}
var Ul = globalThis && globalThis.__awaiter || function(e, t, n, i) {
    function r(a) {
        return a instanceof n ? a : new n(function(o) {
            o(a)
        }
        )
    }
    return new (n || (n = Promise))(function(a, o) {
        function l(f) {
            try {
                c(i.next(f))
            } catch (u) {
                o(u)
            }
        }
        function s(f) {
            try {
                c(i.throw(f))
            } catch (u) {
                o(u)
            }
        }
        function c(f) {
            f.done ? a(f.value) : r(f.value).then(l, s)
        }
        c((i = i.apply(e, t || [])).next())
    }
    )
}
;
class X2 {
    constructor(t) {
        this.messageBus = t,
        this.grid = new _2(t),
        this.fog = new M2(t),
        this.history = new N2(t),
        this.items = new G2(t),
        this.local = new V2(t)
    }
    isReady() {
        return Ul(this, void 0, void 0, function*() {
            const {ready: t} = yield this.messageBus.sendAsync("OBR_SCENE_IS_READY", {});
            return t
        })
    }
    onReadyChange(t) {
        const n = i=>{
            t(i.ready)
        }
        ;
        return this.messageBus.send("OBR_SCENE_READY_SUBSCRIBE", {}),
        this.messageBus.on("OBR_SCENE_EVENT_READY_CHANGE", n),
        ()=>{
            this.messageBus.send("OBR_SCENE_READY_UNSUBSCRIBE", {}),
            this.messageBus.off("OBR_SCENE_EVENT_READY_CHANGE", n)
        }
    }
    getMetadata() {
        return Ul(this, void 0, void 0, function*() {
            const {metadata: t} = yield this.messageBus.sendAsync("OBR_SCENE_GET_METADATA", {});
            return t
        })
    }
    setMetadata(t) {
        return Ul(this, void 0, void 0, function*() {
            yield this.messageBus.sendAsync("OBR_SCENE_SET_METADATA", {
                update: t
            })
        })
    }
    onMetadataChange(t) {
        const n = i=>{
            t(i.metadata)
        }
        ;
        return this.messageBus.send("OBR_SCENE_METADATA_SUBSCRIBE", {}),
        this.messageBus.on("OBR_SCENE_METADATA_EVENT_CHANGE", n),
        ()=>{
            this.messageBus.send("OBR_SCENE_METADATA_UNSUBSCRIBE", {}),
            this.messageBus.off("OBR_SCENE_METADATA_EVENT_CHANGE", n)
        }
    }
}
function Sr(e) {
    return e.map(t=>Object.assign(Object.assign({}, t), {
        icon: t.icon.startsWith("http") ? t.icon : `${window.location.origin}${t.icon}`
    }))
}
function xh(e) {
    return Object.assign(Object.assign({}, e), {
        url: e.url.startsWith("http") ? e.url : `${window.location.origin}${e.url}`
    })
}
var Tc = globalThis && globalThis.__awaiter || function(e, t, n, i) {
    function r(a) {
        return a instanceof n ? a : new n(function(o) {
            o(a)
        }
        )
    }
    return new (n || (n = Promise))(function(a, o) {
        function l(f) {
            try {
                c(i.next(f))
            } catch (u) {
                o(u)
            }
        }
        function s(f) {
            try {
                c(i.throw(f))
            } catch (u) {
                o(u)
            }
        }
        function c(f) {
            f.done ? a(f.value) : r(f.value).then(l, s)
        }
        c((i = i.apply(e, t || [])).next())
    }
    )
}
;
class $2 {
    constructor(t) {
        this.contextMenus = {},
        this.handleClick = n=>{
            const i = this.contextMenus[n.id];
            i && i.onClick(n.context, n.elementId)
        }
        ,
        this.messageBus = t,
        t.on("OBR_CONTEXT_MENU_EVENT_CLICK", this.handleClick)
    }
    create(t) {
        return Tc(this, void 0, void 0, function*() {
            this.messageBus.sendAsync("OBR_CONTEXT_MENU_CREATE", {
                id: t.id,
                shortcut: t.shortcut,
                icons: Sr(t.icons)
            }),
            this.contextMenus[t.id] = t
        })
    }
    remove(t) {
        return Tc(this, void 0, void 0, function*() {
            yield this.messageBus.sendAsync("OBR_CONTEXT_MENU_REMOVE", {
                id: t
            }),
            delete this.contextMenus[t]
        })
    }
}
var Xt = globalThis && globalThis.__awaiter || function(e, t, n, i) {
    function r(a) {
        return a instanceof n ? a : new n(function(o) {
            o(a)
        }
        )
    }
    return new (n || (n = Promise))(function(a, o) {
        function l(f) {
            try {
                c(i.next(f))
            } catch (u) {
                o(u)
            }
        }
        function s(f) {
            try {
                c(i.throw(f))
            } catch (u) {
                o(u)
            }
        }
        function c(f) {
            f.done ? a(f.value) : r(f.value).then(l, s)
        }
        c((i = i.apply(e, t || [])).next())
    }
    )
}
;
class Z2 {
    constructor(t) {
        this.tools = {},
        this.toolActions = {},
        this.toolModes = {},
        this.handleToolClick = n=>{
            const i = this.tools[n.id];
            if (i)
                if (i.onClick) {
                    const r = i.onClick(n.context, n.elementId);
                    Promise.resolve(r).then(a=>{
                        a && this.messageBus.send("OBR_TOOL_ACTIVATE", {
                            id: n.id
                        })
                    }
                    )
                } else
                    this.messageBus.send("OBR_TOOL_ACTIVATE", {
                        id: n.id
                    })
        }
        ,
        this.handleToolActionClick = n=>{
            var i;
            const r = this.toolActions[n.id];
            r && ((i = r.onClick) === null || i === void 0 || i.call(r, n.context, n.elementId))
        }
        ,
        this.handleToolModeClick = n=>{
            const i = this.toolModes[n.id];
            if (i)
                if (i.onClick) {
                    const r = i.onClick(n.context, n.elementId);
                    Promise.resolve(r).then(a=>{
                        a && this.messageBus.send("OBR_TOOL_MODE_ACTIVATE", {
                            toolId: n.context.activeTool,
                            modeId: n.id
                        })
                    }
                    )
                } else
                    this.messageBus.send("OBR_TOOL_MODE_ACTIVATE", {
                        toolId: n.context.activeTool,
                        modeId: n.id
                    })
        }
        ,
        this.handleToolModeToolClick = n=>{
            const i = this.toolModes[n.id];
            if (i)
                if (i.onToolClick) {
                    const r = i.onToolClick(n.context, n.event);
                    Promise.resolve(r).then(a=>{
                        a && n.event.target && !n.event.target.locked && this.messageBus.sendAsync("OBR_PLAYER_SELECT", {
                            items: [n.event.target.id]
                        })
                    }
                    )
                } else
                    n.event.target && !n.event.target.locked && this.messageBus.sendAsync("OBR_PLAYER_SELECT", {
                        items: [n.event.target.id]
                    })
        }
        ,
        this.handleToolModeToolDoubleClick = n=>{
            const i = this.toolModes[n.id];
            if (i)
                if (i.onToolDoubleClick) {
                    const r = i.onToolDoubleClick(n.context, n.event);
                    Promise.resolve(r).then(a=>{
                        a && n.event.target && this.messageBus.sendAsync("OBR_PLAYER_SELECT", {
                            items: [n.event.target.id]
                        })
                    }
                    )
                } else
                    n.event.target && this.messageBus.sendAsync("OBR_PLAYER_SELECT", {
                        items: [n.event.target.id]
                    })
        }
        ,
        this.handleToolModeToolDown = n=>{
            var i;
            const r = this.toolModes[n.id];
            r && ((i = r.onToolDown) === null || i === void 0 || i.call(r, n.context, n.event))
        }
        ,
        this.handleToolModeToolMove = n=>{
            var i;
            const r = this.toolModes[n.id];
            r && ((i = r.onToolMove) === null || i === void 0 || i.call(r, n.context, n.event))
        }
        ,
        this.handleToolModeToolUp = n=>{
            var i;
            const r = this.toolModes[n.id];
            r && ((i = r.onToolUp) === null || i === void 0 || i.call(r, n.context, n.event))
        }
        ,
        this.handleToolModeToolDragStart = n=>{
            var i;
            const r = this.toolModes[n.id];
            r && ((i = r.onToolDragStart) === null || i === void 0 || i.call(r, n.context, n.event))
        }
        ,
        this.handleToolModeToolDragMove = n=>{
            var i;
            const r = this.toolModes[n.id];
            r && ((i = r.onToolDragMove) === null || i === void 0 || i.call(r, n.context, n.event))
        }
        ,
        this.handleToolModeToolDragEnd = n=>{
            var i;
            const r = this.toolModes[n.id];
            r && ((i = r.onToolDragEnd) === null || i === void 0 || i.call(r, n.context, n.event))
        }
        ,
        this.handleToolModeToolDragCancel = n=>{
            var i;
            const r = this.toolModes[n.id];
            r && ((i = r.onToolDragCancel) === null || i === void 0 || i.call(r, n.context, n.event))
        }
        ,
        this.handleToolModeKeyDown = n=>{
            var i;
            const r = this.toolModes[n.id];
            r && ((i = r.onKeyDown) === null || i === void 0 || i.call(r, n.context, n.event))
        }
        ,
        this.handleToolModeKeyUp = n=>{
            var i;
            const r = this.toolModes[n.id];
            r && ((i = r.onKeyUp) === null || i === void 0 || i.call(r, n.context, n.event))
        }
        ,
        this.messageBus = t,
        t.on("OBR_TOOL_EVENT_CLICK", this.handleToolClick),
        t.on("OBR_TOOL_ACTION_EVENT_CLICK", this.handleToolActionClick),
        t.on("OBR_TOOL_MODE_EVENT_CLICK", this.handleToolModeClick),
        t.on("OBR_TOOL_MODE_EVENT_TOOL_CLICK", this.handleToolModeToolClick),
        t.on("OBR_TOOL_MODE_EVENT_TOOL_DOUBLE_CLICK", this.handleToolModeToolDoubleClick),
        t.on("OBR_TOOL_MODE_EVENT_TOOL_DOWN", this.handleToolModeToolDown),
        t.on("OBR_TOOL_MODE_EVENT_TOOL_MOVE", this.handleToolModeToolMove),
        t.on("OBR_TOOL_MODE_EVENT_TOOL_UP", this.handleToolModeToolUp),
        t.on("OBR_TOOL_MODE_EVENT_TOOL_DRAG_START", this.handleToolModeToolDragStart),
        t.on("OBR_TOOL_MODE_EVENT_TOOL_DRAG_MOVE", this.handleToolModeToolDragMove),
        t.on("OBR_TOOL_MODE_EVENT_TOOL_DRAG_END", this.handleToolModeToolDragEnd),
        t.on("OBR_TOOL_MODE_EVENT_TOOL_DRAG_CANCEL", this.handleToolModeToolDragCancel),
        t.on("OBR_TOOL_MODE_EVENT_KEY_DOWN", this.handleToolModeKeyDown),
        t.on("OBR_TOOL_MODE_EVENT_KEY_UP", this.handleToolModeKeyUp)
    }
    create(t) {
        return Xt(this, void 0, void 0, function*() {
            yield this.messageBus.sendAsync("OBR_TOOL_CREATE", {
                id: t.id,
                shortcut: t.shortcut,
                defaultMode: t.defaultMode,
                defaultMetadata: t.defaultMetadata,
                icons: Sr(t.icons),
                disabled: t.disabled
            }),
            this.tools[t.id] = t
        })
    }
    remove(t) {
        return Xt(this, void 0, void 0, function*() {
            yield this.messageBus.sendAsync("OBR_TOOL_REMOVE", {
                id: t
            }),
            delete this.tools[t]
        })
    }
    activateTool(t) {
        return Xt(this, void 0, void 0, function*() {
            yield this.messageBus.sendAsync("OBR_TOOL_ACTIVATE", {
                id: t
            })
        })
    }
    getMetadata(t) {
        return Xt(this, void 0, void 0, function*() {
            const {metadata: n} = yield this.messageBus.sendAsync("OBR_TOOL_GET_METADATA", {
                id: t
            });
            return n
        })
    }
    setMetadata(t, n) {
        return Xt(this, void 0, void 0, function*() {
            yield this.messageBus.sendAsync("OBR_TOOL_SET_METADATA", {
                toolId: t,
                update: n
            })
        })
    }
    createAction(t) {
        return Xt(this, void 0, void 0, function*() {
            yield this.messageBus.sendAsync("OBR_TOOL_ACTION_CREATE", {
                id: t.id,
                shortcut: t.shortcut,
                icons: Sr(t.icons),
                disabled: t.disabled
            }),
            this.toolActions[t.id] = t
        })
    }
    removeAction(t) {
        return Xt(this, void 0, void 0, function*() {
            yield this.messageBus.sendAsync("OBR_TOOL_ACTION_REMOVE", {
                id: t
            }),
            delete this.tools[t]
        })
    }
    createMode(t) {
        return Xt(this, void 0, void 0, function*() {
            yield this.messageBus.sendAsync("OBR_TOOL_MODE_CREATE", {
                id: t.id,
                shortcut: t.shortcut,
                icons: Sr(t.icons),
                preventDrag: t.preventDrag,
                disabled: t.disabled,
                cursors: t.cursors
            }),
            this.toolModes[t.id] = t
        })
    }
    removeMode(t) {
        return Xt(this, void 0, void 0, function*() {
            yield this.messageBus.sendAsync("OBR_TOOL_MODE_REMOVE", {
                id: t
            }),
            delete this.tools[t]
        })
    }
    activateMode(t, n) {
        return Xt(this, void 0, void 0, function*() {
            yield this.messageBus.sendAsync("OBR_TOOL_MODE_ACTIVATE", {
                toolId: t,
                modeId: n
            })
        })
    }
}
var vc = globalThis && globalThis.__awaiter || function(e, t, n, i) {
    function r(a) {
        return a instanceof n ? a : new n(function(o) {
            o(a)
        }
        )
    }
    return new (n || (n = Promise))(function(a, o) {
        function l(f) {
            try {
                c(i.next(f))
            } catch (u) {
                o(u)
            }
        }
        function s(f) {
            try {
                c(i.throw(f))
            } catch (u) {
                o(u)
            }
        }
        function c(f) {
            f.done ? a(f.value) : r(f.value).then(l, s)
        }
        c((i = i.apply(e, t || [])).next())
    }
    )
}
;
class Y2 {
    constructor(t) {
        this.messageBus = t
    }
    open(t) {
        return vc(this, void 0, void 0, function*() {
            yield this.messageBus.sendAsync("OBR_POPOVER_OPEN", Object.assign({}, xh(t)))
        })
    }
    close(t) {
        return vc(this, void 0, void 0, function*() {
            yield this.messageBus.sendAsync("OBR_POPOVER_CLOSE", {
                id: t
            })
        })
    }
}
var bc = globalThis && globalThis.__awaiter || function(e, t, n, i) {
    function r(a) {
        return a instanceof n ? a : new n(function(o) {
            o(a)
        }
        )
    }
    return new (n || (n = Promise))(function(a, o) {
        function l(f) {
            try {
                c(i.next(f))
            } catch (u) {
                o(u)
            }
        }
        function s(f) {
            try {
                c(i.throw(f))
            } catch (u) {
                o(u)
            }
        }
        function c(f) {
            f.done ? a(f.value) : r(f.value).then(l, s)
        }
        c((i = i.apply(e, t || [])).next())
    }
    )
}
;
class K2 {
    constructor(t) {
        this.messageBus = t
    }
    open(t) {
        return bc(this, void 0, void 0, function*() {
            yield this.messageBus.sendAsync("OBR_MODAL_OPEN", Object.assign({}, xh(t)))
        })
    }
    close(t) {
        return bc(this, void 0, void 0, function*() {
            yield this.messageBus.sendAsync("OBR_MODAL_CLOSE", {
                id: t
            })
        })
    }
}
var yt = globalThis && globalThis.__awaiter || function(e, t, n, i) {
    function r(a) {
        return a instanceof n ? a : new n(function(o) {
            o(a)
        }
        )
    }
    return new (n || (n = Promise))(function(a, o) {
        function l(f) {
            try {
                c(i.next(f))
            } catch (u) {
                o(u)
            }
        }
        function s(f) {
            try {
                c(i.throw(f))
            } catch (u) {
                o(u)
            }
        }
        function c(f) {
            f.done ? a(f.value) : r(f.value).then(l, s)
        }
        c((i = i.apply(e, t || [])).next())
    }
    )
}
;
class Q2 {
    constructor(t) {
        this.messageBus = t
    }
    getWidth() {
        return yt(this, void 0, void 0, function*() {
            const {width: t} = yield this.messageBus.sendAsync("OBR_ACTION_GET_WIDTH", {});
            return t
        })
    }
    setWidth(t) {
        return yt(this, void 0, void 0, function*() {
            yield this.messageBus.sendAsync("OBR_ACTION_SET_WIDTH", {
                width: t
            })
        })
    }
    getHeight() {
        return yt(this, void 0, void 0, function*() {
            const {height: t} = yield this.messageBus.sendAsync("OBR_ACTION_GET_HEIGHT", {});
            return t
        })
    }
    setHeight(t) {
        return yt(this, void 0, void 0, function*() {
            yield this.messageBus.sendAsync("OBR_ACTION_SET_HEIGHT", {
                height: t
            })
        })
    }
    getBadgeText() {
        return yt(this, void 0, void 0, function*() {
            const {badgeText: t} = yield this.messageBus.sendAsync("OBR_ACTION_GET_BADGE_TEXT", {});
            return t
        })
    }
    setBadgeText(t) {
        return yt(this, void 0, void 0, function*() {
            yield this.messageBus.sendAsync("OBR_ACTION_SET_BADGE_TEXT", {
                badgeText: t
            })
        })
    }
    getBadgeBackgroundColor() {
        return yt(this, void 0, void 0, function*() {
            const {badgeBackgroundColor: t} = yield this.messageBus.sendAsync("OBR_ACTION_GET_BADGE_BACKGROUND_COLOR", {});
            return t
        })
    }
    setBadgeBackgroundColor(t) {
        return yt(this, void 0, void 0, function*() {
            yield this.messageBus.sendAsync("OBR_ACTION_SET_BADGE_BACKGROUND_COLOR", {
                badgeBackgroundColor: t
            })
        })
    }
    getIcon() {
        return yt(this, void 0, void 0, function*() {
            const {icon: t} = yield this.messageBus.sendAsync("OBR_ACTION_GET_ICON", {});
            return t
        })
    }
    setIcon(t) {
        return yt(this, void 0, void 0, function*() {
            const n = Sr([{
                icon: t
            }]);
            yield this.messageBus.sendAsync("OBR_ACTION_SET_ICON", {
                icon: n[0].icon
            })
        })
    }
    getTitle() {
        return yt(this, void 0, void 0, function*() {
            const {title: t} = yield this.messageBus.sendAsync("OBR_ACTION_GET_TITLE", {});
            return t
        })
    }
    setTitle(t) {
        return yt(this, void 0, void 0, function*() {
            yield this.messageBus.sendAsync("OBR_ACTION_SET_TITLE", {
                title: t
            })
        })
    }
    isOpen() {
        return yt(this, void 0, void 0, function*() {
            const {isOpen: t} = yield this.messageBus.sendAsync("OBR_ACTION_GET_IS_OPEN", {});
            return t
        })
    }
    onOpenChange(t) {
        const n = i=>{
            t(i.isOpen)
        }
        ;
        return this.messageBus.send("OBR_ACTION_IS_OPEN_SUBSCRIBE", {}),
        this.messageBus.on("OBR_ACTION_IS_OPEN_EVENT_CHANGE", n),
        ()=>{
            this.messageBus.send("OBR_IS_OPEN_ACTION_UNSUBSCRIBE", {}),
            this.messageBus.off("OBR_ACTION_IS_OPEN_EVENT_CHANGE", n)
        }
    }
}
var J2 = globalThis && globalThis.__awaiter || function(e, t, n, i) {
    function r(a) {
        return a instanceof n ? a : new n(function(o) {
            o(a)
        }
        )
    }
    return new (n || (n = Promise))(function(a, o) {
        function l(f) {
            try {
                c(i.next(f))
            } catch (u) {
                o(u)
            }
        }
        function s(f) {
            try {
                c(i.throw(f))
            } catch (u) {
                o(u)
            }
        }
        function c(f) {
            f.done ? a(f.value) : r(f.value).then(l, s)
        }
        c((i = i.apply(e, t || [])).next())
    }
    )
}
;
Hd();
class q2 {
    constructor(t) {
        this.messageBus = t
    }
    startItemInteraction(t) {
        return J2(this, void 0, void 0, function*() {
            const {id: n} = yield this.messageBus.sendAsync("OBR_INTERACTION_START_ITEM_INTERACTION", {
                baseState: t
            });
            let i = t;
            return [o=>{
                const [l,s] = Xd(i, o);
                return i = l,
                this.messageBus.send("OBR_INTERACTION_UPDATE_ITEM_INTERACTION", {
                    id: n,
                    patches: s
                }),
                l
            }
            , ()=>{
                this.messageBus.send("OBR_INTERACTION_STOP_ITEM_INTERACTION", {
                    id: n
                })
            }
            ]
        })
    }
}
var ep = globalThis && globalThis.__awaiter || function(e, t, n, i) {
    function r(a) {
        return a instanceof n ? a : new n(function(o) {
            o(a)
        }
        )
    }
    return new (n || (n = Promise))(function(a, o) {
        function l(f) {
            try {
                c(i.next(f))
            } catch (u) {
                o(u)
            }
        }
        function s(f) {
            try {
                c(i.throw(f))
            } catch (u) {
                o(u)
            }
        }
        function c(f) {
            f.done ? a(f.value) : r(f.value).then(l, s)
        }
        c((i = i.apply(e, t || [])).next())
    }
    )
}
;
class tp {
    constructor(t) {
        this.messageBus = t
    }
    getPlayers() {
        return ep(this, void 0, void 0, function*() {
            const {players: t} = yield this.messageBus.sendAsync("OBR_PARTY_GET_PLAYERS", {});
            return t
        })
    }
    onChange(t) {
        const n = i=>{
            t(i.players)
        }
        ;
        return this.messageBus.send("OBR_PARTY_SUBSCRIBE", {}),
        this.messageBus.on("OBR_PARTY_EVENT_CHANGE", n),
        ()=>{
            this.messageBus.send("OBR_PARTY_UNSUBSCRIBE", {}),
            this.messageBus.off("OBR_PARTY_EVENT_CHANGE", n)
        }
    }
}
var Ll = globalThis && globalThis.__awaiter || function(e, t, n, i) {
    function r(a) {
        return a instanceof n ? a : new n(function(o) {
            o(a)
        }
        )
    }
    return new (n || (n = Promise))(function(a, o) {
        function l(f) {
            try {
                c(i.next(f))
            } catch (u) {
                o(u)
            }
        }
        function s(f) {
            try {
                c(i.throw(f))
            } catch (u) {
                o(u)
            }
        }
        function c(f) {
            f.done ? a(f.value) : r(f.value).then(l, s)
        }
        c((i = i.apply(e, t || [])).next())
    }
    )
}
;
class np {
    constructor(t) {
        this.messageBus = t
    }
    get id() {
        return this.messageBus.roomId
    }
    getPermissions() {
        return Ll(this, void 0, void 0, function*() {
            const {permissions: t} = yield this.messageBus.sendAsync("OBR_ROOM_GET_PERMISSIONS", {});
            return t
        })
    }
    getMetadata() {
        return Ll(this, void 0, void 0, function*() {
            const {metadata: t} = yield this.messageBus.sendAsync("OBR_ROOM_GET_METADATA", {});
            return t
        })
    }
    setMetadata(t) {
        return Ll(this, void 0, void 0, function*() {
            yield this.messageBus.sendAsync("OBR_ROOM_SET_METADATA", {
                update: t
            })
        })
    }
    onMetadataChange(t) {
        const n = i=>{
            t(i.metadata)
        }
        ;
        return this.messageBus.send("OBR_ROOM_METADATA_SUBSCRIBE", {}),
        this.messageBus.on("OBR_ROOM_METADATA_EVENT_CHANGE", n),
        ()=>{
            this.messageBus.send("OBR_METADATA_ROOM_UNSUBSCRIBE", {}),
            this.messageBus.off("OBR_ROOM_METADATA_EVENT_CHANGE", n)
        }
    }
    onPermissionsChange(t) {
        const n = i=>{
            t(i.permissions)
        }
        ;
        return this.messageBus.send("OBR_ROOM_PERMISSIONS_SUBSCRIBE", {}),
        this.messageBus.on("OBR_ROOM_PERMISSIONS_EVENT_CHANGE", n),
        ()=>{
            this.messageBus.send("OBR_PERMISSIONS_ROOM_UNSUBSCRIBE", {}),
            this.messageBus.off("OBR_ROOM_PERMISSIONS_EVENT_CHANGE", n)
        }
    }
}
var ip = globalThis && globalThis.__awaiter || function(e, t, n, i) {
    function r(a) {
        return a instanceof n ? a : new n(function(o) {
            o(a)
        }
        )
    }
    return new (n || (n = Promise))(function(a, o) {
        function l(f) {
            try {
                c(i.next(f))
            } catch (u) {
                o(u)
            }
        }
        function s(f) {
            try {
                c(i.throw(f))
            } catch (u) {
                o(u)
            }
        }
        function c(f) {
            f.done ? a(f.value) : r(f.value).then(l, s)
        }
        c((i = i.apply(e, t || [])).next())
    }
    )
}
;
class rp {
    constructor(t) {
        this.messageBus = t
    }
    getTheme() {
        return ip(this, void 0, void 0, function*() {
            const {theme: t} = yield this.messageBus.sendAsync("OBR_THEME_GET_THEME", {});
            return t
        })
    }
    onChange(t) {
        const n = i=>{
            t(i.theme)
        }
        ;
        return this.messageBus.send("OBR_THEME_SUBSCRIBE", {}),
        this.messageBus.on("OBR_THEME_EVENT_CHANGE", n),
        ()=>{
            this.messageBus.send("OBR_THEME_UNSUBSCRIBE", {}),
            this.messageBus.off("OBR_THEME_EVENT_CHANGE", n)
        }
    }
}
const ap = typeof atob == "function"
  , $d = typeof Buffer == "function"
  , Ec = typeof TextDecoder == "function" ? new TextDecoder : void 0;
typeof TextEncoder == "function" && new TextEncoder;
const op = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
  , lp = Array.prototype.slice.call(op)
  , _a = (e=>{
    let t = {};
    return e.forEach((n,i)=>t[n] = i),
    t
}
)(lp)
  , sp = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/
  , Yn = String.fromCharCode.bind(String)
  , Oc = typeof Uint8Array.from == "function" ? Uint8Array.from.bind(Uint8Array) : e=>new Uint8Array(Array.prototype.slice.call(e, 0))
  , Th = e=>e.replace(/[^A-Za-z0-9\+\/]/g, "")
  , dp = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g
  , fp = e=>{
    switch (e.length) {
    case 4:
        var t = (7 & e.charCodeAt(0)) << 18 | (63 & e.charCodeAt(1)) << 12 | (63 & e.charCodeAt(2)) << 6 | 63 & e.charCodeAt(3)
          , n = t - 65536;
        return Yn((n >>> 10) + 55296) + Yn((n & 1023) + 56320);
    case 3:
        return Yn((15 & e.charCodeAt(0)) << 12 | (63 & e.charCodeAt(1)) << 6 | 63 & e.charCodeAt(2));
    default:
        return Yn((31 & e.charCodeAt(0)) << 6 | 63 & e.charCodeAt(1))
    }
}
  , cp = e=>e.replace(dp, fp)
  , up = e=>{
    if (e = e.replace(/\s+/g, ""),
    !sp.test(e))
        throw new TypeError("malformed base64.");
    e += "==".slice(2 - (e.length & 3));
    let t, n = "", i, r;
    for (let a = 0; a < e.length; )
        t = _a[e.charAt(a++)] << 18 | _a[e.charAt(a++)] << 12 | (i = _a[e.charAt(a++)]) << 6 | (r = _a[e.charAt(a++)]),
        n += i === 64 ? Yn(t >> 16 & 255) : r === 64 ? Yn(t >> 16 & 255, t >> 8 & 255) : Yn(t >> 16 & 255, t >> 8 & 255, t & 255);
    return n
}
  , vh = ap ? e=>atob(Th(e)) : $d ? e=>Buffer.from(e, "base64").toString("binary") : up
  , hp = $d ? e=>Oc(Buffer.from(e, "base64")) : e=>Oc(vh(e).split("").map(t=>t.charCodeAt(0)))
  , pp = $d ? e=>Buffer.from(e, "base64").toString("utf8") : Ec ? e=>Ec.decode(hp(e)) : e=>cp(vh(e))
  , gp = e=>Th(e.replace(/[-_]/g, t=>t == "-" ? "+" : "/"))
  , mp = e=>pp(gp(e));
function yp() {
    const t = new URLSearchParams(window.location.search).get("obrref");
    let n = ""
      , i = "";
    if (t) {
        const a = mp(t).split(" ");
        a.length === 2 && (n = a[0],
        i = a[1])
    }
    return {
        origin: n,
        roomId: i
    }
}
var wc;
(function(e) {
    e[e.MOVE = 0] = "MOVE",
    e[e.LINE = 1] = "LINE",
    e[e.QUAD = 2] = "QUAD",
    e[e.CONIC = 3] = "CONIC",
    e[e.CUBIC = 4] = "CUBIC",
    e[e.CLOSE = 5] = "CLOSE"
}
)(wc || (wc = {}));
const js = yp()
  , Qe = new S2(js.origin,js.roomId)
  , xp = new g2(Qe)
  , Tp = new p2(Qe)
  , vp = new tp(Qe)
  , bp = new R2(Qe)
  , Ep = new X2(Qe)
  , Op = new $2(Qe)
  , wp = new Z2(Qe)
  , Ap = new Y2(Qe)
  , kp = new K2(Qe)
  , Ip = new Q2(Qe)
  , Cp = new q2(Qe)
  , Sp = new np(Qe)
  , Rp = new rp(Qe)
  , W = {
    onReady: e=>{
        Qe.ready ? e() : Qe.once("OBR_READY", ()=>e())
    }
    ,
    get isReady() {
        return Qe.ready
    },
    viewport: xp,
    player: Tp,
    party: vp,
    notification: bp,
    scene: Ep,
    contextMenu: Op,
    tool: wp,
    popover: Ap,
    modal: kp,
    action: Ip,
    interaction: Cp,
    room: Sp,
    theme: Rp,
    isAvailable: !!js.origin
};
const D = e=>{
    const {children: t} = e;
    return d.jsx("span", {
        className: "outline",
        children: t
    })
}
  , bh = "https://fabula-ultima-character-extension.onrender.com/assets/bgtechno-346d9ffe.jpg"
  , Eh = "https://fabula-ultima-character-extension.onrender.com/assets/bgfantasy-4d2a3c10.jpg"
  , Mp = ({theme: e, children: t, message: n})=>d.jsxs("div", {
    style: {
        backgroundImage: `url(${e === "fantasy" ? Eh : bh})`,
        backgroundSize: "contain",
        height: 540,
        width: 550,
        overflow: "hidden"
    },
    children: [d.jsx("div", {
        className: "scrollable-container",
        style: {
            overflow: "scroll",
            height: 500,
            marginTop: 20,
            paddingLeft: 30,
            paddingRight: 30
        },
        children: t
    }), n && n !== "" && d.jsx("div", {
        style: {
            position: "absolute",
            background: "#222",
            borderRadius: 4,
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            margin: "auto",
            width: 300,
            height: 28,
            padding: 8,
            textAlign: "center"
        },
        children: d.jsx("span", {
            className: "outline",
            style: {
                fontSize: 12
            },
            children: n
        })
    })]
})
  , Ac = ({theme: e, title: t, message: n})=>d.jsx("div", {
    style: {
        backgroundImage: `url(${e === "fantasy" ? Eh : bh})`,
        backgroundSize: "contain",
        height: 540,
        width: 550,
        overflow: "hidden"
    },
    children: d.jsxs("div", {
        className: "scrollable-container",
        style: {
            overflow: "scroll",
            height: 500,
            marginTop: 40,
            paddingLeft: 30,
            paddingRight: 30
        },
        children: [d.jsx("div", {
            className: "outline",
            style: {
                color: "red",
                fontSize: 14
            },
            children: t
        }), d.jsx("div", {
            className: "outline",
            style: {
                fontSize: 14
            },
            children: n
        })]
    })
})
  , ue = e=>{
    if (e === "d6")
        return 6;
    if (e === "d8")
        return 8;
    if (e === "d10")
        return 10;
    if (e === "d12")
        return 12
}
  , F = e=>{
    if (e == null)
        return 0;
    const t = Number(e);
    return isNaN(t) ? 0 : t
}
  , _p = ({player: e, tab: t, setTab: n, setPlayer: i, updatePlayer: r, updateNoteItem: a})=>d.jsxs("div", {
    children: [t !== "link" ? d.jsxs("span", {
        children: [d.jsx("button", {
            className: "button",
            style: {
                marginLeft: 4,
                width: "auto",
                padding: 5
            },
            onClick: ()=>{
                n("stats")
            }
            ,
            children: "Stats/Equipment"
        }), d.jsx("button", {
            className: "button",
            style: {
                marginLeft: 4,
                width: "auto",
                padding: 5
            },
            onClick: ()=>{
                n("skills")
            }
            ,
            children: "Skills/Spells"
        }), d.jsx("button", {
            className: "button",
            style: {
                marginLeft: 4,
                width: "auto",
                padding: 5,
                marginRight: 6
            },
            onClick: ()=>{
                n("actions")
            }
            ,
            children: "Actions/Rolls"
        })]
    }) : d.jsx("span", {
        className: "outline",
        style: {
            display: "inline-block",
            marginRight: 80,
            fontSize: 13
        },
        children: "Link stats to owlbear items"
    }), d.jsx(D, {
        children: "HP:"
    }), d.jsx("input", {
        className: "input-stat",
        type: "number",
        style: {
            width: 20,
            color: "Red"
        },
        onChange: o=>{
            const l = {
                ...e
            }
              , s = F(e.stats.maxHP);
            let c = parseInt(o.target.value, 0);
            isNaN(c) ? l.stats.currentHP = c : l.stats.currentHP = s > c ? c : s,
            l.linkedStats && a(l.linkedStats.currentHP || "", F(l.stats.currentHP), "currentHP", s),
            r(l)
        }
        ,
        value: e.stats.currentHP,
        onBlur: ()=>{
            const o = {
                ...e
            };
            isNaN(F(o.stats.currentHP)) && (o.stats.currentHP = 0,
            r(o))
        }
    }), d.jsx(D, {
        children: "MP:"
    }), d.jsx("input", {
        className: "input-stat",
        type: "number",
        style: {
            width: 20,
            color: "LightBlue"
        },
        onChange: o=>{
            const l = {
                ...e
            }
              , s = (ue(e.attributes.wil) || 0) * 5 + F(e.stats.mpMod) + e.traits.level;
            let c = parseInt(o.target.value, 0);
            isNaN(c) ? l.stats.currentMP = c : l.stats.currentMP = s > c ? c : s,
            l.linkedStats && a(l.linkedStats.currentMP || "", F(l.stats.currentMP), "currentMP", s),
            r(l)
        }
        ,
        value: e.stats.currentMP,
        onBlur: ()=>{
            const o = {
                ...e
            };
            isNaN(F(o.stats.currentMP)) && (o.stats.currentMP = 0,
            r(o))
        }
    }), d.jsx(D, {
        children: "IP:"
    }), d.jsx("input", {
        className: "input-stat",
        type: "number",
        style: {
            width: 20,
            color: "Orange"
        },
        onChange: o=>{
            const l = {
                ...e
            }
              , s = F(e.stats.maxIP);
            let c = parseInt(o.target.value, 0);
            isNaN(c) ? l.stats.currentIP = c : l.stats.currentIP = s > c ? c : s,
            l.linkedStats && a(l.linkedStats.currentIP || "", F(l.stats.currentIP), "currentIP"),
            r(l)
        }
        ,
        value: e.stats.currentIP,
        onBlur: ()=>{
            const o = {
                ...e
            };
            isNaN(F(o.stats.currentIP)) && (o.stats.currentIP = 0,
            r(o))
        }
    }), d.jsx(D, {
        children: "FP:"
    }), d.jsx("input", {
        className: "input-stat",
        type: "number",
        style: {
            width: 20,
            color: "White"
        },
        onChange: o=>{
            const l = {
                ...e
            };
            l.stats.fabula = parseInt(o.target.value),
            l.linkedStats && a(l.linkedStats.fabula || "", F(l.stats.fabula), "fabula"),
            r(l)
        }
        ,
        value: e.stats.fabula,
        onBlur: ()=>{
            const o = {
                ...e
            };
            isNaN(F(o.stats.fabula)) && (o.stats.fabula = 0,
            r(o))
        }
    }), d.jsx("button", {
        className: "button",
        style: {
            float: "right",
            width: "auto",
            padding: 5,
            color: "red",
            marginTop: 2
        },
        onClick: ()=>{
            i(null)
        }
        ,
        children: "Close"
    })]
})
  , Np = ({player: e, updatePlayer: t})=>d.jsxs("div", {
    style: {
        display: "flex",
        gap: 8,
        alignItems: "center"
    },
    children: [d.jsxs("div", {
        style: {
            textAlign: "center",
            position: "relative",
            backgroundImage: `url(${e.traits && e.traits.avatar ? e.traits.avatar : ""})`,
            minWidth: 100,
            height: 100,
            backgroundSize: "cover"
        },
        children: [(!e.traits || !e.traits.avatar) && d.jsx("div", {
            className: "outline",
            style: {
                width: 100,
                color: "orange"
            },
            children: "Select a token and press change to add an avatar to your sheet"
        }), d.jsx("button", {
            className: "button",
            style: {
                width: 50,
                padding: 0,
                height: 15,
                fontSize: 8,
                position: "absolute",
                left: 24,
                bottom: -3
            },
            onClick: async()=>{
                const n = await W.player.getSelection();
                if (n && n[0]) {
                    const i = await W.scene.items.getItems([n[0]])
                      , r = {
                        ...e
                    }
                      , a = i[0];
                    a.image && a.image.url && (r.traits.avatar = a.image.url,
                    t(r))
                }
            }
            ,
            children: "Change"
        })]
    }), d.jsxs("div", {
        children: [d.jsxs("div", {
            style: {
                display: "flex",
                flexDirection: "row",
                alignItems: "center"
            },
            children: [d.jsx("div", {
                style: {
                    width: 40
                },
                children: d.jsx(D, {
                    children: "Name: "
                })
            }), d.jsx("input", {
                className: "input-stat",
                style: {
                    width: 338,
                    color: "white"
                },
                value: e.traits && e.traits.name || "",
                onChange: n=>{
                    const i = {
                        ...e
                    };
                    i.traits || (i.traits = {
                        name: "",
                        identity: "",
                        theme: "",
                        origin: "",
                        avatar: "",
                        level: 5
                    }),
                    i.traits.name = n.target.value,
                    t(i)
                }
                ,
                placeholder: "Your name and pronouns"
            })]
        }), d.jsxs("div", {
            style: {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                paddingTop: 4,
                justifyContent: "space-between"
            },
            children: [d.jsx("div", {
                style: {
                    width: 37
                },
                children: d.jsx(D, {
                    children: "Theme: "
                })
            }), d.jsx("input", {
                className: "input-stat",
                style: {
                    width: 140,
                    color: "white"
                },
                value: e.traits && e.traits.theme || "",
                onChange: n=>{
                    const i = {
                        ...e
                    };
                    i.traits || (i.traits = {
                        name: "",
                        identity: "",
                        theme: "",
                        origin: "",
                        avatar: "",
                        level: 5
                    }),
                    i.traits.theme = n.target.value,
                    t(i)
                }
                ,
                placeholder: "A strong ideal"
            }), d.jsx("br", {}), d.jsx("div", {
                style: {
                    width: 35
                },
                children: d.jsx(D, {
                    children: "Origin: "
                })
            }), d.jsx("input", {
                className: "input-stat",
                style: {
                    width: 140,
                    color: "white"
                },
                value: e.traits && e.traits.origin || "",
                onChange: n=>{
                    const i = {
                        ...e
                    };
                    i.traits || (i.traits = {
                        name: "",
                        identity: "",
                        theme: "",
                        origin: "",
                        avatar: "",
                        level: 5
                    }),
                    i.traits.origin = n.target.value,
                    t(i)
                }
                ,
                placeholder: "Where they are from"
            })]
        }), d.jsxs("div", {
            style: {
                display: "flex",
                flexDirection: "row",
                paddingTop: 4,
                alignItems: "center"
            },
            children: [d.jsx("div", {
                style: {
                    width: 40
                },
                children: d.jsx(D, {
                    children: "Identity: "
                })
            }), d.jsx("input", {
                className: "input-stat",
                style: {
                    width: 338,
                    color: "white",
                    height: 25
                },
                value: e.traits && e.traits.identity || "",
                onChange: n=>{
                    const i = {
                        ...e
                    };
                    i.traits || (i.traits = {
                        name: "",
                        identity: "",
                        theme: "",
                        origin: "",
                        avatar: "",
                        level: 5
                    }),
                    i.traits.identity = n.target.value,
                    t(i)
                }
                ,
                placeholder: "This is a short sentence that sums up your character's general concept"
            })]
        })]
    })]
})
  , Up = ({bond: e, index: t, updateBond: n})=>d.jsxs("div", {
    children: [d.jsx("input", {
        className: "input-stat",
        style: {
            width: 45,
            color: "white",
            marginLeft: 0,
            fontSize: 10
        },
        value: e.name,
        placeholder: "Bond",
        onChange: i=>{
            const r = {
                ...e
            };
            r.name = i.target.value,
            n(r, t)
        }
    }), d.jsxs("select", {
        className: "bond-stat",
        value: e.emotionOne,
        onChange: i=>{
            const r = {
                ...e
            };
            r.emotionOne = i.target.value,
            n(r, t)
        }
        ,
        children: [d.jsx("option", {
            value: ""
        }), d.jsx("option", {
            value: "Admiration",
            children: "Admiration"
        }), d.jsx("option", {
            value: "Inferiority",
            children: "Inferiority"
        })]
    }), d.jsxs("select", {
        className: "bond-stat",
        value: e.emotionTwo,
        onChange: i=>{
            const r = {
                ...e
            };
            r.emotionTwo = i.target.value,
            n(r, t)
        }
        ,
        children: [d.jsx("option", {
            value: ""
        }), d.jsx("option", {
            value: "Loyalty",
            children: "Loyalty"
        }), d.jsx("option", {
            value: "Mistrust",
            children: "Mistrust"
        })]
    }), d.jsxs("select", {
        className: "bond-stat",
        value: e.emotionThree,
        onChange: i=>{
            const r = {
                ...e
            };
            r.emotionThree = i.target.value,
            n(r, t)
        }
        ,
        children: [d.jsx("option", {
            value: ""
        }), d.jsx("option", {
            value: "Affection",
            children: "Affection"
        }), d.jsx("option", {
            value: "Hatred",
            children: "Hatred"
        })]
    })]
})
  , Lp = ({player: e, updatePlayer: t})=>{
    const n = (i,r)=>{
        const a = {
            ...e
        };
        a.bonds[r] = i,
        t(a)
    }
    ;
    return d.jsx("div", {
        className: "bonds",
        children: e.bonds.map((i,r)=>d.jsx(Up, {
            bond: i,
            index: r,
            updateBond: n
        }, r))
    })
}
  , Pp = ({player: e, updatePlayer: t})=>d.jsx("textarea", {
    className: "input-stat",
    rows: 40,
    cols: 89,
    style: {
        textAlign: "left",
        color: "#FFF",
        height: 150,
        margin: 0,
        width: 485,
        padding: 4
    },
    value: e.items.notes,
    onChange: n=>{
        const i = {
            ...e
        };
        i.items.notes = n.target.value,
        t(i)
    }
})
  , jp = ({player: e})=>d.jsxs("div", {
    style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#333",
        borderRadius: 4,
        height: 24
    },
    children: [d.jsx("div", {
        className: "outline",
        style: {
            marginRight: 4
        },
        children: d.jsx(D, {
            children: "Max HP:"
        })
    }), d.jsx("div", {
        className: "outline",
        style: {
            color: "red",
            marginRight: 4
        },
        children: e.stats.maxHP
    }), d.jsx("div", {
        className: "outline",
        style: {
            marginRight: 4
        },
        children: "Max MP:"
    }), d.jsx("div", {
        className: "outline",
        style: {
            marginRight: 4,
            color: "lightblue"
        },
        children: e.stats.maxMP
    }), d.jsx("div", {
        className: "outline",
        style: {
            marginRight: 4
        },
        children: "Max IP:"
    }), d.jsx("div", {
        className: "outline",
        style: {
            color: "orange",
            marginRight: 4
        },
        children: e.stats.maxIP
    }), d.jsx("div", {
        className: "outline",
        style: {
            marginRight: 4
        },
        children: "DEF:"
    }), d.jsx("div", {
        className: "outline",
        style: {
            color: "violet",
            marginRight: 4
        },
        children: e.stats.defense
    }), d.jsx("div", {
        className: "outline",
        style: {
            marginRight: 4
        },
        children: "M.DEF:"
    }), d.jsx("div", {
        className: "outline",
        style: {
            color: "cyan",
            marginRight: 4
        },
        children: e.stats.mDefense
    }), d.jsx("div", {
        className: "outline",
        style: {
            marginRight: 4
        },
        children: "DEX:"
    }), d.jsx("div", {
        className: "outline",
        style: {
            color: "lightgrey",
            marginRight: 4
        },
        children: e.attributes.currentdex
    }), d.jsx("div", {
        className: "outline",
        style: {
            marginRight: 4
        },
        children: "INS:"
    }), d.jsx("div", {
        className: "outline",
        style: {
            color: "lightgrey",
            marginRight: 4
        },
        children: e.attributes.currentins
    }), d.jsx("div", {
        className: "outline",
        style: {
            marginRight: 4
        },
        children: "MIG:"
    }), d.jsx("div", {
        className: "outline",
        style: {
            color: "lightgrey",
            marginRight: 4
        },
        children: e.attributes.currentmig
    }), d.jsx("div", {
        className: "outline",
        style: {
            marginRight: 4
        },
        children: "WIL:"
    }), d.jsx("div", {
        className: "outline",
        style: {
            color: "lightgrey",
            marginRight: 4
        },
        children: e.attributes.currentwil
    })]
})
  , Bp = ({player: e, updatePlayer: t, sendSkill: n})=>d.jsxs("div", {
    style: {
        display: "flex",
        justifyContent: "left",
        flexDirection: "column",
        gap: 4,
        marginLeft: 8
    },
    children: [d.jsxs("div", {
        children: [d.jsx("div", {
            children: d.jsx(D, {
                children: "Accessory: "
            })
        }), d.jsx("input", {
            className: "input-stat",
            style: {
                width: 300,
                color: "white",
                marginLeft: 0,
                marginRight: 4,
                fontSize: 10
            },
            value: e.items.accessory,
            onChange: i=>{
                const r = {
                    ...e
                };
                r.items.accessory = i.target.value,
                t(r)
            }
        }), d.jsx("button", {
            className: "button",
            style: {
                marginRight: 4,
                width: 40
            },
            onClick: ()=>n({
                name: "Accessory",
                detail: e.items.accessory
            }),
            children: "Show"
        })]
    }), d.jsxs("div", {
        children: [d.jsx("div", {
            children: d.jsx(D, {
                children: "Armor: "
            })
        }), d.jsx("input", {
            className: "input-stat",
            style: {
                width: 300,
                color: "white",
                marginLeft: 0,
                marginRight: 4,
                fontSize: 10
            },
            value: e.items.armor,
            onChange: i=>{
                const r = {
                    ...e
                };
                r.items.armor = i.target.value,
                t(r)
            }
        }), d.jsx("button", {
            className: "button",
            style: {
                marginRight: 4,
                width: 40
            },
            onClick: ()=>n({
                name: "Armor",
                detail: e.items.armor
            }),
            children: "Show"
        })]
    }), d.jsxs("div", {
        children: [d.jsx("div", {
            children: d.jsx(D, {
                children: "Main Hand: "
            })
        }), d.jsx("input", {
            className: "input-stat",
            style: {
                width: 300,
                color: "white",
                marginLeft: 0,
                marginRight: 4,
                fontSize: 10
            },
            value: e.items.mainhand,
            onChange: i=>{
                const r = {
                    ...e
                };
                r.items.mainhand = i.target.value,
                t(r)
            }
        }), d.jsx("button", {
            className: "button",
            style: {
                marginRight: 4,
                width: 40
            },
            onClick: ()=>n({
                name: "Main Hand",
                detail: e.items.mainhand
            }),
            children: "Show"
        })]
    }), d.jsxs("div", {
        children: [d.jsx("div", {
            children: d.jsx(D, {
                children: "Off Hand: "
            })
        }), d.jsx("input", {
            className: "input-stat",
            style: {
                width: 300,
                color: "white",
                marginLeft: 0,
                marginRight: 4,
                fontSize: 10
            },
            value: e.items.offhand,
            onChange: i=>{
                const r = {
                    ...e
                };
                r.items.offhand = i.target.value,
                t(r)
            }
        }), d.jsx("button", {
            className: "button",
            style: {
                marginRight: 4,
                width: 40
            },
            onClick: ()=>n({
                name: "Off Hand",
                detail: e.items.offhand
            }),
            children: "Show"
        })]
    })]
})
  , zp = ({player: e, updatePlayer: t, updateNoteItem: n})=>d.jsxs("div", {
    children: [d.jsx(D, {
        children: "Level:"
    }), d.jsx("input", {
        className: "input-stat",
        style: {
            width: 20,
            color: "white"
        },
        type: "number",
        value: e.traits && e.traits.level || 5,
        onChange: i=>{
            const r = {
                ...e
            };
            r.traits || (r.traits = {
                name: "",
                identity: "",
                theme: "",
                origin: "",
                avatar: "",
                level: 5
            }),
            r.stats.maxHP = (ue(e.attributes.mig) || 0) * 5 + F(e.stats.hpMod) + parseInt(i.target.value),
            r.stats.maxMP = (ue(e.attributes.wil) || 0) * 5 + F(e.stats.mpMod) + parseInt(i.target.value),
            r.traits.level = parseInt(i.target.value),
            n(r.linkedStats.currentHP || "", F(r.stats.currentHP), "currentHP", F(r.stats.maxHP)),
            n(r.linkedStats.currentMP || "", F(r.stats.currentMP), "currentMP", F(r.stats.maxMP)),
            t(r)
        }
    }), d.jsx(D, {
        children: "Experience:"
    }), d.jsx("input", {
        className: "input-stat",
        type: "number",
        style: {
            width: 20,
            color: "lightgreen",
            marginRight: 0
        },
        value: e.stats.experience,
        onChange: i=>{
            const r = {
                ...e
            };
            r.stats.experience = parseInt(i.target.value),
            t(r)
        }
        ,
        onBlur: ()=>{
            const i = {
                ...e
            };
            isNaN(F(i.stats.experience)) && (i.stats.experience = 0,
            t(i))
        }
    }), d.jsx("button", {
        className: "button",
        style: {
            width: 80,
            marginLeft: 4,
            marginRight: 4,
            padding: 4
        },
        onClick: ()=>{
            const i = {
                ...e
            };
            i.stats.martialDef = !i.stats.martialDef,
            i.stats.martialDef ? i.stats.defense = F(i.stats.defenseMartial) : i.stats.defense = F(i.stats.defenseMod) + (ue(e.attributes.dex) || 0),
            i.linkedStats && n(i.linkedStats.defense || "", i.stats.defense, "defense"),
            t(i)
        }
        ,
        children: e.stats.martialDef ? "Martial" : "Non Martial"
    }), d.jsx(D, {
        children: e.stats.martialDef ? "Total Defense:" : "Defense Mod:"
    }), d.jsx("input", {
        className: "input-stat",
        type: "number",
        style: {
            width: 20,
            color: "violet"
        },
        value: e.stats.martialDef ? e.stats.defenseMartial : e.stats.defenseMod,
        onChange: i=>{
            const r = {
                ...e
            };
            e.stats.martialDef ? (r.stats.defenseMartial = parseInt(i.target.value),
            r.stats.defense = parseInt(i.target.value)) : (r.stats.defenseMod = parseInt(i.target.value, 0),
            r.stats.defense = parseInt(i.target.value) + ue(e.attributes.currentdex)),
            r.linkedStats && n(r.linkedStats.defense, r.stats.defense, "defense"),
            t(r)
        }
        ,
        onBlur: ()=>{
            const i = {
                ...e
            };
            isNaN(F(i.stats.defenseMartial)) && (i.stats.defenseMartial = 0,
            t(i)),
            isNaN(F(i.stats.defense)) && (i.stats.defense = 0,
            t(i)),
            isNaN(F(i.stats.defenseMod)) && (i.stats.defenseMod = 0,
            t(i))
        }
    }), d.jsx(D, {
        children: "Magic Defense Mod: "
    }), d.jsx("input", {
        className: "input-stat",
        type: "number",
        style: {
            width: 20,
            color: "cyan"
        },
        value: e.stats.mDefenseMod,
        onChange: i=>{
            const r = {
                ...e
            };
            r.stats.mDefenseMod = parseInt(i.target.value),
            r.stats.mDefense = parseInt(i.target.value) + ue(e.attributes.currentins),
            r.linkedStats && n(r.linkedStats.mDefense, r.stats.mDefense, "mDefense"),
            t(r)
        }
        ,
        onBlur: ()=>{
            const i = {
                ...e
            };
            isNaN(F(i.stats.mDefenseMod)) && (i.stats.mDefenseMod = 0,
            t(i)),
            isNaN(F(i.stats.mDefense)) && (i.stats.mDefense = 0,
            t(i))
        }
    })]
})
  , Dp = ({player: e, updatePlayer: t})=>d.jsxs("div", {
    style: {
        marginTop: 8
    },
    children: [d.jsx(D, {
        children: "Martial/Rituals: "
    }), d.jsx("input", {
        className: "input-stat",
        style: {
            width: 182,
            color: "white"
        },
        value: e.items.martialRitual,
        placeholder: "Melee/Armor/Ritualism/Elementalism/Etc.",
        onChange: n=>{
            const i = {
                ...e
            };
            i.items.martialRitual = n.target.value,
            t(i)
        }
    }), d.jsx(D, {
        children: "Modifiers - "
    }), d.jsx(D, {
        children: "HP: "
    }), d.jsx("input", {
        className: "input-stat",
        type: "number",
        style: {
            width: 20,
            color: "Red",
            marginRight: 4
        },
        value: e.stats.hpMod,
        onChange: n=>{
            const i = {
                ...e
            };
            i.stats.maxHP = ue(e.attributes.mig) * 5 + parseInt(n.target.value) + e.traits.level,
            i.stats.hpMod = parseInt(n.target.value),
            t(i)
        }
        ,
        onBlur: ()=>{
            const n = {
                ...e
            };
            isNaN(F(n.stats.hpMod)) && (n.stats.hpMod = 0,
            n.stats.maxHP = ue(e.attributes.mig) * 5 + e.traits.level,
            t(n))
        }
    }), d.jsx(D, {
        children: "MP: "
    }), d.jsx("input", {
        className: "input-stat",
        type: "number",
        style: {
            width: 20,
            color: "LightBlue",
            marginRight: 4
        },
        value: e.stats.mpMod,
        onChange: n=>{
            const i = {
                ...e
            };
            i.stats.maxMP = ue(e.attributes.wil) * 5 + parseInt(n.target.value) + e.traits.level,
            i.stats.mpMod = parseInt(n.target.value),
            t(i)
        }
        ,
        onBlur: ()=>{
            const n = {
                ...e
            };
            isNaN(F(n.stats.mpMod)) && (n.stats.mpMod = 0,
            n.stats.maxMP = ue(e.attributes.wil) * 5 + e.traits.level,
            t(n))
        }
    }), d.jsx(D, {
        style: {
            width: 20,
            color: "Orange",
            marginRight: 0
        },
        children: "IP:"
    }), d.jsx("input", {
        className: "input-stat",
        type: "number",
        style: {
            width: 20,
            color: "Orange",
            marginRight: 0
        },
        value: e.stats.ipMod,
        onChange: n=>{
            const i = {
                ...e
            };
            i.stats.maxIP = 6 + parseInt(n.target.value),
            i.stats.ipMod = parseInt(n.target.value),
            t(i)
        }
        ,
        onBlur: ()=>{
            const n = {
                ...e
            };
            isNaN(F(n.stats.ipMod)) && (n.stats.ipMod = 0,
            t(n))
        }
    })]
})
  , Fp = ({player: e, updatePlayer: t, getCurrentAttribute: n, sendSkill: i, addStatusEffectIcon: r, updateNoteItem: a})=>d.jsxs("div", {
    style: {
        display: "flex",
        justifyContent: "left",
        flexDirection: "column",
        gap: 4
    },
    children: [d.jsx("button", {
        className: "button",
        style: {
            marginTop: 54,
            marginLeft: -32,
            fontSize: 10,
            width: 52,
            height: 22,
            textTransform: "capitalize",
            backgroundColor: e.debuff.enraged ? "darkred" : "#222",
            color: e.debuff.enraged ? "white" : "#ffd433"
        },
        onClick: ()=>{
            const o = {
                ...e
            };
            o.debuff.enraged = !e.debuff.enraged,
            o.attributes.currentdex = n("dex"),
            o.attributes.currentins = n("ins"),
            o.stats.martialDef || (o.stats.defense = F(o.stats.defenseMod) + (ue(o.attributes.currentdex) || 0),
            o.linkedStats && a(o.linkedStats.defense || "", o.stats.defense, "defense")),
            o.stats.mDefense = F(o.stats.mDefenseMod) + (ue(o.attributes.currentins) || 0),
            o.linkedStats && a(o.linkedStats.mDefense || "", o.stats.mDefense, "mDefense"),
            t(o),
            i({
                name: e.traits.name + (o.debuff.enraged ? " suffers" : " recovers from") + " enraged!",
                info: "",
                detail: "Bringing their `DEX` to `" + o.attributes.currentdex + "` and `INS` to `" + o.attributes.currentins + "`"
            }),
            r(o)
        }
        ,
        children: "Enraged"
    }), d.jsx("button", {
        className: "button",
        style: {
            marginTop: 79,
            marginLeft: -32,
            marginRight: 10,
            fontSize: 10,
            width: 52,
            height: 22,
            textTransform: "capitalize",
            backgroundColor: e.debuff.poisoned ? "darkred" : "#222",
            color: e.debuff.poisoned ? "white" : "#ffd433"
        },
        onClick: ()=>{
            const o = {
                ...e
            };
            o.debuff.poisoned = !e.debuff.poisoned,
            o.attributes.currentmig = n("mig"),
            o.attributes.currentwil = n("wil"),
            t(o),
            i({
                name: e.traits.name + (o.debuff.poisoned ? " suffers" : " recovers from") + " poisoned!",
                info: "",
                detail: "Bringing their `MIG` to `" + o.attributes.currentmig + "` and `WIL` to `" + o.attributes.currentwil + "`"
            }),
            r(o)
        }
        ,
        children: "Poisoned"
    })]
})
  , Na = ({stat: e, condition: t, label: n, player: i, updatePlayer: r, getCurrentAttribute: a, sendSkill: o, addStatusEffectIcon: l, updateNoteItem: s})=>{
    var c, f;
    return d.jsxs("div", {
        style: {
            width: 120
        },
        children: [d.jsx("div", {
            children: d.jsxs(D, {
                children: [n, ":"]
            })
        }), d.jsxs("select", {
            className: "attribute-stat",
            style: {
                marginRight: 4
            },
            value: i.attributes[e],
            onChange: u=>{
                const y = {
                    ...i
                };
                y.attributes[e] = u.target.value,
                y.attributes["current" + e] = a(e),
                e === "mig" && (y.stats.maxHP = (ue(u.target.value) || 0) * 5 + F(i.stats.hpMod) + i.traits.level),
                e === "wil" && (y.stats.maxMP = (ue(u.target.value) || 0) * 5 + F(i.stats.mpMod) + i.traits.level),
                y.stats.martialDef || (y.stats.defense = F(y.stats.defenseMod) + (ue(y.attributes.currentdex) || 0),
                y.linkedStats && s(y.linkedStats.defense || "", y.stats.defense, "defense")),
                y.stats.mDefense = F(y.stats.mDefenseMod) + (ue(y.attributes.currentins) || 0),
                y.linkedStats && s(y.linkedStats.mDefense || "", y.stats.mDefense, "mDefense"),
                r(y),
                o({
                    name: i.traits.name + " changed their " + e.toUpperCase(),
                    info: "",
                    detail: "Bringing their `" + e.toUpperCase() + "` to `" + y.attributes["current" + e] + "`"
                })
            }
            ,
            children: [d.jsx("option", {
                value: "d12",
                children: "d12"
            }), d.jsx("option", {
                value: "d10",
                children: "d10"
            }), d.jsx("option", {
                value: "d8",
                children: "d8"
            }), d.jsx("option", {
                value: "d6",
                children: "d6"
            })]
        }), d.jsx("button", {
            className: "button",
            style: {
                marginLeft: 4,
                fontSize: 10,
                width: 40,
                height: 22,
                textTransform: "capitalize",
                backgroundColor: i.debuff[t] ? "darkred" : "#222",
                color: i.debuff[t] ? "white" : "#ffd433"
            },
            onClick: ()=>{
                const u = {
                    ...i
                };
                u.debuff[t] = !i.debuff[t],
                u.attributes["current" + e] = a(e),
                u.stats.martialDef || (u.stats.defense = F(u.stats.defenseMod) + (ue(u.attributes.currentdex) || 0),
                u.linkedStats && s(u.linkedStats.defense || "", u.stats.defense, "defense")),
                u.stats.mDefense = F(u.stats.mDefenseMod) + (ue(u.attributes.currentins) || 0),
                u.linkedStats && s(u.linkedStats.mDefense || "", u.stats.mDefense, "mDefense"),
                o({
                    name: i.traits.name + (u.debuff[t] ? " suffers" : " recovers from") + ` ${t}!`,
                    info: "",
                    detail: "Bringing their `" + e.toUpperCase() + "` to `" + u.attributes["current" + e] + "`"
                }),
                r(u),
                l(u)
            }
            ,
            children: t
        }), d.jsx("button", {
            className: "button",
            style: {
                marginLeft: 4,
                fontSize: 10,
                width: 24,
                height: 22,
                textTransform: "capitalize",
                backgroundColor: (c = i.buff) != null && c[e] ? "darkgreen" : "#222",
                color: (f = i.buff) != null && f[e] ? "white" : "#ffd433",
                cursor: "pointer",
                pointerEvents: "auto",
                position: "relative",
                zIndex: 1e3
            },
            onClick: ()=>{
                var y;
                const u = {
                    ...i
                };
                u.buff || (u.buff = {
                    dex: !1,
                    ins: !1,
                    mig: !1,
                    wil: !1
                }),
                u.buff[e] = !((y = i.buff) != null && y[e]),
                u.attributes["current" + e] = a(e),
                u.stats.martialDef || (u.stats.defense = F(u.stats.defenseMod) + (ue(u.attributes.currentdex) || 0),
                u.linkedStats && s(u.linkedStats.defense || "", u.stats.defense, "defense")),
                u.stats.mDefense = F(u.stats.mDefenseMod) + (ue(u.attributes.currentins) || 0),
                u.linkedStats && s(u.linkedStats.mDefense || "", u.stats.mDefense, "mDefense"),
                r(u),
                o({
                    name: i.traits.name + (u.buff[e] ? " gains a buff to" : " loses buff from") + " " + e.toUpperCase(),
                    info: "",
                    detail: "Their `" + e.toUpperCase() + "` is now `" + u.attributes["current" + e] + "`"
                })
            }
            ,
            children: "⬆"
        })]
    })
}
  , Hp = ({player: e, updatePlayer: t, getCurrentAttribute: n, sendSkill: i, addStatusEffectIcon: r, updateNoteItem: a})=>d.jsxs("div", {
    style: {
        display: "flex",
        justifyContent: "left",
        flexDirection: "column",
        width: 92,
        gap: 4
    },
    children: [d.jsx(Na, {
        stat: "dex",
        label: "Dexterity",
        condition: "slow",
        player: e,
        updatePlayer: t,
        getCurrentAttribute: n,
        sendSkill: i,
        addStatusEffectIcon: r,
        updateNoteItem: a
    }), d.jsx(Na, {
        stat: "ins",
        label: "Insight",
        condition: "dazed",
        player: e,
        updatePlayer: t,
        getCurrentAttribute: n,
        sendSkill: i,
        addStatusEffectIcon: r,
        updateNoteItem: a
    }), d.jsx(Na, {
        stat: "mig",
        label: "Might",
        condition: "weak",
        player: e,
        updatePlayer: t,
        getCurrentAttribute: n,
        sendSkill: i,
        addStatusEffectIcon: r,
        updateNoteItem: a
    }), d.jsx(Na, {
        stat: "wil",
        label: "Willpower",
        condition: "shaken",
        player: e,
        updatePlayer: t,
        getCurrentAttribute: n,
        sendSkill: i,
        addStatusEffectIcon: r,
        updateNoteItem: a
    })]
})
  , Wp = ({player: e, updatePlayer: t, updateNoteItem: n, healthModifier: i, setHealthModifier: r, mindModifier: a, setMindModifier: o, showMessage: l})=>d.jsxs("div", {
    style: {
        marginTop: 8,
        marginBottom: 8
    },
    children: [d.jsxs("span", {
        style: {
            display: "inline-block"
        },
        children: [d.jsx(D, {
            children: "Change Hitpoints:"
        }), d.jsx("input", {
            className: "input-stat",
            type: "number",
            style: {
                width: 20,
                color: "red"
            },
            value: i,
            onChange: s=>{
                r(Number(s.target.value))
            }
            ,
            onBlur: ()=>{
                isNaN(i) && r(0)
            }
        })]
    }), d.jsx("button", {
        className: "button",
        style: {
            width: 65,
            marginRight: 4,
            fontSize: 10,
            marginTop: 2
        },
        onClick: ()=>{
            const s = {
                ...e
            }
              , c = F(s.stats.maxHP);
            let f = F(s.stats.currentHP) - (i || 0);
            f < 0 && (f = 0),
            isNaN(f) ? s.stats.currentHP = f : s.stats.currentHP = c > f ? f : c,
            s.linkedStats && n(s.linkedStats.currentHP || "", F(s.stats.currentHP), "currentHP", c),
            t(s),
            l(`Inflicted ${i} damage!`),
            r(0)
        }
        ,
        children: "Damage"
    }), d.jsx("button", {
        className: "button",
        style: {
            marginRight: 14,
            width: 40,
            fontSize: 10
        },
        onClick: ()=>{
            const s = {
                ...e
            }
              , c = F(s.stats.maxHP);
            let f = F(s.stats.currentHP) + (i || 0);
            isNaN(f) ? s.stats.currentHP = f : s.stats.currentHP = c > f ? f : c,
            s.linkedStats && n(s.linkedStats.currentHP || "", F(s.stats.currentHP), "currentHP", c),
            t(s),
            l(`Healed ${i} hitpoints!`),
            r(0)
        }
        ,
        children: "Heal"
    }), d.jsxs("span", {
        style: {
            display: "inline-block"
        },
        children: [d.jsx(D, {
            children: "Change Mindpoints:"
        }), d.jsx("input", {
            className: "input-stat",
            type: "number",
            style: {
                width: 20,
                color: "lightblue"
            },
            value: a,
            onChange: s=>{
                o(Number(s.target.value))
            }
            ,
            onBlur: ()=>{
                isNaN(a) && o(0)
            }
        })]
    }), d.jsx("button", {
        className: "button",
        style: {
            width: 65,
            marginRight: 4,
            fontSize: 10,
            marginTop: 2
        },
        onClick: ()=>{
            const s = {
                ...e
            }
              , c = F(s.stats.maxMP);
            let f = F(s.stats.currentMP) - (a || 0);
            f < 0 && (f = 0),
            isNaN(f) ? s.stats.currentMP = f : s.stats.currentMP = c > f ? f : c,
            s.linkedStats && n(s.linkedStats.currentMP || "", F(s.stats.currentMP), "currentMP", c),
            t(s),
            l(`Spent ${a} mindpoints!`),
            o(0)
        }
        ,
        children: "Spend"
    }), d.jsx("button", {
        className: "button",
        style: {
            marginRight: 4,
            width: 40,
            fontSize: 10
        },
        onClick: ()=>{
            const s = {
                ...e
            }
              , c = F(s.stats.maxMP);
            let f = F(s.stats.currentMP) + (a || 0);
            isNaN(f) ? s.stats.currentMP = f : s.stats.currentMP = c > f ? f : c,
            s.linkedStats && n(s.linkedStats.currentMP || "", F(s.stats.currentMP), "currentMP", c),
            t(s),
            l(`Restored ${a} mindpoints!`),
            o(0)
        }
        ,
        children: "Restore"
    })]
})
  , mi = ({label: e, stat: t, player: n, updatePlayer: i, updateNoteItem: r})=>d.jsxs("div", {
    children: [d.jsx("span", {
        className: "outline",
        style: {
            display: "inline-block",
            width: 80
        },
        children: e
    }), d.jsx("input", {
        className: "input-stat",
        style: {
            width: 200,
            color: "white"
        },
        value: n.linkedStats[t],
        readOnly: !0
    }), d.jsx("button", {
        className: "button",
        style: {
            width: 96,
            padding: 5,
            marginRight: 4,
            marginLeft: "auto"
        },
        onClick: async()=>{
            const a = await W.player.getSelection();
            if (a && a[0]) {
                const o = {
                    ...n
                };
                o.linkedStats[t] = a[0],
                r(o.linkedStats[t] || "", F(typeof o.stats[t] == "boolean" ? 0 : o.stats[t]), t, t === "currentHP" ? F(o.stats.maxHP) : t === "currentMP" ? F(o.stats.maxMP) : null),
                i(o)
            }
        }
        ,
        children: "Link Selected Item"
    }), d.jsx("button", {
        className: "button",
        style: {
            width: 50,
            padding: 5,
            marginRight: 4,
            marginLeft: "auto"
        },
        onClick: async()=>{
            const a = {
                ...n
            };
            a.linkedStats[t] = "",
            i(a)
        }
        ,
        children: "Clear"
    })]
})
  , Gp = ({player: e, updatePlayer: t, updateNoteItem: n})=>{
    if (!e.linkedStats) {
        const i = {
            ...e
        };
        return i.linkedStats = {
            currentHP: "",
            currentMP: "",
            currentIP: "",
            defense: "",
            mDefense: "",
            fabula: ""
        },
        t(i),
        null
    }
    return d.jsxs(d.Fragment, {
        children: [d.jsx(mi, {
            label: "Current HP:",
            stat: "currentHP",
            player: e,
            updatePlayer: t,
            updateNoteItem: n
        }), d.jsx(mi, {
            label: "Current MP:",
            stat: "currentMP",
            player: e,
            updatePlayer: t,
            updateNoteItem: n
        }), d.jsx(mi, {
            label: "Current IP:",
            stat: "currentIP",
            player: e,
            updatePlayer: t,
            updateNoteItem: n
        }), d.jsx(mi, {
            label: "Defense:",
            stat: "defense",
            player: e,
            updatePlayer: t,
            updateNoteItem: n
        }), d.jsx(mi, {
            label: "Magic Defense:",
            stat: "mDefense",
            player: e,
            updatePlayer: t,
            updateNoteItem: n
        }), d.jsx(mi, {
            label: "Fabula Points :",
            stat: "fabula",
            player: e,
            updatePlayer: t,
            updateNoteItem: n
        }), d.jsx("hr", {}), d.jsx(D, {
            children: "Instructions: Select one item then press 'Link Selected Item' to sync text value of item to stats."
        })]
    })
}
  , Vp = e=>e.split("`").map((n,i)=>i % 2 !== 0 ? d.jsx("span", {
    style: {
        color: "moccasin"
    },
    children: n
}, "parseTilde" + i) : d.jsx("span", {
    children: n
}, "parseTilde" + i))
  , Xp = e=>e.split("*").map((n,i)=>i % 2 !== 0 ? d.jsx("span", {
    style: {
        color: "red"
    },
    children: n
}, "parseAsterisk" + i) : d.jsx("span", {
    children: Vp(n)
}, "parseAsterisk" + i))
  , Oh = e=>e === void 0 ? "" : e.split(`
`).map((n,i)=>n === "" ? d.jsx("div", {
    children: "‍"
}, "parseDetail" + i) : d.jsx("div", {
    children: Xp(n)
}, "parseDetail" + i))
  , wh = e=>e.substring(e.indexOf("<") + 1, e.lastIndexOf(">"))
  , Ah = e=>e.substring(e.indexOf("$") + 1, e.lastIndexOf("$"))
  , kh = e=>e.substring(e.indexOf("@") + 1, e.lastIndexOf("@"))
  , $p = ({diceOne: e, setDiceOne: t, diceTwo: n, setDiceTwo: i, bonus: r, setBonus: a, sendRoll: o})=>{
    const l = ["dex", "ins", "mig", "wil"];
    return d.jsxs("span", {
        children: [l.map((s,c)=>d.jsx("button", {
            className: "button",
            style: {
                marginRight: 4,
                width: 50
            },
            onClick: ()=>{
                e === "" ? t(s) : n === "" && i(s)
            }
            ,
            children: s.toUpperCase()
        }, c)), d.jsxs("span", {
            style: {
                display: "inline-block",
                marginRight: 4
            },
            children: [d.jsx(D, {
                children: "Modifier:"
            }), d.jsx("input", {
                className: "input-stat",
                type: "number",
                style: {
                    width: 20,
                    color: "lightblue"
                },
                value: r,
                onChange: s=>{
                    a(Number(s.target.value))
                }
                ,
                onBlur: ()=>{
                    isNaN(r) && a(0)
                }
            })]
        }), d.jsx("span", {
            style: {
                display: "inline-block",
                marginRight: 8
            },
            children: d.jsxs(D, {
                children: [e.toUpperCase(), " ", n ? "+" : "", " ", n.toUpperCase()]
            })
        }), (e || n) && d.jsx("button", {
            className: "button",
            style: {
                marginRight: 4,
                width: 40
            },
            onClick: ()=>{
                t(""),
                i("")
            }
            ,
            children: "Clear"
        }), e && d.jsx("button", {
            className: "button",
            style: {
                width: 80,
                float: "right",
                marginTop: 2
            },
            onClick: ()=>{
                o({
                    diceOne: e,
                    diceTwo: n,
                    bonus: r
                }),
                t(""),
                i("")
            }
            ,
            children: "Roll"
        })]
    })
}
  , Zp = ({data: e, index: t, player: n, updatePlayer: i, sendRoll: r, sendSkill: a})=>{
    let o = JSON.stringify(e);
    const l = wh(o)
      , s = Ah(o)
      , c = kh(o);
    l && (o = o.replace("<" + l + ">", "")),
    s && (o = o.replace("$" + s + "$", " ♫ ")),
    c && (o = o.replace("@" + c + "@", "⚡: " + c));
    const f = JSON.parse(o);
    return d.jsx("div", {
        style: {
            marginBottom: 10
        },
        children: d.jsxs("div", {
            className: "skill-detail",
            style: {
                backgroundColor: "#111"
            },
            children: [d.jsxs("div", {
                style: {
                    fontSize: 13,
                    color: "darkorange",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                },
                children: [d.jsxs("div", {
                    children: [d.jsx("div", {
                        children: e.name
                    }), e.info ? d.jsx("div", {
                        style: {
                            color: "darkgrey",
                            cursor: "copy",
                            fontSize: 10
                        },
                        children: e.info
                    }) : ""]
                }), d.jsxs("div", {
                    children: [e.noDice ? d.jsx("button", {
                        className: "button",
                        style: {
                            float: "right",
                            fontSize: 10,
                            padding: 4,
                            marginLeft: 8,
                            backgroundColor: "darkred",
                            color: "white"
                        },
                        onClick: ()=>{
                            a(e)
                        }
                        ,
                        children: "Send"
                    }) : d.jsx("button", {
                        className: "button",
                        style: {
                            float: "right",
                            fontSize: 10,
                            padding: 4,
                            marginLeft: 8,
                            backgroundColor: "darkred",
                            color: "white"
                        },
                        onClick: ()=>r(e),
                        children: "Roll"
                    }), d.jsx("button", {
                        className: "button",
                        style: {
                            float: "right",
                            fontSize: 10,
                            padding: 4,
                            marginLeft: 8
                        },
                        onClick: ()=>{
                            const u = {
                                ...n
                            };
                            u.actions[t].edit = !0,
                            i(u)
                        }
                        ,
                        children: "Edit"
                    })]
                })]
            }), d.jsx("hr", {
                style: {
                    marginTop: 6,
                    marginBottom: 6,
                    borderColor: "grey",
                    backgroundColor: "grey",
                    color: "grey"
                }
            }), !e.noDice && d.jsxs("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    marginTop: 4,
                    backgroundColor: "#222",
                    padding: "5px 10px",
                    borderRadius: 10,
                    justifyContent: "space-between"
                },
                children: [d.jsx(D, {
                    children: "Dice 1: "
                }), d.jsxs("select", {
                    className: "attribute-stat",
                    value: e.diceOne,
                    onChange: u=>{
                        const y = {
                            ...n
                        };
                        y.actions[t].diceOne = u.target.value,
                        i(y)
                    }
                    ,
                    children: [d.jsx("option", {
                        value: "dex",
                        children: "DEX"
                    }), d.jsx("option", {
                        value: "ins",
                        children: "INS"
                    }), d.jsx("option", {
                        value: "mig",
                        children: "MIG"
                    }), d.jsx("option", {
                        value: "wil",
                        children: "WIL"
                    }), d.jsx("option", {
                        value: "d12",
                        children: "d12"
                    }), d.jsx("option", {
                        value: "d10",
                        children: "d10"
                    }), d.jsx("option", {
                        value: "d8",
                        children: "d8"
                    }), d.jsx("option", {
                        value: "d6",
                        children: "d6"
                    })]
                }), d.jsx(D, {
                    children: "Dice 2: "
                }), d.jsxs("select", {
                    className: "attribute-stat",
                    value: e.diceTwo,
                    onChange: u=>{
                        const y = {
                            ...n
                        };
                        y.actions[t].diceTwo = u.target.value,
                        i(y)
                    }
                    ,
                    children: [d.jsx("option", {
                        value: "dex",
                        children: "DEX"
                    }), d.jsx("option", {
                        value: "ins",
                        children: "INS"
                    }), d.jsx("option", {
                        value: "mig",
                        children: "MIG"
                    }), d.jsx("option", {
                        value: "wil",
                        children: "WIL"
                    }), d.jsx("option", {
                        value: "d12",
                        children: "d12"
                    }), d.jsx("option", {
                        value: "d10",
                        children: "d10"
                    }), d.jsx("option", {
                        value: "d8",
                        children: "d8"
                    }), d.jsx("option", {
                        value: "d6",
                        children: "d6"
                    })]
                }), d.jsx(D, {
                    children: "Modifier:"
                }), d.jsx("input", {
                    className: "input-stat",
                    type: "number",
                    style: {
                        width: 20,
                        color: "lightblue"
                    },
                    value: e.bonus,
                    onChange: u=>{
                        const y = {
                            ...n
                        };
                        y.actions[t].bonus = u.target.value,
                        i(y)
                    }
                    ,
                    onBlur: ()=>{
                        const u = {
                            ...n
                        };
                        isNaN(F(u.actions[t].bonus)) && (u.actions[t].bonus = 0,
                        i(u))
                    }
                }), d.jsx("button", {
                    className: "button",
                    style: {
                        marginRight: 4,
                        backgroundColor: "#333"
                    },
                    onClick: ()=>{
                        const u = {
                            ...n
                        };
                        u.actions[t].useHR = !u.actions[t].useHR,
                        i(u)
                    }
                    ,
                    children: e.useHR ? "With HR" : "No HR"
                }), d.jsx(D, {
                    children: "Damage:"
                }), d.jsx("input", {
                    className: "input-stat",
                    type: "number",
                    style: {
                        width: 20,
                        color: "red"
                    },
                    value: e.damage,
                    onChange: u=>{
                        const y = {
                            ...n
                        };
                        y.actions[t].damage = u.target.value,
                        i(y)
                    }
                    ,
                    onBlur: ()=>{
                        const u = {
                            ...n
                        };
                        isNaN(F(u.actions[t].damage)) && (u.actions[t].damage = 0,
                        i(u))
                    }
                })]
            }), d.jsxs("div", {
                style: {
                    display: "flex",
                    gap: 10,
                    marginTop: 10
                },
                children: [d.jsx("div", {
                    style: {
                        flex: 3
                    },
                    children: Oh(f.detail ? f.detail.trim() : "")
                }), l && d.jsx("div", {
                    style: {
                        flex: 1,
                        backgroundImage: `url(${l})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: 80,
                        overflow: "hidden",
                        marginLeft: "auto",
                        marginRight: "auto",
                        borderRadius: 5
                    }
                })]
            })]
        })
    }, t)
}
  , Yp = ({data: e, index: t, player: n, updatePlayer: i, removeAction: r, sortUp: a, sortDown: o})=>d.jsxs("div", {
    children: [d.jsxs("div", {
        style: {
            display: "flex",
            alignItems: "center"
        },
        children: [d.jsx(D, {
            children: "Name: "
        }), d.jsx("input", {
            className: "input-stat",
            style: {
                width: 120,
                color: "lightgrey"
            },
            value: e.name,
            onChange: l=>{
                const s = {
                    ...n
                };
                s.actions[t].name = l.target.value,
                i(s)
            }
        }), d.jsx(D, {
            children: "Info: "
        }), d.jsx("input", {
            className: "input-stat",
            style: {
                width: e.noDice ? 180 : 258,
                color: "lightgrey"
            },
            value: e.info,
            placeholder: "Level/Target/MP Cost/Duration/Damage/Quote/Other",
            onChange: l=>{
                const s = {
                    ...n
                };
                s.actions[t].info = l.target.value,
                i(s)
            }
        }), e.noDice && d.jsxs(d.Fragment, {
            children: [d.jsx("button", {
                className: "button",
                style: {
                    width: 25,
                    marginRight: 4
                },
                onClick: ()=>{
                    a(t)
                }
                ,
                children: "↑"
            }), d.jsx("button", {
                className: "button",
                style: {
                    width: 25,
                    marginRight: 4
                },
                onClick: ()=>{
                    o(t)
                }
                ,
                children: "↓"
            }), d.jsx("button", {
                className: "button",
                style: {
                    marginRight: 4,
                    width: 50
                },
                onClick: ()=>{
                    const l = {
                        ...n
                    };
                    l.actions[t].edit = !1,
                    i(l)
                }
                ,
                children: "Done"
            })]
        }), d.jsx("button", {
            className: "button",
            style: {
                width: 25,
                color: "darkred"
            },
            onClick: ()=>{
                r(t)
            }
            ,
            children: "✖"
        })]
    }), !e.noDice && d.jsxs("div", {
        style: {
            display: "flex",
            alignItems: "center",
            marginTop: 4
        },
        children: [d.jsx(D, {
            children: "Dice 1: "
        }), d.jsxs("select", {
            className: "attribute-stat",
            value: e.diceOne,
            onChange: l=>{
                const s = {
                    ...n
                };
                s.actions[t].diceOne = l.target.value,
                i(s)
            }
            ,
            children: [d.jsx("option", {
                value: "dex",
                children: "DEX"
            }), d.jsx("option", {
                value: "ins",
                children: "INS"
            }), d.jsx("option", {
                value: "mig",
                children: "MIG"
            }), d.jsx("option", {
                value: "wil",
                children: "WIL"
            }), d.jsx("option", {
                value: "d12",
                children: "d12"
            }), d.jsx("option", {
                value: "d10",
                children: "d10"
            }), d.jsx("option", {
                value: "d8",
                children: "d8"
            }), d.jsx("option", {
                value: "d6",
                children: "d6"
            })]
        }), d.jsx(D, {
            children: "Dice 2: "
        }), d.jsxs("select", {
            className: "attribute-stat",
            value: e.diceTwo,
            onChange: l=>{
                const s = {
                    ...n
                };
                s.actions[t].diceTwo = l.target.value,
                i(s)
            }
            ,
            children: [d.jsx("option", {
                value: "dex",
                children: "DEX"
            }), d.jsx("option", {
                value: "ins",
                children: "INS"
            }), d.jsx("option", {
                value: "mig",
                children: "MIG"
            }), d.jsx("option", {
                value: "wil",
                children: "WIL"
            }), d.jsx("option", {
                value: "d12",
                children: "d12"
            }), d.jsx("option", {
                value: "d10",
                children: "d10"
            }), d.jsx("option", {
                value: "d8",
                children: "d8"
            }), d.jsx("option", {
                value: "d6",
                children: "d6"
            })]
        }), d.jsx(D, {
            children: "Modifier:"
        }), d.jsx("input", {
            className: "input-stat",
            type: "number",
            style: {
                width: 20,
                color: "lightblue"
            },
            value: e.bonus,
            onChange: l=>{
                const s = {
                    ...n
                };
                s.actions[t].bonus = l.target.value,
                i(s)
            }
            ,
            onBlur: ()=>{
                const l = {
                    ...n
                };
                isNaN(F(l.actions[t].bonus)) && (l.actions[t].bonus = 0,
                i(l))
            }
        }), d.jsx("button", {
            className: "button",
            style: {
                marginRight: 4
            },
            onClick: ()=>{
                const l = {
                    ...n
                };
                l.actions[t].useHR = !l.actions[t].useHR,
                i(l)
            }
            ,
            children: e.useHR ? "With HR" : "No HR"
        }), d.jsx(D, {
            children: "Damage:"
        }), d.jsx("input", {
            className: "input-stat",
            type: "number",
            style: {
                width: 20,
                color: "red"
            },
            value: e.damage,
            onChange: l=>{
                const s = {
                    ...n
                };
                s.actions[t].damage = l.target.value,
                i(s)
            }
            ,
            onBlur: ()=>{
                const l = {
                    ...n
                };
                isNaN(F(l.actions[t].damage)) && (l.actions[t].damage = 0,
                i(l))
            }
        }), d.jsx("button", {
            className: "button",
            style: {
                width: 25,
                marginRight: 4
            },
            onClick: ()=>{
                a(t)
            }
            ,
            children: "↑"
        }), d.jsx("button", {
            className: "button",
            style: {
                width: 25
            },
            onClick: ()=>{
                o(t)
            }
            ,
            children: "↓"
        }), d.jsx("button", {
            className: "button",
            style: {
                marginLeft: 4,
                width: 50
            },
            onClick: ()=>{
                const l = {
                    ...n
                };
                l.actions[t].edit = !1,
                i(l)
            }
            ,
            children: "Done"
        })]
    }), d.jsx("textarea", {
        className: "input-stat",
        rows: 40,
        cols: 88,
        style: {
            textAlign: "left",
            color: "#FFF",
            height: 50,
            marginLeft: 0,
            marginTop: 4,
            width: 485,
            padding: 4
        },
        value: e.detail,
        onChange: l=>{
            const s = {
                ...n
            };
            s.actions[t].detail = l.target.value,
            i(s)
        }
    }), d.jsx("hr", {})]
}, t)
  , Kp = ({player: e, updatePlayer: t, searchActions: n, setSearchActions: i, diceOne: r, setDiceOne: a, diceTwo: o, setDiceTwo: l, bonus: s, setBonus: c, sendRoll: f, sendSkill: u, sendRandomPlayer: y, addAction: T, addActionNoRoll: v, removeAction: E, sortUp: A, sortDown: h})=>{
    const p = e.actions.filter(m=>n !== "" ? !!m.name.toLowerCase().includes(n.toLowerCase()) : !0);
    return d.jsxs("div", {
        children: [d.jsxs("div", {
            children: [d.jsx($p, {
                diceOne: r,
                setDiceOne: a,
                diceTwo: o,
                setDiceTwo: l,
                bonus: s,
                setBonus: c,
                sendRoll: f
            }), d.jsx("hr", {}), d.jsx("span", {
                className: "outline",
                children: "Search:"
            }), d.jsx("input", {
                className: "input-stat",
                style: {
                    width: 150,
                    color: "lightgrey"
                },
                value: n,
                onChange: m=>{
                    i(m.target.value)
                }
            }), n !== "" && d.jsx("button", {
                className: "button",
                style: {
                    fontWeight: "bolder",
                    width: 40
                },
                onClick: ()=>{
                    i("")
                }
                ,
                children: "Clear"
            }), e.isGMPlayer && d.jsx("button", {
                className: "button",
                style: {
                    fontWeight: "bolder",
                    width: 80
                },
                onClick: ()=>{
                    y(!1)
                }
                ,
                children: "Random Target"
            }), d.jsx("button", {
                className: "button",
                style: {
                    fontWeight: "bolder",
                    float: "right",
                    width: 60,
                    marginTop: 2,
                    marginRight: 4
                },
                onClick: ()=>{
                    v()
                }
                ,
                children: "Action"
            }), d.jsx("button", {
                className: "button",
                style: {
                    fontWeight: "bolder",
                    float: "right",
                    width: 60,
                    marginTop: 2,
                    marginRight: 4
                },
                onClick: ()=>{
                    T()
                }
                ,
                children: "Roll"
            }), d.jsx("span", {
                className: "outline",
                style: {
                    float: "right",
                    marginTop: 6,
                    marginRight: 4
                },
                children: "Add:"
            })]
        }), d.jsx("hr", {}), p.map((m,O)=>m.edit ? d.jsx(Yp, {
            data: m,
            index: O,
            player: e,
            updatePlayer: t,
            removeAction: E,
            sortUp: A,
            sortDown: h
        }, O) : d.jsx(Zp, {
            data: m,
            index: O,
            player: e,
            updatePlayer: t,
            sendRoll: f,
            sendSkill: u
        }, O))]
    })
}
  , Qp = ({data: e, itemIndex: t, sendSkill: n})=>{
    let i = JSON.stringify(e);
    const r = wh(i)
      , a = Ah(i)
      , o = kh(i);
    r && (i = i.replace("<" + r + ">", "")),
    a && (i = i.replace("$" + a + "$", " ♫ ")),
    o && (i = i.replace("@" + o + "@", "⚡: " + o));
    const l = JSON.parse(i);
    return d.jsx("div", {
        style: {
            marginTop: 10,
            marginBottom: 10
        },
        children: d.jsxs("div", {
            className: "skill-detail",
            children: [d.jsxs("div", {
                style: {
                    fontSize: 13,
                    color: "darkorange",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                },
                children: [d.jsxs("div", {
                    children: [d.jsx("div", {
                        children: l.name
                    }), l.info ? d.jsx("div", {
                        style: {
                            color: "darkgrey",
                            cursor: "copy",
                            fontSize: 10
                        },
                        children: l.info
                    }) : ""]
                }), d.jsx("div", {
                    children: d.jsx("button", {
                        className: "button",
                        style: {
                            float: "right",
                            fontSize: 10,
                            padding: 4,
                            marginLeft: 8
                        },
                        onClick: ()=>{
                            n(e)
                        }
                        ,
                        children: "Send"
                    })
                })]
            }), d.jsx("hr", {
                style: {
                    marginTop: 6,
                    marginBottom: 6,
                    borderColor: "grey",
                    backgroundColor: "grey",
                    color: "grey"
                }
            }), d.jsxs("div", {
                style: {
                    display: "flex",
                    gap: 10
                },
                children: [d.jsx("div", {
                    style: {
                        flex: 3
                    },
                    children: Oh(l.detail ? l.detail.trim() : "")
                }), r && d.jsx("div", {
                    style: {
                        flex: 1,
                        backgroundImage: `url(${r})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: 80,
                        overflow: "hidden",
                        marginLeft: "auto",
                        marginRight: "auto",
                        borderRadius: 5
                    }
                })]
            })]
        })
    }, "skillInstance" + t)
}
  , Jp = ({data: e, categoryIndex: t, itemIndex: n, player: i, updatePlayer: r, sendSkill: a, removeSkill: o})=>d.jsxs("div", {
    children: [d.jsxs("div", {
        style: {
            display: "flex",
            alignItems: "center"
        },
        children: [d.jsx(D, {
            children: "Name: "
        }), d.jsx("input", {
            className: "input-stat",
            style: {
                width: 120,
                color: "lightgrey"
            },
            value: e.name,
            placeholder: "Skill/Spell/Arcana/Etc.",
            onChange: l=>{
                const s = {
                    ...i
                };
                s.skills[t].items[n].name = l.target.value,
                r(s)
            }
        }), d.jsx(D, {
            children: "Info: "
        }), d.jsx("input", {
            className: "input-stat",
            style: {
                width: 240,
                color: "lightgrey"
            },
            value: e.info,
            placeholder: "Level/Target/MP Cost/Duration/Damage/Other",
            onChange: l=>{
                const s = {
                    ...i
                };
                s.skills[t].items[n].info = l.target.value,
                r(s)
            }
        }), d.jsx("button", {
            className: "button",
            style: {
                marginRight: 4
            },
            onClick: ()=>{
                a(e)
            }
            ,
            children: "Send"
        }), d.jsx("button", {
            className: "button",
            style: {
                width: 25,
                color: "darkred"
            },
            onClick: ()=>{
                o(t, n)
            }
            ,
            children: "✖"
        })]
    }), d.jsx("textarea", {
        className: "input-stat",
        rows: 40,
        cols: 88,
        style: {
            textAlign: "left",
            color: "#FFF",
            height: 50,
            marginLeft: 0,
            marginTop: 4,
            width: 485,
            padding: 4
        },
        placeholder: "Add Description Here",
        onChange: l=>{
            const s = {
                ...i
            };
            s.skills[t].items[n].detail = l.target.value,
            r(s)
        }
        ,
        value: e.detail
    })]
}, n)
  , qp = ({data: e, index: t, items: n, player: i, updatePlayer: r, sendSkill: a})=>d.jsxs("div", {
    className: "skill-detail",
    style: {
        marginTop: 20,
        backgroundColor: "#333"
    },
    children: [d.jsxs("div", {
        style: {
            display: "flex",
            alignItems: "center",
            cursor: "pointer"
        },
        onClick: ()=>{
            const o = {
                ...i
            };
            o.skills[t].collapse = !o.skills[t].collapse,
            r(o)
        }
        ,
        children: [d.jsx("span", {
            className: "outline",
            style: {
                fontSize: 16,
                color: "red",
                marginRight: 5
            },
            children: e.categoryName
        }), d.jsx("span", {
            className: "outline",
            style: {
                fontSize: 11
            },
            children: e.categoryInfo
        }), d.jsx("button", {
            className: "button",
            style: {
                marginLeft: "auto",
                marginRight: 8
            },
            onClick: o=>{
                o.stopPropagation();
                const l = {
                    ...i
                };
                l.skills[t].edit = !0,
                r(l)
            }
            ,
            children: "Edit"
        }), e.collapse ? d.jsx("span", {
            className: "outline",
            style: {
                fontSize: 12
            },
            children: "▼"
        }) : d.jsx("span", {
            className: "outline",
            style: {
                fontSize: 12
            },
            children: "▲"
        })]
    }), !e.collapse && d.jsxs(d.Fragment, {
        children: [d.jsx("hr", {
            style: {
                marginBottom: 8,
                borderColor: "#666",
                backgroundColor: "#666",
                color: "#666"
            }
        }), n.map((o,l)=>d.jsx(Qp, {
            data: o,
            itemIndex: l,
            sendSkill: a
        }, l))]
    })]
}, t)
  , eg = ({data: e, index: t, items: n, player: i, updatePlayer: r, sendSkill: a, addSkill: o, removeCategory: l, sortCategoryUp: s, sortCategoryDown: c, removeSkill: f})=>d.jsxs("div", {
    style: {
        marginTop: 20
    },
    children: [d.jsx("hr", {}), d.jsxs("div", {
        style: {
            display: "flex",
            alignItems: "center"
        },
        children: [d.jsx(D, {
            children: "Category: "
        }), d.jsx("input", {
            className: "input-stat",
            style: {
                width: 100,
                color: "lightgrey"
            },
            value: e.categoryName,
            placeholder: "Class/Spells/Projects/Skills/Other",
            onChange: u=>{
                const y = {
                    ...i
                };
                y.skills[t].categoryName = u.target.value,
                r(y)
            }
        }), d.jsx(D, {
            children: "Info: "
        }), d.jsx("input", {
            className: "input-stat",
            style: {
                width: 130,
                color: "lightgrey"
            },
            value: e.categoryInfo,
            placeholder: "Free Benefits/Tracker/Other",
            onChange: u=>{
                const y = {
                    ...i
                };
                y.skills[t].categoryInfo = u.target.value,
                r(y)
            }
        }), d.jsx("button", {
            className: "button",
            style: {
                width: 25,
                marginRight: 4
            },
            onClick: ()=>{
                s(t)
            }
            ,
            children: "↑"
        }), d.jsx("button", {
            className: "button",
            style: {
                width: 25,
                marginRight: 4
            },
            onClick: ()=>{
                c(t)
            }
            ,
            children: "↓"
        }), d.jsx("div", {
            style: {
                display: "flex",
                justifyContent: "center"
            },
            children: d.jsx("button", {
                className: "button",
                style: {
                    fontWeight: "bolder",
                    width: 25,
                    marginRight: 4
                },
                onClick: ()=>{
                    o(t)
                }
                ,
                children: "+"
            })
        }), d.jsx("div", {
            style: {
                display: "flex",
                justifyContent: "center"
            },
            children: d.jsx("button", {
                className: "button",
                style: {
                    fontWeight: "bolder",
                    width: 50,
                    marginRight: 4
                },
                onClick: ()=>{
                    const u = {
                        ...i
                    };
                    u.skills[t].edit = !1,
                    r(u)
                }
                ,
                children: "Done"
            })
        }), d.jsx("button", {
            className: "button",
            style: {
                fontWeight: "bolder",
                width: 25,
                color: "darkred"
            },
            onClick: ()=>{
                l(t)
            }
            ,
            children: "✖"
        })]
    }), d.jsx("hr", {
        style: {
            marginBottom: 10
        }
    }), n.map((u,y)=>d.jsx(Jp, {
        data: u,
        categoryIndex: t,
        itemIndex: y,
        player: i,
        updatePlayer: r,
        sendSkill: a,
        removeSkill: f
    }, y))]
}, t)
  , tg = ({player: e, updatePlayer: t, searchSkills: n, setSearchSkills: i, collapseAll: r, setCollapseAll: a, sendSkill: o, addCategory: l, removeCategory: s, addSkill: c, removeSkill: f, sortCategoryUp: u, sortCategoryDown: y})=>{
    const T = v=>{
        const E = n !== "" && v.categoryName.toLowerCase().includes(n.toLowerCase());
        let A = [];
        return E ? A = v.items : A = v.items.filter(h=>n !== "" ? !!h.name.toLowerCase().includes(n.toLowerCase()) : !0),
        A
    }
    ;
    return d.jsxs("div", {
        children: [d.jsxs("div", {
            children: [d.jsx(D, {
                children: "Search By Name: "
            }), d.jsx("input", {
                className: "input-stat",
                style: {
                    width: 150,
                    color: "lightgrey"
                },
                value: n,
                onChange: v=>{
                    i(v.target.value)
                }
            }), n !== "" && d.jsx("button", {
                className: "button",
                style: {
                    fontWeight: "bolder",
                    width: 40
                },
                onClick: ()=>{
                    i("")
                }
                ,
                children: "Clear"
            }), d.jsx("button", {
                className: "button",
                style: {
                    fontWeight: "bolder",
                    width: 80,
                    float: "right",
                    marginTop: 2,
                    marginLeft: 4
                },
                onClick: ()=>{
                    const v = {
                        ...e
                    };
                    v.skills.forEach((E,A)=>{
                        v.skills[A].collapse = r
                    }
                    ),
                    t(v),
                    a(!r)
                }
                ,
                children: r ? "Collapse" : "Uncollapse"
            }), d.jsx("button", {
                className: "button",
                style: {
                    fontWeight: "bolder",
                    width: 80,
                    float: "right",
                    marginTop: 2
                },
                onClick: ()=>l(),
                children: "Add Category"
            })]
        }), e.skills.map((v,E)=>{
            const A = T(v);
            return n !== "" && A.length < 1 ? null : v.edit ? d.jsx(eg, {
                data: v,
                index: E,
                items: A,
                player: e,
                updatePlayer: t,
                sendSkill: o,
                addSkill: c,
                removeCategory: s,
                sortCategoryUp: u,
                sortCategoryDown: y,
                removeSkill: f
            }, E) : d.jsx(qp, {
                data: v,
                index: E,
                items: A,
                player: e,
                updatePlayer: t,
                sendSkill: o
            }, E)
        }
        )]
    })
}
  , Ua = ({stat: e, label: t, player: n, updatePlayer: i, getCurrentAttribute: r})=>d.jsxs("div", {
    children: [d.jsxs("span", {
        className: "outline",
        children: [t, ":", " ", d.jsx("span", {
            style: {
                color: "orange"
            },
            children: n.attributes["current" + e]
        })]
    }), d.jsxs("select", {
        className: "attribute-stat",
        value: n.attributes[e],
        onChange: a=>{
            const o = {
                ...n
            };
            o.attributes[e] = a.target.value,
            o.attributes["current" + e] = r(e),
            i(o)
        }
        ,
        children: [d.jsx("option", {
            value: "d12",
            children: "d12"
        }), d.jsx("option", {
            value: "d10",
            children: "d10"
        }), d.jsx("option", {
            value: "d8",
            children: "d8"
        }), d.jsx("option", {
            value: "d6",
            children: "d6"
        })]
    })]
})
  , La = ({stat: e, condition: t, player: n, updatePlayer: i, getCurrentAttribute: r, sendSkill: a, addGMStatusEffectIcon: o})=>d.jsx("button", {
    className: "button",
    style: {
        marginRight: 4,
        fontSize: 10,
        width: 40,
        textTransform: "capitalize",
        backgroundColor: n.debuff[t] ? "darkred" : "#222",
        color: n.debuff[t] ? "white" : "#ffd433"
    },
    onClick: ()=>{
        const l = {
            ...n
        };
        l.debuff[t] = !n.debuff[t],
        l.attributes["current" + e] = r(e),
        i(l),
        a({
            name: l.traits.name + (l.debuff[t] ? " suffers " : " recovers from ") + t + "!",
            info: "",
            detail: "Bringing their `" + e.toUpperCase() + "` one die size " + (l.debuff[t] ? "lower." : "higher.")
        }),
        o(l)
    }
    ,
    children: t
})
  , ng = ({player: e, updatePlayer: t, playerList: n, setPlayer: i, sendCharacter: r, theme: a, healthModifier: o, setHealthModifier: l, showMessage: s, sendSkill: c, getCurrentAttribute: f, addGMStatusEffectIcon: u, updateGMNoteItem: y, damageTypeSelected: T, setSelectedDamageType: v, sendAffinity: E, damageTypes: A})=>d.jsxs("div", {
    children: [d.jsxs("div", {
        style: {
            display: "flex",
            marginTop: 4,
            alignItems: "center"
        },
        children: [d.jsx("div", {
            style: {
                width: 32
            },
            children: d.jsx(D, {
                children: "Name: "
            })
        }), d.jsx("input", {
            className: "input-stat",
            style: {
                width: 180,
                marginRight: 10,
                color: "white"
            },
            value: e.traits.name,
            onChange: h=>{
                const p = {
                    ...e
                };
                p.traits.name = h.target.value,
                y(p.linkedStats.currentStats, p.stats.currentHP, p.stats.currentMP, p.traits.name),
                t(p)
            }
            ,
            placeholder: "Your Enemy Name"
        }), d.jsx("div", {
            className: "outline",
            children: "Switch NPC:"
        }), d.jsx("select", {
            className: "attribute-stat",
            style: {
                color: "lightgrey",
                width: 80,
                marginLeft: 4
            },
            value: e.id,
            onChange: h=>{
                const p = n.find(m=>m.id === parseInt(h.target.value));
                i(p),
                r(p)
            }
            ,
            children: n.sort((h,p)=>{
                const m = h.traits && h.traits.name ? h.traits.name : ""
                  , O = p.traits && p.traits.name ? p.traits.name : "";
                return m.localeCompare(O)
            }
            ).map((h,p)=>{
                if (h.isGMPlayer)
                    return d.jsx("option", {
                        value: h.id,
                        children: h.traits.name
                    }, p)
            }
            )
        }), d.jsx("button", {
            className: "button",
            style: {
                width: 25,
                marginLeft: 4,
                marginRight: 4,
                color: "orange"
            },
            onClick: ()=>{
                const h = n.filter(m=>m.isGMPlayer).sort((m,O)=>{
                    const C = m.traits && m.traits.name ? m.traits.name : ""
                      , x = O.traits && O.traits.name ? O.traits.name : "";
                    return C.localeCompare(x)
                }
                )
                  , p = h.findIndex(m=>m.id === e.id);
                p !== 0 && h.length > 1 && (i(h[p - 1]),
                r(h[p - 1]))
            }
            ,
            children: "←"
        }), d.jsx("button", {
            className: "button",
            style: {
                width: 25,
                marginRight: 4,
                color: "orange"
            },
            onClick: ()=>{
                const h = n.filter(m=>m.isGMPlayer).sort((m,O)=>{
                    const C = m.traits && m.traits.name ? m.traits.name : ""
                      , x = O.traits && O.traits.name ? O.traits.name : "";
                    return C.localeCompare(x)
                }
                )
                  , p = h.findIndex(m=>m.id === e.id);
                p !== h.length - 1 && h.length > 1 && (i(h[p + 1]),
                r(h[p + 1]))
            }
            ,
            children: "→"
        }), d.jsx("button", {
            className: "button",
            style: {
                marginLeft: "auto",
                width: "auto",
                padding: 5,
                color: "red"
            },
            onClick: ()=>{
                i(null)
            }
            ,
            children: "Close"
        })]
    }), d.jsx("hr", {}), d.jsxs("div", {
        style: {
            display: "flex",
            gap: 5,
            alignItems: "center"
        },
        children: [d.jsxs("span", {
            style: {
                display: "inline-block"
            },
            children: [d.jsx(D, {
                children: "DMG:"
            }), d.jsx("input", {
                className: "input-stat",
                type: "number",
                style: {
                    width: 20,
                    color: "Red"
                },
                onChange: h=>{
                    const p = {
                        ...e
                    };
                    let m = parseInt(h.target.value, 0);
                    p.stats ? p.stats.currentHP = m : p.stats = {
                        defense: 0,
                        mDefense: 0,
                        currentHP: m,
                        currentMP: 0
                    },
                    p.linkedStats && y(p.linkedStats.currentStats, p.stats.currentHP, p.stats.currentMP, p.traits.name),
                    t(p)
                }
                ,
                value: e.stats ? e.stats.currentHP : 0,
                onBlur: ()=>{
                    const h = {
                        ...e
                    };
                    isNaN(F(h.stats.currentHP)) && (h.stats.currentHP = 0,
                    t(h))
                }
            }), d.jsx(D, {
                children: "Spent:"
            }), d.jsx("input", {
                className: "input-stat",
                type: "number",
                style: {
                    width: 20,
                    color: "LightBlue"
                },
                onChange: h=>{
                    const p = {
                        ...e
                    };
                    let m = parseInt(h.target.value, 0);
                    p.stats ? p.stats.currentMP = m : p.stats = {
                        defense: 0,
                        mDefense: 0,
                        currentHP: 0,
                        currentMP: m
                    },
                    p.linkedStats && y(p.linkedStats.currentStats, p.stats.currentHP, p.stats.currentMP, p.traits.name),
                    t(p)
                }
                ,
                value: e.stats ? e.stats.currentMP : 0,
                onBlur: ()=>{
                    const h = {
                        ...e
                    };
                    isNaN(F(h.stats.currentMP)) && (h.stats.currentMP = 0,
                    t(h))
                }
            }), d.jsx(D, {
                children: "DEF:"
            }), d.jsx("input", {
                className: "input-stat",
                type: "number",
                style: {
                    width: 20,
                    color: "violet"
                },
                onChange: h=>{
                    const p = {
                        ...e
                    };
                    let m = parseInt(h.target.value, 0);
                    p.stats ? p.stats.defense = m : p.stats = {
                        defense: 8,
                        mDefense: 8,
                        currentHP: 0,
                        currentMP: 0
                    },
                    t(p)
                }
                ,
                value: e.stats ? e.stats.defense : 0
            }), d.jsx(D, {
                children: "M.DEF:"
            }), d.jsx("input", {
                className: "input-stat",
                type: "number",
                style: {
                    width: 20,
                    color: "cyan"
                },
                onChange: h=>{
                    const p = {
                        ...e
                    };
                    let m = parseInt(h.target.value, 0);
                    p.stats ? p.stats.mDefense = m : p.stats = {
                        defense: 8,
                        mDefense: 8,
                        currentHP: 0,
                        currentMP: 0
                    },
                    t(p)
                }
                ,
                value: e.stats ? e.stats.mDefense : 0,
                onBlur: ()=>{
                    const h = {
                        ...e
                    };
                    isNaN(h.stats.mDefense) && (h.stats.mDefense = 0,
                    t(h))
                }
            }), (typeof e.linkedStats == "string" || !e.linkedStats || !e.linkedStats.currentStats) && d.jsx("button", {
                className: "button",
                style: {
                    width: 50,
                    padding: 5,
                    marginLeft: 5,
                    marginRight: 5,
                    color: "orange"
                },
                onClick: async()=>{
                    const h = await W.player.getSelection();
                    if (h && h[0]) {
                        const m = (await W.scene.items.getItems([h[0]]))[0]
                          , O = m.id + "_healthbar";
                        W.scene.items.addItems([{
                            text: {
                                richText: [{
                                    type: "paragraph",
                                    children: [{
                                        text: ""
                                    }]
                                }],
                                style: {
                                    fontSize: 42,
                                    padding: 16,
                                    fontFamily: "Roboto",
                                    fontWeight: 400,
                                    textAlign: "LEFT",
                                    textAlignVertical: "TOP",
                                    fillColor: a === "fantasy" ? "#ffffff" : "#ff4d4d",
                                    fillOpacity: 1,
                                    strokeColor: "#222222",
                                    strokeOpacity: 1,
                                    lineHeight: 1.5,
                                    strokeWidth: 9
                                },
                                plainText: "",
                                type: "RICH",
                                width: "AUTO",
                                height: "AUTO"
                            },
                            grid: {
                                dpi: 150,
                                offset: {
                                    y: -60.8902729235092,
                                    x: -6.6444149389321865
                                }
                            },
                            scale: {
                                y: .6146155680182349,
                                x: .6146155680182349
                            },
                            position: {
                                x: m.position.x - m.grid.offset.x,
                                y: m.position.y - m.grid.offset.y
                            },
                            type: "IMAGE",
                            attachedTo: m.id,
                            id: O,
                            name: "Healthbox",
                            disableAttachmentBehavior: ["SCALE", "ROTATION"],
                            rotation: 0,
                            visible: !0,
                            locked: !1,
                            createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
                            lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
                            metadata: {},
                            image: {
                                width: 312,
                                height: 164,
                                mime: "image/png",
                                url: a === "fantasy" ? "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/8e51ab1b-300b-477a-bd43-fcfdad184063.png" : "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/caa00389-12e9-4094-82d7-a94a89ac703a.png"
                            },
                            textItemType: "TEXT",
                            layer: "ATTACHMENT",
                            zIndex: 1729524067173,
                            lastModified: "2024-10-21T15:24:14.937Z"
                        }]);
                        const C = {
                            ...e
                        };
                        C.linkedStats && typeof C.linkedStats != "string" ? C.linkedStats.currentStats = O : C.linkedStats = {
                            currentStats: O
                        },
                        y(C.linkedStats.currentStats, C.stats.currentHP, C.stats.currentMP, C.traits.name),
                        t(C),
                        u(C)
                    }
                }
                ,
                children: "Link"
            }), e.linkedStats && e.linkedStats.currentStats && d.jsx("button", {
                className: "button",
                style: {
                    width: 40,
                    padding: 5,
                    marginLeft: 5,
                    marginRight: 5,
                    color: "orange"
                },
                onClick: async()=>{
                    const h = {
                        ...e
                    };
                    h.linkedStats && typeof h.linkedStats != "string" ? h.linkedStats.currentStats = "" : h.linkedStats = {
                        currentStats: ""
                    },
                    t(h)
                }
                ,
                children: "Unlink"
            }), d.jsx(D, {
                children: "Calc:"
            }), d.jsx("input", {
                className: "input-stat",
                type: "number",
                style: {
                    width: 20,
                    color: "LightGray"
                },
                value: o,
                onChange: h=>{
                    l(Number(h.target.value))
                }
                ,
                onBlur: ()=>{
                    isNaN(o) && l(0)
                }
            })]
        }), d.jsx("button", {
            className: "button",
            style: {
                width: 50,
                marginRight: 4,
                fontSize: 10,
                marginTop: 2
            },
            onClick: ()=>{
                const h = {
                    ...e
                };
                h.stats.currentHP = F(h.stats.currentHP) + (o || 0),
                h.linkedStats && y(h.linkedStats.currentStats || "", h.stats.currentHP, h.stats.currentMP, h.traits.name),
                t(h),
                s(`Inflicted ${o} damage!`),
                l(0)
            }
            ,
            children: "Damage"
        }), d.jsx("button", {
            className: "button",
            style: {
                width: 50,
                marginRight: 4,
                fontSize: 10,
                marginTop: 2
            },
            onClick: ()=>{
                const h = {
                    ...e
                };
                h.stats.currentMP = F(h.stats.currentMP) + (o || 0),
                h.linkedStats && y(h.linkedStats.currentStats || "", h.stats.currentHP, h.stats.currentMP, h.traits.name),
                t(h),
                s(`Inflicted ${o} damage!`),
                l(0)
            }
            ,
            children: "Spend"
        })]
    }), d.jsx("hr", {}), d.jsxs("div", {
        style: {
            display: "flex",
            gap: 4,
            alignItems: "center"
        },
        children: [d.jsx(Ua, {
            stat: "dex",
            label: "DEX",
            player: e,
            updatePlayer: t,
            getCurrentAttribute: f
        }), d.jsx(Ua, {
            stat: "ins",
            label: "INS",
            player: e,
            updatePlayer: t,
            getCurrentAttribute: f
        }), d.jsx(Ua, {
            stat: "mig",
            label: "MIG",
            player: e,
            updatePlayer: t,
            getCurrentAttribute: f
        }), d.jsx(Ua, {
            stat: "wil",
            label: "WIL",
            player: e,
            updatePlayer: t,
            getCurrentAttribute: f
        }), d.jsxs("span", {
            className: "outline",
            style: {
                marginRight: 4,
                marginTop: 4
            },
            children: ["DEF:", " ", d.jsx("span", {
                className: "outline",
                style: {
                    color: "violet"
                },
                children: (e.stats ? F(e.stats.defense) : 0) + (ue(e.attributes.dex) || 0)
            })]
        }), d.jsxs("span", {
            className: "outline",
            style: {
                marginRight: 4,
                marginTop: 4
            },
            children: ["M.DEF:", " ", d.jsx("span", {
                className: "outline",
                style: {
                    color: "cyan"
                },
                children: (e.stats ? F(e.stats.mDefense) : 0) + (ue(e.attributes.currentins) || 0)
            })]
        })]
    }), d.jsx("hr", {}), d.jsxs("div", {
        style: {
            display: "flex",
            marginTop: 4
        },
        children: [d.jsx(La, {
            stat: "dex",
            condition: "slow",
            player: e,
            updatePlayer: t,
            getCurrentAttribute: f,
            sendSkill: c,
            addGMStatusEffectIcon: u
        }), d.jsx(La, {
            stat: "ins",
            condition: "dazed",
            player: e,
            updatePlayer: t,
            getCurrentAttribute: f,
            sendSkill: c,
            addGMStatusEffectIcon: u
        }), d.jsx(La, {
            stat: "mig",
            condition: "weak",
            player: e,
            updatePlayer: t,
            getCurrentAttribute: f,
            sendSkill: c,
            addGMStatusEffectIcon: u
        }), d.jsx(La, {
            stat: "wil",
            condition: "shaken",
            player: e,
            updatePlayer: t,
            getCurrentAttribute: f,
            sendSkill: c,
            addGMStatusEffectIcon: u
        }), d.jsx("button", {
            className: "button",
            style: {
                marginRight: 4,
                fontSize: 10,
                width: 50,
                textTransform: "capitalize",
                backgroundColor: e.debuff.enraged ? "darkred" : "#222",
                color: e.debuff.enraged ? "white" : "#ffd433"
            },
            onClick: async()=>{
                const h = {
                    ...e
                };
                h.debuff.enraged = !e.debuff.enraged,
                h.attributes.currentdex = f("dex"),
                h.attributes.currentins = f("ins"),
                t(h),
                c({
                    name: h.traits.name + (h.debuff.enraged ? " suffers" : " recovers from") + " enraged!",
                    info: "",
                    detail: "Bringing their `DEX` to `INS` one die size " + (h.debuff.enraged ? "lower." : "higher.")
                }),
                u(h)
            }
            ,
            children: "Enraged"
        }), d.jsx("button", {
            className: "button",
            style: {
                marginRight: 4,
                fontSize: 10,
                width: 50,
                textTransform: "capitalize",
                backgroundColor: e.debuff.poisoned ? "darkred" : "#222",
                color: e.debuff.poisoned ? "white" : "#ffd433"
            },
            onClick: ()=>{
                const h = {
                    ...e
                };
                h.debuff.poisoned = !e.debuff.poisoned,
                h.attributes.currentmig = f("mig"),
                h.attributes.currentwil = f("wil"),
                t(h),
                c({
                    name: h.traits.name + (h.debuff.poisoned ? " suffers" : " recovers from") + " poisoned!",
                    info: "",
                    detail: "Bringing their `MIG` to `WIL` one die size " + (h.debuff.poisoned ? "lower." : "higher.")
                }),
                u(h)
            }
            ,
            children: "Poisoned"
        }), d.jsx("span", {
            style: {
                color: "grey"
            },
            children: "|"
        }), d.jsxs("div", {
            className: "outline",
            style: {
                display: "flex",
                alignItems: "center"
            },
            children: [d.jsx("select", {
                className: "attribute-stat",
                style: {
                    color: "orange",
                    marginLeft: 4
                },
                value: T,
                onChange: h=>{
                    v(h.target.value)
                }
                ,
                children: A.map(h=>d.jsxs("option", {
                    value: h,
                    children: [h, e.affinities && e.affinities[h] && e.affinities[h] != "N/A" ? "*" : ""]
                }, h))
            }), "Affinity:", " ", d.jsxs("select", {
                className: "attribute-stat",
                style: {
                    color: "orange",
                    marginLeft: 4
                },
                value: e.affinities && e.affinities[T] ? e.affinities[T] : "N/A",
                onChange: h=>{
                    const p = {
                        ...e
                    };
                    p.affinities && (p.affinities[T] = h.target.value),
                    t(p)
                }
                ,
                children: [d.jsx("option", {
                    value: "vu",
                    children: "VU"
                }), d.jsx("option", {
                    value: "N/A",
                    children: "N/A"
                }), d.jsx("option", {
                    value: "rs",
                    children: "RS"
                }), d.jsx("option", {
                    value: "im",
                    children: "IM"
                }), d.jsx("option", {
                    value: "ab",
                    children: "AB"
                })]
            }), d.jsx("button", {
                className: "button",
                style: {
                    marginLeft: 4,
                    fontSize: 10,
                    width: 40
                },
                onClick: ()=>{
                    var h;
                    E(e.traits.name, T, ((h = e.affinities) == null ? void 0 : h[T]) ?? "na")
                }
                ,
                children: "Send"
            })]
        })]
    })]
})
  , ig = ({player: e, tab: t, setTab: n, setPlayer: i, updatePlayer: r, updateNoteItem: a, getCurrentAttribute: o, sendSkill: l, addStatusEffectIcon: s, healthModifier: c, setHealthModifier: f, mindModifier: u, setMindModifier: y, showMessage: T, searchActions: v, setSearchActions: E, diceOne: A, setDiceOne: h, diceTwo: p, setDiceTwo: m, bonus: O, setBonus: C, sendRoll: x, sendRandomPlayer: S, addAction: _, addActionNoRoll: B, removeAction: G, sortUp: ne, sortDown: ye, searchSkills: pe, setSearchSkills: Be, collapseAll: dt, setCollapseAll: ft, addCategory: se, removeCategory: j, addSkill: $, removeSkill: K, sortCategoryUp: re, sortCategoryDown: de, playerList: qe, theme: Ae, addGMStatusEffectIcon: Xe, updateGMNoteItem: be, damageTypeSelected: et, setSelectedDamageType: Dn, sendAffinity: pn, damageTypes: ge, sendCharacter: Fe})=>d.jsxs(d.Fragment, {
    children: [e.isGMPlayer ? d.jsx(ng, {
        player: e,
        updatePlayer: r,
        playerList: qe,
        setPlayer: i,
        sendCharacter: Fe,
        theme: Ae,
        healthModifier: c,
        setHealthModifier: f,
        showMessage: T,
        sendSkill: l,
        getCurrentAttribute: o,
        addGMStatusEffectIcon: Xe,
        updateGMNoteItem: be,
        damageTypeSelected: et,
        setSelectedDamageType: Dn,
        sendAffinity: pn,
        damageTypes: ge
    }) : d.jsx(_p, {
        player: e,
        tab: t,
        setTab: n,
        setPlayer: i,
        updatePlayer: r,
        updateNoteItem: a
    }), d.jsx("hr", {}), t === "stats" && d.jsxs("div", {
        style: {
            marginBottom: 30
        },
        children: [d.jsx(Np, {
            player: e,
            updatePlayer: r
        }), d.jsx("hr", {}), d.jsx(Lp, {
            player: e,
            updatePlayer: r
        }), d.jsx("hr", {}), d.jsx(jp, {
            player: e
        }), d.jsx(Wp, {
            player: e,
            updatePlayer: r,
            updateNoteItem: a,
            healthModifier: c,
            setHealthModifier: f,
            mindModifier: u,
            setMindModifier: y,
            showMessage: T
        }), d.jsx("hr", {}), d.jsx(zp, {
            player: e,
            updatePlayer: r,
            updateNoteItem: a
        }), d.jsxs("div", {
            style: {
                display: "flex"
            },
            children: [d.jsx("div", {
                children: d.jsx(Hp, {
                    player: e,
                    updatePlayer: r,
                    getCurrentAttribute: o,
                    sendSkill: l,
                    addStatusEffectIcon: s,
                    updateNoteItem: a
                })
            }), d.jsx("div", {
                children: d.jsx(Fp, {
                    player: e,
                    updatePlayer: r,
                    getCurrentAttribute: o,
                    sendSkill: l,
                    addStatusEffectIcon: s,
                    updateNoteItem: a
                })
            }), d.jsx("div", {
                children: d.jsx(Bp, {
                    player: e,
                    updatePlayer: r,
                    sendSkill: l
                })
            })]
        }), d.jsx(Dp, {
            player: e,
            updatePlayer: r
        }), d.jsx("hr", {}), d.jsxs("div", {
            style: {
                marginBottom: 8
            },
            children: [d.jsx(D, {
                children: "Character Notes/Backpack"
            }), d.jsxs("span", {
                style: {
                    float: "right"
                },
                children: [d.jsx(D, {
                    children: "Zenit: "
                }), d.jsx("input", {
                    className: "input-stat",
                    type: "number",
                    style: {
                        width: 60,
                        color: "gold",
                        marginRight: 0
                    },
                    value: e.items.zenit,
                    onChange: ct=>{
                        const gn = {
                            ...e
                        };
                        gn.items.zenit = parseInt(ct.target.value),
                        r(gn)
                    }
                    ,
                    onBlur: ()=>{
                        const ct = {
                            ...e
                        };
                        ct.items && isNaN(Number(ct.items.zenit)) && (ct.items.zenit = 0,
                        r(ct))
                    }
                })]
            })]
        }), d.jsx(Pp, {
            player: e,
            updatePlayer: r
        })]
    }), t === "skills" && d.jsx(tg, {
        player: e,
        updatePlayer: r,
        searchSkills: pe,
        setSearchSkills: Be,
        collapseAll: dt,
        setCollapseAll: ft,
        sendSkill: l,
        addCategory: se,
        removeCategory: j,
        addSkill: $,
        removeSkill: K,
        sortCategoryUp: re,
        sortCategoryDown: de,
        showMessage: T
    }), t === "actions" && d.jsx(Kp, {
        player: e,
        updatePlayer: r,
        searchActions: v,
        setSearchActions: E,
        diceOne: A,
        setDiceOne: h,
        diceTwo: p,
        setDiceTwo: m,
        bonus: O,
        setBonus: C,
        sendRoll: x,
        sendSkill: l,
        sendRandomPlayer: S,
        addAction: _,
        addActionNoRoll: B,
        removeAction: G,
        sortUp: ne,
        sortDown: ye
    }), t === "link" && d.jsx(Gp, {
        player: e,
        updatePlayer: r,
        updateNoteItem: a
    })]
})
  , rg = ({exportData: e, copyText: t, setCopyText: n, setPlayer: i, setTab: r})=>d.jsxs("div", {
    children: [d.jsxs("div", {
        children: [d.jsx("span", {
            style: {
                fontSize: 13,
                color: "White"
            },
            className: "outline",
            children: "Export:"
        }), d.jsx("button", {
            className: "button",
            style: {
                marginLeft: 4,
                width: "auto",
                padding: 5,
                float: "right",
                color: "red"
            },
            onClick: ()=>{
                i(null),
                r("stats")
            }
            ,
            children: "Close"
        })]
    }), d.jsx("hr", {}), d.jsx(D, {
        children: "Copy the text below to export your character. Use import to bring your characters to other rooms:"
    }), d.jsx("textarea", {
        className: "input-stat",
        rows: 40,
        cols: 89,
        style: {
            textAlign: "left",
            color: "#FFF",
            height: 150,
            margin: 0,
            width: 485,
            padding: 4
        },
        value: e,
        readOnly: !0
    }), d.jsx("button", {
        className: "button",
        style: {
            marginLeft: 4,
            padding: 5,
            float: "right",
            width: 150
        },
        onClick: ()=>{
            navigator.clipboard.writeText(e),
            n(!0),
            setTimeout(()=>{
                n(!1)
            }
            , 1500)
        }
        ,
        children: t ? "Copied to Clipboard" : "Copy Text"
    })]
})
  , ag = ({importData: e, setImportData: t, importCharacter: n, setPlayer: i, setTab: r})=>d.jsxs("div", {
    children: [d.jsxs("div", {
        children: [d.jsx("span", {
            style: {
                fontSize: 13,
                color: "White"
            },
            className: "outline",
            children: "Import:"
        }), d.jsx("button", {
            className: "button",
            style: {
                marginLeft: 4,
                width: "auto",
                padding: 5,
                float: "right",
                color: "red"
            },
            onClick: ()=>{
                i(null),
                r("stats")
            }
            ,
            children: "Close"
        })]
    }), d.jsx("hr", {}), d.jsx(D, {
        children: "Paste the exported text below to import your character. Use export to bring your characters to other rooms:"
    }), d.jsx("textarea", {
        className: "input-stat",
        rows: 40,
        cols: 89,
        style: {
            textAlign: "left",
            color: "#FFF",
            height: 150,
            margin: 0,
            width: 485,
            padding: 4
        },
        value: e,
        onChange: a=>{
            t(a.target.value)
        }
    }), d.jsx("button", {
        className: "button",
        style: {
            marginLeft: 4,
            padding: 5,
            float: "right",
            color: "white",
            width: 150
        },
        onClick: ()=>{
            n()
        }
        ,
        children: "Import"
    })]
})
  , og = [{
    type: "IMAGE",
    layer: "MAP",
    id: "b2973f10-6227-49ff-82fc-5d4753df76ca",
    name: "Background",
    position: {
        x: -680.3928571428573,
        y: -23.17857142857133
    },
    rotation: 0,
    scale: {
        x: 1,
        y: 1
    },
    visible: !0,
    locked: !0,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1687677149078,
    lastModified: "2023-06-25T07:12:29.078Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        width: 2100,
        height: 1400,
        mime: "image/jpeg",
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/3dbde5b3-fcdc-4d1e-827c-6a73f9d4ea4d.jpg"
    },
    grid: {
        dpi: 70,
        offset: {
            x: 0,
            y: 0
        }
    },
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: "",
        style: {
            padding: 8,
            fontFamily: "Roboto",
            fontSize: 24,
            fontWeight: 400,
            textAlign: "CENTER",
            textAlignVertical: "BOTTOM",
            fillColor: "#ffffff",
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeOpacity: 1,
            strokeWidth: 0,
            lineHeight: 1.5
        },
        type: "PLAIN",
        width: "AUTO",
        height: "AUTO"
    },
    textItemType: "LABEL"
}, {
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    id: "4272fce8-20d4-42f8-95d2-9c93d7b89663",
    name: "Fog Rectangle",
    zIndex: 1687677992781,
    lastModified: "2023-06-25T07:26:26.970Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    locked: !1,
    metadata: {},
    position: {
        x: -12657.096243685424,
        y: -13843.330023697345
    },
    rotation: 0,
    scale: {
        x: 1,
        y: 1
    },
    type: "SHAPE",
    visible: !0,
    layer: "FOG",
    width: 27003.86199511949,
    height: 13822.410267883663,
    shapeType: "RECTANGLE",
    style: {
        fillColor: "#222222",
        fillOpacity: 1,
        strokeColor: "#222222",
        strokeOpacity: 1,
        strokeWidth: 5,
        strokeDash: []
    }
}, {
    type: "IMAGE",
    layer: "MAP",
    id: "269910ec-1d13-472c-9e4c-0be49bd98a52",
    name: "Screen Shot 2022-12-13 At 12.35.03 AM",
    position: {
        x: -60.97424811957944,
        y: 3181.536935705458
    },
    rotation: 0,
    scale: {
        x: 1.9664672218434867,
        y: 1.9664672218434867
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1708420503401,
    lastModified: "2024-02-20T09:15:03.403Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/733e0e29-05ea-43e7-aa3f-1c0a42d06f5b.png",
        mime: "image/png",
        width: 2104,
        height: 1620
    },
    grid: {
        dpi: 150,
        offset: {
            x: 0,
            y: 0
        }
    },
    text: {
        type: "PLAIN",
        style: {
            padding: 8,
            fontSize: 24,
            fillColor: "#ffffff",
            textAlign: "CENTER",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: 1.5,
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeWidth: 0,
            strokeOpacity: 1,
            textAlignVertical: "BOTTOM"
        },
        width: "AUTO",
        height: "AUTO",
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: ""
    },
    textItemType: "LABEL"
}, {
    type: "IMAGE",
    layer: "MAP",
    id: "3f684d8e-568e-4b6b-b293-688ceb84c411",
    name: "Screen Shot 2022-12-13 At 12.35.15 AM",
    position: {
        x: 4133.276851711925,
        y: 3192.1681058051427
    },
    rotation: 0,
    scale: {
        x: 1.9664672218434867,
        y: 1.9664672218434867
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1708420317249,
    lastModified: "2024-02-20T09:11:57.252Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/79a7d656-b362-495c-a776-414665a4aeb8.png",
        mime: "image/png",
        width: 2086,
        height: 1610
    },
    grid: {
        dpi: 150,
        offset: {
            x: 0,
            y: 0
        }
    },
    text: {
        type: "PLAIN",
        style: {
            padding: 8,
            fontSize: 24,
            fillColor: "#ffffff",
            textAlign: "CENTER",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: 1.5,
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeWidth: 0,
            strokeOpacity: 1,
            textAlignVertical: "BOTTOM"
        },
        width: "AUTO",
        height: "AUTO",
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: ""
    },
    textItemType: "LABEL"
}, {
    type: "IMAGE",
    id: "d0eb6935-908c-43a9-8607-71b3bdc47b50",
    name: "HP Bar",
    position: {
        x: 3748.979520214836,
        y: 300.347092824967
    },
    rotation: 0,
    scale: {
        x: .7287825926325873,
        y: .7260009796836081
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1729513542501,
    lastModified: "2025-08-22T15:41:35.925Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/f8e5fbfa-753c-4d36-be4f-fb0c69c21c01.png",
        mime: "image/png",
        width: 400,
        height: 131
    },
    grid: {
        dpi: 100,
        offset: {
            x: 132.51402409717997,
            y: 12.21353786270646
        }
    },
    text: {
        type: "RICH",
        style: {
            padding: 16,
            fontSize: 38,
            fillColor: "#ffffff",
            textAlign: "LEFT",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: 1.5,
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeWidth: 6,
            strokeOpacity: 1,
            textAlignVertical: "TOP"
        },
        width: "AUTO",
        height: "AUTO",
        richText: [{
            type: "paragraph",
            children: [{
                text: "45/45"
            }]
        }],
        plainText: ""
    },
    textItemType: "TEXT",
    layer: "NOTE"
}, {
    type: "IMAGE",
    id: "90c382b9-a42b-4140-88dd-91ef42f87d19",
    name: "MP Bar",
    position: {
        x: 3745.6879069561546,
        y: 448.71990733641854
    },
    rotation: 0,
    scale: {
        x: .722519165750533,
        y: .722519165750533
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1729513550209,
    lastModified: "2025-08-22T15:41:44.955Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/4cd0b1ad-4c94-42de-ac3c-f32f423ba7ed.png",
        mime: "image/png",
        width: 400,
        height: 131
    },
    grid: {
        dpi: 100,
        offset: {
            x: 130.59684652183535,
            y: 12.762973909642675
        }
    },
    text: {
        type: "RICH",
        style: {
            padding: 16,
            fontSize: 38,
            fillColor: "#ffffff",
            textAlign: "LEFT",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: 1.5,
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeWidth: 6,
            strokeOpacity: 1,
            textAlignVertical: "TOP"
        },
        width: "AUTO",
        height: "AUTO",
        richText: [{
            type: "paragraph",
            children: [{
                text: "45/45"
            }]
        }],
        plainText: ""
    },
    textItemType: "TEXT",
    layer: "NOTE"
}, {
    type: "IMAGE",
    id: "2ca9e276-bb65-4de1-9be9-52a90ee693d0",
    name: "Defense",
    position: {
        x: 3980.5787141552373,
        y: 269.7653341486897
    },
    rotation: 0,
    scale: {
        x: 2.0953965527871183,
        y: 2.0953965527871183
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1729513542497,
    lastModified: "2024-10-21T15:34:12.243Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/5f24467f-29a0-4af1-960f-e52a46fe517d.png",
        mime: "image/png",
        width: 64,
        height: 64
    },
    grid: {
        dpi: 150,
        offset: {
            x: -.19854567207255544,
            y: -4.353890229191904
        }
    },
    text: {
        type: "RICH",
        style: {
            padding: 16,
            fontSize: 15,
            fillColor: "#ffd433",
            textAlign: "LEFT",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: 1.5,
            fillOpacity: 1,
            strokeColor: "#ffd433",
            strokeWidth: 0,
            strokeOpacity: 1,
            textAlignVertical: "TOP"
        },
        width: "AUTO",
        height: "AUTO",
        richText: [{
            type: "heading-one",
            children: [{
                text: " 8"
            }]
        }],
        plainText: ""
    },
    textItemType: "TEXT",
    layer: "NOTE"
}, {
    type: "IMAGE",
    id: "49835b04-7d49-4950-890a-24aa8a0e0891",
    name: "Magic Defense",
    position: {
        x: 3980.8138609555444,
        y: 412.9844888130488
    },
    rotation: 0,
    scale: {
        x: 2.0953965527871183,
        y: 2.0953965527871183
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1729513546950,
    lastModified: "2024-10-21T15:33:47.311Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/06431777-d417-4f0b-b6f5-46caad057821.png",
        mime: "image/png",
        width: 64,
        height: 64
    },
    grid: {
        dpi: 150,
        offset: {
            x: -.31369787936330384,
            y: -5.643083045508547
        }
    },
    text: {
        type: "RICH",
        style: {
            padding: 16,
            fontSize: 15,
            fillColor: "#ffffff",
            textAlign: "LEFT",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: 1.5,
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeWidth: 4,
            strokeOpacity: 1,
            textAlignVertical: "TOP"
        },
        width: "AUTO",
        height: "AUTO",
        richText: [{
            type: "heading-one",
            children: [{
                text: " 8"
            }]
        }],
        plainText: ""
    },
    textItemType: "TEXT",
    layer: "NOTE"
}, {
    type: "IMAGE",
    id: "7045d90c-eb29-4584-baae-b0eb396fa40b",
    name: "Fabula",
    position: {
        x: 4152.411856594318,
        y: 390.1604682478427
    },
    rotation: 0,
    scale: {
        x: 1.7695060313481694,
        y: 1.7695060313481694
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1729513542503,
    lastModified: "2024-10-21T15:34:04.709Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/4152eb08-6b1a-4506-ad3a-764f0dcf2ca6.png",
        mime: "image/png",
        width: 64,
        height: 64
    },
    grid: {
        dpi: 100,
        offset: {
            x: 4.8435053402197,
            y: -5.18037729297815
        }
    },
    text: {
        type: "RICH",
        style: {
            padding: 16,
            fontSize: 21,
            fillColor: "#ffd433",
            textAlign: "LEFT",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: 1.5,
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeWidth: 4,
            strokeOpacity: 1,
            textAlignVertical: "TOP"
        },
        width: "AUTO",
        height: "AUTO",
        richText: [{
            type: "paragraph",
            children: [{
                text: " 3"
            }]
        }],
        plainText: ""
    },
    textItemType: "TEXT",
    layer: "NOTE"
}, {
    type: "IMAGE",
    id: "1320ced2-c51e-4c67-a141-7f216f9ab756",
    name: "Inventory Points",
    position: {
        x: 4209.612215256499,
        y: 296.94905427780157
    },
    rotation: 0,
    scale: {
        x: .6730161694731979,
        y: .6730161694731979
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1729513542500,
    lastModified: "2024-10-21T15:34:02.921Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/b55125b3-8003-405b-841c-d575bda2ddf8.png",
        mime: "image/png",
        width: 370,
        height: 174
    },
    grid: {
        dpi: 150,
        offset: {
            x: 109,
            y: 12.50504478758296
        }
    },
    text: {
        type: "RICH",
        style: {
            padding: 16,
            fontSize: 72,
            fillColor: "#e7942f",
            textAlign: "LEFT",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: 1.5,
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeWidth: 5,
            strokeOpacity: 1,
            textAlignVertical: "TOP"
        },
        width: "AUTO",
        height: "AUTO",
        richText: [{
            type: "paragraph",
            children: [{
                text: "6"
            }]
        }],
        plainText: ""
    },
    textItemType: "TEXT",
    layer: "NOTE"
}, {
    type: "IMAGE",
    id: "4e084a7b-e7d7-4757-b3e8-13ccc73216d8",
    name: "Zero Clock",
    position: {
        x: 3455.2752529162617,
        y: 561.7643165716047
    },
    rotation: 0,
    scale: {
        x: 2.3701959653889046,
        y: 2.3701959653889046
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1708419966156,
    lastModified: "2024-02-20T09:06:06.160Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/d936d3a5-cf4b-4d07-bc3a-705bd8c96fb4.png",
        mime: "image/png",
        width: 314,
        height: 73
    },
    grid: {
        dpi: 150,
        offset: {
            x: 0,
            y: 0
        }
    },
    text: {
        type: "RICH",
        style: {
            padding: 16,
            fontSize: 24,
            fillColor: "#222222",
            textAlign: "LEFT",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: 1.5,
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeWidth: 0,
            strokeOpacity: 1,
            textAlignVertical: "TOP"
        },
        width: "AUTO",
        height: "AUTO",
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: ""
    },
    textItemType: "TEXT",
    layer: "NOTE"
}, {
    type: "IMAGE",
    id: "383e4fee-bd2f-4461-a911-aad6bb015212",
    name: "Sheet-O-Peypa (1)",
    position: {
        x: 4729.233569131909,
        y: 628.1896224573743
    },
    rotation: 0,
    scale: {
        x: 2.121914909751327,
        y: 2.121914909751327
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1708420039977,
    lastModified: "2024-02-20T09:07:19.979Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/e411bfc2-a0cf-45ec-abb3-23f4b40e195a.png",
        mime: "image/png",
        width: 479,
        height: 961
    },
    grid: {
        dpi: 150,
        offset: {
            x: 31,
            y: 91
        }
    },
    text: {
        type: "RICH",
        style: {
            padding: 16,
            fontSize: 24,
            fillColor: "#ffd433",
            textAlign: "LEFT",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: 1.5,
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeWidth: 4,
            strokeOpacity: 1,
            textAlignVertical: "TOP"
        },
        width: "AUTO",
        height: "AUTO",
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: ""
    },
    textItemType: "TEXT",
    layer: "NOTE"
}, {
    type: "IMAGE",
    id: "1ff2d075-59c7-422c-b683-0e02cb197456",
    name: "General",
    position: {
        x: 6020.397399058819,
        y: 741.8595572105529
    },
    rotation: 0,
    scale: {
        x: 2.272830000944085,
        y: 2.272830000944085
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1708420112261,
    lastModified: "2024-10-21T11:38:36.417Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/557e7fc1-4d77-4373-8e1f-e6acebd791e6.png",
        mime: "image/png",
        width: 700,
        height: 141
    },
    grid: {
        dpi: 150,
        offset: {
            x: 101,
            y: 41
        }
    },
    text: {
        type: "RICH",
        style: {
            padding: 16,
            fontSize: 21,
            fillColor: "#ffd433",
            textAlign: "LEFT",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: 1.5,
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeWidth: 4,
            strokeOpacity: 1,
            textAlignVertical: "TOP"
        },
        width: "AUTO",
        height: "AUTO",
        richText: [{
            type: "paragraph",
            children: [{
                text: "Testing one two three"
            }]
        }],
        plainText: ""
    },
    textItemType: "TEXT",
    layer: "NOTE"
}, {
    type: "IMAGE",
    id: "9b3ec360-a786-47d3-9964-4b5c7964b8a3",
    name: "Final Ao",
    position: {
        x: 6028.427082230724,
        y: 951.9129278499345
    },
    rotation: 0,
    scale: {
        x: 2.272830000944085,
        y: 2.272830000944085
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1708420112262,
    lastModified: "2024-02-20T09:08:32.264Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/29d3761e-d14c-42d4-b1ef-1a9b0c05276a.png",
        mime: "image/png",
        width: 700,
        height: 154
    },
    grid: {
        dpi: 150,
        offset: {
            x: 106,
            y: 46
        }
    },
    text: {
        type: "RICH",
        style: {
            padding: 16,
            fontSize: 21,
            fillColor: "#44e0f1",
            textAlign: "LEFT",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: 1.5,
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeWidth: 4,
            strokeOpacity: 1,
            textAlignVertical: "TOP"
        },
        width: "AUTO",
        height: "AUTO",
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: ""
    },
    textItemType: "TEXT",
    layer: "NOTE"
}, {
    type: "IMAGE",
    id: "771d984f-6e4f-4a45-a3aa-beb617ab3dbf",
    name: "Warning",
    position: {
        x: 6027.440578298186,
        y: 1156.0941045033835
    },
    rotation: 0,
    scale: {
        x: 2.5157662752532923,
        y: 2.5157662752532923
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1708420112264,
    lastModified: "2024-02-20T09:08:32.264Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/3e1a806b-1c47-425a-9df9-ecf97ef7e73d.png",
        mime: "image/png",
        width: 700,
        height: 141
    },
    grid: {
        dpi: 167.19745222929942,
        offset: {
            x: 106,
            y: 37
        }
    },
    text: {
        type: "RICH",
        style: {
            padding: 16,
            fontSize: 21,
            fillColor: "#ff4d4d",
            textAlign: "LEFT",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: 1.5,
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeWidth: 4,
            strokeOpacity: 1,
            textAlignVertical: "TOP"
        },
        width: "AUTO",
        height: "AUTO",
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: ""
    },
    textItemType: "TEXT",
    layer: "NOTE"
}, {
    type: "IMAGE",
    id: "296a8ab2-a755-46dd-93cf-7c18c2c516ee",
    name: "Bonus",
    position: {
        x: 6024.412240644769,
        y: 1354.993904860799
    },
    rotation: 0,
    scale: {
        x: 2.272830000944085,
        y: 2.272830000944085
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1708420112263,
    lastModified: "2024-02-20T09:08:32.264Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/044b1e84-4d46-4854-927f-e98d40ddc205.png",
        mime: "image/png",
        width: 700,
        height: 142
    },
    grid: {
        dpi: 150,
        offset: {
            x: 105,
            y: 37
        }
    },
    text: {
        type: "RICH",
        style: {
            padding: 16,
            fontSize: 21,
            fillColor: "#85ff66",
            textAlign: "LEFT",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: 1.5,
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeWidth: 4,
            strokeOpacity: 1,
            textAlignVertical: "TOP"
        },
        width: "AUTO",
        height: "AUTO",
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: ""
    },
    textItemType: "TEXT",
    layer: "NOTE"
}, {
    type: "IMAGE",
    id: "3ca777d1-1fa0-4c5b-b82b-78d153fc9874",
    name: "Dazed",
    position: {
        x: 6003.946555551561,
        y: 1629.936352772513
    },
    rotation: 0,
    scale: {
        x: 1,
        y: 1
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1708420133478,
    lastModified: "2024-02-20T09:08:53.480Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/6ad33f4f-c756-4320-b62b-8c4719a3f294.png",
        mime: "image/png",
        width: 116,
        height: 114
    },
    grid: {
        dpi: 150,
        offset: {
            x: 6,
            y: -43
        }
    },
    text: {
        type: "RICH",
        style: {
            padding: 16,
            fontSize: 24,
            fillColor: "#ffd433",
            textAlign: "LEFT",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: 1.5,
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeWidth: 6,
            strokeOpacity: 1,
            textAlignVertical: "TOP"
        },
        width: "AUTO",
        height: "AUTO",
        richText: [{
            type: "paragraph",
            children: [{
                text: "Dazed"
            }]
        }],
        plainText: ""
    },
    textItemType: "TEXT",
    layer: "ATTACHMENT"
}, {
    type: "IMAGE",
    id: "e09f7614-517f-433c-93ac-ee93195d7bde",
    name: "Enraged",
    position: {
        x: 6281.1188573346835,
        y: 1632.5128096823503
    },
    rotation: 0,
    scale: {
        x: 1,
        y: 1
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1708420138233,
    lastModified: "2024-02-20T09:08:58.235Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/88cdb66c-9926-4d5d-9f7e-4fb51c95858a.png",
        mime: "image/png",
        width: 126,
        height: 117
    },
    grid: {
        dpi: 150,
        offset: {
            x: 2,
            y: -42
        }
    },
    text: {
        type: "RICH",
        style: {
            padding: 16,
            fontSize: 24,
            fillColor: "#ffd433",
            textAlign: "LEFT",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: 1.5,
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeWidth: 5,
            strokeOpacity: 1,
            textAlignVertical: "TOP"
        },
        width: "AUTO",
        height: "AUTO",
        richText: [{
            type: "paragraph",
            children: [{
                text: "Enraged"
            }]
        }],
        plainText: ""
    },
    textItemType: "TEXT",
    layer: "ATTACHMENT"
}, {
    type: "IMAGE",
    id: "41875717-03d4-4e7b-80c5-bf23abad15c5",
    name: "Shaken",
    position: {
        x: 6431.279689417105,
        y: 1625.7897991845862
    },
    rotation: 0,
    scale: {
        x: 1,
        y: 1
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1708420140132,
    lastModified: "2024-02-20T09:09:00.134Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/21a042d4-1b16-4984-96bb-79117db6b4e5.png",
        mime: "image/png",
        width: 121,
        height: 109
    },
    grid: {
        dpi: 150,
        offset: {
            x: 3,
            y: -43
        }
    },
    text: {
        type: "RICH",
        style: {
            padding: 16,
            fontSize: 24,
            fillColor: "#ffd433",
            textAlign: "LEFT",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: 1.5,
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeWidth: 5,
            strokeOpacity: 1,
            textAlignVertical: "TOP"
        },
        width: "AUTO",
        height: "AUTO",
        richText: [{
            type: "paragraph",
            children: [{
                text: "Shaken"
            }]
        }],
        plainText: ""
    },
    textItemType: "TEXT",
    layer: "ATTACHMENT"
}, {
    type: "IMAGE",
    id: "2794a5a8-94c7-463a-9d0f-3dfb3e70cb36",
    name: "Poisoned",
    position: {
        x: 6574.557172126793,
        y: 1628.6306456717512
    },
    rotation: 0,
    scale: {
        x: 1,
        y: 1
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1708420141990,
    lastModified: "2024-02-20T09:09:01.992Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/283a97c9-cf33-411b-a105-6c605d7d3b25.png",
        mime: "image/png",
        width: 122,
        height: 112
    },
    grid: {
        dpi: 150,
        offset: {
            x: -6,
            y: -47
        }
    },
    text: {
        type: "RICH",
        style: {
            padding: 16,
            fontSize: 24,
            fillColor: "#ffd433",
            textAlign: "LEFT",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: 1.5,
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeWidth: 5,
            strokeOpacity: 1,
            textAlignVertical: "TOP"
        },
        width: "AUTO",
        height: "AUTO",
        richText: [{
            type: "paragraph",
            children: [{
                text: "Poisoned"
            }]
        }],
        plainText: ""
    },
    textItemType: "TEXT",
    layer: "ATTACHMENT"
}, {
    type: "IMAGE",
    id: "8375a85b-93cf-46d8-8206-6147e68ad884",
    name: "Slow",
    position: {
        x: 6156.979277763281,
        y: 1626.3397123457728
    },
    rotation: 0,
    scale: {
        x: 1,
        y: 1
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1708420135893,
    lastModified: "2024-02-20T09:08:55.895Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/a7dd52d4-6064-4f32-a742-27adc8c77cda.png",
        mime: "image/png",
        width: 125,
        height: 112
    },
    grid: {
        dpi: 150,
        offset: {
            x: 19,
            y: -44
        }
    },
    text: {
        type: "RICH",
        style: {
            padding: 16,
            fontSize: 24,
            fillColor: "#ffd433",
            textAlign: "LEFT",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: 1.5,
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeWidth: 5,
            strokeOpacity: 1,
            textAlignVertical: "TOP"
        },
        width: "AUTO",
        height: "AUTO",
        richText: [{
            type: "paragraph",
            children: [{
                text: "Slow"
            }]
        }],
        plainText: ""
    },
    textItemType: "TEXT",
    layer: "ATTACHMENT"
}, {
    type: "IMAGE",
    id: "0fc5d21e-c49d-44b9-9639-3e2108028a88",
    name: "Weak",
    position: {
        x: 5866.86417801686,
        y: 1621.7097699889252
    },
    rotation: 0,
    scale: {
        x: 1,
        y: 1
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1708420153421,
    lastModified: "2024-02-20T09:09:13.424Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/01fc0c8b-68b9-40a3-859c-680edde55008.png",
        mime: "image/png",
        width: 122,
        height: 109
    },
    grid: {
        dpi: 150,
        offset: {
            x: 13,
            y: -49
        }
    },
    text: {
        type: "RICH",
        style: {
            padding: 16,
            fontSize: 24,
            fillColor: "#ffd433",
            textAlign: "LEFT",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: 1.5,
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeWidth: 5,
            strokeOpacity: 1,
            textAlignVertical: "TOP"
        },
        width: "AUTO",
        height: "AUTO",
        richText: [{
            type: "paragraph",
            children: [{
                text: "Weak"
            }]
        }],
        plainText: ""
    },
    textItemType: "TEXT",
    layer: "ATTACHMENT"
}, {
    type: "IMAGE",
    id: "03d1d2ba-f850-4f97-8743-a9efaf93e7ba",
    name: "Fabula Ultima Landing Page",
    position: {
        x: -2945.851584806655,
        y: 1475.814152247975
    },
    rotation: 0,
    scale: {
        x: 5.01515017032366,
        y: 5.01515017032366
    },
    visible: !0,
    locked: !0,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1708420241905,
    lastModified: "2024-02-20T09:10:52.688Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/553b099e-7da7-468d-950e-681420a94e59.png",
        mime: "image/png",
        width: 2100,
        height: 1400
    },
    grid: {
        dpi: 350,
        offset: {
            x: 1050,
            y: 700
        }
    },
    text: {
        type: "PLAIN",
        style: {
            padding: 8,
            fontSize: 16,
            fillColor: "#ffffff",
            textAlign: "CENTER",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: 1.5,
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeWidth: 0,
            strokeOpacity: 1,
            textAlignVertical: "BOTTOM"
        },
        width: "AUTO",
        height: "AUTO",
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: ""
    },
    textItemType: "LABEL",
    layer: "DRAWING"
}, {
    type: "IMAGE",
    id: "30059037-4c57-498c-b95a-9132207476ad",
    name: "Fabula Ultima Landing Page 2",
    position: {
        x: -2900.4760580454044,
        y: 1622.599909399586
    },
    rotation: 0,
    scale: {
        x: 3.637967902802777,
        y: 3.637967902802777
    },
    visible: !0,
    locked: !0,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1708420247588,
    lastModified: "2024-02-20T09:10:53.928Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/aad3ea16-8820-4220-b02b-e151fb601cdf.png",
        mime: "image/png",
        width: 2100,
        height: 1400
    },
    grid: {
        dpi: 350,
        offset: {
            x: 1050,
            y: 700
        }
    },
    text: {
        type: "PLAIN",
        style: {
            padding: 8,
            fontSize: 16,
            fillColor: "#ffffff",
            textAlign: "CENTER",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: 1.5,
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeWidth: 0,
            strokeOpacity: 1,
            textAlignVertical: "BOTTOM"
        },
        width: "AUTO",
        height: "AUTO",
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: ""
    },
    textItemType: "LABEL",
    layer: "MAP"
}, {
    type: "IMAGE",
    id: "1d8c4bb3-0567-4007-af19-aeed73112d02",
    name: "Map",
    position: {
        x: -3909.1488539163915,
        y: 3384.731104729356
    },
    rotation: 0,
    scale: {
        x: 1.71387714596739,
        y: 1.71387714596739
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1708420324079,
    lastModified: "2024-02-20T09:12:04.080Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/7cc9a43a-16cc-408f-9b58-816b96545e02.jpg",
        mime: "image/jpeg",
        width: 2174,
        height: 1526
    },
    grid: {
        dpi: 150,
        offset: {
            x: 0,
            y: 0
        }
    },
    text: {
        type: "PLAIN",
        style: {
            padding: 8,
            fontSize: 24,
            fillColor: "#ffffff",
            textAlign: "CENTER",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: 1.5,
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeWidth: 0,
            strokeOpacity: 1,
            textAlignVertical: "BOTTOM"
        },
        width: "AUTO",
        height: "AUTO",
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: ""
    },
    textItemType: "LABEL",
    layer: "MAP"
}, {
    type: "IMAGE",
    id: "285cfea0-218f-4634-8bee-0d49c7dca716",
    name: "Frame",
    position: {
        x: 843.7987740253769,
        y: 183.42671613972337
    },
    rotation: 0,
    scale: {
        x: .5233369315637454,
        y: .5233369315637454
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1754065483008,
    lastModified: "2025-08-01T16:37:48.131Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        width: 1050,
        height: 1050,
        mime: "image/png",
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/d22caa29-b440-49ac-83ea-c28fadbc0fda.png"
    },
    grid: {
        dpi: 35,
        offset: {
            x: 0,
            y: 0
        }
    },
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: "",
        style: {
            padding: 8,
            fontFamily: "Roboto",
            fontSize: 24,
            fontWeight: 400,
            textAlign: "CENTER",
            textAlignVertical: "BOTTOM",
            fillColor: "#ffffff",
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeOpacity: 1,
            strokeWidth: 0,
            lineHeight: 1.5
        },
        type: "PLAIN",
        width: "AUTO",
        height: "AUTO"
    },
    textItemType: "LABEL",
    layer: "PROP"
}, {
    type: "IMAGE",
    id: "9016d4be-1702-4524-9f21-bc759b69152a",
    name: "Generic Frame",
    position: {
        x: 7055.064480180146,
        y: 702.8802793554668
    },
    rotation: 0,
    scale: {
        x: 1.9679948238839167,
        y: 1.9679948238839167
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1708420460363,
    lastModified: "2024-02-20T09:14:20.364Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        width: 515,
        height: 441,
        mime: "image/png",
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/ab74b2e4-3a1f-4c99-b5df-fdd6d8002c9e.png"
    },
    grid: {
        dpi: 150,
        offset: {
            x: 0,
            y: 0
        }
    },
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: "",
        style: {
            padding: 8,
            fontFamily: "Roboto",
            fontSize: 24,
            fontWeight: 400,
            textAlign: "CENTER",
            textAlignVertical: "BOTTOM",
            fillColor: "#ffffff",
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeOpacity: 1,
            strokeWidth: 0,
            lineHeight: 1.5
        },
        type: "PLAIN",
        width: "AUTO",
        height: "AUTO"
    },
    textItemType: "LABEL",
    layer: "MOUNT"
}, {
    type: "IMAGE",
    id: "5299a628-894e-474f-86cb-7e15fb033adf",
    name: "Layout (Put In Mount Layer)",
    position: {
        x: -611.3890310629346,
        y: -22.908282386367404
    },
    rotation: 0,
    scale: {
        x: 2.0068339379657743,
        y: 2.0068339379657743
    },
    visible: !0,
    locked: !0,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1705746404749,
    lastModified: "2024-10-21T15:35:34.173Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        width: 4200,
        height: 1400,
        mime: "image/png",
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/d4c1de37-f87a-44c4-9c3d-585047daf16c.png"
    },
    grid: {
        dpi: 140,
        offset: {
            x: 0,
            y: 0
        }
    },
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: "",
        style: {
            padding: 8,
            fontFamily: "Roboto",
            fontSize: 24,
            fontWeight: 400,
            textAlign: "CENTER",
            textAlignVertical: "BOTTOM",
            fillColor: "#ffffff",
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeOpacity: 1,
            strokeWidth: 0,
            lineHeight: 1.5
        },
        type: "PLAIN",
        width: "AUTO",
        height: "AUTO"
    },
    textItemType: "LABEL",
    layer: "MOUNT"
}, {
    type: "IMAGE",
    id: "336a9344-16b2-41a1-8bbc-1687746d49a4",
    name: "HP Bar",
    position: {
        x: 3752.38809087339,
        y: 750.9028626577599
    },
    rotation: 0,
    scale: {
        x: .7287825926325873,
        y: .7260009796836081
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1729524870771,
    lastModified: "2025-08-22T15:42:02.277Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/f8e5fbfa-753c-4d36-be4f-fb0c69c21c01.png",
        mime: "image/png",
        width: 400,
        height: 131
    },
    grid: {
        dpi: 100,
        offset: {
            x: 132.51402409717997,
            y: 12.21353786270646
        }
    },
    text: {
        type: "RICH",
        style: {
            padding: 16,
            fontSize: 38,
            fillColor: "#ffffff",
            textAlign: "LEFT",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: 1.5,
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeWidth: 6,
            strokeOpacity: 1,
            textAlignVertical: "TOP"
        },
        width: "AUTO",
        height: "AUTO",
        richText: [{
            type: "paragraph",
            children: [{
                text: "45/45"
            }]
        }],
        plainText: ""
    },
    textItemType: "TEXT",
    layer: "NOTE"
}, {
    type: "IMAGE",
    id: "5f790129-3e6c-489a-a3c3-25212fe5aeae",
    name: "MP Bar",
    position: {
        x: 3749.0964776147084,
        y: 899.2756771692116
    },
    rotation: 0,
    scale: {
        x: .722519165750533,
        y: .722519165750533
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1729524870774,
    lastModified: "2025-08-22T15:42:08.971Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/4cd0b1ad-4c94-42de-ac3c-f32f423ba7ed.png",
        mime: "image/png",
        width: 400,
        height: 131
    },
    grid: {
        dpi: 100,
        offset: {
            x: 130.59684652183535,
            y: 12.762973909642675
        }
    },
    text: {
        type: "RICH",
        style: {
            padding: 16,
            fontSize: 38,
            fillColor: "#ffffff",
            textAlign: "LEFT",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: 1.5,
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeWidth: 6,
            strokeOpacity: 1,
            textAlignVertical: "TOP"
        },
        width: "AUTO",
        height: "AUTO",
        richText: [{
            type: "paragraph",
            children: [{
                text: "45/45"
            }]
        }],
        plainText: ""
    },
    textItemType: "TEXT",
    layer: "NOTE"
}, {
    type: "IMAGE",
    id: "50276d7f-04ca-4fc4-984f-36ba278e9791",
    name: "Zero Clock",
    position: {
        x: 3458.6838235748155,
        y: 1012.3200864043977
    },
    rotation: 0,
    scale: {
        x: 2.3701959653889046,
        y: 2.3701959653889046
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1729524870767,
    lastModified: "2024-10-21T15:34:30.771Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/d936d3a5-cf4b-4d07-bc3a-705bd8c96fb4.png",
        mime: "image/png",
        width: 314,
        height: 73
    },
    grid: {
        dpi: 150,
        offset: {
            x: 0,
            y: 0
        }
    },
    text: {
        type: "RICH",
        style: {
            padding: 16,
            fontSize: 24,
            fillColor: "#222222",
            textAlign: "LEFT",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: 1.5,
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeWidth: 0,
            strokeOpacity: 1,
            textAlignVertical: "TOP"
        },
        width: "AUTO",
        height: "AUTO",
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: ""
    },
    textItemType: "TEXT",
    layer: "NOTE"
}, {
    type: "IMAGE",
    id: "4ea4c5e2-4b56-4caf-b42a-1ac0ff43e7f0",
    name: "Magic Defense",
    position: {
        x: 3984.2224316140982,
        y: 863.5402586458417
    },
    rotation: 0,
    scale: {
        x: 2.0953965527871183,
        y: 2.0953965527871183
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1729524870773,
    lastModified: "2024-10-21T15:34:30.771Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/06431777-d417-4f0b-b6f5-46caad057821.png",
        mime: "image/png",
        width: 64,
        height: 64
    },
    grid: {
        dpi: 150,
        offset: {
            x: -.31369787936330384,
            y: -5.643083045508547
        }
    },
    text: {
        type: "RICH",
        style: {
            padding: 16,
            fontSize: 15,
            fillColor: "#ffffff",
            textAlign: "LEFT",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: 1.5,
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeWidth: 4,
            strokeOpacity: 1,
            textAlignVertical: "TOP"
        },
        width: "AUTO",
        height: "AUTO",
        richText: [{
            type: "heading-one",
            children: [{
                text: " 8"
            }]
        }],
        plainText: ""
    },
    textItemType: "TEXT",
    layer: "NOTE"
}, {
    type: "IMAGE",
    id: "e647a62e-3996-4f0a-9c9d-4082212787de",
    name: "Defense",
    position: {
        x: 3983.987284813791,
        y: 720.3211039814827
    },
    rotation: 0,
    scale: {
        x: 2.0953965527871183,
        y: 2.0953965527871183
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1729524870769,
    lastModified: "2024-10-21T15:34:30.771Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/5f24467f-29a0-4af1-960f-e52a46fe517d.png",
        mime: "image/png",
        width: 64,
        height: 64
    },
    grid: {
        dpi: 150,
        offset: {
            x: -.19854567207255544,
            y: -4.353890229191904
        }
    },
    text: {
        type: "RICH",
        style: {
            padding: 16,
            fontSize: 15,
            fillColor: "#ffd433",
            textAlign: "LEFT",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: 1.5,
            fillOpacity: 1,
            strokeColor: "#ffd433",
            strokeWidth: 0,
            strokeOpacity: 1,
            textAlignVertical: "TOP"
        },
        width: "AUTO",
        height: "AUTO",
        richText: [{
            type: "heading-one",
            children: [{
                text: " 8"
            }]
        }],
        plainText: ""
    },
    textItemType: "TEXT",
    layer: "NOTE"
}, {
    type: "IMAGE",
    id: "9ca397cc-a371-4ff2-a759-0ab800e48288",
    name: "Inventory Points",
    position: {
        x: 4213.020785915053,
        y: 747.5048241105945
    },
    rotation: 0,
    scale: {
        x: .6730161694731979,
        y: .6730161694731979
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1729524870770,
    lastModified: "2024-10-21T15:34:30.771Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/b55125b3-8003-405b-841c-d575bda2ddf8.png",
        mime: "image/png",
        width: 370,
        height: 174
    },
    grid: {
        dpi: 150,
        offset: {
            x: 109,
            y: 12.50504478758296
        }
    },
    text: {
        type: "RICH",
        style: {
            padding: 16,
            fontSize: 72,
            fillColor: "#e7942f",
            textAlign: "LEFT",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: 1.5,
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeWidth: 5,
            strokeOpacity: 1,
            textAlignVertical: "TOP"
        },
        width: "AUTO",
        height: "AUTO",
        richText: [{
            type: "paragraph",
            children: [{
                text: "6"
            }]
        }],
        plainText: ""
    },
    textItemType: "TEXT",
    layer: "NOTE"
}, {
    type: "IMAGE",
    id: "17fdbbd7-b1e5-41f5-b5d6-488db67158da",
    name: "Fabula",
    position: {
        x: 4155.820427252872,
        y: 840.7162380806357
    },
    rotation: 0,
    scale: {
        x: 1.7695060313481694,
        y: 1.7695060313481694
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1729524870772,
    lastModified: "2024-10-21T15:34:30.771Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/4152eb08-6b1a-4506-ad3a-764f0dcf2ca6.png",
        mime: "image/png",
        width: 64,
        height: 64
    },
    grid: {
        dpi: 100,
        offset: {
            x: 4.8435053402197,
            y: -5.18037729297815
        }
    },
    text: {
        type: "RICH",
        style: {
            padding: 16,
            fontSize: 21,
            fillColor: "#ffd433",
            textAlign: "LEFT",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: 1.5,
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeWidth: 4,
            strokeOpacity: 1,
            textAlignVertical: "TOP"
        },
        width: "AUTO",
        height: "AUTO",
        richText: [{
            type: "paragraph",
            children: [{
                text: " 3"
            }]
        }],
        plainText: ""
    },
    textItemType: "TEXT",
    layer: "NOTE"
}, {
    type: "IMAGE",
    id: "71373ed1-7d5f-4448-865a-a0c7b8f461fd",
    name: "HP Bar",
    position: {
        x: 3756.0728121465363,
        y: 1204.8370487238503
    },
    rotation: 0,
    scale: {
        x: .7287825926325873,
        y: .7260009796836081
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1729524881468,
    lastModified: "2025-08-22T15:42:18.227Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/f8e5fbfa-753c-4d36-be4f-fb0c69c21c01.png",
        mime: "image/png",
        width: 400,
        height: 131
    },
    grid: {
        dpi: 100,
        offset: {
            x: 132.51402409717997,
            y: 12.21353786270646
        }
    },
    text: {
        type: "RICH",
        style: {
            padding: 16,
            fontSize: 38,
            fillColor: "#ffffff",
            textAlign: "LEFT",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: 1.5,
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeWidth: 6,
            strokeOpacity: 1,
            textAlignVertical: "TOP"
        },
        width: "AUTO",
        height: "AUTO",
        richText: [{
            type: "paragraph",
            children: [{
                text: "45/45"
            }]
        }],
        plainText: ""
    },
    textItemType: "TEXT",
    layer: "NOTE"
}, {
    type: "IMAGE",
    id: "73ea61b8-e1f6-4500-ac8f-595b55c0567c",
    name: "MP Bar",
    position: {
        x: 3752.7811988878548,
        y: 1353.2098632353018
    },
    rotation: 0,
    scale: {
        x: .722519165750533,
        y: .722519165750533
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1729524881471,
    lastModified: "2025-08-22T15:42:25.742Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/4cd0b1ad-4c94-42de-ac3c-f32f423ba7ed.png",
        mime: "image/png",
        width: 400,
        height: 131
    },
    grid: {
        dpi: 100,
        offset: {
            x: 130.59684652183535,
            y: 12.762973909642675
        }
    },
    text: {
        type: "RICH",
        style: {
            padding: 16,
            fontSize: 38,
            fillColor: "#ffffff",
            textAlign: "LEFT",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: 1.5,
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeWidth: 6,
            strokeOpacity: 1,
            textAlignVertical: "TOP"
        },
        width: "AUTO",
        height: "AUTO",
        richText: [{
            type: "paragraph",
            children: [{
                text: "45/45"
            }]
        }],
        plainText: ""
    },
    textItemType: "TEXT",
    layer: "NOTE"
}, {
    type: "IMAGE",
    id: "c009599b-9ec8-43d7-94cf-a007725597a0",
    name: "Zero Clock",
    position: {
        x: 3462.368544847962,
        y: 1466.254272470488
    },
    rotation: 0,
    scale: {
        x: 2.3701959653889046,
        y: 2.3701959653889046
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1729524881464,
    lastModified: "2024-10-21T15:34:41.471Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/d936d3a5-cf4b-4d07-bc3a-705bd8c96fb4.png",
        mime: "image/png",
        width: 314,
        height: 73
    },
    grid: {
        dpi: 150,
        offset: {
            x: 0,
            y: 0
        }
    },
    text: {
        type: "RICH",
        style: {
            padding: 16,
            fontSize: 24,
            fillColor: "#222222",
            textAlign: "LEFT",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: 1.5,
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeWidth: 0,
            strokeOpacity: 1,
            textAlignVertical: "TOP"
        },
        width: "AUTO",
        height: "AUTO",
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: ""
    },
    textItemType: "TEXT",
    layer: "NOTE"
}, {
    type: "IMAGE",
    id: "ae1873da-5eef-44b8-a41b-e5ce0567f3f4",
    name: "Magic Defense",
    position: {
        x: 3987.9071528872446,
        y: 1317.474444711932
    },
    rotation: 0,
    scale: {
        x: 2.0953965527871183,
        y: 2.0953965527871183
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1729524881470,
    lastModified: "2024-10-21T15:34:41.471Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/06431777-d417-4f0b-b6f5-46caad057821.png",
        mime: "image/png",
        width: 64,
        height: 64
    },
    grid: {
        dpi: 150,
        offset: {
            x: -.31369787936330384,
            y: -5.643083045508547
        }
    },
    text: {
        type: "RICH",
        style: {
            padding: 16,
            fontSize: 15,
            fillColor: "#ffffff",
            textAlign: "LEFT",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: 1.5,
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeWidth: 4,
            strokeOpacity: 1,
            textAlignVertical: "TOP"
        },
        width: "AUTO",
        height: "AUTO",
        richText: [{
            type: "heading-one",
            children: [{
                text: " 8"
            }]
        }],
        plainText: ""
    },
    textItemType: "TEXT",
    layer: "NOTE"
}, {
    type: "IMAGE",
    id: "47f3d764-ba1e-4882-a9bc-af1a90f1dbe5",
    name: "Defense",
    position: {
        x: 3987.6720060869375,
        y: 1174.255290047573
    },
    rotation: 0,
    scale: {
        x: 2.0953965527871183,
        y: 2.0953965527871183
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1729524881466,
    lastModified: "2024-10-21T15:34:41.471Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/5f24467f-29a0-4af1-960f-e52a46fe517d.png",
        mime: "image/png",
        width: 64,
        height: 64
    },
    grid: {
        dpi: 150,
        offset: {
            x: -.19854567207255544,
            y: -4.353890229191904
        }
    },
    text: {
        type: "RICH",
        style: {
            padding: 16,
            fontSize: 15,
            fillColor: "#ffd433",
            textAlign: "LEFT",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: 1.5,
            fillOpacity: 1,
            strokeColor: "#ffd433",
            strokeWidth: 0,
            strokeOpacity: 1,
            textAlignVertical: "TOP"
        },
        width: "AUTO",
        height: "AUTO",
        richText: [{
            type: "heading-one",
            children: [{
                text: " 8"
            }]
        }],
        plainText: ""
    },
    textItemType: "TEXT",
    layer: "NOTE"
}, {
    type: "IMAGE",
    id: "4737c5f2-86bc-4132-b764-6361bc10641e",
    name: "Inventory Points",
    position: {
        x: 4216.7055071882,
        y: 1201.4390101766849
    },
    rotation: 0,
    scale: {
        x: .6730161694731979,
        y: .6730161694731979
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1729524881467,
    lastModified: "2024-10-21T15:34:41.471Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/b55125b3-8003-405b-841c-d575bda2ddf8.png",
        mime: "image/png",
        width: 370,
        height: 174
    },
    grid: {
        dpi: 150,
        offset: {
            x: 109,
            y: 12.50504478758296
        }
    },
    text: {
        type: "RICH",
        style: {
            padding: 16,
            fontSize: 72,
            fillColor: "#e7942f",
            textAlign: "LEFT",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: 1.5,
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeWidth: 5,
            strokeOpacity: 1,
            textAlignVertical: "TOP"
        },
        width: "AUTO",
        height: "AUTO",
        richText: [{
            type: "paragraph",
            children: [{
                text: "6"
            }]
        }],
        plainText: ""
    },
    textItemType: "TEXT",
    layer: "NOTE"
}, {
    type: "IMAGE",
    id: "f3751beb-d4b1-46c0-8e61-b21ea999c68c",
    name: "Fabula",
    position: {
        x: 4159.505148526018,
        y: 1294.650424146726
    },
    rotation: 0,
    scale: {
        x: 1.7695060313481694,
        y: 1.7695060313481694
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1729524881469,
    lastModified: "2024-10-21T15:34:41.471Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/4152eb08-6b1a-4506-ad3a-764f0dcf2ca6.png",
        mime: "image/png",
        width: 64,
        height: 64
    },
    grid: {
        dpi: 100,
        offset: {
            x: 4.8435053402197,
            y: -5.18037729297815
        }
    },
    text: {
        type: "RICH",
        style: {
            padding: 16,
            fontSize: 21,
            fillColor: "#ffd433",
            textAlign: "LEFT",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: 1.5,
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeWidth: 4,
            strokeOpacity: 1,
            textAlignVertical: "TOP"
        },
        width: "AUTO",
        height: "AUTO",
        richText: [{
            type: "paragraph",
            children: [{
                text: " 3"
            }]
        }],
        plainText: ""
    },
    textItemType: "TEXT",
    layer: "NOTE"
}, {
    type: "IMAGE",
    id: "f8d9b13c-f51a-401c-982e-c86a9b5d54af",
    name: "HP Bar",
    position: {
        x: 3764.569632121481,
        y: 1659.1209632577747
    },
    rotation: 0,
    scale: {
        x: .7287825926325873,
        y: .7260009796836081
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1729524890711,
    lastModified: "2025-08-22T15:42:31.428Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/f8e5fbfa-753c-4d36-be4f-fb0c69c21c01.png",
        mime: "image/png",
        width: 400,
        height: 131
    },
    grid: {
        dpi: 100,
        offset: {
            x: 132.51402409717997,
            y: 12.21353786270646
        }
    },
    text: {
        type: "RICH",
        style: {
            padding: 16,
            fontSize: 38,
            fillColor: "#ffffff",
            textAlign: "LEFT",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: 1.5,
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeWidth: 6,
            strokeOpacity: 1,
            textAlignVertical: "TOP"
        },
        width: "AUTO",
        height: "AUTO",
        richText: [{
            type: "paragraph",
            children: [{
                text: "45/45"
            }]
        }],
        plainText: ""
    },
    textItemType: "TEXT",
    layer: "NOTE"
}, {
    type: "IMAGE",
    id: "d497b628-0faf-47e2-a285-11d8acc8344b",
    name: "MP Bar",
    position: {
        x: 3761.2780188627994,
        y: 1807.4937777692262
    },
    rotation: 0,
    scale: {
        x: .722519165750533,
        y: .722519165750533
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1729524890714,
    lastModified: "2025-08-22T15:42:38.268Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/4cd0b1ad-4c94-42de-ac3c-f32f423ba7ed.png",
        mime: "image/png",
        width: 400,
        height: 131
    },
    grid: {
        dpi: 100,
        offset: {
            x: 130.59684652183535,
            y: 12.762973909642675
        }
    },
    text: {
        type: "RICH",
        style: {
            padding: 16,
            fontSize: 38,
            fillColor: "#ffffff",
            textAlign: "LEFT",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: 1.5,
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeWidth: 6,
            strokeOpacity: 1,
            textAlignVertical: "TOP"
        },
        width: "AUTO",
        height: "AUTO",
        richText: [{
            type: "paragraph",
            children: [{
                text: "45/45"
            }]
        }],
        plainText: ""
    },
    textItemType: "TEXT",
    layer: "NOTE"
}, {
    type: "IMAGE",
    id: "f5473cb3-8818-4342-bb40-c810deb636b8",
    name: "Zero Clock",
    position: {
        x: 3470.8653648229065,
        y: 1920.5381870044125
    },
    rotation: 0,
    scale: {
        x: 2.3701959653889046,
        y: 2.3701959653889046
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1729524890707,
    lastModified: "2024-10-21T15:34:50.711Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/d936d3a5-cf4b-4d07-bc3a-705bd8c96fb4.png",
        mime: "image/png",
        width: 314,
        height: 73
    },
    grid: {
        dpi: 150,
        offset: {
            x: 0,
            y: 0
        }
    },
    text: {
        type: "RICH",
        style: {
            padding: 16,
            fontSize: 24,
            fillColor: "#222222",
            textAlign: "LEFT",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: 1.5,
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeWidth: 0,
            strokeOpacity: 1,
            textAlignVertical: "TOP"
        },
        width: "AUTO",
        height: "AUTO",
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: ""
    },
    textItemType: "TEXT",
    layer: "NOTE"
}, {
    type: "IMAGE",
    id: "03dd453a-955b-4a3c-a7df-a566b184ad80",
    name: "Magic Defense",
    position: {
        x: 3996.403972862189,
        y: 1771.7583592458564
    },
    rotation: 0,
    scale: {
        x: 2.0953965527871183,
        y: 2.0953965527871183
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1729524890713,
    lastModified: "2024-10-21T15:34:50.711Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/06431777-d417-4f0b-b6f5-46caad057821.png",
        mime: "image/png",
        width: 64,
        height: 64
    },
    grid: {
        dpi: 150,
        offset: {
            x: -.31369787936330384,
            y: -5.643083045508547
        }
    },
    text: {
        type: "RICH",
        style: {
            padding: 16,
            fontSize: 15,
            fillColor: "#ffffff",
            textAlign: "LEFT",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: 1.5,
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeWidth: 4,
            strokeOpacity: 1,
            textAlignVertical: "TOP"
        },
        width: "AUTO",
        height: "AUTO",
        richText: [{
            type: "heading-one",
            children: [{
                text: " 8"
            }]
        }],
        plainText: ""
    },
    textItemType: "TEXT",
    layer: "NOTE"
}, {
    type: "IMAGE",
    id: "0880147b-2b4f-411b-8fdb-75488498dca1",
    name: "Defense",
    position: {
        x: 3996.168826061882,
        y: 1628.5392045814974
    },
    rotation: 0,
    scale: {
        x: 2.0953965527871183,
        y: 2.0953965527871183
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1729524890709,
    lastModified: "2024-10-21T15:34:50.711Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/5f24467f-29a0-4af1-960f-e52a46fe517d.png",
        mime: "image/png",
        width: 64,
        height: 64
    },
    grid: {
        dpi: 150,
        offset: {
            x: -.19854567207255544,
            y: -4.353890229191904
        }
    },
    text: {
        type: "RICH",
        style: {
            padding: 16,
            fontSize: 15,
            fillColor: "#ffd433",
            textAlign: "LEFT",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: 1.5,
            fillOpacity: 1,
            strokeColor: "#ffd433",
            strokeWidth: 0,
            strokeOpacity: 1,
            textAlignVertical: "TOP"
        },
        width: "AUTO",
        height: "AUTO",
        richText: [{
            type: "heading-one",
            children: [{
                text: " 8"
            }]
        }],
        plainText: ""
    },
    textItemType: "TEXT",
    layer: "NOTE"
}, {
    type: "IMAGE",
    id: "d12f457b-1989-4ec6-bcc4-62dae52776fb",
    name: "Inventory Points",
    position: {
        x: 4225.202327163144,
        y: 1655.7229247106093
    },
    rotation: 0,
    scale: {
        x: .6730161694731979,
        y: .6730161694731979
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1729524890710,
    lastModified: "2024-10-21T15:34:50.711Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/b55125b3-8003-405b-841c-d575bda2ddf8.png",
        mime: "image/png",
        width: 370,
        height: 174
    },
    grid: {
        dpi: 150,
        offset: {
            x: 109,
            y: 12.50504478758296
        }
    },
    text: {
        type: "RICH",
        style: {
            padding: 16,
            fontSize: 72,
            fillColor: "#e7942f",
            textAlign: "LEFT",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: 1.5,
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeWidth: 5,
            strokeOpacity: 1,
            textAlignVertical: "TOP"
        },
        width: "AUTO",
        height: "AUTO",
        richText: [{
            type: "paragraph",
            children: [{
                text: "6"
            }]
        }],
        plainText: ""
    },
    textItemType: "TEXT",
    layer: "NOTE"
}, {
    type: "IMAGE",
    id: "c0f20828-2957-433b-818a-2d09c4d84f7a",
    name: "Fabula",
    position: {
        x: 4168.001968500963,
        y: 1748.9343386806504
    },
    rotation: 0,
    scale: {
        x: 1.7695060313481694,
        y: 1.7695060313481694
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1729524890712,
    lastModified: "2024-10-21T15:34:50.711Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/4152eb08-6b1a-4506-ad3a-764f0dcf2ca6.png",
        mime: "image/png",
        width: 64,
        height: 64
    },
    grid: {
        dpi: 100,
        offset: {
            x: 4.8435053402197,
            y: -5.18037729297815
        }
    },
    text: {
        type: "RICH",
        style: {
            padding: 16,
            fontSize: 21,
            fillColor: "#ffd433",
            textAlign: "LEFT",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: 1.5,
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeWidth: 4,
            strokeOpacity: 1,
            textAlignVertical: "TOP"
        },
        width: "AUTO",
        height: "AUTO",
        richText: [{
            type: "paragraph",
            children: [{
                text: " 3"
            }]
        }],
        plainText: ""
    },
    textItemType: "TEXT",
    layer: "NOTE"
}, {
    type: "IMAGE",
    id: "ce799d2e-465c-49be-bcd0-be5d6804f2ed",
    name: "HP Bar",
    position: {
        x: 3757.9832541258156,
        y: 2107.449184071348
    },
    rotation: 0,
    scale: {
        x: .7287825926325873,
        y: .7260009796836081
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1729524896783,
    lastModified: "2025-08-22T15:42:43.675Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/f8e5fbfa-753c-4d36-be4f-fb0c69c21c01.png",
        mime: "image/png",
        width: 400,
        height: 131
    },
    grid: {
        dpi: 100,
        offset: {
            x: 132.51402409717997,
            y: 12.21353786270646
        }
    },
    text: {
        type: "RICH",
        style: {
            padding: 16,
            fontSize: 38,
            fillColor: "#ffffff",
            textAlign: "LEFT",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: 1.5,
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeWidth: 6,
            strokeOpacity: 1,
            textAlignVertical: "TOP"
        },
        width: "AUTO",
        height: "AUTO",
        richText: [{
            type: "paragraph",
            children: [{
                text: "45/45"
            }]
        }],
        plainText: ""
    },
    textItemType: "TEXT",
    layer: "NOTE"
}, {
    type: "IMAGE",
    id: "74568de5-3154-41d9-b642-c743d37c18a5",
    name: "MP Bar",
    position: {
        x: 3754.691640867134,
        y: 2255.8219985827996
    },
    rotation: 0,
    scale: {
        x: .722519165750533,
        y: .722519165750533
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1729524896786,
    lastModified: "2025-08-22T15:42:48.238Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/4cd0b1ad-4c94-42de-ac3c-f32f423ba7ed.png",
        mime: "image/png",
        width: 400,
        height: 131
    },
    grid: {
        dpi: 100,
        offset: {
            x: 130.59684652183535,
            y: 12.762973909642675
        }
    },
    text: {
        type: "RICH",
        style: {
            padding: 16,
            fontSize: 38,
            fillColor: "#ffffff",
            textAlign: "LEFT",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: 1.5,
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeWidth: 6,
            strokeOpacity: 1,
            textAlignVertical: "TOP"
        },
        width: "AUTO",
        height: "AUTO",
        richText: [{
            type: "paragraph",
            children: [{
                text: "45/45"
            }]
        }],
        plainText: ""
    },
    textItemType: "TEXT",
    layer: "NOTE"
}, {
    type: "IMAGE",
    id: "73e81ca4-0b36-448a-badf-ff0019113243",
    name: "Zero Clock",
    position: {
        x: 3464.278986827241,
        y: 2368.866407817986
    },
    rotation: 0,
    scale: {
        x: 2.3701959653889046,
        y: 2.3701959653889046
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1729524896779,
    lastModified: "2024-10-21T15:34:56.786Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/d936d3a5-cf4b-4d07-bc3a-705bd8c96fb4.png",
        mime: "image/png",
        width: 314,
        height: 73
    },
    grid: {
        dpi: 150,
        offset: {
            x: 0,
            y: 0
        }
    },
    text: {
        type: "RICH",
        style: {
            padding: 16,
            fontSize: 24,
            fillColor: "#222222",
            textAlign: "LEFT",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: 1.5,
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeWidth: 0,
            strokeOpacity: 1,
            textAlignVertical: "TOP"
        },
        width: "AUTO",
        height: "AUTO",
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: ""
    },
    textItemType: "TEXT",
    layer: "NOTE"
}, {
    type: "IMAGE",
    id: "e9fc576f-6cc9-4229-be66-cc40793a6a97",
    name: "Magic Defense",
    position: {
        x: 3989.817594866524,
        y: 2220.0865800594297
    },
    rotation: 0,
    scale: {
        x: 2.0953965527871183,
        y: 2.0953965527871183
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1729524896785,
    lastModified: "2024-10-21T15:34:56.786Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/06431777-d417-4f0b-b6f5-46caad057821.png",
        mime: "image/png",
        width: 64,
        height: 64
    },
    grid: {
        dpi: 150,
        offset: {
            x: -.31369787936330384,
            y: -5.643083045508547
        }
    },
    text: {
        type: "RICH",
        style: {
            padding: 16,
            fontSize: 15,
            fillColor: "#ffffff",
            textAlign: "LEFT",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: 1.5,
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeWidth: 4,
            strokeOpacity: 1,
            textAlignVertical: "TOP"
        },
        width: "AUTO",
        height: "AUTO",
        richText: [{
            type: "heading-one",
            children: [{
                text: " 8"
            }]
        }],
        plainText: ""
    },
    textItemType: "TEXT",
    layer: "NOTE"
}, {
    type: "IMAGE",
    id: "b748831a-5512-4b7a-ba9b-e3eb77ae9a09",
    name: "Defense",
    position: {
        x: 3989.582448066217,
        y: 2076.8674253950708
    },
    rotation: 0,
    scale: {
        x: 2.0953965527871183,
        y: 2.0953965527871183
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1729524896781,
    lastModified: "2024-10-21T15:34:56.786Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/5f24467f-29a0-4af1-960f-e52a46fe517d.png",
        mime: "image/png",
        width: 64,
        height: 64
    },
    grid: {
        dpi: 150,
        offset: {
            x: -.19854567207255544,
            y: -4.353890229191904
        }
    },
    text: {
        type: "RICH",
        style: {
            padding: 16,
            fontSize: 15,
            fillColor: "#ffd433",
            textAlign: "LEFT",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: 1.5,
            fillOpacity: 1,
            strokeColor: "#ffd433",
            strokeWidth: 0,
            strokeOpacity: 1,
            textAlignVertical: "TOP"
        },
        width: "AUTO",
        height: "AUTO",
        richText: [{
            type: "heading-one",
            children: [{
                text: " 8"
            }]
        }],
        plainText: ""
    },
    textItemType: "TEXT",
    layer: "NOTE"
}, {
    type: "IMAGE",
    id: "d04e9ba9-b772-4e7e-be68-5e0dbdbf80fa",
    name: "Inventory Points",
    position: {
        x: 4218.615949167479,
        y: 2104.0511455241826
    },
    rotation: 0,
    scale: {
        x: .6730161694731979,
        y: .6730161694731979
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1729524896782,
    lastModified: "2024-10-21T15:34:56.786Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/b55125b3-8003-405b-841c-d575bda2ddf8.png",
        mime: "image/png",
        width: 370,
        height: 174
    },
    grid: {
        dpi: 150,
        offset: {
            x: 109,
            y: 12.50504478758296
        }
    },
    text: {
        type: "RICH",
        style: {
            padding: 16,
            fontSize: 72,
            fillColor: "#e7942f",
            textAlign: "LEFT",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: 1.5,
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeWidth: 5,
            strokeOpacity: 1,
            textAlignVertical: "TOP"
        },
        width: "AUTO",
        height: "AUTO",
        richText: [{
            type: "paragraph",
            children: [{
                text: "6"
            }]
        }],
        plainText: ""
    },
    textItemType: "TEXT",
    layer: "NOTE"
}, {
    type: "IMAGE",
    id: "ecd06e20-99c4-4fbd-bf01-71783dffb87e",
    name: "Fabula",
    position: {
        x: 4161.415590505298,
        y: 2197.2625594942238
    },
    rotation: 0,
    scale: {
        x: 1.7695060313481694,
        y: 1.7695060313481694
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1729524896784,
    lastModified: "2024-10-21T15:34:56.786Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/4152eb08-6b1a-4506-ad3a-764f0dcf2ca6.png",
        mime: "image/png",
        width: 64,
        height: 64
    },
    grid: {
        dpi: 100,
        offset: {
            x: 4.8435053402197,
            y: -5.18037729297815
        }
    },
    text: {
        type: "RICH",
        style: {
            padding: 16,
            fontSize: 21,
            fillColor: "#ffd433",
            textAlign: "LEFT",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: 1.5,
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeWidth: 4,
            strokeOpacity: 1,
            textAlignVertical: "TOP"
        },
        width: "AUTO",
        height: "AUTO",
        richText: [{
            type: "paragraph",
            children: [{
                text: " 3"
            }]
        }],
        plainText: ""
    },
    textItemType: "TEXT",
    layer: "NOTE"
}, {
    type: "IMAGE",
    id: "4f800c4c-901b-4d41-9623-856a20549fa7",
    name: "HP Bar",
    position: {
        x: 3754.5972766807417,
        y: 2549.778826133546
    },
    rotation: 0,
    scale: {
        x: .7287825926325873,
        y: .7260009796836081
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1729524904668,
    lastModified: "2025-08-22T15:42:56.575Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/f8e5fbfa-753c-4d36-be4f-fb0c69c21c01.png",
        mime: "image/png",
        width: 400,
        height: 131
    },
    grid: {
        dpi: 100,
        offset: {
            x: 132.51402409717997,
            y: 12.21353786270646
        }
    },
    text: {
        type: "RICH",
        style: {
            padding: 16,
            fontSize: 38,
            fillColor: "#ffffff",
            textAlign: "LEFT",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: 1.5,
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeWidth: 6,
            strokeOpacity: 1,
            textAlignVertical: "TOP"
        },
        width: "AUTO",
        height: "AUTO",
        richText: [{
            type: "paragraph",
            children: [{
                text: "45/45"
            }]
        }],
        plainText: ""
    },
    textItemType: "TEXT",
    layer: "NOTE"
}, {
    type: "IMAGE",
    id: "1a45bab5-ba89-4b38-b12e-4e55a7682616",
    name: "MP Bar",
    position: {
        x: 3751.30566342206,
        y: 2698.1516406449973
    },
    rotation: 0,
    scale: {
        x: .722519165750533,
        y: .722519165750533
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1729524904671,
    lastModified: "2025-08-22T15:43:03.026Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/4cd0b1ad-4c94-42de-ac3c-f32f423ba7ed.png",
        mime: "image/png",
        width: 400,
        height: 131
    },
    grid: {
        dpi: 100,
        offset: {
            x: 130.59684652183535,
            y: 12.762973909642675
        }
    },
    text: {
        type: "RICH",
        style: {
            padding: 16,
            fontSize: 38,
            fillColor: "#ffffff",
            textAlign: "LEFT",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: 1.5,
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeWidth: 6,
            strokeOpacity: 1,
            textAlignVertical: "TOP"
        },
        width: "AUTO",
        height: "AUTO",
        richText: [{
            type: "paragraph",
            children: [{
                text: "45/45"
            }]
        }],
        plainText: ""
    },
    textItemType: "TEXT",
    layer: "NOTE"
}, {
    type: "IMAGE",
    id: "553b3677-44b9-4613-bd8b-0aaeec73a738",
    name: "Zero Clock",
    position: {
        x: 3460.8930093821673,
        y: 2811.1960498801836
    },
    rotation: 0,
    scale: {
        x: 2.3701959653889046,
        y: 2.3701959653889046
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1729524904664,
    lastModified: "2024-10-21T15:35:04.670Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/d936d3a5-cf4b-4d07-bc3a-705bd8c96fb4.png",
        mime: "image/png",
        width: 314,
        height: 73
    },
    grid: {
        dpi: 150,
        offset: {
            x: 0,
            y: 0
        }
    },
    text: {
        type: "RICH",
        style: {
            padding: 16,
            fontSize: 24,
            fillColor: "#222222",
            textAlign: "LEFT",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: 1.5,
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeWidth: 0,
            strokeOpacity: 1,
            textAlignVertical: "TOP"
        },
        width: "AUTO",
        height: "AUTO",
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: ""
    },
    textItemType: "TEXT",
    layer: "NOTE"
}, {
    type: "IMAGE",
    id: "1c906074-0a38-4170-b22d-c56f19d72edf",
    name: "Magic Defense",
    position: {
        x: 3986.43161742145,
        y: 2662.4162221216275
    },
    rotation: 0,
    scale: {
        x: 2.0953965527871183,
        y: 2.0953965527871183
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1729524904670,
    lastModified: "2024-10-21T15:35:04.670Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/06431777-d417-4f0b-b6f5-46caad057821.png",
        mime: "image/png",
        width: 64,
        height: 64
    },
    grid: {
        dpi: 150,
        offset: {
            x: -.31369787936330384,
            y: -5.643083045508547
        }
    },
    text: {
        type: "RICH",
        style: {
            padding: 16,
            fontSize: 15,
            fillColor: "#ffffff",
            textAlign: "LEFT",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: 1.5,
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeWidth: 4,
            strokeOpacity: 1,
            textAlignVertical: "TOP"
        },
        width: "AUTO",
        height: "AUTO",
        richText: [{
            type: "heading-one",
            children: [{
                text: " 8"
            }]
        }],
        plainText: ""
    },
    textItemType: "TEXT",
    layer: "NOTE"
}, {
    type: "IMAGE",
    id: "36b987b5-c3e7-4644-86a5-efd4286fed47",
    name: "Defense",
    position: {
        x: 3986.196470621143,
        y: 2519.1970674572685
    },
    rotation: 0,
    scale: {
        x: 2.0953965527871183,
        y: 2.0953965527871183
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1729524904666,
    lastModified: "2024-10-21T15:35:04.670Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/5f24467f-29a0-4af1-960f-e52a46fe517d.png",
        mime: "image/png",
        width: 64,
        height: 64
    },
    grid: {
        dpi: 150,
        offset: {
            x: -.19854567207255544,
            y: -4.353890229191904
        }
    },
    text: {
        type: "RICH",
        style: {
            padding: 16,
            fontSize: 15,
            fillColor: "#ffd433",
            textAlign: "LEFT",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: 1.5,
            fillOpacity: 1,
            strokeColor: "#ffd433",
            strokeWidth: 0,
            strokeOpacity: 1,
            textAlignVertical: "TOP"
        },
        width: "AUTO",
        height: "AUTO",
        richText: [{
            type: "heading-one",
            children: [{
                text: " 8"
            }]
        }],
        plainText: ""
    },
    textItemType: "TEXT",
    layer: "NOTE"
}, {
    type: "IMAGE",
    id: "2cd9f1f2-310a-4586-898f-5de78696bdc5",
    name: "Inventory Points",
    position: {
        x: 4215.229971722405,
        y: 2546.3807875863804
    },
    rotation: 0,
    scale: {
        x: .6730161694731979,
        y: .6730161694731979
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1729524904667,
    lastModified: "2024-10-21T15:35:04.670Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/b55125b3-8003-405b-841c-d575bda2ddf8.png",
        mime: "image/png",
        width: 370,
        height: 174
    },
    grid: {
        dpi: 150,
        offset: {
            x: 109,
            y: 12.50504478758296
        }
    },
    text: {
        type: "RICH",
        style: {
            padding: 16,
            fontSize: 72,
            fillColor: "#e7942f",
            textAlign: "LEFT",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: 1.5,
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeWidth: 5,
            strokeOpacity: 1,
            textAlignVertical: "TOP"
        },
        width: "AUTO",
        height: "AUTO",
        richText: [{
            type: "paragraph",
            children: [{
                text: "6"
            }]
        }],
        plainText: ""
    },
    textItemType: "TEXT",
    layer: "NOTE"
}, {
    type: "IMAGE",
    id: "c39f4339-252a-47fa-aacf-f8b1303ba058",
    name: "Fabula",
    position: {
        x: 4158.029613060224,
        y: 2639.5922015564215
    },
    rotation: 0,
    scale: {
        x: 1.7695060313481694,
        y: 1.7695060313481694
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1729524904669,
    lastModified: "2024-10-21T15:35:04.670Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/4152eb08-6b1a-4506-ad3a-764f0dcf2ca6.png",
        mime: "image/png",
        width: 64,
        height: 64
    },
    grid: {
        dpi: 100,
        offset: {
            x: 4.8435053402197,
            y: -5.18037729297815
        }
    },
    text: {
        type: "RICH",
        style: {
            padding: 16,
            fontSize: 21,
            fillColor: "#ffd433",
            textAlign: "LEFT",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: 1.5,
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeWidth: 4,
            strokeOpacity: 1,
            textAlignVertical: "TOP"
        },
        width: "AUTO",
        height: "AUTO",
        richText: [{
            type: "paragraph",
            children: [{
                text: " 3"
            }]
        }],
        plainText: ""
    },
    textItemType: "TEXT",
    layer: "NOTE"
}, {
    type: "IMAGE",
    id: "5b4f582d-5963-4b7f-9ed2-213ed0568292",
    name: "Zero Clock Pointer",
    position: {
        x: 3545.2372918392575,
        y: 1949.6865808368764
    },
    rotation: 0,
    scale: {
        x: 1,
        y: 1
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1755877419691,
    lastModified: "2025-08-22T15:43:39.691Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        width: 90,
        height: 82,
        mime: "image/png",
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/355b63dd-8094-4fc1-8620-316e2a1e3ce7.png"
    },
    grid: {
        dpi: 150,
        offset: {
            x: 45,
            y: 41
        }
    },
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: "",
        style: {
            padding: 8,
            fontFamily: "Roboto",
            fontSize: 24,
            fontWeight: 400,
            textAlign: "CENTER",
            textAlignVertical: "BOTTOM",
            fillColor: "#ffffff",
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeOpacity: 1,
            strokeWidth: 0,
            lineHeight: 1.5
        },
        type: "PLAIN",
        width: "AUTO",
        height: "AUTO"
    },
    textItemType: "LABEL",
    layer: "NOTE"
}, {
    type: "IMAGE",
    id: "67376b56-4091-4a9a-8db4-9ffeb8f462cd",
    name: "Zero Clock Pointer",
    position: {
        x: 3545.798270956684,
        y: 2396.300982458755
    },
    rotation: 0,
    scale: {
        x: 1,
        y: 1
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1755877426177,
    lastModified: "2025-08-22T15:43:46.177Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        width: 90,
        height: 82,
        mime: "image/png",
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/355b63dd-8094-4fc1-8620-316e2a1e3ce7.png"
    },
    grid: {
        dpi: 150,
        offset: {
            x: 45,
            y: 41
        }
    },
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: "",
        style: {
            padding: 8,
            fontFamily: "Roboto",
            fontSize: 24,
            fontWeight: 400,
            textAlign: "CENTER",
            textAlignVertical: "BOTTOM",
            fillColor: "#ffffff",
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeOpacity: 1,
            strokeWidth: 0,
            lineHeight: 1.5
        },
        type: "PLAIN",
        width: "AUTO",
        height: "AUTO"
    },
    textItemType: "LABEL",
    layer: "NOTE"
}, {
    type: "IMAGE",
    id: "a4df2c7a-5cb7-4f44-8571-259609b7bbc4",
    name: "Zero Clock Pointer",
    position: {
        x: 3546.881861288514,
        y: 2834.5250985839366
    },
    rotation: 0,
    scale: {
        x: 1,
        y: 1
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1755877432959,
    lastModified: "2025-08-22T15:43:52.960Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        width: 90,
        height: 82,
        mime: "image/png",
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/355b63dd-8094-4fc1-8620-316e2a1e3ce7.png"
    },
    grid: {
        dpi: 150,
        offset: {
            x: 45,
            y: 41
        }
    },
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: "",
        style: {
            padding: 8,
            fontFamily: "Roboto",
            fontSize: 24,
            fontWeight: 400,
            textAlign: "CENTER",
            textAlignVertical: "BOTTOM",
            fillColor: "#ffffff",
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeOpacity: 1,
            strokeWidth: 0,
            lineHeight: 1.5
        },
        type: "PLAIN",
        width: "AUTO",
        height: "AUTO"
    },
    textItemType: "LABEL",
    layer: "NOTE"
}, {
    type: "IMAGE",
    id: "3eb1db9f-7434-4e5f-8da2-22e18b7120da",
    name: "Zero Clock Pointer",
    position: {
        x: 3543.8890841479956,
        y: 1487.5283103508227
    },
    rotation: 0,
    scale: {
        x: 1,
        y: 1
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1755877439857,
    lastModified: "2025-08-22T15:43:59.858Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        width: 90,
        height: 82,
        mime: "image/png",
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/355b63dd-8094-4fc1-8620-316e2a1e3ce7.png"
    },
    grid: {
        dpi: 150,
        offset: {
            x: 45,
            y: 41
        }
    },
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: "",
        style: {
            padding: 8,
            fontFamily: "Roboto",
            fontSize: 24,
            fontWeight: 400,
            textAlign: "CENTER",
            textAlignVertical: "BOTTOM",
            fillColor: "#ffffff",
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeOpacity: 1,
            strokeWidth: 0,
            lineHeight: 1.5
        },
        type: "PLAIN",
        width: "AUTO",
        height: "AUTO"
    },
    textItemType: "LABEL",
    layer: "NOTE"
}, {
    type: "IMAGE",
    id: "996ece66-0cbe-4108-ad3d-8884126915be",
    name: "Zero Clock Pointer",
    position: {
        x: 3545.67582411375,
        y: 1023.0128187595083
    },
    rotation: 0,
    scale: {
        x: 1,
        y: 1
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1755877445243,
    lastModified: "2025-08-22T15:44:05.244Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        width: 90,
        height: 82,
        mime: "image/png",
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/355b63dd-8094-4fc1-8620-316e2a1e3ce7.png"
    },
    grid: {
        dpi: 150,
        offset: {
            x: 45,
            y: 41
        }
    },
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: "",
        style: {
            padding: 8,
            fontFamily: "Roboto",
            fontSize: 24,
            fontWeight: 400,
            textAlign: "CENTER",
            textAlignVertical: "BOTTOM",
            fillColor: "#ffffff",
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeOpacity: 1,
            strokeWidth: 0,
            lineHeight: 1.5
        },
        type: "PLAIN",
        width: "AUTO",
        height: "AUTO"
    },
    textItemType: "LABEL",
    layer: "NOTE"
}, {
    type: "IMAGE",
    id: "e6d1d1b9-a4e1-41b4-a8bb-8089963af3bc",
    name: "Zero Clock Pointer",
    position: {
        x: 3540.041484834974,
        y: 590.6141617988108
    },
    rotation: 0,
    scale: {
        x: 1,
        y: 1
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1755877449594,
    lastModified: "2025-08-22T15:44:09.595Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        width: 90,
        height: 82,
        mime: "image/png",
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/355b63dd-8094-4fc1-8620-316e2a1e3ce7.png"
    },
    grid: {
        dpi: 150,
        offset: {
            x: 45,
            y: 41
        }
    },
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: "",
        style: {
            padding: 8,
            fontFamily: "Roboto",
            fontSize: 24,
            fontWeight: 400,
            textAlign: "CENTER",
            textAlignVertical: "BOTTOM",
            fillColor: "#ffffff",
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeOpacity: 1,
            strokeWidth: 0,
            lineHeight: 1.5
        },
        type: "PLAIN",
        width: "AUTO",
        height: "AUTO"
    },
    textItemType: "LABEL",
    layer: "NOTE"
}, {
    type: "IMAGE",
    id: "f492efe9-e764-4207-8fa4-1947f0bbfc26",
    name: "Zero Clock Pointer",
    position: {
        x: -670.0893829551683,
        y: 3730.493653330285
    },
    rotation: 0,
    scale: {
        x: 1,
        y: 1
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1755877486346,
    lastModified: "2025-08-22T15:44:46.346Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        width: 90,
        height: 82,
        mime: "image/png",
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/355b63dd-8094-4fc1-8620-316e2a1e3ce7.png"
    },
    grid: {
        dpi: 150,
        offset: {
            x: 45,
            y: 41
        }
    },
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: "",
        style: {
            padding: 8,
            fontFamily: "Roboto",
            fontSize: 24,
            fontWeight: 400,
            textAlign: "CENTER",
            textAlignVertical: "BOTTOM",
            fillColor: "#ffffff",
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeOpacity: 1,
            strokeWidth: 0,
            lineHeight: 1.5
        },
        type: "PLAIN",
        width: "AUTO",
        height: "AUTO"
    },
    textItemType: "LABEL",
    layer: "NOTE"
}, {
    type: "IMAGE",
    id: "259a9aa6-2de3-4cc9-8e7b-4f813a8a13db",
    name: "Zero Clock Pointer",
    position: {
        x: -606.71913531519,
        y: 3731.2911420151645
    },
    rotation: 0,
    scale: {
        x: 1,
        y: 1
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1755877490791,
    lastModified: "2025-08-22T15:44:50.791Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        width: 90,
        height: 82,
        mime: "image/png",
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/355b63dd-8094-4fc1-8620-316e2a1e3ce7.png"
    },
    grid: {
        dpi: 150,
        offset: {
            x: 45,
            y: 41
        }
    },
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: "",
        style: {
            padding: 8,
            fontFamily: "Roboto",
            fontSize: 24,
            fontWeight: 400,
            textAlign: "CENTER",
            textAlignVertical: "BOTTOM",
            fillColor: "#ffffff",
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeOpacity: 1,
            strokeWidth: 0,
            lineHeight: 1.5
        },
        type: "PLAIN",
        width: "AUTO",
        height: "AUTO"
    },
    textItemType: "LABEL",
    layer: "NOTE"
}, {
    type: "IMAGE",
    id: "762457cd-cb2f-42da-97f0-23ae0cf5fa92",
    name: "Zero Clock Pointer",
    position: {
        x: -535.1357355535108,
        y: 3734.813614504764
    },
    rotation: 0,
    scale: {
        x: 1,
        y: 1
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1755877494144,
    lastModified: "2025-08-22T15:44:54.146Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        width: 90,
        height: 82,
        mime: "image/png",
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/355b63dd-8094-4fc1-8620-316e2a1e3ce7.png"
    },
    grid: {
        dpi: 150,
        offset: {
            x: 45,
            y: 41
        }
    },
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: "",
        style: {
            padding: 8,
            fontFamily: "Roboto",
            fontSize: 24,
            fontWeight: 400,
            textAlign: "CENTER",
            textAlignVertical: "BOTTOM",
            fillColor: "#ffffff",
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeOpacity: 1,
            strokeWidth: 0,
            lineHeight: 1.5
        },
        type: "PLAIN",
        width: "AUTO",
        height: "AUTO"
    },
    textItemType: "LABEL",
    layer: "NOTE"
}, {
    type: "IMAGE",
    id: "d4118d99-0986-4730-aa74-111f33b12689",
    name: "Zero Clock Pointer",
    position: {
        x: -639.3010576270517,
        y: 3806.3842806972616
    },
    rotation: 0,
    scale: {
        x: 1,
        y: 1
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1755877498279,
    lastModified: "2025-08-22T15:44:58.279Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        width: 90,
        height: 82,
        mime: "image/png",
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/355b63dd-8094-4fc1-8620-316e2a1e3ce7.png"
    },
    grid: {
        dpi: 150,
        offset: {
            x: 45,
            y: 41
        }
    },
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: "",
        style: {
            padding: 8,
            fontFamily: "Roboto",
            fontSize: 24,
            fontWeight: 400,
            textAlign: "CENTER",
            textAlignVertical: "BOTTOM",
            fillColor: "#ffffff",
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeOpacity: 1,
            strokeWidth: 0,
            lineHeight: 1.5
        },
        type: "PLAIN",
        width: "AUTO",
        height: "AUTO"
    },
    textItemType: "LABEL",
    layer: "NOTE"
}, {
    type: "IMAGE",
    id: "e4e59859-7418-4e10-ac86-44928ea726fa",
    name: "Zero Clock Pointer",
    position: {
        x: -573.6133003961438,
        y: 3805.017062621383
    },
    rotation: 0,
    scale: {
        x: 1,
        y: 1
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1755877501359,
    lastModified: "2025-08-22T15:45:01.360Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        width: 90,
        height: 82,
        mime: "image/png",
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/355b63dd-8094-4fc1-8620-316e2a1e3ce7.png"
    },
    grid: {
        dpi: 150,
        offset: {
            x: 45,
            y: 41
        }
    },
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: "",
        style: {
            padding: 8,
            fontFamily: "Roboto",
            fontSize: 24,
            fontWeight: 400,
            textAlign: "CENTER",
            textAlignVertical: "BOTTOM",
            fillColor: "#ffffff",
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeOpacity: 1,
            strokeWidth: 0,
            lineHeight: 1.5
        },
        type: "PLAIN",
        width: "AUTO",
        height: "AUTO"
    },
    textItemType: "LABEL",
    layer: "NOTE"
}]
  , lg = [{
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    id: "c48a29af-1ce2-4206-a00d-a9acfa20ff95",
    name: "Text",
    zIndex: 1755966971932,
    lastModified: "2025-08-23T16:36:11.934Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    locked: !1,
    metadata: {},
    position: {
        x: 8410.662855860552,
        y: 1175.3298214451188
    },
    rotation: 0,
    scale: {
        x: 1.2967180678626435,
        y: 1.2967180678626435
    },
    type: "TEXT",
    visible: !0,
    layer: "TEXT",
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: "",
        style: {
            padding: 0,
            fontFamily: "Roboto",
            fontSize: 48,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#519E00",
            fillOpacity: 1,
            strokeColor: "#3b3b3b",
            strokeOpacity: 1,
            strokeWidth: 5,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    }
}, {
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    id: "4272fce8-20d4-42f8-95d2-9c93d7b89663",
    name: "Fog Rectangle",
    zIndex: 1687677992781,
    lastModified: "2023-06-25T07:26:26.970Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    locked: !1,
    metadata: {},
    position: {
        x: -12657.096243685424,
        y: -13843.330023697345
    },
    rotation: 0,
    scale: {
        x: 1,
        y: 1
    },
    type: "SHAPE",
    visible: !0,
    layer: "FOG",
    width: 27003.86199511949,
    height: 13822.410267883663,
    shapeType: "RECTANGLE",
    style: {
        fillColor: "#222222",
        fillOpacity: 1,
        strokeColor: "#222222",
        strokeOpacity: 1,
        strokeWidth: 5,
        strokeDash: []
    }
}, {
    type: "IMAGE",
    layer: "MAP",
    id: "269910ec-1d13-472c-9e4c-0be49bd98a52",
    name: "Screen Shot 2022-12-13 At 12.35.03 AM",
    position: {
        x: 1243.3912354021727,
        y: 2677.337188430629
    },
    rotation: 0,
    scale: {
        x: 1.621493641427966,
        y: 1.621493641427966
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1756013460143,
    lastModified: "2025-08-24T05:31:00.144Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/733e0e29-05ea-43e7-aa3f-1c0a42d06f5b.png",
        mime: "image/png",
        width: 2104,
        height: 1620
    },
    grid: {
        dpi: 150,
        offset: {
            x: 0,
            y: 0
        }
    },
    text: {
        type: "PLAIN",
        style: {
            padding: 8,
            fontSize: 24,
            fillColor: "#ffffff",
            textAlign: "CENTER",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: 1.5,
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeWidth: 0,
            strokeOpacity: 1,
            textAlignVertical: "BOTTOM"
        },
        width: "AUTO",
        height: "AUTO",
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: ""
    },
    textItemType: "LABEL"
}, {
    type: "IMAGE",
    layer: "MAP",
    id: "3f684d8e-568e-4b6b-b293-688ceb84c411",
    name: "Screen Shot 2022-12-13 At 12.35.15 AM",
    position: {
        x: 4764.083126215387,
        y: 2688.3751587979723
    },
    rotation: 0,
    scale: {
        x: 1.621493641427966,
        y: 1.621493641427966
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1756013456226,
    lastModified: "2025-08-24T05:30:56.227Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/79a7d656-b362-495c-a776-414665a4aeb8.png",
        mime: "image/png",
        width: 2086,
        height: 1610
    },
    grid: {
        dpi: 150,
        offset: {
            x: 0,
            y: 0
        }
    },
    text: {
        type: "PLAIN",
        style: {
            padding: 8,
            fontSize: 24,
            fillColor: "#ffffff",
            textAlign: "CENTER",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: 1.5,
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeWidth: 0,
            strokeOpacity: 1,
            textAlignVertical: "BOTTOM"
        },
        width: "AUTO",
        height: "AUTO",
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: ""
    },
    textItemType: "LABEL"
}, {
    type: "IMAGE",
    id: "3ca777d1-1fa0-4c5b-b82b-78d153fc9874",
    name: "Dazed",
    position: {
        x: 6670.7520746646205,
        y: 595.4691700355742
    },
    rotation: 0,
    scale: {
        x: .8245719142513234,
        y: .8245719142513234
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1755966268862,
    lastModified: "2025-08-23T16:24:28.865Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/6ad33f4f-c756-4320-b62b-8c4719a3f294.png",
        mime: "image/png",
        width: 116,
        height: 114
    },
    grid: {
        dpi: 150,
        offset: {
            x: 6,
            y: -43
        }
    },
    text: {
        type: "RICH",
        style: {
            padding: 16,
            fontSize: 24,
            fillColor: "#ffd433",
            textAlign: "LEFT",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: 1.5,
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeWidth: 6,
            strokeOpacity: 1,
            textAlignVertical: "TOP"
        },
        width: "AUTO",
        height: "AUTO",
        richText: [{
            type: "paragraph",
            children: [{
                text: "Dazed"
            }]
        }],
        plainText: ""
    },
    textItemType: "TEXT",
    layer: "ATTACHMENT"
}, {
    type: "IMAGE",
    id: "e09f7614-517f-433c-93ac-ee93195d7bde",
    name: "Enraged",
    position: {
        x: 6899.300570123375,
        y: 597.5936440417048
    },
    rotation: 0,
    scale: {
        x: .8245719142513234,
        y: .8245719142513234
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1755966268864,
    lastModified: "2025-08-23T16:24:28.865Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/88cdb66c-9926-4d5d-9f7e-4fb51c95858a.png",
        mime: "image/png",
        width: 126,
        height: 117
    },
    grid: {
        dpi: 150,
        offset: {
            x: 2,
            y: -42
        }
    },
    text: {
        type: "RICH",
        style: {
            padding: 16,
            fontSize: 24,
            fillColor: "#ffd433",
            textAlign: "LEFT",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: 1.5,
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeWidth: 5,
            strokeOpacity: 1,
            textAlignVertical: "TOP"
        },
        width: "AUTO",
        height: "AUTO",
        richText: [{
            type: "paragraph",
            children: [{
                text: "Enraged"
            }]
        }],
        plainText: ""
    },
    textItemType: "TEXT",
    layer: "ATTACHMENT"
}, {
    type: "IMAGE",
    id: "41875717-03d4-4e7b-80c5-bf23abad15c5",
    name: "Shaken",
    position: {
        x: 7023.118974879149,
        y: 592.0500384060318
    },
    rotation: 0,
    scale: {
        x: .8245719142513234,
        y: .8245719142513234
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1755966268865,
    lastModified: "2025-08-23T16:24:28.865Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/21a042d4-1b16-4984-96bb-79117db6b4e5.png",
        mime: "image/png",
        width: 121,
        height: 109
    },
    grid: {
        dpi: 150,
        offset: {
            x: 3,
            y: -43
        }
    },
    text: {
        type: "RICH",
        style: {
            padding: 16,
            fontSize: 24,
            fillColor: "#ffd433",
            textAlign: "LEFT",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: 1.5,
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeWidth: 5,
            strokeOpacity: 1,
            textAlignVertical: "TOP"
        },
        width: "AUTO",
        height: "AUTO",
        richText: [{
            type: "paragraph",
            children: [{
                text: "Shaken"
            }]
        }],
        plainText: ""
    },
    textItemType: "TEXT",
    layer: "ATTACHMENT"
}, {
    type: "IMAGE",
    id: "2794a5a8-94c7-463a-9d0f-3dfb3e70cb36",
    name: "Poisoned",
    position: {
        x: 7141.261563066188,
        y: 594.3925206320474
    },
    rotation: 0,
    scale: {
        x: .8245719142513234,
        y: .8245719142513234
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1755966268866,
    lastModified: "2025-08-23T16:24:28.865Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/283a97c9-cf33-411b-a105-6c605d7d3b25.png",
        mime: "image/png",
        width: 122,
        height: 112
    },
    grid: {
        dpi: 150,
        offset: {
            x: -6,
            y: -47
        }
    },
    text: {
        type: "RICH",
        style: {
            padding: 16,
            fontSize: 24,
            fillColor: "#ffd433",
            textAlign: "LEFT",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: 1.5,
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeWidth: 5,
            strokeOpacity: 1,
            textAlignVertical: "TOP"
        },
        width: "AUTO",
        height: "AUTO",
        richText: [{
            type: "paragraph",
            children: [{
                text: "Poisoned"
            }]
        }],
        plainText: ""
    },
    textItemType: "TEXT",
    layer: "ATTACHMENT"
}, {
    type: "IMAGE",
    id: "8375a85b-93cf-46d8-8206-6147e68ad884",
    name: "Slow",
    position: {
        x: 6796.938559361829,
        y: 592.5034813540234
    },
    rotation: 0,
    scale: {
        x: .8245719142513234,
        y: .8245719142513234
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1755966268863,
    lastModified: "2025-08-23T16:24:28.865Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/a7dd52d4-6064-4f32-a742-27adc8c77cda.png",
        mime: "image/png",
        width: 125,
        height: 112
    },
    grid: {
        dpi: 150,
        offset: {
            x: 19,
            y: -44
        }
    },
    text: {
        type: "RICH",
        style: {
            padding: 16,
            fontSize: 24,
            fillColor: "#ffd433",
            textAlign: "LEFT",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: 1.5,
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeWidth: 5,
            strokeOpacity: 1,
            textAlignVertical: "TOP"
        },
        width: "AUTO",
        height: "AUTO",
        richText: [{
            type: "paragraph",
            children: [{
                text: "Slow"
            }]
        }],
        plainText: ""
    },
    textItemType: "TEXT",
    layer: "ATTACHMENT"
}, {
    type: "IMAGE",
    id: "0fc5d21e-c49d-44b9-9639-3e2108028a88",
    name: "Weak",
    position: {
        x: 6557.717796210709,
        y: 588.6857609219643
    },
    rotation: 0,
    scale: {
        x: .8245719142513234,
        y: .8245719142513234
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1755966268867,
    lastModified: "2025-08-23T16:24:28.865Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/01fc0c8b-68b9-40a3-859c-680edde55008.png",
        mime: "image/png",
        width: 122,
        height: 109
    },
    grid: {
        dpi: 150,
        offset: {
            x: 13,
            y: -49
        }
    },
    text: {
        type: "RICH",
        style: {
            padding: 16,
            fontSize: 24,
            fillColor: "#ffd433",
            textAlign: "LEFT",
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: 1.5,
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeWidth: 5,
            strokeOpacity: 1,
            textAlignVertical: "TOP"
        },
        width: "AUTO",
        height: "AUTO",
        richText: [{
            type: "paragraph",
            children: [{
                text: "Weak"
            }]
        }],
        plainText: ""
    },
    textItemType: "TEXT",
    layer: "ATTACHMENT"
}, {
    type: "IMAGE",
    id: "aeae10c3-e859-47ff-b739-fd750a7f6253",
    name: "Crawler Map Image Border",
    position: {
        x: 5892.794790082388,
        y: 1912.4008543900056
    },
    rotation: 0,
    scale: {
        x: .7986717748724237,
        y: .7986717748724237
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1755966979466,
    lastModified: "2025-08-23T16:36:19.467Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        width: 1286,
        height: 1298,
        mime: "image/png",
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/865dd1f7-9ffa-4d74-9a78-aab198dedbb6.png"
    },
    grid: {
        dpi: 150,
        offset: {
            x: 643,
            y: 649
        }
    },
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: "",
        style: {
            padding: 8,
            fontFamily: "Roboto",
            fontSize: 24,
            fontWeight: 400,
            textAlign: "CENTER",
            textAlignVertical: "BOTTOM",
            fillColor: "#ffffff",
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeOpacity: 1,
            strokeWidth: 0,
            lineHeight: 1.5
        },
        type: "PLAIN",
        width: "AUTO",
        height: "AUTO"
    },
    textItemType: "LABEL",
    layer: "MOUNT"
}, {
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    id: "156bf225-fc56-4e61-a15b-2e7a58215816",
    name: "Text",
    zIndex: 1755879115368,
    lastModified: "2025-08-22T16:12:00.837Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    locked: !1,
    metadata: {},
    position: {
        x: -1023.2281776103941,
        y: 2669.0590859270737
    },
    rotation: 0,
    scale: {
        x: 1,
        y: 1
    },
    type: "TEXT",
    visible: !0,
    layer: "TEXT",
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: "",
        style: {
            padding: 0,
            fontFamily: "Courier Prime",
            fontSize: 24,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#ffd433",
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeOpacity: 1,
            strokeWidth: 4,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    }
}, {
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    id: "83f4adbd-35d6-429e-b8c9-bed7b4cdcf9e",
    name: "Text",
    zIndex: 1755879125767,
    lastModified: "2025-08-22T16:12:05.767Z",
    lastModifiedUserId: "unknown",
    locked: !1,
    metadata: {},
    position: {
        x: -827.5738063287713,
        y: 2776.4417745251376
    },
    rotation: 0,
    scale: {
        x: 1,
        y: 1
    },
    type: "TEXT",
    visible: !0,
    layer: "TEXT",
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: "",
        style: {
            padding: 0,
            fontFamily: "Courier Prime",
            fontSize: 24,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#ffd433",
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeOpacity: 1,
            strokeWidth: 4,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    }
}, {
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    id: "4db34017-2bdb-4448-879c-87c9364ece72",
    name: "Text",
    zIndex: 1755879128233,
    lastModified: "2025-08-22T16:12:08.233Z",
    lastModifiedUserId: "unknown",
    locked: !1,
    metadata: {},
    position: {
        x: -822.945157711503,
        y: 2697.0031649538573
    },
    rotation: 0,
    scale: {
        x: 1,
        y: 1
    },
    type: "TEXT",
    visible: !0,
    layer: "TEXT",
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: "",
        style: {
            padding: 0,
            fontFamily: "Courier Prime",
            fontSize: 24,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#ffd433",
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeOpacity: 1,
            strokeWidth: 4,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    }
}, {
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    id: "b9b4abc3-7f38-4bb0-96b5-5ef8c0f2386c",
    name: "Text",
    zIndex: 1755879143883,
    lastModified: "2025-08-22T16:12:33.819Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    locked: !1,
    metadata: {},
    position: {
        x: -875.2341615379722,
        y: 2655.4340030169933
    },
    rotation: 0,
    scale: {
        x: 1,
        y: 1
    },
    type: "TEXT",
    visible: !0,
    layer: "TEXT",
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: "",
        style: {
            padding: 0,
            fontFamily: "Roboto",
            fontSize: 24,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#ffd433",
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeOpacity: 1,
            strokeWidth: 4,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    }
}, {
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    id: "2b9d0ce8-23ef-4a2f-bea6-c161e5ffe727",
    name: "Text",
    zIndex: 1755879157618,
    lastModified: "2025-08-22T16:12:37.618Z",
    lastModifiedUserId: "unknown",
    locked: !1,
    metadata: {},
    position: {
        x: -660.1060972342672,
        y: 2795.8035930689734
    },
    rotation: 0,
    scale: {
        x: 1,
        y: 1
    },
    type: "TEXT",
    visible: !0,
    layer: "TEXT",
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: "",
        style: {
            padding: 0,
            fontFamily: "Roboto",
            fontSize: 24,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#ffd433",
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeOpacity: 1,
            strokeWidth: 4,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    }
}, {
    layer: "CHARACTER",
    scale: {
        y: 1.8820346342895062,
        x: 1.8820346342895062
    },
    lastModified: "2025-08-24T16:37:34.508Z",
    zIndex: 1756053454505,
    position: {
        y: 1419.6207560238383,
        x: 4373.1324601051865
    },
    type: "IMAGE",
    id: "2f764cc6-189d-4323-9aee-aad9a322b370",
    name: "Techno Stats F Inal",
    rotation: 0,
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        width: 870,
        height: 254,
        mime: "image/png",
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/66315caa-1deb-4df9-af8e-7023e1a4b18c.png"
    },
    grid: {
        dpi: 150,
        offset: {
            x: 435,
            y: 127
        }
    },
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: "",
        style: {
            padding: 8,
            fontFamily: "Roboto",
            fontSize: 24,
            fontWeight: 400,
            textAlign: "CENTER",
            textAlignVertical: "BOTTOM",
            fillColor: "#ffffff",
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeOpacity: 1,
            strokeWidth: 0,
            lineHeight: 1.5
        },
        type: "PLAIN",
        width: "AUTO",
        height: "AUTO"
    },
    textItemType: "LABEL",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3"
}, {
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    scale: {
        y: .735887634471691,
        x: .735887634471691
    },
    position: {
        y: 1413.3138658011055,
        x: 4849.286456918575
    },
    lastModified: "2025-08-24T16:37:34.508Z",
    zIndex: 1756053454512,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    id: "959e760b-4e46-4711-b9c9-04d65fc39507",
    name: "Text",
    locked: !1,
    metadata: {},
    rotation: 0,
    type: "TEXT",
    visible: !0,
    layer: "TEXT",
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: "Origin"
            }]
        }],
        plainText: "",
        style: {
            padding: 0,
            fontFamily: "Roboto",
            fontSize: 21,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#b3b3b3",
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeOpacity: 1,
            strokeWidth: 10,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    },
    attachedTo: "2f764cc6-189d-4323-9aee-aad9a322b370"
}, {
    scale: {
        y: .9040286855598817,
        x: .9040286855598817
    },
    position: {
        y: 1309.9528015645126,
        x: 3879.435278785985
    },
    lastModified: "2025-08-24T16:37:34.508Z",
    zIndex: 1756053454506,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    id: "e10f154e-d35b-4b48-af04-1c9504098852",
    name: "Text",
    locked: !1,
    metadata: {},
    rotation: 0,
    type: "TEXT",
    visible: !0,
    layer: "TEXT",
    text: {
        richText: [{
            type: "heading-one",
            children: [{
                text: "45/45"
            }]
        }],
        plainText: "",
        style: {
            padding: 0,
            fontFamily: "Roboto",
            fontSize: 24,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#2abf0c",
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeOpacity: 1,
            strokeWidth: 10,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    },
    attachedTo: "2f764cc6-189d-4323-9aee-aad9a322b370",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3"
}, {
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    scale: {
        y: .6079031627691802,
        x: .6079031627691802
    },
    position: {
        y: 1397.6324449074677,
        x: 4178.34303216803
    },
    lastModified: "2025-08-24T16:37:34.508Z",
    zIndex: 1756053454507,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    id: "f920a661-6ed5-4967-bd03-808a52e8c4de",
    name: "Text",
    locked: !1,
    metadata: {},
    rotation: 0,
    type: "TEXT",
    visible: !0,
    layer: "TEXT",
    text: {
        richText: [{
            type: "heading-one",
            children: [{
                text: "06"
            }]
        }],
        plainText: "",
        style: {
            padding: 0,
            fontFamily: "Roboto",
            fontSize: 36,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#ff9f00",
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeOpacity: 1,
            strokeWidth: 10,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    },
    attachedTo: "2f764cc6-189d-4323-9aee-aad9a322b370"
}, {
    scale: {
        y: .9040286855598817,
        x: .9040286855598817
    },
    position: {
        y: 1389.9182964202528,
        x: 3938.4765084071505
    },
    lastModified: "2025-08-24T16:37:34.508Z",
    zIndex: 1756053454508,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    id: "adde5605-e07b-4de8-aa40-baa833a55b47",
    name: "Text",
    locked: !1,
    metadata: {},
    rotation: 0,
    type: "TEXT",
    visible: !0,
    layer: "TEXT",
    text: {
        richText: [{
            type: "heading-one",
            children: [{
                text: "45/45"
            }]
        }],
        plainText: "",
        style: {
            padding: 0,
            fontFamily: "Roboto",
            fontSize: 24,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#884dff",
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeOpacity: 1,
            strokeWidth: 10,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    },
    attachedTo: "2f764cc6-189d-4323-9aee-aad9a322b370",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3"
}, {
    scale: {
        y: 1.5587715158855706,
        x: 1.5587715158855706
    },
    position: {
        y: 1469.1697893623598,
        x: 4004.1220857620833
    },
    lastModified: "2025-08-24T16:37:34.508Z",
    zIndex: 1756053454515,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    id: "97eea409-9fc7-4055-b56a-ef17cc32c804",
    name: "Text",
    locked: !1,
    metadata: {},
    rotation: 0,
    type: "TEXT",
    visible: !0,
    layer: "TEXT",
    text: {
        richText: [{
            type: "heading-one",
            children: [{
                text: "10"
            }]
        }],
        plainText: "",
        style: {
            padding: 0,
            fontFamily: "Roboto",
            fontSize: 13,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#ff4d4d",
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeOpacity: 1,
            strokeWidth: 6,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    },
    attachedTo: "2f764cc6-189d-4323-9aee-aad9a322b370",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3"
}, {
    scale: {
        y: 1.1207047067255664,
        x: 1.1207047067255664
    },
    position: {
        y: 1231.117835152001,
        x: 4407.454445810761
    },
    lastModified: "2025-08-24T16:37:34.508Z",
    zIndex: 1756053454513,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    id: "38a12b0d-d30b-4380-8263-651a2f5e16d4",
    name: "Text",
    locked: !1,
    metadata: {},
    rotation: 0,
    type: "TEXT",
    visible: !0,
    layer: "TEXT",
    text: {
        richText: [{
            type: "heading-one",
            children: [{
                text: " 3"
            }]
        }],
        plainText: "",
        style: {
            padding: 0,
            fontFamily: "Roboto",
            fontSize: 36,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#44e0f1",
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeOpacity: 1,
            strokeWidth: 10,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    },
    attachedTo: "2f764cc6-189d-4323-9aee-aad9a322b370",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3"
}, {
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    scale: {
        y: .735887634471691,
        x: .735887634471691
    },
    position: {
        y: 1453.2469830645014,
        x: 5013.355977047198
    },
    lastModified: "2025-08-24T16:37:34.508Z",
    zIndex: 1756053454509,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    id: "6dc34227-61b2-49f4-af25-40870a46413d",
    name: "Text",
    locked: !1,
    metadata: {},
    rotation: 0,
    type: "TEXT",
    visible: !0,
    layer: "TEXT",
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: "THEME"
            }]
        }],
        plainText: "",
        style: {
            padding: 0,
            fontFamily: "Roboto",
            fontSize: 21,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#b3b3b3",
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeOpacity: 1,
            strokeWidth: 10,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    },
    attachedTo: "2f764cc6-189d-4323-9aee-aad9a322b370"
}, {
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    scale: {
        y: .735887634471691,
        x: .735887634471691
    },
    position: {
        y: 1368.97617143931,
        x: 4848.772363517015
    },
    lastModified: "2025-08-24T16:37:34.508Z",
    zIndex: 1756053454510,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    id: "eb0548b6-3687-444d-8cbe-fbd0ff2616cb",
    name: "Text",
    locked: !1,
    metadata: {},
    rotation: 0,
    type: "TEXT",
    visible: !0,
    layer: "TEXT",
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: "Identity"
            }]
        }],
        plainText: "",
        style: {
            padding: 0,
            fontFamily: "Roboto",
            fontSize: 21,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#b3b3b3",
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeOpacity: 1,
            strokeWidth: 10,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    },
    attachedTo: "2f764cc6-189d-4323-9aee-aad9a322b370"
}, {
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    scale: {
        y: .9186322767742867,
        x: .9186322767742867
    },
    position: {
        y: 1321.5563285273772,
        x: 4960.090444084712
    },
    lastModified: "2025-08-24T16:37:34.508Z",
    zIndex: 1756053454511,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    id: "9c52b8bc-5922-4b80-be4b-1233069462c6",
    name: "Text",
    locked: !1,
    metadata: {},
    rotation: 0,
    type: "TEXT",
    visible: !0,
    layer: "TEXT",
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: "Name"
            }]
        }],
        plainText: "",
        style: {
            padding: 0,
            fontFamily: "Roboto",
            fontSize: 36,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#b3b3b3",
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeOpacity: 1,
            strokeWidth: 10,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    },
    attachedTo: "2f764cc6-189d-4323-9aee-aad9a322b370"
}, {
    scale: {
        y: 1.5587715158855706,
        x: 1.5587715158855706
    },
    position: {
        y: 1468.6938684008726,
        x: 4275.5499639348545
    },
    lastModified: "2025-08-24T16:37:34.508Z",
    zIndex: 1756053454516,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    id: "d018c7fb-601c-4a6e-bf20-a8ce1e7bc2d2",
    name: "Text",
    locked: !1,
    metadata: {},
    rotation: 0,
    type: "TEXT",
    visible: !0,
    layer: "TEXT",
    text: {
        richText: [{
            type: "heading-one",
            children: [{
                text: "10"
            }]
        }],
        plainText: "",
        style: {
            padding: 0,
            fontFamily: "Roboto",
            fontSize: 13,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#B07126",
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeOpacity: 1,
            strokeWidth: 6,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    },
    attachedTo: "2f764cc6-189d-4323-9aee-aad9a322b370",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3"
}, {
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    layer: "CHARACTER",
    scale: {
        y: 1.8820346342895062,
        x: 1.8820346342895062
    },
    lastModified: "2025-08-23T16:36:36.665Z",
    zIndex: 1755966996664,
    position: {
        y: 1819.4355861508175,
        x: 4384.6830476417945
    },
    type: "IMAGE",
    id: "a4846c58-21fb-4f72-822f-158ed5756304",
    name: "Techno Stats F Inal",
    rotation: 0,
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        width: 870,
        height: 254,
        mime: "image/png",
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/66315caa-1deb-4df9-af8e-7023e1a4b18c.png"
    },
    grid: {
        dpi: 150,
        offset: {
            x: 435,
            y: 127
        }
    },
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: "",
        style: {
            padding: 8,
            fontFamily: "Roboto",
            fontSize: 24,
            fontWeight: 400,
            textAlign: "CENTER",
            textAlignVertical: "BOTTOM",
            fillColor: "#ffffff",
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeOpacity: 1,
            strokeWidth: 0,
            lineHeight: 1.5
        },
        type: "PLAIN",
        width: "AUTO",
        height: "AUTO"
    },
    textItemType: "LABEL"
}, {
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    scale: {
        y: .735887634471691,
        x: .735887634471691
    },
    position: {
        y: 1813.1286959280867,
        x: 4860.8370444551965
    },
    lastModified: "2025-08-23T16:36:36.665Z",
    zIndex: 1755966996671,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    id: "96e84190-7ebb-40e8-921b-f32267a0162c",
    name: "Text",
    locked: !1,
    metadata: {},
    rotation: 0,
    type: "TEXT",
    visible: !0,
    layer: "TEXT",
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: "Origin"
            }]
        }],
        plainText: "",
        style: {
            padding: 0,
            fontFamily: "Roboto",
            fontSize: 21,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#b3b3b3",
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeOpacity: 1,
            strokeWidth: 10,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    },
    attachedTo: "a4846c58-21fb-4f72-822f-158ed5756304"
}, {
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    scale: {
        y: .9040286855598817,
        x: .9040286855598817
    },
    position: {
        y: 1709.7676316914838,
        x: 3890.985866322622
    },
    lastModified: "2025-08-23T16:36:36.665Z",
    zIndex: 1755966996665,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    id: "73ef65be-aed5-4a95-b0fc-7c4ccd8f83e8",
    name: "Text",
    locked: !1,
    metadata: {},
    rotation: 0,
    type: "TEXT",
    visible: !0,
    layer: "TEXT",
    text: {
        richText: [{
            type: "heading-one",
            children: [{
                text: "45/45"
            }]
        }],
        plainText: "",
        style: {
            padding: 0,
            fontFamily: "Roboto",
            fontSize: 24,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#2abf0c",
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeOpacity: 1,
            strokeWidth: 10,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    },
    attachedTo: "a4846c58-21fb-4f72-822f-158ed5756304"
}, {
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    scale: {
        y: .6079031627691802,
        x: .6079031627691802
    },
    position: {
        y: 1797.4472750344446,
        x: 4189.893619704697
    },
    lastModified: "2025-08-23T16:36:36.665Z",
    zIndex: 1755966996666,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    id: "37bbfd9f-9f61-4064-bb43-4d327cde7304",
    name: "Text",
    locked: !1,
    metadata: {},
    rotation: 0,
    type: "TEXT",
    visible: !0,
    layer: "TEXT",
    text: {
        richText: [{
            type: "heading-one",
            children: [{
                text: "06"
            }]
        }],
        plainText: "",
        style: {
            padding: 0,
            fontFamily: "Roboto",
            fontSize: 36,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#ff9f00",
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeOpacity: 1,
            strokeWidth: 10,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    },
    attachedTo: "a4846c58-21fb-4f72-822f-158ed5756304"
}, {
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    scale: {
        y: .9040286855598817,
        x: .9040286855598817
    },
    position: {
        y: 1789.7331265472267,
        x: 3950.02709594381
    },
    lastModified: "2025-08-23T16:36:36.665Z",
    zIndex: 1755966996667,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    id: "a9ab3b02-a311-4e6f-b6fa-4ceb1fcaf8d3",
    name: "Text",
    locked: !1,
    metadata: {},
    rotation: 0,
    type: "TEXT",
    visible: !0,
    layer: "TEXT",
    text: {
        richText: [{
            type: "heading-one",
            children: [{
                text: "45/45"
            }]
        }],
        plainText: "",
        style: {
            padding: 0,
            fontFamily: "Roboto",
            fontSize: 24,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#884dff",
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeOpacity: 1,
            strokeWidth: 10,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    },
    attachedTo: "a4846c58-21fb-4f72-822f-158ed5756304"
}, {
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    scale: {
        y: 1.5587715158855706,
        x: 1.5587715158855706
    },
    position: {
        y: 1868.9846194893505,
        x: 4015.6726732987486
    },
    lastModified: "2025-08-23T16:36:36.665Z",
    zIndex: 1755966996673,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    id: "cf6f77fc-1dc6-4898-94c6-86521e5a49c9",
    name: "Text",
    locked: !1,
    metadata: {},
    rotation: 0,
    type: "TEXT",
    visible: !0,
    layer: "TEXT",
    text: {
        richText: [{
            type: "heading-one",
            children: [{
                text: "10"
            }]
        }],
        plainText: "",
        style: {
            padding: 0,
            fontFamily: "Roboto",
            fontSize: 13,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#ff4d4d",
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeOpacity: 1,
            strokeWidth: 6,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    },
    attachedTo: "a4846c58-21fb-4f72-822f-158ed5756304"
}, {
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    scale: {
        y: 1.1207047067255664,
        x: 1.1207047067255664
    },
    position: {
        y: 1630.9326652789684,
        x: 4419.005033347427
    },
    lastModified: "2025-08-23T16:36:36.665Z",
    zIndex: 1755966996672,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    id: "937d4490-c5ed-4a40-ba7e-4526c05b137f",
    name: "Text",
    locked: !1,
    metadata: {},
    rotation: 0,
    type: "TEXT",
    visible: !0,
    layer: "TEXT",
    text: {
        richText: [{
            type: "heading-one",
            children: [{
                text: " 3"
            }]
        }],
        plainText: "",
        style: {
            padding: 0,
            fontFamily: "Roboto",
            fontSize: 36,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#44e0f1",
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeOpacity: 1,
            strokeWidth: 10,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    },
    attachedTo: "a4846c58-21fb-4f72-822f-158ed5756304"
}, {
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    scale: {
        y: .735887634471691,
        x: .735887634471691
    },
    position: {
        y: 1853.0618131914848,
        x: 5024.906564583864
    },
    lastModified: "2025-08-23T16:36:36.665Z",
    zIndex: 1755966996668,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    id: "c27e3808-4266-4edb-8e05-8ff3aca179c1",
    name: "Text",
    locked: !1,
    metadata: {},
    rotation: 0,
    type: "TEXT",
    visible: !0,
    layer: "TEXT",
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: "Theme"
            }]
        }],
        plainText: "",
        style: {
            padding: 0,
            fontFamily: "Roboto",
            fontSize: 21,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#b3b3b3",
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeOpacity: 1,
            strokeWidth: 10,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    },
    attachedTo: "a4846c58-21fb-4f72-822f-158ed5756304"
}, {
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    scale: {
        y: .735887634471691,
        x: .735887634471691
    },
    position: {
        y: 1768.7910015662885,
        x: 4860.322951053682
    },
    lastModified: "2025-08-23T16:36:36.665Z",
    zIndex: 1755966996669,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    id: "8d219c0c-0912-42d0-8d06-22f43001a1be",
    name: "Text",
    locked: !1,
    metadata: {},
    rotation: 0,
    type: "TEXT",
    visible: !0,
    layer: "TEXT",
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: "Identity"
            }]
        }],
        plainText: "",
        style: {
            padding: 0,
            fontFamily: "Roboto",
            fontSize: 21,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#b3b3b3",
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeOpacity: 1,
            strokeWidth: 10,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    },
    attachedTo: "a4846c58-21fb-4f72-822f-158ed5756304"
}, {
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    scale: {
        y: .9186322767742867,
        x: .9186322767742867
    },
    position: {
        y: 1721.3711586543486,
        x: 4971.641031621377
    },
    lastModified: "2025-08-23T16:36:36.665Z",
    zIndex: 1755966996670,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    id: "d120b927-341d-473c-b702-675915d5f510",
    name: "Text",
    locked: !1,
    metadata: {},
    rotation: 0,
    type: "TEXT",
    visible: !0,
    layer: "TEXT",
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: "Name"
            }]
        }],
        plainText: "",
        style: {
            padding: 0,
            fontFamily: "Roboto",
            fontSize: 36,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#b3b3b3",
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeOpacity: 1,
            strokeWidth: 10,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    },
    attachedTo: "a4846c58-21fb-4f72-822f-158ed5756304"
}, {
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    scale: {
        y: 1.5587715158855706,
        x: 1.5587715158855706
    },
    position: {
        y: 1868.508698527864,
        x: 4287.10055147155
    },
    lastModified: "2025-08-23T16:36:36.665Z",
    zIndex: 1755966996674,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    id: "a37abf77-b9ca-4946-85ea-67ae8b017feb",
    name: "Text",
    locked: !1,
    metadata: {},
    rotation: 0,
    type: "TEXT",
    visible: !0,
    layer: "TEXT",
    text: {
        richText: [{
            type: "heading-one",
            children: [{
                text: "10"
            }]
        }],
        plainText: "",
        style: {
            padding: 0,
            fontFamily: "Roboto",
            fontSize: 13,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#B07126",
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeOpacity: 1,
            strokeWidth: 6,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    },
    attachedTo: "a4846c58-21fb-4f72-822f-158ed5756304"
}, {
    type: "IMAGE",
    id: "353f24b0-8c1e-404a-9e9b-9f8f1fbc8c5c",
    name: "Untitled",
    position: {
        y: 1035.6511967787171,
        x: 4653.438083744794
    },
    rotation: 0,
    scale: {
        y: 1.619056071628991,
        x: 1.619056071628991
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        width: 256,
        height: 253,
        mime: "image/png",
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/dacb11b6-831f-45a7-8c16-770526bb1be9.png"
    },
    grid: {
        dpi: 150,
        offset: {
            x: 128,
            y: 126.5
        }
    },
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: "",
        style: {
            padding: 8,
            fontFamily: "Roboto",
            fontSize: 24,
            fontWeight: 400,
            textAlign: "CENTER",
            textAlignVertical: "BOTTOM",
            fillColor: "#ffffff",
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeOpacity: 1,
            strokeWidth: 0,
            lineHeight: 1.5
        },
        type: "PLAIN",
        width: "AUTO",
        height: "AUTO"
    },
    textItemType: "LABEL",
    layer: "CHARACTER",
    lastModified: "2025-08-23T16:30:40.947Z",
    zIndex: 1755966640945
}, {
    type: "IMAGE",
    id: "07272c7f-aa63-4b4b-9e22-c7696e95472e",
    name: "Avatar",
    position: {
        y: 618.1221925102616,
        x: 4671.573015910816
    },
    rotation: 0,
    scale: {
        y: 1.3844364273310947,
        x: 1.3844364273310947
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        width: 194,
        height: 249,
        mime: "image/png",
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/b4bb8388-a647-4b73-a606-79c00eee0781.png"
    },
    grid: {
        dpi: 150,
        offset: {
            x: 97,
            y: 124.5
        }
    },
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: "",
        style: {
            padding: 8,
            fontFamily: "Roboto",
            fontSize: 24,
            fontWeight: 400,
            textAlign: "CENTER",
            textAlignVertical: "BOTTOM",
            fillColor: "#ffffff",
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeOpacity: 1,
            strokeWidth: 0,
            lineHeight: 1.5
        },
        type: "PLAIN",
        width: "AUTO",
        height: "AUTO"
    },
    textItemType: "LABEL",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    layer: "CHARACTER",
    lastModified: "2025-08-23T16:37:01.153Z",
    zIndex: 1755967021147
}, {
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    id: "07024784-c5d5-4eea-8a0e-3d2ed5a0fd9f",
    name: "Text",
    locked: !1,
    metadata: {},
    position: {
        y: 801.8279762289338,
        x: 5100.496568552655
    },
    rotation: 0,
    scale: {
        y: .7358876344716901,
        x: .7358876344716901
    },
    type: "TEXT",
    visible: !0,
    layer: "TEXT",
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: "",
        style: {
            padding: 0,
            fontFamily: "Roboto",
            fontSize: 48,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#519E00",
            fillOpacity: 1,
            strokeColor: "#3b3b3b",
            strokeOpacity: 1,
            strokeWidth: 5,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    },
    lastModified: "2025-08-23T16:23:04.984Z",
    zIndex: 1755966184964,
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3"
}, {
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    scale: {
        y: .8245719142513234,
        x: .8245719142513234
    },
    position: {
        y: 1096.2137024261367,
        x: 4996.72132763253
    },
    lastModified: "2025-08-23T16:23:04.984Z",
    zIndex: 1755966184960,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    id: "e2bcb975-9ea2-4906-8797-2848697f6b14",
    name: "Text",
    locked: !1,
    metadata: {},
    rotation: 0,
    type: "TEXT",
    visible: !0,
    layer: "TEXT",
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: "",
        style: {
            padding: 0,
            fontFamily: "Roboto",
            fontSize: 48,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#519E00",
            fillOpacity: 1,
            strokeColor: "#3b3b3b",
            strokeOpacity: 1,
            strokeWidth: 5,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    }
}, {
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    id: "2e6203d4-a45f-4a85-a532-af75ef35c54a",
    name: "Text",
    locked: !1,
    metadata: {},
    position: {
        y: 840.6606110867763,
        x: 5090.393162390419
    },
    rotation: 0,
    scale: {
        y: .8245719142513234,
        x: .8245719142513234
    },
    type: "TEXT",
    visible: !0,
    layer: "TEXT",
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: "",
        style: {
            padding: 0,
            fontFamily: "Roboto",
            fontSize: 24,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#884dff",
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeOpacity: 1,
            strokeWidth: 10,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    },
    lastModified: "2025-08-23T16:23:04.984Z",
    zIndex: 1755966184961,
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3"
}, {
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    id: "4e25e4ad-765f-471f-be6c-93b860b8c157",
    name: "Text",
    locked: !1,
    metadata: {},
    position: {
        y: 475.39122035050764,
        x: 4973.851813992034
    },
    rotation: 0,
    scale: {
        y: .7358876344716901,
        x: .7358876344716901
    },
    type: "TEXT",
    visible: !0,
    layer: "TEXT",
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: "",
        style: {
            padding: 0,
            fontFamily: "Roboto",
            fontSize: 24,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#884dff",
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeOpacity: 1,
            strokeWidth: 10,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    },
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    lastModified: "2025-08-23T16:23:04.984Z",
    zIndex: 1755966184965
}, {
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    scale: {
        y: .7358876344716901,
        x: .7358876344716901
    },
    position: {
        y: 1216.0887604864206,
        x: 5087.045523934694
    },
    lastModified: "2025-08-23T16:23:04.984Z",
    zIndex: 1755966184966,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    id: "f8b80a99-607c-418b-9e67-d8dda4d0837b",
    name: "Text",
    locked: !1,
    metadata: {},
    rotation: 0,
    type: "TEXT",
    visible: !0,
    layer: "TEXT",
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: "",
        style: {
            padding: 0,
            fontFamily: "Roboto",
            fontSize: 36,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#b3b3b3",
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeOpacity: 1,
            strokeWidth: 10,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    }
}, {
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    id: "0c2347fc-11fa-4121-ae92-b6df745e6c28",
    name: "Text",
    locked: !1,
    metadata: {},
    position: {
        y: 822.9355032565079,
        x: 3943.2016046278477
    },
    rotation: 0,
    scale: {
        y: .7358876344716901,
        x: .7358876344716901
    },
    type: "TEXT",
    visible: !0,
    layer: "TEXT",
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: "",
        style: {
            padding: 0,
            fontFamily: "Roboto",
            fontSize: 48,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#519E00",
            fillOpacity: 1,
            strokeColor: "#3b3b3b",
            strokeOpacity: 1,
            strokeWidth: 5,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    },
    lastModified: "2025-08-23T16:23:04.984Z",
    zIndex: 1755966184967,
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3"
}, {
    type: "IMAGE",
    id: "e7792dd2-18c3-4a60-9fd8-830b97c82a3b",
    name: "Blob Https Www Owlbear Rodeo 5b8cabbd F7dd 499e 9a70 20be195b29d8",
    position: {
        x: 2538.0672977531,
        y: 1335.6327816720282
    },
    rotation: 0,
    scale: {
        x: .8245719142513234,
        y: .8245719142513234
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1756120123689,
    lastModified: "2025-08-25T11:08:43.690Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        width: 338,
        height: 899,
        mime: "image/webp",
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/d85bc571-8bda-41ea-bc4e-8a669e578c8d.webp"
    },
    grid: {
        dpi: 150,
        offset: {
            x: 169,
            y: 449.5
        }
    },
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: "",
        style: {
            padding: 8,
            fontFamily: "Roboto",
            fontSize: 24,
            fontWeight: 400,
            textAlign: "CENTER",
            textAlignVertical: "BOTTOM",
            fillColor: "#ffffff",
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeOpacity: 1,
            strokeWidth: 0,
            lineHeight: 1.5
        },
        type: "PLAIN",
        width: "AUTO",
        height: "AUTO"
    },
    textItemType: "LABEL",
    layer: "CHARACTER"
}, {
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    id: "da5952aa-5227-4f9f-9149-c60839115f7a",
    name: "Text",
    zIndex: 1755970552457,
    lastModified: "2025-08-23T17:35:52.457Z",
    lastModifiedUserId: "unknown",
    locked: !1,
    metadata: {},
    position: {
        x: 6794.300979167297,
        y: 1448.1285461462314
    },
    rotation: 0,
    scale: {
        x: 1,
        y: 1
    },
    type: "TEXT",
    visible: !0,
    layer: "TEXT",
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: "",
        style: {
            padding: 0,
            fontFamily: "Roboto",
            fontSize: 21,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#b3b3b3",
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeOpacity: 1,
            strokeWidth: 10,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    }
}, {
    type: "IMAGE",
    id: "ee8a5e6b-75e3-4a3f-962d-639c7d448bdb",
    name: " Removal Ai F161c152 281e 434a Bcfe Cb5f54c089e1 Dad4fe819ee77f26eef0e8746e1265e8",
    position: {
        x: 2833.2139474025153,
        y: 1334.5532158301103
    },
    rotation: 0,
    scale: {
        x: 1.1468308458082193,
        y: 1.1468308458082193
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1756120121321,
    lastModified: "2025-08-25T11:08:41.321Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        width: 223,
        height: 600,
        mime: "image/png",
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/5b590b58-6fa4-4b3e-b7bb-d3790213d65d.png"
    },
    grid: {
        dpi: 150,
        offset: {
            x: 111.5,
            y: 300
        }
    },
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: "",
        style: {
            padding: 8,
            fontFamily: "Roboto",
            fontSize: 24,
            fontWeight: 400,
            textAlign: "CENTER",
            textAlignVertical: "BOTTOM",
            fillColor: "#ffffff",
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeOpacity: 1,
            strokeWidth: 0,
            lineHeight: 1.5
        },
        type: "PLAIN",
        width: "AUTO",
        height: "AUTO"
    },
    textItemType: "LABEL",
    layer: "CHARACTER"
}, {
    type: "IMAGE",
    id: "9d67c339-444b-477e-a715-b9dcd5477b5b",
    name: "Background",
    position: {
        x: 6933.084121224137,
        y: 1275.1602642385546
    },
    rotation: 180.28548850300731,
    scale: {
        x: 1.8354607129257332,
        y: 1.8354607129257332
    },
    visible: !0,
    locked: !0,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1755966065463,
    lastModified: "2025-08-23T16:21:06.492Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        width: 2100,
        height: 1400,
        mime: "image/png",
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/325bca07-6675-4a1a-8790-4df080cbe52c.png"
    },
    grid: {
        dpi: 150,
        offset: {
            x: 1050,
            y: 700
        }
    },
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: "",
        style: {
            padding: 8,
            fontFamily: "Roboto",
            fontSize: 24,
            fontWeight: 400,
            textAlign: "CENTER",
            textAlignVertical: "BOTTOM",
            fillColor: "#ffffff",
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeOpacity: 1,
            strokeWidth: 0,
            lineHeight: 1.5
        },
        type: "PLAIN",
        width: "AUTO",
        height: "AUTO"
    },
    textItemType: "LABEL",
    layer: "MOUNT"
}, {
    type: "IMAGE",
    id: "8e4dde7c-e272-4f81-ade3-bb9950517f18",
    name: "Marker Text Box",
    position: {
        y: 1226.962158204275,
        x: 8373.549909561167
    },
    rotation: 0,
    scale: {
        y: 1.2967180678626435,
        x: 1.2967180678626435
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        width: 298,
        height: 233,
        mime: "image/png",
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/ea51e552-3a7a-43f2-8882-cbddef8b5cdc.png"
    },
    grid: {
        dpi: 150,
        offset: {
            x: 149,
            y: 116.5
        }
    },
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: "",
        style: {
            padding: 8,
            fontFamily: "Roboto",
            fontSize: 24,
            fontWeight: 400,
            textAlign: "CENTER",
            textAlignVertical: "BOTTOM",
            fillColor: "#ffffff",
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeOpacity: 1,
            strokeWidth: 0,
            lineHeight: 1.5
        },
        type: "PLAIN",
        width: "AUTO",
        height: "AUTO"
    },
    textItemType: "LABEL",
    layer: "MOUNT",
    lastModified: "2025-08-23T16:37:26.717Z",
    zIndex: 1755967046717
}, {
    type: "IMAGE",
    id: "84d97684-479d-4504-9747-17ca73a58cc4",
    name: "Marker Text Box2",
    position: {
        y: 1236.795404169081,
        x: 7977.201229877185
    },
    rotation: 0,
    scale: {
        y: 1.2967180678626435,
        x: 1.2967180678626435
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        width: 298,
        height: 233,
        mime: "image/png",
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/59a74f94-7da3-4505-9a98-f5adc0a33171.png"
    },
    grid: {
        dpi: 150,
        offset: {
            x: 149,
            y: 116.5
        }
    },
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: "",
        style: {
            padding: 8,
            fontFamily: "Roboto",
            fontSize: 24,
            fontWeight: 400,
            textAlign: "CENTER",
            textAlignVertical: "BOTTOM",
            fillColor: "#ffffff",
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeOpacity: 1,
            strokeWidth: 0,
            lineHeight: 1.5
        },
        type: "PLAIN",
        width: "AUTO",
        height: "AUTO"
    },
    textItemType: "LABEL",
    layer: "MOUNT",
    lastModified: "2025-08-23T16:36:11.934Z",
    zIndex: 1755966971936
}, {
    type: "IMAGE",
    id: "2ddac3e1-8ff0-495a-8d0c-7c818ef00538",
    name: "Marker Text Box(1)",
    position: {
        y: 1224.5849847011857,
        x: 7572.2626572344525
    },
    rotation: 0,
    scale: {
        y: 1.2967180678626435,
        x: 1.2967180678626435
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        width: 298,
        height: 233,
        mime: "image/png",
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/2e13d75c-b575-42ac-be30-5ee500c89b82.png"
    },
    grid: {
        dpi: 150,
        offset: {
            x: 149,
            y: 116.5
        }
    },
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: "",
        style: {
            padding: 8,
            fontFamily: "Roboto",
            fontSize: 24,
            fontWeight: 400,
            textAlign: "CENTER",
            textAlignVertical: "BOTTOM",
            fillColor: "#ffffff",
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeOpacity: 1,
            strokeWidth: 0,
            lineHeight: 1.5
        },
        type: "PLAIN",
        width: "AUTO",
        height: "AUTO"
    },
    textItemType: "LABEL",
    layer: "MOUNT",
    lastModified: "2025-08-23T16:36:11.934Z",
    zIndex: 1755966971934
}, {
    type: "IMAGE",
    id: "bdf2237b-ae8f-4101-b5c0-78447624e4ab",
    name: "Marker Text Box(2)",
    position: {
        y: 1235.999865946253,
        x: 6753.122503731468
    },
    rotation: 0,
    scale: {
        y: 1.2967180678626435,
        x: 1.2967180678626435
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        width: 298,
        height: 233,
        mime: "image/png",
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/1c213c60-22d5-4735-8a4c-297d6bf930e7.png"
    },
    grid: {
        dpi: 150,
        offset: {
            x: 149,
            y: 116.5
        }
    },
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: "",
        style: {
            padding: 8,
            fontFamily: "Roboto",
            fontSize: 24,
            fontWeight: 400,
            textAlign: "CENTER",
            textAlignVertical: "BOTTOM",
            fillColor: "#ffffff",
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeOpacity: 1,
            strokeWidth: 0,
            lineHeight: 1.5
        },
        type: "PLAIN",
        width: "AUTO",
        height: "AUTO"
    },
    textItemType: "LABEL",
    layer: "MOUNT",
    lastModified: "2025-08-23T16:36:11.934Z",
    zIndex: 1755966971938
}, {
    type: "IMAGE",
    id: "7fbc3598-f927-4f62-88c4-492ab7d0ca2d",
    name: "Marker Text Box(3)",
    position: {
        y: 1236.0664483828884,
        x: 7155.566691024362
    },
    rotation: 0,
    scale: {
        y: 1.2967180678626435,
        x: 1.2967180678626435
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        width: 298,
        height: 233,
        mime: "image/png",
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/ccb00c0c-407c-40cc-b81c-91aca86458ed.png"
    },
    grid: {
        dpi: 150,
        offset: {
            x: 149,
            y: 116.5
        }
    },
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: "",
        style: {
            padding: 8,
            fontFamily: "Roboto",
            fontSize: 24,
            fontWeight: 400,
            textAlign: "CENTER",
            textAlignVertical: "BOTTOM",
            fillColor: "#ffffff",
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeOpacity: 1,
            strokeWidth: 0,
            lineHeight: 1.5
        },
        type: "PLAIN",
        width: "AUTO",
        height: "AUTO"
    },
    textItemType: "LABEL",
    layer: "MOUNT",
    lastModified: "2025-08-23T16:36:11.934Z",
    zIndex: 1755966971935
}, {
    scale: {
        y: .8632052062330033,
        x: .8632052062330033
    },
    position: {
        y: 466.50584757192325,
        x: 5068.60740568244
    },
    lastModified: "2025-08-23T16:23:04.984Z",
    zIndex: 1755966184962,
    createdUserId: "5612f023-124e-468e-9440-9ff43f4d69b6",
    id: "90447daa-a7d8-407f-acf8-c37c53c48f40",
    name: "Text",
    locked: !1,
    metadata: {},
    rotation: 0,
    type: "TEXT",
    visible: !0,
    layer: "TEXT",
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: "",
        style: {
            padding: 0,
            fontFamily: "Roboto",
            fontSize: 48,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeOpacity: 1,
            strokeWidth: 0,
            lineHeight: 1.5,
            fillColor: "#519E00"
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    },
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3"
}, {
    scale: {
        y: .8632052062330033,
        x: .8632052062330033
    },
    position: {
        y: 479.17486568642346,
        x: 5048.33697669924
    },
    lastModified: "2025-08-23T16:23:04.984Z",
    zIndex: 1755966184963,
    createdUserId: "5612f023-124e-468e-9440-9ff43f4d69b6",
    id: "5c03f938-d027-4b68-a7a1-950fdd8112f4",
    name: "Text",
    locked: !1,
    metadata: {},
    rotation: 0,
    type: "TEXT",
    visible: !0,
    layer: "TEXT",
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: "",
        style: {
            padding: 0,
            fontFamily: "Roboto",
            fontSize: 48,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#519E00",
            fillOpacity: 1,
            strokeOpacity: 1,
            lineHeight: 1.5,
            strokeWidth: 4,
            strokeColor: "#0e0f16"
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    },
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3"
}, {
    type: "IMAGE",
    id: "7e1339fb-2038-4471-a9ca-98ac0d584621",
    name: "Technoforeground",
    position: {
        x: 2676.040976280872,
        y: 1269.522026346954
    },
    rotation: .2170617103740824,
    scale: {
        x: 1.8416143075548776,
        y: 1.8416143075548776
    },
    visible: !0,
    locked: !0,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1755966695246,
    lastModified: "2025-08-24T16:57:51.299Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        width: 2100,
        height: 1400,
        mime: "image/png",
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/7054c6dd-0cab-4685-98cd-75a890e39158.png"
    },
    grid: {
        dpi: 150,
        offset: {
            x: 1050,
            y: 700
        }
    },
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: "",
        style: {
            padding: 8,
            fontFamily: "Roboto",
            fontSize: 24,
            fontWeight: 400,
            textAlign: "CENTER",
            textAlignVertical: "BOTTOM",
            fillColor: "#ffffff",
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeOpacity: 1,
            strokeWidth: 0,
            lineHeight: 1.5
        },
        type: "PLAIN",
        width: "AUTO",
        height: "AUTO"
    },
    textItemType: "LABEL",
    layer: "MOUNT"
}, {
    type: "IMAGE",
    id: "13bdc81b-10ba-47fc-abb7-58677e825782",
    name: "Background",
    position: {
        x: 2625.5820352437927,
        y: 1272.1908075693582
    },
    rotation: 180.28548850300731,
    scale: {
        x: 1.8354607129257332,
        y: 1.8354607129257332
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1755965517626,
    lastModified: "2025-08-23T16:11:57.627Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        width: 2100,
        height: 1400,
        mime: "image/png",
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/325bca07-6675-4a1a-8790-4df080cbe52c.png"
    },
    grid: {
        dpi: 150,
        offset: {
            x: 1050,
            y: 700
        }
    },
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: "",
        style: {
            padding: 8,
            fontFamily: "Roboto",
            fontSize: 24,
            fontWeight: 400,
            textAlign: "CENTER",
            textAlignVertical: "BOTTOM",
            fillColor: "#ffffff",
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeOpacity: 1,
            strokeWidth: 0,
            lineHeight: 1.5
        },
        type: "PLAIN",
        width: "AUTO",
        height: "AUTO"
    },
    textItemType: "LABEL",
    layer: "MAP"
}, {
    type: "IMAGE",
    id: "e7bf37b8-bf56-4001-9be9-0259f8a9a157",
    name: "Icon",
    position: {
        x: 5350.106028062681,
        y: 753.0160906254896
    },
    rotation: 0,
    scale: {
        x: 2.7339081226720974,
        y: 2.7339081226720974
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1755966268858,
    lastModified: "2025-08-23T16:24:28.865Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        width: 400,
        height: 60,
        mime: "image/webp",
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/967a06c5-f682-4715-9069-b308d55ee4e5.webp"
    },
    grid: {
        dpi: 150,
        offset: {
            x: 0,
            y: 0
        }
    },
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: "",
        style: {
            padding: 16,
            fontFamily: "Roboto",
            fontSize: 24,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#ffd433",
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeOpacity: 1,
            strokeWidth: 5,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    },
    textItemType: "TEXT",
    layer: "NOTE"
}, {
    type: "IMAGE",
    id: "b927bc51-4472-456b-80fb-997fe74f9281",
    name: "Iconred",
    position: {
        x: 5344.215186955817,
        y: 936.0689762270827
    },
    rotation: 0,
    scale: {
        x: 2.7339081226720974,
        y: 2.7339081226720974
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1755966268860,
    lastModified: "2025-08-23T16:24:28.865Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        width: 400,
        height: 60,
        mime: "image/webp",
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/8a1e412a-13a7-4c1e-a379-bc27a09b7b44.webp"
    },
    grid: {
        dpi: 150,
        offset: {
            x: 0,
            y: 0
        }
    },
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: "",
        style: {
            padding: 16,
            fontFamily: "Roboto",
            fontSize: 24,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#ff4d4d",
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeOpacity: 1,
            strokeWidth: 5,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    },
    textItemType: "TEXT",
    layer: "NOTE"
}, {
    type: "IMAGE",
    id: "eef2e0b3-a6ec-45f9-a65a-d97ee6d9f162",
    name: "Iconyellow",
    position: {
        x: 5350.642160363921,
        y: 566.6101410769553
    },
    rotation: 0,
    scale: {
        x: 2.7339081226720974,
        y: 2.7339081226720974
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1755966268859,
    lastModified: "2025-08-23T16:24:28.865Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        width: 400,
        height: 60,
        mime: "image/webp",
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/16c43041-8e07-48cd-89ab-b84712a4e401.webp"
    },
    grid: {
        dpi: 150,
        offset: {
            x: 0,
            y: 0
        }
    },
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: "",
        style: {
            padding: 16,
            fontFamily: "Roboto",
            fontSize: 24,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#ffd433",
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeOpacity: 1,
            strokeWidth: 6,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    },
    textItemType: "TEXT",
    layer: "NOTE"
}, {
    type: "IMAGE",
    id: "fc5f687e-1d29-440e-a44a-d8f17269624e",
    name: "Icongreen",
    position: {
        x: 5345.873644028217,
        y: 1126.6266691617832
    },
    rotation: 0,
    scale: {
        x: 2.7339081226720974,
        y: 2.7339081226720974
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1755967050966,
    lastModified: "2025-08-23T16:37:30.967Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        width: 400,
        height: 60,
        mime: "image/webp",
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/d3ad0070-4893-447b-a2bd-e373c563cfbf.webp"
    },
    grid: {
        dpi: 150,
        offset: {
            x: 0,
            y: 0
        }
    },
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: "",
        style: {
            padding: 16,
            fontFamily: "Roboto",
            fontSize: 24,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#85ff66",
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeOpacity: 1,
            strokeWidth: 6,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    },
    textItemType: "TEXT",
    layer: "NOTE"
}, {
    type: "IMAGE",
    id: "47a4cfa5-1395-4972-aec1-cdd8164a82b0",
    name: "Part2 2",
    position: {
        x: 4338.704287058096,
        y: 1270.9921502731627
    },
    rotation: 0,
    scale: {
        x: 1.850187192662833,
        y: 1.850187192662833
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1755966714348,
    lastModified: "2025-08-23T16:31:56.944Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        width: 761,
        height: 1400,
        mime: "image/png",
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/a04454b0-892c-4301-9a26-b2a78ed04f66.png"
    },
    grid: {
        dpi: 150,
        offset: {
            x: 380.5,
            y: 700
        }
    },
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: "",
        style: {
            padding: 8,
            fontFamily: "Roboto",
            fontSize: 24,
            fontWeight: 400,
            textAlign: "CENTER",
            textAlignVertical: "BOTTOM",
            fillColor: "#ffffff",
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeOpacity: 1,
            strokeWidth: 0,
            lineHeight: 1.5
        },
        type: "PLAIN",
        width: "AUTO",
        height: "AUTO"
    },
    textItemType: "LABEL",
    layer: "MOUNT"
}, {
    layer: "CHARACTER",
    scale: {
        y: 1.8820346342895062,
        x: 1.8820346342895062
    },
    lastModified: "2025-08-23T16:30:37.815Z",
    zIndex: 1755966637812,
    position: {
        x: 4383.810446697563,
        y: 1049.234729508024
    },
    type: "IMAGE",
    id: "b3ca22d2-7e4d-47c1-85ea-40263998b134",
    name: "Techno Stats F Inal",
    rotation: 0,
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        width: 870,
        height: 254,
        mime: "image/png",
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/66315caa-1deb-4df9-af8e-7023e1a4b18c.png"
    },
    grid: {
        dpi: 150,
        offset: {
            x: 435,
            y: 127
        }
    },
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: "",
        style: {
            padding: 8,
            fontFamily: "Roboto",
            fontSize: 24,
            fontWeight: 400,
            textAlign: "CENTER",
            textAlignVertical: "BOTTOM",
            fillColor: "#ffffff",
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeOpacity: 1,
            strokeWidth: 0,
            lineHeight: 1.5
        },
        type: "PLAIN",
        width: "AUTO",
        height: "AUTO"
    },
    textItemType: "LABEL",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3"
}, {
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    scale: {
        y: .735887634471691,
        x: .735887634471691
    },
    position: {
        x: 4859.964443510951,
        y: 1042.9278392852875
    },
    lastModified: "2025-08-23T16:33:46.991Z",
    zIndex: 1755966637819,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    id: "30e0f8a6-9a93-4dcc-9051-997bacbb24bc",
    name: "Text",
    locked: !1,
    metadata: {},
    rotation: 0,
    type: "TEXT",
    visible: !0,
    layer: "TEXT",
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: "Origin"
            }]
        }],
        plainText: "",
        style: {
            padding: 0,
            fontFamily: "Roboto",
            fontSize: 21,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#b3b3b3",
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeOpacity: 1,
            strokeWidth: 10,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    },
    attachedTo: "b3ca22d2-7e4d-47c1-85ea-40263998b134"
}, {
    scale: {
        y: .9040286855598817,
        x: .9040286855598817
    },
    position: {
        x: 3890.113265378351,
        y: 939.5667750486919
    },
    lastModified: "2025-08-23T16:30:37.815Z",
    zIndex: 1755966637813,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    id: "db77c49a-4568-4b09-b182-ea58840ffdf8",
    name: "Text",
    locked: !1,
    metadata: {},
    rotation: 0,
    type: "TEXT",
    visible: !0,
    layer: "TEXT",
    text: {
        richText: [{
            type: "heading-one",
            children: [{
                text: "45/45"
            }]
        }],
        plainText: "",
        style: {
            padding: 0,
            fontFamily: "Roboto",
            fontSize: 24,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#2abf0c",
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeOpacity: 1,
            strokeWidth: 10,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    },
    attachedTo: "b3ca22d2-7e4d-47c1-85ea-40263998b134",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3"
}, {
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    scale: {
        y: .6079031627691802,
        x: .6079031627691802
    },
    position: {
        x: 4189.021018760392,
        y: 1027.2464183916527
    },
    lastModified: "2025-08-23T16:30:37.815Z",
    zIndex: 1755966637814,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    id: "96e5bedc-d4eb-4f4c-ac3e-a182728d11a1",
    name: "Text",
    locked: !1,
    metadata: {},
    rotation: 0,
    type: "TEXT",
    visible: !0,
    layer: "TEXT",
    text: {
        richText: [{
            type: "heading-one",
            children: [{
                text: "06"
            }]
        }],
        plainText: "",
        style: {
            padding: 0,
            fontFamily: "Roboto",
            fontSize: 36,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#ff9f00",
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeOpacity: 1,
            strokeWidth: 10,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    },
    attachedTo: "b3ca22d2-7e4d-47c1-85ea-40263998b134"
}, {
    scale: {
        y: .9040286855598817,
        x: .9040286855598817
    },
    position: {
        x: 3949.154494999521,
        y: 1019.532269904432
    },
    lastModified: "2025-08-23T16:30:37.815Z",
    zIndex: 1755966637815,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    id: "de7aa211-ef30-4593-95ae-5b77203aa10f",
    name: "Text",
    locked: !1,
    metadata: {},
    rotation: 0,
    type: "TEXT",
    visible: !0,
    layer: "TEXT",
    text: {
        richText: [{
            type: "heading-one",
            children: [{
                text: "45/45"
            }]
        }],
        plainText: "",
        style: {
            padding: 0,
            fontFamily: "Roboto",
            fontSize: 24,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#884dff",
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeOpacity: 1,
            strokeWidth: 10,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    },
    attachedTo: "b3ca22d2-7e4d-47c1-85ea-40263998b134",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3"
}, {
    scale: {
        y: 1.5587715158855706,
        x: 1.5587715158855706
    },
    position: {
        x: 4014.800072354453,
        y: 1098.783762846544
    },
    lastModified: "2025-08-23T16:30:37.815Z",
    zIndex: 1755966637821,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    id: "94d16dbb-f8b3-4bdd-8d91-47d2cc82bd57",
    name: "Text",
    locked: !1,
    metadata: {},
    rotation: 0,
    type: "TEXT",
    visible: !0,
    layer: "TEXT",
    text: {
        richText: [{
            type: "heading-one",
            children: [{
                text: "10"
            }]
        }],
        plainText: "",
        style: {
            padding: 0,
            fontFamily: "Roboto",
            fontSize: 13,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#ff4d4d",
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeOpacity: 1,
            strokeWidth: 6,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    },
    attachedTo: "b3ca22d2-7e4d-47c1-85ea-40263998b134",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3"
}, {
    scale: {
        y: 1.1207047067255664,
        x: 1.1207047067255664
    },
    position: {
        x: 4418.132432403138,
        y: 860.7318086361779
    },
    lastModified: "2025-08-23T16:30:37.815Z",
    zIndex: 1755966637820,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    id: "dfd042dc-772b-495e-9e1c-1f78725263e7",
    name: "Text",
    locked: !1,
    metadata: {},
    rotation: 0,
    type: "TEXT",
    visible: !0,
    layer: "TEXT",
    text: {
        richText: [{
            type: "heading-one",
            children: [{
                text: " 3"
            }]
        }],
        plainText: "",
        style: {
            padding: 0,
            fontFamily: "Roboto",
            fontSize: 36,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#44e0f1",
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeOpacity: 1,
            strokeWidth: 10,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    },
    attachedTo: "b3ca22d2-7e4d-47c1-85ea-40263998b134",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3"
}, {
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    scale: {
        y: .735887634471691,
        x: .735887634471691
    },
    position: {
        x: 5024.033963639576,
        y: 1082.8609565486856
    },
    lastModified: "2025-08-23T16:33:42.049Z",
    zIndex: 1755966637816,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    id: "a43bdadf-bf2e-4561-906d-965413e07783",
    name: "Text",
    locked: !1,
    metadata: {},
    rotation: 0,
    type: "TEXT",
    visible: !0,
    layer: "TEXT",
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: "THEME"
            }]
        }],
        plainText: "",
        style: {
            padding: 0,
            fontFamily: "Roboto",
            fontSize: 21,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#b3b3b3",
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeOpacity: 1,
            strokeWidth: 10,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    },
    attachedTo: "b3ca22d2-7e4d-47c1-85ea-40263998b134"
}, {
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    scale: {
        y: .735887634471691,
        x: .735887634471691
    },
    position: {
        x: 4859.450350109391,
        y: 998.5901449234891
    },
    lastModified: "2025-08-23T16:33:51.950Z",
    zIndex: 1755966637817,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    id: "35577ddb-dd5c-45cc-a034-fe6e9ef6edba",
    name: "Text",
    locked: !1,
    metadata: {},
    rotation: 0,
    type: "TEXT",
    visible: !0,
    layer: "TEXT",
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: "Identity"
            }]
        }],
        plainText: "",
        style: {
            padding: 0,
            fontFamily: "Roboto",
            fontSize: 21,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#b3b3b3",
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeOpacity: 1,
            strokeWidth: 10,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    },
    attachedTo: "b3ca22d2-7e4d-47c1-85ea-40263998b134"
}, {
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    scale: {
        y: .9186322767742867,
        x: .9186322767742867
    },
    position: {
        x: 4970.768430677086,
        y: 951.1703020115565
    },
    lastModified: "2025-08-23T16:33:35.554Z",
    zIndex: 1755966637818,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    id: "0c96532e-7bcb-4e76-9fa1-af7d8c79233e",
    name: "Text",
    locked: !1,
    metadata: {},
    rotation: 0,
    type: "TEXT",
    visible: !0,
    layer: "TEXT",
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: "Name"
            }]
        }],
        plainText: "",
        style: {
            padding: 0,
            fontFamily: "Roboto",
            fontSize: 36,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#b3b3b3",
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeOpacity: 1,
            strokeWidth: 10,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    },
    attachedTo: "b3ca22d2-7e4d-47c1-85ea-40263998b134"
}, {
    scale: {
        y: 1.5587715158855706,
        x: 1.5587715158855706
    },
    position: {
        x: 4286.227950527231,
        y: 1098.3078418850575
    },
    lastModified: "2025-08-23T16:30:37.815Z",
    zIndex: 1755966637822,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    id: "4829f5ff-eadc-4417-93d5-75dbb16d9b72",
    name: "Text",
    locked: !1,
    metadata: {},
    rotation: 0,
    type: "TEXT",
    visible: !0,
    layer: "TEXT",
    text: {
        richText: [{
            type: "heading-one",
            children: [{
                text: "10"
            }]
        }],
        plainText: "",
        style: {
            padding: 0,
            fontFamily: "Roboto",
            fontSize: 13,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#B07126",
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeOpacity: 1,
            strokeWidth: 6,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    },
    attachedTo: "b3ca22d2-7e4d-47c1-85ea-40263998b134",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3"
}, {
    layer: "CHARACTER",
    scale: {
        y: 1.8820346342895062,
        x: 1.8820346342895062
    },
    lastModified: "2025-08-23T16:36:56.499Z",
    zIndex: 1755967016497,
    position: {
        x: 4386.161167589577,
        y: 661.9664806361527
    },
    type: "IMAGE",
    id: "6e2e8122-2516-432a-82d5-1f479097a82e",
    name: "Techno Stats F Inal",
    rotation: 0,
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        width: 870,
        height: 254,
        mime: "image/png",
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/66315caa-1deb-4df9-af8e-7023e1a4b18c.png"
    },
    grid: {
        dpi: 150,
        offset: {
            x: 435,
            y: 127
        }
    },
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: "",
        style: {
            padding: 8,
            fontFamily: "Roboto",
            fontSize: 24,
            fontWeight: 400,
            textAlign: "CENTER",
            textAlignVertical: "BOTTOM",
            fillColor: "#ffffff",
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeOpacity: 1,
            strokeWidth: 0,
            lineHeight: 1.5
        },
        type: "PLAIN",
        width: "AUTO",
        height: "AUTO"
    },
    textItemType: "LABEL",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3"
}, {
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    scale: {
        x: .735887634471691,
        y: .735887634471691
    },
    position: {
        x: 4862.315164402966,
        y: 655.6595904134177
    },
    lastModified: "2025-08-23T16:36:56.499Z",
    zIndex: 1755967016504,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    id: "793a01ca-0569-4fbc-ae30-8c957da08940",
    name: "Text",
    locked: !1,
    metadata: {},
    rotation: 0,
    type: "TEXT",
    visible: !0,
    layer: "TEXT",
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: "Origin"
            }]
        }],
        plainText: "",
        style: {
            padding: 0,
            fontFamily: "Roboto",
            fontSize: 21,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#b3b3b3",
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeOpacity: 1,
            strokeWidth: 10,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    },
    attachedTo: "6e2e8122-2516-432a-82d5-1f479097a82e"
}, {
    scale: {
        x: .9040286855598817,
        y: .9040286855598817
    },
    position: {
        x: 3892.4639862703657,
        y: 552.298526176823
    },
    lastModified: "2025-08-23T16:36:56.499Z",
    zIndex: 1755967016498,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    id: "f5930416-1949-470f-abfc-01c4e01a1b69",
    name: "Text",
    locked: !1,
    metadata: {},
    rotation: 0,
    type: "TEXT",
    visible: !0,
    layer: "TEXT",
    text: {
        richText: [{
            type: "heading-one",
            children: [{
                text: "45/45"
            }]
        }],
        plainText: "",
        style: {
            padding: 0,
            fontFamily: "Roboto",
            fontSize: 24,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#2abf0c",
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeOpacity: 1,
            strokeWidth: 10,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    },
    attachedTo: "6e2e8122-2516-432a-82d5-1f479097a82e",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3"
}, {
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    scale: {
        x: .6079031627691802,
        y: .6079031627691802
    },
    position: {
        x: 4191.371739652406,
        y: 639.9781695197823
    },
    lastModified: "2025-08-23T16:36:56.499Z",
    zIndex: 1755967016499,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    id: "16ac4642-42dc-44b2-b3ce-8662d2997a52",
    name: "Text",
    locked: !1,
    metadata: {},
    rotation: 0,
    type: "TEXT",
    visible: !0,
    layer: "TEXT",
    text: {
        richText: [{
            type: "heading-one",
            children: [{
                text: "06"
            }]
        }],
        plainText: "",
        style: {
            padding: 0,
            fontFamily: "Roboto",
            fontSize: 36,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#ff9f00",
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeOpacity: 1,
            strokeWidth: 10,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    },
    attachedTo: "6e2e8122-2516-432a-82d5-1f479097a82e"
}, {
    scale: {
        x: .9040286855598817,
        y: .9040286855598817
    },
    position: {
        x: 3951.5052158915405,
        y: 632.2640210325613
    },
    lastModified: "2025-08-23T16:36:56.499Z",
    zIndex: 1755967016500,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    id: "ec515a4b-a040-448f-9aec-b72d5f7a728d",
    name: "Text",
    locked: !1,
    metadata: {},
    rotation: 0,
    type: "TEXT",
    visible: !0,
    layer: "TEXT",
    text: {
        richText: [{
            type: "heading-one",
            children: [{
                text: "45/45"
            }]
        }],
        plainText: "",
        style: {
            padding: 0,
            fontFamily: "Roboto",
            fontSize: 24,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#884dff",
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeOpacity: 1,
            strokeWidth: 10,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    },
    attachedTo: "6e2e8122-2516-432a-82d5-1f479097a82e",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3"
}, {
    scale: {
        x: 1.5587715158855706,
        y: 1.5587715158855706
    },
    position: {
        x: 4017.1507932464733,
        y: 711.5155139746737
    },
    lastModified: "2025-08-23T16:36:56.499Z",
    zIndex: 1755967016506,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    id: "1d21d122-41f3-40a3-863b-20807eef807e",
    name: "Text",
    locked: !1,
    metadata: {},
    rotation: 0,
    type: "TEXT",
    visible: !0,
    layer: "TEXT",
    text: {
        richText: [{
            type: "heading-one",
            children: [{
                text: "10"
            }]
        }],
        plainText: "",
        style: {
            padding: 0,
            fontFamily: "Roboto",
            fontSize: 13,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#ff4d4d",
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeOpacity: 1,
            strokeWidth: 6,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    },
    attachedTo: "6e2e8122-2516-432a-82d5-1f479097a82e",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3"
}, {
    scale: {
        x: 1.1207047067255664,
        y: 1.1207047067255664
    },
    position: {
        x: 4420.483153295152,
        y: 473.4635597643096
    },
    lastModified: "2025-08-23T16:36:56.499Z",
    zIndex: 1755967016505,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    id: "72088d5e-26eb-436d-b344-8256d816fd38",
    name: "Text",
    locked: !1,
    metadata: {},
    rotation: 0,
    type: "TEXT",
    visible: !0,
    layer: "TEXT",
    text: {
        richText: [{
            type: "heading-one",
            children: [{
                text: " 3"
            }]
        }],
        plainText: "",
        style: {
            padding: 0,
            fontFamily: "Roboto",
            fontSize: 36,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#44e0f1",
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeOpacity: 1,
            strokeWidth: 10,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    },
    attachedTo: "6e2e8122-2516-432a-82d5-1f479097a82e",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3"
}, {
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    scale: {
        x: .735887634471691,
        y: .735887634471691
    },
    position: {
        x: 5026.3846845315875,
        y: 695.5927076768153
    },
    lastModified: "2025-08-23T16:36:56.499Z",
    zIndex: 1755967016501,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    id: "11db41e5-4bba-47b8-9022-cb4569edf9b0",
    name: "Text",
    locked: !1,
    metadata: {},
    rotation: 0,
    type: "TEXT",
    visible: !0,
    layer: "TEXT",
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: "THEME"
            }]
        }],
        plainText: "",
        style: {
            padding: 0,
            fontFamily: "Roboto",
            fontSize: 21,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#b3b3b3",
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeOpacity: 1,
            strokeWidth: 10,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    },
    attachedTo: "6e2e8122-2516-432a-82d5-1f479097a82e"
}, {
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    scale: {
        x: .735887634471691,
        y: .735887634471691
    },
    position: {
        x: 4861.801071001406,
        y: 611.3218960516178
    },
    lastModified: "2025-08-23T16:36:56.499Z",
    zIndex: 1755967016502,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    id: "7c957c23-9168-4d95-927a-94928ac70da9",
    name: "Text",
    locked: !1,
    metadata: {},
    rotation: 0,
    type: "TEXT",
    visible: !0,
    layer: "TEXT",
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: "Identity"
            }]
        }],
        plainText: "",
        style: {
            padding: 0,
            fontFamily: "Roboto",
            fontSize: 21,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#b3b3b3",
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeOpacity: 1,
            strokeWidth: 10,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    },
    attachedTo: "6e2e8122-2516-432a-82d5-1f479097a82e"
}, {
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    scale: {
        x: .9186322767742867,
        y: .9186322767742867
    },
    position: {
        x: 4973.119151569101,
        y: 563.9020531396858
    },
    lastModified: "2025-08-23T16:36:56.499Z",
    zIndex: 1755967016503,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    id: "9551a7f7-4651-4fbb-bdb8-7f0cbb9a904a",
    name: "Text",
    locked: !1,
    metadata: {},
    rotation: 0,
    type: "TEXT",
    visible: !0,
    layer: "TEXT",
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: "Name"
            }]
        }],
        plainText: "",
        style: {
            padding: 0,
            fontFamily: "Roboto",
            fontSize: 36,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#b3b3b3",
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeOpacity: 1,
            strokeWidth: 10,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    },
    attachedTo: "6e2e8122-2516-432a-82d5-1f479097a82e"
}, {
    scale: {
        x: 1.5587715158855706,
        y: 1.5587715158855706
    },
    position: {
        x: 4288.578671419245,
        y: 711.0395930131872
    },
    lastModified: "2025-08-23T16:36:56.499Z",
    zIndex: 1755967016507,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    id: "8c1320b6-e3b1-441a-8c73-f48aad1d34b2",
    name: "Text",
    locked: !1,
    metadata: {},
    rotation: 0,
    type: "TEXT",
    visible: !0,
    layer: "TEXT",
    text: {
        richText: [{
            type: "heading-one",
            children: [{
                text: "10"
            }]
        }],
        plainText: "",
        style: {
            padding: 0,
            fontFamily: "Roboto",
            fontSize: 13,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#B07126",
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeOpacity: 1,
            strokeWidth: 6,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    },
    attachedTo: "6e2e8122-2516-432a-82d5-1f479097a82e",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3"
}, {
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    layer: "CHARACTER",
    scale: {
        y: 1.8820346342895062,
        x: 1.8820346342895062
    },
    lastModified: "2025-08-23T16:36:48.486Z",
    zIndex: 1755967008483,
    position: {
        x: 4383.510557949328,
        y: 2214.351200614727
    },
    type: "IMAGE",
    id: "212d2dcf-4c01-4017-a81f-65c3592a5bad",
    name: "Techno Stats F Inal",
    rotation: 0,
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        width: 870,
        height: 254,
        mime: "image/png",
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/66315caa-1deb-4df9-af8e-7023e1a4b18c.png"
    },
    grid: {
        dpi: 150,
        offset: {
            x: 435,
            y: 127
        }
    },
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: "",
        style: {
            padding: 8,
            fontFamily: "Roboto",
            fontSize: 24,
            fontWeight: 400,
            textAlign: "CENTER",
            textAlignVertical: "BOTTOM",
            fillColor: "#ffffff",
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeOpacity: 1,
            strokeWidth: 0,
            lineHeight: 1.5
        },
        type: "PLAIN",
        width: "AUTO",
        height: "AUTO"
    },
    textItemType: "LABEL"
}, {
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    scale: {
        y: .735887634471691,
        x: .735887634471691
    },
    position: {
        x: 4859.664554762739,
        y: 2208.044310392007
    },
    lastModified: "2025-08-23T16:36:48.486Z",
    zIndex: 1755967008490,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    id: "c814cc34-294f-478a-bfe8-04f5c3b9266f",
    name: "Text",
    locked: !1,
    metadata: {},
    rotation: 0,
    type: "TEXT",
    visible: !0,
    layer: "TEXT",
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: "Origin"
            }]
        }],
        plainText: "",
        style: {
            padding: 0,
            fontFamily: "Roboto",
            fontSize: 21,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#b3b3b3",
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeOpacity: 1,
            strokeWidth: 10,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    },
    attachedTo: "212d2dcf-4c01-4017-a81f-65c3592a5bad"
}, {
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    scale: {
        y: .9040286855598817,
        x: .9040286855598817
    },
    position: {
        x: 3889.813376630185,
        y: 2104.683246155396
    },
    lastModified: "2025-08-23T16:36:48.486Z",
    zIndex: 1755967008484,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    id: "de88e594-39b4-4467-9df2-43b027210687",
    name: "Text",
    locked: !1,
    metadata: {},
    rotation: 0,
    type: "TEXT",
    visible: !0,
    layer: "TEXT",
    text: {
        richText: [{
            type: "heading-one",
            children: [{
                text: "45/45"
            }]
        }],
        plainText: "",
        style: {
            padding: 0,
            fontFamily: "Roboto",
            fontSize: 24,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#2abf0c",
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeOpacity: 1,
            strokeWidth: 10,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    },
    attachedTo: "212d2dcf-4c01-4017-a81f-65c3592a5bad"
}, {
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    scale: {
        y: .6079031627691802,
        x: .6079031627691802
    },
    position: {
        x: 4188.721130012238,
        y: 2192.3628894983613
    },
    lastModified: "2025-08-23T16:36:48.486Z",
    zIndex: 1755967008485,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    id: "992dacd1-590b-4f40-86fe-7ac646411dc5",
    name: "Text",
    locked: !1,
    metadata: {},
    rotation: 0,
    type: "TEXT",
    visible: !0,
    layer: "TEXT",
    text: {
        richText: [{
            type: "heading-one",
            children: [{
                text: "06"
            }]
        }],
        plainText: "",
        style: {
            padding: 0,
            fontFamily: "Roboto",
            fontSize: 36,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#ff9f00",
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeOpacity: 1,
            strokeWidth: 10,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    },
    attachedTo: "212d2dcf-4c01-4017-a81f-65c3592a5bad"
}, {
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    scale: {
        y: .9040286855598817,
        x: .9040286855598817
    },
    position: {
        x: 3948.854606251373,
        y: 2184.648741011143
    },
    lastModified: "2025-08-23T16:36:48.486Z",
    zIndex: 1755967008486,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    id: "6e0285ff-3d13-43d1-a5d1-651eef965db5",
    name: "Text",
    locked: !1,
    metadata: {},
    rotation: 0,
    type: "TEXT",
    visible: !0,
    layer: "TEXT",
    text: {
        richText: [{
            type: "heading-one",
            children: [{
                text: "45/45"
            }]
        }],
        plainText: "",
        style: {
            padding: 0,
            fontFamily: "Roboto",
            fontSize: 24,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#884dff",
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeOpacity: 1,
            strokeWidth: 10,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    },
    attachedTo: "212d2dcf-4c01-4017-a81f-65c3592a5bad"
}, {
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    scale: {
        y: 1.5587715158855706,
        x: 1.5587715158855706
    },
    position: {
        x: 4014.5001836063125,
        y: 2263.900233953271
    },
    lastModified: "2025-08-23T16:36:48.486Z",
    zIndex: 1755967008492,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    id: "59e21a7f-6e79-4692-a424-fc5077ade4eb",
    name: "Text",
    locked: !1,
    metadata: {},
    rotation: 0,
    type: "TEXT",
    visible: !0,
    layer: "TEXT",
    text: {
        richText: [{
            type: "heading-one",
            children: [{
                text: "10"
            }]
        }],
        plainText: "",
        style: {
            padding: 0,
            fontFamily: "Roboto",
            fontSize: 13,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#ff4d4d",
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeOpacity: 1,
            strokeWidth: 6,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    },
    attachedTo: "212d2dcf-4c01-4017-a81f-65c3592a5bad"
}, {
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    scale: {
        y: 1.1207047067255664,
        x: 1.1207047067255664
    },
    position: {
        x: 4417.8325436549685,
        y: 2025.848279742886
    },
    lastModified: "2025-08-23T16:36:48.486Z",
    zIndex: 1755967008491,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    id: "8b44a97b-19ef-496c-9a67-2d062c857272",
    name: "Text",
    locked: !1,
    metadata: {},
    rotation: 0,
    type: "TEXT",
    visible: !0,
    layer: "TEXT",
    text: {
        richText: [{
            type: "heading-one",
            children: [{
                text: " 3"
            }]
        }],
        plainText: "",
        style: {
            padding: 0,
            fontFamily: "Roboto",
            fontSize: 36,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#44e0f1",
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeOpacity: 1,
            strokeWidth: 10,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    },
    attachedTo: "212d2dcf-4c01-4017-a81f-65c3592a5bad"
}, {
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    scale: {
        y: .735887634471691,
        x: .735887634471691
    },
    position: {
        x: 5023.734074891406,
        y: 2247.977427655405
    },
    lastModified: "2025-08-23T16:36:48.486Z",
    zIndex: 1755967008487,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    id: "eb213d07-3401-49e2-b32e-071eb352866c",
    name: "Text",
    locked: !1,
    metadata: {},
    rotation: 0,
    type: "TEXT",
    visible: !0,
    layer: "TEXT",
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: "Theme"
            }]
        }],
        plainText: "",
        style: {
            padding: 0,
            fontFamily: "Roboto",
            fontSize: 21,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#b3b3b3",
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeOpacity: 1,
            strokeWidth: 10,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    },
    attachedTo: "212d2dcf-4c01-4017-a81f-65c3592a5bad"
}, {
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    scale: {
        y: .735887634471691,
        x: .735887634471691
    },
    position: {
        x: 4859.150461361222,
        y: 2163.7066160302074
    },
    lastModified: "2025-08-23T16:36:48.486Z",
    zIndex: 1755967008488,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    id: "513881d2-d073-48cb-b033-4cd85b7be9b4",
    name: "Text",
    locked: !1,
    metadata: {},
    rotation: 0,
    type: "TEXT",
    visible: !0,
    layer: "TEXT",
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: "Identity"
            }]
        }],
        plainText: "",
        style: {
            padding: 0,
            fontFamily: "Roboto",
            fontSize: 21,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#b3b3b3",
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeOpacity: 1,
            strokeWidth: 10,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    },
    attachedTo: "212d2dcf-4c01-4017-a81f-65c3592a5bad"
}, {
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    scale: {
        y: .9186322767742867,
        x: .9186322767742867
    },
    position: {
        x: 4970.468541928919,
        y: 2116.286773118268
    },
    lastModified: "2025-08-23T16:36:48.486Z",
    zIndex: 1755967008489,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    id: "c9c387e1-82b5-455f-86fe-2d772c2a752f",
    name: "Text",
    locked: !1,
    metadata: {},
    rotation: 0,
    type: "TEXT",
    visible: !0,
    layer: "TEXT",
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: "Name"
            }]
        }],
        plainText: "",
        style: {
            padding: 0,
            fontFamily: "Roboto",
            fontSize: 36,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#b3b3b3",
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeOpacity: 1,
            strokeWidth: 10,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    },
    attachedTo: "212d2dcf-4c01-4017-a81f-65c3592a5bad"
}, {
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    scale: {
        y: 1.5587715158855706,
        x: 1.5587715158855706
    },
    position: {
        x: 4285.928061779084,
        y: 2263.4243129917804
    },
    lastModified: "2025-08-23T16:36:48.486Z",
    zIndex: 1755967008493,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    id: "18f488a4-12be-4987-b65d-4a0236420cff",
    name: "Text",
    locked: !1,
    metadata: {},
    rotation: 0,
    type: "TEXT",
    visible: !0,
    layer: "TEXT",
    text: {
        richText: [{
            type: "heading-one",
            children: [{
                text: "10"
            }]
        }],
        plainText: "",
        style: {
            padding: 0,
            fontFamily: "Roboto",
            fontSize: 13,
            fontWeight: 400,
            textAlign: "LEFT",
            textAlignVertical: "TOP",
            fillColor: "#B07126",
            fillOpacity: 1,
            strokeColor: "#222222",
            strokeOpacity: 1,
            strokeWidth: 6,
            lineHeight: 1.5
        },
        type: "RICH",
        width: "AUTO",
        height: "AUTO"
    },
    attachedTo: "212d2dcf-4c01-4017-a81f-65c3592a5bad"
}, {
    type: "IMAGE",
    id: "8b2746d1-ecd4-485f-8c75-bdcc5bffcf36",
    name: "Resolved",
    position: {
        x: 2004.6986436029479,
        y: 2208.586653030202
    },
    rotation: 0,
    scale: {
        x: 1.7683623476914434,
        y: 1.7683623476914434
    },
    visible: !0,
    locked: !1,
    createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    zIndex: 1756119979569,
    lastModified: "2025-08-25T11:06:19.571Z",
    lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
    metadata: {},
    image: {
        width: 1285,
        height: 239,
        mime: "image/png",
        url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/08be2411-82fb-473d-80c7-42b996b56ee8.png"
    },
    grid: {
        dpi: 150,
        offset: {
            x: 642.5,
            y: 119.5
        }
    },
    text: {
        richText: [{
            type: "paragraph",
            children: [{
                text: ""
            }]
        }],
        plainText: "",
        style: {
            padding: 8,
            fontFamily: "Roboto",
            fontSize: 24,
            fontWeight: 400,
            textAlign: "CENTER",
            textAlignVertical: "BOTTOM",
            fillColor: "#ffffff",
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeOpacity: 1,
            strokeWidth: 0,
            lineHeight: 1.5
        },
        type: "PLAIN",
        width: "AUTO",
        height: "AUTO"
    },
    textItemType: "LABEL",
    layer: "MOUNT"
}]
  , yi = ({debuff: e, stat: t})=>d.jsx("span", {
    className: "outline",
    style: {
        display: "inline-block",
        padding: 4,
        color: e ? "red" : "white"
    },
    children: t
})
  , sg = ({data: e, index: t, role: n, editMode: i, setTab: r, setDiceOne: a, setDiceTwo: o, setHealthModifier: l, setMindModifier: s, setBonus: c, setPlayer: f, sendCharacter: u, saveCharacterLocally: y, removePlayer: T})=>e.isGMPlayer ? n !== "GM" ? null : d.jsxs("div", {
    children: [d.jsxs("div", {
        style: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 5,
            marginTop: 5
        },
        children: [d.jsx(D, {
            children: "Name: "
        }), d.jsx("div", {
            className: "outline",
            style: {
                width: 150,
                textAlign: "center",
                fontSize: 12,
                marginRight: 4,
                color: "orange",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "inline-block",
                paddingLeft: 4,
                minHeight: 18
            },
            children: e.traits ? e.traits.name : ""
        }), d.jsxs("div", {
            style: {
                display: "flex",
                flexDirection: "row",
                width: 150,
                gap: 4,
                justifyContent: "center"
            },
            children: [d.jsxs("span", {
                className: "outline",
                style: {
                    marginRight: 4,
                    textAlign: "center"
                },
                children: ["DMG:", d.jsx("div", {
                    className: "outline",
                    style: {
                        color: "red"
                    },
                    children: e.stats ? e.stats.currentHP : 0
                })]
            }), d.jsxs("span", {
                className: "outline",
                style: {
                    marginRight: 4,
                    textAlign: "center"
                },
                children: ["SPENT:", d.jsx("div", {
                    className: "outline",
                    style: {
                        color: "lightblue"
                    },
                    children: e.stats ? e.stats.currentMP : 0
                })]
            }), d.jsxs("span", {
                className: "outline",
                style: {
                    marginRight: 4,
                    textAlign: "center"
                },
                children: ["DEF:", d.jsx("div", {
                    className: "outline",
                    style: {
                        color: "violet"
                    },
                    children: (e.stats ? typeof e.stats.defense == "number" ? e.stats.defense : parseInt(String(e.stats.defense)) : 0) + ue(e.attributes.currentdex)
                })]
            }), d.jsxs("span", {
                className: "outline",
                style: {
                    marginRight: 4,
                    textAlign: "center"
                },
                children: ["M.DEF:", d.jsx("div", {
                    className: "outline",
                    style: {
                        color: "cyan"
                    },
                    children: (e.stats ? typeof e.stats.mDefense == "number" ? e.stats.mDefense : parseInt(String(e.stats.mDefense)) : 0) + ue(e.attributes.currentins)
                })]
            })]
        }), d.jsx("button", {
            className: "button",
            style: {
                marginLeft: "auto",
                width: 70,
                padding: 5,
                marginRight: 4
            },
            onClick: async()=>{
                r("actions"),
                a(""),
                o(""),
                l(0),
                s(0),
                c(0),
                f(e),
                u(e)
            }
            ,
            children: "Open"
        }), d.jsx("button", {
            className: "button",
            style: {
                width: 40,
                padding: 5,
                marginRight: 4,
                float: "right"
            },
            onClick: ()=>{
                y(e.id)
            }
            ,
            children: "Save"
        }), d.jsx("button", {
            className: "button",
            style: {
                fontWeight: "bolder",
                width: 25,
                color: "darkred"
            },
            onClick: ()=>{
                T(e.id)
            }
            ,
            children: "✖"
        })]
    }), d.jsx("hr", {})]
}, t) : d.jsxs("div", {
    children: [d.jsxs("div", {
        style: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 5,
            marginTop: 5
        },
        children: [d.jsx("div", {
            style: {
                width: 42
            },
            children: d.jsx(D, {
                children: "Name: "
            })
        }), d.jsx("div", {
            className: "outline",
            style: {
                width: 150,
                textAlign: "center",
                borderBottom: "1px solid #222",
                fontSize: 12,
                marginRight: 4,
                color: "orange",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "inline-block",
                paddingLeft: 4,
                minHeight: 18
            },
            children: e.traits.name
        }), d.jsx(D, {
            children: "FP: "
        }), d.jsx("input", {
            className: "input-stat",
            type: "number",
            style: {
                width: 20,
                color: "white"
            },
            value: e.stats.fabula,
            readOnly: !0
        }), d.jsx(D, {
            children: "HP:"
        }), d.jsx("input", {
            className: "input-stat",
            style: {
                width: 20,
                color: "Red"
            },
            readOnly: !0,
            value: e.stats.currentHP
        }), d.jsx(D, {
            children: "MP: "
        }), d.jsx("input", {
            className: "input-stat",
            style: {
                width: 20,
                color: "LightBlue"
            },
            readOnly: !0,
            value: e.stats.currentMP
        }), d.jsx(D, {
            children: "IP: "
        }), d.jsx("input", {
            className: "input-stat",
            style: {
                width: 20,
                color: "Orange"
            },
            readOnly: !0,
            value: e.stats.currentIP
        }), d.jsx(D, {
            children: "DEF: "
        }), d.jsx("input", {
            className: "input-stat",
            type: "number",
            style: {
                width: 20,
                color: "violet"
            },
            value: e.stats.defense,
            readOnly: !0
        }), d.jsx(D, {
            children: "M.DEF: "
        }), d.jsx("input", {
            className: "input-stat",
            type: "number",
            style: {
                width: 20,
                color: "cyan"
            },
            value: e.stats.mDefense,
            readOnly: !0
        })]
    }), d.jsx(D, {
        children: "Debuff:"
    }), d.jsx(yi, {
        debuff: e.debuff.slow,
        stat: "slow"
    }), d.jsx(yi, {
        debuff: e.debuff.dazed,
        stat: "dazed"
    }), d.jsx(yi, {
        debuff: e.debuff.weak,
        stat: "weak"
    }), d.jsx(yi, {
        debuff: e.debuff.shaken,
        stat: "shaken"
    }), d.jsx(yi, {
        debuff: e.debuff.enraged,
        stat: "enraged"
    }), d.jsx(yi, {
        debuff: e.debuff.poisoned,
        stat: "poisoned"
    }), i && d.jsx("button", {
        className: "button",
        style: {
            fontWeight: "bolder",
            width: 25,
            color: "darkred",
            float: "right"
        },
        onClick: ()=>{
            T(e.id)
        }
        ,
        children: "✖"
    }), d.jsx("button", {
        className: "button",
        style: {
            width: 40,
            padding: 5,
            marginRight: 4,
            float: "right"
        },
        onClick: ()=>{
            y(e.id)
        }
        ,
        children: "Save"
    }), i && d.jsx("button", {
        className: "button",
        style: {
            width: 40,
            padding: 5,
            marginRight: 4,
            float: "right"
        },
        onClick: async()=>{
            r("link"),
            f(e)
        }
        ,
        children: "Link"
    }), d.jsx("button", {
        className: "button",
        style: {
            marginLeft: 4,
            width: 70,
            padding: 5,
            marginRight: 4,
            float: "right"
        },
        onClick: async()=>{
            r("stats"),
            a(""),
            o(""),
            l(0),
            s(0),
            c(0),
            f(e),
            u(e)
        }
        ,
        children: "Open"
    }), d.jsx("hr", {})]
}, t)
  , dg = ({playerList: e, role: t, editMode: n, setEditMode: i, theme: r, setTheme: a, changeTheme: o, showMessage: l, addPlayer: s, setTab: c, setDiceOne: f, setDiceTwo: u, setHealthModifier: y, setMindModifier: T, setBonus: v, setPlayer: E, sendCharacter: A, saveCharacterLocally: h, removePlayer: p})=>d.jsxs("div", {
    style: {
        marginTop: 4
    },
    children: [d.jsxs("div", {
        children: [d.jsx("span", {
            style: {
                fontSize: 13,
                color: "white"
            },
            className: "outline",
            children: "Characters:"
        }), d.jsx("button", {
            className: "button",
            style: {
                fontWeight: "bolder",
                width: 60,
                float: "right"
            },
            onClick: ()=>{
                l(n ? "Edit mode disabled." : "Edit mode enabled."),
                i(!n)
            }
            ,
            children: n ? "Done Edit" : "Edit"
        }), n && d.jsx("button", {
            className: "button",
            style: {
                fontWeight: "bolder",
                width: 80,
                float: "right",
                marginRight: 4
            },
            onClick: ()=>{
                l("Refresh the page to reflect the change on other fabula extensions"),
                o(r === "fantasy" ? "techno" : "fantasy"),
                a(r === "fantasy" ? "techno" : "fantasy")
            }
            ,
            children: "Change Theme"
        }), !n && d.jsx("button", {
            className: "button",
            style: {
                fontWeight: "bolder",
                width: 80,
                float: "right",
                marginRight: 4
            },
            onClick: ()=>{
                s()
            }
            ,
            children: "Add Character"
        }), n && d.jsx("button", {
            className: "button",
            style: {
                fontWeight: "bolder",
                width: 110,
                float: "right",
                marginRight: 4
            },
            onClick: async()=>{
                (await W.scene.items.getItems(O=>!0)).length > 0 ? l("Need empty scene in order to add game layout!") : og.forEach((O,C)=>{
                    setTimeout(async()=>{
                        await W.scene.items.addItems([O])
                    }
                    , 250 * C)
                }
                )
            }
            ,
            children: "Create Fantasy Layout"
        }), n && d.jsx("button", {
            className: "button",
            style: {
                fontWeight: "bolder",
                width: 110,
                float: "right",
                marginRight: 4
            },
            onClick: async()=>{
                (await W.scene.items.getItems(O=>!0)).length > 0 ? l("Need empty scene in order to add game layout!") : lg.forEach((O,C)=>{
                    setTimeout(async()=>{
                        await W.scene.items.addItems([O])
                    }
                    , 250 * C)
                }
                )
            }
            ,
            children: "Create Techno Layout"
        })]
    }), d.jsx("hr", {}), e.filter(m=>!m.isGMPlayer).sort((m,O)=>m.id - O.id).map((m,O)=>d.jsx(sg, {
        data: m,
        index: O,
        role: t,
        editMode: n,
        setTab: c,
        setDiceOne: f,
        setDiceTwo: u,
        setHealthModifier: y,
        setMindModifier: T,
        setBonus: v,
        setPlayer: E,
        sendCharacter: A,
        saveCharacterLocally: h,
        removePlayer: p
    }, m.id))]
})
  , fg = ({playerList: e, role: t, uploaderRef: n, addGMCharacter: i, showMessage: r, ImportFultimatorJSON: a, readFile: o, setTab: l, setDiceOne: s, setDiceTwo: c, setHealthModifier: f, setMindModifier: u, setBonus: y, setEditMode: T, setPlayer: v, sendCharacter: E, saveCharacterLocally: A, removePlayer: h})=>{
    const p = (m,O)=>t !== "GM" ? null : d.jsxs("div", {
        children: [d.jsxs("div", {
            style: {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 5,
                marginTop: 5
            },
            children: [d.jsx(D, {
                children: "Name: "
            }), d.jsx("div", {
                className: "outline",
                style: {
                    width: 150,
                    textAlign: "center",
                    fontSize: 12,
                    marginRight: 4,
                    color: "orange",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "inline-block",
                    paddingLeft: 4,
                    minHeight: 18
                },
                children: m.traits ? m.traits.name : ""
            }), d.jsxs("div", {
                style: {
                    display: "flex",
                    flexDirection: "row",
                    width: 150,
                    gap: 4,
                    justifyContent: "center"
                },
                children: [d.jsxs("span", {
                    className: "outline",
                    style: {
                        marginRight: 4,
                        textAlign: "center"
                    },
                    children: ["DMG:", d.jsx("div", {
                        className: "outline",
                        style: {
                            color: "red"
                        },
                        children: m.stats ? m.stats.currentHP : 0
                    })]
                }), d.jsxs("span", {
                    className: "outline",
                    style: {
                        marginRight: 4,
                        textAlign: "center"
                    },
                    children: ["SPENT:", d.jsx("div", {
                        className: "outline",
                        style: {
                            color: "lightblue"
                        },
                        children: m.stats ? m.stats.currentMP : 0
                    })]
                }), d.jsxs("span", {
                    className: "outline",
                    style: {
                        marginRight: 4,
                        textAlign: "center"
                    },
                    children: ["DEF:", d.jsx("div", {
                        className: "outline",
                        style: {
                            color: "violet"
                        },
                        children: m.stats ? m.stats.defense : 0
                    })]
                }), d.jsxs("span", {
                    className: "outline",
                    style: {
                        marginRight: 4,
                        textAlign: "center"
                    },
                    children: ["M.DEF:", d.jsx("div", {
                        className: "outline",
                        style: {
                            color: "cyan"
                        },
                        children: m.stats ? m.stats.mDefense : 0
                    })]
                })]
            }), d.jsx("button", {
                className: "button",
                style: {
                    marginLeft: "auto",
                    width: 70,
                    padding: 5,
                    marginRight: 4
                },
                onClick: async()=>{
                    l("actions"),
                    s(""),
                    c(""),
                    f(0),
                    u(0),
                    y(0),
                    T(!1),
                    v(m),
                    E(m)
                }
                ,
                children: "Open"
            }), d.jsx("button", {
                className: "button",
                style: {
                    width: 40,
                    padding: 5,
                    marginRight: 4,
                    float: "right"
                },
                onClick: ()=>{
                    A(m.id)
                }
                ,
                children: "Save"
            }), d.jsx("button", {
                className: "button",
                style: {
                    fontWeight: "bolder",
                    width: 25,
                    color: "darkred"
                },
                onClick: ()=>{
                    h(m.id)
                }
                ,
                children: "✖"
            })]
        }), d.jsx("hr", {})]
    }, O);
    return d.jsxs("div", {
        style: {
            marginTop: 30
        },
        children: [d.jsxs("div", {
            children: [d.jsx("input", {
                type: "file",
                ref: n,
                multiple: !1,
                accept: ".json",
                style: {
                    display: " none"
                },
                onChange: async({target: m})=>{
                    var C;
                    const O = (C = m.files) == null ? void 0 : C[0];
                    O && a(await o(O))
                }
            }), d.jsx("span", {
                style: {
                    fontSize: 13,
                    color: "white"
                },
                className: "outline",
                children: "Adversaries:"
            }), d.jsx("button", {
                type: "button",
                className: "button",
                style: {
                    fontWeight: "bolder",
                    width: 60,
                    float: "right",
                    marginRight: 4
                },
                onClick: ()=>{
                    W.popover.open({
                        id: "fultimator/popover",
                        url: "https://fabula-ultima-helper.web.app/",
                        height: 700,
                        width: 1200,
                        anchorOrigin: {
                            horizontal: "LEFT",
                            vertical: "TOP"
                        }
                    })
                }
                ,
                children: "Fultimator"
            }), d.jsx("button", {
                type: "button",
                className: "button",
                style: {
                    fontWeight: "bolder",
                    width: 140,
                    float: "right",
                    marginRight: 4
                },
                onClick: ()=>{
                    n.current && n.current.click()
                }
                ,
                children: "Import Fultimator NPC json"
            }), t === "GM" && d.jsx("button", {
                className: "button",
                style: {
                    fontWeight: "bolder",
                    width: 80,
                    float: "right",
                    marginRight: 4
                },
                onClick: ()=>{
                    i()
                }
                ,
                children: "Add Adversary"
            })]
        }), d.jsx("hr", {}), e.filter(m=>m.isGMPlayer).sort((m,O)=>{
            const C = m.traits && m.traits.name ? m.traits.name : ""
              , x = O.traits && O.traits.name ? O.traits.name : "";
            return C.localeCompare(x)
        }
        ).map((m,O)=>p(m, O))]
    })
}
  , cg = ({data: e, index: t, loadLocalCharacter: n, setTab: i, setExportData: r, setCopyText: a, removeCharacterLocally: o})=>d.jsxs("div", {
    children: [d.jsxs("div", {
        style: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 5,
            marginTop: 5
        },
        children: [d.jsx(D, {
            children: "Name: "
        }), d.jsx("span", {
            className: "outline",
            style: {
                display: "inline-block",
                fontSize: 12,
                color: "orange",
                width: 112,
                textAlign: "center",
                padding: 4,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis"
            },
            children: e.traits ? e.traits.name : ""
        }), d.jsx("button", {
            className: "button",
            style: {
                width: 60,
                padding: 5,
                marginRight: 4
            },
            onClick: ()=>{
                n(e)
            }
            ,
            children: "Load"
        }), d.jsx("button", {
            className: "button",
            style: {
                width: 40,
                padding: 5,
                marginRight: 4,
                marginLeft: "auto"
            },
            onClick: ()=>{
                i("export"),
                r(JSON.stringify(e)),
                a(!1)
            }
            ,
            children: "Export"
        }), d.jsx("button", {
            className: "button",
            style: {
                fontWeight: "bolder",
                width: 25,
                color: "darkred"
            },
            onClick: ()=>{
                o(e.id)
            }
            ,
            children: "✖"
        })]
    }), d.jsx("hr", {})]
}, t)
  , ug = ({savedPlayerList: e, loadLocalCharacter: t, setTab: n, setExportData: i, setCopyText: r, removeCharacterLocally: a})=>e && e.length ? d.jsx(d.Fragment, {
    children: e.filter(o=>{
        if (o)
            return !o.isGMPlayer
    }
    ).sort((o,l)=>{
        const s = o.traits && o.traits.name ? o.traits.name : ""
          , c = l.traits && l.traits.name ? l.traits.name : "";
        return s.localeCompare(c)
    }
    ).map((o,l)=>d.jsx(cg, {
        data: o,
        index: l,
        loadLocalCharacter: t,
        setTab: n,
        setExportData: i,
        setCopyText: r,
        removeCharacterLocally: a
    }, o.id))
}) : null
  , kc = ({data: e, index: t, duplicateGMCharacter: n, removeCharacterLocally: i})=>d.jsxs("div", {
    children: [d.jsxs("div", {
        style: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 5,
            marginTop: 5
        },
        children: [d.jsx(D, {
            children: "Name: "
        }), d.jsx("span", {
            className: "outline",
            style: {
                display: "inline-block",
                fontSize: 12,
                color: "orange",
                width: 112,
                textAlign: "center",
                padding: 4,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis"
            },
            children: e.traits ? e.traits.name : ""
        }), d.jsx("button", {
            className: "button",
            style: {
                width: 60,
                padding: 5,
                marginRight: 4
            },
            onClick: async()=>{
                n({
                    ...e
                })
            }
            ,
            children: "Add"
        }), d.jsx("button", {
            className: "button",
            style: {
                fontWeight: "bolder",
                width: 25,
                color: "darkred"
            },
            onClick: ()=>{
                i(e.id)
            }
            ,
            children: "✖"
        })]
    }), d.jsx("hr", {})]
}, t)
  , hg = ({savedPlayerList: e, duplicateGMCharacter: t, removeCharacterLocally: n})=>e && e.length ? d.jsxs("div", {
    style: {
        display: "flex",
        columnGap: 6
    },
    children: [d.jsx("div", {
        children: e.filter(i=>{
            if (i)
                return i.isGMPlayer
        }
        ).sort((i,r)=>{
            const a = i.traits && i.traits.name ? i.traits.name : ""
              , o = r.traits && r.traits.name ? r.traits.name : "";
            return a.localeCompare(o)
        }
        ).map((i,r)=>r % 2 === 0 ? d.jsx(kc, {
            data: i,
            index: r,
            duplicateGMCharacter: t,
            removeCharacterLocally: n
        }, i.id) : null)
    }), d.jsx("div", {
        children: e.filter(i=>{
            if (i)
                return i.isGMPlayer
        }
        ).sort((i,r)=>{
            const a = i.traits && i.traits.name ? i.traits.name : ""
              , o = r.traits && r.traits.name ? r.traits.name : "";
            return a.localeCompare(o)
        }
        ).map((i,r)=>r % 2 === 1 ? d.jsx(kc, {
            data: i,
            index: r,
            duplicateGMCharacter: t,
            removeCharacterLocally: n
        }, i.id) : null)
    })]
}) : null
  , pg = ({tab: e, role: t, exportData: n, importData: i, copyText: r, setCopyText: a, setImportData: o, importCharacter: l, setPlayer: s, setTab: c, setExportData: f, playerList: u, editMode: y, setEditMode: T, theme: v, setTheme: E, changeTheme: A, showMessage: h, addPlayer: p, setDiceOne: m, setDiceTwo: O, setHealthModifier: C, setMindModifier: x, setBonus: S, sendCharacter: _, saveCharacterLocally: B, removePlayer: G, uploaderRef: ne, addGMCharacter: ye, ImportFultimatorJSON: pe, readFile: Be, savedPlayerList: dt, loadLocalCharacter: ft, removeCharacterLocally: se, duplicateGMCharacter: j})=>d.jsx(d.Fragment, {
    children: e === "export" ? d.jsx(rg, {
        exportData: n,
        copyText: r,
        setCopyText: a,
        setPlayer: s,
        setTab: c
    }) : e === "import" ? d.jsx(ag, {
        importData: i,
        setImportData: o,
        importCharacter: l,
        setPlayer: s,
        setTab: c
    }) : d.jsxs("div", {
        children: [d.jsx(dg, {
            playerList: u,
            role: t,
            editMode: y,
            setEditMode: T,
            theme: v,
            setTheme: E,
            changeTheme: A,
            showMessage: h,
            addPlayer: p,
            setTab: c,
            setDiceOne: m,
            setDiceTwo: O,
            setHealthModifier: C,
            setMindModifier: x,
            setBonus: S,
            setPlayer: s,
            sendCharacter: _,
            saveCharacterLocally: B,
            removePlayer: G
        }), t === "GM" && d.jsxs(d.Fragment, {
            children: [d.jsx(fg, {
                playerList: u,
                role: t,
                uploaderRef: ne,
                addGMCharacter: ye,
                showMessage: h,
                ImportFultimatorJSON: pe,
                readFile: Be,
                setTab: c,
                setDiceOne: m,
                setDiceTwo: O,
                setHealthModifier: C,
                setMindModifier: x,
                setBonus: S,
                setEditMode: T,
                setPlayer: s,
                sendCharacter: _,
                saveCharacterLocally: B,
                removePlayer: G
            }), d.jsx("div", {
                style: {
                    marginTop: 20
                },
                children: d.jsx("span", {
                    style: {
                        fontSize: 13,
                        color: "White"
                    },
                    className: "outline",
                    children: "Room Saved Adversaries:"
                })
            }), d.jsx("hr", {}), d.jsx(hg, {
                savedPlayerList: dt,
                duplicateGMCharacter: j,
                removeCharacterLocally: se
            })]
        }), d.jsx("div", {
            style: {
                marginTop: 20
            },
            children: d.jsx("span", {
                style: {
                    fontSize: 13,
                    color: "White"
                },
                className: "outline",
                children: "Room Saved Character:"
            })
        }), d.jsx("hr", {}), d.jsx(ug, {
            savedPlayerList: dt,
            loadLocalCharacter: ft,
            setTab: c,
            setExportData: f,
            setCopyText: a,
            removeCharacterLocally: se
        }), d.jsxs("div", {
            className: "outline",
            style: {
                marginTop: 20,
                marginBottom: 5,
                fontSize: 9,
                textAlign: "center"
            },
            children: ["Join our discord for support, unlock extra features, and report any bugs:", d.jsx("a", {
                href: "https://discord.gg/2jCNVk6wMK",
                target: "_blank",
                style: {
                    textDecoration: "underline",
                    marginLeft: 4
                },
                children: "Link Here"
            })]
        })]
    })
})
  , Ic = [{
    name: "slow",
    label: "Slow",
    url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/a7dd52d4-6064-4f32-a742-27adc8c77cda.png"
}, {
    name: "dazed",
    label: "Dazed",
    url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/6ad33f4f-c756-4320-b62b-8c4719a3f294.png"
}, {
    name: "weak",
    label: "Weak",
    url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/01fc0c8b-68b9-40a3-859c-680edde55008.png"
}, {
    name: "shaken",
    label: "Shaken",
    url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/21a042d4-1b16-4984-96bb-79117db6b4e5.png"
}, {
    name: "enraged",
    label: "Enraged",
    url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/88cdb66c-9926-4d5d-9f7e-4fb51c95858a.png"
}, {
    name: "poisoned",
    label: "Poisoned",
    url: "https://images.owlbear.rodeo/691aa845-022d-4c0f-948f-4bfc5a4037f3/items/283a97c9-cf33-411b-a105-6c605d7d3b25.png"
}]
  , gg = e=>new Promise((t,n)=>{
    const i = new FileReader;
    i.readAsText(e, "utf-8"),
    i.onload = ()=>{
        try {
            const {result: r} = i;
            r || n(),
            t(JSON.parse(r))
        } catch {
            n()
        }
    }
}
)
  , Pa = e=>e ? {
    id: Date.now(),
    isGMPlayer: e,
    name: "",
    traits: {
        name: "",
        identity: "",
        theme: "",
        origin: "",
        avatar: "",
        level: 5
    },
    affinities: {},
    stats: {
        defense: 0,
        mDefense: 0,
        currentHP: 0,
        currentMP: 0
    },
    attributes: {
        dex: "d8",
        ins: "d8",
        mig: "d8",
        wil: "d8",
        currentdex: "d8",
        currentins: "d8",
        currentmig: "d8",
        currentwil: "d8"
    },
    debuff: {
        slow: !1,
        dazed: !1,
        weak: !1,
        shaken: !1,
        enraged: !1,
        poisoned: !1
    },
    buff: {
        dex: !1,
        ins: !1,
        mig: !1,
        wil: !1
    },
    actions: [{
        name: "",
        info: "",
        detail: "",
        diceOne: "dex",
        diceTwo: "dex",
        bonus: 0,
        damage: 0,
        useHR: !0
    }],
    linkedStats: {
        currentStats: ""
    }
} : {
    id: Date.now(),
    name: "",
    level: 5,
    traits: {
        name: "",
        identity: "",
        theme: "",
        origin: "",
        avatar: "",
        level: 5
    },
    bonds: [{
        name: "",
        emotionOne: "",
        emotionTwo: "",
        emotionThree: ""
    }, {
        name: "",
        emotionOne: "",
        emotionTwo: "",
        emotionThree: ""
    }, {
        name: "",
        emotionOne: "",
        emotionTwo: "",
        emotionThree: ""
    }, {
        name: "",
        emotionOne: "",
        emotionTwo: "",
        emotionThree: ""
    }, {
        name: "",
        emotionOne: "",
        emotionTwo: "",
        emotionThree: ""
    }, {
        name: "",
        emotionOne: "",
        emotionTwo: "",
        emotionThree: ""
    }],
    attributes: {
        dex: "d8",
        ins: "d8",
        mig: "d8",
        wil: "d8",
        currentdex: "d8",
        currentins: "d8",
        currentmig: "d8",
        currentwil: "d8"
    },
    debuff: {
        slow: !1,
        dazed: !1,
        weak: !1,
        shaken: !1,
        enraged: !1,
        poisoned: !1
    },
    buff: {
        dex: !1,
        ins: !1,
        mig: !1,
        wil: !1
    },
    stats: {
        martialDef: !1,
        defenseMod: 0,
        defense: 8,
        defenseMartial: 8,
        mDefenseMod: 2,
        mDefense: 8,
        initMod: 0,
        hpMod: 0,
        mpMod: 0,
        ipMod: 0,
        fabula: 3,
        experience: 0,
        currentHP: 45,
        currentMP: 45,
        currentIP: 6,
        maxHP: 45,
        maxMP: 45,
        maxIP: 6
    },
    items: {
        accessory: "",
        armor: "",
        mainhand: "",
        offhand: "",
        notes: "",
        zenit: 0,
        martialRitual: ""
    },
    skills: [{
        categoryName: "Sample Category",
        categoryInfo: "Sample Side Information",
        items: [{
            name: "Sample Item",
            info: '"Come at me!"',
            detail: `Add your details here. 

 *This text is highlighted in red* 

 \`This text is highlighted in yellow\` 

 Use the format below to add images 
 <https://64.media.tumblr.com/65b2b9c388b86da9e30c14778600f2ff/tumblr_ncxgi0ieoI1qkye4lo4_400.gif> 

 Use the format below to add animations 
 @83@ 

 Use the format below to add a sound effect 
 $45$`
        }]
    }, {
        categoryName: "",
        categoryInfo: "",
        items: [{
            name: "",
            info: "",
            detail: ""
        }]
    }],
    actions: [{
        name: "Sample Action",
        info: '"You are dead!"',
        detail: `Add your details here. 

 *This text is highlighted in red* 

 \`This text is highlighted in yellow\` 

 Use the format below to add images 
 <https://i0.wp.com/drunkenanimeblog.com/wp-content/uploads/2019/06/log-horizon.gif?fit=500%2C247> 

 Use the format below to add animations 
 @83@ 

 Use the format below to add a sound effect 
 $45$`,
        diceOne: "dex",
        diceTwo: "dex",
        bonus: 1,
        damage: 10,
        useHR: !0
    }, {
        name: "",
        info: "",
        detail: "",
        diceOne: "dex",
        diceTwo: "dex",
        bonus: 0,
        damage: 0,
        useHR: !0
    }],
    linkedStats: {
        currentHP: "",
        currentMP: "",
        currentIP: "",
        defense: "",
        mDefense: "",
        fabula: ""
    }
};
function mg() {
    const [e,t] = R.useState(!1)
      , [n,i] = R.useState("")
      , [r,a] = R.useState("")
      , [o,l] = R.useState([])
      , [s,c] = R.useState([])
      , [f,u] = R.useState(null)
      , [y,T] = R.useState("stats")
      , [v,E] = R.useState("PLAYER")
      , [A,h] = R.useState("")
      , [p,m] = R.useState("")
      , [O,C] = R.useState(!1)
      , [x,S] = R.useState({})
      , [_,B] = R.useState(!1)
      , [G,ne] = R.useState(0)
      , [ye,pe] = R.useState(0)
      , [Be,dt] = R.useState(0)
      , [ft,se] = R.useState(!1)
      , [j,$] = R.useState("")
      , [K,re] = R.useState("")
      , [de,qe] = R.useState("")
      , [Ae,Xe] = R.useState(!1)
      , [be,et] = R.useState("fantasy")
      , Dn = R.useRef(null);
    R.useEffect(()=>{
        W.onReady(async()=>{
            if (W.scene.onReadyChange(async g=>{
                if (g) {
                    const k = await W.scene.getMetadata();
                    if (k["ultimate.story.extension/metadata"]) {
                        const N = await pn(k);
                        l(N)
                    }
                    k["ultimate.story.extension.theme"] && et(k["ultimate.story.extension.theme"]),
                    t(!0),
                    i(await W.player.getName()),
                    a(await W.player.getId()),
                    W.player.onChange(async N=>{
                        i(await W.player.getName())
                    }
                    ),
                    E(await W.player.getRole())
                } else
                    t(!1),
                    u(null)
            }
            ),
            await W.scene.isReady()) {
                const g = await W.scene.getMetadata();
                if (g["ultimate.story.extension/metadata"]) {
                    const k = await pn(g);
                    l(k)
                }
                g["ultimate.story.extension.theme"] && et(g["ultimate.story.extension.theme"]),
                t(!0),
                i(await W.player.getName()),
                a(await W.player.getId()),
                W.player.onChange(async k=>{
                    i(await W.player.getName())
                }
                ),
                E(await W.player.getRole())
            }
        }
        );
        try {
            localStorage.getItem("ultimate.story.extension/metadata")
        } catch {
            B(!0)
        }
    }
    , []);
    const pn = async g=>{
        const k = g["ultimate.story.extension/metadata"];
        S(k);
        const N = [];
        return Object.keys(k).forEach(Z=>{
            N.push(k[Z])
        }
        ),
        N
    }
    ;
    R.useEffect(()=>{
        if (e) {
            W.scene.onMetadataChange(async g=>{
                const k = await pn(g);
                l(k)
            }
            ),
            W.scene.onReadyChange(async g=>{
                if (g) {
                    const k = await W.scene.getMetadata();
                    if (k["ultimate.story.extension/metadata"]) {
                        const N = await pn(k);
                        l(N)
                    }
                    k["ultimate.story.extension.theme"] && et(k["ultimate.story.extension.theme"])
                }
            }
            );
            try {
                const g = localStorage.getItem("ultimate.story.extension/metadata");
                if (g) {
                    const k = JSON.parse(g);
                    c(k)
                }
            } catch {
                B(!0)
            }
        }
    }
    , [e]);
    const ge = g=>{
        qe(g),
        setTimeout(()=>{
            qe("")
        }
        , 2500)
    }
    ;
    function Fe(g) {
        var N;
        let k = 2 * g.lvl + 5 * g.attributes.might;
        if ((N = g.extra) != null && N.hp && (k += Number(g.extra.hp)),
        (g.rank === "elite" || g.rank === "champion2") && (k = k * 2),
        g.rank === "champion3" && (k = k * 3),
        g.rank === "champion4" && (k = k * 4),
        g.rank === "champion5" && (k = k * 5),
        g.rank === "companion") {
            const P = g.companionlvl || 1
              , Z = g.companionpclvl || 5;
            k = P * g.attributes.might + Math.floor(Z / 2)
        }
        return k
    }
    function ct(g) {
        var N;
        let k = g.lvl + 5 * g.attributes.will;
        return (N = g.extra) != null && N.mp && (k += Number(g.extra.mp)),
        (g.rank === "champion2" || g.rank === "champion3" || g.rank === "champion4" || g.rank === "champion5") && (k = k * 2),
        k
    }
    const gn = {
        soldier: "Solider",
        elite: "Elite",
        champion2: "Champion (2)",
        champion3: "Champion (3)",
        champion4: "Champion (4)",
        champion5: "Champion (5)",
        companion: "Companion"
    };
    function Zo(g) {
        return g.charAt(0).toUpperCase() + g.slice(1)
    }
    const Jt = async g=>{
        W.scene.setMetadata({
            "ultimate.story.extension.theme": g
        })
    }
      , Yo = async()=>{
        const g = Pa(!0)
          , P = {
            ...(await W.scene.getMetadata())["ultimate.story.extension/metadata"]
        };
        P[g.id] = g,
        W.scene.setMetadata({
            "ultimate.story.extension/metadata": P
        }),
        ge("Added GM character!")
    }
      , Ko = async g=>{
        const k = Pa(!0)
          , N = []
          , P = {
            dexterity: "dex",
            insight: "ins",
            might: "mig",
            will: "wil"
        };
        g.extra || (g.extra = {}),
        g.description && N.push({
            name: g.name,
            info: "",
            detail: g.description,
            noDice: !0
        }),
        g.traits && N.push({
            name: "Enemy Study Check 7+",
            info: "Rank/Species/Max HP/Max MP",
            detail: "LVL `" + g.lvl + "` `" + (gn[g.rank] ? gn[g.rank] : "Solider") + "` | `" + Zo(g.species) + "`\nMax HP: *" + Fe(g) + "* / Max MP: *" + ct(g) + "*",
            noDice: !0
        });
        let Z = 0;
        g.armor ? g.armor.def ? Z = g.armor.def + g.extra.def ? g.extra.def : 0 - g.attributes.dexterity : Z = g.armor.defbonus + (g.extra.def ? g.extra.def : 0) : Z = g.extra.def ? g.extra.def : 0;
        let U = "";
        tn.forEach((X,qi)=>{
            var Qd;
            const er = ((Qd = g.affinities) == null ? void 0 : Qd[X]) || "na";
            U += (qi > 0 ? `
` : "") + ci[er] + `\`${X}\``
        }
        );
        let J = 0;
        g.armor ? g.armor.mdefbonus && (J = g.armor.mdefbonus + (g.extra.mDef ? g.extra.mDef : 0)) : J = g.extra.mDef ? g.extra.mDef : 0,
        g.traits && N.push({
            name: "Enemy Study Check 10+",
            info: "Traits/Attributes/Defense/Magic Defense/Damage",
            detail: "Traits: `" + g.traits + "`\n Attributes: `DEX:" + g.attributes.dexterity + " INS:" + g.attributes.insight + " MIG:" + g.attributes.might + " WIL:" + g.attributes.will + "`\nDEF: *" + (Z + g.attributes.dexterity) + "* M.DEF: *" + (J + +g.attributes.insight) + `*
` + U,
            noDice: !0
        }),
        g.attacks && g.attacks.map(X=>{
            N.push({
                name: X.name,
                info: X.type.charAt(0).toUpperCase() + X.type.slice(1) + " - " + (X.range === "distance" ? "Ranged" : "Melee"),
                detail: X.special.length ? X.special.reduce((qi,er)=>qi + " " + er) : "",
                diceOne: P[X.attr1],
                diceTwo: P[X.attr2],
                bonus: Math.floor(g.lvl / 10) + (g.extra.precision ? 3 : 0),
                damage: 5 + (X.extraDamage ? 5 : 0) + Math.floor(g.lvl / 20) * 5,
                useHR: !0
            })
        }
        ),
        g.weaponattacks && g.weaponattacks.map(X=>{
            N.push({
                name: X.name ? X.name + ` (${X.weapon.name})` : X.weapon.name,
                info: X.weapon.type.charAt(0).toUpperCase() + X.weapon.type.slice(1) + " - " + (X.weapon.range === "distance" ? "Ranged" : "Melee"),
                detail: X.special.length ? X.special.reduce((qi,er)=>qi + " " + er) : "",
                diceOne: P[X.weapon.att1],
                diceTwo: P[X.weapon.att2],
                bonus: Math.floor(g.lvl / 10) + (g.extra.precision ? 3 : 0) + (X.weapon.prec ? X.weapon.prec : 0),
                damage: X.weapon.damage + (X.extraDamage ? 5 : 0) + (X.flatdmg ? parseInt(String(X.flatdmg)) : 0) + Math.floor(g.lvl / 20) * 5,
                useHR: !0
            })
        }
        ),
        g.spells && g.spells.map(X=>{
            X.type === "offensive" ? N.push({
                name: X.name,
                info: "Spell - " + X.mp + " MP - " + X.target.charAt(0).toUpperCase() + X.target.slice(1) + " - " + X.duration.charAt(0).toUpperCase() + X.duration.slice(1),
                detail: "(*ϟ*) " + X.effect,
                diceOne: P[X.attr1],
                diceTwo: P[X.attr2],
                bonus: Math.floor(g.lvl / 10) + (g.extra.magic ? 3 : 0),
                damage: 0,
                useHR: !0
            }) : N.push({
                name: X.name,
                info: "Spell - " + X.mp + " MP - " + X.target.charAt(0).toUpperCase() + X.target.slice(1) + " - " + X.duration.charAt(0).toUpperCase() + X.duration.slice(1),
                detail: X.effect,
                noDice: !0
            })
        }
        ),
        g.actions && g.actions.map(X=>{
            N.push({
                name: X.name,
                info: "Other Action",
                detail: X.effect,
                noDice: !0
            })
        }
        ),
        g.special && g.special.map(X=>{
            N.push({
                name: X.name,
                info: "Special Rules",
                detail: X.effect,
                noDice: !0
            })
        }
        );
        const ee = {
            ...k,
            name: g.name,
            traits: {
                name: g.name,
                identity: g.species || "",
                theme: "",
                origin: "",
                avatar: "",
                level: g.lvl
            },
            stats: {
                defense: Z,
                mDefense: J,
                currentHP: 0,
                currentMP: 0
            },
            affinities: g.affinities,
            attributes: {
                dex: "d" + g.attributes.dexterity,
                ins: "d" + g.attributes.insight,
                mig: "d" + g.attributes.might,
                wil: "d" + g.attributes.will,
                currentdex: "d" + g.attributes.dexterity,
                currentins: "d" + g.attributes.insight,
                currentmig: "d" + g.attributes.might,
                currentwil: "d" + g.attributes.will
            },
            actions: N
        };
        console.log("+++++++++++"),
        console.log(g),
        console.log(ee);
        const ua = {
            ...(await W.scene.getMetadata())["ultimate.story.extension/metadata"]
        };
        ua[ee.id] = ee,
        W.scene.setMetadata({
            "ultimate.story.extension/metadata": ua
        }),
        Dn.current && (Dn.current.value = "",
        ge("Added GM character!"))
    }
      , Qo = async(g,k,N,P)=>{
        if (g === "" || !g)
            return;
        const Z = isNaN(Number(k)) ? 0 : Number(k)
          , U = P && !isNaN(Number(P)) ? Number(P) : 0;
        await W.scene.items.updateItems([String(g)], J=>{
            for (const ee of J)
                if (N === "defense" || N === "mDefense") {
                    const Le = Z > 9 ? Z.toString() : " " + Z.toString();
                    ee.text.richText[0].children[0].text = Le
                } else if (N === "fabula") {
                    const Le = Z > 9 ? Z.toString() : " " + Z.toString();
                    ee.text.richText[0].children[0].text = Le
                } else
                    U ? ee.text.richText[0].children[0].text = Z.toString() + "/" + U.toString() : N === "currentIP" ? ee.text.richText[0].children[0].text = Z.toString().padStart(2, "0") : ee.text.richText[0].children[0].text = Z.toString()
        }
        )
    }
      , Jo = async(g,k,N,P)=>{
        if (g === "")
            return;
        const Z = isNaN(Number(k)) ? 0 : Number(k)
          , U = isNaN(Number(N)) ? 0 : Number(N);
        await W.scene.items.updateItems([g], J=>{
            for (const ee of J)
                ee.text.richText[0] = {
                    type: "paragraph",
                    children: [{
                        text: P
                    }]
                },
                ee.text.richText[1] = {
                    type: "paragraph",
                    children: [{
                        text: "           " + Z.toString()
                    }]
                },
                ee.text.richText[2] = {
                    type: "paragraph",
                    children: [{
                        text: "           " + U.toString()
                    }]
                }
        }
        )
    }
      , [ra,qt] = R.useState(null)
      , tt = g=>{
        if (u(g),
        ra) {
            clearTimeout(ra);
            const k = setTimeout(()=>{
                di()
            }
            , 500);
            qt(k)
        } else {
            const k = setTimeout(()=>{
                di()
            }
            , 500);
            qt(k)
        }
        Xe(!0)
    }
      , di = async()=>{
        if (f) {
            const N = {
                ...(await W.scene.getMetadata())["ultimate.story.extension/metadata"]
            };
            N[f.id] = {
                ...f,
                lastEdit: r
            },
            W.scene.setMetadata({
                "ultimate.story.extension/metadata": N
            }),
            qt(null)
        }
    }
    ;
    R.useEffect(()=>{
        if (f && !Ae && x[f.id] && x[f.id].lastEdit !== r) {
            const g = x[f.id];
            g.buff || (g.buff = {
                dex: !1,
                ins: !1,
                mig: !1,
                wil: !1
            }),
            u(g)
        }
        Ae && Xe(!1)
    }
    , [x]);
    const Nt = g=>f ? g === "dex" ? f.attributes.currentdex : g === "ins" ? f.attributes.currentins : g === "mig" ? f.attributes.currentmig : g === "wil" ? f.attributes.currentwil : g : g
      , Fn = g=>{
        if (!f)
            return;
        const k = {
            dex: f.attributes.currentdex,
            ins: f.attributes.currentins,
            mig: f.attributes.currentmig,
            wil: f.attributes.currentwil,
            diceOne: Nt(g.diceOne),
            diceTwo: Nt(g.diceTwo),
            diceLabelOne: g.diceOne.toUpperCase(),
            diceLabelTwo: g.diceTwo.toUpperCase(),
            bonus: isNaN(parseInt(String(g.bonus))) ? 0 : parseInt(String(g.bonus)),
            damage: isNaN(parseInt(String(g.damage))) ? 0 : parseInt(String(g.damage)),
            useHR: g.useHR,
            skillName: g.name,
            info: g.info,
            detail: g.detail,
            userId: r,
            username: n,
            characterName: f.traits.name,
            characterID: f.id,
            isGMPlayer: f.isGMPlayer,
            id: Date.now()
        };
        W.room.setMetadata({
            "ultimate.story.extension/sendroll": k
        }),
        ge("Roll Sent!")
    }
      , aa = g=>{
        if (!f)
            return;
        const k = {
            skillName: g.name ? g.name : "Blank skill",
            info: g.info,
            detail: g.detail,
            characterName: f.traits.name,
            userId: r,
            username: n,
            characterID: f.id,
            id: Date.now()
        };
        W.room.setMetadata({
            "ultimate.story.extension/sendskill": k
        }),
        ge("Information Sent!")
    }
      , Hn = g=>{
        const k = {
            characterName: g.traits.name,
            avatar: g.traits.avatar,
            userId: r,
            characterID: g.id,
            dex: g.attributes.currentdex,
            ins: g.attributes.currentins,
            mig: g.attributes.currentmig,
            wil: g.attributes.currentwil,
            isGMPlayer: g.isGMPlayer,
            id: Date.now()
        };
        W.room.setMetadata({
            "ultimate.story.extension/sendcharacter": k
        })
    }
      , qo = async g=>{
        const P = {
            ...(await W.scene.getMetadata())["ultimate.story.extension/metadata"]
        };
        P[g].isGMPlayer ? (delete P[g],
        W.scene.setMetadata({
            "ultimate.story.extension/metadata": P
        }),
        ge("Removed character.")) : confirm("Are you sure you want to delete the character?") == !0 && confirm("You won't be able to retrieve it back, are you really sure?") == !0 && (delete P[g],
        W.scene.setMetadata({
            "ultimate.story.extension/metadata": P
        }),
        ge("Removed character."))
    }
      , Wt = async()=>{
        const g = Pa()
          , P = {
            ...(await W.scene.getMetadata())["ultimate.story.extension/metadata"]
        };
        P[g.id] = g,
        W.scene.setMetadata({
            "ultimate.story.extension/metadata": P
        }),
        ge("Added new character.")
    }
      , en = (g,k)=>{
        const N = g.indexOf(k);
        return N > -1 && g.splice(N, 1),
        g
    }
    ;
    function oa(g, k) {
        let N = Object.keys(g).sort()
          , P = Object.keys(k).sort();
        return N = en(N, "lastEdit"),
        P = en(P, "lastEdit"),
        N = en(N, "isGMPlayer"),
        P = en(P, "isGMPlayer"),
        N = en(N, "linkedStats"),
        P = en(P, "linkedStats"),
        JSON.stringify(N) === JSON.stringify(P)
    }
    const la = ()=>{
        const g = JSON.parse(localStorage.getItem("ultimate.story.extension/metadata"))
          , k = JSON.parse(p);
        k.buff || (k.buff = {
            dex: !1,
            ins: !1,
            mig: !1,
            wil: !1
        }),
        oa(k, Pa()) ? (g ? (g.push(k),
        localStorage.setItem("ultimate.story.extension/metadata", JSON.stringify(g)),
        c(g)) : (localStorage.setItem("ultimate.story.extension/metadata", JSON.stringify(k)),
        c(k)),
        u(null),
        m(""),
        T("stats"),
        ge("Imported character.")) : alert("Invalid Data. Please double check the export data and copy again.")
    }
      , el = async g=>{
        const P = {
            ...(await W.scene.getMetadata())["ultimate.story.extension/metadata"]
        }
          , Z = JSON.parse(localStorage.getItem("ultimate.story.extension/metadata"));
        if (Z) {
            const U = Z.findIndex(J=>{
                if (J)
                    return g === J.id
            }
            );
            U !== -1 ? (Z[U] = P[g],
            localStorage.setItem("ultimate.story.extension/metadata", JSON.stringify(Z)),
            c(Z)) : Z ? P[g] && (Z.push(P[g]),
            localStorage.setItem("ultimate.story.extension/metadata", JSON.stringify(Z)),
            c(Z)) : (localStorage.setItem("ultimate.story.extension/metadata", JSON.stringify([P[g]])),
            c([P[g]]))
        } else
            localStorage.setItem("ultimate.story.extension/metadata", JSON.stringify([P[g]])),
            c([P[g]]);
        ge("Character Saved!")
    }
      , sa = async g=>{
        const P = {
            ...(await W.scene.getMetadata())["ultimate.story.extension/metadata"]
        };
        P[g.id] && !confirm("This character is already loaded, loading this character will replace the character in the current scene. Are you sure you want to replace the existing character?") || (P[g.id] = g,
        W.scene.setMetadata({
            "ultimate.story.extension/metadata": P
        }),
        ge("Loaded character!"))
    }
      , fi = g=>{
        if (confirm("Are you sure you want to delete this locally stored character?") == !0) {
            const k = JSON.parse(localStorage.getItem("ultimate.story.extension/metadata"))
              , N = k.findIndex(P=>P.id === g);
            k.splice(N, 1),
            localStorage.setItem("ultimate.story.extension/metadata", JSON.stringify(k)),
            c(k),
            ge("Deleted character.")
        }
    }
      , da = async g=>{
        const k = o.filter(U=>U.originalId === g.id).length;
        g.originalId = g.id,
        g.id = Date.now(),
        g.traits.name = g.traits.name.replace(/ *\([^)]*\) */g, "") + (k > 0 ? ` (${k + 1})` : ""),
        g.stats ? (g.stats.currentHP = 0,
        g.stats.currentMP = 0) : g.stats = {
            defense: 0,
            mDefense: 0,
            currentHP: 0,
            currentMP: 0
        },
        g.linkedStats = {
            currentStats: ""
        };
        const Z = {
            ...(await W.scene.getMetadata())["ultimate.story.extension/metadata"]
        };
        Z[g.id] = g,
        W.scene.setMetadata({
            "ultimate.story.extension/metadata": Z
        }),
        ge("Added GM character!")
    }
      , Qi = g=>{
        var k, N, P, Z;
        if (g == "dex") {
            let U = ue(f.attributes.dex);
            return f.debuff.slow && (U = U - 2),
            f.debuff.enraged && (U = U - 2),
            (k = f.buff) != null && k.dex && (U = U + 2),
            U < 6 && (U = 6),
            U > 12 && (U = 12),
            "d" + U
        }
        if (g == "ins") {
            let U = ue(f.attributes.ins);
            return f.debuff.dazed && (U = U - 2),
            f.debuff.enraged && (U = U - 2),
            (N = f.buff) != null && N.ins && (U = U + 2),
            U < 6 && (U = 6),
            U > 12 && (U = 12),
            "d" + U
        }
        if (g == "mig") {
            let U = ue(f.attributes.mig);
            return f.debuff.weak && (U = U - 2),
            f.debuff.poisoned && (U = U - 2),
            (P = f.buff) != null && P.mig && (U = U + 2),
            U < 6 && (U = 6),
            U > 12 && (U = 12),
            "d" + U
        }
        if (g == "wil") {
            let U = ue(f.attributes.wil);
            return f.debuff.shaken && (U = U - 2),
            f.debuff.poisoned && (U = U - 2),
            (Z = f.buff) != null && Z.wil && (U = U + 2),
            U < 6 && (U = 6),
            U > 12 && (U = 12),
            "d" + U
        }
    }
      , tl = async g=>{
        const k = await W.scene.items.getItems([g.linkedStats.currentHP]);
        if (!k.length)
            return;
        const N = []
          , P = [];
        let Z = 0;
        Ic.forEach(async(U,J)=>{
            g.debuff[U.name] ? (N.push({
                type: "IMAGE",
                id: g.linkedStats.currentHP + "_" + U.name,
                name: U.name,
                position: {
                    x: k[0].position.x + Z * 80 - 50,
                    y: k[0].position.y - 120
                },
                attachedTo: g.linkedStats.currentHP,
                rotation: 0,
                scale: {
                    x: .7,
                    y: .7
                },
                visible: !0,
                locked: !0,
                createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
                zIndex: 2708870140636,
                lastModified: "2024-02-25T14:09:00.636Z",
                lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
                metadata: {},
                image: {
                    url: U.url,
                    mime: "image/png",
                    width: 126,
                    height: 117
                },
                grid: {
                    dpi: 150,
                    offset: {
                        x: 2,
                        y: -42
                    }
                },
                text: {
                    type: "RICH",
                    style: {
                        padding: 16,
                        fontSize: 24,
                        fillColor: "#ffd433",
                        textAlign: "CENTER",
                        fontFamily: "Roboto",
                        fontWeight: 400,
                        lineHeight: 1.5,
                        fillOpacity: 1,
                        strokeColor: "#222222",
                        strokeWidth: 5,
                        strokeOpacity: 1,
                        textAlignVertical: "TOP"
                    },
                    width: "AUTO",
                    height: "AUTO",
                    richText: [{
                        type: "paragraph",
                        children: [{
                            text: ""
                        }]
                    }],
                    plainText: ""
                },
                textItemType: "TEXT",
                layer: "TEXT"
            }),
            Z++) : P.push(g.linkedStats.currentHP + "_" + U.name)
        }
        ),
        await W.scene.items.addItems(N),
        await W.scene.items.deleteItems(P)
    }
      , fa = g=>{
        const k = {
            ...f
        };
        k.skills[g].items.push({
            name: "",
            info: "",
            detail: ""
        }),
        tt(k),
        ge("Added new item.")
    }
      , nl = (g,k)=>{
        if (confirm("Are you sure you want to delete the skill?") == !0) {
            const N = {
                ...f
            };
            N.skills[g].items.splice(k, 1),
            tt(N),
            ge("Removed item.")
        }
    }
      , ca = ()=>{
        const g = {
            ...f
        };
        g.skills.push({
            categoryName: "",
            categoryInfo: "",
            edit: !0,
            items: [{
                name: "",
                info: "",
                detail: ""
            }]
        }),
        tt(g),
        ge("Added new category.")
    }
      , il = g=>{
        if (confirm("Are you sure you want to delete the category?") == !0) {
            const k = {
                ...f
            };
            k.skills.splice(g, 1),
            ge("Category removed."),
            tt(k)
        }
    }
      , [b,w] = R.useState("")
      , [I,L] = R.useState(!0)
      , H = ()=>{
        const g = {
            ...f
        };
        g.actions.push({
            name: "",
            info: "",
            detail: "",
            diceOne: "dex",
            diceTwo: "dex",
            bonus: 0,
            damage: 0,
            useHR: !0,
            edit: !0
        }),
        tt(g),
        ge("Added new action.")
    }
      , te = ()=>{
        const g = {
            ...f
        };
        g.actions.push({
            name: "",
            info: "",
            detail: "",
            noDice: !0,
            edit: !0
        }),
        tt(g),
        ge("Added new action.")
    }
      , Q = g=>{
        if (confirm("Are you sure you want to delete the action?") == !0) {
            const k = {
                ...f
            };
            k.actions.splice(g, 1),
            tt(k),
            ge("Deleted action.")
        }
    }
      , Y = g=>{
        if (g !== 0) {
            const k = {
                ...f
            }
              , N = k.actions[g]
              , P = k.actions[g - 1];
            k.actions[g] = P,
            k.actions[g - 1] = N,
            tt(k)
        }
    }
      , V = g=>{
        if (g < f.actions.length - 1) {
            const k = {
                ...f
            }
              , N = k.actions[g]
              , P = k.actions[g + 1];
            k.actions[g] = P,
            k.actions[g + 1] = N,
            tt(k)
        }
    }
      , ie = g=>{
        if (g !== 0) {
            const k = {
                ...f
            }
              , N = k.skills[g]
              , P = k.skills[g - 1];
            k.skills[g] = P,
            k.skills[g - 1] = N,
            tt(k)
        }
    }
      , Me = g=>{
        if (g < f.skills.length - 1) {
            const k = {
                ...f
            }
              , N = k.skills[g]
              , P = k.skills[g + 1];
            k.skills[g] = P,
            k.skills[g + 1] = N,
            tt(k)
        }
    }
      , [q,ce] = R.useState("")
      , Ue = async g=>{
        const k = await W.scene.items.getItems([g.linkedStats.currentStats]);
        if (!k.length)
            return;
        let N = 0;
        const P = []
          , Z = [];
        Ic.forEach(U=>{
            g.debuff[U.name] ? (P.push({
                type: "IMAGE",
                id: g.linkedStats.currentStats + "_" + U.name,
                name: U.name,
                position: {
                    x: k[0].position.x + N * 80,
                    y: k[0].position.y - 90
                },
                attachedTo: g.linkedStats.currentStats,
                disableAttachmentBehavior: ["VISIBLE", "SCALE", "ROTATION"],
                rotation: 0,
                scale: {
                    x: .7,
                    y: .7
                },
                visible: !0,
                locked: !0,
                createdUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
                zIndex: 1708870140636,
                lastModified: "2024-02-25T14:09:00.636Z",
                lastModifiedUserId: "691aa845-022d-4c0f-948f-4bfc5a4037f3",
                metadata: {},
                image: {
                    url: U.url,
                    mime: "image/png",
                    width: 126,
                    height: 117
                },
                grid: {
                    dpi: 150,
                    offset: {
                        x: 2,
                        y: -42
                    }
                },
                text: {
                    type: "RICH",
                    style: {
                        padding: 16,
                        fontSize: 20,
                        fillColor: "#ffd433",
                        textAlign: "CENTER",
                        fontFamily: "Roboto",
                        fontWeight: 400,
                        lineHeight: 1.5,
                        fillOpacity: 1,
                        strokeColor: "#222222",
                        strokeWidth: 5,
                        strokeOpacity: 1,
                        textAlignVertical: "TOP"
                    },
                    width: "AUTO",
                    height: "AUTO",
                    richText: [{
                        type: "paragraph",
                        children: [{
                            text: U.label
                        }]
                    }],
                    plainText: ""
                },
                textItemType: "TEXT",
                layer: "ATTACHMENT"
            }),
            N++) : Z.push(g.linkedStats.currentStats + "_" + U.name)
        }
        ),
        W.scene.items.addItems(P),
        W.scene.items.deleteItems(Z)
    }
      , [nt,_e] = R.useState("physical")
      , tn = ["physical", "wind", "bolt", "dark", "earth", "fire", "ice", "light", "poison"]
      , ci = {
        vu: "*Vulnerable* to ",
        na: "`Neutral` to ",
        rs: "*Resistant* to ",
        im: "*Immune* to ",
        ab: "*Absorbs* "
    }
      , mn = (g,k,N)=>{
        const P = {
            skillName: g,
            detail: ci[N] + `\`${k}\``,
            characterName: f.traits.name,
            userId: r,
            username: n,
            characterID: f.id,
            id: Date.now()
        };
        W.room.setMetadata({
            "ultimate.story.extension/sendskill": P
        }),
        ge("Affinity Info Sent!")
    }
      , Gt = g=>{
        const k = o.filter(U=>!U.isGMPlayer)
          , N = Math.floor(Math.random() * k.length)
          , P = k[N]
          , Z = {
            skillName: g ? P.traits.name + " has been selected!" : P.traits.name + " has been targeted!",
            info: "",
            detail: g ? '"Fate has chosen you."' : '"Brace yourself, this might hurt!"',
            characterName: "Random Player",
            userId: r,
            username: n,
            id: Date.now()
        };
        W.room.setMetadata({
            "ultimate.story.extension/sendskill": Z
        }),
        ge("Sent Random Adversary!")
    }
    ;
    return _ ? d.jsx(Ac, {
        theme: be,
        title: "Error:",
        message: "You need to enable 3rd Party cookies for this extention to work. This is because some character data is stored in the browser localstorage that enables characters to transfer between scenes."
    }) : e ? d.jsx(Mp, {
        theme: be,
        message: de,
        children: f ? d.jsx(ig, {
            player: f,
            tab: y,
            setTab: T,
            setPlayer: u,
            updatePlayer: tt,
            updateNoteItem: Qo,
            getCurrentAttribute: Qi,
            sendSkill: aa,
            addStatusEffectIcon: tl,
            healthModifier: ye,
            setHealthModifier: pe,
            mindModifier: Be,
            setMindModifier: dt,
            showMessage: ge,
            searchActions: q,
            setSearchActions: ce,
            diceOne: j,
            setDiceOne: $,
            diceTwo: K,
            setDiceTwo: re,
            bonus: G,
            setBonus: ne,
            sendRoll: Fn,
            sendRandomPlayer: Gt,
            addAction: H,
            addActionNoRoll: te,
            removeAction: Q,
            sortUp: Y,
            sortDown: V,
            searchSkills: b,
            setSearchSkills: w,
            collapseAll: I,
            setCollapseAll: L,
            addCategory: ca,
            removeCategory: il,
            addSkill: fa,
            removeSkill: nl,
            sortCategoryUp: ie,
            sortCategoryDown: Me,
            playerList: o,
            theme: be,
            addGMStatusEffectIcon: Ue,
            updateGMNoteItem: Jo,
            damageTypeSelected: nt,
            setSelectedDamageType: _e,
            sendAffinity: mn,
            damageTypes: tn,
            sendCharacter: Hn
        }) : d.jsx(pg, {
            tab: y,
            role: v,
            exportData: A,
            importData: p,
            copyText: O,
            setCopyText: C,
            setImportData: m,
            importCharacter: la,
            setPlayer: u,
            setTab: T,
            setExportData: h,
            playerList: o,
            editMode: ft,
            setEditMode: se,
            theme: be,
            setTheme: et,
            changeTheme: Jt,
            showMessage: ge,
            addPlayer: Wt,
            setDiceOne: $,
            setDiceTwo: re,
            setHealthModifier: pe,
            setMindModifier: dt,
            setBonus: ne,
            sendCharacter: Hn,
            saveCharacterLocally: el,
            removePlayer: qo,
            uploaderRef: Dn,
            addGMCharacter: Yo,
            ImportFultimatorJSON: Ko,
            readFile: gg,
            savedPlayerList: s,
            loadLocalCharacter: sa,
            removeCharacterLocally: fi,
            duplicateGMCharacter: da
        })
    }) : d.jsx(Ac, {
        theme: be,
        title: "No Scene found.",
        message: "You need to load a scene to start adding/updating characters. If a scene is already loaded, kindly refresh the page."
    })
}
/**
 * @remix-run/router v1.15.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ce() {
    return Ce = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
        }
        return e
    }
    ,
    Ce.apply(this, arguments)
}
var Se;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(Se || (Se = {}));
const Cc = "popstate";
function yg(e) {
    e === void 0 && (e = {});
    function t(i, r) {
        let {pathname: a, search: o, hash: l} = i.location;
        return Kr("", {
            pathname: a,
            search: o,
            hash: l
        }, r.state && r.state.usr || null, r.state && r.state.key || "default")
    }
    function n(i, r) {
        return typeof r == "string" ? r : na(r)
    }
    return Tg(t, n, null, e)
}
function oe(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function $i(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function xg() {
    return Math.random().toString(36).substr(2, 8)
}
function Sc(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function Kr(e, t, n, i) {
    return n === void 0 && (n = null),
    Ce({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? hn(t) : t, {
        state: n,
        key: t && t.key || i || xg()
    })
}
function na(e) {
    let {pathname: t="/", search: n="", hash: i=""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    i && i !== "#" && (t += i.charAt(0) === "#" ? i : "#" + i),
    t
}
function hn(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
        e = e.substr(0, n));
        let i = e.indexOf("?");
        i >= 0 && (t.search = e.substr(i),
        e = e.substr(0, i)),
        e && (t.pathname = e)
    }
    return t
}
function Tg(e, t, n, i) {
    i === void 0 && (i = {});
    let {window: r=document.defaultView, v5Compat: a=!1} = i
      , o = r.history
      , l = Se.Pop
      , s = null
      , c = f();
    c == null && (c = 0,
    o.replaceState(Ce({}, o.state, {
        idx: c
    }), ""));
    function f() {
        return (o.state || {
            idx: null
        }).idx
    }
    function u() {
        l = Se.Pop;
        let A = f()
          , h = A == null ? null : A - c;
        c = A,
        s && s({
            action: l,
            location: E.location,
            delta: h
        })
    }
    function y(A, h) {
        l = Se.Push;
        let p = Kr(E.location, A, h);
        n && n(p, A),
        c = f() + 1;
        let m = Sc(p, c)
          , O = E.createHref(p);
        try {
            o.pushState(m, "", O)
        } catch (C) {
            if (C instanceof DOMException && C.name === "DataCloneError")
                throw C;
            r.location.assign(O)
        }
        a && s && s({
            action: l,
            location: E.location,
            delta: 1
        })
    }
    function T(A, h) {
        l = Se.Replace;
        let p = Kr(E.location, A, h);
        n && n(p, A),
        c = f();
        let m = Sc(p, c)
          , O = E.createHref(p);
        o.replaceState(m, "", O),
        a && s && s({
            action: l,
            location: E.location,
            delta: 0
        })
    }
    function v(A) {
        let h = r.location.origin !== "null" ? r.location.origin : r.location.href
          , p = typeof A == "string" ? A : na(A);
        return p = p.replace(/ $/, "%20"),
        oe(h, "No window.location.(origin|href) available to create URL for href: " + p),
        new URL(p,h)
    }
    let E = {
        get action() {
            return l
        },
        get location() {
            return e(r, o)
        },
        listen(A) {
            if (s)
                throw new Error("A history only accepts one active listener");
            return r.addEventListener(Cc, u),
            s = A,
            ()=>{
                r.removeEventListener(Cc, u),
                s = null
            }
        },
        createHref(A) {
            return t(r, A)
        },
        createURL: v,
        encodeLocation(A) {
            let h = v(A);
            return {
                pathname: h.pathname,
                search: h.search,
                hash: h.hash
            }
        },
        push: y,
        replace: T,
        go(A) {
            return o.go(A)
        }
    };
    return E
}
var ke;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(ke || (ke = {}));
const vg = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function bg(e) {
    return e.index === !0
}
function Bs(e, t, n, i) {
    return n === void 0 && (n = []),
    i === void 0 && (i = {}),
    e.map((r,a)=>{
        let o = [...n, a]
          , l = typeof r.id == "string" ? r.id : o.join("-");
        if (oe(r.index !== !0 || !r.children, "Cannot specify children on an index route"),
        oe(!i[l], 'Found a route id collision on id "' + l + `".  Route id's must be globally unique within Data Router usages`),
        bg(r)) {
            let s = Ce({}, r, t(r), {
                id: l
            });
            return i[l] = s,
            s
        } else {
            let s = Ce({}, r, t(r), {
                id: l,
                children: void 0
            });
            return i[l] = s,
            r.children && (s.children = Bs(r.children, t, o, i)),
            s
        }
    }
    )
}
function Ri(e, t, n) {
    n === void 0 && (n = "/");
    let i = typeof t == "string" ? hn(t) : t
      , r = ia(i.pathname || "/", n);
    if (r == null)
        return null;
    let a = Ih(e);
    Og(a);
    let o = null;
    for (let l = 0; o == null && l < a.length; ++l) {
        let s = Lg(r);
        o = _g(a[l], s)
    }
    return o
}
function Eg(e, t) {
    let {route: n, pathname: i, params: r} = e;
    return {
        id: n.id,
        pathname: i,
        params: r,
        data: t[n.id],
        handle: n.handle
    }
}
function Ih(e, t, n, i) {
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    i === void 0 && (i = "");
    let r = (a,o,l)=>{
        let s = {
            relativePath: l === void 0 ? a.path || "" : l,
            caseSensitive: a.caseSensitive === !0,
            childrenIndex: o,
            route: a
        };
        s.relativePath.startsWith("/") && (oe(s.relativePath.startsWith(i), 'Absolute route path "' + s.relativePath + '" nested under path ' + ('"' + i + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        s.relativePath = s.relativePath.slice(i.length));
        let c = ei([i, s.relativePath])
          , f = n.concat(s);
        a.children && a.children.length > 0 && (oe(a.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + c + '".')),
        Ih(a.children, t, f, c)),
        !(a.path == null && !a.index) && t.push({
            path: c,
            score: Rg(c, a.index),
            routesMeta: f
        })
    }
    ;
    return e.forEach((a,o)=>{
        var l;
        if (a.path === "" || !((l = a.path) != null && l.includes("?")))
            r(a, o);
        else
            for (let s of Ch(a.path))
                r(a, o, s)
    }
    ),
    t
}
function Ch(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...i] = t
      , r = n.endsWith("?")
      , a = n.replace(/\?$/, "");
    if (i.length === 0)
        return r ? [a, ""] : [a];
    let o = Ch(i.join("/"))
      , l = [];
    return l.push(...o.map(s=>s === "" ? a : [a, s].join("/"))),
    r && l.push(...o),
    l.map(s=>e.startsWith("/") && s === "" ? "/" : s)
}
function Og(e) {
    e.sort((t,n)=>t.score !== n.score ? n.score - t.score : Mg(t.routesMeta.map(i=>i.childrenIndex), n.routesMeta.map(i=>i.childrenIndex)))
}
const wg = /^:[\w-]+$/
  , Ag = 3
  , kg = 2
  , Ig = 1
  , Cg = 10
  , Sg = -2
  , Rc = e=>e === "*";
function Rg(e, t) {
    let n = e.split("/")
      , i = n.length;
    return n.some(Rc) && (i += Sg),
    t && (i += kg),
    n.filter(r=>!Rc(r)).reduce((r,a)=>r + (wg.test(a) ? Ag : a === "" ? Ig : Cg), i)
}
function Mg(e, t) {
    return e.length === t.length && e.slice(0, -1).every((i,r)=>i === t[r]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function _g(e, t) {
    let {routesMeta: n} = e
      , i = {}
      , r = "/"
      , a = [];
    for (let o = 0; o < n.length; ++o) {
        let l = n[o]
          , s = o === n.length - 1
          , c = r === "/" ? t : t.slice(r.length) || "/"
          , f = Ng({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: s
        }, c);
        if (!f)
            return null;
        Object.assign(i, f.params);
        let u = l.route;
        a.push({
            params: i,
            pathname: ei([r, f.pathname]),
            pathnameBase: Dg(ei([r, f.pathnameBase])),
            route: u
        }),
        f.pathnameBase !== "/" && (r = ei([r, f.pathnameBase]))
    }
    return a
}
function Ng(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,i] = Ug(e.path, e.caseSensitive, e.end)
      , r = t.match(n);
    if (!r)
        return null;
    let a = r[0]
      , o = a.replace(/(.)\/+$/, "$1")
      , l = r.slice(1);
    return {
        params: i.reduce((c,f,u)=>{
            let {paramName: y, isOptional: T} = f;
            if (y === "*") {
                let E = l[u] || "";
                o = a.slice(0, a.length - E.length).replace(/(.)\/+$/, "$1")
            }
            const v = l[u];
            return T && !v ? c[y] = void 0 : c[y] = (v || "").replace(/%2F/g, "/"),
            c
        }
        , {}),
        pathname: a,
        pathnameBase: o,
        pattern: e
    }
}
function Ug(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    $i(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let i = []
      , r = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (o,l,s)=>(i.push({
        paramName: l,
        isOptional: s != null
    }),
    s ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (i.push({
        paramName: "*"
    }),
    r += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? r += "\\/*$" : e !== "" && e !== "/" && (r += "(?:(?=\\/|$))"),
    [new RegExp(r,t ? void 0 : "i"), i]
}
function Lg(e) {
    try {
        return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return $i(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function ia(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , i = e.charAt(n);
    return i && i !== "/" ? null : e.slice(n) || "/"
}
function Pg(e, t) {
    t === void 0 && (t = "/");
    let {pathname: n, search: i="", hash: r=""} = typeof e == "string" ? hn(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : jg(n, t) : t,
        search: Fg(i),
        hash: Hg(r)
    }
}
function jg(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(r=>{
        r === ".." ? n.length > 1 && n.pop() : r !== "." && n.push(r)
    }
    ),
    n.length > 1 ? n.join("/") : "/"
}
function Pl(e, t, n, i) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(i) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function Sh(e) {
    return e.filter((t,n)=>n === 0 || t.route.path && t.route.path.length > 0)
}
function Bg(e, t) {
    let n = Sh(e);
    return t ? n.map((i,r)=>r === e.length - 1 ? i.pathname : i.pathnameBase) : n.map(i=>i.pathnameBase)
}
function zg(e, t, n, i) {
    i === void 0 && (i = !1);
    let r;
    typeof e == "string" ? r = hn(e) : (r = Ce({}, e),
    oe(!r.pathname || !r.pathname.includes("?"), Pl("?", "pathname", "search", r)),
    oe(!r.pathname || !r.pathname.includes("#"), Pl("#", "pathname", "hash", r)),
    oe(!r.search || !r.search.includes("#"), Pl("#", "search", "hash", r)));
    let a = e === "" || r.pathname === "", o = a ? "/" : r.pathname, l;
    if (o == null)
        l = n;
    else {
        let u = t.length - 1;
        if (!i && o.startsWith("..")) {
            let y = o.split("/");
            for (; y[0] === ".."; )
                y.shift(),
                u -= 1;
            r.pathname = y.join("/")
        }
        l = u >= 0 ? t[u] : "/"
    }
    let s = Pg(r, l)
      , c = o && o !== "/" && o.endsWith("/")
      , f = (a || o === ".") && n.endsWith("/");
    return !s.pathname.endsWith("/") && (c || f) && (s.pathname += "/"),
    s
}
const ei = e=>e.join("/").replace(/\/\/+/g, "/")
  , Dg = e=>e.replace(/\/+$/, "").replace(/^\/*/, "/")
  , Fg = e=>!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e
  , Hg = e=>!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
class Zd {
    constructor(t, n, i, r) {
        r === void 0 && (r = !1),
        this.status = t,
        this.statusText = n || "",
        this.internal = r,
        i instanceof Error ? (this.data = i.toString(),
        this.error = i) : this.data = i
    }
}
function Rh(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const Mh = ["post", "put", "patch", "delete"]
  , Wg = new Set(Mh)
  , Gg = ["get", ...Mh]
  , Vg = new Set(Gg)
  , Xg = new Set([301, 302, 303, 307, 308])
  , $g = new Set([307, 308])
  , jl = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0
}
  , Zg = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0
}
  , dr = {
    state: "unblocked",
    proceed: void 0,
    reset: void 0,
    location: void 0
}
  , _h = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , Yg = e=>({
    hasErrorBoundary: !!e.hasErrorBoundary
})
  , Nh = "remix-router-transitions";
function Kg(e) {
    const t = e.window ? e.window : typeof window < "u" ? window : void 0
      , n = typeof t < "u" && typeof t.document < "u" && typeof t.document.createElement < "u"
      , i = !n;
    oe(e.routes.length > 0, "You must provide a non-empty routes array to createRouter");
    let r;
    if (e.mapRouteProperties)
        r = e.mapRouteProperties;
    else if (e.detectErrorBoundary) {
        let b = e.detectErrorBoundary;
        r = w=>({
            hasErrorBoundary: b(w)
        })
    } else
        r = Yg;
    let a = {}, o = Bs(e.routes, r, void 0, a), l, s = e.basename || "/", c = Ce({
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1
    }, e.future), f = null, u = new Set, y = null, T = null, v = null, E = e.hydrationData != null, A = Ri(o, e.history.location, s), h = null;
    if (A == null) {
        let b = kt(404, {
            pathname: e.history.location.pathname
        })
          , {matches: w, route: I} = Bc(o);
        A = w,
        h = {
            [I.id]: b
        }
    }
    let p, m = A.some(b=>b.route.lazy), O = A.some(b=>b.route.loader);
    if (m)
        p = !1;
    else if (!O)
        p = !0;
    else if (c.v7_partialHydration) {
        let b = e.hydrationData ? e.hydrationData.loaderData : null
          , w = e.hydrationData ? e.hydrationData.errors : null;
        p = A.every(I=>I.route.loader && I.route.loader.hydrate !== !0 && (b && b[I.route.id] !== void 0 || w && w[I.route.id] !== void 0))
    } else
        p = e.hydrationData != null;
    let C, x = {
        historyAction: e.history.action,
        location: e.history.location,
        matches: A,
        initialized: p,
        navigation: jl,
        restoreScrollPosition: e.hydrationData != null ? !1 : null,
        preventScrollReset: !1,
        revalidation: "idle",
        loaderData: e.hydrationData && e.hydrationData.loaderData || {},
        actionData: e.hydrationData && e.hydrationData.actionData || null,
        errors: e.hydrationData && e.hydrationData.errors || h,
        fetchers: new Map,
        blockers: new Map
    }, S = Se.Pop, _ = !1, B, G = !1, ne = new Map, ye = null, pe = !1, Be = !1, dt = [], ft = [], se = new Map, j = 0, $ = -1, K = new Map, re = new Set, de = new Map, qe = new Map, Ae = new Set, Xe = new Map, be = new Map, et = !1;
    function Dn() {
        if (f = e.history.listen(b=>{
            let {action: w, location: I, delta: L} = b;
            if (et) {
                et = !1;
                return
            }
            $i(be.size === 0 || L != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
            let H = da({
                currentLocation: x.location,
                nextLocation: I,
                historyAction: w
            });
            if (H && L != null) {
                et = !0,
                e.history.go(L * -1),
                fi(H, {
                    state: "blocked",
                    location: I,
                    proceed() {
                        fi(H, {
                            state: "proceeding",
                            proceed: void 0,
                            reset: void 0,
                            location: I
                        }),
                        e.history.go(L)
                    },
                    reset() {
                        let te = new Map(x.blockers);
                        te.set(H, dr),
                        Fe({
                            blockers: te
                        })
                    }
                });
                return
            }
            return Jt(w, I)
        }
        ),
        n) {
            lm(t, ne);
            let b = ()=>sm(t, ne);
            t.addEventListener("pagehide", b),
            ye = ()=>t.removeEventListener("pagehide", b)
        }
        return x.initialized || Jt(Se.Pop, x.location, {
            initialHydration: !0
        }),
        C
    }
    function pn() {
        f && f(),
        ye && ye(),
        u.clear(),
        B && B.abort(),
        x.fetchers.forEach((b,w)=>Hn(w)),
        x.blockers.forEach((b,w)=>sa(w))
    }
    function ge(b) {
        return u.add(b),
        ()=>u.delete(b)
    }
    function Fe(b, w) {
        w === void 0 && (w = {}),
        x = Ce({}, x, b);
        let I = []
          , L = [];
        c.v7_fetcherPersist && x.fetchers.forEach((H,te)=>{
            H.state === "idle" && (Ae.has(te) ? L.push(te) : I.push(te))
        }
        ),
        [...u].forEach(H=>H(x, {
            deletedFetchers: L,
            unstable_viewTransitionOpts: w.viewTransitionOpts,
            unstable_flushSync: w.flushSync === !0
        })),
        c.v7_fetcherPersist && (I.forEach(H=>x.fetchers.delete(H)),
        L.forEach(H=>Hn(H)))
    }
    function ct(b, w, I) {
        var L, H;
        let {flushSync: te} = I === void 0 ? {} : I, Q = x.actionData != null && x.navigation.formMethod != null && Bt(x.navigation.formMethod) && x.navigation.state === "loading" && ((L = b.state) == null ? void 0 : L._isRedirect) !== !0, Y;
        w.actionData ? Object.keys(w.actionData).length > 0 ? Y = w.actionData : Y = null : Q ? Y = x.actionData : Y = null;
        let V = w.loaderData ? jc(x.loaderData, w.loaderData, w.matches || [], w.errors) : x.loaderData
          , ie = x.blockers;
        ie.size > 0 && (ie = new Map(ie),
        ie.forEach((ce,Ue)=>ie.set(Ue, dr)));
        let Me = _ === !0 || x.navigation.formMethod != null && Bt(x.navigation.formMethod) && ((H = b.state) == null ? void 0 : H._isRedirect) !== !0;
        l && (o = l,
        l = void 0),
        pe || S === Se.Pop || (S === Se.Push ? e.history.push(b, b.state) : S === Se.Replace && e.history.replace(b, b.state));
        let q;
        if (S === Se.Pop) {
            let ce = ne.get(x.location.pathname);
            ce && ce.has(b.pathname) ? q = {
                currentLocation: x.location,
                nextLocation: b
            } : ne.has(b.pathname) && (q = {
                currentLocation: b,
                nextLocation: x.location
            })
        } else if (G) {
            let ce = ne.get(x.location.pathname);
            ce ? ce.add(b.pathname) : (ce = new Set([b.pathname]),
            ne.set(x.location.pathname, ce)),
            q = {
                currentLocation: x.location,
                nextLocation: b
            }
        }
        Fe(Ce({}, w, {
            actionData: Y,
            loaderData: V,
            historyAction: S,
            location: b,
            initialized: !0,
            navigation: jl,
            revalidation: "idle",
            restoreScrollPosition: ca(b, w.matches || x.matches),
            preventScrollReset: Me,
            blockers: ie
        }), {
            viewTransitionOpts: q,
            flushSync: te === !0
        }),
        S = Se.Pop,
        _ = !1,
        G = !1,
        pe = !1,
        Be = !1,
        dt = [],
        ft = []
    }
    async function gn(b, w) {
        if (typeof b == "number") {
            e.history.go(b);
            return
        }
        let I = zs(x.location, x.matches, s, c.v7_prependBasename, b, c.v7_relativeSplatPath, w == null ? void 0 : w.fromRouteId, w == null ? void 0 : w.relative)
          , {path: L, submission: H, error: te} = Mc(c.v7_normalizeFormMethod, !1, I, w)
          , Q = x.location
          , Y = Kr(x.location, L, w && w.state);
        Y = Ce({}, Y, e.history.encodeLocation(Y));
        let V = w && w.replace != null ? w.replace : void 0
          , ie = Se.Push;
        V === !0 ? ie = Se.Replace : V === !1 || H != null && Bt(H.formMethod) && H.formAction === x.location.pathname + x.location.search && (ie = Se.Replace);
        let Me = w && "preventScrollReset"in w ? w.preventScrollReset === !0 : void 0
          , q = (w && w.unstable_flushSync) === !0
          , ce = da({
            currentLocation: Q,
            nextLocation: Y,
            historyAction: ie
        });
        if (ce) {
            fi(ce, {
                state: "blocked",
                location: Y,
                proceed() {
                    fi(ce, {
                        state: "proceeding",
                        proceed: void 0,
                        reset: void 0,
                        location: Y
                    }),
                    gn(b, w)
                },
                reset() {
                    let Ue = new Map(x.blockers);
                    Ue.set(ce, dr),
                    Fe({
                        blockers: Ue
                    })
                }
            });
            return
        }
        return await Jt(ie, Y, {
            submission: H,
            pendingError: te,
            preventScrollReset: Me,
            replace: w && w.replace,
            enableViewTransition: w && w.unstable_viewTransition,
            flushSync: q
        })
    }
    function Zo() {
        if (di(),
        Fe({
            revalidation: "loading"
        }),
        x.navigation.state !== "submitting") {
            if (x.navigation.state === "idle") {
                Jt(x.historyAction, x.location, {
                    startUninterruptedRevalidation: !0
                });
                return
            }
            Jt(S || x.historyAction, x.navigation.location, {
                overrideNavigation: x.navigation
            })
        }
    }
    async function Jt(b, w, I) {
        B && B.abort(),
        B = null,
        S = b,
        pe = (I && I.startUninterruptedRevalidation) === !0,
        nl(x.location, x.matches),
        _ = (I && I.preventScrollReset) === !0,
        G = (I && I.enableViewTransition) === !0;
        let L = l || o
          , H = I && I.overrideNavigation
          , te = Ri(L, w, s)
          , Q = (I && I.flushSync) === !0;
        if (!te) {
            let Ue = kt(404, {
                pathname: w.pathname
            })
              , {matches: nt, route: _e} = Bc(L);
            Qi(),
            ct(w, {
                matches: nt,
                loaderData: {},
                errors: {
                    [_e.id]: Ue
                }
            }, {
                flushSync: Q
            });
            return
        }
        if (x.initialized && !Be && tm(x.location, w) && !(I && I.submission && Bt(I.submission.formMethod))) {
            ct(w, {
                matches: te
            }, {
                flushSync: Q
            });
            return
        }
        B = new AbortController;
        let Y = cr(e.history, w, B.signal, I && I.submission), V, ie;
        if (I && I.pendingError)
            ie = {
                [Rr(te).route.id]: I.pendingError
            };
        else if (I && I.submission && Bt(I.submission.formMethod)) {
            let Ue = await Yo(Y, w, I.submission, te, {
                replace: I.replace,
                flushSync: Q
            });
            if (Ue.shortCircuited)
                return;
            V = Ue.pendingActionData,
            ie = Ue.pendingActionError,
            H = Bl(w, I.submission),
            Q = !1,
            Y = new Request(Y.url,{
                signal: Y.signal
            })
        }
        let {shortCircuited: Me, loaderData: q, errors: ce} = await Ko(Y, w, te, H, I && I.submission, I && I.fetcherSubmission, I && I.replace, I && I.initialHydration === !0, Q, V, ie);
        Me || (B = null,
        ct(w, Ce({
            matches: te
        }, V ? {
            actionData: V
        } : {}, {
            loaderData: q,
            errors: ce
        })))
    }
    async function Yo(b, w, I, L, H) {
        H === void 0 && (H = {}),
        di();
        let te = am(w, I);
        Fe({
            navigation: te
        }, {
            flushSync: H.flushSync === !0
        });
        let Q, Y = Fs(L, w);
        if (!Y.route.action && !Y.route.lazy)
            Q = {
                type: ke.error,
                error: kt(405, {
                    method: b.method,
                    pathname: w.pathname,
                    routeId: Y.route.id
                })
            };
        else if (Q = await fr("action", b, Y, L, a, r, s, c.v7_relativeSplatPath),
        b.signal.aborted)
            return {
                shortCircuited: !0
            };
        if (Qn(Q)) {
            let V;
            return H && H.replace != null ? V = H.replace : V = Q.location === x.location.pathname + x.location.search,
            await qt(x, Q, {
                submission: I,
                replace: V
            }),
            {
                shortCircuited: !0
            }
        }
        if (Mi(Q)) {
            let V = Rr(L, Y.route.id);
            return (H && H.replace) !== !0 && (S = Se.Push),
            {
                pendingActionData: {},
                pendingActionError: {
                    [V.route.id]: Q.error
                }
            }
        }
        if (Kn(Q))
            throw kt(400, {
                type: "defer-action"
            });
        return {
            pendingActionData: {
                [Y.route.id]: Q.data
            }
        }
    }
    async function Ko(b, w, I, L, H, te, Q, Y, V, ie, Me) {
        let q = L || Bl(w, H)
          , ce = H || te || Fc(q)
          , Ue = l || o
          , [nt,_e] = _c(e.history, x, I, ce, w, c.v7_partialHydration && Y === !0, Be, dt, ft, Ae, de, re, Ue, s, ie, Me);
        if (Qi(J=>!(I && I.some(ee=>ee.route.id === J)) || nt && nt.some(ee=>ee.route.id === J)),
        $ = ++j,
        nt.length === 0 && _e.length === 0) {
            let J = oa();
            return ct(w, Ce({
                matches: I,
                loaderData: {},
                errors: Me || null
            }, ie ? {
                actionData: ie
            } : {}, J ? {
                fetchers: new Map(x.fetchers)
            } : {}), {
                flushSync: V
            }),
            {
                shortCircuited: !0
            }
        }
        if (!pe && (!c.v7_partialHydration || !Y)) {
            _e.forEach(ee=>{
                let Le = x.fetchers.get(ee.key)
                  , Ji = ur(void 0, Le ? Le.data : void 0);
                x.fetchers.set(ee.key, Ji)
            }
            );
            let J = ie || x.actionData;
            Fe(Ce({
                navigation: q
            }, J ? Object.keys(J).length === 0 ? {
                actionData: null
            } : {
                actionData: J
            } : {}, _e.length > 0 ? {
                fetchers: new Map(x.fetchers)
            } : {}), {
                flushSync: V
            })
        }
        _e.forEach(J=>{
            se.has(J.key) && Wt(J.key),
            J.controller && se.set(J.key, J.controller)
        }
        );
        let tn = ()=>_e.forEach(J=>Wt(J.key));
        B && B.signal.addEventListener("abort", tn);
        let {results: ci, loaderResults: mn, fetcherResults: Gt} = await tt(x.matches, I, nt, _e, b);
        if (b.signal.aborted)
            return {
                shortCircuited: !0
            };
        B && B.signal.removeEventListener("abort", tn),
        _e.forEach(J=>se.delete(J.key));
        let g = zc(ci);
        if (g) {
            if (g.idx >= nt.length) {
                let J = _e[g.idx - nt.length].key;
                re.add(J)
            }
            return await qt(x, g.result, {
                replace: Q
            }),
            {
                shortCircuited: !0
            }
        }
        let {loaderData: k, errors: N} = Pc(x, I, nt, mn, Me, _e, Gt, Xe);
        Xe.forEach((J,ee)=>{
            J.subscribe(Le=>{
                (Le || J.done) && Xe.delete(ee)
            }
            )
        }
        ),
        c.v7_partialHydration && Y && x.errors && Object.entries(x.errors).filter(J=>{
            let[ee] = J;
            return !nt.some(Le=>Le.route.id === ee)
        }
        ).forEach(J=>{
            let[ee,Le] = J;
            N = Object.assign(N || {}, {
                [ee]: Le
            })
        }
        );
        let P = oa()
          , Z = la($)
          , U = P || Z || _e.length > 0;
        return Ce({
            loaderData: k,
            errors: N
        }, U ? {
            fetchers: new Map(x.fetchers)
        } : {})
    }
    function Qo(b, w, I, L) {
        if (i)
            throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
        se.has(b) && Wt(b);
        let H = (L && L.unstable_flushSync) === !0
          , te = l || o
          , Q = zs(x.location, x.matches, s, c.v7_prependBasename, I, c.v7_relativeSplatPath, w, L == null ? void 0 : L.relative)
          , Y = Ri(te, Q, s);
        if (!Y) {
            Fn(b, w, kt(404, {
                pathname: Q
            }), {
                flushSync: H
            });
            return
        }
        let {path: V, submission: ie, error: Me} = Mc(c.v7_normalizeFormMethod, !0, Q, L);
        if (Me) {
            Fn(b, w, Me, {
                flushSync: H
            });
            return
        }
        let q = Fs(Y, V);
        if (_ = (L && L.preventScrollReset) === !0,
        ie && Bt(ie.formMethod)) {
            Jo(b, w, V, q, Y, H, ie);
            return
        }
        de.set(b, {
            routeId: w,
            path: V
        }),
        ra(b, w, V, q, Y, H, ie)
    }
    async function Jo(b, w, I, L, H, te, Q) {
        if (di(),
        de.delete(b),
        !L.route.action && !L.route.lazy) {
            let ee = kt(405, {
                method: Q.formMethod,
                pathname: I,
                routeId: w
            });
            Fn(b, w, ee, {
                flushSync: te
            });
            return
        }
        let Y = x.fetchers.get(b);
        Nt(b, om(Q, Y), {
            flushSync: te
        });
        let V = new AbortController
          , ie = cr(e.history, I, V.signal, Q);
        se.set(b, V);
        let Me = j
          , q = await fr("action", ie, L, H, a, r, s, c.v7_relativeSplatPath);
        if (ie.signal.aborted) {
            se.get(b) === V && se.delete(b);
            return
        }
        if (c.v7_fetcherPersist && Ae.has(b)) {
            if (Qn(q) || Mi(q)) {
                Nt(b, xn(void 0));
                return
            }
        } else {
            if (Qn(q))
                if (se.delete(b),
                $ > Me) {
                    Nt(b, xn(void 0));
                    return
                } else
                    return re.add(b),
                    Nt(b, ur(Q)),
                    qt(x, q, {
                        fetcherSubmission: Q
                    });
            if (Mi(q)) {
                Fn(b, w, q.error);
                return
            }
        }
        if (Kn(q))
            throw kt(400, {
                type: "defer-action"
            });
        let ce = x.navigation.location || x.location
          , Ue = cr(e.history, ce, V.signal)
          , nt = l || o
          , _e = x.navigation.state !== "idle" ? Ri(nt, x.navigation.location, s) : x.matches;
        oe(_e, "Didn't find any matches after fetcher action");
        let tn = ++j;
        K.set(b, tn);
        let ci = ur(Q, q.data);
        x.fetchers.set(b, ci);
        let[mn,Gt] = _c(e.history, x, _e, Q, ce, !1, Be, dt, ft, Ae, de, re, nt, s, {
            [L.route.id]: q.data
        }, void 0);
        Gt.filter(ee=>ee.key !== b).forEach(ee=>{
            let Le = ee.key
              , Ji = x.fetchers.get(Le)
              , ua = ur(void 0, Ji ? Ji.data : void 0);
            x.fetchers.set(Le, ua),
            se.has(Le) && Wt(Le),
            ee.controller && se.set(Le, ee.controller)
        }
        ),
        Fe({
            fetchers: new Map(x.fetchers)
        });
        let g = ()=>Gt.forEach(ee=>Wt(ee.key));
        V.signal.addEventListener("abort", g);
        let {results: k, loaderResults: N, fetcherResults: P} = await tt(x.matches, _e, mn, Gt, Ue);
        if (V.signal.aborted)
            return;
        V.signal.removeEventListener("abort", g),
        K.delete(b),
        se.delete(b),
        Gt.forEach(ee=>se.delete(ee.key));
        let Z = zc(k);
        if (Z) {
            if (Z.idx >= mn.length) {
                let ee = Gt[Z.idx - mn.length].key;
                re.add(ee)
            }
            return qt(x, Z.result)
        }
        let {loaderData: U, errors: J} = Pc(x, x.matches, mn, N, void 0, Gt, P, Xe);
        if (x.fetchers.has(b)) {
            let ee = xn(q.data);
            x.fetchers.set(b, ee)
        }
        la(tn),
        x.navigation.state === "loading" && tn > $ ? (oe(S, "Expected pending action"),
        B && B.abort(),
        ct(x.navigation.location, {
            matches: _e,
            loaderData: U,
            errors: J,
            fetchers: new Map(x.fetchers)
        })) : (Fe({
            errors: J,
            loaderData: jc(x.loaderData, U, _e, J),
            fetchers: new Map(x.fetchers)
        }),
        Be = !1)
    }
    async function ra(b, w, I, L, H, te, Q) {
        let Y = x.fetchers.get(b);
        Nt(b, ur(Q, Y ? Y.data : void 0), {
            flushSync: te
        });
        let V = new AbortController
          , ie = cr(e.history, I, V.signal);
        se.set(b, V);
        let Me = j
          , q = await fr("loader", ie, L, H, a, r, s, c.v7_relativeSplatPath);
        if (Kn(q) && (q = await Ph(q, ie.signal, !0) || q),
        se.get(b) === V && se.delete(b),
        !ie.signal.aborted) {
            if (Ae.has(b)) {
                Nt(b, xn(void 0));
                return
            }
            if (Qn(q))
                if ($ > Me) {
                    Nt(b, xn(void 0));
                    return
                } else {
                    re.add(b),
                    await qt(x, q);
                    return
                }
            if (Mi(q)) {
                Fn(b, w, q.error);
                return
            }
            oe(!Kn(q), "Unhandled fetcher deferred data"),
            Nt(b, xn(q.data))
        }
    }
    async function qt(b, w, I) {
        let {submission: L, fetcherSubmission: H, replace: te} = I === void 0 ? {} : I;
        w.revalidate && (Be = !0);
        let Q = Kr(b.location, w.location, {
            _isRedirect: !0
        });
        if (oe(Q, "Expected a location on the redirect navigation"),
        n) {
            let ce = !1;
            if (w.reloadDocument)
                ce = !0;
            else if (_h.test(w.location)) {
                const Ue = e.history.createURL(w.location);
                ce = Ue.origin !== t.location.origin || ia(Ue.pathname, s) == null
            }
            if (ce) {
                te ? t.location.replace(w.location) : t.location.assign(w.location);
                return
            }
        }
        B = null;
        let Y = te === !0 ? Se.Replace : Se.Push
          , {formMethod: V, formAction: ie, formEncType: Me} = b.navigation;
        !L && !H && V && ie && Me && (L = Fc(b.navigation));
        let q = L || H;
        if ($g.has(w.status) && q && Bt(q.formMethod))
            await Jt(Y, Q, {
                submission: Ce({}, q, {
                    formAction: w.location
                }),
                preventScrollReset: _
            });
        else {
            let ce = Bl(Q, L);
            await Jt(Y, Q, {
                overrideNavigation: ce,
                fetcherSubmission: H,
                preventScrollReset: _
            })
        }
    }
    async function tt(b, w, I, L, H) {
        let te = await Promise.all([...I.map(V=>fr("loader", H, V, w, a, r, s, c.v7_relativeSplatPath)), ...L.map(V=>V.matches && V.match && V.controller ? fr("loader", cr(e.history, V.path, V.controller.signal), V.match, V.matches, a, r, s, c.v7_relativeSplatPath) : {
            type: ke.error,
            error: kt(404, {
                pathname: V.path
            })
        })])
          , Q = te.slice(0, I.length)
          , Y = te.slice(I.length);
        return await Promise.all([Dc(b, I, Q, Q.map(()=>H.signal), !1, x.loaderData), Dc(b, L.map(V=>V.match), Y, L.map(V=>V.controller ? V.controller.signal : null), !0)]),
        {
            results: te,
            loaderResults: Q,
            fetcherResults: Y
        }
    }
    function di() {
        Be = !0,
        dt.push(...Qi()),
        de.forEach((b,w)=>{
            se.has(w) && (ft.push(w),
            Wt(w))
        }
        )
    }
    function Nt(b, w, I) {
        I === void 0 && (I = {}),
        x.fetchers.set(b, w),
        Fe({
            fetchers: new Map(x.fetchers)
        }, {
            flushSync: (I && I.flushSync) === !0
        })
    }
    function Fn(b, w, I, L) {
        L === void 0 && (L = {});
        let H = Rr(x.matches, w);
        Hn(b),
        Fe({
            errors: {
                [H.route.id]: I
            },
            fetchers: new Map(x.fetchers)
        }, {
            flushSync: (L && L.flushSync) === !0
        })
    }
    function aa(b) {
        return c.v7_fetcherPersist && (qe.set(b, (qe.get(b) || 0) + 1),
        Ae.has(b) && Ae.delete(b)),
        x.fetchers.get(b) || Zg
    }
    function Hn(b) {
        let w = x.fetchers.get(b);
        se.has(b) && !(w && w.state === "loading" && K.has(b)) && Wt(b),
        de.delete(b),
        K.delete(b),
        re.delete(b),
        Ae.delete(b),
        x.fetchers.delete(b)
    }
    function qo(b) {
        if (c.v7_fetcherPersist) {
            let w = (qe.get(b) || 0) - 1;
            w <= 0 ? (qe.delete(b),
            Ae.add(b)) : qe.set(b, w)
        } else
            Hn(b);
        Fe({
            fetchers: new Map(x.fetchers)
        })
    }
    function Wt(b) {
        let w = se.get(b);
        oe(w, "Expected fetch controller: " + b),
        w.abort(),
        se.delete(b)
    }
    function en(b) {
        for (let w of b) {
            let I = aa(w)
              , L = xn(I.data);
            x.fetchers.set(w, L)
        }
    }
    function oa() {
        let b = []
          , w = !1;
        for (let I of re) {
            let L = x.fetchers.get(I);
            oe(L, "Expected fetcher: " + I),
            L.state === "loading" && (re.delete(I),
            b.push(I),
            w = !0)
        }
        return en(b),
        w
    }
    function la(b) {
        let w = [];
        for (let[I,L] of K)
            if (L < b) {
                let H = x.fetchers.get(I);
                oe(H, "Expected fetcher: " + I),
                H.state === "loading" && (Wt(I),
                K.delete(I),
                w.push(I))
            }
        return en(w),
        w.length > 0
    }
    function el(b, w) {
        let I = x.blockers.get(b) || dr;
        return be.get(b) !== w && be.set(b, w),
        I
    }
    function sa(b) {
        x.blockers.delete(b),
        be.delete(b)
    }
    function fi(b, w) {
        let I = x.blockers.get(b) || dr;
        oe(I.state === "unblocked" && w.state === "blocked" || I.state === "blocked" && w.state === "blocked" || I.state === "blocked" && w.state === "proceeding" || I.state === "blocked" && w.state === "unblocked" || I.state === "proceeding" && w.state === "unblocked", "Invalid blocker state transition: " + I.state + " -> " + w.state);
        let L = new Map(x.blockers);
        L.set(b, w),
        Fe({
            blockers: L
        })
    }
    function da(b) {
        let {currentLocation: w, nextLocation: I, historyAction: L} = b;
        if (be.size === 0)
            return;
        be.size > 1 && $i(!1, "A router only supports one blocker at a time");
        let H = Array.from(be.entries())
          , [te,Q] = H[H.length - 1]
          , Y = x.blockers.get(te);
        if (!(Y && Y.state === "proceeding") && Q({
            currentLocation: w,
            nextLocation: I,
            historyAction: L
        }))
            return te
    }
    function Qi(b) {
        let w = [];
        return Xe.forEach((I,L)=>{
            (!b || b(L)) && (I.cancel(),
            w.push(L),
            Xe.delete(L))
        }
        ),
        w
    }
    function tl(b, w, I) {
        if (y = b,
        v = w,
        T = I || null,
        !E && x.navigation === jl) {
            E = !0;
            let L = ca(x.location, x.matches);
            L != null && Fe({
                restoreScrollPosition: L
            })
        }
        return ()=>{
            y = null,
            v = null,
            T = null
        }
    }
    function fa(b, w) {
        return T && T(b, w.map(L=>Eg(L, x.loaderData))) || b.key
    }
    function nl(b, w) {
        if (y && v) {
            let I = fa(b, w);
            y[I] = v()
        }
    }
    function ca(b, w) {
        if (y) {
            let I = fa(b, w)
              , L = y[I];
            if (typeof L == "number")
                return L
        }
        return null
    }
    function il(b) {
        a = {},
        l = Bs(b, r, void 0, a)
    }
    return C = {
        get basename() {
            return s
        },
        get future() {
            return c
        },
        get state() {
            return x
        },
        get routes() {
            return o
        },
        get window() {
            return t
        },
        initialize: Dn,
        subscribe: ge,
        enableScrollRestoration: tl,
        navigate: gn,
        fetch: Qo,
        revalidate: Zo,
        createHref: b=>e.history.createHref(b),
        encodeLocation: b=>e.history.encodeLocation(b),
        getFetcher: aa,
        deleteFetcher: qo,
        dispose: pn,
        getBlocker: el,
        deleteBlocker: sa,
        _internalFetchControllers: se,
        _internalActiveDeferreds: Xe,
        _internalSetRoutes: il
    },
    C
}
function Qg(e) {
    return e != null && ("formData"in e && e.formData != null || "body"in e && e.body !== void 0)
}
function zs(e, t, n, i, r, a, o, l) {
    let s, c;
    if (o) {
        s = [];
        for (let u of t)
            if (s.push(u),
            u.route.id === o) {
                c = u;
                break
            }
    } else
        s = t,
        c = t[t.length - 1];
    let f = zg(r || ".", Bg(s, a), ia(e.pathname, n) || e.pathname, l === "path");
    return r == null && (f.search = e.search,
    f.hash = e.hash),
    (r == null || r === "" || r === ".") && c && c.route.index && !Yd(f.search) && (f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"),
    i && n !== "/" && (f.pathname = f.pathname === "/" ? n : ei([n, f.pathname])),
    na(f)
}
function Mc(e, t, n, i) {
    if (!i || !Qg(i))
        return {
            path: n
        };
    if (i.formMethod && !rm(i.formMethod))
        return {
            path: n,
            error: kt(405, {
                method: i.formMethod
            })
        };
    let r = ()=>({
        path: n,
        error: kt(400, {
            type: "invalid-body"
        })
    })
      , a = i.formMethod || "get"
      , o = e ? a.toUpperCase() : a.toLowerCase()
      , l = Lh(n);
    if (i.body !== void 0) {
        if (i.formEncType === "text/plain") {
            if (!Bt(o))
                return r();
            let y = typeof i.body == "string" ? i.body : i.body instanceof FormData || i.body instanceof URLSearchParams ? Array.from(i.body.entries()).reduce((T,v)=>{
                let[E,A] = v;
                return "" + T + E + "=" + A + `
`
            }
            , "") : String(i.body);
            return {
                path: n,
                submission: {
                    formMethod: o,
                    formAction: l,
                    formEncType: i.formEncType,
                    formData: void 0,
                    json: void 0,
                    text: y
                }
            }
        } else if (i.formEncType === "application/json") {
            if (!Bt(o))
                return r();
            try {
                let y = typeof i.body == "string" ? JSON.parse(i.body) : i.body;
                return {
                    path: n,
                    submission: {
                        formMethod: o,
                        formAction: l,
                        formEncType: i.formEncType,
                        formData: void 0,
                        json: y,
                        text: void 0
                    }
                }
            } catch {
                return r()
            }
        }
    }
    oe(typeof FormData == "function", "FormData is not available in this environment");
    let s, c;
    if (i.formData)
        s = Ds(i.formData),
        c = i.formData;
    else if (i.body instanceof FormData)
        s = Ds(i.body),
        c = i.body;
    else if (i.body instanceof URLSearchParams)
        s = i.body,
        c = Lc(s);
    else if (i.body == null)
        s = new URLSearchParams,
        c = new FormData;
    else
        try {
            s = new URLSearchParams(i.body),
            c = Lc(s)
        } catch {
            return r()
        }
    let f = {
        formMethod: o,
        formAction: l,
        formEncType: i && i.formEncType || "application/x-www-form-urlencoded",
        formData: c,
        json: void 0,
        text: void 0
    };
    if (Bt(f.formMethod))
        return {
            path: n,
            submission: f
        };
    let u = hn(n);
    return t && u.search && Yd(u.search) && s.append("index", ""),
    u.search = "?" + s,
    {
        path: na(u),
        submission: f
    }
}
function Jg(e, t) {
    let n = e;
    if (t) {
        let i = e.findIndex(r=>r.route.id === t);
        i >= 0 && (n = e.slice(0, i))
    }
    return n
}
function _c(e, t, n, i, r, a, o, l, s, c, f, u, y, T, v, E) {
    let A = E ? Object.values(E)[0] : v ? Object.values(v)[0] : void 0
      , h = e.createURL(t.location)
      , p = e.createURL(r)
      , m = E ? Object.keys(E)[0] : void 0
      , C = Jg(n, m).filter((S,_)=>{
        let {route: B} = S;
        if (B.lazy)
            return !0;
        if (B.loader == null)
            return !1;
        if (a)
            return B.loader.hydrate ? !0 : t.loaderData[B.id] === void 0 && (!t.errors || t.errors[B.id] === void 0);
        if (qg(t.loaderData, t.matches[_], S) || l.some(ye=>ye === S.route.id))
            return !0;
        let G = t.matches[_]
          , ne = S;
        return Nc(S, Ce({
            currentUrl: h,
            currentParams: G.params,
            nextUrl: p,
            nextParams: ne.params
        }, i, {
            actionResult: A,
            defaultShouldRevalidate: o || h.pathname + h.search === p.pathname + p.search || h.search !== p.search || Uh(G, ne)
        }))
    }
    )
      , x = [];
    return f.forEach((S,_)=>{
        if (a || !n.some(pe=>pe.route.id === S.routeId) || c.has(_))
            return;
        let B = Ri(y, S.path, T);
        if (!B) {
            x.push({
                key: _,
                routeId: S.routeId,
                path: S.path,
                matches: null,
                match: null,
                controller: null
            });
            return
        }
        let G = t.fetchers.get(_)
          , ne = Fs(B, S.path)
          , ye = !1;
        u.has(_) ? ye = !1 : s.includes(_) ? ye = !0 : G && G.state !== "idle" && G.data === void 0 ? ye = o : ye = Nc(ne, Ce({
            currentUrl: h,
            currentParams: t.matches[t.matches.length - 1].params,
            nextUrl: p,
            nextParams: n[n.length - 1].params
        }, i, {
            actionResult: A,
            defaultShouldRevalidate: o
        })),
        ye && x.push({
            key: _,
            routeId: S.routeId,
            path: S.path,
            matches: B,
            match: ne,
            controller: new AbortController
        })
    }
    ),
    [C, x]
}
function qg(e, t, n) {
    let i = !t || n.route.id !== t.route.id
      , r = e[n.route.id] === void 0;
    return i || r
}
function Uh(e, t) {
    let n = e.route.path;
    return e.pathname !== t.pathname || n != null && n.endsWith("*") && e.params["*"] !== t.params["*"]
}
function Nc(e, t) {
    if (e.route.shouldRevalidate) {
        let n = e.route.shouldRevalidate(t);
        if (typeof n == "boolean")
            return n
    }
    return t.defaultShouldRevalidate
}
async function Uc(e, t, n) {
    if (!e.lazy)
        return;
    let i = await e.lazy();
    if (!e.lazy)
        return;
    let r = n[e.id];
    oe(r, "No route found in manifest");
    let a = {};
    for (let o in i) {
        let s = r[o] !== void 0 && o !== "hasErrorBoundary";
        $i(!s, 'Route "' + r.id + '" has a static property "' + o + '" defined but its lazy function is also returning a value for this property. ' + ('The lazy route property "' + o + '" will be ignored.')),
        !s && !vg.has(o) && (a[o] = i[o])
    }
    Object.assign(r, a),
    Object.assign(r, Ce({}, t(r), {
        lazy: void 0
    }))
}
async function fr(e, t, n, i, r, a, o, l, s) {
    s === void 0 && (s = {});
    let c, f, u, y = E=>{
        let A, h = new Promise((p,m)=>A = m);
        return u = ()=>A(),
        t.signal.addEventListener("abort", u),
        Promise.race([E({
            request: t,
            params: n.params,
            context: s.requestContext
        }), h])
    }
    ;
    try {
        let E = n.route[e];
        if (n.route.lazy)
            if (E) {
                let A, h = await Promise.all([y(E).catch(p=>{
                    A = p
                }
                ), Uc(n.route, a, r)]);
                if (A)
                    throw A;
                f = h[0]
            } else if (await Uc(n.route, a, r),
            E = n.route[e],
            E)
                f = await y(E);
            else if (e === "action") {
                let A = new URL(t.url)
                  , h = A.pathname + A.search;
                throw kt(405, {
                    method: t.method,
                    pathname: h,
                    routeId: n.route.id
                })
            } else
                return {
                    type: ke.data,
                    data: void 0
                };
        else if (E)
            f = await y(E);
        else {
            let A = new URL(t.url)
              , h = A.pathname + A.search;
            throw kt(404, {
                pathname: h
            })
        }
        oe(f !== void 0, "You defined " + (e === "action" ? "an action" : "a loader") + " for route " + ('"' + n.route.id + "\" but didn't return anything from your `" + e + "` ") + "function. Please return a value or `null`.")
    } catch (E) {
        c = ke.error,
        f = E
    } finally {
        u && t.signal.removeEventListener("abort", u)
    }
    if (im(f)) {
        let E = f.status;
        if (Xg.has(E)) {
            let h = f.headers.get("Location");
            if (oe(h, "Redirects returned/thrown from loaders/actions must have a Location header"),
            !_h.test(h))
                h = zs(new URL(t.url), i.slice(0, i.indexOf(n) + 1), o, !0, h, l);
            else if (!s.isStaticRequest) {
                let p = new URL(t.url)
                  , m = h.startsWith("//") ? new URL(p.protocol + h) : new URL(h)
                  , O = ia(m.pathname, o) != null;
                m.origin === p.origin && O && (h = m.pathname + m.search + m.hash)
            }
            if (s.isStaticRequest)
                throw f.headers.set("Location", h),
                f;
            return {
                type: ke.redirect,
                status: E,
                location: h,
                revalidate: f.headers.get("X-Remix-Revalidate") !== null,
                reloadDocument: f.headers.get("X-Remix-Reload-Document") !== null
            }
        }
        if (s.isRouteRequest)
            throw {
                type: c === ke.error ? ke.error : ke.data,
                response: f
            };
        let A;
        try {
            let h = f.headers.get("Content-Type");
            h && /\bapplication\/json\b/.test(h) ? f.body == null ? A = null : A = await f.json() : A = await f.text()
        } catch (h) {
            return {
                type: ke.error,
                error: h
            }
        }
        return c === ke.error ? {
            type: c,
            error: new Zd(E,f.statusText,A),
            headers: f.headers
        } : {
            type: ke.data,
            data: A,
            statusCode: f.status,
            headers: f.headers
        }
    }
    if (c === ke.error)
        return {
            type: c,
            error: f
        };
    if (nm(f)) {
        var T, v;
        return {
            type: ke.deferred,
            deferredData: f,
            statusCode: (T = f.init) == null ? void 0 : T.status,
            headers: ((v = f.init) == null ? void 0 : v.headers) && new Headers(f.init.headers)
        }
    }
    return {
        type: ke.data,
        data: f
    }
}
function cr(e, t, n, i) {
    let r = e.createURL(Lh(t)).toString()
      , a = {
        signal: n
    };
    if (i && Bt(i.formMethod)) {
        let {formMethod: o, formEncType: l} = i;
        a.method = o.toUpperCase(),
        l === "application/json" ? (a.headers = new Headers({
            "Content-Type": l
        }),
        a.body = JSON.stringify(i.json)) : l === "text/plain" ? a.body = i.text : l === "application/x-www-form-urlencoded" && i.formData ? a.body = Ds(i.formData) : a.body = i.formData
    }
    return new Request(r,a)
}
function Ds(e) {
    let t = new URLSearchParams;
    for (let[n,i] of e.entries())
        t.append(n, typeof i == "string" ? i : i.name);
    return t
}
function Lc(e) {
    let t = new FormData;
    for (let[n,i] of e.entries())
        t.append(n, i);
    return t
}
function em(e, t, n, i, r) {
    let a = {}, o = null, l, s = !1, c = {};
    return n.forEach((f,u)=>{
        let y = t[u].route.id;
        if (oe(!Qn(f), "Cannot handle redirect results in processLoaderData"),
        Mi(f)) {
            let T = Rr(e, y)
              , v = f.error;
            i && (v = Object.values(i)[0],
            i = void 0),
            o = o || {},
            o[T.route.id] == null && (o[T.route.id] = v),
            a[y] = void 0,
            s || (s = !0,
            l = Rh(f.error) ? f.error.status : 500),
            f.headers && (c[y] = f.headers)
        } else
            Kn(f) ? (r.set(y, f.deferredData),
            a[y] = f.deferredData.data) : a[y] = f.data,
            f.statusCode != null && f.statusCode !== 200 && !s && (l = f.statusCode),
            f.headers && (c[y] = f.headers)
    }
    ),
    i && (o = i,
    a[Object.keys(i)[0]] = void 0),
    {
        loaderData: a,
        errors: o,
        statusCode: l || 200,
        loaderHeaders: c
    }
}
function Pc(e, t, n, i, r, a, o, l) {
    let {loaderData: s, errors: c} = em(t, n, i, r, l);
    for (let f = 0; f < a.length; f++) {
        let {key: u, match: y, controller: T} = a[f];
        oe(o !== void 0 && o[f] !== void 0, "Did not find corresponding fetcher result");
        let v = o[f];
        if (!(T && T.signal.aborted))
            if (Mi(v)) {
                let E = Rr(e.matches, y == null ? void 0 : y.route.id);
                c && c[E.route.id] || (c = Ce({}, c, {
                    [E.route.id]: v.error
                })),
                e.fetchers.delete(u)
            } else if (Qn(v))
                oe(!1, "Unhandled fetcher revalidation redirect");
            else if (Kn(v))
                oe(!1, "Unhandled fetcher deferred data");
            else {
                let E = xn(v.data);
                e.fetchers.set(u, E)
            }
    }
    return {
        loaderData: s,
        errors: c
    }
}
function jc(e, t, n, i) {
    let r = Ce({}, t);
    for (let a of n) {
        let o = a.route.id;
        if (t.hasOwnProperty(o) ? t[o] !== void 0 && (r[o] = t[o]) : e[o] !== void 0 && a.route.loader && (r[o] = e[o]),
        i && i.hasOwnProperty(o))
            break
    }
    return r
}
function Rr(e, t) {
    return (t ? e.slice(0, e.findIndex(i=>i.route.id === t) + 1) : [...e]).reverse().find(i=>i.route.hasErrorBoundary === !0) || e[0]
}
function Bc(e) {
    let t = e.length === 1 ? e[0] : e.find(n=>n.index || !n.path || n.path === "/") || {
        id: "__shim-error-route__"
    };
    return {
        matches: [{
            params: {},
            pathname: "",
            pathnameBase: "",
            route: t
        }],
        route: t
    }
}
function kt(e, t) {
    let {pathname: n, routeId: i, method: r, type: a} = t === void 0 ? {} : t
      , o = "Unknown Server Error"
      , l = "Unknown @remix-run/router error";
    return e === 400 ? (o = "Bad Request",
    r && n && i ? l = "You made a " + r + ' request to "' + n + '" but ' + ('did not provide a `loader` for route "' + i + '", ') + "so there is no way to handle the request." : a === "defer-action" ? l = "defer() is not supported in actions" : a === "invalid-body" && (l = "Unable to encode submission body")) : e === 403 ? (o = "Forbidden",
    l = 'Route "' + i + '" does not match URL "' + n + '"') : e === 404 ? (o = "Not Found",
    l = 'No route matches URL "' + n + '"') : e === 405 && (o = "Method Not Allowed",
    r && n && i ? l = "You made a " + r.toUpperCase() + ' request to "' + n + '" but ' + ('did not provide an `action` for route "' + i + '", ') + "so there is no way to handle the request." : r && (l = 'Invalid request method "' + r.toUpperCase() + '"')),
    new Zd(e || 500,o,new Error(l),!0)
}
function zc(e) {
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if (Qn(n))
            return {
                result: n,
                idx: t
            }
    }
}
function Lh(e) {
    let t = typeof e == "string" ? hn(e) : e;
    return na(Ce({}, t, {
        hash: ""
    }))
}
function tm(e, t) {
    return e.pathname !== t.pathname || e.search !== t.search ? !1 : e.hash === "" ? t.hash !== "" : e.hash === t.hash ? !0 : t.hash !== ""
}
function Kn(e) {
    return e.type === ke.deferred
}
function Mi(e) {
    return e.type === ke.error
}
function Qn(e) {
    return (e && e.type) === ke.redirect
}
function nm(e) {
    let t = e;
    return t && typeof t == "object" && typeof t.data == "object" && typeof t.subscribe == "function" && typeof t.cancel == "function" && typeof t.resolveData == "function"
}
function im(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.headers == "object" && typeof e.body < "u"
}
function rm(e) {
    return Vg.has(e.toLowerCase())
}
function Bt(e) {
    return Wg.has(e.toLowerCase())
}
async function Dc(e, t, n, i, r, a) {
    for (let o = 0; o < n.length; o++) {
        let l = n[o]
          , s = t[o];
        if (!s)
            continue;
        let c = e.find(u=>u.route.id === s.route.id)
          , f = c != null && !Uh(c, s) && (a && a[s.route.id]) !== void 0;
        if (Kn(l) && (r || f)) {
            let u = i[o];
            oe(u, "Expected an AbortSignal for revalidating fetcher deferred result"),
            await Ph(l, u, r).then(y=>{
                y && (n[o] = y || n[o])
            }
            )
        }
    }
}
async function Ph(e, t, n) {
    if (n === void 0 && (n = !1),
    !await e.deferredData.resolveData(t)) {
        if (n)
            try {
                return {
                    type: ke.data,
                    data: e.deferredData.unwrappedData
                }
            } catch (r) {
                return {
                    type: ke.error,
                    error: r
                }
            }
        return {
            type: ke.data,
            data: e.deferredData.data
        }
    }
}
function Yd(e) {
    return new URLSearchParams(e).getAll("index").some(t=>t === "")
}
function Fs(e, t) {
    let n = typeof t == "string" ? hn(t).search : t.search;
    if (e[e.length - 1].route.index && Yd(n || ""))
        return e[e.length - 1];
    let i = Sh(e);
    return i[i.length - 1]
}
function Fc(e) {
    let {formMethod: t, formAction: n, formEncType: i, text: r, formData: a, json: o} = e;
    if (!(!t || !n || !i)) {
        if (r != null)
            return {
                formMethod: t,
                formAction: n,
                formEncType: i,
                formData: void 0,
                json: void 0,
                text: r
            };
        if (a != null)
            return {
                formMethod: t,
                formAction: n,
                formEncType: i,
                formData: a,
                json: void 0,
                text: void 0
            };
        if (o !== void 0)
            return {
                formMethod: t,
                formAction: n,
                formEncType: i,
                formData: void 0,
                json: o,
                text: void 0
            }
    }
}
function Bl(e, t) {
    return t ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text
    } : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0
    }
}
function am(e, t) {
    return {
        state: "submitting",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text
    }
}
function ur(e, t) {
    return e ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t
    } : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t
    }
}
function om(e, t) {
    return {
        state: "submitting",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t ? t.data : void 0
    }
}
function xn(e) {
    return {
        state: "idle",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: e
    }
}
function lm(e, t) {
    try {
        let n = e.sessionStorage.getItem(Nh);
        if (n) {
            let i = JSON.parse(n);
            for (let[r,a] of Object.entries(i || {}))
                a && Array.isArray(a) && t.set(r, new Set(a || []))
        }
    } catch {}
}
function sm(e, t) {
    if (t.size > 0) {
        let n = {};
        for (let[i,r] of t)
            n[i] = [...r];
        try {
            e.sessionStorage.setItem(Nh, JSON.stringify(n))
        } catch (i) {
            $i(!1, "Failed to save applied view transitions in sessionStorage (" + i + ").")
        }
    }
}
/**
 * React Router v6.22.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ao() {
    return Ao = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
        }
        return e
    }
    ,
    Ao.apply(this, arguments)
}
const jh = R.createContext(null)
  , Bh = R.createContext(null)
  , zh = R.createContext(null)
  , Xo = R.createContext(null)
  , $o = R.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , Dh = R.createContext(null);
function Kd() {
    return R.useContext(Xo) != null
}
function dm() {
    return Kd() || oe(!1),
    R.useContext(Xo).location
}
function fm(e, t, n, i) {
    Kd() || oe(!1);
    let {navigator: r} = R.useContext(zh)
      , {matches: a} = R.useContext($o)
      , o = a[a.length - 1]
      , l = o ? o.params : {};
    o && o.pathname;
    let s = o ? o.pathnameBase : "/";
    o && o.route;
    let c = dm(), f;
    if (t) {
        var u;
        let A = typeof t == "string" ? hn(t) : t;
        s === "/" || (u = A.pathname) != null && u.startsWith(s) || oe(!1),
        f = A
    } else
        f = c;
    let y = f.pathname || "/"
      , T = y;
    if (s !== "/") {
        let A = s.replace(/^\//, "").split("/");
        T = "/" + y.replace(/^\//, "").split("/").slice(A.length).join("/")
    }
    let v = Ri(e, {
        pathname: T
    })
      , E = gm(v && v.map(A=>Object.assign({}, A, {
        params: Object.assign({}, l, A.params),
        pathname: ei([s, r.encodeLocation ? r.encodeLocation(A.pathname).pathname : A.pathname]),
        pathnameBase: A.pathnameBase === "/" ? s : ei([s, r.encodeLocation ? r.encodeLocation(A.pathnameBase).pathname : A.pathnameBase])
    })), a, n, i);
    return t && E ? R.createElement(Xo.Provider, {
        value: {
            location: Ao({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, f),
            navigationType: Se.Pop
        }
    }, E) : E
}
function cm() {
    let e = Tm()
      , t = Rh(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , r = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    }
      , a = null;
    return R.createElement(R.Fragment, null, R.createElement("h2", null, "Unexpected Application Error!"), R.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? R.createElement("pre", {
        style: r
    }, n) : null, a)
}
const um = R.createElement(cm, null);
class hm extends R.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? R.createElement($o.Provider, {
            value: this.props.routeContext
        }, R.createElement(Dh.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function pm(e) {
    let {routeContext: t, match: n, children: i} = e
      , r = R.useContext(jh);
    return r && r.static && r.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (r.staticContext._deepestRenderedBoundaryId = n.route.id),
    R.createElement($o.Provider, {
        value: t
    }, i)
}
function gm(e, t, n, i) {
    var r;
    if (t === void 0 && (t = []),
    n === void 0 && (n = null),
    i === void 0 && (i = null),
    e == null) {
        var a;
        if ((a = n) != null && a.errors)
            e = n.matches;
        else
            return null
    }
    let o = e
      , l = (r = n) == null ? void 0 : r.errors;
    if (l != null) {
        let f = o.findIndex(u=>u.route.id && (l == null ? void 0 : l[u.route.id]));
        f >= 0 || oe(!1),
        o = o.slice(0, Math.min(o.length, f + 1))
    }
    let s = !1
      , c = -1;
    if (n && i && i.v7_partialHydration)
        for (let f = 0; f < o.length; f++) {
            let u = o[f];
            if ((u.route.HydrateFallback || u.route.hydrateFallbackElement) && (c = f),
            u.route.id) {
                let {loaderData: y, errors: T} = n
                  , v = u.route.loader && y[u.route.id] === void 0 && (!T || T[u.route.id] === void 0);
                if (u.route.lazy || v) {
                    s = !0,
                    c >= 0 ? o = o.slice(0, c + 1) : o = [o[0]];
                    break
                }
            }
        }
    return o.reduceRight((f,u,y)=>{
        let T, v = !1, E = null, A = null;
        n && (T = l && u.route.id ? l[u.route.id] : void 0,
        E = u.route.errorElement || um,
        s && (c < 0 && y === 0 ? (vm("route-fallback", !1),
        v = !0,
        A = null) : c === y && (v = !0,
        A = u.route.hydrateFallbackElement || null)));
        let h = t.concat(o.slice(0, y + 1))
          , p = ()=>{
            let m;
            return T ? m = E : v ? m = A : u.route.Component ? m = R.createElement(u.route.Component, null) : u.route.element ? m = u.route.element : m = f,
            R.createElement(pm, {
                match: u,
                routeContext: {
                    outlet: f,
                    matches: h,
                    isDataRoute: n != null
                },
                children: m
            })
        }
        ;
        return n && (u.route.ErrorBoundary || u.route.errorElement || y === 0) ? R.createElement(hm, {
            location: n.location,
            revalidation: n.revalidation,
            component: E,
            error: T,
            children: p(),
            routeContext: {
                outlet: null,
                matches: h,
                isDataRoute: !0
            }
        }) : p()
    }
    , null)
}
var Hs = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}(Hs || {});
function mm(e) {
    let t = R.useContext(Bh);
    return t || oe(!1),
    t
}
function ym(e) {
    let t = R.useContext($o);
    return t || oe(!1),
    t
}
function xm(e) {
    let t = ym()
      , n = t.matches[t.matches.length - 1];
    return n.route.id || oe(!1),
    n.route.id
}
function Tm() {
    var e;
    let t = R.useContext(Dh)
      , n = mm(Hs.UseRouteError)
      , i = xm(Hs.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[i]
}
const Hc = {};
function vm(e, t, n) {
    !t && !Hc[e] && (Hc[e] = !0)
}
function bm(e) {
    let {basename: t="/", children: n=null, location: i, navigationType: r=Se.Pop, navigator: a, static: o=!1, future: l} = e;
    Kd() && oe(!1);
    let s = t.replace(/^\/*/, "/")
      , c = R.useMemo(()=>({
        basename: s,
        navigator: a,
        static: o,
        future: Ao({
            v7_relativeSplatPath: !1
        }, l)
    }), [s, l, a, o]);
    typeof i == "string" && (i = hn(i));
    let {pathname: f="/", search: u="", hash: y="", state: T=null, key: v="default"} = i
      , E = R.useMemo(()=>{
        let A = ia(f, s);
        return A == null ? null : {
            location: {
                pathname: A,
                search: u,
                hash: y,
                state: T,
                key: v
            },
            navigationType: r
        }
    }
    , [s, f, u, y, T, v, r]);
    return E == null ? null : R.createElement(zh.Provider, {
        value: c
    }, R.createElement(Xo.Provider, {
        children: n,
        value: E
    }))
}
new Promise(()=>{}
);
function Em(e) {
    let t = {
        hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null
    };
    return e.Component && Object.assign(t, {
        element: R.createElement(e.Component),
        Component: void 0
    }),
    e.HydrateFallback && Object.assign(t, {
        hydrateFallbackElement: R.createElement(e.HydrateFallback),
        HydrateFallback: void 0
    }),
    e.ErrorBoundary && Object.assign(t, {
        errorElement: R.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0
    }),
    t
}
/**
 * React Router DOM v6.22.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ko() {
    return ko = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
        }
        return e
    }
    ,
    ko.apply(this, arguments)
}
const Om = "6";
try {
    window.__reactRouterVersion = Om
} catch {}
function wm(e, t) {
    return Kg({
        basename: t == null ? void 0 : t.basename,
        future: ko({}, t == null ? void 0 : t.future, {
            v7_prependBasename: !0
        }),
        history: yg({
            window: t == null ? void 0 : t.window
        }),
        hydrationData: (t == null ? void 0 : t.hydrationData) || Am(),
        routes: e,
        mapRouteProperties: Em,
        window: t == null ? void 0 : t.window
    }).initialize()
}
function Am() {
    var e;
    let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
    return t && t.errors && (t = ko({}, t, {
        errors: km(t.errors)
    })),
    t
}
function km(e) {
    if (!e)
        return null;
    let t = Object.entries(e)
      , n = {};
    for (let[i,r] of t)
        if (r && r.__type === "RouteErrorResponse")
            n[i] = new Zd(r.status,r.statusText,r.data,r.internal === !0);
        else if (r && r.__type === "Error") {
            if (r.__subType) {
                let a = window[r.__subType];
                if (typeof a == "function")
                    try {
                        let o = new a(r.message);
                        o.stack = "",
                        n[i] = o
                    } catch {}
            }
            if (n[i] == null) {
                let a = new Error(r.message);
                a.stack = "",
                n[i] = a
            }
        } else
            n[i] = r;
    return n
}
const Im = R.createContext({
    isTransitioning: !1
})
  , Cm = R.createContext(new Map)
  , Sm = "startTransition"
  , Wc = n4[Sm]
  , Rm = "flushSync"
  , Gc = h2[Rm];
function Mm(e) {
    Wc ? Wc(e) : e()
}
function hr(e) {
    Gc ? Gc(e) : e()
}
class _m {
    constructor() {
        this.status = "pending",
        this.promise = new Promise((t,n)=>{
            this.resolve = i=>{
                this.status === "pending" && (this.status = "resolved",
                t(i))
            }
            ,
            this.reject = i=>{
                this.status === "pending" && (this.status = "rejected",
                n(i))
            }
        }
        )
    }
}
function Nm(e) {
    let {fallbackElement: t, router: n, future: i} = e
      , [r,a] = R.useState(n.state)
      , [o,l] = R.useState()
      , [s,c] = R.useState({
        isTransitioning: !1
    })
      , [f,u] = R.useState()
      , [y,T] = R.useState()
      , [v,E] = R.useState()
      , A = R.useRef(new Map)
      , {v7_startTransition: h} = i || {}
      , p = R.useCallback(S=>{
        h ? Mm(S) : S()
    }
    , [h])
      , m = R.useCallback((S,_)=>{
        let {deletedFetchers: B, unstable_flushSync: G, unstable_viewTransitionOpts: ne} = _;
        B.forEach(pe=>A.current.delete(pe)),
        S.fetchers.forEach((pe,Be)=>{
            pe.data !== void 0 && A.current.set(Be, pe.data)
        }
        );
        let ye = n.window == null || typeof n.window.document.startViewTransition != "function";
        if (!ne || ye) {
            G ? hr(()=>a(S)) : p(()=>a(S));
            return
        }
        if (G) {
            hr(()=>{
                y && (f && f.resolve(),
                y.skipTransition()),
                c({
                    isTransitioning: !0,
                    flushSync: !0,
                    currentLocation: ne.currentLocation,
                    nextLocation: ne.nextLocation
                })
            }
            );
            let pe = n.window.document.startViewTransition(()=>{
                hr(()=>a(S))
            }
            );
            pe.finished.finally(()=>{
                hr(()=>{
                    u(void 0),
                    T(void 0),
                    l(void 0),
                    c({
                        isTransitioning: !1
                    })
                }
                )
            }
            ),
            hr(()=>T(pe));
            return
        }
        y ? (f && f.resolve(),
        y.skipTransition(),
        E({
            state: S,
            currentLocation: ne.currentLocation,
            nextLocation: ne.nextLocation
        })) : (l(S),
        c({
            isTransitioning: !0,
            flushSync: !1,
            currentLocation: ne.currentLocation,
            nextLocation: ne.nextLocation
        }))
    }
    , [n.window, y, f, A, p]);
    R.useLayoutEffect(()=>n.subscribe(m), [n, m]),
    R.useEffect(()=>{
        s.isTransitioning && !s.flushSync && u(new _m)
    }
    , [s]),
    R.useEffect(()=>{
        if (f && o && n.window) {
            let S = o
              , _ = f.promise
              , B = n.window.document.startViewTransition(async()=>{
                p(()=>a(S)),
                await _
            }
            );
            B.finished.finally(()=>{
                u(void 0),
                T(void 0),
                l(void 0),
                c({
                    isTransitioning: !1
                })
            }
            ),
            T(B)
        }
    }
    , [p, o, f, n.window]),
    R.useEffect(()=>{
        f && o && r.location.key === o.location.key && f.resolve()
    }
    , [f, y, r.location, o]),
    R.useEffect(()=>{
        !s.isTransitioning && v && (l(v.state),
        c({
            isTransitioning: !0,
            flushSync: !1,
            currentLocation: v.currentLocation,
            nextLocation: v.nextLocation
        }),
        E(void 0))
    }
    , [s.isTransitioning, v]),
    R.useEffect(()=>{}
    , []);
    let O = R.useMemo(()=>({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: S=>n.navigate(S),
        push: (S,_,B)=>n.navigate(S, {
            state: _,
            preventScrollReset: B == null ? void 0 : B.preventScrollReset
        }),
        replace: (S,_,B)=>n.navigate(S, {
            replace: !0,
            state: _,
            preventScrollReset: B == null ? void 0 : B.preventScrollReset
        })
    }), [n])
      , C = n.basename || "/"
      , x = R.useMemo(()=>({
        router: n,
        navigator: O,
        static: !1,
        basename: C
    }), [n, O, C]);
    return R.createElement(R.Fragment, null, R.createElement(jh.Provider, {
        value: x
    }, R.createElement(Bh.Provider, {
        value: r
    }, R.createElement(Cm.Provider, {
        value: A.current
    }, R.createElement(Im.Provider, {
        value: s
    }, R.createElement(bm, {
        basename: C,
        location: r.location,
        navigationType: r.historyAction,
        navigator: O,
        future: {
            v7_relativeSplatPath: n.future.v7_relativeSplatPath
        }
    }, r.initialized || n.future.v7_partialHydration ? R.createElement(Um, {
        routes: n.routes,
        future: n.future,
        state: r
    }) : t))))), null)
}
function Um(e) {
    let {routes: t, future: n, state: i} = e;
    return fm(t, void 0, i, n)
}
var Vc;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher",
    e.useViewTransitionState = "useViewTransitionState"
}
)(Vc || (Vc = {}));
var Xc;
(function(e) {
    e.UseFetcher = "useFetcher",
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(Xc || (Xc = {}));
const Lm = wm([{
    path: "/",
    element: d.jsx(mg, {})
}]);
zl.createRoot(document.getElementById("root")).render(d.jsx(ru.StrictMode, {
    children: d.jsx("div", {
        className: "main-body",
        children: d.jsx(Nm, {
            router: Lm
        })
    })
}));
