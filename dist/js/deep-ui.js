"use strict";

var resPath = "res/deep_ui";
define(["angular-module"], function (module) {
    return module.factory('deepData', ["$rootScope", function (rsp) {
        rsp.deepPath = resPath;
        return '';
    }]).directive('deepPanel', ["deepData", function () {
        return {
            restrict: 'A',
            transclude: true,
            link: function link(scope, element, attrs, ctrls, $transclude) {

                $transclude(function (clone, scope) {
                    element.append(clone);
                });
            },
            template: "               \n                <div class=\"deep-panel-corner deep-panel-corner1\">\n    </div>\n    <div class=\"deep-panel-corner deep-panel-corner2\">\n    </div>\n    <div class=\"deep-panel-corner deep-panel-corner3\">\n    </div>\n    <div class=\"deep-panel-corner deep-panel-corner4\">\n    </div>"
        };
    }]).directive('deepHeader', function () {
        return {
            restrict: 'A',
            compile: function compile(element, attrs) {
                element.addClass("deep-header");
                var content = attrs["deepContent"];
                var $content = element.find(".deep-header-text");
                $content.text(attrs.deepHeader);
            },
            template: "\n                <span class=\"deep-header-text unselectable\" ng-class=\"{little:selectingProductKind}\"></span>"
        };
    }).directive('deepItemIcon', function () {
        return {
            restrict: 'A',
            compile: function compile(element, attrs) {
                var cnt = attrs["deepCnt"];
                var name = attrs["deepName"];
                var judge = attrs["deepJudge"];
                if (cnt) {
                    element.addClass("deep-item-icon-with-cnt");
                    var $cnt = element.find(".deep-cnt");
                    $cnt.text(cnt);
                    if (judge) {
                        $cnt.attr("ng-class", "{\"deep-danger\":!(" + judge + "),\"deep-success\":" + judge + "}");
                    }
                } else {
                    element.addClass("deep-item-icon");
                }

                if (name) {
                    element.find(".deep-name").text(name);
                }
                //                    console.log(attrs.deepItemIcon);
                element.find("img").attr("ng-src", attrs.deepItemIcon);
            },
            template: "                 \n                    <img draggable=\"false\" class=\"skill-icon\">\n                    <span class=\"deep-cnt\"></span>\n                    <span class=\"deep-name\"></span>\n                "
        };
    }).directive('deepSelect', function () {
        return {
            restrict: 'A',
            compile: function compile(element, attrs) {
                //                    console.log(attrs);
                var model = attrs["deepSelect"];
                element.find("input").attr("ng-model", model);
                element.addClass("deep-select").addClass("unselectable");
            },
            transclude: true,
            template: "                 \n                    <input type=\"checkbox\"><span class=\"deep-checkbox\"></span><span class=\"ng-transclude\"></span>\n                "
        };
    }).directive('deepDblineHeader', function () {
        return {
            restrict: 'A',
            compile: function compile(element, attrs) {
                //                    console.log(attrs);
                var $$ = element.find.bind(element);
                var text = attrs["deepDblineHeader"];
                $$(".deep-content").text(text);
            },
            template: "                 \n                    <span class=\"deep-content\"></span>\n                "
        };
    }).directive('deepPower', ["$parse", function ($parse) {
        return {
            restrict: 'A',
            link: function link(scope, element, attrs) {
                var $$ = element.find.bind(element);
                var $fill = $$(".deep-power-fill");

                function updateWidth(v) {
                    if (v == 0) {
                        $fill.hide();
                    } else {
                        $fill.show();
                        var max = $parse(attrs["deepPowerMax"])(scope);
                        console.log("v", v, max);
                        var width = (108 - 5) * v / max + 5 + "%";
                        $fill.css("width", width);
                    }
                }

                element.addClass("deep-power");
                console.log(attrs);
                //                    updateWidth($parse(attrs["deepPower"])(scope));
                scope.$watch(attrs["deepPower"], updateWidth, true);
            },
            template: "                 \n                    <span class=\"deep-power-fill\"></span>\n                "
        };
    }]);
});