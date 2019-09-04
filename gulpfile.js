var gulp = require('gulp'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  cssvars = require('postcss-simple-vars'),
  nested = require('postcss-nested'),
  cssImport = require('postcss-import'),
  browserSync = require('browser-sync').create();

gulp.task('default', () => {
  console.log('All good.');
});

gulp.task('html', () => {
  console.log('HTML stuff.');
});

gulp.task('styles', () => {
  return gulp
    .src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, nested, cssvars, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
});

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
