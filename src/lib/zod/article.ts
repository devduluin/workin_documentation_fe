import { z } from "zod";

export const articleSchema = z.object({
  title_tab: z
    .string()
    .min(3, "Title Tab minimal 3 karakter")
    .max(100, "Title Tab maksimal 100 karakter"),
  title_content: z
    .string()
    .min(3, "Title Content minimal 3 karakter")
    .max(100, "Title Content maksimal 100 karakter"),
  category_id: z.uuid("Invalid category ID"),
  content: z
    .string()
    .min(1, "Content tidak boleh kosong")
    .min(16, "Content minimal 16 karakter"),
  // .max(5000, "Content maksimal 5000 karakter"),
});

export type ArticleFormValues = z.infer<typeof articleSchema>;
