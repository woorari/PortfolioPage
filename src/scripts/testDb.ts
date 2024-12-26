import { testConnection } from '../config/database'

console.log('Database configuration:', {
  host: process.env.REPLIT_DB_HOST,
  port: process.env.REPLIT_DB_PORT,
  database: process.env.REPLIT_DB_NAME,
  user: process.env.REPLIT_DB_USER,
  // password verstecken wir
})

console.log('Testing database connection...')
testConnection() 