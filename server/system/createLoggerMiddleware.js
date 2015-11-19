import morgan from 'morgan';

function removeLastCharacter(text) {
    return text.slice(0, -1);
}

function removeEndingNewLineCharacter(message) {
    if (message.length > 0) {
        const lastCharacter = message[message.length - 1];

        if (lastCharacter === '\n') {
            return removeLastCharacter(message);
        }
    }

    return message;
}

function getInfoStream(logger) {
    return {
        write: (message) => {
            logger.info(removeEndingNewLineCharacter(message));
        }
    };
}

export default (logger) => {
    return morgan('combined', { stream: getInfoStream(logger) });
};
