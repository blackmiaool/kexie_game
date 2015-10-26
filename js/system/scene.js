define(["sys"],function () {  
    return function(){
        
    }
    this.scenes = {};
    this.scene_register = function (scene) {
        this.scenes[scene.name] = scene;
        if (scene.init) {
            scene.init();
        }
    }
    var section_name_current;
    
})