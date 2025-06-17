(function(e, t) {
        var n, r, i = typeof t, o = e.location, a = e.document, s = a.documentElement, l = e.jQuery, u = e.$, c = {}, p = [], f = "1.10.2", d = p.concat, h = p.push, g = p.slice, m = p.indexOf, y = c.toString, v = c.hasOwnProperty, b = f.trim, x = function(e, t) {
            return new x.fn.init(e,t,r)
        }, w = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, T = /\S+/g, C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, k = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, E = /^[\],:{}\s]*$/, S = /(?:^|:|,)(?:\s*\[)+/g, A = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, j = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, D = /^-ms-/, L = /-([\da-z])/gi, H = function(e, t) {
            return t.toUpperCase()
        }, q = function(e) {
            (a.addEventListener || "load" === e.type || "complete" === a.readyState) && (_(),
                x.ready())
        }, _ = function() {
            a.addEventListener ? (a.removeEventListener("DOMContentLoaded", q, !1),
                e.removeEventListener("load", q, !1)) : (a.detachEvent("onreadystatechange", q),
                e.detachEvent("onload", q))
        };
        x.fn = x.prototype = {
            jquery: f,
            constructor: x,
            init: function(e, n, r) {
                var i, o;
                if (!e)
                    return this;
                if ("string" == typeof e) {
                    if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e),
                    !i || !i[1] && n)
                        return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                    if (i[1]) {
                        if (n = n instanceof x ? n[0] : n,
                            x.merge(this, x.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : a, !0)),
                        k.test(i[1]) && x.isPlainObject(n))
                            for (i in n)
                                x.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                        return this
                    }
                    if (o = a.getElementById(i[2]),
                    o && o.parentNode) {
                        if (o.id !== i[2])
                            return r.find(e);
                        this.length = 1,
                            this[0] = o
                    }
                    return this.context = a,
                        this.selector = e,
                        this
                }
                return e.nodeType ? (this.context = this[0] = e,
                    this.length = 1,
                    this) : x.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector,
                    this.context = e.context),
                    x.makeArray(e, this))
            },
            selector: "",
            length: 0,
            toArray: function() {
                return g.call(this)
            },
            get: function(e) {
                return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
            },
            pushStack: function(e) {
                var t = x.merge(this.constructor(), e);
                return t.prevObject = this,
                    t.context = this.context,
                    t
            },
            each: function(e, t) {
                return x.each(this, e, t)
            },
            ready: function(e) {
                return x.ready.promise().done(e),
                    this
            },
            slice: function() {
                return this.pushStack(g.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length
                    , n = +e + (0 > e ? t : 0);
                return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
            },
            map: function(e) {
                return this.pushStack(x.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: h,
            sort: [].sort,
            splice: [].splice
        },
            x.fn.init.prototype = x.fn,
            x.extend = x.fn.extend = function() {
                var e, n, r, i, o, a, s = arguments[0] || {}, l = 1, u = arguments.length, c = !1;
                for ("boolean" == typeof s && (c = s,
                    s = arguments[1] || {},
                    l = 2),
                     "object" == typeof s || x.isFunction(s) || (s = {}),
                     u === l && (s = this,
                         --l); u > l; l++)
                    if (null != (o = arguments[l]))
                        for (i in o)
                            e = s[i],
                                r = o[i],
                            s !== r && (c && r && (x.isPlainObject(r) || (n = x.isArray(r))) ? (n ? (n = !1,
                                a = e && x.isArray(e) ? e : []) : a = e && x.isPlainObject(e) ? e : {},
                                s[i] = x.extend(c, a, r)) : r !== t && (s[i] = r));
                return s
            }
            ,
            x.extend({
                expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
                noConflict: function(t) {
                    return e.$ === x && (e.$ = u),
                    t && e.jQuery === x && (e.jQuery = l),
                        x
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function(e) {
                    e ? x.readyWait++ : x.ready(!0)
                },
                ready: function(e) {
                    if (e === !0 ? !--x.readyWait : !x.isReady) {
                        if (!a.body)
                            return setTimeout(x.ready);
                        x.isReady = !0,
                        e !== !0 && --x.readyWait > 0 || (n.resolveWith(a, [x]),
                        x.fn.trigger && x(a).trigger("ready").off("ready"))
                    }
                },
                isFunction: function(e) {
                    return "function" === x.type(e)
                },
                isArray: Array.isArray || function(e) {
                    return "array" === x.type(e)
                }
                ,
                isWindow: function(e) {
                    return null != e && e == e.window
                },
                isNumeric: function(e) {
                    return !isNaN(parseFloat(e)) && isFinite(e)
                },
                type: function(e) {
                    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[y.call(e)] || "object" : typeof e
                },
                isPlainObject: function(e) {
                    var n;
                    if (!e || "object" !== x.type(e) || e.nodeType || x.isWindow(e))
                        return !1;
                    try {
                        if (e.constructor && !v.call(e, "constructor") && !v.call(e.constructor.prototype, "isPrototypeOf"))
                            return !1
                    } catch (r) {
                        return !1
                    }
                    if (x.support.ownLast)
                        for (n in e)
                            return v.call(e, n);
                    for (n in e)
                        ;
                    return n === t || v.call(e, n)
                },
                isEmptyObject: function(e) {
                    var t;
                    for (t in e)
                        return !1;
                    return !0
                },
                error: function(e) {
                    throw Error(e)
                },
                parseHTML: function(e, t, n) {
                    if (!e || "string" != typeof e)
                        return null;
                    "boolean" == typeof t && (n = t,
                        t = !1),
                        t = t || a;
                    var r = k.exec(e)
                        , i = !n && [];
                    return r ? [t.createElement(r[1])] : (r = x.buildFragment([e], t, i),
                    i && x(i).remove(),
                        x.merge([], r.childNodes))
                },
                parseJSON: function(n) {
                    return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = x.trim(n),
                    n && E.test(n.replace(A, "@").replace(j, "]").replace(S, ""))) ? Function("return " + n)() : (x.error("Invalid JSON: " + n),
                        t)
                },
                parseXML: function(n) {
                    var r, i;
                    if (!n || "string" != typeof n)
                        return null;
                    try {
                        e.DOMParser ? (i = new DOMParser,
                            r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"),
                            r.async = "false",
                            r.loadXML(n))
                    } catch (o) {
                        r = t
                    }
                    return r && r.documentElement && !r.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + n),
                        r
                },
                noop: function() {},
                globalEval: function(t) {
                    t && x.trim(t) && (e.execScript || function(t) {
                            e.eval.call(e, t)
                        }
                    )(t)
                },
                camelCase: function(e) {
                    return e.replace(D, "ms-").replace(L, H)
                },
                nodeName: function(e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                },
                each: function(e, t, n) {
                    var r, i = 0, o = e.length, a = M(e);
                    if (n) {
                        if (a) {
                            for (; o > i; i++)
                                if (r = t.apply(e[i], n),
                                r === !1)
                                    break
                        } else
                            for (i in e)
                                if (r = t.apply(e[i], n),
                                r === !1)
                                    break
                    } else if (a) {
                        for (; o > i; i++)
                            if (r = t.call(e[i], i, e[i]),
                            r === !1)
                                break
                    } else
                        for (i in e)
                            if (r = t.call(e[i], i, e[i]),
                            r === !1)
                                break;
                    return e
                },
                trim: b && !b.call("\ufeff ") ? function(e) {
                        return null == e ? "" : b.call(e)
                    }
                    : function(e) {
                        return null == e ? "" : (e + "").replace(C, "")
                    }
                ,
                makeArray: function(e, t) {
                    var n = t || [];
                    return null != e && (M(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : h.call(n, e)),
                        n
                },
                inArray: function(e, t, n) {
                    var r;
                    if (t) {
                        if (m)
                            return m.call(t, e, n);
                        for (r = t.length,
                                 n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                            if (n in t && t[n] === e)
                                return n
                    }
                    return -1
                },
                merge: function(e, n) {
                    var r = n.length
                        , i = e.length
                        , o = 0;
                    if ("number" == typeof r)
                        for (; r > o; o++)
                            e[i++] = n[o];
                    else
                        while (n[o] !== t)
                            e[i++] = n[o++];
                    return e.length = i,
                        e
                },
                grep: function(e, t, n) {
                    var r, i = [], o = 0, a = e.length;
                    for (n = !!n; a > o; o++)
                        r = !!t(e[o], o),
                        n !== r && i.push(e[o]);
                    return i
                },
                map: function(e, t, n) {
                    var r, i = 0, o = e.length, a = M(e), s = [];
                    if (a)
                        for (; o > i; i++)
                            r = t(e[i], i, n),
                            null != r && (s[s.length] = r);
                    else
                        for (i in e)
                            r = t(e[i], i, n),
                            null != r && (s[s.length] = r);
                    return d.apply([], s)
                },
                guid: 1,
                proxy: function(e, n) {
                    var r, i, o;
                    return "string" == typeof n && (o = e[n],
                        n = e,
                        e = o),
                        x.isFunction(e) ? (r = g.call(arguments, 2),
                            i = function() {
                                return e.apply(n || this, r.concat(g.call(arguments)))
                            }
                            ,
                            i.guid = e.guid = e.guid || x.guid++,
                            i) : t
                },
                access: function(e, n, r, i, o, a, s) {
                    var l = 0
                        , u = e.length
                        , c = null == r;
                    if ("object" === x.type(r)) {
                        o = !0;
                        for (l in r)
                            x.access(e, n, l, r[l], !0, a, s)
                    } else if (i !== t && (o = !0,
                    x.isFunction(i) || (s = !0),
                    c && (s ? (n.call(e, i),
                        n = null) : (c = n,
                            n = function(e, t, n) {
                                return c.call(x(e), n)
                            }
                    )),
                        n))
                        for (; u > l; l++)
                            n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r)));
                    return o ? e : c ? n.call(e) : u ? n(e[0], r) : a
                },
                now: function() {
                    return (new Date).getTime()
                },
                swap: function(e, t, n, r) {
                    var i, o, a = {};
                    for (o in t)
                        a[o] = e.style[o],
                            e.style[o] = t[o];
                    i = n.apply(e, r || []);
                    for (o in t)
                        e.style[o] = a[o];
                    return i
                }
            }),
            x.ready.promise = function(t) {
                if (!n)
                    if (n = x.Deferred(),
                    "complete" === a.readyState)
                        setTimeout(x.ready);
                    else if (a.addEventListener)
                        a.addEventListener("DOMContentLoaded", q, !1),
                            e.addEventListener("load", q, !1);
                    else {
                        a.attachEvent("onreadystatechange", q),
                            e.attachEvent("onload", q);
                        var r = !1;
                        try {
                            r = null == e.frameElement && a.documentElement
                        } catch (i) {}
                        r && r.doScroll && function o() {
                            if (!x.isReady) {
                                try {
                                    r.doScroll("left")
                                } catch (e) {
                                    return setTimeout(o, 50)
                                }
                                _(),
                                    x.ready()
                            }
                        }()
                    }
                return n.promise(t)
            }
            ,
            x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
                c["[object " + t + "]"] = t.toLowerCase()
            });
        function M(e) {
            var t = e.length
                , n = x.type(e);
            return x.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }
        r = x(a),
            function(e, t) {
                var n, r, i, o, a, s, l, u, c, p, f, d, h, g, m, y, v, b = "sizzle" + -new Date, w = e.document, T = 0, C = 0, N = st(), k = st(), E = st(), S = !1, A = function(e, t) {
                    return e === t ? (S = !0,
                        0) : 0
                }, j = typeof t, D = 1 << 31, L = {}.hasOwnProperty, H = [], q = H.pop, _ = H.push, M = H.push, O = H.slice, F = H.indexOf || function(e) {
                    var t = 0
                        , n = this.length;
                    for (; n > t; t++)
                        if (this[t] === e)
                            return t;
                    return -1
                }
                    , B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", P = "[\\x20\\t\\r\\n\\f]", R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", W = R.replace("w", "w#"), $ = "\\[" + P + "*(" + R + ")" + P + "*(?:([*^$|!~]?=)" + P + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + W + ")|)|)" + P + "*\\]", I = ":(" + R + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + $.replace(3, 8) + ")*)|.*)\\)|)", z = RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"), X = RegExp("^" + P + "*," + P + "*"), U = RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"), V = RegExp(P + "*[+~]"), Y = RegExp("=" + P + "*([^\\]'\"]*)" + P + "*\\]", "g"), J = RegExp(I), G = RegExp("^" + W + "$"), Q = {
                    ID: RegExp("^#(" + R + ")"),
                    CLASS: RegExp("^\\.(" + R + ")"),
                    TAG: RegExp("^(" + R.replace("w", "w*") + ")"),
                    ATTR: RegExp("^" + $),
                    PSEUDO: RegExp("^" + I),
                    CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
                    bool: RegExp("^(?:" + B + ")$", "i"),
                    needsContext: RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
                }, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, et = /^(?:input|select|textarea|button)$/i, tt = /^h\d$/i, nt = /'|\\/g, rt = RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"), it = function(e, t, n) {
                    var r = "0x" + t - 65536;
                    return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
                };
                try {
                    M.apply(H = O.call(w.childNodes), w.childNodes),
                        H[w.childNodes.length].nodeType
                } catch (ot) {
                    M = {
                        apply: H.length ? function(e, t) {
                                _.apply(e, O.call(t))
                            }
                            : function(e, t) {
                                var n = e.length
                                    , r = 0;
                                while (e[n++] = t[r++])
                                    ;
                                e.length = n - 1
                            }
                    }
                }
                function at(e, t, n, i) {
                    var o, a, s, l, u, c, d, m, y, x;
                    if ((t ? t.ownerDocument || t : w) !== f && p(t),
                        t = t || f,
                        n = n || [],
                    !e || "string" != typeof e)
                        return n;
                    if (1 !== (l = t.nodeType) && 9 !== l)
                        return [];
                    if (h && !i) {
                        if (o = Z.exec(e))
                            if (s = o[1]) {
                                if (9 === l) {
                                    if (a = t.getElementById(s),
                                    !a || !a.parentNode)
                                        return n;
                                    if (a.id === s)
                                        return n.push(a),
                                            n
                                } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(s)) && v(t, a) && a.id === s)
                                    return n.push(a),
                                        n
                            } else {
                                if (o[2])
                                    return M.apply(n, t.getElementsByTagName(e)),
                                        n;
                                if ((s = o[3]) && r.getElementsByClassName && t.getElementsByClassName)
                                    return M.apply(n, t.getElementsByClassName(s)),
                                        n
                            }
                        if (r.qsa && (!g || !g.test(e))) {
                            if (m = d = b,
                                y = t,
                                x = 9 === l && e,
                            1 === l && "object" !== t.nodeName.toLowerCase()) {
                                c = mt(e),
                                    (d = t.getAttribute("id")) ? m = d.replace(nt, "\\$&") : t.setAttribute("id", m),
                                    m = "[id='" + m + "'] ",
                                    u = c.length;
                                while (u--)
                                    c[u] = m + yt(c[u]);
                                y = V.test(e) && t.parentNode || t,
                                    x = c.join(",")
                            }
                            if (x)
                                try {
                                    return M.apply(n, y.querySelectorAll(x)),
                                        n
                                } catch (T) {} finally {
                                    d || t.removeAttribute("id")
                                }
                        }
                    }
                    return kt(e.replace(z, "$1"), t, n, i)
                }
                function st() {
                    var e = [];
                    function t(n, r) {
                        return e.push(n += " ") > o.cacheLength && delete t[e.shift()],
                            t[n] = r
                    }
                    return t
                }
                function lt(e) {
                    return e[b] = !0,
                        e
                }
                function ut(e) {
                    var t = f.createElement("div");
                    try {
                        return !!e(t)
                    } catch (n) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t),
                            t = null
                    }
                }
                function ct(e, t) {
                    var n = e.split("|")
                        , r = e.length;
                    while (r--)
                        o.attrHandle[n[r]] = t
                }
                function pt(e, t) {
                    var n = t && e
                        , r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D);
                    if (r)
                        return r;
                    if (n)
                        while (n = n.nextSibling)
                            if (n === t)
                                return -1;
                    return e ? 1 : -1
                }
                function ft(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return "input" === n && t.type === e
                    }
                }
                function dt(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }
                function ht(e) {
                    return lt(function(t) {
                        return t = +t,
                            lt(function(n, r) {
                                var i, o = e([], n.length, t), a = o.length;
                                while (a--)
                                    n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                            })
                    })
                }
                s = at.isXML = function(e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return t ? "HTML" !== t.nodeName : !1
                }
                    ,
                    r = at.support = {},
                    p = at.setDocument = function(e) {
                        var n = e ? e.ownerDocument || e : w
                            , i = n.defaultView;
                        return n !== f && 9 === n.nodeType && n.documentElement ? (f = n,
                            d = n.documentElement,
                            h = !s(n),
                        i && i.attachEvent && i !== i.top && i.attachEvent("onbeforeunload", function() {
                            p()
                        }),
                            r.attributes = ut(function(e) {
                                return e.className = "i",
                                    !e.getAttribute("className")
                            }),
                            r.getElementsByTagName = ut(function(e) {
                                return e.appendChild(n.createComment("")),
                                    !e.getElementsByTagName("*").length
                            }),
                            r.getElementsByClassName = ut(function(e) {
                                return e.innerHTML = "<div class='a'></div><div class='a i'></div>",
                                    e.firstChild.className = "i",
                                2 === e.getElementsByClassName("i").length
                            }),
                            r.getById = ut(function(e) {
                                return d.appendChild(e).id = b,
                                !n.getElementsByName || !n.getElementsByName(b).length
                            }),
                            r.getById ? (o.find.ID = function(e, t) {
                                    if (typeof t.getElementById !== j && h) {
                                        var n = t.getElementById(e);
                                        return n && n.parentNode ? [n] : []
                                    }
                                }
                                    ,
                                    o.filter.ID = function(e) {
                                        var t = e.replace(rt, it);
                                        return function(e) {
                                            return e.getAttribute("id") === t
                                        }
                                    }
                            ) : (delete o.find.ID,
                                    o.filter.ID = function(e) {
                                        var t = e.replace(rt, it);
                                        return function(e) {
                                            var n = typeof e.getAttributeNode !== j && e.getAttributeNode("id");
                                            return n && n.value === t
                                        }
                                    }
                            ),
                            o.find.TAG = r.getElementsByTagName ? function(e, n) {
                                    return typeof n.getElementsByTagName !== j ? n.getElementsByTagName(e) : t
                                }
                                : function(e, t) {
                                    var n, r = [], i = 0, o = t.getElementsByTagName(e);
                                    if ("*" === e) {
                                        while (n = o[i++])
                                            1 === n.nodeType && r.push(n);
                                        return r
                                    }
                                    return o
                                }
                            ,
                            o.find.CLASS = r.getElementsByClassName && function(e, n) {
                                return typeof n.getElementsByClassName !== j && h ? n.getElementsByClassName(e) : t
                            }
                            ,
                            m = [],
                            g = [],
                        (r.qsa = K.test(n.querySelectorAll)) && (ut(function(e) {
                            e.innerHTML = "<select><option selected=''></option></select>",
                            e.querySelectorAll("[selected]").length || g.push("\\[" + P + "*(?:value|" + B + ")"),
                            e.querySelectorAll(":checked").length || g.push(":checked")
                        }),
                            ut(function(e) {
                                var t = n.createElement("input");
                                t.setAttribute("type", "hidden"),
                                    e.appendChild(t).setAttribute("t", ""),
                                e.querySelectorAll("[t^='']").length && g.push("[*^$]=" + P + "*(?:''|\"\")"),
                                e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"),
                                    e.querySelectorAll("*,:x"),
                                    g.push(",.*:")
                            })),
                        (r.matchesSelector = K.test(y = d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ut(function(e) {
                            r.disconnectedMatch = y.call(e, "div"),
                                y.call(e, "[s!='']:x"),
                                m.push("!=", I)
                        }),
                            g = g.length && RegExp(g.join("|")),
                            m = m.length && RegExp(m.join("|")),
                            v = K.test(d.contains) || d.compareDocumentPosition ? function(e, t) {
                                    var n = 9 === e.nodeType ? e.documentElement : e
                                        , r = t && t.parentNode;
                                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                                }
                                : function(e, t) {
                                    if (t)
                                        while (t = t.parentNode)
                                            if (t === e)
                                                return !0;
                                    return !1
                                }
                            ,
                            A = d.compareDocumentPosition ? function(e, t) {
                                    if (e === t)
                                        return S = !0,
                                            0;
                                    var i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
                                    return i ? 1 & i || !r.sortDetached && t.compareDocumentPosition(e) === i ? e === n || v(w, e) ? -1 : t === n || v(w, t) ? 1 : c ? F.call(c, e) - F.call(c, t) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                                }
                                : function(e, t) {
                                    var r, i = 0, o = e.parentNode, a = t.parentNode, s = [e], l = [t];
                                    if (e === t)
                                        return S = !0,
                                            0;
                                    if (!o || !a)
                                        return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : c ? F.call(c, e) - F.call(c, t) : 0;
                                    if (o === a)
                                        return pt(e, t);
                                    r = e;
                                    while (r = r.parentNode)
                                        s.unshift(r);
                                    r = t;
                                    while (r = r.parentNode)
                                        l.unshift(r);
                                    while (s[i] === l[i])
                                        i++;
                                    return i ? pt(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0
                                }
                            ,
                            n) : f
                    }
                    ,
                    at.matches = function(e, t) {
                        return at(e, null, null, t)
                    }
                    ,
                    at.matchesSelector = function(e, t) {
                        if ((e.ownerDocument || e) !== f && p(e),
                            t = t.replace(Y, "='$1']"),
                            !(!r.matchesSelector || !h || m && m.test(t) || g && g.test(t)))
                            try {
                                var n = y.call(e, t);
                                if (n || r.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                                    return n
                            } catch (i) {}
                        return at(t, f, null, [e]).length > 0
                    }
                    ,
                    at.contains = function(e, t) {
                        return (e.ownerDocument || e) !== f && p(e),
                            v(e, t)
                    }
                    ,
                    at.attr = function(e, n) {
                        (e.ownerDocument || e) !== f && p(e);
                        var i = o.attrHandle[n.toLowerCase()]
                            , a = i && L.call(o.attrHandle, n.toLowerCase()) ? i(e, n, !h) : t;
                        return a === t ? r.attributes || !h ? e.getAttribute(n) : (a = e.getAttributeNode(n)) && a.specified ? a.value : null : a
                    }
                    ,
                    at.error = function(e) {
                        throw Error("Syntax error, unrecognized expression: " + e)
                    }
                    ,
                    at.uniqueSort = function(e) {
                        var t, n = [], i = 0, o = 0;
                        if (S = !r.detectDuplicates,
                            c = !r.sortStable && e.slice(0),
                            e.sort(A),
                            S) {
                            while (t = e[o++])
                                t === e[o] && (i = n.push(o));
                            while (i--)
                                e.splice(n[i], 1)
                        }
                        return e
                    }
                    ,
                    a = at.getText = function(e) {
                        var t, n = "", r = 0, i = e.nodeType;
                        if (i) {
                            if (1 === i || 9 === i || 11 === i) {
                                if ("string" == typeof e.textContent)
                                    return e.textContent;
                                for (e = e.firstChild; e; e = e.nextSibling)
                                    n += a(e)
                            } else if (3 === i || 4 === i)
                                return e.nodeValue
                        } else
                            for (; t = e[r]; r++)
                                n += a(t);
                        return n
                    }
                    ,
                    o = at.selectors = {
                        cacheLength: 50,
                        createPseudo: lt,
                        match: Q,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: !0
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: !0
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function(e) {
                                return e[1] = e[1].replace(rt, it),
                                    e[3] = (e[4] || e[5] || "").replace(rt, it),
                                "~=" === e[2] && (e[3] = " " + e[3] + " "),
                                    e.slice(0, 4)
                            },
                            CHILD: function(e) {
                                return e[1] = e[1].toLowerCase(),
                                    "nth" === e[1].slice(0, 3) ? (e[3] || at.error(e[0]),
                                        e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                                        e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && at.error(e[0]),
                                    e
                            },
                            PSEUDO: function(e) {
                                var n, r = !e[5] && e[2];
                                return Q.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && J.test(r) && (n = mt(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n),
                                    e[2] = r.slice(0, n)),
                                    e.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function(e) {
                                var t = e.replace(rt, it).toLowerCase();
                                return "*" === e ? function() {
                                        return !0
                                    }
                                    : function(e) {
                                        return e.nodeName && e.nodeName.toLowerCase() === t
                                    }
                            },
                            CLASS: function(e) {
                                var t = N[e + " "];
                                return t || (t = RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && N(e, function(e) {
                                    return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== j && e.getAttribute("class") || "")
                                })
                            },
                            ATTR: function(e, t, n) {
                                return function(r) {
                                    var i = at.attr(r, e);
                                    return null == i ? "!=" === t : t ? (i += "",
                                        "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                                }
                            },
                            CHILD: function(e, t, n, r, i) {
                                var o = "nth" !== e.slice(0, 3)
                                    , a = "last" !== e.slice(-4)
                                    , s = "of-type" === t;
                                return 1 === r && 0 === i ? function(e) {
                                        return !!e.parentNode
                                    }
                                    : function(t, n, l) {
                                        var u, c, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling", m = t.parentNode, y = s && t.nodeName.toLowerCase(), v = !l && !s;
                                        if (m) {
                                            if (o) {
                                                while (g) {
                                                    p = t;
                                                    while (p = p[g])
                                                        if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType)
                                                            return !1;
                                                    h = g = "only" === e && !h && "nextSibling"
                                                }
                                                return !0
                                            }
                                            if (h = [a ? m.firstChild : m.lastChild],
                                            a && v) {
                                                c = m[b] || (m[b] = {}),
                                                    u = c[e] || [],
                                                    d = u[0] === T && u[1],
                                                    f = u[0] === T && u[2],
                                                    p = d && m.childNodes[d];
                                                while (p = ++d && p && p[g] || (f = d = 0) || h.pop())
                                                    if (1 === p.nodeType && ++f && p === t) {
                                                        c[e] = [T, d, f];
                                                        break
                                                    }
                                            } else if (v && (u = (t[b] || (t[b] = {}))[e]) && u[0] === T)
                                                f = u[1];
                                            else
                                                while (p = ++d && p && p[g] || (f = d = 0) || h.pop())
                                                    if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[b] || (p[b] = {}))[e] = [T, f]),
                                                    p === t))
                                                        break;
                                            return f -= i,
                                            f === r || 0 === f % r && f / r >= 0
                                        }
                                    }
                            },
                            PSEUDO: function(e, t) {
                                var n, r = o.pseudos[e] || o.setFilters[e.toLowerCase()] || at.error("unsupported pseudo: " + e);
                                return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t],
                                        o.setFilters.hasOwnProperty(e.toLowerCase()) ? lt(function(e, n) {
                                            var i, o = r(e, t), a = o.length;
                                            while (a--)
                                                i = F.call(e, o[a]),
                                                    e[i] = !(n[i] = o[a])
                                        }) : function(e) {
                                            return r(e, 0, n)
                                        }
                                ) : r
                            }
                        },
                        pseudos: {
                            not: lt(function(e) {
                                var t = []
                                    , n = []
                                    , r = l(e.replace(z, "$1"));
                                return r[b] ? lt(function(e, t, n, i) {
                                    var o, a = r(e, null, i, []), s = e.length;
                                    while (s--)
                                        (o = a[s]) && (e[s] = !(t[s] = o))
                                }) : function(e, i, o) {
                                    return t[0] = e,
                                        r(t, null, o, n),
                                        !n.pop()
                                }
                            }),
                            has: lt(function(e) {
                                return function(t) {
                                    return at(e, t).length > 0
                                }
                            }),
                            contains: lt(function(e) {
                                return function(t) {
                                    return (t.textContent || t.innerText || a(t)).indexOf(e) > -1
                                }
                            }),
                            lang: lt(function(e) {
                                return G.test(e || "") || at.error("unsupported lang: " + e),
                                    e = e.replace(rt, it).toLowerCase(),
                                    function(t) {
                                        var n;
                                        do {
                                            if (n = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                                return n = n.toLowerCase(),
                                                n === e || 0 === n.indexOf(e + "-")
                                        } while ((t = t.parentNode) && 1 === t.nodeType);
                                        return !1
                                    }
                            }),
                            target: function(t) {
                                var n = e.location && e.location.hash;
                                return n && n.slice(1) === t.id
                            },
                            root: function(e) {
                                return e === d
                            },
                            focus: function(e) {
                                return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                            },
                            enabled: function(e) {
                                return e.disabled === !1
                            },
                            disabled: function(e) {
                                return e.disabled === !0
                            },
                            checked: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && !!e.checked || "option" === t && !!e.selected
                            },
                            selected: function(e) {
                                return e.parentNode && e.parentNode.selectedIndex,
                                e.selected === !0
                            },
                            empty: function(e) {
                                for (e = e.firstChild; e; e = e.nextSibling)
                                    if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType)
                                        return !1;
                                return !0
                            },
                            parent: function(e) {
                                return !o.pseudos.empty(e)
                            },
                            header: function(e) {
                                return tt.test(e.nodeName)
                            },
                            input: function(e) {
                                return et.test(e.nodeName)
                            },
                            button: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && "button" === e.type || "button" === t
                            },
                            text: function(e) {
                                var t;
                                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                            },
                            first: ht(function() {
                                return [0]
                            }),
                            last: ht(function(e, t) {
                                return [t - 1]
                            }),
                            eq: ht(function(e, t, n) {
                                return [0 > n ? n + t : n]
                            }),
                            even: ht(function(e, t) {
                                var n = 0;
                                for (; t > n; n += 2)
                                    e.push(n);
                                return e
                            }),
                            odd: ht(function(e, t) {
                                var n = 1;
                                for (; t > n; n += 2)
                                    e.push(n);
                                return e
                            }),
                            lt: ht(function(e, t, n) {
                                var r = 0 > n ? n + t : n;
                                for (; --r >= 0; )
                                    e.push(r);
                                return e
                            }),
                            gt: ht(function(e, t, n) {
                                var r = 0 > n ? n + t : n;
                                for (; t > ++r; )
                                    e.push(r);
                                return e
                            })
                        }
                    },
                    o.pseudos.nth = o.pseudos.eq;
                for (n in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                })
                    o.pseudos[n] = ft(n);
                for (n in {
                    submit: !0,
                    reset: !0
                })
                    o.pseudos[n] = dt(n);
                function gt() {}
                gt.prototype = o.filters = o.pseudos,
                    o.setFilters = new gt;
                function mt(e, t) {
                    var n, r, i, a, s, l, u, c = k[e + " "];
                    if (c)
                        return t ? 0 : c.slice(0);
                    s = e,
                        l = [],
                        u = o.preFilter;
                    while (s) {
                        (!n || (r = X.exec(s))) && (r && (s = s.slice(r[0].length) || s),
                            l.push(i = [])),
                            n = !1,
                        (r = U.exec(s)) && (n = r.shift(),
                            i.push({
                                value: n,
                                type: r[0].replace(z, " ")
                            }),
                            s = s.slice(n.length));
                        for (a in o.filter)
                            !(r = Q[a].exec(s)) || u[a] && !(r = u[a](r)) || (n = r.shift(),
                                i.push({
                                    value: n,
                                    type: a,
                                    matches: r
                                }),
                                s = s.slice(n.length));
                        if (!n)
                            break
                    }
                    return t ? s.length : s ? at.error(e) : k(e, l).slice(0)
                }
                function yt(e) {
                    var t = 0
                        , n = e.length
                        , r = "";
                    for (; n > t; t++)
                        r += e[t].value;
                    return r
                }
                function vt(e, t, n) {
                    var r = t.dir
                        , o = n && "parentNode" === r
                        , a = C++;
                    return t.first ? function(t, n, i) {
                            while (t = t[r])
                                if (1 === t.nodeType || o)
                                    return e(t, n, i)
                        }
                        : function(t, n, s) {
                            var l, u, c, p = T + " " + a;
                            if (s) {
                                while (t = t[r])
                                    if ((1 === t.nodeType || o) && e(t, n, s))
                                        return !0
                            } else
                                while (t = t[r])
                                    if (1 === t.nodeType || o)
                                        if (c = t[b] || (t[b] = {}),
                                        (u = c[r]) && u[0] === p) {
                                            if ((l = u[1]) === !0 || l === i)
                                                return l === !0
                                        } else if (u = c[r] = [p],
                                            u[1] = e(t, n, s) || i,
                                        u[1] === !0)
                                            return !0
                        }
                }
                function bt(e) {
                    return e.length > 1 ? function(t, n, r) {
                            var i = e.length;
                            while (i--)
                                if (!e[i](t, n, r))
                                    return !1;
                            return !0
                        }
                        : e[0]
                }
                function xt(e, t, n, r, i) {
                    var o, a = [], s = 0, l = e.length, u = null != t;
                    for (; l > s; s++)
                        (o = e[s]) && (!n || n(o, r, i)) && (a.push(o),
                        u && t.push(s));
                    return a
                }
                function wt(e, t, n, r, i, o) {
                    return r && !r[b] && (r = wt(r)),
                    i && !i[b] && (i = wt(i, o)),
                        lt(function(o, a, s, l) {
                            var u, c, p, f = [], d = [], h = a.length, g = o || Nt(t || "*", s.nodeType ? [s] : s, []), m = !e || !o && t ? g : xt(g, f, e, s, l), y = n ? i || (o ? e : h || r) ? [] : a : m;
                            if (n && n(m, y, s, l),
                                r) {
                                u = xt(y, d),
                                    r(u, [], s, l),
                                    c = u.length;
                                while (c--)
                                    (p = u[c]) && (y[d[c]] = !(m[d[c]] = p))
                            }
                            if (o) {
                                if (i || e) {
                                    if (i) {
                                        u = [],
                                            c = y.length;
                                        while (c--)
                                            (p = y[c]) && u.push(m[c] = p);
                                        i(null, y = [], u, l)
                                    }
                                    c = y.length;
                                    while (c--)
                                        (p = y[c]) && (u = i ? F.call(o, p) : f[c]) > -1 && (o[u] = !(a[u] = p))
                                }
                            } else
                                y = xt(y === a ? y.splice(h, y.length) : y),
                                    i ? i(null, a, y, l) : M.apply(a, y)
                        })
                }
                function Tt(e) {
                    var t, n, r, i = e.length, a = o.relative[e[0].type], s = a || o.relative[" "], l = a ? 1 : 0, c = vt(function(e) {
                        return e === t
                    }, s, !0), p = vt(function(e) {
                        return F.call(t, e) > -1
                    }, s, !0), f = [function(e, n, r) {
                        return !a && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r))
                    }
                    ];
                    for (; i > l; l++)
                        if (n = o.relative[e[l].type])
                            f = [vt(bt(f), n)];
                        else {
                            if (n = o.filter[e[l].type].apply(null, e[l].matches),
                                n[b]) {
                                for (r = ++l; i > r; r++)
                                    if (o.relative[e[r].type])
                                        break;
                                return wt(l > 1 && bt(f), l > 1 && yt(e.slice(0, l - 1).concat({
                                    value: " " === e[l - 2].type ? "*" : ""
                                })).replace(z, "$1"), n, r > l && Tt(e.slice(l, r)), i > r && Tt(e = e.slice(r)), i > r && yt(e))
                            }
                            f.push(n)
                        }
                    return bt(f)
                }
                function Ct(e, t) {
                    var n = 0
                        , r = t.length > 0
                        , a = e.length > 0
                        , s = function(s, l, c, p, d) {
                        var h, g, m, y = [], v = 0, b = "0", x = s && [], w = null != d, C = u, N = s || a && o.find.TAG("*", d && l.parentNode || l), k = T += null == C ? 1 : Math.random() || .1;
                        for (w && (u = l !== f && l,
                            i = n); null != (h = N[b]); b++) {
                            if (a && h) {
                                g = 0;
                                while (m = e[g++])
                                    if (m(h, l, c)) {
                                        p.push(h);
                                        break
                                    }
                                w && (T = k,
                                    i = ++n)
                            }
                            r && ((h = !m && h) && v--,
                            s && x.push(h))
                        }
                        if (v += b,
                        r && b !== v) {
                            g = 0;
                            while (m = t[g++])
                                m(x, y, l, c);
                            if (s) {
                                if (v > 0)
                                    while (b--)
                                        x[b] || y[b] || (y[b] = q.call(p));
                                y = xt(y)
                            }
                            M.apply(p, y),
                            w && !s && y.length > 0 && v + t.length > 1 && at.uniqueSort(p)
                        }
                        return w && (T = k,
                            u = C),
                            x
                    };
                    return r ? lt(s) : s
                }
                l = at.compile = function(e, t) {
                    var n, r = [], i = [], o = E[e + " "];
                    if (!o) {
                        t || (t = mt(e)),
                            n = t.length;
                        while (n--)
                            o = Tt(t[n]),
                                o[b] ? r.push(o) : i.push(o);
                        o = E(e, Ct(i, r))
                    }
                    return o
                }
                ;
                function Nt(e, t, n) {
                    var r = 0
                        , i = t.length;
                    for (; i > r; r++)
                        at(e, t[r], n);
                    return n
                }
                function kt(e, t, n, i) {
                    var a, s, u, c, p, f = mt(e);
                    if (!i && 1 === f.length) {
                        if (s = f[0] = f[0].slice(0),
                        s.length > 2 && "ID" === (u = s[0]).type && r.getById && 9 === t.nodeType && h && o.relative[s[1].type]) {
                            if (t = (o.find.ID(u.matches[0].replace(rt, it), t) || [])[0],
                                !t)
                                return n;
                            e = e.slice(s.shift().value.length)
                        }
                        a = Q.needsContext.test(e) ? 0 : s.length;
                        while (a--) {
                            if (u = s[a],
                                o.relative[c = u.type])
                                break;
                            if ((p = o.find[c]) && (i = p(u.matches[0].replace(rt, it), V.test(s[0].type) && t.parentNode || t))) {
                                if (s.splice(a, 1),
                                    e = i.length && yt(s),
                                    !e)
                                    return M.apply(n, i),
                                        n;
                                break
                            }
                        }
                    }
                    return l(e, f)(i, t, !h, n, V.test(e)),
                        n
                }
                r.sortStable = b.split("").sort(A).join("") === b,
                    r.detectDuplicates = S,
                    p(),
                    r.sortDetached = ut(function(e) {
                        return 1 & e.compareDocumentPosition(f.createElement("div"))
                    }),
                ut(function(e) {
                    return e.innerHTML = "<a href='#'></a>",
                    "#" === e.firstChild.getAttribute("href")
                }) || ct("type|href|height|width", function(e, n, r) {
                    return r ? t : e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2)
                }),
                r.attributes && ut(function(e) {
                    return e.innerHTML = "<input/>",
                        e.firstChild.setAttribute("value", ""),
                    "" === e.firstChild.getAttribute("value")
                }) || ct("value", function(e, n, r) {
                    return r || "input" !== e.nodeName.toLowerCase() ? t : e.defaultValue
                }),
                ut(function(e) {
                    return null == e.getAttribute("disabled")
                }) || ct(B, function(e, n, r) {
                    var i;
                    return r ? t : (i = e.getAttributeNode(n)) && i.specified ? i.value : e[n] === !0 ? n.toLowerCase() : null
                }),
                    x.find = at,
                    x.expr = at.selectors,
                    x.expr[":"] = x.expr.pseudos,
                    x.unique = at.uniqueSort,
                    x.text = at.getText,
                    x.isXMLDoc = at.isXML,
                    x.contains = at.contains
            }(e);
        var O = {};
        function F(e) {
            var t = O[e] = {};
            return x.each(e.match(T) || [], function(e, n) {
                t[n] = !0
            }),
                t
        }
        x.Callbacks = function(e) {
            e = "string" == typeof e ? O[e] || F(e) : x.extend({}, e);
            var n, r, i, o, a, s, l = [], u = !e.once && [], c = function(t) {
                for (r = e.memory && t,
                         i = !0,
                         a = s || 0,
                         s = 0,
                         o = l.length,
                         n = !0; l && o > a; a++)
                    if (l[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                        r = !1;
                        break
                    }
                n = !1,
                l && (u ? u.length && c(u.shift()) : r ? l = [] : p.disable())
            }, p = {
                add: function() {
                    if (l) {
                        var t = l.length;
                        (function i(t) {
                                x.each(t, function(t, n) {
                                    var r = x.type(n);
                                    "function" === r ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== r && i(n)
                                })
                            }
                        )(arguments),
                            n ? o = l.length : r && (s = t,
                                c(r))
                    }
                    return this
                },
                remove: function() {
                    return l && x.each(arguments, function(e, t) {
                        var r;
                        while ((r = x.inArray(t, l, r)) > -1)
                            l.splice(r, 1),
                            n && (o >= r && o--,
                            a >= r && a--)
                    }),
                        this
                },
                has: function(e) {
                    return e ? x.inArray(e, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [],
                        o = 0,
                        this
                },
                disable: function() {
                    return l = u = r = t,
                        this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return u = t,
                    r || p.disable(),
                        this
                },
                locked: function() {
                    return !u
                },
                fireWith: function(e, t) {
                    return !l || i && !u || (t = t || [],
                        t = [e, t.slice ? t.slice() : t],
                        n ? u.push(t) : c(t)),
                        this
                },
                fire: function() {
                    return p.fireWith(this, arguments),
                        this
                },
                fired: function() {
                    return !!i
                }
            };
            return p
        }
            ,
            x.extend({
                Deferred: function(e) {
                    var t = [["resolve", "done", x.Callbacks("once memory"), "resolved"], ["reject", "fail", x.Callbacks("once memory"), "rejected"], ["notify", "progress", x.Callbacks("memory")]]
                        , n = "pending"
                        , r = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return i.done(arguments).fail(arguments),
                                this
                        },
                        then: function() {
                            var e = arguments;
                            return x.Deferred(function(n) {
                                x.each(t, function(t, o) {
                                    var a = o[0]
                                        , s = x.isFunction(e[t]) && e[t];
                                    i[o[1]](function() {
                                        var e = s && s.apply(this, arguments);
                                        e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                    })
                                }),
                                    e = null
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? x.extend(e, r) : r
                        }
                    }
                        , i = {};
                    return r.pipe = r.then,
                        x.each(t, function(e, o) {
                            var a = o[2]
                                , s = o[3];
                            r[o[1]] = a.add,
                            s && a.add(function() {
                                n = s
                            }, t[1 ^ e][2].disable, t[2][2].lock),
                                i[o[0]] = function() {
                                    return i[o[0] + "With"](this === i ? r : this, arguments),
                                        this
                                }
                                ,
                                i[o[0] + "With"] = a.fireWith
                        }),
                        r.promise(i),
                    e && e.call(i, i),
                        i
                },
                when: function(e) {
                    var t = 0, n = g.call(arguments), r = n.length, i = 1 !== r || e && x.isFunction(e.promise) ? r : 0, o = 1 === i ? e : x.Deferred(), a = function(e, t, n) {
                        return function(r) {
                            t[e] = this,
                                n[e] = arguments.length > 1 ? g.call(arguments) : r,
                                n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n)
                        }
                    }, s, l, u;
                    if (r > 1)
                        for (s = Array(r),
                                 l = Array(r),
                                 u = Array(r); r > t; t++)
                            n[t] && x.isFunction(n[t].promise) ? n[t].promise().done(a(t, u, n)).fail(o.reject).progress(a(t, l, s)) : --i;
                    return i || o.resolveWith(u, n),
                        o.promise()
                }
            }),
            x.support = function(t) {
                var n, r, o, s, l, u, c, p, f, d = a.createElement("div");
                if (d.setAttribute("className", "t"),
                    d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
                    n = d.getElementsByTagName("*") || [],
                    r = d.getElementsByTagName("a")[0],
                !r || !r.style || !n.length)
                    return t;
                s = a.createElement("select"),
                    u = s.appendChild(a.createElement("option")),
                    o = d.getElementsByTagName("input")[0],
                    r.style.cssText = "top:1px;float:left;opacity:.5",
                    t.getSetAttribute = "t" !== d.className,
                    t.leadingWhitespace = 3 === d.firstChild.nodeType,
                    t.tbody = !d.getElementsByTagName("tbody").length,
                    t.htmlSerialize = !!d.getElementsByTagName("link").length,
                    t.style = /top/.test(r.getAttribute("style")),
                    t.hrefNormalized = "/a" === r.getAttribute("href"),
                    t.opacity = /^0.5/.test(r.style.opacity),
                    t.cssFloat = !!r.style.cssFloat,
                    t.checkOn = !!o.value,
                    t.optSelected = u.selected,
                    t.enctype = !!a.createElement("form").enctype,
                    t.html5Clone = "<:nav></:nav>" !== a.createElement("nav").cloneNode(!0).outerHTML,
                    t.inlineBlockNeedsLayout = !1,
                    t.shrinkWrapBlocks = !1,
                    t.pixelPosition = !1,
                    t.deleteExpando = !0,
                    t.noCloneEvent = !0,
                    t.reliableMarginRight = !0,
                    t.boxSizingReliable = !0,
                    o.checked = !0,
                    t.noCloneChecked = o.cloneNode(!0).checked,
                    s.disabled = !0,
                    t.optDisabled = !u.disabled;
                try {
                    delete d.test
                } catch (h) {
                    t.deleteExpando = !1
                }
                o = a.createElement("input"),
                    o.setAttribute("value", ""),
                    t.input = "" === o.getAttribute("value"),
                    o.value = "t",
                    o.setAttribute("type", "radio"),
                    t.radioValue = "t" === o.value,
                    o.setAttribute("checked", "t"),
                    o.setAttribute("name", "t"),
                    l = a.createDocumentFragment(),
                    l.appendChild(o),
                    t.appendChecked = o.checked,
                    t.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked,
                d.attachEvent && (d.attachEvent("onclick", function() {
                    t.noCloneEvent = !1
                }),
                    d.cloneNode(!0).click());
                for (f in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                })
                    d.setAttribute(c = "on" + f, "t"),
                        t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1;
                d.style.backgroundClip = "content-box",
                    d.cloneNode(!0).style.backgroundClip = "",
                    t.clearCloneStyle = "content-box" === d.style.backgroundClip;
                for (f in x(t))
                    break;
                return t.ownLast = "0" !== f,
                    x(function() {
                        var n, r, o, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", l = a.getElementsByTagName("body")[0];
                        l && (n = a.createElement("div"),
                            n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",
                            l.appendChild(n).appendChild(d),
                            d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
                            o = d.getElementsByTagName("td"),
                            o[0].style.cssText = "padding:0;margin:0;border:0;display:none",
                            p = 0 === o[0].offsetHeight,
                            o[0].style.display = "",
                            o[1].style.display = "none",
                            t.reliableHiddenOffsets = p && 0 === o[0].offsetHeight,
                            d.innerHTML = "",
                            d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",
                            x.swap(l, null != l.style.zoom ? {
                                zoom: 1
                            } : {}, function() {
                                t.boxSizing = 4 === d.offsetWidth
                            }),
                        e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top,
                            t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {
                                width: "4px"
                            }).width,
                            r = d.appendChild(a.createElement("div")),
                            r.style.cssText = d.style.cssText = s,
                            r.style.marginRight = r.style.width = "0",
                            d.style.width = "1px",
                            t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)),
                        typeof d.style.zoom !== i && (d.innerHTML = "",
                            d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1",
                            t.inlineBlockNeedsLayout = 3 === d.offsetWidth,
                            d.style.display = "block",
                            d.innerHTML = "<div></div>",
                            d.firstChild.style.width = "5px",
                            t.shrinkWrapBlocks = 3 !== d.offsetWidth,
                        t.inlineBlockNeedsLayout && (l.style.zoom = 1)),
                            l.removeChild(n),
                            n = d = o = r = null)
                    }),
                    n = s = l = u = r = o = null,
                    t
            }({});
        var B = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/
            , P = /([A-Z])/g;
        function R(e, n, r, i) {
            if (x.acceptData(e)) {
                var o, a, s = x.expando, l = e.nodeType, u = l ? x.cache : e, c = l ? e[s] : e[s] && s;
                if (c && u[c] && (i || u[c].data) || r !== t || "string" != typeof n)
                    return c || (c = l ? e[s] = p.pop() || x.guid++ : s),
                    u[c] || (u[c] = l ? {} : {
                        toJSON: x.noop
                    }),
                    ("object" == typeof n || "function" == typeof n) && (i ? u[c] = x.extend(u[c], n) : u[c].data = x.extend(u[c].data, n)),
                        a = u[c],
                    i || (a.data || (a.data = {}),
                        a = a.data),
                    r !== t && (a[x.camelCase(n)] = r),
                        "string" == typeof n ? (o = a[n],
                        null == o && (o = a[x.camelCase(n)])) : o = a,
                        o
            }
        }
        function W(e, t, n) {
            if (x.acceptData(e)) {
                var r, i, o = e.nodeType, a = o ? x.cache : e, s = o ? e[x.expando] : x.expando;
                if (a[s]) {
                    if (t && (r = n ? a[s] : a[s].data)) {
                        x.isArray(t) ? t = t.concat(x.map(t, x.camelCase)) : t in r ? t = [t] : (t = x.camelCase(t),
                            t = t in r ? [t] : t.split(" ")),
                            i = t.length;
                        while (i--)
                            delete r[t[i]];
                        if (n ? !I(r) : !x.isEmptyObject(r))
                            return
                    }
                    (n || (delete a[s].data,
                        I(a[s]))) && (o ? x.cleanData([e], !0) : x.support.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
                }
            }
        }
        x.extend({
            cache: {},
            noData: {
                applet: !0,
                embed: !0,
                object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(e) {
                return e = e.nodeType ? x.cache[e[x.expando]] : e[x.expando],
                !!e && !I(e)
            },
            data: function(e, t, n) {
                return R(e, t, n)
            },
            removeData: function(e, t) {
                return W(e, t)
            },
            _data: function(e, t, n) {
                return R(e, t, n, !0)
            },
            _removeData: function(e, t) {
                return W(e, t, !0)
            },
            acceptData: function(e) {
                if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType)
                    return !1;
                var t = e.nodeName && x.noData[e.nodeName.toLowerCase()];
                return !t || t !== !0 && e.getAttribute("classid") === t
            }
        }),
            x.fn.extend({
                data: function(e, n) {
                    var r, i, o = null, a = 0, s = this[0];
                    if (e === t) {
                        if (this.length && (o = x.data(s),
                        1 === s.nodeType && !x._data(s, "parsedAttrs"))) {
                            for (r = s.attributes; r.length > a; a++)
                                i = r[a].name,
                                0 === i.indexOf("data-") && (i = x.camelCase(i.slice(5)),
                                    $(s, i, o[i]));
                            x._data(s, "parsedAttrs", !0)
                        }
                        return o
                    }
                    return "object" == typeof e ? this.each(function() {
                        x.data(this, e)
                    }) : arguments.length > 1 ? this.each(function() {
                        x.data(this, e, n)
                    }) : s ? $(s, e, x.data(s, e)) : null
                },
                removeData: function(e) {
                    return this.each(function() {
                        x.removeData(this, e)
                    })
                }
            });
        function $(e, n, r) {
            if (r === t && 1 === e.nodeType) {
                var i = "data-" + n.replace(P, "-$1").toLowerCase();
                if (r = e.getAttribute(i),
                "string" == typeof r) {
                    try {
                        r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : B.test(r) ? x.parseJSON(r) : r
                    } catch (o) {}
                    x.data(e, n, r)
                } else
                    r = t
            }
            return r
        }
        function I(e) {
            var t;
            for (t in e)
                if (("data" !== t || !x.isEmptyObject(e[t])) && "toJSON" !== t)
                    return !1;
            return !0
        }
        x.extend({
            queue: function(e, n, r) {
                var i;
                return e ? (n = (n || "fx") + "queue",
                    i = x._data(e, n),
                r && (!i || x.isArray(r) ? i = x._data(e, n, x.makeArray(r)) : i.push(r)),
                i || []) : t
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = x.queue(e, t)
                    , r = n.length
                    , i = n.shift()
                    , o = x._queueHooks(e, t)
                    , a = function() {
                    x.dequeue(e, t)
                };
                "inprogress" === i && (i = n.shift(),
                    r--),
                i && ("fx" === t && n.unshift("inprogress"),
                    delete o.stop,
                    i.call(e, a, o)),
                !r && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return x._data(e, n) || x._data(e, n, {
                    empty: x.Callbacks("once memory").add(function() {
                        x._removeData(e, t + "queue"),
                            x._removeData(e, n)
                    })
                })
            }
        }),
            x.fn.extend({
                queue: function(e, n) {
                    var r = 2;
                    return "string" != typeof e && (n = e,
                        e = "fx",
                        r--),
                        r > arguments.length ? x.queue(this[0], e) : n === t ? this : this.each(function() {
                            var t = x.queue(this, e, n);
                            x._queueHooks(this, e),
                            "fx" === e && "inprogress" !== t[0] && x.dequeue(this, e)
                        })
                },
                dequeue: function(e) {
                    return this.each(function() {
                        x.dequeue(this, e)
                    })
                },
                delay: function(e, t) {
                    return e = x.fx ? x.fx.speeds[e] || e : e,
                        t = t || "fx",
                        this.queue(t, function(t, n) {
                            var r = setTimeout(t, e);
                            n.stop = function() {
                                clearTimeout(r)
                            }
                        })
                },
                clearQueue: function(e) {
                    return this.queue(e || "fx", [])
                },
                promise: function(e, n) {
                    var r, i = 1, o = x.Deferred(), a = this, s = this.length, l = function() {
                        --i || o.resolveWith(a, [a])
                    };
                    "string" != typeof e && (n = e,
                        e = t),
                        e = e || "fx";
                    while (s--)
                        r = x._data(a[s], e + "queueHooks"),
                        r && r.empty && (i++,
                            r.empty.add(l));
                    return l(),
                        o.promise(n)
                }
            });
        var z, X, U = /[\t\r\n\f]/g, V = /\r/g, Y = /^(?:input|select|textarea|button|object)$/i, J = /^(?:a|area)$/i, G = /^(?:checked|selected)$/i, Q = x.support.getSetAttribute, K = x.support.input;
        x.fn.extend({
            attr: function(e, t) {
                return x.access(this, x.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    x.removeAttr(this, e)
                })
            },
            prop: function(e, t) {
                return x.access(this, x.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return e = x.propFix[e] || e,
                    this.each(function() {
                        try {
                            this[e] = t,
                                delete this[e]
                        } catch (n) {}
                    })
            },
            addClass: function(e) {
                var t, n, r, i, o, a = 0, s = this.length, l = "string" == typeof e && e;
                if (x.isFunction(e))
                    return this.each(function(t) {
                        x(this).addClass(e.call(this, t, this.className))
                    });
                if (l)
                    for (t = (e || "").match(T) || []; s > a; a++)
                        if (n = this[a],
                            r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : " ")) {
                            o = 0;
                            while (i = t[o++])
                                0 > r.indexOf(" " + i + " ") && (r += i + " ");
                            n.className = x.trim(r)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, r, i, o, a = 0, s = this.length, l = 0 === arguments.length || "string" == typeof e && e;
                if (x.isFunction(e))
                    return this.each(function(t) {
                        x(this).removeClass(e.call(this, t, this.className))
                    });
                if (l)
                    for (t = (e || "").match(T) || []; s > a; a++)
                        if (n = this[a],
                            r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : "")) {
                            o = 0;
                            while (i = t[o++])
                                while (r.indexOf(" " + i + " ") >= 0)
                                    r = r.replace(" " + i + " ", " ");
                            n.className = e ? x.trim(r) : ""
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : x.isFunction(e) ? this.each(function(n) {
                    x(this).toggleClass(e.call(this, n, this.className, t), t)
                }) : this.each(function() {
                    if ("string" === n) {
                        var t, r = 0, o = x(this), a = e.match(T) || [];
                        while (t = a[r++])
                            o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
                    } else
                        (n === i || "boolean" === n) && (this.className && x._data(this, "__className__", this.className),
                            this.className = this.className || e === !1 ? "" : x._data(this, "__className__") || "")
                })
            },
            hasClass: function(e) {
                var t = " " + e + " "
                    , n = 0
                    , r = this.length;
                for (; r > n; n++)
                    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(U, " ").indexOf(t) >= 0)
                        return !0;
                return !1
            },
            val: function(e) {
                var n, r, i, o = this[0];
                {
                    if (arguments.length)
                        return i = x.isFunction(e),
                            this.each(function(n) {
                                var o;
                                1 === this.nodeType && (o = i ? e.call(this, n, x(this).val()) : e,
                                    null == o ? o = "" : "number" == typeof o ? o += "" : x.isArray(o) && (o = x.map(o, function(e) {
                                        return null == e ? "" : e + ""
                                    })),
                                    r = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()],
                                r && "set"in r && r.set(this, o, "value") !== t || (this.value = o))
                            });
                    if (o)
                        return r = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()],
                            r && "get"in r && (n = r.get(o, "value")) !== t ? n : (n = o.value,
                                "string" == typeof n ? n.replace(V, "") : null == n ? "" : n)
                }
            }
        }),
            x.extend({
                valHooks: {
                    option: {
                        get: function(e) {
                            var t = x.find.attr(e, "value");
                            return null != t ? t : e.text
                        }
                    },
                    select: {
                        get: function(e) {
                            var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, l = 0 > i ? s : o ? i : 0;
                            for (; s > l; l++)
                                if (n = r[l],
                                    !(!n.selected && l !== i || (x.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && x.nodeName(n.parentNode, "optgroup"))) {
                                    if (t = x(n).val(),
                                        o)
                                        return t;
                                    a.push(t)
                                }
                            return a
                        },
                        set: function(e, t) {
                            var n, r, i = e.options, o = x.makeArray(t), a = i.length;
                            while (a--)
                                r = i[a],
                                (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0);
                            return n || (e.selectedIndex = -1),
                                o
                        }
                    }
                },
                attr: function(e, n, r) {
                    var o, a, s = e.nodeType;
                    if (e && 3 !== s && 8 !== s && 2 !== s)
                        return typeof e.getAttribute === i ? x.prop(e, n, r) : (1 === s && x.isXMLDoc(e) || (n = n.toLowerCase(),
                            o = x.attrHooks[n] || (x.expr.match.bool.test(n) ? X : z)),
                            r === t ? o && "get"in o && null !== (a = o.get(e, n)) ? a : (a = x.find.attr(e, n),
                                null == a ? t : a) : null !== r ? o && "set"in o && (a = o.set(e, r, n)) !== t ? a : (e.setAttribute(n, r + ""),
                                r) : (x.removeAttr(e, n),
                                t))
                },
                removeAttr: function(e, t) {
                    var n, r, i = 0, o = t && t.match(T);
                    if (o && 1 === e.nodeType)
                        while (n = o[i++])
                            r = x.propFix[n] || n,
                                x.expr.match.bool.test(n) ? K && Q || !G.test(n) ? e[r] = !1 : e[x.camelCase("default-" + n)] = e[r] = !1 : x.attr(e, n, ""),
                                e.removeAttribute(Q ? n : r)
                },
                attrHooks: {
                    type: {
                        set: function(e, t) {
                            if (!x.support.radioValue && "radio" === t && x.nodeName(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t),
                                n && (e.value = n),
                                    t
                            }
                        }
                    }
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                },
                prop: function(e, n, r) {
                    var i, o, a, s = e.nodeType;
                    if (e && 3 !== s && 8 !== s && 2 !== s)
                        return a = 1 !== s || !x.isXMLDoc(e),
                        a && (n = x.propFix[n] || n,
                            o = x.propHooks[n]),
                            r !== t ? o && "set"in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get"in o && null !== (i = o.get(e, n)) ? i : e[n]
                },
                propHooks: {
                    tabIndex: {
                        get: function(e) {
                            var t = x.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) : Y.test(e.nodeName) || J.test(e.nodeName) && e.href ? 0 : -1
                        }
                    }
                }
            }),
            X = {
                set: function(e, t, n) {
                    return t === !1 ? x.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && x.propFix[n] || n, n) : e[x.camelCase("default-" + n)] = e[n] = !0,
                        n
                }
            },
            x.each(x.expr.match.bool.source.match(/\w+/g), function(e, n) {
                var r = x.expr.attrHandle[n] || x.find.attr;
                x.expr.attrHandle[n] = K && Q || !G.test(n) ? function(e, n, i) {
                        var o = x.expr.attrHandle[n]
                            , a = i ? t : (x.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
                        return x.expr.attrHandle[n] = o,
                            a
                    }
                    : function(e, n, r) {
                        return r ? t : e[x.camelCase("default-" + n)] ? n.toLowerCase() : null
                    }
            }),
        K && Q || (x.attrHooks.value = {
            set: function(e, n, r) {
                return x.nodeName(e, "input") ? (e.defaultValue = n,
                    t) : z && z.set(e, n, r)
            }
        }),
        Q || (z = {
            set: function(e, n, r) {
                var i = e.getAttributeNode(r);
                return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)),
                    i.value = n += "",
                    "value" === r || n === e.getAttribute(r) ? n : t
            }
        },
            x.expr.attrHandle.id = x.expr.attrHandle.name = x.expr.attrHandle.coords = function(e, n, r) {
                var i;
                return r ? t : (i = e.getAttributeNode(n)) && "" !== i.value ? i.value : null
            }
            ,
            x.valHooks.button = {
                get: function(e, n) {
                    var r = e.getAttributeNode(n);
                    return r && r.specified ? r.value : t
                },
                set: z.set
            },
            x.attrHooks.contenteditable = {
                set: function(e, t, n) {
                    z.set(e, "" === t ? !1 : t, n)
                }
            },
            x.each(["width", "height"], function(e, n) {
                x.attrHooks[n] = {
                    set: function(e, r) {
                        return "" === r ? (e.setAttribute(n, "auto"),
                            r) : t
                    }
                }
            })),
        x.support.hrefNormalized || x.each(["href", "src"], function(e, t) {
            x.propHooks[t] = {
                get: function(e) {
                    return e.getAttribute(t, 4)
                }
            }
        }),
        x.support.style || (x.attrHooks.style = {
            get: function(e) {
                return e.style.cssText || t
            },
            set: function(e, t) {
                return e.style.cssText = t + ""
            }
        }),
        x.support.optSelected || (x.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && (t.selectedIndex,
                t.parentNode && t.parentNode.selectedIndex),
                    null
            }
        }),
            x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                x.propFix[this.toLowerCase()] = this
            }),
        x.support.enctype || (x.propFix.enctype = "encoding"),
            x.each(["radio", "checkbox"], function() {
                x.valHooks[this] = {
                    set: function(e, n) {
                        return x.isArray(n) ? e.checked = x.inArray(x(e).val(), n) >= 0 : t
                    }
                },
                x.support.checkOn || (x.valHooks[this].get = function(e) {
                        return null === e.getAttribute("value") ? "on" : e.value
                    }
                )
            });
        var Z = /^(?:input|select|textarea)$/i
            , et = /^key/
            , tt = /^(?:mouse|contextmenu)|click/
            , nt = /^(?:focusinfocus|focusoutblur)$/
            , rt = /^([^.]*)(?:\.(.+)|)$/;
        function it() {
            return !0
        }
        function ot() {
            return !1
        }
        function at() {
            try {
                return a.activeElement
            } catch (e) {}
        }
        x.event = {
            global: {},
            add: function(e, n, r, o, a) {
                var s, l, u, c, p, f, d, h, g, m, y, v = x._data(e);
                if (v) {
                    r.handler && (c = r,
                        r = c.handler,
                        a = c.selector),
                    r.guid || (r.guid = x.guid++),
                    (l = v.events) || (l = v.events = {}),
                    (f = v.handle) || (f = v.handle = function(e) {
                        return typeof x === i || e && x.event.triggered === e.type ? t : x.event.dispatch.apply(f.elem, arguments)
                    }
                        ,
                        f.elem = e),
                        n = (n || "").match(T) || [""],
                        u = n.length;
                    while (u--)
                        s = rt.exec(n[u]) || [],
                            g = y = s[1],
                            m = (s[2] || "").split(".").sort(),
                        g && (p = x.event.special[g] || {},
                            g = (a ? p.delegateType : p.bindType) || g,
                            p = x.event.special[g] || {},
                            d = x.extend({
                                type: g,
                                origType: y,
                                data: o,
                                handler: r,
                                guid: r.guid,
                                selector: a,
                                needsContext: a && x.expr.match.needsContext.test(a),
                                namespace: m.join(".")
                            }, c),
                        (h = l[g]) || (h = l[g] = [],
                            h.delegateCount = 0,
                        p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))),
                        p.add && (p.add.call(e, d),
                        d.handler.guid || (d.handler.guid = r.guid)),
                            a ? h.splice(h.delegateCount++, 0, d) : h.push(d),
                            x.event.global[g] = !0);
                    e = null
                }
            },
            remove: function(e, t, n, r, i) {
                var o, a, s, l, u, c, p, f, d, h, g, m = x.hasData(e) && x._data(e);
                if (m && (c = m.events)) {
                    t = (t || "").match(T) || [""],
                        u = t.length;
                    while (u--)
                        if (s = rt.exec(t[u]) || [],
                            d = g = s[1],
                            h = (s[2] || "").split(".").sort(),
                            d) {
                            p = x.event.special[d] || {},
                                d = (r ? p.delegateType : p.bindType) || d,
                                f = c[d] || [],
                                s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                                l = o = f.length;
                            while (o--)
                                a = f[o],
                                !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1),
                                a.selector && f.delegateCount--,
                                p.remove && p.remove.call(e, a));
                            l && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || x.removeEvent(e, d, m.handle),
                                delete c[d])
                        } else
                            for (d in c)
                                x.event.remove(e, d + t[u], n, r, !0);
                    x.isEmptyObject(c) && (delete m.handle,
                        x._removeData(e, "events"))
                }
            },
            trigger: function(n, r, i, o) {
                var s, l, u, c, p, f, d, h = [i || a], g = v.call(n, "type") ? n.type : n, m = v.call(n, "namespace") ? n.namespace.split(".") : [];
                if (u = f = i = i || a,
                3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + x.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."),
                    g = m.shift(),
                    m.sort()),
                    l = 0 > g.indexOf(":") && "on" + g,
                    n = n[x.expando] ? n : new x.Event(g,"object" == typeof n && n),
                    n.isTrigger = o ? 2 : 3,
                    n.namespace = m.join("."),
                    n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                    n.result = t,
                n.target || (n.target = i),
                    r = null == r ? [n] : x.makeArray(r, [n]),
                    p = x.event.special[g] || {},
                o || !p.trigger || p.trigger.apply(i, r) !== !1)) {
                    if (!o && !p.noBubble && !x.isWindow(i)) {
                        for (c = p.delegateType || g,
                             nt.test(c + g) || (u = u.parentNode); u; u = u.parentNode)
                            h.push(u),
                                f = u;
                        f === (i.ownerDocument || a) && h.push(f.defaultView || f.parentWindow || e)
                    }
                    d = 0;
                    while ((u = h[d++]) && !n.isPropagationStopped())
                        n.type = d > 1 ? c : p.bindType || g,
                            s = (x._data(u, "events") || {})[n.type] && x._data(u, "handle"),
                        s && s.apply(u, r),
                            s = l && u[l],
                        s && x.acceptData(u) && s.apply && s.apply(u, r) === !1 && n.preventDefault();
                    if (n.type = g,
                    !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(h.pop(), r) === !1) && x.acceptData(i) && l && i[g] && !x.isWindow(i)) {
                        f = i[l],
                        f && (i[l] = null),
                            x.event.triggered = g;
                        try {
                            i[g]()
                        } catch (y) {}
                        x.event.triggered = t,
                        f && (i[l] = f)
                    }
                    return n.result
                }
            },
            dispatch: function(e) {
                e = x.event.fix(e);
                var n, r, i, o, a, s = [], l = g.call(arguments), u = (x._data(this, "events") || {})[e.type] || [], c = x.event.special[e.type] || {};
                if (l[0] = e,
                    e.delegateTarget = this,
                !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                    s = x.event.handlers.call(this, e, u),
                        n = 0;
                    while ((o = s[n++]) && !e.isPropagationStopped()) {
                        e.currentTarget = o.elem,
                            a = 0;
                        while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped())
                            (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i,
                                e.data = i.data,
                                r = ((x.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l),
                            r !== t && (e.result = r) === !1 && (e.preventDefault(),
                                e.stopPropagation()))
                    }
                    return c.postDispatch && c.postDispatch.call(this, e),
                        e.result
                }
            },
            handlers: function(e, n) {
                var r, i, o, a, s = [], l = n.delegateCount, u = e.target;
                if (l && u.nodeType && (!e.button || "click" !== e.type))
                    for (; u != this; u = u.parentNode || this)
                        if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                            for (o = [],
                                     a = 0; l > a; a++)
                                i = n[a],
                                    r = i.selector + " ",
                                o[r] === t && (o[r] = i.needsContext ? x(r, this).index(u) >= 0 : x.find(r, this, null, [u]).length),
                                o[r] && o.push(i);
                            o.length && s.push({
                                elem: u,
                                handlers: o
                            })
                        }
                return n.length > l && s.push({
                    elem: this,
                    handlers: n.slice(l)
                }),
                    s
            },
            fix: function(e) {
                if (e[x.expando])
                    return e;
                var t, n, r, i = e.type, o = e, s = this.fixHooks[i];
                s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}),
                    r = s.props ? this.props.concat(s.props) : this.props,
                    e = new x.Event(o),
                    t = r.length;
                while (t--)
                    n = r[t],
                        e[n] = o[n];
                return e.target || (e.target = o.srcElement || a),
                3 === e.target.nodeType && (e.target = e.target.parentNode),
                    e.metaKey = !!e.metaKey,
                    s.filter ? s.filter(e, o) : e
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
                        e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, n) {
                    var r, i, o, s = n.button, l = n.fromElement;
                    return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || a,
                        o = i.documentElement,
                        r = i.body,
                        e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0),
                        e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)),
                    !e.relatedTarget && l && (e.relatedTarget = l === e.target ? n.toElement : l),
                    e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0),
                        e
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== at() && this.focus)
                            try {
                                return this.focus(),
                                    !1
                            } catch (e) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === at() && this.blur ? (this.blur(),
                            !1) : t
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return x.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(),
                            !1) : t
                    },
                    _default: function(e) {
                        return x.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        e.result !== t && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function(e, t, n, r) {
                var i = x.extend(new x.Event, n, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i),
                i.isDefaultPrevented() && n.preventDefault()
            }
        },
            x.removeEvent = a.removeEventListener ? function(e, t, n) {
                    e.removeEventListener && e.removeEventListener(t, n, !1)
                }
                : function(e, t, n) {
                    var r = "on" + t;
                    e.detachEvent && (typeof e[r] === i && (e[r] = null),
                        e.detachEvent(r, n))
                }
            ,
            x.Event = function(e, n) {
                return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e,
                    this.type = e.type,
                    this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e,
                n && x.extend(this, n),
                    this.timeStamp = e && e.timeStamp || x.now(),
                    this[x.expando] = !0,
                    t) : new x.Event(e,n)
            }
            ,
            x.Event.prototype = {
                isDefaultPrevented: ot,
                isPropagationStopped: ot,
                isImmediatePropagationStopped: ot,
                preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = it,
                    e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
                },
                stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = it,
                    e && (e.stopPropagation && e.stopPropagation(),
                        e.cancelBubble = !0)
                },
                stopImmediatePropagation: function() {
                    this.isImmediatePropagationStopped = it,
                        this.stopPropagation()
                }
            },
            x.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            }, function(e, t) {
                x.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function(e) {
                        var n, r = this, i = e.relatedTarget, o = e.handleObj;
                        return (!i || i !== r && !x.contains(r, i)) && (e.type = o.origType,
                            n = o.handler.apply(this, arguments),
                            e.type = t),
                            n
                    }
                }
            }),
        x.support.submitBubbles || (x.event.special.submit = {
            setup: function() {
                return x.nodeName(this, "form") ? !1 : (x.event.add(this, "click._submit keypress._submit", function(e) {
                    var n = e.target
                        , r = x.nodeName(n, "input") || x.nodeName(n, "button") ? n.form : t;
                    r && !x._data(r, "submitBubbles") && (x.event.add(r, "submit._submit", function(e) {
                        e._submit_bubble = !0
                    }),
                        x._data(r, "submitBubbles", !0))
                }),
                    t)
            },
            postDispatch: function(e) {
                e._submit_bubble && (delete e._submit_bubble,
                this.parentNode && !e.isTrigger && x.event.simulate("submit", this.parentNode, e, !0))
            },
            teardown: function() {
                return x.nodeName(this, "form") ? !1 : (x.event.remove(this, "._submit"),
                    t)
            }
        }),
        x.support.changeBubbles || (x.event.special.change = {
            setup: function() {
                return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (x.event.add(this, "propertychange._change", function(e) {
                    "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                }),
                    x.event.add(this, "click._change", function(e) {
                        this._just_changed && !e.isTrigger && (this._just_changed = !1),
                            x.event.simulate("change", this, e, !0)
                    })),
                    !1) : (x.event.add(this, "beforeactivate._change", function(e) {
                    var t = e.target;
                    Z.test(t.nodeName) && !x._data(t, "changeBubbles") && (x.event.add(t, "change._change", function(e) {
                        !this.parentNode || e.isSimulated || e.isTrigger || x.event.simulate("change", this.parentNode, e, !0)
                    }),
                        x._data(t, "changeBubbles", !0))
                }),
                    t)
            },
            handle: function(e) {
                var n = e.target;
                return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
            },
            teardown: function() {
                return x.event.remove(this, "._change"),
                    !Z.test(this.nodeName)
            }
        }),
        x.support.focusinBubbles || x.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = 0
                , r = function(e) {
                x.event.simulate(t, e.target, x.event.fix(e), !0)
            };
            x.event.special[t] = {
                setup: function() {
                    0 === n++ && a.addEventListener(e, r, !0)
                },
                teardown: function() {
                    0 === --n && a.removeEventListener(e, r, !0)
                }
            }
        }),
            x.fn.extend({
                on: function(e, n, r, i, o) {
                    var a, s;
                    if ("object" == typeof e) {
                        "string" != typeof n && (r = r || n,
                            n = t);
                        for (a in e)
                            this.on(a, n, r, e[a], o);
                        return this
                    }
                    if (null == r && null == i ? (i = n,
                        r = n = t) : null == i && ("string" == typeof n ? (i = r,
                        r = t) : (i = r,
                        r = n,
                        n = t)),
                    i === !1)
                        i = ot;
                    else if (!i)
                        return this;
                    return 1 === o && (s = i,
                        i = function(e) {
                            return x().off(e),
                                s.apply(this, arguments)
                        }
                        ,
                        i.guid = s.guid || (s.guid = x.guid++)),
                        this.each(function() {
                            x.event.add(this, e, i, r, n)
                        })
                },
                one: function(e, t, n, r) {
                    return this.on(e, t, n, r, 1)
                },
                off: function(e, n, r) {
                    var i, o;
                    if (e && e.preventDefault && e.handleObj)
                        return i = e.handleObj,
                            x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                            this;
                    if ("object" == typeof e) {
                        for (o in e)
                            this.off(o, n, e[o]);
                        return this
                    }
                    return (n === !1 || "function" == typeof n) && (r = n,
                        n = t),
                    r === !1 && (r = ot),
                        this.each(function() {
                            x.event.remove(this, e, r, n)
                        })
                },
                trigger: function(e, t) {
                    return this.each(function() {
                        x.event.trigger(e, t, this)
                    })
                },
                triggerHandler: function(e, n) {
                    var r = this[0];
                    return r ? x.event.trigger(e, n, r, !0) : t
                }
            });
        var st = /^.[^:#\[\.,]*$/
            , lt = /^(?:parents|prev(?:Until|All))/
            , ut = x.expr.match.needsContext
            , ct = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        x.fn.extend({
            find: function(e) {
                var t, n = [], r = this, i = r.length;
                if ("string" != typeof e)
                    return this.pushStack(x(e).filter(function() {
                        for (t = 0; i > t; t++)
                            if (x.contains(r[t], this))
                                return !0
                    }));
                for (t = 0; i > t; t++)
                    x.find(e, r[t], n);
                return n = this.pushStack(i > 1 ? x.unique(n) : n),
                    n.selector = this.selector ? this.selector + " " + e : e,
                    n
            },
            has: function(e) {
                var t, n = x(e, this), r = n.length;
                return this.filter(function() {
                    for (t = 0; r > t; t++)
                        if (x.contains(this, n[t]))
                            return !0
                })
            },
            not: function(e) {
                return this.pushStack(ft(this, e || [], !0))
            },
            filter: function(e) {
                return this.pushStack(ft(this, e || [], !1))
            },
            is: function(e) {
                return !!ft(this, "string" == typeof e && ut.test(e) ? x(e) : e || [], !1).length
            },
            closest: function(e, t) {
                var n, r = 0, i = this.length, o = [], a = ut.test(e) || "string" != typeof e ? x(e, t || this.context) : 0;
                for (; i > r; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
                            n = o.push(n);
                            break
                        }
                return this.pushStack(o.length > 1 ? x.unique(o) : o)
            },
            index: function(e) {
                return e ? "string" == typeof e ? x.inArray(this[0], x(e)) : x.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                var n = "string" == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [e] : e)
                    , r = x.merge(this.get(), n);
                return this.pushStack(x.unique(r))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        });
        function pt(e, t) {
            do {
                e = e[t]
            } while (e && 1 !== e.nodeType);
            return e
        }
        x.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return x.dir(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return x.dir(e, "parentNode", n)
            },
            next: function(e) {
                return pt(e, "nextSibling")
            },
            prev: function(e) {
                return pt(e, "previousSibling")
            },
            nextAll: function(e) {
                return x.dir(e, "nextSibling")
            },
            prevAll: function(e) {
                return x.dir(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return x.dir(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return x.dir(e, "previousSibling", n)
            },
            siblings: function(e) {
                return x.sibling((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return x.sibling(e.firstChild)
            },
            contents: function(e) {
                return x.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : x.merge([], e.childNodes)
            }
        }, function(e, t) {
            x.fn[e] = function(n, r) {
                var i = x.map(this, t, n);
                return "Until" !== e.slice(-5) && (r = n),
                r && "string" == typeof r && (i = x.filter(r, i)),
                this.length > 1 && (ct[e] || (i = x.unique(i)),
                lt.test(e) && (i = i.reverse())),
                    this.pushStack(i)
            }
        }),
            x.extend({
                filter: function(e, t, n) {
                    var r = t[0];
                    return n && (e = ":not(" + e + ")"),
                        1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, function(e) {
                            return 1 === e.nodeType
                        }))
                },
                dir: function(e, n, r) {
                    var i = []
                        , o = e[n];
                    while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !x(o).is(r)))
                        1 === o.nodeType && i.push(o),
                            o = o[n];
                    return i
                },
                sibling: function(e, t) {
                    var n = [];
                    for (; e; e = e.nextSibling)
                        1 === e.nodeType && e !== t && n.push(e);
                    return n
                }
            });
        function ft(e, t, n) {
            if (x.isFunction(t))
                return x.grep(e, function(e, r) {
                    return !!t.call(e, r, e) !== n
                });
            if (t.nodeType)
                return x.grep(e, function(e) {
                    return e === t !== n
                });
            if ("string" == typeof t) {
                if (st.test(t))
                    return x.filter(t, e, n);
                t = x.filter(t, e)
            }
            return x.grep(e, function(e) {
                return x.inArray(e, t) >= 0 !== n
            })
        }
        function dt(e) {
            var t = ht.split("|")
                , n = e.createDocumentFragment();
            if (n.createElement)
                while (t.length)
                    n.createElement(t.pop());
            return n
        }
        var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
            , gt = / jQuery\d+="(?:null|\d+)"/g
            , mt = RegExp("<(?:" + ht + ")[\\s/>]", "i")
            , yt = /^\s+/
            , vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
            , bt = /<([\w:]+)/
            , xt = /<tbody/i
            , wt = /<|&#?\w+;/
            , Tt = /<(?:script|style|link)/i
            , Ct = /^(?:checkbox|radio)$/i
            , Nt = /checked\s*(?:[^=]|=\s*.checked.)/i
            , kt = /^$|\/(?:java|ecma)script/i
            , Et = /^true\/(.*)/
            , St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
            , At = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: x.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        }
            , jt = dt(a)
            , Dt = jt.appendChild(a.createElement("div"));
        At.optgroup = At.option,
            At.tbody = At.tfoot = At.colgroup = At.caption = At.thead,
            At.th = At.td,
            x.fn.extend({
                text: function(e) {
                    return x.access(this, function(e) {
                        return e === t ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || a).createTextNode(e))
                    }, null, e, arguments.length)
                },
                append: function() {
                    return this.domManip(arguments, function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = Lt(this, e);
                            t.appendChild(e)
                        }
                    })
                },
                prepend: function() {
                    return this.domManip(arguments, function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = Lt(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    })
                },
                before: function() {
                    return this.domManip(arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    })
                },
                after: function() {
                    return this.domManip(arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    })
                },
                remove: function(e, t) {
                    var n, r = e ? x.filter(e, this) : this, i = 0;
                    for (; null != (n = r[i]); i++)
                        t || 1 !== n.nodeType || x.cleanData(Ft(n)),
                        n.parentNode && (t && x.contains(n.ownerDocument, n) && _t(Ft(n, "script")),
                            n.parentNode.removeChild(n));
                    return this
                },
                empty: function() {
                    var e, t = 0;
                    for (; null != (e = this[t]); t++) {
                        1 === e.nodeType && x.cleanData(Ft(e, !1));
                        while (e.firstChild)
                            e.removeChild(e.firstChild);
                        e.options && x.nodeName(e, "select") && (e.options.length = 0)
                    }
                    return this
                },
                clone: function(e, t) {
                    return e = null == e ? !1 : e,
                        t = null == t ? e : t,
                        this.map(function() {
                            return x.clone(this, e, t)
                        })
                },
                html: function(e) {
                    return x.access(this, function(e) {
                        var n = this[0] || {}
                            , r = 0
                            , i = this.length;
                        if (e === t)
                            return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t;
                        if (!("string" != typeof e || Tt.test(e) || !x.support.htmlSerialize && mt.test(e) || !x.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
                            e = e.replace(vt, "<$1></$2>");
                            try {
                                for (; i > r; r++)
                                    n = this[r] || {},
                                    1 === n.nodeType && (x.cleanData(Ft(n, !1)),
                                        n.innerHTML = e);
                                n = 0
                            } catch (o) {}
                        }
                        n && this.empty().append(e)
                    }, null, e, arguments.length)
                },
                replaceWith: function() {
                    var e = x.map(this, function(e) {
                        return [e.nextSibling, e.parentNode]
                    })
                        , t = 0;
                    return this.domManip(arguments, function(n) {
                        var r = e[t++]
                            , i = e[t++];
                        i && (r && r.parentNode !== i && (r = this.nextSibling),
                            x(this).remove(),
                            i.insertBefore(n, r))
                    }, !0),
                        t ? this : this.remove()
                },
                detach: function(e) {
                    return this.remove(e, !0)
                },
                domManip: function(e, t, n) {
                    e = d.apply([], e);
                    var r, i, o, a, s, l, u = 0, c = this.length, p = this, f = c - 1, h = e[0], g = x.isFunction(h);
                    if (g || !(1 >= c || "string" != typeof h || x.support.checkClone) && Nt.test(h))
                        return this.each(function(r) {
                            var i = p.eq(r);
                            g && (e[0] = h.call(this, r, i.html())),
                                i.domManip(e, t, n)
                        });
                    if (c && (l = x.buildFragment(e, this[0].ownerDocument, !1, !n && this),
                        r = l.firstChild,
                    1 === l.childNodes.length && (l = r),
                        r)) {
                        for (a = x.map(Ft(l, "script"), Ht),
                                 o = a.length; c > u; u++)
                            i = l,
                            u !== f && (i = x.clone(i, !0, !0),
                            o && x.merge(a, Ft(i, "script"))),
                                t.call(this[u], i, u);
                        if (o)
                            for (s = a[a.length - 1].ownerDocument,
                                     x.map(a, qt),
                                     u = 0; o > u; u++)
                                i = a[u],
                                kt.test(i.type || "") && !x._data(i, "globalEval") && x.contains(s, i) && (i.src ? x._evalUrl(i.src) : x.globalEval((i.text || i.textContent || i.innerHTML || "").replace(St, "")));
                        l = r = null
                    }
                    return this
                }
            });
        function Lt(e, t) {
            return x.nodeName(e, "table") && x.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }
        function Ht(e) {
            return e.type = (null !== x.find.attr(e, "type")) + "/" + e.type,
                e
        }
        function qt(e) {
            var t = Et.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"),
                e
        }
        function _t(e, t) {
            var n, r = 0;
            for (; null != (n = e[r]); r++)
                x._data(n, "globalEval", !t || x._data(t[r], "globalEval"))
        }
        function Mt(e, t) {
            if (1 === t.nodeType && x.hasData(e)) {
                var n, r, i, o = x._data(e), a = x._data(t, o), s = o.events;
                if (s) {
                    delete a.handle,
                        a.events = {};
                    for (n in s)
                        for (r = 0,
                                 i = s[n].length; i > r; r++)
                            x.event.add(t, n, s[n][r])
                }
                a.data && (a.data = x.extend({}, a.data))
            }
        }
        function Ot(e, t) {
            var n, r, i;
            if (1 === t.nodeType) {
                if (n = t.nodeName.toLowerCase(),
                !x.support.noCloneEvent && t[x.expando]) {
                    i = x._data(t);
                    for (r in i.events)
                        x.removeEvent(t, r, i.handle);
                    t.removeAttribute(x.expando)
                }
                "script" === n && t.text !== e.text ? (Ht(t).text = e.text,
                    qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML),
                x.support.html5Clone && e.innerHTML && !x.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ct.test(e.type) ? (t.defaultChecked = t.checked = e.checked,
                t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
            }
        }
        x.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            x.fn[e] = function(e) {
                var n, r = 0, i = [], o = x(e), a = o.length - 1;
                for (; a >= r; r++)
                    n = r === a ? this : this.clone(!0),
                        x(o[r])[t](n),
                        h.apply(i, n.get());
                return this.pushStack(i)
            }
        });
        function Ft(e, n) {
            var r, o, a = 0, s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
            if (!s)
                for (s = [],
                         r = e.childNodes || e; null != (o = r[a]); a++)
                    !n || x.nodeName(o, n) ? s.push(o) : x.merge(s, Ft(o, n));
            return n === t || n && x.nodeName(e, n) ? x.merge([e], s) : s
        }
        function Bt(e) {
            Ct.test(e.type) && (e.defaultChecked = e.checked)
        }
        x.extend({
            clone: function(e, t, n) {
                var r, i, o, a, s, l = x.contains(e.ownerDocument, e);
                if (x.support.html5Clone || x.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML,
                    Dt.removeChild(o = Dt.firstChild)),
                    !(x.support.noCloneEvent && x.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e)))
                    for (r = Ft(o),
                             s = Ft(e),
                             a = 0; null != (i = s[a]); ++a)
                        r[a] && Ot(i, r[a]);
                if (t)
                    if (n)
                        for (s = s || Ft(e),
                                 r = r || Ft(o),
                                 a = 0; null != (i = s[a]); a++)
                            Mt(i, r[a]);
                    else
                        Mt(e, o);
                return r = Ft(o, "script"),
                r.length > 0 && _t(r, !l && Ft(e, "script")),
                    r = s = i = null,
                    o
            },
            buildFragment: function(e, t, n, r) {
                var i, o, a, s, l, u, c, p = e.length, f = dt(t), d = [], h = 0;
                for (; p > h; h++)
                    if (o = e[h],
                    o || 0 === o)
                        if ("object" === x.type(o))
                            x.merge(d, o.nodeType ? [o] : o);
                        else if (wt.test(o)) {
                            s = s || f.appendChild(t.createElement("div")),
                                l = (bt.exec(o) || ["", ""])[1].toLowerCase(),
                                c = At[l] || At._default,
                                s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2],
                                i = c[0];
                            while (i--)
                                s = s.lastChild;
                            if (!x.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])),
                                !x.support.tbody) {
                                o = "table" !== l || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild,
                                    i = o && o.childNodes.length;
                                while (i--)
                                    x.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u)
                            }
                            x.merge(d, s.childNodes),
                                s.textContent = "";
                            while (s.firstChild)
                                s.removeChild(s.firstChild);
                            s = f.lastChild
                        } else
                            d.push(t.createTextNode(o));
                s && f.removeChild(s),
                x.support.appendChecked || x.grep(Ft(d, "input"), Bt),
                    h = 0;
                while (o = d[h++])
                    if ((!r || -1 === x.inArray(o, r)) && (a = x.contains(o.ownerDocument, o),
                        s = Ft(f.appendChild(o), "script"),
                    a && _t(s),
                        n)) {
                        i = 0;
                        while (o = s[i++])
                            kt.test(o.type || "") && n.push(o)
                    }
                return s = null,
                    f
            },
            cleanData: function(e, t) {
                var n, r, o, a, s = 0, l = x.expando, u = x.cache, c = x.support.deleteExpando, f = x.event.special;
                for (; null != (n = e[s]); s++)
                    if ((t || x.acceptData(n)) && (o = n[l],
                        a = o && u[o])) {
                        if (a.events)
                            for (r in a.events)
                                f[r] ? x.event.remove(n, r) : x.removeEvent(n, r, a.handle);
                        u[o] && (delete u[o],
                            c ? delete n[l] : typeof n.removeAttribute !== i ? n.removeAttribute(l) : n[l] = null,
                            p.push(o))
                    }
            },
            _evalUrl: function(e) {
                return x.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    async: !1,
                    global: !1,
                    throws: !0
                })
            }
        }),
            x.fn.extend({
                wrapAll: function(e) {
                    if (x.isFunction(e))
                        return this.each(function(t) {
                            x(this).wrapAll(e.call(this, t))
                        });
                    if (this[0]) {
                        var t = x(e, this[0].ownerDocument).eq(0).clone(!0);
                        this[0].parentNode && t.insertBefore(this[0]),
                            t.map(function() {
                                var e = this;
                                while (e.firstChild && 1 === e.firstChild.nodeType)
                                    e = e.firstChild;
                                return e
                            }).append(this)
                    }
                    return this
                },
                wrapInner: function(e) {
                    return x.isFunction(e) ? this.each(function(t) {
                        x(this).wrapInner(e.call(this, t))
                    }) : this.each(function() {
                        var t = x(this)
                            , n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    })
                },
                wrap: function(e) {
                    var t = x.isFunction(e);
                    return this.each(function(n) {
                        x(this).wrapAll(t ? e.call(this, n) : e)
                    })
                },
                unwrap: function() {
                    return this.parent().each(function() {
                        x.nodeName(this, "body") || x(this).replaceWith(this.childNodes)
                    }).end()
                }
            });
        var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i, It = /opacity\s*=\s*([^)]*)/, zt = /^(top|right|bottom|left)$/, Xt = /^(none|table(?!-c[ea]).+)/, Ut = /^margin/, Vt = RegExp("^(" + w + ")(.*)$", "i"), Yt = RegExp("^(" + w + ")(?!px)[a-z%]+$", "i"), Jt = RegExp("^([+-])=(" + w + ")", "i"), Gt = {
            BODY: "block"
        }, Qt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, Kt = {
            letterSpacing: 0,
            fontWeight: 400
        }, Zt = ["Top", "Right", "Bottom", "Left"], en = ["Webkit", "O", "Moz", "ms"];
        function tn(e, t) {
            if (t in e)
                return t;
            var n = t.charAt(0).toUpperCase() + t.slice(1)
                , r = t
                , i = en.length;
            while (i--)
                if (t = en[i] + n,
                t in e)
                    return t;
            return r
        }
        function nn(e, t) {
            return e = t || e,
            "none" === x.css(e, "display") || !x.contains(e.ownerDocument, e)
        }
        function rn(e, t) {
            var n, r, i, o = [], a = 0, s = e.length;
            for (; s > a; a++)
                r = e[a],
                r.style && (o[a] = x._data(r, "olddisplay"),
                    n = r.style.display,
                    t ? (o[a] || "none" !== n || (r.style.display = ""),
                    "" === r.style.display && nn(r) && (o[a] = x._data(r, "olddisplay", ln(r.nodeName)))) : o[a] || (i = nn(r),
                    (n && "none" !== n || !i) && x._data(r, "olddisplay", i ? n : x.css(r, "display"))));
            for (a = 0; s > a; a++)
                r = e[a],
                r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
            return e
        }
        x.fn.extend({
            css: function(e, n) {
                return x.access(this, function(e, n, r) {
                    var i, o, a = {}, s = 0;
                    if (x.isArray(n)) {
                        for (o = Rt(e),
                                 i = n.length; i > s; s++)
                            a[n[s]] = x.css(e, n[s], !1, o);
                        return a
                    }
                    return r !== t ? x.style(e, n, r) : x.css(e, n)
                }, e, n, arguments.length > 1)
            },
            show: function() {
                return rn(this, !0)
            },
            hide: function() {
                return rn(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    nn(this) ? x(this).show() : x(this).hide()
                })
            }
        }),
            x.extend({
                cssHooks: {
                    opacity: {
                        get: function(e, t) {
                            if (t) {
                                var n = Wt(e, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    columnCount: !0,
                    fillOpacity: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {
                    float: x.support.cssFloat ? "cssFloat" : "styleFloat"
                },
                style: function(e, n, r, i) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var o, a, s, l = x.camelCase(n), u = e.style;
                        if (n = x.cssProps[l] || (x.cssProps[l] = tn(u, l)),
                            s = x.cssHooks[n] || x.cssHooks[l],
                        r === t)
                            return s && "get"in s && (o = s.get(e, !1, i)) !== t ? o : u[n];
                        if (a = typeof r,
                        "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(x.css(e, n)),
                            a = "number"),
                            !(null == r || "number" === a && isNaN(r) || ("number" !== a || x.cssNumber[l] || (r += "px"),
                            x.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (u[n] = "inherit"),
                            s && "set"in s && (r = s.set(e, r, i)) === t)))
                            try {
                                u[n] = r
                            } catch (c) {}
                    }
                },
                css: function(e, n, r, i) {
                    var o, a, s, l = x.camelCase(n);
                    return n = x.cssProps[l] || (x.cssProps[l] = tn(e.style, l)),
                        s = x.cssHooks[n] || x.cssHooks[l],
                    s && "get"in s && (a = s.get(e, !0, r)),
                    a === t && (a = Wt(e, n, i)),
                    "normal" === a && n in Kt && (a = Kt[n]),
                        "" === r || r ? (o = parseFloat(a),
                            r === !0 || x.isNumeric(o) ? o || 0 : a) : a
                }
            }),
            e.getComputedStyle ? (Rt = function(t) {
                    return e.getComputedStyle(t, null)
                }
                    ,
                    Wt = function(e, n, r) {
                        var i, o, a, s = r || Rt(e), l = s ? s.getPropertyValue(n) || s[n] : t, u = e.style;
                        return s && ("" !== l || x.contains(e.ownerDocument, e) || (l = x.style(e, n)),
                        Yt.test(l) && Ut.test(n) && (i = u.width,
                            o = u.minWidth,
                            a = u.maxWidth,
                            u.minWidth = u.maxWidth = u.width = l,
                            l = s.width,
                            u.width = i,
                            u.minWidth = o,
                            u.maxWidth = a)),
                            l
                    }
            ) : a.documentElement.currentStyle && (Rt = function(e) {
                    return e.currentStyle
                }
                    ,
                    Wt = function(e, n, r) {
                        var i, o, a, s = r || Rt(e), l = s ? s[n] : t, u = e.style;
                        return null == l && u && u[n] && (l = u[n]),
                        Yt.test(l) && !zt.test(n) && (i = u.left,
                            o = e.runtimeStyle,
                            a = o && o.left,
                        a && (o.left = e.currentStyle.left),
                            u.left = "fontSize" === n ? "1em" : l,
                            l = u.pixelLeft + "px",
                            u.left = i,
                        a && (o.left = a)),
                            "" === l ? "auto" : l
                    }
            );
        function on(e, t, n) {
            var r = Vt.exec(t);
            return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
        }
        function an(e, t, n, r, i) {
            var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0
                , a = 0;
            for (; 4 > o; o += 2)
                "margin" === n && (a += x.css(e, n + Zt[o], !0, i)),
                    r ? ("content" === n && (a -= x.css(e, "padding" + Zt[o], !0, i)),
                    "margin" !== n && (a -= x.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += x.css(e, "padding" + Zt[o], !0, i),
                    "padding" !== n && (a += x.css(e, "border" + Zt[o] + "Width", !0, i)));
            return a
        }
        function sn(e, t, n) {
            var r = !0
                , i = "width" === t ? e.offsetWidth : e.offsetHeight
                , o = Rt(e)
                , a = x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, o);
            if (0 >= i || null == i) {
                if (i = Wt(e, t, o),
                (0 > i || null == i) && (i = e.style[t]),
                    Yt.test(i))
                    return i;
                r = a && (x.support.boxSizingReliable || i === e.style[t]),
                    i = parseFloat(i) || 0
            }
            return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px"
        }
        function ln(e) {
            var t = a
                , n = Gt[e];
            return n || (n = un(e, t),
            "none" !== n && n || (Pt = (Pt || x("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement),
                t = (Pt[0].contentWindow || Pt[0].contentDocument).document,
                t.write("<!doctype html><html><body>"),
                t.close(),
                n = un(e, t),
                Pt.detach()),
                Gt[e] = n),
                n
        }
        function un(e, t) {
            var n = x(t.createElement(e)).appendTo(t.body)
                , r = x.css(n[0], "display");
            return n.remove(),
                r
        }
        x.each(["height", "width"], function(e, n) {
            x.cssHooks[n] = {
                get: function(e, r, i) {
                    return r ? 0 === e.offsetWidth && Xt.test(x.css(e, "display")) ? x.swap(e, Qt, function() {
                        return sn(e, n, i)
                    }) : sn(e, n, i) : t
                },
                set: function(e, t, r) {
                    var i = r && Rt(e);
                    return on(e, t, r ? an(e, n, r, x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, i), i) : 0)
                }
            }
        }),
        x.support.opacity || (x.cssHooks.opacity = {
            get: function(e, t) {
                return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            },
            set: function(e, t) {
                var n = e.style
                    , r = e.currentStyle
                    , i = x.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : ""
                    , o = r && r.filter || n.filter || "";
                n.zoom = 1,
                (t >= 1 || "" === t) && "" === x.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"),
                "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i)
            }
        }),
            x(function() {
                x.support.reliableMarginRight || (x.cssHooks.marginRight = {
                    get: function(e, n) {
                        return n ? x.swap(e, {
                            display: "inline-block"
                        }, Wt, [e, "marginRight"]) : t
                    }
                }),
                !x.support.pixelPosition && x.fn.position && x.each(["top", "left"], function(e, n) {
                    x.cssHooks[n] = {
                        get: function(e, r) {
                            return r ? (r = Wt(e, n),
                                Yt.test(r) ? x(e).position()[n] + "px" : r) : t
                        }
                    }
                })
            }),
        x.expr && x.expr.filters && (x.expr.filters.hidden = function(e) {
                return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !x.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || x.css(e, "display"))
            }
                ,
                x.expr.filters.visible = function(e) {
                    return !x.expr.filters.hidden(e)
                }
        ),
            x.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function(e, t) {
                x.cssHooks[e + t] = {
                    expand: function(n) {
                        var r = 0
                            , i = {}
                            , o = "string" == typeof n ? n.split(" ") : [n];
                        for (; 4 > r; r++)
                            i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0];
                        return i
                    }
                },
                Ut.test(e) || (x.cssHooks[e + t].set = on)
            });
        var cn = /%20/g
            , pn = /\[\]$/
            , fn = /\r?\n/g
            , dn = /^(?:submit|button|image|reset|file)$/i
            , hn = /^(?:input|select|textarea|keygen)/i;
        x.fn.extend({
            serialize: function() {
                return x.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = x.prop(this, "elements");
                    return e ? x.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !x(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Ct.test(e))
                }).map(function(e, t) {
                    var n = x(this).val();
                    return null == n ? null : x.isArray(n) ? x.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(fn, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(fn, "\r\n")
                    }
                }).get()
            }
        }),
            x.param = function(e, n) {
                var r, i = [], o = function(e, t) {
                    t = x.isFunction(t) ? t() : null == t ? "" : t,
                        i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
                if (n === t && (n = x.ajaxSettings && x.ajaxSettings.traditional),
                x.isArray(e) || e.jquery && !x.isPlainObject(e))
                    x.each(e, function() {
                        o(this.name, this.value)
                    });
                else
                    for (r in e)
                        gn(r, e[r], n, o);
                return i.join("&").replace(cn, "+")
            }
        ;
        function gn(e, t, n, r) {
            var i;
            if (x.isArray(t))
                x.each(t, function(t, i) {
                    n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
                });
            else if (n || "object" !== x.type(t))
                r(e, t);
            else
                for (i in t)
                    gn(e + "[" + i + "]", t[i], n, r)
        }
        x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            x.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }),
            x.fn.extend({
                hover: function(e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                },
                bind: function(e, t, n) {
                    return this.on(e, null, t, n)
                },
                unbind: function(e, t) {
                    return this.off(e, null, t)
                },
                delegate: function(e, t, n, r) {
                    return this.on(t, e, n, r)
                },
                undelegate: function(e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                }
            });
        var mn, yn, vn = x.now(), bn = /\?/, xn = /#.*$/, wn = /([?&])_=[^&]*/, Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Cn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Nn = /^(?:GET|HEAD)$/, kn = /^\/\//, En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Sn = x.fn.load, An = {}, jn = {}, Dn = "*/".concat("*");
        try {
            yn = o.href
        } catch (Ln) {
            yn = a.createElement("a"),
                yn.href = "",
                yn = yn.href
        }
        mn = En.exec(yn.toLowerCase()) || [];
        function Hn(e) {
            return function(t, n) {
                "string" != typeof t && (n = t,
                    t = "*");
                var r, i = 0, o = t.toLowerCase().match(T) || [];
                if (x.isFunction(n))
                    while (r = o[i++])
                        "+" === r[0] ? (r = r.slice(1) || "*",
                            (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
            }
        }
        function qn(e, n, r, i) {
            var o = {}
                , a = e === jn;
            function s(l) {
                var u;
                return o[l] = !0,
                    x.each(e[l] || [], function(e, l) {
                        var c = l(n, r, i);
                        return "string" != typeof c || a || o[c] ? a ? !(u = c) : t : (n.dataTypes.unshift(c),
                            s(c),
                            !1)
                    }),
                    u
            }
            return s(n.dataTypes[0]) || !o["*"] && s("*")
        }
        function _n(e, n) {
            var r, i, o = x.ajaxSettings.flatOptions || {};
            for (i in n)
                n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
            return r && x.extend(!0, e, r),
                e
        }
        x.fn.load = function(e, n, r) {
            if ("string" != typeof e && Sn)
                return Sn.apply(this, arguments);
            var i, o, a, s = this, l = e.indexOf(" ");
            return l >= 0 && (i = e.slice(l, e.length),
                e = e.slice(0, l)),
                x.isFunction(n) ? (r = n,
                    n = t) : n && "object" == typeof n && (a = "POST"),
            s.length > 0 && x.ajax({
                url: e,
                type: a,
                dataType: "html",
                data: n
            }).done(function(e) {
                o = arguments,
                    s.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e)
            }).complete(r && function(e, t) {
                s.each(r, o || [e.responseText, t, e])
            }
            ),
                this
        }
            ,
            x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
                x.fn[t] = function(e) {
                    return this.on(t, e)
                }
            }),
            x.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: yn,
                    type: "GET",
                    isLocal: Cn.test(mn[1]),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": Dn,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /xml/,
                        html: /html/,
                        json: /json/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": x.parseJSON,
                        "text xml": x.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(e, t) {
                    return t ? _n(_n(e, x.ajaxSettings), t) : _n(x.ajaxSettings, e)
                },
                ajaxPrefilter: Hn(An),
                ajaxTransport: Hn(jn),
                ajax: function(e, n) {
                    "object" == typeof e && (n = e,
                        e = t),
                        n = n || {};
                    var r, i, o, a, s, l, u, c, p = x.ajaxSetup({}, n), f = p.context || p, d = p.context && (f.nodeType || f.jquery) ? x(f) : x.event, h = x.Deferred(), g = x.Callbacks("once memory"), m = p.statusCode || {}, y = {}, v = {}, b = 0, w = "canceled", C = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (2 === b) {
                                if (!c) {
                                    c = {};
                                    while (t = Tn.exec(a))
                                        c[t[1].toLowerCase()] = t[2]
                                }
                                t = c[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return 2 === b ? a : null
                        },
                        setRequestHeader: function(e, t) {
                            var n = e.toLowerCase();
                            return b || (e = v[n] = v[n] || e,
                                y[e] = t),
                                this
                        },
                        overrideMimeType: function(e) {
                            return b || (p.mimeType = e),
                                this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (2 > b)
                                    for (t in e)
                                        m[t] = [m[t], e[t]];
                                else
                                    C.always(e[C.status]);
                            return this
                        },
                        abort: function(e) {
                            var t = e || w;
                            return u && u.abort(t),
                                k(0, t),
                                this
                        }
                    };
                    if (h.promise(C).complete = g.add,
                        C.success = C.done,
                        C.error = C.fail,
                        p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"),
                        p.type = n.method || n.type || p.method || p.type,
                        p.dataTypes = x.trim(p.dataType || "*").toLowerCase().match(T) || [""],
                    null == p.crossDomain && (r = En.exec(p.url.toLowerCase()),
                        p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (mn[3] || ("http:" === mn[1] ? "80" : "443")))),
                    p.data && p.processData && "string" != typeof p.data && (p.data = x.param(p.data, p.traditional)),
                        qn(An, p, n, C),
                    2 === b)
                        return C;
                    l = p.global,
                    l && 0 === x.active++ && x.event.trigger("ajaxStart"),
                        p.type = p.type.toUpperCase(),
                        p.hasContent = !Nn.test(p.type),
                        o = p.url,
                    p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data,
                        delete p.data),
                    p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)),
                    p.ifModified && (x.lastModified[o] && C.setRequestHeader("If-Modified-Since", x.lastModified[o]),
                    x.etag[o] && C.setRequestHeader("If-None-Match", x.etag[o])),
                    (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", p.contentType),
                        C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]);
                    for (i in p.headers)
                        C.setRequestHeader(i, p.headers[i]);
                    if (p.beforeSend && (p.beforeSend.call(f, C, p) === !1 || 2 === b))
                        return C.abort();
                    w = "abort";
                    for (i in {
                        success: 1,
                        error: 1,
                        complete: 1
                    })
                        C[i](p[i]);
                    if (u = qn(jn, p, n, C)) {
                        C.readyState = 1,
                        l && d.trigger("ajaxSend", [C, p]),
                        p.async && p.timeout > 0 && (s = setTimeout(function() {
                            C.abort("timeout")
                        }, p.timeout));
                        try {
                            b = 1,
                                u.send(y, k)
                        } catch (N) {
                            if (!(2 > b))
                                throw N;
                            k(-1, N)
                        }
                    } else
                        k(-1, "No Transport");
                    function k(e, n, r, i) {
                        var c, y, v, w, T, N = n;
                        2 !== b && (b = 2,
                        s && clearTimeout(s),
                            u = t,
                            a = i || "",
                            C.readyState = e > 0 ? 4 : 0,
                            c = e >= 200 && 300 > e || 304 === e,
                        r && (w = Mn(p, C, r)),
                            w = On(p, w, C, c),
                            c ? (p.ifModified && (T = C.getResponseHeader("Last-Modified"),
                            T && (x.lastModified[o] = T),
                                T = C.getResponseHeader("etag"),
                            T && (x.etag[o] = T)),
                                204 === e || "HEAD" === p.type ? N = "nocontent" : 304 === e ? N = "notmodified" : (N = w.state,
                                    y = w.data,
                                    v = w.error,
                                    c = !v)) : (v = N,
                            (e || !N) && (N = "error",
                            0 > e && (e = 0))),
                            C.status = e,
                            C.statusText = (n || N) + "",
                            c ? h.resolveWith(f, [y, N, C]) : h.rejectWith(f, [C, N, v]),
                            C.statusCode(m),
                            m = t,
                        l && d.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? y : v]),
                            g.fireWith(f, [C, N]),
                        l && (d.trigger("ajaxComplete", [C, p]),
                        --x.active || x.event.trigger("ajaxStop")))
                    }
                    return C
                },
                getJSON: function(e, t, n) {
                    return x.get(e, t, n, "json")
                },
                getScript: function(e, n) {
                    return x.get(e, t, n, "script")
                }
            }),
            x.each(["get", "post"], function(e, n) {
                x[n] = function(e, r, i, o) {
                    return x.isFunction(r) && (o = o || i,
                        i = r,
                        r = t),
                        x.ajax({
                            url: e,
                            type: n,
                            dataType: o,
                            data: r,
                            success: i
                        })
                }
            });
        function Mn(e, n, r) {
            var i, o, a, s, l = e.contents, u = e.dataTypes;
            while ("*" === u[0])
                u.shift(),
                o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
            if (o)
                for (s in l)
                    if (l[s] && l[s].test(o)) {
                        u.unshift(s);
                        break
                    }
            if (u[0]in r)
                a = u[0];
            else {
                for (s in r) {
                    if (!u[0] || e.converters[s + " " + u[0]]) {
                        a = s;
                        break
                    }
                    i || (i = s)
                }
                a = a || i
            }
            return a ? (a !== u[0] && u.unshift(a),
                r[a]) : t
        }
        function On(e, t, n, r) {
            var i, o, a, s, l, u = {}, c = e.dataTypes.slice();
            if (c[1])
                for (a in e.converters)
                    u[a.toLowerCase()] = e.converters[a];
            o = c.shift();
            while (o)
                if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                    l = o,
                    o = c.shift())
                    if ("*" === o)
                        o = l;
                    else if ("*" !== l && l !== o) {
                        if (a = u[l + " " + o] || u["* " + o],
                            !a)
                            for (i in u)
                                if (s = i.split(" "),
                                s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                                    a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0],
                                        c.unshift(s[1]));
                                    break
                                }
                        if (a !== !0)
                            if (a && e["throws"])
                                t = a(t);
                            else
                                try {
                                    t = a(t)
                                } catch (p) {
                                    return {
                                        state: "parsererror",
                                        error: a ? p : "No conversion from " + l + " to " + o
                                    }
                                }
                    }
            return {
                state: "success",
                data: t
            }
        }
        x.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(e) {
                    return x.globalEval(e),
                        e
                }
            }
        }),
            x.ajaxPrefilter("script", function(e) {
                e.cache === t && (e.cache = !1),
                e.crossDomain && (e.type = "GET",
                    e.global = !1)
            }),
            x.ajaxTransport("script", function(e) {
                if (e.crossDomain) {
                    var n, r = a.head || x("head")[0] || a.documentElement;
                    return {
                        send: function(t, i) {
                            n = a.createElement("script"),
                                n.async = !0,
                            e.scriptCharset && (n.charset = e.scriptCharset),
                                n.src = e.url,
                                n.onload = n.onreadystatechange = function(e, t) {
                                    (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null,
                                    n.parentNode && n.parentNode.removeChild(n),
                                        n = null,
                                    t || i(200, "success"))
                                }
                                ,
                                r.insertBefore(n, r.firstChild)
                        },
                        abort: function() {
                            n && n.onload(t, !0)
                        }
                    }
                }
            });
        var Fn = []
            , Bn = /(=)\?(?=&|$)|\?\?/;
        x.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Fn.pop() || x.expando + "_" + vn++;
                return this[e] = !0,
                    e
            }
        }),
            x.ajaxPrefilter("json jsonp", function(n, r, i) {
                var o, a, s, l = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data");
                return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = x.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback,
                    l ? n[l] = n[l].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o),
                    n.converters["script json"] = function() {
                        return s || x.error(o + " was not called"),
                            s[0]
                    }
                    ,
                    n.dataTypes[0] = "json",
                    a = e[o],
                    e[o] = function() {
                        s = arguments
                    }
                    ,
                    i.always(function() {
                        e[o] = a,
                        n[o] && (n.jsonpCallback = r.jsonpCallback,
                            Fn.push(o)),
                        s && x.isFunction(a) && a(s[0]),
                            s = a = t
                    }),
                    "script") : t
            });
        var Pn, Rn, Wn = 0, $n = e.ActiveXObject && function() {
                var e;
                for (e in Pn)
                    Pn[e](t, !0)
            }
        ;
        function In() {
            try {
                return new e.XMLHttpRequest
            } catch (t) {}
        }
        function zn() {
            try {
                return new e.ActiveXObject("Microsoft.XMLHTTP")
            } catch (t) {}
        }
        x.ajaxSettings.xhr = e.ActiveXObject ? function() {
                return !this.isLocal && In() || zn()
            }
            : In,
            Rn = x.ajaxSettings.xhr(),
            x.support.cors = !!Rn && "withCredentials"in Rn,
            Rn = x.support.ajax = !!Rn,
        Rn && x.ajaxTransport(function(n) {
            if (!n.crossDomain || x.support.cors) {
                var r;
                return {
                    send: function(i, o) {
                        var a, s, l = n.xhr();
                        if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async),
                            n.xhrFields)
                            for (s in n.xhrFields)
                                l[s] = n.xhrFields[s];
                        n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType),
                        n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (s in i)
                                l.setRequestHeader(s, i[s])
                        } catch (u) {}
                        l.send(n.hasContent && n.data || null),
                            r = function(e, i) {
                                var s, u, c, p;
                                try {
                                    if (r && (i || 4 === l.readyState))
                                        if (r = t,
                                        a && (l.onreadystatechange = x.noop,
                                        $n && delete Pn[a]),
                                            i)
                                            4 !== l.readyState && l.abort();
                                        else {
                                            p = {},
                                                s = l.status,
                                                u = l.getAllResponseHeaders(),
                                            "string" == typeof l.responseText && (p.text = l.responseText);
                                            try {
                                                c = l.statusText
                                            } catch (f) {
                                                c = ""
                                            }
                                            s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404
                                        }
                                } catch (d) {
                                    i || o(-1, d)
                                }
                                p && o(s, c, p, u)
                            }
                            ,
                            n.async ? 4 === l.readyState ? setTimeout(r) : (a = ++Wn,
                            $n && (Pn || (Pn = {},
                                x(e).unload($n)),
                                Pn[a] = r),
                                l.onreadystatechange = r) : r()
                    },
                    abort: function() {
                        r && r(t, !0)
                    }
                }
            }
        });
        var Xn, Un, Vn = /^(?:toggle|show|hide)$/, Yn = RegExp("^(?:([+-])=|)(" + w + ")([a-z%]*)$", "i"), Jn = /queueHooks$/, Gn = [nr], Qn = {
            "*": [function(e, t) {
                var n = this.createTween(e, t)
                    , r = n.cur()
                    , i = Yn.exec(t)
                    , o = i && i[3] || (x.cssNumber[e] ? "" : "px")
                    , a = (x.cssNumber[e] || "px" !== o && +r) && Yn.exec(x.css(n.elem, e))
                    , s = 1
                    , l = 20;
                if (a && a[3] !== o) {
                    o = o || a[3],
                        i = i || [],
                        a = +r || 1;
                    do {
                        s = s || ".5",
                            a /= s,
                            x.style(n.elem, e, a + o)
                    } while (s !== (s = n.cur() / r) && 1 !== s && --l)
                }
                return i && (a = n.start = +a || +r || 0,
                    n.unit = o,
                    n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]),
                    n
            }
            ]
        };
        function Kn() {
            return setTimeout(function() {
                Xn = t
            }),
                Xn = x.now()
        }
        function Zn(e, t, n) {
            var r, i = (Qn[t] || []).concat(Qn["*"]), o = 0, a = i.length;
            for (; a > o; o++)
                if (r = i[o].call(n, t, e))
                    return r
        }
        function er(e, t, n) {
            var r, i, o = 0, a = Gn.length, s = x.Deferred().always(function() {
                delete l.elem
            }), l = function() {
                if (i)
                    return !1;
                var t = Xn || Kn()
                    , n = Math.max(0, u.startTime + u.duration - t)
                    , r = n / u.duration || 0
                    , o = 1 - r
                    , a = 0
                    , l = u.tweens.length;
                for (; l > a; a++)
                    u.tweens[a].run(o);
                return s.notifyWith(e, [u, o, n]),
                    1 > o && l ? n : (s.resolveWith(e, [u]),
                        !1)
            }, u = s.promise({
                elem: e,
                props: x.extend({}, t),
                opts: x.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Xn || Kn(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = x.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(r),
                        r
                },
                stop: function(t) {
                    var n = 0
                        , r = t ? u.tweens.length : 0;
                    if (i)
                        return this;
                    for (i = !0; r > n; n++)
                        u.tweens[n].run(1);
                    return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]),
                        this
                }
            }), c = u.props;
            for (tr(c, u.opts.specialEasing); a > o; o++)
                if (r = Gn[o].call(u, e, c, u.opts))
                    return r;
            return x.map(c, Zn, u),
            x.isFunction(u.opts.start) && u.opts.start.call(e, u),
                x.fx.timer(x.extend(l, {
                    elem: e,
                    anim: u,
                    queue: u.opts.queue
                })),
                u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }
        function tr(e, t) {
            var n, r, i, o, a;
            for (n in e)
                if (r = x.camelCase(n),
                    i = t[r],
                    o = e[n],
                x.isArray(o) && (i = o[1],
                    o = e[n] = o[0]),
                n !== r && (e[r] = o,
                    delete e[n]),
                    a = x.cssHooks[r],
                a && "expand"in a) {
                    o = a.expand(o),
                        delete e[r];
                    for (n in o)
                        n in e || (e[n] = o[n],
                            t[n] = i)
                } else
                    t[r] = i
        }
        x.Animation = x.extend(er, {
            tweener: function(e, t) {
                x.isFunction(e) ? (t = e,
                    e = ["*"]) : e = e.split(" ");
                var n, r = 0, i = e.length;
                for (; i > r; r++)
                    n = e[r],
                        Qn[n] = Qn[n] || [],
                        Qn[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? Gn.unshift(e) : Gn.push(e)
            }
        });
        function nr(e, t, n) {
            var r, i, o, a, s, l, u = this, c = {}, p = e.style, f = e.nodeType && nn(e), d = x._data(e, "fxshow");
            n.queue || (s = x._queueHooks(e, "fx"),
            null == s.unqueued && (s.unqueued = 0,
                    l = s.empty.fire,
                    s.empty.fire = function() {
                        s.unqueued || l()
                    }
            ),
                s.unqueued++,
                u.always(function() {
                    u.always(function() {
                        s.unqueued--,
                        x.queue(e, "fx").length || s.empty.fire()
                    })
                })),
            1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY],
            "inline" === x.css(e, "display") && "none" === x.css(e, "float") && (x.support.inlineBlockNeedsLayout && "inline" !== ln(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")),
            n.overflow && (p.overflow = "hidden",
            x.support.shrinkWrapBlocks || u.always(function() {
                p.overflow = n.overflow[0],
                    p.overflowX = n.overflow[1],
                    p.overflowY = n.overflow[2]
            }));
            for (r in t)
                if (i = t[r],
                    Vn.exec(i)) {
                    if (delete t[r],
                        o = o || "toggle" === i,
                    i === (f ? "hide" : "show"))
                        continue;
                    c[r] = d && d[r] || x.style(e, r)
                }
            if (!x.isEmptyObject(c)) {
                d ? "hidden"in d && (f = d.hidden) : d = x._data(e, "fxshow", {}),
                o && (d.hidden = !f),
                    f ? x(e).show() : u.done(function() {
                        x(e).hide()
                    }),
                    u.done(function() {
                        var t;
                        x._removeData(e, "fxshow");
                        for (t in c)
                            x.style(e, t, c[t])
                    });
                for (r in c)
                    a = Zn(f ? d[r] : 0, r, u),
                    r in d || (d[r] = a.start,
                    f && (a.end = a.start,
                        a.start = "width" === r || "height" === r ? 1 : 0))
            }
        }
        function rr(e, t, n, r, i) {
            return new rr.prototype.init(e,t,n,r,i)
        }
        x.Tween = rr,
            rr.prototype = {
                constructor: rr,
                init: function(e, t, n, r, i, o) {
                    this.elem = e,
                        this.prop = n,
                        this.easing = i || "swing",
                        this.options = t,
                        this.start = this.now = this.cur(),
                        this.end = r,
                        this.unit = o || (x.cssNumber[n] ? "" : "px")
                },
                cur: function() {
                    var e = rr.propHooks[this.prop];
                    return e && e.get ? e.get(this) : rr.propHooks._default.get(this)
                },
                run: function(e) {
                    var t, n = rr.propHooks[this.prop];
                    return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e,
                        this.now = (this.end - this.start) * t + this.start,
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                        n && n.set ? n.set(this) : rr.propHooks._default.set(this),
                        this
                }
            },
            rr.prototype.init.prototype = rr.prototype,
            rr.propHooks = {
                _default: {
                    get: function(e) {
                        var t;
                        return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, ""),
                            t && "auto" !== t ? t : 0) : e.elem[e.prop]
                    },
                    set: function(e) {
                        x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                    }
                }
            },
            rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
                set: function(e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            },
            x.each(["toggle", "show", "hide"], function(e, t) {
                var n = x.fn[t];
                x.fn[t] = function(e, r, i) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
                }
            }),
            x.fn.extend({
                fadeTo: function(e, t, n, r) {
                    return this.filter(nn).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, r)
                },
                animate: function(e, t, n, r) {
                    var i = x.isEmptyObject(e)
                        , o = x.speed(t, n, r)
                        , a = function() {
                        var t = er(this, x.extend({}, e), o);
                        (i || x._data(this, "finish")) && t.stop(!0)
                    };
                    return a.finish = a,
                        i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
                },
                stop: function(e, n, r) {
                    var i = function(e) {
                        var t = e.stop;
                        delete e.stop,
                            t(r)
                    };
                    return "string" != typeof e && (r = n,
                        n = e,
                        e = t),
                    n && e !== !1 && this.queue(e || "fx", []),
                        this.each(function() {
                            var t = !0
                                , n = null != e && e + "queueHooks"
                                , o = x.timers
                                , a = x._data(this);
                            if (n)
                                a[n] && a[n].stop && i(a[n]);
                            else
                                for (n in a)
                                    a[n] && a[n].stop && Jn.test(n) && i(a[n]);
                            for (n = o.length; n--; )
                                o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r),
                                    t = !1,
                                    o.splice(n, 1));
                            (t || !r) && x.dequeue(this, e)
                        })
                },
                finish: function(e) {
                    return e !== !1 && (e = e || "fx"),
                        this.each(function() {
                            var t, n = x._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = x.timers, a = r ? r.length : 0;
                            for (n.finish = !0,
                                     x.queue(this, e, []),
                                 i && i.stop && i.stop.call(this, !0),
                                     t = o.length; t--; )
                                o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                                    o.splice(t, 1));
                            for (t = 0; a > t; t++)
                                r[t] && r[t].finish && r[t].finish.call(this);
                            delete n.finish
                        })
                }
            });
        function ir(e, t) {
            var n, r = {
                height: e
            }, i = 0;
            for (t = t ? 1 : 0; 4 > i; i += 2 - t)
                n = Zt[i],
                    r["margin" + n] = r["padding" + n] = e;
            return t && (r.opacity = r.width = e),
                r
        }
        x.each({
            slideDown: ir("show"),
            slideUp: ir("hide"),
            slideToggle: ir("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            x.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }),
            x.speed = function(e, t, n) {
                var r = e && "object" == typeof e ? x.extend({}, e) : {
                    complete: n || !n && t || x.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !x.isFunction(t) && t
                };
                return r.duration = x.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in x.fx.speeds ? x.fx.speeds[r.duration] : x.fx.speeds._default,
                (null == r.queue || r.queue === !0) && (r.queue = "fx"),
                    r.old = r.complete,
                    r.complete = function() {
                        x.isFunction(r.old) && r.old.call(this),
                        r.queue && x.dequeue(this, r.queue)
                    }
                    ,
                    r
            }
            ,
            x.easing = {
                linear: function(e) {
                    return e
                },
                swing: function(e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                }
            },
            x.timers = [],
            x.fx = rr.prototype.init,
            x.fx.tick = function() {
                var e, n = x.timers, r = 0;
                for (Xn = x.now(); n.length > r; r++)
                    e = n[r],
                    e() || n[r] !== e || n.splice(r--, 1);
                n.length || x.fx.stop(),
                    Xn = t
            }
            ,
            x.fx.timer = function(e) {
                e() && x.timers.push(e) && x.fx.start()
            }
            ,
            x.fx.interval = 13,
            x.fx.start = function() {
                Un || (Un = setInterval(x.fx.tick, x.fx.interval))
            }
            ,
            x.fx.stop = function() {
                clearInterval(Un),
                    Un = null
            }
            ,
            x.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            },
            x.fx.step = {},
        x.expr && x.expr.filters && (x.expr.filters.animated = function(e) {
                return x.grep(x.timers, function(t) {
                    return e === t.elem
                }).length
            }
        ),
            x.fn.offset = function(e) {
                if (arguments.length)
                    return e === t ? this : this.each(function(t) {
                        x.offset.setOffset(this, e, t)
                    });
                var n, r, o = {
                    top: 0,
                    left: 0
                }, a = this[0], s = a && a.ownerDocument;
                if (s)
                    return n = s.documentElement,
                        x.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()),
                            r = or(s),
                            {
                                top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
                                left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
                            }) : o
            }
            ,
            x.offset = {
                setOffset: function(e, t, n) {
                    var r = x.css(e, "position");
                    "static" === r && (e.style.position = "relative");
                    var i = x(e), o = i.offset(), a = x.css(e, "top"), s = x.css(e, "left"), l = ("absolute" === r || "fixed" === r) && x.inArray("auto", [a, s]) > -1, u = {}, c = {}, p, f;
                    l ? (c = i.position(),
                        p = c.top,
                        f = c.left) : (p = parseFloat(a) || 0,
                        f = parseFloat(s) || 0),
                    x.isFunction(t) && (t = t.call(e, n, o)),
                    null != t.top && (u.top = t.top - o.top + p),
                    null != t.left && (u.left = t.left - o.left + f),
                        "using"in t ? t.using.call(e, u) : i.css(u)
                }
            },
            x.fn.extend({
                position: function() {
                    if (this[0]) {
                        var e, t, n = {
                            top: 0,
                            left: 0
                        }, r = this[0];
                        return "fixed" === x.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(),
                            t = this.offset(),
                        x.nodeName(e[0], "html") || (n = e.offset()),
                            n.top += x.css(e[0], "borderTopWidth", !0),
                            n.left += x.css(e[0], "borderLeftWidth", !0)),
                            {
                                top: t.top - n.top - x.css(r, "marginTop", !0),
                                left: t.left - n.left - x.css(r, "marginLeft", !0)
                            }
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        var e = this.offsetParent || s;
                        while (e && !x.nodeName(e, "html") && "static" === x.css(e, "position"))
                            e = e.offsetParent;
                        return e || s
                    })
                }
            }),
            x.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function(e, n) {
                var r = /Y/.test(n);
                x.fn[e] = function(i) {
                    return x.access(this, function(e, i, o) {
                        var a = or(e);
                        return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? x(a).scrollLeft() : o, r ? o : x(a).scrollTop()) : e[i] = o,
                            t)
                    }, e, i, arguments.length, null)
                }
            });
        function or(e) {
            return x.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
        }
        x.each({
            Height: "height",
            Width: "width"
        }, function(e, n) {
            x.each({
                padding: "inner" + e,
                content: n,
                "": "outer" + e
            }, function(r, i) {
                x.fn[i] = function(i, o) {
                    var a = arguments.length && (r || "boolean" != typeof i)
                        , s = r || (i === !0 || o === !0 ? "margin" : "border");
                    return x.access(this, function(n, r, i) {
                        var o;
                        return x.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement,
                            Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? x.css(n, r, s) : x.style(n, r, i, s)
                    }, n, a ? i : t, a, null)
                }
            })
        }),
            x.fn.size = function() {
                return this.length
            }
            ,
            x.fn.andSelf = x.fn.addBack,
            "object" == typeof module && module && "object" == typeof module.exports ? module.exports = x : (e.jQuery = e.$ = x,
            "function" == typeof define && define.amd && define("jquery", [], function() {
                return x
            }))
    }
)(window);
(function(i, s, o, g, r, a, m) {
        i["GoogleAnalyticsObject"] = r;
        i[r] = i[r] || function() {
            (i[r].q = i[r].q || []).push(arguments)
        }
            ,
            i[r].l = 1 * new Date;
        a = s.createElement(o),
            m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m)
    }
)(window, document, "script", "https://www.google-analytics.com/analytics.js", "ga");
ga("create", "UA-120430858-2", "auto");
ga("send", "pageview");
var productCode = "mua";
var arrayBanner = ["1"];
var arrayBigBanner = [];
var CodeProduct = "mua";
var CookieProduct = "mua_Cookie";
var CookieBottomProduct = "mua_CookieBottom";
var MASHTTPListCustomSource = [{
    url: "###",
    status: 22
}];
var isIE6 = false;
var xmlObjAds;
var CookieBottomProductIdlogin = "";
jQuery(window).load(function() {
    var cookiesTime = jQuery("#cookiesTime").length > 0 && jQuery("#cookiesTime").val() != "" && !isNaN(jQuery("#cookiesTime").val()) ? parseFloat(jQuery("#cookiesTime").val()) : 120;
    var cookiesTimeBottom = jQuery("#cookiesTimeBottom").length > 0 && jQuery("#cookiesTimeBottom").val() != "" && !isNaN(jQuery("#cookiesTimeBottom").val()) ? parseFloat(jQuery("#cookiesTimeBottom").val()) : 120;
    var checkBanner = initAdsBanner(CodeProduct, CookieProduct, cookiesTime);
    if (!checkBanner) {
        initAdsBannerBottom(CodeProduct, CookieBottomProduct, cookiesTimeBottom);
        initAdsBannerBottomIL(CodeProduct, CookieBottomProductIdlogin, cookiesTimeBottom)
    }
});
function initAdsBanner(CodeProduct, CookieProduct, time) {
    var classCookieTime = new CookieTime;
    if (classCookieTime.MethodGetCookie(CookieProduct) == null || classCookieTime.MethodGetCookie(CookieProduct) == "") {
        var exptime = 6e4 * time;
        var classBannerPopup = new BannerPopup;
        return classBannerPopup.MethodBannerPopup(CodeProduct, exptime)
    }
    return false
}
function initAdsBannerBottom(CodeProduct, CookieBottomProduct, time) {
    var classCookieTimeBottom = new CookieTime;
    if (classCookieTimeBottom.MethodGetCookie(CookieBottomProduct) == null || classCookieTimeBottom.MethodGetCookie(CookieBottomProduct) == "") {
        var exptime = 6e4 * time;
        var classBannerPopupBottom = new BannerPopupBottom;
        classBannerPopupBottom.MethodBannerPopupBottom(CodeProduct, exptime)
    }
}
function initAdsBannerBottomIL(CodeProduct, CookieBottomProductIdlogin, time) {
    var classCookieTimeBottomIL = new CookieTime;
    if (classCookieTimeBottomIL.MethodGetCookie(CookieBottomProductIdlogin) == null || classCookieTimeBottomIL.MethodGetCookie(CookieBottomProductIdlogin) == "") {
        var exptime = 6e4 * time;
        var classBannerPopupBottomIL = new BannerPopupBottomIdLogin;
        classBannerPopupBottomIL.MethodBannerPopupBottom(CodeProduct, exptime)
    }
}
BannerPopup = function() {
    this.MethodOverlay = function() {
        var offsetTop = jQuery(window).scrollTop();
        var h = jQuery(window).height();
        var w = jQuery(window).width();
        var hdoc = jQuery(document).height();
        var hpopup = jQuery("#bannerPopup").height();
        var wpopup = jQuery("#bannerPopup").width();
        jQuery("#thewindowbackground").css({
            height: hdoc,
            width: w
        });
        if (offsetTop > 0) {
            if (isIE6) {
                jQuery("#bannerPopup").stop().animate({
                    top: offsetTop + (h - hpopup > 0 ? (h - hpopup) / 2 : 0)
                }, 400)
            } else {
                jQuery("#bannerPopup").addClass("fixedBanner")
            }
        }
        jQuery("#bannerPopup").css({
            top: h - hpopup > 0 ? (h - hpopup) / 2 : 0,
            left: (w - wpopup) / 2
        });
        jQuery(window).resize(function() {
            offsetTop = jQuery(window).scrollTop();
            h = jQuery(window).height();
            w = jQuery(window).width();
            jQuery("#thewindowbackground").css({
                height: hdoc,
                width: w
            });
            if (isIE6) {
                jQuery("#bannerPopup").css({
                    top: offsetTop + (h - hpopup > 0 ? (h - hpopup) / 2 : 0),
                    left: (w - wpopup) / 2
                })
            } else {
                jQuery("#bannerPopup").css({
                    top: h - hpopup > 0 ? (h - hpopup) / 2 : 0,
                    left: (w - wpopup) / 2
                })
            }
        });
        jQuery(window).scroll(function() {
            offsetTop = jQuery(window).scrollTop();
            if (offsetTop > 0) {
                if (isIE6) {
                    jQuery("#bannerPopup").stop().animate({
                        top: offsetTop + (h - hpopup > 0 ? (h - hpopup) / 2 : 0)
                    }, 400)
                } else {
                    jQuery("#bannerPopup").addClass("fixedBanner")
                }
            } else {
                jQuery("#bannerPopup").removeClass("fixedBanner");
                jQuery("#bannerPopup").css({
                    top: h - hpopup > 0 ? (h - hpopup) / 2 : 0
                })
            }
        })
    }
    ;
    this.ClosePopup = function(exptime) {
        jQuery("#thewindowbackground").css("display", "none");
        jQuery("#bannerPopup").css("display", "none");
        var classCookieTime = new CookieTime;
        classCookieTime.MethodSetCookie(CodeProduct + "_Cookie", CodeProduct, exptime)
    }
    ;
    this.checkDate = function(_date, delay) {}
    ;
    this.MethodBannerPopup = function(CodeProduct, exptime) {
        var self = this;
        var eventName = jQuery("#bannerPopup > div > a > img").attr("alt");
        if (eventName == "" || eventName == undefined) {
            eventName = CodeProduct + "_popupcenter"
        }
        if (jQuery("#bannerPopup > div > a > img").length > 0 || jQuery("#bannerPopup  embed").length > 0) {
            self.MethodOverlay();
            var typePopup = jQuery("#typePopup").length > 0 && jQuery("#typePopup").val() != "" && !isNaN(jQuery("#typePopup").val()) ? parseFloat(jQuery("#typePopup").val()) : 0;
            if (jQuery("#bannerPopup > div > a > img").length > 0) {
                var linkBanner = jQuery("#bannerPopup img").attr("src");
                var typeImg = linkBanner.substr(linkBanner.length - 3, 3);
                if (typeImg == "png" || typeImg == "PNG" || typePopup == 1) {
                    jQuery("#bannerPopup").css({
                        background: "none"
                    })
                }
            }
            jQuery("#bannerPopup > div > a").click(function() {
                self.ClosePopup(exptime)
            });
            jQuery("#thewindowbackground").click(function() {
                _gaq.push(["_trackEvent", " Popup Center", "overlay-close", eventName, 1]);
                self.ClosePopup(exptime)
            });
            jQuery("#bannerPopup > div > a > img").click(function() {});
            jQuery("#btClose").click(function() {
                self.ClosePopup(exptime);
                return false
            });
            jQuery("#popupBtnClose").click(function() {
                if (jQuery("#chkClose").is(":checked")) {
                    var cookiesTimeSecond = jQuery("#cookiesTimeSecond").length > 0 && jQuery("#cookiesTimeSecond").val() != "" && !isNaN(jQuery("#cookiesTimeSecond").val()) ? parseFloat(jQuery("#cookiesTimeSecond").val()) : 120;
                    exptime = 6e4 * cookiesTimeSecond
                }
                self.ClosePopup(exptime);
                return false
            });
            jQuery("#thewindowbackground").css({
                display: "block"
            });
            jQuery("#bannerPopup").css({
                display: "block"
            });
            return true
        }
    }
    ;
    return this
}
;
BannerPopupBottom = function() {
    this.MouseScroll = function() {
        var h = jQuery(window).height();
        if (jQuery(".MenuFooter").length > 0) {
            h = h - jQuery(".MenuFooter").height()
        }
        var w = jQuery(window).width();
        var offsetTop = jQuery(window).scrollTop();
        var hdoc = jQuery(document).height();
        var hpopup = jQuery("#bannerPopupBottom").outerHeight();
        var wpopup = jQuery("#bannerPopupBottom").width();
        jQuery("#thewindowbackground").css({
            height: hdoc,
            width: w
        });
        jQuery("#bannerPopupBottom").css({
            top: h - hpopup - 2,
            right: 0
        });
        if (offsetTop > 0) {
            if (isIE6) {
                jQuery("#bannerPopupBottom").stop().animate({
                    top: offsetTop + h - hpopup - 2
                }, 400)
            } else {
                jQuery("#bannerPopupBottom").addClass("fixedBanner")
            }
        }
        jQuery("#bannerPopupBottom").css({
            top: h - hpopup - 2
        });
        jQuery(window).resize(function() {
            offsetTop = jQuery(window).scrollTop();
            h = jQuery(window).height();
            if (jQuery(".MenuFooter").length > 0) {
                h = h - jQuery(".MenuFooter").height()
            }
            w = jQuery(window).width();
            jQuery("#thewindowbackground").css({
                height: hdoc,
                width: w
            });
            if (isIE6) {
                jQuery("#bannerPopupBottom").css({
                    top: offsetTop + h - hpopup - 2
                })
            } else {
                jQuery("#bannerPopupBottom").css({
                    top: h - hpopup - 2
                })
            }
        });
        jQuery(window).scroll(function() {
            offsetTop = jQuery(window).scrollTop();
            if (offsetTop > 0) {
                if (isIE6) {
                    jQuery("#bannerPopupBottom").stop().animate({
                        top: offsetTop + h - hpopup - 2
                    }, 400)
                } else {
                    jQuery("#bannerPopupBottom").addClass("fixedBanner")
                }
            } else {
                jQuery("#bannerPopupBottom").removeClass("fixedBanner");
                jQuery("#bannerPopupBottom").css({
                    top: h - hpopup - 2
                })
            }
        });
        jQuery(window).load(function() {
            var document_height = jQuery(document).height();
            jQuery("#thewindowbackground").css({
                height: document_height
            })
        })
    }
    ;
    this.checkDate = function(_date, delay) {}
    ;
    this.ClosePopupBottom = function() {
        jQuery("#bannerPopupBottom").css("display", "none")
    }
    ;
    this.MethodBannerPopupBottom = function(CodeProduct, exptime) {
        var self = this;
        var eventName = jQuery("#bannerPopupBottom > div > a > img").attr("alt");
        if (eventName == "" || eventName == undefined) {
            eventName = CodeProduct + "_popupbottom"
        }
        if (jQuery("#bannerPopupBottom > div > a > img").length > 0) {
            self.MouseScroll();
            jQuery("#btCloseBottom").click(function() {
                self.ClosePopupBottom();
                var classCookieTimeBottom = new CookieTime;
                classCookieTimeBottom.MethodSetCookie(CodeProduct + "_CookieBottom", CodeProduct, exptime);
                return false
            });
            jQuery("#bannerPopupBottom > div > a > img").click(function() {});
            jQuery("#bannerPopupBottom").css({
                display: "block"
            })
        }
    }
    ;
    var timer = setTimeout("jQuery('#bannerPopupBottom').fadeOut('slow')", 3e4);
    return this
}
;
BannerPopupBottomIdLogin = function() {
    this.MouseScroll = function() {
        var h = jQuery(window).height();
        if (jQuery(".MenuFooter").length > 0) {
            h = h - jQuery(".MenuFooter").height()
        }
        var w = jQuery(window).width();
        var offsetTop = jQuery(window).scrollTop();
        var hdoc = jQuery(document).height();
        var hpopup = jQuery("#bannerPopupBottom").outerHeight();
        var wpopup = jQuery("#bannerPopupBottom").width();
        jQuery("#thewindowbackground").css({
            height: hdoc,
            width: w
        });
        jQuery("#bannerPopupBottom").css({
            top: h - hpopup - 2,
            right: 0
        });
        if (offsetTop > 0) {
            if (isIE6) {
                jQuery("#bannerPopupBottom").stop().animate({
                    top: offsetTop + h - hpopup - 2
                }, 400)
            } else {
                jQuery("#bannerPopupBottom").addClass("fixedBanner")
            }
        }
        jQuery("#bannerPopupBottom").css({
            top: h - hpopup - 2
        });
        jQuery(window).resize(function() {
            offsetTop = jQuery(window).scrollTop();
            h = jQuery(window).height();
            if (jQuery(".MenuFooter").length > 0) {
                h = h - jQuery(".MenuFooter").height()
            }
            w = jQuery(window).width();
            jQuery("#thewindowbackground").css({
                height: hdoc,
                width: w
            });
            if (isIE6) {
                jQuery("#bannerPopupBottom").css({
                    top: offsetTop + h - hpopup - 2
                })
            } else {
                jQuery("#bannerPopupBottom").css({
                    top: h - hpopup - 2
                })
            }
        });
        jQuery(window).scroll(function() {
            offsetTop = jQuery(window).scrollTop();
            if (offsetTop > 0) {
                if (isIE6) {
                    jQuery("#bannerPopupBottom").stop().animate({
                        top: offsetTop + h - hpopup - 2
                    }, 400)
                } else {
                    jQuery("#bannerPopupBottom").addClass("fixedBanner")
                }
            } else {
                jQuery("#bannerPopupBottom").removeClass("fixedBanner");
                jQuery("#bannerPopupBottom").css({
                    top: h - hpopup - 2
                })
            }
        });
        jQuery(window).load(function() {
            var document_height = jQuery(document).height();
            jQuery("#thewindowbackground").css({
                height: document_height
            })
        })
    }
    ;
    this.checkDate = function(_date, delay) {}
    ;
    this.ClosePopupBottom = function() {
        jQuery("#bannerPopupBottom").css("display", "none")
    }
    ;
    this.MethodBannerPopupBottom = function(CodeProduct, exptime) {
        var self = this;
        var eventName = jQuery("#bannerPopupBottom > div > a > img").attr("alt");
        if (eventName == "" || eventName == undefined) {
            eventName = CodeProduct + "_popupbottom"
        }
        if (jQuery("#bannerPopupBottom > div > a > img").length > 0) {
            self.MouseScroll();
            jQuery("#btCloseBottom").click(function() {
                self.ClosePopupBottom();
                var classCookieTimeBottom = new CookieTime;
                classCookieTimeBottom.MethodSetCookie(CodeProduct + "_CookieBottom2", CodeProduct, exptime);
                return false
            });
            jQuery("#bannerPopupBottom > div > a > img").click(function() {});
            jQuery("#bannerPopupBottom").css({
                display: "block"
            })
        }
    }
    ;
    var timer = setTimeout("jQuery('#bannerPopupBottom').fadeOut('slow')", 3e4);
    return this
}
;
CookieTime = function() {
    var expiredays = 0;
    this.MethodGetCookie = function(CookieName) {
        if (document.cookie.length > 0) {
            CookieStart = document.cookie.indexOf(CookieName + "=");
            if (CookieStart != -1) {
                CookieStart = CookieStart + CookieName.length + 1;
                CookieEnd = document.cookie.indexOf(";", CookieStart);
                if (CookieEnd == -1)
                    CookieEnd = document.cookie.length;
                return unescape(document.cookie.substring(CookieStart, CookieEnd))
            }
        }
        return ""
    }
    ;
    this.MethodSetCookie = function(CookieName, value, expiredays) {
        var exdate = new Date;
        exdate.setTime(exdate.getTime() + expiredays);
        document.cookie = CookieName + "=" + escape(value) + (expiredays == null ? "" : ";expires=" + exdate.toUTCString())
    }
}
;
!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Swiper = t()
}(this, function() {
    "use strict";
    var f = "undefined" == typeof document ? {
        body: {},
        addEventListener: function() {},
        removeEventListener: function() {},
        activeElement: {
            blur: function() {},
            nodeName: ""
        },
        querySelector: function() {
            return null
        },
        querySelectorAll: function() {
            return []
        },
        getElementById: function() {
            return null
        },
        createEvent: function() {
            return {
                initEvent: function() {}
            }
        },
        createElement: function() {
            return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute: function() {},
                getElementsByTagName: function() {
                    return []
                }
            }
        },
        location: {
            hash: ""
        }
    } : document
        , J = "undefined" == typeof window ? {
        document: f,
        navigator: {
            userAgent: ""
        },
        location: {},
        history: {},
        CustomEvent: function() {
            return this
        },
        addEventListener: function() {},
        removeEventListener: function() {},
        getComputedStyle: function() {
            return {
                getPropertyValue: function() {
                    return ""
                }
            }
        },
        Image: function() {},
        Date: function() {},
        screen: {},
        setTimeout: function() {},
        clearTimeout: function() {}
    } : window
        , l = function(e) {
        for (var t = 0; t < e.length; t += 1)
            this[t] = e[t];
        return this.length = e.length,
            this
    };
    function L(e, t) {
        var a = []
            , i = 0;
        if (e && !t && e instanceof l)
            return e;
        if (e)
            if ("string" == typeof e) {
                var s, r, n = e.trim();
                if (0 <= n.indexOf("<") && 0 <= n.indexOf(">")) {
                    var o = "div";
                    for (0 === n.indexOf("<li") && (o = "ul"),
                         0 === n.indexOf("<tr") && (o = "tbody"),
                         0 !== n.indexOf("<td") && 0 !== n.indexOf("<th") || (o = "tr"),
                         0 === n.indexOf("<tbody") && (o = "table"),
                         0 === n.indexOf("<option") && (o = "select"),
                             (r = f.createElement(o)).innerHTML = n,
                             i = 0; i < r.childNodes.length; i += 1)
                        a.push(r.childNodes[i])
                } else
                    for (s = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || f).querySelectorAll(e.trim()) : [f.getElementById(e.trim().split("#")[1])],
                             i = 0; i < s.length; i += 1)
                        s[i] && a.push(s[i])
            } else if (e.nodeType || e === J || e === f)
                a.push(e);
            else if (0 < e.length && e[0].nodeType)
                for (i = 0; i < e.length; i += 1)
                    a.push(e[i]);
        return new l(a)
    }
    function r(e) {
        for (var t = [], a = 0; a < e.length; a += 1)
            -1 === t.indexOf(e[a]) && t.push(e[a]);
        return t
    }
    L.fn = l.prototype,
        L.Class = l,
        L.Dom7 = l;
    var t = {
        addClass: function(e) {
            if (void 0 === e)
                return this;
            for (var t = e.split(" "), a = 0; a < t.length; a += 1)
                for (var i = 0; i < this.length; i += 1)
                    void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.add(t[a]);
            return this
        },
        removeClass: function(e) {
            for (var t = e.split(" "), a = 0; a < t.length; a += 1)
                for (var i = 0; i < this.length; i += 1)
                    void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.remove(t[a]);
            return this
        },
        hasClass: function(e) {
            return !!this[0] && this[0].classList.contains(e)
        },
        toggleClass: function(e) {
            for (var t = e.split(" "), a = 0; a < t.length; a += 1)
                for (var i = 0; i < this.length; i += 1)
                    void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.toggle(t[a]);
            return this
        },
        attr: function(e, t) {
            var a = arguments;
            if (1 === arguments.length && "string" == typeof e)
                return this[0] ? this[0].getAttribute(e) : void 0;
            for (var i = 0; i < this.length; i += 1)
                if (2 === a.length)
                    this[i].setAttribute(e, t);
                else
                    for (var s in e)
                        this[i][s] = e[s],
                            this[i].setAttribute(s, e[s]);
            return this
        },
        removeAttr: function(e) {
            for (var t = 0; t < this.length; t += 1)
                this[t].removeAttribute(e);
            return this
        },
        data: function(e, t) {
            var a;
            if (void 0 !== t) {
                for (var i = 0; i < this.length; i += 1)
                    (a = this[i]).dom7ElementDataStorage || (a.dom7ElementDataStorage = {}),
                        a.dom7ElementDataStorage[e] = t;
                return this
            }
            if (a = this[0]) {
                if (a.dom7ElementDataStorage && e in a.dom7ElementDataStorage)
                    return a.dom7ElementDataStorage[e];
                var s = a.getAttribute("data-" + e);
                return s || void 0
            }
        },
        transform: function(e) {
            for (var t = 0; t < this.length; t += 1) {
                var a = this[t].style;
                a.webkitTransform = e,
                    a.transform = e
            }
            return this
        },
        transition: function(e) {
            "string" != typeof e && (e += "ms");
            for (var t = 0; t < this.length; t += 1) {
                var a = this[t].style;
                a.webkitTransitionDuration = e,
                    a.transitionDuration = e
            }
            return this
        },
        on: function() {
            for (var e, t = [], a = arguments.length; a--; )
                t[a] = arguments[a];
            var i = t[0]
                , r = t[1]
                , n = t[2]
                , s = t[3];
            function o(e) {
                var t = e.target;
                if (t) {
                    var a = e.target.dom7EventData || [];
                    if (a.indexOf(e) < 0 && a.unshift(e),
                        L(t).is(r))
                        n.apply(t, a);
                    else
                        for (var i = L(t).parents(), s = 0; s < i.length; s += 1)
                            L(i[s]).is(r) && n.apply(i[s], a)
                }
            }
            function l(e) {
                var t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e),
                    n.apply(this, t)
            }
            "function" == typeof t[1] && (i = (e = t)[0],
                n = e[1],
                s = e[2],
                r = void 0),
            s || (s = !1);
            for (var d, p = i.split(" "), c = 0; c < this.length; c += 1) {
                var u = this[c];
                if (r)
                    for (d = 0; d < p.length; d += 1) {
                        var h = p[d];
                        u.dom7LiveListeners || (u.dom7LiveListeners = {}),
                        u.dom7LiveListeners[h] || (u.dom7LiveListeners[h] = []),
                            u.dom7LiveListeners[h].push({
                                listener: n,
                                proxyListener: o
                            }),
                            u.addEventListener(h, o, s)
                    }
                else
                    for (d = 0; d < p.length; d += 1) {
                        var v = p[d];
                        u.dom7Listeners || (u.dom7Listeners = {}),
                        u.dom7Listeners[v] || (u.dom7Listeners[v] = []),
                            u.dom7Listeners[v].push({
                                listener: n,
                                proxyListener: l
                            }),
                            u.addEventListener(v, l, s)
                    }
            }
            return this
        },
        off: function() {
            for (var e, t = [], a = arguments.length; a--; )
                t[a] = arguments[a];
            var i = t[0]
                , s = t[1]
                , r = t[2]
                , n = t[3];
            "function" == typeof t[1] && (i = (e = t)[0],
                r = e[1],
                n = e[2],
                s = void 0),
            n || (n = !1);
            for (var o = i.split(" "), l = 0; l < o.length; l += 1)
                for (var d = o[l], p = 0; p < this.length; p += 1) {
                    var c = this[p]
                        , u = void 0;
                    if (!s && c.dom7Listeners ? u = c.dom7Listeners[d] : s && c.dom7LiveListeners && (u = c.dom7LiveListeners[d]),
                    u && u.length)
                        for (var h = u.length - 1; 0 <= h; h -= 1) {
                            var v = u[h];
                            r && v.listener === r ? (c.removeEventListener(d, v.proxyListener, n),
                                u.splice(h, 1)) : r && v.listener && v.listener.dom7proxy && v.listener.dom7proxy === r ? (c.removeEventListener(d, v.proxyListener, n),
                                u.splice(h, 1)) : r || (c.removeEventListener(d, v.proxyListener, n),
                                u.splice(h, 1))
                        }
                }
            return this
        },
        trigger: function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            for (var a = e[0].split(" "), i = e[1], s = 0; s < a.length; s += 1)
                for (var r = a[s], n = 0; n < this.length; n += 1) {
                    var o = this[n]
                        , l = void 0;
                    try {
                        l = new J.CustomEvent(r,{
                            detail: i,
                            bubbles: !0,
                            cancelable: !0
                        })
                    } catch (e) {
                        (l = f.createEvent("Event")).initEvent(r, !0, !0),
                            l.detail = i
                    }
                    o.dom7EventData = e.filter(function(e, t) {
                        return 0 < t
                    }),
                        o.dispatchEvent(l),
                        o.dom7EventData = [],
                        delete o.dom7EventData
                }
            return this
        },
        transitionEnd: function(t) {
            var a, i = ["webkitTransitionEnd", "transitionend"], s = this;
            function r(e) {
                if (e.target === this)
                    for (t.call(this, e),
                             a = 0; a < i.length; a += 1)
                        s.off(i[a], r)
            }
            if (t)
                for (a = 0; a < i.length; a += 1)
                    s.on(i[a], r);
            return this
        },
        outerWidth: function(e) {
            if (0 < this.length) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        },
        outerHeight: function(e) {
            if (0 < this.length) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        },
        offset: function() {
            if (0 < this.length) {
                var e = this[0]
                    , t = e.getBoundingClientRect()
                    , a = f.body
                    , i = e.clientTop || a.clientTop || 0
                    , s = e.clientLeft || a.clientLeft || 0
                    , r = e === J ? J.scrollY : e.scrollTop
                    , n = e === J ? J.scrollX : e.scrollLeft;
                return {
                    top: t.top + r - i,
                    left: t.left + n - s
                }
            }
            return null
        },
        css: function(e, t) {
            var a;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (a = 0; a < this.length; a += 1)
                        for (var i in e)
                            this[a].style[i] = e[i];
                    return this
                }
                if (this[0])
                    return J.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (a = 0; a < this.length; a += 1)
                    this[a].style[e] = t;
                return this
            }
            return this
        },
        each: function(e) {
            if (!e)
                return this;
            for (var t = 0; t < this.length; t += 1)
                if (!1 === e.call(this[t], t, this[t]))
                    return this;
            return this
        },
        html: function(e) {
            if (void 0 === e)
                return this[0] ? this[0].innerHTML : void 0;
            for (var t = 0; t < this.length; t += 1)
                this[t].innerHTML = e;
            return this
        },
        text: function(e) {
            if (void 0 === e)
                return this[0] ? this[0].textContent.trim() : null;
            for (var t = 0; t < this.length; t += 1)
                this[t].textContent = e;
            return this
        },
        is: function(e) {
            var t, a, i = this[0];
            if (!i || void 0 === e)
                return !1;
            if ("string" == typeof e) {
                if (i.matches)
                    return i.matches(e);
                if (i.webkitMatchesSelector)
                    return i.webkitMatchesSelector(e);
                if (i.msMatchesSelector)
                    return i.msMatchesSelector(e);
                for (t = L(e),
                         a = 0; a < t.length; a += 1)
                    if (t[a] === i)
                        return !0;
                return !1
            }
            if (e === f)
                return i === f;
            if (e === J)
                return i === J;
            if (e.nodeType || e instanceof l) {
                for (t = e.nodeType ? [e] : e,
                         a = 0; a < t.length; a += 1)
                    if (t[a] === i)
                        return !0;
                return !1
            }
            return !1
        },
        index: function() {
            var e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling); )
                    1 === t.nodeType && (e += 1);
                return e
            }
        },
        eq: function(e) {
            if (void 0 === e)
                return this;
            var t, a = this.length;
            return new l(a - 1 < e ? [] : e < 0 ? (t = a + e) < 0 ? [] : [this[t]] : [this[e]])
        },
        append: function() {
            for (var e, t = [], a = arguments.length; a--; )
                t[a] = arguments[a];
            for (var i = 0; i < t.length; i += 1) {
                e = t[i];
                for (var s = 0; s < this.length; s += 1)
                    if ("string" == typeof e) {
                        var r = f.createElement("div");
                        for (r.innerHTML = e; r.firstChild; )
                            this[s].appendChild(r.firstChild)
                    } else if (e instanceof l)
                        for (var n = 0; n < e.length; n += 1)
                            this[s].appendChild(e[n]);
                    else
                        this[s].appendChild(e)
            }
            return this
        },
        prepend: function(e) {
            var t, a;
            for (t = 0; t < this.length; t += 1)
                if ("string" == typeof e) {
                    var i = f.createElement("div");
                    for (i.innerHTML = e,
                             a = i.childNodes.length - 1; 0 <= a; a -= 1)
                        this[t].insertBefore(i.childNodes[a], this[t].childNodes[0])
                } else if (e instanceof l)
                    for (a = 0; a < e.length; a += 1)
                        this[t].insertBefore(e[a], this[t].childNodes[0]);
                else
                    this[t].insertBefore(e, this[t].childNodes[0]);
            return this
        },
        next: function(e) {
            return 0 < this.length ? e ? this[0].nextElementSibling && L(this[0].nextElementSibling).is(e) ? new l([this[0].nextElementSibling]) : new l([]) : this[0].nextElementSibling ? new l([this[0].nextElementSibling]) : new l([]) : new l([])
        },
        nextAll: function(e) {
            var t = []
                , a = this[0];
            if (!a)
                return new l([]);
            for (; a.nextElementSibling; ) {
                var i = a.nextElementSibling;
                e ? L(i).is(e) && t.push(i) : t.push(i),
                    a = i
            }
            return new l(t)
        },
        prev: function(e) {
            if (0 < this.length) {
                var t = this[0];
                return e ? t.previousElementSibling && L(t.previousElementSibling).is(e) ? new l([t.previousElementSibling]) : new l([]) : t.previousElementSibling ? new l([t.previousElementSibling]) : new l([])
            }
            return new l([])
        },
        prevAll: function(e) {
            var t = []
                , a = this[0];
            if (!a)
                return new l([]);
            for (; a.previousElementSibling; ) {
                var i = a.previousElementSibling;
                e ? L(i).is(e) && t.push(i) : t.push(i),
                    a = i
            }
            return new l(t)
        },
        parent: function(e) {
            for (var t = [], a = 0; a < this.length; a += 1)
                null !== this[a].parentNode && (e ? L(this[a].parentNode).is(e) && t.push(this[a].parentNode) : t.push(this[a].parentNode));
            return L(r(t))
        },
        parents: function(e) {
            for (var t = [], a = 0; a < this.length; a += 1)
                for (var i = this[a].parentNode; i; )
                    e ? L(i).is(e) && t.push(i) : t.push(i),
                        i = i.parentNode;
            return L(r(t))
        },
        closest: function(e) {
            var t = this;
            return void 0 === e ? new l([]) : (t.is(e) || (t = t.parents(e).eq(0)),
                t)
        },
        find: function(e) {
            for (var t = [], a = 0; a < this.length; a += 1)
                for (var i = this[a].querySelectorAll(e), s = 0; s < i.length; s += 1)
                    t.push(i[s]);
            return new l(t)
        },
        children: function(e) {
            for (var t = [], a = 0; a < this.length; a += 1)
                for (var i = this[a].childNodes, s = 0; s < i.length; s += 1)
                    e ? 1 === i[s].nodeType && L(i[s]).is(e) && t.push(i[s]) : 1 === i[s].nodeType && t.push(i[s]);
            return new l(r(t))
        },
        remove: function() {
            for (var e = 0; e < this.length; e += 1)
                this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        },
        add: function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            var a, i;
            for (a = 0; a < e.length; a += 1) {
                var s = L(e[a]);
                for (i = 0; i < s.length; i += 1)
                    this[this.length] = s[i],
                        this.length += 1
            }
            return this
        },
        styles: function() {
            return this[0] ? J.getComputedStyle(this[0], null) : {}
        }
    };
    Object.keys(t).forEach(function(e) {
        L.fn[e] = t[e]
    });
    var e, a, i, s, ee = {
        deleteProps: function(e) {
            var t = e;
            Object.keys(t).forEach(function(e) {
                try {
                    t[e] = null
                } catch (e) {}
                try {
                    delete t[e]
                } catch (e) {}
            })
        },
        nextTick: function(e, t) {
            return void 0 === t && (t = 0),
                setTimeout(e, t)
        },
        now: function() {
            return Date.now()
        },
        getTranslate: function(e, t) {
            var a, i, s;
            void 0 === t && (t = "x");
            var r = J.getComputedStyle(e, null);
            return J.WebKitCSSMatrix ? (6 < (i = r.transform || r.webkitTransform).split(",").length && (i = i.split(", ").map(function(e) {
                return e.replace(",", ".")
            }).join(", ")),
                s = new J.WebKitCSSMatrix("none" === i ? "" : i)) : a = (s = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","),
            "x" === t && (i = J.WebKitCSSMatrix ? s.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])),
            "y" === t && (i = J.WebKitCSSMatrix ? s.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])),
            i || 0
        },
        parseUrlQuery: function(e) {
            var t, a, i, s, r = {}, n = e || J.location.href;
            if ("string" == typeof n && n.length)
                for (s = (a = (n = -1 < n.indexOf("?") ? n.replace(/\S*\?/, "") : "").split("&").filter(function(e) {
                    return "" !== e
                })).length,
                         t = 0; t < s; t += 1)
                    i = a[t].replace(/#\S+/g, "").split("="),
                        r[decodeURIComponent(i[0])] = void 0 === i[1] ? void 0 : decodeURIComponent(i[1]) || "";
            return r
        },
        isObject: function(e) {
            return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
        },
        extend: function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            for (var a = Object(e[0]), i = 1; i < e.length; i += 1) {
                var s = e[i];
                if (null != s)
                    for (var r = Object.keys(Object(s)), n = 0, o = r.length; n < o; n += 1) {
                        var l = r[n]
                            , d = Object.getOwnPropertyDescriptor(s, l);
                        void 0 !== d && d.enumerable && (ee.isObject(a[l]) && ee.isObject(s[l]) ? ee.extend(a[l], s[l]) : !ee.isObject(a[l]) && ee.isObject(s[l]) ? (a[l] = {},
                            ee.extend(a[l], s[l])) : a[l] = s[l])
                    }
            }
            return a
        }
    }, te = (i = f.createElement("div"),
        {
            touch: J.Modernizr && !0 === J.Modernizr.touch || !!(0 < J.navigator.maxTouchPoints || "ontouchstart"in J || J.DocumentTouch && f instanceof J.DocumentTouch),
            pointerEvents: !!(J.navigator.pointerEnabled || J.PointerEvent || "maxTouchPoints"in J.navigator && 0 < J.navigator.maxTouchPoints),
            prefixedPointerEvents: !!J.navigator.msPointerEnabled,
            transition: (a = i.style,
            "transition"in a || "webkitTransition"in a || "MozTransition"in a),
            transforms3d: J.Modernizr && !0 === J.Modernizr.csstransforms3d || (e = i.style,
            "webkitPerspective"in e || "MozPerspective"in e || "OPerspective"in e || "MsPerspective"in e || "perspective"in e),
            flexbox: function() {
                for (var e = i.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), a = 0; a < t.length; a += 1)
                    if (t[a]in e)
                        return !0;
                return !1
            }(),
            observer: "MutationObserver"in J || "WebkitMutationObserver"in J,
            passiveListener: function() {
                var e = !1;
                try {
                    var t = Object.defineProperty({}, "passive", {
                        get: function() {
                            e = !0
                        }
                    });
                    J.addEventListener("testPassiveListener", null, t)
                } catch (e) {}
                return e
            }(),
            gestures: "ongesturestart"in J
        }), I = {
        isIE: !!J.navigator.userAgent.match(/Trident/g) || !!J.navigator.userAgent.match(/MSIE/g),
        isEdge: !!J.navigator.userAgent.match(/Edge/g),
        isSafari: (s = J.navigator.userAgent.toLowerCase(),
        0 <= s.indexOf("safari") && s.indexOf("chrome") < 0 && s.indexOf("android") < 0),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(J.navigator.userAgent)
    }, n = function(e) {
        void 0 === e && (e = {});
        var t = this;
        t.params = e,
            t.eventsListeners = {},
        t.params && t.params.on && Object.keys(t.params.on).forEach(function(e) {
            t.on(e, t.params.on[e])
        })
    }, o = {
        components: {
            configurable: !0
        }
    };
    n.prototype.on = function(e, t, a) {
        var i = this;
        if ("function" != typeof t)
            return i;
        var s = a ? "unshift" : "push";
        return e.split(" ").forEach(function(e) {
            i.eventsListeners[e] || (i.eventsListeners[e] = []),
                i.eventsListeners[e][s](t)
        }),
            i
    }
        ,
        n.prototype.once = function(a, i, e) {
            var s = this;
            if ("function" != typeof i)
                return s;
            function r() {
                for (var e = [], t = arguments.length; t--; )
                    e[t] = arguments[t];
                i.apply(s, e),
                    s.off(a, r),
                r.f7proxy && delete r.f7proxy
            }
            return r.f7proxy = i,
                s.on(a, r, e)
        }
        ,
        n.prototype.off = function(e, i) {
            var s = this;
            return s.eventsListeners && e.split(" ").forEach(function(a) {
                void 0 === i ? s.eventsListeners[a] = [] : s.eventsListeners[a] && s.eventsListeners[a].length && s.eventsListeners[a].forEach(function(e, t) {
                    (e === i || e.f7proxy && e.f7proxy === i) && s.eventsListeners[a].splice(t, 1)
                })
            }),
                s
        }
        ,
        n.prototype.emit = function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            var a, i, s, r = this;
            return r.eventsListeners && ("string" == typeof e[0] || Array.isArray(e[0]) ? (a = e[0],
                i = e.slice(1, e.length),
                s = r) : (a = e[0].events,
                i = e[0].data,
                s = e[0].context || r),
                (Array.isArray(a) ? a : a.split(" ")).forEach(function(e) {
                    if (r.eventsListeners && r.eventsListeners[e]) {
                        var t = [];
                        r.eventsListeners[e].forEach(function(e) {
                            t.push(e)
                        }),
                            t.forEach(function(e) {
                                e.apply(s, i)
                            })
                    }
                })),
                r
        }
        ,
        n.prototype.useModulesParams = function(a) {
            var i = this;
            i.modules && Object.keys(i.modules).forEach(function(e) {
                var t = i.modules[e];
                t.params && ee.extend(a, t.params)
            })
        }
        ,
        n.prototype.useModules = function(i) {
            void 0 === i && (i = {});
            var s = this;
            s.modules && Object.keys(s.modules).forEach(function(e) {
                var a = s.modules[e]
                    , t = i[e] || {};
                a.instance && Object.keys(a.instance).forEach(function(e) {
                    var t = a.instance[e];
                    s[e] = "function" == typeof t ? t.bind(s) : t
                }),
                a.on && s.on && Object.keys(a.on).forEach(function(e) {
                    s.on(e, a.on[e])
                }),
                a.create && a.create.bind(s)(t)
            })
        }
        ,
        o.components.set = function(e) {
            this.use && this.use(e)
        }
        ,
        n.installModule = function(t) {
            for (var e = [], a = arguments.length - 1; 0 < a--; )
                e[a] = arguments[a + 1];
            var i = this;
            i.prototype.modules || (i.prototype.modules = {});
            var s = t.name || Object.keys(i.prototype.modules).length + "_" + ee.now();
            return (i.prototype.modules[s] = t).proto && Object.keys(t.proto).forEach(function(e) {
                i.prototype[e] = t.proto[e]
            }),
            t.static && Object.keys(t.static).forEach(function(e) {
                i[e] = t.static[e]
            }),
            t.install && t.install.apply(i, e),
                i
        }
        ,
        n.use = function(e) {
            for (var t = [], a = arguments.length - 1; 0 < a--; )
                t[a] = arguments[a + 1];
            var i = this;
            return Array.isArray(e) ? (e.forEach(function(e) {
                return i.installModule(e)
            }),
                i) : i.installModule.apply(i, [e].concat(t))
        }
        ,
        Object.defineProperties(n, o);
    var d = {
        updateSize: function() {
            var e, t, a = this, i = a.$el;
            e = void 0 !== a.params.width ? a.params.width : i[0].clientWidth,
                t = void 0 !== a.params.height ? a.params.height : i[0].clientHeight,
            0 === e && a.isHorizontal() || 0 === t && a.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10),
                t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10),
                ee.extend(a, {
                    width: e,
                    height: t,
                    size: a.isHorizontal() ? e : t
                }))
        },
        updateSlides: function() {
            var e = this
                , t = e.params
                , a = e.$wrapperEl
                , i = e.size
                , s = e.rtlTranslate
                , r = e.wrongRTL
                , n = e.virtual && t.virtual.enabled
                , o = n ? e.virtual.slides.length : e.slides.length
                , l = a.children("." + e.params.slideClass)
                , d = n ? e.virtual.slides.length : l.length
                , p = []
                , c = []
                , u = []
                , h = t.slidesOffsetBefore;
            "function" == typeof h && (h = t.slidesOffsetBefore.call(e));
            var v = t.slidesOffsetAfter;
            "function" == typeof v && (v = t.slidesOffsetAfter.call(e));
            var f = e.snapGrid.length
                , m = e.snapGrid.length
                , g = t.spaceBetween
                , b = -h
                , w = 0
                , y = 0;
            if (void 0 !== i) {
                var x, T;
                "string" == typeof g && 0 <= g.indexOf("%") && (g = parseFloat(g.replace("%", "")) / 100 * i),
                    e.virtualSize = -g,
                    s ? l.css({
                        marginLeft: "",
                        marginTop: ""
                    }) : l.css({
                        marginRight: "",
                        marginBottom: ""
                    }),
                1 < t.slidesPerColumn && (x = Math.floor(d / t.slidesPerColumn) === d / e.params.slidesPerColumn ? d : Math.ceil(d / t.slidesPerColumn) * t.slidesPerColumn,
                "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (x = Math.max(x, t.slidesPerView * t.slidesPerColumn)));
                for (var E, S = t.slidesPerColumn, C = x / S, M = Math.floor(d / t.slidesPerColumn), z = 0; z < d; z += 1) {
                    T = 0;
                    var P = l.eq(z);
                    if (1 < t.slidesPerColumn) {
                        var k = void 0
                            , $ = void 0
                            , L = void 0;
                        "column" === t.slidesPerColumnFill ? (L = z - ($ = Math.floor(z / S)) * S,
                        (M < $ || $ === M && L === S - 1) && S <= (L += 1) && (L = 0,
                            $ += 1),
                            k = $ + L * x / S,
                            P.css({
                                "-webkit-box-ordinal-group": k,
                                "-moz-box-ordinal-group": k,
                                "-ms-flex-order": k,
                                "-webkit-order": k,
                                order: k
                            })) : $ = z - (L = Math.floor(z / C)) * C,
                            P.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== L && t.spaceBetween && t.spaceBetween + "px").attr("data-swiper-column", $).attr("data-swiper-row", L)
                    }
                    if ("none" !== P.css("display")) {
                        if ("auto" === t.slidesPerView) {
                            var I = J.getComputedStyle(P[0], null)
                                , D = P[0].style.transform
                                , O = P[0].style.webkitTransform;
                            if (D && (P[0].style.transform = "none"),
                            O && (P[0].style.webkitTransform = "none"),
                                t.roundLengths)
                                T = e.isHorizontal() ? P.outerWidth(!0) : P.outerHeight(!0);
                            else if (e.isHorizontal()) {
                                var A = parseFloat(I.getPropertyValue("width"))
                                    , H = parseFloat(I.getPropertyValue("padding-left"))
                                    , N = parseFloat(I.getPropertyValue("padding-right"))
                                    , G = parseFloat(I.getPropertyValue("margin-left"))
                                    , B = parseFloat(I.getPropertyValue("margin-right"))
                                    , X = I.getPropertyValue("box-sizing");
                                T = X && "border-box" === X ? A + G + B : A + H + N + G + B
                            } else {
                                var Y = parseFloat(I.getPropertyValue("height"))
                                    , V = parseFloat(I.getPropertyValue("padding-top"))
                                    , F = parseFloat(I.getPropertyValue("padding-bottom"))
                                    , R = parseFloat(I.getPropertyValue("margin-top"))
                                    , q = parseFloat(I.getPropertyValue("margin-bottom"))
                                    , W = I.getPropertyValue("box-sizing");
                                T = W && "border-box" === W ? Y + R + q : Y + V + F + R + q
                            }
                            D && (P[0].style.transform = D),
                            O && (P[0].style.webkitTransform = O),
                            t.roundLengths && (T = Math.floor(T))
                        } else
                            T = (i - (t.slidesPerView - 1) * g) / t.slidesPerView,
                            t.roundLengths && (T = Math.floor(T)),
                            l[z] && (e.isHorizontal() ? l[z].style.width = T + "px" : l[z].style.height = T + "px");
                        l[z] && (l[z].swiperSlideSize = T),
                            u.push(T),
                            t.centeredSlides ? (b = b + T / 2 + w / 2 + g,
                            0 === w && 0 !== z && (b = b - i / 2 - g),
                            0 === z && (b = b - i / 2 - g),
                            Math.abs(b) < .001 && (b = 0),
                            t.roundLengths && (b = Math.floor(b)),
                            y % t.slidesPerGroup == 0 && p.push(b),
                                c.push(b)) : (t.roundLengths && (b = Math.floor(b)),
                            y % t.slidesPerGroup == 0 && p.push(b),
                                c.push(b),
                                b = b + T + g),
                            e.virtualSize += T + g,
                            w = T,
                            y += 1
                    }
                }
                if (e.virtualSize = Math.max(e.virtualSize, i) + v,
                s && r && ("slide" === t.effect || "coverflow" === t.effect) && a.css({
                    width: e.virtualSize + t.spaceBetween + "px"
                }),
                te.flexbox && !t.setWrapperSize || (e.isHorizontal() ? a.css({
                    width: e.virtualSize + t.spaceBetween + "px"
                }) : a.css({
                    height: e.virtualSize + t.spaceBetween + "px"
                })),
                1 < t.slidesPerColumn && (e.virtualSize = (T + t.spaceBetween) * x,
                    e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween,
                    e.isHorizontal() ? a.css({
                        width: e.virtualSize + t.spaceBetween + "px"
                    }) : a.css({
                        height: e.virtualSize + t.spaceBetween + "px"
                    }),
                    t.centeredSlides)) {
                    E = [];
                    for (var j = 0; j < p.length; j += 1) {
                        var U = p[j];
                        t.roundLengths && (U = Math.floor(U)),
                        p[j] < e.virtualSize + p[0] && E.push(U)
                    }
                    p = E
                }
                if (!t.centeredSlides) {
                    E = [];
                    for (var K = 0; K < p.length; K += 1) {
                        var _ = p[K];
                        t.roundLengths && (_ = Math.floor(_)),
                        p[K] <= e.virtualSize - i && E.push(_)
                    }
                    p = E,
                    1 < Math.floor(e.virtualSize - i) - Math.floor(p[p.length - 1]) && p.push(e.virtualSize - i)
                }
                if (0 === p.length && (p = [0]),
                0 !== t.spaceBetween && (e.isHorizontal() ? s ? l.css({
                    marginLeft: g + "px"
                }) : l.css({
                    marginRight: g + "px"
                }) : l.css({
                    marginBottom: g + "px"
                })),
                    t.centerInsufficientSlides) {
                    var Z = 0;
                    if (u.forEach(function(e) {
                        Z += e + (t.spaceBetween ? t.spaceBetween : 0)
                    }),
                    (Z -= t.spaceBetween) < i) {
                        var Q = (i - Z) / 2;
                        p.forEach(function(e, t) {
                            p[t] = e - Q
                        }),
                            c.forEach(function(e, t) {
                                c[t] = e + Q
                            })
                    }
                }
                ee.extend(e, {
                    slides: l,
                    snapGrid: p,
                    slidesGrid: c,
                    slidesSizesGrid: u
                }),
                d !== o && e.emit("slidesLengthChange"),
                p.length !== f && (e.params.watchOverflow && e.checkOverflow(),
                    e.emit("snapGridLengthChange")),
                c.length !== m && e.emit("slidesGridLengthChange"),
                (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset()
            }
        },
        updateAutoHeight: function(e) {
            var t, a = this, i = [], s = 0;
            if ("number" == typeof e ? a.setTransition(e) : !0 === e && a.setTransition(a.params.speed),
            "auto" !== a.params.slidesPerView && 1 < a.params.slidesPerView)
                for (t = 0; t < Math.ceil(a.params.slidesPerView); t += 1) {
                    var r = a.activeIndex + t;
                    if (r > a.slides.length)
                        break;
                    i.push(a.slides.eq(r)[0])
                }
            else
                i.push(a.slides.eq(a.activeIndex)[0]);
            for (t = 0; t < i.length; t += 1)
                if (void 0 !== i[t]) {
                    var n = i[t].offsetHeight;
                    s = s < n ? n : s
                }
            s && a.$wrapperEl.css("height", s + "px")
        },
        updateSlidesOffset: function() {
            for (var e = this.slides, t = 0; t < e.length; t += 1)
                e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
        },
        updateSlidesProgress: function(e) {
            void 0 === e && (e = this && this.translate || 0);
            var t = this
                , a = t.params
                , i = t.slides
                , s = t.rtlTranslate;
            if (0 !== i.length) {
                void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
                var r = -e;
                s && (r = e),
                    i.removeClass(a.slideVisibleClass),
                    t.visibleSlidesIndexes = [],
                    t.visibleSlides = [];
                for (var n = 0; n < i.length; n += 1) {
                    var o = i[n]
                        , l = (r + (a.centeredSlides ? t.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + a.spaceBetween);
                    if (a.watchSlidesVisibility) {
                        var d = -(r - o.swiperSlideOffset)
                            , p = d + t.slidesSizesGrid[n];
                        (0 <= d && d < t.size || 0 < p && p <= t.size || d <= 0 && p >= t.size) && (t.visibleSlides.push(o),
                            t.visibleSlidesIndexes.push(n),
                            i.eq(n).addClass(a.slideVisibleClass))
                    }
                    o.progress = s ? -l : l
                }
                t.visibleSlides = L(t.visibleSlides)
            }
        },
        updateProgress: function(e) {
            void 0 === e && (e = this && this.translate || 0);
            var t = this
                , a = t.params
                , i = t.maxTranslate() - t.minTranslate()
                , s = t.progress
                , r = t.isBeginning
                , n = t.isEnd
                , o = r
                , l = n;
            0 === i ? n = r = !(s = 0) : (r = (s = (e - t.minTranslate()) / i) <= 0,
                n = 1 <= s),
                ee.extend(t, {
                    progress: s,
                    isBeginning: r,
                    isEnd: n
                }),
            (a.watchSlidesProgress || a.watchSlidesVisibility) && t.updateSlidesProgress(e),
            r && !o && t.emit("reachBeginning toEdge"),
            n && !l && t.emit("reachEnd toEdge"),
            (o && !r || l && !n) && t.emit("fromEdge"),
                t.emit("progress", s)
        },
        updateSlidesClasses: function() {
            var e, t = this, a = t.slides, i = t.params, s = t.$wrapperEl, r = t.activeIndex, n = t.realIndex, o = t.virtual && i.virtual.enabled;
            a.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass),
                (e = o ? t.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + r + '"]') : a.eq(r)).addClass(i.slideActiveClass),
            i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass));
            var l = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
            i.loop && 0 === l.length && (l = a.eq(0)).addClass(i.slideNextClass);
            var d = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
            i.loop && 0 === d.length && (d = a.eq(-1)).addClass(i.slidePrevClass),
            i.loop && (l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass),
                d.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass))
        },
        updateActiveIndex: function(e) {
            var t, a = this, i = a.rtlTranslate ? a.translate : -a.translate, s = a.slidesGrid, r = a.snapGrid, n = a.params, o = a.activeIndex, l = a.realIndex, d = a.snapIndex, p = e;
            if (void 0 === p) {
                for (var c = 0; c < s.length; c += 1)
                    void 0 !== s[c + 1] ? i >= s[c] && i < s[c + 1] - (s[c + 1] - s[c]) / 2 ? p = c : i >= s[c] && i < s[c + 1] && (p = c + 1) : i >= s[c] && (p = c);
                n.normalizeSlideIndex && (p < 0 || void 0 === p) && (p = 0)
            }
            if ((t = 0 <= r.indexOf(i) ? r.indexOf(i) : Math.floor(p / n.slidesPerGroup)) >= r.length && (t = r.length - 1),
            p !== o) {
                var u = parseInt(a.slides.eq(p).attr("data-swiper-slide-index") || p, 10);
                ee.extend(a, {
                    snapIndex: t,
                    realIndex: u,
                    previousIndex: o,
                    activeIndex: p
                }),
                    a.emit("activeIndexChange"),
                    a.emit("snapIndexChange"),
                l !== u && a.emit("realIndexChange"),
                    a.emit("slideChange")
            } else
                t !== d && (a.snapIndex = t,
                    a.emit("snapIndexChange"))
        },
        updateClickedSlide: function(e) {
            var t = this
                , a = t.params
                , i = L(e.target).closest("." + a.slideClass)[0]
                , s = !1;
            if (i)
                for (var r = 0; r < t.slides.length; r += 1)
                    t.slides[r] === i && (s = !0);
            if (!i || !s)
                return t.clickedSlide = void 0,
                    void (t.clickedIndex = void 0);
            t.clickedSlide = i,
                t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(L(i).attr("data-swiper-slide-index"), 10) : t.clickedIndex = L(i).index(),
            a.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
        }
    };
    var p = {
        getTranslate: function(e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            var t = this.params
                , a = this.rtlTranslate
                , i = this.translate
                , s = this.$wrapperEl;
            if (t.virtualTranslate)
                return a ? -i : i;
            var r = ee.getTranslate(s[0], e);
            return a && (r = -r),
            r || 0
        },
        setTranslate: function(e, t) {
            var a = this
                , i = a.rtlTranslate
                , s = a.params
                , r = a.$wrapperEl
                , n = a.progress
                , o = 0
                , l = 0;
            a.isHorizontal() ? o = i ? -e : e : l = e,
            s.roundLengths && (o = Math.floor(o),
                l = Math.floor(l)),
            s.virtualTranslate || (te.transforms3d ? r.transform("translate3d(" + o + "px, " + l + "px, 0px)") : r.transform("translate(" + o + "px, " + l + "px)")),
                a.previousTranslate = a.translate,
                a.translate = a.isHorizontal() ? o : l;
            var d = a.maxTranslate() - a.minTranslate();
            (0 === d ? 0 : (e - a.minTranslate()) / d) !== n && a.updateProgress(e),
                a.emit("setTranslate", a.translate, t)
        },
        minTranslate: function() {
            return -this.snapGrid[0]
        },
        maxTranslate: function() {
            return -this.snapGrid[this.snapGrid.length - 1]
        }
    };
    var c = {
        setTransition: function(e, t) {
            this.$wrapperEl.transition(e),
                this.emit("setTransition", e, t)
        },
        transitionStart: function(e, t) {
            void 0 === e && (e = !0);
            var a = this
                , i = a.activeIndex
                , s = a.params
                , r = a.previousIndex;
            s.autoHeight && a.updateAutoHeight();
            var n = t;
            if (n || (n = r < i ? "next" : i < r ? "prev" : "reset"),
                a.emit("transitionStart"),
            e && i !== r) {
                if ("reset" === n)
                    return void a.emit("slideResetTransitionStart");
                a.emit("slideChangeTransitionStart"),
                    "next" === n ? a.emit("slideNextTransitionStart") : a.emit("slidePrevTransitionStart")
            }
        },
        transitionEnd: function(e, t) {
            void 0 === e && (e = !0);
            var a = this
                , i = a.activeIndex
                , s = a.previousIndex;
            a.animating = !1,
                a.setTransition(0);
            var r = t;
            if (r || (r = s < i ? "next" : i < s ? "prev" : "reset"),
                a.emit("transitionEnd"),
            e && i !== s) {
                if ("reset" === r)
                    return void a.emit("slideResetTransitionEnd");
                a.emit("slideChangeTransitionEnd"),
                    "next" === r ? a.emit("slideNextTransitionEnd") : a.emit("slidePrevTransitionEnd")
            }
        }
    };
    var u = {
        slideTo: function(e, t, a, i) {
            void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === a && (a = !0);
            var s = this
                , r = e;
            r < 0 && (r = 0);
            var n = s.params
                , o = s.snapGrid
                , l = s.slidesGrid
                , d = s.previousIndex
                , p = s.activeIndex
                , c = s.rtlTranslate;
            if (s.animating && n.preventInteractionOnTransition)
                return !1;
            var u = Math.floor(r / n.slidesPerGroup);
            u >= o.length && (u = o.length - 1),
            (p || n.initialSlide || 0) === (d || 0) && a && s.emit("beforeSlideChangeStart");
            var h, v = -o[u];
            if (s.updateProgress(v),
                n.normalizeSlideIndex)
                for (var f = 0; f < l.length; f += 1)
                    -Math.floor(100 * v) >= Math.floor(100 * l[f]) && (r = f);
            if (s.initialized && r !== p) {
                if (!s.allowSlideNext && v < s.translate && v < s.minTranslate())
                    return !1;
                if (!s.allowSlidePrev && v > s.translate && v > s.maxTranslate() && (p || 0) !== r)
                    return !1
            }
            return h = p < r ? "next" : r < p ? "prev" : "reset",
                c && -v === s.translate || !c && v === s.translate ? (s.updateActiveIndex(r),
                n.autoHeight && s.updateAutoHeight(),
                    s.updateSlidesClasses(),
                "slide" !== n.effect && s.setTranslate(v),
                "reset" !== h && (s.transitionStart(a, h),
                    s.transitionEnd(a, h)),
                    !1) : (0 !== t && te.transition ? (s.setTransition(t),
                    s.setTranslate(v),
                    s.updateActiveIndex(r),
                    s.updateSlidesClasses(),
                    s.emit("beforeTransitionStart", t, i),
                    s.transitionStart(a, h),
                s.animating || (s.animating = !0,
                s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function(e) {
                        s && !s.destroyed && e.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd),
                            s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd),
                            s.onSlideToWrapperTransitionEnd = null,
                            delete s.onSlideToWrapperTransitionEnd,
                            s.transitionEnd(a, h))
                    }
                ),
                    s.$wrapperEl[0].addEventListener("transitionend", s.onSlideToWrapperTransitionEnd),
                    s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd))) : (s.setTransition(0),
                    s.setTranslate(v),
                    s.updateActiveIndex(r),
                    s.updateSlidesClasses(),
                    s.emit("beforeTransitionStart", t, i),
                    s.transitionStart(a, h),
                    s.transitionEnd(a, h)),
                    !0)
        },
        slideToLoop: function(e, t, a, i) {
            void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === a && (a = !0);
            var s = e;
            return this.params.loop && (s += this.loopedSlides),
                this.slideTo(s, t, a, i)
        },
        slideNext: function(e, t, a) {
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0);
            var i = this
                , s = i.params
                , r = i.animating;
            return s.loop ? !r && (i.loopFix(),
                i._clientLeft = i.$wrapperEl[0].clientLeft,
                i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a)) : i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a)
        },
        slidePrev: function(e, t, a) {
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0);
            var i = this
                , s = i.params
                , r = i.animating
                , n = i.snapGrid
                , o = i.slidesGrid
                , l = i.rtlTranslate;
            if (s.loop) {
                if (r)
                    return !1;
                i.loopFix(),
                    i._clientLeft = i.$wrapperEl[0].clientLeft
            }
            function d(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
            }
            var p, c = d(l ? i.translate : -i.translate), u = n.map(function(e) {
                return d(e)
            }), h = (o.map(function(e) {
                return d(e)
            }),
                n[u.indexOf(c)],
                n[u.indexOf(c) - 1]);
            return void 0 !== h && (p = o.indexOf(h)) < 0 && (p = i.activeIndex - 1),
                i.slideTo(p, e, t, a)
        },
        slideReset: function(e, t, a) {
            return void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
                this.slideTo(this.activeIndex, e, t, a)
        },
        slideToClosest: function(e, t, a) {
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0);
            var i = this
                , s = i.activeIndex
                , r = Math.floor(s / i.params.slidesPerGroup);
            if (r < i.snapGrid.length - 1) {
                var n = i.rtlTranslate ? i.translate : -i.translate
                    , o = i.snapGrid[r];
                (i.snapGrid[r + 1] - o) / 2 < n - o && (s = i.params.slidesPerGroup)
            }
            return i.slideTo(s, e, t, a)
        },
        slideToClickedSlide: function() {
            var e, t = this, a = t.params, i = t.$wrapperEl, s = "auto" === a.slidesPerView ? t.slidesPerViewDynamic() : a.slidesPerView, r = t.clickedIndex;
            if (a.loop) {
                if (t.animating)
                    return;
                e = parseInt(L(t.clickedSlide).attr("data-swiper-slide-index"), 10),
                    a.centeredSlides ? r < t.loopedSlides - s / 2 || r > t.slides.length - t.loopedSlides + s / 2 ? (t.loopFix(),
                        r = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(),
                        ee.nextTick(function() {
                            t.slideTo(r)
                        })) : t.slideTo(r) : r > t.slides.length - s ? (t.loopFix(),
                        r = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(),
                        ee.nextTick(function() {
                            t.slideTo(r)
                        })) : t.slideTo(r)
            } else
                t.slideTo(r)
        }
    };
    var h = {
        loopCreate: function() {
            var i = this
                , e = i.params
                , t = i.$wrapperEl;
            t.children("." + e.slideClass + "." + e.slideDuplicateClass).remove();
            var s = t.children("." + e.slideClass);
            if (e.loopFillGroupWithBlank) {
                var a = e.slidesPerGroup - s.length % e.slidesPerGroup;
                if (a !== e.slidesPerGroup) {
                    for (var r = 0; r < a; r += 1) {
                        var n = L(f.createElement("div")).addClass(e.slideClass + " " + e.slideBlankClass);
                        t.append(n)
                    }
                    s = t.children("." + e.slideClass)
                }
            }
            "auto" !== e.slidesPerView || e.loopedSlides || (e.loopedSlides = s.length),
                i.loopedSlides = parseInt(e.loopedSlides || e.slidesPerView, 10),
                i.loopedSlides += e.loopAdditionalSlides,
            i.loopedSlides > s.length && (i.loopedSlides = s.length);
            var o = []
                , l = [];
            s.each(function(e, t) {
                var a = L(t);
                e < i.loopedSlides && l.push(t),
                e < s.length && e >= s.length - i.loopedSlides && o.push(t),
                    a.attr("data-swiper-slide-index", e)
            });
            for (var d = 0; d < l.length; d += 1)
                t.append(L(l[d].cloneNode(!0)).addClass(e.slideDuplicateClass));
            for (var p = o.length - 1; 0 <= p; p -= 1)
                t.prepend(L(o[p].cloneNode(!0)).addClass(e.slideDuplicateClass))
        },
        loopFix: function() {
            var e, t = this, a = t.params, i = t.activeIndex, s = t.slides, r = t.loopedSlides, n = t.allowSlidePrev, o = t.allowSlideNext, l = t.snapGrid, d = t.rtlTranslate;
            t.allowSlidePrev = !0,
                t.allowSlideNext = !0;
            var p = -l[i] - t.getTranslate();
            i < r ? (e = s.length - 3 * r + i,
                e += r,
            t.slideTo(e, 0, !1, !0) && 0 !== p && t.setTranslate((d ? -t.translate : t.translate) - p)) : ("auto" === a.slidesPerView && 2 * r <= i || i >= s.length - r) && (e = -s.length + i + r,
                e += r,
            t.slideTo(e, 0, !1, !0) && 0 !== p && t.setTranslate((d ? -t.translate : t.translate) - p));
            t.allowSlidePrev = n,
                t.allowSlideNext = o
        },
        loopDestroy: function() {
            var e = this.$wrapperEl
                , t = this.params
                , a = this.slides;
            e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(),
                a.removeAttr("data-swiper-slide-index")
        }
    };
    var v = {
        setGrabCursor: function(e) {
            if (!(te.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked)) {
                var t = this.el;
                t.style.cursor = "move",
                    t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab",
                    t.style.cursor = e ? "-moz-grabbin" : "-moz-grab",
                    t.style.cursor = e ? "grabbing" : "grab"
            }
        },
        unsetGrabCursor: function() {
            te.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = "")
        }
    };
    var m = {
        appendSlide: function(e) {
            var t = this
                , a = t.$wrapperEl
                , i = t.params;
            if (i.loop && t.loopDestroy(),
            "object" == typeof e && "length"in e)
                for (var s = 0; s < e.length; s += 1)
                    e[s] && a.append(e[s]);
            else
                a.append(e);
            i.loop && t.loopCreate(),
            i.observer && te.observer || t.update()
        },
        prependSlide: function(e) {
            var t = this
                , a = t.params
                , i = t.$wrapperEl
                , s = t.activeIndex;
            a.loop && t.loopDestroy();
            var r = s + 1;
            if ("object" == typeof e && "length"in e) {
                for (var n = 0; n < e.length; n += 1)
                    e[n] && i.prepend(e[n]);
                r = s + e.length
            } else
                i.prepend(e);
            a.loop && t.loopCreate(),
            a.observer && te.observer || t.update(),
                t.slideTo(r, 0, !1)
        },
        addSlide: function(e, t) {
            var a = this
                , i = a.$wrapperEl
                , s = a.params
                , r = a.activeIndex;
            s.loop && (r -= a.loopedSlides,
                a.loopDestroy(),
                a.slides = i.children("." + s.slideClass));
            var n = a.slides.length;
            if (e <= 0)
                a.prependSlide(t);
            else if (n <= e)
                a.appendSlide(t);
            else {
                for (var o = e < r ? r + 1 : r, l = [], d = n - 1; e <= d; d -= 1) {
                    var p = a.slides.eq(d);
                    p.remove(),
                        l.unshift(p)
                }
                if ("object" == typeof t && "length"in t) {
                    for (var c = 0; c < t.length; c += 1)
                        t[c] && i.append(t[c]);
                    o = e < r ? r + t.length : r
                } else
                    i.append(t);
                for (var u = 0; u < l.length; u += 1)
                    i.append(l[u]);
                s.loop && a.loopCreate(),
                s.observer && te.observer || a.update(),
                    s.loop ? a.slideTo(o + a.loopedSlides, 0, !1) : a.slideTo(o, 0, !1)
            }
        },
        removeSlide: function(e) {
            var t = this
                , a = t.params
                , i = t.$wrapperEl
                , s = t.activeIndex;
            a.loop && (s -= t.loopedSlides,
                t.loopDestroy(),
                t.slides = i.children("." + a.slideClass));
            var r, n = s;
            if ("object" == typeof e && "length"in e) {
                for (var o = 0; o < e.length; o += 1)
                    r = e[o],
                    t.slides[r] && t.slides.eq(r).remove(),
                    r < n && (n -= 1);
                n = Math.max(n, 0)
            } else
                r = e,
                t.slides[r] && t.slides.eq(r).remove(),
                r < n && (n -= 1),
                    n = Math.max(n, 0);
            a.loop && t.loopCreate(),
            a.observer && te.observer || t.update(),
                a.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1)
        },
        removeAllSlides: function() {
            for (var e = [], t = 0; t < this.slides.length; t += 1)
                e.push(t);
            this.removeSlide(e)
        }
    }
        , g = function() {
        var e = J.navigator.userAgent
            , t = {
            ios: !1,
            android: !1,
            androidChrome: !1,
            desktop: !1,
            windows: !1,
            iphone: !1,
            ipod: !1,
            ipad: !1,
            cordova: J.cordova || J.phonegap,
            phonegap: J.cordova || J.phonegap
        }
            , a = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/)
            , i = e.match(/(Android);?[\s\/]+([\d.]+)?/)
            , s = e.match(/(iPad).*OS\s([\d_]+)/)
            , r = e.match(/(iPod)(.*OS\s([\d_]+))?/)
            , n = !s && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
        if (a && (t.os = "windows",
            t.osVersion = a[2],
            t.windows = !0),
        i && !a && (t.os = "android",
            t.osVersion = i[2],
            t.android = !0,
            t.androidChrome = 0 <= e.toLowerCase().indexOf("chrome")),
        (s || n || r) && (t.os = "ios",
            t.ios = !0),
        n && !r && (t.osVersion = n[2].replace(/_/g, "."),
            t.iphone = !0),
        s && (t.osVersion = s[2].replace(/_/g, "."),
            t.ipad = !0),
        r && (t.osVersion = r[3] ? r[3].replace(/_/g, ".") : null,
            t.iphone = !0),
        t.ios && t.osVersion && 0 <= e.indexOf("Version/") && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]),
            t.desktop = !(t.os || t.android || t.webView),
            t.webView = (n || s || r) && e.match(/.*AppleWebKit(?!.*Safari)/i),
        t.os && "ios" === t.os) {
            var o = t.osVersion.split(".")
                , l = f.querySelector('meta[name="viewport"]');
            t.minimalUi = !t.webView && (r || n) && (1 * o[0] == 7 ? 1 <= 1 * o[1] : 7 < 1 * o[0]) && l && 0 <= l.getAttribute("content").indexOf("minimal-ui")
        }
        return t.pixelRatio = J.devicePixelRatio || 1,
            t
    }();
    function b() {
        var e = this
            , t = e.params
            , a = e.el;
        if (!a || 0 !== a.offsetWidth) {
            t.breakpoints && e.setBreakpoint();
            var i = e.allowSlideNext
                , s = e.allowSlidePrev
                , r = e.snapGrid;
            if (e.allowSlideNext = !0,
                e.allowSlidePrev = !0,
                e.updateSize(),
                e.updateSlides(),
                t.freeMode) {
                var n = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
                e.setTranslate(n),
                    e.updateActiveIndex(),
                    e.updateSlidesClasses(),
                t.autoHeight && e.updateAutoHeight()
            } else
                e.updateSlidesClasses(),
                    ("auto" === t.slidesPerView || 1 < t.slidesPerView) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
            e.allowSlidePrev = s,
                e.allowSlideNext = i,
            e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
        }
    }
    var w = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "container",
        initialSlide: 0,
        speed: 300,
        preventInteractionOnTransition: !1,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        freeMode: !1,
        freeModeMomentum: !0,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: !0,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: !1,
        freeModeMinimumVelocity: .02,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsInverse: !1,
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: "column",
        slidesPerGroup: 1,
        centeredSlides: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !1,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !0,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-container-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0
    }
        , y = {
        update: d,
        translate: p,
        transition: c,
        slide: u,
        loop: h,
        grabCursor: v,
        manipulation: m,
        events: {
            attachEvents: function() {
                var e = this
                    , t = e.params
                    , a = e.touchEvents
                    , i = e.el
                    , s = e.wrapperEl;
                e.onTouchStart = function(e) {
                    var t = this
                        , a = t.touchEventsData
                        , i = t.params
                        , s = t.touches;
                    if (!t.animating || !i.preventInteractionOnTransition) {
                        var r = e;
                        if (r.originalEvent && (r = r.originalEvent),
                            a.isTouchEvent = "touchstart" === r.type,
                        (a.isTouchEvent || !("which"in r) || 3 !== r.which) && !(!a.isTouchEvent && "button"in r && 0 < r.button || a.isTouched && a.isMoved))
                            if (i.noSwiping && L(r.target).closest(i.noSwipingSelector ? i.noSwipingSelector : "." + i.noSwipingClass)[0])
                                t.allowClick = !0;
                            else if (!i.swipeHandler || L(r).closest(i.swipeHandler)[0]) {
                                s.currentX = "touchstart" === r.type ? r.targetTouches[0].pageX : r.pageX,
                                    s.currentY = "touchstart" === r.type ? r.targetTouches[0].pageY : r.pageY;
                                var n = s.currentX
                                    , o = s.currentY
                                    , l = i.edgeSwipeDetection || i.iOSEdgeSwipeDetection
                                    , d = i.edgeSwipeThreshold || i.iOSEdgeSwipeThreshold;
                                if (!l || !(n <= d || n >= J.screen.width - d)) {
                                    if (ee.extend(a, {
                                        isTouched: !0,
                                        isMoved: !1,
                                        allowTouchCallbacks: !0,
                                        isScrolling: void 0,
                                        startMoving: void 0
                                    }),
                                        s.startX = n,
                                        s.startY = o,
                                        a.touchStartTime = ee.now(),
                                        t.allowClick = !0,
                                        t.updateSize(),
                                        t.swipeDirection = void 0,
                                    0 < i.threshold && (a.allowThresholdMove = !1),
                                    "touchstart" !== r.type) {
                                        var p = !0;
                                        L(r.target).is(a.formElements) && (p = !1),
                                        f.activeElement && L(f.activeElement).is(a.formElements) && f.activeElement !== r.target && f.activeElement.blur();
                                        var c = p && t.allowTouchMove && i.touchStartPreventDefault;
                                        (i.touchStartForcePreventDefault || c) && r.preventDefault()
                                    }
                                    t.emit("touchStart", r)
                                }
                            }
                    }
                }
                    .bind(e),
                    e.onTouchMove = function(e) {
                        var t = this
                            , a = t.touchEventsData
                            , i = t.params
                            , s = t.touches
                            , r = t.rtlTranslate
                            , n = e;
                        if (n.originalEvent && (n = n.originalEvent),
                            a.isTouched) {
                            if (!a.isTouchEvent || "mousemove" !== n.type) {
                                var o = "touchmove" === n.type ? n.targetTouches[0].pageX : n.pageX
                                    , l = "touchmove" === n.type ? n.targetTouches[0].pageY : n.pageY;
                                if (n.preventedByNestedSwiper)
                                    return s.startX = o,
                                        void (s.startY = l);
                                if (!t.allowTouchMove)
                                    return t.allowClick = !1,
                                        void (a.isTouched && (ee.extend(s, {
                                            startX: o,
                                            startY: l,
                                            currentX: o,
                                            currentY: l
                                        }),
                                            a.touchStartTime = ee.now()));
                                if (a.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
                                    if (t.isVertical()) {
                                        if (l < s.startY && t.translate <= t.maxTranslate() || l > s.startY && t.translate >= t.minTranslate())
                                            return a.isTouched = !1,
                                                void (a.isMoved = !1)
                                    } else if (o < s.startX && t.translate <= t.maxTranslate() || o > s.startX && t.translate >= t.minTranslate())
                                        return;
                                if (a.isTouchEvent && f.activeElement && n.target === f.activeElement && L(n.target).is(a.formElements))
                                    return a.isMoved = !0,
                                        void (t.allowClick = !1);
                                if (a.allowTouchCallbacks && t.emit("touchMove", n),
                                    !(n.targetTouches && 1 < n.targetTouches.length)) {
                                    s.currentX = o,
                                        s.currentY = l;
                                    var d, p = s.currentX - s.startX, c = s.currentY - s.startY;
                                    if (!(t.params.threshold && Math.sqrt(Math.pow(p, 2) + Math.pow(c, 2)) < t.params.threshold))
                                        if (void 0 === a.isScrolling && (t.isHorizontal() && s.currentY === s.startY || t.isVertical() && s.currentX === s.startX ? a.isScrolling = !1 : 25 <= p * p + c * c && (d = 180 * Math.atan2(Math.abs(c), Math.abs(p)) / Math.PI,
                                            a.isScrolling = t.isHorizontal() ? d > i.touchAngle : 90 - d > i.touchAngle)),
                                        a.isScrolling && t.emit("touchMoveOpposite", n),
                                        void 0 === a.startMoving && (s.currentX === s.startX && s.currentY === s.startY || (a.startMoving = !0)),
                                            a.isScrolling)
                                            a.isTouched = !1;
                                        else if (a.startMoving) {
                                            t.allowClick = !1,
                                                n.preventDefault(),
                                            i.touchMoveStopPropagation && !i.nested && n.stopPropagation(),
                                            a.isMoved || (i.loop && t.loopFix(),
                                                a.startTranslate = t.getTranslate(),
                                                t.setTransition(0),
                                            t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                                                a.allowMomentumBounce = !1,
                                            !i.grabCursor || !0 !== t.allowSlideNext && !0 !== t.allowSlidePrev || t.setGrabCursor(!0),
                                                t.emit("sliderFirstMove", n)),
                                                t.emit("sliderMove", n),
                                                a.isMoved = !0;
                                            var u = t.isHorizontal() ? p : c;
                                            s.diff = u,
                                                u *= i.touchRatio,
                                            r && (u = -u),
                                                t.swipeDirection = 0 < u ? "prev" : "next",
                                                a.currentTranslate = u + a.startTranslate;
                                            var h = !0
                                                , v = i.resistanceRatio;
                                            if (i.touchReleaseOnEdges && (v = 0),
                                                0 < u && a.currentTranslate > t.minTranslate() ? (h = !1,
                                                i.resistance && (a.currentTranslate = t.minTranslate() - 1 + Math.pow(-t.minTranslate() + a.startTranslate + u, v))) : u < 0 && a.currentTranslate < t.maxTranslate() && (h = !1,
                                                i.resistance && (a.currentTranslate = t.maxTranslate() + 1 - Math.pow(t.maxTranslate() - a.startTranslate - u, v))),
                                            h && (n.preventedByNestedSwiper = !0),
                                            !t.allowSlideNext && "next" === t.swipeDirection && a.currentTranslate < a.startTranslate && (a.currentTranslate = a.startTranslate),
                                            !t.allowSlidePrev && "prev" === t.swipeDirection && a.currentTranslate > a.startTranslate && (a.currentTranslate = a.startTranslate),
                                            0 < i.threshold) {
                                                if (!(Math.abs(u) > i.threshold || a.allowThresholdMove))
                                                    return void (a.currentTranslate = a.startTranslate);
                                                if (!a.allowThresholdMove)
                                                    return a.allowThresholdMove = !0,
                                                        s.startX = s.currentX,
                                                        s.startY = s.currentY,
                                                        a.currentTranslate = a.startTranslate,
                                                        void (s.diff = t.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY)
                                            }
                                            i.followFinger && ((i.freeMode || i.watchSlidesProgress || i.watchSlidesVisibility) && (t.updateActiveIndex(),
                                                t.updateSlidesClasses()),
                                            i.freeMode && (0 === a.velocities.length && a.velocities.push({
                                                position: s[t.isHorizontal() ? "startX" : "startY"],
                                                time: a.touchStartTime
                                            }),
                                                a.velocities.push({
                                                    position: s[t.isHorizontal() ? "currentX" : "currentY"],
                                                    time: ee.now()
                                                })),
                                                t.updateProgress(a.currentTranslate),
                                                t.setTranslate(a.currentTranslate))
                                        }
                                }
                            }
                        } else
                            a.startMoving && a.isScrolling && t.emit("touchMoveOpposite", n)
                    }
                        .bind(e),
                    e.onTouchEnd = function(e) {
                        var t = this
                            , a = t.touchEventsData
                            , i = t.params
                            , s = t.touches
                            , r = t.rtlTranslate
                            , n = t.$wrapperEl
                            , o = t.slidesGrid
                            , l = t.snapGrid
                            , d = e;
                        if (d.originalEvent && (d = d.originalEvent),
                        a.allowTouchCallbacks && t.emit("touchEnd", d),
                            a.allowTouchCallbacks = !1,
                            !a.isTouched)
                            return a.isMoved && i.grabCursor && t.setGrabCursor(!1),
                                a.isMoved = !1,
                                void (a.startMoving = !1);
                        i.grabCursor && a.isMoved && a.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                        var p, c = ee.now(), u = c - a.touchStartTime;
                        if (t.allowClick && (t.updateClickedSlide(d),
                            t.emit("tap", d),
                        u < 300 && 300 < c - a.lastClickTime && (a.clickTimeout && clearTimeout(a.clickTimeout),
                            a.clickTimeout = ee.nextTick(function() {
                                t && !t.destroyed && t.emit("click", d)
                            }, 300)),
                        u < 300 && c - a.lastClickTime < 300 && (a.clickTimeout && clearTimeout(a.clickTimeout),
                            t.emit("doubleTap", d))),
                            a.lastClickTime = ee.now(),
                            ee.nextTick(function() {
                                t.destroyed || (t.allowClick = !0)
                            }),
                        !a.isTouched || !a.isMoved || !t.swipeDirection || 0 === s.diff || a.currentTranslate === a.startTranslate)
                            return a.isTouched = !1,
                                a.isMoved = !1,
                                void (a.startMoving = !1);
                        if (a.isTouched = !1,
                            a.isMoved = !1,
                            a.startMoving = !1,
                            p = i.followFinger ? r ? t.translate : -t.translate : -a.currentTranslate,
                            i.freeMode) {
                            if (p < -t.minTranslate())
                                return void t.slideTo(t.activeIndex);
                            if (p > -t.maxTranslate())
                                return void (t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
                            if (i.freeModeMomentum) {
                                if (1 < a.velocities.length) {
                                    var h = a.velocities.pop()
                                        , v = a.velocities.pop()
                                        , f = h.position - v.position
                                        , m = h.time - v.time;
                                    t.velocity = f / m,
                                        t.velocity /= 2,
                                    Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0),
                                    (150 < m || 300 < ee.now() - h.time) && (t.velocity = 0)
                                } else
                                    t.velocity = 0;
                                t.velocity *= i.freeModeMomentumVelocityRatio,
                                    a.velocities.length = 0;
                                var g = 1e3 * i.freeModeMomentumRatio
                                    , b = t.velocity * g
                                    , w = t.translate + b;
                                r && (w = -w);
                                var y, x, T = !1, E = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
                                if (w < t.maxTranslate())
                                    i.freeModeMomentumBounce ? (w + t.maxTranslate() < -E && (w = t.maxTranslate() - E),
                                        y = t.maxTranslate(),
                                        T = !0,
                                        a.allowMomentumBounce = !0) : w = t.maxTranslate(),
                                    i.loop && i.centeredSlides && (x = !0);
                                else if (w > t.minTranslate())
                                    i.freeModeMomentumBounce ? (w - t.minTranslate() > E && (w = t.minTranslate() + E),
                                        y = t.minTranslate(),
                                        T = !0,
                                        a.allowMomentumBounce = !0) : w = t.minTranslate(),
                                    i.loop && i.centeredSlides && (x = !0);
                                else if (i.freeModeSticky) {
                                    for (var S, C = 0; C < l.length; C += 1)
                                        if (l[C] > -w) {
                                            S = C;
                                            break
                                        }
                                    w = -(w = Math.abs(l[S] - w) < Math.abs(l[S - 1] - w) || "next" === t.swipeDirection ? l[S] : l[S - 1])
                                }
                                if (x && t.once("transitionEnd", function() {
                                    t.loopFix()
                                }),
                                0 !== t.velocity)
                                    g = r ? Math.abs((-w - t.translate) / t.velocity) : Math.abs((w - t.translate) / t.velocity);
                                else if (i.freeModeSticky)
                                    return void t.slideToClosest();
                                i.freeModeMomentumBounce && T ? (t.updateProgress(y),
                                    t.setTransition(g),
                                    t.setTranslate(w),
                                    t.transitionStart(!0, t.swipeDirection),
                                    t.animating = !0,
                                    n.transitionEnd(function() {
                                        t && !t.destroyed && a.allowMomentumBounce && (t.emit("momentumBounce"),
                                            t.setTransition(i.speed),
                                            t.setTranslate(y),
                                            n.transitionEnd(function() {
                                                t && !t.destroyed && t.transitionEnd()
                                            }))
                                    })) : t.velocity ? (t.updateProgress(w),
                                    t.setTransition(g),
                                    t.setTranslate(w),
                                    t.transitionStart(!0, t.swipeDirection),
                                t.animating || (t.animating = !0,
                                    n.transitionEnd(function() {
                                        t && !t.destroyed && t.transitionEnd()
                                    }))) : t.updateProgress(w),
                                    t.updateActiveIndex(),
                                    t.updateSlidesClasses()
                            } else if (i.freeModeSticky)
                                return void t.slideToClosest();
                            (!i.freeModeMomentum || u >= i.longSwipesMs) && (t.updateProgress(),
                                t.updateActiveIndex(),
                                t.updateSlidesClasses())
                        } else {
                            for (var M = 0, z = t.slidesSizesGrid[0], P = 0; P < o.length; P += i.slidesPerGroup)
                                void 0 !== o[P + i.slidesPerGroup] ? p >= o[P] && p < o[P + i.slidesPerGroup] && (z = o[(M = P) + i.slidesPerGroup] - o[P]) : p >= o[P] && (M = P,
                                    z = o[o.length - 1] - o[o.length - 2]);
                            var k = (p - o[M]) / z;
                            if (u > i.longSwipesMs) {
                                if (!i.longSwipes)
                                    return void t.slideTo(t.activeIndex);
                                "next" === t.swipeDirection && (k >= i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M)),
                                "prev" === t.swipeDirection && (k > 1 - i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M))
                            } else {
                                if (!i.shortSwipes)
                                    return void t.slideTo(t.activeIndex);
                                "next" === t.swipeDirection && t.slideTo(M + i.slidesPerGroup),
                                "prev" === t.swipeDirection && t.slideTo(M)
                            }
                        }
                    }
                        .bind(e),
                    e.onClick = function(e) {
                        this.allowClick || (this.params.preventClicks && e.preventDefault(),
                        this.params.preventClicksPropagation && this.animating && (e.stopPropagation(),
                            e.stopImmediatePropagation()))
                    }
                        .bind(e);
                var r = "container" === t.touchEventsTarget ? i : s
                    , n = !!t.nested;
                if (te.touch || !te.pointerEvents && !te.prefixedPointerEvents) {
                    if (te.touch) {
                        var o = !("touchstart" !== a.start || !te.passiveListener || !t.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        r.addEventListener(a.start, e.onTouchStart, o),
                            r.addEventListener(a.move, e.onTouchMove, te.passiveListener ? {
                                passive: !1,
                                capture: n
                            } : n),
                            r.addEventListener(a.end, e.onTouchEnd, o)
                    }
                    (t.simulateTouch && !g.ios && !g.android || t.simulateTouch && !te.touch && g.ios) && (r.addEventListener("mousedown", e.onTouchStart, !1),
                        f.addEventListener("mousemove", e.onTouchMove, n),
                        f.addEventListener("mouseup", e.onTouchEnd, !1))
                } else
                    r.addEventListener(a.start, e.onTouchStart, !1),
                        f.addEventListener(a.move, e.onTouchMove, n),
                        f.addEventListener(a.end, e.onTouchEnd, !1);
                (t.preventClicks || t.preventClicksPropagation) && r.addEventListener("click", e.onClick, !0),
                    e.on(g.ios || g.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", b, !0)
            },
            detachEvents: function() {
                var e = this
                    , t = e.params
                    , a = e.touchEvents
                    , i = e.el
                    , s = e.wrapperEl
                    , r = "container" === t.touchEventsTarget ? i : s
                    , n = !!t.nested;
                if (te.touch || !te.pointerEvents && !te.prefixedPointerEvents) {
                    if (te.touch) {
                        var o = !("onTouchStart" !== a.start || !te.passiveListener || !t.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        r.removeEventListener(a.start, e.onTouchStart, o),
                            r.removeEventListener(a.move, e.onTouchMove, n),
                            r.removeEventListener(a.end, e.onTouchEnd, o)
                    }
                    (t.simulateTouch && !g.ios && !g.android || t.simulateTouch && !te.touch && g.ios) && (r.removeEventListener("mousedown", e.onTouchStart, !1),
                        f.removeEventListener("mousemove", e.onTouchMove, n),
                        f.removeEventListener("mouseup", e.onTouchEnd, !1))
                } else
                    r.removeEventListener(a.start, e.onTouchStart, !1),
                        f.removeEventListener(a.move, e.onTouchMove, n),
                        f.removeEventListener(a.end, e.onTouchEnd, !1);
                (t.preventClicks || t.preventClicksPropagation) && r.removeEventListener("click", e.onClick, !0),
                    e.off(g.ios || g.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", b)
            }
        },
        breakpoints: {
            setBreakpoint: function() {
                var e = this
                    , t = e.activeIndex
                    , a = e.initialized
                    , i = e.loopedSlides;
                void 0 === i && (i = 0);
                var s = e.params
                    , r = s.breakpoints;
                if (r && (!r || 0 !== Object.keys(r).length)) {
                    var n = e.getBreakpoint(r);
                    if (n && e.currentBreakpoint !== n) {
                        var o = n in r ? r[n] : void 0;
                        o && ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach(function(e) {
                            var t = o[e];
                            void 0 !== t && (o[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
                        });
                        var l = o || e.originalParams
                            , d = l.direction && l.direction !== s.direction
                            , p = s.loop && (l.slidesPerView !== s.slidesPerView || d);
                        d && a && e.changeDirection(),
                            ee.extend(e.params, l),
                            ee.extend(e, {
                                allowTouchMove: e.params.allowTouchMove,
                                allowSlideNext: e.params.allowSlideNext,
                                allowSlidePrev: e.params.allowSlidePrev
                            }),
                            e.currentBreakpoint = n,
                        p && a && (e.loopDestroy(),
                            e.loopCreate(),
                            e.updateSlides(),
                            e.slideTo(t - i + e.loopedSlides, 0, !1)),
                            e.emit("breakpoint", l)
                    }
                }
            },
            getBreakpoint: function(e) {
                if (e) {
                    var t = !1
                        , a = [];
                    Object.keys(e).forEach(function(e) {
                        a.push(e)
                    }),
                        a.sort(function(e, t) {
                            return parseInt(e, 10) - parseInt(t, 10)
                        });
                    for (var i = 0; i < a.length; i += 1) {
                        var s = a[i];
                        this.params.breakpointsInverse ? s <= J.innerWidth && (t = s) : s >= J.innerWidth && !t && (t = s)
                    }
                    return t || "max"
                }
            }
        },
        checkOverflow: {
            checkOverflow: function() {
                var e = this
                    , t = e.isLocked;
                e.isLocked = 1 === e.snapGrid.length,
                    e.allowSlideNext = !e.isLocked,
                    e.allowSlidePrev = !e.isLocked,
                t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"),
                t && t !== e.isLocked && (e.isEnd = !1,
                    e.navigation.update())
            }
        },
        classes: {
            addClasses: function() {
                var t = this.classNames
                    , a = this.params
                    , e = this.rtl
                    , i = this.$el
                    , s = [];
                s.push("initialized"),
                    s.push(a.direction),
                a.freeMode && s.push("free-mode"),
                te.flexbox || s.push("no-flexbox"),
                a.autoHeight && s.push("autoheight"),
                e && s.push("rtl"),
                1 < a.slidesPerColumn && s.push("multirow"),
                g.android && s.push("android"),
                g.ios && s.push("ios"),
                (I.isIE || I.isEdge) && (te.pointerEvents || te.prefixedPointerEvents) && s.push("wp8-" + a.direction),
                    s.forEach(function(e) {
                        t.push(a.containerModifierClass + e)
                    }),
                    i.addClass(t.join(" "))
            },
            removeClasses: function() {
                var e = this.$el
                    , t = this.classNames;
                e.removeClass(t.join(" "))
            }
        },
        images: {
            loadImage: function(e, t, a, i, s, r) {
                var n;
                function o() {
                    r && r()
                }
                e.complete && s ? o() : t ? ((n = new J.Image).onload = o,
                    n.onerror = o,
                i && (n.sizes = i),
                a && (n.srcset = a),
                t && (n.src = t)) : o()
            },
            preloadImages: function() {
                var e = this;
                function t() {
                    null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                    e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(),
                        e.emit("imagesReady")))
                }
                e.imagesToLoad = e.$el.find("img");
                for (var a = 0; a < e.imagesToLoad.length; a += 1) {
                    var i = e.imagesToLoad[a];
                    e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t)
                }
            }
        }
    }
        , x = {}
        , T = function(u) {
        function h() {
            for (var e, t, s, a = [], i = arguments.length; i--; )
                a[i] = arguments[i];
            1 === a.length && a[0].constructor && a[0].constructor === Object ? s = a[0] : (t = (e = a)[0],
                s = e[1]),
            s || (s = {}),
                s = ee.extend({}, s),
            t && !s.el && (s.el = t),
                u.call(this, s),
                Object.keys(y).forEach(function(t) {
                    Object.keys(y[t]).forEach(function(e) {
                        h.prototype[e] || (h.prototype[e] = y[t][e])
                    })
                });
            var r = this;
            void 0 === r.modules && (r.modules = {}),
                Object.keys(r.modules).forEach(function(e) {
                    var t = r.modules[e];
                    if (t.params) {
                        var a = Object.keys(t.params)[0]
                            , i = t.params[a];
                        if ("object" != typeof i || null === i)
                            return;
                        if (!(a in s && "enabled"in i))
                            return;
                        !0 === s[a] && (s[a] = {
                            enabled: !0
                        }),
                        "object" != typeof s[a] || "enabled"in s[a] || (s[a].enabled = !0),
                        s[a] || (s[a] = {
                            enabled: !1
                        })
                    }
                });
            var n = ee.extend({}, w);
            r.useModulesParams(n),
                r.params = ee.extend({}, n, x, s),
                r.originalParams = ee.extend({}, r.params),
                r.passedParams = ee.extend({}, s);
            var o = (r.$ = L)(r.params.el);
            if (t = o[0]) {
                if (1 < o.length) {
                    var l = [];
                    return o.each(function(e, t) {
                        var a = ee.extend({}, s, {
                            el: t
                        });
                        l.push(new h(a))
                    }),
                        l
                }
                t.swiper = r,
                    o.data("swiper", r);
                var d, p, c = o.children("." + r.params.wrapperClass);
                return ee.extend(r, {
                    $el: o,
                    el: t,
                    $wrapperEl: c,
                    wrapperEl: c[0],
                    classNames: [],
                    slides: L(),
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal: function() {
                        return "horizontal" === r.params.direction
                    },
                    isVertical: function() {
                        return "vertical" === r.params.direction
                    },
                    rtl: "rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction"),
                    rtlTranslate: "horizontal" === r.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction")),
                    wrongRTL: "-webkit-box" === c.css("display"),
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: !0,
                    isEnd: !1,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: !1,
                    allowSlideNext: r.params.allowSlideNext,
                    allowSlidePrev: r.params.allowSlidePrev,
                    touchEvents: (d = ["touchstart", "touchmove", "touchend"],
                        p = ["mousedown", "mousemove", "mouseup"],
                        te.pointerEvents ? p = ["pointerdown", "pointermove", "pointerup"] : te.prefixedPointerEvents && (p = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]),
                        r.touchEventsTouch = {
                            start: d[0],
                            move: d[1],
                            end: d[2]
                        },
                        r.touchEventsDesktop = {
                            start: p[0],
                            move: p[1],
                            end: p[2]
                        },
                        te.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop),
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        formElements: "input, select, option, textarea, button, video",
                        lastClickTime: ee.now(),
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        isTouchEvent: void 0,
                        startMoving: void 0
                    },
                    allowClick: !0,
                    allowTouchMove: r.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                }),
                    r.useModules(),
                r.params.init && r.init(),
                    r
            }
        }
        u && (h.__proto__ = u);
        var e = {
            extendedDefaults: {
                configurable: !0
            },
            defaults: {
                configurable: !0
            },
            Class: {
                configurable: !0
            },
            $: {
                configurable: !0
            }
        };
        return ((h.prototype = Object.create(u && u.prototype)).constructor = h).prototype.slidesPerViewDynamic = function() {
            var e = this
                , t = e.params
                , a = e.slides
                , i = e.slidesGrid
                , s = e.size
                , r = e.activeIndex
                , n = 1;
            if (t.centeredSlides) {
                for (var o, l = a[r].swiperSlideSize, d = r + 1; d < a.length; d += 1)
                    a[d] && !o && (n += 1,
                    s < (l += a[d].swiperSlideSize) && (o = !0));
                for (var p = r - 1; 0 <= p; p -= 1)
                    a[p] && !o && (n += 1,
                    s < (l += a[p].swiperSlideSize) && (o = !0))
            } else
                for (var c = r + 1; c < a.length; c += 1)
                    i[c] - i[r] < s && (n += 1);
            return n
        }
            ,
            h.prototype.update = function() {
                var a = this;
                if (a && !a.destroyed) {
                    var e = a.snapGrid
                        , t = a.params;
                    t.breakpoints && a.setBreakpoint(),
                        a.updateSize(),
                        a.updateSlides(),
                        a.updateProgress(),
                        a.updateSlidesClasses(),
                        a.params.freeMode ? (i(),
                        a.params.autoHeight && a.updateAutoHeight()) : (("auto" === a.params.slidesPerView || 1 < a.params.slidesPerView) && a.isEnd && !a.params.centeredSlides ? a.slideTo(a.slides.length - 1, 0, !1, !0) : a.slideTo(a.activeIndex, 0, !1, !0)) || i(),
                    t.watchOverflow && e !== a.snapGrid && a.checkOverflow(),
                        a.emit("update")
                }
                function i() {
                    var e = a.rtlTranslate ? -1 * a.translate : a.translate
                        , t = Math.min(Math.max(e, a.maxTranslate()), a.minTranslate());
                    a.setTranslate(t),
                        a.updateActiveIndex(),
                        a.updateSlidesClasses()
                }
            }
            ,
            h.prototype.changeDirection = function(a, e) {
                void 0 === e && (e = !0);
                var t = this
                    , i = t.params.direction;
                return a || (a = "horizontal" === i ? "vertical" : "horizontal"),
                a === i || "horizontal" !== a && "vertical" !== a || ("vertical" === i && (t.$el.removeClass(t.params.containerModifierClass + "vertical wp8-vertical").addClass("" + t.params.containerModifierClass + a),
                (I.isIE || I.isEdge) && (te.pointerEvents || te.prefixedPointerEvents) && t.$el.addClass(t.params.containerModifierClass + "wp8-" + a)),
                "horizontal" === i && (t.$el.removeClass(t.params.containerModifierClass + "horizontal wp8-horizontal").addClass("" + t.params.containerModifierClass + a),
                (I.isIE || I.isEdge) && (te.pointerEvents || te.prefixedPointerEvents) && t.$el.addClass(t.params.containerModifierClass + "wp8-" + a)),
                    t.params.direction = a,
                    t.slides.each(function(e, t) {
                        "vertical" === a ? t.style.width = "" : t.style.height = ""
                    }),
                    t.emit("changeDirection"),
                e && t.update()),
                    t
            }
            ,
            h.prototype.init = function() {
                var e = this;
                e.initialized || (e.emit("beforeInit"),
                e.params.breakpoints && e.setBreakpoint(),
                    e.addClasses(),
                e.params.loop && e.loopCreate(),
                    e.updateSize(),
                    e.updateSlides(),
                e.params.watchOverflow && e.checkOverflow(),
                e.params.grabCursor && e.setGrabCursor(),
                e.params.preloadImages && e.preloadImages(),
                    e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit),
                    e.attachEvents(),
                    e.initialized = !0,
                    e.emit("init"))
            }
            ,
            h.prototype.destroy = function(e, t) {
                void 0 === e && (e = !0),
                void 0 === t && (t = !0);
                var a = this
                    , i = a.params
                    , s = a.$el
                    , r = a.$wrapperEl
                    , n = a.slides;
                return void 0 === a.params || a.destroyed || (a.emit("beforeDestroy"),
                    a.initialized = !1,
                    a.detachEvents(),
                i.loop && a.loopDestroy(),
                t && (a.removeClasses(),
                    s.removeAttr("style"),
                    r.removeAttr("style"),
                n && n.length && n.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")),
                    a.emit("destroy"),
                    Object.keys(a.eventsListeners).forEach(function(e) {
                        a.off(e)
                    }),
                !1 !== e && (a.$el[0].swiper = null,
                    a.$el.data("swiper", null),
                    ee.deleteProps(a)),
                    a.destroyed = !0),
                    null
            }
            ,
            h.extendDefaults = function(e) {
                ee.extend(x, e)
            }
            ,
            e.extendedDefaults.get = function() {
                return x
            }
            ,
            e.defaults.get = function() {
                return w
            }
            ,
            e.Class.get = function() {
                return u
            }
            ,
            e.$.get = function() {
                return L
            }
            ,
            Object.defineProperties(h, e),
            h
    }(n)
        , E = {
        name: "device",
        proto: {
            device: g
        },
        static: {
            device: g
        }
    }
        , S = {
        name: "support",
        proto: {
            support: te
        },
        static: {
            support: te
        }
    }
        , C = {
        name: "browser",
        proto: {
            browser: I
        },
        static: {
            browser: I
        }
    }
        , M = {
        name: "resize",
        create: function() {
            var e = this;
            ee.extend(e, {
                resize: {
                    resizeHandler: function() {
                        e && !e.destroyed && e.initialized && (e.emit("beforeResize"),
                            e.emit("resize"))
                    },
                    orientationChangeHandler: function() {
                        e && !e.destroyed && e.initialized && e.emit("orientationchange")
                    }
                }
            })
        },
        on: {
            init: function() {
                J.addEventListener("resize", this.resize.resizeHandler),
                    J.addEventListener("orientationchange", this.resize.orientationChangeHandler)
            },
            destroy: function() {
                J.removeEventListener("resize", this.resize.resizeHandler),
                    J.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
            }
        }
    }
        , z = {
        func: J.MutationObserver || J.WebkitMutationObserver,
        attach: function(e, t) {
            void 0 === t && (t = {});
            var a = this
                , i = new z.func(function(e) {
                    if (1 !== e.length) {
                        var t = function() {
                            a.emit("observerUpdate", e[0])
                        };
                        J.requestAnimationFrame ? J.requestAnimationFrame(t) : J.setTimeout(t, 0)
                    } else
                        a.emit("observerUpdate", e[0])
                }
            );
            i.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData
            }),
                a.observer.observers.push(i)
        },
        init: function() {
            var e = this;
            if (te.observer && e.params.observer) {
                if (e.params.observeParents)
                    for (var t = e.$el.parents(), a = 0; a < t.length; a += 1)
                        e.observer.attach(t[a]);
                e.observer.attach(e.$el[0], {
                    childList: e.params.observeSlideChildren
                }),
                    e.observer.attach(e.$wrapperEl[0], {
                        attributes: !1
                    })
            }
        },
        destroy: function() {
            this.observer.observers.forEach(function(e) {
                e.disconnect()
            }),
                this.observer.observers = []
        }
    }
        , P = {
        name: "observer",
        params: {
            observer: !1,
            observeParents: !1,
            observeSlideChildren: !1
        },
        create: function() {
            ee.extend(this, {
                observer: {
                    init: z.init.bind(this),
                    attach: z.attach.bind(this),
                    destroy: z.destroy.bind(this),
                    observers: []
                }
            })
        },
        on: {
            init: function() {
                this.observer.init()
            },
            destroy: function() {
                this.observer.destroy()
            }
        }
    }
        , k = {
        update: function(e) {
            var t = this
                , a = t.params
                , i = a.slidesPerView
                , s = a.slidesPerGroup
                , r = a.centeredSlides
                , n = t.params.virtual
                , o = n.addSlidesBefore
                , l = n.addSlidesAfter
                , d = t.virtual
                , p = d.from
                , c = d.to
                , u = d.slides
                , h = d.slidesGrid
                , v = d.renderSlide
                , f = d.offset;
            t.updateActiveIndex();
            var m, g, b, w = t.activeIndex || 0;
            m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top",
                r ? (g = Math.floor(i / 2) + s + o,
                    b = Math.floor(i / 2) + s + l) : (g = i + (s - 1) + o,
                    b = s + l);
            var y = Math.max((w || 0) - b, 0)
                , x = Math.min((w || 0) + g, u.length - 1)
                , T = (t.slidesGrid[y] || 0) - (t.slidesGrid[0] || 0);
            function E() {
                t.updateSlides(),
                    t.updateProgress(),
                    t.updateSlidesClasses(),
                t.lazy && t.params.lazy.enabled && t.lazy.load()
            }
            if (ee.extend(t.virtual, {
                from: y,
                to: x,
                offset: T,
                slidesGrid: t.slidesGrid
            }),
            p === y && c === x && !e)
                return t.slidesGrid !== h && T !== f && t.slides.css(m, T + "px"),
                    void t.updateProgress();
            if (t.params.virtual.renderExternal)
                return t.params.virtual.renderExternal.call(t, {
                    offset: T,
                    from: y,
                    to: x,
                    slides: function() {
                        for (var e = [], t = y; t <= x; t += 1)
                            e.push(u[t]);
                        return e
                    }()
                }),
                    void E();
            var S = []
                , C = [];
            if (e)
                t.$wrapperEl.find("." + t.params.slideClass).remove();
            else
                for (var M = p; M <= c; M += 1)
                    (M < y || x < M) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + M + '"]').remove();
            for (var z = 0; z < u.length; z += 1)
                y <= z && z <= x && (void 0 === c || e ? C.push(z) : (c < z && C.push(z),
                z < p && S.push(z)));
            C.forEach(function(e) {
                t.$wrapperEl.append(v(u[e], e))
            }),
                S.sort(function(e, t) {
                    return t - e
                }).forEach(function(e) {
                    t.$wrapperEl.prepend(v(u[e], e))
                }),
                t.$wrapperEl.children(".swiper-slide").css(m, T + "px"),
                E()
        },
        renderSlide: function(e, t) {
            var a = this
                , i = a.params.virtual;
            if (i.cache && a.virtual.cache[t])
                return a.virtual.cache[t];
            var s = i.renderSlide ? L(i.renderSlide.call(a, e, t)) : L('<div class="' + a.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
            return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t),
            i.cache && (a.virtual.cache[t] = s),
                s
        },
        appendSlide: function(e) {
            if ("object" == typeof e && "length"in e)
                for (var t = 0; t < e.length; t += 1)
                    e[t] && this.virtual.slides.push(e[t]);
            else
                this.virtual.slides.push(e);
            this.virtual.update(!0)
        },
        prependSlide: function(e) {
            var t = this
                , a = t.activeIndex
                , i = a + 1
                , s = 1;
            if (Array.isArray(e)) {
                for (var r = 0; r < e.length; r += 1)
                    e[r] && t.virtual.slides.unshift(e[r]);
                i = a + e.length,
                    s = e.length
            } else
                t.virtual.slides.unshift(e);
            if (t.params.virtual.cache) {
                var n = t.virtual.cache
                    , o = {};
                Object.keys(n).forEach(function(e) {
                    o[parseInt(e, 10) + s] = n[e]
                }),
                    t.virtual.cache = o
            }
            t.virtual.update(!0),
                t.slideTo(i, 0)
        },
        removeSlide: function(e) {
            var t = this;
            if (null != e) {
                var a = t.activeIndex;
                if (Array.isArray(e))
                    for (var i = e.length - 1; 0 <= i; i -= 1)
                        t.virtual.slides.splice(e[i], 1),
                        t.params.virtual.cache && delete t.virtual.cache[e[i]],
                        e[i] < a && (a -= 1),
                            a = Math.max(a, 0);
                else
                    t.virtual.slides.splice(e, 1),
                    t.params.virtual.cache && delete t.virtual.cache[e],
                    e < a && (a -= 1),
                        a = Math.max(a, 0);
                t.virtual.update(!0),
                    t.slideTo(a, 0)
            }
        },
        removeAllSlides: function() {
            var e = this;
            e.virtual.slides = [],
            e.params.virtual.cache && (e.virtual.cache = {}),
                e.virtual.update(!0),
                e.slideTo(0, 0)
        }
    }
        , $ = {
        name: "virtual",
        params: {
            virtual: {
                enabled: !1,
                slides: [],
                cache: !0,
                renderSlide: null,
                renderExternal: null,
                addSlidesBefore: 0,
                addSlidesAfter: 0
            }
        },
        create: function() {
            var e = this;
            ee.extend(e, {
                virtual: {
                    update: k.update.bind(e),
                    appendSlide: k.appendSlide.bind(e),
                    prependSlide: k.prependSlide.bind(e),
                    removeSlide: k.removeSlide.bind(e),
                    removeAllSlides: k.removeAllSlides.bind(e),
                    renderSlide: k.renderSlide.bind(e),
                    slides: e.params.virtual.slides,
                    cache: {}
                }
            })
        },
        on: {
            beforeInit: function() {
                var e = this;
                if (e.params.virtual.enabled) {
                    e.classNames.push(e.params.containerModifierClass + "virtual");
                    var t = {
                        watchSlidesProgress: !0
                    };
                    ee.extend(e.params, t),
                        ee.extend(e.originalParams, t),
                    e.params.initialSlide || e.virtual.update()
                }
            },
            setTranslate: function() {
                this.params.virtual.enabled && this.virtual.update()
            }
        }
    }
        , D = {
        handle: function(e) {
            var t = this
                , a = t.rtlTranslate
                , i = e;
            i.originalEvent && (i = i.originalEvent);
            var s = i.keyCode || i.charCode;
            if (!t.allowSlideNext && (t.isHorizontal() && 39 === s || t.isVertical() && 40 === s))
                return !1;
            if (!t.allowSlidePrev && (t.isHorizontal() && 37 === s || t.isVertical() && 38 === s))
                return !1;
            if (!(i.shiftKey || i.altKey || i.ctrlKey || i.metaKey || f.activeElement && f.activeElement.nodeName && ("input" === f.activeElement.nodeName.toLowerCase() || "textarea" === f.activeElement.nodeName.toLowerCase()))) {
                if (t.params.keyboard.onlyInViewport && (37 === s || 39 === s || 38 === s || 40 === s)) {
                    var r = !1;
                    if (0 < t.$el.parents("." + t.params.slideClass).length && 0 === t.$el.parents("." + t.params.slideActiveClass).length)
                        return;
                    var n = J.innerWidth
                        , o = J.innerHeight
                        , l = t.$el.offset();
                    a && (l.left -= t.$el[0].scrollLeft);
                    for (var d = [[l.left, l.top], [l.left + t.width, l.top], [l.left, l.top + t.height], [l.left + t.width, l.top + t.height]], p = 0; p < d.length; p += 1) {
                        var c = d[p];
                        0 <= c[0] && c[0] <= n && 0 <= c[1] && c[1] <= o && (r = !0)
                    }
                    if (!r)
                        return
                }
                t.isHorizontal() ? (37 !== s && 39 !== s || (i.preventDefault ? i.preventDefault() : i.returnValue = !1),
                (39 === s && !a || 37 === s && a) && t.slideNext(),
                (37 === s && !a || 39 === s && a) && t.slidePrev()) : (38 !== s && 40 !== s || (i.preventDefault ? i.preventDefault() : i.returnValue = !1),
                40 === s && t.slideNext(),
                38 === s && t.slidePrev()),
                    t.emit("keyPress", s)
            }
        },
        enable: function() {
            this.keyboard.enabled || (L(f).on("keydown", this.keyboard.handle),
                this.keyboard.enabled = !0)
        },
        disable: function() {
            this.keyboard.enabled && (L(f).off("keydown", this.keyboard.handle),
                this.keyboard.enabled = !1)
        }
    }
        , O = {
        name: "keyboard",
        params: {
            keyboard: {
                enabled: !1,
                onlyInViewport: !0
            }
        },
        create: function() {
            ee.extend(this, {
                keyboard: {
                    enabled: !1,
                    enable: D.enable.bind(this),
                    disable: D.disable.bind(this),
                    handle: D.handle.bind(this)
                }
            })
        },
        on: {
            init: function() {
                this.params.keyboard.enabled && this.keyboard.enable()
            },
            destroy: function() {
                this.keyboard.enabled && this.keyboard.disable()
            }
        }
    };
    var A = {
        lastScrollTime: ee.now(),
        event: -1 < J.navigator.userAgent.indexOf("firefox") ? "DOMMouseScroll" : function() {
            var e = "onwheel"
                , t = e in f;
            if (!t) {
                var a = f.createElement("div");
                a.setAttribute(e, "return;"),
                    t = "function" == typeof a[e]
            }
            return !t && f.implementation && f.implementation.hasFeature && !0 !== f.implementation.hasFeature("", "") && (t = f.implementation.hasFeature("Events.wheel", "3.0")),
                t
        }() ? "wheel" : "mousewheel",
        normalize: function(e) {
            var t = 0
                , a = 0
                , i = 0
                , s = 0;
            return "detail"in e && (a = e.detail),
            "wheelDelta"in e && (a = -e.wheelDelta / 120),
            "wheelDeltaY"in e && (a = -e.wheelDeltaY / 120),
            "wheelDeltaX"in e && (t = -e.wheelDeltaX / 120),
            "axis"in e && e.axis === e.HORIZONTAL_AXIS && (t = a,
                a = 0),
                i = 10 * t,
                s = 10 * a,
            "deltaY"in e && (s = e.deltaY),
            "deltaX"in e && (i = e.deltaX),
            (i || s) && e.deltaMode && (1 === e.deltaMode ? (i *= 40,
                s *= 40) : (i *= 800,
                s *= 800)),
            i && !t && (t = i < 1 ? -1 : 1),
            s && !a && (a = s < 1 ? -1 : 1),
                {
                    spinX: t,
                    spinY: a,
                    pixelX: i,
                    pixelY: s
                }
        },
        handleMouseEnter: function() {
            this.mouseEntered = !0
        },
        handleMouseLeave: function() {
            this.mouseEntered = !1
        },
        handle: function(e) {
            var t = e
                , a = this
                , i = a.params.mousewheel;
            if (!a.mouseEntered && !i.releaseOnEdges)
                return !0;
            t.originalEvent && (t = t.originalEvent);
            var s = 0
                , r = a.rtlTranslate ? -1 : 1
                , n = A.normalize(t);
            if (i.forceToAxis)
                if (a.isHorizontal()) {
                    if (!(Math.abs(n.pixelX) > Math.abs(n.pixelY)))
                        return !0;
                    s = n.pixelX * r
                } else {
                    if (!(Math.abs(n.pixelY) > Math.abs(n.pixelX)))
                        return !0;
                    s = n.pixelY
                }
            else
                s = Math.abs(n.pixelX) > Math.abs(n.pixelY) ? -n.pixelX * r : -n.pixelY;
            if (0 === s)
                return !0;
            if (i.invert && (s = -s),
                a.params.freeMode) {
                a.params.loop && a.loopFix();
                var o = a.getTranslate() + s * i.sensitivity
                    , l = a.isBeginning
                    , d = a.isEnd;
                if (o >= a.minTranslate() && (o = a.minTranslate()),
                o <= a.maxTranslate() && (o = a.maxTranslate()),
                    a.setTransition(0),
                    a.setTranslate(o),
                    a.updateProgress(),
                    a.updateActiveIndex(),
                    a.updateSlidesClasses(),
                (!l && a.isBeginning || !d && a.isEnd) && a.updateSlidesClasses(),
                a.params.freeModeSticky && (clearTimeout(a.mousewheel.timeout),
                    a.mousewheel.timeout = ee.nextTick(function() {
                        a.slideToClosest()
                    }, 300)),
                    a.emit("scroll", t),
                a.params.autoplay && a.params.autoplayDisableOnInteraction && a.autoplay.stop(),
                o === a.minTranslate() || o === a.maxTranslate())
                    return !0
            } else {
                if (60 < ee.now() - a.mousewheel.lastScrollTime)
                    if (s < 0)
                        if (a.isEnd && !a.params.loop || a.animating) {
                            if (i.releaseOnEdges)
                                return !0
                        } else
                            a.slideNext(),
                                a.emit("scroll", t);
                    else if (a.isBeginning && !a.params.loop || a.animating) {
                        if (i.releaseOnEdges)
                            return !0
                    } else
                        a.slidePrev(),
                            a.emit("scroll", t);
                a.mousewheel.lastScrollTime = (new J.Date).getTime()
            }
            return t.preventDefault ? t.preventDefault() : t.returnValue = !1,
                !1
        },
        enable: function() {
            var e = this;
            if (!A.event)
                return !1;
            if (e.mousewheel.enabled)
                return !1;
            var t = e.$el;
            return "container" !== e.params.mousewheel.eventsTarged && (t = L(e.params.mousewheel.eventsTarged)),
                t.on("mouseenter", e.mousewheel.handleMouseEnter),
                t.on("mouseleave", e.mousewheel.handleMouseLeave),
                t.on(A.event, e.mousewheel.handle),
                e.mousewheel.enabled = !0
        },
        disable: function() {
            var e = this;
            if (!A.event)
                return !1;
            if (!e.mousewheel.enabled)
                return !1;
            var t = e.$el;
            return "container" !== e.params.mousewheel.eventsTarged && (t = L(e.params.mousewheel.eventsTarged)),
                t.off(A.event, e.mousewheel.handle),
                !(e.mousewheel.enabled = !1)
        }
    }
        , H = {
        update: function() {
            var e = this
                , t = e.params.navigation;
            if (!e.params.loop) {
                var a = e.navigation
                    , i = a.$nextEl
                    , s = a.$prevEl;
                s && 0 < s.length && (e.isBeginning ? s.addClass(t.disabledClass) : s.removeClass(t.disabledClass),
                    s[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)),
                i && 0 < i.length && (e.isEnd ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass),
                    i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass))
            }
        },
        onPrevClick: function(e) {
            e.preventDefault(),
            this.isBeginning && !this.params.loop || this.slidePrev()
        },
        onNextClick: function(e) {
            e.preventDefault(),
            this.isEnd && !this.params.loop || this.slideNext()
        },
        init: function() {
            var e, t, a = this, i = a.params.navigation;
            (i.nextEl || i.prevEl) && (i.nextEl && (e = L(i.nextEl),
            a.params.uniqueNavElements && "string" == typeof i.nextEl && 1 < e.length && 1 === a.$el.find(i.nextEl).length && (e = a.$el.find(i.nextEl))),
            i.prevEl && (t = L(i.prevEl),
            a.params.uniqueNavElements && "string" == typeof i.prevEl && 1 < t.length && 1 === a.$el.find(i.prevEl).length && (t = a.$el.find(i.prevEl))),
            e && 0 < e.length && e.on("click", a.navigation.onNextClick),
            t && 0 < t.length && t.on("click", a.navigation.onPrevClick),
                ee.extend(a.navigation, {
                    $nextEl: e,
                    nextEl: e && e[0],
                    $prevEl: t,
                    prevEl: t && t[0]
                }))
        },
        destroy: function() {
            var e = this
                , t = e.navigation
                , a = t.$nextEl
                , i = t.$prevEl;
            a && a.length && (a.off("click", e.navigation.onNextClick),
                a.removeClass(e.params.navigation.disabledClass)),
            i && i.length && (i.off("click", e.navigation.onPrevClick),
                i.removeClass(e.params.navigation.disabledClass))
        }
    }
        , N = {
        update: function() {
            var e = this
                , t = e.rtl
                , s = e.params.pagination;
            if (s.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                var r, a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length, i = e.pagination.$el, n = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                if (e.params.loop ? ((r = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > a - 1 - 2 * e.loopedSlides && (r -= a - 2 * e.loopedSlides),
                n - 1 < r && (r -= n),
                r < 0 && "bullets" !== e.params.paginationType && (r = n + r)) : r = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0,
                "bullets" === s.type && e.pagination.bullets && 0 < e.pagination.bullets.length) {
                    var o, l, d, p = e.pagination.bullets;
                    if (s.dynamicBullets && (e.pagination.bulletSize = p.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0),
                        i.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (s.dynamicMainBullets + 4) + "px"),
                    1 < s.dynamicMainBullets && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += r - e.previousIndex,
                        e.pagination.dynamicBulletIndex > s.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = s.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)),
                        o = r - e.pagination.dynamicBulletIndex,
                        d = ((l = o + (Math.min(p.length, s.dynamicMainBullets) - 1)) + o) / 2),
                        p.removeClass(s.bulletActiveClass + " " + s.bulletActiveClass + "-next " + s.bulletActiveClass + "-next-next " + s.bulletActiveClass + "-prev " + s.bulletActiveClass + "-prev-prev " + s.bulletActiveClass + "-main"),
                    1 < i.length)
                        p.each(function(e, t) {
                            var a = L(t)
                                , i = a.index();
                            i === r && a.addClass(s.bulletActiveClass),
                            s.dynamicBullets && (o <= i && i <= l && a.addClass(s.bulletActiveClass + "-main"),
                            i === o && a.prev().addClass(s.bulletActiveClass + "-prev").prev().addClass(s.bulletActiveClass + "-prev-prev"),
                            i === l && a.next().addClass(s.bulletActiveClass + "-next").next().addClass(s.bulletActiveClass + "-next-next"))
                        });
                    else if (p.eq(r).addClass(s.bulletActiveClass),
                        s.dynamicBullets) {
                        for (var c = p.eq(o), u = p.eq(l), h = o; h <= l; h += 1)
                            p.eq(h).addClass(s.bulletActiveClass + "-main");
                        c.prev().addClass(s.bulletActiveClass + "-prev").prev().addClass(s.bulletActiveClass + "-prev-prev"),
                            u.next().addClass(s.bulletActiveClass + "-next").next().addClass(s.bulletActiveClass + "-next-next")
                    }
                    if (s.dynamicBullets) {
                        var v = Math.min(p.length, s.dynamicMainBullets + 4)
                            , f = (e.pagination.bulletSize * v - e.pagination.bulletSize) / 2 - d * e.pagination.bulletSize
                            , m = t ? "right" : "left";
                        p.css(e.isHorizontal() ? m : "top", f + "px")
                    }
                }
                if ("fraction" === s.type && (i.find("." + s.currentClass).text(s.formatFractionCurrent(r + 1)),
                    i.find("." + s.totalClass).text(s.formatFractionTotal(n))),
                "progressbar" === s.type) {
                    var g;
                    g = s.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                    var b = (r + 1) / n
                        , w = 1
                        , y = 1;
                    "horizontal" === g ? w = b : y = b,
                        i.find("." + s.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + w + ") scaleY(" + y + ")").transition(e.params.speed)
                }
                "custom" === s.type && s.renderCustom ? (i.html(s.renderCustom(e, r + 1, n)),
                    e.emit("paginationRender", e, i[0])) : e.emit("paginationUpdate", e, i[0]),
                    i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](s.lockClass)
            }
        },
        render: function() {
            var e = this
                , t = e.params.pagination;
            if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                var a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length
                    , i = e.pagination.$el
                    , s = "";
                if ("bullets" === t.type) {
                    for (var r = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, n = 0; n < r; n += 1)
                        t.renderBullet ? s += t.renderBullet.call(e, n, t.bulletClass) : s += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
                    i.html(s),
                        e.pagination.bullets = i.find("." + t.bulletClass)
                }
                "fraction" === t.type && (s = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>',
                    i.html(s)),
                "progressbar" === t.type && (s = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>',
                    i.html(s)),
                "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
            }
        },
        init: function() {
            var a = this
                , e = a.params.pagination;
            if (e.el) {
                var t = L(e.el);
                0 !== t.length && (a.params.uniqueNavElements && "string" == typeof e.el && 1 < t.length && 1 === a.$el.find(e.el).length && (t = a.$el.find(e.el)),
                "bullets" === e.type && e.clickable && t.addClass(e.clickableClass),
                    t.addClass(e.modifierClass + e.type),
                "bullets" === e.type && e.dynamicBullets && (t.addClass("" + e.modifierClass + e.type + "-dynamic"),
                    a.pagination.dynamicBulletIndex = 0,
                e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
                "progressbar" === e.type && e.progressbarOpposite && t.addClass(e.progressbarOppositeClass),
                e.clickable && t.on("click", "." + e.bulletClass, function(e) {
                    e.preventDefault();
                    var t = L(this).index() * a.params.slidesPerGroup;
                    a.params.loop && (t += a.loopedSlides),
                        a.slideTo(t)
                }),
                    ee.extend(a.pagination, {
                        $el: t,
                        el: t[0]
                    }))
            }
        },
        destroy: function() {
            var e = this
                , t = e.params.pagination;
            if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                var a = e.pagination.$el;
                a.removeClass(t.hiddenClass),
                    a.removeClass(t.modifierClass + t.type),
                e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass),
                t.clickable && a.off("click", "." + t.bulletClass)
            }
        }
    }
        , G = {
        setTranslate: function() {
            var e = this;
            if (e.params.scrollbar.el && e.scrollbar.el) {
                var t = e.scrollbar
                    , a = e.rtlTranslate
                    , i = e.progress
                    , s = t.dragSize
                    , r = t.trackSize
                    , n = t.$dragEl
                    , o = t.$el
                    , l = e.params.scrollbar
                    , d = s
                    , p = (r - s) * i;
                a ? 0 < (p = -p) ? (d = s - p,
                    p = 0) : r < -p + s && (d = r + p) : p < 0 ? (d = s + p,
                    p = 0) : r < p + s && (d = r - p),
                    e.isHorizontal() ? (te.transforms3d ? n.transform("translate3d(" + p + "px, 0, 0)") : n.transform("translateX(" + p + "px)"),
                        n[0].style.width = d + "px") : (te.transforms3d ? n.transform("translate3d(0px, " + p + "px, 0)") : n.transform("translateY(" + p + "px)"),
                        n[0].style.height = d + "px"),
                l.hide && (clearTimeout(e.scrollbar.timeout),
                    o[0].style.opacity = 1,
                    e.scrollbar.timeout = setTimeout(function() {
                        o[0].style.opacity = 0,
                            o.transition(400)
                    }, 1e3))
            }
        },
        setTransition: function(e) {
            this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
        },
        updateSize: function() {
            var e = this;
            if (e.params.scrollbar.el && e.scrollbar.el) {
                var t = e.scrollbar
                    , a = t.$dragEl
                    , i = t.$el;
                a[0].style.width = "",
                    a[0].style.height = "";
                var s, r = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight, n = e.size / e.virtualSize, o = n * (r / e.size);
                s = "auto" === e.params.scrollbar.dragSize ? r * n : parseInt(e.params.scrollbar.dragSize, 10),
                    e.isHorizontal() ? a[0].style.width = s + "px" : a[0].style.height = s + "px",
                    i[0].style.display = 1 <= n ? "none" : "",
                e.params.scrollbar.hide && (i[0].style.opacity = 0),
                    ee.extend(t, {
                        trackSize: r,
                        divider: n,
                        moveDivider: o,
                        dragSize: s
                    }),
                    t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
            }
        },
        setDragPosition: function(e) {
            var t, a = this, i = a.scrollbar, s = a.rtlTranslate, r = i.$el, n = i.dragSize, o = i.trackSize;
            t = ((a.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - r.offset()[a.isHorizontal() ? "left" : "top"] - n / 2) / (o - n),
                t = Math.max(Math.min(t, 1), 0),
            s && (t = 1 - t);
            var l = a.minTranslate() + (a.maxTranslate() - a.minTranslate()) * t;
            a.updateProgress(l),
                a.setTranslate(l),
                a.updateActiveIndex(),
                a.updateSlidesClasses()
        },
        onDragStart: function(e) {
            var t = this
                , a = t.params.scrollbar
                , i = t.scrollbar
                , s = t.$wrapperEl
                , r = i.$el
                , n = i.$dragEl;
            t.scrollbar.isTouched = !0,
                e.preventDefault(),
                e.stopPropagation(),
                s.transition(100),
                n.transition(100),
                i.setDragPosition(e),
                clearTimeout(t.scrollbar.dragTimeout),
                r.transition(0),
            a.hide && r.css("opacity", 1),
                t.emit("scrollbarDragStart", e)
        },
        onDragMove: function(e) {
            var t = this.scrollbar
                , a = this.$wrapperEl
                , i = t.$el
                , s = t.$dragEl;
            this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1,
                t.setDragPosition(e),
                a.transition(0),
                i.transition(0),
                s.transition(0),
                this.emit("scrollbarDragMove", e))
        },
        onDragEnd: function(e) {
            var t = this
                , a = t.params.scrollbar
                , i = t.scrollbar.$el;
            t.scrollbar.isTouched && (t.scrollbar.isTouched = !1,
            a.hide && (clearTimeout(t.scrollbar.dragTimeout),
                t.scrollbar.dragTimeout = ee.nextTick(function() {
                    i.css("opacity", 0),
                        i.transition(400)
                }, 1e3)),
                t.emit("scrollbarDragEnd", e),
            a.snapOnRelease && t.slideToClosest())
        },
        enableDraggable: function() {
            var e = this;
            if (e.params.scrollbar.el) {
                var t = e.scrollbar
                    , a = e.touchEventsTouch
                    , i = e.touchEventsDesktop
                    , s = e.params
                    , r = t.$el[0]
                    , n = !(!te.passiveListener || !s.passiveListeners) && {
                    passive: !1,
                    capture: !1
                }
                    , o = !(!te.passiveListener || !s.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                te.touch ? (r.addEventListener(a.start, e.scrollbar.onDragStart, n),
                    r.addEventListener(a.move, e.scrollbar.onDragMove, n),
                    r.addEventListener(a.end, e.scrollbar.onDragEnd, o)) : (r.addEventListener(i.start, e.scrollbar.onDragStart, n),
                    f.addEventListener(i.move, e.scrollbar.onDragMove, n),
                    f.addEventListener(i.end, e.scrollbar.onDragEnd, o))
            }
        },
        disableDraggable: function() {
            var e = this;
            if (e.params.scrollbar.el) {
                var t = e.scrollbar
                    , a = e.touchEventsTouch
                    , i = e.touchEventsDesktop
                    , s = e.params
                    , r = t.$el[0]
                    , n = !(!te.passiveListener || !s.passiveListeners) && {
                    passive: !1,
                    capture: !1
                }
                    , o = !(!te.passiveListener || !s.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                te.touch ? (r.removeEventListener(a.start, e.scrollbar.onDragStart, n),
                    r.removeEventListener(a.move, e.scrollbar.onDragMove, n),
                    r.removeEventListener(a.end, e.scrollbar.onDragEnd, o)) : (r.removeEventListener(i.start, e.scrollbar.onDragStart, n),
                    f.removeEventListener(i.move, e.scrollbar.onDragMove, n),
                    f.removeEventListener(i.end, e.scrollbar.onDragEnd, o))
            }
        },
        init: function() {
            var e = this;
            if (e.params.scrollbar.el) {
                var t = e.scrollbar
                    , a = e.$el
                    , i = e.params.scrollbar
                    , s = L(i.el);
                e.params.uniqueNavElements && "string" == typeof i.el && 1 < s.length && 1 === a.find(i.el).length && (s = a.find(i.el));
                var r = s.find("." + e.params.scrollbar.dragClass);
                0 === r.length && (r = L('<div class="' + e.params.scrollbar.dragClass + '"></div>'),
                    s.append(r)),
                    ee.extend(t, {
                        $el: s,
                        el: s[0],
                        $dragEl: r,
                        dragEl: r[0]
                    }),
                i.draggable && t.enableDraggable()
            }
        },
        destroy: function() {
            this.scrollbar.disableDraggable()
        }
    }
        , B = {
        setTransform: function(e, t) {
            var a = this.rtl
                , i = L(e)
                , s = a ? -1 : 1
                , r = i.attr("data-swiper-parallax") || "0"
                , n = i.attr("data-swiper-parallax-x")
                , o = i.attr("data-swiper-parallax-y")
                , l = i.attr("data-swiper-parallax-scale")
                , d = i.attr("data-swiper-parallax-opacity");
            if (n || o ? (n = n || "0",
                o = o || "0") : this.isHorizontal() ? (n = r,
                o = "0") : (o = r,
                n = "0"),
                n = 0 <= n.indexOf("%") ? parseInt(n, 10) * t * s + "%" : n * t * s + "px",
                o = 0 <= o.indexOf("%") ? parseInt(o, 10) * t + "%" : o * t + "px",
            null != d) {
                var p = d - (d - 1) * (1 - Math.abs(t));
                i[0].style.opacity = p
            }
            if (null == l)
                i.transform("translate3d(" + n + ", " + o + ", 0px)");
            else {
                var c = l - (l - 1) * (1 - Math.abs(t));
                i.transform("translate3d(" + n + ", " + o + ", 0px) scale(" + c + ")")
            }
        },
        setTranslate: function() {
            var i = this
                , e = i.$el
                , t = i.slides
                , s = i.progress
                , r = i.snapGrid;
            e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, t) {
                i.parallax.setTransform(t, s)
            }),
                t.each(function(e, t) {
                    var a = t.progress;
                    1 < i.params.slidesPerGroup && "auto" !== i.params.slidesPerView && (a += Math.ceil(e / 2) - s * (r.length - 1)),
                        a = Math.min(Math.max(a, -1), 1),
                        L(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, t) {
                            i.parallax.setTransform(t, a)
                        })
                })
        },
        setTransition: function(s) {
            void 0 === s && (s = this.params.speed);
            this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, t) {
                var a = L(t)
                    , i = parseInt(a.attr("data-swiper-parallax-duration"), 10) || s;
                0 === s && (i = 0),
                    a.transition(i)
            })
        }
    }
        , X = {
        getDistanceBetweenTouches: function(e) {
            if (e.targetTouches.length < 2)
                return 1;
            var t = e.targetTouches[0].pageX
                , a = e.targetTouches[0].pageY
                , i = e.targetTouches[1].pageX
                , s = e.targetTouches[1].pageY;
            return Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - a, 2))
        },
        onGestureStart: function(e) {
            var t = this
                , a = t.params.zoom
                , i = t.zoom
                , s = i.gesture;
            if (i.fakeGestureTouched = !1,
                i.fakeGestureMoved = !1,
                !te.gestures) {
                if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2)
                    return;
                i.fakeGestureTouched = !0,
                    s.scaleStart = X.getDistanceBetweenTouches(e)
            }
            s.$slideEl && s.$slideEl.length || (s.$slideEl = L(e.target).closest(".swiper-slide"),
            0 === s.$slideEl.length && (s.$slideEl = t.slides.eq(t.activeIndex)),
                s.$imageEl = s.$slideEl.find("img, svg, canvas"),
                s.$imageWrapEl = s.$imageEl.parent("." + a.containerClass),
                s.maxRatio = s.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio,
            0 !== s.$imageWrapEl.length) ? (s.$imageEl.transition(0),
                t.zoom.isScaling = !0) : s.$imageEl = void 0
        },
        onGestureChange: function(e) {
            var t = this.params.zoom
                , a = this.zoom
                , i = a.gesture;
            if (!te.gestures) {
                if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2)
                    return;
                a.fakeGestureMoved = !0,
                    i.scaleMove = X.getDistanceBetweenTouches(e)
            }
            i.$imageEl && 0 !== i.$imageEl.length && (a.scale = te.gestures ? e.scale * a.currentScale : i.scaleMove / i.scaleStart * a.currentScale,
            a.scale > i.maxRatio && (a.scale = i.maxRatio - 1 + Math.pow(a.scale - i.maxRatio + 1, .5)),
            a.scale < t.minRatio && (a.scale = t.minRatio + 1 - Math.pow(t.minRatio - a.scale + 1, .5)),
                i.$imageEl.transform("translate3d(0,0,0) scale(" + a.scale + ")"))
        },
        onGestureEnd: function(e) {
            var t = this.params.zoom
                , a = this.zoom
                , i = a.gesture;
            if (!te.gestures) {
                if (!a.fakeGestureTouched || !a.fakeGestureMoved)
                    return;
                if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !g.android)
                    return;
                a.fakeGestureTouched = !1,
                    a.fakeGestureMoved = !1
            }
            i.$imageEl && 0 !== i.$imageEl.length && (a.scale = Math.max(Math.min(a.scale, i.maxRatio), t.minRatio),
                i.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + a.scale + ")"),
                a.currentScale = a.scale,
                a.isScaling = !1,
            1 === a.scale && (i.$slideEl = void 0))
        },
        onTouchStart: function(e) {
            var t = this.zoom
                , a = t.gesture
                , i = t.image;
            a.$imageEl && 0 !== a.$imageEl.length && (i.isTouched || (g.android && e.preventDefault(),
                i.isTouched = !0,
                i.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX,
                i.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
        },
        onTouchMove: function(e) {
            var t = this
                , a = t.zoom
                , i = a.gesture
                , s = a.image
                , r = a.velocity;
            if (i.$imageEl && 0 !== i.$imageEl.length && (t.allowClick = !1,
            s.isTouched && i.$slideEl)) {
                s.isMoved || (s.width = i.$imageEl[0].offsetWidth,
                    s.height = i.$imageEl[0].offsetHeight,
                    s.startX = ee.getTranslate(i.$imageWrapEl[0], "x") || 0,
                    s.startY = ee.getTranslate(i.$imageWrapEl[0], "y") || 0,
                    i.slideWidth = i.$slideEl[0].offsetWidth,
                    i.slideHeight = i.$slideEl[0].offsetHeight,
                    i.$imageWrapEl.transition(0),
                t.rtl && (s.startX = -s.startX,
                    s.startY = -s.startY));
                var n = s.width * a.scale
                    , o = s.height * a.scale;
                if (!(n < i.slideWidth && o < i.slideHeight)) {
                    if (s.minX = Math.min(i.slideWidth / 2 - n / 2, 0),
                        s.maxX = -s.minX,
                        s.minY = Math.min(i.slideHeight / 2 - o / 2, 0),
                        s.maxY = -s.minY,
                        s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
                        s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY,
                    !s.isMoved && !a.isScaling) {
                        if (t.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x))
                            return void (s.isTouched = !1);
                        if (!t.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y))
                            return void (s.isTouched = !1)
                    }
                    e.preventDefault(),
                        e.stopPropagation(),
                        s.isMoved = !0,
                        s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX,
                        s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY,
                    s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)),
                    s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)),
                    s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)),
                    s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)),
                    r.prevPositionX || (r.prevPositionX = s.touchesCurrent.x),
                    r.prevPositionY || (r.prevPositionY = s.touchesCurrent.y),
                    r.prevTime || (r.prevTime = Date.now()),
                        r.x = (s.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2,
                        r.y = (s.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2,
                    Math.abs(s.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0),
                    Math.abs(s.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0),
                        r.prevPositionX = s.touchesCurrent.x,
                        r.prevPositionY = s.touchesCurrent.y,
                        r.prevTime = Date.now(),
                        i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
                }
            }
        },
        onTouchEnd: function() {
            var e = this.zoom
                , t = e.gesture
                , a = e.image
                , i = e.velocity;
            if (t.$imageEl && 0 !== t.$imageEl.length) {
                if (!a.isTouched || !a.isMoved)
                    return a.isTouched = !1,
                        void (a.isMoved = !1);
                a.isTouched = !1,
                    a.isMoved = !1;
                var s = 300
                    , r = 300
                    , n = i.x * s
                    , o = a.currentX + n
                    , l = i.y * r
                    , d = a.currentY + l;
                0 !== i.x && (s = Math.abs((o - a.currentX) / i.x)),
                0 !== i.y && (r = Math.abs((d - a.currentY) / i.y));
                var p = Math.max(s, r);
                a.currentX = o,
                    a.currentY = d;
                var c = a.width * e.scale
                    , u = a.height * e.scale;
                a.minX = Math.min(t.slideWidth / 2 - c / 2, 0),
                    a.maxX = -a.minX,
                    a.minY = Math.min(t.slideHeight / 2 - u / 2, 0),
                    a.maxY = -a.minY,
                    a.currentX = Math.max(Math.min(a.currentX, a.maxX), a.minX),
                    a.currentY = Math.max(Math.min(a.currentY, a.maxY), a.minY),
                    t.$imageWrapEl.transition(p).transform("translate3d(" + a.currentX + "px, " + a.currentY + "px,0)")
            }
        },
        onTransitionEnd: function() {
            var e = this.zoom
                , t = e.gesture;
            t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"),
                t.$imageWrapEl.transform("translate3d(0,0,0)"),
                e.scale = 1,
                e.currentScale = 1,
                t.$slideEl = void 0,
                t.$imageEl = void 0,
                t.$imageWrapEl = void 0)
        },
        toggle: function(e) {
            var t = this.zoom;
            t.scale && 1 !== t.scale ? t.out() : t.in(e)
        },
        in: function(e) {
            var t, a, i, s, r, n, o, l, d, p, c, u, h, v, f, m, g = this, b = g.zoom, w = g.params.zoom, y = b.gesture, x = b.image;
            (y.$slideEl || (y.$slideEl = g.clickedSlide ? L(g.clickedSlide) : g.slides.eq(g.activeIndex),
                y.$imageEl = y.$slideEl.find("img, svg, canvas"),
                y.$imageWrapEl = y.$imageEl.parent("." + w.containerClass)),
            y.$imageEl && 0 !== y.$imageEl.length) && (y.$slideEl.addClass("" + w.zoomedSlideClass),
                void 0 === x.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX,
                    a = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = x.touchesStart.x,
                    a = x.touchesStart.y),
                b.scale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio,
                b.currentScale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio,
                e ? (f = y.$slideEl[0].offsetWidth,
                    m = y.$slideEl[0].offsetHeight,
                    i = y.$slideEl.offset().left + f / 2 - t,
                    s = y.$slideEl.offset().top + m / 2 - a,
                    o = y.$imageEl[0].offsetWidth,
                    l = y.$imageEl[0].offsetHeight,
                    d = o * b.scale,
                    p = l * b.scale,
                    h = -(c = Math.min(f / 2 - d / 2, 0)),
                    v = -(u = Math.min(m / 2 - p / 2, 0)),
                (r = i * b.scale) < c && (r = c),
                h < r && (r = h),
                (n = s * b.scale) < u && (n = u),
                v < n && (n = v)) : n = r = 0,
                y.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + n + "px,0)"),
                y.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + b.scale + ")"))
        },
        out: function() {
            var e = this
                , t = e.zoom
                , a = e.params.zoom
                , i = t.gesture;
            i.$slideEl || (i.$slideEl = e.clickedSlide ? L(e.clickedSlide) : e.slides.eq(e.activeIndex),
                i.$imageEl = i.$slideEl.find("img, svg, canvas"),
                i.$imageWrapEl = i.$imageEl.parent("." + a.containerClass)),
            i.$imageEl && 0 !== i.$imageEl.length && (t.scale = 1,
                t.currentScale = 1,
                i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
                i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
                i.$slideEl.removeClass("" + a.zoomedSlideClass),
                i.$slideEl = void 0)
        },
        enable: function() {
            var e = this
                , t = e.zoom;
            if (!t.enabled) {
                t.enabled = !0;
                var a = !("touchstart" !== e.touchEvents.start || !te.passiveListener || !e.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                te.gestures ? (e.$wrapperEl.on("gesturestart", ".swiper-slide", t.onGestureStart, a),
                    e.$wrapperEl.on("gesturechange", ".swiper-slide", t.onGestureChange, a),
                    e.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, a)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, ".swiper-slide", t.onGestureStart, a),
                    e.$wrapperEl.on(e.touchEvents.move, ".swiper-slide", t.onGestureChange, a),
                    e.$wrapperEl.on(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, a)),
                    e.$wrapperEl.on(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
            }
        },
        disable: function() {
            var e = this
                , t = e.zoom;
            if (t.enabled) {
                e.zoom.enabled = !1;
                var a = !("touchstart" !== e.touchEvents.start || !te.passiveListener || !e.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                te.gestures ? (e.$wrapperEl.off("gesturestart", ".swiper-slide", t.onGestureStart, a),
                    e.$wrapperEl.off("gesturechange", ".swiper-slide", t.onGestureChange, a),
                    e.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, a)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, ".swiper-slide", t.onGestureStart, a),
                    e.$wrapperEl.off(e.touchEvents.move, ".swiper-slide", t.onGestureChange, a),
                    e.$wrapperEl.off(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, a)),
                    e.$wrapperEl.off(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
            }
        }
    }
        , Y = {
        loadInSlide: function(e, l) {
            void 0 === l && (l = !0);
            var d = this
                , p = d.params.lazy;
            if (void 0 !== e && 0 !== d.slides.length) {
                var c = d.virtual && d.params.virtual.enabled ? d.$wrapperEl.children("." + d.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : d.slides.eq(e)
                    , t = c.find("." + p.elementClass + ":not(." + p.loadedClass + "):not(." + p.loadingClass + ")");
                !c.hasClass(p.elementClass) || c.hasClass(p.loadedClass) || c.hasClass(p.loadingClass) || (t = t.add(c[0])),
                0 !== t.length && t.each(function(e, t) {
                    var i = L(t);
                    i.addClass(p.loadingClass);
                    var s = i.attr("data-background")
                        , r = i.attr("data-src")
                        , n = i.attr("data-srcset")
                        , o = i.attr("data-sizes");
                    d.loadImage(i[0], r || s, n, o, !1, function() {
                        if (null != d && d && (!d || d.params) && !d.destroyed) {
                            if (s ? (i.css("background-image", 'url("' + s + '")'),
                                i.removeAttr("data-background")) : (n && (i.attr("srcset", n),
                                i.removeAttr("data-srcset")),
                            o && (i.attr("sizes", o),
                                i.removeAttr("data-sizes")),
                            r && (i.attr("src", r),
                                i.removeAttr("data-src"))),
                                i.addClass(p.loadedClass).removeClass(p.loadingClass),
                                c.find("." + p.preloaderClass).remove(),
                            d.params.loop && l) {
                                var e = c.attr("data-swiper-slide-index");
                                if (c.hasClass(d.params.slideDuplicateClass)) {
                                    var t = d.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + d.params.slideDuplicateClass + ")");
                                    d.lazy.loadInSlide(t.index(), !1)
                                } else {
                                    var a = d.$wrapperEl.children("." + d.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                    d.lazy.loadInSlide(a.index(), !1)
                                }
                            }
                            d.emit("lazyImageReady", c[0], i[0])
                        }
                    }),
                        d.emit("lazyImageLoad", c[0], i[0])
                })
            }
        },
        load: function() {
            var i = this
                , t = i.$wrapperEl
                , a = i.params
                , s = i.slides
                , e = i.activeIndex
                , r = i.virtual && a.virtual.enabled
                , n = a.lazy
                , o = a.slidesPerView;
            function l(e) {
                if (r) {
                    if (t.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]').length)
                        return !0
                } else if (s[e])
                    return !0;
                return !1
            }
            function d(e) {
                return r ? L(e).attr("data-swiper-slide-index") : L(e).index()
            }
            if ("auto" === o && (o = 0),
            i.lazy.initialImageLoaded || (i.lazy.initialImageLoaded = !0),
                i.params.watchSlidesVisibility)
                t.children("." + a.slideVisibleClass).each(function(e, t) {
                    var a = r ? L(t).attr("data-swiper-slide-index") : L(t).index();
                    i.lazy.loadInSlide(a)
                });
            else if (1 < o)
                for (var p = e; p < e + o; p += 1)
                    l(p) && i.lazy.loadInSlide(p);
            else
                i.lazy.loadInSlide(e);
            if (n.loadPrevNext)
                if (1 < o || n.loadPrevNextAmount && 1 < n.loadPrevNextAmount) {
                    for (var c = n.loadPrevNextAmount, u = o, h = Math.min(e + u + Math.max(c, u), s.length), v = Math.max(e - Math.max(u, c), 0), f = e + o; f < h; f += 1)
                        l(f) && i.lazy.loadInSlide(f);
                    for (var m = v; m < e; m += 1)
                        l(m) && i.lazy.loadInSlide(m)
                } else {
                    var g = t.children("." + a.slideNextClass);
                    0 < g.length && i.lazy.loadInSlide(d(g));
                    var b = t.children("." + a.slidePrevClass);
                    0 < b.length && i.lazy.loadInSlide(d(b))
                }
        }
    }
        , V = {
        LinearSpline: function(e, t) {
            var a, i, s, r, n, o = function(e, t) {
                for (i = -1,
                         a = e.length; 1 < a - i; )
                    e[s = a + i >> 1] <= t ? i = s : a = s;
                return a
            };
            return this.x = e,
                this.y = t,
                this.lastIndex = e.length - 1,
                this.interpolate = function(e) {
                    return e ? (n = o(this.x, e),
                        r = n - 1,
                    (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0
                }
                ,
                this
        },
        getInterpolateFunction: function(e) {
            var t = this;
            t.controller.spline || (t.controller.spline = t.params.loop ? new V.LinearSpline(t.slidesGrid,e.slidesGrid) : new V.LinearSpline(t.snapGrid,e.snapGrid))
        },
        setTranslate: function(e, t) {
            var a, i, s = this, r = s.controller.control;
            function n(e) {
                var t = s.rtlTranslate ? -s.translate : s.translate;
                "slide" === s.params.controller.by && (s.controller.getInterpolateFunction(e),
                    i = -s.controller.spline.interpolate(-t)),
                i && "container" !== s.params.controller.by || (a = (e.maxTranslate() - e.minTranslate()) / (s.maxTranslate() - s.minTranslate()),
                    i = (t - s.minTranslate()) * a + e.minTranslate()),
                s.params.controller.inverse && (i = e.maxTranslate() - i),
                    e.updateProgress(i),
                    e.setTranslate(i, s),
                    e.updateActiveIndex(),
                    e.updateSlidesClasses()
            }
            if (Array.isArray(r))
                for (var o = 0; o < r.length; o += 1)
                    r[o] !== t && r[o]instanceof T && n(r[o]);
            else
                r instanceof T && t !== r && n(r)
        },
        setTransition: function(t, e) {
            var a, i = this, s = i.controller.control;
            function r(e) {
                e.setTransition(t, i),
                0 !== t && (e.transitionStart(),
                e.params.autoHeight && ee.nextTick(function() {
                    e.updateAutoHeight()
                }),
                    e.$wrapperEl.transitionEnd(function() {
                        s && (e.params.loop && "slide" === i.params.controller.by && e.loopFix(),
                            e.transitionEnd())
                    }))
            }
            if (Array.isArray(s))
                for (a = 0; a < s.length; a += 1)
                    s[a] !== e && s[a]instanceof T && r(s[a]);
            else
                s instanceof T && e !== s && r(s)
        }
    }
        , F = {
        makeElFocusable: function(e) {
            return e.attr("tabIndex", "0"),
                e
        },
        addElRole: function(e, t) {
            return e.attr("role", t),
                e
        },
        addElLabel: function(e, t) {
            return e.attr("aria-label", t),
                e
        },
        disableEl: function(e) {
            return e.attr("aria-disabled", !0),
                e
        },
        enableEl: function(e) {
            return e.attr("aria-disabled", !1),
                e
        },
        onEnterKey: function(e) {
            var t = this
                , a = t.params.a11y;
            if (13 === e.keyCode) {
                var i = L(e.target);
                t.navigation && t.navigation.$nextEl && i.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(),
                    t.isEnd ? t.a11y.notify(a.lastSlideMessage) : t.a11y.notify(a.nextSlideMessage)),
                t.navigation && t.navigation.$prevEl && i.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(),
                    t.isBeginning ? t.a11y.notify(a.firstSlideMessage) : t.a11y.notify(a.prevSlideMessage)),
                t.pagination && i.is("." + t.params.pagination.bulletClass) && i[0].click()
            }
        },
        notify: function(e) {
            var t = this.a11y.liveRegion;
            0 !== t.length && (t.html(""),
                t.html(e))
        },
        updateNavigation: function() {
            var e = this;
            if (!e.params.loop) {
                var t = e.navigation
                    , a = t.$nextEl
                    , i = t.$prevEl;
                i && 0 < i.length && (e.isBeginning ? e.a11y.disableEl(i) : e.a11y.enableEl(i)),
                a && 0 < a.length && (e.isEnd ? e.a11y.disableEl(a) : e.a11y.enableEl(a))
            }
        },
        updatePagination: function() {
            var i = this
                , s = i.params.a11y;
            i.pagination && i.params.pagination.clickable && i.pagination.bullets && i.pagination.bullets.length && i.pagination.bullets.each(function(e, t) {
                var a = L(t);
                i.a11y.makeElFocusable(a),
                    i.a11y.addElRole(a, "button"),
                    i.a11y.addElLabel(a, s.paginationBulletMessage.replace(/{{index}}/, a.index() + 1))
            })
        },
        init: function() {
            var e = this;
            e.$el.append(e.a11y.liveRegion);
            var t, a, i = e.params.a11y;
            e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl),
            e.navigation && e.navigation.$prevEl && (a = e.navigation.$prevEl),
            t && (e.a11y.makeElFocusable(t),
                e.a11y.addElRole(t, "button"),
                e.a11y.addElLabel(t, i.nextSlideMessage),
                t.on("keydown", e.a11y.onEnterKey)),
            a && (e.a11y.makeElFocusable(a),
                e.a11y.addElRole(a, "button"),
                e.a11y.addElLabel(a, i.prevSlideMessage),
                a.on("keydown", e.a11y.onEnterKey)),
            e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey)
        },
        destroy: function() {
            var e, t, a = this;
            a.a11y.liveRegion && 0 < a.a11y.liveRegion.length && a.a11y.liveRegion.remove(),
            a.navigation && a.navigation.$nextEl && (e = a.navigation.$nextEl),
            a.navigation && a.navigation.$prevEl && (t = a.navigation.$prevEl),
            e && e.off("keydown", a.a11y.onEnterKey),
            t && t.off("keydown", a.a11y.onEnterKey),
            a.pagination && a.params.pagination.clickable && a.pagination.bullets && a.pagination.bullets.length && a.pagination.$el.off("keydown", "." + a.params.pagination.bulletClass, a.a11y.onEnterKey)
        }
    }
        , R = {
        init: function() {
            var e = this;
            if (e.params.history) {
                if (!J.history || !J.history.pushState)
                    return e.params.history.enabled = !1,
                        void (e.params.hashNavigation.enabled = !0);
                var t = e.history;
                t.initialized = !0,
                    t.paths = R.getPathValues(),
                (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit),
                e.params.history.replaceState || J.addEventListener("popstate", e.history.setHistoryPopState))
            }
        },
        destroy: function() {
            this.params.history.replaceState || J.removeEventListener("popstate", this.history.setHistoryPopState)
        },
        setHistoryPopState: function() {
            this.history.paths = R.getPathValues(),
                this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
        },
        getPathValues: function() {
            var e = J.location.pathname.slice(1).split("/").filter(function(e) {
                return "" !== e
            })
                , t = e.length;
            return {
                key: e[t - 2],
                value: e[t - 1]
            }
        },
        setHistory: function(e, t) {
            if (this.history.initialized && this.params.history.enabled) {
                var a = this.slides.eq(t)
                    , i = R.slugify(a.attr("data-history"));
                J.location.pathname.includes(e) || (i = e + "/" + i);
                var s = J.history.state;
                s && s.value === i || (this.params.history.replaceState ? J.history.replaceState({
                    value: i
                }, null, i) : J.history.pushState({
                    value: i
                }, null, i))
            }
        },
        slugify: function(e) {
            return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
        },
        scrollToSlide: function(e, t, a) {
            var i = this;
            if (t)
                for (var s = 0, r = i.slides.length; s < r; s += 1) {
                    var n = i.slides.eq(s);
                    if (R.slugify(n.attr("data-history")) === t && !n.hasClass(i.params.slideDuplicateClass)) {
                        var o = n.index();
                        i.slideTo(o, e, a)
                    }
                }
            else
                i.slideTo(0, e, a)
        }
    }
        , q = {
        onHashCange: function() {
            var e = this
                , t = f.location.hash.replace("#", "");
            if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
                var a = e.$wrapperEl.children("." + e.params.slideClass + '[data-hash="' + t + '"]').index();
                if (void 0 === a)
                    return;
                e.slideTo(a)
            }
        },
        setHash: function() {
            var e = this;
            if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
                if (e.params.hashNavigation.replaceState && J.history && J.history.replaceState)
                    J.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || "");
                else {
                    var t = e.slides.eq(e.activeIndex)
                        , a = t.attr("data-hash") || t.attr("data-history");
                    f.location.hash = a || ""
                }
        },
        init: function() {
            var e = this;
            if (!(!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled)) {
                e.hashNavigation.initialized = !0;
                var t = f.location.hash.replace("#", "");
                if (t)
                    for (var a = 0, i = e.slides.length; a < i; a += 1) {
                        var s = e.slides.eq(a);
                        if ((s.attr("data-hash") || s.attr("data-history")) === t && !s.hasClass(e.params.slideDuplicateClass)) {
                            var r = s.index();
                            e.slideTo(r, 0, e.params.runCallbacksOnInit, !0)
                        }
                    }
                e.params.hashNavigation.watchState && L(J).on("hashchange", e.hashNavigation.onHashCange)
            }
        },
        destroy: function() {
            this.params.hashNavigation.watchState && L(J).off("hashchange", this.hashNavigation.onHashCange)
        }
    }
        , W = {
        run: function() {
            var e = this
                , t = e.slides.eq(e.activeIndex)
                , a = e.params.autoplay.delay;
            t.attr("data-swiper-autoplay") && (a = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
                e.autoplay.timeout = ee.nextTick(function() {
                    e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(),
                        e.slidePrev(e.params.speed, !0, !0),
                        e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0),
                        e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0),
                        e.emit("autoplay")) : e.params.loop ? (e.loopFix(),
                        e.slideNext(e.params.speed, !0, !0),
                        e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0),
                        e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0),
                        e.emit("autoplay"))
                }, a)
        },
        start: function() {
            var e = this;
            return void 0 === e.autoplay.timeout && (!e.autoplay.running && (e.autoplay.running = !0,
                e.emit("autoplayStart"),
                e.autoplay.run(),
                !0))
        },
        stop: function() {
            var e = this;
            return !!e.autoplay.running && (void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout),
                e.autoplay.timeout = void 0),
                e.autoplay.running = !1,
                e.emit("autoplayStop"),
                !0))
        },
        pause: function(e) {
            var t = this;
            t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
                t.autoplay.paused = !0,
                0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd),
                    t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1,
                    t.autoplay.run())))
        }
    }
        , j = {
        setTranslate: function() {
            for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) {
                var i = e.slides.eq(a)
                    , s = -i[0].swiperSlideOffset;
                e.params.virtualTranslate || (s -= e.translate);
                var r = 0;
                e.isHorizontal() || (r = s,
                    s = 0);
                var n = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                i.css({
                    opacity: n
                }).transform("translate3d(" + s + "px, " + r + "px, 0px)")
            }
        },
        setTransition: function(e) {
            var a = this
                , t = a.slides
                , i = a.$wrapperEl;
            if (t.transition(e),
            a.params.virtualTranslate && 0 !== e) {
                var s = !1;
                t.transitionEnd(function() {
                    if (!s && a && !a.destroyed) {
                        s = !0,
                            a.animating = !1;
                        for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1)
                            i.trigger(e[t])
                    }
                })
            }
        }
    }
        , U = {
        setTranslate: function() {
            var e, t = this, a = t.$el, i = t.$wrapperEl, s = t.slides, r = t.width, n = t.height, o = t.rtlTranslate, l = t.size, d = t.params.cubeEffect, p = t.isHorizontal(), c = t.virtual && t.params.virtual.enabled, u = 0;
            d.shadow && (p ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = L('<div class="swiper-cube-shadow"></div>'),
                i.append(e)),
                e.css({
                    height: r + "px"
                })) : 0 === (e = a.find(".swiper-cube-shadow")).length && (e = L('<div class="swiper-cube-shadow"></div>'),
                a.append(e)));
            for (var h = 0; h < s.length; h += 1) {
                var v = s.eq(h)
                    , f = h;
                c && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
                var m = 90 * f
                    , g = Math.floor(m / 360);
                o && (m = -m,
                    g = Math.floor(-m / 360));
                var b = Math.max(Math.min(v[0].progress, 1), -1)
                    , w = 0
                    , y = 0
                    , x = 0;
                f % 4 == 0 ? (w = 4 * -g * l,
                    x = 0) : (f - 1) % 4 == 0 ? (w = 0,
                    x = 4 * -g * l) : (f - 2) % 4 == 0 ? (w = l + 4 * g * l,
                    x = l) : (f - 3) % 4 == 0 && (w = -l,
                    x = 3 * l + 4 * l * g),
                o && (w = -w),
                p || (y = w,
                    w = 0);
                var T = "rotateX(" + (p ? 0 : -m) + "deg) rotateY(" + (p ? m : 0) + "deg) translate3d(" + w + "px, " + y + "px, " + x + "px)";
                if (b <= 1 && -1 < b && (u = 90 * f + 90 * b,
                o && (u = 90 * -f - 90 * b)),
                    v.transform(T),
                    d.slideShadows) {
                    var E = p ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top")
                        , S = p ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
                    0 === E.length && (E = L('<div class="swiper-slide-shadow-' + (p ? "left" : "top") + '"></div>'),
                        v.append(E)),
                    0 === S.length && (S = L('<div class="swiper-slide-shadow-' + (p ? "right" : "bottom") + '"></div>'),
                        v.append(S)),
                    E.length && (E[0].style.opacity = Math.max(-b, 0)),
                    S.length && (S[0].style.opacity = Math.max(b, 0))
                }
            }
            if (i.css({
                "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
                "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
                "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
                "transform-origin": "50% 50% -" + l / 2 + "px"
            }),
                d.shadow)
                if (p)
                    e.transform("translate3d(0px, " + (r / 2 + d.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");
                else {
                    var C = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90)
                        , M = 1.5 - (Math.sin(2 * C * Math.PI / 360) / 2 + Math.cos(2 * C * Math.PI / 360) / 2)
                        , z = d.shadowScale
                        , P = d.shadowScale / M
                        , k = d.shadowOffset;
                    e.transform("scale3d(" + z + ", 1, " + P + ") translate3d(0px, " + (n / 2 + k) + "px, " + -n / 2 / P + "px) rotateX(-90deg)")
                }
            var $ = I.isSafari || I.isUiWebView ? -l / 2 : 0;
            i.transform("translate3d(0px,0," + $ + "px) rotateX(" + (t.isHorizontal() ? 0 : u) + "deg) rotateY(" + (t.isHorizontal() ? -u : 0) + "deg)")
        },
        setTransition: function(e) {
            var t = this.$el;
            this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
            this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
        }
    }
        , K = {
        setTranslate: function() {
            for (var e = this, t = e.slides, a = e.rtlTranslate, i = 0; i < t.length; i += 1) {
                var s = t.eq(i)
                    , r = s[0].progress;
                e.params.flipEffect.limitRotation && (r = Math.max(Math.min(s[0].progress, 1), -1));
                var n = -180 * r
                    , o = 0
                    , l = -s[0].swiperSlideOffset
                    , d = 0;
                if (e.isHorizontal() ? a && (n = -n) : (d = l,
                    o = -n,
                    n = l = 0),
                    s[0].style.zIndex = -Math.abs(Math.round(r)) + t.length,
                    e.params.flipEffect.slideShadows) {
                    var p = e.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top")
                        , c = e.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
                    0 === p.length && (p = L('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "left" : "top") + '"></div>'),
                        s.append(p)),
                    0 === c.length && (c = L('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "right" : "bottom") + '"></div>'),
                        s.append(c)),
                    p.length && (p[0].style.opacity = Math.max(-r, 0)),
                    c.length && (c[0].style.opacity = Math.max(r, 0))
                }
                s.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)")
            }
        },
        setTransition: function(e) {
            var a = this
                , t = a.slides
                , i = a.activeIndex
                , s = a.$wrapperEl;
            if (t.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
            a.params.virtualTranslate && 0 !== e) {
                var r = !1;
                t.eq(i).transitionEnd(function() {
                    if (!r && a && !a.destroyed) {
                        r = !0,
                            a.animating = !1;
                        for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1)
                            s.trigger(e[t])
                    }
                })
            }
        }
    }
        , _ = {
        setTranslate: function() {
            for (var e = this, t = e.width, a = e.height, i = e.slides, s = e.$wrapperEl, r = e.slidesSizesGrid, n = e.params.coverflowEffect, o = e.isHorizontal(), l = e.translate, d = o ? t / 2 - l : a / 2 - l, p = o ? n.rotate : -n.rotate, c = n.depth, u = 0, h = i.length; u < h; u += 1) {
                var v = i.eq(u)
                    , f = r[u]
                    , m = (d - v[0].swiperSlideOffset - f / 2) / f * n.modifier
                    , g = o ? p * m : 0
                    , b = o ? 0 : p * m
                    , w = -c * Math.abs(m)
                    , y = o ? 0 : n.stretch * m
                    , x = o ? n.stretch * m : 0;
                Math.abs(x) < .001 && (x = 0),
                Math.abs(y) < .001 && (y = 0),
                Math.abs(w) < .001 && (w = 0),
                Math.abs(g) < .001 && (g = 0),
                Math.abs(b) < .001 && (b = 0);
                var T = "translate3d(" + x + "px," + y + "px," + w + "px)  rotateX(" + b + "deg) rotateY(" + g + "deg)";
                if (v.transform(T),
                    v[0].style.zIndex = 1 - Math.abs(Math.round(m)),
                    n.slideShadows) {
                    var E = o ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top")
                        , S = o ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
                    0 === E.length && (E = L('<div class="swiper-slide-shadow-' + (o ? "left" : "top") + '"></div>'),
                        v.append(E)),
                    0 === S.length && (S = L('<div class="swiper-slide-shadow-' + (o ? "right" : "bottom") + '"></div>'),
                        v.append(S)),
                    E.length && (E[0].style.opacity = 0 < m ? m : 0),
                    S.length && (S[0].style.opacity = 0 < -m ? -m : 0)
                }
            }
            (te.pointerEvents || te.prefixedPointerEvents) && (s[0].style.perspectiveOrigin = d + "px 50%")
        },
        setTransition: function(e) {
            this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
        }
    }
        , Z = {
        init: function() {
            var e = this
                , t = e.params.thumbs
                , a = e.constructor;
            t.swiper instanceof a ? (e.thumbs.swiper = t.swiper,
                ee.extend(e.thumbs.swiper.originalParams, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }),
                ee.extend(e.thumbs.swiper.params, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                })) : ee.isObject(t.swiper) && (e.thumbs.swiper = new a(ee.extend({}, t.swiper, {
                watchSlidesVisibility: !0,
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            })),
                e.thumbs.swiperCreated = !0),
                e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),
                e.thumbs.swiper.on("tap", e.thumbs.onThumbClick)
        },
        onThumbClick: function() {
            var e = this
                , t = e.thumbs.swiper;
            if (t) {
                var a = t.clickedIndex
                    , i = t.clickedSlide;
                if (!(i && L(i).hasClass(e.params.thumbs.slideThumbActiveClass) || null == a)) {
                    var s;
                    if (s = t.params.loop ? parseInt(L(t.clickedSlide).attr("data-swiper-slide-index"), 10) : a,
                        e.params.loop) {
                        var r = e.activeIndex;
                        e.slides.eq(r).hasClass(e.params.slideDuplicateClass) && (e.loopFix(),
                            e._clientLeft = e.$wrapperEl[0].clientLeft,
                            r = e.activeIndex);
                        var n = e.slides.eq(r).prevAll('[data-swiper-slide-index="' + s + '"]').eq(0).index()
                            , o = e.slides.eq(r).nextAll('[data-swiper-slide-index="' + s + '"]').eq(0).index();
                        s = void 0 === n ? o : void 0 === o ? n : o - r < r - n ? o : n
                    }
                    e.slideTo(s)
                }
            }
        },
        update: function(e) {
            var t = this
                , a = t.thumbs.swiper;
            if (a) {
                var i = "auto" === a.params.slidesPerView ? a.slidesPerViewDynamic() : a.params.slidesPerView;
                if (t.realIndex !== a.realIndex) {
                    var s, r = a.activeIndex;
                    if (a.params.loop) {
                        a.slides.eq(r).hasClass(a.params.slideDuplicateClass) && (a.loopFix(),
                            a._clientLeft = a.$wrapperEl[0].clientLeft,
                            r = a.activeIndex);
                        var n = a.slides.eq(r).prevAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index()
                            , o = a.slides.eq(r).nextAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index();
                        s = void 0 === n ? o : void 0 === o ? n : o - r == r - n ? r : o - r < r - n ? o : n
                    } else
                        s = t.realIndex;
                    a.visibleSlidesIndexes.indexOf(s) < 0 && (a.params.centeredSlides ? s = r < s ? s - Math.floor(i / 2) + 1 : s + Math.floor(i / 2) - 1 : r < s && (s = s - i + 1),
                        a.slideTo(s, e ? 0 : void 0))
                }
                var l = 1
                    , d = t.params.thumbs.slideThumbActiveClass;
                if (1 < t.params.slidesPerView && !t.params.centeredSlides && (l = t.params.slidesPerView),
                    a.slides.removeClass(d),
                    a.params.loop)
                    for (var p = 0; p < l; p += 1)
                        a.$wrapperEl.children('[data-swiper-slide-index="' + (t.realIndex + p) + '"]').addClass(d);
                else
                    for (var c = 0; c < l; c += 1)
                        a.slides.eq(t.realIndex + c).addClass(d)
            }
        }
    }
        , Q = [E, S, C, M, P, $, O, {
        name: "mousewheel",
        params: {
            mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarged: "container"
            }
        },
        create: function() {
            var e = this;
            ee.extend(e, {
                mousewheel: {
                    enabled: !1,
                    enable: A.enable.bind(e),
                    disable: A.disable.bind(e),
                    handle: A.handle.bind(e),
                    handleMouseEnter: A.handleMouseEnter.bind(e),
                    handleMouseLeave: A.handleMouseLeave.bind(e),
                    lastScrollTime: ee.now()
                }
            })
        },
        on: {
            init: function() {
                this.params.mousewheel.enabled && this.mousewheel.enable()
            },
            destroy: function() {
                this.mousewheel.enabled && this.mousewheel.disable()
            }
        }
    }, {
        name: "navigation",
        params: {
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock"
            }
        },
        create: function() {
            var e = this;
            ee.extend(e, {
                navigation: {
                    init: H.init.bind(e),
                    update: H.update.bind(e),
                    destroy: H.destroy.bind(e),
                    onNextClick: H.onNextClick.bind(e),
                    onPrevClick: H.onPrevClick.bind(e)
                }
            })
        },
        on: {
            init: function() {
                this.navigation.init(),
                    this.navigation.update()
            },
            toEdge: function() {
                this.navigation.update()
            },
            fromEdge: function() {
                this.navigation.update()
            },
            destroy: function() {
                this.navigation.destroy()
            },
            click: function(e) {
                var t, a = this, i = a.navigation, s = i.$nextEl, r = i.$prevEl;
                !a.params.navigation.hideOnClick || L(e.target).is(r) || L(e.target).is(s) || (s ? t = s.hasClass(a.params.navigation.hiddenClass) : r && (t = r.hasClass(a.params.navigation.hiddenClass)),
                    !0 === t ? a.emit("navigationShow", a) : a.emit("navigationHide", a),
                s && s.toggleClass(a.params.navigation.hiddenClass),
                r && r.toggleClass(a.params.navigation.hiddenClass))
            }
        }
    }, {
        name: "pagination",
        params: {
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: function(e) {
                    return e
                },
                formatFractionTotal: function(e) {
                    return e
                },
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                modifierClass: "swiper-pagination-",
                currentClass: "swiper-pagination-current",
                totalClass: "swiper-pagination-total",
                hiddenClass: "swiper-pagination-hidden",
                progressbarFillClass: "swiper-pagination-progressbar-fill",
                progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                clickableClass: "swiper-pagination-clickable",
                lockClass: "swiper-pagination-lock"
            }
        },
        create: function() {
            var e = this;
            ee.extend(e, {
                pagination: {
                    init: N.init.bind(e),
                    render: N.render.bind(e),
                    update: N.update.bind(e),
                    destroy: N.destroy.bind(e),
                    dynamicBulletIndex: 0
                }
            })
        },
        on: {
            init: function() {
                this.pagination.init(),
                    this.pagination.render(),
                    this.pagination.update()
            },
            activeIndexChange: function() {
                this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update()
            },
            snapIndexChange: function() {
                this.params.loop || this.pagination.update()
            },
            slidesLengthChange: function() {
                this.params.loop && (this.pagination.render(),
                    this.pagination.update())
            },
            snapGridLengthChange: function() {
                this.params.loop || (this.pagination.render(),
                    this.pagination.update())
            },
            destroy: function() {
                this.pagination.destroy()
            },
            click: function(e) {
                var t = this;
                t.params.pagination.el && t.params.pagination.hideOnClick && 0 < t.pagination.$el.length && !L(e.target).hasClass(t.params.pagination.bulletClass) && (!0 === t.pagination.$el.hasClass(t.params.pagination.hiddenClass) ? t.emit("paginationShow", t) : t.emit("paginationHide", t),
                    t.pagination.$el.toggleClass(t.params.pagination.hiddenClass))
            }
        }
    }, {
        name: "scrollbar",
        params: {
            scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag"
            }
        },
        create: function() {
            var e = this;
            ee.extend(e, {
                scrollbar: {
                    init: G.init.bind(e),
                    destroy: G.destroy.bind(e),
                    updateSize: G.updateSize.bind(e),
                    setTranslate: G.setTranslate.bind(e),
                    setTransition: G.setTransition.bind(e),
                    enableDraggable: G.enableDraggable.bind(e),
                    disableDraggable: G.disableDraggable.bind(e),
                    setDragPosition: G.setDragPosition.bind(e),
                    onDragStart: G.onDragStart.bind(e),
                    onDragMove: G.onDragMove.bind(e),
                    onDragEnd: G.onDragEnd.bind(e),
                    isTouched: !1,
                    timeout: null,
                    dragTimeout: null
                }
            })
        },
        on: {
            init: function() {
                this.scrollbar.init(),
                    this.scrollbar.updateSize(),
                    this.scrollbar.setTranslate()
            },
            update: function() {
                this.scrollbar.updateSize()
            },
            resize: function() {
                this.scrollbar.updateSize()
            },
            observerUpdate: function() {
                this.scrollbar.updateSize()
            },
            setTranslate: function() {
                this.scrollbar.setTranslate()
            },
            setTransition: function(e) {
                this.scrollbar.setTransition(e)
            },
            destroy: function() {
                this.scrollbar.destroy()
            }
        }
    }, {
        name: "parallax",
        params: {
            parallax: {
                enabled: !1
            }
        },
        create: function() {
            ee.extend(this, {
                parallax: {
                    setTransform: B.setTransform.bind(this),
                    setTranslate: B.setTranslate.bind(this),
                    setTransition: B.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                this.params.parallax.enabled && (this.params.watchSlidesProgress = !0,
                    this.originalParams.watchSlidesProgress = !0)
            },
            init: function() {
                this.params.parallax.enabled && this.parallax.setTranslate()
            },
            setTranslate: function() {
                this.params.parallax.enabled && this.parallax.setTranslate()
            },
            setTransition: function(e) {
                this.params.parallax.enabled && this.parallax.setTransition(e)
            }
        }
    }, {
        name: "zoom",
        params: {
            zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed"
            }
        },
        create: function() {
            var i = this
                , t = {
                enabled: !1,
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                    $slideEl: void 0,
                    slideWidth: void 0,
                    slideHeight: void 0,
                    $imageEl: void 0,
                    $imageWrapEl: void 0,
                    maxRatio: 3
                },
                image: {
                    isTouched: void 0,
                    isMoved: void 0,
                    currentX: void 0,
                    currentY: void 0,
                    minX: void 0,
                    minY: void 0,
                    maxX: void 0,
                    maxY: void 0,
                    width: void 0,
                    height: void 0,
                    startX: void 0,
                    startY: void 0,
                    touchesStart: {},
                    touchesCurrent: {}
                },
                velocity: {
                    x: void 0,
                    y: void 0,
                    prevPositionX: void 0,
                    prevPositionY: void 0,
                    prevTime: void 0
                }
            };
            "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(e) {
                t[e] = X[e].bind(i)
            }),
                ee.extend(i, {
                    zoom: t
                });
            var s = 1;
            Object.defineProperty(i.zoom, "scale", {
                get: function() {
                    return s
                },
                set: function(e) {
                    if (s !== e) {
                        var t = i.zoom.gesture.$imageEl ? i.zoom.gesture.$imageEl[0] : void 0
                            , a = i.zoom.gesture.$slideEl ? i.zoom.gesture.$slideEl[0] : void 0;
                        i.emit("zoomChange", e, t, a)
                    }
                    s = e
                }
            })
        },
        on: {
            init: function() {
                this.params.zoom.enabled && this.zoom.enable()
            },
            destroy: function() {
                this.zoom.disable()
            },
            touchStart: function(e) {
                this.zoom.enabled && this.zoom.onTouchStart(e)
            },
            touchEnd: function(e) {
                this.zoom.enabled && this.zoom.onTouchEnd(e)
            },
            doubleTap: function(e) {
                this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
            },
            transitionEnd: function() {
                this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
            }
        }
    }, {
        name: "lazy",
        params: {
            lazy: {
                enabled: !1,
                loadPrevNext: !1,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: !1,
                elementClass: "swiper-lazy",
                loadingClass: "swiper-lazy-loading",
                loadedClass: "swiper-lazy-loaded",
                preloaderClass: "swiper-lazy-preloader"
            }
        },
        create: function() {
            ee.extend(this, {
                lazy: {
                    initialImageLoaded: !1,
                    load: Y.load.bind(this),
                    loadInSlide: Y.loadInSlide.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
            },
            init: function() {
                this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
            },
            scroll: function() {
                this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
            },
            resize: function() {
                this.params.lazy.enabled && this.lazy.load()
            },
            scrollbarDragMove: function() {
                this.params.lazy.enabled && this.lazy.load()
            },
            transitionStart: function() {
                var e = this;
                e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load()
            },
            transitionEnd: function() {
                this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
            }
        }
    }, {
        name: "controller",
        params: {
            controller: {
                control: void 0,
                inverse: !1,
                by: "slide"
            }
        },
        create: function() {
            var e = this;
            ee.extend(e, {
                controller: {
                    control: e.params.controller.control,
                    getInterpolateFunction: V.getInterpolateFunction.bind(e),
                    setTranslate: V.setTranslate.bind(e),
                    setTransition: V.setTransition.bind(e)
                }
            })
        },
        on: {
            update: function() {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0,
                    delete this.controller.spline)
            },
            resize: function() {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0,
                    delete this.controller.spline)
            },
            observerUpdate: function() {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0,
                    delete this.controller.spline)
            },
            setTranslate: function(e, t) {
                this.controller.control && this.controller.setTranslate(e, t)
            },
            setTransition: function(e, t) {
                this.controller.control && this.controller.setTransition(e, t)
            }
        }
    }, {
        name: "a11y",
        params: {
            a11y: {
                enabled: !0,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}"
            }
        },
        create: function() {
            var t = this;
            ee.extend(t, {
                a11y: {
                    liveRegion: L('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                }
            }),
                Object.keys(F).forEach(function(e) {
                    t.a11y[e] = F[e].bind(t)
                })
        },
        on: {
            init: function() {
                this.params.a11y.enabled && (this.a11y.init(),
                    this.a11y.updateNavigation())
            },
            toEdge: function() {
                this.params.a11y.enabled && this.a11y.updateNavigation()
            },
            fromEdge: function() {
                this.params.a11y.enabled && this.a11y.updateNavigation()
            },
            paginationUpdate: function() {
                this.params.a11y.enabled && this.a11y.updatePagination()
            },
            destroy: function() {
                this.params.a11y.enabled && this.a11y.destroy()
            }
        }
    }, {
        name: "history",
        params: {
            history: {
                enabled: !1,
                replaceState: !1,
                key: "slides"
            }
        },
        create: function() {
            var e = this;
            ee.extend(e, {
                history: {
                    init: R.init.bind(e),
                    setHistory: R.setHistory.bind(e),
                    setHistoryPopState: R.setHistoryPopState.bind(e),
                    scrollToSlide: R.scrollToSlide.bind(e),
                    destroy: R.destroy.bind(e)
                }
            })
        },
        on: {
            init: function() {
                this.params.history.enabled && this.history.init()
            },
            destroy: function() {
                this.params.history.enabled && this.history.destroy()
            },
            transitionEnd: function() {
                this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
            }
        }
    }, {
        name: "hash-navigation",
        params: {
            hashNavigation: {
                enabled: !1,
                replaceState: !1,
                watchState: !1
            }
        },
        create: function() {
            var e = this;
            ee.extend(e, {
                hashNavigation: {
                    initialized: !1,
                    init: q.init.bind(e),
                    destroy: q.destroy.bind(e),
                    setHash: q.setHash.bind(e),
                    onHashCange: q.onHashCange.bind(e)
                }
            })
        },
        on: {
            init: function() {
                this.params.hashNavigation.enabled && this.hashNavigation.init()
            },
            destroy: function() {
                this.params.hashNavigation.enabled && this.hashNavigation.destroy()
            },
            transitionEnd: function() {
                this.hashNavigation.initialized && this.hashNavigation.setHash()
            }
        }
    }, {
        name: "autoplay",
        params: {
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1
            }
        },
        create: function() {
            var t = this;
            ee.extend(t, {
                autoplay: {
                    running: !1,
                    paused: !1,
                    run: W.run.bind(t),
                    start: W.start.bind(t),
                    stop: W.stop.bind(t),
                    pause: W.pause.bind(t),
                    onTransitionEnd: function(e) {
                        t && !t.destroyed && t.$wrapperEl && e.target === this && (t.$wrapperEl[0].removeEventListener("transitionend", t.autoplay.onTransitionEnd),
                            t.$wrapperEl[0].removeEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd),
                            t.autoplay.paused = !1,
                            t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
                    }
                }
            })
        },
        on: {
            init: function() {
                this.params.autoplay.enabled && this.autoplay.start()
            },
            beforeTransitionStart: function(e, t) {
                this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
            },
            sliderFirstMove: function() {
                this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
            },
            destroy: function() {
                this.autoplay.running && this.autoplay.stop()
            }
        }
    }, {
        name: "effect-fade",
        params: {
            fadeEffect: {
                crossFade: !1
            }
        },
        create: function() {
            ee.extend(this, {
                fadeEffect: {
                    setTranslate: j.setTranslate.bind(this),
                    setTransition: j.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                var e = this;
                if ("fade" === e.params.effect) {
                    e.classNames.push(e.params.containerModifierClass + "fade");
                    var t = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !0
                    };
                    ee.extend(e.params, t),
                        ee.extend(e.originalParams, t)
                }
            },
            setTranslate: function() {
                "fade" === this.params.effect && this.fadeEffect.setTranslate()
            },
            setTransition: function(e) {
                "fade" === this.params.effect && this.fadeEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-cube",
        params: {
            cubeEffect: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: .94
            }
        },
        create: function() {
            ee.extend(this, {
                cubeEffect: {
                    setTranslate: U.setTranslate.bind(this),
                    setTransition: U.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                var e = this;
                if ("cube" === e.params.effect) {
                    e.classNames.push(e.params.containerModifierClass + "cube"),
                        e.classNames.push(e.params.containerModifierClass + "3d");
                    var t = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        resistanceRatio: 0,
                        spaceBetween: 0,
                        centeredSlides: !1,
                        virtualTranslate: !0
                    };
                    ee.extend(e.params, t),
                        ee.extend(e.originalParams, t)
                }
            },
            setTranslate: function() {
                "cube" === this.params.effect && this.cubeEffect.setTranslate()
            },
            setTransition: function(e) {
                "cube" === this.params.effect && this.cubeEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-flip",
        params: {
            flipEffect: {
                slideShadows: !0,
                limitRotation: !0
            }
        },
        create: function() {
            ee.extend(this, {
                flipEffect: {
                    setTranslate: K.setTranslate.bind(this),
                    setTransition: K.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                var e = this;
                if ("flip" === e.params.effect) {
                    e.classNames.push(e.params.containerModifierClass + "flip"),
                        e.classNames.push(e.params.containerModifierClass + "3d");
                    var t = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !0
                    };
                    ee.extend(e.params, t),
                        ee.extend(e.originalParams, t)
                }
            },
            setTranslate: function() {
                "flip" === this.params.effect && this.flipEffect.setTranslate()
            },
            setTransition: function(e) {
                "flip" === this.params.effect && this.flipEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-coverflow",
        params: {
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: !0
            }
        },
        create: function() {
            ee.extend(this, {
                coverflowEffect: {
                    setTranslate: _.setTranslate.bind(this),
                    setTransition: _.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                var e = this;
                "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"),
                    e.classNames.push(e.params.containerModifierClass + "3d"),
                    e.params.watchSlidesProgress = !0,
                    e.originalParams.watchSlidesProgress = !0)
            },
            setTranslate: function() {
                "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
            },
            setTransition: function(e) {
                "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
            }
        }
    }, {
        name: "thumbs",
        params: {
            thumbs: {
                swiper: null,
                slideThumbActiveClass: "swiper-slide-thumb-active",
                thumbsContainerClass: "swiper-container-thumbs"
            }
        },
        create: function() {
            ee.extend(this, {
                thumbs: {
                    swiper: null,
                    init: Z.init.bind(this),
                    update: Z.update.bind(this),
                    onThumbClick: Z.onThumbClick.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                var e = this.params.thumbs;
                e && e.swiper && (this.thumbs.init(),
                    this.thumbs.update(!0))
            },
            slideChange: function() {
                this.thumbs.swiper && this.thumbs.update()
            },
            update: function() {
                this.thumbs.swiper && this.thumbs.update()
            },
            resize: function() {
                this.thumbs.swiper && this.thumbs.update()
            },
            observerUpdate: function() {
                this.thumbs.swiper && this.thumbs.update()
            },
            setTransition: function(e) {
                var t = this.thumbs.swiper;
                t && t.setTransition(e)
            },
            beforeDestroy: function() {
                var e = this.thumbs.swiper;
                e && this.thumbs.swiperCreated && e && e.destroy()
            }
        }
    }];
    return void 0 === T.use && (T.use = T.Class.use,
        T.installModule = T.Class.installModule),
        T.use(Q),
        T
});
(function(window, document, $, undefined) {
        "use strict";
        window.console = window.console || {
            info: function(stuff) {}
        };
        if (!$) {
            return
        }
        if ($.fn.fancybox) {
            console.info("fancyBox already initialized");
            return
        }
        var defaults = {
            closeExisting: false,
            loop: false,
            gutter: 50,
            keyboard: true,
            preventCaptionOverlap: true,
            arrows: true,
            infobar: true,
            smallBtn: "auto",
            toolbar: "auto",
            buttons: ["zoom", "slideShow", "thumbs", "close"],
            idleTime: 3,
            protect: false,
            modal: false,
            image: {
                preload: false
            },
            ajax: {
                settings: {
                    data: {
                        fancybox: true
                    }
                }
            },
            iframe: {
                tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
                preload: true,
                css: {},
                attr: {
                    scrolling: "auto"
                }
            },
            video: {
                tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}">' + '<source src="{{src}}" type="{{format}}" />' + 'Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!' + "</video>",
                format: "",
                autoStart: true
            },
            defaultType: "image",
            animationEffect: "zoom",
            animationDuration: 366,
            zoomOpacity: "auto",
            transitionEffect: "fade",
            transitionDuration: 366,
            slideClass: "",
            baseClass: "",
            baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1">' + '<div class="fancybox-bg"></div>' + '<div class="fancybox-inner">' + '<div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div>' + '<div class="fancybox-toolbar">{{buttons}}</div>' + '<div class="fancybox-navigation">{{arrows}}</div>' + '<div class="fancybox-stage"></div>' + '<div class="fancybox-caption"><div class="fancybox-caption__body"></div></div>' + "</div>" + "</div>",
            spinnerTpl: '<div class="fancybox-loading"></div>',
            errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
            btnTpl: {
                download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;">' + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg>' + "</a>",
                zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}">' + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg>' + "</button>",
                close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg>' + "</button>",
                arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' + '<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div>' + "</button>",
                arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' + '<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div>' + "</button>",
                smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}">' + '<svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg>' + "</button>"
            },
            parentEl: "body",
            hideScrollbar: true,
            autoFocus: true,
            backFocus: true,
            trapFocus: true,
            fullScreen: {
                autoStart: false
            },
            touch: {
                vertical: true,
                momentum: true
            },
            hash: null,
            media: {},
            slideShow: {
                autoStart: false,
                speed: 3e3
            },
            thumbs: {
                autoStart: false,
                hideOnClose: true,
                parentEl: ".fancybox-container",
                axis: "y"
            },
            wheel: "auto",
            onInit: $.noop,
            beforeLoad: $.noop,
            afterLoad: $.noop,
            beforeShow: $.noop,
            afterShow: $.noop,
            beforeClose: $.noop,
            afterClose: $.noop,
            onActivate: $.noop,
            onDeactivate: $.noop,
            clickContent: function(current, event) {
                return current.type === "image" ? "zoom" : false
            },
            clickSlide: "close",
            clickOutside: "close",
            dblclickContent: false,
            dblclickSlide: false,
            dblclickOutside: false,
            mobile: {
                preventCaptionOverlap: false,
                idleTime: false,
                clickContent: function(current, event) {
                    return current.type === "image" ? "toggleControls" : false
                },
                clickSlide: function(current, event) {
                    return current.type === "image" ? "toggleControls" : "close"
                },
                dblclickContent: function(current, event) {
                    return current.type === "image" ? "zoom" : false
                },
                dblclickSlide: function(current, event) {
                    return current.type === "image" ? "zoom" : false
                }
            },
            lang: "en",
            i18n: {
                en: {
                    CLOSE: "Close",
                    NEXT: "Next",
                    PREV: "Previous",
                    ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                    PLAY_START: "Start slideshow",
                    PLAY_STOP: "Pause slideshow",
                    FULL_SCREEN: "Full screen",
                    THUMBS: "Thumbnails",
                    DOWNLOAD: "Download",
                    SHARE: "Share",
                    ZOOM: "Zoom"
                },
                de: {
                    CLOSE: "Schlie&szlig;en",
                    NEXT: "Weiter",
                    PREV: "Zur&uuml;ck",
                    ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
                    PLAY_START: "Diaschau starten",
                    PLAY_STOP: "Diaschau beenden",
                    FULL_SCREEN: "Vollbild",
                    THUMBS: "Vorschaubilder",
                    DOWNLOAD: "Herunterladen",
                    SHARE: "Teilen",
                    ZOOM: "Vergr&ouml;&szlig;ern"
                }
            }
        };
        var $W = $(window);
        var $D = $(document);
        var called = 0;
        var isQuery = function(obj) {
            return obj && obj.hasOwnProperty && obj instanceof $
        };
        var requestAFrame = function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || function(callback) {
                return window.setTimeout(callback, 1e3 / 60)
            }
        }();
        var cancelAFrame = function() {
            return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || function(id) {
                window.clearTimeout(id)
            }
        }();
        var transitionEnd = function() {
            var el = document.createElement("fakeelement"), t;
            var transitions = {
                transition: "transitionend",
                OTransition: "oTransitionEnd",
                MozTransition: "transitionend",
                WebkitTransition: "webkitTransitionEnd"
            };
            for (t in transitions) {
                if (el.style[t] !== undefined) {
                    return transitions[t]
                }
            }
            return "transitionend"
        }();
        var forceRedraw = function($el) {
            return $el && $el.length && $el[0].offsetHeight
        };
        var mergeOpts = function(opts1, opts2) {
            var rez = $.extend(true, {}, opts1, opts2);
            $.each(opts2, function(key, value) {
                if ($.isArray(value)) {
                    rez[key] = value
                }
            });
            return rez
        };
        var inViewport = function(elem) {
            var elemCenter, rez;
            if (!elem || elem.ownerDocument !== document) {
                return false
            }
            $(".fancybox-container").css("pointer-events", "none");
            elemCenter = {
                x: elem.getBoundingClientRect().left + elem.offsetWidth / 2,
                y: elem.getBoundingClientRect().top + elem.offsetHeight / 2
            };
            rez = document.elementFromPoint(elemCenter.x, elemCenter.y) === elem;
            $(".fancybox-container").css("pointer-events", "");
            return rez
        };
        var FancyBox = function(content, opts, index) {
            var self = this;
            self.opts = mergeOpts({
                index: index
            }, $.fancybox.defaults);
            if ($.isPlainObject(opts)) {
                self.opts = mergeOpts(self.opts, opts)
            }
            if ($.fancybox.isMobile) {
                self.opts = mergeOpts(self.opts, self.opts.mobile)
            }
            self.id = self.opts.id || ++called;
            self.currIndex = parseInt(self.opts.index, 10) || 0;
            self.prevIndex = null;
            self.prevPos = null;
            self.currPos = 0;
            self.firstRun = true;
            self.group = [];
            self.slides = {};
            self.addContent(content);
            if (!self.group.length) {
                return
            }
            self.init()
        };
        $.extend(FancyBox.prototype, {
            init: function() {
                var self = this, firstItem = self.group[self.currIndex], firstItemOpts = firstItem.opts, $container, buttonStr;
                if (firstItemOpts.closeExisting) {
                    $.fancybox.close(true)
                }
                $("body").addClass("fancybox-active");
                if (!$.fancybox.getInstance() && firstItemOpts.hideScrollbar !== false && !$.fancybox.isMobile && document.body.scrollHeight > window.innerHeight) {
                    $("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' + (window.innerWidth - document.documentElement.clientWidth) + "px;}</style>");
                    $("body").addClass("compensate-for-scrollbar")
                }
                buttonStr = "";
                $.each(firstItemOpts.buttons, function(index, value) {
                    buttonStr += firstItemOpts.btnTpl[value] || ""
                });
                $container = $(self.translate(self, firstItemOpts.baseTpl.replace("{{buttons}}", buttonStr).replace("{{arrows}}", firstItemOpts.btnTpl.arrowLeft + firstItemOpts.btnTpl.arrowRight))).attr("id", "fancybox-container-" + self.id).addClass(firstItemOpts.baseClass).data("FancyBox", self).appendTo(firstItemOpts.parentEl);
                self.$refs = {
                    container: $container
                };
                ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function(item) {
                    self.$refs[item] = $container.find(".fancybox-" + item)
                });
                self.trigger("onInit");
                self.activate();
                self.jumpTo(self.currIndex)
            },
            translate: function(obj, str) {
                var arr = obj.opts.i18n[obj.opts.lang] || obj.opts.i18n.en;
                return str.replace(/\{\{(\w+)\}\}/g, function(match, n) {
                    return arr[n] === undefined ? match : arr[n]
                })
            },
            addContent: function(content) {
                var self = this, items = $.makeArray(content), thumbs;
                $.each(items, function(i, item) {
                    var obj = {}, opts = {}, $item, type, found, src, srcParts;
                    if ($.isPlainObject(item)) {
                        obj = item;
                        opts = item.opts || item
                    } else if ($.type(item) === "object" && $(item).length) {
                        $item = $(item);
                        opts = $item.data() || {};
                        opts = $.extend(true, {}, opts, opts.options);
                        opts.$orig = $item;
                        obj.src = self.opts.src || opts.src || $item.attr("href");
                        if (!obj.type && !obj.src) {
                            obj.type = "inline";
                            obj.src = item
                        }
                    } else {
                        obj = {
                            type: "html",
                            src: item + ""
                        }
                    }
                    obj.opts = $.extend(true, {}, self.opts, opts);
                    if ($.isArray(opts.buttons)) {
                        obj.opts.buttons = opts.buttons
                    }
                    if ($.fancybox.isMobile && obj.opts.mobile) {
                        obj.opts = mergeOpts(obj.opts, obj.opts.mobile)
                    }
                    type = obj.type || obj.opts.type;
                    src = obj.src || "";
                    if (!type && src) {
                        if (found = src.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) {
                            type = "video";
                            if (!obj.opts.video.format) {
                                obj.opts.video.format = "video/" + (found[1] === "ogv" ? "ogg" : found[1])
                            }
                        } else if (src.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)) {
                            type = "image"
                        } else if (src.match(/\.(pdf)((\?|#).*)?$/i)) {
                            type = "iframe";
                            obj = $.extend(true, obj, {
                                contentType: "pdf",
                                opts: {
                                    iframe: {
                                        preload: false
                                    }
                                }
                            })
                        } else if (src.charAt(0) === "#") {
                            type = "inline"
                        }
                    }
                    if (type) {
                        obj.type = type
                    } else {
                        self.trigger("objectNeedsType", obj)
                    }
                    if (!obj.contentType) {
                        obj.contentType = $.inArray(obj.type, ["html", "inline", "ajax"]) > -1 ? "html" : obj.type
                    }
                    obj.index = self.group.length;
                    if (obj.opts.smallBtn == "auto") {
                        obj.opts.smallBtn = $.inArray(obj.type, ["html", "inline", "ajax"]) > -1
                    }
                    if (obj.opts.toolbar === "auto") {
                        obj.opts.toolbar = !obj.opts.smallBtn
                    }
                    obj.$thumb = obj.opts.$thumb || null;
                    if (obj.opts.$trigger && obj.index === self.opts.index) {
                        obj.$thumb = obj.opts.$trigger.find("img:first");
                        if (obj.$thumb.length) {
                            obj.opts.$orig = obj.opts.$trigger
                        }
                    }
                    if (!(obj.$thumb && obj.$thumb.length) && obj.opts.$orig) {
                        obj.$thumb = obj.opts.$orig.find("img:first")
                    }
                    if (obj.$thumb && !obj.$thumb.length) {
                        obj.$thumb = null
                    }
                    obj.thumb = obj.opts.thumb || (obj.$thumb ? obj.$thumb[0].src : null);
                    if ($.type(obj.opts.caption) === "function") {
                        obj.opts.caption = obj.opts.caption.apply(item, [self, obj])
                    }
                    if ($.type(self.opts.caption) === "function") {
                        obj.opts.caption = self.opts.caption.apply(item, [self, obj])
                    }
                    if (!(obj.opts.caption instanceof $)) {
                        obj.opts.caption = obj.opts.caption === undefined ? "" : obj.opts.caption + ""
                    }
                    if (obj.type === "ajax") {
                        srcParts = src.split(/\s+/, 2);
                        if (srcParts.length > 1) {
                            obj.src = srcParts.shift();
                            obj.opts.filter = srcParts.shift()
                        }
                    }
                    if (obj.opts.modal) {
                        obj.opts = $.extend(true, obj.opts, {
                            trapFocus: true,
                            infobar: 0,
                            toolbar: 0,
                            smallBtn: 0,
                            keyboard: 0,
                            slideShow: 0,
                            fullScreen: 0,
                            thumbs: 0,
                            touch: 0,
                            clickContent: false,
                            clickSlide: false,
                            clickOutside: false,
                            dblclickContent: false,
                            dblclickSlide: false,
                            dblclickOutside: false
                        })
                    }
                    self.group.push(obj)
                });
                if (Object.keys(self.slides).length) {
                    self.updateControls();
                    thumbs = self.Thumbs;
                    if (thumbs && thumbs.isActive) {
                        thumbs.create();
                        thumbs.focus()
                    }
                }
            },
            addEvents: function() {
                var self = this;
                self.removeEvents();
                self.$refs.container.on("click.fb-close", "[data-fancybox-close]", function(e) {
                    e.stopPropagation();
                    e.preventDefault();
                    self.close(e)
                }).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function(e) {
                    e.stopPropagation();
                    e.preventDefault();
                    self.previous()
                }).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function(e) {
                    e.stopPropagation();
                    e.preventDefault();
                    self.next()
                }).on("click.fb", "[data-fancybox-zoom]", function(e) {
                    self[self.isScaledDown() ? "scaleToActual" : "scaleToFit"]()
                });
                $W.on("orientationchange.fb resize.fb", function(e) {
                    if (e && e.originalEvent && e.originalEvent.type === "resize") {
                        if (self.requestId) {
                            cancelAFrame(self.requestId)
                        }
                        self.requestId = requestAFrame(function() {
                            self.update(e)
                        })
                    } else {
                        if (self.current && self.current.type === "iframe") {
                            self.$refs.stage.hide()
                        }
                        setTimeout(function() {
                            self.$refs.stage.show();
                            self.update(e)
                        }, $.fancybox.isMobile ? 600 : 250)
                    }
                });
                $D.on("keydown.fb", function(e) {
                    var instance = $.fancybox ? $.fancybox.getInstance() : null
                        , current = instance.current
                        , keycode = e.keyCode || e.which;
                    if (keycode == 9) {
                        if (current.opts.trapFocus) {
                            self.focus(e)
                        }
                        return
                    }
                    if (!current.opts.keyboard || e.ctrlKey || e.altKey || e.shiftKey || $(e.target).is("input,textarea,video,audio,select")) {
                        return
                    }
                    if (keycode === 8 || keycode === 27) {
                        e.preventDefault();
                        self.close(e);
                        return
                    }
                    if (keycode === 37 || keycode === 38) {
                        e.preventDefault();
                        self.previous();
                        return
                    }
                    if (keycode === 39 || keycode === 40) {
                        e.preventDefault();
                        self.next();
                        return
                    }
                    self.trigger("afterKeydown", e, keycode)
                });
                if (self.group[self.currIndex].opts.idleTime) {
                    self.idleSecondsCounter = 0;
                    $D.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function(e) {
                        self.idleSecondsCounter = 0;
                        if (self.isIdle) {
                            self.showControls()
                        }
                        self.isIdle = false
                    });
                    self.idleInterval = window.setInterval(function() {
                        self.idleSecondsCounter++;
                        if (self.idleSecondsCounter >= self.group[self.currIndex].opts.idleTime && !self.isDragging) {
                            self.isIdle = true;
                            self.idleSecondsCounter = 0;
                            self.hideControls()
                        }
                    }, 1e3)
                }
            },
            removeEvents: function() {
                var self = this;
                $W.off("orientationchange.fb resize.fb");
                $D.off("keydown.fb .fb-idle");
                this.$refs.container.off(".fb-close .fb-prev .fb-next");
                if (self.idleInterval) {
                    window.clearInterval(self.idleInterval);
                    self.idleInterval = null
                }
            },
            previous: function(duration) {
                return this.jumpTo(this.currPos - 1, duration)
            },
            next: function(duration) {
                return this.jumpTo(this.currPos + 1, duration)
            },
            jumpTo: function(pos, duration) {
                var self = this, groupLen = self.group.length, firstRun, isMoved, loop, current, previous, slidePos, stagePos, prop, diff;
                if (self.isDragging || self.isClosing || self.isAnimating && self.firstRun) {
                    return
                }
                pos = parseInt(pos, 10);
                loop = self.current ? self.current.opts.loop : self.opts.loop;
                if (!loop && (pos < 0 || pos >= groupLen)) {
                    return false
                }
                firstRun = self.firstRun = !Object.keys(self.slides).length;
                previous = self.current;
                self.prevIndex = self.currIndex;
                self.prevPos = self.currPos;
                current = self.createSlide(pos);
                if (groupLen > 1) {
                    if (loop || current.index < groupLen - 1) {
                        self.createSlide(pos + 1)
                    }
                    if (loop || current.index > 0) {
                        self.createSlide(pos - 1)
                    }
                }
                self.current = current;
                self.currIndex = current.index;
                self.currPos = current.pos;
                self.trigger("beforeShow", firstRun);
                self.updateControls();
                current.forcedDuration = undefined;
                if ($.isNumeric(duration)) {
                    current.forcedDuration = duration
                } else {
                    duration = current.opts[firstRun ? "animationDuration" : "transitionDuration"]
                }
                duration = parseInt(duration, 10);
                isMoved = self.isMoved(current);
                current.$slide.addClass("fancybox-slide--current");
                if (firstRun) {
                    if (current.opts.animationEffect && duration) {
                        self.$refs.container.css("transition-duration", duration + "ms")
                    }
                    self.$refs.container.addClass("fancybox-is-open").trigger("focus");
                    self.loadSlide(current);
                    self.preload("image");
                    return
                }
                slidePos = $.fancybox.getTranslate(previous.$slide);
                stagePos = $.fancybox.getTranslate(self.$refs.stage);
                $.each(self.slides, function(index, slide) {
                    $.fancybox.stop(slide.$slide, true)
                });
                if (previous.pos !== current.pos) {
                    previous.isComplete = false
                }
                previous.$slide.removeClass("fancybox-slide--complete fancybox-slide--current");
                if (isMoved) {
                    diff = slidePos.left - (previous.pos * slidePos.width + previous.pos * previous.opts.gutter);
                    $.each(self.slides, function(index, slide) {
                        slide.$slide.removeClass("fancybox-animated").removeClass(function(index, className) {
                            return (className.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                        });
                        var leftPos = slide.pos * slidePos.width + slide.pos * slide.opts.gutter;
                        $.fancybox.setTranslate(slide.$slide, {
                            top: 0,
                            left: leftPos - stagePos.left + diff
                        });
                        if (slide.pos !== current.pos) {
                            slide.$slide.addClass("fancybox-slide--" + (slide.pos > current.pos ? "next" : "previous"))
                        }
                        forceRedraw(slide.$slide);
                        $.fancybox.animate(slide.$slide, {
                            top: 0,
                            left: (slide.pos - current.pos) * slidePos.width + (slide.pos - current.pos) * slide.opts.gutter
                        }, duration, function() {
                            slide.$slide.css({
                                transform: "",
                                opacity: ""
                            }).removeClass("fancybox-slide--next fancybox-slide--previous");
                            if (slide.pos === self.currPos) {
                                self.complete()
                            }
                        })
                    })
                } else if (duration && current.opts.transitionEffect) {
                    prop = "fancybox-animated fancybox-fx-" + current.opts.transitionEffect;
                    previous.$slide.addClass("fancybox-slide--" + (previous.pos > current.pos ? "next" : "previous"));
                    $.fancybox.animate(previous.$slide, prop, duration, function() {
                        previous.$slide.removeClass(prop).removeClass("fancybox-slide--next fancybox-slide--previous")
                    }, false)
                }
                if (current.isLoaded) {
                    self.revealContent(current)
                } else {
                    self.loadSlide(current)
                }
                self.preload("image")
            },
            createSlide: function(pos) {
                var self = this, $slide, index;
                index = pos % self.group.length;
                index = index < 0 ? self.group.length + index : index;
                if (!self.slides[pos] && self.group[index]) {
                    $slide = $('<div class="fancybox-slide"></div>').appendTo(self.$refs.stage);
                    self.slides[pos] = $.extend(true, {}, self.group[index], {
                        pos: pos,
                        $slide: $slide,
                        isLoaded: false
                    });
                    self.updateSlide(self.slides[pos])
                }
                return self.slides[pos]
            },
            scaleToActual: function(x, y, duration) {
                var self = this, current = self.current, $content = current.$content, canvasWidth = $.fancybox.getTranslate(current.$slide).width, canvasHeight = $.fancybox.getTranslate(current.$slide).height, newImgWidth = current.width, newImgHeight = current.height, imgPos, posX, posY, scaleX, scaleY;
                if (self.isAnimating || self.isMoved() || !$content || !(current.type == "image" && current.isLoaded && !current.hasError)) {
                    return
                }
                self.isAnimating = true;
                $.fancybox.stop($content);
                x = x === undefined ? canvasWidth * .5 : x;
                y = y === undefined ? canvasHeight * .5 : y;
                imgPos = $.fancybox.getTranslate($content);
                imgPos.top -= $.fancybox.getTranslate(current.$slide).top;
                imgPos.left -= $.fancybox.getTranslate(current.$slide).left;
                scaleX = newImgWidth / imgPos.width;
                scaleY = newImgHeight / imgPos.height;
                posX = canvasWidth * .5 - newImgWidth * .5;
                posY = canvasHeight * .5 - newImgHeight * .5;
                if (newImgWidth > canvasWidth) {
                    posX = imgPos.left * scaleX - (x * scaleX - x);
                    if (posX > 0) {
                        posX = 0
                    }
                    if (posX < canvasWidth - newImgWidth) {
                        posX = canvasWidth - newImgWidth
                    }
                }
                if (newImgHeight > canvasHeight) {
                    posY = imgPos.top * scaleY - (y * scaleY - y);
                    if (posY > 0) {
                        posY = 0
                    }
                    if (posY < canvasHeight - newImgHeight) {
                        posY = canvasHeight - newImgHeight
                    }
                }
                self.updateCursor(newImgWidth, newImgHeight);
                $.fancybox.animate($content, {
                    top: posY,
                    left: posX,
                    scaleX: scaleX,
                    scaleY: scaleY
                }, duration || 366, function() {
                    self.isAnimating = false
                });
                if (self.SlideShow && self.SlideShow.isActive) {
                    self.SlideShow.stop()
                }
            },
            scaleToFit: function(duration) {
                var self = this, current = self.current, $content = current.$content, end;
                if (self.isAnimating || self.isMoved() || !$content || !(current.type == "image" && current.isLoaded && !current.hasError)) {
                    return
                }
                self.isAnimating = true;
                $.fancybox.stop($content);
                end = self.getFitPos(current);
                self.updateCursor(end.width, end.height);
                $.fancybox.animate($content, {
                    top: end.top,
                    left: end.left,
                    scaleX: end.width / $content.width(),
                    scaleY: end.height / $content.height()
                }, duration || 366, function() {
                    self.isAnimating = false
                })
            },
            getFitPos: function(slide) {
                var self = this, $content = slide.$content, $slide = slide.$slide, width = slide.width || slide.opts.width, height = slide.height || slide.opts.height, maxWidth, maxHeight, minRatio, aspectRatio, rez = {};
                if (!slide.isLoaded || !$content || !$content.length) {
                    return false
                }
                maxWidth = $.fancybox.getTranslate(self.$refs.stage).width;
                maxHeight = $.fancybox.getTranslate(self.$refs.stage).height;
                maxWidth -= parseFloat($slide.css("paddingLeft")) + parseFloat($slide.css("paddingRight")) + parseFloat($content.css("marginLeft")) + parseFloat($content.css("marginRight"));
                maxHeight -= parseFloat($slide.css("paddingTop")) + parseFloat($slide.css("paddingBottom")) + parseFloat($content.css("marginTop")) + parseFloat($content.css("marginBottom"));
                if (!width || !height) {
                    width = maxWidth;
                    height = maxHeight
                }
                minRatio = Math.min(1, maxWidth / width, maxHeight / height);
                width = minRatio * width;
                height = minRatio * height;
                if (width > maxWidth - .5) {
                    width = maxWidth
                }
                if (height > maxHeight - .5) {
                    height = maxHeight
                }
                if (slide.type === "image") {
                    rez.top = Math.floor((maxHeight - height) * .5) + parseFloat($slide.css("paddingTop"));
                    rez.left = Math.floor((maxWidth - width) * .5) + parseFloat($slide.css("paddingLeft"))
                } else if (slide.contentType === "video") {
                    aspectRatio = slide.opts.width && slide.opts.height ? width / height : slide.opts.ratio || 16 / 9;
                    if (height > width / aspectRatio) {
                        height = width / aspectRatio
                    } else if (width > height * aspectRatio) {
                        width = height * aspectRatio
                    }
                }
                rez.width = width;
                rez.height = height;
                return rez
            },
            update: function(e) {
                var self = this;
                $.each(self.slides, function(key, slide) {
                    self.updateSlide(slide, e)
                })
            },
            updateSlide: function(slide, e) {
                var self = this
                    , $content = slide && slide.$content
                    , width = slide.width || slide.opts.width
                    , height = slide.height || slide.opts.height
                    , $slide = slide.$slide;
                self.adjustCaption(slide);
                if ($content && (width || height || slide.contentType === "video") && !slide.hasError) {
                    $.fancybox.stop($content);
                    $.fancybox.setTranslate($content, self.getFitPos(slide));
                    if (slide.pos === self.currPos) {
                        self.isAnimating = false;
                        self.updateCursor()
                    }
                }
                self.adjustLayout(slide);
                if ($slide.length) {
                    $slide.trigger("refresh");
                    if (slide.pos === self.currPos) {
                        self.$refs.toolbar.add(self.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", $slide.get(0).scrollHeight > $slide.get(0).clientHeight)
                    }
                }
                self.trigger("onUpdate", slide, e)
            },
            centerSlide: function(duration) {
                var self = this
                    , current = self.current
                    , $slide = current.$slide;
                if (self.isClosing || !current) {
                    return
                }
                $slide.siblings().css({
                    transform: "",
                    opacity: ""
                });
                $slide.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next");
                $.fancybox.animate($slide, {
                    top: 0,
                    left: 0,
                    opacity: 1
                }, duration === undefined ? 0 : duration, function() {
                    $slide.css({
                        transform: "",
                        opacity: ""
                    });
                    if (!current.isComplete) {
                        self.complete()
                    }
                }, false)
            },
            isMoved: function(slide) {
                var current = slide || this.current, slidePos, stagePos;
                if (!current) {
                    return false
                }
                stagePos = $.fancybox.getTranslate(this.$refs.stage);
                slidePos = $.fancybox.getTranslate(current.$slide);
                return !current.$slide.hasClass("fancybox-animated") && (Math.abs(slidePos.top - stagePos.top) > .5 || Math.abs(slidePos.left - stagePos.left) > .5)
            },
            updateCursor: function(nextWidth, nextHeight) {
                var self = this, current = self.current, $container = self.$refs.container, canPan, isZoomable;
                if (!current || self.isClosing || !self.Guestures) {
                    return
                }
                $container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan");
                canPan = self.canPan(nextWidth, nextHeight);
                isZoomable = canPan ? true : self.isZoomable();
                $container.toggleClass("fancybox-is-zoomable", isZoomable);
                $("[data-fancybox-zoom]").prop("disabled", !isZoomable);
                if (canPan) {
                    $container.addClass("fancybox-can-pan")
                } else if (isZoomable && (current.opts.clickContent === "zoom" || $.isFunction(current.opts.clickContent) && current.opts.clickContent(current) == "zoom")) {
                    $container.addClass("fancybox-can-zoomIn")
                } else if (current.opts.touch && (current.opts.touch.vertical || self.group.length > 1) && current.contentType !== "video") {
                    $container.addClass("fancybox-can-swipe")
                }
            },
            isZoomable: function() {
                var self = this, current = self.current, fitPos;
                if (current && !self.isClosing && current.type === "image" && !current.hasError) {
                    if (!current.isLoaded) {
                        return true
                    }
                    fitPos = self.getFitPos(current);
                    if (fitPos && (current.width > fitPos.width || current.height > fitPos.height)) {
                        return true
                    }
                }
                return false
            },
            isScaledDown: function(nextWidth, nextHeight) {
                var self = this
                    , rez = false
                    , current = self.current
                    , $content = current.$content;
                if (nextWidth !== undefined && nextHeight !== undefined) {
                    rez = nextWidth < current.width && nextHeight < current.height
                } else if ($content) {
                    rez = $.fancybox.getTranslate($content);
                    rez = rez.width < current.width && rez.height < current.height
                }
                return rez
            },
            canPan: function(nextWidth, nextHeight) {
                var self = this
                    , current = self.current
                    , pos = null
                    , rez = false;
                if (current.type === "image" && (current.isComplete || nextWidth && nextHeight) && !current.hasError) {
                    rez = self.getFitPos(current);
                    if (nextWidth !== undefined && nextHeight !== undefined) {
                        pos = {
                            width: nextWidth,
                            height: nextHeight
                        }
                    } else if (current.isComplete) {
                        pos = $.fancybox.getTranslate(current.$content)
                    }
                    if (pos && rez) {
                        rez = Math.abs(pos.width - rez.width) > 1.5 || Math.abs(pos.height - rez.height) > 1.5
                    }
                }
                return rez
            },
            loadSlide: function(slide) {
                var self = this, type, $slide, ajaxLoad;
                if (slide.isLoading || slide.isLoaded) {
                    return
                }
                slide.isLoading = true;
                if (self.trigger("beforeLoad", slide) === false) {
                    slide.isLoading = false;
                    return false
                }
                type = slide.type;
                $slide = slide.$slide;
                $slide.off("refresh").trigger("onReset").addClass(slide.opts.slideClass);
                switch (type) {
                    case "image":
                        self.setImage(slide);
                        break;
                    case "iframe":
                        self.setIframe(slide);
                        break;
                    case "html":
                        self.setContent(slide, slide.src || slide.content);
                        break;
                    case "video":
                        self.setContent(slide, slide.opts.video.tpl.replace(/\{\{src\}\}/gi, slide.src).replace("{{format}}", slide.opts.videoFormat || slide.opts.video.format || "").replace("{{poster}}", slide.thumb || ""));
                        break;
                    case "inline":
                        if ($(slide.src).length) {
                            self.setContent(slide, $(slide.src))
                        } else {
                            self.setError(slide)
                        }
                        break;
                    case "ajax":
                        self.showLoading(slide);
                        ajaxLoad = $.ajax($.extend({}, slide.opts.ajax.settings, {
                            url: slide.src,
                            success: function(data, textStatus) {
                                if (textStatus === "success") {
                                    self.setContent(slide, data)
                                }
                            },
                            error: function(jqXHR, textStatus) {
                                if (jqXHR && textStatus !== "abort") {
                                    self.setError(slide)
                                }
                            }
                        }));
                        $slide.one("onReset", function() {
                            ajaxLoad.abort()
                        });
                        break;
                    default:
                        self.setError(slide);
                        break
                }
                return true
            },
            setImage: function(slide) {
                var self = this, ghost;
                setTimeout(function() {
                    var $img = slide.$image;
                    if (!self.isClosing && slide.isLoading && (!$img || !$img.length || !$img[0].complete) && !slide.hasError) {
                        self.showLoading(slide)
                    }
                }, 50);
                self.checkSrcset(slide);
                slide.$content = $('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(slide.$slide.addClass("fancybox-slide--image"));
                if (slide.opts.preload !== false && slide.opts.width && slide.opts.height && slide.thumb) {
                    slide.width = slide.opts.width;
                    slide.height = slide.opts.height;
                    ghost = document.createElement("img");
                    ghost.onerror = function() {
                        $(this).remove();
                        slide.$ghost = null
                    }
                    ;
                    ghost.onload = function() {
                        self.afterLoad(slide)
                    }
                    ;
                    slide.$ghost = $(ghost).addClass("fancybox-image").appendTo(slide.$content).attr("src", slide.thumb)
                }
                self.setBigImage(slide)
            },
            checkSrcset: function(slide) {
                var srcset = slide.opts.srcset || slide.opts.image.srcset, found, temp, pxRatio, windowWidth;
                if (srcset) {
                    pxRatio = window.devicePixelRatio || 1;
                    windowWidth = window.innerWidth * pxRatio;
                    temp = srcset.split(",").map(function(el) {
                        var ret = {};
                        el.trim().split(/\s+/).forEach(function(el, i) {
                            var value = parseInt(el.substring(0, el.length - 1), 10);
                            if (i === 0) {
                                return ret.url = el
                            }
                            if (value) {
                                ret.value = value;
                                ret.postfix = el[el.length - 1]
                            }
                        });
                        return ret
                    });
                    temp.sort(function(a, b) {
                        return a.value - b.value
                    });
                    for (var j = 0; j < temp.length; j++) {
                        var el = temp[j];
                        if (el.postfix === "w" && el.value >= windowWidth || el.postfix === "x" && el.value >= pxRatio) {
                            found = el;
                            break
                        }
                    }
                    if (!found && temp.length) {
                        found = temp[temp.length - 1]
                    }
                    if (found) {
                        slide.src = found.url;
                        if (slide.width && slide.height && found.postfix == "w") {
                            slide.height = slide.width / slide.height * found.value;
                            slide.width = found.value
                        }
                        slide.opts.srcset = srcset
                    }
                }
            },
            setBigImage: function(slide) {
                var self = this
                    , img = document.createElement("img")
                    , $img = $(img);
                slide.$image = $img.one("error", function() {
                    self.setError(slide)
                }).one("load", function() {
                    var sizes;
                    if (!slide.$ghost) {
                        self.resolveImageSlideSize(slide, this.naturalWidth, this.naturalHeight);
                        self.afterLoad(slide)
                    }
                    if (self.isClosing) {
                        return
                    }
                    if (slide.opts.srcset) {
                        sizes = slide.opts.sizes;
                        if (!sizes || sizes === "auto") {
                            sizes = (slide.width / slide.height > 1 && $W.width() / $W.height() > 1 ? "100" : Math.round(slide.width / slide.height * 100)) + "vw"
                        }
                        $img.attr("sizes", sizes).attr("srcset", slide.opts.srcset)
                    }
                    if (slide.$ghost) {
                        setTimeout(function() {
                            if (slide.$ghost && !self.isClosing) {
                                slide.$ghost.hide()
                            }
                        }, Math.min(300, Math.max(1e3, slide.height / 1600)))
                    }
                    self.hideLoading(slide)
                }).addClass("fancybox-image").attr("src", slide.src).appendTo(slide.$content);
                if ((img.complete || img.readyState == "complete") && $img.naturalWidth && $img.naturalHeight) {
                    $img.trigger("load")
                } else if (img.error) {
                    $img.trigger("error")
                }
            },
            resolveImageSlideSize: function(slide, imgWidth, imgHeight) {
                var maxWidth = parseInt(slide.opts.width, 10)
                    , maxHeight = parseInt(slide.opts.height, 10);
                slide.width = imgWidth;
                slide.height = imgHeight;
                if (maxWidth > 0) {
                    slide.width = maxWidth;
                    slide.height = Math.floor(maxWidth * imgHeight / imgWidth)
                }
                if (maxHeight > 0) {
                    slide.width = Math.floor(maxHeight * imgWidth / imgHeight);
                    slide.height = maxHeight
                }
            },
            setIframe: function(slide) {
                var self = this, opts = slide.opts.iframe, $slide = slide.$slide, $iframe;
                slide.$content = $('<div class="fancybox-content' + (opts.preload ? " fancybox-is-hidden" : "") + '"></div>').css(opts.css).appendTo($slide);
                $slide.addClass("fancybox-slide--" + slide.contentType);
                slide.$iframe = $iframe = $(opts.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(opts.attr).appendTo(slide.$content);
                if (opts.preload) {
                    self.showLoading(slide);
                    $iframe.on("load.fb error.fb", function(e) {
                        this.isReady = 1;
                        slide.$slide.trigger("refresh");
                        self.afterLoad(slide)
                    });
                    $slide.on("refresh.fb", function() {
                        var $content = slide.$content, frameWidth = opts.css.width, frameHeight = opts.css.height, $contents, $body;
                        if ($iframe[0].isReady !== 1) {
                            return
                        }
                        try {
                            $contents = $iframe.contents();
                            $body = $contents.find("body")
                        } catch (ignore) {}
                        if ($body && $body.length && $body.children().length) {
                            $slide.css("overflow", "visible");
                            $content.css({
                                width: "100%",
                                "max-width": "100%",
                                height: "9999px"
                            });
                            if (frameWidth === undefined) {
                                frameWidth = Math.ceil(Math.max($body[0].clientWidth, $body.outerWidth(true)))
                            }
                            $content.css("width", frameWidth ? frameWidth : "").css("max-width", "");
                            if (frameHeight === undefined) {
                                frameHeight = Math.ceil(Math.max($body[0].clientHeight, $body.outerHeight(true)))
                            }
                            $content.css("height", frameHeight ? frameHeight : "");
                            $slide.css("overflow", "auto")
                        }
                        $content.removeClass("fancybox-is-hidden")
                    })
                } else {
                    self.afterLoad(slide)
                }
                $iframe.attr("src", slide.src);
                $slide.one("onReset", function() {
                    try {
                        $(this).find("iframe").hide().unbind().attr("src", "//about:blank")
                    } catch (ignore) {}
                    $(this).off("refresh.fb").empty();
                    slide.isLoaded = false;
                    slide.isRevealed = false
                })
            },
            setContent: function(slide, content) {
                var self = this;
                if (self.isClosing) {
                    return
                }
                self.hideLoading(slide);
                if (slide.$content) {
                    $.fancybox.stop(slide.$content)
                }
                slide.$slide.empty();
                if (isQuery(content) && content.parent().length) {
                    if (content.hasClass("fancybox-content") || content.parent().hasClass("fancybox-content")) {
                        content.parents(".fancybox-slide").trigger("onReset")
                    }
                    slide.$placeholder = $("<div>").hide().insertAfter(content);
                    content.css("display", "inline-block")
                } else if (!slide.hasError) {
                    if ($.type(content) === "string") {
                        content = $("<div>").append($.trim(content)).contents()
                    }
                    if (slide.opts.filter) {
                        content = $("<div>").html(content).find(slide.opts.filter)
                    }
                }
                slide.$slide.one("onReset", function() {
                    $(this).find("video,audio").trigger("pause");
                    if (slide.$placeholder) {
                        slide.$placeholder.after(content.removeClass("fancybox-content").hide()).remove();
                        slide.$placeholder = null
                    }
                    if (slide.$smallBtn) {
                        slide.$smallBtn.remove();
                        slide.$smallBtn = null
                    }
                    if (!slide.hasError) {
                        $(this).empty();
                        slide.isLoaded = false;
                        slide.isRevealed = false
                    }
                });
                $(content).appendTo(slide.$slide);
                if ($(content).is("video,audio")) {
                    $(content).addClass("fancybox-video");
                    $(content).wrap("<div></div>");
                    slide.contentType = "video";
                    slide.opts.width = slide.opts.width || $(content).attr("width");
                    slide.opts.height = slide.opts.height || $(content).attr("height")
                }
                slide.$content = slide.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first();
                slide.$content.siblings().hide();
                if (!slide.$content.length) {
                    slide.$content = slide.$slide.wrapInner("<div></div>").children().first()
                }
                slide.$content.addClass("fancybox-content");
                slide.$slide.addClass("fancybox-slide--" + slide.contentType);
                self.afterLoad(slide)
            },
            setError: function(slide) {
                slide.hasError = true;
                slide.$slide.trigger("onReset").removeClass("fancybox-slide--" + slide.contentType).addClass("fancybox-slide--error");
                slide.contentType = "html";
                this.setContent(slide, this.translate(slide, slide.opts.errorTpl));
                if (slide.pos === this.currPos) {
                    this.isAnimating = false
                }
            },
            showLoading: function(slide) {
                var self = this;
                slide = slide || self.current;
                if (slide && !slide.$spinner) {
                    slide.$spinner = $(self.translate(self, self.opts.spinnerTpl)).appendTo(slide.$slide).hide().fadeIn("fast")
                }
            },
            hideLoading: function(slide) {
                var self = this;
                slide = slide || self.current;
                if (slide && slide.$spinner) {
                    slide.$spinner.stop().remove();
                    delete slide.$spinner
                }
            },
            afterLoad: function(slide) {
                var self = this;
                if (self.isClosing) {
                    return
                }
                slide.isLoading = false;
                slide.isLoaded = true;
                self.trigger("afterLoad", slide);
                self.hideLoading(slide);
                if (slide.opts.smallBtn && (!slide.$smallBtn || !slide.$smallBtn.length)) {
                    slide.$smallBtn = $(self.translate(slide, slide.opts.btnTpl.smallBtn)).appendTo(slide.$content)
                }
                if (slide.opts.protect && slide.$content && !slide.hasError) {
                    slide.$content.on("contextmenu.fb", function(e) {
                        if (e.button == 2) {
                            e.preventDefault()
                        }
                        return true
                    });
                    if (slide.type === "image") {
                        $('<div class="fancybox-spaceball"></div>').appendTo(slide.$content)
                    }
                }
                self.adjustCaption(slide);
                self.adjustLayout(slide);
                if (slide.pos === self.currPos) {
                    self.updateCursor()
                }
                self.revealContent(slide)
            },
            adjustCaption: function(slide) {
                var self = this, current = slide || self.current, caption = current.opts.caption, preventOverlap = current.opts.preventCaptionOverlap, $caption = self.$refs.caption, $clone, captionH = false;
                $caption.toggleClass("fancybox-caption--separate", preventOverlap);
                if (preventOverlap && caption && caption.length) {
                    if (current.pos !== self.currPos) {
                        $clone = $caption.clone().appendTo($caption.parent());
                        $clone.children().eq(0).empty().html(caption);
                        captionH = $clone.outerHeight(true);
                        $clone.empty().remove()
                    } else if (self.$caption) {
                        captionH = self.$caption.outerHeight(true)
                    }
                    current.$slide.css("padding-bottom", captionH || "")
                }
            },
            adjustLayout: function(slide) {
                var self = this, current = slide || self.current, scrollHeight, marginBottom, inlinePadding, actualPadding;
                if (current.isLoaded && current.opts.disableLayoutFix !== true) {
                    current.$content.css("margin-bottom", "");
                    if (current.$content.outerHeight() > current.$slide.height() + .5) {
                        inlinePadding = current.$slide[0].style["padding-bottom"];
                        actualPadding = current.$slide.css("padding-bottom");
                        if (parseFloat(actualPadding) > 0) {
                            scrollHeight = current.$slide[0].scrollHeight;
                            current.$slide.css("padding-bottom", 0);
                            if (Math.abs(scrollHeight - current.$slide[0].scrollHeight) < 1) {
                                marginBottom = actualPadding
                            }
                            current.$slide.css("padding-bottom", inlinePadding)
                        }
                    }
                    current.$content.css("margin-bottom", marginBottom)
                }
            },
            revealContent: function(slide) {
                var self = this, $slide = slide.$slide, end = false, start = false, isMoved = self.isMoved(slide), isRevealed = slide.isRevealed, effect, effectClassName, duration, opacity;
                slide.isRevealed = true;
                effect = slide.opts[self.firstRun ? "animationEffect" : "transitionEffect"];
                duration = slide.opts[self.firstRun ? "animationDuration" : "transitionDuration"];
                duration = parseInt(slide.forcedDuration === undefined ? duration : slide.forcedDuration, 10);
                if (isMoved || slide.pos !== self.currPos || !duration) {
                    effect = false
                }
                if (effect === "zoom") {
                    if (slide.pos === self.currPos && duration && slide.type === "image" && !slide.hasError && (start = self.getThumbPos(slide))) {
                        end = self.getFitPos(slide)
                    } else {
                        effect = "fade"
                    }
                }
                if (effect === "zoom") {
                    self.isAnimating = true;
                    end.scaleX = end.width / start.width;
                    end.scaleY = end.height / start.height;
                    opacity = slide.opts.zoomOpacity;
                    if (opacity == "auto") {
                        opacity = Math.abs(slide.width / slide.height - start.width / start.height) > .1
                    }
                    if (opacity) {
                        start.opacity = .1;
                        end.opacity = 1
                    }
                    $.fancybox.setTranslate(slide.$content.removeClass("fancybox-is-hidden"), start);
                    forceRedraw(slide.$content);
                    $.fancybox.animate(slide.$content, end, duration, function() {
                        self.isAnimating = false;
                        self.complete()
                    });
                    return
                }
                self.updateSlide(slide);
                if (!effect) {
                    slide.$content.removeClass("fancybox-is-hidden");
                    if (!isRevealed && isMoved && slide.type === "image" && !slide.hasError) {
                        slide.$content.hide().fadeIn("fast")
                    }
                    if (slide.pos === self.currPos) {
                        self.complete()
                    }
                    return
                }
                $.fancybox.stop($slide);
                effectClassName = "fancybox-slide--" + (slide.pos >= self.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + effect;
                $slide.addClass(effectClassName).removeClass("fancybox-slide--current");
                slide.$content.removeClass("fancybox-is-hidden");
                forceRedraw($slide);
                if (slide.type !== "image") {
                    slide.$content.hide().show(0)
                }
                $.fancybox.animate($slide, "fancybox-slide--current", duration, function() {
                    $slide.removeClass(effectClassName).css({
                        transform: "",
                        opacity: ""
                    });
                    if (slide.pos === self.currPos) {
                        self.complete()
                    }
                }, true)
            },
            getThumbPos: function(slide) {
                var rez = false, $thumb = slide.$thumb, thumbPos, btw, brw, bbw, blw;
                if (!$thumb || !inViewport($thumb[0])) {
                    return false
                }
                thumbPos = $.fancybox.getTranslate($thumb);
                btw = parseFloat($thumb.css("border-top-width") || 0);
                brw = parseFloat($thumb.css("border-right-width") || 0);
                bbw = parseFloat($thumb.css("border-bottom-width") || 0);
                blw = parseFloat($thumb.css("border-left-width") || 0);
                rez = {
                    top: thumbPos.top + btw,
                    left: thumbPos.left + blw,
                    width: thumbPos.width - brw - blw,
                    height: thumbPos.height - btw - bbw,
                    scaleX: 1,
                    scaleY: 1
                };
                return thumbPos.width > 0 && thumbPos.height > 0 ? rez : false
            },
            complete: function() {
                var self = this, current = self.current, slides = {}, $el;
                if (self.isMoved() || !current.isLoaded) {
                    return
                }
                if (!current.isComplete) {
                    current.isComplete = true;
                    current.$slide.siblings().trigger("onReset");
                    self.preload("inline");
                    forceRedraw(current.$slide);
                    current.$slide.addClass("fancybox-slide--complete");
                    $.each(self.slides, function(key, slide) {
                        if (slide.pos >= self.currPos - 1 && slide.pos <= self.currPos + 1) {
                            slides[slide.pos] = slide
                        } else if (slide) {
                            $.fancybox.stop(slide.$slide);
                            slide.$slide.off().remove()
                        }
                    });
                    self.slides = slides
                }
                self.isAnimating = false;
                self.updateCursor();
                self.trigger("afterShow");
                if (!!current.opts.video.autoStart) {
                    current.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended", function() {
                        if (Document.exitFullscreen) {
                            Document.exitFullscreen()
                        } else if (this.webkitExitFullscreen) {
                            this.webkitExitFullscreen()
                        }
                        self.next()
                    })
                }
                if (current.opts.autoFocus && current.contentType === "html") {
                    $el = current.$content.find("input[autofocus]:enabled:visible:first");
                    if ($el.length) {
                        $el.trigger("focus")
                    } else {
                        self.focus(null, true)
                    }
                }
                current.$slide.scrollTop(0).scrollLeft(0)
            },
            preload: function(type) {
                var self = this, prev, next;
                if (self.group.length < 2) {
                    return
                }
                next = self.slides[self.currPos + 1];
                prev = self.slides[self.currPos - 1];
                if (prev && prev.type === type) {
                    self.loadSlide(prev)
                }
                if (next && next.type === type) {
                    self.loadSlide(next)
                }
            },
            focus: function(e, firstRun) {
                var self = this, focusableStr = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'].join(","), focusableItems, focusedItemIndex;
                if (self.isClosing) {
                    return
                }
                if (e || !self.current || !self.current.isComplete) {
                    focusableItems = self.$refs.container.find("*:visible")
                } else {
                    focusableItems = self.current.$slide.find("*:visible" + (firstRun ? ":not(.fancybox-close-small)" : ""))
                }
                focusableItems = focusableItems.filter(focusableStr).filter(function() {
                    return $(this).css("visibility") !== "hidden" && !$(this).hasClass("disabled")
                });
                if (focusableItems.length) {
                    focusedItemIndex = focusableItems.index(document.activeElement);
                    if (e && e.shiftKey) {
                        if (focusedItemIndex < 0 || focusedItemIndex == 0) {
                            e.preventDefault();
                            focusableItems.eq(focusableItems.length - 1).trigger("focus")
                        }
                    } else {
                        if (focusedItemIndex < 0 || focusedItemIndex == focusableItems.length - 1) {
                            if (e) {
                                e.preventDefault()
                            }
                            focusableItems.eq(0).trigger("focus")
                        }
                    }
                } else {
                    self.$refs.container.trigger("focus")
                }
            },
            activate: function() {
                var self = this;
                $(".fancybox-container").each(function() {
                    var instance = $(this).data("FancyBox");
                    if (instance && instance.id !== self.id && !instance.isClosing) {
                        instance.trigger("onDeactivate");
                        instance.removeEvents();
                        instance.isVisible = false
                    }
                });
                self.isVisible = true;
                if (self.current || self.isIdle) {
                    self.update();
                    self.updateControls()
                }
                self.trigger("onActivate");
                self.addEvents()
            },
            close: function(e, d) {
                var self = this, current = self.current, effect, duration, $content, domRect, opacity, start, end;
                var done = function() {
                    self.cleanUp(e)
                };
                if (self.isClosing) {
                    return false
                }
                self.isClosing = true;
                if (self.trigger("beforeClose", e) === false) {
                    self.isClosing = false;
                    requestAFrame(function() {
                        self.update()
                    });
                    return false
                }
                self.removeEvents();
                $content = current.$content;
                effect = current.opts.animationEffect;
                duration = $.isNumeric(d) ? d : effect ? current.opts.animationDuration : 0;
                current.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated");
                if (e !== true) {
                    $.fancybox.stop(current.$slide)
                } else {
                    effect = false
                }
                current.$slide.siblings().trigger("onReset").remove();
                if (duration) {
                    self.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration", duration + "ms")
                }
                self.hideLoading(current);
                self.hideControls(true);
                self.updateCursor();
                if (effect === "zoom" && !($content && duration && current.type === "image" && !self.isMoved() && !current.hasError && (end = self.getThumbPos(current)))) {
                    effect = "fade"
                }
                if (effect === "zoom") {
                    $.fancybox.stop($content);
                    domRect = $.fancybox.getTranslate($content);
                    start = {
                        top: domRect.top,
                        left: domRect.left,
                        scaleX: domRect.width / end.width,
                        scaleY: domRect.height / end.height,
                        width: end.width,
                        height: end.height
                    };
                    opacity = current.opts.zoomOpacity;
                    if (opacity == "auto") {
                        opacity = Math.abs(current.width / current.height - end.width / end.height) > .1
                    }
                    if (opacity) {
                        end.opacity = 0
                    }
                    $.fancybox.setTranslate($content, start);
                    forceRedraw($content);
                    $.fancybox.animate($content, end, duration, done);
                    return true
                }
                if (effect && duration) {
                    $.fancybox.animate(current.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + effect, duration, done)
                } else {
                    if (e === true) {
                        setTimeout(done, duration)
                    } else {
                        done()
                    }
                }
                return true
            },
            cleanUp: function(e) {
                var self = this, instance, $focus = self.current.opts.$orig, x, y;
                self.current.$slide.trigger("onReset");
                self.$refs.container.empty().remove();
                self.trigger("afterClose", e);
                if (!!self.current.opts.backFocus) {
                    if (!$focus || !$focus.length || !$focus.is(":visible")) {
                        $focus = self.$trigger
                    }
                    if ($focus && $focus.length) {
                        x = window.scrollX;
                        y = window.scrollY;
                        $focus.trigger("focus");
                        $("html, body").scrollTop(y).scrollLeft(x)
                    }
                }
                self.current = null;
                instance = $.fancybox.getInstance();
                if (instance) {
                    instance.activate()
                } else {
                    $("body").removeClass("fancybox-active compensate-for-scrollbar");
                    $("#fancybox-style-noscroll").remove()
                }
            },
            trigger: function(name, slide) {
                var args = Array.prototype.slice.call(arguments, 1), self = this, obj = slide && slide.opts ? slide : self.current, rez;
                if (obj) {
                    args.unshift(obj)
                } else {
                    obj = self
                }
                args.unshift(self);
                if ($.isFunction(obj.opts[name])) {
                    rez = obj.opts[name].apply(obj, args)
                }
                if (rez === false) {
                    return rez
                }
                if (name === "afterClose" || !self.$refs) {
                    $D.trigger(name + ".fb", args)
                } else {
                    self.$refs.container.trigger(name + ".fb", args)
                }
            },
            updateControls: function() {
                var self = this
                    , current = self.current
                    , index = current.index
                    , $container = self.$refs.container
                    , $caption = self.$refs.caption
                    , caption = current.opts.caption;
                current.$slide.trigger("refresh");
                if (caption && caption.length) {
                    self.$caption = $caption;
                    $caption.children().eq(0).html(caption)
                } else {
                    self.$caption = null
                }
                if (!self.hasHiddenControls && !self.isIdle) {
                    self.showControls()
                }
                $container.find("[data-fancybox-count]").html(self.group.length);
                $container.find("[data-fancybox-index]").html(index + 1);
                $container.find("[data-fancybox-prev]").prop("disabled", !current.opts.loop && index <= 0);
                $container.find("[data-fancybox-next]").prop("disabled", !current.opts.loop && index >= self.group.length - 1);
                if (current.type === "image") {
                    $container.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", current.opts.image.src || current.src).show()
                } else if (current.opts.toolbar) {
                    $container.find("[data-fancybox-download],[data-fancybox-zoom]").hide()
                }
                if ($(document.activeElement).is(":hidden,[disabled]")) {
                    self.$refs.container.trigger("focus")
                }
            },
            hideControls: function(andCaption) {
                var self = this
                    , arr = ["infobar", "toolbar", "nav"];
                if (andCaption || !self.current.opts.preventCaptionOverlap) {
                    arr.push("caption")
                }
                this.$refs.container.removeClass(arr.map(function(i) {
                    return "fancybox-show-" + i
                }).join(" "));
                this.hasHiddenControls = true
            },
            showControls: function() {
                var self = this
                    , opts = self.current ? self.current.opts : self.opts
                    , $container = self.$refs.container;
                self.hasHiddenControls = false;
                self.idleSecondsCounter = 0;
                $container.toggleClass("fancybox-show-toolbar", !!(opts.toolbar && opts.buttons)).toggleClass("fancybox-show-infobar", !!(opts.infobar && self.group.length > 1)).toggleClass("fancybox-show-caption", !!self.$caption).toggleClass("fancybox-show-nav", !!(opts.arrows && self.group.length > 1)).toggleClass("fancybox-is-modal", !!opts.modal)
            },
            toggleControls: function() {
                if (this.hasHiddenControls) {
                    this.showControls()
                } else {
                    this.hideControls()
                }
            }
        });
        $.fancybox = {
            version: "3.5.7",
            defaults: defaults,
            getInstance: function(command) {
                var instance = $('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox")
                    , args = Array.prototype.slice.call(arguments, 1);
                if (instance instanceof FancyBox) {
                    if ($.type(command) === "string") {
                        instance[command].apply(instance, args)
                    } else if ($.type(command) === "function") {
                        command.apply(instance, args)
                    }
                    return instance
                }
                return false
            },
            open: function(items, opts, index) {
                return new FancyBox(items,opts,index)
            },
            close: function(all) {
                var instance = this.getInstance();
                if (instance) {
                    instance.close();
                    if (all === true) {
                        this.close(all)
                    }
                }
            },
            destroy: function() {
                this.close(true);
                $D.add("body").off("click.fb-start", "**")
            },
            isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
            use3d: function() {
                var div = document.createElement("div");
                return window.getComputedStyle && window.getComputedStyle(div) && window.getComputedStyle(div).getPropertyValue("transform") && !(document.documentMode && document.documentMode < 11)
            }(),
            getTranslate: function($el) {
                var domRect;
                if (!$el || !$el.length) {
                    return false
                }
                domRect = $el[0].getBoundingClientRect();
                return {
                    top: domRect.top || 0,
                    left: domRect.left || 0,
                    width: domRect.width,
                    height: domRect.height,
                    opacity: parseFloat($el.css("opacity"))
                }
            },
            setTranslate: function($el, props) {
                var str = ""
                    , css = {};
                if (!$el || !props) {
                    return
                }
                if (props.left !== undefined || props.top !== undefined) {
                    str = (props.left === undefined ? $el.position().left : props.left) + "px, " + (props.top === undefined ? $el.position().top : props.top) + "px";
                    if (this.use3d) {
                        str = "translate3d(" + str + ", 0px)"
                    } else {
                        str = "translate(" + str + ")"
                    }
                }
                if (props.scaleX !== undefined && props.scaleY !== undefined) {
                    str += " scale(" + props.scaleX + ", " + props.scaleY + ")"
                } else if (props.scaleX !== undefined) {
                    str += " scaleX(" + props.scaleX + ")"
                }
                if (str.length) {
                    css.transform = str
                }
                if (props.opacity !== undefined) {
                    css.opacity = props.opacity
                }
                if (props.width !== undefined) {
                    css.width = props.width
                }
                if (props.height !== undefined) {
                    css.height = props.height
                }
                return $el.css(css)
            },
            animate: function($el, to, duration, callback, leaveAnimationName) {
                var self = this, from;
                if ($.isFunction(duration)) {
                    callback = duration;
                    duration = null
                }
                self.stop($el);
                from = self.getTranslate($el);
                $el.on(transitionEnd, function(e) {
                    if (e && e.originalEvent && (!$el.is(e.originalEvent.target) || e.originalEvent.propertyName == "z-index")) {
                        return
                    }
                    self.stop($el);
                    if ($.isNumeric(duration)) {
                        $el.css("transition-duration", "")
                    }
                    if ($.isPlainObject(to)) {
                        if (to.scaleX !== undefined && to.scaleY !== undefined) {
                            self.setTranslate($el, {
                                top: to.top,
                                left: to.left,
                                width: from.width * to.scaleX,
                                height: from.height * to.scaleY,
                                scaleX: 1,
                                scaleY: 1
                            })
                        }
                    } else if (leaveAnimationName !== true) {
                        $el.removeClass(to)
                    }
                    if ($.isFunction(callback)) {
                        callback(e)
                    }
                });
                if ($.isNumeric(duration)) {
                    $el.css("transition-duration", duration + "ms")
                }
                if ($.isPlainObject(to)) {
                    if (to.scaleX !== undefined && to.scaleY !== undefined) {
                        delete to.width;
                        delete to.height;
                        if ($el.parent().hasClass("fancybox-slide--image")) {
                            $el.parent().addClass("fancybox-is-scaling")
                        }
                    }
                    $.fancybox.setTranslate($el, to)
                } else {
                    $el.addClass(to)
                }
                $el.data("timer", setTimeout(function() {
                    $el.trigger(transitionEnd)
                }, duration + 33))
            },
            stop: function($el, callCallback) {
                if ($el && $el.length) {
                    clearTimeout($el.data("timer"));
                    if (callCallback) {
                        $el.trigger(transitionEnd)
                    }
                    $el.off(transitionEnd).css("transition-duration", "");
                    $el.parent().removeClass("fancybox-is-scaling")
                }
            }
        };
        function _run(e, opts) {
            var items = [], index = 0, $target, value, instance;
            if (e && e.isDefaultPrevented()) {
                return
            }
            e.preventDefault();
            opts = opts || {};
            if (e && e.data) {
                opts = mergeOpts(e.data.options, opts)
            }
            $target = opts.$target || $(e.currentTarget).trigger("blur");
            instance = $.fancybox.getInstance();
            if (instance && instance.$trigger && instance.$trigger.is($target)) {
                return
            }
            if (opts.selector) {
                items = $(opts.selector)
            } else {
                value = $target.attr("data-fancybox") || "";
                if (value) {
                    items = e.data ? e.data.items : [];
                    items = items.length ? items.filter('[data-fancybox="' + value + '"]') : $('[data-fancybox="' + value + '"]')
                } else {
                    items = [$target]
                }
            }
            index = $(items).index($target);
            if (index < 0) {
                index = 0
            }
            instance = $.fancybox.open(items, opts, index);
            instance.$trigger = $target
        }
        $.fn.fancybox = function(options) {
            var selector;
            options = options || {};
            selector = options.selector || false;
            if (selector) {
                $("body").off("click.fb-start", selector).on("click.fb-start", selector, {
                    options: options
                }, _run)
            } else {
                this.off("click.fb-start").on("click.fb-start", {
                    items: this,
                    options: options
                }, _run)
            }
            return this
        }
        ;
        $D.on("click.fb-start", "[data-fancybox]", _run);
        $D.on("click.fb-start", "[data-fancybox-trigger]", function(e) {
            $('[data-fancybox="' + $(this).attr("data-fancybox-trigger") + '"]').eq($(this).attr("data-fancybox-index") || 0).trigger("click.fb-start", {
                $trigger: $(this)
            })
        });
        (function() {
                var buttonStr = ".fancybox-button"
                    , focusStr = "fancybox-focus"
                    , $pressed = null;
                $D.on("mousedown mouseup focus blur", buttonStr, function(e) {
                    switch (e.type) {
                        case "mousedown":
                            $pressed = $(this);
                            break;
                        case "mouseup":
                            $pressed = null;
                            break;
                        case "focusin":
                            $(buttonStr).removeClass(focusStr);
                            if (!$(this).is($pressed) && !$(this).is("[disabled]")) {
                                $(this).addClass(focusStr)
                            }
                            break;
                        case "focusout":
                            $(buttonStr).removeClass(focusStr);
                            break
                    }
                })
            }
        )()
    }
)(window, document, jQuery);
(function($) {
        "use strict";
        var defaults = {
            youtube: {
                matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
                params: {
                    autoplay: 1,
                    autohide: 1,
                    fs: 1,
                    rel: 0,
                    hd: 1,
                    wmode: "transparent",
                    enablejsapi: 1,
                    html5: 1
                },
                paramPlace: 8,
                type: "iframe",
                url: "https://www.youtube-nocookie.com/embed/$4",
                thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg"
            },
            vimeo: {
                matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
                params: {
                    autoplay: 1,
                    hd: 1,
                    show_title: 1,
                    show_byline: 1,
                    show_portrait: 0,
                    fullscreen: 1
                },
                paramPlace: 3,
                type: "iframe",
                url: "//player.vimeo.com/video/$2"
            },
            instagram: {
                matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
                type: "image",
                url: "//$1/p/$2/media/?size=l"
            },
            gmap_place: {
                matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
                type: "iframe",
                url: function(rez) {
                    return "//maps.google." + rez[2] + "/?ll=" + (rez[9] ? rez[9] + "&z=" + Math.floor(rez[10]) + (rez[12] ? rez[12].replace(/^\//, "&") : "") : rez[12] + "").replace(/\?/, "&") + "&output=" + (rez[12] && rez[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
                }
            },
            gmap_search: {
                matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
                type: "iframe",
                url: function(rez) {
                    return "//maps.google." + rez[2] + "/maps?q=" + rez[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
                }
            }
        };
        var format = function(url, rez, params) {
            if (!url) {
                return
            }
            params = params || "";
            if ($.type(params) === "object") {
                params = $.param(params, true)
            }
            $.each(rez, function(key, value) {
                url = url.replace("$" + key, value || "")
            });
            if (params.length) {
                url += (url.indexOf("?") > 0 ? "&" : "?") + params
            }
            return url
        };
        $(document).on("objectNeedsType.fb", function(e, instance, item) {
            var url = item.src || "", type = false, media, thumb, rez, params, urlParams, paramObj, provider;
            media = $.extend(true, {}, defaults, item.opts.media);
            $.each(media, function(providerName, providerOpts) {
                rez = url.match(providerOpts.matcher);
                if (!rez) {
                    return
                }
                type = providerOpts.type;
                provider = providerName;
                paramObj = {};
                if (providerOpts.paramPlace && rez[providerOpts.paramPlace]) {
                    urlParams = rez[providerOpts.paramPlace];
                    if (urlParams[0] == "?") {
                        urlParams = urlParams.substring(1)
                    }
                    urlParams = urlParams.split("&");
                    for (var m = 0; m < urlParams.length; ++m) {
                        var p = urlParams[m].split("=", 2);
                        if (p.length == 2) {
                            paramObj[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "))
                        }
                    }
                }
                params = $.extend(true, {}, providerOpts.params, item.opts[providerName], paramObj);
                url = $.type(providerOpts.url) === "function" ? providerOpts.url.call(this, rez, params, item) : format(providerOpts.url, rez, params);
                thumb = $.type(providerOpts.thumb) === "function" ? providerOpts.thumb.call(this, rez, params, item) : format(providerOpts.thumb, rez);
                if (providerName === "youtube") {
                    url = url.replace(/&t=((\d+)m)?(\d+)s/, function(match, p1, m, s) {
                        return "&start=" + ((m ? parseInt(m, 10) * 60 : 0) + parseInt(s, 10))
                    })
                } else if (providerName === "vimeo") {
                    url = url.replace("&%23", "#")
                }
                return false
            });
            if (type) {
                if (!item.opts.thumb && !(item.opts.$thumb && item.opts.$thumb.length)) {
                    item.opts.thumb = thumb
                }
                if (type === "iframe") {
                    item.opts = $.extend(true, item.opts, {
                        iframe: {
                            preload: false,
                            attr: {
                                scrolling: "no"
                            }
                        }
                    })
                }
                $.extend(item, {
                    type: type,
                    src: url,
                    origSrc: item.src,
                    contentSource: provider,
                    contentType: type === "image" ? "image" : provider == "gmap_place" || provider == "gmap_search" ? "map" : "video"
                })
            } else if (url) {
                item.type = item.opts.defaultType
            }
        });
        var VideoAPILoader = {
            youtube: {
                src: "https://www.youtube.com/iframe_api",
                class: "YT",
                loading: false,
                loaded: false
            },
            vimeo: {
                src: "https://player.vimeo.com/api/player.js",
                class: "Vimeo",
                loading: false,
                loaded: false
            },
            load: function(vendor) {
                var _this = this, script;
                if (this[vendor].loaded) {
                    setTimeout(function() {
                        _this.done(vendor)
                    });
                    return
                }
                if (this[vendor].loading) {
                    return
                }
                this[vendor].loading = true;
                script = document.createElement("script");
                script.type = "text/javascript";
                script.src = this[vendor].src;
                if (vendor === "youtube") {
                    window.onYouTubeIframeAPIReady = function() {
                        _this[vendor].loaded = true;
                        _this.done(vendor)
                    }
                } else {
                    script.onload = function() {
                        _this[vendor].loaded = true;
                        _this.done(vendor)
                    }
                }
                document.body.appendChild(script)
            },
            done: function(vendor) {
                var instance, $el, player;
                if (vendor === "youtube") {
                    delete window.onYouTubeIframeAPIReady
                }
                instance = $.fancybox.getInstance();
                if (instance) {
                    $el = instance.current.$content.find("iframe");
                    if (vendor === "youtube" && YT !== undefined && YT) {
                        player = new YT.Player($el.attr("id"),{
                            events: {
                                onStateChange: function(e) {
                                    if (e.data == 0) {
                                        instance.next()
                                    }
                                }
                            }
                        })
                    } else if (vendor === "vimeo" && Vimeo !== undefined && Vimeo) {
                        player = new Vimeo.Player($el);
                        player.on("ended", function() {
                            instance.next()
                        })
                    }
                }
            }
        };
        $(document).on({
            "afterShow.fb": function(e, instance, current) {
                if (instance.group.length > 1 && (current.contentSource === "youtube" || current.contentSource === "vimeo")) {
                    VideoAPILoader.load(current.contentSource)
                }
            }
        })
    }
)(jQuery);
(function(window, document, $) {
        "use strict";
        var requestAFrame = function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || function(callback) {
                return window.setTimeout(callback, 1e3 / 60)
            }
        }();
        var cancelAFrame = function() {
            return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || function(id) {
                window.clearTimeout(id)
            }
        }();
        var getPointerXY = function(e) {
            var result = [];
            e = e.originalEvent || e || window.e;
            e = e.touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e];
            for (var key in e) {
                if (e[key].pageX) {
                    result.push({
                        x: e[key].pageX,
                        y: e[key].pageY
                    })
                } else if (e[key].clientX) {
                    result.push({
                        x: e[key].clientX,
                        y: e[key].clientY
                    })
                }
            }
            return result
        };
        var distance = function(point2, point1, what) {
            if (!point1 || !point2) {
                return 0
            }
            if (what === "x") {
                return point2.x - point1.x
            } else if (what === "y") {
                return point2.y - point1.y
            }
            return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2))
        };
        var isClickable = function($el) {
            if ($el.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || $.isFunction($el.get(0).onclick) || $el.data("selectable")) {
                return true
            }
            for (var i = 0, atts = $el[0].attributes, n = atts.length; i < n; i++) {
                if (atts[i].nodeName.substr(0, 14) === "data-fancybox-") {
                    return true
                }
            }
            return false
        };
        var hasScrollbars = function(el) {
            var overflowY = window.getComputedStyle(el)["overflow-y"]
                , overflowX = window.getComputedStyle(el)["overflow-x"]
                , vertical = (overflowY === "scroll" || overflowY === "auto") && el.scrollHeight > el.clientHeight
                , horizontal = (overflowX === "scroll" || overflowX === "auto") && el.scrollWidth > el.clientWidth;
            return vertical || horizontal
        };
        var isScrollable = function($el) {
            var rez = false;
            while (true) {
                rez = hasScrollbars($el.get(0));
                if (rez) {
                    break
                }
                $el = $el.parent();
                if (!$el.length || $el.hasClass("fancybox-stage") || $el.is("body")) {
                    break
                }
            }
            return rez
        };
        var Guestures = function(instance) {
            var self = this;
            self.instance = instance;
            self.$bg = instance.$refs.bg;
            self.$stage = instance.$refs.stage;
            self.$container = instance.$refs.container;
            self.destroy();
            self.$container.on("touchstart.fb.touch mousedown.fb.touch", $.proxy(self, "ontouchstart"))
        };
        Guestures.prototype.destroy = function() {
            var self = this;
            self.$container.off(".fb.touch");
            $(document).off(".fb.touch");
            if (self.requestId) {
                cancelAFrame(self.requestId);
                self.requestId = null
            }
            if (self.tapped) {
                clearTimeout(self.tapped);
                self.tapped = null
            }
        }
        ;
        Guestures.prototype.ontouchstart = function(e) {
            var self = this
                , $target = $(e.target)
                , instance = self.instance
                , current = instance.current
                , $slide = current.$slide
                , $content = current.$content
                , isTouchDevice = e.type == "touchstart";
            if (isTouchDevice) {
                self.$container.off("mousedown.fb.touch")
            }
            if (e.originalEvent && e.originalEvent.button == 2) {
                return
            }
            if (!$slide.length || !$target.length || isClickable($target) || isClickable($target.parent())) {
                return
            }
            if (!$target.is("img") && e.originalEvent.clientX > $target[0].clientWidth + $target.offset().left) {
                return
            }
            if (!current || instance.isAnimating || current.$slide.hasClass("fancybox-animated")) {
                e.stopPropagation();
                e.preventDefault();
                return
            }
            self.realPoints = self.startPoints = getPointerXY(e);
            if (!self.startPoints.length) {
                return
            }
            if (current.touch) {
                e.stopPropagation()
            }
            self.startEvent = e;
            self.canTap = true;
            self.$target = $target;
            self.$content = $content;
            self.opts = current.opts.touch;
            self.isPanning = false;
            self.isSwiping = false;
            self.isZooming = false;
            self.isScrolling = false;
            self.canPan = instance.canPan();
            self.startTime = (new Date).getTime();
            self.distanceX = self.distanceY = self.distance = 0;
            self.canvasWidth = Math.round($slide[0].clientWidth);
            self.canvasHeight = Math.round($slide[0].clientHeight);
            self.contentLastPos = null;
            self.contentStartPos = $.fancybox.getTranslate(self.$content) || {
                top: 0,
                left: 0
            };
            self.sliderStartPos = $.fancybox.getTranslate($slide);
            self.stagePos = $.fancybox.getTranslate(instance.$refs.stage);
            self.sliderStartPos.top -= self.stagePos.top;
            self.sliderStartPos.left -= self.stagePos.left;
            self.contentStartPos.top -= self.stagePos.top;
            self.contentStartPos.left -= self.stagePos.left;
            $(document).off(".fb.touch").on(isTouchDevice ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", $.proxy(self, "ontouchend")).on(isTouchDevice ? "touchmove.fb.touch" : "mousemove.fb.touch", $.proxy(self, "ontouchmove"));
            if ($.fancybox.isMobile) {
                document.addEventListener("scroll", self.onscroll, true)
            }
            if (!(self.opts || self.canPan) || !($target.is(self.$stage) || self.$stage.find($target).length)) {
                if ($target.is(".fancybox-image")) {
                    e.preventDefault()
                }
                if (!($.fancybox.isMobile && $target.parents(".fancybox-caption").length)) {
                    return
                }
            }
            self.isScrollable = isScrollable($target) || isScrollable($target.parent());
            if (!($.fancybox.isMobile && self.isScrollable)) {
                e.preventDefault()
            }
            if (self.startPoints.length === 1 || current.hasError) {
                if (self.canPan) {
                    $.fancybox.stop(self.$content);
                    self.isPanning = true
                } else {
                    self.isSwiping = true
                }
                self.$container.addClass("fancybox-is-grabbing")
            }
            if (self.startPoints.length === 2 && current.type === "image" && (current.isLoaded || current.$ghost)) {
                self.canTap = false;
                self.isSwiping = false;
                self.isPanning = false;
                self.isZooming = true;
                $.fancybox.stop(self.$content);
                self.centerPointStartX = (self.startPoints[0].x + self.startPoints[1].x) * .5 - $(window).scrollLeft();
                self.centerPointStartY = (self.startPoints[0].y + self.startPoints[1].y) * .5 - $(window).scrollTop();
                self.percentageOfImageAtPinchPointX = (self.centerPointStartX - self.contentStartPos.left) / self.contentStartPos.width;
                self.percentageOfImageAtPinchPointY = (self.centerPointStartY - self.contentStartPos.top) / self.contentStartPos.height;
                self.startDistanceBetweenFingers = distance(self.startPoints[0], self.startPoints[1])
            }
        }
        ;
        Guestures.prototype.onscroll = function(e) {
            var self = this;
            self.isScrolling = true;
            document.removeEventListener("scroll", self.onscroll, true)
        }
        ;
        Guestures.prototype.ontouchmove = function(e) {
            var self = this;
            if (e.originalEvent.buttons !== undefined && e.originalEvent.buttons === 0) {
                self.ontouchend(e);
                return
            }
            if (self.isScrolling) {
                self.canTap = false;
                return
            }
            self.newPoints = getPointerXY(e);
            if (!(self.opts || self.canPan) || !self.newPoints.length || !self.newPoints.length) {
                return
            }
            if (!(self.isSwiping && self.isSwiping === true)) {
                e.preventDefault()
            }
            self.distanceX = distance(self.newPoints[0], self.startPoints[0], "x");
            self.distanceY = distance(self.newPoints[0], self.startPoints[0], "y");
            self.distance = distance(self.newPoints[0], self.startPoints[0]);
            if (self.distance > 0) {
                if (self.isSwiping) {
                    self.onSwipe(e)
                } else if (self.isPanning) {
                    self.onPan()
                } else if (self.isZooming) {
                    self.onZoom()
                }
            }
        }
        ;
        Guestures.prototype.onSwipe = function(e) {
            var self = this, instance = self.instance, swiping = self.isSwiping, left = self.sliderStartPos.left || 0, angle;
            if (swiping === true) {
                if (Math.abs(self.distance) > 10) {
                    self.canTap = false;
                    if (instance.group.length < 2 && self.opts.vertical) {
                        self.isSwiping = "y"
                    } else if (instance.isDragging || self.opts.vertical === false || self.opts.vertical === "auto" && $(window).width() > 800) {
                        self.isSwiping = "x"
                    } else {
                        angle = Math.abs(Math.atan2(self.distanceY, self.distanceX) * 180 / Math.PI);
                        self.isSwiping = angle > 45 && angle < 135 ? "y" : "x"
                    }
                    if (self.isSwiping === "y" && $.fancybox.isMobile && self.isScrollable) {
                        self.isScrolling = true;
                        return
                    }
                    instance.isDragging = self.isSwiping;
                    self.startPoints = self.newPoints;
                    $.each(instance.slides, function(index, slide) {
                        var slidePos, stagePos;
                        $.fancybox.stop(slide.$slide);
                        slidePos = $.fancybox.getTranslate(slide.$slide);
                        stagePos = $.fancybox.getTranslate(instance.$refs.stage);
                        slide.$slide.css({
                            transform: "",
                            opacity: "",
                            "transition-duration": ""
                        }).removeClass("fancybox-animated").removeClass(function(index, className) {
                            return (className.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                        });
                        if (slide.pos === instance.current.pos) {
                            self.sliderStartPos.top = slidePos.top - stagePos.top;
                            self.sliderStartPos.left = slidePos.left - stagePos.left
                        }
                        $.fancybox.setTranslate(slide.$slide, {
                            top: slidePos.top - stagePos.top,
                            left: slidePos.left - stagePos.left
                        })
                    });
                    if (instance.SlideShow && instance.SlideShow.isActive) {
                        instance.SlideShow.stop()
                    }
                }
                return
            }
            if (swiping == "x") {
                if (self.distanceX > 0 && (self.instance.group.length < 2 || self.instance.current.index === 0 && !self.instance.current.opts.loop)) {
                    left = left + Math.pow(self.distanceX, .8)
                } else if (self.distanceX < 0 && (self.instance.group.length < 2 || self.instance.current.index === self.instance.group.length - 1 && !self.instance.current.opts.loop)) {
                    left = left - Math.pow(-self.distanceX, .8)
                } else {
                    left = left + self.distanceX
                }
            }
            self.sliderLastPos = {
                top: swiping == "x" ? 0 : self.sliderStartPos.top + self.distanceY,
                left: left
            };
            if (self.requestId) {
                cancelAFrame(self.requestId);
                self.requestId = null
            }
            self.requestId = requestAFrame(function() {
                if (self.sliderLastPos) {
                    $.each(self.instance.slides, function(index, slide) {
                        var pos = slide.pos - self.instance.currPos;
                        $.fancybox.setTranslate(slide.$slide, {
                            top: self.sliderLastPos.top,
                            left: self.sliderLastPos.left + pos * self.canvasWidth + pos * slide.opts.gutter
                        })
                    });
                    self.$container.addClass("fancybox-is-sliding")
                }
            })
        }
        ;
        Guestures.prototype.onPan = function() {
            var self = this;
            if (distance(self.newPoints[0], self.realPoints[0]) < ($.fancybox.isMobile ? 10 : 5)) {
                self.startPoints = self.newPoints;
                return
            }
            self.canTap = false;
            self.contentLastPos = self.limitMovement();
            if (self.requestId) {
                cancelAFrame(self.requestId)
            }
            self.requestId = requestAFrame(function() {
                $.fancybox.setTranslate(self.$content, self.contentLastPos)
            })
        }
        ;
        Guestures.prototype.limitMovement = function() {
            var self = this;
            var canvasWidth = self.canvasWidth;
            var canvasHeight = self.canvasHeight;
            var distanceX = self.distanceX;
            var distanceY = self.distanceY;
            var contentStartPos = self.contentStartPos;
            var currentOffsetX = contentStartPos.left;
            var currentOffsetY = contentStartPos.top;
            var currentWidth = contentStartPos.width;
            var currentHeight = contentStartPos.height;
            var minTranslateX, minTranslateY, maxTranslateX, maxTranslateY, newOffsetX, newOffsetY;
            if (currentWidth > canvasWidth) {
                newOffsetX = currentOffsetX + distanceX
            } else {
                newOffsetX = currentOffsetX
            }
            newOffsetY = currentOffsetY + distanceY;
            minTranslateX = Math.max(0, canvasWidth * .5 - currentWidth * .5);
            minTranslateY = Math.max(0, canvasHeight * .5 - currentHeight * .5);
            maxTranslateX = Math.min(canvasWidth - currentWidth, canvasWidth * .5 - currentWidth * .5);
            maxTranslateY = Math.min(canvasHeight - currentHeight, canvasHeight * .5 - currentHeight * .5);
            if (distanceX > 0 && newOffsetX > minTranslateX) {
                newOffsetX = minTranslateX - 1 + Math.pow(-minTranslateX + currentOffsetX + distanceX, .8) || 0
            }
            if (distanceX < 0 && newOffsetX < maxTranslateX) {
                newOffsetX = maxTranslateX + 1 - Math.pow(maxTranslateX - currentOffsetX - distanceX, .8) || 0
            }
            if (distanceY > 0 && newOffsetY > minTranslateY) {
                newOffsetY = minTranslateY - 1 + Math.pow(-minTranslateY + currentOffsetY + distanceY, .8) || 0
            }
            if (distanceY < 0 && newOffsetY < maxTranslateY) {
                newOffsetY = maxTranslateY + 1 - Math.pow(maxTranslateY - currentOffsetY - distanceY, .8) || 0
            }
            return {
                top: newOffsetY,
                left: newOffsetX
            }
        }
        ;
        Guestures.prototype.limitPosition = function(newOffsetX, newOffsetY, newWidth, newHeight) {
            var self = this;
            var canvasWidth = self.canvasWidth;
            var canvasHeight = self.canvasHeight;
            if (newWidth > canvasWidth) {
                newOffsetX = newOffsetX > 0 ? 0 : newOffsetX;
                newOffsetX = newOffsetX < canvasWidth - newWidth ? canvasWidth - newWidth : newOffsetX
            } else {
                newOffsetX = Math.max(0, canvasWidth / 2 - newWidth / 2)
            }
            if (newHeight > canvasHeight) {
                newOffsetY = newOffsetY > 0 ? 0 : newOffsetY;
                newOffsetY = newOffsetY < canvasHeight - newHeight ? canvasHeight - newHeight : newOffsetY
            } else {
                newOffsetY = Math.max(0, canvasHeight / 2 - newHeight / 2)
            }
            return {
                top: newOffsetY,
                left: newOffsetX
            }
        }
        ;
        Guestures.prototype.onZoom = function() {
            var self = this;
            var contentStartPos = self.contentStartPos;
            var currentWidth = contentStartPos.width;
            var currentHeight = contentStartPos.height;
            var currentOffsetX = contentStartPos.left;
            var currentOffsetY = contentStartPos.top;
            var endDistanceBetweenFingers = distance(self.newPoints[0], self.newPoints[1]);
            var pinchRatio = endDistanceBetweenFingers / self.startDistanceBetweenFingers;
            var newWidth = Math.floor(currentWidth * pinchRatio);
            var newHeight = Math.floor(currentHeight * pinchRatio);
            var translateFromZoomingX = (currentWidth - newWidth) * self.percentageOfImageAtPinchPointX;
            var translateFromZoomingY = (currentHeight - newHeight) * self.percentageOfImageAtPinchPointY;
            var centerPointEndX = (self.newPoints[0].x + self.newPoints[1].x) / 2 - $(window).scrollLeft();
            var centerPointEndY = (self.newPoints[0].y + self.newPoints[1].y) / 2 - $(window).scrollTop();
            var translateFromTranslatingX = centerPointEndX - self.centerPointStartX;
            var translateFromTranslatingY = centerPointEndY - self.centerPointStartY;
            var newOffsetX = currentOffsetX + (translateFromZoomingX + translateFromTranslatingX);
            var newOffsetY = currentOffsetY + (translateFromZoomingY + translateFromTranslatingY);
            var newPos = {
                top: newOffsetY,
                left: newOffsetX,
                scaleX: pinchRatio,
                scaleY: pinchRatio
            };
            self.canTap = false;
            self.newWidth = newWidth;
            self.newHeight = newHeight;
            self.contentLastPos = newPos;
            if (self.requestId) {
                cancelAFrame(self.requestId)
            }
            self.requestId = requestAFrame(function() {
                $.fancybox.setTranslate(self.$content, self.contentLastPos)
            })
        }
        ;
        Guestures.prototype.ontouchend = function(e) {
            var self = this;
            var swiping = self.isSwiping;
            var panning = self.isPanning;
            var zooming = self.isZooming;
            var scrolling = self.isScrolling;
            self.endPoints = getPointerXY(e);
            self.dMs = Math.max((new Date).getTime() - self.startTime, 1);
            self.$container.removeClass("fancybox-is-grabbing");
            $(document).off(".fb.touch");
            document.removeEventListener("scroll", self.onscroll, true);
            if (self.requestId) {
                cancelAFrame(self.requestId);
                self.requestId = null
            }
            self.isSwiping = false;
            self.isPanning = false;
            self.isZooming = false;
            self.isScrolling = false;
            self.instance.isDragging = false;
            if (self.canTap) {
                return self.onTap(e)
            }
            self.speed = 100;
            self.velocityX = self.distanceX / self.dMs * .5;
            self.velocityY = self.distanceY / self.dMs * .5;
            if (panning) {
                self.endPanning()
            } else if (zooming) {
                self.endZooming()
            } else {
                self.endSwiping(swiping, scrolling)
            }
            return
        }
        ;
        Guestures.prototype.endSwiping = function(swiping, scrolling) {
            var self = this
                , ret = false
                , len = self.instance.group.length
                , distanceX = Math.abs(self.distanceX)
                , canAdvance = swiping == "x" && len > 1 && (self.dMs > 130 && distanceX > 10 || distanceX > 50)
                , speedX = 300;
            self.sliderLastPos = null;
            if (swiping == "y" && !scrolling && Math.abs(self.distanceY) > 50) {
                $.fancybox.animate(self.instance.current.$slide, {
                    top: self.sliderStartPos.top + self.distanceY + self.velocityY * 150,
                    opacity: 0
                }, 200);
                ret = self.instance.close(true, 250)
            } else if (canAdvance && self.distanceX > 0) {
                ret = self.instance.previous(speedX)
            } else if (canAdvance && self.distanceX < 0) {
                ret = self.instance.next(speedX)
            }
            if (ret === false && (swiping == "x" || swiping == "y")) {
                self.instance.centerSlide(200)
            }
            self.$container.removeClass("fancybox-is-sliding")
        }
        ;
        Guestures.prototype.endPanning = function() {
            var self = this, newOffsetX, newOffsetY, newPos;
            if (!self.contentLastPos) {
                return
            }
            if (self.opts.momentum === false || self.dMs > 350) {
                newOffsetX = self.contentLastPos.left;
                newOffsetY = self.contentLastPos.top
            } else {
                newOffsetX = self.contentLastPos.left + self.velocityX * 500;
                newOffsetY = self.contentLastPos.top + self.velocityY * 500
            }
            newPos = self.limitPosition(newOffsetX, newOffsetY, self.contentStartPos.width, self.contentStartPos.height);
            newPos.width = self.contentStartPos.width;
            newPos.height = self.contentStartPos.height;
            $.fancybox.animate(self.$content, newPos, 366)
        }
        ;
        Guestures.prototype.endZooming = function() {
            var self = this;
            var current = self.instance.current;
            var newOffsetX, newOffsetY, newPos, reset;
            var newWidth = self.newWidth;
            var newHeight = self.newHeight;
            if (!self.contentLastPos) {
                return
            }
            newOffsetX = self.contentLastPos.left;
            newOffsetY = self.contentLastPos.top;
            reset = {
                top: newOffsetY,
                left: newOffsetX,
                width: newWidth,
                height: newHeight,
                scaleX: 1,
                scaleY: 1
            };
            $.fancybox.setTranslate(self.$content, reset);
            if (newWidth < self.canvasWidth && newHeight < self.canvasHeight) {
                self.instance.scaleToFit(150)
            } else if (newWidth > current.width || newHeight > current.height) {
                self.instance.scaleToActual(self.centerPointStartX, self.centerPointStartY, 150)
            } else {
                newPos = self.limitPosition(newOffsetX, newOffsetY, newWidth, newHeight);
                $.fancybox.animate(self.$content, newPos, 150)
            }
        }
        ;
        Guestures.prototype.onTap = function(e) {
            var self = this;
            var $target = $(e.target);
            var instance = self.instance;
            var current = instance.current;
            var endPoints = e && getPointerXY(e) || self.startPoints;
            var tapX = endPoints[0] ? endPoints[0].x - $(window).scrollLeft() - self.stagePos.left : 0;
            var tapY = endPoints[0] ? endPoints[0].y - $(window).scrollTop() - self.stagePos.top : 0;
            var where;
            var process = function(prefix) {
                var action = current.opts[prefix];
                if ($.isFunction(action)) {
                    action = action.apply(instance, [current, e])
                }
                if (!action) {
                    return
                }
                switch (action) {
                    case "close":
                        instance.close(self.startEvent);
                        break;
                    case "toggleControls":
                        instance.toggleControls();
                        break;
                    case "next":
                        instance.next();
                        break;
                    case "nextOrClose":
                        if (instance.group.length > 1) {
                            instance.next()
                        } else {
                            instance.close(self.startEvent)
                        }
                        break;
                    case "zoom":
                        if (current.type == "image" && (current.isLoaded || current.$ghost)) {
                            if (instance.canPan()) {
                                instance.scaleToFit()
                            } else if (instance.isScaledDown()) {
                                instance.scaleToActual(tapX, tapY)
                            } else if (instance.group.length < 2) {
                                instance.close(self.startEvent)
                            }
                        }
                        break
                }
            };
            if (e.originalEvent && e.originalEvent.button == 2) {
                return
            }
            if (!$target.is("img") && tapX > $target[0].clientWidth + $target.offset().left) {
                return
            }
            if ($target.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) {
                where = "Outside"
            } else if ($target.is(".fancybox-slide")) {
                where = "Slide"
            } else if (instance.current.$content && instance.current.$content.find($target).addBack().filter($target).length) {
                where = "Content"
            } else {
                return
            }
            if (self.tapped) {
                clearTimeout(self.tapped);
                self.tapped = null;
                if (Math.abs(tapX - self.tapX) > 50 || Math.abs(tapY - self.tapY) > 50) {
                    return this
                }
                process("dblclick" + where)
            } else {
                self.tapX = tapX;
                self.tapY = tapY;
                if (current.opts["dblclick" + where] && current.opts["dblclick" + where] !== current.opts["click" + where]) {
                    self.tapped = setTimeout(function() {
                        self.tapped = null;
                        if (!instance.isAnimating) {
                            process("click" + where)
                        }
                    }, 500)
                } else {
                    process("click" + where)
                }
            }
            return this
        }
        ;
        $(document).on("onActivate.fb", function(e, instance) {
            if (instance && !instance.Guestures) {
                instance.Guestures = new Guestures(instance)
            }
        }).on("beforeClose.fb", function(e, instance) {
            if (instance && instance.Guestures) {
                instance.Guestures.destroy()
            }
        })
    }
)(window, document, jQuery);
(function(document, $) {
        "use strict";
        $.extend(true, $.fancybox.defaults, {
            btnTpl: {
                slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}">' + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg>' + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg>' + "</button>"
            },
            slideShow: {
                autoStart: false,
                speed: 3e3,
                progress: true
            }
        });
        var SlideShow = function(instance) {
            this.instance = instance;
            this.init()
        };
        $.extend(SlideShow.prototype, {
            timer: null,
            isActive: false,
            $button: null,
            init: function() {
                var self = this
                    , instance = self.instance
                    , opts = instance.group[instance.currIndex].opts.slideShow;
                self.$button = instance.$refs.toolbar.find("[data-fancybox-play]").on("click", function() {
                    self.toggle()
                });
                if (instance.group.length < 2 || !opts) {
                    self.$button.hide()
                } else if (opts.progress) {
                    self.$progress = $('<div class="fancybox-progress"></div>').appendTo(instance.$refs.inner)
                }
            },
            set: function(force) {
                var self = this
                    , instance = self.instance
                    , current = instance.current;
                if (current && (force === true || current.opts.loop || instance.currIndex < instance.group.length - 1)) {
                    if (self.isActive && current.contentType !== "video") {
                        if (self.$progress) {
                            $.fancybox.animate(self.$progress.show(), {
                                scaleX: 1
                            }, current.opts.slideShow.speed)
                        }
                        self.timer = setTimeout(function() {
                            if (!instance.current.opts.loop && instance.current.index == instance.group.length - 1) {
                                instance.jumpTo(0)
                            } else {
                                instance.next()
                            }
                        }, current.opts.slideShow.speed)
                    }
                } else {
                    self.stop();
                    instance.idleSecondsCounter = 0;
                    instance.showControls()
                }
            },
            clear: function() {
                var self = this;
                clearTimeout(self.timer);
                self.timer = null;
                if (self.$progress) {
                    self.$progress.removeAttr("style").hide()
                }
            },
            start: function() {
                var self = this
                    , current = self.instance.current;
                if (current) {
                    self.$button.attr("title", (current.opts.i18n[current.opts.lang] || current.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause");
                    self.isActive = true;
                    if (current.isComplete) {
                        self.set(true)
                    }
                    self.instance.trigger("onSlideShowChange", true)
                }
            },
            stop: function() {
                var self = this
                    , current = self.instance.current;
                self.clear();
                self.$button.attr("title", (current.opts.i18n[current.opts.lang] || current.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play");
                self.isActive = false;
                self.instance.trigger("onSlideShowChange", false);
                if (self.$progress) {
                    self.$progress.removeAttr("style").hide()
                }
            },
            toggle: function() {
                var self = this;
                if (self.isActive) {
                    self.stop()
                } else {
                    self.start()
                }
            }
        });
        $(document).on({
            "onInit.fb": function(e, instance) {
                if (instance && !instance.SlideShow) {
                    instance.SlideShow = new SlideShow(instance)
                }
            },
            "beforeShow.fb": function(e, instance, current, firstRun) {
                var SlideShow = instance && instance.SlideShow;
                if (firstRun) {
                    if (SlideShow && current.opts.slideShow.autoStart) {
                        SlideShow.start()
                    }
                } else if (SlideShow && SlideShow.isActive) {
                    SlideShow.clear()
                }
            },
            "afterShow.fb": function(e, instance, current) {
                var SlideShow = instance && instance.SlideShow;
                if (SlideShow && SlideShow.isActive) {
                    SlideShow.set()
                }
            },
            "afterKeydown.fb": function(e, instance, current, keypress, keycode) {
                var SlideShow = instance && instance.SlideShow;
                if (SlideShow && current.opts.slideShow && (keycode === 80 || keycode === 32) && !$(document.activeElement).is("button,a,input")) {
                    keypress.preventDefault();
                    SlideShow.toggle()
                }
            },
            "beforeClose.fb onDeactivate.fb": function(e, instance) {
                var SlideShow = instance && instance.SlideShow;
                if (SlideShow) {
                    SlideShow.stop()
                }
            }
        });
        $(document).on("visibilitychange", function() {
            var instance = $.fancybox.getInstance()
                , SlideShow = instance && instance.SlideShow;
            if (SlideShow && SlideShow.isActive) {
                if (document.hidden) {
                    SlideShow.clear()
                } else {
                    SlideShow.set()
                }
            }
        })
    }
)(document, jQuery);
(function(document, $) {
        "use strict";
        var fn = function() {
            var fnMap = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]];
            var ret = {};
            for (var i = 0; i < fnMap.length; i++) {
                var val = fnMap[i];
                if (val && val[1]in document) {
                    for (var j = 0; j < val.length; j++) {
                        ret[fnMap[0][j]] = val[j]
                    }
                    return ret
                }
            }
            return false
        }();
        if (fn) {
            var FullScreen = {
                request: function(elem) {
                    elem = elem || document.documentElement;
                    elem[fn.requestFullscreen](elem.ALLOW_KEYBOARD_INPUT)
                },
                exit: function() {
                    document[fn.exitFullscreen]()
                },
                toggle: function(elem) {
                    elem = elem || document.documentElement;
                    if (this.isFullscreen()) {
                        this.exit()
                    } else {
                        this.request(elem)
                    }
                },
                isFullscreen: function() {
                    return Boolean(document[fn.fullscreenElement])
                },
                enabled: function() {
                    return Boolean(document[fn.fullscreenEnabled])
                }
            };
            $.extend(true, $.fancybox.defaults, {
                btnTpl: {
                    fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}">' + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>' + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg>' + "</button>"
                },
                fullScreen: {
                    autoStart: false
                }
            });
            $(document).on(fn.fullscreenchange, function() {
                var isFullscreen = FullScreen.isFullscreen()
                    , instance = $.fancybox.getInstance();
                if (instance) {
                    if (instance.current && instance.current.type === "image" && instance.isAnimating) {
                        instance.isAnimating = false;
                        instance.update(true, true, 0);
                        if (!instance.isComplete) {
                            instance.complete()
                        }
                    }
                    instance.trigger("onFullscreenChange", isFullscreen);
                    instance.$refs.container.toggleClass("fancybox-is-fullscreen", isFullscreen);
                    instance.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !isFullscreen).toggleClass("fancybox-button--fsexit", isFullscreen)
                }
            })
        }
        $(document).on({
            "onInit.fb": function(e, instance) {
                var $container;
                if (!fn) {
                    instance.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();
                    return
                }
                if (instance && instance.group[instance.currIndex].opts.fullScreen) {
                    $container = instance.$refs.container;
                    $container.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function(e) {
                        e.stopPropagation();
                        e.preventDefault();
                        FullScreen.toggle()
                    });
                    if (instance.opts.fullScreen && instance.opts.fullScreen.autoStart === true) {
                        FullScreen.request()
                    }
                    instance.FullScreen = FullScreen
                } else if (instance) {
                    instance.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()
                }
            },
            "afterKeydown.fb": function(e, instance, current, keypress, keycode) {
                if (instance && instance.FullScreen && keycode === 70) {
                    keypress.preventDefault();
                    instance.FullScreen.toggle()
                }
            },
            "beforeClose.fb": function(e, instance) {
                if (instance && instance.FullScreen && instance.$refs.container.hasClass("fancybox-is-fullscreen")) {
                    FullScreen.exit()
                }
            }
        })
    }
)(document, jQuery);
(function(document, $) {
        "use strict";
        var CLASS = "fancybox-thumbs"
            , CLASS_ACTIVE = CLASS + "-active";
        $.fancybox.defaults = $.extend(true, {
            btnTpl: {
                thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}">' + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg>' + "</button>"
            },
            thumbs: {
                autoStart: false,
                hideOnClose: true,
                parentEl: ".fancybox-container",
                axis: "y"
            }
        }, $.fancybox.defaults);
        var FancyThumbs = function(instance) {
            this.init(instance)
        };
        $.extend(FancyThumbs.prototype, {
            $button: null,
            $grid: null,
            $list: null,
            isVisible: false,
            isActive: false,
            init: function(instance) {
                var self = this
                    , group = instance.group
                    , enabled = 0;
                self.instance = instance;
                self.opts = group[instance.currIndex].opts.thumbs;
                instance.Thumbs = self;
                self.$button = instance.$refs.toolbar.find("[data-fancybox-thumbs]");
                for (var i = 0, len = group.length; i < len; i++) {
                    if (group[i].thumb) {
                        enabled++
                    }
                    if (enabled > 1) {
                        break
                    }
                }
                if (enabled > 1 && !!self.opts) {
                    self.$button.removeAttr("style").on("click", function() {
                        self.toggle()
                    });
                    self.isActive = true
                } else {
                    self.$button.hide()
                }
            },
            create: function() {
                var self = this, instance = self.instance, parentEl = self.opts.parentEl, list = [], src;
                if (!self.$grid) {
                    self.$grid = $('<div class="' + CLASS + " " + CLASS + "-" + self.opts.axis + '"></div>').appendTo(instance.$refs.container.find(parentEl).addBack().filter(parentEl));
                    self.$grid.on("click", "a", function() {
                        instance.jumpTo($(this).attr("data-index"))
                    })
                }
                if (!self.$list) {
                    self.$list = $('<div class="' + CLASS + '__list">').appendTo(self.$grid)
                }
                $.each(instance.group, function(i, item) {
                    src = item.thumb;
                    if (!src && item.type === "image") {
                        src = item.src
                    }
                    list.push('<a href="javascript:;" tabindex="0" data-index="' + i + '"' + (src && src.length ? ' style="background-image:url(' + src + ')"' : 'class="fancybox-thumbs-missing"') + "></a>")
                });
                self.$list[0].innerHTML = list.join("");
                if (self.opts.axis === "x") {
                    self.$list.width(parseInt(self.$grid.css("padding-right"), 10) + instance.group.length * self.$list.children().eq(0).outerWidth(true))
                }
            },
            focus: function(duration) {
                var self = this, $list = self.$list, $grid = self.$grid, thumb, thumbPos;
                if (!self.instance.current) {
                    return
                }
                thumb = $list.children().removeClass(CLASS_ACTIVE).filter('[data-index="' + self.instance.current.index + '"]').addClass(CLASS_ACTIVE);
                thumbPos = thumb.position();
                if (self.opts.axis === "y" && (thumbPos.top < 0 || thumbPos.top > $list.height() - thumb.outerHeight())) {
                    $list.stop().animate({
                        scrollTop: $list.scrollTop() + thumbPos.top
                    }, duration)
                } else if (self.opts.axis === "x" && (thumbPos.left < $grid.scrollLeft() || thumbPos.left > $grid.scrollLeft() + ($grid.width() - thumb.outerWidth()))) {
                    $list.parent().stop().animate({
                        scrollLeft: thumbPos.left
                    }, duration)
                }
            },
            update: function() {
                var that = this;
                that.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible);
                if (that.isVisible) {
                    if (!that.$grid) {
                        that.create()
                    }
                    that.instance.trigger("onThumbsShow");
                    that.focus(0)
                } else if (that.$grid) {
                    that.instance.trigger("onThumbsHide")
                }
                that.instance.update()
            },
            hide: function() {
                this.isVisible = false;
                this.update()
            },
            show: function() {
                this.isVisible = true;
                this.update()
            },
            toggle: function() {
                this.isVisible = !this.isVisible;
                this.update()
            }
        });
        $(document).on({
            "onInit.fb": function(e, instance) {
                var Thumbs;
                if (instance && !instance.Thumbs) {
                    Thumbs = new FancyThumbs(instance);
                    if (Thumbs.isActive && Thumbs.opts.autoStart === true) {
                        Thumbs.show()
                    }
                }
            },
            "beforeShow.fb": function(e, instance, item, firstRun) {
                var Thumbs = instance && instance.Thumbs;
                if (Thumbs && Thumbs.isVisible) {
                    Thumbs.focus(firstRun ? 0 : 250)
                }
            },
            "afterKeydown.fb": function(e, instance, current, keypress, keycode) {
                var Thumbs = instance && instance.Thumbs;
                if (Thumbs && Thumbs.isActive && keycode === 71) {
                    keypress.preventDefault();
                    Thumbs.toggle()
                }
            },
            "beforeClose.fb": function(e, instance) {
                var Thumbs = instance && instance.Thumbs;
                if (Thumbs && Thumbs.isVisible && Thumbs.opts.hideOnClose !== false) {
                    Thumbs.$grid.hide()
                }
            }
        })
    }
)(document, jQuery);
(function(document, $) {
        "use strict";
        $.extend(true, $.fancybox.defaults, {
            btnTpl: {
                share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}">' + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg>' + "</button>"
            },
            share: {
                url: function(instance, item) {
                    return (!instance.currentHash && !(item.type === "inline" || item.type === "html") ? item.origSrc || item.src : false) || window.location
                },
                tpl: '<div class="fancybox-share">' + "<h1>{{SHARE}}</h1>" + "<p>" + '<a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}">' + '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg>' + "<span>Facebook</span>" + "</a>" + '<a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}">' + '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg>' + "<span>Twitter</span>" + "</a>" + '<a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}">' + '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg>' + "<span>Pinterest</span>" + "</a>" + "</p>" + '<p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p>' + "</div>"
            }
        });
        function escapeHtml(string) {
            var entityMap = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#x2F;",
                "`": "&#x60;",
                "=": "&#x3D;"
            };
            return String(string).replace(/[&<>"'`=\/]/g, function(s) {
                return entityMap[s]
            })
        }
        $(document).on("click", "[data-fancybox-share]", function() {
            var instance = $.fancybox.getInstance(), current = instance.current || null, url, tpl;
            if (!current) {
                return
            }
            if ($.type(current.opts.share.url) === "function") {
                url = current.opts.share.url.apply(current, [instance, current])
            }
            tpl = current.opts.share.tpl.replace(/\{\{media\}\}/g, current.type === "image" ? encodeURIComponent(current.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(url)).replace(/\{\{url_raw\}\}/g, escapeHtml(url)).replace(/\{\{descr\}\}/g, instance.$caption ? encodeURIComponent(instance.$caption.text()) : "");
            $.fancybox.open({
                src: instance.translate(instance, tpl),
                type: "html",
                opts: {
                    touch: false,
                    animationEffect: false,
                    afterLoad: function(shareInstance, shareCurrent) {
                        instance.$refs.container.one("beforeClose.fb", function() {
                            shareInstance.close(null, 0)
                        });
                        shareCurrent.$content.find(".fancybox-share__button").click(function() {
                            window.open(this.href, "Share", "width=550, height=450");
                            return false
                        })
                    },
                    mobile: {
                        autoFocus: false
                    }
                }
            })
        })
    }
)(document, jQuery);
(function(window, document, $) {
        "use strict";
        if (!$.escapeSelector) {
            $.escapeSelector = function(sel) {
                var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
                var fcssescape = function(ch, asCodePoint) {
                    if (asCodePoint) {
                        if (ch === "\0") {
                            return "�"
                        }
                        return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " "
                    }
                    return "\\" + ch
                };
                return (sel + "").replace(rcssescape, fcssescape)
            }
        }
        function parseUrl() {
            var hash = window.location.hash.substr(1)
                , rez = hash.split("-")
                , index = rez.length > 1 && /^\+?\d+$/.test(rez[rez.length - 1]) ? parseInt(rez.pop(-1), 10) || 1 : 1
                , gallery = rez.join("-");
            return {
                hash: hash,
                index: index < 1 ? 1 : index,
                gallery: gallery
            }
        }
        function triggerFromUrl(url) {
            if (url.gallery !== "") {
                $("[data-fancybox='" + $.escapeSelector(url.gallery) + "']").eq(url.index - 1).focus().trigger("click.fb-start")
            }
        }
        function getGalleryID(instance) {
            var opts, ret;
            if (!instance) {
                return false
            }
            opts = instance.current ? instance.current.opts : instance.opts;
            ret = opts.hash || (opts.$orig ? opts.$orig.data("fancybox") || opts.$orig.data("fancybox-trigger") : "");
            return ret === "" ? false : ret
        }
        $(function() {
            if ($.fancybox.defaults.hash === false) {
                return
            }
            $(document).on({
                "onInit.fb": function(e, instance) {
                    var url, gallery;
                    if (instance.group[instance.currIndex].opts.hash === false) {
                        return
                    }
                    url = parseUrl();
                    gallery = getGalleryID(instance);
                    if (gallery && url.gallery && gallery == url.gallery) {
                        instance.currIndex = url.index - 1
                    }
                },
                "beforeShow.fb": function(e, instance, current, firstRun) {
                    var gallery;
                    if (!current || current.opts.hash === false) {
                        return
                    }
                    gallery = getGalleryID(instance);
                    if (!gallery) {
                        return
                    }
                    instance.currentHash = gallery + (instance.group.length > 1 ? "-" + (current.index + 1) : "");
                    if (window.location.hash === "#" + instance.currentHash) {
                        return
                    }
                    if (firstRun && !instance.origHash) {
                        instance.origHash = window.location.hash
                    }
                    if (instance.hashTimer) {
                        clearTimeout(instance.hashTimer)
                    }
                    instance.hashTimer = setTimeout(function() {
                        if ("replaceState"in window.history) {
                            window.history[firstRun ? "pushState" : "replaceState"]({}, document.title, window.location.pathname + window.location.search + "#" + instance.currentHash);
                            if (firstRun) {
                                instance.hasCreatedHistory = true
                            }
                        } else {
                            window.location.hash = instance.currentHash
                        }
                        instance.hashTimer = null
                    }, 300)
                },
                "beforeClose.fb": function(e, instance, current) {
                    if (!current || current.opts.hash === false) {
                        return
                    }
                    clearTimeout(instance.hashTimer);
                    if (instance.currentHash && instance.hasCreatedHistory) {
                        window.history.back()
                    } else if (instance.currentHash) {
                        if ("replaceState"in window.history) {
                            window.history.replaceState({}, document.title, window.location.pathname + window.location.search + (instance.origHash || ""))
                        } else {
                            window.location.hash = instance.origHash
                        }
                    }
                    instance.currentHash = null
                }
            });
            $(window).on("hashchange.fb", function() {
                var url = parseUrl()
                    , fb = null;
                $.each($(".fancybox-container").get().reverse(), function(index, value) {
                    var tmp = $(value).data("FancyBox");
                    if (tmp && tmp.currentHash) {
                        fb = tmp;
                        return false
                    }
                });
                if (fb) {
                    if (fb.currentHash !== url.gallery + "-" + url.index && !(url.index === 1 && fb.currentHash == url.gallery)) {
                        fb.currentHash = null;
                        fb.close()
                    }
                } else if (url.gallery !== "") {
                    triggerFromUrl(url)
                }
            });
            setTimeout(function() {
                if (!$.fancybox.getInstance()) {
                    triggerFromUrl(parseUrl())
                }
            }, 50)
        })
    }
)(window, document, jQuery);
(function(document, $) {
        "use strict";
        var prevTime = (new Date).getTime();
        $(document).on({
            "onInit.fb": function(e, instance, current) {
                instance.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function(e) {
                    var current = instance.current
                        , currTime = (new Date).getTime();
                    if (instance.group.length < 2 || current.opts.wheel === false || current.opts.wheel === "auto" && current.type !== "image") {
                        return
                    }
                    e.preventDefault();
                    e.stopPropagation();
                    if (current.$slide.hasClass("fancybox-animated")) {
                        return
                    }
                    e = e.originalEvent || e;
                    if (currTime - prevTime < 250) {
                        return
                    }
                    prevTime = currTime;
                    instance[(-e.deltaY || -e.deltaX || e.wheelDelta || -e.detail) < 0 ? "next" : "previous"]()
                })
            }
        })
    }
)(document, jQuery);

var MsVportal = {};
var loadingHTML = '<p class="posts__loading"><span>Đang tải dữ liệu...</span></p>';
jQuery(document).ready(function(e) {
    (function($) {
            var cate = $.urlParam("post");
            $("#gallary-tabs li a").click(function() {
                var currentTab = "";
                currentTab = $(this).data("category");
                shortUrl = $(this).data("shorturl") + "/" + $(this).data("block-name");
                shortUrl += currentTab.length > 0 ? ".1.html?cate=" + currentTab : ".1.html";
                jQuery("ul#gallary-tabs > li > a").removeClass("active");
                $(this).addClass("active");
                MsVportal.loadGallary(currentTab, shortUrl);
                $("#cate-g").val(currentTab);
                return false
            });
            $("#gallary-tabs2 li a").click(function() {
                var currentTab = "";
                currentTab = $(this).data("category");
                shortUrl = $(this).data("shorturl") + "/" + $(this).data("block-name");
                shortUrl += currentTab.length > 0 ? ".1.html?cate=" + currentTab : ".1.html";
                jQuery("ul#gallary-tabs2 > li > a").removeClass("active");
                $(this).addClass("active");
                MsVportal.loadGallary2(currentTab, shortUrl);
                $("#cate-g").val(currentTab);
                return false
            })
        }
    )(jQuery)
});
MsVportal = function($) {
    return {
        pagination: function() {
            var itemTotal = $("#itemTotal").val();
            var itemPerPage = $("#itemPerPage").val();
            var modulusPage = itemTotal % itemPerPage > 0 ? 1 : 0;
            var totalPages = parseInt(itemTotal / itemPerPage) + modulusPage;
            var searchPage = 1;
            if ($("#resultSearch").val() == 1) {
                searchPage = parseInt($("#searchPage").val()) + 1
            }
            if (totalPages > 1) {
                $("#pagination").twbsPagination({
                    startPage: searchPage,
                    totalPages: totalPages,
                    visiblePages: 4,
                    first: "&laquo;",
                    prev: "&lsaquo;",
                    next: "&rsaquo;",
                    last: "&raquo;",
                    onPageClick: function(event, page) {
                        var currentSection = $("#currentSection").val();
                        MsVportal.loadNews(page, "paging", currentSection)
                    }
                })
            } else {
                $("#pagination").empty();
                $("#pagination").removeData("twbs-pagination");
                $("#pagination").unbind("page")
            }
        },
        loadGallary: function(cate, shortUrl) {
            $.ajax({
                url: shortUrl,
                dataType: "html",
                success: function(result) {
                    if (result.length > 0) {
                        $("#list__image").html(result);
                        MsVportal.initLazyLoadGallery("#list__image", ".list__image-more")
                    } else {
                        $("#list__image").html("Dữ liệu đang cập nhật")
                    }
                }
            })
        },
        loadGallary2: function(cate, shortUrl) {
            $.ajax({
                url: shortUrl,
                dataType: "html",
                success: function(result) {
                    if (result.length > 0) {
                        $("#list__image2").html(result);
                        MsVportal.initLazyLoadGallery("#list__image2", ".list__image-more")
                    } else {
                        $("#list__image2").html("Dữ liệu đang cập nhật")
                    }
                }
            })
        },
        initLazyLoadGallery: function(elementContainer, buttonMore) {
            var _btnViewMore = $(buttonMore)
                , _container = $(elementContainer)
                , _lazyLoadItem = $(".lazy__loading-more")
                , _shortUri = $("#list__image-more").attr("href")
                , _sectionUri = $("#currentSection").val()
                , _pageItem = 0
                , _path = ""
                , _htmlPopViewer = ""
                , _itemView = _container.find("a")
                , _beFirst = $(".beFirst")
                , _gFilter = ""
                , _currentabs = "";
            var ajaxDataItem = function(path) {
                $.ajax({
                    url: path,
                    dataType: getDataType(),
                    beforeSend: function() {
                        _lazyLoadItem.fadeIn();
                        _btnViewMore.css("pointer-events", "none")
                    },
                    success: function(data) {
                        if (data.replace(/\\n/g, "&nbsp;").trim().length > 0) {
                            _container.append(data.replace(/\\n/g, "&nbsp;").trim());
                            setPagingNo(parseInt(getPagingNo()) + 1)
                        }
                        _lazyLoadItem.fadeOut();
                        _btnViewMore.css("pointer-events", "initial")
                    },
                    error: function() {
                        _container.append("Dữ liệu load không thành công, vui lòng thử lại")
                    }
                })
            };
            var activeFancybox = function(el) {
                if ($(el).length > 0) {
                    $(el).fancybox({
                        openEffect: "elastic",
                        autoCenter: true,
                        padding: [7, 7, 7, 7],
                        helpers: {
                            title: {
                                type: "inside"
                            },
                            media: {}
                        },
                        nextEffect: "elastic",
                        prevEffect: "elastic"
                    })
                }
            };
            var getDataType = function() {
                if (_sectionUri == "danh-sach") {
                    return "json"
                } else {
                    return "html"
                }
            };
            var getPagingNo = function() {
                return _btnViewMore.attr("data-page")
            };
            var setPagingNo = function(value) {
                _btnViewMore.attr("data-page", value)
            }
        }
    }
}(jQuery);
$.urlParam = function(name) {
    var results = new RegExp("[?&]" + name + "=([^&#]*)").exec(window.location.href);
    if (results == null) {
        return null
    } else {
        return results[1] || 0
    }
}
;
(function($) {
        $.fn.activeMenu = function(options) {
            var settings = $.extend({
                classActive: "active",
                objActive: "a",
                exceptSection: ""
            }, options);
            var navObject = this;
            var linkArray = navObject.find("a");
            var path = window.location.pathname.replace("/app_dev.php/", "").replace("/app_dev.php", "");
            var pathArray = path.charAt(0) == "/" ? path.substring(1, path.length).split("/") : path.split("/");
            var objActive = null;
            function compare(strUrl) {
                linkArray.each(function(el) {
                    var $this = $(this);
                    var _urlArray = $this.attr("href").replace(domain + "/", "").split("/").toString();
                    if (_urlArray.search(strUrl) > -1) {
                        objActive = $this;
                        if ($this.parent("li").has("a").length == 0) {
                            return false
                        }
                    }
                })
            }
            if (pathArray.length == 1) {
                pathArray[0] = "index.html";
                if (settings.objActive == "a") {
                    navObject.find("li").eq(0).children("a").addClass(settings.classActive)
                } else {
                    navObject.find("li").eq(0).addClass(settings.classActive)
                }
                return this
            }
            if (pathArray.length > 0) {
                var sizePath = pathArray.length;
                var arrSection = settings.exceptSection.split(",");
                for (i = 0; i < sizePath; i++) {
                    var tmp = pathArray.slice(0, sizePath - i).toString();
                    if (i == sizePath - 1 && arrSection.indexOf(tmp) > -1) {
                        break
                    }
                    compare(tmp);
                    if (objActive != null) {
                        if (settings.objActive == "a") {
                            objActive.addClass(settings.classActive);
                            objActive.parents("li").children("a").addClass(settings.classActive)
                        } else {
                            objActive.parent("li").addClass(settings.classActive);
                            objActive.parents("li").addClass(settings.classActive)
                        }
                        objActive.parents("li").addClass("open");
                        break
                    }
                }
            }
            return this
        }
    }
)(jQuery);

var swiper;

$(window).on("load", function() {
    if ($("#character").length > 0) {
        var swiper = new Swiper("#character .swiper-container",{
            effect: "fade",
            pagination: {
                el: "#character .swiper-container .swiper-pagination",
                clickable: true,
                renderBullet: function(index, className) {
                    var valTitle = ["Dark Night", "Fairy Elf", "Dark Wizard", "Dark Lord", "Magic Gladiator"];
                    return '<span class="' + className + '">' + valTitle[index] + "</span>"
                }
            },
            autoplay: {
                delay: 5e3,
                disableOnInteraction: false
            },
            on: {
                init: function() {
                    $("#character .swiper-container").hide()
                }
            }
        });
        $("#character #list-char").show();
        $("#list-char li a").click(function() {
            var slideto = parseInt($(this).data("slideto")) - 1;
            $("#character #list-char").hide();
            $("#character .swiper-container").show("fast", function() {
                $("#character .swiper-container .swiper-pagination-bullet").eq(slideto).trigger("click")
            });
            return false
        });
        $("#character .bt-back").click(function() {
            $("#character #list-char").show();
            $("#character .swiper-container").hide();
            return false
        })
    }
});
var Mainsite = {};

Mainsite = function($) {
    return {
        initFancybox: function(select) {
            if ($(select).length > 0) {
                $(select).fancybox({
                    openEffect: "elastic",
                    autoCenter: true,
                    padding: [7, 7, 7, 7],
                    helpers: {
                        title: {
                            type: "inside"
                        },
                        media: {}
                    },
                    nextEffect: "elastic",
                    prevEffect: "elastic"
                })
            }
        },
        initCarousel: function(element, prev, next) {
            if (jQuery.fn.jcarousel !== undefined) {
                if (jQuery(element).size()) {
                    $(element).jcarousel({
                        wrap: "both"
                    });
                    $(".jcarousel-pagination").on("jcarouselpagination:active", "a", function() {
                        $(this).addClass("active")
                    }).on("jcarouselpagination:inactive", "a", function() {
                        $(this).removeClass("active")
                    }).jcarouselPagination();
                    $(element).jcarouselAutoscroll({
                        interval: 2e3
                    })
                }
            }
        }
    }
}(jQuery);

(function($) {
        $.fn.BlockCharacter = function(options) {
            var defaults = {
                speed: 2e3,
                activeClass: "active",
                fx: "easeInOutQuart"
            };
            options = $.extend(defaults, options);
            return this.each(function() {
                var that = $(this);
                var CharTabs = that.find(".char-tab li");
                var CharContents = that.find(".char-cont > li");
                CharTabs.first().addClass("active");
                CharContents.first().addClass("active");
                var items = $(".char-cont > li.active ul li");
                items.each(function(idx) {
                    var item = $(this);
                    item.bind("click", function() {
                        items.find("p").css("display", "none");
                        item.find("p").css("display", "block")
                    })
                });
                CharTabs.each(function(index) {
                    var tab = $(this).find("a");
                    tab.bind("click", function(e) {
                        e.preventDefault();
                        CharTabs.removeClass(options.activeClass);
                        CharTabs.eq(index).addClass(options.activeClass);
                        CharContents.removeClass(options.activeClass);
                        CharContents.eq(index).addClass(options.activeClass);
                        items = CharContents.eq(index).find("ul li");
                        items.each(function(idx) {
                            var item = $(this);
                            item.bind("click", function() {
                                items.find("p").css("display", "none");
                                item.find("p").css("display", "block")
                            })
                        })
                    })
                })
            })
        }
    }
)(jQuery);

$(window).scroll(function() {
    if ($(window).scrollTop() >= 700) {
        $(".top").show()
    } else {
        $(".top").hide()
    }
});
var btnControl = $("#sidebar-right .bt-control");
var dlBlock = $("#sidebar-right");
var ratioS = 1;
dlBlock.show();

$(document).ready(function() {
    btnControl.unbind("click").bind("click", function(e) {
        e.preventDefault();
        if ($(this).hasClass("close")) {
            if ($(window).width() <= 1360) {
                ratioS = .8
            }
            var rightSidebar = -135 * ratioS;
            dlBlock.animate({
                right: rightSidebar
            }, 500, function() {
                btnControl.removeClass("close").addClass("open")
            })
        } else {
            dlBlock.animate({
                right: 0
            }, 500, function() {
                btnControl.removeClass("open").addClass("close")
            })
        }
    });
    if ($(window).width() <= 1360) {
        dlBlock.css({
            transform: "scale(0.8)"
        })
    }
});
$(window).resize(function() {
    if ($(window).width() <= 1360) {
        dlBlock.css({
            transform: "scale(0.8)"
        })
    }
});
$(window).scroll(function() {});
