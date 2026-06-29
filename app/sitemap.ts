import type { MetadataRoute } from "next";
import { projects } from "./data/projects";
import { siteUrl } from "./seo";

const staticRoutes = [
  "",
  "/about",
  "/contact",
  "/resume",
  "/resume/ats",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const projectRoutes = projects
    .filter((project) => project.link.startsWith("/") && !project.inProgress)
    .map((project) => project.link);

  return [...staticRoutes, ...projectRoutes].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/resume" ? 0.8 : 0.7,
  }));
}
