
import { Pool } from 'pg';

const databaseUrl = process.env.DATABASE_URL;
const poolUrl = databaseUrl?.replace('.us-east-2', '-pooler.us-east-2');

const pool = new Pool({
  connectionString: poolUrl,
  max: 10,
  ssl: {
    rejectUnauthorized: false
  }
});

export default pool;
