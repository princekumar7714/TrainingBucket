import { Router } from 'express';
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = join(__dirname, '..', 'data', 'program_views.json');

const router = Router();

function readViews() {
  try {
    return JSON.parse(readFileSync(filePath, 'utf-8'));
  } catch {
    return [];
  }
}

function writeViews(list) {
  writeFileSync(filePath, JSON.stringify(list, null, 2));
}

router.post('/', (req, res) => {
  try {
    const { courseId, courseTitle } = req.body || {};
    if (!courseTitle) {
      return res.status(400).json({ error: 'Course title is required' });
    }
    const views = readViews();
    views.push({
      id: String(Date.now()),
      courseId: courseId != null ? String(courseId) : '',
      courseTitle: String(courseTitle).trim(),
      viewedAt: new Date().toISOString(),
    });
    writeViews(views);
    res.status(201).json({ success: true, message: 'View recorded' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save program view' });
  }
});

router.get('/', (req, res) => {
  try {
    res.json(readViews());
  } catch (err) {
    res.status(500).json({ error: 'Failed to load program views' });
  }
});

export default router;
