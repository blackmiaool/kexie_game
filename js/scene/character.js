let exports = {};
let sceneId = "character";
let $dom = scene.getScene(sceneId);
let sceneThis = {
    id: sceneId,
    preEnter,
    $dom,
    init
};
let $$ = $dom.find.bind($dom);

function init() {
    module.controller("character_controller", function ($scope) {

    })
}

function preEnter() {

}


scene.register(sceneThis);
return exports;