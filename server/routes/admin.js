import { Router } from 'express';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { apiSuccess, apiError } from '../utils/response.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dataDir = join(__dirname, '..', 'data');

function readJson(filename) {
  try {
    return JSON.parse(readFileSync(join(dataDir, filename), 'utf-8'));
  } catch {
    return [];
  }
}

const router = Router();

router.get('/stats', (req, res, next) => {
  try {
    const contacts = readJson('contacts.json');
    const subscribers = readJson('subscribers.json');
    const enrollments = readJson('enrollments.json');
    const programViews = readJson('program_views.json');
    const whatsappClicks = readJson('whatsapp_clicks.json');
    const corporateEnquiries = readJson('corporate_enquiries.json');
    const batchEnrollments = readJson('batch_enrollments.json');
    const careerEnquiries = readJson('career_enquiries.json');
    const certificateRequests = readJson('certificate_requests.json');

    const stats = {
      contacts: contacts.length,
      subscribers: subscribers.length,
      courseEnrollments: enrollments.length,
      programViews: programViews.length,
      whatsappClicks: whatsappClicks.length,
      corporateEnquiries: corporateEnquiries.length,
      batchEnrollments: batchEnrollments.length,
      careerEnquiries: careerEnquiries.length,
      certificateRequests: certificateRequests.length,
      totalLeads:
        contacts.length +
        enrollments.length +
        corporateEnquiries.length +
        batchEnrollments.length +
        careerEnquiries.length +
        certificateRequests.length,
    };
    return apiSuccess(res, stats, 'OK');
  } catch (e) {
    next(e);
  }
});

export default router;
