import { readFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

export function checkReadiness(site, config) {
  const errors = [];
  if (!config.name || config.name === 'replace-with-your-site-name' || !/^[a-z0-9][a-z0-9-]{0,62}$/.test(config.name)) errors.push('Choose a unique Cloudflare Worker name using lowercase letters, digits, and hyphens.');
  if (config.main || config.assets?.run_worker_first) errors.push('This starter readiness check supports static hosting. Review dynamic routing and costs before enabling a Worker entry point.');
  for (const field of ['businessName', 'description', 'headline', 'introduction', 'ctaLabel', 'contactHeading', 'contactText']) {
    if (typeof site[field] !== 'string' || !site[field].trim()) errors.push(`Fill in ${field} from the business brief.`);
  }
  if (typeof site.isDemo !== 'boolean' || typeof site.allowIndexing !== 'boolean') errors.push('Set isDemo and allowIndexing explicitly to true or false.');
  if (site.isDemo && site.allowIndexing) errors.push('Keep demo sites out of search indexing.');
  if (site.url) {
    try { const url = new URL(site.url); if (url.protocol !== 'https:' || url.username || url.password || url.search || url.hash) throw new Error(); }
    catch { errors.push('Use a public HTTPS site URL without credentials, query parameters, or fragments.'); }
  } else if (site.allowIndexing) errors.push('Set the final public URL before enabling search indexing.');
  if (site.contactEmail && (!/^[^\s@?&#]+@[^\s@?&#]+\.[^\s@?&#]+$/.test(site.contactEmail) || /@(example\.(com|org|net)|test\.invalid)$/i.test(site.contactEmail))) errors.push('Use a real business email address without URL parameters.');
  if (!site.isDemo) {
    if (!site.contactEmail) errors.push('A real business needs a working contact destination. Set its email or extend this check for a verified form.');
    if (site.businessName === 'Northline Studio') errors.push('Replace the fictional sample business before publishing a real site.');
  }
  for (const [field, keys] of [['services', ['title', 'text']], ['process', ['title', 'text']], ['faqs', ['question', 'answer']]]) {
    if (!Array.isArray(site[field]) || !site[field].length || site[field].some(item => !item || keys.some(key => typeof item[key] !== 'string' || !item[key].trim()))) errors.push(`Complete the ${field} content.`);
  }
  return errors;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const { site } = await import('../src/site.config.mjs');
  // Kept strict JSON despite the .jsonc extension, so no extra parser is needed.
  const config = JSON.parse(readFileSync(new URL('../wrangler.jsonc', import.meta.url), 'utf8'));
  const errors = checkReadiness(site, config);
  if (errors.length) { console.error(errors.map(error => `- ${error}`).join('\n')); process.exitCode = 1; }
  else console.log(`Configuration ready for ${site.isDemo ? 'a clearly labeled demo' : 'a real-business preview'}. Still verify the target account, rendered page, contact destination, and publication approval.`);
}
