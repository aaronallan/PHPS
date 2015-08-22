'use strict';
 
module.exports = function(grunt) {
	
	grunt.initConfig({
	 	
	 	/* Get package meta data */
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'assets/css/style.css' : 'assets/scss/style.scss'
				}
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('compile', [
	  'sass',
	  'watch'
	]);
};