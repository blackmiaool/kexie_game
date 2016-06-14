"use strict";

var tables = {
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
    "products": [{
        "name": "单片机流水灯",
        "material": "低端单片机*1+LED*8+电路基础元件*1",
        "instrument": "万用表,逻辑分析仪",
        "difficulty": "3",
        "skill": "c语言v1"
    }, {
        "name": "硬件流水灯",
        "material": "五5伍*1+LED*8+电路基础元件*1",
        "instrument": "万用表",
        "difficulty": "2",
        "skill": "电路分析v1"
    }, {
        "name": "单片机流水灯1",
        "material": "低端单片机*1+LED*8+电路基础元件*1",
        "instrument": "表?",
        "difficulty": "10"
    }, {
        "name": "单片机流水灯2",
        "material": "低端单片机*1+LED*8+电路基础元件*1",
        "instrument": "表?",
        "difficulty": "10"
    }, {
        "name": "单片机流水灯3",
        "material": "低端单片机*1+LED*8+电路基础元件*1",
        "instrument": "表?",
        "difficulty": "10"
    }, {
        "name": "单片机流水灯4",
        "material": "低端单片机*1+LED*8+电路基础元件*1",
        "instrument": "表?",
        "difficulty": "10"
    }, {
        "name": "单片机流水灯5",
        "material": "低端单片机*1+LED*8+电路基础元件*1",
        "instrument": "表?",
        "difficulty": "10"
    }, {
        "name": "单片机流水灯6",
        "material": "低端单片机*1+LED*8+电路基础元件*1",
        "instrument": "表?",
        "difficulty": "10"
    }, {
        "name": "闹钟",
        "material": "低端单片机*1+数码管*8+电路基础元件*1",
        "instrument": "表?",
        "difficulty": "9"
    }, {
        "name": "巡线车",
        "material": "中端单片机*1+LED*16+电路基础元件*3+机械元件*10",
        "instrument": "表!电钻!锯子!工具套装!逻辑分析仪?",
        "difficulty": "9"
    }, {
        "name": "飞思卡尔智能车",
        "material": "中端单片机*1+LED*16+电路基础元件*6+机械元件*3",
        "instrument": "表!电钻!锯子?工具套装!逻辑分析仪?",
        "difficulty": "9"
    }, {
        "name": "女朋友（残、伪）",
        "material": "机械元件*10+舵机*8+高端单片机*2",
        "instrument": "烙铁+电钻+电锯+机械基础工具",
        "difficulty": "30"
    }, {
        "name": "男朋友（残、伪）",
        "material": "机械元件*2+振动电机*1+普通电池*1",
        "instrument": "烙铁+电锯+机械基础工具",
        "difficulty": "25"
    }],
    "device": [{
        "name": "烙铁",
        "kind": "焊接工具",
        "icon": "iron-soldering",
        "price": "20",
        "brief": "最基础的工具，新手工程师家中常备,通电数分钟后用手握住它的金属部分可以起到提神的作用",
        "comment": "1"
    }, {
        "name": "焊台",
        "kind": "焊接工具",
        "icon": "iron-soldering",
        "price": "100",
        "brief": "最基础的工具，新手工程师家中常备",
        "comment": "通电数分钟后用手握住它的金属部分可以起到提神的作用",
        "buyable": "1"
    }, {
        "name": "低端示波器",
        "kind": "示",
        "icon": "1波器",
        "price": "oscilloscope",
        "brief": "500",
        "comment": "低端调试仪器，可以增加少许的调试速度",
        "buyable": "学校的旧实验室有一堆这种东西",
        "undefined": "1"
    }, {
        "name": "中端示波器",
        "kind": "示波器",
        "icon": "oscilloscope",
        "price": "1000",
        "brief": "中端调试仪器，可以增加一定的调试速度",
        "comment": "好一点的实验室才有的好东西",
        "buyable": "1"
    }, {
        "name": "高端示波器",
        "kind": "示波器",
        "icon": "oscilloscope",
        "price": "4000",
        "brief": "高端调试仪器，可以增加大量的调试速度",
        "comment": "高级实验室和校队才有的稀有仪器",
        "buyable": "1"
    }, {
        "name": "基础工具套装",
        "kind": "工具套装",
        "icon": "tool",
        "price": "200",
        "brief": "最基础的机械工具套装",
        "comment": "看起来像是工具,但是往往会变成消耗品",
        "buyable": "1"
    }, {
        "name": "高级工具套装",
        "kind": "工具套装",
        "icon": "tool",
        "price": "1000",
        "brief": "非常全的机械工具套装",
        "comment": "买来之后搬家会很痛苦",
        "buyable": "1"
    }, {
        "name": "低端逻辑分析仪",
        "kind": "逻辑分析仪",
        "icon": "tool",
        "price": "25",
        "brief": "数字逻辑调试工具",
        "comment": "虽然便宜但是好用",
        "buyable": "1"
    }, {
        "name": "高端逻辑分析仪",
        "kind": "逻辑分析仪",
        "icon": "tool",
        "price": "200",
        "brief": "高级数字逻辑调试工具，用于调试高速数字信号",
        "comment": "满眼都是线",
        "buyable": "1"
    }, {
        "name": "手钻",
        "kind": "电钻",
        "icon": "tool",
        "price": "50",
        "brief": "手持打孔工具",
        "comment": "不使用它有助于提高周围人对你的友好度",
        "buyable": "1"
    }, {
        "name": "台钻",
        "kind": "电钻",
        "icon": "tool",
        "price": "300",
        "brief": "手持打孔工具",
        "comment": "滋~滋~~滋~~~",
        "buyable": "1"
    }, {
        "name": "木工锯",
        "kind": "锯子",
        "icon": "saw-hand-drawn-electrical-cutting-tool",
        "price": "30",
        "brief": "切割工具",
        "comment": "看起来很安全",
        "buyable": "1"
    }, {
        "name": "电锯",
        "kind": "锯子",
        "icon": "saw-hand-drawn-electrical-cutting-tool",
        "price": "200",
        "brief": "切割工具,噪音较大",
        "comment": "如果僵尸入侵....",
        "buyable": "1"
    }, {
        "name": "学生电源",
        "kind": "电源",
        "icon": "tool",
        "price": "200",
        "brief": "供电仪器",
        "comment": "为什么没有杜邦线输出接口?",
        "buyable": "1"
    }, {
        "name": "高级电源",
        "kind": "电源",
        "icon": "tool",
        "price": "1000",
        "brief": "供电仪器",
        "comment": "很好很强大!",
        "buyable": "1"
    }, {
        "name": "低端函数发生器",
        "kind": "函数发生器",
        "icon": "tool",
        "price": "700",
        "brief": "输出指定波形",
        "comment": "好多按钮和选项",
        "buyable": "1"
    }, {
        "name": "高端函数发生器",
        "kind": "函数发生器",
        "icon": "tool",
        "price": "2000",
        "brief": "输出更宽泛的指定波形",
        "comment": "给你你想要的",
        "buyable": "1"
    }, {
        "name": "手持万用表",
        "kind": "表",
        "icon": "tool",
        "price": "100",
        "brief": "测量电阻电压电流",
        "comment": "总是缺电池",
        "buyable": "1"
    }, {
        "name": "台式万用表",
        "kind": "表",
        "icon": "tool",
        "price": "2000",
        "brief": "测量电阻电压电流",
        "comment": "给你看你想要的",
        "buyable": "1"
    }, {
        "name": "频谱仪",
        "kind": "频谱仪",
        "icon": "tool",
        "price": "2500",
        "brief": "显示频谱",
        "comment": "无",
        "buyable": "1"
    }, {
        "name": "电子负载",
        "kind": "负载",
        "icon": "tool",
        "price": "500",
        "brief": "做电源必备",
        "comment": "无",
        "buyable": "1"
    }, {
        "name": "高级电子负载",
        "kind": "负载",
        "icon": "tool",
        "price": "2000",
        "brief": "做电源必备",
        "comment": "无",
        "buyable": "1"
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
console.log(tables);
var rootModule = angular.module("main", ["contenteditable", "ngAnimate"]);

var tableHeaders = {};
for (var i in tables) {
    tableHeaders[i] = [];
    for (var j in tables[i][0]) {
        tableHeaders[i].push(j);
    }
}

rootModule.controller("mainController", ["$scope", "$http", function (sp, $http) {
    sp.$watch("tableHeaders", function (headers, preHeaders) {}, true);
    _.extend(sp, {
        tables: tables,
        tableHeaders: tableHeaders
    });
    sp.headerOptions = [['列改名', function ($itemScope) {
        var newKey = prompt("输入新列名");
        if (!newKey) {
            return;
        }
        var key = $itemScope.key;
        var tableName = $itemScope.tableName;

        sp.tables[tableName].forEach(function (item, i) {
            var value = item[key];
            delete item[key];
            item[newKey] = value;
        });
    }]];
    //    sp.commonMenuOptions = [
    //          ['浏览器中打开', function ($itemScope) {
    //            window.open($itemScope.item.Url)
    //          }],
    //          ['编辑', function ($itemScope) {
    //            window.open(`/miot_html_editor/index.html?id=${$itemScope.item.ArticleId}`)
    //          }],
    //            ['设置为可见', function ($itemScope) {
    //            setStatus($itemScope.item.ArticleId, 1, function () {
    //                getTopList();
    //                setPage(sp.page.current);
    //
    //            })
    //
    //          }, function ($itemScope) {
    //            console.log($itemScope)
    //            return !$itemScope.item.Status;
    //          }],
    //          ['设置为不可见', function ($itemScope) {
    //            setStatus($itemScope.item.ArticleId, 0, function () {
    //                getTopList();
    //                setPage(sp.page.current);
    //
    //            })
    //          }, function ($itemScope) {
    //            return $itemScope.item.Status;
    //          }],['设置点击量', function ($itemScope) {
    //              let id=$itemScope.item.ArticleId;
    //              let cnt=prompt("请输入想要的点击量");
    //              if(!cnt){
    //                  alert("点击量不合法");
    //                  return;
    //              }
    //            setProps(id, {ShadowVisit:cnt}, function () {
    //                getTopList();
    //                setPage(sp.page.current);
    //
    //            })
    //          }, function ($itemScope) {
    //            return $itemScope.item.Status;
    //          }], ];
    //
    //    sp.menuOptions = sp.commonMenuOptions.concat([
    //          ['取消置顶', function ($itemScope) {
    //            if (checkLock()) {
    //                return;
    //            }
    //            cancelTop($itemScope.item.index);
    //          }],
    //      ]);
    //
    //    sp.menuOptions1 = sp.commonMenuOptions.concat([
    //
    //          null,
    //          ['置顶', [
    //              ['位置1', function ($itemScope) {
    //                if (checkLock()) {
    //                    return;
    //                }
    //                let id = $itemScope.item.ArticleId;
    //                setTop(id, 1);
    //              }],
    //              ['位置3', function ($itemScope) {
    //                if (checkLock()) {
    //                    return;
    //                }
    //                let id = $itemScope.item.ArticleId;
    //                setTop(id, 3);
    //              }],
    //              ['位置5', function ($itemScope) {
    //                if (checkLock()) {
    //                    return;
    //                }
    //                let id = $itemScope.item.ArticleId;
    //                setTop(id, 5);
    //              }]
    //          ]]
    //      ]);
}]);