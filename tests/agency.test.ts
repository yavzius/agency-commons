import test from 'node:test';
import type { TestContext } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, realpathSync, renameSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { initAgency, addClient, sourceRoot } from '../scripts/agency.ts';

function fixture(t: TestContext) {
  const base = realpathSync(mkdtempSync(join(tmpdir(), 'agency-commons-test-')));
  t.after(() => rmSync(base, { recursive: true, force: true }));
  const agency = join(base, 'My Agency');
  initAgency(agency);
  return { base, agency, site: join(base, 'Acme Website') };
}
const json = (path: string): Record<string, unknown> => JSON.parse(readFileSync(path, 'utf8'));

test('an agency can create independent client sites with maintenance context', t => {
  const { agency, site, base } = fixture(t);
  const first = addClient('acme', site, agency);
  const second = addClient('bravo', join(base, 'Bravo'), agency);
  assert.equal(json(join(agency, '.agency-workspace.json')).role, 'agency');
  assert.equal(json(join(site, '.agency-site.json')).clientId, 'acme');
  assert.equal(json(join(site, 'package.json')).name, 'agency-commons-site');
  assert.equal(json(join(agency, '.agency-commons/paths.json')).bravo, second.site);
  assert.ok(readFileSync(join(agency, 'CLIENTS.md'), 'utf8').trimEnd().endsWith('| onboarding |'));
  for (const file of ['AGENTS.md', 'BRAND.md', 'DESIGN.md', 'docs/AGENCY.md', 'docs/DESIGN.md', '.github/workflows/check.yml', '.agents/skills/frontend-design/LICENSE.txt', 'src/styles/tokens.css']) {
    assert.ok(existsSync(join(site, file)), file);
  }
  for (const item of ['clients', '.git', 'node_modules', 'dist', '.agency-commons', 'scripts/agency.ts']) assert.equal(existsSync(join(site, item)), false, item);
  assert.ok(existsSync(join(first.record, 'WORK.md')));
  writeFileSync(join(site, 'BRAND.md'), 'Acme-specific content');
  assert.notEqual(readFileSync(join(second.site, 'BRAND.md'), 'utf8'), 'Acme-specific content');
  assert.notEqual(readFileSync(join(agency, 'templates/marketing-site/BRAND.md'), 'utf8'), 'Acme-specific content');
});

test('new workspaces and sites exclude previous clients, credentials and build artifacts', t => {
  const { agency, base, site } = fixture(t);
  addClient('existing', join(base, 'Existing'), agency);
  writeFileSync(join(agency, 'clients/existing/BRIEF.md'), 'Private client context');
  for (const item of ['.env', '.env.local', '.dev.vars', 'debug.log']) writeFileSync(join(agency, 'templates/marketing-site', item), 'Do not copy');
  for (const item of ['node_modules', 'dist', '.agency-commons']) {
    mkdirSync(join(agency, 'templates/marketing-site', item));
    writeFileSync(join(agency, 'templates/marketing-site', item, 'private.txt'), 'Do not copy');
  }
  addClient('acme', site, agency);
  for (const item of ['.env', '.env.local', '.dev.vars', 'debug.log', 'node_modules', 'dist', '.agency-commons', 'clients']) assert.equal(existsSync(join(site, item)), false, item);
  const other = join(base, 'Another Agency');
  initAgency(other, agency);
  assert.equal(existsSync(join(other, 'clients/existing')), false);
  assert.equal(existsSync(join(other, '.agency-commons/paths.json')), false);
  assert.equal(readFileSync(join(other, 'CLIENTS.md'), 'utf8').includes('existing'), false);
});

test('collisions and invalid client IDs leave existing work untouched', t => {
  const { agency, site, base } = fixture(t);
  addClient('acme', site, agency);
  const before = readFileSync(join(agency, 'CLIENTS.md'), 'utf8');
  writeFileSync(join(site, 'keep.txt'), 'Keep this');
  assert.throws(() => initAgency(agency), /already exists/);
  assert.throws(() => addClient('another', site, agency), /already exists/);
  assert.throws(() => addClient('acme', join(base, 'New'), agency), /already exists/);
  for (const id of ['../escape', 'two words', 'CON', 'aux', 'a/b', '-start', 'end-', 'a'.repeat(49)]) {
    assert.throws(() => addClient(id, join(base, 'New'), agency), /client ID/);
  }
  assert.equal(readFileSync(join(site, 'keep.txt'), 'utf8'), 'Keep this');
  assert.equal(readFileSync(join(agency, 'CLIENTS.md'), 'utf8'), before);
  assert.equal(existsSync(join(base, 'New')), false);
});

test('public toolkit and nested destinations cannot receive client work', t => {
  const { agency, site } = fixture(t);
  assert.throws(() => addClient('acme', site, sourceRoot), /agency workspace first/);
  assert.throws(() => addClient('acme', join(agency, 'nested-site'), agency), /outside/);
  assert.throws(() => initAgency(join(agency, 'nested-agency'), agency), /outside/);
});

test('failed generation rolls back the new site and client record', t => {
  const { agency, site } = fixture(t);
  const before = readFileSync(join(agency, 'CLIENTS.md'), 'utf8');
  renameSync(join(agency, 'docs'), join(agency, 'docs-unavailable'));
  assert.throws(() => addClient('acme', site, agency));
  assert.equal(existsSync(site), false);
  assert.equal(existsSync(join(agency, 'clients/acme')), false);
  assert.equal(existsSync(join(agency, '.agency-commons/create.lock')), false);
  assert.equal(readFileSync(join(agency, 'CLIENTS.md'), 'utf8'), before);
});

test('template symlinks cannot import unrelated files', t => {
  const { agency, site, base } = fixture(t);
  const outside = join(base, 'outside.txt');
  writeFileSync(outside, 'Private outside content');
  try { symlinkSync(outside, join(agency, 'templates/marketing-site/leak.txt')); }
  catch (error) { if (error instanceof Error && 'code' in error && error.code === 'EPERM') return t.skip('Symlink creation is unavailable on this runner'); throw error; }
  assert.throws(() => addClient('acme', site, agency), /symlinks/);
  assert.equal(existsSync(site), false);
  assert.equal(readFileSync(outside, 'utf8'), 'Private outside content');
});
