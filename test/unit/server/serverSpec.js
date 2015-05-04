'use strict';

var path = require('path'),
    chai = require('chai'),
    expect = chai.expect,
    sinon = require('sinon'),
    sinonChai = require('sinon-chai'),
    Server = require('../../../server/server');

chai.use(sinonChai);

describe('Server', function () {
    describe('createServer', function () {
        var server;

        beforeEach(function () {
            server = {
                get: sinon.stub(),
                set: sinon.stub(),
                use: sinon.stub()
            };
        });

        it('should set the view engine to hbs', function () {
            Server.createServer(server);

            expect(server.set).to.have.been.calledWith('view engine', 'hbs');
        });

        it('should register a static route for assets', function () {
            Server.createServer(server);

            expect(server.use).to.have.been.calledWith('/public/assets');
        });

        it('should register the template directory', function () {
            var expectedTemplatesPath = path.join(process.cwd(), 'templates');

            Server.createServer(server);

            expect(server.set).to.have.been.calledWith('views', expectedTemplatesPath);
        });
    });
});
