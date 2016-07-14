"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

define(["jquery"], function () {
    var resPath = "res/";
    var v = void 0;
    var sx = 960;
    var sy = 540;
    var exports = {
        resPath: resPath,
        color: color,
        find_index: find_index,
        clone: clone,
        load_object: load_object,
        save_object: save_object,
        g: g,
        setV: setV,
        getUid: getUid,
        local: local,
        sx: sx,
        sy: sy
    };
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

    function save_object(key, obj) {
        localStorage.removeItem(key);
        localStorage.setItem(key, JSON.stringify(obj));
    }

    function load_object(key) {
        return JSON.parse(localStorage.getItem(key));
    }
    function setV(thisv) {
        v = thisv;
    }
    function getUid() {
        if (v) {
            z.uid++;
            return z.uid;
        } else {
            return 0;
        }
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
    return exports;
});