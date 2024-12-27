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
    it('GET /api/portfolio returns projects', async () => {
      const response = await request(app)
        .get('/api/portfolio')
        .expect('Content-Type', /json/)
        .expect(200)

      expect(Array.isArray(response.body)).toBe(true)
      expect(response.body[0]).toHaveProperty('id')
      expect(response.body[0]).toHaveProperty('title')
    })
  })
})
