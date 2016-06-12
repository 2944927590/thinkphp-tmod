var gulp = require('gulp');
var rename = require('gulp-rename');
var del = require('del');

var DIST = './dist/';
var DIST_APP = DIST + 'Home';
var SRC = 'src/';
var APP = SRC + 'app/';

gulp.task('clean', function () {
    del.sync(DIST);
    gulp.src(['./src/lib/**/*', './src/mock/**/*', './src/vendor/**/*'], {base: './src/'})
        .pipe(gulp.dest(DIST));
});

gulp.task('copy', handleCopy);
function handleCopy(path) {
    path = typeof path === 'string' ? path : APP + '**/*.js';
    gulp.src(path, {base: APP})
        .pipe(gulp.dest(DIST_APP));
}

function handleDelete(path){
    if(typeof path === 'string'){
        path = path.substr(path.lastIndexOf(SRC.replace('/', '\\'))).replace(SRC.replace('/', ''), DIST);
        var pathArr = path.split('\\');
        var arr = pathArr[pathArr.length - 1].split('.');
        if(path.indexOf('.html') != -1) {
            pathArr[pathArr.length - 1] = 'tpl_' + arr[0] + '.js';
        } else if (path.indexOf('.css') != -1) {
            pathArr[pathArr.length - 1] = 'css_' + arr[0] + '.js';
        }
        path = pathArr.join('\\');
    } else {
        path = DIST_APP + '**/*.js';
    }
    del.sync(path);
}


gulp.task('watch', function (){
    gulp.watch([SRC + '**/*.js', SRC + '**/*.json'], function (vinyl) {
        console.log('watch copy', vinyl);
        switch ( vinyl.type ){
            case 'added' :
            case 'changed' : handleCopy(vinyl.path); break;
            case 'deleted' : handleDelete(vinyl.path); break;
        }
    });
    gulp.watch(APP + '**/*.html', function (vinyl) {
        console.log('watch Dot', vinyl);
        switch ( vinyl.type ){
            case 'added' :
            case 'changed' : handleDoT(vinyl); break;
            case 'deleted' : handleDelete(vinyl.path); break;
        }
    });
    gulp.watch(APP + '**/*.css', function (vinyl) {
        console.log('watch Css', vinyl);
        switch ( vinyl.type ) {
            case 'added' :
            case 'changed' : handleCss(vinyl); break;
            case 'deleted' : handleDelete(vinyl.path); break;
        }
    });
});

gulp.task('default', ['clean', 'copy']);