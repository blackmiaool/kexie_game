"use strict";

define(["sys", "angular", "v", "common", "res", "dbg"], regeneratorRuntime.mark(function _callee(sys, angular, v, common, res, dbg) {
    var backto, scene;
    return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    scene = new sys.Scene({
                        id: "save_load",
                        dom_id: "section_save_load",
                        init: function init() {
                            angular.module('home_app').controller("save_controller", function ($scope) {

                                $scope.buttons = [];
                                for (var i = 0; i < 6; i++) {
                                    $scope.buttons[i] = {};
                                    //            $scope.buttons[i].version=sys.config.version;
                                }

                                var save_load, backto;
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
                                    local_set_obj(storage_name, $scope.buttons);
                                }
                                var save = function save(index) {
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
                                    load_record();
                                };
                                var load = function load(index) {
                                    if ($scope.buttons[index].version) {
                                        angular.element("#section_home").scope().v = $scope.buttons[index].data;
                                        v = $scope.buttons[index].data;
                                        sys.to_scene("home");
                                    }

                                    //    toSection("home")
                                };

                                function load_record() {
                                    var record = local_load_obj(storage_name);
                                    console.log(record);
                                    if (record === null) {
                                        console.log("www");
                                        save_all();
                                    }
                                    $scope.buttons = record;
                                    //            angular.element("#section_home").scope().$digest();
                                }
                                $scope.enter = function (save_load_this, backto_this) {
                                    save_load = save_load_this;
                                    backto = backto_this;
                                    if (save_load == "save") {
                                        $scope.title = "存档";
                                    } else {
                                        $scope.title = "读档";
                                    }
                                    load_record();
                                };
                                $scope.go_back = function () {
                                    sys.to_scene(backto);
                                };
                                $scope.get_btn_text = function (index) {};
                                $scope.handle = function (index) {
                                    if (save_load == "save") {
                                        save(index);
                                    } else {
                                        load(index);
                                    }
                                };
                            });
                        },
                        pre_enter: function pre_enter(save_load, backto_this) {

                            backto = backto_this;
                            var $scope = angular.element("#section_save_load").scope();

                            if (!$scope.$$phase) {
                                $scope.$apply(function ($scope) {
                                    $scope.enter(save_load, backto_this);
                                });
                            } else {
                                $scope.enter(save_load, backto_this);
                            }
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