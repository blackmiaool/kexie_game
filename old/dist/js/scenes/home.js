"use strict";

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

define(["sys", "angular", "v", "common", "res", "dbg"], regeneratorRuntime.mark(function _callee(sys, angular, v, common, res, dbg) {
    var scene, take_move_point, updt_all, get_item_avaliable, tab_making_collapseing, tab_make_controller_scope;
    return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    get_item_avaliable = function get_item_avaliable(name) {

                        var num_can_make = 100000;
                        var material = combine[common.find_index(combine, "name", name)].material;
                        var instrument = combine[common.find_index(combine, "name", name)].instrument;
                        for (var i in material) {

                            var j = material[i];
                            //        console.log(j.name)
                            var num_this = items[j.name].cnt / j.cnt;
                            num_this = num_this.toString().split(".")[0];
                            num_this = parseInt(num_this);
                            // console.log("num" + num_this);
                            if (num_this < num_can_make) {
                                num_can_make = num_this;
                            }
                        }
                        for (var i in instrument) {
                            var j = instrument[i];
                            //console.log(j)
                            if (items[j].cnt < 1) {
                                return 0;
                            }
                        }
                        // console.log("numddd" + num_can_make);
                        return num_can_make;
                    };

                    updt_all = function updt_all() {
                        angular.element("body").scope().$parent.$root.$emit("home-update-all");
                        angular.element("#tab-buy").scope().$emit('home_root', {
                            name: 'item_updt',
                            param: ""
                        });
                        angular.element("#tab-buy").scope().$emit('home_root', {
                            name: 'prop_updt',
                            param: ""
                        });
                        angular.element("#tab-buy").scope().$emit('home_root', {
                            name: 'quest_updt',
                            param: ""
                        });
                        angular.element("#tab-buy").scope().$emit('home_root', {
                            name: 'combine_updt',
                            param: ""
                        });
                    };

                    take_move_point = function take_move_point() {
                        var $scope = angular.element("#scene_home").scope();

                        $scope.take_move_point();

                        if (!$scope.$$phase) {
                            $scope.$digest();
                        }
                    };

                    scene = new sys.Scene({
                        id: "home",
                        dom_id: "scene_home",
                        init: function init() {},
                        pre_enter: function pre_enter() {

                            var scene = $("#scene_home");
                            var tabs = {};

                            updt_all();
                            tabs_updt();
                            prop_updt();

                            function prop_updt() {
                                $(".prop-set .prop-value").css("left", "-97px");
                                var tab_div = $("#home-head .prop .prop-set[is-first=true]");

                                var i = 0;
                                var values = [];
                                var index = 0;
                                while (tab_div.length != 0) {

                                    // console.log(tab_div);

                                    var value = tab_div.children(".prop-value");
                                    values[values.length] = value;

                                    // console.log(value);

                                    setTimeout(function () {
                                        values[index].animate({
                                            left: '0px'
                                        });
                                        index++;
                                    }, i * 100);
                                    i++;
                                    tab_div = tab_div.next();
                                }
                            }

                            function tab_item_updt() {}

                            function tab_quest_updt() {}

                            function tab_store_updt() {}

                            function tab_team_updt() {
                                var li_index = 0;
                                var first = true;
                                var text_head_width = 50;
                                var data = [{
                                    head: "数字",
                                    value: 33
                                }, {
                                    head: "模拟",
                                    value: 25
                                }, {
                                    head: "效率",
                                    value: 63
                                }, {
                                    head: "体力",
                                    value: 73
                                }, {
                                    head: "节操",
                                    value: 93
                                }];
                                //        console.log()
                                //        var width = parseInt($(".chart").css("width")) - 15,
                                var width = 430,
                                    barHeight = 35,
                                    gap = 10;

                                var x = d3.scale.linear().domain([0, 105]).range([0, width - text_head_width]);

                                var chart = d3.select(".chart").attr("height", barHeight * data.length);

                                var bar = chart.selectAll("g").data(data).enter().append("g").attr("transform", function (d, i) {
                                    return "translate(0," + i * barHeight + ")";
                                });

                                bar.append("rect").data(data).attr("x", text_head_width).attr("width", "0px").attr("height", barHeight - gap);

                                bar.append("text").attr("x", text_head_width).attr("y", (barHeight - gap) / 2).attr("dy", ".35em").attr("kind", "value");

                                bar.append("text").attr("kind", "head").attr("x", 45).attr("y", (barHeight - gap) / 2).attr("dy", ".35em").text(function (d) {
                                    return d.head;
                                });
                                $("#carousel-team-generic").addClass("slide");

                                function carousel_change(event) {
                                    var index;
                                    if (event === true) {
                                        index = $("#tab-team .carousel-inner [first=true]");
                                    } else {
                                        index = $(event.relatedTarget);
                                    }

                                    var text_head_width = 50;
                                    var current_pp = res.pp[index.attr("name")];
                                    var width = 330,
                                        barHeight = 35,
                                        gap = 10;
                                    // console.log(current_pp.name)
                                    //console.log($("#tab-team .carousel-inner .item.active").attr("name"))
                                    var data = [current_pp["数字"], current_pp["模拟"], current_pp["效率"], current_pp["体力"], current_pp["节操"]];
                                    if (current_pp.skill != undefined) {
                                        $("#tab-team-skill-content").html(current_pp.skill);
                                    }
                                    d3.selectAll(".chart g rect").data(data).transition().duration(1000).ease("cubic-out").attr("width", function (d, i) {
                                        // console.log("d=" + d + "i=" + i)
                                        return x(d + 5);
                                    }).attr("opacity", function (d, i) {
                                        return d / 100;
                                    });

                                    d3.selectAll(".chart g text[kind=value]").data(data).text(function (d) {
                                        return d;
                                    }).transition().duration(2000).ease("cubic-out").attr("x", function (d) {
                                        return x(d + 5) - 5 + text_head_width;
                                    });
                                }
                                $('#carousel-team-generic ').on('slide.bs.carousel', function (a, b) {
                                    carousel_change(a, b);
                                    var collapse = $("#team-skill-heading");
                                    collapse.collapse('hide');
                                    collapse.on('hidden.bs.collapse', function () {
                                        collapse.collapse('show');
                                    });
                                });

                                carousel_change(true);
                            }

                            function tab_make_updt() {}

                            function tabs_updt() {
                                tab_item_updt();
                                tab_quest_updt();
                                tab_store_updt();
                                tab_team_updt();
                                tab_make_updt();
                            }
                        },
                        enter: function enter() {}
                    });

                    //
                    //itemd = [{
                    //    head: "科协投名状",
                    //    des: "为了进入科协，你需要完成一份科协的投名状。由于你选择了数字方向，你需要制作一个单片机流水灯。",
                    //    data: [{
                    //        key: "任务期限",
                    //        num: "10天",
                    //    }, {
                    //        key: "任务目标：",
                    //        num: "单片机流水灯 0/1",
                    //    }, ]
                    //}, ]

                    tab_making_collapseing = false;

                    angular.module('home_app').controller("tab_team_controller", function ($scope) {

                        $scope.data = {};

                        for (var i in res.pp) {
                            if (res.pp[i].tag) {
                                res.pp[i].visiability = true;
                                $scope.data[i] = res.pp[i];
                            }
                        }
                    }).controller("home_root", ["$rootScope", "$scope", "$timeout", function ($rootScope, $scope, $timeout) {
                        $rootScope.$on("home-update-all", function () {
                            $scope.$broadcast("item_updt");
                            $scope.$broadcast("prop_updt");
                            $scope.$broadcast("quest_updt");
                            $scope.$broadcast("combine_updt");
                        });

                        $scope.v = v;
                        console.log(v);
                        $scope.home_save = function () {
                            sys.to_scene("save", "save", "home");
                        };
                        $scope.home_load = function () {
                            sys.to_scene("save", "load", "home");
                        };

                        $scope.left_points = v.left_points;

                        $scope.updt_button_state = function () {
                            //            $scope.button_state = (v.time.period >= v.time.total_point_today);
                        };
                        $scope.updt_button_state();
                        $scope.updt_period = function () {

                            if ($scope.arrange[v.time.week_day_index][res.the_period_of_day[v.time.period]]) {
                                v.time.period++;
                                $scope.updt_period();
                            }
                        };

                        $scope.updt = 0;
                        $scope.take_move_point = function () {
                            //            if (v.time.period < v.time.total_point_today) {
                            //                v.time.period++;
                            //                $scope.button_state = (v.time.period >= v.time.total_point_today);
                            //                //                console.log($scope.button_state)
                            //
                            //                $scope.updt_period();
                            //                $scope.updt++;
                            //                return true;
                            //            } else {
                            //                console.error("get point err");
                            //                return false;
                            //            }
                        };

                        $scope.get_v = function (name) {
                            var vvv = "var value=v." + name;
                            eval(vvv);
                            return value;
                        };
                        $("#home-tabs>.tab-content>.tab-pane").css("visibility", "visible");
                        $("#home-tabs>.tab-content>.tab-pane").hide();
                        var current_tab = common.local.get("current_tab");

                        $timeout(function () {}, 1000);

                        $scope.$on("home_root", function (event, msg) {
                            $scope.$broadcast(msg.name, msg.param);
                        });
                        $scope.$on('home_recv', function (event, msg) {
                            for (var i in msg) {
                                $scope.list[msg.link][i] = msg[i];
                            }
                        });

                        $scope.tab_select = function (key, name) {
                            $scope.list[key].content = "";
                            $("#home-tabs>.tab-content>.tab-pane").hide();
                            $("#tab-" + name).show();
                            $scope.tab_selecting = key;

                            common.local.set("current_tab", {
                                content: {
                                    name: name,
                                    key: key
                                }
                            });
                        };
                        $scope.list = {
                            执行: {
                                title: "执行",
                                name: "plan"
                            },
                            物品: {
                                title: "物品",
                                name: "item"
                            },
                            队友: {
                                title: "队友",
                                name: "team"
                            },
                            任务: {
                                title: "任务",
                                name: "quest"
                            },
                            //            技能: {
                            //                title: "技能",
                            //                name: "skill"
                            //            },
                            购物: {
                                title: "购物",
                                name: "buy"
                            },
                            制造: {
                                title: "制造",
                                name: "make"
                            }
                        };
                        var loaded_cnt = 0;
                        var loaded_target = 0;
                        for (var i in $scope.list) {
                            loaded_target++;
                        }
                        loaded_target += 2;
                        if (current_tab) {
                            $timeout(function () {

                                $("#home-tabs").data("tab", current_tab.content.name);
                                var key = current_tab.content.key;
                                var name = current_tab.content.name;
                                $scope.list[key].content = "";
                                $("#home-tabs>.tab-content>.tab-pane").hide();
                                $("#tab-" + name).show();
                                $scope.tab_selecting = key;
                            });
                        }
                        //        $scope.$on("$includeContentLoaded", function (params, data) {
                        //            loaded_cnt++;
                        //            console.log(loaded_cnt, loaded_target)
                        //            if (loaded_cnt == loaded_target) {
                        //               
                        //            }
                        //        })
                    }]).controller("danmu_controller", function ($scope) {
                        $scope.data = [];
                        var danmu_list = [];
                        $scope.enter = function (data, index) {
                            console.log("danmu", data.text);
                            setTimeout(function () {
                                $scope.$apply(function () {
                                    var bg = $(".danmu_bg");
                                    //            danmu_list.push(bg);

                                    bg.attr("danmu-text", data.text);
                                    bg.attr("danmu-bg-color", data.bg_color);
                                    //            console.log(this)
                                    $(".danmu_bg").find(".danmu-out").slideDown(500);
                                    $(".danmu_bg").slideDown(500, function () {
                                        var label = $(this).find("label.danmu-in");
                                        label.show();
                                        //                label.show()
                                        label.css("left", "960px");
                                        //       
                                        label.animate({
                                            left: "100px"
                                        }, 1000, "easeOutSine");
                                        label.animate({
                                            left: "-100px"
                                        }, 3000, "linear");
                                        label.animate({
                                            left: "-960px"
                                        }, 1000, "easeInSine", function () {
                                            label.hide();
                                            $(this).parent().slideUp(500);
                                            $(this).parent().parent().slideUp(500, function () {
                                                $scope.data.shift();
                                            });
                                        });
                                    });
                                });
                            }, 50);
                        };
                    }).controller('tab_make_controller', function ($scope) {
                        $scope.data = combine;
                        $scope.updt = 0;
                        tab_make_controller_scope = $scope;
                        var line_gap_time = 100;
                        var word_gap_time = 5;
                        var collapse = $("#tab-make-content");
                        var output_data = [];
                        var progress_bar = $("#tab-make-progress div");
                        var current_combine = "";

                        function progress_set(a, b) {

                            progress_bar.text(a + "/" + b);
                            progress_bar.css("width", a / b * 100 + '%');
                        }

                        // $("#tab-make-output").append($('<span style="color:#E53333;">Deffe</span>'))
                        function output(data, config) {
                            // $("#tab-make-output").append($('<p>' + text + '</p><br/>'))
                            if (config == undefined) {
                                config = {};
                            }
                            output_data.push({
                                data: data,
                                config: config
                            });
                        }

                        function output_finish() {
                            var output_len = 0;
                            var head = [];
                            var frame_output = $("#tab-make-output");
                            var data = [];
                            // $("#tab-make-output").append($("<br></br>"))
                            for (var i = 0; i < output_data.length; i++) {
                                switch (_typeof(output_data[i].data)) {
                                    case "string":
                                        if (output_data[i].config.head !== false) {
                                            data.push({
                                                type: "system",
                                                data: "head"
                                            });
                                        }
                                        for (var j = 0; j < output_data[i].data.length; j++) {
                                            data.push(output_data[i].data.charAt(j));
                                        }

                                        break;
                                    case "object":
                                        data.push(output_data[i].data);
                                        break;
                                }
                            }
                            data.push({
                                type: "system",
                                data: "end"
                            });
                            var gap_time = 0;
                            var line;
                            var output_exec = function output_exec() {
                                var d = data[output_len];
                                var go_on = true;
                                var go_on_gap = word_gap_time;

                                // console.log(d);
                                switch (typeof d === "undefined" ? "undefined" : _typeof(d)) {
                                    case "object":
                                        switch (d.type) {
                                            case "system":
                                                switch (d.data) {
                                                    case "head":
                                                        line = $("<p></p>");
                                                        $("#tab-make-output").append(line);
                                                        go_on_gap = line_gap_time;
                                                        break;
                                                    // case "rear":
                                                    //     // $("#tab-make-output").append($("<br/>"));

                                                    //     break;
                                                    case "end":
                                                        go_on = false;
                                                        output_data = [];
                                                        combine[common.find_index(combine, "name", current_combine)].product.push({
                                                            stability: 87,
                                                            performance: 103
                                                        });
                                                        $scope.$apply();
                                                        $scope.$emit('home_root', {
                                                            name: 'item_updt',
                                                            param: ""
                                                        });
                                                        // $scope.emit()
                                                        break;
                                                    case "progress":
                                                        console.log("progress" + d.current);
                                                        progress_set(d.current, d.sum);
                                                        break;
                                                }
                                                break;
                                            case "color_text":
                                                // line = $("<p></p>")
                                                // $("#tab-make-output").append(line);
                                                line.append(d.data);
                                                break;
                                        }
                                        break;
                                    case "string":
                                        line.html(line.html() + d);
                                        break;
                                }
                                $("#tab-make-output")[0].scrollTop = $("#tab-make-output")[0].scrollHeight;
                                output_len++;
                                if (go_on) {
                                    setTimeout(function () {
                                        output_exec();
                                    }, go_on_gap);
                                }
                            };
                            output_len = 0;
                            output_exec();
                        }

                        $scope.make_test = function () {
                            console.log("make_test");
                            $scope.updt++;
                            $scope.value = combines[current_combine];
                            var material = combines[current_combine].material;
                            //            $scope.value = combine[common.find_index(combine, "name", current_combine)];
                            //            var material = combine[common.find_index(combine, "name", current_combine)].material
                            for (var i in material) {

                                var j = material[i];

                                var num_this = items[j.name].cnt -= j.cnt;
                                // num_this = num_this.toString().split(".")[0];
                                // if (num_this < num_can_make) {
                                //     num_can_make = num_this;
                                // }
                            }
                            output("制作目标：" + $scope.value.name);
                            output("制作人员：我");
                            var instrument = "";
                            for (var i in $scope.value.instrument) {
                                instrument += $scope.value.instrument[i];
                                instrument += " ";
                            }
                            output("制作仪器：" + instrument);
                            var material = "";
                            for (var i in $scope.value.material) {
                                material += $scope.value.material[i].name;
                                material += "*";
                                material += $scope.value.material[i].cnt;
                                material += " ";
                            }
                            output("消耗材料：" + material);
                            output("工期：" + $scope.value.date + "天");
                            var day_index = 0;
                            for (var i = 0; i < $scope.value.date; i++) {
                                output("第" + (i + 1) + "天：");
                                if (i < 5) {
                                    output("焊接");
                                } else if (i < 8) {
                                    output("编程");
                                } else {
                                    output("调试");
                                }

                                output({
                                    type: "system",
                                    data: "progress",
                                    current: i + 1,
                                    sum: $scope.value.date
                                });
                            }
                            output("");
                            output({
                                type: "color_text",
                                data: color_text_create($scope.value.name, "green")
                            }, {
                                head: false
                            });
                            output(" 制作成功", {
                                head: false
                            });
                            output("稳定性：" + 87 + " 性能：" + 100);
                            output_finish();
                            console.log($("<div>sss<span>eee</span>eee</div>"));
                        };
                        $scope.make = function () {
                            $scope.$emit('home_recv', {
                                link: "执行",
                                state: 'warning',
                                content: "!"
                            });
                            v.make.progress = 0;
                            v.make.innovate = 0;
                            v.make.target = current_combine;
                            $scope.updt++;
                            $scope.value = combines[current_combine];
                            var material = combines[current_combine].material;
                            for (var i in material) {
                                var j = material[i];
                                items[j.name].cnt -= j.cnt;
                            }
                            return;

                            if (tab_making_collapseing == true) {
                                return;
                            }
                            tab_making_collapseing = true;

                            setTimeout(function () {
                                tab_making_collapseing = false;
                            }, 250);
                            //            collapse.collapse('hide');
                            collapse.off('hidden.bs.collapse');
                            //            $("#tab-make-desk").collapse('show');
                            setTimeout(function () {
                                $scope.$apply(function () {
                                    $scope.make_test();
                                });
                            }, 250);
                        };

                        // function make_check()

                        function make_cnt_cal() {
                            //console.log("make cal")
                            // return $("#tab-make-content .item-num").hasClass("insufficient") ? "disabled" : "";
                        }
                        $scope.make_check = function () {
                            if (v.make.target) return "disabled";
                            if (current_combine) {
                                if (get_item_avaliable(current_combine) <= 0) return "disabled";
                            } else {
                                return "disabled";
                            }
                        };
                        $scope.resolve = function (event) {};
                        $scope.resolve_check = function (event) {
                            return "disabled";
                        };
                        $scope.change_thing = function (event, name) {
                            current_combine = name;
                            if (tab_making_collapseing == true) {
                                //console.log('ddd')
                                return;
                            }
                            $("#make-panel-group .my-panel-heading").removeClass("selected");
                            $("#make-panel-group .my-panel-heading[name='" + name + "']").addClass("selected");

                            tab_making_collapseing = true;
                            setTimeout(function () {
                                tab_making_collapseing = false;
                            }, 500);

                            if ($("#tab-make-desk").hasClass("in")) {
                                $("#tab-make-desk").collapse('hide');
                            }

                            if (!$("#tab-make-content").hasClass("in")) {
                                $scope.value = combine[common.find_index(combine, "name", name)];
                                setTimeout(function () {
                                    collapse.collapse('show');
                                    $scope.$apply(function () {
                                        // $scope.make_check = make_check();
                                    });
                                }, 50);
                            } else {
                                collapse.collapse('hide');
                            }
                            collapse.off('hidden.bs.collapse');
                            collapse.on('hidden.bs.collapse', function () {
                                //console.log("ffff")

                                $scope.$apply(function () {
                                    $scope.value = combine[common.find_index(combine, "name", name)];
                                });
                                setTimeout(function () {
                                    collapse.collapse('show');
                                    $scope.$apply(function () {
                                        // $scope.make_check = make_check();
                                    });
                                }, 50);
                            });
                        };
                        $scope.$on('item_updt', function (event, data) {
                            //            console.log("make item updt")
                            $scope.updt++;
                            setTimeout(function () {
                                $scope.$apply(function () {
                                    // $scope.make_check = make_check();
                                });
                            }, 50);
                        });
                        $scope.$on('combine_updt', function (event, data) {
                            //            console.log("make combine updt")
                            $scope.updt++;
                            $scope.data = combine;
                            setTimeout(function () {
                                $scope.$apply(function () {
                                    // $scope.make_check = make_check();
                                });
                            }, 50);
                        });
                    }).controller('tab_quest_controller', function ($scope) {
                        $scope.data = quest;
                        $scope.udpt = 0;

                        function target_check_all() {
                            for (var i in quest) {
                                quest[i].finished = true;
                                for (var j in quest[i].target) {
                                    if ($scope.target_check(quest[i].target[j]) != "sufficient") {
                                        quest[i].finished = false;
                                        break;
                                    }
                                }
                                if (quest[i].finished) {

                                    if (quest[i].danmu == true) {
                                        continue;
                                    }
                                    quest[i].danmu = true;
                                    miao_danmu("任务 \"" + quest[i].title + "\" 完成");
                                    console.log("任务 \"" + quest[i].title + "\" 完成");
                                }
                            }
                        }
                        $scope.target_check = function (target) {
                            switch (target.type) {
                                case "thing_need":
                                    if (items[target.data].cnt >= target.cnt) {
                                        return "sufficient";
                                    } else {
                                        return "insufficient";
                                    }
                                    break;
                                case "combine_need":

                                    var stability_need = 0;
                                    var performance_need = 0;

                                    if (target.data.stability > 0) {
                                        stability_need = target.data.stability;
                                    }
                                    if (target.data.performance > 0) {
                                        performance_need = target.data.performance;
                                    }
                                    var cnt = 0;
                                    var products = combine[common.find_index(combine, "name", target.data.name)].product;
                                    for (var i = 0; i < products.length; i++) {
                                        if (products[i].stability > stability_need && products[i].performance > performance_need) {
                                            cnt++;
                                        }
                                    }
                                    if (cnt >= target.cnt) {
                                        return "sufficient";
                                    } else {
                                        return "insufficient";
                                    }
                                    break;
                            }
                        };
                        $scope.target_handle = function (target) {

                            switch (target.type) {
                                case "thing_need":
                                    var ret = target.data + " " + items[target.data].cnt + "/" + target.cnt;
                                    return ret;
                                case "combine_need":
                                    var ret = target.data.name + " " + combine[common.find_index(combine, "name", target.data.name)].product.length + "/" + target.cnt;
                                    return ret;

                            }
                        };

                        function quest_updt() {
                            $scope.data = quest;
                            $scope.udpt++;
                            target_check_all();
                        }
                        $scope.$on('item_updt', function (event, data) {
                            quest_updt();
                        });
                        $scope.$on('prop_updt', function (event, data) {
                            quest_updt();
                        });
                        $scope.$on('quest_updt', function (event, data) {
                            quest_updt();
                        });
                    }).controller('tab_buy_controller', function ($scope) {
                        $scope.data = {};

                        $scope.updt = 0;

                        function store_updt() {
                            //            console.log("ddd")
                            $scope.data = {};
                            var data = $scope.data;

                            for (var i in items) {
                                var thing = items[i];
                                if (thing.store == undefined) {
                                    continue;
                                }
                                if (data[thing.store] == undefined) {
                                    data[thing.store] = {};
                                }
                                if ($scope.data[thing.store][thing.kind] == undefined) {
                                    data[thing.store][thing.kind] = [];
                                }
                                data[thing.store][thing.kind].push(thing);
                            }
                            $scope.updt++;
                            setTimeout(function () {
                                //                $('#buy-tabs a').click(function (e) {
                                //                    e.preventDefault(); //阻止a链接的跳转行为
                                //                    $(this).tab('show'); //显示当前选中的链接及关联的content
                                //                })
                                $('#tab-buy a').click(function (e) {
                                    e.preventDefault(); //阻止a链接的跳转行为
                                    $(this).tab('show'); //显示当前选中的链接及关联的content
                                });
                            }, 0);
                        }
                        $scope.store_updt = store_updt;
                        store_updt();

                        $scope.link_tab = function (event) {
                            $(event.target).tab('show');
                            console.log($(event.target).tab, "link");
                        };
                        $scope.store_buy = function (event) {
                            var item_this = items[$(event.target).attr("name")];
                            if ($(event.target).hasClass("disabled")) return;
                            v.basic.money -= item_this.price;
                            item_this.cnt++;
                            $scope.$emit('home_root', {
                                name: 'item_updt',
                                param: ""
                            });
                            $scope.$emit('home_root', {
                                name: 'prop_updt',
                                param: ""
                            });
                        };
                        $scope.store_sell = function (event) {
                            var item_this = items[$(event.target).attr("name")];
                            if ($(event.target).hasClass("disabled")) return;
                            v.basic.money += item_this.price;
                            item_this.cnt--;
                            $scope.$emit('home_root', {
                                name: 'item_updt',
                                param: ""
                            });
                            $scope.$emit('home_root', {
                                name: 'prop_updt',
                                param: ""
                            });
                        };
                        $scope.$on('item_updt', function (event, data) {
                            store_updt();
                        });
                    }).controller("tab_item_controller", function ($scope) {
                        $scope.data_combine = combines;
                        $scope.cur_select = "";
                        $scope.select = function (cur_select) {
                            $scope.cur_select = cur_select;
                        };

                        $scope.item_updt = function () {
                            $scope.data = {};
                            for (var i in items) {
                                if (!$scope.data[items[i].kind]) {
                                    $scope.data[items[i].kind] = [];
                                }
                                $scope.data[items[i].kind].push(items[i]);
                            }
                        };

                        $scope.item_updt();
                        $scope.store_name = "item-tab";
                        $scope.check_items = function (items) {
                            var _iteratorNormalCompletion = true;
                            var _didIteratorError = false;
                            var _iteratorError = undefined;

                            try {

                                for (var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                    var i = _step.value;

                                    if (i.cnt) return true;
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

                            return false;
                        };
                        $scope.$on('item_updt', function (event, data) {
                            $scope.item_updt();
                        });
                    }).controller("prop_controller", function ($scope) {
                        $scope.data = {
                            姓名: "",
                            职位: "",
                            信仰: "",
                            金钱: "",
                            剩余行动点: ""
                        };
                        $scope.prop_updt = function () {
                            $scope.data = {
                                姓名: v.basic.name,
                                职位: v.basic.title,
                                信仰: v.basic.belief,
                                金钱: v.basic.money,
                                剩余行动点: v.left_points
                            };
                        };
                        //                日期: (v.time.year + "").charAt(2) + (v.time.year + "").charAt(3) + "/" + v.time.month + "/" + v.time.day,

                        $scope.prop_updt();
                        $scope.$on('prop_updt', function (event, data) {
                            $scope.prop_updt();
                        });
                    }).controller("tab_plan_controller", function ($scope) {

                        //        $scope.get_class=function(name){
                        //           
                        //        }
                        //        $scope.class = ["凌晨", "微积分", "线性代数", "晚上", "午夜"];
                        //         res.the_period_of_day = ["上午", "下午", "晚上", "午夜"]
                        $scope.the_period_of_day = res.the_period_of_day;

                        var design_class = function design_class() {

                            for (var i = 0; i < 8; i++) {
                                v.study.arrange[i] = [];
                            }
                            $('#class_form').modal();
                        };
                        //        console.log($scope.courses);

                        $scope.rest = function () {
                            $scope.take_move_point();
                            v.state.fatigue = 0;

                            if (v.state.fatigue < v.abality.rest_eff) {
                                v.state.fatigue = 0;
                            } else {
                                v.state.fatigue -= v.abality.rest_eff;
                            }
                        };
                        $scope.week_day_index_value = $(".plan-right-block .week_day_index");

                        function scene_value_effect(obj, effect, timeout) {
                            if (timeout == undefined) {
                                timeout = 1000;
                            }
                            obj.removeClass(effect);
                            obj.addClass('transparent');
                            clearTimeout(obj.timeoutid);
                            setTimeout(function () {
                                obj.addClass(effect);
                                obj.removeClass('transparent');
                            }, 30);
                            obj.timeoutid = setTimeout(function () {
                                obj.removeClass(effect);
                            }, timeout);
                        }

                        function end_day() {
                            scene_value_effect($scope.week_day_index_value, 'magictime puffIn');
                            v.time.week_day_index++;
                            if (v.time.week_day_index == 8) {
                                v.time.week_day_index = 1;
                                v.time.week++;
                                if (v.time.week == 21) {
                                    v.time.week = 1;
                                    v.time.term++;
                                }
                            }
                            v.time.day++;

                            if (v.time.day == 31) {
                                v.time.day = 1;
                                v.time.month++;
                                if (v.time.month == 13) {
                                    v.time.month = 1;
                                    v.time.year++;
                                }
                            }
                            $scope.$emit('home_root', {
                                name: 'prop_updt',
                                param: ""
                            });
                            v.time.period = 0;
                            console.log($scope.button_state);
                            //            $scope.button_state=false;
                            $scope.updt_period();
                            $scope.updt_button_state();
                            console.log("enday");

                            if (v.time.week_day_index == 1) {
                                design_class();
                            }
                        }
                        $scope.study = function () {
                            $scope.take_move_point();
                            v.state.fatigue += 5;
                            if (v.state.fatigue > 100) {
                                v.state.fatigue = 100;
                            }

                            v.state.skill_progress += 15;
                            v.state.skill_point += parseInt(v.state.skill_progress / 100);
                            if (parseInt(v.state.skill_progress / 100)) angular.element("#tab-skill").scope().skill_check();

                            v.state.skill_progress = v.state.skill_progress % 100;
                        };
                        $scope.make = function () {
                            $scope.take_move_point();
                            v.state.fatigue += 7;
                            if (v.state.fatigue > 100) {
                                v.state.fatigue = 100;
                            }
                            v.make.progress += 30;
                            v.make.innovate += 5;
                        };
                        $scope.make_end = function () {

                            $scope.$emit('home_recv', {
                                link: "物品",
                                state: 'success',
                                content: "!"
                            });
                            console.log($scope.combines);

                            combines[v.make.target].product.push({
                                name: v.make.target,
                                progress: v.make.progress,
                                innovate: v.make.innovate
                            });
                            console.log(combines[v.make.target]);
                            v.make.target = false;
                        };
                        $scope.go_school = function () {
                            $scope.take_move_point();
                            v.state.fatigue += 3;
                            if (v.state.fatigue > 100) {
                                v.state.fatigue = 100;
                            }
                        };
                        $scope.go_out = function () {
                            //            $scope.take_move_point();
                            (function () {
                                //                sys.to_scene("bigmap");
                            })();
                        };

                        $scope.pass_day = function () {
                            end_day();
                        };

                        //        if (local_load("dbg.imdeveloper") == "true") {
                        //            setTimeout(function () {
                        //                design_class()
                        //            }, 100)
                        //
                        //        }
                    }).filter("buy_btn_price_handle", function () {
                        return function (price) {
                            if (price > v.basic.money) {
                                return "disabled";
                            } else {
                                return "";
                            }
                        };
                    }).filter("get_item_avaliable", function () {
                        return get_item_avaliable;
                    }).filter("buy_btn_cnt_handle", function () {
                        return function (cnt) {
                            if (cnt < 1) {
                                return "disabled";
                            } else {
                                return "";
                            }
                        };
                    }).filter("get_item_cnt", function () {
                        return function (name) {
                            //console.log(name)
                            return items[name].cnt;
                        };
                    }).filter("get_prop_icon", function () {
                        var prop_icons = {
                            姓名: "glyphicon-user",
                            职位: "glyphicon-star-empty",
                            信仰: "glyphicon-glyphicon glyphicon-leaf",
                            金钱: "glyphicon-bitcoin",
                            剩余行动点: "glyphicon-calendar"
                        };
                        return function (name) {
                            //            console.log(name)
                            return prop_icons[name];
                        };
                    }).filter("progress_color", function () {

                        return function (progress) {
                            if (progress > 70) return "progress-bar-danger";else if (progress < 30) return "progress-bar-success";else return "progress-bar-warning";
                        };
                    });
                case 6:
                case "end":
                    return _context.stop();
            }
        }
    }, _callee, this);
}));