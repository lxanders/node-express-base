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

    const responseContainsExpectedTitle = (expectedTitle, response) => {
        expect(response.text.indexOf(expectedTitle) !== -1).to.be.true;
    };

    it('should respond with html containing the expected title for the home page', (done) => {
        const expectedTitle = '<title>Home page</title>';

        return request.get('/')
            .expect(200)
            .expect(responseContainsExpectedTitle.bind(null, expectedTitle))
            .end(done);
    });

    it('should respond with html containing the expected title for the any page', (done) => {
        const expectedTitle = '<title>Any page</title>';

        return request.get('/any-page')
            .expect(200)
            .expect(responseContainsExpectedTitle.bind(null, expectedTitle))
            .end(done);
    });

    it('should respond with html containing the expected title for the dropdown page', (done) => {
        const expectedTitle = '<title>Dropdown page</title>';

        return request.get('/dropdown-page/any-of-it')
            .expect(200)
            .expect(responseContainsExpectedTitle.bind(null, expectedTitle))
            .end(done);
    });
});
