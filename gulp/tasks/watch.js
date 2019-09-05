var gulp = require('gulp'),
  browserSync = require('browser-sync').create();

gulp.task('watch', () => {
  browserSync.init({
    server: {
      baseDir: 'app'
    }
  });

  gulp.watch('./app/index.html', () => {
    browserSync.reload();
  });

  gulp.watch('./app/assets/styles/**/*.css', () => {
    gulp.start('cssInject');
  });
});

gulp.task('cssInject', ['styles'], () => {
  return gulp.src('./app/temp/styles/styles.css').pipe(browserSync.stream());
});
