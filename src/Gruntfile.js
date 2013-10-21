module.exports = function(grunt) {

  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  var conf = {
    app: 'site',
    dist: 'dist'
  };

  grunt.initConfig({

    project: conf,
    pkg: grunt.file.readJSON('package.json'),

    // tasks
    clean: ['<%= project.dist %>/'],

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> | version: <%= pkg.version %> | built: <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      single: {
        files: {
          '<%= project.dist %>/bundle.js': ['<%= project.app %>/bundle.js']
        }
      }
    },

    browserify: {
      dist: {
        files: {
          '<%= project.app %>/bundle.js': [ '<%= project.app %>/site.js', '<%= project.app %>/libs/*.js' ]
        }
      }
    },

    watch: {
      code: {
        files: [ '<%= project.app %>/site.js', '<%= project.app %>/libs/*.js' ],
        tasks: ['browserify'],
        nospawn: true
      }
    }

  });

  grunt.registerTask('dev', ['watch']);

};
