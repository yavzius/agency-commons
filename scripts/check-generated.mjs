import assert from 'node:assert/strict';
import { existsSync, mkdtempSync, realpathSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';
import { initAgency, addClient } from './agency.mjs';

// Exercise the delivered site, not a build that accidentally relies on the toolkit.
if (!process.env.npm_execpath) throw new Error('Run this check with npm run check:generated.');
const base = realpathSync(mkdtempSync(join(tmpdir(), 'agency-commons-build-')));
try {
  const agency = join(base, 'Agency');
  initAgency(agency);
  const { site } = addClient('sample', join(base, 'Client Site'), agency);
  for (const args of [['ci'], ['run', 'doctor'], ['test'], ['run', 'build']]) {
    execFileSync(process.execPath, [process.env.npm_execpath, ...args], { cwd: site, stdio: 'inherit' });
  }
  assert.ok(existsSync(join(site, 'dist/index.html')));
  assert.equal(existsSync(join(site, 'clients')), false);
  console.log('Generated client site installs, tests and builds independently. No deployment performed.');
} finally {
  rmSync(base, { recursive: true, force: true });
}
