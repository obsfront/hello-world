// VAR
var gulp = require('gulp');
var pug = require('gulp-pug2');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');

// TASK
gulp.task('pug', function(){
  return gulp.src('./source/*.pug')
  .pipe(pug({locals: './source/*.pug'}))
  .pipe(gulp.dest('./dist/'))
})

gulp.task('sass', function(){
  return gulp.src('./source/sass/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('./dist/css/'))
})

gulp.task('jshint', function(){
  return gulp.src('./source/js/*.scss')
  .pipe(jshint())
  .pipe(jshint.reporter('default'))
})

// WATCH
gulp.task('watch', function(){
  gulp.watch(['./source/*.pug'],['pug'])
  gulp.watch(['./source/sass/*.scss'],['sass'])
})

// TASK PRINCIPAL
gulp.task('default',['pug','sass','jshint','watch']);
