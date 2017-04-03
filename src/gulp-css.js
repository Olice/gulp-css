/* eslint-env node */
const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const gulpif = require('gulp-if');

/**
 * Default parameters passed to task if none supplied
 * @type {Object}
 */
const config = {
  sassOptions: {
    errLogToConsole: true,
    outputStyle: 'compressed'
  },
  source: './src',
  output: './dist/css',
  browserSync: null,
  autoprefixer: {
    browsers: ['> 1%'] // version of browsers
  }
};

/**
 * Exported task
 * @exports
 * @param  {Object} [config=config] Config object
 */
module.exports = function(config = config) {
  gulp.task('css', function() {
    return gulp
      .src(config.source + '/sass/*.scss')
      .pipe(sourcemaps.init())
      .pipe(sass(config.sassOptions).on('error', sass.logError))
      .pipe(autoprefixer(config.autoprefixer))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(config.output + '/css'))
      .pipe(gulpif(config.browserSync, config.browserSync.stream()));
  });
};
