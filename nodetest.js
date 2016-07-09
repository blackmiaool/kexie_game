var gulp=require("gulp");
var fs=require("fs");
var treeify = require('file-tree-sync');
var path = require('path');
console.log(treeify(path.join(__dirname, 'scene'), ['']));