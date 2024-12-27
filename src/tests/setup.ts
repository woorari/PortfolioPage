
import { app } from '../server'

beforeAll(() => {
  // Any global setup
})

afterAll(() => {
  app.close()
})
