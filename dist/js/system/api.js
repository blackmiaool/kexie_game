//define(["common"],function (common) {
//
//    var fade_time = 100
//    var text_time = 100
//    var scene_onShow = {}
//    var lua_arg = []
//    var js_arg = {}
//    var lua_handle_finish = false;
//    var imdeveloper = local_load("Imdeveloper") == "true";
//    var isinfastmode = local_load("Fastmode") == "true";
//    var v;
//    var bg;
//   
//    var btn_gap = 50
//    var sz;
//    var current_scene = 0;
//    var running = false
//
//    var next_scene = 0;
//    var scene_sprite;
//
//    var half = 0;
//
//    var touched = false;
//    var current_background = 0;
//
//    var quicken_btn;
//    var quicken;
//    var mood_sprite;
//
//    var sx = 960;
//    var sy = 540;
//
//    var menu_speed = 0.3
//    var fadeout_time = 800
//    var fadein_time = 100
//    var color_award = common.color(166, 226, 45)
//    var color_punish = common.color(253, 151, 32)
//
//    var game_over = true
//    var touch_enable = true
//    var message = {};
//    var div_mood, div_danmu, div_text, div_bg, div_btn;
//    var people_move_time = 500;
//
//
//
//
//    function lua_arg_init() {
//        for (var i = 0; i < 10; i++) {
//            lua_arg[i] = {};
//        }
//    }
//
//
//   
//
//    function lua_arg_init_one(obj, key) {
//        obj[key] = {};
//    }
//    lua_arg_init();
//
//
//    function plot_resume() {
//        console.log("resume")
//        lua_arg_init();
//        setTimeout(
//            function () {
//                L.execute("resume()")
//            }, 0
//        )
//
//    }
//
//
//
//    function bm_test() {
//        console.log("tttt")
//    }
//
//    function local_set_obj(a, b) {
//        return local_set(a, JSON.stringify(b))
//    }
//
//    function local_set(a, b) {
//        localStorage.setItem(a, b)
//    }
//
//
//    function local_load_obj(a) {
//        return JSON.parse(local_load(a))
//    }
//
//    function local_load(a) {
//        return localStorage.getItem(a)
//    }
//
//    function local_rm(a) {
//        localStorage.removeItem(a)
//    }
//
//
//
//
//    rnd.today = new Date();
//    rnd.seed = rnd.today.getTime();
//
//    function rnd() {　　　　
//        rnd.seed = (rnd.seed * 9301 + 49297) % 233280;　　　　
//        return rnd.seed / (233280.0);
//    };
//
//    function rand(min, max) {
//        //    console.log(min,max)
//        var number = max - min + 1
//        number = Math.ceil(rnd() * number) + min - 1　　　　
//        return number;
//    };
//
//    function getProgressName(index) {
//        return "progress" + index
//    }
//
//
//    function print() {
//        if (print.arguments.length == 2) {
//            print(print.arguments[0] + "=" + print.arguments[1])
//
//        } else {
//            console.log(print.arguments[0])
//        }
//    }
//    var ppp = print;
//    var delay = function (ms) {
//        setTimeout(
//            plot_resume, ms
//        );
//    }
//
//    var bg_fadeout = function (time) {
//        bg.fadeOut(time);
//    }
//
//    function ele_create(name, idd, classs) {
//        return '<' + name + ' ' + "id=" + idd + " " + "class=" + classs + " " + ">" + "</" + name + ">";
//    }
//
//
//
//
//    var bg_set = function (img) {
//        bg.attr("src", img)
//    }
//
//    var bg_fadein = function (img, time) {
//        console.log("time", time)
//        bg.attr("src", img)
//        bg.fadeIn(time)
//    }
//
//
//
//
//
//
//
//
//   
//
//   
//
//   
//    var tcc = function (text) {
//        tc(text, tc_pre_things.name, tc_pre_things.gapnum, tc_pre_things.color)
//    }
//   
//    var touch_wait = function (cb) {
//        var a = setInterval(
//            function () {
//                if (touched) {
//                    touched = false;
//                    if (touch_enable) {
//                        clearInterval(a);
//                        cb();
//                    }
//                }
//            }, 100
//        )
//    }
//
//   
//
//
//
//    function pos_covert(pos, pp) {
//        return sx / 6 * (pos * 2 + 1) - parseInt(pp.css("width")) / 2
//    }
//
//    function get_half(name, pos) {
//        var id = "pp" + name.name
//        var pp = ele_create("img", id, "pp")
//        div_half.append(pp)
//        pp = $("#" + id)
//
//        pp.attr("indexx", pos)
//        pp.attr("src", name.half)
//        pp.css("position", "absolute")
//        pp.css("top", 40 + "px")
//
//        pp.css("left", pos_covert(pos, pp) + "px")
//
//        return pp;
//    }
//
//
//
//    var people = [];
//   
//
//
//
//
//
//
//
//
//
//    function miao_danmu(data, color) {
//        $("#div-danmu").scope().$apply(function () {
//            angular.element("#div-danmu").scope().data.push({
//                text: data,
//                bg_color: color,
//            })
//        })
//    }
//
//
//    function color_text_create(text, color) {
//        return $('<span style="color:' + color + '">' + text + '</span>')
//    }
//
//
//
//    var print_from_lua = function () {
//        var args = arguments;
//        var outs = []
//        for (var i in args) {
//            var t;
//            eval("t=" + args[i]);
//            outs[i] = t;
//        }
//        console.log.apply(console, outs);
//    }
//    v = common.clone(v_init)
//})
"use strict";