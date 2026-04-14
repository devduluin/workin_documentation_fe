import { z } from "zod";

export const categorySchema = z.object({
  name: z
    .string()
    .min(3, "Name minimal 3 karakter")
    .max(100, "Name maksimal 100 karakter"),
  article_id: z.uuid("Invalid article ID"),
});

export type CategoryFormValues = z.infer<typeof categorySchema>;
