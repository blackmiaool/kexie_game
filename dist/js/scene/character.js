"use strict";

define(["require", "system-scene", "system-sys", "angular", "system-dbg", "v", "res", "angular-module", "plot", "system-common"], function (require, scene, sys, angular, dbg, v, res, module, plot, common) {
    var exports = {};
    var sceneId = "character";
    var $dom = scene.getScene(sceneId);
    var sceneThis = {
        id: sceneId,
        preEnter: preEnter,
        $dom: $dom,
        init: init
    };
    var $$ = $dom.find.bind($dom);

    function init() {}
    var initPoints = 3;
    module.controller("character_controller", ["$scope", "$rootScope", function (sp, rsp) {
        var index = 0;

        function selectItem(item) {

            if (checkDisabled(item)) {
                return;
            }
            item.selecting = true;
            item.index = index;
            index++;
            updatePoints();
        }

        function deSelectItem(item) {

            item.selecting = false;
            updatePoints();
        }

        function getGottenPoints() {
            var points = 0;

            for (var i in res.weakness) {
                var item = res.weakness[i];

                if (item.selecting) {
                    points += item.cost;
                }
            }

            return points;
        }

        function getUsedPoints() {
            var points = 0;

            for (var i in res.goodness) {
                var item = res.goodness[i];

                if (item.selecting) {
                    points += item.cost;
                }
            }
            return points;
        }

        function getRemainPoints() {
            var points = initPoints - getGottenPoints() - getUsedPoints();
            return points;
        }

        function checkDisabled(item) {
            return item.contradiction.some(function (v, i) {
                if (res.goodness[v] && res.goodness[v].selecting || res.weakness[v] && res.weakness[v].selecting) {
                    return true;
                }
            });
        }

        function updatePoints() {
            sp.usedPoints = getUsedPoints();
            sp.remainPoints = getRemainPoints();
        }
        updatePoints();

        var goodnessPairs = _.pairs(res.goodness);
        var weaknessPairs = _.pairs(res.weakness);
        var allPairs = goodnessPairs.concat(weaknessPairs);

        function random() {
            allPairs.forEach(function (v, i) {
                v[1].selecting = false;
            });
            updatePoints();
            var len = 0;
            while (len < 100) {
                var _index = _.random(0, allPairs.length - 1);
                var item = allPairs[_index][1];
                if (sp.remainPoints == 0) {
                    break;
                }
                if (sp.remainPoints < item.cost) {
                    continue;
                }

                selectItem(item);
                len++;
                console.log(len, _index);
            }
            len = 0;
            while (len < 100) {
                var _index2 = _.random(0, weaknessPairs.length - 1);
                var _item = weaknessPairs[_index2][1];
                if (sp.remainPoints == 0) {
                    break;
                }

                if (sp.remainPoints < -_item.cost) {
                    continue;
                }

                deSelectItem(_item);

                len++;
                console.log(len, _index2);
            }
        }
        function setHovering(item) {
            sp.hovering = item;
        }
        var $card = $(".hover-card");
        var $wrap = $(".scene-wrap");
        $wrap.on("mousemove", function (e) {
            //        let x=e.clientX*100/$wrap.width();
            //        let y=e.clientY*100/$wrap.height();
            //        console.log(e)
            //        console.log(x,y)
            $card.css("left", e.clientX + 40 + "px");
            $card.css("top", e.clientY + 2 + "px");
            //        console.log(e.clientY,$wrap.height())
        });
        _.extend(sp, {
            selectItem: selectItem,
            deSelectItem: deSelectItem,
            getUsedPoints: getUsedPoints,
            getRemainPoints: getRemainPoints,
            checkDisabled: checkDisabled,
            random: random,
            setHovering: setHovering
        });
    }]);

    function preEnter() {}

    scene.register(sceneThis);
    return exports;
});