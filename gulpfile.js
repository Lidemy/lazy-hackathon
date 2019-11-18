var gulp = require('gulp');
var webp = require('gulp-webp');
var fontSpider = require( 'gulp-font-spider' );
var webpHTML = require('gulp-webp-html');
var uncss = require('gulp-uncss')
var concat = require('gulp-concat')
var cssmin = require('gulp-clean-css')
var terser = require('gulp-terser')
var htmlmin = require('gulp-htmlmin')
// gulp.task('webp', () => (
//   gulp.src('./imagecompress/*')
//     .pipe(webp())
//     .pipe(gulp.dest('./build/image'))
// ));

// gulp.task('fontspider', function() {
// 	return gulp.src('./index.html')
// 		.pipe(fontSpider());
// });

// gulp.task('html', done => {
//   gulp.src('./index.html')
//     .pipe(webpHTML())
//     .pipe(gulp.dest('./build'));
//     done();
// });

// gulp.task('hi', done => {
//   console.log('hi');
//   done();
// })

gulp.task('uncss', () => {
  return gulp.src('./js/slick/*.css')
  .pipe(uncss({
      html: ['./slick.html'],
      ignore: [
        ".fade",
        ".fade.in",
        ".collapse",
        ".collapse.in",
        ".collapsing",
        ".alert-danger",
        ".open",
        "/open+/"
    ]
  }))
  .pipe(gulp.dest('./build/css'));
})

gulp.task('concatcss', () => {
  return gulp.src(['./build/css/bootstrap.css', './build/css/slick.css','./build/css/slick-theme.css', './css/style.css'])
  .pipe(concat('style.css'))
  .pipe(gulp.dest('./build/css'))
})

gulp.task('concatJS', () => {
  return gulp.src(['./build/js/slick.js','./build/js/typed.js', './js/index.js'])
          .pipe(concat('buddle.js'))
          .pipe(gulp.dest('build/js'))
})

gulp.task('cssmin', () => {
  return gulp.src('./build/css/style.css')
            .pipe(cssmin())
            .pipe(gulp.dest('build/css'))
})

gulp.task('terser', () => {
  return gulp.src('./build/js/buddle.js')
    .pipe(terser())
    .pipe(gulp.dest('./build/js'))
})

gulp.task('htmlmin', () => {
  return gulp.src('./index.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true,
      collapseBooleanAttributes: true,
      removeEmptyAttributes: true,//刪除所有空格作屬性值 <input id="" /> ==> <input />
      removeStyleLinkTypeAttributes: true,//刪除<style>和<link>的type="text/css"

     }))
    .pipe(gulp.dest('./build'))
})

// gulp.task('default',gulp.series('htmlmin'));
gulp.task('default',gulp.series(['concatcss', 'cssmin']));