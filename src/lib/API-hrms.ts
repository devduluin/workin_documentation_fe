// const API =
//   process.env.NEXT_PUBLIC_API_UL || "https://apidocs-hrms.duluin.com/api";
const API = "http://localhost:5000/api";

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
  getDocuments: (page = 1) =>
    fetcherMeta<PaginatedResponse<any>>(`/documents?page=${page}`),
  getCategory: () => fetcher<any[]>("/categories"),
  getArticles: () => fetcher<any[]>("/articles"),
  getSidebar: () => fetcher<any[]>("/articles/sidebar"),
  getDocumentById: (id: string) => fetcher<any>(`/documents/${id}`),

  // Required token
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
};

export async function getCategory(id: string) {
  const res = await fetch(`http://localhost:5000/api/documents/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed");

  const data = await res.json();
  return data.data;
}
