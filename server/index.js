import express from 'express';
import { getLogger } from './system/logger';
import { createServer } from './server';

var logger = getLogger(),
    server,
    expressServer = express(),
    port = 3000;

server = createServer(expressServer);

server.listen(port);

logger.info('Server started on port ' + port);
