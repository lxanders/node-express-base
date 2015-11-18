import { expect } from 'chai';
import express from 'express';
import supertest from 'supertest';
import sinon from 'sinon';
import { createServer } from '../../../server/server';
import logger from '../../../server/system/logger';

describe('server', function () {
    var request;

    beforeEach(function () {
        sinon.stub(logger, 'getInfoStream').returns({ write: sinon.stub() });
        
        request = supertest(createServer(express()));
    });

    afterEach(function () {
        logger.getInfoStream.restore();
    });

    it('should return with status code 200', function (done) {
        return request.get('/')
            .expect(200, done);
    });

    it('should respond with html containing the expected title', function (done) {
        var expectedTitle = '<title>Index page</title>',
            containsExpectedTitle = function (res) {
                expect(res.text.indexOf(expectedTitle) !== -1).to.be.true;
            };

        return request.get('/')
            .expect(containsExpectedTitle)
            .end(done);
    });
});
