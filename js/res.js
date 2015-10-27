var res = {
    huodongzhongxin:g("Background/huodongzhongxin.jpg"),
    ickexie1:g("Background/ickexie1.jpg"),
    daditu:g("System/bigmap.jpg"),
    kexie0: g("Background/kexie0.jpg"),
    kexie1: g("Background/kexie1.jpg"),
    kexie2: g("Background/kexie2.jpg"),
    kexiemen: g("Background/kexiemen.jpg"),
    keamenkou: g("Background/keamenkou.png"),
    kealouti: g("Background/kealouti.png"),

    sushe: g("Background/sushe.jpg"),
    delvyuanjian: g("Background/delv.jpg"),
    jiaoshi: g("Background/jiaoshi.jpg"),
    baozou_zhuakuang: g("Background/baozou.png"),
    kexiezhaoxin: g("Background/kexiezhaoxin.jpg"),
    desk: g("Background/zhuomian.jpg"),
    tushuguan: g("Background/tushuguan.jpg"),
    tushuguanyejing: g("Background/tushuguanyejing.png"),
    gaozhongketang: g("Background/gaozhong.png"),
    luobang: g("Background/luobang.png"),
    qinghuadaxue: g("Background/qinghua.png"),
    cover: g("Background/cover.jpg"),
    uestc: g("Background/xuexiaomenkou.png"),
    black: g("Background/black.png"),




    //frame : g("UI/frame.png"),
    home_btn1: g("UI/home_btn1.png"),
    home_btn1_corner: g("UI/home_btn1_corner.png"),
    home_btn_transparent: g("UI/btn_transparent.png"),

    home_btn2: g("UI/home_btn2.png"),
    home_btn2_corner: g("UI/home_btn2_corner.png"),
    home_bottom_btn: g("UI/bottom_btn.png"),
//    bottom_team: g("UI/bottom_team.png"),
//    bottom_char: g("UI/bottom_char.png"),
//    bottom_save: g("UI/bottom_save.png"),
//    bottom_load: g("UI/bottom_load.png"),
//    bottom_thing: g("UI/bottom_thing.png"),
//    bottom_task: g("UI/bottom_task.png"),
    home_top: g("UI/home_top.png"),
    home_top_left: g("UI/home_top_left.png"),
    shop_frame: g("UI/shop_frame.png"),

    shopt_btn: g("UI/shop_btn.png"),
    shopt_btn2: g("UI/shop_btn2.png"),
};



var pp = {
    what: {
        name: "???",
        half: g("Half/touming.png"),
        color: color(255, 255, 255),


    },
    you: {
        name: "你",
        half: g("Half/touming.png"),
        color: color(200, 200, 200),
        brief: "你自己。",
        数字: 50,
        模拟: 20,
        效率: 30,
        体力: 50,
        节操: 55,

    },
    daijun: {
        name: "戴俊",
        half: g("Half/daijun.png"),
        color: color(149, 35, 42),
        canbeteammate: true,
        tag: "这个不好吃啊",
        brief: "",
        数字: 10,
        模拟: 80,
        效率: 90,
        体力: 85,
        节操: 100,
    },
    chenguo: {
        name: "陈过",
        half: g("Half/chenguo.png"),
        color: color(153, 143, 152),
        text_color: color(0, 0, 0),
        canbeteammate: true,
        tag: "cs大法好",
        brief: "",
        数字: 100,
        模拟: 0,
        效率: 70,
        体力: 50,
        节操: 60,
    },
    lizhao: {
        name: "李照",
        half: g("Half/lizhao.png"),
        color: color(200, 183, 156),
        canbeteammate: true,
        tag: "聚聚聚，富富富",
        brief: "",
        数字: 0,
        模拟: 70,
        效率: 60,
        体力: 90,
        节操: 90,
    },
    gaoxiangchen: {
        name: "高向晨",
        half: g("Half/gaoxiangchen.png"),
        color: color(111, 114, 132),
        canbeteammate: true,
        tag: "我想成为双谭哥！",
        skill: "每月可以膜拜一次指定对象，增加目标对本团队的好感度",
        brief: "",
        数字: 40,
        模拟: 20,
        效率: 80,
        体力: 20,
        节操: 10,
    },
    tanchengzi: {
        name: "谭橙子",
        half: g("Half/tanchengzi.png"),
        color: color(236, 237, 243),
        canbeteammate: true,
        tag: "人工智能拯救人类",
        brief: "",
        数字: 80,
        模拟: 30,
        效率: 80,
        体力: 80,
        节操: 15,
    },
    tanjinchuan: {
        name: "谭劲船",
        half: g("Half/tanjinchuan.png"),
        color: color(170, 160, 88),
        canbeteammate: true,
        tag: "我擅长勾搭",
        brief: "",
        数字: 30,
        模拟: 20,
        效率: 60,
        体力: 80,
        节操: 5,
    },
    delv: {
        name: "德律",
        half: g("Half/delv.png"),
        color: color(164, 181, 204),
        brief: "",
        数字: 10,
        模拟: 100,
        效率: 50,
        体力: 70,
        节操: 0,
    },
    zhangfai: {
        name: "张付艾",
        half: g("Half/zhangfuai.png"),
        color: color(183, 193, 242),
        canbeteammate: true,
        tag: "不能同意更多",
        数字: 50,
        模拟: 50,
        效率: 50,
        体力: 70,
        节操: 25,
    },
    zhongren: {
        name: "众人",
        half: g("Half/touming.png"),
        color: color(255, 255, 255),
    },
    chenjiong:{
        name:"陈囧",
        half: g("Half/chenjiong.png"),
        color: color(255, 255, 255),
    },
}
var res_json_data= <!-- inject: ../dist/data.json--> ;
for (i in pp) {
    res[i] = pp[i].half
}


var v_init = {
    prop:{
        shane:0,
        zhixu:0,
    },
    basic: {
        name: "李厷叺",
        title: "麻瓜",
        test: 0,
        money: 1000,
        money_abt: 1,
        study_abt: 1,
        work_abt: 1,
        isFemale: false,
        way: 0, //0:digital 1:analog 2:both
        belief: 0,

    },
    study:{
      arrange:[],
    },
    state: {
        fatigue: 30,
        skill_point:2,
        skill_progress:30,
    },
    abality: {
        rest_eff: 10,
    },
    make:{
      target:false,
        progress:107,
        innovate:54,
        
    },
    time: {
        year: 2014,
        term: 1,
        month: 9,
        week: 1,
        week_day_index: 5,
        day: 1,
        period:0,
        total_point:3,
        total_point_today:3,
    },
    experience: {
        OI: false,
        phy: false,
        math: false,
        axe: false
    },
    plot: {
        xuanjianghui: false,
        kexie_first: false,
    },
    amity: {
    },
    skill: {
        digital_circuit: 0,
    },
    item: {

    },

}
for(var i in pp)
{
    v_init.amity[i]=0;
}
for(var i =0;i<8;i++)
{
    v_init.study.arrange[i]=[];
}

var get_save_text = function (id) {

}
var v_update = function (vv) {
    for (i in item) {
        vv.item[i] = item[i].cnt;
    }

}


var quest_sleep = {}

function toSaveString(value) {
    var ss = "";
    if (typeof value == "string") {
        ss += "\"";
        ss += value;
        ss += "\"";
    } else {
        //print("sldkfj");
        ss += value;
    }
    return ss;
}

function getSave(value) {
    var ss = "save_retval={"
    for (i in value) {
        ss += toSaveString(i)
        ss += ":{"
        for (j in value[i]) {
            ss += toSaveString(j)
            ss += ":";
            var a = value[i][j]
            ss += toSaveString(a)


            ss += ","
        }
        ss += "},"
    }
    ss += "}"
    return ss
}

function readSave(src, dest) {
    for (i in dest) {
        for (j in dest[i]) {
            src[i][j] = dest[i][j]
        }
    }
}

function load_progress(id) {
    eval(localStorage.getItem(getProgressName(id))) //.replace(/\"/g, "\\\""))
    readSave(v, save_retval)
        //    item_update()
}

function save_progress(id) {
    v_update(v)
    localStorage.removeItem(getProgressName(id))
    localStorage.setItem(getProgressName(id), getSave(v));

}

function save_object(key, obj) {
    localStorage.removeItem(key)
    localStorage.setItem(key, JSON.stringify(obj));
}

function load_object(key) {
    return JSON.parse(localStorage.getItem(key))
}

