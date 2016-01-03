"use strict";

define(["sys", "angular", "v", "common", "res", "dbg"], regeneratorRuntime.mark(function _callee2(sys, angular, v, common, res, dbg) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    define(["sys", "angular", "v", "common", "res", "dbg", "plot_common", "plot_core"], regeneratorRuntime.mark(function _callee(sys, angular, v, common, res, dbg, plot, plot_core) {
                        var scene;
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                                switch (_context.prev = _context.next) {
                                    case 0:
                                        scene = new sys.Scene({
                                            id: "chat",
                                            dom_id: "scene_chat",
                                            init: function init() {

                                                angular.module('home_app').controller("chat_controller", function ($scope) {

                                                    //                console.log(plot);
                                                    //                plot.init();

                                                });
                                            },
                                            pre_enter: function pre_enter() {
                                                plot.init();
                                                plot_core.init();
                                                //            plot.running = start();
                                                //            plot.running.next()
                                            },
                                            enter: function enter() {}
                                        });
                                        return _context.abrupt("return", 3);

                                    case 2:
                                    case "end":
                                        return _context.stop();
                                }
                            }
                        }, _callee, this);
                    }));
                case 1:
                case "end":
                    return _context2.stop();
            }
        }
    }, _callee2, this);
}));