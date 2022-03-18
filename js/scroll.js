window.Element && !Element.prototype.closest && (Element.prototype.closest = function(e) {
        var t, n = (this.document || this.ownerDocument).querySelectorAll(e),
            o = this;
        do { for (t = n.length; 0 <= --t && n.item(t) !== o;); } while (t < 0 && (o = o.parentElement));
        return o
    }),
    function() {
        function e(e, t) { t = t || { bubbles: !1, cancelable: !1, detail: void 0 }; var n = document.createEvent("CustomEvent"); return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n }
        "function" != typeof window.CustomEvent && (e.prototype = window.Event.prototype, window.CustomEvent = e)
    }(),
    function() {
        for (var e = 0, t = ["ms", "moz", "webkit", "o"], n = 0; n < t.length && !window.requestAnimationFrame; ++n) window.requestAnimationFrame = window[t[n] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[n] + "CancelAnimationFrame"] || window[t[n] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(t, n) {
            var o = (new Date).getTime(),
                a = Math.max(0, 16 - (o - e)),
                r = window.setTimeout(function() { t(o + a) }, a);
            return e = o + a, r
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) { clearTimeout(e) })
    }(),
    function(e, t) { "function" == typeof define && define.amd ? define([], function() { return t(e) }) : "object" == typeof exports ? module.exports = t(e) : e.SmoothScroll = t(e) }("undefined" != typeof global ? global : "undefined" != typeof window ? window : this, function(e) {
        "use strict";
        var t = { ignore: "[data-scroll-ignore]", header: null, topOnEmptyHash: !0, speed: 500, speedAsDuration: !1, durationMax: null, durationMin: null, clip: !0, offset: 0, easing: "easeInOutCubic", customEasing: null, updateURL: !0, popstate: !0, emitEvents: !0 },
            n = function() {
                var e = {};
                return Array.prototype.forEach.call(arguments, function(t) {
                    for (var n in t) {
                        if (!t.hasOwnProperty(n)) return;
                        e[n] = t[n]
                    }
                }), e
            },
            o = function(e) {
                "#" === e.charAt(0) && (e = e.substr(1));
                for (var t, n = String(e), o = n.length, a = -1, r = "", i = n.charCodeAt(0); ++a < o;) {
                    if (0 === (t = n.charCodeAt(a))) throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
                    r += 1 <= t && t <= 31 || 127 == t || 0 === a && 48 <= t && t <= 57 || 1 === a && 48 <= t && t <= 57 && 45 === i ? "\\" + t.toString(16) + " " : 128 <= t || 45 === t || 95 === t || 48 <= t && t <= 57 || 65 <= t && t <= 90 || 97 <= t && t <= 122 ? n.charAt(a) : "\\" + n.charAt(a)
                }
                return "#" + r
            },
            a = function() { return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight) },
            r = function(t, n, o, a) {
                if (n.emitEvents && "function" == typeof e.CustomEvent) {
                    var r = new CustomEvent(t, { bubbles: !0, detail: { anchor: o, toggle: a } });
                    document.dispatchEvent(r)
                }
            };
        return function(i, c) {
            var s, u, l, d, m = { cancelScroll: function(e) { cancelAnimationFrame(d), d = null, e || r("scrollCancel", s) } };
            m.animateScroll = function(o, i, c) {
                m.cancelScroll();
                var u = n(s || t, c || {}),
                    f = "[object Number]" === Object.prototype.toString.call(o),
                    h = f || !o.tagName ? null : o;
                if (f || h) {
                    var p = e.pageYOffset;
                    u.header && !l && (l = document.querySelector(u.header));
                    var g, y, v, w, S, E, b, A, O = function(t) { return t ? (n = t, parseInt(e.getComputedStyle(n).height, 10) + t.offsetTop) : 0; var n }(l),
                        C = f ? o : function(t, n, o, r) {
                            var i = 0;
                            if (t.offsetParent)
                                for (; i += t.offsetTop, t = t.offsetParent;);
                            return i = Math.max(i - n - o, 0), r && (i = Math.min(i, a() - e.innerHeight)), i
                        }(h, O, parseInt("function" == typeof u.offset ? u.offset(o, i) : u.offset, 10), u.clip),
                        M = C - p,
                        q = a(),
                        I = 0,
                        F = (g = M, v = (y = u).speedAsDuration ? y.speed : Math.abs(g / 1e3 * y.speed), y.durationMax && v > y.durationMax ? y.durationMax : y.durationMin && v < y.durationMin ? y.durationMin : parseInt(v, 10)),
                        L = function(t) {
                            var n, a, c;
                            w || (w = t), I += t - w, E = p + M * (a = S = 1 < (S = 0 === F ? 0 : I / F) ? 1 : S, "easeInQuad" === (n = u).easing && (c = a * a), "easeOutQuad" === n.easing && (c = a * (2 - a)), "easeInOutQuad" === n.easing && (c = a < .5 ? 2 * a * a : (4 - 2 * a) * a - 1), "easeInCubic" === n.easing && (c = a * a * a), "easeOutCubic" === n.easing && (c = --a * a * a + 1), "easeInOutCubic" === n.easing && (c = a < .5 ? 4 * a * a * a : (a - 1) * (2 * a - 2) * (2 * a - 2) + 1), "easeInQuart" === n.easing && (c = a * a * a * a), "easeOutQuart" === n.easing && (c = 1 - --a * a * a * a), "easeInOutQuart" === n.easing && (c = a < .5 ? 8 * a * a * a * a : 1 - 8 * --a * a * a * a), "easeInQuint" === n.easing && (c = a * a * a * a * a), "easeOutQuint" === n.easing && (c = 1 + --a * a * a * a * a), "easeInOutQuint" === n.easing && (c = a < .5 ? 16 * a * a * a * a * a : 1 + 16 * --a * a * a * a * a), n.customEasing && (c = n.customEasing(a)), c || a), e.scrollTo(0, Math.floor(E)),
                                function(t, n) { var a, c, s, l = e.pageYOffset; if (t == n || l == n || (p < n && e.innerHeight + l) >= q) return m.cancelScroll(!0), c = n, s = f, 0 === (a = o) && document.body.focus(), s || (a.focus(), document.activeElement !== a && (a.setAttribute("tabindex", "-1"), a.focus(), a.style.outline = "none"), e.scrollTo(0, c)), r("scrollStop", u, o, i), !(d = w = null) }(E, C) || (d = e.requestAnimationFrame(L), w = t)
                        };
                    0 === e.pageYOffset && e.scrollTo(0, 0), b = o, A = u, f || history.pushState && A.updateURL && history.pushState({ smoothScroll: JSON.stringify(A), anchor: b.id }, document.title, b === document.documentElement ? "#top" : "#" + b.id), "matchMedia" in e && e.matchMedia("(prefers-reduced-motion)").matches ? e.scrollTo(0, Math.floor(C)) : (r("scrollStart", u, o, i), m.cancelScroll(!0), e.requestAnimationFrame(L))
                }
            };
            var f = function(t) {
                    if (!t.defaultPrevented && !(0 !== t.button || t.metaKey || t.ctrlKey || t.shiftKey) && "closest" in t.target && (u = t.target.closest(i)) && "a" === u.tagName.toLowerCase() && !t.target.closest(s.ignore) && u.hostname === e.location.hostname && u.pathname === e.location.pathname && /#/.test(u.href)) {
                        var n, a;
                        try { n = o(decodeURIComponent(u.hash)) } catch (t) { n = o(u.hash) }
                        if ("#" === n) {
                            if (!s.topOnEmptyHash) return;
                            a = document.documentElement
                        } else a = document.querySelector(n);
                        (a = a || "#top" !== n ? a : document.documentElement) && (t.preventDefault(), function(t) {
                            if (history.replaceState && t.updateURL && !history.state) {
                                var n = e.location.hash;
                                n = n || "", history.replaceState({ smoothScroll: JSON.stringify(t), anchor: n || e.pageYOffset }, document.title, n || e.location.href)
                            }
                        }(s), m.animateScroll(a, u))
                    }
                },
                h = function(e) { if (null !== history.state && history.state.smoothScroll && history.state.smoothScroll === JSON.stringify(s)) { var t = history.state.anchor; "string" == typeof t && t && !(t = document.querySelector(o(history.state.anchor))) || m.animateScroll(t, null, { updateURL: !1 }) } };
            return m.destroy = function() { s && (document.removeEventListener("click", f, !1), e.removeEventListener("popstate", h, !1), m.cancelScroll(), d = l = u = s = null) },
                function() {
                    if (!("querySelector" in document && "addEventListener" in e && "requestAnimationFrame" in e && "closest" in e.Element.prototype)) throw "Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";
                    m.destroy(), s = n(t, c || {}), l = s.header ? document.querySelector(s.header) : null, document.addEventListener("click", f, !1), s.updateURL && s.popstate && e.addEventListener("popstate", h, !1)
                }(), m
        }
    });
var scroll = new SmoothScroll('a[href*="#"]', { speed: 500, speedAsDuration: !0, header: ".header" });