define(["sys", "plot_common", "plots/start", "plots/nature_test", "plots/xuanjianghui", "plots/kexie_first"], function (sys, plot, p_start, p_nature, p_xuanjianghui, p_kexiefirst) {
    var exports = {};
    exports.init = function () {

        function run_plot(p, cb) {
            exports.running = p(cb);
            //            console.log("next2");
            setTimeout(function () {
                exports.running.next();
            })

        }

        function start_cb(result) {
            console.log("startcb", result)
            if (result == "again") {
                run_plot(p_start, start_cb);
            } else if (result == "cover") {
                sys.to_scene("cover");
            } else {
                run_plot(p_nature, function () {
                    run_plot(p_xuanjianghui, function () {

                        run_plot(p_kexiefirst, function () {
                            sys.to_scene("home");
                        })
                    })
                })
            }

        }
        //        run_plot(p_start, start_cb) 
        run_plot(p_kexiefirst, start_cb)
    }
    exports.resume = function (ret) {
        //        console.log("next1");
        exports.running.next(ret);
    }
    return exports;
})