"use strict";

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

define(["sys", "dbg"], function (sys, dbg) {
    requirejs(["preload", "cover"], function () {
        sys.sceneLoaded();
    });
    var sceneChanging = false;
    var scenes = {};
    var currentScene = {};
    var sceneFadeTimeRow = 1000;
    var sceneFadeTime = dbg.imdeveloper ? 1 : sys.quick ? 1 : sceneFadeTimeRow;

    function register(_ref) {
        var id = _ref.id;
        var dom_id = _ref.dom_id;
        var init = _ref.init;
        var pre_enter = _ref.pre_enter;
        var enter = _ref.enter;

        var sceneThis = arguments[0];
        scenes[id] = sceneThis;
        if (this.init) {
            this.init();
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

        function callEnter(args) {
            setTimeout(function () {
                if (target.enter) {
                    target.enter.apply(target, args);
                }
                sys.$rootScope.$emit(target.id + "_enter", args);
            }, sceneFadeTime);
        }

        if (target.id) {
            var getScene = function getScene(id) {
                return $("#wrap>.scene[data-scene=\"" + id);
            };

            console.info("out", currentScene.id, "in", target.id, args);

            if (currentScene.id) {
                var _$scene = getScene(currentScene.id);
                _$scene.fadeOut(sceneFadeTime).inactive();
            }
            var $scene = getScene(target.id);
            $scene.show().fadeIn(sceneFadeTime).active();
            currentScene = target;

            if (target.pre_enter) {
                target.pre_enter.apply(target, args);
            }
            sys.$rootScope.$emit(target.id + "-preEnter", args);
            callEnter(args);
        } else {
            callEnter(args);
        }
    }
    var exports = {
        go: go,
        scenes: scenes,
        register: register
    };
    return exports;
});