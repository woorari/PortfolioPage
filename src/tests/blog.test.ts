import request from 'supertest'
import { app } from '../server/app'

// Test API Key
const TEST_API_KEY = 'test_api_key'
process.env.PUBLIC_API_KEY = TEST_API_KEY

describe('Blog API', () => {
  describe('GET /api/blog', () => {
    it('should return 200 and all posts with valid API key', async () => {
      const response = await request(app)
        .get('/api/blog')
        .set('X-API-Key', TEST_API_KEY)
        .expect('Content-Type', /json/)
        .expect(200)

      expect(Array.isArray(response.body)).toBe(true)
      expect(response.body[0]).toHaveProperty('slug')
      expect(response.body[0]).toHaveProperty('title')
    })

    it('should return 401 without API key', async () => {
      await request(app)
        .get('/api/blog')
        .expect(401)
    })
  })

  describe('GET /api/blog/:slug', () => {
    it('should return 200 and the post for valid slug with API key', async () => {
      const response = await request(app)
        .get('/api/blog/post-1')
        .set('X-API-Key', TEST_API_KEY)
        .expect('Content-Type', /json/)
        .expect(200)

      expect(response.body).toHaveProperty('message')
    })

    it('should return 401 without API key', async () => {
      await request(app)
        .get('/api/blog/post-1')
        .expect(401)
    })
  })
}) 