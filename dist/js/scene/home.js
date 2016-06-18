"use strict";

define(["require", "system-scene", "system-sys", "angular", "system-dbg", "v", "res", "angular-module", "plot", "system-common"], function (require, scene, sys, angular, dbg, v, res, module, plot, common) {
    var exports = {};
    var sceneId = "home";
    var $dom = scene.getScene(sceneId);
    var sceneThis = {
        id: sceneId,
        preEnter: preEnter,
        $dom: $dom
    };
    var $$ = $dom.find.bind($dom);
    var actions = {
        上课: {
            name: "上课",
            icon: "conference",
            consume: 3
        },
        学习: {
            name: "学习",
            icon: "books",
            consume: 4
        },
        制作: {
            name: "制作",
            icon: "saw",
            consume: 5
        },
        闲逛: {
            name: "闲逛",
            icon: "team",
            consume: 5
        },
        购物: {
            name: "购物",
            icon: "market",
            consume: 0
        },
        休息: {
            name: "休息",
            icon: "bed",
            consume: 0
        },
        状态: {
            name: "状态",
            icon: "resume",
            consume: 0
        }
    };

    function getAction(name) {
        var action = void 0;
        return actions[name];
        actions.every(function (v, i) {
            if (v.name == name) {
                action = v;
                return false;
            } else {
                return true;
            }
        });
        return action;
    }
    scene.register(sceneThis);

    module.controller("home-controller", ["$scope", "$rootScope", "$timeout", function (sp, rsp, $timeout) {
        var monkey = void 0;

        function getActionIcon(name) {
            return common.resPath + "icon/" + name + ".svg";
        }

        function getMonth(part) {
            var monthStr = parseInt((part + 27) / 3) % 12 + 1 + "月";
            var pStr = ["上旬", "中旬", "下旬"];
            var partStr = pStr[part % 3];
            return monthStr + partStr;
        }

        function goClass() {
            var action = actions["上课"];

            //            actions.every(function (v, i) {
            //                if (v.name == "上课") {
            //                    action = v;
            //                    return false;
            //                } else {
            //                    return true;
            //                }
            //            })

            showMonkey(action);
            costPower(action);
            actionBack();
        }

        function doAction(action) {
            if (typeof action == "string") {
                action = getAction(action);
            }
            if (sp.actionLocking) {
                return;
            }
            sp.actionLocking = true;
            if (v.power < action.consume) {
                return false;
            }
            setMonkey(action);
            switch (action.name) {

                case "上课":
                    sp.actionPanel = "上课";
                    //                showMonkey(action);
                    //                costPower(action);
                    unlockAction();
                    break;
                case "学习":
                    sp.actionPanel = "学习";
                    if (arguments.length - 1) {
                        costPower(action);
                        showMonkey(action);
                        unlockAction();
                    } else {
                        unlockAction(true);
                    }

                    return true;
                case "制作":
                    unlockAction();
                    scene.go("make-select");
                    break;
                case "闲逛":
                    unlockAction();
                    scene.go("bigmap");
                    break;
                case "购物":
                    rsp.$emit("openStore");
                    console.log(234);
                    unlockAction(true);
                    break;
                case "休息":
                    showMonkey(action);
                    restorePower(10);
                    endTurn();
                    unlockAction();
                    break;
                case "状态":
                    scene.go("state");
                    unlockAction(true);
                    break;
            }
        }

        function actionBack() {
            sp.actionPanel = "";
            unlockAction(true);
        }

        function unlockAction(immediate) {
            $timeout(function () {
                sp.actionLocking = false;
            }, !immediate && 1100 || 0);
        }

        function endTurn() {
            sp.ending = true;
            $timeout(function () {
                sp.endingTransition = false;
            }, 600);
            $timeout(function () {
                v.time.part++;
                sp.ending = false;
            }, 650);
            $timeout(function () {
                sp.endingTransition = true;
            }, 800);
        }

        function restorePower(value) {
            v.power += value;
            if (v.power > v.powerMax) {
                v.power = v.powerMax;
            }
        }

        function costPower(action) {
            v.power -= action.consume;
        }

        function showMonkey(action) {
            setMonkey(action);
            sp.showMonkey = true;
            $timeout(function () {
                sp.showMonkey = false;
            }, 1000);
        }

        function setMonkey(action) {
            //            console.log(action);
            //            if (action.consume) {
            sp.monkey = common.resPath + ("monkey/" + action.icon + ".gif");
            //            } else {
            //                sp.monkey = "";
            //            }
        }
        //        console.log(res.skills)

        function isSkillPreSatisfied(skill) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = skill.pre[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var pre = _step.value;

                    if (v.skill[pre.skill.name].level < pre.level) {
                        return false;
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return true;
        }

        function updateSkill() {
            for (var i in v.skill) {
                v.skill[i].satisfied = isSkillPreSatisfied(res.skills[i]);
            }
        }
        updateSkill();
        sp.$watch('v.skill', function (newValue, oldValue) {
            updateSkill();
        }, true);
        _.extend(sp, {
            showMonkey: false,
            ending: false,
            endingTransition: true,
            actionLocking: false,
            actionPanel: "",
            res: res,
            actions: actions,
            getActionIcon: getActionIcon,
            getMonth: getMonth,
            doAction: doAction,
            monkey: monkey,
            actionBack: actionBack,
            goClass: goClass

        });
    }]);
    module.controller("home-skill-controller", ["$scope", "$rootScope", "$timeout", function (sp, rsp, $timeout) {

        function upgradeSkill(skill) {
            if (v.skill[skill.name].level < 10) {

                if (sp.doAction("学习", skill)) {
                    v.skill[skill.name].level++;
                }
            }
        }

        function hoverSkill(skill) {
            sp.$parent.selectingSkill = skill;
        }

        function stopHoverSkill() {
            sp.$parent.selectingSkill = undefined;
        }

        function getSkillIcon(skill) {
            if (v.skill[skill.name].satisfied && v.power >= getAction("学习").consume) {
                return common.resPath + "skills/" + skill.icon + ".jpg";
            } else {
                return common.resPath + "skills/" + skill.icon + "-off.jpg";
            }
        }

        function getSkillBg(skill) {
            var color = "green";
            if (skill.pre.length != 0 && !v.skill[skill.name].satisfied) {

                color = "grey";
            } else if (v.skill[skill.name].level >= 10) {
                color = "yellow";
            }
            return common.resPath + "skills/icon-over-" + color + ".gif";
        }

        _.extend(sp, {
            skills: res.skills,
            upgradeSkill: upgradeSkill,
            hoverSkill: hoverSkill,
            stopHoverSkill: stopHoverSkill,
            getSkillIcon: getSkillIcon,
            getSkillBg: getSkillBg
        });
    }]);
    var cartItems = {};
    var cartDevices = {};
    for (var i in res.items) {
        cartItems[i] = 0;
    }
    for (var i in res.devices) {
        cartDevices[i] = 0;
    }
    module.controller("store-controller", ["$scope", "$rootScope", "$timeout", function (sp, rsp, $timeout) {
        function minusItem(item) {
            cartItems[item.name]--;
        }

        function addItem(item) {
            cartItems[item.name]++;
        }

        function hoverItem(item) {
            sp.selectingItem = item;
        }

        function updateItemsSum(newV) {
            sp.priceSum = 0;
            for (var _i in newV) {
                sp.priceSum += newV[_i] * calcPrice(priceLine[res.items[_i].kind], newV[_i] || 1, res.items[_i].price);
            }
            var sum = sp.priceSum;
            if (sum - parseInt(sum) > 0.5) {
                sum = sum + 0.5;
            }
            sp.priceSum = parseInt(sum.toString());
            sp.poor = sp.priceSum > v.basic.money;
        }
        sp.$watch("cartItems", function (newV) {
            updateItemsSum(newV);
        }, true);

        function updateDevicesSum(newV) {
            sp.priceSum = 0;
            for (var _i2 in newV) {
                if (newV[_i2]) {
                    sp.priceSum += res.devices[_i2].price;
                }
            }
            var sum = sp.priceSum;
            if (sum - parseInt(sum) > 0.5) {
                sum = sum + 0.5;
            }
            sp.priceSum = parseInt(sum.toString());
            sp.poor = sp.priceSum > v.basic.money;
        }
        sp.$watch("cartDevices", function (newV) {
            updateDevicesSum(newV);
        }, true);
        sp.$watch("currentPage", function (newV) {
            if (newV == "器件") {
                updateItemsSum(cartItems);
            } else if (newV == "仪器") {
                updateDevicesSum(cartDevices);
            }
        });

        function openStore() {
            sp.show = true;

            $timeout(function () {
                sp.active = true;
            }, 100);
        }
        rsp.$on("openStore", function () {
            openStore();
        });

        function closeStore() {
            sp.show = false;
            $timeout(function () {
                sp.active = false;
            }, 300);
        }

        function checkout() {
            if (sp.priceSum <= v.basic.money) {
                v.basic.money -= sp.priceSum;
            } else {
                return;
            }
            if (sp.currentPage == "器件") {
                for (var i in sp.cartItems) {
                    if (sp.cartItems[i]) {
                        v.item[i].cnt += sp.cartItems[i];
                        sp.cartItems[i] = 0;
                    }
                }
            } else if (sp.currentPage == "仪器") {
                for (var i in sp.cartDevices) {
                    if (sp.cartDevices[i]) {
                        v.device[i].cnt += sp.cartDevices[i];
                        sp.cartDevices[i] = 0;
                    }
                }
            }
        }

        function setPage(page) {
            sp.currentPage = page;
        }

        function minusDevice(device) {
            cartDevices[device.name]--;
        }

        function addDevice(device) {
            cartDevices[device.name]++;
        }

        _.extend(sp, {
            priceSum: 0,
            show: false,
            active: false,
            poor: false,
            pages: ["器件", "仪器"],
            currentPage: "器件",
            cartItems: cartItems,
            cartDevices: cartDevices,
            minusItem: minusItem,
            minusDevice: minusDevice,
            checkout: checkout,
            addItem: addItem,
            addDevice: addDevice,
            hoverItem: hoverItem,
            closeStore: closeStore,
            setPage: setPage
        });
    }]);
    var priceLine = {
        IC: [7 / 8, 2],
        基础器件: [13 / 14, 3],
        机械: [6 / 7, 4]
    };

    function calcPrice(params, cnt, singlePrice) {

        var arg = params || [1, 1];
        var value = (Math.pow(arg[0], cnt - 1) + arg[1]) / (arg[1] + 1) * singlePrice;
        return value;
    }
    module.filter('term', function () {
        var filter = function filter(level) {
            return "第" + level + "学期";
        };
        return filter;
    });
    module.filter('storePrice', function () {
        var filter = function filter(price, cnt, kind) {
            if (cnt == 0) {
                cnt = 1;
            }
            return calcPrice(priceLine[kind], cnt, price).toString().replace(/\.\d+/, function (str) {
                return str.slice(0, 2);
            }) + "元";
        };
        return filter;
    });

    function preEnter() {}

    return exports;
});