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

//let working=z.work["硬件流水灯"][0];
//console.log(working)

module.controller("MakeController", ["$scope", "$rootScope", "$timeout", function (sp, rsp, $timeout) {
    window.rsp=rsp;
    window.makesp=sp;
    //    let extendDirs=["性能","稳定","创新"];
    //    let extensions={性能:false,稳定:false,创新:false};
    let diffculty;
    //    sp.extensions=extensions;

    //    sp.$watch("extensions",function(v){
    //        let powerConsume=diffculty;
    //        if(v["性能"]){
    //            powerConsume*=1.5;
    //        }
    //        if(v["稳定"]){
    //            powerConsume*=1.5;
    //        }
    //        if(v["创新"]){
    //            powerConsume*=1.5;
    //        }
    //        sp.powerConsume=Math.ceil(powerConsume);
    //    },true);
    rsp.$on("make-preEnter", function (e, [kind, id]) {
        if (!kind) {
            console.error("Miss 'kind' paramater");
            return;
        }
        if (id !== undefined) {
            sp.working = z.work[kind][id];
            sp.phase = sp.working.phase;
        } else {
            //
            //            let working = {
            //                id: common.getUid(),
            //                name: kind,
            //                kind,
            //                prefix: {},
            //                state: "raw",
            //                process: {
            //                    basic: 3,
            //                    basicMax: 10,
            //                },
            //                phase:"ready-to-make",
            //                property: [
            //                    {
            //                        kind: "lucky",
            //                        value: "3",
            //                    }],
            //            };
            //            sp.working = working;
            sp.phase = "empty";

        }
        sp.workingKind = kind;
        diffculty = res.products[sp.workingKind].difficulty;
        sp.powerConsume = diffculty;

        let $body = $(document.body);
        $body.on("keydown", controlPlayer);
    });
    rsp.$on("make-preLeave", function (e, [kind, id]) {
        let $body = $(document.body);
        $body.off("keydown", controlPlayer);
    })
    $timeout(function () {
        z.item["五5伍"].cnt = 10;
        z.item["LED"].cnt = 11;
        z.item["电路基础元件"].cnt = 12;
    }, 1000);

    function start() {
        if (!checkMaterial() || z.power < sp.powerConsume) {
            return;
        }

        res.products[sp.workingKind].material.forEach(function (vv, i) {
            z.item[vv.name].cnt -= vv.cnt;
        })
        z.power -= sp.powerConsume;
        let working = {
            id: common.getUid(),
            name: sp.workingKind,
            kind: sp.workingKind,
            prefix: {},
            process: 0,
            processMax: 20,
            phase: "making",
            props:[0,100,0],
        };
        sp.working = working;
        //        sp.working.phase = "making";
        //        sp.working[sp.workingKind] = working;
        z.work[sp.workingKind][working.id] = working;
        sp.phase = "";
        $timeout(function () {
            sp.phase = "making";

        }, 400);


    }

    function checkMaterial() {
        if (!sp.workingKind)
            return false;

        let satisfy = !res.products[sp.workingKind].material.some(function (vv, i) {
            if (vv.cnt > z.item[vv.name].cnt) {
                return true;
            }
        });
        return satisfy;

    }

    function print() {
        console.log(arguments);
        return true;
    }

    _.extend(sp, {
        checkMaterial,
        print,
        //        extendDirs,
        start,
    })

}])

function Map(columnNum, rowNum, $gameWrap) {
    let column = columnNum;
    let row = rowNum;
    let columns = [];
    let rows = [];
    let data = [];
    let idle = true;

    for (let i = 0; i < columnNum - 1; i++) {
        columns.push(i);
    }
    for (let i = 0; i < rowNum - 1; i++) {
        rows.push(i);
    }
    for (let i = 0; i < columnNum; i++) {
        let column = [];
        for (let j = 0; j < rowNum; j++) {
            column.push(false);
        }
        data.push(column);
    }

    let gameWidth = Math.min($(".main-content[data-phase='making']").width() - 60, $(".main-content[data-phase='making']").height() - 30);
    let gr = gameWidth / Math.max(columnNum, rowNum);
    gr = parseInt(gr);

    function getData([x, y]) {
        return this.data[x][y];
    }

    function isOutside([x, y]) {
        return x > this.column - 1 || y > this.row - 1 || x < 0 || y < 0;
    }

    function isEmpty([x, y]) {
        if (this.isOutside([x, y])) {
            return false;
        }

        return !this.data[x][y];
    }

    function playerMoveEnd(cb) {
        if (z.game.move < 1) {
            itemsRandomMove(items, () => {
                this.idle = true;
                cb && cb();
            });
        } else {
            this.idle = true;
            cb && cb();
        }

    }
    let items = [];

    function registerItem(item) {
        items.push(item);
    }

    _.extend(this, {
        column,
        row,
        columns,
        rows,
        data,
        gr,
        isEmpty,
        isOutside,
        getData,
        $gameWrap,
        idle,
        items,
        registerItem,
        playerMoveEnd,
    })
}

function GameUnit(map, radius) {
    radius = radius || map.gr;
    this.map = map;
    this.radius = radius;
}

function generateSurroundArr([x, y]) {
    let ret = [];
    ret.push([x, y - 1]);
    ret.push([x + 1, y]);
    ret.push([x, y + 1]);
    ret.push([x - 1, y]);

    return ret;
}

function generateFreeRandomPos(map, working, item = {
    name: "player"
}) {
    function getPos(seed) {
        let x = common.seed(seed[0], map.column - 1);
        let y = common.seed(seed[1], map.row - 1);
        return [x, y];
    }

    function getSeed(working, item) {
        let ret1 = 0;
        let ret2 = 0;
        for (let i = 0; i < working.name.length; i++) {
            ret1 += working.name.charCodeAt(i);
        }
        for (let i = 0; i < item.name.length; i++) {
            ret2 += item.name.charCodeAt(i);
        }

        return [ret1 * 10 + ret2, ret2 * 10 + ret1];
    }
    let seed = getSeed(working, item);
    let pos;
    do {
        pos = getPos(seed);
        seed[0]++;
        seed[1]++;
    } while (map.getData(pos));


    return pos;
}
GameUnit.prototype.randomMove = function () {
    let options = generateSurroundArr(this.pos).reduce((pre, v, i) => {
        //            console.log(pre, v,this.map.isEmpty(v), i);
        if (this.map.isEmpty(v)) {
            pre.push(v);
        }
        return pre;
    }, []);
    if (options.length) {
        let target = options[_.random(0, options.length - 1)];
        this.setPos(target);
    }


}
GameUnit.prototype.setPos = function ([x, y]) {
    if (this.pos) {

        this.map.data[this.pos[0]][this.pos[1]] = false;
    }

    this.pos = [x, y];
    this.map.data[x][y] = this;
    this.$dom.css("left", x * this.radius);
    this.$dom.css("top", y * this.radius);
}
GameUnit.prototype.setDom = function ($dom) {
    this.$dom = $dom;
    this.$dom.addClass("game-item");
    this.map.$gameWrap.append($dom);
}

function GameItem(map, name) {
    GameUnit.call(this, map);
    let radius = map.gr;
    let $item = $(`<div class="deep-item-icon" style="width:${radius}px;height:${radius}px">
                        <img draggable="false" src="${common.$rootScope.getItemIcon(res.items[name])}" class="skill-icon">
                    </div>`);
    GameUnit.prototype.setDom.call(this, $item);
}
GameItem.prototype = Object.create(GameUnit.prototype);
GameItem.prototype.constructor = GameUnit;
GameItem.prototype.collision = function () {


    this.map.items.every((v, i) => {
        if (v === this) {
            this.map.items.splice(i, 1);
            return false;
        }
        return true;
    });
    this.$dom.css("transition", "none")
    this.$dom.fadeOut(300, () => {
        this.$dom.remove();
        console.log("remo");
    });
    return true;
}

function GameHole(map) {
    GameUnit.call(this, map);
    let radius = map.gr;
    let $item = $(`<div class="deep-disabled-block" style="width:${radius}px;height:${radius}px"></div>`);
    GameUnit.prototype.setDom.call(this, $item);
}
GameHole.prototype = Object.create(GameUnit.prototype);
GameHole.prototype.constructor = GameUnit;

function GamePlayer(map) {
    let radius = map.gr;
    GameUnit.call(this, map, radius);
    let $item = $(`<div class="player deep-icon blue solid active" data-icon="crosshair" style="width:${radius}px;height:${radius}px">
                    </div>`);
    GameUnit.prototype.setDom.call(this, $item);
}
GamePlayer.prototype = Object.create(GameUnit.prototype);
GamePlayer.prototype.constructor = GameUnit;
let dir2pos = {
    up: [0, -1],
    right: [1, 0],
    down: [0, 1],
    left: [-1, 0],
}

function mergePos(p1, p2) {
    return [p1[0] + p2[0], p1[1] + p2[1]];
}
GamePlayer.prototype.move = function (dir) {
    let dp = dir2pos[dir];
    let pos = mergePos(this.pos, dp);
    if (!this.map.idle) {
        return;
    }
    if (!z.power) {
        //        return;
    }
    if (this.map.isOutside(pos)) {
        return false;
    } else { // actually move        
        let afterMove = () => {
            consumeMove();
            this.$dom.inactive();
            this.map.idle = false;
            setTimeout(() => {
                //                z.power--;


                this.map.playerMoveEnd(() => {
                    this.$dom.active();
                    common.$rootScope.$apply(function () {
                        if (z.game.move < 1) {
                            z.power -= 1;
                            z.game.move += z.game.increase;
                            z.game.move = beautifyFloat(z.game.move);
                        }

                    })

                });
            }, 200);
        }

        function consumeMove() {
            common.$rootScope.$apply(function () {
                z.game.move -= 1;
                z.game.move = beautifyFloat(z.game.move);
            })
        }
        let target = this.map.getData(pos);
        if (target) {
            let result = target.collision && target.collision();
            if (result === true) { //eat
                this.setPos(pos);
                afterMove();
            } else if (result === false) { //eat without move
                afterMove();
            } else { //blocked
                
            }
        } else {
            this.setPos(pos);
            afterMove();
        }





    }
}

function beautifyFloat(f) {
    f *= 10;
    if (f - parseInt(f) > 0.5) {
        f = parseInt(f) + 1;
    } else {
        f = parseInt(f)
    }
    return f / 10;
}

function controlPlayer(e) {
    let key = common.code2key[e.keyCode];
    if (z.game.move < 1) {
        return;
    }


    if (key == "w") {
        player.move("up");
    } else if (key == "d") {
        player.move("right");
    } else if (key == "s") {
        player.move("down");
    } else if (key == "a") {
        player.move("left");
    }
}

function itemsRandomMove(items, cb) {
    items.forEach(function (v, i) {
        setTimeout(function () {
            v.randomMove();
        }, 200 * i)
    })
    setTimeout(function () {
        cb && cb();
    }, 200 * items.length)
}
let player;
let productConfig = {
    "硬件流水灯": {
        h: 5,
        w: 5,
        hole: [[0, 0], [1, 1], [4, 4], [3, 3]],
        material: {
            "五5伍": [[0, 2]],
            "LED": [[1, 3]],
            "电路基础元件": [[1, 4]]
        },
        player: [2, 3],
    }

}
module.controller("GameController", ["$scope", "$rootScope", "$timeout", function (sp, rsp, $timeout) {
    let $gameWrap = $(".main-content[data-phase='making']>.game-wrap");



    function startGame(map, kind) {
        console.log(map);
        let gr = map.gr;
        setTimeout(function () {
            $gameWrap.active();
        })

        let working = res.products[kind];
        let config = productConfig[working.name];

        for (var j in config.material) {
            config.material[j].forEach(function (v, i) {
                let item = new GameItem(map, j);
                item.setPos(v);
                map.registerItem(item);
            })
        }

        config.hole.forEach(function (v, i) {
            let hole = new GameHole(map);
            hole.setPos(v);
        })

        player = new GamePlayer(map);
        player.setPos(config.player);

        let {
            columns, rows
        } = map;
        _.extend(sp, {
            gr,
            columns,
            rows,
        })

    }
    startGame(new Map(5, 5, $gameWrap), sp.workingKind);


}])
scene.register(sceneThis);
return exports;