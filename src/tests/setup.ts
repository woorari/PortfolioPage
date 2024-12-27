
import { app } from '../server/app'
import sequelize from '../config/database'

let server: any

beforeAll(() => {
  server = app.listen(3002)
})

afterAll(async () => {
  await sequelize.close()
  if (server) {
    await new Promise((resolve) => server.close(resolve))
  }
})
