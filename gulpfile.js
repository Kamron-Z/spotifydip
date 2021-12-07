let project_folder = 'dist'; // require('path).basename(__dirname);
let source_folder = '#src';

let path = {
   build: {
      html: project_folder + '/',
      css: project_folder + '/css/',
      js: project_folder + '/js/',
      img: project_folder + '/img/',
      fonts: project_folder + '/fonts/'
   },
   src: {
      html: [source_folder + '/html/*.html', '!' + source_folder + '/html/_*.html'],
      css: source_folder + '/scss/style.scss',
      js: source_folder + '/js/app.js',
      img: source_folder + '/img/**/*.{jpg,png,svg,gif,ico,webp,mp4}',
      fonts: source_folder + '/fonts/*.ttf'
   },
   watch: {
      html: source_folder + '/html/*.html',
      css: source_folder + '/scss/**/*.scss',
      js: source_folder + '/js/**/*.js',
      img: source_folder + '/img/**/*.{jpg,png,svg,gif,ico,webp, mp4}'
   },
   clean: './' + project_folder + '/'
}

let {
   src,
   dest
} = require('gulp'),
   gulp = require('gulp'),
   browsersync = require('browser-sync').create(),
   fileinclude = require('gulp-file-include'),
   del = require('del'),
   scss = require('gulp-sass'),
   autoprefixer = require('gulp-autoPrefixer'),
   group_media = require('gulp-group-css-media-queries'),
   clean_css = require('gulp-clean-css'),
   rename = require('gulp-rename'),
   uglify = require('gulp-uglify-es').default,
   webp_css = require('gulp-webpcss')

function browserSync(params) {
   browsersync.init({
      server: {
         baseDir: './' + project_folder + '/'
      },
      port: 3000,
      notify: false
   })
}


function html() {
   return src(path.src.html)
      .pipe(fileinclude())
      .pipe(dest(path.build.html))
      .pipe(browsersync.stream())
}

function css(params) {
   return src(path.src.css)
      .pipe(
         scss({
            outputStyle: 'expanded'
         })
      )
      .pipe(group_media())
      .pipe(autoprefixer({
         overrideBrowserslist: ['last 5 version'],
         cascade: true
      }))
      .pipe(dest(path.build.css))
      .pipe(clean_css())
      .pipe(rename({
         extname: '.min.css'
      }))
      .pipe(webp_css())
      .pipe(dest(path.build.css))
      .pipe(browsersync.stream())
}

function js(params) {
   return src(path.src.js)
      .pipe(fileinclude())
      .pipe(dest(path.build.js))
      .pipe(
         uglify()
      )
      .pipe(rename({
         extname: '.min.js'
      }))
      .pipe(dest(path.build.js))
      .pipe(browsersync.stream())
}

function images() {
   return src(path.src.img)
      .pipe(dest(path.build.img))
      .pipe(src(path.src.img))
      .pipe(dest(path.build.img))
      .pipe(browsersync.stream())
}

function fonts(params) {
   src(path.src.fonts)
      .pipe(dest(path.build.fonts))
}

function watchFiles(params) {
   gulp.watch([path.watch.html], html);
   gulp.watch([path.watch.css], css);
   gulp.watch([path.watch.js], js);
   gulp.watch([path.watch.img], images);
}

function clean(params) {
   return del(path.clean);
}

let build = gulp.series(clean, gulp.parallel(js, css, html, images, fonts));
let watch = gulp.parallel(build, watchFiles, browserSync);

exports.fonts = fonts;
exports.images = images;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;