const gulp = require('gulp');

// --------------
// BABEL
// --------------
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');

gulp.task('babel', () =>
    gulp.src('./src/scripts/**/*.js')
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(concat('main.js'))
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist/scripts'))
);