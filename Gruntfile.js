/*
 * grunt-ui-docs
 * https://github.com/vieron/grunt-ui-docs
 *
 * Copyright (c) 2014 vieron
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    ui_docs: {
      mydocs: {
        title: 'mydocs',
        docsPath: 'test/tmp/',
        docsAssetsPath: 'assets/',
        rawAssetsDir: 'test/fixtures/',
        extrasPath: 'test/',
        js: {
            rawDir: 'js/'
        },
        css: {
            rawDir: 'scss/',
            outputDir: 'css/',
            builtFilePaths: ['test/fixtures/css/built.css']
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'ui_docs', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
