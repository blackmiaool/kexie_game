'use strict';

define(["angular"], function (angular) {
    return angular.module('home-app', ['ngAnimate']).directive('redPanel', function () {
        return {
            restrict: 'A',
            transclude: true,
            template: '               \n                <div class="red-panel-corner red-panel-corner1">\n    </div>\n    <div class="red-panel-corner red-panel-corner2">\n    </div>\n    <div class="red-panel-corner red-panel-corner3">\n    </div>\n    <div class="red-panel-corner red-panel-corner4">\n    </div> \n                <div class="panel-content-wrap" ng-transclude="string">\n                   \n</div>'
        };
    });
});