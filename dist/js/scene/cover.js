"use strict";

define(["scene", "sys", "angular", "dbg", "v", "res", "angular-module"], regeneratorRuntime.mark(function _callee(scene, sys, angular, dbg, v, res, module) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    scene = new sys.Scene({
                        id: "cover",
                        dom_id: "scene_cover",
                        init: function init() {
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
                        },
                        pre_enter: function pre_enter() {
                            $('.logo-title').addClass('animated zoomIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                                $(this).removeClass('animated zoomIn');
                            });
                        }
                    });

                case 1:
                case "end":
                    return _context.stop();
            }
        }
    }, _callee, this);
}));