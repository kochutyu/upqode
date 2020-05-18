const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const cssmin = require('gulp-cssmin');
const plumber = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const minify = require('gulp-minify');


//? --------------
//? GULP
//? --------------
gulp.task('default', done => {
    gulp.watch('./src/styles/**/*.scss', gulp.series('sass'));
    gulp.watch('./src/scripts/**/*.js', gulp.series('js'));
    done()
});





//? --------------
//? BABEL
//? --------------
gulp.task('js', done => {
    gulp.src('./src/scripts/**/*.js')
        .pipe(plumber())
        .pipe(babel({
            presets: [
                ['@babel/env'],
            ]
        }))
        .pipe(concat('main.js'))
        .pipe(sourcemaps.init())
        .pipe(minify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/scripts'))
    done();
});





//? --------------
//? SASS
//? --------------
gulp.task('sass', done => {
    gulp.src('./src/styles/**/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(concat('main.css'))
        .pipe(sourcemaps.init())
        .pipe(cssmin())
        .pipe(rename('main.min.css'))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/style'));
    done();
});