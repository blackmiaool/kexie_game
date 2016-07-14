"use strict";

define(["require", "res", "v", "system-sys", "_", "system-plotApi"], function (require, res, v, sys, _, plot) {
    return regeneratorRuntime.mark(function _callee(plot_cb) {
        var ts, tc, tcc, tcn, th, tm, tmood, img, gap, pp, chat_times, get_talk, items, chatting, result, a, b, _result, _a, _b, _a2, _b2, _a3, _b3, _a4, _b4;

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
                        return tc("走出了品学楼,进入科研楼.长途跋涉后的你终于来到了干净整洁、朝气蓬勃的物电科协。");

                    case 22:
                        _context.next = 24;
                        return tc("物电科协看起来是建立在普通实验室之上的,各种电子元件和仪器都堆在了白色的实验桌之上,毫无违和感.");

                    case 24:
                        _context.next = 26;
                        return tc("看到会长带了人来,原本在科协埋头苦干的学长们都跑来迎接");

                    case 26:
                        _context.next = 28;
                        return th(0, pp.daijun, 0);

                    case 28:
                        _context.next = 30;
                        return tc("那么，这里就是物电科协了。由于你们是新来的，所以暂时还没有你们的固定位置。", pp.daijun);

                    case 30:
                        _context.next = 32;
                        return th(pp.chenguo, pp.tanchengzi, pp.tanjinchuan);

                    case 32:
                        _context.next = 34;
                        return tc("欢迎欢迎~~", "众人");

                    case 34:
                        _context.next = 36;
                        return tc("这几个就是这次的新人了吗？看起来这次的新人质量还不错嘛。", pp.chenguo);

                    case 36:
                        _context.next = 38;
                        return tc("支持，威武，有希望了。", pp.tanjinchuan);

                    case 38:
                        _context.next = 40;
                        return tc("哼，不知道有几个人能坚持到最后。", pp.tanchengzi);

                    case 40:
                        _context.next = 42;
                        return tc("说起来，说好的学妹呢？", pp.chenguo);

                    case 42:
                        _context.next = 44;
                        return tc("...", pp.tanjinchuan);

                    case 44:
                        _context.next = 46;
                        return tc("...", pp.tanchengzi);

                    case 46:
                        _context.next = 48;
                        return th(0, 0, 0);

                    case 48:
                        _context.next = 50;
                        return ts(res.img.kexie2, 1000);

                    case 50:
                        chat_times = 2;
                        items = new Array(get_talk(pp.daijun.name), get_talk(pp.chenguo.name), get_talk(pp.tanjinchuan.name), get_talk(pp.tanchengzi.name), get_talk(pp.zhangfai.name), "离开");

                        items.forEach(function (v, i) {
                            items[i] = {
                                type: "btn",
                                data: v
                            };
                        });
                        chatting = true;

                    case 54:
                        if (!chatting) {
                            _context.next = 192;
                            break;
                        }

                        _context.next = 57;
                        return th(0, 0, 0);

                    case 57:
                        _context.next = 59;
                        return tcn("你决定");

                    case 59:
                        _context.next = 61;
                        return tm(items);

                    case 61:
                        result = _context.sent;

                        items[result].type = "disabled_btn";

                        _context.t0 = result;
                        _context.next = _context.t0 === 0 ? 66 : _context.t0 === 1 ? 91 : _context.t0 === 2 ? 116 : _context.t0 === 3 ? 149 : _context.t0 === 4 ? 168 : _context.t0 === 5 ? 189 : 190;
                        break;

                    case 66:
                        _context.next = 68;
                        return th(0, pp.daijun, 0);

                    case 68:
                        a = pp.daijun;
                        b = pp.you;
                        _context.next = 72;
                        return tcn("你对这里感觉如何？", a);

                    case 72:
                        _context.next = 74;
                        return tm("棒极了", "有点乱");

                    case 74:
                        _result = _context.sent;
                        _context.t1 = _result;
                        _context.next = _context.t1 === 0 ? 78 : _context.t1 === 1 ? 83 : 90;
                        break;

                    case 78:
                        _context.next = 80;
                        return tc("感觉非常好！这就是我最想要的学习场所！", b);

                    case 80:
                        _context.next = 82;
                        return tc("不错，喜欢就好", a);

                    case 82:
                        return _context.abrupt("break", 90);

                    case 83:
                        _context.next = 85;
                        return tc("还好吧，就是有点乱……", b);

                    case 85:
                        _context.next = 87;
                        return tc("嘿嘿，习惯就好", a);

                    case 87:
                        _context.next = 89;
                        return tc(a.name + "笑得很尴尬.");

                    case 89:
                        return _context.abrupt("break", 90);

                    case 90:
                        return _context.abrupt("break", 190);

                    case 91:
                        _a = pp.chenguo;
                        _context.next = 94;
                        return th(0, _a, 0);

                    case 94:
                        _b = pp.you;
                        _context.next = 97;
                        return tc("我看你天庭饱满，地阁方圆，是个搞数字电路的好苗子。", _a);

                    case 97:
                        _context.next = 99;
                        return tc(_a.name + "微笑地看着你");

                    case 99:
                        _context.next = 101;
                        return tc("学长你这都能看出来？", _b);

                    case 101:
                        _context.next = 103;
                        return tc("你不禁后退一步,心想这学长怎么和算命的似的...");

                    case 103:
                        _context.next = 105;
                        return tc("那当然，自从我断臂之后，各种感觉都变得敏锐了。说起来，你给我的感觉和别人不同。", _a);

                    case 105:
                        _context.next = 107;
                        return tc(_a.name + "闭上了眼睛,然后猛然睁开(虽然你看不出区别)");

                    case 107:
                        _context.next = 109;
                        return tcc("想必，你能在科协历史上留下浓墨重彩的一笔。");

                    case 109:
                        _context.next = 111;
                        return tc("这……", _b);

                    case 111:
                        _context.next = 113;
                        return tc("你心中微动");

                    case 113:
                        _context.next = 115;
                        return tc("不好，我的麒麟臂要发作了，你去找其他人聊吧。", pp.chenguo);

                    case 115:
                        return _context.abrupt("break", 190);

                    case 116:
                        _a2 = pp.tanjinchuan;
                        _context.next = 119;
                        return th(0, _a2, 0);

                    case 119:
                        _b2 = pp.you;
                        _context.next = 122;
                        return tc("我带你参观一下整个科协吧。", _a2);

                    case 122:
                        _context.next = 124;
                        return tc(_a2.name + "不由分说就带着你逛起了科协");

                    case 124:
                        _context.next = 126;
                        return tcc("我右手边这张桌子用来放置仪器，你可以在这里进行焊接和调试");

                    case 126:
                        _context.next = 128;
                        return tc("你看到这个桌子上堆着一堆仪器,彰显着这个科协的土豪之气.桌面非常干净,似乎是有专人负责桌面卫生.");

                    case 128:
                        _context.next = 130;
                        return ts(img.kexie0);

                    case 130:
                        _context.next = 132;
                        return tcc("这张大桌子是大家平时办公学习和放置杂物的地方");

                    case 132:
                        _context.next = 134;
                        return tcc("后面的小桌子上的电脑是这个实验室的管理老师用的，其他地方则用来放我们的杂物");

                    case 134:
                        _context.next = 136;
                        return tc("你发现这两张桌子上已经没有空位了");

                    case 136:
                        _context.next = 138;
                        return ts(img.kexie1);

                    case 138:
                        _context.next = 140;
                        return tcc("这张桌子是科协大牛专用的桌子，如果你以后为科协做出了杰出贡献，那这个桌子就归你了。");

                    case 140:
                        _context.next = 142;
                        return tc("这张桌上空无一物,似乎在等待着自己的主人.");

                    case 142:
                        _context.next = 144;
                        return tcc("基本情况就是这样了，希望你以后能为科协做出杰出贡献，独占这桌子～哈哈");

                    case 144:
                        _context.next = 146;
                        return th(0, 0, 0);

                    case 146:
                        _context.next = 148;
                        return ts(res.img.kexie2, 1000);

                    case 148:
                        return _context.abrupt("break", 190);

                    case 149:
                        _a3 = pp.tanchengzi;
                        _context.next = 152;
                        return th(0, _a3, 0);

                    case 152:
                        _b3 = pp.you;
                        _context.next = 155;
                        return tc("这么说来你就是这一届的新人咯?看起来很普通嘛~", _a3);

                    case 155:
                        _context.next = 157;
                        return tc(_a3.name + "面无表情地说着,手里把玩着一个黑色的东西");

                    case 157:
                        _context.next = 159;
                        return tc("学长明鉴,我确实只是个普通人而已", _b3);

                    case 159:
                        _context.next = 161;
                        return tc("不错,有自知之明.既然进了科协,就要守科协的规矩,别人的东西不要随便动,懂了么?", _a3);

                    case 161:
                        _context.next = 163;
                        return tc("懂了", _b3);

                    case 163:
                        _context.next = 165;
                        return tc("你很是无语,不知哪里得罪这学长了");

                    case 165:
                        _context.next = 167;
                        return tc("好,没事就回宿舍吧,等要干活了再来", _a3);

                    case 167:
                        return _context.abrupt("break", 190);

                    case 168:
                        _a4 = pp.zhangfai;
                        _b4 = pp.you;
                        _context.next = 172;
                        return th(0, _a4, 0);

                    case 172:
                        _context.next = 174;
                        return tc("能来到这里，说明你很有眼光啊", _a4);

                    case 174:
                        _context.next = 176;
                        return tc("学长谬赞了，我不过是对电子比较感兴趣。", _b4);

                    case 176:
                        _context.next = 178;
                        return tc("我知道我知道~这个学校基本所有的人都对电子感兴趣，但是走到这里的人却没几个。", _a4);

                    case 178:
                        _context.next = 180;
                        return tc("另外，讲真，电设搞得好，会有意想不到的收获！", _a4);

                    case 180:
                        _context.next = 182;
                        return tc("比如？", _b4);

                    case 182:
                        _context.next = 184;
                        return tc("比如一不小心就解决了个人问题，嘿嘿~", _a4);

                    case 184:
                        _context.next = 186;
                        return tc(_a4.name + "并不猥琐地笑着");

                    case 186:
                        _context.next = 188;
                        return tc("……", _b4);

                    case 188:
                        return _context.abrupt("break", 190);

                    case 189:
                        chatting = false;

                    case 190:
                        _context.next = 54;
                        break;

                    case 192:
                        _context.next = 194;
                        return th(a, pp.daijun, b);

                    case 194:
                        _context.next = 196;
                        return tc("那么，今天基本就这样吧，等待我们的下一步通知吧。", pp.daijun);

                    case 196:
                        _context.next = 198;
                        return th(0, 0, 0);

                    case 198:
                        _context.next = 200;
                        return tc("参观完科协，你带着复杂的心情回了宿舍。");

                    case 200:
                        _context.next = 202;
                        return ts(img.black);

                    case 202:
                        _context.next = 204;
                        return tc("与此同时，IC科协");

                    case 204:
                        _context.next = 206;
                        return ts(img.ickexie1);

                    case 206:
                        a = pp.wangyixie;
                        b = pp.ouyangyang;
                        _context.next = 210;
                        return th(a, pp.what, b);

                    case 210:
                        _context.next = 212;
                        return tc("两个人站在IC科协的储物柜旁,气氛似乎很沉闷");

                    case 212:
                        _context.next = 214;
                        return tc("情况不容乐观 似乎已经有人觉察到了", a);

                    case 214:
                        _context.next = 216;
                        return tc("不可能！这件事不可能有其他人知道！", b);

                    case 216:
                        _context.next = 218;
                        return tc("可事实就是这样，招新人数急剧下降，新人质量也堪忧。一定是有人在阻碍我们科协发展。", a);

                    case 218:
                        _context.next = 220;
                        return tc("说不定是因为别的科协采用了新的招新方式。。。", b);

                    case 220:
                        _context.next = 222;
                        return tc("就算如此，我们的基本盘也不会被蚕食至此！", a);

                    case 222:
                        _context.next = 224;
                        return tc("……", b);

                    case 224:
                        _context.next = 226;
                        return tc("没办法了  只好开启那个了", a);

                    case 226:
                        _context.next = 228;
                        return tc("可是……", b);

                    case 228:
                        _context.next = 230;
                        return tc("没什么可是！照这种趋势继续下去，明年我们就亡协了！", a);

                    case 230:
                        _context.next = 232;
                        return tc("好，我这就去准备", b);

                    case 232:
                        _context.next = 234;
                        return th(0, 0, 0);

                    case 234:
                        _context.next = 236;
                        return ts(img.black);

                    case 236:
                        _context.next = 238;
                        return tc("十天后，你收到了科协的开会通知");

                    case 238:
                        _context.next = 240;
                        return ts(img.jiaoshi);

                    case 240:
                        _context.next = 242;
                        return tc("你来到通知中提到的教室，等待学长们的到来");

                    case 242:
                        _context.next = 244;
                        return tc("20分钟后  戴俊带着其他几个学长来到教室，几个学长都一脸严肃，教室里顿时变得安静了。");

                    case 244:
                        _context.next = 246;
                        return th(pp.tanjinchuan, pp.daijun, pp.chenguo);

                    case 246:
                        _context.next = 248;
                        return tc("根据我们的探子得到的消息，总协学院明天要举办第22届EE杯了", pp.daijun);

                    case 248:
                        _context.next = 250;
                        return tc("不错，EE杯分为大一大二大三三个组别，通常在学年初期举办。各大科协为了第一时间彰显自己科协的实力，吸引更多优秀人才，往往会对EE杯投入巨大的人力和物力", pp.chenguo);

                    case 250:
                        _context.next = 252;
                        return tc("虽然EE杯是总协举办的，但是总协并不会对总协自己的参赛队伍有任何偏袒", pp.daijun);

                    case 252:
                        _context.next = 254;
                        return tc("你们都知道的，我们只是一个小科协，所以之前在EE杯上取得的成绩并不突出，很少有人可以在EE杯中拿到一等奖", pp.daijun);

                    case 254:
                        _context.next = 256;
                        return tc("毕竟我们实力有限，所以不会说什么一定要拿到一等奖之类的话，你们每个队能拿到三等奖我们就很满足了", pp.daijun);

                    case 256:
                        _context.next = 258;
                        return tc("没错，只要能拿到三等奖，除了总协学院给出的微不足道的奖品之外，我们还会专门给你们提供我们内部的特殊奖品", pp.tanjinchuan);

                    case 258:
                        _context.next = 260;
                        return tc("而且，万一，我是说万一，你们有人拿到了一等奖，科协中的VIP位置就归你了。", pp.daijun);

                    case 260:
                        _context.next = 262;
                        return tc("我靠！不是吧!不是说好VIP座位等我拿到飞卡三等奖之后给我吗?!", pp.tanjinchuan);

                    case 262:
                        _context.next = 264;
                        return tc("淡定淡定，反正不大可能有人拿到EE杯一等的。。。", pp.daijun);

                    case 264:
                        _context.next = 266;
                        return tc("额。。好吧", pp.tanjinchuan);

                    case 266:
                        _context.next = 268;
                        return tc("那么今天的会就到这里，大家回去努力吧！", pp.daijun);

                    case 268:
                        _context.next = 270;
                        return th(0, 0, 0);

                    case 270:

                        //    if (result == 0) { //daijun
                        //
                        //        //        if (z.basic.way == 1 || z.basic.way == 2) { //模拟
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
                        //        if (z.basic.way == 0 || z.basic.way == 1) {
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
                        //                z.skill.digital_circuit = z.skill.digital_circuit + 1;
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
                        //        if (z.basic.way == 0 || z.basic.way == 1) {
                        //
                        //            if (z.basic.year != 2014) {
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
                        //                z.skill.digital_circuit = z.skill.digital_circuit + 1;
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

                    case 271:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this);
    });
});