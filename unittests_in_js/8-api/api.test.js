const api = require('./api');
const request = require('supertest');
const {expect} = require('chai')

describe('API integration tests', () => {
  it('should return welcome message on GET /', async () => {
    const response = await request(api).get('/');
    expect(response.status).to.equal(200);
    expect(response.text).to.equal('Welcome to the payment system');
  });
});

module.exports = app;

