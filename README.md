# FanFest 2026 MERN Clone

A responsive MERN stack recreation of the FanFest 2026 landing experience.

## Structure

- client/ — Vite + React + Tailwind frontend
- server/ — Express + MongoDB API backend

## Run locally

### Frontend

```bash
cd client
npm install
npm run dev
```

### Backend

```bash
cd server
npm install
cp .env.example .env
npm start

## Deployment

- Frontend: Vercel
- Backend: Render

Set the Render environment variable `MONGO_URI` to your MongoDB connection string.
