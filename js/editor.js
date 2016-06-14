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


}])