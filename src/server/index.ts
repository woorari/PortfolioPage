
import express from 'express';
import cors from 'cors';
import portfolioRoutes from './routes/portfolio';
import blogRoutes from './routes/blog';
import cvRoutes from './routes/cv';
import contactRoutes from './routes/contact';

const app = express();
const server = app.listen(3001, '0.0.0.0', () => {
  console.log('Server running on http://0.0.0.0:3001');
});

app.use(cors());
app.use(express.json());

app.use('/api/portfolio', portfolioRoutes);
app.use('/api/blog', blogRoutes);
app.use('/api/cv', cvRoutes);
app.use('/api/contact', contactRoutes);

export { app, server };
