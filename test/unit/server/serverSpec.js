import path from 'path';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Server from '../../../server/server';

chai.use(sinonChai);

describe('Server', () => {
    describe('createServer', () => {
        let server;

        beforeEach(() => {
            server = {
                get: sinon.stub(),
                set: sinon.stub(),
                use: sinon.stub()
            };
        });

        it('should set the view engine to hbs', () => {
            Server.createServer(server);

            expect(server.set).to.have.been.calledWith('view engine', 'hbs');
        });

        it('should register a static route for assets', () => {
            Server.createServer(server);

            expect(server.use).to.have.been.calledWith('/public/assets');
        });

        it('should register the template directory', () => {
            const expectedTemplatesPath = path.join(process.cwd(), 'templates');

            Server.createServer(server);

            expect(server.set).to.have.been.calledWith('views', expectedTemplatesPath);
        });
    });
});
