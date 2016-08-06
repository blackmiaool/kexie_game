"use strict";

define(["require", "res", "z", "system-sys", "_", "system-plotApi"], function (require, res, z, sys, _, plot) {
    return regeneratorRuntime.mark(function _callee(plot_cb) {
        var tc, th, ts, tm, tcc, tmood, tcn, emphasize, img, gap, pp, result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        tc = plot["tc"];
                        th = plot["th"];
                        ts = plot["ts"];
                        tm = plot["tm"];
                        tcc = plot["tcc"];
                        tmood = plot["tmood"];
                        tcn = plot["tcn"];
                        emphasize = plot["emphasize"];
                        img = res.img;
                        gap = plot.gap;
                        pp = res.pp;
                        _context.next = 13;
                        return ts(res.img.uestc);

                    case 13:
                        _context.next = 15;
                        return tc(z.time.year + "年，9月 成都 郫县 电子神技大学校门口", 0, gap.slow);

                    case 15:
                        _context.next = 17;
                        return tc("你望着“电子神技大学”这五个字，心灰意冷。");

                    case 17:
                        _context.next = 19;
                        return tc("你是一名大一新生，本该考上TOP2的你，高考时发挥失常，不得已而在志愿书上填报了神大。");

                    case 19:
                        _context.next = 21;
                        return tc("“如果当初没做错那两道题该多好！”你又一次地感叹道。");

                    case 21:
                        _context.next = 23;
                        return tc("这时，你决定");

                    case 23:
                        _context.next = 25;
                        return tm("勇敢走入校门", "扭头就走");

                    case 25:
                        result = _context.sent;

                        if (!(result == 1)) {
                            _context.next = 57;
                            break;
                        }

                        _context.next = 29;
                        return ts(res.img.gaozhongketang);

                    case 29:
                        _context.next = 31;
                        return tc("你想了想觉得不甘心，于是回到高中复读。");

                    case 31:
                        _context.next = 33;
                        return tc("结果。。。");

                    case 33:
                        console.log(plot.rand(1, 10));

                        if (!(plot.rand(1, 10) > 1)) {
                            _context.next = 46;
                            break;
                        }

                        _context.next = 37;
                        return ts(res.img.qinghuadaxue);

                    case 37:
                        _context.next = 39;
                        return tc("经过不懈的努力，你考入了TOP2!<br/>完美结局【未曾开始的结束】达成!<br/>难度：1");

                    case 39:
                        plot.game_over = true;

                        _context.next = 42;
                        return ts(res.img.black, 1);

                    case 42:
                        setTimeout(function () {
                            plot_cb("cover");
                        });
                        return _context.abrupt("return");

                    case 46:
                        _context.next = 48;
                        return ts(res.img.luobang);

                    case 48:
                        _context.next = 50;
                        return tc("你又一次落榜了。");

                    case 50:
                        _context.next = 52;
                        return tc("无奈之下，你再一次填报了神大。");

                    case 52:
                        z.time.year++;
                        setTimeout(function () {
                            plot_cb("again");
                        });
                        return _context.abrupt("return");

                    case 55:
                        _context.next = 59;
                        break;

                    case 57:
                        _context.next = 59;
                        return tc("权衡了一下利弊，你决定逆来顺受，于是你迈步走进了神大。");

                    case 59:
                        setTimeout(function () {
                            plot_cb();
                        }, 0);

                    case 60:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this);
    });
});