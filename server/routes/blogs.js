import { Router } from 'express';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = Router();

function getBlogs() {
  const path = join(__dirname, '..', 'data', 'blogs.json');
  return JSON.parse(readFileSync(path, 'utf-8'));
}

router.get('/', (req, res) => {
  try {
    const blogs = getBlogs();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: 'Failed to load blogs' });
  }
});

export default router;
