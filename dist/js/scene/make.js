"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

define(["require", "system-scene", "system-sys", "angular", "system-dbg", "z", "res", "angular-module", "plot", "system-common"], function (require, scene, sys, angular, dbg, z, res, module, plot, common) {
    var exports = {};
    var sceneId = "make";
    var $dom = scene.getScene(sceneId);

    var sceneThis = {
        id: sceneId,
        preEnter: preEnter,
        $dom: $dom,
        init: init
    };
    var $$ = $dom.find.bind($dom);

    function preEnter() {}

    function init() {}

    //let working=z.work["硬件流水灯"][0];
    //console.log(working)

    module.controller("MakeController", ["$scope", "$rootScope", "$timeout", function (sp, rsp, $timeout) {
        window.rsp = rsp;
        window.makesp = sp;
        //    let extendDirs=["性能","稳定","创新"];
        //    let extensions={性能:false,稳定:false,创新:false};
        var diffculty = void 0;
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
        rsp.$on("make-preEnter", function (e, _ref) {
            var _ref2 = _slicedToArray(_ref, 2);

            var kind = _ref2[0];
            var id = _ref2[1];

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

            var $body = $(document.body);
            $body.on("keydown", controlPlayer);
        });
        rsp.$on("make-preLeave", function (e, _ref3) {
            var _ref4 = _slicedToArray(_ref3, 2);

            var kind = _ref4[0];
            var id = _ref4[1];

            var $body = $(document.body);
            $body.off("keydown", controlPlayer);
        });
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
            });
            z.power -= sp.powerConsume;
            var working = {
                id: common.getUid(),
                name: sp.workingKind,
                kind: sp.workingKind,
                prefix: {},
                process: 0,
                processMax: 20,
                phase: "making",
                props: [0, 100, 0]
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
            if (!sp.workingKind) return false;

            var satisfy = !res.products[sp.workingKind].material.some(function (vv, i) {
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
            checkMaterial: checkMaterial,
            print: print,
            //        extendDirs,
            start: start
        });
    }]);

    function Map(columnNum, rowNum, $gameWrap, working) {
        var column = columnNum;
        var row = rowNum;
        var columns = [];
        var rows = [];
        var data = [];
        var idle = true;
        var map = this;
        var step = 0;
        working.round = 0;
        updateNextItem();
        updateNextInnovation();

        function updateNextItem() {
            working.nextItem = _.random(4, 7);
        }

        function updateNextInnovation() {
            working.nextInnovation = _.random(7, 11);
        }
        this.working = working;
        for (var i = 0; i < columnNum - 1; i++) {
            columns.push(i);
        }
        for (var _i = 0; _i < rowNum - 1; _i++) {
            rows.push(_i);
        }
        for (var _i2 = 0; _i2 < columnNum; _i2++) {
            var _column = [];
            for (var j = 0; j < rowNum; j++) {
                _column.push(false);
            }
            data.push(_column);
        }

        var gameWidth = Math.min($(".main-content[data-phase='making']").width() - 60, $(".main-content[data-phase='making']").height() - 30);
        var gr = gameWidth / Math.max(columnNum, rowNum);
        gr = parseInt(gr);

        function getData(_ref5) {
            var _ref6 = _slicedToArray(_ref5, 2);

            var x = _ref6[0];
            var y = _ref6[1];

            return this.data[x][y];
        }

        function isOutside(_ref7) {
            var _ref8 = _slicedToArray(_ref7, 2);

            var x = _ref8[0];
            var y = _ref8[1];

            return x > this.column - 1 || y > this.row - 1 || x < 0 || y < 0;
        }

        function isEmpty(_ref9) {
            var _ref10 = _slicedToArray(_ref9, 2);

            var x = _ref10[0];
            var y = _ref10[1];

            if (this.isOutside([x, y])) {
                return false;
            }

            return !this.data[x][y];
        }

        function playerMoveEnd(cb) {
            var _this = this;

            step++;

            addInnovation();
            if (z.game.move < 1) {
                working.round++;
                working.nextItem--;
                working.nextInnovation--;
                console.log(stars);
                starsUpdate();
                itemsRandomMove(items, function () {
                    _this.idle = true;
                    cb && cb();
                });

                if (!working.nextItem) {
                    updateNextItem();
                    addNewItem();
                }
                if (!working.nextInnovation) {
                    updateNextInnovation();
                    addInnovation();
                }
            } else {
                this.idle = true;
                cb && cb();
            }
        }

        function starsUpdate() {
            stars.forEach(function (v, i) {
                var $$ = v.$dom.find.bind(v.$dom);
                var $num = $$(".round-num");
                var round = $num.text();
                round--;
                $num.text(round);
                console.log(round);
                if (!round) {
                    setTimeout(function () {
                        stars.every(function (w, i) {
                            if (w === v) {
                                v.map.stars.splice(i, 1);
                                return false;
                            } else {
                                return true;
                            }
                        });
                    });

                    v.$dom.remove();
                    map.data[v.pos[0]][v.pos[1]] = false;
                }
            });
        }

        function itemsRandomMove(items, cb) {
            items.forEach(function (v, i) {
                setTimeout(function () {
                    v.randomMove();
                }, 200 * i);
            });
            setTimeout(function () {
                cb && cb();
            }, 200 * items.length);
        }

        function addInnovation() {
            var star = new GameStar(map);
            star.setPos(getFreeRandomPos());
        }

        function addNewItem() {
            var material = productConfig[working.name].material;
            var materials = _.pairs(material);
            var item = common.randomItem(materials);

            item = new GameItem(map, item[0]);
            item.setPos(getFreeRandomPos());
        }

        function getFreeRandomPos(item) {
            var seedAddon = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

            function getPos(seed) {
                var x = common.seed(seed[0], map.column - 1);
                var y = common.seed(seed[1], map.row - 1);
                return [x, y];
            }

            function getSeed(working, item) {
                var ret1 = 0;
                var ret2 = 0;
                for (var _i3 = 0; _i3 < working.name.length; _i3++) {
                    ret1 += working.name.charCodeAt(_i3);
                }
                for (var _i4 = 0; _i4 < item.name.length; _i4++) {
                    ret2 += item.name.charCodeAt(_i4);
                }

                return [ret1 * 10 + ret2, ret2 * 10 + ret1];
            }
            var seed = void 0;
            if (item) {
                seed = getSeed(working, item);
            } else {
                seed = [_.random(0, 10000), _.random(0, 10000)];
            }

            seed[0] += seedAddon;
            seed[1] += seedAddon * 17;
            var pos = void 0;
            do {
                pos = getPos(seed);
                seed[0]++;
                seed[1]++;
            } while (map.getData(pos));

            return pos;
        }

        var items = [];
        var stars = [];

        function registerItem(item) {
            items.push(item);
        }

        function registerStar(star) {
            stars.push(star);
        }
        _.extend(this, {
            column: column,
            row: row,
            columns: columns,
            rows: rows,
            data: data,
            gr: gr,
            isEmpty: isEmpty,
            isOutside: isOutside,
            getData: getData,
            $gameWrap: $gameWrap,
            idle: idle,
            items: items,
            stars: stars,
            registerItem: registerItem,
            registerStar: registerStar,
            playerMoveEnd: playerMoveEnd,
            getFreeRandomPos: getFreeRandomPos

        });
    }

    function GameUnit(map, radius) {
        radius = radius || map.gr;
        this.map = map;
        this.radius = radius;
    }

    function generateSurroundArr(_ref11) {
        var _ref12 = _slicedToArray(_ref11, 2);

        var x = _ref12[0];
        var y = _ref12[1];

        var ret = [];
        ret.push([x, y - 1]);
        ret.push([x + 1, y]);
        ret.push([x, y + 1]);
        ret.push([x - 1, y]);

        return ret;
    }

    GameUnit.prototype.randomMove = function () {
        var _this2 = this;

        var options = generateSurroundArr(this.pos).reduce(function (pre, v, i) {
            //            console.log(pre, v,this.map.isEmpty(v), i);
            if (_this2.map.isEmpty(v)) {
                pre.push(v);
            }
            return pre;
        }, []);
        if (options.length) {
            var target = options[_.random(0, options.length - 1)];
            this.setPos(target);
        }
    };
    GameUnit.prototype.setPos = function (_ref13) {
        var _ref14 = _slicedToArray(_ref13, 2);

        var x = _ref14[0];
        var y = _ref14[1];

        if (this.pos) {

            this.map.data[this.pos[0]][this.pos[1]] = false;
        }

        this.pos = [x, y];
        this.map.data[x][y] = this;
        this.$dom.css("left", x * this.radius);
        this.$dom.css("top", y * this.radius);
    };
    GameUnit.prototype.setDom = function ($dom) {
        this.$dom = $dom;
        this.$dom.addClass("game-item");
        this.map.$gameWrap.append($dom);
    };

    function GameStar(map) {
        GameUnit.call(this, map);
        map.registerStar(this);
        var round = _.random(1, 3);
        var $item = $("<div class=\"deep-item-star\" \n                        style=\"width:" + this.radius + "px;height:" + this.radius + "px\">\n                        <img draggable=\"false\"\n                            src=\"" + res.img.little_star + "\" \n                            class=\"star-icon\">\n                        <span class=\"round-num\">" + round + "</span>\n                    </div>");
        GameUnit.prototype.setDom.call(this, $item);
    }
    GameStar.prototype = Object.create(GameUnit.prototype);
    GameStar.prototype.constructor = GameUnit;

    function GameItem(map, name) {
        GameUnit.call(this, map);
        map.registerItem(this);
        var radius = map.gr;
        var $item = $("<div class=\"deep-item-icon\" style=\"width:" + radius + "px;height:" + radius + "px\">\n                        <img draggable=\"false\" src=\"" + common.$rootScope.getItemIcon(res.items[name]) + "\" class=\"skill-icon\">\n                    </div>");
        GameUnit.prototype.setDom.call(this, $item);
    }
    GameItem.prototype = Object.create(GameUnit.prototype);
    GameItem.prototype.constructor = GameUnit;
    GameItem.prototype.collision = function () {
        var _this3 = this;

        this.map.items.every(function (v, i) {
            if (v === _this3) {
                _this3.map.items.splice(i, 1);
                return false;
            }
            return true;
        });
        this.$dom.css("transition", "none");
        this.$dom.fadeOut(300, function () {
            _this3.$dom.remove();
            var removeList = ["width", "height", "left", "top", "transition"];
            removeList.forEach(function (v, i) {
                _this3.$dom.css(v, "");
            });
            _this3.$dom.show();
            var $wrap = $("<div class=\"game-item-wrap\"></div>");
            $wrap.addClass("adding");
            setTimeout(function () {
                $wrap.removeClass("adding");
            }, 100);
            $wrap.append(_this3.$dom);
            $(".item-row").append($wrap);
        });

        this.map.working.props[0] = 100 - (100 - this.map.working.props[0]) * 0.85;
        return true;
    };

    function GameHole(map) {
        GameUnit.call(this, map);
        var radius = map.gr;
        var $item = $("<div class=\"deep-disabled-block\" style=\"width:" + radius + "px;height:" + radius + "px\"></div>");
        GameUnit.prototype.setDom.call(this, $item);
    }
    GameHole.prototype = Object.create(GameUnit.prototype);
    GameHole.prototype.constructor = GameUnit;

    function GamePlayer(map) {
        var radius = map.gr;
        GameUnit.call(this, map, radius);
        var $item = $("<div class=\"player deep-icon blue solid active\" data-icon=\"crosshair\" style=\"width:" + radius + "px;height:" + radius + "px\">\n                    </div>");
        GameUnit.prototype.setDom.call(this, $item);
    }
    GamePlayer.prototype = Object.create(GameUnit.prototype);
    GamePlayer.prototype.constructor = GameUnit;
    var dir2pos = {
        up: [0, -1],
        right: [1, 0],
        down: [0, 1],
        left: [-1, 0]
    };

    function mergePos(p1, p2) {
        return [p1[0] + p2[0], p1[1] + p2[1]];
    }
    GamePlayer.prototype.move = function (dir) {
        var _this4 = this;

        var dp = dir2pos[dir];
        var pos = mergePos(this.pos, dp);
        if (!this.map.idle) {
            return;
        }
        if (!z.power) {
            //        return;
        }
        if (this.map.isOutside(pos)) {
            return false;
        } else {
            (function () {
                var consumeMove = function consumeMove() {
                    common.$rootScope.$apply(function () {
                        z.game.move -= 1;
                        z.game.move = beautifyFloat(z.game.move);
                    });
                };

                // actually move       
                var afterMove = function afterMove() {
                    consumeMove();
                    updateWorking();
                    _this4.$dom.inactive();
                    _this4.map.idle = false;
                    setTimeout(function () {
                        //                z.power--;

                        _this4.map.playerMoveEnd(function () {
                            _this4.$dom.active();
                            common.$rootScope.$apply(function () {
                                if (z.game.move < 1) {
                                    z.power -= 1;
                                    z.game.move += z.game.increase;
                                    z.game.move = beautifyFloat(z.game.move);
                                }
                            });
                        });
                    }, 200);
                };
                var updateWorking = function updateWorking() {
                    common.$rootScope.$apply(function () {

                        _this4.map.working.props[1] *= 0.95;
                    });
                };

                var target = _this4.map.getData(pos);
                if (target) {
                    var result = target.collision && target.collision();
                    if (result === true) {
                        //eat
                        _this4.setPos(pos);
                        afterMove();
                    } else if (result === false) {
                        //eat without move
                        afterMove();
                    } else {//blocked

                    }
                } else {
                        _this4.setPos(pos);
                        afterMove();
                    }
            })();
        }
    };

    function beautifyFloat(f) {
        f *= 10;
        if (f - parseInt(f) > 0.5) {
            f = parseInt(f) + 1;
        } else {
            f = parseInt(f);
        }
        return f / 10;
    }

    function controlPlayer(e) {
        var key = common.code2key[e.keyCode];
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

    var player = void 0;
    var productConfig = {
        "硬件流水灯": {
            h: 5,
            w: 5,
            hole: [[0, 0], [1, 1], [4, 4], [3, 3]],
            material: {
                "五5伍": [[0, 2]],
                "LED": [[1, 3]],
                "电路基础元件": [[1, 4]]
            },
            player: [2, 3]
        }

    };
    module.controller("GameController", ["$scope", "$rootScope", "$timeout", function (sp, rsp, $timeout) {
        var $gameWrap = $(".main-content[data-phase='making']>.game-wrap");

        function startGame(map, kind) {
            console.log(map);
            var gr = map.gr;
            setTimeout(function () {
                $gameWrap.active();
            });

            var working = res.products[kind];
            var config = productConfig[working.name];

            for (var j in config.material) {
                config.material[j].forEach(function (v, i) {
                    var item = new GameItem(map, j);
                    item.setPos(v);
                });
            }

            config.hole.forEach(function (v, i) {
                var hole = new GameHole(map);
                hole.setPos(v);
            });

            player = new GamePlayer(map);
            player.setPos(config.player);

            var columns = map.columns;
            var rows = map.rows;

            _.extend(sp, {
                gr: gr,
                columns: columns,
                rows: rows
            });
        }
        startGame(new Map(5, 5, $gameWrap, sp.working), sp.workingKind);
    }]);
    scene.register(sceneThis);
    return exports;
});