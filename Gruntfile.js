'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      src: ['lib/*.js', 'models/**/*.js', 'server.js', 'routers/**/*.js', 'app/js/**/*.js']
    },

    jscs: {
      src: ['app/js/**/*.js', 'server.js', 'lib/**/*.js'],
      options: {
        config: '.jscsrc'
      }
    },

    simplemocha: {
      src: ['test/**/*.js']
    },

    clean: {
      dev: {
        src: ['build/']
      }
    },

    copy: {
      dev: {
        cwd: 'app/',
        src: ['**/*.html', 'css/**/*.css'],
        expand: true,
        dest: 'build/'
      }
    },

    browserify: {
      dev: {
        src: ['app/js/**/*.js'],
        dest: 'build/bundle.js',
        options: {
          transform: ['debowerify']
        }
      },
      test: {
        src: ['test/client/**/*.js'],
        dest: 'test/test_bundle.js',
        options: {
          transform: ['debowerify']
        }
      }
    },

    sass: {
      dist: {
        files: {
          'build/main.css': 'app/sass/main.sass'
        }
      }
    }
  });
  grunt.registerTask('lint', ['jshint', 'jscs']);
  grunt.registerTask('build:dev', ['clean:dev', 'lint', 'browserify:dev', 'sass', 'copy:dev']);
  grunt.registerTask('build:test', ['browserify:test']);
  grunt.registerTask('test', ['lint', 'simplemocha']);
  grunt.registerTask('default', ['test']);
};
