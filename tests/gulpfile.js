/* eslint-env node */
const gulp = require('gulp');

const cssOptions = {
  sassOptions: {
    errLogToConsole: true,
    outputStyle: 'compressed'
  },
  source: './scss',
  output: './',
  browserSync: false,
  autoprefixer: {
    browsers: ['> 1%'] // version of browsers
  }
};

// Register gulp-css task
require('../dist/gulp-css')(cssOptions);

gulp.task('default', ['css']);
