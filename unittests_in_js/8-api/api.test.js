const api = require('./api');
const request = require('supertest');
const express = require('express');

describe('API', () => {
  it('should return welcome message on GET /', async () => {
    const response = await request(api).get('/');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Welcome to the payment system' });
  });
});

module.exports = app;