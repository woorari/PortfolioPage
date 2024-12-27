import express from 'express'
import cors from 'cors'
import portfolioRoutes from './routes/portfolio'
import blogRoutes from './routes/blog'
import contactRoutes from './routes/contact'

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use('/portfolio', portfolioRoutes)
app.use('/blog', blogRoutes)
app.use('/contact', contactRoutes)

export { app } 