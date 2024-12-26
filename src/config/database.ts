
import { Sequelize } from 'sequelize'

const dbUrl = process.env.DATABASE_URL || ''
console.log('DATABASE_URL exists:', !!dbUrl)

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.PGHOST,
  port: parseInt(process.env.PGPORT || '5432'),
  database: process.env.PGDATABASE,
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  logging: console.log
})

export const testConnection = async () => {
  try {
    await sequelize.authenticate()
    console.log('Database connection established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

export default sequelize
