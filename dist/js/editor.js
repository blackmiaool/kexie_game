"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var dataRaw = 0;
var lines = dataRaw.split("\n").filter(function (v, i) {
    return Boolean(v);
});
console.log(dataRaw);
var tables = {};
var headerMap = {};
//console.log(lines);
var state = "waitName";
var currentTableName = void 0;
var headerMatch = /###### (\S+?),+/;
for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    var match = void 0;
    switch (state) {
        case "waitName":
            match = line.match(headerMatch);
            if (match) {
                currentTableName = match[1];
                tables[currentTableName] = [];
                state = "waitHeader";
            }
            break;
        case "waitHeader":
            var headers = line.split(/,/).filter(function (v, i) {
                return Boolean(v);
            });
            console.log(headers);
            headerMap[currentTableName] = headers;
            console.log(headers);
            state = "waitBody";
            break;
        case "waitBody":
            match = line.match(headerMatch);
            if (match) {
                i--;
                state = "waitName";
            } else {
                var _ret = function () {
                    var tds = line.replace(/"(\S+?),(\S+?)"/, "$1{{{$2").split(",");
                    var tr = {};
                    if (!tds[0] && !tds[1]) {
                        return "continue";
                    }
                    headerMap[currentTableName].forEach(function (v, i) {
                        tr[v] = tds[i];
                    });
                    tables[currentTableName].push(tr);
                    //            console.log(tables)
                }();

                if (_ret === "continue") continue;
            }
            break;
    }
}
console.log(tables);
var rootModule = angular.module("main", ["contenteditable", "ngAnimate"]);

var tableHeaders = {};
for (var i in tables) {
    tableHeaders[i] = [];
    for (var j in tables[i][0]) {
        tableHeaders[i].push(j);
    }
}
var hotKeyMap = {
    ctrl: {},
    alt: {},
    shift: {},
    meta: {}
};
//modifier key , normal key , cb   or
//normal key , cb   or
function registerHotKey() {
    var modifier = void 0;
    var normal = void 0;
    var cb = void 0;
    if (typeof arguments[1] == "string") {
        modifier = arguments[0];
        normal = arguments[1];
        cb = arguments[2];
    } else {
        normal = arguments[0];
        cb = arguments[1];
    }
    if (modifier) {
        hotKeyMap[modifier][normal] = cb;
    } else {
        hotKeyMap[normal] = cb;
    }
}

function getCursortPosition(ctrl) {
    //获取光标位置函数
    var CaretPos = 0;
    // IE Support
    if (document.selection) {
        ctrl.focus();
        var Sel = document.selection.createRange();
        Sel.moveStart('character', -ctrl.value.length);
        CaretPos = Sel.text.length;
    }
    // Firefox support
    else if (ctrl.selectionStart || ctrl.selectionStart == '0') CaretPos = ctrl.selectionStart;else {
            console.log("not support");
        }
    return CaretPos;
}
setTimeout(function () {
    console.dir($(":focus")[0]);
    console.log(getCursortPosition($(":focus")[0]));
}, 1000);

function handleHotKey(e) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
    }

    var normal = specialKeys[e.keyCode];
    var modifiers = ["ctrl", "alt", "shift", "meta"];
    var ret = false;
    modifiers.forEach(function (v, i) {
        if (e[v + "Key"]) {
            var cb = hotKeyMap[v][normal];
            console.log(cb);
            if (cb) {
                ret = Boolean(cb.apply(undefined, args.concat([normal, v])));
            }
        }
    });
    //    console.log(!ret,hotKeyMap[normal])
    if (!ret && hotKeyMap[normal] && _typeof(hotKeyMap[normal]) != "object") {
        return Boolean(hotKeyMap[normal].apply(hotKeyMap, args.concat([normal])));
    }
    return ret;
}

function clearTd(column, row, tableName, columnName) {
    //    $(`table[data-table='${tableName}'] td[data-column='${column}'][data-row='${row}']`).empty().trigger("keydown");
    console.log(tableName, row, columnName);
    tables[tableName][row][columnName] = " ";
    return true;
}

function changeRow(column, row, tableName, columnName, dir) {
    var newRow = void 0;
    if (dir == "down") {
        newRow = row + 1;
    } else {
        newRow = row - 1;
    }
    $("table[data-table='" + tableName + "'] td[data-column='" + column + "'][data-row='" + newRow + "']").focus();
    return true;
}

function newLine(column, row, tableName, columnName) {
    var newLine = {};

    for (var i in tables[tableName][0]) {
        newLine[i] = " ";
    }
    newLine.name = tables[tableName].length + 1;
    tables[tableName].splice(row + 1, 0, newLine);
    return true;
}
rootModule.controller("mainController", ["$scope", "$http", function (sp, $http) {
    sp.$watch("tableHeaders", function (headers, preHeaders) {}, true);
    registerHotKey("up", changeRow);
    registerHotKey("down", changeRow);
    registerHotKey("alt", "d", clearTd);
    registerHotKey("ctrl", "enter", newLine);
    console.log(hotKeyMap);

    function onKeyDown(e, column, row, tableName, columnName) {
        console.log(e);
        if (handleHotKey(e, column, row, tableName, columnName)) {
            e.preventDefault();
        }
    }
    sp.headerOptions = [['列改名', function ($itemScope) {
        var newKey = prompt("输入新列名");
        if (!newKey) {
            return;
        }
        var key = $itemScope.key;
        var tableName = $itemScope.tableName;

        sp.tables[tableName].forEach(function (item, i) {
            var value = item[key];
            delete item[key];
            item[newKey] = value;
        });
    }], ['新建列', function ($itemScope) {
        var newKey = prompt("输入新列名");
        if (!newKey) {
            return;
        }
        var key = $itemScope.key;
        var tableName = $itemScope.tableName;

        sp.tables[tableName].forEach(function (item, i) {
            item[newKey] = "";
        });
    }], ['删除列', function ($itemScope) {
        if (!confirm("是否确定删除列")) {
            return;
        }
        var key = $itemScope.key;
        var tableName = $itemScope.tableName;

        sp.tables[tableName].forEach(function (item, i) {
            delete item[key];
        });
    }]];
    _.extend(sp, {
        tables: tables,
        tableHeaders: tableHeaders,
        onKeyDown: onKeyDown
    });
}]).filter("md", function () {
    return function (tables) {
        var result = "";
        angular.forEach(function (v, k) {});

        var _loop = function _loop() {
            var table = tables[i];
            var keys = _.keys(table[0]);
            keys = keys.filter(function (v, i) {
                if (v[0] == "$") {
                    return false;
                }
                return true;
            });
            var tableName = "###### " + i;
            var headerStr = keys.join("|");
            var spliterStr = "---|".repeat(keys.length - 1) + "---";

            result += [tableName, headerStr, spliterStr].join("\n") + "\n";
            result += table.reduce(function (pre, v, i) {
                var arr = [];
                keys.forEach(function (vv, ii) {
                    arr.push(v[vv]);
                });

                return pre += arr.join("|") + "\n";
            }, "");
            result += "\n\n";
        };

        for (var i in tables) {
            _loop();
        }
        return result;
    };
}).filter("md", function () {
    return function (tables) {
        var result = "";
        angular.forEach(function (v, k) {});

        var _loop2 = function _loop2() {
            var table = tables[i];
            var keys = _.keys(table[0]);
            keys = keys.filter(function (v, i) {
                if (v[0] == "$") {
                    return false;
                }
                return true;
            });
            var tableName = "###### " + i;
            var headerStr = keys.join("|");
            var spliterStr = "---|".repeat(keys.length - 1) + "---";

            result += [tableName, headerStr, spliterStr].join("\n") + "\n";
            result += table.reduce(function (pre, v, i) {
                var arr = [];
                keys.forEach(function (vv, ii) {
                    arr.push(v[vv]);
                });

                return pre += arr.join("|") + "\n";
            }, "");
            result += "\n\n";
        };

        for (var i in tables) {
            _loop2();
        }
        return result;
    };
}).filter("csv", function () {
    return function (tables) {
        var result = "";

        var _loop3 = function _loop3() {
            var table = tables[i];
            var keys = _.keys(table[0]);
            keys = keys.filter(function (v, i) {
                if (v[0] == "$") {
                    return false;
                }
                return true;
            });
            var tableName = "###### " + i + ",".repeat(keys.length - 1);
            result += tableName + "\n";
            var headerStr = keys.join(",");
            result += headerStr + "\n";
            result += table.reduce(function (pre, v, i) {
                var arr = [];
                keys.forEach(function (vv, ii) {
                    arr.push("\"" + v[vv] + "\"");
                });

                return pre += arr.join(",") + "\n";
            }, "");
            result += "\n\n";
        };

        for (var i in tables) {
            _loop3();
        }
        return result;
    };
});

var specialKeys = {
    8: "backspace",
    9: "tab",
    10: "return",
    13: "enter",
    16: "shift",
    17: "ctrl",
    18: "alt",
    19: "pause",
    20: "capslock",
    27: "esc",
    32: "space",
    33: "pageup",
    34: "pagedown",
    35: "end",
    36: "home",
    37: "left",
    38: "up",
    39: "right",
    40: "down",
    45: "insert",
    46: "del",
    59: ";",
    61: "=",
    91: "meta",
    96: "0",
    97: "1",
    98: "2",
    99: "3",
    100: "4",
    101: "5",
    102: "6",
    103: "7",
    104: "8",
    105: "9",
    106: "*",
    107: "+",
    109: "-",
    110: ".",
    111: "/",
    112: "f1",
    113: "f2",
    114: "f3",
    115: "f4",
    116: "f5",
    117: "f6",
    118: "f7",
    119: "f8",
    120: "f9",
    121: "f10",
    122: "f11",
    123: "f12",
    144: "numlock",
    145: "scroll",
    173: "-",
    186: ";",
    187: "=",
    188: ",",
    189: "-",
    190: ".",
    191: "/",
    192: "`",
    219: "[",
    220: "\\",
    221: "]",
    222: "'"
};
for (var i = 65; i < 65 + 26; i++) {
    specialKeys[i] = String.fromCharCode(i).toLowerCase();
}
//let specialKeys={};
//for(var i in specialKeysRaw){
//    specialKeys[specialKeysRaw[i]]=i;
//}