define(["sys", "angular", "v", "common", "res", "dbg", "plots/start", "plot_common"], function* (sys, angular, v, common, res, dbg, start, plot) {
    var scene = new sys.Scene("chat", "section_chat", undefined, function () {
            plot.running = start();
            console.log("mmmmmmmmmmm", plot.running);
            console.log("mmmmmmmmmmm", plot.running._invoke());
        })
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



    return 3;
})