"use strict";

define(["require", "system-scene", "system-sys", "angular", "system-dbg", "v", "res", "angular-module", "plot"], function (require, scene, sys, angular, dbg, v, res, module, plot) {
    var exports = {};
    var sceneId = "state";
    var $dom = scene.getScene(sceneId);
    var sceneThis = {
        id: sceneId,
        preEnter: preEnter,
        $dom: $dom
    };
    var $$ = $dom.find.bind($dom);
    scene.register(sceneThis);
    /*
    需要展示:
        状态,技能树,朋友,物品,经历,设备
        状态:数字 模拟 焊功 论文 声望 道德 秩序 金钱
        技能树:新做一套
        朋友:看看侠客怎么做的
        物品:wait
        经历:模仿
        设备:总结出关键设备  
    */

    function preEnter() {}

    return exports;
});