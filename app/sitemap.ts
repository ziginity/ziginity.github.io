import type { MetadataRoute } from "next";

import { games } from "@/lib/games";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    ...games.map((g) => `/${g.slug}/`),
    "/privacy-policy/",
    "/term-of-use/",
  ];
  return paths.map((path) => ({ url: `${SITE_URL}${path}` }));
}
