"use strict";

define(["require", "system-scene", "system-sys", "angular", "system-dbg", "z", "res", "angular-module", "plot", "system-common"], function (require, scene, sys, angular, dbg, z, res, module, plot, common) {
    var exports = {};
    var sceneId = "cover";
    var $dom = scene.getScene(sceneId);
    var sceneThis = {
        id: sceneId,
        preEnter: preEnter,
        $dom: $dom,
        init: init
    };
    var $$ = $dom.find.bind($dom);

    function init() {
        module.controller("CoverController", function ($scope) {
            $scope.start = function () {
                scene.go("chat", "cover");
            };
            $scope.read = function () {
                scene.go("save", "load", "cover");
            };
            $scope.about = function () {
                scene.go("about");
            };
        });
    }

    function preEnter() {}

    scene.register(sceneThis);
    return exports;
});