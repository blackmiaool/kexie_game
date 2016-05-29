"use strict";

define(["require", "system-scene", "system-sys", "angular", "system-dbg", "v", "res", "angular-module", "plot"], function (require, scene, sys, angular, dbg, v, res, module, plot) {
    var exports = {};
    var sceneId = "home";
    var $dom = scene.getScene(sceneId);
    var sceneThis = {
        id: sceneId,
        preEnter: preEnter,
        $dom: $dom
    };
    var $$ = $dom.find.bind($dom);
    scene.register(sceneThis);

    function preEnter() {}

    return exports;
});