"use strict";

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

define(["sys", "angular", "v", "common", "res", "dbg"], regeneratorRuntime.mark(function _callee(sys, angular, v, common, res, dbg) {
    var backto, scene;
    return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    scene = new sys.Scene({
                        id: "save",
                        dom_id: "scene_save",
                        init: function init() {
                            angular.module('home_app').controller("save_controller", ["$rootScope", "$scope", function ($rootScope, $scope) {

                                $scope.buttons = [];
                                $rootScope.$on("save_pre_enter", function (args, params) {
                                    console.log("enter");

                                    var _params = _slicedToArray(params, 2);

                                    var save_this = _params[0];
                                    var backto_this = _params[1];

                                    save = save_this;
                                    backto = backto_this;
                                    if (save == "save") {
                                        $scope.title = "存档";
                                    } else {

                                        $scope.title = "读档";
                                    }

                                    load_records();

                                    if (!$scope.$$phase) $scope.$digest();
                                });
                                //                setInterval(()=>{console.log($scope.buttons)},1000)
                                for (var i = 0; i < 6; i++) {
                                    $scope.buttons[i] = {};
                                }

                                var save, backto;
                                var storage_name = "kexiegamesave";

                                function getProgressName(index) {
                                    return "progress" + index;
                                }

                                function getSaveName(index) {
                                    return "Save" + index;
                                }

                                function getSaveText(index) {
                                    return local_load(getSaveName(index));
                                }

                                function saveSaveText(index) {
                                    var time = new Date();
                                    time = time.toLocaleString();
                                    local_set(getSaveName(index), time);
                                    //console.log(local_load(getSaveName(index)))
                                    //    $(this).text(time)
                                }

                                function save_all() {
                                    common.local.set(storage_name, $scope.buttons);
                                }
                                var save_record = function save_record(index) {
                                    if ($scope.buttons[index].version) {
                                        if (confirm("是否确定覆盖存档？")) {} else {
                                            return;
                                        }
                                    }
                                    var date = new Date();
                                    var time_string = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
                                    $scope.buttons[index] = {
                                        version: sys.config.version,
                                        data: v,
                                        title: time_string

                                    };
                                    save_all();
                                    load_records();
                                };
                                var load_record = function load_record(index) {
                                    if ($scope.buttons[index].version) {
                                        angular.element("#scene_home").scope().v = $scope.buttons[index].data;
                                        v = $scope.buttons[index].data;
                                        sys.to_scene("home");
                                    }

                                    //    toscene("home")
                                };

                                function load_records() {
                                    var record = common.local.get(storage_name);

                                    if (!record) {
                                        save_all();
                                    }
                                    $scope.buttons = record;
                                    //            angular.element("#scene_home").scope().$digest();
                                }

                                $scope.go_back = function () {

                                    sys.to_scene(backto ? backto : "home");
                                };
                                $scope.get_btn_text = function (index) {};
                                $scope.handle = function (index) {
                                    if (save == "save") {
                                        save_record(index);
                                    } else {
                                        load_record(index);
                                    }
                                };
                            }]);
                        },
                        enter: function enter() {}
                    });

                case 1:
                case "end":
                    return _context.stop();
            }
        }
    }, _callee, this);
}));