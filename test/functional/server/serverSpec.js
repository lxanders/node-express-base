import { expect } from 'chai';
import express from 'express';
import supertest from 'supertest';
import sinon from 'sinon';
import { createServer } from '../../../server/server';
import logger from '../../../server/system/logger';

describe('server', () => {
    let request;

    beforeEach(() => {
        sinon.stub(logger, 'getInfoStream').returns({ write: sinon.stub() });

        request = supertest(createServer(express()));
    });

    afterEach(() => {
        logger.getInfoStream.restore();
    });

    it('should return with status code 200', (done) => {
        return request.get('/')
            .expect(200, done);
    });

    it('should respond with html containing the expected title', (done) => {
        const expectedTitle = '<title>Index page</title>';
        const containsExpectedTitle = (res) => {
            expect(res.text.indexOf(expectedTitle) !== -1).to.be.true;
        };

        return request.get('/')
            .expect(containsExpectedTitle)
            .end(done);
    });
});
