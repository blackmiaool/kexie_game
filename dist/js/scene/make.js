"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

define(["require", "system-scene", "system-sys", "angular", "system-dbg", "z", "res", "angular-module", "plot", "system-common"], function (require, scene, sys, angular, dbg, z, res, module, plot, common) {
    var exports = {};
    var sceneId = "make";
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

    //let working=z.work["硬件流水灯"][0];
    //console.log(working)
    console.log(res);
    module.controller("MakeController", ["$scope", "$rootScope", "$timeout", function (sp, rsp, $timeout) {
        //    let extendDirs=["性能","稳定","创新"];
        //    let extensions={性能:false,稳定:false,创新:false};
        var diffculty = void 0;
        //    sp.extensions=extensions;

        //    sp.$watch("extensions",function(v){
        //        let powerConsume=diffculty;
        //        if(v["性能"]){
        //            powerConsume*=1.5;
        //        }
        //        if(v["稳定"]){
        //            powerConsume*=1.5;
        //        }
        //        if(v["创新"]){
        //            powerConsume*=1.5;
        //        }
        //        sp.powerConsume=Math.ceil(powerConsume);
        //    },true);
        rsp.$on("make-preEnter", function (e, _ref) {
            var _ref2 = _slicedToArray(_ref, 2);

            var kind = _ref2[0];
            var id = _ref2[1];

            if (!kind) {
                console.error("Miss 'kind' paramater");
                return;
            }
            if (id) {
                sp.working = z.work[kind][id];
            } else {

                var working = {
                    id: common.getUid(),
                    name: kind,
                    kind: kind,
                    prefix: {},
                    state: "raw",
                    process: {
                        basic: 3,
                        basicMax: 10
                    },
                    property: [{
                        kind: "lucky",
                        value: "3"
                    }]
                };
                sp.working = working;
            }
            diffculty = res.products[sp.working.kind].difficulty;
            sp.powerConsume = diffculty;
        });
        $timeout(function () {
            z.item["五5伍"].cnt = 10;
            z.item["LED"].cnt = 11;
            z.item["电路基础元件"].cnt = 12;
        }, 1000);

        function start() {
            if (checkMaterial()) {
                res.products[sp.working.kind].material.forEach(function (vv, i) {
                    z.item[vv.name].cnt -= vv.cnt;
                });
            } else {
                return;
            }
        }

        function checkMaterial() {
            if (!sp.working) return false;

            var satisfy = !res.products[sp.working.kind].material.some(function (vv, i) {
                if (vv.cnt > z.item[vv.name].cnt) {
                    return true;
                }
            });
            return satisfy;
        }

        function print() {
            console.log(arguments);
            return true;
        }
        _.extend(sp, {
            checkMaterial: checkMaterial,
            print: print,
            //        extendDirs,
            start: start
        });
    }]);

    scene.register(sceneThis);
    return exports;
});