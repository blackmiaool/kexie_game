"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

define(["require", "system-scene", "system-sys", "angular", "system-dbg", "z", "res", "angular-module", "plot", "system-common"], function (require, scene, sys, angular, dbg, z, res, module, plot, common) {
    var exports = {};
    var sceneId = "bigmap";
    var $dom = scene.getScene(sceneId);

    var sceneThis = {
        id: sceneId,
        preEnter: preEnter,
        $dom: $dom,
        init: init
    };
    var $$ = $dom.find.bind($dom);

    //var scene = new sys.Scene({
    //    id: "bigmap",
    //    dom_id: "scene_bigmap",
    //    init: function () {
    //        $("#scene_bigmap img").css("opacity", "1")
    //    },
    //    pre_enter: function () {
    //        $("#scene_bigmap img").animate({
    //            opacity: "0.7"
    //        });
    //    },
    //    enter: function () {}
    //})
    function init() {
        $dom.css("opacity", "1");
    }

    function preEnter() {
        $dom.css("opacity", "0.7");
    }

    var spots = _defineProperty({
        总会: {
            class: "btn-danger",
            left: "360px",
            top: "223px",
            icon: "queen",
            bg: res.black
        },
        总协: {
            class: "btn-warning",
            left: "440px",
            top: "223px",
            icon: "king",
            bg: res.black
        },
        物电科协: {
            class: "btn-weird",
            left: "400px",
            top: "291px",
            icon: "bishop",
            bg: res.kexie2
        },
        IC科协: {
            class: "btn-success",
            left: "400px",
            top: "180px",
            icon: "pawn",
            bg: res.ickexie1
        },
        学生活动中心: {
            class: "btn-primary",
            left: "250px",
            top: "187px",
            icon: "phone-alt",
            bg: res.huodongzhongxin
        },
        品学楼: {
            class: "btn-warning",
            left: "530px",
            top: "280px",
            icon: "blackboard",
            bg: res.jiaoshi
        },
        图书馆: {
            class: "btn-default",
            left: "310px",
            top: "350px",
            icon: "book",
            bg: res.tushuguan
        },
        宿舍: {
            class: "btn-danger",
            left: "464px",
            top: "35px",
            icon: "bed",
            bg: res.sushe
        }
    }, "宿舍", {
        class: "btn-danger",
        left: "464px",
        top: "35px",
        icon: "bed",
        bg: res.sushe
    });

    module.controller("BigmapController", ["$scope", "$rootScope", function (sp, rsp) {
        rsp.$on("bigmap-enter", function (e, data) {
            sp.active = true;
        });
        rsp.$on("bigmap-leave", function (e, data) {
            sp.active = false;
        });

        function enter(spot) {
            scene.go("chat", spot);
        }

        function goBack() {
            scene.go("home");
        }
        _.extend(sp, {
            active: false,
            enter: enter,
            goBack: goBack,
            spots: spots
        });
    }]);

    scene.register(sceneThis);
    return exports;
});