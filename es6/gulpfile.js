var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('js', () => {
    return gulp.src('./src/app.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('./public'));
});

gulp.task('default', ['js'],  () => {
    gulp.watch('src/app.js', ['js']);
});
