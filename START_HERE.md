# Start Backend + Frontend

## Option 1: One command (both together)

From project root **d:\TrainingBucket**:

```bash
npm install
npm run dev
```

This starts **API (port 3000)** and **Frontend (port 5173)** together.  
Open: **http://localhost:5173**

---

## Option 2: Two terminals

**Terminal 1 – Backend**
```bash
cd d:\TrainingBucket
npm run server
```
Wait until you see: `Server running at http://localhost:3000`

**Terminal 2 – Frontend**
```bash
cd d:\TrainingBucket
npm run client
```
Then open: **http://localhost:5173**

---

## If you see "ECONNREFUSED 127.0.0.1:3000"

The frontend is running but the **backend is not**. Start the backend:

- From **d:\TrainingBucket** run: **`npm run server`**  
  or  
- Open **d:\TrainingBucket\server** and run: **`npm start`**

Keep that terminal open. The green "API connected" badge will appear when the backend is running.
