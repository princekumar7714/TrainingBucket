import { Router } from 'express';
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const contactsPath = join(__dirname, '..', 'data', 'contacts.json');

const router = Router();

function readContacts() {
  try {
    return JSON.parse(readFileSync(contactsPath, 'utf-8'));
  } catch {
    return [];
  }
}

function writeContacts(contacts) {
  writeFileSync(contactsPath, JSON.stringify(contacts, null, 2));
}

router.post('/', (req, res) => {
  try {
    const { name, email, phone, message } = req.body || {};
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }
    const contacts = readContacts();
    const entry = {
      id: String(Date.now()),
      name: String(name).trim(),
      email: String(email).trim(),
      phone: phone ? String(phone).trim() : '',
      message: message ? String(message).trim() : '',
      createdAt: new Date().toISOString(),
    };
    contacts.push(entry);
    writeContacts(contacts);
    res.status(201).json({ success: true, message: 'Message sent successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save contact' });
  }
});

router.get('/', (req, res) => {
  try {
    const contacts = readContacts();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: 'Failed to load contacts' });
  }
});

export default router;
