
define(["scenes/home2", "scenes/bigmap", "scenes/chat", "scenes/cover", "scenes/preload", "scenes/save_load","sys","angular",'angular-animate','skill_tree'], function () {
    var angular=require("angular")
    var sys=require("sys")
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