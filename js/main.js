(function () {
    var config = {
        baseUrl: "dist/js",
        paths: {
            jquery: "libs/jquery.min",
            angular: "libs/angular.min",
            "_": "libs/underscore",
            "angular-animate": "libs/angular-animate.min",
            "angular-route": "libs/angular-route.min",
            d3: "libs/d3.min",
            bootstrap: "libs/bootstrap.min",
        },
        sys_paths: {
            scene: "scene",
            sys: "sys",
            common: "common",
            dbg: "dbg",
            plot_common: "plot_common",

        },
        map: {},
        shim: {
            "angular": {
                //These script dependencies should be loaded before loading
                //backbone.js
                deps: ['jquery', 'd3', 'bootstrap'],
                //Once loaded, use the global 'Backbone' as the
                //module value.
                exports: 'angular'
            },
            "angular-animate": {
                deps: ["angular"],
            },
            "angular-route": {
                deps: ["angular"],
            },
            "d3": {
                exports: 'd3'
            },
            "bootstrap": {
                "deps": ['jquery']
            }
        }
    }

    for (var i in config.sys_paths) {
        config.paths[i] = "system/" + config.sys_paths[i];
    }
    delete config.sys_paths;
    //    delete config.plot_paths;
    requirejs.config(config);
})()


requirejs(["jquery", "sys", "angular", 'angular-animate', 'angular-route', "scenes/home", "scenes/bigmap", "scenes/chat", "scenes/cover", "scenes/preload", "scenes/save", 'angular-animate', 'skill_tree'], function ($, sys, angular) {
    $("#game-first-tip").remove();


    angular.module('home_app').controller("root_controller", ["$rootScope", "$scope", function ($rootScope, $scope) {
        sys.$rootScope = angular.element("body").scope().$parent.$root;
        $scope.$on('$includeContentLoaded', function (params) {

            //            console.log("mdfgdfm",params);

        });

    }]);
    angular.module('home_app').run(
        function () {

            setTimeout(function () {

                sys.zoom_and_developer_init();
                $(".scene").hide();


                setTimeout(function () {
//                    $('#buy-tabs-link a').click(function (e) {
//                        e.preventDefault();
//                        $(this).tab('show');
//                    })
//                    $('#buy-tabs a').click(function (e) {
//                        e.preventDefault(); //阻止a链接的跳转行为
//                        $(this).tab('show'); //显示当前选中的链接及关联的content
//                    })
//                    $('#home-main-tab a').click(function (e) {
//                        e.preventDefault(); //阻止a链接的跳转行为
//                        $(this).tab('show'); //显示当前选中的链接及关联的content
//                    })
                }, 1000)
                $('[data-toggle="popover"]').popover();

                function IsPC() {
                    var userAgentInfo = navigator.userAgent;
                    var Agents = ["Android", "iPhone",
                    "SymbianOS", "Windows Phone",
                    "iPad", "iPod"
                ];
                    var flag = true;
                    for (var v = 0; v < Agents.length; v++) {
                        if (userAgentInfo.indexOf(Agents[v]) > 0) {
                            flag = false;
                            break;
                        }
                    }
                    return flag;
                }
                if (!IsPC()) {
                    $(".desk-frame-nav").css("display", "inline-block");
                    $(".desk-frame-nav-a").css("width", "70px");
                    $("body").css("position", "absolute").css("left", "240px").css("width", "960px").css("height:540px");

                }
                //                console.log("mmmm");
                sys.to_scene("preload");

                // Do post-load initialization stuff here
            }, 0)
        });



    angular.bootstrap("body", ['home_app']);
})