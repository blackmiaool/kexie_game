let exports = {};
let sceneId = "home";
let $dom = scene.getScene(sceneId);
let sceneThis = {
    id: sceneId,
    preEnter,
    $dom,
};
let $$ = $dom.find.bind($dom);
scene.register(sceneThis);

function preEnter(){
    
}


return exports;