import { z } from "zod";

export const articleSchema = z.object({
  name: z
    .string()
    .min(3, "Name minimal 3 karakter")
    .max(100, "Name maksimal 100 karakter"),
});

export type ArticleFormValues = z.infer<typeof articleSchema>;
