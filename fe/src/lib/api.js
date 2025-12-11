import apiClient from './axios';

// ==================== AUTH API ====================
export const authAPI = {
  // Login
  login: async (email, password) => {
    const response = await apiClient.post('/auth/login', { email, password });
    return response.data;
  },

  // Register
  register: async (username, email, password) => {
    const response = await apiClient.post('/auth/register', { username, email, password });
    return response.data;
  },

  // Logout
  logout: async () => {
    const response = await apiClient.post('/auth/logout');
    return response.data;
  },

  // Check auth status
  checkAuth: async () => {
    const response = await apiClient.get('/auth/check');
    return response.data;
  },
};

// ==================== CATEGORIES API ====================
export const categoriesAPI = {
  // Get all categories
  getAll: async () => {
    const response = await apiClient.get('/categories');
    return response.data;
  },

  // Get category by ID
  getById: async (id) => {
    const response = await apiClient.get(`/categories/${id}`);
    return response.data;
  },

  // Create category (Admin only)
  create: async (data) => {
    const response = await apiClient.post('/categories', data);
    return response.data;
  },

  // Update category (Admin only)
  update: async (id, data) => {
    const response = await apiClient.put(`/categories/${id}`, data);
    return response.data;
  },

  // Delete category (Admin only)
  delete: async (id) => {
    const response = await apiClient.delete(`/categories/${id}`);
    return response.data;
  },
};

// ==================== DOCUMENTS API ====================
export const documentsAPI = {
  // Get all documents
  getAll: async () => {
    const response = await apiClient.get('/documents');
    return response.data;
  },

  // Get documents by category
  getByCategory: async (categoryId) => {
    const response = await apiClient.get(`/documents/category/${categoryId}`);
    return response.data;
  },

  // Get document by ID
  getById: async (id) => {
    const response = await apiClient.get(`/documents/${id}`);
    return response.data;
  },

  // Create document (Admin only)
  create: async (data) => {
    const response = await apiClient.post('/documents', data);
    return response.data;
  },

  // Update document (Admin only)
  update: async (id, data) => {
    const response = await apiClient.put(`/documents/${id}`, data);
    return response.data;
  },

  // Delete document (Admin only)
  delete: async (id) => {
    const response = await apiClient.delete(`/documents/${id}`);
    return response.data;
  },
};

// ==================== SECTIONS API ====================
export const sectionsAPI = {
  // Get all sections
  getAll: async () => {
    const response = await apiClient.get('/sections');
    return response.data;
  },

  // Get sections by document ID
  getByDocument: async (documentId) => {
    const response = await apiClient.get(`/sections/document/${documentId}`);
    return response.data;
  },

  // Get section by ID
  getById: async (id) => {
    const response = await apiClient.get(`/sections/${id}`);
    return response.data;
  },

  // Create section (Admin only)
  create: async (data) => {
    const response = await apiClient.post('/sections', data);
    return response.data;
  },

  // Update section (Admin only)
  update: async (id, data) => {
    const response = await apiClient.put(`/sections/${id}`, data);
    return response.data;
  },

  // Delete section (Admin only)
  delete: async (id) => {
    const response = await apiClient.delete(`/sections/${id}`);
    return response.data;
  },
};

// ==================== SEARCH API ====================
export const searchAPI = {
  // Search documents and sections
  search: async (query) => {
    const response = await apiClient.get('/search', { params: { q: query } });
    return response.data;
  },
};

// ==================== UPLOAD API ====================
export const uploadAPI = {
  // Upload image
  uploadImage: async (file) => {
    const formData = new FormData();
    formData.append('image', file);
    
    const response = await apiClient.post('/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },
};

// Export all APIs
export default {
  auth: authAPI,
  categories: categoriesAPI,
  documents: documentsAPI,
  sections: sectionsAPI,
  search: searchAPI,
  upload: uploadAPI,
};
