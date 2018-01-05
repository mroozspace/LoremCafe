const	gulp	=	require("gulp"),
		sass	=	require("gulp-sass"),
		uglify	=	require("gulp-uglify"),
		htmlMin	=	require("gulp-minify-html"),
		concat	=	require("gulp-concat"),
		cleanCSS=	require('gulp-clean-css'),
		browserSync	=	require("browser-sync").create();


//HTML copy
gulp.task("html", function(){
	gulp.src("src/views/*.html")
		.pipe(htmlMin())
		.pipe(gulp.dest("dest"))
});

//favicon copy
gulp.task("ico", function(){
	gulp.src("src/views/*.ico")
		.pipe(gulp.dest("dest"))
});

// Img copy
gulp.task("img",function(){
	gulp.src("src/public/img/*")
		.pipe(gulp.dest("dest/public/img"))
});
// Javascript copy&minify
gulp.task("js", function(){
	gulp.src("src/public/js/*.js")
		.pipe(concat("main.js"))
		.pipe(uglify())
		.pipe(gulp.dest("dest/public/js"))
});

// minify css
gulp.task("minify-css", ()=>{
	return gulp.src("src/public/stylesheets/*.css")
		.pipe(cleanCSS({compatibility: '*'}))	     
	  	.pipe(gulp.dest('dest/public/stylesheets/css'));
  		// .pipe(gulp.dest('/dest'));
});
// sass compile
gulp.task("sass", function(){
	return gulp.src("src/public/stylesheets/**/*.scss")
		.pipe(sass().on("error", sass.logError))
		// .pipe(gulp.dest("dest/public/stylesheets/css"))
		.pipe(gulp.dest("src/public/stylesheets/css"))
		.pipe(browserSync.stream()); //stream to browser
});

gulp.task("default", ["html", "img", "js", "sass","ico"]);

// watch&serve
gulp.task("serve", ["sass"], function(){

	browserSync.init({
		server: "./dest"
	});

	gulp.watch("src/public/stylesheets/**/*.scss", ["sass"]);
	gulp.watch("src/public/js/*.js", ["js"]).on("change", browserSync.reload);
	gulp.watch("src/views/*.html", ["html"]).on("change", browserSync.reload);
});
