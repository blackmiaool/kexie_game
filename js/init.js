


function scene(name, pre_enter_callback, enter_callback, init_callback, id) {
    this.name = name;
    this.enter = enter_callback;
    this.pre_enter = pre_enter_callback;
    this.init = init_callback;
    this.id = id;

}

function scene_register_all() {

    sys.scene_register(new Preload_scene());
    sys.scene_register(new Cover_scene());
    sys.scene_register(new Save_load_scene());
    sys.scene_register(new Home_scene());
    sys.scene_register(new Chat_scene());
    sys.scene_register(new Bigmap_scene());
}

var section_running; 
define(["scenes/home2","scenes/bigmap","scenes/chat","scenes/cover","scenes/preload","scenes/save_load"], function () {
    var exports = {
        game_enter: function () {
            sys.zoom_and_developer_init();
            $(".section").hide();
            scene_register_all();
            section_running = false;
            sys.to_scene("preload");
        }
    };
    return exports;
})
var game_enter = function () {

}
var section = {}
