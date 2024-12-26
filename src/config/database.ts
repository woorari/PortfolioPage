
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
  try {
    const url = new URL(dbUrl)
    sequelize.config.host = url.hostname
    sequelize.config.port = parseInt(url.port)
    sequelize.config.database = url.pathname.split('/')[1]
    sequelize.config.username = url.username
    sequelize.config.password = url.password
  } catch (error) {
    console.error('Failed to parse database URL:', error)
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
