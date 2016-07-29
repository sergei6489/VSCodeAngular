var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var tsc = require('gulp-typescript');
var tslint = require('gulp-tslint');
var tsProject = tsc.createProject('tsconfig.json');
var config = require('./gulp.config')();
var concat = require('gulp-concat')
var browserSync = require('browser-sync');
var superstatic = require('superstatic');
var nodemon = require('gulp-nodemon');

gulp.task('build-client', function() {
    var tsResult = gulp
        .src(config.clientTs)
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProject));
        // копируем systemjs.config.js 
        gulp.src([config.systemjs]).pipe(gulp.dest('./debug/client/'));
        // копируем css
        gulp.src([config.css]).pipe(gulp.dest('./debug/client/css/'));
        // копируем шаблоны angular
        gulp.src([config.partials]).pipe(gulp.dest('./debug/client/views/'));
        // копируем главный html
        gulp.src(['index.html']).pipe(gulp.dest('./debug/client'));
    return tsResult.js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.tsOutputPath));
});

gulp.task('build:server', function () {
	var localProject = tsc.createProject('server/tsconfig.json');
    gulp.src(config.nodeTs)
		.pipe(sourcemaps.init())
        .pipe(tsc(localProject)).js
        .pipe(sourcemaps.write()) 
		.pipe(gulp.dest('./debug/'));
});

gulp.task('nodemon', function (cb) {
	
	var started = false;
	
	return nodemon({
		script: 'debug/server.js'
	}).on('start', function () {
		if (!started) {
			cb();
			started = true; 
		} 
	});
    });

gulp.task('default', [ 'build-client', 'build:server', 'nodemon'],function () {
    gulp.watch([config.clientTs,"index.html"], ['build-client',browserSync.reload]);
    gulp.watch([config.nodeTs],['build-server']);
     browserSync.init(null, {
		proxy: "http://localhost:3000",
        files: ['debug/**/*.js', 'debug/**/*.html'],
        injectChanges: true,
        logFileChanges: false,
        logLevel: 'silent',    
        notify: true,
        reloadDelay: 3000,
        port: 5000,
	});
}); 
