import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
 return {rules:[{userAgent:"*",allow:"/",disallow:["/marketplace/","/api/"]}],sitemap:"https://uprisestudios.co.uk/sitemap.xml"};
}