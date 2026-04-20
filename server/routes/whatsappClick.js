import { Router } from 'express';
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = join(__dirname, '..', 'data', 'whatsapp_clicks.json');

const router = Router();

function readClicks() {
  try {
    return JSON.parse(readFileSync(filePath, 'utf-8'));
  } catch {
    return [];
  }
}

function writeClicks(list) {
  writeFileSync(filePath, JSON.stringify(list, null, 2));
}

router.post('/', (req, res) => {
  try {
    const { courseId, courseTitle, enrollmentId } = req.body || {};
    if (!courseTitle) {
      return res.status(400).json({ error: 'Course title is required' });
    }
    const clicks = readClicks();
    clicks.push({
      id: String(Date.now()),
      courseId: courseId != null ? String(courseId) : '',
      courseTitle: String(courseTitle).trim(),
      enrollmentId: enrollmentId ? String(enrollmentId) : '',
      clickedAt: new Date().toISOString(),
    });
    writeClicks(clicks);
    res.status(201).json({ success: true, message: 'WhatsApp click recorded' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save WhatsApp click' });
  }
});

router.get('/', (req, res) => {
  try {
    res.json(readClicks());
  } catch (err) {
    res.status(500).json({ error: 'Failed to load WhatsApp clicks' });
  }
});

export default router;
