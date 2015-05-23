'use strict';

var path = require('path'),
    express = require('express'),
    morgan = require('morgan'),
    logger = require('./system/logger');

function createServer(expressServer) {
    expressServer.set('view engine', 'hbs');
    expressServer.set('views', path.join(process.cwd(), 'templates'));

    expressServer.use(morgan('combined', { stream: logger.getInfoStream() }));
    expressServer.use('/public/assets', express.static(path.join(__dirname, '../build/assets')));

    expressServer.get('/', function (req, res) {
        res.render('index', { title: 'Index page' });
    });

    return expressServer;
}

module.exports = {
    createServer: createServer
};
