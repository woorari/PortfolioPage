import request from 'supertest'
import { app, startServer } from '../server/index'
import { Server } from 'http'

describe('API Tests', () => {
  let server: Server

  beforeAll(async () => {
    server = await startServer(0)
  })

  afterAll(async () => {
    return new Promise<void>((resolve) => {
      server?.close(() => {
        resolve()
      })
    })
  })

  describe('Portfolio API', () => {
    it('GET /api/portfolio returns projects with valid API key', async () => {
      const response = await request(app)
        .get('/api/portfolio')
        .set('X-API-Key', process.env.PUBLIC_API_KEY || '')
        .expect('Content-Type', /json/)
        .expect(200)

      expect(Array.isArray(response.body)).toBe(true)
    })

    it('GET /api/portfolio returns 401 without API key', async () => {
      await request(app)
        .get('/api/portfolio')
        .expect(401)
    })
  })
})
