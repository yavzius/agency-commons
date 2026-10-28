# Start on Windows, macOS, or Linux

The agent checks the operating system, processor architecture, shell, and existing installations before choosing commands. The project uses Node/npm scripts rather than Mac-specific shell scripts. No Homebrew, Docker, WSL, Python, or separate paid editor is required for the first website.

## Before the agent can help locally

If the person already uses a coding agent, start there: paste `https://github.com/yavzius/agency-commons`. The agent follows [START.md](../START.md), fetches its own working copy, and handles dependencies. Don't make them install a second agent or manually download/unzip the repo.

If they do not yet have an agent:

1. Install an appropriate app below and sign in with the existing ChatGPT subscription. These are the documented Codex paths; another capable coding agent can use the same repo instructions and its own existing access.
2. Open/create an empty project folder only if the app requires it before starting a conversation.
3. Paste the repo link. The agent fetches and prepares the working copy. Approve folder access, installers or sign-ins when needed; the agent handles the technical commands.

| Computer | Starting route | Details for the agent |
| --- | --- | --- |
| Windows | [Native desktop app](https://learn.chatgpt.com/docs/windows/windows-app) | Start with PowerShell and a local Windows folder. Native support means WSL is optional. Check the installed app's requirements and architecture |
| macOS | [Desktop app](https://developers.openai.com/codex/app/) | Verify compatibility on the person's Mac. Use official installers; don't assume Homebrew exists or require it |
| Linux | [Linux desktop preview](https://learn.chatgpt.com/docs/linux/linux-app) | Check the documented distribution/version and x64/ARM64 package. The preview has feature limitations; use CLI/browser tooling where appropriate |
| Desktop app unavailable | [Codex CLI](https://developers.openai.com/codex/cli/) with ChatGPT sign-in | Needs an initial terminal setup; after opening this folder with Codex, use the same conversational workflow |

The Linux preview currently lists Ubuntu 24.04/26.04 LTS, Debian 13, Fedora 43/44, and updated Arch Linux. Do not assume other distributions or every desktop feature are supported. Review the official page at setup time. A phone/tablet browser alone does not provide this repo's local execution environment; don't silently replace it with a paid cloud workspace.

## Dependencies after the folder is open

**Windows:** use the official Node LTS installer or supported Windows package manager. Install Git only when needed for checkpoints. The official Windows guide includes `winget install --id OpenJS.NodeJS.LTS` and `winget install --id Git.Git`. Reopen the terminal/app after PATH changes. If PowerShell blocks `npm.ps1`, try the installed `npm.cmd` launcher; don't weaken machine-wide execution policy as a routine fix. Use `Get-Command`, `Resolve-DnsName` or `nslookup` instead of assuming Unix tools.

**macOS:** use Node's official installer matching the machine. Check Git; macOS may offer Command Line Tools when it is first used. Avoid installing a second Node or Git merely because a particular package manager isn't present.

**Linux:** inspect distribution, architecture and installed versions. Use Node's supported installation route or a trusted package manager/version manager that supplies the required version. A distribution's default Node package may be older than this project's minimum. Explain package-manager or system changes before administrator approval; don't run project npm commands as root.

On every OS, verify `node --version` and `npm --version`, then run `npm ci`, `npm run doctor`, and `npm run dev` from the project folder. The agent should do this work, not send a beginner a large command list. Preserve the lockfile; don't install an incompatible runtime and remove engine checks to force it through.

## CLI fallback

If the desktop app cannot be used, first install a compatible Node LTS release from [Node's official downloads](https://nodejs.org/en/download). The official Codex CLI supports npm installation:

```sh
npm install -g @openai/codex
codex
```

Run `codex` from an empty project folder or another appropriate workspace, choose ChatGPT sign-in, and paste the repository link. The agent fetches the starter and continues from START.md. On Windows, the agent can use `npm.cmd` where needed. If global installation is denied, follow the official CLI's supported installer route for that OS; don't prescribe `sudo npm` or a security bypass. The CLI is the agent interface, so the person still describes outcomes in plain language rather than learning programming first.

## Keep one environment consistent

If the person already uses WSL2, keep the project, Node, packages and agent execution in that environment. Don't reuse Windows `node_modules` in Linux or vice versa; reinstall from the lockfile after switching. Native Windows and WSL have separate auth/configuration unless deliberately configured otherwise. Do not assume a login in one authenticates the other.

Quote paths with spaces, preserve filename case, and use platform-appropriate commands. Keep credentials out of command arguments and public configuration. On a managed computer, request the specific administrator action if installation is blocked; don't disable its controls.

## What has been verified?

The initial development checks ran on macOS. The repository includes CI for Node 24 on Ubuntu, Windows and macOS to check installation, tests and production builds. Only a completed green run is evidence of that matrix passing; it does not test account creation, OAuth, every browser, or every OS installer. Record the actual machine and results during learner onboarding.
