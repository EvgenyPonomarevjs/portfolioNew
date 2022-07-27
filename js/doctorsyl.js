!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var i = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var i in e)
          n.d(
            r,
            i,
            function (t) {
              return e[t];
            }.bind(null, i)
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 1));
})([
  function (e, t, n) {
    var r;
    /*!
     * jQuery JavaScript Library v3.5.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2020-05-04T22:49Z
     */ !(function (t, n) {
      "use strict";
      "object" == typeof e.exports
        ? (e.exports = t.document
            ? n(t, !0)
            : function (e) {
                if (!e.document)
                  throw new Error("jQuery requires a window with a document");
                return n(e);
              })
        : n(t);
    })("undefined" != typeof window ? window : this, function (n, i) {
      "use strict";
      var o = [],
        a = Object.getPrototypeOf,
        s = o.slice,
        u = o.flat
          ? function (e) {
              return o.flat.call(e);
            }
          : function (e) {
              return o.concat.apply([], e);
            },
        l = o.push,
        c = o.indexOf,
        f = {},
        p = f.toString,
        d = f.hasOwnProperty,
        h = d.toString,
        g = h.call(Object),
        v = {},
        m = function (e) {
          return "function" == typeof e && "number" != typeof e.nodeType;
        },
        y = function (e) {
          return null != e && e === e.window;
        },
        b = n.document,
        x = { type: !0, src: !0, nonce: !0, noModule: !0 };
      function w(e, t, n) {
        var r,
          i,
          o = (n = n || b).createElement("script");
        if (((o.text = e), t))
          for (r in x)
            (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
              o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o);
      }
      function C(e) {
        return null == e
          ? e + ""
          : "object" == typeof e || "function" == typeof e
          ? f[p.call(e)] || "object"
          : typeof e;
      }
      var T = function (e, t) {
        return new T.fn.init(e, t);
      };
      function k(e) {
        var t = !!e && "length" in e && e.length,
          n = C(e);
        return (
          !m(e) &&
          !y(e) &&
          ("array" === n ||
            0 === t ||
            ("number" == typeof t && t > 0 && t - 1 in e))
        );
      }
      (T.fn = T.prototype =
        {
          jquery: "3.5.1",
          constructor: T,
          length: 0,
          toArray: function () {
            return s.call(this);
          },
          get: function (e) {
            return null == e
              ? s.call(this)
              : e < 0
              ? this[e + this.length]
              : this[e];
          },
          pushStack: function (e) {
            var t = T.merge(this.constructor(), e);
            return (t.prevObject = this), t;
          },
          each: function (e) {
            return T.each(this, e);
          },
          map: function (e) {
            return this.pushStack(
              T.map(this, function (t, n) {
                return e.call(t, n, t);
              })
            );
          },
          slice: function () {
            return this.pushStack(s.apply(this, arguments));
          },
          first: function () {
            return this.eq(0);
          },
          last: function () {
            return this.eq(-1);
          },
          even: function () {
            return this.pushStack(
              T.grep(this, function (e, t) {
                return (t + 1) % 2;
              })
            );
          },
          odd: function () {
            return this.pushStack(
              T.grep(this, function (e, t) {
                return t % 2;
              })
            );
          },
          eq: function (e) {
            var t = this.length,
              n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
          },
          end: function () {
            return this.prevObject || this.constructor();
          },
          push: l,
          sort: o.sort,
          splice: o.splice,
        }),
        (T.extend = T.fn.extend =
          function () {
            var e,
              t,
              n,
              r,
              i,
              o,
              a = arguments[0] || {},
              s = 1,
              u = arguments.length,
              l = !1;
            for (
              "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
                "object" == typeof a || m(a) || (a = {}),
                s === u && ((a = this), s--);
              s < u;
              s++
            )
              if (null != (e = arguments[s]))
                for (t in e)
                  (r = e[t]),
                    "__proto__" !== t &&
                      a !== r &&
                      (l && r && (T.isPlainObject(r) || (i = Array.isArray(r)))
                        ? ((n = a[t]),
                          (o =
                            i && !Array.isArray(n)
                              ? []
                              : i || T.isPlainObject(n)
                              ? n
                              : {}),
                          (i = !1),
                          (a[t] = T.extend(l, o, r)))
                        : void 0 !== r && (a[t] = r));
            return a;
          }),
        T.extend({
          expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function (e) {
            throw new Error(e);
          },
          noop: function () {},
          isPlainObject: function (e) {
            var t, n;
            return (
              !(!e || "[object Object]" !== p.call(e)) &&
              (!(t = a(e)) ||
                ("function" ==
                  typeof (n = d.call(t, "constructor") && t.constructor) &&
                  h.call(n) === g))
            );
          },
          isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0;
          },
          globalEval: function (e, t, n) {
            w(e, { nonce: t && t.nonce }, n);
          },
          each: function (e, t) {
            var n,
              r = 0;
            if (k(e))
              for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
            return e;
          },
          makeArray: function (e, t) {
            var n = t || [];
            return (
              null != e &&
                (k(Object(e))
                  ? T.merge(n, "string" == typeof e ? [e] : e)
                  : l.call(n, e)),
              n
            );
          },
          inArray: function (e, t, n) {
            return null == t ? -1 : c.call(t, e, n);
          },
          merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
              e[i++] = t[r];
            return (e.length = i), e;
          },
          grep: function (e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
              !t(e[i], i) !== a && r.push(e[i]);
            return r;
          },
          map: function (e, t, n) {
            var r,
              i,
              o = 0,
              a = [];
            if (k(e))
              for (r = e.length; o < r; o++)
                null != (i = t(e[o], o, n)) && a.push(i);
            else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return u(a);
          },
          guid: 1,
          support: v,
        }),
        "function" == typeof Symbol &&
          (T.fn[Symbol.iterator] = o[Symbol.iterator]),
        T.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
            " "
          ),
          function (e, t) {
            f["[object " + t + "]"] = t.toLowerCase();
          }
        );
      var S =
        /*!
         * Sizzle CSS Selector Engine v2.3.5
         * https://sizzlejs.com/
         *
         * Copyright JS Foundation and other contributors
         * Released under the MIT license
         * https://js.foundation/
         *
         * Date: 2020-03-14
         */
        (function (e) {
          var t,
            n,
            r,
            i,
            o,
            a,
            s,
            u,
            l,
            c,
            f,
            p,
            d,
            h,
            g,
            v,
            m,
            y,
            b,
            x = "sizzle" + 1 * new Date(),
            w = e.document,
            C = 0,
            T = 0,
            k = ue(),
            S = ue(),
            E = ue(),
            A = ue(),
            j = function (e, t) {
              return e === t && (f = !0), 0;
            },
            D = {}.hasOwnProperty,
            N = [],
            L = N.pop,
            q = N.push,
            O = N.push,
            H = N.slice,
            P = function (e, t) {
              for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t) return n;
              return -1;
            },
            R =
              "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            I = "[\\x20\\t\\r\\n\\f]",
            M =
              "(?:\\\\[\\da-fA-F]{1,6}" +
              I +
              "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            W =
              "\\[" +
              I +
              "*(" +
              M +
              ")(?:" +
              I +
              "*([*^$|!~]?=)" +
              I +
              "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
              M +
              "))|)" +
              I +
              "*\\]",
            F =
              ":(" +
              M +
              ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
              W +
              ")*)|.*)\\)|)",
            B = new RegExp(I + "+", "g"),
            _ = new RegExp(
              "^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$",
              "g"
            ),
            $ = new RegExp("^" + I + "*," + I + "*"),
            z = new RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"),
            U = new RegExp(I + "|>"),
            X = new RegExp(F),
            V = new RegExp("^" + M + "$"),
            G = {
              ID: new RegExp("^#(" + M + ")"),
              CLASS: new RegExp("^\\.(" + M + ")"),
              TAG: new RegExp("^(" + M + "|[*])"),
              ATTR: new RegExp("^" + W),
              PSEUDO: new RegExp("^" + F),
              CHILD: new RegExp(
                "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                  I +
                  "*(even|odd|(([+-]|)(\\d*)n|)" +
                  I +
                  "*(?:([+-]|)" +
                  I +
                  "*(\\d+)|))" +
                  I +
                  "*\\)|)",
                "i"
              ),
              bool: new RegExp("^(?:" + R + ")$", "i"),
              needsContext: new RegExp(
                "^" +
                  I +
                  "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                  I +
                  "*((?:-\\d)?\\d*)" +
                  I +
                  "*\\)|)(?=[^-]|$)",
                "i"
              ),
            },
            J = /HTML$/i,
            Y = /^(?:input|select|textarea|button)$/i,
            Q = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp(
              "\\\\[\\da-fA-F]{1,6}" + I + "?|\\\\([^\\r\\n\\f])",
              "g"
            ),
            ne = function (e, t) {
              var n = "0x" + e.slice(1) - 65536;
              return (
                t ||
                (n < 0
                  ? String.fromCharCode(n + 65536)
                  : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
              );
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function (e, t) {
              return t
                ? "\0" === e
                  ? "пїЅ"
                  : e.slice(0, -1) +
                    "\\" +
                    e.charCodeAt(e.length - 1).toString(16) +
                    " "
                : "\\" + e;
            },
            oe = function () {
              p();
            },
            ae = xe(
              function (e) {
                return (
                  !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                );
              },
              { dir: "parentNode", next: "legend" }
            );
          try {
            O.apply((N = H.call(w.childNodes)), w.childNodes),
              N[w.childNodes.length].nodeType;
          } catch (e) {
            O = {
              apply: N.length
                ? function (e, t) {
                    q.apply(e, H.call(t));
                  }
                : function (e, t) {
                    for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                    e.length = n - 1;
                  },
            };
          }
          function se(e, t, r, i) {
            var o,
              s,
              l,
              c,
              f,
              h,
              m,
              y = t && t.ownerDocument,
              w = t ? t.nodeType : 9;
            if (
              ((r = r || []),
              "string" != typeof e || !e || (1 !== w && 9 !== w && 11 !== w))
            )
              return r;
            if (!i && (p(t), (t = t || d), g)) {
              if (11 !== w && (f = Z.exec(e)))
                if ((o = f[1])) {
                  if (9 === w) {
                    if (!(l = t.getElementById(o))) return r;
                    if (l.id === o) return r.push(l), r;
                  } else if (
                    y &&
                    (l = y.getElementById(o)) &&
                    b(t, l) &&
                    l.id === o
                  )
                    return r.push(l), r;
                } else {
                  if (f[2]) return O.apply(r, t.getElementsByTagName(e)), r;
                  if (
                    (o = f[3]) &&
                    n.getElementsByClassName &&
                    t.getElementsByClassName
                  )
                    return O.apply(r, t.getElementsByClassName(o)), r;
                }
              if (
                n.qsa &&
                !A[e + " "] &&
                (!v || !v.test(e)) &&
                (1 !== w || "object" !== t.nodeName.toLowerCase())
              ) {
                if (((m = e), (y = t), 1 === w && (U.test(e) || z.test(e)))) {
                  for (
                    ((y = (ee.test(e) && me(t.parentNode)) || t) === t &&
                      n.scope) ||
                      ((c = t.getAttribute("id"))
                        ? (c = c.replace(re, ie))
                        : t.setAttribute("id", (c = x))),
                      s = (h = a(e)).length;
                    s--;

                  )
                    h[s] = (c ? "#" + c : ":scope") + " " + be(h[s]);
                  m = h.join(",");
                }
                try {
                  return O.apply(r, y.querySelectorAll(m)), r;
                } catch (t) {
                  A(e, !0);
                } finally {
                  c === x && t.removeAttribute("id");
                }
              }
            }
            return u(e.replace(_, "$1"), t, r, i);
          }
          function ue() {
            var e = [];
            return function t(n, i) {
              return (
                e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                (t[n + " "] = i)
              );
            };
          }
          function le(e) {
            return (e[x] = !0), e;
          }
          function ce(e) {
            var t = d.createElement("fieldset");
            try {
              return !!e(t);
            } catch (e) {
              return !1;
            } finally {
              t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
          }
          function fe(e, t) {
            for (var n = e.split("|"), i = n.length; i--; )
              r.attrHandle[n[i]] = t;
          }
          function pe(e, t) {
            var n = t && e,
              r =
                n &&
                1 === e.nodeType &&
                1 === t.nodeType &&
                e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
            return e ? 1 : -1;
          }
          function de(e) {
            return function (t) {
              return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
          }
          function he(e) {
            return function (t) {
              var n = t.nodeName.toLowerCase();
              return ("input" === n || "button" === n) && t.type === e;
            };
          }
          function ge(e) {
            return function (t) {
              return "form" in t
                ? t.parentNode && !1 === t.disabled
                  ? "label" in t
                    ? "label" in t.parentNode
                      ? t.parentNode.disabled === e
                      : t.disabled === e
                    : t.isDisabled === e || (t.isDisabled !== !e && ae(t) === e)
                  : t.disabled === e
                : "label" in t && t.disabled === e;
            };
          }
          function ve(e) {
            return le(function (t) {
              return (
                (t = +t),
                le(function (n, r) {
                  for (var i, o = e([], n.length, t), a = o.length; a--; )
                    n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
                })
              );
            });
          }
          function me(e) {
            return e && void 0 !== e.getElementsByTagName && e;
          }
          for (t in ((n = se.support = {}),
          (o = se.isXML =
            function (e) {
              var t = e.namespaceURI,
                n = (e.ownerDocument || e).documentElement;
              return !J.test(t || (n && n.nodeName) || "HTML");
            }),
          (p = se.setDocument =
            function (e) {
              var t,
                i,
                a = e ? e.ownerDocument || e : w;
              return a != d && 9 === a.nodeType && a.documentElement
                ? ((h = (d = a).documentElement),
                  (g = !o(d)),
                  w != d &&
                    (i = d.defaultView) &&
                    i.top !== i &&
                    (i.addEventListener
                      ? i.addEventListener("unload", oe, !1)
                      : i.attachEvent && i.attachEvent("onunload", oe)),
                  (n.scope = ce(function (e) {
                    return (
                      h.appendChild(e).appendChild(d.createElement("div")),
                      void 0 !== e.querySelectorAll &&
                        !e.querySelectorAll(":scope fieldset div").length
                    );
                  })),
                  (n.attributes = ce(function (e) {
                    return (e.className = "i"), !e.getAttribute("className");
                  })),
                  (n.getElementsByTagName = ce(function (e) {
                    return (
                      e.appendChild(d.createComment("")),
                      !e.getElementsByTagName("*").length
                    );
                  })),
                  (n.getElementsByClassName = K.test(d.getElementsByClassName)),
                  (n.getById = ce(function (e) {
                    return (
                      (h.appendChild(e).id = x),
                      !d.getElementsByName || !d.getElementsByName(x).length
                    );
                  })),
                  n.getById
                    ? ((r.filter.ID = function (e) {
                        var t = e.replace(te, ne);
                        return function (e) {
                          return e.getAttribute("id") === t;
                        };
                      }),
                      (r.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && g) {
                          var n = t.getElementById(e);
                          return n ? [n] : [];
                        }
                      }))
                    : ((r.filter.ID = function (e) {
                        var t = e.replace(te, ne);
                        return function (e) {
                          var n =
                            void 0 !== e.getAttributeNode &&
                            e.getAttributeNode("id");
                          return n && n.value === t;
                        };
                      }),
                      (r.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && g) {
                          var n,
                            r,
                            i,
                            o = t.getElementById(e);
                          if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                              return [o];
                            for (
                              i = t.getElementsByName(e), r = 0;
                              (o = i[r++]);

                            )
                              if (
                                (n = o.getAttributeNode("id")) &&
                                n.value === e
                              )
                                return [o];
                          }
                          return [];
                        }
                      })),
                  (r.find.TAG = n.getElementsByTagName
                    ? function (e, t) {
                        return void 0 !== t.getElementsByTagName
                          ? t.getElementsByTagName(e)
                          : n.qsa
                          ? t.querySelectorAll(e)
                          : void 0;
                      }
                    : function (e, t) {
                        var n,
                          r = [],
                          i = 0,
                          o = t.getElementsByTagName(e);
                        if ("*" === e) {
                          for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                          return r;
                        }
                        return o;
                      }),
                  (r.find.CLASS =
                    n.getElementsByClassName &&
                    function (e, t) {
                      if (void 0 !== t.getElementsByClassName && g)
                        return t.getElementsByClassName(e);
                    }),
                  (m = []),
                  (v = []),
                  (n.qsa = K.test(d.querySelectorAll)) &&
                    (ce(function (e) {
                      var t;
                      (h.appendChild(e).innerHTML =
                        "<a id='" +
                        x +
                        "'></a><select id='" +
                        x +
                        "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                        e.querySelectorAll("[msallowcapture^='']").length &&
                          v.push("[*^$]=" + I + "*(?:''|\"\")"),
                        e.querySelectorAll("[selected]").length ||
                          v.push("\\[" + I + "*(?:value|" + R + ")"),
                        e.querySelectorAll("[id~=" + x + "-]").length ||
                          v.push("~="),
                        (t = d.createElement("input")).setAttribute("name", ""),
                        e.appendChild(t),
                        e.querySelectorAll("[name='']").length ||
                          v.push(
                            "\\[" + I + "*name" + I + "*=" + I + "*(?:''|\"\")"
                          ),
                        e.querySelectorAll(":checked").length ||
                          v.push(":checked"),
                        e.querySelectorAll("a#" + x + "+*").length ||
                          v.push(".#.+[+~]"),
                        e.querySelectorAll("\\\f"),
                        v.push("[\\r\\n\\f]");
                    }),
                    ce(function (e) {
                      e.innerHTML =
                        "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                      var t = d.createElement("input");
                      t.setAttribute("type", "hidden"),
                        e.appendChild(t).setAttribute("name", "D"),
                        e.querySelectorAll("[name=d]").length &&
                          v.push("name" + I + "*[*^$|!~]?="),
                        2 !== e.querySelectorAll(":enabled").length &&
                          v.push(":enabled", ":disabled"),
                        (h.appendChild(e).disabled = !0),
                        2 !== e.querySelectorAll(":disabled").length &&
                          v.push(":enabled", ":disabled"),
                        e.querySelectorAll("*,:x"),
                        v.push(",.*:");
                    })),
                  (n.matchesSelector = K.test(
                    (y =
                      h.matches ||
                      h.webkitMatchesSelector ||
                      h.mozMatchesSelector ||
                      h.oMatchesSelector ||
                      h.msMatchesSelector)
                  )) &&
                    ce(function (e) {
                      (n.disconnectedMatch = y.call(e, "*")),
                        y.call(e, "[s!='']:x"),
                        m.push("!=", F);
                    }),
                  (v = v.length && new RegExp(v.join("|"))),
                  (m = m.length && new RegExp(m.join("|"))),
                  (t = K.test(h.compareDocumentPosition)),
                  (b =
                    t || K.test(h.contains)
                      ? function (e, t) {
                          var n = 9 === e.nodeType ? e.documentElement : e,
                            r = t && t.parentNode;
                          return (
                            e === r ||
                            !(
                              !r ||
                              1 !== r.nodeType ||
                              !(n.contains
                                ? n.contains(r)
                                : e.compareDocumentPosition &&
                                  16 & e.compareDocumentPosition(r))
                            )
                          );
                        }
                      : function (e, t) {
                          if (t)
                            for (; (t = t.parentNode); ) if (t === e) return !0;
                          return !1;
                        }),
                  (j = t
                    ? function (e, t) {
                        if (e === t) return (f = !0), 0;
                        var r =
                          !e.compareDocumentPosition -
                          !t.compareDocumentPosition;
                        return (
                          r ||
                          (1 &
                            (r =
                              (e.ownerDocument || e) == (t.ownerDocument || t)
                                ? e.compareDocumentPosition(t)
                                : 1) ||
                          (!n.sortDetached &&
                            t.compareDocumentPosition(e) === r)
                            ? e == d || (e.ownerDocument == w && b(w, e))
                              ? -1
                              : t == d || (t.ownerDocument == w && b(w, t))
                              ? 1
                              : c
                              ? P(c, e) - P(c, t)
                              : 0
                            : 4 & r
                            ? -1
                            : 1)
                        );
                      }
                    : function (e, t) {
                        if (e === t) return (f = !0), 0;
                        var n,
                          r = 0,
                          i = e.parentNode,
                          o = t.parentNode,
                          a = [e],
                          s = [t];
                        if (!i || !o)
                          return e == d
                            ? -1
                            : t == d
                            ? 1
                            : i
                            ? -1
                            : o
                            ? 1
                            : c
                            ? P(c, e) - P(c, t)
                            : 0;
                        if (i === o) return pe(e, t);
                        for (n = e; (n = n.parentNode); ) a.unshift(n);
                        for (n = t; (n = n.parentNode); ) s.unshift(n);
                        for (; a[r] === s[r]; ) r++;
                        return r
                          ? pe(a[r], s[r])
                          : a[r] == w
                          ? -1
                          : s[r] == w
                          ? 1
                          : 0;
                      }),
                  d)
                : d;
            }),
          (se.matches = function (e, t) {
            return se(e, null, null, t);
          }),
          (se.matchesSelector = function (e, t) {
            if (
              (p(e),
              n.matchesSelector &&
                g &&
                !A[t + " "] &&
                (!m || !m.test(t)) &&
                (!v || !v.test(t)))
            )
              try {
                var r = y.call(e, t);
                if (
                  r ||
                  n.disconnectedMatch ||
                  (e.document && 11 !== e.document.nodeType)
                )
                  return r;
              } catch (e) {
                A(t, !0);
              }
            return se(t, d, null, [e]).length > 0;
          }),
          (se.contains = function (e, t) {
            return (e.ownerDocument || e) != d && p(e), b(e, t);
          }),
          (se.attr = function (e, t) {
            (e.ownerDocument || e) != d && p(e);
            var i = r.attrHandle[t.toLowerCase()],
              o =
                i && D.call(r.attrHandle, t.toLowerCase())
                  ? i(e, t, !g)
                  : void 0;
            return void 0 !== o
              ? o
              : n.attributes || !g
              ? e.getAttribute(t)
              : (o = e.getAttributeNode(t)) && o.specified
              ? o.value
              : null;
          }),
          (se.escape = function (e) {
            return (e + "").replace(re, ie);
          }),
          (se.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
          }),
          (se.uniqueSort = function (e) {
            var t,
              r = [],
              i = 0,
              o = 0;
            if (
              ((f = !n.detectDuplicates),
              (c = !n.sortStable && e.slice(0)),
              e.sort(j),
              f)
            ) {
              for (; (t = e[o++]); ) t === e[o] && (i = r.push(o));
              for (; i--; ) e.splice(r[i], 1);
            }
            return (c = null), e;
          }),
          (i = se.getText =
            function (e) {
              var t,
                n = "",
                r = 0,
                o = e.nodeType;
              if (o) {
                if (1 === o || 9 === o || 11 === o) {
                  if ("string" == typeof e.textContent) return e.textContent;
                  for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
                } else if (3 === o || 4 === o) return e.nodeValue;
              } else for (; (t = e[r++]); ) n += i(t);
              return n;
            }),
          ((r = se.selectors =
            {
              cacheLength: 50,
              createPseudo: le,
              match: G,
              attrHandle: {},
              find: {},
              relative: {
                ">": { dir: "parentNode", first: !0 },
                " ": { dir: "parentNode" },
                "+": { dir: "previousSibling", first: !0 },
                "~": { dir: "previousSibling" },
              },
              preFilter: {
                ATTR: function (e) {
                  return (
                    (e[1] = e[1].replace(te, ne)),
                    (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                  );
                },
                CHILD: function (e) {
                  return (
                    (e[1] = e[1].toLowerCase()),
                    "nth" === e[1].slice(0, 3)
                      ? (e[3] || se.error(e[0]),
                        (e[4] = +(e[4]
                          ? e[5] + (e[6] || 1)
                          : 2 * ("even" === e[3] || "odd" === e[3]))),
                        (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                      : e[3] && se.error(e[0]),
                    e
                  );
                },
                PSEUDO: function (e) {
                  var t,
                    n = !e[6] && e[2];
                  return G.CHILD.test(e[0])
                    ? null
                    : (e[3]
                        ? (e[2] = e[4] || e[5] || "")
                        : n &&
                          X.test(n) &&
                          (t = a(n, !0)) &&
                          (t = n.indexOf(")", n.length - t) - n.length) &&
                          ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                      e.slice(0, 3));
                },
              },
              filter: {
                TAG: function (e) {
                  var t = e.replace(te, ne).toLowerCase();
                  return "*" === e
                    ? function () {
                        return !0;
                      }
                    : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                      };
                },
                CLASS: function (e) {
                  var t = k[e + " "];
                  return (
                    t ||
                    ((t = new RegExp("(^|" + I + ")" + e + "(" + I + "|$)")) &&
                      k(e, function (e) {
                        return t.test(
                          ("string" == typeof e.className && e.className) ||
                            (void 0 !== e.getAttribute &&
                              e.getAttribute("class")) ||
                            ""
                        );
                      }))
                  );
                },
                ATTR: function (e, t, n) {
                  return function (r) {
                    var i = se.attr(r, e);
                    return null == i
                      ? "!=" === t
                      : !t ||
                          ((i += ""),
                          "=" === t
                            ? i === n
                            : "!=" === t
                            ? i !== n
                            : "^=" === t
                            ? n && 0 === i.indexOf(n)
                            : "*=" === t
                            ? n && i.indexOf(n) > -1
                            : "$=" === t
                            ? n && i.slice(-n.length) === n
                            : "~=" === t
                            ? (" " + i.replace(B, " ") + " ").indexOf(n) > -1
                            : "|=" === t &&
                              (i === n ||
                                i.slice(0, n.length + 1) === n + "-"));
                  };
                },
                CHILD: function (e, t, n, r, i) {
                  var o = "nth" !== e.slice(0, 3),
                    a = "last" !== e.slice(-4),
                    s = "of-type" === t;
                  return 1 === r && 0 === i
                    ? function (e) {
                        return !!e.parentNode;
                      }
                    : function (t, n, u) {
                        var l,
                          c,
                          f,
                          p,
                          d,
                          h,
                          g = o !== a ? "nextSibling" : "previousSibling",
                          v = t.parentNode,
                          m = s && t.nodeName.toLowerCase(),
                          y = !u && !s,
                          b = !1;
                        if (v) {
                          if (o) {
                            for (; g; ) {
                              for (p = t; (p = p[g]); )
                                if (
                                  s
                                    ? p.nodeName.toLowerCase() === m
                                    : 1 === p.nodeType
                                )
                                  return !1;
                              h = g = "only" === e && !h && "nextSibling";
                            }
                            return !0;
                          }
                          if (
                            ((h = [a ? v.firstChild : v.lastChild]), a && y)
                          ) {
                            for (
                              b =
                                (d =
                                  (l =
                                    (c =
                                      (f = (p = v)[x] || (p[x] = {}))[
                                        p.uniqueID
                                      ] || (f[p.uniqueID] = {}))[e] ||
                                    [])[0] === C && l[1]) && l[2],
                                p = d && v.childNodes[d];
                              (p =
                                (++d && p && p[g]) || (b = d = 0) || h.pop());

                            )
                              if (1 === p.nodeType && ++b && p === t) {
                                c[e] = [C, d, b];
                                break;
                              }
                          } else if (
                            (y &&
                              (b = d =
                                (l =
                                  (c =
                                    (f = (p = t)[x] || (p[x] = {}))[
                                      p.uniqueID
                                    ] || (f[p.uniqueID] = {}))[e] || [])[0] ===
                                  C && l[1]),
                            !1 === b)
                          )
                            for (
                              ;
                              (p =
                                (++d && p && p[g]) || (b = d = 0) || h.pop()) &&
                              ((s
                                ? p.nodeName.toLowerCase() !== m
                                : 1 !== p.nodeType) ||
                                !++b ||
                                (y &&
                                  ((c =
                                    (f = p[x] || (p[x] = {}))[p.uniqueID] ||
                                    (f[p.uniqueID] = {}))[e] = [C, b]),
                                p !== t));

                            );
                          return (b -= i) === r || (b % r == 0 && b / r >= 0);
                        }
                      };
                },
                PSEUDO: function (e, t) {
                  var n,
                    i =
                      r.pseudos[e] ||
                      r.setFilters[e.toLowerCase()] ||
                      se.error("unsupported pseudo: " + e);
                  return i[x]
                    ? i(t)
                    : i.length > 1
                    ? ((n = [e, e, "", t]),
                      r.setFilters.hasOwnProperty(e.toLowerCase())
                        ? le(function (e, n) {
                            for (var r, o = i(e, t), a = o.length; a--; )
                              e[(r = P(e, o[a]))] = !(n[r] = o[a]);
                          })
                        : function (e) {
                            return i(e, 0, n);
                          })
                    : i;
                },
              },
              pseudos: {
                not: le(function (e) {
                  var t = [],
                    n = [],
                    r = s(e.replace(_, "$1"));
                  return r[x]
                    ? le(function (e, t, n, i) {
                        for (var o, a = r(e, null, i, []), s = e.length; s--; )
                          (o = a[s]) && (e[s] = !(t[s] = o));
                      })
                    : function (e, i, o) {
                        return (
                          (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop()
                        );
                      };
                }),
                has: le(function (e) {
                  return function (t) {
                    return se(e, t).length > 0;
                  };
                }),
                contains: le(function (e) {
                  return (
                    (e = e.replace(te, ne)),
                    function (t) {
                      return (t.textContent || i(t)).indexOf(e) > -1;
                    }
                  );
                }),
                lang: le(function (e) {
                  return (
                    V.test(e || "") || se.error("unsupported lang: " + e),
                    (e = e.replace(te, ne).toLowerCase()),
                    function (t) {
                      var n;
                      do {
                        if (
                          (n = g
                            ? t.lang
                            : t.getAttribute("xml:lang") ||
                              t.getAttribute("lang"))
                        )
                          return (
                            (n = n.toLowerCase()) === e ||
                            0 === n.indexOf(e + "-")
                          );
                      } while ((t = t.parentNode) && 1 === t.nodeType);
                      return !1;
                    }
                  );
                }),
                target: function (t) {
                  var n = e.location && e.location.hash;
                  return n && n.slice(1) === t.id;
                },
                root: function (e) {
                  return e === h;
                },
                focus: function (e) {
                  return (
                    e === d.activeElement &&
                    (!d.hasFocus || d.hasFocus()) &&
                    !!(e.type || e.href || ~e.tabIndex)
                  );
                },
                enabled: ge(!1),
                disabled: ge(!0),
                checked: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return (
                    ("input" === t && !!e.checked) ||
                    ("option" === t && !!e.selected)
                  );
                },
                selected: function (e) {
                  return (
                    e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                  );
                },
                empty: function (e) {
                  for (e = e.firstChild; e; e = e.nextSibling)
                    if (e.nodeType < 6) return !1;
                  return !0;
                },
                parent: function (e) {
                  return !r.pseudos.empty(e);
                },
                header: function (e) {
                  return Q.test(e.nodeName);
                },
                input: function (e) {
                  return Y.test(e.nodeName);
                },
                button: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return (
                    ("input" === t && "button" === e.type) || "button" === t
                  );
                },
                text: function (e) {
                  var t;
                  return (
                    "input" === e.nodeName.toLowerCase() &&
                    "text" === e.type &&
                    (null == (t = e.getAttribute("type")) ||
                      "text" === t.toLowerCase())
                  );
                },
                first: ve(function () {
                  return [0];
                }),
                last: ve(function (e, t) {
                  return [t - 1];
                }),
                eq: ve(function (e, t, n) {
                  return [n < 0 ? n + t : n];
                }),
                even: ve(function (e, t) {
                  for (var n = 0; n < t; n += 2) e.push(n);
                  return e;
                }),
                odd: ve(function (e, t) {
                  for (var n = 1; n < t; n += 2) e.push(n);
                  return e;
                }),
                lt: ve(function (e, t, n) {
                  for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; )
                    e.push(r);
                  return e;
                }),
                gt: ve(function (e, t, n) {
                  for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                  return e;
                }),
              },
            }).pseudos.nth = r.pseudos.eq),
          { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            r.pseudos[t] = de(t);
          for (t in { submit: !0, reset: !0 }) r.pseudos[t] = he(t);
          function ye() {}
          function be(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r;
          }
          function xe(e, t, n) {
            var r = t.dir,
              i = t.next,
              o = i || r,
              a = n && "parentNode" === o,
              s = T++;
            return t.first
              ? function (t, n, i) {
                  for (; (t = t[r]); )
                    if (1 === t.nodeType || a) return e(t, n, i);
                  return !1;
                }
              : function (t, n, u) {
                  var l,
                    c,
                    f,
                    p = [C, s];
                  if (u) {
                    for (; (t = t[r]); )
                      if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
                  } else
                    for (; (t = t[r]); )
                      if (1 === t.nodeType || a)
                        if (
                          ((c =
                            (f = t[x] || (t[x] = {}))[t.uniqueID] ||
                            (f[t.uniqueID] = {})),
                          i && i === t.nodeName.toLowerCase())
                        )
                          t = t[r] || t;
                        else {
                          if ((l = c[o]) && l[0] === C && l[1] === s)
                            return (p[2] = l[2]);
                          if (((c[o] = p), (p[2] = e(t, n, u)))) return !0;
                        }
                  return !1;
                };
          }
          function we(e) {
            return e.length > 1
              ? function (t, n, r) {
                  for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
                  return !0;
                }
              : e[0];
          }
          function Ce(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
              (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
            return a;
          }
          function Te(e, t, n, r, i, o) {
            return (
              r && !r[x] && (r = Te(r)),
              i && !i[x] && (i = Te(i, o)),
              le(function (o, a, s, u) {
                var l,
                  c,
                  f,
                  p = [],
                  d = [],
                  h = a.length,
                  g =
                    o ||
                    (function (e, t, n) {
                      for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                      return n;
                    })(t || "*", s.nodeType ? [s] : s, []),
                  v = !e || (!o && t) ? g : Ce(g, p, e, s, u),
                  m = n ? (i || (o ? e : h || r) ? [] : a) : v;
                if ((n && n(v, m, s, u), r))
                  for (l = Ce(m, d), r(l, [], s, u), c = l.length; c--; )
                    (f = l[c]) && (m[d[c]] = !(v[d[c]] = f));
                if (o) {
                  if (i || e) {
                    if (i) {
                      for (l = [], c = m.length; c--; )
                        (f = m[c]) && l.push((v[c] = f));
                      i(null, (m = []), l, u);
                    }
                    for (c = m.length; c--; )
                      (f = m[c]) &&
                        (l = i ? P(o, f) : p[c]) > -1 &&
                        (o[l] = !(a[l] = f));
                  }
                } else (m = Ce(m === a ? m.splice(h, m.length) : m)), i ? i(null, a, m, u) : O.apply(a, m);
              })
            );
          }
          function ke(e) {
            for (
              var t,
                n,
                i,
                o = e.length,
                a = r.relative[e[0].type],
                s = a || r.relative[" "],
                u = a ? 1 : 0,
                c = xe(
                  function (e) {
                    return e === t;
                  },
                  s,
                  !0
                ),
                f = xe(
                  function (e) {
                    return P(t, e) > -1;
                  },
                  s,
                  !0
                ),
                p = [
                  function (e, n, r) {
                    var i =
                      (!a && (r || n !== l)) ||
                      ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                    return (t = null), i;
                  },
                ];
              u < o;
              u++
            )
              if ((n = r.relative[e[u].type])) p = [xe(we(p), n)];
              else {
                if ((n = r.filter[e[u].type].apply(null, e[u].matches))[x]) {
                  for (i = ++u; i < o && !r.relative[e[i].type]; i++);
                  return Te(
                    u > 1 && we(p),
                    u > 1 &&
                      be(
                        e
                          .slice(0, u - 1)
                          .concat({ value: " " === e[u - 2].type ? "*" : "" })
                      ).replace(_, "$1"),
                    n,
                    u < i && ke(e.slice(u, i)),
                    i < o && ke((e = e.slice(i))),
                    i < o && be(e)
                  );
                }
                p.push(n);
              }
            return we(p);
          }
          return (
            (ye.prototype = r.filters = r.pseudos),
            (r.setFilters = new ye()),
            (a = se.tokenize =
              function (e, t) {
                var n,
                  i,
                  o,
                  a,
                  s,
                  u,
                  l,
                  c = S[e + " "];
                if (c) return t ? 0 : c.slice(0);
                for (s = e, u = [], l = r.preFilter; s; ) {
                  for (a in ((n && !(i = $.exec(s))) ||
                    (i && (s = s.slice(i[0].length) || s), u.push((o = []))),
                  (n = !1),
                  (i = z.exec(s)) &&
                    ((n = i.shift()),
                    o.push({ value: n, type: i[0].replace(_, " ") }),
                    (s = s.slice(n.length))),
                  r.filter))
                    !(i = G[a].exec(s)) ||
                      (l[a] && !(i = l[a](i))) ||
                      ((n = i.shift()),
                      o.push({ value: n, type: a, matches: i }),
                      (s = s.slice(n.length)));
                  if (!n) break;
                }
                return t ? s.length : s ? se.error(e) : S(e, u).slice(0);
              }),
            (s = se.compile =
              function (e, t) {
                var n,
                  i = [],
                  o = [],
                  s = E[e + " "];
                if (!s) {
                  for (t || (t = a(e)), n = t.length; n--; )
                    (s = ke(t[n]))[x] ? i.push(s) : o.push(s);
                  (s = E(
                    e,
                    (function (e, t) {
                      var n = t.length > 0,
                        i = e.length > 0,
                        o = function (o, a, s, u, c) {
                          var f,
                            h,
                            v,
                            m = 0,
                            y = "0",
                            b = o && [],
                            x = [],
                            w = l,
                            T = o || (i && r.find.TAG("*", c)),
                            k = (C += null == w ? 1 : Math.random() || 0.1),
                            S = T.length;
                          for (
                            c && (l = a == d || a || c);
                            y !== S && null != (f = T[y]);
                            y++
                          ) {
                            if (i && f) {
                              for (
                                h = 0,
                                  a || f.ownerDocument == d || (p(f), (s = !g));
                                (v = e[h++]);

                              )
                                if (v(f, a || d, s)) {
                                  u.push(f);
                                  break;
                                }
                              c && (C = k);
                            }
                            n && ((f = !v && f) && m--, o && b.push(f));
                          }
                          if (((m += y), n && y !== m)) {
                            for (h = 0; (v = t[h++]); ) v(b, x, a, s);
                            if (o) {
                              if (m > 0)
                                for (; y--; )
                                  b[y] || x[y] || (x[y] = L.call(u));
                              x = Ce(x);
                            }
                            O.apply(u, x),
                              c &&
                                !o &&
                                x.length > 0 &&
                                m + t.length > 1 &&
                                se.uniqueSort(u);
                          }
                          return c && ((C = k), (l = w)), b;
                        };
                      return n ? le(o) : o;
                    })(o, i)
                  )).selector = e;
                }
                return s;
              }),
            (u = se.select =
              function (e, t, n, i) {
                var o,
                  u,
                  l,
                  c,
                  f,
                  p = "function" == typeof e && e,
                  d = !i && a((e = p.selector || e));
                if (((n = n || []), 1 === d.length)) {
                  if (
                    (u = d[0] = d[0].slice(0)).length > 2 &&
                    "ID" === (l = u[0]).type &&
                    9 === t.nodeType &&
                    g &&
                    r.relative[u[1].type]
                  ) {
                    if (
                      !(t = (r.find.ID(l.matches[0].replace(te, ne), t) ||
                        [])[0])
                    )
                      return n;
                    p && (t = t.parentNode),
                      (e = e.slice(u.shift().value.length));
                  }
                  for (
                    o = G.needsContext.test(e) ? 0 : u.length;
                    o-- && ((l = u[o]), !r.relative[(c = l.type)]);

                  )
                    if (
                      (f = r.find[c]) &&
                      (i = f(
                        l.matches[0].replace(te, ne),
                        (ee.test(u[0].type) && me(t.parentNode)) || t
                      ))
                    ) {
                      if ((u.splice(o, 1), !(e = i.length && be(u))))
                        return O.apply(n, i), n;
                      break;
                    }
                }
                return (
                  (p || s(e, d))(
                    i,
                    t,
                    !g,
                    n,
                    !t || (ee.test(e) && me(t.parentNode)) || t
                  ),
                  n
                );
              }),
            (n.sortStable = x.split("").sort(j).join("") === x),
            (n.detectDuplicates = !!f),
            p(),
            (n.sortDetached = ce(function (e) {
              return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
            })),
            ce(function (e) {
              return (
                (e.innerHTML = "<a href='#'></a>"),
                "#" === e.firstChild.getAttribute("href")
              );
            }) ||
              fe("type|href|height|width", function (e, t, n) {
                if (!n)
                  return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
              }),
            (n.attributes &&
              ce(function (e) {
                return (
                  (e.innerHTML = "<input/>"),
                  e.firstChild.setAttribute("value", ""),
                  "" === e.firstChild.getAttribute("value")
                );
              })) ||
              fe("value", function (e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase())
                  return e.defaultValue;
              }),
            ce(function (e) {
              return null == e.getAttribute("disabled");
            }) ||
              fe(R, function (e, t, n) {
                var r;
                if (!n)
                  return !0 === e[t]
                    ? t.toLowerCase()
                    : (r = e.getAttributeNode(t)) && r.specified
                    ? r.value
                    : null;
              }),
            se
          );
        })(n);
      (T.find = S),
        (T.expr = S.selectors),
        (T.expr[":"] = T.expr.pseudos),
        (T.uniqueSort = T.unique = S.uniqueSort),
        (T.text = S.getText),
        (T.isXMLDoc = S.isXML),
        (T.contains = S.contains),
        (T.escapeSelector = S.escape);
      var E = function (e, t, n) {
          for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
              if (i && T(e).is(n)) break;
              r.push(e);
            }
          return r;
        },
        A = function (e, t) {
          for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
          return n;
        },
        j = T.expr.match.needsContext;
      function D(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      }
      var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function L(e, t, n) {
        return m(t)
          ? T.grep(e, function (e, r) {
              return !!t.call(e, r, e) !== n;
            })
          : t.nodeType
          ? T.grep(e, function (e) {
              return (e === t) !== n;
            })
          : "string" != typeof t
          ? T.grep(e, function (e) {
              return c.call(t, e) > -1 !== n;
            })
          : T.filter(t, e, n);
      }
      (T.filter = function (e, t, n) {
        var r = t[0];
        return (
          n && (e = ":not(" + e + ")"),
          1 === t.length && 1 === r.nodeType
            ? T.find.matchesSelector(r, e)
              ? [r]
              : []
            : T.find.matches(
                e,
                T.grep(t, function (e) {
                  return 1 === e.nodeType;
                })
              )
        );
      }),
        T.fn.extend({
          find: function (e) {
            var t,
              n,
              r = this.length,
              i = this;
            if ("string" != typeof e)
              return this.pushStack(
                T(e).filter(function () {
                  for (t = 0; t < r; t++) if (T.contains(i[t], this)) return !0;
                })
              );
            for (n = this.pushStack([]), t = 0; t < r; t++) T.find(e, i[t], n);
            return r > 1 ? T.uniqueSort(n) : n;
          },
          filter: function (e) {
            return this.pushStack(L(this, e || [], !1));
          },
          not: function (e) {
            return this.pushStack(L(this, e || [], !0));
          },
          is: function (e) {
            return !!L(
              this,
              "string" == typeof e && j.test(e) ? T(e) : e || [],
              !1
            ).length;
          },
        });
      var q,
        O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      ((T.fn.init = function (e, t, n) {
        var r, i;
        if (!e) return this;
        if (((n = n || q), "string" == typeof e)) {
          if (
            !(r =
              "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                ? [null, e, null]
                : O.exec(e)) ||
            (!r[1] && t)
          )
            return !t || t.jquery
              ? (t || n).find(e)
              : this.constructor(t).find(e);
          if (r[1]) {
            if (
              ((t = t instanceof T ? t[0] : t),
              T.merge(
                this,
                T.parseHTML(
                  r[1],
                  t && t.nodeType ? t.ownerDocument || t : b,
                  !0
                )
              ),
              N.test(r[1]) && T.isPlainObject(t))
            )
              for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            return this;
          }
          return (
            (i = b.getElementById(r[2])) && ((this[0] = i), (this.length = 1)),
            this
          );
        }
        return e.nodeType
          ? ((this[0] = e), (this.length = 1), this)
          : m(e)
          ? void 0 !== n.ready
            ? n.ready(e)
            : e(T)
          : T.makeArray(e, this);
      }).prototype = T.fn),
        (q = T(b));
      var H = /^(?:parents|prev(?:Until|All))/,
        P = { children: !0, contents: !0, next: !0, prev: !0 };
      function R(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; );
        return e;
      }
      T.fn.extend({
        has: function (e) {
          var t = T(e, this),
            n = t.length;
          return this.filter(function () {
            for (var e = 0; e < n; e++) if (T.contains(this, t[e])) return !0;
          });
        },
        closest: function (e, t) {
          var n,
            r = 0,
            i = this.length,
            o = [],
            a = "string" != typeof e && T(e);
          if (!j.test(e))
            for (; r < i; r++)
              for (n = this[r]; n && n !== t; n = n.parentNode)
                if (
                  n.nodeType < 11 &&
                  (a
                    ? a.index(n) > -1
                    : 1 === n.nodeType && T.find.matchesSelector(n, e))
                ) {
                  o.push(n);
                  break;
                }
          return this.pushStack(o.length > 1 ? T.uniqueSort(o) : o);
        },
        index: function (e) {
          return e
            ? "string" == typeof e
              ? c.call(T(e), this[0])
              : c.call(this, e.jquery ? e[0] : e)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function (e, t) {
          return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))));
        },
        addBack: function (e) {
          return this.add(
            null == e ? this.prevObject : this.prevObject.filter(e)
          );
        },
      }),
        T.each(
          {
            parent: function (e) {
              var t = e.parentNode;
              return t && 11 !== t.nodeType ? t : null;
            },
            parents: function (e) {
              return E(e, "parentNode");
            },
            parentsUntil: function (e, t, n) {
              return E(e, "parentNode", n);
            },
            next: function (e) {
              return R(e, "nextSibling");
            },
            prev: function (e) {
              return R(e, "previousSibling");
            },
            nextAll: function (e) {
              return E(e, "nextSibling");
            },
            prevAll: function (e) {
              return E(e, "previousSibling");
            },
            nextUntil: function (e, t, n) {
              return E(e, "nextSibling", n);
            },
            prevUntil: function (e, t, n) {
              return E(e, "previousSibling", n);
            },
            siblings: function (e) {
              return A((e.parentNode || {}).firstChild, e);
            },
            children: function (e) {
              return A(e.firstChild);
            },
            contents: function (e) {
              return null != e.contentDocument && a(e.contentDocument)
                ? e.contentDocument
                : (D(e, "template") && (e = e.content || e),
                  T.merge([], e.childNodes));
            },
          },
          function (e, t) {
            T.fn[e] = function (n, r) {
              var i = T.map(this, t, n);
              return (
                "Until" !== e.slice(-5) && (r = n),
                r && "string" == typeof r && (i = T.filter(r, i)),
                this.length > 1 &&
                  (P[e] || T.uniqueSort(i), H.test(e) && i.reverse()),
                this.pushStack(i)
              );
            };
          }
        );
      var I = /[^\x20\t\r\n\f]+/g;
      function M(e) {
        return e;
      }
      function W(e) {
        throw e;
      }
      function F(e, t, n, r) {
        var i;
        try {
          e && m((i = e.promise))
            ? i.call(e).done(t).fail(n)
            : e && m((i = e.then))
            ? i.call(e, t, n)
            : t.apply(void 0, [e].slice(r));
        } catch (e) {
          n.apply(void 0, [e]);
        }
      }
      (T.Callbacks = function (e) {
        e =
          "string" == typeof e
            ? (function (e) {
                var t = {};
                return (
                  T.each(e.match(I) || [], function (e, n) {
                    t[n] = !0;
                  }),
                  t
                );
              })(e)
            : T.extend({}, e);
        var t,
          n,
          r,
          i,
          o = [],
          a = [],
          s = -1,
          u = function () {
            for (i = i || e.once, r = t = !0; a.length; s = -1)
              for (n = a.shift(); ++s < o.length; )
                !1 === o[s].apply(n[0], n[1]) &&
                  e.stopOnFalse &&
                  ((s = o.length), (n = !1));
            e.memory || (n = !1), (t = !1), i && (o = n ? [] : "");
          },
          l = {
            add: function () {
              return (
                o &&
                  (n && !t && ((s = o.length - 1), a.push(n)),
                  (function t(n) {
                    T.each(n, function (n, r) {
                      m(r)
                        ? (e.unique && l.has(r)) || o.push(r)
                        : r && r.length && "string" !== C(r) && t(r);
                    });
                  })(arguments),
                  n && !t && u()),
                this
              );
            },
            remove: function () {
              return (
                T.each(arguments, function (e, t) {
                  for (var n; (n = T.inArray(t, o, n)) > -1; )
                    o.splice(n, 1), n <= s && s--;
                }),
                this
              );
            },
            has: function (e) {
              return e ? T.inArray(e, o) > -1 : o.length > 0;
            },
            empty: function () {
              return o && (o = []), this;
            },
            disable: function () {
              return (i = a = []), (o = n = ""), this;
            },
            disabled: function () {
              return !o;
            },
            lock: function () {
              return (i = a = []), n || t || (o = n = ""), this;
            },
            locked: function () {
              return !!i;
            },
            fireWith: function (e, n) {
              return (
                i ||
                  ((n = [e, (n = n || []).slice ? n.slice() : n]),
                  a.push(n),
                  t || u()),
                this
              );
            },
            fire: function () {
              return l.fireWith(this, arguments), this;
            },
            fired: function () {
              return !!r;
            },
          };
        return l;
      }),
        T.extend({
          Deferred: function (e) {
            var t = [
                [
                  "notify",
                  "progress",
                  T.Callbacks("memory"),
                  T.Callbacks("memory"),
                  2,
                ],
                [
                  "resolve",
                  "done",
                  T.Callbacks("once memory"),
                  T.Callbacks("once memory"),
                  0,
                  "resolved",
                ],
                [
                  "reject",
                  "fail",
                  T.Callbacks("once memory"),
                  T.Callbacks("once memory"),
                  1,
                  "rejected",
                ],
              ],
              r = "pending",
              i = {
                state: function () {
                  return r;
                },
                always: function () {
                  return o.done(arguments).fail(arguments), this;
                },
                catch: function (e) {
                  return i.then(null, e);
                },
                pipe: function () {
                  var e = arguments;
                  return T.Deferred(function (n) {
                    T.each(t, function (t, r) {
                      var i = m(e[r[4]]) && e[r[4]];
                      o[r[1]](function () {
                        var e = i && i.apply(this, arguments);
                        e && m(e.promise)
                          ? e
                              .promise()
                              .progress(n.notify)
                              .done(n.resolve)
                              .fail(n.reject)
                          : n[r[0] + "With"](this, i ? [e] : arguments);
                      });
                    }),
                      (e = null);
                  }).promise();
                },
                then: function (e, r, i) {
                  var o = 0;
                  function a(e, t, r, i) {
                    return function () {
                      var s = this,
                        u = arguments,
                        l = function () {
                          var n, l;
                          if (!(e < o)) {
                            if ((n = r.apply(s, u)) === t.promise())
                              throw new TypeError("Thenable self-resolution");
                            (l =
                              n &&
                              ("object" == typeof n ||
                                "function" == typeof n) &&
                              n.then),
                              m(l)
                                ? i
                                  ? l.call(n, a(o, t, M, i), a(o, t, W, i))
                                  : (o++,
                                    l.call(
                                      n,
                                      a(o, t, M, i),
                                      a(o, t, W, i),
                                      a(o, t, M, t.notifyWith)
                                    ))
                                : (r !== M && ((s = void 0), (u = [n])),
                                  (i || t.resolveWith)(s, u));
                          }
                        },
                        c = i
                          ? l
                          : function () {
                              try {
                                l();
                              } catch (n) {
                                T.Deferred.exceptionHook &&
                                  T.Deferred.exceptionHook(n, c.stackTrace),
                                  e + 1 >= o &&
                                    (r !== W && ((s = void 0), (u = [n])),
                                    t.rejectWith(s, u));
                              }
                            };
                      e
                        ? c()
                        : (T.Deferred.getStackHook &&
                            (c.stackTrace = T.Deferred.getStackHook()),
                          n.setTimeout(c));
                    };
                  }
                  return T.Deferred(function (n) {
                    t[0][3].add(a(0, n, m(i) ? i : M, n.notifyWith)),
                      t[1][3].add(a(0, n, m(e) ? e : M)),
                      t[2][3].add(a(0, n, m(r) ? r : W));
                  }).promise();
                },
                promise: function (e) {
                  return null != e ? T.extend(e, i) : i;
                },
              },
              o = {};
            return (
              T.each(t, function (e, n) {
                var a = n[2],
                  s = n[5];
                (i[n[1]] = a.add),
                  s &&
                    a.add(
                      function () {
                        r = s;
                      },
                      t[3 - e][2].disable,
                      t[3 - e][3].disable,
                      t[0][2].lock,
                      t[0][3].lock
                    ),
                  a.add(n[3].fire),
                  (o[n[0]] = function () {
                    return (
                      o[n[0] + "With"](this === o ? void 0 : this, arguments),
                      this
                    );
                  }),
                  (o[n[0] + "With"] = a.fireWith);
              }),
              i.promise(o),
              e && e.call(o, o),
              o
            );
          },
          when: function (e) {
            var t = arguments.length,
              n = t,
              r = Array(n),
              i = s.call(arguments),
              o = T.Deferred(),
              a = function (e) {
                return function (n) {
                  (r[e] = this),
                    (i[e] = arguments.length > 1 ? s.call(arguments) : n),
                    --t || o.resolveWith(r, i);
                };
              };
            if (
              t <= 1 &&
              (F(e, o.done(a(n)).resolve, o.reject, !t),
              "pending" === o.state() || m(i[n] && i[n].then))
            )
              return o.then();
            for (; n--; ) F(i[n], a(n), o.reject);
            return o.promise();
          },
        });
      var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (T.Deferred.exceptionHook = function (e, t) {
        n.console &&
          n.console.warn &&
          e &&
          B.test(e.name) &&
          n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
      }),
        (T.readyException = function (e) {
          n.setTimeout(function () {
            throw e;
          });
        });
      var _ = T.Deferred();
      function $() {
        b.removeEventListener("DOMContentLoaded", $),
          n.removeEventListener("load", $),
          T.ready();
      }
      (T.fn.ready = function (e) {
        return (
          _.then(e).catch(function (e) {
            T.readyException(e);
          }),
          this
        );
      }),
        T.extend({
          isReady: !1,
          readyWait: 1,
          ready: function (e) {
            (!0 === e ? --T.readyWait : T.isReady) ||
              ((T.isReady = !0),
              (!0 !== e && --T.readyWait > 0) || _.resolveWith(b, [T]));
          },
        }),
        (T.ready.then = _.then),
        "complete" === b.readyState ||
        ("loading" !== b.readyState && !b.documentElement.doScroll)
          ? n.setTimeout(T.ready)
          : (b.addEventListener("DOMContentLoaded", $),
            n.addEventListener("load", $));
      var z = function (e, t, n, r, i, o, a) {
          var s = 0,
            u = e.length,
            l = null == n;
          if ("object" === C(n))
            for (s in ((i = !0), n)) z(e, t, s, n[s], !0, o, a);
          else if (
            void 0 !== r &&
            ((i = !0),
            m(r) || (a = !0),
            l &&
              (a
                ? (t.call(e, r), (t = null))
                : ((l = t),
                  (t = function (e, t, n) {
                    return l.call(T(e), n);
                  }))),
            t)
          )
            for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
          return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
        },
        U = /^-ms-/,
        X = /-([a-z])/g;
      function V(e, t) {
        return t.toUpperCase();
      }
      function G(e) {
        return e.replace(U, "ms-").replace(X, V);
      }
      var J = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
      };
      function Y() {
        this.expando = T.expando + Y.uid++;
      }
      (Y.uid = 1),
        (Y.prototype = {
          cache: function (e) {
            var t = e[this.expando];
            return (
              t ||
                ((t = {}),
                J(e) &&
                  (e.nodeType
                    ? (e[this.expando] = t)
                    : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0,
                      }))),
              t
            );
          },
          set: function (e, t, n) {
            var r,
              i = this.cache(e);
            if ("string" == typeof t) i[G(t)] = n;
            else for (r in t) i[G(r)] = t[r];
            return i;
          },
          get: function (e, t) {
            return void 0 === t
              ? this.cache(e)
              : e[this.expando] && e[this.expando][G(t)];
          },
          access: function (e, t, n) {
            return void 0 === t || (t && "string" == typeof t && void 0 === n)
              ? this.get(e, t)
              : (this.set(e, t, n), void 0 !== n ? n : t);
          },
          remove: function (e, t) {
            var n,
              r = e[this.expando];
            if (void 0 !== r) {
              if (void 0 !== t) {
                n = (t = Array.isArray(t)
                  ? t.map(G)
                  : (t = G(t)) in r
                  ? [t]
                  : t.match(I) || []).length;
                for (; n--; ) delete r[t[n]];
              }
              (void 0 === t || T.isEmptyObject(r)) &&
                (e.nodeType
                  ? (e[this.expando] = void 0)
                  : delete e[this.expando]);
            }
          },
          hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !T.isEmptyObject(t);
          },
        });
      var Q = new Y(),
        K = new Y(),
        Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ee = /[A-Z]/g;
      function te(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
          if (
            ((r = "data-" + t.replace(ee, "-$&").toLowerCase()),
            "string" == typeof (n = e.getAttribute(r)))
          ) {
            try {
              n = (function (e) {
                return (
                  "true" === e ||
                  ("false" !== e &&
                    ("null" === e
                      ? null
                      : e === +e + ""
                      ? +e
                      : Z.test(e)
                      ? JSON.parse(e)
                      : e))
                );
              })(n);
            } catch (e) {}
            K.set(e, t, n);
          } else n = void 0;
        return n;
      }
      T.extend({
        hasData: function (e) {
          return K.hasData(e) || Q.hasData(e);
        },
        data: function (e, t, n) {
          return K.access(e, t, n);
        },
        removeData: function (e, t) {
          K.remove(e, t);
        },
        _data: function (e, t, n) {
          return Q.access(e, t, n);
        },
        _removeData: function (e, t) {
          Q.remove(e, t);
        },
      }),
        T.fn.extend({
          data: function (e, t) {
            var n,
              r,
              i,
              o = this[0],
              a = o && o.attributes;
            if (void 0 === e) {
              if (
                this.length &&
                ((i = K.get(o)), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))
              ) {
                for (n = a.length; n--; )
                  a[n] &&
                    0 === (r = a[n].name).indexOf("data-") &&
                    ((r = G(r.slice(5))), te(o, r, i[r]));
                Q.set(o, "hasDataAttrs", !0);
              }
              return i;
            }
            return "object" == typeof e
              ? this.each(function () {
                  K.set(this, e);
                })
              : z(
                  this,
                  function (t) {
                    var n;
                    if (o && void 0 === t)
                      return void 0 !== (n = K.get(o, e)) ||
                        void 0 !== (n = te(o, e))
                        ? n
                        : void 0;
                    this.each(function () {
                      K.set(this, e, t);
                    });
                  },
                  null,
                  t,
                  arguments.length > 1,
                  null,
                  !0
                );
          },
          removeData: function (e) {
            return this.each(function () {
              K.remove(this, e);
            });
          },
        }),
        T.extend({
          queue: function (e, t, n) {
            var r;
            if (e)
              return (
                (t = (t || "fx") + "queue"),
                (r = Q.get(e, t)),
                n &&
                  (!r || Array.isArray(n)
                    ? (r = Q.access(e, t, T.makeArray(n)))
                    : r.push(n)),
                r || []
              );
          },
          dequeue: function (e, t) {
            t = t || "fx";
            var n = T.queue(e, t),
              r = n.length,
              i = n.shift(),
              o = T._queueHooks(e, t);
            "inprogress" === i && ((i = n.shift()), r--),
              i &&
                ("fx" === t && n.unshift("inprogress"),
                delete o.stop,
                i.call(
                  e,
                  function () {
                    T.dequeue(e, t);
                  },
                  o
                )),
              !r && o && o.empty.fire();
          },
          _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return (
              Q.get(e, n) ||
              Q.access(e, n, {
                empty: T.Callbacks("once memory").add(function () {
                  Q.remove(e, [t + "queue", n]);
                }),
              })
            );
          },
        }),
        T.fn.extend({
          queue: function (e, t) {
            var n = 2;
            return (
              "string" != typeof e && ((t = e), (e = "fx"), n--),
              arguments.length < n
                ? T.queue(this[0], e)
                : void 0 === t
                ? this
                : this.each(function () {
                    var n = T.queue(this, e, t);
                    T._queueHooks(this, e),
                      "fx" === e && "inprogress" !== n[0] && T.dequeue(this, e);
                  })
            );
          },
          dequeue: function (e) {
            return this.each(function () {
              T.dequeue(this, e);
            });
          },
          clearQueue: function (e) {
            return this.queue(e || "fx", []);
          },
          promise: function (e, t) {
            var n,
              r = 1,
              i = T.Deferred(),
              o = this,
              a = this.length,
              s = function () {
                --r || i.resolveWith(o, [o]);
              };
            for (
              "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
              a--;

            )
              (n = Q.get(o[a], e + "queueHooks")) &&
                n.empty &&
                (r++, n.empty.add(s));
            return s(), i.promise(t);
          },
        });
      var ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        re = new RegExp("^(?:([+-])=|)(" + ne + ")([a-z%]*)$", "i"),
        ie = ["Top", "Right", "Bottom", "Left"],
        oe = b.documentElement,
        ae = function (e) {
          return T.contains(e.ownerDocument, e);
        },
        se = { composed: !0 };
      oe.getRootNode &&
        (ae = function (e) {
          return (
            T.contains(e.ownerDocument, e) ||
            e.getRootNode(se) === e.ownerDocument
          );
        });
      var ue = function (e, t) {
        return (
          "none" === (e = t || e).style.display ||
          ("" === e.style.display && ae(e) && "none" === T.css(e, "display"))
        );
      };
      function le(e, t, n, r) {
        var i,
          o,
          a = 20,
          s = r
            ? function () {
                return r.cur();
              }
            : function () {
                return T.css(e, t, "");
              },
          u = s(),
          l = (n && n[3]) || (T.cssNumber[t] ? "" : "px"),
          c =
            e.nodeType &&
            (T.cssNumber[t] || ("px" !== l && +u)) &&
            re.exec(T.css(e, t));
        if (c && c[3] !== l) {
          for (u /= 2, l = l || c[3], c = +u || 1; a--; )
            T.style(e, t, c + l),
              (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
              (c /= o);
          (c *= 2), T.style(e, t, c + l), (n = n || []);
        }
        return (
          n &&
            ((c = +c || +u || 0),
            (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
            r && ((r.unit = l), (r.start = c), (r.end = i))),
          i
        );
      }
      var ce = {};
      function fe(e) {
        var t,
          n = e.ownerDocument,
          r = e.nodeName,
          i = ce[r];
        return (
          i ||
          ((t = n.body.appendChild(n.createElement(r))),
          (i = T.css(t, "display")),
          t.parentNode.removeChild(t),
          "none" === i && (i = "block"),
          (ce[r] = i),
          i)
        );
      }
      function pe(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
          (r = e[o]).style &&
            ((n = r.style.display),
            t
              ? ("none" === n &&
                  ((i[o] = Q.get(r, "display") || null),
                  i[o] || (r.style.display = "")),
                "" === r.style.display && ue(r) && (i[o] = fe(r)))
              : "none" !== n && ((i[o] = "none"), Q.set(r, "display", n)));
        for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
        return e;
      }
      T.fn.extend({
        show: function () {
          return pe(this, !0);
        },
        hide: function () {
          return pe(this);
        },
        toggle: function (e) {
          return "boolean" == typeof e
            ? e
              ? this.show()
              : this.hide()
            : this.each(function () {
                ue(this) ? T(this).show() : T(this).hide();
              });
        },
      });
      var de,
        he,
        ge = /^(?:checkbox|radio)$/i,
        ve = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        me = /^$|^module$|\/(?:java|ecma)script/i;
      (de = b.createDocumentFragment().appendChild(b.createElement("div"))),
        (he = b.createElement("input")).setAttribute("type", "radio"),
        he.setAttribute("checked", "checked"),
        he.setAttribute("name", "t"),
        de.appendChild(he),
        (v.checkClone = de.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (de.innerHTML = "<textarea>x</textarea>"),
        (v.noCloneChecked = !!de.cloneNode(!0).lastChild.defaultValue),
        (de.innerHTML = "<option></option>"),
        (v.option = !!de.lastChild);
      var ye = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""],
      };
      function be(e, t) {
        var n;
        return (
          (n =
            void 0 !== e.getElementsByTagName
              ? e.getElementsByTagName(t || "*")
              : void 0 !== e.querySelectorAll
              ? e.querySelectorAll(t || "*")
              : []),
          void 0 === t || (t && D(e, t)) ? T.merge([e], n) : n
        );
      }
      function xe(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
          Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"));
      }
      (ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead),
        (ye.th = ye.td),
        v.option ||
          (ye.optgroup = ye.option =
            [1, "<select multiple='multiple'>", "</select>"]);
      var we = /<|&#?\w+;/;
      function Ce(e, t, n, r, i) {
        for (
          var o,
            a,
            s,
            u,
            l,
            c,
            f = t.createDocumentFragment(),
            p = [],
            d = 0,
            h = e.length;
          d < h;
          d++
        )
          if ((o = e[d]) || 0 === o)
            if ("object" === C(o)) T.merge(p, o.nodeType ? [o] : o);
            else if (we.test(o)) {
              for (
                a = a || f.appendChild(t.createElement("div")),
                  s = (ve.exec(o) || ["", ""])[1].toLowerCase(),
                  u = ye[s] || ye._default,
                  a.innerHTML = u[1] + T.htmlPrefilter(o) + u[2],
                  c = u[0];
                c--;

              )
                a = a.lastChild;
              T.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
            } else p.push(t.createTextNode(o));
        for (f.textContent = "", d = 0; (o = p[d++]); )
          if (r && T.inArray(o, r) > -1) i && i.push(o);
          else if (
            ((l = ae(o)), (a = be(f.appendChild(o), "script")), l && xe(a), n)
          )
            for (c = 0; (o = a[c++]); ) me.test(o.type || "") && n.push(o);
        return f;
      }
      var Te = /^key/,
        ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Se = /^([^.]*)(?:\.(.+)|)/;
      function Ee() {
        return !0;
      }
      function Ae() {
        return !1;
      }
      function je(e, t) {
        return (
          (e ===
            (function () {
              try {
                return b.activeElement;
              } catch (e) {}
            })()) ==
          ("focus" === t)
        );
      }
      function De(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
          for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
            De(e, s, n, r, t[s], o);
          return e;
        }
        if (
          (null == r && null == i
            ? ((i = n), (r = n = void 0))
            : null == i &&
              ("string" == typeof n
                ? ((i = r), (r = void 0))
                : ((i = r), (r = n), (n = void 0))),
          !1 === i)
        )
          i = Ae;
        else if (!i) return e;
        return (
          1 === o &&
            ((a = i),
            ((i = function (e) {
              return T().off(e), a.apply(this, arguments);
            }).guid = a.guid || (a.guid = T.guid++))),
          e.each(function () {
            T.event.add(this, t, i, r, n);
          })
        );
      }
      function Ne(e, t, n) {
        n
          ? (Q.set(e, t, !1),
            T.event.add(e, t, {
              namespace: !1,
              handler: function (e) {
                var r,
                  i,
                  o = Q.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                  if (o.length)
                    (T.event.special[t] || {}).delegateType &&
                      e.stopPropagation();
                  else if (
                    ((o = s.call(arguments)),
                    Q.set(this, t, o),
                    (r = n(this, t)),
                    this[t](),
                    o !== (i = Q.get(this, t)) || r
                      ? Q.set(this, t, !1)
                      : (i = {}),
                    o !== i)
                  )
                    return (
                      e.stopImmediatePropagation(), e.preventDefault(), i.value
                    );
                } else
                  o.length &&
                    (Q.set(this, t, {
                      value: T.event.trigger(
                        T.extend(o[0], T.Event.prototype),
                        o.slice(1),
                        this
                      ),
                    }),
                    e.stopImmediatePropagation());
              },
            }))
          : void 0 === Q.get(e, t) && T.event.add(e, t, Ee);
      }
      (T.event = {
        global: {},
        add: function (e, t, n, r, i) {
          var o,
            a,
            s,
            u,
            l,
            c,
            f,
            p,
            d,
            h,
            g,
            v = Q.get(e);
          if (J(e))
            for (
              n.handler && ((n = (o = n).handler), (i = o.selector)),
                i && T.find.matchesSelector(oe, i),
                n.guid || (n.guid = T.guid++),
                (u = v.events) || (u = v.events = Object.create(null)),
                (a = v.handle) ||
                  (a = v.handle =
                    function (t) {
                      return void 0 !== T && T.event.triggered !== t.type
                        ? T.event.dispatch.apply(e, arguments)
                        : void 0;
                    }),
                l = (t = (t || "").match(I) || [""]).length;
              l--;

            )
              (d = g = (s = Se.exec(t[l]) || [])[1]),
                (h = (s[2] || "").split(".").sort()),
                d &&
                  ((f = T.event.special[d] || {}),
                  (d = (i ? f.delegateType : f.bindType) || d),
                  (f = T.event.special[d] || {}),
                  (c = T.extend(
                    {
                      type: d,
                      origType: g,
                      data: r,
                      handler: n,
                      guid: n.guid,
                      selector: i,
                      needsContext: i && T.expr.match.needsContext.test(i),
                      namespace: h.join("."),
                    },
                    o
                  )),
                  (p = u[d]) ||
                    (((p = u[d] = []).delegateCount = 0),
                    (f.setup && !1 !== f.setup.call(e, r, h, a)) ||
                      (e.addEventListener && e.addEventListener(d, a))),
                  f.add &&
                    (f.add.call(e, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                  i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                  (T.event.global[d] = !0));
        },
        remove: function (e, t, n, r, i) {
          var o,
            a,
            s,
            u,
            l,
            c,
            f,
            p,
            d,
            h,
            g,
            v = Q.hasData(e) && Q.get(e);
          if (v && (u = v.events)) {
            for (l = (t = (t || "").match(I) || [""]).length; l--; )
              if (
                ((d = g = (s = Se.exec(t[l]) || [])[1]),
                (h = (s[2] || "").split(".").sort()),
                d)
              ) {
                for (
                  f = T.event.special[d] || {},
                    p = u[(d = (r ? f.delegateType : f.bindType) || d)] || [],
                    s =
                      s[2] &&
                      new RegExp(
                        "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      ),
                    a = o = p.length;
                  o--;

                )
                  (c = p[o]),
                    (!i && g !== c.origType) ||
                      (n && n.guid !== c.guid) ||
                      (s && !s.test(c.namespace)) ||
                      (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                      (p.splice(o, 1),
                      c.selector && p.delegateCount--,
                      f.remove && f.remove.call(e, c));
                a &&
                  !p.length &&
                  ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                    T.removeEvent(e, d, v.handle),
                  delete u[d]);
              } else for (d in u) T.event.remove(e, d + t[l], n, r, !0);
            T.isEmptyObject(u) && Q.remove(e, "handle events");
          }
        },
        dispatch: function (e) {
          var t,
            n,
            r,
            i,
            o,
            a,
            s = new Array(arguments.length),
            u = T.event.fix(e),
            l = (Q.get(this, "events") || Object.create(null))[u.type] || [],
            c = T.event.special[u.type] || {};
          for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
          if (
            ((u.delegateTarget = this),
            !c.preDispatch || !1 !== c.preDispatch.call(this, u))
          ) {
            for (
              a = T.event.handlers.call(this, u, l), t = 0;
              (i = a[t++]) && !u.isPropagationStopped();

            )
              for (
                u.currentTarget = i.elem, n = 0;
                (o = i.handlers[n++]) && !u.isImmediatePropagationStopped();

              )
                (u.rnamespace &&
                  !1 !== o.namespace &&
                  !u.rnamespace.test(o.namespace)) ||
                  ((u.handleObj = o),
                  (u.data = o.data),
                  void 0 !==
                    (r = (
                      (T.event.special[o.origType] || {}).handle || o.handler
                    ).apply(i.elem, s)) &&
                    !1 === (u.result = r) &&
                    (u.preventDefault(), u.stopPropagation()));
            return c.postDispatch && c.postDispatch.call(this, u), u.result;
          }
        },
        handlers: function (e, t) {
          var n,
            r,
            i,
            o,
            a,
            s = [],
            u = t.delegateCount,
            l = e.target;
          if (u && l.nodeType && !("click" === e.type && e.button >= 1))
            for (; l !== this; l = l.parentNode || this)
              if (
                1 === l.nodeType &&
                ("click" !== e.type || !0 !== l.disabled)
              ) {
                for (o = [], a = {}, n = 0; n < u; n++)
                  void 0 === a[(i = (r = t[n]).selector + " ")] &&
                    (a[i] = r.needsContext
                      ? T(i, this).index(l) > -1
                      : T.find(i, this, null, [l]).length),
                    a[i] && o.push(r);
                o.length && s.push({ elem: l, handlers: o });
              }
          return (
            (l = this),
            u < t.length && s.push({ elem: l, handlers: t.slice(u) }),
            s
          );
        },
        addProp: function (e, t) {
          Object.defineProperty(T.Event.prototype, e, {
            enumerable: !0,
            configurable: !0,
            get: m(t)
              ? function () {
                  if (this.originalEvent) return t(this.originalEvent);
                }
              : function () {
                  if (this.originalEvent) return this.originalEvent[e];
                },
            set: function (t) {
              Object.defineProperty(this, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              });
            },
          });
        },
        fix: function (e) {
          return e[T.expando] ? e : new T.Event(e);
        },
        special: {
          load: { noBubble: !0 },
          click: {
            setup: function (e) {
              var t = this || e;
              return (
                ge.test(t.type) &&
                  t.click &&
                  D(t, "input") &&
                  Ne(t, "click", Ee),
                !1
              );
            },
            trigger: function (e) {
              var t = this || e;
              return (
                ge.test(t.type) && t.click && D(t, "input") && Ne(t, "click"),
                !0
              );
            },
            _default: function (e) {
              var t = e.target;
              return (
                (ge.test(t.type) &&
                  t.click &&
                  D(t, "input") &&
                  Q.get(t, "click")) ||
                D(t, "a")
              );
            },
          },
          beforeunload: {
            postDispatch: function (e) {
              void 0 !== e.result &&
                e.originalEvent &&
                (e.originalEvent.returnValue = e.result);
            },
          },
        },
      }),
        (T.removeEvent = function (e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n);
        }),
        (T.Event = function (e, t) {
          if (!(this instanceof T.Event)) return new T.Event(e, t);
          e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (void 0 === e.defaultPrevented && !1 === e.returnValue)
                  ? Ee
                  : Ae),
              (this.target =
                e.target && 3 === e.target.nodeType
                  ? e.target.parentNode
                  : e.target),
              (this.currentTarget = e.currentTarget),
              (this.relatedTarget = e.relatedTarget))
            : (this.type = e),
            t && T.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || Date.now()),
            (this[T.expando] = !0);
        }),
        (T.Event.prototype = {
          constructor: T.Event,
          isDefaultPrevented: Ae,
          isPropagationStopped: Ae,
          isImmediatePropagationStopped: Ae,
          isSimulated: !1,
          preventDefault: function () {
            var e = this.originalEvent;
            (this.isDefaultPrevented = Ee),
              e && !this.isSimulated && e.preventDefault();
          },
          stopPropagation: function () {
            var e = this.originalEvent;
            (this.isPropagationStopped = Ee),
              e && !this.isSimulated && e.stopPropagation();
          },
          stopImmediatePropagation: function () {
            var e = this.originalEvent;
            (this.isImmediatePropagationStopped = Ee),
              e && !this.isSimulated && e.stopImmediatePropagation(),
              this.stopPropagation();
          },
        }),
        T.each(
          {
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function (e) {
              var t = e.button;
              return null == e.which && Te.test(e.type)
                ? null != e.charCode
                  ? e.charCode
                  : e.keyCode
                : !e.which && void 0 !== t && ke.test(e.type)
                ? 1 & t
                  ? 1
                  : 2 & t
                  ? 3
                  : 4 & t
                  ? 2
                  : 0
                : e.which;
            },
          },
          T.event.addProp
        ),
        T.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
          T.event.special[e] = {
            setup: function () {
              return Ne(this, e, je), !1;
            },
            trigger: function () {
              return Ne(this, e), !0;
            },
            delegateType: t,
          };
        }),
        T.each(
          {
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout",
          },
          function (e, t) {
            T.event.special[e] = {
              delegateType: t,
              bindType: t,
              handle: function (e) {
                var n,
                  r = this,
                  i = e.relatedTarget,
                  o = e.handleObj;
                return (
                  (i && (i === r || T.contains(r, i))) ||
                    ((e.type = o.origType),
                    (n = o.handler.apply(this, arguments)),
                    (e.type = t)),
                  n
                );
              },
            };
          }
        ),
        T.fn.extend({
          on: function (e, t, n, r) {
            return De(this, e, t, n, r);
          },
          one: function (e, t, n, r) {
            return De(this, e, t, n, r, 1);
          },
          off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
              return (
                (r = e.handleObj),
                T(e.delegateTarget).off(
                  r.namespace ? r.origType + "." + r.namespace : r.origType,
                  r.selector,
                  r.handler
                ),
                this
              );
            if ("object" == typeof e) {
              for (i in e) this.off(i, t, e[i]);
              return this;
            }
            return (
              (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
              !1 === n && (n = Ae),
              this.each(function () {
                T.event.remove(this, e, n, t);
              })
            );
          },
        });
      var Le = /<script|<style|<link/i,
        qe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      function He(e, t) {
        return (
          (D(e, "table") &&
            D(11 !== t.nodeType ? t : t.firstChild, "tr") &&
            T(e).children("tbody")[0]) ||
          e
        );
      }
      function Pe(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
      }
      function Re(e) {
        return (
          "true/" === (e.type || "").slice(0, 5)
            ? (e.type = e.type.slice(5))
            : e.removeAttribute("type"),
          e
        );
      }
      function Ie(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
          if (Q.hasData(e) && (s = Q.get(e).events))
            for (i in (Q.remove(t, "handle events"), s))
              for (n = 0, r = s[i].length; n < r; n++)
                T.event.add(t, i, s[i][n]);
          K.hasData(e) &&
            ((o = K.access(e)), (a = T.extend({}, o)), K.set(t, a));
        }
      }
      function Me(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && ge.test(e.type)
          ? (t.checked = e.checked)
          : ("input" !== n && "textarea" !== n) ||
            (t.defaultValue = e.defaultValue);
      }
      function We(e, t, n, r) {
        t = u(t);
        var i,
          o,
          a,
          s,
          l,
          c,
          f = 0,
          p = e.length,
          d = p - 1,
          h = t[0],
          g = m(h);
        if (g || (p > 1 && "string" == typeof h && !v.checkClone && qe.test(h)))
          return e.each(function (i) {
            var o = e.eq(i);
            g && (t[0] = h.call(this, i, o.html())), We(o, t, n, r);
          });
        if (
          p &&
          ((o = (i = Ce(t, e[0].ownerDocument, !1, e, r)).firstChild),
          1 === i.childNodes.length && (i = o),
          o || r)
        ) {
          for (s = (a = T.map(be(i, "script"), Pe)).length; f < p; f++)
            (l = i),
              f !== d &&
                ((l = T.clone(l, !0, !0)), s && T.merge(a, be(l, "script"))),
              n.call(e[f], l, f);
          if (s)
            for (
              c = a[a.length - 1].ownerDocument, T.map(a, Re), f = 0;
              f < s;
              f++
            )
              (l = a[f]),
                me.test(l.type || "") &&
                  !Q.access(l, "globalEval") &&
                  T.contains(c, l) &&
                  (l.src && "module" !== (l.type || "").toLowerCase()
                    ? T._evalUrl &&
                      !l.noModule &&
                      T._evalUrl(
                        l.src,
                        { nonce: l.nonce || l.getAttribute("nonce") },
                        c
                      )
                    : w(l.textContent.replace(Oe, ""), l, c));
        }
        return e;
      }
      function Fe(e, t, n) {
        for (var r, i = t ? T.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
          n || 1 !== r.nodeType || T.cleanData(be(r)),
            r.parentNode &&
              (n && ae(r) && xe(be(r, "script")), r.parentNode.removeChild(r));
        return e;
      }
      T.extend({
        htmlPrefilter: function (e) {
          return e;
        },
        clone: function (e, t, n) {
          var r,
            i,
            o,
            a,
            s = e.cloneNode(!0),
            u = ae(e);
          if (
            !(
              v.noCloneChecked ||
              (1 !== e.nodeType && 11 !== e.nodeType) ||
              T.isXMLDoc(e)
            )
          )
            for (a = be(s), r = 0, i = (o = be(e)).length; r < i; r++)
              Me(o[r], a[r]);
          if (t)
            if (n)
              for (
                o = o || be(e), a = a || be(s), r = 0, i = o.length;
                r < i;
                r++
              )
                Ie(o[r], a[r]);
            else Ie(e, s);
          return (
            (a = be(s, "script")).length > 0 && xe(a, !u && be(e, "script")), s
          );
        },
        cleanData: function (e) {
          for (
            var t, n, r, i = T.event.special, o = 0;
            void 0 !== (n = e[o]);
            o++
          )
            if (J(n)) {
              if ((t = n[Q.expando])) {
                if (t.events)
                  for (r in t.events)
                    i[r] ? T.event.remove(n, r) : T.removeEvent(n, r, t.handle);
                n[Q.expando] = void 0;
              }
              n[K.expando] && (n[K.expando] = void 0);
            }
        },
      }),
        T.fn.extend({
          detach: function (e) {
            return Fe(this, e, !0);
          },
          remove: function (e) {
            return Fe(this, e);
          },
          text: function (e) {
            return z(
              this,
              function (e) {
                return void 0 === e
                  ? T.text(this)
                  : this.empty().each(function () {
                      (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        (this.textContent = e);
                    });
              },
              null,
              e,
              arguments.length
            );
          },
          append: function () {
            return We(this, arguments, function (e) {
              (1 !== this.nodeType &&
                11 !== this.nodeType &&
                9 !== this.nodeType) ||
                He(this, e).appendChild(e);
            });
          },
          prepend: function () {
            return We(this, arguments, function (e) {
              if (
                1 === this.nodeType ||
                11 === this.nodeType ||
                9 === this.nodeType
              ) {
                var t = He(this, e);
                t.insertBefore(e, t.firstChild);
              }
            });
          },
          before: function () {
            return We(this, arguments, function (e) {
              this.parentNode && this.parentNode.insertBefore(e, this);
            });
          },
          after: function () {
            return We(this, arguments, function (e) {
              this.parentNode &&
                this.parentNode.insertBefore(e, this.nextSibling);
            });
          },
          empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++)
              1 === e.nodeType &&
                (T.cleanData(be(e, !1)), (e.textContent = ""));
            return this;
          },
          clone: function (e, t) {
            return (
              (e = null != e && e),
              (t = null == t ? e : t),
              this.map(function () {
                return T.clone(this, e, t);
              })
            );
          },
          html: function (e) {
            return z(
              this,
              function (e) {
                var t = this[0] || {},
                  n = 0,
                  r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if (
                  "string" == typeof e &&
                  !Le.test(e) &&
                  !ye[(ve.exec(e) || ["", ""])[1].toLowerCase()]
                ) {
                  e = T.htmlPrefilter(e);
                  try {
                    for (; n < r; n++)
                      1 === (t = this[n] || {}).nodeType &&
                        (T.cleanData(be(t, !1)), (t.innerHTML = e));
                    t = 0;
                  } catch (e) {}
                }
                t && this.empty().append(e);
              },
              null,
              e,
              arguments.length
            );
          },
          replaceWith: function () {
            var e = [];
            return We(
              this,
              arguments,
              function (t) {
                var n = this.parentNode;
                T.inArray(this, e) < 0 &&
                  (T.cleanData(be(this)), n && n.replaceChild(t, this));
              },
              e
            );
          },
        }),
        T.each(
          {
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith",
          },
          function (e, t) {
            T.fn[e] = function (e) {
              for (
                var n, r = [], i = T(e), o = i.length - 1, a = 0;
                a <= o;
                a++
              )
                (n = a === o ? this : this.clone(!0)),
                  T(i[a])[t](n),
                  l.apply(r, n.get());
              return this.pushStack(r);
            };
          }
        );
      var Be = new RegExp("^(" + ne + ")(?!px)[a-z%]+$", "i"),
        _e = function (e) {
          var t = e.ownerDocument.defaultView;
          return (t && t.opener) || (t = n), t.getComputedStyle(e);
        },
        $e = function (e, t, n) {
          var r,
            i,
            o = {};
          for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
          for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
          return r;
        },
        ze = new RegExp(ie.join("|"), "i");
      function Ue(e, t, n) {
        var r,
          i,
          o,
          a,
          s = e.style;
        return (
          (n = n || _e(e)) &&
            ("" !== (a = n.getPropertyValue(t) || n[t]) ||
              ae(e) ||
              (a = T.style(e, t)),
            !v.pixelBoxStyles() &&
              Be.test(a) &&
              ze.test(t) &&
              ((r = s.width),
              (i = s.minWidth),
              (o = s.maxWidth),
              (s.minWidth = s.maxWidth = s.width = a),
              (a = n.width),
              (s.width = r),
              (s.minWidth = i),
              (s.maxWidth = o))),
          void 0 !== a ? a + "" : a
        );
      }
      function Xe(e, t) {
        return {
          get: function () {
            if (!e()) return (this.get = t).apply(this, arguments);
            delete this.get;
          },
        };
      }
      !(function () {
        function e() {
          if (c) {
            (l.style.cssText =
              "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
              (c.style.cssText =
                "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
              oe.appendChild(l).appendChild(c);
            var e = n.getComputedStyle(c);
            (r = "1%" !== e.top),
              (u = 12 === t(e.marginLeft)),
              (c.style.right = "60%"),
              (a = 36 === t(e.right)),
              (i = 36 === t(e.width)),
              (c.style.position = "absolute"),
              (o = 12 === t(c.offsetWidth / 3)),
              oe.removeChild(l),
              (c = null);
          }
        }
        function t(e) {
          return Math.round(parseFloat(e));
        }
        var r,
          i,
          o,
          a,
          s,
          u,
          l = b.createElement("div"),
          c = b.createElement("div");
        c.style &&
          ((c.style.backgroundClip = "content-box"),
          (c.cloneNode(!0).style.backgroundClip = ""),
          (v.clearCloneStyle = "content-box" === c.style.backgroundClip),
          T.extend(v, {
            boxSizingReliable: function () {
              return e(), i;
            },
            pixelBoxStyles: function () {
              return e(), a;
            },
            pixelPosition: function () {
              return e(), r;
            },
            reliableMarginLeft: function () {
              return e(), u;
            },
            scrollboxSize: function () {
              return e(), o;
            },
            reliableTrDimensions: function () {
              var e, t, r, i;
              return (
                null == s &&
                  ((e = b.createElement("table")),
                  (t = b.createElement("tr")),
                  (r = b.createElement("div")),
                  (e.style.cssText = "position:absolute;left:-11111px"),
                  (t.style.height = "1px"),
                  (r.style.height = "9px"),
                  oe.appendChild(e).appendChild(t).appendChild(r),
                  (i = n.getComputedStyle(t)),
                  (s = parseInt(i.height) > 3),
                  oe.removeChild(e)),
                s
              );
            },
          }));
      })();
      var Ve = ["Webkit", "Moz", "ms"],
        Ge = b.createElement("div").style,
        Je = {};
      function Ye(e) {
        var t = T.cssProps[e] || Je[e];
        return (
          t ||
          (e in Ge
            ? e
            : (Je[e] =
                (function (e) {
                  for (
                    var t = e[0].toUpperCase() + e.slice(1), n = Ve.length;
                    n--;

                  )
                    if ((e = Ve[n] + t) in Ge) return e;
                })(e) || e))
        );
      }
      var Qe = /^(none|table(?!-c[ea]).+)/,
        Ke = /^--/,
        Ze = { position: "absolute", visibility: "hidden", display: "block" },
        et = { letterSpacing: "0", fontWeight: "400" };
      function tt(e, t, n) {
        var r = re.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
      }
      function nt(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
          s = 0,
          u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2)
          "margin" === n && (u += T.css(e, n + ie[a], !0, i)),
            r
              ? ("content" === n && (u -= T.css(e, "padding" + ie[a], !0, i)),
                "margin" !== n &&
                  (u -= T.css(e, "border" + ie[a] + "Width", !0, i)))
              : ((u += T.css(e, "padding" + ie[a], !0, i)),
                "padding" !== n
                  ? (u += T.css(e, "border" + ie[a] + "Width", !0, i))
                  : (s += T.css(e, "border" + ie[a] + "Width", !0, i)));
        return (
          !r &&
            o >= 0 &&
            (u +=
              Math.max(
                0,
                Math.ceil(
                  e["offset" + t[0].toUpperCase() + t.slice(1)] -
                    o -
                    u -
                    s -
                    0.5
                )
              ) || 0),
          u
        );
      }
      function rt(e, t, n) {
        var r = _e(e),
          i =
            (!v.boxSizingReliable() || n) &&
            "border-box" === T.css(e, "boxSizing", !1, r),
          o = i,
          a = Ue(e, t, r),
          s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Be.test(a)) {
          if (!n) return a;
          a = "auto";
        }
        return (
          ((!v.boxSizingReliable() && i) ||
            (!v.reliableTrDimensions() && D(e, "tr")) ||
            "auto" === a ||
            (!parseFloat(a) && "inline" === T.css(e, "display", !1, r))) &&
            e.getClientRects().length &&
            ((i = "border-box" === T.css(e, "boxSizing", !1, r)),
            (o = s in e) && (a = e[s])),
          (a = parseFloat(a) || 0) +
            nt(e, t, n || (i ? "border" : "content"), o, r, a) +
            "px"
        );
      }
      function it(e, t, n, r, i) {
        return new it.prototype.init(e, t, n, r, i);
      }
      T.extend({
        cssHooks: {
          opacity: {
            get: function (e, t) {
              if (t) {
                var n = Ue(e, "opacity");
                return "" === n ? "1" : n;
              }
            },
          },
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
        },
        cssProps: {},
        style: function (e, t, n, r) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var i,
              o,
              a,
              s = G(t),
              u = Ke.test(t),
              l = e.style;
            if (
              (u || (t = Ye(s)),
              (a = T.cssHooks[t] || T.cssHooks[s]),
              void 0 === n)
            )
              return a && "get" in a && void 0 !== (i = a.get(e, !1, r))
                ? i
                : l[t];
            "string" === (o = typeof n) &&
              (i = re.exec(n)) &&
              i[1] &&
              ((n = le(e, t, i)), (o = "number")),
              null != n &&
                n == n &&
                ("number" !== o ||
                  u ||
                  (n += (i && i[3]) || (T.cssNumber[s] ? "" : "px")),
                v.clearCloneStyle ||
                  "" !== n ||
                  0 !== t.indexOf("background") ||
                  (l[t] = "inherit"),
                (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
                  (u ? l.setProperty(t, n) : (l[t] = n)));
          }
        },
        css: function (e, t, n, r) {
          var i,
            o,
            a,
            s = G(t);
          return (
            Ke.test(t) || (t = Ye(s)),
            (a = T.cssHooks[t] || T.cssHooks[s]) &&
              "get" in a &&
              (i = a.get(e, !0, n)),
            void 0 === i && (i = Ue(e, t, r)),
            "normal" === i && t in et && (i = et[t]),
            "" === n || n
              ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
              : i
          );
        },
      }),
        T.each(["height", "width"], function (e, t) {
          T.cssHooks[t] = {
            get: function (e, n, r) {
              if (n)
                return !Qe.test(T.css(e, "display")) ||
                  (e.getClientRects().length && e.getBoundingClientRect().width)
                  ? rt(e, t, r)
                  : $e(e, Ze, function () {
                      return rt(e, t, r);
                    });
            },
            set: function (e, n, r) {
              var i,
                o = _e(e),
                a = !v.scrollboxSize() && "absolute" === o.position,
                s = (a || r) && "border-box" === T.css(e, "boxSizing", !1, o),
                u = r ? nt(e, t, r, s, o) : 0;
              return (
                s &&
                  a &&
                  (u -= Math.ceil(
                    e["offset" + t[0].toUpperCase() + t.slice(1)] -
                      parseFloat(o[t]) -
                      nt(e, t, "border", !1, o) -
                      0.5
                  )),
                u &&
                  (i = re.exec(n)) &&
                  "px" !== (i[3] || "px") &&
                  ((e.style[t] = n), (n = T.css(e, t))),
                tt(0, n, u)
              );
            },
          };
        }),
        (T.cssHooks.marginLeft = Xe(v.reliableMarginLeft, function (e, t) {
          if (t)
            return (
              (parseFloat(Ue(e, "marginLeft")) ||
                e.getBoundingClientRect().left -
                  $e(e, { marginLeft: 0 }, function () {
                    return e.getBoundingClientRect().left;
                  })) + "px"
            );
        })),
        T.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
          (T.cssHooks[e + t] = {
            expand: function (n) {
              for (
                var r = 0,
                  i = {},
                  o = "string" == typeof n ? n.split(" ") : [n];
                r < 4;
                r++
              )
                i[e + ie[r] + t] = o[r] || o[r - 2] || o[0];
              return i;
            },
          }),
            "margin" !== e && (T.cssHooks[e + t].set = tt);
        }),
        T.fn.extend({
          css: function (e, t) {
            return z(
              this,
              function (e, t, n) {
                var r,
                  i,
                  o = {},
                  a = 0;
                if (Array.isArray(t)) {
                  for (r = _e(e), i = t.length; a < i; a++)
                    o[t[a]] = T.css(e, t[a], !1, r);
                  return o;
                }
                return void 0 !== n ? T.style(e, t, n) : T.css(e, t);
              },
              e,
              t,
              arguments.length > 1
            );
          },
        }),
        (T.Tween = it),
        (it.prototype = {
          constructor: it,
          init: function (e, t, n, r, i, o) {
            (this.elem = e),
              (this.prop = n),
              (this.easing = i || T.easing._default),
              (this.options = t),
              (this.start = this.now = this.cur()),
              (this.end = r),
              (this.unit = o || (T.cssNumber[n] ? "" : "px"));
          },
          cur: function () {
            var e = it.propHooks[this.prop];
            return e && e.get ? e.get(this) : it.propHooks._default.get(this);
          },
          run: function (e) {
            var t,
              n = it.propHooks[this.prop];
            return (
              this.options.duration
                ? (this.pos = t =
                    T.easing[this.easing](
                      e,
                      this.options.duration * e,
                      0,
                      1,
                      this.options.duration
                    ))
                : (this.pos = t = e),
              (this.now = (this.end - this.start) * t + this.start),
              this.options.step &&
                this.options.step.call(this.elem, this.now, this),
              n && n.set ? n.set(this) : it.propHooks._default.set(this),
              this
            );
          },
        }),
        (it.prototype.init.prototype = it.prototype),
        (it.propHooks = {
          _default: {
            get: function (e) {
              var t;
              return 1 !== e.elem.nodeType ||
                (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                ? e.elem[e.prop]
                : (t = T.css(e.elem, e.prop, "")) && "auto" !== t
                ? t
                : 0;
            },
            set: function (e) {
              T.fx.step[e.prop]
                ? T.fx.step[e.prop](e)
                : 1 !== e.elem.nodeType ||
                  (!T.cssHooks[e.prop] && null == e.elem.style[Ye(e.prop)])
                ? (e.elem[e.prop] = e.now)
                : T.style(e.elem, e.prop, e.now + e.unit);
            },
          },
        }),
        (it.propHooks.scrollTop = it.propHooks.scrollLeft =
          {
            set: function (e) {
              e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            },
          }),
        (T.easing = {
          linear: function (e) {
            return e;
          },
          swing: function (e) {
            return 0.5 - Math.cos(e * Math.PI) / 2;
          },
          _default: "swing",
        }),
        (T.fx = it.prototype.init),
        (T.fx.step = {});
      var ot,
        at,
        st = /^(?:toggle|show|hide)$/,
        ut = /queueHooks$/;
      function lt() {
        at &&
          (!1 === b.hidden && n.requestAnimationFrame
            ? n.requestAnimationFrame(lt)
            : n.setTimeout(lt, T.fx.interval),
          T.fx.tick());
      }
      function ct() {
        return (
          n.setTimeout(function () {
            ot = void 0;
          }),
          (ot = Date.now())
        );
      }
      function ft(e, t) {
        var n,
          r = 0,
          i = { height: e };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
          i["margin" + (n = ie[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i;
      }
      function pt(e, t, n) {
        for (
          var r,
            i = (dt.tweeners[t] || []).concat(dt.tweeners["*"]),
            o = 0,
            a = i.length;
          o < a;
          o++
        )
          if ((r = i[o].call(n, t, e))) return r;
      }
      function dt(e, t, n) {
        var r,
          i,
          o = 0,
          a = dt.prefilters.length,
          s = T.Deferred().always(function () {
            delete u.elem;
          }),
          u = function () {
            if (i) return !1;
            for (
              var t = ot || ct(),
                n = Math.max(0, l.startTime + l.duration - t),
                r = 1 - (n / l.duration || 0),
                o = 0,
                a = l.tweens.length;
              o < a;
              o++
            )
              l.tweens[o].run(r);
            return (
              s.notifyWith(e, [l, r, n]),
              r < 1 && a
                ? n
                : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
            );
          },
          l = s.promise({
            elem: e,
            props: T.extend({}, t),
            opts: T.extend(
              !0,
              { specialEasing: {}, easing: T.easing._default },
              n
            ),
            originalProperties: t,
            originalOptions: n,
            startTime: ot || ct(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
              var r = T.Tween(
                e,
                l.opts,
                t,
                n,
                l.opts.specialEasing[t] || l.opts.easing
              );
              return l.tweens.push(r), r;
            },
            stop: function (t) {
              var n = 0,
                r = t ? l.tweens.length : 0;
              if (i) return this;
              for (i = !0; n < r; n++) l.tweens[n].run(1);
              return (
                t
                  ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t]))
                  : s.rejectWith(e, [l, t]),
                this
              );
            },
          }),
          c = l.props;
        for (
          !(function (e, t) {
            var n, r, i, o, a;
            for (n in e)
              if (
                ((i = t[(r = G(n))]),
                (o = e[n]),
                Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
                n !== r && ((e[r] = o), delete e[n]),
                (a = T.cssHooks[r]) && ("expand" in a))
              )
                for (n in ((o = a.expand(o)), delete e[r], o))
                  (n in e) || ((e[n] = o[n]), (t[n] = i));
              else t[r] = i;
          })(c, l.opts.specialEasing);
          o < a;
          o++
        )
          if ((r = dt.prefilters[o].call(l, e, c, l.opts)))
            return (
              m(r.stop) &&
                (T._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)),
              r
            );
        return (
          T.map(c, pt, l),
          m(l.opts.start) && l.opts.start.call(e, l),
          l
            .progress(l.opts.progress)
            .done(l.opts.done, l.opts.complete)
            .fail(l.opts.fail)
            .always(l.opts.always),
          T.fx.timer(T.extend(u, { elem: e, anim: l, queue: l.opts.queue })),
          l
        );
      }
      (T.Animation = T.extend(dt, {
        tweeners: {
          "*": [
            function (e, t) {
              var n = this.createTween(e, t);
              return le(n.elem, e, re.exec(t), n), n;
            },
          ],
        },
        tweener: function (e, t) {
          m(e) ? ((t = e), (e = ["*"])) : (e = e.match(I));
          for (var n, r = 0, i = e.length; r < i; r++)
            (n = e[r]),
              (dt.tweeners[n] = dt.tweeners[n] || []),
              dt.tweeners[n].unshift(t);
        },
        prefilters: [
          function (e, t, n) {
            var r,
              i,
              o,
              a,
              s,
              u,
              l,
              c,
              f = "width" in t || "height" in t,
              p = this,
              d = {},
              h = e.style,
              g = e.nodeType && ue(e),
              v = Q.get(e, "fxshow");
            for (r in (n.queue ||
              (null == (a = T._queueHooks(e, "fx")).unqueued &&
                ((a.unqueued = 0),
                (s = a.empty.fire),
                (a.empty.fire = function () {
                  a.unqueued || s();
                })),
              a.unqueued++,
              p.always(function () {
                p.always(function () {
                  a.unqueued--, T.queue(e, "fx").length || a.empty.fire();
                });
              })),
            t))
              if (((i = t[r]), st.test(i))) {
                if (
                  (delete t[r],
                  (o = o || "toggle" === i),
                  i === (g ? "hide" : "show"))
                ) {
                  if ("show" !== i || !v || void 0 === v[r]) continue;
                  g = !0;
                }
                d[r] = (v && v[r]) || T.style(e, r);
              }
            if ((u = !T.isEmptyObject(t)) || !T.isEmptyObject(d))
              for (r in (f &&
                1 === e.nodeType &&
                ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                null == (l = v && v.display) && (l = Q.get(e, "display")),
                "none" === (c = T.css(e, "display")) &&
                  (l
                    ? (c = l)
                    : (pe([e], !0),
                      (l = e.style.display || l),
                      (c = T.css(e, "display")),
                      pe([e]))),
                ("inline" === c || ("inline-block" === c && null != l)) &&
                  "none" === T.css(e, "float") &&
                  (u ||
                    (p.done(function () {
                      h.display = l;
                    }),
                    null == l &&
                      ((c = h.display), (l = "none" === c ? "" : c))),
                  (h.display = "inline-block"))),
              n.overflow &&
                ((h.overflow = "hidden"),
                p.always(function () {
                  (h.overflow = n.overflow[0]),
                    (h.overflowX = n.overflow[1]),
                    (h.overflowY = n.overflow[2]);
                })),
              (u = !1),
              d))
                u ||
                  (v
                    ? "hidden" in v && (g = v.hidden)
                    : (v = Q.access(e, "fxshow", { display: l })),
                  o && (v.hidden = !g),
                  g && pe([e], !0),
                  p.done(function () {
                    for (r in (g || pe([e]), Q.remove(e, "fxshow"), d))
                      T.style(e, r, d[r]);
                  })),
                  (u = pt(g ? v[r] : 0, r, p)),
                  r in v ||
                    ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
          },
        ],
        prefilter: function (e, t) {
          t ? dt.prefilters.unshift(e) : dt.prefilters.push(e);
        },
      })),
        (T.speed = function (e, t, n) {
          var r =
            e && "object" == typeof e
              ? T.extend({}, e)
              : {
                  complete: n || (!n && t) || (m(e) && e),
                  duration: e,
                  easing: (n && t) || (t && !m(t) && t),
                };
          return (
            T.fx.off
              ? (r.duration = 0)
              : "number" != typeof r.duration &&
                (r.duration in T.fx.speeds
                  ? (r.duration = T.fx.speeds[r.duration])
                  : (r.duration = T.fx.speeds._default)),
            (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
            (r.old = r.complete),
            (r.complete = function () {
              m(r.old) && r.old.call(this), r.queue && T.dequeue(this, r.queue);
            }),
            r
          );
        }),
        T.fn.extend({
          fadeTo: function (e, t, n, r) {
            return this.filter(ue)
              .css("opacity", 0)
              .show()
              .end()
              .animate({ opacity: t }, e, n, r);
          },
          animate: function (e, t, n, r) {
            var i = T.isEmptyObject(e),
              o = T.speed(t, n, r),
              a = function () {
                var t = dt(this, T.extend({}, e), o);
                (i || Q.get(this, "finish")) && t.stop(!0);
              };
            return (
              (a.finish = a),
              i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            );
          },
          stop: function (e, t, n) {
            var r = function (e) {
              var t = e.stop;
              delete e.stop, t(n);
            };
            return (
              "string" != typeof e && ((n = t), (t = e), (e = void 0)),
              t && this.queue(e || "fx", []),
              this.each(function () {
                var t = !0,
                  i = null != e && e + "queueHooks",
                  o = T.timers,
                  a = Q.get(this);
                if (i) a[i] && a[i].stop && r(a[i]);
                else for (i in a) a[i] && a[i].stop && ut.test(i) && r(a[i]);
                for (i = o.length; i--; )
                  o[i].elem !== this ||
                    (null != e && o[i].queue !== e) ||
                    (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
                (!t && n) || T.dequeue(this, e);
              })
            );
          },
          finish: function (e) {
            return (
              !1 !== e && (e = e || "fx"),
              this.each(function () {
                var t,
                  n = Q.get(this),
                  r = n[e + "queue"],
                  i = n[e + "queueHooks"],
                  o = T.timers,
                  a = r ? r.length : 0;
                for (
                  n.finish = !0,
                    T.queue(this, e, []),
                    i && i.stop && i.stop.call(this, !0),
                    t = o.length;
                  t--;

                )
                  o[t].elem === this &&
                    o[t].queue === e &&
                    (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < a; t++)
                  r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish;
              })
            );
          },
        }),
        T.each(["toggle", "show", "hide"], function (e, t) {
          var n = T.fn[t];
          T.fn[t] = function (e, r, i) {
            return null == e || "boolean" == typeof e
              ? n.apply(this, arguments)
              : this.animate(ft(t, !0), e, r, i);
          };
        }),
        T.each(
          {
            slideDown: ft("show"),
            slideUp: ft("hide"),
            slideToggle: ft("toggle"),
            fadeIn: { opacity: "show" },
            fadeOut: { opacity: "hide" },
            fadeToggle: { opacity: "toggle" },
          },
          function (e, t) {
            T.fn[e] = function (e, n, r) {
              return this.animate(t, e, n, r);
            };
          }
        ),
        (T.timers = []),
        (T.fx.tick = function () {
          var e,
            t = 0,
            n = T.timers;
          for (ot = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
          n.length || T.fx.stop(), (ot = void 0);
        }),
        (T.fx.timer = function (e) {
          T.timers.push(e), T.fx.start();
        }),
        (T.fx.interval = 13),
        (T.fx.start = function () {
          at || ((at = !0), lt());
        }),
        (T.fx.stop = function () {
          at = null;
        }),
        (T.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (T.fn.delay = function (e, t) {
          return (
            (e = (T.fx && T.fx.speeds[e]) || e),
            (t = t || "fx"),
            this.queue(t, function (t, r) {
              var i = n.setTimeout(t, e);
              r.stop = function () {
                n.clearTimeout(i);
              };
            })
          );
        }),
        (function () {
          var e = b.createElement("input"),
            t = b
              .createElement("select")
              .appendChild(b.createElement("option"));
          (e.type = "checkbox"),
            (v.checkOn = "" !== e.value),
            (v.optSelected = t.selected),
            ((e = b.createElement("input")).value = "t"),
            (e.type = "radio"),
            (v.radioValue = "t" === e.value);
        })();
      var ht,
        gt = T.expr.attrHandle;
      T.fn.extend({
        attr: function (e, t) {
          return z(this, T.attr, e, t, arguments.length > 1);
        },
        removeAttr: function (e) {
          return this.each(function () {
            T.removeAttr(this, e);
          });
        },
      }),
        T.extend({
          attr: function (e, t, n) {
            var r,
              i,
              o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return void 0 === e.getAttribute
                ? T.prop(e, t, n)
                : ((1 === o && T.isXMLDoc(e)) ||
                    (i =
                      T.attrHooks[t.toLowerCase()] ||
                      (T.expr.match.bool.test(t) ? ht : void 0)),
                  void 0 !== n
                    ? null === n
                      ? void T.removeAttr(e, t)
                      : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                      ? r
                      : (e.setAttribute(t, n + ""), n)
                    : i && "get" in i && null !== (r = i.get(e, t))
                    ? r
                    : null == (r = T.find.attr(e, t))
                    ? void 0
                    : r);
          },
          attrHooks: {
            type: {
              set: function (e, t) {
                if (!v.radioValue && "radio" === t && D(e, "input")) {
                  var n = e.value;
                  return e.setAttribute("type", t), n && (e.value = n), t;
                }
              },
            },
          },
          removeAttr: function (e, t) {
            var n,
              r = 0,
              i = t && t.match(I);
            if (i && 1 === e.nodeType)
              for (; (n = i[r++]); ) e.removeAttribute(n);
          },
        }),
        (ht = {
          set: function (e, t, n) {
            return !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n), n;
          },
        }),
        T.each(T.expr.match.bool.source.match(/\w+/g), function (e, t) {
          var n = gt[t] || T.find.attr;
          gt[t] = function (e, t, r) {
            var i,
              o,
              a = t.toLowerCase();
            return (
              r ||
                ((o = gt[a]),
                (gt[a] = i),
                (i = null != n(e, t, r) ? a : null),
                (gt[a] = o)),
              i
            );
          };
        });
      var vt = /^(?:input|select|textarea|button)$/i,
        mt = /^(?:a|area)$/i;
      function yt(e) {
        return (e.match(I) || []).join(" ");
      }
      function bt(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
      }
      function xt(e) {
        return Array.isArray(e)
          ? e
          : ("string" == typeof e && e.match(I)) || [];
      }
      T.fn.extend({
        prop: function (e, t) {
          return z(this, T.prop, e, t, arguments.length > 1);
        },
        removeProp: function (e) {
          return this.each(function () {
            delete this[T.propFix[e] || e];
          });
        },
      }),
        T.extend({
          prop: function (e, t, n) {
            var r,
              i,
              o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return (
                (1 === o && T.isXMLDoc(e)) ||
                  ((t = T.propFix[t] || t), (i = T.propHooks[t])),
                void 0 !== n
                  ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                    ? r
                    : (e[t] = n)
                  : i && "get" in i && null !== (r = i.get(e, t))
                  ? r
                  : e[t]
              );
          },
          propHooks: {
            tabIndex: {
              get: function (e) {
                var t = T.find.attr(e, "tabindex");
                return t
                  ? parseInt(t, 10)
                  : vt.test(e.nodeName) || (mt.test(e.nodeName) && e.href)
                  ? 0
                  : -1;
              },
            },
          },
          propFix: { for: "htmlFor", class: "className" },
        }),
        v.optSelected ||
          (T.propHooks.selected = {
            get: function (e) {
              var t = e.parentNode;
              return t && t.parentNode && t.parentNode.selectedIndex, null;
            },
            set: function (e) {
              var t = e.parentNode;
              t &&
                (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
            },
          }),
        T.each(
          [
            "tabIndex",
            "readOnly",
            "maxLength",
            "cellSpacing",
            "cellPadding",
            "rowSpan",
            "colSpan",
            "useMap",
            "frameBorder",
            "contentEditable",
          ],
          function () {
            T.propFix[this.toLowerCase()] = this;
          }
        ),
        T.fn.extend({
          addClass: function (e) {
            var t,
              n,
              r,
              i,
              o,
              a,
              s,
              u = 0;
            if (m(e))
              return this.each(function (t) {
                T(this).addClass(e.call(this, t, bt(this)));
              });
            if ((t = xt(e)).length)
              for (; (n = this[u++]); )
                if (
                  ((i = bt(n)), (r = 1 === n.nodeType && " " + yt(i) + " "))
                ) {
                  for (a = 0; (o = t[a++]); )
                    r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                  i !== (s = yt(r)) && n.setAttribute("class", s);
                }
            return this;
          },
          removeClass: function (e) {
            var t,
              n,
              r,
              i,
              o,
              a,
              s,
              u = 0;
            if (m(e))
              return this.each(function (t) {
                T(this).removeClass(e.call(this, t, bt(this)));
              });
            if (!arguments.length) return this.attr("class", "");
            if ((t = xt(e)).length)
              for (; (n = this[u++]); )
                if (
                  ((i = bt(n)), (r = 1 === n.nodeType && " " + yt(i) + " "))
                ) {
                  for (a = 0; (o = t[a++]); )
                    for (; r.indexOf(" " + o + " ") > -1; )
                      r = r.replace(" " + o + " ", " ");
                  i !== (s = yt(r)) && n.setAttribute("class", s);
                }
            return this;
          },
          toggleClass: function (e, t) {
            var n = typeof e,
              r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r
              ? t
                ? this.addClass(e)
                : this.removeClass(e)
              : m(e)
              ? this.each(function (n) {
                  T(this).toggleClass(e.call(this, n, bt(this), t), t);
                })
              : this.each(function () {
                  var t, i, o, a;
                  if (r)
                    for (i = 0, o = T(this), a = xt(e); (t = a[i++]); )
                      o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                  else
                    (void 0 !== e && "boolean" !== n) ||
                      ((t = bt(this)) && Q.set(this, "__className__", t),
                      this.setAttribute &&
                        this.setAttribute(
                          "class",
                          t || !1 === e
                            ? ""
                            : Q.get(this, "__className__") || ""
                        ));
                });
          },
          hasClass: function (e) {
            var t,
              n,
              r = 0;
            for (t = " " + e + " "; (n = this[r++]); )
              if (1 === n.nodeType && (" " + yt(bt(n)) + " ").indexOf(t) > -1)
                return !0;
            return !1;
          },
        });
      var wt = /\r/g;
      T.fn.extend({
        val: function (e) {
          var t,
            n,
            r,
            i = this[0];
          return arguments.length
            ? ((r = m(e)),
              this.each(function (n) {
                var i;
                1 === this.nodeType &&
                  (null == (i = r ? e.call(this, n, T(this).val()) : e)
                    ? (i = "")
                    : "number" == typeof i
                    ? (i += "")
                    : Array.isArray(i) &&
                      (i = T.map(i, function (e) {
                        return null == e ? "" : e + "";
                      })),
                  ((t =
                    T.valHooks[this.type] ||
                    T.valHooks[this.nodeName.toLowerCase()]) &&
                    "set" in t &&
                    void 0 !== t.set(this, i, "value")) ||
                    (this.value = i));
              }))
            : i
            ? (t =
                T.valHooks[i.type] || T.valHooks[i.nodeName.toLowerCase()]) &&
              "get" in t &&
              void 0 !== (n = t.get(i, "value"))
              ? n
              : "string" == typeof (n = i.value)
              ? n.replace(wt, "")
              : null == n
              ? ""
              : n
            : void 0;
        },
      }),
        T.extend({
          valHooks: {
            option: {
              get: function (e) {
                var t = T.find.attr(e, "value");
                return null != t ? t : yt(T.text(e));
              },
            },
            select: {
              get: function (e) {
                var t,
                  n,
                  r,
                  i = e.options,
                  o = e.selectedIndex,
                  a = "select-one" === e.type,
                  s = a ? null : [],
                  u = a ? o + 1 : i.length;
                for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                  if (
                    ((n = i[r]).selected || r === o) &&
                    !n.disabled &&
                    (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))
                  ) {
                    if (((t = T(n).val()), a)) return t;
                    s.push(t);
                  }
                return s;
              },
              set: function (e, t) {
                for (
                  var n, r, i = e.options, o = T.makeArray(t), a = i.length;
                  a--;

                )
                  ((r = i[a]).selected =
                    T.inArray(T.valHooks.option.get(r), o) > -1) && (n = !0);
                return n || (e.selectedIndex = -1), o;
              },
            },
          },
        }),
        T.each(["radio", "checkbox"], function () {
          (T.valHooks[this] = {
            set: function (e, t) {
              if (Array.isArray(t))
                return (e.checked = T.inArray(T(e).val(), t) > -1);
            },
          }),
            v.checkOn ||
              (T.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value;
              });
        }),
        (v.focusin = "onfocusin" in n);
      var Ct = /^(?:focusinfocus|focusoutblur)$/,
        Tt = function (e) {
          e.stopPropagation();
        };
      T.extend(T.event, {
        trigger: function (e, t, r, i) {
          var o,
            a,
            s,
            u,
            l,
            c,
            f,
            p,
            h = [r || b],
            g = d.call(e, "type") ? e.type : e,
            v = d.call(e, "namespace") ? e.namespace.split(".") : [];
          if (
            ((a = p = s = r = r || b),
            3 !== r.nodeType &&
              8 !== r.nodeType &&
              !Ct.test(g + T.event.triggered) &&
              (g.indexOf(".") > -1 &&
                ((v = g.split(".")), (g = v.shift()), v.sort()),
              (l = g.indexOf(":") < 0 && "on" + g),
              ((e = e[T.expando]
                ? e
                : new T.Event(g, "object" == typeof e && e)).isTrigger = i
                ? 2
                : 3),
              (e.namespace = v.join(".")),
              (e.rnamespace = e.namespace
                ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)")
                : null),
              (e.result = void 0),
              e.target || (e.target = r),
              (t = null == t ? [e] : T.makeArray(t, [e])),
              (f = T.event.special[g] || {}),
              i || !f.trigger || !1 !== f.trigger.apply(r, t)))
          ) {
            if (!i && !f.noBubble && !y(r)) {
              for (
                u = f.delegateType || g, Ct.test(u + g) || (a = a.parentNode);
                a;
                a = a.parentNode
              )
                h.push(a), (s = a);
              s === (r.ownerDocument || b) &&
                h.push(s.defaultView || s.parentWindow || n);
            }
            for (o = 0; (a = h[o++]) && !e.isPropagationStopped(); )
              (p = a),
                (e.type = o > 1 ? u : f.bindType || g),
                (c =
                  (Q.get(a, "events") || Object.create(null))[e.type] &&
                  Q.get(a, "handle")) && c.apply(a, t),
                (c = l && a[l]) &&
                  c.apply &&
                  J(a) &&
                  ((e.result = c.apply(a, t)),
                  !1 === e.result && e.preventDefault());
            return (
              (e.type = g),
              i ||
                e.isDefaultPrevented() ||
                (f._default && !1 !== f._default.apply(h.pop(), t)) ||
                !J(r) ||
                (l &&
                  m(r[g]) &&
                  !y(r) &&
                  ((s = r[l]) && (r[l] = null),
                  (T.event.triggered = g),
                  e.isPropagationStopped() && p.addEventListener(g, Tt),
                  r[g](),
                  e.isPropagationStopped() && p.removeEventListener(g, Tt),
                  (T.event.triggered = void 0),
                  s && (r[l] = s))),
              e.result
            );
          }
        },
        simulate: function (e, t, n) {
          var r = T.extend(new T.Event(), n, { type: e, isSimulated: !0 });
          T.event.trigger(r, null, t);
        },
      }),
        T.fn.extend({
          trigger: function (e, t) {
            return this.each(function () {
              T.event.trigger(e, t, this);
            });
          },
          triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return T.event.trigger(e, t, n, !0);
          },
        }),
        v.focusin ||
          T.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
            var n = function (e) {
              T.event.simulate(t, e.target, T.event.fix(e));
            };
            T.event.special[t] = {
              setup: function () {
                var r = this.ownerDocument || this.document || this,
                  i = Q.access(r, t);
                i || r.addEventListener(e, n, !0), Q.access(r, t, (i || 0) + 1);
              },
              teardown: function () {
                var r = this.ownerDocument || this.document || this,
                  i = Q.access(r, t) - 1;
                i
                  ? Q.access(r, t, i)
                  : (r.removeEventListener(e, n, !0), Q.remove(r, t));
              },
            };
          });
      var kt = n.location,
        St = { guid: Date.now() },
        Et = /\?/;
      T.parseXML = function (e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
          t = new n.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {
          t = void 0;
        }
        return (
          (t && !t.getElementsByTagName("parsererror").length) ||
            T.error("Invalid XML: " + e),
          t
        );
      };
      var At = /\[\]$/,
        jt = /\r?\n/g,
        Dt = /^(?:submit|button|image|reset|file)$/i,
        Nt = /^(?:input|select|textarea|keygen)/i;
      function Lt(e, t, n, r) {
        var i;
        if (Array.isArray(t))
          T.each(t, function (t, i) {
            n || At.test(e)
              ? r(e, i)
              : Lt(
                  e + "[" + ("object" == typeof i && null != i ? t : "") + "]",
                  i,
                  n,
                  r
                );
          });
        else if (n || "object" !== C(t)) r(e, t);
        else for (i in t) Lt(e + "[" + i + "]", t[i], n, r);
      }
      (T.param = function (e, t) {
        var n,
          r = [],
          i = function (e, t) {
            var n = m(t) ? t() : t;
            r[r.length] =
              encodeURIComponent(e) +
              "=" +
              encodeURIComponent(null == n ? "" : n);
          };
        if (null == e) return "";
        if (Array.isArray(e) || (e.jquery && !T.isPlainObject(e)))
          T.each(e, function () {
            i(this.name, this.value);
          });
        else for (n in e) Lt(n, e[n], t, i);
        return r.join("&");
      }),
        T.fn.extend({
          serialize: function () {
            return T.param(this.serializeArray());
          },
          serializeArray: function () {
            return this.map(function () {
              var e = T.prop(this, "elements");
              return e ? T.makeArray(e) : this;
            })
              .filter(function () {
                var e = this.type;
                return (
                  this.name &&
                  !T(this).is(":disabled") &&
                  Nt.test(this.nodeName) &&
                  !Dt.test(e) &&
                  (this.checked || !ge.test(e))
                );
              })
              .map(function (e, t) {
                var n = T(this).val();
                return null == n
                  ? null
                  : Array.isArray(n)
                  ? T.map(n, function (e) {
                      return { name: t.name, value: e.replace(jt, "\r\n") };
                    })
                  : { name: t.name, value: n.replace(jt, "\r\n") };
              })
              .get();
          },
        });
      var qt = /%20/g,
        Ot = /#.*$/,
        Ht = /([?&])_=[^&]*/,
        Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Rt = /^(?:GET|HEAD)$/,
        It = /^\/\//,
        Mt = {},
        Wt = {},
        Ft = "*/".concat("*"),
        Bt = b.createElement("a");
      function _t(e) {
        return function (t, n) {
          "string" != typeof t && ((n = t), (t = "*"));
          var r,
            i = 0,
            o = t.toLowerCase().match(I) || [];
          if (m(n))
            for (; (r = o[i++]); )
              "+" === r[0]
                ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
                : (e[r] = e[r] || []).push(n);
        };
      }
      function $t(e, t, n, r) {
        var i = {},
          o = e === Wt;
        function a(s) {
          var u;
          return (
            (i[s] = !0),
            T.each(e[s] || [], function (e, s) {
              var l = s(t, n, r);
              return "string" != typeof l || o || i[l]
                ? o
                  ? !(u = l)
                  : void 0
                : (t.dataTypes.unshift(l), a(l), !1);
            }),
            u
          );
        }
        return a(t.dataTypes[0]) || (!i["*"] && a("*"));
      }
      function zt(e, t) {
        var n,
          r,
          i = T.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && T.extend(!0, e, r), e;
      }
      (Bt.href = kt.href),
        T.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: kt.href,
            type: "GET",
            isLocal:
              /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                kt.protocol
              ),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
              "*": Ft,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript",
            },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON",
            },
            converters: {
              "* text": String,
              "text html": !0,
              "text json": JSON.parse,
              "text xml": T.parseXML,
            },
            flatOptions: { url: !0, context: !0 },
          },
          ajaxSetup: function (e, t) {
            return t ? zt(zt(e, T.ajaxSettings), t) : zt(T.ajaxSettings, e);
          },
          ajaxPrefilter: _t(Mt),
          ajaxTransport: _t(Wt),
          ajax: function (e, t) {
            "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
            var r,
              i,
              o,
              a,
              s,
              u,
              l,
              c,
              f,
              p,
              d = T.ajaxSetup({}, t),
              h = d.context || d,
              g = d.context && (h.nodeType || h.jquery) ? T(h) : T.event,
              v = T.Deferred(),
              m = T.Callbacks("once memory"),
              y = d.statusCode || {},
              x = {},
              w = {},
              C = "canceled",
              k = {
                readyState: 0,
                getResponseHeader: function (e) {
                  var t;
                  if (l) {
                    if (!a)
                      for (a = {}; (t = Pt.exec(o)); )
                        a[t[1].toLowerCase() + " "] = (
                          a[t[1].toLowerCase() + " "] || []
                        ).concat(t[2]);
                    t = a[e.toLowerCase() + " "];
                  }
                  return null == t ? null : t.join(", ");
                },
                getAllResponseHeaders: function () {
                  return l ? o : null;
                },
                setRequestHeader: function (e, t) {
                  return (
                    null == l &&
                      ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e),
                      (x[e] = t)),
                    this
                  );
                },
                overrideMimeType: function (e) {
                  return null == l && (d.mimeType = e), this;
                },
                statusCode: function (e) {
                  var t;
                  if (e)
                    if (l) k.always(e[k.status]);
                    else for (t in e) y[t] = [y[t], e[t]];
                  return this;
                },
                abort: function (e) {
                  var t = e || C;
                  return r && r.abort(t), S(0, t), this;
                },
              };
            if (
              (v.promise(k),
              (d.url = ((e || d.url || kt.href) + "").replace(
                It,
                kt.protocol + "//"
              )),
              (d.type = t.method || t.type || d.method || d.type),
              (d.dataTypes = (d.dataType || "*").toLowerCase().match(I) || [
                "",
              ]),
              null == d.crossDomain)
            ) {
              u = b.createElement("a");
              try {
                (u.href = d.url),
                  (u.href = u.href),
                  (d.crossDomain =
                    Bt.protocol + "//" + Bt.host != u.protocol + "//" + u.host);
              } catch (e) {
                d.crossDomain = !0;
              }
            }
            if (
              (d.data &&
                d.processData &&
                "string" != typeof d.data &&
                (d.data = T.param(d.data, d.traditional)),
              $t(Mt, d, t, k),
              l)
            )
              return k;
            for (f in ((c = T.event && d.global) &&
              0 == T.active++ &&
              T.event.trigger("ajaxStart"),
            (d.type = d.type.toUpperCase()),
            (d.hasContent = !Rt.test(d.type)),
            (i = d.url.replace(Ot, "")),
            d.hasContent
              ? d.data &&
                d.processData &&
                0 ===
                  (d.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                (d.data = d.data.replace(qt, "+"))
              : ((p = d.url.slice(i.length)),
                d.data &&
                  (d.processData || "string" == typeof d.data) &&
                  ((i += (Et.test(i) ? "&" : "?") + d.data), delete d.data),
                !1 === d.cache &&
                  ((i = i.replace(Ht, "$1")),
                  (p = (Et.test(i) ? "&" : "?") + "_=" + St.guid++ + p)),
                (d.url = i + p)),
            d.ifModified &&
              (T.lastModified[i] &&
                k.setRequestHeader("If-Modified-Since", T.lastModified[i]),
              T.etag[i] && k.setRequestHeader("If-None-Match", T.etag[i])),
            ((d.data && d.hasContent && !1 !== d.contentType) ||
              t.contentType) &&
              k.setRequestHeader("Content-Type", d.contentType),
            k.setRequestHeader(
              "Accept",
              d.dataTypes[0] && d.accepts[d.dataTypes[0]]
                ? d.accepts[d.dataTypes[0]] +
                    ("*" !== d.dataTypes[0] ? ", " + Ft + "; q=0.01" : "")
                : d.accepts["*"]
            ),
            d.headers))
              k.setRequestHeader(f, d.headers[f]);
            if (d.beforeSend && (!1 === d.beforeSend.call(h, k, d) || l))
              return k.abort();
            if (
              ((C = "abort"),
              m.add(d.complete),
              k.done(d.success),
              k.fail(d.error),
              (r = $t(Wt, d, t, k)))
            ) {
              if (((k.readyState = 1), c && g.trigger("ajaxSend", [k, d]), l))
                return k;
              d.async &&
                d.timeout > 0 &&
                (s = n.setTimeout(function () {
                  k.abort("timeout");
                }, d.timeout));
              try {
                (l = !1), r.send(x, S);
              } catch (e) {
                if (l) throw e;
                S(-1, e);
              }
            } else S(-1, "No Transport");
            function S(e, t, a, u) {
              var f,
                p,
                b,
                x,
                w,
                C = t;
              l ||
                ((l = !0),
                s && n.clearTimeout(s),
                (r = void 0),
                (o = u || ""),
                (k.readyState = e > 0 ? 4 : 0),
                (f = (e >= 200 && e < 300) || 304 === e),
                a &&
                  (x = (function (e, t, n) {
                    for (
                      var r, i, o, a, s = e.contents, u = e.dataTypes;
                      "*" === u[0];

                    )
                      u.shift(),
                        void 0 === r &&
                          (r =
                            e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                      for (i in s)
                        if (s[i] && s[i].test(r)) {
                          u.unshift(i);
                          break;
                        }
                    if (u[0] in n) o = u[0];
                    else {
                      for (i in n) {
                        if (!u[0] || e.converters[i + " " + u[0]]) {
                          o = i;
                          break;
                        }
                        a || (a = i);
                      }
                      o = o || a;
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o];
                  })(d, k, a)),
                !f &&
                  T.inArray("script", d.dataTypes) > -1 &&
                  (d.converters["text script"] = function () {}),
                (x = (function (e, t, n, r) {
                  var i,
                    o,
                    a,
                    s,
                    u,
                    l = {},
                    c = e.dataTypes.slice();
                  if (c[1])
                    for (a in e.converters)
                      l[a.toLowerCase()] = e.converters[a];
                  for (o = c.shift(); o; )
                    if (
                      (e.responseFields[o] && (n[e.responseFields[o]] = t),
                      !u &&
                        r &&
                        e.dataFilter &&
                        (t = e.dataFilter(t, e.dataType)),
                      (u = o),
                      (o = c.shift()))
                    )
                      if ("*" === o) o = u;
                      else if ("*" !== u && u !== o) {
                        if (!(a = l[u + " " + o] || l["* " + o]))
                          for (i in l)
                            if (
                              (s = i.split(" "))[1] === o &&
                              (a = l[u + " " + s[0]] || l["* " + s[0]])
                            ) {
                              !0 === a
                                ? (a = l[i])
                                : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                              break;
                            }
                        if (!0 !== a)
                          if (a && e.throws) t = a(t);
                          else
                            try {
                              t = a(t);
                            } catch (e) {
                              return {
                                state: "parsererror",
                                error: a
                                  ? e
                                  : "No conversion from " + u + " to " + o,
                              };
                            }
                      }
                  return { state: "success", data: t };
                })(d, x, k, f)),
                f
                  ? (d.ifModified &&
                      ((w = k.getResponseHeader("Last-Modified")) &&
                        (T.lastModified[i] = w),
                      (w = k.getResponseHeader("etag")) && (T.etag[i] = w)),
                    204 === e || "HEAD" === d.type
                      ? (C = "nocontent")
                      : 304 === e
                      ? (C = "notmodified")
                      : ((C = x.state), (p = x.data), (f = !(b = x.error))))
                  : ((b = C), (!e && C) || ((C = "error"), e < 0 && (e = 0))),
                (k.status = e),
                (k.statusText = (t || C) + ""),
                f ? v.resolveWith(h, [p, C, k]) : v.rejectWith(h, [k, C, b]),
                k.statusCode(y),
                (y = void 0),
                c &&
                  g.trigger(f ? "ajaxSuccess" : "ajaxError", [k, d, f ? p : b]),
                m.fireWith(h, [k, C]),
                c &&
                  (g.trigger("ajaxComplete", [k, d]),
                  --T.active || T.event.trigger("ajaxStop")));
            }
            return k;
          },
          getJSON: function (e, t, n) {
            return T.get(e, t, n, "json");
          },
          getScript: function (e, t) {
            return T.get(e, void 0, t, "script");
          },
        }),
        T.each(["get", "post"], function (e, t) {
          T[t] = function (e, n, r, i) {
            return (
              m(n) && ((i = i || r), (r = n), (n = void 0)),
              T.ajax(
                T.extend(
                  { url: e, type: t, dataType: i, data: n, success: r },
                  T.isPlainObject(e) && e
                )
              )
            );
          };
        }),
        T.ajaxPrefilter(function (e) {
          var t;
          for (t in e.headers)
            "content-type" === t.toLowerCase() &&
              (e.contentType = e.headers[t] || "");
        }),
        (T._evalUrl = function (e, t, n) {
          return T.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: { "text script": function () {} },
            dataFilter: function (e) {
              T.globalEval(e, t, n);
            },
          });
        }),
        T.fn.extend({
          wrapAll: function (e) {
            var t;
            return (
              this[0] &&
                (m(e) && (e = e.call(this[0])),
                (t = T(e, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && t.insertBefore(this[0]),
                t
                  .map(function () {
                    for (var e = this; e.firstElementChild; )
                      e = e.firstElementChild;
                    return e;
                  })
                  .append(this)),
              this
            );
          },
          wrapInner: function (e) {
            return m(e)
              ? this.each(function (t) {
                  T(this).wrapInner(e.call(this, t));
                })
              : this.each(function () {
                  var t = T(this),
                    n = t.contents();
                  n.length ? n.wrapAll(e) : t.append(e);
                });
          },
          wrap: function (e) {
            var t = m(e);
            return this.each(function (n) {
              T(this).wrapAll(t ? e.call(this, n) : e);
            });
          },
          unwrap: function (e) {
            return (
              this.parent(e)
                .not("body")
                .each(function () {
                  T(this).replaceWith(this.childNodes);
                }),
              this
            );
          },
        }),
        (T.expr.pseudos.hidden = function (e) {
          return !T.expr.pseudos.visible(e);
        }),
        (T.expr.pseudos.visible = function (e) {
          return !!(
            e.offsetWidth ||
            e.offsetHeight ||
            e.getClientRects().length
          );
        }),
        (T.ajaxSettings.xhr = function () {
          try {
            return new n.XMLHttpRequest();
          } catch (e) {}
        });
      var Ut = { 0: 200, 1223: 204 },
        Xt = T.ajaxSettings.xhr();
      (v.cors = !!Xt && "withCredentials" in Xt),
        (v.ajax = Xt = !!Xt),
        T.ajaxTransport(function (e) {
          var t, r;
          if (v.cors || (Xt && !e.crossDomain))
            return {
              send: function (i, o) {
                var a,
                  s = e.xhr();
                if (
                  (s.open(e.type, e.url, e.async, e.username, e.password),
                  e.xhrFields)
                )
                  for (a in e.xhrFields) s[a] = e.xhrFields[a];
                for (a in (e.mimeType &&
                  s.overrideMimeType &&
                  s.overrideMimeType(e.mimeType),
                e.crossDomain ||
                  i["X-Requested-With"] ||
                  (i["X-Requested-With"] = "XMLHttpRequest"),
                i))
                  s.setRequestHeader(a, i[a]);
                (t = function (e) {
                  return function () {
                    t &&
                      ((t =
                        r =
                        s.onload =
                        s.onerror =
                        s.onabort =
                        s.ontimeout =
                        s.onreadystatechange =
                          null),
                      "abort" === e
                        ? s.abort()
                        : "error" === e
                        ? "number" != typeof s.status
                          ? o(0, "error")
                          : o(s.status, s.statusText)
                        : o(
                            Ut[s.status] || s.status,
                            s.statusText,
                            "text" !== (s.responseType || "text") ||
                              "string" != typeof s.responseText
                              ? { binary: s.response }
                              : { text: s.responseText },
                            s.getAllResponseHeaders()
                          ));
                  };
                }),
                  (s.onload = t()),
                  (r = s.onerror = s.ontimeout = t("error")),
                  void 0 !== s.onabort
                    ? (s.onabort = r)
                    : (s.onreadystatechange = function () {
                        4 === s.readyState &&
                          n.setTimeout(function () {
                            t && r();
                          });
                      }),
                  (t = t("abort"));
                try {
                  s.send((e.hasContent && e.data) || null);
                } catch (e) {
                  if (t) throw e;
                }
              },
              abort: function () {
                t && t();
              },
            };
        }),
        T.ajaxPrefilter(function (e) {
          e.crossDomain && (e.contents.script = !1);
        }),
        T.ajaxSetup({
          accepts: {
            script:
              "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
          },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            "text script": function (e) {
              return T.globalEval(e), e;
            },
          },
        }),
        T.ajaxPrefilter("script", function (e) {
          void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = "GET");
        }),
        T.ajaxTransport("script", function (e) {
          var t, n;
          if (e.crossDomain || e.scriptAttrs)
            return {
              send: function (r, i) {
                (t = T("<script>")
                  .attr(e.scriptAttrs || {})
                  .prop({ charset: e.scriptCharset, src: e.url })
                  .on(
                    "load error",
                    (n = function (e) {
                      t.remove(),
                        (n = null),
                        e && i("error" === e.type ? 404 : 200, e.type);
                    })
                  )),
                  b.head.appendChild(t[0]);
              },
              abort: function () {
                n && n();
              },
            };
        });
      var Vt,
        Gt = [],
        Jt = /(=)\?(?=&|$)|\?\?/;
      T.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
          var e = Gt.pop() || T.expando + "_" + St.guid++;
          return (this[e] = !0), e;
        },
      }),
        T.ajaxPrefilter("json jsonp", function (e, t, r) {
          var i,
            o,
            a,
            s =
              !1 !== e.jsonp &&
              (Jt.test(e.url)
                ? "url"
                : "string" == typeof e.data &&
                  0 ===
                    (e.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  Jt.test(e.data) &&
                  "data");
          if (s || "jsonp" === e.dataTypes[0])
            return (
              (i = e.jsonpCallback =
                m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
              s
                ? (e[s] = e[s].replace(Jt, "$1" + i))
                : !1 !== e.jsonp &&
                  (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
              (e.converters["script json"] = function () {
                return a || T.error(i + " was not called"), a[0];
              }),
              (e.dataTypes[0] = "json"),
              (o = n[i]),
              (n[i] = function () {
                a = arguments;
              }),
              r.always(function () {
                void 0 === o ? T(n).removeProp(i) : (n[i] = o),
                  e[i] && ((e.jsonpCallback = t.jsonpCallback), Gt.push(i)),
                  a && m(o) && o(a[0]),
                  (a = o = void 0);
              }),
              "script"
            );
        }),
        (v.createHTMLDocument =
          (((Vt = b.implementation.createHTMLDocument("").body).innerHTML =
            "<form></form><form></form>"),
          2 === Vt.childNodes.length)),
        (T.parseHTML = function (e, t, n) {
          return "string" != typeof e
            ? []
            : ("boolean" == typeof t && ((n = t), (t = !1)),
              t ||
                (v.createHTMLDocument
                  ? (((r = (t =
                      b.implementation.createHTMLDocument("")).createElement(
                      "base"
                    )).href = b.location.href),
                    t.head.appendChild(r))
                  : (t = b)),
              (o = !n && []),
              (i = N.exec(e))
                ? [t.createElement(i[1])]
                : ((i = Ce([e], t, o)),
                  o && o.length && T(o).remove(),
                  T.merge([], i.childNodes)));
          var r, i, o;
        }),
        (T.fn.load = function (e, t, n) {
          var r,
            i,
            o,
            a = this,
            s = e.indexOf(" ");
          return (
            s > -1 && ((r = yt(e.slice(s))), (e = e.slice(0, s))),
            m(t)
              ? ((n = t), (t = void 0))
              : t && "object" == typeof t && (i = "POST"),
            a.length > 0 &&
              T.ajax({ url: e, type: i || "GET", dataType: "html", data: t })
                .done(function (e) {
                  (o = arguments),
                    a.html(r ? T("<div>").append(T.parseHTML(e)).find(r) : e);
                })
                .always(
                  n &&
                    function (e, t) {
                      a.each(function () {
                        n.apply(this, o || [e.responseText, t, e]);
                      });
                    }
                ),
            this
          );
        }),
        (T.expr.pseudos.animated = function (e) {
          return T.grep(T.timers, function (t) {
            return e === t.elem;
          }).length;
        }),
        (T.offset = {
          setOffset: function (e, t, n) {
            var r,
              i,
              o,
              a,
              s,
              u,
              l = T.css(e, "position"),
              c = T(e),
              f = {};
            "static" === l && (e.style.position = "relative"),
              (s = c.offset()),
              (o = T.css(e, "top")),
              (u = T.css(e, "left")),
              ("absolute" === l || "fixed" === l) &&
              (o + u).indexOf("auto") > -1
                ? ((a = (r = c.position()).top), (i = r.left))
                : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
              m(t) && (t = t.call(e, n, T.extend({}, s))),
              null != t.top && (f.top = t.top - s.top + a),
              null != t.left && (f.left = t.left - s.left + i),
              "using" in t
                ? t.using.call(e, f)
                : ("number" == typeof f.top && (f.top += "px"),
                  "number" == typeof f.left && (f.left += "px"),
                  c.css(f));
          },
        }),
        T.fn.extend({
          offset: function (e) {
            if (arguments.length)
              return void 0 === e
                ? this
                : this.each(function (t) {
                    T.offset.setOffset(this, e, t);
                  });
            var t,
              n,
              r = this[0];
            return r
              ? r.getClientRects().length
                ? ((t = r.getBoundingClientRect()),
                  (n = r.ownerDocument.defaultView),
                  { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
                : { top: 0, left: 0 }
              : void 0;
          },
          position: function () {
            if (this[0]) {
              var e,
                t,
                n,
                r = this[0],
                i = { top: 0, left: 0 };
              if ("fixed" === T.css(r, "position"))
                t = r.getBoundingClientRect();
              else {
                for (
                  t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement;
                  e &&
                  (e === n.body || e === n.documentElement) &&
                  "static" === T.css(e, "position");

                )
                  e = e.parentNode;
                e &&
                  e !== r &&
                  1 === e.nodeType &&
                  (((i = T(e).offset()).top += T.css(e, "borderTopWidth", !0)),
                  (i.left += T.css(e, "borderLeftWidth", !0)));
              }
              return {
                top: t.top - i.top - T.css(r, "marginTop", !0),
                left: t.left - i.left - T.css(r, "marginLeft", !0),
              };
            }
          },
          offsetParent: function () {
            return this.map(function () {
              for (
                var e = this.offsetParent;
                e && "static" === T.css(e, "position");

              )
                e = e.offsetParent;
              return e || oe;
            });
          },
        }),
        T.each(
          { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
          function (e, t) {
            var n = "pageYOffset" === t;
            T.fn[e] = function (r) {
              return z(
                this,
                function (e, r, i) {
                  var o;
                  if (
                    (y(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView),
                    void 0 === i)
                  )
                    return o ? o[t] : e[r];
                  o
                    ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset)
                    : (e[r] = i);
                },
                e,
                r,
                arguments.length
              );
            };
          }
        ),
        T.each(["top", "left"], function (e, t) {
          T.cssHooks[t] = Xe(v.pixelPosition, function (e, n) {
            if (n)
              return (n = Ue(e, t)), Be.test(n) ? T(e).position()[t] + "px" : n;
          });
        }),
        T.each({ Height: "height", Width: "width" }, function (e, t) {
          T.each(
            { padding: "inner" + e, content: t, "": "outer" + e },
            function (n, r) {
              T.fn[r] = function (i, o) {
                var a = arguments.length && (n || "boolean" != typeof i),
                  s = n || (!0 === i || !0 === o ? "margin" : "border");
                return z(
                  this,
                  function (t, n, i) {
                    var o;
                    return y(t)
                      ? 0 === r.indexOf("outer")
                        ? t["inner" + e]
                        : t.document.documentElement["client" + e]
                      : 9 === t.nodeType
                      ? ((o = t.documentElement),
                        Math.max(
                          t.body["scroll" + e],
                          o["scroll" + e],
                          t.body["offset" + e],
                          o["offset" + e],
                          o["client" + e]
                        ))
                      : void 0 === i
                      ? T.css(t, n, s)
                      : T.style(t, n, i, s);
                  },
                  t,
                  a ? i : void 0,
                  a
                );
              };
            }
          );
        }),
        T.each(
          [
            "ajaxStart",
            "ajaxStop",
            "ajaxComplete",
            "ajaxError",
            "ajaxSuccess",
            "ajaxSend",
          ],
          function (e, t) {
            T.fn[t] = function (e) {
              return this.on(t, e);
            };
          }
        ),
        T.fn.extend({
          bind: function (e, t, n) {
            return this.on(e, null, t, n);
          },
          unbind: function (e, t) {
            return this.off(e, null, t);
          },
          delegate: function (e, t, n, r) {
            return this.on(t, e, n, r);
          },
          undelegate: function (e, t, n) {
            return 1 === arguments.length
              ? this.off(e, "**")
              : this.off(t, e || "**", n);
          },
          hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e);
          },
        }),
        T.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
            " "
          ),
          function (e, t) {
            T.fn[t] = function (e, n) {
              return arguments.length > 0
                ? this.on(t, null, e, n)
                : this.trigger(t);
            };
          }
        );
      var Yt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      (T.proxy = function (e, t) {
        var n, r, i;
        if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
          return (
            (r = s.call(arguments, 2)),
            ((i = function () {
              return e.apply(t || this, r.concat(s.call(arguments)));
            }).guid = e.guid =
              e.guid || T.guid++),
            i
          );
      }),
        (T.holdReady = function (e) {
          e ? T.readyWait++ : T.ready(!0);
        }),
        (T.isArray = Array.isArray),
        (T.parseJSON = JSON.parse),
        (T.nodeName = D),
        (T.isFunction = m),
        (T.isWindow = y),
        (T.camelCase = G),
        (T.type = C),
        (T.now = Date.now),
        (T.isNumeric = function (e) {
          var t = T.type(e);
          return (
            ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
          );
        }),
        (T.trim = function (e) {
          return null == e ? "" : (e + "").replace(Yt, "");
        }),
        void 0 ===
          (r = function () {
            return T;
          }.apply(t, [])) || (e.exports = r);
      var Qt = n.jQuery,
        Kt = n.$;
      return (
        (T.noConflict = function (e) {
          return (
            n.$ === T && (n.$ = Kt), e && n.jQuery === T && (n.jQuery = Qt), T
          );
        }),
        void 0 === i && (n.jQuery = n.$ = T),
        T
      );
    });
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    n(2), n(3);
  },
  function (e, t, n) {
    (function (r) {
      var i, o;
      /**!
       * easy-pie-chart
       * Lightweight plugin to render simple, animated and retina optimized pie charts
       *
       * @license
       * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)
       * @version 2.1.7
       **/ (i = [n(0)]),
        void 0 ===
          (o = function (e) {
            return (
              (n = function (e, t) {
                var n,
                  r = document.createElement("canvas");
                e.appendChild(r),
                  "object" == typeof G_vmlCanvasManager &&
                    G_vmlCanvasManager.initElement(r);
                var i = r.getContext("2d");
                r.width = r.height = t.size;
                var o = 1;
                window.devicePixelRatio > 1 &&
                  ((o = window.devicePixelRatio),
                  (r.style.width = r.style.height = [t.size, "px"].join("")),
                  (r.width = r.height = t.size * o),
                  i.scale(o, o)),
                  i.translate(t.size / 2, t.size / 2),
                  i.rotate((t.rotate / 180 - 0.5) * Math.PI);
                var a = (t.size - t.lineWidth) / 2;
                t.scaleColor && t.scaleLength && (a -= t.scaleLength + 2),
                  (Date.now =
                    Date.now ||
                    function () {
                      return +new Date();
                    });
                var s = function (e, t, n) {
                    var r = (n = Math.min(Math.max(-1, n || 0), 1)) <= 0;
                    i.beginPath(),
                      i.arc(0, 0, a, 0, 2 * Math.PI * n, r),
                      (i.strokeStyle = e),
                      (i.lineWidth = t),
                      i.stroke();
                  },
                  u =
                    window.requestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    function (e) {
                      window.setTimeout(e, 1e3 / 60);
                    },
                  l = function () {
                    t.scaleColor &&
                      (function () {
                        var e, n;
                        (i.lineWidth = 1),
                          (i.fillStyle = t.scaleColor),
                          i.save();
                        for (var r = 24; r > 0; --r)
                          r % 6 == 0
                            ? ((n = t.scaleLength), (e = 0))
                            : ((n = 0.6 * t.scaleLength),
                              (e = t.scaleLength - n)),
                            i.fillRect(-t.size / 2 + e, 0, n, 1),
                            i.rotate(Math.PI / 12);
                        i.restore();
                      })(),
                      t.trackColor &&
                        s(t.trackColor, t.trackWidth || t.lineWidth, 1);
                  };
                (this.getCanvas = function () {
                  return r;
                }),
                  (this.getCtx = function () {
                    return i;
                  }),
                  (this.clear = function () {
                    i.clearRect(t.size / -2, t.size / -2, t.size, t.size);
                  }),
                  (this.draw = function (e) {
                    var r;
                    t.scaleColor || t.trackColor
                      ? i.getImageData && i.putImageData
                        ? n
                          ? i.putImageData(n, 0, 0)
                          : (l(),
                            (n = i.getImageData(0, 0, t.size * o, t.size * o)))
                        : (this.clear(), l())
                      : this.clear(),
                      (i.lineCap = t.lineCap),
                      (r =
                        "function" == typeof t.barColor
                          ? t.barColor(e)
                          : t.barColor),
                      s(r, t.lineWidth, e / 100);
                  }.bind(this)),
                  (this.animate = function (e, n) {
                    var r = Date.now();
                    t.onStart(e, n);
                    var i = function () {
                      var o = Math.min(Date.now() - r, t.animate.duration),
                        a = t.easing(this, o, e, n - e, t.animate.duration);
                      this.draw(a),
                        t.onStep(e, n, a),
                        o >= t.animate.duration ? t.onStop(e, n) : u(i);
                    }.bind(this);
                    u(i);
                  }.bind(this));
              }),
              (i = function (e, t) {
                var i = {
                  barColor: "#ef1e25",
                  trackColor: "#f9f9f9",
                  scaleColor: "#dfe0e0",
                  scaleLength: 5,
                  lineCap: "round",
                  lineWidth: 3,
                  trackWidth: void 0,
                  size: 110,
                  rotate: 0,
                  animate: { duration: 1e3, enabled: !0 },
                  easing: function (e, t, n, r, i) {
                    return (t /= i / 2) < 1
                      ? (r / 2) * t * t + n
                      : (-r / 2) * (--t * (t - 2) - 1) + n;
                  },
                  onStart: function (e, t) {},
                  onStep: function (e, t, n) {},
                  onStop: function (e, t) {},
                };
                if (void 0 !== n) i.renderer = n;
                else {
                  if ("undefined" == typeof SVGRenderer)
                    throw new Error(
                      "Please load either the SVG- or the CanvasRenderer"
                    );
                  i.renderer = SVGRenderer;
                }
                var o = {},
                  a = 0,
                  s = function () {
                    for (var n in ((this.el = e), (this.options = o), i))
                      i.hasOwnProperty(n) &&
                        ((o[n] = t && void 0 !== t[n] ? t[n] : i[n]),
                        "function" == typeof o[n] && (o[n] = o[n].bind(this)));
                    "string" == typeof o.easing &&
                    void 0 !== r &&
                    r.isFunction(r.easing[o.easing])
                      ? (o.easing = r.easing[o.easing])
                      : (o.easing = i.easing),
                      "number" == typeof o.animate &&
                        (o.animate = { duration: o.animate, enabled: !0 }),
                      "boolean" != typeof o.animate ||
                        o.animate ||
                        (o.animate = { duration: 1e3, enabled: o.animate }),
                      (this.renderer = new o.renderer(e, o)),
                      this.renderer.draw(a),
                      e.dataset && e.dataset.percent
                        ? this.update(parseFloat(e.dataset.percent))
                        : e.getAttribute &&
                          e.getAttribute("data-percent") &&
                          this.update(
                            parseFloat(e.getAttribute("data-percent"))
                          );
                  }.bind(this);
                (this.update = function (e) {
                  return (
                    (e = parseFloat(e)),
                    o.animate.enabled
                      ? this.renderer.animate(a, e)
                      : this.renderer.draw(e),
                    (a = e),
                    this
                  );
                }.bind(this)),
                  (this.disableAnimation = function () {
                    return (o.animate.enabled = !1), this;
                  }),
                  (this.enableAnimation = function () {
                    return (o.animate.enabled = !0), this;
                  }),
                  s();
              }),
              void ((t = e).fn.easyPieChart = function (e) {
                return this.each(function () {
                  var n;
                  t.data(this, "easyPieChart") ||
                    ((n = t.extend({}, e, t(this).data())),
                    t.data(this, "easyPieChart", new i(this, n)));
                });
              })
            );
            var t, n, i;
          }.apply(t, i)) || (e.exports = o);
    }.call(this, n(0)));
  },
  function (e, t, n) {
    (function (e) {
      function t(e) {
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (e = (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return n(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === r && e.constructor && (r = e.constructor.name);
              if ("Map" === r || "Set" === r) return Array.from(e);
              if (
                "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              )
                return n(e, t);
            })(e))
          ) {
            var t = 0,
              r = function () {};
            return {
              s: r,
              n: function () {
                return t >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[t++] };
              },
              e: function (e) {
                throw e;
              },
              f: r,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var i,
          o,
          a = !0,
          s = !1;
        return {
          s: function () {
            i = e[Symbol.iterator]();
          },
          n: function () {
            var e = i.next();
            return (a = e.done), e;
          },
          e: function (e) {
            (s = !0), (o = e);
          },
          f: function () {
            try {
              a || null == i.return || i.return();
            } finally {
              if (s) throw o;
            }
          },
        };
      }
      function n(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      e(function () {
        e(".preloader").fadeOut(0),
          (function () {
            for (
              var t = e(".skills-container"),
                n = t.data("dir"),
                r = 0,
                i = [
                  {
                    name: "HTML 5",
                    pictureUrl: n + "/img/svg/html5.svg",
                    level: ["95"],
                    description:
                      "РЎС‚Р°РЅРґР°СЂС‚РёР·РёСЂРѕРІР°РЅРЅС‹Р№ СЏР·С‹Рє СЂР°Р·РјРµС‚РєРё РґРѕРєСѓРјРµРЅС‚РѕРІ РІ РёРЅС‚РµСЂРЅРµС‚Рµ",
                  },
                  {
                    name: "CSS 3",
                    pictureUrl: n + "/img/svg/css-logo.svg",
                    level: ["90"],
                    description:
                      "РЇР·С‹Рє РѕРїРёСЃР°РЅРёСЏ РІРЅРµС€РЅРµРіРѕ РІРёРґР° РґРѕРєСѓРјРµРЅС‚Р°",
                  },
                  {
                    name: "JavaScript ES6+",
                    pictureUrl:
                      "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
                    level: ["95"],
                    description:
                      "РЇР·С‹Рє РїСЂРѕРіСЂР°РјРјРёСЂРѕРІР°РЅРёСЏ РІС‹СЃРѕРєРѕРіРѕ СѓСЂРѕРІРЅСЏ, РёСЃРїРѕР»СЊР·СѓСЋС‰РёР№СЃСЏ РґР»СЏ РїСЂРёРґР°РЅРёСЏ РёРЅС‚РµСЂР°РєС‚РёРІРЅРѕСЃС‚Рё РІРµР±-СЃС‚СЂР°РЅРёС†Р°Рј",
                  },
                  {
                    name: "jQuery",
                    pictureUrl: n + "/img/svg/jquery.svg",
                    level: ["85"],
                    description:
                      "Р‘РёР±Р»РёРѕС‚РµРєР° JavaScript, РґРµР»Р°СЋС‰Р°СЏ РІР·Р°РёРјРѕРґРµР№СЃС‚РІРёРµ СЃ РІРёР·СѓР°Р»СЊРЅС‹РјРё СЃРѕСЃС‚Р°РІР»СЏСЋС‰РёРјРё СЃС‚СЂР°РЅРёС†С‹ Р±РѕР»РµРµ СѓРґРѕР±РЅС‹Рј",
                  },
                  {
                    name: "Bootstrap 4",
                    pictureUrl: n + "/img/svg/bootstrap.svg",
                    level: ["80"],
                    description:
                      "Р‘РёР±Р»РёРѕС‚РµРєР°, СЃРѕРґРµСЂР¶Р°С‰Р°СЏ Р·РЅР°С‡РёС‚РµР»СЊРЅРѕРµ РєРѕР»РёС‡РµСЃС‚РІРѕ РіРѕС‚РѕРІС‹С… СЂРµС€РµРЅРёР№ РєР°Рє РґР»СЏ РІРёР·СѓР°Р»СЊРЅРѕРіРѕ РѕС„РѕСЂРјР»РµРЅРёСЏ СЌР»РµРјРµРЅС‚РѕРІ РІРµР±-СЃС‚СЂР°РЅРёС†С‹, С‚Р°Рє Рё РґР»СЏ СЃРѕР·РґР°РЅРёСЏ РёРЅС‚РµСЂР°РєС‚РёРІРЅРѕСЃС‚Рё",
                  },
                  {
                    name: "React",
                    pictureUrl:
                      "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
                    level: ["70"],
                    description:
                      "JavaScript-Р±РёР±Р»РёРѕС‚РµРєР° СЃ РѕС‚РєСЂС‹С‚С‹Рј РёСЃС…РѕРґРЅС‹Рј РєРѕРґРѕРј РґР»СЏ СЂР°Р·СЂР°Р±РѕС‚РєРё РїРѕР»СЊР·РѕРІР°С‚РµР»СЊСЃРєРёС… РёРЅС‚РµСЂС„РµР№СЃРѕРІ",
                  },
                  {
                    name: "VueJS",
                    pictureUrl:
                      "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
                    level: ["60"],
                    description:
                      "JavaScript-С„СЂРµР№РјРІРѕСЂРє СЃ РѕС‚РєСЂС‹С‚С‹Рј РёСЃС…РѕРґРЅС‹Рј РєРѕРґРѕРј РґР»СЏ СЃРѕР·РґР°РЅРёСЏ РїРѕР»СЊР·РѕРІР°С‚РµР»СЊСЃРєРёС… РёРЅС‚РµСЂС„РµР№СЃРѕРІ",
                  },
                  {
                    name: "PHP7",
                    pictureUrl: n + "/img/svg/php.svg",
                    level: ["70"],
                    description:
                      "РќР°РёР±РѕР»РµРµ С‡Р°СЃС‚Рѕ РїСЂРёРјРµРЅСЏРµРјС‹Р№ СЏР·С‹Рє РїСЂРѕРіСЂР°РјРјРёСЂРѕРІР°РЅРёСЏ РґР»СЏ СЂР°Р·СЂР°Р±РѕС‚РєРё СЃРµСЂРІРµСЂРЅРѕР№ С‡Р°СЃС‚Рё РІРµР±-СЃР°Р№С‚РѕРІ Рё РІРµР±-РїСЂРёР»РѕР¶РµРЅРёР№",
                  },
                  {
                    name: "NodeJS",
                    pictureUrl:
                      "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
                    level: ["55"],
                    description:
                      "РџСЂРѕРіСЂР°РјРјРЅР°СЏ РїР»Р°С‚С„РѕСЂРјР°, РїРѕР·РІРѕР»СЏСЋС‰Р°СЏ РёСЃРїРѕР»СЊР·РѕРІР°С‚СЊ JavaScript РєР°Рє СЏР·С‹Рє РѕР±С‰РµРіРѕ РЅР°Р·РЅР°С‡РµРЅРёСЏ РІРЅРµ РѕРєРЅР° Р±СЂР°СѓР·РµСЂР°",
                  },
                  {
                    name: "Webpack",
                    pictureUrl: n + "/img/svg/webpack.svg",
                    level: ["70"],
                    description:
                      'РќР°РёР±РѕР»РµРµ РјРѕС‰РЅС‹Р№ РёРЅСЃС‚СЂСѓРјРµРЅС‚ РґР»СЏ РїСЂРѕРІРµРґРµРЅРёСЏ "СЃР±РѕСЂРєРё" frontend\'Р° РІРµР±-СЃР°Р№С‚РѕРІ',
                  },
                  {
                    name: "Babel",
                    pictureUrl:
                      "https://upload.wikimedia.org/wikipedia/commons/0/02/Babel_Logo.svg",
                    level: ["90"],
                    description:
                      "РљРѕРјРїРёР»СЏС‚РѕСЂ JavaScript СЃ РѕС‚РєСЂС‹С‚С‹Рј РёСЃС…РѕРґРЅС‹Рј РєРѕРґРѕРј Рё РЅР°СЃС‚СЂР°РёРІР°РµРјС‹Р№ С‚СЂР°РЅСЃРїРёР»СЏС‚РѕСЂ, РёСЃРїРѕР»СЊР·СѓРµРјС‹Р№ РІ РІРµР±-СЂР°Р·СЂР°Р±РѕС‚РєРµ",
                  },
                  {
                    name: "Wordpress",
                    pictureUrl:
                      "https://upload.wikimedia.org/wikipedia/commons/0/09/Wordpress-Logo.svg",
                    level: ["60"],
                    description:
                      "РЎР°РјР°СЏ РїРѕРїСѓР»СЏСЂРЅР°СЏ СЃРёСЃС‚РµРјР° СѓРїСЂР°РІР»РµРЅРёСЏ РєРѕРЅС‚РµРЅС‚РѕРј РґР»СЏ РІРµР±-СЃР°Р№С‚РѕРІ",
                  },
                ];
              r < i.length;
              r++
            ) {
              var o = i[r],
                a =
                  '\n            <div class="skill-item animatedIn">\n                <img src="'
                    .concat(o.pictureUrl, '" alt="')
                    .concat(
                      o.name,
                      '">\n                <div class="skill-description">\n                    <h3>'
                    )
                    .concat(o.name, "</h3>\n                    <p>")
                    .concat(
                      o.description,
                      '</p>\n                    <span class="underlined">РЈСЂРѕРІРµРЅСЊ РІР»Р°РґРµРЅРёСЏ:</span>\n                    <div class="skill-level">\n                        <span data-percent="'
                    )
                    .concat(
                      o.level,
                      '" class="chart easyPieChart" style="width: 140px; height: 140px; line-height: 140px;">\n                            <span class="percent">'
                    )
                    .concat(
                      o.level,
                      "</span>\n                        </span>\n                    </div>\n                </div>\n            </div>\n            "
                    );
              t.append(a);
            }
          })();
        var n = e(window),
          r = n[0],
          i = n[0].innerHeight,
          o = e("#services").offset().top,
          a = e("#portfolio").offset().top,
          s = e("#skills").offset().top,
          u = e("#about").offset().top,
          l = e("#contact").offset().top,
          c = 0;
        function f(t) {
          var n = e(".animatedIn");
          if (n.length > 0)
            for (
              var r = function (r) {
                  var o = e(n[r]);
                  if (!(o.offset().top < t + i - 100)) return "break";
                  o.hasClass("toFadeInLeft")
                    ? (o.addClass("fadeInLeft"),
                      o.removeClass("toFadeInLeft"),
                      setTimeout(function () {
                        o.removeClass("fadeInLeft"), o.css("opacity", "1");
                      }, 1e3))
                    : o.hasClass("toFadeInRight")
                    ? (o.addClass("fadeInRight"),
                      o.removeClass("toFadeInRight"),
                      setTimeout(function () {
                        o.removeClass("fadeInRight"), o.css("opacity", "1");
                      }, 1e3))
                    : (o.addClass("fadeInBottom"),
                      o.removeClass("toFadeInBottom"),
                      setTimeout(function () {
                        o.removeClass("fadeInBottom"), o.css("opacity", "1");
                      }, 1e3)),
                    o.removeClass("animatedIn");
                },
                o = 0;
              o < n.length;
              o++
            ) {
              if ("break" === r(o)) break;
            }
        }
        n.one("scroll", function () {
          (i = r.innerHeight),
            (o = e("#services").offset().top),
            (a = e("#portfolio").offset().top),
            (s = e("#skills").offset().top),
            (u = e("#about").offset().top),
            (l = e("#contact").offset().top);
        }),
          n.resize(function () {
            (i = n[0].innerHeight),
              (o = e("#services").offset().top),
              (a = e("#portfolio").offset().top),
              (s = e("#skills").offset().top),
              (u = e("#about").offset().top),
              (l = e("#contact").offset().top);
          }),
          e(".anchor").click(function (t) {
            t.preventDefault();
            var n = e(this).attr("href"),
              r = e(n).offset().top;
            e("body,html").animate({ scrollTop: r }, 600);
          }),
          n.scroll(function () {
            var t = r.scrollY;
            if (
              (t < i &&
                r.innerWidth > 360 &&
                e("#home").css("background-position-y", t / -5),
              t > c + 50 || t < c - 50)
            ) {
              c = t;
              var n = t + 77;
              n < o
                ? (e(".link-home").addClass("active"),
                  e(".link-home").siblings().removeClass("active"))
                : n < a
                ? (e(".link-services").addClass("active"),
                  e(".link-services").siblings().removeClass("active"))
                : n < s
                ? (e(".link-portfolio").addClass("active"),
                  e(".link-portfolio").siblings().removeClass("active"))
                : n < u
                ? (e(".link-skills").addClass("active"),
                  e(".link-skills").siblings().removeClass("active"))
                : n < l
                ? (e(".link-about").addClass("active"),
                  e(".link-about").siblings().removeClass("active"))
                : (e(".link-contact").addClass("active"),
                  e(".link-contact").siblings().removeClass("active"));
            }
            f(t);
          }),
          e(".menu-toggler > i").click(function () {
            var t = e(".menu-toggler > i");
            e(".vertical-menu").slideToggle(),
              t.addClass("spinning"),
              t.toggleClass("fa-times"),
              t.toggleClass("fa-bars"),
              setTimeout(function () {
                t.removeClass("spinning");
              }, 500);
          }),
          e(".chart").easyPieChart({
            size: 140,
            lineCap: "butt",
            scaleColor: !1,
            barColor: "#FF5252",
            trackColor: "transparent",
            lineWidth: 10,
          }),
          e(".overlay").click(function () {
            e(".overlay").fadeOut(0);
          }),
          e(".portfolio-item-inner").click(function () {
            var t = this;
            e(".overlay, .close-modal").show(0);
            var n = e(this.children[1]);
            !(function (e) {
              var t = (e = e[0]).children[0];
              if ("" === t.getAttribute("src")) {
                t.setAttribute("src", t.getAttribute("data-src")),
                  t.removeAttribute("data-src");
                var n =
                  "url('" + t.getAttribute("src") + "') no-repeat top center";
                e.style.background = n;
              }
            })(n),
              n.fadeIn(300, function () {
                e("body").width() >= 992 &&
                  setTimeout(function () {
                    e(t.children[1].children[1]).css("opacity", 0);
                  }, 500);
              }),
              e("body").css("overflow", "hidden");
          }),
          e(".overlay, .close-modal").click(function () {
            e(".fullscreen-picture").removeClass("shown"),
              e(".fullscreen-picture").fadeOut(50),
              e(".overlay, .close-modal").fadeOut(100),
              e(".fullscreen-picture .picture-text").css("opacity", ""),
              e("body").css("overflow", "auto");
          }),
          e(".contact-form").submit(function (n) {
            n.preventDefault();
            var r,
              i = e(this),
              o = {},
              a = t(e(this).serializeArray());
            try {
              for (a.s(); !(r = a.n()).done; ) {
                var s = r.value;
                o[s.name] = s.value;
              }
            } catch (e) {
              a.e(e);
            } finally {
              a.f();
            }
            i.find("button[type=submit]").prop("disabled", !0);
            var u = grecaptcha.getResponse();
            (o.captcha = u),
              e.ajax({
                type: "POST",
                url: window.wp_data.ajax_url,
                data: { action: i.attr("action"), item: o },
                success: function (t) {
                  1 == t
                    ? e(".contact-form").fadeOut(1e3, function () {
                        e(".success-form-sending").slideDown(300);
                      })
                    : console.log(t);
                },
              });
          }),
          e(document).keydown(function (t) {
            27 === t.keyCode &&
              "none" !== e(".overlay").css("display") &&
              e(".overlay").click();
          }),
          f(r.scrollY),
          e(".mobile-nav-toggler").click(function () {
            e(".blog-sidebar").toggleClass("show");
          });
      });
    }.call(this, n(0)));
  },
]);
