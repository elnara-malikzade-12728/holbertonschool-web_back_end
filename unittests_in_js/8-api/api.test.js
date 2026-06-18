const request = require('supertest');
const { expect } = require('chai');
const api = require('./api');

describe('API integration tests', () => {
  it('Correct status code?', async () => {
    const response = await request(api).get('/');
    expect(response.status).to.equal(200);
  });

  it('Correct result?', async () => {
    const response = await request(api).get('/');
    expect(response.text).to.equal('Welcome to the payment system');
  });
});
