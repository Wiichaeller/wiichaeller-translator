var gulp = require('gulp');

var jspm = require('gulp-jspm-build');

gulp.task('jspm', function () {
    jspm({
        bundleOptions: {
            minify: true,
            mangle: true,
            inject: true
        },
        bundles: [
            { src: 'app/app', dst: 'build.js' }
        ]
    })
        .pipe(gulp.dest('dist'));
});


gulp.task('build', ['jspm'], function () {
    gulp.src(['jspm_packages/**/*']).pipe(gulp.dest('dist/jspm_packages'));
    gulp.src(['css/**/*']).pipe(gulp.dest('dist/css'));
    gulp.src(['images/**/*']).pipe(gulp.dest('dist/images'));
    gulp.src(['index.html', 'config.js']).pipe(gulp.dest('dist/'));
});
