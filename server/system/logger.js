'use strict';

var logger = require('winston');

function removeLastCharacter(text) {
    return text.slice(0, -1);
}

function removeEndingNewLineCharacter(message) {
    var lastCharacter;

    if (message.length > 0) {
        lastCharacter = message[message.length - 1];

        if (lastCharacter === '\n') {
            return removeLastCharacter(message);
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
