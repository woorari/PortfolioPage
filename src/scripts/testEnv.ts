import { execSync } from 'child_process'
import { ReplitClient } from '@replit/node-repl'

// Liste aller Postgres-relevanten Variablen
const pgVars = [
  'DATABASE_URL',
  'PGDATABASE',
  'PGHOST',
  'PGPORT',
  'PGUSER',
  'PGPASSWORD',
  'REPLIT_DB_URL'
]

async function checkEnvironment() {
  console.log('Checking Replit Environment:')
  console.log('---------------------------')
  
  try {
    // Versuche Replit Client zu initialisieren
    const replit = new ReplitClient()
    const replitEnv = await replit.getEnvironment()
    
    console.log('Replit Environment Variables:')
    Object.entries(replitEnv).forEach(([key, value]) => {
      if (key.includes('DB') || key.includes('PG')) {
        console.log(`${key}: ${value ? '✓ (set)' : '✗ (not set)'}`)
      }
    })
  } catch (error) {
    console.error('Error accessing Replit environment:', error.message)
  }

  // Bestehende Checks...
  console.log('\nProcess Environment Variables:')
  pgVars.forEach(varName => {
    const value = process.env[varName]
    console.log(`${varName}: ${value ? '✓ (set)' : '✗ (not set)'}`)
    
    if (value && (varName.includes('URL') || varName.includes('HOST'))) {
      const safeValue = value.includes('@') 
        ? `...@${value.split('@')[1]}`
        : value
      console.log(`  Value: ${safeValue}`)
    }
  })
}

checkEnvironment().catch(console.error) 