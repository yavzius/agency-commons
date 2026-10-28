import { site } from '../site.config.mjs';
import { getCollection } from 'astro:content';
import { visiblePosts, postPath, escapeXML } from '../lib/blog.mjs';

export async function GET() {
  const posts = visiblePosts(await getCollection('blog'));
  const paths = ['/', ...(posts.length ? ['/blog/', ...posts.map(postPath)] : [])];
  const page = !site.isDemo && site.allowIndexing && site.url
    ? paths.map(path => `<url><loc>${escapeXML(new URL(path, site.url).href)}</loc></url>`).join('') : '';
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${page}</urlset>`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' }
  });
}
