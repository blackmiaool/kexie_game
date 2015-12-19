define(["plot_common", "plots/start", "plots/nature_test","sys"], function (plot, p_start, p_nature,sys) {
    var exports = {};
    exports.init = function () {
//        console.log(window);
//        var start=new Promise(function(resolve, reject){
//            start(resolve, reject)
//        })
        exports.running = p_start(function(){
            exports.running=p_nature(function(){
                 sys.to_scene("home");
            })
            exports.running.next();
        });
        
//        start(p_start).then(function(){start(p_nature)});
//        start.next(nature_test);
        exports.running.next()
    }
    exports.resume = function (ret) {
        exports.running.next(ret);
    }
    return exports;
})