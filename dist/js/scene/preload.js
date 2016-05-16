"use strict";

define(["scene", "sys", "angular", "dbg", "v", "res", "angular-module"], regeneratorRuntime.mark(function _callee(scene, sys, angular, dbg, v, res, module) {
    var exports, sceneId, $dom, sceneThis, $$, preEnter, images, developer_set;
    return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    developer_set = function developer_set() {
                        v.basic.money = 10000;
                        v.plot.start = true;
                        //    item[common.find_index(item, "name", "LED")].cnt = 10;
                        //    item[common.find_index(item, "name", "低端单片机")].cnt = 10;
                        //    item[common.find_index(item, "name", "电路基础元件")].cnt = 10;
                        //    item[common.find_index(item, "name", "烙铁")].cnt = 5;
                    };

                    preEnter = function preEnter() {
                        var preload_bar = $("#preload_progress_bar");

                        var resSum = 0;
                        preload_set(0, resSum);

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
                        sys.config = {
                            "version": "1.0",
                            "branch": "物电科协"
                        };

                        var preload_interval = undefined;

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
                                    //                scene.go("home");
                                    //                sys.to_scene("chat");
                                } else {
                                        //                                sys.to_scene("chat");
                                        scene.go("cover", "first");
                                    }
                            }
                        }
                        preload_interval = setInterval(preload_check, 50);
                    };

                    exports = {};
                    sceneId = "preload";
                    $dom = scene.getScene(sceneId);
                    sceneThis = {
                        id: sceneId,
                        preEnter: preEnter,
                        $dom: $dom
                    };
                    $$ = $dom.find.bind($dom);

                    //new sys.Scene(sceneThis);

                    images = [];

                    scene.register(sceneThis);
                    return _context.abrupt("return", exports);

                case 10:
                case "end":
                    return _context.stop();
            }
        }
    }, _callee, this);
}));