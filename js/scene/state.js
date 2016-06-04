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
console.log(common)
const itemKinds = [{
    name: "基础器件",
    icon: common.resPath+"icon/settings"
}, {
    name: "IC",
    icon: common.resPath+"icon/cpu"
},  {
    name: "机械",
    icon: common.resPath+"icon/mechanical-arm2"
},{
    name: "仪器",
    icon: common.resPath+"icon/microscope"
}, {
    name: "神器",
    icon: common.resPath+"icon/god-1"
}];
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
    function setPage(name) {
        sp.currentPage = name;
    }
    function back(){
        scene.go("home");
    }
    window.dd=function(str){
            eval(str);
    }
    _.extend(sp, {
        pages,
        v,
        setPage,
        back,
    });
}])
module.filter('skillLevel', function () {
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
    };
    return filter;
});
//module.controller("status-controller", ["$scope", "$rootScope", function (sp, rsp) {
//
//                                       }])
module.controller("status-controller", ["$scope", "$rootScope",
function (sp, rsp) {

}])
module.controller("skill-controller", ["$scope", "$rootScope",
function (sp, rsp) {
        function getSkillName(skill) {
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
        _.extend(sp, {
            getSkillName,
            skills:res.skills,
            getPre,
        });
}])
module.controller("people-controller", ["$scope", "$rootScope",
function (sp, rsp) {
        function setP(pp) {
            console.log(pp);
            sp.currentP = pp;
        }

        _.extend(sp, {
            pp: res.pp,
            setP,
        });
}])
module.controller("story-controller", ["$scope", "$rootScope",
function (sp, rsp) {
        _.extend(sp, {});
}])
module.controller("item-controller", ["$scope", "$rootScope",
function (sp, rsp) {
        function setItemKind(kind) {
            sp.currentItemKind = kind;
        }
//        console.log(res.items);
        let lastArr=[[],[],[],[],[],[],[]];
        lastArr.forEach(function(v,i){
            for(var j=0;j<i;j++){
                v.push({});
            }
        })
        function getLast(){
            let lineCnt=5;
            let cnt=0;
            for(var i in res.items){
                cnt++;
            }
            cnt=lineCnt-cnt%lineCnt;
            
            return lastArr[cnt];
        }
        function selectItem(item){
            sp.selectingItem=item;
        }
        function getIconUrl(item){
            return `${common.resPath}icon/item/white/${item.icon}`;
        }
        
        _.extend(sp, {
            getIconUrl,
            itemKinds,
            setItemKind,
            getLast,
            selectItem,
            selectingItem:false,
            items:res.items,
            currentItemKind:"基础器件",
        });
}])


function preEnter() {}


return exports;