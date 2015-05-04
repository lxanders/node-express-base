'use strict';

var winston = require('winston'),
    chai = require('chai'),
    expect = chai.expect,
    requireUncached = require('require-uncached'),
    sinon = require('sinon'),
    sinonChai = require('sinon-chai'),
    Server = require('../../../server/server');

chai.use(sinonChai);

describe('server', function () {
    var defaultPort = 3000,
        server;

    beforeEach(function () {
        server = { listen: sinon.stub() };

        sinon.stub(Server, 'createServer').returns(server);
        sinon.stub(winston, 'info');
    });

    afterEach(function () {
        winston.info.restore();
        Server.createServer.restore();
    });

    it('should create a server', function () {
        requireUncached('../../../server/index');

        expect(Server.createServer).to.have.been.calledOnce;
    });

    it('should start listening on the expected port ' + defaultPort, function () {
        requireUncached('../../../server/index');

        expect(server.listen).to.have.been.calledOnce;
        expect(server.listen).to.have.been.calledWithExactly(defaultPort);
    });

    it('should log the server status on console', function () {
        requireUncached('../../../server/index');

        expect(winston.info).to.have.been.calledOnce;
        expect(winston.info).to.have.been.calledWithExactly('Server started on port ' + defaultPort);
    });
});