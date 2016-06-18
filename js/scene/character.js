let exports = {};
let sceneId = "character";
let $dom = scene.getScene(sceneId);
let sceneThis = {
    id: sceneId,
    preEnter,
    $dom,
    init
};
let $$ = $dom.find.bind($dom);

function init() {

}
const initPoints = 3;
module.controller("character_controller", ["$scope", "$rootScope", function (sp, rsp) {
    let index = 0;

    function selectItem(item) {

        if (checkDisabled(item)) {
            return;
        }
        item.selecting = true;
        item.index = index;
        index++;
        updatePoints();

    }

    function deSelectItem(item) {

        item.selecting = false;
        updatePoints();
    }

    function getGottenPoints() {
        let points = 0;

        for (var i in res.weakness) {
            let item = res.weakness[i];

            if (item.selecting) {
                points += item.cost;
            }
        }

        return points;
    }

    function getUsedPoints() {
        let points = 0;

        for (var i in res.goodness) {
            let item = res.goodness[i];

            if (item.selecting) {
                points += item.cost;
            }
        }
        return points;
    }

    function getRemainPoints() {
        let points = initPoints - getGottenPoints() - getUsedPoints();
        return points;
    }

    function checkDisabled(item) {        
        return item.contradiction.some(function (v, i) {
            if (res.goodness[v] && res.goodness[v].selecting || res.weakness[v] && res.weakness[v].selecting) {
                return true;
            }
        })
    }

    function updatePoints() {
        sp.usedPoints = getUsedPoints();
        sp.remainPoints = getRemainPoints();
    }
    updatePoints();


    let goodnessPairs = _.pairs(res.goodness);
    let weaknessPairs = _.pairs(res.weakness);
    let allPairs = goodnessPairs.concat(weaknessPairs);

    function random() {
        allPairs.forEach(function (v, i) {
            v[1].selecting = false;
        });
        updatePoints();
        let len = 0;
        while (len < 100) {
            let index = _.random(0, allPairs.length - 1);
            let item = allPairs[index][1];
            if (sp.remainPoints == 0) {
                break;
            }
            if (sp.remainPoints < item.cost) {
                continue;
            }

            selectItem(item);
            len++;
            console.log(len, index)
        }
        len = 0;
        while (len < 100) {
            let index = _.random(0, weaknessPairs.length - 1);
            let item = weaknessPairs[index][1];
            if (sp.remainPoints == 0) {
                break;
            }

            if (sp.remainPoints < -item.cost) {
                continue;
            }

            deSelectItem(item);

            len++;
            console.log(len, index)
        }

    }
    function setHovering(item){
        sp.hovering=item;
    }
    let $card=$(".hover-card");
    let $wrap=$(".scene-wrap");
    $wrap.on("mousemove",function(e){
//        let x=e.clientX*100/$wrap.width();
//        let y=e.clientY*100/$wrap.height();
//        console.log(e)
//        console.log(x,y)
        $card.css("left",e.clientX+40+"px");
        $card.css("top",e.clientY+2+"px");  
//        console.log(e.clientY,$wrap.height())
    })
    _.extend(sp, {
        selectItem,
        deSelectItem,
        getUsedPoints,
        getRemainPoints,
        checkDisabled,
        random,
        setHovering,        
    })
}]);

function preEnter() {

}


scene.register(sceneThis);
return exports;