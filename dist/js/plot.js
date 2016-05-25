"use strict";

define(["system-sys", "system-plotApi", "exports", "system-scene"], function (sys, plotApi, exports, scene) {
    var p_start = void 0;
    var p_kexie_first = void 0;
    var p_nature_test = void 0;
    var p_xuanjianghui = void 0;
    console.log(requirejs.cfg.plotPaths);

    var plotsPromise = new Promise(function (resolve, reject) {
        requirejs(requirejs.cfg.plotPaths, function () {
            var evalStr = "";

            requirejs.cfg.plotPaths.forEach(function (v, i) {
                evalStr += "p_" + v + "=arguments[" + i + "];";
            });

            eval(evalStr);
            resolve();
        });
    });

    function runPlot(p, cb) {
        exports.running = p(cb);
        setTimeout(function () {
            exports.running.next();
        });
    }

    function init() {
        plotApi.init();
        plotsPromise.then(function () {

            function start_cb(result) {
                console.log("startcb", result);
                if (result == "again") {
                    runPlot(p_start, start_cb);
                } else if (result == "cover") {
                    scene.go("cover");
                } else {
                    runPlot(p_nature_test, function () {
                        runPlot(p_xuanjianghui, function () {

                            runPlot(p_kexie_first, function () {
                                scene.go("home");
                            });
                        });
                    });
                }
            }
            //            runPlot(p_start, start_cb)
            runPlot(p_xuanjianghui, start_cb);
        });
    }

    function resume(ret) {
        exports.running.next(ret);
    }
    exports = $.extend(exports, {
        init: init,
        resume: resume
    });
    return exports;
});