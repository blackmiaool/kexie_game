var gulp = require('gulp');

var path = require('path');
var replace = require('gulp-replace')
var livereload = require('gulp-livereload');
var _ = require('underscore');

var fs = require("fs");
var shell = require('gulp-shell')
var node_less = require('less');

var copy = require('gulp-copy');
var concat = require("gulp-concat");
var md2json = require("gulp-markdown-table-to-json");

var rename = require("gulp-rename");
var cached = require("gulp-cached")
var gutil = require('gulp-util');
var injectfile = require('gulp-inject-file')
var headerfooter = require('gulp-header-footer');
var merge = require('merge-stream');
var yield_prefix = require('gulp-yield-prefix');
var babel = require('gulp-babel');
let handle = require('./data-handle.js');
var treeify = require('file-tree-sync');

var plotTree = treeify(path.join(__dirname, 'js', "plot"), ['.*']);
var sceneTree = treeify(path.join(__dirname, "scene"), ['.*']);
var imgTree = treeify(path.join(__dirname, 'res'), ['.*', '.jpg', '.png', 'svg']);
let sceneArray=sceneTree.map((v, i) => v.name);
let scenePathArray = sceneArray.map((v, i) => {
        return `scene/${v}/${v}.js`;
    });

function get_browserify_params() {
    return {
        insertGlobals: true,
        debug: !gulp.env.production
    }
}

function get_babel_params() {
    return {
        //        compact: false,
        presets: ['es2015'],
        //        plugins: ["transform-runtime"],
        //        optional: ['runtime'],
    }
}
gulp.task('html', function () {
    let controllerMap={
        make:"MakeController",
        character:"CharacterController",
        save:"SaveController",
    }
    let sceneStr=sceneArray.reduce(function(p,v){
        let controller=controllerMap[v]?`ng-controller="${controllerMap[v]}"`:"";
        return p+`<div class="scene" data-scene="${v}" ng-if="scenes['${v}']" ${controller}>\n
                <!-- inject: ../scene/${v}/${v}.html-->
            </div>\n`
    },"");
    return gulp.src(['html/index.html', 'html/editor.html'])
        .pipe(replace(`<!--injectScene-->`,sceneStr))
        .pipe(injectfile({
            pattern: '<!--\\sinject:<filename>-->',
            recursive: true
        }))
        .pipe(cached("html"))
        .pipe(gulp.dest('dist/')).pipe(livereload());
})
var less = require('gulp-less');
gulp.task('less', function () {

    var e = less({
        paths: [path.join(__dirname, 'less')]
    });
    e.on('error', function (ee) {
        gutil.log(ee);
        this.emit('end');
    });
    let sceneStr=sceneArray.reduce(function(p,v){
        return p+`&[data-scene="${v}"] {
        @import "scene/${v}/${v}.less";
    }\n`;
    },"")
    return gulp.src(['less/style.less', 'less/deep-ui.less'])
        .pipe(replace('//injectSceneFiles', sceneStr))
        .pipe(e)        
        .pipe(cached("less"))
        .pipe(gulp.dest('dist/css')).pipe(livereload());
});
gulp.task('mv-dist-js', function () {

})
gulp.task('mv-dist', ['mv-dist-js'], function () {
    return gulp.src('libs/js/**/*')
        .pipe(gulp.dest('dist/js'));
});

gulp.task("plots", function () {
    var babel_pipe = babel(get_babel_params());
    babel_pipe.on('error', function (ee) {
        gutil.log(ee);
        babel_pipe.end();
    });
    return gulp.src('js/plot/*.js', {
            base: 'js'
        })
        .pipe(cached("plot"))
        .pipe(yield_prefix(["tc", "th", "ts", "tm", "tcc", "tmood", "tcn"]))
        .pipe(headerfooter({
            header: `define(["require","res","z","system-sys","_","system-plotApi"],function (require,res,z,sys,_,plot){\
return function* (plot_cb){ 
var ts=plot.ts; 
var tc=plot.tc; 
var tcc=plot.tcc; //use same person as last invoke tc
var tcn=plot.tcn; //tc without wait touch
var th=plot.th; 
var tm=plot.tm; 
var tmood=plot.tmood; 
var img=res.img; 
var gap=plot.gap; 
var pp=res.pp; 
var tmood=plot.tmood; `,
            footer: `\n setTimeout(function(){plot_cb()},0);\n}})`,
            filter: function (file) {
                return true;
            }
        }))
        .pipe(babel_pipe)
        //        .pipe(browserify(get_browserify_params()))
        .pipe(gulp.dest('dist/js'))
        .pipe(livereload());
})
gulp.task("scenes", function () {

    var babel_pipe = babel(get_babel_params());
    babel_pipe.on('error', function (ee) {
        gutil.log(ee);
        babel_pipe.end();
    });

    return gulp.src(scenePathArray)
        .pipe(cached("scenes"))
        .pipe(headerfooter({
            //            header: `define(["require","sys","angular","z","common","res","dbg"],function* (require,sys,angular,z,common,res,dbg){`,
            header: `define(["require","system-scene","system-sys","angular","system-dbg","z","res","angular-module","plot","system-common"],function (require,scene,sys,angular,dbg,z,res,module,plot,common){`,
            footer: `})`,
            filter: function (file) {
                var cwd = file.history[0].split("/").pop().split("\\");
                var filename = cwd.pop();
                if (filename == "chat") {
                    return false;
                }
                return true;
            }
        }))        
        .pipe(injectfile({
            pattern: '<!--\\sinject:<filename>-->'
        }))
        .pipe(babel_pipe)
        .pipe(gulp.dest('dist/js/scene')).pipe(livereload());
})
gulp.task('es6', ["csv"], function () {
    var babel_pipe = babel(get_babel_params());
    babel_pipe.on('error', function (ee) {
        gutil.log(ee);
        babel_pipe.end();
    });

    return gulp.src(['js/**/*.js', "!js/plot/*.js"])
        .pipe(injectfile({
            pattern: '<!--\\sinject:<filename>-->'
        }))
        .pipe(headerfooter({
            header: `let gulpConfig={plots:${JSON.stringify(plotTree)},scenes:${JSON.stringify(sceneTree)}};\n`,
            footer: ``,
            filter: function (file) {
                return file.path.split("/").pop().split("\\").pop() == "main.js"
            }
        }))
        .pipe(cached("es6"))
        .pipe(babel_pipe)
        .pipe(gulp.dest('dist/js'))
        .pipe(livereload());
});
gulp.task('csv', function () {
    var beautify = require('gulp-beautify');
    gulp.src("*.csv")
        .pipe(cached("csv2"))
        .pipe(handle.gulpCsvToMarkdownTable())
        .pipe(rename("README.md"))
        .pipe(gulp.dest("."));
    return gulp.src("*.csv")
        .pipe(cached("csv"))
        .pipe(handle.gulpCsvToJson())
        .pipe(beautify())
        .pipe(gulp.dest("dist/"))
});
gulp.task('md', function () {
    var beautify = require('gulp-beautify');
    return gulp.src('README.md')
        .pipe(md2json())
        .pipe(beautify())
        .pipe(cached("md"))
        .pipe(rename("dist/data.json"))
        .pipe(gulp.dest("."))
        .pipe(livereload());
})
gulp.task('mv-res', function () {
    return gulp.src('res/**/*')
        .pipe(cached("mv-res"))
        .pipe(gulp.dest("dist/res/"));
})
gulp.task('default', function () {

    gulp.start(["mv-dist", "mv-res", "less", "html", "es6", "plots", "scenes"]);

});
gulp.task('reload', function () {

    gulp.src("")
        .pipe(livereload());

});

livereload.listen({port:35728});
gulp.watch('less/**/*.less', ['less']);
gulp.watch('scene/**/*.less', ['less']);
gulp.watch(['js/**/*.js', "!js/scene/*.js", "!js/plot/*.js"], ['es6']);
gulp.watch("js/plot/*.js", ['plots']);
gulp.watch("scene/**/*.js", ['scenes']);
gulp.watch('index.html', ['reload']);
gulp.watch('html/**/*.html', ['html']);
gulp.watch('scene/**/*.html', ['html']);
gulp.watch('res/**/*.*', ['mv-res', 'reload'])
    //gulp.watch('README.md', ['es6']);
gulp.watch('*.csv', ['es6']);