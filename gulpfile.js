/* eslint-env node */
const gulp = require('gulp');

gulp.task('js', function() {
  return gulp
    .src('./src/**/*.js')
    .pipe(gulp.dest('./dist'));
});

gulp.task('build', ['js']);

gulp.task('default', ['build']);
