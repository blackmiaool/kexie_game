(function () {
    var config = {
        baseUrl: "dist/js",
        paths: {
            jquery: "libs/jquery.min",

        },
        sys_paths: {
            scene: "scene",
            sys:"sys",
        },
        map:{}
    }

    for (var i in config.sys_paths) {
        config.paths[i]="sys/"+config.sys_paths[i];
    }
    delete config.sys_paths;
    console.log(config);
    requirejs.config(config);
})()


requirejs(["jquery", "sys","init", "libs/angular.min"], function ($, sys,init,angular) {
    console.log("miao")
    console.log(init);
    setTimeout(function () {
        $('#buy-tabs a').click(function (e) {
            e.preventDefault(); //阻止a链接的跳转行为
            $(this).tab('show'); //显示当前选中的链接及关联的content
        })
    }, 300)
    $('#home-main-tab a').click(function (e) {
            e.preventDefault(); //阻止a链接的跳转行为
            $(this).tab('show'); //显示当前选中的链接及关联的content
        })
        //    $('[data-toggle="popover"]').popover();
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
    init.game_enter();
})