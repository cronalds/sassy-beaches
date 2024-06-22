import { src, dest, watch, series } from "gulp";
import gulpSass from "gulp-sass";
import * as sass from "sass";
import cleanCSS from "gulp-clean-css";
const s = gulpSass(sass);

function buildStyles() {
  // multiple file output
  // src(["./scss/main.scss", "./scss/test.scss"])
  return src(["./scss/sassy-beaches.scss"])
    .pipe(s().on("error", s.logError))
    .pipe(dest("./css"));
}

function buildMiniStyles() {
  // run build styles first then minify
  buildStyles();

  // multiple file output
  // src(["./scss/main.scss", "./scss/test.scss"])
  return src(["./css/sassy-beaches.css"])
    .pipe(cleanCSS({allowEmpty: true}))
    .pipe(dest("./css/minified"));
}

function watchTask() {
  watch("./scss/**/*.scss", buildMiniStyles);
  return Promise.resolve();
}

export default series(buildStyles, buildMiniStyles, watchTask);

