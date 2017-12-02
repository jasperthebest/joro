module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    compass: {
      dev: {
        options: {
          config: 'config.rb',
          force: true
        }
      }
    },
    concat: {
      options: {
        stripBanners: true,
        options: {
          block: true,
          line: true
        }
      },
      js: {
        src: ['build/js/appeared.js', 'build/js/slick.min.js', 'build/js/app/main.js'],
        dest: 'js/main.js'
      }
    },
    uglify: {
      options: {
        preserveComments: false
      },
      build: {
        src: 'js/main.js',
        dest: 'js/main.min.js'
      }
    },
    watch: {
      dev: {
        files: ['sass/*.scss','sass/css/*.css'],
        tasks: ['compass'],
        options: {
          livereload: true,
        }
      },
      js: {
        files: ['build/**/*.js'],
        tasks: ['concat','uglify'],
        options: {
          livereload: true,
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['compass','concat','uglify','watch']);
};