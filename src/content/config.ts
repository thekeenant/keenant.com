import { defineCollection, z } from "astro:content";

const articles = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    unlisted: z.boolean().optional(),
    tags: z
      .array(
        z.string().refine((tag) => !tag.includes(" "), {
          message:
            "Tags cannot contain spaces. Use hyphens or camelCase instead.",
        }),
      )
      .optional(),
  }),
});

export const collections = { articles };
