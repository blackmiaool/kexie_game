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
        basic: {
            name: "李厷叺",
            title: "麻瓜",
            test: 0,
            money: 1000,        
            sex:"male",
            
        },
        study: {
            arrange: [],
        },
        state: {
            fatigue: 30,
            skill_point: 2,
            skill_progress: 30,
        },
        abality: {
            rest_eff: 10,
        },
        make: {
            target: false,
            progress: 107,
            innovate: 54,

        },
        time: {
            year: 2014,
            term: 1,
            month: 9,
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
        skill: {
            digital_circuit: 0,
        },
        item: {

        },
        components: {},
        left_points: 10,
    }
    for (var i in res.pp) {
        v_init.amity[i] = 0;
    }
    for (var i = 0; i < 8; i++) {
        v_init.study.arrange[i] = [];
    }
    
    var v = common.clone(v_init);
    var components = [
                    "skills",
                    "combines",
                    "items",
                    "quest",
                    "courses",
                ];
    for (var i in components) {
        v[components[i]] = window[components[i]];
    }
    //    v.get_left_points=()=> {
    //        var retval = 0;
    //        for (var i = v.time.period; i < v.time.total_point_today; i++) {
    //            if (!v.study.arrange[v.time.week_day_index][res.the_period_of_day[i]]) {
    //                retval++;
    //            }
    //        }
    //        return retval;
    //    }
    return v;
})