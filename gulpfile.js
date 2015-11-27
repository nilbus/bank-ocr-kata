var path = require('path');
var gulp = require('gulp');
var eslint = require('gulp-eslint');
var excludeGitignore = require('gulp-exclude-gitignore');
var jasmine = require('gulp-jasmine');
var JasmineSpecReporter = require('jasmine-spec-reporter');
var nsp = require('gulp-nsp');
var babel = require('gulp-babel');
var del = require('del');

// Initialize the babel transpiler so ES2015 files gets compiled
// when they're loaded
require('babel-core/register');

gulp.task('static', function () {
  return gulp.src('**/*.js')
    .pipe(excludeGitignore())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('nsp', function (cb) {
  nsp({package: path.resolve('package.json')}, cb);
});

gulp.task('test', function () {
  return gulp.src('spec/*Spec.js')
    .pipe(jasmine({reporter: new JasmineSpecReporter({displayStacktrace: 'all'})}));
    // .pipe(jasmine({includeStackTrace: true}));
});

gulp.task('babel', ['clean'], function () {
  return gulp.src('lib/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});

gulp.task('clean', function () {
  return del('dist');
});

gulp.task('prepublish', ['nsp', 'babel']);
gulp.task('default', ['static', 'test']);
