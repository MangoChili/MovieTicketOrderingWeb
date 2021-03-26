function showSecurityRiskDialog(t) {
    var e = $('<div>        <div data-login="bback" style="background:#000; opacity: 0.6; z-index:110; position: fixed; margin: 0px; padding: 0px; top: 0px; left: 0px; width: 100%; height: 100%;filter: alpha(opacity=60);"></div>        <div class="m-popbox" data-login="login-out" style="top: 50%;margin-top: -100px;">            <div class="headtip login-tip" style="display:block;padding: 20px;"> <a data-login="close" class="i-pop-close" title="关闭"></a>                <div class="popmid">                    <div class="tc mt25 mb30 px20 lh15" style="padding: 20px;">' + t + '</div>                    <div class="tc pb12 pt15">                        <a class="btnblue mr15 close" >确定</a>                    </div>                </div>            </div>        </div>    </div>');
    $(".close,.i-pop-close", e).on("click", function() {
        e.remove()
    }), $("body").append(e)
}
function showResetPasswordDialog(t) {
    var e = $('<div>        <div data-login="bback" style="background:#000; opacity: 0.6; z-index:110; position: fixed; margin: 0px; padding: 0px; top: 0px; left: 0px; width: 100%; height: 100%;filter: alpha(opacity=60);"></div>        <div class="m-popbox" data-login="login-out" style="top: 50%;margin-top: -100px;">            <div class="headtip login-tip" style="display:block;padding: 20px;"> <a data-login="close" class="i-pop-close" title="关闭"></a>                <div class="popmid">                    <div class="tc mt25 mb30 px20 lh15" style="padding: 20px;">很抱歉，账户已被冻结</div>                    <div class="yahei px14 tc bold" style="padding: 10px;">由于长时间未登录，账户已被临时冻结。<br/>请点击按钮，重新邮件激活。 </div>                    <div class="tc pb12 pt15">                        <a class="btnblue mr15 reset-password">立即激活</a>                    </div>                </div>            </div>        </div>    </div>');
    $(".i-pop-close", e).on("click", function() {
        e.remove()
    }), $(".reset-password", e).on("click", function() {
        window.location.href = t
    }), $("body").append(e)
}
function videoPlayStop() {
    $('[data-swf="layout"]').remove()
}
!function() {
    var t = document.createElement("script");
    t.src = "//static1.mtime.cn/components/1.x-latest/script/mtime/mtime-vip.js", t.onload = function() {
        (new MtimeVIPComponent.VIPBootstrap).start()
    }, document.getElementsByTagName("head")[0].appendChild(t)
}(), function() {
    var t = function() {
            var e = [].slice.call(arguments);
            return e.push(t.options), e[0].match(/^\s*#([\w:\-\.]+)\s*$/gim) && e[0].replace(/^\s*#([\w:\-\.]+)\s*$/gim, function(t, a) {
                var i = document,
                    n = i && i.getElementById(a);
                e[0] = n ? n.value || n.innerHTML : t
            }), t.documentHTML && (t.compile.call(t, t.documentHTML), t.documentHTML = ""), 1 == arguments.length ? t.compile.apply(t, e) : arguments.length >= 2 ? t.to_html.apply(t, e) : void 0
        },
        e = {
            escapehash: {
                "<": "&lt;",
                ">": "&gt;",
                "&": "&amp;",
                '"': "&quot;",
                "'": "&#x27;",
                "/": "&#x2f;"
            },
            escapereplace: function(t) {
                return e.escapehash[t]
            },
            escaping: function(t) {
                return "string" != typeof t ? t : t.replace(/[&<>"']/gim, this.escapereplace)
            },
            detection: function(t) {
                return "undefined" == typeof t ? "" : t
            }
        },
        a = function(t) {
            if ("undefined" != typeof console) {
                if (console.warn)
                    return void console.warn(t);
                if (console.log)
                    return void console.log(t)
            }
            throw t
        },
        i = function(t, e) {
            if (t = t !== Object(t) ? {} : t, t.__proto__)
                return t.__proto__ = e, t;
            var a = function() {},
                i = Object.create ? Object.create(e) : new (a.prototype = e, a);
            for (var n in t)
                t.hasOwnProperty(n) && (i[n] = t[n]);
            return i
        },
        n = function(t) {
            var e,
                a,
                i,
                n = /^function\s*[^\(]*\(\s*([^\)]*)\)/m,
                o = /,/,
                s = /^\s*(_?)(\S+?)\1\s*$/,
                r = /^function[^{]+{([\s\S]*)}/m,
                c = [];
            "function" == typeof t ? t.length && (e = t.toString()) : "string" == typeof t && (e = t), e = e.trim(), i = e.match(n), a = e.match(r)[1].trim();
            for (var l = 0; l < i[1].split(o).length; l++) {
                var d = i[1].split(o)[l];
                d.replace(s, function(t, e, a) {
                    c.push(a)
                })
            }
            return [c, a]
        };
    t.__cache = {}, t.version = "0.6.14", t.settings = {}, t.documentHTML = "", t.tags = {
        operationOpen: "{@",
        operationClose: "}",
        interpolateOpen: "\\${",
        interpolateClose: "}",
        noneencodeOpen: "\\$\\${",
        noneencodeClose: "}",
        commentOpen: "\\{#",
        commentClose: "\\}"
    }, t.options = {
        cache: !0,
        strip: !0,
        errorhandling: !0,
        detection: !0,
        _method: i({
            __escapehtml: e,
            __throw: a,
            __juicer: t
        }, {})
    }, t.tagInit = function() {
        var e = t.tags.operationOpen + "each\\s*([^}]*?)\\s*as\\s*(\\w*?)\\s*(,\\s*\\w*?)?" + t.tags.operationClose,
            a = t.tags.operationOpen + "\\/each" + t.tags.operationClose,
            i = t.tags.operationOpen + "if\\s*([^}]*?)" + t.tags.operationClose,
            n = t.tags.operationOpen + "\\/if" + t.tags.operationClose,
            o = t.tags.operationOpen + "else" + t.tags.operationClose,
            s = t.tags.operationOpen + "else if\\s*([^}]*?)" + t.tags.operationClose,
            r = t.tags.interpolateOpen + "([\\s\\S]+?)" + t.tags.interpolateClose,
            c = t.tags.noneencodeOpen + "([\\s\\S]+?)" + t.tags.noneencodeClose,
            l = t.tags.commentOpen + "[^}]*?" + t.tags.commentClose,
            d = t.tags.operationOpen + "each\\s*(\\w*?)\\s*in\\s*range\\(([^}]+?)\\s*,\\s*([^}]+?)\\)" + t.tags.operationClose,
            p = t.tags.operationOpen + "include\\s*([^}]*?)\\s*,\\s*([^}]*?)" + t.tags.operationClose,
            u = t.tags.operationOpen + "helper\\s*([^}]*?)\\s*" + t.tags.operationClose,
            h = "([\\s\\S]*?)",
            m = t.tags.operationOpen + "\\/helper" + t.tags.operationClose;
        t.settings.forstart = new RegExp(e, "igm"), t.settings.forend = new RegExp(a, "igm"), t.settings.ifstart = new RegExp(i, "igm"), t.settings.ifend = new RegExp(n, "igm"), t.settings.elsestart = new RegExp(o, "igm"), t.settings.elseifstart = new RegExp(s, "igm"), t.settings.interpolate = new RegExp(r, "igm"), t.settings.noneencode = new RegExp(c, "igm"), t.settings.inlinecomment = new RegExp(l, "igm"), t.settings.rangestart = new RegExp(d, "igm"), t.settings.include = new RegExp(p, "igm"), t.settings.helperRegister = new RegExp(u + h + m, "igm")
    }, t.tagInit(), t.set = function(t, e) {
        var a = this,
            i = function(t) {
                return t.replace(/[\$\(\)\[\]\+\^\{\}\?\*\|\.]/gim, function(t) {
                    return "\\" + t
                })
            },
            n = function(t, e) {
                var n = t.match(/^tag::(.*)$/i);
                return n ? (a.tags[n[1]] = i(e), void a.tagInit()) : void (a.options[t] = e)
            };
        if (2 === arguments.length)
            return void n(t, e);
        if (t === Object(t))
            for (var o in t)
                t.hasOwnProperty(o) && n(o, t[o])
    }, t.register = function(t, e) {
        var a = this.options._method;
        return a.hasOwnProperty(t) ? !1 : a[t] = e
    }, t.unregister = function(t) {
        var e = this.options._method;
        return e.hasOwnProperty(t) ? delete e[t] : void 0
    }, t.template = function(e) {
        var a = this;
        this.options = e, this.__interpolate = function(t, e, a) {
            var i,
                n = t.split("|"),
                o = n[0] || "";
            return n.length > 1 && (t = n.shift(), i = n.shift().split(","), o = "_method." + i.shift() + ".call({}, " + [t].concat(i) + ")"), "<%= " + (e ? "_method.__escapehtml.escaping" : "") + "(" + (a && a.detection === !1 ? "" : "_method.__escapehtml.detection") + "(" + o + ")) %>"
        }, this.__removeShell = function(e, i) {
            var o = 0;
            return e = e.replace(t.settings.helperRegister, function(e, a, i) {
                var o = n(i),
                    s = o[0],
                    r = o[1],
                    c = new Function(s.join(","), r);
                return t.register(a, c), e
            }).replace(t.settings.forstart, function(t, e, a, i) {
                var a = a || "value",
                    i = i && i.substr(1),
                    n = "i" + o++;
                return "<% ~function() {for(var " + n + " in " + e + ") {if(" + e + ".hasOwnProperty(" + n + ")) {var " + a + "=" + e + "[" + n + "];" + (i ? "var " + i + "=" + n + ";" : "") + " %>"
            }).replace(t.settings.forend, "<% }}}(); %>").replace(t.settings.ifstart, function(t, e) {
                return "<% if(" + e + ") { %>"
            }).replace(t.settings.ifend, "<% } %>").replace(t.settings.elsestart, function(t) {
                return "<% } else { %>"
            }).replace(t.settings.elseifstart, function(t, e) {
                return "<% } else if(" + e + ") { %>"
            }).replace(t.settings.noneencode, function(t, e) {
                return a.__interpolate(e, !1, i)
            }).replace(t.settings.interpolate, function(t, e) {
                return a.__interpolate(e, !0, i)
            }).replace(t.settings.inlinecomment, "").replace(t.settings.rangestart, function(t, e, a, i) {
                var n = "j" + o++;
                return "<% ~function() {for(var " + n + "=" + a + ";" + n + "<" + i + ";" + n + "++) {{var " + e + "=" + n + "; %>"
            }).replace(t.settings.include, function(t, e, a) {
                return e.match(/^file\:\/\//gim) ? t : "<%= _method.__juicer(" + e + ", " + a + "); %>"
            }), i && i.errorhandling === !1 || (e = "<% try { %>" + e, e += '<% } catch(e) {_method.__throw("Juicer Render Exception: "+e.message);} %>'), e
        }, this.__toNative = function(t, e) {
            return this.__convert(t, !e || e.strip)
        }, this.__lexicalAnalyze = function(e) {
            var a = [],
                i = [],
                n = "",
                o = ["if", "each", "_", "_method", "console", "break", "case", "catch", "continue", "debugger", "default", "delete", "do", "finally", "for", "function", "in", "instanceof", "new", "return", "switch", "this", "throw", "try", "typeof", "var", "void", "while", "with", "null", "typeof", "class", "enum", "export", "extends", "import", "super", "implements", "interface", "let", "package", "private", "protected", "public", "static", "yield", "const", "arguments", "true", "false", "undefined", "NaN"],
                s = function(t, e) {
                    if (Array.prototype.indexOf && t.indexOf === Array.prototype.indexOf)
                        return t.indexOf(e);
                    for (var a = 0; a < t.length; a++)
                        if (t[a] === e)
                            return a;
                    return -1
                },
                r = function(e, n) {
                    if (n = n.match(/\w+/gim)[0], -1 === s(a, n) && -1 === s(o, n) && -1 === s(i, n)) {
                        if ("undefined" != typeof window && "function" == typeof window[n] && window[n].toString().match(/^\s*?function \w+\(\) \{\s*?\[native code\]\s*?\}\s*?$/i))
                            return e;
                        if ("undefined" != typeof global && "function" == typeof global[n] && global[n].toString().match(/^\s*?function \w+\(\) \{\s*?\[native code\]\s*?\}\s*?$/i))
                            return e;
                        if ("function" == typeof t.options._method[n] || t.options._method.hasOwnProperty(n))
                            return i.push(n), e;
                        if (n.match(/^\d+/gim))
                            return e;
                        a.push(n)
                    }
                    return e
                };
            e.replace(t.settings.forstart, r).replace(t.settings.interpolate, r).replace(t.settings.ifstart, r).replace(t.settings.elseifstart, r).replace(t.settings.include, r).replace(/[\+\-\*\/%!\?\|\^&~<>=,\(\)\[\]]\s*([A-Za-z_0-9]+)/gim, r);
            for (var c = 0; c < a.length; c++)
                n += "var " + a[c] + "=_." + a[c] + ";";
            for (var c = 0; c < i.length; c++)
                n += "var " + i[c] + "=_method." + i[c] + ";";
            return "<% " + n + " %>"
        }, this.__convert = function(t, e) {
            var a = [].join("");
            return a += "'use strict';", a += "var _=_||{};", a += "var _out='';_out+='", a += e !== !1 ? t.replace(/\\/g, "\\\\").replace(/[\r\t\n]/g, " ").replace(/'(?=[^%]*%>)/g, "	").split("'").join("\\'").split("	").join("'").replace(/<%=(.+?)%>/g, "';_out+=$1;_out+='").split("<%").join("';").split("%>").join("_out+='") + "';return _out;" : t.replace(/\\/g, "\\\\").replace(/[\r]/g, "\\r").replace(/[\t]/g, "\\t").replace(/[\n]/g, "\\n").replace(/'(?=[^%]*%>)/g, "	").split("'").join("\\'").split("	").join("'").replace(/<%=(.+?)%>/g, "';_out+=$1;_out+='").split("<%").join("';").split("%>").join("_out+='") + "';return _out.replace(/[\\r\\n]\\s+[\\r\\n]/g, '\\r\\n');"
        }, this.parse = function(t, e) {
            var n = this;
            return e && e.loose === !1 || (t = this.__lexicalAnalyze(t) + t), t = this.__removeShell(t, e), t = this.__toNative(t, e), this._render = new Function("_, _method", t), this.render = function(t, e) {
                return e && e === a.options._method || (e = i(e, a.options._method)), n._render.call(this, t, e)
            }, this
        }
    }, t.compile = function(t, e) {
        e && e === this.options || (e = i(e, this.options));
        var n = this,
            o = {
                get: function(t) {
                    return e.cachestore ? e.cachestore.get(t) : n.__cache[t]
                },
                set: function(t, a) {
                    return e.cachestore ? e.cachestore.set(t, a) : n.__cache[t] = a
                }
            };
        try {
            var s = o.get(t) ? o.get(t) : new this.template(this.options).parse(t, e);
            return e && e.cache === !1 || o.set(t, s), s
        } catch (r) {
            return a("Juicer Compile Exception: " + r.message), {
                render: function() {}
            }
        }
    }, t.to_html = function(t, e, a) {
        return a && a === this.options || (a = i(a, this.options)), this.compile(t, a).render(e, a._method)
    }, "undefined" != typeof global && "undefined" == typeof window && t.set("cache", !1), "undefined" != typeof document && document.body && (t.documentHTML = document.body.innerHTML), "undefined" != typeof module && module.exports ? module.exports = t : this.juicer = t
}(), function(t) {
    t.fn.pageLoad = function(e, a) {
        "function" == typeof e && (e = {
            e: e
        }), parseInt(a) > 0 && (e.df = a);
        var i = {
            df: 20,
            e: null,
            et: "scroll",
            ct: window
        };
        e && t.extend(i, e);
        var n = this;
        return "scroll" == i.et && t(i.ct).bind("scroll", function() {
            n.each(function() {
                t.gIsKs(this, i) || t(this).trigger("appear")
            });
            var e = t.grep(n, function(t) {
                return !t.loaded
            });
            n = t(e)
        }), this.each(function() {
            var e = this;
            e.loaded = !1, t(e).one("appear", function() {
                this.loaded || (null != i.e && "" != i.e && i.e.apply(e), e.loaded = !0)
            }), "scroll" != i.et && t(e).bind(i.et, function(a) {
                e.loaded || t(e).trigger("appear")
            })
        }), t(window).scroll(), this
    }, t.gIsKs = function(e, a) {
        if (void 0 === a.ct || a.ct === window)
            var i = t(window).height() + t(window).scrollTop();
        else
            var i = t(a.ct).offset().top + t(a.ct).height();
        return i <= t(e).offset().top - a.df
    }
}(jQuery);
var formatMain = function() {};
formatMain.prototype = {
    dataSort: function(t, e) {
        function a(t) {
            if (t.length <= 1)
                return t;
            for (var i = Math.floor(t.length / 2), n = t.splice(i, 1)[0], o = n[e], s = [], r = [], c = 0; c < t.length; c++)
                t[c][e] < o ? s.push(t[c]) : r.push(t[c]);
            return a(s).concat(n, a(r))
        }
        return a(t)
    },
    byteCut: function(t, e) {
        var a = t,
            i = a.replace(/[^\u0000-\u00ff]/g, "aa"),
            n = 0,
            o = 0;
        if (i.length > e) {
            for (e -= 2, o; o < t.length; o++) {
                var s = t.charAt(o).replace(/[^\u0000-\u00ff]/g, "aa").length;
                if (1 == s ? n++ : 2 == s && (n += 2), n > e)
                    break
            }
            return t.substring(0, o) + "..."
        }
        return t
    },
    imgUrlProxy: function(t, e, a, i, n) {
        return t + "?uri=" + encodeURIComponent(e) + "&width=" + a + "&height=" + i + "&clipType=" + n
    },
    convertFenToYuan: function(t) {
        return t ? Number((.01 * t).toFixed(2)) : 0
    },
    extendsFun: function(t, e, a) {
        for (var i in e)
            !e.hasOwnProperty(i) || t.hasOwnProperty(i) && !a || (t[i] = e[i]);
        return t
    },
    groupByKey: function(t, e) {
        for (var a = {}, i = null, n = 0; n < t.length; n++) {
            var o = t[n][e];
            i != o && (a[o] = [], i = o), a[i].push(t[n])
        }
        return a
    },
    arrRisingDimension: function(t, e) {
        for (var a = [], i = t.length, n = Math.ceil(i / e), o = 0; n > o; o++)
            a[o] = t.slice(o * e, (o + 1) * e);
        return a
    },
    dateCount: function(t, e) {
        var a;
        if ("object" == typeof t && t instanceof Date)
            a = new Date(t.getTime());
        else if ("string" == typeof t || "number" == typeof t)
            t = String(t), a = new Date(Number(t.substr(0, 4)), Number(t.substr(4, 2)) - 1, Number(t.substr(6)));
        else {
            if (t)
                throw new Error("Invalid param d for dateFormat(d, type, f)");
            a = new Date
        }
        return a.setDate(a.getDate() + parseInt(e)), a
    },
    dateFormat: function(t, e, a) {
        var i = this.dateCount(t, e),
            n = i.getFullYear(),
            o = i.getMonth() + 1,
            s = i.getDate();
        if ("string" == typeof a) {
            o = 10 > o ? "0" + o : o, s = 10 > s ? "0" + s : s;
            var r,
                c = a.split("-"),
                l = [];
            for (r in c)
                switch (c[r]) {
                case "YY":
                    l[r] = n;
                    break;
                case "MM":
                    l[r] = o;
                    break;
                case "DD":
                    l[r] = s
                }
            return l.join("-")
        }
        return 1 == a ? n + "年" + o + "月" + s + "日" : 2 == a ? o + "月" + s + "日" : void 0
    },
    countWeek: function(t, e) {
        var a = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
            i = t.substr(0, 4),
            n = t.substr(4, 2),
            o = t.substr(6, 2);
        "string" == typeof t && (t = new Date(Number(i), Number(n) - 1, Number(o)));
        var s = new Date;
        if (!e) {
            var r = this.dateFormat(s, 0, "YY-MM-DD").split("-"),
                c = this.dateFormat(s, -1, "YY-MM-DD").split("-"),
                l = this.dateFormat(s, 1, "YY-MM-DD").split("-"),
                d = this.dateFormat(s, 2, "YY-MM-DD").split("-");
            if (r[0] == i && r[1] == n && r[2] == o)
                return unescape("%u4ECA%u5929");
            if (c[0] == i && c[1] == n && c[2] == o)
                return unescape("%u6628%u5929");
            if (l[0] == i && l[1] == n && l[2] == o)
                return unescape("%u660E%u5929");
            if (d[0] == i && d[1] == n && d[2] == o)
                return unescape("%u540E%u5929")
        }
        return a[t.getDay()]
    },
    evalData: function(data) {
        for (k in data)
            "" != data[k] && (data[k] = eval("(" + data[k] + ")"));
        return data
    }
};
var fmt = new formatMain;
!function(t, e) {
    "object" == typeof exports ? exports.fmt = new formatMain : t.eventUtil = e()
}(this, function() {});
var verifierMain = function() {};
verifierMain.prototype = {
    Require: /.+/,
    Email: /\w+([-+.\w]+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/i,
    Url: /^http:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/,
    Number: /^\d+$/,
    Password: /^\S{6,20}$/,
    NickName: /^[0-9a-zA-Z\u4e00-\u9fa5_·-]*$/,
    Int: /^[-\+]?\d+$/,
    Double: /^[-\+]?\d+(\.\d+)?$/,
    English: /^[A-Za-z]+$/,
    Chinese: /^[\u0391-\uFFE5]+$/,
    Tag: /[\\\/\<\>\`\~\'\"\、\!\@\#\$\%\^\&\*\{\}\?\(\)\（\）\《\》\-\:]/,
    DateTime: /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2})$/,
    IdCard: /^(\d{18,18}|\d{15,15}|\d{17,17}[x|X])$/,
    MobilePhone: /^1[0-9]{10}$/,
    MobilePhone2: /^1[0-9]{10}$/,
    Postcode: /^[0-9][0-9]{5}$/,
    testRegExp: function(t, e) {
        return t.test(e)
    },
    vfUrl: function(t) {
        return this.testRegExp(this.Url, t)
    },
    vfEmail: function(t) {
        return this.testRegExp(this.Email, t)
    },
    vfPassword: function(t) {
        return this.testRegExp(this.Password, t)
    },
    vfNickName: function(t) {
        if (!t)
            return !1;
        var e = this.getChineseStringLength(t);
        return e >= 4 && 20 >= e ? this.testRegExp(this.NickName, t) : !1
    },
    vfMobilePhone: function(t) {
        return this.testRegExp(this.MobilePhone, t)
    },
    isChinese: function(t) {
        var e = /[u00-uFF]/;
        return !e.test(t)
    },
    encodePassword: function(t) {
        if (t.length < 6)
            return t;
        var e = t.substr(0, 1);
        if ("*" == e) {
            var a = parseInt(t.substr(t.length - 2, 2), 10);
            if (a == t.length)
                return t
        }
        var i = this._encode64(t),
            a = i.length + 1 + 2;
        return 10 > a && (a = "0" + a), "*" + i + a
    },
    _encode64: function(t) {
        var e,
            a,
            i,
            n,
            o,
            s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            r = "",
            c = "",
            l = "",
            d = 0;
        do e = t.charCodeAt(d++), a = t.charCodeAt(d++), c = t.charCodeAt(d++), i = e >> 2, n = (3 & e) << 4 | a >> 4, o = (15 & a) << 2 | c >> 6, l = 63 & c, isNaN(a) ? o = l = 64 : isNaN(c) && (l = 64), r = r + s.charAt(i) + s.charAt(n) + s.charAt(o) + s.charAt(l), e = a = c = "", i = n = o = l = "";
        while (d < t.length);
        return r
    }
};
var vf = new verifierMain;
!function(t, e) {
    "object" == typeof exports ? exports.vf = new verifierMain : t.eventUtil = e()
}(this, function() {});
var checkUser = function() {};
checkUser.prototype = {
    userId: 0,
    getUser: function() {
        return this.userId
    },
    setUser: function(t) {
        this.userId = t
    }
};
var ckuser = new checkUser;
!function(t) {
    function e() {
        var t = (new Date).getTime(),
            e = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                var a = (t + 16 * Math.random()) % 16 | 0;
                return t = Math.floor(t / 16), ("x" == e ? a : 3 & a | 8).toString(16)
            });
        return e
    }
    function a(t, e) {
        function a(t, e) {
            return t << e | t >>> 32 - e
        }
        function i(t, e) {
            var a,
                i,
                n,
                o,
                s;
            return n = 2147483648 & t, o = 2147483648 & e, a = 1073741824 & t, i = 1073741824 & e, s = (1073741823 & t) + (1073741823 & e), a & i ? 2147483648 ^ s ^ n ^ o : a | i ? 1073741824 & s ? 3221225472 ^ s ^ n ^ o : 1073741824 ^ s ^ n ^ o : s ^ n ^ o
        }
        function n(t, e, a) {
            return t & e | ~t & a
        }
        function o(t, e, a) {
            return t & a | e & ~a
        }
        function s(t, e, a) {
            return t ^ e ^ a
        }
        function r(t, e, a) {
            return e ^ (t | ~a)
        }
        function c(t, e, o, s, r, c, l) {
            return t = i(t, i(i(n(e, o, s), r), l)), i(a(t, c), e)
        }
        function l(t, e, n, s, r, c, l) {
            return t = i(t, i(i(o(e, n, s), r), l)), i(a(t, c), e)
        }
        function d(t, e, n, o, r, c, l) {
            return t = i(t, i(i(s(e, n, o), r), l)), i(a(t, c), e)
        }
        function p(t, e, n, o, s, c, l) {
            return t = i(t, i(i(r(e, n, o), s), l)), i(a(t, c), e)
        }
        function u(t) {
            for (var e, a = t.length, i = a + 8, n = (i - i % 64) / 64, o = 16 * (n + 1), s = Array(o - 1), r = 0, c = 0; a > c;)
                e = (c - c % 4) / 4, r = c % 4 * 8, s[e] = s[e] | t.charCodeAt(c) << r, c++;
            return e = (c - c % 4) / 4, r = c % 4 * 8, s[e] = s[e] | 128 << r, s[o - 2] = a << 3, s[o - 1] = a >>> 29, s
        }
        function h(t) {
            var e,
                a,
                i = "",
                n = "";
            for (a = 0; 3 >= a; a++)
                e = t >>> 8 * a & 255, n = "0" + e.toString(16), i += n.substr(n.length - 2, 2);
            return i
        }
        var m,
            f,
            v,
            g,
            b,
            x,
            w,
            y,
            k,
            _ = Array(),
            C = 7,
            j = 12,
            $ = 17,
            A = 22,
            I = 5,
            T = 9,
            M = 14,
            S = 20,
            B = 4,
            J = 11,
            D = 16,
            R = 23,
            N = 6,
            U = 10,
            L = 15,
            E = 21;
        for (_ = u(t), x = 1732584193, w = 4023233417, y = 2562383102, k = 271733878, m = 0; m < _.length; m += 16)
            f = x, v = w, g = y, b = k, x = c(x, w, y, k, _[m + 0], C, 3614090360), k = c(k, x, w, y, _[m + 1], j, 3905402710), y = c(y, k, x, w, _[m + 2], $, 606105819), w = c(w, y, k, x, _[m + 3], A, 3250441966), x = c(x, w, y, k, _[m + 4], C, 4118548399), k = c(k, x, w, y, _[m + 5], j, 1200080426), y = c(y, k, x, w, _[m + 6], $, 2821735955), w = c(w, y, k, x, _[m + 7], A, 4249261313), x = c(x, w, y, k, _[m + 8], C, 1770035416), k = c(k, x, w, y, _[m + 9], j, 2336552879), y = c(y, k, x, w, _[m + 10], $, 4294925233), w = c(w, y, k, x, _[m + 11], A, 2304563134), x = c(x, w, y, k, _[m + 12], C, 1804603682), k = c(k, x, w, y, _[m + 13], j, 4254626195), y = c(y, k, x, w, _[m + 14], $, 2792965006), w = c(w, y, k, x, _[m + 15], A, 1236535329), x = l(x, w, y, k, _[m + 1], I, 4129170786), k = l(k, x, w, y, _[m + 6], T, 3225465664), y = l(y, k, x, w, _[m + 11], M, 643717713), w = l(w, y, k, x, _[m + 0], S, 3921069994), x = l(x, w, y, k, _[m + 5], I, 3593408605), k = l(k, x, w, y, _[m + 10], T, 38016083), y = l(y, k, x, w, _[m + 15], M, 3634488961), w = l(w, y, k, x, _[m + 4], S, 3889429448), x = l(x, w, y, k, _[m + 9], I, 568446438), k = l(k, x, w, y, _[m + 14], T, 3275163606), y = l(y, k, x, w, _[m + 3], M, 4107603335), w = l(w, y, k, x, _[m + 8], S, 1163531501), x = l(x, w, y, k, _[m + 13], I, 2850285829), k = l(k, x, w, y, _[m + 2], T, 4243563512), y = l(y, k, x, w, _[m + 7], M, 1735328473), w = l(w, y, k, x, _[m + 12], S, 2368359562), x = d(x, w, y, k, _[m + 5], B, 4294588738), k = d(k, x, w, y, _[m + 8], J, 2272392833), y = d(y, k, x, w, _[m + 11], D, 1839030562), w = d(w, y, k, x, _[m + 14], R, 4259657740), x = d(x, w, y, k, _[m + 1], B, 2763975236), k = d(k, x, w, y, _[m + 4], J, 1272893353), y = d(y, k, x, w, _[m + 7], D, 4139469664), w = d(w, y, k, x, _[m + 10], R, 3200236656), x = d(x, w, y, k, _[m + 13], B, 681279174), k = d(k, x, w, y, _[m + 0], J, 3936430074), y = d(y, k, x, w, _[m + 3], D, 3572445317), w = d(w, y, k, x, _[m + 6], R, 76029189), x = d(x, w, y, k, _[m + 9], B, 3654602809), k = d(k, x, w, y, _[m + 12], J, 3873151461), y = d(y, k, x, w, _[m + 15], D, 530742520), w = d(w, y, k, x, _[m + 2], R, 3299628645), x = p(x, w, y, k, _[m + 0], N, 4096336452), k = p(k, x, w, y, _[m + 7], U, 1126891415), y = p(y, k, x, w, _[m + 14], L, 2878612391), w = p(w, y, k, x, _[m + 5], E, 4237533241), x = p(x, w, y, k, _[m + 12], N, 1700485571), k = p(k, x, w, y, _[m + 3], U, 2399980690), y = p(y, k, x, w, _[m + 10], L, 4293915773), w = p(w, y, k, x, _[m + 1], E, 2240044497), x = p(x, w, y, k, _[m + 8], N, 1873313359), k = p(k, x, w, y, _[m + 15], U, 4264355552), y = p(y, k, x, w, _[m + 6], L, 2734768916), w = p(w, y, k, x, _[m + 13], E, 1309151649), x = p(x, w, y, k, _[m + 4], N, 4149444226), k = p(k, x, w, y, _[m + 11], U, 3174756917), y = p(y, k, x, w, _[m + 2], L, 718787259), w = p(w, y, k, x, _[m + 9], E, 3951481745), x = i(x, f), w = i(w, v), y = i(y, g), k = i(k, b);
        return 16 == e ? h(w) + h(y) : h(x) + h(w) + h(y) + h(k)
    }
    function i() {
        var t,
            i,
            n = "",
            o = "",
            s = navigator.plugins,
            r = navigator.mimeTypes;
        if (s)
            for (s = Array.prototype.slice.call(navigator.plugins), t = 0, i = s.length; i > t; t++)
                n += s[t].filename;
        if (r)
            for (r = Array.prototype.slice.call(navigator.mimeTypes), t = 0, i = r.length; i > t; t++)
                o += r[t].description, r[t].enabledPlugin && (o += r[t].enabledPlugin.description, o += r[t].enabledPlugin.filename);
        return a(screen.width + e() + window.innerHeight + document.cookie + screen.height + navigator.userAgent + location.href + window.innerWidth + document.referrer + navigator.hardwareConcurrency + n + (new Date).getTime()).toUpperCase()
    }
    function n() {
        return /(?:;\s|^)_tt_=/gi.test(document.cookie)
    }
    t.fn.TrackerClickBase = function(e) {
        var a = function(t, e) {
            this.opt = e, this.obj = t, this.init()
        };
        a.prototype = {
            init: function() {
                var e = this;
                if (this.PAGE_TRACK_URL = "http://log.mtime.cn/_t.gif", this.PAGE_CLICK_URL = "http://log1.mtime.cn/_t.gif", this.AD_TRACK_URL = "http://log2.mtime.cn/_t.gif", this.AD_CLICK_URL = "http://log2.mtime.cn/_t.gif", this.MTIME_LOG_URL = "http://logx.mtime.com/", this.Pn = "", this.opt.pageview)
                    e.trackPageView();
                else if (this.opt.adTrack) {
                    var a = indexTGs;
                    for (var i in a)
                        a[i] ? (t("#" + i).html(a[i]), e.trackAdClick(i)) : t("#" + i).hide()
                } else
                    e.onMtimeClick()
            },
            onMtimeClick: function() {
                var e = this,
                    a = e.opt.evt,
                    i = a.target;
                if (i && i.tagName) {
                    var n = i.tagName.toLowerCase();
                    if ("a" != n && "button" != n && "input" != n) {
                        if (i = t(i).closest("a")[0], !i || !i.tagName) {
                            if (i = t(i).closest("data-mtime-tracker")[0], !i || !i.tagName)
                                return;
                            o = i.attr("data-mtime-tracker")
                        }
                        n = i.tagName.toLowerCase()
                    }
                    if ("input" != n || "submit" == i.type || "button" == i.type) {
                        var o = i.href || "";
                        if ("submit" == i.type) {
                            var s = t(i).closest("form")[0];
                            s && s.action && (o = s.action)
                        }
                        var r = {
                            dom: i,
                            tu: o,
                            cp: {
                                left: a.pageX,
                                top: a.pageY
                            }
                        };
                        e.trackMtimeClick(r)
                    }
                }
            },
            trackMtimeClick: function(t) {
                var e = this;
                if (t && t.dom) {
                    var a = (new Date).getTime(),
                        o = [];
                    o = o.concat(this.MTIME_LOG_URL), o = o.concat(["?pvid=", a]), o = o.concat(["&u=", encodeURIComponent(location.href)]), o = o.concat(["&tp=", encodeURIComponent(e.getTargetDOMPath(t.dom))]), t.tu && (o = o.concat(["&tu=", encodeURIComponent(t.tu)])), t.cp && t.cp.left && t.cp.top && (o = o.concat(["&cp=", encodeURIComponent([t.cp.left, "_", t.cp.top].join(""))]));
                    var s = e.cookie("_ar_") || "";
                    s && (o = o.concat(["&ar=", encodeURIComponent(s)]));
                    var r = e.cookie("_mi_") || "";
                    r && (o = o.concat(["&ut=", r])), e.trackClick2(t), n() || e.setTTCookieInCom(i()), e.log(o.join(""))
                }
            },
            trackClick: function(e) {
                var a = this,
                    i = [];
                i = i.concat(this.PAGE_TRACK_URL), i = this.getBaseParam(i), i = t("body").attr("pn") ? i.concat(["&pn=", a.pn]) : i.concat(["&pn=", a.pn]), t(e.dom).attr("data-pan") && (i = i.concat(["&pan=", t(e.dom).attr("data-pan")])), this.log(i.join(""))
            },
            trackClick2: function(e) {
                var a = this,
                    i = [];
                i = i.concat(this.PAGE_CLICK_URL), i = this.getBaseParam(i), i = t("body").attr("pn") ? i.concat(["&pn=", t("body").attr("pn")]) : i.concat(["&pn=", a.pn]), t(e.dom).attr("data-pan") && (i = i.concat(["&pan=", t(e.dom).attr("data-pan")])), this.log(i.join(""))
            },
            trackAdClick: function(t) {
                var e = [];
                e = e.concat(this.AD_CLICK_URL), e = this.getBaseParam(e), e = e.concat(["&t=", 1]), e = e.concat(["&an=", t]), this.log(e.join(""))
            },
            trackMtimePageView: function(e) {
                var a = (new Date).getTime(),
                    i = t("body").attr("pn") ? t("body").attr("pn") : "",
                    o = [];
                o = o.concat(this.MTIME_LOG_URL), o = o.concat(["?pvid=", a]), o = o.concat(["&pn=", i]), o = o.concat(["&u=", encodeURIComponent(location.href)]), e = e || this.getReferrer() || "", e && (o = o.concat(["&ur=", encodeURIComponent(e)]));
                var s = this.cookie("_ar_") || "";
                s && (o = o.concat(["&ar=", encodeURIComponent(s)]));
                var r = this.cookie("_mi_") || "";
                r && (o = o.concat(["&ut=", r])), n() ? this.log(o.join("")) : this.getLogxCNCookie.call(this, function() {
                    this.log(o.join(""))
                })
            },
            trackPageView: function() {
                this.trackMtimePageView(), this.trackGooglePageView();
                var e = [];
                e = e.concat(this.PAGE_TRACK_URL), e = this.getBaseParam(e), t("body").attr("pn") && (e = e.concat(["&pn=", t("body").attr("pn")])), this.log(e.join("")), this.trackBaiduPageView()
            },
            getTargetDOMPath: function(e) {
                var a = this,
                    i = [],
                    n = e;
                do {
                    var o = n.tagName || "";
                    if (o = o.toLowerCase(), !o || "html" == o)
                        break;
                    var s = [];
                    if (s.push(o), n.id)
                        s = s.concat(["#", n.id]);
                    else {
                        var r = n.parentNode;
                        if (r.childNodes.length > 1) {
                            for (var c = 1, l = 0; l < r.childNodes.length; ++l) {
                                var d = r.childNodes[l];
                                if (d == n)
                                    break;
                                var p = d.tagName || "";
                                p.toLowerCase() == o && c++
                            }
                            c > 1 && (s = s.concat([":eq(", c, ")"]))
                        }
                    }
                    if (n.className) {
                        var u = n.className.split(" ");
                        s = s.concat([".", u.join(".")])
                    }
                    var h = t(n),
                        m = h.attr("pan");
                    m = h.attr("data-pan") ? h.attr("data-pan") : m, m && (s = s.concat(["[pan='", m, "']"]));
                    var f = h.attr("pn");
                    f = h.attr("data-pn") ? h.attr("data-pn") : f, f && (s = s.concat(["[pn='", f, "']"]), a.pn = f), i.push(s.join("")), n = n.parentNode
                } while (n);
                return i.reverse().join(">")
            },
            trackBaiduPageView: function() {
                t.ajax({
                    url: "http://hm.baidu.com/h.js?6dd1e3b818c756974fb222f0eae5512e",
                    dataType: "script",
                    cache: !0,
                    success: function(t) {}
                })
            },
            trackGooglePageView: function() {
                if ("undefined" == typeof urchinTracker) {
                    var e = this;
                    t.ajax({
                        url: "http://www.google-analytics.com/ga.js",
                        dataType: "script",
                        success: function() {
                            try {
                                e._trackGooglePageView("UA-257914-4"), e._trackGooglePageView("UA-2192709-1")
                            } catch (t) {}
                        }
                    })
                }
            },
            _trackGooglePageView: function(t) {
                var e = e || [];
                e.push(["_setAccount", t]), e.push(["_trackPageview"]), function() {
                    var t = document.createElement("script");
                    t.type = "text/javascript", t.async = !0, t.src = ("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";
                    var e = document.getElementsByTagName("script")[0];
                    e.parentNode.insertBefore(t, e)
                }();
                var a = _gat._createTracker(t);
                a._trackPageview()
            },
            getBaseParam: function(t) {
                var e = this.getBrowser();
                t = t.concat(["?url=", encodeURIComponent(document.location.href)]), t = t.concat(["&u=", this.getUserCode()]), t = t.concat(["&uId=", this.getUserId()]), t = t.concat(["&w=", screen.width]), t = t.concat(["&h=", screen.height]), t = t.concat(["&r2=", encodeURIComponent(this.getReferrer())]), t = t.concat(["&b=", e.type]), t = t.concat(["&bVer=", e.ver]);
                var a = this.getUserIdentity();
                t = t.concat(["&u2=", a.id]), t = t.concat(["&isNew=", a.isNewbie]);
                var i = this.getPartnerType();
                return t = t.concat(["&pt=", i])
            },
            getReferrer: function() {
                var t = "";
                try {
                    t = top.document.referrer
                } catch (e) {
                    if (parent)
                        try {
                            t = parent.document.referrer
                        } catch (a) {
                            t = ""
                        }
                }
                return "" === t && (t = document.referrer), t
            },
            getBrowser: function() {
                var t = {
                        versions: function() {
                            var t = navigator.userAgent;
                            navigator.appVersion;
                            return {
                                ie: t.indexOf("MSIE") > -1 || !!t.match(/Trident\/7\./),
                                opera: t.indexOf("Presto") > -1,
                                webkit: t.indexOf("AppleWebKit") > -1,
                                gecko: t.indexOf("Gecko") > -1 && -1 == t.indexOf("KHTML")
                            }
                        }(),
                        language: (navigator.browserLanguage || navigator.language).toLowerCase()
                    },
                    e = 0,
                    a = 0,
                    i = navigator.userAgent.toLowerCase(),
                    n = /(msie|firefox|chrome|opera|version|trident).*?([\d.]+)/,
                    o = i.match(n);
                return t.versions.ie ? (e = 1, a = t.versions.ie) : t.versions.gecko ? (e = 2, a = t.versions.gecko) : t.versions.opera ? (e = 3, a = t.versions.opera) : t.versions.webkit && (e = 4, a = t.versions.webkit), a = o[2], {
                    type: e,
                    ver: a
                }
            },
            cookie: function(t, e, a) {
                if ("undefined" == typeof e) {
                    var i = null;
                    if (document.cookie && "" != document.cookie)
                        for (var n = document.cookie.split(";"), o = 0; o < n.length; o++) {
                            var s = jQuery.trim(n[o]);
                            if (s.substring(0, t.length + 1) == t + "=") {
                                i = decodeURIComponent(s.substring(t.length + 1));
                                break
                            }
                        }
                    return i
                }
                a = a || {}, null === e && (e = "", a.expires = -1);
                var r = "";
                if (a.expires && ("number" == typeof a.expires || a.expires.toUTCString)) {
                    var c;
                    "number" == typeof a.expires ? (c = new Date, c.setTime(c.getTime() + 24 * a.expires * 60 * 60 * 1e3)) : c = a.expires, r = "; expires=" + c.toUTCString()
                }
                var l = a.path ? "; path=" + a.path : "",
                    d = a.domain ? "; domain=" + a.domain : "",
                    p = a.secure ? "; secure" : "";
                document.cookie = [t, "=", encodeURIComponent(e), r, l, d, p].join("")
            },
            log: function(t) {
                var e = ((new Date).getTime(), new Image(1, 1));
                e.onLoad = function() {}, e.src = t + "&r=" + Math.random()
            },
            getUserCode: function() {
                var t = this.cookie("_userCode_");
                if (null === t || 0 === t.length) {
                    var e = new Date,
                        a = [];
                    a.push(e.getFullYear()), a.push(e.getMonth() + 1), a.push(e.getDate()), a.push(e.getHours()), a.push(e.getMinutes()), a.push(e.getSeconds()), a.push(parseInt(1e4 * Math.random(), 10)), t = a.join(""), this.cookie("_userCode_", t)
                }
                return t
            },
            getUserIdentity: function() {
                var t = this.cookie("_userIdentity_"),
                    e = !1;
                if (null === t || 0 === t.length) {
                    e = !0;
                    var a = new Date,
                        i = [];
                    i.push(a.getFullYear()), i.push(a.getMonth() + 1), i.push(a.getDate()), i.push(a.getHours()), i.push(a.getMinutes()), i.push(a.getSeconds()), i.push(parseInt(1e4 * Math.random(), 10)), t = i.join(""), this.cookie("_userIdentity_", t)
                }
                return {
                    id: t,
                    isNewbie: e
                }
            },
            getUserId: function() {
                var t = this.cookie("_mi_") || "";
                return t || t.length > 0 ? t : ""
            },
            getEvent: function() {
                var t = "";
                return t && 0 !== t.length || (t = this.cookie("_e_") || ""), t && t.length > 0 && this.cookie("_e_", t), t
            },
            getPartnerType: function() {
                var t = "";
                return t && 0 !== t.length || (t = this.cookie("_pt_") || ""), t && t.length > 0 && this.cookie("_pt_", t), t
            },
            getLogxCNCookie: function(e) {
                var a = this;
                t.ajax({
                    url: "//logx.mtime.cn/get_tt?t=" + (new Date).getTime(),
                    dataType: "jsonp",
                    timeout: 5e3,
                    success: function(t) {
                        "_tt_" === t.Name ? a.setTTCookieInCom.call(a, t.Value) : a.setTTCookieInCom.call(a, i())
                    },
                    error: function(t, e) {
                        "timeout" == e && a.setTTCookieInCom.call(a, i())
                    },
                    complete: function() {
                        e.call(a)
                    }
                })
            },
            setTTCookieInCom: function(t) {
                var e = {};
                "https:" == location.protocol && (e.secure = !0), e.domain = "." + location.host.split(".").reverse().slice(0, 2).reverse().join("."), e.path = "/", e.expires = 3650, this.cookie("_tt_", t, e)
            }
        };
        var o = {
            evt: null
        };
        e = t.extend(o, e), this.each(function() {
            new a(t(this), e)
        })
    }
}(jQuery), $("body").bind("mousedown", function(t) {
    $(this).TrackerClickBase({
        evt: t
    })
}), $("body").TrackerClickBase({
    pageview: !0
}), function(t) {
    t.fn.dialogs = function(e) {
        var a = function(t, e) {
            this.opt = e, this.obj = t, this.init()
        };
        a.prototype = {
            init: function() {
                var e = this;
                t("body").append(e.dialogHtml()), e.popTop(), e.afterRender()
            },
            dialogHtml: function() {
                var t = this,
                    e = null != t.opt.t ? t.opt.t : "",
                    a = null != t.opt.c ? t.opt.c : "",
                    i = null != t.opt.b ? t.opt.b : "",
                    n = (null != t.opt.x ? t.opt.x : "", "");
                return n = '          <div data-dialog="bback" style="background:#000; opacity: 0.6; z-index: 110; position: fixed; margin: 0px; padding: 0px; top: 0px; left: 0px; width: 100%; height: 100%;filter: alpha(opacity=60);"></div>          <div data-dialog="layout" class="m-popbox">            <a class="i-pop-close" ' + t.opt.xk + ' href="javascript:void(0)" title="关闭"></a>            ' + e + '            <div class="m-popcont">' + a + "</div>            " + i + "          </div>"
            },
            afterRender: function() {
                var e = this;
                t("[" + e.opt.xk + "]").on("click", function() {
                    e.opt.xe ? e.opt.xe.apply(t.extend({}, e)) : (t('[data-dialog="layout"]').remove(), t('[data-dialog="bback"]').remove())
                }), t("[" + e.opt.bsk + "]").on("click", function() {
                    e.opt.bse ? e.opt.bse.apply(t.extend({}, e)) : (t('[data-dialog="layout"]').remove(), t('[data-dialog="bback"]').remove())
                }), t("[" + e.opt.bck + "]").on("click", function() {
                    e.opt.bce ? e.opt.bce.apply(t.extend({}, e)) : (t('[data-dialog="layout"]').remove(), t('[data-dialog="bback"]').remove())
                })
            },
            popTop: function() {
                var e = t('[data-dialog="layout"]'),
                    a = e.height(),
                    i = e.width() / 2,
                    n = window.screen.availHeight,
                    o = parseInt((n - a) / 2 - 30);
                o = o >= 0 ? o : 0, e.css({
                    top: o,
                    "margin-left": -i
                })
            }
        };
        var i = {
            t: "",
            c: "",
            b: "",
            x: "",
            tk: 'data-dialog="tk"',
            ck: 'data-dialog="ck"',
            bsk: 'data-dialog="bsk"',
            bck: 'data-dialog="bck"',
            xk: 'data-dialog="xk"',
            bse: null,
            bce: null,
            xe: null
        };
        "object" == typeof e ? e = t.extend(i, e) : "string" == typeof e && (e = t.extend(i, {
            c: '<p class="alert">' + e + "</p>"
        })), this.each(function() {
            new a(t(this), e)
        })
    }
}(jQuery);
var ajaxMain = function() {};
if (!console)
    var console = {
        log: function() {},
        warn: function() {},
        error: function() {}
    };
ajaxMain.prototype = {
    getAjax: function(dat) {
        var _d = {};
        _d.data = void 0;
        var _t = this,
            p = [],
            k,
            params = {};
        dat.Jparams instanceof Object ? params = dat.Jparams : dat.Jparams instanceof String && (params = JSON.parse(dat.Jparams));
        for (k in params)
            p.push(k + "=" + params[k]);
        params = p.join("&");
        var _crossDomain = !0;
        "boolean" == typeof dat.crossDomain && (_crossDomain = dat.crossDomain), $.ajax({
            type: dat.Jtype || "get",
            url: dat.Jurl,
            data: params,
            cache: dat.Jcache || !1,
            dataType: dat.JdataType || "json",
            crossDomain: _crossDomain,
            xhrFields: dat.JxhrFields || null,
            success: function(data, status, jqXHR) {
                if (dat.JdataType && "script" == dat.JdataType)
                    _d.data = window[dat.Jmethod];
                else if (dat.JdataType && "text" == dat.JdataType) {
                    var valset = data.indexOf("="),
                        thestr = data.substring(4, valset);
                    eval(data), _d.data = eval(thestr)
                } else
                    _d.data = data;
                _d.obj = _t, dat.Jparams && (_d.param = dat.Jparams), dat.Jback && (_d.callback = dat.Jback, dat.Jback.apply(_d)), dat.Jcall && dat.Jcall.apply(_d)
            },
            error: function(t, e) {
                console.log("请求发生错误-->", t, e)
            }
        })
    }
};
var ajax = new ajaxMain,
    uaMain = function() {
        this.isApp = !1, this.isHybird = !1, this.isAndroidApp = !1, this.isIphoneApp = !1, this.isIos = !1, this.isAndroidHybird = !1, this.isIphoneHybird = !1, this.IosVersion = null, this.AndroidVersion = null, this.isIe8 = !1, this.init()
    };
uaMain.prototype = {
    init: function() {
        var t,
            e = this,
            a = "Phone",
            i = "Android",
            n = navigator.userAgent,
            o = n.indexOf(a),
            s = n.indexOf(i),
            r = n.indexOf("Hybird"),
            c = n.indexOf("WebView");
        n.indexOf("MSIE 8.0");
        o >= 0 && (e.isApp = !0, e.isIphoneApp = !0, e.isIos = !0, t = n.split(a)[1].split("(WebView")[0], e.IosVersion = parseInt(t.replace(/\d/g, ""), 10), (r >= 0 || c >= 0) && (e.isHybird = !0, e.isIphoneHybird = !0)), s >= 0 && (this.isApp = !0, this.isAndroidApp = !0, t = n.split(i)[1].split("(WebView")[0], e.AndroidVersion = parseInt(t.replace(/\d/g, ""), 10), (r >= 0 || c >= 0) && (e.isHybird = !0, e.isAndroidHybird = !0), navigator.userAgent.indexOf("MSIE 8.0") > 0 && (e.isIe8 = !0))
    },
    isApp: function() {
        return this.isApp
    },
    isHybird: function() {
        return this.isHybird
    },
    isIos: function() {
        return this.isIos
    },
    isAndroidApp: function() {
        return this.isAndroidApp
    },
    isIphoneApp: function() {
        return this.isIphoneApp
    },
    isAndroidHybird: function() {
        return this.isAndroidHybird
    },
    isIphoneHybird: function() {
        return this.isIphoneHybird
    },
    IosVersion: function() {
        return this.IosVersion
    },
    AndroidVersion: function() {
        return this.AndroidVersion
    },
    isIe8: function() {
        return this.isIe8
    },
    navigate: function(t) {
        var e = this,
            a = window.location,
            i = t ? t : a.protocol + "//" + a.host + a.pathname;
        if (e.isAndroidHybird) {
            var n = window.mtimeMall.jumpPage(i);
            if (n)
                return
        }
        return e.isIphoneHybird ? void (location.href = i) : void 0
    }
};
var ua = new uaMain;
!function(t) {
    t.fn.login = function(e) {
        var a = function(t, e) {
            this.opt = e, this.obj = t, this.cfg = {
                domain: site_domain ? site_domain : ".mtime.com",
                server: server ? server : "www.mtime.com"
            }, this.init()
        };
        a.prototype = {
            init: function() {
                var t = this;
                t.initLogin()
            },
            initLogin: function() {
                var t = this;
                if (t.opt.pop) {
                    var e = '<div data-login="bback" style="background:#000; opacity: 0.6; z-index: 110; position: fixed; margin: 0px; padding: 0px; top: 0px; left: 0px; width: 100%; height: 100%;filter: alpha(opacity=60);"></div>';
                    t.obj.append(e + t.loginHtml()), t.popTop()
                } else
                    t.obj.html(t.loginHtml()), t.obj.find('[data-login="login-out"]').removeClass("m-popbox");
                t.events()
            },
            events: function() {
                var e = this;
                e.obj.find('[data-login="regist"]').on("click", function() {
                    var t = e.opt.ru ? e.opt.ru : window.location.href;
                    window.location.href = "https://passport.mtime.com/member/signin/?redirectUrl=" + t
                }), e.obj.find('[data-login="mail"]').focus(function() {
                    t(this).val() == e.opt.ph && t(this).val("")
                }), e.obj.find('[data-login="mail"]').blur(function() {
                    "" == t(this).val() && t(this).val(e.opt.ph)
                }), e.obj.find('[data-login="isauto"]').on("click", function() {
                    var e = t(this).hasClass("ico-checkend") ? "ico-check" : "ico-checkend";
                    t(this).attr("class", e)
                }), e.obj.find('[data-login="refresh"]').on("click", function() {
                    e.ajaxCode(function() {
                        var t = this.data ? this.data.value : null;
                        t && (e.obj.find('[data-login="refresh-out"]').attr("code-id", t.id), e.obj.find('[data-login="codeImg"]').attr("src", t.src))
                    })
                }), e.obj.find('[data-login="close"]').on("click", function() {
                    t('[data-login="bback"]').remove(), t('[data-login="login-out"]').remove()
                }), e.obj.find('[data-login="login"]').on("click", function() {
                    var a = e.obj.find('[data-login="mail"]'),
                        i = e.obj.find('[data-login="password"]'),
                        n = e.obj.find('[data-login="code-out"]'),
                        o = e.obj.find('[data-login="refresh-out"]'),
                        s = e.obj.find('[data-login="captcha"]'),
                        r = !e.obj.find('[data-login="isauto"]').hasClass("ico-checkend"),
                        c = "",
                        l = "",
                        d = !0,
                        p = e.obj.find('[data-login="isauto"]').hasClass("ico-checkend");
                    vf.vfEmail(a.val()) || vf.vfMobilePhone(a.val()) ? (a.next().hide(), d = !0) : (a.next().show(), d = !1), vf.vfPassword(i.val()) ? (i.next().hide(), d = !0) : (i.next().show(), d = !1), n.is(":visible") && "" == s.val() ? (s.next().show(), d = !1) : n.is(":visible") && (c = o.attr("code-id"), l = s.val(), s.next().hide(), d = !0), d && e.ajaxLogin(function() {
                        var i = this.data ? this.data.value : null;
                        if (i)
                            if (i.userId && (e.opt.ce ? (t.cookie("loginuser", a.val()), e.opt.ce.apply(t.extend({}, e))) : (t.cookie("loginuser", a.val()), location.reload())), i.success)
                                location.reload();
                            else {
                                if (i.isShieldStatus)
                                    return void showSecurityRiskDialog(i.shieldTip);
                                if (i.needResetPassword)
                                    return void showResetPasswordDialog(i.resetPasswordUrl);
                                if (i.redirect)
                                    return void (window.location.href = i.redirect);
                                i.isRobot || i.vcodeValid === !1 ? (console.warn("需要验证码啊"), i.vcodeValid && "帐号或密码错误！请检查。" === i.message && (t(".ico-false").hide(), t(".iusername.ico-false,.ipassword.ico-false").show()), i.vcodeValid === !1 && t(".icode.ico-false").show(), e.obj.find('[data-login="refresh"]').trigger("click"), t(".codewrap,.codetxt").show()) : (t(".ico-false").hide(), e.obj.find('[data-login="refresh"]').trigger("click"), t(".iusername.ico-false,.ipassword.ico-false").show())
                            }
                        else
                            showSecurityRiskDialog("服务器出了点小状况，请稍候再试")
                    }, a.val(), vf.encodePassword(i.val()), p, r, c, l)
                })
            },
            ajaxCode: function(t) {
                ajax.getAjax({
                    Jurl: "http://service" + site_domain + "/utility/managerservice.m",
                    JdataType: "script",
                    Jtype: "get",
                    Jmethod: "RefreshVcodeResult",
                    Jparams: {
                        Ajax_CallBack: !0,
                        Ajax_CallBackType: "Mtime.Community.Controls.CommunityPages.ManagerService",
                        Ajax_CallBackMethod: "RefreshVcode",
                        Ajax_CrossDomain: 1,
                        Ajax_RequestUrl: "",
                        t: (new Date).getTime()
                    },
                    Jback: t
                })
            },
            ajaxLogin: function(t, e, a, i, n, o, s) {
                ajax.getAjax({
                    Jurl: "http://service" + site_domain + "/utility/managerservice.m",
                    JdataType: "script",
                    Jtype: "get",
                    Jmethod: "signInResult",
                    Jparams: {
                        Ajax_CallBack: !0,
                        Ajax_CallBackType: "Mtime.Community.Controls.CommunityPages.ManagerService",
                        Ajax_CallBackMethod: "SignIn",
                        Ajax_CrossDomain: 1,
                        Ajax_RequestUrl: "",
                        t: (new Date).getTime(),
                        Ajax_CallBackArgument0: e,
                        Ajax_CallBackArgument1: a,
                        Ajax_CallBackArgument2: i,
                        Ajax_CallBackArgument3: n,
                        Ajax_CallBackArgument4: o,
                        Ajax_CallBackArgument5: s
                    },
                    Jback: t
                })
            },
            loginHtml: function(e) {
                var a = this,
                    i = e ? "block" : "none",
                    n = t.cookie("loginuser") ? t.cookie("loginuser") : a.opt.ph,
                    o = '          <div class="m-popbox" data-login="login-out">            <a data-login="close" class="i-pop-close" href="javascript:;" title="关闭"></a>            <div class="headtip login-tip" style="display:block">              <dl class="logintool">                <dt><strong>为爱电影的人</strong> For people who love movies</dt>                <dd class="userlogin">                  <ul>                    <li>                      <label class="name">用户名：</label>                      <input type="text" value="' + n + '" class="tip" data-login="mail">                      <i class="iusername ico-false"></i>                    </li>                    <li>                      <label class="password">输入密码：</label>                      <input type="password" value="" data-login="password">                      <i class="ipassword ico-false"></i>                    </li>                    <li class="codewrap" data-login="code-out" style="display:' + i + '">                      <label class="code">输入验证码：</label>                      <input maxlength="4" type="text" value="" data-login="captcha" style="width:100px">                      <i class="icode ico-false"></i>                    </li>                    <li class="codetxt" data-login="refresh-out" style="display:' + i + '">                      <span data-login="refresh">                        <img data-login="codeImg" width="90" height="45" src="" style="cursor:pointer" class="v_m mr6">                      </span>&nbsp;                      <a href="javascript:;" data-login="refresh">刷新</a>                    </li>                  </ul>                  <p class="usertip">                    <a href="http://my.mtime.com/member/forget_password/" target="_blank" class="fr">忘记密码</a>                    <i class="ico-check" data-login="isauto"><!--ico-checkend--></i>记住我                  </p>                  <div class="loginbtn">                    <a href="javascript:;" class="btnblue" data-login="login">登录</a>                    <a href="javascript:;" class="btngrey" data-login="regist">成为会员</a>                  </div>                </dd>              </dl>              <dl class="otherlogin">                <dt>使用第三方登录</dt>                <dd>                  <a href="https://passport.mtime.com/unitelogin/dispatch/weibo/web/" title="新浪" class="ico-sina"></a>                  <a href="https://passport.mtime.com/unitelogin/dispatch/qq/web/" title="QQ" class="ico-qq"></a>                </dd>              </dl>            </div>          </div>        ';
                return o
            },
            popTop: function() {
                var t = this,
                    e = t.obj.find('[data-login="login-out"]'),
                    a = e.height(),
                    i = window.screen.availHeight,
                    n = (i - a) / 2 - 30;
                n = n >= 0 ? n : 0, e.css("top", n)
            }
        };
        var i = {
            pop: !0,
            ph: "输入电子邮箱/手机号",
            ru: null,
            ce: null
        };
        e = t.extend(i, e), this.each(function() {
            new a(t(this), e)
        })
    }
}(jQuery), function() {
    var t = {
        screenH: window.screen.availHeight,
        url: window.location.href,
        movieInfo: function(t, e) {
            ajax.getAjax({
                Jurl: "http://service.community.mtime.com/community.api",
                JdataType: "script",
                Jmethod: "getShareInfoResult",
                Jparams: {
                    Ajax_CallBack: !0,
                    Ajax_CallBackType: "Mtime.Community.Services.CommunityService",
                    Ajax_CallBackMethod: "GetShareInfo",
                    Ajax_CrossDomain: 1,
                    Ajax_RequestUrl: "",
                    Ajax_CallBackArgument0: "1111",
                    Ajax_CallBackArgument1: t,
                    Ajax_CallBackArgument2: "0"
                },
                Jback: e
            })
        },
        isShow: function() {
            var t = this,
                e = t.screenH / 2,
                a = $(window).scrollTop();
            a > e ? ($('[data-hang="search"]').show(), $('[data-hang="backtop"]').show()) : ($('[data-hang="search"]').hide(), $('[data-hang="backtop"]').hide())
        },
        events: function(t, e) {
            var a = this;
            a.isShow(), t && ($('[data-hang="search"]').hide(), $('[data-hang="backtop"]').hide(), $('[data-hang="hangout"]').show()), $(window).bind("scroll", function() {
                a.isShow()
            }), $('[data-hang="search"]').on("click", function() {
                "3" == $("#beaderbar").attr("data-headtype") ? ($("#searchtoolbtn").click(), $(".headbarout").hasClass("fixed") ? ($(".headbarout").removeClass("fixed"), $("body").css("padding-top", "0px")) : ($(".headbarout").addClass("fixed"), $("body").css("padding-top", "60px"), "-47px" == $("#searchbox").css("top") && ($("#searchbox").css("top", "15px"), $("#searchtoolbtn").click()))) : $("#searchtoolbtn").click()
            }), $('[data-hang="backtop"]').on("click", function() {
                $(window).scrollTop(0)
            }), $('[data-hang="share"]').on("click", function() {
                $('[data-hang="sharebox"]').is(":visible") ? ($(this).removeClass("curr"), $('[data-hang="sharebox"]').hide()) : ($(this).addClass("curr"), $('[data-hang="sharebox"]').show())
            }), $('[data-hang-share="wx"]').on("click", function() {
                var t = "http://service.mtime.com/GetQrCodeHandler.ashx?qrCodeStr=" + encodeURIComponent("http://www.mtime.com" + window.location.pathname),
                    e = '        <div class="share-code">          <h4 class="px18">分享到微信朋友圈</h4>          <p><img src="' + t + '" width="232" height="232" alt="二维码"></p>          <p class="c_666 px14">扫描上方二维码 分享到微信</p>        </div>';
                $(window).dialogs({
                    c: e,
                    b: ""
                })
            }), $('[data-hang-share="sina"]').on("click", function() {
                var t = "http://service.weibo.com/share/share.php",
                    i = "166678827",
                    n = "",
                    o = "1663735900",
                    s = a.url,
                    r = document.title;
                if (e) {
                    var c = "207872";
                    a.movieInfo(c, function() {
                        var t = this.data ? this.data.value : null;
                        t && (n = t.pic, r = t.title)
                    })
                }
                t = t + "?appkey=" + i + "&pic=" + n + "&ralateUid=" + o + "&url=" + s + "&title=" + r, window.open(t)
            }), $('[data-hang-share="qq"]').on("click", function() {
                var t = "http://connect.qq.com/widget/shareqq/index.html",
                    i = a.url,
                    n = document.title,
                    o = "",
                    s = server;
                if (e) {
                    var r = "207872";
                    a.movieInfo(r, function() {
                        var t = this.data ? this.data.value : null;
                        t && (o = t.pic, n = t.title)
                    })
                }
                t = t + "?url=" + i + "&desc=&title=" + n + "&summary=&pics=" + o + "&flash=&site=" + s, window.open(t)
            }), $('[data-hang-share="qzone"]').on("click", function() {
                var t = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey",
                    i = a.url,
                    n = document.title;
                if (e) {
                    var o = "207872";
                    a.movieInfo(o, function() {
                        var t = this.data ? this.data.value : null;
                        t && (n = t.title)
                    })
                }
                t = t + "?url=" + i + "&desc=" + n, window.open(t)
            }), $('[data-hang-share="email"]').on("click", function() {
                var t = "mailto:",
                    i = document.title,
                    n = document.title;
                if (e) {
                    var o = "207872";
                    a.movieInfo(o, function() {
                        var t = this.data ? this.data.value : null;
                        t && (i = t.mailTitle, n = t.title)
                    })
                }
                t = t + "?subject=" + encodeURIComponent(i) + "&body=" + encodeURIComponent(n), window.open(t)
            })
        }
    };
    $('[data-hang="sharebox"]')[0] ? t.events(!0, !1) : t.events()
}(), function(t) {
    t.fn.tabBase = function(e) {
        var a = function(t, e) {
            this.opt = e, this.obj = t, this.tabIdx = null, this.init()
        };
        a.prototype = {
            init: function() {
                var t = this;
                t.tEvents()
            },
            tEvents: function() {
                var e = this,
                    a = e.obj.find(e.opt.nav).children(e.opt.itnav),
                    i = e.obj.find(e.opt.box).children(e.opt.itbox);
                a.on(e.opt.eve, function() {
                    if (!t(this).parent().attr("disabled")) {
                        var n = a.index(t(this));
                        a.removeClass(e.opt.cur), t(this).addClass(e.opt.cur), i.hide().eq(n).show(), e.tabIdx = n, e.opt.cbFun && e.opt.cbFun.apply(t.extend({}, e))
                    }
                })
            }
        };
        var i = {
            box: '[data-plugin="tab-box"]',
            itbox: '[data-plugin="tab-itbox"]',
            nav: '[data-plugin="tab-nav"]',
            itnav: '[data-plugin="tab-itnav"]',
            eve: "click",
            cur: "curr",
            cbFun: null
        };
        e = t.extend(i, e), this.each(function() {
            new a(t(this), e)
        })
    }
}(jQuery), function(t) {
    t.fn.swf = function(e) {
        var a = function(t, e) {
            this.opt = e, this.obj = t, this.init()
        };
        a.prototype = {
            init: function() {
                var t = this;
                t.events()
            },
            events: function() {
                var t = this;
                t.obj.on("click", function() {
                    1 == t.opt.inset ? t.opt.tar.append(t.swfCont(t.opt.vid)) : 2 == t.opt.inset && t.opt.tar.html(t.swfCont(t.opt.vid)), t.afterRender()
                })
            },
            afterRender: function() {
                t('[data-swf="close"]').on("click", function() {
                    t('[data-swf="layout"]').remove()
                })
            },
            swfCont: function(t) {
                var e = this,
                    a = "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
                    i = "http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0",
                    n = e.opt.w,
                    o = e.opt.h,
                    s = "http://static1.mtime.cn/flash/newvideoplayer.swf?vid=" + t + "&amp;autoplay=1&amp;w=" + n + "&amp;h=" + o,
                    r = '          <div class="ele-video" data-swf="layout">            <div class="ele-videobg"></div>            <div class="ele-videoinner">              <span class="ele-videoclose" data-swf="close">关闭视频</span>              <object id="swfplayer" width="' + n + '" height="' + o + '" codebase="' + i + '" classid="' + a + '" autoactive="true">                <param name="movie" value="' + s + '">                <param name="quality" value="high">                <param name="allowFullScreen" value="true">                <param name="menu" value="false">                <param name="wmode" value="transparent">                <param name="allowScriptAccess" value="always">                <embed width="' + n + '" height="' + o + '" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" quality="high" src="' + s + '" play="true" allowfullscreen="true" allowscriptaccess="always" wmode="transparent">              </object>            </div>          </div>          ';
                return r
            }
        };
        var i = {
            w: 1e3,
            h: 563,
            vid: null,
            tar: t("body"),
            inset: 1
        };
        e = t.extend(i, e), this.each(function() {
            new a(t(this), e)
        })
    }
}(jQuery), $('[data-swf="plugin"]').each(function() {
    var t = $(this).attr("data-vid");
    $(this).swf({
        vid: t
    })
});
var headapiAjaxMain = function() {
    this.apiServer = "//service" + site_domain, this.tradeapiServer = "//trade" + site_domain, this.mallServer = "//service-mall" + site_domain
};
headapiAjaxMain.prototype = {
    signIn: function(t, e, a, i, n, o, s) {
        var r = this.apiServer + "/utility/managerservice.m",
            c = encodeURIComponent("http://www.mtime.com"),
            l = (new Date).getTime(),
            d = {
                Ajax_CallBack: !0,
                Ajax_CallBackType: "Mtime.Community.Controls.CommunityPages.ManagerService",
                Ajax_CallBackMethod: "SignIn",
                Ajax_CrossDomain: 1,
                Ajax_RequestUrl: c,
                t: l,
                Ajax_CallBackArgument0: t,
                Ajax_CallBackArgument1: e,
                Ajax_CallBackArgument2: a,
                Ajax_CallBackArgument3: i,
                Ajax_CallBackArgument4: n,
                Ajax_CallBackArgument5: o
            };
        ajax.getAjax({
            Jurl: r,
            JdataType: "script",
            Jtype: "get",
            Jmethod: "signInResult",
            Jparams: d,
            Jback: s
        })
    },
    signOut: function(t) {
        var e = this.apiServer + "/Service/Manager.msi",
            a = encodeURIComponent("http://www.mtime.com"),
            i = (new Date).getTime(),
            n = {
                Ajax_CallBack: !0,
                Ajax_CallBackType: "Mtime.Service.Pages.ManagerService",
                Ajax_CallBackMethod: "SignOut",
                Ajax_CrossDomain: 1,
                Ajax_RequestUrl: a,
                t: i
            };
        ajax.getAjax({
            Jurl: e,
            JdataType: "script",
            Jtype: "get",
            Jmethod: "signOutResult",
            Jparams: n,
            Jback: t
        })
    },
    RefreshVcode: function(t) {
        var e = this.apiServer + "/utility/managerservice.m",
            a = encodeURIComponent("http://www.mtime.com"),
            i = (new Date).getTime(),
            n = {
                Ajax_CallBack: !0,
                Ajax_CallBackType: "Mtime.Community.Controls.CommunityPages.ManagerService",
                Ajax_CallBackMethod: "RefreshVcode",
                Ajax_CrossDomain: 1,
                Ajax_RequestUrl: a,
                t: i
            };
        ajax.getAjax({
            Jurl: e,
            JdataType: "script",
            Jtype: "get",
            Jmethod: "RefreshVcodeResult",
            Jparams: n,
            Jback: t
        })
    },
    GetUser: function(t) {
        var e = this.apiServer + "/Service/Manager.msi",
            a = encodeURIComponent("http://www.mtime.com"),
            i = (new Date).getTime(),
            n = {
                Ajax_CallBack: !0,
                Ajax_CallBackType: "Mtime.Service.Pages.ManagerService",
                Ajax_CallBackMethod: "GetUserInfo2",
                Ajax_CrossDomain: 1,
                Ajax_RequestUrl: a,
                t: i
            };
        ajax.getAjax({
            Jurl: e,
            JdataType: "script",
            Jtype: "get",
            Jmethod: "getUserInfoResult",
            Jparams: n,
            Jback: t
        })
    },
    GetUnreadMessages: function(t) {
        var e = this.apiServer + "/Service/Message.msi",
            a = encodeURIComponent("http://www.mtime.com"),
            i = (new Date).getTime(),
            n = {
                Ajax_CallBack: !0,
                Ajax_CallBackType: "Mtime.Service.Pages.MessageService",
                Ajax_CallBackMethod: "GetUnreadMessages",
                Ajax_CrossDomain: 1,
                Ajax_RequestUrl: a,
                t: i,
                Ajax_CallBackArgument0: !0
            };
        ajax.getAjax({
            Jurl: e,
            JdataType: "script",
            Jtype: "get",
            Jmethod: "getUnreadMessagesResult",
            Jparams: n,
            Jback: t
        })
    },
    ClearAllUnreadCount: function(t) {
        var e = this.apiServer + "/Service/Message.msi",
            a = encodeURIComponent("http://www.mtime.com"),
            i = (new Date).getTime(),
            n = {
                Ajax_CallBack: !0,
                Ajax_CallBackType: "Mtime.Service.Pages.MessageService",
                Ajax_CallBackMethod: "ClearAllUnreadCount",
                Ajax_CrossDomain: 1,
                Ajax_RequestUrl: a,
                t: i,
                Ajax_CallBackArgument0: !0
            };
        ajax.getAjax({
            Jurl: e,
            JdataType: "script",
            Jtype: "get",
            Jmethod: "clearAllUnreadCountResult",
            Jparams: n,
            Jback: t
        })
    },
    GetMiniCartList: function(t) {
        var e = this.tradeapiServer + "/Service/Trade.p",
            a = encodeURIComponent("http://www.mtime.com"),
            i = (new Date).getTime(),
            n = {
                Ajax_CallBack: !0,
                Ajax_CallBackType: "Mtime.Trade.Pages.TradeService",
                Ajax_CallBackMethod: "GetMiniCartList",
                Ajax_CrossDomain: 1,
                Ajax_RequestUrl: a,
                Ajax_CallBackArgument0: !0,
                t: i
            };
        ajax.getAjax({
            Jurl: e,
            JdataType: "script",
            Jtype: "get",
            Jmethod: "result",
            Jparams: n,
            Jback: t
        })
    },
    RemoveCartItemsBySkus: function(t, e) {
        var a = this.tradeapiServer + "/Service/Trade.p",
            i = encodeURIComponent("http://www.mtime.com"),
            n = (new Date).getTime(),
            o = {
                Ajax_CallBack: !0,
                Ajax_CallBackType: "Mtime.Trade.Pages.TradeService",
                Ajax_CallBackMethod: "RemoveCartItemsBySkus",
                Ajax_CrossDomain: 1,
                Ajax_RequestUrl: i,
                t: n,
                Ajax_CallBackArgument0: t
            };
        ajax.getAjax({
            Jurl: a,
            JdataType: "script",
            Jtype: "get",
            Jmethod: "result",
            Jparams: o,
            Jback: e
        })
    },
    GetUserXpAndLevel: function(t, e) {
        var a = this.mallServer + "/Member.api",
            i = encodeURIComponent("http://www.mtime.com"),
            n = (new Date).getTime(),
            o = {
                Ajax_CallBack: !0,
                Ajax_CallBackType: "Mtime.Ecommerce.Services",
                Ajax_CallBackMethod: "GetUserXpAndLevel",
                Ajax_CrossDomain: 1,
                Ajax_RequestUrl: i,
                t: n,
                Ajax_CallBackArgument0: t
            };
        ajax.getAjax({
            Jurl: a,
            JdataType: "script",
            Jtype: "get",
            Jmethod: "GetUserXpAndLevelResult",
            Jparams: o,
            Jback: e
        })
    },
    GetCouponsForLogin: function(t) {
        var e = this.apiServer + "/Service/Manager.msi",
            a = encodeURIComponent("http://www.mtime.com"),
            i = (new Date).getTime(),
            n = {
                Ajax_CallBack: !0,
                Ajax_CallBackType: "Mtime.Service.Pages.ManagerService",
                Ajax_CallBackMethod: "GetCouponsForLogin",
                Ajax_CrossDomain: 1,
                Ajax_RequestUrl: a,
                t: i
            };
        ajax.getAjax({
            Jurl: e,
            JdataType: "script",
            Jtype: "get",
            Jmethod: "couponsForLoginResult",
            Jparams: n,
            Jback: t
        })
    },
    GetQcode: function(t) {
        var e = "//" + server + "/api/download-app";
        ajax.getAjax({
            Jurl: e,
            Ajax_CrossDomain: 1,
            JdataType: "jsonp",
            Jtype: "get",
            Jback: t
        })
    },
    mustPath: function() {
        console.log("must---")
    }
};
var headapiAjax = new headapiAjaxMain,
    _MT = "undefined" == typeof MT ? "M16" : MT;
!function() {
    function t() {
        $("#vcodeimg").show(), $("#vcodeinpuntbox").show(), headapiAjax.RefreshVcode(function() {
            var t = this.data;
            t && t.value && t.value.id && ($("#vcodeinpuntbox").find("input").attr("data-vcodeid", t.value.id), $("#vcodeimg").find("img").attr("src", t.value.src))
        })
    }
    function e() {
        $("#vcodeimg").hide(), $("#vcodeinpuntbox").hide()
    }
    function a() {
        headapiAjax.GetUser(function() {
            if (l = 0, this.data && this.data.value) {
                var t = this.data.value;
                $.cookie("defaultCity", encodeURI(t.cityName + "|" + t.cityId)), $('[data-plugin="city-name"]').text(t.cityName), $('[data-plugin="city-name"]').attr("data-id", t.cityId);
                var e = Number(t.userId) > 0;
                if (ckuser.setUser(t.userId), l = ckuser.getUser(), e)
                    0 == t.hasPassword && ($("#changepwurl").prev("em").remove(), $("#changepwurl").remove()), $("#userinfobox").show(), $("#headmessagebdiv").show(), $("#siginbox").hide(), i(), n(), t.nickName.length > 10 ? $("#nickName").html(t.nickName.substr(0, 8) + "…") : $("#nickName").html(t.nickName), $('[data-pchead-avatarname="head"]').html(t.nickName), $("#headlogined a").attr("alt", t.nickName), $('[data-pchead-avatarimg="head"]').attr({
                        src: t.headSrc128,
                        alt: t.nickName
                    }), $("#userheadimgbig").attr("src", t.headSrc128), o(), s(), u && $(".qrcode-tip").css({
                        left: $("#qrcodediv").offset().left
                    });
                else {
                    n(), $("#siginbox").show();
                    var a = d ? d : "";
                    a && $("#email_textbox").val(a)
                }
            }
        })
    }
    function i() {
        headapiAjax.GetUnreadMessages(function() {
            var t = this.data.value;
            t && ($(".message-tip").show().html('<em class="close"></em>' + t), $("#headmessagebox").addClass("cur"), $("#message-tip .close").click(function(t) {
                $(this).parent().parent();
                headapiAjax.ClearAllUnreadCount(function() {}), $(this).parent().remove(), $("#message-tip").hide(), $("#headmessagebox").removeClass("cur")
            }))
        })
    }
    function n() {
        $("#headcart-tip ul li .shop_price a").unbind("click"), headapiAjax.GetMiniCartList(function() {
            var t = this.data.value;
            if (t)
                if (t.count > 0) {
                    t.count;
                    $(".numcart").html(t.count);
                    var e = t.html.replace(/img src=\"http:/g, 'img src="');
                    $(".headcart-tip").html(e), $("#headcart-tip ul li .shop-price a").click(function() {
                        $(this).parent().parent().parent().hide();
                        var t = $(this).attr("actid") ? $(this).attr("actid") : "0",
                            e = $(this).attr("sku") + "|" + t + "|false";
                        headapiAjax.RemoveCartItemsBySkus(e, function() {
                            this.data;
                            n()
                        })
                    }), $("#headcart-tip ul li .gifttit a").click(function() {
                        $(this).parent().parent().parent().hide();
                        for (var t = $(this).attr("actid") ? $(this).attr("actid") : "0", e = $(this).attr("sku").split("|"), a = "", i = 0; i < e.length; i++)
                            a = a + e[i] + "|" + t + "|false", i != e.length - 1 && (a += ",");
                        headapiAjax.RemoveCartItemsBySkus(a, function() {
                            this.data;
                            n()
                        })
                    })
                } else
                    $("#headcartbox").html('<i class="icocart"></i>        <b class="numcart" style="display:none;">9</b>        <div class="headtip headcart-tip">          <p class="tips">您的购物车还是空的，赶快选购哦。</p>        </div>')
        })
    }
    function o() {
        headapiAjax.GetUserXpAndLevel(l, function() {
            var t = this.data.value;
            t && $("#userlevel").html("M" + t.level)
        })
    }
    function s() {
        headapiAjax.GetCouponsForLogin(function() {
            var t = this.data.value;
            t && (t.totalCount > 0 && t.totalCount && $("#totalcount").html("我的优惠券(" + t.totalCount + ")"), t.mtimeCardCount && t.mtimeCardCount > 0 && $("#mtimecardcount").html("我的礼品卡(" + t.mtimeCardCount + ")"), t.willEndCount > 0 && t.willEndCount ? $("#willendcount").html(t.willEndCount) : $(".my-couptip").hide())
        })
    }
    function r(t) {
        if (t.length < 6)
            return t;
        var e = t.substr(0, 1);
        if ("*" == e) {
            var a = parseInt(t.substr(t.length - 2, 2), 10);
            if (a == t.length)
                return t
        }
        var i = c(t),
            a = i.length + 1 + 2;
        return 10 > a && (a = "0" + a), "*" + i + a
    }
    function c(t) {
        var e,
            a,
            i,
            n,
            o,
            s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            r = "",
            c = "",
            l = "",
            d = 0;
        do e = t.charCodeAt(d++), a = t.charCodeAt(d++), c = t.charCodeAt(d++), i = e >> 2, n = (3 & e) << 4 | a >> 4, o = (15 & a) << 2 | c >> 6, l = 63 & c, isNaN(a) ? o = l = 64 : isNaN(c) && (l = 64), r = r + s.charAt(i) + s.charAt(n) + s.charAt(o) + s.charAt(l), e = a = c = "", i = n = o = l = "";
        while (d < t.length);
        return r
    }
    a();
    var l,
        d,
        p = 0;
    "-1" != $(".headbarnav").attr("data-navs") && $(".headbarnav").children("dd").eq($(".headbarnav").attr("data-navs")).addClass("cur");
    var u = navigator.userAgent.indexOf("MSIE 8.0") > 0;
    u && $(".login-tip").css("position", "fixed"), $(".headbarout").hasClass("fixed") || u && $(".headbarout").css({
        background: "#192332"
    }), headapiAjax.GetQcode(function() {
        $(".qrcode-tip").find("i").html('<img src="' + this.data.imageUrl + '" alt="扫描二维码下载APP" />')
    }), $(window).scroll(function(t) {
        var e = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset || 0,
            a = "1" == $("#searchbox").attr("data-searchbartype") || "3" == $("#searchbox").attr("data-searchbartype") || "4" == $("#searchbox").attr("data-searchbartype"),
            i = "3" == $("#beaderbar").attr("data-headtype");
        0 == e ? a && ($("#headbar").removeClass("head-mini"), $(".topmenu").css("z-index", "4"), $("#searchbox").css({
            position: "relative",
            top: "0%",
            width: "500px",
            left: "0%",
            display: "block",
            zIndex: "4"
        }).removeClass("headsearch2"), "3" == $("#searchbox").attr("data-searchbartype") && $("#searchbox").css("width", "375px"), $("#searchtoolbtn").hasClass("cancel") && ($("#searchbox").show(), $(".tophead").show()), $("#searchtooldiv").hide()) : e > 160 ? ("fixed" != $("#searchbox").css("position") && $("#searchinput").blur(), $("#searchtoolbtn").hasClass("cancel") && ($("#searchbox").show(), $(".tophead").css("opacity", "1")), a && ($(".topmenu").css("z-index", "7"), $("#searchbox").css({
            position: "fixed",
            top: "10px",
            padding: "0%",
            width: "400px",
            left: "50%",
            display: "none",
            zIndex: "999"
        }).addClass("headsearch2"), $(".searchlink").hide(), $("#searchtooldiv").show(), $("#searchtoolbtn").hasClass("cancel") && ($("#mtimelogo").show(), $("#searchtoolbtn").addClass("zoom").removeClass("cancel").trigger("click"))), i && $(".headbarout").hasClass("fixed") && setTimeout(function() {
            $(".headbarout").animate({
                top: "-62px"
            }, 1e3), $("#searchbox").animate({
                top: "-47px"
            }, 1e3), setTimeout(function() {
                $(".headbarout").removeClass("fixed"), $(".headbarout").css("top", "0px"), $("body").css("padding-top", "0px")
            }, 2300)
        }, 1e3)) : e > 0 && 160 >= e && p > e || 0 == e && p > 160 ? a && ($(".tophead").css("z-index", "5"), $(".tophead").css("opacity", "1"), $("#searchbox").css({
            position: "relative",
            top: "0%",
            width: "500px",
            left: "0%",
            display: "block",
            zIndex: "4"
        }), "3" == $("#searchbox").attr("data-searchbartype") && $("#searchbox").css("width", "375px"), $(".searchlink").show(), $("#searchtooldiv").hide(), "1" == $("#searchbox").attr("data-searchbartype") || ($("#searchbox").css({
            padding: "0"
        }), $(".topmenu").css("z-index", "5")), $("#mtimelogo").show(), 0 == e && ($(".topmenu").css("z-index", "4"), $("#headbar").removeClass("head-mini"), $("#searchtoolbtn").hasClass("cancel") && ($("#searchbox").show(), $(".tophead").css("opacity", "1")))) : e > p && a && $("#headbar").addClass("head-mini"), p = e
    }), $("#loginbox").click(function() {
        "block" != $(".login-tip").css("display") ? ($(".login-tip").show(), $(this).addClass("cur")) : ($(".login-tip").hide(), u && console.log(""), $("#loginbox").removeClass("cur").attr("class", ""))
    }), $(".login-tip").blur(function(t) {
        "block" == $(".login-tip").css("display") && ($(".login-tip").hide(), $(this).removeClass("cur"))
    }), $(document).mousedown(function(t) {
        function e(t) {
            return t = t || window.event, t.target || t.srcElement
        }
        var a = $("#siginbox"),
            i = $(e(t)).parents().is(a);
        i || "block" == $(".login-tip").css("display") && $("#loginbox").trigger("click")
    }), $("#email_textbox").focus(function() {
        "输入电子邮箱/手机号" == $(this).val() && $(this).val("")
    }).blur(function(t) {
        "" == $(this).val() && $(this).val("输入电子邮箱/手机号")
    }).keydown(function(t) {
        switch (t.keyCode) {
        case 13:
            $("#loginbtn").trigger("click")
        }
    }), $("#password_textbox").keydown(function(t) {
        switch (t.keyCode) {
        case 13:
            $("#loginbtn").trigger("click")
        }
    }), $("#vcode_textbox").keydown(function(t) {
        switch (t.keyCode) {
        case 13:
            $("#loginbtn").trigger("click")
        }
    }), $("#saveemail").click(function() {
        "true" == $(this).attr("data-saveemail") ? ($(this).attr("data-saveemail", !1), $(this).addClass("ico-check").removeClass("ico-checkend")) : ($(this).attr("data-saveemail", !0), $(this).addClass("ico-checkend").removeClass("ico-check"))
    }), $("#refreshvcode").click(function() {
        t()
    }), $("#loginbtn").click(function() {
        var a = $("#email_textbox")[0].value,
            i = r($("#password_textbox")[0].value),
            n = "true" == $("#saveemail").attr("data-saveemail"),
            o = "true" != $("#saveemail").attr("data-saveemail"),
            s = $("#vcodeinpuntbox").find("input").attr("data-vcodeid"),
            c = $("#vcodeinpuntbox").find("input").val();
        headapiAjax.signIn(a, i, n, o, s, c, function() {
            var i = this.data;
            if (i && i.value)
                if (i.value.success)
                    d = a, location.reload();
                else if (i.value.isShieldStatus)
                    ;
                else if (i.value.needResetPassword)
                    ;
                else if (i.value.redirect)
                    ;
                else {
                    if (i.value.isRobot)
                        return t(), void (i.value.vcodeValid || $("#vcodeinpuntbox").find(".ico-false").show());
                    e(), $("#vcodeinpuntbox").find("input").attr("data-vcodeid", null), $("#vcodeinpuntbox").find(".ico-false").hide(), $("#passwdbox").find(".ico-false").show(), $("#useridbox").find(".ico-false").show()
                }
        })
    }), $("#headsignout").click(function() {
        headapiAjax.signOut(function() {
            var t = this.data;
            t && t.value && location.reload()
        })
    }), $("#appdownloadbtn").click(function() {
        var t = ua.isIos;
        t && $(".qrcode-tip").toggle()
    })
}();
var footerWeekly = '<dl>  <dt class="fix"><span class="fr">${weeklyCount}</span><strong>时光周刊</strong></dt>  <dd>    <a href=${link} target="_blank" title="时光周刊">    <img src=${image} width="170" height="80" alt="时光周刊"></a>  </dd>  <dd class="input">    <input id="iptEMail" type="text" value="邮箱地址" class="c_a5">    <a id="btnSubscribe" href="javascript:void(0)">订阅</a>  </dd></dl>',
    footerapiAjaxMain = function() {
        this.apiServer = "//service" + site_domain, this.siteChannelServiceUrl = "//service-channel" + site_domain
    };
footerapiAjaxMain.prototype = {
    createSubscriber: function(t, e) {
        var a = this.siteChannelServiceUrl + "/service/Database.mcs",
            i = (new Date).getTime(),
            n = {
                Ajax_CallBack: !0,
                Ajax_CallBackType: "Mtime.Channel.Pages.DatabaseService",
                Ajax_CallBackMethod: "CreateSubscriber",
                Ajax_CrossDomain: 1,
                t: i,
                Ajax_CallBackArgument0: t
            };
        ajax.getAjax({
            Jurl: a,
            JdataType: "script",
            Jtype: "get",
            Jmethod: "orderResult",
            Jparams: n,
            Jback: e
        })
    },
    getMtimeWeekly: function(t) {
        var e = "//" + server + "/api/footer-weekly";
        ajax.getAjax({
            Jurl: e,
            Jback: t,
            JdataType: "jsonp",
            Jtype: "get"
        })
    }
};
var footerapiAjax = new footerapiAjaxMain;
!function() {
    $("#aWeiXinPicButton").click(function(t) {
        $("#divWeiXinPicContainer").show(), $(document).one("click", function() {
            $("#divWeiXinPicContainer").hide()
        }), t.stopPropagation()
    }), footerapiAjax.getMtimeWeekly(function() {
        this.data && this.data.weeklyCount && $("#fotweek").html(juicer(footerWeekly, this.data))
    }), $("#fotweek").on("click", "#btnSubscribe", function(t) {
        var e = $("#iptEMail"),
            a = e.val().trim(),
            i = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/i;
        if (a.length > 0) {
            if (!i.test(a))
                return $(window).dialogs("请输入合法的邮箱地址！"), void e.focus();
            footerapiAjax.createSubscriber(a, function() {
                var t = this.data;
                t && t.value && t.value.success ? ($(window).dialogs("您已成功订阅周刊，您的邮箱将会定期收到最新一期的周刊。"), e.val("邮箱地址")) : $(window).dialogs("订阅周刊失败，请重试或联系管理员。")
            })
        }
    }), document.getElementById("___szfw_logo___").oncontextmenu = function() {
        return !1
    }
}(), !function() {
    function t(t) {
        var e = $.cookie("DefaultCity-CookieKey") ? $.cookie("DefaultCity-CookieKey") : "290",
            a = $("#selctsearchbox").attr("data-searchtype");
        n.GetSuggestObjs(t, e, a, function() {
            var e = this.data.value,
                a = "";
            if (e)
                for (var i = e.objs, n = 0; n < i.length; n++)
                    "1" == i[n].type ? a = a + ' <ul class="moviename"> <li class="" data-pan="' + _MT + "_HeadNav_Search_Pre" + (n + 1) + '" onclick="window.location.href=\'' + i[n].moviepage + '\'">       <a href="' + i[n].moviepage + '"  class="pic"  ><img src="' + i[n].cover + '" width="45" height="60" alt="' + i[n].titlecn + " " + i[n].titleen + '"/></a>         <div class="txt">      <h2><a href="' + i[n].moviepage + '"  data-pan="' + _MT + '_HeadNav_Search_Pre">' + i[n].titlecn + " (" + i[n].year + ")</a></h2>                  <h3>" + i[n].titleen + "</h3>        <p>导演：" + i[n].director + '</p>      </div>      <div class="cate"> 电影 </div>        </li>        </ul>' : "2" == i[n].type ? a = a + ' <ul class="moviefilm"> <li class="" data-pan="' + _MT + "_HeadNav_Search_Pre" + (n + 1) + '" onclick="window.location.href=\'' + i[n].url + '\'">          <div class="icobox"><i class="ico_map">&nbsp;</i></div>       <div class="txt">                <h2><a  href="' + i[n].url + '"  data-pan="' + _MT + '_HeadNav_Search_Pre">' + i[n].name + "</a></h2>              <p></p>                <p>" + i[n].address + '</p>      </div>            <div class="cate"> 影院 </div>    </li>        </ul>' : "3" == i[n].type ? a = a + '  <ul class="moviename">     <li class="" data-pan="' + _MT + "_HeadNav_Search_Pre" + (n + 1) + '" onclick="window.location.href=\'' + i[n].personpage + '\'">          <a href="' + i[n].personpage + '"  class="pic"  data-pan="' + _MT + '_HeadNav_Search_Pre"><img src="' + i[n].cover + '" width="45" height="60" alt="' + i[n].titlecn + " " + i[n].titleen + '"/></a>        <div class="txt">       <h2><a href="' + i[n].personpage + '"  data-pan="' + _MT + '_HeadNav_Search_Pre">' + i[n].titlecn + " " + i[n].titleen + '</a></h2>      <p></p>          </div>         <div class="cate"> 影人 </div>          </li>       </ul>' : "4" == i[n].type && (a = a + ' <ul class="moviename">      <li class="" data-pan="' + _MT + "_HeadNav_Search_Pre" + (n + 1) + '" onclick="window.location.href=\'' + i[n].url + '\'">    <a href="' + i[n].url + '"  class="pic"  data-pan="' + _MT + '_HeadNav_Search_Pre"><img src="' + i[n].image + '" width="45" height="45" alt="' + i[n].name + '"/></a>      <div class="txt">            <h2><a href="' + i[n].url + '"  data-pan="' + _MT + '_HeadNav_Search_Pre">' + i[n].name + '</a></h2>        </div>        <div class="cate"> 商品 </div>     </li>       </ul> ');
            t && (a = a + '<p class="more"><a href="//search.mtime.com/search/?q=' + t + '&amp;t=0" target="_self" data-pan="' + _MT + '_HeadNav_Search_More">查看全部“' + t + '”的搜索结果</a> <i class="gt"></i></p>'), $("#searhprelist").html(a)
        })
    }
    function e() {
        $.cookie.raw = !0;
        var t = $.cookie("searchHistoryCookie", unescape),
            a = t ? t.split(",") : [],
            i = "";
        if (a[0]) {
            $("#searchhistory").html(""), i += '<li class="first"><a href="javascript:;" target="_blank" id="cleansearchhistory">清空历史</a>搜索记录</li>';
            for (var n = a.length - 1, o = 0; n >= 0; n--, o++)
                i = i + '<li data-hisnum="' + o + '" data-hisstr="' + a[n] + '">' + a[n] + "</li>";
            $("#searchhistory").append(i), $("#cleansearchhistory").click(function(t) {
                $.cookie("searchHistoryCookie", "", {
                    expires: 7,
                    path: "/",
                    domain: "mtime.com"
                }), $.cookie("searchHistoryCookie1", "", {
                    expires: 7,
                    path: "/",
                    domain: "mtime.com"
                }), $("#searchhistory").html(""), e()
            }), $("#searchhistory li:gt(0)").click(function(t) {
                var e = $(this).attr("data-hisstr"),
                    a = $("#selctsearchbox").attr("data-searchtype");
                url = "//search.mtime.com/search/?q=" + e + "&t=" + a, window.location.href = url
            })
        } else
            $("#searchhistory").append(i)
    }
    if (2 == $("#searchbox").attr("data-searchbartype") && $("#searchtooldiv").show(), 4 == $("#selctsearchbox").attr("data-searchtype")) {
        var a = /q=([^&]+)/gi.exec(location.search);
        a && $("#searchinput").val(decodeURIComponent(a[1]))
    }
    $("#selctsearchtype").mouseover(function() {
        $("#selectshow").removeClass("none"), $(".selctsearch").css("height", "45px")
    }).mouseout(function() {
        $("#selectshow").addClass("none")
    }), $("#selectshow ul li").click(function() {
        $("#selectshow").addClass("none"), $("#selctsearchbox").attr({
            "data-searchtype": $(this).attr("data-searchtype"),
            "data-searchtypecn": $(this).attr("data-searchtypecn")
        }).html($(this).attr("data-searchtypecn")), $("#searchinput").val(""), e();
        var t = $("#selctsearchbox").attr("data-searchtype");
        "5" == t ? $("#searchinput").val("请输入新闻关键词") : "4" == t ? $("#searchinput").val("按名称、电影、品牌等搜索商品") : "3" == t ? $("#searchinput").val("请输入影人关键词") : "2" == t ? $("#searchinput").val("请输入影院关键词") : "1" == t ? $("#searchinput").val("请输入电影关键词") : $("#searchinput").val($("#searchinput").attr("data-showkeyword")), $("#searchinputbtn").attr("data-pan", _MT + "_HeadNav_Search_Btn_" + t)
    }), $("#searchinput").bind("input propertychange", function() {
        var a = $(this).val();
        $("#searhprelist").attr("data-choose", "");
        var i = $("#selctsearchbox").attr("data-searchtype");
        return "5" == i ? void $("#searhprelist").html('<ul class="history" id="searchhistory"> <li class="first"><a href="javascript:;" target="_blank" onclick="return false;">清空历史</a>搜索记录</li> </ul>') : void (a ? ($("#searchlist").removeClass("none"), $("#searchlist").show(), t(a)) : ($("#searhprelist").html('<ul class="history" id="searchhistory"> </ul>'), $("#searchlist").hide(), e()))
    }), $("#searchinput").blur(function() {
        $("#searchinputbtn").removeClass("cur"), $(this).addClass("c_a5");
        var t = $("#selctsearchbox").attr("data-searchtype");
        "4" == t && "" == $("#searchinput").val() ? $("#searchinput").val("按名称、电影、品牌等搜索商品") : "搜索电影、影院、影人、商品、新闻" != $(this).val() && "请输入新闻关键词" != $(this).val() && "按名称、电影、品牌等搜索商品" != $(this).val() && "请输入影人关键词" != $(this).val() && "请输入影院关键词" != $(this).val() && "请输入电影关键词" != $(this).val() && $(this).val() != $(this).attr("data-default") || $(this).val($(this).attr("data-default")), $("#searchbox").attr("data-background") && "" == $("#searchinput").val() && $(this).val($(this).attr("data-default"))
    }).focus(function() {
        "搜索电影、影院、影人、商品、新闻" != $(this).val() && "请输入新闻关键词" != $(this).val() && "按名称、电影、品牌等搜索商品" != $(this).val() && "请输入影人关键词" != $(this).val() && "请输入影院关键词" != $(this).val() && "请输入电影关键词" != $(this).val() && $(this).val() != $(this).attr("data-default") || ($(this).attr("data-default", $(this).val()), $(this).val(""), e()), $("#searchinputbtn").addClass("cur"), $(this).removeClass("c_a5");
        var t = $.cookie("searchHistoryCookie");
        t && $("#searchlist").removeClass("none")
    }).keydown(function(t) {
        switch (t.keyCode) {
        case 13:
            $("#searhprelist").attr("data-choose") || $("#searchinputbtn").trigger("click")
        }
    }), $(document).mousedown(function(t) {
        function e(t) {
            return t = t || window.event, t.target || t.srcElement
        }
        var a = $(".mallnavtopsearch"),
            i = $(e(t)).parents().is(a);
        i || "block" == $("#searchlist").css("display") && $("#searchlist").addClass("none")
    }), $(document).keydown(function(t) {
        switch (t.keyCode) {
        case 38:
            var e = $("#searhprelist").children().length;
            if (!$("#searchlist").hasClass("none") && e > 1) {
                var a = $("#searhprelist").attr("data-choose") ? $("#searhprelist").attr("data-choose") : 0;
                a = a > 1 ? Number(a) - 1 : Number(e) - 1, $("#searhprelist").attr("data-choose", a), $("#searhprelist").children().find("li").css({
                    background: "#fff",
                    color: "#333"
                }), $("#searhprelist").children().eq(a).find("li").css({
                    background: "#e5f2fc",
                    color: "#267dd7"
                })
            }
            break;
        case 40:
            var e = $("#searhprelist").children().length;
            if (!$("#searchlist").hasClass("none") && e > 1) {
                var a;
                $("#searhprelist").attr("data-choose") ? (a = $("#searhprelist").attr("data-choose"), a = e - 2 > a ? Number(a) + 1 : 0) : a = 0, $("#searhprelist").attr("data-choose", a), $("#searhprelist").children().find("li").css({
                    background: "#fff",
                    color: "#333"
                }), $("#searhprelist").children().eq(a).find("li").css({
                    background: "#e5f2fc",
                    color: "#267dd7"
                })
            }
            break;
        case 13:
            var e = $("#searhprelist").children().length;
            if (!$("#searchlist").hasClass("none") && e > 1 && $("#searhprelist").attr("data-choose")) {
                var a = $("#searhprelist").attr("data-choose"),
                    i = $("#searhprelist").children().eq(a).find("li").children("a").attr("href");
                window.location.href = i
            }
        }
    }), $("#searhprelist").mouseout(function(t) {
        $("#searhprelist").children().find("li").css({
            background: "",
            color: ""
        }).attr("data-choose", "")
    }), $("#searchinputbtn").click(function(t) {
        var e,
            a = $("#selctsearchbox").attr("data-searchtype"),
            i = $("#searchinput").val();
        e = "5" == a ? "//news.mtime.com/search/tag/index.html?t=" + encodeURIComponent(i) : "//search.mtime.com/search/?q=" + i + "&t=" + a, window.location.href = e, $.cookie.raw = !0;
        var n = $.cookie("searchHistoryCookie", unescape),
            o = n ? n.split(",") : [];
        i != o[0] && i != o[1] && i != o[2] && i != o[3] && i != o[4] && (n = 5 == o.length ? escape(o[1] + "," + o[2] + "," + o[3] + "," + o[4] + "," + i) : n ? escape(n + "," + i) : escape(i), $.cookie("searchHistoryCookie", n, {
            expires: 7,
            path: "/",
            domain: "mtime.com"
        }))
    }), $("#searchtoolbtn").click(function() {
        if ($(this).hasClass("zoom")) {
            $(this).addClass("cancel").removeClass("zoom");
            var t = $("#mtimelogo").offset(),
                e = $("#searchtooldiv").offset(),
                a = e.left - t.left;
            $("#searchbox").css({
                left: t.left,
                zIndex: "1000",
                width: a,
                display: "block"
            }), $(".tophead").css({
                zIndex: "7",
                opacity: "1"
            }).show(), $("#mtimelogo").hide(), $("#searchtoolbox").attr("data-pan", _MT + "_HeadNav_Sreach_Tool_Cancel")
        } else
            $(this).addClass("zoom").removeClass("cancel"), $("#searchbox").css({
                zIndex: "1"
            }), $(".tophead").css("zIndex", "4"), $("#searchbox").css("display", "none"), $("#mtimelogo").show(), $("#searchtoolbox").attr("data-pan", _MT + "_HeadNav_Sreach_Tool_Zoom")
    }), $("#cleansearchhistory").click(function(t) {
        $.cookie("searchHistoryCookie", "", {
            expires: 7,
            path: "/",
            domain: "mtime.com"
        }), $("#searchhistory").html(""), e()
    });
    var i = function() {
        this.apiServer = "//service-channel" + site_domain, this.apiServer = "//service-channel.mtime.com"
    };
    i.prototype = {
        GetSuggestObjs: function(t, e, a, i) {
            var n = this.apiServer + "/Search.api",
                o = encodeURIComponent(location.href),
                s = (new Date).getTime(),
                r = {
                    Ajax_CallBack: !0,
                    Ajax_CallBackType: "Mtime.Channel.Services",
                    Ajax_CallBackMethod: "GetSuggestObjs",
                    Ajax_CrossDomain: 1,
                    Ajax_RequestUrl: o,
                    t: s,
                    Ajax_CallBackArgument0: t,
                    Ajax_CallBackArgument1: e,
                    Ajax_CallBackArgument2: a
                };
            ajax.getAjax({
                Jurl: n,
                JdataType: "script",
                Jmethod: "GetSuggestObjsResult",
                Jtype: "get",
                Jparams: r,
                Jback: i
            })
        },
        mustPath: function() {}
    };
    var n = new i
}(), !function() {
    "use strict";
    for (var t = "cn.testin.ab".split("."), e = window, a = 0; a < t.length; a++)
        e[t[a]] || (e[t[a]] = {}), e = e[t[a]]
}(), function(t, e) {
    "use strict";
    var a = "",
        i = "?",
        n = "function",
        o = "undefined",
        s = "object",
        r = "string",
        c = "model",
        l = "name",
        d = "type",
        p = "vendor",
        u = "version",
        h = "architecture",
        m = "console",
        f = "mobile",
        v = "tablet",
        g = "smarttv",
        b = "wearable",
        x = {
            extend: function(t, e) {
                var a = {};
                for (var i in t)
                    e[i] && e[i].length % 2 === 0 ? a[i] = e[i].concat(t[i]) : a[i] = t[i];
                return a
            },
            has: function(t, e) {
                return "string" == typeof t && -1 !== e.toLowerCase().indexOf(t.toLowerCase())
            },
            lowerize: function(t) {
                return t.toLowerCase()
            },
            major: function(t) {
                return typeof t === r ? t.split(".")[0] : e
            }
        },
        w = {
            rgx: function() {
                for (var t, a, i, r, c, l, d, p = 0, u = arguments; p < u.length && !l;) {
                    var h = u[p],
                        m = u[p + 1];
                    if (typeof t === o) {
                        t = {};
                        for (r in m)
                            m.hasOwnProperty(r) && (c = m[r], typeof c === s ? t[c[0]] = e : t[c] = e)
                    }
                    for (a = i = 0; a < h.length && !l;)
                        if (l = h[a++].exec(this.getUA()))
                            for (r = 0; r < m.length; r++)
                                d = l[++i], c = m[r], typeof c === s && c.length > 0 ? 2 == c.length ? typeof c[1] == n ? t[c[0]] = c[1].call(this, d) : t[c[0]] = c[1] : 3 == c.length ? typeof c[1] !== n || c[1].exec && c[1].test ? t[c[0]] = d ? d.replace(c[1], c[2]) : e : t[c[0]] = d ? c[1].call(this, d, c[2]) : e : 4 == c.length && (t[c[0]] = d ? c[3].call(this, d.replace(c[1], c[2])) : e) : t[c] = d ? d : e;
                    p += 2
                }
                return t
            },
            str: function(t, a) {
                for (var n in a)
                    if (typeof a[n] === s && a[n].length > 0) {
                        for (var o = 0; o < a[n].length; o++)
                            if (x.has(a[n][o], t))
                                return n === i ? e : n
                    } else if (x.has(a[n], t))
                        return n === i ? e : n;
                return t
            }
        },
        y = {
            browser: {
                oldsafari: {
                    version: {
                        "1.0": "/8",
                        1.2: "/1",
                        1.3: "/3",
                        "2.0": "/412",
                        "2.0.2": "/416",
                        "2.0.3": "/417",
                        "2.0.4": "/419",
                        "?": "/"
                    }
                }
            },
            device: {
                amazon: {
                    model: {
                        "Fire Phone": ["SD", "KF"]
                    }
                },
                sprint: {
                    model: {
                        "Evo Shift 4G": "7373KT"
                    },
                    vendor: {
                        HTC: "APA",
                        Sprint: "Sprint"
                    }
                }
            },
            os: {
                windows: {
                    version: {
                        ME: "4.90",
                        "NT 3.11": "NT3.51",
                        "NT 4.0": "NT4.0",
                        2e3: "NT 5.0",
                        XP: ["NT 5.1", "NT 5.2"],
                        Vista: "NT 6.0",
                        7: "NT 6.1",
                        8: "NT 6.2",
                        8.1: "NT 6.3",
                        10: ["NT 6.4", "NT 10.0"],
                        RT: "ARM"
                    }
                }
            }
        },
        k = {
            browser: [[/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i], [l, u], [/(OPiOS)[\/\s]+([\w\.]+)/i], [[l, "Opera Mini"], u], [/\s(opr)\/([\w\.]+)/i], [[l, "Opera"], u], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i], [l, u], [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i], [[l, "IE"], u], [/(edge)\/((\d+)?[\w\.]+)/i], [l, u], [/(yabrowser)\/([\w\.]+)/i], [[l, "Yandex"], u], [/(comodo_dragon)\/([\w\.]+)/i], [[l, /_/g, " "], u], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i, /(qqbrowser)[\/\s]?([\w\.]+)/i], [l, u], [/(uc\s?browser)[\/\s]?([\w\.]+)/i, /ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i, /JUC.+(ucweb)[\/\s]?([\w\.]+)/i], [[l, "UCBrowser"], u], [/(dolfin)\/([\w\.]+)/i], [[l, "Dolphin"], u], [/((?:android.+)crmo|crios)\/([\w\.]+)/i], [[l, "Chrome"], u], [/XiaoMi\/MiuiBrowser\/([\w\.]+)/i], [u, [l, "MIUI Browser"]], [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i], [u, [l, "Android Browser"]], [/FBAV\/([\w\.]+);/i], [u, [l, "Facebook"]], [/fxios\/([\w\.-]+)/i], [u, [l, "Firefox"]], [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i], [u, [l, "Mobile Safari"]], [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i], [u, l], [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [l, [u, w.str, y.browser.oldsafari.version]], [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i], [l, u], [/(navigator|netscape)\/([\w\.-]+)/i], [[l, "Netscape"], u], [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]+)*/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i], [l, u]],
            cpu: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i], [[h, "amd64"]], [/(ia32(?=;))/i], [[h, x.lowerize]], [/((?:i[346]|x)86)[;\)]/i], [[h, "ia32"]], [/windows\s(ce|mobile);\sppc;/i], [[h, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i], [[h, /ower/, "", x.lowerize]], [/(sun4\w)[;\)]/i], [[h, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i], [[h, x.lowerize]]],
            device: [[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i], [c, p, [d, v]], [/applecoremedia\/[\w\.]+ \((ipad)/], [c, [p, "Apple"], [d, v]], [/(apple\s{0,1}tv)/i], [[c, "Apple TV"], [p, "Apple"]], [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i], [p, c, [d, v]], [/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i], [c, [p, "Amazon"], [d, v]], [/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i], [[c, w.str, y.device.amazon.model], [p, "Amazon"], [d, f]], [/\((ip[honed|\s\w*]+);.+(apple)/i], [c, p, [d, f]], [/\((ip[honed|\s\w*]+);/i], [c, [p, "Apple"], [d, f]], [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i], [p, c, [d, f]], [/\(bb10;\s(\w+)/i], [c, [p, "BlackBerry"], [d, f]], [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i], [c, [p, "Asus"], [d, v]], [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i], [[p, "Sony"], [c, "Xperia Tablet"], [d, v]], [/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i], [[p, "Sony"], [c, "Xperia Phone"], [d, f]], [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i], [p, c, [d, m]], [/android.+;\s(shield)\sbuild/i], [c, [p, "Nvidia"], [d, m]], [/(playstation\s[34portablevi]+)/i], [c, [p, "Sony"], [d, m]], [/(sprint\s(\w+))/i], [[p, w.str, y.device.sprint.vendor], [c, w.str, y.device.sprint.model], [d, f]], [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i], [p, c, [d, v]], [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i, /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i], [p, [c, /_/g, " "], [d, f]], [/(nexus\s9)/i], [c, [p, "HTC"], [d, v]], [/[\s\(;](xbox(?:\sone)?)[\s\);]/i], [c, [p, "Microsoft"], [d, m]], [/(kin\.[onetw]{3})/i], [[c, /\./g, " "], [p, "Microsoft"], [d, f]], [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w+)*/i, /(XT\d{3,4}) build\//i, /(nexus\s[6])/i], [c, [p, "Motorola"], [d, f]], [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], [c, [p, "Motorola"], [d, v]], [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i], [[p, "Samsung"], c, [d, v]], [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i], [[p, "Samsung"], c, [d, f]], [/(samsung);smarttv/i], [p, c, [d, g]], [/\(dtv[\);].+(aquos)/i], [c, [p, "Sharp"], [d, g]], [/sie-(\w+)*/i], [c, [p, "Siemens"], [d, f]], [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i], [[p, "Nokia"], c, [d, f]], [/android\s3\.[\s\w;-]{10}(a\d{3})/i], [c, [p, "Acer"], [d, v]], [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i], [[p, "LG"], c, [d, v]], [/(lg) netcast\.tv/i], [p, c, [d, g]], [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w+)*/i], [c, [p, "LG"], [d, f]], [/android.+(ideatab[a-z0-9\-\s]+)/i], [c, [p, "Lenovo"], [d, v]], [/linux;.+((jolla));/i], [p, c, [d, f]], [/((pebble))app\/[\d\.]+\s/i], [p, c, [d, b]], [/android.+;\s(glass)\s\d/i], [c, [p, "Google"], [d, b]], [/android.+(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus)?[\s_]*(?:\d\w)?)\s+build/i], [[c, /_/g, " "], [p, "Xiaomi"], [d, f]], [/\s(tablet)[;\/\s]/i, /\s(mobile)[;\/\s]/i], [[d, x.lowerize], p, c]],
            engine: [[/windows.+\sedge\/([\w\.]+)/i], [u, [l, "EdgeHTML"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], [l, u], [/rv\:([\w\.]+).*(gecko)/i], [u, l]],
            os: [[/microsoft\s(windows)\s(vista|xp)/i], [l, u], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], [l, [u, w.str, y.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[l, "Windows"], [u, w.str, y.os.windows.version]], [/\((bb)(10);/i], [[l, "BlackBerry"], u], [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i, /linux;.+(sailfish);/i], [l, u], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i], [[l, "Symbian"], u], [/\((series40);/i], [l], [/mozilla.+\(mobile;.+gecko.+firefox/i], [[l, "Firefox OS"], u], [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i], [l, u], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [[l, "Chromium OS"], u], [/(sunos)\s?([\w\.]+\d)*/i], [[l, "Solaris"], u], [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i], [l, u], [/(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i], [[l, "iOS"], [u, /_/g, "."]], [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i], [[l, "Mac OS"], [u, /_/g, "."]], [/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, /(haiku)\s(\w+)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]+)*/i], [l, u]]
        },
        _ = function(e, i) {
            if (!(this instanceof _))
                return new _(e, i).getResult();
            var n = e || (t && t.navigator && t.navigator.userAgent ? t.navigator.userAgent : a),
                o = i ? x.extend(k, i) : k;
            return this.getBrowser = function() {
                var t = w.rgx.apply(this, o.browser);
                return t.major = x.major(t.version), t
            }, this.getCPU = function() {
                return w.rgx.apply(this, o.cpu)
            }, this.getDevice = function() {
                return w.rgx.apply(this, o.device)
            }, this.getEngine = function() {
                return w.rgx.apply(this, o.engine)
            }, this.getOS = function() {
                return w.rgx.apply(this, o.os)
            }, this.getResult = function() {
                return {
                    ua: this.getUA(),
                    browser: this.getBrowser(),
                    engine: this.getEngine(),
                    os: this.getOS(),
                    device: this.getDevice(),
                    cpu: this.getCPU()
                }
            }, this.getUA = function() {
                return n
            }, this.setUA = function(t) {
                return n = t, this
            }, this
        },
        C = (new _).getResult(),
        j = navigator.language || navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage || "",
        $ = "",
        A = "",
        I = j.indexOf("-");
    I > 0 && ($ = j.substr(I + 1).toUpperCase(), A = j.substr(0, I)), C.country = $, C.language = A, C.device.screenWidth = t.screen.width, C.device.screenHeight = t.screen.height, C.device.model = C.device.model || "", cn.testin.ab.env = C
}("object" == typeof window ? window : this), function() {
    "use strict";
    cn.testin.ab.storage = {
        getCookie: function(t) {
            for (var e = document.cookie.split(";"), a = 0; a < e.length; a++) {
                var i = e[a];
                i = i.replace(/^\s+/, "");
                var n = i.split("=");
                if (n[0] === t)
                    return decodeURIComponent(n[1])
            }
            return ""
        },
        setCookie: function(t, e, a) {
            a = a || 36500;
            var i = "",
                n = new Date((new Date).getTime() + 24 * a * 60 * 60 * 1e3);
            i = "; expires=" + n.toUTCString();
            var o = [t + "=" + encodeURIComponent(e), i, "; path=/"].join("");
            document.cookie = o
        },
        getItem: function(t) {
            var e = window.localStorage,
                a = e ? e.getItem(t) : this.getCookie(t);
            return a ? JSON.parse(a) : null
        },
        setItem: function(t, e) {
            if (e) {
                var a = window.localStorage;
                e = JSON.stringify(e);
                try {
                    a ? a.setItem(t, e) : this.setCookie(t, e)
                } catch (t) {}
            }
        }
    }
}(), function() {
    "use strict";
    var t = function(t) {
            function e(t, e) {
                var a = (65535 & t) + (65535 & e),
                    i = (t >> 16) + (e >> 16) + (a >> 16);
                return i << 16 | 65535 & a
            }
            function a(t, e) {
                return t << e | t >>> 32 - e
            }
            function i(t, i, n, o, s, r) {
                return e(a(e(e(i, t), e(o, r)), s), n)
            }
            function n(t, e, a, n, o, s, r) {
                return i(e & a | ~e & n, t, e, o, s, r)
            }
            function o(t, e, a, n, o, s, r) {
                return i(e & n | a & ~n, t, e, o, s, r)
            }
            function s(t, e, a, n, o, s, r) {
                return i(e ^ a ^ n, t, e, o, s, r)
            }
            function r(t, e, a, n, o, s, r) {
                return i(a ^ (e | ~n), t, e, o, s, r)
            }
            function c(t, a) {
                t[a >> 5] |= 128 << a % 32, t[(a + 64 >>> 9 << 4) + 14] = a;
                var i,
                    c,
                    l,
                    d,
                    p,
                    u = 1732584193,
                    h = -271733879,
                    m = -1732584194,
                    f = 271733878;
                for (i = 0; i < t.length; i += 16)
                    c = u, l = h, d = m, p = f, u = n(u, h, m, f, t[i], 7, -680876936), f = n(f, u, h, m, t[i + 1], 12, -389564586), m = n(m, f, u, h, t[i + 2], 17, 606105819), h = n(h, m, f, u, t[i + 3], 22, -1044525330), u = n(u, h, m, f, t[i + 4], 7, -176418897), f = n(f, u, h, m, t[i + 5], 12, 1200080426), m = n(m, f, u, h, t[i + 6], 17, -1473231341), h = n(h, m, f, u, t[i + 7], 22, -45705983), u = n(u, h, m, f, t[i + 8], 7, 1770035416), f = n(f, u, h, m, t[i + 9], 12, -1958414417), m = n(m, f, u, h, t[i + 10], 17, -42063), h = n(h, m, f, u, t[i + 11], 22, -1990404162), u = n(u, h, m, f, t[i + 12], 7, 1804603682), f = n(f, u, h, m, t[i + 13], 12, -40341101), m = n(m, f, u, h, t[i + 14], 17, -1502002290), h = n(h, m, f, u, t[i + 15], 22, 1236535329), u = o(u, h, m, f, t[i + 1], 5, -165796510), f = o(f, u, h, m, t[i + 6], 9, -1069501632), m = o(m, f, u, h, t[i + 11], 14, 643717713), h = o(h, m, f, u, t[i], 20, -373897302), u = o(u, h, m, f, t[i + 5], 5, -701558691), f = o(f, u, h, m, t[i + 10], 9, 38016083), m = o(m, f, u, h, t[i + 15], 14, -660478335), h = o(h, m, f, u, t[i + 4], 20, -405537848), u = o(u, h, m, f, t[i + 9], 5, 568446438), f = o(f, u, h, m, t[i + 14], 9, -1019803690), m = o(m, f, u, h, t[i + 3], 14, -187363961), h = o(h, m, f, u, t[i + 8], 20, 1163531501), u = o(u, h, m, f, t[i + 13], 5, -1444681467), f = o(f, u, h, m, t[i + 2], 9, -51403784), m = o(m, f, u, h, t[i + 7], 14, 1735328473), h = o(h, m, f, u, t[i + 12], 20, -1926607734), u = s(u, h, m, f, t[i + 5], 4, -378558), f = s(f, u, h, m, t[i + 8], 11, -2022574463), m = s(m, f, u, h, t[i + 11], 16, 1839030562), h = s(h, m, f, u, t[i + 14], 23, -35309556), u = s(u, h, m, f, t[i + 1], 4, -1530992060), f = s(f, u, h, m, t[i + 4], 11, 1272893353), m = s(m, f, u, h, t[i + 7], 16, -155497632), h = s(h, m, f, u, t[i + 10], 23, -1094730640), u = s(u, h, m, f, t[i + 13], 4, 681279174), f = s(f, u, h, m, t[i], 11, -358537222), m = s(m, f, u, h, t[i + 3], 16, -722521979), h = s(h, m, f, u, t[i + 6], 23, 76029189), u = s(u, h, m, f, t[i + 9], 4, -640364487), f = s(f, u, h, m, t[i + 12], 11, -421815835), m = s(m, f, u, h, t[i + 15], 16, 530742520), h = s(h, m, f, u, t[i + 2], 23, -995338651), u = r(u, h, m, f, t[i], 6, -198630844), f = r(f, u, h, m, t[i + 7], 10, 1126891415), m = r(m, f, u, h, t[i + 14], 15, -1416354905), h = r(h, m, f, u, t[i + 5], 21, -57434055), u = r(u, h, m, f, t[i + 12], 6, 1700485571), f = r(f, u, h, m, t[i + 3], 10, -1894986606), m = r(m, f, u, h, t[i + 10], 15, -1051523), h = r(h, m, f, u, t[i + 1], 21, -2054922799), u = r(u, h, m, f, t[i + 8], 6, 1873313359), f = r(f, u, h, m, t[i + 15], 10, -30611744), m = r(m, f, u, h, t[i + 6], 15, -1560198380), h = r(h, m, f, u, t[i + 13], 21, 1309151649), u = r(u, h, m, f, t[i + 4], 6, -145523070), f = r(f, u, h, m, t[i + 11], 10, -1120210379), m = r(m, f, u, h, t[i + 2], 15, 718787259), h = r(h, m, f, u, t[i + 9], 21, -343485551), u = e(u, c), h = e(h, l), m = e(m, d), f = e(f, p);
                return [u, h, m, f]
            }
            function l(t) {
                var e,
                    a = "",
                    i = 32 * t.length;
                for (e = 0; i > e; e += 8)
                    a += String.fromCharCode(t[e >> 5] >>> e % 32 & 255);
                return a
            }
            function d(t) {
                var e,
                    a = [];
                for (a[(t.length >> 2) - 1] = void 0, e = 0; e < a.length; e += 1)
                    a[e] = 0;
                var i = 8 * t.length;
                for (e = 0; i > e; e += 8)
                    a[e >> 5] |= (255 & t.charCodeAt(e / 8)) << e % 32;
                return a
            }
            function p(t) {
                return l(c(d(t), 8 * t.length))
            }
            function u(t, e) {
                var a,
                    i,
                    n = d(t),
                    o = [],
                    s = [];
                for (o[15] = s[15] = void 0, n.length > 16 && (n = c(n, 8 * t.length)), a = 0; 16 > a; a += 1)
                    o[a] = 909522486 ^ n[a], s[a] = 1549556828 ^ n[a];
                return i = c(o.concat(d(e)), 512 + 8 * e.length), l(c(s.concat(i), 640))
            }
            function h(t) {
                var e,
                    a,
                    i = "0123456789abcdef",
                    n = "";
                for (a = 0; a < t.length; a += 1)
                    e = t.charCodeAt(a), n += i.charAt(e >>> 4 & 15) + i.charAt(15 & e);
                return n
            }
            function m(t) {
                return unescape(encodeURIComponent(t))
            }
            function f(t) {
                return p(m(t))
            }
            function v(t) {
                return h(f(t))
            }
            function g(t, e) {
                return u(m(t), m(e))
            }
            function b(t, e) {
                return h(g(t, e))
            }
            function x(t, e, a) {
                return e ? a ? g(e, t) : b(e, t) : a ? f(t) : v(t)
            }
            return x
        }(this),
        e = function(t) {
            function e(t, e, a) {
                var i = e && a || 0,
                    n = 0;
                for (e = e || [], t.toLowerCase().replace(/[0-9a-f]{2}/g, function(t) {
                    16 > n && (e[i + n++] = d[t])
                }); 16 > n;)
                    e[i + n++] = 0;
                return e
            }
            function a(t, e) {
                var a = e || 0,
                    i = l;
                return i[t[a++]] + i[t[a++]] + i[t[a++]] + i[t[a++]] + "-" + i[t[a++]] + i[t[a++]] + "-" + i[t[a++]] + i[t[a++]] + "-" + i[t[a++]] + i[t[a++]] + "-" + i[t[a++]] + i[t[a++]] + i[t[a++]] + i[t[a++]] + i[t[a++]] + i[t[a++]]
            }
            function i(t, e, i) {
                var o = e && i || 0;
                "string" == typeof t && (e = "binary" === t ? new c(16) : null, t = null), t = t || {};
                var s = t.random || (t.rng || n)();
                if (s[6] = 15 & s[6] | 64, s[8] = 63 & s[8] | 128, e)
                    for (var r = 0; 16 > r; r++)
                        e[o + r] = s[r];
                return e || a(s)
            }
            var n,
                o,
                s,
                r;
            !function() {
                var t = a.crypto || a.msCrypto;
                if (!n && t && t.getRandomValues)
                    try {
                        var e = new Uint8Array(16);
                        r = n = function() {
                            return t.getRandomValues(e), e
                        }, n()
                    } catch (a) {}
                if (!n) {
                    var i = new Array(16);
                    o = n = function() {
                        for (var t, e = 0; 16 > e; e++)
                            0 === (3 & e) && (t = 4294967296 * Math.random()), i[e] = t >>> ((3 & e) << 3) & 255;
                        return i
                    }
                }
            }();
            for (var c = "function" == typeof Buffer ? Buffer : Array, l = [], d = {}, p = 0; 256 > p; p++)
                l[p] = (p + 256).toString(16).substr(1), d[l[p]] = p;
            var u = n(),
                h = ([1 | u[0], u[1], u[2], u[3], u[4], u[5]], 16383 & (u[6] << 8 | u[7]), i);
            return h.v4 = i, h.parse = e, h.unparse = a, h.BufferClass = c, h._rng = n, h._mathRNG = o, h._nodeRNG = s, h._whatwgRNG = r, h
        }("undefined" != typeof window ? window : null);
    cn.testin.ab.utils = {
        uuid: e,
        md5: t,
        getQueryParam: function(t) {
            var e = window.location.search || "";
            if (!e)
                return null;
            e = e.substr(1);
            var a = new RegExp("(^|&)" + t + "=([^&]*)(&|$)"),
                i = e.match(a);
            return i ? decodeURIComponent(i[2]) : null
        }
    }
}(), function() {
    "use strict";
    var t,
        e,
        a = cn.testin.ab.env,
        i = cn.testin.ab.storage,
        n = cn.testin.ab.utils,
        o = {
            url: "https://abapi.testin.cn",
            expUrl: "/abtest-api/api/getexperiment",
            trackUrl: "/abtest-api/api/sendlog",
            errUrl: "/abtest-api/api/senderrorlog",
            packageName: "cn.testin.ab",
            appVersion: "_",
            sdkVersion: "Web_3.0.4",
            localVersion: "1.1",
            asyncTime: 20
        },
        s = "normal",
        r = 1;
    !function() {
        t = n.getQueryParam("abTestDebug"), t = t ? t.split(",") : [], 1 == t[0] && t[1] && (s = "debug")
    }(), function() {
        function c(t, e, a) {
            function i(t) {
                return 10 > t ? "0000" + t : 100 > t ? "000" + t : 1e3 > t ? "00" + t : 1e4 > t ? "0" + t : t
            }
            t = t || "", e = e || {};
            var n = [];
            for (var o in e)
                n.push(o + "=" + e[o]);
            var s = "testin_callback_" + (new Date).getTime() + i(r++);
            n.push("callback=" + s), t = t + "?" + n.join("&"), window[s] = function(t) {
                a(null, t), window[s] = void 0
            };
            var c = document.createElement("script");
            c.type = "text/javascript", c.async = !0, c.src = t;
            var l = document.getElementsByTagName("head"),
                d = document.getElementsByTagName("script");
            l && l[0] ? l[0].appendChild(c) : d && d.length ? d[0].parentNode.insertBefore(c, d[0]) : document.body.appendChild(c)
        }
        function l() {
            return i.getItem(v)
        }
        function d() {
            var t = {
                clientId: n.uuid(),
                version: o.localVersion,
                apps: {},
                debugApps: {}
            };
            return i.setItem(v, t), t
        }
        function p(t, e, a) {
            var n = l();
            a ? n.debugApps[t] = e : n.apps[t] = e, i.setItem(v, n)
        }
        function u(t, e, i) {
            function n(e) {
                t._set("data", e), t._set("dataLoaded", !0);
                var a = t._get("varsData");
                if (e && e.exps)
                    for (var i = e.exps, n = 0; n < i.length; n++)
                        for (var o in i[n].componentsValues)
                            a[o] = i[n].componentsValues[o];
                for (var s = t._get("getExperimentsCallback"), n = 0; n < s.length; n++)
                    s[n]();
                s.splice(0)
            }
            var s;
            if (i !== !1) {
                var r = l();
                s = t._get("isDebug") ? r.debugApps[t._get("expVersionId")] : r.apps[t._get("appKey")], s && (n(s), e(t._get("vars")))
            }
            var d = {
                    appKey: t._get("appKey"),
                    clientId: t._get("clientId"),
                    appVersion: o.appVersion,
                    sdkVersion: o.sdkVersion,
                    platform: a.os.name,
                    platformVersion: a.os.version,
                    packageName: o.packageName,
                    language: a.language,
                    country: a.country,
                    deviceModel: a.device.model,
                    displayWidth: a.device.screenWidth,
                    displayHeight: a.device.screenHeight,
                    mac: "",
                    net: "",
                    ip: "",
                    referrer: document.referrer,
                    url: location.href,
                    browserName: a.browser.name,
                    browserVersion: a.browser.version
                },
                u = t._get("tags");
            if (u && u.length) {
                var h = [];
                for (var f in u)
                    h.push(f + "=" + u[f]);
                d.customerLabel = encodeURIComponent(h.join(","))
            }
            t._get("isDebug") && (d.expVersionId = t._get("expVersionId")), c(t._get("url") + o.expUrl, d, function(a, i) {
                var o;
                a ? m(t, {
                    appKey: t._get("appKey"),
                    clientId: t._get("clientId"),
                    msg: a.msg || a.message
                }) : (0 === i.errNo || 10001 === i.errNo || 10003 === i.errNo, o = i.data, t._get("isDebug") ? p(t._get("expVersionId"), o, !0) : p(t._get("appKey"), o, !1)), s || (n(o), e(t._get("vars")))
            })
        }
        function h(t, e, a) {
            function i(t, e) {
                for (var a = 0; a < p.length; a++)
                    if (p[a].expId == t && p[a].componentsKey == e)
                        return p[a].metrics;
                return null
            }
            function s(t, e) {
                for (var a = 0; a < d.length; a++) {
                    var n = d[a].events;
                    if (d[a].isUpload)
                        for (var o = 0; o < n.length; o++)
                            if (n[o] === t) {
                                var s = i(d[a].expId, d[a].componentsKey);
                                return void (s ? s.push({
                                    name: t,
                                    count: e,
                                    time: 0
                                }) : p.push({
                                    expId: d[a].expId,
                                    componentsKey: d[a].componentsKey,
                                    metrics: [{
                                        name: t,
                                        count: e,
                                        time: 0
                                    }]
                                }))
                            }
                }
            }
            var r = parseInt((new Date).getTime() / 1e3),
                l = t._get("data"),
                d = l.exps || [],
                p = [];
            for (var u in e)
                s(u, e[u]);
            if (!p.length)
                return void (a && a());
            var h = t._get("appKey"),
                m = {
                    appKey: h,
                    clientId: t._get("clientId"),
                    stime: r,
                    sign: n.md5(h + r).substring(0, 6),
                    debug: t._get("isDebug") ? 1 : 0,
                    records: encodeURIComponent(JSON.stringify(p))
                };
            c(t._get("url") + o.trackUrl, m, function(t, e) {
                t || a && a(0 === e.errNo ? null : {
                    msg: "上报失败"
                })
            })
        }
        function m(t, e) {
            c(t._get("url") + o.errUrl, {
                appKey: e.appKey,
                clientId: e.clientId,
                appVersion: o.appVersion,
                sdkVersion: o.sdkVersion,
                from: "h5",
                platform: a.os.name,
                platformVersion: a.os.version,
                model: a.device.model,
                browserName: a.browser.name,
                browserVersion: a.browser.version,
                errorTime: parseInt((new Date).getTime() / 1e3),
                errorData: encodeURIComponent(e.msg)
            }, function(t, e) {})
        }
        function f() {
            var t = {
                defVars: {},
                tags: null,
                timeout: 3e3,
                minTimeout: 1e3,
                url: o.url,
                varsData: {},
                vars: {
                    get: function(e) {
                        return t.varsData[e]
                    }
                },
                getExperimentsCallback: []
            };
            if (!(this instanceof f))
                throw new Error("实例化ABTest错误");
            this._get = function(e) {
                return t[e]
            }, this._set = function(e, a) {
                t[e] = a
            }
        }
        var v = "testin_ab_data";
        f.prototype = {
            constructor: f,
            init: function(e, i) {
                if (!e)
                    throw new Error("appKey required");
                a.ua.match(/(bot|crawl|slurp|spider)/i) && this._set("isCrawler", !0);
                var n = l();
                (!n || n.version < o.localVersion) && (n = d()), i || (i = n.clientId), this._set("appKey", e), this._set("clientId", i), "debug" == s && (this._set("isDebug", !0), this._set("expVersionId", t[1]))
            },
            openOverlay: function() {
                e = document.createElement("style"), e.setAttribute("type", "text/css");
                var t = "body {display: none;}";
                e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
                var a = document.getElementsByTagName("head");
                a && a.length && a[0].appendChild(e)
            },
            setDefVars: function(t) {
                var e = this._get("defVars"),
                    a = this._get("varsData");
                for (var i in t)
                    e[i] = t[i], a[i] = t[i]
            },
            setTags: function(t) {
                var e = {};
                for (var a in t)
                    "string" == typeof t[a] ? e[a] = "'" + t[a] + "'" : e[a] = t[a];
                this._set("tags", e)
            },
            setTimeout: function(t) {
                return isNaN(t) || t < this._get("minTimeout") ? this._set("timeout", this._get("minTimeout")) : void this._set("timeout", t)
            },
            setUrl: function(t) {
                "/" == t.substr(t.length - 1) && (t = t.substr(0, t.length - 1)), this._set("url", t)
            },
            getVars: function(t, a) {
                function i(a) {
                    s || (s = !0, setTimeout(function() {
                        e && e.parentNode.removeChild(e), t(a)
                    }, o.asyncTime))
                }
                if (!this._get("appKey"))
                    throw new Error("请先调用init方法设置appKey");
                var n = this,
                    s = !1;
                return this._get("isCrawler") ? i(this._get("vars")) : (setTimeout(function() {
                    i(n._get("vars"))
                }, this._get("timeout")), void u(this, i, a))
            },
            getVarsFromServer: function(t) {
                this.getVars(t, !1)
            },
            getExperiments: function(t) {
                function e() {
                    setTimeout(function() {
                        var e = a._get("data");
                        e = e || {};
                        for (var i = e.exps || [], n = [], o = "CONTROL", s = 0; s < i.length; s++) {
                            var r = {
                                layerId: i[s].layerId,
                                layerName: i[s].layerName,
                                expId: i[s].expId,
                                expName: i[s].expName,
                                expVersionId: i[s].componentsKey,
                                expVersionName: i[s].expVersionName
                            };
                            i[s].componentsKey || (r.expId = o, r.expName = o, r.expVersionId = o, r.expVersionName = o), n.push(r)
                        }
                        t(n)
                    }, o.asyncTime)
                }
                var a = this;
                if (this._get("dataLoaded"))
                    e();
                else {
                    var i = this._get("getExperimentsCallback");
                    i.push(e)
                }
            },
            track: function() {
                function t() {
                    e && (s || (s = !0, setTimeout(function() {
                        e()
                    }, o.asyncTime)))
                }
                if (!this._get("isCrawler")) {
                    var e,
                        a = arguments,
                        i = {};
                    if ("string" == typeof a[0])
                        i[a[0]] = a[1], 3 == a.length && (e = a[2]);
                    else {
                        for (var n in a[0])
                            i[n] = a[0][n];
                        2 == a.length && (e = a[1])
                    }
                    var s = !1;
                    if (!this._get("data"))
                        return t();
                    setTimeout(function() {
                        t()
                    }, this._get("timeout")), h(this, i, t)
                }
            },
            getVersion: function() {
                return "v" + o.sdkVersion.split("_")[1]
            }
        }, cn.testin.ab.ABTest = f;
        var g = new f;
        "function" == typeof define && define.amd ? define(function() {
            return g
        }) : "object" == typeof module && module.exports ? module.exports = g : window.testinAB = g
    }()
}(), function(t) {
    t.fn.searchMatching = function(e) {
        var a = function(t, e) {
            this.opt = e, this.obj = t, this.dat = {
                ipt: "",
                dat: null
            }, this.txt = t.attr("value"), this.rule = {
                l: /^[A-Za-z]*$/,
                c: /^[0-9A-Za-z\u4e00-\u9fa5]*$/,
                not: /[`~!@#$%^&*_+=￥（）()<>?:"{},.\/;'[\]！。......，…——、‘；—【】|？》《“：\\\-”0-9 ]/g
            }, this.init()
        };
        a.prototype = {
            init: function() {
                var t = this;
                t.opt.dat && t.eventFun()
            },
            eventFun: function() {
                var e = this;
                e.obj.focus(function() {
                    e.obj.val() == e.txt ? (e.obj.val(""), e.opt.focusBlankFun && e.opt.focusBlankFun()) : e.opt.focusFun && e.opt.focusFun()
                }), e.obj.blur(function() {
                    "" == e.obj.val() ? (e.obj.val(e.txt), e.opt.blurBlankFun && e.opt.blurBlankFun()) : e.opt.blurFun && e.opt.blurFun()
                }), e.obj.keyup(function(a) {
                    var i = a || window.event || arguments.callee.caller.arguments[0];
                    i.keyCode >= 37 && i.keyCode <= 40 || 13 == i.keyCode || ("" != t(this).val() ? (e.dat.ipt = t(this).val(), e.searchEvent(e.dat.ipt)) : e.opt.blankFun && e.opt.blankFun())
                })
            },
            searchEvent: function(e) {
                var a = this;
                if (a.opt.dat instanceof Array)
                    1 == a.opt.type ? a.rule.c.test(e) && (a.dat.dat = a.matchC(e)) : 2 == a.opt.type ? a.rule.l.test(e) && (a.dat.dat = a.matchL(e)) : a.rule.l.test(e) ? a.dat.dat = a.matchL(e) : a.rule.c.test(e) && (a.dat.dat = a.matchC(e)), a.opt.cbFun && a.opt.cbFun.apply(t.extend({}, a.dat));
                else {
                    for (k in a.opt.dat)
                        a.dat.dat = a.dat.dat ? a.dat.dat : {}, 1 == a.opt.type ? a.rule.c.test(e) && (a.dat.dat[k] = a.matchC(e, a.opt.dat[k])) : 2 == a.opt.type ? a.rule.l.test(e) && (a.dat.dat[k] = a.matchL(e, a.opt.dat[k])) : a.rule.l.test(e) ? a.dat.dat[k] = a.matchL(e, a.opt.dat[k]) : a.rule.c.test(e) && (a.dat.dat[k] = a.matchC(e, a.opt.dat[k]));
                    a.opt.cbFun && a.opt.cbFun.apply(t.extend({}, a.dat))
                }
            },
            matchC: function(t, e) {
                for (var a = this, i = e ? e : a.opt.dat, n = [], o = 0; o < i.length; o++) {
                    var s,
                        r,
                        c = t.length;
                    if (i[o][a.opt.cn] && -1 != i[o][a.opt.cn].indexOf(t)) {
                        var l = i[o][a.opt.cn].indexOf(t);
                        s = i[o][a.opt.cn].substring(0, l), r = i[o][a.opt.cn].substring(l + c), i[o].cnDom = '<span class="mch-cn"><strong class="mch-get">' + s + "</strong>" + t + '<strong class="mch-get">' + r + "</strong></span>", n.push(i[o])
                    }
                }
                return n
            },
            matchL: function(t, e) {
                for (var a = this, i = e ? e : a.opt.dat, n = [], o = 0; o < i.length; o++) {
                    var s = t.length;
                    if (i[o][a.opt.py] && 0 == i[o][a.opt.py].toLowerCase().indexOf(t.toLowerCase())) {
                        var r = i[o][a.opt.py].substring(0, s),
                            c = i[o][a.opt.py].substring(s);
                        i[o].pyDom = '<span class="mch-py"><strong class="mch-get">' + r + "</strong>" + c + "</span>", n.push(i[o])
                    } else
                        i[o][a.opt.sx] && 0 == i[o][a.opt.sx].toLowerCase().indexOf(t.toLowerCase()) && (delete i[o].pyDom, n.push(i[o]))
                }
                return n
            }
        };
        var i = {
            dat: null,
            type: 0,
            sx: "sx",
            py: "py",
            cn: "cn",
            focusFun: null,
            focusBlankFun: null,
            blurFun: null,
            blurBlankFun: null,
            cbFun: null,
            blankFun: null,
            ph: "placehoder"
        };
        e = t.extend(i, e), this.each(function() {
            new a(t(this), e)
        })
    }
}(jQuery), function(t) {
    t.fn.SwiperScrollBase = function(e) {
        var a = function(t, e) {
            this.opt = e, this.obj = t, this.init()
        };
        a.prototype = {
            init: function() {
                var t = this;
                t.tEvents()
            },
            tEvents: function() {
                for (var e = this, a = e.obj.find(e.opt.upbtn), i = e.obj.find(e.opt.downbtn), n = e.obj.find(e.opt.box), o = 0, s = 0; s < n.children(e.opt.itbox).length; s++)
                    "none" != n.children(e.opt.itbox).eq(s).css("display") && o++;
                var r = n.children(e.opt.itbox).outerWidth(!0),
                    c = 0;
                c = "number" == typeof e.opt.getviewwidthbox ? e.opt.getviewwidthbox : t("body").find(e.opt.getviewwidthbox).width();
                var l = parseInt(c / r),
                    d = e.opt.movenum > 0 ? e.opt.movenum : l;
                l = e.opt.ismoveOne ? 1 : d;
                var p = Math.ceil(o / d),
                    u = o % l == 0 ? l : parseInt(o % l),
                    h = e.opt.isbigFirst ? n.children(e.opt.bigFirstbox).outerWidth(!0) : 0,
                    m = r * o + h,
                    f = !1,
                    v = u != l ? parseInt(c - u * r) : 0;
                a.hide(), n.css({
                    width: m,
                    position: "relative"
                }).attr("data-swiper-page", "1"), e.obj.find(".shadowleft").hide(), e.obj.find(".shadowright").show(), 1 == p && (i.hide(), e.obj.find(".shadowright").hide()), a.on("click", function() {
                    i.show(), e.obj.find(".shadowright").show();
                    var t = parseInt(n.attr("data-swiper-page")),
                        o = r * l * 1;
                    2 == t && (a.hide(), e.obj.find(".shadowleft").hide()), e.opt.isbigFirst && 2 == t && (o = o - 2 * r + h), e.opt.ismoveOne && (o = 1 * r), e.opt.isbigFirst || (o = d * r * 1), f && (f = !1, o -= v), n.attr("data-swiper-page", t - 1), 2 == t ? n.animate({
                        left: "0px"
                    }) : n.animate({
                        left: "+=" + o + "px"
                    }, 50)
                }), i.on("click", function() {
                    a.show(), e.obj.find(".shadowleft").show();
                    var t = parseInt(n.attr("data-swiper-page")),
                        o = r * l * -1;
                    e.opt.isbigFirst && 1 == t && (o = o + 2 * r - h), e.opt.ismoveOne && (o = -1 * r), e.opt.isbigFirst || (o = d * r * -1), (t + 1 >= p && 1 != t || 2 == p && 1 == t) && (i.hide(), e.obj.find(".shadowright").hide(), f = !0, o += v), n.attr("data-swiper-page", t + 1), n.animate({
                        left: "+=" + o + "px"
                    }, 50)
                })
            }
        };
        var i = {
            box: '[data-plugin="swiper-box"]',
            itbox: '[data-plugin="swiper-itbox"]',
            upbtn: '[data-plugin="swiper-upbtn"]',
            downbtn: '[data-plugin="swiper-downbtn"]',
            isbigFirst: !1,
            ismoveOne: !1,
            movenum: 0,
            bigFirstbox: '[data-plugin="swiper-bigfirst"]',
            getviewwidthbox: "body"
        };
        e = t.extend(i, e), this.each(function() {
            new a(t(this), e)
        })
    }
}(jQuery), function(t) {
    function e(t) {
        var e = [],
            a = [864e5, 36e5, 6e4, 1e3, 1];
        for (i = 0; i < a.length; i++)
            e[i] = Math.floor(t / a[i]), t %= a[i];
        this.format = function(t) {
            var a = {
                "\\$d+": e[0],
                "\\$h+": e[1],
                "\\$m+": e[2],
                "\\$s+": e[3],
                "\\$S+": e[4]
            };
            for (var i in a)
                new RegExp("(" + i + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? a[i] : ("00" + a[i]).substr(("" + a[i]).length > 2 ? 2 : ("" + a[i]).length)));
            return t
        }, this.getD = function() {
            return e
        }
    }
    t.fn.Countdown = function(a) {
        var i = {
            ct: null,
            st: null,
            et: null,
            gap: 1e3,
            aEven: null,
            iEven: null,
            lEven: null,
            sEven: null
        };
        if (t.extend(i, a), null != i.ct && null != i.et && null != i.aEven && null != i.st) {
            i.iEven && i.iEven.apply(i);
            var n = setInterval(function() {
                if (i.st > i.ct)
                    t.extend(i, {
                        dt: new e(i.st - i.ct)
                    }), i.ct >= i.st && (i.ct = i.st, clearInterval(n), i.dt = new e(i.st - i.ct)), i.sEven.apply(i);
                else {
                    if (t.extend(i, {
                        dt: new e(i.et - i.ct)
                    }), i.ct >= i.et)
                        return i.ct = i.et, clearInterval(n), i.dt = new e(i.et - i.ct), void (i.lEven && i.lEven.apply(i));
                    i.aEven.apply(i)
                }
                i.ct = i.ct + i.gap
            }, i.gap)
        }
    }
}(jQuery), function(t) {
    t.fn.MCD = function(e) {
        var a = function(e, a) {
            this.opt = a, this.obj = e, this.cache = {
                movieCount: 0,
                cinemaCount: 0,
                movieList: null,
                cinemaList: null,
                date: null,
                cityId: t.cookie("DefaultCity-CookieKey"),
                chooseMid: null,
                chooseCid: null
            }, this.cinemaData = {
                cinemas: [],
                favCinemas: []
            }, this.movieBox = this.obj.find(this.opt.movieBox), this.cinemaBox = this.obj.find(this.opt.cinemaBox), this.init()
        };
        a.prototype = {
            init: function() {
                var t = this;
                t.initData()
            },
            initData: function() {
                var e = this;
                ajax.getAjax({
                    Jurl: "http://service.theater" + site_domain + "/Cinema.api",
                    JdataType: "script",
                    Jparams: {
                        Ajax_CallBack: !0,
                        Ajax_CallBackType: "Mtime.Cinema.Services",
                        Ajax_CallBackMethod: "GetOnlineMoviesInCity",
                        Ajax_CrossDomain: 1,
                        Ajax_RequestUrl: "",
                        t: (new Date).getTime(),
                        Ajax_CallBackArgument0: e.cache.cityId
                    },
                    Jmethod: "getOnlineMoviesInCityResult",
                    Jback: function() {
                        this.data && this.data.value && (e.cache.movieList = this.data.value.movies, e.cache.movieCount = e.cache.movieList.length, e.cache.cinemaCount = this.data.value.cinemaCount, e.movieHtml())
                    }
                }), ajax.getAjax({
                    Jurl: "http://service.theater" + site_domain + "/Cinema.api",
                    JdataType: "script",
                    Jparams: {
                        Ajax_CallBack: !0,
                        Ajax_CallBackType: "Mtime.Cinema.Services",
                        Ajax_CallBackMethod: "GetOnlineTheatersByMovieIdInCity",
                        Ajax_CrossDomain: 1,
                        Ajax_RequestUrl: "",
                        t: (new Date).getTime(),
                        Ajax_CallBackArgument0: e.cache.cityId,
                        Ajax_CallBackArgument1: "",
                        Ajax_CallBackArgument2: !0
                    },
                    Jmethod: "getOnlineTheatersByMovieIdInCityResult",
                    Jback: function() {
                        if (this.data && this.data.value) {
                            e.cache.cinemaCount = this.data.value.cinemas.length, e.cinemaData.cinemas = this.data.value.cinemas;
                            for (var t = 0; t < e.cinemaData.cinemas.length; t++) {
                                var a = e.cinemaData.cinemas[t].name.replace(/[^a-z]+/gi, "");
                                "" != a && (e.cinemaData.cinemas[t].py = a)
                            }
                            e.cinemaData.favCinemas = this.data.value.favCinemas, this.data.value.cinemas = fmt.dataSort(this.data.value.cinemas, "districtId"), this.data.value.cinemas = fmt.groupByKey(this.data.value.cinemas, "districtId"), e.cache.cinemaList = this.data.value, e.cinemaHtml()
                        }
                    }
                }), t(document).mousedown(function(a) {
                    var i = e.obj,
                        n = t(e.getEvent(a)).parents().is(i);
                    n || (e.obj.find('[data-plugin="mcd-movie-list"]').hide(), e.obj.find('[data-plugin="mcd-cinema-list"]').hide(), e.obj.find('[data-plugin="mcd-date-list"]').hide())
                }), e.obj.find('[data-plugin="mcd-fast-buy"]').addClass("btnfalse"), e.obj.find('[data-plugin="mcd-date-box"]').addClass("nottime"), e.obj.find('[data-plugin="mcd-date-list"]').remove()
            },
            movieHtml: function(t) {
                var e = this;
                e.obj.find('[data-plugin="mcd-movie-list"]')[0] && !t && e.obj.find('[data-plugin="mcd-movie-list"]').remove();
                var a = t ? t : e.cache.movieList,
                    i = e.cache.movieCount,
                    n = null,
                    o = [];
                e.obj.find(e.opt.movieCount).text(i);
                for (var s = 0; s < a.length; s++) {
                    var r = "" == a[s].rating ? "" : '<b class="moviegrade">' + a[s].rating + "</b>",
                        c = '                <li>                  <a href="javascript:;" movie-id="' + a[s].movieId + '"data-pan="' + MT + '_Index_Hotplay_TicketSearch_Movie">' + r + '<em data-plugin="mcd-movie-itname">' + a[s].title + "</em>                  </a>                </li>";
                    o.push(c)
                }
                t ? e.movieBox.find('[data-plugin="mcd-movie-item"]').html(o.join("")) : (n = '          <div class="moviestip" data-plugin="mcd-movie-list" style="display:none">            <div class="searcher fix">              <input type="text" data-plugin="search-movie" class="input c_a5" value="输入影片名称快速定位" data-pan="' + MT + '_Index_Hotplay_TicketSearch_Movie_Input">              <i class="sub"></i>            </div>            <ul data-plugin="mcd-movie-item">' + o.join("") + "</ul>          </div>", e.movieBox.append(n), e.movieSearch()), e.afterRender()
            },
            cinemaHtml: function(t) {
                var e = this;
                t || e.obj.find('[data-plugin="mcd-cinema-list"]')[0] && e.obj.find('[data-plugin="mcd-cinema-list"]').remove();
                var a = e.cache.cinemaList.districts,
                    i = t ? t.cinemas : e.cache.cinemaList.cinemas,
                    n = t ? t.favCinemas : e.cache.cinemaList.favCinemas,
                    o = e.cache.cinemaCount,
                    s = null,
                    r = [];
                e.obj.find(e.opt.cinemaCount).text(o);
                for (var c = 0; c < a.length; c++) {
                    var l = null,
                        d = null,
                        p = [];
                    d = "<span>" + a[c].name + "</span>", i[a[c].districtId] || (i[a[c].districtId] = []);
                    for (var u = 0; u < i[a[c].districtId].length; u++) {
                        var h = '              <a href="javascript:;" cinema-id="' + i[a[c].districtId][u].cinemaId + '" cinema-sid="' + i[a[c].districtId][u].stringId + '" data-pan="' + MT + '_Index_Hotplay_TicketSearch_Cinema_Choose">' + i[a[c].districtId][u].name + "</a>";
                        p.push(h)
                    }
                    p.length > 0 && (l = '              <p class="oftenlist alist" district-id="' + a[c].districtId + '">                ' + d + p.join("") + "              </p>"), r.push(l)
                }
                if (n && n.length > 0) {
                    for (var m = [], f = 0; f < n.length; f++) {
                        _itF = '              <a href="javascript:;" cinema-id="' + n[f].cinemaId + '" cinema-sid="' + n[f].stringId + '" data-pan="' + MT + '_Index_Hotplay_TicketSearch_Cinema">' + n[f].name + "</a>", m.push(_itF)
                    }
                    _itemF = '            <p class="oftenlist alist">              <span>常去影院</span>              ' + m.join("") + "            </p>"
                } else
                    _itemF = "";
                t ? e.obj.find('[data-plugin="mcd-cinema-result"]').html(_itemF + r.join("")) : (s = '            <div class="cinematip" data-plugin="mcd-cinema-list" style="display:none;">              <p class="fix">                <span class="searcher">                  <input type="text" class="input c_a5" data-plugin="search-cinema" value="输入影院名称快速定位" data-pan="' + MT + '_Index_Hotplay_TicketSearch_Cinema_Input">                  <i class="sub"></i>                </span>                <span class="cinemanum">当前共有' + o + '家影院</span>              </p>              <div data-plugin="mcd-cinema-result" class="arealist">' + _itemF + r.join("") + "</div>            </div>", e.cinemaBox.append(s), e.cinemaSearch()), e.afterRender()
            },
            dateHtml: function() {
                var e = this,
                    a = e.cache.date.dates,
                    i = e.cache.date.dateShowtimes,
                    n = null,
                    o = [],
                    s = [],
                    r = fmt.dateFormat(new Date, 0, "YY-MM-DD"),
                    c = 0;
                e.obj.find('[data-plugin="mcd-date-list"]')[0] && e.obj.find('[data-plugin="mcd-date-list"]').remove();
                for (var l = 0; l < a.length; l++) {
                    var d = a[l].split("-"),
                        p = null,
                        u = 0 == l ? "on" : "";
                    e.opt.todayMark && (r == a[l] ? (c = l, u = "on") : u = ""), p = '            <dd class="' + u + '" data-plugin="tab-itnav" data-plugin="swiper-itbox" data-pan="' + MT + '_Index_Hotplay_TicketSearch_Time_Time">' + fmt.countWeek(d.join("")) + "(" + Number(d[1]) + "月" + Number(d[2]) + "日)</dd>", o.push(p)
                }
                for (var h = 0; h < i.length; h++) {
                    for (var m = null, f = [], v = i[h].showtimes, g = 0; g < v.length; g++) {
                        var b = v[g].isNext ? "<i>(次日)</i>" : "",
                            x = '                  <li>                    <a href="http://piao' + site_domain + "/onlineticket/showtime/" + v[g].showtimeId + '/" target="_blank" data-pan="' + MT + '_Index_Hotplay_TicketSearch_Time_Show">                      <span class="time">' + v[g].timeReal + b + '</span>                      <span class="ting">' + v[g].version + "," + v[g].hallName + '</span>                      <span class="mprice">￥' + v[g].salePrice + '<em></em></span>                      <span class="yprice">￥' + v[g].cinemaPrice + ' </span>                      <span class="btnblue" data-plugin="mcd-buy">选座购票</span>                    </a>                  </li>                ';
                        f.push(x)
                    }
                    var w = h == c ? "block" : "none";
                    m = '            <div class="showdate" data-plugin="tab-itbox" style="display:' + w + '">              <ul>' + f.join("") + "</ul>            </div>", s.push(m)
                }
                if (n = '          <div class="i_date" data-plugin="mcd-date-list" id="mcd-date">            <div class="i_datetab">              <a class="lastday" href="javascript:;" data-plugin="swiper-upbtn" data-pan="' + MT + '_Index_Hotplay_TicketSearch_Time_Leftbtn"><i></i></a>              <a class="nextday" href="javascript:;" data-plugin="swiper-downbtn" data-pan="' + MT + '_Index_Hotplay_TicketSearch_Time_Rightbtn"><i></i></a>              <div class="i_dates">                <div>                  <dl style="width:1000%" data-plugin="tab-nav" data-plugin="swiper-box">' + o.join("") + '</dl>                </div>              </div>            </div>            <div data-plugin="tab-box">' + s.join("") + "</div>          </div>", e.obj.find(e.opt.dateBox).append(n), e.opt.todayMark) {
                    var y = -168 * c;
                    e.obj.find('[data-plugin="tab-nav"]').css("left", y)
                }
                e.obj.find(e.opt.dateBox).tabBase({
                    cur: "on"
                }), t("#mcd-date").SwiperScrollBase({
                    movenum: 1,
                    box: '[data-plugin="tab-nav"]',
                    itbox: '[data-plugin="tab-itnav"]'
                })
            },
            afterRender: function() {
                var e = this;
                e.movieBox.off("click"), e.cinemaBox.off("click"), e.obj.find('[data-plugin="mcd-movie-item"] a').off("click"), e.obj.find('[data-plugin="mcd-cinema-list"] a').off("click"), e.obj.find('[data-plugin="mcd-delete"]').off("click"), e.movieBox.on("click", function() {
                    e.obj.find('[data-plugin="mcd-movie-list"]').is(":visible") || (t('[data-plugin="mcd-movie-list"]').show(), t('[data-plugin="mcd-cinema-list"]').hide(), e.obj.find('[data-plugin="mcd-date-list"]')[0] && e.obj.find('[data-plugin="mcd-date-list"]').hide())
                }), e.cinemaBox.on("click", function() {
                    t('[data-plugin="mcd-cinema-list"]').show(), t('[data-plugin="mcd-movie-list"]').hide(), e.obj.find('[data-plugin="mcd-date-list"]')[0] && e.obj.find('[data-plugin="mcd-date-list"]').hide()
                }), e.obj.find('[data-plugin="mcd-movie-item"] a').on("click", function() {
                    var a = t(this).find('[data-plugin="mcd-movie-itname"]').text(),
                        i = t(this).attr("movie-id");
                    e.cache.chooseMid = i, ajax.getAjax({
                        Jurl: "http://service.theater" + site_domain + "/Cinema.api",
                        JdataType: "script",
                        Jparams: {
                            Ajax_CallBack: !0,
                            Ajax_CallBackType: "Mtime.Cinema.Services",
                            Ajax_CallBackMethod: "GetOnlineTheatersByMovieIdInCity",
                            Ajax_CrossDomain: 1,
                            Ajax_RequestUrl: "",
                            t: (new Date).getTime(),
                            Ajax_CallBackArgument0: e.cache.cityId,
                            Ajax_CallBackArgument1: i,
                            Ajax_CallBackArgument2: !0
                        },
                        Jmethod: "getOnlineTheatersByMovieIdInCityResult",
                        Jback: function() {
                            this.data && this.data.value && (e.cache.cinemaCount = this.data.value.cinemas.length, e.cinemaData.cinemas = this.data.value.cinemas, e.cinemaData.favCinemas = this.data.value.favCinemas, this.data.value.cinemas = fmt.dataSort(this.data.value.cinemas, "districtId"), this.data.value.cinemas = fmt.groupByKey(this.data.value.cinemas, "districtId"), e.cache.cinemaList = this.data.value, e.cinemaHtml(), e.movieBox.find('[data-plugin="mcd-movie-name"]').text(a), e.movieBox.find('[data-plugin="mcd-movie-cbox"]').hide(), e.movieBox.find('[data-plugin="mcd-movie-list"]').hide(), e.movieCinemaCheck(), e.movieHtml())
                        }
                    })
                }), e.obj.find('[data-plugin="mcd-cinema-list"] a').on("click", function() {
                    var a = t(this).text(),
                        i = t(this).attr("cinema-id");
                    e.cache.chooseCid = i, t.cookie("cinemaSid", t(this).attr("cinema-sid")), ajax.getAjax({
                        Jurl: "http://service.theater" + site_domain + "/Cinema.api",
                        JdataType: "script",
                        Jparams: {
                            Ajax_CallBack: !0,
                            Ajax_CallBackType: "Mtime.Cinema.Services",
                            Ajax_CallBackMethod: "GetOnlineMoviesInTheater",
                            Ajax_CrossDomain: 1,
                            Ajax_RequestUrl: "",
                            t: (new Date).getTime(),
                            Ajax_CallBackArgument0: i,
                            Ajax_CallBackArgument1: !0
                        },
                        Jmethod: "getGetOnlineMoviesInTheaterResult",
                        Jback: function() {
                            this.data && this.data.value && (e.cache.movieList = this.data.value.movies, e.cache.movieCount = e.cache.movieList.length, e.cache.cinemaCount = this.data.value.cinemaCount, e.movieHtml(), e.cinemaBox.find('[data-plugin="mcd-cinema-name"]').text(a), e.cinemaBox.find('[data-plugin="mcd-cinema-cbox"]').hide(), e.obj.find('[data-plugin="mcd-cinema-list"]').hide(), e.movieCinemaCheck())
                        }
                    })
                }), e.obj.find('[data-plugin="mcd-delete"]').on("click", function(t) {
                    e.obj.find('[data-plugin="mcd-movie-name"]').text("选影片"), e.obj.find('[data-plugin="mcd-movie-name"]').removeClass("namebox"), e.obj.find('[data-plugin="mcd-cinema-name"]').text("找影院"), e.obj.find('[data-plugin="mcd-cinema-name"]').removeClass("namebox"), e.obj.find('[data-plugin="mcd-movie-cbox"]').show(), e.obj.find('[data-plugin="mcd-cinema-cbox"]').show(), e.obj.find('[data-plugin="mcd-date-box"]').addClass("nottime"), e.obj.find('[data-plugin="mcd-delete"]').hide(), e.movieCinemaCheck(), e.initData(), e.stopEvent(t)
                })
            },
            movieCinemaCheck: function() {
                var e = this;
                e.obj.find('[data-plugin="mcd-date-box"]').off("click"), e.obj.find('[data-plugin="mcd-fast-buy"]').off("click"), e.obj.find('[data-plugin="mcd-buy"]').off("click");
                var a = !1,
                    i = !1;
                "选影片" != e.obj.find('[data-plugin="mcd-movie-name"]').text() && (e.movieBox.find('[data-plugin="mcd-delete"]').show(), e.obj.find('[data-plugin="mcd-movie-name"]').addClass("namebox"), a = !0), "找影院" != e.obj.find('[data-plugin="mcd-cinema-name"]').text() && (e.cinemaBox.find('[data-plugin="mcd-delete"]').show(), e.obj.find('[data-plugin="mcd-cinema-name"]').addClass("namebox"), i = !0), a && i && (e.obj.find('[data-plugin="mcd-date-box"]').removeClass("nottime"), e.obj.find('[data-plugin="mcd-date-box"]').on("click", function() {
                    e.obj.find('[data-plugin="mcd-date-box"]').hasClass("nottime") || e.obj.find('[data-plugin="mcd-date-list"]').is(":visible") || ajax.getAjax({
                        Jurl: "http://service.theater" + site_domain + "/Cinema.api",
                        JdataType: "script",
                        Jparams: {
                            Ajax_CallBack: !0,
                            Ajax_CallBackType: "Mtime.Cinema.Services",
                            Ajax_CallBackMethod: "GetOnlineTicketShowtime",
                            Ajax_CrossDomain: 1,
                            Ajax_RequestUrl: "",
                            t: (new Date).getTime(),
                            Ajax_CallBackArgument0: e.cache.chooseMid,
                            Ajax_CallBackArgument1: e.cache.chooseCid
                        },
                        Jmethod: "getOnlineTicketShowtimeResult",
                        Jback: function() {
                            this.data && this.data.value && (e.cache.date = this.data.value, e.dateHtml())
                        }
                    })
                })), a || i ? (e.obj.find('[data-plugin="mcd-fast-buy"]').removeClass("btnfalse"), e.obj.find('[data-plugin="mcd-fast-buy"]').on("click", function() {
                    if (!t('[data-plugin="mcd-fast-buy"]').hasClass("btnfalse"))
                        if (a) {
                            var i = t.cookie("strIdCity");
                            window.open("http://theater" + site_domain + "/" + i + "/movie/" + e.cache.chooseMid + "/")
                        } else {
                            var n = t.cookie("cinemaSid");
                            window.open("http://theater" + site_domain + "/" + n + "/" + e.cache.chooseCid + "/")
                        }
                })) : e.obj.find('[data-plugin="mcd-fast-buy"]').addClass("btnfalse")
            },
            movieSearch: function() {
                var t = this;
                t.obj.find('[data-plugin="search-movie"]').searchMatching({
                    type: 1,
                    dat: t.cache.movieList,
                    cn: "title",
                    ph: "value",
                    cbFun: function() {
                        t.movieHtml(this.dat)
                    },
                    blankFun: function() {
                        t.movieHtml(t.cache.movieList)
                    }
                })
            },
            cinemaSearch: function() {
                var t = this,
                    e = {};
                e.cinemas = t.cinemaData.cinemas, e.favCinemas = t.cinemaData.favCinemas, t.obj.find('[data-plugin="search-cinema"]').searchMatching({
                    dat: e,
                    cn: "name",
                    py: "py",
                    ph: "value",
                    cbFun: function() {
                        this.dat.districts = t.cache.cinemaList.districts, this.dat.cinemas = fmt.dataSort(this.dat.cinemas, "districtId"), this.dat.cinemas = fmt.groupByKey(this.dat.cinemas, "districtId"), t.cinemaHtml(this.dat)
                    },
                    blankFun: function() {
                        t.cinemaHtml(t.cache.cinemaList)
                    }
                })
            },
            getEvent: function(t) {
                return t = t || window.event, t.target || t.srcElement
            },
            stopEvent: function(t) {
                t = t || window.event, t && t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0
            }
        };
        var i = {
            movieBox: '[data-plugin="mcd-movie-box"]',
            cinemaBox: '[data-plugin="mcd-cinema-box"]',
            dateBox: '[data-plugin="mcd-date-box"]',
            movieCount: '[data-plugin="mcd-movie-count"]',
            cinemaCount: '[data-plugin="mcd-cinema-count"]',
            todayMark: !0,
            movieCallBack: null,
            cinemaCallBack: null,
            dateCallBack: null
        };
        e = t.extend(i, e), this.each(function() {
            new a(t(this), e)
        })
    }
}(jQuery), function(t) {
    t.fn.mCities = function(e) {
        var a = function(t, e) {
            this.opt = e, this.obj = t, this.cities = null, this.cache = null, this.tabIdx = 0, this.init()
        };
        a.prototype = {
            init: function() {
                var t = this;
                t.eventClick()
            },
            eventClick: function() {
                var e = this;
                e.obj.find(e.opt.cityShow).on("click", function() {
                    var t = e.obj.find('[data-plugin="city-list"]');
                    e.opt.preFun && e.opt.preFun(), t[0] ? t.is(":visible") ? t.hide() : t.show() : e.cityHtml()
                }), t(document).mousedown(function(a) {
                    var i = e.obj,
                        n = t(e.getEvent(a)).parents().is(i);
                    n || e.obj.find('[data-plugin="city-list"]').hide()
                })
            },
            groupByIdx: function(t) {
                var e = JSON.parse(t),
                    a = fmt.dataSort(e, "count").slice(-50).reverse(),
                    n = fmt.groupByKey(e, "idx"),
                    o = {};
                a = {
                    hot: a
                };
                var s = ["G", "L", "T", "Z"];
                for (k in s)
                    for (i in n) {
                        if (!(s[k] >= i))
                            break;
                        o[s[k]] = o[s[k]] ? o[s[k]] : {}, o[s[k]][i] = n[i], delete n[i]
                    }
                return o = fmt.extendsFun(a, o), window.localStorage && sessionStorage.setItem("gCities", JSON.stringify(o)), o
            },
            cityHtml: function() {
                function t(t) {
                    var a = e.groupByIdx(t),
                        n = null,
                        o = [];
                    for (g in a) {
                        var s = null;
                        if ("hot" == g) {
                            var r = [],
                                c = null;
                            for (h in a[g])
                                c = '                  <li>                    <a value="' + a[g][h].id + '">' + a[g][h].nameCn + "</a>                  </li>", r.push(c);
                            s = '                <div class="selcity_tiplist" data-plugin="city-list-item">                  <div class="citylist fix">                    <ul data-plugin="city-item-i">                      ' + r.join("") + "                    </ul>                  </div>                </div>"
                        } else {
                            var l = [],
                                d = null;
                            for (k in a[g]) {
                                var r = [],
                                    c = null;
                                for (i in a[g][k])
                                    c = '                    <li>                      <a value="' + a[g][k][i].id + '">' + a[g][k][i].nameCn + "</a>                    </li>", r.push(c);
                                d = '                  <div class="citylist fix">                    <span class="capsletter">' + k + '</span>                    <ul data-plugin="city-item-i">                      ' + r.join("") + "                    </ul>                  </div>", l.push(d)
                            }
                            s = '                <div class="selcity_tiplist" data-plugin="city-list-item" style="display:none;">                  ' + l.join("") + "                </div>"
                        }
                        o.push(s)
                    }
                    n = '            <div class="selcity_tip" data-plugin="city-list">              <div class="selcity_tiptit fix">                <div class="citysearch" data-plugin="city-search-box">                  <input type="text" data-pan="' + MT + '_Index_Hotplay_TicketSearch_City_Input" data-plugin="city-search" class="text c_a5" autocomplete="off" value="直接输入城市或城市拼音">                </div>                <span class="cityletter" data-plugin="tab-nav">                  <a href="javascript:void(0);" class="on" data-plugin="tab-itnav" data-pan="' + MT + '_Index_Hotplay_TicketSearch_City_Hot">热门</a>                  <a href="javascript:void(0);" data-plugin="tab-itnav" data-pan="' + MT + '_Index_Hotplay_TicketSearch_City">A-G</a>                  <a href="javascript:void(0);" data-plugin="tab-itnav" data-pan="' + MT + '_Index_Hotplay_TicketSearch_City">H-L</a>                  <a href="javascript:void(0);" data-plugin="tab-itnav" data-pan="' + MT + '_Index_Hotplay_TicketSearch_City">M-T</a>                  <a href="javascript:void(0);" data-plugin="tab-itnav" data-pan="' + MT + '_Index_Hotplay_TicketSearch_City">W-Z</a>                </span>              </div>              ' + o.join("") + "            </div>", e.obj.append(n), e.afterRender()
                }
                var e = this;
                window.localStorage && sessionStorage.getItem("cities") ? (e.cities = sessionStorage.getItem("cities"), t(sessionStorage.getItem("cities"))) : apiAjax.getCities(function() {
                    for (var a = this.data, i = a.locations.List, n = [], o = 0; o < i.length; o++) {
                        var s = {},
                            r = i[o].Districts.List,
                            c = 0;
                        c += i[o].Cinemas.List.length;
                        for (var l = 0; l < r.length; l++)
                            c += r[l].Cinemas.List.length;
                        s.id = i[o].Id, s.nameCn = i[o].NameCn, s.nameEn = i[o].NameEn, s.idx = i[o].NameEn.substring(0, 1).toUpperCase(), s.sx = i[o].PinyinShort, s.count = c, n.push(s)
                    }
                    e.cities = JSON.stringify(n), t(JSON.stringify(n))
                })
            },
            afterRender: function() {
                var e = this;
                e.obj.find('[data-plugin="city-item-i"] a').off("click"), e.obj.find('[data-plugin="search-match-list"] li').off("click"), e.obj.tabBase({
                    box: '[data-plugin="city-list"]',
                    itbox: '[data-plugin="city-list-item"]',
                    cur: "on",
                    cbFun: function() {
                        e.tabIdx = this.tabIdx, e.obj.find('[data-plugin="search-result"]').hide()
                    }
                }), e.obj.find('[data-plugin="city-item-i"] a').on("click", function() {
                    e.cityItemChoose(t(this), t(this).text())
                }), e.obj.find('[data-plugin="city-search"]').searchMatching({
                    dat: JSON.parse(e.cities),
                    ph: "value",
                    py: "nameEn",
                    cn: "nameCn",
                    focusFun: function() {
                        e.obj.find('[data-plugin="search-result"]')[0] && e.obj.find('[data-plugin="search-result"]').show()
                    },
                    focusBlankFun: function() {
                        e.obj.find('[data-plugin="city-list-item"]').eq(e.tabIdx).hide(), e.searchResult()
                    },
                    blurBlankFun: function() {
                        return e.obj.find('[data-plugin="search-match-list"]')[0] ? void e.obj.find('[data-plugin="search-match-list"] li').on("click", function() {
                            e.cityItemChoose(t(this), t(this).find('[data-plugin="search-match-name"]').text())
                        }) : (e.obj.find('[data-plugin="city-list-item"]').eq(e.tabIdx).show(), void e.obj.find('[data-plugin="search-result"]').remove())
                    },
                    blankFun: function() {
                        e.searchResult()
                    },
                    cbFun: function() {
                        e.searchResult(this.ipt, this.dat)
                    }
                })
            },
            cityItemChoose: function(e, a) {
                var i = this,
                    n = a,
                    o = e.attr("value"),
                    s = i.obj.find(i.opt.cityShowName);
                i.cache = {}, i.cache.name = n, i.cache.id = o, i.obj.find('[data-plugin="city-list"]').hide(), s.text(i.cache.name), s.attr(i.opt.cityShowId, i.cache.id), t.cookie("defaultCity", encodeURI(i.cache.name + "|" + i.cache.id)), t.cookie("DefaultCity-CookieKey", encodeURI(i.cache.id), {
                    domain: site_domain
                }), i.obj.find('[data-plugin="city-list-item"]').eq(i.tabIdx).show(), i.obj.find('[data-plugin="city-search"]').val("直接输入城市或城市拼音"), i.obj.find('[data-plugin="search-result"]').remove(), i.opt.cbFun && i.opt.cbFun.apply(t.extend({}, i.cache))
            },
            searchResult: function(e, a) {
                var i = this;
                i.obj.find('[data-plugin="search-result"]')[0] && i.obj.find('[data-plugin="search-result"]').remove();
                var n = "",
                    o = a ? a.length > 0 ? e + "，按拼音数排序" : "对不起，找不到：" + e : "输入中文/拼音或按↑↓选择",
                    s = [];
                a = a ? a.slice(0, 9) : JSON.parse(i.cities).hot.slice(0, 9);
                for (var r = 0; r < a.length; r++) {
                    var c = 0 == r ? "on" : "";
                    s.push('            <li value="' + a[r].id + '" class="' + c + '">              <span class="fl">' + a[r].nameEn + '</span>              <span class="fr" data-plugin="search-match-name">' + a[r].nameCn + "</span>            </li>")
                }
                n = '          <div class="sou_window" data-plugin="search-result">            <div class="sou_note">' + o + '</div>              <div class="sou_city">                <ul data-plugin="search-match-list">' + s.join("") + "</ul>              </div>          </div>", i.obj.find('[data-plugin="city-search-box"]').append(n), i.obj.find('[data-plugin="search-match-list"] li').on("click", function() {
                    i.cityItemChoose(t(this), t(this).find('[data-plugin="search-match-name"]').text())
                }), i.eventKey()
            },
            eventKey: function(t) {
                var e = this;
                e.obj.find('[data-plugin="city-search"]').off("keydown");
                var a = 0,
                    i = e.obj.find('[data-plugin="search-match-list"] li');
                e.obj.find('[data-plugin="city-search"]').on("keydown", function() {
                    var n = t || window.event || arguments.callee.caller.arguments[0];
                    40 == n.keyCode ? 8 > a && a++ : 38 == n.keyCode && 0 != a && a--, i.removeClass("on"), i.eq(a).addClass("on"), 13 == n.keyCode && e.cityItemChoose(i.eq(a), i.eq(a).find('[data-plugin="search-match-name"]').text())
                })
            },
            getEvent: function(t) {
                return t = t || window.event, t.target || t.srcElement
            }
        };
        var n = {
            cityShow: '[data-plugin="city-show"]',
            cityShowName: '[data-plugin="city-name"]',
            cityShowId: "data-id",
            cbFun: null,
            preFun: null
        };
        e = t.extend(n, e), this.each(function() {
            new a(t(this), e)
        })
    }
}(jQuery), function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var i = t(this),
                n = i.data("bs.carousel"),
                o = t.extend({}, a.DEFAULTS, i.data(), "object" == typeof e && e),
                s = "string" == typeof e ? e : o.slide;
            n || (n = new a(this, o), i.data("bs.carousel", n)), "number" == typeof e ? n.to(e) : s ? n[s]() : o.interval && n.pause().cycle()
        })
    }
    var a = function(e, a) {
        this.$element = t(e), this.$sliderdots = this.$element.find('[data-slidedot="dot"]'), this.options = a, this.cycleable = !!this.$sliderdots.children().length, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.activeStyle = {
            "z-index": 3,
            opacity: 1,
            filter: "alpha(opacity=100)"
        }, this.normalStyle = {
            "z-index": 1,
            opacity: 0,
            filter: "alpha(opacity=0)"
        }, "hover" != this.options.pause || "ontouchstart" in document.documentElement || this.$element.on("mouseenter", t.proxy(this.pause, this)).on("mouseleave", t.proxy(this.cycle, this))
    };
    a.TRANSITION_DURATION = 600, a.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, a.prototype.pause = function(e) {
        return e || (this.paused = !0), this.cycleable && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, a.prototype.cycle = function(e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && this.cycleable && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, a.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(), this.$items.index(t || this.$active)
    }, a.prototype.getItemForDirection = function(t, e) {
        var a = this.getItemIndex(e),
            i = "prev" == t && 0 === a || "next" == t && a == this.$items.length - 1;
        if (i && !this.options.wrap)
            return e;
        var n = "prev" == t ? -1 : 1,
            o = (a + n) % this.$items.length;
        return this.$items.eq(o)
    }, a.prototype.to = function(t) {
        var e = this,
            a = this.getItemIndex(this.$active = this.$element.find('[data-opacity="1"]'));
        return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid", function() {
            e.to(t)
        }) : a == t ? this.pause().cycle() : this.slide(t > a ? "next" : "prev", this.$items.eq(t))
    }, a.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, a.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, a.prototype.slide = function(e, i) {
        var n = this.$element.find('[data-opacity="1"]'),
            o = i || this.getItemForDirection(e, n),
            s = this.interval,
            r = "next" == e ? "left" : "right",
            c = this;
        if ("1" == o.attr("data-opacity"))
            return this.sliding = !1;
        var l = o[0],
            d = t.Event("slide", {
                relatedTarget: l,
                direction: r
            });
        if (this.$element.trigger(d), !d.isDefaultPrevented()) {
            if (this.sliding = !0, s && this.pause(), this.$sliderdots.length) {
                this.$sliderdots.find(".cur").removeClass("cur");
                var p = t(this.$sliderdots.children()[this.getItemIndex(o)]);
                p && p.addClass("cur")
            }
            var u = t.Event("slid", {
                relatedTarget: l,
                direction: r
            });
            return t.support.transition ? (n.css(this.normalStyle), o.css(this.activeStyle), n.one("bsTransitionEnd", function() {
                o.attr("data-opacity", "1"), n.attr("data-opacity", "0"), c.sliding = !1, setTimeout(function() {
                    c.$element.trigger(u)
                }, 0)
            }).emulateTransitionEnd(a.TRANSITION_DURATION)) : (n.css(this.normalStyle), n.attr("data-opacity", "0"), o.css(this.activeStyle), o.attr("data-opacity", "1"), this.sliding = !1, this.$element.trigger(u)), s && this.cycle(), this
        }
    };
    var i = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = a, t.fn.carousel.noConflict = function() {
        return t.fn.carousel = i, this
    };
    var n = function(a) {
        var i,
            n = t(this),
            o = t(n.attr("data-target") || (i = n.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "")),
            s = t.extend({}, o.data(), n.data()),
            r = n.attr("data-slide-to");
        r && (s.interval = !1), e.call(o, s), r && o.data("bs.carousel").to(r), a.preventDefault()
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", n).on("click.bs.carousel.data-api", "[data-slide-to]", n), t(window).on("load", function() {
        t('[data-ride="carousel"]').each(function() {
            var a = t(this);
            e.call(a, a.data())
        })
    })
}(jQuery), function(t) {
    t.fn.idValueMatch = function(e) {
        var a = function(t, e) {
            this.opt = e, this.obj = t, this.ids = [], this.returnDat = [], this.init()
        };
        a.prototype = {
            init: function() {
                var t = this;
                t.opt.dat && t.returnHtml()
            },
            returnHtml: function() {
                var t = this,
                    e = t.opt.returnHtml.split("VALUE"),
                    a = t.opt.dat;
                for (k in a) {
                    t.returnDat[k] = {};
                    var i = t.opt.isPrice ? a[k][t.opt.value] / 100 : a[k][t.opt.value];
                    t.returnDat[k][a[k][t.opt.id]] = e.join(i)
                }
                for (j in t.returnDat)
                    for (h in t.returnDat[j]) {
                        var n = "[" + t.opt.putId + '="' + h + '"]';
                        t.obj.find(n).html(t.returnDat[j][h])
                    }
            }
        };
        var i = {
            dat: null,
            getId: "get-id",
            putId: "put-id",
            id: "id",
            value: "price",
            isPrice: !0,
            returnHtml: "￥<strong>VALUE</strong>"
        };
        e = t.extend(i, e), this.each(function() {
            new a(t(this), e)
        })
    }
}(jQuery);
var rankListItem = '<ul>  {@each movies as item}  <li class="fix">    <dl class="mboxofficerank">      <dt>${item.rating}</dt>      <dd>        <a href=${item.movieId} target="_blank" title=${item.movieName}>          <img src="http://static1.mtime.cn/static/images/transparent.gif" data-src=${item.posterImage} width="80" height="120" alt=${item.movieName} />        </a>      </dd>      <dd>        <h3>          <a href=${item.movieId} target="_blank">${item.movieName}</a>        </h3>        <p>${item.weekendBoxOffice ? "周票房" : "昨日"}：${item.yesterdayBoxOffice ? item.yesterdayBoxOffice : item.weekendBoxOffice}</p>        <p>累计：${item.totalBoxOffice}</p>        <p>          <i class="moviegrade">${item.score}</i>        </p>      </dd>    </dl>  </li>  {@/each}</ul><p class="tr">  <a href="#">更多 <i class="gt"></i></a></p>',
    rankList = '<h4>电影票房</h4><dl class="mboxofficetab fix" data-plugin="tab-nav">  <dd class="cur"><span>内地</span></dd>  <dd><span>北美</span></dd>  <dd><span>全球</span></dd></dl><div data-plugin="tab-box">  <div class="boxofficelist" data-ctrl="bx-m"></div>  <div class="boxofficelist" data-ctrl="bx-n" style="display:none;"></div>  <div class="boxofficelist" data-ctrl="bx-g" style="display:none;"></div></div>',
    apiAjaxMain = function() {
        this.apiServer = ""
    };
apiAjaxMain.prototype = {
    getCities: function(t) {
        var e = fmt.dateFormat(new Date, 0, "YY-MM-DD").split("-").join("");
        ajax.getAjax({
            Jurl: "http://static1.mtime.cn/" + e + "/Utility/Data/TheaterListBoxData.m",
            JdataType: "script",
            Jmethod: "threaterListBoxData",
            Jcache: !0,
            Jback: t
        })
    },
    getRankList: function(t) {
        ajax.getAjax({
            Jurl: this.apiServer + "/json/rank-list",
            Jback: t
        })
    },
    getGoodsPrice: function(t, e) {
        var a = [];
        $("body").find("[" + t + "]").each(function() {
            a.push($(this).attr(t))
        }), ajax.getAjax({
            Jurl: "http://service.mall" + site_domain + "/Mall.api",
            JdataType: "script",
            Jmethod: "GetGoodsPriceAndTagInfoResult",
            Jparams: {
                Ajax_CallBack: !0,
                Ajax_CallBackType: "Mtime.Ecommerce.Services",
                Ajax_CallBackMethod: "GetGoodsPriceAndTagInfo",
                Ajax_CrossDomain: 1,
                Ajax_RequestUrl: "",
                Ajax_CallBackArgument0: a.join(",")
            },
            Jback: e
        })
    },
    getMovieState: function(t, e, a) {
        var i = [$("#ticketfirstbox").attr("data-ticketfirstid")],
            n = [];
        $("body").find("[" + t + "]").each(function() {
            i.push($(this).attr(t))
        }), $("body").find("[" + e + "]").each(function() {
            n.push($(this).attr(e))
        }), ajax.getAjax({
            Jurl: "http://service.channel" + site_domain + "/Channel.api",
            JdataType: "script",
            Jmethod: "indexLoadData15Result",
            Jparams: {
                Ajax_CallBack: !0,
                Ajax_CallBackType: "Mtime.Channel.Services",
                Ajax_CallBackMethod: "IndexLoadData15",
                Ajax_CrossDomain: 1,
                Ajax_RequestUrl: "",
                Ajax_CallBackArgument0: "",
                Ajax_CallBackArgument1: i.join(","),
                Ajax_CallBackArgument2: n.join(","),
                Ajax_CallBackArgument3: ""
            },
            Jback: a
        })
    },
    getAllMovieState: function(t) {
        ajax.getAjax({
            Jurl: "http://service.theater" + site_domain + "/Cinema.api",
            JdataType: "script",
            Jmethod: "getExistShowtimesMovieIdsResult",
            Jparams: {
                Ajax_CallBack: !0,
                Ajax_CallBackType: "Mtime.Cinema.Services",
                Ajax_CallBackMethod: "GetExistShowtimesMovieIdsWithTicket",
                Ajax_CrossDomain: 1,
                Ajax_RequestUrl: "",
                t: (new Date).getTime()
            },
            Jback: t
        })
    },
    getWannaSeeState: function(t, e) {
        ajax.getAjax({
            Jurl: "http://web.channel" + site_domain + "/movierating/getAttitudebyIds.api",
            JdataType: "script",
            Jmethod: "getUserAttitudeByMovieIdsResult",
            Jparams: {
                cross: 1,
                random: (new Date).getTime(),
                movieIds: t
            },
            Jcache: !0,
            Jback: e
        })
    },
    optWannaSee: function(t, e, a) {
        var i = "setWant.api" == e ? "setWantToMovieResult" : "cancelWantToMovieResult";
        ajax.getAjax({
            Jurl: "http://web.channel" + site_domain + "/movierating/" + e,
            JdataType: "script",
            Jmethod: i,
            Jparams: {
                cross: 1,
                random: (new Date).getTime(),
                movieId: t
            },
            Jcache: !0,
            Jback: a
        })
    },
    getNormalAd: function(t) {
        var e = ["NX_M16_HomeIndex_Banner_Hotplay", "NX_M16_HomeIndex_Banner_Goods", "NX_M16_HomeIndex_Banner_Selected", "NX_M16_HomeIndex_Banner_Global", "NX_M16_HomeIndex_Banner_Footer"];
        ajax.getAjax({
            Jurl: this.apiServer + "/api/normalAdIndex/",
            Jparams: {
                regions: e.join(",")
            },
            Jcache: !0,
            Jback: t
        })
    },
    getHotLiveListStatus: function(t, e) {
        ajax.getAjax({
            Jurl: "//" + server + "/api/home-hotlive-status",
            Jparams: {
                liveIds: t.join(",")
            },
            Jback: e
        })
    },
    yyHotLive: function(t, e) {
        ajax.getAjax({
            Jurl: "//" + server + "/api/home-hotlive-book",
            Jparams: {
                liveId: t
            },
            Jback: e
        })
    },
    mustPath: function() {}
};
var apiAjax = new apiAjaxMain;
!function() {
    $("#startRegion")[0] || $("#homeContentRegion").show();
    var t = {
            getCitiesData: function() {
                return window.localStorage ? sessionStorage.getItem("cities") : null
            }
        },
        e = {
            defaultCity: $.cookie("defaultCity") ? decodeURIComponent($.cookie("defaultCity")) : null,
            cities: t.getCitiesData(),
            ab: $.cookie("abtest") || null,
            pageType: $("#home-page-cont").attr("data-type")
        };
    $.cookie("homePageType", e.pageType);
    var i = function() {};
    i.prototype = {
        defaulAndMCD: function() {
            var t = e.defaultCity.split("|");
            $('[data-plugin="city-name"]').text(t[0]), $('[data-plugin="city-name"]').attr("data-id", t[1]), $("#mcd-box").MCD()
        },
        mCitiesPlugin: function() {
            $("#city-box").mCities({
                preFun: function() {
                    $('[data-plugin="mcd-movie-list"]').hide(), $('[data-plugin="mcd-cinema-list"]').hide(), $('[data-plugin="mcd-delete"]').hide(), $('[data-plugin="mcd-movie-cbox"]').show(), $('[data-plugin="mcd-cinema-cbox"]').show(), $('[data-plugin="mcd-movie-name"]').removeClass("namebox").text("选影片"), $('[data-plugin="mcd-cinema-name"]').removeClass("namebox").text("找影院")
                },
                cbFun: function() {
                    $("#mcd-box").MCD(), n.getMovieTicketState()
                }
            })
        },
        getMovieTicketState: function() {
            apiAjax.getMovieState("data-hot-mid", "data-nonext-mid", function() {
                function t(t, e, i) {
                    for (var n = 0; n < t.length; n++) {
                        t[n].btn = "", t[n].priceDom = "";
                        var o = d + t[n].MovieID + "/";
                        if ("data-hot-mid" == e) {
                            if (t[n].HasTicket) {
                                var s = $('[data-ticketfirstid="' + t[n].MovieID + '"]').attr("data-dt");
                                n > 0 && (s = $('[data-hot-mid="' + t[n].MovieID + '"]').attr("data-dt")), t[n].btn = s > c ? '<a href="' + o + '" target="_blank" class="btngreen" data-pan="' + MT + "_TheaterIndex_Hotplay_Button_" + (n + 1) + '">超前预售</a>' : '<a href="' + o + '" target="_blank" class="btnblue" data-pan="' + MT + "_TheaterIndex_Hotplay_Button_" + (n + 1) + '">选座购票</a>', t[n].priceDom = t[n].LowestSalePrice ? "<b><strong>" + t[n].LowestSalePrice / 100 + "</strong>元起</b>" : "", 0 == n && $('[data-ticketfirstid="' + t[n].MovieID + '"]').html(t[n].priceDom + t[n].btn)
                            } else if (t[n].HasInfo) {
                                var r = "http://theater" + site_domain + "/movie/" + t[n].MovieID + "/";
                                t[n].btn = '<a href="' + r + '" target="_blank" class="btngreen" data-pan="' + MT + '_TheaterIndex_Hotplay_Button">查影讯</a>', 0 == n && $('[data-ticketfirstid="' + t[n].MovieID + '"]').html(t[n].priceDom + t[n].btn)
                            }
                            $('[data-price-mid="' + t[n].MovieID + '"]').html(t[n].priceDom), $("[" + e + '="' + t[n].MovieID + '"]').html(t[n].btn)
                        } else
                            "data-nonext-mid" == e && (t[n].HasTicket && (t[n].btn = '<a href="' + o + '" target="_blank" class="btngreen" data-pan="' + MT + "_TheaterIndex_Upcoming_Button_" + (n + 1) + '">超前预售</a>', t[n].priceDom = t[n].LowestSalePrice ? "<b><strong>" + t[n].LowestSalePrice / 100 + "</strong>元起</b>" : ""), $("[data-person-num]").eq(n).text(a[n]), $("[" + e + '="' + t[n].MovieID + '"]').html(t[n].priceDom + t[n].btn))
                    }
                }
                var e = JSON.parse(this.data.value.searchData),
                    a = this.data.value.upcomingWantList,
                    i = e.hotplayMovieTotalCount,
                    o = e.hotplayMovieHasTicketList,
                    s = e.upComingTotalCount,
                    r = e.upcomingTicketList,
                    c = fmt.dateFormat(new Date, 0, "YY-MM-DD").split("-").join(""),
                    l = this.data && this.data.value ? this.data.value.stringIdCity : "",
                    d = "http://theater" + site_domain + "/" + l + "/movie/";
                $.cookie("strIdCity", l), n.getMovieTicketActs(e), $('[data-count="hot-mticket"]').html(i), $('[data-count="onnext-mticket"]').html(s), t(o, "data-hot-mid", null), t(r, "data-nonext-mid", null)
            })
        },
        getMovieTicketActs: function(t) {
            $("[data-mt-cids]").show();
            var e = decodeURIComponent($.cookie("defaultCity")).split("|")[1],
                i = !1;
            $("[data-mt-cids]").each(function(n) {
                var o = !0,
                    s = $(this).attr("data-mt-aid"),
                    r = $(this).attr("data-mt-cids"),
                    c = $(this).attr("data-mt-type"),
                    l = "lottery" == c ? t.lotteryList : "event" == c ? t.eventList : [];
                if ("other" == c)
                    if ("" != r) {
                        r = r.split(",");
                        for (n in r)
                            r[n] == e && (o = !1, i = !0)
                    } else
                        o = !1, i = !0;
                else
                    for (a in l)
                        s == l[a].Id && l[a].HasCinema && (o = !1, i = !0);
                o && $(this).hide()
            }), i ? $('[data-ctrl="mt-acts-tit"]').show() : ($('[data-ctrl="mt-acts-tit"]').hide(), $("#mt-acts").hide()), $("#mt-acts-cont dl").css("left", 0), $("#mt-acts").SwiperScrollBase({
                getviewwidthbox: "#mt-acts-cont",
                movenum: 2
            })
        },
        normalAdInput: function() {
            var t = indexTGs;
            $("#ad-normal-hot").html(t.hot), $("#ad-normal-mall").html(t.mall), $("#ad-normal-recommend").html(t.recommend), $("#ad-normal-funny").html(t.funny), $("#ad-normal-ft").append(t.ft)
        },
        wannaSee: function() {
            apiAjax.getAllMovieState(function() {
                for (var t = this, e = t.data && t.data.value ? t.data.value : [], a = {}, i = e.length > 0 ? e[0].showtimepage.split("movie")[0] + "movie/" : "", n = 0; n < e.length; n++)
                    a[e[n].movieid] = e[n];
                var o = [];
                $("#hot-rank").find("[data-guide-mid]").each(function() {
                    var t = $(this).attr("data-guide-mid");
                    a[t] ? ($(this).find(".btnctrl")[0] && $(this).find(".btnctrl").remove(), $(this).children(".moviectrl").append('<a href="' + i + t + '" class="btnctrl on" target="_blank">预售</a>')) : o.push(t)
                }), 0 != o.length && apiAjax.getWannaSeeState(o.join(","), function() {
                    for (var t = this.data && this.data.items ? this.data.items : [], e = 0; e < t.length; e++) {
                        var a = $('[data-guide-mid="' + t[e].movieId + '"]').children(".moviectrl");
                        a.find(".btnctrl")[0] && a.find(".btnctrl").remove();
                        var i = MT + "_Index_Choose_Guide_Button" + (e + 1);
                        t[e].wantSee ? a.append('<a href="javascript:;" data-ctrl="wanna-see" class="btnctrl on" data-pan=' + i + ">想看</a>") : a.append('<a href="javascript:;" data-ctrl="wanna-see" class="btnctrl" data-pan=' + i + ">想看</a>")
                    }
                    $('[data-ctrl="wanna-see"]').on("click", function() {
                        var t = $(this),
                            e = t.hasClass("on") ? "cancelWant.api" : "setWant.api",
                            a = t.parents("dd").attr("data-guide-mid");
                        apiAjax.optWannaSee(a, e, function() {
                            this.data.userLogin && this.data.success ? "setWant.api" == e ? t.addClass("on").text("想看") : t.removeClass("on").text("想看") : $("body").login()
                        })
                    })
                })
            })
        },
        getHotLiveStatus: function() {
            var t = [];
            $("[data-hotlive-listid]").each(function(e) {
                t.push($(this).attr("data-hotlive-listid"))
            }), apiAjax.getHotLiveListStatus(t, function() {
                var t = this.data;
                t && t.data && $.each(t.data, function(t, e) {
                    1 == e && "false" == $("[data-liveid=" + t + "]").attr("data-yy") && $("[data-liveid=" + t + "]").text("已预约").attr("data-yy", !0).removeClass("yy").addClass("yyed")
                })
            })
        },
        yyHotLive: function(t) {
            apiAjax.yyHotLive(t, function() {
                var e = this.data;
                1 == e.code ? ($("[data-liveid=" + t + "]").text("已预约").attr("data-yy", !0).removeClass("yy").addClass("yyed"), $("[data-hotlive-listid=" + t + "]").find('[data-ctrl="yynum"]').text(n.numFmt(e.data)), $(window).dialogs({
                    c: '<div class="pop-cont-icon"><i></i><span>' + e.showMsg + "</span></div>"
                })) : 0 == e.code ? $("body").login() : $(window).dialogs({
                    c: '<div class="pop-cont-icon"><i class="err"></i><span>' + e.showMsg + "</span></div>"
                })
            })
        },
        numFmt: function(t) {
            return t = Number(t), t / Math.pow(10, 4) >= 1 ? (t = Number(t / Math.pow(10, 4)).toFixed(2), t > 999.99 ? "999.99+万" : t + "万") : t
        }
    };
    var n = new i;
    $("#mcd-box").MCD(), apiAjax.getGoodsPrice("data-get-id", function() {
        if (this.data) {
            var t = this.data.value.result;
            $("body").idValueMatch({
                dat: t,
                getId: "data-get-id",
                putId: "data-get-id"
            });
            var e = $('[data-pan^="' + MT + '_Index_Mall_AB_Block"]');
            e.each(function(t) {
                var e = $(this).attr("data-pan");
                $(this).attr("data-pan", e + "_a")
            })
        }
    }), e.cities ? n.mCitiesPlugin() : apiAjax.getCities(function() {
        for (var t = this.data, a = t.locations.List, i = [], o = 0; o < a.length; o++) {
            var s = {},
                r = a[o].Districts.List,
                c = 0;
            c += a[o].Cinemas.List.length;
            for (var l = 0; l < r.length; l++)
                c += r[l].Cinemas.List.length;
            s.id = a[o].Id, s.nameCn = a[o].NameCn, s.nameEn = a[o].NameEn, s.idx = a[o].NameEn.substring(0, 1).toUpperCase(), s.sx = a[o].PinyinShort, s.count = c, i.push(s)
        }
        e.cities = i, window.localStorage && sessionStorage.setItem("cities", JSON.stringify(e.cities)), n.mCitiesPlugin()
    }), n.getMovieTicketState(), n.normalAdInput(), $("#hotlivebox")[0] && n.getHotLiveStatus(), $("body").TrackerClickBase({
        adTrack: !0
    }), $("#ticketregion").tabBase({
        eve: "mouseenter",
        itbox: "div",
        itnav: "dd",
        cur: "cur"
    }), $("#rank-list").tabBase({
        eve: "mouseenter",
        itbox: "div",
        itnav: "dd",
        cur: "cur"
    }), $("#cinemasalenow").SwiperScrollBase({
        box: "dl",
        itbox: "dd",
        isbigFirst: !0,
        bigFirstbox: "dt",
        getviewwidthbox: ".ciname-movie"
    }), $("#cinameonnext").SwiperScrollBase({
        box: "dl",
        itbox: "dd",
        getviewwidthbox: ".cinemaregion"
    }), $(".countdown").each(function() {
        var t = $(this),
            e = (new Date).getTime(),
            a = 1 * t.attr("data-starttime"),
            i = 1 * t.attr("data-endtime"),
            n = 1 * t.attr("data-servertime");
        n > 0 && (e = n), $(".countdown").Countdown({
            ct: e,
            st: a,
            et: i,
            sEven: function() {
                var e = this.dt.format("$dd").split(""),
                    a = this.dt.format("$hh").split(""),
                    i = this.dt.format("$mm").split(""),
                    n = this.dt.format("$ss").split(""),
                    o = [];
                for (d in e)
                    o.push("<i>" + e[d] + "</i>");
                var s = "          <p>距开始:</p><p>          " + o.join("") + "<em>天</em>          <i>" + a[0] + "</i><i>" + a[1] + "</i><em>:</em>          <i>" + i[0] + "</i><i>" + i[1] + "</i><em>:</em>          <i>" + n[0] + "</i><i>" + n[1] + "</i></p>";
                t.html(s)
            },
            aEven: function() {
                var e = this.dt.format("$dd").split(""),
                    a = this.dt.format("$hh").split(""),
                    i = this.dt.format("$mm").split(""),
                    n = this.dt.format("$ss").split(""),
                    o = [];
                for (d in e)
                    o.push("<i>" + e[d] + "</i>");
                var s = "          <p>距结束:</p><p>          " + o.join("") + "<em>天</em>          <i>" + a[0] + "</i><i>" + a[1] + "</i><em>:</em>          <i>" + i[0] + "</i><i>" + i[1] + "</i><em>:</em>          <i>" + n[0] + "</i><i>" + n[1] + "</i></p>";
                t.html(s)
            },
            lEven: function() {
                var e = "<p>活动结束</p>";
                t.html(e)
            }
        })
    }), $('[data-plugin="imgLoad"]').pageLoad({
        e: function() {
            var t = $(this),
                e = $('[data-plugin="imgLoad"]').index(t) + 1;
            t.find("img").each(function() {
                var t = $(this).attr("data-src");
                t && $(this).attr("src", t).removeAttr("data-src")
            }), $('[data-plugin="imgLoad"]').eq(e).find("img").each(function() {
                var t = $(this).attr("data-src");
                $(this).attr("src", t).removeAttr("data-src")
            })
        }
    }), $('[data-ctrl="funny-more"]').on("click", function() {
        for (var t = $('[data-ctrl="funny-news"] dl'), e = t.length, a = !1, i = 0; e > i; i++)
            if (!t.eq(i).is(":visible")) {
                t.eq(i).show(), a = i + 1 != e;
                break
            }
        a || ($('[data-ctrl="funny-more"]').remove(), $('[data-ctrl="funny-jump"]').show())
    }), $("[data-yy]").on("click", function() {
        "false" == $(this).attr("data-yy") && n.yyHotLive($(this).attr("data-liveid"))
    }), n.wannaSee(), testinAB && $(function() {
        var t = "TESTIN_h3d2435ec-dac5-4145-93a0-c261f99a8f59";
        testinAB.init(t), testinAB.setDefVars({
            registerTxt: "成为会员"
        }), testinAB.getVars(function(t) {
            $("#redirectbtn").html(t.get("registerText"))
        }), $("#redirectbtn").click(function() {
            return testinAB.track("registerBtnClick", 1, function() {
                location.href = "https://passport.mtime.com/member/signin/?redirectUrl=http%3A%2F%2Fwww.mtime.com%2F"
            }), !1
        })
    })
}();

