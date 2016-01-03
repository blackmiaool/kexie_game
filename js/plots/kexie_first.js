ts(res.img.keamenkou, 500);
ts(res.img.kealouti, 500);
ts(res.img.kexiemen, 1000);
ts(res.img.kexie0, 2000);
tc("走出了品学楼,进入科研楼.长途跋涉后的你终于来到了干净整洁、朝气蓬勃的物电科协。");
tc("物电科协看起来是建立在普通实验室之上的,各种电子元件和仪器都堆在了白色的实验桌之上,毫无违和感.");
tc("看到会长带了人来,原本在科协埋头苦干的学长们都跑来迎接");
th(0, pp.daijun, 0);
tc("那么，这里就是物电科协了。由于你们是新来的，所以暂时还没有你们的固定位置。", pp.daijun);
th(pp.chenguo, pp.tanchengzi, pp.tanjinchuan);
tc("欢迎欢迎~~", "众人");

tc("这几个就是这次的新人了吗？看起来这次的新人质量还不错嘛。", pp.chenguo);
tc("支持，威武，有希望了。", pp.tanjinchuan);
tc("哼，不知道有几个人能坚持到最后。", pp.tanchengzi);
tc("说起来，说好的学妹呢？", pp.chenguo);
tc("...", pp.tanjinchuan);
tc("...", pp.tanchengzi);
th(0, 0, 0);
ts(res.img.kexie2, 1000);
var chat_times = 2;

function get_talk(data) {
    return `与${data}交谈`;
}
var items = new Array(get_talk(pp.daijun.name), get_talk(pp.chenguo.name), get_talk(pp.tanjinchuan.name), get_talk(pp.tanchengzi.name), get_talk(pp.zhangfai.name), "离开");
items.forEach(function (v, i) {
    items[i] = {
        type: "btn",
        data: v
    }
})
let chatting = true;
while (chatting) {
    th(0, 0, 0);
    tcn(`你决定`);
    var result = tm(items);
    items[result].type = "disabled_btn";

    switch (result) {
        case 0: //daijun
            th(0, pp.daijun, 0);
            let a = pp.daijun;
            let b = pp.you;
            tcn("你对这里感觉如何？", a); {
                let result = tm("棒极了", "有点乱");
                switch (result) {
                    case 0:
                        tc("感觉非常好！这就是我最想要的学习场所！", b);
                        tc("不错，喜欢就好", a);
                        break;
                    case 1:
                        tc("还好吧，就是有点乱……", b);
                        tc("嘿嘿，习惯就好", a);
                        tc(`${a.name}笑得很尴尬.`);
                        break;
                }
            }
            break;
        case 1: //chenguo            
            {
                let a = pp.chenguo;
                th(0, a, 0);
                let b = pp.you;
                tc("我看你天庭饱满，地阁方圆，是个搞数字电路的好苗子。", a);
                tc(`${a.name}微笑地看着你`);
                tc("学长你这都能看出来？", b)
                tc("你不禁后退一步,心想这学长怎么和算命的似的...");
                tc("那当然，自从我断臂之后，各种感觉都变得敏锐了。说起来，你给我的感觉和别人不同。", a)
                tc(`${a.name}闭上了眼睛,然后猛然睁开(虽然你看不出区别)`);
                tcc("想必，你能在科协历史上留下浓墨重彩的一笔。");
                tc("这……", b);
                tc("你心中微动");
                tc("不好，我的麒麟臂要发作了，你去找其他人聊吧。", pp.chenguo);
            }
            break;
        case 2: //tanjinchuan
            {
                let a = pp.tanjinchuan;
                th(0, a, 0);
                let b = pp.you;
                tc("我带你参观一下整个科协吧。", a);
                tc(`${a.name}不由分说就带着你逛起了科协`);
                tcc("我右手边这张桌子用来放置仪器，你可以在这里进行焊接和调试");
                tc("你看到这个桌子上堆着一堆仪器,彰显着这个科协的土豪之气.桌面非常干净,似乎是有专人负责桌面卫生.");
                ts(img.kexie0);
                tcc("这张大桌子是大家平时办公学习和放置杂物的地方");
                tcc("后面的小桌子上的电脑是这个实验室的管理老师用的，其他地方则用来放我们的杂物");
                tc("你发现这两张桌子上已经没有空位了");
                ts(img.kexie1);
                tcc("这张桌子是科协大牛专用的桌子，如果你以后为科协做出了杰出贡献，那这个桌子就归你了。");
                tc("这张桌上空无一物,似乎在等待着自己的主人.");
                tcc("基本情况就是这样了，希望你以后能为科协做出杰出贡献，独占这桌子～哈哈");
                th(0, 0, 0);
                ts(res.img.kexie2, 1000);

            }
            break;
        case 3: //tanchengzi
            {
                let a = pp.tanchengzi;
                th(0, a, 0);
                let b = pp.you;
                tc("这么说来你就是这一届的新人咯?看起来很普通嘛~",a);
                tc(`${a.name}面无表情地说着,手里把玩着一个黑色的东西`);
                tc("学长明鉴,我确实只是个普通人而已",b);
                tc("不错,有自知之明.既然进了科协,就要守科协的规矩,别人的东西不要随便动,懂了么?",a);
                tc("懂了",b);
                tc("你很是无语,不知哪里得罪这学长了");
                tc("好,没事就回宿舍吧,等要干活了再来",a);
            }
            break;
        case 4: //zhangfai
            {
                let a = pp.zhangfai;
                let b = pp.you;
                th(0, a, 0);
                tc("能来到这里，说明你很有眼光啊", a);
                tc("学长谬赞了，我不过是对电子比较感兴趣。", b);
                tc("我知道我知道~这个学校基本所有的人都对电子感兴趣，但是走到这里的人却没几个。", a);
                tc("另外，讲真，电设搞得好，会有意想不到的收获！", a);
                tc("比如？", b);
                tc("比如一不小心就解决了个人问题，嘿嘿~", a);
                tc(`${a.name}并不猥琐地笑着`);
                tc("……", b);
            }
            break;
        case 5:
            chatting = false;
    }
}
th(0, 0, 0);

ts(img.black);
tc("与此同时，IC科协");
ts(img.ickexie1);
let a = pp.wangyixie;
let b = pp.ouyangyang;

th(a, pp.what, b);
tc("两个人站在IC科协的储物柜旁,气氛似乎很沉闷");
tc("情况不容乐观 似乎已经有人觉察到了", a);
tc("不可能！这件事不可能有其他人知道！", b);
tc("可事实就是这样，招新人数急剧下降，新人质量也堪忧。一定是有人在阻碍我们科协发展。", a);
tc("说不定是因为别的科协采用了新的招新方式。。。", b);
tc("就算如此，我们的基本盘也不会被蚕食至此！", a);
tc("……", b);
tc("没办法了  只好开启那个了", a);
tc("可是……", b);
tc("没什么可是！照这种趋势继续下去，明年我们就亡协了！", a);
tc("好，我这就去准备。", b);
th(0, 0, 0);

ts(img.black);
tc("参观完物电科协，你回到了宿舍。");



//    if (result == 0) { //daijun 
//
//        //        if (v.basic.way == 1 || v.basic.way == 2) { //模拟
//        //            tc("刚才宣讲会的时候我就看到你天庭饱满，地阁方圆，是个搞模拟电路的好苗子。", pp.daijun)
//        //            tc("我来问你几个问题吧。", pp.daijun)
//        //        } else {
//        //            tc("你和我不是一个方向，去找数字电路方向的学长吧", pp.daijun)
//        //        } 
//    } else if (result == 1) { //chenguo
//        th(0, pp.chenguo, 0)
//        tc("我的麒麟臂要发作了，你去找其他人聊吧。", pp.chenguo)
//    } else if (result == 2) { //tanjinchuan
//        var people = pp.tanjinchuan;
//        th(0, people, 0);
//        if (v.basic.way == 0 || v.basic.way == 1) {
//
//            tc("我看你天庭饱满，地阁方圆，是个搞数字电路的好苗子。", people)
//            tc("问你几个问题，测试一下你的水平。", people)
//            tc("问题一：STC89C52单片机ROM多大?", people)
//            var result = tm("4KB", "8KB", "16KB");
//            var right = true;
//            do {
//                if (result != 1) {
//                    right = false;
//                    break;
//                }
//                tc("问题二：74HC和74LS哪个是CMOS电平?", people)
//                var result = tm("74HC", "74LS");
//                if (result != 0) {
//
//                    right = false;
//                    break;
//                }
//                tc("问题三：我右胳膊肘边的仪器叫什么？", people)
//                var result = tm("电源", "示波器", "函数发生器");
//                if (result != 1) {
//                    right = false;
//
//                }
//            }
//            while (false);
//            if (right == true) {
//
//                tc(people.name +
//                    "学长好感度+1\n数字电路技能+1", 0, 0, color_award)
//                v.skill.digital_circuit = v.skill.digital_circuit + 1;
//                tc("去和其他人聊聊吧。", people)
//            } else {
//
//                tc("不给力啊骚年～", people)
//            }
//        } else {
//
//            tc("你和我不是同一个方向，去找模拟电路方向的学长吧", pp.people)
//        }
//    } else if (result == 3) { //tanchengzi
//        var people = pp.tanchengzi;
//        th(0, people, 0);
//        if (v.basic.way == 0 || v.basic.way == 1) {
//
//            if (v.basic.year != 2014) {
//
//                tc("你看起来很沮丧啊，就像高考失利才来了这里似的。", people)
//            } else {
//
//                tc("你看起来很沮丧啊，就像复读失败才来了这里似的。", people)
//            }
//            tc("...", pp.you)
//            tc("哈哈，问你几个问题，活跃一下气氛。", people)
//            tc("问题一：STC89C52单片机几个IO口？", people)
//            var result = tm("24个", "32个", "36个");
//            var right = true;
//            do {
//
//                if (result != 1) {
//                    right = false;
//                    break;
//                }
//                tc("问题二：STC是什么意思？", people)
//                var result = tm("宏晶科技", "意法半导体", "德州仪器");
//                if (result != 0) {
//
//                    right = false;
//                    break;
//                }
//                tc("问题三：我手里拿的是什么？", people)
//                var result = tm("开发板", "遥控器", "单片机");
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
//                tc(people.name + "学长好感度+1\n数字电路技能+1", 0, 0, color_award);
//                v.skill.digital_circuit = v.skill.digital_circuit + 1;
//
//
//
//                tc("去和其他人聊聊吧。", people)
//            } else {
//
//
//
//                tc("继续努力吧。", people)
//            }
//        } else {
//
//            tc("你和我不是一个同方向，去找模拟电路方向的学长吧", pp.people)
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