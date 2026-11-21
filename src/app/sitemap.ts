import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
 const base="https://uprisestudios.co.uk";
 const paths=["","/about","/contact","/journal","/journal/local-first-is-a-design-choice","/journal/building-without-pressure-mechanics","/lumen","/tally","/desktop","/games","/privacy","/advertising"];
 return paths.map(path=>({url:base+path,changeFrequency:path===""?"weekly":"monthly",priority:path===""?1:0.6}));
}