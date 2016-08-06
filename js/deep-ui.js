let resPath = "res/deep_ui"
define(["angular-module"], function (module) {
    return module
        .factory('deepData', ["$rootScope", function (rsp) {
            rsp.deepPath = resPath;
            return '';
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
        .directive("deepNormalItem", function () {
            return {
                restrict: 'A',
                compile: function (element, attrs) {
                    let $$ = element.find.bind(element);
                    element.addClass("deep-normal-item");
                    $$(".deep-text").attr("ng-bind", attrs["deepNormalItem"]);
                },
                template: `<div class="deep-text"></div>`
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
                compile: function (element, attrs) {
                    let $$ = element.find.bind(element);
                    let text = attrs.deepText;
                    let $text = $$(".deep-text");
                    if (text) {
                        $text.html(text);
                    }
                    return function (scope, element, attrs) {
                        let $$ = element.find.bind(element);
                        let $fill = $$(".deep-fill");
                        let $text = $$(".deep-text");


                        function updateWidth(v) {
                            let max = $parse(attrs["deepMax"])(scope);
                            if (v == 0&&false) {
                                $fill.hide();
                            } else {
                                $fill.show();


                                let width = (100 - 5) * v / max + 5 + "%";
                                $fill.css("width", width);

                            }
                            if (!text)
                                $text.text(v + "/" + max);

                        }

                        element.addClass("deep-bar");
                        

                        scope.$watch(attrs["deepPower"], updateWidth, true);
                    }
                },
                template: `                 
                    <div class="deep-fill">                        
                    </div>
                    <span class="deep-text"></span>
                `
            };
        }])
});