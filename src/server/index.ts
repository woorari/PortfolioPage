
import express from 'express';
import cors from 'cors';
import pool from '../lib/db';

const app = express();
app.use(cors());
app.use(express.json());

// GET all games
app.get('/api/games', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM games');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3001, '0.0.0.0', () => {
  console.log('Server running on port 3001');
});
