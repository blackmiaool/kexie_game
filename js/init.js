
define(["scenes/home2", "scenes/bigmap", "scenes/chat", "scenes/cover", "scenes/preload", "scenes/save_load","sys"], function () {
    var sys=require("sys")
    var exports = {
        game_enter: function () {
            sys.zoom_and_developer_init();
            $(".section").hide();
            sys.to_scene("preload");
        }
    };

    function res_data_handle(text) {
        var data = JSON.parse(text);
        console.log(data);
        for (var table_name in data) {
            eval(table_name + "=" + "data[\"" + table_name + "\"];");
            switch (table_name) {
            case "course":

                for (var i in course) {
                    course[i].start = parseInt(course[i].week.split("-")[0]);
                    course[i].end = parseInt(course[i].week.split("-")[1]);
                    course[i].index = course[i].index.split(",");
                    course[i].data = []
                    for (var j in course[i].index) {
                        course[i].data.push({
                            index: parseInt(course[i].index[j].split("-")[0]),
                            period: course[i].index[j].split("-")[1],
                        })
                    }

                    course[i].week = []
                    switch (course[i].even_odd) {
                    case "even":
                        for (var j = course[i].start; j <= course[i].end; j++) {
                            if (j % 2 == 0) {
                                course[i].week.push(j)
                            }
                        }
                        break;
                    case "odd":
                        for (var j = course[i].start; j <= course[i].end; j++) {
                            if (j % 2 == 1) {
                                course[i].week.push(j)
                            }
                        }
                        break;
                    case "both":
                        for (var j = course[i].start; j <= course[i].end; j++) {
                            course[i].week.push(j)
                        }
                        break;
                    }
                    for (var j in course[i].week) {
                        for (var k in course[i].data) {
                            courses[course[i].term][course[i].week[j]][course[i].data[k].index][course[i].data[k].period] = course[i].name;
                        }

                    }
                }
                break;
            case "item":
                items = {};
                for (var i in item) {
                    item[i].cnt = 0;
                    item[i].price = parseInt(item[i].price)
                    items[item[i].name] = item[i];
                }
                break;
            case "combine":
                for (var i in combine) {
                    //replace
                    combine[i].material = md_trim(combine[i].material);
                    combine[i].material = combine[i].material.split("+")
                    var material = combine[i].material;
                    for (var j in material) {
                        var materials = material[j].split("*")
                        if (!materials[0]) {
                            console.error("missing material name");
                        } else if (!materials[1]) {
                            materials[1] = 1;
                        }
                        materials[1] = parseInt(materials[1])
                        material[j] = {
                            name: materials[0],
                            cnt: materials[1]
                        };
                    }

                    combine[i].instrument = combine[i].instrument.split("+");
                    combine[i].product = [];
                    for (var i in combine) {
                        combines[combine[i].name] = combine[i]
                    }

                }

                break;
            case "skill":
                skills = {}
                for (var i in skill) {
                    skills[skill[i].name] = {};
                    skills[skill[i].name].name = skill[i].name;
                    var skill_this = skills[skill[i].name];
                    skill_this.pre = [];
                    var pre_array = skill[i].pre.split(",");
                    for (var j in pre_array) {
                        if (pre_array[j] != "none") {
                            skill_this.pre.push(skills[pre_array[j]])
                        }
                    }
                    var skill_upgrades = skill[i].upgrade;
                    skill_upgrades = skill_upgrades.split(",")
                    skills[skill[i].name].upgrade = []
                    skills[skill[i].name].des = skill[i].des;
                    for (var j in skill_upgrades) {
                        skills[skill[i].name].upgrade[j] = parseInt(skill_upgrades[j])
                    }
                }
                break;

            }
        }
        quest = [{
            title: "投名状",
            des: "为了进入科协，你需要完成一份科协的投名状。由于你选择了数字方向，你需要制作一个单片机流水灯。",
            date: 10,
            target: [{
                type: "combine_need",
                data: {
                    name: "单片机流水灯",
                    stability: 0,
                    performance: 0,
                },
                cnt: 1,
            }],
        }, {
            title: "测试任务",
            des: "作者的测试任务。",
            date: 10,
            target: [{
                type: "thing_need",
                data: "LED",

                cnt: 12,
            }],
        }]
        console.log("markdown_handle_finish~~");
        markdown_handle_finish = true;
    }
    return exports;
})
var game_enter = function () {

}