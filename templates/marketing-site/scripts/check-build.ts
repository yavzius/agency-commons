import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
assert.ok(existsSync(join(dist, 'index.html')), 'Build must include the homepage.');
assert.equal(existsSync(join(dist, 'design')), false, 'Internal design review must not be deployed.');
assert.equal(readFileSync(join(dist, 'sitemap.xml'), 'utf8').includes('/design/'), false, 'Internal review must not enter the sitemap.');
console.log('Production build excludes internal design review.');
