var course; 
function Preload_scene() {
    this.name = "preload";
    var preload_bar;
    this.init = function () {
        $("#div-bg").before('\
      ');
        preload_bar = $("#preload_progress_bar");

    }
      
    var sys_text_files = [{
        name: "README.md",
        handle: markdown_handle
    }]


    //    readTextFile("README.md");


    function markdown_handle(text) {
        var lines = text.split("\n");
        var cur_line = 0;
        var line = ""
        var table_name = "";
        var col_num = 0;
        var cols = [];
        var rows = [];
        //    console.log("md handle")

        function read_line() {
            return lines[cur_line++];
        }

        while (true) {
            var cols = [];
            var rows = [];
            //        console.log("cur_line", cur_line)
            while (line.indexOf("######") == -1 && cur_line != lines.length) {
                line = read_line();
            }
            if (cur_line == lines.length) {
                break;
            }
            table_name = line.split("######")[1];
            table_name = md_trim(table_name)
                //        console.log(line)
                //        console.log(table_name)

            line = read_line()

            if (line) {
                line = line.split("|")
                for (var j in line) {

                    line[j] = md_trim(line[j])
                    if ((j == 0 || j == line.length - 1) && line[j] === "") {

                    } else {
                        cols.push(line[j]);
                    }
                    //  console.log(line[j])
                }
                if (line.length) {
                    cols = line;
                    rows.push(cols)
                        //                console.log(rows);
                } else {
                    console.error("markdown expect column title")
                    break;
                }
            } else {
                console.error("markdown expect table content")
                break;
            }

            line = read_line()

            if (line) {

            } else {
                console.error("markdown expect table spliter")
                break;
            }
            line = read_line()
            while (line.indexOf("|") != -1 && cur_line != lines.length) {

                var line_this = line.split("|")
                var row = []
                for (var j in line_this) {
                    line_this[j] = md_trim(line_this[j])
                    if ((j == 0 || j == line_this.length - 1) && line_this[j] === "") {

                    } else {
                        row.push(line_this[j]);
                        //                     console.log(line_this[j])
                    }

                }
                rows.push(row);
                line = read_line()
            }
            //        console.log(rows)
            eval(table_name + "=" + "[]");
            var data;
            eval("data=" + table_name + ";");

            for (var j in rows) {
                if (j != 0) {
                    var ele = {};
                    //                console.log(rows[j])
                    for (var k in rows[j]) {
                        ele[rows[0][k]] = rows[j][k];
                    }
                    // console.log(ele);
                    data.push(ele);
                }

            }
            //        console.log(table_name, "raw", data);
            switch (table_name) {
            case "course":

                for (var i in course) {
                    course[i].start = parseInt(course[i].week.split("-")[0]);
                    course[i].end = parseInt(course[i].week.split("-")[1]);
                    course[i].index = course[i].index.split(",");
                    course[i].data = []
                        //                course[i].term=parseInt(course[i].term)
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
                    //                console.log(course[i])
                    for (var j in course[i].week) {
                        for (var k in course[i].data) {
                            courses[course[i].term][course[i].week[j]][course[i].data[k].index][course[i].data[k].period] = course[i].name;
                            //                        console.log(course[i].term,course[i].week[j],course[i].data[k].index,course[i].data[k].period);
                        }

                    }
                    //                courses[course[i].term][]
                }
                //            console.log(courses)
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
                    //                console.log(combine[i].material);
                    combine[i].material = combine[i].material.split("+")
                    var material = combine[i].material;
                    //                console.log(material)
                    for (var j in material) {
                        //                    material[j]=md_trim(material[j])
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

                        //                  

                    }

                    combine[i].instrument = combine[i].instrument.split("+");
                    //                var instrument=combine[i].instrument;
                    combine[i].product = [];

                    for (var i in combine) {
                        combines[combine[i].name] = combine[i]
                    }

                }

                break;
            case "skill":
                skills = {}
                    //            console.info(skill)
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
                //            console.log(skills)
                break;

            }
            //        console.log(table_name, "handled", data);

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
        }, ],
    }, {
            title: "测试任务",
            des: "作者的测试任务。",
            date: 10,
            target: [{
                type: "thing_need",
                data: "LED",

                cnt: 12,
        }, ],
    }, ]
        console.log("markdown_handle_finish~~");
        markdown_handle_finish = true;
    }

    function preload_set(a, b) {
        preload_bar.text("资源加载中 " + a + "/" + b)
        preload_bar.css("width", a / b * 100 + '%')
    }
    this.id = "section_preload";

    this.pre_enter = function () {
        var res_sum = 0
        preload_set(0, res_sum)
        for (i in res) {
            res_sum++;
            var name = res[i];
            name = name.split('.')
            var load_cnt = 0;
            name = name[name.length - 2].split('/')
            name = name[name.length - 1];
            images[i] = new Image()
            images[i].src = res[i];
            images[i].onload = function () {
                load_cnt++;
                preload_set(load_cnt, res_sum)
            }
        }
        for (var i in sys_text_files) {
            sys.readTextFile(sys_text_files[i]);
        }
        var config_json_load_fnish=false;
        $.getJSON("config.json", function (data) {
            sys.config=data;
            config_json_load_fnish=true;
        });
        var preload_interval;

        function preload_check() {
            if (imdeveloper) { //skip res load in developer mode
                load_cnt = res_sum;
            }
            if ((load_cnt >= res_sum) && markdown_handle_finish && lua_handle_finish&&config_json_load_fnish) {
                //                console.log("check")
                clearInterval(preload_interval);
                //                preload_bar.parent().remove()
                angular.bootstrap("body", ['home_app']);
                var components = [
                    "skills",
                    "combines",
                    "items",
                    "quest",
                    "courses",
                ]
                for (var i in components) {
                    eval("v[components[i]]=" + components[i]);
                }
                if (imdeveloper) {
                    developer_set();
                    //                    sys.to_scene("chat");
                    //                    sys.to_scene("home");
                    sys.to_scene("bigmap");
                } else {
                    //                    sys.to_scene("home");
                    sys.to_scene("cover", "first");
                }
            }

        }
        preload_interval = setInterval(preload_check, 100);
    }
}

function developer_set() {
    v.basic.money = 10000;
    v.plot.start = true;
    item[find_index(item, "name", "LED")].cnt = 10;
    item[find_index(item, "name", "低端单片机")].cnt = 10;
    item[find_index(item, "name", "电路基础元件")].cnt = 10;
    item[find_index(item, "name", "烙铁")].cnt = 5;
}