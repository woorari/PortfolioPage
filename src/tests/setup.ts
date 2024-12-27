
import { server } from '../server'
import sequelize from '../config/database'

beforeAll(() => {
  // Any global setup
})

afterAll(async (done) => {
  await sequelize.close()
  server.close(done)
})
import { app } from '../server/app'

beforeAll(() => {
  const port = process.env.NODE_ENV === 'test' ? 3002 : 3001
  app.listen(port)
})

afterAll(done => {
  app.removeAllListeners()
  done()
})
