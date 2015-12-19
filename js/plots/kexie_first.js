ts(res.img.keamenkou, 500);
ts(res.img.kealouti, 500);
ts(res.img.kexiemen, 1000);
ts(res.img.kexie0, 2000);
tc("你和其他听讲座的同学来到了干净整洁、朝气蓬勃的物电科协。");
th(0, pp.daijun, 0);
tc("那么，这里就是物电科协了。由于你们是新来的，所以暂时还没有你们的固定位置。", pp.daijun);
th(pp.chenguo, pp.tanchengzi, pp.tanjinchuan);
tc("欢迎欢迎", "众人");
tc("这几个就是这次的新人了吗？看起来这次的新人质量还不错嘛。", pp.chenguo);
th(pp.chenguo, 0, pp.gaoxiangchen);
tc("看来你是这次新人中素质最好的一个。", pp.chenguo);
tc("……你怎么知道？", pp.gaoxiangchen);
tc("物电科协，没有普通人。\n你以后就懂了。", pp.chenguo);
tc("……", pp.gaoxiangchen);
th(0, 0, 0);
ts(res.img.kexie2, 10);
var chat_times = 2;

while (chat_times > 0) {
    th(0, 0, 0)
    tc("你选择和谁聊天（剩余" + chat_times +
        "次）")
    var result = tm(pp.daijun.name, pp.chenguo.name, pp.tanjinchuan.name,
        pp.tanchengzi.name, "离开")
    chat_times = chat_times - 1;

    if (result == 0) { //daijun 
        th(0, pp.daijun, 0)
        if (v.basic.way == 1 || v.basic.way == 2) { //模拟
            tc("刚才宣讲会的时候我就看到你天庭饱满，地阁方圆，是个搞模拟电路的好苗子。", pp.daijun)
            tc("我来问你几个问题吧。", pp.daijun)
        } else {
            tc("你和我不是一个方向，去找数字电路方向的学长吧", pp.daijun)
        }
    } else if (result == 1) { //chenguo
        th(0, pp.chenguo, 0)
        tc("我的麒麟臂要发作了，你去找其他人聊吧。", pp.chenguo)
    } else if (result == 2) { //tanjinchuan
        var people = pp.tanjinchuan;
        th(0, people, 0);
        if (v.basic.way == 0 || v.basic.way == 1) {

            tc("我看你天庭饱满，地阁方圆，是个搞数字电路的好苗子。", people)
            tc("问你几个问题，测试一下你的水平。", people)
            tc("问题一：STC89C52单片机ROM多大?", people)
            var result = tm("4KB", "8KB", "16KB");
            var right = true;
            do {
                if (result != 1) {
                    right = false;
                    break;
                }
                tc("问题二：74HC和74LS哪个是CMOS电平?", people)
                var result = tm("74HC", "74LS");
                if (result != 0) {

                    right = false;
                    break;
                }
                tc("问题三：我右胳膊肘边的仪器叫什么？", people)
                var result = tm("电源", "示波器", "函数发生器");
                if (result != 1) {
                    right = false;

                }
            }
            while (false);
            if (right == true) {

                tc(people.name +
                    "学长好感度+1\n数字电路技能+1", 0, 0, color_award)
                v.skill.digital_circuit = v.skill.digital_circuit + 1;
                tc("去和其他人聊聊吧。", people)
            } else {

                tc("不给力啊骚年～", people)
            }
        } else {

            tc("你和我不是同一个方向，去找模拟电路方向的学长吧", pp.people)
        }
    } else if (result == 3) { //tanchengzi
        var people = pp.tanchengzi;
        th(0, people, 0);
        if (v.basic.way == 0 || v.basic.way == 1) {

            if (v.basic.year != 2014) {

                tc("你看起来很沮丧啊，就像高考失利才来了这里似的。", people)
            } else {

                tc("你看起来很沮丧啊，就像复读失败才来了这里似的。", people)
            }
            tc("...", pp.you)
            tc("哈哈，问你几个问题，活跃一下气氛。", people)
            tc("问题一：STC89C52单片机几个IO口？", people)
            var result = tm("24个", "32个", "36个");
            var right = true;
            do {

                if (result != 1) {
                    right = false;
                    break;
                }
                tc("问题二：STC是什么意思？", people)
                var result = tm("宏晶科技", "意法半导体", "德州仪器");
                if (result != 0) {

                    right = false;
                    break;
                }
                tc("问题三：我手里拿的是什么？", people)
                var result = tm("开发板", "遥控器", "单片机");
                if (result != 1) {

                    right = false;
                    break;
                }

            }
            while (false);
            if (right == true) {




                tc(people.name + "学长好感度+1\n数字电路技能+1", 0, 0, color_award);
                v.skill.digital_circuit = v.skill.digital_circuit + 1;



                tc("去和其他人聊聊吧。", people)
            } else {



                tc("继续努力吧。", people)
            }
        } else {

            tc("你和我不是一个同方向，去找模拟电路方向的学长吧", pp.people)
        }


    } else if (result == 4) {
        return exit();

    }

}
th(0, 0, 0);
tc("参观完科协，你回到了宿舍。");
return exit();

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