"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

define(["require", "res", "z", "system-sys", "_", "system-plotApi"], function (require, res, z, sys, _, plot) {
    return regeneratorRuntime.mark(function _callee(plot_cb) {
        var tc, th, ts, tm, tcc, tmood, tcn, emphasize, img, gap, pp, result, value;
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
                        return ts(res.img.tushuguanyejing);

                    case 13:
                        _context.next = 15;
                        return tc("入学一段时间后，你对神大的陌生感逐渐消失。望着暮色中的图书馆，你陷入了沉思。");

                    case 15:
                        _context.next = 17;
                        return tc("你接下来的选择会影响你的属性，你决定");

                    case 17:
                        _context.next = 19;
                        return tm("使用默认属性（不推荐）", "开始进行属性测试");

                    case 19:
                        result = _context.sent;

                        if (!(result == 1)) {
                            _context.next = 82;
                            break;
                        }

                        _context.next = 23;
                        return tc("首先请选择你的名字");

                    case 23:
                        _context.next = 25;
                        return tm({
                            type: "input_with_btn",
                            data: {
                                placeholder: "手动输入姓名（昵称）",
                                btn: "确定",
                                width: "25%"
                            }
                        }, "使用作者指定姓名：李厷叺", "系统随机生成姓名");

                    case 25:
                        value = _context.sent;

                        console.log(1, result);
                        console.log(2, typeof result === "undefined" ? "undefined" : _typeof(result));

                        if (result == 1) {
                            z.basic.name = "李厷叺";
                        } else if (result == 0) {
                            z.basic.name = value;
                        } else {

                            z.basic.name = "张龙";
                        }

                        _context.next = 31;
                        return tc("你的人生意义是");

                    case 31:
                        _context.next = 33;
                        return tm("发展科技", "及时行乐", "繁衍");

                    case 33:
                        result = _context.sent;

                        if (result == 0) {
                            z.basic.study_abt = z.basic.study_abt + 0.2;
                        } else if (result == 1) {
                            z.basic.money_abt = z.basic.money_abt + 0.2;
                        } else {
                            z.basic.work_abt = z.basic.work_abt + 0.2;
                        }

                        _context.next = 37;
                        return tc("这三样东西，如果要你抛弃一样，你会选择");

                    case 37:
                        _context.next = 39;
                        return tm("金钱", "智商", "意志力");

                    case 39:
                        result = _context.sent;

                        if (result == 0) {
                            z.basic.money_abt = z.basic.money_abt - 0.1;
                        } else if (result == 1) {
                            z.basic.study_abt = z.basic.study_abt - 0.1;
                        } else {
                            z.basic.work_abt = z.basic.work_abt - 0.1;
                        }

                        _context.next = 43;
                        return tc("在大学里，你觉得这二者哪个更重要？");

                    case 43:
                        _context.next = 45;
                        return tm("兄弟（姐妹）", "情人（配偶）");

                    case 45:
                        result = _context.sent;

                        if (result == 1) {
                            z.basic.work_abt = z.basic.work_abt - 0.1;
                        }
                        _context.next = 49;
                        return tc("你高中除了学习高考知识，还做过");

                    case 49:
                        _context.next = 51;
                        return tm("OI", "物竞", "数竞", "打工或者创业赚钱", "没做过别的，专心高考");

                    case 51:
                        result = _context.sent;

                        if (!(result == 0)) {
                            _context.next = 56;
                            break;
                        }

                        z.experience.OI = true;
                        _context.next = 74;
                        break;

                    case 56:
                        if (!(result == 1)) {
                            _context.next = 60;
                            break;
                        }

                        z.experience.phy = true;
                        _context.next = 74;
                        break;

                    case 60:
                        if (!(result == 2)) {
                            _context.next = 64;
                            break;
                        }

                        z.experience.math = true;
                        _context.next = 74;
                        break;

                    case 64:
                        if (!(result == 3)) {
                            _context.next = 68;
                            break;
                        }

                        z.basic.money = z.basic.money + 4000;
                        _context.next = 74;
                        break;

                    case 68:
                        if (!(result == 4)) {
                            _context.next = 74;
                            break;
                        }

                        z.basic.work_abt = z.basic.work_abt + 0.1;
                        _context.next = 72;
                        return tc("真是诚实的孩子，三把斧头都归你了。");

                    case 72:
                        _context.next = 74;
                        return tmood(res.img.axe);

                    case 74:
                        _context.next = 76;
                        return tc("你的性别");

                    case 76:
                        _context.next = 78;
                        return tm("男", "女");

                    case 78:
                        result = _context.sent;

                        if (result == 1) {
                            z.basic.work_abt = z.basic.work_abt - 0.1;
                            z.basic.female = true;
                        }
                        _context.next = 82;
                        return tc("测试结束。");

                    case 82:
                        _context.next = 84;
                        return tc("伸了伸懒腰，你回到了宿舍。");

                    case 84:
                        setTimeout(function () {
                            plot_cb();
                        }, 0);

                    case 85:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this);
    });
});