"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var dataRaw = "\n###### item,,,,,,\nname,kind,icon,price,brief,comment,buyable\n低端单片机,IC,computer,3,性能很弱的单片机，   可以用于制作简陋的电路系统,郭天祥为它代言,1\n中端单片机,IC,computer,15,性能一般的单片机，可以用于制作一般的电路系统,\"意法公司代表性作品,在21种情况下会下载失败\",1\n高端单片机,IC,computer,50,性能强劲的单片机，可以用于制作复杂的电路系统,有时候买开发板还不如买个手机,0\n五5伍,IC,computer,2,常用数字芯片，用于产生基础的数字信号,听说可以用来设计500种电路,1\n锁存器,IC,computer,2,郭天祥最喜欢的芯片,德律商店,1\nFPGA,IC,computer,30,高级可编程数字芯片，常被单片机奴役，可用于制作单片机,德律商店,1\nCPLD,IC,computer,15,廉价可编程数字芯片,德律商店,1\n普通电池,基础器件,battery,2,给电路板供电用的一次性器件,德律商店,1\n锂电池,基础器件,battery,30,给电路板供电用的器件，可重复使用,德律商店,1\n电路基础元件,基础器件,resistance,10,最基础的电路元件套装，包括焊锡、排针、杜邦线、电阻、电容等器件,德律商店,1\nLED,基础器件,led,1,电子设计基础材料，用于进行焊接,德律商店,1\n数码管,基础器件,digital-display,10,可以显示出数字或字幕的元件，常用作显示设备,为了显示几个数字去驱动这东西?,1\n舵机,机械,motor,30,机电的基础元件，通过输入占空比进行转动,舵机才是极客的浪漫!,1\n振动电机,机械,motor,5,可以让系统产生震动的电机,请勿配合电池使用,1\n机械元件,机械,gears,10,机械设备的基础单位,不知从哪里拆下来的,1\n浪磁炮伪,伪神器,gods-shield,5000,浪神用过的武器的仿制版，毁灭比赛中的一个队伍,浪神殿,0\n浪磁炮,神器,gods-shield,10000,浪神用过的武器，毁灭比赛中所有其他队伍,浪神殿,0\n浪经,神器,gods-shield,2000,浪神说过的话语，阅读后可提高一定的知识属性（数字、模拟）,浪神殿,0\n浪布丁,神器,gods-shield,2000,浪神制作的布丁，随机技能等级提升1,浪神殿,0\n浪手帕,神器,gods-shield,6000,浪神偶然得到的手帕，100%成功率招募本级同学或高一级的学长作为队友,浪神殿,0\n浪粉丝芳心,伪神器,gods-shield,10000,浪神粉丝的芳心，使用后效率降低50%,浪神殿,0\n,,,,,,\n,,,,,,\n###### products,,,,,,\nname,material,instrument,difficulty,skill,,\n单片机流水灯,低端单片机*1+LED*8+电路基础元件*1,\"万用表,逻辑分析仪\",3,c语言v1,,\n硬件流水灯,五5伍*1+LED*8+电路基础元件*1,万用表,2,电路分析v1,,\n单片机流水灯1,低端单片机*1+LED*8+电路基础元件*1,表?,10,undefined,,\n单片机流水灯2,低端单片机*1+LED*8+电路基础元件*1,表?,10,undefined,,\n单片机流水灯3,低端单片机*1+LED*8+电路基础元件*1,表?,10,undefined,,\n单片机流水灯4,低端单片机*1+LED*8+电路基础元件*1,表?,10,undefined,,\n单片机流水灯5,低端单片机*1+LED*8+电路基础元件*1,表?,10,undefined,,\n单片机流水灯6,低端单片机*1+LED*8+电路基础元件*1,表?,10,undefined,,\n闹钟,低端单片机*1+数码管*8+电路基础元件*1,表?,9,undefined,,\n巡线车,中端单片机*1+LED*16+电路基础元件*3+机械元件*10,表!电钻!锯子!工具套装!逻辑分析仪?,9,undefined,,\n飞思卡尔智能车,中端单片机*1+LED*16+电路基础元件*6+机械元件*3,表!电钻!锯子?工具套装!逻辑分析仪?,9,undefined,,\n女朋友（残、伪）,机械元件*10+舵机*8+高端单片机*2,烙铁+电钻+电锯+机械基础工具,30,undefined,,\n男朋友（残、伪）,机械元件*2+振动电机*1+普通电池*1,烙铁+电锯+机械基础工具,25,undefined,,\n,,,,,,\n,,,,,,\n###### device,,,,,,\nname,kind,icon,price,brief,comment,\n烙铁,焊接工具,iron-soldering,20,最基础的工具，新手工程师家中常备,通电数分钟后用手握住它的金属部分可以起到提神的作用,\n焊台,焊接工具,iron-soldering,100,最基础的工具，新手工程师家中常备,通电数分钟后用手握住它的金属部分可以起到提神的作用,\n低端示波器,示波器,oscilloscope,,低端调试仪器，可以增加少许的调试速度,学校的旧实验室有一堆这种东西,\n中端示波器,示波器,oscilloscope,1000,中端调试仪器，可以增加一定的调试速度,好一点的实验室才有的好东西,\n高端示波器,示波器,oscilloscope,4000,高端调试仪器，可以增加大量的调试速度,高级实验室和校队才有的稀有仪器,\n基础工具套装,工具套装,tool,200,最基础的机械工具套装,\"看起来像是工具,但是往往会变成消耗品\",\n高级工具套装,工具套装,tool,1000,非常全的机械工具套装,买来之后搬家会很痛苦,\n低端逻辑分析仪,逻辑分析仪,tool,25,数字逻辑调试工具,虽然便宜但是好用,\n高端逻辑分析仪,逻辑分析仪,tool,200,高级数字逻辑调试工具，用于调试高速数字信号,满眼都是线,\n手钻,电钻,tool,50,手持打孔工具,不使用它有助于提高周围人对你的友好度,\n台钻,电钻,tool,300,手持打孔工具,滋~滋~~滋~~~,\n木工锯,锯子,saw-hand-drawn-electrical-cutting-tool,30,切割工具,看起来很安全,\n电锯,锯子,saw-hand-drawn-electrical-cutting-tool,200,\"切割工具,噪音较大\",如果僵尸入侵....,\n学生电源,电源,tool,200,供电仪器,为什么没有杜邦线输出接口?,\n高级电源,电源,tool,1000,供电仪器,很好很强大!,\n低端函数发生器,函数发生器,tool,700,输出指定波形,好多按钮和选项,\n高端函数发生器,函数发生器,tool,2000,输出更宽泛的指定波形,给你你想要的,\n手持万用表,表,tool,100,测量电阻电压电流,总是缺电池,\n台式万用表,表,tool,2000,测量电阻电压电流,给你看你想要的,\n频谱仪,频谱仪,tool,2500,显示频谱,无,\n电子负载,负载,tool,500,做电源必备,无,\n高级电子负载,负载,tool,2000,做电源必备,无,\n,,,,,,\n,,,,,,\n###### skill,,,,,,\nname,icon,pre,des,,,\n论文,mindmastery,none,使用文字与图片解释你的作品4ww,,,\n线性代数,magicabsorption,none,基础数学技能，矩阵处理相关,,,\n微积分,spellimpact,none,基础数学技能，数据处理相关,,,\nC语言,focusmagic,none,基础编程技能，单片机编程必备,,,\n电路分析,arcanesubtlety,none,基础电子技能，用于对电路进行简单分析,,,\n模拟电路,criticalmass,\"微积分v2,电路分析v5\",中级电子技能，电子设计核心技能，用于分析与设计三极管与MOS管相关电路,,,\nPPT,arcaneconcentration,论文v3,使用文字与图片与效果展示你的作品或想法,,,\n信号与系统,magicattunement,\"线性代数v2,微积分v5\",通信相关核心技能，用于对信号进行简单分析,,,\n数字电路,spellpower,电路分析v3,中级电子技能，电子设计核心技能，用于分析与设计数字芯片相关电路,,,\n单片机原理,firepower,\"电路分析v2,C语言v4\",中高级电子技能，嵌入式的重要基础，用于理解单片机的原理,,,\n数据结构与算法,presenceofmind,C语言v5,中级编程技能，笔试面试的重要部分，用于组织数据，减少计算所需空间与时间,,,\n演讲,burnout,PPTv2,使用口才与PPT结合来展示你的作品或想法,,,\n其他语言,prismaticcloak,C语言v2,中高级编程技能，常用于APP与web编程,,,\n数字信号处理,arcticwinds,信号与系统v5,通信相关核心技能，用于处理数字信号,,,\n电磁场与电磁波,arcanepower,\"信号与系统v7,模拟电路v5\",高级电子技能，用于分析电磁波,,,\n开关电源,missilebarrage,模拟电路v7,高级电子技能，用于制作开关电源,,,\n接口技术,arcticreach,数字电路v4,嵌入式相关核心技能，用于编写单片机片上外设与板上外设的驱动,,,\n自动控制,arcanepotency,数据结构与算法v5,用于优化设备的控制算法,,,\n上位机软件,arcaneflows,数据结构与算法v3,用于对设备进行分析与控制,,,\n图像识别,arcanemind,\"数字信号处理v3,数据结构与算法v7\",高级数学技能，用于识别图像,,,\n传销,arcanemeditation,演讲v10,使用口才与其他资料影响别人的想法,,,\n射频电路,arcaneempowerment,电磁场与电磁波v3,高级电子技能，用于分析与设计射频电路,,,\nFPGA与CPLD,arcanepower,接口技术v5,高级嵌入式技能，用于设计数字可编程电路与仿真ASIC,,,\n嵌入式,incanter'sabsorption,\"接口技术v3,单片机原理v5,数据结构与算法v3\",高级技能，用于设计嵌入式相关电路与软件,,,\n  \n";
var lines = dataRaw.split("\n").filter(function (v, i) {
    return Boolean(v);
});
console.log(dataRaw);
var tables = {};
var headerMap = {};
//console.log(lines);
var state = "waitName";
var currentTableName = void 0;
var headerMatch = /###### (\S+?),+/;
for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    var match = void 0;
    switch (state) {
        case "waitName":
            match = line.match(headerMatch);
            if (match) {
                currentTableName = match[1];
                tables[currentTableName] = [];
                state = "waitHeader";
            }
            break;
        case "waitHeader":
            var headers = line.split(/,/).filter(function (v, i) {
                return Boolean(v);
            });
            console.log(headers);
            headerMap[currentTableName] = headers;
            console.log(headers);
            state = "waitBody";
            break;
        case "waitBody":
            match = line.match(headerMatch);
            if (match) {
                i--;
                state = "waitName";
            } else {
                var _ret = function () {
                    var tds = line.replace(/"(\S+?),(\S+?)"/, "$1{{{$2").split(",");
                    var tr = {};
                    if (!tds[0] && !tds[1]) {
                        return "continue";
                    }
                    headerMap[currentTableName].forEach(function (v, i) {
                        tr[v] = tds[i];
                    });
                    tables[currentTableName].push(tr);
                    //            console.log(tables)
                }();

                if (_ret === "continue") continue;
            }
            break;
    }
}
console.log(tables);
var rootModule = angular.module("main", ["contenteditable", "ngAnimate"]);

var tableHeaders = {};
for (var i in tables) {
    tableHeaders[i] = [];
    for (var j in tables[i][0]) {
        tableHeaders[i].push(j);
    }
}
var hotKeyMap = {
    ctrl: {},
    alt: {},
    shift: {},
    meta: {}
};
//modifier key , normal key , cb   or
//normal key , cb   or
function registerHotKey() {
    var modifier = void 0;
    var normal = void 0;
    var cb = void 0;
    if (typeof arguments[1] == "string") {
        modifier = arguments[0];
        normal = arguments[1];
        cb = arguments[2];
    } else {
        normal = arguments[0];
        cb = arguments[1];
    }
    if (modifier) {
        hotKeyMap[modifier][normal] = cb;
    } else {
        hotKeyMap[normal] = cb;
    }
}

function getCursortPosition(ctrl) {
    //获取光标位置函数
    var CaretPos = 0;
    // IE Support
    if (document.selection) {
        ctrl.focus();
        var Sel = document.selection.createRange();
        Sel.moveStart('character', -ctrl.value.length);
        CaretPos = Sel.text.length;
    }
    // Firefox support
    else if (ctrl.selectionStart || ctrl.selectionStart == '0') CaretPos = ctrl.selectionStart;else {
            console.log("not support");
        }
    return CaretPos;
}
setTimeout(function () {
    console.dir($(":focus")[0]);
    console.log(getCursortPosition($(":focus")[0]));
}, 1000);

function handleHotKey(e) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
    }

    var normal = specialKeys[e.keyCode];
    var modifiers = ["ctrl", "alt", "shift", "meta"];
    var ret = false;
    modifiers.forEach(function (v, i) {
        if (e[v + "Key"]) {
            var cb = hotKeyMap[v][normal];
            console.log(cb);
            if (cb) {
                ret = Boolean(cb.apply(undefined, args.concat([normal, v])));
            }
        }
    });
    //    console.log(!ret,hotKeyMap[normal])
    if (!ret && hotKeyMap[normal] && _typeof(hotKeyMap[normal]) != "object") {
        return Boolean(hotKeyMap[normal].apply(hotKeyMap, args.concat([normal])));
    }
    return ret;
}

function clearTd(column, row, tableName, columnName) {
    //    $(`table[data-table='${tableName}'] td[data-column='${column}'][data-row='${row}']`).empty().trigger("keydown");
    console.log(tableName, row, columnName);
    tables[tableName][row][columnName] = " ";
    return true;
}

function changeRow(column, row, tableName, columnName, dir) {
    var newRow = void 0;
    if (dir == "down") {
        newRow = row + 1;
    } else {
        newRow = row - 1;
    }
    $("table[data-table='" + tableName + "'] td[data-column='" + column + "'][data-row='" + newRow + "']").focus();
    return true;
}

function newLine(column, row, tableName, columnName) {
    var newLine = {};

    for (var i in tables[tableName][0]) {
        newLine[i] = " ";
    }
    newLine.name = tables[tableName].length + 1;
    tables[tableName].splice(row + 1, 0, newLine);
    return true;
}
rootModule.controller("mainController", ["$scope", "$http", function (sp, $http) {
    sp.$watch("tableHeaders", function (headers, preHeaders) {}, true);
    registerHotKey("up", changeRow);
    registerHotKey("down", changeRow);
    registerHotKey("alt", "d", clearTd);
    registerHotKey("ctrl", "enter", newLine);
    console.log(hotKeyMap);

    function onKeyDown(e, column, row, tableName, columnName) {
        console.log(e);
        if (handleHotKey(e, column, row, tableName, columnName)) {
            e.preventDefault();
        }
    }
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
    }], ['新建列', function ($itemScope) {
        var newKey = prompt("输入新列名");
        if (!newKey) {
            return;
        }
        var key = $itemScope.key;
        var tableName = $itemScope.tableName;

        sp.tables[tableName].forEach(function (item, i) {
            item[newKey] = "";
        });
    }], ['删除列', function ($itemScope) {
        if (!confirm("是否确定删除列")) {
            return;
        }
        var key = $itemScope.key;
        var tableName = $itemScope.tableName;

        sp.tables[tableName].forEach(function (item, i) {
            delete item[key];
        });
    }]];
    _.extend(sp, {
        tables: tables,
        tableHeaders: tableHeaders,
        onKeyDown: onKeyDown
    });
}]).filter("md", function () {
    return function (tables) {
        var result = "";
        angular.forEach(function (v, k) {});

        var _loop = function _loop() {
            var table = tables[i];
            var keys = _.keys(table[0]);
            keys = keys.filter(function (v, i) {
                if (v[0] == "$") {
                    return false;
                }
                return true;
            });
            var tableName = "###### " + i;
            var headerStr = keys.join("|");
            var spliterStr = "---|".repeat(keys.length - 1) + "---";

            result += [tableName, headerStr, spliterStr].join("\n") + "\n";
            result += table.reduce(function (pre, v, i) {
                var arr = [];
                keys.forEach(function (vv, ii) {
                    arr.push(v[vv]);
                });

                return pre += arr.join("|") + "\n";
            }, "");
            result += "\n\n";
        };

        for (var i in tables) {
            _loop();
        }
        return result;
    };
}).filter("md", function () {
    return function (tables) {
        var result = "";
        angular.forEach(function (v, k) {});

        var _loop2 = function _loop2() {
            var table = tables[i];
            var keys = _.keys(table[0]);
            keys = keys.filter(function (v, i) {
                if (v[0] == "$") {
                    return false;
                }
                return true;
            });
            var tableName = "###### " + i;
            var headerStr = keys.join("|");
            var spliterStr = "---|".repeat(keys.length - 1) + "---";

            result += [tableName, headerStr, spliterStr].join("\n") + "\n";
            result += table.reduce(function (pre, v, i) {
                var arr = [];
                keys.forEach(function (vv, ii) {
                    arr.push(v[vv]);
                });

                return pre += arr.join("|") + "\n";
            }, "");
            result += "\n\n";
        };

        for (var i in tables) {
            _loop2();
        }
        return result;
    };
}).filter("csv", function () {
    return function (tables) {
        var result = "";

        var _loop3 = function _loop3() {
            var table = tables[i];
            var keys = _.keys(table[0]);
            keys = keys.filter(function (v, i) {
                if (v[0] == "$") {
                    return false;
                }
                return true;
            });
            var tableName = "###### " + i + ",".repeat(keys.length - 1);
            result += tableName + "\n";
            var headerStr = keys.join(",");
            result += headerStr + "\n";
            result += table.reduce(function (pre, v, i) {
                var arr = [];
                keys.forEach(function (vv, ii) {
                    arr.push("\"" + v[vv] + "\"");
                });

                return pre += arr.join(",") + "\n";
            }, "");
            result += "\n\n";
        };

        for (var i in tables) {
            _loop3();
        }
        return result;
    };
});

var specialKeys = {
    8: "backspace",
    9: "tab",
    10: "return",
    13: "enter",
    16: "shift",
    17: "ctrl",
    18: "alt",
    19: "pause",
    20: "capslock",
    27: "esc",
    32: "space",
    33: "pageup",
    34: "pagedown",
    35: "end",
    36: "home",
    37: "left",
    38: "up",
    39: "right",
    40: "down",
    45: "insert",
    46: "del",
    59: ";",
    61: "=",
    91: "meta",
    96: "0",
    97: "1",
    98: "2",
    99: "3",
    100: "4",
    101: "5",
    102: "6",
    103: "7",
    104: "8",
    105: "9",
    106: "*",
    107: "+",
    109: "-",
    110: ".",
    111: "/",
    112: "f1",
    113: "f2",
    114: "f3",
    115: "f4",
    116: "f5",
    117: "f6",
    118: "f7",
    119: "f8",
    120: "f9",
    121: "f10",
    122: "f11",
    123: "f12",
    144: "numlock",
    145: "scroll",
    173: "-",
    186: ";",
    187: "=",
    188: ",",
    189: "-",
    190: ".",
    191: "/",
    192: "`",
    219: "[",
    220: "\\",
    221: "]",
    222: "'"
};
for (var i = 65; i < 65 + 26; i++) {
    specialKeys[i] = String.fromCharCode(i).toLowerCase();
}
//let specialKeys={};
//for(var i in specialKeysRaw){
//    specialKeys[specialKeysRaw[i]]=i;
//}