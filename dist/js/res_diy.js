"use strict";

var skill = {};
var skills = {};
var combines = {};
skill = {
    论文: {},
    PPT: {
        pre: [skill.论文]
    },
    演讲: {
        pre: [skill.PPT]
    },
    线性代数: {},
    微积分: {},
    电路分析: {},
    C语言: {},

    信号与系统: {
        pre: [skill.线性代数, skill.微积分]
    },
    模拟电路: {
        pre: [skill.微积分, skill.电路分析]
    },
    数字电路: {
        pre: [skill.电路分析, skill.C语言]
    },
    单片机原理: {
        pre: [skill.电路分析, skill.C语言]
    },
    数据结构与算法: {
        pre: [skill.C语言]
    },
    其他语言: {
        pre: [skill.C语言]
    },
    数字信号处理: {
        pre: [skill.信号与系统]
    },
    电磁场与电磁波: {
        pre: [skill.信号与系统, skill.模拟电路]
    },
    开关电源: {
        pre: [skill.模拟电路]
    },
    接口技术: {
        pre: [skill.数字电路]
    },
    自动控制: {
        pre: [skill.数据结构与算法]
    },
    上位机软件: {
        pre: [skill.数据结构与算法]
    },
    图像识别: {
        pre: [skill.数字信号处理]
    },
    射频电路: {
        pre: [skill.电磁场与电磁波]
    },
    FPGA与CPLD: {
        pre: [skill.接口技术]
    },
    嵌入式: {
        pre: [skill.接口技术, skill.单片机原理, skill.数据结构与算法]
    }

};
var combine = [];
var item = [];
var items = {};
var quest = [];

for (var i in combine) {
    combine[i].product = [];
}
//var item_update = function () {
//    for (i in item) {
//        item[i].cnt = v.item[i];
//    }
//}
//for (i in item) {
//    item[i].name = i;
//    item[i].cnt = 0;
//}

var scene_onStart = [];

function outf(text) {
    console.warning(text);
}
function builtinRead(x) {
    if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined) throw "File not found: '" + x + "'";
    return Sk.builtinFiles["files"][x];
}
//
//function runit() {
////   var proggg = document.getElementById("yourcode").value;
////   var mypre = document.getElementById("output");
////   mypre.innerHTML = '';
//   Sk.pre = "output";
//   Sk.configure({output:outf, read:builtinRead});
//   (Sk.TurtleGraphics || (Sk.TurtleGraphics = {})).target = 'mycanvas';
//   var myPromise = Sk.misceval.asyncToPromise(function() {
//       return Sk.importMainWithBody("<stdin>", false, proggg, true);
//   });
//   myPromise.then(function(mod) {
//       console.log('success');
//   },
//       function(err) {
//       console.log(err.toString());
//   });
//}