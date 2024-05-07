const gulp = require("gulp");
const sync = require("browser-sync");
const cssmin = require("gulp-cssmin");
const htmlmin = require("gulp-htmlmin");
const nunjucks = require("gulp-nunjucks");
const cssconcat = require("gulp-concat-css");
const autoprefixer = require("gulp-autoprefixer");

// HTML

gulp.task("html", () => {
	return gulp
		.src("public/**/*.html")
		.pipe(
			htmlmin({
				collapseWhitespace: true,
				removeComments: true,
			})
		)
		.pipe(gulp.dest("dist"));
});

// Styles:index

gulp.task("styles:index", () => {
	return gulp
		.src(["src/_css/*.css", "src/_css/adaptive/*.css"])
		.pipe(autoprefixer())
		.pipe(cssconcat("index.css"))
		.pipe(cssmin())
		.pipe(gulp.dest("dist/css"));
});

// Styles:const

gulp.task("styles:const", () => {
	return gulp
		.src("src/_css/__const/*.css")
		.pipe(autoprefixer())
		.pipe(cssmin())
		.pipe(gulp.dest("dist/css"));
});

// JavaScript

gulp.task("javascript", () => {
	return gulp.src("src/_js/**/*.js").pipe(gulp.dest("dist/js"));
});

// Img:media

gulp.task("img:media", () => {
	return gulp.src("src/_media/**/*").pipe(gulp.dest("dist/img"));
});

// Data:courses

gulp.task("data:courses", () => {
	return gulp
		.src([
			"src/courses/**/*.svg",
			"src/courses/**/*.png",
			"src/courses/**/*.jpg",
			"src/courses/**/*.jpeg",
			"src/courses/**/*.zip",
		])
		.pipe(gulp.dest("dist/courses/"));
});

// Fonts

gulp.task("fonts", () => {
	return gulp.src("src/_fonts/**/*").pipe(gulp.dest("dist/fonts"));
});

// Htaccess

// gulp.task("htaccess", () => {
// 	return gulp.src("src/.htaccess").pipe(gulp.dest("dist/"));
// });

// Watch

gulp.task("watch", () => {
	gulp.watch("public/**/*.html", gulp.series("html"));
	gulp.watch("src/**/*.css", gulp.series("styles:index", "styles:const"));
	gulp.watch("src/**/*.js", gulp.series("javascript"));
	gulp.watch(
		["src/_fonts/**/*", "src/_media/**/*", "src/courses/**/*"],
		gulp.series("fonts", "img:media", "data:courses")
	);
});

// Server

sync.create();
gulp.task("serve", () => {
	sync.init({
		ui: false,
		notify: false,
		server: {
			baseDir: "dist",
		},
	});
});

// Default

gulp.task(
	"default",
	gulp.series(
		gulp.parallel(
			"html",
			"styles:index",
			"styles:const",
			"javascript",
			"fonts",
			"img:media",
			// "htaccess",
			"data:courses"
		),
		gulp.parallel("watch", "serve")
	)
);
