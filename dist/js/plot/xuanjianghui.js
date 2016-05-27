"use strict";

define(["require", "res", "v", "system-sys", "_", "system-plotApi"], function (require, res, v, sys, _, plot) {
    return regeneratorRuntime.mark(function _callee(plot_cb) {
        var ts, tc, tcc, tcn, th, tm, tmood, img, gap, pp, result, _result, _result2, _result3, _result4, _result5, _result6;

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
                        v.plot.xuanjianghui = true;
                        _context.next = 14;
                        return ts(img.kexiezhaoxin);

                    case 14:
                        _context.next = 16;
                        return tm("加入物电科协", "加入微固科协（待施工）", "加入电工科协（待施工）", "加入总会（待施工）");

                    case 16:
                        _context.next = 18;
                        return tc("这一日，你发现各大科协在进行招新，你决定");

                    case 18:
                        _context.next = 20;
                        return tm("加入物电科协", "加入微固科协（待施工）", "加入电工科协（待施工）", "加入总会（待施工）");

                    case 20:
                        result = _context.sent;

                        if (!(result > 0)) {
                            _context.next = 28;
                            break;
                        }

                        _context.next = 24;
                        return ts(img.baozou_zhuakuang);

                    case 24:
                        _context.next = 26;
                        return tc("都说了在施工，你还点。。。");

                    case 26:
                        _context.next = 28;
                        return tc("跳转进入物电科协剧情。。。");

                    case 28:
                        _context.next = 30;
                        return tc("由于你考入的是「物电学院」，你决定加入「物电科协」。");

                    case 30:
                        _context.next = 32;
                        return ts(img.black);

                    case 32:
                        _context.next = 34;
                        return tc("十天后，物电科协宣讲会。", 0, gap.slow);

                    case 34:
                        _context.next = 36;
                        return ts(img.jiaoshi);

                    case 36:
                        _context.next = 38;
                        return tc("教室里挤满了想加入科协的同学，一片嘈杂。");

                    case 38:
                        _context.next = 40;
                        return tc("坐在教室一隅的你，决定");

                    case 40:
                        _context.next = 42;
                        return tm("和旁边的同学搭讪", "坐等宣讲会开始");

                    case 42:
                        _result = _context.sent;

                        if (!(_result == 0)) {
                            _context.next = 88;
                            break;
                        }

                        _context.next = 46;
                        return tc("你左边坐着一个身材一般的男生，正在拨弄耳机。右边则坐着一个帅哥，正在看书，好像是什么团。你决定");

                    case 46:
                        _context.next = 48;
                        return tm("向左边的同学搭讪", "向右边的同学搭讪");

                    case 48:
                        _result2 = _context.sent;

                        if (!(_result2 == 0)) {
                            _context.next = 69;
                            break;
                        }

                        _context.next = 52;
                        return th(0, pp.lizhao, 0);

                    case 52:
                        _context.next = 54;
                        return tc("同学，你在做什么啊？", pp.you);

                    case 54:
                        _context.next = 56;
                        return tc("我在测试耳机。新买的这个手机，音质真是不错～", pp.lizhao);

                    case 56:
                        _context.next = 58;
                        return tm("嗯！索尼大法好！", "这是中兴吧？");

                    case 58:
                        _result3 = _context.sent;

                        if (!(_result3 == 0)) {
                            _context.next = 65;
                            break;
                        }

                        _context.next = 62;
                        return tc("嘿嘿，同道中人～", pp.lizhao);

                    case 62:
                        v.amity.lizhao = v.amity.lizhao + 1;
                        _context.next = 67;
                        break;

                    case 65:
                        _context.next = 67;
                        return tc("。。。", pp.lizhao);

                    case 67:
                        _context.next = 86;
                        break;

                    case 69:
                        _context.next = 71;
                        return th(0, pp.gaoxiangchen, 0);

                    case 71:
                        _context.next = 73;
                        return tc("同学，你在看什么书啊？", pp.you);

                    case 73:
                        _context.next = 75;
                        return tc("少儿不宜，别问了～", pp.gaoxiangchen);

                    case 75:
                        _context.next = 77;
                        return tm("据说最近上映了这本书的3D电影啊", "你也喜欢韩寒啊？");

                    case 77:
                        _result4 = _context.sent;

                        if (!(_result4 == 0)) {
                            _context.next = 84;
                            break;
                        }

                        _context.next = 81;
                        return tc("矮呦～同道中人", pp.gaoxiangchen);

                    case 81:
                        v.amity.gaoxiangchen = v.amity.gaoxiangchen + 1;
                        _context.next = 86;
                        break;

                    case 84:
                        _context.next = 86;
                        return tc("韩你妹！别烦我！", pp.gaoxiangchen);

                    case 86:
                        _context.next = 88;
                        return th(0, 0, 0);

                    case 88:
                        _context.next = 90;
                        return tc("几分钟后。。。");

                    case 90:
                        _context.next = 92;
                        return tc("一个学长模样的人走上讲台。");

                    case 92:
                        _context.next = 94;
                        return th(0, 0, pp.daijun);

                    case 94:
                        _context.next = 96;
                        return th(0, pp.daijun, 0);

                    case 96:
                        _context.next = 98;
                        return tc("大家好，我是物电科协的会长戴俊。", pp.daijun);

                    case 98:
                        _context.next = 100;
                        return tm("认真听讲", "埋头睡觉");

                    case 100:
                        _result5 = _context.sent;

                        if (!(_result5 == 0)) {
                            _context.next = 126;
                            break;
                        }

                        _context.next = 104;
                        return tcc("今天主要为大家介绍神大与科协的一些情况。");

                    case 104:
                        _context.next = 106;
                        return tcc("首先，电子神大，顾名思义，是一所以研究电子技术为主的大学。因此，我们学校有很多的电子设计比赛。参加电子设计比赛，是我们科协存在的主要目的之一。");

                    case 106:
                        _context.next = 108;
                        return tcc("电子设计比赛一般由学院或学校教务处或教育部发起，由某个学院承办。目前电子设计比赛是每个月一次，比赛一般有一、二、三等奖，获奖后可以得到奖金或奖品及获奖证书。");

                    case 108:
                        _context.next = 110;
                        return tcc("获奖证书可以用来增加素质分和创新学分，还可以找工作时用来装X，奖金可以用来购买元器件及仪器，还可以用来购买一些小道具。奖品则可以用来提高自身技术。");

                    case 110:
                        _context.next = 112;
                        return tcc("参加电子比赛一般由三人组队，学院间自由组队。但是由于一开始各学院间交流较少，所以一般选择本院学生进行组队。后期由于认识的人多了，选择的余地会更大一些。");

                    case 112:
                        _context.next = 114;
                        return tcc("对于参加比赛，科协能够提供给你们的有器件、仪器、学长三种资源。器件方面，由于我们是小科协，比较穷，没法给你们提供太多东西，主要还是要自己去买。");

                    case 114:
                        _context.next = 116;
                        return tcc("买器件有三种途径：一是城隍庙，在沙河，需要乘坐校车去。缺点是购买数量少的话，价格会非常贵。优点则是可以种类较多，并且可以快速地购买到需要的元件。");

                    case 116:
                        _context.next = 118;
                        return tcc("二是德律元件，是一个学长开的元件店。缺点是价格略贵，种类较少，优点则是距离较近，就在沙河，可以节省路费，并且可以免费享受咨询服务。");

                    case 118:
                        _context.next = 120;
                        return tcc("三是网购，优点是便宜，缺点是耗时较长。");

                    case 120:
                        _context.next = 122;
                        return tcc("除了以上的三个地点之外，还可以找微固的陈囧学长购买一些小道具。");

                    case 122:
                        _context.next = 124;
                        return tcc("仪器方面，目前你们主要需要烙铁，科协则可以为你们提供示波器和函数发生器以及电源。不过由于我们是小科协，所以仪器数量较少，人多时工作效率可能会下降。");

                    case 124:
                        _context.next = 136;
                        break;

                    case 126:
                        _context.next = 128;
                        return ts(img.black);

                    case 128:
                        _context.next = 130;
                        return th(0, 0, 0);

                    case 130:
                        _context.next = 132;
                        return ts(img.jiaoshi);

                    case 132:
                        _context.next = 134;
                        return th(0, pp.daijun, 0);

                    case 134:
                        _context.next = 136;
                        return tc("一觉醒来...会长还在讲...");

                    case 136:
                        _context.next = 138;
                        return tcc("学长方面，我们科协目前有12级学长5人，13级8人。经常在科协混的有。。。");

                    case 138:
                        _context.next = 140;
                        return th(0, pp.chenguo, 0);

                    case 140:
                        _context.next = 142;
                        return tc(pp.chenguo.name + "学长，独臂程序员，擅长嵌入式开发。----" + pp.daijun.name);

                    case 142:
                        _context.next = 144;
                        return th(0, pp.zhangfai, 0);

                    case 144:
                        _context.next = 146;
                        return tc(pp.zhangfai.name + "学长，人赢典范，喜欢涉猎电子设计所有相关领域，特别是FPGA方面----" + pp.daijun.name);

                    case 146:
                        _context.next = 148;
                        return th(0, pp.tanjinchuan, 0);

                    case 148:
                        _context.next = 150;
                        return tc("谭劲船，擅长模拟电路设计。----" + pp.daijun.name);

                    case 150:
                        _context.next = 152;
                        return th(0, pp.tanchengzi, 0);

                    case 152:
                        _context.next = 154;
                        return tc("谭橙子，擅长嵌入式开发。----" + pp.daijun.name);

                    case 154:
                        _context.next = 156;
                        return th(0, pp.daijun, 0);

                    case 156:
                        _context.next = 158;
                        return tc("最后是我，擅长模拟电路设计。", pp.daijun);

                    case 158:
                        _context.next = 160;
                        return tcc("比赛期间你们可以向学长寻求帮助。另外，有的比赛还可以和学长组队。");

                    case 160:
                        _context.next = 162;
                        return tcc("接下来是科协投名状时间。");

                    case 162:
                        _context.next = 164;
                        return tcc("选择模拟电路方向的同学用7805做一个5V电源。\n选择数字电路方向的同学用555做一个流水灯。\n你决定选择（重要选项）");

                    case 164:
                        _context.next = 166;
                        return tm("数字", "模拟", "兼修");

                    case 166:
                        _result6 = _context.sent;

                        if (_result6 == 0) {
                            v.basic.way = 0;
                        } else if (_result6 == 1) {
                            v.basic.way = 1;
                        } else {
                            v.basic.way = 2;
                        }
                        _context.next = 170;
                        return tcc("宣讲会到此结束，大家各回各家各找各妈吧~");

                    case 170:
                        _context.next = 172;
                        return th(0, 0, 0);

                    case 172:
                        _context.next = 174;
                        return tc("科协的招新宣讲会结束了，你决定跟着会长去科协参观");

                    case 174:
                        //
                        //{
                        //    let result = yield tm("跟着会长去科协参观", "回宿舍咯")
                        //    if (result == 0) {
                        //        //第一次进入科协
                        //        p.kexie_first();
                        //    } else {               
                        //        return "home";
                        //    }
                        //}
                        setTimeout(function () {
                            plot_cb();
                        }, 0);

                    case 175:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this);
    });
});