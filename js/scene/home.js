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
    icon: "market"
}, {
    name: "休息",
    icon: "bed"
}, {
    name: "状态",
    icon: "resume"
}, ]

scene.register(sceneThis);
module.controller("home-controller", ["$scope", "$rootScope",
function (sp, rsp) {
        let monkey;
        function getActionIcon(name) {
            return `${common.resPath}icon/${name}.svg`;
        }

        function getMonth(month, part) {
            let monthStr = month - 1 + "月";
            const pStr = ["上旬", "中旬", "下旬"]
            let partStr = pStr[part];
            return monthStr + partStr;
        }

        function doAction(action) {
            switch (action.name) {
            case "状态":
                scene.go("state");
                break;
            }
        }

        function hover(action) {
            console.log(action);
            sp.monkey=common.resPath+`monkey/${action.icon}.gif`;
        }
        _.extend(sp, {
            v,
            res,
            actions,
            getActionIcon,
            getMonth,
            doAction,
            monkey,
            hover
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