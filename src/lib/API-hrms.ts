const API =
  process.env.NEXT_PUBLIC_API_UL || "https://apidocs-hrms.duluin.com/api";

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

export const ApiHrms = {
  getCategory: () => fetcher<any[]>("/categories"),
  getSection: (slug: string) => fetcher<any>(`/sections/document/${slug}`),
  getCategoryDetails: (slug: string) => fetcher<any>(`/categories/${slug}`),
};

export async function getCategory(slug: string) {
  const res = await fetch(
    `https://apidocs-hrms.duluin.com/api/sections/${slug}`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) throw new Error("Failed");

  const data = await res.json();
  return data.data;
}
