import sinon from 'sinon';

import login from '@/service/login.js';
import LoginProxy from '../../../../src/proxy/LoginProxy';


describe('login.js', () => {
  let stub = null;

  beforeEach(() => {
    let mockProxyLoginRequestFunc = function (name, password, callback) {
      callback({message: 'success'}, null);
    };
    stub = sinon.stub(LoginProxy, 'requestLogin');
    stub.callsFake(mockProxyLoginRequestFunc);
  });

  afterEach(() => {
    stub.restore();
  });


  it('should do the request if the validation process is pass.', (done) => {
    login('Ming', '123456', (res, err) => {
      expect(stub.calledOnce).to.equal(true);
      expect(LoginProxy.requestLogin.callCount).to.be.equal(1);
      expect(LoginProxy.requestLogin.called).be.true;
      expect(res.message).to.equal('success');
      done();
    });
  });

  it('should do the request if the validation process is don\'t pass.', (done) => {
    login('Ming', '12345', function (res, err) {
      expect(stub.notCalled).to.equal(true);
      expect(err).to.equal('password too short.');
      done();
    });
  });
});
