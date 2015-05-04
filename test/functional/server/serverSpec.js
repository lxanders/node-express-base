'use strict';

var expect = require('chai').expect,
    express = require('express'),
    supertest = require('supertest'),
    Server = require('../../../server/server');

describe('server', function () {
    var request;

    beforeEach(function () {
        request = supertest(Server.createServer(express()));
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
