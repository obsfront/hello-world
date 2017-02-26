// VAR
var gulp = require('gulp');
var pug = require('gulp-pug2');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');

// TASK
gulp.task('pug', function(){
  return gulp.src('./source/*.pug')
  .pipe(pug({locals: './source/*.pug'}))
  .pipe(gulp.dest('./dist/'))
})

gulp.task('sass', function(){
  return gulp.src('./source/sass/*.scss')
  .pipe(sass())
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(rename('main.min.css'))
  .pipe(gulp.dest('./dist/css/'))
})

gulp.task('jshint', function(){
  return gulp.src('./source/js/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter('default'))
})

gulp.task('uglify', function(){
  return gulp.src('./source/js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('./dist/js/'))
})

// WATCH
gulp.task('watch', function(){
  gulp.watch(['./source/*.pug'],['pug'])
  gulp.watch(['./source/sass/*.scss'],['sass'])
  gulp.watch(['./source/js/*.js'],['uglify'])
})

// TASK PRINCIPAL
gulp.task('default',['pug','jshint','sass','uglify','watch']);
