let exports = {};
let sceneId = "cover";
let $dom = scene.getScene(sceneId);
let sceneThis = {
    id: sceneId,
    preEnter,
    $dom,
    init
};
let $$ = $dom.find.bind($dom);

function init() {
    module.controller("cover_controller", function ($scope) {
        $scope.start = function () {
            scene.go("chat", "cover");
        }
        $scope.read = function () {
            scene.go("save", "load", "cover");
        }
        $scope.about = function () {
            scene.go("about");
        }
    })
}

function preEnter() {

}


scene.register(sceneThis);
return exports;