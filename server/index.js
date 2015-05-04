'use strict';

var express = require('express'),
    winston = require('winston'),
    Server = require('./server'),
    server,
    expressServer = express(),
    port = 3000;

server = Server.createServer(expressServer);

server.listen(port);

/* eslint-disable no-console */
winston.info('Server started on port ' + port);
/* eslint-enable no-console */
