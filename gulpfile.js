const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");

gulp.task('sass', function () {
    return gulp.src('public/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('public/css'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(cleanCSS())
        .pipe(gulp.dest('public/css'))
});

const sassTask = gulp.task('sass');

gulp.task('watch', function () {
    gulp.watch('public/scss/**/*.scss', gulp.series(['sass']));
});
const watchTask = gulp.task('watch');

exports.build = gulp.series(sassTask, watchTask);