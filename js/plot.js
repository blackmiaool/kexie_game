console.log(234);
define(["system-sys", "system-plotApi", "exports"], function (sys, plotApi, exports) {
    console.log(234);

    let start;
    console.log(requirejs.cfg.plotPaths);

    let plotsPromise = new Promise(function (resolve, reject) {
        requirejs(requirejs.cfg.plotPaths, function () {
            let evalStr = "";
            console.log(arguments);
            requirejs.cfg.plotPaths.forEach(function (v, i) {
                evalStr += `${v}=arguments[${i}];`
            })
            console.log(evalStr)
            eval(evalStr);
            resolve();
        });
    })


    console.log(start);

    function run_plot(p, cb) {

        exports.running = p(cb);
        console.log("next2");
        setTimeout(function () {
            exports.running.next();
        })



    }
    exports.init = function () {
        plotApi.init();
        plotsPromise.then(function () {
            run_plot(start, function () {
                console.log(123)
            })
        })
    }
    exports.resume = function (ret) {
            //        console.log("next1");
            exports.running.next(ret);
        }
        //    exports.init = function () {
        //
        //        function run_plot(p, cb) {
        //            exports.running = p(cb);
        //            //            console.log("next2");
        //            setTimeout(function () {
        //                exports.running.next();
        //            })
        //
        //        }
        //
        //        function start_cb(result) {
        //            console.log("startcb", result)
        //            if (result == "again") {
        //                run_plot(p_start, start_cb);
        //            } else if (result == "cover") {
        //                sys.to_scene("cover");
        //            } else {
        //                run_plot(p_nature, function () {
        //                    run_plot(p_xuanjianghui, function () {
        //
        //                        run_plot(p_kexiefirst, function () {
        //                            sys.to_scene("home");
        //                        })
        //                    })
        //                })
        //            }
        //
        //        }
        //        //        run_plot(p_start, start_cb) 
        //        run_plot(p_kexiefirst, start_cb)
        //    }
        //    exports.resume = function (ret) {
        //        //        console.log("next1");
        //        exports.running.next(ret);
        //    }
    return exports;
})