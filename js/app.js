/*! For license information please see app.min.js.LICENSE.txt */
(() => {
  var e = {
      732: function (e) {
        e.exports = (function () {
          "use strict";
          function e() {
            return (
              (e =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var i = arguments[t];
                    for (var s in i)
                      Object.prototype.hasOwnProperty.call(i, s) &&
                        (e[s] = i[s]);
                  }
                  return e;
                }),
              e.apply(this, arguments)
            );
          }
          var t = "undefined" != typeof window,
            i =
              (t && !("onscroll" in window)) ||
              ("undefined" != typeof navigator &&
                /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
            s = t && "IntersectionObserver" in window,
            n = t && "classList" in document.createElement("p"),
            r = t && window.devicePixelRatio > 1,
            o = {
              elements_selector: ".lazy",
              container: i || t ? document : null,
              threshold: 300,
              thresholds: null,
              data_src: "src",
              data_srcset: "srcset",
              data_sizes: "sizes",
              data_bg: "bg",
              data_bg_hidpi: "bg-hidpi",
              data_bg_multi: "bg-multi",
              data_bg_multi_hidpi: "bg-multi-hidpi",
              data_bg_set: "bg-set",
              data_poster: "poster",
              class_applied: "applied",
              class_loading: "loading",
              class_loaded: "loaded",
              class_error: "error",
              class_entered: "entered",
              class_exited: "exited",
              unobserve_completed: !0,
              unobserve_entered: !1,
              cancel_on_exit: !0,
              callback_enter: null,
              callback_exit: null,
              callback_applied: null,
              callback_loading: null,
              callback_loaded: null,
              callback_error: null,
              callback_finish: null,
              callback_cancel: null,
              use_native: !1,
              restore_on_error: !1,
            },
            a = function (t) {
              return e({}, o, t);
            },
            l = function (e, t) {
              var i,
                s = "LazyLoad::Initialized",
                n = new e(t);
              try {
                i = new CustomEvent(s, { detail: { instance: n } });
              } catch (e) {
                (i = document.createEvent("CustomEvent")).initCustomEvent(
                  s,
                  !1,
                  !1,
                  { instance: n },
                );
              }
              window.dispatchEvent(i);
            },
            d = "src",
            c = "srcset",
            u = "sizes",
            p = "poster",
            h = "llOriginalAttrs",
            g = "data",
            m = "loading",
            f = "loaded",
            v = "applied",
            y = "error",
            b = "native",
            w = "data-",
            S = "ll-status",
            T = function (e, t) {
              return e.getAttribute(w + t);
            },
            x = function (e) {
              return T(e, S);
            },
            E = function (e, t) {
              return (function (e, t, i) {
                var s = "data-ll-status";
                null !== i ? e.setAttribute(s, i) : e.removeAttribute(s);
              })(e, 0, t);
            },
            C = function (e) {
              return E(e, null);
            },
            I = function (e) {
              return null === x(e);
            },
            M = function (e) {
              return x(e) === b;
            },
            L = [m, f, v, y],
            _ = function (e, t, i, s) {
              e &&
                (void 0 === s ? (void 0 === i ? e(t) : e(t, i)) : e(t, i, s));
            },
            P = function (e, t) {
              n
                ? e.classList.add(t)
                : (e.className += (e.className ? " " : "") + t);
            },
            k = function (e, t) {
              n
                ? e.classList.remove(t)
                : (e.className = e.className
                    .replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ")
                    .replace(/^\s+/, "")
                    .replace(/\s+$/, ""));
            },
            A = function (e) {
              return e.llTempImage;
            },
            O = function (e, t) {
              if (t) {
                var i = t._observer;
                i && i.unobserve(e);
              }
            },
            z = function (e, t) {
              e && (e.loadingCount += t);
            },
            D = function (e, t) {
              e && (e.toLoadCount = t);
            },
            G = function (e) {
              for (var t, i = [], s = 0; (t = e.children[s]); s += 1)
                "SOURCE" === t.tagName && i.push(t);
              return i;
            },
            B = function (e, t) {
              var i = e.parentNode;
              i && "PICTURE" === i.tagName && G(i).forEach(t);
            },
            F = function (e, t) {
              G(e).forEach(t);
            },
            N = [d],
            V = [d, p],
            H = [d, c, u],
            $ = [g],
            j = function (e) {
              return !!e[h];
            },
            R = function (e) {
              return e[h];
            },
            q = function (e) {
              return delete e[h];
            },
            W = function (e, t) {
              if (!j(e)) {
                var i = {};
                t.forEach(function (t) {
                  i[t] = e.getAttribute(t);
                }),
                  (e[h] = i);
              }
            },
            Y = function (e, t) {
              if (j(e)) {
                var i = R(e);
                t.forEach(function (t) {
                  !(function (e, t, i) {
                    i ? e.setAttribute(t, i) : e.removeAttribute(t);
                  })(e, t, i[t]);
                });
              }
            },
            X = function (e, t, i) {
              P(e, t.class_applied),
                E(e, v),
                i &&
                  (t.unobserve_completed && O(e, t),
                  _(t.callback_applied, e, i));
            },
            U = function (e, t, i) {
              P(e, t.class_loading),
                E(e, m),
                i && (z(i, 1), _(t.callback_loading, e, i));
            },
            K = function (e, t, i) {
              i && e.setAttribute(t, i);
            },
            Q = function (e, t) {
              K(e, u, T(e, t.data_sizes)),
                K(e, c, T(e, t.data_srcset)),
                K(e, d, T(e, t.data_src));
            },
            J = {
              IMG: function (e, t) {
                B(e, function (e) {
                  W(e, H), Q(e, t);
                }),
                  W(e, H),
                  Q(e, t);
              },
              IFRAME: function (e, t) {
                W(e, N), K(e, d, T(e, t.data_src));
              },
              VIDEO: function (e, t) {
                F(e, function (e) {
                  W(e, N), K(e, d, T(e, t.data_src));
                }),
                  W(e, V),
                  K(e, p, T(e, t.data_poster)),
                  K(e, d, T(e, t.data_src)),
                  e.load();
              },
              OBJECT: function (e, t) {
                W(e, $), K(e, g, T(e, t.data_src));
              },
            },
            Z = ["IMG", "IFRAME", "VIDEO", "OBJECT"],
            ee = function (e, t) {
              !t ||
                (function (e) {
                  return e.loadingCount > 0;
                })(t) ||
                (function (e) {
                  return e.toLoadCount > 0;
                })(t) ||
                _(e.callback_finish, t);
            },
            te = function (e, t, i) {
              e.addEventListener(t, i), (e.llEvLisnrs[t] = i);
            },
            ie = function (e, t, i) {
              e.removeEventListener(t, i);
            },
            se = function (e) {
              return !!e.llEvLisnrs;
            },
            ne = function (e) {
              if (se(e)) {
                var t = e.llEvLisnrs;
                for (var i in t) {
                  var s = t[i];
                  ie(e, i, s);
                }
                delete e.llEvLisnrs;
              }
            },
            re = function (e, t, i) {
              !(function (e) {
                delete e.llTempImage;
              })(e),
                z(i, -1),
                (function (e) {
                  e && (e.toLoadCount -= 1);
                })(i),
                k(e, t.class_loading),
                t.unobserve_completed && O(e, i);
            },
            oe = function (e, t, i) {
              var s = A(e) || e;
              se(s) ||
                (function (e, t, i) {
                  se(e) || (e.llEvLisnrs = {});
                  var s = "VIDEO" === e.tagName ? "loadeddata" : "load";
                  te(e, s, t), te(e, "error", i);
                })(
                  s,
                  function (n) {
                    !(function (e, t, i, s) {
                      var n = M(t);
                      re(t, i, s),
                        P(t, i.class_loaded),
                        E(t, f),
                        _(i.callback_loaded, t, s),
                        n || ee(i, s);
                    })(0, e, t, i),
                      ne(s);
                  },
                  function (n) {
                    !(function (e, t, i, s) {
                      var n = M(t);
                      re(t, i, s),
                        P(t, i.class_error),
                        E(t, y),
                        _(i.callback_error, t, s),
                        i.restore_on_error && Y(t, H),
                        n || ee(i, s);
                    })(0, e, t, i),
                      ne(s);
                  },
                );
            },
            ae = function (e, t, i) {
              !(function (e) {
                return Z.indexOf(e.tagName) > -1;
              })(e)
                ? (function (e, t, i) {
                    !(function (e) {
                      e.llTempImage = document.createElement("IMG");
                    })(e),
                      oe(e, t, i),
                      (function (e) {
                        j(e) ||
                          (e[h] = { backgroundImage: e.style.backgroundImage });
                      })(e),
                      (function (e, t, i) {
                        var s = T(e, t.data_bg),
                          n = T(e, t.data_bg_hidpi),
                          o = r && n ? n : s;
                        o &&
                          ((e.style.backgroundImage = 'url("'.concat(o, '")')),
                          A(e).setAttribute(d, o),
                          U(e, t, i));
                      })(e, t, i),
                      (function (e, t, i) {
                        var s = T(e, t.data_bg_multi),
                          n = T(e, t.data_bg_multi_hidpi),
                          o = r && n ? n : s;
                        o && ((e.style.backgroundImage = o), X(e, t, i));
                      })(e, t, i),
                      (function (e, t, i) {
                        var s = T(e, t.data_bg_set);
                        if (s) {
                          var n = s.split("|"),
                            r = n.map(function (e) {
                              return "image-set(".concat(e, ")");
                            });
                          (e.style.backgroundImage = r.join()),
                            "" === e.style.backgroundImage &&
                              ((r = n.map(function (e) {
                                return "-webkit-image-set(".concat(e, ")");
                              })),
                              (e.style.backgroundImage = r.join())),
                            X(e, t, i);
                        }
                      })(e, t, i);
                  })(e, t, i)
                : (function (e, t, i) {
                    oe(e, t, i),
                      (function (e, t, i) {
                        var s = J[e.tagName];
                        s && (s(e, t), U(e, t, i));
                      })(e, t, i);
                  })(e, t, i);
            },
            le = function (e) {
              e.removeAttribute(d), e.removeAttribute(c), e.removeAttribute(u);
            },
            de = function (e) {
              B(e, function (e) {
                Y(e, H);
              }),
                Y(e, H);
            },
            ce = {
              IMG: de,
              IFRAME: function (e) {
                Y(e, N);
              },
              VIDEO: function (e) {
                F(e, function (e) {
                  Y(e, N);
                }),
                  Y(e, V),
                  e.load();
              },
              OBJECT: function (e) {
                Y(e, $);
              },
            },
            ue = function (e, t) {
              (function (e) {
                var t = ce[e.tagName];
                t
                  ? t(e)
                  : (function (e) {
                      if (j(e)) {
                        var t = R(e);
                        e.style.backgroundImage = t.backgroundImage;
                      }
                    })(e);
              })(e),
                (function (e, t) {
                  I(e) ||
                    M(e) ||
                    (k(e, t.class_entered),
                    k(e, t.class_exited),
                    k(e, t.class_applied),
                    k(e, t.class_loading),
                    k(e, t.class_loaded),
                    k(e, t.class_error));
                })(e, t),
                C(e),
                q(e);
            },
            pe = ["IMG", "IFRAME", "VIDEO"],
            he = function (e) {
              return e.use_native && "loading" in HTMLImageElement.prototype;
            },
            ge = function (e, t, i) {
              e.forEach(function (e) {
                return (function (e) {
                  return e.isIntersecting || e.intersectionRatio > 0;
                })(e)
                  ? (function (e, t, i, s) {
                      var n = (function (e) {
                        return L.indexOf(x(e)) >= 0;
                      })(e);
                      E(e, "entered"),
                        P(e, i.class_entered),
                        k(e, i.class_exited),
                        (function (e, t, i) {
                          t.unobserve_entered && O(e, i);
                        })(e, i, s),
                        _(i.callback_enter, e, t, s),
                        n || ae(e, i, s);
                    })(e.target, e, t, i)
                  : (function (e, t, i, s) {
                      I(e) ||
                        (P(e, i.class_exited),
                        (function (e, t, i, s) {
                          i.cancel_on_exit &&
                            (function (e) {
                              return x(e) === m;
                            })(e) &&
                            "IMG" === e.tagName &&
                            (ne(e),
                            (function (e) {
                              B(e, function (e) {
                                le(e);
                              }),
                                le(e);
                            })(e),
                            de(e),
                            k(e, i.class_loading),
                            z(s, -1),
                            C(e),
                            _(i.callback_cancel, e, t, s));
                        })(e, t, i, s),
                        _(i.callback_exit, e, t, s));
                    })(e.target, e, t, i);
              });
            },
            me = function (e) {
              return Array.prototype.slice.call(e);
            },
            fe = function (e) {
              return e.container.querySelectorAll(e.elements_selector);
            },
            ve = function (e) {
              return (function (e) {
                return x(e) === y;
              })(e);
            },
            ye = function (e, t) {
              return (function (e) {
                return me(e).filter(I);
              })(e || fe(t));
            },
            be = function (e, i) {
              var n = a(e);
              (this._settings = n),
                (this.loadingCount = 0),
                (function (e, t) {
                  s &&
                    !he(e) &&
                    (t._observer = new IntersectionObserver(
                      function (i) {
                        ge(i, e, t);
                      },
                      (function (e) {
                        return {
                          root: e.container === document ? null : e.container,
                          rootMargin: e.thresholds || e.threshold + "px",
                        };
                      })(e),
                    ));
                })(n, this),
                (function (e, i) {
                  t &&
                    ((i._onlineHandler = function () {
                      !(function (e, t) {
                        var i;
                        ((i = fe(e)), me(i).filter(ve)).forEach(function (t) {
                          k(t, e.class_error), C(t);
                        }),
                          t.update();
                      })(e, i);
                    }),
                    window.addEventListener("online", i._onlineHandler));
                })(n, this),
                this.update(i);
            };
          return (
            (be.prototype = {
              update: function (e) {
                var t,
                  n,
                  r = this._settings,
                  o = ye(e, r);
                D(this, o.length),
                  !i && s
                    ? he(r)
                      ? (function (e, t, i) {
                          e.forEach(function (e) {
                            -1 !== pe.indexOf(e.tagName) &&
                              (function (e, t, i) {
                                e.setAttribute("loading", "lazy"),
                                  oe(e, t, i),
                                  (function (e, t) {
                                    var i = J[e.tagName];
                                    i && i(e, t);
                                  })(e, t),
                                  E(e, b);
                              })(e, t, i);
                          }),
                            D(i, 0);
                        })(o, r, this)
                      : ((n = o),
                        (function (e) {
                          e.disconnect();
                        })((t = this._observer)),
                        (function (e, t) {
                          t.forEach(function (t) {
                            e.observe(t);
                          });
                        })(t, n))
                    : this.loadAll(o);
              },
              destroy: function () {
                this._observer && this._observer.disconnect(),
                  t &&
                    window.removeEventListener("online", this._onlineHandler),
                  fe(this._settings).forEach(function (e) {
                    q(e);
                  }),
                  delete this._observer,
                  delete this._settings,
                  delete this._onlineHandler,
                  delete this.loadingCount,
                  delete this.toLoadCount;
              },
              loadAll: function (e) {
                var t = this,
                  i = this._settings;
                ye(e, i).forEach(function (e) {
                  O(e, t), ae(e, i, t);
                });
              },
              restoreAll: function () {
                var e = this._settings;
                fe(e).forEach(function (t) {
                  ue(t, e);
                });
              },
            }),
            (be.load = function (e, t) {
              var i = a(t);
              ae(e, i);
            }),
            (be.resetStatus = function (e) {
              C(e);
            }),
            t &&
              (function (e, t) {
                if (t)
                  if (t.length) for (var i, s = 0; (i = t[s]); s += 1) l(e, i);
                  else l(e, t);
              })(be, window.lazyLoadOptions),
            be
          );
        })();
      },
    },
    t = {};
  function i(s) {
    var n = t[s];
    if (void 0 !== n) return n.exports;
    var r = (t[s] = { exports: {} });
    return e[s].call(r.exports, r, r.exports, i), r.exports;
  }
  (() => {
    "use strict";
    function e(e) {
      this.type = e;
    }
    (e.prototype.init = function () {
      const e = this;
      (this.оbjects = []),
        (this.daClassname = "_dynamic_adapt_"),
        (this.nodes = document.querySelectorAll("[data-da]"));
      for (let e = 0; e < this.nodes.length; e++) {
        const t = this.nodes[e],
          i = t.dataset.da.trim().split(","),
          s = {};
        (s.element = t),
          (s.parent = t.parentNode),
          (s.destination = document.querySelector(i[0].trim())),
          (s.breakpoint = i[1] ? i[1].trim() : "767"),
          (s.place = i[2] ? i[2].trim() : "last"),
          (s.index = this.indexInParent(s.parent, s.element)),
          this.оbjects.push(s);
      }
      this.arraySort(this.оbjects),
        (this.mediaQueries = Array.prototype.map.call(
          this.оbjects,
          function (e) {
            return (
              "(" +
              this.type +
              "-width: " +
              e.breakpoint +
              "px)," +
              e.breakpoint
            );
          },
          this,
        )),
        (this.mediaQueries = Array.prototype.filter.call(
          this.mediaQueries,
          function (e, t, i) {
            return Array.prototype.indexOf.call(i, e) === t;
          },
        ));
      for (let t = 0; t < this.mediaQueries.length; t++) {
        const i = this.mediaQueries[t],
          s = String.prototype.split.call(i, ","),
          n = window.matchMedia(s[0]),
          r = s[1],
          o = Array.prototype.filter.call(this.оbjects, function (e) {
            return e.breakpoint === r;
          });
        n.addListener(function () {
          e.mediaHandler(n, o);
        }),
          this.mediaHandler(n, o);
      }
    }),
      (e.prototype.mediaHandler = function (e, t) {
        if (e.matches)
          for (let e = 0; e < t.length; e++) {
            const i = t[e];
            (i.index = this.indexInParent(i.parent, i.element)),
              this.moveTo(i.place, i.element, i.destination);
          }
        else
          for (let e = t.length - 1; e >= 0; e--) {
            const i = t[e];
            i.element.classList.contains(this.daClassname) &&
              this.moveBack(i.parent, i.element, i.index);
          }
      }),
      (e.prototype.moveTo = function (e, t, i) {
        t.classList.add(this.daClassname),
          "last" === e || e >= i.children.length
            ? i.insertAdjacentElement("beforeend", t)
            : "first" !== e
            ? i.children[e].insertAdjacentElement("beforebegin", t)
            : i.insertAdjacentElement("afterbegin", t);
      }),
      (e.prototype.moveBack = function (e, t, i) {
        t.classList.remove(this.daClassname),
          void 0 !== e.children[i]
            ? e.children[i].insertAdjacentElement("beforebegin", t)
            : e.insertAdjacentElement("beforeend", t);
      }),
      (e.prototype.indexInParent = function (e, t) {
        const i = Array.prototype.slice.call(e.children);
        return Array.prototype.indexOf.call(i, t);
      }),
      (e.prototype.arraySort = function (e) {
        "min" === this.type
          ? Array.prototype.sort.call(e, function (e, t) {
              return e.breakpoint === t.breakpoint
                ? e.place === t.place
                  ? 0
                  : "first" === e.place || "last" === t.place
                  ? -1
                  : "last" === e.place || "first" === t.place
                  ? 1
                  : e.place - t.place
                : e.breakpoint - t.breakpoint;
            })
          : Array.prototype.sort.call(e, function (e, t) {
              return e.breakpoint === t.breakpoint
                ? e.place === t.place
                  ? 0
                  : "first" === e.place || "last" === t.place
                  ? 1
                  : "last" === e.place || "first" === t.place
                  ? -1
                  : t.place - e.place
                : t.breakpoint - e.breakpoint;
            });
      });
    new e("max").init();
    let t = !0,
      s = (e = 500) => {
        let i = document.querySelector("body");
        if (t) {
          let s = document.querySelectorAll("[data-lp]");
          setTimeout(() => {
            for (let e = 0; e < s.length; e++) {
              s[e].style.paddingRight = "0px";
            }
            (i.style.paddingRight = "0px"),
              document.documentElement.classList.remove("lock");
          }, e),
            (t = !1),
            setTimeout(function () {
              t = !0;
            }, e);
        }
      },
      n = (e = 500) => {
        let i = document.querySelector("body");
        if (t) {
          let s = document.querySelectorAll("[data-lp]");
          for (let e = 0; e < s.length; e++) {
            s[e].style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px";
          }
          (i.style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px"),
            document.documentElement.classList.add("lock"),
            (t = !1),
            setTimeout(function () {
              t = !0;
            }, e);
        }
      };
    function r(e) {
      setTimeout(() => {
        window.FLS && console.log(e);
      }, 0);
    }
    let o = (e, t = !1, i = 500, n = 0) => {
      const o = document.querySelector(e);
      if (o) {
        let a = "",
          l = 0;
        t &&
          ((a = "header.header"), (l = document.querySelector(a).offsetHeight));
        let d = {
          speedAsDuration: !0,
          speed: i,
          header: a,
          offset: n,
          easing: "easeOutQuad",
        };
        if (
          (document.documentElement.classList.contains("menu-open") &&
            (s(), document.documentElement.classList.remove("menu-open")),
          "undefined" != typeof SmoothScroll)
        )
          new SmoothScroll().animateScroll(o, "", d);
        else {
          let e = o.getBoundingClientRect().top + scrollY;
          window.scrollTo({ top: l ? e - l : e, behavior: "smooth" });
        }
        r(`[gotoBlock]: Юхуу...едем к ${e}`);
      } else r(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${e}`);
    };
    const a = { inputMaskModule: null, selectModule: null };
    let l = {
      getErrors(e) {
        let t = 0,
          i = e.querySelectorAll("*[data-required]");
        return (
          i.length &&
            i.forEach((e) => {
              (null === e.offsetParent && "SELECT" !== e.tagName) ||
                e.disabled ||
                (t += this.validateInput(e));
            }),
          t
        );
      },
      validateInput(e) {
        let t = 0;
        return (
          "email" === e.dataset.required
            ? ((e.value = e.value.replace(" ", "")),
              this.emailTest(e) ? (this.addError(e), t++) : this.removeError(e))
            : ("checkbox" !== e.type || e.checked) && e.value
            ? this.removeError(e)
            : (this.addError(e), t++),
          t
        );
      },
      addError(e) {
        e.classList.add("_form-error"),
          e.parentElement.classList.add("_form-error");
        let t = e.parentElement.querySelector(".form__error");
        t && e.parentElement.removeChild(t),
          e.dataset.error &&
            e.parentElement.insertAdjacentHTML(
              "beforeend",
              `<div class="form__error">${e.dataset.error}</div>`,
            );
      },
      removeError(e) {
        e.classList.remove("_form-error"),
          e.parentElement.classList.remove("_form-error"),
          e.parentElement.querySelector(".form__error") &&
            e.parentElement.removeChild(
              e.parentElement.querySelector(".form__error"),
            );
      },
      formClean(e) {
        e.reset(),
          setTimeout(() => {
            let t = e.querySelectorAll("input,textarea");
            for (let e = 0; e < t.length; e++) {
              const i = t[e];
              i.parentElement.classList.remove("_form-focus"),
                i.classList.remove("_form-focus"),
                l.removeError(i),
                (i.value = i.dataset.placeholder);
            }
            let i = e.querySelectorAll(".checkbox__input");
            if (i.length > 0)
              for (let e = 0; e < i.length; e++) {
                i[e].checked = !1;
              }
            if (a.selectModule) {
              let t = e.querySelectorAll(".select");
              if (t.length)
                for (let e = 0; e < t.length; e++) {
                  const i = t[e].querySelector("select");
                  a.selectModule.selectBuild(i);
                }
            }
          }, 0);
      },
      emailTest: (e) =>
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value),
    };
    function d(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function c(e, t) {
      void 0 === e && (e = {}),
        void 0 === t && (t = {}),
        Object.keys(t).forEach((i) => {
          void 0 === e[i]
            ? (e[i] = t[i])
            : d(t[i]) &&
              d(e[i]) &&
              Object.keys(t[i]).length > 0 &&
              c(e[i], t[i]);
        });
    }
    const u = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: { blur() {}, nodeName: "" },
      querySelector: () => null,
      querySelectorAll: () => [],
      getElementById: () => null,
      createEvent: () => ({ initEvent() {} }),
      createElement: () => ({
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName: () => [],
      }),
      createElementNS: () => ({}),
      importNode: () => null,
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
    };
    function p() {
      const e = "undefined" != typeof document ? document : {};
      return c(e, u), e;
    }
    const h = {
      document: u,
      navigator: { userAgent: "" },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
      history: { replaceState() {}, pushState() {}, go() {}, back() {} },
      CustomEvent: function () {
        return this;
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle: () => ({ getPropertyValue: () => "" }),
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia: () => ({}),
      requestAnimationFrame: (e) =>
        "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
      cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      },
    };
    function g() {
      const e = "undefined" != typeof window ? window : {};
      return c(e, h), e;
    }
    function m(e, t) {
      return void 0 === t && (t = 0), setTimeout(e, t);
    }
    function f() {
      return Date.now();
    }
    function v(e, t) {
      void 0 === t && (t = "x");
      const i = g();
      let s, n, r;
      const o = (function (e) {
        const t = g();
        let i;
        return (
          t.getComputedStyle && (i = t.getComputedStyle(e, null)),
          !i && e.currentStyle && (i = e.currentStyle),
          i || (i = e.style),
          i
        );
      })(e);
      return (
        i.WebKitCSSMatrix
          ? ((n = o.transform || o.webkitTransform),
            n.split(",").length > 6 &&
              (n = n
                .split(", ")
                .map((e) => e.replace(",", "."))
                .join(", ")),
            (r = new i.WebKitCSSMatrix("none" === n ? "" : n)))
          : ((r =
              o.MozTransform ||
              o.OTransform ||
              o.MsTransform ||
              o.msTransform ||
              o.transform ||
              o
                .getPropertyValue("transform")
                .replace("translate(", "matrix(1, 0, 0, 1,")),
            (s = r.toString().split(","))),
        "x" === t &&
          (n = i.WebKitCSSMatrix
            ? r.m41
            : 16 === s.length
            ? parseFloat(s[12])
            : parseFloat(s[4])),
        "y" === t &&
          (n = i.WebKitCSSMatrix
            ? r.m42
            : 16 === s.length
            ? parseFloat(s[13])
            : parseFloat(s[5])),
        n || 0
      );
    }
    function y(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function b() {
      const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
        t = ["__proto__", "constructor", "prototype"];
      for (let s = 1; s < arguments.length; s += 1) {
        const n = s < 0 || arguments.length <= s ? void 0 : arguments[s];
        if (
          null != n &&
          ((i = n),
          !("undefined" != typeof window && void 0 !== window.HTMLElement
            ? i instanceof HTMLElement
            : i && (1 === i.nodeType || 11 === i.nodeType)))
        ) {
          const i = Object.keys(Object(n)).filter((e) => t.indexOf(e) < 0);
          for (let t = 0, s = i.length; t < s; t += 1) {
            const s = i[t],
              r = Object.getOwnPropertyDescriptor(n, s);
            void 0 !== r &&
              r.enumerable &&
              (y(e[s]) && y(n[s])
                ? n[s].__swiper__
                  ? (e[s] = n[s])
                  : b(e[s], n[s])
                : !y(e[s]) && y(n[s])
                ? ((e[s] = {}), n[s].__swiper__ ? (e[s] = n[s]) : b(e[s], n[s]))
                : (e[s] = n[s]));
          }
        }
      }
      var i;
      return e;
    }
    function w(e, t, i) {
      e.style.setProperty(t, i);
    }
    function S(e) {
      let { swiper: t, targetPosition: i, side: s } = e;
      const n = g(),
        r = -t.translate;
      let o,
        a = null;
      const l = t.params.speed;
      (t.wrapperEl.style.scrollSnapType = "none"),
        n.cancelAnimationFrame(t.cssModeFrameID);
      const d = i > r ? "next" : "prev",
        c = (e, t) => ("next" === d && e >= t) || ("prev" === d && e <= t),
        u = () => {
          (o = new Date().getTime()), null === a && (a = o);
          const e = Math.max(Math.min((o - a) / l, 1), 0),
            d = 0.5 - Math.cos(e * Math.PI) / 2;
          let p = r + d * (i - r);
          if ((c(p, i) && (p = i), t.wrapperEl.scrollTo({ [s]: p }), c(p, i)))
            return (
              (t.wrapperEl.style.overflow = "hidden"),
              (t.wrapperEl.style.scrollSnapType = ""),
              setTimeout(() => {
                (t.wrapperEl.style.overflow = ""),
                  t.wrapperEl.scrollTo({ [s]: p });
              }),
              void n.cancelAnimationFrame(t.cssModeFrameID)
            );
          t.cssModeFrameID = n.requestAnimationFrame(u);
        };
      u();
    }
    function T(e, t) {
      return (
        void 0 === t && (t = ""), [...e.children].filter((e) => e.matches(t))
      );
    }
    function x(e, t) {
      return g().getComputedStyle(e, null).getPropertyValue(t);
    }
    function E(e) {
      let t,
        i = e;
      if (i) {
        for (t = 0; null !== (i = i.previousSibling); )
          1 === i.nodeType && (t += 1);
        return t;
      }
    }
    function C(e, t, i) {
      const s = g();
      return i
        ? e["width" === t ? "offsetWidth" : "offsetHeight"] +
            parseFloat(
              s
                .getComputedStyle(e, null)
                .getPropertyValue(
                  "width" === t ? "margin-right" : "margin-top",
                ),
            ) +
            parseFloat(
              s
                .getComputedStyle(e, null)
                .getPropertyValue(
                  "width" === t ? "margin-left" : "margin-bottom",
                ),
            )
        : e.offsetWidth;
    }
    let I, M, L;
    function _() {
      return (
        I ||
          (I = (function () {
            const e = g(),
              t = p();
            return {
              smoothScroll:
                t.documentElement &&
                t.documentElement.style &&
                "scrollBehavior" in t.documentElement.style,
              touch: !!(
                "ontouchstart" in e ||
                (e.DocumentTouch && t instanceof e.DocumentTouch)
              ),
            };
          })()),
        I
      );
    }
    function P(e) {
      return (
        void 0 === e && (e = {}),
        M ||
          (M = (function (e) {
            let { userAgent: t } = void 0 === e ? {} : e;
            const i = _(),
              s = g(),
              n = s.navigator.platform,
              r = t || s.navigator.userAgent,
              o = { ios: !1, android: !1 },
              a = s.screen.width,
              l = s.screen.height,
              d = r.match(/(Android);?[\s\/]+([\d.]+)?/);
            let c = r.match(/(iPad).*OS\s([\d_]+)/);
            const u = r.match(/(iPod)(.*OS\s([\d_]+))?/),
              p = !c && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              h = "Win32" === n;
            let m = "MacIntel" === n;
            return (
              !c &&
                m &&
                i.touch &&
                [
                  "1024x1366",
                  "1366x1024",
                  "834x1194",
                  "1194x834",
                  "834x1112",
                  "1112x834",
                  "768x1024",
                  "1024x768",
                  "820x1180",
                  "1180x820",
                  "810x1080",
                  "1080x810",
                ].indexOf(`${a}x${l}`) >= 0 &&
                ((c = r.match(/(Version)\/([\d.]+)/)),
                c || (c = [0, 1, "13_0_0"]),
                (m = !1)),
              d && !h && ((o.os = "android"), (o.android = !0)),
              (c || p || u) && ((o.os = "ios"), (o.ios = !0)),
              o
            );
          })(e)),
        M
      );
    }
    function k() {
      return (
        L ||
          (L = (function () {
            const e = g();
            let t = !1;
            function i() {
              const t = e.navigator.userAgent.toLowerCase();
              return (
                t.indexOf("safari") >= 0 &&
                t.indexOf("chrome") < 0 &&
                t.indexOf("android") < 0
              );
            }
            if (i()) {
              const i = String(e.navigator.userAgent);
              if (i.includes("Version/")) {
                const [e, s] = i
                  .split("Version/")[1]
                  .split(" ")[0]
                  .split(".")
                  .map((e) => Number(e));
                t = e < 16 || (16 === e && s < 2);
              }
            }
            return {
              isSafari: t || i(),
              needPerspectiveFix: t,
              isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                e.navigator.userAgent,
              ),
            };
          })()),
        L
      );
    }
    var A = {
      on(e, t, i) {
        const s = this;
        if (!s.eventsListeners || s.destroyed) return s;
        if ("function" != typeof t) return s;
        const n = i ? "unshift" : "push";
        return (
          e.split(" ").forEach((e) => {
            s.eventsListeners[e] || (s.eventsListeners[e] = []),
              s.eventsListeners[e][n](t);
          }),
          s
        );
      },
      once(e, t, i) {
        const s = this;
        if (!s.eventsListeners || s.destroyed) return s;
        if ("function" != typeof t) return s;
        function n() {
          s.off(e, n), n.__emitterProxy && delete n.__emitterProxy;
          for (var i = arguments.length, r = new Array(i), o = 0; o < i; o++)
            r[o] = arguments[o];
          t.apply(s, r);
        }
        return (n.__emitterProxy = t), s.on(e, n, i);
      },
      onAny(e, t) {
        const i = this;
        if (!i.eventsListeners || i.destroyed) return i;
        if ("function" != typeof e) return i;
        const s = t ? "unshift" : "push";
        return (
          i.eventsAnyListeners.indexOf(e) < 0 && i.eventsAnyListeners[s](e), i
        );
      },
      offAny(e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed) return t;
        if (!t.eventsAnyListeners) return t;
        const i = t.eventsAnyListeners.indexOf(e);
        return i >= 0 && t.eventsAnyListeners.splice(i, 1), t;
      },
      off(e, t) {
        const i = this;
        return !i.eventsListeners || i.destroyed
          ? i
          : i.eventsListeners
          ? (e.split(" ").forEach((e) => {
              void 0 === t
                ? (i.eventsListeners[e] = [])
                : i.eventsListeners[e] &&
                  i.eventsListeners[e].forEach((s, n) => {
                    (s === t || (s.__emitterProxy && s.__emitterProxy === t)) &&
                      i.eventsListeners[e].splice(n, 1);
                  });
            }),
            i)
          : i;
      },
      emit() {
        const e = this;
        if (!e.eventsListeners || e.destroyed) return e;
        if (!e.eventsListeners) return e;
        let t, i, s;
        for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
          r[o] = arguments[o];
        "string" == typeof r[0] || Array.isArray(r[0])
          ? ((t = r[0]), (i = r.slice(1, r.length)), (s = e))
          : ((t = r[0].events), (i = r[0].data), (s = r[0].context || e)),
          i.unshift(s);
        return (
          (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
            e.eventsAnyListeners &&
              e.eventsAnyListeners.length &&
              e.eventsAnyListeners.forEach((e) => {
                e.apply(s, [t, ...i]);
              }),
              e.eventsListeners &&
                e.eventsListeners[t] &&
                e.eventsListeners[t].forEach((e) => {
                  e.apply(s, i);
                });
          }),
          e
        );
      },
    };
    const O = (e, t) => {
        if (!e || e.destroyed || !e.params) return;
        const i = t.closest(
          e.isElement ? "swiper-slide" : `.${e.params.slideClass}`,
        );
        if (i) {
          let t = i.querySelector(`.${e.params.lazyPreloaderClass}`);
          !t &&
            e.isElement &&
            (t = i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`)),
            t && t.remove();
        }
      },
      z = (e, t) => {
        if (!e.slides[t]) return;
        const i = e.slides[t].querySelector('[loading="lazy"]');
        i && i.removeAttribute("loading");
      },
      D = (e) => {
        if (!e || e.destroyed || !e.params) return;
        let t = e.params.lazyPreloadPrevNext;
        const i = e.slides.length;
        if (!i || !t || t < 0) return;
        t = Math.min(t, i);
        const s =
            "auto" === e.params.slidesPerView
              ? e.slidesPerViewDynamic()
              : Math.ceil(e.params.slidesPerView),
          n = e.activeIndex;
        if (e.params.grid && e.params.grid.rows > 1) {
          const i = n,
            r = [i - t];
          return (
            r.push(...Array.from({ length: t }).map((e, t) => i + s + t)),
            void e.slides.forEach((t, i) => {
              r.includes(t.column) && z(e, i);
            })
          );
        }
        const r = n + s - 1;
        if (e.params.rewind || e.params.loop)
          for (let s = n - t; s <= r + t; s += 1) {
            const t = ((s % i) + i) % i;
            (t < n || t > r) && z(e, t);
          }
        else
          for (let s = Math.max(n - t, 0); s <= Math.min(r + t, i - 1); s += 1)
            s !== n && (s > r || s < n) && z(e, s);
      };
    var G = {
      updateSize: function () {
        const e = this;
        let t, i;
        const s = e.el;
        (t =
          void 0 !== e.params.width && null !== e.params.width
            ? e.params.width
            : s.clientWidth),
          (i =
            void 0 !== e.params.height && null !== e.params.height
              ? e.params.height
              : s.clientHeight),
          (0 === t && e.isHorizontal()) ||
            (0 === i && e.isVertical()) ||
            ((t =
              t -
              parseInt(x(s, "padding-left") || 0, 10) -
              parseInt(x(s, "padding-right") || 0, 10)),
            (i =
              i -
              parseInt(x(s, "padding-top") || 0, 10) -
              parseInt(x(s, "padding-bottom") || 0, 10)),
            Number.isNaN(t) && (t = 0),
            Number.isNaN(i) && (i = 0),
            Object.assign(e, {
              width: t,
              height: i,
              size: e.isHorizontal() ? t : i,
            }));
      },
      updateSlides: function () {
        const e = this;
        function t(t) {
          return e.isHorizontal()
            ? t
            : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom",
              }[t];
        }
        function i(e, i) {
          return parseFloat(e.getPropertyValue(t(i)) || 0);
        }
        const s = e.params,
          {
            wrapperEl: n,
            slidesEl: r,
            size: o,
            rtlTranslate: a,
            wrongRTL: l,
          } = e,
          d = e.virtual && s.virtual.enabled,
          c = d ? e.virtual.slides.length : e.slides.length,
          u = T(r, `.${e.params.slideClass}, swiper-slide`),
          p = d ? e.virtual.slides.length : u.length;
        let h = [];
        const g = [],
          m = [];
        let f = s.slidesOffsetBefore;
        "function" == typeof f && (f = s.slidesOffsetBefore.call(e));
        let v = s.slidesOffsetAfter;
        "function" == typeof v && (v = s.slidesOffsetAfter.call(e));
        const y = e.snapGrid.length,
          b = e.slidesGrid.length;
        let S = s.spaceBetween,
          E = -f,
          I = 0,
          M = 0;
        if (void 0 === o) return;
        "string" == typeof S && S.indexOf("%") >= 0
          ? (S = (parseFloat(S.replace("%", "")) / 100) * o)
          : "string" == typeof S && (S = parseFloat(S)),
          (e.virtualSize = -S),
          u.forEach((e) => {
            a ? (e.style.marginLeft = "") : (e.style.marginRight = ""),
              (e.style.marginBottom = ""),
              (e.style.marginTop = "");
          }),
          s.centeredSlides &&
            s.cssMode &&
            (w(n, "--swiper-centered-offset-before", ""),
            w(n, "--swiper-centered-offset-after", ""));
        const L = s.grid && s.grid.rows > 1 && e.grid;
        let _;
        L && e.grid.initSlides(p);
        const P =
          "auto" === s.slidesPerView &&
          s.breakpoints &&
          Object.keys(s.breakpoints).filter(
            (e) => void 0 !== s.breakpoints[e].slidesPerView,
          ).length > 0;
        for (let n = 0; n < p; n += 1) {
          let r;
          if (
            ((_ = 0),
            u[n] && (r = u[n]),
            L && e.grid.updateSlide(n, r, p, t),
            !u[n] || "none" !== x(r, "display"))
          ) {
            if ("auto" === s.slidesPerView) {
              P && (u[n].style[t("width")] = "");
              const o = getComputedStyle(r),
                a = r.style.transform,
                l = r.style.webkitTransform;
              if (
                (a && (r.style.transform = "none"),
                l && (r.style.webkitTransform = "none"),
                s.roundLengths)
              )
                _ = e.isHorizontal() ? C(r, "width", !0) : C(r, "height", !0);
              else {
                const e = i(o, "width"),
                  t = i(o, "padding-left"),
                  s = i(o, "padding-right"),
                  n = i(o, "margin-left"),
                  a = i(o, "margin-right"),
                  l = o.getPropertyValue("box-sizing");
                if (l && "border-box" === l) _ = e + n + a;
                else {
                  const { clientWidth: i, offsetWidth: o } = r;
                  _ = e + t + s + n + a + (o - i);
                }
              }
              a && (r.style.transform = a),
                l && (r.style.webkitTransform = l),
                s.roundLengths && (_ = Math.floor(_));
            } else
              (_ = (o - (s.slidesPerView - 1) * S) / s.slidesPerView),
                s.roundLengths && (_ = Math.floor(_)),
                u[n] && (u[n].style[t("width")] = `${_}px`);
            u[n] && (u[n].swiperSlideSize = _),
              m.push(_),
              s.centeredSlides
                ? ((E = E + _ / 2 + I / 2 + S),
                  0 === I && 0 !== n && (E = E - o / 2 - S),
                  0 === n && (E = E - o / 2 - S),
                  Math.abs(E) < 0.001 && (E = 0),
                  s.roundLengths && (E = Math.floor(E)),
                  M % s.slidesPerGroup == 0 && h.push(E),
                  g.push(E))
                : (s.roundLengths && (E = Math.floor(E)),
                  (M - Math.min(e.params.slidesPerGroupSkip, M)) %
                    e.params.slidesPerGroup ==
                    0 && h.push(E),
                  g.push(E),
                  (E = E + _ + S)),
              (e.virtualSize += _ + S),
              (I = _),
              (M += 1);
          }
        }
        if (
          ((e.virtualSize = Math.max(e.virtualSize, o) + v),
          a &&
            l &&
            ("slide" === s.effect || "coverflow" === s.effect) &&
            (n.style.width = `${e.virtualSize + S}px`),
          s.setWrapperSize && (n.style[t("width")] = `${e.virtualSize + S}px`),
          L && e.grid.updateWrapperSize(_, h, t),
          !s.centeredSlides)
        ) {
          const t = [];
          for (let i = 0; i < h.length; i += 1) {
            let n = h[i];
            s.roundLengths && (n = Math.floor(n)),
              h[i] <= e.virtualSize - o && t.push(n);
          }
          (h = t),
            Math.floor(e.virtualSize - o) - Math.floor(h[h.length - 1]) > 1 &&
              h.push(e.virtualSize - o);
        }
        if (d && s.loop) {
          const t = m[0] + S;
          if (s.slidesPerGroup > 1) {
            const i = Math.ceil(
                (e.virtual.slidesBefore + e.virtual.slidesAfter) /
                  s.slidesPerGroup,
              ),
              n = t * s.slidesPerGroup;
            for (let e = 0; e < i; e += 1) h.push(h[h.length - 1] + n);
          }
          for (
            let i = 0;
            i < e.virtual.slidesBefore + e.virtual.slidesAfter;
            i += 1
          )
            1 === s.slidesPerGroup && h.push(h[h.length - 1] + t),
              g.push(g[g.length - 1] + t),
              (e.virtualSize += t);
        }
        if ((0 === h.length && (h = [0]), 0 !== S)) {
          const i = e.isHorizontal() && a ? "marginLeft" : t("marginRight");
          u.filter(
            (e, t) => !(s.cssMode && !s.loop) || t !== u.length - 1,
          ).forEach((e) => {
            e.style[i] = `${S}px`;
          });
        }
        if (s.centeredSlides && s.centeredSlidesBounds) {
          let e = 0;
          m.forEach((t) => {
            e += t + (S || 0);
          }),
            (e -= S);
          const t = e - o;
          h = h.map((e) => (e <= 0 ? -f : e > t ? t + v : e));
        }
        if (s.centerInsufficientSlides) {
          let e = 0;
          if (
            (m.forEach((t) => {
              e += t + (S || 0);
            }),
            (e -= S),
            e < o)
          ) {
            const t = (o - e) / 2;
            h.forEach((e, i) => {
              h[i] = e - t;
            }),
              g.forEach((e, i) => {
                g[i] = e + t;
              });
          }
        }
        if (
          (Object.assign(e, {
            slides: u,
            snapGrid: h,
            slidesGrid: g,
            slidesSizesGrid: m,
          }),
          s.centeredSlides && s.cssMode && !s.centeredSlidesBounds)
        ) {
          w(n, "--swiper-centered-offset-before", -h[0] + "px"),
            w(
              n,
              "--swiper-centered-offset-after",
              e.size / 2 - m[m.length - 1] / 2 + "px",
            );
          const t = -e.snapGrid[0],
            i = -e.slidesGrid[0];
          (e.snapGrid = e.snapGrid.map((e) => e + t)),
            (e.slidesGrid = e.slidesGrid.map((e) => e + i));
        }
        if (
          (p !== c && e.emit("slidesLengthChange"),
          h.length !== y &&
            (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
          g.length !== b && e.emit("slidesGridLengthChange"),
          s.watchSlidesProgress && e.updateSlidesOffset(),
          !(d || s.cssMode || ("slide" !== s.effect && "fade" !== s.effect)))
        ) {
          const t = `${s.containerModifierClass}backface-hidden`,
            i = e.el.classList.contains(t);
          p <= s.maxBackfaceHiddenSlides
            ? i || e.el.classList.add(t)
            : i && e.el.classList.remove(t);
        }
      },
      updateAutoHeight: function (e) {
        const t = this,
          i = [],
          s = t.virtual && t.params.virtual.enabled;
        let n,
          r = 0;
        "number" == typeof e
          ? t.setTransition(e)
          : !0 === e && t.setTransition(t.params.speed);
        const o = (e) => (s ? t.slides[t.getSlideIndexByData(e)] : t.slides[e]);
        if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
          if (t.params.centeredSlides)
            (t.visibleSlides || []).forEach((e) => {
              i.push(e);
            });
          else
            for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
              const e = t.activeIndex + n;
              if (e > t.slides.length && !s) break;
              i.push(o(e));
            }
        else i.push(o(t.activeIndex));
        for (n = 0; n < i.length; n += 1)
          if (void 0 !== i[n]) {
            const e = i[n].offsetHeight;
            r = e > r ? e : r;
          }
        (r || 0 === r) && (t.wrapperEl.style.height = `${r}px`);
      },
      updateSlidesOffset: function () {
        const e = this,
          t = e.slides,
          i = e.isElement
            ? e.isHorizontal()
              ? e.wrapperEl.offsetLeft
              : e.wrapperEl.offsetTop
            : 0;
        for (let s = 0; s < t.length; s += 1)
          t[s].swiperSlideOffset =
            (e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop) -
            i -
            e.cssOverflowAdjustment();
      },
      updateSlidesProgress: function (e) {
        void 0 === e && (e = (this && this.translate) || 0);
        const t = this,
          i = t.params,
          { slides: s, rtlTranslate: n, snapGrid: r } = t;
        if (0 === s.length) return;
        void 0 === s[0].swiperSlideOffset && t.updateSlidesOffset();
        let o = -e;
        n && (o = e),
          s.forEach((e) => {
            e.classList.remove(i.slideVisibleClass);
          }),
          (t.visibleSlidesIndexes = []),
          (t.visibleSlides = []);
        let a = i.spaceBetween;
        "string" == typeof a && a.indexOf("%") >= 0
          ? (a = (parseFloat(a.replace("%", "")) / 100) * t.size)
          : "string" == typeof a && (a = parseFloat(a));
        for (let e = 0; e < s.length; e += 1) {
          const l = s[e];
          let d = l.swiperSlideOffset;
          i.cssMode && i.centeredSlides && (d -= s[0].swiperSlideOffset);
          const c =
              (o + (i.centeredSlides ? t.minTranslate() : 0) - d) /
              (l.swiperSlideSize + a),
            u =
              (o - r[0] + (i.centeredSlides ? t.minTranslate() : 0) - d) /
              (l.swiperSlideSize + a),
            p = -(o - d),
            h = p + t.slidesSizesGrid[e];
          ((p >= 0 && p < t.size - 1) ||
            (h > 1 && h <= t.size) ||
            (p <= 0 && h >= t.size)) &&
            (t.visibleSlides.push(l),
            t.visibleSlidesIndexes.push(e),
            s[e].classList.add(i.slideVisibleClass)),
            (l.progress = n ? -c : c),
            (l.originalProgress = n ? -u : u);
        }
      },
      updateProgress: function (e) {
        const t = this;
        if (void 0 === e) {
          const i = t.rtlTranslate ? -1 : 1;
          e = (t && t.translate && t.translate * i) || 0;
        }
        const i = t.params,
          s = t.maxTranslate() - t.minTranslate();
        let { progress: n, isBeginning: r, isEnd: o, progressLoop: a } = t;
        const l = r,
          d = o;
        if (0 === s) (n = 0), (r = !0), (o = !0);
        else {
          n = (e - t.minTranslate()) / s;
          const i = Math.abs(e - t.minTranslate()) < 1,
            a = Math.abs(e - t.maxTranslate()) < 1;
          (r = i || n <= 0), (o = a || n >= 1), i && (n = 0), a && (n = 1);
        }
        if (i.loop) {
          const i = t.getSlideIndexByData(0),
            s = t.getSlideIndexByData(t.slides.length - 1),
            n = t.slidesGrid[i],
            r = t.slidesGrid[s],
            o = t.slidesGrid[t.slidesGrid.length - 1],
            l = Math.abs(e);
          (a = l >= n ? (l - n) / o : (l + o - r) / o), a > 1 && (a -= 1);
        }
        Object.assign(t, {
          progress: n,
          progressLoop: a,
          isBeginning: r,
          isEnd: o,
        }),
          (i.watchSlidesProgress || (i.centeredSlides && i.autoHeight)) &&
            t.updateSlidesProgress(e),
          r && !l && t.emit("reachBeginning toEdge"),
          o && !d && t.emit("reachEnd toEdge"),
          ((l && !r) || (d && !o)) && t.emit("fromEdge"),
          t.emit("progress", n);
      },
      updateSlidesClasses: function () {
        const e = this,
          { slides: t, params: i, slidesEl: s, activeIndex: n } = e,
          r = e.virtual && i.virtual.enabled,
          o = (e) => T(s, `.${i.slideClass}${e}, swiper-slide${e}`)[0];
        let a;
        if (
          (t.forEach((e) => {
            e.classList.remove(
              i.slideActiveClass,
              i.slideNextClass,
              i.slidePrevClass,
            );
          }),
          r)
        )
          if (i.loop) {
            let t = n - e.virtual.slidesBefore;
            t < 0 && (t = e.virtual.slides.length + t),
              t >= e.virtual.slides.length && (t -= e.virtual.slides.length),
              (a = o(`[data-swiper-slide-index="${t}"]`));
          } else a = o(`[data-swiper-slide-index="${n}"]`);
        else a = t[n];
        if (a) {
          a.classList.add(i.slideActiveClass);
          let e = (function (e, t) {
            const i = [];
            for (; e.nextElementSibling; ) {
              const s = e.nextElementSibling;
              t ? s.matches(t) && i.push(s) : i.push(s), (e = s);
            }
            return i;
          })(a, `.${i.slideClass}, swiper-slide`)[0];
          i.loop && !e && (e = t[0]), e && e.classList.add(i.slideNextClass);
          let s = (function (e, t) {
            const i = [];
            for (; e.previousElementSibling; ) {
              const s = e.previousElementSibling;
              t ? s.matches(t) && i.push(s) : i.push(s), (e = s);
            }
            return i;
          })(a, `.${i.slideClass}, swiper-slide`)[0];
          i.loop && 0 === !s && (s = t[t.length - 1]),
            s && s.classList.add(i.slidePrevClass);
        }
        e.emitSlidesClasses();
      },
      updateActiveIndex: function (e) {
        const t = this,
          i = t.rtlTranslate ? t.translate : -t.translate,
          {
            snapGrid: s,
            params: n,
            activeIndex: r,
            realIndex: o,
            snapIndex: a,
          } = t;
        let l,
          d = e;
        const c = (e) => {
          let i = e - t.virtual.slidesBefore;
          return (
            i < 0 && (i = t.virtual.slides.length + i),
            i >= t.virtual.slides.length && (i -= t.virtual.slides.length),
            i
          );
        };
        if (
          (void 0 === d &&
            (d = (function (e) {
              const { slidesGrid: t, params: i } = e,
                s = e.rtlTranslate ? e.translate : -e.translate;
              let n;
              for (let e = 0; e < t.length; e += 1)
                void 0 !== t[e + 1]
                  ? s >= t[e] && s < t[e + 1] - (t[e + 1] - t[e]) / 2
                    ? (n = e)
                    : s >= t[e] && s < t[e + 1] && (n = e + 1)
                  : s >= t[e] && (n = e);
              return (
                i.normalizeSlideIndex && (n < 0 || void 0 === n) && (n = 0), n
              );
            })(t)),
          s.indexOf(i) >= 0)
        )
          l = s.indexOf(i);
        else {
          const e = Math.min(n.slidesPerGroupSkip, d);
          l = e + Math.floor((d - e) / n.slidesPerGroup);
        }
        if ((l >= s.length && (l = s.length - 1), d === r))
          return (
            l !== a && ((t.snapIndex = l), t.emit("snapIndexChange")),
            void (
              t.params.loop &&
              t.virtual &&
              t.params.virtual.enabled &&
              (t.realIndex = c(d))
            )
          );
        let u;
        (u =
          t.virtual && n.virtual.enabled && n.loop
            ? c(d)
            : t.slides[d]
            ? parseInt(
                t.slides[d].getAttribute("data-swiper-slide-index") || d,
                10,
              )
            : d),
          Object.assign(t, {
            previousSnapIndex: a,
            snapIndex: l,
            previousRealIndex: o,
            realIndex: u,
            previousIndex: r,
            activeIndex: d,
          }),
          t.initialized && D(t),
          t.emit("activeIndexChange"),
          t.emit("snapIndexChange"),
          o !== u && t.emit("realIndexChange"),
          (t.initialized || t.params.runCallbacksOnInit) &&
            t.emit("slideChange");
      },
      updateClickedSlide: function (e) {
        const t = this,
          i = t.params,
          s = e.closest(`.${i.slideClass}, swiper-slide`);
        let n,
          r = !1;
        if (s)
          for (let e = 0; e < t.slides.length; e += 1)
            if (t.slides[e] === s) {
              (r = !0), (n = e);
              break;
            }
        if (!s || !r)
          return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
        (t.clickedSlide = s),
          t.virtual && t.params.virtual.enabled
            ? (t.clickedIndex = parseInt(
                s.getAttribute("data-swiper-slide-index"),
                10,
              ))
            : (t.clickedIndex = n),
          i.slideToClickedSlide &&
            void 0 !== t.clickedIndex &&
            t.clickedIndex !== t.activeIndex &&
            t.slideToClickedSlide();
      },
    };
    var B = {
      getTranslate: function (e) {
        void 0 === e && (e = this.isHorizontal() ? "x" : "y");
        const { params: t, rtlTranslate: i, translate: s, wrapperEl: n } = this;
        if (t.virtualTranslate) return i ? -s : s;
        if (t.cssMode) return s;
        let r = v(n, e);
        return (r += this.cssOverflowAdjustment()), i && (r = -r), r || 0;
      },
      setTranslate: function (e, t) {
        const i = this,
          { rtlTranslate: s, params: n, wrapperEl: r, progress: o } = i;
        let a,
          l = 0,
          d = 0;
        i.isHorizontal() ? (l = s ? -e : e) : (d = e),
          n.roundLengths && ((l = Math.floor(l)), (d = Math.floor(d))),
          (i.previousTranslate = i.translate),
          (i.translate = i.isHorizontal() ? l : d),
          n.cssMode
            ? (r[i.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                i.isHorizontal() ? -l : -d)
            : n.virtualTranslate ||
              (i.isHorizontal()
                ? (l -= i.cssOverflowAdjustment())
                : (d -= i.cssOverflowAdjustment()),
              (r.style.transform = `translate3d(${l}px, ${d}px, 0px)`));
        const c = i.maxTranslate() - i.minTranslate();
        (a = 0 === c ? 0 : (e - i.minTranslate()) / c),
          a !== o && i.updateProgress(e),
          i.emit("setTranslate", i.translate, t);
      },
      minTranslate: function () {
        return -this.snapGrid[0];
      },
      maxTranslate: function () {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function (e, t, i, s, n) {
        void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === i && (i = !0),
          void 0 === s && (s = !0);
        const r = this,
          { params: o, wrapperEl: a } = r;
        if (r.animating && o.preventInteractionOnTransition) return !1;
        const l = r.minTranslate(),
          d = r.maxTranslate();
        let c;
        if (
          ((c = s && e > l ? l : s && e < d ? d : e),
          r.updateProgress(c),
          o.cssMode)
        ) {
          const e = r.isHorizontal();
          if (0 === t) a[e ? "scrollLeft" : "scrollTop"] = -c;
          else {
            if (!r.support.smoothScroll)
              return (
                S({ swiper: r, targetPosition: -c, side: e ? "left" : "top" }),
                !0
              );
            a.scrollTo({ [e ? "left" : "top"]: -c, behavior: "smooth" });
          }
          return !0;
        }
        return (
          0 === t
            ? (r.setTransition(0),
              r.setTranslate(c),
              i &&
                (r.emit("beforeTransitionStart", t, n),
                r.emit("transitionEnd")))
            : (r.setTransition(t),
              r.setTranslate(c),
              i &&
                (r.emit("beforeTransitionStart", t, n),
                r.emit("transitionStart")),
              r.animating ||
                ((r.animating = !0),
                r.onTranslateToWrapperTransitionEnd ||
                  (r.onTranslateToWrapperTransitionEnd = function (e) {
                    r &&
                      !r.destroyed &&
                      e.target === this &&
                      (r.wrapperEl.removeEventListener(
                        "transitionend",
                        r.onTranslateToWrapperTransitionEnd,
                      ),
                      (r.onTranslateToWrapperTransitionEnd = null),
                      delete r.onTranslateToWrapperTransitionEnd,
                      i && r.emit("transitionEnd"));
                  }),
                r.wrapperEl.addEventListener(
                  "transitionend",
                  r.onTranslateToWrapperTransitionEnd,
                ))),
          !0
        );
      },
    };
    function F(e) {
      let { swiper: t, runCallbacks: i, direction: s, step: n } = e;
      const { activeIndex: r, previousIndex: o } = t;
      let a = s;
      if (
        (a || (a = r > o ? "next" : r < o ? "prev" : "reset"),
        t.emit(`transition${n}`),
        i && r !== o)
      ) {
        if ("reset" === a) return void t.emit(`slideResetTransition${n}`);
        t.emit(`slideChangeTransition${n}`),
          "next" === a
            ? t.emit(`slideNextTransition${n}`)
            : t.emit(`slidePrevTransition${n}`);
      }
    }
    var N = {
      slideTo: function (e, t, i, s, n) {
        void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === i && (i = !0),
          "string" == typeof e && (e = parseInt(e, 10));
        const r = this;
        let o = e;
        o < 0 && (o = 0);
        const {
          params: a,
          snapGrid: l,
          slidesGrid: d,
          previousIndex: c,
          activeIndex: u,
          rtlTranslate: p,
          wrapperEl: h,
          enabled: g,
        } = r;
        if (
          (r.animating && a.preventInteractionOnTransition) ||
          (!g && !s && !n)
        )
          return !1;
        const m = Math.min(r.params.slidesPerGroupSkip, o);
        let f = m + Math.floor((o - m) / r.params.slidesPerGroup);
        f >= l.length && (f = l.length - 1);
        const v = -l[f];
        if (a.normalizeSlideIndex)
          for (let e = 0; e < d.length; e += 1) {
            const t = -Math.floor(100 * v),
              i = Math.floor(100 * d[e]),
              s = Math.floor(100 * d[e + 1]);
            void 0 !== d[e + 1]
              ? t >= i && t < s - (s - i) / 2
                ? (o = e)
                : t >= i && t < s && (o = e + 1)
              : t >= i && (o = e);
          }
        if (r.initialized && o !== u) {
          if (
            !r.allowSlideNext &&
            (p
              ? v > r.translate && v > r.minTranslate()
              : v < r.translate && v < r.minTranslate())
          )
            return !1;
          if (
            !r.allowSlidePrev &&
            v > r.translate &&
            v > r.maxTranslate() &&
            (u || 0) !== o
          )
            return !1;
        }
        let y;
        if (
          (o !== (c || 0) && i && r.emit("beforeSlideChangeStart"),
          r.updateProgress(v),
          (y = o > u ? "next" : o < u ? "prev" : "reset"),
          (p && -v === r.translate) || (!p && v === r.translate))
        )
          return (
            r.updateActiveIndex(o),
            a.autoHeight && r.updateAutoHeight(),
            r.updateSlidesClasses(),
            "slide" !== a.effect && r.setTranslate(v),
            "reset" !== y && (r.transitionStart(i, y), r.transitionEnd(i, y)),
            !1
          );
        if (a.cssMode) {
          const e = r.isHorizontal(),
            i = p ? v : -v;
          if (0 === t) {
            const t = r.virtual && r.params.virtual.enabled;
            t &&
              ((r.wrapperEl.style.scrollSnapType = "none"),
              (r._immediateVirtual = !0)),
              t && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0
                ? ((r._cssModeVirtualInitialSet = !0),
                  requestAnimationFrame(() => {
                    h[e ? "scrollLeft" : "scrollTop"] = i;
                  }))
                : (h[e ? "scrollLeft" : "scrollTop"] = i),
              t &&
                requestAnimationFrame(() => {
                  (r.wrapperEl.style.scrollSnapType = ""),
                    (r._immediateVirtual = !1);
                });
          } else {
            if (!r.support.smoothScroll)
              return (
                S({ swiper: r, targetPosition: i, side: e ? "left" : "top" }),
                !0
              );
            h.scrollTo({ [e ? "left" : "top"]: i, behavior: "smooth" });
          }
          return !0;
        }
        return (
          r.setTransition(t),
          r.setTranslate(v),
          r.updateActiveIndex(o),
          r.updateSlidesClasses(),
          r.emit("beforeTransitionStart", t, s),
          r.transitionStart(i, y),
          0 === t
            ? r.transitionEnd(i, y)
            : r.animating ||
              ((r.animating = !0),
              r.onSlideToWrapperTransitionEnd ||
                (r.onSlideToWrapperTransitionEnd = function (e) {
                  r &&
                    !r.destroyed &&
                    e.target === this &&
                    (r.wrapperEl.removeEventListener(
                      "transitionend",
                      r.onSlideToWrapperTransitionEnd,
                    ),
                    (r.onSlideToWrapperTransitionEnd = null),
                    delete r.onSlideToWrapperTransitionEnd,
                    r.transitionEnd(i, y));
                }),
              r.wrapperEl.addEventListener(
                "transitionend",
                r.onSlideToWrapperTransitionEnd,
              )),
          !0
        );
      },
      slideToLoop: function (e, t, i, s) {
        if (
          (void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === i && (i = !0),
          "string" == typeof e)
        ) {
          e = parseInt(e, 10);
        }
        const n = this;
        let r = e;
        return (
          n.params.loop &&
            (n.virtual && n.params.virtual.enabled
              ? (r += n.virtual.slidesBefore)
              : (r = n.getSlideIndexByData(r))),
          n.slideTo(r, t, i, s)
        );
      },
      slideNext: function (e, t, i) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        const s = this,
          { enabled: n, params: r, animating: o } = s;
        if (!n) return s;
        let a = r.slidesPerGroup;
        "auto" === r.slidesPerView &&
          1 === r.slidesPerGroup &&
          r.slidesPerGroupAuto &&
          (a = Math.max(s.slidesPerViewDynamic("current", !0), 1));
        const l = s.activeIndex < r.slidesPerGroupSkip ? 1 : a,
          d = s.virtual && r.virtual.enabled;
        if (r.loop) {
          if (o && !d && r.loopPreventsSliding) return !1;
          s.loopFix({ direction: "next" }),
            (s._clientLeft = s.wrapperEl.clientLeft);
        }
        return r.rewind && s.isEnd
          ? s.slideTo(0, e, t, i)
          : s.slideTo(s.activeIndex + l, e, t, i);
      },
      slidePrev: function (e, t, i) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        const s = this,
          {
            params: n,
            snapGrid: r,
            slidesGrid: o,
            rtlTranslate: a,
            enabled: l,
            animating: d,
          } = s;
        if (!l) return s;
        const c = s.virtual && n.virtual.enabled;
        if (n.loop) {
          if (d && !c && n.loopPreventsSliding) return !1;
          s.loopFix({ direction: "prev" }),
            (s._clientLeft = s.wrapperEl.clientLeft);
        }
        function u(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }
        const p = u(a ? s.translate : -s.translate),
          h = r.map((e) => u(e));
        let g = r[h.indexOf(p) - 1];
        if (void 0 === g && n.cssMode) {
          let e;
          r.forEach((t, i) => {
            p >= t && (e = i);
          }),
            void 0 !== e && (g = r[e > 0 ? e - 1 : e]);
        }
        let m = 0;
        if (
          (void 0 !== g &&
            ((m = o.indexOf(g)),
            m < 0 && (m = s.activeIndex - 1),
            "auto" === n.slidesPerView &&
              1 === n.slidesPerGroup &&
              n.slidesPerGroupAuto &&
              ((m = m - s.slidesPerViewDynamic("previous", !0) + 1),
              (m = Math.max(m, 0)))),
          n.rewind && s.isBeginning)
        ) {
          const n =
            s.params.virtual && s.params.virtual.enabled && s.virtual
              ? s.virtual.slides.length - 1
              : s.slides.length - 1;
          return s.slideTo(n, e, t, i);
        }
        return s.slideTo(m, e, t, i);
      },
      slideReset: function (e, t, i) {
        return (
          void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0),
          this.slideTo(this.activeIndex, e, t, i)
        );
      },
      slideToClosest: function (e, t, i, s) {
        void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0),
          void 0 === s && (s = 0.5);
        const n = this;
        let r = n.activeIndex;
        const o = Math.min(n.params.slidesPerGroupSkip, r),
          a = o + Math.floor((r - o) / n.params.slidesPerGroup),
          l = n.rtlTranslate ? n.translate : -n.translate;
        if (l >= n.snapGrid[a]) {
          const e = n.snapGrid[a];
          l - e > (n.snapGrid[a + 1] - e) * s && (r += n.params.slidesPerGroup);
        } else {
          const e = n.snapGrid[a - 1];
          l - e <= (n.snapGrid[a] - e) * s && (r -= n.params.slidesPerGroup);
        }
        return (
          (r = Math.max(r, 0)),
          (r = Math.min(r, n.slidesGrid.length - 1)),
          n.slideTo(r, e, t, i)
        );
      },
      slideToClickedSlide: function () {
        const e = this,
          { params: t, slidesEl: i } = e,
          s =
            "auto" === t.slidesPerView
              ? e.slidesPerViewDynamic()
              : t.slidesPerView;
        let n,
          r = e.clickedIndex;
        const o = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
        if (t.loop) {
          if (e.animating) return;
          (n = parseInt(
            e.clickedSlide.getAttribute("data-swiper-slide-index"),
            10,
          )),
            t.centeredSlides
              ? r < e.loopedSlides - s / 2 ||
                r > e.slides.length - e.loopedSlides + s / 2
                ? (e.loopFix(),
                  (r = e.getSlideIndex(
                    T(i, `${o}[data-swiper-slide-index="${n}"]`)[0],
                  )),
                  m(() => {
                    e.slideTo(r);
                  }))
                : e.slideTo(r)
              : r > e.slides.length - s
              ? (e.loopFix(),
                (r = e.getSlideIndex(
                  T(i, `${o}[data-swiper-slide-index="${n}"]`)[0],
                )),
                m(() => {
                  e.slideTo(r);
                }))
              : e.slideTo(r);
        } else e.slideTo(r);
      },
    };
    var V = {
      loopCreate: function (e) {
        const t = this,
          { params: i, slidesEl: s } = t;
        if (!i.loop || (t.virtual && t.params.virtual.enabled)) return;
        T(s, `.${i.slideClass}, swiper-slide`).forEach((e, t) => {
          e.setAttribute("data-swiper-slide-index", t);
        }),
          t.loopFix({
            slideRealIndex: e,
            direction: i.centeredSlides ? void 0 : "next",
          });
      },
      loopFix: function (e) {
        let {
          slideRealIndex: t,
          slideTo: i = !0,
          direction: s,
          setTranslate: n,
          activeSlideIndex: r,
          byController: o,
          byMousewheel: a,
        } = void 0 === e ? {} : e;
        const l = this;
        if (!l.params.loop) return;
        l.emit("beforeLoopFix");
        const {
          slides: d,
          allowSlidePrev: c,
          allowSlideNext: u,
          slidesEl: p,
          params: h,
        } = l;
        if (
          ((l.allowSlidePrev = !0),
          (l.allowSlideNext = !0),
          l.virtual && h.virtual.enabled)
        )
          return (
            i &&
              (h.centeredSlides || 0 !== l.snapIndex
                ? h.centeredSlides && l.snapIndex < h.slidesPerView
                  ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0)
                  : l.snapIndex === l.snapGrid.length - 1 &&
                    l.slideTo(l.virtual.slidesBefore, 0, !1, !0)
                : l.slideTo(l.virtual.slides.length, 0, !1, !0)),
            (l.allowSlidePrev = c),
            (l.allowSlideNext = u),
            void l.emit("loopFix")
          );
        const g =
          "auto" === h.slidesPerView
            ? l.slidesPerViewDynamic()
            : Math.ceil(parseFloat(h.slidesPerView, 10));
        let m = h.loopedSlides || g;
        m % h.slidesPerGroup != 0 &&
          (m += h.slidesPerGroup - (m % h.slidesPerGroup)),
          (l.loopedSlides = m);
        const f = [],
          v = [];
        let y = l.activeIndex;
        void 0 === r
          ? (r = l.getSlideIndex(
              l.slides.filter((e) =>
                e.classList.contains(h.slideActiveClass),
              )[0],
            ))
          : (y = r);
        const b = "next" === s || !s,
          w = "prev" === s || !s;
        let S = 0,
          T = 0;
        if (r < m) {
          S = Math.max(m - r, h.slidesPerGroup);
          for (let e = 0; e < m - r; e += 1) {
            const t = e - Math.floor(e / d.length) * d.length;
            f.push(d.length - t - 1);
          }
        } else if (r > l.slides.length - 2 * m) {
          T = Math.max(r - (l.slides.length - 2 * m), h.slidesPerGroup);
          for (let e = 0; e < T; e += 1) {
            const t = e - Math.floor(e / d.length) * d.length;
            v.push(t);
          }
        }
        if (
          (w &&
            f.forEach((e) => {
              (l.slides[e].swiperLoopMoveDOM = !0),
                p.prepend(l.slides[e]),
                (l.slides[e].swiperLoopMoveDOM = !1);
            }),
          b &&
            v.forEach((e) => {
              (l.slides[e].swiperLoopMoveDOM = !0),
                p.append(l.slides[e]),
                (l.slides[e].swiperLoopMoveDOM = !1);
            }),
          l.recalcSlides(),
          "auto" === h.slidesPerView && l.updateSlides(),
          h.watchSlidesProgress && l.updateSlidesOffset(),
          i)
        )
          if (f.length > 0 && w)
            if (void 0 === t) {
              const e = l.slidesGrid[y],
                t = l.slidesGrid[y + S] - e;
              a
                ? l.setTranslate(l.translate - t)
                : (l.slideTo(y + S, 0, !1, !0),
                  n &&
                    ((l.touches[l.isHorizontal() ? "startX" : "startY"] += t),
                    (l.touchEventsData.currentTranslate = l.translate)));
            } else
              n &&
                (l.slideToLoop(t, 0, !1, !0),
                (l.touchEventsData.currentTranslate = l.translate));
          else if (v.length > 0 && b)
            if (void 0 === t) {
              const e = l.slidesGrid[y],
                t = l.slidesGrid[y - T] - e;
              a
                ? l.setTranslate(l.translate - t)
                : (l.slideTo(y - T, 0, !1, !0),
                  n &&
                    ((l.touches[l.isHorizontal() ? "startX" : "startY"] += t),
                    (l.touchEventsData.currentTranslate = l.translate)));
            } else l.slideToLoop(t, 0, !1, !0);
        if (
          ((l.allowSlidePrev = c),
          (l.allowSlideNext = u),
          l.controller && l.controller.control && !o)
        ) {
          const e = {
            slideRealIndex: t,
            direction: s,
            setTranslate: n,
            activeSlideIndex: r,
            byController: !0,
          };
          Array.isArray(l.controller.control)
            ? l.controller.control.forEach((t) => {
                !t.destroyed &&
                  t.params.loop &&
                  t.loopFix({
                    ...e,
                    slideTo: t.params.slidesPerView === h.slidesPerView && i,
                  });
              })
            : l.controller.control instanceof l.constructor &&
              l.controller.control.params.loop &&
              l.controller.control.loopFix({
                ...e,
                slideTo:
                  l.controller.control.params.slidesPerView ===
                    h.slidesPerView && i,
              });
        }
        l.emit("loopFix");
      },
      loopDestroy: function () {
        const e = this,
          { params: t, slidesEl: i } = e;
        if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
        e.recalcSlides();
        const s = [];
        e.slides.forEach((e) => {
          const t =
            void 0 === e.swiperSlideIndex
              ? 1 * e.getAttribute("data-swiper-slide-index")
              : e.swiperSlideIndex;
          s[t] = e;
        }),
          e.slides.forEach((e) => {
            e.removeAttribute("data-swiper-slide-index");
          }),
          s.forEach((e) => {
            i.append(e);
          }),
          e.recalcSlides(),
          e.slideTo(e.realIndex, 0);
      },
    };
    function H(e) {
      const t = this,
        i = p(),
        s = g(),
        n = t.touchEventsData;
      n.evCache.push(e);
      const { params: r, touches: o, enabled: a } = t;
      if (!a) return;
      if (!r.simulateTouch && "mouse" === e.pointerType) return;
      if (t.animating && r.preventInteractionOnTransition) return;
      !t.animating && r.cssMode && r.loop && t.loopFix();
      let l = e;
      l.originalEvent && (l = l.originalEvent);
      let d = l.target;
      if ("wrapper" === r.touchEventsTarget && !t.wrapperEl.contains(d)) return;
      if ("which" in l && 3 === l.which) return;
      if ("button" in l && l.button > 0) return;
      if (n.isTouched && n.isMoved) return;
      const c = !!r.noSwipingClass && "" !== r.noSwipingClass,
        u = e.composedPath ? e.composedPath() : e.path;
      c && l.target && l.target.shadowRoot && u && (d = u[0]);
      const h = r.noSwipingSelector
          ? r.noSwipingSelector
          : `.${r.noSwipingClass}`,
        m = !(!l.target || !l.target.shadowRoot);
      if (
        r.noSwiping &&
        (m
          ? (function (e, t) {
              return (
                void 0 === t && (t = this),
                (function t(i) {
                  if (!i || i === p() || i === g()) return null;
                  i.assignedSlot && (i = i.assignedSlot);
                  const s = i.closest(e);
                  return s || i.getRootNode
                    ? s || t(i.getRootNode().host)
                    : null;
                })(t)
              );
            })(h, d)
          : d.closest(h))
      )
        return void (t.allowClick = !0);
      if (r.swipeHandler && !d.closest(r.swipeHandler)) return;
      (o.currentX = l.pageX), (o.currentY = l.pageY);
      const v = o.currentX,
        y = o.currentY,
        b = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
        w = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
      if (b && (v <= w || v >= s.innerWidth - w)) {
        if ("prevent" !== b) return;
        e.preventDefault();
      }
      Object.assign(n, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0,
      }),
        (o.startX = v),
        (o.startY = y),
        (n.touchStartTime = f()),
        (t.allowClick = !0),
        t.updateSize(),
        (t.swipeDirection = void 0),
        r.threshold > 0 && (n.allowThresholdMove = !1);
      let S = !0;
      d.matches(n.focusableElements) &&
        ((S = !1), "SELECT" === d.nodeName && (n.isTouched = !1)),
        i.activeElement &&
          i.activeElement.matches(n.focusableElements) &&
          i.activeElement !== d &&
          i.activeElement.blur();
      const T = S && t.allowTouchMove && r.touchStartPreventDefault;
      (!r.touchStartForcePreventDefault && !T) ||
        d.isContentEditable ||
        l.preventDefault(),
        r.freeMode &&
          r.freeMode.enabled &&
          t.freeMode &&
          t.animating &&
          !r.cssMode &&
          t.freeMode.onTouchStart(),
        t.emit("touchStart", l);
    }
    function $(e) {
      const t = p(),
        i = this,
        s = i.touchEventsData,
        { params: n, touches: r, rtlTranslate: o, enabled: a } = i;
      if (!a) return;
      if (!n.simulateTouch && "mouse" === e.pointerType) return;
      let l = e;
      if ((l.originalEvent && (l = l.originalEvent), !s.isTouched))
        return void (
          s.startMoving &&
          s.isScrolling &&
          i.emit("touchMoveOpposite", l)
        );
      const d = s.evCache.findIndex((e) => e.pointerId === l.pointerId);
      d >= 0 && (s.evCache[d] = l);
      const c = s.evCache.length > 1 ? s.evCache[0] : l,
        u = c.pageX,
        h = c.pageY;
      if (l.preventedByNestedSwiper) return (r.startX = u), void (r.startY = h);
      if (!i.allowTouchMove)
        return (
          l.target.matches(s.focusableElements) || (i.allowClick = !1),
          void (
            s.isTouched &&
            (Object.assign(r, {
              startX: u,
              startY: h,
              prevX: i.touches.currentX,
              prevY: i.touches.currentY,
              currentX: u,
              currentY: h,
            }),
            (s.touchStartTime = f()))
          )
        );
      if (n.touchReleaseOnEdges && !n.loop)
        if (i.isVertical()) {
          if (
            (h < r.startY && i.translate <= i.maxTranslate()) ||
            (h > r.startY && i.translate >= i.minTranslate())
          )
            return (s.isTouched = !1), void (s.isMoved = !1);
        } else if (
          (u < r.startX && i.translate <= i.maxTranslate()) ||
          (u > r.startX && i.translate >= i.minTranslate())
        )
          return;
      if (
        t.activeElement &&
        l.target === t.activeElement &&
        l.target.matches(s.focusableElements)
      )
        return (s.isMoved = !0), void (i.allowClick = !1);
      if (
        (s.allowTouchCallbacks && i.emit("touchMove", l),
        l.targetTouches && l.targetTouches.length > 1)
      )
        return;
      (r.currentX = u), (r.currentY = h);
      const g = r.currentX - r.startX,
        m = r.currentY - r.startY;
      if (i.params.threshold && Math.sqrt(g ** 2 + m ** 2) < i.params.threshold)
        return;
      if (void 0 === s.isScrolling) {
        let e;
        (i.isHorizontal() && r.currentY === r.startY) ||
        (i.isVertical() && r.currentX === r.startX)
          ? (s.isScrolling = !1)
          : g * g + m * m >= 25 &&
            ((e = (180 * Math.atan2(Math.abs(m), Math.abs(g))) / Math.PI),
            (s.isScrolling = i.isHorizontal()
              ? e > n.touchAngle
              : 90 - e > n.touchAngle));
      }
      if (
        (s.isScrolling && i.emit("touchMoveOpposite", l),
        void 0 === s.startMoving &&
          ((r.currentX === r.startX && r.currentY === r.startY) ||
            (s.startMoving = !0)),
        s.isScrolling ||
          (i.zoom &&
            i.params.zoom &&
            i.params.zoom.enabled &&
            s.evCache.length > 1))
      )
        return void (s.isTouched = !1);
      if (!s.startMoving) return;
      (i.allowClick = !1),
        !n.cssMode && l.cancelable && l.preventDefault(),
        n.touchMoveStopPropagation && !n.nested && l.stopPropagation();
      let v = i.isHorizontal() ? g : m,
        y = i.isHorizontal()
          ? r.currentX - r.previousX
          : r.currentY - r.previousY;
      n.oneWayMovement &&
        ((v = Math.abs(v) * (o ? 1 : -1)), (y = Math.abs(y) * (o ? 1 : -1))),
        (r.diff = v),
        (v *= n.touchRatio),
        o && ((v = -v), (y = -y));
      const b = i.touchesDirection;
      (i.swipeDirection = v > 0 ? "prev" : "next"),
        (i.touchesDirection = y > 0 ? "prev" : "next");
      const w = i.params.loop && !n.cssMode;
      if (!s.isMoved) {
        if (
          (w && i.loopFix({ direction: i.swipeDirection }),
          (s.startTranslate = i.getTranslate()),
          i.setTransition(0),
          i.animating)
        ) {
          const e = new window.CustomEvent("transitionend", {
            bubbles: !0,
            cancelable: !0,
          });
          i.wrapperEl.dispatchEvent(e);
        }
        (s.allowMomentumBounce = !1),
          !n.grabCursor ||
            (!0 !== i.allowSlideNext && !0 !== i.allowSlidePrev) ||
            i.setGrabCursor(!0),
          i.emit("sliderFirstMove", l);
      }
      let S;
      s.isMoved &&
        b !== i.touchesDirection &&
        w &&
        Math.abs(v) >= 1 &&
        (i.loopFix({ direction: i.swipeDirection, setTranslate: !0 }),
        (S = !0)),
        i.emit("sliderMove", l),
        (s.isMoved = !0),
        (s.currentTranslate = v + s.startTranslate);
      let T = !0,
        x = n.resistanceRatio;
      if (
        (n.touchReleaseOnEdges && (x = 0),
        v > 0
          ? (w &&
              !S &&
              s.currentTranslate >
                (n.centeredSlides
                  ? i.minTranslate() - i.size / 2
                  : i.minTranslate()) &&
              i.loopFix({
                direction: "prev",
                setTranslate: !0,
                activeSlideIndex: 0,
              }),
            s.currentTranslate > i.minTranslate() &&
              ((T = !1),
              n.resistance &&
                (s.currentTranslate =
                  i.minTranslate() -
                  1 +
                  (-i.minTranslate() + s.startTranslate + v) ** x)))
          : v < 0 &&
            (w &&
              !S &&
              s.currentTranslate <
                (n.centeredSlides
                  ? i.maxTranslate() + i.size / 2
                  : i.maxTranslate()) &&
              i.loopFix({
                direction: "next",
                setTranslate: !0,
                activeSlideIndex:
                  i.slides.length -
                  ("auto" === n.slidesPerView
                    ? i.slidesPerViewDynamic()
                    : Math.ceil(parseFloat(n.slidesPerView, 10))),
              }),
            s.currentTranslate < i.maxTranslate() &&
              ((T = !1),
              n.resistance &&
                (s.currentTranslate =
                  i.maxTranslate() +
                  1 -
                  (i.maxTranslate() - s.startTranslate - v) ** x))),
        T && (l.preventedByNestedSwiper = !0),
        !i.allowSlideNext &&
          "next" === i.swipeDirection &&
          s.currentTranslate < s.startTranslate &&
          (s.currentTranslate = s.startTranslate),
        !i.allowSlidePrev &&
          "prev" === i.swipeDirection &&
          s.currentTranslate > s.startTranslate &&
          (s.currentTranslate = s.startTranslate),
        i.allowSlidePrev ||
          i.allowSlideNext ||
          (s.currentTranslate = s.startTranslate),
        n.threshold > 0)
      ) {
        if (!(Math.abs(v) > n.threshold || s.allowThresholdMove))
          return void (s.currentTranslate = s.startTranslate);
        if (!s.allowThresholdMove)
          return (
            (s.allowThresholdMove = !0),
            (r.startX = r.currentX),
            (r.startY = r.currentY),
            (s.currentTranslate = s.startTranslate),
            void (r.diff = i.isHorizontal()
              ? r.currentX - r.startX
              : r.currentY - r.startY)
          );
      }
      n.followFinger &&
        !n.cssMode &&
        (((n.freeMode && n.freeMode.enabled && i.freeMode) ||
          n.watchSlidesProgress) &&
          (i.updateActiveIndex(), i.updateSlidesClasses()),
        n.freeMode &&
          n.freeMode.enabled &&
          i.freeMode &&
          i.freeMode.onTouchMove(),
        i.updateProgress(s.currentTranslate),
        i.setTranslate(s.currentTranslate));
    }
    function j(e) {
      const t = this,
        i = t.touchEventsData,
        s = i.evCache.findIndex((t) => t.pointerId === e.pointerId);
      if (
        (s >= 0 && i.evCache.splice(s, 1),
        ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
          e.type,
        ))
      ) {
        if (
          !(
            ["pointercancel", "contextmenu"].includes(e.type) &&
            (t.browser.isSafari || t.browser.isWebView)
          )
        )
          return;
      }
      const {
        params: n,
        touches: r,
        rtlTranslate: o,
        slidesGrid: a,
        enabled: l,
      } = t;
      if (!l) return;
      if (!n.simulateTouch && "mouse" === e.pointerType) return;
      let d = e;
      if (
        (d.originalEvent && (d = d.originalEvent),
        i.allowTouchCallbacks && t.emit("touchEnd", d),
        (i.allowTouchCallbacks = !1),
        !i.isTouched)
      )
        return (
          i.isMoved && n.grabCursor && t.setGrabCursor(!1),
          (i.isMoved = !1),
          void (i.startMoving = !1)
        );
      n.grabCursor &&
        i.isMoved &&
        i.isTouched &&
        (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
        t.setGrabCursor(!1);
      const c = f(),
        u = c - i.touchStartTime;
      if (t.allowClick) {
        const e = d.path || (d.composedPath && d.composedPath());
        t.updateClickedSlide((e && e[0]) || d.target),
          t.emit("tap click", d),
          u < 300 &&
            c - i.lastClickTime < 300 &&
            t.emit("doubleTap doubleClick", d);
      }
      if (
        ((i.lastClickTime = f()),
        m(() => {
          t.destroyed || (t.allowClick = !0);
        }),
        !i.isTouched ||
          !i.isMoved ||
          !t.swipeDirection ||
          0 === r.diff ||
          i.currentTranslate === i.startTranslate)
      )
        return (i.isTouched = !1), (i.isMoved = !1), void (i.startMoving = !1);
      let p;
      if (
        ((i.isTouched = !1),
        (i.isMoved = !1),
        (i.startMoving = !1),
        (p = n.followFinger
          ? o
            ? t.translate
            : -t.translate
          : -i.currentTranslate),
        n.cssMode)
      )
        return;
      if (n.freeMode && n.freeMode.enabled)
        return void t.freeMode.onTouchEnd({ currentPos: p });
      let h = 0,
        g = t.slidesSizesGrid[0];
      for (
        let e = 0;
        e < a.length;
        e += e < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup
      ) {
        const t = e < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
        void 0 !== a[e + t]
          ? p >= a[e] && p < a[e + t] && ((h = e), (g = a[e + t] - a[e]))
          : p >= a[e] && ((h = e), (g = a[a.length - 1] - a[a.length - 2]));
      }
      let v = null,
        y = null;
      n.rewind &&
        (t.isBeginning
          ? (y =
              n.virtual && n.virtual.enabled && t.virtual
                ? t.virtual.slides.length - 1
                : t.slides.length - 1)
          : t.isEnd && (v = 0));
      const b = (p - a[h]) / g,
        w = h < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
      if (u > n.longSwipesMs) {
        if (!n.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection &&
          (b >= n.longSwipesRatio
            ? t.slideTo(n.rewind && t.isEnd ? v : h + w)
            : t.slideTo(h)),
          "prev" === t.swipeDirection &&
            (b > 1 - n.longSwipesRatio
              ? t.slideTo(h + w)
              : null !== y && b < 0 && Math.abs(b) > n.longSwipesRatio
              ? t.slideTo(y)
              : t.slideTo(h));
      } else {
        if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation &&
        (d.target === t.navigation.nextEl || d.target === t.navigation.prevEl)
          ? d.target === t.navigation.nextEl
            ? t.slideTo(h + w)
            : t.slideTo(h)
          : ("next" === t.swipeDirection && t.slideTo(null !== v ? v : h + w),
            "prev" === t.swipeDirection && t.slideTo(null !== y ? y : h));
      }
    }
    function R() {
      const e = this,
        { params: t, el: i } = e;
      if (i && 0 === i.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      const { allowSlideNext: s, allowSlidePrev: n, snapGrid: r } = e,
        o = e.virtual && e.params.virtual.enabled;
      (e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses();
      const a = o && t.loop;
      !("auto" === t.slidesPerView || t.slidesPerView > 1) ||
      !e.isEnd ||
      e.isBeginning ||
      e.params.centeredSlides ||
      a
        ? e.params.loop && !o
          ? e.slideToLoop(e.realIndex, 0, !1, !0)
          : e.slideTo(e.activeIndex, 0, !1, !0)
        : e.slideTo(e.slides.length - 1, 0, !1, !0),
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          (clearTimeout(e.autoplay.resizeTimeout),
          (e.autoplay.resizeTimeout = setTimeout(() => {
            e.autoplay &&
              e.autoplay.running &&
              e.autoplay.paused &&
              e.autoplay.resume();
          }, 500))),
        (e.allowSlidePrev = n),
        (e.allowSlideNext = s),
        e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
    }
    function q(e) {
      const t = this;
      t.enabled &&
        (t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function W() {
      const e = this,
        { wrapperEl: t, rtlTranslate: i, enabled: s } = e;
      if (!s) return;
      let n;
      (e.previousTranslate = e.translate),
        e.isHorizontal()
          ? (e.translate = -t.scrollLeft)
          : (e.translate = -t.scrollTop),
        0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
      const r = e.maxTranslate() - e.minTranslate();
      (n = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
        n !== e.progress && e.updateProgress(i ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1);
    }
    function Y(e) {
      const t = this;
      O(t, e.target),
        t.params.cssMode ||
          ("auto" !== t.params.slidesPerView && !t.params.autoHeight) ||
          t.update();
    }
    let X = !1;
    function U() {}
    const K = (e, t) => {
      const i = p(),
        { params: s, el: n, wrapperEl: r, device: o } = e,
        a = !!s.nested,
        l = "on" === t ? "addEventListener" : "removeEventListener",
        d = t;
      n[l]("pointerdown", e.onTouchStart, { passive: !1 }),
        i[l]("pointermove", e.onTouchMove, { passive: !1, capture: a }),
        i[l]("pointerup", e.onTouchEnd, { passive: !0 }),
        i[l]("pointercancel", e.onTouchEnd, { passive: !0 }),
        i[l]("pointerout", e.onTouchEnd, { passive: !0 }),
        i[l]("pointerleave", e.onTouchEnd, { passive: !0 }),
        i[l]("contextmenu", e.onTouchEnd, { passive: !0 }),
        (s.preventClicks || s.preventClicksPropagation) &&
          n[l]("click", e.onClick, !0),
        s.cssMode && r[l]("scroll", e.onScroll),
        s.updateOnWindowResize
          ? e[d](
              o.ios || o.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              R,
              !0,
            )
          : e[d]("observerUpdate", R, !0),
        n[l]("load", e.onLoad, { capture: !0 });
    };
    const Q = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    var J = {
      init: !0,
      direction: "horizontal",
      oneWayMovement: !1,
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      enabled: !0,
      focusableElements:
        "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 5,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      loop: !1,
      loopedSlides: null,
      loopPreventsSliding: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideActiveClass: "swiper-slide-active",
      slideVisibleClass: "swiper-slide-visible",
      slideNextClass: "swiper-slide-next",
      slidePrevClass: "swiper-slide-prev",
      wrapperClass: "swiper-wrapper",
      lazyPreloaderClass: "swiper-lazy-preloader",
      lazyPreloadPrevNext: 0,
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
    function Z(e, t) {
      return function (i) {
        void 0 === i && (i = {});
        const s = Object.keys(i)[0],
          n = i[s];
        "object" == typeof n && null !== n
          ? (["navigation", "pagination", "scrollbar"].indexOf(s) >= 0 &&
              !0 === e[s] &&
              (e[s] = { auto: !0 }),
            s in e && "enabled" in n
              ? (!0 === e[s] && (e[s] = { enabled: !0 }),
                "object" != typeof e[s] ||
                  "enabled" in e[s] ||
                  (e[s].enabled = !0),
                e[s] || (e[s] = { enabled: !1 }),
                b(t, i))
              : b(t, i))
          : b(t, i);
      };
    }
    const ee = {
        eventsEmitter: A,
        update: G,
        translate: B,
        transition: {
          setTransition: function (e, t) {
            const i = this;
            i.params.cssMode ||
              ((i.wrapperEl.style.transitionDuration = `${e}ms`),
              (i.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : "")),
              i.emit("setTransition", e, t);
          },
          transitionStart: function (e, t) {
            void 0 === e && (e = !0);
            const i = this,
              { params: s } = i;
            s.cssMode ||
              (s.autoHeight && i.updateAutoHeight(),
              F({ swiper: i, runCallbacks: e, direction: t, step: "Start" }));
          },
          transitionEnd: function (e, t) {
            void 0 === e && (e = !0);
            const i = this,
              { params: s } = i;
            (i.animating = !1),
              s.cssMode ||
                (i.setTransition(0),
                F({ swiper: i, runCallbacks: e, direction: t, step: "End" }));
          },
        },
        slide: N,
        loop: V,
        grabCursor: {
          setGrabCursor: function (e) {
            const t = this;
            if (
              !t.params.simulateTouch ||
              (t.params.watchOverflow && t.isLocked) ||
              t.params.cssMode
            )
              return;
            const i =
              "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
            t.isElement && (t.__preventObserver__ = !0),
              (i.style.cursor = "move"),
              (i.style.cursor = e ? "grabbing" : "grab"),
              t.isElement &&
                requestAnimationFrame(() => {
                  t.__preventObserver__ = !1;
                });
          },
          unsetGrabCursor: function () {
            const e = this;
            (e.params.watchOverflow && e.isLocked) ||
              e.params.cssMode ||
              (e.isElement && (e.__preventObserver__ = !0),
              (e[
                "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
              ].style.cursor = ""),
              e.isElement &&
                requestAnimationFrame(() => {
                  e.__preventObserver__ = !1;
                }));
          },
        },
        events: {
          attachEvents: function () {
            const e = this,
              t = p(),
              { params: i } = e;
            (e.onTouchStart = H.bind(e)),
              (e.onTouchMove = $.bind(e)),
              (e.onTouchEnd = j.bind(e)),
              i.cssMode && (e.onScroll = W.bind(e)),
              (e.onClick = q.bind(e)),
              (e.onLoad = Y.bind(e)),
              X || (t.addEventListener("touchstart", U), (X = !0)),
              K(e, "on");
          },
          detachEvents: function () {
            K(this, "off");
          },
        },
        breakpoints: {
          setBreakpoint: function () {
            const e = this,
              { realIndex: t, initialized: i, params: s, el: n } = e,
              r = s.breakpoints;
            if (!r || (r && 0 === Object.keys(r).length)) return;
            const o = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
            if (!o || e.currentBreakpoint === o) return;
            const a = (o in r ? r[o] : void 0) || e.originalParams,
              l = Q(e, s),
              d = Q(e, a),
              c = s.enabled;
            l && !d
              ? (n.classList.remove(
                  `${s.containerModifierClass}grid`,
                  `${s.containerModifierClass}grid-column`,
                ),
                e.emitContainerClasses())
              : !l &&
                d &&
                (n.classList.add(`${s.containerModifierClass}grid`),
                ((a.grid.fill && "column" === a.grid.fill) ||
                  (!a.grid.fill && "column" === s.grid.fill)) &&
                  n.classList.add(`${s.containerModifierClass}grid-column`),
                e.emitContainerClasses()),
              ["navigation", "pagination", "scrollbar"].forEach((t) => {
                if (void 0 === a[t]) return;
                const i = s[t] && s[t].enabled,
                  n = a[t] && a[t].enabled;
                i && !n && e[t].disable(), !i && n && e[t].enable();
              });
            const u = a.direction && a.direction !== s.direction,
              p = s.loop && (a.slidesPerView !== s.slidesPerView || u);
            u && i && e.changeDirection(), b(e.params, a);
            const h = e.params.enabled;
            Object.assign(e, {
              allowTouchMove: e.params.allowTouchMove,
              allowSlideNext: e.params.allowSlideNext,
              allowSlidePrev: e.params.allowSlidePrev,
            }),
              c && !h ? e.disable() : !c && h && e.enable(),
              (e.currentBreakpoint = o),
              e.emit("_beforeBreakpoint", a),
              p && i && (e.loopDestroy(), e.loopCreate(t), e.updateSlides()),
              e.emit("breakpoint", a);
          },
          getBreakpoint: function (e, t, i) {
            if (
              (void 0 === t && (t = "window"), !e || ("container" === t && !i))
            )
              return;
            let s = !1;
            const n = g(),
              r = "window" === t ? n.innerHeight : i.clientHeight,
              o = Object.keys(e).map((e) => {
                if ("string" == typeof e && 0 === e.indexOf("@")) {
                  const t = parseFloat(e.substr(1));
                  return { value: r * t, point: e };
                }
                return { value: e, point: e };
              });
            o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
            for (let e = 0; e < o.length; e += 1) {
              const { point: r, value: a } = o[e];
              "window" === t
                ? n.matchMedia(`(min-width: ${a}px)`).matches && (s = r)
                : a <= i.clientWidth && (s = r);
            }
            return s || "max";
          },
        },
        checkOverflow: {
          checkOverflow: function () {
            const e = this,
              { isLocked: t, params: i } = e,
              { slidesOffsetBefore: s } = i;
            if (s) {
              const t = e.slides.length - 1,
                i = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * s;
              e.isLocked = e.size > i;
            } else e.isLocked = 1 === e.snapGrid.length;
            !0 === i.allowSlideNext && (e.allowSlideNext = !e.isLocked),
              !0 === i.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
              t && t !== e.isLocked && (e.isEnd = !1),
              t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
          },
        },
        classes: {
          addClasses: function () {
            const e = this,
              { classNames: t, params: i, rtl: s, el: n, device: r } = e,
              o = (function (e, t) {
                const i = [];
                return (
                  e.forEach((e) => {
                    "object" == typeof e
                      ? Object.keys(e).forEach((s) => {
                          e[s] && i.push(t + s);
                        })
                      : "string" == typeof e && i.push(t + e);
                  }),
                  i
                );
              })(
                [
                  "initialized",
                  i.direction,
                  { "free-mode": e.params.freeMode && i.freeMode.enabled },
                  { autoheight: i.autoHeight },
                  { rtl: s },
                  { grid: i.grid && i.grid.rows > 1 },
                  {
                    "grid-column":
                      i.grid && i.grid.rows > 1 && "column" === i.grid.fill,
                  },
                  { android: r.android },
                  { ios: r.ios },
                  { "css-mode": i.cssMode },
                  { centered: i.cssMode && i.centeredSlides },
                  { "watch-progress": i.watchSlidesProgress },
                ],
                i.containerModifierClass,
              );
            t.push(...o), n.classList.add(...t), e.emitContainerClasses();
          },
          removeClasses: function () {
            const { el: e, classNames: t } = this;
            e.classList.remove(...t), this.emitContainerClasses();
          },
        },
      },
      te = {};
    class ie {
      constructor() {
        let e, t;
        for (var i = arguments.length, s = new Array(i), n = 0; n < i; n++)
          s[n] = arguments[n];
        1 === s.length &&
        s[0].constructor &&
        "Object" === Object.prototype.toString.call(s[0]).slice(8, -1)
          ? (t = s[0])
          : ([e, t] = s),
          t || (t = {}),
          (t = b({}, t)),
          e && !t.el && (t.el = e);
        const r = p();
        if (
          t.el &&
          "string" == typeof t.el &&
          r.querySelectorAll(t.el).length > 1
        ) {
          const e = [];
          return (
            r.querySelectorAll(t.el).forEach((i) => {
              const s = b({}, t, { el: i });
              e.push(new ie(s));
            }),
            e
          );
        }
        const o = this;
        (o.__swiper__ = !0),
          (o.support = _()),
          (o.device = P({ userAgent: t.userAgent })),
          (o.browser = k()),
          (o.eventsListeners = {}),
          (o.eventsAnyListeners = []),
          (o.modules = [...o.__modules__]),
          t.modules && Array.isArray(t.modules) && o.modules.push(...t.modules);
        const a = {};
        o.modules.forEach((e) => {
          e({
            params: t,
            swiper: o,
            extendParams: Z(t, a),
            on: o.on.bind(o),
            once: o.once.bind(o),
            off: o.off.bind(o),
            emit: o.emit.bind(o),
          });
        });
        const l = b({}, J, a);
        return (
          (o.params = b({}, l, te, t)),
          (o.originalParams = b({}, o.params)),
          (o.passedParams = b({}, t)),
          o.params &&
            o.params.on &&
            Object.keys(o.params.on).forEach((e) => {
              o.on(e, o.params.on[e]);
            }),
          o.params && o.params.onAny && o.onAny(o.params.onAny),
          Object.assign(o, {
            enabled: o.params.enabled,
            el: e,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === o.params.direction,
            isVertical: () => "vertical" === o.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            cssOverflowAdjustment() {
              return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
            },
            allowSlideNext: o.params.allowSlideNext,
            allowSlidePrev: o.params.allowSlidePrev,
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: o.params.focusableElements,
              lastClickTime: 0,
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              startMoving: void 0,
              evCache: [],
            },
            allowClick: !0,
            allowTouchMove: o.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          o.emit("_swiper"),
          o.params.init && o.init(),
          o
        );
      }
      getSlideIndex(e) {
        const { slidesEl: t, params: i } = this,
          s = E(T(t, `.${i.slideClass}, swiper-slide`)[0]);
        return E(e) - s;
      }
      getSlideIndexByData(e) {
        return this.getSlideIndex(
          this.slides.filter(
            (t) => 1 * t.getAttribute("data-swiper-slide-index") === e,
          )[0],
        );
      }
      recalcSlides() {
        const { slidesEl: e, params: t } = this;
        this.slides = T(e, `.${t.slideClass}, swiper-slide`);
      }
      enable() {
        const e = this;
        e.enabled ||
          ((e.enabled = !0),
          e.params.grabCursor && e.setGrabCursor(),
          e.emit("enable"));
      }
      disable() {
        const e = this;
        e.enabled &&
          ((e.enabled = !1),
          e.params.grabCursor && e.unsetGrabCursor(),
          e.emit("disable"));
      }
      setProgress(e, t) {
        const i = this;
        e = Math.min(Math.max(e, 0), 1);
        const s = i.minTranslate(),
          n = (i.maxTranslate() - s) * e + s;
        i.translateTo(n, void 0 === t ? 0 : t),
          i.updateActiveIndex(),
          i.updateSlidesClasses();
      }
      emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className
          .split(" ")
          .filter(
            (t) =>
              0 === t.indexOf("swiper") ||
              0 === t.indexOf(e.params.containerModifierClass),
          );
        e.emit("_containerClasses", t.join(" "));
      }
      getSlideClasses(e) {
        const t = this;
        return t.destroyed
          ? ""
          : e.className
              .split(" ")
              .filter(
                (e) =>
                  0 === e.indexOf("swiper-slide") ||
                  0 === e.indexOf(t.params.slideClass),
              )
              .join(" ");
      }
      emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.forEach((i) => {
          const s = e.getSlideClasses(i);
          t.push({ slideEl: i, classNames: s }), e.emit("_slideClass", i, s);
        }),
          e.emit("_slideClasses", t);
      }
      slidesPerViewDynamic(e, t) {
        void 0 === e && (e = "current"), void 0 === t && (t = !1);
        const {
          params: i,
          slides: s,
          slidesGrid: n,
          slidesSizesGrid: r,
          size: o,
          activeIndex: a,
        } = this;
        let l = 1;
        if (i.centeredSlides) {
          let e,
            t = s[a] ? s[a].swiperSlideSize : 0;
          for (let i = a + 1; i < s.length; i += 1)
            s[i] &&
              !e &&
              ((t += s[i].swiperSlideSize), (l += 1), t > o && (e = !0));
          for (let i = a - 1; i >= 0; i -= 1)
            s[i] &&
              !e &&
              ((t += s[i].swiperSlideSize), (l += 1), t > o && (e = !0));
        } else if ("current" === e)
          for (let e = a + 1; e < s.length; e += 1) {
            (t ? n[e] + r[e] - n[a] < o : n[e] - n[a] < o) && (l += 1);
          }
        else
          for (let e = a - 1; e >= 0; e -= 1) {
            n[a] - n[e] < o && (l += 1);
          }
        return l;
      }
      update() {
        const e = this;
        if (!e || e.destroyed) return;
        const { snapGrid: t, params: i } = e;
        function s() {
          const t = e.rtlTranslate ? -1 * e.translate : e.translate,
            i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let n;
        if (
          (i.breakpoints && e.setBreakpoint(),
          [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t) => {
            t.complete && O(e, t);
          }),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          i.freeMode && i.freeMode.enabled && !i.cssMode)
        )
          s(), i.autoHeight && e.updateAutoHeight();
        else {
          if (
            ("auto" === i.slidesPerView || i.slidesPerView > 1) &&
            e.isEnd &&
            !i.centeredSlides
          ) {
            const t =
              e.virtual && i.virtual.enabled ? e.virtual.slides : e.slides;
            n = e.slideTo(t.length - 1, 0, !1, !0);
          } else n = e.slideTo(e.activeIndex, 0, !1, !0);
          n || s();
        }
        i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
          e.emit("update");
      }
      changeDirection(e, t) {
        void 0 === t && (t = !0);
        const i = this,
          s = i.params.direction;
        return (
          e || (e = "horizontal" === s ? "vertical" : "horizontal"),
          e === s ||
            ("horizontal" !== e && "vertical" !== e) ||
            (i.el.classList.remove(`${i.params.containerModifierClass}${s}`),
            i.el.classList.add(`${i.params.containerModifierClass}${e}`),
            i.emitContainerClasses(),
            (i.params.direction = e),
            i.slides.forEach((t) => {
              "vertical" === e ? (t.style.width = "") : (t.style.height = "");
            }),
            i.emit("changeDirection"),
            t && i.update()),
          i
        );
      }
      changeLanguageDirection(e) {
        const t = this;
        (t.rtl && "rtl" === e) ||
          (!t.rtl && "ltr" === e) ||
          ((t.rtl = "rtl" === e),
          (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
          t.rtl
            ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
              (t.el.dir = "rtl"))
            : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
              (t.el.dir = "ltr")),
          t.update());
      }
      mount(e) {
        const t = this;
        if (t.mounted) return !0;
        let i = e || t.params.el;
        if (("string" == typeof i && (i = document.querySelector(i)), !i))
          return !1;
        (i.swiper = t),
          i.parentNode &&
            i.parentNode.host &&
            "SWIPER-CONTAINER" === i.parentNode.host.nodeName &&
            (t.isElement = !0);
        const s = () =>
          `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let n = (() => {
          if (i && i.shadowRoot && i.shadowRoot.querySelector) {
            return i.shadowRoot.querySelector(s());
          }
          return T(i, s())[0];
        })();
        return (
          !n &&
            t.params.createElements &&
            ((n = (function (e, t) {
              void 0 === t && (t = []);
              const i = document.createElement(e);
              return i.classList.add(...(Array.isArray(t) ? t : [t])), i;
            })("div", t.params.wrapperClass)),
            i.append(n),
            T(i, `.${t.params.slideClass}`).forEach((e) => {
              n.append(e);
            })),
          Object.assign(t, {
            el: i,
            wrapperEl: n,
            slidesEl:
              t.isElement && !i.parentNode.host.slideSlots
                ? i.parentNode.host
                : n,
            hostEl: t.isElement ? i.parentNode.host : i,
            mounted: !0,
            rtl: "rtl" === i.dir.toLowerCase() || "rtl" === x(i, "direction"),
            rtlTranslate:
              "horizontal" === t.params.direction &&
              ("rtl" === i.dir.toLowerCase() || "rtl" === x(i, "direction")),
            wrongRTL: "-webkit-box" === x(n, "display"),
          }),
          !0
        );
      }
      init(e) {
        const t = this;
        if (t.initialized) return t;
        if (!1 === t.mount(e)) return t;
        t.emit("beforeInit"),
          t.params.breakpoints && t.setBreakpoint(),
          t.addClasses(),
          t.updateSize(),
          t.updateSlides(),
          t.params.watchOverflow && t.checkOverflow(),
          t.params.grabCursor && t.enabled && t.setGrabCursor(),
          t.params.loop && t.virtual && t.params.virtual.enabled
            ? t.slideTo(
                t.params.initialSlide + t.virtual.slidesBefore,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0,
              )
            : t.slideTo(
                t.params.initialSlide,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0,
              ),
          t.params.loop && t.loopCreate(),
          t.attachEvents();
        const i = [...t.el.querySelectorAll('[loading="lazy"]')];
        return (
          t.isElement &&
            i.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
          i.forEach((e) => {
            e.complete
              ? O(t, e)
              : e.addEventListener("load", (e) => {
                  O(t, e.target);
                });
          }),
          D(t),
          (t.initialized = !0),
          D(t),
          t.emit("init"),
          t.emit("afterInit"),
          t
        );
      }
      destroy(e, t) {
        void 0 === e && (e = !0), void 0 === t && (t = !0);
        const i = this,
          { params: s, el: n, wrapperEl: r, slides: o } = i;
        return (
          void 0 === i.params ||
            i.destroyed ||
            (i.emit("beforeDestroy"),
            (i.initialized = !1),
            i.detachEvents(),
            s.loop && i.loopDestroy(),
            t &&
              (i.removeClasses(),
              n.removeAttribute("style"),
              r.removeAttribute("style"),
              o &&
                o.length &&
                o.forEach((e) => {
                  e.classList.remove(
                    s.slideVisibleClass,
                    s.slideActiveClass,
                    s.slideNextClass,
                    s.slidePrevClass,
                  ),
                    e.removeAttribute("style"),
                    e.removeAttribute("data-swiper-slide-index");
                })),
            i.emit("destroy"),
            Object.keys(i.eventsListeners).forEach((e) => {
              i.off(e);
            }),
            !1 !== e &&
              ((i.el.swiper = null),
              (function (e) {
                const t = e;
                Object.keys(t).forEach((e) => {
                  try {
                    t[e] = null;
                  } catch (e) {}
                  try {
                    delete t[e];
                  } catch (e) {}
                });
              })(i)),
            (i.destroyed = !0)),
          null
        );
      }
      static extendDefaults(e) {
        b(te, e);
      }
      static get extendedDefaults() {
        return te;
      }
      static get defaults() {
        return J;
      }
      static installModule(e) {
        ie.prototype.__modules__ || (ie.prototype.__modules__ = []);
        const t = ie.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
      static use(e) {
        return Array.isArray(e)
          ? (e.forEach((e) => ie.installModule(e)), ie)
          : (ie.installModule(e), ie);
      }
    }
    function se(e) {
      let t,
        i,
        { swiper: s, extendParams: n, on: r, emit: o, params: a } = e;
      (s.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
        n({
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1,
            pauseOnMouseEnter: !1,
          },
        });
      let l,
        d,
        c,
        u,
        h,
        g,
        m,
        f = a && a.autoplay ? a.autoplay.delay : 3e3,
        v = a && a.autoplay ? a.autoplay.delay : 3e3,
        y = new Date().getTime;
      function b(e) {
        s &&
          !s.destroyed &&
          s.wrapperEl &&
          e.target === s.wrapperEl &&
          (s.wrapperEl.removeEventListener("transitionend", b), C());
      }
      const w = () => {
          if (s.destroyed || !s.autoplay.running) return;
          s.autoplay.paused ? (d = !0) : d && ((v = l), (d = !1));
          const e = s.autoplay.paused ? l : y + v - new Date().getTime();
          (s.autoplay.timeLeft = e),
            o("autoplayTimeLeft", e, e / f),
            (i = requestAnimationFrame(() => {
              w();
            }));
        },
        S = (e) => {
          if (s.destroyed || !s.autoplay.running) return;
          cancelAnimationFrame(i), w();
          let n = void 0 === e ? s.params.autoplay.delay : e;
          (f = s.params.autoplay.delay), (v = s.params.autoplay.delay);
          const r = (() => {
            let e;
            if (
              ((e =
                s.virtual && s.params.virtual.enabled
                  ? s.slides.filter((e) =>
                      e.classList.contains("swiper-slide-active"),
                    )[0]
                  : s.slides[s.activeIndex]),
              !e)
            )
              return;
            return parseInt(e.getAttribute("data-swiper-autoplay"), 10);
          })();
          !Number.isNaN(r) &&
            r > 0 &&
            void 0 === e &&
            ((n = r), (f = r), (v = r)),
            (l = n);
          const a = s.params.speed,
            d = () => {
              s &&
                !s.destroyed &&
                (s.params.autoplay.reverseDirection
                  ? !s.isBeginning || s.params.loop || s.params.rewind
                    ? (s.slidePrev(a, !0, !0), o("autoplay"))
                    : s.params.autoplay.stopOnLastSlide ||
                      (s.slideTo(s.slides.length - 1, a, !0, !0), o("autoplay"))
                  : !s.isEnd || s.params.loop || s.params.rewind
                  ? (s.slideNext(a, !0, !0), o("autoplay"))
                  : s.params.autoplay.stopOnLastSlide ||
                    (s.slideTo(0, a, !0, !0), o("autoplay")),
                s.params.cssMode &&
                  ((y = new Date().getTime()),
                  requestAnimationFrame(() => {
                    S();
                  })));
            };
          return (
            n > 0
              ? (clearTimeout(t),
                (t = setTimeout(() => {
                  d();
                }, n)))
              : requestAnimationFrame(() => {
                  d();
                }),
            n
          );
        },
        T = () => {
          (s.autoplay.running = !0), S(), o("autoplayStart");
        },
        x = () => {
          (s.autoplay.running = !1),
            clearTimeout(t),
            cancelAnimationFrame(i),
            o("autoplayStop");
        },
        E = (e, i) => {
          if (s.destroyed || !s.autoplay.running) return;
          clearTimeout(t), e || (m = !0);
          const n = () => {
            o("autoplayPause"),
              s.params.autoplay.waitForTransition
                ? s.wrapperEl.addEventListener("transitionend", b)
                : C();
          };
          if (((s.autoplay.paused = !0), i))
            return g && (l = s.params.autoplay.delay), (g = !1), void n();
          const r = l || s.params.autoplay.delay;
          (l = r - (new Date().getTime() - y)),
            (s.isEnd && l < 0 && !s.params.loop) || (l < 0 && (l = 0), n());
        },
        C = () => {
          (s.isEnd && l < 0 && !s.params.loop) ||
            s.destroyed ||
            !s.autoplay.running ||
            ((y = new Date().getTime()),
            m ? ((m = !1), S(l)) : S(),
            (s.autoplay.paused = !1),
            o("autoplayResume"));
        },
        I = () => {
          if (s.destroyed || !s.autoplay.running) return;
          const e = p();
          "hidden" === e.visibilityState && ((m = !0), E(!0)),
            "visible" === e.visibilityState && C();
        },
        M = (e) => {
          "mouse" === e.pointerType &&
            ((m = !0), s.animating || s.autoplay.paused || E(!0));
        },
        L = (e) => {
          "mouse" === e.pointerType && s.autoplay.paused && C();
        };
      r("init", () => {
        s.params.autoplay.enabled &&
          (s.params.autoplay.pauseOnMouseEnter &&
            (s.el.addEventListener("pointerenter", M),
            s.el.addEventListener("pointerleave", L)),
          p().addEventListener("visibilitychange", I),
          (y = new Date().getTime()),
          T());
      }),
        r("destroy", () => {
          s.el.removeEventListener("pointerenter", M),
            s.el.removeEventListener("pointerleave", L),
            p().removeEventListener("visibilitychange", I),
            s.autoplay.running && x();
        }),
        r("beforeTransitionStart", (e, t, i) => {
          !s.destroyed &&
            s.autoplay.running &&
            (i || !s.params.autoplay.disableOnInteraction ? E(!0, !0) : x());
        }),
        r("sliderFirstMove", () => {
          !s.destroyed &&
            s.autoplay.running &&
            (s.params.autoplay.disableOnInteraction
              ? x()
              : ((c = !0),
                (u = !1),
                (m = !1),
                (h = setTimeout(() => {
                  (m = !0), (u = !0), E(!0);
                }, 200))));
        }),
        r("touchEnd", () => {
          if (!s.destroyed && s.autoplay.running && c) {
            if (
              (clearTimeout(h),
              clearTimeout(t),
              s.params.autoplay.disableOnInteraction)
            )
              return (u = !1), void (c = !1);
            u && s.params.cssMode && C(), (u = !1), (c = !1);
          }
        }),
        r("slideChange", () => {
          !s.destroyed && s.autoplay.running && (g = !0);
        }),
        Object.assign(s.autoplay, { start: T, stop: x, pause: E, resume: C });
    }
    function ne() {
      let e = document.querySelectorAll(
        '[class*="__swiper"]:not(.swiper-wrapper)',
      );
      e &&
        e.forEach((e) => {
          e.parentElement.classList.add("swiper"),
            e.classList.add("swiper-wrapper");
          for (const t of e.children) t.classList.add("swiper-slide");
        });
    }
    Object.keys(ee).forEach((e) => {
      Object.keys(ee[e]).forEach((t) => {
        ie.prototype[t] = ee[e][t];
      });
    }),
      ie.use([
        function (e) {
          let { swiper: t, on: i, emit: s } = e;
          const n = g();
          let r = null,
            o = null;
          const a = () => {
              t &&
                !t.destroyed &&
                t.initialized &&
                (s("beforeResize"), s("resize"));
            },
            l = () => {
              t && !t.destroyed && t.initialized && s("orientationchange");
            };
          i("init", () => {
            t.params.resizeObserver && void 0 !== n.ResizeObserver
              ? t &&
                !t.destroyed &&
                t.initialized &&
                ((r = new ResizeObserver((e) => {
                  o = n.requestAnimationFrame(() => {
                    const { width: i, height: s } = t;
                    let n = i,
                      r = s;
                    e.forEach((e) => {
                      let { contentBoxSize: i, contentRect: s, target: o } = e;
                      (o && o !== t.el) ||
                        ((n = s ? s.width : (i[0] || i).inlineSize),
                        (r = s ? s.height : (i[0] || i).blockSize));
                    }),
                      (n === i && r === s) || a();
                  });
                })),
                r.observe(t.el))
              : (n.addEventListener("resize", a),
                n.addEventListener("orientationchange", l));
          }),
            i("destroy", () => {
              o && n.cancelAnimationFrame(o),
                r && r.unobserve && t.el && (r.unobserve(t.el), (r = null)),
                n.removeEventListener("resize", a),
                n.removeEventListener("orientationchange", l);
            });
        },
        function (e) {
          let { swiper: t, extendParams: i, on: s, emit: n } = e;
          const r = [],
            o = g(),
            a = function (e, i) {
              void 0 === i && (i = {});
              const s = new (o.MutationObserver || o.WebkitMutationObserver)(
                (e) => {
                  if (t.__preventObserver__) return;
                  if (1 === e.length) return void n("observerUpdate", e[0]);
                  const i = function () {
                    n("observerUpdate", e[0]);
                  };
                  o.requestAnimationFrame
                    ? o.requestAnimationFrame(i)
                    : o.setTimeout(i, 0);
                },
              );
              s.observe(e, {
                attributes: void 0 === i.attributes || i.attributes,
                childList: void 0 === i.childList || i.childList,
                characterData: void 0 === i.characterData || i.characterData,
              }),
                r.push(s);
            };
          i({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
            s("init", () => {
              if (t.params.observer) {
                if (t.params.observeParents) {
                  const e = (function (e, t) {
                    const i = [];
                    let s = e.parentElement;
                    for (; s; )
                      t ? s.matches(t) && i.push(s) : i.push(s),
                        (s = s.parentElement);
                    return i;
                  })(t.hostEl);
                  for (let t = 0; t < e.length; t += 1) a(e[t]);
                }
                a(t.hostEl, { childList: t.params.observeSlideChildren }),
                  a(t.wrapperEl, { attributes: !1 });
              }
            }),
            s("destroy", () => {
              r.forEach((e) => {
                e.disconnect();
              }),
                r.splice(0, r.length);
            });
        },
      ]),
      window.addEventListener("load", function (e) {
        ne(),
          document.querySelector(".swiper") &&
            new ie(".most-popular__slider", {
              modules: [se],
              autoplay: { delay: 3e3, disableOnInteraction: !1 },
              observer: !0,
              observeParents: !0,
              speed: 800,
              breakpoints: {
                320: { slidesPerView: 1.2, spaceBetween: 10 },
                389: { slidesPerView: 1.58, spaceBetween: 10 },
                460: { slidesPerView: 1.8, spaceBetween: 10 },
                525: { slidesPerView: 2.2, spaceBetween: 10 },
                634: { slidesPerView: 2.6, spaceBetween: 10 },
                768: { slidesPerView: 3.4, spaceBetween: 10 },
                992: { slidesPerView: 4, spaceBetween: 30 },
              },
            }),
          ae(oe);
      });
    let re,
      oe = window.matchMedia("(max-width: 767.98px)");
    function ae(e) {
      e.matches
        ? document.querySelector(".swiper") &&
          (re = new ie(".sidebar__slider", {
            modules: [se],
            autoplay: { delay: 2e3, disableOnInteraction: !1 },
            speed: 800,
            breakpoints: {
              320: { slidesPerView: 1.2, spaceBetween: 10 },
              389: { slidesPerView: 1.58, spaceBetween: 10 },
              460: { slidesPerView: 1.8, spaceBetween: 10 },
              525: { slidesPerView: 2.2, spaceBetween: 10 },
              634: { slidesPerView: 2.6, spaceBetween: 10 },
            },
          }))
        : void 0 !== re && re.destroy(!0, !0);
    }
    oe.addEventListener("change", ae), ae(oe);
    new (i(732))({
      elements_selector: "[data-src]",
      class_loaded: "_lazy-loaded",
      use_native: !0,
    });
    let le = !1;
    setTimeout(() => {
      if (le) {
        let e = new Event("windowScroll");
        window.addEventListener("scroll", function (t) {
          document.dispatchEvent(e);
        });
      }
    }, 0);
    var de = function () {
      return (
        (de =
          Object.assign ||
          function (e) {
            for (var t, i = 1, s = arguments.length; i < s; i++)
              for (var n in (t = arguments[i]))
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e;
          }),
        de.apply(this, arguments)
      );
    };
    var ce = "lgAfterAppendSlide",
      ue = "lgInit",
      pe = "lgHasVideo",
      he = "lgContainerResize",
      ge = "lgUpdateSlides",
      me = "lgAfterAppendSubHtml",
      fe = "lgBeforeOpen",
      ve = "lgAfterOpen",
      ye = "lgSlideItemLoad",
      be = "lgBeforeSlide",
      we = "lgAfterSlide",
      Se = "lgPosterClick",
      Te = "lgDragStart",
      xe = "lgDragMove",
      Ee = "lgDragEnd",
      Ce = "lgBeforeNextSlide",
      Ie = "lgBeforePrevSlide",
      Me = "lgBeforeClose",
      Le = "lgAfterClose",
      _e = {
        mode: "lg-slide",
        easing: "ease",
        speed: 400,
        licenseKey: "0000-0000-000-0000",
        height: "100%",
        width: "100%",
        addClass: "",
        startClass: "lg-start-zoom",
        backdropDuration: 300,
        container: "",
        startAnimationDuration: 400,
        zoomFromOrigin: !0,
        hideBarsDelay: 0,
        showBarsAfter: 1e4,
        slideDelay: 0,
        supportLegacyBrowser: !0,
        allowMediaOverlap: !1,
        videoMaxSize: "1280-720",
        loadYouTubePoster: !0,
        defaultCaptionHeight: 0,
        ariaLabelledby: "",
        ariaDescribedby: "",
        resetScrollPosition: !0,
        hideScrollbar: !1,
        closable: !0,
        swipeToClose: !0,
        closeOnTap: !0,
        showCloseIcon: !0,
        showMaximizeIcon: !1,
        loop: !0,
        escKey: !0,
        keyPress: !0,
        trapFocus: !0,
        controls: !0,
        slideEndAnimation: !0,
        hideControlOnEnd: !1,
        mousewheel: !1,
        getCaptionFromTitleOrAlt: !0,
        appendSubHtmlTo: ".lg-sub-html",
        subHtmlSelectorRelative: !1,
        preload: 2,
        numberOfSlideItemsInDom: 10,
        selector: "",
        selectWithin: "",
        nextHtml: "",
        prevHtml: "",
        index: 0,
        iframeWidth: "100%",
        iframeHeight: "100%",
        iframeMaxWidth: "100%",
        iframeMaxHeight: "100%",
        download: !0,
        counter: !0,
        appendCounterTo: ".lg-toolbar",
        swipeThreshold: 50,
        enableSwipe: !0,
        enableDrag: !0,
        dynamic: !1,
        dynamicEl: [],
        extraProps: [],
        exThumbImage: "",
        isMobile: void 0,
        mobileSettings: { controls: !1, showCloseIcon: !1, download: !1 },
        plugins: [],
        strings: {
          closeGallery: "Close gallery",
          toggleMaximize: "Toggle maximize",
          previousSlide: "Previous slide",
          nextSlide: "Next slide",
          download: "Download",
          playVideo: "Play video",
        },
      };
    var Pe = (function () {
      function e(e) {
        return (
          (this.cssVenderPrefixes = [
            "TransitionDuration",
            "TransitionTimingFunction",
            "Transform",
            "Transition",
          ]),
          (this.selector = this._getSelector(e)),
          (this.firstElement = this._getFirstEl()),
          this
        );
      }
      return (
        (e.generateUUID = function () {
          return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
            /[xy]/g,
            function (e) {
              var t = (16 * Math.random()) | 0;
              return ("x" == e ? t : (3 & t) | 8).toString(16);
            },
          );
        }),
        (e.prototype._getSelector = function (e, t) {
          return (
            void 0 === t && (t = document),
            "string" != typeof e
              ? e
              : ((t = t || document),
                "#" === e.substring(0, 1)
                  ? t.querySelector(e)
                  : t.querySelectorAll(e))
          );
        }),
        (e.prototype._each = function (e) {
          return this.selector
            ? (void 0 !== this.selector.length
                ? [].forEach.call(this.selector, e)
                : e(this.selector, 0),
              this)
            : this;
        }),
        (e.prototype._setCssVendorPrefix = function (e, t, i) {
          var s = t.replace(/-([a-z])/gi, function (e, t) {
            return t.toUpperCase();
          });
          -1 !== this.cssVenderPrefixes.indexOf(s)
            ? ((e.style[s.charAt(0).toLowerCase() + s.slice(1)] = i),
              (e.style["webkit" + s] = i),
              (e.style["moz" + s] = i),
              (e.style["ms" + s] = i),
              (e.style["o" + s] = i))
            : (e.style[s] = i);
        }),
        (e.prototype._getFirstEl = function () {
          return this.selector && void 0 !== this.selector.length
            ? this.selector[0]
            : this.selector;
        }),
        (e.prototype.isEventMatched = function (e, t) {
          var i = t.split(".");
          return e
            .split(".")
            .filter(function (e) {
              return e;
            })
            .every(function (e) {
              return -1 !== i.indexOf(e);
            });
        }),
        (e.prototype.attr = function (e, t) {
          return void 0 === t
            ? this.firstElement
              ? this.firstElement.getAttribute(e)
              : ""
            : (this._each(function (i) {
                i.setAttribute(e, t);
              }),
              this);
        }),
        (e.prototype.find = function (e) {
          return ke(this._getSelector(e, this.selector));
        }),
        (e.prototype.first = function () {
          return this.selector && void 0 !== this.selector.length
            ? ke(this.selector[0])
            : ke(this.selector);
        }),
        (e.prototype.eq = function (e) {
          return ke(this.selector[e]);
        }),
        (e.prototype.parent = function () {
          return ke(this.selector.parentElement);
        }),
        (e.prototype.get = function () {
          return this._getFirstEl();
        }),
        (e.prototype.removeAttr = function (e) {
          var t = e.split(" ");
          return (
            this._each(function (e) {
              t.forEach(function (t) {
                return e.removeAttribute(t);
              });
            }),
            this
          );
        }),
        (e.prototype.wrap = function (e) {
          if (!this.firstElement) return this;
          var t = document.createElement("div");
          return (
            (t.className = e),
            this.firstElement.parentNode.insertBefore(t, this.firstElement),
            this.firstElement.parentNode.removeChild(this.firstElement),
            t.appendChild(this.firstElement),
            this
          );
        }),
        (e.prototype.addClass = function (e) {
          return (
            void 0 === e && (e = ""),
            this._each(function (t) {
              e.split(" ").forEach(function (e) {
                e && t.classList.add(e);
              });
            }),
            this
          );
        }),
        (e.prototype.removeClass = function (e) {
          return (
            this._each(function (t) {
              e.split(" ").forEach(function (e) {
                e && t.classList.remove(e);
              });
            }),
            this
          );
        }),
        (e.prototype.hasClass = function (e) {
          return !!this.firstElement && this.firstElement.classList.contains(e);
        }),
        (e.prototype.hasAttribute = function (e) {
          return !!this.firstElement && this.firstElement.hasAttribute(e);
        }),
        (e.prototype.toggleClass = function (e) {
          return this.firstElement
            ? (this.hasClass(e) ? this.removeClass(e) : this.addClass(e), this)
            : this;
        }),
        (e.prototype.css = function (e, t) {
          var i = this;
          return (
            this._each(function (s) {
              i._setCssVendorPrefix(s, e, t);
            }),
            this
          );
        }),
        (e.prototype.on = function (t, i) {
          var s = this;
          return this.selector
            ? (t.split(" ").forEach(function (t) {
                Array.isArray(e.eventListeners[t]) ||
                  (e.eventListeners[t] = []),
                  e.eventListeners[t].push(i),
                  s.selector.addEventListener(t.split(".")[0], i);
              }),
              this)
            : this;
        }),
        (e.prototype.once = function (e, t) {
          var i = this;
          return (
            this.on(e, function () {
              i.off(e), t(e);
            }),
            this
          );
        }),
        (e.prototype.off = function (t) {
          var i = this;
          return this.selector
            ? (Object.keys(e.eventListeners).forEach(function (s) {
                i.isEventMatched(t, s) &&
                  (e.eventListeners[s].forEach(function (e) {
                    i.selector.removeEventListener(s.split(".")[0], e);
                  }),
                  (e.eventListeners[s] = []));
              }),
              this)
            : this;
        }),
        (e.prototype.trigger = function (e, t) {
          if (!this.firstElement) return this;
          var i = new CustomEvent(e.split(".")[0], { detail: t || null });
          return this.firstElement.dispatchEvent(i), this;
        }),
        (e.prototype.load = function (e) {
          var t = this;
          return (
            fetch(e)
              .then(function (e) {
                return e.text();
              })
              .then(function (e) {
                t.selector.innerHTML = e;
              }),
            this
          );
        }),
        (e.prototype.html = function (e) {
          return void 0 === e
            ? this.firstElement
              ? this.firstElement.innerHTML
              : ""
            : (this._each(function (t) {
                t.innerHTML = e;
              }),
              this);
        }),
        (e.prototype.append = function (e) {
          return (
            this._each(function (t) {
              "string" == typeof e
                ? t.insertAdjacentHTML("beforeend", e)
                : t.appendChild(e);
            }),
            this
          );
        }),
        (e.prototype.prepend = function (e) {
          return (
            this._each(function (t) {
              t.insertAdjacentHTML("afterbegin", e);
            }),
            this
          );
        }),
        (e.prototype.remove = function () {
          return (
            this._each(function (e) {
              e.parentNode.removeChild(e);
            }),
            this
          );
        }),
        (e.prototype.empty = function () {
          return (
            this._each(function (e) {
              e.innerHTML = "";
            }),
            this
          );
        }),
        (e.prototype.scrollTop = function (e) {
          return void 0 !== e
            ? ((document.body.scrollTop = e),
              (document.documentElement.scrollTop = e),
              this)
            : window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop ||
                0;
        }),
        (e.prototype.scrollLeft = function (e) {
          return void 0 !== e
            ? ((document.body.scrollLeft = e),
              (document.documentElement.scrollLeft = e),
              this)
            : window.pageXOffset ||
                document.documentElement.scrollLeft ||
                document.body.scrollLeft ||
                0;
        }),
        (e.prototype.offset = function () {
          if (!this.firstElement) return { left: 0, top: 0 };
          var e = this.firstElement.getBoundingClientRect(),
            t = ke("body").style().marginLeft;
          return {
            left: e.left - parseFloat(t) + this.scrollLeft(),
            top: e.top + this.scrollTop(),
          };
        }),
        (e.prototype.style = function () {
          return this.firstElement
            ? this.firstElement.currentStyle ||
                window.getComputedStyle(this.firstElement)
            : {};
        }),
        (e.prototype.width = function () {
          var e = this.style();
          return (
            this.firstElement.clientWidth -
            parseFloat(e.paddingLeft) -
            parseFloat(e.paddingRight)
          );
        }),
        (e.prototype.height = function () {
          var e = this.style();
          return (
            this.firstElement.clientHeight -
            parseFloat(e.paddingTop) -
            parseFloat(e.paddingBottom)
          );
        }),
        (e.eventListeners = {}),
        e
      );
    })();
    function ke(e) {
      return (
        (function () {
          if ("function" == typeof window.CustomEvent) return !1;
          window.CustomEvent = function (e, t) {
            t = t || { bubbles: !1, cancelable: !1, detail: null };
            var i = document.createEvent("CustomEvent");
            return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i;
          };
        })(),
        Element.prototype.matches ||
          (Element.prototype.matches =
            Element.prototype.msMatchesSelector ||
            Element.prototype.webkitMatchesSelector),
        new Pe(e)
      );
    }
    var Ae = [
      "src",
      "sources",
      "subHtml",
      "subHtmlUrl",
      "html",
      "video",
      "poster",
      "slideName",
      "responsive",
      "srcset",
      "sizes",
      "iframe",
      "downloadUrl",
      "download",
      "width",
      "facebookShareUrl",
      "tweetText",
      "iframeTitle",
      "twitterShareUrl",
      "pinterestShareUrl",
      "pinterestText",
      "fbHtml",
      "disqusIdentifier",
      "disqusUrl",
    ];
    function Oe(e) {
      return "href" === e
        ? "src"
        : (e = (e =
            (e = e.replace("data-", "")).charAt(0).toLowerCase() +
            e.slice(1)).replace(/-([a-z])/g, function (e) {
            return e[1].toUpperCase();
          }));
    }
    var ze = function (e, t, i, s) {
        void 0 === i && (i = 0);
        var n = ke(e).attr("data-lg-size") || s;
        if (n) {
          var r = n.split(",");
          if (r[1])
            for (var o = window.innerWidth, a = 0; a < r.length; a++) {
              var l = r[a];
              if (parseInt(l.split("-")[2], 10) > o) {
                n = l;
                break;
              }
              a === r.length - 1 && (n = l);
            }
          var d = n.split("-"),
            c = parseInt(d[0], 10),
            u = parseInt(d[1], 10),
            p = t.width(),
            h = t.height() - i,
            g = Math.min(p, c),
            m = Math.min(h, u),
            f = Math.min(g / c, m / u);
          return { width: c * f, height: u * f };
        }
      },
      De = function (e, t, i, s, n) {
        if (n) {
          var r = ke(e).find("img").first();
          if (r.get()) {
            var o = t.get().getBoundingClientRect(),
              a = o.width,
              l = t.height() - (i + s),
              d = r.width(),
              c = r.height(),
              u = r.style(),
              p =
                (a - d) / 2 -
                r.offset().left +
                (parseFloat(u.paddingLeft) || 0) +
                (parseFloat(u.borderLeft) || 0) +
                ke(window).scrollLeft() +
                o.left,
              h =
                (l - c) / 2 -
                r.offset().top +
                (parseFloat(u.paddingTop) || 0) +
                (parseFloat(u.borderTop) || 0) +
                ke(window).scrollTop() +
                i;
            return (
              "translate3d(" +
              (p *= -1) +
              "px, " +
              (h *= -1) +
              "px, 0) scale3d(" +
              d / n.width +
              ", " +
              c / n.height +
              ", 1)"
            );
          }
        }
      },
      Ge = function (e, t, i, s, n, r) {
        return (
          '<div class="lg-video-cont lg-has-iframe" style="width:' +
          e +
          "; max-width:" +
          i +
          "; height: " +
          t +
          "; max-height:" +
          s +
          '">\n                    <iframe class="lg-object" frameborder="0" ' +
          (r ? 'title="' + r + '"' : "") +
          ' src="' +
          n +
          '"  allowfullscreen="true"></iframe>\n                </div>'
        );
      },
      Be = function (e, t, i, s, n, r) {
        var o =
            "<img " +
            i +
            " " +
            (s ? 'srcset="' + s + '"' : "") +
            "  " +
            (n ? 'sizes="' + n + '"' : "") +
            ' class="lg-object lg-image" data-index="' +
            e +
            '" src="' +
            t +
            '" />',
          a = "";
        r &&
          (a = ("string" == typeof r ? JSON.parse(r) : r).map(function (e) {
            var t = "";
            return (
              Object.keys(e).forEach(function (i) {
                t += " " + i + '="' + e[i] + '"';
              }),
              "<source " + t + "></source>"
            );
          }));
        return "" + a + o;
      },
      Fe = function (e) {
        for (var t = [], i = [], s = "", n = 0; n < e.length; n++) {
          var r = e[n].split(" ");
          "" === r[0] && r.splice(0, 1), i.push(r[0]), t.push(r[1]);
        }
        for (var o = window.innerWidth, a = 0; a < t.length; a++)
          if (parseInt(t[a], 10) > o) {
            s = i[a];
            break;
          }
        return s;
      },
      Ne = function (e) {
        return !!e && !!e.complete && 0 !== e.naturalWidth;
      },
      Ve = function (e, t, i, s, n) {
        return (
          '<div class="lg-video-cont ' +
          (n && n.youtube
            ? "lg-has-youtube"
            : n && n.vimeo
            ? "lg-has-vimeo"
            : "lg-has-html5") +
          '" style="' +
          i +
          '">\n                <div class="lg-video-play-button">\n                <svg\n                    viewBox="0 0 20 20"\n                    preserveAspectRatio="xMidYMid"\n                    focusable="false"\n                    aria-labelledby="' +
          s +
          '"\n                    role="img"\n                    class="lg-video-play-icon"\n                >\n                    <title>' +
          s +
          '</title>\n                    <polygon class="lg-video-play-icon-inner" points="1,0 20,10 1,20"></polygon>\n                </svg>\n                <svg class="lg-video-play-icon-bg" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle></svg>\n                <svg class="lg-video-play-icon-circle" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle>\n                </svg>\n            </div>\n            ' +
          (t || "") +
          '\n            <img class="lg-object lg-video-poster" src="' +
          e +
          '" />\n        </div>'
        );
      },
      He = function (e) {
        var t = e.querySelectorAll(
          'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])',
        );
        return [].filter.call(t, function (e) {
          var t = window.getComputedStyle(e);
          return "none" !== t.display && "hidden" !== t.visibility;
        });
      },
      $e = function (e, t, i, s) {
        var n = [],
          r = (function () {
            for (var e = 0, t = 0, i = arguments.length; t < i; t++)
              e += arguments[t].length;
            var s = Array(e),
              n = 0;
            for (t = 0; t < i; t++)
              for (var r = arguments[t], o = 0, a = r.length; o < a; o++, n++)
                s[n] = r[o];
            return s;
          })(Ae, t);
        return (
          [].forEach.call(e, function (e) {
            for (var t = {}, o = 0; o < e.attributes.length; o++) {
              var a = e.attributes[o];
              if (a.specified) {
                var l = Oe(a.name),
                  d = "";
                r.indexOf(l) > -1 && (d = l), d && (t[d] = a.value);
              }
            }
            var c = ke(e),
              u = c.find("img").first().attr("alt"),
              p = c.attr("title"),
              h = s ? c.attr(s) : c.find("img").first().attr("src");
            (t.thumb = h),
              i && !t.subHtml && (t.subHtml = p || u || ""),
              (t.alt = u || p || ""),
              n.push(t);
          }),
          n
        );
      },
      je = function () {
        return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      },
      Re = function (e, t, i) {
        if (!e)
          return t
            ? { html5: !0 }
            : void console.error(
                "lightGallery :- data-src is not provided on slide item " +
                  (i + 1) +
                  ". Please make sure the selector property is properly configured. More info - https://www.lightgalleryjs.com/demos/html-markup/",
              );
        var s = e.match(
            /\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)([\&|?][\S]*)*/i,
          ),
          n = e.match(
            /\/\/(?:www\.)?(?:player\.)?vimeo.com\/(?:video\/)?([0-9a-z\-_]+)(.*)?/i,
          ),
          r = e.match(
            /https?:\/\/(.+)?(wistia\.com|wi\.st)\/(medias|embed)\/([0-9a-z\-_]+)(.*)/,
          );
        return s
          ? { youtube: s }
          : n
          ? { vimeo: n }
          : r
          ? { wistia: r }
          : void 0;
      },
      qe = 0,
      We = (function () {
        function e(e, t) {
          if (
            ((this.lgOpened = !1),
            (this.index = 0),
            (this.plugins = []),
            (this.lGalleryOn = !1),
            (this.lgBusy = !1),
            (this.currentItemsInDom = []),
            (this.prevScrollTop = 0),
            (this.bodyPaddingRight = 0),
            (this.isDummyImageRemoved = !1),
            (this.dragOrSwipeEnabled = !1),
            (this.mediaContainerPosition = { top: 0, bottom: 0 }),
            !e)
          )
            return this;
          if (
            (qe++,
            (this.lgId = qe),
            (this.el = e),
            (this.LGel = ke(e)),
            this.generateSettings(t),
            this.buildModules(),
            this.settings.dynamic &&
              void 0 !== this.settings.dynamicEl &&
              !Array.isArray(this.settings.dynamicEl))
          )
            throw "When using dynamic mode, you must also define dynamicEl as an Array.";
          return (
            (this.galleryItems = this.getItems()),
            this.normalizeSettings(),
            this.init(),
            this.validateLicense(),
            this
          );
        }
        return (
          (e.prototype.generateSettings = function (e) {
            if (
              ((this.settings = de(de({}, _e), e)),
              this.settings.isMobile &&
              "function" == typeof this.settings.isMobile
                ? this.settings.isMobile()
                : je())
            ) {
              var t = de(
                de({}, this.settings.mobileSettings),
                this.settings.mobileSettings,
              );
              this.settings = de(de({}, this.settings), t);
            }
          }),
          (e.prototype.normalizeSettings = function () {
            this.settings.slideEndAnimation &&
              (this.settings.hideControlOnEnd = !1),
              this.settings.closable || (this.settings.swipeToClose = !1),
              (this.zoomFromOrigin = this.settings.zoomFromOrigin),
              this.settings.dynamic && (this.zoomFromOrigin = !1),
              this.settings.container ||
                (this.settings.container = document.body),
              (this.settings.preload = Math.min(
                this.settings.preload,
                this.galleryItems.length,
              ));
          }),
          (e.prototype.init = function () {
            var e = this;
            this.addSlideVideoInfo(this.galleryItems),
              this.buildStructure(),
              this.LGel.trigger(ue, { instance: this }),
              this.settings.keyPress && this.keyPress(),
              setTimeout(function () {
                e.enableDrag(), e.enableSwipe(), e.triggerPosterClick();
              }, 50),
              this.arrow(),
              this.settings.mousewheel && this.mousewheel(),
              this.settings.dynamic || this.openGalleryOnItemClick();
          }),
          (e.prototype.openGalleryOnItemClick = function () {
            for (
              var e = this,
                t = function (t) {
                  var s = i.items[t],
                    n = ke(s),
                    r = Pe.generateUUID();
                  n.attr("data-lg-id", r).on(
                    "click.lgcustom-item-" + r,
                    function (i) {
                      i.preventDefault();
                      var n = e.settings.index || t;
                      e.openGallery(n, s);
                    },
                  );
                },
                i = this,
                s = 0;
              s < this.items.length;
              s++
            )
              t(s);
          }),
          (e.prototype.buildModules = function () {
            var e = this;
            this.settings.plugins.forEach(function (t) {
              e.plugins.push(new t(e, ke));
            });
          }),
          (e.prototype.validateLicense = function () {
            this.settings.licenseKey
              ? "0000-0000-000-0000" === this.settings.licenseKey &&
                console.warn(
                  "lightGallery: " +
                    this.settings.licenseKey +
                    " license key is not valid for production use",
                )
              : console.error("Please provide a valid license key");
          }),
          (e.prototype.getSlideItem = function (e) {
            return ke(this.getSlideItemId(e));
          }),
          (e.prototype.getSlideItemId = function (e) {
            return "#lg-item-" + this.lgId + "-" + e;
          }),
          (e.prototype.getIdName = function (e) {
            return e + "-" + this.lgId;
          }),
          (e.prototype.getElementById = function (e) {
            return ke("#" + this.getIdName(e));
          }),
          (e.prototype.manageSingleSlideClassName = function () {
            this.galleryItems.length < 2
              ? this.outer.addClass("lg-single-item")
              : this.outer.removeClass("lg-single-item");
          }),
          (e.prototype.buildStructure = function () {
            var e = this;
            if (!(this.$container && this.$container.get())) {
              var t = "",
                i = "";
              this.settings.controls &&
                (t =
                  '<button type="button" id="' +
                  this.getIdName("lg-prev") +
                  '" aria-label="' +
                  this.settings.strings.previousSlide +
                  '" class="lg-prev lg-icon"> ' +
                  this.settings.prevHtml +
                  ' </button>\n                <button type="button" id="' +
                  this.getIdName("lg-next") +
                  '" aria-label="' +
                  this.settings.strings.nextSlide +
                  '" class="lg-next lg-icon"> ' +
                  this.settings.nextHtml +
                  " </button>"),
                ".lg-item" !== this.settings.appendSubHtmlTo &&
                  (i =
                    '<div class="lg-sub-html" role="status" aria-live="polite"></div>');
              var s = "";
              this.settings.allowMediaOverlap && (s += "lg-media-overlap ");
              var n = this.settings.ariaLabelledby
                  ? 'aria-labelledby="' + this.settings.ariaLabelledby + '"'
                  : "",
                r = this.settings.ariaDescribedby
                  ? 'aria-describedby="' + this.settings.ariaDescribedby + '"'
                  : "",
                o =
                  "lg-container " +
                  this.settings.addClass +
                  " " +
                  (document.body !== this.settings.container
                    ? "lg-inline"
                    : ""),
                a =
                  this.settings.closable && this.settings.showCloseIcon
                    ? '<button type="button" aria-label="' +
                      this.settings.strings.closeGallery +
                      '" id="' +
                      this.getIdName("lg-close") +
                      '" class="lg-close lg-icon"></button>'
                    : "",
                l = this.settings.showMaximizeIcon
                  ? '<button type="button" aria-label="' +
                    this.settings.strings.toggleMaximize +
                    '" id="' +
                    this.getIdName("lg-maximize") +
                    '" class="lg-maximize lg-icon"></button>'
                  : "",
                d =
                  '\n        <div class="' +
                  o +
                  '" id="' +
                  this.getIdName("lg-container") +
                  '" tabindex="-1" aria-modal="true" ' +
                  n +
                  " " +
                  r +
                  ' role="dialog"\n        >\n            <div id="' +
                  this.getIdName("lg-backdrop") +
                  '" class="lg-backdrop"></div>\n\n            <div id="' +
                  this.getIdName("lg-outer") +
                  '" class="lg-outer lg-use-css3 lg-css3 lg-hide-items ' +
                  s +
                  ' ">\n\n              <div id="' +
                  this.getIdName("lg-content") +
                  '" class="lg-content">\n                <div id="' +
                  this.getIdName("lg-inner") +
                  '" class="lg-inner">\n                </div>\n                ' +
                  t +
                  '\n              </div>\n                <div id="' +
                  this.getIdName("lg-toolbar") +
                  '" class="lg-toolbar lg-group">\n                    ' +
                  l +
                  "\n                    " +
                  a +
                  "\n                    </div>\n                    " +
                  (".lg-outer" === this.settings.appendSubHtmlTo ? i : "") +
                  '\n                <div id="' +
                  this.getIdName("lg-components") +
                  '" class="lg-components">\n                    ' +
                  (".lg-sub-html" === this.settings.appendSubHtmlTo ? i : "") +
                  "\n                </div>\n            </div>\n        </div>\n        ";
              ke(this.settings.container).append(d),
                document.body !== this.settings.container &&
                  ke(this.settings.container).css("position", "relative"),
                (this.outer = this.getElementById("lg-outer")),
                (this.$lgComponents = this.getElementById("lg-components")),
                (this.$backdrop = this.getElementById("lg-backdrop")),
                (this.$container = this.getElementById("lg-container")),
                (this.$inner = this.getElementById("lg-inner")),
                (this.$content = this.getElementById("lg-content")),
                (this.$toolbar = this.getElementById("lg-toolbar")),
                this.$backdrop.css(
                  "transition-duration",
                  this.settings.backdropDuration + "ms",
                );
              var c = this.settings.mode + " ";
              this.manageSingleSlideClassName(),
                this.settings.enableDrag && (c += "lg-grab "),
                this.outer.addClass(c),
                this.$inner.css(
                  "transition-timing-function",
                  this.settings.easing,
                ),
                this.$inner.css(
                  "transition-duration",
                  this.settings.speed + "ms",
                ),
                this.settings.download &&
                  this.$toolbar.append(
                    '<a id="' +
                      this.getIdName("lg-download") +
                      '" target="_blank" rel="noopener" aria-label="' +
                      this.settings.strings.download +
                      '" download class="lg-download lg-icon"></a>',
                  ),
                this.counter(),
                ke(window).on(
                  "resize.lg.global" +
                    this.lgId +
                    " orientationchange.lg.global" +
                    this.lgId,
                  function () {
                    e.refreshOnResize();
                  },
                ),
                this.hideBars(),
                this.manageCloseGallery(),
                this.toggleMaximize(),
                this.initModules();
            }
          }),
          (e.prototype.refreshOnResize = function () {
            if (this.lgOpened) {
              var e = this.galleryItems[this.index].__slideVideoInfo;
              this.mediaContainerPosition = this.getMediaContainerPosition();
              var t = this.mediaContainerPosition,
                i = t.top,
                s = t.bottom;
              if (
                ((this.currentImageSize = ze(
                  this.items[this.index],
                  this.outer,
                  i + s,
                  e && this.settings.videoMaxSize,
                )),
                e && this.resizeVideoSlide(this.index, this.currentImageSize),
                this.zoomFromOrigin && !this.isDummyImageRemoved)
              ) {
                var n = this.getDummyImgStyles(this.currentImageSize);
                this.outer
                  .find(".lg-current .lg-dummy-img")
                  .first()
                  .attr("style", n);
              }
              this.LGel.trigger(he);
            }
          }),
          (e.prototype.resizeVideoSlide = function (e, t) {
            var i = this.getVideoContStyle(t);
            this.getSlideItem(e).find(".lg-video-cont").attr("style", i);
          }),
          (e.prototype.updateSlides = function (e, t) {
            if (
              (this.index > e.length - 1 && (this.index = e.length - 1),
              1 === e.length && (this.index = 0),
              e.length)
            ) {
              var i = this.galleryItems[t].src;
              (this.galleryItems = e),
                this.updateControls(),
                this.$inner.empty(),
                (this.currentItemsInDom = []);
              var s = 0;
              this.galleryItems.some(function (e, t) {
                return e.src === i && ((s = t), !0);
              }),
                (this.currentItemsInDom = this.organizeSlideItems(s, -1)),
                this.loadContent(s, !0),
                this.getSlideItem(s).addClass("lg-current"),
                (this.index = s),
                this.updateCurrentCounter(s),
                this.LGel.trigger(ge);
            } else this.closeGallery();
          }),
          (e.prototype.getItems = function () {
            if (((this.items = []), this.settings.dynamic))
              return this.settings.dynamicEl || [];
            if ("this" === this.settings.selector) this.items.push(this.el);
            else if (this.settings.selector)
              if ("string" == typeof this.settings.selector)
                if (this.settings.selectWithin) {
                  var e = ke(this.settings.selectWithin);
                  this.items = e.find(this.settings.selector).get();
                } else
                  this.items = this.el.querySelectorAll(this.settings.selector);
              else this.items = this.settings.selector;
            else this.items = this.el.children;
            return $e(
              this.items,
              this.settings.extraProps,
              this.settings.getCaptionFromTitleOrAlt,
              this.settings.exThumbImage,
            );
          }),
          (e.prototype.shouldHideScrollbar = function () {
            return (
              this.settings.hideScrollbar &&
              document.body === this.settings.container
            );
          }),
          (e.prototype.hideScrollbar = function () {
            if (this.shouldHideScrollbar()) {
              this.bodyPaddingRight = parseFloat(
                ke("body").style().paddingRight,
              );
              var e = document.documentElement.getBoundingClientRect(),
                t = window.innerWidth - e.width;
              ke(document.body).css(
                "padding-right",
                t + this.bodyPaddingRight + "px",
              ),
                ke(document.body).addClass("lg-overlay-open");
            }
          }),
          (e.prototype.resetScrollBar = function () {
            this.shouldHideScrollbar() &&
              (ke(document.body).css(
                "padding-right",
                this.bodyPaddingRight + "px",
              ),
              ke(document.body).removeClass("lg-overlay-open"));
          }),
          (e.prototype.openGallery = function (e, t) {
            var i = this;
            if ((void 0 === e && (e = this.settings.index), !this.lgOpened)) {
              (this.lgOpened = !0),
                this.outer.removeClass("lg-hide-items"),
                this.hideScrollbar(),
                this.$container.addClass("lg-show");
              var s = this.getItemsToBeInsertedToDom(e, e);
              this.currentItemsInDom = s;
              var n = "";
              s.forEach(function (e) {
                n = n + '<div id="' + e + '" class="lg-item"></div>';
              }),
                this.$inner.append(n),
                this.addHtml(e);
              var r = "";
              this.mediaContainerPosition = this.getMediaContainerPosition();
              var o = this.mediaContainerPosition,
                a = o.top,
                l = o.bottom;
              this.settings.allowMediaOverlap ||
                this.setMediaContainerPosition(a, l);
              var d = this.galleryItems[e].__slideVideoInfo;
              this.zoomFromOrigin &&
                t &&
                ((this.currentImageSize = ze(
                  t,
                  this.outer,
                  a + l,
                  d && this.settings.videoMaxSize,
                )),
                (r = De(t, this.outer, a, l, this.currentImageSize))),
                (this.zoomFromOrigin && r) ||
                  (this.outer.addClass(this.settings.startClass),
                  this.getSlideItem(e).removeClass("lg-complete"));
              var c = this.settings.zoomFromOrigin
                ? 100
                : this.settings.backdropDuration;
              setTimeout(function () {
                i.outer.addClass("lg-components-open");
              }, c),
                (this.index = e),
                this.LGel.trigger(fe),
                this.getSlideItem(e).addClass("lg-current"),
                (this.lGalleryOn = !1),
                (this.prevScrollTop = ke(window).scrollTop()),
                setTimeout(function () {
                  if (i.zoomFromOrigin && r) {
                    var t = i.getSlideItem(e);
                    t.css("transform", r),
                      setTimeout(function () {
                        t
                          .addClass("lg-start-progress lg-start-end-progress")
                          .css(
                            "transition-duration",
                            i.settings.startAnimationDuration + "ms",
                          ),
                          i.outer.addClass("lg-zoom-from-image");
                      }),
                      setTimeout(function () {
                        t.css("transform", "translate3d(0, 0, 0)");
                      }, 100);
                  }
                  setTimeout(function () {
                    i.$backdrop.addClass("in"),
                      i.$container.addClass("lg-show-in");
                  }, 10),
                    setTimeout(function () {
                      i.settings.trapFocus &&
                        document.body === i.settings.container &&
                        i.trapFocus();
                    }, i.settings.backdropDuration + 50),
                    (i.zoomFromOrigin && r) ||
                      setTimeout(function () {
                        i.outer.addClass("lg-visible");
                      }, i.settings.backdropDuration),
                    i.slide(e, !1, !1, !1),
                    i.LGel.trigger(ve);
                }),
                document.body === this.settings.container &&
                  ke("html").addClass("lg-on");
            }
          }),
          (e.prototype.getMediaContainerPosition = function () {
            if (this.settings.allowMediaOverlap) return { top: 0, bottom: 0 };
            var e = this.$toolbar.get().clientHeight || 0,
              t = this.outer.find(".lg-components .lg-sub-html").get(),
              i =
                this.settings.defaultCaptionHeight ||
                (t && t.clientHeight) ||
                0,
              s = this.outer.find(".lg-thumb-outer").get();
            return { top: e, bottom: (s ? s.clientHeight : 0) + i };
          }),
          (e.prototype.setMediaContainerPosition = function (e, t) {
            void 0 === e && (e = 0),
              void 0 === t && (t = 0),
              this.$content.css("top", e + "px").css("bottom", t + "px");
          }),
          (e.prototype.hideBars = function () {
            var e = this;
            setTimeout(function () {
              e.outer.removeClass("lg-hide-items"),
                e.settings.hideBarsDelay > 0 &&
                  (e.outer.on(
                    "mousemove.lg click.lg touchstart.lg",
                    function () {
                      e.outer.removeClass("lg-hide-items"),
                        clearTimeout(e.hideBarTimeout),
                        (e.hideBarTimeout = setTimeout(function () {
                          e.outer.addClass("lg-hide-items");
                        }, e.settings.hideBarsDelay));
                    },
                  ),
                  e.outer.trigger("mousemove.lg"));
            }, this.settings.showBarsAfter);
          }),
          (e.prototype.initPictureFill = function (e) {
            if (this.settings.supportLegacyBrowser)
              try {
                picturefill({ elements: [e.get()] });
              } catch (e) {
                console.warn(
                  "lightGallery :- If you want srcset or picture tag to be supported for older browser please include picturefil javascript library in your document.",
                );
              }
          }),
          (e.prototype.counter = function () {
            if (this.settings.counter) {
              var e =
                '<div class="lg-counter" role="status" aria-live="polite">\n                <span id="' +
                this.getIdName("lg-counter-current") +
                '" class="lg-counter-current">' +
                (this.index + 1) +
                ' </span> /\n                <span id="' +
                this.getIdName("lg-counter-all") +
                '" class="lg-counter-all">' +
                this.galleryItems.length +
                " </span></div>";
              this.outer.find(this.settings.appendCounterTo).append(e);
            }
          }),
          (e.prototype.addHtml = function (e) {
            var t, i;
            if (
              (this.galleryItems[e].subHtmlUrl
                ? (i = this.galleryItems[e].subHtmlUrl)
                : (t = this.galleryItems[e].subHtml),
              !i)
            )
              if (t) {
                var s = t.substring(0, 1);
                ("." !== s && "#" !== s) ||
                  (t =
                    this.settings.subHtmlSelectorRelative &&
                    !this.settings.dynamic
                      ? ke(this.items).eq(e).find(t).first().html()
                      : ke(t).first().html());
              } else t = "";
            if (".lg-item" !== this.settings.appendSubHtmlTo)
              i
                ? this.outer.find(".lg-sub-html").load(i)
                : this.outer.find(".lg-sub-html").html(t);
            else {
              var n = ke(this.getSlideItemId(e));
              i
                ? n.load(i)
                : n.append('<div class="lg-sub-html">' + t + "</div>");
            }
            null != t &&
              ("" === t
                ? this.outer
                    .find(this.settings.appendSubHtmlTo)
                    .addClass("lg-empty-html")
                : this.outer
                    .find(this.settings.appendSubHtmlTo)
                    .removeClass("lg-empty-html")),
              this.LGel.trigger(me, { index: e });
          }),
          (e.prototype.preload = function (e) {
            for (
              var t = 1;
              t <= this.settings.preload &&
              !(t >= this.galleryItems.length - e);
              t++
            )
              this.loadContent(e + t, !1);
            for (var i = 1; i <= this.settings.preload && !(e - i < 0); i++)
              this.loadContent(e - i, !1);
          }),
          (e.prototype.getDummyImgStyles = function (e) {
            return e
              ? "width:" +
                  e.width +
                  "px;\n                margin-left: -" +
                  e.width / 2 +
                  "px;\n                margin-top: -" +
                  e.height / 2 +
                  "px;\n                height:" +
                  e.height +
                  "px"
              : "";
          }),
          (e.prototype.getVideoContStyle = function (e) {
            return e
              ? "width:" +
                  e.width +
                  "px;\n                height:" +
                  e.height +
                  "px"
              : "";
          }),
          (e.prototype.getDummyImageContent = function (e, t, i) {
            var s;
            if ((this.settings.dynamic || (s = ke(this.items).eq(t)), s)) {
              var n = void 0;
              if (
                !(n = this.settings.exThumbImage
                  ? s.attr(this.settings.exThumbImage)
                  : s.find("img").first().attr("src"))
              )
                return "";
              var r =
                "<img " +
                i +
                ' style="' +
                this.getDummyImgStyles(this.currentImageSize) +
                '" class="lg-dummy-img" src="' +
                n +
                '" />';
              return (
                e.addClass("lg-first-slide"),
                this.outer.addClass("lg-first-slide-loading"),
                r
              );
            }
            return "";
          }),
          (e.prototype.setImgMarkup = function (e, t, i) {
            var s = this.galleryItems[i],
              n = s.alt,
              r = s.srcset,
              o = s.sizes,
              a = s.sources,
              l = n ? 'alt="' + n + '"' : "",
              d =
                '<picture class="lg-img-wrap"> ' +
                (this.isFirstSlideWithZoomAnimation()
                  ? this.getDummyImageContent(t, i, l)
                  : Be(i, e, l, r, o, a)) +
                "</picture>";
            t.prepend(d);
          }),
          (e.prototype.onSlideObjectLoad = function (e, t, i, s) {
            var n = e.find(".lg-object").first();
            Ne(n.get()) || t
              ? i()
              : (n.on("load.lg error.lg", function () {
                  i && i();
                }),
                n.on("error.lg", function () {
                  s && s();
                }));
          }),
          (e.prototype.onLgObjectLoad = function (e, t, i, s, n, r) {
            var o = this;
            this.onSlideObjectLoad(
              e,
              r,
              function () {
                o.triggerSlideItemLoad(e, t, i, s, n);
              },
              function () {
                e.addClass("lg-complete lg-complete_"),
                  e.html(
                    '<span class="lg-error-msg">Oops... Failed to load content...</span>',
                  );
              },
            );
          }),
          (e.prototype.triggerSlideItemLoad = function (e, t, i, s, n) {
            var r = this,
              o = this.galleryItems[t],
              a = n && "video" === this.getSlideType(o) && !o.poster ? s : 0;
            setTimeout(function () {
              e.addClass("lg-complete lg-complete_"),
                r.LGel.trigger(ye, {
                  index: t,
                  delay: i || 0,
                  isFirstSlide: n,
                });
            }, a);
          }),
          (e.prototype.isFirstSlideWithZoomAnimation = function () {
            return !(
              this.lGalleryOn ||
              !this.zoomFromOrigin ||
              !this.currentImageSize
            );
          }),
          (e.prototype.addSlideVideoInfo = function (e) {
            var t = this;
            e.forEach(function (e, i) {
              (e.__slideVideoInfo = Re(e.src, !!e.video, i)),
                e.__slideVideoInfo &&
                  t.settings.loadYouTubePoster &&
                  !e.poster &&
                  e.__slideVideoInfo.youtube &&
                  (e.poster =
                    "//img.youtube.com/vi/" +
                    e.__slideVideoInfo.youtube[1] +
                    "/maxresdefault.jpg");
            });
          }),
          (e.prototype.loadContent = function (e, t) {
            var i = this,
              s = this.galleryItems[e],
              n = ke(this.getSlideItemId(e)),
              r = s.poster,
              o = s.srcset,
              a = s.sizes,
              l = s.sources,
              d = s.src,
              c = s.video,
              u = c && "string" == typeof c ? JSON.parse(c) : c;
            if (s.responsive) {
              var p = s.responsive.split(",");
              d = Fe(p) || d;
            }
            var h = s.__slideVideoInfo,
              g = "",
              m = !!s.iframe,
              f = !this.lGalleryOn,
              v = 0;
            if (
              (f &&
                (v =
                  this.zoomFromOrigin && this.currentImageSize
                    ? this.settings.startAnimationDuration + 10
                    : this.settings.backdropDuration + 10),
              !n.hasClass("lg-loaded"))
            ) {
              if (h) {
                var y = this.mediaContainerPosition,
                  b = y.top,
                  w = y.bottom,
                  S = ze(
                    this.items[e],
                    this.outer,
                    b + w,
                    h && this.settings.videoMaxSize,
                  );
                g = this.getVideoContStyle(S);
              }
              if (m) {
                var T = Ge(
                  this.settings.iframeWidth,
                  this.settings.iframeHeight,
                  this.settings.iframeMaxWidth,
                  this.settings.iframeMaxHeight,
                  d,
                  s.iframeTitle,
                );
                n.prepend(T);
              } else if (r) {
                var x = "";
                f &&
                  this.zoomFromOrigin &&
                  this.currentImageSize &&
                  (x = this.getDummyImageContent(n, e, ""));
                T = Ve(r, x || "", g, this.settings.strings.playVideo, h);
                n.prepend(T);
              } else if (h) {
                T = '<div class="lg-video-cont " style="' + g + '"></div>';
                n.prepend(T);
              } else if ((this.setImgMarkup(d, n, e), o || l)) {
                var E = n.find(".lg-object");
                this.initPictureFill(E);
              }
              (r || h) &&
                this.LGel.trigger(pe, {
                  index: e,
                  src: d,
                  html5Video: u,
                  hasPoster: !!r,
                }),
                this.LGel.trigger(ce, { index: e }),
                this.lGalleryOn &&
                  ".lg-item" === this.settings.appendSubHtmlTo &&
                  this.addHtml(e);
            }
            var C = 0;
            v && !ke(document.body).hasClass("lg-from-hash") && (C = v),
              this.isFirstSlideWithZoomAnimation() &&
                (setTimeout(function () {
                  n.removeClass(
                    "lg-start-end-progress lg-start-progress",
                  ).removeAttr("style");
                }, this.settings.startAnimationDuration + 100),
                n.hasClass("lg-loaded") ||
                  setTimeout(function () {
                    if ("image" === i.getSlideType(s)) {
                      var t = s.alt,
                        c = t ? 'alt="' + t + '"' : "";
                      if (
                        (n
                          .find(".lg-img-wrap")
                          .append(Be(e, d, c, o, a, s.sources)),
                        o || l)
                      ) {
                        var u = n.find(".lg-object");
                        i.initPictureFill(u);
                      }
                    }
                    ("image" === i.getSlideType(s) ||
                      ("video" === i.getSlideType(s) && r)) &&
                      (i.onLgObjectLoad(n, e, v, C, !0, !1),
                      i.onSlideObjectLoad(
                        n,
                        !(!h || !h.html5 || r),
                        function () {
                          i.loadContentOnFirstSlideLoad(e, n, C);
                        },
                        function () {
                          i.loadContentOnFirstSlideLoad(e, n, C);
                        },
                      ));
                  }, this.settings.startAnimationDuration + 100)),
              n.addClass("lg-loaded"),
              (this.isFirstSlideWithZoomAnimation() &&
                ("video" !== this.getSlideType(s) || r)) ||
                this.onLgObjectLoad(n, e, v, C, f, !(!h || !h.html5 || r)),
              (this.zoomFromOrigin && this.currentImageSize) ||
                !n.hasClass("lg-complete_") ||
                this.lGalleryOn ||
                setTimeout(function () {
                  n.addClass("lg-complete");
                }, this.settings.backdropDuration),
              (this.lGalleryOn = !0),
              !0 === t &&
                (n.hasClass("lg-complete_")
                  ? this.preload(e)
                  : n
                      .find(".lg-object")
                      .first()
                      .on("load.lg error.lg", function () {
                        i.preload(e);
                      }));
          }),
          (e.prototype.loadContentOnFirstSlideLoad = function (e, t, i) {
            var s = this;
            setTimeout(function () {
              t.find(".lg-dummy-img").remove(),
                t.removeClass("lg-first-slide"),
                s.outer.removeClass("lg-first-slide-loading"),
                (s.isDummyImageRemoved = !0),
                s.preload(e);
            }, i + 300);
          }),
          (e.prototype.getItemsToBeInsertedToDom = function (e, t, i) {
            var s = this;
            void 0 === i && (i = 0);
            var n = [],
              r = Math.max(i, 3);
            r = Math.min(r, this.galleryItems.length);
            var o = "lg-item-" + this.lgId + "-" + t;
            if (this.galleryItems.length <= 3)
              return (
                this.galleryItems.forEach(function (e, t) {
                  n.push("lg-item-" + s.lgId + "-" + t);
                }),
                n
              );
            if (e < (this.galleryItems.length - 1) / 2) {
              for (var a = e; a > e - r / 2 && a >= 0; a--)
                n.push("lg-item-" + this.lgId + "-" + a);
              var l = n.length;
              for (a = 0; a < r - l; a++)
                n.push("lg-item-" + this.lgId + "-" + (e + a + 1));
            } else {
              for (
                a = e;
                a <= this.galleryItems.length - 1 && a < e + r / 2;
                a++
              )
                n.push("lg-item-" + this.lgId + "-" + a);
              for (l = n.length, a = 0; a < r - l; a++)
                n.push("lg-item-" + this.lgId + "-" + (e - a - 1));
            }
            return (
              this.settings.loop &&
                (e === this.galleryItems.length - 1
                  ? n.push("lg-item-" + this.lgId + "-0")
                  : 0 === e &&
                    n.push(
                      "lg-item-" +
                        this.lgId +
                        "-" +
                        (this.galleryItems.length - 1),
                    )),
              -1 === n.indexOf(o) && n.push("lg-item-" + this.lgId + "-" + t),
              n
            );
          }),
          (e.prototype.organizeSlideItems = function (e, t) {
            var i = this,
              s = this.getItemsToBeInsertedToDom(
                e,
                t,
                this.settings.numberOfSlideItemsInDom,
              );
            return (
              s.forEach(function (e) {
                -1 === i.currentItemsInDom.indexOf(e) &&
                  i.$inner.append('<div id="' + e + '" class="lg-item"></div>');
              }),
              this.currentItemsInDom.forEach(function (e) {
                -1 === s.indexOf(e) && ke("#" + e).remove();
              }),
              s
            );
          }),
          (e.prototype.getPreviousSlideIndex = function () {
            var e = 0;
            try {
              var t = this.outer.find(".lg-current").first().attr("id");
              e = parseInt(t.split("-")[3]) || 0;
            } catch (t) {
              e = 0;
            }
            return e;
          }),
          (e.prototype.setDownloadValue = function (e) {
            if (this.settings.download) {
              var t = this.galleryItems[e];
              if (!1 === t.downloadUrl || "false" === t.downloadUrl)
                this.outer.addClass("lg-hide-download");
              else {
                var i = this.getElementById("lg-download");
                this.outer.removeClass("lg-hide-download"),
                  i.attr("href", t.downloadUrl || t.src),
                  t.download && i.attr("download", t.download);
              }
            }
          }),
          (e.prototype.makeSlideAnimation = function (e, t, i) {
            var s = this;
            this.lGalleryOn && i.addClass("lg-slide-progress"),
              setTimeout(
                function () {
                  s.outer.addClass("lg-no-trans"),
                    s.outer
                      .find(".lg-item")
                      .removeClass("lg-prev-slide lg-next-slide"),
                    "prev" === e
                      ? (t.addClass("lg-prev-slide"),
                        i.addClass("lg-next-slide"))
                      : (t.addClass("lg-next-slide"),
                        i.addClass("lg-prev-slide")),
                    setTimeout(function () {
                      s.outer.find(".lg-item").removeClass("lg-current"),
                        t.addClass("lg-current"),
                        s.outer.removeClass("lg-no-trans");
                    }, 50);
                },
                this.lGalleryOn ? this.settings.slideDelay : 0,
              );
          }),
          (e.prototype.slide = function (e, t, i, s) {
            var n = this,
              r = this.getPreviousSlideIndex();
            if (
              ((this.currentItemsInDom = this.organizeSlideItems(e, r)),
              !this.lGalleryOn || r !== e)
            ) {
              var o = this.galleryItems.length;
              if (!this.lgBusy) {
                this.settings.counter && this.updateCurrentCounter(e);
                var a = this.getSlideItem(e),
                  l = this.getSlideItem(r),
                  d = this.galleryItems[e],
                  c = d.__slideVideoInfo;
                if (
                  (this.outer.attr("data-lg-slide-type", this.getSlideType(d)),
                  this.setDownloadValue(e),
                  c)
                ) {
                  var u = this.mediaContainerPosition,
                    p = u.top,
                    h = u.bottom,
                    g = ze(
                      this.items[e],
                      this.outer,
                      p + h,
                      c && this.settings.videoMaxSize,
                    );
                  this.resizeVideoSlide(e, g);
                }
                if (
                  (this.LGel.trigger(be, {
                    prevIndex: r,
                    index: e,
                    fromTouch: !!t,
                    fromThumb: !!i,
                  }),
                  (this.lgBusy = !0),
                  clearTimeout(this.hideBarTimeout),
                  this.arrowDisable(e),
                  s || (e < r ? (s = "prev") : e > r && (s = "next")),
                  t)
                ) {
                  this.outer
                    .find(".lg-item")
                    .removeClass("lg-prev-slide lg-current lg-next-slide");
                  var m = void 0,
                    f = void 0;
                  o > 2
                    ? ((m = e - 1),
                      (f = e + 1),
                      ((0 === e && r === o - 1) || (e === o - 1 && 0 === r)) &&
                        ((f = 0), (m = o - 1)))
                    : ((m = 0), (f = 1)),
                    "prev" === s
                      ? this.getSlideItem(f).addClass("lg-next-slide")
                      : this.getSlideItem(m).addClass("lg-prev-slide"),
                    a.addClass("lg-current");
                } else this.makeSlideAnimation(s, a, l);
                this.lGalleryOn
                  ? setTimeout(
                      function () {
                        n.loadContent(e, !0),
                          ".lg-item" !== n.settings.appendSubHtmlTo &&
                            n.addHtml(e);
                      },
                      this.settings.speed +
                        50 +
                        (t ? 0 : this.settings.slideDelay),
                    )
                  : this.loadContent(e, !0),
                  setTimeout(
                    function () {
                      (n.lgBusy = !1),
                        l.removeClass("lg-slide-progress"),
                        n.LGel.trigger(we, {
                          prevIndex: r,
                          index: e,
                          fromTouch: t,
                          fromThumb: i,
                        });
                    },
                    (this.lGalleryOn ? this.settings.speed + 100 : 100) +
                      (t ? 0 : this.settings.slideDelay),
                  );
              }
              this.index = e;
            }
          }),
          (e.prototype.updateCurrentCounter = function (e) {
            this.getElementById("lg-counter-current").html(e + 1 + "");
          }),
          (e.prototype.updateCounterTotal = function () {
            this.getElementById("lg-counter-all").html(
              this.galleryItems.length + "",
            );
          }),
          (e.prototype.getSlideType = function (e) {
            return e.__slideVideoInfo ? "video" : e.iframe ? "iframe" : "image";
          }),
          (e.prototype.touchMove = function (e, t, i) {
            var s = t.pageX - e.pageX,
              n = t.pageY - e.pageY,
              r = !1;
            if (
              (this.swipeDirection
                ? (r = !0)
                : Math.abs(s) > 15
                ? ((this.swipeDirection = "horizontal"), (r = !0))
                : Math.abs(n) > 15 &&
                  ((this.swipeDirection = "vertical"), (r = !0)),
              r)
            ) {
              var o = this.getSlideItem(this.index);
              if ("horizontal" === this.swipeDirection) {
                null == i || i.preventDefault(),
                  this.outer.addClass("lg-dragging"),
                  this.setTranslate(o, s, 0);
                var a = o.get().offsetWidth,
                  l = (15 * a) / 100 - Math.abs((10 * s) / 100);
                this.setTranslate(
                  this.outer.find(".lg-prev-slide").first(),
                  -a + s - l,
                  0,
                ),
                  this.setTranslate(
                    this.outer.find(".lg-next-slide").first(),
                    a + s + l,
                    0,
                  );
              } else if (
                "vertical" === this.swipeDirection &&
                this.settings.swipeToClose
              ) {
                null == i || i.preventDefault(),
                  this.$container.addClass("lg-dragging-vertical");
                var d = 1 - Math.abs(n) / window.innerHeight;
                this.$backdrop.css("opacity", d);
                var c = 1 - Math.abs(n) / (2 * window.innerWidth);
                this.setTranslate(o, 0, n, c, c),
                  Math.abs(n) > 100 &&
                    this.outer
                      .addClass("lg-hide-items")
                      .removeClass("lg-components-open");
              }
            }
          }),
          (e.prototype.touchEnd = function (e, t, i) {
            var s,
              n = this;
            "lg-slide" !== this.settings.mode &&
              this.outer.addClass("lg-slide"),
              setTimeout(function () {
                n.$container.removeClass("lg-dragging-vertical"),
                  n.outer
                    .removeClass("lg-dragging lg-hide-items")
                    .addClass("lg-components-open");
                var r = !0;
                if ("horizontal" === n.swipeDirection) {
                  s = e.pageX - t.pageX;
                  var o = Math.abs(e.pageX - t.pageX);
                  s < 0 && o > n.settings.swipeThreshold
                    ? (n.goToNextSlide(!0), (r = !1))
                    : s > 0 &&
                      o > n.settings.swipeThreshold &&
                      (n.goToPrevSlide(!0), (r = !1));
                } else if ("vertical" === n.swipeDirection) {
                  if (
                    ((s = Math.abs(e.pageY - t.pageY)),
                    n.settings.closable && n.settings.swipeToClose && s > 100)
                  )
                    return void n.closeGallery();
                  n.$backdrop.css("opacity", 1);
                }
                if (
                  (n.outer.find(".lg-item").removeAttr("style"),
                  r && Math.abs(e.pageX - t.pageX) < 5)
                ) {
                  var a = ke(i.target);
                  n.isPosterElement(a) && n.LGel.trigger(Se);
                }
                n.swipeDirection = void 0;
              }),
              setTimeout(function () {
                n.outer.hasClass("lg-dragging") ||
                  "lg-slide" === n.settings.mode ||
                  n.outer.removeClass("lg-slide");
              }, this.settings.speed + 100);
          }),
          (e.prototype.enableSwipe = function () {
            var e = this,
              t = {},
              i = {},
              s = !1,
              n = !1;
            this.settings.enableSwipe &&
              (this.$inner.on("touchstart.lg", function (i) {
                e.dragOrSwipeEnabled = !0;
                var s = e.getSlideItem(e.index);
                (!ke(i.target).hasClass("lg-item") &&
                  !s.get().contains(i.target)) ||
                  e.outer.hasClass("lg-zoomed") ||
                  e.lgBusy ||
                  1 !== i.touches.length ||
                  ((n = !0),
                  (e.touchAction = "swipe"),
                  e.manageSwipeClass(),
                  (t = {
                    pageX: i.touches[0].pageX,
                    pageY: i.touches[0].pageY,
                  }));
              }),
              this.$inner.on("touchmove.lg", function (r) {
                n &&
                  "swipe" === e.touchAction &&
                  1 === r.touches.length &&
                  ((i = {
                    pageX: r.touches[0].pageX,
                    pageY: r.touches[0].pageY,
                  }),
                  e.touchMove(t, i, r),
                  (s = !0));
              }),
              this.$inner.on("touchend.lg", function (r) {
                if ("swipe" === e.touchAction) {
                  if (s) (s = !1), e.touchEnd(i, t, r);
                  else if (n) {
                    var o = ke(r.target);
                    e.isPosterElement(o) && e.LGel.trigger(Se);
                  }
                  (e.touchAction = void 0), (n = !1);
                }
              }));
          }),
          (e.prototype.enableDrag = function () {
            var e = this,
              t = {},
              i = {},
              s = !1,
              n = !1;
            this.settings.enableDrag &&
              (this.outer.on("mousedown.lg", function (i) {
                e.dragOrSwipeEnabled = !0;
                var n = e.getSlideItem(e.index);
                (ke(i.target).hasClass("lg-item") ||
                  n.get().contains(i.target)) &&
                  (e.outer.hasClass("lg-zoomed") ||
                    e.lgBusy ||
                    (i.preventDefault(),
                    e.lgBusy ||
                      (e.manageSwipeClass(),
                      (t = { pageX: i.pageX, pageY: i.pageY }),
                      (s = !0),
                      (e.outer.get().scrollLeft += 1),
                      (e.outer.get().scrollLeft -= 1),
                      e.outer.removeClass("lg-grab").addClass("lg-grabbing"),
                      e.LGel.trigger(Te))));
              }),
              ke(window).on("mousemove.lg.global" + this.lgId, function (r) {
                s &&
                  e.lgOpened &&
                  ((n = !0),
                  (i = { pageX: r.pageX, pageY: r.pageY }),
                  e.touchMove(t, i),
                  e.LGel.trigger(xe));
              }),
              ke(window).on("mouseup.lg.global" + this.lgId, function (r) {
                if (e.lgOpened) {
                  var o = ke(r.target);
                  n
                    ? ((n = !1), e.touchEnd(i, t, r), e.LGel.trigger(Ee))
                    : e.isPosterElement(o) && e.LGel.trigger(Se),
                    s &&
                      ((s = !1),
                      e.outer.removeClass("lg-grabbing").addClass("lg-grab"));
                }
              }));
          }),
          (e.prototype.triggerPosterClick = function () {
            var e = this;
            this.$inner.on("click.lg", function (t) {
              !e.dragOrSwipeEnabled &&
                e.isPosterElement(ke(t.target)) &&
                e.LGel.trigger(Se);
            });
          }),
          (e.prototype.manageSwipeClass = function () {
            var e = this.index + 1,
              t = this.index - 1;
            this.settings.loop &&
              this.galleryItems.length > 2 &&
              (0 === this.index
                ? (t = this.galleryItems.length - 1)
                : this.index === this.galleryItems.length - 1 && (e = 0)),
              this.outer
                .find(".lg-item")
                .removeClass("lg-next-slide lg-prev-slide"),
              t > -1 && this.getSlideItem(t).addClass("lg-prev-slide"),
              this.getSlideItem(e).addClass("lg-next-slide");
          }),
          (e.prototype.goToNextSlide = function (e) {
            var t = this,
              i = this.settings.loop;
            e && this.galleryItems.length < 3 && (i = !1),
              this.lgBusy ||
                (this.index + 1 < this.galleryItems.length
                  ? (this.index++,
                    this.LGel.trigger(Ce, { index: this.index }),
                    this.slide(this.index, !!e, !1, "next"))
                  : i
                  ? ((this.index = 0),
                    this.LGel.trigger(Ce, { index: this.index }),
                    this.slide(this.index, !!e, !1, "next"))
                  : this.settings.slideEndAnimation &&
                    !e &&
                    (this.outer.addClass("lg-right-end"),
                    setTimeout(function () {
                      t.outer.removeClass("lg-right-end");
                    }, 400)));
          }),
          (e.prototype.goToPrevSlide = function (e) {
            var t = this,
              i = this.settings.loop;
            e && this.galleryItems.length < 3 && (i = !1),
              this.lgBusy ||
                (this.index > 0
                  ? (this.index--,
                    this.LGel.trigger(Ie, { index: this.index, fromTouch: e }),
                    this.slide(this.index, !!e, !1, "prev"))
                  : i
                  ? ((this.index = this.galleryItems.length - 1),
                    this.LGel.trigger(Ie, { index: this.index, fromTouch: e }),
                    this.slide(this.index, !!e, !1, "prev"))
                  : this.settings.slideEndAnimation &&
                    !e &&
                    (this.outer.addClass("lg-left-end"),
                    setTimeout(function () {
                      t.outer.removeClass("lg-left-end");
                    }, 400)));
          }),
          (e.prototype.keyPress = function () {
            var e = this;
            ke(window).on("keydown.lg.global" + this.lgId, function (t) {
              e.lgOpened &&
                !0 === e.settings.escKey &&
                27 === t.keyCode &&
                (t.preventDefault(),
                e.settings.allowMediaOverlap &&
                e.outer.hasClass("lg-can-toggle") &&
                e.outer.hasClass("lg-components-open")
                  ? e.outer.removeClass("lg-components-open")
                  : e.closeGallery()),
                e.lgOpened &&
                  e.galleryItems.length > 1 &&
                  (37 === t.keyCode && (t.preventDefault(), e.goToPrevSlide()),
                  39 === t.keyCode && (t.preventDefault(), e.goToNextSlide()));
            });
          }),
          (e.prototype.arrow = function () {
            var e = this;
            this.getElementById("lg-prev").on("click.lg", function () {
              e.goToPrevSlide();
            }),
              this.getElementById("lg-next").on("click.lg", function () {
                e.goToNextSlide();
              });
          }),
          (e.prototype.arrowDisable = function (e) {
            if (!this.settings.loop && this.settings.hideControlOnEnd) {
              var t = this.getElementById("lg-prev"),
                i = this.getElementById("lg-next");
              e + 1 === this.galleryItems.length
                ? i.attr("disabled", "disabled").addClass("disabled")
                : i.removeAttr("disabled").removeClass("disabled"),
                0 === e
                  ? t.attr("disabled", "disabled").addClass("disabled")
                  : t.removeAttr("disabled").removeClass("disabled");
            }
          }),
          (e.prototype.setTranslate = function (e, t, i, s, n) {
            void 0 === s && (s = 1),
              void 0 === n && (n = 1),
              e.css(
                "transform",
                "translate3d(" +
                  t +
                  "px, " +
                  i +
                  "px, 0px) scale3d(" +
                  s +
                  ", " +
                  n +
                  ", 1)",
              );
          }),
          (e.prototype.mousewheel = function () {
            var e = this,
              t = 0;
            this.outer.on("wheel.lg", function (i) {
              if (i.deltaY && !(e.galleryItems.length < 2)) {
                i.preventDefault();
                var s = new Date().getTime();
                s - t < 1e3 ||
                  ((t = s),
                  i.deltaY > 0
                    ? e.goToNextSlide()
                    : i.deltaY < 0 && e.goToPrevSlide());
              }
            });
          }),
          (e.prototype.isSlideElement = function (e) {
            return (
              e.hasClass("lg-outer") ||
              e.hasClass("lg-item") ||
              e.hasClass("lg-img-wrap")
            );
          }),
          (e.prototype.isPosterElement = function (e) {
            var t = this.getSlideItem(this.index)
              .find(".lg-video-play-button")
              .get();
            return (
              e.hasClass("lg-video-poster") ||
              e.hasClass("lg-video-play-button") ||
              (t && t.contains(e.get()))
            );
          }),
          (e.prototype.toggleMaximize = function () {
            var e = this;
            this.getElementById("lg-maximize").on("click.lg", function () {
              e.$container.toggleClass("lg-inline"), e.refreshOnResize();
            });
          }),
          (e.prototype.invalidateItems = function () {
            for (var e = 0; e < this.items.length; e++) {
              var t = ke(this.items[e]);
              t.off("click.lgcustom-item-" + t.attr("data-lg-id"));
            }
          }),
          (e.prototype.trapFocus = function () {
            var e = this;
            this.$container.get().focus({ preventScroll: !0 }),
              ke(window).on("keydown.lg.global" + this.lgId, function (t) {
                if (e.lgOpened && ("Tab" === t.key || 9 === t.keyCode)) {
                  var i = He(e.$container.get()),
                    s = i[0],
                    n = i[i.length - 1];
                  t.shiftKey
                    ? document.activeElement === s &&
                      (n.focus(), t.preventDefault())
                    : document.activeElement === n &&
                      (s.focus(), t.preventDefault());
                }
              });
          }),
          (e.prototype.manageCloseGallery = function () {
            var e = this;
            if (this.settings.closable) {
              var t = !1;
              this.getElementById("lg-close").on("click.lg", function () {
                e.closeGallery();
              }),
                this.settings.closeOnTap &&
                  (this.outer.on("mousedown.lg", function (i) {
                    var s = ke(i.target);
                    t = !!e.isSlideElement(s);
                  }),
                  this.outer.on("mousemove.lg", function () {
                    t = !1;
                  }),
                  this.outer.on("mouseup.lg", function (i) {
                    var s = ke(i.target);
                    e.isSlideElement(s) &&
                      t &&
                      (e.outer.hasClass("lg-dragging") || e.closeGallery());
                  }));
            }
          }),
          (e.prototype.closeGallery = function (e) {
            var t = this;
            if (!this.lgOpened || (!this.settings.closable && !e)) return 0;
            this.LGel.trigger(Me),
              this.settings.resetScrollPosition &&
                !this.settings.hideScrollbar &&
                ke(window).scrollTop(this.prevScrollTop);
            var i,
              s = this.items[this.index];
            if (this.zoomFromOrigin && s) {
              var n = this.mediaContainerPosition,
                r = n.top,
                o = n.bottom,
                a = this.galleryItems[this.index],
                l = a.__slideVideoInfo,
                d = a.poster,
                c = ze(
                  s,
                  this.outer,
                  r + o,
                  l && d && this.settings.videoMaxSize,
                );
              i = De(s, this.outer, r, o, c);
            }
            this.zoomFromOrigin && i
              ? (this.outer.addClass("lg-closing lg-zoom-from-image"),
                this.getSlideItem(this.index)
                  .addClass("lg-start-end-progress")
                  .css(
                    "transition-duration",
                    this.settings.startAnimationDuration + "ms",
                  )
                  .css("transform", i))
              : (this.outer.addClass("lg-hide-items"),
                this.outer.removeClass("lg-zoom-from-image")),
              this.destroyModules(),
              (this.lGalleryOn = !1),
              (this.isDummyImageRemoved = !1),
              (this.zoomFromOrigin = this.settings.zoomFromOrigin),
              clearTimeout(this.hideBarTimeout),
              (this.hideBarTimeout = !1),
              ke("html").removeClass("lg-on"),
              this.outer.removeClass("lg-visible lg-components-open"),
              this.$backdrop.removeClass("in").css("opacity", 0);
            var u =
              this.zoomFromOrigin && i
                ? Math.max(
                    this.settings.startAnimationDuration,
                    this.settings.backdropDuration,
                  )
                : this.settings.backdropDuration;
            return (
              this.$container.removeClass("lg-show-in"),
              setTimeout(function () {
                t.zoomFromOrigin &&
                  i &&
                  t.outer.removeClass("lg-zoom-from-image"),
                  t.$container.removeClass("lg-show"),
                  t.resetScrollBar(),
                  t.$backdrop
                    .removeAttr("style")
                    .css(
                      "transition-duration",
                      t.settings.backdropDuration + "ms",
                    ),
                  t.outer.removeClass("lg-closing " + t.settings.startClass),
                  t.getSlideItem(t.index).removeClass("lg-start-end-progress"),
                  t.$inner.empty(),
                  t.lgOpened && t.LGel.trigger(Le, { instance: t }),
                  t.$container.get() && t.$container.get().blur(),
                  (t.lgOpened = !1);
              }, u + 100),
              u + 100
            );
          }),
          (e.prototype.initModules = function () {
            this.plugins.forEach(function (e) {
              try {
                e.init();
              } catch (e) {
                console.warn(
                  "lightGallery:- make sure lightGallery module is properly initiated",
                );
              }
            });
          }),
          (e.prototype.destroyModules = function (e) {
            this.plugins.forEach(function (t) {
              try {
                e ? t.destroy() : t.closeGallery && t.closeGallery();
              } catch (e) {
                console.warn(
                  "lightGallery:- make sure lightGallery module is properly destroyed",
                );
              }
            });
          }),
          (e.prototype.refresh = function (e) {
            this.settings.dynamic || this.invalidateItems(),
              (this.galleryItems = e || this.getItems()),
              this.updateControls(),
              this.openGalleryOnItemClick(),
              this.LGel.trigger(ge);
          }),
          (e.prototype.updateControls = function () {
            this.addSlideVideoInfo(this.galleryItems),
              this.updateCounterTotal(),
              this.manageSingleSlideClassName();
          }),
          (e.prototype.destroyGallery = function () {
            this.destroyModules(!0),
              this.settings.dynamic || this.invalidateItems(),
              ke(window).off(".lg.global" + this.lgId),
              this.LGel.off(".lg"),
              this.$container.remove();
          }),
          (e.prototype.destroy = function () {
            var e = this.closeGallery(!0);
            return (
              e
                ? setTimeout(this.destroyGallery.bind(this), e)
                : this.destroyGallery(),
              e
            );
          }),
          e
        );
      })();
    const Ye = function (e, t) {
        return new We(e, t);
      },
      Xe = document.querySelectorAll("[data-gallery]");
    let Ue;
    Xe.length &&
      Xe.forEach((e) => {
        Ye(e, {
          licenseKey: "7EC452A9-0CFD441C-BD984C7C-17C8456E",
          speed: 500,
        });
      });
    let Ke = document.querySelector(".search-header__input");
    document.querySelector(".search-header__button");
    document.addEventListener("click", function (e) {
      (Ue = e.target),
        Ue.classList.contains("search-header__button")
          ? Ke && Ke.classList.add("active")
          : Ue.closest(".search-header") ||
            (Ke.classList.contains("active") && Ke.classList.remove("active"));
    }),
      (window.FLS = !0),
      (function (e) {
        let t = new Image();
        (t.onload = t.onerror =
          function () {
            e(2 == t.height);
          }),
          (t.src =
            "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
      })(function (e) {
        let t = !0 === e ? "webp" : "no-webp";
        document.documentElement.classList.add(t);
      }),
      (function () {
        let e = document.querySelector(".icon-menu");
        e &&
          e.addEventListener("click", function (e) {
            t &&
              (((e = 500) => {
                document.documentElement.classList.contains("lock")
                  ? s(e)
                  : n(e);
              })(),
              document.documentElement.classList.toggle("menu-open"));
          });
      })(),
      (function () {
        const e = document.querySelectorAll(
          "input[placeholder],textarea[placeholder]",
        );
        e.length &&
          e.forEach((e) => {
            e.dataset.placeholder = e.placeholder;
          }),
          document.body.addEventListener("focusin", function (e) {
            const t = e.target;
            ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
              (t.dataset.placeholder && (t.placeholder = ""),
              t.classList.add("_form-focus"),
              t.parentElement.classList.add("_form-focus"),
              l.removeError(t));
          }),
          document.body.addEventListener("focusout", function (e) {
            const t = e.target;
            ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
              (t.dataset.placeholder && (t.placeholder = t.dataset.placeholder),
              t.classList.remove("_form-focus"),
              t.parentElement.classList.remove("_form-focus"),
              t.hasAttribute("data-validate") && l.validateInput(t));
          });
      })(),
      (function (e) {
        const t = document.forms;
        if (t.length)
          for (const e of t)
            e.addEventListener("submit", function (e) {
              i(e.target, e);
            }),
              e.addEventListener("reset", function (e) {
                const t = e.target;
                l.formClean(t);
              });
        async function i(t, i) {
          if (0 === (e ? l.getErrors(t) : 0)) {
            if (t.hasAttribute("data-ajax")) {
              i.preventDefault();
              const e = t.getAttribute("action")
                  ? t.getAttribute("action").trim()
                  : "#",
                n = t.getAttribute("method")
                  ? t.getAttribute("method").trim()
                  : "GET",
                r = new FormData(t);
              t.classList.add("_sending");
              const o = await fetch(e, { method: n, body: r });
              if (o.ok) {
                await o.json();
                t.classList.remove("_sending"), s(t);
              } else alert("Ошибка"), t.classList.remove("_sending");
            } else t.hasAttribute("data-dev") && (i.preventDefault(), s(t));
          } else {
            i.preventDefault();
            const e = t.querySelector("._form-error");
            e && t.hasAttribute("data-goto-error") && o(e, !0, 1e3);
          }
        }
        function s(e) {
          document.dispatchEvent(
            new CustomEvent("formSent", { detail: { form: e } }),
          ),
            l.formClean(e),
            r(`[Формы]: ${"Форма отправлена!"}`);
        }
      })(!0),
      (function () {
        function e(e) {
          if ("click" === e.type) {
            const t = e.target;
            if (t.closest("[data-goto]")) {
              const i = t.closest("[data-goto]"),
                s = i.dataset.goto ? i.dataset.goto : "",
                n = !!i.hasAttribute("data-goto-header"),
                r = i.dataset.gotoSpeed ? i.dataset.gotoSpeed : "500";
              o(s, n, r), e.preventDefault();
            }
          } else if ("watcherCallback" === e.type && e.detail) {
            const t = e.detail.entry,
              i = t.target;
            if ("navigator" === i.dataset.watch) {
              const e = i.id,
                s =
                  (document.querySelector("[data-goto]._navigator-active"),
                  document.querySelector(`[data-goto="#${e}"]`));
              t.isIntersecting
                ? s && s.classList.add("_navigator-active")
                : s && s.classList.remove("_navigator-active");
            }
          }
        }
        document.addEventListener("click", e),
          document.addEventListener("watcherCallback", e);
      })();
  })();
})();
