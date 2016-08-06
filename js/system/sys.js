define(["angular", "system-dbg", "system-config", "_"], function (angular, dbg, config) {

    let sceneChanging = false;
    let quick = false;
    var scenes = {}
    let sceneFadeTimeRow = 1000;
    var sceneFadeTime = dbg.imdeveloper ? 1 : quick ? 1 : sceneFadeTimeRow;
    var currentScene = {};


    
    var exports = {
        sx: 960,
        sy: 540,
        quick,
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
                    common.scenes["chat"].reload();
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