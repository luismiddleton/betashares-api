const request = require('supertest');
const express = require('express');
const mockPayload = require('../utils/mocks');

const app = express();

describe('GET /holding/:ticker', () => {
  app.get('/holding/MOCK', (req, res) => {
    res.status(200).json({ ...mockPayload });
  });

  it('should respond with JSON', done => {
    request(app)
      .get('/holding/MOCK')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('should return a JSON payload ', () => {
    return request(app)
      .get('/holding/MOCK')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        const data = JSON.parse(response.text);
        expect(data).toEqual(mockPayload);
      });
  });
});
