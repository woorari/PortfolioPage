import { Sequelize } from 'sequelize'

// Debug-Ausgabe der Database URL (ohne sensible Daten)
const dbUrl = process.env.REPLIT_DB_URL || ''
console.log('REPLIT_DB_URL exists:', !!dbUrl)

// Parse die URL für Sequelize
const sequelize = new Sequelize(dbUrl, {
  dialect: 'postgres',
  protocol: 'postgres',
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