
import { Router, Request, Response, RequestHandler } from 'express';
import pool from '../../lib/db';

interface ContactBody {
  name: string;
  email: string;
  message: string;
}

const router = Router();

router.post('/', (async (req: Request<{}, {}, ContactBody>, res: Response) => {
  try {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const result = await pool.query(
      'INSERT INTO contact_messages (name, email, message) VALUES ($1, $2, $3) RETURNING *',
      [name, email, message]
    );
    
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}) as RequestHandler);

export default router;
