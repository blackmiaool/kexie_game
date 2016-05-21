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
    return gulp.src(['html/index.html'])
        .pipe(injectfile({
            pattern: '<!--\\sinject:<filename>-->',
            recursive: true
        }))
        .pipe(cached("html"))
        .pipe(gulp.dest('dist/')).pipe(livereload());
})

gulp.task('less', function () {
    var less = require('gulp-less');
    var e = less({
        paths: [path.join(__dirname, 'less')]
    });
    e.on('error', function (ee) {
        gutil.log(ee);
        e.end();
    });


    return gulp.src('less/style.less')
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
    return gulp.src('js/plots/*.js', {
            base: 'js'
        })
        .pipe(cached("plot"))
        .pipe(yield_prefix(["tc", "th", "ts", "tm", "tcc", "tmood", "tcn"]))
        .pipe(headerfooter({
            header: `define(["res","v","sys","_"],function (res,v,sys,_){\
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
        .pipe(gulp.dest('dist/js')).pipe(livereload())
})
gulp.task("scenes", function () {

    var babel_pipe = babel(get_babel_params());
    babel_pipe.on('error', function (ee) {
        gutil.log(ee);
        babel_pipe.end();
    });
    return gulp.src('js/scene/*.js', {
            base: 'js'
        })
        .pipe(headerfooter({
            //            header: `define(["require","sys","angular","v","common","res","dbg"],function* (require,sys,angular,v,common,res,dbg){`,
            header: `define(["require","scene","sys","angular","dbg","v","res","angular-module"],function (require,scene,sys,angular,dbg,v,res,module){`,
            footer: `})`,
            filter: function (file) {
                var cwd = file.history[0].split("/");
                var filename = cwd[cwd.length - 1];
                if (filename == "chat") {
                    return false;
                }
                return true;
            }
        }))
        .pipe(cached("scenes"))
        .pipe(injectfile({
            pattern: '<!--\\sinject:<filename>-->'
        }))
        .pipe(babel_pipe)
        .pipe(gulp.dest('dist/js')).pipe(livereload())
})
gulp.task('es6', ["plots", "scenes"], function () {
    var babel_pipe = babel(get_babel_params());
    babel_pipe.on('error', function (ee) {
        gutil.log(ee);
        babel_pipe.end();
    });
    return gulp.src(['js/**/*.js', "!js/scene/*.js", "!js/plots/*.js"])
        .pipe(cached("es6"))
        .pipe(injectfile({
            pattern: '<!--\\sinject:<filename>-->'
        }))
        .pipe(babel_pipe)
        .pipe(gulp.dest('dist/js'))
        .pipe(livereload());
});

gulp.task('md', function () {
    var beautify = require('gulp-beautify');
    return gulp.src('README.md').pipe(md2json()).
    pipe(beautify()).pipe(rename("dist/data.json")).pipe(gulp.dest("."))
})
gulp.task('mv-res', function () {
    return gulp.src('res/**/*').pipe(gulp.dest("dist/res/"))
})
gulp.task('default', function () {

    gulp.start(["mv-dist", "mv-res", "less", "html", 'md', "es6"]);

});
gulp.task('reload', function () {

    gulp.src("").pipe(livereload());

});
livereload.listen();
gulp.watch('less/**/*.less', ['less']);
gulp.watch('js/**/*.js', ['es6']);
gulp.watch('index.html', ['reload']);
gulp.watch('html/**/*.html', ['html']);