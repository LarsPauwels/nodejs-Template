const { src, dest, watch, parallel, series } = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();

function sass2css(done) {
	src("./css/sass/files/*.scss")
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(dest("./css/"))
		.pipe(browserSync.stream());

	done();
}

function essix2js(done) {
	src("./js/es6/*")
		.pipe(babel({presets: ['@babel/env']}))
		.pipe(uglify())
		.pipe(dest("./js/"))
		.pipe(browserSync.stream());

	done();
}

function reBrowserSync(done) {
	src("./*")
		.pipe(browserSync.stream());

	done();
}

function doBrowserSync() {
	browserSync.init({
        proxy: "http://localhost/root/portfolio_v2/"
	});
}

watch('./css/sass/**/*.scss', parallel(sass2css));
watch('./js/es6/**/*.js', parallel(essix2js));
watch('./*.php', parallel(reBrowserSync));
watch('./*html', parallel(reBrowserSync));

module.exports.convert = parallel(sass2css, essix2js);
module.exports.default = parallel(sass2css, essix2js, doBrowserSync);