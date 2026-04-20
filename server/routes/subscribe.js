import { Router } from 'express';
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const subscribersPath = join(__dirname, '..', 'data', 'subscribers.json');

const router = Router();

function readSubscribers() {
  try {
    return JSON.parse(readFileSync(subscribersPath, 'utf-8'));
  } catch {
    return [];
  }
}

function writeSubscribers(list) {
  writeFileSync(subscribersPath, JSON.stringify(list, null, 2));
}

router.post('/', (req, res) => {
  try {
    const { email } = req.body || {};
    const trimmed = email ? String(email).trim() : '';
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      return res.status(400).json({ error: 'Valid email is required' });
    }
    const subscribers = readSubscribers();
    if (subscribers.some((s) => s.email.toLowerCase() === trimmed.toLowerCase())) {
      return res.status(200).json({ success: true, message: 'Already subscribed' });
    }
    subscribers.push({
      id: String(Date.now()),
      email: trimmed,
      createdAt: new Date().toISOString(),
    });
    writeSubscribers(subscribers);
    res.status(201).json({ success: true, message: 'Subscribed successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to subscribe' });
  }
});

router.get('/', (req, res) => {
  try {
    const subscribers = readSubscribers();
    res.json(subscribers);
  } catch (err) {
    res.status(500).json({ error: 'Failed to load subscribers' });
  }
});

export default router;
