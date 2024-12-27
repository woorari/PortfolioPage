import request from 'supertest'
import { app } from '../server/app'
import sequelize from '../config/database'

// Test API Key
const TEST_API_KEY = 'test_api_key'
process.env.PUBLIC_API_KEY = TEST_API_KEY

describe('Portfolio API', () => {
  // Setup vor allen Tests
  beforeAll(async () => {
    await sequelize.sync({ force: true })
  })

  // Cleanup nach allen Tests
  afterAll(async () => {
    await sequelize.close()
  })

  describe('GET /api/portfolio', () => {
    it('should return 200 and all projects', async () => {
      const response = await request(app)
        .get('/api/portfolio')
        .set('X-API-Key', TEST_API_KEY)
        .expect('Content-Type', /json/)
        .expect(200)

      expect(Array.isArray(response.body)).toBe(true)
      expect(response.body[0]).toHaveProperty('id')
      expect(response.body[0]).toHaveProperty('title')
    })
  })

  describe('GET /api/portfolio/:id', () => {
    it('should return 200 and the project for valid id', async () => {
      const response = await request(app)
        .get('/api/portfolio/1')
        .set('X-API-Key', TEST_API_KEY)
        .expect('Content-Type', /json/)
        .expect(200)

      expect(response.body).toHaveProperty('title')
      expect(response.body).toHaveProperty('description')
    })

    it('should return 404 for invalid id', async () => {
      await request(app)
        .get('/api/portfolio/999')
        .set('X-API-Key', TEST_API_KEY)
        .expect(404)
    })
  })
}) 