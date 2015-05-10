'use strict';

var express = require('express'),
    logger = require('./system/logger'),
    Server = require('./server'),
    server,
    expressServer = express(),
    port = 3000;

server = Server.createServer(expressServer);

server.listen(port);

/* eslint-disable no-console */
logger.info('Server started on port ' + port);
/* eslint-enable no-console */
