define(["require", "system-sys", "system-common", "system-dbg", "res"], function (require, sys, common, dbg, res) {

    const $dom = $(`.scene[data-scene="chat"]`);
    console.log($dom)
    const $$ = $dom.find.bind($dom);
    const $bg = $$(".bg");
    const $chat = $$(".chat-text");
    const $chatContent = $$(".chat-content");
    const $nameWrap = $$(".name-wrap");
    const $nameContent = $$(".name-content");
    const $btnWrap = $$(".btn-wrap")

    const $halfWrap = $$(".half-wrap");
    const $mood = $$(".mood-wrap .mood");

    const plot_core = require("plot");
    const $pp = $(".half-wrap .pp");

    const pp = res.pp;
    const message = messageCreate($chat, $chatContent, $nameWrap);
    const gap = {
        def: 70,
        fast: 40,
        slow: 200,
    };
    const sx = common.sx;
    const sy = common.sy;
    const peopleMoveTime = 500;
    const btn_gap = 50;




    let fastMode = false;
    let people = [];
    let exports = {
        running: {},
        ts,
        tc,
        tm,
        tmood,
        th,
        tcc,
        tcn,
        gap,
        rand,
        init,
        emphasize
    };


    let touched = false;
    //    let tc_pre_things = {};
    let touch_enable = true;
    let running = false;


    $dom.on("click", function () {
        touched = true;

    })

    function clearTouchState() {
        touched = false;
    }

    function rand(min, max) {
        var number = max - min + 1
        number = Math.ceil(Math.random() * number) + min - 1　　　　
        return number;
    };

    function touch_wait(cb) {
        var a = setInterval(
            function () {
                if (touched) {
                    touched = false;
                    clearInterval(a);
                    cb();

                }
            }, 100
        )
    };

    function emphasize(people) {
        let $emphasize = $$(".emphasize.layer");
        let $$$ = $emphasize.find.bind($emphasize);
        let $half = $$$(".big-half");
        let $descr = $$$(".descr");
        let $mask = $$$(".panel-wrap .mask");
     
        $half.attr("src", people.half);
        $bg.addClass("filter-gray").addClass("ease");

        console.log(arguments);
        setTimeout(function () {
            let transTime1=common.getDuration($half.css("transition-duration"));
            $half.active();
            $descr.active();
            setTimeout(function () {
                $mask.active();
            }, transTime1);
            setTimeout(function () {    
                 let transTime2=common.getDuration($half.css("transition-duration"));
                $half.addClass("leave");
                $descr.addClass("leave");
                setTimeout(function () {
                    $mask.inactive();
                    let transTime3=common.getDuration($bg.css("transition-duration"));
                    $bg.removeClass("filter-gray");
                    $half.removeClass("leave").noEase().inactive("leave");
                    $descr.removeClass("leave").noEase().inactive("leave");
                    setTimeout(function(){
                        $bg.removeClass("ease")
                        $half.ease();
                        $descr.ease();
                        plot_core.resume();
                    },transTime3)
                }, transTime2);
            }, transTime1+1500);
        }, 100)
    }


    function messageCreate(t, $container, $nameImg) {

        var skip;
        t.fade = function () {
            $nameImg.fadeOut(arguments);
            this.fadeOut(this, arguments);
        }
        t.setNString = function (textRaw, cb, gap) {
            $container.empty();
            let text = textRaw;
            const $all = $(`<label>${text}</label>`);
            let data = [];
            let running = true;

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
                text = text.split(this.outerHTML)
                    //            console.log(2,text);
                data.push(text[0])
                data.push(this)
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
            })
            data.push(text)
            var index = 0;
            //        var gap = 200;

            function play() {
                if (index == data.length) {
                    cb();
                    return;
                }
                var thing = data[index];
                if (thing) {
                    switch (typeof (thing)) {
                    case "string":
                        function t_put(ttt) {
                            //                    console.info(t);
                            $container[0].innerHTML += ttt;
                        }
                        var j = 0;

                        function word_play() {}
                        word_play();
                        for (var i = 0; i < thing.length; i++) {

                            setTimeout(
                                function () {
                                    if (!running)
                                        return;
                                    t_put(thing[j]);
                                    j++;
                                }, gap * i
                            )
                        }

                        setTimeout(
                            function () {
                                if (!running)
                                    return;
                                index++;
                                play();
                            }, gap * thing.length
                        )
                        break;
                    case "object":
                        var m = thing.innerHTML;
                        //                console.log(thing.outerHTML)
                        thing.innerHTML = "";
                        thing = $(thing)
                        $container.append(thing);
                        var j = 0;
                        var len = m.length;
                        //                console.log(len);

                        for (var i = 0; i < len; i++) {
                            setTimeout(
                                function () {
                                    if (!running)
                                        return;
                                    thing.text(thing.text() + m[j]);
                                    j++;
                                }, gap * i
                            )
                        }

                        setTimeout(
                            function () {
                                if (!running)
                                    return;
                                index++;
                                play();
                            }, gap * len
                        )

                        break;
                    }
                } else {
                    index++;
                    play();
                }
            }
            play();
            return setState;
        }
        var charIndex = -1;
        var stringLength = 0;
        var inputText;
        var name_text = $nameContent;
        var name_all = $nameWrap
        var name;
        name_all.hide()
        t.setName = function (text) {
            if (text) {
                name = text;
                name_all.show()
                name_text.text(name)
            } else {
                name_all.hide()
                name_text.text("")
            }

        }
        var currentStyle = 'inline';
        return t;
    }

    function plot_resume(ret) {
        setTimeout(function () {
            plot_core.resume(ret);
        }, 0)

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
            menuBtnInsert(i, v, len)
        })


        function menuBtnInsert(index, content, len) {
            let type;
            let text;
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
                var btn = $(`<div class="single-btn-wrap"><button class="menu_btn btn btn-primary ${disabled}">${text}</button></div>`);
                btn.data("index", index)
                    .find("button")
                    .click(function () {
                        choose(index, text);
                    })

                $btnGroup.append(btn)
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
                var input_div = $(`<div class="input-group">
                                    <input type="text" class="form-control" placeholder="${placeholder}"> 
                                    <span class="input-group-btn"> 
                                        <button miao_index="${index}"class="btn btn-default" type="button">${btn}</button> 
                                    </span> 
                                 </div>`);

                var input = input_div.find("input")
                input_div.find("button").click(function () {
                    choose(index, input.val());
                })

                $btnGroup.append(input_div);
                input_div.css("left", "480" - parseInt(input_div.css("width")) / 2 + "px")

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
            gapnum = gap.def
        }
        if (text) {
            text = text.replace(/,/g, "，").replace(/\./g, "。").replace(/!/g, "！").replace(/\?/g, "？");
            message.show();
            if (name) {
                pp_pre = name;
                switch (typeof (name)) {
                case "string":
                    message.setName(name)
                    break;

                case "object":
                    message.setName(name.name)
                        //                $("#div-half img").animate({opacity:"0.5"});
                        //                $("#div-half img").css("opacity", 0.5);
                        //                $("#pp" + name.name).animate({opacity:"1"});
                        //                    if (name == pp.you)
                        //                        break;
                    $pp.each(function () {

                        if ($(this).attr("id") != ("pp" + name.name)) {
                            $(this).animate({
                                opacity: "0.5"
                            }, "fast");
                        } else {
                            $(this).animate({
                                opacity: "1"
                            }, "fast");
                        }
                    })
                    break;
                }
            } else {
                message.setName(false)
            }
        } else {
            message.hide()
        }
        var text_processing = true;

        function cb1() {
            text_processing = false;
            if (tc_fast_mode) {

                cb2();
                tc_fast_mode = false;
            }
        }
        var setState = message.setNString(text, cb1, gapnum)

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

                if (!tc_fast_mode)
                    touch_wait(cb2);
            }
        }

    }

    function th() {
        let time;
        let left = ["150px", "480px", "810px"];
        if (fastMode) {
            time = 10;
        } else {
            time = peopleMoveTime;
        }
        //message.setName(name.name)
        let args = arguments;
        let remove = false;
        let show = false;
        for (let j in people) { //check and remove
            let found = false;
            if (!people[j]) {
                continue;
            }
            for (let i in args) {
                if (people[j].name == args[i].name) {
                    found = true
                    break;
                }
            }
            if (!found) {
                people[j].fadeOut(time, function () {
                        $(this).remove()
                    }) //.remove();
                people[j] = false;
                remove = true
            }
        }

        if (remove) { //choose show time
            setTimeout(
                pp_show, time * 1.2
            )
        } else {
            pp_show();
        }

        function pp_show() {
            for (let i in args) {
                if (!args[i]) {
                    continue;
                }
                let found = false;
                for (var j in people) {
                    if (!people[j]) {
                        continue;
                    }
                    if (people[j].name == args[i].name) {
                        found = true;
                        if (people[j].pos != i) {
                            show = true
                            people[j].pos = i
                            people[j].animate({
                                left: left[i]
                            }, time)


                        }

                    }
                }

                if (!found) {
                    var ppp = getHalf(args[i], i)
                    ppp.hide();
                    ppp.name = args[i].name
                    ppp.pos = i;

                    people[people.length] = ppp

                    show = true
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

                var $pp = $(`<img id="${id}" class="pp" data-name="${peopleThis.name}" src="${peopleThis.half}"/>`)
                $halfWrap.append($pp)
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

    function ts(background, time = 800) {        

        if (fastMode) {
            time = 10;
        }

        if (background == current_background) {
            time = 0.01
        }

        running = true;

        message.fadeOut(time);

        function get_url(u) {
            return `url("${u}")`;
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
            $bg.fadeOut(time)
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
        running = false
    }


    //    window.plot = exports;
    function init() {

    }
    return exports;

})