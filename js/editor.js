let tables =
        <!-- inject: ../dist/data.json--> ;
console.log(tables)
var rootModule = angular.module("main", ["contenteditable", "ngAnimate"]);

let tableHeaders={};
for(var i in tables){
    tableHeaders[i]=[];
    for(var j in tables[i][0]){
        tableHeaders[i].push(j);
    }
    
}

rootModule.controller("mainController", ["$scope", "$http", function (sp, $http) {
    sp.$watch("tableHeaders",function(headers,preHeaders){
        
    },true)
    _.extend(sp,{
        tables,
        tableHeaders
    })
    sp.headerOptions=[['列改名',function($itemScope){
        let newKey=prompt("输入新列名");
        if(!newKey){
            return;
        }
        let key=$itemScope.key;
        let tableName=$itemScope.tableName;
        
        sp.tables[tableName].forEach(function(item,i){
            let value=item[key];
            delete item[key];
            item[newKey]=value;
        })
    }]];
//    sp.commonMenuOptions = [
//          ['浏览器中打开', function ($itemScope) {
//            window.open($itemScope.item.Url)
//          }],
//          ['编辑', function ($itemScope) {
//            window.open(`/miot_html_editor/index.html?id=${$itemScope.item.ArticleId}`)
//          }],
//            ['设置为可见', function ($itemScope) {
//            setStatus($itemScope.item.ArticleId, 1, function () {
//                getTopList();
//                setPage(sp.page.current);
//
//            })
//
//          }, function ($itemScope) {
//            console.log($itemScope)
//            return !$itemScope.item.Status;
//          }],
//          ['设置为不可见', function ($itemScope) {
//            setStatus($itemScope.item.ArticleId, 0, function () {
//                getTopList();
//                setPage(sp.page.current);
//
//            })
//          }, function ($itemScope) {
//            return $itemScope.item.Status;
//          }],['设置点击量', function ($itemScope) {
//              let id=$itemScope.item.ArticleId;
//              let cnt=prompt("请输入想要的点击量");
//              if(!cnt){
//                  alert("点击量不合法");
//                  return;
//              }
//            setProps(id, {ShadowVisit:cnt}, function () {
//                getTopList();
//                setPage(sp.page.current);
//
//            })
//          }, function ($itemScope) {
//            return $itemScope.item.Status;
//          }], ];
//
//    sp.menuOptions = sp.commonMenuOptions.concat([
//          ['取消置顶', function ($itemScope) {
//            if (checkLock()) {
//                return;
//            }
//            cancelTop($itemScope.item.index);
//          }],
//      ]);
//
//    sp.menuOptions1 = sp.commonMenuOptions.concat([
//
//          null,
//          ['置顶', [
//              ['位置1', function ($itemScope) {
//                if (checkLock()) {
//                    return;
//                }
//                let id = $itemScope.item.ArticleId;
//                setTop(id, 1);
//              }],
//              ['位置3', function ($itemScope) {
//                if (checkLock()) {
//                    return;
//                }
//                let id = $itemScope.item.ArticleId;
//                setTop(id, 3);
//              }],
//              ['位置5', function ($itemScope) {
//                if (checkLock()) {
//                    return;
//                }
//                let id = $itemScope.item.ArticleId;
//                setTop(id, 5);
//              }]
//          ]]
//      ]);



}])