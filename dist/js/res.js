"use strict";

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
            keamenkou: g("Background/keamenkou.png"),
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
            shopt_btn2: g("UI/shop_btn2.png")
        },
        pp: {
            what: {
                name: "???",
                half: g("Half/touming.png"),
                color: color(255, 255, 255)

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
                节操: 55

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
                identity: "teammate"
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
                identity: "teammate"
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
                identity: "teammate"
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
                identity: "teammate"
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
                identity: "teammate"
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
                identity: "teammate"
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
                节操: 0
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
                identity: "teammate"
            },
            zhongren: {
                name: "众人",
                half: g("Half/touming.png"),
                color: color(255, 255, 255)
            },
            chenjiong: {
                name: "陈囧",
                half: g("Half/chenjiong.png"),
                color: color(255, 255, 255),
                identity: "teammate"
            },
            wangyixie: {
                name: "王一血",
                half: g("Half/wangyixie.png"),
                color: color(255, 255, 255),
                identity: "teammate"
            },
            ouyangyang: {
                name: "欧洋洋",
                half: g("Half/ouyangyang.png"),
                color: color(255, 255, 255),
                identity: "teammate"
            }

        }
    };

    var res_json_data = {
        "item": [{
            "name": "烙铁",
            "kind": "仪器",
            "icon": "iron-soldering",
            "price": "20",
            "brief": "最基础的工具，新手工程师家中常备",
            "comment": "通电数分钟后用手握住它的金属部分可以起到提神的作用"
        }, {
            "name": "低端示波器",
            "kind": "仪器",
            "icon": "oscilloscope",
            "price": "500",
            "brief": "低端调试仪器，可以增加少许的调试速度",
            "comment": "学校的旧实验室有一堆这种东西"
        }, {
            "name": "中端示波器",
            "kind": "仪器",
            "icon": "oscilloscope",
            "price": "1000",
            "brief": "中端调试仪器，可以增加一定的调试速度",
            "comment": "好一点的实验室才有的好东西"
        }, {
            "name": "高端示波器",
            "kind": "仪器",
            "icon": "oscilloscope",
            "price": "2000",
            "brief": "高端调试仪器，可以增加大量的调试速度",
            "comment": "高级实验室和校队才有的稀有仪器"
        }, {
            "name": "机械基础工具",
            "kind": "仪器",
            "icon": "tool",
            "price": "200",
            "brief": "最基础的机械工具套装",
            "comment": "看起来像是工具,但是往往会变成消耗品"
        }, {
            "name": "低端单片机",
            "kind": "IC",
            "icon": "computer",
            "price": "3",
            "brief": "性能很弱的单片机，可以用于制作简陋的电路系统",
            "comment": "郭天祥为它代言"
        }, {
            "name": "中端单片机",
            "kind": "IC",
            "icon": "computer",
            "price": "15",
            "brief": "性能一般的单片机，可以用于制作一般的电路系统",
            "comment": "意法公司代表性作品,在21种情况下会下载失败"
        }, {
            "name": "高端单片机",
            "kind": "IC",
            "icon": "computer",
            "price": "50",
            "brief": "性能强劲的单片机，可以用于制作复杂的电路系统",
            "comment": "有时候买开发板还不如买个手机"
        }, {
            "name": "五5伍",
            "kind": "IC",
            "icon": "computer",
            "price": "2",
            "brief": "常用数字芯片，用于产生基础的数字信号",
            "comment": "听说可以用来设计500种电路"
        }, {
            "name": "锁存器",
            "kind": "IC",
            "icon": "computer",
            "price": "2",
            "brief": "郭天祥最喜欢的芯片",
            "comment": "德律商店"
        }, {
            "name": "FPGA",
            "kind": "IC",
            "icon": "computer",
            "price": "30",
            "brief": "高级可编程数字芯片，常被单片机奴役，可用于制作单片机",
            "comment": "德律商店"
        }, {
            "name": "CPLD",
            "kind": "IC",
            "icon": "computer",
            "price": "15",
            "brief": "廉价可编程数字芯片",
            "comment": "德律商店"
        }, {
            "name": "普通电池",
            "kind": "基础器件",
            "icon": "battery",
            "price": "2",
            "brief": "给电路板供电用的一次性器件",
            "comment": "德律商店"
        }, {
            "name": "锂电池",
            "kind": "基础器件",
            "icon": "battery",
            "price": "30",
            "brief": "给电路板供电用的器件，可重复使用",
            "comment": "德律商店"
        }, {
            "name": "电路基础元件",
            "kind": "基础器件",
            "icon": "resistance",
            "price": "10",
            "brief": "最基础的电路元件套装，包括焊锡、排针、杜邦线、电阻、电容等器件",
            "comment": "德律商店"
        }, {
            "name": "LED",
            "kind": "基础器件",
            "icon": "led",
            "price": "1",
            "brief": "电子设计基础材料，用于进行焊接",
            "comment": "德律商店"
        }, {
            "name": "数码管",
            "kind": "基础器件",
            "icon": "digital-display",
            "price": "10",
            "brief": "可以显示出数字或字幕的元件，常用作显示设备",
            "comment": "为了显示几个数字去驱动这东西?"
        }, {
            "name": "舵机",
            "kind": "机械",
            "icon": "motor",
            "price": "30",
            "brief": "机电的基础元件，通过输入占空比进行转动",
            "comment": "舵机才是极客的浪漫!"
        }, {
            "name": "振动电机",
            "kind": "机械",
            "icon": "motor",
            "price": "5",
            "brief": "可以让系统产生震动的电机",
            "comment": "请勿配合电池使用"
        }, {
            "name": "机械元件",
            "kind": "机械",
            "icon": "gears",
            "price": "10",
            "brief": "机械设备的基础单位",
            "comment": "不知从哪里拆下来的"
        }, {
            "name": "电钻",
            "kind": "仪器",
            "icon": "drill-tool",
            "price": "200",
            "brief": "基础机械工具，用于打孔",
            "comment": "不使用它有助于提高周围人对你的友好度"
        }, {
            "name": "电锯",
            "kind": "仪器",
            "icon": "saw-hand-drawn-electrical-cutting-tool",
            "price": "300",
            "brief": "基础机械工具，用于切割，噪音较大",
            "comment": "僵尸入侵时它可以帮助你活下去"
        }, {
            "name": "浪神炮伪",
            "kind": "伪神器",
            "icon": "gods-shield",
            "price": "5000",
            "brief": "浪神用过的武器的仿制版，毁灭比赛中的一个队伍",
            "comment": "浪神殿"
        }, {
            "name": "浪神炮",
            "kind": "神器",
            "icon": "gods-shield",
            "price": "10000",
            "brief": "浪神用过的武器，毁灭比赛中所有其他队伍",
            "comment": "浪神殿"
        }, {
            "name": "浪经",
            "kind": "神器",
            "icon": "gods-shield",
            "price": "2000",
            "brief": "浪神说过的话语，阅读后可提高一定的知识属性（数字、模拟）",
            "comment": "浪神殿"
        }, {
            "name": "浪布丁",
            "kind": "神器",
            "icon": "gods-shield",
            "price": "2000",
            "brief": "浪神制作的布丁，随机技能等级提升1",
            "comment": "浪神殿"
        }, {
            "name": "浪手帕",
            "kind": "神器",
            "icon": "gods-shield",
            "price": "6000",
            "brief": "浪神偶然得到的手帕，100%成功率招募本级同学或高一级的学长作为队友",
            "comment": "浪神殿"
        }, {
            "name": "浪粉丝芳心",
            "kind": "伪神器",
            "icon": "gods-shield",
            "price": "10000",
            "brief": "浪神粉丝的芳心，使用后效率降低50%",
            "comment": "浪神殿"
        }],
        "combine": [{
            "name": "单片机流水灯",
            "material": "低端单片机*1+LED*8+电路基础元件*1",
            "instrument": "烙铁",
            "date": "10"
        }, {
            "name": "单片机闹钟",
            "material": "低端单片机*1+数码管*8+电路基础元件*1",
            "instrument": "烙铁",
            "date": "9"
        }, {
            "name": "女朋友（残、伪）",
            "material": "机械元件*10+舵机*8+高端单片机*2",
            "instrument": "烙铁+电钻+电锯+机械基础工具",
            "date": "30"
        }, {
            "name": "男朋友（残、伪）",
            "material": "机械元件*2+振动电机*1+普通电池*1",
            "instrument": "烙铁+电锯+机械基础工具",
            "date": "25"
        }],
        "skill": [{
            "name": "论文",
            "pre": "none",
            "upgrade": "1,1,1,2,3,5,7",
            "des": "使用文字与图片解释你的作品"
        }, {
            "name": "PPT",
            "pre": "论文v3",
            "upgrade": "1,1,1,2,3,5,7",
            "des": "使用文字与图片与效果展示你的作品或想法"
        }, {
            "name": "演讲",
            "pre": "PPTv2",
            "upgrade": "1,1,1,2,3,5,7,11,13",
            "des": "使用口才与PPT结合来展示你的作品或想法"
        }, {
            "name": "传销",
            "pre": "演讲v10",
            "upgrade": "1,1,1,2,3,5,7,11,13",
            "des": "使用口才与其他资料影响别人的想法"
        }, {
            "name": "线性代数",
            "pre": "none",
            "upgrade": "1,1,1,2,2,3",
            "des": "基础数学技能，矩阵处理相关"
        }, {
            "name": "微积分",
            "pre": "none",
            "upgrade": "1,1,1,2,2,3",
            "des": "基础数学技能，数据处理相关"
        }, {
            "name": "电路分析",
            "pre": "none",
            "upgrade": "1,1,1,2,2,3",
            "des": "基础电子技能，用于对电路进行简单分析"
        }, {
            "name": "C语言",
            "pre": "none",
            "upgrade": "1,1,1,2,2,3",
            "des": "基础编程技能，单片机编程必备"
        }, {
            "name": "信号与系统",
            "pre": "线性代数v2,微积分v5",
            "upgrade": "1,2,3,4,5,6,7",
            "des": "通信相关核心技能，用于对信号进行简单分析"
        }, {
            "name": "模拟电路",
            "pre": "微积分v2,电路分析v5",
            "upgrade": "1,2,3,4,5,6,7,8,9",
            "des": "中级电子技能，电子设计核心技能，用于分析与设计三极管与MOS管相关电路"
        }, {
            "name": "数字电路",
            "pre": "电路分析v3",
            "upgrade": "1,2,3,4,5,6,7,8,9",
            "des": "中级电子技能，电子设计核心技能，用于分析与设计数字芯片相关电路"
        }, {
            "name": "单片机原理",
            "pre": "电路分析v2,C语言v4",
            "upgrade": "1,1,2,2,3,3",
            "des": "中高级电子技能，嵌入式的重要基础，用于理解单片机的原理"
        }, {
            "name": "数据结构与算法",
            "pre": "C语言v5",
            "upgrade": "1,1,2,2,3,3",
            "des": "中级编程技能，笔试面试的重要部分，用于组织数据，减少计算所需空间与时间"
        }, {
            "name": "其他语言",
            "pre": "C语言v2",
            "upgrade": "1,1,2,2,3,3,3,3,3",
            "des": "中高级编程技能，常用于APP与web编程"
        }, {
            "name": "数字信号处理",
            "pre": "信号与系统v5",
            "upgrade": "1,3,3,5,5,5",
            "des": "通信相关核心技能，用于处理数字信号"
        }, {
            "name": "电磁场与电磁波",
            "pre": "信号与系统v7,模拟电路v5",
            "upgrade": "3,3,4,4,5,6,7,8,9",
            "des": "高级电子技能，用于分析电磁波"
        }, {
            "name": "开关电源",
            "pre": "模拟电路v7",
            "upgrade": "3,3,4,4,5,6,7,8,9,10,11",
            "des": "高级电子技能，用于制作开关电源"
        }, {
            "name": "接口技术",
            "pre": "数字电路v4",
            "upgrade": "1,2,3,4,4,4,4",
            "des": "嵌入式相关核心技能，用于编写单片机片上外设与板上外设的驱动"
        }, {
            "name": "自动控制",
            "pre": "数据结构与算法v5",
            "upgrade": "1,1,2,2,3,3,5,7,9",
            "des": "用于优化设备的控制算法"
        }, {
            "name": "上位机软件",
            "pre": "数据结构与算法v3",
            "upgrade": "1,1,2,2,3,3,4,5,6",
            "des": "用于对设备进行分析与控制"
        }, {
            "name": "图像识别",
            "pre": "数字信号处理v3,数据结构与算法v7",
            "upgrade": "2,2,3,3,5,7,9",
            "des": "高级数学技能，用于识别图像"
        }, {
            "name": "射频电路",
            "pre": "电磁场与电磁波v3",
            "upgrade": "3,3,4,4,5,6,7,8,9",
            "des": "高级电子技能，用于分析与设计射频电路"
        }, {
            "name": "FPGA与CPLD",
            "pre": "接口技术v5",
            "upgrade": "1,1,2,3,5,7,9",
            "des": "高级嵌入式技能，用于设计数字可编程电路与仿真ASIC"
        }, {
            "name": "嵌入式",
            "pre": "接口技术v3,单片机原理v5,数据结构与算法v3",
            "upgrade": "1,2,3,4,5,6,7,8",
            "des": "高级技能，用于设计嵌入式相关电路与软件"
        }]
    };

    res_data_handle(res_json_data);

    function md_trim(str) {
        return str.replace(/(^\s+)|(\s+$)/g, "");
    }

    function res_data_handle(data) {

        for (var table_name in data) {
            var d = data[table_name];
            //            console.log(table_name)
            //            window[table_name] = data[table_name];
            switch (table_name) {
                case "item":
                    var items = {};
                    //                window.items = {};
                    res.items = items;
                    for (var i in d) {
                        d[i].cnt = 0;
                        d[i].price = parseInt(d[i].price);
                        items[d[i].name] = d[i];
                    }
                    break;
                case "combine":
                    var combines = {};
                    //                window.combines = {};
                    res.combines = combines;
                    for (var i in d) {
                        var _v = d[i];
                        //replace
                        _v.material = md_trim(_v.material);
                        _v.material = _v.material.split("+");
                        var material = _v.material;
                        for (var j in material) {
                            var materials = material[j].split("*");
                            if (!materials[0]) {
                                console.error("missing material name");
                            } else if (!materials[1]) {
                                materials[1] = 1;
                            }
                            materials[1] = parseInt(materials[1]);
                            material[j] = {
                                name: materials[0],
                                cnt: materials[1]
                            };
                        }

                        _v.instrument = _v.instrument.split("+");
                        _v.product = [];
                        for (var i in d) {
                            combines[d[i].name] = d[i];
                        }
                    }

                    break;
                case "skill":
                    //                window.skills = {};
                    var skills = {};
                    res.skills = skills;
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
                                var skill = skills[preArr[j].split("v")[0]];
                                var level = preArr[j].split("v")[1];
                                if (preArr[j] != "none") {
                                    skill_this.pre.push({ skill: skill, level: level });
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
                    performance: 0
                },
                cnt: 1
            }]
        }, {
            title: "测试任务",
            des: "作者的测试任务。",
            date: 10,
            target: [{
                type: "thing_need",
                data: "LED",

                cnt: 12
            }]
        }];
    }
    for (var i in res.pp) {
        res[i] = res.pp[i].half;
    }

    var get_save_text = function get_save_text(id) {};
    var v_update = function v_update(vv) {
        for (i in item) {
            vv.item[i] = item[i].cnt;
        }
    };

    var quest_sleep = {};

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
        var ss = "save_retval={";
        for (i in value) {
            ss += toSaveString(i);
            ss += ":{";
            for (j in value[i]) {
                ss += toSaveString(j);
                ss += ":";
                var a = value[i][j];
                ss += toSaveString(a);

                ss += ",";
            }
            ss += "},";
        }
        ss += "}";
        return ss;
    }

    function readSave(src, dest) {
        for (i in dest) {
            for (j in dest[i]) {
                src[i][j] = dest[i][j];
            }
        }
    }

    function load_progress(id) {
        eval(localStorage.getItem(getProgressName(id))); //.replace(/\"/g, "\\\""))
        readSave(v, save_retval);
        //    item_update()
    }

    function save_progress(id) {
        v_update(v);
        localStorage.removeItem(getProgressName(id));
        localStorage.setItem(getProgressName(id), getSave(v));
    }

    return res;
});