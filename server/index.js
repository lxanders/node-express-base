'use strict';

var path = require('path'),
    express = require('express'),
    app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(process.cwd(), 'templates'));

app.use('/client', express.static(path.join(__dirname, '../client')));

app.get('/', function (req, res) {
    res.render('index');
});

module.exports = app;

