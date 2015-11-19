import express from 'express';
import path from 'path';
import morgan from 'morgan';
import logger from './system/logger';
import registerRoutes from './registerRoutes';

export function createServer(expressServer) {
    expressServer.set('view engine', 'hbs');
    expressServer.set('views', path.join(process.cwd(), 'templates'));

    expressServer.use(morgan('combined', { stream: logger.getInfoStream() }));
    expressServer.use('/public/assets', express.static(path.join(__dirname, '../assets')));

    /* eslint-disable new-cap */
    expressServer.use('/', registerRoutes(express.Router()));
    /* eslint-enable new-cap */

    return expressServer;
}

export default {
    createServer
};
