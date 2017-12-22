var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function () {
  gulp.src('scss/style.scss') // Leo el archivo scss
    .pipe(sass()) // Convierto el contenido del archivo index.scss a CSS
    .pipe(gulp.dest('css')); // El CSS generado lo guardamos en la carpeta css
});

// Tarea que observa cambios en 'scss'
// En su primera ejecución lanzará también las tareas que pasamos como segundo parámetro en la función, default en este caso
gulp.task('watch', ['default'], function () {
  gulp.watch('scss/*.scss', ['default']);  // Lanza la tarea 'default' cuando observa cambios en cualquier scss
});
