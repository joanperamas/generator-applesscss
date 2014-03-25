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
		baseApp : "app",
		connect : {
			server : {
				options: {
					port: 6969,
					hostname: "localhost",
					open: {
						target: "http://<%= connect.server.options.hostname %>:<%= connect.server.options.port %>/<%= baseApp %>/"
					},
					useAvailablePort : true
				}
			}
		},
		less : {
			development: {
				options: {
					paths: ["<%= baseApp %>/less"],
					compress: true
				},
				files: {
					"<%= baseApp %>/css/app.css": "<%= baseApp %>/less/app.less"
				}
			}
		},
		watch : {
			taskLess : {
				files : ["<%= baseApp %>/less/*.less"],
				tasks : ["less"]
			}
		},
		jshint : {
			all: ["Gruntfile.js", "<%= baseApp %>/js/**/*.js"]
		},
		uglify: {
			all : {
				files: {
					"<%= baseApp %>/jsmin/app.min.js": [ "<%= baseApp %>/js/**/*app.js" ]
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