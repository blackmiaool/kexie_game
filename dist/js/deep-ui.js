"use strict";

var resPath = "res/deep_ui";
define(["angular-module"], function (module) {
    return module.factory('deepData', ["$rootScope", function (rsp) {
        rsp.deepPath = resPath;
        return '';
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
    }).directive("deepNormalItem", function () {
        return {
            restrict: 'A',
            compile: function compile(element, attrs) {
                var $$ = element.find.bind(element);
                element.addClass("deep-normal-item");
                $$(".deep-text").attr("ng-bind", attrs["deepNormalItem"]);
            },
            template: "<div class=\"deep-text\"></div>"
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
                var $fill = $$(".deep-fill");
                var $text = $$(".deep-text");

                function updateWidth(v) {
                    var max = $parse(attrs["deepMax"])(scope);
                    if (v == 0) {
                        $fill.hide();
                    } else {
                        $fill.show();

                        var width = (108 - 5) * v / max + 5 + "%";
                        $fill.css("width", width);
                    }

                    $text.text(v + "/" + max);
                }

                element.addClass("deep-bar");

                //                    updateWidth($parse(attrs["deepPower"])(scope));
                scope.$watch(attrs["deepPower"], updateWidth, true);
            },
            template: "                 \n                    <div class=\"deep-fill\">                        \n                    </div>\n                    <span class=\"deep-text\"></span>\n                "
        };
    }]);
});