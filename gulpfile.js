var gulp = require('gulp');
//var mainBowerFiles = require('main-bower-files');
var sass = require('gulp-sass');
//var useref = require('gulp-useref');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
//var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var browserSync = require('browser-sync');
var del = require('del'); 
var runSequence = require('run-sequence');

/*gulp.task('mainfiles', function() {
	return gulp.src(mainBowerFiles())
	.pipe(gulp.dest('dist/mainfiles'))
});*/

gulp.task('sass', function() {
	return gulp.src('app/scss/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({
		stream: true
	}))
});

gulp.task('watch', ['browserSync', 'sass'], function() {
	gulp.watch('app/scss/**/*.scss',['sass']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('browserSync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
	})
});

/*gulp.task('useref', function() {
	return gulp.src('app/*.html')
	.pipe(useref())
	.pipe(gulpIf('*.js', uglify()))
	.pipe(gulpIf('*.css', cssnano()))
	.pipe(gulp.dest('dist'))
});
*/

gulp.task('js', function() {
	return gulp.src('app/js/**/*.js') //path to src of all js files
		.pipe(concat('all.js')) //склеиваем все JS
		.pipe(uglify()) //получившуюся "портянку" минифицируем 
		.pipe(gulp.dest('dist/js/'))
});

gulp.task('css',['sass'], function(){
	return gulp.src('app/css/**/*.css')
	.pipe(cssnano()) //сжимаем
	.pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
	.pipe(gulp.dest('dist/css')); // Выгружаем в папку app/css
});

gulp.task('images', function() {
	return gulp.src('app/img/**/*')
	.pipe(cache(imagemin({
		interlaced: true
	})))
	.pipe(gulp.dest('dist/img'))
});

//gulp.task('fonts', function() {
//	return gulp.src('app/fonts/**/*')
//	.pipe(gulp.dest('dist/fonts'))
//});

gulp.task('clean', function(callback) {
	del('dist')
	return cache.clearAll(callback);
});

gulp.task('clean:dist', function(callback) {
	del(['dist/**/*', '!dist/images', '!dist/images/**/*'], callback)
});

gulp.task('build', function (callback) {
	runSequence(//'clean:dist',
		['sass', 'js', 'images', 'css'],
		callback
	)
});

gulp.task('default', function (callback) {
	runSequence(['sass','browserSync', 'watch'],
		callback
	)
});


