

function chenguo_create()
    chenguo=npc_create("陈过");
    chenguo.place_show["IC科协"]=0.8;

    chenguo.spot_check=function(spot)
        if spot=="IC科协" then
--            put("wwwl")
        end
    end
    chenguo.chat=function()put("chenjiongchat");end
    chenguo.first=function()
        set_current_npc(pp.chenguo);
        ts(res.ickexie1);
        th(0,pp.chenguo,0)
        local result=tm("学长你好","学长泥嚎","同学你好")

        if(result==0) then
            tc("囧",pp.chenguo);
            prop.zhixu=prop.zhixu+1;
        elseif(result==1) then
            tc("囧囧囧",pp.chenguo);
            prop.zhixu=prop.zhixu-1;
        else
            prop.shane=prop.shane-1;
        end

        tcn("你好,这里是微固学院旗下第一科协IC科协,我叫陈囧.你有什么事吗?");

        local result=tm("老子叫"..v.basic.name..",想加入IC科协","我叫"..v.basic.name..",听说这里招人","我叫"..v.basic.name..",打酱油路过")

        if result==0 or result==1 then
            if v.time.month<10 then
                tcn("囧,你是微固学院的吗?")
                local result=tm("是的","不是","你猜")
                if result ==0 then
                    tcn("好,十月初科协会招新,你到时候关注一下就好.")
                elseif result==1 then
                    tcn("那你是哪个学院的啊?")
                    local result=tm("电工学院","通信学院","物电学院","数学学院","马克思学院")
                    if result<3 then
                        tcn("我听说你们学院有科协啊.你去找你的学长打听一下吧.")
                    else
                        tcn("好吧,十月初科协会招新,你到时候关注一下就好.")
                    end

                else
                    prop.zhixu=prop.zhixu-1;
                    tcn("囧,别闹...")
                    tcn("十月初科协会招新,你到时候关注一下就好.")
                    return 
                end
            else
                tcn("囧,科协招新已经结束了啊");
                tcy("....");
                return 
            end
        else
            tcn("囧...");
            tcn("总之,不要乱来就行了");

        -- elseif result==1 then
        --     tcc("囧...")       
        --     repeat
        --         local result=tm("关于IC科协","关于你","关于这个房间");
        --         if result==0 then
        --             tcn("说起IC科协，这可真是个大话题。");
        --         elseif result==1 then

        --         elseif result==2 then

        --         else

        --         end
        --     until false
        -- else

        end 
    end
end
chenguo_create();
print("chenjiongtest",npc["陈过"].first)

