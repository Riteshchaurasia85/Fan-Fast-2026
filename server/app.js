import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import siteRoutes from './routes/siteRoutes.js';

dotenv.config({ path: '.env' });

const app = express();
app.locals.dbConnected = false;

app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.locals.dbConnected = await connectDB();

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    message: 'FanFest API is running',
    database: app.locals.dbConnected ? 'connected' : 'disconnected',
  });
});

app.use('/api', siteRoutes);

app.use((err, _req, res, _next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal server error' });
});

export default app;
