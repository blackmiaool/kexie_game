"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

define(["system-sys", "system-dbg"], function (sys, dbg) {
    requirejs(requirejs.cfg.scenePaths, function () {
        sys.sceneLoaded();
    });
    var scenes = {};
    var currentScene = {};
    var sceneFadeTimeRaw = 1000;
    var sceneFadeTime = dbg.imdeveloper ? 1 : sys.quick ? 1 : sceneFadeTimeRaw;

    function register(_ref) {
        var id = _ref.id;
        var init = _ref.init;
        var preEnter = _ref.preEnter;
        var enter = _ref.enter;

        var sceneThis = arguments[0];
        scenes[id] = sceneThis;
        if (init) {
            init();
        }
    }

    function go(target) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
        }

        if (typeof target == "string") {
            target = scenes[target];
        } else if ((typeof target === "undefined" ? "undefined" : _typeof(target)) == "object") {} else {
            console.error("bad target");
        }
        var pre = void 0;

        if (target.id) {
            var doPreEnter = function doPreEnter() {
                sys.$rootScope.scenes[target.id] = true;
                setTimeout(function () {
                    angularDo(function () {
                        sys.$rootScope.$emit(target.id + "-preEnter", args);
                    });
                });
            };

            console.info("out", currentScene.id, "in", target.id, args);
            if (currentScene.id) {
                var doPreLeave = function doPreLeave() {
                    sys.$rootScope.$emit(pre.id + "-preLeave", args);
                };

                currentScene.preLeave && currentScene.preLeave();
                pre = currentScene;
                angularDo(doPreLeave);
            }

            currentScene = target;
            target.preEnter && target.preEnter.apply(target, args);
            angularDo(doPreEnter);

            callEnter(args);
        } else {
            callEnter(args);
        }

        function angularDo(func) {
            for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
            }

            if (sys.$rootScope.$$phase) {
                func.apply(undefined, args);
            } else {
                sys.$rootScope.$apply(function () {
                    func.apply(undefined, args);
                });
            }
        }

        function callEnter(args) {
            setTimeout(function () {
                if (target.enter) {
                    target.enter.apply(target, args);
                }
                if (pre) {
                    var doLeave = function doLeave() {
                        sys.$rootScope.$emit(pre.id + "-leave");
                        setTimeout(function () {
                            angularDo(function () {
                                sys.$rootScope.scenes[pre.id] = false;
                            });
                        });
                    };

                    pre.leave && pre.leave();
                    angularDo(doLeave);
                }
                angularDo(doEnter);
                function doEnter() {
                    sys.$rootScope.$emit(target.id + "-enter", args);
                }
            }, sceneFadeTime);
        }
    }

    function getScene(id) {
        return $("#wrap>.scene-wrap>.scene[data-scene=\"" + id + "\"]");
    }
    var exports = {
        go: go,
        scenes: scenes,
        register: register,
        getScene: getScene
    };
    return exports;
});