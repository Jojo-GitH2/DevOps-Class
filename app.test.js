const request = require('supertest');
const app = require('./app'); // Import your Express app

describe('GET /', () => {
  it('responds with 200 status code', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
});