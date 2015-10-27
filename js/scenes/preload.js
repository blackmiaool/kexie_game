define(["sys","libs/angular.min"], function (sys,angular) {
    var exports;
    var preload_bar = $("#preload_progress_bar");
    var scene = new sys.Scene("preload", "section_preload", function () {}, pre_enter, function () {})

    function pre_enter() {
        var res_sum = 0
        preload_set(0, res_sum)
        for (var i in res) {
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

                function preload_set(a, b) {
                    preload_bar.text("资源加载中 " + a + "/" + b)
                    preload_bar.css("width", a / b * 100 + '%')
                }
                preload_set(load_cnt, res_sum)
            }
        }
        for (var i in sys_text_files) {
            sys.readTextFile(sys_text_files[i]);
        }
        var config_json_load_fnish = false;
        $.getJSON("config.json", function (data) {
            sys.config = data;
            config_json_load_fnish = true;
        });
        var preload_interval;

        function preload_check() {
            if (imdeveloper) { //skip res load in developer mode
                load_cnt = res_sum;
            }
            if ((load_cnt >= res_sum) && markdown_handle_finish && lua_handle_finish && config_json_load_fnish) {
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
    return exports;

    
})

function developer_set() {
    v.basic.money = 10000;
    v.plot.start = true;
    item[find_index(item, "name", "LED")].cnt = 10;
    item[find_index(item, "name", "低端单片机")].cnt = 10;
    item[find_index(item, "name", "电路基础元件")].cnt = 10;
    item[find_index(item, "name", "烙铁")].cnt = 5;
}
