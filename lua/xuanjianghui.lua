p.xuanjianghui=function() 
    v.plot.xuanjianghui = true;
    ts(res.kexiezhaoxin)
    set_current_npc(pp.daijun);
    tc("这一日，你发现各大科协在进行招新，你决定")
    local result = tm("加入物电科协", "加入微固科协（待施工）", "加入电工科协（待施工）", "加入总会（待施工）")
    if (result > 0) then
        ts(res.baozou_zhuakuang)
        tc("都说了在施工，你还点。。。")
        tc("跳转进入物电科协剧情。。。")
    end
    tc("由于你考入的是「物电学院」，你决定加入「物电科协」。")
    ts(res.black)
    tc("十天后，物电科协宣讲会。", 0, gap.slow)

    ts(res.jiaoshi)
    tc("教室里挤满了想加入科协的同学，一片嘈杂。")
    tc("坐在教室一隅的你，决定")


    local result = tm("和旁边的同学搭讪", "坐等宣讲会开始")

    if (result == 0) then
        tc("你左边坐着一个身材一般的男生，正在拨弄耳机。右边则坐着一个帅哥，正在看书，好像是什么团。你决定")
        local result = tm("向左边的同学搭讪", "向右边的同学搭讪")
        if (result == 0) then
            th(0, pp.lizhao, 0)
            tc("同学，你在做什么啊？", pp.you)
            tc("我在测试耳机。新买的这个手机，音质真是不错～", pp.lizhao)
            local result = tm("嗯！索尼大法好！", "这是中兴吧？")
            if (result == 0) then
                tc("嘿嘿，同道中人～", pp.lizhao)
                v.amity.lizhao =v.amity.lizhao+ 1;
            else 
                tc("。。。", pp.lizhao)
            end
        else 
            th(0, pp.gaoxiangchen, 0)
            tc("同学，你在看什么书啊？", pp.you)
            tc("少儿不宜，别问了～", pp.gaoxiangchen)
            local result = tm("据说最近上映了这本书的3D电影啊", "你也喜欢韩寒啊？")
            if (result == 0) then
                tc("矮呦～同道中人", pp.gaoxiangchen)
                v.amity.gaoxiangchen =v.amity.gaoxiangchen + 1;
            else 
                tc("韩你妹！别烦我！", pp.gaoxiangchen)
            end


        end
        th(0, 0, 0)
    end
    tc("几分钟后。。。")
    tc("一个学长模样的人走上讲台。")
    th(0, 0, pp.daijun)
    th(0, pp.daijun, 0)
    tc("大家好，我是物电科协的会长戴俊。", pp.daijun)
    local result=tm("认真听讲","埋头睡觉")
    if result==0 then
        tcc("今天主要为大家介绍神大与科协的一些情况。", pp.daijun)
        tcc("首先，电子神大，顾名思义，是一所以研究电子技术为主的大学。因此，我们学校有很多的电子设计比赛。参加电子设计比赛，是我们科协存在的主要目的之一。")
        tcc("电子设计比赛一般由学院或学校教务处或教育部发起，由某个学院承办。目前电子设计比赛是每个月一次，比赛一般有一、二、三等奖，获奖后可以得到奖金或奖品及获奖证书。")
        tcc("获奖证书可以用来增加素质分和创新学分，还可以找工作时用来装X，奖金可以用来购买元器件及仪器，还可以用来购买一些小道具。奖品则可以用来提高自身技术。")
        tcc("参加电子比赛一般由三人组队，学院间自由组队。但是由于一开始各学院间交流较少，所以一般选择本院学生进行组队。后期由于认识的人多了，选择的余地会更大一些。")
        tcc("对于参加比赛，科协能够提供给你们的有器件、仪器、学长三种资源。器件方面，由于我们是小科协，比较穷，没法给你们提供太多东西，主要还是要自己去买。")
        tcc("买器件有三种途径：一是城隍庙，在沙河，需要乘坐校车去。缺点是购买数量少的话，价格会非常贵。优点则是可以种类较多，并且可以快速地购买到需要的元件。")
        tcc("二是德律元件，是一个学长开的元件店。缺点是价格略贵，种类较少，优点则是距离较近，就在沙河，可以节省路费，并且可以免费享受咨询服务。")
        tcc("三是网购，优点是便宜，缺点是耗时较长。")
        tcc("除了以上的三个地点之外，还可以找微固的陈囧学长购买一些小道具。")
        tcc("仪器方面，目前你们主要需要烙铁，科协则可以为你们提供示波器和函数发生器以及电源。不过由于我们是小科协，所以仪器数量较少，人多时工作效率可能会下降。")
        
    else
        
        ts(res.black);
        th(0,0,0);
        ts(res.jiaoshi)
        th(0,pp.daijun,0);
        tc("一觉醒来...会长还在讲...");
    end
    

    tcc("学长方面，我们科协目前有12级学长5人，13级8人。经常在科协混的有。。。")
    th(0, pp.chenguo, 0)
    tc(pp.chenguo.name .. "学长，独臂程序员，擅长嵌入式开发。----"..pp.daijun.name)

    th(0, pp.zhangfai, 0)
    tc(pp.zhangfai.name .. "学长，人赢典范，喜欢涉猎电子设计所有相关领域，特别是FPGA方面----"..pp.daijun.name)

    th(0, pp.tanjinchuan, 0)
    tc("谭劲船，擅长模拟电路设计。----"..pp.daijun.name)

    th(0, pp.tanchengzi, 0)
    tc("谭橙子，擅长嵌入式开发。----"..pp.daijun.name)

    th(0, pp.daijun, 0)
    tcn("最后是我，擅长模拟电路设计。")

    

    tcn("比赛期间你们可以向学长寻求帮助。另外，有的比赛还可以和学长组队。")
    tcn("接下来是科协投名状时间。")
    tcn("选择模拟电路方向的同学用7805做一个5V电源。\n选择数字电路方向的同学用555做一个流水灯。\n你决定选择（重要选项）")


    local result = tm("数字", "模拟", "兼修")
    if (result == 0) then
        v.basic.way = 0;
    elseif (result == 1) then 
        v.basic.way = 1;
    else 
        v.basic.way = 2;
    end
    tcn("宣讲会到此结束，大家各回各家各找各妈吧~")
    th(0, 0, 0)
    tc("科协的招新宣讲会结束了，你决定")
    local result = tm("跟着会长去科协参观", "回宿舍咯")
    if (result == 0) then 
        --第一次进入科协
        p.kexie_first();
    else 
--        sys:to_scene("home")
        return exit()
    end
end
