'use strict';
 
module.exports = function(grunt) {
	
	grunt.initConfig({
	 	
	 	/* Get package meta data */
		pkg: grunt.file.readJSON('package.json'),
		project: {
			app: '',
			assets: '<%= project.app %>/assets',
			src: '<%= project.assets %>/src',
			css: [
				'<%= project.src %>/assets/scss/style.scss'
			],
			js: [
				'<%= project.src %>assets/js/*.js'
			]
		},
		sass: {
		  dev: {
		    options: {
		      style: 'expanded',
		      compass: true
		    },
		    files: {
		      '<%= project.assets %>/css/style.css': '<%= project.css %>'
		    }
		  },
		  dist: {
		    options: {
		      style: 'compressed',
		      compass: true
		    },
		    files: {
		      '<%= project.assets %>/css/style.css': '<%= project.css %>'
		    }
		  }
		},
		watch: {
		  sass: {
		    files: '<%= project.src %>/scss/{,*/}*.{scss,sass}',
		    tasks: ['sass:dev']
		  }
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('compile', [
	  'sass:dev',
	  'watch'
	]);
};