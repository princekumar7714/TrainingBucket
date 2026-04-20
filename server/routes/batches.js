import { Router } from 'express';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = Router();

function getBatches() {
  const path = join(__dirname, '..', 'data', 'batches.json');
  return JSON.parse(readFileSync(path, 'utf-8'));
}

// More specific route first
router.get('/search', (req, res) => {
  try {
    const q = (req.query.q || '').trim().toLowerCase();
    const batches = getBatches();
    const filtered = q
      ? batches.filter((b) => b.course.toLowerCase().includes(q))
      : batches;
    res.json(filtered);
  } catch (err) {
    res.status(500).json({ error: 'Search failed' });
  }
});

router.get('/', (req, res) => {
  try {
    const q = (req.query.q || '').trim().toLowerCase();
    let batches = getBatches();
    if (q) {
      batches = batches.filter((b) =>
        b.course.toLowerCase().includes(q)
      );
    }
    res.json(batches);
  } catch (err) {
    res.status(500).json({ error: 'Failed to load batches' });
  }
});

export default router;
