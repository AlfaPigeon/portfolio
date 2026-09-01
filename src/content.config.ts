import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    publishedAt: z.string(),
    updatedAt: z.string().optional(),
    author: z.string().optional(),
    summary: z.string(),
    image: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    dates: z.string(),
    summary: z.string(),
    technologies: z.array(z.string()),
    image: z.string().optional(),
    video: z.string().optional(),
    explainerVideo: z.string().optional(),
    links: z
      .array(
        z.object({
          type: z.string(),
          href: z.string(),
        })
      )
      .optional(),
  }),
});

export const collections = { blog, projects };
