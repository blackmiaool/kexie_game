let exports = {};
let sceneId = "save";
let $dom = scene.getScene(sceneId);
let sceneThis = {
    id: sceneId,
    preEnter,
    $dom,
};
let $$ = $dom.find.bind($dom);


function preEnter(mode) {
    console.log(mode)
}
module.controller("SaveController", ["$scope", "$rootScope", "$timeout", function (sp, rsp, $timeout) {
    let diffculty;
    rsp.$on("save-preEnter", function (e, [mode]) {
        sp.title = {
            save: "保存游戏",
            load: "读取游戏",
        }[mode];
        sp.mode = mode;
    });
    let slots = 7;
    let saves = common.load("save");
    if (!saves) {
        saves = [];
        for (var i = 0; i < slots; i++) {
            saves.push({});
        }
        common.save("save", saves);
    }

    function handle(index) {
        if (sp.mode == "save") {
            console.log(index)
            if (saves[index].time) {
                
            } else {
                saves[index] = {
                    round: z.time.round,
                    time: Date.now(),
                    power: z.power,
                    data: JSON.stringify(z),
                }
                common.save("save", saves);
            }

        } else {

        }
    }

    function getLabel(save) {
        if (!save.time)
            return "";
        let date = new Date(save.time);
        let result = "";
        result += (date.getMonth() + 1) + "月" + date.getDate() + "日" + date.getHours() + "时" + date.getMinutes() + "分";
        result += " ";
        result += "回合" + save.round;
        result += " ";
        result += "体力" + save.power;
        return result;
    }
    _.extend(sp, {
        saves,
        handle,
        getLabel
    })

}])



scene.register(sceneThis);
return exports;