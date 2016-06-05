define(["system-common"], function (common) {
    var g = common.g;
    var color = common.color;
    var res = {
        the_period_of_day: ["上午", "下午", "晚上", "午夜"],
        img: {
            huodongzhongxin: g("Background/huodongzhongxin.jpg"),
            ickexie1: g("Background/ickexie1.jpg"),
            daditu: g("System/bigmap.jpg"),
            kexie0: g("Background/kexie0.jpg"),
            kexie1: g("Background/kexie1.jpg"),
            kexie2: g("Background/kexie2.jpg"),
            kexiemen: g("Background/kexiemen.jpg"),
            keamenkou: g("Background/keamenkou.jpg"),
            kealouti: g("Background/kealouti.jpg"),

            axe: g("Mood/axe.png"),
            sushe: g("Background/sushe.jpg"),
            delvyuanjian: g("Background/delv.jpg"),
            jiaoshi: g("Background/jiaoshi.jpg"),
            baozou_zhuakuang: g("Background/baozou.png"),
            kexiezhaoxin: g("Background/kexiezhaoxin.jpg"),
            desk: g("Background/zhuomian.jpg"),
            tushuguan: g("Background/tushuguan.jpg"),
            tushuguanyejing: g("Background/tushuguanyejing.png"),
            gaozhongketang: g("Background/gaozhong.png"),
            luobang: g("Background/luobang.jpg"),
            qinghuadaxue: g("Background/qinghua.jpg"),
            cover: g("Background/cover.jpg"),
            uestc: g("Background/xuexiaomenkou.jpg"),
            black: g("Background/black.png"),
            //frame : g("UI/frame.png"),
            home_btn1: g("UI/home_btn1.png"),
            home_btn1_corner: g("UI/home_btn1_corner.png"),
            home_btn_transparent: g("UI/btn_transparent.png"),

            home_btn2: g("UI/home_btn2.png"),
            home_btn2_corner: g("UI/home_btn2_corner.png"),
            home_bottom_btn: g("UI/bottom_btn.png"),
            home_top: g("UI/home_top.png"),
            home_top_left: g("UI/home_top_left.png"),
            shop_frame: g("UI/shop_frame.png"),

            shopt_btn: g("UI/shop_btn.png"),
            shopt_btn2: g("UI/shop_btn2.png"),
            //ui:
            blue_btn:g("UI/blue_btn.png"),
            power_icon:g("UI/power_icon.png"),
            progress_frame:g("UI/progress_frame.png"),
            progress_content:g("UI/progress_content.png"),
            //state
            state_back:g("UI/back.png"),
            state_analog:g("UI/analog3.png"),
            state_digital:g("UI/digital1.png"),
            items_frame:g("UI/items_frame.png"),
            items_desc_frame:g("UI/item_desc_bg.png"),
        },
        pp: {
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
                canbeteam: true,
                tag: "这个不好吃啊",
                brief: "",
                数字: 10,
                模拟: 80,
                效率: 90,
                体力: 85,
                节操: 100,
                identity:"teammate",
            },
            chenguo: {
                name: "陈过",
                half: g("Half/chenguo.png"),
                color: color(153, 143, 152),
                text_color: color(0, 0, 0),
                canbeteam: true,
                tag: "cs大法好",
                brief: "",
                数字: 100,
                模拟: 0,
                效率: 70,
                体力: 50,
                节操: 60,
                identity:"teammate",
            },
            lizhao: {
                name: "李照",
                half: g("Half/lizhao.png"),
                color: color(200, 183, 156),
                canbeteam: true,
                tag: "聚聚聚，富富富",
                brief: "",
                数字: 0,
                模拟: 70,
                效率: 60,
                体力: 90,
                节操: 90,
                identity:"teammate",
            },
            gaoxiangchen: {
                name: "高向晨",
                half: g("Half/gaoxiangchen.png"),
                color: color(111, 114, 132),
                canbeteam: true,
                tag: "我想成为双谭哥！",
                skill: "每月可以膜拜一次指定对象，增加目标对本团队的好感度",
                brief: "",
                数字: 40,
                模拟: 20,
                效率: 80,
                体力: 20,
                节操: 10,
                identity:"teammate",
            },
            tanchengzi: {
                name: "谭橙子",
                half: g("Half/tanchengzi.png"),
                color: color(236, 237, 243),
                canbeteam: true,
                tag: "人工智能拯救人类",
                brief: "",
                数字: 80,
                模拟: 30,
                效率: 80,
                体力: 80,
                节操: 15,
                identity:"teammate",
            },
            tanjinchuan: {
                name: "谭劲船",
                half: g("Half/tanjinchuan.png"),
                color: color(170, 160, 88),
                canbeteam: true,
                tag: "我擅长勾搭",
                brief: "",
                数字: 30,
                模拟: 20,
                效率: 60,
                体力: 80,
                节操: 5,
                identity:"teammate",
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
                canbeteam: true,
                tag: "不能同意更多",
                数字: 50,
                模拟: 50,
                效率: 50,
                体力: 70,
                节操: 25,
                identity:"teammate",
            },
            zhongren: {
                name: "众人",
                half: g("Half/touming.png"),
                color: color(255, 255, 255),
            },
            chenjiong: {
                name: "陈囧",
                half: g("Half/chenjiong.png"),
                color: color(255, 255, 255),
                identity:"teammate",
            },
            wangyixie: {
                name: "王一血",
                half: g("Half/wangyixie.png"),
                color: color(255, 255, 255),
                identity:"teammate",
            },
            ouyangyang: {
                name: "欧洋洋",
                half: g("Half/ouyangyang.png"),
                color: color(255, 255, 255),
                identity:"teammate",
            },

        },
    };




    var res_json_data =
        <!-- inject: ../dist/data.json--> ;


        res_data_handle(res_json_data);


    function md_trim(str) {
        return str.replace(/(^\s+)|(\s+$)/g, "");
    }

    function res_data_handle(data) {

        for (var table_name in data) {
            let d=data[table_name];
//            console.log(table_name)
//            window[table_name] = data[table_name];
            switch (table_name) {
            case "item":
                let items={};
//                window.items = {};
                    res.items=items;
                for (var i in d) {
                    d[i].cnt = 0;
                    d[i].price = parseInt(d[i].price)
                    items[d[i].name] = d[i];
                }
                break;
            case "combine":
                    let combines={};
//                window.combines = {};
                    res.combines=combines;
                for (var i in d) {
                    let v=d[i];
                    //replace
                    v.material = md_trim(v.material);
                    v.material = v.material.split("+")
                    var material = v.material;
                    for (var j in material) {
                        var materials = material[j].split("*")
                        if (!materials[0]) {
                            console.error("missing material name");
                        } else if (!materials[1]) {
                            materials[1] = 1;
                        }
                        materials[1] = parseInt(materials[1])
                        material[j] = {
                            name: materials[0],
                            cnt: materials[1]
                        };
                    }

                    v.instrument = v.instrument.split("+");
                    v.product = [];
                    for (var i in d) {
                        combines[d[i].name] = d[i]
                    }

                }

                break;
            case "skill":
//                window.skills = {};
                let skills={};
                res.skills=skills;
                for (var i in d) {
                    skills[d[i].name] = {};
                    skills[d[i].name].name = d[i].name;
                    skills[d[i].name].level = 0;
                }
                for (var i in d) {
                    var skill_this = skills[d[i].name];
                    skill_this.pre = [];
                    if (d[i].pre != "none") {
                        var preArr = d[i].pre.split(",");
                        for (var j in preArr) {
                            let skill=skills[preArr[j].split("v")[0]];
                            let level=preArr[j].split("v")[1];
                            if (preArr[j] != "none") {
                                skill_this.pre.push({skill,level})
                            }
                        }
                    }

                }
                break;

            }
        }
        window.quest = [{
            title: "投名状",
            des: "为了进入科协，你需要完成一份科协的投名状。由于你选择了数字方向，你需要制作一个单片机流水灯。",
            date: 10,
            target: [{
                type: "combine_need",
                data: {
                    name: "单片机流水灯",
                    stability: 0,
                    performance: 0,
                },
                cnt: 1,
            }],
        }, {
            title: "测试任务",
            des: "作者的测试任务。",
            date: 10,
            target: [{
                type: "thing_need",
                data: "LED",

                cnt: 12,
            }],
        }]
    }
    for (var i in res.pp) {
        res[i] = res.pp[i].half
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


    return res;
})