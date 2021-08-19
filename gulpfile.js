var gulp = require("gulp"),
  pug = require("gulp-pug"),
  changed = require('gulp-changed'),
  cleanCSS = require('gulp-clean-css'),
  plumber = require("gulp-plumber"),

  uglify = require("gulp-uglify"),
  notify = require("gulp-notify"),
  rename = require("gulp-rename"),
  webpack = require("webpack"),
  webpackStream = require('webpack-stream'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  browserSync = require('browser-sync').create(),
  concat = require('gulp-concat');

  gulp.task('browser-sync', function () {
    browserSync.init({
      server: {
        baseDir: './public',
      },
      host: "192.168.100.7",
      port: 3000,
    })
  });

  gulp.task('html', function () {
    return gulp.src('./src/pages/*.pug')
      .pipe(changed('public', { extension: '.html' }))
      .pipe(plumber())
      .pipe(pug({ pretty: true }).on('error', notify.onError()))
      .pipe(browserSync.stream())
      .pipe(gulp.dest('./public/'))
      .on('end', browserSync.reload);
  });
  
  gulp.task('css', function () {
    return gulp.src(['./src/styles/*.scss'])
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

  gulp.task('scripts', function () {
    return gulp.src('./src/js/app.js')
      .pipe(plumber())
      .pipe(webpackStream({
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
  
  gulp.task('watch', function () {
    gulp.watch(['./src/pages/*.pug'], gulp.parallel('html'));
    gulp.watch(['./src/blocks/*.pug'], gulp.parallel('html'));

    gulp.watch(['./src/styles/*.scss'], gulp.parallel('css'));
    gulp.watch(['./src/styles/*/*.scss'], gulp.parallel('css'));
    gulp.watch(['./src/blocks/*/*.scss'], gulp.parallel('css'));
    gulp.watch(['./src/items/*/*.scss'], gulp.parallel('css'));
    
    gulp.watch(['./src/js/*.js'], gulp.parallel('scripts'));
    gulp.watch(['./src/blocks/*/*.js'], gulp.parallel('scripts'));
    gulp.watch(['./src/items/*/*.js'], gulp.parallel('scripts'));
  });

  gulp.task('default', gulp.parallel('html', 'css', 'scripts', 'watch', 'browser-sync' ) );
