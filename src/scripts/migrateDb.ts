
import { readFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import sequelize from '../config/database'

const __dirname = dirname(fileURLToPath(import.meta.url))

async function runMigrations() {
  try {
    const migrationSQL = readFileSync(join(__dirname, '../migrations/01_initial.sql'), 'utf-8')
    
    await sequelize.query(migrationSQL)
    console.log('Migrations completed successfully')
  } catch (error) {
    console.error('Migration failed:', error)
    process.exit(1)
  } finally {
    await sequelize.close()
  }
}

runMigrations()
