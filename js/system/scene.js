define(["system-sys", "system-dbg"], function (sys, dbg) {
    requirejs(requirejs.cfg.scenePaths, function () {
        sys.sceneLoaded();
    });
    let scenes = {};
    let currentScene = {};
    let sceneFadeTimeRaw = 1000;
    let sceneFadeTime = dbg.imdeveloper ? 1 : sys.quick ? 1 : sceneFadeTimeRaw;

    function register({
        id, init, preEnter, enter
    }) {
        let sceneThis = arguments[0];
        scenes[id] = sceneThis;
        if (init) {
            init();
        }
    }

    function go(target, ...args) {
        if (typeof target == "string") {
            target = scenes[target];
        } else if (typeof target == "object") {} else {
            console.error("bad target");
        }
        let pre;

        if (target.id) {
            console.info("out", currentScene.id, "in", target.id, args);
            if (currentScene.id) {
                currentScene.preLeave && currentScene.preLeave();
                pre = currentScene;
                angularDo(doPreLeave);
                function doPreLeave() {
                    sys.$rootScope.$emit(pre.id + "-preLeave", args);
                }
            }

            currentScene = target;
            target.preEnter && target.preEnter.apply(target, args);
            angularDo(doPreEnter);
            function doPreEnter() {
                sys.$rootScope.scenes[target.id] = true;
                setTimeout(function () {
                    angularDo(function () {
                        sys.$rootScope.$emit(target.id + "-preEnter", args);
                    })
                })
            }
            callEnter(args);
        } else {
            callEnter(args);
        }

        function angularDo(func, ...args) {
            if (sys.$rootScope.$$phase) {
                func(...args);
            } else {
                sys.$rootScope.$apply(function () {
                    func(...args);
                });
            }
        }

        function callEnter(args) {
            setTimeout(function () {
                if (target.enter) {
                    target.enter.apply(target, args);
                }
                if (pre) {
                    pre.leave && pre.leave();
                    angularDo(doLeave);
                    function doLeave() {
                        sys.$rootScope.$emit(pre.id + "-leave");
                        setTimeout(function () {
                            angularDo(function () {
                                sys.$rootScope.scenes[pre.id] = false;
                            })
                        })
                    }
                }
                angularDo(doEnter);
                function doEnter() {
                    sys.$rootScope.$emit(target.id + "-enter", args);
                }

            }, sceneFadeTime);
        }

    }

    function getScene(id) {
        return $(`#wrap>.scene-wrap>.scene[data-scene="${id}"]`);
    }
    let exports = {
        go,
        scenes,
        register,
        getScene,
    };
    return exports;
})