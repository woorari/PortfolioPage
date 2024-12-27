import express from 'express';
import cors from 'cors';
import portfolioRoutes from './routes/portfolio';
import blogRoutes from './routes/blog';
import cvRoutes from './routes/cv';
import contactRoutes from './routes/contact';
import { Server } from 'http';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/portfolio', portfolioRoutes);
app.use('/api/blog', blogRoutes);
app.use('/api/cv', cvRoutes);
app.use('/api/contact', contactRoutes);

// Server-Start in separate Funktion mit explizitem Return-Typ
const startServer = (port: number = 3001): Promise<Server> => {
  return new Promise((resolve, reject) => {
    try {
      const server = app.listen(port, '0.0.0.0', () => {
        console.log(`Server running on http://0.0.0.0:${port}`);
        resolve(server);
      });

      server.on('error', (err: NodeJS.ErrnoException) => {
        if (err.code === 'EADDRINUSE' && port < 3010) {
          resolve(startServer(port + 1));
        } else {
          reject(err);
        }
      });
    } catch (err) {
      reject(err);
    }
  });
};

// Nur starten wenn nicht in Test-Umgebung
if (process.env.NODE_ENV !== 'test') {
  startServer();
}

export { app, startServer };
