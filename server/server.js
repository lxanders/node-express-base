'use strict';

var path = require('path'),
    express = require('express'),
    app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(process.cwd(), 'templates'));

app.use('/public/assets', express.static(path.join(__dirname, '../build/assets')));

app.get('/', function (req, res) {
    res.render('index', { title: 'Index page' });
});

module.exports = app;
