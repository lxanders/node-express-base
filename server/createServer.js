import express from 'express';
import path from 'path';
import createLoggerMiddleware from './system/createLoggerMiddleware';
import registerRoutes from './registerRoutes';

export default (expressServer, logger) => {
    expressServer.set('view engine', 'hbs');
    expressServer.set('views', path.join(process.cwd(), 'templates'));

    expressServer.use(createLoggerMiddleware(logger));
    expressServer.use('/public/assets', express.static(path.join(__dirname, '../assets')));

    /* eslint-disable new-cap */
    expressServer.use('/', registerRoutes(express.Router()));
    /* eslint-enable new-cap */

    return expressServer;
};
