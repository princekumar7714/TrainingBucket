# Training Bucket (Full Stack)

**Project root:** `d:\TrainingBucket`

## Quick start (both backend + frontend)

```bash
cd d:\TrainingBucket
npm install
npm run dev
```

- **Backend** runs at http://localhost:3000  
- **Frontend** runs at http://localhost:5173 → open this in browser  

Green **"API connected"** = backend is running. Red **"API disconnected"** = start backend (see below).

## First-time setup

```bash
cd d:\TrainingBucket
npm install
```

This installs `concurrently` at root. Then install server + client deps:

```bash
npm run install:all
```

Or manually: `npm install --prefix server` and `npm install --prefix TrainingBucket`.

## Run backend only (fix ECONNREFUSED)

If frontend shows **ECONNREFUSED 127.0.0.1:3000**, the API is not running. Start it:

```bash
cd d:\TrainingBucket
npm run server
```

Leave this terminal open. No need to `cd server` — root script runs `node server/index.js`.

## Run in two terminals

**Terminal 1 – API**
```bash
cd d:\TrainingBucket
npm run server
```

**Terminal 2 – Frontend**
```bash
cd d:\TrainingBucket
npm run client
```

## Folder structure

- `server/` – Node.js backend (Express), port 3000
- `TrainingBucket/` – React (Vite) frontend, port 5173

Vite proxies `/api` to the backend.
