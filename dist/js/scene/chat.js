"use strict";

define(["require", "system-scene", "system-sys", "angular", "system-dbg", "v", "res", "angular-module", "system-plot"], function (require, scene, sys, angular, dbg, v, res, module, plot) {
    var exports = {};
    var sceneId = "chat";
    var $dom = scene.getScene(sceneId);
    var sceneThis = {
        id: sceneId,
        preEnter: preEnter,
        $dom: $dom,
        init: init
    };
    var $$ = $dom.find.bind($dom);

    function init() {

        module.controller("chat_controller", function ($scope) {

            //                console.log(plot);
            //                plot.init();

        });
    }

    function preEnter() {
        plot.init();
        //    plot_core.init();
        //            plot.running = start();
        //            plot.running.next()
    }

    function enter() {}

    scene.register(sceneThis);
    return exports;
});