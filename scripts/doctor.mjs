import { existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { release } from 'node:os';

console.log(`Environment: ${process.platform} / ${process.arch}${/microsoft/i.test(release()) ? ' / WSL' : ''}`);
const [major, minor, patch] = process.versions.node.split('.').map(Number);
const nodeOK = major > 22 || (major === 22 && (minor > 23 || (minor === 23 && patch >= 4)));
console.log(`Node ${process.versions.node}: ${nodeOK ? 'OK' : 'install a supported Node LTS release (at least 22.23.4)'}`);
console.log(`Project dependencies: ${existsSync('node_modules/astro/package.json') && existsSync('node_modules/wrangler/package.json') ? 'installed' : 'agent should run npm ci'}`);
console.log(`Lockfile: ${existsSync('package-lock.json') ? 'present' : 'missing; restore it before installing'}`);
try { console.log(`Git: ${execFileSync('git', ['--version'], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim()}`); }
catch { console.log('Git: not available; local preview still works. Install before creating a recovery checkpoint.'); }
console.log('Cloud connections: not checked. The agent must verify Cloudflare account access separately.');
console.log('No account tokens, environment values, or personal paths are printed by this check.');
if (!nodeOK) process.exitCode = 1;
