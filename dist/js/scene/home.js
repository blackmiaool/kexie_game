"use strict";

define(["require", "system-scene", "system-sys", "angular", "system-dbg", "v", "res", "angular-module", "plot", "system-common"], function (require, scene, sys, angular, dbg, v, res, module, plot, common) {
    var exports = {};
    var sceneId = "home";
    var $dom = scene.getScene(sceneId);
    var sceneThis = {
        id: sceneId,
        preEnter: preEnter,
        $dom: $dom
    };
    var $$ = $dom.find.bind($dom);
    var actions = [{
        name: "上课",
        icon: "conference",
        consume: 3
    }, {
        name: "学习",
        icon: "books",
        consume: 4
    }, {
        name: "制作",
        icon: "saw",
        consume: 5
    }, {
        name: "闲逛",
        icon: "team",
        consume: 5
    }, {
        name: "购物",
        icon: "market"
    }, {
        name: "休息",
        icon: "bed"
    }, {
        name: "状态",
        icon: "resume"
    }];

    scene.register(sceneThis);
    module.controller("home-controller", ["$scope", "$rootScope", function (sp, rsp) {
        var monkey = void 0;
        function getActionIcon(name) {
            return common.resPath + "icon/" + name + ".svg";
        }

        function getMonth(month, part) {
            var monthStr = month - 1 + "月";
            var pStr = ["上旬", "中旬", "下旬"];
            var partStr = pStr[part];
            return monthStr + partStr;
        }

        function doAction(action) {
            switch (action.name) {
                case "状态":
                    scene.go("state");
                    break;
            }
        }

        function hover(action) {
            console.log(action);
            sp.monkey = common.resPath + ("monkey/" + action.icon + ".gif");
        }
        _.extend(sp, {
            v: v,
            res: res,
            actions: actions,
            getActionIcon: getActionIcon,
            getMonth: getMonth,
            doAction: doAction,
            monkey: monkey,
            hover: hover
        });
    }]);
    module.filter('term', function () {
        var filter = function filter(level) {
            return "第" + level + "学期";
        };
        return filter;
    });

    function preEnter() {}

    return exports;
});