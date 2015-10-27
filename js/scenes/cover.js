define(["scene"], function () {
    function Cover_scene() {
        this.name = "cover";
        this.init = function () {
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
        }

        this.id = "section_cover";

        this.pre_enter = function () {
            $('.logo-title').addClass('animated zoomIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
                function () {
                    $(this).removeClass('animated zoomIn');
                });




            //
            //        $('.logo-title').addClass('animated hinge').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
            //            function () {
            //
            //                $(this).removeClass('animated hinge')
            //                cover_order_set(1)
            //                $(this).remove();
            //
            //            });
            //
            //        $(".cover_btn#cover_btn1").addClass('animated bounceOut')
            //            .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
            //                function () {
            //                    $(this).remove();
            //                });
            //
            //        $(".cover_btn#cover_btn2").addClass('animated bounceOut')
            //            .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
            //                function () {
            //                    $(this).remove();
            //                });
            //
            //        $(".cover_btn#cover_btn3").addClass('animated bounceOut').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
            //            function () {
            //                cover_order_set(2)
            //                $(this).remove();
            //            });
            //
            //        $(".cover_btn#cover_btn1").remove()
            //        $(".cover_btn#cover_btn2").remove()
            //        $(".cover_btn#cover_btn3").remove()

        }
    }
})