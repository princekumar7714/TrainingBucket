# Training Bucket – Backend API

Node.js (Express) backend for the Training Bucket frontend.

## Setup

```bash
cd server
npm install
npm start
```

Runs at **http://localhost:3000** by default. Use `PORT=4000 npm start` to change port.

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| GET | `/api/courses` | List all courses |
| GET | `/api/courses/:id` | Get course by id |
| GET | `/api/batches` | List batches (optional `?q=` to filter by course name) |
| GET | `/api/batches/search?q=` | Search batches by course name |
| GET | `/api/news` | List news items |
| GET | `/api/mentors` | List mentors |
| GET | `/api/blogs` | List blog posts |
| POST | `/api/contact` | Submit contact form (body: `name`, `email`, `phone?`, `message?`) |
| GET | `/api/contact` | List contact submissions |
| POST | `/api/subscribe` | Newsletter subscribe (body: `email`) |
| GET | `/api/subscribe` | List subscribers |
| POST | `/api/enroll` | Course enrollment (body: `courseId`, `courseTitle`, `name`, `email`, `phone?`) |
| GET | `/api/enroll` | List enrollment requests |
| POST | `/api/program-view` | Record "View Program" click (body: `courseId`, `courseTitle`) |
| GET | `/api/program-view` | List program views |
| POST | `/api/whatsapp-click` | Record WhatsApp open (body: `courseId`, `courseTitle`, `enrollmentId?`) |
| GET | `/api/whatsapp-click` | List WhatsApp clicks |
| POST | `/api/corporate` | Corporate enquiry (body: `companyName`, `contactPerson`, `email`, `phone`, `message?`, `employeeCount?`, `trainingType?`) |
| GET | `/api/corporate` | List corporate enquiries (paginated: `?page=`, `?limit=`) |
| POST | `/api/batch-enroll` | Batch enrollment (body: `batchId`, `batchCourse`, `name`, `email`, `phone`, `message?`) |
| GET | `/api/batch-enroll` | List batch enrollments (paginated) |
| POST | `/api/career-enquiry` | Career/advisor form (body: `name`, `email`, `phone`, `course`, `branch?`) |
| GET | `/api/career-enquiry` | List career enquiries (paginated) |
| POST | `/api/certificate-request` | Certificate request (body: `name`, `email`, `phone`, `courseName`, `completionDate?`) |
| GET | `/api/certificate-request` | List certificate requests (paginated) |
| GET | `/api/admin/stats` | Dashboard stats (counts for all leads/views) |
| GET | `/api/courses?category=&search=` | Filter courses by category or search |

## Data

- Read-only: `data/courses.json`, `batches.json`, `news.json`, `mentors.json`, `blogs.json`
- Persisted: `contacts.json`, `subscribers.json`, `enrollments.json`, `program_views.json`, `whatsapp_clicks.json`, `corporate_enquiries.json`, `batch_enrollments.json`, `career_enquiries.json`, `certificate_requests.json`

## Middleware

- **helmet** – security headers  
- **morgan** – request logging  
- **express-rate-limit** – general (200/15min), submit (30/15min) for forms  
- **Validation** – required fields and email format on all POST bodies  
- **Central error handler** – consistent error responses

## Frontend

From the project root, run the Vite app with proxy to this API:

```bash
cd TrainingBucket
npm run dev
```

Vite proxies `/api` to `http://localhost:3000`, so the frontend uses `/api/...` and all logic runs against this backend.
