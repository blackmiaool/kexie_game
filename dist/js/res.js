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
            blue_btn: g("UI/blue_btn.png"),
            power_icon: g("UI/power_icon.png"),
            progress_frame: g("UI/progress_frame.png"),
            progress_content: g("UI/progress_content.png"),
            //state
            state_back: g("UI/back.png"),
            state_analog: g("UI/analog3.png"),
            state_digital: g("UI/digital1.png"),
            items_frame: g("UI/items_frame.png"),
            items_desc_frame: g("UI/item_desc_bg.png")
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
            "name": "低端单片机",
            "kind": "IC",
            "icon": "computer",
            "price": "3",
            "brief": "性能很弱的单片机，可以用于制作简陋的电路系统",
            "comment": "郭天祥为它代言",
            "buyable": "1"
        }, {
            "name": "中端单片机",
            "kind": "IC",
            "icon": "computer",
            "price": "15",
            "brief": "性能一般的单片机，可以用于制作一般的电路系统",
            "comment": "意法公司代表性作品,在21种情况下会下载失败",
            "buyable": "1"
        }, {
            "name": "高端单片机",
            "kind": "IC",
            "icon": "computer",
            "price": "50",
            "brief": "性能强劲的单片机，可以用于制作复杂的电路系统",
            "comment": "有时候买开发板还不如买个手机",
            "buyable": "0"
        }, {
            "name": "五5伍",
            "kind": "IC",
            "icon": "computer",
            "price": "2",
            "brief": "常用数字芯片，用于产生基础的数字信号",
            "comment": "听说可以用来设计500种电路",
            "buyable": "1"
        }, {
            "name": "锁存器",
            "kind": "IC",
            "icon": "computer",
            "price": "2",
            "brief": "郭天祥最喜欢的芯片",
            "comment": "德律商店",
            "buyable": "1"
        }, {
            "name": "FPGA",
            "kind": "IC",
            "icon": "computer",
            "price": "30",
            "brief": "高级可编程数字芯片，常被单片机奴役，可用于制作单片机",
            "comment": "德律商店",
            "buyable": "1"
        }, {
            "name": "CPLD",
            "kind": "IC",
            "icon": "computer",
            "price": "15",
            "brief": "廉价可编程数字芯片",
            "comment": "德律商店",
            "buyable": "1"
        }, {
            "name": "普通电池",
            "kind": "基础器件",
            "icon": "battery",
            "price": "2",
            "brief": "给电路板供电用的一次性器件",
            "comment": "德律商店",
            "buyable": "1"
        }, {
            "name": "锂电池",
            "kind": "基础器件",
            "icon": "battery",
            "price": "30",
            "brief": "给电路板供电用的器件，可重复使用",
            "comment": "德律商店",
            "buyable": "1"
        }, {
            "name": "电路基础元件",
            "kind": "基础器件",
            "icon": "resistance",
            "price": "10",
            "brief": "最基础的电路元件套装，包括焊锡、排针、杜邦线、电阻、电容等器件",
            "comment": "德律商店",
            "buyable": "1"
        }, {
            "name": "LED",
            "kind": "基础器件",
            "icon": "led",
            "price": "1",
            "brief": "电子设计基础材料，用于进行焊接",
            "comment": "德律商店",
            "buyable": "1"
        }, {
            "name": "数码管",
            "kind": "基础器件",
            "icon": "digital-display",
            "price": "10",
            "brief": "可以显示出数字或字幕的元件，常用作显示设备",
            "comment": "为了显示几个数字去驱动这东西?",
            "buyable": "1"
        }, {
            "name": "舵机",
            "kind": "机械",
            "icon": "motor",
            "price": "30",
            "brief": "机电的基础元件，通过输入占空比进行转动",
            "comment": "舵机才是极客的浪漫!",
            "buyable": "1"
        }, {
            "name": "振动电机",
            "kind": "机械",
            "icon": "motor",
            "price": "5",
            "brief": "可以让系统产生震动的电机",
            "comment": "请勿配合电池使用",
            "buyable": "1"
        }, {
            "name": "机械元件",
            "kind": "机械",
            "icon": "gears",
            "price": "10",
            "brief": "机械设备的基础单位",
            "comment": "不知从哪里拆下来的",
            "buyable": "1"
        }, {
            "name": "浪磁炮伪",
            "kind": "伪神器",
            "icon": "gods-shield",
            "price": "5000",
            "brief": "浪神用过的武器的仿制版，毁灭比赛中的一个队伍",
            "comment": "浪神殿",
            "buyable": "0"
        }, {
            "name": "浪磁炮",
            "kind": "神器",
            "icon": "gods-shield",
            "price": "10000",
            "brief": "浪神用过的武器，毁灭比赛中所有其他队伍",
            "comment": "浪神殿",
            "buyable": "0"
        }, {
            "name": "浪经",
            "kind": "神器",
            "icon": "gods-shield",
            "price": "2000",
            "brief": "浪神说过的话语，阅读后可提高一定的知识属性（数字、模拟）",
            "comment": "浪神殿",
            "buyable": "0"
        }, {
            "name": "浪布丁",
            "kind": "神器",
            "icon": "gods-shield",
            "price": "2000",
            "brief": "浪神制作的布丁，随机技能等级提升1",
            "comment": "浪神殿",
            "buyable": "0"
        }, {
            "name": "浪手帕",
            "kind": "神器",
            "icon": "gods-shield",
            "price": "6000",
            "brief": "浪神偶然得到的手帕，100%成功率招募本级同学或高一级的学长作为队友",
            "comment": "浪神殿",
            "buyable": "0"
        }, {
            "name": "浪粉丝芳心",
            "kind": "伪神器",
            "icon": "gods-shield",
            "price": "10000",
            "brief": "浪神粉丝的芳心，使用后效率降低50%",
            "comment": "浪神殿",
            "buyable": "0"
        }],
        "device": [{
            "name": "烙铁",
            "kind": "焊接工具",
            "icon": "iron-soldering",
            "price": "20",
            "brief": "最基础的工具，新手工程师家中常备,通电数分钟后用手握住它的金属部分可以起到提神的作用"
        }, {
            "name": "焊台",
            "kind": "焊接工具",
            "icon": "iron-soldering",
            "price": "100",
            "brief": "最基础的工具，新手工程师家中常备",
            "comment": "通电数分钟后用手握住它的金属部分可以起到提神的作用"
        }, {
            "name": "低端示波器",
            "kind": "示波器",
            "icon": "oscilloscope",
            "price": "500",
            "brief": "低端调试仪器，可以增加少许的调试速度",
            "comment": "学校的旧实验室有一堆这种东西"
        }, {
            "name": "中端示波器",
            "kind": "示波器",
            "icon": "oscilloscope",
            "price": "1000",
            "brief": "中端调试仪器，可以增加一定的调试速度",
            "comment": "好一点的实验室才有的好东西"
        }, {
            "name": "高端示波器",
            "kind": "示波器",
            "icon": "oscilloscope",
            "price": "4000",
            "brief": "高端调试仪器，可以增加大量的调试速度",
            "comment": "高级实验室和校队才有的稀有仪器"
        }, {
            "name": "基础工具套装",
            "kind": "工具套装",
            "icon": "tool",
            "price": "200",
            "brief": "最基础的机械工具套装",
            "comment": "看起来像是工具,但是往往会变成消耗品"
        }, {
            "name": "高级工具套装",
            "kind": "工具套装",
            "icon": "tool",
            "price": "1000",
            "brief": "非常全的机械工具套装",
            "comment": "买来之后搬家会很痛苦"
        }, {
            "name": "低端逻辑分析仪",
            "kind": "逻辑分析仪",
            "icon": "tool",
            "price": "25",
            "brief": "数字逻辑调试工具",
            "comment": "虽然便宜但是好用"
        }, {
            "name": "高端逻辑分析仪",
            "kind": "逻辑分析仪",
            "icon": "tool",
            "price": "200",
            "brief": "高级数字逻辑调试工具，用于调试高速数字信号",
            "comment": "满眼都是线"
        }, {
            "name": "手钻",
            "kind": "电钻",
            "icon": "tool",
            "price": "50",
            "brief": "手持打孔工具",
            "comment": "不使用它有助于提高周围人对你的友好度"
        }, {
            "name": "台钻",
            "kind": "电钻",
            "icon": "tool",
            "price": "300",
            "brief": "手持打孔工具",
            "comment": "滋~滋~~滋~~~"
        }, {
            "name": "木工锯",
            "kind": "锯子",
            "icon": "saw-hand-drawn-electrical-cutting-tool",
            "price": "30",
            "brief": "切割工具",
            "comment": "看起来很安全"
        }, {
            "name": "电锯",
            "kind": "锯子",
            "icon": "saw-hand-drawn-electrical-cutting-tool",
            "price": "200",
            "brief": "切割工具,噪音较大",
            "comment": "如果僵尸入侵...."
        }, {
            "name": "学生电源",
            "kind": "电源",
            "icon": "tool",
            "price": "200",
            "brief": "供电仪器",
            "comment": "为什么没有杜邦线输出接口?"
        }, {
            "name": "高级电源",
            "kind": "电源",
            "icon": "tool",
            "price": "1000",
            "brief": "供电仪器",
            "comment": "很好很强大!"
        }, {
            "name": "低端函数发生器",
            "kind": "函数发生器",
            "icon": "tool",
            "price": "700",
            "brief": "输出指定波形",
            "comment": "好多按钮和选项"
        }, {
            "name": "高端函数发生器",
            "kind": "函数发生器",
            "icon": "tool",
            "price": "2000",
            "brief": "输出更宽泛的指定波形",
            "comment": "给你你想要的"
        }, {
            "name": "手持万用表",
            "kind": "表",
            "icon": "tool",
            "price": "100",
            "brief": "测量电阻电压电流",
            "comment": "总是缺电池"
        }, {
            "name": "台式万用表",
            "kind": "表",
            "icon": "tool",
            "price": "2000",
            "brief": "测量电阻电压电流",
            "comment": "给你看你想要的"
        }, {
            "name": "频谱仪",
            "kind": "频谱仪",
            "icon": "tool",
            "price": "2500",
            "brief": "显示频谱",
            "comment": "无"
        }, {
            "name": "电子负载",
            "kind": "负载",
            "icon": "tool",
            "price": "500",
            "brief": "做电源必备",
            "comment": "无"
        }, {
            "name": "高级电子负载",
            "kind": "负载",
            "icon": "tool",
            "price": "2000",
            "brief": "做电源必备",
            "comment": "无"
        }],
        "combine": [{
            "name": "单片机流水灯",
            "material": "低端单片机*1+LED*8+电路基础元件*1",
            "instrument": "表?",
            "date": "10"
        }, {
            "name": "闹钟",
            "material": "低端单片机*1+数码管*8+电路基础元件*1",
            "instrument": "表?",
            "date": "9"
        }, {
            "name": "巡线车",
            "material": "中端单片机*1+LED*16+电路基础元件*3+机械元件*10",
            "instrument": "表!电钻!锯子!工具套装!逻辑分析仪?",
            "date": "9"
        }, {
            "name": "飞思卡尔智能车",
            "material": "中端单片机*1+LED*16+电路基础元件*6+机械元件*3",
            "instrument": "表!电钻!锯子?工具套装!逻辑分析仪?",
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
            "icon": "mindmastery",
            "pre": "none",
            "des": "使用文字与图片解释你的作品"
        }, {
            "name": "线性代数",
            "icon": "magicabsorption",
            "pre": "none",
            "des": "基础数学技能，矩阵处理相关"
        }, {
            "name": "微积分",
            "icon": "spellimpact",
            "pre": "none",
            "des": "基础数学技能，数据处理相关"
        }, {
            "name": "C语言",
            "icon": "focusmagic",
            "pre": "none",
            "des": "基础编程技能，单片机编程必备"
        }, {
            "name": "电路分析",
            "icon": "arcanesubtlety",
            "pre": "none",
            "des": "基础电子技能，用于对电路进行简单分析"
        }, {
            "name": "模拟电路",
            "icon": "criticalmass",
            "pre": "微积分v2,电路分析v5",
            "des": "中级电子技能，电子设计核心技能，用于分析与设计三极管与MOS管相关电路"
        }, {
            "name": "PPT",
            "icon": "arcaneconcentration",
            "pre": "论文v3",
            "des": "使用文字与图片与效果展示你的作品或想法"
        }, {
            "name": "信号与系统",
            "icon": "magicattunement",
            "pre": "线性代数v2,微积分v5",
            "des": "通信相关核心技能，用于对信号进行简单分析"
        }, {
            "name": "数字电路",
            "icon": "spellpower",
            "pre": "电路分析v3",
            "des": "中级电子技能，电子设计核心技能，用于分析与设计数字芯片相关电路"
        }, {
            "name": "单片机原理",
            "icon": "firepower",
            "pre": "电路分析v2,C语言v4",
            "des": "中高级电子技能，嵌入式的重要基础，用于理解单片机的原理"
        }, {
            "name": "数据结构与算法",
            "icon": "presenceofmind",
            "pre": "C语言v5",
            "des": "中级编程技能，笔试面试的重要部分，用于组织数据，减少计算所需空间与时间"
        }, {
            "name": "演讲",
            "icon": "burnout",
            "pre": "PPTv2",
            "des": "使用口才与PPT结合来展示你的作品或想法"
        }, {
            "name": "其他语言",
            "icon": "prismaticcloak",
            "pre": "C语言v2",
            "des": "中高级编程技能，常用于APP与web编程"
        }, {
            "name": "数字信号处理",
            "icon": "arcticwinds",
            "pre": "信号与系统v5",
            "des": "通信相关核心技能，用于处理数字信号"
        }, {
            "name": "电磁场与电磁波",
            "icon": "arcanepower",
            "pre": "信号与系统v7,模拟电路v5",
            "des": "高级电子技能，用于分析电磁波"
        }, {
            "name": "开关电源",
            "icon": "missilebarrage",
            "pre": "模拟电路v7",
            "des": "高级电子技能，用于制作开关电源"
        }, {
            "name": "接口技术",
            "icon": "arcticreach",
            "pre": "数字电路v4",
            "des": "嵌入式相关核心技能，用于编写单片机片上外设与板上外设的驱动"
        }, {
            "name": "自动控制",
            "icon": "arcanepotency",
            "pre": "数据结构与算法v5",
            "des": "用于优化设备的控制算法"
        }, {
            "name": "上位机软件",
            "icon": "arcaneflows",
            "pre": "数据结构与算法v3",
            "des": "用于对设备进行分析与控制"
        }, {
            "name": "图像识别",
            "icon": "arcanemind",
            "pre": "数字信号处理v3,数据结构与算法v7",
            "des": "高级数学技能，用于识别图像"
        }, {
            "name": "传销",
            "icon": "arcanemeditation",
            "pre": "演讲v10",
            "des": "使用口才与其他资料影响别人的想法"
        }, {
            "name": "射频电路",
            "icon": "arcaneempowerment",
            "pre": "电磁场与电磁波v3",
            "des": "高级电子技能，用于分析与设计射频电路"
        }, {
            "name": "FPGA与CPLD",
            "icon": "arcanepower",
            "pre": "接口技术v5",
            "des": "高级嵌入式技能，用于设计数字可编程电路与仿真ASIC"
        }, {
            "name": "嵌入式",
            "icon": "incanter'sabsorption",
            "pre": "接口技术v3,单片机原理v5,数据结构与算法v3",
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
                        //                    d[i].cnt = 0;
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
                        skills[d[i].name].icon = d[i].icon;
                        skills[d[i].name].des = d[i].des;
                    }
                    for (var i in d) {
                        var skill_this = skills[d[i].name];
                        skill_this.pre = [];
                        if (d[i].pre != "none") {
                            var preArr = d[i].pre.split(",");
                            for (var j in preArr) {
                                var skill = skills[preArr[j].split("v")[0]];
                                var level = preArr[j].split("v")[1] * 1;
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
    //    for (var i in res.pp) {
    //        res[i] = res.pp[i].half
    //    }

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