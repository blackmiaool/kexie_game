var scene = new sys.Scene({
    id: "cover",
    dom_id: "section_cover",
    init: function () {



        angular.module('home_app').controller("cover_controller", function ($scope) {


        })




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
        $(".cover_btn#cover_btn1").click(
            function () {
                sys.to_scene("chat", "cover");
            })
        $(".cover_btn#cover_btn2").click(
            function () {
                sys.to_scene("save_load", "load", "cover");

            })
        $(".cover_btn#cover_btn3").click(
            function () {
                return;
                sys.to_scene("about", "save");
            })
    },
    pre_enter: function () {
        $('.logo-title').addClass('animated zoomIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
            function () {
                $(this).removeClass('animated zoomIn');
            });
    }
})