"use strict";

(function () {
    var config = {
        baseUrl: "dist/js",
        paths: {
            jquery: "jquery.min",
            angular: "angular.min",
            "_": "underscore",
            "angular-animate": "angular-animate.min"
        },
        sysPaths: {
            //            scene: "scene",
            sys: "sys",
            common: "common",
            dbg: "dbg",
            config: "config",
            scene: "scene"
            //            plot_common: "plot_common",

        },
        scenePaths: ["preload", "cover"],
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

    for (var i in config.sysPaths) {
        config.paths[i] = "system/" + config.sysPaths[i];
    }
    for (var i in config.scenePaths) {
        config.paths[config.scenePaths[i]] = "scene/" + config.scenePaths[i];
    }
    delete config.scenePaths;
    delete config.sysPaths;
    //    delete config.plot_paths;
    requirejs.config(config);
})();

requirejs(["jquery", "sys", "angular", 'angular-module', "scene", 'angular-animate'], function ($, sys, angular, module, scene) {
    $("#game-first-tip").remove();

    module.controller("root_controller", ["$rootScope", "$scope", function ($rootScope, $scope) {
        sys.$rootScope = angular.element("body").scope().$parent.$root;
        sys.sceneLoaded = function () {
            scene.go("preload");
        };
    }]);
    angular.bootstrap("body", ['home-app']);

    //    angular.module('home-app').run(
    //        function () {
    //
    //            setTimeout(function () {
    //
    ////                sys.zoom_and_developer_init();
    //                $(".scene").hide();
    //
    //
    //                setTimeout(function () {
    ////                    $('#buy-tabs-link a').click(function (e) {
    ////                        e.preventDefault();
    ////                        $(this).tab('show');
    ////                    })
    ////                    $('#buy-tabs a').click(function (e) {
    ////                        e.preventDefault(); //阻止a链接的跳转行为
    ////                        $(this).tab('show'); //显示当前选中的链接及关联的content
    ////                    })
    ////                    $('#home-main-tab a').click(function (e) {
    ////                        e.preventDefault(); //阻止a链接的跳转行为
    ////                        $(this).tab('show'); //显示当前选中的链接及关联的content
    ////                    })
    //                }, 1000)
    //                $('[data-toggle="popover"]').popover();
    //
    //                function IsPC() {
    //                    var userAgentInfo = navigator.userAgent;
    //                    var Agents = ["Android", "iPhone",
    //                    "SymbianOS", "Windows Phone",
    //                    "iPad", "iPod"
    //                ];
    //                    var flag = true;
    //                    for (var v = 0; v < Agents.length; v++) {
    //                        if (userAgentInfo.indexOf(Agents[v]) > 0) {
    //                            flag = false;
    //                            break;
    //                        }
    //                    }
    //                    return flag;
    //                }
    //                if (!IsPC()) {
    //                    $(".desk-frame-nav").css("display", "inline-block");
    //                    $(".desk-frame-nav-a").css("width", "70px");
    //                    $("body").css("position", "absolute").css("left", "240px").css("width", "960px").css("height:540px");
    //
    //                }
    //                //                console.log("mmmm");
    //                sys.to_scene("preload");
    //
    //                // Do post-load initialization stuff here
    //
    //
    //
    //            }, 200)
    //
    //        });
});