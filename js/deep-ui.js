let resPath = "res/deep_ui"
define(["angular-module"], function (module) {
    return module
        .factory('deepData', ["$rootScope", function (rsp) {
            rsp.deepPath = resPath;
            return '';
        }])
        .directive('deepPanel', ["deepData", function () {
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
        }])
        .directive('deepHeader', function () {
            return {
                restrict: 'A',
                compile: function (element, attrs) {
                    element.addClass("deep-header");
                    let content = attrs["deepContent"];
                    let $content = element.find(".deep-header-text");
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
                    let cnt = attrs["deepCnt"];
                    let name = attrs["deepName"];
                    let judge = attrs["deepJudge"];
                    if (cnt) {
                        element.addClass("deep-item-icon-with-cnt");
                        let $cnt = element.find(".deep-cnt");
                        $cnt.text(cnt)
                        if (judge) {
                            $cnt.attr("ng-class", `{"deep-danger":!(${judge}),"deep-success":${judge}}`)
                        }
                    } else {
                        element.addClass("deep-item-icon");
                    }

                    if (name) {
                        element.find(".deep-name").text(name)
                    }
                    //                    console.log(attrs.deepItemIcon);
                    element.find("img").attr("ng-src", attrs.deepItemIcon);
                },
                template: `                 
                    <img draggable="false" class="skill-icon">
                    <span class="deep-cnt"></span>
                    <span class="deep-name"></span>
                `
            };
        })
        .directive('deepSelect', function () {
            return {
                restrict: 'A',
                compile: function (element, attrs) {
                    //                    console.log(attrs);
                    let model = attrs["deepSelect"];
                    element.find("input").attr("ng-model", model);
                    element.addClass("deep-select").addClass("unselectable");
                },
                transclude: true,
                template: `                 
                    <input type="checkbox"><span class="deep-checkbox"></span><span class="ng-transclude"></span>
                `
            };
        })
        .directive('deepDblineHeader', function () {
            return {
                restrict: 'A',
                compile: function (element, attrs) {
                    //                    console.log(attrs);
                    let $$ = element.find.bind(element);
                    let text = attrs["deepDblineHeader"];
                    $$(".deep-content").text(text);
                },
                template: `                 
                    <span class="deep-content"></span>
                `
            };
        })
        .directive('deepPower', ["$parse", function ($parse) {
            return {
                restrict: 'A',
                link: function (scope, element, attrs) {
                    let $$ = element.find.bind(element);
                    let $fill = $$(".deep-power-fill");

                    function updateWidth(v) {
                        if (v == 0) {
                            $fill.hide();
                        } else {
                            $fill.show();
                            let max = $parse(attrs["deepPowerMax"])(scope);
                            console.log("v", v, max);
                            let width = (108 - 5) * v / max + 5 + "%";
                            $fill.css("width", width);
                        }

                    }

                    element.addClass("deep-power");
                    console.log(attrs);
                    //                    updateWidth($parse(attrs["deepPower"])(scope));
                    scope.$watch(attrs["deepPower"], updateWidth, true);
                },
                template: `                 
                    <span class="deep-power-fill"></span>
                `
            };
        }])
});