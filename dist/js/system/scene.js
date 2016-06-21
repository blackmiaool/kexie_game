"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

define(["system-sys", "system-dbg"], function (sys, dbg) {
    requirejs(requirejs.cfg.scenePaths, function () {
        sys.sceneLoaded();
    });
    var sceneChanging = false;
    var scenes = {};
    var currentScene = {};
    var sceneFadeTimeRow = 1000;
    var sceneFadeTime = dbg.imdeveloper ? 1 : sys.quick ? 1 : sceneFadeTimeRow;

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

        if (sceneChanging) {
            return;
        }
        if (typeof target == "string") {
            target = scenes[target];
        } else if ((typeof target === "undefined" ? "undefined" : _typeof(target)) == "object") {

            //            target = target;
        } else {

                console.error("bad target");
            }
        var pre = void 0;

        function callEnter(args) {
            setTimeout(function () {
                if (target.enter) {
                    target.enter.apply(target, args);
                }
                if (pre) {
                    var doLeave = function doLeave() {
                        sys.$rootScope.$emit(pre.id + "-leave");
                    };

                    if (pre.leave) {
                        pre.leave();
                    }
                    if (sys.$rootScope.$$phase) {
                        doLeave();
                    } else {
                        sys.$rootScope.$apply(doLeave);
                    }
                }
                if (sys.$rootScope.$$phase) {
                    doEnter();
                } else {
                    sys.$rootScope.$apply(doEnter);
                }

                function doEnter() {
                    sys.$rootScope.$emit(target.id + "-enter", args);
                }
            }, sceneFadeTime);
        }

        if (target.id) {
            var doPreEnter = function doPreEnter() {
                sys.$rootScope.$emit(target.id + "-preEnter", args);
            };

            console.info("out", currentScene.id, "in", target.id, args);

            if (currentScene.id) {
                var doPreLeave = function doPreLeave() {
                    sys.$rootScope.$emit(pre.id + "-preLeave");
                };

                currentScene.$dom.fadeOut(sceneFadeTime).inactive();
                if (currentScene.preLeave) {
                    currentScene.preLeave();
                }
                pre = currentScene;
                if (sys.$rootScope.$$phase) {
                    doPreLeave();
                } else {
                    sys.$rootScope.$apply(doPreLeave);
                }
            }
            target.$dom.show().fadeIn(sceneFadeTime).active();

            currentScene = target;

            if (target.preEnter) {
                target.preEnter.apply(target, args);
            }
            if (sys.$rootScope.$$phase) {
                doPreEnter();
            } else {
                sys.$rootScope.$apply(doPreEnter);
            }

            callEnter(args);
        } else {
            callEnter(args);
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