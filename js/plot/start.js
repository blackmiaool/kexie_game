ts(res.img.uestc);
tc(v.time.year + "年，9月 成都 郫县 电子神技大学校门口", 0, gap.slow);
tc("你望着“电子神技大学”这五个字，心灰意冷。");
tc("你是一名大一新生，本该考上TOP2的你，高考时发挥失常，不得已而在志愿书上填报了神大。");
tc("“如果当初没做错那两道题该多好！”你又一次地感叹道。");
tc("这时，你决定");
var result = tm("勇敢走入校门", "扭头就走");

if (result == 1) {
    ts(res.img.gaozhongketang)
    tc("你想了想觉得不甘心，于是回到高中复读。")
    tc("结果。。。")
    console.log(plot.rand(1, 10));
    if (plot.rand(1, 10) > 1) {
        ts(res.img.qinghuadaxue);
        tc("经过不懈的努力，你考入了TOP2!<br/>完美结局【未曾开始的结束】达成!<br/>难度：1");
        plot.game_over = true;

        ts(res.img.black, 1);
        setTimeout(function () {
            plot_cb("cover")
        });
        return;
    } else {
        ts(res.img.luobang);
        tc("你又一次落榜了。");
        tc("无奈之下，你再一次填报了神大。");
        v.time.year++;
        setTimeout(function () {
            plot_cb("again")
        });
        return;
    }
} else {
    tc("权衡了一下利弊，你决定逆来顺受，于是你迈步走进了神大。");
}