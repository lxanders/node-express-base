'use strict';

var path = require('path'),
    express = require('express');

function createServer(expressServer) {
    expressServer.set('view engine', 'hbs');
    expressServer.set('views', path.join(process.cwd(), 'templates'));

    expressServer.use('/public/assets', express.static(path.join(__dirname, '../build/assets')));

    expressServer.get('/', function (req, res) {
        res.render('index', { title: 'Index page' });
    });

    return expressServer;
}

module.exports = {
    createServer: createServer
};
