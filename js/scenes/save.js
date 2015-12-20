var backto;
var scene = new sys.Scene({
    id: "save",
    dom_id: "scene_save",
    init: function () {
        angular.module('home_app')
            .controller("save_controller", ["$rootScope", "$scope", function ($rootScope, $scope) {

                $scope.buttons = [];
                $rootScope.$on("save_pre_enter", (args, params) => {
                    console.log("enter");
             
                    let [save_this, backto_this] = params;
                    save = save_this;
                    backto = backto_this;
                    if (save == "save") {
                        $scope.title = "存档";
                    } else {
                        
                        $scope.title = "读档";
                    }
                    
                    load_records();
                    
                    if(!$scope.$$phase)
                        $scope.$digest();

                })
                setInterval(()=>{console.log($scope.buttons)},1000)
                for (var i = 0; i < 6; i++) {
                    $scope.buttons[i] = {}
                }

                var save, backto;
                var storage_name = "kexiegamesave";

                function getProgressName(index) {
                    return "progress" + index
                }

                function getSaveName(index) {
                    return "Save" + index
                }

                function getSaveText(index) {
                    return local_load(getSaveName(index))
                }

                function saveSaveText(index) {
                    var time = new Date();
                    time = time.toLocaleString();
                    local_set(getSaveName(index), time)
                        //console.log(local_load(getSaveName(index)))
                        //    $(this).text(time)
                }

                function save_all() {
                    sys.local.set(storage_name, $scope.buttons);

                }
                var save_record = index => {
                    if ($scope.buttons[index].version) {
                        if (confirm("是否确定覆盖存档？")) {

                        } else {
                            return;
                        }
                    }
                    var date = new Date;
                    var time_string = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
                    $scope.buttons[index] = {
                        version: sys.config.version,
                        data: v,
                        title: time_string,

                    }
                    save_all();
                    load_records();
                }
                var load_record = function (index) {
                    if ($scope.buttons[index].version) {
                        angular.element("#scene_home").scope().v = $scope.buttons[index].data;
                        v = $scope.buttons[index].data;
                        sys.to_scene("home");
                    }

                    //    toscene("home")
                }

                function load_records() {
                    var record = sys.local.load(storage_name);

                    if (!record) {                        
                        save_all();
                    }
                    $scope.buttons = record;
                    //            angular.element("#scene_home").scope().$digest();


                }

                $scope.go_back = function () {

                    sys.to_scene(backto ? backto : "home");
                }
                $scope.get_btn_text = function (index) {

                }
                $scope.handle = function (index) {
                    if (save == "save") {
                        save_record(index);
                    } else {
                        load_record(index);
                    }
                }

            }])
    },
    enter: function () {}
})