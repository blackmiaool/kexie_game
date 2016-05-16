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
    console.log(234)
    module.controller("cover_controller", function ($scope) {
        $scope.start = function () {
            sys.to_scene("chat", "cover");
        }
        $scope.read = function () {
            sys.to_scene("save", "load", "cover");
        }
        $scope.about = function () {
            sys.to_scene("about", "save");
        }


        $(".cover_btn").mouseover(
            function (e) {
                var eve = e || window.event;
                eve.preventDefault();
                var index = $(this).context.attributes.indexx.value
                var ac = []
                ac[0] = "swing"
                ac[1] = "rubberBand"
                ac[2] = "tada"
                $(this).addClass('animated ' + ac[index]).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
                    function () {
                        $(this).removeClass('animated ' + ac[index]);
                    });
            })
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