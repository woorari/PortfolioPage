
import { server } from '../server'

beforeAll(() => {
  // Any global setup
})

afterAll((done) => {
  server.close(done)
})
