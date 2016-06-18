define(["angular"], function (angular) {
    return angular.module('home-app', ['ngAnimate'])
        .directive('redPanel', function () {
            return {
                restrict: 'A',
                transclude: true,
                link: function (scope, element, attrs, ctrls, $transclude) {

                    $transclude(function (clone, scope) {
                        element.append(clone);
                    });
                },
                template: `               
                <div class="red-panel-corner red-panel-corner1">
    </div>
    <div class="red-panel-corner red-panel-corner2">
    </div>
    <div class="red-panel-corner red-panel-corner3">
    </div>
    <div class="red-panel-corner red-panel-corner4">
    </div>`
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
            return function (obj ) {

                return Object.keys(obj).map(function (key) {
                    return obj[key];
                });
            };
        });
});