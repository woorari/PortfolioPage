import request from 'supertest'
import { app } from '../server/app'

describe('Contact API', () => {
  describe('POST /contact', () => {
    it('should return 201 when sending a valid message', async () => {
      const response = await request(app)
        .post('/contact')
        .send({
          email: 'test@example.com',
          message: 'Test message'
        })
        .expect('Content-Type', /json/)
        .expect(201)

      expect(response.body).toHaveProperty('message', 'Message sent successfully')
    })
  })
}) 