var gulp        = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var sass        = require('gulp-sass');

var baseurl = 'app1';
// Static server
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: './' + baseurl
        }
    });
});

// or...

// gulp.task('browser-sync', function() {
//     browserSync({
//         proxy: "yourlocal.dev"
//     });
// });

gulp.task('sass', function () {
	console.log("AAA");
    gulp.src( baseurl + '/scss/**/*.scss')
   		.pipe(sass())
        .pipe(gulp.dest('css'));
    reload();
});
var reloadbrowser = function() {
	reload();
}
gulp.task('default', ['sass', 'browser-sync'], function () {
	var array = [
		baseurl + "/index.html",
		baseurl + "/views/**/*.html",
		baseurl + "/service/**/*.js",
		baseurl + "/js/**/*.js",
		baseurl + "/directive/**/*.js",
		baseurl + "/directive/**/*.html"
	];
    gulp.watch( "app1/scss/**/*.scss", ['sass']);
    gulp.watch( array, reloadbrowser )
});