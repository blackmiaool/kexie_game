"use strict";

define(["res", "v", "sys", "_"], function (res, v, sys, _) {
  return regeneratorRuntime.mark(function _callee(plot_cb) {
    var ts, tc, tcc, tcn, th, tm, tmood, img, gap, pp;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ts = plot.ts;
            tc = plot.tc;
            tcc = plot.tcc; //use same person as last invoke tc

            tcn = plot.tcn; //tc without wait touch

            th = plot.th;
            tm = plot.tm;
            tmood = plot.tmood;
            img = res.img;
            gap = plot.gap;
            pp = res.pp;
            tmood = plot.tmood;

            setTimeout(function () {
              plot_cb();
            }, 0);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  });
});