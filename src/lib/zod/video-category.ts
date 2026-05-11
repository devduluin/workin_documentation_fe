import { z } from "zod";

export const videoCategorySchema = z.object({
  name: z
    .string()
    .min(3, "Name minimal 3 karakter")
    .max(100, "Name maksimal 100 karakter"),
});

export type VideoCategoryFormValues = z.infer<typeof videoCategorySchema>;
