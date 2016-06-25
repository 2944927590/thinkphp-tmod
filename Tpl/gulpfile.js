var gulp = require('gulp');
var rename = require('gulp-rename');
var del = require('del');

var DIST = './dist/';
var DIST_APP = DIST + 'Home';
var SRC = 'src/';
var APP = SRC + 'Home/';

gulp.task('clean', function () {
    del.sync(DIST);
    gulp.src(['./src/Home/**/*', './src/Home/**/**/*'], {base: './src/'})
        .pipe(gulp.dest(DIST));
});

gulp.task('copy', handleCopy);
function handleCopy(path) {
    path = typeof path === 'string' ? path : APP + '**/**/*.js';
    gulp.src(path, {base: APP})
        .pipe(gulp.dest(DIST_APP));
}

gulp.task('watch', function (){
    gulp.watch([APP + '**/*.js', APP + '**/**/*.js'], function (vinyl) {
        console.log('watch copy', vinyl);
        switch ( vinyl.type ){
            case 'added' :
            case 'changed' : handleCopy(vinyl.path); break;
        }
    });
});

gulp.task('default', ['clean', 'copy']);