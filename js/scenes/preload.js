var exports;
var preload_bar = $("#preload_progress_bar");


var pre_enter = function () {

    var res_sum = 0
    preload_set(0, res_sum)


    function preload_set(a, b) {
        preload_bar.text("资源加载中 " + a + "/" + b)
        preload_bar.css("width", a / b * 100 + '%')
    }
    if (!dbg.imdeveloper) {
    for (var i in res.img) {
        res_sum++;
        var name = res.img[i];
        name = name.split('.')
        var load_cnt = 0;
        name = name[name.length - 2].split('/')
        name = name[name.length - 1];
        images[i] = new Image()
        images[i].src = res.img[i];
        images[i].onload = function () {
            load_cnt++;


            preload_set(load_cnt, res_sum)
        }
    }}
    //        for (var i in sys_text_files) {
    //            sys.readTextFile(sys_text_files[i]);
    //        }
//    var config_json_load_fnish = false;
//    $.getJSON("config.json", function (data) {
//        sys.config = data;
//        config_json_load_fnish = true;
//    });
    sys.config =
        <!-- inject: ../../config.json--> ;
    var preload_interval;

    function preload_check() {
        
        if (dbg.imdeveloper) { //skip res load in developer mode
            load_cnt = res_sum;
        }
        if ((load_cnt >= res_sum) ) {
            //                console.log("check")
            clearInterval(preload_interval);
            //                preload_bar.parent().remove()

            var components = [
                    "skills",
                    "combines",
                    "items",
                    "quest",
                    "courses",
                ];
            for (var i in components) {
                eval("v[components[" + i + "]]=" + components[i]);
            }
            if (dbg.imdeveloper) {
                developer_set();
                sys.to_scene("home"); 
//                sys.to_scene("chat"); 
                 
                
            } else {
                //                    sys.to_scene("home");
                sys.to_scene("cover", "first");
            }
        }

    }
    preload_interval = setInterval(preload_check, 10);
}


var scene = {
    id: "preload",
    dom_id: "scene_preload",
    pre_enter: pre_enter,
};


new sys.Scene(scene);

var images = []


function developer_set() {
    v.basic.money = 10000;
    v.plot.start = true;
    item[common.find_index(item, "name", "LED")].cnt = 10;
    item[common.find_index(item, "name", "低端单片机")].cnt = 10;
    item[common.find_index(item, "name", "电路基础元件")].cnt = 10;
    item[common.find_index(item, "name", "烙铁")].cnt = 5;
}
return exports; 