"use strict";

define(["res", "system-common"], function (res, common) {
    var z_init = {
        prop: {
            数字: 0,
            模拟: 0,
            焊接: 0,
            论文: 0,
            声望: 0,
            道德: 0,
            秩序: 0
        },
        uid: 0, //unique id
        power: 8,
        powerMax: 10,
        basic: {
            name: "李厷叺",
            title: "麻瓜",
            test: 0,
            money: 1000,
            sex: "male"
        },
        time: {
            year: 2014,
            term: 1,
            month: 9,
            round: 2,
            week: 1,
            week_day_index: 5,
            day: 1,
            period: 0,
            total_point: 3,
            total_point_today: 3
        },
        experience: {
            OI: false,
            phy: false,
            math: false,
            axe: false
        },
        plot: {
            xuanjianghui: false,
            kexie_first: false
        },
        amity: {},
        skill: {},
        item: {},
        device: {},
        components: {},
        character: {},
        game: {
            move: 1,
            increase: 1.2
        }

    };

    for (var i in res.skills) {
        z_init.skill[i] = {
            level: 0
        };
    }
    for (var i in res.pp) {
        z_init.amity[i] = 0;
    }
    for (var i in res.items) {
        z_init.item[i] = {
            cnt: 0
        };
    }
    for (var i in res.devices) {
        z_init.device[i] = {
            cnt: 0
        };
    }
    var z = common.clone(z_init);
    common.setZ(z);
    var works = {
        硬件流水灯: {
            1: {
                id: common.getUid(),
                name: "硬件流水灯",
                prefix: {
                    feature: "幸运",
                    basic: "未完成"
                },
                process: {
                    basic: 3,
                    basicMax: 10,
                    capability: 0,
                    capabilityMax: 5,
                    innovation: 0,
                    innovationMax: 3,
                    stability: 0,
                    stabilityMax: 10
                },
                phase: "making",
                props: [0, 100, 0],
                property: [{
                    kind: "lucky",
                    value: "3"
                }]
            }
        }
    };
    z.work = works;
    return z;
});