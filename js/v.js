define(["res", "system-common"], function (res, common) {
    var v_init = {
        prop: {
            数字:0,
            模拟:0,
            焊接:0,
            论文:0,
            声望:0,
            道德:0,
            秩序:0,
        },
        power: 8,
        powerMax:10,
        basic: {
            name: "李厷叺",
            title: "麻瓜",
            test: 0,
            money: 1000,        
            sex:"male",
            
        },
        time: {
            year: 2014,
            term: 1,
            month: 9,
            part:2,
            week: 1,
            week_day_index: 5,
            day: 1,
            period: 0,
            total_point: 3,
            total_point_today: 3,
        },
        experience: {
            OI: false,
            phy: false,
            math: false,
            axe: false
        },
        plot: {
            xuanjianghui: false,
            kexie_first: false,
        },
        amity: {},
        skill: {},
        item: {},
        device:{},
        components: {},
        character:{},
        
    };
    for(var i in res.skills){
        v_init.skill[i]={
            level:0
        }
    }
    for (var i in res.pp) {
        v_init.amity[i] = 0;
    }
    for (var i in res.items){
        v_init.item[i]={cnt:0};
    }
    for (var i in res.devices){
        v_init.device[i]={cnt:0};
    }
    var v = common.clone(v_init);

    common.setV(v);
    return v;
})