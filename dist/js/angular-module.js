"use strict";

define(["angular", "system-common"], function (angular, common) {
    return angular.module('homeApp', ['ngAnimate']).filter("workPrefix", function () {
        return function (work) {
            var workPrefix = "";
            if (work.prefix.feature) workPrefix += work.prefix.feature + "之";
            if (work.prefix.basic) workPrefix += work.prefix.basic + "的";
            workPrefix += work.name;
            return workPrefix;
        };
    }).filter('toArray', function () {
        return function (obj) {

            return Object.keys(obj).map(function (key) {
                return obj[key];
            });
        };
    }).directive('hoverCard', function () {
        return {
            restrict: 'A',
            compile: function compile(element, attrs) {
                element.attr("ng-show", "hoveringKind=='" + attrs.hoverCard + "'");
            }
        };
    }).directive('hoverItem', ["$parse", "$rootScope", function ($parse, rsp) {
        var $sceneWrap = $(".scene-wrap");
        return {
            restrict: 'A',
            compile: function compile(element, attrs) {
                var $target = $("[hover-card=\"" + attrs["hoverKind"] + "\"]");

                //                    element.on("mousemove", function (e) {
                //                        console.log(234)
                //                        console.log(e);
                //                    })

                return function (scope, element) {
                    var value = $(element).attr("hover-item");
                    var kind = $(element).attr("hover-kind");

                    element.on("mousemove", function (event) {
                        var offset1 = $(this).offset();
                        var offset2 = $sceneWrap.offset();
                        var x = offset1.left + event.offsetX - offset2.left;
                        var y = offset1.top + event.offsetY - offset2.top;

                        if (x + $target.width() + 40 < common.sx) {
                            $target.css("left", x + 40 + "px");
                            $target.transform("translateX(0)");
                        } else {
                            $target.css("left", x + "px");
                            $target.transform("translateX(-100%)");
                        }
                        $target.css("top", y + 2 + "px");
                    });

                    element.on("mouseleave", function (event) {

                        rsp.clearHovering();
                        rsp.$digest();
                    });

                    element.on("mouseenter", function (event) {
                        var hovering = $parse(value)(scope);
                        rsp.hovering = hovering;
                        rsp.hoveringKind = kind;
                        rsp.$digest();
                    });
                };
            }

        };
    }]);
});