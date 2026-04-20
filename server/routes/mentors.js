import { Router } from 'express';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = Router();

function getMentors() {
  const path = join(__dirname, '..', 'data', 'mentors.json');
  return JSON.parse(readFileSync(path, 'utf-8'));
}

router.get('/', (req, res) => {
  try {
    const mentors = getMentors();
    res.json(mentors);
  } catch (err) {
    res.status(500).json({ error: 'Failed to load mentors' });
  }
});

export default router;
