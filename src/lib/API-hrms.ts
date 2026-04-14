const normalizeApiBase = (value: string) => {
  const trimmed = value.replace(/\/+$/, "");
  if (trimmed.endsWith("/api")) return `${trimmed}/v1`;
  return trimmed;
};

const API = normalizeApiBase(
  process.env.NEXT_PUBLIC_API_URL || "https://apidocs-hrms.duluin.com/api/v1",
);

async function fetcher<T>(
  endpoint: string,
  options: RequestInit = {},
): Promise<T> {
  const res = await fetch(`${API}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...((options.headers as Record<string, string>) || {}),
    },
    ...options,
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: "Request failed" }));
    throw new Error(err.error || "Request failed");
  }
  const data = await res.json();
  return data.data;
}

async function fetcherMeta<T>(
  endpoint: string,
  options: RequestInit = {},
): Promise<T> {
  const res = await fetch(`${API}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...((options.headers as Record<string, string>) || {}),
    },
    ...options,
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: "Request failed" }));
    throw new Error(err.error || "Request failed");
  }
  const data = await res.json();
  return data;
}

type PaginatedResponse<T> = {
  data: T[];
  meta: {
    current_page: number;
    per_page: number;
    total_pages: number;
    total_items: number;
  };
};

export const ApiHrms = {
  // Document API
  getDocuments: (page = 1) =>
    fetcherMeta<PaginatedResponse<any>>(`/documents?page=${page}`),
  getDocumentById: (id: string) => fetcher<any>(`/documents/${id}`),
  AddDocument: (data: {
    category_id: string;
    title_tab: string;
    title_content: string;
    content: string;
  }) =>
    fetcher("/documents", {
      method: "POST",
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
      body: JSON.stringify(data),
    }),

  EditDocument: (
    id: string,
    data: {
      category_id: string;
      title_tab: string;
      title_content: string;
      content: string;
    },
  ) =>
    fetcher(`/documents/${id}`, {
      method: "PUT",
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
      body: JSON.stringify(data),
    }),

  DeleteDocument: (id: string) =>
    fetcher(`/documents/${id}`, {
      method: "DELETE",
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
    }),

  // Article
  getArticles: (page = 1) =>
    fetcherMeta<PaginatedResponse<any>>(`/articles?page=${page}`),
  getArticle: () => fetcher<any[]>("/articles"),
  getArticleById: (id: string) => fetcher<any>(`/articles/${id}`),
  getSidebar: () => fetcher<any[]>("/articles/sidebar"),
  addArticle: (data: { name: string }) =>
    fetcher("/articles", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  editArticle: (id: string, data: { name: string }) =>
    fetcher(`/articles/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),

  deleteArticle: (id: string) =>
    fetcher(`/articles/${id}`, {
      method: "DELETE",
    }),

  // Category
  getCategories: (page = 1) =>
    fetcherMeta<PaginatedResponse<any>>(`/categories?page=${page}`),
  getCategory: () => fetcher<any[]>("/categories"),
  getCategoryById: (id: string) => fetcher<any>(`/categories/${id}`),
  addCategory: (data: { name: string; article_id: string }) =>
    fetcher("/categories", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  editCategory: (id: string, data: { name: string; article_id: string }) =>
    fetcher(`/categories/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),

  deleteCategory: (id: string) =>
    fetcher(`/categories/${id}`, {
      method: "DELETE",
    }),
};
