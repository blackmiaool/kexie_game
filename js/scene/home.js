let exports = {};
let sceneId = "home";
let $dom = scene.getScene(sceneId);
let sceneThis = {
    id: sceneId,
    preEnter,
    $dom,
};
let $$ = $dom.find.bind($dom);
let actions = [{
    name: "上课",
    icon: "conference",
    consume: 3
}, {
    name: "学习",
    icon: "books",
    consume: 4
}, {
    name: "制作",
    icon: "saw",
    consume: 5
}, {
    name: "闲逛",
    icon: "team",
    consume: 5
}, {
    name: "购物",
    icon: "market",
    consume: 0
}, {
    name: "休息",
    icon: "bed",
    consume: 0
}, {
    name: "状态",
    icon: "resume",
    consume: 0
}, ]

scene.register(sceneThis);
module.controller("home-controller", ["$scope", "$rootScope", "$timeout",
function (sp, rsp, $timeout) {
        let monkey;

        function getActionIcon(name) {
            return `${common.resPath}icon/${name}.svg`;
        }

        function getMonth(part) {
            let monthStr = parseInt((part+27)/3)%12+1+ "月";
            const pStr = ["上旬", "中旬", "下旬"]
            let partStr = pStr[part%3];
            return monthStr + partStr;
        }

        function doAction(action) {
            if (v.power < action.consume) {
                return;
            }
            setMonkey(action);
            switch (action.name) {
            case "状态":
                scene.go("state");
                break;
            case "上课":
                showMonkey(action);
                costPower(action);
                break;
            case "休息":
                showMonkey(action);
                restorePower(10);
                endTurn();
                break;
            }


        }

        function endTurn() {
            sp.ending=true;
            $timeout(function(){
                sp.endingTransition=false;
            },600)
            $timeout(function(){
                v.time.part++;                
                sp.ending=false;
            },650)
            $timeout(function(){
                sp.endingTransition=true;
            },800)
        }

        function restorePower(value) {
            v.power += value;
            if (v.power > v.powerMax) {
                v.power = v.powerMax;
            }
        }

        function costPower(action) {
            v.power -= action.consume;
        }

        function showMonkey(action) {
            setMonkey(action)
            sp.showMonkey = true;
            $timeout(function () {
                sp.showMonkey = false;
            }, 1000)
        }

        function setMonkey(action) {
            console.log(action);
            //            if (action.consume) {
            sp.monkey = common.resPath + `monkey/${action.icon}.gif`;
            //            } else {
            //                sp.monkey = "";
            //            }
        }
        _.extend(sp, {
            v,
            res,
            actions,
            getActionIcon,
            getMonth,
            doAction,
            monkey,
            showMonkey: false,
            ending:false,
            endingTransition:true,
        });
}])
module.filter('term', function () {
    var filter = function (level) {
        return `第${level}学期`
    };
    return filter;
});

function preEnter() {

}


return exports;