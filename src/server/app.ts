import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'
import rateLimit from 'express-rate-limit'
import helmet from 'helmet'
import portfolioRoutes from './routes/portfolio'
import blogRoutes from './routes/blog'
import contactRoutes from './routes/contact'
import { auth, publicAuth } from './middleware/auth'

const app = express()

// Security middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
})

// Middleware-Reihenfolge ist wichtig!
app.use(helmet({
  frameguard: { action: 'deny' },
  xssFilter: true,
  noSniff: true,
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'none'"],
      scriptSrc: ["'self'"],
      styleSrc: ["'self'"],
      imgSrc: ["'self'"]
    }
  }
}))

app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-API-Key']
}))
app.use(express.json({ limit: '10kb' }))
app.use(limiter)

// API Routes
app.use('/api/portfolio', publicAuth, portfolioRoutes)
app.use('/api/blog', publicAuth, blogRoutes)
app.use('/api/contact', auth, contactRoutes)

// Error Handler
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err.stack)
  res.sendStatus(500)
})

export { app } 