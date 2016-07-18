var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var tsc = require('gulp-typescript');
var tslint = require('gulp-tslint');
var tsProject = tsc.createProject('tsconfig.json');
var config = require('./gulp.config')();
var concat = require('gulp-concat')
var browserSync = require('browser-sync');
var superstatic = require('superstatic');

gulp.task('ts-lint', function() {
    return gulp.src(config.allTs)
        .pipe(tslint())
        .pipe(tslint.report('prose', {
            emitError: false
        }));
})

gulp.task('compile-ts', function() {
    var sourceTsFiles = [
        config.allTs
    ];

    var tsResult = gulp
        .src(sourceTsFiles)
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
    var tsResult = gulp.src('server/**/*')
		.pipe(sourcemaps.init())
        .pipe(tsc(localProject));
	return tsResult.js
        .pipe(sourcemaps.write()) 
		.pipe(gulp.dest('./debug/'))

});

gulp.task('serve', ['ts-lint', 'compile-ts'], function() {
    	
    gulp.watch([config.allTs], ['ts-lint', 'compile-ts']);
	
    browserSync({
        port: 3000,
        files: ['index.html', 'app/**/*.js', 'app/**/*.html'],
        injectChanges: true,
        logFileChanges: false,
        logLevel: 'silent',    
        notify: true,
        reloadDelay: 0,
        server: {
            baseDir: ['./'],
            middleware: superstatic({ debug: false})
        }
    });	
});

gulp.task('default', ['build:server','compile-ts']);
