"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

define(["require", "system-scene", "system-sys", "angular", "system-dbg", "z", "res", "angular-module", "plot", "system-common"], function (require, scene, sys, angular, dbg, z, res, module, plot, common) {
    var exports = {};
    var sceneId = "save";
    var $dom = scene.getScene(sceneId);
    var sceneThis = {
        id: sceneId,
        preEnter: preEnter,
        $dom: $dom
    };
    var $$ = $dom.find.bind($dom);

    function preEnter(mode) {
        console.log(mode);
    }
    module.controller("SaveController", ["$scope", "$rootScope", "$timeout", function (sp, rsp, $timeout) {
        var diffculty = void 0;
        rsp.$on("save-preEnter", function (e, _ref) {
            var _ref2 = _slicedToArray(_ref, 1);

            var mode = _ref2[0];

            sp.title = {
                save: "保存游戏",
                load: "读取游戏"
            }[mode];
            sp.mode = mode;
        });
        var slots = 7;
        var saves = common.load("save");
        if (!saves) {
            saves = [];
            for (var i = 0; i < slots; i++) {
                saves.push({});
            }
            common.save("save", saves);
        }

        function handle(index) {
            if (sp.mode == "save") {
                console.log(index);
                if (saves[index].time) {} else {
                    saves[index] = {
                        round: z.time.round,
                        time: Date.now(),
                        power: z.power,
                        data: JSON.stringify(z)
                    };
                    common.save("save", saves);
                }
            } else {}
        }

        function getLabel(save) {
            if (!save.time) return "";
            var date = new Date(save.time);
            var result = "";
            result += date.getMonth() + 1 + "月" + date.getDate() + "日" + date.getHours() + "时" + date.getMinutes() + "分";
            result += " ";
            result += "回合" + save.round;
            result += " ";
            result += "体力" + save.power;
            return result;
        }
        _.extend(sp, {
            saves: saves,
            handle: handle,
            getLabel: getLabel
        });
    }]);

    scene.register(sceneThis);
    return exports;
});