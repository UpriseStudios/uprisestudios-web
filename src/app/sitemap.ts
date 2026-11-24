import type { MetadataRoute } from "next";
import { PRIVACY_LIST } from "@/lib/privacyNotices";
export default function sitemap(): MetadataRoute.Sitemap {
 const base="https://www.uprisestudios.co.uk";
 const paths=["","/about","/contact","/journal","/journal/local-first-is-a-design-choice","/journal/building-without-pressure-mechanics","/lumen","/tally","/desktop","/games","/privacy","/advertising"];
 const notices = PRIVACY_LIST.filter(notice => notice.key !== "calmbet").map(notice => `/privacy/${notice.key}`);
 return [...paths, ...notices].map(path=>({url:base+path,changeFrequency:path===""?"weekly":"monthly",priority:path===""?1:0.6}));
}