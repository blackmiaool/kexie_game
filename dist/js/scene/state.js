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
    module.controller("state-controller", ["$scope", function (sp) {
        var pages = [{
            name: "状态",
            class: "ym-success"
        }, {
            name: "技能",
            class: "ym-warning"
        }, {
            name: "朋友",
            class: "ym-success"
        }, {
            name: "经历",
            class: "ym-success"
        }, {
            name: "物品",
            class: "ym-warning"
        }, {
            name: "设备",
            class: "ym-success"
        }];
        function getPre(v) {
            var preText = "";
            v.pre.forEach(function (v, i) {
                if (i > 0) preText += ",";
                preText += v.name;
            });
            console.log(v, preText);
            return preText;
        }
        //    let currentPage="状态";
        function setPage(name) {
            sp.currentPage = name;
        }
        console.log(skills);
        _.extend(sp, {
            pages: pages, v: v, setPage: setPage, skills: skills, getPre: getPre
        });
        console.log(v);
    }]);

    function preEnter() {}

    return exports;
});