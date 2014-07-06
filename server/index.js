'use strict';

var express = require('express'),
    app = express();

app.set('view engine', 'hbs');
app.set('views', process.cwd() + '/templates')

app.get('/', function (req, res) {
    res.render('index');
});

module.exports = app;
