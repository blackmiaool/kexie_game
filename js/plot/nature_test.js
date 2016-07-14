ts(res.img.tushuguanyejing);

tc("入学一段时间后，你对神大的陌生感逐渐消失。望着暮色中的图书馆，你陷入了沉思。");
tc("你接下来的选择会影响你的属性，你决定");
var result = tm("使用默认属性（不推荐）", "开始进行属性测试");
if (result == 1) {
    tc("首先请选择你的名字")
    var result, value = tm({
        type: "input_with_btn",
        data: {
            placeholder: "手动输入姓名（昵称）",
            btn: "确定",
            width: "25%",
        }
    }, "使用作者指定姓名：李厷叺", "系统随机生成姓名")
    console.log(1, result);
    console.log(2, typeof (result))

    if (result == 1) {
        z.basic.name = "李厷叺";
    } else if (result == 0) {
        z.basic.name = value;
    } else {

        z.basic.name = "张龙";
    }



    tc("你的人生意义是");
    var result = tm("发展科技", "及时行乐", "繁衍")
    if (result == 0) {
        z.basic.study_abt = z.basic.study_abt + 0.2
    } else if (result == 1) {
        z.basic.money_abt = z.basic.money_abt + 0.2
    } else {
        z.basic.work_abt = z.basic.work_abt + 0.2
    }


    tc("这三样东西，如果要你抛弃一样，你会选择");
    var result = tm("金钱", "智商", "意志力");
    if (result == 0) {
        z.basic.money_abt = z.basic.money_abt - 0.1
    } else if (result == 1) {
        z.basic.study_abt = z.basic.study_abt - 0.1
    } else {
        z.basic.work_abt = z.basic.work_abt - 0.1
    }

    tc("在大学里，你觉得这二者哪个更重要？");
    var result = tm("兄弟（姐妹）", "情人（配偶）");
    if (result == 1) {
        z.basic.work_abt = z.basic.work_abt - 0.1
    }
    tc("你高中除了学习高考知识，还做过")
    var result = tm("OI", "物竞", "数竞", "打工或者创业赚钱", "没做过别的，专心高考")
    if (result == 0) {
        z.experience.OI = true;
    } else if (result == 1) {
        z.experience.phy = true;
    } else if (result == 2) {
        z.experience.math = true;
    } else if (result == 3) {
        z.basic.money = z.basic.money + 4000;
    } else if (result == 4) {
        z.basic.work_abt = z.basic.work_abt + 0.1;
        tc("真是诚实的孩子，三把斧头都归你了。");
        tmood(res.img.axe);
    }
    tc("你的性别");
    var result = tm("男", "女");
    if (result == 1) {
        z.basic.work_abt = z.basic.work_abt - 0.1;
        z.basic.female = true;

    }
    tc("测试结束。");


}


tc("伸了伸懒腰，你回到了宿舍。");