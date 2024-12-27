
import { readFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import sequelize from '../config/database'

const __dirname = dirname(fileURLToPath(import.meta.url))

async function seedDatabase() {
  try {
    const seedSQL = readFileSync(join(__dirname, '../server/init.sql'), 'utf-8')
    
    await sequelize.query(seedSQL)
    console.log('Database seeding completed successfully')
  } catch (error) {
    console.error('Seeding failed:', error)
    process.exit(1)
  } finally {
    await sequelize.close()
  }
}

seedDatabase()
