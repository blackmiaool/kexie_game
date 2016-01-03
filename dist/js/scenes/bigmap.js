"use strict";

define(["sys", "angular", "v", "common", "res", "dbg"], regeneratorRuntime.mark(function _callee(sys, angular, v, common, res, dbg) {
    var scene, spot_create;
    return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    spot_create = function spot_create(name, text, left, top, icon) {
                        spots.push({
                            class: text,
                            text: name,
                            left: left,
                            top: top,
                            icon: icon
                        });
                    };

                    scene = new sys.Scene({
                        id: "bigmap",
                        dom_id: "scene_bigmap",
                        init: function init() {
                            $("#scene_bigmap img").css("opacity", "1");
                        },
                        pre_enter: function pre_enter() {
                            $("#scene_bigmap img").animate({
                                opacity: "0.7"
                            });
                        },
                        enter: function enter() {}
                    });

                    angular.module('home_app').controller("bigmap_controller", function ($scope) {

                        $scope.enter = function (spot) {
                            sys.to_scene("chat", spot);
                        };

                        //        $scope.btns = spots;
                        //        console.log(spots);
                        //
                        //            {
                        //                class: "btn-danger",
                        //                text: "宿舍",
                        //                left: "464px",
                        //                top: "35px",
                        //                icon:"bed",
                        //            },
                        //            {
                        //                class: "btn-success",
                        //                text: "IC科协",
                        //                left: "400px",
                        //                top: "180px",
                        //                icon:"pawn",
                        //            },
                        //        ]
                        $scope.go_back = function () {
                            sys.to_scene("home");
                        };
                    });
                case 3:
                case "end":
                    return _context.stop();
            }
        }
    }, _callee, this);
}));