import express from 'express';
import { getLogger } from './system/logger';
import { createServer } from './server';

const logger = getLogger();
const expressServer = express();
const server = createServer(expressServer);
const port = 3000;

server.listen(port);

logger.info('Server started on port ' + port);
