var g = function (str) {
    return "res/" + str
}

function color(r, g, b) {
    return "rgb(" + r + "," + g + "," + b + ")"
}


function Sys() {
    this.scenes = {};
    this.scene_register = function (scene) {
        this.scenes[scene.name] = scene;
        if (scene.init) {
            scene.init();
        }
    }
    var section_name_current;
    this.to_scene = function () {
        //        console.log(arguments)
        var name = arguments[0]
        var args = arguments;

        Array.prototype.shift.call(arguments, 0)

        if (section_running == true) {
            return;
        }
        var scene = this.scenes[name];

        function call_enter(args) {
            setTimeout(function () {
                if (scene.enter) {
                    scene.enter.apply(scene, args);
                }
            }, scene_fade_time);
        }
        if (scene.id) {
            console.info("out", section_name_current, "in", scene.id)
            if (section_name_current) {
                $("#" + section_name_current).css("z-index", "0")
                $("#" + section_name_current).fadeOut(scene_fade_time);
            }
            $("#" + scene.id).css("z-index", "1")
            $("#" + scene.id).fadeIn(scene_fade_time)
            section_name_current = scene.id;
            if (scene.pre_enter) {
                scene.pre_enter.apply(scene, arguments);
            }
            call_enter(arguments);
        } else {
            call_enter(arguments);
        }

    }
    this.readTextFile = function (file, cb) {
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", file.name, true);
        rawFile.onreadystatechange = function () {
            if (rawFile.readyState === 4) {
                if (rawFile.status === 200 || rawFile.status == 0) {
                    var allText = rawFile.responseText;
                    file.handle(allText)
                    if (cb)
                        cb();
                }
            }
        }
        rawFile.send(null);
    }
    this.zoom_and_developer_init = function () {
        window.document.onkeydown = key_handle;

        function key_handle(evt) {
            evt = (evt) ? evt : window.event
            if (evt.ctrlKey && evt.keyCode == 66) {
                console.log("reload plot")
                sys.scenes["chat"].reload();
            }
            if (evt.keyCode) {
                switch (evt.keyCode) {
                case 115: //F4
                    var fastmode = local_load("Fastmode");
                    if (fastmode == "true") {
                        local_set("Fastmode", false);
                        console.log("fast mode exit");
                    } else {
                        local_set("Fastmode", true);
                        console.log("fast mode start");
                    }


                    break;
                case 118: //F7
                    local_set("Imdeveloper", true);
                    console.log("developer mode start");
                    break;
                case 117: //F6
                    local_set("Imdeveloper", false);
                    console.log("exit developer mode ");
                    break;
                }

            }
        }

        function body_center(obj) {
            var height = parseInt(document.documentElement.clientHeight);
            var width = parseInt(document.documentElement.clientWidth);
            obj.css("left", (width - parseInt(obj.css("width")) * parseFloat($("body").css("zoom"))) / 2 / parseFloat($("body").css("zoom")) + "px")
        }
        var zoom_auto = function () {
            var height = parseInt(document.documentElement.clientHeight);
            var width = parseInt(document.documentElement.clientWidth);
            var scale1 = width / 960;
            var scale2 = height / 545;
            var scale = Math.min(scale1, scale2) * 100;
            $("body").css("zoom", scale + "%");
            $(".section").each(
                function () {
                    body_center($(this))
                }
            );

        }
        zoom_auto();
        window.addEventListener("resize", zoom_auto, false);
    }
}
var sys = new Sys();

function scene(name, pre_enter_callback, enter_callback, init_callback, id) {
    this.name = name;
    this.enter = enter_callback;
    this.pre_enter = pre_enter_callback;
    this.init = init_callback;
    this.id = id;

}

function scene_register_all() {

    sys.scene_register(new Preload_scene());
    sys.scene_register(new Cover_scene());
    sys.scene_register(new Save_load_scene());
    sys.scene_register(new Home_scene());
    sys.scene_register(new Chat_scene());
    sys.scene_register(new Bigmap_scene());
}

var section_running; 
define(["scenes/home2","scenes/bigmap","scenes/chat","scenes/cover","scenes/preload","scenes/save_load"], function () {
    var exports = {
        game_enter: function () {
            sys.zoom_and_developer_init();
            $(".section").hide();
            scene_register_all();
            section_running = false;
            sys.to_scene("preload");
        }
    };
    return exports;
})
var game_enter = function () {

}
var section = {}
