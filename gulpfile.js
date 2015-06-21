// require gulp
var gulp = require('gulp');

// require plugins
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var gutil = require('gulp-util');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');
var sass = require('gulp-ruby-sass');
var uglify = require('gulp-uglify');

// js task
gulp.task('js', function() {
  return gulp.src('./js/src/*.js')
    .pipe(concat('demo.js'))
    .pipe(gulp.dest('./js/dist/'))
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./js/dist/'));
});

// styles task
gulp.task('styles', function() {
  return sass('./sass', {
      style: 'expanded',
      noCache: true
    })
    .on('error', function(err) {
      gutil.beep();
      console.error(err);
      this.emit('end');
    })
    .pipe(autoprefixer())
    .pipe(gulp.dest('./css/'))
    .pipe(minifyCSS())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./css/'));
});

// default task
gulp.task('default', ['js', 'styles', 'watch']);

// watcher
gulp.task('watch', function() {
  gulp.watch('./src/js/*.js', ['js']);
  gulp.watch('./sass/*.scss', ['styles']);
});