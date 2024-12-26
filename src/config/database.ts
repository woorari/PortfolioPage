
import { Sequelize } from 'sequelize'

const dbUrl = process.env.REPLIT_DB_URL || ''
console.log('REPLIT_DB_URL exists:', !!dbUrl)

const sequelize = new Sequelize({
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  logging: console.log
})

if (dbUrl) {
  // Parse connection details from URL
  const matches = dbUrl.match(/postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/)
  if (matches) {
    const [, user, password, host, port, database] = matches
    sequelize.config.database = database
    sequelize.config.host = host
    sequelize.config.port = parseInt(port)
    sequelize.config.username = user
    sequelize.config.password = password
  }
}

export const testConnection = async () => {
  try {
    await sequelize.authenticate()
    console.log('Database connection established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

export default sequelize
