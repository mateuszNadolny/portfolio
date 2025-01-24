import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.mnadolny.com",
      lastModified: new Date(),
    },
  ];
}
