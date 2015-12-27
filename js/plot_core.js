define(["sys", "plot_common", "plots/start", "plots/nature_test", "plots/xuanjianghui"], function (sys, plot, p_start, p_nature, p_xuanjianghui) {
    var exports = {};
    exports.init = function () {
        
        function run_plot(p, cb) {
            exports.running = p(cb); 
            console.log("next2");
            setTimeout(function(){
                exports.running.next();
            })
            
        }

        run_plot(p_start, function () {
            console.log("nature")
            run_plot(p_nature, function () {
                run_plot(p_xuanjianghui, function () {

                })
            })
        })

    }
    exports.resume = function (ret) {
        console.log("next1");
        exports.running.next(ret);
    }
    return exports;
})