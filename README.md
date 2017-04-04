# gulp-css

## Examples:

```js

// Gulpfile.js

const gulp = require('gulp');

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

// Register gulp-css task
require('gulp-css')(config);

gulp.task('default', ['gulp-css']);
```

When using browserSync, pass the browserSync object to config.browserSync"

```js

const browserSync = require('browserSync').create();

config.browserSync = browserSync;

```
