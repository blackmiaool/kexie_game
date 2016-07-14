"use strict";

define(["require", "system-scene", "system-sys", "angular", "system-dbg", "z", "res", "angular-module", "plot", "system-common"], function (require, scene, sys, angular, dbg, z, res, module, plot, common) {
    var exports = {};
    var sceneId = "preload";
    var $dom = scene.getScene(sceneId);
    var sceneThis = {
        id: sceneId,
        preEnter: preEnter,
        $dom: $dom
    };
    var $$ = $dom.find.bind($dom);

    function preEnter() {
        var preload_bar = $("#preload_progress_bar");
        var resSum = 0;
        preload_set(0, resSum);
        if (dbg.imdeveloper) {
            setTimeout(function () {
                var debuggingScene = localStorage.getItem("debug-scene");
                if (debuggingScene) {
                    scene.go(debuggingScene, "硬件流水灯");
                } else {
                    scene.go("home");
                }
            });
            return;
        }

        function preload_set(a, b) {
            preload_bar.text("资源加载中 " + a + "/" + b);
            preload_bar.css("width", a / b * 100 + '%');
        }
        var load_cnt = 0;
        if (!dbg.imdeveloper) {
            for (var i in res.img) {
                resSum++;
                var name = res.img[i];
                name = name.split('.');

                name = name[name.length - 2].split('/');
                name = name[name.length - 1];
                images[i] = new Image();
                images[i].src = res.img[i];
                images[i].onload = function () {

                    load_cnt++;
                    preload_set(load_cnt, resSum);
                };
            }
        }
        //        for (let i in sys_text_files) {
        //            sys.readTextFile(sys_text_files[i]);
        //        }
        //    let config_json_load_fnish = false;
        //    $.getJSON("config.json", function (data) {
        //        sys.config = data;
        //        config_json_load_fnish = true;
        //    });
        common.config = {
            "version": "1.0",
            "branch": "物电科协"
        };

        var preload_interval = void 0;

        function preload_check() {
            if (dbg.imdeveloper) {
                //skip res load in developer mode
                load_cnt = resSum;
            }
            if (load_cnt >= resSum) {
                //                console.log("check")
                clearInterval(preload_interval);
                //                preload_bar.parent().remove()

                if (dbg.imdeveloper) {
                    developer_set();
                    scene.go("home"); //see top
                    //                scene.go("home");
                    //                sys.to_scene("chat");
                } else {
                        scene.go("home");
                        //                scene.go("cover", "first");
                    }
            }
        }
        preload_interval = setInterval(preload_check, 50);
    }

    //new sys.Scene(sceneThis);

    var images = [];

    function developer_set() {
        z.basic.money = 10000;
        z.plot.start = true;
        //    item[common.find_index(item, "name", "LED")].cnt = 10;
        //    item[common.find_index(item, "name", "低端单片机")].cnt = 10;
        //    item[common.find_index(item, "name", "电路基础元件")].cnt = 10;
        //    item[common.find_index(item, "name", "烙铁")].cnt = 5;
    }

    scene.register(sceneThis);
    return exports;
});