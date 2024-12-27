import request from 'supertest'
import { app, startServer } from '../server/index'
import { Server } from 'http'
import { Request, Response, NextFunction } from 'express'

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

  describe('General API', () => {
    it('should return 404 for non-existent routes', async () => {
      await request(app)
        .get('/non-existent')
        .expect(404)
    })

    it('should handle server errors', async () => {
      // Route die einen Fehler wirft
      app.get('/api/test/error', (_req: Request, _res: Response, next: NextFunction) => {
        next(new Error('Test error'))
      })

      await request(app)
        .get('/api/test/error')
        .expect(500)
    })

    it('should handle CORS', async () => {
      const response = await request(app)
        .options('/api/portfolio')
        .set('Origin', 'http://localhost:3000')
        
      expect(response.headers['access-control-allow-origin']).toBeDefined()
      expect(response.headers['access-control-allow-methods']).toContain('GET')
      expect(response.headers['access-control-allow-methods']).toContain('POST')
    })
  })
})
