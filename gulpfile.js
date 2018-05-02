var gulp = require('gulp'),
    uglify = require('gulp-uglify'),     // Минификация JS
    sequence = require('run-sequence'),  // Последовательное выполнение задач
    rename = require("gulp-rename"),     // Переименовывает файлы
    sass = require('gulp-sass'),         // Компиляция SCSS
    concat = require('gulp-concat'),     // Объединение файлов в один
    autoprefixer = require('gulp-autoprefixer'),     // Префиксы для CSS
    cssnano = require('gulp-cssnano'),   // Минификация CSS
    postcss = require('gulp-postcss'),   // PostCSS
    watch = require('gulp-watch');


gulp.task('js:build', function () {
    gulp.src([
        'js/jquery-3.3.1.min.js',
        'js/jquery-ui.min.js',
        'js/jquery.ui.touch-punch.min.js',
        'js/bootstrap.min.js',
        'js/moment.min.js',
        'js/script.js'
    ])
    //.pipe(uglify({

    //}))
        .pipe(concat('app.min.js')) // Объединяет всё в один файл
        .pipe(gulp.dest('js'))
});


gulp.task('style:build', function () {
    gulp.src([
        'css/bootstrap.min.css',
        'css/jquery-ui.min.css',
        'css/style.scss'
    ])
        .pipe(sass().on('error', sass.logError)) // Компилирует SCSS
        .pipe(concat('app.min.css')) // Объединяет всё в один файл
        .pipe(postcss([
            require('autoprefixer')(),
            require('cssnano')()
        ]))
        .pipe(gulp.dest('css'))
});

gulp.task('watch', function(){
    gulp.watch('css/*.scss', ['style:build']);
});

gulp.task('default', ['js:build', 'style:build'], function () {
    console.log('Success!');
});
