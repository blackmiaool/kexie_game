"use strict";

var gulpConfig = { plots: [{ "name": "kexie_first.js", "fullpath": "/home/blackmiaool/Nutstore/github/kexie_game/js/plot/kexie_first.js", "relativePath": "kexie_first.js" }, { "name": "nature_test.js", "fullpath": "/home/blackmiaool/Nutstore/github/kexie_game/js/plot/nature_test.js", "relativePath": "nature_test.js" }, { "name": "start.js", "fullpath": "/home/blackmiaool/Nutstore/github/kexie_game/js/plot/start.js", "relativePath": "start.js" }, { "name": "xuanjianghui.js", "fullpath": "/home/blackmiaool/Nutstore/github/kexie_game/js/plot/xuanjianghui.js", "relativePath": "xuanjianghui.js" }], scenes: [{ "name": "bigmap.js", "fullpath": "/home/blackmiaool/Nutstore/github/kexie_game/js/scene/bigmap.js", "relativePath": "bigmap.js" }, { "name": "character.js", "fullpath": "/home/blackmiaool/Nutstore/github/kexie_game/js/scene/character.js", "relativePath": "character.js" }, { "name": "chat.js", "fullpath": "/home/blackmiaool/Nutstore/github/kexie_game/js/scene/chat.js", "relativePath": "chat.js" }, { "name": "cover.js", "fullpath": "/home/blackmiaool/Nutstore/github/kexie_game/js/scene/cover.js", "relativePath": "cover.js" }, { "name": "home.js", "fullpath": "/home/blackmiaool/Nutstore/github/kexie_game/js/scene/home.js", "relativePath": "home.js" }, { "name": "make-select.js", "fullpath": "/home/blackmiaool/Nutstore/github/kexie_game/js/scene/make-select.js", "relativePath": "make-select.js" }, { "name": "make.js", "fullpath": "/home/blackmiaool/Nutstore/github/kexie_game/js/scene/make.js", "relativePath": "make.js" }, { "name": "preload.js", "fullpath": "/home/blackmiaool/Nutstore/github/kexie_game/js/scene/preload.js", "relativePath": "preload.js" }, { "name": "state.js", "fullpath": "/home/blackmiaool/Nutstore/github/kexie_game/js/scene/state.js", "relativePath": "state.js" }] };
//Here inject gulpConfig veriable
(function () {
    //    console.log(gulpConfig)
    var plotPaths = gulpConfig.plots.map(function (v, i) {
        return v.name.split(".")[0];
    });
    var scenePaths = gulpConfig.scenes.map(function (v, i) {
        return v.name.split(".")[0];
    });

    var config = {
        baseUrl: "js",
        paths: {
            jquery: "jquery.min",
            angular: "angular.min",
            "_": "underscore",
            "angular-animate": "angular-animate.min"
        },
        plotPaths: plotPaths,
        scenePaths: scenePaths,
        sysPaths: ["sys", "common", "dbg", "config", "scene", "plotApi"],
        map: {},
        shim: {
            "angular": {
                deps: ['jquery'],
                exports: 'angular'
            },
            "angular-animate": {
                deps: ["angular"]
            }
        }
    };
    config.sysPaths.forEach(function (v, i, a) {
        config.paths["system-" + v] = "system/" + v;
    });

    config.scenePaths.forEach(function (v, i, a) {
        config.paths[v] = "scene/" + v;
    });

    config.plotPaths.forEach(function (v, i, a) {
        config.paths[v] = "plot/" + v;
    });

    requirejs.config(config);

    requirejs(["jquery", "system-sys", "angular", 'angular-module', "system-scene", "res", "system-common", 'v', 'angular-animate', "plot"], function ($, sys, angular, module, scene, res, common, v) {
        $("#game-first-tip").remove();

        module.controller("root_controller", ["$rootScope", "$scope", function (rsp, sp) {

            sys.$rootScope = angular.element("body").scope().$parent.$root;

            function getPre(skill) {
                var preText = "";
                skill.pre.forEach(function (v, i) {
                    if (i > 0) preText += " , ";
                    preText += v.skill.name + "Lv" + v.level;
                });
                if (!preText) {
                    preText = "无";
                }
                return preText;
            }

            function getItemIconUrl(item, color) {

                if (typeof item === "string") {
                    item = res.devices[item];
                }

                return common.resPath + "icon/item/" + color + "/" + item.icon;
            }

            function getRes(str) {
                return common.g(str);
            }

            function goScene(str) {
                for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                    args[_key - 1] = arguments[_key];
                }

                scene.go.apply(scene, [str].concat(args));
            }

            function getSkillIcon(skill) {

                if (typeof skill === "string") {
                    skill = res.skills[skill];
                }

                if (v.skill[skill.name].satisfied && v.power >= getAction("学习").consume) {
                    return common.resPath + "skills/" + skill.icon + ".jpg";
                } else {
                    return common.resPath + "skills/" + skill.icon + "-off.jpg";
                }
            }

            function getSkillBg(skill) {
                if (typeof skill === "string") {
                    skill = res.skills[skill];
                }
                var color = "green";
                if (skill.pre.length != 0 && !v.skill[skill.name].satisfied) {

                    color = "grey";
                } else if (v.skill[skill.name].level >= 10) {
                    color = "yellow";
                }
                return common.resPath + "skills/icon-over-" + color + ".gif";
            }

            function openDebugPanel() {
                sp.showDebug = !sp.showDebug;
                console.log(scenePaths);
                console.log(sp.currentScene);
            }
            function debugScene(sceneName) {
                localStorage.setItem("debug-scene", sceneName);
                sp.goScene(sceneName);
                sp.showDebug = !sp.showDebug;
            }
            var scenes = {};
            scenePaths.forEach(function (v, i) {
                scenes[v] = false;
            });
            $(".scene-wrap").show();
            sys.$rootScope.scenes = scenes;
            _.extend(sp, {
                img: res.img,
                v: v,
                res: res,
                //                scenes,
                scenePaths: scenePaths,
                getPre: getPre,
                getItemIconUrl: getItemIconUrl,
                getRes: getRes,
                goScene: goScene,
                getSkillIcon: getSkillIcon,
                getSkillBg: getSkillBg,
                openDebugPanel: openDebugPanel,
                debugScene: debugScene
            });
        }]);

        sys.sceneLoaded = function () {
            angular.bootstrap("body", ['home-app']);
            setTimeout(function () {
                scene.go("preload");
            });
        };
    });
})();

//
//requirejs(["jquery", "system-sys", "angular", 'angular-module', "system-scene", 'angular-animate', ], function ($, sys, angular, module, scene) {
//    $("#game-first-tip").remove();
//
//    module.controller("root_controller", ["$rootScope", "$scope", function ($rootScope, $scope) {
//        sys.$rootScope = angular.element("body").scope().$parent.$root;
//
//    }]);
//    sys.sceneLoaded = function () {
//        angular.bootstrap("body", ['home-app']);
//        scene.go("preload");
//    }
//
//
//    //    angular.module('home-app').run(
//    //        function () {
//    //
//    //            setTimeout(function () {
//    //
//    ////                sys.zoom_and_developer_init();
//    //                $(".scene").hide();
//    //
//    //
//    //                setTimeout(function () {
//    ////                    $('#buy-tabs-link a').click(function (e) {
//    ////                        e.preventDefault();
//    ////                        $(this).tab('show');
//    ////                    })
//    ////                    $('#buy-tabs a').click(function (e) {
//    ////                        e.preventDefault(); //阻止a链接的跳转行为
//    ////                        $(this).tab('show'); //显示当前选中的链接及关联的content
//    ////                    })
//    ////                    $('#home-main-tab a').click(function (e) {
//    ////                        e.preventDefault(); //阻止a链接的跳转行为
//    ////                        $(this).tab('show'); //显示当前选中的链接及关联的content
//    ////                    })
//    //                }, 1000)
//    //                $('[data-toggle="popover"]').popover();
//    //
//    //                function IsPC() {
//    //                    var userAgentInfo = navigator.userAgent;
//    //                    var Agents = ["Android", "iPhone",
//    //                    "SymbianOS", "Windows Phone",
//    //                    "iPad", "iPod"
//    //                ];
//    //                    var flag = true;
//    //                    for (var v = 0; v < Agents.length; v++) {
//    //                        if (userAgentInfo.indexOf(Agents[v]) > 0) {
//    //                            flag = false;
//    //                            break;
//    //                        }
//    //                    }
//    //                    return flag;
//    //                }
//    //                if (!IsPC()) {
//    //                    $(".desk-frame-nav").css("display", "inline-block");
//    //                    $(".desk-frame-nav-a").css("width", "70px");
//    //                    $("body").css("position", "absolute").css("left", "240px").css("width", "960px").css("height:540px");
//    //
//    //                }
//    //                //                console.log("mmmm");
//    //                sys.to_scene("preload");
//    //
//    //                // Do post-load initialization stuff here
//    //
//    //
//    //
//    //            }, 200)
//    //
//    //        });
//
//
//
//
//})