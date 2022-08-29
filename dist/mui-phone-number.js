import * as Be from "react";
import Le, { forwardRef as Gc, useContext as ai, createContext as Y4, createElement as xe, Fragment as q4, PureComponent as Kc, useState as je, useEffect as Jl } from "react";
import { IconButton as Yc, useMediaQuery as qc, Popper as jc, Stack as j4, Autocomplete as Zc, TextField as Z4, styled as Jc, InputAdornment as Xc } from "@mui/material";
var X2 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, qt = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
(function(l, i) {
  (function() {
    var n, a = "4.17.21", h = 200, v = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", p = "Expected a function", M = "Invalid `variable` option passed into `_.template`", F = "__lodash_hash_undefined__", E = 500, b = "__lodash_placeholder__", A = 1, D = 2, N = 4, I = 1, w = 2, y = 1, L = 2, $ = 4, W = 8, j = 16, S = 32, Q = 64, K = 128, b1 = 256, f1 = 512, l1 = 30, E1 = "...", tt = 800, k1 = 16, U1 = 1, nt = 2, it = 3, G1 = 1 / 0, $1 = 9007199254740991, pt = 17976931348623157e292, V = 0 / 0, U = 4294967295, a1 = U - 1, o1 = U >>> 1, t1 = [
      ["ary", K],
      ["bind", y],
      ["bindKey", L],
      ["curry", W],
      ["curryRight", j],
      ["flip", f1],
      ["partial", S],
      ["partialRight", Q],
      ["rearg", b1]
    ], s1 = "[object Arguments]", r1 = "[object Array]", u1 = "[object AsyncFunction]", h1 = "[object Boolean]", v1 = "[object Date]", p1 = "[object DOMException]", K1 = "[object Error]", R = "[object Function]", M1 = "[object GeneratorFunction]", G = "[object Map]", V1 = "[object Number]", ot = "[object Null]", Y1 = "[object Object]", Ct = "[object Promise]", mt = "[object Proxy]", se = "[object RegExp]", Tt = "[object Set]", ce = "[object String]", Je = "[object Symbol]", bn = "[object Undefined]", Fe = "[object WeakMap]", dr = "[object WeakSet]", jt = "[object ArrayBuffer]", ye = "[object DataView]", Xe = "[object Float32Array]", Qe = "[object Float64Array]", Ve = "[object Int8Array]", E2 = "[object Int16Array]", A2 = "[object Int32Array]", S2 = "[object Uint8Array]", D2 = "[object Uint8ClampedArray]", C2 = "[object Uint16Array]", T2 = "[object Uint32Array]", En = /\b__p \+= '';/g, B2 = /\b(__p \+=) '' \+/g, vr = /(__e\(.*?\)|\b__t\)) \+\n'';/g, he = /&(?:amp|lt|gt|quot|#39);/g, t2 = /[&<>"']/g, L2 = RegExp(he.source), pr = RegExp(t2.source), An = /<%-([\s\S]+?)%>/g, mr = /<%([\s\S]+?)%>/g, gr = /<%=([\s\S]+?)%>/g, wr = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, zr = /^\w*$/, Sn = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, O2 = /[\\^$.*+?()[\]{}|]/g, xr = RegExp(O2.source), R2 = /^\s+/, Dn = /\s/, Cn = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Tn = /\{\n\/\* \[wrapped with (.+)\] \*/, z = /,? & /, k = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Y = /[()=,{}\[\]\/\s]/, c1 = /\\(\\)?/g, A1 = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, C1 = /\w*$/, y1 = /^[-+]0x[0-9a-f]+$/i, x1 = /^0b[01]+$/i, ft = /^\[object .+?Constructor\]$/, X1 = /^0o[0-7]+$/i, et = /^(?:0|[1-9]\d*)$/, yt = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Zt = /($^)/, Mr = /['\n\r\u2028\u2029\\]/g, Ht = "\\ud800-\\udfff", I5 = "\\u0300-\\u036f", P5 = "\\ufe20-\\ufe2f", V5 = "\\u20d0-\\u20ff", bi = I5 + P5 + V5, Ei = "\\u2700-\\u27bf", Ai = "a-z\\xdf-\\xf6\\xf8-\\xff", N5 = "\\xac\\xb1\\xd7\\xf7", k5 = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", $5 = "\\u2000-\\u206f", W5 = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Si = "A-Z\\xc0-\\xd6\\xd8-\\xde", Di = "\\ufe0e\\ufe0f", Ci = N5 + k5 + $5 + W5, Bn = "['\u2019]", U5 = "[" + Ht + "]", Ti = "[" + Ci + "]", Fr = "[" + bi + "]", Bi = "\\d+", G5 = "[" + Ei + "]", Li = "[" + Ai + "]", Oi = "[^" + Ht + Ci + Bi + Ei + Ai + Si + "]", Ln = "\\ud83c[\\udffb-\\udfff]", K5 = "(?:" + Fr + "|" + Ln + ")", Ri = "[^" + Ht + "]", On = "(?:\\ud83c[\\udde6-\\uddff]){2}", Rn = "[\\ud800-\\udbff][\\udc00-\\udfff]", e2 = "[" + Si + "]", Ii = "\\u200d", Pi = "(?:" + Li + "|" + Oi + ")", Y5 = "(?:" + e2 + "|" + Oi + ")", Vi = "(?:" + Bn + "(?:d|ll|m|re|s|t|ve))?", Ni = "(?:" + Bn + "(?:D|LL|M|RE|S|T|VE))?", ki = K5 + "?", $i = "[" + Di + "]?", q5 = "(?:" + Ii + "(?:" + [Ri, On, Rn].join("|") + ")" + $i + ki + ")*", j5 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Z5 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Wi = $i + ki + q5, J5 = "(?:" + [G5, On, Rn].join("|") + ")" + Wi, X5 = "(?:" + [Ri + Fr + "?", Fr, On, Rn, U5].join("|") + ")", Q5 = RegExp(Bn, "g"), ta = RegExp(Fr, "g"), In = RegExp(Ln + "(?=" + Ln + ")|" + X5 + Wi, "g"), ea = RegExp([
      e2 + "?" + Li + "+" + Vi + "(?=" + [Ti, e2, "$"].join("|") + ")",
      Y5 + "+" + Ni + "(?=" + [Ti, e2 + Pi, "$"].join("|") + ")",
      e2 + "?" + Pi + "+" + Vi,
      e2 + "+" + Ni,
      Z5,
      j5,
      Bi,
      J5
    ].join("|"), "g"), ra = RegExp("[" + Ii + Ht + bi + Di + "]"), na = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, ia = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], la = -1, q1 = {};
    q1[Xe] = q1[Qe] = q1[Ve] = q1[E2] = q1[A2] = q1[S2] = q1[D2] = q1[C2] = q1[T2] = !0, q1[s1] = q1[r1] = q1[jt] = q1[h1] = q1[ye] = q1[v1] = q1[K1] = q1[R] = q1[G] = q1[V1] = q1[Y1] = q1[se] = q1[Tt] = q1[ce] = q1[Fe] = !1;
    var W1 = {};
    W1[s1] = W1[r1] = W1[jt] = W1[ye] = W1[h1] = W1[v1] = W1[Xe] = W1[Qe] = W1[Ve] = W1[E2] = W1[A2] = W1[G] = W1[V1] = W1[Y1] = W1[se] = W1[Tt] = W1[ce] = W1[Je] = W1[S2] = W1[D2] = W1[C2] = W1[T2] = !0, W1[K1] = W1[R] = W1[Fe] = !1;
    var aa = {
      \u00C0: "A",
      \u00C1: "A",
      \u00C2: "A",
      \u00C3: "A",
      \u00C4: "A",
      \u00C5: "A",
      \u00E0: "a",
      \u00E1: "a",
      \u00E2: "a",
      \u00E3: "a",
      \u00E4: "a",
      \u00E5: "a",
      \u00C7: "C",
      \u00E7: "c",
      \u00D0: "D",
      \u00F0: "d",
      \u00C8: "E",
      \u00C9: "E",
      \u00CA: "E",
      \u00CB: "E",
      \u00E8: "e",
      \u00E9: "e",
      \u00EA: "e",
      \u00EB: "e",
      \u00CC: "I",
      \u00CD: "I",
      \u00CE: "I",
      \u00CF: "I",
      \u00EC: "i",
      \u00ED: "i",
      \u00EE: "i",
      \u00EF: "i",
      \u00D1: "N",
      \u00F1: "n",
      \u00D2: "O",
      \u00D3: "O",
      \u00D4: "O",
      \u00D5: "O",
      \u00D6: "O",
      \u00D8: "O",
      \u00F2: "o",
      \u00F3: "o",
      \u00F4: "o",
      \u00F5: "o",
      \u00F6: "o",
      \u00F8: "o",
      \u00D9: "U",
      \u00DA: "U",
      \u00DB: "U",
      \u00DC: "U",
      \u00F9: "u",
      \u00FA: "u",
      \u00FB: "u",
      \u00FC: "u",
      \u00DD: "Y",
      \u00FD: "y",
      \u00FF: "y",
      \u00C6: "Ae",
      \u00E6: "ae",
      \u00DE: "Th",
      \u00FE: "th",
      \u00DF: "ss",
      \u0100: "A",
      \u0102: "A",
      \u0104: "A",
      \u0101: "a",
      \u0103: "a",
      \u0105: "a",
      \u0106: "C",
      \u0108: "C",
      \u010A: "C",
      \u010C: "C",
      \u0107: "c",
      \u0109: "c",
      \u010B: "c",
      \u010D: "c",
      \u010E: "D",
      \u0110: "D",
      \u010F: "d",
      \u0111: "d",
      \u0112: "E",
      \u0114: "E",
      \u0116: "E",
      \u0118: "E",
      \u011A: "E",
      \u0113: "e",
      \u0115: "e",
      \u0117: "e",
      \u0119: "e",
      \u011B: "e",
      \u011C: "G",
      \u011E: "G",
      \u0120: "G",
      \u0122: "G",
      \u011D: "g",
      \u011F: "g",
      \u0121: "g",
      \u0123: "g",
      \u0124: "H",
      \u0126: "H",
      \u0125: "h",
      \u0127: "h",
      \u0128: "I",
      \u012A: "I",
      \u012C: "I",
      \u012E: "I",
      \u0130: "I",
      \u0129: "i",
      \u012B: "i",
      \u012D: "i",
      \u012F: "i",
      \u0131: "i",
      \u0134: "J",
      \u0135: "j",
      \u0136: "K",
      \u0137: "k",
      \u0138: "k",
      \u0139: "L",
      \u013B: "L",
      \u013D: "L",
      \u013F: "L",
      \u0141: "L",
      \u013A: "l",
      \u013C: "l",
      \u013E: "l",
      \u0140: "l",
      \u0142: "l",
      \u0143: "N",
      \u0145: "N",
      \u0147: "N",
      \u014A: "N",
      \u0144: "n",
      \u0146: "n",
      \u0148: "n",
      \u014B: "n",
      \u014C: "O",
      \u014E: "O",
      \u0150: "O",
      \u014D: "o",
      \u014F: "o",
      \u0151: "o",
      \u0154: "R",
      \u0156: "R",
      \u0158: "R",
      \u0155: "r",
      \u0157: "r",
      \u0159: "r",
      \u015A: "S",
      \u015C: "S",
      \u015E: "S",
      \u0160: "S",
      \u015B: "s",
      \u015D: "s",
      \u015F: "s",
      \u0161: "s",
      \u0162: "T",
      \u0164: "T",
      \u0166: "T",
      \u0163: "t",
      \u0165: "t",
      \u0167: "t",
      \u0168: "U",
      \u016A: "U",
      \u016C: "U",
      \u016E: "U",
      \u0170: "U",
      \u0172: "U",
      \u0169: "u",
      \u016B: "u",
      \u016D: "u",
      \u016F: "u",
      \u0171: "u",
      \u0173: "u",
      \u0174: "W",
      \u0175: "w",
      \u0176: "Y",
      \u0177: "y",
      \u0178: "Y",
      \u0179: "Z",
      \u017B: "Z",
      \u017D: "Z",
      \u017A: "z",
      \u017C: "z",
      \u017E: "z",
      \u0132: "IJ",
      \u0133: "ij",
      \u0152: "Oe",
      \u0153: "oe",
      \u0149: "'n",
      \u017F: "s"
    }, oa = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, sa = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, ca = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, ha = parseFloat, ua = parseInt, Ui = typeof X2 == "object" && X2 && X2.Object === Object && X2, fa = typeof self == "object" && self && self.Object === Object && self, dt = Ui || fa || Function("return this")(), Pn = i && !i.nodeType && i, Ne = Pn && !0 && l && !l.nodeType && l, Gi = Ne && Ne.exports === Pn, Vn = Gi && Ui.process, Nt = function() {
      try {
        var H = Ne && Ne.require && Ne.require("util").types;
        return H || Vn && Vn.binding && Vn.binding("util");
      } catch {
      }
    }(), Ki = Nt && Nt.isArrayBuffer, Yi = Nt && Nt.isDate, qi = Nt && Nt.isMap, ji = Nt && Nt.isRegExp, Zi = Nt && Nt.isSet, Ji = Nt && Nt.isTypedArray;
    function Bt(H, T, C) {
      switch (C.length) {
        case 0:
          return H.call(T);
        case 1:
          return H.call(T, C[0]);
        case 2:
          return H.call(T, C[0], C[1]);
        case 3:
          return H.call(T, C[0], C[1], C[2]);
      }
      return H.apply(T, C);
    }
    function da(H, T, C, Z) {
      for (var d1 = -1, S1 = H == null ? 0 : H.length; ++d1 < S1; ) {
        var ct = H[d1];
        T(Z, ct, C(ct), H);
      }
      return Z;
    }
    function kt(H, T) {
      for (var C = -1, Z = H == null ? 0 : H.length; ++C < Z && T(H[C], C, H) !== !1; )
        ;
      return H;
    }
    function va(H, T) {
      for (var C = H == null ? 0 : H.length; C-- && T(H[C], C, H) !== !1; )
        ;
      return H;
    }
    function Xi(H, T) {
      for (var C = -1, Z = H == null ? 0 : H.length; ++C < Z; )
        if (!T(H[C], C, H))
          return !1;
      return !0;
    }
    function He(H, T) {
      for (var C = -1, Z = H == null ? 0 : H.length, d1 = 0, S1 = []; ++C < Z; ) {
        var ct = H[C];
        T(ct, C, H) && (S1[d1++] = ct);
      }
      return S1;
    }
    function yr(H, T) {
      var C = H == null ? 0 : H.length;
      return !!C && r2(H, T, 0) > -1;
    }
    function Nn(H, T, C) {
      for (var Z = -1, d1 = H == null ? 0 : H.length; ++Z < d1; )
        if (C(T, H[Z]))
          return !0;
      return !1;
    }
    function j1(H, T) {
      for (var C = -1, Z = H == null ? 0 : H.length, d1 = Array(Z); ++C < Z; )
        d1[C] = T(H[C], C, H);
      return d1;
    }
    function _e(H, T) {
      for (var C = -1, Z = T.length, d1 = H.length; ++C < Z; )
        H[d1 + C] = T[C];
      return H;
    }
    function kn(H, T, C, Z) {
      var d1 = -1, S1 = H == null ? 0 : H.length;
      for (Z && S1 && (C = H[++d1]); ++d1 < S1; )
        C = T(C, H[d1], d1, H);
      return C;
    }
    function pa(H, T, C, Z) {
      var d1 = H == null ? 0 : H.length;
      for (Z && d1 && (C = H[--d1]); d1--; )
        C = T(C, H[d1], d1, H);
      return C;
    }
    function $n(H, T) {
      for (var C = -1, Z = H == null ? 0 : H.length; ++C < Z; )
        if (T(H[C], C, H))
          return !0;
      return !1;
    }
    var ma = Wn("length");
    function ga(H) {
      return H.split("");
    }
    function wa(H) {
      return H.match(k) || [];
    }
    function Qi(H, T, C) {
      var Z;
      return C(H, function(d1, S1, ct) {
        if (T(d1, S1, ct))
          return Z = S1, !1;
      }), Z;
    }
    function Hr(H, T, C, Z) {
      for (var d1 = H.length, S1 = C + (Z ? 1 : -1); Z ? S1-- : ++S1 < d1; )
        if (T(H[S1], S1, H))
          return S1;
      return -1;
    }
    function r2(H, T, C) {
      return T === T ? Da(H, T, C) : Hr(H, t0, C);
    }
    function za(H, T, C, Z) {
      for (var d1 = C - 1, S1 = H.length; ++d1 < S1; )
        if (Z(H[d1], T))
          return d1;
      return -1;
    }
    function t0(H) {
      return H !== H;
    }
    function e0(H, T) {
      var C = H == null ? 0 : H.length;
      return C ? Gn(H, T) / C : V;
    }
    function Wn(H) {
      return function(T) {
        return T == null ? n : T[H];
      };
    }
    function Un(H) {
      return function(T) {
        return H == null ? n : H[T];
      };
    }
    function r0(H, T, C, Z, d1) {
      return d1(H, function(S1, ct, N1) {
        C = Z ? (Z = !1, S1) : T(C, S1, ct, N1);
      }), C;
    }
    function xa(H, T) {
      var C = H.length;
      for (H.sort(T); C--; )
        H[C] = H[C].value;
      return H;
    }
    function Gn(H, T) {
      for (var C, Z = -1, d1 = H.length; ++Z < d1; ) {
        var S1 = T(H[Z]);
        S1 !== n && (C = C === n ? S1 : C + S1);
      }
      return C;
    }
    function Kn(H, T) {
      for (var C = -1, Z = Array(H); ++C < H; )
        Z[C] = T(C);
      return Z;
    }
    function Ma(H, T) {
      return j1(T, function(C) {
        return [C, H[C]];
      });
    }
    function n0(H) {
      return H && H.slice(0, o0(H) + 1).replace(R2, "");
    }
    function Lt(H) {
      return function(T) {
        return H(T);
      };
    }
    function Yn(H, T) {
      return j1(T, function(C) {
        return H[C];
      });
    }
    function I2(H, T) {
      return H.has(T);
    }
    function i0(H, T) {
      for (var C = -1, Z = H.length; ++C < Z && r2(T, H[C], 0) > -1; )
        ;
      return C;
    }
    function l0(H, T) {
      for (var C = H.length; C-- && r2(T, H[C], 0) > -1; )
        ;
      return C;
    }
    function Fa(H, T) {
      for (var C = H.length, Z = 0; C--; )
        H[C] === T && ++Z;
      return Z;
    }
    var ya = Un(aa), Ha = Un(oa);
    function _a(H) {
      return "\\" + ca[H];
    }
    function ba(H, T) {
      return H == null ? n : H[T];
    }
    function n2(H) {
      return ra.test(H);
    }
    function Ea(H) {
      return na.test(H);
    }
    function Aa(H) {
      for (var T, C = []; !(T = H.next()).done; )
        C.push(T.value);
      return C;
    }
    function qn(H) {
      var T = -1, C = Array(H.size);
      return H.forEach(function(Z, d1) {
        C[++T] = [d1, Z];
      }), C;
    }
    function a0(H, T) {
      return function(C) {
        return H(T(C));
      };
    }
    function be(H, T) {
      for (var C = -1, Z = H.length, d1 = 0, S1 = []; ++C < Z; ) {
        var ct = H[C];
        (ct === T || ct === b) && (H[C] = b, S1[d1++] = C);
      }
      return S1;
    }
    function _r(H) {
      var T = -1, C = Array(H.size);
      return H.forEach(function(Z) {
        C[++T] = Z;
      }), C;
    }
    function Sa(H) {
      var T = -1, C = Array(H.size);
      return H.forEach(function(Z) {
        C[++T] = [Z, Z];
      }), C;
    }
    function Da(H, T, C) {
      for (var Z = C - 1, d1 = H.length; ++Z < d1; )
        if (H[Z] === T)
          return Z;
      return -1;
    }
    function Ca(H, T, C) {
      for (var Z = C + 1; Z--; )
        if (H[Z] === T)
          return Z;
      return Z;
    }
    function i2(H) {
      return n2(H) ? Ba(H) : ma(H);
    }
    function Jt(H) {
      return n2(H) ? La(H) : ga(H);
    }
    function o0(H) {
      for (var T = H.length; T-- && Dn.test(H.charAt(T)); )
        ;
      return T;
    }
    var Ta = Un(sa);
    function Ba(H) {
      for (var T = In.lastIndex = 0; In.test(H); )
        ++T;
      return T;
    }
    function La(H) {
      return H.match(In) || [];
    }
    function Oa(H) {
      return H.match(ea) || [];
    }
    var Ra = function H(T) {
      T = T == null ? dt : l2.defaults(dt.Object(), T, l2.pick(dt, ia));
      var C = T.Array, Z = T.Date, d1 = T.Error, S1 = T.Function, ct = T.Math, N1 = T.Object, jn = T.RegExp, Ia = T.String, $t = T.TypeError, br = C.prototype, Pa = S1.prototype, a2 = N1.prototype, Er = T["__core-js_shared__"], Ar = Pa.toString, P1 = a2.hasOwnProperty, Va = 0, s0 = function() {
        var t = /[^.]+$/.exec(Er && Er.keys && Er.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : "";
      }(), Sr = a2.toString, Na = Ar.call(N1), ka = dt._, $a = jn(
        "^" + Ar.call(P1).replace(O2, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Dr = Gi ? T.Buffer : n, Ee = T.Symbol, Cr = T.Uint8Array, c0 = Dr ? Dr.allocUnsafe : n, Tr = a0(N1.getPrototypeOf, N1), h0 = N1.create, u0 = a2.propertyIsEnumerable, Br = br.splice, f0 = Ee ? Ee.isConcatSpreadable : n, P2 = Ee ? Ee.iterator : n, ke = Ee ? Ee.toStringTag : n, Lr = function() {
        try {
          var t = Ke(N1, "defineProperty");
          return t({}, "", {}), t;
        } catch {
        }
      }(), Wa = T.clearTimeout !== dt.clearTimeout && T.clearTimeout, Ua = Z && Z.now !== dt.Date.now && Z.now, Ga = T.setTimeout !== dt.setTimeout && T.setTimeout, Or = ct.ceil, Rr = ct.floor, Zn = N1.getOwnPropertySymbols, Ka = Dr ? Dr.isBuffer : n, d0 = T.isFinite, Ya = br.join, qa = a0(N1.keys, N1), ht = ct.max, gt = ct.min, ja = Z.now, Za = T.parseInt, v0 = ct.random, Ja = br.reverse, Jn = Ke(T, "DataView"), V2 = Ke(T, "Map"), Xn = Ke(T, "Promise"), o2 = Ke(T, "Set"), N2 = Ke(T, "WeakMap"), k2 = Ke(N1, "create"), Ir = N2 && new N2(), s2 = {}, Xa = Ye(Jn), Qa = Ye(V2), t6 = Ye(Xn), e6 = Ye(o2), r6 = Ye(N2), Pr = Ee ? Ee.prototype : n, $2 = Pr ? Pr.valueOf : n, p0 = Pr ? Pr.toString : n;
      function u(t) {
        if (rt(t) && !m1(t) && !(t instanceof H1)) {
          if (t instanceof Wt)
            return t;
          if (P1.call(t, "__wrapped__"))
            return ml(t);
        }
        return new Wt(t);
      }
      var c2 = function() {
        function t() {
        }
        return function(r) {
          if (!Q1(r))
            return {};
          if (h0)
            return h0(r);
          t.prototype = r;
          var o = new t();
          return t.prototype = n, o;
        };
      }();
      function Vr() {
      }
      function Wt(t, r) {
        this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!r, this.__index__ = 0, this.__values__ = n;
      }
      u.templateSettings = {
        escape: An,
        evaluate: mr,
        interpolate: gr,
        variable: "",
        imports: {
          _: u
        }
      }, u.prototype = Vr.prototype, u.prototype.constructor = u, Wt.prototype = c2(Vr.prototype), Wt.prototype.constructor = Wt;
      function H1(t) {
        this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = U, this.__views__ = [];
      }
      function n6() {
        var t = new H1(this.__wrapped__);
        return t.__actions__ = _t(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = _t(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = _t(this.__views__), t;
      }
      function i6() {
        if (this.__filtered__) {
          var t = new H1(this);
          t.__dir__ = -1, t.__filtered__ = !0;
        } else
          t = this.clone(), t.__dir__ *= -1;
        return t;
      }
      function l6() {
        var t = this.__wrapped__.value(), r = this.__dir__, o = m1(t), s = r < 0, c = o ? t.length : 0, f = g7(0, c, this.__views__), g = f.start, x = f.end, _ = x - g, B = s ? x : g - 1, O = this.__iteratees__, P = O.length, q = 0, X = gt(_, this.__takeCount__);
        if (!o || !s && c == _ && X == _)
          return V0(t, this.__actions__);
        var n1 = [];
        t:
          for (; _-- && q < X; ) {
            B += r;
            for (var w1 = -1, i1 = t[B]; ++w1 < P; ) {
              var F1 = O[w1], _1 = F1.iteratee, It = F1.type, Ft = _1(i1);
              if (It == nt)
                i1 = Ft;
              else if (!Ft) {
                if (It == U1)
                  continue t;
                break t;
              }
            }
            n1[q++] = i1;
          }
        return n1;
      }
      H1.prototype = c2(Vr.prototype), H1.prototype.constructor = H1;
      function $e(t) {
        var r = -1, o = t == null ? 0 : t.length;
        for (this.clear(); ++r < o; ) {
          var s = t[r];
          this.set(s[0], s[1]);
        }
      }
      function a6() {
        this.__data__ = k2 ? k2(null) : {}, this.size = 0;
      }
      function o6(t) {
        var r = this.has(t) && delete this.__data__[t];
        return this.size -= r ? 1 : 0, r;
      }
      function s6(t) {
        var r = this.__data__;
        if (k2) {
          var o = r[t];
          return o === F ? n : o;
        }
        return P1.call(r, t) ? r[t] : n;
      }
      function c6(t) {
        var r = this.__data__;
        return k2 ? r[t] !== n : P1.call(r, t);
      }
      function h6(t, r) {
        var o = this.__data__;
        return this.size += this.has(t) ? 0 : 1, o[t] = k2 && r === n ? F : r, this;
      }
      $e.prototype.clear = a6, $e.prototype.delete = o6, $e.prototype.get = s6, $e.prototype.has = c6, $e.prototype.set = h6;
      function ue(t) {
        var r = -1, o = t == null ? 0 : t.length;
        for (this.clear(); ++r < o; ) {
          var s = t[r];
          this.set(s[0], s[1]);
        }
      }
      function u6() {
        this.__data__ = [], this.size = 0;
      }
      function f6(t) {
        var r = this.__data__, o = Nr(r, t);
        if (o < 0)
          return !1;
        var s = r.length - 1;
        return o == s ? r.pop() : Br.call(r, o, 1), --this.size, !0;
      }
      function d6(t) {
        var r = this.__data__, o = Nr(r, t);
        return o < 0 ? n : r[o][1];
      }
      function v6(t) {
        return Nr(this.__data__, t) > -1;
      }
      function p6(t, r) {
        var o = this.__data__, s = Nr(o, t);
        return s < 0 ? (++this.size, o.push([t, r])) : o[s][1] = r, this;
      }
      ue.prototype.clear = u6, ue.prototype.delete = f6, ue.prototype.get = d6, ue.prototype.has = v6, ue.prototype.set = p6;
      function fe(t) {
        var r = -1, o = t == null ? 0 : t.length;
        for (this.clear(); ++r < o; ) {
          var s = t[r];
          this.set(s[0], s[1]);
        }
      }
      function m6() {
        this.size = 0, this.__data__ = {
          hash: new $e(),
          map: new (V2 || ue)(),
          string: new $e()
        };
      }
      function g6(t) {
        var r = Xr(this, t).delete(t);
        return this.size -= r ? 1 : 0, r;
      }
      function w6(t) {
        return Xr(this, t).get(t);
      }
      function z6(t) {
        return Xr(this, t).has(t);
      }
      function x6(t, r) {
        var o = Xr(this, t), s = o.size;
        return o.set(t, r), this.size += o.size == s ? 0 : 1, this;
      }
      fe.prototype.clear = m6, fe.prototype.delete = g6, fe.prototype.get = w6, fe.prototype.has = z6, fe.prototype.set = x6;
      function We(t) {
        var r = -1, o = t == null ? 0 : t.length;
        for (this.__data__ = new fe(); ++r < o; )
          this.add(t[r]);
      }
      function M6(t) {
        return this.__data__.set(t, F), this;
      }
      function F6(t) {
        return this.__data__.has(t);
      }
      We.prototype.add = We.prototype.push = M6, We.prototype.has = F6;
      function Xt(t) {
        var r = this.__data__ = new ue(t);
        this.size = r.size;
      }
      function y6() {
        this.__data__ = new ue(), this.size = 0;
      }
      function H6(t) {
        var r = this.__data__, o = r.delete(t);
        return this.size = r.size, o;
      }
      function _6(t) {
        return this.__data__.get(t);
      }
      function b6(t) {
        return this.__data__.has(t);
      }
      function E6(t, r) {
        var o = this.__data__;
        if (o instanceof ue) {
          var s = o.__data__;
          if (!V2 || s.length < h - 1)
            return s.push([t, r]), this.size = ++o.size, this;
          o = this.__data__ = new fe(s);
        }
        return o.set(t, r), this.size = o.size, this;
      }
      Xt.prototype.clear = y6, Xt.prototype.delete = H6, Xt.prototype.get = _6, Xt.prototype.has = b6, Xt.prototype.set = E6;
      function m0(t, r) {
        var o = m1(t), s = !o && qe(t), c = !o && !s && Te(t), f = !o && !s && !c && d2(t), g = o || s || c || f, x = g ? Kn(t.length, Ia) : [], _ = x.length;
        for (var B in t)
          (r || P1.call(t, B)) && !(g && (B == "length" || c && (B == "offset" || B == "parent") || f && (B == "buffer" || B == "byteLength" || B == "byteOffset") || me(B, _))) && x.push(B);
        return x;
      }
      function g0(t) {
        var r = t.length;
        return r ? t[c3(0, r - 1)] : n;
      }
      function A6(t, r) {
        return Qr(_t(t), Ue(r, 0, t.length));
      }
      function S6(t) {
        return Qr(_t(t));
      }
      function Qn(t, r, o) {
        (o !== n && !Qt(t[r], o) || o === n && !(r in t)) && de(t, r, o);
      }
      function W2(t, r, o) {
        var s = t[r];
        (!(P1.call(t, r) && Qt(s, o)) || o === n && !(r in t)) && de(t, r, o);
      }
      function Nr(t, r) {
        for (var o = t.length; o--; )
          if (Qt(t[o][0], r))
            return o;
        return -1;
      }
      function D6(t, r, o, s) {
        return Ae(t, function(c, f, g) {
          r(s, c, o(c), g);
        }), s;
      }
      function w0(t, r) {
        return t && ne(r, ut(r), t);
      }
      function C6(t, r) {
        return t && ne(r, Et(r), t);
      }
      function de(t, r, o) {
        r == "__proto__" && Lr ? Lr(t, r, {
          configurable: !0,
          enumerable: !0,
          value: o,
          writable: !0
        }) : t[r] = o;
      }
      function t3(t, r) {
        for (var o = -1, s = r.length, c = C(s), f = t == null; ++o < s; )
          c[o] = f ? n : L3(t, r[o]);
        return c;
      }
      function Ue(t, r, o) {
        return t === t && (o !== n && (t = t <= o ? t : o), r !== n && (t = t >= r ? t : r)), t;
      }
      function Ut(t, r, o, s, c, f) {
        var g, x = r & A, _ = r & D, B = r & N;
        if (o && (g = c ? o(t, s, c, f) : o(t)), g !== n)
          return g;
        if (!Q1(t))
          return t;
        var O = m1(t);
        if (O) {
          if (g = z7(t), !x)
            return _t(t, g);
        } else {
          var P = wt(t), q = P == R || P == M1;
          if (Te(t))
            return $0(t, x);
          if (P == Y1 || P == s1 || q && !c) {
            if (g = _ || q ? {} : ol(t), !x)
              return _ ? s7(t, C6(g, t)) : o7(t, w0(g, t));
          } else {
            if (!W1[P])
              return c ? t : {};
            g = x7(t, P, x);
          }
        }
        f || (f = new Xt());
        var X = f.get(t);
        if (X)
          return X;
        f.set(t, g), Rl(t) ? t.forEach(function(i1) {
          g.add(Ut(i1, r, o, i1, t, f));
        }) : Ll(t) && t.forEach(function(i1, F1) {
          g.set(F1, Ut(i1, r, o, F1, t, f));
        });
        var n1 = B ? _ ? x3 : z3 : _ ? Et : ut, w1 = O ? n : n1(t);
        return kt(w1 || t, function(i1, F1) {
          w1 && (F1 = i1, i1 = t[F1]), W2(g, F1, Ut(i1, r, o, F1, t, f));
        }), g;
      }
      function T6(t) {
        var r = ut(t);
        return function(o) {
          return z0(o, t, r);
        };
      }
      function z0(t, r, o) {
        var s = o.length;
        if (t == null)
          return !s;
        for (t = N1(t); s--; ) {
          var c = o[s], f = r[c], g = t[c];
          if (g === n && !(c in t) || !f(g))
            return !1;
        }
        return !0;
      }
      function x0(t, r, o) {
        if (typeof t != "function")
          throw new $t(p);
        return Z2(function() {
          t.apply(n, o);
        }, r);
      }
      function U2(t, r, o, s) {
        var c = -1, f = yr, g = !0, x = t.length, _ = [], B = r.length;
        if (!x)
          return _;
        o && (r = j1(r, Lt(o))), s ? (f = Nn, g = !1) : r.length >= h && (f = I2, g = !1, r = new We(r));
        t:
          for (; ++c < x; ) {
            var O = t[c], P = o == null ? O : o(O);
            if (O = s || O !== 0 ? O : 0, g && P === P) {
              for (var q = B; q--; )
                if (r[q] === P)
                  continue t;
              _.push(O);
            } else
              f(r, P, s) || _.push(O);
          }
        return _;
      }
      var Ae = Y0(re), M0 = Y0(r3, !0);
      function B6(t, r) {
        var o = !0;
        return Ae(t, function(s, c, f) {
          return o = !!r(s, c, f), o;
        }), o;
      }
      function kr(t, r, o) {
        for (var s = -1, c = t.length; ++s < c; ) {
          var f = t[s], g = r(f);
          if (g != null && (x === n ? g === g && !Rt(g) : o(g, x)))
            var x = g, _ = f;
        }
        return _;
      }
      function L6(t, r, o, s) {
        var c = t.length;
        for (o = g1(o), o < 0 && (o = -o > c ? 0 : c + o), s = s === n || s > c ? c : g1(s), s < 0 && (s += c), s = o > s ? 0 : Pl(s); o < s; )
          t[o++] = r;
        return t;
      }
      function F0(t, r) {
        var o = [];
        return Ae(t, function(s, c, f) {
          r(s, c, f) && o.push(s);
        }), o;
      }
      function vt(t, r, o, s, c) {
        var f = -1, g = t.length;
        for (o || (o = F7), c || (c = []); ++f < g; ) {
          var x = t[f];
          r > 0 && o(x) ? r > 1 ? vt(x, r - 1, o, s, c) : _e(c, x) : s || (c[c.length] = x);
        }
        return c;
      }
      var e3 = q0(), y0 = q0(!0);
      function re(t, r) {
        return t && e3(t, r, ut);
      }
      function r3(t, r) {
        return t && y0(t, r, ut);
      }
      function $r(t, r) {
        return He(r, function(o) {
          return ge(t[o]);
        });
      }
      function Ge(t, r) {
        r = De(r, t);
        for (var o = 0, s = r.length; t != null && o < s; )
          t = t[ie(r[o++])];
        return o && o == s ? t : n;
      }
      function H0(t, r, o) {
        var s = r(t);
        return m1(t) ? s : _e(s, o(t));
      }
      function xt(t) {
        return t == null ? t === n ? bn : ot : ke && ke in N1(t) ? m7(t) : S7(t);
      }
      function n3(t, r) {
        return t > r;
      }
      function O6(t, r) {
        return t != null && P1.call(t, r);
      }
      function R6(t, r) {
        return t != null && r in N1(t);
      }
      function I6(t, r, o) {
        return t >= gt(r, o) && t < ht(r, o);
      }
      function i3(t, r, o) {
        for (var s = o ? Nn : yr, c = t[0].length, f = t.length, g = f, x = C(f), _ = 1 / 0, B = []; g--; ) {
          var O = t[g];
          g && r && (O = j1(O, Lt(r))), _ = gt(O.length, _), x[g] = !o && (r || c >= 120 && O.length >= 120) ? new We(g && O) : n;
        }
        O = t[0];
        var P = -1, q = x[0];
        t:
          for (; ++P < c && B.length < _; ) {
            var X = O[P], n1 = r ? r(X) : X;
            if (X = o || X !== 0 ? X : 0, !(q ? I2(q, n1) : s(B, n1, o))) {
              for (g = f; --g; ) {
                var w1 = x[g];
                if (!(w1 ? I2(w1, n1) : s(t[g], n1, o)))
                  continue t;
              }
              q && q.push(n1), B.push(X);
            }
          }
        return B;
      }
      function P6(t, r, o, s) {
        return re(t, function(c, f, g) {
          r(s, o(c), f, g);
        }), s;
      }
      function G2(t, r, o) {
        r = De(r, t), t = ul(t, r);
        var s = t == null ? t : t[ie(Kt(r))];
        return s == null ? n : Bt(s, t, o);
      }
      function _0(t) {
        return rt(t) && xt(t) == s1;
      }
      function V6(t) {
        return rt(t) && xt(t) == jt;
      }
      function N6(t) {
        return rt(t) && xt(t) == v1;
      }
      function K2(t, r, o, s, c) {
        return t === r ? !0 : t == null || r == null || !rt(t) && !rt(r) ? t !== t && r !== r : k6(t, r, o, s, K2, c);
      }
      function k6(t, r, o, s, c, f) {
        var g = m1(t), x = m1(r), _ = g ? r1 : wt(t), B = x ? r1 : wt(r);
        _ = _ == s1 ? Y1 : _, B = B == s1 ? Y1 : B;
        var O = _ == Y1, P = B == Y1, q = _ == B;
        if (q && Te(t)) {
          if (!Te(r))
            return !1;
          g = !0, O = !1;
        }
        if (q && !O)
          return f || (f = new Xt()), g || d2(t) ? il(t, r, o, s, c, f) : v7(t, r, _, o, s, c, f);
        if (!(o & I)) {
          var X = O && P1.call(t, "__wrapped__"), n1 = P && P1.call(r, "__wrapped__");
          if (X || n1) {
            var w1 = X ? t.value() : t, i1 = n1 ? r.value() : r;
            return f || (f = new Xt()), c(w1, i1, o, s, f);
          }
        }
        return q ? (f || (f = new Xt()), p7(t, r, o, s, c, f)) : !1;
      }
      function $6(t) {
        return rt(t) && wt(t) == G;
      }
      function l3(t, r, o, s) {
        var c = o.length, f = c, g = !s;
        if (t == null)
          return !f;
        for (t = N1(t); c--; ) {
          var x = o[c];
          if (g && x[2] ? x[1] !== t[x[0]] : !(x[0] in t))
            return !1;
        }
        for (; ++c < f; ) {
          x = o[c];
          var _ = x[0], B = t[_], O = x[1];
          if (g && x[2]) {
            if (B === n && !(_ in t))
              return !1;
          } else {
            var P = new Xt();
            if (s)
              var q = s(B, O, _, t, r, P);
            if (!(q === n ? K2(O, B, I | w, s, P) : q))
              return !1;
          }
        }
        return !0;
      }
      function b0(t) {
        if (!Q1(t) || H7(t))
          return !1;
        var r = ge(t) ? $a : ft;
        return r.test(Ye(t));
      }
      function W6(t) {
        return rt(t) && xt(t) == se;
      }
      function U6(t) {
        return rt(t) && wt(t) == Tt;
      }
      function G6(t) {
        return rt(t) && an(t.length) && !!q1[xt(t)];
      }
      function E0(t) {
        return typeof t == "function" ? t : t == null ? At : typeof t == "object" ? m1(t) ? D0(t[0], t[1]) : S0(t) : jl(t);
      }
      function a3(t) {
        if (!j2(t))
          return qa(t);
        var r = [];
        for (var o in N1(t))
          P1.call(t, o) && o != "constructor" && r.push(o);
        return r;
      }
      function K6(t) {
        if (!Q1(t))
          return A7(t);
        var r = j2(t), o = [];
        for (var s in t)
          s == "constructor" && (r || !P1.call(t, s)) || o.push(s);
        return o;
      }
      function o3(t, r) {
        return t < r;
      }
      function A0(t, r) {
        var o = -1, s = bt(t) ? C(t.length) : [];
        return Ae(t, function(c, f, g) {
          s[++o] = r(c, f, g);
        }), s;
      }
      function S0(t) {
        var r = F3(t);
        return r.length == 1 && r[0][2] ? cl(r[0][0], r[0][1]) : function(o) {
          return o === t || l3(o, t, r);
        };
      }
      function D0(t, r) {
        return H3(t) && sl(r) ? cl(ie(t), r) : function(o) {
          var s = L3(o, t);
          return s === n && s === r ? O3(o, t) : K2(r, s, I | w);
        };
      }
      function Wr(t, r, o, s, c) {
        t !== r && e3(r, function(f, g) {
          if (c || (c = new Xt()), Q1(f))
            Y6(t, r, g, o, Wr, s, c);
          else {
            var x = s ? s(b3(t, g), f, g + "", t, r, c) : n;
            x === n && (x = f), Qn(t, g, x);
          }
        }, Et);
      }
      function Y6(t, r, o, s, c, f, g) {
        var x = b3(t, o), _ = b3(r, o), B = g.get(_);
        if (B) {
          Qn(t, o, B);
          return;
        }
        var O = f ? f(x, _, o + "", t, r, g) : n, P = O === n;
        if (P) {
          var q = m1(_), X = !q && Te(_), n1 = !q && !X && d2(_);
          O = _, q || X || n1 ? m1(x) ? O = x : lt(x) ? O = _t(x) : X ? (P = !1, O = $0(_, !0)) : n1 ? (P = !1, O = W0(_, !0)) : O = [] : J2(_) || qe(_) ? (O = x, qe(x) ? O = Vl(x) : (!Q1(x) || ge(x)) && (O = ol(_))) : P = !1;
        }
        P && (g.set(_, O), c(O, _, s, f, g), g.delete(_)), Qn(t, o, O);
      }
      function C0(t, r) {
        var o = t.length;
        if (!!o)
          return r += r < 0 ? o : 0, me(r, o) ? t[r] : n;
      }
      function T0(t, r, o) {
        r.length ? r = j1(r, function(f) {
          return m1(f) ? function(g) {
            return Ge(g, f.length === 1 ? f[0] : f);
          } : f;
        }) : r = [At];
        var s = -1;
        r = j1(r, Lt(e1()));
        var c = A0(t, function(f, g, x) {
          var _ = j1(r, function(B) {
            return B(f);
          });
          return { criteria: _, index: ++s, value: f };
        });
        return xa(c, function(f, g) {
          return a7(f, g, o);
        });
      }
      function q6(t, r) {
        return B0(t, r, function(o, s) {
          return O3(t, s);
        });
      }
      function B0(t, r, o) {
        for (var s = -1, c = r.length, f = {}; ++s < c; ) {
          var g = r[s], x = Ge(t, g);
          o(x, g) && Y2(f, De(g, t), x);
        }
        return f;
      }
      function j6(t) {
        return function(r) {
          return Ge(r, t);
        };
      }
      function s3(t, r, o, s) {
        var c = s ? za : r2, f = -1, g = r.length, x = t;
        for (t === r && (r = _t(r)), o && (x = j1(t, Lt(o))); ++f < g; )
          for (var _ = 0, B = r[f], O = o ? o(B) : B; (_ = c(x, O, _, s)) > -1; )
            x !== t && Br.call(x, _, 1), Br.call(t, _, 1);
        return t;
      }
      function L0(t, r) {
        for (var o = t ? r.length : 0, s = o - 1; o--; ) {
          var c = r[o];
          if (o == s || c !== f) {
            var f = c;
            me(c) ? Br.call(t, c, 1) : f3(t, c);
          }
        }
        return t;
      }
      function c3(t, r) {
        return t + Rr(v0() * (r - t + 1));
      }
      function Z6(t, r, o, s) {
        for (var c = -1, f = ht(Or((r - t) / (o || 1)), 0), g = C(f); f--; )
          g[s ? f : ++c] = t, t += o;
        return g;
      }
      function h3(t, r) {
        var o = "";
        if (!t || r < 1 || r > $1)
          return o;
        do
          r % 2 && (o += t), r = Rr(r / 2), r && (t += t);
        while (r);
        return o;
      }
      function z1(t, r) {
        return E3(hl(t, r, At), t + "");
      }
      function J6(t) {
        return g0(v2(t));
      }
      function X6(t, r) {
        var o = v2(t);
        return Qr(o, Ue(r, 0, o.length));
      }
      function Y2(t, r, o, s) {
        if (!Q1(t))
          return t;
        r = De(r, t);
        for (var c = -1, f = r.length, g = f - 1, x = t; x != null && ++c < f; ) {
          var _ = ie(r[c]), B = o;
          if (_ === "__proto__" || _ === "constructor" || _ === "prototype")
            return t;
          if (c != g) {
            var O = x[_];
            B = s ? s(O, _, x) : n, B === n && (B = Q1(O) ? O : me(r[c + 1]) ? [] : {});
          }
          W2(x, _, B), x = x[_];
        }
        return t;
      }
      var O0 = Ir ? function(t, r) {
        return Ir.set(t, r), t;
      } : At, Q6 = Lr ? function(t, r) {
        return Lr(t, "toString", {
          configurable: !0,
          enumerable: !1,
          value: I3(r),
          writable: !0
        });
      } : At;
      function t7(t) {
        return Qr(v2(t));
      }
      function Gt(t, r, o) {
        var s = -1, c = t.length;
        r < 0 && (r = -r > c ? 0 : c + r), o = o > c ? c : o, o < 0 && (o += c), c = r > o ? 0 : o - r >>> 0, r >>>= 0;
        for (var f = C(c); ++s < c; )
          f[s] = t[s + r];
        return f;
      }
      function e7(t, r) {
        var o;
        return Ae(t, function(s, c, f) {
          return o = r(s, c, f), !o;
        }), !!o;
      }
      function Ur(t, r, o) {
        var s = 0, c = t == null ? s : t.length;
        if (typeof r == "number" && r === r && c <= o1) {
          for (; s < c; ) {
            var f = s + c >>> 1, g = t[f];
            g !== null && !Rt(g) && (o ? g <= r : g < r) ? s = f + 1 : c = f;
          }
          return c;
        }
        return u3(t, r, At, o);
      }
      function u3(t, r, o, s) {
        var c = 0, f = t == null ? 0 : t.length;
        if (f === 0)
          return 0;
        r = o(r);
        for (var g = r !== r, x = r === null, _ = Rt(r), B = r === n; c < f; ) {
          var O = Rr((c + f) / 2), P = o(t[O]), q = P !== n, X = P === null, n1 = P === P, w1 = Rt(P);
          if (g)
            var i1 = s || n1;
          else
            B ? i1 = n1 && (s || q) : x ? i1 = n1 && q && (s || !X) : _ ? i1 = n1 && q && !X && (s || !w1) : X || w1 ? i1 = !1 : i1 = s ? P <= r : P < r;
          i1 ? c = O + 1 : f = O;
        }
        return gt(f, a1);
      }
      function R0(t, r) {
        for (var o = -1, s = t.length, c = 0, f = []; ++o < s; ) {
          var g = t[o], x = r ? r(g) : g;
          if (!o || !Qt(x, _)) {
            var _ = x;
            f[c++] = g === 0 ? 0 : g;
          }
        }
        return f;
      }
      function I0(t) {
        return typeof t == "number" ? t : Rt(t) ? V : +t;
      }
      function Ot(t) {
        if (typeof t == "string")
          return t;
        if (m1(t))
          return j1(t, Ot) + "";
        if (Rt(t))
          return p0 ? p0.call(t) : "";
        var r = t + "";
        return r == "0" && 1 / t == -G1 ? "-0" : r;
      }
      function Se(t, r, o) {
        var s = -1, c = yr, f = t.length, g = !0, x = [], _ = x;
        if (o)
          g = !1, c = Nn;
        else if (f >= h) {
          var B = r ? null : f7(t);
          if (B)
            return _r(B);
          g = !1, c = I2, _ = new We();
        } else
          _ = r ? [] : x;
        t:
          for (; ++s < f; ) {
            var O = t[s], P = r ? r(O) : O;
            if (O = o || O !== 0 ? O : 0, g && P === P) {
              for (var q = _.length; q--; )
                if (_[q] === P)
                  continue t;
              r && _.push(P), x.push(O);
            } else
              c(_, P, o) || (_ !== x && _.push(P), x.push(O));
          }
        return x;
      }
      function f3(t, r) {
        return r = De(r, t), t = ul(t, r), t == null || delete t[ie(Kt(r))];
      }
      function P0(t, r, o, s) {
        return Y2(t, r, o(Ge(t, r)), s);
      }
      function Gr(t, r, o, s) {
        for (var c = t.length, f = s ? c : -1; (s ? f-- : ++f < c) && r(t[f], f, t); )
          ;
        return o ? Gt(t, s ? 0 : f, s ? f + 1 : c) : Gt(t, s ? f + 1 : 0, s ? c : f);
      }
      function V0(t, r) {
        var o = t;
        return o instanceof H1 && (o = o.value()), kn(r, function(s, c) {
          return c.func.apply(c.thisArg, _e([s], c.args));
        }, o);
      }
      function d3(t, r, o) {
        var s = t.length;
        if (s < 2)
          return s ? Se(t[0]) : [];
        for (var c = -1, f = C(s); ++c < s; )
          for (var g = t[c], x = -1; ++x < s; )
            x != c && (f[c] = U2(f[c] || g, t[x], r, o));
        return Se(vt(f, 1), r, o);
      }
      function N0(t, r, o) {
        for (var s = -1, c = t.length, f = r.length, g = {}; ++s < c; ) {
          var x = s < f ? r[s] : n;
          o(g, t[s], x);
        }
        return g;
      }
      function v3(t) {
        return lt(t) ? t : [];
      }
      function p3(t) {
        return typeof t == "function" ? t : At;
      }
      function De(t, r) {
        return m1(t) ? t : H3(t, r) ? [t] : pl(T1(t));
      }
      var r7 = z1;
      function Ce(t, r, o) {
        var s = t.length;
        return o = o === n ? s : o, !r && o >= s ? t : Gt(t, r, o);
      }
      var k0 = Wa || function(t) {
        return dt.clearTimeout(t);
      };
      function $0(t, r) {
        if (r)
          return t.slice();
        var o = t.length, s = c0 ? c0(o) : new t.constructor(o);
        return t.copy(s), s;
      }
      function m3(t) {
        var r = new t.constructor(t.byteLength);
        return new Cr(r).set(new Cr(t)), r;
      }
      function n7(t, r) {
        var o = r ? m3(t.buffer) : t.buffer;
        return new t.constructor(o, t.byteOffset, t.byteLength);
      }
      function i7(t) {
        var r = new t.constructor(t.source, C1.exec(t));
        return r.lastIndex = t.lastIndex, r;
      }
      function l7(t) {
        return $2 ? N1($2.call(t)) : {};
      }
      function W0(t, r) {
        var o = r ? m3(t.buffer) : t.buffer;
        return new t.constructor(o, t.byteOffset, t.length);
      }
      function U0(t, r) {
        if (t !== r) {
          var o = t !== n, s = t === null, c = t === t, f = Rt(t), g = r !== n, x = r === null, _ = r === r, B = Rt(r);
          if (!x && !B && !f && t > r || f && g && _ && !x && !B || s && g && _ || !o && _ || !c)
            return 1;
          if (!s && !f && !B && t < r || B && o && c && !s && !f || x && o && c || !g && c || !_)
            return -1;
        }
        return 0;
      }
      function a7(t, r, o) {
        for (var s = -1, c = t.criteria, f = r.criteria, g = c.length, x = o.length; ++s < g; ) {
          var _ = U0(c[s], f[s]);
          if (_) {
            if (s >= x)
              return _;
            var B = o[s];
            return _ * (B == "desc" ? -1 : 1);
          }
        }
        return t.index - r.index;
      }
      function G0(t, r, o, s) {
        for (var c = -1, f = t.length, g = o.length, x = -1, _ = r.length, B = ht(f - g, 0), O = C(_ + B), P = !s; ++x < _; )
          O[x] = r[x];
        for (; ++c < g; )
          (P || c < f) && (O[o[c]] = t[c]);
        for (; B--; )
          O[x++] = t[c++];
        return O;
      }
      function K0(t, r, o, s) {
        for (var c = -1, f = t.length, g = -1, x = o.length, _ = -1, B = r.length, O = ht(f - x, 0), P = C(O + B), q = !s; ++c < O; )
          P[c] = t[c];
        for (var X = c; ++_ < B; )
          P[X + _] = r[_];
        for (; ++g < x; )
          (q || c < f) && (P[X + o[g]] = t[c++]);
        return P;
      }
      function _t(t, r) {
        var o = -1, s = t.length;
        for (r || (r = C(s)); ++o < s; )
          r[o] = t[o];
        return r;
      }
      function ne(t, r, o, s) {
        var c = !o;
        o || (o = {});
        for (var f = -1, g = r.length; ++f < g; ) {
          var x = r[f], _ = s ? s(o[x], t[x], x, o, t) : n;
          _ === n && (_ = t[x]), c ? de(o, x, _) : W2(o, x, _);
        }
        return o;
      }
      function o7(t, r) {
        return ne(t, y3(t), r);
      }
      function s7(t, r) {
        return ne(t, ll(t), r);
      }
      function Kr(t, r) {
        return function(o, s) {
          var c = m1(o) ? da : D6, f = r ? r() : {};
          return c(o, t, e1(s, 2), f);
        };
      }
      function h2(t) {
        return z1(function(r, o) {
          var s = -1, c = o.length, f = c > 1 ? o[c - 1] : n, g = c > 2 ? o[2] : n;
          for (f = t.length > 3 && typeof f == "function" ? (c--, f) : n, g && Mt(o[0], o[1], g) && (f = c < 3 ? n : f, c = 1), r = N1(r); ++s < c; ) {
            var x = o[s];
            x && t(r, x, s, f);
          }
          return r;
        });
      }
      function Y0(t, r) {
        return function(o, s) {
          if (o == null)
            return o;
          if (!bt(o))
            return t(o, s);
          for (var c = o.length, f = r ? c : -1, g = N1(o); (r ? f-- : ++f < c) && s(g[f], f, g) !== !1; )
            ;
          return o;
        };
      }
      function q0(t) {
        return function(r, o, s) {
          for (var c = -1, f = N1(r), g = s(r), x = g.length; x--; ) {
            var _ = g[t ? x : ++c];
            if (o(f[_], _, f) === !1)
              break;
          }
          return r;
        };
      }
      function c7(t, r, o) {
        var s = r & y, c = q2(t);
        function f() {
          var g = this && this !== dt && this instanceof f ? c : t;
          return g.apply(s ? o : this, arguments);
        }
        return f;
      }
      function j0(t) {
        return function(r) {
          r = T1(r);
          var o = n2(r) ? Jt(r) : n, s = o ? o[0] : r.charAt(0), c = o ? Ce(o, 1).join("") : r.slice(1);
          return s[t]() + c;
        };
      }
      function u2(t) {
        return function(r) {
          return kn(Yl(Kl(r).replace(Q5, "")), t, "");
        };
      }
      function q2(t) {
        return function() {
          var r = arguments;
          switch (r.length) {
            case 0:
              return new t();
            case 1:
              return new t(r[0]);
            case 2:
              return new t(r[0], r[1]);
            case 3:
              return new t(r[0], r[1], r[2]);
            case 4:
              return new t(r[0], r[1], r[2], r[3]);
            case 5:
              return new t(r[0], r[1], r[2], r[3], r[4]);
            case 6:
              return new t(r[0], r[1], r[2], r[3], r[4], r[5]);
            case 7:
              return new t(r[0], r[1], r[2], r[3], r[4], r[5], r[6]);
          }
          var o = c2(t.prototype), s = t.apply(o, r);
          return Q1(s) ? s : o;
        };
      }
      function h7(t, r, o) {
        var s = q2(t);
        function c() {
          for (var f = arguments.length, g = C(f), x = f, _ = f2(c); x--; )
            g[x] = arguments[x];
          var B = f < 3 && g[0] !== _ && g[f - 1] !== _ ? [] : be(g, _);
          if (f -= B.length, f < o)
            return tl(
              t,
              r,
              Yr,
              c.placeholder,
              n,
              g,
              B,
              n,
              n,
              o - f
            );
          var O = this && this !== dt && this instanceof c ? s : t;
          return Bt(O, this, g);
        }
        return c;
      }
      function Z0(t) {
        return function(r, o, s) {
          var c = N1(r);
          if (!bt(r)) {
            var f = e1(o, 3);
            r = ut(r), o = function(x) {
              return f(c[x], x, c);
            };
          }
          var g = t(r, o, s);
          return g > -1 ? c[f ? r[g] : g] : n;
        };
      }
      function J0(t) {
        return pe(function(r) {
          var o = r.length, s = o, c = Wt.prototype.thru;
          for (t && r.reverse(); s--; ) {
            var f = r[s];
            if (typeof f != "function")
              throw new $t(p);
            if (c && !g && Jr(f) == "wrapper")
              var g = new Wt([], !0);
          }
          for (s = g ? s : o; ++s < o; ) {
            f = r[s];
            var x = Jr(f), _ = x == "wrapper" ? M3(f) : n;
            _ && _3(_[0]) && _[1] == (K | W | S | b1) && !_[4].length && _[9] == 1 ? g = g[Jr(_[0])].apply(g, _[3]) : g = f.length == 1 && _3(f) ? g[x]() : g.thru(f);
          }
          return function() {
            var B = arguments, O = B[0];
            if (g && B.length == 1 && m1(O))
              return g.plant(O).value();
            for (var P = 0, q = o ? r[P].apply(this, B) : O; ++P < o; )
              q = r[P].call(this, q);
            return q;
          };
        });
      }
      function Yr(t, r, o, s, c, f, g, x, _, B) {
        var O = r & K, P = r & y, q = r & L, X = r & (W | j), n1 = r & f1, w1 = q ? n : q2(t);
        function i1() {
          for (var F1 = arguments.length, _1 = C(F1), It = F1; It--; )
            _1[It] = arguments[It];
          if (X)
            var Ft = f2(i1), Pt = Fa(_1, Ft);
          if (s && (_1 = G0(_1, s, c, X)), f && (_1 = K0(_1, f, g, X)), F1 -= Pt, X && F1 < B) {
            var at = be(_1, Ft);
            return tl(
              t,
              r,
              Yr,
              i1.placeholder,
              o,
              _1,
              at,
              x,
              _,
              B - F1
            );
          }
          var te = P ? o : this, ze = q ? te[t] : t;
          return F1 = _1.length, x ? _1 = D7(_1, x) : n1 && F1 > 1 && _1.reverse(), O && _ < F1 && (_1.length = _), this && this !== dt && this instanceof i1 && (ze = w1 || q2(ze)), ze.apply(te, _1);
        }
        return i1;
      }
      function X0(t, r) {
        return function(o, s) {
          return P6(o, t, r(s), {});
        };
      }
      function qr(t, r) {
        return function(o, s) {
          var c;
          if (o === n && s === n)
            return r;
          if (o !== n && (c = o), s !== n) {
            if (c === n)
              return s;
            typeof o == "string" || typeof s == "string" ? (o = Ot(o), s = Ot(s)) : (o = I0(o), s = I0(s)), c = t(o, s);
          }
          return c;
        };
      }
      function g3(t) {
        return pe(function(r) {
          return r = j1(r, Lt(e1())), z1(function(o) {
            var s = this;
            return t(r, function(c) {
              return Bt(c, s, o);
            });
          });
        });
      }
      function jr(t, r) {
        r = r === n ? " " : Ot(r);
        var o = r.length;
        if (o < 2)
          return o ? h3(r, t) : r;
        var s = h3(r, Or(t / i2(r)));
        return n2(r) ? Ce(Jt(s), 0, t).join("") : s.slice(0, t);
      }
      function u7(t, r, o, s) {
        var c = r & y, f = q2(t);
        function g() {
          for (var x = -1, _ = arguments.length, B = -1, O = s.length, P = C(O + _), q = this && this !== dt && this instanceof g ? f : t; ++B < O; )
            P[B] = s[B];
          for (; _--; )
            P[B++] = arguments[++x];
          return Bt(q, c ? o : this, P);
        }
        return g;
      }
      function Q0(t) {
        return function(r, o, s) {
          return s && typeof s != "number" && Mt(r, o, s) && (o = s = n), r = we(r), o === n ? (o = r, r = 0) : o = we(o), s = s === n ? r < o ? 1 : -1 : we(s), Z6(r, o, s, t);
        };
      }
      function Zr(t) {
        return function(r, o) {
          return typeof r == "string" && typeof o == "string" || (r = Yt(r), o = Yt(o)), t(r, o);
        };
      }
      function tl(t, r, o, s, c, f, g, x, _, B) {
        var O = r & W, P = O ? g : n, q = O ? n : g, X = O ? f : n, n1 = O ? n : f;
        r |= O ? S : Q, r &= ~(O ? Q : S), r & $ || (r &= ~(y | L));
        var w1 = [
          t,
          r,
          c,
          X,
          P,
          n1,
          q,
          x,
          _,
          B
        ], i1 = o.apply(n, w1);
        return _3(t) && fl(i1, w1), i1.placeholder = s, dl(i1, t, r);
      }
      function w3(t) {
        var r = ct[t];
        return function(o, s) {
          if (o = Yt(o), s = s == null ? 0 : gt(g1(s), 292), s && d0(o)) {
            var c = (T1(o) + "e").split("e"), f = r(c[0] + "e" + (+c[1] + s));
            return c = (T1(f) + "e").split("e"), +(c[0] + "e" + (+c[1] - s));
          }
          return r(o);
        };
      }
      var f7 = o2 && 1 / _r(new o2([, -0]))[1] == G1 ? function(t) {
        return new o2(t);
      } : N3;
      function el(t) {
        return function(r) {
          var o = wt(r);
          return o == G ? qn(r) : o == Tt ? Sa(r) : Ma(r, t(r));
        };
      }
      function ve(t, r, o, s, c, f, g, x) {
        var _ = r & L;
        if (!_ && typeof t != "function")
          throw new $t(p);
        var B = s ? s.length : 0;
        if (B || (r &= ~(S | Q), s = c = n), g = g === n ? g : ht(g1(g), 0), x = x === n ? x : g1(x), B -= c ? c.length : 0, r & Q) {
          var O = s, P = c;
          s = c = n;
        }
        var q = _ ? n : M3(t), X = [
          t,
          r,
          o,
          s,
          c,
          O,
          P,
          f,
          g,
          x
        ];
        if (q && E7(X, q), t = X[0], r = X[1], o = X[2], s = X[3], c = X[4], x = X[9] = X[9] === n ? _ ? 0 : t.length : ht(X[9] - B, 0), !x && r & (W | j) && (r &= ~(W | j)), !r || r == y)
          var n1 = c7(t, r, o);
        else
          r == W || r == j ? n1 = h7(t, r, x) : (r == S || r == (y | S)) && !c.length ? n1 = u7(t, r, o, s) : n1 = Yr.apply(n, X);
        var w1 = q ? O0 : fl;
        return dl(w1(n1, X), t, r);
      }
      function rl(t, r, o, s) {
        return t === n || Qt(t, a2[o]) && !P1.call(s, o) ? r : t;
      }
      function nl(t, r, o, s, c, f) {
        return Q1(t) && Q1(r) && (f.set(r, t), Wr(t, r, n, nl, f), f.delete(r)), t;
      }
      function d7(t) {
        return J2(t) ? n : t;
      }
      function il(t, r, o, s, c, f) {
        var g = o & I, x = t.length, _ = r.length;
        if (x != _ && !(g && _ > x))
          return !1;
        var B = f.get(t), O = f.get(r);
        if (B && O)
          return B == r && O == t;
        var P = -1, q = !0, X = o & w ? new We() : n;
        for (f.set(t, r), f.set(r, t); ++P < x; ) {
          var n1 = t[P], w1 = r[P];
          if (s)
            var i1 = g ? s(w1, n1, P, r, t, f) : s(n1, w1, P, t, r, f);
          if (i1 !== n) {
            if (i1)
              continue;
            q = !1;
            break;
          }
          if (X) {
            if (!$n(r, function(F1, _1) {
              if (!I2(X, _1) && (n1 === F1 || c(n1, F1, o, s, f)))
                return X.push(_1);
            })) {
              q = !1;
              break;
            }
          } else if (!(n1 === w1 || c(n1, w1, o, s, f))) {
            q = !1;
            break;
          }
        }
        return f.delete(t), f.delete(r), q;
      }
      function v7(t, r, o, s, c, f, g) {
        switch (o) {
          case ye:
            if (t.byteLength != r.byteLength || t.byteOffset != r.byteOffset)
              return !1;
            t = t.buffer, r = r.buffer;
          case jt:
            return !(t.byteLength != r.byteLength || !f(new Cr(t), new Cr(r)));
          case h1:
          case v1:
          case V1:
            return Qt(+t, +r);
          case K1:
            return t.name == r.name && t.message == r.message;
          case se:
          case ce:
            return t == r + "";
          case G:
            var x = qn;
          case Tt:
            var _ = s & I;
            if (x || (x = _r), t.size != r.size && !_)
              return !1;
            var B = g.get(t);
            if (B)
              return B == r;
            s |= w, g.set(t, r);
            var O = il(x(t), x(r), s, c, f, g);
            return g.delete(t), O;
          case Je:
            if ($2)
              return $2.call(t) == $2.call(r);
        }
        return !1;
      }
      function p7(t, r, o, s, c, f) {
        var g = o & I, x = z3(t), _ = x.length, B = z3(r), O = B.length;
        if (_ != O && !g)
          return !1;
        for (var P = _; P--; ) {
          var q = x[P];
          if (!(g ? q in r : P1.call(r, q)))
            return !1;
        }
        var X = f.get(t), n1 = f.get(r);
        if (X && n1)
          return X == r && n1 == t;
        var w1 = !0;
        f.set(t, r), f.set(r, t);
        for (var i1 = g; ++P < _; ) {
          q = x[P];
          var F1 = t[q], _1 = r[q];
          if (s)
            var It = g ? s(_1, F1, q, r, t, f) : s(F1, _1, q, t, r, f);
          if (!(It === n ? F1 === _1 || c(F1, _1, o, s, f) : It)) {
            w1 = !1;
            break;
          }
          i1 || (i1 = q == "constructor");
        }
        if (w1 && !i1) {
          var Ft = t.constructor, Pt = r.constructor;
          Ft != Pt && "constructor" in t && "constructor" in r && !(typeof Ft == "function" && Ft instanceof Ft && typeof Pt == "function" && Pt instanceof Pt) && (w1 = !1);
        }
        return f.delete(t), f.delete(r), w1;
      }
      function pe(t) {
        return E3(hl(t, n, zl), t + "");
      }
      function z3(t) {
        return H0(t, ut, y3);
      }
      function x3(t) {
        return H0(t, Et, ll);
      }
      var M3 = Ir ? function(t) {
        return Ir.get(t);
      } : N3;
      function Jr(t) {
        for (var r = t.name + "", o = s2[r], s = P1.call(s2, r) ? o.length : 0; s--; ) {
          var c = o[s], f = c.func;
          if (f == null || f == t)
            return c.name;
        }
        return r;
      }
      function f2(t) {
        var r = P1.call(u, "placeholder") ? u : t;
        return r.placeholder;
      }
      function e1() {
        var t = u.iteratee || P3;
        return t = t === P3 ? E0 : t, arguments.length ? t(arguments[0], arguments[1]) : t;
      }
      function Xr(t, r) {
        var o = t.__data__;
        return y7(r) ? o[typeof r == "string" ? "string" : "hash"] : o.map;
      }
      function F3(t) {
        for (var r = ut(t), o = r.length; o--; ) {
          var s = r[o], c = t[s];
          r[o] = [s, c, sl(c)];
        }
        return r;
      }
      function Ke(t, r) {
        var o = ba(t, r);
        return b0(o) ? o : n;
      }
      function m7(t) {
        var r = P1.call(t, ke), o = t[ke];
        try {
          t[ke] = n;
          var s = !0;
        } catch {
        }
        var c = Sr.call(t);
        return s && (r ? t[ke] = o : delete t[ke]), c;
      }
      var y3 = Zn ? function(t) {
        return t == null ? [] : (t = N1(t), He(Zn(t), function(r) {
          return u0.call(t, r);
        }));
      } : k3, ll = Zn ? function(t) {
        for (var r = []; t; )
          _e(r, y3(t)), t = Tr(t);
        return r;
      } : k3, wt = xt;
      (Jn && wt(new Jn(new ArrayBuffer(1))) != ye || V2 && wt(new V2()) != G || Xn && wt(Xn.resolve()) != Ct || o2 && wt(new o2()) != Tt || N2 && wt(new N2()) != Fe) && (wt = function(t) {
        var r = xt(t), o = r == Y1 ? t.constructor : n, s = o ? Ye(o) : "";
        if (s)
          switch (s) {
            case Xa:
              return ye;
            case Qa:
              return G;
            case t6:
              return Ct;
            case e6:
              return Tt;
            case r6:
              return Fe;
          }
        return r;
      });
      function g7(t, r, o) {
        for (var s = -1, c = o.length; ++s < c; ) {
          var f = o[s], g = f.size;
          switch (f.type) {
            case "drop":
              t += g;
              break;
            case "dropRight":
              r -= g;
              break;
            case "take":
              r = gt(r, t + g);
              break;
            case "takeRight":
              t = ht(t, r - g);
              break;
          }
        }
        return { start: t, end: r };
      }
      function w7(t) {
        var r = t.match(Tn);
        return r ? r[1].split(z) : [];
      }
      function al(t, r, o) {
        r = De(r, t);
        for (var s = -1, c = r.length, f = !1; ++s < c; ) {
          var g = ie(r[s]);
          if (!(f = t != null && o(t, g)))
            break;
          t = t[g];
        }
        return f || ++s != c ? f : (c = t == null ? 0 : t.length, !!c && an(c) && me(g, c) && (m1(t) || qe(t)));
      }
      function z7(t) {
        var r = t.length, o = new t.constructor(r);
        return r && typeof t[0] == "string" && P1.call(t, "index") && (o.index = t.index, o.input = t.input), o;
      }
      function ol(t) {
        return typeof t.constructor == "function" && !j2(t) ? c2(Tr(t)) : {};
      }
      function x7(t, r, o) {
        var s = t.constructor;
        switch (r) {
          case jt:
            return m3(t);
          case h1:
          case v1:
            return new s(+t);
          case ye:
            return n7(t, o);
          case Xe:
          case Qe:
          case Ve:
          case E2:
          case A2:
          case S2:
          case D2:
          case C2:
          case T2:
            return W0(t, o);
          case G:
            return new s();
          case V1:
          case ce:
            return new s(t);
          case se:
            return i7(t);
          case Tt:
            return new s();
          case Je:
            return l7(t);
        }
      }
      function M7(t, r) {
        var o = r.length;
        if (!o)
          return t;
        var s = o - 1;
        return r[s] = (o > 1 ? "& " : "") + r[s], r = r.join(o > 2 ? ", " : " "), t.replace(Cn, `{
/* [wrapped with ` + r + `] */
`);
      }
      function F7(t) {
        return m1(t) || qe(t) || !!(f0 && t && t[f0]);
      }
      function me(t, r) {
        var o = typeof t;
        return r = r == null ? $1 : r, !!r && (o == "number" || o != "symbol" && et.test(t)) && t > -1 && t % 1 == 0 && t < r;
      }
      function Mt(t, r, o) {
        if (!Q1(o))
          return !1;
        var s = typeof r;
        return (s == "number" ? bt(o) && me(r, o.length) : s == "string" && r in o) ? Qt(o[r], t) : !1;
      }
      function H3(t, r) {
        if (m1(t))
          return !1;
        var o = typeof t;
        return o == "number" || o == "symbol" || o == "boolean" || t == null || Rt(t) ? !0 : zr.test(t) || !wr.test(t) || r != null && t in N1(r);
      }
      function y7(t) {
        var r = typeof t;
        return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? t !== "__proto__" : t === null;
      }
      function _3(t) {
        var r = Jr(t), o = u[r];
        if (typeof o != "function" || !(r in H1.prototype))
          return !1;
        if (t === o)
          return !0;
        var s = M3(o);
        return !!s && t === s[0];
      }
      function H7(t) {
        return !!s0 && s0 in t;
      }
      var _7 = Er ? ge : $3;
      function j2(t) {
        var r = t && t.constructor, o = typeof r == "function" && r.prototype || a2;
        return t === o;
      }
      function sl(t) {
        return t === t && !Q1(t);
      }
      function cl(t, r) {
        return function(o) {
          return o == null ? !1 : o[t] === r && (r !== n || t in N1(o));
        };
      }
      function b7(t) {
        var r = nn(t, function(s) {
          return o.size === E && o.clear(), s;
        }), o = r.cache;
        return r;
      }
      function E7(t, r) {
        var o = t[1], s = r[1], c = o | s, f = c < (y | L | K), g = s == K && o == W || s == K && o == b1 && t[7].length <= r[8] || s == (K | b1) && r[7].length <= r[8] && o == W;
        if (!(f || g))
          return t;
        s & y && (t[2] = r[2], c |= o & y ? 0 : $);
        var x = r[3];
        if (x) {
          var _ = t[3];
          t[3] = _ ? G0(_, x, r[4]) : x, t[4] = _ ? be(t[3], b) : r[4];
        }
        return x = r[5], x && (_ = t[5], t[5] = _ ? K0(_, x, r[6]) : x, t[6] = _ ? be(t[5], b) : r[6]), x = r[7], x && (t[7] = x), s & K && (t[8] = t[8] == null ? r[8] : gt(t[8], r[8])), t[9] == null && (t[9] = r[9]), t[0] = r[0], t[1] = c, t;
      }
      function A7(t) {
        var r = [];
        if (t != null)
          for (var o in N1(t))
            r.push(o);
        return r;
      }
      function S7(t) {
        return Sr.call(t);
      }
      function hl(t, r, o) {
        return r = ht(r === n ? t.length - 1 : r, 0), function() {
          for (var s = arguments, c = -1, f = ht(s.length - r, 0), g = C(f); ++c < f; )
            g[c] = s[r + c];
          c = -1;
          for (var x = C(r + 1); ++c < r; )
            x[c] = s[c];
          return x[r] = o(g), Bt(t, this, x);
        };
      }
      function ul(t, r) {
        return r.length < 2 ? t : Ge(t, Gt(r, 0, -1));
      }
      function D7(t, r) {
        for (var o = t.length, s = gt(r.length, o), c = _t(t); s--; ) {
          var f = r[s];
          t[s] = me(f, o) ? c[f] : n;
        }
        return t;
      }
      function b3(t, r) {
        if (!(r === "constructor" && typeof t[r] == "function") && r != "__proto__")
          return t[r];
      }
      var fl = vl(O0), Z2 = Ga || function(t, r) {
        return dt.setTimeout(t, r);
      }, E3 = vl(Q6);
      function dl(t, r, o) {
        var s = r + "";
        return E3(t, M7(s, C7(w7(s), o)));
      }
      function vl(t) {
        var r = 0, o = 0;
        return function() {
          var s = ja(), c = k1 - (s - o);
          if (o = s, c > 0) {
            if (++r >= tt)
              return arguments[0];
          } else
            r = 0;
          return t.apply(n, arguments);
        };
      }
      function Qr(t, r) {
        var o = -1, s = t.length, c = s - 1;
        for (r = r === n ? s : r; ++o < r; ) {
          var f = c3(o, c), g = t[f];
          t[f] = t[o], t[o] = g;
        }
        return t.length = r, t;
      }
      var pl = b7(function(t) {
        var r = [];
        return t.charCodeAt(0) === 46 && r.push(""), t.replace(Sn, function(o, s, c, f) {
          r.push(c ? f.replace(c1, "$1") : s || o);
        }), r;
      });
      function ie(t) {
        if (typeof t == "string" || Rt(t))
          return t;
        var r = t + "";
        return r == "0" && 1 / t == -G1 ? "-0" : r;
      }
      function Ye(t) {
        if (t != null) {
          try {
            return Ar.call(t);
          } catch {
          }
          try {
            return t + "";
          } catch {
          }
        }
        return "";
      }
      function C7(t, r) {
        return kt(t1, function(o) {
          var s = "_." + o[0];
          r & o[1] && !yr(t, s) && t.push(s);
        }), t.sort();
      }
      function ml(t) {
        if (t instanceof H1)
          return t.clone();
        var r = new Wt(t.__wrapped__, t.__chain__);
        return r.__actions__ = _t(t.__actions__), r.__index__ = t.__index__, r.__values__ = t.__values__, r;
      }
      function T7(t, r, o) {
        (o ? Mt(t, r, o) : r === n) ? r = 1 : r = ht(g1(r), 0);
        var s = t == null ? 0 : t.length;
        if (!s || r < 1)
          return [];
        for (var c = 0, f = 0, g = C(Or(s / r)); c < s; )
          g[f++] = Gt(t, c, c += r);
        return g;
      }
      function B7(t) {
        for (var r = -1, o = t == null ? 0 : t.length, s = 0, c = []; ++r < o; ) {
          var f = t[r];
          f && (c[s++] = f);
        }
        return c;
      }
      function L7() {
        var t = arguments.length;
        if (!t)
          return [];
        for (var r = C(t - 1), o = arguments[0], s = t; s--; )
          r[s - 1] = arguments[s];
        return _e(m1(o) ? _t(o) : [o], vt(r, 1));
      }
      var O7 = z1(function(t, r) {
        return lt(t) ? U2(t, vt(r, 1, lt, !0)) : [];
      }), R7 = z1(function(t, r) {
        var o = Kt(r);
        return lt(o) && (o = n), lt(t) ? U2(t, vt(r, 1, lt, !0), e1(o, 2)) : [];
      }), I7 = z1(function(t, r) {
        var o = Kt(r);
        return lt(o) && (o = n), lt(t) ? U2(t, vt(r, 1, lt, !0), n, o) : [];
      });
      function P7(t, r, o) {
        var s = t == null ? 0 : t.length;
        return s ? (r = o || r === n ? 1 : g1(r), Gt(t, r < 0 ? 0 : r, s)) : [];
      }
      function V7(t, r, o) {
        var s = t == null ? 0 : t.length;
        return s ? (r = o || r === n ? 1 : g1(r), r = s - r, Gt(t, 0, r < 0 ? 0 : r)) : [];
      }
      function N7(t, r) {
        return t && t.length ? Gr(t, e1(r, 3), !0, !0) : [];
      }
      function k7(t, r) {
        return t && t.length ? Gr(t, e1(r, 3), !0) : [];
      }
      function $7(t, r, o, s) {
        var c = t == null ? 0 : t.length;
        return c ? (o && typeof o != "number" && Mt(t, r, o) && (o = 0, s = c), L6(t, r, o, s)) : [];
      }
      function gl(t, r, o) {
        var s = t == null ? 0 : t.length;
        if (!s)
          return -1;
        var c = o == null ? 0 : g1(o);
        return c < 0 && (c = ht(s + c, 0)), Hr(t, e1(r, 3), c);
      }
      function wl(t, r, o) {
        var s = t == null ? 0 : t.length;
        if (!s)
          return -1;
        var c = s - 1;
        return o !== n && (c = g1(o), c = o < 0 ? ht(s + c, 0) : gt(c, s - 1)), Hr(t, e1(r, 3), c, !0);
      }
      function zl(t) {
        var r = t == null ? 0 : t.length;
        return r ? vt(t, 1) : [];
      }
      function W7(t) {
        var r = t == null ? 0 : t.length;
        return r ? vt(t, G1) : [];
      }
      function U7(t, r) {
        var o = t == null ? 0 : t.length;
        return o ? (r = r === n ? 1 : g1(r), vt(t, r)) : [];
      }
      function G7(t) {
        for (var r = -1, o = t == null ? 0 : t.length, s = {}; ++r < o; ) {
          var c = t[r];
          s[c[0]] = c[1];
        }
        return s;
      }
      function xl(t) {
        return t && t.length ? t[0] : n;
      }
      function K7(t, r, o) {
        var s = t == null ? 0 : t.length;
        if (!s)
          return -1;
        var c = o == null ? 0 : g1(o);
        return c < 0 && (c = ht(s + c, 0)), r2(t, r, c);
      }
      function Y7(t) {
        var r = t == null ? 0 : t.length;
        return r ? Gt(t, 0, -1) : [];
      }
      var q7 = z1(function(t) {
        var r = j1(t, v3);
        return r.length && r[0] === t[0] ? i3(r) : [];
      }), j7 = z1(function(t) {
        var r = Kt(t), o = j1(t, v3);
        return r === Kt(o) ? r = n : o.pop(), o.length && o[0] === t[0] ? i3(o, e1(r, 2)) : [];
      }), Z7 = z1(function(t) {
        var r = Kt(t), o = j1(t, v3);
        return r = typeof r == "function" ? r : n, r && o.pop(), o.length && o[0] === t[0] ? i3(o, n, r) : [];
      });
      function J7(t, r) {
        return t == null ? "" : Ya.call(t, r);
      }
      function Kt(t) {
        var r = t == null ? 0 : t.length;
        return r ? t[r - 1] : n;
      }
      function X7(t, r, o) {
        var s = t == null ? 0 : t.length;
        if (!s)
          return -1;
        var c = s;
        return o !== n && (c = g1(o), c = c < 0 ? ht(s + c, 0) : gt(c, s - 1)), r === r ? Ca(t, r, c) : Hr(t, t0, c, !0);
      }
      function Q7(t, r) {
        return t && t.length ? C0(t, g1(r)) : n;
      }
      var to = z1(Ml);
      function Ml(t, r) {
        return t && t.length && r && r.length ? s3(t, r) : t;
      }
      function eo(t, r, o) {
        return t && t.length && r && r.length ? s3(t, r, e1(o, 2)) : t;
      }
      function ro(t, r, o) {
        return t && t.length && r && r.length ? s3(t, r, n, o) : t;
      }
      var no = pe(function(t, r) {
        var o = t == null ? 0 : t.length, s = t3(t, r);
        return L0(t, j1(r, function(c) {
          return me(c, o) ? +c : c;
        }).sort(U0)), s;
      });
      function io(t, r) {
        var o = [];
        if (!(t && t.length))
          return o;
        var s = -1, c = [], f = t.length;
        for (r = e1(r, 3); ++s < f; ) {
          var g = t[s];
          r(g, s, t) && (o.push(g), c.push(s));
        }
        return L0(t, c), o;
      }
      function A3(t) {
        return t == null ? t : Ja.call(t);
      }
      function lo(t, r, o) {
        var s = t == null ? 0 : t.length;
        return s ? (o && typeof o != "number" && Mt(t, r, o) ? (r = 0, o = s) : (r = r == null ? 0 : g1(r), o = o === n ? s : g1(o)), Gt(t, r, o)) : [];
      }
      function ao(t, r) {
        return Ur(t, r);
      }
      function oo(t, r, o) {
        return u3(t, r, e1(o, 2));
      }
      function so(t, r) {
        var o = t == null ? 0 : t.length;
        if (o) {
          var s = Ur(t, r);
          if (s < o && Qt(t[s], r))
            return s;
        }
        return -1;
      }
      function co(t, r) {
        return Ur(t, r, !0);
      }
      function ho(t, r, o) {
        return u3(t, r, e1(o, 2), !0);
      }
      function uo(t, r) {
        var o = t == null ? 0 : t.length;
        if (o) {
          var s = Ur(t, r, !0) - 1;
          if (Qt(t[s], r))
            return s;
        }
        return -1;
      }
      function fo(t) {
        return t && t.length ? R0(t) : [];
      }
      function vo(t, r) {
        return t && t.length ? R0(t, e1(r, 2)) : [];
      }
      function po(t) {
        var r = t == null ? 0 : t.length;
        return r ? Gt(t, 1, r) : [];
      }
      function mo(t, r, o) {
        return t && t.length ? (r = o || r === n ? 1 : g1(r), Gt(t, 0, r < 0 ? 0 : r)) : [];
      }
      function go(t, r, o) {
        var s = t == null ? 0 : t.length;
        return s ? (r = o || r === n ? 1 : g1(r), r = s - r, Gt(t, r < 0 ? 0 : r, s)) : [];
      }
      function wo(t, r) {
        return t && t.length ? Gr(t, e1(r, 3), !1, !0) : [];
      }
      function zo(t, r) {
        return t && t.length ? Gr(t, e1(r, 3)) : [];
      }
      var xo = z1(function(t) {
        return Se(vt(t, 1, lt, !0));
      }), Mo = z1(function(t) {
        var r = Kt(t);
        return lt(r) && (r = n), Se(vt(t, 1, lt, !0), e1(r, 2));
      }), Fo = z1(function(t) {
        var r = Kt(t);
        return r = typeof r == "function" ? r : n, Se(vt(t, 1, lt, !0), n, r);
      });
      function yo(t) {
        return t && t.length ? Se(t) : [];
      }
      function Ho(t, r) {
        return t && t.length ? Se(t, e1(r, 2)) : [];
      }
      function _o(t, r) {
        return r = typeof r == "function" ? r : n, t && t.length ? Se(t, n, r) : [];
      }
      function S3(t) {
        if (!(t && t.length))
          return [];
        var r = 0;
        return t = He(t, function(o) {
          if (lt(o))
            return r = ht(o.length, r), !0;
        }), Kn(r, function(o) {
          return j1(t, Wn(o));
        });
      }
      function Fl(t, r) {
        if (!(t && t.length))
          return [];
        var o = S3(t);
        return r == null ? o : j1(o, function(s) {
          return Bt(r, n, s);
        });
      }
      var bo = z1(function(t, r) {
        return lt(t) ? U2(t, r) : [];
      }), Eo = z1(function(t) {
        return d3(He(t, lt));
      }), Ao = z1(function(t) {
        var r = Kt(t);
        return lt(r) && (r = n), d3(He(t, lt), e1(r, 2));
      }), So = z1(function(t) {
        var r = Kt(t);
        return r = typeof r == "function" ? r : n, d3(He(t, lt), n, r);
      }), Do = z1(S3);
      function Co(t, r) {
        return N0(t || [], r || [], W2);
      }
      function To(t, r) {
        return N0(t || [], r || [], Y2);
      }
      var Bo = z1(function(t) {
        var r = t.length, o = r > 1 ? t[r - 1] : n;
        return o = typeof o == "function" ? (t.pop(), o) : n, Fl(t, o);
      });
      function yl(t) {
        var r = u(t);
        return r.__chain__ = !0, r;
      }
      function Lo(t, r) {
        return r(t), t;
      }
      function tn(t, r) {
        return r(t);
      }
      var Oo = pe(function(t) {
        var r = t.length, o = r ? t[0] : 0, s = this.__wrapped__, c = function(f) {
          return t3(f, t);
        };
        return r > 1 || this.__actions__.length || !(s instanceof H1) || !me(o) ? this.thru(c) : (s = s.slice(o, +o + (r ? 1 : 0)), s.__actions__.push({
          func: tn,
          args: [c],
          thisArg: n
        }), new Wt(s, this.__chain__).thru(function(f) {
          return r && !f.length && f.push(n), f;
        }));
      });
      function Ro() {
        return yl(this);
      }
      function Io() {
        return new Wt(this.value(), this.__chain__);
      }
      function Po() {
        this.__values__ === n && (this.__values__ = Il(this.value()));
        var t = this.__index__ >= this.__values__.length, r = t ? n : this.__values__[this.__index__++];
        return { done: t, value: r };
      }
      function Vo() {
        return this;
      }
      function No(t) {
        for (var r, o = this; o instanceof Vr; ) {
          var s = ml(o);
          s.__index__ = 0, s.__values__ = n, r ? c.__wrapped__ = s : r = s;
          var c = s;
          o = o.__wrapped__;
        }
        return c.__wrapped__ = t, r;
      }
      function ko() {
        var t = this.__wrapped__;
        if (t instanceof H1) {
          var r = t;
          return this.__actions__.length && (r = new H1(this)), r = r.reverse(), r.__actions__.push({
            func: tn,
            args: [A3],
            thisArg: n
          }), new Wt(r, this.__chain__);
        }
        return this.thru(A3);
      }
      function $o() {
        return V0(this.__wrapped__, this.__actions__);
      }
      var Wo = Kr(function(t, r, o) {
        P1.call(t, o) ? ++t[o] : de(t, o, 1);
      });
      function Uo(t, r, o) {
        var s = m1(t) ? Xi : B6;
        return o && Mt(t, r, o) && (r = n), s(t, e1(r, 3));
      }
      function Go(t, r) {
        var o = m1(t) ? He : F0;
        return o(t, e1(r, 3));
      }
      var Ko = Z0(gl), Yo = Z0(wl);
      function qo(t, r) {
        return vt(en(t, r), 1);
      }
      function jo(t, r) {
        return vt(en(t, r), G1);
      }
      function Zo(t, r, o) {
        return o = o === n ? 1 : g1(o), vt(en(t, r), o);
      }
      function Hl(t, r) {
        var o = m1(t) ? kt : Ae;
        return o(t, e1(r, 3));
      }
      function _l(t, r) {
        var o = m1(t) ? va : M0;
        return o(t, e1(r, 3));
      }
      var Jo = Kr(function(t, r, o) {
        P1.call(t, o) ? t[o].push(r) : de(t, o, [r]);
      });
      function Xo(t, r, o, s) {
        t = bt(t) ? t : v2(t), o = o && !s ? g1(o) : 0;
        var c = t.length;
        return o < 0 && (o = ht(c + o, 0)), on(t) ? o <= c && t.indexOf(r, o) > -1 : !!c && r2(t, r, o) > -1;
      }
      var Qo = z1(function(t, r, o) {
        var s = -1, c = typeof r == "function", f = bt(t) ? C(t.length) : [];
        return Ae(t, function(g) {
          f[++s] = c ? Bt(r, g, o) : G2(g, r, o);
        }), f;
      }), t8 = Kr(function(t, r, o) {
        de(t, o, r);
      });
      function en(t, r) {
        var o = m1(t) ? j1 : A0;
        return o(t, e1(r, 3));
      }
      function e8(t, r, o, s) {
        return t == null ? [] : (m1(r) || (r = r == null ? [] : [r]), o = s ? n : o, m1(o) || (o = o == null ? [] : [o]), T0(t, r, o));
      }
      var r8 = Kr(function(t, r, o) {
        t[o ? 0 : 1].push(r);
      }, function() {
        return [[], []];
      });
      function n8(t, r, o) {
        var s = m1(t) ? kn : r0, c = arguments.length < 3;
        return s(t, e1(r, 4), o, c, Ae);
      }
      function i8(t, r, o) {
        var s = m1(t) ? pa : r0, c = arguments.length < 3;
        return s(t, e1(r, 4), o, c, M0);
      }
      function l8(t, r) {
        var o = m1(t) ? He : F0;
        return o(t, ln(e1(r, 3)));
      }
      function a8(t) {
        var r = m1(t) ? g0 : J6;
        return r(t);
      }
      function o8(t, r, o) {
        (o ? Mt(t, r, o) : r === n) ? r = 1 : r = g1(r);
        var s = m1(t) ? A6 : X6;
        return s(t, r);
      }
      function s8(t) {
        var r = m1(t) ? S6 : t7;
        return r(t);
      }
      function c8(t) {
        if (t == null)
          return 0;
        if (bt(t))
          return on(t) ? i2(t) : t.length;
        var r = wt(t);
        return r == G || r == Tt ? t.size : a3(t).length;
      }
      function h8(t, r, o) {
        var s = m1(t) ? $n : e7;
        return o && Mt(t, r, o) && (r = n), s(t, e1(r, 3));
      }
      var u8 = z1(function(t, r) {
        if (t == null)
          return [];
        var o = r.length;
        return o > 1 && Mt(t, r[0], r[1]) ? r = [] : o > 2 && Mt(r[0], r[1], r[2]) && (r = [r[0]]), T0(t, vt(r, 1), []);
      }), rn = Ua || function() {
        return dt.Date.now();
      };
      function f8(t, r) {
        if (typeof r != "function")
          throw new $t(p);
        return t = g1(t), function() {
          if (--t < 1)
            return r.apply(this, arguments);
        };
      }
      function bl(t, r, o) {
        return r = o ? n : r, r = t && r == null ? t.length : r, ve(t, K, n, n, n, n, r);
      }
      function El(t, r) {
        var o;
        if (typeof r != "function")
          throw new $t(p);
        return t = g1(t), function() {
          return --t > 0 && (o = r.apply(this, arguments)), t <= 1 && (r = n), o;
        };
      }
      var D3 = z1(function(t, r, o) {
        var s = y;
        if (o.length) {
          var c = be(o, f2(D3));
          s |= S;
        }
        return ve(t, s, r, o, c);
      }), Al = z1(function(t, r, o) {
        var s = y | L;
        if (o.length) {
          var c = be(o, f2(Al));
          s |= S;
        }
        return ve(r, s, t, o, c);
      });
      function Sl(t, r, o) {
        r = o ? n : r;
        var s = ve(t, W, n, n, n, n, n, r);
        return s.placeholder = Sl.placeholder, s;
      }
      function Dl(t, r, o) {
        r = o ? n : r;
        var s = ve(t, j, n, n, n, n, n, r);
        return s.placeholder = Dl.placeholder, s;
      }
      function Cl(t, r, o) {
        var s, c, f, g, x, _, B = 0, O = !1, P = !1, q = !0;
        if (typeof t != "function")
          throw new $t(p);
        r = Yt(r) || 0, Q1(o) && (O = !!o.leading, P = "maxWait" in o, f = P ? ht(Yt(o.maxWait) || 0, r) : f, q = "trailing" in o ? !!o.trailing : q);
        function X(at) {
          var te = s, ze = c;
          return s = c = n, B = at, g = t.apply(ze, te), g;
        }
        function n1(at) {
          return B = at, x = Z2(F1, r), O ? X(at) : g;
        }
        function w1(at) {
          var te = at - _, ze = at - B, Zl = r - te;
          return P ? gt(Zl, f - ze) : Zl;
        }
        function i1(at) {
          var te = at - _, ze = at - B;
          return _ === n || te >= r || te < 0 || P && ze >= f;
        }
        function F1() {
          var at = rn();
          if (i1(at))
            return _1(at);
          x = Z2(F1, w1(at));
        }
        function _1(at) {
          return x = n, q && s ? X(at) : (s = c = n, g);
        }
        function It() {
          x !== n && k0(x), B = 0, s = _ = c = x = n;
        }
        function Ft() {
          return x === n ? g : _1(rn());
        }
        function Pt() {
          var at = rn(), te = i1(at);
          if (s = arguments, c = this, _ = at, te) {
            if (x === n)
              return n1(_);
            if (P)
              return k0(x), x = Z2(F1, r), X(_);
          }
          return x === n && (x = Z2(F1, r)), g;
        }
        return Pt.cancel = It, Pt.flush = Ft, Pt;
      }
      var d8 = z1(function(t, r) {
        return x0(t, 1, r);
      }), v8 = z1(function(t, r, o) {
        return x0(t, Yt(r) || 0, o);
      });
      function p8(t) {
        return ve(t, f1);
      }
      function nn(t, r) {
        if (typeof t != "function" || r != null && typeof r != "function")
          throw new $t(p);
        var o = function() {
          var s = arguments, c = r ? r.apply(this, s) : s[0], f = o.cache;
          if (f.has(c))
            return f.get(c);
          var g = t.apply(this, s);
          return o.cache = f.set(c, g) || f, g;
        };
        return o.cache = new (nn.Cache || fe)(), o;
      }
      nn.Cache = fe;
      function ln(t) {
        if (typeof t != "function")
          throw new $t(p);
        return function() {
          var r = arguments;
          switch (r.length) {
            case 0:
              return !t.call(this);
            case 1:
              return !t.call(this, r[0]);
            case 2:
              return !t.call(this, r[0], r[1]);
            case 3:
              return !t.call(this, r[0], r[1], r[2]);
          }
          return !t.apply(this, r);
        };
      }
      function m8(t) {
        return El(2, t);
      }
      var g8 = r7(function(t, r) {
        r = r.length == 1 && m1(r[0]) ? j1(r[0], Lt(e1())) : j1(vt(r, 1), Lt(e1()));
        var o = r.length;
        return z1(function(s) {
          for (var c = -1, f = gt(s.length, o); ++c < f; )
            s[c] = r[c].call(this, s[c]);
          return Bt(t, this, s);
        });
      }), C3 = z1(function(t, r) {
        var o = be(r, f2(C3));
        return ve(t, S, n, r, o);
      }), Tl = z1(function(t, r) {
        var o = be(r, f2(Tl));
        return ve(t, Q, n, r, o);
      }), w8 = pe(function(t, r) {
        return ve(t, b1, n, n, n, r);
      });
      function z8(t, r) {
        if (typeof t != "function")
          throw new $t(p);
        return r = r === n ? r : g1(r), z1(t, r);
      }
      function x8(t, r) {
        if (typeof t != "function")
          throw new $t(p);
        return r = r == null ? 0 : ht(g1(r), 0), z1(function(o) {
          var s = o[r], c = Ce(o, 0, r);
          return s && _e(c, s), Bt(t, this, c);
        });
      }
      function M8(t, r, o) {
        var s = !0, c = !0;
        if (typeof t != "function")
          throw new $t(p);
        return Q1(o) && (s = "leading" in o ? !!o.leading : s, c = "trailing" in o ? !!o.trailing : c), Cl(t, r, {
          leading: s,
          maxWait: r,
          trailing: c
        });
      }
      function F8(t) {
        return bl(t, 1);
      }
      function y8(t, r) {
        return C3(p3(r), t);
      }
      function H8() {
        if (!arguments.length)
          return [];
        var t = arguments[0];
        return m1(t) ? t : [t];
      }
      function _8(t) {
        return Ut(t, N);
      }
      function b8(t, r) {
        return r = typeof r == "function" ? r : n, Ut(t, N, r);
      }
      function E8(t) {
        return Ut(t, A | N);
      }
      function A8(t, r) {
        return r = typeof r == "function" ? r : n, Ut(t, A | N, r);
      }
      function S8(t, r) {
        return r == null || z0(t, r, ut(r));
      }
      function Qt(t, r) {
        return t === r || t !== t && r !== r;
      }
      var D8 = Zr(n3), C8 = Zr(function(t, r) {
        return t >= r;
      }), qe = _0(function() {
        return arguments;
      }()) ? _0 : function(t) {
        return rt(t) && P1.call(t, "callee") && !u0.call(t, "callee");
      }, m1 = C.isArray, T8 = Ki ? Lt(Ki) : V6;
      function bt(t) {
        return t != null && an(t.length) && !ge(t);
      }
      function lt(t) {
        return rt(t) && bt(t);
      }
      function B8(t) {
        return t === !0 || t === !1 || rt(t) && xt(t) == h1;
      }
      var Te = Ka || $3, L8 = Yi ? Lt(Yi) : N6;
      function O8(t) {
        return rt(t) && t.nodeType === 1 && !J2(t);
      }
      function R8(t) {
        if (t == null)
          return !0;
        if (bt(t) && (m1(t) || typeof t == "string" || typeof t.splice == "function" || Te(t) || d2(t) || qe(t)))
          return !t.length;
        var r = wt(t);
        if (r == G || r == Tt)
          return !t.size;
        if (j2(t))
          return !a3(t).length;
        for (var o in t)
          if (P1.call(t, o))
            return !1;
        return !0;
      }
      function I8(t, r) {
        return K2(t, r);
      }
      function P8(t, r, o) {
        o = typeof o == "function" ? o : n;
        var s = o ? o(t, r) : n;
        return s === n ? K2(t, r, n, o) : !!s;
      }
      function T3(t) {
        if (!rt(t))
          return !1;
        var r = xt(t);
        return r == K1 || r == p1 || typeof t.message == "string" && typeof t.name == "string" && !J2(t);
      }
      function V8(t) {
        return typeof t == "number" && d0(t);
      }
      function ge(t) {
        if (!Q1(t))
          return !1;
        var r = xt(t);
        return r == R || r == M1 || r == u1 || r == mt;
      }
      function Bl(t) {
        return typeof t == "number" && t == g1(t);
      }
      function an(t) {
        return typeof t == "number" && t > -1 && t % 1 == 0 && t <= $1;
      }
      function Q1(t) {
        var r = typeof t;
        return t != null && (r == "object" || r == "function");
      }
      function rt(t) {
        return t != null && typeof t == "object";
      }
      var Ll = qi ? Lt(qi) : $6;
      function N8(t, r) {
        return t === r || l3(t, r, F3(r));
      }
      function k8(t, r, o) {
        return o = typeof o == "function" ? o : n, l3(t, r, F3(r), o);
      }
      function $8(t) {
        return Ol(t) && t != +t;
      }
      function W8(t) {
        if (_7(t))
          throw new d1(v);
        return b0(t);
      }
      function U8(t) {
        return t === null;
      }
      function G8(t) {
        return t == null;
      }
      function Ol(t) {
        return typeof t == "number" || rt(t) && xt(t) == V1;
      }
      function J2(t) {
        if (!rt(t) || xt(t) != Y1)
          return !1;
        var r = Tr(t);
        if (r === null)
          return !0;
        var o = P1.call(r, "constructor") && r.constructor;
        return typeof o == "function" && o instanceof o && Ar.call(o) == Na;
      }
      var B3 = ji ? Lt(ji) : W6;
      function K8(t) {
        return Bl(t) && t >= -$1 && t <= $1;
      }
      var Rl = Zi ? Lt(Zi) : U6;
      function on(t) {
        return typeof t == "string" || !m1(t) && rt(t) && xt(t) == ce;
      }
      function Rt(t) {
        return typeof t == "symbol" || rt(t) && xt(t) == Je;
      }
      var d2 = Ji ? Lt(Ji) : G6;
      function Y8(t) {
        return t === n;
      }
      function q8(t) {
        return rt(t) && wt(t) == Fe;
      }
      function j8(t) {
        return rt(t) && xt(t) == dr;
      }
      var Z8 = Zr(o3), J8 = Zr(function(t, r) {
        return t <= r;
      });
      function Il(t) {
        if (!t)
          return [];
        if (bt(t))
          return on(t) ? Jt(t) : _t(t);
        if (P2 && t[P2])
          return Aa(t[P2]());
        var r = wt(t), o = r == G ? qn : r == Tt ? _r : v2;
        return o(t);
      }
      function we(t) {
        if (!t)
          return t === 0 ? t : 0;
        if (t = Yt(t), t === G1 || t === -G1) {
          var r = t < 0 ? -1 : 1;
          return r * pt;
        }
        return t === t ? t : 0;
      }
      function g1(t) {
        var r = we(t), o = r % 1;
        return r === r ? o ? r - o : r : 0;
      }
      function Pl(t) {
        return t ? Ue(g1(t), 0, U) : 0;
      }
      function Yt(t) {
        if (typeof t == "number")
          return t;
        if (Rt(t))
          return V;
        if (Q1(t)) {
          var r = typeof t.valueOf == "function" ? t.valueOf() : t;
          t = Q1(r) ? r + "" : r;
        }
        if (typeof t != "string")
          return t === 0 ? t : +t;
        t = n0(t);
        var o = x1.test(t);
        return o || X1.test(t) ? ua(t.slice(2), o ? 2 : 8) : y1.test(t) ? V : +t;
      }
      function Vl(t) {
        return ne(t, Et(t));
      }
      function X8(t) {
        return t ? Ue(g1(t), -$1, $1) : t === 0 ? t : 0;
      }
      function T1(t) {
        return t == null ? "" : Ot(t);
      }
      var Q8 = h2(function(t, r) {
        if (j2(r) || bt(r)) {
          ne(r, ut(r), t);
          return;
        }
        for (var o in r)
          P1.call(r, o) && W2(t, o, r[o]);
      }), Nl = h2(function(t, r) {
        ne(r, Et(r), t);
      }), sn = h2(function(t, r, o, s) {
        ne(r, Et(r), t, s);
      }), ts = h2(function(t, r, o, s) {
        ne(r, ut(r), t, s);
      }), es = pe(t3);
      function rs(t, r) {
        var o = c2(t);
        return r == null ? o : w0(o, r);
      }
      var ns = z1(function(t, r) {
        t = N1(t);
        var o = -1, s = r.length, c = s > 2 ? r[2] : n;
        for (c && Mt(r[0], r[1], c) && (s = 1); ++o < s; )
          for (var f = r[o], g = Et(f), x = -1, _ = g.length; ++x < _; ) {
            var B = g[x], O = t[B];
            (O === n || Qt(O, a2[B]) && !P1.call(t, B)) && (t[B] = f[B]);
          }
        return t;
      }), is = z1(function(t) {
        return t.push(n, nl), Bt(kl, n, t);
      });
      function ls(t, r) {
        return Qi(t, e1(r, 3), re);
      }
      function as(t, r) {
        return Qi(t, e1(r, 3), r3);
      }
      function os(t, r) {
        return t == null ? t : e3(t, e1(r, 3), Et);
      }
      function ss(t, r) {
        return t == null ? t : y0(t, e1(r, 3), Et);
      }
      function cs(t, r) {
        return t && re(t, e1(r, 3));
      }
      function hs(t, r) {
        return t && r3(t, e1(r, 3));
      }
      function us(t) {
        return t == null ? [] : $r(t, ut(t));
      }
      function fs(t) {
        return t == null ? [] : $r(t, Et(t));
      }
      function L3(t, r, o) {
        var s = t == null ? n : Ge(t, r);
        return s === n ? o : s;
      }
      function ds(t, r) {
        return t != null && al(t, r, O6);
      }
      function O3(t, r) {
        return t != null && al(t, r, R6);
      }
      var vs = X0(function(t, r, o) {
        r != null && typeof r.toString != "function" && (r = Sr.call(r)), t[r] = o;
      }, I3(At)), ps = X0(function(t, r, o) {
        r != null && typeof r.toString != "function" && (r = Sr.call(r)), P1.call(t, r) ? t[r].push(o) : t[r] = [o];
      }, e1), ms = z1(G2);
      function ut(t) {
        return bt(t) ? m0(t) : a3(t);
      }
      function Et(t) {
        return bt(t) ? m0(t, !0) : K6(t);
      }
      function gs(t, r) {
        var o = {};
        return r = e1(r, 3), re(t, function(s, c, f) {
          de(o, r(s, c, f), s);
        }), o;
      }
      function ws(t, r) {
        var o = {};
        return r = e1(r, 3), re(t, function(s, c, f) {
          de(o, c, r(s, c, f));
        }), o;
      }
      var zs = h2(function(t, r, o) {
        Wr(t, r, o);
      }), kl = h2(function(t, r, o, s) {
        Wr(t, r, o, s);
      }), xs = pe(function(t, r) {
        var o = {};
        if (t == null)
          return o;
        var s = !1;
        r = j1(r, function(f) {
          return f = De(f, t), s || (s = f.length > 1), f;
        }), ne(t, x3(t), o), s && (o = Ut(o, A | D | N, d7));
        for (var c = r.length; c--; )
          f3(o, r[c]);
        return o;
      });
      function Ms(t, r) {
        return $l(t, ln(e1(r)));
      }
      var Fs = pe(function(t, r) {
        return t == null ? {} : q6(t, r);
      });
      function $l(t, r) {
        if (t == null)
          return {};
        var o = j1(x3(t), function(s) {
          return [s];
        });
        return r = e1(r), B0(t, o, function(s, c) {
          return r(s, c[0]);
        });
      }
      function ys(t, r, o) {
        r = De(r, t);
        var s = -1, c = r.length;
        for (c || (c = 1, t = n); ++s < c; ) {
          var f = t == null ? n : t[ie(r[s])];
          f === n && (s = c, f = o), t = ge(f) ? f.call(t) : f;
        }
        return t;
      }
      function Hs(t, r, o) {
        return t == null ? t : Y2(t, r, o);
      }
      function _s(t, r, o, s) {
        return s = typeof s == "function" ? s : n, t == null ? t : Y2(t, r, o, s);
      }
      var Wl = el(ut), Ul = el(Et);
      function bs(t, r, o) {
        var s = m1(t), c = s || Te(t) || d2(t);
        if (r = e1(r, 4), o == null) {
          var f = t && t.constructor;
          c ? o = s ? new f() : [] : Q1(t) ? o = ge(f) ? c2(Tr(t)) : {} : o = {};
        }
        return (c ? kt : re)(t, function(g, x, _) {
          return r(o, g, x, _);
        }), o;
      }
      function Es(t, r) {
        return t == null ? !0 : f3(t, r);
      }
      function As(t, r, o) {
        return t == null ? t : P0(t, r, p3(o));
      }
      function Ss(t, r, o, s) {
        return s = typeof s == "function" ? s : n, t == null ? t : P0(t, r, p3(o), s);
      }
      function v2(t) {
        return t == null ? [] : Yn(t, ut(t));
      }
      function Ds(t) {
        return t == null ? [] : Yn(t, Et(t));
      }
      function Cs(t, r, o) {
        return o === n && (o = r, r = n), o !== n && (o = Yt(o), o = o === o ? o : 0), r !== n && (r = Yt(r), r = r === r ? r : 0), Ue(Yt(t), r, o);
      }
      function Ts(t, r, o) {
        return r = we(r), o === n ? (o = r, r = 0) : o = we(o), t = Yt(t), I6(t, r, o);
      }
      function Bs(t, r, o) {
        if (o && typeof o != "boolean" && Mt(t, r, o) && (r = o = n), o === n && (typeof r == "boolean" ? (o = r, r = n) : typeof t == "boolean" && (o = t, t = n)), t === n && r === n ? (t = 0, r = 1) : (t = we(t), r === n ? (r = t, t = 0) : r = we(r)), t > r) {
          var s = t;
          t = r, r = s;
        }
        if (o || t % 1 || r % 1) {
          var c = v0();
          return gt(t + c * (r - t + ha("1e-" + ((c + "").length - 1))), r);
        }
        return c3(t, r);
      }
      var Ls = u2(function(t, r, o) {
        return r = r.toLowerCase(), t + (o ? Gl(r) : r);
      });
      function Gl(t) {
        return R3(T1(t).toLowerCase());
      }
      function Kl(t) {
        return t = T1(t), t && t.replace(yt, ya).replace(ta, "");
      }
      function Os(t, r, o) {
        t = T1(t), r = Ot(r);
        var s = t.length;
        o = o === n ? s : Ue(g1(o), 0, s);
        var c = o;
        return o -= r.length, o >= 0 && t.slice(o, c) == r;
      }
      function Rs(t) {
        return t = T1(t), t && pr.test(t) ? t.replace(t2, Ha) : t;
      }
      function Is(t) {
        return t = T1(t), t && xr.test(t) ? t.replace(O2, "\\$&") : t;
      }
      var Ps = u2(function(t, r, o) {
        return t + (o ? "-" : "") + r.toLowerCase();
      }), Vs = u2(function(t, r, o) {
        return t + (o ? " " : "") + r.toLowerCase();
      }), Ns = j0("toLowerCase");
      function ks(t, r, o) {
        t = T1(t), r = g1(r);
        var s = r ? i2(t) : 0;
        if (!r || s >= r)
          return t;
        var c = (r - s) / 2;
        return jr(Rr(c), o) + t + jr(Or(c), o);
      }
      function $s(t, r, o) {
        t = T1(t), r = g1(r);
        var s = r ? i2(t) : 0;
        return r && s < r ? t + jr(r - s, o) : t;
      }
      function Ws(t, r, o) {
        t = T1(t), r = g1(r);
        var s = r ? i2(t) : 0;
        return r && s < r ? jr(r - s, o) + t : t;
      }
      function Us(t, r, o) {
        return o || r == null ? r = 0 : r && (r = +r), Za(T1(t).replace(R2, ""), r || 0);
      }
      function Gs(t, r, o) {
        return (o ? Mt(t, r, o) : r === n) ? r = 1 : r = g1(r), h3(T1(t), r);
      }
      function Ks() {
        var t = arguments, r = T1(t[0]);
        return t.length < 3 ? r : r.replace(t[1], t[2]);
      }
      var Ys = u2(function(t, r, o) {
        return t + (o ? "_" : "") + r.toLowerCase();
      });
      function qs(t, r, o) {
        return o && typeof o != "number" && Mt(t, r, o) && (r = o = n), o = o === n ? U : o >>> 0, o ? (t = T1(t), t && (typeof r == "string" || r != null && !B3(r)) && (r = Ot(r), !r && n2(t)) ? Ce(Jt(t), 0, o) : t.split(r, o)) : [];
      }
      var js = u2(function(t, r, o) {
        return t + (o ? " " : "") + R3(r);
      });
      function Zs(t, r, o) {
        return t = T1(t), o = o == null ? 0 : Ue(g1(o), 0, t.length), r = Ot(r), t.slice(o, o + r.length) == r;
      }
      function Js(t, r, o) {
        var s = u.templateSettings;
        o && Mt(t, r, o) && (r = n), t = T1(t), r = sn({}, r, s, rl);
        var c = sn({}, r.imports, s.imports, rl), f = ut(c), g = Yn(c, f), x, _, B = 0, O = r.interpolate || Zt, P = "__p += '", q = jn(
          (r.escape || Zt).source + "|" + O.source + "|" + (O === gr ? A1 : Zt).source + "|" + (r.evaluate || Zt).source + "|$",
          "g"
        ), X = "//# sourceURL=" + (P1.call(r, "sourceURL") ? (r.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++la + "]") + `
`;
        t.replace(q, function(i1, F1, _1, It, Ft, Pt) {
          return _1 || (_1 = It), P += t.slice(B, Pt).replace(Mr, _a), F1 && (x = !0, P += `' +
__e(` + F1 + `) +
'`), Ft && (_ = !0, P += `';
` + Ft + `;
__p += '`), _1 && (P += `' +
((__t = (` + _1 + `)) == null ? '' : __t) +
'`), B = Pt + i1.length, i1;
        }), P += `';
`;
        var n1 = P1.call(r, "variable") && r.variable;
        if (!n1)
          P = `with (obj) {
` + P + `
}
`;
        else if (Y.test(n1))
          throw new d1(M);
        P = (_ ? P.replace(En, "") : P).replace(B2, "$1").replace(vr, "$1;"), P = "function(" + (n1 || "obj") + `) {
` + (n1 ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (x ? ", __e = _.escape" : "") + (_ ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + P + `return __p
}`;
        var w1 = ql(function() {
          return S1(f, X + "return " + P).apply(n, g);
        });
        if (w1.source = P, T3(w1))
          throw w1;
        return w1;
      }
      function Xs(t) {
        return T1(t).toLowerCase();
      }
      function Qs(t) {
        return T1(t).toUpperCase();
      }
      function tc(t, r, o) {
        if (t = T1(t), t && (o || r === n))
          return n0(t);
        if (!t || !(r = Ot(r)))
          return t;
        var s = Jt(t), c = Jt(r), f = i0(s, c), g = l0(s, c) + 1;
        return Ce(s, f, g).join("");
      }
      function ec(t, r, o) {
        if (t = T1(t), t && (o || r === n))
          return t.slice(0, o0(t) + 1);
        if (!t || !(r = Ot(r)))
          return t;
        var s = Jt(t), c = l0(s, Jt(r)) + 1;
        return Ce(s, 0, c).join("");
      }
      function rc(t, r, o) {
        if (t = T1(t), t && (o || r === n))
          return t.replace(R2, "");
        if (!t || !(r = Ot(r)))
          return t;
        var s = Jt(t), c = i0(s, Jt(r));
        return Ce(s, c).join("");
      }
      function nc(t, r) {
        var o = l1, s = E1;
        if (Q1(r)) {
          var c = "separator" in r ? r.separator : c;
          o = "length" in r ? g1(r.length) : o, s = "omission" in r ? Ot(r.omission) : s;
        }
        t = T1(t);
        var f = t.length;
        if (n2(t)) {
          var g = Jt(t);
          f = g.length;
        }
        if (o >= f)
          return t;
        var x = o - i2(s);
        if (x < 1)
          return s;
        var _ = g ? Ce(g, 0, x).join("") : t.slice(0, x);
        if (c === n)
          return _ + s;
        if (g && (x += _.length - x), B3(c)) {
          if (t.slice(x).search(c)) {
            var B, O = _;
            for (c.global || (c = jn(c.source, T1(C1.exec(c)) + "g")), c.lastIndex = 0; B = c.exec(O); )
              var P = B.index;
            _ = _.slice(0, P === n ? x : P);
          }
        } else if (t.indexOf(Ot(c), x) != x) {
          var q = _.lastIndexOf(c);
          q > -1 && (_ = _.slice(0, q));
        }
        return _ + s;
      }
      function ic(t) {
        return t = T1(t), t && L2.test(t) ? t.replace(he, Ta) : t;
      }
      var lc = u2(function(t, r, o) {
        return t + (o ? " " : "") + r.toUpperCase();
      }), R3 = j0("toUpperCase");
      function Yl(t, r, o) {
        return t = T1(t), r = o ? n : r, r === n ? Ea(t) ? Oa(t) : wa(t) : t.match(r) || [];
      }
      var ql = z1(function(t, r) {
        try {
          return Bt(t, n, r);
        } catch (o) {
          return T3(o) ? o : new d1(o);
        }
      }), ac = pe(function(t, r) {
        return kt(r, function(o) {
          o = ie(o), de(t, o, D3(t[o], t));
        }), t;
      });
      function oc(t) {
        var r = t == null ? 0 : t.length, o = e1();
        return t = r ? j1(t, function(s) {
          if (typeof s[1] != "function")
            throw new $t(p);
          return [o(s[0]), s[1]];
        }) : [], z1(function(s) {
          for (var c = -1; ++c < r; ) {
            var f = t[c];
            if (Bt(f[0], this, s))
              return Bt(f[1], this, s);
          }
        });
      }
      function sc(t) {
        return T6(Ut(t, A));
      }
      function I3(t) {
        return function() {
          return t;
        };
      }
      function cc(t, r) {
        return t == null || t !== t ? r : t;
      }
      var hc = J0(), uc = J0(!0);
      function At(t) {
        return t;
      }
      function P3(t) {
        return E0(typeof t == "function" ? t : Ut(t, A));
      }
      function fc(t) {
        return S0(Ut(t, A));
      }
      function dc(t, r) {
        return D0(t, Ut(r, A));
      }
      var vc = z1(function(t, r) {
        return function(o) {
          return G2(o, t, r);
        };
      }), pc = z1(function(t, r) {
        return function(o) {
          return G2(t, o, r);
        };
      });
      function V3(t, r, o) {
        var s = ut(r), c = $r(r, s);
        o == null && !(Q1(r) && (c.length || !s.length)) && (o = r, r = t, t = this, c = $r(r, ut(r)));
        var f = !(Q1(o) && "chain" in o) || !!o.chain, g = ge(t);
        return kt(c, function(x) {
          var _ = r[x];
          t[x] = _, g && (t.prototype[x] = function() {
            var B = this.__chain__;
            if (f || B) {
              var O = t(this.__wrapped__), P = O.__actions__ = _t(this.__actions__);
              return P.push({ func: _, args: arguments, thisArg: t }), O.__chain__ = B, O;
            }
            return _.apply(t, _e([this.value()], arguments));
          });
        }), t;
      }
      function mc() {
        return dt._ === this && (dt._ = ka), this;
      }
      function N3() {
      }
      function gc(t) {
        return t = g1(t), z1(function(r) {
          return C0(r, t);
        });
      }
      var wc = g3(j1), zc = g3(Xi), xc = g3($n);
      function jl(t) {
        return H3(t) ? Wn(ie(t)) : j6(t);
      }
      function Mc(t) {
        return function(r) {
          return t == null ? n : Ge(t, r);
        };
      }
      var Fc = Q0(), yc = Q0(!0);
      function k3() {
        return [];
      }
      function $3() {
        return !1;
      }
      function Hc() {
        return {};
      }
      function _c() {
        return "";
      }
      function bc() {
        return !0;
      }
      function Ec(t, r) {
        if (t = g1(t), t < 1 || t > $1)
          return [];
        var o = U, s = gt(t, U);
        r = e1(r), t -= U;
        for (var c = Kn(s, r); ++o < t; )
          r(o);
        return c;
      }
      function Ac(t) {
        return m1(t) ? j1(t, ie) : Rt(t) ? [t] : _t(pl(T1(t)));
      }
      function Sc(t) {
        var r = ++Va;
        return T1(t) + r;
      }
      var Dc = qr(function(t, r) {
        return t + r;
      }, 0), Cc = w3("ceil"), Tc = qr(function(t, r) {
        return t / r;
      }, 1), Bc = w3("floor");
      function Lc(t) {
        return t && t.length ? kr(t, At, n3) : n;
      }
      function Oc(t, r) {
        return t && t.length ? kr(t, e1(r, 2), n3) : n;
      }
      function Rc(t) {
        return e0(t, At);
      }
      function Ic(t, r) {
        return e0(t, e1(r, 2));
      }
      function Pc(t) {
        return t && t.length ? kr(t, At, o3) : n;
      }
      function Vc(t, r) {
        return t && t.length ? kr(t, e1(r, 2), o3) : n;
      }
      var Nc = qr(function(t, r) {
        return t * r;
      }, 1), kc = w3("round"), $c = qr(function(t, r) {
        return t - r;
      }, 0);
      function Wc(t) {
        return t && t.length ? Gn(t, At) : 0;
      }
      function Uc(t, r) {
        return t && t.length ? Gn(t, e1(r, 2)) : 0;
      }
      return u.after = f8, u.ary = bl, u.assign = Q8, u.assignIn = Nl, u.assignInWith = sn, u.assignWith = ts, u.at = es, u.before = El, u.bind = D3, u.bindAll = ac, u.bindKey = Al, u.castArray = H8, u.chain = yl, u.chunk = T7, u.compact = B7, u.concat = L7, u.cond = oc, u.conforms = sc, u.constant = I3, u.countBy = Wo, u.create = rs, u.curry = Sl, u.curryRight = Dl, u.debounce = Cl, u.defaults = ns, u.defaultsDeep = is, u.defer = d8, u.delay = v8, u.difference = O7, u.differenceBy = R7, u.differenceWith = I7, u.drop = P7, u.dropRight = V7, u.dropRightWhile = N7, u.dropWhile = k7, u.fill = $7, u.filter = Go, u.flatMap = qo, u.flatMapDeep = jo, u.flatMapDepth = Zo, u.flatten = zl, u.flattenDeep = W7, u.flattenDepth = U7, u.flip = p8, u.flow = hc, u.flowRight = uc, u.fromPairs = G7, u.functions = us, u.functionsIn = fs, u.groupBy = Jo, u.initial = Y7, u.intersection = q7, u.intersectionBy = j7, u.intersectionWith = Z7, u.invert = vs, u.invertBy = ps, u.invokeMap = Qo, u.iteratee = P3, u.keyBy = t8, u.keys = ut, u.keysIn = Et, u.map = en, u.mapKeys = gs, u.mapValues = ws, u.matches = fc, u.matchesProperty = dc, u.memoize = nn, u.merge = zs, u.mergeWith = kl, u.method = vc, u.methodOf = pc, u.mixin = V3, u.negate = ln, u.nthArg = gc, u.omit = xs, u.omitBy = Ms, u.once = m8, u.orderBy = e8, u.over = wc, u.overArgs = g8, u.overEvery = zc, u.overSome = xc, u.partial = C3, u.partialRight = Tl, u.partition = r8, u.pick = Fs, u.pickBy = $l, u.property = jl, u.propertyOf = Mc, u.pull = to, u.pullAll = Ml, u.pullAllBy = eo, u.pullAllWith = ro, u.pullAt = no, u.range = Fc, u.rangeRight = yc, u.rearg = w8, u.reject = l8, u.remove = io, u.rest = z8, u.reverse = A3, u.sampleSize = o8, u.set = Hs, u.setWith = _s, u.shuffle = s8, u.slice = lo, u.sortBy = u8, u.sortedUniq = fo, u.sortedUniqBy = vo, u.split = qs, u.spread = x8, u.tail = po, u.take = mo, u.takeRight = go, u.takeRightWhile = wo, u.takeWhile = zo, u.tap = Lo, u.throttle = M8, u.thru = tn, u.toArray = Il, u.toPairs = Wl, u.toPairsIn = Ul, u.toPath = Ac, u.toPlainObject = Vl, u.transform = bs, u.unary = F8, u.union = xo, u.unionBy = Mo, u.unionWith = Fo, u.uniq = yo, u.uniqBy = Ho, u.uniqWith = _o, u.unset = Es, u.unzip = S3, u.unzipWith = Fl, u.update = As, u.updateWith = Ss, u.values = v2, u.valuesIn = Ds, u.without = bo, u.words = Yl, u.wrap = y8, u.xor = Eo, u.xorBy = Ao, u.xorWith = So, u.zip = Do, u.zipObject = Co, u.zipObjectDeep = To, u.zipWith = Bo, u.entries = Wl, u.entriesIn = Ul, u.extend = Nl, u.extendWith = sn, V3(u, u), u.add = Dc, u.attempt = ql, u.camelCase = Ls, u.capitalize = Gl, u.ceil = Cc, u.clamp = Cs, u.clone = _8, u.cloneDeep = E8, u.cloneDeepWith = A8, u.cloneWith = b8, u.conformsTo = S8, u.deburr = Kl, u.defaultTo = cc, u.divide = Tc, u.endsWith = Os, u.eq = Qt, u.escape = Rs, u.escapeRegExp = Is, u.every = Uo, u.find = Ko, u.findIndex = gl, u.findKey = ls, u.findLast = Yo, u.findLastIndex = wl, u.findLastKey = as, u.floor = Bc, u.forEach = Hl, u.forEachRight = _l, u.forIn = os, u.forInRight = ss, u.forOwn = cs, u.forOwnRight = hs, u.get = L3, u.gt = D8, u.gte = C8, u.has = ds, u.hasIn = O3, u.head = xl, u.identity = At, u.includes = Xo, u.indexOf = K7, u.inRange = Ts, u.invoke = ms, u.isArguments = qe, u.isArray = m1, u.isArrayBuffer = T8, u.isArrayLike = bt, u.isArrayLikeObject = lt, u.isBoolean = B8, u.isBuffer = Te, u.isDate = L8, u.isElement = O8, u.isEmpty = R8, u.isEqual = I8, u.isEqualWith = P8, u.isError = T3, u.isFinite = V8, u.isFunction = ge, u.isInteger = Bl, u.isLength = an, u.isMap = Ll, u.isMatch = N8, u.isMatchWith = k8, u.isNaN = $8, u.isNative = W8, u.isNil = G8, u.isNull = U8, u.isNumber = Ol, u.isObject = Q1, u.isObjectLike = rt, u.isPlainObject = J2, u.isRegExp = B3, u.isSafeInteger = K8, u.isSet = Rl, u.isString = on, u.isSymbol = Rt, u.isTypedArray = d2, u.isUndefined = Y8, u.isWeakMap = q8, u.isWeakSet = j8, u.join = J7, u.kebabCase = Ps, u.last = Kt, u.lastIndexOf = X7, u.lowerCase = Vs, u.lowerFirst = Ns, u.lt = Z8, u.lte = J8, u.max = Lc, u.maxBy = Oc, u.mean = Rc, u.meanBy = Ic, u.min = Pc, u.minBy = Vc, u.stubArray = k3, u.stubFalse = $3, u.stubObject = Hc, u.stubString = _c, u.stubTrue = bc, u.multiply = Nc, u.nth = Q7, u.noConflict = mc, u.noop = N3, u.now = rn, u.pad = ks, u.padEnd = $s, u.padStart = Ws, u.parseInt = Us, u.random = Bs, u.reduce = n8, u.reduceRight = i8, u.repeat = Gs, u.replace = Ks, u.result = ys, u.round = kc, u.runInContext = H, u.sample = a8, u.size = c8, u.snakeCase = Ys, u.some = h8, u.sortedIndex = ao, u.sortedIndexBy = oo, u.sortedIndexOf = so, u.sortedLastIndex = co, u.sortedLastIndexBy = ho, u.sortedLastIndexOf = uo, u.startCase = js, u.startsWith = Zs, u.subtract = $c, u.sum = Wc, u.sumBy = Uc, u.template = Js, u.times = Ec, u.toFinite = we, u.toInteger = g1, u.toLength = Pl, u.toLower = Xs, u.toNumber = Yt, u.toSafeInteger = X8, u.toString = T1, u.toUpper = Qs, u.trim = tc, u.trimEnd = ec, u.trimStart = rc, u.truncate = nc, u.unescape = ic, u.uniqueId = Sc, u.upperCase = lc, u.upperFirst = R3, u.each = Hl, u.eachRight = _l, u.first = xl, V3(u, function() {
        var t = {};
        return re(u, function(r, o) {
          P1.call(u.prototype, o) || (t[o] = r);
        }), t;
      }(), { chain: !1 }), u.VERSION = a, kt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
        u[t].placeholder = u;
      }), kt(["drop", "take"], function(t, r) {
        H1.prototype[t] = function(o) {
          o = o === n ? 1 : ht(g1(o), 0);
          var s = this.__filtered__ && !r ? new H1(this) : this.clone();
          return s.__filtered__ ? s.__takeCount__ = gt(o, s.__takeCount__) : s.__views__.push({
            size: gt(o, U),
            type: t + (s.__dir__ < 0 ? "Right" : "")
          }), s;
        }, H1.prototype[t + "Right"] = function(o) {
          return this.reverse()[t](o).reverse();
        };
      }), kt(["filter", "map", "takeWhile"], function(t, r) {
        var o = r + 1, s = o == U1 || o == it;
        H1.prototype[t] = function(c) {
          var f = this.clone();
          return f.__iteratees__.push({
            iteratee: e1(c, 3),
            type: o
          }), f.__filtered__ = f.__filtered__ || s, f;
        };
      }), kt(["head", "last"], function(t, r) {
        var o = "take" + (r ? "Right" : "");
        H1.prototype[t] = function() {
          return this[o](1).value()[0];
        };
      }), kt(["initial", "tail"], function(t, r) {
        var o = "drop" + (r ? "" : "Right");
        H1.prototype[t] = function() {
          return this.__filtered__ ? new H1(this) : this[o](1);
        };
      }), H1.prototype.compact = function() {
        return this.filter(At);
      }, H1.prototype.find = function(t) {
        return this.filter(t).head();
      }, H1.prototype.findLast = function(t) {
        return this.reverse().find(t);
      }, H1.prototype.invokeMap = z1(function(t, r) {
        return typeof t == "function" ? new H1(this) : this.map(function(o) {
          return G2(o, t, r);
        });
      }), H1.prototype.reject = function(t) {
        return this.filter(ln(e1(t)));
      }, H1.prototype.slice = function(t, r) {
        t = g1(t);
        var o = this;
        return o.__filtered__ && (t > 0 || r < 0) ? new H1(o) : (t < 0 ? o = o.takeRight(-t) : t && (o = o.drop(t)), r !== n && (r = g1(r), o = r < 0 ? o.dropRight(-r) : o.take(r - t)), o);
      }, H1.prototype.takeRightWhile = function(t) {
        return this.reverse().takeWhile(t).reverse();
      }, H1.prototype.toArray = function() {
        return this.take(U);
      }, re(H1.prototype, function(t, r) {
        var o = /^(?:filter|find|map|reject)|While$/.test(r), s = /^(?:head|last)$/.test(r), c = u[s ? "take" + (r == "last" ? "Right" : "") : r], f = s || /^find/.test(r);
        !c || (u.prototype[r] = function() {
          var g = this.__wrapped__, x = s ? [1] : arguments, _ = g instanceof H1, B = x[0], O = _ || m1(g), P = function(F1) {
            var _1 = c.apply(u, _e([F1], x));
            return s && q ? _1[0] : _1;
          };
          O && o && typeof B == "function" && B.length != 1 && (_ = O = !1);
          var q = this.__chain__, X = !!this.__actions__.length, n1 = f && !q, w1 = _ && !X;
          if (!f && O) {
            g = w1 ? g : new H1(this);
            var i1 = t.apply(g, x);
            return i1.__actions__.push({ func: tn, args: [P], thisArg: n }), new Wt(i1, q);
          }
          return n1 && w1 ? t.apply(this, x) : (i1 = this.thru(P), n1 ? s ? i1.value()[0] : i1.value() : i1);
        });
      }), kt(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
        var r = br[t], o = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", s = /^(?:pop|shift)$/.test(t);
        u.prototype[t] = function() {
          var c = arguments;
          if (s && !this.__chain__) {
            var f = this.value();
            return r.apply(m1(f) ? f : [], c);
          }
          return this[o](function(g) {
            return r.apply(m1(g) ? g : [], c);
          });
        };
      }), re(H1.prototype, function(t, r) {
        var o = u[r];
        if (o) {
          var s = o.name + "";
          P1.call(s2, s) || (s2[s] = []), s2[s].push({ name: r, func: o });
        }
      }), s2[Yr(n, L).name] = [{
        name: "wrapper",
        func: n
      }], H1.prototype.clone = n6, H1.prototype.reverse = i6, H1.prototype.value = l6, u.prototype.at = Oo, u.prototype.chain = Ro, u.prototype.commit = Io, u.prototype.next = Po, u.prototype.plant = No, u.prototype.reverse = ko, u.prototype.toJSON = u.prototype.valueOf = u.prototype.value = $o, u.prototype.first = u.prototype.head, P2 && (u.prototype[P2] = Vo), u;
    }, l2 = Ra();
    Ne ? ((Ne.exports = l2)._ = l2, Pn._ = l2) : dt._ = l2;
  }).call(X2);
})(qt, qt.exports);
const Qc = [
  ["Afghanistan", ["asia"], "af", "93"],
  ["Albania", ["europe"], "al", "355"],
  ["Algeria", ["africa", "north-africa"], "dz", "213"],
  ["American Samoa", ["oceania"], "as", "1684"],
  ["Andorra", ["europe"], "ad", "376"],
  ["Angola", ["africa"], "ao", "244"],
  ["Anguilla", ["america", "carribean"], "ai", "1264"],
  ["Antigua and Barbuda", ["america", "carribean"], "ag", "1268"],
  ["Argentina", ["america", "south-america"], "ar", "54", "+.. (..) ........"],
  ["Armenia", ["asia", "ex-ussr"], "am", "374"],
  ["Aruba", ["america", "carribean"], "aw", "297"],
  ["Australia", ["oceania"], "au", "61", "+.. ... ... ..."],
  ["Austria", ["europe", "european-union"], "at", "43"],
  ["Azerbaijan", ["asia", "ex-ussr"], "az", "994"],
  ["Bahamas", ["america", "carribean"], "bs", "1242"],
  ["Bahrain", ["middle-east"], "bh", "973"],
  ["Bangladesh", ["asia"], "bd", "880"],
  ["Barbados", ["america", "carribean"], "bb", "1246"],
  ["Belarus", ["europe", "ex-ussr"], "by", "375", "+... (..) ... .. .."],
  ["Belgium", ["europe", "european-union"], "be", "32", "+.. ... .. .. .."],
  ["Belize", ["america", "central-america"], "bz", "501"],
  ["Benin", ["africa"], "bj", "229", "+... .... ...."],
  ["Bermuda", ["america", "north-america"], "bm", "1441"],
  ["Bhutan", ["asia"], "bt", "975"],
  ["Bolivia", ["america", "south-america"], "bo", "591"],
  ["Bosnia and Herzegovina", ["europe"], "ba", "387"],
  ["Botswana", ["africa"], "bw", "267"],
  ["Brazil", ["america", "south-america"], "br", "55", "+.. (..) ........."],
  ["British Indian Ocean Territory", ["asia"], "io", "246"],
  ["British Virgin Islands", ["america", "carribean"], "vg", "1284"],
  ["Brunei", ["asia"], "bn", "673"],
  ["Bulgaria", ["europe", "european-union"], "bg", "359"],
  ["Burkina Faso", ["africa"], "bf", "226", "+... .. .. .. .."],
  ["Burundi", ["africa"], "bi", "257", "+... .. .. .. .."],
  ["Cambodia", ["asia"], "kh", "855"],
  ["Cameroon", ["africa"], "cm", "237"],
  [
    "Canada",
    ["america", "north-america"],
    "ca",
    "1",
    "+. (...) ...-....",
    1,
    [
      "204",
      "236",
      "249",
      "250",
      "289",
      "306",
      "343",
      "365",
      "387",
      "403",
      "416",
      "418",
      "431",
      "437",
      "438",
      "450",
      "506",
      "514",
      "519",
      "548",
      "579",
      "581",
      "587",
      "604",
      "613",
      "639",
      "647",
      "672",
      "705",
      "709",
      "742",
      "778",
      "780",
      "782",
      "807",
      "819",
      "825",
      "867",
      "873",
      "902",
      "905"
    ]
  ],
  ["Cape Verde", ["africa"], "cv", "238", "+... ... .. .."],
  ["Caribbean Netherlands", ["america", "carribean"], "bq", "599", "", 1],
  ["Cayman Islands", ["america", "carribean"], "ky", "1345"],
  ["Central African Republic", ["africa"], "cf", "236", "+... .... ...."],
  ["Chad", ["africa"], "td", "235", "+... .. .. .. .."],
  ["Chile", ["america", "south-america"], "cl", "56"],
  ["China", ["asia"], "cn", "86", "+.. ..-........."],
  ["Colombia", ["america", "south-america"], "co", "57"],
  ["Comoros", ["africa"], "km", "269", "+... ... ...."],
  ["Congo", ["africa"], "cd", "243"],
  ["Congo", ["africa"], "cg", "242", "+... .. .. ....."],
  ["Cook Islands", ["oceania"], "ck", "682"],
  ["Costa Rica", ["america", "central-america"], "cr", "506", "+... ....-...."],
  ["C\xF4te d\u2019Ivoire", ["africa"], "ci", "225", "+... .. .. .. .."],
  ["Croatia", ["europe", "european-union"], "hr", "385"],
  ["Cuba", ["america", "carribean"], "cu", "53"],
  ["Cura\xE7ao", ["america", "carribean"], "cw", "599", "", 0],
  ["Cyprus", ["europe", "european-union"], "cy", "357", "+... .. ......"],
  ["Czech Republic", ["europe", "european-union"], "cz", "420"],
  ["Denmark", ["europe", "european-union"], "dk", "45", "+.. .. .. .. .."],
  ["Djibouti", ["africa"], "dj", "253"],
  ["Dominica", ["america", "carribean"], "dm", "1767"],
  [
    "Dominican Republic",
    ["america", "carribean"],
    "do",
    "1",
    "",
    2,
    ["809", "829", "849"]
  ],
  ["Ecuador", ["america", "south-america"], "ec", "593"],
  ["Egypt", ["africa", "north-africa"], "eg", "20"],
  [
    "El Salvador",
    ["america", "central-america"],
    "sv",
    "503",
    "+... ....-...."
  ],
  ["Equatorial Guinea", ["africa"], "gq", "240", "+... .. ... ...."],
  ["Eritrea", ["africa"], "er", "291"],
  [
    "Estonia",
    ["europe", "european-union", "ex-ussr"],
    "ee",
    "372",
    "+... .... ......"
  ],
  ["Ethiopia", ["africa"], "et", "251"],
  ["Falkland Islands", ["america", "south-america"], "fk", "500"],
  ["Faroe Islands", ["europe"], "fo", "298"],
  ["Fiji", ["oceania"], "fj", "679"],
  ["Finland", ["europe", "european-union"], "fi", "358", "+... .. ... .. .."],
  ["France", ["europe", "european-union"], "fr", "33", "+.. . .. .. .. .."],
  ["French Guiana", ["america", "south-america"], "gf", "594"],
  ["French Polynesia", ["oceania"], "pf", "689"],
  ["Gabon", ["africa"], "ga", "241", "+... .. .. .. .."],
  ["Gambia", ["africa"], "gm", "220"],
  ["Georgia", ["asia", "ex-ussr"], "ge", "995"],
  ["Germany", ["europe", "european-union"], "de", "49", "+.. .... ........"],
  ["Ghana", ["africa"], "gh", "233"],
  ["Gibraltar", ["europe"], "gi", "350"],
  ["Greece", ["europe", "european-union"], "gr", "30"],
  ["Greenland", ["america"], "gl", "299"],
  ["Grenada", ["america", "carribean"], "gd", "1473"],
  ["Guadeloupe", ["america", "carribean"], "gp", "590", "", 0],
  ["Guam", ["oceania"], "gu", "1671"],
  ["Guatemala", ["america", "central-america"], "gt", "502", "+... ....-...."],
  ["Guinea", ["africa"], "gn", "224", "+... . ... ...."],
  ["Guinea-Bissau", ["africa"], "gw", "245"],
  ["Guyana", ["america", "south-america"], "gy", "592"],
  ["Haiti", ["america", "carribean"], "ht", "509", "+... ....-...."],
  ["Honduras", ["america", "central-america"], "hn", "504"],
  ["Hong Kong", ["asia"], "hk", "852", "+... .... ...."],
  ["Hungary", ["europe", "european-union"], "hu", "36"],
  ["Iceland", ["europe"], "is", "354", "+... ... ...."],
  ["India", ["asia"], "in", "91", "+.. .....-....."],
  ["Indonesia", ["asia"], "id", "62"],
  ["Iran", ["middle-east"], "ir", "98"],
  ["Iraq", ["middle-east"], "iq", "964"],
  ["Ireland", ["europe", "european-union"], "ie", "353", "+... .. ......."],
  ["Israel", ["middle-east"], "il", "972", "+... ... ... ...."],
  ["Italy", ["europe", "european-union"], "it", "39", "+.. ... .......", 0],
  ["Jamaica", ["america", "carribean"], "jm", "1876"],
  ["Japan", ["asia"], "jp", "81", "+.. .. .... ...."],
  ["Jordan", ["middle-east"], "jo", "962"],
  [
    "Kazakhstan",
    ["asia", "ex-ussr"],
    "kz",
    "7",
    "+. ... ...-..-..",
    1,
    [
      "313",
      "327",
      "7172",
      "312",
      "73622",
      "321",
      "324",
      "336",
      "318",
      "315",
      "325",
      "311",
      "326",
      "310"
    ]
  ],
  ["Kenya", ["africa"], "ke", "254"],
  ["Kiribati", ["oceania"], "ki", "686"],
  ["Kosovo", ["europe"], "ks", "383"],
  ["Kuwait", ["middle-east"], "kw", "965"],
  ["Kyrgyzstan", ["asia", "ex-ussr"], "kg", "996"],
  ["Laos", ["asia"], "la", "856"],
  ["Latvia", ["europe", "european-union", "ex-ussr"], "lv", "371"],
  ["Lebanon", ["middle-east"], "lb", "961"],
  ["Lesotho", ["africa"], "ls", "266"],
  ["Liberia", ["africa"], "lr", "231"],
  ["Libya", ["africa", "north-africa"], "ly", "218"],
  ["Liechtenstein", ["europe"], "li", "423"],
  ["Lithuania", ["europe", "european-union", "ex-ussr"], "lt", "370"],
  [
    "Luxembourg",
    ["europe", "european-union"],
    "lu",
    "352",
    "+.. . ... ... ..."
  ],
  ["Macau", ["asia"], "mo", "853"],
  ["Macedonia", ["europe"], "mk", "389"],
  ["Madagascar", ["africa"], "mg", "261", "+... .. . ......"],
  ["Malawi", ["africa"], "mw", "265"],
  ["Malaysia", ["asia"], "my", "60", "+.. ..-....-...."],
  ["Maldives", ["asia"], "mv", "960"],
  ["Mali", ["africa"], "ml", "223", "+... .... ...."],
  ["Malta", ["europe", "european-union"], "mt", "356"],
  ["Marshall Islands", ["oceania"], "mh", "692"],
  ["Martinique", ["america", "carribean"], "mq", "596"],
  ["Mauritania", ["africa"], "mr", "222", "+... .... ...."],
  ["Mauritius", ["africa"], "mu", "230", "+... . ... ...."],
  ["Mexico", ["america", "central-america"], "mx", "52"],
  ["Micronesia", ["oceania"], "fm", "691"],
  ["Moldova", ["europe"], "md", "373", "+... (..) ..-..-.."],
  ["Monaco", ["europe"], "mc", "377"],
  ["Mongolia", ["asia"], "mn", "976"],
  ["Montenegro", ["europe"], "me", "382"],
  ["Montserrat", ["america", "carribean"], "ms", "1664"],
  ["Morocco", ["africa", "north-africa"], "ma", "212", "+212-........."],
  ["Mozambique", ["africa"], "mz", "258", "+... ... ......"],
  ["Myanmar", ["asia"], "mm", "95"],
  ["Namibia", ["africa"], "na", "264"],
  ["Nauru", ["africa"], "nr", "674"],
  ["Nepal", ["asia"], "np", "977"],
  ["Netherlands", ["europe", "european-union"], "nl", "31", "+.. .. ........"],
  ["New Caledonia", ["oceania"], "nc", "687"],
  ["New Zealand", ["oceania"], "nz", "64", "+.. ...-...-...."],
  ["Nicaragua", ["america", "central-america"], "ni", "505"],
  ["Niger", ["africa"], "ne", "227", "+... .. .. .. .."],
  ["Nigeria", ["africa"], "ng", "234"],
  ["Niue", ["asia"], "nu", "683"],
  ["Norfolk Island", ["oceania"], "nf", "672"],
  ["North Korea", ["asia"], "kp", "850"],
  ["Northern Mariana Islands", ["oceania"], "mp", "1670"],
  ["Norway", ["europe"], "no", "47", "+.. ... .. ..."],
  ["Oman", ["middle-east"], "om", "968"],
  ["Pakistan", ["asia"], "pk", "92", "+.. ...-......."],
  ["Palau", ["oceania"], "pw", "680"],
  ["Palestine", ["middle-east"], "ps", "970"],
  ["Panama", ["america", "central-america"], "pa", "507"],
  ["Papua New Guinea", ["oceania"], "pg", "675"],
  ["Paraguay", ["america", "south-america"], "py", "595"],
  ["Peru", ["america", "south-america"], "pe", "51"],
  ["Philippines", ["asia"], "ph", "63", "+.. .... ......."],
  ["Poland", ["europe", "european-union"], "pl", "48", "+.. ...-...-..."],
  ["Portugal", ["europe", "european-union"], "pt", "351"],
  ["Puerto Rico", ["america", "carribean"], "pr", "1", "", 3, ["787", "939"]],
  ["Qatar", ["middle-east"], "qa", "974"],
  ["R\xE9union", ["africa"], "re", "262", "+.. . .. .. .. .."],
  ["Romania", ["europe", "european-union"], "ro", "40"],
  ["Russia", ["europe", "asia", "ex-ussr"], "ru", "7", "+. (...) ...-..-..", 0],
  ["Rwanda", ["africa"], "rw", "250", "+... ... ... ..."],
  ["Saint Barth\xE9lemy", ["america", "carribean"], "bl", "590", "", 1],
  ["Saint Helena", ["africa"], "sh", "290"],
  ["Saint Kitts and Nevis", ["america", "carribean"], "kn", "1869"],
  ["Saint Lucia", ["america", "carribean"], "lc", "1758"],
  ["Saint Martin", ["america", "carribean"], "mf", "590", "", 2],
  ["Saint Pierre and Miquelon", ["america", "north-america"], "pm", "508"],
  ["Saint Vincent and the Grenadines", ["america", "carribean"], "vc", "1784"],
  ["Samoa", ["oceania"], "ws", "685"],
  ["San Marino", ["europe"], "sm", "378"],
  ["S\xE3o Tom\xE9 and Pr\xEDncipe", ["africa"], "st", "239", "+... ... ...."],
  ["Saudi Arabia", ["middle-east"], "sa", "966"],
  ["Senegal", ["africa"], "sn", "221", "+... .. ... .. .."],
  ["Serbia", ["europe"], "rs", "381"],
  [
    "Seychelles",
    ["africa"],
    "sc",
    "248",
    "+... ... ...."
  ],
  ["Sierra Leone", ["africa"], "sl", "232"],
  ["Singapore", ["asia"], "sg", "65", "+.. ....-...."],
  ["Sint Maarten", ["america", "carribean"], "sx", "1721"],
  ["Slovakia", ["europe", "european-union"], "sk", "421"],
  ["Slovenia", ["europe", "european-union"], "si", "386"],
  ["Solomon Islands", ["oceania"], "sb", "677"],
  ["Somalia", ["africa"], "so", "252"],
  ["South Africa", ["africa"], "za", "27", "+.. .. ... ...."],
  ["South Korea", ["asia"], "kr", "82", "+.. ... .... ...."],
  ["South Sudan", ["africa", "north-africa"], "ss", "211"],
  ["Spain", ["europe", "european-union"], "es", "34", "+.. ... ... ..."],
  ["Sri Lanka", ["asia"], "lk", "94"],
  ["Sudan", ["africa"], "sd", "249"],
  ["Suriname", ["america", "south-america"], "sr", "597"],
  ["Swaziland", ["africa"], "sz", "268"],
  ["Sweden", ["europe", "european-union"], "se", "46", "+.. (..) ...-..-.."],
  ["Switzerland", ["europe"], "ch", "41", "+.. .. ... .. .."],
  ["Syria", ["middle-east"], "sy", "963"],
  ["Taiwan", ["asia"], "tw", "886"],
  ["Tajikistan", ["asia", "ex-ussr"], "tj", "992"],
  ["Tanzania", ["africa"], "tz", "255"],
  ["Thailand", ["asia"], "th", "66"],
  ["Timor-Leste", ["asia"], "tl", "670"],
  ["Togo", ["africa"], "tg", "228", "+... ... ....."],
  ["Tokelau", ["oceania"], "tk", "690"],
  ["Tonga", ["oceania"], "to", "676"],
  ["Trinidad and Tobago", ["america", "carribean"], "tt", "1868"],
  ["Tunisia", ["africa", "north-africa"], "tn", "216", "+... .. ... ..."],
  ["Turkey", ["europe"], "tr", "90", "+.. ... ... .. .."],
  ["Turkmenistan", ["asia", "ex-ussr"], "tm", "993"],
  ["Turks and Caicos Islands", ["america", "carribean"], "tc", "1649"],
  ["Tuvalu", ["asia"], "tv", "688"],
  ["U.S. Virgin Islands", ["america", "carribean"], "vi", "1340"],
  ["Uganda", ["africa"], "ug", "256"],
  ["Ukraine", ["europe", "ex-ussr"], "ua", "380", "+... (..) ... .. .."],
  ["United Arab Emirates", ["middle-east"], "ae", "971"],
  [
    "United Kingdom",
    ["europe", "european-union"],
    "gb",
    "44",
    "+.. .... ......"
  ],
  [
    "United States",
    ["america", "north-america"],
    "us",
    "1",
    "+. (...) ...-....",
    0,
    [
      "907",
      "205",
      "251",
      "256",
      "334",
      "479",
      "501",
      "870",
      "480",
      "520",
      "602",
      "623",
      "928",
      "209",
      "213",
      "310",
      "323",
      "408",
      "415",
      "510",
      "530",
      "559",
      "562",
      "619",
      "626",
      "650",
      "661",
      "707",
      "714",
      "760",
      "805",
      "818",
      "831",
      "858",
      "909",
      "916",
      "925",
      "949",
      "951",
      "303",
      "719",
      "970",
      "203",
      "860",
      "202",
      "302",
      "239",
      "305",
      "321",
      "352",
      "386",
      "407",
      "561",
      "727",
      "772",
      "813",
      "850",
      "863",
      "904",
      "941",
      "954",
      "229",
      "404",
      "478",
      "706",
      "770",
      "912",
      "808",
      "319",
      "515",
      "563",
      "641",
      "712",
      "208",
      "217",
      "309",
      "312",
      "618",
      "630",
      "708",
      "773",
      "815",
      "847",
      "219",
      "260",
      "317",
      "574",
      "765",
      "812",
      "316",
      "620",
      "785",
      "913",
      "270",
      "502",
      "606",
      "859",
      "225",
      "318",
      "337",
      "504",
      "985",
      "413",
      "508",
      "617",
      "781",
      "978",
      "301",
      "410",
      "207",
      "231",
      "248",
      "269",
      "313",
      "517",
      "586",
      "616",
      "734",
      "810",
      "906",
      "989",
      "218",
      "320",
      "507",
      "612",
      "651",
      "763",
      "952",
      "314",
      "417",
      "573",
      "636",
      "660",
      "816",
      "228",
      "601",
      "662",
      "406",
      "252",
      "336",
      "704",
      "828",
      "910",
      "919",
      "701",
      "308",
      "402",
      "603",
      "201",
      "609",
      "732",
      "856",
      "908",
      "973",
      "505",
      "575",
      "702",
      "775",
      "212",
      "315",
      "516",
      "518",
      "585",
      "607",
      "631",
      "716",
      "718",
      "845",
      "914",
      "216",
      "330",
      "419",
      "440",
      "513",
      "614",
      "740",
      "937",
      "405",
      "580",
      "918",
      "503",
      "541",
      "215",
      "412",
      "570",
      "610",
      "717",
      "724",
      "814",
      "401",
      "803",
      "843",
      "864",
      "605",
      "423",
      "615",
      "731",
      "865",
      "901",
      "931",
      "210",
      "214",
      "254",
      "281",
      "325",
      "361",
      "409",
      "432",
      "512",
      "713",
      "806",
      "817",
      "830",
      "903",
      "915",
      "936",
      "940",
      "956",
      "972",
      "979",
      "435",
      "801",
      "276",
      "434",
      "540",
      "703",
      "757",
      "804",
      "802",
      "206",
      "253",
      "360",
      "425",
      "509",
      "262",
      "414",
      "608",
      "715",
      "920",
      "304",
      "307"
    ]
  ],
  ["Uruguay", ["america", "south-america"], "uy", "598"],
  ["Uzbekistan", ["asia", "ex-ussr"], "uz", "998"],
  ["Vanuatu", ["oceania"], "vu", "678"],
  ["Vatican City", ["europe"], "va", "39", "+.. .. .... ....", 1],
  ["Venezuela", ["america", "south-america"], "ve", "58"],
  ["Vietnam", ["asia"], "vn", "84"],
  ["Wallis and Futuna", ["oceania"], "wf", "681"],
  ["Yemen", ["middle-east"], "ye", "967"],
  ["Zambia", ["africa"], "zm", "260"],
  ["Zimbabwe", ["africa"], "zw", "263"]
], W3 = {}, Xl = (l, i, n) => {
  W3[i] || (W3[i] = []);
  const a = n || 0;
  W3[i][a] = l;
}, th = Qc.map((l) => {
  const [i, n, a, h, v, p, M] = l, F = {
    name: i,
    regions: n,
    iso2: a,
    dialCode: h,
    priority: p || 0,
    format: v || void 0,
    hasAreaCodes: !!M,
    isAreaCode: !1
  }, E = (M != null ? M : []).map((b) => {
    const A = {
      ...F,
      regions: n,
      dialCode: `${h}${b}`,
      isAreaCode: !0
    };
    return Xl(a, A.dialCode), A;
  });
  return Xl(F.iso2, F.dialCode, p), [F, ...E];
}), Ql = th.flat();
function J1() {
  return J1 = Object.assign ? Object.assign.bind() : function(l) {
    for (var i = 1; i < arguments.length; i++) {
      var n = arguments[i];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (l[a] = n[a]);
    }
    return l;
  }, J1.apply(this, arguments);
}
function ae(l, i) {
  if (l == null)
    return {};
  var n = {}, a = Object.keys(l), h, v;
  for (v = 0; v < a.length; v++)
    h = a[v], !(i.indexOf(h) >= 0) && (n[h] = l[h]);
  return n;
}
function J4(l) {
  var i = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return i[n] === void 0 && (i[n] = l(n)), i[n];
  };
}
var eh = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, rh = /* @__PURE__ */ J4(
  function(l) {
    return eh.test(l) || l.charCodeAt(0) === 111 && l.charCodeAt(1) === 110 && l.charCodeAt(2) < 91;
  }
);
function nh(l) {
  if (l.sheet)
    return l.sheet;
  for (var i = 0; i < document.styleSheets.length; i++)
    if (document.styleSheets[i].ownerNode === l)
      return document.styleSheets[i];
}
function ih(l) {
  var i = document.createElement("style");
  return i.setAttribute("data-emotion", l.key), l.nonce !== void 0 && i.setAttribute("nonce", l.nonce), i.appendChild(document.createTextNode("")), i.setAttribute("data-s", ""), i;
}
var lh = /* @__PURE__ */ function() {
  function l(n) {
    var a = this;
    this._insertTag = function(h) {
      var v;
      a.tags.length === 0 ? a.insertionPoint ? v = a.insertionPoint.nextSibling : a.prepend ? v = a.container.firstChild : v = a.before : v = a.tags[a.tags.length - 1].nextSibling, a.container.insertBefore(h, v), a.tags.push(h);
    }, this.isSpeedy = n.speedy === void 0 ? process.env.NODE_ENV === "production" : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var i = l.prototype;
  return i.hydrate = function(a) {
    a.forEach(this._insertTag);
  }, i.insert = function(a) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(ih(this));
    var h = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var v = a.charCodeAt(0) === 64 && a.charCodeAt(1) === 105;
      v && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + a + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !v;
    }
    if (this.isSpeedy) {
      var p = nh(h);
      try {
        p.insertRule(a, p.cssRules.length);
      } catch (M) {
        process.env.NODE_ENV !== "production" && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear){/.test(a) && console.error('There was a problem inserting the following rule: "' + a + '"', M);
      }
    } else
      h.appendChild(document.createTextNode(a));
    this.ctr++;
  }, i.flush = function() {
    this.tags.forEach(function(a) {
      return a.parentNode && a.parentNode.removeChild(a);
    }), this.tags = [], this.ctr = 0, process.env.NODE_ENV !== "production" && (this._alreadyInsertedOrderInsensitiveRule = !1);
  }, l;
}(), zt = "-ms-", zn = "-moz-", D1 = "-webkit-", oi = "comm", si = "rule", ci = "decl", ah = "@import", X4 = "@keyframes", oh = Math.abs, Mn = String.fromCharCode, sh = Object.assign;
function ch(l, i) {
  return (((i << 2 ^ St(l, 0)) << 2 ^ St(l, 1)) << 2 ^ St(l, 2)) << 2 ^ St(l, 3);
}
function Q4(l) {
  return l.trim();
}
function hh(l, i) {
  return (l = i.exec(l)) ? l[0] : l;
}
function I1(l, i, n) {
  return l.replace(i, n);
}
function ti(l, i) {
  return l.indexOf(i);
}
function St(l, i) {
  return l.charCodeAt(i) | 0;
}
function lr(l, i, n) {
  return l.slice(i, n);
}
function le(l) {
  return l.length;
}
function hi(l) {
  return l.length;
}
function cn(l, i) {
  return i.push(l), l;
}
function uh(l, i) {
  return l.map(i).join("");
}
var Fn = 1, y2 = 1, t5 = 0, Dt = 0, st = 0, b2 = "";
function yn(l, i, n, a, h, v, p) {
  return { value: l, root: i, parent: n, type: a, props: h, children: v, line: Fn, column: y2, length: p, return: "" };
}
function Q2(l, i) {
  return sh(yn("", null, null, "", null, null, 0), l, { length: -l.length }, i);
}
function fh() {
  return st;
}
function dh() {
  return st = Dt > 0 ? St(b2, --Dt) : 0, y2--, st === 10 && (y2 = 1, Fn--), st;
}
function Vt() {
  return st = Dt < t5 ? St(b2, Dt++) : 0, y2++, st === 10 && (y2 = 1, Fn++), st;
}
function oe() {
  return St(b2, Dt);
}
function fn() {
  return Dt;
}
function cr(l, i) {
  return lr(b2, l, i);
}
function ar(l) {
  switch (l) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function e5(l) {
  return Fn = y2 = 1, t5 = le(b2 = l), Dt = 0, [];
}
function r5(l) {
  return b2 = "", l;
}
function dn(l) {
  return Q4(cr(Dt - 1, ei(l === 91 ? l + 2 : l === 40 ? l + 1 : l)));
}
function vh(l) {
  for (; (st = oe()) && st < 33; )
    Vt();
  return ar(l) > 2 || ar(st) > 3 ? "" : " ";
}
function ph(l, i) {
  for (; --i && Vt() && !(st < 48 || st > 102 || st > 57 && st < 65 || st > 70 && st < 97); )
    ;
  return cr(l, fn() + (i < 6 && oe() == 32 && Vt() == 32));
}
function ei(l) {
  for (; Vt(); )
    switch (st) {
      case l:
        return Dt;
      case 34:
      case 39:
        l !== 34 && l !== 39 && ei(st);
        break;
      case 40:
        l === 41 && ei(l);
        break;
      case 92:
        Vt();
        break;
    }
  return Dt;
}
function mh(l, i) {
  for (; Vt() && l + st !== 47 + 10; )
    if (l + st === 42 + 42 && oe() === 47)
      break;
  return "/*" + cr(i, Dt - 1) + "*" + Mn(l === 47 ? l : Vt());
}
function gh(l) {
  for (; !ar(oe()); )
    Vt();
  return cr(l, Dt);
}
function wh(l) {
  return r5(vn("", null, null, null, [""], l = e5(l), 0, [0], l));
}
function vn(l, i, n, a, h, v, p, M, F) {
  for (var E = 0, b = 0, A = p, D = 0, N = 0, I = 0, w = 1, y = 1, L = 1, $ = 0, W = "", j = h, S = v, Q = a, K = W; y; )
    switch (I = $, $ = Vt()) {
      case 40:
        if (I != 108 && K.charCodeAt(A - 1) == 58) {
          ti(K += I1(dn($), "&", "&\f"), "&\f") != -1 && (L = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        K += dn($);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        K += vh(I);
        break;
      case 92:
        K += ph(fn() - 1, 7);
        continue;
      case 47:
        switch (oe()) {
          case 42:
          case 47:
            cn(zh(mh(Vt(), fn()), i, n), F);
            break;
          default:
            K += "/";
        }
        break;
      case 123 * w:
        M[E++] = le(K) * L;
      case 125 * w:
      case 59:
      case 0:
        switch ($) {
          case 0:
          case 125:
            y = 0;
          case 59 + b:
            N > 0 && le(K) - A && cn(N > 32 ? e4(K + ";", a, n, A - 1) : e4(I1(K, " ", "") + ";", a, n, A - 2), F);
            break;
          case 59:
            K += ";";
          default:
            if (cn(Q = t4(K, i, n, E, b, h, M, W, j = [], S = [], A), v), $ === 123)
              if (b === 0)
                vn(K, i, Q, Q, j, v, A, M, S);
              else
                switch (D) {
                  case 100:
                  case 109:
                  case 115:
                    vn(l, Q, Q, a && cn(t4(l, Q, Q, 0, 0, h, M, W, h, j = [], A), S), h, S, A, M, a ? j : S);
                    break;
                  default:
                    vn(K, Q, Q, Q, [""], S, 0, M, S);
                }
        }
        E = b = N = 0, w = L = 1, W = K = "", A = p;
        break;
      case 58:
        A = 1 + le(K), N = I;
      default:
        if (w < 1) {
          if ($ == 123)
            --w;
          else if ($ == 125 && w++ == 0 && dh() == 125)
            continue;
        }
        switch (K += Mn($), $ * w) {
          case 38:
            L = b > 0 ? 1 : (K += "\f", -1);
            break;
          case 44:
            M[E++] = (le(K) - 1) * L, L = 1;
            break;
          case 64:
            oe() === 45 && (K += dn(Vt())), D = oe(), b = A = le(W = K += gh(fn())), $++;
            break;
          case 45:
            I === 45 && le(K) == 2 && (w = 0);
        }
    }
  return v;
}
function t4(l, i, n, a, h, v, p, M, F, E, b) {
  for (var A = h - 1, D = h === 0 ? v : [""], N = hi(D), I = 0, w = 0, y = 0; I < a; ++I)
    for (var L = 0, $ = lr(l, A + 1, A = oh(w = p[I])), W = l; L < N; ++L)
      (W = Q4(w > 0 ? D[L] + " " + $ : I1($, /&\f/g, D[L]))) && (F[y++] = W);
  return yn(l, i, n, h === 0 ? si : M, F, E, b);
}
function zh(l, i, n) {
  return yn(l, i, n, oi, Mn(fh()), lr(l, 2, -2), 0);
}
function e4(l, i, n, a) {
  return yn(l, i, n, ci, lr(l, 0, a), lr(l, a + 1, -1), a);
}
function n5(l, i) {
  switch (ch(l, i)) {
    case 5103:
      return D1 + "print-" + l + l;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return D1 + l + l;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return D1 + l + zn + l + zt + l + l;
    case 6828:
    case 4268:
      return D1 + l + zt + l + l;
    case 6165:
      return D1 + l + zt + "flex-" + l + l;
    case 5187:
      return D1 + l + I1(l, /(\w+).+(:[^]+)/, D1 + "box-$1$2" + zt + "flex-$1$2") + l;
    case 5443:
      return D1 + l + zt + "flex-item-" + I1(l, /flex-|-self/, "") + l;
    case 4675:
      return D1 + l + zt + "flex-line-pack" + I1(l, /align-content|flex-|-self/, "") + l;
    case 5548:
      return D1 + l + zt + I1(l, "shrink", "negative") + l;
    case 5292:
      return D1 + l + zt + I1(l, "basis", "preferred-size") + l;
    case 6060:
      return D1 + "box-" + I1(l, "-grow", "") + D1 + l + zt + I1(l, "grow", "positive") + l;
    case 4554:
      return D1 + I1(l, /([^-])(transform)/g, "$1" + D1 + "$2") + l;
    case 6187:
      return I1(I1(I1(l, /(zoom-|grab)/, D1 + "$1"), /(image-set)/, D1 + "$1"), l, "") + l;
    case 5495:
    case 3959:
      return I1(l, /(image-set\([^]*)/, D1 + "$1$`$1");
    case 4968:
      return I1(I1(l, /(.+:)(flex-)?(.*)/, D1 + "box-pack:$3" + zt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + D1 + l + l;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return I1(l, /(.+)-inline(.+)/, D1 + "$1$2") + l;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (le(l) - 1 - i > 6)
        switch (St(l, i + 1)) {
          case 109:
            if (St(l, i + 4) !== 45)
              break;
          case 102:
            return I1(l, /(.+:)(.+)-([^]+)/, "$1" + D1 + "$2-$3$1" + zn + (St(l, i + 3) == 108 ? "$3" : "$2-$3")) + l;
          case 115:
            return ~ti(l, "stretch") ? n5(I1(l, "stretch", "fill-available"), i) + l : l;
        }
      break;
    case 4949:
      if (St(l, i + 1) !== 115)
        break;
    case 6444:
      switch (St(l, le(l) - 3 - (~ti(l, "!important") && 10))) {
        case 107:
          return I1(l, ":", ":" + D1) + l;
        case 101:
          return I1(l, /(.+:)([^;!]+)(;|!.+)?/, "$1" + D1 + (St(l, 14) === 45 ? "inline-" : "") + "box$3$1" + D1 + "$2$3$1" + zt + "$2box$3") + l;
      }
      break;
    case 5936:
      switch (St(l, i + 11)) {
        case 114:
          return D1 + l + zt + I1(l, /[svh]\w+-[tblr]{2}/, "tb") + l;
        case 108:
          return D1 + l + zt + I1(l, /[svh]\w+-[tblr]{2}/, "tb-rl") + l;
        case 45:
          return D1 + l + zt + I1(l, /[svh]\w+-[tblr]{2}/, "lr") + l;
      }
      return D1 + l + zt + l + l;
  }
  return l;
}
function F2(l, i) {
  for (var n = "", a = hi(l), h = 0; h < a; h++)
    n += i(l[h], h, l, i) || "";
  return n;
}
function xh(l, i, n, a) {
  switch (l.type) {
    case ah:
    case ci:
      return l.return = l.return || l.value;
    case oi:
      return "";
    case X4:
      return l.return = l.value + "{" + F2(l.children, a) + "}";
    case si:
      l.value = l.props.join(",");
  }
  return le(n = F2(l.children, a)) ? l.return = l.value + "{" + n + "}" : "";
}
function Mh(l) {
  var i = hi(l);
  return function(n, a, h, v) {
    for (var p = "", M = 0; M < i; M++)
      p += l[M](n, a, h, v) || "";
    return p;
  };
}
function Fh(l) {
  return function(i) {
    i.root || (i = i.return) && l(i);
  };
}
function yh(l, i, n, a) {
  if (l.length > -1 && !l.return)
    switch (l.type) {
      case ci:
        l.return = n5(l.value, l.length);
        break;
      case X4:
        return F2([Q2(l, { value: I1(l.value, "@", "@" + D1) })], a);
      case si:
        if (l.length)
          return uh(l.props, function(h) {
            switch (hh(h, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return F2([Q2(l, { props: [I1(h, /:(read-\w+)/, ":" + zn + "$1")] })], a);
              case "::placeholder":
                return F2([
                  Q2(l, { props: [I1(h, /:(plac\w+)/, ":" + D1 + "input-$1")] }),
                  Q2(l, { props: [I1(h, /:(plac\w+)/, ":" + zn + "$1")] }),
                  Q2(l, { props: [I1(h, /:(plac\w+)/, zt + "input-$1")] })
                ], a);
            }
            return "";
          });
    }
}
var Hh = function(i, n, a) {
  for (var h = 0, v = 0; h = v, v = oe(), h === 38 && v === 12 && (n[a] = 1), !ar(v); )
    Vt();
  return cr(i, Dt);
}, _h = function(i, n) {
  var a = -1, h = 44;
  do
    switch (ar(h)) {
      case 0:
        h === 38 && oe() === 12 && (n[a] = 1), i[a] += Hh(Dt - 1, n, a);
        break;
      case 2:
        i[a] += dn(h);
        break;
      case 4:
        if (h === 44) {
          i[++a] = oe() === 58 ? "&\f" : "", n[a] = i[a].length;
          break;
        }
      default:
        i[a] += Mn(h);
    }
  while (h = Vt());
  return i;
}, bh = function(i, n) {
  return r5(_h(e5(i), n));
}, r4 = /* @__PURE__ */ new WeakMap(), Eh = function(i) {
  if (!(i.type !== "rule" || !i.parent || i.length < 1)) {
    for (var n = i.value, a = i.parent, h = i.column === a.column && i.line === a.line; a.type !== "rule"; )
      if (a = a.parent, !a)
        return;
    if (!(i.props.length === 1 && n.charCodeAt(0) !== 58 && !r4.get(a)) && !h) {
      r4.set(i, !0);
      for (var v = [], p = bh(n, v), M = a.props, F = 0, E = 0; F < p.length; F++)
        for (var b = 0; b < M.length; b++, E++)
          i.props[E] = v[F] ? p[F].replace(/&\f/g, M[b]) : M[b] + " " + p[F];
    }
  }
}, Ah = function(i) {
  if (i.type === "decl") {
    var n = i.value;
    n.charCodeAt(0) === 108 && n.charCodeAt(2) === 98 && (i.return = "", i.value = "");
  }
}, Sh = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", Dh = function(i) {
  return i.type === "comm" && i.children.indexOf(Sh) > -1;
}, Ch = function(i) {
  return function(n, a, h) {
    if (!(n.type !== "rule" || i.compat)) {
      var v = n.value.match(/(:first|:nth|:nth-last)-child/g);
      if (v) {
        for (var p = n.parent === h[0], M = p ? h[0].children : h, F = M.length - 1; F >= 0; F--) {
          var E = M[F];
          if (E.line < n.line)
            break;
          if (E.column < n.column) {
            if (Dh(E))
              return;
            break;
          }
        }
        v.forEach(function(b) {
          console.error('The pseudo class "' + b + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + b.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, i5 = function(i) {
  return i.type.charCodeAt(1) === 105 && i.type.charCodeAt(0) === 64;
}, Th = function(i, n) {
  for (var a = i - 1; a >= 0; a--)
    if (!i5(n[a]))
      return !0;
  return !1;
}, n4 = function(i) {
  i.type = "", i.value = "", i.return = "", i.children = "", i.props = "";
}, Bh = function(i, n, a) {
  !i5(i) || (i.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), n4(i)) : Th(n, a) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), n4(i)));
}, Lh = [yh], Oh = function(i) {
  var n = i.key;
  if (process.env.NODE_ENV !== "production" && !n)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (n === "css") {
    var a = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(a, function(w) {
      var y = w.getAttribute("data-emotion");
      y.indexOf(" ") !== -1 && (document.head.appendChild(w), w.setAttribute("data-s", ""));
    });
  }
  var h = i.stylisPlugins || Lh;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(n))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + n + '" was passed');
  var v = {}, p, M = [];
  p = i.container || document.head, Array.prototype.forEach.call(
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(w) {
      for (var y = w.getAttribute("data-emotion").split(" "), L = 1; L < y.length; L++)
        v[y[L]] = !0;
      M.push(w);
    }
  );
  var F, E = [Eh, Ah];
  process.env.NODE_ENV !== "production" && E.push(Ch({
    get compat() {
      return I.compat;
    }
  }), Bh);
  {
    var b, A = [xh, process.env.NODE_ENV !== "production" ? function(w) {
      w.root || (w.return ? b.insert(w.return) : w.value && w.type !== oi && b.insert(w.value + "{}"));
    } : Fh(function(w) {
      b.insert(w);
    })], D = Mh(E.concat(h, A)), N = function(y) {
      return F2(wh(y), D);
    };
    F = function(y, L, $, W) {
      b = $, process.env.NODE_ENV !== "production" && L.map !== void 0 && (b = {
        insert: function(S) {
          $.insert(S + L.map);
        }
      }), N(y ? y + "{" + L.styles + "}" : L.styles), W && (I.inserted[L.name] = !0);
    };
  }
  var I = {
    key: n,
    sheet: new lh({
      key: n,
      container: p,
      nonce: i.nonce,
      speedy: i.speedy,
      prepend: i.prepend,
      insertionPoint: i.insertionPoint
    }),
    nonce: i.nonce,
    inserted: v,
    registered: {},
    insert: F
  };
  return I.sheet.hydrate(M), I;
}, Rh = !0;
function l5(l, i, n) {
  var a = "";
  return n.split(" ").forEach(function(h) {
    l[h] !== void 0 ? i.push(l[h] + ";") : a += h + " ";
  }), a;
}
var ui = function(i, n, a) {
  var h = i.key + "-" + n.name;
  (a === !1 || Rh === !1) && i.registered[h] === void 0 && (i.registered[h] = n.styles);
}, a5 = function(i, n, a) {
  ui(i, n, a);
  var h = i.key + "-" + n.name;
  if (i.inserted[n.name] === void 0) {
    var v = n;
    do
      i.insert(n === v ? "." + h : "", v, i.sheet, !0), v = v.next;
    while (v !== void 0);
  }
};
function Ih(l) {
  for (var i = 0, n, a = 0, h = l.length; h >= 4; ++a, h -= 4)
    n = l.charCodeAt(a) & 255 | (l.charCodeAt(++a) & 255) << 8 | (l.charCodeAt(++a) & 255) << 16 | (l.charCodeAt(++a) & 255) << 24, n = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= n >>> 24, i = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ (i & 65535) * 1540483477 + ((i >>> 16) * 59797 << 16);
  switch (h) {
    case 3:
      i ^= (l.charCodeAt(a + 2) & 255) << 16;
    case 2:
      i ^= (l.charCodeAt(a + 1) & 255) << 8;
    case 1:
      i ^= l.charCodeAt(a) & 255, i = (i & 65535) * 1540483477 + ((i >>> 16) * 59797 << 16);
  }
  return i ^= i >>> 13, i = (i & 65535) * 1540483477 + ((i >>> 16) * 59797 << 16), ((i ^ i >>> 15) >>> 0).toString(36);
}
var Ph = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, i4 = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, Vh = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", Nh = /[A-Z]|^ms/g, o5 = /_EMO_([^_]+?)_([^]*?)_EMO_/g, fi = function(i) {
  return i.charCodeAt(1) === 45;
}, l4 = function(i) {
  return i != null && typeof i != "boolean";
}, U3 = /* @__PURE__ */ J4(function(l) {
  return fi(l) ? l : l.replace(Nh, "-$&").toLowerCase();
}), xn = function(i, n) {
  switch (i) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(o5, function(a, h, v) {
          return ee = {
            name: h,
            styles: v,
            next: ee
          }, h;
        });
  }
  return Ph[i] !== 1 && !fi(i) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
if (process.env.NODE_ENV !== "production") {
  var kh = /(var|attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, $h = ["normal", "none", "initial", "inherit", "unset"], Wh = xn, Uh = /^-ms-/, Gh = /-(.)/g, a4 = {};
  xn = function(i, n) {
    if (i === "content" && (typeof n != "string" || $h.indexOf(n) === -1 && !kh.test(n) && (n.charAt(0) !== n.charAt(n.length - 1) || n.charAt(0) !== '"' && n.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + n + "\"'`");
    var a = Wh(i, n);
    return a !== "" && !fi(i) && i.indexOf("-") !== -1 && a4[i] === void 0 && (a4[i] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + i.replace(Uh, "ms-").replace(Gh, function(h, v) {
      return v.toUpperCase();
    }) + "?")), a;
  };
}
var s5 = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function or(l, i, n) {
  if (n == null)
    return "";
  if (n.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && n.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(s5);
    return n;
  }
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return ee = {
          name: n.name,
          styles: n.styles,
          next: ee
        }, n.name;
      if (n.styles !== void 0) {
        var a = n.next;
        if (a !== void 0)
          for (; a !== void 0; )
            ee = {
              name: a.name,
              styles: a.styles,
              next: ee
            }, a = a.next;
        var h = n.styles + ";";
        return process.env.NODE_ENV !== "production" && n.map !== void 0 && (h += n.map), h;
      }
      return Kh(l, i, n);
    }
    case "function": {
      if (l !== void 0) {
        var v = ee, p = n(l);
        return ee = v, or(l, i, p);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var M = [], F = n.replace(o5, function(b, A, D) {
          var N = "animation" + M.length;
          return M.push("const " + N + " = keyframes`" + D.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + N + "}";
        });
        M.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(M, ["`" + F + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + F + "`"));
      }
      break;
  }
  if (i == null)
    return n;
  var E = i[n];
  return E !== void 0 ? E : n;
}
function Kh(l, i, n) {
  var a = "";
  if (Array.isArray(n))
    for (var h = 0; h < n.length; h++)
      a += or(l, i, n[h]) + ";";
  else
    for (var v in n) {
      var p = n[v];
      if (typeof p != "object")
        i != null && i[p] !== void 0 ? a += v + "{" + i[p] + "}" : l4(p) && (a += U3(v) + ":" + xn(v, p) + ";");
      else {
        if (v === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(s5);
        if (Array.isArray(p) && typeof p[0] == "string" && (i == null || i[p[0]] === void 0))
          for (var M = 0; M < p.length; M++)
            l4(p[M]) && (a += U3(v) + ":" + xn(v, p[M]) + ";");
        else {
          var F = or(l, i, p);
          switch (v) {
            case "animation":
            case "animationName": {
              a += U3(v) + ":" + F + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && v === "undefined" && console.error(Vh), a += v + "{" + F + "}";
          }
        }
      }
    }
  return a;
}
var o4 = /label:\s*([^\s;\n{]+)\s*(;|$)/g, c5;
process.env.NODE_ENV !== "production" && (c5 = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var ee, ri = function(i, n, a) {
  if (i.length === 1 && typeof i[0] == "object" && i[0] !== null && i[0].styles !== void 0)
    return i[0];
  var h = !0, v = "";
  ee = void 0;
  var p = i[0];
  p == null || p.raw === void 0 ? (h = !1, v += or(a, n, p)) : (process.env.NODE_ENV !== "production" && p[0] === void 0 && console.error(i4), v += p[0]);
  for (var M = 1; M < i.length; M++)
    v += or(a, n, i[M]), h && (process.env.NODE_ENV !== "production" && p[M] === void 0 && console.error(i4), v += p[M]);
  var F;
  process.env.NODE_ENV !== "production" && (v = v.replace(c5, function(D) {
    return F = D, "";
  })), o4.lastIndex = 0;
  for (var E = "", b; (b = o4.exec(v)) !== null; )
    E += "-" + b[1];
  var A = Ih(v) + E;
  return process.env.NODE_ENV !== "production" ? {
    name: A,
    styles: v,
    map: F,
    next: ee,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: A,
    styles: v,
    next: ee
  };
}, Yh = {}.hasOwnProperty, di = /* @__PURE__ */ Y4(
  typeof HTMLElement < "u" ? /* @__PURE__ */ Oh({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (di.displayName = "EmotionCacheContext");
di.Provider;
var h5 = function(i) {
  return /* @__PURE__ */ Gc(function(n, a) {
    var h = ai(di);
    return i(n, h, a);
  });
}, vi = /* @__PURE__ */ Y4({});
process.env.NODE_ENV !== "production" && (vi.displayName = "EmotionThemeContext");
var qh = Be["useInsertionEffect"] ? Be["useInsertionEffect"] : function(i) {
  i();
};
function jh(l) {
  qh(l);
}
var s4 = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", c4 = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", Zh = function(i) {
  var n = i.cache, a = i.serialized, h = i.isStringTag;
  return ui(n, a, h), jh(function() {
    return a5(n, a, h);
  }), null;
}, Jh = /* @__PURE__ */ h5(function(l, i, n) {
  var a = l.css;
  typeof a == "string" && i.registered[a] !== void 0 && (a = i.registered[a]);
  var h = l[s4], v = [a], p = "";
  typeof l.className == "string" ? p = l5(i.registered, v, l.className) : l.className != null && (p = l.className + " ");
  var M = ri(v, void 0, ai(vi));
  if (process.env.NODE_ENV !== "production" && M.name.indexOf("-") === -1) {
    var F = l[c4];
    F && (M = ri([M, "label:" + F + ";"]));
  }
  p += i.key + "-" + M.name;
  var E = {};
  for (var b in l)
    Yh.call(l, b) && b !== "css" && b !== s4 && (process.env.NODE_ENV === "production" || b !== c4) && (E[b] = l[b]);
  return E.ref = n, E.className = p, /* @__PURE__ */ xe(q4, null, /* @__PURE__ */ xe(Zh, {
    cache: i,
    serialized: M,
    isStringTag: typeof h == "string"
  }), /* @__PURE__ */ xe(h, E));
});
process.env.NODE_ENV !== "production" && (Jh.displayName = "EmotionCssPropInternal");
var Xh = rh, Qh = function(i) {
  return i !== "theme";
}, h4 = function(i) {
  return typeof i == "string" && i.charCodeAt(0) > 96 ? Xh : Qh;
}, u4 = function(i, n, a) {
  var h;
  if (n) {
    var v = n.shouldForwardProp;
    h = i.__emotion_forwardProp && v ? function(p) {
      return i.__emotion_forwardProp(p) && v(p);
    } : v;
  }
  return typeof h != "function" && a && (h = i.__emotion_forwardProp), h;
}, t9 = Be["useInsertionEffect"] ? Be["useInsertionEffect"] : function(i) {
  i();
};
function e9(l) {
  t9(l);
}
var f4 = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, r9 = function(i) {
  var n = i.cache, a = i.serialized, h = i.isStringTag;
  return ui(n, a, h), e9(function() {
    return a5(n, a, h);
  }), null;
}, n9 = function l(i, n) {
  if (process.env.NODE_ENV !== "production" && i === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var a = i.__emotion_real === i, h = a && i.__emotion_base || i, v, p;
  n !== void 0 && (v = n.label, p = n.target);
  var M = u4(i, n, a), F = M || h4(h), E = !F("as");
  return function() {
    var b = arguments, A = a && i.__emotion_styles !== void 0 ? i.__emotion_styles.slice(0) : [];
    if (v !== void 0 && A.push("label:" + v + ";"), b[0] == null || b[0].raw === void 0)
      A.push.apply(A, b);
    else {
      process.env.NODE_ENV !== "production" && b[0][0] === void 0 && console.error(f4), A.push(b[0][0]);
      for (var D = b.length, N = 1; N < D; N++)
        process.env.NODE_ENV !== "production" && b[0][N] === void 0 && console.error(f4), A.push(b[N], b[0][N]);
    }
    var I = h5(function(w, y, L) {
      var $ = E && w.as || h, W = "", j = [], S = w;
      if (w.theme == null) {
        S = {};
        for (var Q in w)
          S[Q] = w[Q];
        S.theme = ai(vi);
      }
      typeof w.className == "string" ? W = l5(y.registered, j, w.className) : w.className != null && (W = w.className + " ");
      var K = ri(A.concat(j), y.registered, S);
      W += y.key + "-" + K.name, p !== void 0 && (W += " " + p);
      var b1 = E && M === void 0 ? h4($) : F, f1 = {};
      for (var l1 in w)
        E && l1 === "as" || b1(l1) && (f1[l1] = w[l1]);
      return f1.className = W, f1.ref = L, /* @__PURE__ */ xe(q4, null, /* @__PURE__ */ xe(r9, {
        cache: y,
        serialized: K,
        isStringTag: typeof $ == "string"
      }), /* @__PURE__ */ xe($, f1));
    });
    return I.displayName = v !== void 0 ? v : "Styled(" + (typeof h == "string" ? h : h.displayName || h.name || "Component") + ")", I.defaultProps = i.defaultProps, I.__emotion_real = I, I.__emotion_base = h, I.__emotion_styles = A, I.__emotion_forwardProp = M, Object.defineProperty(I, "toString", {
      value: function() {
        return p === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + p;
      }
    }), I.withComponent = function(w, y) {
      return l(w, J1({}, n, y, {
        shouldForwardProp: u4(I, y, !0)
      })).apply(void 0, A);
    }, I;
  };
}, i9 = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], ni = n9.bind();
i9.forEach(function(l) {
  ni[l] = ni(l);
});
const l9 = ni;
var Ze = { exports: {} }, G3 = { exports: {} }, B1 = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var d4;
function a9() {
  if (d4)
    return B1;
  d4 = 1;
  var l = typeof Symbol == "function" && Symbol.for, i = l ? Symbol.for("react.element") : 60103, n = l ? Symbol.for("react.portal") : 60106, a = l ? Symbol.for("react.fragment") : 60107, h = l ? Symbol.for("react.strict_mode") : 60108, v = l ? Symbol.for("react.profiler") : 60114, p = l ? Symbol.for("react.provider") : 60109, M = l ? Symbol.for("react.context") : 60110, F = l ? Symbol.for("react.async_mode") : 60111, E = l ? Symbol.for("react.concurrent_mode") : 60111, b = l ? Symbol.for("react.forward_ref") : 60112, A = l ? Symbol.for("react.suspense") : 60113, D = l ? Symbol.for("react.suspense_list") : 60120, N = l ? Symbol.for("react.memo") : 60115, I = l ? Symbol.for("react.lazy") : 60116, w = l ? Symbol.for("react.block") : 60121, y = l ? Symbol.for("react.fundamental") : 60117, L = l ? Symbol.for("react.responder") : 60118, $ = l ? Symbol.for("react.scope") : 60119;
  function W(S) {
    if (typeof S == "object" && S !== null) {
      var Q = S.$$typeof;
      switch (Q) {
        case i:
          switch (S = S.type, S) {
            case F:
            case E:
            case a:
            case v:
            case h:
            case A:
              return S;
            default:
              switch (S = S && S.$$typeof, S) {
                case M:
                case b:
                case I:
                case N:
                case p:
                  return S;
                default:
                  return Q;
              }
          }
        case n:
          return Q;
      }
    }
  }
  function j(S) {
    return W(S) === E;
  }
  return B1.AsyncMode = F, B1.ConcurrentMode = E, B1.ContextConsumer = M, B1.ContextProvider = p, B1.Element = i, B1.ForwardRef = b, B1.Fragment = a, B1.Lazy = I, B1.Memo = N, B1.Portal = n, B1.Profiler = v, B1.StrictMode = h, B1.Suspense = A, B1.isAsyncMode = function(S) {
    return j(S) || W(S) === F;
  }, B1.isConcurrentMode = j, B1.isContextConsumer = function(S) {
    return W(S) === M;
  }, B1.isContextProvider = function(S) {
    return W(S) === p;
  }, B1.isElement = function(S) {
    return typeof S == "object" && S !== null && S.$$typeof === i;
  }, B1.isForwardRef = function(S) {
    return W(S) === b;
  }, B1.isFragment = function(S) {
    return W(S) === a;
  }, B1.isLazy = function(S) {
    return W(S) === I;
  }, B1.isMemo = function(S) {
    return W(S) === N;
  }, B1.isPortal = function(S) {
    return W(S) === n;
  }, B1.isProfiler = function(S) {
    return W(S) === v;
  }, B1.isStrictMode = function(S) {
    return W(S) === h;
  }, B1.isSuspense = function(S) {
    return W(S) === A;
  }, B1.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === a || S === E || S === v || S === h || S === A || S === D || typeof S == "object" && S !== null && (S.$$typeof === I || S.$$typeof === N || S.$$typeof === p || S.$$typeof === M || S.$$typeof === b || S.$$typeof === y || S.$$typeof === L || S.$$typeof === $ || S.$$typeof === w);
  }, B1.typeOf = W, B1;
}
var L1 = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var v4;
function o9() {
  return v4 || (v4 = 1, process.env.NODE_ENV !== "production" && function() {
    var l = typeof Symbol == "function" && Symbol.for, i = l ? Symbol.for("react.element") : 60103, n = l ? Symbol.for("react.portal") : 60106, a = l ? Symbol.for("react.fragment") : 60107, h = l ? Symbol.for("react.strict_mode") : 60108, v = l ? Symbol.for("react.profiler") : 60114, p = l ? Symbol.for("react.provider") : 60109, M = l ? Symbol.for("react.context") : 60110, F = l ? Symbol.for("react.async_mode") : 60111, E = l ? Symbol.for("react.concurrent_mode") : 60111, b = l ? Symbol.for("react.forward_ref") : 60112, A = l ? Symbol.for("react.suspense") : 60113, D = l ? Symbol.for("react.suspense_list") : 60120, N = l ? Symbol.for("react.memo") : 60115, I = l ? Symbol.for("react.lazy") : 60116, w = l ? Symbol.for("react.block") : 60121, y = l ? Symbol.for("react.fundamental") : 60117, L = l ? Symbol.for("react.responder") : 60118, $ = l ? Symbol.for("react.scope") : 60119;
    function W(R) {
      return typeof R == "string" || typeof R == "function" || R === a || R === E || R === v || R === h || R === A || R === D || typeof R == "object" && R !== null && (R.$$typeof === I || R.$$typeof === N || R.$$typeof === p || R.$$typeof === M || R.$$typeof === b || R.$$typeof === y || R.$$typeof === L || R.$$typeof === $ || R.$$typeof === w);
    }
    function j(R) {
      if (typeof R == "object" && R !== null) {
        var M1 = R.$$typeof;
        switch (M1) {
          case i:
            var G = R.type;
            switch (G) {
              case F:
              case E:
              case a:
              case v:
              case h:
              case A:
                return G;
              default:
                var V1 = G && G.$$typeof;
                switch (V1) {
                  case M:
                  case b:
                  case I:
                  case N:
                  case p:
                    return V1;
                  default:
                    return M1;
                }
            }
          case n:
            return M1;
        }
      }
    }
    var S = F, Q = E, K = M, b1 = p, f1 = i, l1 = b, E1 = a, tt = I, k1 = N, U1 = n, nt = v, it = h, G1 = A, $1 = !1;
    function pt(R) {
      return $1 || ($1 = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), V(R) || j(R) === F;
    }
    function V(R) {
      return j(R) === E;
    }
    function U(R) {
      return j(R) === M;
    }
    function a1(R) {
      return j(R) === p;
    }
    function o1(R) {
      return typeof R == "object" && R !== null && R.$$typeof === i;
    }
    function t1(R) {
      return j(R) === b;
    }
    function s1(R) {
      return j(R) === a;
    }
    function r1(R) {
      return j(R) === I;
    }
    function u1(R) {
      return j(R) === N;
    }
    function h1(R) {
      return j(R) === n;
    }
    function v1(R) {
      return j(R) === v;
    }
    function p1(R) {
      return j(R) === h;
    }
    function K1(R) {
      return j(R) === A;
    }
    L1.AsyncMode = S, L1.ConcurrentMode = Q, L1.ContextConsumer = K, L1.ContextProvider = b1, L1.Element = f1, L1.ForwardRef = l1, L1.Fragment = E1, L1.Lazy = tt, L1.Memo = k1, L1.Portal = U1, L1.Profiler = nt, L1.StrictMode = it, L1.Suspense = G1, L1.isAsyncMode = pt, L1.isConcurrentMode = V, L1.isContextConsumer = U, L1.isContextProvider = a1, L1.isElement = o1, L1.isForwardRef = t1, L1.isFragment = s1, L1.isLazy = r1, L1.isMemo = u1, L1.isPortal = h1, L1.isProfiler = v1, L1.isStrictMode = p1, L1.isSuspense = K1, L1.isValidElementType = W, L1.typeOf = j;
  }()), L1;
}
var p4;
function u5() {
  return p4 || (p4 = 1, function(l) {
    process.env.NODE_ENV === "production" ? l.exports = a9() : l.exports = o9();
  }(G3)), G3.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var K3, m4;
function s9() {
  if (m4)
    return K3;
  m4 = 1;
  var l = Object.getOwnPropertySymbols, i = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function a(v) {
    if (v == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(v);
  }
  function h() {
    try {
      if (!Object.assign)
        return !1;
      var v = new String("abc");
      if (v[5] = "de", Object.getOwnPropertyNames(v)[0] === "5")
        return !1;
      for (var p = {}, M = 0; M < 10; M++)
        p["_" + String.fromCharCode(M)] = M;
      var F = Object.getOwnPropertyNames(p).map(function(b) {
        return p[b];
      });
      if (F.join("") !== "0123456789")
        return !1;
      var E = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(b) {
        E[b] = b;
      }), Object.keys(Object.assign({}, E)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return K3 = h() ? Object.assign : function(v, p) {
    for (var M, F = a(v), E, b = 1; b < arguments.length; b++) {
      M = Object(arguments[b]);
      for (var A in M)
        i.call(M, A) && (F[A] = M[A]);
      if (l) {
        E = l(M);
        for (var D = 0; D < E.length; D++)
          n.call(M, E[D]) && (F[E[D]] = M[E[D]]);
      }
    }
    return F;
  }, K3;
}
var Y3, g4;
function pi() {
  if (g4)
    return Y3;
  g4 = 1;
  var l = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Y3 = l, Y3;
}
var q3, w4;
function f5() {
  return w4 || (w4 = 1, q3 = Function.call.bind(Object.prototype.hasOwnProperty)), q3;
}
var j3, z4;
function c9() {
  if (z4)
    return j3;
  z4 = 1;
  var l = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var i = pi(), n = {}, a = f5();
    l = function(v) {
      var p = "Warning: " + v;
      typeof console < "u" && console.error(p);
      try {
        throw new Error(p);
      } catch {
      }
    };
  }
  function h(v, p, M, F, E) {
    if (process.env.NODE_ENV !== "production") {
      for (var b in v)
        if (a(v, b)) {
          var A;
          try {
            if (typeof v[b] != "function") {
              var D = Error(
                (F || "React class") + ": " + M + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof v[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw D.name = "Invariant Violation", D;
            }
            A = v[b](p, b, F, M, null, i);
          } catch (I) {
            A = I;
          }
          if (A && !(A instanceof Error) && l(
            (F || "React class") + ": type specification of " + M + " `" + b + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof A + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), A instanceof Error && !(A.message in n)) {
            n[A.message] = !0;
            var N = E ? E() : "";
            l(
              "Failed " + M + " type: " + A.message + (N != null ? N : "")
            );
          }
        }
    }
  }
  return h.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, j3 = h, j3;
}
var Z3, x4;
function h9() {
  if (x4)
    return Z3;
  x4 = 1;
  var l = u5(), i = s9(), n = pi(), a = f5(), h = c9(), v = function() {
  };
  process.env.NODE_ENV !== "production" && (v = function(M) {
    var F = "Warning: " + M;
    typeof console < "u" && console.error(F);
    try {
      throw new Error(F);
    } catch {
    }
  });
  function p() {
    return null;
  }
  return Z3 = function(M, F) {
    var E = typeof Symbol == "function" && Symbol.iterator, b = "@@iterator";
    function A(V) {
      var U = V && (E && V[E] || V[b]);
      if (typeof U == "function")
        return U;
    }
    var D = "<<anonymous>>", N = {
      array: L("array"),
      bigint: L("bigint"),
      bool: L("boolean"),
      func: L("function"),
      number: L("number"),
      object: L("object"),
      string: L("string"),
      symbol: L("symbol"),
      any: $(),
      arrayOf: W,
      element: j(),
      elementType: S(),
      instanceOf: Q,
      node: l1(),
      objectOf: b1,
      oneOf: K,
      oneOfType: f1,
      shape: tt,
      exact: k1
    };
    function I(V, U) {
      return V === U ? V !== 0 || 1 / V === 1 / U : V !== V && U !== U;
    }
    function w(V, U) {
      this.message = V, this.data = U && typeof U == "object" ? U : {}, this.stack = "";
    }
    w.prototype = Error.prototype;
    function y(V) {
      if (process.env.NODE_ENV !== "production")
        var U = {}, a1 = 0;
      function o1(s1, r1, u1, h1, v1, p1, K1) {
        if (h1 = h1 || D, p1 = p1 || u1, K1 !== n) {
          if (F) {
            var R = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw R.name = "Invariant Violation", R;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var M1 = h1 + ":" + u1;
            !U[M1] && a1 < 3 && (v(
              "You are manually calling a React.PropTypes validation function for the `" + p1 + "` prop on `" + h1 + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), U[M1] = !0, a1++);
          }
        }
        return r1[u1] == null ? s1 ? r1[u1] === null ? new w("The " + v1 + " `" + p1 + "` is marked as required " + ("in `" + h1 + "`, but its value is `null`.")) : new w("The " + v1 + " `" + p1 + "` is marked as required in " + ("`" + h1 + "`, but its value is `undefined`.")) : null : V(r1, u1, h1, v1, p1);
      }
      var t1 = o1.bind(null, !1);
      return t1.isRequired = o1.bind(null, !0), t1;
    }
    function L(V) {
      function U(a1, o1, t1, s1, r1, u1) {
        var h1 = a1[o1], v1 = it(h1);
        if (v1 !== V) {
          var p1 = G1(h1);
          return new w(
            "Invalid " + s1 + " `" + r1 + "` of type " + ("`" + p1 + "` supplied to `" + t1 + "`, expected ") + ("`" + V + "`."),
            { expectedType: V }
          );
        }
        return null;
      }
      return y(U);
    }
    function $() {
      return y(p);
    }
    function W(V) {
      function U(a1, o1, t1, s1, r1) {
        if (typeof V != "function")
          return new w("Property `" + r1 + "` of component `" + t1 + "` has invalid PropType notation inside arrayOf.");
        var u1 = a1[o1];
        if (!Array.isArray(u1)) {
          var h1 = it(u1);
          return new w("Invalid " + s1 + " `" + r1 + "` of type " + ("`" + h1 + "` supplied to `" + t1 + "`, expected an array."));
        }
        for (var v1 = 0; v1 < u1.length; v1++) {
          var p1 = V(u1, v1, t1, s1, r1 + "[" + v1 + "]", n);
          if (p1 instanceof Error)
            return p1;
        }
        return null;
      }
      return y(U);
    }
    function j() {
      function V(U, a1, o1, t1, s1) {
        var r1 = U[a1];
        if (!M(r1)) {
          var u1 = it(r1);
          return new w("Invalid " + t1 + " `" + s1 + "` of type " + ("`" + u1 + "` supplied to `" + o1 + "`, expected a single ReactElement."));
        }
        return null;
      }
      return y(V);
    }
    function S() {
      function V(U, a1, o1, t1, s1) {
        var r1 = U[a1];
        if (!l.isValidElementType(r1)) {
          var u1 = it(r1);
          return new w("Invalid " + t1 + " `" + s1 + "` of type " + ("`" + u1 + "` supplied to `" + o1 + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return y(V);
    }
    function Q(V) {
      function U(a1, o1, t1, s1, r1) {
        if (!(a1[o1] instanceof V)) {
          var u1 = V.name || D, h1 = pt(a1[o1]);
          return new w("Invalid " + s1 + " `" + r1 + "` of type " + ("`" + h1 + "` supplied to `" + t1 + "`, expected ") + ("instance of `" + u1 + "`."));
        }
        return null;
      }
      return y(U);
    }
    function K(V) {
      if (!Array.isArray(V))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? v(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : v("Invalid argument supplied to oneOf, expected an array.")), p;
      function U(a1, o1, t1, s1, r1) {
        for (var u1 = a1[o1], h1 = 0; h1 < V.length; h1++)
          if (I(u1, V[h1]))
            return null;
        var v1 = JSON.stringify(V, function(K1, R) {
          var M1 = G1(R);
          return M1 === "symbol" ? String(R) : R;
        });
        return new w("Invalid " + s1 + " `" + r1 + "` of value `" + String(u1) + "` " + ("supplied to `" + t1 + "`, expected one of " + v1 + "."));
      }
      return y(U);
    }
    function b1(V) {
      function U(a1, o1, t1, s1, r1) {
        if (typeof V != "function")
          return new w("Property `" + r1 + "` of component `" + t1 + "` has invalid PropType notation inside objectOf.");
        var u1 = a1[o1], h1 = it(u1);
        if (h1 !== "object")
          return new w("Invalid " + s1 + " `" + r1 + "` of type " + ("`" + h1 + "` supplied to `" + t1 + "`, expected an object."));
        for (var v1 in u1)
          if (a(u1, v1)) {
            var p1 = V(u1, v1, t1, s1, r1 + "." + v1, n);
            if (p1 instanceof Error)
              return p1;
          }
        return null;
      }
      return y(U);
    }
    function f1(V) {
      if (!Array.isArray(V))
        return process.env.NODE_ENV !== "production" && v("Invalid argument supplied to oneOfType, expected an instance of array."), p;
      for (var U = 0; U < V.length; U++) {
        var a1 = V[U];
        if (typeof a1 != "function")
          return v(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + $1(a1) + " at index " + U + "."
          ), p;
      }
      function o1(t1, s1, r1, u1, h1) {
        for (var v1 = [], p1 = 0; p1 < V.length; p1++) {
          var K1 = V[p1], R = K1(t1, s1, r1, u1, h1, n);
          if (R == null)
            return null;
          R.data && a(R.data, "expectedType") && v1.push(R.data.expectedType);
        }
        var M1 = v1.length > 0 ? ", expected one of type [" + v1.join(", ") + "]" : "";
        return new w("Invalid " + u1 + " `" + h1 + "` supplied to " + ("`" + r1 + "`" + M1 + "."));
      }
      return y(o1);
    }
    function l1() {
      function V(U, a1, o1, t1, s1) {
        return U1(U[a1]) ? null : new w("Invalid " + t1 + " `" + s1 + "` supplied to " + ("`" + o1 + "`, expected a ReactNode."));
      }
      return y(V);
    }
    function E1(V, U, a1, o1, t1) {
      return new w(
        (V || "React class") + ": " + U + " type `" + a1 + "." + o1 + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + t1 + "`."
      );
    }
    function tt(V) {
      function U(a1, o1, t1, s1, r1) {
        var u1 = a1[o1], h1 = it(u1);
        if (h1 !== "object")
          return new w("Invalid " + s1 + " `" + r1 + "` of type `" + h1 + "` " + ("supplied to `" + t1 + "`, expected `object`."));
        for (var v1 in V) {
          var p1 = V[v1];
          if (typeof p1 != "function")
            return E1(t1, s1, r1, v1, G1(p1));
          var K1 = p1(u1, v1, t1, s1, r1 + "." + v1, n);
          if (K1)
            return K1;
        }
        return null;
      }
      return y(U);
    }
    function k1(V) {
      function U(a1, o1, t1, s1, r1) {
        var u1 = a1[o1], h1 = it(u1);
        if (h1 !== "object")
          return new w("Invalid " + s1 + " `" + r1 + "` of type `" + h1 + "` " + ("supplied to `" + t1 + "`, expected `object`."));
        var v1 = i({}, a1[o1], V);
        for (var p1 in v1) {
          var K1 = V[p1];
          if (a(V, p1) && typeof K1 != "function")
            return E1(t1, s1, r1, p1, G1(K1));
          if (!K1)
            return new w(
              "Invalid " + s1 + " `" + r1 + "` key `" + p1 + "` supplied to `" + t1 + "`.\nBad object: " + JSON.stringify(a1[o1], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(V), null, "  ")
            );
          var R = K1(u1, p1, t1, s1, r1 + "." + p1, n);
          if (R)
            return R;
        }
        return null;
      }
      return y(U);
    }
    function U1(V) {
      switch (typeof V) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !V;
        case "object":
          if (Array.isArray(V))
            return V.every(U1);
          if (V === null || M(V))
            return !0;
          var U = A(V);
          if (U) {
            var a1 = U.call(V), o1;
            if (U !== V.entries) {
              for (; !(o1 = a1.next()).done; )
                if (!U1(o1.value))
                  return !1;
            } else
              for (; !(o1 = a1.next()).done; ) {
                var t1 = o1.value;
                if (t1 && !U1(t1[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function nt(V, U) {
      return V === "symbol" ? !0 : U ? U["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && U instanceof Symbol : !1;
    }
    function it(V) {
      var U = typeof V;
      return Array.isArray(V) ? "array" : V instanceof RegExp ? "object" : nt(U, V) ? "symbol" : U;
    }
    function G1(V) {
      if (typeof V > "u" || V === null)
        return "" + V;
      var U = it(V);
      if (U === "object") {
        if (V instanceof Date)
          return "date";
        if (V instanceof RegExp)
          return "regexp";
      }
      return U;
    }
    function $1(V) {
      var U = G1(V);
      switch (U) {
        case "array":
        case "object":
          return "an " + U;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + U;
        default:
          return U;
      }
    }
    function pt(V) {
      return !V.constructor || !V.constructor.name ? D : V.constructor.name;
    }
    return N.checkPropTypes = h, N.resetWarningCache = h.resetWarningCache, N.PropTypes = N, N;
  }, Z3;
}
var J3, M4;
function u9() {
  if (M4)
    return J3;
  M4 = 1;
  var l = pi();
  function i() {
  }
  function n() {
  }
  return n.resetWarningCache = i, J3 = function() {
    function a(p, M, F, E, b, A) {
      if (A !== l) {
        var D = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw D.name = "Invariant Violation", D;
      }
    }
    a.isRequired = a;
    function h() {
      return a;
    }
    var v = {
      array: a,
      bigint: a,
      bool: a,
      func: a,
      number: a,
      object: a,
      string: a,
      symbol: a,
      any: a,
      arrayOf: h,
      element: a,
      elementType: a,
      instanceOf: h,
      node: a,
      objectOf: h,
      oneOf: h,
      oneOfType: h,
      shape: h,
      exact: h,
      checkPropTypes: n,
      resetWarningCache: i
    };
    return v.PropTypes = v, v;
  }, J3;
}
if (process.env.NODE_ENV !== "production") {
  var f9 = u5(), d9 = !0;
  Ze.exports = h9()(f9.isElement, d9);
} else
  Ze.exports = u9()();
var Hn = { exports: {} }, tr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var F4;
function v9() {
  if (F4)
    return tr;
  F4 = 1;
  var l = Le, i = Symbol.for("react.element"), n = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, h = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, v = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(M, F, E) {
    var b, A = {}, D = null, N = null;
    E !== void 0 && (D = "" + E), F.key !== void 0 && (D = "" + F.key), F.ref !== void 0 && (N = F.ref);
    for (b in F)
      a.call(F, b) && !v.hasOwnProperty(b) && (A[b] = F[b]);
    if (M && M.defaultProps)
      for (b in F = M.defaultProps, F)
        A[b] === void 0 && (A[b] = F[b]);
    return { $$typeof: i, type: M, key: D, ref: N, props: A, _owner: h.current };
  }
  return tr.Fragment = n, tr.jsx = p, tr.jsxs = p, tr;
}
var er = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var y4;
function p9() {
  return y4 || (y4 = 1, process.env.NODE_ENV !== "production" && function() {
    var l = Le, i = Symbol.for("react.element"), n = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), v = Symbol.for("react.profiler"), p = Symbol.for("react.provider"), M = Symbol.for("react.context"), F = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), A = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), N = Symbol.for("react.offscreen"), I = Symbol.iterator, w = "@@iterator";
    function y(z) {
      if (z === null || typeof z != "object")
        return null;
      var k = I && z[I] || z[w];
      return typeof k == "function" ? k : null;
    }
    var L = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function $(z) {
      {
        for (var k = arguments.length, Y = new Array(k > 1 ? k - 1 : 0), c1 = 1; c1 < k; c1++)
          Y[c1 - 1] = arguments[c1];
        W("error", z, Y);
      }
    }
    function W(z, k, Y) {
      {
        var c1 = L.ReactDebugCurrentFrame, A1 = c1.getStackAddendum();
        A1 !== "" && (k += "%s", Y = Y.concat([A1]));
        var C1 = Y.map(function(y1) {
          return String(y1);
        });
        C1.unshift("Warning: " + k), Function.prototype.apply.call(console[z], console, C1);
      }
    }
    var j = !1, S = !1, Q = !1, K = !1, b1 = !1, f1;
    f1 = Symbol.for("react.module.reference");
    function l1(z) {
      return !!(typeof z == "string" || typeof z == "function" || z === a || z === v || b1 || z === h || z === E || z === b || K || z === N || j || S || Q || typeof z == "object" && z !== null && (z.$$typeof === D || z.$$typeof === A || z.$$typeof === p || z.$$typeof === M || z.$$typeof === F || z.$$typeof === f1 || z.getModuleId !== void 0));
    }
    function E1(z, k, Y) {
      var c1 = z.displayName;
      if (c1)
        return c1;
      var A1 = k.displayName || k.name || "";
      return A1 !== "" ? Y + "(" + A1 + ")" : Y;
    }
    function tt(z) {
      return z.displayName || "Context";
    }
    function k1(z) {
      if (z == null)
        return null;
      if (typeof z.tag == "number" && $("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof z == "function")
        return z.displayName || z.name || null;
      if (typeof z == "string")
        return z;
      switch (z) {
        case a:
          return "Fragment";
        case n:
          return "Portal";
        case v:
          return "Profiler";
        case h:
          return "StrictMode";
        case E:
          return "Suspense";
        case b:
          return "SuspenseList";
      }
      if (typeof z == "object")
        switch (z.$$typeof) {
          case M:
            var k = z;
            return tt(k) + ".Consumer";
          case p:
            var Y = z;
            return tt(Y._context) + ".Provider";
          case F:
            return E1(z, z.render, "ForwardRef");
          case A:
            var c1 = z.displayName || null;
            return c1 !== null ? c1 : k1(z.type) || "Memo";
          case D: {
            var A1 = z, C1 = A1._payload, y1 = A1._init;
            try {
              return k1(y1(C1));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var U1 = Object.assign, nt = 0, it, G1, $1, pt, V, U, a1;
    function o1() {
    }
    o1.__reactDisabledLog = !0;
    function t1() {
      {
        if (nt === 0) {
          it = console.log, G1 = console.info, $1 = console.warn, pt = console.error, V = console.group, U = console.groupCollapsed, a1 = console.groupEnd;
          var z = {
            configurable: !0,
            enumerable: !0,
            value: o1,
            writable: !0
          };
          Object.defineProperties(console, {
            info: z,
            log: z,
            warn: z,
            error: z,
            group: z,
            groupCollapsed: z,
            groupEnd: z
          });
        }
        nt++;
      }
    }
    function s1() {
      {
        if (nt--, nt === 0) {
          var z = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: U1({}, z, {
              value: it
            }),
            info: U1({}, z, {
              value: G1
            }),
            warn: U1({}, z, {
              value: $1
            }),
            error: U1({}, z, {
              value: pt
            }),
            group: U1({}, z, {
              value: V
            }),
            groupCollapsed: U1({}, z, {
              value: U
            }),
            groupEnd: U1({}, z, {
              value: a1
            })
          });
        }
        nt < 0 && $("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var r1 = L.ReactCurrentDispatcher, u1;
    function h1(z, k, Y) {
      {
        if (u1 === void 0)
          try {
            throw Error();
          } catch (A1) {
            var c1 = A1.stack.trim().match(/\n( *(at )?)/);
            u1 = c1 && c1[1] || "";
          }
        return `
` + u1 + z;
      }
    }
    var v1 = !1, p1;
    {
      var K1 = typeof WeakMap == "function" ? WeakMap : Map;
      p1 = new K1();
    }
    function R(z, k) {
      if (!z || v1)
        return "";
      {
        var Y = p1.get(z);
        if (Y !== void 0)
          return Y;
      }
      var c1;
      v1 = !0;
      var A1 = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var C1;
      C1 = r1.current, r1.current = null, t1();
      try {
        if (k) {
          var y1 = function() {
            throw Error();
          };
          if (Object.defineProperty(y1.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(y1, []);
            } catch (Ht) {
              c1 = Ht;
            }
            Reflect.construct(z, [], y1);
          } else {
            try {
              y1.call();
            } catch (Ht) {
              c1 = Ht;
            }
            z.call(y1.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ht) {
            c1 = Ht;
          }
          z();
        }
      } catch (Ht) {
        if (Ht && c1 && typeof Ht.stack == "string") {
          for (var x1 = Ht.stack.split(`
`), ft = c1.stack.split(`
`), X1 = x1.length - 1, et = ft.length - 1; X1 >= 1 && et >= 0 && x1[X1] !== ft[et]; )
            et--;
          for (; X1 >= 1 && et >= 0; X1--, et--)
            if (x1[X1] !== ft[et]) {
              if (X1 !== 1 || et !== 1)
                do
                  if (X1--, et--, et < 0 || x1[X1] !== ft[et]) {
                    var yt = `
` + x1[X1].replace(" at new ", " at ");
                    return z.displayName && yt.includes("<anonymous>") && (yt = yt.replace("<anonymous>", z.displayName)), typeof z == "function" && p1.set(z, yt), yt;
                  }
                while (X1 >= 1 && et >= 0);
              break;
            }
        }
      } finally {
        v1 = !1, r1.current = C1, s1(), Error.prepareStackTrace = A1;
      }
      var Zt = z ? z.displayName || z.name : "", Mr = Zt ? h1(Zt) : "";
      return typeof z == "function" && p1.set(z, Mr), Mr;
    }
    function M1(z, k, Y) {
      return R(z, !1);
    }
    function G(z) {
      var k = z.prototype;
      return !!(k && k.isReactComponent);
    }
    function V1(z, k, Y) {
      if (z == null)
        return "";
      if (typeof z == "function")
        return R(z, G(z));
      if (typeof z == "string")
        return h1(z);
      switch (z) {
        case E:
          return h1("Suspense");
        case b:
          return h1("SuspenseList");
      }
      if (typeof z == "object")
        switch (z.$$typeof) {
          case F:
            return M1(z.render);
          case A:
            return V1(z.type, k, Y);
          case D: {
            var c1 = z, A1 = c1._payload, C1 = c1._init;
            try {
              return V1(C1(A1), k, Y);
            } catch {
            }
          }
        }
      return "";
    }
    var ot = Object.prototype.hasOwnProperty, Y1 = {}, Ct = L.ReactDebugCurrentFrame;
    function mt(z) {
      if (z) {
        var k = z._owner, Y = V1(z.type, z._source, k ? k.type : null);
        Ct.setExtraStackFrame(Y);
      } else
        Ct.setExtraStackFrame(null);
    }
    function se(z, k, Y, c1, A1) {
      {
        var C1 = Function.call.bind(ot);
        for (var y1 in z)
          if (C1(z, y1)) {
            var x1 = void 0;
            try {
              if (typeof z[y1] != "function") {
                var ft = Error((c1 || "React class") + ": " + Y + " type `" + y1 + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof z[y1] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ft.name = "Invariant Violation", ft;
              }
              x1 = z[y1](k, y1, c1, Y, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (X1) {
              x1 = X1;
            }
            x1 && !(x1 instanceof Error) && (mt(A1), $("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", c1 || "React class", Y, y1, typeof x1), mt(null)), x1 instanceof Error && !(x1.message in Y1) && (Y1[x1.message] = !0, mt(A1), $("Failed %s type: %s", Y, x1.message), mt(null));
          }
      }
    }
    var Tt = Array.isArray;
    function ce(z) {
      return Tt(z);
    }
    function Je(z) {
      {
        var k = typeof Symbol == "function" && Symbol.toStringTag, Y = k && z[Symbol.toStringTag] || z.constructor.name || "Object";
        return Y;
      }
    }
    function bn(z) {
      try {
        return Fe(z), !1;
      } catch {
        return !0;
      }
    }
    function Fe(z) {
      return "" + z;
    }
    function dr(z) {
      if (bn(z))
        return $("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Je(z)), Fe(z);
    }
    var jt = L.ReactCurrentOwner, ye = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Xe, Qe, Ve;
    Ve = {};
    function E2(z) {
      if (ot.call(z, "ref")) {
        var k = Object.getOwnPropertyDescriptor(z, "ref").get;
        if (k && k.isReactWarning)
          return !1;
      }
      return z.ref !== void 0;
    }
    function A2(z) {
      if (ot.call(z, "key")) {
        var k = Object.getOwnPropertyDescriptor(z, "key").get;
        if (k && k.isReactWarning)
          return !1;
      }
      return z.key !== void 0;
    }
    function S2(z, k) {
      if (typeof z.ref == "string" && jt.current && k && jt.current.stateNode !== k) {
        var Y = k1(jt.current.type);
        Ve[Y] || ($('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', k1(jt.current.type), z.ref), Ve[Y] = !0);
      }
    }
    function D2(z, k) {
      {
        var Y = function() {
          Xe || (Xe = !0, $("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", k));
        };
        Y.isReactWarning = !0, Object.defineProperty(z, "key", {
          get: Y,
          configurable: !0
        });
      }
    }
    function C2(z, k) {
      {
        var Y = function() {
          Qe || (Qe = !0, $("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", k));
        };
        Y.isReactWarning = !0, Object.defineProperty(z, "ref", {
          get: Y,
          configurable: !0
        });
      }
    }
    var T2 = function(z, k, Y, c1, A1, C1, y1) {
      var x1 = {
        $$typeof: i,
        type: z,
        key: k,
        ref: Y,
        props: y1,
        _owner: C1
      };
      return x1._store = {}, Object.defineProperty(x1._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(x1, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c1
      }), Object.defineProperty(x1, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: A1
      }), Object.freeze && (Object.freeze(x1.props), Object.freeze(x1)), x1;
    };
    function En(z, k, Y, c1, A1) {
      {
        var C1, y1 = {}, x1 = null, ft = null;
        Y !== void 0 && (dr(Y), x1 = "" + Y), A2(k) && (dr(k.key), x1 = "" + k.key), E2(k) && (ft = k.ref, S2(k, A1));
        for (C1 in k)
          ot.call(k, C1) && !ye.hasOwnProperty(C1) && (y1[C1] = k[C1]);
        if (z && z.defaultProps) {
          var X1 = z.defaultProps;
          for (C1 in X1)
            y1[C1] === void 0 && (y1[C1] = X1[C1]);
        }
        if (x1 || ft) {
          var et = typeof z == "function" ? z.displayName || z.name || "Unknown" : z;
          x1 && D2(y1, et), ft && C2(y1, et);
        }
        return T2(z, x1, ft, A1, c1, jt.current, y1);
      }
    }
    var B2 = L.ReactCurrentOwner, vr = L.ReactDebugCurrentFrame;
    function he(z) {
      if (z) {
        var k = z._owner, Y = V1(z.type, z._source, k ? k.type : null);
        vr.setExtraStackFrame(Y);
      } else
        vr.setExtraStackFrame(null);
    }
    var t2;
    t2 = !1;
    function L2(z) {
      return typeof z == "object" && z !== null && z.$$typeof === i;
    }
    function pr() {
      {
        if (B2.current) {
          var z = k1(B2.current.type);
          if (z)
            return `

Check the render method of \`` + z + "`.";
        }
        return "";
      }
    }
    function An(z) {
      {
        if (z !== void 0) {
          var k = z.fileName.replace(/^.*[\\\/]/, ""), Y = z.lineNumber;
          return `

Check your code at ` + k + ":" + Y + ".";
        }
        return "";
      }
    }
    var mr = {};
    function gr(z) {
      {
        var k = pr();
        if (!k) {
          var Y = typeof z == "string" ? z : z.displayName || z.name;
          Y && (k = `

Check the top-level render call using <` + Y + ">.");
        }
        return k;
      }
    }
    function wr(z, k) {
      {
        if (!z._store || z._store.validated || z.key != null)
          return;
        z._store.validated = !0;
        var Y = gr(k);
        if (mr[Y])
          return;
        mr[Y] = !0;
        var c1 = "";
        z && z._owner && z._owner !== B2.current && (c1 = " It was passed a child from " + k1(z._owner.type) + "."), he(z), $('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Y, c1), he(null);
      }
    }
    function zr(z, k) {
      {
        if (typeof z != "object")
          return;
        if (ce(z))
          for (var Y = 0; Y < z.length; Y++) {
            var c1 = z[Y];
            L2(c1) && wr(c1, k);
          }
        else if (L2(z))
          z._store && (z._store.validated = !0);
        else if (z) {
          var A1 = y(z);
          if (typeof A1 == "function" && A1 !== z.entries)
            for (var C1 = A1.call(z), y1; !(y1 = C1.next()).done; )
              L2(y1.value) && wr(y1.value, k);
        }
      }
    }
    function Sn(z) {
      {
        var k = z.type;
        if (k == null || typeof k == "string")
          return;
        var Y;
        if (typeof k == "function")
          Y = k.propTypes;
        else if (typeof k == "object" && (k.$$typeof === F || k.$$typeof === A))
          Y = k.propTypes;
        else
          return;
        if (Y) {
          var c1 = k1(k);
          se(Y, z.props, "prop", c1, z);
        } else if (k.PropTypes !== void 0 && !t2) {
          t2 = !0;
          var A1 = k1(k);
          $("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", A1 || "Unknown");
        }
        typeof k.getDefaultProps == "function" && !k.getDefaultProps.isReactClassApproved && $("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function O2(z) {
      {
        for (var k = Object.keys(z.props), Y = 0; Y < k.length; Y++) {
          var c1 = k[Y];
          if (c1 !== "children" && c1 !== "key") {
            he(z), $("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", c1), he(null);
            break;
          }
        }
        z.ref !== null && (he(z), $("Invalid attribute `ref` supplied to `React.Fragment`."), he(null));
      }
    }
    function xr(z, k, Y, c1, A1, C1) {
      {
        var y1 = l1(z);
        if (!y1) {
          var x1 = "";
          (z === void 0 || typeof z == "object" && z !== null && Object.keys(z).length === 0) && (x1 += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ft = An(A1);
          ft ? x1 += ft : x1 += pr();
          var X1;
          z === null ? X1 = "null" : ce(z) ? X1 = "array" : z !== void 0 && z.$$typeof === i ? (X1 = "<" + (k1(z.type) || "Unknown") + " />", x1 = " Did you accidentally export a JSX literal instead of a component?") : X1 = typeof z, $("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", X1, x1);
        }
        var et = En(z, k, Y, A1, C1);
        if (et == null)
          return et;
        if (y1) {
          var yt = k.children;
          if (yt !== void 0)
            if (c1)
              if (ce(yt)) {
                for (var Zt = 0; Zt < yt.length; Zt++)
                  zr(yt[Zt], z);
                Object.freeze && Object.freeze(yt);
              } else
                $("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              zr(yt, z);
        }
        return z === a ? O2(et) : Sn(et), et;
      }
    }
    function R2(z, k, Y) {
      return xr(z, k, Y, !0);
    }
    function Dn(z, k, Y) {
      return xr(z, k, Y, !1);
    }
    var Cn = Dn, Tn = R2;
    er.Fragment = a, er.jsx = Cn, er.jsxs = Tn;
  }()), er;
}
(function(l) {
  process.env.NODE_ENV === "production" ? l.exports = v9() : l.exports = p9();
})(Hn);
const m9 = Hn.exports.Fragment, e = Hn.exports.jsx, d = Hn.exports.jsxs;
/** @license MUI v5.10.2
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function g9(l, i) {
  const n = l9(l, i);
  return process.env.NODE_ENV !== "production" ? (...a) => {
    const h = typeof l == "string" ? `"${l}"` : "component";
    return a.length === 0 ? console.error([`MUI: Seems like you called \`styled(${h})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : a.some((v) => v === void 0) && console.error(`MUI: the styled(${h})(...args) API requires all its args to be defined.`), n(...a);
  } : n;
}
const w9 = (l, i) => {
  Array.isArray(l.__emotion_styles) && (l.__emotion_styles = i(l.__emotion_styles));
}, z9 = process.env.NODE_ENV !== "production" ? Ze.exports.oneOfType([Ze.exports.number, Ze.exports.string, Ze.exports.object, Ze.exports.array]) : {}, Oe = z9;
function hn(l) {
  return l !== null && typeof l == "object" && l.constructor === Object;
}
function Me(l, i, n = {
  clone: !0
}) {
  const a = n.clone ? J1({}, l) : l;
  return hn(l) && hn(i) && Object.keys(i).forEach((h) => {
    h !== "__proto__" && (hn(i[h]) && h in l && hn(l[h]) ? a[h] = Me(l[h], i[h], n) : a[h] = i[h]);
  }), a;
}
function H2(l) {
  let i = "https://mui.com/production-error/?code=" + l;
  for (let n = 1; n < arguments.length; n += 1)
    i += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + l + "; visit " + i + " for the full message.";
}
var ii = { exports: {} }, O1 = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var H4;
function x9() {
  if (H4)
    return O1;
  H4 = 1;
  var l = Symbol.for("react.element"), i = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), h = Symbol.for("react.profiler"), v = Symbol.for("react.provider"), p = Symbol.for("react.context"), M = Symbol.for("react.server_context"), F = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), A = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), N = Symbol.for("react.offscreen"), I;
  I = Symbol.for("react.module.reference");
  function w(y) {
    if (typeof y == "object" && y !== null) {
      var L = y.$$typeof;
      switch (L) {
        case l:
          switch (y = y.type, y) {
            case n:
            case h:
            case a:
            case E:
            case b:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case M:
                case p:
                case F:
                case D:
                case A:
                case v:
                  return y;
                default:
                  return L;
              }
          }
        case i:
          return L;
      }
    }
  }
  return O1.ContextConsumer = p, O1.ContextProvider = v, O1.Element = l, O1.ForwardRef = F, O1.Fragment = n, O1.Lazy = D, O1.Memo = A, O1.Portal = i, O1.Profiler = h, O1.StrictMode = a, O1.Suspense = E, O1.SuspenseList = b, O1.isAsyncMode = function() {
    return !1;
  }, O1.isConcurrentMode = function() {
    return !1;
  }, O1.isContextConsumer = function(y) {
    return w(y) === p;
  }, O1.isContextProvider = function(y) {
    return w(y) === v;
  }, O1.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === l;
  }, O1.isForwardRef = function(y) {
    return w(y) === F;
  }, O1.isFragment = function(y) {
    return w(y) === n;
  }, O1.isLazy = function(y) {
    return w(y) === D;
  }, O1.isMemo = function(y) {
    return w(y) === A;
  }, O1.isPortal = function(y) {
    return w(y) === i;
  }, O1.isProfiler = function(y) {
    return w(y) === h;
  }, O1.isStrictMode = function(y) {
    return w(y) === a;
  }, O1.isSuspense = function(y) {
    return w(y) === E;
  }, O1.isSuspenseList = function(y) {
    return w(y) === b;
  }, O1.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === n || y === h || y === a || y === E || y === b || y === N || typeof y == "object" && y !== null && (y.$$typeof === D || y.$$typeof === A || y.$$typeof === v || y.$$typeof === p || y.$$typeof === F || y.$$typeof === I || y.getModuleId !== void 0);
  }, O1.typeOf = w, O1;
}
var R1 = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _4;
function M9() {
  return _4 || (_4 = 1, process.env.NODE_ENV !== "production" && function() {
    var l = Symbol.for("react.element"), i = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), h = Symbol.for("react.profiler"), v = Symbol.for("react.provider"), p = Symbol.for("react.context"), M = Symbol.for("react.server_context"), F = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), A = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), N = Symbol.for("react.offscreen"), I = !1, w = !1, y = !1, L = !1, $ = !1, W;
    W = Symbol.for("react.module.reference");
    function j(G) {
      return !!(typeof G == "string" || typeof G == "function" || G === n || G === h || $ || G === a || G === E || G === b || L || G === N || I || w || y || typeof G == "object" && G !== null && (G.$$typeof === D || G.$$typeof === A || G.$$typeof === v || G.$$typeof === p || G.$$typeof === F || G.$$typeof === W || G.getModuleId !== void 0));
    }
    function S(G) {
      if (typeof G == "object" && G !== null) {
        var V1 = G.$$typeof;
        switch (V1) {
          case l:
            var ot = G.type;
            switch (ot) {
              case n:
              case h:
              case a:
              case E:
              case b:
                return ot;
              default:
                var Y1 = ot && ot.$$typeof;
                switch (Y1) {
                  case M:
                  case p:
                  case F:
                  case D:
                  case A:
                  case v:
                    return Y1;
                  default:
                    return V1;
                }
            }
          case i:
            return V1;
        }
      }
    }
    var Q = p, K = v, b1 = l, f1 = F, l1 = n, E1 = D, tt = A, k1 = i, U1 = h, nt = a, it = E, G1 = b, $1 = !1, pt = !1;
    function V(G) {
      return $1 || ($1 = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function U(G) {
      return pt || (pt = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function a1(G) {
      return S(G) === p;
    }
    function o1(G) {
      return S(G) === v;
    }
    function t1(G) {
      return typeof G == "object" && G !== null && G.$$typeof === l;
    }
    function s1(G) {
      return S(G) === F;
    }
    function r1(G) {
      return S(G) === n;
    }
    function u1(G) {
      return S(G) === D;
    }
    function h1(G) {
      return S(G) === A;
    }
    function v1(G) {
      return S(G) === i;
    }
    function p1(G) {
      return S(G) === h;
    }
    function K1(G) {
      return S(G) === a;
    }
    function R(G) {
      return S(G) === E;
    }
    function M1(G) {
      return S(G) === b;
    }
    R1.ContextConsumer = Q, R1.ContextProvider = K, R1.Element = b1, R1.ForwardRef = f1, R1.Fragment = l1, R1.Lazy = E1, R1.Memo = tt, R1.Portal = k1, R1.Profiler = U1, R1.StrictMode = nt, R1.Suspense = it, R1.SuspenseList = G1, R1.isAsyncMode = V, R1.isConcurrentMode = U, R1.isContextConsumer = a1, R1.isContextProvider = o1, R1.isElement = t1, R1.isForwardRef = s1, R1.isFragment = r1, R1.isLazy = u1, R1.isMemo = h1, R1.isPortal = v1, R1.isProfiler = p1, R1.isStrictMode = K1, R1.isSuspense = R, R1.isSuspenseList = M1, R1.isValidElementType = j, R1.typeOf = S;
  }()), R1;
}
(function(l) {
  process.env.NODE_ENV === "production" ? l.exports = x9() : l.exports = M9();
})(ii);
const F9 = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function y9(l) {
  const i = `${l}`.match(F9);
  return i && i[1] || "";
}
function d5(l, i = "") {
  return l.displayName || l.name || y9(l) || i;
}
function b4(l, i, n) {
  const a = d5(i);
  return l.displayName || (a !== "" ? `${n}(${a})` : n);
}
function H9(l) {
  if (l != null) {
    if (typeof l == "string")
      return l;
    if (typeof l == "function")
      return d5(l, "Component");
    if (typeof l == "object")
      switch (l.$$typeof) {
        case ii.exports.ForwardRef:
          return b4(l, l.render, "ForwardRef");
        case ii.exports.Memo:
          return b4(l, l.type, "memo");
        default:
          return;
      }
  }
}
function pn(l) {
  if (typeof l != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : H2(7));
  return l.charAt(0).toUpperCase() + l.slice(1);
}
const E4 = (l) => l, _9 = () => {
  let l = E4;
  return {
    configure(i) {
      l = i;
    },
    generate(i) {
      return l(i);
    },
    reset() {
      l = E4;
    }
  };
}, b9 = _9(), E9 = b9, A9 = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  required: "required",
  selected: "selected"
};
function S9(l, i, n = "Mui") {
  const a = A9[i];
  return a ? `${n}-${a}` : `${E9.generate(l)}-${i}`;
}
function ir(l, i) {
  return i ? Me(l, i, {
    clone: !1
  }) : l;
}
const mi = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536
}, A4 = {
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (l) => `@media (min-width:${mi[l]}px)`
};
function Re(l, i, n) {
  const a = l.theme || {};
  if (Array.isArray(i)) {
    const v = a.breakpoints || A4;
    return i.reduce((p, M, F) => (p[v.up(v.keys[F])] = n(i[F]), p), {});
  }
  if (typeof i == "object") {
    const v = a.breakpoints || A4;
    return Object.keys(i).reduce((p, M) => {
      if (Object.keys(v.values || mi).indexOf(M) !== -1) {
        const F = v.up(M);
        p[F] = n(i[M], M);
      } else {
        const F = M;
        p[F] = i[F];
      }
      return p;
    }, {});
  }
  return n(i);
}
function D9(l = {}) {
  var i;
  return ((i = l.keys) == null ? void 0 : i.reduce((a, h) => {
    const v = l.up(h);
    return a[v] = {}, a;
  }, {})) || {};
}
function C9(l, i) {
  return l.reduce((n, a) => {
    const h = n[a];
    return (!h || Object.keys(h).length === 0) && delete n[a], n;
  }, i);
}
function gi(l, i, n = !0) {
  if (!i || typeof i != "string")
    return null;
  if (l && l.vars && n) {
    const a = `vars.${i}`.split(".").reduce((h, v) => h && h[v] ? h[v] : null, l);
    if (a != null)
      return a;
  }
  return i.split(".").reduce((a, h) => a && a[h] != null ? a[h] : null, l);
}
function S4(l, i, n, a = n) {
  let h;
  return typeof l == "function" ? h = l(n) : Array.isArray(l) ? h = l[n] || a : h = gi(l, n) || a, i && (h = i(h)), h;
}
function J(l) {
  const {
    prop: i,
    cssProperty: n = l.prop,
    themeKey: a,
    transform: h
  } = l, v = (p) => {
    if (p[i] == null)
      return null;
    const M = p[i], F = p.theme, E = gi(F, a) || {};
    return Re(p, M, (A) => {
      let D = S4(E, h, A);
      return A === D && typeof A == "string" && (D = S4(E, h, `${i}${A === "default" ? "" : pn(A)}`, A)), n === !1 ? D : {
        [n]: D
      };
    });
  };
  return v.propTypes = process.env.NODE_ENV !== "production" ? {
    [i]: Oe
  } : {}, v.filterProps = [i], v;
}
function Ie(...l) {
  const i = l.reduce((a, h) => (h.filterProps.forEach((v) => {
    a[v] = h;
  }), a), {}), n = (a) => Object.keys(a).reduce((h, v) => i[v] ? ir(h, i[v](a)) : h, {});
  return n.propTypes = process.env.NODE_ENV !== "production" ? l.reduce((a, h) => Object.assign(a, h.propTypes), {}) : {}, n.filterProps = l.reduce((a, h) => a.concat(h.filterProps), []), n;
}
function T9(l) {
  const i = {};
  return (n) => (i[n] === void 0 && (i[n] = l(n)), i[n]);
}
const B9 = {
  m: "margin",
  p: "padding"
}, L9 = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, D4 = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, O9 = T9((l) => {
  if (l.length > 2)
    if (D4[l])
      l = D4[l];
    else
      return [l];
  const [i, n] = l.split(""), a = B9[i], h = L9[n] || "";
  return Array.isArray(h) ? h.map((v) => a + v) : [a + h];
}), v5 = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], p5 = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], wi = [...v5, ...p5];
function hr(l, i, n, a) {
  var h;
  const v = (h = gi(l, i, !1)) != null ? h : n;
  return typeof v == "number" ? (p) => typeof p == "string" ? p : (process.env.NODE_ENV !== "production" && typeof p != "number" && console.error(`MUI: Expected ${a} argument to be a number or a string, got ${p}.`), v * p) : Array.isArray(v) ? (p) => typeof p == "string" ? p : (process.env.NODE_ENV !== "production" && (Number.isInteger(p) ? p > v.length - 1 && console.error([`MUI: The value provided (${p}) overflows.`, `The supported values are: ${JSON.stringify(v)}.`, `${p} > ${v.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${i}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${i}\` as a number.`].join(`
`))), v[p]) : typeof v == "function" ? v : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${i}\` value (${v}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function m5(l) {
  return hr(l, "spacing", 8, "spacing");
}
function ur(l, i) {
  if (typeof i == "string" || i == null)
    return i;
  const n = Math.abs(i), a = l(n);
  return i >= 0 ? a : typeof a == "number" ? -a : `-${a}`;
}
function R9(l, i) {
  return (n) => l.reduce((a, h) => (a[h] = ur(i, n), a), {});
}
function I9(l, i, n, a) {
  if (i.indexOf(n) === -1)
    return null;
  const h = O9(n), v = R9(h, a), p = l[n];
  return Re(l, p, v);
}
function P9(l, i) {
  const n = m5(l.theme);
  return Object.keys(l).map((a) => I9(l, i, a, n)).reduce(ir, {});
}
process.env.NODE_ENV !== "production" && v5.reduce((l, i) => (l[i] = Oe, l), {});
process.env.NODE_ENV !== "production" && p5.reduce((l, i) => (l[i] = Oe, l), {});
function _n(l) {
  return P9(l, wi);
}
_n.propTypes = process.env.NODE_ENV !== "production" ? wi.reduce((l, i) => (l[i] = Oe, l), {}) : {};
_n.filterProps = wi;
function fr(l) {
  return typeof l != "number" ? l : `${l}px solid`;
}
const V9 = J({
  prop: "border",
  themeKey: "borders",
  transform: fr
}), N9 = J({
  prop: "borderTop",
  themeKey: "borders",
  transform: fr
}), k9 = J({
  prop: "borderRight",
  themeKey: "borders",
  transform: fr
}), $9 = J({
  prop: "borderBottom",
  themeKey: "borders",
  transform: fr
}), W9 = J({
  prop: "borderLeft",
  themeKey: "borders",
  transform: fr
}), U9 = J({
  prop: "borderColor",
  themeKey: "palette"
}), G9 = J({
  prop: "borderTopColor",
  themeKey: "palette"
}), K9 = J({
  prop: "borderRightColor",
  themeKey: "palette"
}), Y9 = J({
  prop: "borderBottomColor",
  themeKey: "palette"
}), q9 = J({
  prop: "borderLeftColor",
  themeKey: "palette"
}), zi = (l) => {
  if (l.borderRadius !== void 0 && l.borderRadius !== null) {
    const i = hr(l.theme, "shape.borderRadius", 4, "borderRadius"), n = (a) => ({
      borderRadius: ur(i, a)
    });
    return Re(l, l.borderRadius, n);
  }
  return null;
};
zi.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Oe
} : {};
zi.filterProps = ["borderRadius"];
const j9 = Ie(V9, N9, k9, $9, W9, U9, G9, K9, Y9, q9, zi), g5 = j9, Z9 = J({
  prop: "displayPrint",
  cssProperty: !1,
  transform: (l) => ({
    "@media print": {
      display: l
    }
  })
}), J9 = J({
  prop: "display"
}), X9 = J({
  prop: "overflow"
}), Q9 = J({
  prop: "textOverflow"
}), tu = J({
  prop: "visibility"
}), eu = J({
  prop: "whiteSpace"
}), w5 = Ie(Z9, J9, X9, Q9, tu, eu), ru = J({
  prop: "flexBasis"
}), nu = J({
  prop: "flexDirection"
}), iu = J({
  prop: "flexWrap"
}), lu = J({
  prop: "justifyContent"
}), au = J({
  prop: "alignItems"
}), ou = J({
  prop: "alignContent"
}), su = J({
  prop: "order"
}), cu = J({
  prop: "flex"
}), hu = J({
  prop: "flexGrow"
}), uu = J({
  prop: "flexShrink"
}), fu = J({
  prop: "alignSelf"
}), du = J({
  prop: "justifyItems"
}), vu = J({
  prop: "justifySelf"
}), pu = Ie(ru, nu, iu, lu, au, ou, su, cu, hu, uu, fu, du, vu), z5 = pu, xi = (l) => {
  if (l.gap !== void 0 && l.gap !== null) {
    const i = hr(l.theme, "spacing", 8, "gap"), n = (a) => ({
      gap: ur(i, a)
    });
    return Re(l, l.gap, n);
  }
  return null;
};
xi.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Oe
} : {};
xi.filterProps = ["gap"];
const Mi = (l) => {
  if (l.columnGap !== void 0 && l.columnGap !== null) {
    const i = hr(l.theme, "spacing", 8, "columnGap"), n = (a) => ({
      columnGap: ur(i, a)
    });
    return Re(l, l.columnGap, n);
  }
  return null;
};
Mi.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Oe
} : {};
Mi.filterProps = ["columnGap"];
const Fi = (l) => {
  if (l.rowGap !== void 0 && l.rowGap !== null) {
    const i = hr(l.theme, "spacing", 8, "rowGap"), n = (a) => ({
      rowGap: ur(i, a)
    });
    return Re(l, l.rowGap, n);
  }
  return null;
};
Fi.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Oe
} : {};
Fi.filterProps = ["rowGap"];
const mu = J({
  prop: "gridColumn"
}), gu = J({
  prop: "gridRow"
}), wu = J({
  prop: "gridAutoFlow"
}), zu = J({
  prop: "gridAutoColumns"
}), xu = J({
  prop: "gridAutoRows"
}), Mu = J({
  prop: "gridTemplateColumns"
}), Fu = J({
  prop: "gridTemplateRows"
}), yu = J({
  prop: "gridTemplateAreas"
}), Hu = J({
  prop: "gridArea"
}), _u = Ie(xi, Mi, Fi, mu, gu, wu, zu, xu, Mu, Fu, yu, Hu), x5 = _u, bu = J({
  prop: "color",
  themeKey: "palette"
}), Eu = J({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette"
}), Au = J({
  prop: "backgroundColor",
  themeKey: "palette"
}), Su = Ie(bu, Eu, Au), M5 = Su, Du = J({
  prop: "position"
}), Cu = J({
  prop: "zIndex",
  themeKey: "zIndex"
}), Tu = J({
  prop: "top"
}), Bu = J({
  prop: "right"
}), Lu = J({
  prop: "bottom"
}), Ou = J({
  prop: "left"
}), F5 = Ie(Du, Cu, Tu, Bu, Lu, Ou), Ru = J({
  prop: "boxShadow",
  themeKey: "shadows"
}), y5 = Ru;
function Pe(l) {
  return l <= 1 && l !== 0 ? `${l * 100}%` : l;
}
const Iu = J({
  prop: "width",
  transform: Pe
}), H5 = (l) => {
  if (l.maxWidth !== void 0 && l.maxWidth !== null) {
    const i = (n) => {
      var a, h, v;
      return {
        maxWidth: ((a = l.theme) == null || (h = a.breakpoints) == null || (v = h.values) == null ? void 0 : v[n]) || mi[n] || Pe(n)
      };
    };
    return Re(l, l.maxWidth, i);
  }
  return null;
};
H5.filterProps = ["maxWidth"];
const Pu = J({
  prop: "minWidth",
  transform: Pe
}), Vu = J({
  prop: "height",
  transform: Pe
}), Nu = J({
  prop: "maxHeight",
  transform: Pe
}), ku = J({
  prop: "minHeight",
  transform: Pe
});
J({
  prop: "size",
  cssProperty: "width",
  transform: Pe
});
J({
  prop: "size",
  cssProperty: "height",
  transform: Pe
});
const $u = J({
  prop: "boxSizing"
}), Wu = Ie(Iu, H5, Pu, Vu, Nu, ku, $u), _5 = Wu, Uu = J({
  prop: "fontFamily",
  themeKey: "typography"
}), Gu = J({
  prop: "fontSize",
  themeKey: "typography"
}), Ku = J({
  prop: "fontStyle",
  themeKey: "typography"
}), Yu = J({
  prop: "fontWeight",
  themeKey: "typography"
}), qu = J({
  prop: "letterSpacing"
}), ju = J({
  prop: "textTransform"
}), Zu = J({
  prop: "lineHeight"
}), Ju = J({
  prop: "textAlign"
}), Xu = J({
  prop: "typography",
  cssProperty: !1,
  themeKey: "typography"
}), Qu = Ie(Xu, Uu, Gu, Ku, Yu, qu, Zu, Ju, ju), b5 = Qu, C4 = {
  borders: g5.filterProps,
  display: w5.filterProps,
  flexbox: z5.filterProps,
  grid: x5.filterProps,
  positions: F5.filterProps,
  palette: M5.filterProps,
  shadows: y5.filterProps,
  sizing: _5.filterProps,
  spacing: _n.filterProps,
  typography: b5.filterProps
}, E5 = {
  borders: g5,
  display: w5,
  flexbox: z5,
  grid: x5,
  positions: F5,
  palette: M5,
  shadows: y5,
  sizing: _5,
  spacing: _n,
  typography: b5
};
Object.keys(C4).reduce((l, i) => (C4[i].forEach((n) => {
  l[n] = E5[i];
}), l), {});
function tf(...l) {
  const i = l.reduce((a, h) => a.concat(Object.keys(h)), []), n = new Set(i);
  return l.every((a) => n.size === Object.keys(a).length);
}
function ef(l, i) {
  return typeof l == "function" ? l(i) : l;
}
function rf(l = E5) {
  const i = Object.keys(l).reduce((h, v) => (l[v].filterProps.forEach((p) => {
    h[p] = l[v];
  }), h), {});
  function n(h, v, p) {
    const M = {
      [h]: v,
      theme: p
    }, F = i[h];
    return F ? F(M) : {
      [h]: v
    };
  }
  function a(h) {
    const {
      sx: v,
      theme: p = {}
    } = h || {};
    if (!v)
      return null;
    function M(F) {
      let E = F;
      if (typeof F == "function")
        E = F(p);
      else if (typeof F != "object")
        return F;
      if (!E)
        return null;
      const b = D9(p.breakpoints), A = Object.keys(b);
      let D = b;
      return Object.keys(E).forEach((N) => {
        const I = ef(E[N], p);
        if (I != null)
          if (typeof I == "object")
            if (i[N])
              D = ir(D, n(N, I, p));
            else {
              const w = Re({
                theme: p
              }, I, (y) => ({
                [N]: y
              }));
              tf(w, I) ? D[N] = a({
                sx: I,
                theme: p
              }) : D = ir(D, w);
            }
          else
            D = ir(D, n(N, I, p));
      }), C9(A, D);
    }
    return Array.isArray(v) ? v.map(M) : M(v);
  }
  return a;
}
const A5 = rf();
A5.filterProps = ["sx"];
const nf = A5, lf = ["values", "unit", "step"], af = (l) => {
  const i = Object.keys(l).map((n) => ({
    key: n,
    val: l[n]
  })) || [];
  return i.sort((n, a) => n.val - a.val), i.reduce((n, a) => J1({}, n, {
    [a.key]: a.val
  }), {});
};
function of(l) {
  const {
    values: i = {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    },
    unit: n = "px",
    step: a = 5
  } = l, h = ae(l, lf), v = af(i), p = Object.keys(v);
  function M(D) {
    return `@media (min-width:${typeof i[D] == "number" ? i[D] : D}${n})`;
  }
  function F(D) {
    return `@media (max-width:${(typeof i[D] == "number" ? i[D] : D) - a / 100}${n})`;
  }
  function E(D, N) {
    const I = p.indexOf(N);
    return `@media (min-width:${typeof i[D] == "number" ? i[D] : D}${n}) and (max-width:${(I !== -1 && typeof i[p[I]] == "number" ? i[p[I]] : N) - a / 100}${n})`;
  }
  function b(D) {
    return p.indexOf(D) + 1 < p.length ? E(D, p[p.indexOf(D) + 1]) : M(D);
  }
  function A(D) {
    const N = p.indexOf(D);
    return N === 0 ? M(p[1]) : N === p.length - 1 ? F(p[N]) : E(D, p[p.indexOf(D) + 1]).replace("@media", "@media not all and");
  }
  return J1({
    keys: p,
    values: v,
    up: M,
    down: F,
    between: E,
    only: b,
    not: A,
    unit: n
  }, h);
}
const sf = {
  borderRadius: 4
}, cf = sf;
function hf(l = 8) {
  if (l.mui)
    return l;
  const i = m5({
    spacing: l
  }), n = (...a) => (process.env.NODE_ENV !== "production" && (a.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${a.length}`)), (a.length === 0 ? [1] : a).map((v) => {
    const p = i(v);
    return typeof p == "number" ? `${p}px` : p;
  }).join(" "));
  return n.mui = !0, n;
}
const uf = ["breakpoints", "palette", "spacing", "shape"];
function yi(l = {}, ...i) {
  const {
    breakpoints: n = {},
    palette: a = {},
    spacing: h,
    shape: v = {}
  } = l, p = ae(l, uf), M = of(n), F = hf(h);
  let E = Me({
    breakpoints: M,
    direction: "ltr",
    components: {},
    palette: J1({
      mode: "light"
    }, a),
    spacing: F,
    shape: J1({}, cf, v)
  }, p);
  return E = i.reduce((b, A) => Me(b, A), E), E;
}
const S5 = /* @__PURE__ */ Be.createContext(null);
process.env.NODE_ENV !== "production" && (S5.displayName = "ThemeContext");
const ff = S5;
function df() {
  const l = Be.useContext(ff);
  return process.env.NODE_ENV !== "production" && Be.useDebugValue(l), l;
}
function vf(l) {
  return Object.keys(l).length === 0;
}
function pf(l = null) {
  const i = df();
  return !i || vf(i) ? l : i;
}
const mf = yi();
function gf(l = mf) {
  return pf(l);
}
const wf = ["variant"];
function T4(l) {
  return l.length === 0;
}
function D5(l) {
  const {
    variant: i
  } = l, n = ae(l, wf);
  let a = i || "";
  return Object.keys(n).sort().forEach((h) => {
    h === "color" ? a += T4(a) ? l[h] : pn(l[h]) : a += `${T4(a) ? h : pn(h)}${pn(l[h].toString())}`;
  }), a;
}
const zf = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"], xf = ["theme"], Mf = ["theme"];
function rr(l) {
  return Object.keys(l).length === 0;
}
function Ff(l) {
  return typeof l == "string" && l.charCodeAt(0) > 96;
}
const yf = (l, i) => i.components && i.components[l] && i.components[l].styleOverrides ? i.components[l].styleOverrides : null, Hf = (l, i) => {
  let n = [];
  i && i.components && i.components[l] && i.components[l].variants && (n = i.components[l].variants);
  const a = {};
  return n.forEach((h) => {
    const v = D5(h.props);
    a[v] = h.style;
  }), a;
}, _f = (l, i, n, a) => {
  var h, v;
  const {
    ownerState: p = {}
  } = l, M = [], F = n == null || (h = n.components) == null || (v = h[a]) == null ? void 0 : v.variants;
  return F && F.forEach((E) => {
    let b = !0;
    Object.keys(E.props).forEach((A) => {
      p[A] !== E.props[A] && l[A] !== E.props[A] && (b = !1);
    }), b && M.push(i[D5(E.props)]);
  }), M;
};
function mn(l) {
  return l !== "ownerState" && l !== "theme" && l !== "sx" && l !== "as";
}
const bf = yi(), Ef = (l) => l.charAt(0).toLowerCase() + l.slice(1);
function Af(l = {}) {
  const {
    defaultTheme: i = bf,
    rootShouldForwardProp: n = mn,
    slotShouldForwardProp: a = mn,
    styleFunctionSx: h = nf
  } = l, v = (p) => {
    const M = rr(p.theme) ? i : p.theme;
    return h(J1({}, p, {
      theme: M
    }));
  };
  return v.__mui_systemSx = !0, (p, M = {}) => {
    w9(p, (j) => j.filter((S) => !(S != null && S.__mui_systemSx)));
    const {
      name: F,
      slot: E,
      skipVariantsResolver: b,
      skipSx: A,
      overridesResolver: D
    } = M, N = ae(M, zf), I = b !== void 0 ? b : E && E !== "Root" || !1, w = A || !1;
    let y;
    process.env.NODE_ENV !== "production" && F && (y = `${F}-${Ef(E || "Root")}`);
    let L = mn;
    E === "Root" ? L = n : E ? L = a : Ff(p) && (L = void 0);
    const $ = g9(p, J1({
      shouldForwardProp: L,
      label: y
    }, N)), W = (j, ...S) => {
      const Q = S ? S.map((l1) => typeof l1 == "function" && l1.__emotion_real !== l1 ? (E1) => {
        let {
          theme: tt
        } = E1, k1 = ae(E1, xf);
        return l1(J1({
          theme: rr(tt) ? i : tt
        }, k1));
      } : l1) : [];
      let K = j;
      F && D && Q.push((l1) => {
        const E1 = rr(l1.theme) ? i : l1.theme, tt = yf(F, E1);
        if (tt) {
          const k1 = {};
          return Object.entries(tt).forEach(([U1, nt]) => {
            k1[U1] = typeof nt == "function" ? nt(J1({}, l1, {
              theme: E1
            })) : nt;
          }), D(l1, k1);
        }
        return null;
      }), F && !I && Q.push((l1) => {
        const E1 = rr(l1.theme) ? i : l1.theme;
        return _f(l1, Hf(F, E1), E1, F);
      }), w || Q.push(v);
      const b1 = Q.length - S.length;
      if (Array.isArray(j) && b1 > 0) {
        const l1 = new Array(b1).fill("");
        K = [...j, ...l1], K.raw = [...j.raw, ...l1];
      } else
        typeof j == "function" && j.__emotion_real !== j && (K = (l1) => {
          let {
            theme: E1
          } = l1, tt = ae(l1, Mf);
          return j(J1({
            theme: rr(E1) ? i : E1
          }, tt));
        });
      const f1 = $(K, ...Q);
      if (process.env.NODE_ENV !== "production") {
        let l1;
        F && (l1 = `${F}${E || ""}`), l1 === void 0 && (l1 = `Styled(${H9(p)})`), f1.displayName = l1;
      }
      return f1;
    };
    return $.withConfig && (W.withConfig = $.withConfig), W;
  };
}
function C5(l, i = 0, n = 1) {
  return process.env.NODE_ENV !== "production" && (l < i || l > n) && console.error(`MUI: The value provided ${l} is out of range [${i}, ${n}].`), Math.min(Math.max(i, l), n);
}
function Sf(l) {
  l = l.slice(1);
  const i = new RegExp(`.{1,${l.length >= 6 ? 2 : 1}}`, "g");
  let n = l.match(i);
  return n && n[0].length === 1 && (n = n.map((a) => a + a)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((a, h) => h < 3 ? parseInt(a, 16) : Math.round(parseInt(a, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function _2(l) {
  if (l.type)
    return l;
  if (l.charAt(0) === "#")
    return _2(Sf(l));
  const i = l.indexOf("("), n = l.substring(0, i);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${l}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : H2(9, l));
  let a = l.substring(i + 1, l.length - 1), h;
  if (n === "color") {
    if (a = a.split(" "), h = a.shift(), a.length === 4 && a[3].charAt(0) === "/" && (a[3] = a[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(h) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${h}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : H2(10, h));
  } else
    a = a.split(",");
  return a = a.map((v) => parseFloat(v)), {
    type: n,
    values: a,
    colorSpace: h
  };
}
function Hi(l) {
  const {
    type: i,
    colorSpace: n
  } = l;
  let {
    values: a
  } = l;
  return i.indexOf("rgb") !== -1 ? a = a.map((h, v) => v < 3 ? parseInt(h, 10) : h) : i.indexOf("hsl") !== -1 && (a[1] = `${a[1]}%`, a[2] = `${a[2]}%`), i.indexOf("color") !== -1 ? a = `${n} ${a.join(" ")}` : a = `${a.join(", ")}`, `${i}(${a})`;
}
function Df(l) {
  l = _2(l);
  const {
    values: i
  } = l, n = i[0], a = i[1] / 100, h = i[2] / 100, v = a * Math.min(h, 1 - h), p = (E, b = (E + n / 30) % 12) => h - v * Math.max(Math.min(b - 3, 9 - b, 1), -1);
  let M = "rgb";
  const F = [Math.round(p(0) * 255), Math.round(p(8) * 255), Math.round(p(4) * 255)];
  return l.type === "hsla" && (M += "a", F.push(i[3])), Hi({
    type: M,
    values: F
  });
}
function B4(l) {
  l = _2(l);
  let i = l.type === "hsl" ? _2(Df(l)).values : l.values;
  return i = i.map((n) => (l.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * i[0] + 0.7152 * i[1] + 0.0722 * i[2]).toFixed(3));
}
function L4(l, i) {
  const n = B4(l), a = B4(i);
  return (Math.max(n, a) + 0.05) / (Math.min(n, a) + 0.05);
}
function Cf(l, i) {
  if (l = _2(l), i = C5(i), l.type.indexOf("hsl") !== -1)
    l.values[2] *= 1 - i;
  else if (l.type.indexOf("rgb") !== -1 || l.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      l.values[n] *= 1 - i;
  return Hi(l);
}
function Tf(l, i) {
  if (l = _2(l), i = C5(i), l.type.indexOf("hsl") !== -1)
    l.values[2] += (100 - l.values[2]) * i;
  else if (l.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1)
      l.values[n] += (255 - l.values[n]) * i;
  else if (l.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      l.values[n] += (1 - l.values[n]) * i;
  return Hi(l);
}
function Bf(l, i) {
  return J1({
    toolbar: {
      minHeight: 56,
      [l.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [l.up("sm")]: {
        minHeight: 64
      }
    }
  }, i);
}
const Lf = {
  black: "#000",
  white: "#fff"
}, sr = Lf, Of = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, Rf = Of, If = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, p2 = If, Pf = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, m2 = Pf, Vf = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, nr = Vf, Nf = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, g2 = Nf, kf = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, w2 = kf, $f = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, z2 = $f, Wf = ["mode", "contrastThreshold", "tonalOffset"], O4 = {
  text: {
    primary: "rgba(0, 0, 0, 0.87)",
    secondary: "rgba(0, 0, 0, 0.6)",
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  divider: "rgba(0, 0, 0, 0.12)",
  background: {
    paper: sr.white,
    default: sr.white
  },
  action: {
    active: "rgba(0, 0, 0, 0.54)",
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    disabled: "rgba(0, 0, 0, 0.26)",
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, X3 = {
  text: {
    primary: sr.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: sr.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function R4(l, i, n, a) {
  const h = a.light || a, v = a.dark || a * 1.5;
  l[i] || (l.hasOwnProperty(n) ? l[i] = l[n] : i === "light" ? l.light = Tf(l.main, h) : i === "dark" && (l.dark = Cf(l.main, v)));
}
function Uf(l = "light") {
  return l === "dark" ? {
    main: g2[200],
    light: g2[50],
    dark: g2[400]
  } : {
    main: g2[700],
    light: g2[400],
    dark: g2[800]
  };
}
function Gf(l = "light") {
  return l === "dark" ? {
    main: p2[200],
    light: p2[50],
    dark: p2[400]
  } : {
    main: p2[500],
    light: p2[300],
    dark: p2[700]
  };
}
function Kf(l = "light") {
  return l === "dark" ? {
    main: m2[500],
    light: m2[300],
    dark: m2[700]
  } : {
    main: m2[700],
    light: m2[400],
    dark: m2[800]
  };
}
function Yf(l = "light") {
  return l === "dark" ? {
    main: w2[400],
    light: w2[300],
    dark: w2[700]
  } : {
    main: w2[700],
    light: w2[500],
    dark: w2[900]
  };
}
function qf(l = "light") {
  return l === "dark" ? {
    main: z2[400],
    light: z2[300],
    dark: z2[700]
  } : {
    main: z2[800],
    light: z2[500],
    dark: z2[900]
  };
}
function jf(l = "light") {
  return l === "dark" ? {
    main: nr[400],
    light: nr[300],
    dark: nr[700]
  } : {
    main: "#ed6c02",
    light: nr[500],
    dark: nr[900]
  };
}
function Zf(l) {
  const {
    mode: i = "light",
    contrastThreshold: n = 3,
    tonalOffset: a = 0.2
  } = l, h = ae(l, Wf), v = l.primary || Uf(i), p = l.secondary || Gf(i), M = l.error || Kf(i), F = l.info || Yf(i), E = l.success || qf(i), b = l.warning || jf(i);
  function A(w) {
    const y = L4(w, X3.text.primary) >= n ? X3.text.primary : O4.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const L = L4(w, y);
      L < 3 && console.error([`MUI: The contrast ratio of ${L}:1 for ${y} on ${w}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return y;
  }
  const D = ({
    color: w,
    name: y,
    mainShade: L = 500,
    lightShade: $ = 300,
    darkShade: W = 700
  }) => {
    if (w = J1({}, w), !w.main && w[L] && (w.main = w[L]), !w.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${y ? ` (${y})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${L}\` property.` : H2(11, y ? ` (${y})` : "", L));
    if (typeof w.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${y ? ` (${y})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(w.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : H2(12, y ? ` (${y})` : "", JSON.stringify(w.main)));
    return R4(w, "light", $, a), R4(w, "dark", W, a), w.contrastText || (w.contrastText = A(w.main)), w;
  }, N = {
    dark: X3,
    light: O4
  };
  return process.env.NODE_ENV !== "production" && (N[i] || console.error(`MUI: The palette mode \`${i}\` is not supported.`)), Me(J1({
    common: J1({}, sr),
    mode: i,
    primary: D({
      color: v,
      name: "primary"
    }),
    secondary: D({
      color: p,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    error: D({
      color: M,
      name: "error"
    }),
    warning: D({
      color: b,
      name: "warning"
    }),
    info: D({
      color: F,
      name: "info"
    }),
    success: D({
      color: E,
      name: "success"
    }),
    grey: Rf,
    contrastThreshold: n,
    getContrastText: A,
    augmentColor: D,
    tonalOffset: a
  }, N[i]), h);
}
const Jf = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function Xf(l) {
  return Math.round(l * 1e5) / 1e5;
}
const I4 = {
  textTransform: "uppercase"
}, P4 = '"Roboto", "Helvetica", "Arial", sans-serif';
function Qf(l, i) {
  const n = typeof i == "function" ? i(l) : i, {
    fontFamily: a = P4,
    fontSize: h = 14,
    fontWeightLight: v = 300,
    fontWeightRegular: p = 400,
    fontWeightMedium: M = 500,
    fontWeightBold: F = 700,
    htmlFontSize: E = 16,
    allVariants: b,
    pxToRem: A
  } = n, D = ae(n, Jf);
  process.env.NODE_ENV !== "production" && (typeof h != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof E != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const N = h / 14, I = A || ((L) => `${L / E * N}rem`), w = (L, $, W, j, S) => J1({
    fontFamily: a,
    fontWeight: L,
    fontSize: I($),
    lineHeight: W
  }, a === P4 ? {
    letterSpacing: `${Xf(j / $)}em`
  } : {}, S, b), y = {
    h1: w(v, 96, 1.167, -1.5),
    h2: w(v, 60, 1.2, -0.5),
    h3: w(p, 48, 1.167, 0),
    h4: w(p, 34, 1.235, 0.25),
    h5: w(p, 24, 1.334, 0),
    h6: w(M, 20, 1.6, 0.15),
    subtitle1: w(p, 16, 1.75, 0.15),
    subtitle2: w(M, 14, 1.57, 0.1),
    body1: w(p, 16, 1.5, 0.15),
    body2: w(p, 14, 1.43, 0.15),
    button: w(M, 14, 1.75, 0.4, I4),
    caption: w(p, 12, 1.66, 0.4),
    overline: w(p, 12, 2.66, 1, I4)
  };
  return Me(J1({
    htmlFontSize: E,
    pxToRem: I,
    fontFamily: a,
    fontSize: h,
    fontWeightLight: v,
    fontWeightRegular: p,
    fontWeightMedium: M,
    fontWeightBold: F
  }, y), D, {
    clone: !1
  });
}
const td = 0.2, ed = 0.14, rd = 0.12;
function Z1(...l) {
  return [`${l[0]}px ${l[1]}px ${l[2]}px ${l[3]}px rgba(0,0,0,${td})`, `${l[4]}px ${l[5]}px ${l[6]}px ${l[7]}px rgba(0,0,0,${ed})`, `${l[8]}px ${l[9]}px ${l[10]}px ${l[11]}px rgba(0,0,0,${rd})`].join(",");
}
const nd = ["none", Z1(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Z1(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Z1(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Z1(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Z1(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Z1(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Z1(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Z1(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Z1(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Z1(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Z1(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Z1(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Z1(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Z1(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Z1(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Z1(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Z1(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Z1(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Z1(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Z1(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Z1(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Z1(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Z1(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Z1(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], id = nd, ld = ["duration", "easing", "delay"], ad = {
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, od = {
  shortest: 150,
  shorter: 200,
  short: 250,
  standard: 300,
  complex: 375,
  enteringScreen: 225,
  leavingScreen: 195
};
function V4(l) {
  return `${Math.round(l)}ms`;
}
function sd(l) {
  if (!l)
    return 0;
  const i = l / 36;
  return Math.round((4 + 15 * i ** 0.25 + i / 5) * 10);
}
function cd(l) {
  const i = J1({}, ad, l.easing), n = J1({}, od, l.duration);
  return J1({
    getAutoHeightDuration: sd,
    create: (h = ["all"], v = {}) => {
      const {
        duration: p = n.standard,
        easing: M = i.easeInOut,
        delay: F = 0
      } = v, E = ae(v, ld);
      if (process.env.NODE_ENV !== "production") {
        const b = (D) => typeof D == "string", A = (D) => !isNaN(parseFloat(D));
        !b(h) && !Array.isArray(h) && console.error('MUI: Argument "props" must be a string or Array.'), !A(p) && !b(p) && console.error(`MUI: Argument "duration" must be a number or a string but found ${p}.`), b(M) || console.error('MUI: Argument "easing" must be a string.'), !A(F) && !b(F) && console.error('MUI: Argument "delay" must be a number or a string.'), Object.keys(E).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(E).join(",")}].`);
      }
      return (Array.isArray(h) ? h : [h]).map((b) => `${b} ${typeof p == "string" ? p : V4(p)} ${M} ${typeof F == "string" ? F : V4(F)}`).join(",");
    }
  }, l, {
    easing: i,
    duration: n
  });
}
const hd = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, ud = hd, fd = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function dd(l = {}, ...i) {
  const {
    mixins: n = {},
    palette: a = {},
    transitions: h = {},
    typography: v = {}
  } = l, p = ae(l, fd);
  if (l.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : H2(18));
  const M = Zf(a), F = yi(l);
  let E = Me(F, {
    mixins: Bf(F.breakpoints, n),
    palette: M,
    shadows: id.slice(),
    typography: Qf(M, v),
    transitions: cd(h),
    zIndex: J1({}, ud)
  });
  if (E = Me(E, p), E = i.reduce((b, A) => Me(b, A), E), process.env.NODE_ENV !== "production") {
    const b = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], A = (D, N) => {
      let I;
      for (I in D) {
        const w = D[I];
        if (b.indexOf(I) !== -1 && Object.keys(w).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const y = S9("", I);
            console.error([`MUI: The \`${N}\` component increases the CSS specificity of the \`${I}\` internal state.`, "You can not override it like this: ", JSON.stringify(D, null, 2), "", `Instead, you need to use the '&.${y}' syntax:`, JSON.stringify({
              root: {
                [`&.${y}`]: w
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          D[I] = {};
        }
      }
    };
    Object.keys(E.components).forEach((D) => {
      const N = E.components[D].styleOverrides;
      N && D.indexOf("Mui") === 0 && A(N, D);
    });
  }
  return E;
}
const vd = dd(), T5 = vd;
function pd() {
  const l = gf(T5);
  return process.env.NODE_ENV !== "production" && Be.useDebugValue(l), l;
}
const md = (l) => mn(l) && l !== "classes", gd = Af({
  defaultTheme: T5,
  rootShouldForwardProp: md
}), _i = gd;
function N4(l) {
  if (l === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return l;
}
function li(l, i) {
  return li = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, h) {
    return a.__proto__ = h, a;
  }, li(l, i);
}
function wd(l, i) {
  l.prototype = Object.create(i.prototype), l.prototype.constructor = l, li(l, i);
}
var k4 = Number.isNaN || function(i) {
  return typeof i == "number" && i !== i;
};
function zd(l, i) {
  return !!(l === i || k4(l) && k4(i));
}
function xd(l, i) {
  if (l.length !== i.length)
    return !1;
  for (var n = 0; n < l.length; n++)
    if (!zd(l[n], i[n]))
      return !1;
  return !0;
}
function Q3(l, i) {
  i === void 0 && (i = xd);
  var n, a = [], h, v = !1;
  function p() {
    for (var M = [], F = 0; F < arguments.length; F++)
      M[F] = arguments[F];
    return v && n === this && i(M, a) || (h = l.apply(this, M), v = !0, n = this, a = M), h;
  }
  return p;
}
var Md = typeof performance == "object" && typeof performance.now == "function", $4 = Md ? function() {
  return performance.now();
} : function() {
  return Date.now();
};
function W4(l) {
  cancelAnimationFrame(l.id);
}
function Fd(l, i) {
  var n = $4();
  function a() {
    $4() - n >= i ? l.call(null) : h.id = requestAnimationFrame(a);
  }
  var h = {
    id: requestAnimationFrame(a)
  };
  return h;
}
var x2 = null;
function U4(l) {
  if (l === void 0 && (l = !1), x2 === null || l) {
    var i = document.createElement("div"), n = i.style;
    n.width = "50px", n.height = "50px", n.overflow = "scroll", n.direction = "rtl";
    var a = document.createElement("div"), h = a.style;
    return h.width = "100px", h.height = "100px", i.appendChild(a), document.body.appendChild(i), i.scrollLeft > 0 ? x2 = "positive-descending" : (i.scrollLeft = 1, i.scrollLeft === 0 ? x2 = "negative" : x2 = "positive-ascending"), document.body.removeChild(i), x2;
  }
  return x2;
}
process.env.NODE_ENV;
var yd = 150, Hd = function(i, n) {
  return i;
}, gn = null, wn = null;
process.env.NODE_ENV !== "production" && typeof window < "u" && typeof window.WeakSet < "u" && (gn = /* @__PURE__ */ new WeakSet(), wn = /* @__PURE__ */ new WeakSet());
function _d(l) {
  var i, n = l.getItemOffset, a = l.getEstimatedTotalSize, h = l.getItemSize, v = l.getOffsetForIndexAndAlignment, p = l.getStartIndexForOffset, M = l.getStopIndexForStartIndex, F = l.initInstanceProps, E = l.shouldResetStyleCacheOnItemSizeChange, b = l.validateProps;
  return i = /* @__PURE__ */ function(A) {
    wd(D, A);
    function D(I) {
      var w;
      return w = A.call(this, I) || this, w._instanceProps = F(w.props, N4(w)), w._outerRef = void 0, w._resetIsScrollingTimeoutId = null, w.state = {
        instance: N4(w),
        isScrolling: !1,
        scrollDirection: "forward",
        scrollOffset: typeof w.props.initialScrollOffset == "number" ? w.props.initialScrollOffset : 0,
        scrollUpdateWasRequested: !1
      }, w._callOnItemsRendered = void 0, w._callOnItemsRendered = Q3(function(y, L, $, W) {
        return w.props.onItemsRendered({
          overscanStartIndex: y,
          overscanStopIndex: L,
          visibleStartIndex: $,
          visibleStopIndex: W
        });
      }), w._callOnScroll = void 0, w._callOnScroll = Q3(function(y, L, $) {
        return w.props.onScroll({
          scrollDirection: y,
          scrollOffset: L,
          scrollUpdateWasRequested: $
        });
      }), w._getItemStyle = void 0, w._getItemStyle = function(y) {
        var L = w.props, $ = L.direction, W = L.itemSize, j = L.layout, S = w._getItemStyleCache(E && W, E && j, E && $), Q;
        if (S.hasOwnProperty(y))
          Q = S[y];
        else {
          var K = n(w.props, y, w._instanceProps), b1 = h(w.props, y, w._instanceProps), f1 = $ === "horizontal" || j === "horizontal", l1 = $ === "rtl", E1 = f1 ? K : 0;
          S[y] = Q = {
            position: "absolute",
            left: l1 ? void 0 : E1,
            right: l1 ? E1 : void 0,
            top: f1 ? 0 : K,
            height: f1 ? "100%" : b1,
            width: f1 ? b1 : "100%"
          };
        }
        return Q;
      }, w._getItemStyleCache = void 0, w._getItemStyleCache = Q3(function(y, L, $) {
        return {};
      }), w._onScrollHorizontal = function(y) {
        var L = y.currentTarget, $ = L.clientWidth, W = L.scrollLeft, j = L.scrollWidth;
        w.setState(function(S) {
          if (S.scrollOffset === W)
            return null;
          var Q = w.props.direction, K = W;
          if (Q === "rtl")
            switch (U4()) {
              case "negative":
                K = -W;
                break;
              case "positive-descending":
                K = j - $ - W;
                break;
            }
          return K = Math.max(0, Math.min(K, j - $)), {
            isScrolling: !0,
            scrollDirection: S.scrollOffset < W ? "forward" : "backward",
            scrollOffset: K,
            scrollUpdateWasRequested: !1
          };
        }, w._resetIsScrollingDebounced);
      }, w._onScrollVertical = function(y) {
        var L = y.currentTarget, $ = L.clientHeight, W = L.scrollHeight, j = L.scrollTop;
        w.setState(function(S) {
          if (S.scrollOffset === j)
            return null;
          var Q = Math.max(0, Math.min(j, W - $));
          return {
            isScrolling: !0,
            scrollDirection: S.scrollOffset < Q ? "forward" : "backward",
            scrollOffset: Q,
            scrollUpdateWasRequested: !1
          };
        }, w._resetIsScrollingDebounced);
      }, w._outerRefSetter = function(y) {
        var L = w.props.outerRef;
        w._outerRef = y, typeof L == "function" ? L(y) : L != null && typeof L == "object" && L.hasOwnProperty("current") && (L.current = y);
      }, w._resetIsScrollingDebounced = function() {
        w._resetIsScrollingTimeoutId !== null && W4(w._resetIsScrollingTimeoutId), w._resetIsScrollingTimeoutId = Fd(w._resetIsScrolling, yd);
      }, w._resetIsScrolling = function() {
        w._resetIsScrollingTimeoutId = null, w.setState({
          isScrolling: !1
        }, function() {
          w._getItemStyleCache(-1, null);
        });
      }, w;
    }
    D.getDerivedStateFromProps = function(w, y) {
      return bd(w, y), b(w), null;
    };
    var N = D.prototype;
    return N.scrollTo = function(w) {
      w = Math.max(0, w), this.setState(function(y) {
        return y.scrollOffset === w ? null : {
          scrollDirection: y.scrollOffset < w ? "forward" : "backward",
          scrollOffset: w,
          scrollUpdateWasRequested: !0
        };
      }, this._resetIsScrollingDebounced);
    }, N.scrollToItem = function(w, y) {
      y === void 0 && (y = "auto");
      var L = this.props.itemCount, $ = this.state.scrollOffset;
      w = Math.max(0, Math.min(w, L - 1)), this.scrollTo(v(this.props, w, y, $, this._instanceProps));
    }, N.componentDidMount = function() {
      var w = this.props, y = w.direction, L = w.initialScrollOffset, $ = w.layout;
      if (typeof L == "number" && this._outerRef != null) {
        var W = this._outerRef;
        y === "horizontal" || $ === "horizontal" ? W.scrollLeft = L : W.scrollTop = L;
      }
      this._callPropsCallbacks();
    }, N.componentDidUpdate = function() {
      var w = this.props, y = w.direction, L = w.layout, $ = this.state, W = $.scrollOffset, j = $.scrollUpdateWasRequested;
      if (j && this._outerRef != null) {
        var S = this._outerRef;
        if (y === "horizontal" || L === "horizontal")
          if (y === "rtl")
            switch (U4()) {
              case "negative":
                S.scrollLeft = -W;
                break;
              case "positive-ascending":
                S.scrollLeft = W;
                break;
              default:
                var Q = S.clientWidth, K = S.scrollWidth;
                S.scrollLeft = K - Q - W;
                break;
            }
          else
            S.scrollLeft = W;
        else
          S.scrollTop = W;
      }
      this._callPropsCallbacks();
    }, N.componentWillUnmount = function() {
      this._resetIsScrollingTimeoutId !== null && W4(this._resetIsScrollingTimeoutId);
    }, N.render = function() {
      var w = this.props, y = w.children, L = w.className, $ = w.direction, W = w.height, j = w.innerRef, S = w.innerElementType, Q = w.innerTagName, K = w.itemCount, b1 = w.itemData, f1 = w.itemKey, l1 = f1 === void 0 ? Hd : f1, E1 = w.layout, tt = w.outerElementType, k1 = w.outerTagName, U1 = w.style, nt = w.useIsScrolling, it = w.width, G1 = this.state.isScrolling, $1 = $ === "horizontal" || E1 === "horizontal", pt = $1 ? this._onScrollHorizontal : this._onScrollVertical, V = this._getRangeToRender(), U = V[0], a1 = V[1], o1 = [];
      if (K > 0)
        for (var t1 = U; t1 <= a1; t1++)
          o1.push(xe(y, {
            data: b1,
            key: l1(t1, b1),
            index: t1,
            isScrolling: nt ? G1 : void 0,
            style: this._getItemStyle(t1)
          }));
      var s1 = a(this.props, this._instanceProps);
      return xe(tt || k1 || "div", {
        className: L,
        onScroll: pt,
        ref: this._outerRefSetter,
        style: J1({
          position: "relative",
          height: W,
          width: it,
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          willChange: "transform",
          direction: $
        }, U1)
      }, xe(S || Q || "div", {
        children: o1,
        ref: j,
        style: {
          height: $1 ? "100%" : s1,
          pointerEvents: G1 ? "none" : void 0,
          width: $1 ? s1 : "100%"
        }
      }));
    }, N._callPropsCallbacks = function() {
      if (typeof this.props.onItemsRendered == "function") {
        var w = this.props.itemCount;
        if (w > 0) {
          var y = this._getRangeToRender(), L = y[0], $ = y[1], W = y[2], j = y[3];
          this._callOnItemsRendered(L, $, W, j);
        }
      }
      if (typeof this.props.onScroll == "function") {
        var S = this.state, Q = S.scrollDirection, K = S.scrollOffset, b1 = S.scrollUpdateWasRequested;
        this._callOnScroll(Q, K, b1);
      }
    }, N._getRangeToRender = function() {
      var w = this.props, y = w.itemCount, L = w.overscanCount, $ = this.state, W = $.isScrolling, j = $.scrollDirection, S = $.scrollOffset;
      if (y === 0)
        return [0, 0, 0, 0];
      var Q = p(this.props, S, this._instanceProps), K = M(this.props, Q, S, this._instanceProps), b1 = !W || j === "backward" ? Math.max(1, L) : 1, f1 = !W || j === "forward" ? Math.max(1, L) : 1;
      return [Math.max(0, Q - b1), Math.max(0, Math.min(y - 1, K + f1)), Q, K];
    }, D;
  }(Kc), i.defaultProps = {
    direction: "ltr",
    itemData: void 0,
    layout: "vertical",
    overscanCount: 2,
    useIsScrolling: !1
  }, i;
}
var bd = function(i, n) {
  var a = i.children, h = i.direction, v = i.height, p = i.layout, M = i.innerTagName, F = i.outerTagName, E = i.width, b = n.instance;
  if (process.env.NODE_ENV !== "production") {
    (M != null || F != null) && wn && !wn.has(b) && (wn.add(b), console.warn("The innerTagName and outerTagName props have been deprecated. Please use the innerElementType and outerElementType props instead."));
    var A = h === "horizontal" || p === "horizontal";
    switch (h) {
      case "horizontal":
      case "vertical":
        gn && !gn.has(b) && (gn.add(b), console.warn('The direction prop should be either "ltr" (default) or "rtl". Please use the layout prop to specify "vertical" (default) or "horizontal" orientation.'));
        break;
      case "ltr":
      case "rtl":
        break;
      default:
        throw Error('An invalid "direction" prop has been specified. Value should be either "ltr" or "rtl". ' + ('"' + h + '" was specified.'));
    }
    switch (p) {
      case "horizontal":
      case "vertical":
        break;
      default:
        throw Error('An invalid "layout" prop has been specified. Value should be either "horizontal" or "vertical". ' + ('"' + p + '" was specified.'));
    }
    if (a == null)
      throw Error('An invalid "children" prop has been specified. Value should be a React component. ' + ('"' + (a === null ? "null" : typeof a) + '" was specified.'));
    if (A && typeof E != "number")
      throw Error('An invalid "width" prop has been specified. Horizontal lists must specify a number for width. ' + ('"' + (E === null ? "null" : typeof E) + '" was specified.'));
    if (!A && typeof v != "number")
      throw Error('An invalid "height" prop has been specified. Vertical lists must specify a number for height. ' + ('"' + (v === null ? "null" : typeof v) + '" was specified.'));
  }
}, Ed = 50, M2 = function(i, n, a) {
  var h = i, v = h.itemSize, p = a.itemMetadataMap, M = a.lastMeasuredIndex;
  if (n > M) {
    var F = 0;
    if (M >= 0) {
      var E = p[M];
      F = E.offset + E.size;
    }
    for (var b = M + 1; b <= n; b++) {
      var A = v(b);
      p[b] = {
        offset: F,
        size: A
      }, F += A;
    }
    a.lastMeasuredIndex = n;
  }
  return p[n];
}, Ad = function(i, n, a) {
  var h = n.itemMetadataMap, v = n.lastMeasuredIndex, p = v > 0 ? h[v].offset : 0;
  return p >= a ? B5(i, n, v, 0, a) : Sd(i, n, Math.max(0, v), a);
}, B5 = function(i, n, a, h, v) {
  for (; h <= a; ) {
    var p = h + Math.floor((a - h) / 2), M = M2(i, p, n).offset;
    if (M === v)
      return p;
    M < v ? h = p + 1 : M > v && (a = p - 1);
  }
  return h > 0 ? h - 1 : 0;
}, Sd = function(i, n, a, h) {
  for (var v = i.itemCount, p = 1; a < v && M2(i, a, n).offset < h; )
    a += p, p *= 2;
  return B5(i, n, Math.min(a, v - 1), Math.floor(a / 2), h);
}, G4 = function(i, n) {
  var a = i.itemCount, h = n.itemMetadataMap, v = n.estimatedItemSize, p = n.lastMeasuredIndex, M = 0;
  if (p >= a && (p = a - 1), p >= 0) {
    var F = h[p];
    M = F.offset + F.size;
  }
  var E = a - p - 1, b = E * v;
  return M + b;
}, Dd = /* @__PURE__ */ _d({
  getItemOffset: function(i, n, a) {
    return M2(i, n, a).offset;
  },
  getItemSize: function(i, n, a) {
    return a.itemMetadataMap[n].size;
  },
  getEstimatedTotalSize: G4,
  getOffsetForIndexAndAlignment: function(i, n, a, h, v) {
    var p = i.direction, M = i.height, F = i.layout, E = i.width, b = p === "horizontal" || F === "horizontal", A = b ? E : M, D = M2(i, n, v), N = G4(i, v), I = Math.max(0, Math.min(N - A, D.offset)), w = Math.max(0, D.offset - A + D.size);
    switch (a === "smart" && (h >= w - A && h <= I + A ? a = "auto" : a = "center"), a) {
      case "start":
        return I;
      case "end":
        return w;
      case "center":
        return Math.round(w + (I - w) / 2);
      case "auto":
      default:
        return h >= w && h <= I ? h : h < w ? w : I;
    }
  },
  getStartIndexForOffset: function(i, n, a) {
    return Ad(i, a, n);
  },
  getStopIndexForStartIndex: function(i, n, a, h) {
    for (var v = i.direction, p = i.height, M = i.itemCount, F = i.layout, E = i.width, b = v === "horizontal" || F === "horizontal", A = b ? E : p, D = M2(i, n, h), N = a + A, I = D.offset + D.size, w = n; w < M - 1 && I < N; )
      w++, I += M2(i, w, h).size;
    return w;
  },
  initInstanceProps: function(i, n) {
    var a = i, h = a.estimatedItemSize, v = {
      itemMetadataMap: {},
      estimatedItemSize: h || Ed,
      lastMeasuredIndex: -1
    };
    return n.resetAfterIndex = function(p, M) {
      M === void 0 && (M = !0), v.lastMeasuredIndex = Math.min(v.lastMeasuredIndex, p - 1), n._getItemStyleCache(-1), M && n.forceUpdate();
    }, v;
  },
  shouldResetStyleCacheOnItemSizeChange: !1,
  validateProps: function(i) {
    var n = i.itemSize;
    if (process.env.NODE_ENV !== "production" && typeof n != "function")
      throw Error('An invalid "itemSize" prop has been specified. Value should be a function. ' + ('"' + (n === null ? "null" : typeof n) + '" was specified.'));
  }
}), Cd = ["title"], Td = ["title"], Bd = ["title"], Ld = ["title"], Od = ["title"], Rd = ["title"], Id = ["title"], Pd = ["title"], Vd = ["title"], Nd = ["title"], kd = ["title"], $d = ["title"], Wd = ["title"], Ud = ["title"], Gd = ["title"], Kd = ["title"], Yd = ["title"], qd = ["title"], jd = ["title"], Zd = ["title"], Jd = ["title"], Xd = ["title"], Qd = ["title"], tv = ["title"], ev = ["title"], rv = ["title"], nv = ["title"], iv = ["title"], lv = ["title"], av = ["title"], ov = ["title"], sv = ["title"], cv = ["title"], hv = ["title"], uv = ["title"], fv = ["title"], dv = ["title"], vv = ["title"], pv = ["title"], mv = ["title"], gv = ["title"], wv = ["title"], zv = ["title"], xv = ["title"], Mv = ["title"], Fv = ["title"], yv = ["title"], Hv = ["title"], _v = ["title"], bv = ["title"], Ev = ["title"], Av = ["title"], Sv = ["title"], Dv = ["title"], Cv = ["title"], Tv = ["title"], Bv = ["title"], Lv = ["title"], Ov = ["title"], Rv = ["title"], Iv = ["title"], Pv = ["title"], Vv = ["title"], Nv = ["title"], kv = ["title"], $v = ["title"], Wv = ["title"], Uv = ["title"], Gv = ["title"], Kv = ["title"], Yv = ["title"], qv = ["title"], jv = ["title"], Zv = ["title"], Jv = ["title"], Xv = ["title"], Qv = ["title"], tp = ["title"], ep = ["title"], rp = ["title"], np = ["title"], ip = ["title"], lp = ["title"], ap = ["title"], op = ["title"], sp = ["title"], cp = ["title"], hp = ["title"], up = ["title"], fp = ["title"], dp = ["title"], vp = ["title"], pp = ["title"], mp = ["title"], gp = ["title"], wp = ["title"], zp = ["title"], xp = ["title"], Mp = ["title"], Fp = ["title"], yp = ["title"], Hp = ["title"], _p = ["title"], bp = ["title"], Ep = ["title"], Ap = ["title"], Sp = ["title"], Dp = ["title"], Cp = ["title"], Tp = ["title"], Bp = ["title"], Lp = ["title"], Op = ["title"], Rp = ["title"], Ip = ["title"], Pp = ["title"], Vp = ["title"], Np = ["title"], kp = ["title"], $p = ["title"], Wp = ["title"], Up = ["title"], Gp = ["title"], Kp = ["title"], Yp = ["title"], qp = ["title"], jp = ["title"], Zp = ["title"], Jp = ["title"], Xp = ["title"], Qp = ["title"], tm = ["title"], em = ["title"], rm = ["title"], nm = ["title"], im = ["title"], lm = ["title"], am = ["title"], om = ["title"], sm = ["title"], cm = ["title"], hm = ["title"], um = ["title"], fm = ["title"], dm = ["title"], vm = ["title"], pm = ["title"], mm = ["title"], gm = ["title"], wm = ["title"], zm = ["title"], xm = ["title"], Mm = ["title"], Fm = ["title"], ym = ["title"], Hm = ["title"], _m = ["title"], bm = ["title"], Em = ["title"], Am = ["title"], Sm = ["title"], Dm = ["title"], Cm = ["title"], Tm = ["title"], Bm = ["title"], Lm = ["title"], Om = ["title"], Rm = ["title"], Im = ["title"], Pm = ["title"], Vm = ["title"], Nm = ["title"], km = ["title"], $m = ["title"], Wm = ["title"], Um = ["title"], Gm = ["title"], Km = ["title"], Ym = ["title"], qm = ["title"], jm = ["title"], Zm = ["title"], Jm = ["title"], Xm = ["title"], Qm = ["title"], tg = ["title"], eg = ["title"], rg = ["title"], ng = ["title"], ig = ["title"], lg = ["title"], ag = ["title"], og = ["title"], sg = ["title"], cg = ["title"], hg = ["title"], ug = ["title"], fg = ["title"], dg = ["title"], vg = ["title"], pg = ["title"], mg = ["title"], gg = ["title"], wg = ["title"], zg = ["title"], xg = ["title"], Mg = ["title"], Fg = ["title"], yg = ["title"], Hg = ["title"], _g = ["title"], bg = ["title"], Eg = ["title"], Ag = ["title"], Sg = ["title"], Dg = ["title"], Cg = ["title"], Tg = ["title"], Bg = ["title"], Lg = ["title"], Og = ["title"], Rg = ["title"], Ig = ["title"], Pg = ["title"], Vg = ["title"], Ng = ["title"], kg = ["title"], $g = ["title"], Wg = ["title"], Ug = ["title"], Gg = ["title"], Kg = ["title"], Yg = ["title"], qg = ["title"], jg = ["title"], Zg = ["title"], Jg = ["title"], Xg = ["title"], Qg = ["title"], tw = ["title"], ew = ["title"], rw = ["title"], nw = ["title"], iw = ["title"], lw = ["title"], aw = ["title"], ow = ["title"], sw = ["title"], cw = ["title"], hw = ["title"], uw = ["title"], fw = ["title"], dw = ["title"], vw = ["title"];
function m(l, i) {
  if (l == null)
    return {};
  var n = pw(l, i), a, h;
  if (Object.getOwnPropertySymbols) {
    var v = Object.getOwnPropertySymbols(l);
    for (h = 0; h < v.length; h++)
      a = v[h], !(i.indexOf(a) >= 0) && (!Object.prototype.propertyIsEnumerable.call(l, a) || (n[a] = l[a]));
  }
  return n;
}
function pw(l, i) {
  if (l == null)
    return {};
  var n = {}, a = Object.keys(l), h, v;
  for (v = 0; v < a.length; v++)
    h = a[v], !(i.indexOf(h) >= 0) && (n[h] = l[h]);
  return n;
}
var mw = function(i) {
  var n = i.title, a = m(i, Cd);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M0 0h513v342H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M440.1 181.1c-.1 39.2-6.4 81.4-57.4 101.5-51.1-20.1-57.3-62.3-57.4-101.5h114.8z"
    }), /* @__PURE__ */ e("path", {
      fill: "#29DBFF",
      d: "M439.6 197.7c-2.8 34.9-12.4 67.4-57 85-44.4-17.6-54.5-51.2-56.9-84.9"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M437.8 214.1c-3.2 24.3-16.7 53.5-55.1 68.6-38.4-15.1-50.5-42.5-55.1-68.4"
    }), /* @__PURE__ */ e("path", {
      fill: "#29DBFF",
      d: "M434.2 230.3c-5.7 17.7-19.3 39.4-51.3 52.8-32-12.6-45.2-33.8-51.4-53"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M426.7 246.9c-6.5 11.3-17.7 25.4-44 35.9-27.5-11.5-37.4-25.3-44-36.1"
    }), /* @__PURE__ */ e("path", {
      fill: "#29DBFF",
      d: "M412.4 265.1c-8.1 7.2-12 11.2-29.6 17.9-20.1-7.9-22.6-11.6-29.2-17.5"
    }), /* @__PURE__ */ e("path", {
      fill: "#5CC85C",
      d: "M383.3 231.6c-.2-.2-27.9 35.7-27.9 35.7-1.8-1.3-10-9.5-13.3-15l41.3-50.1 40.2 49.7c-3.9 6.5-11.4 13.6-13.2 15M382.6 85.3l-26.5 45h53z"
    }), /* @__PURE__ */ e("ellipse", {
      transform: "rotate(-82.3 291.431 225.686)",
      fill: "#F7A226",
      cx: 291.4,
      cy: 225.7,
      rx: 48.7,
      ry: 15.7
    }), /* @__PURE__ */ e("ellipse", {
      transform: "rotate(-68.099 303.087 164.67)",
      fill: "#DDC7AB",
      cx: 303.1,
      cy: 164.7,
      rx: 11.7,
      ry: 7.2
    }), /* @__PURE__ */ e("ellipse", {
      transform: "rotate(-81.738 291.697 271.697)",
      fill: "#DDC7AB",
      cx: 291.7,
      cy: 271.7,
      rx: 11.4,
      ry: 3.3
    }), /* @__PURE__ */ e("ellipse", {
      transform: "matrix(.9986 -.05353 .05353 .9986 -13.992 16.424)",
      fill: "#DDC7AB",
      cx: 299.6,
      cy: 269.4,
      rx: 3.3,
      ry: 11
    }), /* @__PURE__ */ e("ellipse", {
      transform: "rotate(-21.518 314.54 201.06)",
      fill: "#DDC7AB",
      cx: 314.5,
      cy: 201.1,
      rx: 4.1,
      ry: 13.7
    }), /* @__PURE__ */ e("ellipse", {
      transform: "rotate(-21.518 317.511 178.077)",
      fill: "#DDC7AB",
      cx: 317.5,
      cy: 178.1,
      rx: 13.7,
      ry: 4.1
    }), /* @__PURE__ */ e("ellipse", {
      transform: "rotate(-7.7 473.781 225.857)",
      fill: "#F7A226",
      cx: 473.6,
      cy: 225.9,
      rx: 15.7,
      ry: 48.7
    }), /* @__PURE__ */ e("ellipse", {
      transform: "rotate(-21.901 462.057 164.866)",
      fill: "#DDC7AB",
      cx: 462,
      cy: 164.9,
      rx: 7.2,
      ry: 11.7
    }), /* @__PURE__ */ e("ellipse", {
      transform: "rotate(-8.27 473.27 271.908)",
      fill: "#DDC7AB",
      cx: 473.4,
      cy: 271.9,
      rx: 3.3,
      ry: 11.4
    }), /* @__PURE__ */ e("ellipse", {
      transform: "matrix(.05353 -.9986 .9986 .05353 171.34 719.998)",
      fill: "#DDC7AB",
      cx: 465.5,
      cy: 269.6,
      rx: 11,
      ry: 3.3
    }), /* @__PURE__ */ e("ellipse", {
      transform: "rotate(-68.482 450.552 201.247)",
      fill: "#DDC7AB",
      cx: 450.6,
      cy: 201.2,
      rx: 13.7,
      ry: 4.1
    }), /* @__PURE__ */ e("ellipse", {
      transform: "rotate(-68.482 447.58 178.265)",
      fill: "#DDC7AB",
      cx: 447.6,
      cy: 178.3,
      rx: 4.1,
      ry: 13.7
    }), /* @__PURE__ */ e("path", {
      fill: "#B0C6CC",
      d: "M373.3 130.3 356.1 155l17.8 26.1H396l4.7-25.4-5.4-25.4z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M256 0v117.4h-46.1l46.1 30.7v22.6h-22.6L160 121.8v48.9H96v-48.9l-73.4 48.9H0v-22.6l46.1-30.7H0v-64h46.1L0 22.7V0h22.6L96 48.9V0h64v48.9L233.4 0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M144 0h-32v69.4H0v32h112v69.3h32v-69.3h112v-32H144z"
    }), /* @__PURE__ */ e("path", {
      fill: "#2E52B2",
      d: "M256 22.7v30.7h-46.1z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M0 170.7v-11l62.5-42.3h22.6L7.3 170.7zM7.3.1l77.8 53.2H62.5L0 11.1V.1zM256 .1v11l-62.5 42.3h-22.6L248.7.1zm-7.3 170.6-77.8-53.3h22.6l62.5 42.3v11z"
    })]
  });
}, gw = function(i) {
  var n = i.title, a = m(i, Td);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("style", {
      children: ".prefix__st0{fill:#ffda44}.prefix__st1{fill:#0052b4}.prefix__st2{fill:#d80027}.prefix__st3,.prefix__st4{fill:none;stroke:#d80027;stroke-width:7;stroke-miterlimit:10}.prefix__st4{stroke-width:4}.prefix__st5{fill:#bc8b00}"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "M0 0h513v342H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M0 0h171v342H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M342 0h171v342H342zM198.9 113.6H256v64.8h-57.1z"
    }), /* @__PURE__ */ e("path", {
      d: "M267.6 113.6v64.7m16.6-64.7v64.7m16.6-64.7v64.7",
      stroke: "#D80027",
      strokeWidth: 7
    }), /* @__PURE__ */ e("path", {
      d: "M247.4 178.4v64.7m-13.3-64.7v64.7m-13.3-64.6v53.9m-13.7-53.9v47.1",
      stroke: "#D80027",
      strokeWidth: 5
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "m199.9 146 27.6-32.4 28.5 32.3-28.1 32.4z"
    }), /* @__PURE__ */ e("path", {
      fill: "#BC8B00",
      d: "M182.2 95.9v92.2c0 34.3 27.3 54.2 48.6 64.5-.8 1.4 25.1 8.3 25.1 8.3s25.9-6.9 25.1-8.3c21.4-10.3 48.6-30.1 48.6-64.5V95.9H182.2zm129.9 92.2c0 16.9-10 29.4-32.8 43.9-8.6 5.5-17.5 9-23.3 11-5.8-2-14.7-5.5-23.3-11-22.8-14.5-32.8-28-32.8-43.9v-74.5h112.2v74.5z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M264.4 188.9h29.5v8.6h-29.5zm0 17.6h29.5v8.6h-29.5z"
    })]
  });
}, ww = function(i) {
  var n = i.title, a = m(i, Bd);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 0h513v342H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#009e49",
      d: "M0 0h513v114H0z"
    }), /* @__PURE__ */ e("path", {
      d: "M0 228h513v114H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#ce1126",
      d: "M0 0h171v342H0z"
    })]
  });
}, zw = function(i) {
  var n = i.title, a = m(i, Ld);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#DB3E00",
      d: "M0 0h513v342H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#479900",
      d: "M331 0h182v342H331z"
    }), /* @__PURE__ */ e("path", {
      d: "M0 0h181.8v342H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M256 126.7c-19.4 0-35.2 15.8-35.2 35.2v52.8h70.4v-52.8c0-19.5-15.8-35.2-35.2-35.2z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M256 84.3c-47.7 0-86.4 38.7-86.4 86.4S208.3 257 256 257s86.4-38.7 86.4-86.4-38.7-86.3-86.4-86.3zm0 157.7c-39.4 0-71.4-32-71.4-71.4 0-39.4 32-71.4 71.4-71.4 39.4 0 71.4 32 71.4 71.4 0 39.5-32 71.4-71.4 71.4z"
    })]
  });
}, xw = function(i) {
  var n = i.title, a = m(i, Od);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      d: "M0 0h513v342H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#0072c6",
      d: "M88.8 136.5c-2.2 12.9-3.4 26.2-3.4 39.8 0 13.6 1.2 27 3.4 39.8L256 228.3l167.2-12.1c2.2-12.9 3.4-26.2 3.4-39.8s-1.2-27-3.4-39.8"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M423.2 219H88.8c15.8 69.8 84.7 122.3 167.2 122.3S407.4 288.8 423.2 219z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "M365.9 136.5H146.1l44.9-21.1-23.9-43.5 48.8 9.4L222 32l34 36.2L290 32l6.1 49.3 48.8-9.4-23.9 43.5z"
    }), /* @__PURE__ */ d("g", {
      fill: "#ce1126",
      children: [/* @__PURE__ */ e("path", {
        d: "M256.5 342 0 0v342z"
      }), /* @__PURE__ */ e("path", {
        d: "M513 342V0L256 342z"
      })]
    })]
  });
}, Mw = function(i) {
  var n = i.title, a = m(i, Rd);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#00318b",
      d: "M0 0h513v342H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M454.8 265.38c7.94-10.93 13.24-24.27 13.24-40.42V104.89a59.754 59.754 0 0 1-36.02 12.01c-19.64 0-37.07-9.43-48.03-24.01-10.95 14.58-28.39 24.01-48.03 24.01-13.52 0-25.99-4.47-36.02-12v120.06c0 16.16 5.3 29.5 13.24 40.42H454.8z"
    }), /* @__PURE__ */ e("path", {
      fill: "#8DCCFF",
      d: "M310.23 260.98C332.65 296.96 384 309 384 309s51.35-12.04 73.77-48.02H310.23z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D87B00",
      d: "M396.66 172.21c.32 1.42 8.72 10.17 17.56 20.15 1.39 1.57-8.74 12.63-6.91 12.59 4.75-.12 19.27-17.26 19.34 6.65.05 15.94-30 27.51-30 27.51h17.47l.65 14.96s4.97-13.34 7.59-16.57c8.1-9.97 20.18-30.07 34.59-27.1 14.41 2.97-13.66-13.92-13.66-13.92s-5.2-15.19-16.63-16.97c-10.06-1.57-14.29-2.51-26.64-7.3-1.68-.65-3.88-2.32-3.36 0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D87B00",
      d: "M359.69 198.69c1.07-.99 4.46-12.63 8.69-25.28.67-1.99 15.31 1.27 14.35-.3-2.47-4.06-24.58-8.08-3.9-20.08 13.79-8 38.82 12.27 38.82 12.27l-8.72-15.14 12.64-8.03s-14.05 2.35-18.14 1.69c-12.68-2.04-36.13-2.48-40.75-16.45-4.62-13.97-5.25 18.79-5.25 18.79s-10.56 12.08-6.4 22.88c3.66 9.5 4.96 13.64 6.97 26.73.29 1.79-.06 4.53 1.69 2.92z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D87B00",
      d: "M395.67 219.87c-1.39-.43-13.16 2.49-26.22 5.18-2.06.42-6.59-13.88-7.47-12.26-2.27 4.17 5.36 25.31-15.41 13.45-13.84-7.91-8.89-39.73-8.89-39.73l-8.71 15.14-13.29-6.9s9.09 10.96 10.57 14.84c4.6 11.99 16 32.49 6.24 43.49-9.76 11.01 18.88-4.9 18.88-4.9s15.76 3.07 23-5.96c6.38-7.94 9.3-11.14 19.61-19.45 1.43-1.12 3.97-2.19 1.69-2.9z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M256.5 0h-23.1L160 48.9V0H96v48.9L22.6 0H0v22.7l46.1 30.7H0v64h46.1L0 148.1V171h22.6L96 121.8V171h64v-49.2l73.4 49.2h23.1v-22.9l-46.6-30.7h46.6v-64h-46.6l46.6-30.7z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M144 0h-32v69.4H0v32h112V171h32v-69.6h112.5v-32H144z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M0 171v-11.3l62.5-42.3h22.6L7.3 171zM7.3.1l77.8 53.2H62.5L0 11.1V.1zm249.2 0v11l-63 42.3h-22.6L248.7.1zM248.7 171l-77.8-53.6h22.6l63 42.3V171z"
    })]
  });
}, Fw = function(i) {
  var n = i.title, a = m(i, Id);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 90 60",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#ED2024",
      d: "M0 0h90v60H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#212121",
      d: "M32.5 12.2v16l7.1 2.5-5 4.9 2.4 3 5.3-5.5 1.2 2.3-3 4.9 3.6 5.6-1.8 2.6 2.8 3.6 2.7-3.7-1.5-2.6 3-5.8-2.7-4.6 1.2-2.3 5.2 5.5 2.5-2.9-5.2-5.1 7.2-2.6V12.2l-5.2 1.9-.1 3.8-3.3.3v-2.6l1.7-2.3 5.6-2.2-2.3-.4 1.4-1.2.9.4-.8-1.4L54 9l-1-1.1L47.5 9l1.4 1.1-3.8 4.9-3.8-4.8 1.3-1.1-5-1.2L36.2 9l-1.5-.4-.8 1.4.9-.6 1.6 1.1-2.3.5 5.5 2 1.6 2.3v2.9l-3.3-.3v-3.6z"
    }), /* @__PURE__ */ e("path", {
      d: "M26.2 25h6.4v2.5h-6.4zm0-4.1h6.4v2.7h-6.4zm0-4.2h6.4v2.6h-6.4zm0-4h6.4v2.5h-6.4zM57.4 25h6.4v2.5h-6.4zm0-4.1h6.4v2.7h-6.4zm0-4.2h6.4v2.6h-6.4zm0-4h6.4v2.5h-6.4zM53.4 36.1h6.4V38h-6.4zm-23.2 0h6.4V38h-6.4z",
      fill: "#212121"
    })]
  });
}, yw = function(i) {
  var n = i.title, a = m(i, Pd);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M0 0h513v342H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M0 0h513v114H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FF9811",
      d: "M0 228h513v114H0z"
    })]
  });
}, Hw = function(i) {
  var n = i.title, a = m(i, Vd);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      d: "M0 171h513v171H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      className: "prefix__st0",
      d: "M0 0h513v171H0z"
    }), /* @__PURE__ */ d("g", {
      fill: "#FFDA44",
      children: [/* @__PURE__ */ e("path", {
        d: "m332.7 135.6 17.5-8.6-7.4-19-18.7 6.2zm-45.6-56 5.5-18.8-19.1-7.2-8 18zm29.4 23.2 12.2-15.3-14.9-13.9-14.2 13.6zm19.4 68.9 19.5-.8v-21.3l-22.9.2zm-12.6 38.1 18.8 5.5 7.3-19-18-8zm-29 32.4 14.9 12.7 14.4-14.4-13.1-14.7zm-47-147.7 9.8 19.9 21.9 3.3-15.9 15.5 3.6 21.9-19.6-10.4-19.7 10.2 3.8-21.9-15.8-15.5 22-3.1z"
      }), /* @__PURE__ */ e("path", {
        d: "m250.8 61.3-2.7 18.3c43.1 3.2 77 39.2 77 83.1 0 46-37.3 82.9-83.4 83.4-29.2.3-51.3-14.8-67-33.7l-13.9 12.3c15 19 40.8 39.9 80.9 39.9 56.3 0 101.9-45.6 101.9-101.9.1-53.2-40.7-96.9-92.8-101.4z"
      }), /* @__PURE__ */ e("path", {
        fill: "#000",
        d: "m291.9 223.4-11.8 14s51.9 38.9 53.6 40.4c1.7 1.5 5.2 2 9.1-2.7 3.7-4.5 2.8-8.1.9-9.7-2-1.5-51.8-42-51.8-42z"
      }), /* @__PURE__ */ e("path", {
        d: "M206.1 157.2c-7.7 10.3-7.5 23.1 2.8 30.9 0 0 135.2 101.5 136.9 103 1.7 1.5 5.2 2 9.1-2.7 3.7-4.5 2.8-8.1.9-9.7-1.9-1.5-149.7-121.5-149.7-121.5zm47.7 99.1 7.3 18.2 19.5-6-4.8-19.1zm-40.4-3.7-2 19.5 20.1 3.6 4.5-19.1zm-35.7-21.2L167.4 248l16.4 12.1 12.5-15.2z"
      })]
    })]
  });
}, _w = function(i) {
  var n = i.title, a = m(i, Nd);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 744 496",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#3A7DCE",
      d: "M0 0h744v496H0V0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#fff",
      d: "m120 125 90 63 54-14 23-81 61-36 92 14 105 55 6 90 34 12v92l-65 115-78 24-72-17 18-30-8-32-10 9-162-25-49-85 20-46-49-62z"
    })]
  });
}, bw = function(i) {
  var n = i.title, a = m(i, kd);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 0h512v342H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#338AF3",
      d: "M0 0h512v114H0zm0 228h512v114H0z"
    }), /* @__PURE__ */ e("circle", {
      fill: "#FFDA44",
      stroke: "#d6ab00",
      strokeWidth: 5,
      cx: 256.5,
      cy: 171,
      r: 40
    })]
  });
}, Ew = function(i) {
  var n = i.title, a = m(i, $d);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#10338c",
      d: "M0 0h513v342H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M513 33 95.3 171 513 310.76v30.57L0 171 513 0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M513 287.18v24.58L81.72 171 513 30v24.16"
    }), /* @__PURE__ */ e("path", {
      fill: "#A2001D",
      d: "m476.98 140.21-21.89 10.68-3.18-15.32 31.19-29.77s-9.42-40.65-13.75-44.98l-112.32 55.82-6.84 36.76-31.9 28.59-.4 34.2 34.29-22.76 67.23-2.66-1.51 38.11h22.23l11.9-44.64 31.55-24.61-6.6-19.42z"
    }), /* @__PURE__ */ e("path", {
      fill: "#EFC100",
      stroke: "#231F20",
      strokeMiterlimit: 10,
      d: "m317.89 238.41-22.24-11.11 22.24-11.11h144.46v22.22z"
    })]
  });
}, Aw = function(i) {
  var n = i.title, a = m(i, Wd);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 114h513v114H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M0 0h513v114H0zm0 228h513v114H0z"
    })]
  });
}, Sw = function(i) {
  var n = i.title, a = m(i, Ud);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#10338c",
      d: "M0 0h513v342H0z"
    }), /* @__PURE__ */ d("g", {
      fill: "#FFF",
      children: [/* @__PURE__ */ e("path", {
        d: "M222.2 170.7c.3-.3.5-.6.8-.9-.2.3-.5.6-.8.9zM188 212.6l11 22.9 24.7-5.7-11 22.8 19.9 15.8-24.8 5.6.1 25.4-19.9-15.9-19.8 15.9.1-25.4-24.8-5.6 19.9-15.8-11.1-22.8 24.8 5.7zm197.9 28.5 5.2 10.9 11.8-2.7-5.3 10.9 9.5 7.5-11.8 2.6v12.2l-9.4-7.6-9.5 7.6.1-12.2-11.8-2.6 9.5-7.5-5.3-10.9 11.8 2.7zm-48.6-116 5.2 10.9 11.8-2.7-5.3 10.9 9.5 7.5-11.8 2.7v12.1l-9.4-7.6-9.5 7.6.1-12.1-11.9-2.7 9.5-7.5-5.3-10.9L332 136zm48.6-66.2 5.2 10.9 11.8-2.7-5.3 10.9 9.5 7.5-11.8 2.7v12.1l-9.4-7.6-9.5 7.6.1-12.1-11.8-2.7 9.5-7.5-5.3-10.9 11.8 2.7zm42.5 49.7 5.2 10.9 11.8-2.7-5.3 10.9 9.5 7.5-11.8 2.6V150l-9.4-7.6-9.5 7.6v-12.2l-11.8-2.6 9.5-7.5-5.3-10.9 11.8 2.7zM398 166.5l4.1 12.7h13.3l-10.8 7.8 4.2 12.7-10.8-7.9-10.8 7.9 4.1-12.7-10.7-7.8h13.3z"
      }), /* @__PURE__ */ e("path", {
        d: "M254.8 0v30.6l-45.1 25.1h45.1V115h-59.1l59.1 32.8v22.9h-26.7l-73.5-40.9v40.9H99v-48.6l-87.4 48.6H-1.2v-30.6L44 115H-1.2V55.7h59.1L-1.2 22.8V0h26.7L99 40.8V0h55.6v48.6L242.1 0z"
      })]
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M142.8 0h-32v69.3h-112v32h112v69.4h32v-69.4h112v-32h-112z"
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "m154.6 115 100.2 55.7v-15.8L183 115z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "m154.6 115 100.2 55.7v-15.8L183 115z"
    }), /* @__PURE__ */ e("path", {
      d: "m154.6 115 100.2 55.7v-15.8L183 115zm-83.9 0-71.9 39.9v15.8L99 115z",
      fill: "#D80027"
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M99 55.7-1.2 0v15.7l71.9 40z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M99 55.7-1.2 0v15.7l71.9 40z"
    }), /* @__PURE__ */ e("path", {
      d: "M99 55.7-1.2 0v15.7l71.9 40zm84 0 71.8-40V0L154.6 55.7z",
      fill: "#D80027"
    })]
  });
}, Dw = function(i) {
  var n = i.title, a = m(i, Gd);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 363 242",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#338AF3",
      d: "M0 0h363v242H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M57 96.9 14.7 78.2 57 59.6l18.6-42.2 18.6 42.2 42.3 18.6-42.3 18.7-18.6 42.2z"
    }), /* @__PURE__ */ e("path", {
      fill: "#f30028",
      d: "m75.6 40.6 11.5 26.1 26.1 11.5-26.1 11.5-11.5 26.1-11.5-26.1L38 78.2l26.1-11.5z"
    }), /* @__PURE__ */ e("path", {
      d: "M0 152.2h363v15.7H0zm0 31.4h363v15.7H0z",
      fill: "#FFDA44"
    })]
  });
}, Cw = function(i) {
  var n = i.title, a = m(i, Kd);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M0 0h513v342H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "M513 210.9H202.2V342h-79.8V210.9H0v-79.8h122.4V0h79.8v131.1H513v61.2z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M513 149.7v42.6H183.7V342H141V192.3H0v-42.6h141V0h42.7v149.7z"
    })]
  });
}, Tw = function(i) {
  var n = i.title, a = m(i, Yd);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#ef3340",
      d: "M0 0h513v342H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#00b5e2",
      d: "M0 0h513v114H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#509e2f",
      d: "M0 228h513v114H0z"
    }), /* @__PURE__ */ d("g", {
      fill: "#FFF",
      children: [/* @__PURE__ */ e("path", {
        d: "M265.6 212.6c-23 0-41.6-18.6-41.6-41.6s18.6-41.6 41.6-41.6c7.2 0 13.9 1.8 19.8 5-9.2-9-21.9-14.6-35.8-14.6-28.3 0-51.2 22.9-51.2 51.2s22.9 51.2 51.2 51.2c13.9 0 26.6-5.6 35.8-14.6-5.9 3.2-12.6 5-19.8 5z"
      }), /* @__PURE__ */ e("path", {
        d: "m297.6 142.2 5.5 15.5 14.9-7.1-7.1 14.9 15.5 5.5-15.5 5.5 7.1 14.9-14.9-7.1-5.5 15.5-5.5-15.5-14.9 7.1 7.1-14.9-15.5-5.5 15.5-5.5-7.1-14.9 14.9 7.1z"
      })]
    })]
  });
}, Bw = function(i) {
  var n = i.title, a = m(i, qd);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#10338C",
      d: "M0 0h513.1v342H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#F6C500",
      d: "M99.9 0h342v342"
    }), /* @__PURE__ */ d("g", {
      fill: "#FFF",
      children: [/* @__PURE__ */ e("path", {
        d: "M19.9 21.1 40.3 6.2 60.9 21 54 0H26.7z"
      }), /* @__PURE__ */ e("path", {
        d: "M92.3 25.5 84.4 1.3l-7.8 24.2H51.3l20.5 14.8-7.8 24 20.4-14.8L105 64.3l-7.9-24 20.5-14.9z"
      }), /* @__PURE__ */ e("path", {
        d: "m136.3 69.2-7.8-24-7.8 24H95.5l20.4 14.9-7.8 24 20.4-14.8 20.6 14.8-7.8-24 20.4-14.9z"
      }), /* @__PURE__ */ e("path", {
        d: "m179.4 112.3-7.8-24.1-7.8 24.1h-25.3l20.5 14.9-7.8 24 20.4-14.8 20.6 14.8-7.9-24 20.5-15z"
      }), /* @__PURE__ */ e("path", {
        d: "m222.5 155.3-7.8-24-7.8 24h-25.4l20.6 15-7.8 24 20.4-14.9 20.4 14.9-7.8-24 20.6-15z"
      }), /* @__PURE__ */ e("path", {
        d: "m265.6 198.4-7.8-24-7.8 24h-25.4l20.6 14.9-7.8 24.1 20.4-14.9 20.4 14.9-7.8-24.2 20.5-14.8z"
      }), /* @__PURE__ */ e("path", {
        d: "m308.7 241.5-7.9-24-7.8 24h-25.3l20.5 14.8-7.9 24.2 20.6-14.9 20.4 14.8-7.8-24.1 20.5-14.8z"
      }), /* @__PURE__ */ e("path", {
        d: "m351.7 284.6-7.8-24.2-7.8 24.2h-25.3l20.4 14.8-7.8 24.1 20.5-14.9 20.5 14.9-7.8-24.1 20.4-14.8z"
      }), /* @__PURE__ */ e("path", {
        d: "m387 303.5-7.9 24.1-25.3.1 19.8 14.3h26.6l19.9-14.4h-25.3z"
      })]
    })]
  });
}, Lw = function(i) {
  var n = i.title, a = m(i, jd);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#ffc726",
      d: "M0 0h513v342H0z"
    }), /* @__PURE__ */ e("path", {
      d: "M0 0h171v342H0zm342 0h171v342H342z",
      fill: "#00267f"
    }), /* @__PURE__ */ e("path", {
      d: "m325.74 101.02-31.97 12.4c-.68 1.35-5.79 7.54-8.18 53.06h-17.05v-60.42L256 78.68l-12.54 27v60.8H226.4c-2.39-45.53-7.8-52.48-8.47-53.84l-31.68-11.63c.15.31 15.4 31.34 15.4 78.01v12.54h41.81v71.07h25.08v-71.07h41.81v-12.54c0-24.13 4.17-44.02 7.68-56.46 3.82-13.57 7.7-21.49 7.74-21.57l-.03.03z"
    })]
  });
}, Ow = function(i) {
  var n = i.title, a = m(i, Zd);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#2d6e41",
      d: "M0 85.331h513v342H0z"
    }), /* @__PURE__ */ e("circle", {
      fill: "#F40B32",
      cx: 218.902,
      cy: 256.5,
      r: 115
    })]
  });
}, Rw = function(i) {
  var n = i.title, a = m(i, Jd);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#fdda25",
      d: "M0 0h513v342H0z"
    }), /* @__PURE__ */ e("path", {
      d: "M0 0h171v342H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#ef3340",
      d: "M342 0h171v342H342z"
    })]
  });
}, Iw = function(i) {
  var n = i.title, a = m(i, Xd);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#3d944f",
      d: "M0 0h513v342H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#ef2b2d",
      d: "M0 0h513v171H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "m256 102.6 16.9 52h54.7l-44.2 32.2 16.8 52-44.2-32.1-44.2 32.1 16.8-52-44.2-32.2h54.7z"
    })]
  });
}, Pw = function(i) {
  var n = i.title, a = m(i, Qd);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#00966e",
      d: "M0 85.337h512v341.326H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 85.337h512v113.775H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#d62612",
      d: "M0 312.888h512v113.775H0z"
    })]
  });
}, Vw = function(i) {
  var n = i.title, a = m(i, tv);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 341.3",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M0 0h512v341.3H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "m222.8 34.3-85.2 34.2 85.2 34.1-85.2 34.1 85.2 34.1-85.2 34.1 85.2 34.1-85.2 34.1 85.2 34.1-85.2 34.1H0V0h137.6z"
    })]
  });
}, Nw = function(i) {
  var n = i.title, a = m(i, ev);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M0 0h513v342H0z"
    }), /* @__PURE__ */ e("path", {
      d: "M215.9 170.7 0 314.6V26.8zM513 26.8v287.8L297.1 170.7z",
      fill: "#47a644"
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M512 26.8 296.1 170.7 512 314.6v26.7h-40.1L256 197.4 40.1 341.3H0v-26.7l215.9-143.9L0 26.8V0h40.1L256 143.9 471.9 0H512z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M513 26.8 297.1 170.7 513 314.6V342h-40L256 197.4 39 342H0v-27.4l215.9-143.9L0 26.8V0h40.1L256 143.9 471.9 0H513z"
    }), /* @__PURE__ */ e("circle", {
      fill: "#FFF",
      cx: 251.6,
      cy: 170.7,
      r: 100.2
    }), /* @__PURE__ */ e("path", {
      d: "m251.4 103.6 7.4 12.9h14.8l-7.4 12.8 7.4 12.8h-14.8l-7.4 12.9-7.4-12.9h-14.8l7.4-12.8-7.4-12.8H244zm38.8 66.7 7.4 12.9h14.8L305 196l7.4 12.8h-14.8l-7.4 12.9-7.4-12.9h-14.9l7.4-12.8-7.4-12.8h14.9zm-77.2 0 7.4 12.9h14.9l-7.4 12.8 7.4 12.8h-14.9l-7.4 12.9-7.4-12.9h-14.8l7.4-12.8-7.4-12.8h14.8z",
      fill: "#D80027",
      stroke: "#47a644",
      strokeWidth: 3
    })]
  });
}, kw = function(i) {
  var n = i.title, a = m(i, rv);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#008751",
      d: "M0 85.333h513v342H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#fcd116",
      d: "M196.666 85.333H513v171H196.666z"
    }), /* @__PURE__ */ e("path", {
      fill: "#e8112d",
      d: "M196.666 256H513v171H196.666z"
    })]
  });
}, $w = function(i) {
  var n = i.title, a = m(i, nv);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 341.33",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 0h512v341.33H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#E6BC00",
      d: "M157.31 199.76s-9.04 43.93-19.31 40.39c-10.62-3.54-17.53-18.76-17.53-18.76l-14.52 21.24s38.18 8.48 41.01 5.47c1.22-1.14 8.21-15.1 10.34-26.05v-22.29zm-56.13 60.57s-2.48 20.18-1.06 22.66c1.24 2.3 39.48 11.33 39.48 11.33s-24.96 16.46-29.74 20.54L91.8 284.94l-.71-24.61h10.09zm11.33-165.69s39.65 41.6 40.36 45.5c.71 3.72-4.25 3.19-4.25 3.19s-44.79-37.53-49.92-41.07c-5.31-3.55 13.81-7.62 13.81-7.62z"
    }), /* @__PURE__ */ e("path", {
      fill: "#ADADAD",
      d: "M99.41 104.73s16.99-.71 16.64-11.51c-.35-10.62-11.15-14.87-19.12-12.39-7.97 2.3-23.01 13.45-13.63 35.05 9.38 21.42 23.37 29.39 26.2 47.8 0 0-5.46 9.86-19.12.35-16.9-11.77-6.2-38.24-10.44-44.96-4.25-7.08-40.95-38.92-40.95-38.92s-30.24 39.37-18 74.92c16.95 49.21 51.74 31.98 64.61 36.76 0 0-42.13 61.96-49.57 67.09 0 0 24.08 8.32 47.8-18.76 0 0 5.84 9.74 7.08 20.18h10.27c4.78-26.2 51.51-64.26 49.92-82.32-1.77-21.25-49.21-49.39-51.69-73.29z"
    }), /* @__PURE__ */ e("path", {
      fill: "#E6BC00",
      d: "M359.17 201.27s8.96 42.43 19.23 38.89c10.62-3.54 17.53-18.76 17.53-18.76l14.52 21.24s-37 8.48-39.83 5.47c-1.21-1.14-9.32-13.79-11.52-24.66l.07-22.18zm56.05 59.06s2.48 20.18 1.06 22.66c-1.24 2.3-39.48 11.33-39.48 11.33s24.96 16.46 29.74 20.54l18.06-29.92.71-24.61h-10.09zM403.89 94.64s-39.65 41.6-40.36 45.5c-.71 3.72 4.25 3.19 4.25 3.19s44.79-37.53 49.92-41.07c5.14-3.55-13.81-7.62-13.81-7.62z"
    }), /* @__PURE__ */ e("path", {
      fill: "#125ECC",
      d: "M157.31 87.06H359.1v145.46c0 16.06-9.69 21.39-21.91 31.85l-45.92 39.41c-18.25 15.62-47.91 15.57-66.07 0l-46.01-39.43c-12.08-10.35-21.88-15.71-21.88-31.82V87.06z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFE600",
      d: "M200.55 147.71c-7.96 0-14.41-6.45-14.41-14.41s6.45-14.41 14.41-14.41 14.41 6.45 14.41 14.41-6.45 14.41-14.41 14.41zm57.65-3c-7.96 0-14.41-6.45-14.41-14.41s6.45-14.41 14.41-14.41 14.41 6.45 14.41 14.41-6.45 14.41-14.41 14.41zm57.65 3c-7.96 0-14.41-6.45-14.41-14.41s6.45-14.41 14.41-14.41 14.41 6.45 14.41 14.41-6.45 14.41-14.41 14.41zM214.96 274.43c-7.96 0-14.41-6.45-14.41-14.41s6.45-14.41 14.41-14.41 14.41 6.45 14.41 14.41c.01 7.96-6.45 14.41-14.41 14.41zm43.24 14.42c-7.96 0-14.41-6.45-14.41-14.41s6.45-14.41 14.41-14.41 14.41 6.45 14.41 14.41c0 7.95-6.45 14.41-14.41 14.41zm43.24-14.42c-7.96 0-14.41-6.45-14.41-14.41s6.45-14.41 14.41-14.41 14.41 6.45 14.41 14.41-6.45 14.41-14.41 14.41z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D60537",
      d: "M157.31 175.36H359.1v57.65H157.31v-57.65z"
    }), /* @__PURE__ */ e("path", {
      fill: "#EACE00",
      d: "M142.9 43.82s57.65-14.41 115.31-14.41 115.31 14.41 115.31 14.41l-14.41 57.65s-50.45-14.41-100.89-14.41-100.89 14.41-100.89 14.41L142.9 43.82z"
    }), /* @__PURE__ */ e("path", {
      fill: "#7A6920",
      d: "M258.2 72.65c-7.96 0-14.41-6.45-14.41-14.41s6.45-14.41 14.41-14.41 14.41 6.45 14.41 14.41-6.45 14.41-14.41 14.41zm57.65 5c-7.96 0-14.41-6.45-14.41-14.41s6.45-14.41 14.41-14.41 14.41 6.45 14.41 14.41-6.45 14.41-14.41 14.41zm-115.3 0c-7.96 0-14.41-6.45-14.41-14.41s6.45-14.41 14.41-14.41 14.41 6.45 14.41 14.41-6.45 14.41-14.41 14.41z"
    }), /* @__PURE__ */ e("path", {
      fill: "#ADADAD",
      d: "M365.08 178.02c-1.59 18.06 45.14 56.12 49.92 82.32h10.27c1.24-10.44 7.08-20.18 7.08-20.18 23.72 27.09 47.8 18.76 47.8 18.76-7.44-5.13-49.57-67.09-49.57-67.09 12.88-4.78 47.67 12.45 64.61-36.76 12.24-35.55-18-74.92-18-74.92s-36.7 31.84-40.95 38.92c-4.25 6.73 6.46 33.2-10.44 44.96-13.66 9.51-19.12-.35-19.12-.35 2.83-18.41 16.82-26.38 26.2-47.8 9.38-21.6-5.66-32.75-13.63-35.05-7.97-2.48-18.76 1.77-19.12 12.39-.35 10.8 16.64 11.51 16.64 11.51-2.48 23.9-49.92 52.04-51.69 73.29z"
    }), /* @__PURE__ */ e("circle", {
      fill: "#FFF",
      cx: 258.2,
      cy: 204.19,
      r: 16.93
    })]
  });
}, Ww = function(i) {
  var n = i.title, a = m(i, iv);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#c8102e",
      d: "M0 0h513v342H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#012169",
      d: "M0 .1h256.5v171H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M256 0h-22.6L160 48.9V0H96v48.9L22.6 0H0v22.7l46.1 30.7H0v64h46.1L0 148.1v22.6h22.6L96 121.8v48.9h64v-48.9l73.4 48.9H256v-22.6l-46.1-30.7H256v-64h-46.1L256 22.7z"
    }), /* @__PURE__ */ e("path", {
      fill: "#c8102e",
      d: "M144 0h-32v69.4H0v32h112v69.3h32v-69.3h112v-32H144z"
    }), /* @__PURE__ */ e("path", {
      fill: "#c8102e",
      d: "M0 170.7v-11l62.5-42.3h22.6L7.3 170.7zM7.3.1l77.8 53.2H62.5L0 11.1V.1zM256 .1v11l-62.5 42.3h-22.6L248.7.1zm-7.3 170.6-77.8-53.3h22.6l62.5 42.3v11z"
    }), /* @__PURE__ */ d("g", {
      transform: "translate(13 5)",
      children: [/* @__PURE__ */ e("path", {
        fill: "#fff",
        d: "M303.9 94.94v99.69c0 59.81 79.75 99.69 79.75 99.69s79.75-39.88 79.75-99.69V94.94H303.9z"
      }), /* @__PURE__ */ e("path", {
        fill: "#2F8F22",
        d: "M436.37 254.44H330.93c23.13 25.08 52.72 39.88 52.72 39.88s29.59-14.8 52.72-39.88z"
      }), /* @__PURE__ */ e("circle", {
        fill: "#65B5D2",
        cx: 383.65,
        cy: 214.56,
        r: 39.88
      }), /* @__PURE__ */ e("circle", {
        fill: "#c8102e",
        cx: 343.77,
        cy: 194.63,
        r: 19.94
      }), /* @__PURE__ */ e("circle", {
        fill: "#c8102e",
        cx: 423.52,
        cy: 194.63,
        r: 19.94
      }), /* @__PURE__ */ e("circle", {
        fill: "#c8102e",
        cx: 383.65,
        cy: 154.75,
        r: 19.94
      })]
    })]
  });
}, Uw = function(i) {
  var n = i.title, a = m(i, lv);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 341.33",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "M0 0h512v341.33H0z"
    }), /* @__PURE__ */ e("path", {
      d: "m0 193.74 512 127.19V214.26L0 97.08z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M512 234.26v-86.67L0 20.41v86.67"
    }), /* @__PURE__ */ d("g", {
      fill: "#D80027",
      stroke: "#231F20",
      strokeWidth: 3,
      strokeMiterlimit: 10,
      children: [/* @__PURE__ */ e("path", {
        d: "M306.4 134.01a50.28 50.28 0 0 1 6.07 24.02c0 21.55-13.51 39.94-32.52 47.19v-59.51c5.7-1.19 10-6.37 10-12.59 6.9 0 12.5-5.75 12.5-12.85h-.42c6.9 0 12.91-5.75 12.91-12.85h-34.99V76.58l-14.99-27.71-15 27.71v30.84h-34.99c0 7.1 6.01 12.85 12.91 12.85h-.42c0 7.1 5.6 12.85 12.5 12.85 0 6.22 4.29 11.4 9.99 12.59v61.37c-22.09-5.39-38.48-25.3-38.48-49.05 0-8.7 2.2-16.88 6.07-24.02-10.96 11.21-17.72 26.53-17.72 43.44 0 34.32 27.82 62.15 62.15 62.15s62.15-27.83 62.15-62.15c0-16.91-6.77-32.24-17.72-43.44z"
      }), /* @__PURE__ */ e("path", {
        d: "M198.46 226.81s20.69 27.71 66.5 27.71 66.5-27.71 66.5-27.71l13.47 28.37s-21.03 27.71-79.97 27.71-79.97-27.71-79.97-27.71l13.47-28.37zm-69.22-93.63h20.88l24.93 27.26v73.45h-26.28v-68.37zm270.76 0h-20.88l-24.93 27.26v73.45h26.27v-68.37z"
      })]
    })]
  });
}, Gw = function(i) {
  var n = i.title, a = m(i, av);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#d52b1e",
      d: "M0 0h513v114H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#f9e300",
      d: "M0 114h513v114H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#007934",
      d: "M0 228h513v114H0z"
    })]
  });
}, Kw = function(i) {
  var n = i.title, a = m(i, ov);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 341.3",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 0h512v341.3H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#012a87",
      d: "M0 341.3h512V0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#f9d90f",
      d: "M250.4 0H0v166.9z"
    }), /* @__PURE__ */ e("path", {
      fill: "#dc171d",
      d: "m140.4 118.3 12.2 21.2h24.5l-12.3 21.1 12.3 21.2h-24.5L140.4 203l-12.2-21.2h-24.5l12.3-21.2-12.3-21.1h24.5z"
    }), /* @__PURE__ */ e("circle", {
      fill: "none",
      stroke: "#000",
      strokeWidth: 9,
      strokeMiterlimit: 10,
      cx: 140.4,
      cy: 160.6,
      r: 57.7
    })]
  });
}, Yw = function(i) {
  var n = i.title, a = m(i, sv);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#009b3a",
      d: "M0 0h513v342H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#fedf00",
      d: "m256.5 19.3 204.9 151.4L256.5 322 50.6 170.7z"
    }), /* @__PURE__ */ e("circle", {
      fill: "#FFF",
      cx: 256.5,
      cy: 171,
      r: 80.4
    }), /* @__PURE__ */ e("path", {
      fill: "#002776",
      d: "M215.9 165.7c-13.9 0-27.4 2.1-40.1 6 .6 43.9 36.3 79.3 80.3 79.3 27.2 0 51.3-13.6 65.8-34.3-24.9-31-63.2-51-106-51zm119 20.3c.9-5 1.5-10.1 1.5-15.4 0-44.4-36-80.4-80.4-80.4-33.1 0-61.5 20.1-73.9 48.6 10.9-2.2 22.1-3.4 33.6-3.4 46.8.1 89 19.5 119.2 50.6z"
    })]
  });
}, qw = function(i) {
  var n = i.title, a = m(i, cv);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#ffc72c",
      d: "M0 85.337h512v341.326H0z"
    }), /* @__PURE__ */ e("path", {
      d: "M0 85.337h512v113.775H0zm0 227.551h512v113.775H0z",
      fill: "#00778b"
    }), /* @__PURE__ */ e("path", {
      d: "M256 256.006 0 426.668V85.331z"
    })]
  });
}, jw = function(i) {
  var n = i.title, a = m(i, hv);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 341.3",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FF7415",
      d: "M0 0h512v341.3H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "M512 0H0v341.3"
    }), /* @__PURE__ */ e("path", {
      fill: "none",
      stroke: "#FFF",
      strokeWidth: 42,
      strokeMiterlimit: 10,
      d: "M128.7 255.5s35 54 67.3 32.4c56.9-37.9-68.9-108.6-2.9-152.6 58.3-38.8 76.6 103.5 137.6 62.8 59-39.3-64.7-111.4-9.2-148.4 33.4-22.2 67.1 32.6 67.1 32.6"
    })]
  });
}, Zw = function(i) {
  var n = i.title, a = m(i, uv);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 33.333 1100 733.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#ef2b2d",
      d: "M0 0h1100v800H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#fff",
      d: "M300 0h200v800H300z"
    }), /* @__PURE__ */ e("path", {
      fill: "#fff",
      d: "M0 300h1100v200H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#002868",
      d: "M350 0h100v800H350z"
    }), /* @__PURE__ */ e("path", {
      fill: "#002868",
      d: "M0 350h1100v100H0z"
    })]
  });
}, Jw = function(i) {
  var n = i.title, a = m(i, fv);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 0h513v342H0z"
    }), /* @__PURE__ */ e("path", {
      d: "M0 238h513v104H0zM0 0h513v104H0z",
      fill: "#6da9d2"
    }), /* @__PURE__ */ e("path", {
      d: "M0 125.5h513v89.656H0z"
    })]
  });
}, Xw = function(i) {
  var n = i.title, a = m(i, dv);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#007C30",
      d: "M0 0h513v342H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#CE1720",
      d: "M0 230h513V0H0"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M100 230V0H0v342h513-413z"
    }), /* @__PURE__ */ e("path", {
      d: "M28 159.6 8.6 128.2 28 97.4l19.3 30.8zm44.6 0-19.3-31.4 19.3-30.8L92 128.2zM28 241.2 8.6 209.8 28 179l19.3 30.8zm44.6 0-19.3-31.4L72.6 179 92 209.8z",
      fill: "#CE1720"
    }), /* @__PURE__ */ e("path", {
      d: "m28 73.8-16.1-26L28 22.2l16 25.6zm44.6 0-16-26 16-25.6 16.1 25.6zM28 318l-16.1-26.1L28 266.3l16 25.6zm44.6 0-16-26.1 16-25.6 16.1 25.6z",
      fill: "none",
      stroke: "#CE1720",
      strokeWidth: 7
    })]
  });
}, Qw = function(i) {
  var n = i.title, a = m(i, vv);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 341.3",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#003e87",
      d: "M0 0h512v341.3H0z"
    }), /* @__PURE__ */ e("circle", {
      fill: "#FFF",
      cx: 260.9,
      cy: 170.9,
      r: 118.9
    }), /* @__PURE__ */ e("circle", {
      fill: "none",
      stroke: "#6DA544",
      strokeWidth: 18,
      strokeMiterlimit: 10,
      cx: 261.9,
      cy: 173.1,
      r: 94.5
    }), /* @__PURE__ */ d("g", {
      stroke: "#000",
      children: [/* @__PURE__ */ e("path", {
        fill: "#003e87",
        d: "m261.9 151.5-50.6 23.4v20c0 11.8 6.1 22.8 16.2 28.9L262 239l34.5-15.2c10-6.2 16.2-17.1 16.2-28.9v-20l-50.8-23.4z"
      }), /* @__PURE__ */ e("path", {
        fill: "#FFDA44",
        d: "M211.3 128.1h101.3v46.7H211.3z"
      })]
    }), /* @__PURE__ */ e("path", {
      d: "M0 0h512v35H0zm0 306h512v35H0z",
      fill: "#ce1127"
    })]
  });
}, tz = function(i) {
  var n = i.title, a = m(i, pv);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 0h513v342H0z"
    }), /* @__PURE__ */ e("path", {
      d: "M0 0h142v342H0zm371 0h142v342H371zm-64.5 206 50.4-25.2-25.2-12.6V143l-50.4 25.2 25.2-50.4h-25.2L256.1 80l-25.2 37.8h-25.2l25.2 50.4-50.4-25.2v25.2l-25.2 12.6 50.4 25.2-12.6 25.2h50.4V269h25.2v-37.8h50.4z",
      fill: "red"
    })]
  });
}, ez = function(i) {
  var n = i.title, a = m(i, mv);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 341.3",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "green",
      d: "M0 0h512v341.3H0z"
    }), /* @__PURE__ */ e("path", {
      d: "m422.7 252.4 6.2 12.8 13.8-3.2-6.2 12.8 11.2 8.8-13.9 3.2V301l-11.1-8.9-11.1 8.9v-14.2l-13.8-3.2 11.1-8.8-6.2-12.8 13.9 3.2zm-46.6-136.3 6.2 12.9 13.8-3.2-6.2 12.8 11.2 8.8-13.9 3.1v14.3l-11.1-8.9-11.1 8.9.1-14.3-13.9-3.1 11.1-8.8-6.2-12.8L370 129zm37-77.8 6.2 12.8 13.8-3.2-6.2 12.8 11.2 8.9-13.9 3.1v14.2L413.1 78 402 86.9l.1-14.2-13.9-3.1 11.1-8.9-6.2-12.8 13.9 3.2zm51.8 58.4 6.2 12.8 13.9-3.2-6.3 12.8 11.2 8.9-13.9 3.1.1 14.2-11.2-8.9-11.1 8.9.1-14.2L440 128l11.2-8.9-6.3-12.8 13.9 3.2zm-28 68.1 4.9 14.8h15.6l-12.6 9.2 4.8 14.9-12.7-9.2-12.6 9.2 4.8-14.9-12.6-9.2h15.6zM306.8 254.7c-49.2 0-89.1-39.9-89.1-89.1s39.9-89.1 89.1-89.1c15.3 0 29.8 3.9 42.4 10.7C329.4 67.9 302.3 56 272.5 56c-60.5 0-109.6 49.1-109.6 109.6S212 275.3 272.5 275.3c29.8 0 56.9-11.9 76.6-31.3-12.6 6.8-27 10.7-42.3 10.7zM140.4 59.5C129.7 41 109.7 28.6 86.8 28.6S44 41 33.3 59.5h107.1zm.2.4-53.8 53.8-53.7-53.8C28 68.9 25 79.3 25 90.5c0 34.2 27.7 61.9 61.9 61.9s61.9-27.7 61.9-61.9c-.1-11.2-3.1-21.6-8.2-30.6z",
      fill: "#FFDA44"
    }), /* @__PURE__ */ e("path", {
      fill: "#A2001D",
      d: "M71.4 98.2v52.2c4.9 1.3 10.1 1.9 15.5 1.9s10.5-.7 15.5-1.9V98.2h-31z"
    })]
  });
}, rz = function(i) {
  var n = i.title, a = m(i, gv);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 341.3",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#338AF3",
      d: "M0 0h512v341.3H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "M512 66.9V0H411.7L0 274.4v66.9h100.3z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M512 0v40.1L60.2 341.3H0v-40.1L451.8 0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "m93.6 31.2 16.3 50.4H163l-42.9 31.2 16.4 50.5-42.9-31.2-43 31.2L67 112.8 24.1 81.6h53.1z"
    })]
  });
}, nz = function(i) {
  var n = i.title, a = m(i, wv);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 341.3",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#d21034",
      d: "M0 0h512v341.3H0z"
    }), /* @__PURE__ */ e("path", {
      d: "M0 170.7h211.5V256H0zm300.5 0H512V256H300.5z",
      fill: "#3a9927"
    }), /* @__PURE__ */ e("path", {
      fill: "#003082",
      d: "M0 0v85.3h211.5V0h89v85.3H512V0z"
    }), /* @__PURE__ */ e("path", {
      d: "M300.5 85.3H512v85.3H300.5zM0 85.3h211.5v85.3H0z",
      fill: "#FFF"
    }), /* @__PURE__ */ e("path", {
      d: "M300.5 341.3h-89V256H0v85.3h512V256H300.5zM105.7 8.6l8.6 26.2h27.5L119.5 51l8.6 26.2L105.7 61 83.4 77.2 91.9 51 69.6 34.8h27.6z",
      fill: "#ffce00"
    })]
  });
}, iz = function(i) {
  var n = i.title, a = m(i, zv);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#da1a35",
      d: "M0 85.331h513v342H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#009543",
      d: "M443.726 85.331 102.4 426.657H0V85.331z"
    }), /* @__PURE__ */ e("path", {
      fill: "#fbde4a",
      d: "M500.124 85.331 158.798 426.657H11.876L353.202 85.331z"
    })]
  });
}, lz = function(i) {
  var n = i.title, a = m(i, xv);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "red",
      d: "M0 85.337h513v342H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M356.174 222.609h-66.783v-66.783h-66.782v66.783h-66.783v66.782h66.783v66.783h66.782v-66.783h66.783z"
    })]
  });
}, az = function(i) {
  var n = i.title, a = m(i, Mv);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 85.331h512v341.326H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#009e60",
      d: "M330.207 85.331H512v341.337H330.207z"
    }), /* @__PURE__ */ e("path", {
      fill: "#f77f00",
      d: "M0 85.331h181.793v341.337H0z"
    })]
  });
}, oz = function(i) {
  var n = i.title, a = m(i, Fv);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#01237a",
      d: "M0 85.332h513v342H0z"
    }), /* @__PURE__ */ e("path", {
      d: "m384 156.705 5.283 16.254h17.089l-13.826 10.045 5.281 16.254L384 189.211l-13.825 10.047 5.28-16.254-13.825-10.045h17.089zm-70.209 29.081 15.228 7.758 12.084-12.083-2.673 16.879 15.227 7.759-16.879 2.673-2.674 16.88-7.76-15.227-16.878 2.673 12.086-12.084zm-29.081 70.209 16.254-5.281.001-17.089 10.044 13.825 16.254-5.282-10.046 13.827 10.046 13.826-16.254-5.28-10.044 13.825v-17.09zm29.081 70.209 7.759-15.229-12.084-12.084 16.881 2.674 7.757-15.227 2.674 16.879 16.879 2.672-15.227 7.759 2.673 16.882-12.084-12.087zM384 355.284l-5.281-16.253h-17.091l13.827-10.045-5.28-16.254L384 322.776l13.827-10.044-5.281 16.254 13.826 10.045h-17.089zm70.209-29.08-15.229-7.758-12.083 12.084 2.673-16.882-15.227-7.756 16.879-2.675 2.675-16.879 7.756 15.227 16.881-2.674-12.086 12.085zm29.081-70.209-16.254 5.281v17.09l-10.045-13.826-16.254 5.281 10.046-13.826-10.046-13.827 16.254 5.282 10.045-13.825v17.089zm-29.081-70.207-7.757 15.226 12.082 12.084-16.881-2.673-7.756 15.227-2.675-16.88-16.879-2.675 15.227-7.757-2.673-16.878 12.084 12.082zM0 186.665v16h46.069L0 233.377v7.539l57.377-38.252H80L0 255.998h112v-69.334H0zm96 69.331H22.628L96 207.083v48.913zm80-117.331 80-53.334H144v69.334h112v-16h-46.069L256 107.951v-7.539l-57.377 38.251H176v.002zm-16-53.332h73.372L160 134.246V85.333zm-16 170.665h112l-80-53.334h22.623L256 240.917v-7.539l-46.069-30.713H256v-16H144v69.333zm16-48.915 73.372 48.913H160v-48.913zM112 85.331H0l80 53.334H57.377L0 100.413v7.539l46.069 30.712H0v16h112V85.331zm-16 48.915L22.628 85.333H96v48.913z",
      fill: "#FFF"
    }), /* @__PURE__ */ d("g", {
      fill: "#D80027",
      children: [/* @__PURE__ */ e("path", {
        d: "M144 85.331h-32v69.334H0v32h112v69.333h32v-69.333h112v-32H144z"
      }), /* @__PURE__ */ e("path", {
        d: "M80 138.665 0 85.331v15.082l57.377 38.252zm96 0h22.623L256 100.413V85.331zm-118.623 64L0 240.917v15.081l80-53.333zm118.623 0 80 53.333v-15.081l-57.377-38.252z"
      })]
    })]
  });
}, sz = function(i) {
  var n = i.title, a = m(i, yv);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M0 0h513v342H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M196 0h317v171H196z"
    }), /* @__PURE__ */ e("path", {
      fill: "#0037A1",
      d: "M0 0h196v171H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M98 24.5 113.1 71H162l-39.6 28.7 15.2 46.5L98 117.5l-39.6 28.7 15.2-46.5L34 71h48.9z"
    })]
  });
}, cz = function(i) {
  var n = i.title, a = m(i, Hv);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#ce1126",
      d: "M0 0h513v342H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#007a5e",
      d: "M0 0h171v342H0z"
    }), /* @__PURE__ */ e("path", {
      d: "M342 0h171v342H342zm-86 102.2 17.2 53H329L283.9 188l17.2 53-45.1-32.7-45.1 32.7 17.2-53-45.1-32.8h55.8z",
      fill: "#fcd116"
    })]
  });
}, hz = function(i) {
  var n = i.title, a = m(i, _v);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M0 0h513v342H0z"
    }), /* @__PURE__ */ e("path", {
      d: "m226.8 239.2-9.7-15.6-17.9 4.4 11.9-14.1-9.7-15.6 17.1 6.9 11.8-14.1-1.3 18.4 17.1 6.9-17.9 4.4zM290.6 82l-10.1 15.4 11.6 14.3-17.7-4.8-10.1 15.5-1-18.4-17.7-4.8 17.2-6.6-1-18.4 11.6 14.3zm-54.4-56.6-2 18.3 16.8 7.6-18 3.8-2 18.3-9.2-16-17.9 3.8 12.3-13.7-9.2-15.9 16.8 7.5zm56.6 136.4-14.9 10.9 5.8 17.5-14.9-10.8-14.9 11 5.6-17.6-14.9-10.7 18.4-.1 5.6-17.6 5.8 17.5zM115 46.3l17.3 53.5h56.2l-45.4 32.9 17.3 53.5-45.4-33-45.5 33 17.4-53.5-45.5-32.9h56.3z",
      fill: "#FFDA44"
    })]
  });
}, uz = function(i) {
  var n = i.title, a = m(i, bv);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "M0 85.337h512v341.326H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M0 343.096h512v83.567H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M0 256h512v87.096H0z"
    })]
  });
}, fz = function(i) {
  var n = i.title, a = m(i, Ev);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 85.331h512v341.326H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M0 211.473h512v89.043H0z"
    }), /* @__PURE__ */ e("path", {
      d: "M0 352.462h512v74.207H0zM0 85.331h512v74.207H0z",
      fill: "#0052B4"
    })]
  });
}, dz = function(i) {
  var n = i.title, a = m(i, Av);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 341.3",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FF9811",
      d: "M0-40.8v422.9-211.4z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 0h512v341.3H0z"
    }), /* @__PURE__ */ e("path", {
      d: "M0 0h512v68.3H0zm0 136.5h512v68.3H0zm0 136.6h512v68.3H0z",
      fill: "#0052B4"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M256 170.7 0 341.3V0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "m86.5 111.4 12.7 39.2h41.3l-33.4 24.2 12.8 39.3-33.4-24.2-33.4 24.2 12.8-39.3-33.4-24.2h41.2z"
    })]
  });
}, vz = function(i) {
  var n = i.title, a = m(i, Sv);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#003893",
      d: "M0 0h513v342H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#cf2027",
      d: "M0 182.2h513v41.4H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 140.8h513v41.4H0zm0 82.8h513V265H0z"
    }), /* @__PURE__ */ e("path", {
      d: "m150.4 70 6.9 21.1h22.2l-18 13.1 6.9 21.1-18-13.1-17.9 13.1 6.8-21.1-17.9-13.1h22.2zm0 209.7 6.9 21.1h22.2l-18 13 6.9 21.2-18-13.1-17.9 13.1 6.8-21.2-17.9-13h22.2zm-97.6-70.9 6.9 21.1h22.2l-18 13 6.9 21.2-18-13.1-17.9 13.1 6.8-21.2-17.9-13H46zM90.1 91l6.9 21.1h22.2l-18 13 6.9 21.2-18-13.1-17.9 13.1 6.8-21.2-18-13h22.3zm-66.3 71H46l6.8-21.1 6.9 21.1h22.2l-18 13.1 6.9 21.1-18-13-17.9 13 6.8-21.1zm48.4 148.9 6.8-21.1-18-13h22.3l6.8-21.2 6.9 21.2h22.2l-18 13 6.9 21.1-18-13zM248 208.8l-6.9 21.1h-22.2l18 13-6.9 21.2 18-13.1 18 13.1-6.9-21.2 18-13h-22.2zM210.7 91l-6.8 21.1h-22.2l17.9 13-6.8 21.2 17.9-13.1 18 13.1-6.9-21.2 18-13h-22.2zm66.4 71h-22.2l-6.9-21.1-6.9 21.1h-22.2l18 13.1-6.9 21.1 18-13 18 13-6.9-21.1zm-48.4 148.9-6.9-21.1 18-13h-22.2l-6.9-21.2-6.8 21.2h-22.2l17.9 13-6.8 21.1 17.9-13z",
      fill: "#f7d116",
      stroke: "#000"
    })]
  });
}, pz = function(i) {
  var n = i.title, a = m(i, Dv);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#002b7f",
      d: "M0 0h513v342H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#f9e814",
      d: "M0 233.5h513v51H0z"
    }), /* @__PURE__ */ e("path", {
      d: "m168.7 86.5 12.9 39.8h41.8l-33.8 24.5 12.9 39.7-33.8-24.5-33.8 24.5 12.9-39.7-33.8-24.5h41.8zm-83.3-54 7.8 23.9h25L97.9 71.1l7.8 23.8-20.3-14.7-20.3 14.7 7.8-23.8-20.3-14.7h25.1z",
      fill: "#FFF"
    })]
  });
}, mz = function(i) {
  var n = i.title, a = m(i, Cv);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 341.3",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#0021ad",
      d: "M0 0h512v341.3H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#1c8a42",
      d: "M0 0h512v341.3"
    }), /* @__PURE__ */ e("path", {
      d: "m77.6 272 5.7 11.9 12.8-3-5.7 11.9 10.3 8.1-12.8 2.9V317l-10.3-8.3-10.2 8.3v-13.2l-12.8-2.9 10.3-8.1-5.8-11.9 12.9 3zm-37.1-98.9 5.7 11.9 12.8-3-5.7 11.8 10.3 8.2-12.9 2.9.1 13.2-10.3-8.3-10.3 8.3.1-13.2-12.9-2.9 10.4-8.2L22 182l12.8 3zm37.1-80.9 5.7 11.8 12.8-2.9-5.7 11.8 10.3 8.2-12.8 2.9v13.1l-10.3-8.2-10.2 8.2V124l-12.8-2.9 10.3-8.2-5.8-11.8L72 104zm46.1 62.9 5.7 11.9 12.8-3-5.7 11.9 10.3 8.1-12.8 2.9v13.2l-10.3-8.2-10.2 8.2v-13.2l-12.8-2.9 10.3-8.1-5.7-11.9 12.8 3zm-32.9 54 4.4 13.7h14.5L98 231.3l4.5 13.7-11.7-8.4-11.7 8.4 4.5-13.7-11.7-8.5h14.4z",
      fill: "#FFF"
    }), /* @__PURE__ */ e("circle", {
      fill: "#ffc639",
      cx: 267.1,
      cy: 170.7,
      r: 74.5
    }), /* @__PURE__ */ e("path", {
      fill: "#1c8a42",
      d: "M267.1 220.3h24.8s10.8-19 0-37.2l24.8-24.8-12.4-24.8h-12.4s-6.2 18.6-31 18.6-31-18.6-31-18.6h-12.4l12.4 24.8-12.4 24.8 12.4 12.4s12.4-24.8 37.2-12.4c0 0 10.5 15.5 0 37.2z"
    }), /* @__PURE__ */ e("path", {
      fill: "#ffc639",
      d: "M464.4 92.2c.6-2.9-.2-17.6-.2-20.7 0-21.3-13.9-39.4-33.2-45.7 5.9 12 9.2 25.4 9.2 39.7 0 4.8-.4 9.5-1.1 14.1-2.9-4.7-6.6-8.9-11.2-12.6-17.1-13.6-40.6-14-57.9-2.5 13.4 2.9 26.3 8.9 37.7 18 9 7.1 16.2 16.8 21.7 26.1 0 0-17.8 10.9-31 15.1s-42.3 7.9-42.3 7.9c72 12 132-36 132-36-6.5-13.4-15.8-4-23.7-3.4z"
    })]
  });
}, gz = function(i) {
  var n = i.title, a = m(i, Tv);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 0h513v342H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#DB7D00",
      d: "M141.7 154.7s.2 67.1 74.7 65.3l4.5 13.9h8.9s-7.4-41.1 60.1-41.5c0 0 0-27.6 27.6-27.6H359s-66-51.8 58.9-118l1.8-13.1s-129.9 71-198.9 57.2c0 0 10.7 42.5-10.8 42.5-10.8 0-9.7-8.1-32.3-8.1-18.7 0-17.3 19.7-26.3 19.5-8.9-.2-18.8-12.3-19.6-10.2-.7 2.1 9.9 20.1 9.9 20.1z"
    }), /* @__PURE__ */ d("g", {
      fill: "#006651",
      children: [/* @__PURE__ */ e("path", {
        d: "M237.2 308.1c6.9-5 13-6.6 22.4-8.3s19.4-4.4 24.6-5.8-17.7 6.6-23.5 8.3c-5.8 1.6-23.5 5.8-23.5 5.8zm37.9-14.7c-1.9-11.9 2.8-24.3 13.5-29.3 2.5 8.6-5.2 23.2-13.5 29.3zm18.2-6.2c-5.8-9.8 4-22.6 11.1-28.8 3.3 6-2.5 23.7-11.1 28.8zm16.9-7.6c-6.2-8.4 1.1-23.2 8.8-29 3.1 8.2.1 23.2-8.8 29zm16.9-10.6c-5.6-8-1.7-20.4 6.3-28.4 5.8 6.6.9 21-6.3 28.4zm13.5-10.7c-4.7-7.5 1.1-25.4 8.6-30.4 3.3 6.6.8 25.4-8.6 30.4zm10.8-2.8c-1.4-10.8 17.4-22.7 25.2-22.4-.9 8.9-8.9 18.6-25.2 22.4zm-10.5 12.2c8.8-9.1 26-9.1 32.1-7.2-1.7 5.3-21.9 16.9-32.1 7.2z"
      }), /* @__PURE__ */ e("path", {
        d: "M328.7 276.8c12.4-3.3 20.5-6.1 27.9 1.7-5.2 6.6-25.4 4.7-27.9-1.7zm-17.7 8c11.9-6.4 26.3 3 28.5 8.6-13.3 5.5-28.7-7.2-28.5-8.6zm-16.3 9.2c10.8-4.1 23.2 1.4 28.2 7.5-5.8 2.7-21 5.7-28.2-7.5zm-14.9 4.7c12.4-1.4 24.4 8 27 13.4-15.9 1.5-22-3.2-27-13.4zm-4 9.4c-6.9-5-13-6.6-22.4-8.3-9.4-1.7-19.4-4.4-24.6-5.8-5.3-1.4 17.7 6.6 23.5 8.3 5.8 1.6 23.5 5.8 23.5 5.8zm-37.9-14.7c1.9-11.9-2.8-24.3-13.5-29.3-2.5 8.6 5.2 23.2 13.5 29.3zm-18.2-6.2c5.8-9.8-4-22.6-11.1-28.8-3.3 6 2.5 23.7 11.1 28.8zm-16.9-7.6c6.2-8.4-1.1-23.2-8.8-29-3.1 8.2-.1 23.2 8.8 29zM185.9 269c5.6-8 1.7-20.4-6.3-28.4-5.8 6.6-.9 21 6.3 28.4zm-13.5-10.7c4.7-7.5-1.1-25.4-8.6-30.4-3.3 6.6-.8 25.4 8.6 30.4zm-10.8-2.8c1.4-10.8-17.4-22.7-25.2-22.4.9 8.9 8.9 18.6 25.2 22.4zm10.5 12.2c-8.8-9.1-26-9.1-32.1-7.2 1.7 5.3 21.9 16.9 32.1 7.2z"
      }), /* @__PURE__ */ e("path", {
        d: "M184.3 276.8c-12.4-3.3-20.5-6.1-27.9 1.7 5.2 6.6 25.4 4.7 27.9-1.7zm17.7 8c-11.9-6.4-26.3 3-28.5 8.6 13.3 5.5 28.7-7.2 28.5-8.6zm16.3 9.2c-10.8-4.1-23.2 1.4-28.2 7.5 5.8 2.7 21 5.7 28.2-7.5zm14.9 4.7c-12.4-1.4-24.4 8-27 13.4 15.9 1.5 22-3.2 27-13.4z"
      })]
    })]
  });
}, wz = function(i) {
  var n = i.title, a = m(i, Bv);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#11457e",
      d: "M0 85.337h512v341.326H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#d7141a",
      d: "M512 256v170.663H0L215.185 256z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M512 85.337V256H215.185L0 85.337z"
    })]
  });
}, zz = function(i) {
  var n = i.title, a = m(i, Lv);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M0 85.331h512v341.337H0z"
    }), /* @__PURE__ */ e("path", {
      d: "M0 85.331h512v113.775H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "M0 312.882h512v113.775H0z"
    })]
  });
}, xz = function(i) {
  var n = i.title, a = m(i, Ov);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 341.3",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#12ad2b",
      d: "M0 0h512v341.3H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#6ab2e7",
      d: "M512 0v166.7L0 170.8V0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M256 170.7 0 341.3V0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#d7141a",
      d: "m89.8 92.5 17 52.4H162l-44.6 32.5 17 52.4-44.6-32.4-44.6 32.4 17-52.4-44.6-32.5h55.2z"
    })]
  });
}, Mz = function(i) {
  var n = i.title, a = m(i, Rv);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#c60c30",
      d: "M0 0h513v342H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M190 0h-60v140H0v60h130v142h60V200h323v-60H190z"
    })]
  });
}, Fz = function(i) {
  var n = i.title, a = m(i, Iv);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 341.3",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#496E2D",
      d: "M0 0h512v341.3H0z"
    }), /* @__PURE__ */ e("path", {
      d: "M0 110.7v120h512v-120z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "M0 110.7h512v40H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 190.7h512v40H0z"
    }), /* @__PURE__ */ e("path", {
      d: "M196 0h120v341.3H196z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "M196 0h40v341.3h-40z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M274.7 0h40v341.3h-40z"
    }), /* @__PURE__ */ e("circle", {
      fill: "#D80027",
      cx: 256,
      cy: 170.7,
      r: 123.1
    }), /* @__PURE__ */ e("path", {
      d: "m256 58.6 4.6 14.2h15l-12.1 8.9 4.6 14.2-12.1-8.8-12.1 8.8 4.6-14.2-12.1-8.9h15zM190.1 80l12.2 8.8 12.1-8.8-4.6 14.3 12.1 8.8h-15l-4.6 14.2-4.7-14.2h-15l12.1-8.8zm-40.7 56h15l4.6-14.2 4.7 14.2h15l-12.2 8.8 4.7 14.3-12.2-8.8-12.1 8.8 4.6-14.3zm0 69.3 12.1-8.8-4.6-14.3L169 191l12.2-8.8-4.7 14.3 12.2 8.8h-15l-4.7 14.3-4.6-14.3zm40.7 56.1 4.6-14.3-12.1-8.8h15l4.7-14.3 4.6 14.3h15l-12.1 8.8 4.6 14.3-12.1-8.9zm65.9 21.4-4.6-14.3h-15l12.1-8.8-4.6-14.3 12.1 8.8 12.1-8.8-4.6 14.3 12.1 8.8h-15zm65.9-21.4-12.2-8.9-12.1 8.9 4.6-14.3-12.1-8.8h15l4.6-14.3 4.7 14.3h15l-12.1 8.8zm40.7-56.1h-15l-4.6 14.3-4.7-14.3h-15l12.2-8.8-4.7-14.3L343 191l12.1-8.8-4.6 14.3zm0-69.3-12.1 8.8 4.6 14.3-12.1-8.8-12.2 8.8 4.7-14.3-12.2-8.8h15l4.7-14.2 4.6 14.2zm-40.7-56-4.6 14.3 12.1 8.8h-15l-4.7 14.2-4.6-14.2h-15l12.1-8.8-4.6-14.3 12.1 8.8zM279.3 168.7c-11-21.1-14.5-25.1-14.5-25.1s.4-9.7.4-15.6c0-8.8-7.4-15.8-16.5-15.8-8.6 0-15.7 2.9-16.5 11-4.2.9-8.6 4.1-8.6 10.7 0 4.8 1 7.3 5.2 9.3 2.1-4.6 4.3-4.8 9.3-6.4.8.6 1.7 3 2.6 3.4l.3 1s-13.3 6.6-13.3 30.9c0 29.5 22 45.4 22 45.4l-1.8.3-1.9 7.1h22v-7.2l11 17.5c.3-.3 10.2-47.6.3-66.5z",
      fill: "#496E2D"
    })]
  });
}, yz = function(i) {
  var n = i.title, a = m(i, Pv);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 341.3",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 0h512v341.3H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M0 215.2h211.5v126.1H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M0 0h211.5v126.2H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M300.5 0H512v126.2H300.5z"
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M300.5 215.2H512v126.1H300.5z"
    }), /* @__PURE__ */ d("g", {
      stroke: "#FFF",
      strokeWidth: 5,
      strokeMiterlimit: 10,
      children: [/* @__PURE__ */ e("path", {
        fill: "#0052B4",
        d: "M256 130h-49.9v49.4s19.5 6 49.9 6V130z"
      }), /* @__PURE__ */ e("path", {
        fill: "#D80027",
        d: "M206.1 179.4v6c0 27.5 22.3 49.9 49.9 49.9v-49.9c-30.4 0-49.9-6-49.9-6z"
      }), /* @__PURE__ */ e("path", {
        fill: "#0052B4",
        d: "M256 235.3c27.5 0 49.9-22.3 49.9-49.9v-6s-19.5 6-49.9 6v49.9z"
      }), /* @__PURE__ */ e("path", {
        fill: "#D80027",
        d: "M256 130v55.4c30.4 0 49.9-6 49.9-6V130H256z"
      })]
    })]
  });
}, Hz = function(i) {
  var n = i.title, a = m(i, Vv);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 341.3",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#41662E",
      d: "M0 0h512v341.3H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M256 0h256v341.3H256z"
    }), /* @__PURE__ */ d("g", {
      fill: "#D80027",
      children: [/* @__PURE__ */ e("path", {
        d: "m341.5 105.3-29.4 40.4-47.5-15.4 29.4 40.4-29.4 40.4 47.5-15.4 29.4 40.4v-50l47.5-15.5-47.5-15.4z"
      }), /* @__PURE__ */ e("path", {
        d: "M309.9 276.7c-58.5 0-106-47.5-106-106s47.5-106 106-106c18.3 0 35.4 4.6 50.4 12.7-23.5-23-55.7-37.2-91.2-37.2-72 0-130.4 58.4-130.4 130.4S197.1 301 269.1 301c35.5 0 67.7-14.2 91.2-37.2-14.9 8.2-32.1 12.9-50.4 12.9z"
      })]
    })]
  });
}, _z = function(i) {
  var n = i.title, a = m(i, Nv);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 341.3",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "M0 0h512v341.3H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M0 170.7h512V256H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M0 256h512v85.3H0z"
    }), /* @__PURE__ */ e("circle", {
      fill: "#FFDA44",
      cx: 256,
      cy: 170.7,
      r: 59.4
    }), /* @__PURE__ */ e("path", {
      fill: "#4C1F00",
      d: "M369.2 79.9s-27.2-13.8-33.9-16c-6.7-2.2-49.1-13.2-49.1-7 0 10.3-13.5 12-15.5 12s-2-5.3-14.8-5.3-13.7 4.8-15.8 4.8c-2.2 0-14.5-1-14.5-11.5 0-5.2-42.9 4-49.1 7-6.1 3.1-33.9 16-33.9 16s45.8 2.7 53.9 6.2 43.8 16.5 43.8 16.5l-2.8 13.3h37.8l-3.8-13.3s35.1-12.7 43.8-16.5 53.9-6.2 53.9-6.2z"
    }), /* @__PURE__ */ e("path", {
      fill: "#57BA17",
      d: "M217.7 171.7c0 21.1 17.2 38.3 38.3 38.3 21.1 0 38.3-17.2 38.3-38.3v-11.5h-76.5v11.5z"
    }), /* @__PURE__ */ e("path", {
      fill: "#338AF3",
      d: "M256 110.5c-21.1 0-38.3 17.2-38.3 38.3v11.5h76.5v-11.5c.1-21.1-17.1-38.3-38.2-38.3z"
    })]
  });
}, bz = function(i) {
  var n = i.title, a = m(i, kv);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#111",
      d: "M0 85.337h512v341.326H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#368FD8",
      d: "M0 85.337h512v113.775H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 312.888h512v113.775H0z"
    })]
  });
}, Ez = function(i) {
  var n = i.title, a = m(i, $v);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 341.3",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 0h512v341.3H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M0 0h512v113.8H0z"
    }), /* @__PURE__ */ e("path", {
      d: "M0 227.6h512v113.8H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#C09300",
      d: "M220.3 204.4s0-58.4 4.5-64.7c3.1-4.3 16.8 5.2 22.7 4.5 0 0 4.2-7.5 4.5-12 .3-4.6-1.1-7.6-4.9-6.2 0 0-1.2-2.1.5-3.3 1.6-1.2 5.6.1 5.6.1s-.5-1 1.6-.9c2.9.2 7.2 1.4 7.4 5.6.2 3.1.3 7.7.4 8.7.7 6.8 2.7 8.7 2.7 8.7s18.4-9.2 22-5.2c3.3 3.8 4.5 64.7 4.5 64.7l-18.1-16.8 12.1 29.5s-14.4 2.4-28.9 2.4c-14.5 0-31.1-4.2-31.1-4.2l13.8-28.2-19.3 17.3z"
    })]
  });
}, Az = function(i) {
  var n = i.title, a = m(i, Wv);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 341.3",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 0h512v341.3H0z"
    }), /* @__PURE__ */ e("path", {
      d: "M0 0h512v113.8H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#428823",
      d: "M0 227.6h512v113.8H0z"
    }), /* @__PURE__ */ d("g", {
      fill: "#D80027",
      children: [/* @__PURE__ */ e("path", {
        d: "M256 170.7 0 341.3V0zm53.1 0c0-22.9 13.1-42.1 34.6-46.8-3.3-.7-6.7-1.1-10.3-1.1-26.4 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9c3.5 0 7-.4 10.3-1.1-21.5-4.8-34.6-23.9-34.6-46.8z"
      }), /* @__PURE__ */ e("path", {
        d: "m365 129.2 10.3 31.7h33.3l-27 19.6 10.3 31.7-26.9-19.6-27 19.6 10.3-31.7-27-19.6h33.4z"
      })]
    })]
  });
}, Sz = function(i) {
  var n = i.title, a = m(i, Uv);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 341.3",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#338AF3",
      d: "M0 0h512v341.3H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#56AF35",
      d: "M0 0h512v170.7H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "m0 341.3 512-170.7L0 0v341.3z"
    }), /* @__PURE__ */ d("g", {
      fill: "#ffc945",
      children: [/* @__PURE__ */ e("path", {
        d: "M134.7 231.5c33.6 0 60.8-27.2 60.8-60.8s-27.2-60.8-60.8-60.8-60.8 27.2-60.8 60.8 27.2 60.8 60.8 60.8zm0 24.3c-47 0-85.2-38.1-85.2-85.2s38.1-85.2 85.2-85.2 85.2 38.1 85.2 85.2-38.2 85.2-85.2 85.2z"
      }), /* @__PURE__ */ e("circle", {
        cx: 119.5,
        cy: 148.3,
        r: 17.5
      }), /* @__PURE__ */ e("circle", {
        cx: 148.9,
        cy: 158.5,
        r: 17.5
      }), /* @__PURE__ */ e("circle", {
        cx: 134.7,
        cy: 135.2,
        r: 17.5
      }), /* @__PURE__ */ e("circle", {
        cx: 119.5,
        cy: 172.7,
        r: 17.5
      }), /* @__PURE__ */ e("circle", {
        cx: 149.9,
        cy: 182.8,
        r: 17.5
      }), /* @__PURE__ */ e("circle", {
        cx: 122.5,
        cy: 198,
        r: 17.5
      }), /* @__PURE__ */ e("circle", {
        cx: 145.9,
        cy: 205.2,
        r: 17.5
      })]
    })]
  });
}, Dz = function(i) {
  var n = i.title, a = m(i, Gv);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 22.5 15",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 0h22.5v15H0V0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D03433",
      d: "M0 0h22.5v4H0V0zm0 11h22.5v4H0v-4z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FBCA46",
      d: "M0 4h22.5v7H0V4z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M7.8 7h1v.5h-1V7z"
    }), /* @__PURE__ */ e("path", {
      fill: "#A41517",
      d: "M7.2 8.5c0 .3.3.5.6.5s.6-.2.6-.5L8.5 7H7.1l.1 1.5zM6.6 7c0-.3.2-.5.4-.5h1.5c.3 0 .5.2.5.4V7l-.1 1.5c-.1.6-.5 1-1.1 1-.6 0-1-.4-1.1-1L6.6 7z"
    }), /* @__PURE__ */ e("path", {
      fill: "#A41517",
      d: "M6.8 7.5h2V8h-.5l-.5 1-.5-1h-.5v-.5zM5.3 6h1v3.5h-1V6zm4 0h1v3.5h-1V6zm-2.5-.5c0-.3.2-.5.5-.5h1c.3 0 .5.2.5.5v.2c0 .2-.1.3-.3.3H7c-.1 0-.2-.1-.2-.2v-.3z"
    })]
  });
}, Cz = function(i) {
  var n = i.title, a = m(i, Kv);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 22.5 15",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#20AA46",
      d: "M0 0h22.5v5H0V0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#E92F3B",
      d: "M0 10h22.5v5H0v-5z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FADF50",
      d: "M0 5h22.5v5H0V5z"
    }), /* @__PURE__ */ e("circle", {
      fill: "#205CCA",
      cx: 11.3,
      cy: 7.5,
      r: 5.2
    }), /* @__PURE__ */ d("g", {
      stroke: "#FFDB3D",
      fill: "none",
      children: [/* @__PURE__ */ e("path", {
        d: "m11.3 8.8-2.1 1.5.8-2.4-2-1.5h2.5l.8-2.3.8 2.3h2.6l-2.1 1.5.8 2.4-2.1-1.5zm-1-2.4h1.9M9.9 7.8l1.3 1m.8-2.6.7 1.8M10 7.9l.6-1.8M11 9l1.6-1.1",
        strokeWidth: 0.5
      }), /* @__PURE__ */ e("path", {
        d: "m8.7 3.9 1.1 1.6m4-1.7-1 1.6m-1.5 4.7V12M8.9 8.3 7.1 9m8.4 0-1.8-.7",
        strokeWidth: 0.25
      })]
    })]
  });
}, Tz = function(i) {
  var n = i.title, a = m(i, Yv);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 810 540",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#039",
      d: "M0 0h810v540H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FC0",
      d: "m404.951 59.865 6.735 20.718h21.894l-17.633 12.812 6.638 20.74-17.634-12.812-17.634 12.812 6.736-20.729-17.633-12.812h21.796zm-90 24 6.735 20.718h21.894l-17.633 12.812 6.638 20.74-17.634-12.812-17.634 12.812 6.736-20.729-17.633-12.812h21.796zm-66 66 6.735 20.718h21.894l-17.633 12.812 6.638 20.74-17.634-12.812-17.634 12.812 6.736-20.729-17.633-12.812h21.796zm-24 89.999 6.735 20.719h21.894l-17.633 12.813 6.638 20.74-17.634-12.813-17.634 12.813 6.736-20.731-17.633-12.811h21.796zm24 90.001 6.735 20.719h21.894l-17.633 12.811 6.638 20.74-17.634-12.811-17.634 12.811 6.736-20.729-17.633-12.812h21.796zm66 66 6.735 20.719h21.894l-17.633 12.811 6.638 20.74-17.634-12.811-17.634 12.811 6.736-20.729-17.633-12.812h21.796zm180-312 6.735 20.718h21.894l-17.633 12.812 6.637 20.74-17.633-12.812-17.635 12.812 6.737-20.729-17.633-12.812h21.795zm66 66 6.735 20.718h21.894l-17.633 12.812 6.637 20.74-17.633-12.812-17.635 12.812 6.737-20.729-17.633-12.812h21.795zm24 90 6.735 20.718h21.894l-17.633 12.813 6.638 20.74-17.634-12.813-17.634 12.813 6.736-20.731-17.633-12.811h21.796zm-24 90 6.735 20.719h21.894l-17.633 12.811 6.638 20.74-17.634-12.811-17.634 12.811 6.736-20.729-17.633-12.812h21.796zm-156 90 6.735 20.719h21.894l-17.633 12.811 6.638 20.74-17.634-12.811-17.634 12.811 6.736-20.729-17.633-12.812h21.796zm90-24.001 6.735 20.719h21.894l-17.633 12.812 6.639 20.74-17.635-12.812-17.633 12.812 6.735-20.73-17.633-12.811h21.797z"
    })]
  });
}, Bz = function(i) {
  var n = i.title, a = m(i, qv);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 341.3",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 0h512v341.3H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#2E52B2",
      d: "M512 129.3V212H203.7v129.3H121V212H0v-82.7h121V0h82.7v129.3z"
    })]
  });
}, Lz = function(i) {
  var n = i.title, a = m(i, jv);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 341.3",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#2E52B2",
      d: "M0 0h512v341.3H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M256 0v22.6l-46.1 30.7H256v64h-46.1L256 148v22.7h-22.6l-73.4-49v49H96v-49l-73.4 49H0V148l46.1-30.7H0v-64h46.1L0 22.6V0h22.6L96 48.9V0h64v48.9L233.4 0z"
    }), /* @__PURE__ */ d("g", {
      fill: "#D80027",
      children: [/* @__PURE__ */ e("path", {
        d: "M144 0h-32v69.3H0v32h112v69.4h32v-69.4h112v-32H144z"
      }), /* @__PURE__ */ e("path", {
        d: "M0 0v15.1l57.4 38.2H80zm256 0v15.1l-57.4 38.2H176z"
      }), /* @__PURE__ */ e("path", {
        d: "M0 0v15.1l57.4 38.2H80zm256 0v15.1l-57.4 38.2H176zM0 170.7v-15.1l57.4-38.3H80zm256 0v-15.1l-57.4-38.3H176z"
      })]
    }), /* @__PURE__ */ e("path", {
      fill: "#F3F3F3",
      d: "M307.1 127.1v92c0 61.6 80.5 80.5 80.5 80.5s80.4-19 80.4-80.6v-92l-80.5-23-80.4 23.1z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M468 132.8V98.3H307.1v34.5h69v69h-69v23h69V296c6.9 2.5 11.5 3.5 11.5 3.5s4.6-1.1 11.5-3.5v-71.2h69v-23h-69v-69H468z"
    })]
  });
}, Oz = function(i) {
  var n = i.title, a = m(i, Zv);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 341.3",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M0 0h512v341.3H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M256 0v30.6l-45.2 25.1H256V115h-59.1l59.1 32.8v22.9h-26.7l-73.5-40.9v40.9h-55.6v-48.6l-87.5 48.6H0v-30.6L45.2 115H0V55.7h59.1L0 22.8V0h26.7l73.5 40.8V0h55.6v48.6L243.3 0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M144 0h-32v69.3H0v32h112v69.4h32v-69.4h112v-32H144z"
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M155.8 115 256 170.7v-15.8L184.2 115z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M155.8 115 256 170.7v-15.8L184.2 115z"
    }), /* @__PURE__ */ e("path", {
      d: "M155.8 115 256 170.7v-15.8L184.2 115zm-84 0L0 154.9v15.8L100.2 115z",
      fill: "#D80027"
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M100.2 55.6 0 0v15.7l71.8 39.9z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M100.2 55.6 0 0v15.7l71.8 39.9z"
    }), /* @__PURE__ */ e("path", {
      d: "M100.2 55.6 0 0v15.7l71.8 39.9zm84 0L256 15.7V0L155.8 55.6z",
      fill: "#D80027"
    }), /* @__PURE__ */ e("path", {
      fill: "#1F8BDE",
      d: "M312.2 194.2v-90c0-8.5 6.5-15.3 15-15.3h120.5c8.3 0 15 6.8 15 15.3v90c0 75.2-75.2 105.3-75.2 105.3s-75.3-30.1-75.3-105.3z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M312.2 194.2v-90c0-8.5 6.5-15.3 15-15.3h120.5c8.3 0 15 6.8 15 15.3v90c0 75.2-75.2 105.3-75.2 105.3s-75.3-30.1-75.3-105.3zm79.6 86.3c7.9-4.5 15.9-10 23.2-16.7 20.5-18.5 32.6-41.4 32.6-69.7v-90c0-.3-120.4-.3-120.4-.3v90.3c0 28.3 12.1 51.2 32.6 69.7 8.3 7.5 17.6 13.9 27.6 19 1.4-.6 2.8-1.4 4.4-2.3z"
    }), /* @__PURE__ */ e("path", {
      fill: "#187536",
      d: "M347.1 193.4c-2.6-7.9 1.7-14.3 10.1-14.3h60.5c8.2 0 12.8 6.3 10.1 14.3l-5.5 16.5c-2.6 7.9-8.9 9.2-15.8 4 0 0 2.6-4.8-19.1-4.8-21.7 0-19.1 4.8-19.1 4.8-6.1 5.7-13.1 4-15.8-4 .1.1-5.4-16.5-5.4-16.5z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M357.4 179.1c8.1 1.6 17.8-15 30.1-15 13.1 0 21.8 17.1 30.1 15 7.4-1.8 15-22.2 15-30.1 0-16.6-20.2-30.1-45.1-30.1-24.9 0-45.1 13.5-45.1 30.1-.1 8.5 6.6 28.5 15 30.1zm-1.4 91.6c6.2.4 12.5-1.8 17.2-6.5l9-9c2.9-2.9 7.5-2.9 10.4 0l9 9c4.7 4.7 11 6.9 17.1 6.5 5.3-.3 32.5-33.5 25.7-32.6-4.6.6-9.1 2.8-12.7 6.3l-.1.1-9 9c-2.9 2.9-7.5 2.9-10.4 0l-9-9c-8.7-8.8-22.9-8.8-31.7-.1l-.1.1-9 9c-2.9 2.9-7.5 2.9-10.4 0l-9-9c-3.5-3.5-7.8-5.6-12.3-6.3-6.7-1.1 20.1 32.2 25.3 32.5zM322.1 210c2.9-2.9 7.5-2.9 10.4 0l9 9c8.8 8.7 22.9 8.7 31.7 0l9-9c2.9-2.9 7.5-2.9 10.4 0l9 9c8.8 8.7 22.9 8.7 31.7 0l9-9c2.9-2.9 7.5-2.9 10.4 0 0 0 5.5-14.8 2.5-15.9-7.9-2.9-17.2-1.2-23.5 5.2l-.1.1-9 9c-2.9 2.9-7.5 2.9-10.4 0l-9-9c-8.7-8.8-22.9-8.8-31.7-.1l-.1.1-9 9c-2.9 2.9-7.5 2.9-10.4 0l-9-9c-6.2-6.2-15.1-8-22.8-5.5-3.1 1.1 1.9 16.1 1.9 16.1z"
    })]
  });
}, Rz = function(i) {
  var n = i.title, a = m(i, Jv);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 341.3",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#338AF3",
      d: "M0 0h512v341.3H0z"
    }), /* @__PURE__ */ e("path", {
      d: "m256 37.9 10.1 31.2H299l-26.6 19.3 10.2 31.2-26.6-19.3-26.6 19.3 10.2-31.2L213 69.1h32.9zM123.2 170.7l31.2-10.2v-32.8l19.3 26.6 31.2-10.2-19.3 26.6 19.3 26.5-31.2-10.1-19.3 26.5v-32.8zM256 303.5l-10.1-31.2H213l26.6-19.3-10.2-31.3L256 241l26.6-19.3-10.2 31.3 26.6 19.3h-32.9zm132.8-132.8-31.2 10.1v32.8l-19.3-26.5-31.2 10.1 19.3-26.5-19.3-26.6 31.2 10.2 19.3-26.6v32.8z",
      fill: "#FFF"
    })]
  });
}, Iz = function(i) {
  var n = i.title, a = m(i, Xv);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 341.3",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 0h512v341.3H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#0F61A5",
      d: "M512 214.5H206.2v126.8h-87.8V214.5H0v-87.7h118.4V0h87.8v126.8H512V192z"
    }), /* @__PURE__ */ e("path", {
      fill: "#E50E3D",
      d: "M512 149.3V192H183.7v149.3H141V192H0v-42.7h141V0h42.7v149.3z"
    })]
  });
}, Pz = function(i) {
  var n = i.title, a = m(i, Qv);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 85.331h512v341.337H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M0 85.331h170.663v341.337H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M341.337 85.331H512v341.337H341.337z"
    })]
  });
}, Vz = function(i) {
  var n = i.title, a = m(i, tp);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "M0 85.337h512v341.326H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#6DA544",
      d: "M0 85.337h512v113.775H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M0 312.888h512v113.775H0z"
    })]
  });
}, Nz = function(i) {
  var n = i.title, a = m(i, ep);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 85.333h512V426.67H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M288 85.33h-64v138.666H0v64h224v138.666h64V287.996h224v-64H288z"
    }), /* @__PURE__ */ e("path", {
      d: "M393.785 315.358 512 381.034v-65.676zm-82.133 0L512 426.662v-31.474l-143.693-79.83zm146.982 111.304-146.982-81.664v81.664z",
      fill: "#0052B4"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M311.652 315.358 512 426.662v-31.474l-143.693-79.83z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M311.652 315.358 512 426.662v-31.474l-143.693-79.83z"
    }), /* @__PURE__ */ e("path", {
      d: "M90.341 315.356 0 365.546v-50.19zm110.007 14.154v97.151H25.491z",
      fill: "#0052B4"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M143.693 315.358 0 395.188v31.474l200.348-111.304z"
    }), /* @__PURE__ */ e("path", {
      d: "M118.215 196.634 0 130.958v65.676zm82.133 0L0 85.33v31.474l143.693 79.83zM53.366 85.33l146.982 81.664V85.33z",
      fill: "#0052B4"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M200.348 196.634 0 85.33v31.474l143.693 79.83z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M200.348 196.634 0 85.33v31.474l143.693 79.83z"
    }), /* @__PURE__ */ e("path", {
      d: "M421.659 196.636 512 146.446v50.19zm-110.007-14.154V85.331h174.857z",
      fill: "#0052B4"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M368.307 196.634 512 116.804V85.33L311.652 196.634z"
    })]
  });
}, kz = function(i) {
  var n = i.title, a = m(i, rp);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 341.3",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#c60a0a",
      d: "M0 0h512v341.3H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#3E8446",
      d: "M256 170.7 44.5 296.8V44.5z"
    }), /* @__PURE__ */ e("path", {
      d: "m256 170.7 211.5 126.1h-423zM467.5 44.5 256 170.7 44.5 44.5z",
      fill: "#FFDA44"
    }), /* @__PURE__ */ e("path", {
      fill: "#3E8446",
      d: "M467.5 44.5v252.3L256 170.7z"
    }), /* @__PURE__ */ e("path", {
      d: "m256 10.4 3.3 10.2H270l-8.6 6.3 3.3 10.2-8.7-6.3-8.7 6.3 3.3-10.2-8.6-6.3h10.7zm-85.9 0 3.3 10.2h10.7l-8.6 6.3 3.3 10.2-8.7-6.3-8.7 6.3 3.3-10.2-8.6-6.3h10.7zm171.8 0 3.3 10.2H356l-8.7 6.3 3.3 10.2-8.7-6.3-8.7 6.3 3.3-10.2-8.6-6.3h10.7zM256 304.2l3.3 10.2H270l-8.6 6.3 3.3 10.2-8.7-6.3-8.7 6.3 3.3-10.2-8.6-6.3h10.7zm-85.9 0 3.3 10.2h10.7l-8.6 6.3 3.3 10.2-8.7-6.3-8.7 6.3 3.3-10.2-8.6-6.3h10.7zm171.8 0 3.3 10.2H356l-8.7 6.3 3.3 10.2-8.7-6.3-8.7 6.3 3.3-10.2-8.6-6.3h10.7z",
      fill: "#FFDA44"
    }), /* @__PURE__ */ e("circle", {
      fill: "#c60a0a",
      cx: 244.5,
      cy: 170.7,
      r: 76.2
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "m244.5 110.1 13.6 41.8h44l-35.6 25.8 13.6 41.8-35.6-25.8-35.5 25.8 13.6-41.8-35.6-25.8h44zm-136.8 57.7c4.4 6.9 2.3 16.1-4.6 20.5s-16.1 2.3-20.5-4.6c-7.9-12.5-3.3-33-3.3-33s20.4 4.6 28.4 17.1z"
    }), /* @__PURE__ */ e("circle", {
      fill: "#A2001D",
      cx: 99.1,
      cy: 182.1,
      r: 7.4
    })]
  });
}, $z = function(i) {
  var n = i.title, a = m(i, np);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 22.5 15",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M.8 0h21v15H.8V0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#eb000e",
      d: "M9.8 6H0v3h9.8v6h3V9h9.8V6h-9.8V0h-3v6z"
    }), /* @__PURE__ */ e("path", {
      fill: "#eb000e",
      d: "m17.3 2.7-.2-1.2h1l-.2 1.2 1.2-.2v1l-1.2-.2.2 1.2h-1l.2-1.2-1.2.2v-1l1.2.2zm-12.7 0-.2-1.2h1l-.2 1.2 1.2-.2v1l-1.2-.2.2 1.2h-1l.2-1.2-1.2.2v-1l1.2.2zm0 9-.2-1.2h1l-.2 1.2 1.2-.2v1l-1.2-.2.2 1.2h-1l.2-1.2-1.2.2v-1l1.2.2zm12.7 0-.2-1.2h1l-.2 1.2 1.2-.2v1l-1.2-.2.2 1.2h-1l.2-1.2-1.2.2v-1l1.2.2z"
    })]
  });
}, Wz = function(i) {
  var n = i.title, a = m(i, ip);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 90 60",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FDEB01",
      d: "m0 0 90 60H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#58A846",
      d: "M90 0v60L0 0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#ED3D24",
      d: "m50.7 33.3 9.3-6.7H48.5L45 15.7l-3.5 10.9H30l9.3 6.7-3.6 11 9.3-6.7 9.3 6.7z"
    })]
  });
}, Uz = function(i) {
  var n = i.title, a = m(i, lp);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 0h513v342H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M308 0H204v118.7H0v104h204V342h104V222.7h205v-104H308z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "m368.6 188 26 17.3V136l-26 17.3h-95.3V58.1l17.3-26h-69.2l17.3 26v95.2h-95.3l-26-17.3v69.3l26-17.3h95.3v95.2l-17.3 26h69.2l-17.3-26V188z"
    })]
  });
}, Gz = function(i) {
  var n = i.title, a = m(i, ap);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "M0 85.337h512v341.326H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M0 85.337h512v113.775H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#496E2D",
      d: "M0 312.888h512v113.775H0z"
    }), /* @__PURE__ */ e("path", {
      d: "m255.883 199.111 14.119 43.458 40.366 3.2-36.969 26.861 19.453 40.259-36.969-26.859-36.97 26.859 14.123-43.459-36.969-26.861h45.696z"
    })]
  });
}, Kz = function(i) {
  var n = i.title, a = m(i, op);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 0h513v342H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M0 230h513v112H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      stroke: "#000",
      strokeMiterlimit: 10,
      d: "M363.1 131.8V99.1H374V77.3h-21.9v10.9h-21.8V77.3h-21.8v21.8h10.9v32.7h-21.8V55.5h10.9V33.7h-21.8v10.9h-10.9V33.7H254v10.9h-10.9V33.7h-21.8v21.8h10.9v76.3h-21.8V99.1h10.9V77.3h-21.8v10.9h-21.8V77.3h-21.8v21.8h10.9v32.7H145V219h239.9v-87.2z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      stroke: "#000",
      strokeMiterlimit: 10,
      d: "m264.9 235.5-24.2 18.2 19.1 14.3v31.3h-23.2v9h23v7.9h-23v9.3H270V268l19.1-14.3-24.2-18.2zm0 25.3-10.1-7.1 10.1-7.1 10.1 7.1-10.1 7.1z"
    }), /* @__PURE__ */ e("path", {
      d: "M239.6 209.7v-27.9s.1-22.3 25-22.3c24.8 0 25.7 22 25.7 22v28.2h-50.7zm-69.1 0v-24.3s.1-18.7 19.6-18.7 20.2 18.4 20.2 18.4v24.5h-39.8z"
    }), /* @__PURE__ */ e("path", {
      d: "M169.1 209.7v-24.3s.1-18.7 19.6-18.7 20.2 18.4 20.2 18.4v24.5h-39.8zm151.8 0v-24.3s.1-18.7 19.6-18.7 20.2 18.4 20.2 18.4v24.5h-39.8zm8.4-77.7v-15.7s.1-12.1 11.3-12.1c11.3 0 11.7 11.9 11.7 11.9V132h-23zm-78.8 0v-23.7s.1-18.3 14.3-18.3c14.2 0 14.7 18 14.7 18v24h-29zm-73 0v-15.7s.1-12.1 11.3-12.1 11.7 11.9 11.7 11.9V132h-23z"
    })]
  });
}, Yz = function(i) {
  var n = i.title, a = m(i, sp);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M0 0h513v342H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M513 0v171H0V0z"
    }), /* @__PURE__ */ e("circle", {
      fill: "#FFF",
      cx: 185.8,
      cy: 171.2,
      r: 117.8
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M68 171c0-65.1 52.8-117.8 117.8-117.8 65.1 0 117.8 52.8 117.8 117.8"
    })]
  });
}, qz = function(i) {
  var n = i.title, a = m(i, cp);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 85.337h512v341.326H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#1a7e25",
      d: "M0 322.783h512v103.88H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#cf0d19",
      d: "M0 85.337h512v104.515H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M0 210.877h512v89.656H0z"
    })]
  });
}, jz = function(i) {
  var n = i.title, a = m(i, hp);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "M0 0h512v342H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#6DA544",
      d: "M342 0h171v342H342z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M0 0h171v342H0z"
    })]
  });
}, Zz = function(i) {
  var n = i.title, a = m(i, up);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 85.331h512v341.337H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M0 85.331h170.663v341.337H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M341.337 85.331H512v341.337H341.337z"
    })]
  });
}, Jz = function(i) {
  var n = i.title, a = m(i, fp);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 0h513v342H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#6DA544",
      d: "M0 0h513v113.8H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M0 227.6h513V342H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#0070C8",
      d: "M126 170.7 0 341.3V0z"
    }), /* @__PURE__ */ e("path", {
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: 10,
      d: "M233.8 139.4v40.4c0 35.6 35.6 35.6 35.6 35.6s35.6 0 35.6-35.6v-40.4h-71.2z"
    }), /* @__PURE__ */ e("path", {
      fill: "#786145",
      d: "M264.5 179.8h9.8l4 25.8h-17.8z"
    }), /* @__PURE__ */ e("path", {
      fill: "#6DA544",
      d: "M287.2 162c0-9.8-8-14.8-17.8-14.8s-17.8 5-17.8 14.8c-4.9 0-8.9 4-8.9 8.9s4 8.9 8.9 8.9h35.6c4.9 0 8.9-4 8.9-8.9s-4-8.9-8.9-8.9z"
    }), /* @__PURE__ */ e("path", {
      d: "m230.7 120 1.9 3.3h3.8l-1.9 3.3 1.9 3.2h-3.8l-1.9 3.3-1.9-3.3H225l1.9-3.2-1.9-3.3h3.8zm15.3 0 1.9 3.3h3.7l-1.9 3.3 1.9 3.2h-3.7l-1.9 3.3-1.9-3.3h-3.8l1.9-3.2-1.9-3.3h3.8zm15.3 0 1.9 3.3h3.7l-1.9 3.3 1.9 3.2h-3.7l-1.9 3.3-1.9-3.3h-3.8l1.9-3.2-1.9-3.3h3.8zm15.8 0 1.9 3.3h3.8l-1.9 3.3 1.9 3.2H279l-1.9 3.3-1.9-3.3h-3.7l1.8-3.2-1.8-3.3h3.7zm16 0 1.9 3.3h3.8l-1.9 3.3 1.9 3.2H295l-1.9 3.3-1.9-3.3h-3.7l1.8-3.2-1.8-3.3h3.7zm15 0 1.9 3.3h3.7l-1.9 3.3 1.9 3.2H310l-1.9 3.3-1.9-3.3h-3.8l1.9-3.2-1.9-3.3h3.8z",
      fill: "#FFDA00",
      stroke: "#000",
      strokeMiterlimit: 10
    })]
  });
}, Xz = function(i) {
  var n = i.title, a = m(i, dp);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 0h513v342H0z"
    }), /* @__PURE__ */ d("g", {
      fill: "#0d5eaf",
      children: [/* @__PURE__ */ e("path", {
        d: "M0 0h513v38H0zm0 76h513v38H0zm0 76h513v38H0zm0 76h513v38H0zm0 76h513v38H0z"
      }), /* @__PURE__ */ e("path", {
        d: "M0 0h190v190H0z"
      })]
    }), /* @__PURE__ */ d("g", {
      fill: "#FFF",
      children: [/* @__PURE__ */ e("path", {
        d: "M0 76h190v38H0z"
      }), /* @__PURE__ */ e("path", {
        d: "M76 0h38v190H76z"
      })]
    })]
  });
}, Qz = function(i) {
  var n = i.title, a = m(i, vp);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 341.3",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M0 0h512v341.3H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M256 0v117.4h-46.1l46.1 30.7v22.6h-22.6L160 121.8v48.9H96v-48.9l-73.4 48.9H0v-22.6l46.1-30.7H0v-64h46.1L0 22.7V0h22.6L96 48.9V0h64v48.9L233.4 0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M144 0h-32v69.4H0v32h112v69.3h32v-69.3h112v-32H144z"
    }), /* @__PURE__ */ e("path", {
      fill: "#2E52B2",
      d: "M256 22.7v30.7h-46.1z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M0 170.7v-11l62.5-42.3h22.6L7.3 170.7zM7.3.1l77.8 53.2H62.5L0 11.1V.1zM256 .1v11l-62.5 42.3h-22.6L248.7.1zm-7.3 170.6-77.8-53.3h22.6l62.5 42.3v11z"
    }), /* @__PURE__ */ e("ellipse", {
      fill: "#FFF",
      cx: 443.4,
      cy: 233.6,
      rx: 29,
      ry: 43.5
    }), /* @__PURE__ */ e("ellipse", {
      fill: "#FFCE00",
      cx: 406.9,
      cy: 317.7,
      rx: 22,
      ry: 9.3
    }), /* @__PURE__ */ e("ellipse", {
      fill: "#FFCE00",
      cx: 364,
      cy: 317.7,
      rx: 22,
      ry: 9.3
    }), /* @__PURE__ */ e("path", {
      fill: "#39B200",
      d: "m342 190.1 43.4 86.9 43.5-86.9z"
    }), /* @__PURE__ */ e("ellipse", {
      fill: "#9B9B9B",
      cx: 327.5,
      cy: 233.6,
      rx: 29,
      ry: 43.5
    }), /* @__PURE__ */ e("path", {
      fill: "#757575",
      d: "m371 175.6-14.5 14.5h57.9l-14.5-14.5 14.5-43.5s-13-29-29-29-29 29-29 29l14.6 43.5z"
    }), /* @__PURE__ */ e("circle", {
      fill: "#C6B56F",
      cx: 385.4,
      cy: 67,
      r: 29
    }), /* @__PURE__ */ e("circle", {
      fill: "#A54A00",
      cx: 386,
      cy: 88.7,
      r: 29
    }), /* @__PURE__ */ e("circle", {
      fill: "#FFF",
      cx: 443.4,
      cy: 117.7,
      r: 29
    }), /* @__PURE__ */ e("circle", {
      fill: "#0049FF",
      cx: 342.2,
      cy: 146.7,
      r: 29
    }), /* @__PURE__ */ e("circle", {
      fill: "#0041F9",
      cx: 429.8,
      cy: 146.7,
      r: 29
    }), /* @__PURE__ */ e("circle", {
      fill: "#F7D71E",
      cx: 386,
      cy: 233.6,
      r: 29
    }), /* @__PURE__ */ e("circle", {
      fill: "#CEC851",
      cx: 457.9,
      cy: 190.1,
      r: 29
    }), /* @__PURE__ */ e("circle", {
      fill: "#FFF",
      cx: 385.4,
      cy: 289.5,
      r: 29
    }), /* @__PURE__ */ e("path", {
      fill: "#7C0B29",
      d: "m371 135.7 14.5-3.5 14.5 3.5c0 7.5-14.5 11-14.5 11s-14.5-3.5-14.5-11z"
    }), /* @__PURE__ */ e("circle", {
      fill: "#FFF",
      cx: 327.5,
      cy: 117.4,
      r: 29
    })]
  });
}, tx = function(i) {
  var n = i.title, a = m(i, pp);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 0h513v342H0z"
    }), /* @__PURE__ */ e("path", {
      d: "M0 0h171v342H0zm342 0h171v342H342z",
      fill: "#338AF3"
    }), /* @__PURE__ */ e("circle", {
      fill: "#DCC26D",
      cx: 256,
      cy: 155.8,
      r: 25.5
    }), /* @__PURE__ */ e("path", {
      fill: "#628A40",
      d: "M194.2 155.9c0 22.1 11.8 42.5 30.8 53.5 5.9 3.4 13.5 1.4 16.9-4.5 3.4-5.9 1.4-13.5-4.5-16.9-11.5-6.6-18.5-18.9-18.5-32.1 0-6.8-5.5-12.4-12.4-12.4s-12.3 5.5-12.3 12.4zm95.1 52.1c17.8-11.4 28.6-31 28.5-52.1 0-6.8-5.5-12.4-12.4-12.4-6.8 0-12.4 5.5-12.4 12.4 0 12.7-6.5 24.5-17.1 31.3-5.8 3.6-7.7 11.2-4.1 17 3.6 5.8 11.2 7.7 17 4.1.2-.1.3-.2.5-.3z"
    })]
  });
}, ex = function(i) {
  var n = i.title, a = m(i, mp);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M0 0h512v341.3H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M11.1 11.1h489.7v319.1H11.1z"
    }), /* @__PURE__ */ e("path", {
      fill: "#7DBEF1",
      d: "M256 285.3s76.4-51.3 76.4-114.6S256 56 256 56s-76.4 51.3-76.4 114.6S256 285.3 256 285.3z"
    }), /* @__PURE__ */ e("path", {
      fill: "#1C8AE6",
      d: "M179.8 180.7h152.6l-29.3 64.9h-95.2z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF042",
      d: "M192.3 205.9s40.5 38.2 51 38.2c12.4 0 12.6-18.4 25.5-25.5 20.2-11.1 51-12.7 51-12.7L297 248.7l-41 36.6-46.8-39.7-16.9-39.7z"
    }), /* @__PURE__ */ e("path", {
      fill: "#259C7B",
      d: "m256 157.5-22.5 15.6 7.9-26.2-21.8-16.5 27.4-.5 9-25.9 9 25.9 27.4.5-21.8 16.6 7.9 26.2-22.5-15.7z"
    }), /* @__PURE__ */ e("path", {
      fill: "#8E5715",
      d: "M249.7 144.6c-.9 9.2-1.5 18.4-1.7 27.6-.3 11.9.3 20.7 2 26 2.2 6.6 7.2 12.9 14.2 18.9 5.3 4.6 10.6 8.1 14.2 10.1 3.1 1.7 7 .6 8.7-2.4 1.7-3.1.6-7-2.4-8.7-4.3-2.5-8.4-5.4-12.2-8.7-5.4-4.6-9.1-9.2-10.4-13.3-1.1-3.4-1.6-11.3-1.4-21.7.2-8.9.8-17.8 1.7-26.6.4-3.5-2.2-6.6-5.7-7-3.6-.3-6.7 2.3-7 5.8z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "m217.8 170.7 25.5 38.2h-25.5v-38.2z"
    }), /* @__PURE__ */ e("path", {
      fill: "none",
      stroke: "#D80027",
      strokeWidth: 12,
      strokeMiterlimit: 10,
      d: "M256 285.3s76.4-51.3 76.4-114.6S256 56 256 56s-76.4 51.3-76.4 114.6S256 285.3 256 285.3z"
    })]
  });
}, rx = function(i) {
  var n = i.title, a = m(i, gp);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#6DA544",
      d: "M0 85.331h512v341.337H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "M0 85.331h512v170.663H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M0 85.331h181.793v341.337H0z"
    }), /* @__PURE__ */ e("path", {
      d: "m98.32 195.127 15.107 46.497h48.894l-39.555 28.74 15.108 46.498-39.554-28.737-39.556 28.737 15.111-46.498-39.554-28.74h48.891z"
    })]
  });
}, nx = function(i) {
  var n = i.title, a = m(i, wp);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 900 600",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#009E49",
      d: "M0 0h900v600H0V0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "m0 0 947 300L0 600V0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFD00D",
      d: "M0 26.1 870 300 0 573.9V26.1z"
    }), /* @__PURE__ */ e("path", {
      fill: "#2D2D2D",
      d: "m0 0 450 300L0 600V0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D3132F",
      d: "m0 35 397.5 265L0 565V35z"
    })]
  });
}, ix = function(i) {
  var n = i.title, a = m(i, zp);
  return /* @__PURE__ */ d("svg", {
    viewBox: "0 0.5 21 14",
    xmlns: "http://www.w3.org/2000/svg",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ d("g", {
      fill: "none",
      fillRule: "evenodd",
      children: [/* @__PURE__ */ e("path", {
        fill: "#FFF",
        d: "M0 0h21v15H0z"
      }), /* @__PURE__ */ e("path", {
        fill: "#ee1c25",
        d: "M0 0h21v15H0z"
      }), /* @__PURE__ */ e("path", {
        d: "M12 7.19c-.798-.5-1 .409-1 0 0-.828.895-1.5 2-1.5s2 .672 2 1.5c-.949 0-1.044.5-1.5.5-.56 0-.702 0-1.5-.5zM13.25 7a.25.25 0 1 0 0-.5.25.25 0 0 0 0 .5zm-1.81 1.962c.228-.913-.698-.824-.31-.95.788-.257 1.703.387 2.045 1.438.341 1.05-.021 2.11-.809 2.366-.293-.903-.798-.838-.939-1.272-.173-.533-.217-.668.012-1.582zm.566 1.13a.25.25 0 1 0 .476-.154.25.25 0 0 0-.476.154zM9.58 8.977c.94-.065.57-.919.81-.588.486.67.157 1.74-.737 2.389-.894.65-2.013.632-2.5-.038.768-.558.55-1.018.92-1.286.453-.33.568-.413 1.507-.477zm-.899.888a.25.25 0 1 0 .294.405.25.25 0 0 0-.294-.405zm.312-2.652c.351.874 1.049.258.809.588-.487.67-1.606.687-2.5.038-.894-.65-1.223-1.719-.736-2.39.767.559 1.138.21 1.507.478.453.33.568.413.92 1.286zm-1.124-.58a.25.25 0 1 0-.293.404.25.25 0 0 0 .293-.404zm2.619-.524c-.722.605.08 1.078-.309.951-.788-.256-1.15-1.315-.809-2.365.342-1.05 1.257-1.695 2.045-1.439-.293.903.153 1.147.012 1.581-.173.533-.217.668-.939 1.272zm.205-1.247a.25.25 0 1 0-.475-.155.25.25 0 0 0 .475.155z",
        fill: "#FFF"
      })]
    })]
  });
}, lx = function(i) {
  var n = i.title, a = m(i, xp);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M0 85.333h512V426.67H0z"
    }), /* @__PURE__ */ d("g", {
      fill: "#FFF",
      children: [/* @__PURE__ */ e("path", {
        d: "M223.397 255.996c.273-.304.543-.609.813-.916-.27.308-.546.61-.82.916h.007zm-34.18 41.927 10.958 22.913 24.747-5.718-11.083 22.853 19.9 15.781-24.776 5.585.069 25.398-19.815-15.89-19.814 15.89.069-25.398-24.776-5.585 19.9-15.781-11.083-22.853 24.746 5.718zm197.859 28.464 5.227 10.929 11.803-2.728-5.286 10.9 9.492 7.528-11.818 2.663.032 12.114-9.45-7.578-9.45 7.578.032-12.114-11.817-2.663 9.491-7.528-5.285-10.9 11.803 2.728zm-48.623-115.939 5.227 10.93 11.803-2.729-5.286 10.901 9.491 7.528-11.817 2.663.032 12.115-9.45-7.58-9.451 7.58.033-12.115-11.818-2.663 9.491-7.528-5.284-10.901 11.802 2.729zm48.623-66.25 5.227 10.93 11.803-2.73-5.286 10.902 9.491 7.527-11.817 2.664.032 12.114-9.45-7.58-9.45 7.58.032-12.114-11.817-2.664 9.491-7.527-5.285-10.902 11.803 2.73zm42.471 49.688 5.227 10.929 11.802-2.728-5.284 10.9 9.491 7.527-11.818 2.664.033 12.114-9.451-7.578-9.45 7.578.032-12.114-11.817-2.664 9.491-7.527-5.286-10.9 11.803 2.728zm-30.368 57.97 4.11 12.652h13.304l-10.763 7.82 4.112 12.652-10.763-7.819-10.765 7.819 4.112-12.652-10.763-7.82h13.304z"
      }), /* @__PURE__ */ e("path", {
        d: "M256 85.333v30.553l-45.167 25.099H256v59.359h-59.103L256 233.179v22.817h-26.68l-73.494-40.826v40.826h-55.652v-48.573l-87.43 48.573H0v-30.553l45.167-25.099H0v-59.359h59.103L0 108.139V85.333h26.68l73.494 40.827V85.333h55.652v48.573l87.43-48.573z"
      })]
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M144 85.33h-32v69.332H0v32h112v69.334h32v-69.334h112v-32H144z"
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M155.826 200.344 256 255.996v-15.737l-71.847-39.915z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M155.826 200.344 256 255.996v-15.737l-71.847-39.915z"
    }), /* @__PURE__ */ e("path", {
      d: "M155.826 200.344 256 255.996v-15.737l-71.847-39.915zm-83.98 0L0 240.259v15.737l100.174-55.652z",
      fill: "#D80027"
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M100.174 140.982 0 85.33v15.737l71.847 39.915z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M100.174 140.982 0 85.33v15.737l71.847 39.915z"
    }), /* @__PURE__ */ e("path", {
      d: "M100.174 140.982 0 85.33v15.737l71.847 39.915zm83.98 0L256 101.067V85.33l-100.174 55.652z",
      fill: "#D80027"
    })]
  });
}, ax = function(i) {
  var n = i.title, a = m(i, Mp);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 0h513v342H0z"
    }), /* @__PURE__ */ e("path", {
      d: "M0 0h513v114H0zm0 228h513v114H0zm203.5-110.1 6.7 16.6 17.6 1-14 10.9 4.7 17.7-15-9.9-15 9.9 4.7-17.7-14-10.9 17.6-1zm105 0 6.7 16.6 17.6 1-14 10.9 4.7 17.7-15-9.9-15 9.9 4.7-17.7-14-10.9 17.6-1zM256 147.6l6.7 16.6 17.6 1-14 10.9 4.7 17.7-15-9.9-15 9.9 4.7-17.7-14-10.9 17.6-1zm-52.5 29.7 6.7 16.6 17.6 1-14 10.9 4.7 17.6-15-9.9-15 9.9 4.7-17.6-14-10.9 17.6-1zm105 0 6.7 16.6 17.6 1-14 10.9 4.7 17.6-15-9.9-15 9.9 4.7-17.6-14-10.9 17.6-1z",
      fill: "#338AF3"
    })]
  });
}, ox = function(i) {
  var n = i.title, a = m(i, Fp);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 0h513v342H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M0 0h513v114H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M0 228h513v114H0z"
    }), /* @__PURE__ */ e("path", {
      d: "M309.3 113.2v-44l17.5-14.4 17.7 14.4v44zm-105.6 0v-44l-17.3-14.4-17.9 14.4v44zm35.2 0v-44l17.6-14.4 17.6 14.4v44z",
      fill: "#338AF3"
    }), /* @__PURE__ */ e("path", {
      d: "M309.3 113.2h-35.2v-44l17.5-14.4 17.7 14.4zm-70.4 0h-35.2v-44l17.5-14.4 17.7 14.4z",
      fill: "#0052B4"
    }), /* @__PURE__ */ e("path", {
      stroke: "#D80027",
      fill: "#FFF",
      d: "M168.5 113.2v101.9c0 24.3 14.4 46.2 35.4 59.4 21.3 13.4 42.1 14.7 52.6 14.7s31.4-1.7 52.6-14.8c21-13 35.4-35.1 35.4-59.3V113.2h-176z"
    }), /* @__PURE__ */ e("path", {
      d: "M168.5 113.2h35.2v35.2h-35.2zm70.4 0h35.2v35.2h-35.2zm70.4 0h35.2v35.2h-35.2zm-105.6 35.2h35.2v35.2h-35.2zm70.4 0h35.2v35.2h-35.2zm-105.6 35.2h35.2v35.2h-35.2zm35.2 35.2h35.2V254h-35.2zm35.2-35.2h35.2v35.2h-35.2zm70.4 0h35.2v35.2h-35.2zm-35.2 35.2h35.2V254h-35.2zm35.2 55.5c8.6-5.4 16.2-12.3 22-20.3h-22v20.3zM181.7 254c5.8 8 13.3 14.9 22 20.4V254h-22zm57.2 0v33.7c7.2 1.2 13.3 1.5 17.6 1.5 4.3 0 10.4-.3 17.6-1.6V254h-35.2z",
      fill: "#D80027"
    })]
  });
}, sx = function(i) {
  var n = i.title, a = m(i, yp);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#A2001D",
      d: "M0 0h513v172H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M0 172h513v172H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "m381.4 251.5-110.7-13.8-110.8 13.8V85.4h221.5z"
    }), /* @__PURE__ */ e("circle", {
      fill: "#0052B4",
      cx: 270.7,
      cy: 182.3,
      r: 55.4
    }), /* @__PURE__ */ e("circle", {
      fill: "#A2001D",
      cx: 270.7,
      cy: 182.3,
      r: 27.7
    }), /* @__PURE__ */ e("path", {
      fill: "#6DA544",
      d: "M229.1 113.1h83.1l-41.5 41.5z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "M256.8 140.8h27.7v83h-27.7z"
    }), /* @__PURE__ */ e("path", {
      fill: "#6DA544",
      d: "M314.9 215.5h-88.5l-66.5 36h221.5z"
    })]
  });
}, cx = function(i) {
  var n = i.title, a = m(i, Hp);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 85.337h512v341.326H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M0 85.337h512v113.775H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#6DA544",
      d: "M0 312.888h512v113.775H0z"
    })]
  });
}, hx = function(i) {
  var n = i.title, a = m(i, _p);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 300 200",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#fc0",
      d: "M0 0h300v200H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#0768a9",
      d: "M0 0h200v200H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#fff",
      d: "M0 0h100v200H0z"
    })]
  });
}, ux = function(i) {
  var n = i.title, a = m(i, bp);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 85.333h512v341.333H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#E00",
      d: "M0 85.333h512V256H0z"
    })]
  });
}, fx = function(i) {
  var n = i.title, a = m(i, Ep);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 85.331h512v341.326H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#6DA544",
      d: "M0 85.331h170.663v341.337H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FF9811",
      d: "M341.337 85.331H512v341.337H341.337z"
    })]
  });
}, dx = function(i) {
  var n = i.title, a = m(i, Ap);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 0h513v342H0z"
    }), /* @__PURE__ */ e("path", {
      d: "M340.6 122.4h-56.1l-28-48.6-28 48.6h-56.1l28 48.6-28 48.6h56.1l28 48.6 28-48.6h56.1l-28-48.6 28-48.6zM293.2 171 276 204.2h-38.9L219.8 171l17.2-33.2h38.9l17.3 33.2zm-36.7-71.8 11.9 23.3h-23.9l12-23.3zm-58.3 38.6h23.9l-10.8 21-13.1-21zm0 66.4 13-22.1 11.9 22.1h-24.9zm58.3 37.5-11.9-22.1h23.9l-12 22.1zm59.4-37.5h-25l11.9-22.1 13.1 22.1zm-26.1-66.4h26.1l-13 22.1-13.1-22.1zM0 21.3h512V64H0zm0 256h512V320H0z",
      fill: "#2E52B2"
    })]
  });
}, vx = function(i) {
  var n = i.title, a = m(i, Sp);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#E52D42",
      d: "M0 0h513v342H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M393.3 68.2h-45.8l-33.8 80.2-34.4-22.9s-24.7-59.1-34.4-68.2c-9.7-9.7-18.7-.6-48.9 7.8-29.6 8.4-30.8 18.7-42.2 18.7-4.8 0-19.9-17.5-27.7-22.3-12.1-7.8-16.9-4.2-13.9 7.2 1.2 4.8 10.9 10.9 16.9 19.9 7.8 11.5 12.7 25.9 12.7 25.9s10.9-10.3 16.9-12.1c9-2.4 19.3 1.8 31.4 0 15.1-2.4 31.4-10.9 31.4-10.9l4.2 43.4s-54.3 50.7-49.5 70.6 56.1 44.6 68.2 62.7c12.1 17.5-7.2 24.1-7.2 32.6s-1.8 19.9 7.2 16.3c9-3.6 10.3-18.1 18.7-31.4 6-9 10.3-13.9 11.5-17.5 1.8-9-23.5-32-37.4-48.9-6.6-7.8-19.9-18.7-19.9-18.7l39.2-29.6s67.6 27.7 82.6 18.7c15.1-9 19.3-98.3 19.3-98.3l47-11.5-12.1-11.7z"
    }), /* @__PURE__ */ e("path", {
      fill: "#F8DD4E",
      d: "M279.3 262.4c-6 0-11.5-4.8-11.5-11.5s4.8-11.5 11.5-11.5c6 0 11.5 4.8 11.5 11.5s-5.5 11.5-11.5 11.5zm45.8-182.8c-6 0-11.5-4.8-11.5-11.5s4.8-11.5 11.5-11.5c6 0 11.5 4.8 11.5 11.5s-5.5 11.5-11.5 11.5zm0 91.1c-6 0-11.5-4.8-11.5-11.5 0-6 4.8-11.5 11.5-11.5 6 0 11.5 4.8 11.5 11.5-.6 6.7-5.5 11.5-11.5 11.5zm-136.9 45.8c-6 0-11.5-4.8-11.5-11.5 0-6 4.8-11.5 11.5-11.5 6.6 0 11.5 4.8 11.5 11.5s-5.5 11.5-11.5 11.5zm45.2-136.9c-6 0-11.5-4.8-11.5-11.5s4.8-11.5 11.5-11.5c6 0 11.5 4.8 11.5 11.5s-4.8 11.5-11.5 11.5zm22.9 91.1c-6 0-11.5-10.3-11.5-22.9s4.8-22.9 11.5-22.9c6 0 11.5 10.3 11.5 22.9s-4.8 22.9-11.5 22.9zm-114-45.2c-6 0-11.5-4.8-11.5-11.5 0-6.6 4.8-11.5 11.5-11.5 6.6 0 11.5 4.8 11.5 11.5 0 6.6-4.8 11.5-11.5 11.5z"
    })]
  });
}, px = function(i) {
  var n = i.title, a = m(i, Dp);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#181A93",
      d: "M17.3 0h478.4v342H17.3V0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFA44A",
      d: "M0 0h513v114H0V0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#1A9F0B",
      d: "M0 228h513v114H0V228z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 114h513v114H0V114z"
    }), /* @__PURE__ */ e("circle", {
      fill: "#FFF",
      cx: 256.5,
      cy: 171,
      r: 34.2
    }), /* @__PURE__ */ e("path", {
      fill: "#181A93",
      d: "M256.5 216.6c-25.1 0-45.6-20.5-45.6-45.6s20.5-45.6 45.6-45.6 45.6 20.5 45.6 45.6-20.5 45.6-45.6 45.6zm0-11.4c18.2 0 34.2-16 34.2-34.2s-15.9-34.2-34.2-34.2-34.2 16-34.2 34.2 16 34.2 34.2 34.2z"
    }), /* @__PURE__ */ e("circle", {
      fill: "#181A93",
      cx: 256.5,
      cy: 171,
      r: 22.8
    })]
  });
}, mx = function(i) {
  var n = i.title, a = m(i, Cp);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0-.3h513V342H0V-.3z"
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M462.9 198.1c-4 0-14-5-21-9-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-16 9-20 9s-14-5-20-9c-11-6-22-12-32.1-12-9 0-20 6-31.1 12-7 4-16 9-20 9s-13-5-20-9c-11-6-22-12-31.1-12-10 0-21 6-32.1 12-6 4-16 9-20 9s-13-5-20-9c-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-17 9-21 9s-13-5-20-9c-10-6-20-12-30.1-12v22l19 10c11 6 21 12 31.1 12s21-6 32.1-12c6-4 16-10 20-10s13 6 20 10c11 6 21 12 31.1 12s20-6 31.1-12c7-4 17-10 21-10s13 6 20 10c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-10 20-10s14 6 21 10c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-10 20-10s14 6 20 10c11 6 22 12 32.1 12s20-6 31.1-12l19-10v-22c-10 0-20 6-30.1 12-7 4-16 9-20 9zM0 31.7l19 10c11 6 21 12 31.1 12s21-6 32.1-12c6-4 16-10 20-10s13 6 20 10c11 6 21 12 31.1 12s20-6 31.1-12c7-4 17-10 21-10s13 6 20 10c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-10 20-10s14 6 21 10c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-10 20-10s14 6 20 10c11 6 22 12 32.1 12s20-6 31.1-12l19-10v-22c-10 1-20 6-30.1 12-7 4-16 9-20 9s-14-5-21-9c-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-16 9-20 9s-14-5-20-9c-11-6-22-12-32.1-12s-20 6-31.1 12c-7 4-16 9-20 9s-13-5-20-9c-11-6-22-12-31.1-12s-21 6-32.1 12c-6 4-16 9-20 9s-13-5-20-9c-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-17 9-21 9s-13-5-20-9c-10-6-20-11-30.1-12v22zm462.9 55.2c-4 0-14-5-21-9-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-16 9-20 9s-14-5-20-9c-11-6-22-12-32.1-12-9 0-20 6-31.1 12-7 4-16 9-20 9s-13-5-20-9c-11-6-22-12-31.1-12-10 0-21 6-32.1 12-6 4-16 9-20 9s-13-5-20-9c-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-17 9-21 9s-13-5-20-9c-10-6-20-12-30.1-12v22l19 9c11 6 21 12 31.1 12s21-6 32.1-12c6-4 16-9 20-9s13 5 20 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 17-9 21-9s13 5 20 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-9 20-9s14 5 21 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-9 20-9s14 5 20 9c11 6 22 12 32.1 12s20-6 31.1-12l19-9v-22c-10 0-20 6-30.1 12-7 3.9-16 9-20 9zm50.1 34c-10 1-20 6-30.1 12-7 4-16 10-20 10s-14-6-21-10c-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-16 10-20 10s-14-6-20-10c-11-6-22-12-32.1-12s-20 6-31.1 12c-7 4-16 10-20 10s-13-6-20-10c-11-6-22-12-31.1-12s-21 6-32.1 12c-6 4-16 10-20 10s-13-6-20-10c-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-17 10-21 10s-13-6-20-10c-10-6-20-11-30.1-12v23c4 1 13 5 19 9 11 6 21 12 31.1 12s21-6 32.1-12c6-4 16-9 20-9s13 5 20 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 17-9 21-9s13 5 20 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-9 20-9s14 5 21 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-9 20-9s14 5 20 9c11 6 22 12 32.1 12s20-6 31.1-12c6-4 15-8 19-9v-23zm-50.1 133.3c-4 0-14-5-21-9-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-16 9-20 9s-14-5-20-9c-11-6-22-12-32.1-12-9 0-20 6-31.1 12-7 4-16 9-20 9s-13-5-20-9c-11-6-22-12-31.1-12-10 0-21 6-32.1 12-6 4-16 9-20 9s-13-5-20-9c-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-17 9-21 9s-13-5-20-9c-10-6-20-12-30.1-12v22l19 9c11 6 21 12 31.1 12s21-6 32.1-12c6-4 16-9 20-9s13 5 20 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 17-9 21-9s13 5 20 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-9 20-9s14 5 21 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-9 20-9s14 5 20 9c11 6 22 12 32.1 12s20-6 31.1-12l19-9v-22c-10 0-20 6-30.1 12-7 4-16 9-20 9zm50.1 34c-10 1-20 6-30.1 12-7 4-16 10-20 10s-14-6-21-10c-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-16 10-20 10s-14-6-20-10c-11-6-22-12-32.1-12s-20 6-31.1 12c-7 4-16 10-20 10s-13-6-20-10c-11-6-22-12-31.1-12s-21 6-32.1 12c-6 4-16 10-20 10s-13-6-20-10c-11-6-21-12-31.1-12s-20 6-31.1 12c-7 4-17 10-21 10s-13-6-20-10c-10-6-20-11-30.1-12v23c4 0 13 5 19 9 11 6 21 12 31.1 12s21-6 32.1-12c6-4 16-9 20-9s13 5 20 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 17-9 21-9s13 5 20 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-9 20-9s14 5 21 9c11 6 21 12 31.1 12s20-6 31.1-12c7-4 16-9 20-9s14 5 20 9c11 6 22 12 32.1 12s20-6 31.1-12c6-4 15-9 19-9v-23z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0-.3h256v171H0V-.3z"
    }), /* @__PURE__ */ e("path", {
      d: "M389.8 119.9H408v78.8h-18.3l.1-78.8zm0 117.8H408v75.1h-18.3l.1-75.1z",
      fill: "#A2001D"
    }), /* @__PURE__ */ d("g", {
      fill: "#D80027",
      children: [/* @__PURE__ */ e("path", {
        d: "M144-.3h-32v70H0v32h112v69h32v-69h112v-32H144v-70z"
      }), /* @__PURE__ */ e("path", {
        d: "M0-.3v15l57 39h23L0-.3zm256 0v15l-57 39h-23l80-54z"
      }), /* @__PURE__ */ e("path", {
        d: "M0-.3v15l57 39h23L0-.3zm256 0v15l-57 39h-23l80-54zM0 170.7v-15l57-38h23l-80 53zm256 0v-15l-57-38h-23l80 53z"
      })]
    }), /* @__PURE__ */ d("g", {
      fill: "#2E52B2",
      children: [/* @__PURE__ */ e("path", {
        d: "M0 22.7v31h46l-46-31zm96-23v49L23-.3h73zm160 23v31h-46l46-31zm-96-23v49l73-49h-73z"
      }), /* @__PURE__ */ e("path", {
        d: "M0 22.7v31h46l-46-31zm96-23v49L23-.3h73zm160 23v31h-46l46-31zm-96-23v49l73-49h-73zM0 147.7v-30h46l-46 30zm96 23v-49l-73 49h73zm160-23v-30h-46l46 30zm-96 23v-49l73 49h-73z"
      })]
    }), /* @__PURE__ */ e("path", {
      fill: "#5DA51E",
      stroke: "#45602C",
      strokeWidth: 4,
      strokeMiterlimit: 10,
      d: "M462.8 91.5h-29.1l25.7-25.7c4.5-4.4 4.5-11.4 0-15.8l-3.4-3.4c-4.4-4.4-11.4-4.4-15.8 0l-25.9 25.9V37.4c0-6.2-5.1-11.3-11.3-11.3h-4.7c-6.2 0-11.3 5.1-11.3 11.3v31.7l-23.5-23.8c-4.7-4.7-12.2-4.7-16.9 0l-3.6 3.6c-4.7 4.7-4.7 12.4 0 17.2l25 25.4h-30.6c-6 0-10.9 4.9-10.9 10.9v4.6c0 6 4.9 10.9 10.9 10.9H369l-20.7 20.7c-4.4 4.4-4.4 11.4 0 15.8l3.4 3.4c4.4 4.4 11.4 4.4 15.8 0l19.6-19.6V167c0 6.1 5.1 11.1 11.3 11.3h4.7c6.2 0 11.3-5.1 11.3-11.3v-28.3l22.2 22.6c4.7 4.7 12.4 4.7 17.1 0l3.6-3.6c4.7-4.7 4.7-12.4 0-17.2L435.2 118h27.6c5.9 0 10.7-4.9 10.9-10.9v-4.6c0-6.1-4.9-11-10.9-11z"
    }), /* @__PURE__ */ e("path", {
      fill: "#E2DD24",
      stroke: "#525625",
      strokeWidth: 4,
      strokeMiterlimit: 10,
      d: "M439.2 249.1h-79.8s-.9-13.4-6-21.8c-6.2-10.4-13.9-28.1-1.4-36.7 15.9-10.9 33.7.8 48.2.8 11.8.1 26.9-14 45-.8 12.2 8.9 3.9 28.2-1.3 36.7-7 11.5-4.7 21.8-4.7 21.8z"
    })]
  });
}, gx = function(i) {
  var n = i.title, a = m(i, Tp);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 0h513v342H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#CE1126",
      d: "M0 0h513v114H0z"
    }), /* @__PURE__ */ e("path", {
      d: "M0 228h513v114H0z"
    }), /* @__PURE__ */ e("path", {
      d: "M219.2 160.7h-29.3c1.5-5.7 6.6-9.9 12.8-9.9v-19.9c-18.3 0-33.1 14.9-33.1 33.1v16.5h49.6c1.8 0 3.3 1.5 3.3 3.3v6.6h-66.2v19.9h86.1v-26.5c0-12.7-10.4-23.1-23.2-23.1zm49.6 29.8v-59.6H249v79.5h33.1v-19.9zm66.2 0v-59.6h-19.8v59.6h-6.6v-19.8h-19.9v39.7h59.6v-19.9z",
      fill: "#547C31"
    })]
  });
}, wx = function(i) {
  var n = i.title, a = m(i, Bp);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 0h512v342H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#6DA544",
      d: "M0 0h513v114H0z"
    }), /* @__PURE__ */ e("path", {
      d: "M0 227.9h513v114H0zm278.8-93.1c.1 2 8.7 26.2 4.4 39.4-6.6 20.3-15.8 21.8-19.8 24.5V134l-6.9-4.2-6.9 4.2v64.7c-4-2.7-12.4-2.4-19.8-24.5-4.3-12.7 5.7-37.3 5.8-39.2 0 0-9.5 8.1-15.8 24-5.9 14.8 1.9 49.6 29.5 54.8 2.3.4 4.7 5.6 7.2 5.6 2.1 0 4.1-5.2 6-5.5 28.4-4.6 35-41.7 29.9-55.6-5.4-14.6-13.6-23.5-13.6-23.5z",
      fill: "#D80027"
    }), /* @__PURE__ */ e("path", {
      d: "M44.6 98.9h22.3v24.4H44.6zM0 98.9h22.3v24.4H0zm89.2 0h22.3v24.4H89.2zm44.6 0h22.3v24.4h-22.3zm44.6 0h22.3v24.4h-22.3zm44.6 0h22.3v24.4H223zm44.7 0H290v24.4h-22.3zm44.6 0h22.3v24.4h-22.3zm44.6 0h22.3v24.4h-22.3zm44.6 0h22.3v24.4h-22.3zm44.6 0h22.3v24.4h-22.3zm44.6 0H513v24.4h-22.3zm-446.1 118h22.3v25.5H44.6zm-44.6 0h22.3v25.5H0zm89.2 0h22.3v25.5H89.2zm44.6 0h22.3v25.5h-22.3zm44.6 0h22.3v25.5h-22.3zm44.6 0h22.3v25.5H223zm44.7 0H290v25.5h-22.3zm44.6 0h22.3v25.5h-22.3zm44.6 0h22.3v25.5h-22.3zm44.6 0h22.3v25.5h-22.3zm44.6 0h22.3v25.5h-22.3zm44.6 0H513v25.5h-22.3z",
      fill: "#FFF",
      opacity: 0.5
    })]
  });
}, zx = function(i) {
  var n = i.title, a = m(i, Lp);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M0 85.334h512v341.337H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M512 295.883H202.195v130.783h-79.76V295.883H0v-79.772h122.435V85.329h79.76v130.782H512v61.218z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M512 234.666v42.663H183.652v149.337h-42.674V277.329H0v-42.663h140.978V85.329h42.674v149.337z"
    })]
  });
}, xx = function(i) {
  var n = i.title, a = m(i, Op);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M341.334 85.33H0v341.332h512V85.33z"
    }), /* @__PURE__ */ e("path", {
      fill: "#6DA544",
      d: "M0 85.333h170.663V426.67H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M341.337 85.333H512V426.67H341.337z"
    })]
  });
}, Mx = function(i) {
  var n = i.title, a = m(i, Rp);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 0h513v342H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M301.8 171 513 30.2V0h-45.3L256.5 140.8 45.3 0H0v30.2L211.2 171 0 311.8V342h45.3l211.2-140.8L467.7 342H513v-30.2z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "m233.7 44.6 22.3 5.6 22.3-5.6 4-20.9-14.9 6.5L256 14.8l-11.4 15.4-14.9-6.5z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M233.7 44.6s-4 12.9-4 29.9c0 27.9 26.3 41.3 26.3 41.3s26.3-15.5 26.3-41.3c0-15.4-4-29.9-4-29.9s-8.1-5-22.3-5-22.3 5-22.3 5z"
    })]
  });
}, Fx = function(i) {
  var n = i.title, a = m(i, Ip);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#6DA544",
      d: "M0 85.337h512v341.326H0z"
    }), /* @__PURE__ */ e("path", {
      d: "M215.864 256.006 0 399.911V112.089zM512 112.089v287.822L296.136 256.006z"
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M512 112.089 296.136 256.006 512 399.911v26.757h-40.125L256 282.752 40.125 426.668H0v-26.757l215.864-143.905L0 112.089V85.331h40.125L256 229.248 471.875 85.331H512z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "M512 112.089 296.136 256.006 512 399.911v26.757h-40.125L256 282.752 40.125 426.668H0v-26.757l215.864-143.905L0 112.089V85.331h40.125L256 229.248 471.875 85.331H512z"
    })]
  });
}, yx = function(i) {
  var n = i.title, a = m(i, Pp);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 85.339h512v341.326H0z"
    }), /* @__PURE__ */ e("path", {
      d: "M0 85.339h512v113.775H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#6DA544",
      d: "M0 312.89h512v113.775H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M256 256.006 0 426.669V85.331z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "m77.913 224.802 7.876 16.469 17.786-4.11-7.965 16.426 14.303 11.343-17.808 4.014.049 18.255-14.241-11.421-14.241 11.421.05-18.255-17.809-4.014 14.303-11.343-7.965-16.426 17.786 4.11z"
    })]
  });
}, Hx = function(i) {
  var n = i.title, a = m(i, Vp);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 85.331h512v341.337H0z"
    }), /* @__PURE__ */ e("circle", {
      fill: "#D80027",
      cx: 256,
      cy: 255.994,
      r: 96
    })]
  });
}, _x = function(i) {
  var n = i.title, a = m(i, Np);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 85.331h512v341.337H0z"
    }), /* @__PURE__ */ e("path", {
      d: "M0 85.331h512v90.579H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#496E2D",
      d: "M0 336.089h512v90.568H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#A2001D",
      d: "M0 198.606h512v114.799H0z"
    }), /* @__PURE__ */ d("g", {
      fill: "#FFF",
      children: [/* @__PURE__ */ e("path", {
        d: "m323.265 139.803-25.583-11.809L256 222.376l-41.682-94.382-25.583 11.809 51.749 116.191-51.749 116.192 25.583 11.808L256 289.613l41.682 94.381 25.583-11.808-51.749-116.192z"
      }), /* @__PURE__ */ e("path", {
        d: "M273.376 150.931C263.472 140.115 256 133.898 256 133.898s-7.472 6.216-17.376 17.032v210.127C248.528 371.873 256 378.091 256 378.091s7.472-6.216 17.376-17.033V150.931z"
      })]
    }), /* @__PURE__ */ e("path", {
      d: "M209.04 191.226v129.535c10.465 18.542 23.274 33.742 32.872 43.818V147.408c-9.599 10.076-22.408 25.275-32.872 43.818zm93.92 0c-10.465-18.543-23.274-33.742-32.872-43.818V364.58c9.599-10.077 22.407-25.276 32.872-43.818V191.226z",
      fill: "#A2001D"
    }), /* @__PURE__ */ e("path", {
      d: "M302.96 191.226v129.535c10.594-18.774 18.784-40.973 18.784-64.767s-8.19-45.993-18.784-64.768zm-93.92 0v129.535c-10.594-18.774-18.784-40.973-18.784-64.767s8.19-45.993 18.784-64.768z"
    })]
  });
}, bx = function(i) {
  var n = i.title, a = m(i, kp);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ d("g", {
      fill: "#D80027",
      children: [/* @__PURE__ */ e("path", {
        d: "M0 0h513v342H0z"
      }), /* @__PURE__ */ e("circle", {
        cx: 256,
        cy: 170.7,
        r: 170.7
      })]
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "M382.4 170.7 330.8 195l27.5 50-56.1-10.7-7.1 56.6-39.1-41.7-39.1 41.7-7.1-56.6-56.1 10.7 27.5-50-51.6-24.3 51.6-24.3-27.5-50.1 56.1 10.8 7.1-56.7L256 92.1l39.1-41.7 7.1 56.7 56.1-10.8-27.5 50.1z"
    }), /* @__PURE__ */ e("circle", {
      fill: "#D80027",
      cx: 257.4,
      cy: 170.7,
      r: 71.6
    }), /* @__PURE__ */ e("path", {
      d: "M214.2 170.7c-2.1 0-4.1.1-6.2.3.1 12 4.4 22.9 11.6 31.5 3.8-10.3 9.5-19.6 16.7-27.7-6.9-2.7-14.3-4.1-22.1-4.1zm26.6 46.5c5.2 1.9 10.8 2.9 16.6 2.9 5.8 0 11.4-1 16.6-2.9-2.8-11.1-8.7-21-16.6-28.8-7.9 7.8-13.8 17.7-16.6 28.8zm59.4-71.2c-8.5-14.8-24.5-24.7-42.8-24.7-18.3 0-34.2 9.9-42.8 24.7 15.6.1 30.2 4.3 42.8 11.6 12.6-7.3 27.2-11.6 42.8-11.6zm-21.7 28.8c7.2 8 12.9 17.4 16.7 27.7 7.2-8.5 11.5-19.5 11.6-31.5-2-.2-4.1-.3-6.2-.3-7.7 0-15.2 1.4-22.1 4.1z",
      fill: "#FFDA44"
    })]
  });
}, Ex = function(i) {
  var n = i.title, a = m(i, $p);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M0 85.337h512v341.326H0z"
    }), /* @__PURE__ */ e("path", {
      d: "M0 85.337h512v113.775H0zm0 227.551h512v113.775H0z",
      fill: "#0052B4"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M303.49 281.971v-17.809h-11.873v-23.745l-11.872-11.872-11.872 11.872v-23.744L256 204.8l-11.873 11.873v23.744l-11.872-11.872-11.872 11.872v23.745H208.51v17.809h-11.872v17.808h118.724v-17.808z"
    })]
  });
}, Ax = function(i) {
  var n = i.title, a = m(i, Wp);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 450 300",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#CE1126",
      d: "M0 0h450v300H0V0z"
    }), /* @__PURE__ */ d("g", {
      fill: "#FCD116",
      children: [/* @__PURE__ */ e("circle", {
        cx: 227.6,
        cy: 161.2,
        r: 56.2
      }), /* @__PURE__ */ e("path", {
        d: "m254.1 73.4-23.7 26 28.6 6.5zm-51.5.2-4.8 33.1 28.5-8zm94.3 26.7-34.7 8.5 20.1 23.7zm-138.3-1.8 15.5 32.7 20.2-22.7zm159 45.3-34.4-9.9 5.6 29.5zm-182-2.6 31.9 19.8 5.2-27.7z"
      })]
    }), /* @__PURE__ */ e("path", {
      fill: "#003F87",
      d: "M0 175h450v125H0V175z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 267c15 0 30 13 45 13s30-13 45-13 30 13 45 13 30-13 45-13 30 13 45 13 30-13 45-13 30 13 45 13 30-13 45-13 30 13 45 13 30-13 45-13v-21c-15 0-30 13-45 13s-30-13-45-13-30 13-45 13-30-13-45-13-30 13-45 13-30-13-45-13-30 13-45 13-30-13-45-13-30 13-45 13-30-13-45-13v21zm0-43c15 0 30 13 45 13s30-13 45-13 30 13 45 13 30-13 45-13 30 13 45 13 30-13 45-13 30 13 45 13 30-13 45-13 30 13 45 13 30-13 45-13v-21c-15 0-30 13-45 13s-30-13-45-13-30 13-45 13-30-13-45-13-30 13-45 13-30-13-45-13-30 13-45 13-30-13-45-13-30 13-45 13-30-13-45-13v21zm0-43c15 0 30 13 45 13s30-13 45-13 30 13 45 13 30-13 45-13 30 13 45 13 30-13 45-13 30 13 45 13 30-13 45-13 30 13 45 13 30-13 45-13v-21c-15 0-30 13-45 13s-30-13-45-13-30 13-45 13-30-13-45-13-30 13-45 13-30-13-45-13-30 13-45 13-30-13-45-13-30 13-45 13-30-13-45-13v21z"
    }), /* @__PURE__ */ e("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "#FCD116",
      d: "m183.2 48.3-1.1-5.3 22.4-3.7s-30.1-7.1-40-10.7c-14.3-5.1-16.3-12.1-16.3-12.1s44.7 11 64.8 11c4.3 0 12.8 10.7 12.8 10.7s14.8-14.9 21.9-15.4c32.1-2.3 66.6-6.4 66.6-6.4s-10 6.7-16 8.5c-16.2 4.9-50.6 11.7-50.6 11.7l-4.8 7.5H277l-14.4 4.3 7.4 6.9s-7.8-4.1-18.1-2.1c-7.1 1.3-15.4 6-22.9 8-18.7 4.8-29.9-12.8-29.9-12.8l-15.9-.1z"
    })]
  });
}, Sx = function(i) {
  var n = i.title, a = m(i, Up);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M0 85.337h512v341.326H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "M0 85.337h512v85.337H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 170.663h512V256H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M0 256h512v85.337H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#6DA544",
      d: "M256 256.006 0 426.668V85.331z"
    }), /* @__PURE__ */ d("g", {
      fill: "#FFF",
      children: [/* @__PURE__ */ e("path", {
        d: "M68.638 256c0-24.865 17.476-45.638 40.812-50.734a52.059 52.059 0 0 0-11.13-1.208c-28.688 0-51.942 23.255-51.942 51.942s23.255 51.942 51.942 51.942c3.822 0 7.543-.425 11.13-1.208-23.337-5.096-40.812-25.869-40.812-50.734z"
      }), /* @__PURE__ */ e("path", {
        d: "m108.877 211.478 2.762 8.503h8.94l-7.232 5.256 2.762 8.502-7.232-5.255-7.234 5.255 2.764-8.502-7.234-5.256h8.94zm0 22.261 2.762 8.503h8.94l-7.232 5.255 2.762 8.503-7.232-5.255-7.234 5.255 2.764-8.503-7.234-5.255h8.94zm0 22.261 2.762 8.503h8.94l-7.232 5.255 2.762 8.503-7.232-5.255-7.234 5.255 2.764-8.503-7.234-5.255h8.94zm0 22.261 2.762 8.502h8.94l-7.232 5.256 2.762 8.503-7.232-5.255-7.234 5.255 2.764-8.503-7.234-5.256h8.94z"
      })]
    })]
  });
}, Dx = function(i) {
  var n = i.title, a = m(i, Gp);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M0 0h513v342H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#6DA544",
      d: "M512 0H0v342"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "M307.7 0 0 194.5V342h206.9L513 148.5V0z"
    }), /* @__PURE__ */ e("path", {
      d: "M513 0H385.2L0 249.4V341l126.2 1L513 91.6z"
    }), /* @__PURE__ */ e("path", {
      d: "m141.1 187 31.2 24 32.3-22.2-13.1 37 31.1 23.9-39.2-1.1-13.2 37-11.1-37.6-39.2-1.1 32.3-22.2zM310.6 70.8l31.2 23.9 32.3-22.2-13.1 37 31.1 23.9-39.2-1.1-13.2 37-11.1-37.6-39.2-1.1 32.4-22.2z",
      fill: "#FFF"
    })]
  });
}, Cx = function(i) {
  var n = i.title, a = m(i, Kp);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#91DC5A",
      d: "M0 85.331h512v341.337H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 85.331h512v341.337H0z"
    }), /* @__PURE__ */ e("path", {
      d: "M0 85.331h512v57.188H0zM0 369.48h512v57.177H0z",
      fill: "#0052B4"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M0 165.215h512v181.582H0z"
    }), /* @__PURE__ */ e("circle", {
      fill: "#FFF",
      cx: 190.33,
      cy: 255.994,
      r: 65.668
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "m190.332 190.332 14.734 45.346h47.757l-38.65 28.028 14.849 45.481-38.69-28.16-38.631 28.107 14.79-45.428-38.616-28.028h47.722z"
    })]
  });
}, Tx = function(i) {
  var n = i.title, a = m(i, Yp);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 900 600",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 0h900v600H0z"
    }), /* @__PURE__ */ d("g", {
      transform: "rotate(-56.31)",
      children: [/* @__PURE__ */ e("path", {
        d: "M-75 228.3H75m-150 37.5H75m-150 37.5H75m-150 475H75m-150 37.5H75m-150 37.5H75",
        stroke: "#000",
        strokeWidth: 25
      }), /* @__PURE__ */ e("path", {
        stroke: "#FFF",
        strokeWidth: 12.5,
        d: "M0 753.3v125"
      }), /* @__PURE__ */ e("circle", {
        fill: "#ca163a",
        cy: 540.8,
        r: 150
      }), /* @__PURE__ */ e("path", {
        fill: "#0e4896",
        d: "M0 390.8c-41.4 0-75 33.6-75 75s33.6 75 75 75 75 33.6 75 75-33.6 75-75 75c-82.8 0-150-67.2-150-150s67.2-150 150-150z"
      })]
    }), /* @__PURE__ */ e("path", {
      d: "m231.56 535.73-83.205-124.808M262.76 514.928l-83.205-124.807m114.407 104.006-83.205-124.808m478.43-138.675-83.205-124.807M720.39 209.843 637.184 85.036m114.407 104.006L668.386 64.234",
      stroke: "#000",
      strokeWidth: 25
    }), /* @__PURE__ */ e("path", {
      stroke: "#FFF",
      strokeWidth: 12.5,
      d: "m205.6 462.897 31.202-20.8m389.981-259.989 36.444-24.296m31.202-20.801 31.202-20.801"
    })]
  });
}, Bx = function(i) {
  var n = i.title, a = m(i, qp);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 85.337h512v341.326H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#6DA544",
      d: "M0 85.337h512v113.775H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M0 312.888h512v113.775H0z"
    }), /* @__PURE__ */ e("path", {
      d: "M166.957 312.889 0 426.663V85.337l166.957 113.774z"
    })]
  });
}, Lx = function(i) {
  var n = i.title, a = m(i, jp);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M0 85.334h512v341.337H0z"
    }), /* @__PURE__ */ e("circle", {
      fill: "#6DA544",
      cx: 384,
      cy: 181.79,
      r: 29.682
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M332.054 174.377h103.88v44.522h-103.88z"
    }), /* @__PURE__ */ e("path", {
      fill: "#496E2D",
      d: "M435.942 255.997v-.001.001z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "M332.058 285.678v29.682h15.616c9.364 9.176 22.18 14.84 36.326 14.84 14.147 0 26.962-5.664 36.326-14.84h15.616v-29.682H332.058z"
    }), /* @__PURE__ */ e("path", {
      fill: "#338AF3",
      d: "M332.058 211.475v44.522c0 39.759 51.942 51.942 51.942 51.942s51.942-12.182 51.942-51.942v-44.522H332.058z"
    }), /* @__PURE__ */ e("path", {
      d: "M383.997 235.256c-12.985 0-12.985 11.873-25.97 11.873s-12.985-11.873-25.97-11.873v20.777c12.985 0 12.985 11.873 25.97 11.873s12.985-11.873 25.97-11.873c12.986 0 12.986 11.873 25.973 11.873 12.986 0 12.986-11.873 25.973-11.873v-20.777c-12.986 0-12.986 11.873-25.973 11.873-12.986-.001-12.986-11.873-25.973-11.873zm0-41.59c-12.985 0-12.985 11.873-25.97 11.873s-12.985-11.873-25.97-11.873v20.777c12.985 0 12.985 11.873 25.97 11.873s12.985-11.873 25.97-11.873c12.986 0 12.986 11.873 25.973 11.873 12.986 0 12.986-11.873 25.973-11.873v-20.777c-12.986 0-12.986 11.873-25.973 11.873-12.986 0-12.986-11.873-25.973-11.873z",
      fill: "#F3F3F3"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M256 85.334v22.617l-46.069 30.709H256v64h-46.069L256 233.38v22.617h-22.628L160 207.078v48.919H96v-48.919l-73.372 48.919H0V233.38l46.069-30.72H0v-64h46.069L0 107.951V85.334h22.628L96 134.241V85.334h64v48.907l73.372-48.907z"
    }), /* @__PURE__ */ d("g", {
      fill: "#D80027",
      children: [/* @__PURE__ */ e("path", {
        d: "M144 85.329h-32v69.334H0v32h112v69.334h32v-69.334h112v-32H144z"
      }), /* @__PURE__ */ e("path", {
        d: "M0 85.329v15.082l57.377 38.252H80zm256 0v15.082l-57.377 38.252H176z"
      }), /* @__PURE__ */ e("path", {
        d: "M0 85.329v15.082l57.377 38.252H80zm256 0v15.082l-57.377 38.252H176zM0 255.997v-15.082l57.377-38.252H80zm256 0v-15.082l-57.377-38.252H176z"
      })]
    })]
  });
}, Ox = function(i) {
  var n = i.title, a = m(i, Zp);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#36B6CC",
      d: "M0 0h513v342H0V0z"
    }), /* @__PURE__ */ e("circle", {
      fill: "#FFD400",
      cx: 256.5,
      cy: 170.9,
      r: 68.4
    }), /* @__PURE__ */ e("path", {
      fill: "#FFD400",
      d: "m256.5 251.5-27.9 41.7-7.1-49.7-43.2 25.5 15.2-47.8-50 4.2 34.4-36.5-46.9-18 46.8-18-34.4-36.5 50 4.2-15.2-47.8 43.2 25.4 7.1-49.7 27.9 41.7 27.9-41.7 7.1 49.7 43.2-25.4-15.2 47.8 50-4.2-34.3 36.6 46.8 17.9-46.8 18 34.4 36.5-50-4.2 15.2 47.8-43.2-25.4-7.1 49.7c0-.1-27.9-41.8-27.9-41.8zm0-.8c44.1 0 79.9-35.8 79.9-79.9S300.6 91 256.5 91s-79.9 35.8-79.9 79.9 35.8 79.8 79.9 79.8zM22.8 28.3c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H28.5c-3.1 0-5.7-2.5-5.7-5.6V28.3zm0 45.7c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H28.5c-3.1 0-5.7-2.5-5.7-5.6V74zm0 45.6c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H28.5c-3.1 0-5.7-2.5-5.7-5.6v-11.4zm0 45.6c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H28.5c-3.1 0-5.7-2.5-5.7-5.6v-11.4zm0 45.7c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H28.5c-3.1 0-5.7-2.5-5.7-5.6v-11.4zm0 45.6c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H28.5c-3.1 0-5.7-2.5-5.7-5.6v-11.4zm0 45.6c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H28.5c-3.1 0-5.7-2.5-5.7-5.6v-11.4zm22.8-22.8c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H51.3c-3.1 0-5.7-2.5-5.7-5.6v-11.4zm0-45.6c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7V245c.1 3.1-2.4 5.7-5.6 5.7H51.3c-3.1 0-5.7-2.5-5.7-5.6v-11.4zm0-45.7c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H51.3c-3.1 0-5.7-2.5-5.7-5.6V188zm0-45.6c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H51.3c-3.1 0-5.7-2.5-5.7-5.6v-11.4zm0-45.6c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H51.3c-3.1 0-5.7-2.5-5.7-5.6V96.8zm0-45.6c0-3.2 2.4-5.7 5.7-5.7h11.3c3.2 0 5.7 2.4 5.7 5.7v11.3c.1 3.1-2.4 5.7-5.6 5.7H51.3c-3.1 0-5.7-2.5-5.7-5.6V51.2z"
    })]
  });
}, Rx = function(i) {
  var n = i.title, a = m(i, Jp);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M0 0h513v342H0z"
    }), /* @__PURE__ */ e("path", {
      d: "M0 .1h513v90.7H0zm0 251.2h513V342H0z",
      fill: "#D80027"
    }), /* @__PURE__ */ e("circle", {
      fill: "#FFF",
      cx: 256.5,
      cy: 171,
      r: 65.9
    })]
  });
}, Ix = function(i) {
  var n = i.title, a = m(i, Xp);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 0h513v342H0z"
    }), /* @__PURE__ */ e("path", {
      d: "M0 .2h513v90.7H0zm.5 251.1H513V342H.5z",
      fill: "#D80027"
    }), /* @__PURE__ */ e("path", {
      fill: "#6DA544",
      d: "M290.3 193.5 256 130.7l-34.3 62.8h25.7v17.2h17.2v-17.2z"
    }), /* @__PURE__ */ e("path", {
      fill: "#14AF5A",
      d: "M241.3 213.1c4.4-4.4 4.4-11.6-.1-16l4.7 4.7c-5.2-4.7-12.2-6.6-19.1-5.3l-23.5 5.9c-6.1 1.5-6.8-.4-1.8-4.2l27.1-20.3c5.1-3.8 4.2-6.9-2.3-6.9h-11c-6.4 0-7-2.3-1.5-5.1l25.3-12.7c5.6-2.8 5.1-5.1-1.5-5.1h-11c-6.4 0-7.4-3.1-2.3-6.9l27.1-20.3c5.6-3.8 12.9-3.8 18.5 0l27.1 20.3c5.1 3.8 4.2 6.9-2.3 6.9h-11c-6.4 0-7 2.3-1.5 5.1l25.3 12.7c5.6 2.8 5.1 5.1-1.5 5.1h-11c-6.4 0-7.4 3.1-2.3 6.9l27.1 20.3c5.1 3.8 4.4 5.7-1.8 4.2l-23.5-5.9c-6.8-1.3-13.9.6-19.1 5.3l4.7-4.7c-4.4 4.4-4.5 11.5-.1 16l6.8 6.8c4.4 4.4 3.1 8-3.3 8h-45.8c-6.2 0-7.7-3.6-3.3-8 .1.1 6.9-6.8 6.9-6.8z"
    })]
  });
}, Px = function(i) {
  var n = i.title, a = m(i, Qp);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#55B2FF",
      d: "M0 0h513v342H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#F3F3F3",
      d: "M148.5 298.1h216l-108-254.2z"
    }), /* @__PURE__ */ e("path", {
      fill: "#333",
      d: "m186 272.7 70.5-160.3L327 272.7z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "M148.5 298.1h216l-108-101.7z"
    })]
  });
}, Vx = function(i) {
  var n = i.title, a = m(i, tm);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M0 0h513v342H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M0 0h513v171H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "M149.3 98.1c0-14-11.3-25.3-25.3-25.3-6.5 0-12.4 2.4-16.9 6.4V64.4h8.4V47.5h-8.4v-8.4H90.3v8.4h-8.4v16.9h8.4v14.9c-4.5-4-10.4-6.4-16.9-6.4-14 0-25.3 11.3-25.3 25.3 0 7.5 3.3 14.2 8.4 18.8v14.9h84.3V117c5.3-4.7 8.5-11.5 8.5-18.9z"
    })]
  });
}, Nx = function(i) {
  var n = i.title, a = m(i, em);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "M0 0h513v342H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#A2001D",
      d: "M222.6 22.3h267.1v296.8H222.6z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M22.3 22.3h200.3v296.8H22.3z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "M200.3 0h22.3v342h-22.3z"
    }), /* @__PURE__ */ e("path", {
      fill: "#6DA544",
      d: "M22.3 22.3h89v296.8h-89z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FF9811",
      d: "M111.3 22.3h89v296.8h-89z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "M368.2 156.8c-1.4-2 0-37.9 0-37.9.9-7.4.1-8.4 1-11.4.9-2.9 5.4-11.6 5.4-11.6s-6-2.3-10.3-.6c-4.3 1.7-24.7-7.5-31.2 3.4-4.4 7-23.6 16.2-24.6 14-1-2.2-5.9-5-6.9-2.9s-.7 13.9 0 16c.8 2.6 9.8 2 12.3 3.1 3.7 1.8 12.2 8.2 11.9 10.7-.3 2.5-22.5-6-24.2-4.5-1.4 1.2-1.9 13.2-.4 15 1.8 2.1 23.4 5.6 25 7.5 1.6 1.9-13.1 7.4-12.3 25 .7 14.7 8 17.4 8 17.4s-2.4 3.6-7.8 3.1c-6.2-.6-27.4-17.7-27.4-17.7s-3.5-109 3.6-121.4c4.9-8.5-22.7 10.1-22.7 50.8V151c0 6.6-1.4 22.4 2.6 34 0 0-.4 46.9 1.5 49.6s12.7 2.2 14.8 0 0-30 0-30c7.7.2 18.3 17.5 32.5 16.4 20.6-1.6 28.7-9.9 34.3-5 8.1 7.1 5.5 23.2.4 31.5-2.2 3.5-14.3 4.7-15.7 7.6-1.4 2.9.5 5.4.5 5.4h29.7s1.4-20.5 2.7-26.1c1.3-5.7-.6-10.7 5.9-10.4 23.5 1.1 39.8-15.3 45.5-8 3.2 4.1 5.6 29.9 3.3 33.3-2.2 3.4-13.8 2.8-15.2 6.7-1.4 4 .8 4.4.8 4.4h29.7s-.4-21.2 2.5-27.7 4.9-10.4 9.3-17.2c4.4-6.8 11.3-15.7 11.3-36.2 0-14.2-8.1-22.8-8.1-22.8H417c-14.1.2-47.4 2.3-48.8.3zm-136-124.5c10.7-10.6 20.2-2.7 22.2 2.1 1.9 4.8 2.1 8.2 2.8 13.6.9 6.9 4.9 14 4.9 14s-7.1-3.8-14.7-4.2c-4.7-.3-9-.6-13.6-2.5-5.7-2.3-11.7-12.9-1.6-23zm248.4-.1c10.7 10.6 2.8 20.2-2 22.2s-8.2 2.1-13.6 2.8c-6.9.9-14 5-14 5s3.7-7.1 4.2-14.7c.3-4.7.6-9.1 2.4-13.6 2.2-5.7 12.8-11.8 23-1.7zm.1 276.9c-10.7 10.6-20.2 2.6-22.2-2.2-1.9-4.8-2.1-8.2-2.7-13.6-.8-6.9-4.9-14.1-4.9-14.1s7 3.8 14.7 4.3c4.7.3 9 .6 13.6 2.5 5.7 2.4 11.7 13.1 1.5 23.1zm-248.2-.1c-10.6-10.7-2.7-20.2 2.1-22.2 4.8-1.9 8.2-2.1 13.6-2.8 6.9-.9 14-4.9 14-4.9s-3.8 7.1-4.2 14.7c-.3 4.7-.6 9-2.5 13.6-2.3 5.7-12.9 11.8-23 1.6z"
    }), /* @__PURE__ */ e("path", {
      fill: "none",
      stroke: "#FFDA44",
      strokeWidth: 6,
      strokeMiterlimit: 10,
      d: "M446.9 162.4s7.5-2.6 8.4-16.1c.6-8.6-19.8-16-39-11.5-19.7 4.6-34-3.1-34-14.6 0-22.9 29.7-16.2 38.9-11.3 9.1 4.9 29.7 23.5 35.1 9.4"
    })]
  });
}, kx = function(i) {
  var n = i.title, a = m(i, rm);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      d: "M0 0h512v31.1H0zm0 62.2h512v31.1H0zm0 62.3h512v31.1H0zm0 62.3h512v31.1H0zm0 62.5h512v31.1H0zm0 61.6h512V342H0z",
      fill: "#bf0a30"
    }), /* @__PURE__ */ e("path", {
      fill: "#002868",
      d: "M0 0h155.6v155.6H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "m77.8 30.2 10.7 32.9h34.6l-28 20.4 10.7 32.9-28-20.3-28 20.3 10.7-32.9-28-20.4h34.6z"
    })]
  });
}, $x = function(i) {
  var n = i.title, a = m(i, nm);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 0h513v342H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M0 0h513v114H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#6DA544",
      d: "M0 227.6h513v114H0z"
    }), /* @__PURE__ */ e("path", {
      d: "m245.2 171 7.7-23.1c2-5.9 5.1-6 7.1 0l7.7 23.1 19.4 29.1c1.7 2.6 1.3 6.3-1.2 8 0 0-6.9 8-29.5 8s-29.5-8-29.5-8c-2.4-2-2.9-5.4-1.2-8l19.5-29.1z"
    }), /* @__PURE__ */ e("path", {
      d: "M256.5 171c-12.5 0-22.6-10.1-22.6-22.6 0-12.5 10.1-22.6 22.6-22.6s22.6 10.1 22.6 22.6c0 12.5-10.2 22.6-22.6 22.6zm0 0c6.2 0 11.3-16.3 11.3-22.6 0-6.2-5.1-11.3-11.3-11.3-6.2 0-11.3 5.1-11.3 11.3 0 6.3 5 22.6 11.3 22.6z"
    })]
  });
}, Wx = function(i) {
  var n = i.title, a = m(i, im);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#6DA544",
      d: "M0 85.337h512v341.326H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "M0 85.337h512v113.775H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M0 312.888h512v113.775H0z"
    })]
  });
}, Ux = function(i) {
  var n = i.title, a = m(i, lm);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 85.337h512v341.326H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M0 85.337h512v113.775H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#338AF3",
      d: "M0 312.888h512v113.775H0z"
    })]
  });
}, Gx = function(i) {
  var n = i.title, a = m(i, am);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 0h513v342H0z"
    }), /* @__PURE__ */ e("path", {
      className: "prefix__st1",
      d: "M0 0h513v127.6H0zm0 214.4h513V342H0z",
      fill: "#A2001D"
    })]
  });
}, Kx = function(i) {
  var n = i.title, a = m(i, om);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      d: "M0 85.337h512v341.326H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M0 85.337h512v113.775H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#496E2D",
      d: "M0 312.888h512v113.775H0z"
    }), /* @__PURE__ */ d("g", {
      fill: "#FFF",
      children: [/* @__PURE__ */ e("path", {
        d: "m281.424 236.026 8.962 12.35 14.513-4.706-8.975 12.339 8.961 12.349-14.509-4.724-8.976 12.34.01-15.258-14.51-4.725 14.514-4.706z"
      }), /* @__PURE__ */ e("path", {
        d: "M256.965 286.868c-17.048 0-30.868-13.821-30.868-30.868s13.821-30.868 30.868-30.868a30.742 30.742 0 0 1 14.684 3.71c-6.851-6.698-16.218-10.833-26.556-10.833-20.982 0-37.992 17.01-37.992 37.992s17.01 37.992 37.992 37.992c10.338 0 19.706-4.135 26.556-10.833a30.738 30.738 0 0 1-14.684 3.708z"
      })]
    })]
  });
}, Yx = function(i) {
  var n = i.title, a = m(i, sm);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M0 85.337v341.326h512V85.337z"
    }), /* @__PURE__ */ e("path", {
      fill: "#20661b",
      d: "M352 226.484h-73.337L256 156.738l-22.663 69.748H160l59.331 43.107-22.663 69.749L256 296.232l59.332 43.107-22.663-69.749L352 226.484zm-116.063 37.711 7.663-23.585h24.8l7.663 23.585v.001L256 278.772l-20.063-14.577zm27.873-37.711h-15.619L256 202.447l7.81 24.037zm24.269 28.982-4.827-14.856h25.274l-20.447 14.856zm-59.331-14.856-4.827 14.856-20.447-14.856h25.274zm-5.211 61.748 7.81-24.036 12.636 9.181-20.446 14.855zm44.479-14.856 12.636-9.181 7.81 24.036-20.446-14.855z"
    })]
  });
}, qx = function(i) {
  var n = i.title, a = m(i, cm);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 85.333h512v341.333H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#c70000",
      d: "M0 85.333h512V256H0z"
    })]
  });
}, jx = function(i) {
  var n = i.title, a = m(i, hm);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "M0 0h513v342H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M342 0h171v342H342z"
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M0 0h171v342H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#AF7F59",
      d: "M206.2 129.1h33.2L256 79.3l16.6 49.8h33.2v99.6L256 262l-49.8-33.2v-99.7zm33.2 33.3v49.8h33.2v-49.8h-33.2z"
    })]
  });
}, Zx = function(i) {
  var n = i.title, a = m(i, um);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#E6BE53",
      d: "M0 0h513v342H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#E01D24",
      d: "M20 20h473v302H20z"
    }), /* @__PURE__ */ e("path", {
      fill: "#E6BE53",
      d: "M248.5 112.9c4.4 4.4 11.6 4.4 16 0l-4.7 4.7 22.7-22.7c4.9-4.5 12.1-5.6 18.2-2.8l2.1 1c5.7 2.9 6.7 8.7 2.3 13.1l4.7-4.7-22.8 22.8c-4.5 4.9-5.6 12.1-2.8 18.2l1 2.1c2.9 5.7 5.1 15.4 5.1 21.6v-11.3c0 6.2 4.4 9.1 10.2 6.2l2.1-1c5.7-2.9 6.7-8.7 2.3-13.1l4.7 4.7c-4.4-4.4-4.4-11.6 0-16l-4.7 4.7c5.2-5.5 9.6-11.6 13.1-18.2l1-2.1c2.9-5.7 6.3-15.1 7.9-21.2l5.8-23.3c1.5-6 5.9-6.8 9.6-1.8l20.2 26.9c3.8 5.1 6.9 14 6.9 20.6v22.4c0 6.3-2.2 15.8-5.1 21.7l-1 2.1c-3.5 6.6-7.9 12.7-13.1 18.2l-6.8 6.8c-5.4 5.2-11.5 9.6-18.2 13.1l-2.1 1c-5.7 2.9-15.5 5.1-21.6 5.1-6.2 0-6.9 2.2-1.1 5.1l2.1 1c5.7 2.9 13.8 8.7 18.2 13.1l-4.7-4.7c4.4 4.4 11.6 4.4 16 0l-4.7 4.7c4.4-4.4 11.6-4.4 16 0L339 226c4.6 4.9 5.7 12.1 2.9 18.2l-1 2.1c-2.9 5.7-10.4 10.2-16.4 10.2-7.5-.3-14.8-2-21.6-5.1l-2.1-1c-6.5-3.6-11.8-8.9-15.4-15.4l-1-2.1c-2.9-5.7-8.7-6.7-13.1-2.3l4.7-4.7c-4.4 4.7-5.2 11.8-1.8 17.3l10.3 15.4c3.4 5.1 2 12.1-3.1 15.5L266 284.4c-5.7 3.4-12.8 3.4-18.6 0L232 274.1c-5.1-3.4-6.5-10.3-3.1-15.5l10.3-15.4c3.4-5.5 2.6-12.6-1.8-17.3l4.7 4.7c-4.4-4.4-10.2-3.6-13.1 2.3l-1 2.1c-2.9 5.7-9.5 12.4-15.4 15.4l-2.1 1c-5.7 2.9-15.5 5.1-21.6 5.1-6.9-.3-13.1-4.2-16.4-10.2l-1-2.1c-2.8-6.1-1.6-13.3 2.9-18.2l-4.7 4.7c4.4-4.4 11.6-4.4 16 0L181 226c4.4 4.4 11.6 4.4 16 0l-4.7 4.7c5.5-5.2 11.6-9.6 18.2-13.1l2.1-1c5.7-2.9 5-5.1-1.1-5.1-7.5-.3-14.8-2-21.6-5.1l-2.1-1c-6.6-3.5-12.7-7.9-18.2-13.1l-6.8-6.8c-5.2-5.4-9.6-11.5-13.1-18.2l-1-2.1c-3.1-6.8-4.9-14.2-5.1-21.7V121c0-6.3 3.1-15.6 6.9-20.6l20.2-26.9c3.8-5.1 8.1-4.3 9.6 1.8l5.8 23.3c2 7.3 4.6 14.4 7.9 21.2l1 2.1c2.9 5.7 8.7 13.8 13.1 18.2l-4.7-4.7c4.4 4.4 4.4 11.6 0 16l4.7-4.7c-4.4 4.4-3.6 10.2 2.3 13.1l2.1 1c5.7 2.9 10.2 0 10.2-6.2v11.3c0-6.2 2.2-15.7 5.1-21.6l1-2.1c2.8-6.1 1.7-13.2-2.8-18.2l-22.7-22.7 4.7 4.7c-4.4-4.4-3.6-10.2 2.3-13.1l2.1-1c6.1-2.8 13.2-1.7 18.2 2.8l22.7 22.7-4.8-4.5zm-18-40.7c-4.4-4.4-3.2-9.5 2.8-11.5l12.4-4.2c6-2 15.5-2 21.5 0l12.4 4.2c6 2 7.2 7.1 2.8 11.5l-6.8 6.8c-5.3 4.7-12.1 7.5-19.2 7.9-6.2 0-14.8-3.5-19.2-7.9.1 0-6.7-6.8-6.7-6.8z"
    }), /* @__PURE__ */ e("path", {
      fill: "#215F90",
      d: "M233.9 200.2c0 6.2 1.7 6.4 4.2.5 0 0 7.1-23.2 18.4-23.2 11.3 0 18.6 23.6 18.6 23.6 2.2 5.7 4 5.3 4-1.1v-11.2c0-18.7-10.1-33.9-22.6-33.9-12.5 0-22.6 15.2-22.6 33.9v11.4z"
    })]
  });
}, Jx = function(i) {
  var n = i.title, a = m(i, fm);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 108 72",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      d: "M0 0h108v72H0z",
      fill: "#003787"
    }), /* @__PURE__ */ e("path", {
      d: "M0 0h108L60 48v24H48V48z",
      fill: "#fff"
    }), /* @__PURE__ */ e("circle", {
      cx: 54,
      cy: 30,
      r: 8,
      fill: "#f9d90f"
    }), /* @__PURE__ */ e("path", {
      d: "M44 30h20L54 48z",
      fill: "#fff"
    }), /* @__PURE__ */ e("path", {
      d: "M54 48 38 33h32z",
      fill: "#cf142b"
    })]
  });
}, Xx = function(i) {
  var n = i.title, a = m(i, dm);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#6DA544",
      d: "M512 426.666V85.329H0v341.337h512z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M512 85.331H0v170.666h512V85.331z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 85.334h181.793v341.337H0z"
    })]
  });
}, Qx = function(i) {
  var n = i.title, a = m(i, vm);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#1E509C",
      d: "M0 0h513v342H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M513 176.1V81.3L0 342l513-165.9z"
    }), /* @__PURE__ */ e("path", {
      fill: "#F18D36",
      d: "M513 0v81.3L0 342 513 0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "m126.7 99.3-7.8-54.1-7.7 54.1-20.8-23.7 10.7 31.6-31.5-10.7 23.6 20.8-54.1 7.7 54.1 7.7-23.6 20.8 31.5-10.7-10.7 31.6 20.8-23.7 7.7 54.1 7.8-54.1 20.7 23.7-10.6-31.6 31.5 10.7-23.6-20.8 54-7.7-54-7.7 23.6-20.8-31.5 10.7 10.6-31.6z"
    })]
  });
}, tM = function(i) {
  var n = i.title, a = m(i, pm);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "M0 85.333h512V426.67H0z"
    }), /* @__PURE__ */ d("g", {
      fill: "#D80027",
      children: [/* @__PURE__ */ e("path", {
        d: "M383.875 426.662 256 252.286l26.827 174.376zM133.565 85.33 256 252.286 230.314 85.33zm95.606 341.332L256 252.286 128.124 426.662zM0 85.33V212.9l256 39.386L28.333 85.33zm0 341.332h18.212L256 252.286 0 291.67zm256-174.376L512 212.9V85.33h-28.331zM281.686 85.33 256 252.286 378.434 85.33zM512 426.662V291.671l-256-39.385 237.787 174.376z"
      }), /* @__PURE__ */ e("circle", {
        cx: 256,
        cy: 252.29,
        r: 59.359
      })]
    }), /* @__PURE__ */ e("circle", {
      fill: "#FFDA44",
      cx: 256,
      cy: 252.29,
      r: 44.522
    })]
  });
}, eM = function(i) {
  var n = i.title, a = m(i, mm);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "M0 85.331h512v341.337H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#6DA544",
      d: "M0 85.331h170.663v341.337H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M341.337 85.331H512v341.337H341.337z"
    })]
  });
}, rM = function(i) {
  var n = i.title, a = m(i, gm);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#6DA544",
      d: "M0 85.337h512v341.326H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "M0 85.337h512v113.775H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M0 312.888h512v113.775H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M384 227.261h-97.783L256 134.265l-30.217 92.997H128l79.108 57.475-30.217 92.998L256 320.925l79.108 56.81-30.217-92.998L384 227.261z"
    })]
  });
}, nM = function(i) {
  var n = i.title, a = m(i, wm);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#095FAD",
      d: "M0 0h513v342H0z"
    }), /* @__PURE__ */ e("path", {
      d: "M342 0h171v342H342zM0 0h171v342H0z",
      fill: "#BE1229"
    }), /* @__PURE__ */ d("g", {
      fill: "#FFDA44",
      children: [/* @__PURE__ */ e("path", {
        d: "M108.3 166.3h14.8v74.2h-14.8zm-59.4 0h14.8v74.2H48.9z"
      }), /* @__PURE__ */ e("circle", {
        cx: 86,
        cy: 203.4,
        r: 14.8
      }), /* @__PURE__ */ e("path", {
        d: "M71.2 225.7h29.7v14.8H71.2zm0-59.4h29.7v14.8H71.2z"
      }), /* @__PURE__ */ e("circle", {
        cx: 86,
        cy: 144,
        r: 14.8
      }), /* @__PURE__ */ e("path", {
        d: "M76.3 123.9h19.5L86 108.3z"
      })]
    })]
  });
}, iM = function(i) {
  var n = i.title, a = m(i, zm);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#00745a",
      d: "M0 85.331h512v341.337H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M285.682 248.878c-4.19 0-8.166.836-11.861 2.164 2.023-4.509 3.379-9.527 3.379-14.885 0-21.201-21.201-37.101-21.201-37.101s-21.201 15.901-21.201 37.101c0 5.357 1.356 10.375 3.379 14.885-3.693-1.328-7.671-2.164-11.861-2.164-21.201 0-37.101 21.201-37.101 21.201s15.901 21.201 37.101 21.201c12.429 0 23.031-7.286 29.682-13.315 6.65 6.03 17.251 13.315 29.682 13.315 21.201 0 37.101-21.201 37.101-21.201s-15.899-21.201-37.099-21.201z"
    }), /* @__PURE__ */ e("path", {
      d: "m256 152.111 4.38 13.476h14.171l-11.464 8.332 4.376 13.476-11.463-8.33-11.463 8.33 4.376-13.476-11.464-8.332h14.171zm-53.888 23.572 8.425 7.585 9.818-5.667-4.61 10.355 8.423 7.588-11.274-1.185-4.611 10.355-2.358-11.088-11.275-1.185 9.818-5.669zm-39.45 39.449 11.09 2.358 5.668-9.818 1.186 11.274 11.089 2.358-10.357 4.61 1.186 11.274-7.587-8.423-10.357 4.61 5.669-9.818zm147.227-39.449-8.425 7.585-9.818-5.667 4.611 10.355-8.425 7.588 11.275-1.185 4.61 10.355 2.359-11.088 11.275-1.185-9.818-5.669zm39.449 39.449-11.089 2.358-5.669-9.818-1.186 11.274-11.088 2.358 10.357 4.61-1.185 11.274 7.586-8.423 10.357 4.61-5.669-9.818z",
      fill: "#FFDA44"
    }), /* @__PURE__ */ e("path", {
      d: "M256 350.642c16.84 0 32.363-5.619 44.816-15.073h-89.63c12.451 9.454 27.974 15.073 44.814 15.073zm-68.023-44.522a74.138 74.138 0 0 0 8.85 15.073h118.345a74.13 74.13 0 0 0 8.85-15.073H187.977z",
      fill: "#FFF"
    })]
  });
}, lM = function(i) {
  var n = i.title, a = m(i, xm);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 750 500",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#0071BC",
      d: "M0 0h750v500H0V0z"
    }), /* @__PURE__ */ d("g", {
      fill: "#FFF",
      stroke: "#000",
      strokeWidth: 1.9,
      children: [/* @__PURE__ */ e("circle", {
        cx: 375,
        cy: 245,
        r: 225,
        fill: "#fff"
      }), /* @__PURE__ */ e("circle", {
        cx: 375,
        cy: 245,
        r: 165,
        fill: "#0071BC"
      })]
    }), /* @__PURE__ */ d("g", {
      stroke: "#000",
      children: [/* @__PURE__ */ e("path", {
        fill: "#8C8A8C",
        strokeWidth: 1.9,
        d: "M444.7 450c.7 11-7.8 20-18.8 20H323.6c-11 0-19.5-9-19-20l16.7-325c.6-11 10-20 21-20h61.4c11 0 20.5 9 21.2 20l19.8 325z"
      }), /* @__PURE__ */ e("path", {
        fill: "#FFF",
        strokeWidth: 2,
        strokeLinejoin: "round",
        d: "m373 114 30 93h97l-78 56 29 92-78-56-78 57 30-93-79-57h97l30-92z"
      })]
    })]
  });
}, aM = function(i) {
  var n = i.title, a = m(i, Mm);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M0 0h513v342H0z"
    }), /* @__PURE__ */ d("g", {
      fill: "#fff",
      children: [/* @__PURE__ */ e("path", {
        d: "M512 148.4v44.5H278.3v148.4h-44.6V192.9H0v-44.5h233.7V0h44.6v148.4z"
      }), /* @__PURE__ */ e("path", {
        d: "M101 36.1c4.2-.2 8.3-.1 12.5.2 5.5.4 9.4 1.6 9.1.5-.5-1.8-.1-2.2-.8-1.8-1.3 1 .7-.2-7.4 4.4-11.8 6.7-16.9 11.8-14.3 21 2.3 8.1 8.2 10.3 22.3 12.5l1.9.3c5.6.9 8.1 1.4 9.8 2.2.4.2-.3-1-.1-1.7-.2.6-3.9 2.1-13.3 3.9l-4.7.9c-18.1 3.7-27.1 8.5-28.5 21-1.5 13.7 12.7 23.3 30.6 25.6 18.2 2.4 34.1-3.6 35.7-18.4 1-9.4-5.5-15-15.9-17.1-7-1.4-16.3-1.4-27.4-.3-12.4 1.3-24.7 3.4-36.9 6.3-3.6.7-5.9 4.2-5.2 7.8.7 3.6 4.2 5.9 7.8 5.2.2 0 .3-.1.5-.1 11.6-2.7 23.3-4.7 35.1-5.9 9.9-1 18-1 23.4.1 4.4.9 5.3 1.7 5.2 2.6-.5 5.1-8.9 8.2-20.7 6.7-11.6-1.5-19.5-6.8-19.1-11 .5-4.3 5.3-6.8 17.9-9.4l4.6-.9c15.5-3 21.1-5.3 23.5-13.2 1.9-6.5-1.3-11.6-7.2-14.2-3.2-1.4-6.3-2.1-13.2-3.1l-1.8-.3c-8-1.3-11.4-2.6-11.5-3-.1-.4 1.8-2.3 8.1-5.9l4.4-2.5c1.5-.8 2.9-1.8 4.3-2.7 4.6-3.4 7.2-7.1 5.8-12.3-1.9-7.3-9-9.5-20.9-10.4-4.7-.3-9.3-.4-14-.3l-2 .1c-3.7.2-6.5 3.4-6.3 7 .2 3.7 3.4 6.5 7 6.3l1.7-.1zm284 0c4.2-.2 8.3-.1 12.5.2 5.5.4 9.4 1.6 9.1.5-.5-1.8-.1-2.2-.8-1.8-1.3 1 .7-.2-7.4 4.4-11.8 6.7-16.9 11.8-14.3 21 2.3 8.1 8.2 10.3 22.3 12.5l1.9.3c5.6.9 8.1 1.4 9.8 2.2.4.2-.3-1-.1-1.7-.2.6-3.9 2.1-13.3 3.9l-4.7.9c-18.1 3.7-27.1 8.5-28.5 21-1.5 13.7 12.7 23.3 30.6 25.6 18.2 2.4 34.1-3.6 35.7-18.4 1-9.4-5.5-15-15.9-17.1-7-1.4-16.3-1.4-27.4-.3-12.4 1.3-24.7 3.4-36.9 6.3-3.6.7-5.9 4.2-5.2 7.8.7 3.6 4.2 5.9 7.8 5.2.2 0 .3-.1.5-.1 11.6-2.7 23.3-4.7 35.1-5.9 9.9-1 18-1 23.4.1 4.4.9 5.3 1.7 5.2 2.6-.5 5.1-8.9 8.2-20.7 6.7-11.6-1.5-19.5-6.8-19.1-11 .5-4.3 5.3-6.8 17.9-9.4l4.6-.9c15.5-3 21.1-5.3 23.5-13.2 1.9-6.5-1.3-11.6-7.2-14.2-3.2-1.4-6.3-2.1-13.2-3.1l-1.8-.3c-8-1.3-11.4-2.6-11.5-3-.1-.4 1.8-2.3 8.1-5.9l4.4-2.5c1.5-.8 2.9-1.8 4.3-2.7 4.6-3.4 7.2-7.1 5.8-12.3-1.9-7.3-9-9.5-20.9-10.4-4.7-.3-9.3-.4-14-.3l-2 .1c-3.7.2-6.5 3.4-6.3 7 .2 3.7 3.4 6.5 7 6.3l1.7-.1zm-5.4 199c4.2-.2 8.3-.1 12.5.2 5.5.4 9.4 1.6 9.1.5-.5-1.8-.1-2.2-.8-1.8-1.3 1 .7-.2-7.4 4.4-11.8 6.7-16.9 11.8-14.3 21 2.3 8.1 8.2 10.3 22.3 12.5l1.9.3c5.6.9 8.1 1.4 9.8 2.2.4.2-.3-1-.1-1.7-.2.6-3.9 2.1-13.3 3.9l-4.7.9c-18.1 3.7-27.1 8.5-28.5 21-1.5 13.7 12.7 23.3 30.6 25.6 18.2 2.4 34.1-3.6 35.7-18.4 1-9.4-5.5-15-15.9-17.1-7-1.4-16.3-1.4-27.4-.3-12.4 1.3-24.7 3.4-36.9 6.3-3.6.7-5.9 4.2-5.2 7.8.7 3.6 4.2 5.9 7.8 5.2.2 0 .3-.1.5-.1 11.6-2.7 23.3-4.7 35.1-5.9 9.9-1 18-1 23.4.1 4.4.9 5.3 1.7 5.2 2.6-.5 5.1-8.9 8.2-20.7 6.7-11.6-1.5-19.5-6.8-19.1-11 .5-4.3 5.3-6.8 17.9-9.4l4.6-.9c15.5-3 21.1-5.3 23.5-13.2 1.9-6.5-1.3-11.6-7.2-14.2-3.2-1.4-6.3-2.1-13.2-3.1l-1.8-.3c-8-1.3-11.4-2.6-11.5-3-.1-.4 1.8-2.3 8.1-5.9l4.4-2.5c1.5-.8 2.9-1.8 4.3-2.7 4.6-3.4 7.2-7.1 5.8-12.3-1.9-7.3-9-9.5-20.9-10.4-4.7-.3-9.3-.4-14-.3l-2 .1c-3.7.2-6.5 3.4-6.3 7s3.4 6.5 7 6.3l1.7-.1zm-278.6 0c4.2-.2 8.3-.1 12.5.2 5.5.4 9.4 1.6 9.1.5-.5-1.8-.1-2.2-.8-1.8-1.3 1 .7-.2-7.4 4.4-11.8 6.7-16.9 11.8-14.3 21 2.3 8.1 8.2 10.3 22.3 12.5l1.9.3c5.6.9 8.1 1.4 9.8 2.2.4.2-.3-1-.1-1.7-.2.6-3.9 2.1-13.3 3.9l-4.7.9c-18.1 3.7-27.1 8.5-28.5 21-1.5 13.7 12.7 23.3 30.6 25.6 18.2 2.4 34.1-3.6 35.7-18.4 1-9.4-5.5-15-15.9-17.1-7-1.4-16.3-1.4-27.4-.3-12.4 1.3-24.7 3.4-36.9 6.3-3.6.7-5.9 4.2-5.2 7.8s4.2 5.9 7.8 5.2c.2 0 .3-.1.5-.1 11.6-2.7 23.3-4.7 35.1-5.9 9.9-1 18-1 23.4.1 4.4.9 5.3 1.7 5.2 2.6-.5 5.1-8.9 8.2-20.7 6.7-11.6-1.5-19.5-6.8-19.1-11 .5-4.3 5.3-6.8 17.9-9.4l4.6-.9c15.5-3 21.1-5.3 23.5-13.2 1.9-6.5-1.3-11.6-7.2-14.2-3.2-1.4-6.3-2.1-13.2-3.1l-1.8-.3c-8-1.3-11.4-2.6-11.5-3-.1-.4 1.8-2.3 8.1-5.9l4.4-2.5c1.5-.8 2.9-1.8 4.3-2.7 4.6-3.4 7.2-7.1 5.8-12.3-1.9-7.3-9-9.5-20.9-10.4-4.7-.3-9.3-.4-14-.3l-2 .1c-3.7.2-6.5 3.4-6.3 7 .2 3.7 3.4 6.5 7 6.3l1.7-.1z"
      })]
    })]
  });
}, oM = function(i) {
  var n = i.title, a = m(i, Fm);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 100 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#006233",
      d: "M0 100h513v342H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#cd2a3e",
      d: "M0 100h513v46H0zm0 296h513v46H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#ffc400",
      d: "M256 298.851c-45.956 0-84.348-32.298-93.767-75.429A96.288 96.288 0 0 0 160 243.994c0 53.02 42.979 96 96 96s96-42.98 96-96c0-7.066-.785-13.942-2.233-20.572-9.419 43.131-47.811 75.429-93.767 75.429z"
    }), /* @__PURE__ */ e("path", {
      fill: "#ffc400",
      d: "m255.999 171.994 8.935 27.502h28.918l-23.394 16.996 8.936 27.503-23.395-16.998-23.394 16.998 8.937-27.503-23.394-16.996h28.915z"
    })]
  });
}, sM = function(i) {
  var n = i.title, a = m(i, ym);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#1B4991",
      d: "M0 0h513v342H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#00A2B8",
      stroke: "#FFF",
      strokeWidth: 3,
      d: "M318.2 106.7v106.5c0 51.9 67.8 67.8 67.8 67.8s67.8-15.9 67.8-67.8V106.7H318.2z"
    }), /* @__PURE__ */ e("path", {
      fill: "#A35023",
      d: "M319.7 212.7c0 50.8 66.3 66.3 66.3 66.3s66.3-15.6 66.3-66.3H319.7z"
    }), /* @__PURE__ */ e("path", {
      d: "M415.1 155.1h-19.4v-19.4h-19.4v19.4H357v19.4h19.3v58.1h19.4v-58.1h19.4z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M256 0v30.6l-45.2 25.1H256V115h-59.1l59.1 32.8v22.9h-26.7l-73.5-40.9v40.9h-55.6v-48.6l-87.5 48.6H0v-30.6L45.2 115H0V55.7h59.1L0 22.8V0h26.7l73.5 40.8V0h55.6v48.6L243.3 0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M144 0h-32v69.3H0v32h112v69.4h32v-69.4h112v-32H144z"
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M155.8 115 256 170.7v-15.8L184.2 115z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M155.8 115 256 170.7v-15.8L184.2 115z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M155.8 115 256 170.7v-15.8L184.2 115zm-84 0L0 154.9v15.8L100.2 115z"
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M100.2 55.6 0 0v15.7l71.8 39.9z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M100.2 55.6 0 0v15.7l71.8 39.9z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M100.2 55.6 0 0v15.7l71.8 39.9zm84 0L256 15.7V0L155.8 55.6z"
    })]
  });
}, cM = function(i) {
  var n = i.title, a = m(i, Hm);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 0h513v342H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#C31B28",
      d: "M256 0h256.5v342H256z"
    }), /* @__PURE__ */ e("path", {
      fill: "#ACABB1",
      stroke: "#C31B28",
      strokeWidth: 2,
      d: "M101.2 68.2V33H66v35.2H30.8v35.2H66v35.2h35.2v-35.2h35.2V68.2z"
    })]
  });
}, hM = function(i) {
  var n = i.title, a = m(i, _m);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#f7ce00",
      d: "M0 85.331h512v341.326H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#e32737",
      d: "M0 85.331h512v85.337H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#191f6a",
      d: "M0 170.657h512v85.337H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#00a04e",
      d: "M0 341.331h512v85.337H0z"
    })]
  });
}, uM = function(i) {
  var n = i.title, a = m(i, bm);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#d01920",
      d: "M0 85.331h512v341.333H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#017c3b",
      d: "M144.696 174.375h222.609v163.25H144.696z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M283.484 304.226c-26.637 0-48.232-21.594-48.232-48.232s21.594-48.232 48.232-48.232c8.306 0 16.12 2.1 22.943 5.797-10.703-10.467-25.341-16.927-41.494-16.927-32.784 0-59.362 26.577-59.362 59.362s26.578 59.362 59.362 59.362c16.154 0 30.791-6.461 41.494-16.927-6.822 3.698-14.636 5.797-22.943 5.797z"
    })]
  });
}, fM = function(i) {
  var n = i.title, a = m(i, Em);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#272727",
      d: "M0 0h512v114H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#e40112",
      d: "M0 114h512v114H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#07893f",
      d: "M0 228h512v114H0z"
    }), /* @__PURE__ */ e("circle", {
      fill: "#e40112",
      cx: 256,
      cy: 125,
      r: 95
    })]
  });
}, dM = function(i) {
  var n = i.title, a = m(i, Am);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#dc2339",
      d: "M342 0H0v341.3h513V0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#11865d",
      d: "M0 0h171v342H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M171 0h171v342H171z"
    }), /* @__PURE__ */ e("path", {
      fill: "#8C9157",
      d: "M195.8 171.2c0 21.6 11.5 41.7 30.3 52.5 5.8 3.4 13.2 1.4 16.6-4.4 3.4-5.8 1.4-13.2-4.4-16.6-11.3-6.5-18.2-18.5-18.2-31.5 0-6.7-5.4-12.1-12.1-12.1-6.7 0-12.2 5.4-12.2 12.1zm93.4 51.1c17.5-11.1 28-30.4 28-51.1 0-6.7-5.4-12.1-12.1-12.1s-12.1 5.4-12.1 12.1c0 12.4-6.3 24-16.8 30.7-5.7 3.5-7.5 10.9-4.1 16.7s10.9 7.5 16.7 4.1c0-.2.2-.3.4-.4z"
    }), /* @__PURE__ */ e("ellipse", {
      fill: "#C59262",
      cx: 256.5,
      cy: 159.1,
      rx: 24.3,
      ry: 36.4
    })]
  });
}, vM = function(i) {
  var n = i.title, a = m(i, Sm);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 0h513v342H0z"
    }), /* @__PURE__ */ e("path", {
      d: "M0 0h513v24.4H0zm0 48.9h513v24.4H0zm0 48.8h513v24.4H0zm0 48.9h513V171H0zm0 48.8h513v24.4H0zm0 48.9h513v24.4H0zm0 48.8h513v24.4H0z",
      fill: "#c00"
    }), /* @__PURE__ */ e("path", {
      fill: "#006",
      d: "M0 0h256.5v195.4H0z"
    }), /* @__PURE__ */ e("path", {
      d: "M153.3 42.1C122.6 30.7 88.5 46.3 77.1 77s4.2 64.8 34.9 76.2c13.3 5 28 5 41.4 0-30.7 24.5-75.4 19.6-100-11.1s-19.6-75.4 11.1-100c26-20.7 62.9-20.7 88.8 0zm26.7 75-20.6 23.3 5.4-30.6-31-1.6 27.3-14.9L143 68l28.6 12 8.4-29.9 8.4 29.9L217 68l-18 25.4 27.3 14.9-31 1.6 5.4 30.6-20.7-23.4z",
      fill: "#fc0"
    })]
  });
}, pM = function(i) {
  var n = i.title, a = m(i, Dm);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 85.333h513v342H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#f4d900",
      d: "M0 323.333h513v104H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#006d66",
      d: "M0 85.333h513v104H0z"
    }), /* @__PURE__ */ e("path", {
      d: "M0 204.333h513v104H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#cb0f31",
      d: "M256 256.006 0 426.668V85.331z"
    }), /* @__PURE__ */ e("path", {
      fill: "#f4d900",
      d: "m83.477 195.132 15.107 46.498h48.894l-39.554 28.739 15.107 46.499-39.554-28.738-39.555 28.738 15.11-46.499-39.554-28.739H68.37z"
    })]
  });
}, mM = function(i) {
  var n = i.title, a = m(i, Cm);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#496E2D",
      d: "M0 85.337h512v341.326H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M0 426.663V85.337h512"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M512 152.222V85.337H411.67L0 359.778v66.885h100.33z"
    }), /* @__PURE__ */ e("path", {
      fill: "#A2001D",
      d: "M512 85.337v40.125L60.193 426.663H0v-40.125L451.807 85.337z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "m187.737 189.212-22.741 10.696 12.11 22.024-24.693-4.724-3.129 24.945-17.199-18.347-17.2 18.347-3.129-24.945-24.693 4.723 12.109-22.023-22.739-10.696 22.74-10.697-12.11-22.022 24.693 4.722 3.13-24.944 17.199 18.347 17.2-18.347 3.128 24.944 24.693-4.722-12.108 22.024z"
    })]
  });
}, gM = function(i) {
  var n = i.title, a = m(i, Tm);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 640 426.7",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#009543",
      d: "M0 293h640v133.7H0V293z"
    }), /* @__PURE__ */ e("path", {
      fill: "#ED4135",
      d: "M0 132h640v161.3H0V132z"
    }), /* @__PURE__ */ e("path", {
      fill: "#0035AD",
      d: "M0 0h640v133.3H0V0z"
    }), /* @__PURE__ */ e("circle", {
      fill: "#FAE600",
      stroke: "#000",
      strokeWidth: 5.3,
      cx: 240,
      cy: 213.3,
      r: 157.3
    }), /* @__PURE__ */ e("path", {
      d: "m307.9 354.5-31.8 12-36.1 4.2-37.8-2.4-35.9-15.5s28.6-29.3 40.7-33.5c8.6-3 22.4-3.7 22.4-3.7V122l-.3-66H246l-.5 67.5v191.7s15.3 1.2 22.1 4.1c11.3 4.9 40.3 35.2 40.3 35.2z"
    }), /* @__PURE__ */ e("path", {
      d: "m212.727 102.375 42.955-21.418 5.577 11.187-42.955 21.417z"
    }), /* @__PURE__ */ e("ellipse", {
      cx: 237.8,
      cy: 280.5,
      rx: 16.8,
      ry: 26.5
    }), /* @__PURE__ */ e("circle", {
      cx: 237.4,
      cy: 143.4,
      r: 20.9
    }), /* @__PURE__ */ e("ellipse", {
      cx: 238.4,
      cy: 211.1,
      rx: 19.9,
      ry: 12.1
    }), /* @__PURE__ */ e("path", {
      d: "M213.8 177h47v10h-47zm0 57h47v10h-47z"
    })]
  });
}, wM = function(i) {
  var n = i.title, a = m(i, Bm);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 85.337h512v341.326H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#e05206",
      d: "M0 85.337h512v113.775H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#0db02b",
      d: "M0 312.888h512v113.775H0z"
    }), /* @__PURE__ */ e("circle", {
      fill: "#e05206",
      cx: 256,
      cy: 256,
      r: 32
    })]
  });
}, zM = function(i) {
  var n = i.title, a = m(i, Lm);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.5 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 85.5h513v342H0z"
    }), /* @__PURE__ */ e("path", {
      d: "M0 85.5h171v342H0zm342 0h171v342H342zm-38 226.495-48-152.001-48 152.001h36v39.999h24v-39.999z",
      fill: "#007b23"
    })]
  });
}, xM = function(i) {
  var n = i.title, a = m(i, Om);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.5 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 85.5h513v342H0z"
    }), /* @__PURE__ */ e("path", {
      d: "M0 85.5h171v342H0zm342 0h171v342H342z",
      fill: "#007b23"
    })]
  });
}, MM = function(i) {
  var n = i.title, a = m(i, Rm);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 85.337h512v341.326H0z"
    }), /* @__PURE__ */ e("path", {
      d: "M0 85.337h512v113.775H0zm0 227.551h512v113.775H0z",
      fill: "#338AF3"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "M256 214.447c-22.949 0-41.553 18.603-41.553 41.553S233.05 297.553 256 297.553c22.949 0 41.553-18.603 41.553-41.553S278.949 214.447 256 214.447zm0 65.298c-13.114 0-23.745-10.631-23.745-23.745s10.631-23.745 23.745-23.745 23.745 10.631 23.745 23.745-10.631 23.745-23.745 23.745z"
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M276.563 261.936 256 256l-20.563 5.936-6.855 11.873h54.836z"
    }), /* @__PURE__ */ e("path", {
      fill: "#338AF3",
      d: "m256 226.32-13.709 23.744L256 256l13.709-5.936z"
    }), /* @__PURE__ */ e("path", {
      fill: "#6DA544",
      d: "M235.437 261.936h41.126l-6.854-11.872h-27.418z"
    })]
  });
}, FM = function(i) {
  var n = i.title, a = m(i, Im);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.5 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 85.5h513v342H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#cd1f2a",
      d: "M0 85.5h513v114H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#1d4185",
      d: "M0 312h513v114H0z"
    })]
  });
}, yM = function(i) {
  var n = i.title, a = m(i, Pm);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M0 85.334h512v341.337H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M512 295.883H202.195v130.783h-79.76V295.883H0v-79.772h122.435V85.329h79.76v130.782H512v61.218z"
    }), /* @__PURE__ */ e("path", {
      fill: "#2E52B2",
      d: "M512 234.666v42.663H183.652v149.337h-42.674V277.329H0v-42.663h140.978V85.329h42.674v149.337z"
    })]
  });
}, HM = function(i) {
  var n = i.title, a = m(i, Vm);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 85.337h512v341.326H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M0 426.663V85.337l280.419 174.75H87.61l183.576 166.576z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M244.769 249.888 10.199 103.71v312.754h234.57L61.193 249.888z"
    }), /* @__PURE__ */ d("g", {
      fill: "#FFF",
      children: [/* @__PURE__ */ e("path", {
        d: "m98.003 324.433-14.589-6.863 7.77-14.13-15.844 3.03-2.008-16.005-11.035 11.772-11.036-11.772-2.008 16.005-15.843-3.031 7.77 14.131-14.591 6.863 14.591 6.862-7.77 14.13 15.844-3.029 2.007 16.004 11.036-11.772L73.332 358.4l2.008-16.004 15.843 3.03-7.769-14.13zm-9.735-132.771-10.612-4.991 5.651-10.278-11.523 2.205-1.461-11.641-8.026 8.561-8.026-8.561-1.46 11.641-11.525-2.205 5.652 10.278-10.613 4.991 25.972 5.194z"
      }), /* @__PURE__ */ e("path", {
        d: "M93.462 191.662c0 17.212-13.953 31.165-31.165 31.165s-31.165-13.953-31.165-31.165"
      })]
    })]
  });
}, _M = function(i) {
  var n = i.title, a = m(i, Nm);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M0 85.337h512v341.326H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "M0 239.994h512v32H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "m174.802 341.329-19.124 8.996 10.184 18.521-20.767-3.973-2.631 20.978L128 370.422l-14.465 15.429-2.63-20.978-20.767 3.973 10.183-18.521-19.123-8.996 19.124-8.995-10.184-18.52 20.766 3.971 2.632-20.978L128 312.236l14.465-15.429 2.63 20.978 20.767-3.971-10.183 18.521z"
    })]
  });
}, bM = function(i) {
  var n = i.title, a = m(i, km);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "M0 85.334h512v341.337H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 85.334h256v170.663H0z"
    }), /* @__PURE__ */ d("g", {
      fill: "#D80027",
      children: [/* @__PURE__ */ e("path", {
        d: "M144 85.33h-32v69.333H0v32h112v69.334h32v-69.334h112v-32H144z"
      }), /* @__PURE__ */ e("path", {
        d: "M0 85.329v15.083l57.377 38.251H80z"
      })]
    }), /* @__PURE__ */ e("path", {
      d: "M0 107.951v30.712h46.069zm96-22.62v48.913L22.628 85.331z",
      fill: "#2E52B2"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M256 85.329v15.083l-57.377 38.251H176z"
    }), /* @__PURE__ */ e("path", {
      d: "M256 107.951v30.712h-46.069zm-96-22.62v48.913l73.372-48.913z",
      fill: "#2E52B2"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M0 85.329v15.083l57.377 38.251H80z"
    }), /* @__PURE__ */ e("path", {
      d: "M0 107.951v30.712h46.069zm96-22.62v48.913L22.628 85.331z",
      fill: "#2E52B2"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M256 85.329v15.083l-57.377 38.251H176z"
    }), /* @__PURE__ */ e("path", {
      d: "M256 107.951v30.712h-46.069zm-96-22.62v48.913l73.372-48.913z",
      fill: "#2E52B2"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M0 255.997v-15.082l57.377-38.252H80z"
    }), /* @__PURE__ */ e("path", {
      d: "M0 233.376v-30.713h46.069zm96 22.618v-48.912l-73.372 48.912z",
      fill: "#2E52B2"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M256 255.997v-15.082l-57.377-38.252H176z"
    }), /* @__PURE__ */ d("g", {
      fill: "#2E52B2",
      children: [/* @__PURE__ */ e("path", {
        d: "M256 233.376v-30.713h-46.069zm-96 22.618v-48.912l73.372 48.912z"
      }), /* @__PURE__ */ e("circle", {
        cx: 128,
        cy: 170.66,
        r: 22.627
      })]
    }), /* @__PURE__ */ e("path", {
      d: "m128 154.663 3.97 12.222h12.854l-10.398 7.556 3.971 12.222L128 179.109l-10.398 7.554 3.972-12.222-10.398-7.556h12.853zm0 65.14 2.364 7.278h7.653l-6.19 4.498 2.364 7.278-6.191-4.498-6.191 4.498 2.364-7.278-6.19-4.498h7.652zm0-117.334 2.364 7.278h7.653l-6.19 4.498 2.364 7.278-6.191-4.498-6.191 4.498 2.364-7.278-6.19-4.498h7.652zm69.931 58.667 2.365 7.277h7.653l-6.192 4.499 2.365 7.279-6.191-4.498-6.191 4.498 2.365-7.279-6.191-4.499h7.652zm-139.862 0 2.364 7.277h7.653l-6.191 4.499 2.364 7.279-6.19-4.498-6.191 4.498 2.365-7.279-6.192-4.499h7.653z",
      fill: "#FFDA44"
    })]
  });
}, EM = function(i) {
  var n = i.title, a = m(i, $m);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M0 85.334h512v341.337H0z"
    }), /* @__PURE__ */ e("path", {
      d: "m425.301 233.745 3.388 10.428h10.963l-8.87 6.444 3.388 10.427-8.869-6.444-8.871 6.444 3.388-10.427-8.87-6.444h10.963zm-39.194 75.072 5.083 15.642h16.445l-13.305 9.667 5.082 15.64-13.305-9.667-13.305 9.667 5.083-15.64-13.305-9.667h16.445zm1.481-122.846 4.236 13.036h13.704l-11.088 8.054 4.235 13.034-11.087-8.056-11.088 8.056 4.235-13.034-11.087-8.054h13.704zm-37.712 47.32 5.082 15.641h16.446l-13.306 9.666 5.084 15.641-13.306-9.666-13.305 9.666 5.082-15.641-13.305-9.666h16.445z",
      fill: "#D80027"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M256.003 85.329v30.564l-45.178 25.088h45.178v59.359H196.89l59.113 32.846v22.806h-26.69l-73.484-40.826v40.826h-55.652v-48.573l-87.429 48.573H.003v-30.553l45.168-25.099H.003v-59.359h59.103L.003 108.147V85.329h26.68l73.494 40.838V85.329h55.652v48.573l87.43-48.573z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M144 85.33h-32v69.334H0v32h112v69.334h32v-69.334h112v-32H144z"
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M155.826 200.344 256 255.998v-15.739l-71.847-39.915z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M155.826 200.344 256 255.998v-15.739l-71.847-39.915z"
    }), /* @__PURE__ */ e("path", {
      d: "M155.826 200.344 256 255.998v-15.739l-71.847-39.915zm-83.98 0L0 240.259v15.739l100.174-55.654z",
      fill: "#D80027"
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M100.174 140.983 0 85.33v15.738l71.847 39.915z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M100.174 140.983 0 85.33v15.738l71.847 39.915z"
    }), /* @__PURE__ */ e("path", {
      d: "M100.174 140.983 0 85.33v15.738l71.847 39.915zm83.98 0L256 101.068V85.33l-100.174 55.653z",
      fill: "#D80027"
    })]
  });
}, AM = function(i) {
  var n = i.title, a = m(i, Wm);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M0 0h513v342H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M138 0h377v114H138z"
    }), /* @__PURE__ */ e("path", {
      fill: "#4A7C3A",
      d: "M138 230h377v114H138z"
    }), /* @__PURE__ */ d("g", {
      fill: "none",
      stroke: "#FFF",
      strokeWidth: 10,
      strokeMiterlimit: 2,
      children: [/* @__PURE__ */ e("path", {
        d: "M40.3 35.2s37.1 48 50.8 54.5c13.7 6.5 17.1 5.7 17.1 5.7"
      }), /* @__PURE__ */ e("path", {
        d: "M100 35.2S62.9 80.6 53.3 87.6c-9.6 7-18.7 7.8-18.7 7.8m17.1-30.1h37.9M70.7 35.2v30.1"
      })]
    })]
  });
}, SM = function(i) {
  var n = i.title, a = m(i, Um);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 85.337h512v341.326H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M256 256v170.663H0V256h256z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M512 85.337V256H256V85.337h256z"
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "m128 123.034 11.824 36.389h38.263l-30.955 22.491 11.823 36.389L128 195.813l-30.955 22.49 11.823-36.389-30.955-22.491h38.263z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "m384 293.697 11.824 36.389h38.263l-30.955 22.491 11.823 36.389L384 366.476l-30.955 22.49 11.823-36.389-30.955-22.491h38.263z"
    })]
  });
}, DM = function(i) {
  var n = i.title, a = m(i, Gm);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 85.331h512v341.326H0z"
    }), /* @__PURE__ */ e("path", {
      d: "M0 85.331h170.663v341.337H0zm341.337 0H512v341.337H341.337z",
      fill: "#D80027"
    })]
  });
}, CM = function(i) {
  var n = i.title, a = m(i, Km);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 85.337h512v341.326H0z"
    }), /* @__PURE__ */ e("path", {
      d: "M0 85.337h512v113.775H0zm0 227.551h512v113.775H0z",
      fill: "#D80027"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "M293.991 256c0 20.982-17.01 33.243-37.992 33.243S218.008 276.982 218.008 256s17.01-37.992 37.992-37.992 37.991 17.01 37.991 37.992z"
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M293.991 256c0 20.982-17.01 37.992-37.992 37.992s-37.992-17.01-37.992-37.992"
    }), /* @__PURE__ */ e("path", {
      d: "M232.259 246.506h9.498v19h-9.498zm37.988 0h9.498v19h-9.498zm-19-14.247h9.498v33.243h-9.498z",
      fill: "#D80027"
    })]
  });
}, TM = function(i) {
  var n = i.title, a = m(i, Ym);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      d: "M0 85.333h512V426.67H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#A2001D",
      d: "M0 85.33h512v341.332"
    }), /* @__PURE__ */ e("path", {
      d: "m204.631 326.488 2.762 8.504h8.941l-7.233 5.255 2.763 8.502-7.233-5.254-7.233 5.254 2.762-8.502-7.233-5.255h8.94zm-22.834-81.622 4.605 14.172h14.901l-12.056 8.757 4.605 14.172-12.055-8.759-12.055 8.759 4.606-14.172-12.056-8.757h14.901zm0 103.883 4.604 14.173h14.902l-12.057 8.757 4.606 14.173-12.055-8.759-12.055 8.759 4.604-14.173-12.054-8.757h14.899zm43.566-66.782 4.606 14.172h14.901l-12.056 8.758 4.605 14.172-12.056-8.759-12.054 8.759 4.606-14.172-12.056-8.758h14.901zm-87.133 0 4.606 14.172h14.899l-12.054 8.758 4.603 14.172-12.054-8.759-12.055 8.759 4.605-14.172-12.055-8.758h14.9z",
      fill: "#FFF"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "M376.526 204.163c-7.628-7.628-17.538-12.133-28.189-12.908l31.88-24.795c-12.698-12.698-29.714-18.431-46.319-17.218a44.31 44.31 0 0 0-11.396-19.511l-12.593 25.186a18.47 18.47 0 0 0-3.148-4.197c-7.245-7.245-18.991-7.244-26.234 0s-7.245 18.99 0 26.234a18.536 18.536 0 0 0 4.197 3.148l-25.186 12.593a44.303 44.303 0 0 0 19.519 11.399c-1.217 16.606 4.511 33.619 17.209 46.317L324.12 214.6a11.053 11.053 0 0 1 7.807-3.202c2.973 0 5.768 1.158 7.87 3.26a11.055 11.055 0 0 1 3.26 7.87c0 2.974-1.158 5.768-3.26 7.87l10.494 10.494c4.905-4.905 7.607-11.428 7.607-18.364 0-5.675-1.81-11.071-5.153-15.534a29.492 29.492 0 0 1 13.288 7.662c11.573 11.572 11.573 30.403 0 41.975l10.494 10.494c8.409-8.409 13.039-19.59 13.039-31.481-.001-11.892-4.632-23.072-13.04-31.481z"
    })]
  });
}, BM = function(i) {
  var n = i.title, a = m(i, qm);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 85.337h512v341.326H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M512 85.337V256H256L0 85.337z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M512 256v170.663H0L256 256z"
    }), /* @__PURE__ */ e("path", {
      d: "m161.908 256-27.288-12.835 14.532-26.428-29.632 5.668-3.755-29.933-20.64 22.015-20.639-22.015-3.755 29.933-29.631-5.669 14.531 26.428L28.343 256l27.288 12.835L41.1 295.263l29.633-5.668 3.753 29.933 20.639-22.015 20.64 22.015 3.755-29.933 29.631 5.669-14.532-26.427zM21.789 117.607l9.081 12.696 14.879-4.714-9.268 12.56 9.081 12.694-14.809-4.932-9.268 12.559.117-15.608-14.809-4.934 14.88-4.712zm0 235.923 9.081 12.696 14.879-4.714-9.268 12.56 9.081 12.695-14.809-4.933-9.268 12.558.117-15.607-14.809-4.934 14.88-4.712zm188.606-117.961-9.081 12.695-14.879-4.713 9.268 12.559-9.081 12.696 14.809-4.933 9.268 12.558-.117-15.607 14.809-4.934-14.88-4.713z",
      fill: "#FFDA44"
    })]
  });
}, LM = function(i) {
  var n = i.title, a = m(i, jm);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ d("g", {
      fill: "#FFF",
      children: [/* @__PURE__ */ e("path", {
        d: "m393.508 170.516 17.512 18.875 23.363-10.821-12.541 22.487 17.513 18.876-25.263-4.978-12.539 22.488-3.073-25.564-25.263-4.978 23.363-10.82z"
      }), /* @__PURE__ */ e("path", {
        d: "M0 85.343h512v341.326H0z"
      })]
    }), /* @__PURE__ */ e("path", {
      fill: "#01411c",
      d: "M128 85.331h384v341.337H128z"
    }), /* @__PURE__ */ e("path", {
      d: "M361.909 298.793c-31.037 22.426-74.378 15.446-96.804-15.592-22.427-31.038-15.446-74.379 15.593-96.804 9.677-6.992 20.55-11.125 31.613-12.563-21.283-3.183-43.777 1.613-62.598 15.211-38.2 27.602-46.792 80.944-19.191 119.145 27.601 38.199 80.944 46.792 119.145 19.189 18.82-13.598 30.436-33.448 34.096-54.655-4.839 10.05-12.176 19.076-21.854 26.069zm-1.329-125.904 17.484 18.842 23.322-10.802-12.519 22.447 17.483 18.844-25.219-4.968-12.519 22.45-3.067-25.521-25.22-4.969 23.323-10.802z",
      fill: "#FFF"
    })]
  });
}, OM = function(i) {
  var n = i.title, a = m(i, Zm);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ d("g", {
      fill: "#FFF",
      children: [/* @__PURE__ */ e("path", {
        d: "M0 85.337h512v341.326H0z"
      }), /* @__PURE__ */ e("path", {
        d: "M0 85.337h512V256H0z"
      })]
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M0 256h512v170.663H0z"
    })]
  });
}, RM = function(i) {
  var n = i.title, a = m(i, Jm);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 26.666 640 426.666",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ d("g", {
      fillRule: "evenodd",
      strokeWidth: "1pt",
      children: [/* @__PURE__ */ e("path", {
        fill: "#fff",
        d: "M0 0h640v480H0z"
      }), /* @__PURE__ */ e("path", {
        fill: "#00267f",
        d: "M0 0h213.3v480H0z"
      }), /* @__PURE__ */ e("path", {
        fill: "#f31830",
        d: "M426.7 0H640v480H426.7z"
      })]
    })]
  });
}, IM = function(i) {
  var n = i.title, a = m(i, Xm);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M0 85.333h512V426.67H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#ACABB1",
      d: "M400.696 219.822 384 225.387l-16.696-5.565-5.565-13.913 5.565-13.913h33.392l-5.566 13.913z"
    }), /* @__PURE__ */ e("path", {
      fill: "#338AF3",
      d: "M345.043 219.822v61.217c0 29.821 38.957 38.957 38.957 38.957s38.957-9.137 38.957-38.957v-61.217h-77.914z"
    }), /* @__PURE__ */ e("path", {
      fill: "#6DA544",
      d: "M348.555 295.541C358.131 313.927 384 319.996 384 319.996s25.869-6.069 35.445-24.455L384 236.518l-35.445 59.023z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "M422.957 280.421 384 219.822l-38.957 60.599v.618c0 5.518 1.337 10.328 3.512 14.503L384 240.405l35.445 55.137c2.175-4.175 3.512-8.983 3.512-14.503v-.618z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M256 85.333v30.553l-45.167 25.099H256v59.359h-59.103L256 233.179v22.817h-26.68l-73.494-40.826v40.826h-55.652v-48.573l-87.43 48.573H0v-30.554l45.167-25.098H0v-59.359h59.103L0 108.139V85.333h26.68l73.494 40.825V85.333h55.652v48.572l87.43-48.572z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M144 85.33h-32v69.332H0v32h112v69.334h32v-69.334h112v-32H144z"
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M155.826 200.344 256 255.996v-15.737l-71.847-39.915z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M155.826 200.344 256 255.996v-15.737l-71.847-39.915z"
    }), /* @__PURE__ */ e("path", {
      d: "M155.826 200.344 256 255.996v-15.737l-71.847-39.915zm-83.98 0L0 240.259v15.737l100.174-55.652z",
      fill: "#D80027"
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M100.174 140.982 0 85.33v15.737l71.847 39.915z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M100.174 140.982 0 85.33v15.737l71.847 39.915z"
    }), /* @__PURE__ */ e("path", {
      d: "M100.174 140.982 0 85.33v15.737l71.847 39.915zm83.98 0L256 101.067V85.33l-100.174 55.652z",
      fill: "#D80027"
    })]
  });
}, PM = function(i) {
  var n = i.title, a = m(i, Qm);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 85.337h512v341.326H0z"
    }), /* @__PURE__ */ e("path", {
      d: "M0 85.337h512V153.6H0zm0 136.526h512v68.263H0zM0 358.4h512v68.263H0z",
      fill: "#D80027"
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M256 256.006 0 426.668V85.331z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "m83.477 195.132 15.107 46.498h48.894l-39.554 28.739 15.107 46.499-39.554-28.738-39.555 28.738 15.11-46.499-39.554-28.739H68.37z"
    })]
  });
}, VM = function(i) {
  var n = i.title, a = m(i, tg);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 85.337h512v341.326H0z"
    }), /* @__PURE__ */ e("path", {
      d: "M0 85.337h512v113.775H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#268024",
      d: "M0 312.888h512v113.775H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#e4312b",
      d: "M256 256.006 0 426.668V85.331z"
    })]
  });
}, NM = function(i) {
  var n = i.title, a = m(i, eg);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M0 85.337h512v341.326H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#6DA544",
      d: "M196.641 85.337v341.326H0V85.337z"
    }), /* @__PURE__ */ e("circle", {
      fill: "#FFDA44",
      cx: 196.641,
      cy: 256,
      r: 64
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M160.638 224v40.001c0 19.882 16.118 36 36 36s36-16.118 36-36V224h-72z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M196.638 276c-6.617 0-12-5.383-12-12v-16h24.001v16c-.001 6.616-5.385 12-12.001 12z"
    })]
  });
}, kM = function(i) {
  var n = i.title, a = m(i, rg);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#338AF3",
      d: "M0 85.331h512v341.337H0z"
    }), /* @__PURE__ */ e("circle", {
      fill: "#FFDA44",
      cx: 218.902,
      cy: 255.994,
      r: 74.207
    })]
  });
}, $M = function(i) {
  var n = i.title, a = m(i, ng);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 85.337h512v341.326H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M0 85.337h512v113.775H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M0 312.888h512v113.775H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#6DA544",
      d: "m289.579 216.738-12.592 12.592c5.37 5.372 8.693 12.792 8.693 20.988 0 16.392-13.289 29.68-29.68 29.68-16.392 0-29.68-13.289-29.68-29.68 0-8.195 3.322-15.616 8.693-20.988l-12.592-12.592c-8.594 8.594-13.91 20.466-13.91 33.579 0 26.228 21.261 47.489 47.489 47.489s47.489-21.261 47.489-47.489c0-13.112-5.316-24.985-13.91-33.579z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "m256 232.51 4.421 13.605h14.304l-11.573 8.408 4.421 13.604L256 259.719l-11.573 8.408 4.421-13.604-11.573-8.408h14.304z"
    })]
  });
}, WM = function(i) {
  var n = i.title, a = m(i, ig);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#751A46",
      d: "M0 0h512v342H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 0v342h150.3l37.7-19.6-37.7-18.9 37.7-19-37.7-18.9 37.7-19-37.7-19 37.7-18.9-37.7-19 37.7-19-37.7-18.9 37.7-19-37.7-18.9 37.7-19-37.7-19L188 57l-37.7-19L188 19.1 150.3 0z"
    })]
  });
}, UM = function(i) {
  var n = i.title, a = m(i, lg);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 26.666 640 426.666",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ d("g", {
      fillRule: "evenodd",
      strokeWidth: "1pt",
      children: [/* @__PURE__ */ e("path", {
        fill: "#fff",
        d: "M0 0h640v480H0z"
      }), /* @__PURE__ */ e("path", {
        fill: "#00267f",
        d: "M0 0h213.3v480H0z"
      }), /* @__PURE__ */ e("path", {
        fill: "#f31830",
        d: "M426.7 0H640v480H426.7z"
      })]
    })]
  });
}, GM = function(i) {
  var n = i.title, a = m(i, ag);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "M0 85.331h512v341.326H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M0 85.331h170.663v341.337H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M341.337 85.331H512v341.337H341.337z"
    })]
  });
}, KM = function(i) {
  var n = i.title, a = m(i, og);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M0 85.331h512v341.337H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M0 85.331h512v113.775H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 312.882h512v113.775H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M129.468 181.793v85.136c0 48.429 63.267 63.267 63.267 63.267S256 315.356 256 266.929v-85.136H129.468z"
    }), /* @__PURE__ */ e("path", {
      d: "M155.634 196.634h74.201v-29.681l-14.841 7.42-22.261-22.26-22.259 22.26-14.84-7.42zm85.526 82.148-48.231-48.231-48.231 48.231 15.741 15.74 32.49-32.49 32.49 32.49z",
      fill: "#FFDA44"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M241.16 233.734h-22.504a14.74 14.74 0 0 0 2.001-7.418c0-8.196-6.645-14.84-14.84-14.84-5.663 0-10.581 3.172-13.083 7.836-2.502-4.663-7.421-7.836-13.083-7.836-8.195 0-14.84 6.644-14.84 14.84 0 2.706.736 5.235 2.001 7.418h-22.114c0 8.196 7.139 14.84 15.334 14.84h-.494c0 8.196 6.644 14.84 14.84 14.84 0 7.257 5.211 13.286 12.094 14.576l-11.694 26.401a48.075 48.075 0 0 0 18.149 3.544 48.079 48.079 0 0 0 18.149-3.544l-11.694-26.401c6.883-1.29 12.094-7.319 12.094-14.576 8.196 0 14.84-6.644 14.84-14.84h-.494c8.199 0 15.338-6.644 15.338-14.84z"
    })]
  });
}, YM = function(i) {
  var n = i.title, a = m(i, sg);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 85.33v341.332h512V85.33z"
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M0 85.333h512V426.67H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 85.333h512v113.775H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M0 312.884h512v113.775H0z"
    })]
  });
}, qM = function(i) {
  var n = i.title, a = m(i, cg);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#338AF3",
      d: "M0 85.331h512v341.337H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "M0 255.994h512v81.619H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#496E2D",
      d: "M0 337.614h512v89.043H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "m278.261 185.209 20.844 9.804-11.099 20.186 22.632-4.33 2.868 22.865 15.765-16.816 15.766 16.816 2.867-22.865 22.633 4.33-11.099-20.186 20.843-9.804-20.844-9.805 11.1-20.185-22.633 4.329-2.868-22.864-15.765 16.816-15.766-16.816-2.867 22.864-22.634-4.329 11.1 20.187z"
    })]
  });
}, jM = function(i) {
  var n = i.title, a = m(i, hg);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#055e1c",
      d: "M0 85.333h512v341.333H0z"
    }), /* @__PURE__ */ d("g", {
      fill: "#FFF",
      children: [/* @__PURE__ */ e("path", {
        d: "M183.548 289.386c0 12.295 9.731 22.261 21.736 22.261h65.208c0 10.244 8.11 18.551 18.114 18.551h21.736c10.004 0 18.114-8.306 18.114-18.551v-22.261H183.548zm146.716-107.595v51.942c0 8.183-6.5 14.84-14.491 14.84v22.261c19.976 0 36.226-16.643 36.226-37.101v-51.942h-21.735zm-155.773 51.943c0 8.183-6.5 14.84-14.491 14.84v22.261c19.976 0 36.226-16.643 36.226-37.101v-51.942H174.49v51.942z"
      }), /* @__PURE__ */ e("path", {
        d: "M297.661 181.788h21.736v51.942h-21.736zm-32.604 29.685c0 2.046-1.625 3.71-3.623 3.71-1.998 0-3.623-1.664-3.623-3.71v-29.682h-21.736v29.682c0 2.046-1.625 3.71-3.623 3.71s-3.623-1.664-3.623-3.71v-29.682h-21.736v29.682c0 14.32 11.376 25.971 25.358 25.971 5.385 0 10.38-1.733 14.491-4.677 4.11 2.944 9.106 4.677 14.491 4.677 1.084 0 2.15-.078 3.2-.215-1.54 6.499-7.255 11.345-14.068 11.345v22.261c19.976 0 36.226-16.643 36.226-37.101v-51.943h-21.736l.002 29.682z"
      }), /* @__PURE__ */ e("path", {
        d: "M207.093 248.57h32.601v22.261h-32.601z"
      })]
    })]
  });
}, ZM = function(i) {
  var n = i.title, a = m(i, ug);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#496E2D",
      d: "M0 85.334h512v341.337H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M0 426.663V85.329h512"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "M0 396.494v30.169h45.255L512 115.499v-30.17h-45.255z"
    }), /* @__PURE__ */ e("path", {
      d: "m85.688 108.787 5.12 15.756h16.566l-13.403 9.737 5.12 15.757-13.403-9.738-13.405 9.738 5.12-15.757L64 124.543h16.567zm84.624 0 5.121 15.756H192l-13.403 9.737 5.12 15.757-13.405-9.738-13.403 9.738 5.12-15.757-13.403-9.737h16.566zm-84.624 82.502 5.12 15.756h16.566l-13.403 9.738 5.12 15.757-13.403-9.739-13.405 9.739 5.12-15.757L64 207.045h16.567zm84.624 0 5.121 15.756H192l-13.403 9.738 5.12 15.757-13.405-9.739-13.403 9.739 5.12-15.757-13.403-9.738h16.566zM128 150.037l5.12 15.756h16.568l-13.405 9.738 5.12 15.758L128 181.55l-13.403 9.739 5.12-15.758-13.405-9.738h16.568z",
      fill: "#FFF"
    })]
  });
}, JM = function(i) {
  var n = i.title, a = m(i, fg);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 85.337h512v341.326H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "M235.454 85.337 0 426.663 427.345 85.337z"
    }), /* @__PURE__ */ e("path", {
      fill: "#6DA544",
      d: "M512 329.393 0 426.663h512z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M512 85.337h-84.655L0 426.663l512-204.512z"
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M0 85.337v341.326L235.454 85.337z"
    })]
  });
}, XM = function(i) {
  var n = i.title, a = m(i, dg);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 85.337h512v341.326H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M0 85.337h512v113.775H0z"
    }), /* @__PURE__ */ e("path", {
      d: "M0 312.888h512v113.775H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#496E2D",
      d: "M0 426.668V85.331l256 170.675z"
    })]
  });
}, QM = function(i) {
  var n = i.title, a = m(i, vg);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M0 85.333h512V426.67H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "M192 85.33h-64v138.666H0v64h128v138.666h64V287.996h320v-64H192z"
    })]
  });
}, tF = function(i) {
  var n = i.title, a = m(i, pg);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 85.337h512v341.326H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M0 85.337h512V256H0z"
    }), /* @__PURE__ */ d("g", {
      fill: "#FFF",
      children: [/* @__PURE__ */ e("path", {
        d: "M83.478 170.666c0-24.865 17.476-45.637 40.812-50.734a52.059 52.059 0 0 0-11.13-1.208c-28.688 0-51.942 23.254-51.942 51.941s23.255 51.942 51.942 51.942c3.822 0 7.543-.425 11.13-1.208-23.336-5.095-40.812-25.867-40.812-50.733zm66.783-48.231 3.684 11.337h11.921l-9.645 7.007 3.684 11.337-9.644-7.006-9.645 7.006 3.685-11.337-9.645-7.007h11.921z"
      }), /* @__PURE__ */ e("path", {
        d: "m121.344 144.696 3.683 11.337h11.921l-9.645 7.007 3.684 11.337-9.643-7.006-9.645 7.006 3.685-11.337-9.645-7.007h11.921zm57.834 0 3.684 11.337h11.921l-9.645 7.007 3.684 11.337-9.644-7.006-9.644 7.006 3.685-11.337-9.645-7.007h11.921zm-11.131 33.391 3.684 11.337h11.921l-9.644 7.007 3.684 11.337-9.645-7.006-9.643 7.006 3.684-11.337-9.644-7.007h11.92zm-35.573 0 3.683 11.337h11.921l-9.644 7.007 3.684 11.337-9.644-7.006-9.644 7.006 3.684-11.337-9.644-7.007h11.92z"
      })]
    })]
  });
}, eF = function(i) {
  var n = i.title, a = m(i, mg);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 341.3",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M0 0h512v341.3H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M256 0v117.4h-46.1l46.1 30.7v22.6h-22.6L160 121.8v48.9H96v-48.9l-73.4 48.9H0v-22.6l46.1-30.7H0v-64h46.1L0 22.7V0h22.6L96 48.9V0h64v48.9L233.4 0z"
    }), /* @__PURE__ */ d("g", {
      fill: "#D80027",
      children: [/* @__PURE__ */ e("path", {
        d: "M144 0h-32v69.4H0v32h112v69.3h32v-69.3h112v-32H144z"
      }), /* @__PURE__ */ e("path", {
        d: "M0 0v15.1l57.4 38.3H80zm256 0v15.1l-57.4 38.3H176z"
      })]
    }), /* @__PURE__ */ e("path", {
      fill: "#2E52B2",
      d: "M256 22.7v30.7h-46.1z"
    }), /* @__PURE__ */ e("path", {
      d: "M0 0v15.1l57.4 38.3H80zm256 0v15.1l-57.4 38.3H176z",
      fill: "#D80027"
    }), /* @__PURE__ */ e("path", {
      fill: "#2E52B2",
      d: "M256 22.7v30.7h-46.1z"
    }), /* @__PURE__ */ e("path", {
      d: "M0 170.7v-15.1l57.4-38.2H80zm256 0v-15.1l-57.4-38.2H176z",
      fill: "#D80027"
    }), /* @__PURE__ */ e("path", {
      fill: "#29DBFF",
      d: "M449 139.7c-.1 44.4-7.2 92.1-65 114.9-57.8-22.8-64.9-70.5-65-114.9h130z"
    }), /* @__PURE__ */ e("path", {
      fill: "#ffda44",
      d: "M449 139.7c0-16.7-.9-32.9-.5-47.1C426.9 83 398.4 81 383.9 81s-42.9 2-64.6 11.6c.4 14.2-.5 30.4-.5 47.1H449z"
    }), /* @__PURE__ */ e("path", {
      fill: "#BF521B",
      d: "m369.5 204.5.3 10.3-12.8.2 4.9 13.2h-17.3c-18-20.2-23.4-42.4-24.9-68.1l9.1-9.7 8.3 14.3 10.8-12.8 7 7.8.8 15.7 13.8 29.1z"
    }), /* @__PURE__ */ e("path", {
      fill: "#474747",
      d: "m436.6 192.5-8.6 18.3h-47l-29.2-19.5 25.7 10.5h25.1l3.7-6.5 7.2.2 2-3z"
    })]
  });
}, rF = function(i) {
  var n = i.title, a = m(i, gg);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 85.337h512v341.326H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M0 199.112h512v113.775H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M0 312.888h512v113.775H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M233.606 196.639v14.837c0 34.081-44.522 44.522-44.522 44.522s-44.522-10.44-44.522-44.522v-14.837l-.145-44.188 89.043-.266.146 44.454z"
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M233.606 196.639v14.837c0 34.081-44.522 44.522-44.522 44.522s-44.522-10.44-44.522-44.522v-14.837l-.145-44.188 89.043-.266.146 44.454z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M233.606 196.639v14.837c0 34.081-44.522 44.522-44.522 44.522s-44.522-10.44-44.522-44.522v-14.837l14.848 14.837 29.674-22.261 29.685 22.261 14.837-14.837z"
    })]
  });
}, nF = function(i) {
  var n = i.title, a = m(i, wg);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M0 85.334h512v341.337H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M512 295.883H202.195v130.783h-79.76V295.883H0v-79.772h122.435V85.329h79.76v130.782H512v61.218z"
    }), /* @__PURE__ */ e("path", {
      fill: "#2E52B2",
      d: "M512 234.666v42.663H183.652v149.337h-42.674V277.329H0v-42.663h140.978V85.329h42.674v149.337z"
    })]
  });
}, iF = function(i) {
  var n = i.title, a = m(i, zg);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 85.337h512v341.326H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M0 196.641h512v118.717H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M0 315.359h512v111.304H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M129.468 181.799v85.136c0 48.429 63.267 63.267 63.267 63.267S256 315.362 256 266.935v-85.136H129.468z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M146.126 184.294v81.941c0 5.472 1.215 10.64 3.623 15.485h85.97c2.408-4.844 3.623-10.012 3.623-15.485v-81.941h-93.216z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M221.301 241.427h-21.425v-14.283h14.284v-14.283h-14.284v-14.284h-14.283v14.284h-14.282v14.283h14.282v14.283h-21.426v14.284h21.426v14.283h14.283v-14.283h21.425z"
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M169.232 301.658c9.204 5.783 18.66 9.143 23.502 10.636 4.842-1.494 14.298-4.852 23.502-10.636 9.282-5.833 15.79-12.506 19.484-19.939a24.878 24.878 0 0 0-14.418-4.583c-1.956 0-3.856.232-5.682.657-3.871-8.796-12.658-14.94-22.884-14.94-10.227 0-19.013 6.144-22.884 14.94a25.048 25.048 0 0 0-5.682-.657 24.88 24.88 0 0 0-14.418 4.583c3.691 7.433 10.198 14.106 19.48 19.939z"
    })]
  });
}, lF = function(i) {
  var n = i.title, a = m(i, xg);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 85.337h512v341.326H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#6DA544",
      d: "M0 85.337h512v113.775H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#338AF3",
      d: "M0 312.888h512v113.775H0z"
    })]
  });
}, aF = function(i) {
  var n = i.title, a = m(i, Mg);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#338AF3",
      d: "M0 85.34h512v341.326H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M512 85.334v166.69L0 256.175V85.334z"
    }), /* @__PURE__ */ e("path", {
      fill: "#6DA544",
      d: "M323.744 203.099 256 270.843l-67.744-67.744a81.156 81.156 0 0 0-13.879 45.483v22.261c0 35.744 23.097 66.193 55.148 77.213-4.277 8.385-3.556 18.848 2.712 26.671l24.258-19.439 24.258 19.439c6.342-7.915 7.011-18.534 2.564-26.968 31.614-11.261 54.308-41.485 54.308-76.916v-22.261a81.174 81.174 0 0 0-13.881-45.483z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "M256 330.206c-32.732 0-59.362-26.63-59.362-59.362v-22.261c0-32.733 26.63-59.363 59.362-59.363s59.362 26.63 59.362 59.362v22.261c0 32.733-26.63 59.363-59.362 59.363z"
    }), /* @__PURE__ */ e("path", {
      fill: "#338AF3",
      d: "M293.101 270.843v-22.261c0-20.458-16.643-37.101-37.101-37.101s-37.101 16.643-37.101 37.101v22.261L256 278.264l37.101-7.421z"
    }), /* @__PURE__ */ e("path", {
      fill: "#6DA544",
      d: "M218.899 270.843c0 20.458 16.643 37.101 37.101 37.101s37.101-16.643 37.101-37.101h-74.202z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "M300.522 189.22c0-12.295-9.966-22.261-22.261-22.261a22.173 22.173 0 0 0-14.84 5.672v-13.093h7.421v-14.84h-7.421v-7.421h-14.84v7.421h-7.421v14.84h7.421v13.093a22.177 22.177 0 0 0-14.841-5.672c-12.295 0-22.261 9.966-22.261 22.261 0 6.591 2.867 12.512 7.421 16.589v13.093h74.203v-13.093c4.552-4.077 7.419-9.997 7.419-16.589z"
    })]
  });
}, oF = function(i) {
  var n = i.title, a = m(i, Fg);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "M0 85.331h512v341.326H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M330.207 85.331H512v341.337H330.207z"
    }), /* @__PURE__ */ e("path", {
      d: "M0 85.331h181.793v341.337H0zm255.999 111.301 14.733 45.347h47.685l-38.576 28.029 14.734 45.348-38.576-28.026-38.577 28.026 14.737-45.348-38.576-28.029h47.681z",
      fill: "#496E2D"
    })]
  });
}, sF = function(i) {
  var n = i.title, a = m(i, yg);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#338AF3",
      d: "M0 85.331h512v341.337H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "m256 157.273 22.663 69.748H352l-59.332 43.106 22.664 69.749L256 296.769l-59.332 43.107 22.664-69.749L160 227.021h73.337z"
    })]
  });
}, cF = function(i) {
  var n = i.title, a = m(i, Hg);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 85.331h512v341.337H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#A2001D",
      d: "M0 196.636h512v118.728H0z"
    }), /* @__PURE__ */ e("path", {
      d: "M0 352.462h512v74.207H0zM0 85.331h512v74.207H0z",
      fill: "#6DA544"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "m256.742 218.003 9.43 29.021h30.518L272 264.963l9.431 29.023-24.689-17.937-24.689 17.937 9.431-29.023-24.69-17.939h30.518z"
    })]
  });
}, hF = function(i) {
  var n = i.title, a = m(i, _g);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 85.337h512v341.326H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#496E2D",
      d: "M0 322.783h512v103.88H0z"
    }), /* @__PURE__ */ e("path", {
      d: "M0 85.337h512v104.515H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#A2001D",
      d: "M0 210.877h512v89.656H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M256 256.006 0 426.668V85.331z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "m73.178 209.188 20.831 29.067 34.084-10.83-21.207 28.795 20.83 29.069-33.939-11.271-21.208 28.794.234-35.762-33.94-11.273 34.083-10.83z"
    })]
  });
}, uF = function(i) {
  var n = i.title, a = m(i, bg);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "M0 85.337h512v341.326H0z"
    }), /* @__PURE__ */ e("path", {
      d: "M0 85.337h512v113.775H0zm0 227.551h512v113.775H0z",
      fill: "#6DA544"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M256 256.006 0 426.668V85.331z"
    }), /* @__PURE__ */ e("path", {
      d: "m302.049 226.318 7.368 22.674h23.842l-19.288 14.016 7.366 22.674-19.288-14.015-19.287 14.015 7.366-22.674-19.288-14.016h23.842zm74.203 0 7.367 22.674h23.842l-19.288 14.016 7.367 22.674-19.288-14.015-19.288 14.015 7.367-22.674-19.288-14.016h23.842z"
    })]
  });
}, fF = function(i) {
  var n = i.title, a = m(i, Eg);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 85.337h512v341.326H0z"
    }), /* @__PURE__ */ e("path", {
      d: "M0 85.337h512v113.775H0zm0 227.551h512v113.775H0z",
      fill: "#0052B4"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "M228.582 261.936 256 214.447l27.418 47.489z"
    }), /* @__PURE__ */ e("path", {
      fill: "#6DA544",
      d: "M291.616 277.616 256 295.425l-35.616-17.809v-23.744h71.232z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "m289.579 216.485-12.592 12.592c5.37 5.372 8.693 12.791 8.693 20.988 0 16.392-13.289 29.68-29.68 29.68-16.392 0-29.68-13.289-29.68-29.68 0-8.195 3.322-15.616 8.693-20.988l-12.592-12.592c-8.594 8.594-13.91 20.466-13.91 33.579 0 26.228 21.261 47.489 47.489 47.489s47.489-21.261 47.489-47.489c0-13.114-5.316-24.987-13.91-33.579z"
    })]
  });
}, dF = function(i) {
  var n = i.title, a = m(i, Ag);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M0 85.337h512v341.326H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M512 85.331v166.69L0 256.173V85.331z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M256 256.006 0 426.668V85.331z"
    }), /* @__PURE__ */ d("g", {
      fill: "#FFDA44",
      children: [/* @__PURE__ */ e("path", {
        d: "M59.621 256a59.546 59.546 0 0 0-.193 4.57c0 32.821 26.607 59.429 59.429 59.429s59.429-26.607 59.429-59.429c0-1.539-.078-3.061-.193-4.57H59.621z"
      }), /* @__PURE__ */ e("circle", {
        cx: 118.862,
        cy: 210.287,
        r: 18.286
      })]
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M77.715 205.714v59.429c0 31.494 41.144 41.143 41.144 41.143s41.144-9.649 41.144-41.143v-59.429H77.715z"
    }), /* @__PURE__ */ e("path", {
      fill: "#338AF3",
      d: "M118.877 287.148c-7.632-2.746-22.876-9.767-22.876-22.006v-41.144h45.715v41.144c-.001 12.28-15.244 19.283-22.839 22.006z"
    }), /* @__PURE__ */ e("path", {
      fill: "#F3F3F3",
      d: "M128.001 246.856v-9.142l-9.144-4.571-9.142 4.571v9.142l-4.571 4.573v18.285h27.428v-18.285z"
    })]
  });
}, vF = function(i) {
  var n = i.title, a = m(i, Sg);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 85.331h512v341.337H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M0 85.331h512v113.775H0z"
    }), /* @__PURE__ */ e("path", {
      d: "M0 312.882h512v113.775H0z"
    }), /* @__PURE__ */ e("path", {
      d: "m187.31 215.184 9.208 28.341h29.802l-24.11 17.518 9.209 28.342-24.109-17.516-24.11 17.516 9.209-28.342-24.109-17.518h29.801zm137.38 0 9.209 28.341H363.7l-24.109 17.518 9.209 28.342-24.11-17.516-24.109 17.516 9.209-28.342-24.11-17.518h29.802z",
      fill: "#6DA544"
    })]
  });
}, pF = function(i) {
  var n = i.title, a = m(i, Dg);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 900 600",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#2B5DEA",
      d: "M0 0h900v600H0V0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDF29",
      d: "M0 100h900v400H0V100z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D70000",
      d: "M0 150h900v300H0V150z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M450 171.4v257.2c114.3 0 171.4-85.7 214.3-128.6-42.9-42.9-100-128.6-214.3-128.6z"
    }), /* @__PURE__ */ e("path", {
      d: "M450 171.4c-100 0-171.4 85.7-214.3 128.6C278.6 342.9 350 428.6 450 428.6V171.4z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M346.3 254.3h21v91.3h-21zm51.9 0h21v91.3h-21z"
    }), /* @__PURE__ */ e("path", {
      d: "M477.8 254.3h21v91.3h-21zm51.9 0h21v91.3h-21z"
    })]
  });
}, mF = function(i) {
  var n = i.title, a = m(i, Cg);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 341.3",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M0 0h512v341.3H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M256 0v117.4h-46.1l46.1 30.7v22.6h-22.6L160 121.8v48.9H96v-48.9l-73.4 48.9H0v-22.6l46.1-30.7H0v-64h46.1L0 22.7V0h22.6L96 48.9V0h64v48.9L233.4 0z"
    }), /* @__PURE__ */ d("g", {
      fill: "#D80027",
      children: [/* @__PURE__ */ e("path", {
        d: "M144 0h-32v69.4H0v32h112v69.3h32v-69.3h112v-32H144z"
      }), /* @__PURE__ */ e("path", {
        d: "M0 0v15.1l57.4 38.3H80zm256 0v15.1l-57.4 38.3H176z"
      })]
    }), /* @__PURE__ */ e("path", {
      fill: "#2E52B2",
      d: "M256 22.7v30.7h-46.1z"
    }), /* @__PURE__ */ e("path", {
      d: "M0 0v15.1l57.4 38.3H80zm256 0v15.1l-57.4 38.3H176z",
      fill: "#D80027"
    }), /* @__PURE__ */ e("path", {
      fill: "#2E52B2",
      d: "M256 22.7v30.7h-46.1z"
    }), /* @__PURE__ */ e("path", {
      d: "M0 170.7v-15.1l57.4-38.2H80zm256 0v-15.1l-57.4-38.2H176z",
      fill: "#D80027"
    }), /* @__PURE__ */ e("path", {
      fill: "#29DBFF",
      d: "M448.9 169.5c0 9.6-.3 29.6-1.4 39.2-4.1 34.9-23.5 68.8-62.1 85.9-45.3-17.9-60.8-51-64.9-85.9-1.1-9.6-1.5-19.4-1.5-29l.3-47.1h129.2l.4 36.9z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M447.5 208.7c-.2 1.6-.4 3.3-.6 4.9-4.8 33.1-22.9 65.4-61.5 81-43.2-17-59.4-47.9-64.2-81-.2-1.6-.4-3.2-.6-4.9"
    }), /* @__PURE__ */ e("path", {
      fill: "#29DBFF",
      d: "m385.4 251.7-22.9-43h45.8z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "m385.4 165.8-22.9 42.9h45.8z"
    }), /* @__PURE__ */ e("ellipse", {
      fill: "#FFBE57",
      cx: 474.8,
      cy: 236.8,
      rx: 16.8,
      ry: 43.3
    }), /* @__PURE__ */ e("ellipse", {
      fill: "#FFBE57",
      cx: 295.3,
      cy: 236.8,
      rx: 16.8,
      ry: 43.3
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "m385.4 31.5-33.4 44h68.5zM315.5 280s33.8 29.5 69.9 29.5 67.1-29.5 67.1-29.5l8.5 14.6S439.2 326 385.4 326 307 294.6 307 294.6l8.5-14.6z"
    }), /* @__PURE__ */ e("ellipse", {
      fill: "#A5A5A5",
      cx: 386.3,
      cy: 104.3,
      rx: 34.3,
      ry: 23.3
    })]
  });
}, gF = function(i) {
  var n = i.title, a = m(i, Tg);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M0 85.333h512V426.67H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "M332.058 191.996v78.221c0 38.103 51.942 49.779 51.942 49.779s51.942-11.675 51.942-49.779v-78.221H332.058z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FF9811",
      d: "M376.579 220.44c0 7.855-6.644 28.445-14.84 28.445s-14.84-20.589-14.84-28.445c0-7.856 14.84-14.222 14.84-14.222s14.84 6.367 14.84 14.222z"
    }), /* @__PURE__ */ e("path", {
      fill: "#A2001D",
      d: "M415.961 235.93c2.394-5.6 4.257-13.785 4.257-17.86 0-6.546-8.904-11.852-8.904-11.852s-8.904 5.306-8.904 11.852c0 4.075 1.862 12.26 4.257 17.86l-5.141 11.123a26.898 26.898 0 0 0 9.788 1.831c3.463 0 6.766-.654 9.788-1.831l-5.141-11.123z"
    }), /* @__PURE__ */ e("path", {
      fill: "#6DA544",
      d: "M372.87 270.217s-7.421 14.222-7.421 28.445h37.101c0-14.222-7.421-28.445-7.421-28.445l-11.13-7.111-11.129 7.111z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M395.13 270.217v-3.555c0-5.891-4.983-10.666-11.13-10.666-6.147 0-11.13 4.776-11.13 10.666v3.555h22.26z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M256 85.333v30.553l-45.167 25.099H256v59.359h-59.103L256 233.179v22.817h-26.68l-73.494-40.826v40.826h-55.652v-48.573l-87.43 48.573H0v-30.554l45.167-25.098H0v-59.359h59.103L0 108.139V85.333h26.68l73.494 40.825V85.333h55.652v48.572l87.43-48.572z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M144 85.33h-32v69.332H0v32h112v69.334h32v-69.334h112v-32H144z"
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M155.826 200.344 256 255.996v-15.737l-71.847-39.915z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M155.826 200.344 256 255.996v-15.737l-71.847-39.915z"
    }), /* @__PURE__ */ e("path", {
      d: "M155.826 200.344 256 255.996v-15.737l-71.847-39.915zm-83.98 0L0 240.259v15.737l100.174-55.652z",
      fill: "#D80027"
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M100.174 140.982 0 85.33v15.737l71.847 39.915z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M100.174 140.982 0 85.33v15.737l71.847 39.915z"
    }), /* @__PURE__ */ e("path", {
      d: "M100.174 140.982 0 85.33v15.737l71.847 39.915zm83.98 0L256 101.067V85.33l-100.174 55.652z",
      fill: "#D80027"
    })]
  });
}, wF = function(i) {
  var n = i.title, a = m(i, Bg);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "M0 85.331h512v341.337H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M0 85.331h170.663v341.337H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M341.337 85.331H512v341.337H341.337z"
    })]
  });
}, zF = function(i) {
  var n = i.title, a = m(i, Lg);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 22.5 15",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 0h21v15H0V0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#073AB6",
      d: "M0 0h22.5v15H0V0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 0h11.3v7.5H0V0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#F44653",
      d: "M7.1 0h3.6v7H7.1V0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#1035BB",
      d: "M0 0h3.6v7H0V0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M3.6 0h3.6v7H3.6V0zm10.9 6h5L19 7h-1.5v.5h1l-.5 1h-.5V10h-1V7H15l-.5-1zm4 2.5 1 1.5h-2l1-1.5zm-3 0 1 1.5h-2l1-1.5zm1.5 3L16 10h2l-1 1.5zM20 8c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5zm-6 0c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5zm1 4c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5zm4 0c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5zm-2 1c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5z"
    })]
  });
}, xF = function(i) {
  var n = i.title, a = m(i, Og);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "M0 85.337h512v341.326H0z"
    }), /* @__PURE__ */ e("path", {
      d: "M0 85.337h512V153.6H0zM0 358.4h512v68.263H0zm0-136.537h512v68.263H0z",
      fill: "#496E2D"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M0 85.337h204.054v204.054H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "m102.026 133.938 13.26 40.812h42.916l-34.718 25.226 13.26 40.814-34.718-25.224-34.719 25.224 13.263-40.814-34.718-25.226h42.913z"
    })]
  });
}, MF = function(i) {
  var n = i.title, a = m(i, Rg);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 85.334h512V426.66H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M0 194.056h512v123.882H0z"
    }), /* @__PURE__ */ e("path", {
      d: "M0 85.334h512v54.522H0zm0 286.809h512v54.522H0z",
      fill: "#D80027"
    })]
  });
}, FF = function(i) {
  var n = i.title, a = m(i, Ig);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 85.337h512v341.326H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M0 85.337h512v113.775H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#6DA544",
      d: "M0 312.888h512v113.775H0z"
    }), /* @__PURE__ */ e("path", {
      d: "M226.318 300.522h59.364v-25.23l-11.873 5.937L256 263.421l-17.809 17.808-11.873-5.937zm-33.963-29.682 2.763 8.504h8.94l-7.233 5.255 2.763 8.502-7.233-5.255-7.234 5.255 2.763-8.502-7.233-5.255h8.94zm8.566-29.68 2.763 8.502h8.94l-7.233 5.255 2.763 8.504-7.233-5.256-7.234 5.256 2.763-8.504-7.233-5.255h8.94zm24.488-22.261 2.763 8.502h8.94l-7.233 5.255 2.763 8.504-7.233-5.256-7.234 5.256 2.763-8.504-7.233-5.255h8.94zm94.236 51.941-2.763 8.504h-8.94l7.233 5.255-2.763 8.502 7.233-5.255 7.234 5.255-2.763-8.502 7.233-5.255h-8.94zm-8.566-29.68-2.763 8.502h-8.94l7.233 5.255-2.763 8.504 7.233-5.256 7.234 5.256-2.763-8.504 7.233-5.255h-8.94zm-24.488-22.261-2.763 8.502h-8.94l7.233 5.255-2.763 8.504 7.233-5.256 7.234 5.256-2.763-8.504 7.233-5.255h-8.94zM256 207.767l2.763 8.503h8.941l-7.234 5.256 2.763 8.502-7.233-5.254-7.233 5.254 2.763-8.502-7.234-5.256h8.941z",
      fill: "#FFDA44"
    })]
  });
}, yF = function(i) {
  var n = i.title, a = m(i, Pg);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M0 85.337h512v341.326H0z"
    }), /* @__PURE__ */ e("path", {
      d: "m210.715 174.377 3.684 11.338h11.919l-9.643 7.006 3.684 11.337-9.644-7.007-9.644 7.007 3.684-11.337-9.645-7.006h11.921zm-93.899 107.594 4.605 14.172h14.9l-12.055 8.757 4.606 14.173-12.056-8.76-12.055 8.76 4.604-14.173-12.054-8.757h14.899zm27.88-162.292 4.604 14.172h14.901l-12.056 8.758 4.606 14.171-12.055-8.759-12.056 8.759 4.606-14.171-12.055-8.758h14.9zm-75.157 55.652 4.604 14.172h14.9l-12.055 8.758 4.606 14.171-12.055-8.758-12.056 8.758 4.606-14.171-12.055-8.758h14.9z",
      fill: "#FFF"
    }), /* @__PURE__ */ e("path", {
      d: "M483.386 354.503H117.801s109.234-88.562 310.593-220.938c.001 0-88.443 128.935 54.992 220.938zm-365.585 11.586c-11.177 0-11.195 17.37 0 17.37h365.585c11.177 0 11.195-17.37 0-17.37H117.801z",
      fill: "#FFDA44"
    })]
  });
}, HF = function(i) {
  var n = i.title, a = m(i, Vg);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M0 85.337h512v341.326H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "M256 256 0 90.691v44.242L155.826 256 0 377.067v44.242z"
    }), /* @__PURE__ */ e("path", {
      d: "M0 90.691v330.618L189.217 256z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "m44.184 213.36 24.912 23.577 30.121-16.41-14.723 30.98 24.911 23.575-34.012-4.43L60.67 301.63l-6.296-33.716-34.012-4.43 30.119-16.408z"
    })]
  });
}, _F = function(i) {
  var n = i.title, a = m(i, Ng);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#496E2D",
      d: "M0 85.337h512v341.326H0z"
    }), /* @__PURE__ */ d("g", {
      fill: "#FFF",
      children: [/* @__PURE__ */ e("path", {
        d: "M357.208 183.679c8.397-23.404-1.036-48.858-21.281-61.536a52.131 52.131 0 0 1 10.884 2.621c27.002 9.688 41.038 39.428 31.35 66.431s-39.428 41.038-66.431 31.35a52.182 52.182 0 0 1-10.069-4.895c23.686 3.084 47.15-10.566 55.547-33.971zm-46.571-67.95-7.297 9.427-11.22-4.026 6.712 9.852-7.296 9.427 11.443-3.338 6.712 9.852.361-11.914 11.444-3.339-11.221-4.025z"
      }), /* @__PURE__ */ e("path", {
        d: "m330.338 146.448-7.296 9.427-11.221-4.026 6.712 9.852-7.296 9.427 11.443-3.339 6.712 9.853.36-11.915 11.445-3.34-11.221-4.024zM275.9 126.916l-7.296 9.427-11.219-4.024 6.711 9.851-7.296 9.426 11.443-3.338 6.712 9.852.361-11.915 11.444-3.337-11.221-4.027zm-.799 35.189-7.296 9.427-11.221-4.026 6.712 9.852-7.296 9.427 11.444-3.338 6.711 9.852.362-11.915 11.443-3.338-11.22-4.026zm33.484 12.013-7.296 9.427-11.22-4.026 6.712 9.853-7.297 9.426 11.444-3.338 6.712 9.852.36-11.915 11.443-3.338-11.219-4.025z"
      })]
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M83.478 85.337h89.043v341.326H83.478z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "m117.458 175.191-14.908-11.105v-15.705l14.908-11.105h21.084l14.908 11.105v15.705l-14.908 11.105z"
    }), /* @__PURE__ */ e("path", {
      d: "M128 137.276h-10.542l-14.908 11.105v7.678H128zm0 37.915h10.542l14.908-11.105v-8.012H128z",
      fill: "#FF9811"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "m117.458 374.725-14.908-11.106v-15.704l14.908-11.105h21.084l14.908 11.105v15.704l-14.908 11.106z"
    }), /* @__PURE__ */ e("path", {
      d: "M128 336.81h-10.542l-14.908 11.105v7.678H128zm0 37.915h10.542l14.908-11.106v-8.011H128z",
      fill: "#FF9811"
    }), /* @__PURE__ */ e("path", {
      d: "m117.458 274.957-14.908-11.105v-15.703l14.908-11.106h21.084l14.908 11.106v15.703l-14.908 11.105zm36.513 24.434h-6.493v-6.493h-11.411l-8.068-8.068-8.067 8.068h-11.41v6.493h-6.493v12.986h6.493v6.492h11.41l8.068 8.069 8.068-8.069h11.41v-6.492h6.493zm0-99.768h-6.493v-6.492h-11.411l-8.068-8.069-8.067 8.069h-11.41v6.492h-6.493v12.986h6.493v6.492h11.41l8.068 8.07 8.068-8.07h11.41v-6.492h6.493z",
      fill: "#496E2D"
    }), /* @__PURE__ */ d("g", {
      fill: "#D80027",
      children: [/* @__PURE__ */ e("path", {
        d: "M120.576 248.576h14.84v14.84h-14.84z"
      }), /* @__PURE__ */ e("circle", {
        cx: 128,
        cy: 206.113,
        r: 7.421
      }), /* @__PURE__ */ e("circle", {
        cx: 128,
        cy: 305.887,
        r: 7.421
      })]
    })]
  });
}, bF = function(i) {
  var n = i.title, a = m(i, kg);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M0 85.331h512v341.337H0z"
    }), /* @__PURE__ */ e("circle", {
      fill: "#FFF",
      cx: 256,
      cy: 255.994,
      r: 96
    }), /* @__PURE__ */ d("g", {
      fill: "#D80027",
      children: [/* @__PURE__ */ e("path", {
        d: "m267.826 219.291 16.47 22.695 26.673-8.649-16.496 22.676 16.468 22.695-26.664-8.681-16.495 22.676.017-28.04-26.664-8.682 26.674-8.648z"
      }), /* @__PURE__ */ e("path", {
        d: "M277.818 312.724c-31.33 0-56.727-25.397-56.727-56.727s25.397-56.727 56.727-56.727c9.769 0 18.96 2.47 26.985 6.819-12.589-12.31-29.804-19.909-48.803-19.909-38.558 0-69.818 31.259-69.818 69.818s31.26 69.818 69.818 69.818c18.999 0 36.215-7.599 48.803-19.909-8.026 4.347-17.216 6.817-26.985 6.817z"
      })]
    })]
  });
}, EF = function(i) {
  var n = i.title, a = m(i, $g);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M0 85.331h512v341.337H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 85.331h256v170.663H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M141.357 157.303V130.59h-26.714v26.713H87.93v26.713h26.713v26.713h26.714v-26.713h26.713v-26.713z"
    })]
  });
}, AF = function(i) {
  var n = i.title, a = m(i, Wg);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#E30A17",
      d: "M0 0h513v342H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M259.7 118.6c-13.1-9.5-29-14.6-45.3-14.5-40.8 0-73.8 30.8-73.8 68.9s33.1 68.9 73.8 68.9c17.1 0 32.9-5.4 45.3-14.5-30 38.6-85.7 45.6-124.3 15.5s-45.6-85.7-15.5-124.3 85.7-45.6 124.3-15.5c5.8 4.5 11 9.8 15.5 15.5zm39.9 65.8-18.1 21.9 1.2-28.4-26.4-10.4 27.3-7.6 1.8-28.3 15.6 23.7 27.5-7.1-17.5 22 15.3 23.9-26.7-9.7z"
    })]
  });
}, SF = function(i) {
  var n = i.title, a = m(i, Ug);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M0 85.337h512v341.326H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "m6.066 85.337 207.961 212.636 131.584 128.69h160.323L297.973 214.027 166.389 85.337z"
    }), /* @__PURE__ */ e("path", {
      d: "M43.364 85.337 384.69 426.663h83.946L127.31 85.337z"
    })]
  });
}, DF = function(i) {
  var n = i.title, a = m(i, Gg);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 900 600",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M0 0h900v600H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#00B2EE",
      d: "M0 300h450V0h450v600H0V300z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "m345.3 480.9 29.4 90.6-77.1-56H393l-77.1 56 29.4-90.6zM706.4 340l29.4 90.6-77.1-56H754l-77.1 56 29.5-90.6zm106.4-78.5 29.4 90.6-77.1-56h95.3l-77.1 56 29.5-90.6zm0-224.1 29.4 90.6-77.1-56h95.3l-77.1 56 29.5-90.6z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M449.9 0v206.3h-81l81 54V300h-39.7l-129-85.9V300H168.7v-85.9L39.7 300H0v-39.7l81-54H0V93.8h81L0 39.9V0h39.7l129 85.9V0h112.5v85.9L410.2 0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M253.1 0h-56.3v122H0v56.2h196.8V300h56.3V178.2h196.8V122H253.1z"
    }), /* @__PURE__ */ e("path", {
      fill: "#2E52B2",
      d: "M449.9 39.9v53.9h-81z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M0 300v-19.3l109.9-74.4h39.7L12.8 300zM12.8.1l136.8 93.7h-39.7L0 19.4V.1zm437.1.1v19.3L340 93.8h-39.7L437.1.2zM437.1 300l-136.8-93.7H340l109.9 74.4V300z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "m719.9 131.6 29.4 90.6-77.1-56h95.3l-77.1 56 29.5-90.6zM584 187.7l29.4 90.6-77.1-56h95.3l-77.1 56 29.5-90.6zm30 242.9 29.4 90.6-77.1-56h95.3l-77.1 56 29.5-90.6zM488 332l29.4 90.6-77.1-56h95.3l-77.1 56L488 332zm0 132 29.4 90.6-77.1-56h95.3l-77.1 56L488 464z"
    })]
  });
}, CF = function(i) {
  var n = i.title, a = m(i, Kg);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M0 85.337h512v341.326H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M0 85.337h256V256H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M186.435 170.669 162.558 181.9l12.714 23.125-25.927-4.961-3.286 26.192L128 206.993l-18.06 19.263-3.285-26.192-25.927 4.96 12.714-23.125-23.877-11.23 23.877-11.231-12.714-23.125 25.927 4.96 3.286-26.192L128 134.344l18.06-19.263 3.285 26.192 25.928-4.96-12.715 23.125z"
    }), /* @__PURE__ */ e("circle", {
      fill: "#0052B4",
      cx: 128,
      cy: 170.674,
      r: 29.006
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M128 190.06c-10.692 0-19.391-8.7-19.391-19.391 0-10.692 8.7-19.391 19.391-19.391 10.692 0 19.391 8.7 19.391 19.391 0 10.691-8.699 19.391-19.391 19.391z"
    })]
  });
}, TF = function(i) {
  var n = i.title, a = m(i, Yg);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#338AF3",
      d: "M0 85.337h512v341.326H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#6DA544",
      d: "M0 426.663V85.337h512"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "M512 152.222V85.337H411.67L0 359.778v66.885h100.33z"
    }), /* @__PURE__ */ e("path", {
      d: "M512 85.337v40.125L60.193 426.663H0v-40.125L451.807 85.337z"
    })]
  });
}, BF = function(i) {
  var n = i.title, a = m(i, qg);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "M0 85.337h512v341.326H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#338AF3",
      d: "M0 85.337h512V256H0z"
    })]
  });
}, LF = function(i) {
  var n = i.title, a = m(i, jg);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 341.3",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#232323",
      d: "M0 0h512v341.3H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "M0 56.9h512v56.9H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D32300",
      d: "M0 113.8h512v56.9H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "M0 227.6h512v56.9H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D32300",
      d: "M0 284.4h512v56.9H0z"
    }), /* @__PURE__ */ e("circle", {
      fill: "#FFF",
      cx: 256,
      cy: 170.7,
      r: 80.7
    }), /* @__PURE__ */ e("path", {
      d: "M234.5 127.5c.9-1.4-19.6-2-19.6-2 1.7-2.5 18.4-10.5 18.4-10.5s-.9-6 2.7-9.8l-4.5-9.8s7-3.4 18.4-3.4 19.9 7 21 13.1l-6.4 3.4c-.1 4.7 1.7 11.6-4.3 17.3-5.9 5.7-8.3 6.9-8.5 18.8 0 3.9 2.3 8.2 8.8 11.7 17.4 9.3 38.6 28.2 44.6 33.9 6.1 5.7 5.1 19.2 2.6 25.2s-12.1 14.3-14.3 13.6c-2.2-.6 1.2-9.2-3.5-11.6 0 0-8.9-7.6-16.8.6s-.2 25.2 3.9 28c4.1 2.8 1.7 5-1.9 5H247c-3.8 0-5.4-2.3-1.9-5 7.6-3.8 12.4-15.3 7.4-20.3-4.9-4.9-18.3 1.5-21.5 6.3-2.8 2.8-8.8 3.6-12.9-1.4s-4.1-10.4-1.1-12.5c7-4.8 0 0 .1-.1 0 0 11.9-8.6 29.9-9 3.9 0 4.8-2.2 2.2-4.8 0 0-30.9-27.4-28.1-44.2 3-18.3 20-26.3 13.4-32.5-1.3-1.8 0 0 0 0z"
    })]
  });
}, OF = function(i) {
  var n = i.title, a = m(i, Zg);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 0h513v342H0z"
    }), /* @__PURE__ */ e("path", {
      d: "M0 0h513v26.3H0zm0 52.6h513v26.3H0zm0 52.6h513v26.3H0zm0 52.6h513v26.3H0zm0 52.7h513v26.3H0zm0 52.6h513v26.3H0zm0 52.6h513V342H0z",
      fill: "#D80027"
    }), /* @__PURE__ */ e("path", {
      fill: "#2E52B2",
      d: "M0 0h256.5v184.1H0z"
    }), /* @__PURE__ */ e("path", {
      d: "m47.8 138.9-4-12.8-4.4 12.8H26.2l10.7 7.7-4 12.8 10.9-7.9 10.6 7.9-4.1-12.8 10.9-7.7zm56.3 0-4.1-12.8-4.2 12.8H82.6l10.7 7.7-4 12.8 10.7-7.9 10.8 7.9-4-12.8 10.7-7.7zm56.5 0-4.3-12.8-4 12.8h-13.5l11 7.7-4.2 12.8 10.7-7.9 11 7.9-4.2-12.8 10.7-7.7zm56.2 0-4-12.8-4.2 12.8h-13.3l10.8 7.7-4 12.8 10.7-7.9 10.8 7.9-4.3-12.8 11-7.7zM100 75.3l-4.2 12.8H82.6L93.3 96l-4 12.6 10.7-7.8 10.8 7.8-4-12.6 10.7-7.9h-13.4zm-56.2 0-4.4 12.8H26.2L36.9 96l-4 12.6 10.9-7.8 10.6 7.8L50.3 96l10.9-7.9H47.8zm112.5 0-4 12.8h-13.5l11 7.9-4.2 12.6 10.7-7.8 11 7.8-4.2-12.6 10.7-7.9h-13.2zm56.5 0-4.2 12.8h-13.3l10.8 7.9-4 12.6 10.7-7.8 10.8 7.8-4.3-12.6 11-7.9h-13.5zm-169-50.6-4.4 12.6H26.2l10.7 7.9-4 12.7L43.8 50l10.6 7.9-4.1-12.7 10.9-7.9H47.8zm56.2 0-4.2 12.6H82.6l10.7 7.9-4 12.7L100 50l10.8 7.9-4-12.7 10.7-7.9h-13.4zm56.3 0-4 12.6h-13.5l11 7.9-4.2 12.7 10.7-7.9 11 7.9-4.2-12.7 10.7-7.9h-13.2zm56.5 0-4.2 12.6h-13.3l10.8 7.9-4 12.7 10.7-7.9 10.8 7.9-4.3-12.7 11-7.9h-13.5z",
      fill: "#FFF"
    })]
  });
}, RF = function(i) {
  var n = i.title, a = m(i, Jg);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 0h513v342H0z"
    }), /* @__PURE__ */ e("path", {
      d: "M0 0h513v26.3H0zm0 52.6h513v26.3H0zm0 52.6h513v26.3H0zm0 52.6h513v26.3H0zm0 52.7h513v26.3H0zm0 52.6h513v26.3H0zm0 52.6h513V342H0z",
      fill: "#D80027"
    }), /* @__PURE__ */ e("path", {
      fill: "#2E52B2",
      d: "M0 0h256.5v184.1H0z"
    }), /* @__PURE__ */ e("path", {
      d: "m47.8 138.9-4-12.8-4.4 12.8H26.2l10.7 7.7-4 12.8 10.9-7.9 10.6 7.9-4.1-12.8 10.9-7.7zm56.3 0-4.1-12.8-4.2 12.8H82.6l10.7 7.7-4 12.8 10.7-7.9 10.8 7.9-4-12.8 10.7-7.7zm56.5 0-4.3-12.8-4 12.8h-13.5l11 7.7-4.2 12.8 10.7-7.9 11 7.9-4.2-12.8 10.7-7.7zm56.2 0-4-12.8-4.2 12.8h-13.3l10.8 7.7-4 12.8 10.7-7.9 10.8 7.9-4.3-12.8 11-7.7zM100 75.3l-4.2 12.8H82.6L93.3 96l-4 12.6 10.7-7.8 10.8 7.8-4-12.6 10.7-7.9h-13.4zm-56.2 0-4.4 12.8H26.2L36.9 96l-4 12.6 10.9-7.8 10.6 7.8L50.3 96l10.9-7.9H47.8zm112.5 0-4 12.8h-13.5l11 7.9-4.2 12.6 10.7-7.8 11 7.8-4.2-12.6 10.7-7.9h-13.2zm56.5 0-4.2 12.8h-13.3l10.8 7.9-4 12.6 10.7-7.8 10.8 7.8-4.3-12.6 11-7.9h-13.5zm-169-50.6-4.4 12.6H26.2l10.7 7.9-4 12.7L43.8 50l10.6 7.9-4.1-12.7 10.9-7.9H47.8zm56.2 0-4.2 12.6H82.6l10.7 7.9-4 12.7L100 50l10.8 7.9-4-12.7 10.7-7.9h-13.4zm56.3 0-4 12.6h-13.5l11 7.9-4.2 12.7 10.7-7.9 11 7.9-4.2-12.7 10.7-7.9h-13.2zm56.5 0-4.2 12.6h-13.3l10.8 7.9-4 12.7 10.7-7.9 10.8 7.9-4.3-12.7 11-7.9h-13.5z",
      fill: "#FFF"
    })]
  });
}, IF = function(i) {
  var n = i.title, a = m(i, Xg);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 513 342",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 0h513v342H0z"
    }), /* @__PURE__ */ e("path", {
      d: "M0 38h513v38H0zm0 76h513v38H0zm0 76h513v38H0zm0 76h513v38H0z",
      fill: "#0038a8"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 0h256.5v190H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FED443",
      d: "m128.3 138.7-15.1 22.6-3.8-26.9L86 148.2l8.2-25.9-27.2 2.2 18.6-19.8L60.3 95l25.4-9.7L67 65.5l27.1 2.3-8.2-25.9 23.4 13.8 3.9-26.9 15.1 22.6 15.1-22.6 3.8 26.9 23.4-13.8-8.2 25.9 27.1-2.2-18.6 19.8 25.4 9.7-25.4 9.7 18.6 19.8-27.1-2.2 8.2 25.9-23.4-13.8-3.9 26.9-15-22.7zm0-.5c23.9.9 44-17.6 44.9-41.5.9-23.9-17.6-44-41.5-44.9h-3.4c-23.9.8-42.6 20.8-41.8 44.6.6 22.8 19 41.1 41.8 41.8zm0-10.6c-18.8 0-34-15.2-34-34s15.2-34 34-34 34 15.2 34 34-15.3 34-34 34z"
    })]
  });
}, PF = function(i) {
  var n = i.title, a = m(i, Qg);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M0 85.337h512v341.326H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#6DA544",
      d: "M0 322.783h512v103.88H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#338AF3",
      d: "M0 85.337h512v104.515H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 210.877h512v89.656H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#338AF3",
      d: "M0 85.337h512v104.515H0z"
    }), /* @__PURE__ */ e("path", {
      d: "M188.688 137.589c0-15.984 11.234-29.339 26.236-32.614a33.531 33.531 0 0 0-7.155-.777c-18.442 0-33.391 14.949-33.391 33.391s14.949 33.391 33.391 33.391c2.458 0 4.85-.273 7.155-.777-15.002-3.275-26.236-16.63-26.236-32.614zm45.97 15.177 2.261 6.957h7.315l-5.918 4.301 2.261 6.956-5.919-4.3-5.918 4.3 2.261-6.956-5.918-4.301h7.315zm23.348 0 2.26 6.957h7.315l-5.918 4.301 2.261 6.956-5.918-4.3-5.918 4.3 2.26-6.956-5.917-4.301h7.314zm23.347 0 2.26 6.957h7.315l-5.917 4.301 2.26 6.956-5.918-4.3-5.918 4.3 2.26-6.956-5.918-4.301h7.315zm23.347 0 2.262 6.957h7.315l-5.919 4.301 2.261 6.956-5.919-4.3-5.918 4.3 2.262-6.956-5.919-4.301h7.314zm23.348 0 2.26 6.957h7.315l-5.918 4.301 2.261 6.956-5.918-4.3-5.918 4.3 2.26-6.956-5.917-4.301h7.314zm-70.042-24.284 2.26 6.956h7.315l-5.918 4.3 2.261 6.957-5.918-4.299-5.918 4.299 2.26-6.957-5.917-4.3h7.314zm23.347 0 2.26 6.956h7.315l-5.917 4.3 2.26 6.957-5.918-4.299-5.918 4.299 2.26-6.957-5.918-4.3h7.315zm23.347 0 2.262 6.956h7.315l-5.919 4.3 2.261 6.957-5.919-4.299-5.918 4.299 2.262-6.957-5.919-4.3h7.314zm23.348 0 2.26 6.956h7.315l-5.918 4.3 2.261 6.957-5.918-4.299-5.918 4.299 2.26-6.957-5.917-4.3h7.314zm-46.695-24.284 2.26 6.956h7.315l-5.917 4.3 2.26 6.957-5.918-4.3-5.918 4.3 2.26-6.957-5.918-4.3h7.315zm23.347 0 2.262 6.956h7.315l-5.919 4.3 2.261 6.957-5.919-4.3-5.918 4.3 2.262-6.957-5.919-4.3h7.314zm23.348 0 2.26 6.956h7.315l-5.918 4.3 2.261 6.957-5.918-4.3-5.918 4.3 2.26-6.957-5.917-4.3h7.314z",
      fill: "#FFF"
    })]
  });
}, VF = function(i) {
  var n = i.title, a = m(i, tw);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "M0 85.331h512v341.326H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M256 85.331h256v341.337H256z"
    }), /* @__PURE__ */ e("path", {
      fill: "#ACABB1",
      d: "m321.353 233.837 32.073 42.43c-5.053 7.651-5.026 17.961.817 25.692 7.414 9.807 21.374 11.748 31.182 4.335 9.807-7.414 11.748-21.374 4.334-31.182-5.843-7.731-15.756-10.568-24.495-7.795l-49.988-66.129-11.838 8.949-17.759 13.424 17.899 23.677 17.775-13.401zm46.175 48.78a7.421 7.421 0 1 1 8.95 11.84 7.421 7.421 0 0 1-8.95-11.84z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "m376.367 247.24 17.899-23.677-17.759-13.424-11.838-8.949-49.988 66.129c-8.74-2.775-18.651.063-24.495 7.795-7.414 9.808-5.473 23.768 4.334 31.182 9.808 7.414 23.768 5.473 31.182-4.335 5.845-7.731 5.871-18.041.817-25.692l32.073-42.43 17.775 13.401zm-62.504 45.771a7.42 7.42 0 1 1-11.84-8.95 7.42 7.42 0 0 1 11.84 8.95z"
    })]
  });
}, NF = function(i) {
  var n = i.title, a = m(i, ew);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "M0 85.331h512v341.337H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#338AF3",
      d: "M0 85.331h170.663v341.337H0z"
    }), /* @__PURE__ */ e("path", {
      d: "M341.337 85.331H512v341.337H341.337zM214.261 283.82l-33.393-50.086 33.392-50.087 33.392 50.087zm83.478 0-33.391-50.086 33.391-50.087 33.393 50.087zM256 350.603l-33.391-50.087L256 250.429l33.391 50.087z",
      fill: "#6DA544"
    })]
  });
}, kF = function(i) {
  var n = i.title, a = m(i, rw);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 22.5 15",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFCE00",
      d: "M0 0h22.5v5H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#203899",
      d: "M0 5h22.5v5H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D82B2B",
      d: "M0 10h22.5v5H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "m12.13 5.38.14.46.45.14-.39.27.01.48-.38-.29-.45.15.15-.44-.28-.38h.47zm-1.77 0 .27.39h.47l-.28.38.15.45-.45-.16-.38.28.01-.47-.39-.28.45-.13zm3.44.56-.01.48.39.27-.46.14-.14.45-.27-.38h-.48l.29-.38-.15-.45.45.16zm-5.11.02.4.27.44-.18-.13.46.3.36-.47.02-.26.4-.16-.44-.46-.12.37-.3zm6.55 1.17-.2.44.25.4-.47-.05-.31.36-.1-.46-.43-.18.41-.24.03-.47.35.31zm.19 1.12.21.43.47.07-.34.33.08.46-.42-.22-.42.22.08-.46-.34-.33.47-.07zM7 8.2l.21.43.47.06-.34.33.08.47L7 9.27l-.42.22.08-.47-.34-.33.47-.06zm.31-1.15.45.14.38-.29v.48l.39.26-.45.15-.13.46-.28-.38-.47.01.27-.38z"
    })]
  });
}, $F = function(i) {
  var n = i.title, a = m(i, nw);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M0 85.334h512v341.337H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M256 85.334V202.66h-46.069L256 233.38v22.617h-22.628L160 207.078v48.919H96v-48.919l-73.372 48.919H0V233.38l46.069-30.72H0v-64h46.069L0 107.951V85.334h22.628L96 134.241V85.334h64v48.907l73.372-48.907z"
    }), /* @__PURE__ */ d("g", {
      fill: "#D80027",
      children: [/* @__PURE__ */ e("path", {
        d: "M144 85.33h-32v69.333H0v32h112v69.334h32v-69.334h112v-32H144z"
      }), /* @__PURE__ */ e("path", {
        d: "M0 85.329v15.083l57.377 38.251H80zm256 0v15.083l-57.377 38.251H176z"
      })]
    }), /* @__PURE__ */ e("path", {
      fill: "#2E52B2",
      d: "M256 107.951v30.712h-46.069z"
    }), /* @__PURE__ */ e("path", {
      d: "M0 85.329v15.083l57.377 38.251H80zm256 0v15.083l-57.377 38.251H176z",
      fill: "#D80027"
    }), /* @__PURE__ */ e("path", {
      fill: "#2E52B2",
      d: "M256 107.951v30.712h-46.069z"
    }), /* @__PURE__ */ e("path", {
      d: "M0 255.997v-15.082l57.377-38.252H80zm256 0v-15.082l-57.377-38.252H176z",
      fill: "#D80027"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "m384 259.706-46.129 46.129c8.645 16.675 26.051 28.074 46.129 28.074s37.484-11.4 46.129-28.074L384 259.706z"
    }), /* @__PURE__ */ e("path", {
      fill: "#6DA544",
      d: "M332.058 178.084v81.624c.001 39.759 51.942 51.941 51.942 51.941s51.941-12.182 51.942-51.942v-81.623H332.058z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M372.87 215.181h22.261v59.359H372.87z"
    }), /* @__PURE__ */ e("circle", {
      fill: "#A2001D",
      cx: 384,
      cy: 215.181,
      r: 11.13
    }), /* @__PURE__ */ e("path", {
      d: "M346.902 192.92h14.84v14.84h-14.84zm0 33.392h14.84v14.84h-14.84zm0 33.391h14.84v14.84h-14.84zm59.359-66.783h14.84v14.84h-14.84zm0 33.392h14.84v14.84h-14.84zm0 33.391h14.84v14.84h-14.84z",
      fill: "#FFDA44"
    })]
  });
}, WF = function(i) {
  var n = i.title, a = m(i, iw);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 341.3",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 0h512v341.3H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#1583C4",
      d: "m397.7 166.3-51 97.7c-1.1 2-.3 4.5 1.8 5.6 2 1.1 4.5.3 5.6-1.8l51-97.7c1-2.1.1-4.6-2-5.5-2-.9-4.3-.2-5.4 1.7z"
    }), /* @__PURE__ */ e("path", {
      fill: "#1583C4",
      d: "m404.9 188-57.8 75.4c-1.3 1.9-.8 4.5 1.1 5.8 1.7 1.2 4.1.9 5.5-.7l57.8-75.4c1.4-1.8 1.1-4.4-.8-5.8-1.8-1.5-4.4-1.1-5.8.7z"
    }), /* @__PURE__ */ e("path", {
      fill: "#1583C4",
      d: "m379 181.3-32.5 83.1c-.8 2.1.2 4.6 2.4 5.4 2.1.8 4.6-.2 5.4-2.4l32.5-83.1c.7-2.2-.4-4.5-2.6-5.3-2.1-.6-4.3.4-5.2 2.3z"
    }), /* @__PURE__ */ e("path", {
      fill: "#409347",
      d: "M122.1 171.9c.4 1.7 1.2 4.7 2.2 8.5 1.7 6.4 3.6 12.8 5.6 18.7 2.3 6.9 14.7 31.4 20.2 39.1 6.9 9.7 14.1 19.3 21.5 28.6 1.6 1.9 4.5 2.1 6.4.5 1.8-1.6 2.1-4.3.7-6.2-7.3-9.2-14.4-18.6-21.2-28.2-4.2-5.8-17.2-31.1-19-36.7-2.9-8.7-5.4-17.6-7.6-26.5-.5-2.4-2.9-4-5.3-3.5s-4 2.9-3.5 5.3c-.1.2 0 .3 0 .4z"
    }), /* @__PURE__ */ d("g", {
      fill: "#FFD836",
      stroke: "#231F20",
      strokeMiterlimit: 10,
      children: [/* @__PURE__ */ e("path", {
        d: "M297.1 114.9S279.5 42.8 261 42.8c-6.9 0-11.9-.6-15.4 6.4-.9 1.7-20.7-1.6-19.1 20.8.5 6.9 1.1-9.8 14.9-3.4 6.3 3-16.4 48.2-16.4 48.2h72.1z"
      }), /* @__PURE__ */ e("path", {
        d: "m466.1 48.4-90.9 22c-75.3 18.3-42.1 44.4-42.1 44.4l-72.1 12-72.1-12s33.2-26.1-42.1-44.4l-90.9-22C43.1 45.3 38.1 51.8 45.3 63c0 0 106.6 104 126.8 112 20.2 8.1 40.8 0 40.8 0s-14.9 8.7-24 24c-9.2 15.3-4.6 34.7-38.9 40.2-5.5 6.6-5 14 2.9 19.9 7.9 5.8 72.1-48.1 72.1-48.1s-24 24.4-24 36.1c0 5.1 44.1 53.8 60.1 53.8s60.1-48.7 60.1-53.8c0-11.7-24-36.1-24-36.1s64.2 53.9 72.1 48.1 11.4-19.3 2.8-19.9c-28-1.8-29.7-24.9-38.9-40.2-9.2-15.3-24-24-24-24s20.6 8.1 40.8 0S476.7 63 476.7 63c7.2-11.2 2.3-17.7-10.6-14.6z"
      })]
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      stroke: "#231F20",
      strokeMiterlimit: 10,
      d: "M201.3 111.8v80.3c0 45.7 59.7 59.7 59.7 59.7s59.7-14 59.7-59.7v-80.3H201.3z"
    }), /* @__PURE__ */ e("path", {
      d: "M225.2 137.7V235c8.2 6 17 10.2 23.9 12.9V137.7h-23.9zm71.6 0V235c-8.2 6-17 10.2-23.9 12.9V137.7h23.9z",
      fill: "#D80027"
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M201.3 111.8h119.4v37.9H201.3z"
    }), /* @__PURE__ */ e("path", {
      fill: "#1583C4",
      d: "m60.1 210.5-21.9-58.1H15.7l31.8 80.8h25.2l31.5-80.8H81.7zm391.4-58.6h18.9v81.7h-18.9z"
    })]
  });
}, UF = function(i) {
  var n = i.title, a = m(i, lw);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M196.641 85.337H0v341.326h512V85.337z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "m256 157.279 22.663 69.747H352l-59.332 43.106 22.664 69.749L256 296.774l-59.332 43.107 22.664-69.749L160 227.026h73.337z"
    })]
  });
}, GF = function(i) {
  var n = i.title, a = m(i, aw);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      d: "M0 85.337h512v341.326H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#6DA544",
      d: "M512 256v170.663H0L215.185 256z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M512 85.337V256H215.185L0 85.337z"
    }), /* @__PURE__ */ e("path", {
      d: "M221.001 239.304 26.868 85.337H8.956l208.168 165.098H512v-11.131zM8.956 426.663h17.912l194.133-153.967H512v-11.131H217.124zM0 92.44v14.206L188.317 256 0 405.354v14.205L206.229 256z"
    }), /* @__PURE__ */ d("g", {
      fill: "#FFDA44",
      children: [/* @__PURE__ */ e("path", {
        d: "M8.956 85.337H0v7.103L206.229 256 0 419.559v7.104h8.956l208.168-165.098H512v-11.13H217.124z"
      }), /* @__PURE__ */ e("path", {
        d: "M63.718 292.382v-14.295c14.265 0 25.87-11.606 25.87-25.869 0-10.092-8.211-18.303-18.304-18.303-6.875 0-12.469 5.593-12.469 12.469 0 4.397 3.577 7.974 7.974 7.974a4.514 4.514 0 0 0 4.508-4.508h14.295c0 10.368-8.435 18.804-18.802 18.804-12.279-.002-22.269-9.993-22.269-22.271 0-14.758 12.006-26.764 26.764-26.764 17.975 0 32.599 14.623 32.599 32.599 0 22.145-18.018 40.164-40.166 40.164z"
      })]
    })]
  });
}, KF = function(i) {
  var n = i.title, a = m(i, ow);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 150 100",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#ED2939",
      d: "M0 0h150v100H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#002395",
      d: "M0 0h20v44.33H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M20 0h20v44.33H20z"
    }), /* @__PURE__ */ e("path", {
      fill: "none",
      stroke: "#FFF",
      strokeWidth: 3,
      d: "M0 44.33h62.75V0"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M108.08 43.29 87.96 23.17h40.25l-20.13 20.12zm-6.7 6.71L81.25 29.88v40.25L101.38 50zm6.7 6.71L87.96 76.83h40.25l-20.13-20.12zm6.71-6.71 20.13-20.13v40.25L114.79 50z"
    })]
  });
}, YF = function(i) {
  var n = i.title, a = m(i, sw);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M0 85.331h512v341.337H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M0 85.331h256v170.663H0z"
    }), /* @__PURE__ */ e("path", {
      d: "m165.483 181.79 2.764 8.504h8.939l-7.232 5.254 2.763 8.503-7.234-5.255-7.233 5.255 2.763-8.503-7.233-5.254h8.94zm-44.904-66.783 4.606 14.173h14.9l-12.055 8.757 4.605 14.171-12.056-8.758-12.054 8.758 4.605-14.171-12.056-8.757h14.901zm44.522 14.841 4.606 14.172h14.9l-12.055 8.757 4.604 14.173-12.055-8.76-12.054 8.76 4.604-14.173-12.055-8.757h14.9zm-35.192 59.363 4.606 14.172h14.9l-12.055 8.758 4.604 14.171-12.055-8.759-12.054 8.759 4.604-14.171-12.055-8.758h14.9zm-39.01-37.103 4.605 14.173h14.9l-12.055 8.757 4.604 14.173-12.054-8.76-12.055 8.76 4.604-14.173-12.055-8.757h14.9z",
      fill: "#FFF"
    })]
  });
}, qF = function(i) {
  var n = i.title, a = m(i, cw);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 341.33",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#0052B4",
      d: "M0 0h512v341.34H0z"
    }), /* @__PURE__ */ e("path", {
      d: "m220.72 42.63 7.95 16.11 17.77 2.58-12.86 12.54 3.04 17.7-15.9-8.36-15.9 8.36 3.03-17.7-12.86-12.54 17.78-2.58zm70.56-.06 7.95 16.1 17.78 2.59-12.86 12.53 3.03 17.71-15.9-8.36-15.9 8.36 3.04-17.71-12.86-12.53 17.77-2.59zm62.08 11.36 7.95 16.11 17.77 2.58-12.86 12.54 3.04 17.7-15.9-8.35-15.9 8.35 3.04-17.7-12.87-12.54 17.78-2.58zm63.01 18.3 7.95 16.11 17.77 2.59-12.86 12.53 3.04 17.71-15.9-8.36-15.9 8.36 3.03-17.71-12.86-12.53 17.78-2.59zm-257.73-18.3 7.95 16.11 17.78 2.58-12.87 12.54 3.04 17.7-15.9-8.35-15.9 8.35 3.04-17.7-12.86-12.54 17.77-2.58zm-63.01 18.3 7.95 16.11 17.78 2.59-12.86 12.53 3.03 17.71-15.9-8.36-15.9 8.36 3.04-17.71-12.86-12.53 17.77-2.59z",
      fill: "#FFF"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "m217.53 259.33-27.22-13.61-27.22-54.43h27.22l27.22-27.22 13.61-27.22 27.22-13.61 13.61 13.61 27.22 13.61v13.61l13.61 13.61 40.83 27.22L340 245.73l-40.83 40.83-13.61-27.22-40.83 27.22v27.22l-13.61-13.61-13.59-40.84z"
    })]
  });
}, jF = function(i) {
  var n = i.title, a = m(i, hw);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 85.337h512v341.326H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M0 85.337h512v113.775H0z"
    }), /* @__PURE__ */ e("path", {
      d: "M0 312.888h512v113.775H0z"
    })]
  });
}, ZF = function(i) {
  var n = i.title, a = m(i, uw);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 90 60",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 0h90v60H0z"
    }), /* @__PURE__ */ e("path", {
      stroke: "#7f7f7f",
      strokeWidth: 0.25,
      fill: "#ABABAB",
      d: "M75.6 39.6c-1.1.7 0 1.8-.6 1.9-.6.1-1.5-1.4-.2-2.5 1.6-1.5 5.8 0 5.9 4.3 0 2.2-.9 6.8-7.2 6.8-7.6 0-11.4-5.7-11.4-11.4 0-4.8 3.7-13.5 6.5-14.6 3.1-1.2 6.7-3.5 6.8-5 0-.5-1.4-.1-3.3.9-3.1 1.7-6.6 2.5-6.6 1.4s2.9-3.1 4-4.6c1.2-1.6.9-5.5 3-5.5 7.6 0 9.9 7.7 7 11.7-1.9 2.6 4.3 1 4.3 1s0 5.3-3.2 7.3c-3 1.8-4.8 3.9-4.8 3.9s.2-4.6-.5-3.9c-.6.7-11.1 4.5-10.3 12 .3 3 4.5 5.4 8.5 5.2s5.7-2.4 5.8-4.9c.1-3.9-3-4.4-3.7-4zm-64.9 4c.1 2.5 1.8 4.7 5.8 4.9s8.2-2.2 8.5-5.2c.8-7.5-9.7-11.3-10.3-12-.7-.7-.5 3.9-.5 3.9s-1.8-2.1-4.8-3.9c-3.2-2-3.2-7.3-3.2-7.3s6.2 1.6 4.3-1c-2.9-4-.6-11.7 7-11.7 2.1 0 1.8 3.9 3 5.5 1.1 1.5 4 3.5 4 4.6s-3.5.3-6.6-1.4c-1.9-1-3.3-1.4-3.3-.9.1 1.5 3.7 3.8 6.8 5 2.8 1.1 6.5 9.8 6.5 14.6 0 5.7-3.8 11.4-11.4 11.4-6.3 0-7.2-4.6-7.2-6.8.1-4.3 4.3-5.8 5.9-4.3 1.2 1.1.4 2.7-.2 2.5-.6-.1.6-1.2-.6-1.9-.6-.4-3.7.1-3.7 4z"
    }), /* @__PURE__ */ e("path", {
      fill: "#DE393A",
      d: "M31 28.8v14c0 1.9 2.1 1.6 2.1 1.6h9.3c1.2 0 2.6 2.3 2.6 2.3s1.4-2.3 2.5-2.3h9.6s2 .2 2-1.8V28.7H31z"
    }), /* @__PURE__ */ e("path", {
      fill: "#3951A3",
      d: "M31 13.1h28v15.7H31z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M50.1 16.5c-.4 2.4-2.5 4.2-5.1 4.2-2.5 0-4.6-1.8-5.1-4.2-.5.9-.8 1.9-.8 3 0 3.3 2.6 5.9 5.9 5.9 3.3 0 5.9-2.6 5.9-5.9 0-1.1-.3-2.1-.8-3z"
    }), /* @__PURE__ */ e("circle", {
      fill: "#FEE05F",
      cx: 39.1,
      cy: 36.5,
      r: 3
    }), /* @__PURE__ */ e("circle", {
      fill: "#FEE05F",
      cx: 50.9,
      cy: 36.5,
      r: 3
    })]
  });
}, JF = function(i) {
  var n = i.title, a = m(i, fw);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M0 85.337h512v341.326H0z"
    }), /* @__PURE__ */ e("path", {
      d: "M114.024 256.001 0 141.926v228.17z"
    }), /* @__PURE__ */ e("path", {
      fill: "#ffb915",
      d: "M161.192 256 0 94.7v47.226l114.024 114.075L0 370.096v47.138z"
    }), /* @__PURE__ */ e("path", {
      fill: "#007847",
      d: "M509.833 289.391c.058-.44.804-.878 2.167-1.318v-65.464H222.602L85.33 85.337H0V94.7L161.192 256 0 417.234v9.429h85.33l137.272-137.272h287.231z"
    }), /* @__PURE__ */ e("path", {
      fill: "#000c8a",
      d: "M503.181 322.783H236.433l-103.881 103.88H512v-103.88z"
    }), /* @__PURE__ */ e("path", {
      fill: "#e1392d",
      d: "M503.181 189.217H512V85.337H132.552l103.881 103.88z"
    })]
  });
}, XF = function(i) {
  var n = i.title, a = m(i, dw);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      fill: "#496E2D",
      d: "M0 85.331h512v341.337H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FF9811",
      d: "M490.668 195.476h-48c0-8.836-7.164-16-16-16s-16 7.164-16 16h-48c0 8.836 7.697 16 16.533 16h-.533c0 8.836 7.162 16 16 16 0 8.836 7.162 16 16 16h32c8.836 0 16-7.164 16-16 8.836 0 16-7.164 16-16h-.533c8.837 0 16.533-7.164 16.533-16z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "M341.337 255.994h56.888v170.663h-56.888z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FF9811",
      d: "M455.112 255.994H512v170.663h-56.888z"
    }), /* @__PURE__ */ e("path", {
      d: "M398.225 255.994h56.888v170.663h-56.888z"
    })]
  });
}, QF = function(i) {
  var n = i.title, a = m(i, vw);
  return /* @__PURE__ */ d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 85.333 512 341.333",
    ...a,
    children: [n && /* @__PURE__ */ e("title", {
      children: n
    }), /* @__PURE__ */ e("path", {
      d: "M0 85.333h512V426.67H0z"
    }), /* @__PURE__ */ e("path", {
      d: "M0 134.196h512v48.868H0zm0 195.472h512v48.868H0z",
      fill: "#FFDA44"
    }), /* @__PURE__ */ e("path", {
      fill: "#057f44",
      d: "M0 85.333h512v48.868H0z"
    }), /* @__PURE__ */ e("path", {
      d: "M0 183.069h512v48.868H0zm0 97.737h512v48.868H0z",
      fill: "#D80027"
    }), /* @__PURE__ */ e("path", {
      fill: "#057f44",
      d: "M0 378.542h512v48.128H0z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFF",
      d: "M276.992 255.996 106.329 426.659H0V85.333h106.329z"
    }), /* @__PURE__ */ e("path", {
      d: "M256 255.996 85.334 426.662h20.987l170.667-170.666L106.321 85.33H85.334z"
    }), /* @__PURE__ */ e("path", {
      fill: "#D80027",
      d: "m102.465 202.57 13.259 40.812h42.917l-34.718 25.226 13.26 40.814-34.718-25.224-34.72 25.224 13.262-40.814-34.718-25.226h42.915z"
    }), /* @__PURE__ */ e("path", {
      fill: "#FFDA44",
      d: "m138.94 259.335-34.559-12.243s-2.553-23.955-2.708-24.766c-1.173-6.18-6.603-10.851-13.123-10.851-7.376 0-13.357 5.98-13.357 13.357 0 1.223.178 2.402.486 3.528l-9.689 9.755h17.229c0 17.882-13.344 17.882-13.344 35.691l7.402 17.809h44.522l7.422-17.809h-.004a17.782 17.782 0 0 0 1.381-5.231c6.397-2.589 8.342-9.24 8.342-9.24z"
    })]
  });
};
const L5 = {
  AC: mw,
  AD: gw,
  AE: ww,
  AF: zw,
  AG: xw,
  AI: Mw,
  AL: Fw,
  AM: yw,
  AO: Hw,
  AQ: _w,
  AR: bw,
  AS: Ew,
  AT: Aw,
  AU: Sw,
  AW: Dw,
  AX: Cw,
  AZ: Tw,
  BA: Bw,
  BB: Lw,
  BD: Ow,
  BE: Rw,
  BF: Iw,
  BG: Pw,
  BH: Vw,
  BI: Nw,
  BJ: kw,
  BL: $w,
  BM: Ww,
  BN: Uw,
  BO: Gw,
  BQ: Kw,
  BR: Yw,
  BS: qw,
  BT: jw,
  BV: Zw,
  BW: Jw,
  BY: Xw,
  BZ: Qw,
  CA: tz,
  CC: ez,
  CD: rz,
  CF: nz,
  CG: iz,
  CH: lz,
  CI: az,
  CK: oz,
  CL: sz,
  CM: cz,
  CN: hz,
  CO: uz,
  CR: fz,
  CU: dz,
  CV: vz,
  CW: pz,
  CX: mz,
  CY: gz,
  CZ: wz,
  DE: zz,
  DJ: xz,
  DK: Mz,
  DM: Fz,
  DO: yz,
  DZ: Hz,
  EC: _z,
  EE: bz,
  EG: Ez,
  EH: Az,
  ER: Sz,
  ES: Dz,
  ET: Cz,
  EU: Tz,
  FI: Bz,
  FJ: Lz,
  FK: Oz,
  FM: Rz,
  FO: Iz,
  FR: Pz,
  GA: Vz,
  GB: Nz,
  GD: kz,
  GE: $z,
  GF: Wz,
  GG: Uz,
  GH: Gz,
  GI: Kz,
  GL: Yz,
  GM: qz,
  GN: jz,
  GP: Zz,
  GQ: Jz,
  GR: Xz,
  GS: Qz,
  GT: tx,
  GU: ex,
  GW: rx,
  GY: nx,
  HK: ix,
  HM: lx,
  HN: ax,
  HR: ox,
  HT: sx,
  HU: cx,
  IC: hx,
  ID: ux,
  IE: fx,
  IL: dx,
  IM: vx,
  IN: px,
  IO: mx,
  IQ: gx,
  IR: wx,
  IS: zx,
  IT: xx,
  JE: Mx,
  JM: Fx,
  JO: yx,
  JP: Hx,
  KE: _x,
  KG: bx,
  KH: Ex,
  KI: Ax,
  KM: Sx,
  KN: Dx,
  KP: Cx,
  KR: Tx,
  KW: Bx,
  KY: Lx,
  KZ: Ox,
  LA: Rx,
  LB: Ix,
  LC: Px,
  LI: Vx,
  LK: Nx,
  LR: kx,
  LS: $x,
  LT: Wx,
  LU: Ux,
  LV: Gx,
  LY: Kx,
  MA: Yx,
  MC: qx,
  MD: jx,
  ME: Zx,
  MF: Jx,
  MG: Xx,
  MH: Qx,
  MK: tM,
  ML: eM,
  MM: rM,
  MN: nM,
  MO: iM,
  MP: lM,
  MQ: aM,
  MR: oM,
  MS: sM,
  MT: cM,
  MU: hM,
  MV: uM,
  MW: fM,
  MX: dM,
  MY: vM,
  MZ: pM,
  NA: mM,
  NC: gM,
  NE: wM,
  NF: zM,
  NG: xM,
  NI: MM,
  NL: FM,
  NO: yM,
  NP: HM,
  NR: _M,
  NU: bM,
  NZ: EM,
  OM: AM,
  PA: SM,
  PE: DM,
  PF: CM,
  PG: TM,
  PH: BM,
  PK: LM,
  PL: OM,
  PM: RM,
  PN: IM,
  PR: PM,
  PS: VM,
  PT: NM,
  PW: kM,
  PY: $M,
  QA: WM,
  RE: UM,
  RO: GM,
  RS: KM,
  RU: YM,
  RW: qM,
  SA: jM,
  SB: ZM,
  SC: JM,
  SD: XM,
  SE: QM,
  SG: tF,
  SH: eF,
  SI: rF,
  SJ: nF,
  SK: iF,
  SL: lF,
  SM: aF,
  SN: oF,
  SO: sF,
  SR: cF,
  SS: hF,
  ST: uF,
  SV: fF,
  SX: dF,
  SY: vF,
  SZ: pF,
  TA: mF,
  TC: gF,
  TD: wF,
  TF: zF,
  TG: xF,
  TH: MF,
  TJ: FF,
  TK: yF,
  TL: HF,
  TM: _F,
  TN: bF,
  TO: EF,
  TR: AF,
  TT: SF,
  TV: DF,
  TW: CF,
  TZ: TF,
  UA: BF,
  UG: LF,
  UM: OF,
  US: RF,
  UY: IF,
  UZ: PF,
  VA: VF,
  VC: NF,
  VE: kF,
  VG: $F,
  VI: WF,
  VN: UF,
  VU: GF,
  WF: KF,
  WS: YF,
  XK: qF,
  YE: jF,
  YT: ZF,
  ZA: JF,
  ZM: XF,
  ZW: QF
}, O5 = 8, ty = _i("div")(() => ({
  fontSize: "1rem",
  lineHeight: "1rem",
  paddingLeft: 8,
  paddingTop: 2
})), ey = () => /* @__PURE__ */ d("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  children: [/* @__PURE__ */ e("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /* @__PURE__ */ e("path", {
    d: "M7 10l5 5 5-5z"
  })]
}), ry = _i(Yc)(() => ({
  width: "min-content",
  minWidth: 30,
  padding: 0,
  height: 30,
  borderRadius: 0,
  display: "flex",
  alignItems: "center",
  "& svg": {
    width: "auto",
    height: "1em"
  }
})), ny = (l) => {
  const {
    data: i,
    index: n,
    style: a
  } = l, h = i[n], [v, p, M] = h, {
    localization: F,
    countryClicked: E
  } = M, b = {
    ...a,
    top: a.top + O5
  }, A = L5[p.iso2.toUpperCase()];
  return /* @__PURE__ */ d(j4, {
    ...v,
    direction: "row",
    alignItems: "center",
    gap: 1,
    sx: {
      padding: "0.25rem 0.75rem",
      cursor: "pointer"
    },
    onClick: () => E(p),
    component: "li",
    style: b,
    children: [Boolean(A) && /* @__PURE__ */ e(A, {
      style: {
        height: "1em"
      }
    }), !Boolean(A) && /* @__PURE__ */ e("div", {
      style: {
        width: "1.5rem"
      }
    }), /* @__PURE__ */ d("span", {
      children: [F && F[p.name] || p.name, " +", p.dialCode]
    })]
  }, p.dialCode);
}, R5 = Le.createContext({}), iy = Le.forwardRef((l, i) => {
  const n = Le.useContext(R5);
  return /* @__PURE__ */ e("div", {
    ref: i,
    ...l,
    ...n
  });
}), ly = (l) => {
  const i = Le.useRef(null);
  return Le.useEffect(() => {
    i.current != null && i.current.resetAfterIndex(0, !0);
  }, [l]), i;
}, ay = Le.forwardRef((l, i) => {
  const {
    children: n,
    ...a
  } = l, h = [];
  n.forEach((D) => {
    h.push(D);
  });
  const v = pd(), p = qc(v.breakpoints.up("sm"), {
    noSsr: !0
  }), M = h.length, F = p ? 36 : 48, E = (D) => D != null && D.hasOwnProperty("group") ? 48 : F, b = () => M > 8 ? 8 * F : h.map(E).reduce((D, N) => D + N, 0), A = ly(M);
  return /* @__PURE__ */ e("div", {
    ref: i,
    children: /* @__PURE__ */ e(R5.Provider, {
      value: a,
      children: /* @__PURE__ */ e(Dd, {
        itemData: h,
        height: b() + 2 * O5,
        width: "100%",
        ref: A,
        outerElementType: iy,
        innerElementType: "ul",
        itemSize: (D) => E(h[D]),
        overscanCount: 5,
        itemCount: M,
        children: ny
      })
    })
  });
}), oy = _i(jc)({
  width: "36ch !important",
  transform: "translate3d(-13px, 29px, 0px) !important",
  ["& .MuiAutocomplete-listbox"]: {
    boxSizing: "border-box",
    "& ul": {
      padding: 0,
      margin: 0
    }
  }
}), sy = ({
  selectedCountry: l,
  countries: i,
  localization: n,
  onCountrySelected: a
}) => {
  const [h, v] = je(!1), p = (F) => {
    v(!1), a(F);
  }, M = L5[l.iso2.toUpperCase()];
  return /* @__PURE__ */ e(Zc, {
    id: "virtualize-countries",
    disableListWrap: !0,
    disableClearable: !0,
    disablePortal: !0,
    PopperComponent: oy,
    ListboxComponent: ay,
    options: i,
    open: h,
    onClose: () => v(!1),
    value: l,
    isOptionEqualToValue: (F, E) => F.dialCode === E.dialCode,
    renderInput: (F) => /* @__PURE__ */ d(j4, {
      sx: {
        position: "relative",
        display: "grid",
        gridTemplate: "1fr / 1fr",
        placeItems: "center",
        "& > *": {
          gridColumn: "1 / 1",
          gridRow: "1 / 1"
        },
        ".MuiAutocomplete-popper": {
          position: "absolute",
          top: "0",
          left: "0"
        }
      },
      children: [/* @__PURE__ */ d(ry, {
        onClick: () => v(!h),
        children: [Boolean(M) && /* @__PURE__ */ e(M, {}), /* @__PURE__ */ d(ty, {
          children: ["+", l.dialCode]
        }), /* @__PURE__ */ e(ey, {})]
      }), /* @__PURE__ */ e(Z4, {
        ...F,
        sx: {
          opacity: 0,
          zIndex: -1
        }
      })]
    }),
    renderOption: (F, E) => [F, E, {
      localization: n,
      countryClicked: p
    }],
    getOptionLabel: (F) => n && n[F.name] || F.name
  });
}, cy = qt.exports.memoize(
  (l, i, n) => {
    var v;
    const a = (v = i.find((p) => p.iso2 === n)) != null ? v : null;
    if (qt.exports.trim(l) === "")
      return a;
    const h = qt.exports.reduce(
      i,
      (p, M) => l.startsWith(M.dialCode) && (M.dialCode.length > p.dialCode.length || M.dialCode.length === p.dialCode.length && M.priority < p.priority) ? M : p,
      {
        name: "",
        regions: [],
        iso2: "",
        dialCode: "",
        priority: 10001,
        hasAreaCodes: !1,
        isAreaCode: !1
      }
    );
    return h.name ? h : a;
  }
), hy = (l, i) => {
  const n = new RegExp(`^\\+?${l}`);
  return i.match(n) ? i.replace(n, "") : i;
}, uy = (l, i) => {
  if (typeof l == "string") {
    const n = l;
    return i.filter(
      (a) => a.regions.some((h) => h === n)
    );
  }
  return i.filter(
    (n) => n.regions.some((a) => l.includes(a))
  );
}, fy = (l, i) => l.length === 0 ? i : i.filter(
  (n) => l.some((a) => a === n.iso2)
), K4 = (l, i, n, a) => {
  let h;
  if (i ? (h = i.split(" "), h.shift(), h = h.join(" ")) : h = i, !l || l.length === 0)
    return "";
  if (l && l.length < 2 || !h || !a)
    return l;
  const v = qt.exports.reduce(
    h,
    (M, F) => M.remainingText.length === 0 ? M : F !== "." ? {
      formattedText: M.formattedText + F,
      remainingText: M.remainingText
    } : {
      formattedText: M.formattedText + qt.exports.head(M.remainingText),
      remainingText: qt.exports.tail(M.remainingText)
    },
    {
      formattedText: "",
      remainingText: l.split("")
    }
  );
  let p;
  return n ? p = v.formattedText + v.remainingText.join("") : p = v.formattedText, p.includes("(") && !p.includes(")") && (p += ")"), p;
}, un = (l, i) => {
  const n = i.replace(/\D/g, "").replace(/^0+/, "");
  return n.trim().length === 0 ? "" : l ? `+${l.dialCode}${n}` : i;
}, dy = Jc(Z4)(() => ({
  "& input": {
    borderLeft: "1px solid #c4c4c4",
    paddingLeft: 8
  }
})), vy = ({
  value: l,
  onlyCountries: i = [],
  preferredCountries: n = [],
  excludeCountries: a = [],
  defaultCountry: h = "",
  masks: v = {},
  placeholder: p = "(702) 123-4567",
  disabled: M = !1,
  error: F = !1,
  inputClass: E = "",
  autoFormat: b = !0,
  isValid: A = (K) => Ql.some((b1) => K.replace(/\D/g, "").startsWith(b1.dialCode) || b1.dialCode.startsWith(K)),
  disableDropdown: D = !1,
  enableLongNumbers: N = !1,
  regions: I = "",
  localization: w = {},
  onChange: y = () => {
  },
  keys: L = {
    UP: 38,
    DOWN: 40,
    RIGHT: 39,
    LEFT: 37,
    ENTER: 13,
    ESC: 27,
    PLUS: 43,
    A: 65,
    Z: 90,
    SPACE: 32
  },
  InputProps: $,
  onFocus: W,
  onClick: j,
  onBlur: S,
  ...Q
}) => {
  const [K, b1] = je(""), [f1, l1] = je(null), [E1, tt] = je([]), [k1, U1] = je([]), [nt, it] = je(!0), [G1, $1] = je(p), pt = (R) => {
    const M1 = v[R.iso2];
    return M1 || R.format;
  }, V = (R) => {
    !R || a1(R, !0);
  }, U = () => f1 ? {
    name: f1.name || "",
    dialCode: f1.dialCode || "",
    countryCode: f1.iso2 || ""
  } : {}, a1 = (R, M1 = !1, G = f1) => {
    if (!f1)
      return;
    const V1 = K, ot = R;
    if (ot === V1)
      return;
    let Y1 = ot;
    const Ct = ot.replace(/\D/g, "");
    if (Ct.length > 15)
      return;
    let mt = G;
    if (M1 && Ct.length > 1 && (mt = cy(Ct.substring(0, 6), E1, h) || G), !mt)
      return;
    const se = hy(mt.dialCode, Ct);
    Ct.length > 0 && mt && (Y1 = K4(se, mt ? pt(mt) : void 0, N, b)), b1(Y1), mt !== f1 && l1(mt), y && y(un(mt, Y1), U());
  }, o1 = (R) => {
    a1(R.currentTarget.value, !1);
  }, t1 = (R) => {
    var G;
    const M1 = (G = R.clipboardData) == null ? void 0 : G.getData("text");
    M1 && a1(M1, !0);
  };
  Jl(() => {
    var ot;
    let R = Ql;
    I && (R = uy(I, R)), a && (R = R.filter((Y1) => !a.includes(Y1.iso2)));
    const M1 = fy(i, R);
    tt(M1);
    const G = qt.exports.filter(R, (Y1) => n.some((Ct) => Ct === Y1.iso2));
    U1(G);
    const V1 = (ot = M1.find((Y1) => Y1.iso2 === h)) != null ? ot : M1[0];
    if (!V1) {
      console.error("[MuiPhoneNumber] No countries found, aborting.");
      return;
    }
    l1(V1), a1(l || "", !0, V1), it(!1);
  }, []), Jl(() => {
    l && V(l);
  }, [V, l, f1]);
  const s1 = (R) => {
    j && j(R, U());
  }, r1 = (R) => {
    const M1 = qt.exports.isString(R) ? qt.exports.find(E1, (ot) => ot.iso2 === R) : qt.exports.find(E1, R);
    if (!M1)
      return;
    const G = K.replace(" ", "").replace("(", "").replace(")", "").replace("-", ""), V1 = K4(G.replace(/\D/g, ""), pt(M1), N, b);
    l1(M1), b1(V1), y && y(un(M1, V1), U());
  }, u1 = (R) => {
    $1(""), W && W(R, U());
  }, h1 = (R) => {
    R.currentTarget.value || $1(p), S && S(R, U());
  }, v1 = () => f1 && A(un(f1, K)), p1 = () => f1 ? (E1.sort((R, M1) => {
    const G = w[R.name] || R.name, V1 = w[M1.name] || M1.name;
    return G.localeCompare(V1);
  }), {
    startAdornment: /* @__PURE__ */ e(Xc, {
      sx: {
        position: "relative"
      },
      position: "start",
      children: /* @__PURE__ */ e(sy, {
        selectedCountry: f1,
        countries: k1.concat(E1),
        localization: w,
        onCountrySelected: (R) => r1(R)
      })
    })
  }) : null;
  if (nt || !f1)
    return null;
  const K1 = D ? {} : p1();
  return /* @__PURE__ */ d(m9, {
    children: [/* @__PURE__ */ e("input", {
      type: "hidden",
      value: un(f1, K)
    }), /* @__PURE__ */ e(dy, {
      placeholder: G1,
      value: K,
      className: E,
      error: F || !v1(),
      onChange: o1,
      onPaste: t1,
      onClick: s1,
      onFocus: u1,
      onBlur: h1,
      type: "tel",
      variant: "outlined",
      InputProps: {
        ...K1,
        ...$
      },
      ...Q
    })]
  });
};
vy.displayName = "MuiPhoneNumber";
export {
  vy as default
};