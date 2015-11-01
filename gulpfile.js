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
gulp.task('less', function () {
    var less = require('gulp-less');
    var e = less({
        paths: [path.join(__dirname, 'less', 'includes')]
    });
    e.on('error', function (ee) {
        gutil.log(ee);
        e.end();
    });


    return gulp.src('less/**/*.less')
        .pipe(e)
        .pipe(cached("less"))
        .pipe(gulp.dest('dist/css')).pipe(livereload());
});
gulp.task('mv-dist', function () {
    return gulp.src('libs/**/*')
        .pipe(rename(function (path) {
        if(path.extname){
           path.dirname += "/libs"; 
        }
            
//            path.basename += "-goodbye";
//            path.extname = ".md"
        console.log(path);
        }))
        .pipe(gulp.dest('dist/'));
});
gulp.task('es6', function () {
    var babel = require('gulp-babel');
    var e = babel({
        compact: false,
        optional: ['runtime']
    });
    e.on('error', function (ee) {
        gutil.log(ee);
        e.end();
    });
    var scenes = gulp.src('js/scenes/*.js', {
        base: 'js'
    }).pipe(headerfooter({
        header: 'define(["sys","angular","v","common","res"],function(sys,angular,v,common,res){',
        footer: '})',
        filter: function (file) {
            return true;
        }
    }));
    return merge(scenes, gulp.src(['js/**/*.js', "!js/scenes/*.js"]))
        .pipe(cached("es6"))
        .pipe(injectfile({
            pattern: '<!--\\sinject:<filename>-->'
        }))
        .pipe(e)
        .pipe(gulp.dest('dist/js')).pipe(livereload());
});

gulp.task('md', function () {
    var beautify = require('gulp-beautify');
    return gulp.src('README.md').pipe(md2json()).
    pipe(beautify()).pipe(rename("dist/data.json")).pipe(gulp.dest("."))
})


gulp.task("injectHeader", function () {
    var template = require('angular-template');
    var tmpl = fs.readFileSync('src/theme/kxheader.html', "utf8");
    var header_less = fs.readFileSync('src/theme/kx-header.less', "utf8");
    var header_style = ""
    node_less.render(header_less, {
        paths: ['src/theme/'], // Specify search paths for @import directives
        filename: 'kx-header.less', // Specify a filename, for better error messages
        compress: true // Minify CSS output
    }).then(function (output) {
        header_style = output.css;
        header_style = "<style>" + header_style;
        header_style += "</style>";
    }, function (error) {
        console.log(error)
    })
    var header_config = {
        list: [{
            name: "header-home",
            text: "首页",
            icon: "glyphicon-home",
            href: "",
    }, {
            name: "header-wiki",
            text: "资料",
            icon: "glyphicon-book",
            href: "mediawiki/",
    }, {
            text: "留言板",
            icon: "glyphicon-blackboard",
            href: "mediawiki/",
    }, {
            text: "学长们",
            icon: "glyphicon-user",
            href: "mediawiki/",
    }],
        title: "UESTC-IC科协官方网站",
    }
    var placeHolder = /<!--placeHolderForHeader .+-->/;

    function replace_place_holder(todo) {
        var choose = new RegExp("[^-<>! ]+");
        choose = choose.exec(todo.replace("placeHolderForHeader", ""))[0];
        header_config.list.every(function (li) {
            if (li.text == choose) {
                console.log("found!!!")
                header_config.current = li;
                return false;
            }
            return true;
        })
        console.log("choose", choose);
        //            header_config.current = choose;
        return template(tmpl, header_config) + header_style;
    }
    gulp.src('src/mediawiki/mobile/php/**/*.php')
        .pipe(replace(placeHolder, replace_place_holder))
        .pipe(gulp.dest('mediawiki/extensions/MobileFrontend/'));
    return gulp.src('./src/theme/header.php') //
        .pipe(replace(placeHolder, replace_place_holder))
        .pipe(gulp.dest('wp-content/themes/kexie/'))


});
gulp.task('default', function () {

    gulp.start(["mv-dist", "less", 'md', "es6"]);

});
gulp.task('reload', function () {

    gulp.src("").pipe(livereload());

});
livereload.listen();
gulp.watch('less/**/*.less', ['less']);
gulp.watch('js/**/*.js', ['es6']);
gulp.watch('index.html', ['reload']);
gulp.task('mediawiki', function () {
    return gulp.src('src/mediawiki/mobile/less/**/*.less')
        .pipe(gulp.dest('mediawiki/extensions/MobileFrontend/less/'))
        .pipe(shell("make", {
            cwd: 'mediawiki/extensions/MobileFrontend/'
        }));
});