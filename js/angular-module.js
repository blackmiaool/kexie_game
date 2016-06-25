define(["angular"], function (angular) {
    return angular.module('home-app', ['ngAnimate'])
        .directive('deepPanel', function () {
            return {
                restrict: 'A',
                transclude: true,
                link: function (scope, element, attrs, ctrls, $transclude) {

                    $transclude(function (clone, scope) {
                        element.append(clone);
                    });
                },
                template: `               
                <div class="deep-panel-corner deep-panel-corner1">
    </div>
    <div class="deep-panel-corner deep-panel-corner2">
    </div>
    <div class="deep-panel-corner deep-panel-corner3">
    </div>
    <div class="deep-panel-corner deep-panel-corner4">
    </div>`
            };
        })
        .directive('deepHeader', function () {
            return {
                restrict: 'A',
                compile: function (element, attrs) {
                    element.addClass("deep-header");
                    let content = attrs["deepContent"];
                    let $content=element.find(".deep-header-text");
                    $content.text(attrs.deepHeader);
                },
                template: `
                <span class="deep-header-text unselectable" ng-class="{little:selectingProductKind}"></span>`
            };
        })
        .directive('deepItemIcon', function () {
            return {
                restrict: 'A',
                compile: function (element, attrs) {
                    element.addClass("deep-header");
                    let content = attrs["deepContent"];
                    let $content=element.find(".deep-header-text");
                    $content.text(attrs.deepHeader);
                },
                template: `
                <span class="deep-header-text unselectable" ng-class="{little:selectingProductKind}"></span>`
            };
        })
        .filter("workPrefix", function () {
            return function (work) {
                let workPrefix = "";
                if (work.prefix.feature)
                    workPrefix += work.prefix.feature + "之";
                if (work.prefix.basic)
                    workPrefix += work.prefix.basic + "的";
                workPrefix += work.name;
                return workPrefix;
            }
        })
        .filter('toArray', function () {
            return function (obj) {

                return Object.keys(obj).map(function (key) {
                    return obj[key];
                });
            };
        });
});