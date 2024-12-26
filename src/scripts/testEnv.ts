
import { execSync } from 'child_process'

const pgVars = [
  'DATABASE_URL',
  'PGDATABASE',
  'PGHOST',
  'PGPORT',
  'PGUSER',
  'PGPASSWORD'
]

async function checkEnvironment() {
  console.log('Checking Database Environment Variables:')
  console.log('-------------------------------------')
  
  pgVars.forEach(varName => {
    const value = process.env[varName]
    console.log(`${varName}: ${value ? '✓ (set)' : '✗ (not set)'}`)
    
    if (value && varName !== 'PGPASSWORD') {
      console.log(`  Value: ${value}`)
    }
  })
}

checkEnvironment().catch(console.error)
