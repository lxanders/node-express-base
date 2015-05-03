'use strict';

var express = require('express'),
    Server = require('./server'),
    server,
    expressServer = express(),
    port = 3000;

server = Server.createServer(expressServer);

server.listen(port);

/* eslint-disable no-console */
console.log('Server started on port ' + port);
/* eslint-enable no-console */
