'use strict';

var app = require('./server'),
    port = 3000;

app.listen(port);

/* eslint-disable no-console */
console.log('Server started on port ' + port);
/* eslint-enable no-console */
