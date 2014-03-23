/*
 * Este archivo hace uso de :
 * grunt-contrib-connect
 * grunt-contrib-less
 * grunt-contrib-watch
 *
 * Copyright (c) 2014 "Joan" Joan Peramas Ceras,
 * Licensed under the MIT license.
 */
'use strict';
module.exports = function(grunt){
	//Configuración de Grunt
	grunt.initConfig({
		//JSON de Configuración
		pkg : grunt.file.readJSON("package.json"),
		//CONNECT
		connect: {
		    server: {
		      options: {
		        port: 3000,
		        hostname: '*',
		        open: {
				  target: 'http://localhost:3000/app/index.html'
				},
				useAvailablePort: true
		      }
		    }
		},
		//LESS
		less: {
			development: {
				options: {
					paths: ["app/less"],
					compress: true
				},
				files: {
					"app/css/app.css": "app/less/app.less"
				}
			}
		},
		//OBSERVADOR
		watch: {
			taskLess : {
				files : ["app/less/*.less"],
				tasks : ["less"]
			}
		}
	});
	//LOAD NPM TASKS
	grunt.loadNpmTasks("grunt-contrib-connect");
	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks("grunt-contrib-watch");
	//INIT DEFAULT
	grunt.registerTask("default", 'Inicando AppLessCSS, listo para que empiezes a trabajar :) .', [ 'connect', 'watch' ]);
};