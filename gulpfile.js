import { src, dest, watch, series } from "gulp";
import gulpSass from "gulp-sass";
import * as sass from "sass";
const s = gulpSass(sass);

function buildStyles() {
  // multiple file output
  // src(["./scss/main.scss", "./scss/test.scss"])
  return src(["./scss/main.scss"])
    .pipe(s().on("error", s.logError))
    .pipe(dest("./css"));
}

function watchTask() {
  watch("./scss/**/*.scss", buildStyles);
  return Promise.resolve();
}

export default series(buildStyles, watchTask);

