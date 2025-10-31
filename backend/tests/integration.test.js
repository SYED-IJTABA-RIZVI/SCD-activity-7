const request = require('supertest');
const app = require('../app');

describe('API integration tests', () => {
  test('GET /api/health returns status ok', async () => {
    const res = await request(app).get('/api/health');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });

  test('POST /api/items success', async () => {
    const res = await request(app)
      .post('/api/items')
      .send({ name: 'test' })
      .set('Accept', 'application/json');
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.name).toBe('test');
  });

  test('POST /api/items failure (missing name)', async () => {
    const res = await request(app)
      .post('/api/items')
      .send({})
      .set('Accept', 'application/json');
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('error');
  });
});
