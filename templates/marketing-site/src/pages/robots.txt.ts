import { site } from '../site.config.ts';

export function GET() {
  // Allow crawling so crawlers can see the page's noindex directive on drafts.
  // Neither robots.txt nor noindex makes a public page private.
  const sitemap = !site.isDemo && site.allowIndexing && site.url
    ? `Sitemap: ${new URL('/sitemap.xml', site.url).href}\n` : '';
  return new Response(`User-agent: *\nAllow: /\n${sitemap}`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' }
  });
}
