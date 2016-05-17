"use strict";

define(["scene", "sys", "angular", "dbg", "v", "res", "angular-module"], regeneratorRuntime.mark(function _callee(scene, sys, angular, dbg, v, res, module) {
    var exports, sceneId, $dom, sceneThis, $$, init, preEnter;
    return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    preEnter = function preEnter() {
                        $('.logo-title').addClass('animated zoomIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                            $(this).removeClass('animated zoomIn');
                        });
                    };

                    init = function init() {
                        module.controller("cover_controller", function ($scope) {
                            $scope.start = function () {
                                scene.to_scene("chat", "cover");
                            };
                            $scope.read = function () {
                                scene.to_scene("save", "load", "cover");
                            };
                            $scope.about = function () {
                                scene.to_scene("about", "save");
                            };
                        });
                    };

                    exports = {};
                    sceneId = "cover";
                    $dom = scene.getScene(sceneId);
                    sceneThis = {
                        id: sceneId,
                        preEnter: preEnter,
                        $dom: $dom,
                        init: init
                    };
                    $$ = $dom.find.bind($dom);

                    scene.register(sceneThis);
                    return _context.abrupt("return", exports);

                case 9:
                case "end":
                    return _context.stop();
            }
        }
    }, _callee, this);
}));