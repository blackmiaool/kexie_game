function Chat_scene() {
    this.name = "chat";
    var lua_files = ["api.lua", "main.lua", "npc/npc.lua", "npc/chenjiong.lua", "npc/chenguo.lua", "start.lua", "nature_test.lua", "test.lua", "xuanjianghui.lua", "kexie_first.lua", "spot.lua", "end.lua"];
    for (var i in lua_files) {
        lua_files[i] = "lua/" + lua_files[i]
    }

    function lua_handle(code) {
        L.execute(code)
    }
    var index;

    function load_lua(reload) {
        if (index == lua_files.length) {
            //                lua_handle_finish=true;
            return;
        }
        //        if(reload)
        //        {
        //            lua_files[index] =  lua_files[index]
        //        }
        //        else
        lua_files[index] = lua_files[index]
        sys.readTextFile({
            name: lua_files[index],
            handle: lua_handle
        }, load_lua)
        index++;
    }

    function prepare_lua(reload) {
        index = 0;
        load_lua(reload);
    }
    var tttt = this;
    this.reload = function () {
        prepare_lua(true);
        setTimeout(
            function () {
                tttt.pre_enter();
            }, 100
        )
    }
    this.init = function () {

        prepare_lua();
        $("#section_chat").click(
            function () {
                if (touch_enable !== false)
                    touched = true;
            }
        )
        
        div_mood = $("#div_mood") 
        div_mood.click(function () {
            if (touch_enable !== false)
                touched = true;
        })
        div_danmu = $("#div_danmu") 
        div_danmu.click(function () {
            if (touch_enable !== false)
                touched = true;
        })


        div_text = $("#div-text");

        div_bg = $("#div-bg");
        div_bg.click(function () {
            if (touch_enable !== false)
                touched = true;
            //print("touched")
        })
        div_btn = $("#div-btn");

        message = message_create();
        var chat_text = $("#chat_text");
        chat_text.click(function () {
            if (touch_enable !== false)
                touched = true;
        })




        var div_half = $("#div-half");
        div_half.click(function () {
            div_half_click = true;
            if (touch_enable !== false)
                touched = true;
        })


        div_bg.html('<img id="background"></img>')
        bg = $("#background");



        //text.setNString("喵到了到了无可放假了无可减肥来我空间俄方为了减肥无可放假了无可减肥来我空间俄方为了减肥").start()
        //
        message.hide()

        function center(obj) {
                //console.log([$(window).width(), $("#base").width(), $(window).scrollLeft(), sx])
                obj.css('position', 'absolute');
                obj.css('top', ($(window).height() - obj.height()) / +$(window).scrollTop() + 'px');
                obj.css('left', ($(window).width() - sx) / 2 + 'px');

                return obj;

            }
            //    center($(".section"))
        var sections = $(".section")
        sections.hide()
        $("#section_chat").show()
        for (var i = 0; i < sections.length; i++) {
            var name = sections[i].id.split("_")[1];
            // console.log(name)
            if (section_onStart[name] != undefined) {
                section_onStart[name]();
            }
        }

         var section_current = $("#section_chat")
    }

    this.id = "section_chat";

    this.pre_enter = function (spot) {
        
        if(spot=="cover")
        {
            L.execute("start(plot,\"" + spot + "\")")
        }
        else{
            L.execute("start(plot,\"spot\",\"" + spot + "\")")
        }
        //        console.info("enter spot", spot);
        //        section.start().start();
        //        L.execute("section_start()");

        
    }
}