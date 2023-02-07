const gulp = require("gulp"),
    cleanCss = require("gulp-clean-css"),
    uglify = require("gulp-uglify"),
    concat = require("gulp-concat"),
    imagemin = require("gulp-imagemin"),
    autoprefixer = require("gulp-autoprefixer"),
    sass = require("gulp-sass")(require('sass'))
    fileinclude = require('gulp-file-include');
    connect = require('gulp-connect');



function connectserver(cb) {
    connect.server({
        root: 'dist',
        livereload: true,
        port: 4000,
      });
      cb();
}
       
function init(cb) {
    gulp.src(['./src/assets/bootstrap-5.0.2-dist/**/*'])
      .pipe(gulp.dest('./dist/assets/bootstrap/'))
      .pipe(connect.reload());
    cb();
}


function html(cb) {
    gulp.src(['./src/html/*.html','./src/html/*/*.html'])
      .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
      }))
      .pipe(gulp.dest('./dist/'))
      .pipe(connect.reload());
    cb();
}


gulp.task('fileinclude', function() {
    gulp.src(['index.html'])
      .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
      }))
      .pipe(gulp.dest('./'));
  });


function js(cb){
    return gulp.src(["src/assets/js/jquery-vertical-loop.js","src/assets/js/download-form.js", "src/assets/js/app.js"])
        .pipe(concat("app.min.js"))
        // .pipe(uglify())
        .pipe(gulp.dest("dist/assets/js/"))
        .pipe(connect.reload());
    cb();
}

function scss(cb) {
  return (
    gulp
      .src("src/assets/scss/app.scss")
      .pipe(sass().on("error", sass.logError))
      .pipe(concat("app.min.css"))
      // .pipe(cleanCss({compatibility: "ie8"}))
      .pipe(autoprefixer("last 2 version", "safari 5", "ie 8", "ie 9"))
      .pipe(gulp.dest("dist/assets/css/"))
      .pipe(connect.reload())
  );

  cb();
}

function copyscss(cb) {
  gulp.src(["./src/assets/scss/**/*"]).pipe(gulp.dest("./dist/assets/scss/"));
  cb();
}

function imageprocess(cb) {
  gulp
    .src("./src/assets/img/**/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/assets/img/"))
    .pipe(connect.reload());

  cb();
}

function fonts(cb) {
  gulp
    .src("src/assets/fonts/**/*")
    .pipe(gulp.dest("dist/assets/fonts/"))
    .pipe(connect.reload());

  cb();
}

function video(cb) {
  gulp
    .src("src/assets/video/**/*")
    .pipe(gulp.dest("dist/assets/video/"))
    .pipe(connect.reload());

  cb();
}

function watch(cb) {
  gulp.watch("./src/html/*.html", gulp.series(html));
  gulp.watch("./src/html/*/*.html", gulp.series(html));
  gulp.watch("./src/assets/js/*.js", gulp.series(js));
  gulp.watch("./src/assets/scss/**/*.scss", gulp.series(scss, copyscss));
  gulp.watch("./src/assets/img/*", gulp.series(imageprocess));
  gulp.watch("./src/assets/fonts/*", gulp.series(fonts));
  gulp.watch("./src/assets/video/*", gulp.series(video));
  cb();
}

function service(cb) {
  const tasks = gulp.series(connectserver, watch);
  tasks();
  cb();
}

exports.default = gulp.parallel(
  init,
  html,
  js,
  scss,
  copyscss,
  fonts,
  video,
  imageprocess,
  service,
  watch
);
exports.build = gulp.parallel(
  init,
  html,
  js,
  scss,
  copyscss,
  imageprocess,
  imageprocess,
  fonts,
  video
);
exports.service = gulp.parallel(init, connectserver, watch);