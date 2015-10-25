requirejs.config({
    "baseUrl": "dist/js",
    "paths": {
        jquery:"libs/jquery.min"
    }
}); 
requirejs(["jquery","init",], function ($,init) {
    console.log("miao")
    console.log(init);
    setTimeout(function () {
        $('#buy-tabs a').click(function (e) {
            e.preventDefault(); //阻止a链接的跳转行为
            $(this).tab('show'); //显示当前选中的链接及关联的content
        })
    }, 300)
    $('#home-main-tab a').click(function (e) {
        e.preventDefault(); //阻止a链接的跳转行为
        $(this).tab('show'); //显示当前选中的链接及关联的content
    })
//    $('[data-toggle="popover"]').popover();
//    init.game_enter();
})