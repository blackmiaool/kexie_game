define(["system-sys", "system-dbg","system-plot"], function (sys, dbg) {
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

        function callEnter(args) {
            setTimeout(function () {
                if (target.enter) {
                    target.enter.apply(target, args);
                }
                sys.$rootScope.$emit(target.id + "_enter", args);
            }, sceneFadeTime);
        }

        if (target.id) {
            console.info("out", currentScene.id, "in", target.id, args)

            if (currentScene.id) {                
                currentScene.$dom.fadeOut(sceneFadeTime).inactive();
            }            
            target.$dom.show().fadeIn(sceneFadeTime).active();
            currentScene = target;

            if (target.preEnter) {
                target.preEnter.apply(target, args);
            }
            sys.$rootScope.$emit(target.id + "-preEnter", args);
            callEnter(args);
        } else {
            callEnter(args);
        }

    }

    function getScene(id) {
        return $(`#wrap>.scene[data-scene="${id}`);
    }
    let exports = {
        go,
        scenes,
        register,
        getScene,
    };
    return exports;
})