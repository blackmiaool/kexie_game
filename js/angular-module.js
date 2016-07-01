define(["angular"], function (angular) {
    return angular.module('homeApp', ['ngAnimate'])
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