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
            scene.to_scene("chat", "cover");
        }
        $scope.read = function () {
            scene.to_scene("save", "load", "cover");
        }
        $scope.about = function () {
            scene.to_scene("about", "save");
        }
    })
}

function preEnter() {
    $('.logo-title').addClass('animated zoomIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
        function () {
            $(this).removeClass('animated zoomIn');
        });
}


scene.register(sceneThis);
return exports;