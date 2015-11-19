import { expect } from 'chai';
import sinon from 'sinon';
import registerRoutes from '../../../server/registerRoutes';

describe('registerRoutes', () => {
    it('should register the routes', () => {
        const req = { params: { selection: 'something' } };
        const res = { render: sinon.spy() };
        const router = { get: sinon.stub().yields(req, res) };

        registerRoutes(router);

        expect(router.get).to.have.been.calledWith('/');
        expect(router.get).to.have.been.calledWith('/any-page');
        expect(router.get).to.have.been.calledWith('/dropdown-page/:selection');
    });
});
