import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bhukkadh.hindustaan.in";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/delete-account"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
