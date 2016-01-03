"use strict";

define(["res", "v", "sys", "_"], function (res, v, sys, _) {
    return regeneratorRuntime.mark(function _callee(plot_cb) {
        var ts, tc, tcc, tcn, th, tm, tmood, img, gap, pp, chat_times, get_talk, items, chatting, result, a, b, _result, _a, _b, _a2, _b2, _a3, _b3;

        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        get_talk = function get_talk(data) {
                            return "与" + data + "交谈";
                        };

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
                        _context.next = 14;
                        return ts(res.img.keamenkou, 500);

                    case 14:
                        _context.next = 16;
                        return ts(res.img.kealouti, 500);

                    case 16:
                        _context.next = 18;
                        return ts(res.img.kexiemen, 1000);

                    case 18:
                        _context.next = 20;
                        return ts(res.img.kexie0, 2000);

                    case 20:
                        _context.next = 22;
                        return tc("你和其他听讲座的同学来到了干净整洁、朝气蓬勃的物电科协。");

                    case 22:
                        _context.next = 24;
                        return th(0, pp.daijun, 0);

                    case 24:
                        _context.next = 26;
                        return tc("那么，这里就是物电科协了。由于你们是新来的，所以暂时还没有你们的固定位置。", pp.daijun);

                    case 26:
                        _context.next = 28;
                        return th(pp.chenguo, pp.tanchengzi, pp.tanjinchuan);

                    case 28:
                        _context.next = 30;
                        return tc("欢迎欢迎~~", "众人");

                    case 30:
                        _context.next = 32;
                        return tc("这几个就是这次的新人了吗？看起来这次的新人质量还不错嘛。", pp.chenguo);

                    case 32:
                        _context.next = 34;
                        return tc("支持，威武，有希望了。", pp.tanjinchuan);

                    case 34:
                        _context.next = 36;
                        return tc("哼，不知道有几个人能坚持到最后。", pp.tanchengzi);

                    case 36:
                        _context.next = 38;
                        return tc("说起来，说好的学妹呢？", pp.chenguo);

                    case 38:
                        _context.next = 40;
                        return tc("...", pp.tanjinchuan);

                    case 40:
                        _context.next = 42;
                        return tc("...", pp.tanchengzi);

                    case 42:
                        _context.next = 44;
                        return th(0, 0, 0);

                    case 44:
                        _context.next = 46;
                        return ts(res.img.kexie2, 1000);

                    case 46:
                        chat_times = 2;
                        items = new Array(get_talk(pp.daijun.name), get_talk(pp.chenguo.name), get_talk(pp.tanjinchuan.name), get_talk(pp.tanchengzi.name), get_talk(pp.zhangfai.name), "离开");

                        items.forEach(function (v, i) {
                            items[i] = {
                                type: "btn",
                                data: v
                            };
                        });
                        chatting = true;

                    case 50:
                        if (!chatting) {
                            _context.next = 148;
                            break;
                        }

                        _context.next = 53;
                        return th(0, 0, 0);

                    case 53:
                        _context.next = 55;
                        return tcn("你决定");

                    case 55:
                        _context.next = 57;
                        return tm(items);

                    case 57:
                        result = _context.sent;

                        items[result].type = "disabled_btn";

                        _context.t0 = result;
                        _context.next = _context.t0 === 0 ? 62 : _context.t0 === 1 ? 85 : _context.t0 === 2 ? 102 : _context.t0 === 3 ? 125 : _context.t0 === 4 ? 126 : _context.t0 === 5 ? 145 : 146;
                        break;

                    case 62:
                        _context.next = 64;
                        return th(0, pp.daijun, 0);

                    case 64:
                        a = pp.daijun;
                        b = pp.you;
                        _context.next = 68;
                        return tcn("你对这里感觉如何？", a);

                    case 68:
                        _context.next = 70;
                        return tm("棒极了", "有点乱");

                    case 70:
                        _result = _context.sent;
                        _context.t1 = _result;
                        _context.next = _context.t1 === 0 ? 74 : _context.t1 === 1 ? 79 : 84;
                        break;

                    case 74:
                        _context.next = 76;
                        return tc("感觉非常好！这就是我最想要的学习场所！", b);

                    case 76:
                        _context.next = 78;
                        return tc("不错，喜欢就好", a);

                    case 78:
                        return _context.abrupt("break", 84);

                    case 79:
                        _context.next = 81;
                        return tc("还好吧，就是有点乱……", b);

                    case 81:
                        _context.next = 83;
                        return tc("嘿嘿，习惯就好", a);

                    case 83:
                        return _context.abrupt("break", 84);

                    case 84:
                        return _context.abrupt("break", 146);

                    case 85:
                        _a = pp.chenguo;
                        _context.next = 88;
                        return th(0, _a, 0);

                    case 88:
                        _b = pp.you;
                        _context.next = 91;
                        return tc("我看你天庭饱满，地阁方圆，是个搞数字电路的好苗子。", _a);

                    case 91:
                        _context.next = 93;
                        return tc("学长你这都能看出来？", _b);

                    case 93:
                        _context.next = 95;
                        return tc("那当然，自从我断臂之后，各种感觉都变得敏锐了。说起来，你给我的感觉和别人不同。", _a);

                    case 95:
                        _context.next = 97;
                        return tcc("想必，你能在科协历史上留下浓墨重彩的一笔。");

                    case 97:
                        _context.next = 99;
                        return tc("这……", _b);

                    case 99:
                        _context.next = 101;
                        return tc("不好，我的麒麟臂要发作了，你去找其他人聊吧。", pp.chenguo);

                    case 101:
                        return _context.abrupt("break", 146);

                    case 102:
                        _a2 = pp.tanjinchuan;
                        _context.next = 105;
                        return th(0, _a2, 0);

                    case 105:
                        _b2 = pp.you;
                        _context.next = 108;
                        return tc("我带你参观一下整个科协吧。", _a2);

                    case 108:
                        _context.next = 110;
                        return tcc("我右手边这张桌子用来放置仪器，你可以在这里进行焊接和调试");

                    case 110:
                        _context.next = 112;
                        return ts(img.kexie0);

                    case 112:
                        _context.next = 114;
                        return tcc("这张大桌子是大家平时办公学习和放置杂物的地方");

                    case 114:
                        _context.next = 116;
                        return tcc("后面的小桌子上的电脑是这个实验室的管理老师用的，其他地方则用来放我们的杂物");

                    case 116:
                        _context.next = 118;
                        return ts(img.kexie1);

                    case 118:
                        _context.next = 120;
                        return tcc("这张桌子是科协大牛专用的桌子，如果你以后为科协做出了杰出贡献，那这个桌子就归你了。");

                    case 120:
                        _context.next = 122;
                        return tcc("基本情况就是这样了，希望你以后能为科协做出杰出贡献，独占这桌子～哈哈");

                    case 122:
                        _context.next = 124;
                        return ts(res.img.kexie2, 1000);

                    case 124:
                        return _context.abrupt("break", 146);

                    case 125:
                        return _context.abrupt("break", 146);

                    case 126:
                        _a3 = pp.zhangfai;
                        _b3 = pp.you;
                        _context.next = 130;
                        return th(0, _a3, 0);

                    case 130:
                        _context.next = 132;
                        return tc("能来到这里，说明你很有眼光啊", _a3);

                    case 132:
                        _context.next = 134;
                        return tc("学长谬赞了，我不过是对电子比较感兴趣。", _b3);

                    case 134:
                        _context.next = 136;
                        return tc("我知道我知道~这个学校基本所有的人都对电子感兴趣，但是走到这里的人却没几个。", _a3);

                    case 136:
                        _context.next = 138;
                        return tc("另外，讲真，电设搞得好，会有意想不到的收获！", _a3);

                    case 138:
                        _context.next = 140;
                        return tc("比如？", _b3);

                    case 140:
                        _context.next = 142;
                        return tc("比如一不小心就解决了个人问题，嘿嘿~", _a3);

                    case 142:
                        _context.next = 144;
                        return tc("……", _b3);

                    case 144:
                        return _context.abrupt("break", 146);

                    case 145:
                        chatting = false;

                    case 146:
                        _context.next = 50;
                        break;

                    case 148:
                        _context.next = 150;
                        return th(0, 0, 0);

                    case 150:
                        _context.next = 152;
                        return ts(img.black);

                    case 152:
                        _context.next = 154;
                        return tc("与此同时，IC科协");

                    case 154:
                        _context.next = 156;
                        return ts(img.ickexie1);

                    case 156:
                        a = pp.wangyixie;
                        b = pp.ouyangyang;
                        _context.next = 160;
                        return th(a, pp.what, b);

                    case 160:
                        _context.next = 162;
                        return tc("情况不容乐观 似乎已经有人觉察到了", a);

                    case 162:
                        _context.next = 164;
                        return tc("不可能！这件事不可能有其他人知道！", b);

                    case 164:
                        _context.next = 166;
                        return tc("可事实就是这样，招新人数急剧下降，新人质量也堪忧。一定是有人在阻碍我们科协发展。", a);

                    case 166:
                        _context.next = 168;
                        return tc("说不定是因为别的科协采用了新的招新方式。。。", b);

                    case 168:
                        _context.next = 170;
                        return tc("就算如此，我们的基本盘也不会被蚕食至此！", a);

                    case 170:
                        _context.next = 172;
                        return tc("……", b);

                    case 172:
                        _context.next = 174;
                        return tc("没办法了  只好开启那个了", a);

                    case 174:
                        _context.next = 176;
                        return tc("可是……", b);

                    case 176:
                        _context.next = 178;
                        return tc("没什么可是！照这种趋势继续下去，明年我们就亡协了！", a);

                    case 178:
                        _context.next = 180;
                        return tc("好，我这就去准备。", b);

                    case 180:
                        _context.next = 182;
                        return th(0, 0, 0);

                    case 182:
                        _context.next = 184;
                        return ts(img.black);

                    case 184:
                        _context.next = 186;
                        return tc("参观完物电科协，你回到了宿舍。");

                    case 186:

                        //    if (result == 0) { //daijun
                        //
                        //        //        if (v.basic.way == 1 || v.basic.way == 2) { //模拟
                        //        //            yield tc("刚才宣讲会的时候我就看到你天庭饱满，地阁方圆，是个搞模拟电路的好苗子。", pp.daijun)
                        //        //            yield tc("我来问你几个问题吧。", pp.daijun)
                        //        //        } else {
                        //        //            yield tc("你和我不是一个方向，去找数字电路方向的学长吧", pp.daijun)
                        //        //        }
                        //    } else if (result == 1) { //chenguo
                        //        yield th(0, pp.chenguo, 0)
                        //        yield tc("我的麒麟臂要发作了，你去找其他人聊吧。", pp.chenguo)
                        //    } else if (result == 2) { //tanjinchuan
                        //        var people = pp.tanjinchuan;
                        //        yield th(0, people, 0);
                        //        if (v.basic.way == 0 || v.basic.way == 1) {
                        //
                        //            yield tc("我看你天庭饱满，地阁方圆，是个搞数字电路的好苗子。", people)
                        //            yield tc("问你几个问题，测试一下你的水平。", people)
                        //            yield tc("问题一：STC89C52单片机ROM多大?", people)
                        //            var result = yield tm("4KB", "8KB", "16KB");
                        //            var right = true;
                        //            do {
                        //                if (result != 1) {
                        //                    right = false;
                        //                    break;
                        //                }
                        //                yield tc("问题二：74HC和74LS哪个是CMOS电平?", people)
                        //                var result = yield tm("74HC", "74LS");
                        //                if (result != 0) {
                        //
                        //                    right = false;
                        //                    break;
                        //                }
                        //                yield tc("问题三：我右胳膊肘边的仪器叫什么？", people)
                        //                var result = yield tm("电源", "示波器", "函数发生器");
                        //                if (result != 1) {
                        //                    right = false;
                        //
                        //                }
                        //            }
                        //            while (false);
                        //            if (right == true) {
                        //
                        //                yield tc(people.name +
                        //                    "学长好感度+1\n数字电路技能+1", 0, 0, color_award)
                        //                v.skill.digital_circuit = v.skill.digital_circuit + 1;
                        //                yield tc("去和其他人聊聊吧。", people)
                        //            } else {
                        //
                        //                yield tc("不给力啊骚年～", people)
                        //            }
                        //        } else {
                        //
                        //            yield tc("你和我不是同一个方向，去找模拟电路方向的学长吧", pp.people)
                        //        }
                        //    } else if (result == 3) { //tanchengzi
                        //        var people = pp.tanchengzi;
                        //        yield th(0, people, 0);
                        //        if (v.basic.way == 0 || v.basic.way == 1) {
                        //
                        //            if (v.basic.year != 2014) {
                        //
                        //                yield tc("你看起来很沮丧啊，就像高考失利才来了这里似的。", people)
                        //            } else {
                        //
                        //                yield tc("你看起来很沮丧啊，就像复读失败才来了这里似的。", people)
                        //            }
                        //            yield tc("...", pp.you)
                        //            yield tc("哈哈，问你几个问题，活跃一下气氛。", people)
                        //            yield tc("问题一：STC89C52单片机几个IO口？", people)
                        //            var result = yield tm("24个", "32个", "36个");
                        //            var right = true;
                        //            do {
                        //
                        //                if (result != 1) {
                        //                    right = false;
                        //                    break;
                        //                }
                        //                yield tc("问题二：STC是什么意思？", people)
                        //                var result = yield tm("宏晶科技", "意法半导体", "德州仪器");
                        //                if (result != 0) {
                        //
                        //                    right = false;
                        //                    break;
                        //                }
                        //                yield tc("问题三：我手里拿的是什么？", people)
                        //                var result = yield tm("开发板", "遥控器", "单片机");
                        //                if (result != 1) {
                        //
                        //                    right = false;
                        //                    break;
                        //                }
                        //
                        //            }
                        //            while (false);
                        //            if (right == true) {
                        //
                        //
                        //
                        //
                        //                yield tc(people.name + "学长好感度+1\n数字电路技能+1", 0, 0, color_award);
                        //                v.skill.digital_circuit = v.skill.digital_circuit + 1;
                        //
                        //
                        //
                        //                yield tc("去和其他人聊聊吧。", people)
                        //            } else {
                        //
                        //
                        //
                        //                yield tc("继续努力吧。", people)
                        //            }
                        //        } else {
                        //
                        //            yield tc("你和我不是一个同方向，去找模拟电路方向的学长吧", pp.people)
                        //        }
                        //
                        //
                        //    } else if (result == 4) {
                        //        return exit();
                        //
                        //    }

                        /*
                        //[[
                        戴俊： 修复烧坏的芯片
                        陈过： 看透别人的属性， 麒麟臂
                        谭劲船： 修复程序bug
                        谭橙子： 让代码自动增加
                        章付艾： 提高队伍幸运值
                        高向晨： 能与电路板沟通
                        李照： 提高电路性能
                        ]] //*/
                        setTimeout(function () {
                            plot_cb();
                        }, 0);

                    case 187:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this);
    });
});