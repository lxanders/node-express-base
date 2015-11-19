import { expect } from 'chai';
import express from 'express';
import supertest from 'supertest';
import sinon from 'sinon';
import createServer from '../../../server/createServer';

describe('createServer', () => {
    let request;
    let logger;

    beforeEach(() => {
        logger = { info: sinon.spy() };

        request = supertest(createServer(express(), logger));
    });

    const responseContainsExpectedTitle = (expectedTitle, response) => {
        expect(response.text.indexOf(expectedTitle) !== -1).to.be.true;
    };

    it('should respond with html containing the expected title for the home page', () => {
        const expectedTitle = '<title>Home page</title>';

        return request.get('/')
            .expect(200)
            .expect(responseContainsExpectedTitle.bind(null, expectedTitle));
    });

    it('should respond with html containing the expected title for the any page', () => {
        const expectedTitle = '<title>Any page</title>';

        return request.get('/any-page')
            .expect(200)
            .expect(responseContainsExpectedTitle.bind(null, expectedTitle));
    });

    it('should respond with html containing the expected title for the dropdown page', () => {
        const expectedTitle = '<title>Dropdown page</title>';

        return request.get('/dropdown-page/any-of-it')
            .expect(200)
            .expect(responseContainsExpectedTitle.bind(null, expectedTitle));
    });
});
