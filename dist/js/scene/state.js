"use strict";

define(["require", "system-scene", "system-sys", "angular", "system-dbg", "v", "res", "angular-module", "plot", "system-common"], function (require, scene, sys, angular, dbg, v, res, module, plot, common) {
    var exports = {};
    var sceneId = "state";
    var $dom = scene.getScene(sceneId);
    var sceneThis = {
        id: sceneId,
        preEnter: preEnter,
        $dom: $dom
    };
    var $$ = $dom.find.bind($dom);

    window.dd = { scene: scene, common: common, v: v, res: res };

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
    console.log(common);
    var itemKinds = [{
        name: "基础器件",
        icon: common.resPath + "icon/settings"
    }, {
        name: "IC",
        icon: common.resPath + "icon/cpu"
    }, {
        name: "机械",
        icon: common.resPath + "icon/mechanical-arm2"
    }, {
        name: "仪器",
        icon: common.resPath + "icon/microscope"
    }, {
        name: "神器",
        icon: common.resPath + "icon/god-1"
    }];
    var pages = [{
        name: "状态",
        class: "ym-success"
    }, {
        name: "技能",
        class: "ym-warning"
    }, {
        name: "朋友",
        class: "ym-success"
    }, {
        name: "经历",
        class: "ym-warning"
    }, {
        name: "物品",
        class: "ym-success"
    }];

    //        {
    //            name: "设备",
    //            class: "ym-success",
    //        },
    module.controller("state-controller", ["$scope", function (sp) {
        function setPage(name) {
            sp.currentPage = name;
        }
        function back() {
            scene.go("home");
        }

        _.extend(sp, {
            pages: pages,
            v: v,
            setPage: setPage,
            back: back,
            res: res
        });
    }]);
    module.filter('skillLevel', function () {
        var filter = function filter(level) {
            if (level == 0) {
                return "菜鸟";
            } else if (level < 4) {
                return "新手";
            } else if (level < 7) {
                return "熟手";
            } else if (level < 10) {
                return "高手";
            } else if (level == 10) {
                return "大师";
            }
        };
        return filter;
    });
    //module.controller("status-controller", ["$scope", "$rootScope", function (sp, rsp) {
    //
    //                                       }])
    module.controller("status-controller", ["$scope", "$rootScope", function (sp, rsp) {}]);
    module.controller("skill-controller", ["$scope", "$rootScope", function (sp, rsp) {
        function getSkillName(skill) {
            var show = true;
            //        console.log(skill);
            if (skill.pre.length != 0) {
                skill.pre.forEach(function (v, i) {
                    if (v.skill.level < v.level) show = false;
                });
            }
            if (show) {
                return skill.name;
            } else {
                return "???";
            }
        }

        function getPre(skill) {
            var preText = "";
            skill.pre.forEach(function (v, i) {
                if (i > 0) preText += " , ";
                preText += v.skill.name + "Lv" + v.level;
            });
            return preText;
        }
        _.extend(sp, {
            getSkillName: getSkillName,
            skills: res.skills,
            getPre: getPre
        });
    }]);
    module.controller("people-controller", ["$scope", "$rootScope", function (sp, rsp) {
        function setP(pp) {
            console.log(pp);
            sp.currentP = pp;
        }

        _.extend(sp, {
            pp: res.pp,
            setP: setP
        });
    }]);
    module.controller("story-controller", ["$scope", "$rootScope", function (sp, rsp) {
        _.extend(sp, {});
    }]);
    module.controller("item-controller", ["$scope", "$rootScope", function (sp, rsp) {
        function setItemKind(kind) {
            sp.currentItemKind = kind;
        }
        //        console.log(res.items);
        var lastArr = [[], [], [], [], [], [], []];
        lastArr.forEach(function (v, i) {
            for (var j = 0; j < i; j++) {
                v.push({});
            }
        });
        function getLast() {
            var lineCnt = 5;
            var cnt = 0;
            for (var i in res.items) {
                cnt++;
            }
            cnt = lineCnt - cnt % lineCnt;

            return lastArr[cnt];
        }
        function selectItem(item) {
            sp.selectingItem = item;
        }
        function getIconUrl(item, color) {
            return common.resPath + "icon/item/" + color + "/" + item.icon;
        }

        _.extend(sp, {
            getIconUrl: getIconUrl,
            itemKinds: itemKinds,
            setItemKind: setItemKind,
            getLast: getLast,
            selectItem: selectItem,
            selectingItem: false,
            items: res.items,
            currentItemKind: "基础器件"
        });
    }]);

    function preEnter() {}

    return exports;
});