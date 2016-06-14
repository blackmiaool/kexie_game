let exports = {};
let sceneId = "make";
let $dom = scene.getScene(sceneId);

let sceneThis = {
    id: sceneId,
    preEnter,
    $dom,
    init
};
let $$ = $dom.find.bind($dom);


function preEnter() {

}

function init() {

}
let works = {
    硬件流水灯: [{
        name: "硬件流水灯",
        prefix: {
            feature: "幸运",
            basic: "未完成",
        },
        process: {
            basic: 3,
            basicMax: 10,
            capability: 0,
            capabilityMax: 5,
            innovation: 0,
            innovationMax: 3,
            stability: 0,
            stabilityMax: 10,
        },
        property: [
            {
                kind: "lucky",
                value: "3",
        }
        ],
    }]
}
v.work=works;
console.log(v.work["硬件流水灯"][0].name)
module.controller("make_controller", ["$scope", "$rootScope", "$timeout", function (sp, rsp, $timeout) {
    function selectProductKind(product) {
        sp.productSelectPageIndex = 1;
        sp.selectingProductKind = product.name;
    }

    function productSelectPrevPage() {
        sp.productSelectPageIndex--;
        sp.selectingProductKind = undefined;
    }

    function goHome() {
        scene.go("home");
    }
    _.extend(sp, {
        selectingProductKind: "硬件流水灯",
        productSelectPageIndex: 1,
        selectProductKind,
        productSelectPrevPage,
        goHome
    });
}])






scene.register(sceneThis);
return exports;