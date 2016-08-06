"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

define(["jquery", "underscore"], function ($, _) {
    var resPath = "res/";
    var z = void 0;
    var sx = 960;
    var sy = 540;

    $.fn.transform = function (v) {
        this.css("-webkit-transform", v);
        this.css("-ms-transform", v);
        this.css("-o-transform", v);
        this.css("transform", v);
    };

    function find_index(array, key, value) {
        for (var i in array) {
            if (array[i][key] == value) {
                return i;
            }
        }
    }

    function color(r, g, b) {

        return "rgb(" + r + "," + g + "," + b + ")";
    }

    function clone(myObj) {
        if ((typeof myObj === "undefined" ? "undefined" : _typeof(myObj)) != 'object') return myObj;
        if (myObj == null) return myObj;
        var myNewObj = new Object();
        for (var i in myObj) {
            myNewObj[i] = clone(myObj[i]);
        }return myNewObj;
    }

    function g(str) {
        return resPath + str;
    }

    function save(key, value) {
        if (typeof key != "string" || !value) {
            console.error("wrong parameter");
            return;
        }
        localStorage.removeItem(key);
        if ((typeof value === "undefined" ? "undefined" : _typeof(value)) == "object") {
            localStorage.setItem(key, JSON.stringify(value));
        } else {
            localStorage.setItem(key, value);
        }
    }

    function load(key) {
        var result = localStorage.getItem(key);
        try {
            result = JSON.parse(result);
        } catch (e) {
            //Just not object. It's ok.
        }

        return result;
    }

    function setZ(thisz) {
        z = thisz;
    }

    function getUid() {
        if (z) {
            z.uid++;
            return z.uid;
        } else {
            return 0;
        }
    }

    function seed(seed) {
        var max = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];

        seed += 15958;

        function random() {
            var x = Math.sin(seed) * 10000;
            x = Math.abs(x) / 10000;
            x = Math.floor(x * (max + 1));
            if (x == max + 1) {
                x = 0;
            }
            return x;
        }
        return random();
    }

    var local = {

        set: function set(a, b) {
            if ((typeof b === "undefined" ? "undefined" : _typeof(b)) == "object") localStorage.setItem(a, JSON.stringify(b));else localStorage.setItem(a, b);
        },
        get: function get(a) {
            var item = localStorage.getItem(a);
            var ret = item;

            if (item) {
                try {
                    ret = JSON.parse(item);
                } catch (e) {
                    //whatever
                }
            }

            return ret;
        },
        rm: function rm(a) {
            localStorage.removeItem(a);
        }
    };
    var code2key = {
        8: "backspace",
        9: "tab",
        10: "return",
        13: "enter",
        16: "shift",
        17: "ctrl",
        18: "alt",
        19: "pause",
        20: "capslock",
        27: "esc",
        32: "space",
        33: "pageup",
        34: "pagedown",
        35: "end",
        36: "home",
        37: "left",
        38: "up",
        39: "right",
        40: "down",
        45: "insert",
        46: "del",
        59: ";",
        61: "=",
        91: "meta",
        96: "0",
        97: "1",
        98: "2",
        99: "3",
        100: "4",
        101: "5",
        102: "6",
        103: "7",
        104: "8",
        105: "9",
        106: "*",
        107: "+",
        109: "-",
        110: ".",
        111: "/",
        112: "f1",
        113: "f2",
        114: "f3",
        115: "f4",
        116: "f5",
        117: "f6",
        118: "f7",
        119: "f8",
        120: "f9",
        121: "f10",
        122: "f11",
        123: "f12",
        144: "numlock",
        145: "scroll",
        173: "-",
        186: ";",
        187: "=",
        188: ",",
        189: "-",
        190: ".",
        191: "/",
        192: "`",
        219: "[",
        220: "\\",
        221: "]",
        222: "'"
    };
    for (var i = 65; i < 65 + 26; i++) {
        code2key[i] = String.fromCharCode(i).toLowerCase();
    }
    function getDuration(time) {
        if (time.match(/ms/)) {
            return parseInt(time);
        } else {
            return parseInt(time) * 1000;
        }
    }
    function randomItem(arr) {
        return arr[_.random(0, arr.length - 1)];
    }
    _.extend($.fn, {
        hide: function hide() {
            this.addClass("hide");
            return this;
        },
        show: function show() {
            this.removeClass("hide");
            return this;
        },
        isShown: function isShown() {
            return !this.hasClass("hide");
        },
        toggleShow: function toggleShow() {
            if (this.hasClass("hide")) {
                this.removeClass("hide");
            } else {
                this.addClass("hide");
            }
        },
        active: function active() {
            var state = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

            this.addClass("active");
            return this;
        },
        inactive: function inactive() {
            var state = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];


            this.removeClass("active");
            return this;
        },
        isActive: function isActive() {
            return this.hasClass("active");
        },
        toggleActive: function toggleActive() {
            if (this.hasClass("active")) {
                this.removeClass("active");
            } else {
                this.addClass("active");
            }
        },
        noEase: function noEase() {
            return this.css("transition-duration", "0s");
        },
        ease: function ease() {
            return this.css("transition-duration", "");
        }
    });

    var exports = {
        resPath: resPath,
        color: color,
        find_index: find_index,
        clone: clone,
        load: load,
        save: save,
        g: g,
        setZ: setZ,
        getUid: getUid,
        local: local,
        sx: sx,
        sy: sy,
        seed: seed,
        code2key: code2key,
        getDuration: getDuration,
        randomItem: randomItem
    };
    return exports;
});