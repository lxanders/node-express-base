import express from 'express';
import path from 'path';
import morgan from 'morgan';
import logger from './system/logger';

export function createServer(expressServer) {
    expressServer.set('view engine', 'hbs');
    expressServer.set('views', path.join(process.cwd(), 'templates'));

    expressServer.use(morgan('combined', { stream: logger.getInfoStream() }));
    expressServer.use('/public/assets', express.static(path.join(__dirname, '../build/assets')));

    expressServer.get('/', function (req, res) {
        res.render('index', { title: 'Index page' });
    });

    return expressServer;
}

export default {
    createServer
}
