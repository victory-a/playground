module.exports = function (grunt) {
  grunt.initConfig({
      autoprefixer: {
          dist: {
              files: {
                  'style2.css': 'style.css'
              }
          }
      },
      watch: {
          styles: {
              files: ['style.css'],
              tasks: ['autoprefixer']
          }
      }
  });
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');
};