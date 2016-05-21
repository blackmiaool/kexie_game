"use strict";

define(["require", "system-scene", "system-sys", "angular", "system-dbg", "v", "res", "angular-module", "plot"], function (require, scene, sys, angular, dbg, v, res, module, plot) {
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
        module.controller("cover_controller", function ($scope) {
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