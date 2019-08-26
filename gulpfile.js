/* eslint no-param-reassign: "off" */
const {
  src, dest, watch, parallel,
} = require('gulp');
const sass = require('gulp-dart-sass');
const autoprefixer = require('gulp-autoprefixer');
const minifyCSS = require('gulp-csso');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

function css() {
  return src('./css/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      cascade: false,
    }))
    .pipe(minifyCSS())
    .pipe(rename((path) => {
      path.basename += '.min';
    }))
    .pipe(dest('./build'));
}

function js() {
  return src('./js/index.js')
    .pipe(babel({
      presets: ['@babel/env'],
    }))
    .pipe(uglify())
    .pipe(rename((path) => {
      path.basename += '.min';
    }))
    .pipe(dest('./build'));
}

function isWatch() {
  watch('./css/*.scss', css);
  watch('./js/*.js', js);
}
exports.default = parallel(css, js, isWatch);
