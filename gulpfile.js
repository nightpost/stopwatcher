var gulp = require('gulp');
var $ = require('gulp-load-plugins')({lazy:true});
var config = require('./gulp.config')();
var del = require('del');
// show all avalable tasks
gulp.task('help', $.taskListing);
gulp.task('default', ['help']);

// compile sass/scss --> css
gulp.task('styles', ['clean-styles'], function() {
	log('Running css compilation...');
	return gulp
					.src(config.scss) //ADD the config file
					.pipe($.plumber())
					.pipe($.sass())
					.pipe($.autoprefixer({browser: ['last 2 version', '> 3% ']}))
					.pipe(gulp.dest(config.temp));
});

// clean css files inside tmp folder
// releted task to styles
gulp.task('clean-styles', function() {
	log('Clean styles running...');
	var files = config.temp + '**/*.css';
	clean(files);
});

// recompile scss on changes
gulp.task('scss-watcher', function() {
	gulp.watch([config.scss], ['styles']);
});

// log function
function log(msg) {
	console.log('gulp log: ' + msg);
}

// error logger
function errorLogger(error) {
	log('error start');
	log(error);
	log('error finished');
	this.emit('end');
}

// clean function
function clean(path) {
	del(path);
}

