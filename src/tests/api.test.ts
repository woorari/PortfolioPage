
import request from 'supertest'
import { app } from '../server'

describe('API Tests', () => {
  describe('Portfolio API', () => {
    test('GET /api/portfolio returns projects', async () => {
      const response = await request(app).get('/api/portfolio')
      expect(response.status).toBe(200)
      expect(Array.isArray(response.body)).toBe(true)
    })
  })

  describe('Blog API', () => {
    test('GET /api/blog returns posts', async () => {
      const response = await request(app).get('/api/blog')
      expect(response.status).toBe(200)
      expect(Array.isArray(response.body)).toBe(true)
    })
  })

  describe('CV API', () => {
    test('GET /api/cv returns data', async () => {
      const response = await request(app).get('/api/cv')
      expect(response.status).toBe(200)
      expect(response.body).toHaveProperty('experience')
    })
  })

  describe('Contact API', () => {
    test('POST /api/contact handles submission', async () => {
      const response = await request(app)
        .post('/api/contact')
        .send({
          name: 'Test User',
          email: 'test@example.com',
          message: 'Test message'
        })
      expect(response.status).toBe(201)
    })
  })
})
