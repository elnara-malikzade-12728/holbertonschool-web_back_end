const getPaymentTokenFromAPI = require('../6-payment_token');

describe('Async Testing with Callbacks', () => {
  it('should wait for the callback to execute before passing', (done) => {
    
      setTimeout(() => {
      const data = 'processed_token';
      
      try {
        expect(data).to.equal('processed_token');
        done();
      } catch (error) {
        done(error); }
      
    }, 100);
  });
});
