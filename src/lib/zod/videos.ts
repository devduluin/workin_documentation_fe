import { z } from "zod";

export const videoSchema = z.object({
  video_category_id: z.uuid("Invalid category ID"),
  title: z
    .string()
    .min(3, "Title minimal 3 karakter")
    .max(100, "Title maksimal 100 karakter"),
  youtube_id: z.string(),
});

export type VideoFormValues = z.infer<typeof videoSchema>;
