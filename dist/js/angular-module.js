'use strict';

define(["angular"], function (angular) {
    return angular.module('home-app', ['ngAnimate']).directive('deepPanel', function () {
        return {
            restrict: 'A',
            transclude: true,
            link: function link(scope, element, attrs, ctrls, $transclude) {

                $transclude(function (clone, scope) {
                    element.append(clone);
                });
            },
            template: '               \n                <div class="deep-panel-corner deep-panel-corner1">\n    </div>\n    <div class="deep-panel-corner deep-panel-corner2">\n    </div>\n    <div class="deep-panel-corner deep-panel-corner3">\n    </div>\n    <div class="deep-panel-corner deep-panel-corner4">\n    </div>'
        };
    }).directive('deepHeader', function () {
        return {
            restrict: 'A',
            compile: function compile(element, attrs) {
                element.addClass("deep-header");
                var content = attrs["deepContent"];
                var $content = element.find(".deep-header-text");
                $content.text(attrs.deepHeader);
            },
            template: '\n                <span class="deep-header-text unselectable" ng-class="{little:selectingProductKind}"></span>'
        };
    }).filter("workPrefix", function () {
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
    });
});