define(["sys", "angular", "v", "common", "res", "dbg",  "plot_common","plot_core"], function* (sys, angular, v, common, res, dbg,  plot,plot_core) {


    var scene = new sys.Scene({
        id: "chat",
        dom_id: "scene_chat",
        init: function () {


            angular.module('home_app').controller("chat_controller", function ($scope) {

//                console.log(plot);
//                plot.init(); 

            })


        },
        pre_enter: function () {
            plot.init();
            plot_core.init();
//            plot.running = start();
//            plot.running.next()
        },
        enter: function () {}
    })



    return 3;
})