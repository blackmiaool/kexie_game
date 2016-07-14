//Here inject gulpConfig veriable
(function () {
    //    console.log(gulpConfig)
    let plotPaths = gulpConfig.plots.map(function (v, i) {
        return v.name.split(".")[0];
    });
    let scenePaths = gulpConfig.scenes.map(function (v, i) {
        return v.name.split(".")[0];
    });

    var config = {
        baseUrl: "js",
        paths: {
            jquery: "jquery.min",
            angular: "angular.min",
            "_": "underscore",
            "angular-animate": "angular-animate.min",
        },
        plotPaths,
        scenePaths,
        sysPaths: ["sys", "common", "dbg", "config", "scene", "plotApi"],
        map: {},
        shim: {
            "angular": {
                deps: ['jquery'],
                exports: 'angular'
            },
            "angular-animate": {
                deps: ["angular"],
            },
        }
    };
    config.sysPaths.forEach(function (v, i, a) {
        config.paths["system-" + v] = "system/" + v;
    });

    config.scenePaths.forEach(function (v, i, a) {
        config.paths[v] = "scene/" + v;
    });

    config.plotPaths.forEach(function (v, i, a) {
        config.paths[v] = "plot/" + v;
    });



    requirejs.config(config);









    requirejs(["jquery", "system-sys", "angular", 'angular-module', "system-scene", "res", "system-common", 'z', 'angular-animate', "plot", "deep-ui"].concat(gulpConfig.scenes.map((v) => v.name)), function ($, sys, angular, module, scene, res, common, z) {
        $("#game-first-tip").remove();
        module.controller("RootController", ["$rootScope", "$scope", function (rsp, sp) {

            common.$rootScope = angular.element("body").scope().$parent.$root;


            function getPre(skill) {
                let preText = "";
                skill.pre.forEach(function (v, i) {
                    if (i > 0)
                        preText += " , ";
                    preText += z.skill.name + "Lv" + v.level;
                })
                if (!preText) {
                    preText = "无";
                }
                return preText;
            }

            function getItemIcon(item, color) {

                if (typeof item === "string") {
                    item = res.devices[item];
                }

                return `${common.resPath}icon/item/${color}/${item.icon}.svg`;
            }

            function getRes(str) {
                return common.g(str);
            }

            function goScene(str, ...args) {
                scene.go(str, ...args);
            }

            function getSkillIcon(skill) {

                if (typeof skill === "string") {
                    skill = res.skills[skill];
                }

                if (z.skill[skill.name].satisfied && z.power >= getAction("学习").consume) {
                    return `${common.resPath}skills/${skill.icon}.jpg`;
                } else {
                    return `${common.resPath}skills/${skill.icon}-off.jpg`;
                }
            }

            function getSkillBg(skill) {
                if (typeof skill === "string") {
                    skill = res.skills[skill];
                }
                let color = "green";
                if (skill.pre.length != 0 && !z.skill[skill.name].satisfied) {

                    color = "grey";

                } else if (z.skill[skill.name].level >= 10) {
                    color = "yellow";
                }
                return `${common.resPath}skills/icon-over-${color}.gif`;
            }

            function openDebugPanel() {
                sp.showDebug = !sp.showDebug;
                console.log(scenePaths);
               
            }

            function debugScene(sceneName) {
                localStorage.setItem("debug-scene", sceneName);
                sp.goScene(sceneName);
                sp.showDebug = !sp.showDebug;
            }

            function clearHovering() {
                rsp.hoveringKind = "";
                delete rsp.hovering;
            }
            rsp.hoveringKind = "";
            rsp.clearHovering = clearHovering;

            let scenes = {};
            scenePaths.forEach(function (v, i) {
                scenes[v] = false;
            })
            $(".scene-wrap").show();
            common.$rootScope.scenes = scenes;
            _.extend(sp, {
                img: res.img,
                z,
                res,
                //                scenes,
                scenePaths,
                getPre,
                getItemIcon,
                getRes,
                goScene,
                getSkillIcon,
                getSkillBg,
                openDebugPanel,
                debugScene,
            });
            setTimeout(function () {
                scene.go("preload");
            })

    }]);
    angular.bootstrap("body", ['homeApp']);


    });
})()