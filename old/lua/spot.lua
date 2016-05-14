spot={};
function spot_create(name,text,left,top,icon,default_bg)
	local a={};
    jjj:spot_create(name,text,left,top,icon,default_bg);
    spot[name]=a;
    spot[name].default_bg=default_bg;
	return a;
end


function zonghui_create()
    local a=spot_create("总会","btn-danger","360px","223px","queen",res.black);
    a.type="kexie";
    return a;
end
zonghui_create();


function zongxie_create()
    local a=spot_create("总协","btn-warning","440px","223px","king",res.black);
    a.type="kexie";
    return a;
end
zongxie_create();


function wudiankexie_create()
    local a=spot_create("物电科协","btn-primary","400px","260px","bishop",res.kexie2);
    a.type="kexie";
    return a;
end
wudiankexie_create();

function ICkexie_create()
    local a=spot_create("IC科协","btn-success","400px","180px","pawn",res.ickexie1);
    a.type="kexie";
    return a;
end
ICkexie_create();

function xueshenghuodongzhongxin_create()
    local a=spot_create("学生活动中心","btn-primary","250px","187px","phone-alt",res.huodongzhongxin);
    a.type="activity";
    return a;
end
xueshenghuodongzhongxin_create();


function pinxuelou_create()
    local a=spot_create("品学楼","btn-warning","530px","280px","blackboard",res.jiaoshi);
    a.type="work";
    return a;
end
pinxuelou_create();


function tushuguan_create()
    local a=spot_create("图书馆","btn-default","310px","350px","book",res.tushuguan);
    a.type="library";
    return a;
end
tushuguan_create();


function sushe_create()
    local a=spot_create("宿舍","btn-danger","464px","35px","bed",res.sushe);
    a.type="home";
    return a;
end
sushe_create();




