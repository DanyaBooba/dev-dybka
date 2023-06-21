const gulp = require("gulp");
const htmlmin = require("gulp-htmlmin");
const cssmin = require("gulp-cssmin");
const cssconcat = require("gulp-concat-css");
const autoprefixer = require("gulp-autoprefixer");
const sync = require("browser-sync");

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

gulp.task("stylesindex", () => {
	return gulp
		.src(["src/_css/*.css", "src/_css/adaptive/*.css"])
		.pipe(autoprefixer())
		.pipe(cssconcat("index.css"))
		.pipe(cssmin())
		.pipe(gulp.dest("dist/css"));
});

// Styles:const

gulp.task("stylesconst", () => {
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

// Media

gulp.task("media", () => {
	return gulp.src("src/_media/**/*").pipe(gulp.dest("dist/img"));
});

// Fonts

gulp.task("fonts", () => {
	return gulp.src("src/_fonts/**/*").pipe(gulp.dest("dist/fonts"));
});

// Htaccess

gulp.task("htaccess", () => {
	return gulp.src("src/.htaccess").pipe(gulp.dest("dist/"));
});

// API

gulp.task("api", () => {
	return gulp.src("src/api/**/*").pipe(gulp.dest("dist/api/"));
});

// Watch

gulp.task("watch", () => {
	gulp.watch("public/**/*.html", gulp.series("html"));
	gulp.watch("src/**/*.css", gulp.series("stylesindex", "stylesconst"));
	gulp.watch("src/**/*.js", gulp.series("javascript"));
	gulp.watch(
		["src/_fonts/**/*", "src/_media/**/*", "src/api/**/*"],
		gulp.series("fonts", "media", "api")
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
			"stylesindex",
			"stylesconst",
			"javascript",
			"fonts",
			"media",
			"htaccess",
			"api"
		),
		gulp.parallel("watch", "serve")
	)
);
