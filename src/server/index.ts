import express from 'express';
import cors from 'cors';
import portfolioRoutes from './routes/portfolio';
import blogRoutes from './routes/blog';
import cvRoutes from './routes/cv';
import contactRoutes from './routes/contact';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/portfolio', portfolioRoutes);
app.use('/api/blog', blogRoutes);
app.use('/api/cv', cvRoutes);
app.use('/api/contact', contactRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export { app, server };
