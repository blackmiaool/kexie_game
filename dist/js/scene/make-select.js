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

    module.controller("MakeSelectController", ["$scope", "$rootScope", "$timeout", function (sp, rsp, $timeout) {
        function selectProductKind(product) {
            sp.productSelectPageIndex = 1;
            sp.selectingProductKind = product.name;
        }

        function productSelectPrevPage() {
            sp.productSelectPageIndex--;
            sp.selectingProductKind = undefined;
        }

        function goHome() {
            scene.go("home");
        }
        _.extend(sp, {
            selectingProductKind: "硬件流水灯",
            productSelectPageIndex: 1,
            selectProductKind: selectProductKind,
            productSelectPrevPage: productSelectPrevPage,
            goHome: goHome
        });
    }]);

    scene.register(sceneThis);
    return exports;
});