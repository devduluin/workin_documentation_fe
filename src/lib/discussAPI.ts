const normalizeApiBase = (value: string) => {
  const trimmed = value.replace(/\/+$/, "");
  if (trimmed.endsWith("/api")) return `${trimmed}/v1`;
  return trimmed;
};

const API = normalizeApiBase(
  process.env.NEXT_PUBLIC_API_URL || "https://apidocs-hrms.duluin.com/api/v1",
);

function getToken() {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("discuss_token");
}

async function fetcher<T>(
  endpoint: string,
  options: RequestInit = {},
): Promise<T> {
  const token = getToken();
  const res = await fetch(`${API}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...((options.headers as Record<string, string>) || {}),
    },
    credentials: "include",
    ...options,
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: "Request failed" }));
    throw new Error(err.error || "Request failed");
  }
  return res.json();
}

export const discussApi = {
  // Auth
  login: (body: { username: string; password: any }) =>
    fetcher<{ token: string; user: any }>("/auth/login", {
      method: "POST",
      body: JSON.stringify(body),
    }),
  logout: () => fetcher<any>("/auth/logout", { method: "POST" }),
  register: (body: { username: string; email: string; password: string }) =>
    fetcher<{ token: string; user: any }>("/auth/register", {
      method: "POST",
      body: JSON.stringify(body),
    }),
  me: () => fetcher<any>("/auth/me"),

  // Forums
  getForums: () => fetcher<any[]>("/forums"),
  getForum: (slug: string) => fetcher<any>(`/forums/${slug}`),

  // Topics
  getTopics: (params?: Record<string, string>) => {
    const qs = params ? "?" + new URLSearchParams(params).toString() : "";
    return fetcher<{ topics: any[]; total: number; totalPages: number }>(
      `/topics${qs}`,
    );
  },
  getTopic: (id: string) => fetcher<any>(`/topics/${id}`),
  createTopic: (body: any) =>
    fetcher<any>("/topics", { method: "POST", body: JSON.stringify(body) }),
  updateTopic: (id: string, body: any) =>
    fetcher<any>(`/topics/${id}`, {
      method: "PUT",
      body: JSON.stringify(body),
    }),
  deleteTopic: (id: string) =>
    fetcher<any>(`/topics/${id}`, { method: "DELETE" }),

  // Comment
  addComment: (topicId: string, body: { content: string }) =>
    fetcher<any>(`/comments/${topicId}`, {
      method: "POST",
      body: JSON.stringify(body),
    }),
  deleteComment: (id: string) =>
    fetcher<any>(`/comments/${id}`, { method: "DELETE" }),

  // Likes
  toggleLike: (topicId: string) =>
    fetcher<{ liked: boolean }>(`/likes/${topicId}`, { method: "POST" }),

  // Tags
  getTags: () => fetcher<any[]>("/tags"),

  // Users
  getTopContributors: () => fetcher<any[]>("/users/top-contributors"),
  getMyTopics: () => fetcher<any[]>("/users/my-topics"),
  getAdminUsers: () => fetcher<any[]>("/users/admin/all"),
  adminDeleteUser: (id: string) =>
    fetcher<any>(`/users/admin/${id}`, { method: "DELETE" }),
  adminChangeRole: (id: string, role: string) =>
    fetcher<any>(`/users/admin/${id}/role`, {
      method: "PATCH",
      body: JSON.stringify({ role }),
    }),
};
