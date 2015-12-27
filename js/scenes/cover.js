var scene = new sys.Scene({
    id: "cover",
    dom_id: "scene_cover",
    init: function () {



        angular.module('home_app').controller("cover_controller", function ($scope) {
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


    },
    pre_enter: function () {
        $('.logo-title').addClass('animated zoomIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
            function () {
                $(this).removeClass('animated zoomIn');
            });
    }
})