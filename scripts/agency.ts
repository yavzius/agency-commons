import { appendFileSync, cpSync, existsSync, lstatSync, mkdirSync, readFileSync, readdirSync, realpathSync, renameSync, rmSync, writeFileSync } from 'node:fs';
import type { WriteFileOptions } from 'node:fs';
import { basename, dirname, isAbsolute, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { execFileSync } from 'node:child_process';

export const sourceRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const sourceURL = 'https://github.com/yavzius/agency-commons';
const ignored = new Set(['node_modules', 'dist', '.astro', '.wrangler', '.git', '.agency-commons', 'coverage']);
const bundle = ['package.json', 'package-lock.json', 'tsconfig.json', '.gitignore', 'AGENTS.md', 'CLAUDE.md', 'START.md', 'LICENSE', 'THIRD_PARTY_NOTICES.md', 'docs', 'scripts', 'tests', 'templates', 'coach', 'progress-templates', '.agents', '.github'];

type Provenance = { repository: string; revision: string | null; version: string };
type WorkspaceMarker = { role: string; source: Provenance };
const readJSON = <T>(path: string): T => JSON.parse(readFileSync(path, 'utf8'));
const writeJSON = (path: string, value: unknown, options?: WriteFileOptions) => writeFileSync(path, JSON.stringify(value, null, 2) + '\n', options);
function inside(parent: string, child: string) {
  const rel = relative(parent, child);
  return rel === '' || (!rel.startsWith(`..${sep}`) && rel !== '..' && !isAbsolute(rel));
}

function destination(input: string, root: string) {
  if (!input) throw new Error('Choose a new destination folder.');
  const requested = resolve(input);
  // Require an existing parent and resolve symlinks before comparing locations.
  const target = join(realpathSync(dirname(requested)), basename(requested));
  if (inside(realpathSync(root), target)) throw new Error('Use a separate folder outside the controller workspace.');
  if (lstatSync(target, { throwIfNoEntry: false })) throw new Error('Destination already exists; nothing was overwritten.');
  return target;
}

function copy(source: string, target: string) {
  cpSync(source, target, { recursive: true, force: false, errorOnExist: true, filter: path => {
    const parts = [basename(source), ...relative(source, path).split(sep)];
    if (parts.some(part => ignored.has(part) || part === '.env' || part.startsWith('.env.') || part === '.dev.vars' || part.startsWith('.dev.vars.') || part.endsWith('.log'))) return false;
    if (lstatSync(path).isSymbolicLink()) throw new Error('Template symlinks are not supported.');
    return true;
  } });
}

function provenance(root: string): Provenance {
  const marker = join(root, '.agency-workspace.json');
  if (existsSync(marker)) return readJSON<WorkspaceMarker>(marker).source;
  let revision: string | null = null;
  try {
    const top = execFileSync('git', ['-C', root, 'rev-parse', '--show-toplevel'], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
    if (realpathSync(top) === realpathSync(root)) revision = execFileSync('git', ['-C', root, 'rev-parse', 'HEAD'], { encoding: 'utf8' }).trim();
  } catch { /* An archive need not have Git history. */ }
  return { repository: sourceURL, revision, version: readJSON<{ version: string }>(join(root, 'package.json')).version };
}

export function initAgency(input: string, root = sourceRoot) {
  const target = destination(input, root);
  mkdirSync(target); // Exclusive: never merge a new workspace into an existing folder.
  try {
    for (const item of bundle) copy(join(root, item), join(target, item));
    for (const item of ['README.md', 'AGENCY.md', 'CLIENTS.md']) copy(join(root, 'templates/agency', item), join(target, item));
    mkdirSync(join(target, 'clients'));
    writeJSON(join(target, '.agency-workspace.json'), { schemaVersion: 1, role: 'agency', source: provenance(root), createdAt: new Date().toISOString() });
    return { workspace: target, next: 'Read AGENCY.md. Initialize its own Git history and verify a private remote before backing up client records.' };
  } catch (error) {
    rmSync(target, { recursive: true, force: true });
    throw error;
  }
}

function localDirectory(root: string, name: string) {
  const path = join(root, name);
  const info = lstatSync(path, { throwIfNoEntry: false });
  if (info && (info.isSymbolicLink() || !info.isDirectory())) throw new Error(`${name} must be a real directory in this workspace.`);
  mkdirSync(path, { recursive: true });
  return path;
}

export function addClient(id: string, input: string, root = sourceRoot) {
  if (!/^[a-z0-9](?:[a-z0-9-]{0,46}[a-z0-9])?$/.test(id ?? '') || /^(con|prn|aux|nul|com[1-9]|lpt[1-9])$/i.test(id)) throw new Error('Use a short client ID with lowercase letters, numbers and internal hyphens.');
  const marker = join(root, '.agency-workspace.json');
  if (!existsSync(marker) || readJSON<WorkspaceMarker>(marker).role !== 'agency') throw new Error('Create an agency workspace first; client records do not belong in the public toolkit.');
  const target = destination(input, root);
  const clients = localDirectory(root, 'clients');
  const record = join(clients, id);
  if (existsSync(record)) throw new Error('Client ID already exists; resume that client instead.');
  const local = localDirectory(root, '.agency-commons');
  const lock = join(local, 'create.lock');
  mkdirSync(lock); // Serialize local registry updates; a stale lock needs inspection.
  let ownsSite = false;
  let ownsRecord = false;
  let ownsTemp = false;
  try {
    const indexPath = join(root, 'CLIENTS.md');
    if (lstatSync(indexPath).isSymbolicLink()) throw new Error('Client index must not be a symlink.');
    const index = readFileSync(indexPath, 'utf8');
    const pathsFile = join(local, 'paths.json');
    if (lstatSync(pathsFile, { throwIfNoEntry: false })?.isSymbolicLink()) throw new Error('Local paths file must not be a symlink.');
    const paths = existsSync(pathsFile) ? readJSON<Record<string, string>>(pathsFile) : {};
    if (Object.hasOwn(paths, id)) throw new Error('Client path is already registered; inspect existing state.');
    mkdirSync(target); ownsSite = true;
    mkdirSync(record); ownsRecord = true;
    // Copy site files only; agency records and Git history never enter a site.
    const template = join(root, 'templates/marketing-site');
    // Copy children into the directory we reserved; cp errorOnExist also rejects
    // existing directories on newer Node releases. Never relax overwrite checks.
    for (const item of readdirSync(template)) copy(join(template, item), join(target, item));
    for (const item of ['docs', 'coach', 'progress-templates', '.agents', 'LICENSE', 'THIRD_PARTY_NOTICES.md']) copy(join(root, item), join(target, item));
    for (const item of ['CLIENT.md', 'BRIEF.md', 'WORK.md', 'DECISIONS.md', 'REPORT.md', 'MATERIALS.md']) {
      writeFileSync(join(record, item), readFileSync(join(root, 'templates/client-record', item), 'utf8').replaceAll('{{CLIENT_ID}}', id));
    }
    writeJSON(join(target, '.agency-site.json'), { schemaVersion: 1, role: 'client-site', clientId: id, source: provenance(root), createdAt: new Date().toISOString() });
    // Stage both registry writes, then restore them if a write fails.
    try {
      writeJSON(join(local, 'paths.next.json'), { ...paths, [id]: target }, { flag: 'wx' });
      ownsTemp = true;
      renameSync(join(local, 'paths.next.json'), pathsFile);
      appendFileSync(indexPath, `| ${id} | [Record](clients/${id}/CLIENT.md) | not connected | not live | onboarding |\n`);
    } catch (error) {
      writeJSON(pathsFile, paths);
      writeFileSync(indexPath, index);
      throw error;
    }
    return { client: id, record, site: target, next: 'Confirm context and materials, then run npm ci in the site folder. Create its own Git history and intended private repository when ready.' };
  } catch (error) {
    if (ownsRecord) rmSync(record, { recursive: true, force: true });
    if (ownsSite) rmSync(target, { recursive: true, force: true });
    throw error;
  } finally {
    if (ownsTemp) rmSync(join(local, 'paths.next.json'), { force: true });
    rmSync(lock, { recursive: true, force: true });
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const [command, value, flag, path, ...extra] = process.argv.slice(2);
  try {
    if (command === 'init' && value && !flag) console.log(JSON.stringify(initAgency(value), null, 2));
    else if (command === 'client' && value && flag === '--site' && path && !extra.length) console.log(JSON.stringify(addClient(value, path), null, 2));
    else { console.log('Agent commands:\n  npm run agency -- init <new-agency-folder>\n  npm run agency -- client <client-id> --site <new-site-folder>\nRun client from an initialized agency workspace. Both destinations must have an existing parent.'); process.exitCode = command ? 1 : 0; }
  } catch (error) { console.error(error instanceof Error ? error.message : String(error)); process.exitCode = 1; }
}
