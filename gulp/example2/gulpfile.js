var gulp = require('gulp');
var gutil = require('gulp-util');
https://www.npmjs.com/package/gulp-htmlmin
var htmlmin = require('gulp-htmlmin');

// Move all files from /public to /dist
gulp.task('moveAll', function () {
  return gulp.src('public/**.*').pipe(gulp.dest('dist'));
});

// Move all files from /public to /dist after minifying the html files
gulp.task('buildAll', ['minifyHTML'], function () {
  return gulp.src('public/**.*').pipe(gulp.dest('dist'));
});

// Minify all the html files in /public
gulp.task('minifyHTML', function() {
  return gulp.src('public/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});
