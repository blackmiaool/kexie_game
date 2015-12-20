define(function (require) {
    var plot_core=require("plot_core");
    var sys=require("sys");
    var common=require("common");
    var dbg=require("dbg");
    
    var exports = {
        running: {},
    };
    
    var sx = sys.sx;
    var sy = sys.sy;
    var btn_gap = 50;
    var touched = false;
    var tc_pre_things = {};
    var touch_enable = true;
    var running = false;
    var result = {

    };
    exports.result = result;
    var message = message_create();


    var gap = {
        def: 70,
        fast: 40,
        slow: 200,
    }
    exports.gap = gap;

    function touch_wait(cb) {
        var a = setInterval(
            function () {
                if (touched) {
                    touched = false;
                    if (touch_enable) {
                        clearInterval(a);
                        cb();
                    }
                }
            }, 100
        )
    };
    var rnd;
    rnd.today = new Date();
    rnd.seed = rnd.today.getTime();

    function rnd() {　　　　
        rnd.seed = (rnd.seed * 9301 + 49297) % 233280;　　　　
        return rnd.seed / (233280.0);
    };

    function rand(min, max) {
        //    console.log(min,max)
        var number = max - min + 1
        number = Math.ceil(rnd() * number) + min - 1　　　　
        return number;
    };
    exports.rand = rand;
    console.log(exports)

    function message_create() {
        var t = $('#chat_text')
        var container = $("#chat_content");
        var name_img = $('#name_all')

        var skip;
        t.fadeOut_real = t.fadeOut;
        t.fadeOut = function () {
            //        console.log("faddeee",arguments)
            name_img.fadeOut(arguments);
            t.fadeOut_real.apply(t, arguments);
        }
        t.setNString = function (text, cb, gap) {
            //    console.log($("<label>" + text + "</label>").children())
            container.html("")
            var ele = $("<label>" + text + "</label>");
            var data = [];
            var running = true;
            var ret = function (cmd) {
                switch (cmd) {
                case "fast":
                    running = false;
                    container[0].innerHTML = text;
                    cb();
                    break;
                }
            }

            function push(a) {
                data.push(a)
            }
            text = ele[0].innerHTML;
            ele.children().each(function () {
                //            console.log(1,text);
                text = text.split(this.outerHTML)
                    //            console.log(2,text);
                push(text[0])
                push(this)
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
            push(text)
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
                            container[0].innerHTML += ttt;
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
                        container.append(thing);
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
            return ret;
        }
        var charIndex = -1;
        var stringLength = 0;
        var inputText;
        var text_content = $("#chat_text_content");
        var name_text = $("#name_content")
        var name_all = $("#name_all")
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
        //        exports.running();
        plot_core.resume(ret);
//        var state=exports.running.next(ret);
//        if(state.done){
//            plot_core.update(exports.running);
//        }                
    }
    exports.tm = function () {
        touch_enable = false;
        var arg_len = 0;
        for (var i in arguments) {
            var empty = true;
            for (var j in arguments[i]) {
                empty = false;
                break;
            }
            if (empty)
                arguments[i] = undefined
            else {
                arg_len++;
            }
        }
        arguments.length = arg_len;
        var it = arguments;

        var len = it.length
        var menu_value = false;
        var div_btn = $("#div-btn");
        var cb = function (index, v) {
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

        }

        function menu_btn_create(index, content, len) {
            var id = "menu_btn" + index
                //        console.log(typeof (content))

            switch (typeof (content)) {
            case "string":
                var btn = $('<button id=' + id + ' class="menu_btn btn btn-primary"></button>')
                div_btn.append(btn)
                btn.attr("miao_index", index)
                btn.html(content)
                var vertical_offset = 0;
                if (message.css("display") != "none") {
                    vertical_offset = 180;
                }

                btn.css("top", (sy - vertical_offset) * 0.5 + ((len - 1) / (-2) + index) * btn_gap + "px")
                btn.css("left", "480" - parseInt(btn.css("width")) / 2 + "px")
                btn.click(function () {
                        menu_value = parseInt($(this).attr("miao_index"));

                        cb(index, content);
                        //print(parseInt($(this).attr("indexx")))
                    })
                    // 
                break;
            case "object":
                switch (content.type) {

                case undefined:
                    console.log('you should define the "type" key in the object params of tm');
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
                    var input_div = $('<div class="input-group"> \
                                    <input type="text" class="form-control" placeholder="' + placeholder + '"> \
                                    <span class="input-group-btn"> \
                                        <button miao_index=' + index + ' class="btn btn-default" type="button">' + btn + '</button> \
                                    </span> \
                                 </div>')

                    input_div.css("top", (sy - 180) * 0.5 + ((len - 1) / (-2) + index) * btn_gap + "px")

                    if (content.data.width == undefined) {
                        input_div.css("width", "30%")
                    } else {
                        input_div.css("width", content.data.width)
                    }
                    var input = input_div.find("input")
                    var index_this = index;
                    input_div.find("button").click(function () {
                        menu_value = {
                            data: input.val(),
                            index: index_this
                        }
                        cb(menu_value.index, menu_value.data);
                    })

                    div_btn.append(input_div);
                    input_div.css("left", "480" - parseInt(input_div.css("width")) / 2 + "px")

                    break;
                default:

                    break;
                }


                break;
            }

            return;
        }

        for (var i = 0; i < len; i++) {

            var btn = menu_btn_create(i, it[i], len)
        };


        return menu_value;

    };
    exports.tc = function (text, name, gapnum, color) {
        tc_pre_things.name = name;
        tc_pre_things.gapnum = gapnum;
        tc_pre_things.color = color;
        touched = false;
        touch_enable = true;
        if (!gapnum) {
            gapnum = exports.gap.def
        }
        if (text) {
            message.show()
            if (name != undefined)
                switch (typeof (name)) {
                case "string":
                    message.setName(name)
                    break;

                case "object":
                    message.setName(name.name)
                        //                $("#div-half img").animate({opacity:"0.5"});
                        //                $("#div-half img").css("opacity", 0.5);
                        //                $("#pp" + name.name).animate({opacity:"1"});
                    if (name == pp.you)
                        break;
                    $("#div-half img").each(function () {
                            //                        console.log($(this).attr("id"))
                            //                        console.log(("#pp" + name.name))
                            if ($(this).attr("id") != ("pp" + name.name)) {
                                $(this).animate({
                                    opacity: "0.5"
                                }, "fast");
                            }
                        })
                        //                $("#pp" + name.name).css("opacity", 1);
                        //                console.log("#pp" + name.name)
                    break;
                } else
                    message.setName(false)
        } else {
            message.hide()
        }
        var text_processing = true;

        function cb1() {
            text_processing = false;
        }
        var handle = message.setNString(text, cb1, gapnum)

        function cb2() {
            if (text_processing) {
                //            console.log("slkjswer")
                handle("fast");
                //            message.fast();
                touch_wait(cb2);
            } else {
                $("#div-half img").css("opacity", 1);
                plot_resume();
            }
        }
        if (dbg.isinfastmode) {
            cb2();
        } else {
            if (name != "跳过") {
                //        $await(touch_wait())
                touch_wait(cb2);
            }
        }

    }
    exports.th = function () {
        if (dbg.isinfastmode) {
            var people_move_time_this = 10;
        } else {
            people_move_time_this = people_move_time;
        }
        //message.setName(name.name)
        var input = arguments;
        var remove = false
        var show = false
            //print(input)

        //console.log(people)
        for (j in people) {

            var found = false;
            if (!people[j]) {
                continue;
            }
            for (i in input) {
                //            print("input")
                //            print([people[j].name, input[i]])
                if (people[j].name == input[i].name) {

                    found = true
                    continue;
                }

            }
            if (!found) {

                people[j].fadeOut(people_move_time_this, function () {
                        $(this.remove())
                    }) //.remove();
                people[j].miaoindex = j
                people[j] = undefined
                remove = true

            }
        }

        if (remove) {
            //        $await(Wind.Async.sleep(people_move_time * 1.2));
            setTimeout(
                pp_show, people_move_time_this * 1.2
            )
        } else {
            pp_show();
        }

        function pp_show() {


            for (i in input) {
                var found = false;
                if (!input[i]) {
                    continue;
                }
                for (j in people) {
                    //                print("end")
                    //                console.log(people[j])
                    if (!people[j]) {
                        continue;
                    }
                    if (people[j].name == input[i].name) {
                        //                    print("end2")
                        //                    print([people[j].name, input[i].name])
                        found = true;
                        //print("found")
                        if (people[j].pos != i) {
                            //print("not",i)
                            show = true
                                //          people[j].runAction(cc.MoveTo.create(people_move_time, get_pp_position(i)))
                            people[j].pos = i
                            people[j].animate({
                                left: pos_covert(people[j].pos, people[j]) + "px"
                            }, people_move_time_this)


                        }

                    }
                }

                if (!found) {
                    //print("notnot")
                    //  print(input[i])
                    var ppp = get_half(input[i], i)
                        //      ppp.setOpacity(0)
                    ppp.hide();
                    ppp.name = input[i].name
                    ppp.pos = i;

                    people[people.length] = ppp

                    show = true
                        //      ppp.runAction(cc.FadeIn.create(people_move_time))
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
    var bg = $("#scene_chat #div-bg img");
    exports.tmood=function(background){
        var mood=$("#div-mood .mood");
        $("")
        console.log(mood);
        console.log(background)
        mood.attr("src",background);
    }
    exports.ts = function (background, time) {

        var fadeout_time = 800;
        if (dbg.isinfastmode) {
            time = 10;
        }
        touch_enable = true;

        if (time == undefined || time == false) {
            time = fadeout_time;
        }
        if (background == current_background) {
            time = 0.01
        }

        running = true;

        message.fadeOut(time);

        if (!current_background) {
            bg.hide();
            bg.attr("src", background);
            bg.fadeIn(time);

            setTimeout(function () {

                plot_resume();
            }, time);
        } else {
            bg.fadeOut(time)
            setTimeout(function () {
                bg.attr("src", background);
                bg.fadeIn(time);
            }, time);
            setTimeout(function () {
                plot_resume();
            }, 2 * time + 10);
        }
        current_background = background;
        running = false
    }

    $("#scene_chat").on("click", function () {
        touched = true;

    })
    window.plot=exports;
    return exports;

})