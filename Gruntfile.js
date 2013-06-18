module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-symlink');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    less: {
      bootstrap: {
        files: {
          'web/built/css/labs.css' : 'assets/less/labs.less'
        }
      }
    },
    concat: {
      dist: {
        src: [
          'assets/vendor/jquery/jquery.js',
          'assets/vendor/bootstrap/js/bootstrap-affix.js',
          'assets/vendor/bootstrap/js/bootstrap-alert.js',
          'assets/vendor/bootstrap/js/bootstrap-button.js',
          'assets/vendor/bootstrap/js/bootstrap-carousel.js',
          'assets/vendor/bootstrap/js/bootstrap-dropdown.js',
          'assets/vendor/bootstrap/js/bootstrap-modal.js',
          'assets/vendor/bootstrap/js/bootstrap-tooltip.js',
          'assets/vendor/bootstrap/js/bootstrap-popover.js',
          'assets/vendor/bootstrap/js/bootstrap-scrollspy.js',
          'assets/vendor/bootstrap/js/bootstrap-tab.js',
          'assets/vendor/bootstrap/js/bootstrap-transition.js',
          'assets/vendor/bootstrap/js/bootstrap-typeahead.js',
          'assets/js/labs.js',
        ],
        dest: 'web/built/js/labs.js'
      }
    },
    watch: {
      css: {
        files: ['assets/less/*.less'],
        tasks: ['less']
      },
      js: {
        files: ['assets/js/*.js'],
        tasks: ['concat']
      }
    }
  });

  // Default task(s).
  grunt.registerTask('default', ['less', 'concat']);

};