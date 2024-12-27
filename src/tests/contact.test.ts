import request from 'supertest'
import { app } from '../server/app'
import jwt from 'jsonwebtoken'

// Test JWT Token erstellen
const TEST_JWT_SECRET = 'test_secret'
process.env.JWT_SECRET = TEST_JWT_SECRET
const testToken = jwt.sign({ id: 'test-user' }, TEST_JWT_SECRET)

describe('Contact API', () => {
  describe('POST /api/contact', () => {
    it('should return 201 when sending a valid message with auth', async () => {
      const response = await request(app)
        .post('/api/contact')
        .set('Authorization', `Bearer ${testToken}`)
        .send({
          email: 'test@example.com',
          message: 'Test message'
        })
        .expect('Content-Type', /json/)
        .expect(201)

      expect(response.body).toHaveProperty('message', 'Message sent successfully')
    })

    it('should return 401 without auth token', async () => {
      await request(app)
        .post('/api/contact')
        .send({
          email: 'test@example.com',
          message: 'Test message'
        })
        .expect(401)
    })
  })
}) 