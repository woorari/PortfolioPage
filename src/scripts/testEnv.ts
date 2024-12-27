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
    console.log('NOTE: This test should be run in the Replit shell, not in Cursor/VSCode!')
    console.log('----------------------------------------------------------------')
    console.log('Running in Replit shell: ', process.env.REPL_ID ? '✓ yes' : '✗ no')
    console.log('')
    
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

console.log('\nRepl URL:')
console.log(`https://${process.env.REPL_SLUG}.${process.env.REPLIT_DEV_DOMAIN}`)e.error)
