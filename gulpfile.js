var gulp = require('gulp'),
  watch = require('gulp-watch'),
  browserSync = require('browser-sync').create(),
  autoprefixer = require('autoprefixer'),
  postcss = require('gulp-postcss');

gulp.task('styles', function () {
  return gulp.src('./style.css')
    .pipe(postcss([autoprefixer]))
    .pipe(gulp.dest('./styles'));
})

gulp.task('watch', function () {

  browserSync.init({
    notify: false,
    server: {
      baseDir: "./"
    }
  });

  watch('./index.html', function () {
    browserSync.reload();
  });

  watch('./style.css', function () {
    gulp.start('cssInject');
  });

});

gulp.task('cssInject', ['styles'], function () {
  return gulp.src('./styles/style.css')
    .pipe(browserSync.stream());
});