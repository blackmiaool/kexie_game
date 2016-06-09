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
    var actions = [{
        name: "上课",
        icon: "conference",
        consume: 3
    }, {
        name: "学习",
        icon: "books",
        consume: 4
    }, {
        name: "制作",
        icon: "saw",
        consume: 5
    }, {
        name: "闲逛",
        icon: "team",
        consume: 5
    }, {
        name: "购物",
        icon: "market",
        consume: 0
    }, {
        name: "休息",
        icon: "bed",
        consume: 0
    }, {
        name: "状态",
        icon: "resume",
        consume: 0
    }];

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

        function getAction(name) {
            var action = void 0;
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

        function goClass() {
            var action = void 0;
            actions.every(function (v, i) {
                if (v.name == "上课") {
                    action = v;
                    return false;
                } else {
                    return true;
                }
            });

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
                case "状态":
                    scene.go("state");
                    unlockAction(true);
                    break;
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
                case "休息":
                    showMonkey(action);
                    restorePower(10);
                    endTurn();
                    unlockAction();
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

        function getSkillIcon(skill) {
            if (v.skill[skill.name].satisfied && v.power >= getAction("学习").consume) {
                return common.resPath + "skills/" + skill.icon + ".jpg";
            } else {
                return common.resPath + "skills/" + skill.icon + "-off.jpg";
            }
        }

        function hoverSkill(skill) {
            sp.selectingSkill = skill;
        }

        function stopHoverSkill() {
            sp.selectingSkill = undefined;
        }

        function upgradeSkill(skill) {
            if (v.skill[skill.name].level < 10) {

                if (doAction("学习", skill)) {
                    v.skill[skill.name].level++;
                }

                //                setMonkey("学习");
                //                sp.showMonkey = true;
                //                $timeout(function () {
                //                    sp.showMonkey = false;
                //                }, 1000);
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
            actionPanel: "学习",
            skills: res.skills,
            v: v,
            res: res,
            actions: actions,
            getActionIcon: getActionIcon,
            getMonth: getMonth,
            doAction: doAction,
            monkey: monkey,
            actionBack: actionBack,
            goClass: goClass,
            getSkillIcon: getSkillIcon,
            getSkillBg: getSkillBg,
            upgradeSkill: upgradeSkill,
            hoverSkill: hoverSkill,
            stopHoverSkill: stopHoverSkill
        });
    }]);
    module.filter('term', function () {
        var filter = function filter(level) {
            return "第" + level + "学期";
        };
        return filter;
    });

    function preEnter() {}

    return exports;
});