define(["sys", "angular", "v", "common", "res", "dbg","plots/start"], function* (sys, angular, v, common, res, dbg,start) {
    
//    var plots = ["start"];
//    var plots_len = plots.length;
//    plots.forEach(function (v, i) {
//        var p = [];
//        p.push("plots/" + v)
//        require(p, function (ppp) {
//            plots.length--;
//            plots[v] = ppp;
//            if (!plots.length) {
//                for (var i in plots) {
//                    eval("var " + i + "=plots." + i + ";");
//                }
//                start()._invoke();
//            }
//        })
//    })
    start()._invoke();
    return 3;
})