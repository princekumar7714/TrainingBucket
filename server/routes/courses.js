import { Router } from 'express';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = Router();

function getCourses() {
  const path = join(__dirname, '..', 'data', 'courses.json');
  return JSON.parse(readFileSync(path, 'utf-8'));
}

router.get('/', (req, res) => {
  try {
    let courses = getCourses();
    const category = (req.query.category || '').trim().toLowerCase();
    const search = (req.query.search || req.query.q || '').trim().toLowerCase();
    if (category) {
      courses = courses.filter((c) => (c.category || '').toLowerCase() === category);
    }
    if (search) {
      courses = courses.filter(
        (c) =>
          (c.title || '').toLowerCase().includes(search) ||
          (c.category || '').toLowerCase().includes(search)
      );
    }
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: 'Failed to load courses' });
  }
});

router.get('/:id', (req, res) => {
  try {
    const courses = getCourses();
    const id = parseInt(req.params.id, 10);
    const course = courses.find((c) => c.id === id);
    if (!course) return res.status(404).json({ error: 'Course not found' });
    res.json(course);
  } catch (err) {
    res.status(500).json({ error: 'Failed to load course' });
  }
});

export default router;
