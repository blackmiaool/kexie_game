let exports = {};
let sceneId = "make-select";
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
};
v.work=works;




scene.register(sceneThis);
return exports;