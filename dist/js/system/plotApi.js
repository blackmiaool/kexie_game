"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

define(["require", "system-sys", "system-common", "system-dbg", "res"], function (require, sys, common, dbg, res) {

    var $dom = $(".scene[data-scene=\"chat\"]");
    var $$ = $dom.find.bind($dom);
    var $bg = $$(".bg");
    var $chat = $$(".chat-text");
    var $chatContent = $$(".chat-content");
    var $nameWrap = $$(".name-wrap");
    var $nameContent = $$(".name-content");
    var $btnWrap = $$(".btn-wrap");

    var $halfWrap = $$(".half-wrap");
    var $mood = $$(".mood-wrap .mood");

    var plot_core = require("plot");
    var $pp = $(".half-wrap .pp");

    var pp = res.pp;
    var message = messageCreate($chat, $chatContent, $nameWrap);
    var gap = {
        def: 70,
        fast: 40,
        slow: 200
    };
    var sx = sys.sx;
    var sy = sys.sy;
    var peopleMoveTime = 500;
    var btn_gap = 50;

    var fastMode = false;
    var people = [];
    var exports = {
        running: {},
        ts: ts,
        tc: tc,
        tm: tm,
        tmood: tmood,
        th: th,
        tcc: tcc,
        tcn: tcn,
        gap: gap,
        rand: rand,
        init: init
    };

    var touched = false;
    //    let tc_pre_things = {};
    var touch_enable = true;
    var running = false;

    $dom.on("click", function () {
        touched = true;
    });

    function clearTouchState() {
        touched = false;
    }

    function rand(min, max) {
        var number = max - min + 1;
        number = Math.ceil(Math.random() * number) + min - 1;
        return number;
    };

    function touch_wait(cb) {
        var a = setInterval(function () {
            if (touched) {
                touched = false;
                clearInterval(a);
                cb();
            }
        }, 100);
    };

    function messageCreate(t, $container, $nameImg) {

        var skip;
        t.fade = function () {
            $nameImg.fadeOut(arguments);
            this.fadeOut(this, arguments);
        };
        t.setNString = function (textRaw, cb, gap) {
            $container.empty();
            var text = textRaw;
            var $all = $("<label>" + text + "</label>");
            var data = [];
            var running = true;

            function setState(cmd) {
                switch (cmd) {
                    case "fast":
                        running = false;
                        $container[0].innerHTML = textRaw;
                        cb();
                        break;
                }
            }

            text = $all[0].innerHTML;
            $all.children().each(function () {
                //            console.log(1,text);
                text = text.split(this.outerHTML);
                //            console.log(2,text);
                data.push(text[0]);
                data.push(this);
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
            data.push(text);
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
                                $container[0].innerHTML += ttt;
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
                            $container.append(thing);
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
            return setState;
        };
        var charIndex = -1;
        var stringLength = 0;
        var inputText;
        var name_text = $nameContent;
        var name_all = $nameWrap;
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

    function tm() {
        var arg_len = 0;
        var items = [];
        if (arguments.length == 1 && Array.isArray(arguments[0])) {
            items = arguments[0];
        } else {
            for (var i in arguments) {
                var empty = true;
                for (var j in arguments[i]) {
                    empty = false;
                    break;
                }
                if (!empty) {
                    items.push(arguments[i]);
                }
            }
        }
        var len = items.length;
        var $btnGroup = $btnWrap.find(".chat-btn-group");

        function choose(index, v) {
            $btnGroup.empty();
            setTimeout(function () {
                clearTouchState();
            }, 0);
            plot_resume(index);
        }
        items.forEach(function (v, i) {
            menuBtnInsert(i, v, len);
        });

        function menuBtnInsert(index, content, len) {
            var type = void 0;
            var text = void 0;
            if (typeof content == "string") {
                type = "btn";
                text = content;
            } else {
                type = content.type;
                text = content.data;
            }
            switch (type) {
                case undefined:
                    console.log('you should define the "type" key in the object params of tm');
                    break;
                case "btn":
                case "disabled_btn":
                    var disabled = type == "btn" ? "" : "disabled";
                    if (message.css("display") != "none") {
                        $$(".btn-wrap").addClass("chatting");
                    } else {
                        $$(".btn-wrap").removeClass("chatting");
                    }
                    var btn = $("<div class=\"single-btn-wrap\"><button class=\"menu_btn btn btn-primary " + disabled + "\">" + text + "</button></div>");
                    btn.data("index", index).find("button").click(function () {
                        choose(index, text);
                    });

                    $btnGroup.append(btn);
                    break;
                case "input_with_btn":
                    var placeholder = "";
                    var btn = "";
                    if (content.data.placeholder != undefined) {
                        placeholder = content.data.placeholder;
                    }
                    if (content.data.btn != undefined) {
                        btn = content.data.btn;
                    }
                    var input_div = $("<div class=\"input-group\">\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"" + placeholder + "\"> \n                                    <span class=\"input-group-btn\"> \n                                        <button miao_index=\"" + index + "\"class=\"btn btn-default\" type=\"button\">" + btn + "</button> \n                                    </span> \n                                 </div>");

                    var input = input_div.find("input");
                    input_div.find("button").click(function () {
                        choose(index, input.val());
                    });

                    $btnGroup.append(input_div);
                    input_div.css("left", "480" - parseInt(input_div.css("width")) / 2 + "px");

                    break;
            }
        }
    };
    var pp_pre;

    function tcc() {
        var args = [].slice.call(arguments, 0);
        args.splice(1, 0, pp_pre);
        tc.apply(this, args);
    }
    var tc_fast_mode = false;

    function tcn() {
        tc_fast_mode = true;
        tc.apply(this, arguments);
    }

    function tc(text, name, gapnum, color) {
        //        tc_pre_things.name = name;
        //        tc_pre_things.gapnum = gapnum;
        //        tc_pre_things.color = color;
        clearTouchState();
        if (!gapnum) {
            gapnum = gap.def;
        }
        if (text) {
            text = text.replace(/,/g, "，").replace(/\./g, "。").replace(/!/g, "！").replace(/\?/g, "？");
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
                        $pp.each(function () {

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
        var setState = message.setNString(text, cb1, gapnum);

        function cb2() {
            if (text_processing) {
                //            console.log("slkjswer")
                setState("fast");
                //            message.fast();
                touch_wait(cb2);
            } else {
                //                $("#div-half img").css("opacity", 1);
                console.log("resume");
                plot_resume();
            }
        }
        if (fastMode) {
            cb2();
        } else {
            if (name != "跳过") {
                //        $await(touch_wait())

                if (!tc_fast_mode) touch_wait(cb2);
            }
        }
    }

    function th() {
        var time = void 0;
        var left = ["150px", "480px", "810px"];
        if (fastMode) {
            time = 10;
        } else {
            time = peopleMoveTime;
        }
        //message.setName(name.name)
        var args = arguments;
        var remove = false;
        var show = false;
        for (var j in people) {
            //check and remove
            var found = false;
            if (!people[j]) {
                continue;
            }
            for (var i in args) {
                if (people[j].name == args[i].name) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                people[j].fadeOut(time, function () {
                    $(this).remove();
                }); //.remove();
                people[j] = false;
                remove = true;
            }
        }

        if (remove) {
            //choose show time
            setTimeout(pp_show, time * 1.2);
        } else {
            pp_show();
        }

        function pp_show() {
            for (var _i in args) {
                if (!args[_i]) {
                    continue;
                }
                var _found = false;
                for (var j in people) {
                    if (!people[j]) {
                        continue;
                    }
                    if (people[j].name == args[_i].name) {
                        _found = true;
                        if (people[j].pos != _i) {
                            show = true;
                            people[j].pos = _i;
                            people[j].animate({
                                left: left[_i]
                            }, time);
                        }
                    }
                }

                if (!_found) {
                    var ppp = getHalf(args[_i], _i);
                    ppp.hide();
                    ppp.name = args[_i].name;
                    ppp.pos = _i;

                    people[people.length] = ppp;

                    show = true;
                    ppp.fadeIn(time);
                }
            }

            if (show) {
                setTimeout(plot_resume, time);
            } else {
                plot_resume();
            }

            function getHalf(peopleThis, pos) {
                var id = "pp" + peopleThis.name;

                var $pp = $("<img id=\"" + id + "\" class=\"pp\" data-name=\"" + peopleThis.name + "\" src=\"" + peopleThis.half + "\"/>");
                $halfWrap.append($pp);
                $pp.css("left", left[pos]);
                return $pp;
            }
        }
    };
    var current_background = 0;

    function tmood(background) {
        var mood = $mood;

        mood.attr("src", background);

        function after_touched() {
            mood.hide();
            plot_resume();
        }
        if (fastMode) {
            after_touched();
        } else {
            if (name != "跳过") {
                //        $await(touch_wait())
                touch_wait(after_touched);
            }
        }
    }

    function ts(background) {
        var time = arguments.length <= 1 || arguments[1] === undefined ? 800 : arguments[1];


        if (fastMode) {
            time = 10;
        }

        if (background == current_background) {
            time = 0.01;
        }

        running = true;

        message.fadeOut(time);

        function get_url(u) {
            return "url(\"" + u + "\")";
        }
        if (!current_background) {
            $bg.hide();
            //            console.log($bg, background)
            $bg.css("background-image", get_url(background));
            //            console.log($bg, $bg.css("background-image"))
            $bg.fadeIn(time);

            setTimeout(function () {

                plot_resume();
            }, time);
        } else {
            $bg.fadeOut(time);
            setTimeout(function () {
                $bg.css("background-image", get_url(background));
                $bg.fadeIn(time);
            }, time);
            setTimeout(function () {
                plot_resume();
                //                console.log("ppp");
            }, 2 * time + 10);
        }
        current_background = background;
        running = false;
    }

    //    window.plot = exports;
    function init() {}
    return exports;
});