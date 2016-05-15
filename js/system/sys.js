define(["angular", "dbg", "config", "_"], function (angular, dbg, config) {

    let sceneChanging = false;
    let quick = false;
    var scenes = {}
    let sceneFadeTimeRow = 1000;
    var sceneFadeTime = dbg.imdeveloper ? 1 : quick ? 1 : sceneFadeTimeRow;
    var currentScene = {};


    _.extend($.fn, {
        hide: function () {
            this.addClass("hide");
            return this;
        },
        show: function () {
            this.removeClass("hide");
            return this;
        },
        isShown: function () {
            return !this.hasClass("hide");
        },
        toggleShow: function () {
            if (this.hasClass("hide")) {
                this.removeClass("hide");
            } else {
                this.addClass("hide");
            }
        },
        active: function (state = true) {
            this.addClass("active");
            return this;
        },
        inactive: function (state = true) {

            this.removeClass("active");
            return this;
        },
        isActive: function () {
            return this.hasClass("active");
        },
        toggleActive: function () {
            if (this.hasClass("active")) {
                this.removeClass("active");
            } else {
                this.addClass("active");
            }
        },
    })


    function changeScene(target, ...args) {
        if (sceneChanging == true) {
            return;
        }
        if (typeof (target) == "string") {

            target = scenes[target];
        } else if (typeof (target) == "object") {

            //            target = target;
        } else {

            console.error("bad target");
        }

        function call_enter(args) {
            setTimeout(function () {
                if (target.enter) {
                    target.enter.apply(target, args);
                }
                exports.$rootScope.$emit(target.id + "_enter", args);
            }, sceneFadeTime);
        }

        if (target.id) {
            console.info("out", currentScene.id, "in", target.id, args)
            if (currentScene.dom_id) {
                $("#" + currentScene.dom_id).css("z-index", "0")
                $("#" + currentScene.dom_id).fadeOut(sceneFadeTime);
            }
            $("#" + target.dom_id).css("z-index", "1")
            $("#" + target.dom_id).fadeIn(sceneFadeTime)
            currentScene = target;

            if (target.pre_enter) {
                target.pre_enter.apply(target, args);
            }
            exports.$rootScope.$emit(target.id + "_pre_enter", args);
            call_enter(args);
        } else {
            call_enter(args);
        }
    }
    var exports = {
        sx: 960,
        sy: 540,
        quick,
        sceneChanging,
        Scene: function Scene({
            id, dom_id, init, pre_enter, enter
        }) {
            this.id = id;
            this.dom_id = dom_id;
            this.init = init;
            this.pre_enter = pre_enter;
            this.enter = enter;
            scenes[id] = this;
            if (this.init) {
                this.init();
            }
        },
        currentScene,
        scenes,
        changeScene,
        readTextFile: (file, cb) => {
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
        },
        zoom_and_developer_init: () => {

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
                window.scene_scale = scale;
                $("body").css("zoom", scale + "%");
                $(".scene").each(
                    function () {
                        body_center($(this))
                    }
                );

            }
            zoom_auto();
            window.addEventListener("resize", zoom_auto, false);
        },

        put_danmu: (text) => {
            var label = $("<h4 class='danmu'></h4>");
            label.css("position", "absolute")


            if ($(".container .danmu").length > 0) {
                $($(".container .danmu")[$(".container .danmu").length - 1]).after(label)
            } else {
                $(".container").append(label)
            }


            label.html(text);
            var a = label.css("width")
            label.css("width", parseInt(a) * 1.5 + "px");


            label.css("z-index", "100000")
            label.css("left", parseInt($("body").css("width")) * 1.2 + "px");

            label.animate({
                left: parseInt($("body").css("width")) * 0.5 + "px"
            }, 500, "easeOutSine");
            label.animate({
                left: parseInt($("body").css("width")) * 0.4 + "px"
            }, 3000, "linear");
            label.animate({
                left: parseInt($("body").css("width")) * (-0.2) + "px"
            }, 500, "easeInSine", function () {
                remove()
            });

        }
    };



    return exports;
})