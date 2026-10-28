import test from 'node:test';
import assert from 'node:assert/strict';
import { checkReadiness } from '../scripts/ready.mjs';
import { site } from '../src/site.config.mjs';

const config = { name: 'northline-practice-42', assets: { directory: './dist' } };
const realSite = { ...site, isDemo: false, businessName: 'A real business', contactEmail: 'owner@localstudio.co' };
test('a labeled demo can launch without pretending to collect leads', () => assert.deepEqual(checkReadiness(site, config), []));
test('the untouched shared Worker name cannot be deployed', () => assert.ok(checkReadiness(site, { ...config, name: 'replace-with-your-site-name' }).length));
test('a real business cannot launch with a dead contact action', () => assert.ok(checkReadiness({ ...realSite, contactEmail: '' }, config).length));
test('sample identity cannot silently become a real business', () => assert.ok(checkReadiness({ ...site, isDemo: false, contactEmail: realSite.contactEmail }, config).length));
test('contact links reject query injection and placeholder destinations', () => { for (const contactEmail of ['hi@localstudio.co?bcc=other@else.co', 'hello@example.com']) assert.ok(checkReadiness({ ...realSite, contactEmail }, config).length); });
test('search indexing requires a canonical public URL', () => { assert.ok(checkReadiness({ ...realSite, allowIndexing: true }, config).length); assert.deepEqual(checkReadiness({ ...realSite, allowIndexing: true, url: 'https://localstudio.co/' }, config), []); });
test('canonical URLs cannot contain credentials or executable protocols', () => { for (const url of ['javascript:alert(1)', 'https://user:secret@localstudio.co/']) assert.ok(checkReadiness({ ...realSite, url }, config).length); });
test('a dynamic server requires a fresh deployment review', () => assert.ok(checkReadiness(site, { ...config, main: 'worker.js' }).length));
test('empty or malformed sections fail before rendering', () => assert.ok(checkReadiness({ ...realSite, services: [null] }, config).length));
