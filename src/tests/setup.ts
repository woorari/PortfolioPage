
import { server } from '../server'
import sequelize from '../config/database'

beforeAll(() => {
  // Any global setup
})

afterAll(async (done) => {
  await sequelize.close()
  server.close(done)
})
