define(["angular"], function (angular) {
    return angular.module('home-app', ['ngAnimate'])
        .directive('redPanel', function () {
        return {
            restrict: 'A',
            transclude: true,
            template: `               
                <div class="red-panel-corner red-panel-corner1">
    </div>
    <div class="red-panel-corner red-panel-corner2">
    </div>
    <div class="red-panel-corner red-panel-corner3">
    </div>
    <div class="red-panel-corner red-panel-corner4">
    </div> 
                <div class="panel-content-wrap" ng-transclude="string">
                   
</div>`
        };
    });
})