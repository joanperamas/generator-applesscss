### Que es applesscss?

Es un generador Yeoman, que te ayuda a generar una aplicación base para iniciar tu proyecto con:

- LessCSS
- Normalize
- Jquery
- AngularJs


![](http://joanperamas.me/proyectos/applesscss/applesscss.png)


Basicamente es un punto de partida o esqueleto para iniciar el desarrollo de tus aplicaciones que usan lesscss.
Te ayuda, te hace feliz.

### Caracteristicas

- Plantilla Base: HTML, LessCSS, Normalize, Jquery y Angular.
- LessCSS, actualiza automaticamente cada vez que modificas un archivo less/*.less.
- Genera un archivo css/app.css minimizado a partir de los archivos less.
- Grunt, servidor incorprado
- Jshint, tarea grunt para revisar tu js incorporado
- Uglify, tarea grunt para minimzar tu js incorporado

### Como instalarlo?

Si no tienes instalado yeoman, empieza instalandolo:

```
$ npm install -g yo
```

Instala de forma global applesscss:

```
$ npm install -g generator-applesscss
```

Finalmente inicia el generador applesscss en la carpeta donde vas a trabajar:

```
$ yo applesscss
```

### Esto es Grandioso!

Listo!, ahora ejecuta grunt server y luego enter, para iniciar el servidor y empezar a trabajar con la aplicación base:

```
$ grunt server
```

Grandioso!, iniciaste la aplicaión base.
Eso es todo amigos!.

### Tareas grunt incorporadas

```
$ grunt server
```

Ejecuta el servidor.
Ejecuta el observador para los cambios en los archivo /less/**/*.less
Minimiza los archivos less en un solo archivo /css/app.css.
Usted tambien puede configurar estos archivos de minimizacion en el archivo Gruntfile.js

```
$ grunt minjs
```

Uglify, Minimiza los archivos js de la capeta /js/**/*.js.
Genera un archivo minimizado en jsmin/app.min.js
Usted tambien puede configurar estos archivos de minimizacion en el archivo Gruntfile.js

```
$ grunt inspectjs
```

Jshint, Podras revisar si tus /js/**/*.js estan escritos correctamente.

```
$ grunt
```

Te muestra el detalle de la instalación y la ayuda para las tareas grunt.


## Licencia

MIT

## Historial de versiones

- 24/03/2014 Incorporadas las tareas: grunt server, grunt jsmin, grunt inspectjs, grunt
