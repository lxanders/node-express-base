'use strict';

var logger = require('winston');

function removeEndingNewLineCharacter(message) {
    var lastCharacter;

    if (message.length > 0) {
        lastCharacter = message[message.length - 1];

        if (lastCharacter === '\n') {
            return message.slice(0, -1);
        }
    }

    return message;
}

function getInfoStream() {
    return {
        write: function (message) {
            logger.info(removeEndingNewLineCharacter(message));
        }
    };
}

function getLogger() {
    return logger;
}

module.exports = {
    getLogger: getLogger,
    getInfoStream: getInfoStream
};
