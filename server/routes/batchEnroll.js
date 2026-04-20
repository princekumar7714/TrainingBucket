import { Router } from 'express';
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { apiSuccess, apiError, paginate } from '../utils/response.js';
import { isRequired, isEmail, validate } from '../utils/validate.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = join(__dirname, '..', 'data', 'batch_enrollments.json');

const router = Router();

function read() {
  try {
    return JSON.parse(readFileSync(filePath, 'utf-8'));
  } catch {
    return [];
  }
}

function write(list) {
  writeFileSync(filePath, JSON.stringify(list, null, 2));
}

router.post('/', (req, res, next) => {
  try {
    const err = validate(req.body || {}, {
      batchId: (v) => isRequired(v, 'Batch'),
      batchCourse: (v) => isRequired(v, 'Course name'),
      name: (v) => isRequired(v, 'Name'),
      email: (v) => isEmail(v),
      phone: (v) => isRequired(v, 'Phone'),
    });
    if (err) return apiError(res, err, 400);

    const { batchId, batchCourse, name, email, phone, message } = req.body;
    const list = read();
    const entry = {
      id: String(Date.now()),
      batchId: String(batchId).trim(),
      batchCourse: String(batchCourse).trim(),
      name: String(name).trim(),
      email: String(email).trim(),
      phone: String(phone).trim(),
      message: message ? String(message).trim() : '',
      createdAt: new Date().toISOString(),
    };
    list.push(entry);
    write(list);
    return apiSuccess(res, { id: entry.id }, 'Batch enrollment request submitted', 201);
  } catch (e) {
    next(e);
  }
});

router.get('/', (req, res, next) => {
  try {
    const list = read();
    const { page, limit } = req.query;
    const result = paginate(list, page, limit);
    return apiSuccess(res, result, 'OK');
  } catch (e) {
    next(e);
  }
});

export default router;
