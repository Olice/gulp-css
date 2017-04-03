# gulp-css

## Example:

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

require('gulp-css')(config);
```
