const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const del = require("del");
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');

gulp.task('mergeSass', () => {
    return gulp.src('sass/**/*.scss')
        .pipe(concat('styles.scss'))
        .pipe(gulp.dest('./sass/'));
})

gulp.task('clean', () => {
    return del([
        'css/styles.css',
        'sass/styles.scss'
    ]);
});

gulp.task('sass', () => {
    return gulp.src('sass/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
})

gulp.task('minify-css', () => {
    return gulp.src('css/styles.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('./css/'));
  });

gulp.task('default', () => {
    browserSync.init({
        server: {
            baseDir: './'
        },
    });

    gulp.watch('sass/**/*.scss', (done) => {
        gulp.series(['clean', 'mergeSass', 'sass'])(done);
    });
});