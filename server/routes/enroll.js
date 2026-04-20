import { Router } from 'express';
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const enrollmentsPath = join(__dirname, '..', 'data', 'enrollments.json');

const router = Router();

function readEnrollments() {
  try {
    return JSON.parse(readFileSync(enrollmentsPath, 'utf-8'));
  } catch {
    return [];
  }
}

function writeEnrollments(list) {
  writeFileSync(enrollmentsPath, JSON.stringify(list, null, 2));
}

router.post('/', (req, res) => {
  try {
    const { courseId, courseTitle, name, email, phone } = req.body || {};
    if (!courseTitle) {
      return res.status(400).json({ error: 'Course title is required' });
    }
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }
    const enrollments = readEnrollments();
    const entry = {
      id: String(Date.now()),
      courseId: courseId != null ? String(courseId) : '',
      courseTitle: String(courseTitle).trim(),
      name: String(name).trim(),
      email: String(email).trim(),
      phone: phone ? String(phone).trim() : '',
      createdAt: new Date().toISOString(),
    };
    enrollments.push(entry);
    writeEnrollments(enrollments);
    res.status(201).json({ success: true, message: 'Enrollment request saved', enrollmentId: entry.id });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save enrollment' });
  }
});

router.get('/', (req, res) => {
  try {
    const enrollments = readEnrollments();
    res.json(enrollments);
  } catch (err) {
    res.status(500).json({ error: 'Failed to load enrollments' });
  }
});

export default router;
