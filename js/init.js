
define(["angular","sys","scenes/home2", "scenes/bigmap", "scenes/chat", "scenes/cover", "scenes/preload", "scenes/save_load",'angular-animate','skill_tree'], function (angular,sys) {

    var exports = {
        game_enter: function () {
            sys.zoom_and_developer_init();
            $(".section").hide();
            sys.to_scene("preload");
        }
    };
    $("#miao-first-tip").remove();
    angular.bootstrap("body", ['home_app']);
    return exports;
})
var game_enter = function () {

}