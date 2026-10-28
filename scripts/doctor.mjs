import { existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { release } from 'node:os';

const [major, minor, patch] = process.versions.node.split('.').map(Number);
const supported = major > 22 || (major === 22 && (minor > 23 || (minor === 23 && patch >= 4)));
console.log(`Environment: ${process.platform} / ${process.arch}${/microsoft/i.test(release()) ? ' / WSL' : ''}`);
console.log(`Node ${process.versions.node}: ${supported ? 'OK' : 'requires at least 22.23.4'}`);
console.log(`Role: ${existsSync('.agency-workspace.json') ? 'private agency workspace' : 'public toolkit / controller source'}`);
console.log('Controller: no third-party runtime packages required. Website dependencies are installed in each client site.');
try { console.log(execFileSync('git', ['--version'], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim()); }
catch { console.log('Git is not available; install before creating recovery history or connecting a repository.'); }
console.log('Account access and repository visibility have not been verified by this command.');
if (!supported) process.exitCode = 1;
