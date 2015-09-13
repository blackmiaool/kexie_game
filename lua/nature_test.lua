p.nature_test=function()    
    ts(res.tushuguanyejing)
    tc("入学一段时间后，你对神大的陌生感逐渐消失。望着暮色中的图书馆，你陷入了沉思。")
    tc("你接下来的选择会影响你的属性，你决定")
    local result = tm("使用默认属性（不推荐）", "开始进行属性测试");
    if (result == 1) then
        tc("首先请选择你的名字")
        local result,value = tm({
            type="input_with_btn",
            data= {
                placeholder= "手动输入姓名（昵称）",
                btn= "确定",
                width= "25%"
            }
        }, "使用作者指定姓名：李厷叺", "系统随机生成姓名")
        print(1,result);
        print(2,type(result))

        if result==1 then                
            v.basic.name = "李厷叺";
        elseif result==0 then
            v.basic.name =value;
        else

            v.basic.name = "张龙";
        end                            



        tc("你的人生意义是")
        local result = tm("发展科技", "及时行乐", "繁衍")
        if result==0 then
            v.basic.study_abt = v.basic.study_abt+0.2
        elseif result==1 then
            v.basic.money_abt =v.basic.money_abt+ 0.2
        else                
            v.basic.work_abt =v.basic.work_abt+ 0.2            
        end
        tc("这三样东西，如果要你抛弃一样，你会选择")
        local result = tm("金钱", "智商", "意志力")
        if result==0 then
            v.basic.money_abt =v.basic.money_abt- 0.1
        elseif result==1 then
            v.basic.study_abt =v.basic.study_abt- 0.1
        else
            v.basic.work_abt =v.basic.work_abt- 0.1           
        end
        tc("在大学里，你觉得这二者哪个更重要？")
        local result = tm("兄弟（姐妹）", "情人（配偶）")
        if result==1 then
            v.basic.work_abt = v.basic.work_abt-0.1
        end
        tc("你高中除了学习高考知识，还做过")
        local result = tm("OI", "物竞", "数竞", "打工或者创业赚钱", "没做过别的，专心高考")
        if result==0 then
            v.experience.OI = true;
        elseif result==1 then
            v.experience.phy = true;
        elseif result==2 then
            v.experience.math = true;
        elseif result==3 then
            v.basic.money =v.basic.money+ 4000;
        elseif result==4 then
            v.basic.work_abt =v.basic.work_abt + 0.1
            --// tc("真是诚实的孩子，三把斧头都归你了。")
            --// tmood(res.axe)
        end
        tc("你的性别")
        local result = tm("男", "女")
        if result==1 then
            v.basic.work_abt =v.basic.work_abt- 0.1;
            v.basic.female = true;

        end
        tc("测试结束。")
    end
--    tc("伸了伸懒腰，你回到了宿舍。")
--    sys:to_scene("home");
end
 