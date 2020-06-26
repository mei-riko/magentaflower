var gulp = require("gulp"),
  rename = require("gulp-rename"),
  pug = require("gulp-pug"),
  changed = require('gulp-changed'),
  cleanCSS = require('gulp-clean-css'),
  plumber = require("gulp-plumber"),

  minifyCSS = require("gulp-csso"),
  uglify = require("gulp-uglify"),
  notify = require("gulp-notify"),
  webpack = require("webpack"),
  image = require('gulp-image'),
  webpackStream = require('webpack-stream'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  newer = require('gulp-newer'),
  browserSync = require('browser-sync').create(),
  concat = require('gulp-concat');

  gulp.task('browser-sync', function () {
    browserSync.init({
      server: {
        baseDir: './public',
      }
    })
  });
  
  
  gulp.task('html', function () {
    return gulp.src('./src/*.pug')
      .pipe(changed('public', { extension: '.html' }))
      .pipe(plumber())
      .pipe(pug({ pretty: true }).on('error', notify.onError()))
      .pipe(browserSync.stream())
      .pipe(gulp.dest('./public/'))
      .on('end', browserSync.reload);
  });

  gulp.task('scripts', function () {
    return gulp.src('./src/js/app.js')
      .pipe(plumber())
      .pipe(webpackStream({
        mode: "production",
        output: {
          filename: 'app.js',
        },
        module: {
          rules: [
            {
              test: /\.(js)$/,
              exclude: /(node_modules)/,
              loader: 'babel-loader',
              query: {
                presets: ['env']
              }
            }
          ]
        },
        externals: {
          jquery: 'jQuery'
        }
      }).on('error', notify.onError()))
      .pipe(gulp.dest('./public/js/'))
      .pipe(uglify())
      .pipe(rename({ suffix: '.min' }))
      .pipe(gulp.dest('./public/js/'))
      .on('end', browserSync.reload);
  });
  
  gulp.task('css', function () {
    return gulp.src(['./src/css/*.scss'])
      .pipe(changed('public', { extension: '.css' }))
      .pipe(plumber())
      .pipe(sass({ outputStyle: 'expanded' }).on("error", notify.onError()))
      .pipe(autoprefixer({
        overrideBrowserslist: ['last 5 versions'],
        cascade: false
      }))
      .pipe(gulp.dest('./public/css/'))
      .on('end', browserSync.reload);
  });
  
  gulp.task('watch', function () {
    gulp.watch(['./src/*.pug'], gulp.parallel('html'));
    gulp.watch(['./src/*/*.pug'], gulp.parallel('html'));
    gulp.watch(['./src/js/*.js'], gulp.parallel('scripts'));
    gulp.watch(['./src/css/*.scss'], gulp.parallel('css'));
    gulp.watch(['./src/css/*/*.scss'], gulp.parallel('css'));
  });
  
  
  gulp.task('default', gulp.parallel('html', 'css', 'scripts', 'watch', 'browser-sync' ) );
