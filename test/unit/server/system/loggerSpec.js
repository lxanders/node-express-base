import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import winston from 'winston';
import logger from '../../../../server/system/logger';

chai.use(sinonChai);

describe('logger', function () {
    describe('getInfoStream', function () {
        let message;

        beforeEach(function () {
            sinon.stub(winston, 'info');
        });

        afterEach(function () {
            winston.info.restore();
        });

        it('should log the message as info without any modifications', function () {
            message = 'any message without line break at the end';

            logger.getInfoStream().write(message);

            expect(winston.info).to.have.been.calledOnce;
            expect(winston.info).to.have.been.calledWithExactly(message);
        });

        it('should remove the last character if it is a line break', function () {
            const expectedMessge = 'any message with line break';

            message = expectedMessge + '\n';

            logger.getInfoStream().write(message);

            expect(winston.info).to.have.been.calledOnce;
            expect(winston.info).to.have.been.calledWithExactly(expectedMessge);
        });

        it('should remove only one line break character from the end', function () {
            const expectedMessage = 'any message with line break\n';

            message = expectedMessage + '\n';

            logger.getInfoStream().write(message);

            expect(winston.info).to.have.been.calledOnce;
            expect(winston.info).to.have.been.calledWithExactly(expectedMessage);
        });

        it('should not remove any line breaks within the message', function () {
            message = 'any message \n\nwith\nstrange line breaks';

            logger.getInfoStream().write(message);

            expect(winston.info).to.have.been.calledOnce;
            expect(winston.info).to.have.been.calledWithExactly(message);
        });

        it('should work if the only character is a line break character', function () {
            message = '\n';

            logger.getInfoStream().write(message);

            expect(winston.info).to.have.been.calledOnce;
            expect(winston.info).to.have.been.calledWithExactly('');
        });

        it('should work for empty strings', function () {
            message = '';

            logger.getInfoStream().write(message);

            expect(winston.info).to.have.been.calledOnce;
            expect(winston.info).to.have.been.calledWithExactly(message);
        });
    });
});
