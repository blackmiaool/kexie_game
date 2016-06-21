define(["system-sys", "system-dbg"], function (sys, dbg) {
    requirejs(requirejs.cfg.scenePaths, function () {
        sys.sceneLoaded();
    });
    let sceneChanging = false;
    let scenes = {};
    let currentScene = {};
    let sceneFadeTimeRow = 1000;
    let sceneFadeTime = dbg.imdeveloper ? 1 : sys.quick ? 1 : sceneFadeTimeRow;

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
        if (sceneChanging) {
            return;
        }
        if (typeof target == "string") {
            target = scenes[target];
        } else if (typeof target == "object") {

            //            target = target;
        } else {

            console.error("bad target");
        }
        let pre;

        function callEnter(args) {
            setTimeout(function () {
                if (target.enter) {
                    target.enter.apply(target, args);
                }
                if (pre) {
                    if (pre.leave) {
                        pre.leave();
                    }
                    if (sys.$rootScope.$$phase) {
                        doLeave();
                    } else {
                        sys.$rootScope.$apply(doLeave);
                    }

                    function doLeave() {
                        sys.$rootScope.$emit(pre.id + "-leave");
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
            console.info("out", currentScene.id, "in", target.id, args);

            if (currentScene.id) {
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

                function doPreLeave() {
                    sys.$rootScope.$emit(pre.id + "-preLeave");
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

            function doPreEnter() {
                sys.$rootScope.$emit(target.id + "-preEnter", args);
            }           
            callEnter(args);
        } else {
            callEnter(args);
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