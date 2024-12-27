
import supertest from 'supertest';
import { app } from '../server';

const request = supertest;

describe('Portfolio API', () => {
  it('GET /api/portfolio should return all projects', async () => {
    const res = await request(app).get('/api/portfolio');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });

  it('GET /api/portfolio/:id should return a single project', async () => {
    const res = await request(app).get('/api/portfolio/1');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('id');
  });
});

describe('Blog API', () => {
  it('GET /api/blog should return all published posts', async () => {
    const res = await request(app).get('/api/blog');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });

  it('GET /api/blog/:slug should return a single post', async () => {
    const res = await request(app).get('/api/blog/test-post');
    expect(res.status).toBe(404);
  });
});

describe('Contact API', () => {
  it('POST /api/contact should handle form submission', async () => {
    const res = await request(app)
      .post('/api/contact')
      .send({
        name: 'Test User',
        email: 'test@example.com',
        message: 'Test message'
      });
    expect(res.status).toBe(201);
  });
});
