// Variables and requirements

var gulp = require('gulp');
var VIUR = {
	css: require('viur-ignite-css'),
	js: require('viur-ignite-js'),
	icons: require('viur-ignite-icons'),
	html: require('viur-ignite-html'),
	compressor: require('viur-ignite-compressor')
}

var srcpaths = {
	html: './sources/html/**/*',
	less: './sources/less/**/*.less',
	js: './sources/js/**/*.js',
};

// Tasks

// compilation and postproduction of LESS to CSS
gulp.task('css', function () {
	return VIUR.css.build()
});

// compilation of JS
gulp.task('js', function () {
	return VIUR.js.build()
});

// build icon classes
gulp.task('icons', function () {
	return VIUR.icons.build()
});

// compression
gulp.task('compress', function () {
	return VIUR.compressor.build({
		index: "./sources/html/_layout.html",
	})
});

// html rendering
gulp.task('html', function () {
	return VIUR.html.build()
});

// create source folder with prototype style.less
// create source folder with prototype app.js
// create source folder with icons
gulp.task('init', function () {
	//VIUR.css.init();
	//VIUR.js.init();
	VIUR.icons.init({overwrite:true});
});

// watch tasks
gulp.task('watch', function () {
	gulp.watch(srcpaths.less, ['css']);
	gulp.watch(srcpaths.js, ['js']);
	gulp.watch(srcpaths.html, ['html']);
});

// default rendering
gulp.task('default', ['css', 'js', 'html']);