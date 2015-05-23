'use strict';

var express = require('express'),
    logger = require('./system/logger').getLogger(),
    Server = require('./server'),
    server,
    expressServer = express(),
    port = 3000;

server = Server.createServer(expressServer);

server.listen(port);

logger.info('Server started on port ' + port);
