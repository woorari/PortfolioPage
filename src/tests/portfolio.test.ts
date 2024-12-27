import request from 'supertest'
import { app } from '../server/app'  // Express app
import sequelize from '../config/database'

describe('Portfolio API', () => {
  // Setup vor allen Tests
  beforeAll(async () => {
    // Verbindung zur Test-DB aufbauen
    await sequelize.sync({ force: true })
  })

  // Cleanup nach allen Tests
  afterAll(async () => {
    await sequelize.close()
  })

  // Tests für GET /portfolio
  describe('GET /portfolio', () => {
    it('should return 200 and all projects', async () => {
      const response = await request(app)
        .get('/portfolio')
        .expect('Content-Type', /json/)
        .expect(200)

      expect(Array.isArray(response.body)).toBe(true)
      expect(response.body[0]).toHaveProperty('id')
      expect(response.body[0]).toHaveProperty('title')
    })
  })

  // Tests für GET /portfolio/:id
  describe('GET /portfolio/:id', () => {
    it('should return 200 and the project for valid id', async () => {
      const response = await request(app)
        .get('/portfolio/1')
        .expect('Content-Type', /json/)
        .expect(200)

      expect(response.body).toHaveProperty('message')
    })

    it('should return 404 for invalid id', async () => {
      await request(app)
        .get('/portfolio/999')
        .expect(404)
    })
  })
}) 