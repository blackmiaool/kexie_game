var through = require('through2');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;

// Consts
const PLUGIN_NAME = 'gulp-handle-my-data';

function md_trim(str) {
    return str.replace(/(^\s+)|(\s+$)/g, "");
}
var csv = require('csv');

function handle(text, anchor) {
    var lines = text.split("\n");
    var cur_line = 0;
    var line = ""
    var table_name = "";
    var col_num = 0;
    var cols = [];
    var rows = [];

    function read_line() {
        return lines[cur_line++];
    }
    var root = {};
    while (true) {
        var cols = [];
        var rows = [];
        while (line.indexOf(anchor) == -1 && cur_line != lines.length) {
            line = read_line();
        }
        if (cur_line == lines.length) {
            break;
        }
        table_name = line.split(anchor)[1];
        table_name = md_trim(table_name)

        line = read_line()

        if (line) {
            line = line.split("|")
            for (var j in line) {

                line[j] = md_trim(line[j])
                if ((j == 0 || j == line.length - 1) && line[j] === "") {

                } else {
                    cols.push(line[j]);
                }
            }
            if (line.length) {
                cols = line;
                rows.push(cols)
            } else {
                console.error("markdown expect column title")
                break;
            }
        } else {
            console.error("markdown expect table content")
            break;
        }

        line = read_line()

        if (line) {

        } else {
            console.error("markdown expect table spliter")
            break;
        }
        line = read_line()
        while (line.indexOf("|") != -1 && cur_line != lines.length) {

            var line_this = line.split("|")
            var row = []
            for (var j in line_this) {
                line_this[j] = md_trim(line_this[j])
                if ((j == 0 || j == line_this.length - 1) && line_this[j] === "") {

                } else {
                    row.push(line_this[j]);
                }

            }
            rows.push(row);
            line = read_line()
        }

        var data = [];
        for (var j in rows) {
            if (j != 0) {
                var ele = {};
                for (var k in rows[j]) {
                    ele[rows[0][k]] = rows[j][k];
                }
                data.push(ele);
            }
        }
        root[table_name] = data;
    }
    return JSON.stringify(root);
}
// Plugin level function(dealing with files)
function json2table(dataRaw) {
    let tables = csv2table(dataRaw, true)
    let result = "";
    for (var i in tables) {
        let table = tables[i];
        let keys = [];
        for (let i in table[0]) {
            keys.push(i);
        }

        //        _.keys();
        keys = keys.filter(function (v, i) {
            if (v[0] == "$") {
                return false;
            }
            return true;
        });
        let tableName = "###### " + i;
        let headerStr = keys.join("|");
        let spliterStr = "---|".repeat(keys.length - 1>0?keys.length - 1:1) + "---";

        result += [tableName, headerStr, spliterStr, ].join("\n") + "\n";
        result += table.reduce(function (pre, v, i) {
            let arr = [];
            keys.forEach(function (vv, ii) {
                arr.push(v[vv]);
            });

            return pre += arr.join("|") + "\n";
        }, "");
        result += "\n\n";
    }
    return result;
}

function gulpCsvToMarkdownTable() {


    // Creating a stream through which each file will pass
    return through.obj(function (file, enc, cb) {
        if (file.isNull()) {
            // return empty file
            return cb(null, file);
        }
        if (file.isBuffer()) {
            file.contents = new Buffer(json2table(file.contents.toString()))
            file.path = gutil.replaceExtension(file.path, '.md');
        }
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        cb(null, file);

    });
}
var parse = require('csv-parse/lib/sync');
function csv2table(dataRaw, outputObj = false) {
    let tables = {};
    let headerMap = {};
    let state = "waitName";
    let currentTableName;
    let headerMatch = /###### (\S+?)"*,+/;
    let lines = dataRaw.split("\n").filter(function (v, i) {
        return Boolean(v);
    })
    for (var i = 0; i < lines.length; i++) {
        let line = lines[i];
        let match;
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
            let headers = line.split(/,/).filter(function (v, i) {
                return Boolean(v);
            }).map(function(v,i){
                return v.replace(/"/g,"");
            })
            headerMap[currentTableName] = headers;
            state = "waitBody";
            break;
        case "waitBody":
            match = line.match(headerMatch);
            if (match) {
                i--;
                state = "waitName";
            } else {
                if(line.replace(/[,\s]/g,"").length==0){
                    continue;
                }
                line=line.replace(/,*$/g,""); 
                try{
                    line=parse(line,{delimiter:",",columns:headerMap[currentTableName]});
                }catch(e){
                    console.log(e);
                    console.log(line);
                    continue;
                }
                
          
             
                tables[currentTableName].push(line[0]);
                //            console.log(tables)
            }
            break;
        }
    }
    if (outputObj) {
        return tables;
    } else {
        return JSON.stringify(tables);
    }

}

function gulpCsvToJson() {

    // Creating a stream through which each file will pass
    return through.obj(function (file, enc, cb) {
        if (file.isNull()) {
            // return empty file
            return cb(null, file);
        }
        if (file.isBuffer()) {
            file.contents = new Buffer(csv2table(file.contents.toString()))
            file.path = gutil.replaceExtension(file.path, '.json');
        }
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        cb(null, file);

    });

}

// Exporting the plugin main function
module.exports = {
    gulpCsvToJson, gulpCsvToMarkdownTable
};