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

//let working=v.work["硬件流水灯"][0];
//console.log(working)
console.log(res)
module.controller("MakeController", ["$scope", "$rootScope", "$timeout", function (sp, rsp, $timeout) {
    let extendDirs=["性能","稳定","创新"];
    let extensions={性能:false,稳定:false,创新:false};
    sp.extensions=extensions;
    sp.$watch("extensions",function(v){
        console.log(v);
    },true)
    rsp.$on("make-preEnter", function (e, [kind, id]) {
        if (!kind) {
            console.error("Miss 'kind' paramater");
            return;
        }
        if (id) {
            sp.working = v.work[kind][id];
        } else {

            let working = {
                id: common.getUid(),
                name: kind,
                kind,
                prefix: {},
                state:"raw",
                process: {
                    basic: 3,
                    basicMax: 10,
                },
                property: [
                    {
                        kind: "lucky",
                        value: "3",
                    }],
            };
            sp.working = working;
        }        
    });
    $timeout(function(){
        v.item["五5伍"].cnt=10;
        v.item["LED"].cnt=11;
        v.item["电路基础元件"].cnt=12;
    },1000)
    function checkMaterial(){
        if(!sp.working)
            return false;
        
        let satisfy=!res.products[sp.working.kind].material.some(function(vv,i){
            if(vv.cnt>v.item[vv.name].cnt){
                return true;
            }
        })
        return satisfy;
        
    }
    function print(){
        console.log(arguments);
        return true;
    }
    _.extend(sp, {
        checkMaterial,
        print,
        extendDirs,
       
    })

}])


scene.register(sceneThis);
return exports;