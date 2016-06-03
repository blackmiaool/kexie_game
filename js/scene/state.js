let exports = {};
let sceneId = "state";
let $dom = scene.getScene(sceneId);
let sceneThis = {
    id: sceneId,
    preEnter,
    $dom,
};
let $$ = $dom.find.bind($dom);
scene.register(sceneThis);
/*
需要展示:
    状态,技能树,朋友,物品,经历,设备
    状态:数字 模拟 焊功 论文 声望 道德 秩序 金钱
    技能树:新做一套
    朋友:看看侠客怎么做的
    物品:wait
    经历:模仿
    设备:总结出关键设备  
*/
const itemKinds=[{name:"仪器",icon:"microscope"},{name:"IC",icon:"cpu"},{name:"基础器件",icon:"settings"},{name:"机械",icon:"physics"},{name:"神器",icon:"molecule"}];
const pages = [
        {
            name: "状态",
            class: "ym-success",
        },
        {
            name: "技能",
            class: "ym-warning",
        },
        {
            name: "朋友",
            class: "ym-success",
        },
        {
            name: "经历",
            class: "ym-warning",
        },
        {
            name: "物品",
            class: "ym-success",
        },
//        {
//            name: "设备",
//            class: "ym-success",
//        },
    ];
module.controller("state-controller", ["$scope", function (sp) {
    
    //console.log(res.pp)
    function getName(skill) {
        let show = true;
        //        console.log(skill);
        if (skill.pre.length != 0) {
            skill.pre.forEach(function (v, i) {
                if (v.skill.level < v.level)
                    show = false;
            })
        }
        if (show) {
            return skill.name;
        } else {
            return "???";
        }
    }

    function getPre(skill) {
        let preText = "";
        skill.pre.forEach(function (v, i) {
            if (i > 0)
                preText += " , ";
            preText += v.skill.name + "Lv" + v.level;
        })
        return preText;
    }


    function setPage(name) {
        sp.currentPage = name;
    }

    function setP(pp) {
        console.log(pp);
        sp.currentP = pp;
    }
    function setItemKind(kind){
        sp.currentItemKind=kind;
    }
    //    console.log(skills)
    _.extend(sp, {
        pp: res.pp,
        pages,
        v,
        setPage,
        skills,
        getPre,
        getName,
        setP,
        itemKinds,
        setItemKind
    });
    //    console.log(v);
}]).filter('skillLevel', function () {
    var filter = function (level) {
        if (level == 0) {
            return "菜鸟"
        } else if (level < 4) {
            return "新手"
        } else if (level < 7) {
            return "熟手"
        } else if (level < 10) {
            return "高手"
        } else if (level == 10) {
            return "大师"
        }
        return input + '...';
    };
    return filter;
});

function preEnter() {}


return exports;