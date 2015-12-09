
    ts(res.img.uestc);
    tc(v.time.year + "年，9月 成都 郫县 电子神技大学校门口", 0, plot.gap.slow);
    tc("你望着“电子神技大学”这五个字，心灰意冷。");
    tc("你是一名大一新生，本该考上桃浦二大的你，高考时发挥失常，不得已而在志愿书上填报了神大的物理电子学院。");
    tc("“当初如果大姨夫没来该多好！”你又一次地感叹道。");
    tc("这时，你决定");
    var result = tm("勇敢走入校门","扭头就走");
    if (result == 1) {
        ts(res.gaozhongketang)
        tc("你想了想觉得不甘心，于是回到高中复读。")
        tc("结果。。。")
        console.log(rand(1, 10));
        if (rand(1, 10) > 1) {
            ts(res.qinghuadaxue);
            tc("经过不懈的努力，你考入了桃浦二大!<br/>完美结局【未曾开始的结束】达成!<br/>难度：1");
            game_over = true;
            sys.to_scene("cover")
            ts(res.black,1);
            return "cover";
        }
        else{
            ts(res.luobang)
            tc("你又一次落榜了。")
            tc("无奈之下，你再一次填报了神大。")
            v.time.year = 1+v.time.year            
            return false;
        }
    }
    tc("权衡了一下利弊，你决定还是顺其自然比较好。于是你定了定神，迈步走进了神大。");
