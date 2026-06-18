const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./5-payment.js');
const sinon = require('sinon');
const { expect } = require('chai');

describe('sendPaymentRequestToApi with Lifecycle Hooks', () => {  
    let consolespy;

    beforeEach(() => {
        consolespy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        consolespy.restore();
    });

    it('should call Utils.calculateNumber and log the correct total', () => {
    // 2. Execute the payment function
    sendPaymentRequestToApi(100, 20);
    expect(consolespy.calledOnce).to.be.true;
    expect(consolespy.calledWith('The total is: 120')).to.be.true;
    });

    it('should call Utils.calculateNumber and log the correct total', () => {
    // 2. Execute the payment function
    sendPaymentRequestToApi(10, 0);
    expect(consolespy.calledOnce).to.be.true;
    expect(consolespy.calledWith('The total is: 20')).to.be.true;
    });
})
