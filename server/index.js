import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { generalLimiter, submitLimiter } from './middleware/rateLimit.js';
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js';

import coursesRouter from './routes/courses.js';
import batchesRouter from './routes/batches.js';
import newsRouter from './routes/news.js';
import mentorsRouter from './routes/mentors.js';
import blogsRouter from './routes/blogs.js';
import contactRouter from './routes/contact.js';
import subscribeRouter from './routes/subscribe.js';
import enrollRouter from './routes/enroll.js';
import programViewRouter from './routes/programView.js';
import whatsappClickRouter from './routes/whatsappClick.js';
import corporateRouter from './routes/corporate.js';
import batchEnrollRouter from './routes/batchEnroll.js';
import careerEnquiryRouter from './routes/careerEnquiry.js';
import certificateRequestRouter from './routes/certificateRequest.js';
import adminRouter from './routes/admin.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet({ crossOriginResourcePolicy: { policy: 'cross-origin' } }));
app.use(cors({ origin: true }));
app.use(morgan('dev'));
app.use(express.json({ limit: '10kb' }));
app.use(generalLimiter);

app.use('/api/courses', coursesRouter);
app.use('/api/batches', batchesRouter);
app.use('/api/news', newsRouter);
app.use('/api/mentors', mentorsRouter);
app.use('/api/blogs', blogsRouter);
app.use('/api/contact', submitLimiter, contactRouter);
app.use('/api/subscribe', submitLimiter, subscribeRouter);
app.use('/api/enroll', submitLimiter, enrollRouter);
app.use('/api/program-view', programViewRouter);
app.use('/api/whatsapp-click', whatsappClickRouter);
app.use('/api/corporate', submitLimiter, corporateRouter);
app.use('/api/batch-enroll', submitLimiter, batchEnrollRouter);
app.use('/api/career-enquiry', submitLimiter, careerEnquiryRouter);
app.use('/api/certificate-request', submitLimiter, certificateRequestRouter);
app.use('/api/admin', adminRouter);

app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    data: { status: 'ok', message: 'Training Bucket API is running', timestamp: new Date().toISOString() },
  });
});

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
