let exports = {};
let sceneId = "chat";
let $dom = scene.getScene(sceneId);
let sceneThis = {
    id: sceneId,
    preEnter,
    $dom,
    init
};
let $$ = $dom.find.bind($dom);


function init() {


    module.controller("ChatController", function ($scope) {

        //                console.log(plot);
        //                plot.init(); 

    })


}

function preEnter() {
    
    plot.init();
//    plot_core.init();
    //            plot.running = start();
    //            plot.running.next()
}

function enter() {}



scene.register(sceneThis);
return exports;