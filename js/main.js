//Here inject gulpConfig veriable
(function () {
    console.log(gulpConfig)
    let plotPaths=gulpConfig.plots.map(function(v,i){
        return v.name.split(".")[0];
    });
//    let plotPaths=["start","kexie_first","nature_test","xuanjianghui"];
    let scenePaths= ["preload", "cover","chat"];
    var config = {
        baseUrl: "js",
        paths: {
            jquery: "jquery.min",
            angular: "angular.min",
            "_": "underscore",
            "angular-animate": "angular-animate.min",
        },
        plotPaths,
        scenePaths,
        sysPaths: ["sys","common","dbg","config","scene","plotApi"],
        map: {},
        shim: {
            "angular": {
                deps: ['jquery'],
                exports: 'angular'
            },
            "angular-animate": {
                deps: ["angular"],
            },
        }
    };
    config.sysPaths.forEach(function(v,i,a){
        config.paths["system-"+v]="system/" + v;
    });
    
    config.scenePaths.forEach(function(v,i,a){
        config.paths[v]="scene/" + v;
    });
    
    config.plotPaths.forEach(function(v,i,a){
        config.paths[v]="plot/" + v;
    });

    

    requirejs.config(config);
    
    
    
    
    
    
    
    
    
    requirejs(["jquery", "system-sys", "angular", 'angular-module', "system-scene", 'angular-animate'], function ($, sys, angular, module, scene) {
    $("#game-first-tip").remove();

    module.controller("root_controller", ["$rootScope", "$scope", function ($rootScope, $scope) {
        sys.$rootScope = angular.element("body").scope().$parent.$root;

    }]);
    sys.sceneLoaded = function () {
        angular.bootstrap("body", ['home-app']);
        scene.go("preload");
    }});
})()

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