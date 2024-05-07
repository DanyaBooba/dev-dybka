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
		.src(["src/*.html", "src/courses/**/*.html"])
		.pipe(nunjucks.compile())
		.pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
		.pipe(gulp.dest("dist"));
});

// Styles

gulp.task("styles", () => {
	return gulp
		.src(["src/css/*.css"])
		.pipe(autoprefixer())
		.pipe(cssconcat("index.css"))
		.pipe(cssmin())
		.pipe(gulp.dest("dist/css"));
});

// Styles Const

gulp.task("styles:const", () => {
	return gulp
		.src("src/css/const/*.css")
		.pipe(cssmin())
		.pipe(gulp.dest("dist/css"));
});

// JS

gulp.task("js", () => {
	return gulp.src("src/js/**/*.js").pipe(gulp.dest("dist/js"));
});

// Images

gulp.task("images", () => {
	return gulp.src("src/img/**/*").pipe(gulp.dest("dist/img"));
});

// Courses

gulp.task("courses", () => {
	return gulp
		.src([
			"src/courses/**/*.svg",
			"src/courses/**/*.png",
			"src/courses/**/*.jpg",
			"src/courses/**/*.webp",
			"src/courses/**/*.avi",
			"src/courses/**/*.jfif",
			"src/courses/**/*.jpeg",
			"src/courses/**/*.zip",
		])
		.pipe(gulp.dest("dist/"));
});

// Fonts

gulp.task("fonts", () => {
	return gulp.src("src/fonts/**/*").pipe(gulp.dest("dist/fonts"));
});

// Watch

gulp.task("watch", () => {
	gulp.watch("public/**/*.html", gulp.series("html"));
	gulp.watch("src/**/*.css", gulp.series("styles", "styles:const"));
	gulp.watch("src/**/*.js", gulp.series("js"));
	gulp.watch(
		["src/fonts/**/*", "src/img/**/*", "src/courses/**/*"],
		gulp.series("fonts", "images", "courses")
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
			"styles",
			"styles:const",
			"js",
			"fonts",
			"images",
			// "htaccess",
			"courses"
		),
		gulp.parallel("watch", "serve")
	)
);
