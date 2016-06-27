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
module.controller("make_controller", ["$scope", "$rootScope", "$timeout", function (sp, rsp, $timeout) {
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
        console.log(sp.working)
        
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
    })

}])


scene.register(sceneThis);
return exports;