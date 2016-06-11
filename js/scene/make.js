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


function preEnter(){
    
}
function init(){
    
}

module.controller("make_controller", ["$scope", "$rootScope","$timeout", function (sp, rsp,$timeout) {
    console.log()
}])






scene.register(sceneThis);
return exports;