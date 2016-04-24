'use strict';

var path = require('path');

var express = require('express');
var exphbs = require('express-handlebars');

module.exports = function Web() {
  var web = express();

  var viewsPath = path.join(__dirname, '/views');
  var layoutsDir = path.resolve(path.join(viewsPath, 'layouts'));
  var partialsDir = path.resolve(path.join(viewsPath, 'partials'));

  web.engine('handlebars', exphbs({
    layoutsDir: layoutsDir,
    partialsDir: partialsDir,
    defaultLayout: 'main'
  }));

  web.set('views', path.resolve(viewsPath));
  web.set('view engine', 'handlebars');

  web.use('/public', express['static'](path.join(__dirname, '/public')));

  web.get('/', function (req, res) {
    res.render('home');
  });

  return web;
};
