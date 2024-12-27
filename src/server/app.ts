import express from 'express'
import cors from 'cors'
import rateLimit from 'express-rate-limit'
import portfolioRoutes from './routes/portfolio'
import blogRoutes from './routes/blog'
import contactRoutes from './routes/contact'
import { auth } from './middleware/auth'

const app = express()

// Security middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use(cors())
app.use(express.json())
app.use(limiter)

// Security headers
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  next();
});

// Routes
app.use('/portfolio', portfolioRoutes)
app.use('/blog', blogRoutes)
app.use('/contact', contactRoutes)

export { app } 