let exports = {};
let sceneId = "make";
let $dom = scene.getScene(sceneId);

let sceneThis = {
    id: sceneId,
    preEnter,
    $dom,
    init
};
let $$ = $dom.find.bind($dom);


function preEnter() {

}

function init() {

}

module.controller("make_controller", ["$scope", "$rootScope", "$timeout", function (sp, rsp, $timeout) {
    function selectProductKind(product){
        sp.productSelectPageIndex=1;
        sp.selectingProductKind=product.name;
    }
    function productSelectPrevPage(){
        sp.productSelectPageIndex--;
        sp.selectingProductKind=undefined;
    }
    function goHome(){
        scene.go("home");
    }
    _.extend(sp, {
        selectingProductKind:undefined,
        productSelectPageIndex:0,
        selectProductKind,
        productSelectPrevPage,
        goHome
    });
}])






scene.register(sceneThis);
return exports;