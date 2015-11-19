import path from 'path';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import createServer from '../../../server/createServer';

chai.use(sinonChai);

describe('createServer', () => {
    let serverInstance;

    beforeEach(() => {
        serverInstance = {
            get: sinon.spy(),
            set: sinon.spy(),
            use: sinon.spy()
        };
    });

    it('should set the view engine to hbs', () => {
        createServer(serverInstance);

        expect(serverInstance.set).to.have.been.calledWith('view engine', 'hbs');
    });

    it('should register a static route for assets', () => {
        createServer(serverInstance);

        expect(serverInstance.use).to.have.been.calledWith('/public/assets');
    });

    it('should register the template directory', () => {
        const expectedTemplatesPath = path.join(process.cwd(), 'templates');

        createServer(serverInstance);

        expect(serverInstance.set).to.have.been.calledWith('views', expectedTemplatesPath);
    });

});
