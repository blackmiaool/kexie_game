"use strict";

define(["require", "system-scene", "system-sys", "angular", "system-dbg", "v", "res", "angular-module", "plot", "system-common"], function (require, scene, sys, angular, dbg, v, res, module, plot, common) {
    var exports = {};
    var sceneId = "make-select";
    var $dom = scene.getScene(sceneId);

    var sceneThis = {
        id: sceneId,
        preEnter: preEnter,
        $dom: $dom,
        init: init
    };
    var $$ = $dom.find.bind($dom);

    function preEnter() {}

    function init() {}
    var works = {
        硬件流水灯: [{
            name: "硬件流水灯",
            prefix: {
                feature: "幸运",
                basic: "未完成"
            },
            process: {
                basic: 3,
                basicMax: 10,
                capability: 0,
                capabilityMax: 5,
                innovation: 0,
                innovationMax: 3,
                stability: 0,
                stabilityMax: 10
            },
            property: [{
                kind: "lucky",
                value: "3"
            }]
        }]
    };
    v.work = works;

    scene.register(sceneThis);
    return exports;
});