define(["sys","libs/angular.min"],function(sys,angular){
    function Bigmap_scene() {
    this.name = "bigmap";
    this.init = function () {}
    this.id = "section_bigmap";
    this.pre_enter = function () {
        $("#section_bigmap img").css("opacity", "1")
    }
    this.enter = function () {
        //        L.execute("start(plot)")
        $("#section_bigmap img").animate({
            opacity: "0.7"
        });
    }
}
angular.module('home_app')
    .controller("bigmap_controller", function ($scope) {
        $scope.get_left_points = get_left_points;
        $scope.enter = function (spot) {
            sys.to_scene("chat", spot);
        }

        $scope.btns = spots;
//        console.log(spots);
//
//            {
//                class: "btn-danger",
//                text: "宿舍",
//                left: "464px",
//                top: "35px",
//                icon:"bed",
//            },
//            {
//                class: "btn-success",
//                text: "IC科协",
//                left: "400px",
//                top: "180px",
//                icon:"pawn",
//            },
//        ]
        $scope.go_back = function () {
            sys.to_scene("home")
        }
    })
})
