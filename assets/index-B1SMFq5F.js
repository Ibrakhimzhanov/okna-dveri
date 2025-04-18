var Ac = (e) => {
    throw TypeError(e);
};
var Cl = (e, t, n) => t.has(e) || Ac("Cannot " + n);
var T = (e, t, n) => (Cl(e, t, "read from private field"), n ? n.call(e) : t.get(e)),
    te = (e, t, n) => (t.has(e) ? Ac("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n)),
    Y = (e, t, n, r) => (Cl(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n),
    De = (e, t, n) => (Cl(e, t, "access private method"), n);
var Ti = (e, t, n, r) => ({
    set _(o) {
        Y(e, t, o, n);
    },
    get _() {
        return T(e, t, r);
    }
});
function F0(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const i = Object.getOwnPropertyDescriptor(r, o);
                    i && Object.defineProperty(e, o, i.get ? i : { enumerable: !0, get: () => r[o] });
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
    new MutationObserver((o) => {
        for (const i of o) if (i.type === "childList") for (const s of i.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(o) {
        const i = {};
        return (
            o.integrity && (i.integrity = o.integrity),
            o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
            o.crossOrigin === "use-credentials" ? (i.credentials = "include") : o.crossOrigin === "anonymous" ? (i.credentials = "omit") : (i.credentials = "same-origin"),
            i
        );
    }
    function r(o) {
        if (o.ep) return;
        o.ep = !0;
        const i = n(o);
        fetch(o.href, i);
    }
})();
function If(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Df = { exports: {} },
    Hs = {},
    zf = { exports: {} },
    q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vi = Symbol.for("react.element"),
    $0 = Symbol.for("react.portal"),
    B0 = Symbol.for("react.fragment"),
    U0 = Symbol.for("react.strict_mode"),
    V0 = Symbol.for("react.profiler"),
    H0 = Symbol.for("react.provider"),
    W0 = Symbol.for("react.context"),
    Q0 = Symbol.for("react.forward_ref"),
    K0 = Symbol.for("react.suspense"),
    G0 = Symbol.for("react.memo"),
    Y0 = Symbol.for("react.lazy"),
    _c = Symbol.iterator;
function q0(e) {
    return e === null || typeof e != "object" ? null : ((e = (_c && e[_c]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var Ff = {
        isMounted: function () {
            return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {}
    },
    $f = Object.assign,
    Bf = {};
function io(e, t, n) {
    (this.props = e), (this.context = t), (this.refs = Bf), (this.updater = n || Ff);
}
io.prototype.isReactComponent = {};
io.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState");
};
io.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Uf() {}
Uf.prototype = io.prototype;
function gu(e, t, n) {
    (this.props = e), (this.context = t), (this.refs = Bf), (this.updater = n || Ff);
}
var vu = (gu.prototype = new Uf());
vu.constructor = gu;
$f(vu, io.prototype);
vu.isPureReactComponent = !0;
var Lc = Array.isArray,
    Vf = Object.prototype.hasOwnProperty,
    yu = { current: null },
    Hf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Wf(e, t, n) {
    var r,
        o = {},
        i = null,
        s = null;
    if (t != null) for (r in (t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t)) Vf.call(t, r) && !Hf.hasOwnProperty(r) && (o[r] = t[r]);
    var l = arguments.length - 2;
    if (l === 1) o.children = n;
    else if (1 < l) {
        for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
        o.children = a;
    }
    if (e && e.defaultProps) for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
    return { $$typeof: vi, type: e, key: i, ref: s, props: o, _owner: yu.current };
}
function X0(e, t) {
    return { $$typeof: vi, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function xu(e) {
    return typeof e == "object" && e !== null && e.$$typeof === vi;
}
function Z0(e) {
    var t = { "=": "=0", ":": "=2" };
    return (
        "$" +
        e.replace(/[=:]/g, function (n) {
            return t[n];
        })
    );
}
var Ic = /\/+/g;
function kl(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Z0("" + e.key) : t.toString(36);
}
function Xi(e, t, n, r, o) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var s = !1;
    if (e === null) s = !0;
    else
        switch (i) {
            case "string":
            case "number":
                s = !0;
                break;
            case "object":
                switch (e.$$typeof) {
                    case vi:
                    case $0:
                        s = !0;
                }
        }
    if (s)
        return (
            (s = e),
            (o = o(s)),
            (e = r === "" ? "." + kl(s, 0) : r),
            Lc(o)
                ? ((n = ""),
                  e != null && (n = e.replace(Ic, "$&/") + "/"),
                  Xi(o, t, n, "", function (u) {
                      return u;
                  }))
                : o != null && (xu(o) && (o = X0(o, n + (!o.key || (s && s.key === o.key) ? "" : ("" + o.key).replace(Ic, "$&/") + "/") + e)), t.push(o)),
            1
        );
    if (((s = 0), (r = r === "" ? "." : r + ":"), Lc(e)))
        for (var l = 0; l < e.length; l++) {
            i = e[l];
            var a = r + kl(i, l);
            s += Xi(i, t, n, a, o);
        }
    else if (((a = q0(e)), typeof a == "function")) for (e = a.call(e), l = 0; !(i = e.next()).done; ) (i = i.value), (a = r + kl(i, l++)), (s += Xi(i, t, n, a, o));
    else if (i === "object")
        throw (
            ((t = String(e)),
            Error(
                "Objects are not valid as a React child (found: " +
                    (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) +
                    "). If you meant to render a collection of children, use an array instead."
            ))
        );
    return s;
}
function ji(e, t, n) {
    if (e == null) return e;
    var r = [],
        o = 0;
    return (
        Xi(e, r, "", "", function (i) {
            return t.call(n, i, o++);
        }),
        r
    );
}
function J0(e) {
    if (e._status === -1) {
        var t = e._result;
        (t = t()),
            t.then(
                function (n) {
                    (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
                },
                function (n) {
                    (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
                }
            ),
            e._status === -1 && ((e._status = 0), (e._result = t));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
}
var Ke = { current: null },
    Zi = { transition: null },
    eg = { ReactCurrentDispatcher: Ke, ReactCurrentBatchConfig: Zi, ReactCurrentOwner: yu };
function Qf() {
    throw Error("act(...) is not supported in production builds of React.");
}
q.Children = {
    map: ji,
    forEach: function (e, t, n) {
        ji(
            e,
            function () {
                t.apply(this, arguments);
            },
            n
        );
    },
    count: function (e) {
        var t = 0;
        return (
            ji(e, function () {
                t++;
            }),
            t
        );
    },
    toArray: function (e) {
        return (
            ji(e, function (t) {
                return t;
            }) || []
        );
    },
    only: function (e) {
        if (!xu(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e;
    }
};
q.Component = io;
q.Fragment = B0;
q.Profiler = V0;
q.PureComponent = gu;
q.StrictMode = U0;
q.Suspense = K0;
q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = eg;
q.act = Qf;
q.cloneElement = function (e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = $f({}, e.props),
        o = e.key,
        i = e.ref,
        s = e._owner;
    if (t != null) {
        if ((t.ref !== void 0 && ((i = t.ref), (s = yu.current)), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)) var l = e.type.defaultProps;
        for (a in t) Vf.call(t, a) && !Hf.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
    }
    var a = arguments.length - 2;
    if (a === 1) r.children = n;
    else if (1 < a) {
        l = Array(a);
        for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
        r.children = l;
    }
    return { $$typeof: vi, type: e.type, key: o, ref: i, props: r, _owner: s };
};
q.createContext = function (e) {
    return (
        (e = { $$typeof: W0, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }),
        (e.Provider = { $$typeof: H0, _context: e }),
        (e.Consumer = e)
    );
};
q.createElement = Wf;
q.createFactory = function (e) {
    var t = Wf.bind(null, e);
    return (t.type = e), t;
};
q.createRef = function () {
    return { current: null };
};
q.forwardRef = function (e) {
    return { $$typeof: Q0, render: e };
};
q.isValidElement = xu;
q.lazy = function (e) {
    return { $$typeof: Y0, _payload: { _status: -1, _result: e }, _init: J0 };
};
q.memo = function (e, t) {
    return { $$typeof: G0, type: e, compare: t === void 0 ? null : t };
};
q.startTransition = function (e) {
    var t = Zi.transition;
    Zi.transition = {};
    try {
        e();
    } finally {
        Zi.transition = t;
    }
};
q.unstable_act = Qf;
q.useCallback = function (e, t) {
    return Ke.current.useCallback(e, t);
};
q.useContext = function (e) {
    return Ke.current.useContext(e);
};
q.useDebugValue = function () {};
q.useDeferredValue = function (e) {
    return Ke.current.useDeferredValue(e);
};
q.useEffect = function (e, t) {
    return Ke.current.useEffect(e, t);
};
q.useId = function () {
    return Ke.current.useId();
};
q.useImperativeHandle = function (e, t, n) {
    return Ke.current.useImperativeHandle(e, t, n);
};
q.useInsertionEffect = function (e, t) {
    return Ke.current.useInsertionEffect(e, t);
};
q.useLayoutEffect = function (e, t) {
    return Ke.current.useLayoutEffect(e, t);
};
q.useMemo = function (e, t) {
    return Ke.current.useMemo(e, t);
};
q.useReducer = function (e, t, n) {
    return Ke.current.useReducer(e, t, n);
};
q.useRef = function (e) {
    return Ke.current.useRef(e);
};
q.useState = function (e) {
    return Ke.current.useState(e);
};
q.useSyncExternalStore = function (e, t, n) {
    return Ke.current.useSyncExternalStore(e, t, n);
};
q.useTransition = function () {
    return Ke.current.useTransition();
};
q.version = "18.3.1";
zf.exports = q;
var S = zf.exports;
const A = If(S),
    tg = F0({ __proto__: null, default: A }, [S]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ng = S,
    rg = Symbol.for("react.element"),
    og = Symbol.for("react.fragment"),
    ig = Object.prototype.hasOwnProperty,
    sg = ng.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    lg = { key: !0, ref: !0, __self: !0, __source: !0 };
function Kf(e, t, n) {
    var r,
        o = {},
        i = null,
        s = null;
    n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
    for (r in t) ig.call(t, r) && !lg.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
    return { $$typeof: rg, type: e, key: i, ref: s, props: o, _owner: sg.current };
}
Hs.Fragment = og;
Hs.jsx = Kf;
Hs.jsxs = Kf;
Df.exports = Hs;
var g = Df.exports,
    Gf = { exports: {} },
    mt = {},
    Yf = { exports: {} },
    qf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
    function t(N, M) {
        var F = N.length;
        N.push(M);
        e: for (; 0 < F; ) {
            var I = (F - 1) >>> 1,
                B = N[I];
            if (0 < o(B, M)) (N[I] = M), (N[F] = B), (F = I);
            else break e;
        }
    }
    function n(N) {
        return N.length === 0 ? null : N[0];
    }
    function r(N) {
        if (N.length === 0) return null;
        var M = N[0],
            F = N.pop();
        if (F !== M) {
            N[0] = F;
            e: for (var I = 0, B = N.length, K = B >>> 1; I < K; ) {
                var J = 2 * (I + 1) - 1,
                    Ne = N[J],
                    X = J + 1,
                    ue = N[X];
                if (0 > o(Ne, F)) X < B && 0 > o(ue, Ne) ? ((N[I] = ue), (N[X] = F), (I = X)) : ((N[I] = Ne), (N[J] = F), (I = J));
                else if (X < B && 0 > o(ue, F)) (N[I] = ue), (N[X] = F), (I = X);
                else break e;
            }
        }
        return M;
    }
    function o(N, M) {
        var F = N.sortIndex - M.sortIndex;
        return F !== 0 ? F : N.id - M.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function () {
            return i.now();
        };
    } else {
        var s = Date,
            l = s.now();
        e.unstable_now = function () {
            return s.now() - l;
        };
    }
    var a = [],
        u = [],
        f = 1,
        d = null,
        c = 3,
        x = !1,
        v = !1,
        m = !1,
        w = typeof setTimeout == "function" ? setTimeout : null,
        p = typeof clearTimeout == "function" ? clearTimeout : null,
        h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function y(N) {
        for (var M = n(u); M !== null; ) {
            if (M.callback === null) r(u);
            else if (M.startTime <= N) r(u), (M.sortIndex = M.expirationTime), t(a, M);
            else break;
            M = n(u);
        }
    }
    function E(N) {
        if (((m = !1), y(N), !v))
            if (n(a) !== null) (v = !0), U(C);
            else {
                var M = n(u);
                M !== null && W(E, M.startTime - N);
            }
    }
    function C(N, M) {
        (v = !1), m && ((m = !1), p(P), (P = -1)), (x = !0);
        var F = c;
        try {
            for (y(M), d = n(a); d !== null && (!(d.expirationTime > M) || (N && !L())); ) {
                var I = d.callback;
                if (typeof I == "function") {
                    (d.callback = null), (c = d.priorityLevel);
                    var B = I(d.expirationTime <= M);
                    (M = e.unstable_now()), typeof B == "function" ? (d.callback = B) : d === n(a) && r(a), y(M);
                } else r(a);
                d = n(a);
            }
            if (d !== null) var K = !0;
            else {
                var J = n(u);
                J !== null && W(E, J.startTime - M), (K = !1);
            }
            return K;
        } finally {
            (d = null), (c = F), (x = !1);
        }
    }
    var b = !1,
        k = null,
        P = -1,
        j = 5,
        O = -1;
    function L() {
        return !(e.unstable_now() - O < j);
    }
    function D() {
        if (k !== null) {
            var N = e.unstable_now();
            O = N;
            var M = !0;
            try {
                M = k(!0, N);
            } finally {
                M ? V() : ((b = !1), (k = null));
            }
        } else b = !1;
    }
    var V;
    if (typeof h == "function")
        V = function () {
            h(D);
        };
    else if (typeof MessageChannel < "u") {
        var _ = new MessageChannel(),
            H = _.port2;
        (_.port1.onmessage = D),
            (V = function () {
                H.postMessage(null);
            });
    } else
        V = function () {
            w(D, 0);
        };
    function U(N) {
        (k = N), b || ((b = !0), V());
    }
    function W(N, M) {
        P = w(function () {
            N(e.unstable_now());
        }, M);
    }
    (e.unstable_IdlePriority = 5),
        (e.unstable_ImmediatePriority = 1),
        (e.unstable_LowPriority = 4),
        (e.unstable_NormalPriority = 3),
        (e.unstable_Profiling = null),
        (e.unstable_UserBlockingPriority = 2),
        (e.unstable_cancelCallback = function (N) {
            N.callback = null;
        }),
        (e.unstable_continueExecution = function () {
            v || x || ((v = !0), U(C));
        }),
        (e.unstable_forceFrameRate = function (N) {
            0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : (j = 0 < N ? Math.floor(1e3 / N) : 5);
        }),
        (e.unstable_getCurrentPriorityLevel = function () {
            return c;
        }),
        (e.unstable_getFirstCallbackNode = function () {
            return n(a);
        }),
        (e.unstable_next = function (N) {
            switch (c) {
                case 1:
                case 2:
                case 3:
                    var M = 3;
                    break;
                default:
                    M = c;
            }
            var F = c;
            c = M;
            try {
                return N();
            } finally {
                c = F;
            }
        }),
        (e.unstable_pauseExecution = function () {}),
        (e.unstable_requestPaint = function () {}),
        (e.unstable_runWithPriority = function (N, M) {
            switch (N) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    N = 3;
            }
            var F = c;
            c = N;
            try {
                return M();
            } finally {
                c = F;
            }
        }),
        (e.unstable_scheduleCallback = function (N, M, F) {
            var I = e.unstable_now();
            switch ((typeof F == "object" && F !== null ? ((F = F.delay), (F = typeof F == "number" && 0 < F ? I + F : I)) : (F = I), N)) {
                case 1:
                    var B = -1;
                    break;
                case 2:
                    B = 250;
                    break;
                case 5:
                    B = 1073741823;
                    break;
                case 4:
                    B = 1e4;
                    break;
                default:
                    B = 5e3;
            }
            return (
                (B = F + B),
                (N = { id: f++, callback: M, priorityLevel: N, startTime: F, expirationTime: B, sortIndex: -1 }),
                F > I ? ((N.sortIndex = F), t(u, N), n(a) === null && N === n(u) && (m ? (p(P), (P = -1)) : (m = !0), W(E, F - I))) : ((N.sortIndex = B), t(a, N), v || x || ((v = !0), U(C))),
                N
            );
        }),
        (e.unstable_shouldYield = L),
        (e.unstable_wrapCallback = function (N) {
            var M = c;
            return function () {
                var F = c;
                c = M;
                try {
                    return N.apply(this, arguments);
                } finally {
                    c = F;
                }
            };
        });
})(qf);
Yf.exports = qf;
var ag = Yf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ug = S,
    ht = ag;
function R(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Xf = new Set(),
    Ho = {};
function mr(e, t) {
    qr(e, t), qr(e + "Capture", t);
}
function qr(e, t) {
    for (Ho[e] = t, e = 0; e < t.length; e++) Xf.add(t[e]);
}
var ln = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    ra = Object.prototype.hasOwnProperty,
    cg =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Dc = {},
    zc = {};
function dg(e) {
    return ra.call(zc, e) ? !0 : ra.call(Dc, e) ? !1 : cg.test(e) ? (zc[e] = !0) : ((Dc[e] = !0), !1);
}
function fg(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
        default:
            return !1;
    }
}
function pg(e, t, n, r) {
    if (t === null || typeof t > "u" || fg(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
        switch (n.type) {
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t;
        }
    return !1;
}
function Ge(e, t, n, r, o, i, s) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
        (this.attributeName = r),
        (this.attributeNamespace = o),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = i),
        (this.removeEmptyString = s);
}
var Ie = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
    Ie[e] = new Ge(e, 0, !1, e, null, !1, !1);
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function (e) {
    var t = e[0];
    Ie[t] = new Ge(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    Ie[e] = new Ge(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
    Ie[e] = new Ge(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
    .split(" ")
    .forEach(function (e) {
        Ie[e] = new Ge(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
    Ie[e] = new Ge(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
    Ie[e] = new Ge(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
    Ie[e] = new Ge(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
    Ie[e] = new Ge(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var wu = /[\-:]([a-z])/g;
function Su(e) {
    return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
        var t = e.replace(wu, Su);
        Ie[t] = new Ge(t, 1, !1, e, null, !1, !1);
    });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
    var t = e.replace(wu, Su);
    Ie[t] = new Ge(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(wu, Su);
    Ie[t] = new Ge(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
    Ie[e] = new Ge(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ie.xlinkHref = new Ge("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
    Ie[e] = new Ge(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Eu(e, t, n, r) {
    var o = Ie.hasOwnProperty(t) ? Ie[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
        (pg(t, n, o, r) && (n = null),
        r || o === null
            ? dg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
            : o.mustUseProperty
            ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
            : ((t = o.attributeName),
              (r = o.attributeNamespace),
              n === null ? e.removeAttribute(t) : ((o = o.type), (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n), r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var pn = ug.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Ri = Symbol.for("react.element"),
    wr = Symbol.for("react.portal"),
    Sr = Symbol.for("react.fragment"),
    Cu = Symbol.for("react.strict_mode"),
    oa = Symbol.for("react.profiler"),
    Zf = Symbol.for("react.provider"),
    Jf = Symbol.for("react.context"),
    ku = Symbol.for("react.forward_ref"),
    ia = Symbol.for("react.suspense"),
    sa = Symbol.for("react.suspense_list"),
    bu = Symbol.for("react.memo"),
    xn = Symbol.for("react.lazy"),
    ep = Symbol.for("react.offscreen"),
    Fc = Symbol.iterator;
function yo(e) {
    return e === null || typeof e != "object" ? null : ((e = (Fc && e[Fc]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var xe = Object.assign,
    bl;
function To(e) {
    if (bl === void 0)
        try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            bl = (t && t[1]) || "";
        }
    return (
        `
` +
        bl +
        e
    );
}
var Nl = !1;
function Pl(e, t) {
    if (!e || Nl) return "";
    Nl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (
                ((t = function () {
                    throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                    set: function () {
                        throw Error();
                    }
                }),
                typeof Reflect == "object" && Reflect.construct)
            ) {
                try {
                    Reflect.construct(t, []);
                } catch (u) {
                    var r = u;
                }
                Reflect.construct(e, [], t);
            } else {
                try {
                    t.call();
                } catch (u) {
                    r = u;
                }
                e.call(t.prototype);
            }
        else {
            try {
                throw Error();
            } catch (u) {
                r = u;
            }
            e();
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (
                var o = u.stack.split(`
`),
                    i = r.stack.split(`
`),
                    s = o.length - 1,
                    l = i.length - 1;
                1 <= s && 0 <= l && o[s] !== i[l];

            )
                l--;
            for (; 1 <= s && 0 <= l; s--, l--)
                if (o[s] !== i[l]) {
                    if (s !== 1 || l !== 1)
                        do
                            if ((s--, l--, 0 > l || o[s] !== i[l])) {
                                var a =
                                    `
` + o[s].replace(" at new ", " at ");
                                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a;
                            }
                        while (1 <= s && 0 <= l);
                    break;
                }
        }
    } finally {
        (Nl = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? To(e) : "";
}
function hg(e) {
    switch (e.tag) {
        case 5:
            return To(e.type);
        case 16:
            return To("Lazy");
        case 13:
            return To("Suspense");
        case 19:
            return To("SuspenseList");
        case 0:
        case 2:
        case 15:
            return (e = Pl(e.type, !1)), e;
        case 11:
            return (e = Pl(e.type.render, !1)), e;
        case 1:
            return (e = Pl(e.type, !0)), e;
        default:
            return "";
    }
}
function la(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case Sr:
            return "Fragment";
        case wr:
            return "Portal";
        case oa:
            return "Profiler";
        case Cu:
            return "StrictMode";
        case ia:
            return "Suspense";
        case sa:
            return "SuspenseList";
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
            case Jf:
                return (e.displayName || "Context") + ".Consumer";
            case Zf:
                return (e._context.displayName || "Context") + ".Provider";
            case ku:
                var t = e.render;
                return (e = e.displayName), e || ((e = t.displayName || t.name || ""), (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")), e;
            case bu:
                return (t = e.displayName || null), t !== null ? t : la(e.type) || "Memo";
            case xn:
                (t = e._payload), (e = e._init);
                try {
                    return la(e(t));
                } catch {}
        }
    return null;
}
function mg(e) {
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
            return (e = t.render), (e = e.displayName || e.name || ""), t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
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
            return la(t);
        case 8:
            return t === Cu ? "StrictMode" : "Mode";
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
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t;
    }
    return null;
}
function Fn(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return "";
    }
}
function tp(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function gg(e) {
    var t = tp(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get,
            i = n.set;
        return (
            Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                    return o.call(this);
                },
                set: function (s) {
                    (r = "" + s), i.call(this, s);
                }
            }),
            Object.defineProperty(e, t, { enumerable: n.enumerable }),
            {
                getValue: function () {
                    return r;
                },
                setValue: function (s) {
                    r = "" + s;
                },
                stopTracking: function () {
                    (e._valueTracker = null), delete e[t];
                }
            }
        );
    }
}
function Oi(e) {
    e._valueTracker || (e._valueTracker = gg(e));
}
function np(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = tp(e) ? (e.checked ? "true" : "false") : e.value), (e = r), e !== n ? (t.setValue(e), !0) : !1;
}
function fs(e) {
    if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
    try {
        return e.activeElement || e.body;
    } catch {
        return e.body;
    }
}
function aa(e, t) {
    var n = t.checked;
    return xe({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function $c(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    (n = Fn(t.value != null ? t.value : n)), (e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null });
}
function rp(e, t) {
    (t = t.checked), t != null && Eu(e, "checked", t, !1);
}
function ua(e, t) {
    rp(e, t);
    var n = Fn(t.value),
        r = t.type;
    if (n != null) r === "number" ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return;
    }
    t.hasOwnProperty("value") ? ca(e, t.type, n) : t.hasOwnProperty("defaultValue") && ca(e, t.type, Fn(t.defaultValue)),
        t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Bc(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!((r !== "submit" && r !== "reset") || (t.value !== void 0 && t.value !== null))) return;
        (t = "" + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
    }
    (n = e.name), n !== "" && (e.name = ""), (e.defaultChecked = !!e._wrapperState.initialChecked), n !== "" && (e.name = n);
}
function ca(e, t, n) {
    (t !== "number" || fs(e.ownerDocument) !== e) && (n == null ? (e.defaultValue = "" + e._wrapperState.initialValue) : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var jo = Array.isArray;
function Mr(e, t, n, r) {
    if (((e = e.options), t)) {
        t = {};
        for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++) (o = t.hasOwnProperty("$" + e[n].value)), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
    } else {
        for (n = "" + Fn(n), t = null, o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                (e[o].selected = !0), r && (e[o].defaultSelected = !0);
                return;
            }
            t !== null || e[o].disabled || (t = e[o]);
        }
        t !== null && (t.selected = !0);
    }
}
function da(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(R(91));
    return xe({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Uc(e, t) {
    var n = t.value;
    if (n == null) {
        if (((n = t.children), (t = t.defaultValue), n != null)) {
            if (t != null) throw Error(R(92));
            if (jo(n)) {
                if (1 < n.length) throw Error(R(93));
                n = n[0];
            }
            t = n;
        }
        t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: Fn(n) };
}
function op(e, t) {
    var n = Fn(t.value),
        r = Fn(t.defaultValue);
    n != null && ((n = "" + n), n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Vc(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ip(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml";
    }
}
function fa(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? ip(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Mi,
    sp = (function (e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
            ? function (t, n, r, o) {
                  MSApp.execUnsafeLocalFunction(function () {
                      return e(t, n, r, o);
                  });
              }
            : e;
    })(function (e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
        else {
            for (Mi = Mi || document.createElement("div"), Mi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Mi.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
            for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
    });
function Wo(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return;
        }
    }
    e.textContent = t;
}
var Ao = {
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
    },
    vg = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ao).forEach(function (e) {
    vg.forEach(function (t) {
        (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ao[t] = Ao[e]);
    });
});
function lp(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || (Ao.hasOwnProperty(e) && Ao[e]) ? ("" + t).trim() : t + "px";
}
function ap(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                o = lp(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
        }
}
var yg = xe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function pa(e, t) {
    if (t) {
        if (yg[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(R(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(R(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(R(61));
        }
        if (t.style != null && typeof t.style != "object") throw Error(R(62));
    }
}
function ha(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
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
            return !0;
    }
}
var ma = null;
function Nu(e) {
    return (e = e.target || e.srcElement || window), e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var ga = null,
    Ar = null,
    _r = null;
function Hc(e) {
    if ((e = wi(e))) {
        if (typeof ga != "function") throw Error(R(280));
        var t = e.stateNode;
        t && ((t = Ys(t)), ga(e.stateNode, e.type, t));
    }
}
function up(e) {
    Ar ? (_r ? _r.push(e) : (_r = [e])) : (Ar = e);
}
function cp() {
    if (Ar) {
        var e = Ar,
            t = _r;
        if (((_r = Ar = null), Hc(e), t)) for (e = 0; e < t.length; e++) Hc(t[e]);
    }
}
function dp(e, t) {
    return e(t);
}
function fp() {}
var Tl = !1;
function pp(e, t, n) {
    if (Tl) return e(t, n);
    Tl = !0;
    try {
        return dp(e, t, n);
    } finally {
        (Tl = !1), (Ar !== null || _r !== null) && (fp(), cp());
    }
}
function Qo(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Ys(n);
    if (r === null) return null;
    n = r[t];
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
            (r = !r.disabled) || ((e = e.type), (r = !(e === "button" || e === "input" || e === "select" || e === "textarea"))), (e = !r);
            break e;
        default:
            e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(R(231, t, typeof n));
    return n;
}
var va = !1;
if (ln)
    try {
        var xo = {};
        Object.defineProperty(xo, "passive", {
            get: function () {
                va = !0;
            }
        }),
            window.addEventListener("test", xo, xo),
            window.removeEventListener("test", xo, xo);
    } catch {
        va = !1;
    }
function xg(e, t, n, r, o, i, s, l, a) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u);
    } catch (f) {
        this.onError(f);
    }
}
var _o = !1,
    ps = null,
    hs = !1,
    ya = null,
    wg = {
        onError: function (e) {
            (_o = !0), (ps = e);
        }
    };
function Sg(e, t, n, r, o, i, s, l, a) {
    (_o = !1), (ps = null), xg.apply(wg, arguments);
}
function Eg(e, t, n, r, o, i, s, l, a) {
    if ((Sg.apply(this, arguments), _o)) {
        if (_o) {
            var u = ps;
            (_o = !1), (ps = null);
        } else throw Error(R(198));
        hs || ((hs = !0), (ya = u));
    }
}
function gr(e) {
    var t = e,
        n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
        e = t;
        do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
        while (e);
    }
    return t.tag === 3 ? n : null;
}
function hp(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
    }
    return null;
}
function Wc(e) {
    if (gr(e) !== e) throw Error(R(188));
}
function Cg(e) {
    var t = e.alternate;
    if (!t) {
        if (((t = gr(e)), t === null)) throw Error(R(188));
        return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
        var o = n.return;
        if (o === null) break;
        var i = o.alternate;
        if (i === null) {
            if (((r = o.return), r !== null)) {
                n = r;
                continue;
            }
            break;
        }
        if (o.child === i.child) {
            for (i = o.child; i; ) {
                if (i === n) return Wc(o), e;
                if (i === r) return Wc(o), t;
                i = i.sibling;
            }
            throw Error(R(188));
        }
        if (n.return !== r.return) (n = o), (r = i);
        else {
            for (var s = !1, l = o.child; l; ) {
                if (l === n) {
                    (s = !0), (n = o), (r = i);
                    break;
                }
                if (l === r) {
                    (s = !0), (r = o), (n = i);
                    break;
                }
                l = l.sibling;
            }
            if (!s) {
                for (l = i.child; l; ) {
                    if (l === n) {
                        (s = !0), (n = i), (r = o);
                        break;
                    }
                    if (l === r) {
                        (s = !0), (r = i), (n = o);
                        break;
                    }
                    l = l.sibling;
                }
                if (!s) throw Error(R(189));
            }
        }
        if (n.alternate !== r) throw Error(R(190));
    }
    if (n.tag !== 3) throw Error(R(188));
    return n.stateNode.current === n ? e : t;
}
function mp(e) {
    return (e = Cg(e)), e !== null ? gp(e) : null;
}
function gp(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
        var t = gp(e);
        if (t !== null) return t;
        e = e.sibling;
    }
    return null;
}
var vp = ht.unstable_scheduleCallback,
    Qc = ht.unstable_cancelCallback,
    kg = ht.unstable_shouldYield,
    bg = ht.unstable_requestPaint,
    Ce = ht.unstable_now,
    Ng = ht.unstable_getCurrentPriorityLevel,
    Pu = ht.unstable_ImmediatePriority,
    yp = ht.unstable_UserBlockingPriority,
    ms = ht.unstable_NormalPriority,
    Pg = ht.unstable_LowPriority,
    xp = ht.unstable_IdlePriority,
    Ws = null,
    Kt = null;
function Tg(e) {
    if (Kt && typeof Kt.onCommitFiberRoot == "function")
        try {
            Kt.onCommitFiberRoot(Ws, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
}
var Mt = Math.clz32 ? Math.clz32 : Og,
    jg = Math.log,
    Rg = Math.LN2;
function Og(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((jg(e) / Rg) | 0)) | 0;
}
var Ai = 64,
    _i = 4194304;
function Ro(e) {
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
            return e;
    }
}
function gs(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        o = e.suspendedLanes,
        i = e.pingedLanes,
        s = n & 268435455;
    if (s !== 0) {
        var l = s & ~o;
        l !== 0 ? (r = Ro(l)) : ((i &= s), i !== 0 && (r = Ro(i)));
    } else (s = n & ~o), s !== 0 ? (r = Ro(s)) : i !== 0 && (r = Ro(i));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & o) && ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))) return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0)) for (e = e.entanglements, t &= r; 0 < t; ) (n = 31 - Mt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
    return r;
}
function Mg(e, t) {
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
            return -1;
    }
}
function Ag(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
        var s = 31 - Mt(i),
            l = 1 << s,
            a = o[s];
        a === -1 ? (!(l & n) || l & r) && (o[s] = Mg(l, t)) : a <= t && (e.expiredLanes |= l), (i &= ~l);
    }
}
function xa(e) {
    return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function wp() {
    var e = Ai;
    return (Ai <<= 1), !(Ai & 4194240) && (Ai = 64), e;
}
function jl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
}
function yi(e, t, n) {
    (e.pendingLanes |= t), t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)), (e = e.eventTimes), (t = 31 - Mt(t)), (e[t] = n);
}
function _g(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t), (e.suspendedLanes = 0), (e.pingedLanes = 0), (e.expiredLanes &= t), (e.mutableReadLanes &= t), (e.entangledLanes &= t), (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var o = 31 - Mt(n),
            i = 1 << o;
        (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
    }
}
function Tu(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
        var r = 31 - Mt(n),
            o = 1 << r;
        (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
    }
}
var re = 0;
function Sp(e) {
    return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Ep,
    ju,
    Cp,
    kp,
    bp,
    wa = !1,
    Li = [],
    On = null,
    Mn = null,
    An = null,
    Ko = new Map(),
    Go = new Map(),
    Sn = [],
    Lg =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
            " "
        );
function Kc(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            On = null;
            break;
        case "dragenter":
        case "dragleave":
            Mn = null;
            break;
        case "mouseover":
        case "mouseout":
            An = null;
            break;
        case "pointerover":
        case "pointerout":
            Ko.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Go.delete(t.pointerId);
    }
}
function wo(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i
        ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }), t !== null && ((t = wi(t)), t !== null && ju(t)), e)
        : ((e.eventSystemFlags |= r), (t = e.targetContainers), o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function Ig(e, t, n, r, o) {
    switch (t) {
        case "focusin":
            return (On = wo(On, e, t, n, r, o)), !0;
        case "dragenter":
            return (Mn = wo(Mn, e, t, n, r, o)), !0;
        case "mouseover":
            return (An = wo(An, e, t, n, r, o)), !0;
        case "pointerover":
            var i = o.pointerId;
            return Ko.set(i, wo(Ko.get(i) || null, e, t, n, r, o)), !0;
        case "gotpointercapture":
            return (i = o.pointerId), Go.set(i, wo(Go.get(i) || null, e, t, n, r, o)), !0;
    }
    return !1;
}
function Np(e) {
    var t = Zn(e.target);
    if (t !== null) {
        var n = gr(t);
        if (n !== null) {
            if (((t = n.tag), t === 13)) {
                if (((t = hp(n)), t !== null)) {
                    (e.blockedOn = t),
                        bp(e.priority, function () {
                            Cp(n);
                        });
                    return;
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return;
            }
        }
    }
    e.blockedOn = null;
}
function Ji(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Sa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            (ma = r), n.target.dispatchEvent(r), (ma = null);
        } else return (t = wi(n)), t !== null && ju(t), (e.blockedOn = n), !1;
        t.shift();
    }
    return !0;
}
function Gc(e, t, n) {
    Ji(e) && n.delete(t);
}
function Dg() {
    (wa = !1), On !== null && Ji(On) && (On = null), Mn !== null && Ji(Mn) && (Mn = null), An !== null && Ji(An) && (An = null), Ko.forEach(Gc), Go.forEach(Gc);
}
function So(e, t) {
    e.blockedOn === t && ((e.blockedOn = null), wa || ((wa = !0), ht.unstable_scheduleCallback(ht.unstable_NormalPriority, Dg)));
}
function Yo(e) {
    function t(o) {
        return So(o, e);
    }
    if (0 < Li.length) {
        So(Li[0], e);
        for (var n = 1; n < Li.length; n++) {
            var r = Li[n];
            r.blockedOn === e && (r.blockedOn = null);
        }
    }
    for (On !== null && So(On, e), Mn !== null && So(Mn, e), An !== null && So(An, e), Ko.forEach(t), Go.forEach(t), n = 0; n < Sn.length; n++) (r = Sn[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Sn.length && ((n = Sn[0]), n.blockedOn === null); ) Np(n), n.blockedOn === null && Sn.shift();
}
var Lr = pn.ReactCurrentBatchConfig,
    vs = !0;
function zg(e, t, n, r) {
    var o = re,
        i = Lr.transition;
    Lr.transition = null;
    try {
        (re = 1), Ru(e, t, n, r);
    } finally {
        (re = o), (Lr.transition = i);
    }
}
function Fg(e, t, n, r) {
    var o = re,
        i = Lr.transition;
    Lr.transition = null;
    try {
        (re = 4), Ru(e, t, n, r);
    } finally {
        (re = o), (Lr.transition = i);
    }
}
function Ru(e, t, n, r) {
    if (vs) {
        var o = Sa(e, t, n, r);
        if (o === null) Fl(e, t, r, ys, n), Kc(e, r);
        else if (Ig(o, e, t, n, r)) r.stopPropagation();
        else if ((Kc(e, r), t & 4 && -1 < Lg.indexOf(e))) {
            for (; o !== null; ) {
                var i = wi(o);
                if ((i !== null && Ep(i), (i = Sa(e, t, n, r)), i === null && Fl(e, t, r, ys, n), i === o)) break;
                o = i;
            }
            o !== null && r.stopPropagation();
        } else Fl(e, t, r, null, n);
    }
}
var ys = null;
function Sa(e, t, n, r) {
    if (((ys = null), (e = Nu(r)), (e = Zn(e)), e !== null))
        if (((t = gr(e)), t === null)) e = null;
        else if (((n = t.tag), n === 13)) {
            if (((e = hp(t)), e !== null)) return e;
            e = null;
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
    return (ys = e), null;
}
function Pp(e) {
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
            switch (Ng()) {
                case Pu:
                    return 1;
                case yp:
                    return 4;
                case ms:
                case Pg:
                    return 16;
                case xp:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var Tn = null,
    Ou = null,
    es = null;
function Tp() {
    if (es) return es;
    var e,
        t = Ou,
        n = t.length,
        r,
        o = "value" in Tn ? Tn.value : Tn.textContent,
        i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++);
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
    return (es = o.slice(e, 1 < r ? 1 - r : void 0));
}
function ts(e) {
    var t = e.keyCode;
    return "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t), e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Ii() {
    return !0;
}
function Yc() {
    return !1;
}
function gt(e) {
    function t(n, r, o, i, s) {
        (this._reactName = n), (this._targetInst = o), (this.type = r), (this.nativeEvent = i), (this.target = s), (this.currentTarget = null);
        for (var l in e) e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(i) : i[l]));
        return (this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Ii : Yc), (this.isPropagationStopped = Yc), this;
    }
    return (
        xe(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), (this.isDefaultPrevented = Ii));
            },
            stopPropagation: function () {
                var n = this.nativeEvent;
                n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), (this.isPropagationStopped = Ii));
            },
            persist: function () {},
            isPersistent: Ii
        }),
        t
    );
}
var so = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    Mu = gt(so),
    xi = xe({}, so, { view: 0, detail: 0 }),
    $g = gt(xi),
    Rl,
    Ol,
    Eo,
    Qs = xe({}, xi, {
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
        getModifierState: Au,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return e.relatedTarget === void 0 ? (e.fromElement === e.srcElement ? e.toElement : e.fromElement) : e.relatedTarget;
        },
        movementX: function (e) {
            return "movementX" in e ? e.movementX : (e !== Eo && (Eo && e.type === "mousemove" ? ((Rl = e.screenX - Eo.screenX), (Ol = e.screenY - Eo.screenY)) : (Ol = Rl = 0), (Eo = e)), Rl);
        },
        movementY: function (e) {
            return "movementY" in e ? e.movementY : Ol;
        }
    }),
    qc = gt(Qs),
    Bg = xe({}, Qs, { dataTransfer: 0 }),
    Ug = gt(Bg),
    Vg = xe({}, xi, { relatedTarget: 0 }),
    Ml = gt(Vg),
    Hg = xe({}, so, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Wg = gt(Hg),
    Qg = xe({}, so, {
        clipboardData: function (e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        }
    }),
    Kg = gt(Qg),
    Gg = xe({}, so, { data: 0 }),
    Xc = gt(Gg),
    Yg = {
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
    },
    qg = {
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
    },
    Xg = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Zg(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Xg[e]) ? !!t[e] : !1;
}
function Au() {
    return Zg;
}
var Jg = xe({}, xi, {
        key: function (e) {
            if (e.key) {
                var t = Yg[e.key] || e.key;
                if (t !== "Unidentified") return t;
            }
            return e.type === "keypress" ? ((e = ts(e)), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? qg[e.keyCode] || "Unidentified" : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Au,
        charCode: function (e) {
            return e.type === "keypress" ? ts(e) : 0;
        },
        keyCode: function (e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function (e) {
            return e.type === "keypress" ? ts(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        }
    }),
    ev = gt(Jg),
    tv = xe({}, Qs, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }),
    Zc = gt(tv),
    nv = xe({}, xi, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Au }),
    rv = gt(nv),
    ov = xe({}, so, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    iv = gt(ov),
    sv = xe({}, Qs, {
        deltaX: function (e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
        },
        deltaY: function (e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    lv = gt(sv),
    av = [9, 13, 27, 32],
    _u = ln && "CompositionEvent" in window,
    Lo = null;
ln && "documentMode" in document && (Lo = document.documentMode);
var uv = ln && "TextEvent" in window && !Lo,
    jp = ln && (!_u || (Lo && 8 < Lo && 11 >= Lo)),
    Jc = " ",
    ed = !1;
function Rp(e, t) {
    switch (e) {
        case "keyup":
            return av.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1;
    }
}
function Op(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Er = !1;
function cv(e, t) {
    switch (e) {
        case "compositionend":
            return Op(t);
        case "keypress":
            return t.which !== 32 ? null : ((ed = !0), Jc);
        case "textInput":
            return (e = t.data), e === Jc && ed ? null : e;
        default:
            return null;
    }
}
function dv(e, t) {
    if (Er) return e === "compositionend" || (!_u && Rp(e, t)) ? ((e = Tp()), (es = Ou = Tn = null), (Er = !1), e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which);
            }
            return null;
        case "compositionend":
            return jp && t.locale !== "ko" ? null : t.data;
        default:
            return null;
    }
}
var fv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function td(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!fv[e.type] : t === "textarea";
}
function Mp(e, t, n, r) {
    up(r), (t = xs(t, "onChange")), 0 < t.length && ((n = new Mu("onChange", "change", null, n, r)), e.push({ event: n, listeners: t }));
}
var Io = null,
    qo = null;
function pv(e) {
    Vp(e, 0);
}
function Ks(e) {
    var t = br(e);
    if (np(t)) return e;
}
function hv(e, t) {
    if (e === "change") return t;
}
var Ap = !1;
if (ln) {
    var Al;
    if (ln) {
        var _l = "oninput" in document;
        if (!_l) {
            var nd = document.createElement("div");
            nd.setAttribute("oninput", "return;"), (_l = typeof nd.oninput == "function");
        }
        Al = _l;
    } else Al = !1;
    Ap = Al && (!document.documentMode || 9 < document.documentMode);
}
function rd() {
    Io && (Io.detachEvent("onpropertychange", _p), (qo = Io = null));
}
function _p(e) {
    if (e.propertyName === "value" && Ks(qo)) {
        var t = [];
        Mp(t, qo, e, Nu(e)), pp(pv, t);
    }
}
function mv(e, t, n) {
    e === "focusin" ? (rd(), (Io = t), (qo = n), Io.attachEvent("onpropertychange", _p)) : e === "focusout" && rd();
}
function gv(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ks(qo);
}
function vv(e, t) {
    if (e === "click") return Ks(t);
}
function yv(e, t) {
    if (e === "input" || e === "change") return Ks(t);
}
function xv(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Lt = typeof Object.is == "function" ? Object.is : xv;
function Xo(e, t) {
    if (Lt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!ra.call(t, o) || !Lt(e[o], t[o])) return !1;
    }
    return !0;
}
function od(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
}
function id(e, t) {
    var n = od(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
            e = r;
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e;
                }
                n = n.parentNode;
            }
            n = void 0;
        }
        n = od(n);
    }
}
function Lp(e, t) {
    return e && t
        ? e === t
            ? !0
            : e && e.nodeType === 3
            ? !1
            : t && t.nodeType === 3
            ? Lp(e, t.parentNode)
            : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
            ? !!(e.compareDocumentPosition(t) & 16)
            : !1
        : !1;
}
function Ip() {
    for (var e = window, t = fs(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string";
        } catch {
            n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = fs(e.document);
    }
    return t;
}
function Lu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && ((t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password")) || t === "textarea" || e.contentEditable === "true");
}
function wv(e) {
    var t = Ip(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Lp(n.ownerDocument.documentElement, n)) {
        if (r !== null && Lu(n)) {
            if (((t = r.start), (e = r.end), e === void 0 && (e = t), "selectionStart" in n)) (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
            else if (((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
                e = e.getSelection();
                var o = n.textContent.length,
                    i = Math.min(r.start, o);
                (r = r.end === void 0 ? i : Math.min(r.end, o)), !e.extend && i > r && ((o = r), (r = i), (i = o)), (o = id(n, i));
                var s = id(n, r);
                o &&
                    s &&
                    (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) &&
                    ((t = t.createRange()), t.setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)));
            }
        }
        for (t = [], e = n; (e = e.parentNode); ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
    }
}
var Sv = ln && "documentMode" in document && 11 >= document.documentMode,
    Cr = null,
    Ea = null,
    Do = null,
    Ca = !1;
function sd(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ca ||
        Cr == null ||
        Cr !== fs(r) ||
        ((r = Cr),
        "selectionStart" in r && Lu(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
              (r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset })),
        (Do && Xo(Do, r)) || ((Do = r), (r = xs(Ea, "onSelect")), 0 < r.length && ((t = new Mu("onSelect", "select", null, t, n)), e.push({ event: t, listeners: r }), (t.target = Cr))));
}
function Di(e, t) {
    var n = {};
    return (n[e.toLowerCase()] = t.toLowerCase()), (n["Webkit" + e] = "webkit" + t), (n["Moz" + e] = "moz" + t), n;
}
var kr = {
        animationend: Di("Animation", "AnimationEnd"),
        animationiteration: Di("Animation", "AnimationIteration"),
        animationstart: Di("Animation", "AnimationStart"),
        transitionend: Di("Transition", "TransitionEnd")
    },
    Ll = {},
    Dp = {};
ln &&
    ((Dp = document.createElement("div").style),
    "AnimationEvent" in window || (delete kr.animationend.animation, delete kr.animationiteration.animation, delete kr.animationstart.animation),
    "TransitionEvent" in window || delete kr.transitionend.transition);
function Gs(e) {
    if (Ll[e]) return Ll[e];
    if (!kr[e]) return e;
    var t = kr[e],
        n;
    for (n in t) if (t.hasOwnProperty(n) && n in Dp) return (Ll[e] = t[n]);
    return e;
}
var zp = Gs("animationend"),
    Fp = Gs("animationiteration"),
    $p = Gs("animationstart"),
    Bp = Gs("transitionend"),
    Up = new Map(),
    ld =
        "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
            " "
        );
function Wn(e, t) {
    Up.set(e, t), mr(t, [e]);
}
for (var Il = 0; Il < ld.length; Il++) {
    var Dl = ld[Il],
        Ev = Dl.toLowerCase(),
        Cv = Dl[0].toUpperCase() + Dl.slice(1);
    Wn(Ev, "on" + Cv);
}
Wn(zp, "onAnimationEnd");
Wn(Fp, "onAnimationIteration");
Wn($p, "onAnimationStart");
Wn("dblclick", "onDoubleClick");
Wn("focusin", "onFocus");
Wn("focusout", "onBlur");
Wn(Bp, "onTransitionEnd");
qr("onMouseEnter", ["mouseout", "mouseover"]);
qr("onMouseLeave", ["mouseout", "mouseover"]);
qr("onPointerEnter", ["pointerout", "pointerover"]);
qr("onPointerLeave", ["pointerout", "pointerover"]);
mr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
mr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
mr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
mr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
mr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
mr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Oo =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
            " "
        ),
    kv = new Set("cancel close invalid load scroll toggle".split(" ").concat(Oo));
function ad(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), Eg(r, t, void 0, e), (e.currentTarget = null);
}
function Vp(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            o = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var l = r[s],
                        a = l.instance,
                        u = l.currentTarget;
                    if (((l = l.listener), a !== i && o.isPropagationStopped())) break e;
                    ad(o, l, u), (i = a);
                }
            else
                for (s = 0; s < r.length; s++) {
                    if (((l = r[s]), (a = l.instance), (u = l.currentTarget), (l = l.listener), a !== i && o.isPropagationStopped())) break e;
                    ad(o, l, u), (i = a);
                }
        }
    }
    if (hs) throw ((e = ya), (hs = !1), (ya = null), e);
}
function de(e, t) {
    var n = t[Ta];
    n === void 0 && (n = t[Ta] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Hp(t, e, 2, !1), n.add(r));
}
function zl(e, t, n) {
    var r = 0;
    t && (r |= 4), Hp(n, e, r, t);
}
var zi = "_reactListening" + Math.random().toString(36).slice(2);
function Zo(e) {
    if (!e[zi]) {
        (e[zi] = !0),
            Xf.forEach(function (n) {
                n !== "selectionchange" && (kv.has(n) || zl(n, !1, e), zl(n, !0, e));
            });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[zi] || ((t[zi] = !0), zl("selectionchange", !1, t));
    }
}
function Hp(e, t, n, r) {
    switch (Pp(t)) {
        case 1:
            var o = zg;
            break;
        case 4:
            o = Fg;
            break;
        default:
            o = Ru;
    }
    (n = o.bind(null, t, n, e)),
        (o = void 0),
        !va || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (o = !0),
        r
            ? o !== void 0
                ? e.addEventListener(t, n, { capture: !0, passive: o })
                : e.addEventListener(t, n, !0)
            : o !== void 0
            ? e.addEventListener(t, n, { passive: o })
            : e.addEventListener(t, n, !1);
}
function Fl(e, t, n, r, o) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (;;) {
            if (r === null) return;
            var s = r.tag;
            if (s === 3 || s === 4) {
                var l = r.stateNode.containerInfo;
                if (l === o || (l.nodeType === 8 && l.parentNode === o)) break;
                if (s === 4)
                    for (s = r.return; s !== null; ) {
                        var a = s.tag;
                        if ((a === 3 || a === 4) && ((a = s.stateNode.containerInfo), a === o || (a.nodeType === 8 && a.parentNode === o))) return;
                        s = s.return;
                    }
                for (; l !== null; ) {
                    if (((s = Zn(l)), s === null)) return;
                    if (((a = s.tag), a === 5 || a === 6)) {
                        r = i = s;
                        continue e;
                    }
                    l = l.parentNode;
                }
            }
            r = r.return;
        }
    pp(function () {
        var u = i,
            f = Nu(n),
            d = [];
        e: {
            var c = Up.get(e);
            if (c !== void 0) {
                var x = Mu,
                    v = e;
                switch (e) {
                    case "keypress":
                        if (ts(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        x = ev;
                        break;
                    case "focusin":
                        (v = "focus"), (x = Ml);
                        break;
                    case "focusout":
                        (v = "blur"), (x = Ml);
                        break;
                    case "beforeblur":
                    case "afterblur":
                        x = Ml;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        x = qc;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        x = Ug;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        x = rv;
                        break;
                    case zp:
                    case Fp:
                    case $p:
                        x = Wg;
                        break;
                    case Bp:
                        x = iv;
                        break;
                    case "scroll":
                        x = $g;
                        break;
                    case "wheel":
                        x = lv;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        x = Kg;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        x = Zc;
                }
                var m = (t & 4) !== 0,
                    w = !m && e === "scroll",
                    p = m ? (c !== null ? c + "Capture" : null) : c;
                m = [];
                for (var h = u, y; h !== null; ) {
                    y = h;
                    var E = y.stateNode;
                    if ((y.tag === 5 && E !== null && ((y = E), p !== null && ((E = Qo(h, p)), E != null && m.push(Jo(h, E, y)))), w)) break;
                    h = h.return;
                }
                0 < m.length && ((c = new x(c, v, null, n, f)), d.push({ event: c, listeners: m }));
            }
        }
        if (!(t & 7)) {
            e: {
                if (((c = e === "mouseover" || e === "pointerover"), (x = e === "mouseout" || e === "pointerout"), c && n !== ma && (v = n.relatedTarget || n.fromElement) && (Zn(v) || v[an])))
                    break e;
                if (
                    (x || c) &&
                    ((c = f.window === f ? f : (c = f.ownerDocument) ? c.defaultView || c.parentWindow : window),
                    x
                        ? ((v = n.relatedTarget || n.toElement), (x = u), (v = v ? Zn(v) : null), v !== null && ((w = gr(v)), v !== w || (v.tag !== 5 && v.tag !== 6)) && (v = null))
                        : ((x = null), (v = u)),
                    x !== v)
                ) {
                    if (
                        ((m = qc),
                        (E = "onMouseLeave"),
                        (p = "onMouseEnter"),
                        (h = "mouse"),
                        (e === "pointerout" || e === "pointerover") && ((m = Zc), (E = "onPointerLeave"), (p = "onPointerEnter"), (h = "pointer")),
                        (w = x == null ? c : br(x)),
                        (y = v == null ? c : br(v)),
                        (c = new m(E, h + "leave", x, n, f)),
                        (c.target = w),
                        (c.relatedTarget = y),
                        (E = null),
                        Zn(f) === u && ((m = new m(p, h + "enter", v, n, f)), (m.target = y), (m.relatedTarget = w), (E = m)),
                        (w = E),
                        x && v)
                    )
                        t: {
                            for (m = x, p = v, h = 0, y = m; y; y = xr(y)) h++;
                            for (y = 0, E = p; E; E = xr(E)) y++;
                            for (; 0 < h - y; ) (m = xr(m)), h--;
                            for (; 0 < y - h; ) (p = xr(p)), y--;
                            for (; h--; ) {
                                if (m === p || (p !== null && m === p.alternate)) break t;
                                (m = xr(m)), (p = xr(p));
                            }
                            m = null;
                        }
                    else m = null;
                    x !== null && ud(d, c, x, m, !1), v !== null && w !== null && ud(d, w, v, m, !0);
                }
            }
            e: {
                if (((c = u ? br(u) : window), (x = c.nodeName && c.nodeName.toLowerCase()), x === "select" || (x === "input" && c.type === "file"))) var C = hv;
                else if (td(c))
                    if (Ap) C = yv;
                    else {
                        C = gv;
                        var b = mv;
                    }
                else (x = c.nodeName) && x.toLowerCase() === "input" && (c.type === "checkbox" || c.type === "radio") && (C = vv);
                if (C && (C = C(e, u))) {
                    Mp(d, C, n, f);
                    break e;
                }
                b && b(e, c, u), e === "focusout" && (b = c._wrapperState) && b.controlled && c.type === "number" && ca(c, "number", c.value);
            }
            switch (((b = u ? br(u) : window), e)) {
                case "focusin":
                    (td(b) || b.contentEditable === "true") && ((Cr = b), (Ea = u), (Do = null));
                    break;
                case "focusout":
                    Do = Ea = Cr = null;
                    break;
                case "mousedown":
                    Ca = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    (Ca = !1), sd(d, n, f);
                    break;
                case "selectionchange":
                    if (Sv) break;
                case "keydown":
                case "keyup":
                    sd(d, n, f);
            }
            var k;
            if (_u)
                e: {
                    switch (e) {
                        case "compositionstart":
                            var P = "onCompositionStart";
                            break e;
                        case "compositionend":
                            P = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            P = "onCompositionUpdate";
                            break e;
                    }
                    P = void 0;
                }
            else Er ? Rp(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
            P &&
                (jp && n.locale !== "ko" && (Er || P !== "onCompositionStart" ? P === "onCompositionEnd" && Er && (k = Tp()) : ((Tn = f), (Ou = "value" in Tn ? Tn.value : Tn.textContent), (Er = !0))),
                (b = xs(u, P)),
                0 < b.length && ((P = new Xc(P, e, null, n, f)), d.push({ event: P, listeners: b }), k ? (P.data = k) : ((k = Op(n)), k !== null && (P.data = k)))),
                (k = uv ? cv(e, n) : dv(e, n)) &&
                    ((u = xs(u, "onBeforeInput")), 0 < u.length && ((f = new Xc("onBeforeInput", "beforeinput", null, n, f)), d.push({ event: f, listeners: u }), (f.data = k)));
        }
        Vp(d, t);
    });
}
function Jo(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
}
function xs(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var o = e,
            i = o.stateNode;
        o.tag === 5 && i !== null && ((o = i), (i = Qo(e, n)), i != null && r.unshift(Jo(e, i, o)), (i = Qo(e, t)), i != null && r.push(Jo(e, i, o))), (e = e.return);
    }
    return r;
}
function xr(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
}
function ud(e, t, n, r, o) {
    for (var i = t._reactName, s = []; n !== null && n !== r; ) {
        var l = n,
            a = l.alternate,
            u = l.stateNode;
        if (a !== null && a === r) break;
        l.tag === 5 && u !== null && ((l = u), o ? ((a = Qo(n, i)), a != null && s.unshift(Jo(n, a, l))) : o || ((a = Qo(n, i)), a != null && s.push(Jo(n, a, l)))), (n = n.return);
    }
    s.length !== 0 && e.push({ event: t, listeners: s });
}
var bv = /\r\n?/g,
    Nv = /\u0000|\uFFFD/g;
function cd(e) {
    return (typeof e == "string" ? e : "" + e)
        .replace(
            bv,
            `
`
        )
        .replace(Nv, "");
}
function Fi(e, t, n) {
    if (((t = cd(t)), cd(e) !== t && n)) throw Error(R(425));
}
function ws() {}
var ka = null,
    ba = null;
function Na(e, t) {
    return (
        e === "textarea" ||
        e === "noscript" ||
        typeof t.children == "string" ||
        typeof t.children == "number" ||
        (typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null)
    );
}
var Pa = typeof setTimeout == "function" ? setTimeout : void 0,
    Pv = typeof clearTimeout == "function" ? clearTimeout : void 0,
    dd = typeof Promise == "function" ? Promise : void 0,
    Tv =
        typeof queueMicrotask == "function"
            ? queueMicrotask
            : typeof dd < "u"
            ? function (e) {
                  return dd.resolve(null).then(e).catch(jv);
              }
            : Pa;
function jv(e) {
    setTimeout(function () {
        throw e;
    });
}
function $l(e, t) {
    var n = t,
        r = 0;
    do {
        var o = n.nextSibling;
        if ((e.removeChild(n), o && o.nodeType === 8))
            if (((n = o.data), n === "/$")) {
                if (r === 0) {
                    e.removeChild(o), Yo(t);
                    return;
                }
                r--;
            } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
        n = o;
    } while (n);
    Yo(t);
}
function _n(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
            if (t === "/$") return null;
        }
    }
    return e;
}
function fd(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--;
            } else n === "/$" && t++;
        }
        e = e.previousSibling;
    }
    return null;
}
var lo = Math.random().toString(36).slice(2),
    Qt = "__reactFiber$" + lo,
    ei = "__reactProps$" + lo,
    an = "__reactContainer$" + lo,
    Ta = "__reactEvents$" + lo,
    Rv = "__reactListeners$" + lo,
    Ov = "__reactHandles$" + lo;
function Zn(e) {
    var t = e[Qt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
        if ((t = n[an] || n[Qt])) {
            if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
                for (e = fd(e); e !== null; ) {
                    if ((n = e[Qt])) return n;
                    e = fd(e);
                }
            return t;
        }
        (e = n), (n = e.parentNode);
    }
    return null;
}
function wi(e) {
    return (e = e[Qt] || e[an]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
}
function br(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(R(33));
}
function Ys(e) {
    return e[ei] || null;
}
var ja = [],
    Nr = -1;
function Qn(e) {
    return { current: e };
}
function fe(e) {
    0 > Nr || ((e.current = ja[Nr]), (ja[Nr] = null), Nr--);
}
function ae(e, t) {
    Nr++, (ja[Nr] = e.current), (e.current = t);
}
var $n = {},
    Ue = Qn($n),
    Ze = Qn(!1),
    lr = $n;
function Xr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return $n;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var o = {},
        i;
    for (i in n) o[i] = t[i];
    return r && ((e = e.stateNode), (e.__reactInternalMemoizedUnmaskedChildContext = t), (e.__reactInternalMemoizedMaskedChildContext = o)), o;
}
function Je(e) {
    return (e = e.childContextTypes), e != null;
}
function Ss() {
    fe(Ze), fe(Ue);
}
function pd(e, t, n) {
    if (Ue.current !== $n) throw Error(R(168));
    ae(Ue, t), ae(Ze, n);
}
function Wp(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function")) return n;
    r = r.getChildContext();
    for (var o in r) if (!(o in t)) throw Error(R(108, mg(e) || "Unknown", o));
    return xe({}, n, r);
}
function Es(e) {
    return (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || $n), (lr = Ue.current), ae(Ue, e), ae(Ze, Ze.current), !0;
}
function hd(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(R(169));
    n ? ((e = Wp(e, t, lr)), (r.__reactInternalMemoizedMergedChildContext = e), fe(Ze), fe(Ue), ae(Ue, e)) : fe(Ze), ae(Ze, n);
}
var nn = null,
    qs = !1,
    Bl = !1;
function Qp(e) {
    nn === null ? (nn = [e]) : nn.push(e);
}
function Mv(e) {
    (qs = !0), Qp(e);
}
function Kn() {
    if (!Bl && nn !== null) {
        Bl = !0;
        var e = 0,
            t = re;
        try {
            var n = nn;
            for (re = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0);
                while (r !== null);
            }
            (nn = null), (qs = !1);
        } catch (o) {
            throw (nn !== null && (nn = nn.slice(e + 1)), vp(Pu, Kn), o);
        } finally {
            (re = t), (Bl = !1);
        }
    }
    return null;
}
var Pr = [],
    Tr = 0,
    Cs = null,
    ks = 0,
    xt = [],
    wt = 0,
    ar = null,
    rn = 1,
    on = "";
function qn(e, t) {
    (Pr[Tr++] = ks), (Pr[Tr++] = Cs), (Cs = e), (ks = t);
}
function Kp(e, t, n) {
    (xt[wt++] = rn), (xt[wt++] = on), (xt[wt++] = ar), (ar = e);
    var r = rn;
    e = on;
    var o = 32 - Mt(r) - 1;
    (r &= ~(1 << o)), (n += 1);
    var i = 32 - Mt(t) + o;
    if (30 < i) {
        var s = o - (o % 5);
        (i = (r & ((1 << s) - 1)).toString(32)), (r >>= s), (o -= s), (rn = (1 << (32 - Mt(t) + o)) | (n << o) | r), (on = i + e);
    } else (rn = (1 << i) | (n << o) | r), (on = e);
}
function Iu(e) {
    e.return !== null && (qn(e, 1), Kp(e, 1, 0));
}
function Du(e) {
    for (; e === Cs; ) (Cs = Pr[--Tr]), (Pr[Tr] = null), (ks = Pr[--Tr]), (Pr[Tr] = null);
    for (; e === ar; ) (ar = xt[--wt]), (xt[wt] = null), (on = xt[--wt]), (xt[wt] = null), (rn = xt[--wt]), (xt[wt] = null);
}
var ft = null,
    dt = null,
    he = !1,
    Ot = null;
function Gp(e, t) {
    var n = St(5, null, null, 0);
    (n.elementType = "DELETED"), (n.stateNode = t), (n.return = e), (t = e.deletions), t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function md(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t), t !== null ? ((e.stateNode = t), (ft = e), (dt = _n(t.firstChild)), !0) : !1;
        case 6:
            return (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t), t !== null ? ((e.stateNode = t), (ft = e), (dt = null), !0) : !1;
        case 13:
            return (
                (t = t.nodeType !== 8 ? null : t),
                t !== null
                    ? ((n = ar !== null ? { id: rn, overflow: on } : null),
                      (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
                      (n = St(18, null, null, 0)),
                      (n.stateNode = t),
                      (n.return = e),
                      (e.child = n),
                      (ft = e),
                      (dt = null),
                      !0)
                    : !1
            );
        default:
            return !1;
    }
}
function Ra(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Oa(e) {
    if (he) {
        var t = dt;
        if (t) {
            var n = t;
            if (!md(e, t)) {
                if (Ra(e)) throw Error(R(418));
                t = _n(n.nextSibling);
                var r = ft;
                t && md(e, t) ? Gp(r, n) : ((e.flags = (e.flags & -4097) | 2), (he = !1), (ft = e));
            }
        } else {
            if (Ra(e)) throw Error(R(418));
            (e.flags = (e.flags & -4097) | 2), (he = !1), (ft = e);
        }
    }
}
function gd(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    ft = e;
}
function $i(e) {
    if (e !== ft) return !1;
    if (!he) return gd(e), (he = !0), !1;
    var t;
    if (((t = e.tag !== 3) && !(t = e.tag !== 5) && ((t = e.type), (t = t !== "head" && t !== "body" && !Na(e.type, e.memoizedProps))), t && (t = dt))) {
        if (Ra(e)) throw (Yp(), Error(R(418)));
        for (; t; ) Gp(e, t), (t = _n(t.nextSibling));
    }
    if ((gd(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(R(317));
        e: {
            for (e = e.nextSibling, t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            dt = _n(e.nextSibling);
                            break e;
                        }
                        t--;
                    } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
                }
                e = e.nextSibling;
            }
            dt = null;
        }
    } else dt = ft ? _n(e.stateNode.nextSibling) : null;
    return !0;
}
function Yp() {
    for (var e = dt; e; ) e = _n(e.nextSibling);
}
function Zr() {
    (dt = ft = null), (he = !1);
}
function zu(e) {
    Ot === null ? (Ot = [e]) : Ot.push(e);
}
var Av = pn.ReactCurrentBatchConfig;
function Co(e, t, n) {
    if (((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")) {
        if (n._owner) {
            if (((n = n._owner), n)) {
                if (n.tag !== 1) throw Error(R(309));
                var r = n.stateNode;
            }
            if (!r) throw Error(R(147, e));
            var o = r,
                i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i
                ? t.ref
                : ((t = function (s) {
                      var l = o.refs;
                      s === null ? delete l[i] : (l[i] = s);
                  }),
                  (t._stringRef = i),
                  t);
        }
        if (typeof e != "string") throw Error(R(284));
        if (!n._owner) throw Error(R(290, e));
    }
    return e;
}
function Bi(e, t) {
    throw ((e = Object.prototype.toString.call(t)), Error(R(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
}
function vd(e) {
    var t = e._init;
    return t(e._payload);
}
function qp(e) {
    function t(p, h) {
        if (e) {
            var y = p.deletions;
            y === null ? ((p.deletions = [h]), (p.flags |= 16)) : y.push(h);
        }
    }
    function n(p, h) {
        if (!e) return null;
        for (; h !== null; ) t(p, h), (h = h.sibling);
        return null;
    }
    function r(p, h) {
        for (p = new Map(); h !== null; ) h.key !== null ? p.set(h.key, h) : p.set(h.index, h), (h = h.sibling);
        return p;
    }
    function o(p, h) {
        return (p = zn(p, h)), (p.index = 0), (p.sibling = null), p;
    }
    function i(p, h, y) {
        return (p.index = y), e ? ((y = p.alternate), y !== null ? ((y = y.index), y < h ? ((p.flags |= 2), h) : y) : ((p.flags |= 2), h)) : ((p.flags |= 1048576), h);
    }
    function s(p) {
        return e && p.alternate === null && (p.flags |= 2), p;
    }
    function l(p, h, y, E) {
        return h === null || h.tag !== 6 ? ((h = Gl(y, p.mode, E)), (h.return = p), h) : ((h = o(h, y)), (h.return = p), h);
    }
    function a(p, h, y, E) {
        var C = y.type;
        return C === Sr
            ? f(p, h, y.props.children, E, y.key)
            : h !== null && (h.elementType === C || (typeof C == "object" && C !== null && C.$$typeof === xn && vd(C) === h.type))
            ? ((E = o(h, y.props)), (E.ref = Co(p, h, y)), (E.return = p), E)
            : ((E = as(y.type, y.key, y.props, null, p.mode, E)), (E.ref = Co(p, h, y)), (E.return = p), E);
    }
    function u(p, h, y, E) {
        return h === null || h.tag !== 4 || h.stateNode.containerInfo !== y.containerInfo || h.stateNode.implementation !== y.implementation
            ? ((h = Yl(y, p.mode, E)), (h.return = p), h)
            : ((h = o(h, y.children || [])), (h.return = p), h);
    }
    function f(p, h, y, E, C) {
        return h === null || h.tag !== 7 ? ((h = sr(y, p.mode, E, C)), (h.return = p), h) : ((h = o(h, y)), (h.return = p), h);
    }
    function d(p, h, y) {
        if ((typeof h == "string" && h !== "") || typeof h == "number") return (h = Gl("" + h, p.mode, y)), (h.return = p), h;
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
                case Ri:
                    return (y = as(h.type, h.key, h.props, null, p.mode, y)), (y.ref = Co(p, null, h)), (y.return = p), y;
                case wr:
                    return (h = Yl(h, p.mode, y)), (h.return = p), h;
                case xn:
                    var E = h._init;
                    return d(p, E(h._payload), y);
            }
            if (jo(h) || yo(h)) return (h = sr(h, p.mode, y, null)), (h.return = p), h;
            Bi(p, h);
        }
        return null;
    }
    function c(p, h, y, E) {
        var C = h !== null ? h.key : null;
        if ((typeof y == "string" && y !== "") || typeof y == "number") return C !== null ? null : l(p, h, "" + y, E);
        if (typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
                case Ri:
                    return y.key === C ? a(p, h, y, E) : null;
                case wr:
                    return y.key === C ? u(p, h, y, E) : null;
                case xn:
                    return (C = y._init), c(p, h, C(y._payload), E);
            }
            if (jo(y) || yo(y)) return C !== null ? null : f(p, h, y, E, null);
            Bi(p, y);
        }
        return null;
    }
    function x(p, h, y, E, C) {
        if ((typeof E == "string" && E !== "") || typeof E == "number") return (p = p.get(y) || null), l(h, p, "" + E, C);
        if (typeof E == "object" && E !== null) {
            switch (E.$$typeof) {
                case Ri:
                    return (p = p.get(E.key === null ? y : E.key) || null), a(h, p, E, C);
                case wr:
                    return (p = p.get(E.key === null ? y : E.key) || null), u(h, p, E, C);
                case xn:
                    var b = E._init;
                    return x(p, h, y, b(E._payload), C);
            }
            if (jo(E) || yo(E)) return (p = p.get(y) || null), f(h, p, E, C, null);
            Bi(h, E);
        }
        return null;
    }
    function v(p, h, y, E) {
        for (var C = null, b = null, k = h, P = (h = 0), j = null; k !== null && P < y.length; P++) {
            k.index > P ? ((j = k), (k = null)) : (j = k.sibling);
            var O = c(p, k, y[P], E);
            if (O === null) {
                k === null && (k = j);
                break;
            }
            e && k && O.alternate === null && t(p, k), (h = i(O, h, P)), b === null ? (C = O) : (b.sibling = O), (b = O), (k = j);
        }
        if (P === y.length) return n(p, k), he && qn(p, P), C;
        if (k === null) {
            for (; P < y.length; P++) (k = d(p, y[P], E)), k !== null && ((h = i(k, h, P)), b === null ? (C = k) : (b.sibling = k), (b = k));
            return he && qn(p, P), C;
        }
        for (k = r(p, k); P < y.length; P++)
            (j = x(k, p, P, y[P], E)), j !== null && (e && j.alternate !== null && k.delete(j.key === null ? P : j.key), (h = i(j, h, P)), b === null ? (C = j) : (b.sibling = j), (b = j));
        return (
            e &&
                k.forEach(function (L) {
                    return t(p, L);
                }),
            he && qn(p, P),
            C
        );
    }
    function m(p, h, y, E) {
        var C = yo(y);
        if (typeof C != "function") throw Error(R(150));
        if (((y = C.call(y)), y == null)) throw Error(R(151));
        for (var b = (C = null), k = h, P = (h = 0), j = null, O = y.next(); k !== null && !O.done; P++, O = y.next()) {
            k.index > P ? ((j = k), (k = null)) : (j = k.sibling);
            var L = c(p, k, O.value, E);
            if (L === null) {
                k === null && (k = j);
                break;
            }
            e && k && L.alternate === null && t(p, k), (h = i(L, h, P)), b === null ? (C = L) : (b.sibling = L), (b = L), (k = j);
        }
        if (O.done) return n(p, k), he && qn(p, P), C;
        if (k === null) {
            for (; !O.done; P++, O = y.next()) (O = d(p, O.value, E)), O !== null && ((h = i(O, h, P)), b === null ? (C = O) : (b.sibling = O), (b = O));
            return he && qn(p, P), C;
        }
        for (k = r(p, k); !O.done; P++, O = y.next())
            (O = x(k, p, P, O.value, E)), O !== null && (e && O.alternate !== null && k.delete(O.key === null ? P : O.key), (h = i(O, h, P)), b === null ? (C = O) : (b.sibling = O), (b = O));
        return (
            e &&
                k.forEach(function (D) {
                    return t(p, D);
                }),
            he && qn(p, P),
            C
        );
    }
    function w(p, h, y, E) {
        if ((typeof y == "object" && y !== null && y.type === Sr && y.key === null && (y = y.props.children), typeof y == "object" && y !== null)) {
            switch (y.$$typeof) {
                case Ri:
                    e: {
                        for (var C = y.key, b = h; b !== null; ) {
                            if (b.key === C) {
                                if (((C = y.type), C === Sr)) {
                                    if (b.tag === 7) {
                                        n(p, b.sibling), (h = o(b, y.props.children)), (h.return = p), (p = h);
                                        break e;
                                    }
                                } else if (b.elementType === C || (typeof C == "object" && C !== null && C.$$typeof === xn && vd(C) === b.type)) {
                                    n(p, b.sibling), (h = o(b, y.props)), (h.ref = Co(p, b, y)), (h.return = p), (p = h);
                                    break e;
                                }
                                n(p, b);
                                break;
                            } else t(p, b);
                            b = b.sibling;
                        }
                        y.type === Sr
                            ? ((h = sr(y.props.children, p.mode, E, y.key)), (h.return = p), (p = h))
                            : ((E = as(y.type, y.key, y.props, null, p.mode, E)), (E.ref = Co(p, h, y)), (E.return = p), (p = E));
                    }
                    return s(p);
                case wr:
                    e: {
                        for (b = y.key; h !== null; ) {
                            if (h.key === b)
                                if (h.tag === 4 && h.stateNode.containerInfo === y.containerInfo && h.stateNode.implementation === y.implementation) {
                                    n(p, h.sibling), (h = o(h, y.children || [])), (h.return = p), (p = h);
                                    break e;
                                } else {
                                    n(p, h);
                                    break;
                                }
                            else t(p, h);
                            h = h.sibling;
                        }
                        (h = Yl(y, p.mode, E)), (h.return = p), (p = h);
                    }
                    return s(p);
                case xn:
                    return (b = y._init), w(p, h, b(y._payload), E);
            }
            if (jo(y)) return v(p, h, y, E);
            if (yo(y)) return m(p, h, y, E);
            Bi(p, y);
        }
        return (typeof y == "string" && y !== "") || typeof y == "number"
            ? ((y = "" + y), h !== null && h.tag === 6 ? (n(p, h.sibling), (h = o(h, y)), (h.return = p), (p = h)) : (n(p, h), (h = Gl(y, p.mode, E)), (h.return = p), (p = h)), s(p))
            : n(p, h);
    }
    return w;
}
var Jr = qp(!0),
    Xp = qp(!1),
    bs = Qn(null),
    Ns = null,
    jr = null,
    Fu = null;
function $u() {
    Fu = jr = Ns = null;
}
function Bu(e) {
    var t = bs.current;
    fe(bs), (e._currentValue = t);
}
function Ma(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if (((e.childLanes & t) !== t ? ((e.childLanes |= t), r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)) break;
        e = e.return;
    }
}
function Ir(e, t) {
    (Ns = e), (Fu = jr = null), (e = e.dependencies), e !== null && e.firstContext !== null && (e.lanes & t && (Xe = !0), (e.firstContext = null));
}
function Ct(e) {
    var t = e._currentValue;
    if (Fu !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), jr === null)) {
            if (Ns === null) throw Error(R(308));
            (jr = e), (Ns.dependencies = { lanes: 0, firstContext: e });
        } else jr = jr.next = e;
    return t;
}
var Jn = null;
function Uu(e) {
    Jn === null ? (Jn = [e]) : Jn.push(e);
}
function Zp(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? ((n.next = n), Uu(t)) : ((n.next = o.next), (o.next = n)), (t.interleaved = n), un(e, r);
}
function un(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) (e.childLanes |= t), (n = e.alternate), n !== null && (n.childLanes |= t), (n = e), (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
}
var wn = !1;
function Vu(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Jp(e, t) {
    (e = e.updateQueue),
        t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function sn(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Ln(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), ee & 2)) {
        var o = r.pending;
        return o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)), (r.pending = t), un(e, n);
    }
    return (o = r.interleaved), o === null ? ((t.next = t), Uu(r)) : ((t.next = o.next), (o.next = t)), (r.interleaved = t), un(e, n);
}
function ns(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), Tu(e, n);
    }
}
function yd(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
        var o = null,
            i = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
            do {
                var s = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
                i === null ? (o = i = s) : (i = i.next = s), (n = n.next);
            } while (n !== null);
            i === null ? (o = i = t) : (i = i.next = t);
        } else o = i = t;
        (n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: r.shared, effects: r.effects }), (e.updateQueue = n);
        return;
    }
    (e = n.lastBaseUpdate), e === null ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
}
function Ps(e, t, n, r) {
    var o = e.updateQueue;
    wn = !1;
    var i = o.firstBaseUpdate,
        s = o.lastBaseUpdate,
        l = o.shared.pending;
    if (l !== null) {
        o.shared.pending = null;
        var a = l,
            u = a.next;
        (a.next = null), s === null ? (i = u) : (s.next = u), (s = a);
        var f = e.alternate;
        f !== null && ((f = f.updateQueue), (l = f.lastBaseUpdate), l !== s && (l === null ? (f.firstBaseUpdate = u) : (l.next = u), (f.lastBaseUpdate = a)));
    }
    if (i !== null) {
        var d = o.baseState;
        (s = 0), (f = u = a = null), (l = i);
        do {
            var c = l.lane,
                x = l.eventTime;
            if ((r & c) === c) {
                f !== null && (f = f.next = { eventTime: x, lane: 0, tag: l.tag, payload: l.payload, callback: l.callback, next: null });
                e: {
                    var v = e,
                        m = l;
                    switch (((c = t), (x = n), m.tag)) {
                        case 1:
                            if (((v = m.payload), typeof v == "function")) {
                                d = v.call(x, d, c);
                                break e;
                            }
                            d = v;
                            break e;
                        case 3:
                            v.flags = (v.flags & -65537) | 128;
                        case 0:
                            if (((v = m.payload), (c = typeof v == "function" ? v.call(x, d, c) : v), c == null)) break e;
                            d = xe({}, d, c);
                            break e;
                        case 2:
                            wn = !0;
                    }
                }
                l.callback !== null && l.lane !== 0 && ((e.flags |= 64), (c = o.effects), c === null ? (o.effects = [l]) : c.push(l));
            } else (x = { eventTime: x, lane: c, tag: l.tag, payload: l.payload, callback: l.callback, next: null }), f === null ? ((u = f = x), (a = d)) : (f = f.next = x), (s |= c);
            if (((l = l.next), l === null)) {
                if (((l = o.shared.pending), l === null)) break;
                (c = l), (l = c.next), (c.next = null), (o.lastBaseUpdate = c), (o.shared.pending = null);
            }
        } while (!0);
        if ((f === null && (a = d), (o.baseState = a), (o.firstBaseUpdate = u), (o.lastBaseUpdate = f), (t = o.shared.interleaved), t !== null)) {
            o = t;
            do (s |= o.lane), (o = o.next);
            while (o !== t);
        } else i === null && (o.shared.lanes = 0);
        (cr |= s), (e.lanes = s), (e.memoizedState = d);
    }
}
function xd(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                o = r.callback;
            if (o !== null) {
                if (((r.callback = null), (r = n), typeof o != "function")) throw Error(R(191, o));
                o.call(r);
            }
        }
}
var Si = {},
    Gt = Qn(Si),
    ti = Qn(Si),
    ni = Qn(Si);
function er(e) {
    if (e === Si) throw Error(R(174));
    return e;
}
function Hu(e, t) {
    switch ((ae(ni, t), ae(ti, e), ae(Gt, Si), (e = t.nodeType), e)) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : fa(null, "");
            break;
        default:
            (e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = fa(t, e));
    }
    fe(Gt), ae(Gt, t);
}
function eo() {
    fe(Gt), fe(ti), fe(ni);
}
function eh(e) {
    er(ni.current);
    var t = er(Gt.current),
        n = fa(t, e.type);
    t !== n && (ae(ti, e), ae(Gt, n));
}
function Wu(e) {
    ti.current === e && (fe(Gt), fe(ti));
}
var ge = Qn(0);
function Ts(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")) return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t;
        } else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return null;
            t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
}
var Ul = [];
function Qu() {
    for (var e = 0; e < Ul.length; e++) Ul[e]._workInProgressVersionPrimary = null;
    Ul.length = 0;
}
var rs = pn.ReactCurrentDispatcher,
    Vl = pn.ReactCurrentBatchConfig,
    ur = 0,
    ye = null,
    Te = null,
    Me = null,
    js = !1,
    zo = !1,
    ri = 0,
    _v = 0;
function ze() {
    throw Error(R(321));
}
function Ku(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Lt(e[n], t[n])) return !1;
    return !0;
}
function Gu(e, t, n, r, o, i) {
    if (((ur = i), (ye = t), (t.memoizedState = null), (t.updateQueue = null), (t.lanes = 0), (rs.current = e === null || e.memoizedState === null ? zv : Fv), (e = n(r, o)), zo)) {
        i = 0;
        do {
            if (((zo = !1), (ri = 0), 25 <= i)) throw Error(R(301));
            (i += 1), (Me = Te = null), (t.updateQueue = null), (rs.current = $v), (e = n(r, o));
        } while (zo);
    }
    if (((rs.current = Rs), (t = Te !== null && Te.next !== null), (ur = 0), (Me = Te = ye = null), (js = !1), t)) throw Error(R(300));
    return e;
}
function Yu() {
    var e = ri !== 0;
    return (ri = 0), e;
}
function Ut() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Me === null ? (ye.memoizedState = Me = e) : (Me = Me.next = e), Me;
}
function kt() {
    if (Te === null) {
        var e = ye.alternate;
        e = e !== null ? e.memoizedState : null;
    } else e = Te.next;
    var t = Me === null ? ye.memoizedState : Me.next;
    if (t !== null) (Me = t), (Te = e);
    else {
        if (e === null) throw Error(R(310));
        (Te = e),
            (e = { memoizedState: Te.memoizedState, baseState: Te.baseState, baseQueue: Te.baseQueue, queue: Te.queue, next: null }),
            Me === null ? (ye.memoizedState = Me = e) : (Me = Me.next = e);
    }
    return Me;
}
function oi(e, t) {
    return typeof t == "function" ? t(e) : t;
}
function Hl(e) {
    var t = kt(),
        n = t.queue;
    if (n === null) throw Error(R(311));
    n.lastRenderedReducer = e;
    var r = Te,
        o = r.baseQueue,
        i = n.pending;
    if (i !== null) {
        if (o !== null) {
            var s = o.next;
            (o.next = i.next), (i.next = s);
        }
        (r.baseQueue = o = i), (n.pending = null);
    }
    if (o !== null) {
        (i = o.next), (r = r.baseState);
        var l = (s = null),
            a = null,
            u = i;
        do {
            var f = u.lane;
            if ((ur & f) === f)
                a !== null && (a = a.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), (r = u.hasEagerState ? u.eagerState : e(r, u.action));
            else {
                var d = { lane: f, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null };
                a === null ? ((l = a = d), (s = r)) : (a = a.next = d), (ye.lanes |= f), (cr |= f);
            }
            u = u.next;
        } while (u !== null && u !== i);
        a === null ? (s = r) : (a.next = l), Lt(r, t.memoizedState) || (Xe = !0), (t.memoizedState = r), (t.baseState = s), (t.baseQueue = a), (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
        o = e;
        do (i = o.lane), (ye.lanes |= i), (cr |= i), (o = o.next);
        while (o !== e);
    } else o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
}
function Wl(e) {
    var t = kt(),
        n = t.queue;
    if (n === null) throw Error(R(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        o = n.pending,
        i = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var s = (o = o.next);
        do (i = e(i, s.action)), (s = s.next);
        while (s !== o);
        Lt(i, t.memoizedState) || (Xe = !0), (t.memoizedState = i), t.baseQueue === null && (t.baseState = i), (n.lastRenderedState = i);
    }
    return [i, r];
}
function th() {}
function nh(e, t) {
    var n = ye,
        r = kt(),
        o = t(),
        i = !Lt(r.memoizedState, o);
    if ((i && ((r.memoizedState = o), (Xe = !0)), (r = r.queue), qu(ih.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || (Me !== null && Me.memoizedState.tag & 1))) {
        if (((n.flags |= 2048), ii(9, oh.bind(null, n, r, o, t), void 0, null), Ae === null)) throw Error(R(349));
        ur & 30 || rh(n, t, o);
    }
    return o;
}
function rh(e, t, n) {
    (e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = ye.updateQueue),
        t === null ? ((t = { lastEffect: null, stores: null }), (ye.updateQueue = t), (t.stores = [e])) : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function oh(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), sh(t) && lh(e);
}
function ih(e, t, n) {
    return n(function () {
        sh(t) && lh(e);
    });
}
function sh(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Lt(e, n);
    } catch {
        return !0;
    }
}
function lh(e) {
    var t = un(e, 1);
    t !== null && At(t, e, 1, -1);
}
function wd(e) {
    var t = Ut();
    return (
        typeof e == "function" && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: oi, lastRenderedState: e }),
        (t.queue = e),
        (e = e.dispatch = Dv.bind(null, ye, e)),
        [t.memoizedState, e]
    );
}
function ii(e, t, n, r) {
    return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        (t = ye.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }), (ye.updateQueue = t), (t.lastEffect = e.next = e))
            : ((n = t.lastEffect), n === null ? (t.lastEffect = e.next = e) : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
        e
    );
}
function ah() {
    return kt().memoizedState;
}
function os(e, t, n, r) {
    var o = Ut();
    (ye.flags |= e), (o.memoizedState = ii(1 | t, n, void 0, r === void 0 ? null : r));
}
function Xs(e, t, n, r) {
    var o = kt();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (Te !== null) {
        var s = Te.memoizedState;
        if (((i = s.destroy), r !== null && Ku(r, s.deps))) {
            o.memoizedState = ii(t, n, i, r);
            return;
        }
    }
    (ye.flags |= e), (o.memoizedState = ii(1 | t, n, i, r));
}
function Sd(e, t) {
    return os(8390656, 8, e, t);
}
function qu(e, t) {
    return Xs(2048, 8, e, t);
}
function uh(e, t) {
    return Xs(4, 2, e, t);
}
function ch(e, t) {
    return Xs(4, 4, e, t);
}
function dh(e, t) {
    if (typeof t == "function")
        return (
            (e = e()),
            t(e),
            function () {
                t(null);
            }
        );
    if (t != null)
        return (
            (e = e()),
            (t.current = e),
            function () {
                t.current = null;
            }
        );
}
function fh(e, t, n) {
    return (n = n != null ? n.concat([e]) : null), Xs(4, 4, dh.bind(null, t, e), n);
}
function Xu() {}
function ph(e, t) {
    var n = kt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ku(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function hh(e, t) {
    var n = kt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ku(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function mh(e, t, n) {
    return ur & 21 ? (Lt(n, t) || ((n = wp()), (ye.lanes |= n), (cr |= n), (e.baseState = !0)), t) : (e.baseState && ((e.baseState = !1), (Xe = !0)), (e.memoizedState = n));
}
function Lv(e, t) {
    var n = re;
    (re = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = Vl.transition;
    Vl.transition = {};
    try {
        e(!1), t();
    } finally {
        (re = n), (Vl.transition = r);
    }
}
function gh() {
    return kt().memoizedState;
}
function Iv(e, t, n) {
    var r = Dn(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), vh(e))) yh(t, n);
    else if (((n = Zp(e, t, n, r)), n !== null)) {
        var o = Qe();
        At(n, e, r, o), xh(n, t, r);
    }
}
function Dv(e, t, n) {
    var r = Dn(e),
        o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (vh(e)) yh(t, o);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && ((i = t.lastRenderedReducer), i !== null))
            try {
                var s = t.lastRenderedState,
                    l = i(s, n);
                if (((o.hasEagerState = !0), (o.eagerState = l), Lt(l, s))) {
                    var a = t.interleaved;
                    a === null ? ((o.next = o), Uu(t)) : ((o.next = a.next), (a.next = o)), (t.interleaved = o);
                    return;
                }
            } catch {
            } finally {
            }
        (n = Zp(e, t, o, r)), n !== null && ((o = Qe()), At(n, e, r, o), xh(n, t, r));
    }
}
function vh(e) {
    var t = e.alternate;
    return e === ye || (t !== null && t === ye);
}
function yh(e, t) {
    zo = js = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function xh(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), Tu(e, n);
    }
}
var Rs = {
        readContext: Ct,
        useCallback: ze,
        useContext: ze,
        useEffect: ze,
        useImperativeHandle: ze,
        useInsertionEffect: ze,
        useLayoutEffect: ze,
        useMemo: ze,
        useReducer: ze,
        useRef: ze,
        useState: ze,
        useDebugValue: ze,
        useDeferredValue: ze,
        useTransition: ze,
        useMutableSource: ze,
        useSyncExternalStore: ze,
        useId: ze,
        unstable_isNewReconciler: !1
    },
    zv = {
        readContext: Ct,
        useCallback: function (e, t) {
            return (Ut().memoizedState = [e, t === void 0 ? null : t]), e;
        },
        useContext: Ct,
        useEffect: Sd,
        useImperativeHandle: function (e, t, n) {
            return (n = n != null ? n.concat([e]) : null), os(4194308, 4, dh.bind(null, t, e), n);
        },
        useLayoutEffect: function (e, t) {
            return os(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
            return os(4, 2, e, t);
        },
        useMemo: function (e, t) {
            var n = Ut();
            return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
        },
        useReducer: function (e, t, n) {
            var r = Ut();
            return (
                (t = n !== void 0 ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }),
                (r.queue = e),
                (e = e.dispatch = Iv.bind(null, ye, e)),
                [r.memoizedState, e]
            );
        },
        useRef: function (e) {
            var t = Ut();
            return (e = { current: e }), (t.memoizedState = e);
        },
        useState: wd,
        useDebugValue: Xu,
        useDeferredValue: function (e) {
            return (Ut().memoizedState = e);
        },
        useTransition: function () {
            var e = wd(!1),
                t = e[0];
            return (e = Lv.bind(null, e[1])), (Ut().memoizedState = e), [t, e];
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
            var r = ye,
                o = Ut();
            if (he) {
                if (n === void 0) throw Error(R(407));
                n = n();
            } else {
                if (((n = t()), Ae === null)) throw Error(R(349));
                ur & 30 || rh(r, t, n);
            }
            o.memoizedState = n;
            var i = { value: n, getSnapshot: t };
            return (o.queue = i), Sd(ih.bind(null, r, i, e), [e]), (r.flags |= 2048), ii(9, oh.bind(null, r, i, n, t), void 0, null), n;
        },
        useId: function () {
            var e = Ut(),
                t = Ae.identifierPrefix;
            if (he) {
                var n = on,
                    r = rn;
                (n = (r & ~(1 << (32 - Mt(r) - 1))).toString(32) + n), (t = ":" + t + "R" + n), (n = ri++), 0 < n && (t += "H" + n.toString(32)), (t += ":");
            } else (n = _v++), (t = ":" + t + "r" + n.toString(32) + ":");
            return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1
    },
    Fv = {
        readContext: Ct,
        useCallback: ph,
        useContext: Ct,
        useEffect: qu,
        useImperativeHandle: fh,
        useInsertionEffect: uh,
        useLayoutEffect: ch,
        useMemo: hh,
        useReducer: Hl,
        useRef: ah,
        useState: function () {
            return Hl(oi);
        },
        useDebugValue: Xu,
        useDeferredValue: function (e) {
            var t = kt();
            return mh(t, Te.memoizedState, e);
        },
        useTransition: function () {
            var e = Hl(oi)[0],
                t = kt().memoizedState;
            return [e, t];
        },
        useMutableSource: th,
        useSyncExternalStore: nh,
        useId: gh,
        unstable_isNewReconciler: !1
    },
    $v = {
        readContext: Ct,
        useCallback: ph,
        useContext: Ct,
        useEffect: qu,
        useImperativeHandle: fh,
        useInsertionEffect: uh,
        useLayoutEffect: ch,
        useMemo: hh,
        useReducer: Wl,
        useRef: ah,
        useState: function () {
            return Wl(oi);
        },
        useDebugValue: Xu,
        useDeferredValue: function (e) {
            var t = kt();
            return Te === null ? (t.memoizedState = e) : mh(t, Te.memoizedState, e);
        },
        useTransition: function () {
            var e = Wl(oi)[0],
                t = kt().memoizedState;
            return [e, t];
        },
        useMutableSource: th,
        useSyncExternalStore: nh,
        useId: gh,
        unstable_isNewReconciler: !1
    };
function Pt(e, t) {
    if (e && e.defaultProps) {
        (t = xe({}, t)), (e = e.defaultProps);
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t;
    }
    return t;
}
function Aa(e, t, n, r) {
    (t = e.memoizedState), (n = n(r, t)), (n = n == null ? t : xe({}, t, n)), (e.memoizedState = n), e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Zs = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? gr(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = Qe(),
            o = Dn(e),
            i = sn(r, o);
        (i.payload = t), n != null && (i.callback = n), (t = Ln(e, i, o)), t !== null && (At(t, e, o, r), ns(t, e, o));
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = Qe(),
            o = Dn(e),
            i = sn(r, o);
        (i.tag = 1), (i.payload = t), n != null && (i.callback = n), (t = Ln(e, i, o)), t !== null && (At(t, e, o, r), ns(t, e, o));
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = Qe(),
            r = Dn(e),
            o = sn(n, r);
        (o.tag = 2), t != null && (o.callback = t), (t = Ln(e, o, r)), t !== null && (At(t, e, r, n), ns(t, e, r));
    }
};
function Ed(e, t, n, r, o, i, s) {
    return (e = e.stateNode), typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !Xo(n, r) || !Xo(o, i) : !0;
}
function wh(e, t, n) {
    var r = !1,
        o = $n,
        i = t.contextType;
    return (
        typeof i == "object" && i !== null ? (i = Ct(i)) : ((o = Je(t) ? lr : Ue.current), (r = t.contextTypes), (i = (r = r != null) ? Xr(e, o) : $n)),
        (t = new t(n, i)),
        (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
        (t.updater = Zs),
        (e.stateNode = t),
        (t._reactInternals = e),
        r && ((e = e.stateNode), (e.__reactInternalMemoizedUnmaskedChildContext = o), (e.__reactInternalMemoizedMaskedChildContext = i)),
        t
    );
}
function Cd(e, t, n, r) {
    (e = t.state),
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Zs.enqueueReplaceState(t, t.state, null);
}
function _a(e, t, n, r) {
    var o = e.stateNode;
    (o.props = n), (o.state = e.memoizedState), (o.refs = {}), Vu(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? (o.context = Ct(i)) : ((i = Je(t) ? lr : Ue.current), (o.context = Xr(e, i))),
        (o.state = e.memoizedState),
        (i = t.getDerivedStateFromProps),
        typeof i == "function" && (Aa(e, t, i, n), (o.state = e.memoizedState)),
        typeof t.getDerivedStateFromProps == "function" ||
            typeof o.getSnapshotBeforeUpdate == "function" ||
            (typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function") ||
            ((t = o.state),
            typeof o.componentWillMount == "function" && o.componentWillMount(),
            typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
            t !== o.state && Zs.enqueueReplaceState(o, o.state, null),
            Ps(e, n, o, r),
            (o.state = e.memoizedState)),
        typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function to(e, t) {
    try {
        var n = "",
            r = t;
        do (n += hg(r)), (r = r.return);
        while (r);
        var o = n;
    } catch (i) {
        o =
            `
Error generating stack: ` +
            i.message +
            `
` +
            i.stack;
    }
    return { value: e, source: t, stack: o, digest: null };
}
function Ql(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function La(e, t) {
    try {
        console.error(t.value);
    } catch (n) {
        setTimeout(function () {
            throw n;
        });
    }
}
var Bv = typeof WeakMap == "function" ? WeakMap : Map;
function Sh(e, t, n) {
    (n = sn(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
        (n.callback = function () {
            Ms || ((Ms = !0), (Wa = r)), La(e, t);
        }),
        n
    );
}
function Eh(e, t, n) {
    (n = sn(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        (n.payload = function () {
            return r(o);
        }),
            (n.callback = function () {
                La(e, t);
            });
    }
    var i = e.stateNode;
    return (
        i !== null &&
            typeof i.componentDidCatch == "function" &&
            (n.callback = function () {
                La(e, t), typeof r != "function" && (In === null ? (In = new Set([this])) : In.add(this));
                var s = t.stack;
                this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
            }),
        n
    );
}
function kd(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Bv();
        var o = new Set();
        r.set(t, o);
    } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
    o.has(n) || (o.add(n), (e = ty.bind(null, e, t, n)), t.then(e, e));
}
function bd(e) {
    do {
        var t;
        if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e;
        e = e.return;
    } while (e !== null);
    return null;
}
function Nd(e, t, n, r, o) {
    return e.mode & 1
        ? ((e.flags |= 65536), (e.lanes = o), e)
        : (e === t
              ? (e.flags |= 65536)
              : ((e.flags |= 128), (n.flags |= 131072), (n.flags &= -52805), n.tag === 1 && (n.alternate === null ? (n.tag = 17) : ((t = sn(-1, 1)), (t.tag = 2), Ln(n, t, 1))), (n.lanes |= 1)),
          e);
}
var Uv = pn.ReactCurrentOwner,
    Xe = !1;
function He(e, t, n, r) {
    t.child = e === null ? Xp(t, null, n, r) : Jr(t, e.child, n, r);
}
function Pd(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return (
        Ir(t, o),
        (r = Gu(e, t, n, r, i, o)),
        (n = Yu()),
        e !== null && !Xe ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), cn(e, t, o)) : (he && n && Iu(t), (t.flags |= 1), He(e, t, r, o), t.child)
    );
}
function Td(e, t, n, r, o) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !ic(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0
            ? ((t.tag = 15), (t.type = i), Ch(e, t, i, r, o))
            : ((e = as(n.type, null, r, t, t.mode, o)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((i = e.child), !(e.lanes & o))) {
        var s = i.memoizedProps;
        if (((n = n.compare), (n = n !== null ? n : Xo), n(s, r) && e.ref === t.ref)) return cn(e, t, o);
    }
    return (t.flags |= 1), (e = zn(i, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function Ch(e, t, n, r, o) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (Xo(i, r) && e.ref === t.ref)
            if (((Xe = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0)) e.flags & 131072 && (Xe = !0);
            else return (t.lanes = e.lanes), cn(e, t, o);
    }
    return Ia(e, t, n, r, o);
}
function kh(e, t, n) {
    var r = t.pendingProps,
        o = r.children,
        i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), ae(Or, ut), (ut |= n);
        else {
            if (!(n & 1073741824))
                return (
                    (e = i !== null ? i.baseLanes | n : n),
                    (t.lanes = t.childLanes = 1073741824),
                    (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
                    (t.updateQueue = null),
                    ae(Or, ut),
                    (ut |= e),
                    null
                );
            (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), (r = i !== null ? i.baseLanes : n), ae(Or, ut), (ut |= r);
        }
    else i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n), ae(Or, ut), (ut |= r);
    return He(e, t, o, n), t.child;
}
function bh(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function Ia(e, t, n, r, o) {
    var i = Je(n) ? lr : Ue.current;
    return (
        (i = Xr(t, i)),
        Ir(t, o),
        (n = Gu(e, t, n, r, i, o)),
        (r = Yu()),
        e !== null && !Xe ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), cn(e, t, o)) : (he && r && Iu(t), (t.flags |= 1), He(e, t, n, o), t.child)
    );
}
function jd(e, t, n, r, o) {
    if (Je(n)) {
        var i = !0;
        Es(t);
    } else i = !1;
    if ((Ir(t, o), t.stateNode === null)) is(e, t), wh(t, n, r), _a(t, n, r, o), (r = !0);
    else if (e === null) {
        var s = t.stateNode,
            l = t.memoizedProps;
        s.props = l;
        var a = s.context,
            u = n.contextType;
        typeof u == "object" && u !== null ? (u = Ct(u)) : ((u = Je(n) ? lr : Ue.current), (u = Xr(t, u)));
        var f = n.getDerivedStateFromProps,
            d = typeof f == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        d || (typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function") || ((l !== r || a !== u) && Cd(t, s, r, u)), (wn = !1);
        var c = t.memoizedState;
        (s.state = c),
            Ps(t, r, s, o),
            (a = t.memoizedState),
            l !== r || c !== a || Ze.current || wn
                ? (typeof f == "function" && (Aa(t, n, f, r), (a = t.memoizedState)),
                  (l = wn || Ed(t, n, l, r, c, a, u))
                      ? (d ||
                            (typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function") ||
                            (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
                        typeof s.componentDidMount == "function" && (t.flags |= 4194308))
                      : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), (t.memoizedProps = r), (t.memoizedState = a)),
                  (s.props = r),
                  (s.state = a),
                  (s.context = u),
                  (r = l))
                : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), (r = !1));
    } else {
        (s = t.stateNode),
            Jp(e, t),
            (l = t.memoizedProps),
            (u = t.type === t.elementType ? l : Pt(t.type, l)),
            (s.props = u),
            (d = t.pendingProps),
            (c = s.context),
            (a = n.contextType),
            typeof a == "object" && a !== null ? (a = Ct(a)) : ((a = Je(n) ? lr : Ue.current), (a = Xr(t, a)));
        var x = n.getDerivedStateFromProps;
        (f = typeof x == "function" || typeof s.getSnapshotBeforeUpdate == "function") ||
            (typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function") ||
            ((l !== d || c !== a) && Cd(t, s, r, a)),
            (wn = !1),
            (c = t.memoizedState),
            (s.state = c),
            Ps(t, r, s, o);
        var v = t.memoizedState;
        l !== d || c !== v || Ze.current || wn
            ? (typeof x == "function" && (Aa(t, n, x, r), (v = t.memoizedState)),
              (u = wn || Ed(t, n, u, r, c, v, a) || !1)
                  ? (f ||
                        (typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function") ||
                        (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, v, a), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, v, a)),
                    typeof s.componentDidUpdate == "function" && (t.flags |= 4),
                    typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
                  : (typeof s.componentDidUpdate != "function" || (l === e.memoizedProps && c === e.memoizedState) || (t.flags |= 4),
                    typeof s.getSnapshotBeforeUpdate != "function" || (l === e.memoizedProps && c === e.memoizedState) || (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = v)),
              (s.props = r),
              (s.state = v),
              (s.context = a),
              (r = u))
            : (typeof s.componentDidUpdate != "function" || (l === e.memoizedProps && c === e.memoizedState) || (t.flags |= 4),
              typeof s.getSnapshotBeforeUpdate != "function" || (l === e.memoizedProps && c === e.memoizedState) || (t.flags |= 1024),
              (r = !1));
    }
    return Da(e, t, n, r, i, o);
}
function Da(e, t, n, r, o, i) {
    bh(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s) return o && hd(t, n, !1), cn(e, t, i);
    (r = t.stateNode), (Uv.current = t);
    var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (t.flags |= 1), e !== null && s ? ((t.child = Jr(t, e.child, null, i)), (t.child = Jr(t, null, l, i))) : He(e, t, l, i), (t.memoizedState = r.state), o && hd(t, n, !0), t.child;
}
function Nh(e) {
    var t = e.stateNode;
    t.pendingContext ? pd(e, t.pendingContext, t.pendingContext !== t.context) : t.context && pd(e, t.context, !1), Hu(e, t.containerInfo);
}
function Rd(e, t, n, r, o) {
    return Zr(), zu(o), (t.flags |= 256), He(e, t, n, r), t.child;
}
var za = { dehydrated: null, treeContext: null, retryLane: 0 };
function Fa(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
}
function Ph(e, t, n) {
    var r = t.pendingProps,
        o = ge.current,
        i = !1,
        s = (t.flags & 128) !== 0,
        l;
    if (
        ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
        l ? ((i = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (o |= 1),
        ae(ge, o & 1),
        e === null)
    )
        return (
            Oa(t),
            (e = t.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null)
                ? (t.mode & 1 ? (e.data === "$!" ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null)
                : ((s = r.children),
                  (e = r.fallback),
                  i
                      ? ((r = t.mode),
                        (i = t.child),
                        (s = { mode: "hidden", children: s }),
                        !(r & 1) && i !== null ? ((i.childLanes = 0), (i.pendingProps = s)) : (i = tl(s, r, 0, null)),
                        (e = sr(e, r, n, null)),
                        (i.return = t),
                        (e.return = t),
                        (i.sibling = e),
                        (t.child = i),
                        (t.child.memoizedState = Fa(n)),
                        (t.memoizedState = za),
                        e)
                      : Zu(t, s))
        );
    if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null))) return Vv(e, t, s, r, l, o, n);
    if (i) {
        (i = r.fallback), (s = t.mode), (o = e.child), (l = o.sibling);
        var a = { mode: "hidden", children: r.children };
        return (
            !(s & 1) && t.child !== o ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = a), (t.deletions = null)) : ((r = zn(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
            l !== null ? (i = zn(l, i)) : ((i = sr(i, s, n, null)), (i.flags |= 2)),
            (i.return = t),
            (r.return = t),
            (r.sibling = i),
            (t.child = r),
            (r = i),
            (i = t.child),
            (s = e.child.memoizedState),
            (s = s === null ? Fa(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }),
            (i.memoizedState = s),
            (i.childLanes = e.childLanes & ~n),
            (t.memoizedState = za),
            r
        );
    }
    return (
        (i = e.child),
        (e = i.sibling),
        (r = zn(i, { mode: "visible", children: r.children })),
        !(t.mode & 1) && (r.lanes = n),
        (r.return = t),
        (r.sibling = null),
        e !== null && ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
        (t.child = r),
        (t.memoizedState = null),
        r
    );
}
function Zu(e, t) {
    return (t = tl({ mode: "visible", children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
}
function Ui(e, t, n, r) {
    return r !== null && zu(r), Jr(t, e.child, null, n), (e = Zu(t, t.pendingProps.children)), (e.flags |= 2), (t.memoizedState = null), e;
}
function Vv(e, t, n, r, o, i, s) {
    if (n)
        return t.flags & 256
            ? ((t.flags &= -257), (r = Ql(Error(R(422)))), Ui(e, t, s, r))
            : t.memoizedState !== null
            ? ((t.child = e.child), (t.flags |= 128), null)
            : ((i = r.fallback),
              (o = t.mode),
              (r = tl({ mode: "visible", children: r.children }, o, 0, null)),
              (i = sr(i, o, s, null)),
              (i.flags |= 2),
              (r.return = t),
              (i.return = t),
              (r.sibling = i),
              (t.child = r),
              t.mode & 1 && Jr(t, e.child, null, s),
              (t.child.memoizedState = Fa(s)),
              (t.memoizedState = za),
              i);
    if (!(t.mode & 1)) return Ui(e, t, s, null);
    if (o.data === "$!") {
        if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
        return (r = l), (i = Error(R(419))), (r = Ql(i, r, void 0)), Ui(e, t, s, r);
    }
    if (((l = (s & e.childLanes) !== 0), Xe || l)) {
        if (((r = Ae), r !== null)) {
            switch (s & -s) {
                case 4:
                    o = 2;
                    break;
                case 16:
                    o = 8;
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
                    o = 32;
                    break;
                case 536870912:
                    o = 268435456;
                    break;
                default:
                    o = 0;
            }
            (o = o & (r.suspendedLanes | s) ? 0 : o), o !== 0 && o !== i.retryLane && ((i.retryLane = o), un(e, o), At(r, e, o, -1));
        }
        return oc(), (r = Ql(Error(R(421)))), Ui(e, t, s, r);
    }
    return o.data === "$?"
        ? ((t.flags |= 128), (t.child = e.child), (t = ny.bind(null, e)), (o._reactRetry = t), null)
        : ((e = i.treeContext),
          (dt = _n(o.nextSibling)),
          (ft = t),
          (he = !0),
          (Ot = null),
          e !== null && ((xt[wt++] = rn), (xt[wt++] = on), (xt[wt++] = ar), (rn = e.id), (on = e.overflow), (ar = t)),
          (t = Zu(t, r.children)),
          (t.flags |= 4096),
          t);
}
function Od(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Ma(e.return, t, n);
}
function Kl(e, t, n, r, o) {
    var i = e.memoizedState;
    i === null
        ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o })
        : ((i.isBackwards = t), (i.rendering = null), (i.renderingStartTime = 0), (i.last = r), (i.tail = n), (i.tailMode = o));
}
function Th(e, t, n) {
    var r = t.pendingProps,
        o = r.revealOrder,
        i = r.tail;
    if ((He(e, t, r.children, n), (r = ge.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128);
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13) e.memoizedState !== null && Od(e, n, t);
                else if (e.tag === 19) Od(e, n, t);
                else if (e.child !== null) {
                    (e.child.return = e), (e = e.child);
                    continue;
                }
                if (e === t) break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t) break e;
                    e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
            }
        r &= 1;
    }
    if ((ae(ge, r), !(t.mode & 1))) t.memoizedState = null;
    else
        switch (o) {
            case "forwards":
                for (n = t.child, o = null; n !== null; ) (e = n.alternate), e !== null && Ts(e) === null && (o = n), (n = n.sibling);
                (n = o), n === null ? ((o = t.child), (t.child = null)) : ((o = n.sibling), (n.sibling = null)), Kl(t, !1, o, n, i);
                break;
            case "backwards":
                for (n = null, o = t.child, t.child = null; o !== null; ) {
                    if (((e = o.alternate), e !== null && Ts(e) === null)) {
                        t.child = o;
                        break;
                    }
                    (e = o.sibling), (o.sibling = n), (n = o), (o = e);
                }
                Kl(t, !0, n, null, i);
                break;
            case "together":
                Kl(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
    return t.child;
}
function is(e, t) {
    !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function cn(e, t, n) {
    if ((e !== null && (t.dependencies = e.dependencies), (cr |= t.lanes), !(n & t.childLanes))) return null;
    if (e !== null && t.child !== e.child) throw Error(R(153));
    if (t.child !== null) {
        for (e = t.child, n = zn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) (e = e.sibling), (n = n.sibling = zn(e, e.pendingProps)), (n.return = t);
        n.sibling = null;
    }
    return t.child;
}
function Hv(e, t, n) {
    switch (t.tag) {
        case 3:
            Nh(t), Zr();
            break;
        case 5:
            eh(t);
            break;
        case 1:
            Je(t.type) && Es(t);
            break;
        case 4:
            Hu(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                o = t.memoizedProps.value;
            ae(bs, r._currentValue), (r._currentValue = o);
            break;
        case 13:
            if (((r = t.memoizedState), r !== null))
                return r.dehydrated !== null
                    ? (ae(ge, ge.current & 1), (t.flags |= 128), null)
                    : n & t.child.childLanes
                    ? Ph(e, t, n)
                    : (ae(ge, ge.current & 1), (e = cn(e, t, n)), e !== null ? e.sibling : null);
            ae(ge, ge.current & 1);
            break;
        case 19:
            if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
                if (r) return Th(e, t, n);
                t.flags |= 128;
            }
            if (((o = t.memoizedState), o !== null && ((o.rendering = null), (o.tail = null), (o.lastEffect = null)), ae(ge, ge.current), r)) break;
            return null;
        case 22:
        case 23:
            return (t.lanes = 0), kh(e, t, n);
    }
    return cn(e, t, n);
}
var jh, $a, Rh, Oh;
jh = function (e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            (n.child.return = n), (n = n.child);
            continue;
        }
        if (n === t) break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t) return;
            n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
    }
};
$a = function () {};
Rh = function (e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        (e = t.stateNode), er(Gt.current);
        var i = null;
        switch (n) {
            case "input":
                (o = aa(e, o)), (r = aa(e, r)), (i = []);
                break;
            case "select":
                (o = xe({}, o, { value: void 0 })), (r = xe({}, r, { value: void 0 })), (i = []);
                break;
            case "textarea":
                (o = da(e, o)), (r = da(e, r)), (i = []);
                break;
            default:
                typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ws);
        }
        pa(n, r);
        var s;
        n = null;
        for (u in o)
            if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                if (u === "style") {
                    var l = o[u];
                    for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
                } else
                    u !== "dangerouslySetInnerHTML" &&
                        u !== "children" &&
                        u !== "suppressContentEditableWarning" &&
                        u !== "suppressHydrationWarning" &&
                        u !== "autoFocus" &&
                        (Ho.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
        for (u in r) {
            var a = r[u];
            if (((l = o != null ? o[u] : void 0), r.hasOwnProperty(u) && a !== l && (a != null || l != null)))
                if (u === "style")
                    if (l) {
                        for (s in l) !l.hasOwnProperty(s) || (a && a.hasOwnProperty(s)) || (n || (n = {}), (n[s] = ""));
                        for (s in a) a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}), (n[s] = a[s]));
                    } else n || (i || (i = []), i.push(u, n)), (n = a);
                else
                    u === "dangerouslySetInnerHTML"
                        ? ((a = a ? a.__html : void 0), (l = l ? l.__html : void 0), a != null && l !== a && (i = i || []).push(u, a))
                        : u === "children"
                        ? (typeof a != "string" && typeof a != "number") || (i = i || []).push(u, "" + a)
                        : u !== "suppressContentEditableWarning" &&
                          u !== "suppressHydrationWarning" &&
                          (Ho.hasOwnProperty(u) ? (a != null && u === "onScroll" && de("scroll", e), i || l === a || (i = [])) : (i = i || []).push(u, a));
        }
        n && (i = i || []).push("style", n);
        var u = i;
        (t.updateQueue = u) && (t.flags |= 4);
    }
};
Oh = function (e, t, n, r) {
    n !== r && (t.flags |= 4);
};
function ko(e, t) {
    if (!he)
        switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
                n === null ? (e.tail = null) : (n.sibling = null);
                break;
            case "collapsed":
                n = e.tail;
                for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
                r === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
        }
}
function Fe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t) for (var o = e.child; o !== null; ) (n |= o.lanes | o.childLanes), (r |= o.subtreeFlags & 14680064), (r |= o.flags & 14680064), (o.return = e), (o = o.sibling);
    else for (o = e.child; o !== null; ) (n |= o.lanes | o.childLanes), (r |= o.subtreeFlags), (r |= o.flags), (o.return = e), (o = o.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Wv(e, t, n) {
    var r = t.pendingProps;
    switch ((Du(t), t.tag)) {
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
            return Fe(t), null;
        case 1:
            return Je(t.type) && Ss(), Fe(t), null;
        case 3:
            return (
                (r = t.stateNode),
                eo(),
                fe(Ze),
                fe(Ue),
                Qu(),
                r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
                (e === null || e.child === null) &&
                    ($i(t) ? (t.flags |= 4) : e === null || (e.memoizedState.isDehydrated && !(t.flags & 256)) || ((t.flags |= 1024), Ot !== null && (Ga(Ot), (Ot = null)))),
                $a(e, t),
                Fe(t),
                null
            );
        case 5:
            Wu(t);
            var o = er(ni.current);
            if (((n = t.type), e !== null && t.stateNode != null)) Rh(e, t, n, r, o), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(R(166));
                    return Fe(t), null;
                }
                if (((e = er(Gt.current)), $i(t))) {
                    (r = t.stateNode), (n = t.type);
                    var i = t.memoizedProps;
                    switch (((r[Qt] = t), (r[ei] = i), (e = (t.mode & 1) !== 0), n)) {
                        case "dialog":
                            de("cancel", r), de("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            de("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (o = 0; o < Oo.length; o++) de(Oo[o], r);
                            break;
                        case "source":
                            de("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            de("error", r), de("load", r);
                            break;
                        case "details":
                            de("toggle", r);
                            break;
                        case "input":
                            $c(r, i), de("invalid", r);
                            break;
                        case "select":
                            (r._wrapperState = { wasMultiple: !!i.multiple }), de("invalid", r);
                            break;
                        case "textarea":
                            Uc(r, i), de("invalid", r);
                    }
                    pa(n, i), (o = null);
                    for (var s in i)
                        if (i.hasOwnProperty(s)) {
                            var l = i[s];
                            s === "children"
                                ? typeof l == "string"
                                    ? r.textContent !== l && (i.suppressHydrationWarning !== !0 && Fi(r.textContent, l, e), (o = ["children", l]))
                                    : typeof l == "number" && r.textContent !== "" + l && (i.suppressHydrationWarning !== !0 && Fi(r.textContent, l, e), (o = ["children", "" + l]))
                                : Ho.hasOwnProperty(s) && l != null && s === "onScroll" && de("scroll", r);
                        }
                    switch (n) {
                        case "input":
                            Oi(r), Bc(r, i, !0);
                            break;
                        case "textarea":
                            Oi(r), Vc(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof i.onClick == "function" && (r.onclick = ws);
                    }
                    (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
                } else {
                    (s = o.nodeType === 9 ? o : o.ownerDocument),
                        e === "http://www.w3.org/1999/xhtml" && (e = ip(n)),
                        e === "http://www.w3.org/1999/xhtml"
                            ? n === "script"
                                ? ((e = s.createElement("div")), (e.innerHTML = "<script></script>"), (e = e.removeChild(e.firstChild)))
                                : typeof r.is == "string"
                                ? (e = s.createElement(n, { is: r.is }))
                                : ((e = s.createElement(n)), n === "select" && ((s = e), r.multiple ? (s.multiple = !0) : r.size && (s.size = r.size)))
                            : (e = s.createElementNS(e, n)),
                        (e[Qt] = t),
                        (e[ei] = r),
                        jh(e, t, !1, !1),
                        (t.stateNode = e);
                    e: {
                        switch (((s = ha(n, r)), n)) {
                            case "dialog":
                                de("cancel", e), de("close", e), (o = r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                de("load", e), (o = r);
                                break;
                            case "video":
                            case "audio":
                                for (o = 0; o < Oo.length; o++) de(Oo[o], e);
                                o = r;
                                break;
                            case "source":
                                de("error", e), (o = r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                de("error", e), de("load", e), (o = r);
                                break;
                            case "details":
                                de("toggle", e), (o = r);
                                break;
                            case "input":
                                $c(e, r), (o = aa(e, r)), de("invalid", e);
                                break;
                            case "option":
                                o = r;
                                break;
                            case "select":
                                (e._wrapperState = { wasMultiple: !!r.multiple }), (o = xe({}, r, { value: void 0 })), de("invalid", e);
                                break;
                            case "textarea":
                                Uc(e, r), (o = da(e, r)), de("invalid", e);
                                break;
                            default:
                                o = r;
                        }
                        pa(n, o), (l = o);
                        for (i in l)
                            if (l.hasOwnProperty(i)) {
                                var a = l[i];
                                i === "style"
                                    ? ap(e, a)
                                    : i === "dangerouslySetInnerHTML"
                                    ? ((a = a ? a.__html : void 0), a != null && sp(e, a))
                                    : i === "children"
                                    ? typeof a == "string"
                                        ? (n !== "textarea" || a !== "") && Wo(e, a)
                                        : typeof a == "number" && Wo(e, "" + a)
                                    : i !== "suppressContentEditableWarning" &&
                                      i !== "suppressHydrationWarning" &&
                                      i !== "autoFocus" &&
                                      (Ho.hasOwnProperty(i) ? a != null && i === "onScroll" && de("scroll", e) : a != null && Eu(e, i, a, s));
                            }
                        switch (n) {
                            case "input":
                                Oi(e), Bc(e, r, !1);
                                break;
                            case "textarea":
                                Oi(e), Vc(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + Fn(r.value));
                                break;
                            case "select":
                                (e.multiple = !!r.multiple), (i = r.value), i != null ? Mr(e, !!r.multiple, i, !1) : r.defaultValue != null && Mr(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof o.onClick == "function" && (e.onclick = ws);
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1;
                        }
                    }
                    r && (t.flags |= 4);
                }
                t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
            }
            return Fe(t), null;
        case 6:
            if (e && t.stateNode != null) Oh(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(R(166));
                if (((n = er(ni.current)), er(Gt.current), $i(t))) {
                    if (((r = t.stateNode), (n = t.memoizedProps), (r[Qt] = t), (i = r.nodeValue !== n) && ((e = ft), e !== null)))
                        switch (e.tag) {
                            case 3:
                                Fi(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !== !0 && Fi(r.nodeValue, n, (e.mode & 1) !== 0);
                        }
                    i && (t.flags |= 4);
                } else (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)), (r[Qt] = t), (t.stateNode = r);
            }
            return Fe(t), null;
        case 13:
            if ((fe(ge), (r = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))) {
                if (he && dt !== null && t.mode & 1 && !(t.flags & 128)) Yp(), Zr(), (t.flags |= 98560), (i = !1);
                else if (((i = $i(t)), r !== null && r.dehydrated !== null)) {
                    if (e === null) {
                        if (!i) throw Error(R(318));
                        if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i)) throw Error(R(317));
                        i[Qt] = t;
                    } else Zr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
                    Fe(t), (i = !1);
                } else Ot !== null && (Ga(Ot), (Ot = null)), (i = !0);
                if (!i) return t.flags & 65536 ? t : null;
            }
            return t.flags & 128
                ? ((t.lanes = n), t)
                : ((r = r !== null),
                  r !== (e !== null && e.memoizedState !== null) && r && ((t.child.flags |= 8192), t.mode & 1 && (e === null || ge.current & 1 ? Re === 0 && (Re = 3) : oc())),
                  t.updateQueue !== null && (t.flags |= 4),
                  Fe(t),
                  null);
        case 4:
            return eo(), $a(e, t), e === null && Zo(t.stateNode.containerInfo), Fe(t), null;
        case 10:
            return Bu(t.type._context), Fe(t), null;
        case 17:
            return Je(t.type) && Ss(), Fe(t), null;
        case 19:
            if ((fe(ge), (i = t.memoizedState), i === null)) return Fe(t), null;
            if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
                if (r) ko(i, !1);
                else {
                    if (Re !== 0 || (e !== null && e.flags & 128))
                        for (e = t.child; e !== null; ) {
                            if (((s = Ts(e)), s !== null)) {
                                for (t.flags |= 128, ko(i, !1), r = s.updateQueue, r !== null && ((t.updateQueue = r), (t.flags |= 4)), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                                    (i = n),
                                        (e = r),
                                        (i.flags &= 14680066),
                                        (s = i.alternate),
                                        s === null
                                            ? ((i.childLanes = 0),
                                              (i.lanes = e),
                                              (i.child = null),
                                              (i.subtreeFlags = 0),
                                              (i.memoizedProps = null),
                                              (i.memoizedState = null),
                                              (i.updateQueue = null),
                                              (i.dependencies = null),
                                              (i.stateNode = null))
                                            : ((i.childLanes = s.childLanes),
                                              (i.lanes = s.lanes),
                                              (i.child = s.child),
                                              (i.subtreeFlags = 0),
                                              (i.deletions = null),
                                              (i.memoizedProps = s.memoizedProps),
                                              (i.memoizedState = s.memoizedState),
                                              (i.updateQueue = s.updateQueue),
                                              (i.type = s.type),
                                              (e = s.dependencies),
                                              (i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                                        (n = n.sibling);
                                return ae(ge, (ge.current & 1) | 2), t.child;
                            }
                            e = e.sibling;
                        }
                    i.tail !== null && Ce() > no && ((t.flags |= 128), (r = !0), ko(i, !1), (t.lanes = 4194304));
                }
            else {
                if (!r)
                    if (((e = Ts(s)), e !== null)) {
                        if (
                            ((t.flags |= 128),
                            (r = !0),
                            (n = e.updateQueue),
                            n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                            ko(i, !0),
                            i.tail === null && i.tailMode === "hidden" && !s.alternate && !he)
                        )
                            return Fe(t), null;
                    } else 2 * Ce() - i.renderingStartTime > no && n !== 1073741824 && ((t.flags |= 128), (r = !0), ko(i, !1), (t.lanes = 4194304));
                i.isBackwards ? ((s.sibling = t.child), (t.child = s)) : ((n = i.last), n !== null ? (n.sibling = s) : (t.child = s), (i.last = s));
            }
            return i.tail !== null
                ? ((t = i.tail), (i.rendering = t), (i.tail = t.sibling), (i.renderingStartTime = Ce()), (t.sibling = null), (n = ge.current), ae(ge, r ? (n & 1) | 2 : n & 1), t)
                : (Fe(t), null);
        case 22:
        case 23:
            return (
                rc(),
                (r = t.memoizedState !== null),
                e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
                r && t.mode & 1 ? ut & 1073741824 && (Fe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Fe(t),
                null
            );
        case 24:
            return null;
        case 25:
            return null;
    }
    throw Error(R(156, t.tag));
}
function Qv(e, t) {
    switch ((Du(t), t.tag)) {
        case 1:
            return Je(t.type) && Ss(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
        case 3:
            return eo(), fe(Ze), fe(Ue), Qu(), (e = t.flags), e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null;
        case 5:
            return Wu(t), null;
        case 13:
            if ((fe(ge), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
                if (t.alternate === null) throw Error(R(340));
                Zr();
            }
            return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
        case 19:
            return fe(ge), null;
        case 4:
            return eo(), null;
        case 10:
            return Bu(t.type._context), null;
        case 22:
        case 23:
            return rc(), null;
        case 24:
            return null;
        default:
            return null;
    }
}
var Vi = !1,
    Be = !1,
    Kv = typeof WeakSet == "function" ? WeakSet : Set,
    z = null;
function Rr(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null);
            } catch (r) {
                Se(e, t, r);
            }
        else n.current = null;
}
function Ba(e, t, n) {
    try {
        n();
    } catch (r) {
        Se(e, t, r);
    }
}
var Md = !1;
function Gv(e, t) {
    if (((ka = vs), (e = Ip()), Lu(e))) {
        if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
        else
            e: {
                n = ((n = e.ownerDocument) && n.defaultView) || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var o = r.anchorOffset,
                        i = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType, i.nodeType;
                    } catch {
                        n = null;
                        break e;
                    }
                    var s = 0,
                        l = -1,
                        a = -1,
                        u = 0,
                        f = 0,
                        d = e,
                        c = null;
                    t: for (;;) {
                        for (
                            var x;
                            d !== n || (o !== 0 && d.nodeType !== 3) || (l = s + o),
                                d !== i || (r !== 0 && d.nodeType !== 3) || (a = s + r),
                                d.nodeType === 3 && (s += d.nodeValue.length),
                                (x = d.firstChild) !== null;

                        )
                            (c = d), (d = x);
                        for (;;) {
                            if (d === e) break t;
                            if ((c === n && ++u === o && (l = s), c === i && ++f === r && (a = s), (x = d.nextSibling) !== null)) break;
                            (d = c), (c = d.parentNode);
                        }
                        d = x;
                    }
                    n = l === -1 || a === -1 ? null : { start: l, end: a };
                } else n = null;
            }
        n = n || { start: 0, end: 0 };
    } else n = null;
    for (ba = { focusedElem: e, selectionRange: n }, vs = !1, z = t; z !== null; )
        if (((t = z), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (z = e);
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
                                    var m = v.memoizedProps,
                                        w = v.memoizedState,
                                        p = t.stateNode,
                                        h = p.getSnapshotBeforeUpdate(t.elementType === t.type ? m : Pt(t.type, m), w);
                                    p.__reactInternalSnapshotBeforeUpdate = h;
                                }
                                break;
                            case 3:
                                var y = t.stateNode.containerInfo;
                                y.nodeType === 1 ? (y.textContent = "") : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(R(163));
                        }
                } catch (E) {
                    Se(t, t.return, E);
                }
                if (((e = t.sibling), e !== null)) {
                    (e.return = t.return), (z = e);
                    break;
                }
                z = t.return;
            }
    return (v = Md), (Md = !1), v;
}
function Fo(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
        var o = (r = r.next);
        do {
            if ((o.tag & e) === e) {
                var i = o.destroy;
                (o.destroy = void 0), i !== void 0 && Ba(t, n, i);
            }
            o = o.next;
        } while (o !== r);
    }
}
function Js(e, t) {
    if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
        var n = (t = t.next);
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
            }
            n = n.next;
        } while (n !== t);
    }
}
function Ua(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n;
        }
        typeof t == "function" ? t(e) : (t.current = e);
    }
}
function Mh(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Mh(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 && ((t = e.stateNode), t !== null && (delete t[Qt], delete t[ei], delete t[Ta], delete t[Rv], delete t[Ov])),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
}
function Ah(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ad(e) {
    e: for (;;) {
        for (; e.sibling === null; ) {
            if (e.return === null || Ah(e.return)) return null;
            e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            (e.child.return = e), (e = e.child);
        }
        if (!(e.flags & 2)) return e.stateNode;
    }
}
function Va(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        (e = e.stateNode),
            t
                ? n.nodeType === 8
                    ? n.parentNode.insertBefore(e, t)
                    : n.insertBefore(e, t)
                : (n.nodeType === 8 ? ((t = n.parentNode), t.insertBefore(e, n)) : ((t = n), t.appendChild(e)), (n = n._reactRootContainer), n != null || t.onclick !== null || (t.onclick = ws));
    else if (r !== 4 && ((e = e.child), e !== null)) for (Va(e, t, n), e = e.sibling; e !== null; ) Va(e, t, n), (e = e.sibling);
}
function Ha(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null)) for (Ha(e, t, n), e = e.sibling; e !== null; ) Ha(e, t, n), (e = e.sibling);
}
var _e = null,
    Rt = !1;
function mn(e, t, n) {
    for (n = n.child; n !== null; ) _h(e, t, n), (n = n.sibling);
}
function _h(e, t, n) {
    if (Kt && typeof Kt.onCommitFiberUnmount == "function")
        try {
            Kt.onCommitFiberUnmount(Ws, n);
        } catch {}
    switch (n.tag) {
        case 5:
            Be || Rr(n, t);
        case 6:
            var r = _e,
                o = Rt;
            (_e = null),
                mn(e, t, n),
                (_e = r),
                (Rt = o),
                _e !== null && (Rt ? ((e = _e), (n = n.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : _e.removeChild(n.stateNode));
            break;
        case 18:
            _e !== null && (Rt ? ((e = _e), (n = n.stateNode), e.nodeType === 8 ? $l(e.parentNode, n) : e.nodeType === 1 && $l(e, n), Yo(e)) : $l(_e, n.stateNode));
            break;
        case 4:
            (r = _e), (o = Rt), (_e = n.stateNode.containerInfo), (Rt = !0), mn(e, t, n), (_e = r), (Rt = o);
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!Be && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
                o = r = r.next;
                do {
                    var i = o,
                        s = i.destroy;
                    (i = i.tag), s !== void 0 && (i & 2 || i & 4) && Ba(n, t, s), (o = o.next);
                } while (o !== r);
            }
            mn(e, t, n);
            break;
        case 1:
            if (!Be && (Rr(n, t), (r = n.stateNode), typeof r.componentWillUnmount == "function"))
                try {
                    (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
                } catch (l) {
                    Se(n, t, l);
                }
            mn(e, t, n);
            break;
        case 21:
            mn(e, t, n);
            break;
        case 22:
            n.mode & 1 ? ((Be = (r = Be) || n.memoizedState !== null), mn(e, t, n), (Be = r)) : mn(e, t, n);
            break;
        default:
            mn(e, t, n);
    }
}
function _d(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Kv()),
            t.forEach(function (r) {
                var o = ry.bind(null, e, r);
                n.has(r) || (n.add(r), r.then(o, o));
            });
    }
}
function Nt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var i = e,
                    s = t,
                    l = s;
                e: for (; l !== null; ) {
                    switch (l.tag) {
                        case 5:
                            (_e = l.stateNode), (Rt = !1);
                            break e;
                        case 3:
                            (_e = l.stateNode.containerInfo), (Rt = !0);
                            break e;
                        case 4:
                            (_e = l.stateNode.containerInfo), (Rt = !0);
                            break e;
                    }
                    l = l.return;
                }
                if (_e === null) throw Error(R(160));
                _h(i, s, o), (_e = null), (Rt = !1);
                var a = o.alternate;
                a !== null && (a.return = null), (o.return = null);
            } catch (u) {
                Se(o, t, u);
            }
        }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Lh(t, e), (t = t.sibling);
}
function Lh(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ((Nt(t, e), Bt(e), r & 4)) {
                try {
                    Fo(3, e, e.return), Js(3, e);
                } catch (m) {
                    Se(e, e.return, m);
                }
                try {
                    Fo(5, e, e.return);
                } catch (m) {
                    Se(e, e.return, m);
                }
            }
            break;
        case 1:
            Nt(t, e), Bt(e), r & 512 && n !== null && Rr(n, n.return);
            break;
        case 5:
            if ((Nt(t, e), Bt(e), r & 512 && n !== null && Rr(n, n.return), e.flags & 32)) {
                var o = e.stateNode;
                try {
                    Wo(o, "");
                } catch (m) {
                    Se(e, e.return, m);
                }
            }
            if (r & 4 && ((o = e.stateNode), o != null)) {
                var i = e.memoizedProps,
                    s = n !== null ? n.memoizedProps : i,
                    l = e.type,
                    a = e.updateQueue;
                if (((e.updateQueue = null), a !== null))
                    try {
                        l === "input" && i.type === "radio" && i.name != null && rp(o, i), ha(l, s);
                        var u = ha(l, i);
                        for (s = 0; s < a.length; s += 2) {
                            var f = a[s],
                                d = a[s + 1];
                            f === "style" ? ap(o, d) : f === "dangerouslySetInnerHTML" ? sp(o, d) : f === "children" ? Wo(o, d) : Eu(o, f, d, u);
                        }
                        switch (l) {
                            case "input":
                                ua(o, i);
                                break;
                            case "textarea":
                                op(o, i);
                                break;
                            case "select":
                                var c = o._wrapperState.wasMultiple;
                                o._wrapperState.wasMultiple = !!i.multiple;
                                var x = i.value;
                                x != null
                                    ? Mr(o, !!i.multiple, x, !1)
                                    : c !== !!i.multiple && (i.defaultValue != null ? Mr(o, !!i.multiple, i.defaultValue, !0) : Mr(o, !!i.multiple, i.multiple ? [] : "", !1));
                        }
                        o[ei] = i;
                    } catch (m) {
                        Se(e, e.return, m);
                    }
            }
            break;
        case 6:
            if ((Nt(t, e), Bt(e), r & 4)) {
                if (e.stateNode === null) throw Error(R(162));
                (o = e.stateNode), (i = e.memoizedProps);
                try {
                    o.nodeValue = i;
                } catch (m) {
                    Se(e, e.return, m);
                }
            }
            break;
        case 3:
            if ((Nt(t, e), Bt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
                try {
                    Yo(t.containerInfo);
                } catch (m) {
                    Se(e, e.return, m);
                }
            break;
        case 4:
            Nt(t, e), Bt(e);
            break;
        case 13:
            Nt(t, e),
                Bt(e),
                (o = e.child),
                o.flags & 8192 && ((i = o.memoizedState !== null), (o.stateNode.isHidden = i), !i || (o.alternate !== null && o.alternate.memoizedState !== null) || (tc = Ce())),
                r & 4 && _d(e);
            break;
        case 22:
            if (((f = n !== null && n.memoizedState !== null), e.mode & 1 ? ((Be = (u = Be) || f), Nt(t, e), (Be = u)) : Nt(t, e), Bt(e), r & 8192)) {
                if (((u = e.memoizedState !== null), (e.stateNode.isHidden = u) && !f && e.mode & 1))
                    for (z = e, f = e.child; f !== null; ) {
                        for (d = z = f; z !== null; ) {
                            switch (((c = z), (x = c.child), c.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Fo(4, c, c.return);
                                    break;
                                case 1:
                                    Rr(c, c.return);
                                    var v = c.stateNode;
                                    if (typeof v.componentWillUnmount == "function") {
                                        (r = c), (n = c.return);
                                        try {
                                            (t = r), (v.props = t.memoizedProps), (v.state = t.memoizedState), v.componentWillUnmount();
                                        } catch (m) {
                                            Se(r, n, m);
                                        }
                                    }
                                    break;
                                case 5:
                                    Rr(c, c.return);
                                    break;
                                case 22:
                                    if (c.memoizedState !== null) {
                                        Id(d);
                                        continue;
                                    }
                            }
                            x !== null ? ((x.return = c), (z = x)) : Id(d);
                        }
                        f = f.sibling;
                    }
                e: for (f = null, d = e; ; ) {
                    if (d.tag === 5) {
                        if (f === null) {
                            f = d;
                            try {
                                (o = d.stateNode),
                                    u
                                        ? ((i = o.style), typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : (i.display = "none"))
                                        : ((l = d.stateNode), (a = d.memoizedProps.style), (s = a != null && a.hasOwnProperty("display") ? a.display : null), (l.style.display = lp("display", s)));
                            } catch (m) {
                                Se(e, e.return, m);
                            }
                        }
                    } else if (d.tag === 6) {
                        if (f === null)
                            try {
                                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
                            } catch (m) {
                                Se(e, e.return, m);
                            }
                    } else if (((d.tag !== 22 && d.tag !== 23) || d.memoizedState === null || d === e) && d.child !== null) {
                        (d.child.return = d), (d = d.child);
                        continue;
                    }
                    if (d === e) break e;
                    for (; d.sibling === null; ) {
                        if (d.return === null || d.return === e) break e;
                        f === d && (f = null), (d = d.return);
                    }
                    f === d && (f = null), (d.sibling.return = d.return), (d = d.sibling);
                }
            }
            break;
        case 19:
            Nt(t, e), Bt(e), r & 4 && _d(e);
            break;
        case 21:
            break;
        default:
            Nt(t, e), Bt(e);
    }
}
function Bt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (Ah(n)) {
                        var r = n;
                        break e;
                    }
                    n = n.return;
                }
                throw Error(R(160));
            }
            switch (r.tag) {
                case 5:
                    var o = r.stateNode;
                    r.flags & 32 && (Wo(o, ""), (r.flags &= -33));
                    var i = Ad(e);
                    Ha(e, i, o);
                    break;
                case 3:
                case 4:
                    var s = r.stateNode.containerInfo,
                        l = Ad(e);
                    Va(e, l, s);
                    break;
                default:
                    throw Error(R(161));
            }
        } catch (a) {
            Se(e, e.return, a);
        }
        e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
}
function Yv(e, t, n) {
    (z = e), Ih(e);
}
function Ih(e, t, n) {
    for (var r = (e.mode & 1) !== 0; z !== null; ) {
        var o = z,
            i = o.child;
        if (o.tag === 22 && r) {
            var s = o.memoizedState !== null || Vi;
            if (!s) {
                var l = o.alternate,
                    a = (l !== null && l.memoizedState !== null) || Be;
                l = Vi;
                var u = Be;
                if (((Vi = s), (Be = a) && !u)) for (z = o; z !== null; ) (s = z), (a = s.child), s.tag === 22 && s.memoizedState !== null ? Dd(o) : a !== null ? ((a.return = s), (z = a)) : Dd(o);
                for (; i !== null; ) (z = i), Ih(i), (i = i.sibling);
                (z = o), (Vi = l), (Be = u);
            }
            Ld(e);
        } else o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (z = i)) : Ld(e);
    }
}
function Ld(e) {
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
                            Be || Js(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !Be)
                                if (n === null) r.componentDidMount();
                                else {
                                    var o = t.elementType === t.type ? n.memoizedProps : Pt(t.type, n.memoizedProps);
                                    r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                                }
                            var i = t.updateQueue;
                            i !== null && xd(t, i, r);
                            break;
                        case 3:
                            var s = t.updateQueue;
                            if (s !== null) {
                                if (((n = null), t.child !== null))
                                    switch (t.child.tag) {
                                        case 5:
                                            n = t.child.stateNode;
                                            break;
                                        case 1:
                                            n = t.child.stateNode;
                                    }
                                xd(t, s, n);
                            }
                            break;
                        case 5:
                            var l = t.stateNode;
                            if (n === null && t.flags & 4) {
                                n = l;
                                var a = t.memoizedProps;
                                switch (t.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        a.autoFocus && n.focus();
                                        break;
                                    case "img":
                                        a.src && (n.src = a.src);
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
                                var u = t.alternate;
                                if (u !== null) {
                                    var f = u.memoizedState;
                                    if (f !== null) {
                                        var d = f.dehydrated;
                                        d !== null && Yo(d);
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
                            throw Error(R(163));
                    }
                Be || (t.flags & 512 && Ua(t));
            } catch (c) {
                Se(t, t.return, c);
            }
        }
        if (t === e) {
            z = null;
            break;
        }
        if (((n = t.sibling), n !== null)) {
            (n.return = t.return), (z = n);
            break;
        }
        z = t.return;
    }
}
function Id(e) {
    for (; z !== null; ) {
        var t = z;
        if (t === e) {
            z = null;
            break;
        }
        var n = t.sibling;
        if (n !== null) {
            (n.return = t.return), (z = n);
            break;
        }
        z = t.return;
    }
}
function Dd(e) {
    for (; z !== null; ) {
        var t = z;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Js(4, t);
                    } catch (a) {
                        Se(t, n, a);
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var o = t.return;
                        try {
                            r.componentDidMount();
                        } catch (a) {
                            Se(t, o, a);
                        }
                    }
                    var i = t.return;
                    try {
                        Ua(t);
                    } catch (a) {
                        Se(t, i, a);
                    }
                    break;
                case 5:
                    var s = t.return;
                    try {
                        Ua(t);
                    } catch (a) {
                        Se(t, s, a);
                    }
            }
        } catch (a) {
            Se(t, t.return, a);
        }
        if (t === e) {
            z = null;
            break;
        }
        var l = t.sibling;
        if (l !== null) {
            (l.return = t.return), (z = l);
            break;
        }
        z = t.return;
    }
}
var qv = Math.ceil,
    Os = pn.ReactCurrentDispatcher,
    Ju = pn.ReactCurrentOwner,
    Et = pn.ReactCurrentBatchConfig,
    ee = 0,
    Ae = null,
    be = null,
    Le = 0,
    ut = 0,
    Or = Qn(0),
    Re = 0,
    si = null,
    cr = 0,
    el = 0,
    ec = 0,
    $o = null,
    qe = null,
    tc = 0,
    no = 1 / 0,
    tn = null,
    Ms = !1,
    Wa = null,
    In = null,
    Hi = !1,
    jn = null,
    As = 0,
    Bo = 0,
    Qa = null,
    ss = -1,
    ls = 0;
function Qe() {
    return ee & 6 ? Ce() : ss !== -1 ? ss : (ss = Ce());
}
function Dn(e) {
    return e.mode & 1
        ? ee & 2 && Le !== 0
            ? Le & -Le
            : Av.transition !== null
            ? (ls === 0 && (ls = wp()), ls)
            : ((e = re), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Pp(e.type))), e)
        : 1;
}
function At(e, t, n, r) {
    if (50 < Bo) throw ((Bo = 0), (Qa = null), Error(R(185)));
    yi(e, n, r), (!(ee & 2) || e !== Ae) && (e === Ae && (!(ee & 2) && (el |= n), Re === 4 && En(e, Le)), et(e, r), n === 1 && ee === 0 && !(t.mode & 1) && ((no = Ce() + 500), qs && Kn()));
}
function et(e, t) {
    var n = e.callbackNode;
    Ag(e, t);
    var r = gs(e, e === Ae ? Le : 0);
    if (r === 0) n !== null && Qc(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((n != null && Qc(n), t === 1))
            e.tag === 0 ? Mv(zd.bind(null, e)) : Qp(zd.bind(null, e)),
                Tv(function () {
                    !(ee & 6) && Kn();
                }),
                (n = null);
        else {
            switch (Sp(r)) {
                case 1:
                    n = Pu;
                    break;
                case 4:
                    n = yp;
                    break;
                case 16:
                    n = ms;
                    break;
                case 536870912:
                    n = xp;
                    break;
                default:
                    n = ms;
            }
            n = Hh(n, Dh.bind(null, e));
        }
        (e.callbackPriority = t), (e.callbackNode = n);
    }
}
function Dh(e, t) {
    if (((ss = -1), (ls = 0), ee & 6)) throw Error(R(327));
    var n = e.callbackNode;
    if (Dr() && e.callbackNode !== n) return null;
    var r = gs(e, e === Ae ? Le : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = _s(e, r);
    else {
        t = r;
        var o = ee;
        ee |= 2;
        var i = Fh();
        (Ae !== e || Le !== t) && ((tn = null), (no = Ce() + 500), ir(e, t));
        do
            try {
                Jv();
                break;
            } catch (l) {
                zh(e, l);
            }
        while (!0);
        $u(), (Os.current = i), (ee = o), be !== null ? (t = 0) : ((Ae = null), (Le = 0), (t = Re));
    }
    if (t !== 0) {
        if ((t === 2 && ((o = xa(e)), o !== 0 && ((r = o), (t = Ka(e, o)))), t === 1)) throw ((n = si), ir(e, 0), En(e, r), et(e, Ce()), n);
        if (t === 6) En(e, r);
        else {
            if (((o = e.current.alternate), !(r & 30) && !Xv(o) && ((t = _s(e, r)), t === 2 && ((i = xa(e)), i !== 0 && ((r = i), (t = Ka(e, i)))), t === 1)))
                throw ((n = si), ir(e, 0), En(e, r), et(e, Ce()), n);
            switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                    throw Error(R(345));
                case 2:
                    Xn(e, qe, tn);
                    break;
                case 3:
                    if ((En(e, r), (r & 130023424) === r && ((t = tc + 500 - Ce()), 10 < t))) {
                        if (gs(e, 0) !== 0) break;
                        if (((o = e.suspendedLanes), (o & r) !== r)) {
                            Qe(), (e.pingedLanes |= e.suspendedLanes & o);
                            break;
                        }
                        e.timeoutHandle = Pa(Xn.bind(null, e, qe, tn), t);
                        break;
                    }
                    Xn(e, qe, tn);
                    break;
                case 4:
                    if ((En(e, r), (r & 4194240) === r)) break;
                    for (t = e.eventTimes, o = -1; 0 < r; ) {
                        var s = 31 - Mt(r);
                        (i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i);
                    }
                    if (((r = o), (r = Ce() - r), (r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * qv(r / 1960)) - r), 10 < r)) {
                        e.timeoutHandle = Pa(Xn.bind(null, e, qe, tn), r);
                        break;
                    }
                    Xn(e, qe, tn);
                    break;
                case 5:
                    Xn(e, qe, tn);
                    break;
                default:
                    throw Error(R(329));
            }
        }
    }
    return et(e, Ce()), e.callbackNode === n ? Dh.bind(null, e) : null;
}
function Ka(e, t) {
    var n = $o;
    return e.current.memoizedState.isDehydrated && (ir(e, t).flags |= 256), (e = _s(e, t)), e !== 2 && ((t = qe), (qe = n), t !== null && Ga(t)), e;
}
function Ga(e) {
    qe === null ? (qe = e) : qe.push.apply(qe, e);
}
function Xv(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && ((n = n.stores), n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r],
                        i = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!Lt(i(), o)) return !1;
                    } catch {
                        return !1;
                    }
                }
        }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
        else {
            if (t === e) break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) return !0;
                t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
        }
    }
    return !0;
}
function En(e, t) {
    for (t &= ~ec, t &= ~el, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Mt(t),
            r = 1 << n;
        (e[n] = -1), (t &= ~r);
    }
}
function zd(e) {
    if (ee & 6) throw Error(R(327));
    Dr();
    var t = gs(e, 0);
    if (!(t & 1)) return et(e, Ce()), null;
    var n = _s(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = xa(e);
        r !== 0 && ((t = r), (n = Ka(e, r)));
    }
    if (n === 1) throw ((n = si), ir(e, 0), En(e, t), et(e, Ce()), n);
    if (n === 6) throw Error(R(345));
    return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), Xn(e, qe, tn), et(e, Ce()), null;
}
function nc(e, t) {
    var n = ee;
    ee |= 1;
    try {
        return e(t);
    } finally {
        (ee = n), ee === 0 && ((no = Ce() + 500), qs && Kn());
    }
}
function dr(e) {
    jn !== null && jn.tag === 0 && !(ee & 6) && Dr();
    var t = ee;
    ee |= 1;
    var n = Et.transition,
        r = re;
    try {
        if (((Et.transition = null), (re = 1), e)) return e();
    } finally {
        (re = r), (Et.transition = n), (ee = t), !(ee & 6) && Kn();
    }
}
function rc() {
    (ut = Or.current), fe(Or);
}
function ir(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Pv(n)), be !== null))
        for (n = be.return; n !== null; ) {
            var r = n;
            switch ((Du(r), r.tag)) {
                case 1:
                    (r = r.type.childContextTypes), r != null && Ss();
                    break;
                case 3:
                    eo(), fe(Ze), fe(Ue), Qu();
                    break;
                case 5:
                    Wu(r);
                    break;
                case 4:
                    eo();
                    break;
                case 13:
                    fe(ge);
                    break;
                case 19:
                    fe(ge);
                    break;
                case 10:
                    Bu(r.type._context);
                    break;
                case 22:
                case 23:
                    rc();
            }
            n = n.return;
        }
    if (((Ae = e), (be = e = zn(e.current, null)), (Le = ut = t), (Re = 0), (si = null), (ec = el = cr = 0), (qe = $o = null), Jn !== null)) {
        for (t = 0; t < Jn.length; t++)
            if (((n = Jn[t]), (r = n.interleaved), r !== null)) {
                n.interleaved = null;
                var o = r.next,
                    i = n.pending;
                if (i !== null) {
                    var s = i.next;
                    (i.next = o), (r.next = s);
                }
                n.pending = r;
            }
        Jn = null;
    }
    return e;
}
function zh(e, t) {
    do {
        var n = be;
        try {
            if (($u(), (rs.current = Rs), js)) {
                for (var r = ye.memoizedState; r !== null; ) {
                    var o = r.queue;
                    o !== null && (o.pending = null), (r = r.next);
                }
                js = !1;
            }
            if (((ur = 0), (Me = Te = ye = null), (zo = !1), (ri = 0), (Ju.current = null), n === null || n.return === null)) {
                (Re = 1), (si = t), (be = null);
                break;
            }
            e: {
                var i = e,
                    s = n.return,
                    l = n,
                    a = t;
                if (((t = Le), (l.flags |= 32768), a !== null && typeof a == "object" && typeof a.then == "function")) {
                    var u = a,
                        f = l,
                        d = f.tag;
                    if (!(f.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var c = f.alternate;
                        c ? ((f.updateQueue = c.updateQueue), (f.memoizedState = c.memoizedState), (f.lanes = c.lanes)) : ((f.updateQueue = null), (f.memoizedState = null));
                    }
                    var x = bd(s);
                    if (x !== null) {
                        (x.flags &= -257), Nd(x, s, l, i, t), x.mode & 1 && kd(i, u, t), (t = x), (a = u);
                        var v = t.updateQueue;
                        if (v === null) {
                            var m = new Set();
                            m.add(a), (t.updateQueue = m);
                        } else v.add(a);
                        break e;
                    } else {
                        if (!(t & 1)) {
                            kd(i, u, t), oc();
                            break e;
                        }
                        a = Error(R(426));
                    }
                } else if (he && l.mode & 1) {
                    var w = bd(s);
                    if (w !== null) {
                        !(w.flags & 65536) && (w.flags |= 256), Nd(w, s, l, i, t), zu(to(a, l));
                        break e;
                    }
                }
                (i = a = to(a, l)), Re !== 4 && (Re = 2), $o === null ? ($o = [i]) : $o.push(i), (i = s);
                do {
                    switch (i.tag) {
                        case 3:
                            (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                            var p = Sh(i, a, t);
                            yd(i, p);
                            break e;
                        case 1:
                            l = a;
                            var h = i.type,
                                y = i.stateNode;
                            if (!(i.flags & 128) && (typeof h.getDerivedStateFromError == "function" || (y !== null && typeof y.componentDidCatch == "function" && (In === null || !In.has(y))))) {
                                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                                var E = Eh(i, l, t);
                                yd(i, E);
                                break e;
                            }
                    }
                    i = i.return;
                } while (i !== null);
            }
            Bh(n);
        } catch (C) {
            (t = C), be === n && n !== null && (be = n = n.return);
            continue;
        }
        break;
    } while (!0);
}
function Fh() {
    var e = Os.current;
    return (Os.current = Rs), e === null ? Rs : e;
}
function oc() {
    (Re === 0 || Re === 3 || Re === 2) && (Re = 4), Ae === null || (!(cr & 268435455) && !(el & 268435455)) || En(Ae, Le);
}
function _s(e, t) {
    var n = ee;
    ee |= 2;
    var r = Fh();
    (Ae !== e || Le !== t) && ((tn = null), ir(e, t));
    do
        try {
            Zv();
            break;
        } catch (o) {
            zh(e, o);
        }
    while (!0);
    if (($u(), (ee = n), (Os.current = r), be !== null)) throw Error(R(261));
    return (Ae = null), (Le = 0), Re;
}
function Zv() {
    for (; be !== null; ) $h(be);
}
function Jv() {
    for (; be !== null && !kg(); ) $h(be);
}
function $h(e) {
    var t = Vh(e.alternate, e, ut);
    (e.memoizedProps = e.pendingProps), t === null ? Bh(e) : (be = t), (Ju.current = null);
}
function Bh(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (((e = t.return), t.flags & 32768)) {
            if (((n = Qv(n, t)), n !== null)) {
                (n.flags &= 32767), (be = n);
                return;
            }
            if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            else {
                (Re = 6), (be = null);
                return;
            }
        } else if (((n = Wv(n, t, ut)), n !== null)) {
            be = n;
            return;
        }
        if (((t = t.sibling), t !== null)) {
            be = t;
            return;
        }
        be = t = e;
    } while (t !== null);
    Re === 0 && (Re = 5);
}
function Xn(e, t, n) {
    var r = re,
        o = Et.transition;
    try {
        (Et.transition = null), (re = 1), ey(e, t, n, r);
    } finally {
        (Et.transition = o), (re = r);
    }
    return null;
}
function ey(e, t, n, r) {
    do Dr();
    while (jn !== null);
    if (ee & 6) throw Error(R(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(R(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var i = n.lanes | n.childLanes;
    if (
        (_g(e, i),
        e === Ae && ((be = Ae = null), (Le = 0)),
        (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
            Hi ||
            ((Hi = !0),
            Hh(ms, function () {
                return Dr(), null;
            })),
        (i = (n.flags & 15990) !== 0),
        n.subtreeFlags & 15990 || i)
    ) {
        (i = Et.transition), (Et.transition = null);
        var s = re;
        re = 1;
        var l = ee;
        (ee |= 4), (Ju.current = null), Gv(e, n), Lh(n, e), wv(ba), (vs = !!ka), (ba = ka = null), (e.current = n), Yv(n), bg(), (ee = l), (re = s), (Et.transition = i);
    } else e.current = n;
    if ((Hi && ((Hi = !1), (jn = e), (As = o)), (i = e.pendingLanes), i === 0 && (In = null), Tg(n.stateNode), et(e, Ce()), t !== null))
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
    if (Ms) throw ((Ms = !1), (e = Wa), (Wa = null), e);
    return As & 1 && e.tag !== 0 && Dr(), (i = e.pendingLanes), i & 1 ? (e === Qa ? Bo++ : ((Bo = 0), (Qa = e))) : (Bo = 0), Kn(), null;
}
function Dr() {
    if (jn !== null) {
        var e = Sp(As),
            t = Et.transition,
            n = re;
        try {
            if (((Et.transition = null), (re = 16 > e ? 16 : e), jn === null)) var r = !1;
            else {
                if (((e = jn), (jn = null), (As = 0), ee & 6)) throw Error(R(331));
                var o = ee;
                for (ee |= 4, z = e.current; z !== null; ) {
                    var i = z,
                        s = i.child;
                    if (z.flags & 16) {
                        var l = i.deletions;
                        if (l !== null) {
                            for (var a = 0; a < l.length; a++) {
                                var u = l[a];
                                for (z = u; z !== null; ) {
                                    var f = z;
                                    switch (f.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Fo(8, f, i);
                                    }
                                    var d = f.child;
                                    if (d !== null) (d.return = f), (z = d);
                                    else
                                        for (; z !== null; ) {
                                            f = z;
                                            var c = f.sibling,
                                                x = f.return;
                                            if ((Mh(f), f === u)) {
                                                z = null;
                                                break;
                                            }
                                            if (c !== null) {
                                                (c.return = x), (z = c);
                                                break;
                                            }
                                            z = x;
                                        }
                                }
                            }
                            var v = i.alternate;
                            if (v !== null) {
                                var m = v.child;
                                if (m !== null) {
                                    v.child = null;
                                    do {
                                        var w = m.sibling;
                                        (m.sibling = null), (m = w);
                                    } while (m !== null);
                                }
                            }
                            z = i;
                        }
                    }
                    if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (z = s);
                    else
                        e: for (; z !== null; ) {
                            if (((i = z), i.flags & 2048))
                                switch (i.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Fo(9, i, i.return);
                                }
                            var p = i.sibling;
                            if (p !== null) {
                                (p.return = i.return), (z = p);
                                break e;
                            }
                            z = i.return;
                        }
                }
                var h = e.current;
                for (z = h; z !== null; ) {
                    s = z;
                    var y = s.child;
                    if (s.subtreeFlags & 2064 && y !== null) (y.return = s), (z = y);
                    else
                        e: for (s = h; z !== null; ) {
                            if (((l = z), l.flags & 2048))
                                try {
                                    switch (l.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Js(9, l);
                                    }
                                } catch (C) {
                                    Se(l, l.return, C);
                                }
                            if (l === s) {
                                z = null;
                                break e;
                            }
                            var E = l.sibling;
                            if (E !== null) {
                                (E.return = l.return), (z = E);
                                break e;
                            }
                            z = l.return;
                        }
                }
                if (((ee = o), Kn(), Kt && typeof Kt.onPostCommitFiberRoot == "function"))
                    try {
                        Kt.onPostCommitFiberRoot(Ws, e);
                    } catch {}
                r = !0;
            }
            return r;
        } finally {
            (re = n), (Et.transition = t);
        }
    }
    return !1;
}
function Fd(e, t, n) {
    (t = to(n, t)), (t = Sh(e, t, 1)), (e = Ln(e, t, 1)), (t = Qe()), e !== null && (yi(e, 1, t), et(e, t));
}
function Se(e, t, n) {
    if (e.tag === 3) Fd(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Fd(t, e, n);
                break;
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || (typeof r.componentDidCatch == "function" && (In === null || !In.has(r)))) {
                    (e = to(n, e)), (e = Eh(t, e, 1)), (t = Ln(t, e, 1)), (e = Qe()), t !== null && (yi(t, 1, e), et(t, e));
                    break;
                }
            }
            t = t.return;
        }
}
function ty(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
        (t = Qe()),
        (e.pingedLanes |= e.suspendedLanes & n),
        Ae === e && (Le & n) === n && (Re === 4 || (Re === 3 && (Le & 130023424) === Le && 500 > Ce() - tc) ? ir(e, 0) : (ec |= n)),
        et(e, t);
}
function Uh(e, t) {
    t === 0 && (e.mode & 1 ? ((t = _i), (_i <<= 1), !(_i & 130023424) && (_i = 4194304)) : (t = 1));
    var n = Qe();
    (e = un(e, t)), e !== null && (yi(e, t, n), et(e, n));
}
function ny(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), Uh(e, n);
}
function ry(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                o = e.memoizedState;
            o !== null && (n = o.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(R(314));
    }
    r !== null && r.delete(t), Uh(e, n);
}
var Vh;
Vh = function (e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Ze.current) Xe = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return (Xe = !1), Hv(e, t, n);
            Xe = !!(e.flags & 131072);
        }
    else (Xe = !1), he && t.flags & 1048576 && Kp(t, ks, t.index);
    switch (((t.lanes = 0), t.tag)) {
        case 2:
            var r = t.type;
            is(e, t), (e = t.pendingProps);
            var o = Xr(t, Ue.current);
            Ir(t, n), (o = Gu(null, t, r, e, o, n));
            var i = Yu();
            return (
                (t.flags |= 1),
                typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0
                    ? ((t.tag = 1),
                      (t.memoizedState = null),
                      (t.updateQueue = null),
                      Je(r) ? ((i = !0), Es(t)) : (i = !1),
                      (t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null),
                      Vu(t),
                      (o.updater = Zs),
                      (t.stateNode = o),
                      (o._reactInternals = t),
                      _a(t, r, e, n),
                      (t = Da(null, t, r, !0, i, n)))
                    : ((t.tag = 0), he && i && Iu(t), He(null, t, o, n), (t = t.child)),
                t
            );
        case 16:
            r = t.elementType;
            e: {
                switch ((is(e, t), (e = t.pendingProps), (o = r._init), (r = o(r._payload)), (t.type = r), (o = t.tag = iy(r)), (e = Pt(r, e)), o)) {
                    case 0:
                        t = Ia(null, t, r, e, n);
                        break e;
                    case 1:
                        t = jd(null, t, r, e, n);
                        break e;
                    case 11:
                        t = Pd(null, t, r, e, n);
                        break e;
                    case 14:
                        t = Td(null, t, r, Pt(r.type, e), n);
                        break e;
                }
                throw Error(R(306, r, ""));
            }
            return t;
        case 0:
            return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : Pt(r, o)), Ia(e, t, r, o, n);
        case 1:
            return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : Pt(r, o)), jd(e, t, r, o, n);
        case 3:
            e: {
                if ((Nh(t), e === null)) throw Error(R(387));
                (r = t.pendingProps), (i = t.memoizedState), (o = i.element), Jp(e, t), Ps(t, r, null, n);
                var s = t.memoizedState;
                if (((r = s.element), i.isDehydrated))
                    if (
                        ((i = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }),
                        (t.updateQueue.baseState = i),
                        (t.memoizedState = i),
                        t.flags & 256)
                    ) {
                        (o = to(Error(R(423)), t)), (t = Rd(e, t, r, n, o));
                        break e;
                    } else if (r !== o) {
                        (o = to(Error(R(424)), t)), (t = Rd(e, t, r, n, o));
                        break e;
                    } else for (dt = _n(t.stateNode.containerInfo.firstChild), ft = t, he = !0, Ot = null, n = Xp(t, null, r, n), t.child = n; n; ) (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
                else {
                    if ((Zr(), r === o)) {
                        t = cn(e, t, n);
                        break e;
                    }
                    He(e, t, r, n);
                }
                t = t.child;
            }
            return t;
        case 5:
            return (
                eh(t),
                e === null && Oa(t),
                (r = t.type),
                (o = t.pendingProps),
                (i = e !== null ? e.memoizedProps : null),
                (s = o.children),
                Na(r, o) ? (s = null) : i !== null && Na(r, i) && (t.flags |= 32),
                bh(e, t),
                He(e, t, s, n),
                t.child
            );
        case 6:
            return e === null && Oa(t), null;
        case 13:
            return Ph(e, t, n);
        case 4:
            return Hu(t, t.stateNode.containerInfo), (r = t.pendingProps), e === null ? (t.child = Jr(t, null, r, n)) : He(e, t, r, n), t.child;
        case 11:
            return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : Pt(r, o)), Pd(e, t, r, o, n);
        case 7:
            return He(e, t, t.pendingProps, n), t.child;
        case 8:
            return He(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return He(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (((r = t.type._context), (o = t.pendingProps), (i = t.memoizedProps), (s = o.value), ae(bs, r._currentValue), (r._currentValue = s), i !== null))
                    if (Lt(i.value, s)) {
                        if (i.children === o.children && !Ze.current) {
                            t = cn(e, t, n);
                            break e;
                        }
                    } else
                        for (i = t.child, i !== null && (i.return = t); i !== null; ) {
                            var l = i.dependencies;
                            if (l !== null) {
                                s = i.child;
                                for (var a = l.firstContext; a !== null; ) {
                                    if (a.context === r) {
                                        if (i.tag === 1) {
                                            (a = sn(-1, n & -n)), (a.tag = 2);
                                            var u = i.updateQueue;
                                            if (u !== null) {
                                                u = u.shared;
                                                var f = u.pending;
                                                f === null ? (a.next = a) : ((a.next = f.next), (f.next = a)), (u.pending = a);
                                            }
                                        }
                                        (i.lanes |= n), (a = i.alternate), a !== null && (a.lanes |= n), Ma(i.return, n, t), (l.lanes |= n);
                                        break;
                                    }
                                    a = a.next;
                                }
                            } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
                            else if (i.tag === 18) {
                                if (((s = i.return), s === null)) throw Error(R(341));
                                (s.lanes |= n), (l = s.alternate), l !== null && (l.lanes |= n), Ma(s, n, t), (s = i.sibling);
                            } else s = i.child;
                            if (s !== null) s.return = i;
                            else
                                for (s = i; s !== null; ) {
                                    if (s === t) {
                                        s = null;
                                        break;
                                    }
                                    if (((i = s.sibling), i !== null)) {
                                        (i.return = s.return), (s = i);
                                        break;
                                    }
                                    s = s.return;
                                }
                            i = s;
                        }
                He(e, t, o.children, n), (t = t.child);
            }
            return t;
        case 9:
            return (o = t.type), (r = t.pendingProps.children), Ir(t, n), (o = Ct(o)), (r = r(o)), (t.flags |= 1), He(e, t, r, n), t.child;
        case 14:
            return (r = t.type), (o = Pt(r, t.pendingProps)), (o = Pt(r.type, o)), Td(e, t, r, o, n);
        case 15:
            return Ch(e, t, t.type, t.pendingProps, n);
        case 17:
            return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : Pt(r, o)),
                is(e, t),
                (t.tag = 1),
                Je(r) ? ((e = !0), Es(t)) : (e = !1),
                Ir(t, n),
                wh(t, r, o),
                _a(t, r, o, n),
                Da(null, t, r, !0, e, n)
            );
        case 19:
            return Th(e, t, n);
        case 22:
            return kh(e, t, n);
    }
    throw Error(R(156, t.tag));
};
function Hh(e, t) {
    return vp(e, t);
}
function oy(e, t, n, r) {
    (this.tag = e),
        (this.key = n),
        (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
}
function St(e, t, n, r) {
    return new oy(e, t, n, r);
}
function ic(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
}
function iy(e) {
    if (typeof e == "function") return ic(e) ? 1 : 0;
    if (e != null) {
        if (((e = e.$$typeof), e === ku)) return 11;
        if (e === bu) return 14;
    }
    return 2;
}
function zn(e, t) {
    var n = e.alternate;
    return (
        n === null
            ? ((n = St(e.tag, t, e.key, e.mode)), (n.elementType = e.elementType), (n.type = e.type), (n.stateNode = e.stateNode), (n.alternate = e), (e.alternate = n))
            : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
        (n.flags = e.flags & 14680064),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        n
    );
}
function as(e, t, n, r, o, i) {
    var s = 2;
    if (((r = e), typeof e == "function")) ic(e) && (s = 1);
    else if (typeof e == "string") s = 5;
    else
        e: switch (e) {
            case Sr:
                return sr(n.children, o, i, t);
            case Cu:
                (s = 8), (o |= 8);
                break;
            case oa:
                return (e = St(12, n, t, o | 2)), (e.elementType = oa), (e.lanes = i), e;
            case ia:
                return (e = St(13, n, t, o)), (e.elementType = ia), (e.lanes = i), e;
            case sa:
                return (e = St(19, n, t, o)), (e.elementType = sa), (e.lanes = i), e;
            case ep:
                return tl(n, o, i, t);
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                        case Zf:
                            s = 10;
                            break e;
                        case Jf:
                            s = 9;
                            break e;
                        case ku:
                            s = 11;
                            break e;
                        case bu:
                            s = 14;
                            break e;
                        case xn:
                            (s = 16), (r = null);
                            break e;
                    }
                throw Error(R(130, e == null ? e : typeof e, ""));
        }
    return (t = St(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t;
}
function sr(e, t, n, r) {
    return (e = St(7, e, r, t)), (e.lanes = n), e;
}
function tl(e, t, n, r) {
    return (e = St(22, e, r, t)), (e.elementType = ep), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e;
}
function Gl(e, t, n) {
    return (e = St(6, e, null, t)), (e.lanes = n), e;
}
function Yl(e, t, n) {
    return (t = St(4, e.children !== null ? e.children : [], e.key, t)), (t.lanes = n), (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }), t;
}
function sy(e, t, n, r, o) {
    (this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = jl(0)),
        (this.expirationTimes = jl(-1)),
        (this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0),
        (this.entanglements = jl(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = o),
        (this.mutableSourceEagerHydrationData = null);
}
function sc(e, t, n, r, o, i, s, l, a) {
    return (
        (e = new sy(e, t, n, l, a)),
        t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
        (i = St(3, null, null, t)),
        (e.current = i),
        (i.stateNode = e),
        (i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }),
        Vu(i),
        e
    );
}
function ly(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: wr, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Wh(e) {
    if (!e) return $n;
    e = e._reactInternals;
    e: {
        if (gr(e) !== e || e.tag !== 1) throw Error(R(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (Je(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e;
                    }
            }
            t = t.return;
        } while (t !== null);
        throw Error(R(171));
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Je(n)) return Wp(e, n, t);
    }
    return t;
}
function Qh(e, t, n, r, o, i, s, l, a) {
    return (
        (e = sc(n, r, !0, e, o, i, s, l, a)),
        (e.context = Wh(null)),
        (n = e.current),
        (r = Qe()),
        (o = Dn(n)),
        (i = sn(r, o)),
        (i.callback = t ?? null),
        Ln(n, i, o),
        (e.current.lanes = o),
        yi(e, o, r),
        et(e, r),
        e
    );
}
function nl(e, t, n, r) {
    var o = t.current,
        i = Qe(),
        s = Dn(o);
    return (
        (n = Wh(n)),
        t.context === null ? (t.context = n) : (t.pendingContext = n),
        (t = sn(i, s)),
        (t.payload = { element: e }),
        (r = r === void 0 ? null : r),
        r !== null && (t.callback = r),
        (e = Ln(o, t, s)),
        e !== null && (At(e, o, s, i), ns(e, o, s)),
        s
    );
}
function Ls(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode;
    }
}
function $d(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
    }
}
function lc(e, t) {
    $d(e, t), (e = e.alternate) && $d(e, t);
}
function ay() {
    return null;
}
var Kh =
    typeof reportError == "function"
        ? reportError
        : function (e) {
              console.error(e);
          };
function ac(e) {
    this._internalRoot = e;
}
rl.prototype.render = ac.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(R(409));
    nl(e, t, null, null);
};
rl.prototype.unmount = ac.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        dr(function () {
            nl(null, e, null, null);
        }),
            (t[an] = null);
    }
};
function rl(e) {
    this._internalRoot = e;
}
rl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = kp();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < Sn.length && t !== 0 && t < Sn[n].priority; n++);
        Sn.splice(n, 0, e), n === 0 && Np(e);
    }
};
function uc(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ol(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable ")));
}
function Bd() {}
function uy(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var i = r;
            r = function () {
                var u = Ls(s);
                i.call(u);
            };
        }
        var s = Qh(t, r, e, 0, null, !1, !1, "", Bd);
        return (e._reactRootContainer = s), (e[an] = s.current), Zo(e.nodeType === 8 ? e.parentNode : e), dr(), s;
    }
    for (; (o = e.lastChild); ) e.removeChild(o);
    if (typeof r == "function") {
        var l = r;
        r = function () {
            var u = Ls(a);
            l.call(u);
        };
    }
    var a = sc(e, 0, !1, null, null, !1, !1, "", Bd);
    return (
        (e._reactRootContainer = a),
        (e[an] = a.current),
        Zo(e.nodeType === 8 ? e.parentNode : e),
        dr(function () {
            nl(t, a, n, r);
        }),
        a
    );
}
function il(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
        var s = i;
        if (typeof o == "function") {
            var l = o;
            o = function () {
                var a = Ls(s);
                l.call(a);
            };
        }
        nl(t, s, e, o);
    } else s = uy(n, t, e, o, r);
    return Ls(s);
}
Ep = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = Ro(t.pendingLanes);
                n !== 0 && (Tu(t, n | 1), et(t, Ce()), !(ee & 6) && ((no = Ce() + 500), Kn()));
            }
            break;
        case 13:
            dr(function () {
                var r = un(e, 1);
                if (r !== null) {
                    var o = Qe();
                    At(r, e, 1, o);
                }
            }),
                lc(e, 1);
    }
};
ju = function (e) {
    if (e.tag === 13) {
        var t = un(e, 134217728);
        if (t !== null) {
            var n = Qe();
            At(t, e, 134217728, n);
        }
        lc(e, 134217728);
    }
};
Cp = function (e) {
    if (e.tag === 13) {
        var t = Dn(e),
            n = un(e, t);
        if (n !== null) {
            var r = Qe();
            At(n, e, t, r);
        }
        lc(e, t);
    }
};
kp = function () {
    return re;
};
bp = function (e, t) {
    var n = re;
    try {
        return (re = e), t();
    } finally {
        re = n;
    }
};
ga = function (e, t, n) {
    switch (t) {
        case "input":
            if ((ua(e, n), (t = n.name), n.type === "radio" && t != null)) {
                for (n = e; n.parentNode; ) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var o = Ys(r);
                        if (!o) throw Error(R(90));
                        np(r), ua(r, o);
                    }
                }
            }
            break;
        case "textarea":
            op(e, n);
            break;
        case "select":
            (t = n.value), t != null && Mr(e, !!n.multiple, t, !1);
    }
};
dp = nc;
fp = dr;
var cy = { usingClientEntryPoint: !1, Events: [wi, br, Ys, up, cp, nc] },
    bo = { findFiberByHostInstance: Zn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" },
    dy = {
        bundleType: bo.bundleType,
        version: bo.version,
        rendererPackageName: bo.rendererPackageName,
        rendererConfig: bo.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: pn.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return (e = mp(e)), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: bo.findFiberByHostInstance || ay,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Wi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Wi.isDisabled && Wi.supportsFiber)
        try {
            (Ws = Wi.inject(dy)), (Kt = Wi);
        } catch {}
}
mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = cy;
mt.createPortal = function (e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!uc(t)) throw Error(R(200));
    return ly(e, t, null, n);
};
mt.createRoot = function (e, t) {
    if (!uc(e)) throw Error(R(299));
    var n = !1,
        r = "",
        o = Kh;
    return (
        t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
        (t = sc(e, 1, !1, null, null, n, !1, r, o)),
        (e[an] = t.current),
        Zo(e.nodeType === 8 ? e.parentNode : e),
        new ac(t)
    );
};
mt.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(R(188)) : ((e = Object.keys(e).join(",")), Error(R(268, e)));
    return (e = mp(t)), (e = e === null ? null : e.stateNode), e;
};
mt.flushSync = function (e) {
    return dr(e);
};
mt.hydrate = function (e, t, n) {
    if (!ol(t)) throw Error(R(200));
    return il(null, e, t, !0, n);
};
mt.hydrateRoot = function (e, t, n) {
    if (!uc(e)) throw Error(R(405));
    var r = (n != null && n.hydratedSources) || null,
        o = !1,
        i = "",
        s = Kh;
    if (
        (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
        (t = Qh(t, null, e, 1, n ?? null, o, !1, i, s)),
        (e[an] = t.current),
        Zo(e),
        r)
    )
        for (e = 0; e < r.length; e++)
            (n = r[e]),
                (o = n._getVersion),
                (o = o(n._source)),
                t.mutableSourceEagerHydrationData == null ? (t.mutableSourceEagerHydrationData = [n, o]) : t.mutableSourceEagerHydrationData.push(n, o);
    return new rl(t);
};
mt.render = function (e, t, n) {
    if (!ol(t)) throw Error(R(200));
    return il(null, e, t, !1, n);
};
mt.unmountComponentAtNode = function (e) {
    if (!ol(e)) throw Error(R(40));
    return e._reactRootContainer
        ? (dr(function () {
              il(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[an] = null);
              });
          }),
          !0)
        : !1;
};
mt.unstable_batchedUpdates = nc;
mt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!ol(n)) throw Error(R(200));
    if (e == null || e._reactInternals === void 0) throw Error(R(38));
    return il(e, t, n, !1, r);
};
mt.version = "18.3.1-next-f1338f8080-20240426";
function Gh() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gh);
        } catch (e) {
            console.error(e);
        }
}
Gh(), (Gf.exports = mt);
var Ei = Gf.exports;
const Yh = If(Ei);
var qh,
    Ud = Ei;
(qh = Ud.createRoot), Ud.hydrateRoot;
const fy = 1,
    py = 1e6;
let ql = 0;
function hy() {
    return (ql = (ql + 1) % Number.MAX_SAFE_INTEGER), ql.toString();
}
const Xl = new Map(),
    Vd = (e) => {
        if (Xl.has(e)) return;
        const t = setTimeout(() => {
            Xl.delete(e), Uo({ type: "REMOVE_TOAST", toastId: e });
        }, py);
        Xl.set(e, t);
    },
    my = (e, t) => {
        switch (t.type) {
            case "ADD_TOAST":
                return { ...e, toasts: [t.toast, ...e.toasts].slice(0, fy) };
            case "UPDATE_TOAST":
                return { ...e, toasts: e.toasts.map((n) => (n.id === t.toast.id ? { ...n, ...t.toast } : n)) };
            case "DISMISS_TOAST": {
                const { toastId: n } = t;
                return (
                    n
                        ? Vd(n)
                        : e.toasts.forEach((r) => {
                              Vd(r.id);
                          }),
                    { ...e, toasts: e.toasts.map((r) => (r.id === n || n === void 0 ? { ...r, open: !1 } : r)) }
                );
            }
            case "REMOVE_TOAST":
                return t.toastId === void 0 ? { ...e, toasts: [] } : { ...e, toasts: e.toasts.filter((n) => n.id !== t.toastId) };
        }
    },
    us = [];
let cs = { toasts: [] };
function Uo(e) {
    (cs = my(cs, e)),
        us.forEach((t) => {
            t(cs);
        });
}
function gy({ ...e }) {
    const t = hy(),
        n = (o) => Uo({ type: "UPDATE_TOAST", toast: { ...o, id: t } }),
        r = () => Uo({ type: "DISMISS_TOAST", toastId: t });
    return (
        Uo({
            type: "ADD_TOAST",
            toast: {
                ...e,
                id: t,
                open: !0,
                onOpenChange: (o) => {
                    o || r();
                }
            }
        }),
        { id: t, dismiss: r, update: n }
    );
}
function vy() {
    const [e, t] = S.useState(cs);
    return (
        S.useEffect(
            () => (
                us.push(t),
                () => {
                    const n = us.indexOf(t);
                    n > -1 && us.splice(n, 1);
                }
            ),
            [e]
        ),
        { ...e, toast: gy, dismiss: (n) => Uo({ type: "DISMISS_TOAST", toastId: n }) }
    );
}
function je(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
    return function (o) {
        if ((e == null || e(o), n === !1 || !o.defaultPrevented)) return t == null ? void 0 : t(o);
    };
}
function yy(e, t) {
    typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Xh(...e) {
    return (t) => e.forEach((n) => yy(n, t));
}
function It(...e) {
    return S.useCallback(Xh(...e), e);
}
function xy(e, t = []) {
    let n = [];
    function r(i, s) {
        const l = S.createContext(s),
            a = n.length;
        n = [...n, s];
        function u(d) {
            const { scope: c, children: x, ...v } = d,
                m = (c == null ? void 0 : c[e][a]) || l,
                w = S.useMemo(() => v, Object.values(v));
            return g.jsx(m.Provider, { value: w, children: x });
        }
        function f(d, c) {
            const x = (c == null ? void 0 : c[e][a]) || l,
                v = S.useContext(x);
            if (v) return v;
            if (s !== void 0) return s;
            throw new Error(`\`${d}\` must be used within \`${i}\``);
        }
        return (u.displayName = i + "Provider"), [u, f];
    }
    const o = () => {
        const i = n.map((s) => S.createContext(s));
        return function (l) {
            const a = (l == null ? void 0 : l[e]) || i;
            return S.useMemo(() => ({ [`__scope${e}`]: { ...l, [e]: a } }), [l, a]);
        };
    };
    return (o.scopeName = e), [r, wy(o, ...t)];
}
function wy(...e) {
    const t = e[0];
    if (e.length === 1) return t;
    const n = () => {
        const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
        return function (i) {
            const s = r.reduce((l, { useScope: a, scopeName: u }) => {
                const d = a(i)[`__scope${u}`];
                return { ...l, ...d };
            }, {});
            return S.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
        };
    };
    return (n.scopeName = t.scopeName), n;
}
var li = S.forwardRef((e, t) => {
    const { children: n, ...r } = e,
        o = S.Children.toArray(n),
        i = o.find(Sy);
    if (i) {
        const s = i.props.children,
            l = o.map((a) => (a === i ? (S.Children.count(s) > 1 ? S.Children.only(null) : S.isValidElement(s) ? s.props.children : null) : a));
        return g.jsx(Ya, { ...r, ref: t, children: S.isValidElement(s) ? S.cloneElement(s, void 0, l) : null });
    }
    return g.jsx(Ya, { ...r, ref: t, children: n });
});
li.displayName = "Slot";
var Ya = S.forwardRef((e, t) => {
    const { children: n, ...r } = e;
    if (S.isValidElement(n)) {
        const o = Cy(n);
        return S.cloneElement(n, { ...Ey(r, n.props), ref: t ? Xh(t, o) : o });
    }
    return S.Children.count(n) > 1 ? S.Children.only(null) : null;
});
Ya.displayName = "SlotClone";
var Zh = ({ children: e }) => g.jsx(g.Fragment, { children: e });
function Sy(e) {
    return S.isValidElement(e) && e.type === Zh;
}
function Ey(e, t) {
    const n = { ...t };
    for (const r in t) {
        const o = e[r],
            i = t[r];
        /^on[A-Z]/.test(r)
            ? o && i
                ? (n[r] = (...l) => {
                      i(...l), o(...l);
                  })
                : o && (n[r] = o)
            : r === "style"
            ? (n[r] = { ...o, ...i })
            : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
    }
    return { ...e, ...n };
}
function Cy(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : ((t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get), (n = t && "isReactWarning" in t && t.isReactWarning), n ? e.props.ref : e.props.ref || e.ref);
}
function ky(e) {
    const t = e + "CollectionProvider",
        [n, r] = xy(t),
        [o, i] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
        s = (x) => {
            const { scope: v, children: m } = x,
                w = A.useRef(null),
                p = A.useRef(new Map()).current;
            return g.jsx(o, { scope: v, itemMap: p, collectionRef: w, children: m });
        };
    s.displayName = t;
    const l = e + "CollectionSlot",
        a = A.forwardRef((x, v) => {
            const { scope: m, children: w } = x,
                p = i(l, m),
                h = It(v, p.collectionRef);
            return g.jsx(li, { ref: h, children: w });
        });
    a.displayName = l;
    const u = e + "CollectionItemSlot",
        f = "data-radix-collection-item",
        d = A.forwardRef((x, v) => {
            const { scope: m, children: w, ...p } = x,
                h = A.useRef(null),
                y = It(v, h),
                E = i(u, m);
            return A.useEffect(() => (E.itemMap.set(h, { ref: h, ...p }), () => void E.itemMap.delete(h))), g.jsx(li, { [f]: "", ref: y, children: w });
        });
    d.displayName = u;
    function c(x) {
        const v = i(e + "CollectionConsumer", x);
        return A.useCallback(() => {
            const w = v.collectionRef.current;
            if (!w) return [];
            const p = Array.from(w.querySelectorAll(`[${f}]`));
            return Array.from(v.itemMap.values()).sort((E, C) => p.indexOf(E.ref.current) - p.indexOf(C.ref.current));
        }, [v.collectionRef, v.itemMap]);
    }
    return [{ Provider: s, Slot: a, ItemSlot: d }, c, r];
}
function Jh(e, t = []) {
    let n = [];
    function r(i, s) {
        const l = S.createContext(s),
            a = n.length;
        n = [...n, s];
        const u = (d) => {
            var p;
            const { scope: c, children: x, ...v } = d,
                m = ((p = c == null ? void 0 : c[e]) == null ? void 0 : p[a]) || l,
                w = S.useMemo(() => v, Object.values(v));
            return g.jsx(m.Provider, { value: w, children: x });
        };
        u.displayName = i + "Provider";
        function f(d, c) {
            var m;
            const x = ((m = c == null ? void 0 : c[e]) == null ? void 0 : m[a]) || l,
                v = S.useContext(x);
            if (v) return v;
            if (s !== void 0) return s;
            throw new Error(`\`${d}\` must be used within \`${i}\``);
        }
        return [u, f];
    }
    const o = () => {
        const i = n.map((s) => S.createContext(s));
        return function (l) {
            const a = (l == null ? void 0 : l[e]) || i;
            return S.useMemo(() => ({ [`__scope${e}`]: { ...l, [e]: a } }), [l, a]);
        };
    };
    return (o.scopeName = e), [r, by(o, ...t)];
}
function by(...e) {
    const t = e[0];
    if (e.length === 1) return t;
    const n = () => {
        const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
        return function (i) {
            const s = r.reduce((l, { useScope: a, scopeName: u }) => {
                const d = a(i)[`__scope${u}`];
                return { ...l, ...d };
            }, {});
            return S.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
        };
    };
    return (n.scopeName = t.scopeName), n;
}
var Ny = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"],
    nt = Ny.reduce((e, t) => {
        const n = S.forwardRef((r, o) => {
            const { asChild: i, ...s } = r,
                l = i ? li : t;
            return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), g.jsx(l, { ...s, ref: o });
        });
        return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
    }, {});
function em(e, t) {
    e && Ei.flushSync(() => e.dispatchEvent(t));
}
function Yt(e) {
    const t = S.useRef(e);
    return (
        S.useEffect(() => {
            t.current = e;
        }),
        S.useMemo(
            () =>
                (...n) => {
                    var r;
                    return (r = t.current) == null ? void 0 : r.call(t, ...n);
                },
            []
        )
    );
}
function Py(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = Yt(e);
    S.useEffect(() => {
        const r = (o) => {
            o.key === "Escape" && n(o);
        };
        return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
    }, [n, t]);
}
var Ty = "DismissableLayer",
    qa = "dismissableLayer.update",
    jy = "dismissableLayer.pointerDownOutside",
    Ry = "dismissableLayer.focusOutside",
    Hd,
    tm = S.createContext({ layers: new Set(), layersWithOutsidePointerEventsDisabled: new Set(), branches: new Set() }),
    cc = S.forwardRef((e, t) => {
        const { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: i, onInteractOutside: s, onDismiss: l, ...a } = e,
            u = S.useContext(tm),
            [f, d] = S.useState(null),
            c = (f == null ? void 0 : f.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document),
            [, x] = S.useState({}),
            v = It(t, (k) => d(k)),
            m = Array.from(u.layers),
            [w] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
            p = m.indexOf(w),
            h = f ? m.indexOf(f) : -1,
            y = u.layersWithOutsidePointerEventsDisabled.size > 0,
            E = h >= p,
            C = My((k) => {
                const P = k.target,
                    j = [...u.branches].some((O) => O.contains(P));
                !E || j || (o == null || o(k), s == null || s(k), k.defaultPrevented || l == null || l());
            }, c),
            b = Ay((k) => {
                const P = k.target;
                [...u.branches].some((O) => O.contains(P)) || (i == null || i(k), s == null || s(k), k.defaultPrevented || l == null || l());
            }, c);
        return (
            Py((k) => {
                h === u.layers.size - 1 && (r == null || r(k), !k.defaultPrevented && l && (k.preventDefault(), l()));
            }, c),
            S.useEffect(() => {
                if (f)
                    return (
                        n &&
                            (u.layersWithOutsidePointerEventsDisabled.size === 0 && ((Hd = c.body.style.pointerEvents), (c.body.style.pointerEvents = "none")),
                            u.layersWithOutsidePointerEventsDisabled.add(f)),
                        u.layers.add(f),
                        Wd(),
                        () => {
                            n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (c.body.style.pointerEvents = Hd);
                        }
                    );
            }, [f, c, n, u]),
            S.useEffect(
                () => () => {
                    f && (u.layers.delete(f), u.layersWithOutsidePointerEventsDisabled.delete(f), Wd());
                },
                [f, u]
            ),
            S.useEffect(() => {
                const k = () => x({});
                return document.addEventListener(qa, k), () => document.removeEventListener(qa, k);
            }, []),
            g.jsx(nt.div, {
                ...a,
                ref: v,
                style: { pointerEvents: y ? (E ? "auto" : "none") : void 0, ...e.style },
                onFocusCapture: je(e.onFocusCapture, b.onFocusCapture),
                onBlurCapture: je(e.onBlurCapture, b.onBlurCapture),
                onPointerDownCapture: je(e.onPointerDownCapture, C.onPointerDownCapture)
            })
        );
    });
cc.displayName = Ty;
var Oy = "DismissableLayerBranch",
    nm = S.forwardRef((e, t) => {
        const n = S.useContext(tm),
            r = S.useRef(null),
            o = It(t, r);
        return (
            S.useEffect(() => {
                const i = r.current;
                if (i)
                    return (
                        n.branches.add(i),
                        () => {
                            n.branches.delete(i);
                        }
                    );
            }, [n.branches]),
            g.jsx(nt.div, { ...e, ref: o })
        );
    });
nm.displayName = Oy;
function My(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = Yt(e),
        r = S.useRef(!1),
        o = S.useRef(() => {});
    return (
        S.useEffect(() => {
            const i = (l) => {
                    if (l.target && !r.current) {
                        let a = function () {
                            rm(jy, n, u, { discrete: !0 });
                        };
                        const u = { originalEvent: l };
                        l.pointerType === "touch" ? (t.removeEventListener("click", o.current), (o.current = a), t.addEventListener("click", o.current, { once: !0 })) : a();
                    } else t.removeEventListener("click", o.current);
                    r.current = !1;
                },
                s = window.setTimeout(() => {
                    t.addEventListener("pointerdown", i);
                }, 0);
            return () => {
                window.clearTimeout(s), t.removeEventListener("pointerdown", i), t.removeEventListener("click", o.current);
            };
        }, [t, n]),
        { onPointerDownCapture: () => (r.current = !0) }
    );
}
function Ay(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = Yt(e),
        r = S.useRef(!1);
    return (
        S.useEffect(() => {
            const o = (i) => {
                i.target && !r.current && rm(Ry, n, { originalEvent: i }, { discrete: !1 });
            };
            return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
        }, [t, n]),
        { onFocusCapture: () => (r.current = !0), onBlurCapture: () => (r.current = !1) }
    );
}
function Wd() {
    const e = new CustomEvent(qa);
    document.dispatchEvent(e);
}
function rm(e, t, n, { discrete: r }) {
    const o = n.originalEvent.target,
        i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
    t && o.addEventListener(e, t, { once: !0 }), r ? em(o, i) : o.dispatchEvent(i);
}
var _y = cc,
    Ly = nm,
    fr = globalThis != null && globalThis.document ? S.useLayoutEffect : () => {},
    Iy = "Portal",
    om = S.forwardRef((e, t) => {
        var l;
        const { container: n, ...r } = e,
            [o, i] = S.useState(!1);
        fr(() => i(!0), []);
        const s = n || (o && ((l = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : l.body));
        return s ? Yh.createPortal(g.jsx(nt.div, { ...r, ref: t }), s) : null;
    });
om.displayName = Iy;
function Dy(e, t) {
    return S.useReducer((n, r) => t[n][r] ?? n, e);
}
var dc = (e) => {
    const { present: t, children: n } = e,
        r = zy(t),
        o = typeof n == "function" ? n({ present: r.isPresent }) : S.Children.only(n),
        i = It(r.ref, Fy(o));
    return typeof n == "function" || r.isPresent ? S.cloneElement(o, { ref: i }) : null;
};
dc.displayName = "Presence";
function zy(e) {
    const [t, n] = S.useState(),
        r = S.useRef({}),
        o = S.useRef(e),
        i = S.useRef("none"),
        s = e ? "mounted" : "unmounted",
        [l, a] = Dy(s, { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } });
    return (
        S.useEffect(() => {
            const u = Qi(r.current);
            i.current = l === "mounted" ? u : "none";
        }, [l]),
        fr(() => {
            const u = r.current,
                f = o.current;
            if (f !== e) {
                const c = i.current,
                    x = Qi(u);
                e ? a("MOUNT") : x === "none" || (u == null ? void 0 : u.display) === "none" ? a("UNMOUNT") : a(f && c !== x ? "ANIMATION_OUT" : "UNMOUNT"), (o.current = e);
            }
        }, [e, a]),
        fr(() => {
            if (t) {
                let u;
                const f = t.ownerDocument.defaultView ?? window,
                    d = (x) => {
                        const m = Qi(r.current).includes(x.animationName);
                        if (x.target === t && m && (a("ANIMATION_END"), !o.current)) {
                            const w = t.style.animationFillMode;
                            (t.style.animationFillMode = "forwards"),
                                (u = f.setTimeout(() => {
                                    t.style.animationFillMode === "forwards" && (t.style.animationFillMode = w);
                                }));
                        }
                    },
                    c = (x) => {
                        x.target === t && (i.current = Qi(r.current));
                    };
                return (
                    t.addEventListener("animationstart", c),
                    t.addEventListener("animationcancel", d),
                    t.addEventListener("animationend", d),
                    () => {
                        f.clearTimeout(u), t.removeEventListener("animationstart", c), t.removeEventListener("animationcancel", d), t.removeEventListener("animationend", d);
                    }
                );
            } else a("ANIMATION_END");
        }, [t, a]),
        {
            isPresent: ["mounted", "unmountSuspended"].includes(l),
            ref: S.useCallback((u) => {
                u && (r.current = getComputedStyle(u)), n(u);
            }, [])
        }
    );
}
function Qi(e) {
    return (e == null ? void 0 : e.animationName) || "none";
}
function Fy(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : ((t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get), (n = t && "isReactWarning" in t && t.isReactWarning), n ? e.props.ref : e.props.ref || e.ref);
}
function $y({ prop: e, defaultProp: t, onChange: n = () => {} }) {
    const [r, o] = By({ defaultProp: t, onChange: n }),
        i = e !== void 0,
        s = i ? e : r,
        l = Yt(n),
        a = S.useCallback(
            (u) => {
                if (i) {
                    const d = typeof u == "function" ? u(e) : u;
                    d !== e && l(d);
                } else o(u);
            },
            [i, e, o, l]
        );
    return [s, a];
}
function By({ defaultProp: e, onChange: t }) {
    const n = S.useState(e),
        [r] = n,
        o = S.useRef(r),
        i = Yt(t);
    return (
        S.useEffect(() => {
            o.current !== r && (i(r), (o.current = r));
        }, [r, o, i]),
        n
    );
}
var Uy = "VisuallyHidden",
    sl = S.forwardRef((e, t) =>
        g.jsx(nt.span, {
            ...e,
            ref: t,
            style: { position: "absolute", border: 0, width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", wordWrap: "normal", ...e.style }
        })
    );
sl.displayName = Uy;
var Vy = sl,
    fc = "ToastProvider",
    [pc, Hy, Wy] = ky("Toast"),
    [im, wE] = Jh("Toast", [Wy]),
    [Qy, ll] = im(fc),
    sm = (e) => {
        const { __scopeToast: t, label: n = "Notification", duration: r = 5e3, swipeDirection: o = "right", swipeThreshold: i = 50, children: s } = e,
            [l, a] = S.useState(null),
            [u, f] = S.useState(0),
            d = S.useRef(!1),
            c = S.useRef(!1);
        return (
            n.trim() || console.error(`Invalid prop \`label\` supplied to \`${fc}\`. Expected non-empty \`string\`.`),
            g.jsx(pc.Provider, {
                scope: t,
                children: g.jsx(Qy, {
                    scope: t,
                    label: n,
                    duration: r,
                    swipeDirection: o,
                    swipeThreshold: i,
                    toastCount: u,
                    viewport: l,
                    onViewportChange: a,
                    onToastAdd: S.useCallback(() => f((x) => x + 1), []),
                    onToastRemove: S.useCallback(() => f((x) => x - 1), []),
                    isFocusedToastEscapeKeyDownRef: d,
                    isClosePausedRef: c,
                    children: s
                })
            })
        );
    };
sm.displayName = fc;
var lm = "ToastViewport",
    Ky = ["F8"],
    Xa = "toast.viewportPause",
    Za = "toast.viewportResume",
    am = S.forwardRef((e, t) => {
        const { __scopeToast: n, hotkey: r = Ky, label: o = "Notifications ({hotkey})", ...i } = e,
            s = ll(lm, n),
            l = Hy(n),
            a = S.useRef(null),
            u = S.useRef(null),
            f = S.useRef(null),
            d = S.useRef(null),
            c = It(t, d, s.onViewportChange),
            x = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
            v = s.toastCount > 0;
        S.useEffect(() => {
            const w = (p) => {
                var y;
                r.length !== 0 && r.every((E) => p[E] || p.code === E) && ((y = d.current) == null || y.focus());
            };
            return document.addEventListener("keydown", w), () => document.removeEventListener("keydown", w);
        }, [r]),
            S.useEffect(() => {
                const w = a.current,
                    p = d.current;
                if (v && w && p) {
                    const h = () => {
                            if (!s.isClosePausedRef.current) {
                                const b = new CustomEvent(Xa);
                                p.dispatchEvent(b), (s.isClosePausedRef.current = !0);
                            }
                        },
                        y = () => {
                            if (s.isClosePausedRef.current) {
                                const b = new CustomEvent(Za);
                                p.dispatchEvent(b), (s.isClosePausedRef.current = !1);
                            }
                        },
                        E = (b) => {
                            !w.contains(b.relatedTarget) && y();
                        },
                        C = () => {
                            w.contains(document.activeElement) || y();
                        };
                    return (
                        w.addEventListener("focusin", h),
                        w.addEventListener("focusout", E),
                        w.addEventListener("pointermove", h),
                        w.addEventListener("pointerleave", C),
                        window.addEventListener("blur", h),
                        window.addEventListener("focus", y),
                        () => {
                            w.removeEventListener("focusin", h),
                                w.removeEventListener("focusout", E),
                                w.removeEventListener("pointermove", h),
                                w.removeEventListener("pointerleave", C),
                                window.removeEventListener("blur", h),
                                window.removeEventListener("focus", y);
                        }
                    );
                }
            }, [v, s.isClosePausedRef]);
        const m = S.useCallback(
            ({ tabbingDirection: w }) => {
                const h = l().map((y) => {
                    const E = y.ref.current,
                        C = [E, ...s1(E)];
                    return w === "forwards" ? C : C.reverse();
                });
                return (w === "forwards" ? h.reverse() : h).flat();
            },
            [l]
        );
        return (
            S.useEffect(() => {
                const w = d.current;
                if (w) {
                    const p = (h) => {
                        var C, b, k;
                        const y = h.altKey || h.ctrlKey || h.metaKey;
                        if (h.key === "Tab" && !y) {
                            const P = document.activeElement,
                                j = h.shiftKey;
                            if (h.target === w && j) {
                                (C = u.current) == null || C.focus();
                                return;
                            }
                            const D = m({ tabbingDirection: j ? "backwards" : "forwards" }),
                                V = D.findIndex((_) => _ === P);
                            Zl(D.slice(V + 1)) ? h.preventDefault() : j ? (b = u.current) == null || b.focus() : (k = f.current) == null || k.focus();
                        }
                    };
                    return w.addEventListener("keydown", p), () => w.removeEventListener("keydown", p);
                }
            }, [l, m]),
            g.jsxs(Ly, {
                ref: a,
                role: "region",
                "aria-label": o.replace("{hotkey}", x),
                tabIndex: -1,
                style: { pointerEvents: v ? void 0 : "none" },
                children: [
                    v &&
                        g.jsx(Ja, {
                            ref: u,
                            onFocusFromOutsideViewport: () => {
                                const w = m({ tabbingDirection: "forwards" });
                                Zl(w);
                            }
                        }),
                    g.jsx(pc.Slot, { scope: n, children: g.jsx(nt.ol, { tabIndex: -1, ...i, ref: c }) }),
                    v &&
                        g.jsx(Ja, {
                            ref: f,
                            onFocusFromOutsideViewport: () => {
                                const w = m({ tabbingDirection: "backwards" });
                                Zl(w);
                            }
                        })
                ]
            })
        );
    });
am.displayName = lm;
var um = "ToastFocusProxy",
    Ja = S.forwardRef((e, t) => {
        const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e,
            i = ll(um, n);
        return g.jsx(sl, {
            "aria-hidden": !0,
            tabIndex: 0,
            ...o,
            ref: t,
            style: { position: "fixed" },
            onFocus: (s) => {
                var u;
                const l = s.relatedTarget;
                !((u = i.viewport) != null && u.contains(l)) && r();
            }
        });
    });
Ja.displayName = um;
var al = "Toast",
    Gy = "toast.swipeStart",
    Yy = "toast.swipeMove",
    qy = "toast.swipeCancel",
    Xy = "toast.swipeEnd",
    cm = S.forwardRef((e, t) => {
        const { forceMount: n, open: r, defaultOpen: o, onOpenChange: i, ...s } = e,
            [l = !0, a] = $y({ prop: r, defaultProp: o, onChange: i });
        return g.jsx(dc, {
            present: n || l,
            children: g.jsx(e1, {
                open: l,
                ...s,
                ref: t,
                onClose: () => a(!1),
                onPause: Yt(e.onPause),
                onResume: Yt(e.onResume),
                onSwipeStart: je(e.onSwipeStart, (u) => {
                    u.currentTarget.setAttribute("data-swipe", "start");
                }),
                onSwipeMove: je(e.onSwipeMove, (u) => {
                    const { x: f, y: d } = u.detail.delta;
                    u.currentTarget.setAttribute("data-swipe", "move"),
                        u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${f}px`),
                        u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${d}px`);
                }),
                onSwipeCancel: je(e.onSwipeCancel, (u) => {
                    u.currentTarget.setAttribute("data-swipe", "cancel"),
                        u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                        u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                        u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                        u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
                }),
                onSwipeEnd: je(e.onSwipeEnd, (u) => {
                    const { x: f, y: d } = u.detail.delta;
                    u.currentTarget.setAttribute("data-swipe", "end"),
                        u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                        u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                        u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${f}px`),
                        u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${d}px`),
                        a(!1);
                })
            })
        });
    });
cm.displayName = al;
var [Zy, Jy] = im(al, { onClose() {} }),
    e1 = S.forwardRef((e, t) => {
        const {
                __scopeToast: n,
                type: r = "foreground",
                duration: o,
                open: i,
                onClose: s,
                onEscapeKeyDown: l,
                onPause: a,
                onResume: u,
                onSwipeStart: f,
                onSwipeMove: d,
                onSwipeCancel: c,
                onSwipeEnd: x,
                ...v
            } = e,
            m = ll(al, n),
            [w, p] = S.useState(null),
            h = It(t, (_) => p(_)),
            y = S.useRef(null),
            E = S.useRef(null),
            C = o || m.duration,
            b = S.useRef(0),
            k = S.useRef(C),
            P = S.useRef(0),
            { onToastAdd: j, onToastRemove: O } = m,
            L = Yt(() => {
                var H;
                (w == null ? void 0 : w.contains(document.activeElement)) && ((H = m.viewport) == null || H.focus()), s();
            }),
            D = S.useCallback(
                (_) => {
                    !_ || _ === 1 / 0 || (window.clearTimeout(P.current), (b.current = new Date().getTime()), (P.current = window.setTimeout(L, _)));
                },
                [L]
            );
        S.useEffect(() => {
            const _ = m.viewport;
            if (_) {
                const H = () => {
                        D(k.current), u == null || u();
                    },
                    U = () => {
                        const W = new Date().getTime() - b.current;
                        (k.current = k.current - W), window.clearTimeout(P.current), a == null || a();
                    };
                return (
                    _.addEventListener(Xa, U),
                    _.addEventListener(Za, H),
                    () => {
                        _.removeEventListener(Xa, U), _.removeEventListener(Za, H);
                    }
                );
            }
        }, [m.viewport, C, a, u, D]),
            S.useEffect(() => {
                i && !m.isClosePausedRef.current && D(C);
            }, [i, C, m.isClosePausedRef, D]),
            S.useEffect(() => (j(), () => O()), [j, O]);
        const V = S.useMemo(() => (w ? vm(w) : null), [w]);
        return m.viewport
            ? g.jsxs(g.Fragment, {
                  children: [
                      V && g.jsx(t1, { __scopeToast: n, role: "status", "aria-live": r === "foreground" ? "assertive" : "polite", "aria-atomic": !0, children: V }),
                      g.jsx(Zy, {
                          scope: n,
                          onClose: L,
                          children: Ei.createPortal(
                              g.jsx(pc.ItemSlot, {
                                  scope: n,
                                  children: g.jsx(_y, {
                                      asChild: !0,
                                      onEscapeKeyDown: je(l, () => {
                                          m.isFocusedToastEscapeKeyDownRef.current || L(), (m.isFocusedToastEscapeKeyDownRef.current = !1);
                                      }),
                                      children: g.jsx(nt.li, {
                                          role: "status",
                                          "aria-live": "off",
                                          "aria-atomic": !0,
                                          tabIndex: 0,
                                          "data-state": i ? "open" : "closed",
                                          "data-swipe-direction": m.swipeDirection,
                                          ...v,
                                          ref: h,
                                          style: { userSelect: "none", touchAction: "none", ...e.style },
                                          onKeyDown: je(e.onKeyDown, (_) => {
                                              _.key === "Escape" && (l == null || l(_.nativeEvent), _.nativeEvent.defaultPrevented || ((m.isFocusedToastEscapeKeyDownRef.current = !0), L()));
                                          }),
                                          onPointerDown: je(e.onPointerDown, (_) => {
                                              _.button === 0 && (y.current = { x: _.clientX, y: _.clientY });
                                          }),
                                          onPointerMove: je(e.onPointerMove, (_) => {
                                              if (!y.current) return;
                                              const H = _.clientX - y.current.x,
                                                  U = _.clientY - y.current.y,
                                                  W = !!E.current,
                                                  N = ["left", "right"].includes(m.swipeDirection),
                                                  M = ["left", "up"].includes(m.swipeDirection) ? Math.min : Math.max,
                                                  F = N ? M(0, H) : 0,
                                                  I = N ? 0 : M(0, U),
                                                  B = _.pointerType === "touch" ? 10 : 2,
                                                  K = { x: F, y: I },
                                                  J = { originalEvent: _, delta: K };
                                              W
                                                  ? ((E.current = K), Ki(Yy, d, J, { discrete: !1 }))
                                                  : Qd(K, m.swipeDirection, B)
                                                  ? ((E.current = K), Ki(Gy, f, J, { discrete: !1 }), _.target.setPointerCapture(_.pointerId))
                                                  : (Math.abs(H) > B || Math.abs(U) > B) && (y.current = null);
                                          }),
                                          onPointerUp: je(e.onPointerUp, (_) => {
                                              const H = E.current,
                                                  U = _.target;
                                              if ((U.hasPointerCapture(_.pointerId) && U.releasePointerCapture(_.pointerId), (E.current = null), (y.current = null), H)) {
                                                  const W = _.currentTarget,
                                                      N = { originalEvent: _, delta: H };
                                                  Qd(H, m.swipeDirection, m.swipeThreshold) ? Ki(Xy, x, N, { discrete: !0 }) : Ki(qy, c, N, { discrete: !0 }),
                                                      W.addEventListener("click", (M) => M.preventDefault(), { once: !0 });
                                              }
                                          })
                                      })
                                  })
                              }),
                              m.viewport
                          )
                      })
                  ]
              })
            : null;
    }),
    t1 = (e) => {
        const { __scopeToast: t, children: n, ...r } = e,
            o = ll(al, t),
            [i, s] = S.useState(!1),
            [l, a] = S.useState(!1);
        return (
            o1(() => s(!0)),
            S.useEffect(() => {
                const u = window.setTimeout(() => a(!0), 1e3);
                return () => window.clearTimeout(u);
            }, []),
            l ? null : g.jsx(om, { asChild: !0, children: g.jsx(sl, { ...r, children: i && g.jsxs(g.Fragment, { children: [o.label, " ", n] }) }) })
        );
    },
    n1 = "ToastTitle",
    dm = S.forwardRef((e, t) => {
        const { __scopeToast: n, ...r } = e;
        return g.jsx(nt.div, { ...r, ref: t });
    });
dm.displayName = n1;
var r1 = "ToastDescription",
    fm = S.forwardRef((e, t) => {
        const { __scopeToast: n, ...r } = e;
        return g.jsx(nt.div, { ...r, ref: t });
    });
fm.displayName = r1;
var pm = "ToastAction",
    hm = S.forwardRef((e, t) => {
        const { altText: n, ...r } = e;
        return n.trim()
            ? g.jsx(gm, { altText: n, asChild: !0, children: g.jsx(hc, { ...r, ref: t }) })
            : (console.error(`Invalid prop \`altText\` supplied to \`${pm}\`. Expected non-empty \`string\`.`), null);
    });
hm.displayName = pm;
var mm = "ToastClose",
    hc = S.forwardRef((e, t) => {
        const { __scopeToast: n, ...r } = e,
            o = Jy(mm, n);
        return g.jsx(gm, { asChild: !0, children: g.jsx(nt.button, { type: "button", ...r, ref: t, onClick: je(e.onClick, o.onClose) }) });
    });
hc.displayName = mm;
var gm = S.forwardRef((e, t) => {
    const { __scopeToast: n, altText: r, ...o } = e;
    return g.jsx(nt.div, { "data-radix-toast-announce-exclude": "", "data-radix-toast-announce-alt": r || void 0, ...o, ref: t });
});
function vm(e) {
    const t = [];
    return (
        Array.from(e.childNodes).forEach((r) => {
            if ((r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent), i1(r))) {
                const o = r.ariaHidden || r.hidden || r.style.display === "none",
                    i = r.dataset.radixToastAnnounceExclude === "";
                if (!o)
                    if (i) {
                        const s = r.dataset.radixToastAnnounceAlt;
                        s && t.push(s);
                    } else t.push(...vm(r));
            }
        }),
        t
    );
}
function Ki(e, t, n, { discrete: r }) {
    const o = n.originalEvent.currentTarget,
        i = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
    t && o.addEventListener(e, t, { once: !0 }), r ? em(o, i) : o.dispatchEvent(i);
}
var Qd = (e, t, n = 0) => {
    const r = Math.abs(e.x),
        o = Math.abs(e.y),
        i = r > o;
    return t === "left" || t === "right" ? i && r > n : !i && o > n;
};
function o1(e = () => {}) {
    const t = Yt(e);
    fr(() => {
        let n = 0,
            r = 0;
        return (
            (n = window.requestAnimationFrame(() => (r = window.requestAnimationFrame(t)))),
            () => {
                window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
            }
        );
    }, [t]);
}
function i1(e) {
    return e.nodeType === e.ELEMENT_NODE;
}
function s1(e) {
    const t = [],
        n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (r) => {
                const o = r.tagName === "INPUT" && r.type === "hidden";
                return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
            }
        });
    for (; n.nextNode(); ) t.push(n.currentNode);
    return t;
}
function Zl(e) {
    const t = document.activeElement;
    return e.some((n) => (n === t ? !0 : (n.focus(), document.activeElement !== t)));
}
var l1 = sm,
    ym = am,
    xm = cm,
    wm = dm,
    Sm = fm,
    Em = hm,
    Cm = hc;
function km(e) {
    var t,
        n,
        r = "";
    if (typeof e == "string" || typeof e == "number") r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++) e[t] && (n = km(e[t])) && (r && (r += " "), (r += n));
        } else for (n in e) e[n] && (r && (r += " "), (r += n));
    return r;
}
function bm() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = km(e)) && (r && (r += " "), (r += t));
    return r;
}
const Kd = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
    Gd = bm,
    Nm = (e, t) => (n) => {
        var r;
        if ((t == null ? void 0 : t.variants) == null) return Gd(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
        const { variants: o, defaultVariants: i } = t,
            s = Object.keys(o).map((u) => {
                const f = n == null ? void 0 : n[u],
                    d = i == null ? void 0 : i[u];
                if (f === null) return null;
                const c = Kd(f) || Kd(d);
                return o[u][c];
            }),
            l =
                n &&
                Object.entries(n).reduce((u, f) => {
                    let [d, c] = f;
                    return c === void 0 || (u[d] = c), u;
                }, {}),
            a =
                t == null || (r = t.compoundVariants) === null || r === void 0
                    ? void 0
                    : r.reduce((u, f) => {
                          let { class: d, className: c, ...x } = f;
                          return Object.entries(x).every((v) => {
                              let [m, w] = v;
                              return Array.isArray(w) ? w.includes({ ...i, ...l }[m]) : { ...i, ...l }[m] === w;
                          })
                              ? [...u, d, c]
                              : u;
                      }, []);
        return Gd(e, s, a, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    };
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const a1 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    Pm = (...e) =>
        e
            .filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n)
            .join(" ")
            .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var u1 = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const c1 = S.forwardRef(({ color: e = "currentColor", size: t = 24, strokeWidth: n = 2, absoluteStrokeWidth: r, className: o = "", children: i, iconNode: s, ...l }, a) =>
    S.createElement("svg", { ref: a, ...u1, width: t, height: t, stroke: e, strokeWidth: r ? (Number(n) * 24) / Number(t) : n, className: Pm("lucide", o), ...l }, [
        ...s.map(([u, f]) => S.createElement(u, f)),
        ...(Array.isArray(i) ? i : [i])
    ])
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const me = (e, t) => {
    const n = S.forwardRef(({ className: r, ...o }, i) => S.createElement(c1, { ref: i, iconNode: t, className: Pm(`lucide-${a1(e)}`, r), ...o }));
    return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const d1 = me("ArrowDown", [
    ["path", { d: "M12 5v14", key: "s699le" }],
    ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const f1 = me("ArrowLeft", [
    ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
    ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const p1 = me("ArrowRight", [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const h1 = me("CalendarCheck", [
    ["path", { d: "M8 2v4", key: "1cmpym" }],
    ["path", { d: "M16 2v4", key: "4m81vk" }],
    ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
    ["path", { d: "M3 10h18", key: "8toen8" }],
    ["path", { d: "m9 16 2 2 4-4", key: "19s6y9" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const m1 = me("ChevronDown", [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const g1 = me("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const v1 = me("CircleCheckBig", [
    ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
    ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const y1 = me("CircleDot", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const x1 = me("ClipboardPen", [
    ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", key: "1oijnt" }],
    ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5", key: "cereej" }],
    ["path", { d: "M4 13.5V6a2 2 0 0 1 2-2h2", key: "5ua5vh" }],
    ["path", { d: "M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z", key: "1y4qbx" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mc = me("Clock", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const w1 = me("DoorClosed", [
    ["path", { d: "M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14", key: "36qu9e" }],
    ["path", { d: "M2 20h20", key: "owomy5" }],
    ["path", { d: "M14 12v.01", key: "xfcn54" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const S1 = me("FileText", [
    ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
    ["path", { d: "M10 9H8", key: "b1mrlr" }],
    ["path", { d: "M16 13H8", key: "t4e002" }],
    ["path", { d: "M16 17H8", key: "z1uh3a" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const E1 = me("Hammer", [
    ["path", { d: "m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9", key: "eefl8a" }],
    ["path", { d: "m18 15 4-4", key: "16gjal" }],
    ["path", { d: "m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5", key: "b7pghm" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const C1 = me("House", [
    ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
    ["path", { d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z", key: "1d0kgt" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const k1 = me("Mail", [
    ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
    ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const b1 = me("MapPin", [
    ["path", { d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0", key: "1r0f0z" }],
    ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const N1 = me("Menu", [
    ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
    ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
    ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const eu = me("Phone", [
    [
        "path",
        {
            d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
            key: "foiqr5"
        }
    ]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const P1 = me("Shield", [
    ["path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z", key: "oel41y" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const T1 = me("SquareAsterisk", [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
    ["path", { d: "M12 8v8", key: "napkw2" }],
    ["path", { d: "m8.5 14 7-4", key: "12hpby" }],
    ["path", { d: "m8.5 10 7 4", key: "wwy2dy" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const j1 = me("SquareCheckBig", [
    ["path", { d: "M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5", key: "1uzm8b" }],
    ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const R1 = me("Star", [
    [
        "path",
        {
            d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
            key: "r04s7s"
        }
    ]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const O1 = me("UserCheck", [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
    ["polyline", { points: "16 11 18 13 22 9", key: "1pwet4" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Tm = me("X", [
        ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
        ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
    ]),
    gc = "-",
    M1 = (e) => {
        const t = _1(e),
            { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
        return {
            getClassGroupId: (s) => {
                const l = s.split(gc);
                return l[0] === "" && l.length !== 1 && l.shift(), jm(l, t) || A1(s);
            },
            getConflictingClassGroupIds: (s, l) => {
                const a = n[s] || [];
                return l && r[s] ? [...a, ...r[s]] : a;
            }
        };
    },
    jm = (e, t) => {
        var s;
        if (e.length === 0) return t.classGroupId;
        const n = e[0],
            r = t.nextPart.get(n),
            o = r ? jm(e.slice(1), r) : void 0;
        if (o) return o;
        if (t.validators.length === 0) return;
        const i = e.join(gc);
        return (s = t.validators.find(({ validator: l }) => l(i))) == null ? void 0 : s.classGroupId;
    },
    Yd = /^\[(.+)\]$/,
    A1 = (e) => {
        if (Yd.test(e)) {
            const t = Yd.exec(e)[1],
                n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
            if (n) return "arbitrary.." + n;
        }
    },
    _1 = (e) => {
        const { theme: t, prefix: n } = e,
            r = { nextPart: new Map(), validators: [] };
        return (
            I1(Object.entries(e.classGroups), n).forEach(([i, s]) => {
                tu(s, r, i, t);
            }),
            r
        );
    },
    tu = (e, t, n, r) => {
        e.forEach((o) => {
            if (typeof o == "string") {
                const i = o === "" ? t : qd(t, o);
                i.classGroupId = n;
                return;
            }
            if (typeof o == "function") {
                if (L1(o)) {
                    tu(o(r), t, n, r);
                    return;
                }
                t.validators.push({ validator: o, classGroupId: n });
                return;
            }
            Object.entries(o).forEach(([i, s]) => {
                tu(s, qd(t, i), n, r);
            });
        });
    },
    qd = (e, t) => {
        let n = e;
        return (
            t.split(gc).forEach((r) => {
                n.nextPart.has(r) || n.nextPart.set(r, { nextPart: new Map(), validators: [] }), (n = n.nextPart.get(r));
            }),
            n
        );
    },
    L1 = (e) => e.isThemeGetter,
    I1 = (e, t) =>
        t
            ? e.map(([n, r]) => {
                  const o = r.map((i) => (typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([s, l]) => [t + s, l])) : i));
                  return [n, o];
              })
            : e,
    D1 = (e) => {
        if (e < 1) return { get: () => {}, set: () => {} };
        let t = 0,
            n = new Map(),
            r = new Map();
        const o = (i, s) => {
            n.set(i, s), t++, t > e && ((t = 0), (r = n), (n = new Map()));
        };
        return {
            get(i) {
                let s = n.get(i);
                if (s !== void 0) return s;
                if ((s = r.get(i)) !== void 0) return o(i, s), s;
            },
            set(i, s) {
                n.has(i) ? n.set(i, s) : o(i, s);
            }
        };
    },
    Rm = "!",
    z1 = (e) => {
        const { separator: t, experimentalParseClassName: n } = e,
            r = t.length === 1,
            o = t[0],
            i = t.length,
            s = (l) => {
                const a = [];
                let u = 0,
                    f = 0,
                    d;
                for (let w = 0; w < l.length; w++) {
                    let p = l[w];
                    if (u === 0) {
                        if (p === o && (r || l.slice(w, w + i) === t)) {
                            a.push(l.slice(f, w)), (f = w + i);
                            continue;
                        }
                        if (p === "/") {
                            d = w;
                            continue;
                        }
                    }
                    p === "[" ? u++ : p === "]" && u--;
                }
                const c = a.length === 0 ? l : l.substring(f),
                    x = c.startsWith(Rm),
                    v = x ? c.substring(1) : c,
                    m = d && d > f ? d - f : void 0;
                return { modifiers: a, hasImportantModifier: x, baseClassName: v, maybePostfixModifierPosition: m };
            };
        return n ? (l) => n({ className: l, parseClassName: s }) : s;
    },
    F1 = (e) => {
        if (e.length <= 1) return e;
        const t = [];
        let n = [];
        return (
            e.forEach((r) => {
                r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
            }),
            t.push(...n.sort()),
            t
        );
    },
    $1 = (e) => ({ cache: D1(e.cacheSize), parseClassName: z1(e), ...M1(e) }),
    B1 = /\s+/,
    U1 = (e, t) => {
        const { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: o } = t,
            i = [],
            s = e.trim().split(B1);
        let l = "";
        for (let a = s.length - 1; a >= 0; a -= 1) {
            const u = s[a],
                { modifiers: f, hasImportantModifier: d, baseClassName: c, maybePostfixModifierPosition: x } = n(u);
            let v = !!x,
                m = r(v ? c.substring(0, x) : c);
            if (!m) {
                if (!v) {
                    l = u + (l.length > 0 ? " " + l : l);
                    continue;
                }
                if (((m = r(c)), !m)) {
                    l = u + (l.length > 0 ? " " + l : l);
                    continue;
                }
                v = !1;
            }
            const w = F1(f).join(":"),
                p = d ? w + Rm : w,
                h = p + m;
            if (i.includes(h)) continue;
            i.push(h);
            const y = o(m, v);
            for (let E = 0; E < y.length; ++E) {
                const C = y[E];
                i.push(p + C);
            }
            l = u + (l.length > 0 ? " " + l : l);
        }
        return l;
    };
function V1() {
    let e = 0,
        t,
        n,
        r = "";
    for (; e < arguments.length; ) (t = arguments[e++]) && (n = Om(t)) && (r && (r += " "), (r += n));
    return r;
}
const Om = (e) => {
    if (typeof e == "string") return e;
    let t,
        n = "";
    for (let r = 0; r < e.length; r++) e[r] && (t = Om(e[r])) && (n && (n += " "), (n += t));
    return n;
};
function H1(e, ...t) {
    let n,
        r,
        o,
        i = s;
    function s(a) {
        const u = t.reduce((f, d) => d(f), e());
        return (n = $1(u)), (r = n.cache.get), (o = n.cache.set), (i = l), l(a);
    }
    function l(a) {
        const u = r(a);
        if (u) return u;
        const f = U1(a, n);
        return o(a, f), f;
    }
    return function () {
        return i(V1.apply(null, arguments));
    };
}
const ce = (e) => {
        const t = (n) => n[e] || [];
        return (t.isThemeGetter = !0), t;
    },
    Mm = /^\[(?:([a-z-]+):)?(.+)\]$/i,
    W1 = /^\d+\/\d+$/,
    Q1 = new Set(["px", "full", "screen"]),
    K1 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    G1 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    Y1 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
    q1 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    X1 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    Jt = (e) => zr(e) || Q1.has(e) || W1.test(e),
    gn = (e) => ao(e, "length", ix),
    zr = (e) => !!e && !Number.isNaN(Number(e)),
    Jl = (e) => ao(e, "number", zr),
    No = (e) => !!e && Number.isInteger(Number(e)),
    Z1 = (e) => e.endsWith("%") && zr(e.slice(0, -1)),
    G = (e) => Mm.test(e),
    vn = (e) => K1.test(e),
    J1 = new Set(["length", "size", "percentage"]),
    ex = (e) => ao(e, J1, Am),
    tx = (e) => ao(e, "position", Am),
    nx = new Set(["image", "url"]),
    rx = (e) => ao(e, nx, lx),
    ox = (e) => ao(e, "", sx),
    Po = () => !0,
    ao = (e, t, n) => {
        const r = Mm.exec(e);
        return r ? (r[1] ? (typeof t == "string" ? r[1] === t : t.has(r[1])) : n(r[2])) : !1;
    },
    ix = (e) => G1.test(e) && !Y1.test(e),
    Am = () => !1,
    sx = (e) => q1.test(e),
    lx = (e) => X1.test(e),
    ax = () => {
        const e = ce("colors"),
            t = ce("spacing"),
            n = ce("blur"),
            r = ce("brightness"),
            o = ce("borderColor"),
            i = ce("borderRadius"),
            s = ce("borderSpacing"),
            l = ce("borderWidth"),
            a = ce("contrast"),
            u = ce("grayscale"),
            f = ce("hueRotate"),
            d = ce("invert"),
            c = ce("gap"),
            x = ce("gradientColorStops"),
            v = ce("gradientColorStopPositions"),
            m = ce("inset"),
            w = ce("margin"),
            p = ce("opacity"),
            h = ce("padding"),
            y = ce("saturate"),
            E = ce("scale"),
            C = ce("sepia"),
            b = ce("skew"),
            k = ce("space"),
            P = ce("translate"),
            j = () => ["auto", "contain", "none"],
            O = () => ["auto", "hidden", "clip", "visible", "scroll"],
            L = () => ["auto", G, t],
            D = () => [G, t],
            V = () => ["", Jt, gn],
            _ = () => ["auto", zr, G],
            H = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
            U = () => ["solid", "dashed", "dotted", "double", "none"],
            W = () => [
                "normal",
                "multiply",
                "screen",
                "overlay",
                "darken",
                "lighten",
                "color-dodge",
                "color-burn",
                "hard-light",
                "soft-light",
                "difference",
                "exclusion",
                "hue",
                "saturation",
                "color",
                "luminosity"
            ],
            N = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
            M = () => ["", "0", G],
            F = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
            I = () => [zr, G];
        return {
            cacheSize: 500,
            separator: ":",
            theme: {
                colors: [Po],
                spacing: [Jt, gn],
                blur: ["none", "", vn, G],
                brightness: I(),
                borderColor: [e],
                borderRadius: ["none", "", "full", vn, G],
                borderSpacing: D(),
                borderWidth: V(),
                contrast: I(),
                grayscale: M(),
                hueRotate: I(),
                invert: M(),
                gap: D(),
                gradientColorStops: [e],
                gradientColorStopPositions: [Z1, gn],
                inset: L(),
                margin: L(),
                opacity: I(),
                padding: D(),
                saturate: I(),
                scale: I(),
                sepia: M(),
                skew: I(),
                space: D(),
                translate: D()
            },
            classGroups: {
                aspect: [{ aspect: ["auto", "square", "video", G] }],
                container: ["container"],
                columns: [{ columns: [vn] }],
                "break-after": [{ "break-after": F() }],
                "break-before": [{ "break-before": F() }],
                "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }],
                "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
                box: [{ box: ["border", "content"] }],
                display: [
                    "block",
                    "inline-block",
                    "inline",
                    "flex",
                    "inline-flex",
                    "table",
                    "inline-table",
                    "table-caption",
                    "table-cell",
                    "table-column",
                    "table-column-group",
                    "table-footer-group",
                    "table-header-group",
                    "table-row-group",
                    "table-row",
                    "flow-root",
                    "grid",
                    "inline-grid",
                    "contents",
                    "list-item",
                    "hidden"
                ],
                float: [{ float: ["right", "left", "none", "start", "end"] }],
                clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
                isolation: ["isolate", "isolation-auto"],
                "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }],
                "object-position": [{ object: [...H(), G] }],
                overflow: [{ overflow: O() }],
                "overflow-x": [{ "overflow-x": O() }],
                "overflow-y": [{ "overflow-y": O() }],
                overscroll: [{ overscroll: j() }],
                "overscroll-x": [{ "overscroll-x": j() }],
                "overscroll-y": [{ "overscroll-y": j() }],
                position: ["static", "fixed", "absolute", "relative", "sticky"],
                inset: [{ inset: [m] }],
                "inset-x": [{ "inset-x": [m] }],
                "inset-y": [{ "inset-y": [m] }],
                start: [{ start: [m] }],
                end: [{ end: [m] }],
                top: [{ top: [m] }],
                right: [{ right: [m] }],
                bottom: [{ bottom: [m] }],
                left: [{ left: [m] }],
                visibility: ["visible", "invisible", "collapse"],
                z: [{ z: ["auto", No, G] }],
                basis: [{ basis: L() }],
                "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }],
                "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
                flex: [{ flex: ["1", "auto", "initial", "none", G] }],
                grow: [{ grow: M() }],
                shrink: [{ shrink: M() }],
                order: [{ order: ["first", "last", "none", No, G] }],
                "grid-cols": [{ "grid-cols": [Po] }],
                "col-start-end": [{ col: ["auto", { span: ["full", No, G] }, G] }],
                "col-start": [{ "col-start": _() }],
                "col-end": [{ "col-end": _() }],
                "grid-rows": [{ "grid-rows": [Po] }],
                "row-start-end": [{ row: ["auto", { span: [No, G] }, G] }],
                "row-start": [{ "row-start": _() }],
                "row-end": [{ "row-end": _() }],
                "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }],
                "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", G] }],
                "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", G] }],
                gap: [{ gap: [c] }],
                "gap-x": [{ "gap-x": [c] }],
                "gap-y": [{ "gap-y": [c] }],
                "justify-content": [{ justify: ["normal", ...N()] }],
                "justify-items": [{ "justify-items": ["start", "end", "center", "stretch"] }],
                "justify-self": [{ "justify-self": ["auto", "start", "end", "center", "stretch"] }],
                "align-content": [{ content: ["normal", ...N(), "baseline"] }],
                "align-items": [{ items: ["start", "end", "center", "baseline", "stretch"] }],
                "align-self": [{ self: ["auto", "start", "end", "center", "stretch", "baseline"] }],
                "place-content": [{ "place-content": [...N(), "baseline"] }],
                "place-items": [{ "place-items": ["start", "end", "center", "baseline", "stretch"] }],
                "place-self": [{ "place-self": ["auto", "start", "end", "center", "stretch"] }],
                p: [{ p: [h] }],
                px: [{ px: [h] }],
                py: [{ py: [h] }],
                ps: [{ ps: [h] }],
                pe: [{ pe: [h] }],
                pt: [{ pt: [h] }],
                pr: [{ pr: [h] }],
                pb: [{ pb: [h] }],
                pl: [{ pl: [h] }],
                m: [{ m: [w] }],
                mx: [{ mx: [w] }],
                my: [{ my: [w] }],
                ms: [{ ms: [w] }],
                me: [{ me: [w] }],
                mt: [{ mt: [w] }],
                mr: [{ mr: [w] }],
                mb: [{ mb: [w] }],
                ml: [{ ml: [w] }],
                "space-x": [{ "space-x": [k] }],
                "space-x-reverse": ["space-x-reverse"],
                "space-y": [{ "space-y": [k] }],
                "space-y-reverse": ["space-y-reverse"],
                w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", G, t] }],
                "min-w": [{ "min-w": [G, t, "min", "max", "fit"] }],
                "max-w": [{ "max-w": [G, t, "none", "full", "min", "max", "fit", "prose", { screen: [vn] }, vn] }],
                h: [{ h: [G, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
                "min-h": [{ "min-h": [G, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
                "max-h": [{ "max-h": [G, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
                size: [{ size: [G, t, "auto", "min", "max", "fit"] }],
                "font-size": [{ text: ["base", vn, gn] }],
                "font-smoothing": ["antialiased", "subpixel-antialiased"],
                "font-style": ["italic", "not-italic"],
                "font-weight": [{ font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Jl] }],
                "font-family": [{ font: [Po] }],
                "fvn-normal": ["normal-nums"],
                "fvn-ordinal": ["ordinal"],
                "fvn-slashed-zero": ["slashed-zero"],
                "fvn-figure": ["lining-nums", "oldstyle-nums"],
                "fvn-spacing": ["proportional-nums", "tabular-nums"],
                "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
                tracking: [{ tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", G] }],
                "line-clamp": [{ "line-clamp": ["none", zr, Jl] }],
                leading: [{ leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Jt, G] }],
                "list-image": [{ "list-image": ["none", G] }],
                "list-style-type": [{ list: ["none", "disc", "decimal", G] }],
                "list-style-position": [{ list: ["inside", "outside"] }],
                "placeholder-color": [{ placeholder: [e] }],
                "placeholder-opacity": [{ "placeholder-opacity": [p] }],
                "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }],
                "text-color": [{ text: [e] }],
                "text-opacity": [{ "text-opacity": [p] }],
                "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                "text-decoration-style": [{ decoration: [...U(), "wavy"] }],
                "text-decoration-thickness": [{ decoration: ["auto", "from-font", Jt, gn] }],
                "underline-offset": [{ "underline-offset": ["auto", Jt, G] }],
                "text-decoration-color": [{ decoration: [e] }],
                "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
                indent: [{ indent: D() }],
                "vertical-align": [{ align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", G] }],
                whitespace: [{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }],
                break: [{ break: ["normal", "words", "all", "keep"] }],
                hyphens: [{ hyphens: ["none", "manual", "auto"] }],
                content: [{ content: ["none", G] }],
                "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
                "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
                "bg-opacity": [{ "bg-opacity": [p] }],
                "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
                "bg-position": [{ bg: [...H(), tx] }],
                "bg-repeat": [{ bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] }],
                "bg-size": [{ bg: ["auto", "cover", "contain", ex] }],
                "bg-image": [{ bg: ["none", { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, rx] }],
                "bg-color": [{ bg: [e] }],
                "gradient-from-pos": [{ from: [v] }],
                "gradient-via-pos": [{ via: [v] }],
                "gradient-to-pos": [{ to: [v] }],
                "gradient-from": [{ from: [x] }],
                "gradient-via": [{ via: [x] }],
                "gradient-to": [{ to: [x] }],
                rounded: [{ rounded: [i] }],
                "rounded-s": [{ "rounded-s": [i] }],
                "rounded-e": [{ "rounded-e": [i] }],
                "rounded-t": [{ "rounded-t": [i] }],
                "rounded-r": [{ "rounded-r": [i] }],
                "rounded-b": [{ "rounded-b": [i] }],
                "rounded-l": [{ "rounded-l": [i] }],
                "rounded-ss": [{ "rounded-ss": [i] }],
                "rounded-se": [{ "rounded-se": [i] }],
                "rounded-ee": [{ "rounded-ee": [i] }],
                "rounded-es": [{ "rounded-es": [i] }],
                "rounded-tl": [{ "rounded-tl": [i] }],
                "rounded-tr": [{ "rounded-tr": [i] }],
                "rounded-br": [{ "rounded-br": [i] }],
                "rounded-bl": [{ "rounded-bl": [i] }],
                "border-w": [{ border: [l] }],
                "border-w-x": [{ "border-x": [l] }],
                "border-w-y": [{ "border-y": [l] }],
                "border-w-s": [{ "border-s": [l] }],
                "border-w-e": [{ "border-e": [l] }],
                "border-w-t": [{ "border-t": [l] }],
                "border-w-r": [{ "border-r": [l] }],
                "border-w-b": [{ "border-b": [l] }],
                "border-w-l": [{ "border-l": [l] }],
                "border-opacity": [{ "border-opacity": [p] }],
                "border-style": [{ border: [...U(), "hidden"] }],
                "divide-x": [{ "divide-x": [l] }],
                "divide-x-reverse": ["divide-x-reverse"],
                "divide-y": [{ "divide-y": [l] }],
                "divide-y-reverse": ["divide-y-reverse"],
                "divide-opacity": [{ "divide-opacity": [p] }],
                "divide-style": [{ divide: U() }],
                "border-color": [{ border: [o] }],
                "border-color-x": [{ "border-x": [o] }],
                "border-color-y": [{ "border-y": [o] }],
                "border-color-s": [{ "border-s": [o] }],
                "border-color-e": [{ "border-e": [o] }],
                "border-color-t": [{ "border-t": [o] }],
                "border-color-r": [{ "border-r": [o] }],
                "border-color-b": [{ "border-b": [o] }],
                "border-color-l": [{ "border-l": [o] }],
                "divide-color": [{ divide: [o] }],
                "outline-style": [{ outline: ["", ...U()] }],
                "outline-offset": [{ "outline-offset": [Jt, G] }],
                "outline-w": [{ outline: [Jt, gn] }],
                "outline-color": [{ outline: [e] }],
                "ring-w": [{ ring: V() }],
                "ring-w-inset": ["ring-inset"],
                "ring-color": [{ ring: [e] }],
                "ring-opacity": [{ "ring-opacity": [p] }],
                "ring-offset-w": [{ "ring-offset": [Jt, gn] }],
                "ring-offset-color": [{ "ring-offset": [e] }],
                shadow: [{ shadow: ["", "inner", "none", vn, ox] }],
                "shadow-color": [{ shadow: [Po] }],
                opacity: [{ opacity: [p] }],
                "mix-blend": [{ "mix-blend": [...W(), "plus-lighter", "plus-darker"] }],
                "bg-blend": [{ "bg-blend": W() }],
                filter: [{ filter: ["", "none"] }],
                blur: [{ blur: [n] }],
                brightness: [{ brightness: [r] }],
                contrast: [{ contrast: [a] }],
                "drop-shadow": [{ "drop-shadow": ["", "none", vn, G] }],
                grayscale: [{ grayscale: [u] }],
                "hue-rotate": [{ "hue-rotate": [f] }],
                invert: [{ invert: [d] }],
                saturate: [{ saturate: [y] }],
                sepia: [{ sepia: [C] }],
                "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
                "backdrop-blur": [{ "backdrop-blur": [n] }],
                "backdrop-brightness": [{ "backdrop-brightness": [r] }],
                "backdrop-contrast": [{ "backdrop-contrast": [a] }],
                "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
                "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [f] }],
                "backdrop-invert": [{ "backdrop-invert": [d] }],
                "backdrop-opacity": [{ "backdrop-opacity": [p] }],
                "backdrop-saturate": [{ "backdrop-saturate": [y] }],
                "backdrop-sepia": [{ "backdrop-sepia": [C] }],
                "border-collapse": [{ border: ["collapse", "separate"] }],
                "border-spacing": [{ "border-spacing": [s] }],
                "border-spacing-x": [{ "border-spacing-x": [s] }],
                "border-spacing-y": [{ "border-spacing-y": [s] }],
                "table-layout": [{ table: ["auto", "fixed"] }],
                caption: [{ caption: ["top", "bottom"] }],
                transition: [{ transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", G] }],
                duration: [{ duration: I() }],
                ease: [{ ease: ["linear", "in", "out", "in-out", G] }],
                delay: [{ delay: I() }],
                animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", G] }],
                transform: [{ transform: ["", "gpu", "none"] }],
                scale: [{ scale: [E] }],
                "scale-x": [{ "scale-x": [E] }],
                "scale-y": [{ "scale-y": [E] }],
                rotate: [{ rotate: [No, G] }],
                "translate-x": [{ "translate-x": [P] }],
                "translate-y": [{ "translate-y": [P] }],
                "skew-x": [{ "skew-x": [b] }],
                "skew-y": [{ "skew-y": [b] }],
                "transform-origin": [{ origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", G] }],
                accent: [{ accent: ["auto", e] }],
                appearance: [{ appearance: ["none", "auto"] }],
                cursor: [
                    {
                        cursor: [
                            "auto",
                            "default",
                            "pointer",
                            "wait",
                            "text",
                            "move",
                            "help",
                            "not-allowed",
                            "none",
                            "context-menu",
                            "progress",
                            "cell",
                            "crosshair",
                            "vertical-text",
                            "alias",
                            "copy",
                            "no-drop",
                            "grab",
                            "grabbing",
                            "all-scroll",
                            "col-resize",
                            "row-resize",
                            "n-resize",
                            "e-resize",
                            "s-resize",
                            "w-resize",
                            "ne-resize",
                            "nw-resize",
                            "se-resize",
                            "sw-resize",
                            "ew-resize",
                            "ns-resize",
                            "nesw-resize",
                            "nwse-resize",
                            "zoom-in",
                            "zoom-out",
                            G
                        ]
                    }
                ],
                "caret-color": [{ caret: [e] }],
                "pointer-events": [{ "pointer-events": ["none", "auto"] }],
                resize: [{ resize: ["none", "y", "x", ""] }],
                "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
                "scroll-m": [{ "scroll-m": D() }],
                "scroll-mx": [{ "scroll-mx": D() }],
                "scroll-my": [{ "scroll-my": D() }],
                "scroll-ms": [{ "scroll-ms": D() }],
                "scroll-me": [{ "scroll-me": D() }],
                "scroll-mt": [{ "scroll-mt": D() }],
                "scroll-mr": [{ "scroll-mr": D() }],
                "scroll-mb": [{ "scroll-mb": D() }],
                "scroll-ml": [{ "scroll-ml": D() }],
                "scroll-p": [{ "scroll-p": D() }],
                "scroll-px": [{ "scroll-px": D() }],
                "scroll-py": [{ "scroll-py": D() }],
                "scroll-ps": [{ "scroll-ps": D() }],
                "scroll-pe": [{ "scroll-pe": D() }],
                "scroll-pt": [{ "scroll-pt": D() }],
                "scroll-pr": [{ "scroll-pr": D() }],
                "scroll-pb": [{ "scroll-pb": D() }],
                "scroll-pl": [{ "scroll-pl": D() }],
                "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
                "snap-stop": [{ snap: ["normal", "always"] }],
                "snap-type": [{ snap: ["none", "x", "y", "both"] }],
                "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
                touch: [{ touch: ["auto", "none", "manipulation"] }],
                "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
                "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
                "touch-pz": ["touch-pinch-zoom"],
                select: [{ select: ["none", "text", "all", "auto"] }],
                "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", G] }],
                fill: [{ fill: [e, "none"] }],
                "stroke-w": [{ stroke: [Jt, gn, Jl] }],
                stroke: [{ stroke: [e, "none"] }],
                sr: ["sr-only", "not-sr-only"],
                "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }]
            },
            conflictingClassGroups: {
                overflow: ["overflow-x", "overflow-y"],
                overscroll: ["overscroll-x", "overscroll-y"],
                inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                "inset-x": ["right", "left"],
                "inset-y": ["top", "bottom"],
                flex: ["basis", "grow", "shrink"],
                gap: ["gap-x", "gap-y"],
                p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                px: ["pr", "pl"],
                py: ["pt", "pb"],
                m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                mx: ["mr", "ml"],
                my: ["mt", "mb"],
                size: ["w", "h"],
                "font-size": ["leading"],
                "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                "fvn-ordinal": ["fvn-normal"],
                "fvn-slashed-zero": ["fvn-normal"],
                "fvn-figure": ["fvn-normal"],
                "fvn-spacing": ["fvn-normal"],
                "fvn-fraction": ["fvn-normal"],
                "line-clamp": ["display", "overflow"],
                rounded: [
                    "rounded-s",
                    "rounded-e",
                    "rounded-t",
                    "rounded-r",
                    "rounded-b",
                    "rounded-l",
                    "rounded-ss",
                    "rounded-se",
                    "rounded-ee",
                    "rounded-es",
                    "rounded-tl",
                    "rounded-tr",
                    "rounded-br",
                    "rounded-bl"
                ],
                "rounded-s": ["rounded-ss", "rounded-es"],
                "rounded-e": ["rounded-se", "rounded-ee"],
                "rounded-t": ["rounded-tl", "rounded-tr"],
                "rounded-r": ["rounded-tr", "rounded-br"],
                "rounded-b": ["rounded-br", "rounded-bl"],
                "rounded-l": ["rounded-tl", "rounded-bl"],
                "border-spacing": ["border-spacing-x", "border-spacing-y"],
                "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                "border-w-x": ["border-w-r", "border-w-l"],
                "border-w-y": ["border-w-t", "border-w-b"],
                "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                "border-color-x": ["border-color-r", "border-color-l"],
                "border-color-y": ["border-color-t", "border-color-b"],
                "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                "scroll-mx": ["scroll-mr", "scroll-ml"],
                "scroll-my": ["scroll-mt", "scroll-mb"],
                "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                "scroll-px": ["scroll-pr", "scroll-pl"],
                "scroll-py": ["scroll-pt", "scroll-pb"],
                touch: ["touch-x", "touch-y", "touch-pz"],
                "touch-x": ["touch"],
                "touch-y": ["touch"],
                "touch-pz": ["touch"]
            },
            conflictingClassGroupModifiers: { "font-size": ["leading"] }
        };
    },
    ux = H1(ax);
function rt(...e) {
    return ux(bm(e));
}
const cx = l1,
    _m = S.forwardRef(({ className: e, ...t }, n) =>
        g.jsx(ym, { ref: n, className: rt("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e), ...t })
    );
_m.displayName = ym.displayName;
const dx = Nm(
        "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
        {
            variants: { variant: { default: "border bg-background text-foreground", destructive: "destructive group border-destructive bg-destructive text-destructive-foreground" } },
            defaultVariants: { variant: "default" }
        }
    ),
    Lm = S.forwardRef(({ className: e, variant: t, ...n }, r) => g.jsx(xm, { ref: r, className: rt(dx({ variant: t }), e), ...n }));
Lm.displayName = xm.displayName;
const fx = S.forwardRef(({ className: e, ...t }, n) =>
    g.jsx(Em, {
        ref: n,
        className: rt(
            "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
            e
        ),
        ...t
    })
);
fx.displayName = Em.displayName;
const Im = S.forwardRef(({ className: e, ...t }, n) =>
    g.jsx(Cm, {
        ref: n,
        className: rt(
            "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
            e
        ),
        "toast-close": "",
        ...t,
        children: g.jsx(Tm, { className: "h-4 w-4" })
    })
);
Im.displayName = Cm.displayName;
const Dm = S.forwardRef(({ className: e, ...t }, n) => g.jsx(wm, { ref: n, className: rt("text-sm font-semibold", e), ...t }));
Dm.displayName = wm.displayName;
const zm = S.forwardRef(({ className: e, ...t }, n) => g.jsx(Sm, { ref: n, className: rt("text-sm opacity-90", e), ...t }));
zm.displayName = Sm.displayName;
function px() {
    const { toasts: e } = vy();
    return g.jsxs(cx, {
        children: [
            e.map(function ({ id: t, title: n, description: r, action: o, ...i }) {
                return g.jsxs(Lm, { ...i, children: [g.jsxs("div", { className: "grid gap-1", children: [n && g.jsx(Dm, { children: n }), r && g.jsx(zm, { children: r })] }), o, g.jsx(Im, {})] }, t);
            }),
            g.jsx(_m, {})
        ]
    });
}
var Xd = ["light", "dark"],
    hx = "(prefers-color-scheme: dark)",
    mx = S.createContext(void 0),
    gx = { setTheme: (e) => {}, themes: [] },
    vx = () => {
        var e;
        return (e = S.useContext(mx)) != null ? e : gx;
    };
S.memo(({ forcedTheme: e, storageKey: t, attribute: n, enableSystem: r, enableColorScheme: o, defaultTheme: i, value: s, attrs: l, nonce: a }) => {
    let u = i === "system",
        f = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${l.map((v) => `'${v}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`,
        d = o ? (Xd.includes(i) && i ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e") : "",
        c = (v, m = !1, w = !0) => {
            let p = s ? s[v] : v,
                h = m ? v + "|| ''" : `'${p}'`,
                y = "";
            return o && w && !m && Xd.includes(v) && (y += `d.style.colorScheme = '${v}';`), n === "class" ? (m || p ? (y += `c.add(${h})`) : (y += "null")) : p && (y += `d[s](n,${h})`), y;
        },
        x = e
            ? `!function(){${f}${c(e)}}()`
            : r
            ? `!function(){try{${f}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${hx}',m=window.matchMedia(t);if(m.media!==t||m.matches){${c("dark")}}else{${c(
                  "light"
              )}}}else if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${c(s ? "x[e]" : "e", !0)}}${u ? "" : "else{" + c(i, !1, !1) + "}"}${d}}catch(e){}}()`
            : `!function(){try{${f}var e=localStorage.getItem('${t}');if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${c(s ? "x[e]" : "e", !0)}}else{${c(i, !1, !1)};}${d}}catch(t){}}();`;
    return S.createElement("script", { nonce: a, dangerouslySetInnerHTML: { __html: x } });
});
var yx = (e) => {
        switch (e) {
            case "success":
                return Sx;
            case "info":
                return Cx;
            case "warning":
                return Ex;
            case "error":
                return kx;
            default:
                return null;
        }
    },
    xx = Array(12).fill(0),
    wx = ({ visible: e }) =>
        A.createElement(
            "div",
            { className: "sonner-loading-wrapper", "data-visible": e },
            A.createElement(
                "div",
                { className: "sonner-spinner" },
                xx.map((t, n) => A.createElement("div", { className: "sonner-loading-bar", key: `spinner-bar-${n}` }))
            )
        ),
    Sx = A.createElement(
        "svg",
        { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" },
        A.createElement("path", {
            fillRule: "evenodd",
            d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
            clipRule: "evenodd"
        })
    ),
    Ex = A.createElement(
        "svg",
        { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", height: "20", width: "20" },
        A.createElement("path", {
            fillRule: "evenodd",
            d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
            clipRule: "evenodd"
        })
    ),
    Cx = A.createElement(
        "svg",
        { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" },
        A.createElement("path", {
            fillRule: "evenodd",
            d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
            clipRule: "evenodd"
        })
    ),
    kx = A.createElement(
        "svg",
        { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" },
        A.createElement("path", {
            fillRule: "evenodd",
            d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
            clipRule: "evenodd"
        })
    ),
    bx = () => {
        let [e, t] = A.useState(document.hidden);
        return (
            A.useEffect(() => {
                let n = () => {
                    t(document.hidden);
                };
                return document.addEventListener("visibilitychange", n), () => window.removeEventListener("visibilitychange", n);
            }, []),
            e
        );
    },
    nu = 1,
    Nx = class {
        constructor() {
            (this.subscribe = (e) => (
                this.subscribers.push(e),
                () => {
                    let t = this.subscribers.indexOf(e);
                    this.subscribers.splice(t, 1);
                }
            )),
                (this.publish = (e) => {
                    this.subscribers.forEach((t) => t(e));
                }),
                (this.addToast = (e) => {
                    this.publish(e), (this.toasts = [...this.toasts, e]);
                }),
                (this.create = (e) => {
                    var t;
                    let { message: n, ...r } = e,
                        o = typeof (e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : nu++,
                        i = this.toasts.find((l) => l.id === o),
                        s = e.dismissible === void 0 ? !0 : e.dismissible;
                    return (
                        i
                            ? (this.toasts = this.toasts.map((l) => (l.id === o ? (this.publish({ ...l, ...e, id: o, title: n }), { ...l, ...e, id: o, dismissible: s, title: n }) : l)))
                            : this.addToast({ title: n, ...r, dismissible: s, id: o }),
                        o
                    );
                }),
                (this.dismiss = (e) => (
                    e ||
                        this.toasts.forEach((t) => {
                            this.subscribers.forEach((n) => n({ id: t.id, dismiss: !0 }));
                        }),
                    this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
                    e
                )),
                (this.message = (e, t) => this.create({ ...t, message: e })),
                (this.error = (e, t) => this.create({ ...t, message: e, type: "error" })),
                (this.success = (e, t) => this.create({ ...t, type: "success", message: e })),
                (this.info = (e, t) => this.create({ ...t, type: "info", message: e })),
                (this.warning = (e, t) => this.create({ ...t, type: "warning", message: e })),
                (this.loading = (e, t) => this.create({ ...t, type: "loading", message: e })),
                (this.promise = (e, t) => {
                    if (!t) return;
                    let n;
                    t.loading !== void 0 && (n = this.create({ ...t, promise: e, type: "loading", message: t.loading, description: typeof t.description != "function" ? t.description : void 0 }));
                    let r = e instanceof Promise ? e : e(),
                        o = n !== void 0;
                    return (
                        r
                            .then(async (i) => {
                                if (Tx(i) && !i.ok) {
                                    o = !1;
                                    let s = typeof t.error == "function" ? await t.error(`HTTP error! status: ${i.status}`) : t.error,
                                        l = typeof t.description == "function" ? await t.description(`HTTP error! status: ${i.status}`) : t.description;
                                    this.create({ id: n, type: "error", message: s, description: l });
                                } else if (t.success !== void 0) {
                                    o = !1;
                                    let s = typeof t.success == "function" ? await t.success(i) : t.success,
                                        l = typeof t.description == "function" ? await t.description(i) : t.description;
                                    this.create({ id: n, type: "success", message: s, description: l });
                                }
                            })
                            .catch(async (i) => {
                                if (t.error !== void 0) {
                                    o = !1;
                                    let s = typeof t.error == "function" ? await t.error(i) : t.error,
                                        l = typeof t.description == "function" ? await t.description(i) : t.description;
                                    this.create({ id: n, type: "error", message: s, description: l });
                                }
                            })
                            .finally(() => {
                                var i;
                                o && (this.dismiss(n), (n = void 0)), (i = t.finally) == null || i.call(t);
                            }),
                        n
                    );
                }),
                (this.custom = (e, t) => {
                    let n = (t == null ? void 0 : t.id) || nu++;
                    return this.create({ jsx: e(n), id: n, ...t }), n;
                }),
                (this.subscribers = []),
                (this.toasts = []);
        }
    },
    at = new Nx(),
    Px = (e, t) => {
        let n = (t == null ? void 0 : t.id) || nu++;
        return at.addToast({ title: e, ...t, id: n }), n;
    },
    Tx = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number",
    jx = Px,
    Rx = () => at.toasts;
Object.assign(
    jx,
    { success: at.success, info: at.info, warning: at.warning, error: at.error, custom: at.custom, message: at.message, promise: at.promise, dismiss: at.dismiss, loading: at.loading },
    { getHistory: Rx }
);
function Ox(e, { insertAt: t } = {}) {
    if (typeof document > "u") return;
    let n = document.head || document.getElementsByTagName("head")[0],
        r = document.createElement("style");
    (r.type = "text/css"), t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r), r.styleSheet ? (r.styleSheet.cssText = e) : r.appendChild(document.createTextNode(e));
}
Ox(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Gi(e) {
    return e.label !== void 0;
}
var Mx = 3,
    Ax = "32px",
    _x = 4e3,
    Lx = 356,
    Ix = 14,
    Dx = 20,
    zx = 200;
function Fx(...e) {
    return e.filter(Boolean).join(" ");
}
var $x = (e) => {
    var t, n, r, o, i, s, l, a, u, f;
    let {
            invert: d,
            toast: c,
            unstyled: x,
            interacting: v,
            setHeights: m,
            visibleToasts: w,
            heights: p,
            index: h,
            toasts: y,
            expanded: E,
            removeToast: C,
            defaultRichColors: b,
            closeButton: k,
            style: P,
            cancelButtonStyle: j,
            actionButtonStyle: O,
            className: L = "",
            descriptionClassName: D = "",
            duration: V,
            position: _,
            gap: H,
            loadingIcon: U,
            expandByDefault: W,
            classNames: N,
            icons: M,
            closeButtonAriaLabel: F = "Close toast",
            pauseWhenPageIsHidden: I,
            cn: B
        } = e,
        [K, J] = A.useState(!1),
        [Ne, X] = A.useState(!1),
        [ue, pe] = A.useState(!1),
        [Oe, Ee] = A.useState(!1),
        [oe, $] = A.useState(0),
        [Z, se] = A.useState(0),
        ke = A.useRef(null),
        Pe = A.useRef(null),
        ot = h === 0,
        vt = h + 1 <= w,
        le = c.type,
        Ye = c.dismissible !== !1,
        Gn = c.className || "",
        fo = c.descriptionClassName || "",
        hn = A.useMemo(() => p.findIndex((Q) => Q.toastId === c.id) || 0, [p, c.id]),
        bi = A.useMemo(() => {
            var Q;
            return (Q = c.closeButton) != null ? Q : k;
        }, [c.closeButton, k]),
        po = A.useMemo(() => c.duration || V || _x, [c.duration, V]),
        ho = A.useRef(0),
        Zt = A.useRef(0),
        Ni = A.useRef(0),
        Ft = A.useRef(null),
        [bt, mo] = _.split("-"),
        vr = A.useMemo(() => p.reduce((Q, ie, ne) => (ne >= hn ? Q : Q + ie.height), 0), [p, hn]),
        Yn = bx(),
        go = c.invert || d,
        vo = le === "loading";
    (Zt.current = A.useMemo(() => hn * H + vr, [hn, vr])),
        A.useEffect(() => {
            J(!0);
        }, []),
        A.useLayoutEffect(() => {
            if (!K) return;
            let Q = Pe.current,
                ie = Q.style.height;
            Q.style.height = "auto";
            let ne = Q.getBoundingClientRect().height;
            (Q.style.height = ie),
                se(ne),
                m((it) => (it.find((st) => st.toastId === c.id) ? it.map((st) => (st.toastId === c.id ? { ...st, height: ne } : st)) : [{ toastId: c.id, height: ne, position: c.position }, ...it]));
        }, [K, c.title, c.description, m, c.id]);
    let $t = A.useCallback(() => {
        X(!0),
            $(Zt.current),
            m((Q) => Q.filter((ie) => ie.toastId !== c.id)),
            setTimeout(() => {
                C(c);
            }, zx);
    }, [c, C, m, Zt]);
    A.useEffect(() => {
        if ((c.promise && le === "loading") || c.duration === 1 / 0 || c.type === "loading") return;
        let Q,
            ie = po;
        return (
            E || v || (I && Yn)
                ? (() => {
                      if (Ni.current < ho.current) {
                          let ne = new Date().getTime() - ho.current;
                          ie = ie - ne;
                      }
                      Ni.current = new Date().getTime();
                  })()
                : ie !== 1 / 0 &&
                  ((ho.current = new Date().getTime()),
                  (Q = setTimeout(() => {
                      var ne;
                      (ne = c.onAutoClose) == null || ne.call(c, c), $t();
                  }, ie))),
            () => clearTimeout(Q)
        );
    }, [E, v, W, c, po, $t, c.promise, le, I, Yn]),
        A.useEffect(() => {
            let Q = Pe.current;
            if (Q) {
                let ie = Q.getBoundingClientRect().height;
                return se(ie), m((ne) => [{ toastId: c.id, height: ie, position: c.position }, ...ne]), () => m((ne) => ne.filter((it) => it.toastId !== c.id));
            }
        }, [m, c.id]),
        A.useEffect(() => {
            c.delete && $t();
        }, [$t, c.delete]);
    function El() {
        return M != null && M.loading
            ? A.createElement("div", { className: "sonner-loader", "data-visible": le === "loading" }, M.loading)
            : U
            ? A.createElement("div", { className: "sonner-loader", "data-visible": le === "loading" }, U)
            : A.createElement(wx, { visible: le === "loading" });
    }
    return A.createElement(
        "li",
        {
            "aria-live": c.important ? "assertive" : "polite",
            "aria-atomic": "true",
            role: "status",
            tabIndex: 0,
            ref: Pe,
            className: B(
                L,
                Gn,
                N == null ? void 0 : N.toast,
                (t = c == null ? void 0 : c.classNames) == null ? void 0 : t.toast,
                N == null ? void 0 : N.default,
                N == null ? void 0 : N[le],
                (n = c == null ? void 0 : c.classNames) == null ? void 0 : n[le]
            ),
            "data-sonner-toast": "",
            "data-rich-colors": (r = c.richColors) != null ? r : b,
            "data-styled": !(c.jsx || c.unstyled || x),
            "data-mounted": K,
            "data-promise": !!c.promise,
            "data-removed": Ne,
            "data-visible": vt,
            "data-y-position": bt,
            "data-x-position": mo,
            "data-index": h,
            "data-front": ot,
            "data-swiping": ue,
            "data-dismissible": Ye,
            "data-type": le,
            "data-invert": go,
            "data-swipe-out": Oe,
            "data-expanded": !!(E || (W && K)),
            style: { "--index": h, "--toasts-before": h, "--z-index": y.length - h, "--offset": `${Ne ? oe : Zt.current}px`, "--initial-height": W ? "auto" : `${Z}px`, ...P, ...c.style },
            onPointerDown: (Q) => {
                vo ||
                    !Ye ||
                    ((ke.current = new Date()), $(Zt.current), Q.target.setPointerCapture(Q.pointerId), Q.target.tagName !== "BUTTON" && (pe(!0), (Ft.current = { x: Q.clientX, y: Q.clientY })));
            },
            onPointerUp: () => {
                var Q, ie, ne, it;
                if (Oe || !Ye) return;
                Ft.current = null;
                let st = Number(((Q = Pe.current) == null ? void 0 : Q.style.getPropertyValue("--swipe-amount").replace("px", "")) || 0),
                    yr = new Date().getTime() - ((ie = ke.current) == null ? void 0 : ie.getTime()),
                    Pi = Math.abs(st) / yr;
                if (Math.abs(st) >= Dx || Pi > 0.11) {
                    $(Zt.current), (ne = c.onDismiss) == null || ne.call(c, c), $t(), Ee(!0);
                    return;
                }
                (it = Pe.current) == null || it.style.setProperty("--swipe-amount", "0px"), pe(!1);
            },
            onPointerMove: (Q) => {
                var ie;
                if (!Ft.current || !Ye) return;
                let ne = Q.clientY - Ft.current.y,
                    it = Q.clientX - Ft.current.x,
                    st = (bt === "top" ? Math.min : Math.max)(0, ne),
                    yr = Q.pointerType === "touch" ? 10 : 2;
                Math.abs(st) > yr ? (ie = Pe.current) == null || ie.style.setProperty("--swipe-amount", `${ne}px`) : Math.abs(it) > yr && (Ft.current = null);
            }
        },
        bi && !c.jsx
            ? A.createElement(
                  "button",
                  {
                      "aria-label": F,
                      "data-disabled": vo,
                      "data-close-button": !0,
                      onClick:
                          vo || !Ye
                              ? () => {}
                              : () => {
                                    var Q;
                                    $t(), (Q = c.onDismiss) == null || Q.call(c, c);
                                },
                      className: B(N == null ? void 0 : N.closeButton, (o = c == null ? void 0 : c.classNames) == null ? void 0 : o.closeButton)
                  },
                  A.createElement(
                      "svg",
                      {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "12",
                          height: "12",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "1.5",
                          strokeLinecap: "round",
                          strokeLinejoin: "round"
                      },
                      A.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
                      A.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
                  )
              )
            : null,
        c.jsx || A.isValidElement(c.title)
            ? c.jsx || c.title
            : A.createElement(
                  A.Fragment,
                  null,
                  le || c.icon || c.promise
                      ? A.createElement(
                            "div",
                            { "data-icon": "", className: B(N == null ? void 0 : N.icon, (i = c == null ? void 0 : c.classNames) == null ? void 0 : i.icon) },
                            c.promise || (c.type === "loading" && !c.icon) ? c.icon || El() : null,
                            c.type !== "loading" ? c.icon || (M == null ? void 0 : M[le]) || yx(le) : null
                        )
                      : null,
                  A.createElement(
                      "div",
                      { "data-content": "", className: B(N == null ? void 0 : N.content, (s = c == null ? void 0 : c.classNames) == null ? void 0 : s.content) },
                      A.createElement("div", { "data-title": "", className: B(N == null ? void 0 : N.title, (l = c == null ? void 0 : c.classNames) == null ? void 0 : l.title) }, c.title),
                      c.description
                          ? A.createElement(
                                "div",
                                { "data-description": "", className: B(D, fo, N == null ? void 0 : N.description, (a = c == null ? void 0 : c.classNames) == null ? void 0 : a.description) },
                                c.description
                            )
                          : null
                  ),
                  A.isValidElement(c.cancel)
                      ? c.cancel
                      : c.cancel && Gi(c.cancel)
                      ? A.createElement(
                            "button",
                            {
                                "data-button": !0,
                                "data-cancel": !0,
                                style: c.cancelButtonStyle || j,
                                onClick: (Q) => {
                                    var ie, ne;
                                    Gi(c.cancel) && Ye && ((ne = (ie = c.cancel).onClick) == null || ne.call(ie, Q), $t());
                                },
                                className: B(N == null ? void 0 : N.cancelButton, (u = c == null ? void 0 : c.classNames) == null ? void 0 : u.cancelButton)
                            },
                            c.cancel.label
                        )
                      : null,
                  A.isValidElement(c.action)
                      ? c.action
                      : c.action && Gi(c.action)
                      ? A.createElement(
                            "button",
                            {
                                "data-button": !0,
                                "data-action": !0,
                                style: c.actionButtonStyle || O,
                                onClick: (Q) => {
                                    var ie, ne;
                                    Gi(c.action) && (Q.defaultPrevented || ((ne = (ie = c.action).onClick) == null || ne.call(ie, Q), $t()));
                                },
                                className: B(N == null ? void 0 : N.actionButton, (f = c == null ? void 0 : c.classNames) == null ? void 0 : f.actionButton)
                            },
                            c.action.label
                        )
                      : null
              )
    );
};
function Zd() {
    if (typeof window > "u" || typeof document > "u") return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
var Bx = (e) => {
    let {
            invert: t,
            position: n = "bottom-right",
            hotkey: r = ["altKey", "KeyT"],
            expand: o,
            closeButton: i,
            className: s,
            offset: l,
            theme: a = "light",
            richColors: u,
            duration: f,
            style: d,
            visibleToasts: c = Mx,
            toastOptions: x,
            dir: v = Zd(),
            gap: m = Ix,
            loadingIcon: w,
            icons: p,
            containerAriaLabel: h = "Notifications",
            pauseWhenPageIsHidden: y,
            cn: E = Fx
        } = e,
        [C, b] = A.useState([]),
        k = A.useMemo(() => Array.from(new Set([n].concat(C.filter((I) => I.position).map((I) => I.position)))), [C, n]),
        [P, j] = A.useState([]),
        [O, L] = A.useState(!1),
        [D, V] = A.useState(!1),
        [_, H] = A.useState(a !== "system" ? a : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"),
        U = A.useRef(null),
        W = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
        N = A.useRef(null),
        M = A.useRef(!1),
        F = A.useCallback(
            (I) => {
                var B;
                ((B = C.find((K) => K.id === I.id)) != null && B.delete) || at.dismiss(I.id), b((K) => K.filter(({ id: J }) => J !== I.id));
            },
            [C]
        );
    return (
        A.useEffect(
            () =>
                at.subscribe((I) => {
                    if (I.dismiss) {
                        b((B) => B.map((K) => (K.id === I.id ? { ...K, delete: !0 } : K)));
                        return;
                    }
                    setTimeout(() => {
                        Yh.flushSync(() => {
                            b((B) => {
                                let K = B.findIndex((J) => J.id === I.id);
                                return K !== -1 ? [...B.slice(0, K), { ...B[K], ...I }, ...B.slice(K + 1)] : [I, ...B];
                            });
                        });
                    });
                }),
            []
        ),
        A.useEffect(() => {
            if (a !== "system") {
                H(a);
                return;
            }
            a === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? H("dark") : H("light")),
                typeof window < "u" &&
                    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({ matches: I }) => {
                        H(I ? "dark" : "light");
                    });
        }, [a]),
        A.useEffect(() => {
            C.length <= 1 && L(!1);
        }, [C]),
        A.useEffect(() => {
            let I = (B) => {
                var K, J;
                r.every((Ne) => B[Ne] || B.code === Ne) && (L(!0), (K = U.current) == null || K.focus()),
                    B.code === "Escape" && (document.activeElement === U.current || ((J = U.current) != null && J.contains(document.activeElement))) && L(!1);
            };
            return document.addEventListener("keydown", I), () => document.removeEventListener("keydown", I);
        }, [r]),
        A.useEffect(() => {
            if (U.current)
                return () => {
                    N.current && (N.current.focus({ preventScroll: !0 }), (N.current = null), (M.current = !1));
                };
        }, [U.current]),
        C.length
            ? A.createElement(
                  "section",
                  { "aria-label": `${h} ${W}`, tabIndex: -1 },
                  k.map((I, B) => {
                      var K;
                      let [J, Ne] = I.split("-");
                      return A.createElement(
                          "ol",
                          {
                              key: I,
                              dir: v === "auto" ? Zd() : v,
                              tabIndex: -1,
                              ref: U,
                              className: s,
                              "data-sonner-toaster": !0,
                              "data-theme": _,
                              "data-y-position": J,
                              "data-x-position": Ne,
                              style: {
                                  "--front-toast-height": `${((K = P[0]) == null ? void 0 : K.height) || 0}px`,
                                  "--offset": typeof l == "number" ? `${l}px` : l || Ax,
                                  "--width": `${Lx}px`,
                                  "--gap": `${m}px`,
                                  ...d
                              },
                              onBlur: (X) => {
                                  M.current && !X.currentTarget.contains(X.relatedTarget) && ((M.current = !1), N.current && (N.current.focus({ preventScroll: !0 }), (N.current = null)));
                              },
                              onFocus: (X) => {
                                  (X.target instanceof HTMLElement && X.target.dataset.dismissible === "false") || M.current || ((M.current = !0), (N.current = X.relatedTarget));
                              },
                              onMouseEnter: () => L(!0),
                              onMouseMove: () => L(!0),
                              onMouseLeave: () => {
                                  D || L(!1);
                              },
                              onPointerDown: (X) => {
                                  (X.target instanceof HTMLElement && X.target.dataset.dismissible === "false") || V(!0);
                              },
                              onPointerUp: () => V(!1)
                          },
                          C.filter((X) => (!X.position && B === 0) || X.position === I).map((X, ue) => {
                              var pe, Oe;
                              return A.createElement($x, {
                                  key: X.id,
                                  icons: p,
                                  index: ue,
                                  toast: X,
                                  defaultRichColors: u,
                                  duration: (pe = x == null ? void 0 : x.duration) != null ? pe : f,
                                  className: x == null ? void 0 : x.className,
                                  descriptionClassName: x == null ? void 0 : x.descriptionClassName,
                                  invert: t,
                                  visibleToasts: c,
                                  closeButton: (Oe = x == null ? void 0 : x.closeButton) != null ? Oe : i,
                                  interacting: D,
                                  position: I,
                                  style: x == null ? void 0 : x.style,
                                  unstyled: x == null ? void 0 : x.unstyled,
                                  classNames: x == null ? void 0 : x.classNames,
                                  cancelButtonStyle: x == null ? void 0 : x.cancelButtonStyle,
                                  actionButtonStyle: x == null ? void 0 : x.actionButtonStyle,
                                  removeToast: F,
                                  toasts: C.filter((Ee) => Ee.position == X.position),
                                  heights: P.filter((Ee) => Ee.position == X.position),
                                  setHeights: j,
                                  expandByDefault: o,
                                  gap: m,
                                  loadingIcon: w,
                                  expanded: O,
                                  pauseWhenPageIsHidden: y,
                                  cn: E
                              });
                          })
                      );
                  })
              )
            : null
    );
};
const Ux = ({ ...e }) => {
        const { theme: t = "system" } = vx();
        return g.jsx(Bx, {
            theme: t,
            className: "toaster group",
            toastOptions: {
                classNames: {
                    toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                    description: "group-[.toast]:text-muted-foreground",
                    actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                    cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
                }
            },
            ...e
        });
    },
    Vx = ["top", "right", "bottom", "left"],
    Bn = Math.min,
    ct = Math.max,
    Is = Math.round,
    Yi = Math.floor,
    Un = (e) => ({ x: e, y: e }),
    Hx = { left: "right", right: "left", bottom: "top", top: "bottom" },
    Wx = { start: "end", end: "start" };
function ru(e, t, n) {
    return ct(e, Bn(t, n));
}
function dn(e, t) {
    return typeof e == "function" ? e(t) : e;
}
function fn(e) {
    return e.split("-")[0];
}
function uo(e) {
    return e.split("-")[1];
}
function vc(e) {
    return e === "x" ? "y" : "x";
}
function yc(e) {
    return e === "y" ? "height" : "width";
}
function Vn(e) {
    return ["top", "bottom"].includes(fn(e)) ? "y" : "x";
}
function xc(e) {
    return vc(Vn(e));
}
function Qx(e, t, n) {
    n === void 0 && (n = !1);
    const r = uo(e),
        o = xc(e),
        i = yc(o);
    let s = o === "x" ? (r === (n ? "end" : "start") ? "right" : "left") : r === "start" ? "bottom" : "top";
    return t.reference[i] > t.floating[i] && (s = Ds(s)), [s, Ds(s)];
}
function Kx(e) {
    const t = Ds(e);
    return [ou(e), t, ou(t)];
}
function ou(e) {
    return e.replace(/start|end/g, (t) => Wx[t]);
}
function Gx(e, t, n) {
    const r = ["left", "right"],
        o = ["right", "left"],
        i = ["top", "bottom"],
        s = ["bottom", "top"];
    switch (e) {
        case "top":
        case "bottom":
            return n ? (t ? o : r) : t ? r : o;
        case "left":
        case "right":
            return t ? i : s;
        default:
            return [];
    }
}
function Yx(e, t, n, r) {
    const o = uo(e);
    let i = Gx(fn(e), n === "start", r);
    return o && ((i = i.map((s) => s + "-" + o)), t && (i = i.concat(i.map(ou)))), i;
}
function Ds(e) {
    return e.replace(/left|right|bottom|top/g, (t) => Hx[t]);
}
function qx(e) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Fm(e) {
    return typeof e != "number" ? qx(e) : { top: e, right: e, bottom: e, left: e };
}
function zs(e) {
    const { x: t, y: n, width: r, height: o } = e;
    return { width: r, height: o, top: n, left: t, right: t + r, bottom: n + o, x: t, y: n };
}
function Jd(e, t, n) {
    let { reference: r, floating: o } = e;
    const i = Vn(t),
        s = xc(t),
        l = yc(s),
        a = fn(t),
        u = i === "y",
        f = r.x + r.width / 2 - o.width / 2,
        d = r.y + r.height / 2 - o.height / 2,
        c = r[l] / 2 - o[l] / 2;
    let x;
    switch (a) {
        case "top":
            x = { x: f, y: r.y - o.height };
            break;
        case "bottom":
            x = { x: f, y: r.y + r.height };
            break;
        case "right":
            x = { x: r.x + r.width, y: d };
            break;
        case "left":
            x = { x: r.x - o.width, y: d };
            break;
        default:
            x = { x: r.x, y: r.y };
    }
    switch (uo(t)) {
        case "start":
            x[s] -= c * (n && u ? -1 : 1);
            break;
        case "end":
            x[s] += c * (n && u ? -1 : 1);
            break;
    }
    return x;
}
const Xx = async (e, t, n) => {
    const { placement: r = "bottom", strategy: o = "absolute", middleware: i = [], platform: s } = n,
        l = i.filter(Boolean),
        a = await (s.isRTL == null ? void 0 : s.isRTL(t));
    let u = await s.getElementRects({ reference: e, floating: t, strategy: o }),
        { x: f, y: d } = Jd(u, r, a),
        c = r,
        x = {},
        v = 0;
    for (let m = 0; m < l.length; m++) {
        const { name: w, fn: p } = l[m],
            { x: h, y, data: E, reset: C } = await p({ x: f, y: d, initialPlacement: r, placement: c, strategy: o, middlewareData: x, rects: u, platform: s, elements: { reference: e, floating: t } });
        (f = h ?? f),
            (d = y ?? d),
            (x = { ...x, [w]: { ...x[w], ...E } }),
            C &&
                v <= 50 &&
                (v++,
                typeof C == "object" &&
                    (C.placement && (c = C.placement), C.rects && (u = C.rects === !0 ? await s.getElementRects({ reference: e, floating: t, strategy: o }) : C.rects), ({ x: f, y: d } = Jd(u, c, a))),
                (m = -1));
    }
    return { x: f, y: d, placement: c, strategy: o, middlewareData: x };
};
async function ai(e, t) {
    var n;
    t === void 0 && (t = {});
    const { x: r, y: o, platform: i, rects: s, elements: l, strategy: a } = e,
        { boundary: u = "clippingAncestors", rootBoundary: f = "viewport", elementContext: d = "floating", altBoundary: c = !1, padding: x = 0 } = dn(t, e),
        v = Fm(x),
        w = l[c ? (d === "floating" ? "reference" : "floating") : d],
        p = zs(
            await i.getClippingRect({
                element:
                    (n = await (i.isElement == null ? void 0 : i.isElement(w))) == null || n
                        ? w
                        : w.contextElement || (await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(l.floating))),
                boundary: u,
                rootBoundary: f,
                strategy: a
            })
        ),
        h = d === "floating" ? { x: r, y: o, width: s.floating.width, height: s.floating.height } : s.reference,
        y = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l.floating)),
        E = (await (i.isElement == null ? void 0 : i.isElement(y))) ? (await (i.getScale == null ? void 0 : i.getScale(y))) || { x: 1, y: 1 } : { x: 1, y: 1 },
        C = zs(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({ elements: l, rect: h, offsetParent: y, strategy: a }) : h);
    return { top: (p.top - C.top + v.top) / E.y, bottom: (C.bottom - p.bottom + v.bottom) / E.y, left: (p.left - C.left + v.left) / E.x, right: (C.right - p.right + v.right) / E.x };
}
const Zx = (e) => ({
        name: "arrow",
        options: e,
        async fn(t) {
            const { x: n, y: r, placement: o, rects: i, platform: s, elements: l, middlewareData: a } = t,
                { element: u, padding: f = 0 } = dn(e, t) || {};
            if (u == null) return {};
            const d = Fm(f),
                c = { x: n, y: r },
                x = xc(o),
                v = yc(x),
                m = await s.getDimensions(u),
                w = x === "y",
                p = w ? "top" : "left",
                h = w ? "bottom" : "right",
                y = w ? "clientHeight" : "clientWidth",
                E = i.reference[v] + i.reference[x] - c[x] - i.floating[v],
                C = c[x] - i.reference[x],
                b = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
            let k = b ? b[y] : 0;
            (!k || !(await (s.isElement == null ? void 0 : s.isElement(b)))) && (k = l.floating[y] || i.floating[v]);
            const P = E / 2 - C / 2,
                j = k / 2 - m[v] / 2 - 1,
                O = Bn(d[p], j),
                L = Bn(d[h], j),
                D = O,
                V = k - m[v] - L,
                _ = k / 2 - m[v] / 2 + P,
                H = ru(D, _, V),
                U = !a.arrow && uo(o) != null && _ !== H && i.reference[v] / 2 - (_ < D ? O : L) - m[v] / 2 < 0,
                W = U ? (_ < D ? _ - D : _ - V) : 0;
            return { [x]: c[x] + W, data: { [x]: H, centerOffset: _ - H - W, ...(U && { alignmentOffset: W }) }, reset: U };
        }
    }),
    Jx = function (e) {
        return (
            e === void 0 && (e = {}),
            {
                name: "flip",
                options: e,
                async fn(t) {
                    var n, r;
                    const { placement: o, middlewareData: i, rects: s, initialPlacement: l, platform: a, elements: u } = t,
                        { mainAxis: f = !0, crossAxis: d = !0, fallbackPlacements: c, fallbackStrategy: x = "bestFit", fallbackAxisSideDirection: v = "none", flipAlignment: m = !0, ...w } = dn(e, t);
                    if ((n = i.arrow) != null && n.alignmentOffset) return {};
                    const p = fn(o),
                        h = Vn(l),
                        y = fn(l) === l,
                        E = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)),
                        C = c || (y || !m ? [Ds(l)] : Kx(l)),
                        b = v !== "none";
                    !c && b && C.push(...Yx(l, m, v, E));
                    const k = [l, ...C],
                        P = await ai(t, w),
                        j = [];
                    let O = ((r = i.flip) == null ? void 0 : r.overflows) || [];
                    if ((f && j.push(P[p]), d)) {
                        const _ = Qx(o, s, E);
                        j.push(P[_[0]], P[_[1]]);
                    }
                    if (((O = [...O, { placement: o, overflows: j }]), !j.every((_) => _ <= 0))) {
                        var L, D;
                        const _ = (((L = i.flip) == null ? void 0 : L.index) || 0) + 1,
                            H = k[_];
                        if (H) return { data: { index: _, overflows: O }, reset: { placement: H } };
                        let U = (D = O.filter((W) => W.overflows[0] <= 0).sort((W, N) => W.overflows[1] - N.overflows[1])[0]) == null ? void 0 : D.placement;
                        if (!U)
                            switch (x) {
                                case "bestFit": {
                                    var V;
                                    const W =
                                        (V = O.filter((N) => {
                                            if (b) {
                                                const M = Vn(N.placement);
                                                return M === h || M === "y";
                                            }
                                            return !0;
                                        })
                                            .map((N) => [N.placement, N.overflows.filter((M) => M > 0).reduce((M, F) => M + F, 0)])
                                            .sort((N, M) => N[1] - M[1])[0]) == null
                                            ? void 0
                                            : V[0];
                                    W && (U = W);
                                    break;
                                }
                                case "initialPlacement":
                                    U = l;
                                    break;
                            }
                        if (o !== U) return { reset: { placement: U } };
                    }
                    return {};
                }
            }
        );
    };
function ef(e, t) {
    return { top: e.top - t.height, right: e.right - t.width, bottom: e.bottom - t.height, left: e.left - t.width };
}
function tf(e) {
    return Vx.some((t) => e[t] >= 0);
}
const ew = function (e) {
    return (
        e === void 0 && (e = {}),
        {
            name: "hide",
            options: e,
            async fn(t) {
                const { rects: n } = t,
                    { strategy: r = "referenceHidden", ...o } = dn(e, t);
                switch (r) {
                    case "referenceHidden": {
                        const i = await ai(t, { ...o, elementContext: "reference" }),
                            s = ef(i, n.reference);
                        return { data: { referenceHiddenOffsets: s, referenceHidden: tf(s) } };
                    }
                    case "escaped": {
                        const i = await ai(t, { ...o, altBoundary: !0 }),
                            s = ef(i, n.floating);
                        return { data: { escapedOffsets: s, escaped: tf(s) } };
                    }
                    default:
                        return {};
                }
            }
        }
    );
};
async function tw(e, t) {
    const { placement: n, platform: r, elements: o } = e,
        i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
        s = fn(n),
        l = uo(n),
        a = Vn(n) === "y",
        u = ["left", "top"].includes(s) ? -1 : 1,
        f = i && a ? -1 : 1,
        d = dn(t, e);
    let {
        mainAxis: c,
        crossAxis: x,
        alignmentAxis: v
    } = typeof d == "number" ? { mainAxis: d, crossAxis: 0, alignmentAxis: null } : { mainAxis: d.mainAxis || 0, crossAxis: d.crossAxis || 0, alignmentAxis: d.alignmentAxis };
    return l && typeof v == "number" && (x = l === "end" ? v * -1 : v), a ? { x: x * f, y: c * u } : { x: c * u, y: x * f };
}
const nw = function (e) {
        return (
            e === void 0 && (e = 0),
            {
                name: "offset",
                options: e,
                async fn(t) {
                    var n, r;
                    const { x: o, y: i, placement: s, middlewareData: l } = t,
                        a = await tw(t, e);
                    return s === ((n = l.offset) == null ? void 0 : n.placement) && (r = l.arrow) != null && r.alignmentOffset ? {} : { x: o + a.x, y: i + a.y, data: { ...a, placement: s } };
                }
            }
        );
    },
    rw = function (e) {
        return (
            e === void 0 && (e = {}),
            {
                name: "shift",
                options: e,
                async fn(t) {
                    const { x: n, y: r, placement: o } = t,
                        {
                            mainAxis: i = !0,
                            crossAxis: s = !1,
                            limiter: l = {
                                fn: (w) => {
                                    let { x: p, y: h } = w;
                                    return { x: p, y: h };
                                }
                            },
                            ...a
                        } = dn(e, t),
                        u = { x: n, y: r },
                        f = await ai(t, a),
                        d = Vn(fn(o)),
                        c = vc(d);
                    let x = u[c],
                        v = u[d];
                    if (i) {
                        const w = c === "y" ? "top" : "left",
                            p = c === "y" ? "bottom" : "right",
                            h = x + f[w],
                            y = x - f[p];
                        x = ru(h, x, y);
                    }
                    if (s) {
                        const w = d === "y" ? "top" : "left",
                            p = d === "y" ? "bottom" : "right",
                            h = v + f[w],
                            y = v - f[p];
                        v = ru(h, v, y);
                    }
                    const m = l.fn({ ...t, [c]: x, [d]: v });
                    return { ...m, data: { x: m.x - n, y: m.y - r, enabled: { [c]: i, [d]: s } } };
                }
            }
        );
    },
    ow = function (e) {
        return (
            e === void 0 && (e = {}),
            {
                options: e,
                fn(t) {
                    const { x: n, y: r, placement: o, rects: i, middlewareData: s } = t,
                        { offset: l = 0, mainAxis: a = !0, crossAxis: u = !0 } = dn(e, t),
                        f = { x: n, y: r },
                        d = Vn(o),
                        c = vc(d);
                    let x = f[c],
                        v = f[d];
                    const m = dn(l, t),
                        w = typeof m == "number" ? { mainAxis: m, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...m };
                    if (a) {
                        const y = c === "y" ? "height" : "width",
                            E = i.reference[c] - i.floating[y] + w.mainAxis,
                            C = i.reference[c] + i.reference[y] - w.mainAxis;
                        x < E ? (x = E) : x > C && (x = C);
                    }
                    if (u) {
                        var p, h;
                        const y = c === "y" ? "width" : "height",
                            E = ["top", "left"].includes(fn(o)),
                            C = i.reference[d] - i.floating[y] + ((E && ((p = s.offset) == null ? void 0 : p[d])) || 0) + (E ? 0 : w.crossAxis),
                            b = i.reference[d] + i.reference[y] + (E ? 0 : ((h = s.offset) == null ? void 0 : h[d]) || 0) - (E ? w.crossAxis : 0);
                        v < C ? (v = C) : v > b && (v = b);
                    }
                    return { [c]: x, [d]: v };
                }
            }
        );
    },
    iw = function (e) {
        return (
            e === void 0 && (e = {}),
            {
                name: "size",
                options: e,
                async fn(t) {
                    var n, r;
                    const { placement: o, rects: i, platform: s, elements: l } = t,
                        { apply: a = () => {}, ...u } = dn(e, t),
                        f = await ai(t, u),
                        d = fn(o),
                        c = uo(o),
                        x = Vn(o) === "y",
                        { width: v, height: m } = i.floating;
                    let w, p;
                    d === "top" || d === "bottom"
                        ? ((w = d), (p = c === ((await (s.isRTL == null ? void 0 : s.isRTL(l.floating))) ? "start" : "end") ? "left" : "right"))
                        : ((p = d), (w = c === "end" ? "top" : "bottom"));
                    const h = m - f.top - f.bottom,
                        y = v - f.left - f.right,
                        E = Bn(m - f[w], h),
                        C = Bn(v - f[p], y),
                        b = !t.middlewareData.shift;
                    let k = E,
                        P = C;
                    if (((n = t.middlewareData.shift) != null && n.enabled.x && (P = y), (r = t.middlewareData.shift) != null && r.enabled.y && (k = h), b && !c)) {
                        const O = ct(f.left, 0),
                            L = ct(f.right, 0),
                            D = ct(f.top, 0),
                            V = ct(f.bottom, 0);
                        x ? (P = v - 2 * (O !== 0 || L !== 0 ? O + L : ct(f.left, f.right))) : (k = m - 2 * (D !== 0 || V !== 0 ? D + V : ct(f.top, f.bottom)));
                    }
                    await a({ ...t, availableWidth: P, availableHeight: k });
                    const j = await s.getDimensions(l.floating);
                    return v !== j.width || m !== j.height ? { reset: { rects: !0 } } : {};
                }
            }
        );
    };
function ul() {
    return typeof window < "u";
}
function co(e) {
    return $m(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function pt(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Xt(e) {
    var t;
    return (t = ($m(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function $m(e) {
    return ul() ? e instanceof Node || e instanceof pt(e).Node : !1;
}
function Dt(e) {
    return ul() ? e instanceof Element || e instanceof pt(e).Element : !1;
}
function qt(e) {
    return ul() ? e instanceof HTMLElement || e instanceof pt(e).HTMLElement : !1;
}
function nf(e) {
    return !ul() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof pt(e).ShadowRoot;
}
function Ci(e) {
    const { overflow: t, overflowX: n, overflowY: r, display: o } = zt(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function sw(e) {
    return ["table", "td", "th"].includes(co(e));
}
function cl(e) {
    return [":popover-open", ":modal"].some((t) => {
        try {
            return e.matches(t);
        } catch {
            return !1;
        }
    });
}
function wc(e) {
    const t = Sc(),
        n = Dt(e) ? zt(e) : e;
    return (
        n.transform !== "none" ||
        n.perspective !== "none" ||
        (n.containerType ? n.containerType !== "normal" : !1) ||
        (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
        (!t && (n.filter ? n.filter !== "none" : !1)) ||
        ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) ||
        ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r))
    );
}
function lw(e) {
    let t = Hn(e);
    for (; qt(t) && !ro(t); ) {
        if (wc(t)) return t;
        if (cl(t)) return null;
        t = Hn(t);
    }
    return null;
}
function Sc() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function ro(e) {
    return ["html", "body", "#document"].includes(co(e));
}
function zt(e) {
    return pt(e).getComputedStyle(e);
}
function dl(e) {
    return Dt(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function Hn(e) {
    if (co(e) === "html") return e;
    const t = e.assignedSlot || e.parentNode || (nf(e) && e.host) || Xt(e);
    return nf(t) ? t.host : t;
}
function Bm(e) {
    const t = Hn(e);
    return ro(t) ? (e.ownerDocument ? e.ownerDocument.body : e.body) : qt(t) && Ci(t) ? t : Bm(t);
}
function ui(e, t, n) {
    var r;
    t === void 0 && (t = []), n === void 0 && (n = !0);
    const o = Bm(e),
        i = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
        s = pt(o);
    if (i) {
        const l = iu(s);
        return t.concat(s, s.visualViewport || [], Ci(o) ? o : [], l && n ? ui(l) : []);
    }
    return t.concat(o, ui(o, [], n));
}
function iu(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Um(e) {
    const t = zt(e);
    let n = parseFloat(t.width) || 0,
        r = parseFloat(t.height) || 0;
    const o = qt(e),
        i = o ? e.offsetWidth : n,
        s = o ? e.offsetHeight : r,
        l = Is(n) !== i || Is(r) !== s;
    return l && ((n = i), (r = s)), { width: n, height: r, $: l };
}
function Ec(e) {
    return Dt(e) ? e : e.contextElement;
}
function Fr(e) {
    const t = Ec(e);
    if (!qt(t)) return Un(1);
    const n = t.getBoundingClientRect(),
        { width: r, height: o, $: i } = Um(t);
    let s = (i ? Is(n.width) : n.width) / r,
        l = (i ? Is(n.height) : n.height) / o;
    return (!s || !Number.isFinite(s)) && (s = 1), (!l || !Number.isFinite(l)) && (l = 1), { x: s, y: l };
}
const aw = Un(0);
function Vm(e) {
    const t = pt(e);
    return !Sc() || !t.visualViewport ? aw : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function uw(e, t, n) {
    return t === void 0 && (t = !1), !n || (t && n !== pt(e)) ? !1 : t;
}
function pr(e, t, n, r) {
    t === void 0 && (t = !1), n === void 0 && (n = !1);
    const o = e.getBoundingClientRect(),
        i = Ec(e);
    let s = Un(1);
    t && (r ? Dt(r) && (s = Fr(r)) : (s = Fr(e)));
    const l = uw(i, n, r) ? Vm(i) : Un(0);
    let a = (o.left + l.x) / s.x,
        u = (o.top + l.y) / s.y,
        f = o.width / s.x,
        d = o.height / s.y;
    if (i) {
        const c = pt(i),
            x = r && Dt(r) ? pt(r) : r;
        let v = c,
            m = iu(v);
        for (; m && r && x !== v; ) {
            const w = Fr(m),
                p = m.getBoundingClientRect(),
                h = zt(m),
                y = p.left + (m.clientLeft + parseFloat(h.paddingLeft)) * w.x,
                E = p.top + (m.clientTop + parseFloat(h.paddingTop)) * w.y;
            (a *= w.x), (u *= w.y), (f *= w.x), (d *= w.y), (a += y), (u += E), (v = pt(m)), (m = iu(v));
        }
    }
    return zs({ width: f, height: d, x: a, y: u });
}
function cw(e) {
    let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
    const i = o === "fixed",
        s = Xt(r),
        l = t ? cl(t.floating) : !1;
    if (r === s || (l && i)) return n;
    let a = { scrollLeft: 0, scrollTop: 0 },
        u = Un(1);
    const f = Un(0),
        d = qt(r);
    if ((d || (!d && !i)) && ((co(r) !== "body" || Ci(s)) && (a = dl(r)), qt(r))) {
        const c = pr(r);
        (u = Fr(r)), (f.x = c.x + r.clientLeft), (f.y = c.y + r.clientTop);
    }
    return { width: n.width * u.x, height: n.height * u.y, x: n.x * u.x - a.scrollLeft * u.x + f.x, y: n.y * u.y - a.scrollTop * u.y + f.y };
}
function dw(e) {
    return Array.from(e.getClientRects());
}
function su(e, t) {
    const n = dl(e).scrollLeft;
    return t ? t.left + n : pr(Xt(e)).left + n;
}
function fw(e) {
    const t = Xt(e),
        n = dl(e),
        r = e.ownerDocument.body,
        o = ct(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
        i = ct(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let s = -n.scrollLeft + su(e);
    const l = -n.scrollTop;
    return zt(r).direction === "rtl" && (s += ct(t.clientWidth, r.clientWidth) - o), { width: o, height: i, x: s, y: l };
}
function pw(e, t) {
    const n = pt(e),
        r = Xt(e),
        o = n.visualViewport;
    let i = r.clientWidth,
        s = r.clientHeight,
        l = 0,
        a = 0;
    if (o) {
        (i = o.width), (s = o.height);
        const u = Sc();
        (!u || (u && t === "fixed")) && ((l = o.offsetLeft), (a = o.offsetTop));
    }
    return { width: i, height: s, x: l, y: a };
}
function hw(e, t) {
    const n = pr(e, !0, t === "fixed"),
        r = n.top + e.clientTop,
        o = n.left + e.clientLeft,
        i = qt(e) ? Fr(e) : Un(1),
        s = e.clientWidth * i.x,
        l = e.clientHeight * i.y,
        a = o * i.x,
        u = r * i.y;
    return { width: s, height: l, x: a, y: u };
}
function rf(e, t, n) {
    let r;
    if (t === "viewport") r = pw(e, n);
    else if (t === "document") r = fw(Xt(e));
    else if (Dt(t)) r = hw(t, n);
    else {
        const o = Vm(e);
        r = { ...t, x: t.x - o.x, y: t.y - o.y };
    }
    return zs(r);
}
function Hm(e, t) {
    const n = Hn(e);
    return n === t || !Dt(n) || ro(n) ? !1 : zt(n).position === "fixed" || Hm(n, t);
}
function mw(e, t) {
    const n = t.get(e);
    if (n) return n;
    let r = ui(e, [], !1).filter((l) => Dt(l) && co(l) !== "body"),
        o = null;
    const i = zt(e).position === "fixed";
    let s = i ? Hn(e) : e;
    for (; Dt(s) && !ro(s); ) {
        const l = zt(s),
            a = wc(s);
        !a && l.position === "fixed" && (o = null),
            (i ? !a && !o : (!a && l.position === "static" && !!o && ["absolute", "fixed"].includes(o.position)) || (Ci(s) && !a && Hm(e, s))) ? (r = r.filter((f) => f !== s)) : (o = l),
            (s = Hn(s));
    }
    return t.set(e, r), r;
}
function gw(e) {
    let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
    const s = [...(n === "clippingAncestors" ? (cl(t) ? [] : mw(t, this._c)) : [].concat(n)), r],
        l = s[0],
        a = s.reduce((u, f) => {
            const d = rf(t, f, o);
            return (u.top = ct(d.top, u.top)), (u.right = Bn(d.right, u.right)), (u.bottom = Bn(d.bottom, u.bottom)), (u.left = ct(d.left, u.left)), u;
        }, rf(t, l, o));
    return { width: a.right - a.left, height: a.bottom - a.top, x: a.left, y: a.top };
}
function vw(e) {
    const { width: t, height: n } = Um(e);
    return { width: t, height: n };
}
function yw(e, t, n) {
    const r = qt(t),
        o = Xt(t),
        i = n === "fixed",
        s = pr(e, !0, i, t);
    let l = { scrollLeft: 0, scrollTop: 0 };
    const a = Un(0);
    if (r || (!r && !i))
        if (((co(t) !== "body" || Ci(o)) && (l = dl(t)), r)) {
            const x = pr(t, !0, i, t);
            (a.x = x.x + t.clientLeft), (a.y = x.y + t.clientTop);
        } else o && (a.x = su(o));
    let u = 0,
        f = 0;
    if (o && !r && !i) {
        const x = o.getBoundingClientRect();
        (f = x.top + l.scrollTop), (u = x.left + l.scrollLeft - su(o, x));
    }
    const d = s.left + l.scrollLeft - a.x - u,
        c = s.top + l.scrollTop - a.y - f;
    return { x: d, y: c, width: s.width, height: s.height };
}
function ea(e) {
    return zt(e).position === "static";
}
function of(e, t) {
    if (!qt(e) || zt(e).position === "fixed") return null;
    if (t) return t(e);
    let n = e.offsetParent;
    return Xt(e) === n && (n = n.ownerDocument.body), n;
}
function Wm(e, t) {
    const n = pt(e);
    if (cl(e)) return n;
    if (!qt(e)) {
        let o = Hn(e);
        for (; o && !ro(o); ) {
            if (Dt(o) && !ea(o)) return o;
            o = Hn(o);
        }
        return n;
    }
    let r = of(e, t);
    for (; r && sw(r) && ea(r); ) r = of(r, t);
    return r && ro(r) && ea(r) && !wc(r) ? n : r || lw(e) || n;
}
const xw = async function (e) {
    const t = this.getOffsetParent || Wm,
        n = this.getDimensions,
        r = await n(e.floating);
    return { reference: yw(e.reference, await t(e.floating), e.strategy), floating: { x: 0, y: 0, width: r.width, height: r.height } };
};
function ww(e) {
    return zt(e).direction === "rtl";
}
const Sw = {
    convertOffsetParentRelativeRectToViewportRelativeRect: cw,
    getDocumentElement: Xt,
    getClippingRect: gw,
    getOffsetParent: Wm,
    getElementRects: xw,
    getClientRects: dw,
    getDimensions: vw,
    getScale: Fr,
    isElement: Dt,
    isRTL: ww
};
function Ew(e, t) {
    let n = null,
        r;
    const o = Xt(e);
    function i() {
        var l;
        clearTimeout(r), (l = n) == null || l.disconnect(), (n = null);
    }
    function s(l, a) {
        l === void 0 && (l = !1), a === void 0 && (a = 1), i();
        const { left: u, top: f, width: d, height: c } = e.getBoundingClientRect();
        if ((l || t(), !d || !c)) return;
        const x = Yi(f),
            v = Yi(o.clientWidth - (u + d)),
            m = Yi(o.clientHeight - (f + c)),
            w = Yi(u),
            h = { rootMargin: -x + "px " + -v + "px " + -m + "px " + -w + "px", threshold: ct(0, Bn(1, a)) || 1 };
        let y = !0;
        function E(C) {
            const b = C[0].intersectionRatio;
            if (b !== a) {
                if (!y) return s();
                b
                    ? s(!1, b)
                    : (r = setTimeout(() => {
                          s(!1, 1e-7);
                      }, 1e3));
            }
            y = !1;
        }
        try {
            n = new IntersectionObserver(E, { ...h, root: o.ownerDocument });
        } catch {
            n = new IntersectionObserver(E, h);
        }
        n.observe(e);
    }
    return s(!0), i;
}
function Cw(e, t, n, r) {
    r === void 0 && (r = {});
    const {
            ancestorScroll: o = !0,
            ancestorResize: i = !0,
            elementResize: s = typeof ResizeObserver == "function",
            layoutShift: l = typeof IntersectionObserver == "function",
            animationFrame: a = !1
        } = r,
        u = Ec(e),
        f = o || i ? [...(u ? ui(u) : []), ...ui(t)] : [];
    f.forEach((p) => {
        o && p.addEventListener("scroll", n, { passive: !0 }), i && p.addEventListener("resize", n);
    });
    const d = u && l ? Ew(u, n) : null;
    let c = -1,
        x = null;
    s &&
        ((x = new ResizeObserver((p) => {
            let [h] = p;
            h &&
                h.target === u &&
                x &&
                (x.unobserve(t),
                cancelAnimationFrame(c),
                (c = requestAnimationFrame(() => {
                    var y;
                    (y = x) == null || y.observe(t);
                }))),
                n();
        })),
        u && !a && x.observe(u),
        x.observe(t));
    let v,
        m = a ? pr(e) : null;
    a && w();
    function w() {
        const p = pr(e);
        m && (p.x !== m.x || p.y !== m.y || p.width !== m.width || p.height !== m.height) && n(), (m = p), (v = requestAnimationFrame(w));
    }
    return (
        n(),
        () => {
            var p;
            f.forEach((h) => {
                o && h.removeEventListener("scroll", n), i && h.removeEventListener("resize", n);
            }),
                d == null || d(),
                (p = x) == null || p.disconnect(),
                (x = null),
                a && cancelAnimationFrame(v);
        }
    );
}
const kw = nw,
    bw = rw,
    Nw = Jx,
    Pw = iw,
    Tw = ew,
    sf = Zx,
    jw = ow,
    Rw = (e, t, n) => {
        const r = new Map(),
            o = { platform: Sw, ...n },
            i = { ...o.platform, _c: r };
        return Xx(e, t, { ...o, platform: i });
    };
var ds = typeof document < "u" ? S.useLayoutEffect : S.useEffect;
function Fs(e, t) {
    if (e === t) return !0;
    if (typeof e != typeof t) return !1;
    if (typeof e == "function" && e.toString() === t.toString()) return !0;
    let n, r, o;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (((n = e.length), n !== t.length)) return !1;
            for (r = n; r-- !== 0; ) if (!Fs(e[r], t[r])) return !1;
            return !0;
        }
        if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length)) return !1;
        for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
        for (r = n; r-- !== 0; ) {
            const i = o[r];
            if (!(i === "_owner" && e.$$typeof) && !Fs(e[i], t[i])) return !1;
        }
        return !0;
    }
    return e !== e && t !== t;
}
function Qm(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function lf(e, t) {
    const n = Qm(e);
    return Math.round(t * n) / n;
}
function ta(e) {
    const t = S.useRef(e);
    return (
        ds(() => {
            t.current = e;
        }),
        t
    );
}
function Ow(e) {
    e === void 0 && (e = {});
    const { placement: t = "bottom", strategy: n = "absolute", middleware: r = [], platform: o, elements: { reference: i, floating: s } = {}, transform: l = !0, whileElementsMounted: a, open: u } = e,
        [f, d] = S.useState({ x: 0, y: 0, strategy: n, placement: t, middlewareData: {}, isPositioned: !1 }),
        [c, x] = S.useState(r);
    Fs(c, r) || x(r);
    const [v, m] = S.useState(null),
        [w, p] = S.useState(null),
        h = S.useCallback((N) => {
            N !== b.current && ((b.current = N), m(N));
        }, []),
        y = S.useCallback((N) => {
            N !== k.current && ((k.current = N), p(N));
        }, []),
        E = i || v,
        C = s || w,
        b = S.useRef(null),
        k = S.useRef(null),
        P = S.useRef(f),
        j = a != null,
        O = ta(a),
        L = ta(o),
        D = ta(u),
        V = S.useCallback(() => {
            if (!b.current || !k.current) return;
            const N = { placement: t, strategy: n, middleware: c };
            L.current && (N.platform = L.current),
                Rw(b.current, k.current, N).then((M) => {
                    const F = { ...M, isPositioned: D.current !== !1 };
                    _.current &&
                        !Fs(P.current, F) &&
                        ((P.current = F),
                        Ei.flushSync(() => {
                            d(F);
                        }));
                });
        }, [c, t, n, L, D]);
    ds(() => {
        u === !1 && P.current.isPositioned && ((P.current.isPositioned = !1), d((N) => ({ ...N, isPositioned: !1 })));
    }, [u]);
    const _ = S.useRef(!1);
    ds(
        () => (
            (_.current = !0),
            () => {
                _.current = !1;
            }
        ),
        []
    ),
        ds(() => {
            if ((E && (b.current = E), C && (k.current = C), E && C)) {
                if (O.current) return O.current(E, C, V);
                V();
            }
        }, [E, C, V, O, j]);
    const H = S.useMemo(() => ({ reference: b, floating: k, setReference: h, setFloating: y }), [h, y]),
        U = S.useMemo(() => ({ reference: E, floating: C }), [E, C]),
        W = S.useMemo(() => {
            const N = { position: n, left: 0, top: 0 };
            if (!U.floating) return N;
            const M = lf(U.floating, f.x),
                F = lf(U.floating, f.y);
            return l ? { ...N, transform: "translate(" + M + "px, " + F + "px)", ...(Qm(U.floating) >= 1.5 && { willChange: "transform" }) } : { position: n, left: M, top: F };
        }, [n, l, U.floating, f.x, f.y]);
    return S.useMemo(() => ({ ...f, update: V, refs: H, elements: U, floatingStyles: W }), [f, V, H, U, W]);
}
const Mw = (e) => {
        function t(n) {
            return {}.hasOwnProperty.call(n, "current");
        }
        return {
            name: "arrow",
            options: e,
            fn(n) {
                const { element: r, padding: o } = typeof e == "function" ? e(n) : e;
                return r && t(r) ? (r.current != null ? sf({ element: r.current, padding: o }).fn(n) : {}) : r ? sf({ element: r, padding: o }).fn(n) : {};
            }
        };
    },
    Aw = (e, t) => ({ ...kw(e), options: [e, t] }),
    _w = (e, t) => ({ ...bw(e), options: [e, t] }),
    Lw = (e, t) => ({ ...jw(e), options: [e, t] }),
    Iw = (e, t) => ({ ...Nw(e), options: [e, t] }),
    Dw = (e, t) => ({ ...Pw(e), options: [e, t] }),
    zw = (e, t) => ({ ...Tw(e), options: [e, t] }),
    Fw = (e, t) => ({ ...Mw(e), options: [e, t] });
var $w = "Arrow",
    Km = S.forwardRef((e, t) => {
        const { children: n, width: r = 10, height: o = 5, ...i } = e;
        return g.jsx(nt.svg, { ...i, ref: t, width: r, height: o, viewBox: "0 0 30 10", preserveAspectRatio: "none", children: e.asChild ? n : g.jsx("polygon", { points: "0,0 30,0 15,10" }) });
    });
Km.displayName = $w;
var Bw = Km;
function Uw(e, t = []) {
    let n = [];
    function r(i, s) {
        const l = S.createContext(s),
            a = n.length;
        n = [...n, s];
        function u(d) {
            const { scope: c, children: x, ...v } = d,
                m = (c == null ? void 0 : c[e][a]) || l,
                w = S.useMemo(() => v, Object.values(v));
            return g.jsx(m.Provider, { value: w, children: x });
        }
        function f(d, c) {
            const x = (c == null ? void 0 : c[e][a]) || l,
                v = S.useContext(x);
            if (v) return v;
            if (s !== void 0) return s;
            throw new Error(`\`${d}\` must be used within \`${i}\``);
        }
        return (u.displayName = i + "Provider"), [u, f];
    }
    const o = () => {
        const i = n.map((s) => S.createContext(s));
        return function (l) {
            const a = (l == null ? void 0 : l[e]) || i;
            return S.useMemo(() => ({ [`__scope${e}`]: { ...l, [e]: a } }), [l, a]);
        };
    };
    return (o.scopeName = e), [r, Vw(o, ...t)];
}
function Vw(...e) {
    const t = e[0];
    if (e.length === 1) return t;
    const n = () => {
        const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
        return function (i) {
            const s = r.reduce((l, { useScope: a, scopeName: u }) => {
                const d = a(i)[`__scope${u}`];
                return { ...l, ...d };
            }, {});
            return S.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
        };
    };
    return (n.scopeName = t.scopeName), n;
}
function Hw(e) {
    const [t, n] = S.useState(void 0);
    return (
        fr(() => {
            if (e) {
                n({ width: e.offsetWidth, height: e.offsetHeight });
                const r = new ResizeObserver((o) => {
                    if (!Array.isArray(o) || !o.length) return;
                    const i = o[0];
                    let s, l;
                    if ("borderBoxSize" in i) {
                        const a = i.borderBoxSize,
                            u = Array.isArray(a) ? a[0] : a;
                        (s = u.inlineSize), (l = u.blockSize);
                    } else (s = e.offsetWidth), (l = e.offsetHeight);
                    n({ width: s, height: l });
                });
                return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
            } else n(void 0);
        }, [e]),
        t
    );
}
var Gm = "Popper",
    [Ym, qm] = Uw(Gm),
    [SE, Xm] = Ym(Gm),
    Zm = "PopperAnchor",
    Jm = S.forwardRef((e, t) => {
        const { __scopePopper: n, virtualRef: r, ...o } = e,
            i = Xm(Zm, n),
            s = S.useRef(null),
            l = It(t, s);
        return (
            S.useEffect(() => {
                i.onAnchorChange((r == null ? void 0 : r.current) || s.current);
            }),
            r ? null : g.jsx(nt.div, { ...o, ref: l })
        );
    });
Jm.displayName = Zm;
var Cc = "PopperContent",
    [Ww, Qw] = Ym(Cc),
    e0 = S.forwardRef((e, t) => {
        var ue, pe, Oe, Ee, oe, $;
        const {
                __scopePopper: n,
                side: r = "bottom",
                sideOffset: o = 0,
                align: i = "center",
                alignOffset: s = 0,
                arrowPadding: l = 0,
                avoidCollisions: a = !0,
                collisionBoundary: u = [],
                collisionPadding: f = 0,
                sticky: d = "partial",
                hideWhenDetached: c = !1,
                updatePositionStrategy: x = "optimized",
                onPlaced: v,
                ...m
            } = e,
            w = Xm(Cc, n),
            [p, h] = S.useState(null),
            y = It(t, (Z) => h(Z)),
            [E, C] = S.useState(null),
            b = Hw(E),
            k = (b == null ? void 0 : b.width) ?? 0,
            P = (b == null ? void 0 : b.height) ?? 0,
            j = r + (i !== "center" ? "-" + i : ""),
            O = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f },
            L = Array.isArray(u) ? u : [u],
            D = L.length > 0,
            V = { padding: O, boundary: L.filter(Gw), altBoundary: D },
            {
                refs: _,
                floatingStyles: H,
                placement: U,
                isPositioned: W,
                middlewareData: N
            } = Ow({
                strategy: "fixed",
                placement: j,
                whileElementsMounted: (...Z) => Cw(...Z, { animationFrame: x === "always" }),
                elements: { reference: w.anchor },
                middleware: [
                    Aw({ mainAxis: o + P, alignmentAxis: s }),
                    a && _w({ mainAxis: !0, crossAxis: !1, limiter: d === "partial" ? Lw() : void 0, ...V }),
                    a && Iw({ ...V }),
                    Dw({
                        ...V,
                        apply: ({ elements: Z, rects: se, availableWidth: ke, availableHeight: Pe }) => {
                            const { width: ot, height: vt } = se.reference,
                                le = Z.floating.style;
                            le.setProperty("--radix-popper-available-width", `${ke}px`),
                                le.setProperty("--radix-popper-available-height", `${Pe}px`),
                                le.setProperty("--radix-popper-anchor-width", `${ot}px`),
                                le.setProperty("--radix-popper-anchor-height", `${vt}px`);
                        }
                    }),
                    E && Fw({ element: E, padding: l }),
                    Yw({ arrowWidth: k, arrowHeight: P }),
                    c && zw({ strategy: "referenceHidden", ...V })
                ]
            }),
            [M, F] = r0(U),
            I = Yt(v);
        fr(() => {
            W && (I == null || I());
        }, [W, I]);
        const B = (ue = N.arrow) == null ? void 0 : ue.x,
            K = (pe = N.arrow) == null ? void 0 : pe.y,
            J = ((Oe = N.arrow) == null ? void 0 : Oe.centerOffset) !== 0,
            [Ne, X] = S.useState();
        return (
            fr(() => {
                p && X(window.getComputedStyle(p).zIndex);
            }, [p]),
            g.jsx("div", {
                ref: _.setFloating,
                "data-radix-popper-content-wrapper": "",
                style: {
                    ...H,
                    transform: W ? H.transform : "translate(0, -200%)",
                    minWidth: "max-content",
                    zIndex: Ne,
                    "--radix-popper-transform-origin": [(Ee = N.transformOrigin) == null ? void 0 : Ee.x, (oe = N.transformOrigin) == null ? void 0 : oe.y].join(" "),
                    ...((($ = N.hide) == null ? void 0 : $.referenceHidden) && { visibility: "hidden", pointerEvents: "none" })
                },
                dir: e.dir,
                children: g.jsx(Ww, {
                    scope: n,
                    placedSide: M,
                    onArrowChange: C,
                    arrowX: B,
                    arrowY: K,
                    shouldHideArrow: J,
                    children: g.jsx(nt.div, { "data-side": M, "data-align": F, ...m, ref: y, style: { ...m.style, animation: W ? void 0 : "none" } })
                })
            })
        );
    });
e0.displayName = Cc;
var t0 = "PopperArrow",
    Kw = { top: "bottom", right: "left", bottom: "top", left: "right" },
    n0 = S.forwardRef(function (t, n) {
        const { __scopePopper: r, ...o } = t,
            i = Qw(t0, r),
            s = Kw[i.placedSide];
        return g.jsx("span", {
            ref: i.onArrowChange,
            style: {
                position: "absolute",
                left: i.arrowX,
                top: i.arrowY,
                [s]: 0,
                transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[i.placedSide],
                transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[
                    i.placedSide
                ],
                visibility: i.shouldHideArrow ? "hidden" : void 0
            },
            children: g.jsx(Bw, { ...o, ref: n, style: { ...o.style, display: "block" } })
        });
    });
n0.displayName = t0;
function Gw(e) {
    return e !== null;
}
var Yw = (e) => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var w, p, h;
        const { placement: n, rects: r, middlewareData: o } = t,
            s = ((w = o.arrow) == null ? void 0 : w.centerOffset) !== 0,
            l = s ? 0 : e.arrowWidth,
            a = s ? 0 : e.arrowHeight,
            [u, f] = r0(n),
            d = { start: "0%", center: "50%", end: "100%" }[f],
            c = (((p = o.arrow) == null ? void 0 : p.x) ?? 0) + l / 2,
            x = (((h = o.arrow) == null ? void 0 : h.y) ?? 0) + a / 2;
        let v = "",
            m = "";
        return (
            u === "bottom"
                ? ((v = s ? d : `${c}px`), (m = `${-a}px`))
                : u === "top"
                ? ((v = s ? d : `${c}px`), (m = `${r.floating.height + a}px`))
                : u === "right"
                ? ((v = `${-a}px`), (m = s ? d : `${x}px`))
                : u === "left" && ((v = `${r.floating.width + a}px`), (m = s ? d : `${x}px`)),
            { data: { x: v, y: m } }
        );
    }
});
function r0(e) {
    const [t, n = "center"] = e.split("-");
    return [t, n];
}
var qw = Jm,
    Xw = e0,
    Zw = n0,
    [fl, EE] = Jh("Tooltip", [qm]),
    kc = qm(),
    o0 = "TooltipProvider",
    Jw = 700,
    af = "tooltip.open",
    [e2, i0] = fl(o0),
    s0 = (e) => {
        const { __scopeTooltip: t, delayDuration: n = Jw, skipDelayDuration: r = 300, disableHoverableContent: o = !1, children: i } = e,
            [s, l] = S.useState(!0),
            a = S.useRef(!1),
            u = S.useRef(0);
        return (
            S.useEffect(() => {
                const f = u.current;
                return () => window.clearTimeout(f);
            }, []),
            g.jsx(e2, {
                scope: t,
                isOpenDelayed: s,
                delayDuration: n,
                onOpen: S.useCallback(() => {
                    window.clearTimeout(u.current), l(!1);
                }, []),
                onClose: S.useCallback(() => {
                    window.clearTimeout(u.current), (u.current = window.setTimeout(() => l(!0), r));
                }, [r]),
                isPointerInTransitRef: a,
                onPointerInTransitChange: S.useCallback((f) => {
                    a.current = f;
                }, []),
                disableHoverableContent: o,
                children: i
            })
        );
    };
s0.displayName = o0;
var l0 = "Tooltip",
    [CE, pl] = fl(l0),
    lu = "TooltipTrigger",
    t2 = S.forwardRef((e, t) => {
        const { __scopeTooltip: n, ...r } = e,
            o = pl(lu, n),
            i = i0(lu, n),
            s = kc(n),
            l = S.useRef(null),
            a = It(t, l, o.onTriggerChange),
            u = S.useRef(!1),
            f = S.useRef(!1),
            d = S.useCallback(() => (u.current = !1), []);
        return (
            S.useEffect(() => () => document.removeEventListener("pointerup", d), [d]),
            g.jsx(qw, {
                asChild: !0,
                ...s,
                children: g.jsx(nt.button, {
                    "aria-describedby": o.open ? o.contentId : void 0,
                    "data-state": o.stateAttribute,
                    ...r,
                    ref: a,
                    onPointerMove: je(e.onPointerMove, (c) => {
                        c.pointerType !== "touch" && !f.current && !i.isPointerInTransitRef.current && (o.onTriggerEnter(), (f.current = !0));
                    }),
                    onPointerLeave: je(e.onPointerLeave, () => {
                        o.onTriggerLeave(), (f.current = !1);
                    }),
                    onPointerDown: je(e.onPointerDown, () => {
                        (u.current = !0), document.addEventListener("pointerup", d, { once: !0 });
                    }),
                    onFocus: je(e.onFocus, () => {
                        u.current || o.onOpen();
                    }),
                    onBlur: je(e.onBlur, o.onClose),
                    onClick: je(e.onClick, o.onClose)
                })
            })
        );
    });
t2.displayName = lu;
var n2 = "TooltipPortal",
    [kE, r2] = fl(n2, { forceMount: void 0 }),
    oo = "TooltipContent",
    a0 = S.forwardRef((e, t) => {
        const n = r2(oo, e.__scopeTooltip),
            { forceMount: r = n.forceMount, side: o = "top", ...i } = e,
            s = pl(oo, e.__scopeTooltip);
        return g.jsx(dc, { present: r || s.open, children: s.disableHoverableContent ? g.jsx(u0, { side: o, ...i, ref: t }) : g.jsx(o2, { side: o, ...i, ref: t }) });
    }),
    o2 = S.forwardRef((e, t) => {
        const n = pl(oo, e.__scopeTooltip),
            r = i0(oo, e.__scopeTooltip),
            o = S.useRef(null),
            i = It(t, o),
            [s, l] = S.useState(null),
            { trigger: a, onClose: u } = n,
            f = o.current,
            { onPointerInTransitChange: d } = r,
            c = S.useCallback(() => {
                l(null), d(!1);
            }, [d]),
            x = S.useCallback(
                (v, m) => {
                    const w = v.currentTarget,
                        p = { x: v.clientX, y: v.clientY },
                        h = a2(p, w.getBoundingClientRect()),
                        y = u2(p, h),
                        E = c2(m.getBoundingClientRect()),
                        C = f2([...y, ...E]);
                    l(C), d(!0);
                },
                [d]
            );
        return (
            S.useEffect(() => () => c(), [c]),
            S.useEffect(() => {
                if (a && f) {
                    const v = (w) => x(w, f),
                        m = (w) => x(w, a);
                    return (
                        a.addEventListener("pointerleave", v),
                        f.addEventListener("pointerleave", m),
                        () => {
                            a.removeEventListener("pointerleave", v), f.removeEventListener("pointerleave", m);
                        }
                    );
                }
            }, [a, f, x, c]),
            S.useEffect(() => {
                if (s) {
                    const v = (m) => {
                        const w = m.target,
                            p = { x: m.clientX, y: m.clientY },
                            h = (a == null ? void 0 : a.contains(w)) || (f == null ? void 0 : f.contains(w)),
                            y = !d2(p, s);
                        h ? c() : y && (c(), u());
                    };
                    return document.addEventListener("pointermove", v), () => document.removeEventListener("pointermove", v);
                }
            }, [a, f, s, u, c]),
            g.jsx(u0, { ...e, ref: i })
        );
    }),
    [i2, s2] = fl(l0, { isInside: !1 }),
    u0 = S.forwardRef((e, t) => {
        const { __scopeTooltip: n, children: r, "aria-label": o, onEscapeKeyDown: i, onPointerDownOutside: s, ...l } = e,
            a = pl(oo, n),
            u = kc(n),
            { onClose: f } = a;
        return (
            S.useEffect(() => (document.addEventListener(af, f), () => document.removeEventListener(af, f)), [f]),
            S.useEffect(() => {
                if (a.trigger) {
                    const d = (c) => {
                        const x = c.target;
                        x != null && x.contains(a.trigger) && f();
                    };
                    return window.addEventListener("scroll", d, { capture: !0 }), () => window.removeEventListener("scroll", d, { capture: !0 });
                }
            }, [a.trigger, f]),
            g.jsx(cc, {
                asChild: !0,
                disableOutsidePointerEvents: !1,
                onEscapeKeyDown: i,
                onPointerDownOutside: s,
                onFocusOutside: (d) => d.preventDefault(),
                onDismiss: f,
                children: g.jsxs(Xw, {
                    "data-state": a.stateAttribute,
                    ...u,
                    ...l,
                    ref: t,
                    style: {
                        ...l.style,
                        "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                        "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                        "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                        "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                        "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
                    },
                    children: [g.jsx(Zh, { children: r }), g.jsx(i2, { scope: n, isInside: !0, children: g.jsx(Vy, { id: a.contentId, role: "tooltip", children: o || r }) })]
                })
            })
        );
    });
a0.displayName = oo;
var c0 = "TooltipArrow",
    l2 = S.forwardRef((e, t) => {
        const { __scopeTooltip: n, ...r } = e,
            o = kc(n);
        return s2(c0, n).isInside ? null : g.jsx(Zw, { ...o, ...r, ref: t });
    });
l2.displayName = c0;
function a2(e, t) {
    const n = Math.abs(t.top - e.y),
        r = Math.abs(t.bottom - e.y),
        o = Math.abs(t.right - e.x),
        i = Math.abs(t.left - e.x);
    switch (Math.min(n, r, o, i)) {
        case i:
            return "left";
        case o:
            return "right";
        case n:
            return "top";
        case r:
            return "bottom";
        default:
            throw new Error("unreachable");
    }
}
function u2(e, t, n = 5) {
    const r = [];
    switch (t) {
        case "top":
            r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
            break;
        case "bottom":
            r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
            break;
        case "left":
            r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
            break;
        case "right":
            r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
            break;
    }
    return r;
}
function c2(e) {
    const { top: t, right: n, bottom: r, left: o } = e;
    return [
        { x: o, y: t },
        { x: n, y: t },
        { x: n, y: r },
        { x: o, y: r }
    ];
}
function d2(e, t) {
    const { x: n, y: r } = e;
    let o = !1;
    for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
        const l = t[i].x,
            a = t[i].y,
            u = t[s].x,
            f = t[s].y;
        a > r != f > r && n < ((u - l) * (r - a)) / (f - a) + l && (o = !o);
    }
    return o;
}
function f2(e) {
    const t = e.slice();
    return t.sort((n, r) => (n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0)), p2(t);
}
function p2(e) {
    if (e.length <= 1) return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
        const o = e[r];
        for (; t.length >= 2; ) {
            const i = t[t.length - 1],
                s = t[t.length - 2];
            if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) t.pop();
            else break;
        }
        t.push(o);
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const o = e[r];
        for (; n.length >= 2; ) {
            const i = n[n.length - 1],
                s = n[n.length - 2];
            if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) n.pop();
            else break;
        }
        n.push(o);
    }
    return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var h2 = s0,
    d0 = a0;
const m2 = h2,
    g2 = S.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
        g.jsx(d0, {
            ref: r,
            sideOffset: t,
            className: rt(
                "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                e
            ),
            ...n
        })
    );
g2.displayName = d0.displayName;
var hl = class {
        constructor() {
            (this.listeners = new Set()), (this.subscribe = this.subscribe.bind(this));
        }
        subscribe(e) {
            return (
                this.listeners.add(e),
                this.onSubscribe(),
                () => {
                    this.listeners.delete(e), this.onUnsubscribe();
                }
            );
        }
        hasListeners() {
            return this.listeners.size > 0;
        }
        onSubscribe() {}
        onUnsubscribe() {}
    },
    ml = typeof window > "u" || "Deno" in globalThis;
function Tt() {}
function v2(e, t) {
    return typeof e == "function" ? e(t) : e;
}
function y2(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function x2(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0);
}
function uf(e, t) {
    return typeof e == "function" ? e(t) : e;
}
function w2(e, t) {
    return typeof e == "function" ? e(t) : e;
}
function cf(e, t) {
    const { type: n = "all", exact: r, fetchStatus: o, predicate: i, queryKey: s, stale: l } = e;
    if (s) {
        if (r) {
            if (t.queryHash !== bc(s, t.options)) return !1;
        } else if (!di(t.queryKey, s)) return !1;
    }
    if (n !== "all") {
        const a = t.isActive();
        if ((n === "active" && !a) || (n === "inactive" && a)) return !1;
    }
    return !((typeof l == "boolean" && t.isStale() !== l) || (o && o !== t.state.fetchStatus) || (i && !i(t)));
}
function df(e, t) {
    const { exact: n, status: r, predicate: o, mutationKey: i } = e;
    if (i) {
        if (!t.options.mutationKey) return !1;
        if (n) {
            if (ci(t.options.mutationKey) !== ci(i)) return !1;
        } else if (!di(t.options.mutationKey, i)) return !1;
    }
    return !((r && t.state.status !== r) || (o && !o(t)));
}
function bc(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || ci)(e);
}
function ci(e) {
    return JSON.stringify(e, (t, n) =>
        au(n)
            ? Object.keys(n)
                  .sort()
                  .reduce((r, o) => ((r[o] = n[o]), r), {})
            : n
    );
}
function di(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some((n) => !di(e[n], t[n])) : !1;
}
function f0(e, t) {
    if (e === t) return e;
    const n = ff(e) && ff(t);
    if (n || (au(e) && au(t))) {
        const r = n ? e : Object.keys(e),
            o = r.length,
            i = n ? t : Object.keys(t),
            s = i.length,
            l = n ? [] : {};
        let a = 0;
        for (let u = 0; u < s; u++) {
            const f = n ? u : i[u];
            ((!n && r.includes(f)) || n) && e[f] === void 0 && t[f] === void 0 ? ((l[f] = void 0), a++) : ((l[f] = f0(e[f], t[f])), l[f] === e[f] && e[f] !== void 0 && a++);
        }
        return o === s && a === o ? e : l;
    }
    return t;
}
function ff(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length;
}
function au(e) {
    if (!pf(e)) return !1;
    const t = e.constructor;
    if (t === void 0) return !0;
    const n = t.prototype;
    return !(!pf(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype);
}
function pf(e) {
    return Object.prototype.toString.call(e) === "[object Object]";
}
function S2(e) {
    return new Promise((t) => {
        setTimeout(t, e);
    });
}
function E2(e, t, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? f0(e, t) : t;
}
function C2(e, t, n = 0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r;
}
function k2(e, t, n = 0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r;
}
var Nc = Symbol();
function p0(e, t) {
    return !e.queryFn && t != null && t.initialPromise ? () => t.initialPromise : !e.queryFn || e.queryFn === Nc ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn;
}
var tr,
    Cn,
    Br,
    Tf,
    b2 =
        ((Tf = class extends hl {
            constructor() {
                super();
                te(this, tr);
                te(this, Cn);
                te(this, Br);
                Y(this, Br, (t) => {
                    if (!ml && window.addEventListener) {
                        const n = () => t();
                        return (
                            window.addEventListener("visibilitychange", n, !1),
                            () => {
                                window.removeEventListener("visibilitychange", n);
                            }
                        );
                    }
                });
            }
            onSubscribe() {
                T(this, Cn) || this.setEventListener(T(this, Br));
            }
            onUnsubscribe() {
                var t;
                this.hasListeners() || ((t = T(this, Cn)) == null || t.call(this), Y(this, Cn, void 0));
            }
            setEventListener(t) {
                var n;
                Y(this, Br, t),
                    (n = T(this, Cn)) == null || n.call(this),
                    Y(
                        this,
                        Cn,
                        t((r) => {
                            typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
                        })
                    );
            }
            setFocused(t) {
                T(this, tr) !== t && (Y(this, tr, t), this.onFocus());
            }
            onFocus() {
                const t = this.isFocused();
                this.listeners.forEach((n) => {
                    n(t);
                });
            }
            isFocused() {
                var t;
                return typeof T(this, tr) == "boolean" ? T(this, tr) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden";
            }
        }),
        (tr = new WeakMap()),
        (Cn = new WeakMap()),
        (Br = new WeakMap()),
        Tf),
    h0 = new b2(),
    Ur,
    kn,
    Vr,
    jf,
    N2 =
        ((jf = class extends hl {
            constructor() {
                super();
                te(this, Ur, !0);
                te(this, kn);
                te(this, Vr);
                Y(this, Vr, (t) => {
                    if (!ml && window.addEventListener) {
                        const n = () => t(!0),
                            r = () => t(!1);
                        return (
                            window.addEventListener("online", n, !1),
                            window.addEventListener("offline", r, !1),
                            () => {
                                window.removeEventListener("online", n), window.removeEventListener("offline", r);
                            }
                        );
                    }
                });
            }
            onSubscribe() {
                T(this, kn) || this.setEventListener(T(this, Vr));
            }
            onUnsubscribe() {
                var t;
                this.hasListeners() || ((t = T(this, kn)) == null || t.call(this), Y(this, kn, void 0));
            }
            setEventListener(t) {
                var n;
                Y(this, Vr, t), (n = T(this, kn)) == null || n.call(this), Y(this, kn, t(this.setOnline.bind(this)));
            }
            setOnline(t) {
                T(this, Ur) !== t &&
                    (Y(this, Ur, t),
                    this.listeners.forEach((r) => {
                        r(t);
                    }));
            }
            isOnline() {
                return T(this, Ur);
            }
        }),
        (Ur = new WeakMap()),
        (kn = new WeakMap()),
        (Vr = new WeakMap()),
        jf),
    $s = new N2();
function P2() {
    let e, t;
    const n = new Promise((o, i) => {
        (e = o), (t = i);
    });
    (n.status = "pending"), n.catch(() => {});
    function r(o) {
        Object.assign(n, o), delete n.resolve, delete n.reject;
    }
    return (
        (n.resolve = (o) => {
            r({ status: "fulfilled", value: o }), e(o);
        }),
        (n.reject = (o) => {
            r({ status: "rejected", reason: o }), t(o);
        }),
        n
    );
}
function T2(e) {
    return Math.min(1e3 * 2 ** e, 3e4);
}
function m0(e) {
    return (e ?? "online") === "online" ? $s.isOnline() : !0;
}
var g0 = class extends Error {
    constructor(e) {
        super("CancelledError"), (this.revert = e == null ? void 0 : e.revert), (this.silent = e == null ? void 0 : e.silent);
    }
};
function na(e) {
    return e instanceof g0;
}
function v0(e) {
    let t = !1,
        n = 0,
        r = !1,
        o;
    const i = P2(),
        s = (m) => {
            var w;
            r || (c(new g0(m)), (w = e.abort) == null || w.call(e));
        },
        l = () => {
            t = !0;
        },
        a = () => {
            t = !1;
        },
        u = () => h0.isFocused() && (e.networkMode === "always" || $s.isOnline()) && e.canRun(),
        f = () => m0(e.networkMode) && e.canRun(),
        d = (m) => {
            var w;
            r || ((r = !0), (w = e.onSuccess) == null || w.call(e, m), o == null || o(), i.resolve(m));
        },
        c = (m) => {
            var w;
            r || ((r = !0), (w = e.onError) == null || w.call(e, m), o == null || o(), i.reject(m));
        },
        x = () =>
            new Promise((m) => {
                var w;
                (o = (p) => {
                    (r || u()) && m(p);
                }),
                    (w = e.onPause) == null || w.call(e);
            }).then(() => {
                var m;
                (o = void 0), r || (m = e.onContinue) == null || m.call(e);
            }),
        v = () => {
            if (r) return;
            let m;
            const w = n === 0 ? e.initialPromise : void 0;
            try {
                m = w ?? e.fn();
            } catch (p) {
                m = Promise.reject(p);
            }
            Promise.resolve(m)
                .then(d)
                .catch((p) => {
                    var b;
                    if (r) return;
                    const h = e.retry ?? (ml ? 0 : 3),
                        y = e.retryDelay ?? T2,
                        E = typeof y == "function" ? y(n, p) : y,
                        C = h === !0 || (typeof h == "number" && n < h) || (typeof h == "function" && h(n, p));
                    if (t || !C) {
                        c(p);
                        return;
                    }
                    n++,
                        (b = e.onFail) == null || b.call(e, n, p),
                        S2(E)
                            .then(() => (u() ? void 0 : x()))
                            .then(() => {
                                t ? c(p) : v();
                            });
                });
        };
    return { promise: i, cancel: s, continue: () => (o == null || o(), i), cancelRetry: l, continueRetry: a, canStart: f, start: () => (f() ? v() : x().then(v), i) };
}
function j2() {
    let e = [],
        t = 0,
        n = (l) => {
            l();
        },
        r = (l) => {
            l();
        },
        o = (l) => setTimeout(l, 0);
    const i = (l) => {
            t
                ? e.push(l)
                : o(() => {
                      n(l);
                  });
        },
        s = () => {
            const l = e;
            (e = []),
                l.length &&
                    o(() => {
                        r(() => {
                            l.forEach((a) => {
                                n(a);
                            });
                        });
                    });
        };
    return {
        batch: (l) => {
            let a;
            t++;
            try {
                a = l();
            } finally {
                t--, t || s();
            }
            return a;
        },
        batchCalls:
            (l) =>
            (...a) => {
                i(() => {
                    l(...a);
                });
            },
        schedule: i,
        setNotifyFunction: (l) => {
            n = l;
        },
        setBatchNotifyFunction: (l) => {
            r = l;
        },
        setScheduler: (l) => {
            o = l;
        }
    };
}
var We = j2(),
    nr,
    Rf,
    y0 =
        ((Rf = class {
            constructor() {
                te(this, nr);
            }
            destroy() {
                this.clearGcTimeout();
            }
            scheduleGc() {
                this.clearGcTimeout(),
                    y2(this.gcTime) &&
                        Y(
                            this,
                            nr,
                            setTimeout(() => {
                                this.optionalRemove();
                            }, this.gcTime)
                        );
            }
            updateGcTime(e) {
                this.gcTime = Math.max(this.gcTime || 0, e ?? (ml ? 1 / 0 : 5 * 60 * 1e3));
            }
            clearGcTimeout() {
                T(this, nr) && (clearTimeout(T(this, nr)), Y(this, nr, void 0));
            }
        }),
        (nr = new WeakMap()),
        Rf),
    Hr,
    Wr,
    yt,
    $e,
    mi,
    rr,
    jt,
    en,
    Of,
    R2 =
        ((Of = class extends y0 {
            constructor(t) {
                super();
                te(this, jt);
                te(this, Hr);
                te(this, Wr);
                te(this, yt);
                te(this, $e);
                te(this, mi);
                te(this, rr);
                Y(this, rr, !1),
                    Y(this, mi, t.defaultOptions),
                    this.setOptions(t.options),
                    (this.observers = []),
                    Y(this, yt, t.cache),
                    (this.queryKey = t.queryKey),
                    (this.queryHash = t.queryHash),
                    Y(this, Hr, M2(this.options)),
                    (this.state = t.state ?? T(this, Hr)),
                    this.scheduleGc();
            }
            get meta() {
                return this.options.meta;
            }
            get promise() {
                var t;
                return (t = T(this, $e)) == null ? void 0 : t.promise;
            }
            setOptions(t) {
                (this.options = { ...T(this, mi), ...t }), this.updateGcTime(this.options.gcTime);
            }
            optionalRemove() {
                !this.observers.length && this.state.fetchStatus === "idle" && T(this, yt).remove(this);
            }
            setData(t, n) {
                const r = E2(this.state.data, t, this.options);
                return De(this, jt, en).call(this, { data: r, type: "success", dataUpdatedAt: n == null ? void 0 : n.updatedAt, manual: n == null ? void 0 : n.manual }), r;
            }
            setState(t, n) {
                De(this, jt, en).call(this, { type: "setState", state: t, setStateOptions: n });
            }
            cancel(t) {
                var r, o;
                const n = (r = T(this, $e)) == null ? void 0 : r.promise;
                return (o = T(this, $e)) == null || o.cancel(t), n ? n.then(Tt).catch(Tt) : Promise.resolve();
            }
            destroy() {
                super.destroy(), this.cancel({ silent: !0 });
            }
            reset() {
                this.destroy(), this.setState(T(this, Hr));
            }
            isActive() {
                return this.observers.some((t) => w2(t.options.enabled, this) !== !1);
            }
            isDisabled() {
                return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Nc || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
            }
            isStale() {
                return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? this.observers.some((t) => t.getCurrentResult().isStale) : this.state.data === void 0;
            }
            isStaleByTime(t = 0) {
                return this.state.isInvalidated || this.state.data === void 0 || !x2(this.state.dataUpdatedAt, t);
            }
            onFocus() {
                var n;
                const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
                t == null || t.refetch({ cancelRefetch: !1 }), (n = T(this, $e)) == null || n.continue();
            }
            onOnline() {
                var n;
                const t = this.observers.find((r) => r.shouldFetchOnReconnect());
                t == null || t.refetch({ cancelRefetch: !1 }), (n = T(this, $e)) == null || n.continue();
            }
            addObserver(t) {
                this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), T(this, yt).notify({ type: "observerAdded", query: this, observer: t }));
            }
            removeObserver(t) {
                this.observers.includes(t) &&
                    ((this.observers = this.observers.filter((n) => n !== t)),
                    this.observers.length || (T(this, $e) && (T(this, rr) ? T(this, $e).cancel({ revert: !0 }) : T(this, $e).cancelRetry()), this.scheduleGc()),
                    T(this, yt).notify({ type: "observerRemoved", query: this, observer: t }));
            }
            getObserversCount() {
                return this.observers.length;
            }
            invalidate() {
                this.state.isInvalidated || De(this, jt, en).call(this, { type: "invalidate" });
            }
            fetch(t, n) {
                var a, u, f;
                if (this.state.fetchStatus !== "idle") {
                    if (this.state.data !== void 0 && n != null && n.cancelRefetch) this.cancel({ silent: !0 });
                    else if (T(this, $e)) return T(this, $e).continueRetry(), T(this, $e).promise;
                }
                if ((t && this.setOptions(t), !this.options.queryFn)) {
                    const d = this.observers.find((c) => c.options.queryFn);
                    d && this.setOptions(d.options);
                }
                const r = new AbortController(),
                    o = (d) => {
                        Object.defineProperty(d, "signal", { enumerable: !0, get: () => (Y(this, rr, !0), r.signal) });
                    },
                    i = () => {
                        const d = p0(this.options, n),
                            c = { queryKey: this.queryKey, meta: this.meta };
                        return o(c), Y(this, rr, !1), this.options.persister ? this.options.persister(d, c, this) : d(c);
                    },
                    s = { fetchOptions: n, options: this.options, queryKey: this.queryKey, state: this.state, fetchFn: i };
                o(s),
                    (a = this.options.behavior) == null || a.onFetch(s, this),
                    Y(this, Wr, this.state),
                    (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((u = s.fetchOptions) == null ? void 0 : u.meta)) &&
                        De(this, jt, en).call(this, { type: "fetch", meta: (f = s.fetchOptions) == null ? void 0 : f.meta });
                const l = (d) => {
                    var c, x, v, m;
                    (na(d) && d.silent) || De(this, jt, en).call(this, { type: "error", error: d }),
                        na(d) || ((x = (c = T(this, yt).config).onError) == null || x.call(c, d, this), (m = (v = T(this, yt).config).onSettled) == null || m.call(v, this.state.data, d, this)),
                        this.scheduleGc();
                };
                return (
                    Y(
                        this,
                        $e,
                        v0({
                            initialPromise: n == null ? void 0 : n.initialPromise,
                            fn: s.fetchFn,
                            abort: r.abort.bind(r),
                            onSuccess: (d) => {
                                var c, x, v, m;
                                if (d === void 0) {
                                    l(new Error(`${this.queryHash} data is undefined`));
                                    return;
                                }
                                try {
                                    this.setData(d);
                                } catch (w) {
                                    l(w);
                                    return;
                                }
                                (x = (c = T(this, yt).config).onSuccess) == null || x.call(c, d, this),
                                    (m = (v = T(this, yt).config).onSettled) == null || m.call(v, d, this.state.error, this),
                                    this.scheduleGc();
                            },
                            onError: l,
                            onFail: (d, c) => {
                                De(this, jt, en).call(this, { type: "failed", failureCount: d, error: c });
                            },
                            onPause: () => {
                                De(this, jt, en).call(this, { type: "pause" });
                            },
                            onContinue: () => {
                                De(this, jt, en).call(this, { type: "continue" });
                            },
                            retry: s.options.retry,
                            retryDelay: s.options.retryDelay,
                            networkMode: s.options.networkMode,
                            canRun: () => !0
                        })
                    ),
                    T(this, $e).start()
                );
            }
        }),
        (Hr = new WeakMap()),
        (Wr = new WeakMap()),
        (yt = new WeakMap()),
        ($e = new WeakMap()),
        (mi = new WeakMap()),
        (rr = new WeakMap()),
        (jt = new WeakSet()),
        (en = function (t) {
            const n = (r) => {
                switch (t.type) {
                    case "failed":
                        return { ...r, fetchFailureCount: t.failureCount, fetchFailureReason: t.error };
                    case "pause":
                        return { ...r, fetchStatus: "paused" };
                    case "continue":
                        return { ...r, fetchStatus: "fetching" };
                    case "fetch":
                        return { ...r, ...O2(r.data, this.options), fetchMeta: t.meta ?? null };
                    case "success":
                        return {
                            ...r,
                            data: t.data,
                            dataUpdateCount: r.dataUpdateCount + 1,
                            dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                            error: null,
                            isInvalidated: !1,
                            status: "success",
                            ...(!t.manual && { fetchStatus: "idle", fetchFailureCount: 0, fetchFailureReason: null })
                        };
                    case "error":
                        const o = t.error;
                        return na(o) && o.revert && T(this, Wr)
                            ? { ...T(this, Wr), fetchStatus: "idle" }
                            : {
                                  ...r,
                                  error: o,
                                  errorUpdateCount: r.errorUpdateCount + 1,
                                  errorUpdatedAt: Date.now(),
                                  fetchFailureCount: r.fetchFailureCount + 1,
                                  fetchFailureReason: o,
                                  fetchStatus: "idle",
                                  status: "error"
                              };
                    case "invalidate":
                        return { ...r, isInvalidated: !0 };
                    case "setState":
                        return { ...r, ...t.state };
                }
            };
            (this.state = n(this.state)),
                We.batch(() => {
                    this.observers.forEach((r) => {
                        r.onQueryUpdate();
                    }),
                        T(this, yt).notify({ query: this, type: "updated", action: t });
                });
        }),
        Of);
function O2(e, t) {
    return { fetchFailureCount: 0, fetchFailureReason: null, fetchStatus: m0(t.networkMode) ? "fetching" : "paused", ...(e === void 0 && { error: null, status: "pending" }) };
}
function M2(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData,
        n = t !== void 0,
        r = n ? (typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt) : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? r ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    };
}
var Vt,
    Mf,
    A2 =
        ((Mf = class extends hl {
            constructor(t = {}) {
                super();
                te(this, Vt);
                (this.config = t), Y(this, Vt, new Map());
            }
            build(t, n, r) {
                const o = n.queryKey,
                    i = n.queryHash ?? bc(o, n);
                let s = this.get(i);
                return s || ((s = new R2({ cache: this, queryKey: o, queryHash: i, options: t.defaultQueryOptions(n), state: r, defaultOptions: t.getQueryDefaults(o) })), this.add(s)), s;
            }
            add(t) {
                T(this, Vt).has(t.queryHash) || (T(this, Vt).set(t.queryHash, t), this.notify({ type: "added", query: t }));
            }
            remove(t) {
                const n = T(this, Vt).get(t.queryHash);
                n && (t.destroy(), n === t && T(this, Vt).delete(t.queryHash), this.notify({ type: "removed", query: t }));
            }
            clear() {
                We.batch(() => {
                    this.getAll().forEach((t) => {
                        this.remove(t);
                    });
                });
            }
            get(t) {
                return T(this, Vt).get(t);
            }
            getAll() {
                return [...T(this, Vt).values()];
            }
            find(t) {
                const n = { exact: !0, ...t };
                return this.getAll().find((r) => cf(n, r));
            }
            findAll(t = {}) {
                const n = this.getAll();
                return Object.keys(t).length > 0 ? n.filter((r) => cf(t, r)) : n;
            }
            notify(t) {
                We.batch(() => {
                    this.listeners.forEach((n) => {
                        n(t);
                    });
                });
            }
            onFocus() {
                We.batch(() => {
                    this.getAll().forEach((t) => {
                        t.onFocus();
                    });
                });
            }
            onOnline() {
                We.batch(() => {
                    this.getAll().forEach((t) => {
                        t.onOnline();
                    });
                });
            }
        }),
        (Vt = new WeakMap()),
        Mf),
    Ht,
    Ve,
    or,
    Wt,
    yn,
    Af,
    _2 =
        ((Af = class extends y0 {
            constructor(t) {
                super();
                te(this, Wt);
                te(this, Ht);
                te(this, Ve);
                te(this, or);
                (this.mutationId = t.mutationId), Y(this, Ve, t.mutationCache), Y(this, Ht, []), (this.state = t.state || L2()), this.setOptions(t.options), this.scheduleGc();
            }
            setOptions(t) {
                (this.options = t), this.updateGcTime(this.options.gcTime);
            }
            get meta() {
                return this.options.meta;
            }
            addObserver(t) {
                T(this, Ht).includes(t) || (T(this, Ht).push(t), this.clearGcTimeout(), T(this, Ve).notify({ type: "observerAdded", mutation: this, observer: t }));
            }
            removeObserver(t) {
                Y(
                    this,
                    Ht,
                    T(this, Ht).filter((n) => n !== t)
                ),
                    this.scheduleGc(),
                    T(this, Ve).notify({ type: "observerRemoved", mutation: this, observer: t });
            }
            optionalRemove() {
                T(this, Ht).length || (this.state.status === "pending" ? this.scheduleGc() : T(this, Ve).remove(this));
            }
            continue() {
                var t;
                return ((t = T(this, or)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables);
            }
            async execute(t) {
                var o, i, s, l, a, u, f, d, c, x, v, m, w, p, h, y, E, C, b, k;
                Y(
                    this,
                    or,
                    v0({
                        fn: () => (this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found"))),
                        onFail: (P, j) => {
                            De(this, Wt, yn).call(this, { type: "failed", failureCount: P, error: j });
                        },
                        onPause: () => {
                            De(this, Wt, yn).call(this, { type: "pause" });
                        },
                        onContinue: () => {
                            De(this, Wt, yn).call(this, { type: "continue" });
                        },
                        retry: this.options.retry ?? 0,
                        retryDelay: this.options.retryDelay,
                        networkMode: this.options.networkMode,
                        canRun: () => T(this, Ve).canRun(this)
                    })
                );
                const n = this.state.status === "pending",
                    r = !T(this, or).canStart();
                try {
                    if (!n) {
                        De(this, Wt, yn).call(this, { type: "pending", variables: t, isPaused: r }), await ((i = (o = T(this, Ve).config).onMutate) == null ? void 0 : i.call(o, t, this));
                        const j = await ((l = (s = this.options).onMutate) == null ? void 0 : l.call(s, t));
                        j !== this.state.context && De(this, Wt, yn).call(this, { type: "pending", context: j, variables: t, isPaused: r });
                    }
                    const P = await T(this, or).start();
                    return (
                        await ((u = (a = T(this, Ve).config).onSuccess) == null ? void 0 : u.call(a, P, t, this.state.context, this)),
                        await ((d = (f = this.options).onSuccess) == null ? void 0 : d.call(f, P, t, this.state.context)),
                        await ((x = (c = T(this, Ve).config).onSettled) == null ? void 0 : x.call(c, P, null, this.state.variables, this.state.context, this)),
                        await ((m = (v = this.options).onSettled) == null ? void 0 : m.call(v, P, null, t, this.state.context)),
                        De(this, Wt, yn).call(this, { type: "success", data: P }),
                        P
                    );
                } catch (P) {
                    try {
                        throw (
                            (await ((p = (w = T(this, Ve).config).onError) == null ? void 0 : p.call(w, P, t, this.state.context, this)),
                            await ((y = (h = this.options).onError) == null ? void 0 : y.call(h, P, t, this.state.context)),
                            await ((C = (E = T(this, Ve).config).onSettled) == null ? void 0 : C.call(E, void 0, P, this.state.variables, this.state.context, this)),
                            await ((k = (b = this.options).onSettled) == null ? void 0 : k.call(b, void 0, P, t, this.state.context)),
                            P)
                        );
                    } finally {
                        De(this, Wt, yn).call(this, { type: "error", error: P });
                    }
                } finally {
                    T(this, Ve).runNext(this);
                }
            }
        }),
        (Ht = new WeakMap()),
        (Ve = new WeakMap()),
        (or = new WeakMap()),
        (Wt = new WeakSet()),
        (yn = function (t) {
            const n = (r) => {
                switch (t.type) {
                    case "failed":
                        return { ...r, failureCount: t.failureCount, failureReason: t.error };
                    case "pause":
                        return { ...r, isPaused: !0 };
                    case "continue":
                        return { ...r, isPaused: !1 };
                    case "pending":
                        return {
                            ...r,
                            context: t.context,
                            data: void 0,
                            failureCount: 0,
                            failureReason: null,
                            error: null,
                            isPaused: t.isPaused,
                            status: "pending",
                            variables: t.variables,
                            submittedAt: Date.now()
                        };
                    case "success":
                        return { ...r, data: t.data, failureCount: 0, failureReason: null, error: null, status: "success", isPaused: !1 };
                    case "error":
                        return { ...r, data: void 0, error: t.error, failureCount: r.failureCount + 1, failureReason: t.error, isPaused: !1, status: "error" };
                }
            };
            (this.state = n(this.state)),
                We.batch(() => {
                    T(this, Ht).forEach((r) => {
                        r.onMutationUpdate(t);
                    }),
                        T(this, Ve).notify({ mutation: this, type: "updated", action: t });
                });
        }),
        Af);
function L2() {
    return { context: void 0, data: void 0, error: null, failureCount: 0, failureReason: null, isPaused: !1, status: "idle", variables: void 0, submittedAt: 0 };
}
var lt,
    gi,
    _f,
    I2 =
        ((_f = class extends hl {
            constructor(t = {}) {
                super();
                te(this, lt);
                te(this, gi);
                (this.config = t), Y(this, lt, new Map()), Y(this, gi, Date.now());
            }
            build(t, n, r) {
                const o = new _2({ mutationCache: this, mutationId: ++Ti(this, gi)._, options: t.defaultMutationOptions(n), state: r });
                return this.add(o), o;
            }
            add(t) {
                const n = qi(t),
                    r = T(this, lt).get(n) ?? [];
                r.push(t), T(this, lt).set(n, r), this.notify({ type: "added", mutation: t });
            }
            remove(t) {
                var r;
                const n = qi(t);
                if (T(this, lt).has(n)) {
                    const o = (r = T(this, lt).get(n)) == null ? void 0 : r.filter((i) => i !== t);
                    o && (o.length === 0 ? T(this, lt).delete(n) : T(this, lt).set(n, o));
                }
                this.notify({ type: "removed", mutation: t });
            }
            canRun(t) {
                var r;
                const n = (r = T(this, lt).get(qi(t))) == null ? void 0 : r.find((o) => o.state.status === "pending");
                return !n || n === t;
            }
            runNext(t) {
                var r;
                const n = (r = T(this, lt).get(qi(t))) == null ? void 0 : r.find((o) => o !== t && o.state.isPaused);
                return (n == null ? void 0 : n.continue()) ?? Promise.resolve();
            }
            clear() {
                We.batch(() => {
                    this.getAll().forEach((t) => {
                        this.remove(t);
                    });
                });
            }
            getAll() {
                return [...T(this, lt).values()].flat();
            }
            find(t) {
                const n = { exact: !0, ...t };
                return this.getAll().find((r) => df(n, r));
            }
            findAll(t = {}) {
                return this.getAll().filter((n) => df(t, n));
            }
            notify(t) {
                We.batch(() => {
                    this.listeners.forEach((n) => {
                        n(t);
                    });
                });
            }
            resumePausedMutations() {
                const t = this.getAll().filter((n) => n.state.isPaused);
                return We.batch(() => Promise.all(t.map((n) => n.continue().catch(Tt))));
            }
        }),
        (lt = new WeakMap()),
        (gi = new WeakMap()),
        _f);
function qi(e) {
    var t;
    return ((t = e.options.scope) == null ? void 0 : t.id) ?? String(e.mutationId);
}
function hf(e) {
    return {
        onFetch: (t, n) => {
            var f, d, c, x, v;
            const r = t.options,
                o = (c = (d = (f = t.fetchOptions) == null ? void 0 : f.meta) == null ? void 0 : d.fetchMore) == null ? void 0 : c.direction,
                i = ((x = t.state.data) == null ? void 0 : x.pages) || [],
                s = ((v = t.state.data) == null ? void 0 : v.pageParams) || [];
            let l = { pages: [], pageParams: [] },
                a = 0;
            const u = async () => {
                let m = !1;
                const w = (y) => {
                        Object.defineProperty(y, "signal", {
                            enumerable: !0,
                            get: () => (
                                t.signal.aborted
                                    ? (m = !0)
                                    : t.signal.addEventListener("abort", () => {
                                          m = !0;
                                      }),
                                t.signal
                            )
                        });
                    },
                    p = p0(t.options, t.fetchOptions),
                    h = async (y, E, C) => {
                        if (m) return Promise.reject();
                        if (E == null && y.pages.length) return Promise.resolve(y);
                        const b = { queryKey: t.queryKey, pageParam: E, direction: C ? "backward" : "forward", meta: t.options.meta };
                        w(b);
                        const k = await p(b),
                            { maxPages: P } = t.options,
                            j = C ? k2 : C2;
                        return { pages: j(y.pages, k, P), pageParams: j(y.pageParams, E, P) };
                    };
                if (o && i.length) {
                    const y = o === "backward",
                        E = y ? D2 : mf,
                        C = { pages: i, pageParams: s },
                        b = E(r, C);
                    l = await h(C, b, y);
                } else {
                    const y = e ?? i.length;
                    do {
                        const E = a === 0 ? s[0] ?? r.initialPageParam : mf(r, l);
                        if (a > 0 && E == null) break;
                        (l = await h(l, E)), a++;
                    } while (a < y);
                }
                return l;
            };
            t.options.persister
                ? (t.fetchFn = () => {
                      var m, w;
                      return (w = (m = t.options).persister) == null ? void 0 : w.call(m, u, { queryKey: t.queryKey, meta: t.options.meta, signal: t.signal }, n);
                  })
                : (t.fetchFn = u);
        }
    };
}
function mf(e, { pages: t, pageParams: n }) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function D2(e, { pages: t, pageParams: n }) {
    var r;
    return t.length > 0 ? ((r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n)) : void 0;
}
var we,
    bn,
    Nn,
    Qr,
    Kr,
    Pn,
    Gr,
    Yr,
    Lf,
    z2 =
        ((Lf = class {
            constructor(e = {}) {
                te(this, we);
                te(this, bn);
                te(this, Nn);
                te(this, Qr);
                te(this, Kr);
                te(this, Pn);
                te(this, Gr);
                te(this, Yr);
                Y(this, we, e.queryCache || new A2()), Y(this, bn, e.mutationCache || new I2()), Y(this, Nn, e.defaultOptions || {}), Y(this, Qr, new Map()), Y(this, Kr, new Map()), Y(this, Pn, 0);
            }
            mount() {
                Ti(this, Pn)._++,
                    T(this, Pn) === 1 &&
                        (Y(
                            this,
                            Gr,
                            h0.subscribe(async (e) => {
                                e && (await this.resumePausedMutations(), T(this, we).onFocus());
                            })
                        ),
                        Y(
                            this,
                            Yr,
                            $s.subscribe(async (e) => {
                                e && (await this.resumePausedMutations(), T(this, we).onOnline());
                            })
                        ));
            }
            unmount() {
                var e, t;
                Ti(this, Pn)._--, T(this, Pn) === 0 && ((e = T(this, Gr)) == null || e.call(this), Y(this, Gr, void 0), (t = T(this, Yr)) == null || t.call(this), Y(this, Yr, void 0));
            }
            isFetching(e) {
                return T(this, we).findAll({ ...e, fetchStatus: "fetching" }).length;
            }
            isMutating(e) {
                return T(this, bn).findAll({ ...e, status: "pending" }).length;
            }
            getQueryData(e) {
                var n;
                const t = this.defaultQueryOptions({ queryKey: e });
                return (n = T(this, we).get(t.queryHash)) == null ? void 0 : n.state.data;
            }
            ensureQueryData(e) {
                const t = this.getQueryData(e.queryKey);
                if (t === void 0) return this.fetchQuery(e);
                {
                    const n = this.defaultQueryOptions(e),
                        r = T(this, we).build(this, n);
                    return e.revalidateIfStale && r.isStaleByTime(uf(n.staleTime, r)) && this.prefetchQuery(n), Promise.resolve(t);
                }
            }
            getQueriesData(e) {
                return T(this, we)
                    .findAll(e)
                    .map(({ queryKey: t, state: n }) => {
                        const r = n.data;
                        return [t, r];
                    });
            }
            setQueryData(e, t, n) {
                const r = this.defaultQueryOptions({ queryKey: e }),
                    o = T(this, we).get(r.queryHash),
                    i = o == null ? void 0 : o.state.data,
                    s = v2(t, i);
                if (s !== void 0)
                    return T(this, we)
                        .build(this, r)
                        .setData(s, { ...n, manual: !0 });
            }
            setQueriesData(e, t, n) {
                return We.batch(() =>
                    T(this, we)
                        .findAll(e)
                        .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)])
                );
            }
            getQueryState(e) {
                var n;
                const t = this.defaultQueryOptions({ queryKey: e });
                return (n = T(this, we).get(t.queryHash)) == null ? void 0 : n.state;
            }
            removeQueries(e) {
                const t = T(this, we);
                We.batch(() => {
                    t.findAll(e).forEach((n) => {
                        t.remove(n);
                    });
                });
            }
            resetQueries(e, t) {
                const n = T(this, we),
                    r = { type: "active", ...e };
                return We.batch(
                    () => (
                        n.findAll(e).forEach((o) => {
                            o.reset();
                        }),
                        this.refetchQueries(r, t)
                    )
                );
            }
            cancelQueries(e = {}, t = {}) {
                const n = { revert: !0, ...t },
                    r = We.batch(() =>
                        T(this, we)
                            .findAll(e)
                            .map((o) => o.cancel(n))
                    );
                return Promise.all(r).then(Tt).catch(Tt);
            }
            invalidateQueries(e = {}, t = {}) {
                return We.batch(() => {
                    if (
                        (T(this, we)
                            .findAll(e)
                            .forEach((r) => {
                                r.invalidate();
                            }),
                        e.refetchType === "none")
                    )
                        return Promise.resolve();
                    const n = { ...e, type: e.refetchType ?? e.type ?? "active" };
                    return this.refetchQueries(n, t);
                });
            }
            refetchQueries(e = {}, t) {
                const n = { ...t, cancelRefetch: (t == null ? void 0 : t.cancelRefetch) ?? !0 },
                    r = We.batch(() =>
                        T(this, we)
                            .findAll(e)
                            .filter((o) => !o.isDisabled())
                            .map((o) => {
                                let i = o.fetch(void 0, n);
                                return n.throwOnError || (i = i.catch(Tt)), o.state.fetchStatus === "paused" ? Promise.resolve() : i;
                            })
                    );
                return Promise.all(r).then(Tt);
            }
            fetchQuery(e) {
                const t = this.defaultQueryOptions(e);
                t.retry === void 0 && (t.retry = !1);
                const n = T(this, we).build(this, t);
                return n.isStaleByTime(uf(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data);
            }
            prefetchQuery(e) {
                return this.fetchQuery(e).then(Tt).catch(Tt);
            }
            fetchInfiniteQuery(e) {
                return (e.behavior = hf(e.pages)), this.fetchQuery(e);
            }
            prefetchInfiniteQuery(e) {
                return this.fetchInfiniteQuery(e).then(Tt).catch(Tt);
            }
            ensureInfiniteQueryData(e) {
                return (e.behavior = hf(e.pages)), this.ensureQueryData(e);
            }
            resumePausedMutations() {
                return $s.isOnline() ? T(this, bn).resumePausedMutations() : Promise.resolve();
            }
            getQueryCache() {
                return T(this, we);
            }
            getMutationCache() {
                return T(this, bn);
            }
            getDefaultOptions() {
                return T(this, Nn);
            }
            setDefaultOptions(e) {
                Y(this, Nn, e);
            }
            setQueryDefaults(e, t) {
                T(this, Qr).set(ci(e), { queryKey: e, defaultOptions: t });
            }
            getQueryDefaults(e) {
                const t = [...T(this, Qr).values()];
                let n = {};
                return (
                    t.forEach((r) => {
                        di(e, r.queryKey) && (n = { ...n, ...r.defaultOptions });
                    }),
                    n
                );
            }
            setMutationDefaults(e, t) {
                T(this, Kr).set(ci(e), { mutationKey: e, defaultOptions: t });
            }
            getMutationDefaults(e) {
                const t = [...T(this, Kr).values()];
                let n = {};
                return (
                    t.forEach((r) => {
                        di(e, r.mutationKey) && (n = { ...n, ...r.defaultOptions });
                    }),
                    n
                );
            }
            defaultQueryOptions(e) {
                if (e._defaulted) return e;
                const t = { ...T(this, Nn).queries, ...this.getQueryDefaults(e.queryKey), ...e, _defaulted: !0 };
                return (
                    t.queryHash || (t.queryHash = bc(t.queryKey, t)),
                    t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"),
                    t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
                    !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
                    t.enabled !== !0 && t.queryFn === Nc && (t.enabled = !1),
                    t
                );
            }
            defaultMutationOptions(e) {
                return e != null && e._defaulted ? e : { ...T(this, Nn).mutations, ...((e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey)), ...e, _defaulted: !0 };
            }
            clear() {
                T(this, we).clear(), T(this, bn).clear();
            }
        }),
        (we = new WeakMap()),
        (bn = new WeakMap()),
        (Nn = new WeakMap()),
        (Qr = new WeakMap()),
        (Kr = new WeakMap()),
        (Pn = new WeakMap()),
        (Gr = new WeakMap()),
        (Yr = new WeakMap()),
        Lf),
    F2 = S.createContext(void 0),
    $2 = ({ client: e, children: t }) => (
        S.useEffect(
            () => (
                e.mount(),
                () => {
                    e.unmount();
                }
            ),
            [e]
        ),
        g.jsx(F2.Provider, { value: e, children: t })
    );
/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Bs() {
    return (
        (Bs = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        Bs.apply(this, arguments)
    );
}
var Rn;
(function (e) {
    (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Rn || (Rn = {}));
const gf = "popstate";
function B2(e) {
    e === void 0 && (e = {});
    function t(r, o) {
        let { pathname: i, search: s, hash: l } = r.location;
        return uu("", { pathname: i, search: s, hash: l }, (o.state && o.state.usr) || null, (o.state && o.state.key) || "default");
    }
    function n(r, o) {
        return typeof o == "string" ? o : w0(o);
    }
    return V2(t, n, null, e);
}
function tt(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function x0(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t);
        } catch {}
    }
}
function U2() {
    return Math.random().toString(36).substr(2, 8);
}
function vf(e, t) {
    return { usr: e.state, key: e.key, idx: t };
}
function uu(e, t, n, r) {
    return n === void 0 && (n = null), Bs({ pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" }, typeof t == "string" ? gl(t) : t, { state: n, key: (t && t.key) || r || U2() });
}
function w0(e) {
    let { pathname: t = "/", search: n = "", hash: r = "" } = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t;
}
function gl(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
        let r = e.indexOf("?");
        r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e);
    }
    return t;
}
function V2(e, t, n, r) {
    r === void 0 && (r = {});
    let { window: o = document.defaultView, v5Compat: i = !1 } = r,
        s = o.history,
        l = Rn.Pop,
        a = null,
        u = f();
    u == null && ((u = 0), s.replaceState(Bs({}, s.state, { idx: u }), ""));
    function f() {
        return (s.state || { idx: null }).idx;
    }
    function d() {
        l = Rn.Pop;
        let w = f(),
            p = w == null ? null : w - u;
        (u = w), a && a({ action: l, location: m.location, delta: p });
    }
    function c(w, p) {
        l = Rn.Push;
        let h = uu(m.location, w, p);
        u = f() + 1;
        let y = vf(h, u),
            E = m.createHref(h);
        try {
            s.pushState(y, "", E);
        } catch (C) {
            if (C instanceof DOMException && C.name === "DataCloneError") throw C;
            o.location.assign(E);
        }
        i && a && a({ action: l, location: m.location, delta: 1 });
    }
    function x(w, p) {
        l = Rn.Replace;
        let h = uu(m.location, w, p);
        u = f();
        let y = vf(h, u),
            E = m.createHref(h);
        s.replaceState(y, "", E), i && a && a({ action: l, location: m.location, delta: 0 });
    }
    function v(w) {
        let p = o.location.origin !== "null" ? o.location.origin : o.location.href,
            h = typeof w == "string" ? w : w0(w);
        return (h = h.replace(/ $/, "%20")), tt(p, "No window.location.(origin|href) available to create URL for href: " + h), new URL(h, p);
    }
    let m = {
        get action() {
            return l;
        },
        get location() {
            return e(o, s);
        },
        listen(w) {
            if (a) throw new Error("A history only accepts one active listener");
            return (
                o.addEventListener(gf, d),
                (a = w),
                () => {
                    o.removeEventListener(gf, d), (a = null);
                }
            );
        },
        createHref(w) {
            return t(o, w);
        },
        createURL: v,
        encodeLocation(w) {
            let p = v(w);
            return { pathname: p.pathname, search: p.search, hash: p.hash };
        },
        push: c,
        replace: x,
        go(w) {
            return s.go(w);
        }
    };
    return m;
}
var yf;
(function (e) {
    (e.data = "data"), (e.deferred = "deferred"), (e.redirect = "redirect"), (e.error = "error");
})(yf || (yf = {}));
function H2(e, t, n) {
    return n === void 0 && (n = "/"), W2(e, t, n, !1);
}
function W2(e, t, n, r) {
    let o = typeof t == "string" ? gl(t) : t,
        i = C0(o.pathname || "/", n);
    if (i == null) return null;
    let s = S0(e);
    Q2(s);
    let l = null;
    for (let a = 0; l == null && a < s.length; ++a) {
        let u = rS(i);
        l = tS(s[a], u, r);
    }
    return l;
}
function S0(e, t, n, r) {
    t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
    let o = (i, s, l) => {
        let a = { relativePath: l === void 0 ? i.path || "" : l, caseSensitive: i.caseSensitive === !0, childrenIndex: s, route: i };
        a.relativePath.startsWith("/") &&
            (tt(
                a.relativePath.startsWith(r),
                'Absolute route path "' +
                    a.relativePath +
                    '" nested under path ' +
                    ('"' + r + '" is not valid. An absolute child route path ') +
                    "must start with the combined path of all its parent routes."
            ),
            (a.relativePath = a.relativePath.slice(r.length)));
        let u = $r([r, a.relativePath]),
            f = n.concat(a);
        i.children &&
            i.children.length > 0 &&
            (tt(i.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')), S0(i.children, t, f, u)),
            !(i.path == null && !i.index) && t.push({ path: u, score: J2(u, i.index), routesMeta: f });
    };
    return (
        e.forEach((i, s) => {
            var l;
            if (i.path === "" || !((l = i.path) != null && l.includes("?"))) o(i, s);
            else for (let a of E0(i.path)) o(i, s, a);
        }),
        t
    );
}
function E0(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t,
        o = n.endsWith("?"),
        i = n.replace(/\?$/, "");
    if (r.length === 0) return o ? [i, ""] : [i];
    let s = E0(r.join("/")),
        l = [];
    return l.push(...s.map((a) => (a === "" ? i : [i, a].join("/")))), o && l.push(...s), l.map((a) => (e.startsWith("/") && a === "" ? "/" : a));
}
function Q2(e) {
    e.sort((t, n) =>
        t.score !== n.score
            ? n.score - t.score
            : eS(
                  t.routesMeta.map((r) => r.childrenIndex),
                  n.routesMeta.map((r) => r.childrenIndex)
              )
    );
}
const K2 = /^:[\w-]+$/,
    G2 = 3,
    Y2 = 2,
    q2 = 1,
    X2 = 10,
    Z2 = -2,
    xf = (e) => e === "*";
function J2(e, t) {
    let n = e.split("/"),
        r = n.length;
    return n.some(xf) && (r += Z2), t && (r += Y2), n.filter((o) => !xf(o)).reduce((o, i) => o + (K2.test(i) ? G2 : i === "" ? q2 : X2), r);
}
function eS(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0;
}
function tS(e, t, n) {
    let { routesMeta: r } = e,
        o = {},
        i = "/",
        s = [];
    for (let l = 0; l < r.length; ++l) {
        let a = r[l],
            u = l === r.length - 1,
            f = i === "/" ? t : t.slice(i.length) || "/",
            d = wf({ path: a.relativePath, caseSensitive: a.caseSensitive, end: u }, f),
            c = a.route;
        if ((!d && u && n && !r[r.length - 1].route.index && (d = wf({ path: a.relativePath, caseSensitive: a.caseSensitive, end: !1 }, f)), !d)) return null;
        Object.assign(o, d.params), s.push({ params: o, pathname: $r([i, d.pathname]), pathnameBase: oS($r([i, d.pathnameBase])), route: c }), d.pathnameBase !== "/" && (i = $r([i, d.pathnameBase]));
    }
    return s;
}
function wf(e, t) {
    typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
    let [n, r] = nS(e.path, e.caseSensitive, e.end),
        o = t.match(n);
    if (!o) return null;
    let i = o[0],
        s = i.replace(/(.)\/+$/, "$1"),
        l = o.slice(1);
    return {
        params: r.reduce((u, f, d) => {
            let { paramName: c, isOptional: x } = f;
            if (c === "*") {
                let m = l[d] || "";
                s = i.slice(0, i.length - m.length).replace(/(.)\/+$/, "$1");
            }
            const v = l[d];
            return x && !v ? (u[c] = void 0) : (u[c] = (v || "").replace(/%2F/g, "/")), u;
        }, {}),
        pathname: i,
        pathnameBase: s,
        pattern: e
    };
}
function nS(e, t, n) {
    t === void 0 && (t = !1),
        n === void 0 && (n = !0),
        x0(
            e === "*" || !e.endsWith("*") || e.endsWith("/*"),
            'Route path "' +
                e +
                '" will be treated as if it were ' +
                ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
                "always follow a `/` in the pattern. To get rid of this warning, " +
                ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
        );
    let r = [],
        o =
            "^" +
            e
                .replace(/\/*\*?$/, "")
                .replace(/^\/*/, "/")
                .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
                .replace(/\/:([\w-]+)(\?)?/g, (s, l, a) => (r.push({ paramName: l, isOptional: a != null }), a ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return (
        e.endsWith("*") ? (r.push({ paramName: "*" }), (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$")) : n ? (o += "\\/*$") : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
        [new RegExp(o, t ? void 0 : "i"), r]
    );
}
function rS(e) {
    try {
        return e
            .split("/")
            .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
            .join("/");
    } catch (t) {
        return x0(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e;
    }
}
function C0(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
        r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/";
}
const $r = (e) => e.join("/").replace(/\/\/+/g, "/"),
    oS = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function iS(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
const k0 = ["post", "put", "patch", "delete"];
new Set(k0);
const sS = ["get", ...k0];
new Set(sS);
/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Us() {
    return (
        (Us = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        Us.apply(this, arguments)
    );
}
const lS = S.createContext(null),
    aS = S.createContext(null),
    b0 = S.createContext(null),
    vl = S.createContext(null),
    yl = S.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
    N0 = S.createContext(null);
function Pc() {
    return S.useContext(vl) != null;
}
function P0() {
    return Pc() || tt(!1), S.useContext(vl).location;
}
function uS(e, t) {
    return cS(e, t);
}
function cS(e, t, n, r) {
    Pc() || tt(!1);
    let { navigator: o } = S.useContext(b0),
        { matches: i } = S.useContext(yl),
        s = i[i.length - 1],
        l = s ? s.params : {};
    s && s.pathname;
    let a = s ? s.pathnameBase : "/";
    s && s.route;
    let u = P0(),
        f;
    if (t) {
        var d;
        let w = typeof t == "string" ? gl(t) : t;
        a === "/" || ((d = w.pathname) != null && d.startsWith(a)) || tt(!1), (f = w);
    } else f = u;
    let c = f.pathname || "/",
        x = c;
    if (a !== "/") {
        let w = a.replace(/^\//, "").split("/");
        x = "/" + c.replace(/^\//, "").split("/").slice(w.length).join("/");
    }
    let v = H2(e, { pathname: x }),
        m = mS(
            v &&
                v.map((w) =>
                    Object.assign({}, w, {
                        params: Object.assign({}, l, w.params),
                        pathname: $r([a, o.encodeLocation ? o.encodeLocation(w.pathname).pathname : w.pathname]),
                        pathnameBase: w.pathnameBase === "/" ? a : $r([a, o.encodeLocation ? o.encodeLocation(w.pathnameBase).pathname : w.pathnameBase])
                    })
                ),
            i,
            n,
            r
        );
    return t && m ? S.createElement(vl.Provider, { value: { location: Us({ pathname: "/", search: "", hash: "", state: null, key: "default" }, f), navigationType: Rn.Pop } }, m) : m;
}
function dS() {
    let e = xS(),
        t = iS(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
        n = e instanceof Error ? e.stack : null,
        o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
    return S.createElement(
        S.Fragment,
        null,
        S.createElement("h2", null, "Unexpected Application Error!"),
        S.createElement("h3", { style: { fontStyle: "italic" } }, t),
        n ? S.createElement("pre", { style: o }, n) : null,
        null
    );
}
const fS = S.createElement(dS, null);
class pS extends S.Component {
    constructor(t) {
        super(t), (this.state = { location: t.location, revalidation: t.revalidation, error: t.error });
    }
    static getDerivedStateFromError(t) {
        return { error: t };
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || (n.revalidation !== "idle" && t.revalidation === "idle")
            ? { error: t.error, location: t.location, revalidation: t.revalidation }
            : { error: t.error !== void 0 ? t.error : n.error, location: n.location, revalidation: t.revalidation || n.revalidation };
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n);
    }
    render() {
        return this.state.error !== void 0
            ? S.createElement(yl.Provider, { value: this.props.routeContext }, S.createElement(N0.Provider, { value: this.state.error, children: this.props.component }))
            : this.props.children;
    }
}
function hS(e) {
    let { routeContext: t, match: n, children: r } = e,
        o = S.useContext(lS);
    return (
        o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id), S.createElement(yl.Provider, { value: t }, r)
    );
}
function mS(e, t, n, r) {
    var o;
    if ((t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null)) {
        var i;
        if (!n) return null;
        if (n.errors) e = n.matches;
        else if ((i = r) != null && i.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0) e = n.matches;
        else return null;
    }
    let s = e,
        l = (o = n) == null ? void 0 : o.errors;
    if (l != null) {
        let f = s.findIndex((d) => d.route.id && (l == null ? void 0 : l[d.route.id]) !== void 0);
        f >= 0 || tt(!1), (s = s.slice(0, Math.min(s.length, f + 1)));
    }
    let a = !1,
        u = -1;
    if (n && r && r.v7_partialHydration)
        for (let f = 0; f < s.length; f++) {
            let d = s[f];
            if (((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = f), d.route.id)) {
                let { loaderData: c, errors: x } = n,
                    v = d.route.loader && c[d.route.id] === void 0 && (!x || x[d.route.id] === void 0);
                if (d.route.lazy || v) {
                    (a = !0), u >= 0 ? (s = s.slice(0, u + 1)) : (s = [s[0]]);
                    break;
                }
            }
        }
    return s.reduceRight((f, d, c) => {
        let x,
            v = !1,
            m = null,
            w = null;
        n &&
            ((x = l && d.route.id ? l[d.route.id] : void 0),
            (m = d.route.errorElement || fS),
            a && (u < 0 && c === 0 ? ((v = !0), (w = null)) : u === c && ((v = !0), (w = d.route.hydrateFallbackElement || null))));
        let p = t.concat(s.slice(0, c + 1)),
            h = () => {
                let y;
                return (
                    x ? (y = m) : v ? (y = w) : d.route.Component ? (y = S.createElement(d.route.Component, null)) : d.route.element ? (y = d.route.element) : (y = f),
                    S.createElement(hS, { match: d, routeContext: { outlet: f, matches: p, isDataRoute: n != null }, children: y })
                );
            };
        return n && (d.route.ErrorBoundary || d.route.errorElement || c === 0)
            ? S.createElement(pS, { location: n.location, revalidation: n.revalidation, component: m, error: x, children: h(), routeContext: { outlet: null, matches: p, isDataRoute: !0 } })
            : h();
    }, null);
}
var cu = (function (e) {
    return (
        (e.UseBlocker = "useBlocker"),
        (e.UseLoaderData = "useLoaderData"),
        (e.UseActionData = "useActionData"),
        (e.UseRouteError = "useRouteError"),
        (e.UseNavigation = "useNavigation"),
        (e.UseRouteLoaderData = "useRouteLoaderData"),
        (e.UseMatches = "useMatches"),
        (e.UseRevalidator = "useRevalidator"),
        (e.UseNavigateStable = "useNavigate"),
        (e.UseRouteId = "useRouteId"),
        e
    );
})(cu || {});
function gS(e) {
    let t = S.useContext(aS);
    return t || tt(!1), t;
}
function vS(e) {
    let t = S.useContext(yl);
    return t || tt(!1), t;
}
function yS(e) {
    let t = vS(),
        n = t.matches[t.matches.length - 1];
    return n.route.id || tt(!1), n.route.id;
}
function xS() {
    var e;
    let t = S.useContext(N0),
        n = gS(cu.UseRouteError),
        r = yS(cu.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function du(e) {
    tt(!1);
}
function wS(e) {
    let { basename: t = "/", children: n = null, location: r, navigationType: o = Rn.Pop, navigator: i, static: s = !1, future: l } = e;
    Pc() && tt(!1);
    let a = t.replace(/^\/*/, "/"),
        u = S.useMemo(() => ({ basename: a, navigator: i, static: s, future: Us({ v7_relativeSplatPath: !1 }, l) }), [a, l, i, s]);
    typeof r == "string" && (r = gl(r));
    let { pathname: f = "/", search: d = "", hash: c = "", state: x = null, key: v = "default" } = r,
        m = S.useMemo(() => {
            let w = C0(f, a);
            return w == null ? null : { location: { pathname: w, search: d, hash: c, state: x, key: v }, navigationType: o };
        }, [a, f, d, c, x, v, o]);
    return m == null ? null : S.createElement(b0.Provider, { value: u }, S.createElement(vl.Provider, { children: n, value: m }));
}
function SS(e) {
    let { children: t, location: n } = e;
    return uS(fu(t), n);
}
new Promise(() => {});
function fu(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return (
        S.Children.forEach(e, (r, o) => {
            if (!S.isValidElement(r)) return;
            let i = [...t, o];
            if (r.type === S.Fragment) {
                n.push.apply(n, fu(r.props.children, i));
                return;
            }
            r.type !== du && tt(!1), !r.props.index || !r.props.children || tt(!1);
            let s = {
                id: r.props.id || i.join("-"),
                caseSensitive: r.props.caseSensitive,
                element: r.props.element,
                Component: r.props.Component,
                index: r.props.index,
                path: r.props.path,
                loader: r.props.loader,
                action: r.props.action,
                errorElement: r.props.errorElement,
                ErrorBoundary: r.props.ErrorBoundary,
                hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
                shouldRevalidate: r.props.shouldRevalidate,
                handle: r.props.handle,
                lazy: r.props.lazy
            };
            r.props.children && (s.children = fu(r.props.children, i)), n.push(s);
        }),
        n
    );
}
/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const ES = "6";
try {
    window.__reactRouterVersion = ES;
} catch {}
const CS = "startTransition",
    Sf = tg[CS];
function kS(e) {
    let { basename: t, children: n, future: r, window: o } = e,
        i = S.useRef();
    i.current == null && (i.current = B2({ window: o, v5Compat: !0 }));
    let s = i.current,
        [l, a] = S.useState({ action: s.action, location: s.location }),
        { v7_startTransition: u } = r || {},
        f = S.useCallback(
            (d) => {
                u && Sf ? Sf(() => a(d)) : a(d);
            },
            [a, u]
        );
    return S.useLayoutEffect(() => s.listen(f), [s, f]), S.createElement(wS, { basename: t, children: n, location: l.location, navigationType: l.action, navigator: s, future: r });
}
var Ef;
(function (e) {
    (e.UseScrollRestoration = "useScrollRestoration"),
        (e.UseSubmit = "useSubmit"),
        (e.UseSubmitFetcher = "useSubmitFetcher"),
        (e.UseFetcher = "useFetcher"),
        (e.useViewTransitionState = "useViewTransitionState");
})(Ef || (Ef = {}));
var Cf;
(function (e) {
    (e.UseFetcher = "useFetcher"), (e.UseFetchers = "useFetchers"), (e.UseScrollRestoration = "useScrollRestoration");
})(Cf || (Cf = {}));
function bS() {
    const [e, t] = S.useState(!1),
        [n, r] = S.useState(!1);
    S.useEffect(() => {
        const i = () => {
            window.scrollY > 10 ? r(!0) : r(!1);
        };
        return window.addEventListener("scroll", i), () => window.removeEventListener("scroll", i);
    }, []);
    const o = [
        { name: "Услуги", href: "#services" },
        { name: "Преимущества", href: "#features" },
        { name: "Процесс работы", href: "#process" },
        { name: "Наши работы", href: "#gallery" },
        { name: "Вопросы", href: "#faq" }
    ];
    return g.jsxs("nav", {
        className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${n ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`,
        children: [
            g.jsx("div", {
                className: "container mx-auto px-4 md:px-6",
                children: g.jsxs("div", {
                    className: "flex justify-between items-center",
                    children: [
                        g.jsxs("a", {
                            href: "/",
                            className: "text-primary font-bold text-xl md:text-2xl font-montserrat",
                            children: ["ОКНА", g.jsx("span", { className: "text-secondary", children: "ПРОФ" })]
                        }),
                        g.jsxs("div", {
                            className: "hidden md:flex items-center space-x-8",
                            children: [
                                g.jsx("ul", {
                                    className: "flex space-x-8",
                                    children: o.map((i) =>
                                        g.jsx("li", { children: g.jsx("a", { href: i.href, className: "text-gray-700 hover:text-primary font-medium transition-colors", children: i.name }) }, i.name)
                                    )
                                }),
                                g.jsxs("a", {
                                    href: "tel:+375295555555",
                                    className: "flex items-center font-semibold text-primary hover:text-primary-light transition-colors",
                                    children: [g.jsx(eu, { className: "w-4 h-4 mr-2" }), "+375 (29) 555-55-55"]
                                })
                            ]
                        }),
                        g.jsxs("div", {
                            className: "md:hidden flex items-center",
                            children: [
                                g.jsx("a", { href: "tel:+375295555555", className: "mr-4 font-semibold text-primary", children: g.jsx(eu, { className: "w-5 h-5" }) }),
                                g.jsx("button", {
                                    onClick: () => t(!e),
                                    className: "text-primary focus:outline-none",
                                    children: e ? g.jsx(Tm, { className: "w-6 h-6" }) : g.jsx(N1, { className: "w-6 h-6" })
                                })
                            ]
                        })
                    ]
                })
            }),
            e &&
                g.jsx("div", {
                    className: "md:hidden bg-white shadow-lg py-4 px-4 absolute top-full left-0 right-0",
                    children: g.jsx("ul", {
                        className: "space-y-4",
                        children: o.map((i) =>
                            g.jsx(
                                "li",
                                { children: g.jsx("a", { href: i.href, className: "block text-gray-700 hover:text-primary font-medium py-2", onClick: () => t(!1), children: i.name }) },
                                i.name
                            )
                        )
                    })
                })
        ]
    });
}
const NS = Nm(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
        {
            variants: {
                variant: {
                    default: "bg-primary text-primary-foreground hover:bg-primary/90",
                    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                    ghost: "hover:bg-accent hover:text-accent-foreground",
                    link: "text-primary underline-offset-4 hover:underline"
                },
                size: { default: "h-10 px-4 py-2", sm: "h-9 rounded-md px-3", lg: "h-11 rounded-md px-8", icon: "h-10 w-10" }
            },
            defaultVariants: { variant: "default", size: "default" }
        }
    ),
    xl = S.forwardRef(({ className: e, variant: t, size: n, asChild: r = !1, ...o }, i) => {
        const s = r ? li : "button";
        return g.jsx(s, { className: rt(NS({ variant: t, size: n, className: e })), ref: i, ...o });
    });
xl.displayName = "Button";
const pu = S.forwardRef(({ className: e, type: t, ...n }, r) =>
    g.jsx("input", {
        type: t,
        className: rt(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            e
        ),
        ref: r,
        ...n
    })
);
pu.displayName = "Input";
function T0({ buttonText: e = "Получить консультацию", className: t = "" }) {
    const [n, r] = S.useState(""),
        [o, i] = S.useState(""),
        [s, l] = S.useState(!1),
        [a, u] = S.useState(""),
        f = (d) => {
            if ((d.preventDefault(), !n.trim() || !o.trim())) {
                u("Пожалуйста, заполните все поля");
                return;
            }
            if (o.trim().length < 9) {
                u("Пожалуйста, введите корректный номер телефона");
                return;
            }
            console.log("Form submitted:", { name: n, phone: o }),
                l(!0),
                u(""),
                r(""),
                i(""),
                setTimeout(() => {
                    l(!1);
                }, 5e3);
        };
    return g.jsx("div", {
        className: `bg-white rounded-lg shadow-md p-6 ${t}`,
        children: s
            ? g.jsxs("div", {
                  className: "text-center py-8",
                  children: [
                      g.jsx("h3", { className: "text-xl font-semibold text-primary mb-2", children: "Спасибо за заявку!" }),
                      g.jsx("p", { className: "text-gray-600", children: "Мы свяжемся с вами в ближайшее время." })
                  ]
              })
            : g.jsxs("form", {
                  onSubmit: f,
                  className: "space-y-4",
                  children: [
                      g.jsx("div", {
                          children: g.jsx(pu, { type: "text", placeholder: "Ваше имя", value: n, onChange: (d) => r(d.target.value), className: "w-full p-3 border border-gray-300 rounded-md" })
                      }),
                      g.jsx("div", {
                          children: g.jsx(pu, { type: "tel", placeholder: "Ваш телефон", value: o, onChange: (d) => i(d.target.value), className: "w-full p-3 border border-gray-300 rounded-md" })
                      }),
                      a && g.jsx("p", { className: "text-red-500 text-sm", children: a }),
                      g.jsx(xl, { type: "submit", className: "w-full btn-secondary", children: e }),
                      g.jsx("p", { className: "text-xs text-gray-500 text-center mt-2", children: "Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности" })
                  ]
              })
    });
}
function PS() {
    return g.jsxs("section", {
        className: "relative min-h-screen pt-20 flex items-center",
        id: "hero",
        children: [
            g.jsxs("div", {
                className: "absolute inset-0 z-0",
                children: [
                    g.jsx("img", { src: "https://images.unsplash.com/photo-1527853787696-f7be74f2e39a?auto=format&fit=crop&q=80", alt: "Уютный интерьер", className: "w-full h-full object-cover" }),
                    g.jsx("div", { className: "absolute inset-0 bg-primary/60" })
                ]
            }),
            g.jsxs("div", {
                className: "container mx-auto px-4 md:px-6 relative z-10 py-16 md:py-24",
                children: [
                    g.jsxs("div", {
                        className: "grid md:grid-cols-2 gap-8 items-center",
                        children: [
                            g.jsxs("div", {
                                className: "text-white animate-fade-in",
                                children: [
                                    g.jsx("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4", children: "Окна, двери и балконы под ключ в Минске" }),
                                    g.jsx("p", { className: "text-xl md:text-2xl mb-8 text-white/90", children: "Гарантия 10 лет. Замер — бесплатно. Установка за 3 дня." }),
                                    g.jsx("div", { className: "hidden md:block", children: g.jsx("a", { href: "#contactForm", className: "btn-secondary inline-block", children: "Оставить заявку" }) })
                                ]
                            }),
                            g.jsx("div", { className: "md:ml-auto md:max-w-md w-full", children: g.jsx(T0, { className: "bg-white/95 backdrop-blur-sm" }) })
                        ]
                    }),
                    g.jsx("div", {
                        className: "absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center",
                        children: g.jsx("a", { href: "#services", className: "inline-block animate-bounce", children: g.jsx(d1, { className: "w-8 h-8" }) })
                    })
                ]
            })
        ]
    });
}
function TS() {
    const e = [
        { icon: g.jsx(T1, { className: "service-icon" }), title: "ПВХ-окна", description: "Энергосберегающие, надёжные профили. Тепло и тишина в вашем доме." },
        { icon: g.jsx(w1, { className: "service-icon" }), title: "Входные и межкомнатные двери", description: "Надёжная защита и стильное решение для вашего интерьера." },
        { icon: g.jsx(C1, { className: "service-icon" }), title: "Отделка балконов под ключ", description: "Утепление, вынос, остекление и внутренняя отделка балконов и лоджий." }
    ];
    return g.jsx("section", {
        id: "services",
        className: "section-padding bg-gray-50",
        children: g.jsxs("div", {
            className: "container mx-auto px-4 md:px-6",
            children: [
                g.jsx("h2", { className: "section-title text-center", children: "Наши услуги" }),
                g.jsx("p", { className: "section-subtitle text-center", children: "Мы предлагаем полный комплекс услуг по установке и отделке" }),
                g.jsx("div", {
                    className: "grid md:grid-cols-3 gap-8 mt-12",
                    children: e.map((t, n) =>
                        g.jsxs(
                            "div",
                            {
                                className: "service-card group",
                                children: [
                                    g.jsx("div", { className: "mb-6 transform transition-transform group-hover:scale-110", children: t.icon }),
                                    g.jsx("h3", { className: "text-xl font-bold mb-3 text-primary", children: t.title }),
                                    g.jsx("p", { className: "text-gray-600", children: t.description })
                                ]
                            },
                            n
                        )
                    )
                })
            ]
        })
    });
}
function jS() {
    const e = [
        { icon: g.jsx(P1, { className: "w-12 h-12 text-secondary" }), title: "Гарантия 10 лет", description: "На все монтажные работы и материалы. Мы уверены в качестве нашей работы." },
        { icon: g.jsx(O1, { className: "w-12 h-12 text-secondary" }), title: "Сертифицированные мастера", description: "Опыт наших специалистов — более 10 лет в сфере монтажа окон и дверей." },
        { icon: g.jsx(v1, { className: "w-12 h-12 text-secondary" }), title: "Работа 'под ключ'", description: "От замера до финальной уборки — мы берем на себя полный цикл работ." },
        { icon: g.jsx(mc, { className: "w-12 h-12 text-secondary" }), title: "Честные цены", description: "Никаких скрытых платежей и дополнительных услуг после замера." }
    ];
    return g.jsx("section", {
        id: "features",
        className: "section-padding",
        children: g.jsxs("div", {
            className: "container mx-auto px-4 md:px-6",
            children: [
                g.jsx("h2", { className: "section-title text-center", children: "Почему выбирают нас" }),
                g.jsx("p", { className: "section-subtitle text-center", children: "Наш опыт и подход к работе гарантируют вам качественный результат" }),
                g.jsx("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12",
                    children: e.map((t, n) =>
                        g.jsxs(
                            "div",
                            {
                                className: "card flex flex-col items-center text-center hover:border-secondary hover:border transition-all duration-300",
                                children: [
                                    g.jsx("div", { className: "mb-4", children: t.icon }),
                                    g.jsx("h3", { className: "text-xl font-bold mb-2 text-primary", children: t.title }),
                                    g.jsx("p", { className: "text-gray-600", children: t.description })
                                ]
                            },
                            n
                        )
                    )
                })
            ]
        })
    });
}
function RS() {
    const e = [
        { icon: g.jsx(x1, { className: "w-10 h-10 text-secondary" }), title: "Заявка на сайте", description: "Оставьте заявку на нашем сайте или позвоните нам." },
        { icon: g.jsx(h1, { className: "w-10 h-10 text-secondary" }), title: "Бесплатный замер", description: "Специалист приедет в удобное для вас время." },
        { icon: g.jsx(S1, { className: "w-10 h-10 text-secondary" }), title: "Коммерческое предложение", description: "Подготовим детальный расчет в течение 1 дня." },
        { icon: g.jsx(E1, { className: "w-10 h-10 text-secondary" }), title: "Установка", description: "Качественный монтаж в срок от 1 до 3 дней." },
        { icon: g.jsx(j1, { className: "w-10 h-10 text-secondary" }), title: "Готовое решение", description: "Принимаете работу и получаете гарантийный документ." }
    ];
    return g.jsx("section", {
        id: "process",
        className: "section-padding bg-gray-50",
        children: g.jsxs("div", {
            className: "container mx-auto px-4 md:px-6",
            children: [
                g.jsx("h2", { className: "section-title text-center", children: "Процесс работы" }),
                g.jsx("p", { className: "section-subtitle text-center", children: "Мы сделали наш процесс работы максимально простым и понятным для вас" }),
                g.jsxs("div", {
                    className: "relative mt-16",
                    children: [
                        g.jsx("div", { className: "hidden md:block absolute left-0 right-0 top-1/2 h-1 bg-gray-200 -translate-y-1/2" }),
                        g.jsx("div", {
                            className: "grid md:grid-cols-5 gap-8 relative",
                            children: e.map((t, n) =>
                                g.jsxs(
                                    "div",
                                    {
                                        className: "relative flex flex-col items-center text-center",
                                        children: [
                                            g.jsx("div", {
                                                className: "relative z-10 flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg border-2 border-secondary mb-4",
                                                children: g.jsx("span", { className: "text-primary font-bold text-xl", children: n + 1 })
                                            }),
                                            g.jsx("div", { className: "mb-4", children: t.icon }),
                                            g.jsx("h3", { className: "text-lg font-bold mb-2 text-primary", children: t.title }),
                                            g.jsx("p", { className: "text-gray-600 text-sm", children: t.description })
                                        ]
                                    },
                                    n
                                )
                            )
                        })
                    ]
                })
            ]
        })
    });
}
function OS() {
    const e = [
            {
                name: "Анна Петрова",
                location: "Минск, р-н Уручье",
                image: "https://randomuser.me/api/portraits/women/32.jpg",
                text: "Заказывала установку окон в квартире. Ребята сработали очень оперативно и чисто. Особенно порадовало отсутствие мусора после работ — всё убрали за собой!",
                rating: 5,
                project: "Замена окон в трехкомнатной квартире"
            },
            {
                name: "Сергей Иванов",
                location: "Минск, р-н Малиновка",
                image: "https://randomuser.me/api/portraits/men/42.jpg",
                text: "Отделывали балкон под ключ. Результат превзошел ожидания — теперь это полноценная комната, где тепло даже зимой. Мастера работали быстро и профессионально.",
                rating: 5,
                project: "Отделка и утепление балкона"
            },
            {
                name: "Елена Сидорова",
                location: "Минская обл., г. Заславль",
                image: "https://randomuser.me/api/portraits/women/54.jpg",
                text: "Заказывали входную дверь. Приехали вовремя, все установили за пару часов. Дверь отличного качества, не продувает, замок работает идеально. Рекомендую!",
                rating: 5,
                project: "Установка входной двери"
            }
        ],
        t = (n) => Array.from({ length: 5 }).map((r, o) => g.jsx(R1, { className: `w-4 h-4 ${o < n ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}` }, o));
    return g.jsx("section", {
        id: "testimonials",
        className: "section-padding",
        children: g.jsxs("div", {
            className: "container mx-auto px-4 md:px-6",
            children: [
                g.jsx("h2", { className: "section-title text-center", children: "Отзывы наших клиентов" }),
                g.jsx("p", { className: "section-subtitle text-center", children: "Более 500 клиентов уже оценили наш сервис и качество" }),
                g.jsx("div", {
                    className: "grid md:grid-cols-3 gap-8 mt-12",
                    children: e.map((n, r) =>
                        g.jsxs(
                            "div",
                            {
                                className: "card flex flex-col",
                                children: [
                                    g.jsxs("div", {
                                        className: "flex items-start mb-4",
                                        children: [
                                            g.jsx("img", { src: n.image, alt: n.name, className: "w-16 h-16 rounded-full mr-4 object-cover" }),
                                            g.jsxs("div", {
                                                children: [
                                                    g.jsx("h3", { className: "font-bold text-primary", children: n.name }),
                                                    g.jsx("p", { className: "text-gray-500 text-sm", children: n.location }),
                                                    g.jsx("div", { className: "flex mt-1", children: t(n.rating) })
                                                ]
                                            })
                                        ]
                                    }),
                                    g.jsxs("p", { className: "text-gray-600 italic mb-4", children: ['"', n.text, '"'] }),
                                    g.jsx("div", {
                                        className: "mt-auto pt-4 border-t border-gray-100",
                                        children: g.jsxs("p", { className: "text-sm text-gray-500", children: [g.jsx("span", { className: "font-semibold", children: "Проект:" }), " ", n.project] })
                                    })
                                ]
                            },
                            r
                        )
                    )
                })
            ]
        })
    });
}
function MS(e) {
    return Object.prototype.toString.call(e) === "[object Object]";
}
function kf(e) {
    return MS(e) || Array.isArray(e);
}
function AS() {
    return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Tc(e, t) {
    const n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    const o = JSON.stringify(Object.keys(e.breakpoints || {})),
        i = JSON.stringify(Object.keys(t.breakpoints || {}));
    return o !== i
        ? !1
        : n.every((s) => {
              const l = e[s],
                  a = t[s];
              return typeof l == "function" ? `${l}` == `${a}` : !kf(l) || !kf(a) ? l === a : Tc(l, a);
          });
}
function bf(e) {
    return e
        .concat()
        .sort((t, n) => (t.name > n.name ? 1 : -1))
        .map((t) => t.options);
}
function _S(e, t) {
    if (e.length !== t.length) return !1;
    const n = bf(e),
        r = bf(t);
    return n.every((o, i) => {
        const s = r[i];
        return Tc(o, s);
    });
}
function jc(e) {
    return typeof e == "number";
}
function hu(e) {
    return typeof e == "string";
}
function wl(e) {
    return typeof e == "boolean";
}
function Nf(e) {
    return Object.prototype.toString.call(e) === "[object Object]";
}
function ve(e) {
    return Math.abs(e);
}
function Rc(e) {
    return Math.sign(e);
}
function Vo(e, t) {
    return ve(e - t);
}
function LS(e, t) {
    if (e === 0 || t === 0 || ve(e) <= ve(t)) return 0;
    const n = Vo(ve(e), ve(t));
    return ve(n / e);
}
function fi(e) {
    return pi(e).map(Number);
}
function _t(e) {
    return e[ki(e)];
}
function ki(e) {
    return Math.max(0, e.length - 1);
}
function Oc(e, t) {
    return t === ki(e);
}
function Pf(e, t = 0) {
    return Array.from(Array(e), (n, r) => t + r);
}
function pi(e) {
    return Object.keys(e);
}
function j0(e, t) {
    return [e, t].reduce(
        (n, r) => (
            pi(r).forEach((o) => {
                const i = n[o],
                    s = r[o],
                    l = Nf(i) && Nf(s);
                n[o] = l ? j0(i, s) : s;
            }),
            n
        ),
        {}
    );
}
function mu(e, t) {
    return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function IS(e, t) {
    const n = { start: r, center: o, end: i };
    function r() {
        return 0;
    }
    function o(a) {
        return i(a) / 2;
    }
    function i(a) {
        return t - a;
    }
    function s(a, u) {
        return hu(e) ? n[e](a) : e(t, a, u);
    }
    return { measure: s };
}
function hi() {
    let e = [];
    function t(o, i, s, l = { passive: !0 }) {
        let a;
        if ("addEventListener" in o) o.addEventListener(i, s, l), (a = () => o.removeEventListener(i, s, l));
        else {
            const u = o;
            u.addListener(s), (a = () => u.removeListener(s));
        }
        return e.push(a), r;
    }
    function n() {
        e = e.filter((o) => o());
    }
    const r = { add: t, clear: n };
    return r;
}
function DS(e, t, n, r) {
    const o = hi(),
        i = 1e3 / 60;
    let s = null,
        l = 0,
        a = 0;
    function u() {
        o.add(e, "visibilitychange", () => {
            e.hidden && v();
        });
    }
    function f() {
        x(), o.clear();
    }
    function d(w) {
        if (!a) return;
        s || (s = w);
        const p = w - s;
        for (s = w, l += p; l >= i; ) n(i), (l -= i);
        const h = l / i;
        r(h), a && t.requestAnimationFrame(d);
    }
    function c() {
        a || (a = t.requestAnimationFrame(d));
    }
    function x() {
        t.cancelAnimationFrame(a), (s = null), (l = 0), (a = 0);
    }
    function v() {
        (s = null), (l = 0);
    }
    return { init: u, destroy: f, start: c, stop: x, update: () => n(i), render: r };
}
function zS(e, t) {
    const n = t === "rtl",
        r = e === "y",
        o = r ? "y" : "x",
        i = r ? "x" : "y",
        s = !r && n ? -1 : 1,
        l = f(),
        a = d();
    function u(v) {
        const { height: m, width: w } = v;
        return r ? m : w;
    }
    function f() {
        return r ? "top" : n ? "right" : "left";
    }
    function d() {
        return r ? "bottom" : n ? "left" : "right";
    }
    function c(v) {
        return v * s;
    }
    return { scroll: o, cross: i, startEdge: l, endEdge: a, measureSize: u, direction: c };
}
function hr(e = 0, t = 0) {
    const n = ve(e - t);
    function r(u) {
        return u < e;
    }
    function o(u) {
        return u > t;
    }
    function i(u) {
        return r(u) || o(u);
    }
    function s(u) {
        return i(u) ? (r(u) ? e : t) : u;
    }
    function l(u) {
        return n ? u - n * Math.ceil((u - t) / n) : u;
    }
    return { length: n, max: t, min: e, constrain: s, reachedAny: i, reachedMax: o, reachedMin: r, removeOffset: l };
}
function R0(e, t, n) {
    const { constrain: r } = hr(0, e),
        o = e + 1;
    let i = s(t);
    function s(c) {
        return n ? ve((o + c) % o) : r(c);
    }
    function l() {
        return i;
    }
    function a(c) {
        return (i = s(c)), d;
    }
    function u(c) {
        return f().set(l() + c);
    }
    function f() {
        return R0(e, l(), n);
    }
    const d = { get: l, set: a, add: u, clone: f };
    return d;
}
function FS(e, t, n, r, o, i, s, l, a, u, f, d, c, x, v, m, w, p, h) {
    const { cross: y, direction: E } = e,
        C = ["INPUT", "SELECT", "TEXTAREA"],
        b = { passive: !1 },
        k = hi(),
        P = hi(),
        j = hr(50, 225).constrain(x.measure(20)),
        O = { mouse: 300, touch: 400 },
        L = { mouse: 500, touch: 600 },
        D = v ? 43 : 25;
    let V = !1,
        _ = 0,
        H = 0,
        U = !1,
        W = !1,
        N = !1,
        M = !1;
    function F($) {
        if (!h) return;
        function Z(ke) {
            (wl(h) || h($, ke)) && X(ke);
        }
        const se = t;
        k.add(se, "dragstart", (ke) => ke.preventDefault(), b)
            .add(se, "touchmove", () => {}, b)
            .add(se, "touchend", () => {})
            .add(se, "touchstart", Z)
            .add(se, "mousedown", Z)
            .add(se, "touchcancel", pe)
            .add(se, "contextmenu", pe)
            .add(se, "click", Oe, !0);
    }
    function I() {
        k.clear(), P.clear();
    }
    function B() {
        const $ = M ? n : t;
        P.add($, "touchmove", ue, b).add($, "touchend", pe).add($, "mousemove", ue, b).add($, "mouseup", pe);
    }
    function K($) {
        const Z = $.nodeName || "";
        return C.includes(Z);
    }
    function J() {
        return (v ? L : O)[M ? "mouse" : "touch"];
    }
    function Ne($, Z) {
        const se = d.add(Rc($) * -1),
            ke = f.byDistance($, !v).distance;
        return v || ve($) < j ? ke : w && Z ? ke * 0.5 : f.byIndex(se.get(), 0).distance;
    }
    function X($) {
        const Z = mu($, r);
        (M = Z),
            (N = v && Z && !$.buttons && V),
            (V = Vo(o.get(), s.get()) >= 2),
            !(Z && $.button !== 0) &&
                (K($.target) || ((U = !0), i.pointerDown($), u.useFriction(0).useDuration(0), o.set(s), B(), (_ = i.readPoint($)), (H = i.readPoint($, y)), c.emit("pointerDown")));
    }
    function ue($) {
        if (!mu($, r) && $.touches.length >= 2) return pe($);
        const se = i.readPoint($),
            ke = i.readPoint($, y),
            Pe = Vo(se, _),
            ot = Vo(ke, H);
        if (!W && !M && (!$.cancelable || ((W = Pe > ot), !W))) return pe($);
        const vt = i.pointerMove($);
        Pe > m && (N = !0), u.useFriction(0.3).useDuration(0.75), l.start(), o.add(E(vt)), $.preventDefault();
    }
    function pe($) {
        const se = f.byDistance(0, !1).index !== d.get(),
            ke = i.pointerUp($) * J(),
            Pe = Ne(E(ke), se),
            ot = LS(ke, Pe),
            vt = D - 10 * ot,
            le = p + ot / 50;
        (W = !1), (U = !1), P.clear(), u.useDuration(vt).useFriction(le), a.distance(Pe, !v), (M = !1), c.emit("pointerUp");
    }
    function Oe($) {
        N && ($.stopPropagation(), $.preventDefault(), (N = !1));
    }
    function Ee() {
        return U;
    }
    return { init: F, destroy: I, pointerDown: Ee };
}
function $S(e, t) {
    let r, o;
    function i(d) {
        return d.timeStamp;
    }
    function s(d, c) {
        const v = `client${(c || e.scroll) === "x" ? "X" : "Y"}`;
        return (mu(d, t) ? d : d.touches[0])[v];
    }
    function l(d) {
        return (r = d), (o = d), s(d);
    }
    function a(d) {
        const c = s(d) - s(o),
            x = i(d) - i(r) > 170;
        return (o = d), x && (r = d), c;
    }
    function u(d) {
        if (!r || !o) return 0;
        const c = s(o) - s(r),
            x = i(d) - i(r),
            v = i(d) - i(o) > 170,
            m = c / x;
        return x && !v && ve(m) > 0.1 ? m : 0;
    }
    return { pointerDown: l, pointerMove: a, pointerUp: u, readPoint: s };
}
function BS() {
    function e(n) {
        const { offsetTop: r, offsetLeft: o, offsetWidth: i, offsetHeight: s } = n;
        return { top: r, right: o + i, bottom: r + s, left: o, width: i, height: s };
    }
    return { measure: e };
}
function US(e) {
    function t(r) {
        return e * (r / 100);
    }
    return { measure: t };
}
function VS(e, t, n, r, o, i, s) {
    const l = [e].concat(r);
    let a,
        u,
        f = [],
        d = !1;
    function c(w) {
        return o.measureSize(s.measure(w));
    }
    function x(w) {
        if (!i) return;
        (u = c(e)), (f = r.map(c));
        function p(h) {
            for (const y of h) {
                if (d) return;
                const E = y.target === e,
                    C = r.indexOf(y.target),
                    b = E ? u : f[C],
                    k = c(E ? e : r[C]);
                if (ve(k - b) >= 0.5) {
                    w.reInit(), t.emit("resize");
                    break;
                }
            }
        }
        (a = new ResizeObserver((h) => {
            (wl(i) || i(w, h)) && p(h);
        })),
            n.requestAnimationFrame(() => {
                l.forEach((h) => a.observe(h));
            });
    }
    function v() {
        (d = !0), a && a.disconnect();
    }
    return { init: x, destroy: v };
}
function HS(e, t, n, r, o, i) {
    let s = 0,
        l = 0,
        a = o,
        u = i,
        f = e.get(),
        d = 0;
    function c(b) {
        const k = b / 1e3,
            P = a * k,
            j = r.get() - e.get(),
            O = !a;
        let L = 0;
        return O ? ((s = 0), n.set(r), e.set(r), (L = j)) : (n.set(e), (s += j / P), (s *= u), (f += s), e.add(s * k), (L = f - d)), (l = Rc(L)), (d = f), C;
    }
    function x() {
        const b = r.get() - t.get();
        return ve(b) < 0.001;
    }
    function v() {
        return a;
    }
    function m() {
        return l;
    }
    function w() {
        return s;
    }
    function p() {
        return y(o);
    }
    function h() {
        return E(i);
    }
    function y(b) {
        return (a = b), C;
    }
    function E(b) {
        return (u = b), C;
    }
    const C = { direction: m, duration: v, velocity: w, seek: c, settled: x, useBaseFriction: h, useBaseDuration: p, useFriction: E, useDuration: y };
    return C;
}
function WS(e, t, n, r, o) {
    const i = o.measure(10),
        s = o.measure(50),
        l = hr(0.1, 0.99);
    let a = !1;
    function u() {
        return !(a || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
    }
    function f(x) {
        if (!u()) return;
        const v = e.reachedMin(t.get()) ? "min" : "max",
            m = ve(e[v] - t.get()),
            w = n.get() - t.get(),
            p = l.constrain(m / s);
        n.subtract(w * p), !x && ve(w) < i && (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction());
    }
    function d(x) {
        a = !x;
    }
    return { shouldConstrain: u, constrain: f, toggleActive: d };
}
function QS(e, t, n, r, o) {
    const i = hr(-t + e, 0),
        s = d(),
        l = f(),
        a = c();
    function u(v, m) {
        return Vo(v, m) < 1;
    }
    function f() {
        const v = s[0],
            m = _t(s),
            w = s.lastIndexOf(v),
            p = s.indexOf(m) + 1;
        return hr(w, p);
    }
    function d() {
        return n
            .map((v, m) => {
                const { min: w, max: p } = i,
                    h = i.constrain(v),
                    y = !m,
                    E = Oc(n, m);
                return y ? p : E || u(w, h) ? w : u(p, h) ? p : h;
            })
            .map((v) => parseFloat(v.toFixed(3)));
    }
    function c() {
        if (t <= e + o) return [i.max];
        if (r === "keepSnaps") return s;
        const { min: v, max: m } = l;
        return s.slice(v, m);
    }
    return { snapsContained: a, scrollContainLimit: l };
}
function KS(e, t, n) {
    const r = t[0],
        o = n ? r - e : _t(t);
    return { limit: hr(o, r) };
}
function GS(e, t, n, r) {
    const i = t.min + 0.1,
        s = t.max + 0.1,
        { reachedMin: l, reachedMax: a } = hr(i, s);
    function u(c) {
        return c === 1 ? a(n.get()) : c === -1 ? l(n.get()) : !1;
    }
    function f(c) {
        if (!u(c)) return;
        const x = e * (c * -1);
        r.forEach((v) => v.add(x));
    }
    return { loop: f };
}
function YS(e) {
    const { max: t, length: n } = e;
    function r(i) {
        const s = i - t;
        return n ? s / -n : 0;
    }
    return { get: r };
}
function qS(e, t, n, r, o) {
    const { startEdge: i, endEdge: s } = e,
        { groupSlides: l } = o,
        a = d().map(t.measure),
        u = c(),
        f = x();
    function d() {
        return l(r)
            .map((m) => _t(m)[s] - m[0][i])
            .map(ve);
    }
    function c() {
        return r.map((m) => n[i] - m[i]).map((m) => -ve(m));
    }
    function x() {
        return l(u)
            .map((m) => m[0])
            .map((m, w) => m + a[w]);
    }
    return { snaps: u, snapsAligned: f };
}
function XS(e, t, n, r, o, i) {
    const { groupSlides: s } = o,
        { min: l, max: a } = r,
        u = f();
    function f() {
        const c = s(i),
            x = !e || t === "keepSnaps";
        return n.length === 1
            ? [i]
            : x
            ? c
            : c.slice(l, a).map((v, m, w) => {
                  const p = !m,
                      h = Oc(w, m);
                  if (p) {
                      const y = _t(w[0]) + 1;
                      return Pf(y);
                  }
                  if (h) {
                      const y = ki(i) - _t(w)[0] + 1;
                      return Pf(y, _t(w)[0]);
                  }
                  return v;
              });
    }
    return { slideRegistry: u };
}
function ZS(e, t, n, r, o) {
    const { reachedAny: i, removeOffset: s, constrain: l } = r;
    function a(v) {
        return v.concat().sort((m, w) => ve(m) - ve(w))[0];
    }
    function u(v) {
        const m = e ? s(v) : l(v),
            w = t.map((h, y) => ({ diff: f(h - m, 0), index: y })).sort((h, y) => ve(h.diff) - ve(y.diff)),
            { index: p } = w[0];
        return { index: p, distance: m };
    }
    function f(v, m) {
        const w = [v, v + n, v - n];
        if (!e) return v;
        if (!m) return a(w);
        const p = w.filter((h) => Rc(h) === m);
        return p.length ? a(p) : _t(w) - n;
    }
    function d(v, m) {
        const w = t[v] - o.get(),
            p = f(w, m);
        return { index: v, distance: p };
    }
    function c(v, m) {
        const w = o.get() + v,
            { index: p, distance: h } = u(w),
            y = !e && i(w);
        if (!m || y) return { index: p, distance: v };
        const E = t[p] - h,
            C = v + f(E, 0);
        return { index: p, distance: C };
    }
    return { byDistance: c, byIndex: d, shortcut: f };
}
function JS(e, t, n, r, o, i, s) {
    function l(d) {
        const c = d.distance,
            x = d.index !== t.get();
        i.add(c), c && (r.duration() ? e.start() : (e.update(), e.render(1), e.update())), x && (n.set(t.get()), t.set(d.index), s.emit("select"));
    }
    function a(d, c) {
        const x = o.byDistance(d, c);
        l(x);
    }
    function u(d, c) {
        const x = t.clone().set(d),
            v = o.byIndex(x.get(), c);
        l(v);
    }
    return { distance: a, index: u };
}
function eE(e, t, n, r, o, i, s, l) {
    const a = { passive: !0, capture: !0 };
    let u = 0;
    function f(x) {
        if (!l) return;
        function v(m) {
            if (new Date().getTime() - u > 10) return;
            s.emit("slideFocusStart"), (e.scrollLeft = 0);
            const h = n.findIndex((y) => y.includes(m));
            jc(h) && (o.useDuration(0), r.index(h, 0), s.emit("slideFocus"));
        }
        i.add(document, "keydown", d, !1),
            t.forEach((m, w) => {
                i.add(
                    m,
                    "focus",
                    (p) => {
                        (wl(l) || l(x, p)) && v(w);
                    },
                    a
                );
            });
    }
    function d(x) {
        x.code === "Tab" && (u = new Date().getTime());
    }
    return { init: f };
}
function Mo(e) {
    let t = e;
    function n() {
        return t;
    }
    function r(a) {
        t = s(a);
    }
    function o(a) {
        t += s(a);
    }
    function i(a) {
        t -= s(a);
    }
    function s(a) {
        return jc(a) ? a : a.get();
    }
    return { get: n, set: r, add: o, subtract: i };
}
function O0(e, t) {
    const n = e.scroll === "x" ? i : s,
        r = t.style;
    let o = !1;
    function i(d) {
        return `translate3d(${d}px,0px,0px)`;
    }
    function s(d) {
        return `translate3d(0px,${d}px,0px)`;
    }
    function l(d) {
        o || (r.transform = n(e.direction(d)));
    }
    function a(d) {
        o = !d;
    }
    function u() {
        o || ((r.transform = ""), t.getAttribute("style") || t.removeAttribute("style"));
    }
    return { clear: u, to: l, toggleActive: a };
}
function tE(e, t, n, r, o, i, s, l, a) {
    const f = fi(o),
        d = fi(o).reverse(),
        c = p().concat(h());
    function x(k, P) {
        return k.reduce((j, O) => j - o[O], P);
    }
    function v(k, P) {
        return k.reduce((j, O) => (x(j, P) > 0 ? j.concat([O]) : j), []);
    }
    function m(k) {
        return i.map((P, j) => ({ start: P - r[j] + 0.5 + k, end: P + t - 0.5 + k }));
    }
    function w(k, P, j) {
        const O = m(P);
        return k.map((L) => {
            const D = j ? 0 : -n,
                V = j ? n : 0,
                _ = j ? "end" : "start",
                H = O[L][_];
            return { index: L, loopPoint: H, slideLocation: Mo(-1), translate: O0(e, a[L]), target: () => (l.get() > H ? D : V) };
        });
    }
    function p() {
        const k = s[0],
            P = v(d, k);
        return w(P, n, !1);
    }
    function h() {
        const k = t - s[0] - 1,
            P = v(f, k);
        return w(P, -n, !0);
    }
    function y() {
        return c.every(({ index: k }) => {
            const P = f.filter((j) => j !== k);
            return x(P, t) <= 0.1;
        });
    }
    function E() {
        c.forEach((k) => {
            const { target: P, translate: j, slideLocation: O } = k,
                L = P();
            L !== O.get() && (j.to(L), O.set(L));
        });
    }
    function C() {
        c.forEach((k) => k.translate.clear());
    }
    return { canLoop: y, clear: C, loop: E, loopPoints: c };
}
function nE(e, t, n) {
    let r,
        o = !1;
    function i(a) {
        if (!n) return;
        function u(f) {
            for (const d of f)
                if (d.type === "childList") {
                    a.reInit(), t.emit("slidesChanged");
                    break;
                }
        }
        (r = new MutationObserver((f) => {
            o || ((wl(n) || n(a, f)) && u(f));
        })),
            r.observe(e, { childList: !0 });
    }
    function s() {
        r && r.disconnect(), (o = !0);
    }
    return { init: i, destroy: s };
}
function rE(e, t, n, r) {
    const o = {};
    let i = null,
        s = null,
        l,
        a = !1;
    function u() {
        (l = new IntersectionObserver(
            (v) => {
                a ||
                    (v.forEach((m) => {
                        const w = t.indexOf(m.target);
                        o[w] = m;
                    }),
                    (i = null),
                    (s = null),
                    n.emit("slidesInView"));
            },
            { root: e.parentElement, threshold: r }
        )),
            t.forEach((v) => l.observe(v));
    }
    function f() {
        l && l.disconnect(), (a = !0);
    }
    function d(v) {
        return pi(o).reduce((m, w) => {
            const p = parseInt(w),
                { isIntersecting: h } = o[p];
            return ((v && h) || (!v && !h)) && m.push(p), m;
        }, []);
    }
    function c(v = !0) {
        if (v && i) return i;
        if (!v && s) return s;
        const m = d(v);
        return v && (i = m), v || (s = m), m;
    }
    return { init: u, destroy: f, get: c };
}
function oE(e, t, n, r, o, i) {
    const { measureSize: s, startEdge: l, endEdge: a } = e,
        u = n[0] && o,
        f = v(),
        d = m(),
        c = n.map(s),
        x = w();
    function v() {
        if (!u) return 0;
        const h = n[0];
        return ve(t[l] - h[l]);
    }
    function m() {
        if (!u) return 0;
        const h = i.getComputedStyle(_t(r));
        return parseFloat(h.getPropertyValue(`margin-${a}`));
    }
    function w() {
        return n
            .map((h, y, E) => {
                const C = !y,
                    b = Oc(E, y);
                return C ? c[y] + f : b ? c[y] + d : E[y + 1][l] - h[l];
            })
            .map(ve);
    }
    return { slideSizes: c, slideSizesWithGaps: x, startGap: f, endGap: d };
}
function iE(e, t, n, r, o, i, s, l, a) {
    const { startEdge: u, endEdge: f, direction: d } = e,
        c = jc(n);
    function x(p, h) {
        return fi(p)
            .filter((y) => y % h === 0)
            .map((y) => p.slice(y, y + h));
    }
    function v(p) {
        return p.length
            ? fi(p)
                  .reduce((h, y, E) => {
                      const C = _t(h) || 0,
                          b = C === 0,
                          k = y === ki(p),
                          P = o[u] - i[C][u],
                          j = o[u] - i[y][f],
                          O = !r && b ? d(s) : 0,
                          L = !r && k ? d(l) : 0,
                          D = ve(j - L - (P + O));
                      return E && D > t + a && h.push(y), k && h.push(p.length), h;
                  }, [])
                  .map((h, y, E) => {
                      const C = Math.max(E[y - 1] || 0);
                      return p.slice(C, h);
                  })
            : [];
    }
    function m(p) {
        return c ? x(p, n) : v(p);
    }
    return { groupSlides: m };
}
function sE(e, t, n, r, o, i, s) {
    const {
            align: l,
            axis: a,
            direction: u,
            startIndex: f,
            loop: d,
            duration: c,
            dragFree: x,
            dragThreshold: v,
            inViewThreshold: m,
            slidesToScroll: w,
            skipSnaps: p,
            containScroll: h,
            watchResize: y,
            watchSlides: E,
            watchDrag: C,
            watchFocus: b
        } = i,
        k = 2,
        P = BS(),
        j = P.measure(t),
        O = n.map(P.measure),
        L = zS(a, u),
        D = L.measureSize(j),
        V = US(D),
        _ = IS(l, D),
        H = !d && !!h,
        U = d || !!h,
        { slideSizes: W, slideSizesWithGaps: N, startGap: M, endGap: F } = oE(L, j, O, n, U, o),
        I = iE(L, D, w, d, j, O, M, F, k),
        { snaps: B, snapsAligned: K } = qS(L, _, j, O, I),
        J = -_t(B) + _t(N),
        { snapsContained: Ne, scrollContainLimit: X } = QS(D, J, K, h, k),
        ue = H ? Ne : K,
        { limit: pe } = KS(J, ue, d),
        Oe = R0(ki(ue), f, d),
        Ee = Oe.clone(),
        oe = fi(n),
        $ = ({ dragHandler: bt, scrollBody: mo, scrollBounds: vr, options: { loop: Yn } }, go) => {
            Yn || vr.constrain(bt.pointerDown()), mo.seek(go);
        },
        Z = (
            {
                scrollBody: bt,
                translate: mo,
                location: vr,
                offsetLocation: Yn,
                scrollLooper: go,
                slideLooper: vo,
                dragHandler: $t,
                animation: El,
                eventHandler: Q,
                scrollBounds: ie,
                options: { loop: ne }
            },
            it
        ) => {
            const st = bt.settled(),
                yr = !ie.shouldConstrain(),
                Pi = ne ? st : st && yr;
            Pi && !$t.pointerDown() && (El.stop(), Q.emit("settle")), Pi || Q.emit("scroll");
            const z0 = vr.get() * it + vt.get() * (1 - it);
            Yn.set(z0), ne && (go.loop(bt.direction()), vo.loop()), mo.to(Yn.get());
        },
        se = DS(
            r,
            o,
            (bt) => $(Ft, bt),
            (bt) => Z(Ft, bt)
        ),
        ke = 0.68,
        Pe = ue[Oe.get()],
        ot = Mo(Pe),
        vt = Mo(Pe),
        le = Mo(Pe),
        Ye = Mo(Pe),
        Gn = HS(ot, le, vt, Ye, c, ke),
        fo = ZS(d, ue, J, pe, Ye),
        hn = JS(se, Oe, Ee, Gn, fo, Ye, s),
        bi = YS(pe),
        po = hi(),
        ho = rE(t, n, s, m),
        { slideRegistry: Zt } = XS(H, h, ue, X, I, oe),
        Ni = eE(e, n, Zt, hn, Gn, po, s, b),
        Ft = {
            ownerDocument: r,
            ownerWindow: o,
            eventHandler: s,
            containerRect: j,
            slideRects: O,
            animation: se,
            axis: L,
            dragHandler: FS(L, e, r, o, Ye, $S(L, o), ot, se, hn, Gn, fo, Oe, s, V, x, v, p, ke, C),
            eventStore: po,
            percentOfView: V,
            index: Oe,
            indexPrevious: Ee,
            limit: pe,
            location: ot,
            offsetLocation: le,
            previousLocation: vt,
            options: i,
            resizeHandler: VS(t, s, o, n, L, y, P),
            scrollBody: Gn,
            scrollBounds: WS(pe, le, Ye, Gn, V),
            scrollLooper: GS(J, pe, le, [ot, le, vt, Ye]),
            scrollProgress: bi,
            scrollSnapList: ue.map(bi.get),
            scrollSnaps: ue,
            scrollTarget: fo,
            scrollTo: hn,
            slideLooper: tE(L, D, J, W, N, B, ue, le, n),
            slideFocus: Ni,
            slidesHandler: nE(t, s, E),
            slidesInView: ho,
            slideIndexes: oe,
            slideRegistry: Zt,
            slidesToScroll: I,
            target: Ye,
            translate: O0(L, t)
        };
    return Ft;
}
function lE() {
    let e = {},
        t;
    function n(u) {
        t = u;
    }
    function r(u) {
        return e[u] || [];
    }
    function o(u) {
        return r(u).forEach((f) => f(t, u)), a;
    }
    function i(u, f) {
        return (e[u] = r(u).concat([f])), a;
    }
    function s(u, f) {
        return (e[u] = r(u).filter((d) => d !== f)), a;
    }
    function l() {
        e = {};
    }
    const a = { init: n, emit: o, off: s, on: i, clear: l };
    return a;
}
const aE = {
    align: "center",
    axis: "x",
    container: null,
    slides: null,
    containScroll: "trimSnaps",
    direction: "ltr",
    slidesToScroll: 1,
    inViewThreshold: 0,
    breakpoints: {},
    dragFree: !1,
    dragThreshold: 10,
    loop: !1,
    skipSnaps: !1,
    duration: 25,
    startIndex: 0,
    active: !0,
    watchDrag: !0,
    watchResize: !0,
    watchSlides: !0,
    watchFocus: !0
};
function uE(e) {
    function t(i, s) {
        return j0(i, s || {});
    }
    function n(i) {
        const s = i.breakpoints || {},
            l = pi(s)
                .filter((a) => e.matchMedia(a).matches)
                .map((a) => s[a])
                .reduce((a, u) => t(a, u), {});
        return t(i, l);
    }
    function r(i) {
        return i
            .map((s) => pi(s.breakpoints || {}))
            .reduce((s, l) => s.concat(l), [])
            .map(e.matchMedia);
    }
    return { mergeOptions: t, optionsAtMedia: n, optionsMediaQueries: r };
}
function cE(e) {
    let t = [];
    function n(i, s) {
        return (t = s.filter(({ options: l }) => e.optionsAtMedia(l).active !== !1)), t.forEach((l) => l.init(i, e)), s.reduce((l, a) => Object.assign(l, { [a.name]: a }), {});
    }
    function r() {
        t = t.filter((i) => i.destroy());
    }
    return { init: n, destroy: r };
}
function Vs(e, t, n) {
    const r = e.ownerDocument,
        o = r.defaultView,
        i = uE(o),
        s = cE(i),
        l = hi(),
        a = lE(),
        { mergeOptions: u, optionsAtMedia: f, optionsMediaQueries: d } = i,
        { on: c, off: x, emit: v } = a,
        m = L;
    let w = !1,
        p,
        h = u(aE, Vs.globalOptions),
        y = u(h),
        E = [],
        C,
        b,
        k;
    function P() {
        const { container: oe, slides: $ } = y;
        b = (hu(oe) ? e.querySelector(oe) : oe) || e.children[0];
        const se = hu($) ? b.querySelectorAll($) : $;
        k = [].slice.call(se || b.children);
    }
    function j(oe) {
        const $ = sE(e, b, k, r, o, oe, a);
        if (oe.loop && !$.slideLooper.canLoop()) {
            const Z = Object.assign({}, oe, { loop: !1 });
            return j(Z);
        }
        return $;
    }
    function O(oe, $) {
        w ||
            ((h = u(h, oe)),
            (y = f(h)),
            (E = $ || E),
            P(),
            (p = j(y)),
            d([h, ...E.map(({ options: Z }) => Z)]).forEach((Z) => l.add(Z, "change", L)),
            y.active &&
                (p.translate.to(p.location.get()),
                p.animation.init(),
                p.slidesInView.init(),
                p.slideFocus.init(Ee),
                p.eventHandler.init(Ee),
                p.resizeHandler.init(Ee),
                p.slidesHandler.init(Ee),
                p.options.loop && p.slideLooper.loop(),
                b.offsetParent && k.length && p.dragHandler.init(Ee),
                (C = s.init(Ee, E))));
    }
    function L(oe, $) {
        const Z = I();
        D(), O(u({ startIndex: Z }, oe), $), a.emit("reInit");
    }
    function D() {
        p.dragHandler.destroy(),
            p.eventStore.clear(),
            p.translate.clear(),
            p.slideLooper.clear(),
            p.resizeHandler.destroy(),
            p.slidesHandler.destroy(),
            p.slidesInView.destroy(),
            p.animation.destroy(),
            s.destroy(),
            l.clear();
    }
    function V() {
        w || ((w = !0), l.clear(), D(), a.emit("destroy"), a.clear());
    }
    function _(oe, $, Z) {
        !y.active || w || (p.scrollBody.useBaseFriction().useDuration($ === !0 ? 0 : y.duration), p.scrollTo.index(oe, Z || 0));
    }
    function H(oe) {
        const $ = p.index.add(1).get();
        _($, oe, -1);
    }
    function U(oe) {
        const $ = p.index.add(-1).get();
        _($, oe, 1);
    }
    function W() {
        return p.index.add(1).get() !== I();
    }
    function N() {
        return p.index.add(-1).get() !== I();
    }
    function M() {
        return p.scrollSnapList;
    }
    function F() {
        return p.scrollProgress.get(p.location.get());
    }
    function I() {
        return p.index.get();
    }
    function B() {
        return p.indexPrevious.get();
    }
    function K() {
        return p.slidesInView.get();
    }
    function J() {
        return p.slidesInView.get(!1);
    }
    function Ne() {
        return C;
    }
    function X() {
        return p;
    }
    function ue() {
        return e;
    }
    function pe() {
        return b;
    }
    function Oe() {
        return k;
    }
    const Ee = {
        canScrollNext: W,
        canScrollPrev: N,
        containerNode: pe,
        internalEngine: X,
        destroy: V,
        off: x,
        on: c,
        emit: v,
        plugins: Ne,
        previousScrollSnap: B,
        reInit: m,
        rootNode: ue,
        scrollNext: H,
        scrollPrev: U,
        scrollProgress: F,
        scrollSnapList: M,
        scrollTo: _,
        selectedScrollSnap: I,
        slideNodes: Oe,
        slidesInView: K,
        slidesNotInView: J
    };
    return O(t, n), setTimeout(() => a.emit("init"), 0), Ee;
}
Vs.globalOptions = void 0;
function Mc(e = {}, t = []) {
    const n = S.useRef(e),
        r = S.useRef(t),
        [o, i] = S.useState(),
        [s, l] = S.useState(),
        a = S.useCallback(() => {
            o && o.reInit(n.current, r.current);
        }, [o]);
    return (
        S.useEffect(() => {
            Tc(n.current, e) || ((n.current = e), a());
        }, [e, a]),
        S.useEffect(() => {
            _S(r.current, t) || ((r.current = t), a());
        }, [t, a]),
        S.useEffect(() => {
            if (AS() && s) {
                Vs.globalOptions = Mc.globalOptions;
                const u = Vs(s, n.current, r.current);
                return i(u), () => u.destroy();
            } else i(void 0);
        }, [s, i]),
        [l, o]
    );
}
Mc.globalOptions = void 0;
const M0 = S.createContext(null);
function Sl() {
    const e = S.useContext(M0);
    if (!e) throw new Error("useCarousel must be used within a <Carousel />");
    return e;
}
const A0 = S.forwardRef(({ orientation: e = "horizontal", opts: t, setApi: n, plugins: r, className: o, children: i, ...s }, l) => {
    const [a, u] = Mc({ ...t, axis: e === "horizontal" ? "x" : "y" }, r),
        [f, d] = S.useState(!1),
        [c, x] = S.useState(!1),
        v = S.useCallback((h) => {
            h && (d(h.canScrollPrev()), x(h.canScrollNext()));
        }, []),
        m = S.useCallback(() => {
            u == null || u.scrollPrev();
        }, [u]),
        w = S.useCallback(() => {
            u == null || u.scrollNext();
        }, [u]),
        p = S.useCallback(
            (h) => {
                h.key === "ArrowLeft" ? (h.preventDefault(), m()) : h.key === "ArrowRight" && (h.preventDefault(), w());
            },
            [m, w]
        );
    return (
        S.useEffect(() => {
            !u || !n || n(u);
        }, [u, n]),
        S.useEffect(() => {
            if (u)
                return (
                    v(u),
                    u.on("reInit", v),
                    u.on("select", v),
                    () => {
                        u == null || u.off("select", v);
                    }
                );
        }, [u, v]),
        g.jsx(M0.Provider, {
            value: {
                carouselRef: a,
                api: u,
                opts: t,
                orientation: e || ((t == null ? void 0 : t.axis) === "y" ? "vertical" : "horizontal"),
                scrollPrev: m,
                scrollNext: w,
                canScrollPrev: f,
                canScrollNext: c
            },
            children: g.jsx("div", { ref: l, onKeyDownCapture: p, className: rt("relative", o), role: "region", "aria-roledescription": "carousel", ...s, children: i })
        })
    );
});
A0.displayName = "Carousel";
const _0 = S.forwardRef(({ className: e, ...t }, n) => {
    const { carouselRef: r, orientation: o } = Sl();
    return g.jsx("div", { ref: r, className: "overflow-hidden", children: g.jsx("div", { ref: n, className: rt("flex", o === "horizontal" ? "-ml-4" : "-mt-4 flex-col", e), ...t }) });
});
_0.displayName = "CarouselContent";
const L0 = S.forwardRef(({ className: e, ...t }, n) => {
    const { orientation: r } = Sl();
    return g.jsx("div", { ref: n, role: "group", "aria-roledescription": "slide", className: rt("min-w-0 shrink-0 grow-0 basis-full", r === "horizontal" ? "pl-4" : "pt-4", e), ...t });
});
L0.displayName = "CarouselItem";
const I0 = S.forwardRef(({ className: e, variant: t = "outline", size: n = "icon", ...r }, o) => {
    const { orientation: i, scrollPrev: s, canScrollPrev: l } = Sl();
    return g.jsxs(xl, {
        ref: o,
        variant: t,
        size: n,
        className: rt("absolute  h-8 w-8 rounded-full", i === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90", e),
        disabled: !l,
        onClick: s,
        ...r,
        children: [g.jsx(f1, { className: "h-4 w-4" }), g.jsx("span", { className: "sr-only", children: "Previous slide" })]
    });
});
I0.displayName = "CarouselPrevious";
const D0 = S.forwardRef(({ className: e, variant: t = "outline", size: n = "icon", ...r }, o) => {
    const { orientation: i, scrollNext: s, canScrollNext: l } = Sl();
    return g.jsxs(xl, {
        ref: o,
        variant: t,
        size: n,
        className: rt("absolute h-8 w-8 rounded-full", i === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", e),
        disabled: !l,
        onClick: s,
        ...r,
        children: [g.jsx(p1, { className: "h-4 w-4" }), g.jsx("span", { className: "sr-only", children: "Next slide" })]
    });
});
D0.displayName = "CarouselNext";
function dE() {
    const e = [
            { image: "/lovable-uploads/2edecec9-499b-40be-b250-b2f603d1675e.png", title: "Панорамное остекление", description: "Остекление загородного дома с отличным видом" },
            { image: "/lovable-uploads/23e74c81-17f6-45fc-9c7c-e3e413931675.png", title: "Обшивка балкона", description: "Внешняя отделка с использованием современных материалов" },
            { image: "/lovable-uploads/b9d94a01-7c18-4fb9-8b10-04c1064c74e4.png", title: "Утепление балкона", description: "Внутренняя отделка с качественным утеплением стен" },
            { image: "/lovable-uploads/8a05646c-8ee0-4799-a7fc-637c12bebcf9.png", title: "Установка окон", description: "Монтаж энергосберегающих стеклопакетов в квартире" },
            { image: "/lovable-uploads/746c0c64-3ab7-49ed-bf17-63844cb1965e.png", title: "Обшивка крыши балкона", description: "Надежная конструкция с использованием профлиста" },
            { image: "/lovable-uploads/3cb020a7-d4bd-49a5-9bd7-c1577a46c38e.png", title: "Установка окон в новострое", description: "Комплексное остекление частного дома" },
            { image: "/lovable-uploads/665fc008-91e0-4232-8142-e9b0d4a5181d.png", title: "Остекление лоджии", description: "Панорамное остекление с видом на город" }
        ],
        [t, n] = S.useState(0),
        [r, o] = S.useState(null),
        i = S.useCallback(
            (l) => {
                r == null || r.scrollTo(l);
            },
            [r]
        ),
        s = S.useCallback(() => {
            r && n(r.selectedScrollSnap());
        }, [r]);
    return (
        S.useEffect(() => {
            if (r)
                return (
                    s(),
                    r.on("select", s),
                    r.on("reInit", s),
                    () => {
                        r.off("select", s);
                    }
                );
        }, [r, s]),
        g.jsx("section", {
            id: "gallery",
            className: "section-padding bg-gray-50",
            children: g.jsxs("div", {
                className: "container mx-auto px-4 md:px-6",
                children: [
                    g.jsx("h2", { className: "section-title text-center", children: "Примеры наших работ" }),
                    g.jsx("p", { className: "section-subtitle text-center", children: "Ознакомьтесь с нашими проектами остекления и отделки" }),
                    g.jsx("div", {
                        className: "mt-12",
                        children: g.jsxs("div", {
                            className: "relative",
                            children: [
                                g.jsxs(A0, {
                                    className: "w-full mx-auto max-w-5xl",
                                    setApi: o,
                                    opts: { align: "start", loop: !0 },
                                    children: [
                                        g.jsx(_0, {
                                            children: e.map((l, a) =>
                                                g.jsx(
                                                    L0,
                                                    {
                                                        className: "md:basis-1/2 lg:basis-1/3 pl-4 md:pl-6",
                                                        children: g.jsxs("div", {
                                                            className: "card h-full flex flex-col",
                                                            children: [
                                                                g.jsx("div", {
                                                                    className: "relative overflow-hidden rounded-lg aspect-[4/3]",
                                                                    children: g.jsx("img", {
                                                                        src: l.image,
                                                                        alt: l.title,
                                                                        className: "w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                                                    })
                                                                }),
                                                                g.jsxs("div", {
                                                                    className: "mt-4 flex-grow",
                                                                    children: [
                                                                        g.jsx("h3", { className: "text-lg font-bold text-primary", children: l.title }),
                                                                        g.jsx("p", { className: "text-gray-600 text-sm", children: l.description })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    },
                                                    a
                                                )
                                            )
                                        }),
                                        g.jsxs("div", { className: "hidden md:block", children: [g.jsx(I0, { className: "-left-12 h-10 w-10" }), g.jsx(D0, { className: "-right-12 h-10 w-10" })] })
                                    ]
                                }),
                                g.jsx("div", {
                                    className: "flex justify-center gap-2 mt-6",
                                    children: e.map((l, a) =>
                                        g.jsx(
                                            "button",
                                            {
                                                onClick: () => i(a),
                                                className: "p-1 focus:outline-none",
                                                "aria-label": `Перейти к слайду ${a + 1}`,
                                                children: g.jsx(y1, { className: `h-4 w-4 ${t === a ? "text-secondary fill-secondary" : "text-gray-300"}` })
                                            },
                                            a
                                        )
                                    )
                                })
                            ]
                        })
                    })
                ]
            })
        })
    );
}
function fE() {
    const [e, t] = S.useState(null),
        n = [
            {
                question: "Что входит в гарантию?",
                answer: "В гарантию 10 лет входят все монтажные работы, фурнитура и профили. Если возникнут любые проблемы, связанные с качеством установки или материалов, мы устраним их бесплатно."
            },
            {
                question: "Какие сроки выполнения работ?",
                answer: "Стандартная установка окон занимает 1-2 дня, отделка балкона под ключ — 2-3 дня, установка двери — 1 день. Точные сроки зависят от объема работ и согласовываются после замера."
            },
            {
                question: "Какие профили вы используете?",
                answer: "Мы работаем с проверенными европейскими и белорусскими производителями профилей: Rehau, Salamander, КВЕ, Brusbox. Выбор конкретного профиля зависит от ваших требований и бюджета."
            },
            {
                question: "Даете ли вы официальные документы?",
                answer: "Да, мы заключаем официальный договор на все виды работ, выдаем гарантийный талон и предоставляем полный пакет документов, включая чеки и сертификаты на используемые материалы."
            },
            {
                question: "Можно ли заказать только окна без монтажа?",
                answer: "Да, вы можете заказать только изделия без монтажа, но мы рекомендуем доверить установку нашим специалистам, чтобы гарантировать качество и сохранить полную гарантию."
            }
        ],
        r = (o) => {
            t(e === o ? null : o);
        };
    return g.jsx("section", {
        id: "faq",
        className: "section-padding",
        children: g.jsxs("div", {
            className: "container mx-auto px-4 md:px-6",
            children: [
                g.jsx("h2", { className: "section-title text-center", children: "Частые вопросы" }),
                g.jsx("p", { className: "section-subtitle text-center", children: "Отвечаем на вопросы, которые часто задают наши клиенты" }),
                g.jsx("div", {
                    className: "max-w-3xl mx-auto mt-12 space-y-4",
                    children: n.map((o, i) =>
                        g.jsxs(
                            "div",
                            {
                                className: "border border-gray-200 rounded-lg overflow-hidden",
                                children: [
                                    g.jsxs("button", {
                                        className: "flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 focus:outline-none",
                                        onClick: () => r(i),
                                        children: [
                                            g.jsx("span", { className: "font-semibold text-primary", children: o.question }),
                                            e === i ? g.jsx(g1, { className: "w-5 h-5 text-primary" }) : g.jsx(m1, { className: "w-5 h-5 text-primary" })
                                        ]
                                    }),
                                    e === i && g.jsx("div", { className: "p-4 bg-gray-50 border-t border-gray-200", children: g.jsx("p", { className: "text-gray-600", children: o.answer }) })
                                ]
                            },
                            i
                        )
                    )
                })
            ]
        })
    });
}
function pE() {
    return g.jsx("section", {
        id: "contactForm",
        className: "section-padding bg-primary text-white",
        children: g.jsx("div", {
            className: "container mx-auto px-4 md:px-6",
            children: g.jsxs("div", {
                className: "grid md:grid-cols-2 gap-12 items-center",
                children: [
                    g.jsxs("div", {
                        children: [
                            g.jsxs("div", {
                                className: "flex items-center mb-6",
                                children: [g.jsx(mc, { className: "w-8 h-8 text-secondary mr-3" }), g.jsx("h2", { className: "text-2xl md:text-3xl font-bold", children: "Пока вы думали —" })]
                            }),
                            g.jsx("p", { className: "text-xl md:text-2xl mb-6", children: "в этот момент мы уже утеплили чей-то балкон." }),
                            g.jsx("p", { className: "text-lg mb-8", children: "Хватит откладывать комфорт на потом. Оставьте заявку — и получите бесплатную консультацию + расчет прямо сегодня." }),
                            g.jsxs("div", {
                                className: "flex items-center mb-2",
                                children: [
                                    g.jsx("svg", {
                                        className: "w-5 h-5 text-secondary mr-2",
                                        fill: "currentColor",
                                        viewBox: "0 0 20 20",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: g.jsx("path", {
                                            fillRule: "evenodd",
                                            d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                            clipRule: "evenodd"
                                        })
                                    }),
                                    g.jsx("p", { children: "Бесплатный замер и консультация" })
                                ]
                            }),
                            g.jsxs("div", {
                                className: "flex items-center mb-2",
                                children: [
                                    g.jsx("svg", {
                                        className: "w-5 h-5 text-secondary mr-2",
                                        fill: "currentColor",
                                        viewBox: "0 0 20 20",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: g.jsx("path", {
                                            fillRule: "evenodd",
                                            d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                            clipRule: "evenodd"
                                        })
                                    }),
                                    g.jsx("p", { children: "Точный расчет стоимости в день замера" })
                                ]
                            }),
                            g.jsxs("div", {
                                className: "flex items-center",
                                children: [
                                    g.jsx("svg", {
                                        className: "w-5 h-5 text-secondary mr-2",
                                        fill: "currentColor",
                                        viewBox: "0 0 20 20",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: g.jsx("path", {
                                            fillRule: "evenodd",
                                            d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                            clipRule: "evenodd"
                                        })
                                    }),
                                    g.jsx("p", { children: "Выезд в любую точку Минска и области" })
                                ]
                            }),
                            g.jsx("div", {
                                className: "mt-8",
                                children: g.jsx("a", { href: "tel:+375295555555", className: "text-2xl font-bold text-white hover:text-secondary transition-colors", children: "+375 (29) 555-55-55" })
                            })
                        ]
                    }),
                    g.jsx("div", { children: g.jsx(T0, { buttonText: "Получить консультацию", className: "bg-white" }) })
                ]
            })
        })
    });
}
function hE() {
    return g.jsx("footer", {
        className: "bg-gray-900 text-white py-12",
        children: g.jsxs("div", {
            className: "container mx-auto px-4 md:px-6",
            children: [
                g.jsxs("div", {
                    className: "grid md:grid-cols-3 gap-8",
                    children: [
                        g.jsxs("div", {
                            children: [
                                g.jsxs("h3", { className: "text-xl font-bold mb-4 text-secondary", children: ["ОКНА", g.jsx("span", { className: "text-white", children: "ПРОФ" })] }),
                                g.jsx("p", {
                                    className: "mb-4 text-gray-300",
                                    children: "Установка окон, дверей и отделка балконов под ключ с гарантией 10 лет. Работаем в Минске и Минской области."
                                }),
                                g.jsxs("div", {
                                    className: "flex space-x-4",
                                    children: [
                                        g.jsx("a", {
                                            href: "#",
                                            className: "bg-primary hover:bg-primary-light p-2 rounded-full transition-colors",
                                            children: g.jsx("svg", {
                                                className: "w-5 h-5",
                                                fill: "currentColor",
                                                viewBox: "0 0 24 24",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: g.jsx("path", {
                                                    d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                                                })
                                            })
                                        }),
                                        g.jsx("a", {
                                            href: "#",
                                            className: "bg-primary hover:bg-primary-light p-2 rounded-full transition-colors",
                                            children: g.jsx("svg", {
                                                className: "w-5 h-5",
                                                fill: "currentColor",
                                                viewBox: "0 0 24 24",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: g.jsx("path", {
                                                    d: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                                                })
                                            })
                                        }),
                                        g.jsx("a", {
                                            href: "#",
                                            className: "bg-primary hover:bg-primary-light p-2 rounded-full transition-colors",
                                            children: g.jsx("svg", {
                                                className: "w-5 h-5",
                                                fill: "currentColor",
                                                viewBox: "0 0 24 24",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: g.jsx("path", {
                                                    d: "M12 0C5.373 0 0 5.373 0 12c0 6.016 4.432 10.984 10.206 11.852v-8.353H7.237v-3.348h2.969V9.157c0-2.922 1.74-4.539 4.404-4.539 1.272 0 2.603.226 2.603.226v2.86h-1.466c-1.444 0-1.895.9-1.895 1.815v2.17h3.222l-.516 3.348h-2.706v8.353C19.568 22.984 24 18.016 24 12c0-6.627-5.373-12-12-12z"
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        g.jsxs("div", {
                            children: [
                                g.jsx("h3", { className: "text-xl font-bold mb-4", children: "Контакты" }),
                                g.jsxs("ul", {
                                    className: "space-y-3",
                                    children: [
                                        g.jsxs("li", {
                                            className: "flex items-start",
                                            children: [
                                                g.jsx(eu, { className: "w-5 h-5 mr-3 text-secondary mt-0.5" }),
                                                g.jsx("span", {
                                                    children: g.jsx("a", { href: "tel:+375295555555", className: "hover:text-secondary transition-colors", children: "+375 (29) 555-55-55" })
                                                })
                                            ]
                                        }),
                                        g.jsxs("li", {
                                            className: "flex items-start",
                                            children: [
                                                g.jsx(k1, { className: "w-5 h-5 mr-3 text-secondary mt-0.5" }),
                                                g.jsx("span", {
                                                    children: g.jsx("a", { href: "mailto:info@oknaprof.by", className: "hover:text-secondary transition-colors", children: "info@oknaprof.by" })
                                                })
                                            ]
                                        }),
                                        g.jsxs("li", {
                                            className: "flex items-start",
                                            children: [g.jsx(b1, { className: "w-5 h-5 mr-3 text-secondary mt-0.5" }), g.jsx("span", { children: "г. Минск, ул. Примерная, д. 123, офис 456" })]
                                        }),
                                        g.jsxs("li", {
                                            className: "flex items-start",
                                            children: [g.jsx(mc, { className: "w-5 h-5 mr-3 text-secondary mt-0.5" }), g.jsx("span", { children: "Пн-Пт: 9:00-19:00, Сб: 10:00-16:00" })]
                                        })
                                    ]
                                })
                            ]
                        }),
                        g.jsxs("div", {
                            children: [
                                g.jsx("h3", { className: "text-xl font-bold mb-4", children: "Услуги" }),
                                g.jsxs("ul", {
                                    className: "space-y-2",
                                    children: [
                                        g.jsx("li", { children: g.jsx("a", { href: "#services", className: "hover:text-secondary transition-colors", children: "Установка ПВХ-окон" }) }),
                                        g.jsx("li", { children: g.jsx("a", { href: "#services", className: "hover:text-secondary transition-colors", children: "Входные и межкомнатные двери" }) }),
                                        g.jsx("li", { children: g.jsx("a", { href: "#services", className: "hover:text-secondary transition-colors", children: "Отделка балконов под ключ" }) }),
                                        g.jsx("li", { children: g.jsx("a", { href: "#services", className: "hover:text-secondary transition-colors", children: "Утепление лоджий" }) }),
                                        g.jsx("li", { children: g.jsx("a", { href: "#services", className: "hover:text-secondary transition-colors", children: "Ремонт и обслуживание окон" }) })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                g.jsx("div", {
                    className: "mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm",
                    children: g.jsxs("p", { children: ["© ", new Date().getFullYear(), " ОКНАПРОФ. Все права защищены."] })
                })
            ]
        })
    });
}
const mE = () =>
        g.jsxs("div", {
            className: "min-h-screen",
            children: [g.jsx(bS, {}), g.jsx(PS, {}), g.jsx(TS, {}), g.jsx(jS, {}), g.jsx(RS, {}), g.jsx(OS, {}), g.jsx(dE, {}), g.jsx(fE, {}), g.jsx(pE, {}), g.jsx(hE, {})]
        }),
    gE = () => {
        const e = P0();
        return (
            S.useEffect(() => {
                console.error("404 Error: User attempted to access non-existent route:", e.pathname);
            }, [e.pathname]),
            g.jsx("div", {
                className: "min-h-screen flex items-center justify-center bg-gray-100",
                children: g.jsxs("div", {
                    className: "text-center",
                    children: [
                        g.jsx("h1", { className: "text-4xl font-bold mb-4", children: "404" }),
                        g.jsx("p", { className: "text-xl text-gray-600 mb-4", children: "Oops! Page not found" }),
                        g.jsx("a", { href: "/", className: "text-blue-500 hover:text-blue-700 underline", children: "Return to Home" })
                    ]
                })
            })
        );
    },
    vE = new z2(),
    yE = () =>
        g.jsx($2, {
            client: vE,
            children: g.jsxs(m2, {
                children: [
                    g.jsx(px, {}),
                    g.jsx(Ux, {}),
                    g.jsx(kS, { children: g.jsxs(SS, { children: [g.jsx(du, { path: "/", element: g.jsx(mE, {}) }), g.jsx(du, { path: "*", element: g.jsx(gE, {}) })] }) })
                ]
            })
        });
qh(document.getElementById("root")).render(g.jsx(yE, {}));
