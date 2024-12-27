import { Request, Response, NextFunction, RequestHandler } from 'express';
import jwt from 'jsonwebtoken';

interface AuthRequest extends Request {
  user?: any;
}

// Für öffentliche APIs mit Rate-Limiting
export const publicAuth: RequestHandler = (req: Request, res: Response, next: NextFunction): void => {
  const apiKey = req.header('X-API-Key');
  
  if (!apiKey || apiKey !== process.env.PUBLIC_API_KEY) {
    res.status(401).json({ error: 'Invalid API key' });
    return;
  }
  
  next();
};

// Für geschützte Routes mit JWT
export const auth: RequestHandler = (req: AuthRequest, res: Response, next: NextFunction): void => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      res.status(401).json({ error: 'Please authenticate' });
      return;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'default_secret');
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Please authenticate' });
  }
};
