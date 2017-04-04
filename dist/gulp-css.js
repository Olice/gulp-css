/* eslint-env node */
const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const through2 = require('through2');

/**
 * Exported task
 * @exports
 * @param  {Object} [options] optional parameters to replace default config
 */
module.exports = (options) => {
  /**
   * Default parameters passed to task if none supplied
   * @type {Object}
   */
  const config = Object.assign({}, {
    sassOptions: {
      errLogToConsole: true,
      outputStyle: 'compressed'
    },
    source: './src',
    output: './dist',
    browserSync: false,
    autoprefixer: {
      browsers: ['> 1%'] // version of browsers
    }
  }, options);

  const sync = config.browserSync ? config.browserSync.stream() : through2.obj(function(file, enc, cb) {
    this.push(file);
    cb(null);
  });

  gulp.task('css', () => {
    return gulp
      .src(`${config.source}/**/*.scss`)
      .pipe(sourcemaps.init())
      .pipe(sass(config.sassOptions).on('error', sass.logError))
      .pipe(autoprefixer(config.autoprefixer))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(`${config.output}/css`))
      .pipe(sync);
  });
};
