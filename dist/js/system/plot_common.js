"use strict";

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

define(function (require) {
    var plot_core = require("plot_core");
    var sys = require("sys");
    var common = require("common");
    var dbg = require("dbg");
    var res = require("res");
    var pp = res.pp;
    var people = [];
    var exports = {
        running: {}
    };

    var sx = sys.sx;
    var sy = sys.sy;
    var btn_gap = 50;
    var touched = false;
    var tc_pre_things = {};
    var touch_enable = true;
    var running = false;
    var result = {};
    exports.result = result;
    var message;

    var gap = {
        def: 70,
        fast: 40,
        slow: 200
    };

    exports.gap = gap;
    var people_move_time = 500;

    function touch_wait(cb) {
        var a = setInterval(function () {
            if (touched) {
                touched = false;
                if (touch_enable) {
                    clearInterval(a);
                    cb();
                }
            }
        }, 100);
    };
    var rnd;
    rnd.today = new Date();
    rnd.seed = rnd.today.getTime();

    function rnd() {
        rnd.seed = (rnd.seed * 9301 + 49297) % 233280;
        return rnd.seed / 233280.0;
    };

    function rand(min, max) {
        //    console.log(min,max)
        var number = max - min + 1;
        number = Math.ceil(rnd() * number) + min - 1;
        return number;
    };
    exports.rand = rand;

    function message_create() {
        var t = $('#chat_text');
        var container = $("#chat_content");
        var name_img = $('#name_all');

        var skip;
        t.fadeOut_real = t.fadeOut;
        t.fadeOut = function () {
            //        console.log("faddeee",arguments)
            name_img.fadeOut(arguments);
            t.fadeOut_real.apply(t, arguments);
        };
        t.setNString = function (text, cb, gap) {
            //    console.log($("<label>" + text + "</label>").children())
            container.html("");
            var ele = $("<label>" + text + "</label>");
            var data = [];
            var running = true;
            var text_bak = text;
            var ret = function ret(cmd) {
                switch (cmd) {
                    case "fast":
                        running = false;
                        container[0].innerHTML = text_bak;
                        cb();
                        break;
                }
            };

            function push(a) {
                data.push(a);
            }
            text = ele[0].innerHTML;
            ele.children().each(function () {
                //            console.log(1,text);
                text = text.split(this.outerHTML);
                //            console.log(2,text);
                push(text[0]);
                push(this);
                var a = "";
                var start = true;
                for (var i = 1; i < text.length; i++) {
                    if (start) {
                        start = false;
                    } else {
                        a += this.outerHTML;
                    }
                    a += text[i];
                    //                console.log("a",a);
                }
                text = a;
                //            console.log(3,text);
            });
            push(text);
            var index = 0;
            //        var gap = 200;

            function play() {
                if (index == data.length) {
                    cb();
                    return;
                }
                var thing = data[index];
                if (thing) {
                    switch (typeof thing === "undefined" ? "undefined" : _typeof(thing)) {
                        case "string":
                            var t_put = function t_put(ttt) {
                                //                    console.info(t);
                                container[0].innerHTML += ttt;
                            };

                            var j = 0;

                            var word_play = function word_play() {};

                            word_play();
                            for (var i = 0; i < thing.length; i++) {

                                setTimeout(function () {
                                    if (!running) return;
                                    t_put(thing[j]);
                                    j++;
                                }, gap * i);
                            }

                            setTimeout(function () {
                                if (!running) return;
                                index++;
                                play();
                            }, gap * thing.length);
                            break;
                        case "object":
                            var m = thing.innerHTML;
                            //                console.log(thing.outerHTML)
                            thing.innerHTML = "";
                            thing = $(thing);
                            container.append(thing);
                            var j = 0;
                            var len = m.length;
                            //                console.log(len);

                            for (var i = 0; i < len; i++) {
                                setTimeout(function () {
                                    if (!running) return;
                                    thing.text(thing.text() + m[j]);
                                    j++;
                                }, gap * i);
                            }

                            setTimeout(function () {
                                if (!running) return;
                                index++;
                                play();
                            }, gap * len);

                            break;
                    }
                } else {
                    index++;
                    play();
                }
            }
            play();
            return ret;
        };
        var charIndex = -1;
        var stringLength = 0;
        var inputText;
        var text_content = $("#chat_text_content");
        var name_text = $("#name_content");
        var name_all = $("#name_all");
        var name;
        name_all.hide();
        t.setName = function (text) {
            if (text) {
                name = text;
                name_all.show();
                name_text.text(name);
            } else {
                name_all.hide();
                name_text.text("");
            }
        };
        var currentStyle = 'inline';
        return t;
    }

    function plot_resume(ret) {
        setTimeout(function () {
            plot_core.resume(ret);
        }, 0);
    }
    exports.tm = function () {
        touch_enable = false;
        var arg_len = 0;
        var it;
        if (arguments[0] && !arguments[1] && Array.isArray(arguments[0])) {
            it = arguments[0];
        } else {
            for (var i in arguments) {
                var empty = true;
                for (var j in arguments[i]) {
                    empty = false;
                    break;
                }
                if (empty) arguments[i] = undefined;else {
                    arg_len++;
                }
            }
            arguments.length = arg_len;
            it = arguments;
        }

        var len = it.length;
        var menu_value = false;
        var div_btn = $("#div-btn");
        var cb = function cb(index, v) {
            div_btn.empty();
            setTimeout(function () {
                touched = false;
            }, 0);
            //            var js_arg={};
            //            js_arg = {
            //                index: index,
            //                value: v
            //            };
            //            {
            //                index:index,
            //                v:v
            //            }
            //            plot_resume({
            //                index:index,
            //                value:v
            //            });
            plot_resume(index);
        };

        function menu_btn_create(index, content, len) {
            var id = "menu_btn" + index;
            //        console.log(typeof (content))

            switch (typeof content === "undefined" ? "undefined" : _typeof(content)) {
                case "string":
                    var vertical_offset = 0;
                    if (message.css("display") != "none") {
                        vertical_offset = 180;
                    }

                    var btn = $("<button id='" + id + "' class=\"menu_btn btn btn-primary\">\n                            </button>");
                    btn.data("index", index).css("top", (sy - vertical_offset) * 0.5 + ((len - 1) / -2 + index) * btn_gap + "px").html(content).click(function () {
                        menu_value = parseInt($(this).data("index"));
                        cb(index, content);
                    });

                    div_btn.append(btn);
                    break;
                case "object":
                    switch (content.type) {
                        case undefined:
                            console.log('you should define the "type" key in the object params of tm');
                            break;
                        case "btn":
                        case "disabled_btn":
                            var disabled = content.type == "btn" ? "" : "disabled";
                            var vertical_offset = 0;
                            if (message.css("display") != "none") {
                                vertical_offset = 210;
                            }
                            var btn = $("<button id='" + id + "' class=\"menu_btn btn btn-primary " + disabled + "\">\n                                </button>");
                            btn.css("top", (sy - vertical_offset) * 0.5 + ((len - 1) / -2 + index) * btn_gap + "px").data("index", index).html(content.data).click(function () {
                                menu_value = parseInt($(this).data("index"));
                                cb(index, content.data);
                            });

                            div_btn.append(btn);
                            break;
                        case "input_with_btn":
                            var input_id = "menu_btn_" + index;
                            var input_button = "menu_btn_btn" + index;
                            var placeholder = "";
                            var btn = "";
                            if (content.data.placeholder != undefined) {
                                placeholder = content.data.placeholder;
                            }
                            if (content.data.btn != undefined) {
                                btn = content.data.btn;
                            }
                            var input_div = $("<div class=\"input-group\">\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"" + placeholder + "\"> \n                                    <span class=\"input-group-btn\"> \n                                        <button miao_index=\"" + index + "\"class=\"btn btn-default\" type=\"button\">" + btn + "</button> \n                                    </span> \n                                 </div>");

                            input_div.css("top", (sy - 180) * 0.5 + ((len - 1) / -2 + index) * btn_gap + "px");

                            //                    if (content.data.width == undefined) {
                            //                        input_div.css("width", "30%")
                            //                    } else {
                            //                        input_div.css("width", content.data.width)
                            //                    }
                            var input = input_div.find("input");
                            var index_this = index;
                            input_div.find("button").click(function () {
                                menu_value = {
                                    data: input.val(),
                                    index: index_this
                                };
                                cb(menu_value.index, menu_value.data);
                            });

                            div_btn.append(input_div);
                            input_div.css("left", "480" - parseInt(input_div.css("width")) / 2 + "px");

                            break;
                        default:

                            break;
                    }

                    break;
            }

            return;
        }

        for (var i = 0; i < len; i++) {

            var btn = menu_btn_create(i, it[i], len);
        };

        return menu_value;
    };
    var pp_pre;
    exports.tcc = function () {
        var args = [].slice.call(arguments, 0);
        args.splice(1, 0, pp_pre);
        exports.tc.apply(this, args);
    };
    var tc_fast_mode = false;
    exports.tcn = function () {
        tc_fast_mode = true;
        exports.tc.apply(this, arguments);
    };
    exports.tc = function (text, name, gapnum, color) {
        tc_pre_things.name = name;
        tc_pre_things.gapnum = gapnum;
        tc_pre_things.color = color;
        touched = false;
        touch_enable = true;
        if (!gapnum) {
            gapnum = exports.gap.def;
        }
        if (text) {
            message.show();
            if (name) {
                pp_pre = name;
                switch (typeof name === "undefined" ? "undefined" : _typeof(name)) {
                    case "string":
                        message.setName(name);
                        break;

                    case "object":
                        message.setName(name.name);
                        //                $("#div-half img").animate({opacity:"0.5"});
                        //                $("#div-half img").css("opacity", 0.5);
                        //                $("#pp" + name.name).animate({opacity:"1"});
                        //                    if (name == pp.you)
                        //                        break;
                        $("#div-half img").each(function () {

                            if ($(this).attr("id") != "pp" + name.name) {
                                $(this).animate({
                                    opacity: "0.5"
                                }, "fast");
                            } else {
                                $(this).animate({
                                    opacity: "1"
                                }, "fast");
                            }
                        });
                        break;
                }
            } else {
                message.setName(false);
            }
        } else {
            message.hide();
        }
        var text_processing = true;

        function cb1() {
            text_processing = false;
            if (tc_fast_mode) {

                cb2();
                tc_fast_mode = false;
            }
        }
        var handle = message.setNString(text, cb1, gapnum);

        function cb2() {
            if (text_processing) {
                //            console.log("slkjswer")
                handle("fast");
                //            message.fast();
                touch_wait(cb2);
            } else {
                //                $("#div-half img").css("opacity", 1);
                console.log("resume");
                plot_resume();
            }
        }
        if (dbg.isinfastmode) {
            cb2();
        } else {
            if (name != "跳过") {
                //        $await(touch_wait())

                if (!tc_fast_mode) touch_wait(cb2);
            }
        }
    };

    exports.th = function () {
        if (dbg.isinfastmode) {
            var people_move_time_this = 10;
        } else {
            people_move_time_this = people_move_time;
        }
        //message.setName(name.name)
        var input = arguments;
        var remove = false;
        var show = false;
        for (var j in people) {

            var found = false;
            if (!people[j]) {
                continue;
            }
            for (var i in input) {
                if (people[j].name == input[i].name) {

                    found = true;
                    continue;
                }
            }
            if (!found) {

                people[j].fadeOut(people_move_time_this, function () {
                    $(this.remove());
                }); //.remove();
                people[j].miaoindex = j;
                people[j] = undefined;
                remove = true;
            }
        }

        if (remove) {
            setTimeout(pp_show, people_move_time_this * 1.2);
        } else {
            pp_show();
        }

        function get_half(name, pos) {
            var id = "pp" + name.name;

            var pp = $("<img id=\"" + id + "\" class=\"pp\"/>");
            $("#div-half").append(pp);

            pp.attr("indexx", pos);
            pp.attr("src", name.half);
            pp.css("position", "absolute");
            pp.css("top", 40 + "px");
            if (pos == 0) {
                pp.css("right", "auto");
                pp.css("left", pos_covert(pos, pp) + "px");
            } else if (pos == 2) {
                pp.css("left", "auto");
                pp.css("right", pos_covert(0, pp) + "px");
            } else {
                pp.css("left", 0);
                pp.css("right", 0);
            }
            return pp;
        }

        function pos_covert(pos, pp) {
            var width = parseInt(pp.prop("width"));
            var height = parseInt(pp.prop("height"));
            if (width < 250) width = 250;
            return sx / 6 * (pos * 2 + 1) - width / 2;
        }

        function pp_show() {

            for (var _i in input) {
                var found = false;
                if (!input[_i]) {
                    continue;
                }
                for (var j in people) {
                    if (!people[j]) {
                        continue;
                    }
                    if (people[j].name == input[_i].name) {
                        found = true;
                        //print("found")
                        if (people[j].pos != _i) {
                            //print("not",i)
                            show = true;
                            people[j].pos = _i;
                            people[j].animate({
                                left: pos_covert(people[j].pos, people[j]) + "px"
                            }, people_move_time_this);
                        }
                    }
                }

                if (!found) {
                    var ppp = get_half(input[_i], _i);
                    ppp.hide();
                    ppp.name = input[_i].name;
                    ppp.pos = _i;

                    people[people.length] = ppp;

                    show = true;
                    ppp.fadeIn(people_move_time_this);
                }
            }

            if (show) {
                setTimeout(plot_resume, people_move_time_this);
            } else {
                plot_resume();
            }
        }
    };
    var current_background = 0;
    var bg;
    exports.tmood = function (background) {
        var mood = $("#div-mood .mood");

        mood.attr("src", background);

        function after_touched() {
            mood.hide();
            plot_resume();
        }
        if (dbg.isinfastmode) {
            after_touched();
        } else {
            if (name != "跳过") {
                //        $await(touch_wait())
                touch_wait(after_touched);
            }
        }
    };
    exports.ts = function (background, time) {
        touch_enable = false;
        var fadeout_time = 800;
        if (dbg.isinfastmode) {
            time = 10;
        }
        //        touch_enable = true;

        if (time == undefined || time == false) {
            time = fadeout_time;
        }
        if (background == current_background) {
            time = 0.01;
        }

        running = true;

        message.fadeOut(time);

        function get_url(u) {
            return "url(\"../../" + u + "\")";
        }
        if (!current_background) {
            bg.hide();
            console.log(bg, background);
            bg.css("background-image", get_url(background));
            console.log(bg, bg.css("background-image"));
            bg.fadeIn(time);

            setTimeout(function () {

                plot_resume();
            }, time);
        } else {
            bg.fadeOut(time);
            setTimeout(function () {
                bg.css("background-image", get_url(background));
                bg.fadeIn(time);
            }, time);
            setTimeout(function () {
                plot_resume();
                console.log("ppp");
            }, 2 * time + 10);
        }
        current_background = background;
        running = false;
    };

    window.plot = exports;
    exports.init = function () {
        bg = $("#scene_chat #div-bg");

        message = message_create();
        $("#scene_chat").on("click", function () {
            touched = true;
        });
    };
    return exports;
});