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
                        console.log(234);
                        module.controller("cover_controller", function ($scope) {
                            $scope.start = function () {
                                sys.to_scene("chat", "cover");
                            };
                            $scope.read = function () {
                                sys.to_scene("save", "load", "cover");
                            };
                            $scope.about = function () {
                                sys.to_scene("about", "save");
                            };

                            $(".cover_btn").mouseover(function (e) {
                                var eve = e || window.event;
                                eve.preventDefault();
                                var index = $(this).context.attributes.indexx.value;
                                var ac = [];
                                ac[0] = "swing";
                                ac[1] = "rubberBand";
                                ac[2] = "tada";
                                $(this).addClass('animated ' + ac[index]).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                                    $(this).removeClass('animated ' + ac[index]);
                                });
                            });
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