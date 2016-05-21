define(["system-sys"], function (sys, plot, p_start, p_nature, p_xuanjianghui, p_kexiefirst) {
    var exports = {};
    let start;
    console.log(requirejs.cfg.plotPaths);
    requirejs(requirejs.cfg.plotPaths, function () {
        let evalStr="";
        requirejs.cfg.plotPaths.forEach(function(v,i){
            evalStr+=`${v}=arguments[${i}];`
        })
        eval(evalStr);
    });

    function run_plot(p, cb) {
        exports.running = p(cb);
        console.log("next2");
        setTimeout(function () {
            exports.running.next();
        })

    }
    exports.init = function () {
        run_plot(start,function(){
            console.log(123)
        })
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