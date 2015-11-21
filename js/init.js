
define(["angular","sys","scenes/home2", "scenes/bigmap", "scenes/chat", "scenes/cover", "scenes/preload", "scenes/save_load",'angular-animate','skill_tree'], function (angular,sys) {

    var exports = {
        game_enter: function () {
            sys.zoom_and_developer_init();
            $(".section").hide();
            sys.to_scene("preload");
        }
    };
    $("#miao-first-tip").remove();
    setTimeout(function(){
        angular.bootstrap("body", ['home_app']);
    },100)
    
    return exports;
})
