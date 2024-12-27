import express from 'express'
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

app.use(helmet())  // Sicherheits-Header
app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-API-Key']
}))
app.use(express.json({ limit: '10kb' }))  // Body size limit
app.use(limiter)

// Public routes mit basic auth
app.use('/api/portfolio', publicAuth, portfolioRoutes)
app.use('/api/blog', publicAuth, blogRoutes)

// Protected routes mit JWT auth
app.use('/api/contact', auth, contactRoutes)

export { app } 