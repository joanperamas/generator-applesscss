'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var ApplesscssGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // have Yeoman greet the user
    this.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    this.log(chalk.magenta('Estas usando el fantastico generador Applesscss.'));

    var prompts = [{
      type: 'confirm',
      name: 'applesscss',
      message: '¿Usted instalara un proyecto base de LessCSS, Normalize, Jquery y angularJS?',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.someOption = props.someOption;

      done();
    }.bind(this));
  },

  app: function () {
    this.mkdir('app');
    this.mkdir('app/css');
    this.mkdir('app/font');
    this.mkdir('app/img');
    this.mkdir('app/less');
    this.mkdir('app/js');

    this.template('css/normalize.css', 'app/css/normalize.css');
    this.template('css/app.css', 'app/css/app.css');
    this.template('less/app.less', 'app/less/app.less');
    this.template('js/app.js', 'app/js/app.js');
    this.template('index.html', 'app/index.html');
    this.template('favicon.ico', 'app/favicon.ico');
    this.template('Gruntfile.js', 'Gruntfile.js');

    this.copy('_package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
  }
});

module.exports = ApplesscssGenerator;