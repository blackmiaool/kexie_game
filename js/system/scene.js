define(["sys","dbg"], function (sys,dbg) {
    requirejs(["preload","cover"], function () {
        sys.sceneLoaded();
    });
    let sceneChanging = false;
    let scenes = {};
    let currentScene = {};
    let sceneFadeTimeRow = 1000;
    let sceneFadeTime = dbg.imdeveloper ? 1 : sys.quick ? 1 : sceneFadeTimeRow;

    function register({
        id, dom_id, init, pre_enter, enter
    }) {
        let sceneThis = arguments[0];
        scenes[id] = sceneThis;
        if (this.init) {
            this.init();
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
            function getScene(id){
                return $(`#wrap>.scene[data-scene="${id}`);
            }
            if (currentScene.id) {
                let $scene=getScene(currentScene.id);
                $scene.fadeOut(sceneFadeTime).inactive();
            }
            let $scene=getScene(target.id);
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
    let exports = {
        go,
        scenes,
        register,
    };
    return exports;
})