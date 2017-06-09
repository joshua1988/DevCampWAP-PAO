var gulp = require('gulp');
var gutil = require('gulp-util');
// https://github.com/google/eslint-config-google
var lint = require('eslint-config-google');

gulp.task('watch', function () {
  gulp.watch('public/*.js', ['jsLint']);
});

gulp.task('jsLint', function () {
  gulp.src('public/*.js')
    .pipe(lint.eslint())
    .pipe(lint.eslint.format());
});

gulp.task('default', ['watch']);
