/*
 * Este archivo hace uso de :
 * grunt-contrib-connect
 * grunt-contrib-less
 * grunt-contrib-watch
 * grunt-contrib-jshint
 * grunt-contrib-uglify 
 * Copyright (c) 2014 "Joan" Joan Peramas Ceras - joanperamas.me,
 * Licensed under the MIT license.
 */
" use strict ";
module.exports = function(grunt){
	//Cargando Tareas NPM Usando matchdep
	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
	//Configuración de Grunt
	grunt.initConfig({
		pkg : grunt.file.readJSON("package.json"),
		connect : {
			server : {
				options: {
					port: 6969,
					hostname: "localhost",
					open: {
						target: "http://localhost:6969/app/"
					},
					useAvailablePort : true
				}
			}
		},
		less : {
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
		watch : {
			taskLess : {
				files : ["app/less/*.less"],
				tasks : ["less"]
			}
		},
		jshint : {
			all: ["Gruntfile.js", "app/js/**/*.js"]
		},
		uglify: {
			all : {
				files: {
					"app/jsmin/app.min.js": [ "app/js/**/*app.js" ]
				}	
			}
		}
	});
	//INIT DEFAULT <> grunt
	grunt.registerTask("default", "Dale un vistazo a las configuraciones iniciales :).", function(){
		grunt.log.writeln("Generado: " + grunt.config.get("pkg").name);
		grunt.log.writeln(grunt.config.get("pkg").description);
		grunt.log.writeln("********************");
		grunt.log.writeln("Para correr el servidor ejecuta: grunt server");
		grunt.log.writeln("-Ejecutara el servidor para que empiezes a trabajar.");
		grunt.log.writeln("-Escuchara los cambios en los archivos /less/*.less y te creara automaticamente un archivo /css/app.css");
		grunt.log.writeln("********************");
		grunt.log.writeln("Para revisar codigo js usando jshint ejecuta: grunt inspectjs");
		grunt.log.writeln("-Podras revisar si tus /js/*.js estan correctos.");
		grunt.log.writeln("********************");
		grunt.log.writeln("Para minimizar el js usando uglify ejecuta: grunt minjs");
		grunt.log.writeln("- Te creara una carpeta llamada (jsmin/app.min.js), esta contendra el archivo minimizado.");
	});
	//SERVER <> grunt server
	grunt.registerTask("server", "Inicando AppLessCSS :) .", [ "connect", "watch" ]);
	//INIT UGLIFY <> grunt minjs
	grunt.registerTask("minjs", "Minimizando los JS en app.min.js :) .", [ "uglify" ]);
	//INIT JSHINT <> grunt inspectjs
	grunt.registerTask("inspectjs", "Revisando que tu código este bien escrito :) .", [ "jshint" ]);
};