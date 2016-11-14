/* eslint-disable */
const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');
/* eslint-enable */

gulp.task('lint', () => gulp.src(
        ['index.js', 'test/*.js', 'gulpfile.js']
      ).pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError())
    );

gulp.task('test', () => [
  gulp.src('test/*.js', { read: false }).pipe(mocha())
]);

gulp.task('cp-index', () => gulp.src('index.js').pipe(gulp.dest('./.tmp/node_modules/postcss-quotes/')));
gulp.task('cp-utils', () => gulp.src('./utils/*.js').pipe(gulp.dest('./.tmp/node_modules/postcss-quotes/utils/')));
gulp.task('cp', ['cp-index', 'cp-utils']);

gulp.task('default', ['lint', 'test']);
