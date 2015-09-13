var fade_time = 100
var text_time = 100
var scene_fade_time = 1000
section_onShow = {}
var lua_arg = []
var js_arg = {}
var lua_handle_finish = false;
var imdeveloper = local_load("Imdeveloper") == "true";
var isinfastmode = local_load("Fastmode") == "true";
var v;
var gap = {
    def: 70,
    fast: 40,
    slow: 200,
};
var btn_gap = 50
var sz;
var current_scene = 0;
var running = false

var next_scene = 0;
var scene_sprite;

var half = 0;

var touched = false
var current_background = 0;

var quicken_btn;
var quicken;
var mood_sprite;

var sx = 960;
var sy = 540;

var menu_speed = 0.3
var fadeout_time = 800
var fadein_time = 100
var color_award = color(166, 226, 45)
var color_punish = color(253, 151, 32)

game_over = true
touch_enable = true
message = {}
people_move_time = 500;




function lua_arg_init() {
    for (var i = 0; i < 10; i++) {
        lua_arg[i] = {};
    }
}

function get_left_points() {
    var retval = 0;
    for (var i = v.time.period; i < v.time.total_point_today; i++) {
        if (!v.study.arrange[v.time.week_day_index][the_period_of_day[i]]) {
            retval++;
        }
    }
    return retval;
}
var the_period_of_day = ["上午", "下午", "晚上", "午夜"];

function lua_arg_init_one(obj, key) {
    obj[key] = {};
}
lua_arg_init();


function plot_resume() {
    lua_arg_init();
    setTimeout(
        function () {
            L.execute("resume()")
        }, 0
    )

}
var spots = [];

function spot_create(name, text, left, top, icon) {
    spots.push({
        class: text,
        text: name,
        left: left,
        top: top,
        icon: icon,
    })
}


function bm_test() {
    console.log("tttt")
}

function local_set_obj(a, b){
    return local_set(a,JSON.stringify(b))
}
function local_set(a, b) {
    localStorage.setItem(a, b)
}


function local_load_obj(a){
    return JSON.parse(local_load(a))
}
function local_load(a) {
    return localStorage.getItem(a)
}

function local_rm(a) {
    localStorage.removeItem(a)
}


function clone(myObj) {
    if (typeof (myObj) != 'object') return myObj;
    if (myObj == null) return myObj;
    var myNewObj = new Object();
    for (var i in myObj)
        myNewObj[i] = clone(myObj[i]);
    return myNewObj;
}

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

function getProgressName(index) {
    return "progress" + index
}


function print() {
    if (print.arguments.length == 2) {
        print(print.arguments[0] + "=" + print.arguments[1])

    } else {
        console.log(print.arguments[0])
    }
}
ppp = print;
delay = function (ms) {
    setTimeout(
        plot_resume, ms
    );
}

bg_fadeout = function (time) {
    bg.fadeOut(time);
}

function ele_create(name, idd, classs) {
    return '<' + name + ' ' + "id=" + idd + " " + "class=" + classs + " " + ">" + "</" + name + ">";
}




bg_set = function (img) {
    bg.attr("src", img)
}

bg_fadein = function (img, time) {
    console.log("time", time)
    bg.attr("src", img)
    bg.fadeIn(time)
}



images = []




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

ts = function (background, time) {
    if (isinfastmode) {
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
    //        $await(th([0, 0, 0]))
    //        console.info(time)
    if (!current_background) {
        //            console.log("miao")
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

var tc_pre_things = {};
tcc = function (text) {
    tc(text, tc_pre_things.name, tc_pre_things.gapnum, tc_pre_things.color)
}
tc = function (text, name, gapnum, color) {
    tc_pre_things.name = name;
    tc_pre_things.gapnum = gapnum;
    tc_pre_things.color = color;
    touched = false;
    touch_enable = true;
    if (!gapnum) {
        gapnum = gap.def
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
    var running = true;

    function cb1() {
        running = false;
    }
    var handle = message.setNString(text, cb1, gapnum)

    function cb2() {
        if (running) {
            //            console.log("slkjswer")
            handle("fast");
            //            message.fast();
            touch_wait(cb2);
        } else {
            $("#div-half img").css("opacity", 1);
            plot_resume();
        }
    }
    if (isinfastmode) {
        cb2();
    } else {
        if (name != "跳过") {
            //        $await(touch_wait())
            touch_wait(cb2);
        }
    }

}
var touch_wait = function (cb) {
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
}

tm = function () {
    touch_enable = false;
    var arg_len = 0;
    for (var i in lua_arg) {
        var empty = true;
        for (var j in lua_arg[i]) {
            empty = false;
            break;
        }
        if (empty)
            lua_arg[i] = undefined
        else {
            arg_len++;
        }
    }
    lua_arg.length = arg_len;
    var it = lua_arg;

    var len = it.length
    var menu_value = false;
    var cb = function (index, v) {
        div_btn.empty();
        setTimeout(function () {
            touched = false;
        }, 0);
        js_arg = {
            index: index,
            value: v
        };
        plot_resume();

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



function pos_covert(pos, pp) {
    return sx / 6 * (pos * 2 + 1) - parseInt(pp.css("width")) / 2
}

function get_half(name, pos) {
    var id = "pp" + name.name
    var pp = ele_create("img", id, "pp")
    div_half.append(pp)
    pp = $("#" + id)

    pp.attr("indexx", pos)
    pp.attr("src", name.half)
    pp.css("position", "absolute")
    pp.css("top", 40 + "px")

    pp.css("left", pos_covert(pos, pp) + "px")

    return pp;
}



var people = [];
th = function () {
    if (isinfastmode) {
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

function find_index(array, key, value) {
    for (var i in array) {
        if (array[i][key] == value) {
            return i;
        }
    }

}





function Danmu() {
    this.label = $("<h4 class='danmu'></h4>")

    this.label.css("position", "absolute")
    this.put = function (text) {
        // log("put " + text)
        // log(this.label.length);
        if ($(".container .danmu").length > 0) {
            $($(".container .danmu")[$(".container .danmu").length - 1]).after(this.label)
        } else {
            $(".container").append(this.label)
        }


        this.label.html(text);
        var a = this.label.css("width")
        this.label.css("width", parseInt(a) * 1.5 + "px");

        // this.label.css("width","200px")
        this.label.css("z-index", "100000")
        this.label.css("left", parseInt($("body").css("width")) * 1.2 + "px");
        // this.label.css("height", "40px");
        this.label.animate({
            left: parseInt($("body").css("width")) * 0.5 + "px"
        }, 500, "easeOutSine");
        this.label.animate({
            left: parseInt($("body").css("width")) * 0.4 + "px"
        }, 3000, "linear");
        this.label.animate({
            left: parseInt($("body").css("width")) * (-0.2) + "px"
        }, 500, "easeInSine", function () {
            this.remove()
        });

    }

}


function miao_danmu(data, color) {
    $("#div-danmu").scope().$apply(function () {
        angular.element("#div-danmu").scope().data.push({
            text: data,
            bg_color: color,
        })
    })
}


function color_text_create(text, color) {
    return $('<span style="color:' + color + '">' + text + '</span>')
}



print_from_lua = function () {
    var args = arguments;
    var outs = []
    for (var i in args) {
        eval("var t=" + args[i]);
        outs[i] = t;
    }
    console.log.apply(console, outs);
}
v = clone(v_init)