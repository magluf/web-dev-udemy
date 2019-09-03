var gulp = require('gulp'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  cssvars = require('postcss-simple-vars'),
  nested = require('postcss-nested'),
  cssImport = require('postcss-import');

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
  gulp.watch('./app/index.html', () => {
    gulp.start('html');
  });

  gulp.watch('./app/assets/styles/**/*.css', () => {
    gulp.start('styles');
  });
});
