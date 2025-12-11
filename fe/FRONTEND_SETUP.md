# Frontend Setup Guide

## 📋 Prerequisites

- Node.js 18+ installed
- Backend server running on `http://localhost:5000`

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Configuration

File `.env` dan `.env.local` sudah dikonfigurasi:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_JWT_SECRET=mrblue_*
```

### 3. Run Development Server

```bash
npm run dev
```

Application akan berjalan di: **http://localhost:3000**

### 4. Build for Production

```bash
npm run build
npm start
```

## 📡 API Integration

### API Client

Semua API calls menggunakan axios dengan konfigurasi di `src/lib/axios.js`:
- Base URL: `http://localhost:5000/api`
- Credentials: Included (untuk cookies)
- Auto redirect ke login pada 401 error

### Available API Functions

Import dari `src/lib/api.js`:

```javascript
import { authAPI, categoriesAPI, documentsAPI, sectionsAPI, searchAPI, uploadAPI } from '@/lib/api';
```

#### Authentication
```javascript
// Login
await authAPI.login('admin@workin.com', 'admin123');

// Register
await authAPI.register('username', 'email@example.com', 'password');

// Logout
await authAPI.logout();

// Check auth status
await authAPI.checkAuth();
```

#### Categories
```javascript
// Get all categories
const categories = await categoriesAPI.getAll();

// Get category by ID
const category = await categoriesAPI.getById(1);

// Create category (Admin only)
await categoriesAPI.create({ name: 'New Category' });

// Update category (Admin only)
await categoriesAPI.update(1, { name: 'Updated Name' });

// Delete category (Admin only)
await categoriesAPI.delete(1);
```

#### Documents
```javascript
// Get all documents
const docs = await documentsAPI.getAll();

// Get documents by category
const categoryDocs = await documentsAPI.getByCategory(1);

// Get document by ID
const doc = await documentsAPI.getById(1);

// Create document (Admin only)
await documentsAPI.create({ title: 'New Doc', categoryId: 1 });

// Update document (Admin only)
await documentsAPI.update(1, { title: 'Updated Title' });

// Delete document (Admin only)
await documentsAPI.delete(1);
```

#### Sections
```javascript
// Get all sections
const sections = await sectionsAPI.getAll();

// Get sections by document
const docSections = await sectionsAPI.getByDocument(1);

// Get section by ID
const section = await sectionsAPI.getById(1);

// Create section (Admin only)
await sectionsAPI.create({ 
  title: 'Section Title', 
  content: 'Content here',
  documentId: 1 
});

// Update section (Admin only)
await sectionsAPI.update(1, { title: 'Updated' });

// Delete section (Admin only)
await sectionsAPI.delete(1);
```

#### Search
```javascript
// Search documents and sections
const results = await searchAPI.search('keyword');
```

#### Upload
```javascript
// Upload image
const file = event.target.files[0];
const result = await uploadAPI.uploadImage(file);
console.log(result.url); // Image URL
```

## 🔧 Next.js Configuration

### API Proxy (next.config.mjs)

Next.js sudah dikonfigurasi untuk proxy API requests ke backend:

```javascript
async rewrites() {
  return [
    {
      source: "/api/:path*",
      destination: "http://localhost:5000/api/:path*",
    },
  ];
}
```

Ini memungkinkan frontend memanggil `/api/...` yang otomatis diteruskan ke backend.

## 📦 Dependencies

### Main Dependencies
- **Next.js 15.5.0** - React framework
- **React 19** - UI library
- **Axios** - HTTP client
- **Quill Editor** - Rich text editor
- **Tailwind CSS** - Styling
- **SweetAlert2** - Beautiful alerts
- **Lucide React** - Icons

## 🌐 Backend Integration

### Backend Requirements

Backend harus running dengan konfigurasi CORS:

```javascript
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
  optionsSuccessStatus: 200
}));
```

### Cookie-based Authentication

Backend menggunakan HTTP-only cookies untuk authentication. Frontend secara otomatis mengirim cookies dengan setiap request karena `withCredentials: true`.

## 📁 Project Structure

```
fe/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── layout.js       # Root layout
│   │   ├── page.js         # Home page
│   │   ├── login/          # Login page
│   │   ├── docs/           # Documentation pages
│   │   └── ...
│   ├── component/          # React components
│   │   ├── Header.js
│   │   └── ...
│   ├── lib/                # Utilities
│   │   ├── axios.js       # Axios configuration
│   │   └── api.js         # API functions
│   └── middleware.js       # Next.js middleware
├── public/                 # Static files
├── .env                    # Environment variables
└── next.config.mjs        # Next.js config
```

## 🔐 Authentication Flow

1. User login via `/api/auth/login`
2. Backend sets HTTP-only cookie with JWT token
3. Frontend automatically sends cookie with each request
4. Protected routes check auth status via `/api/auth/check`
5. Unauthorized requests (401) auto-redirect to login

## 🐛 Troubleshooting

### CORS Errors
Pastikan backend CORS origin sesuai: `http://localhost:3000`

### 401 Unauthorized
1. Check cookie di browser DevTools
2. Verify backend JWT_SECRET sama dengan frontend
3. Pastikan `withCredentials: true` di axios config

### Connection Refused
1. Pastikan backend running di port 5000
2. Check `.env` API URL: `http://localhost:5000/api`

### Module Not Found
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📝 Example Usage in Components

```javascript
'use client';

import { useEffect, useState } from 'react';
import { categoriesAPI, documentsAPI } from '@/lib/api';

export default function DocsPage() {
  const [categories, setCategories] = useState([]);
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    // Fetch categories
    categoriesAPI.getAll()
      .then(res => setCategories(res.data))
      .catch(err => console.error(err));

    // Fetch documents
    documentsAPI.getAll()
      .then(res => setDocuments(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Documentation</h1>
      {/* Render categories and documents */}
    </div>
  );
}
```

## 🚀 Deployment

### Production Build
```bash
npm run build
```

### Environment Variables for Production
Update `.env.production`:
```env
NEXT_PUBLIC_API_URL=https://your-api-domain.com/api
NEXT_PUBLIC_JWT_SECRET=your-production-secret
```

### Start Production Server
```bash
npm start
```

## 📞 Support

Jika ada masalah, check:
1. Backend logs di terminal backend
2. Frontend logs di browser console
3. Network tab di browser DevTools
4. Backend Swagger UI: http://localhost:5000/api-docs
