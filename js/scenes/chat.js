define(["sys", "angular", "v", "common", "res", "dbg", "plots/start", "plots/nature_test", "plot_common"], function* (sys, angular, v, common, res, dbg, start, nature_test, plot) {


    var scene = new sys.Scene({
        id: "chat",
        dom_id: "section_chat",
        init: function () {


            angular.module('home_app').controller("chat_controller", function ($scope) {

//                console.log(plot);
//                plot.init(); 

            })


        },
        pre_enter: function () {
            plot.running = start();
            plot.running.next()
        },
        enter: function () {}
    })



    return 3;
})