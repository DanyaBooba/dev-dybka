import gulp from "gulp";
import htmlmin from "gulp-htmlmin";
import fileinclude from "gulp-file-include";
import cssmin from "gulp-cssmin";
import cssconcat from "gulp-concat-css";
import autoprefixer from "gulp-autoprefixer";
import sync from "browser-sync";

// HTML

export const html = () => {
	return gulp
		.src("src/html/**/*.html")
		.pipe(fileinclude())
		.pipe(
			htmlmin({
				collapseWhitespace: true,
				removeComments: true,
			})
		)
		.pipe(gulp.dest("dist"));
};

// Styles:index

export const stylesindex = () => {
	return gulp
		.src("src/css/*.css")
		.pipe(autoprefixer())
		.pipe(cssconcat("index.css"))
		.pipe(cssmin())
		.pipe(gulp.dest("dist/css"));
};

// Styles:const

export const stylesconst = () => {
	return gulp
		.src("src/css/__const/*.css")
		.pipe(autoprefixer())
		.pipe(cssmin())
		.pipe(gulp.dest("dist/css"));
};

// JavaScript

export const javascript = () => {
	return gulp.src("src/js/**/*.js").pipe(gulp.dest("dist/js"));
};

// Media

export const media = () => {
	return gulp.src("src/media/**/*").pipe(gulp.dest("dist/media"));
};

// Fonts

export const fonts = () => {
	return gulp.src("src/fonts/**/*").pipe(gulp.dest("dist/fonts"));
};

// Watch

export const watch = () => {
	gulp.watch("src/**/*.html", gulp.series(html));
	gulp.watch("src/**/*.css", gulp.series(stylesindex, stylesconst));
	gulp.watch("src/**/*.js", gulp.series(javascript));
	gulp.watch(["src/fonts/**/*", "src/media/**/*"], gulp.series(fonts, media));
};

// Server

sync.create();
export const server = () => {
	sync.init({
		ui: false,
		notify: false,
		server: {
			baseDir: "dist",
		},
	});
};

// Default

export default gulp.series(
	gulp.parallel(html, stylesindex, stylesconst, javascript, fonts, media),
	gulp.parallel(watch, server)
);
