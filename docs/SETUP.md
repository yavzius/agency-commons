# Setup and deployment runbook

This runbook operates inside an independent client website. If you are in the toolkit or agency workspace, first create/select a site using [AGENCY.md](AGENCY.md), then read that site's own instructions. All website commands and paths below are relative to that site.

For the agent: perform the technical steps. Give the person only the next action that needs their browser, account, or consent. Check current official instructions when a screen or command differs.

## 1. Open the project

The primary entry is a pasted repository link. Follow [START.md](../START.md) to prepare a working copy. Use the person's existing coding agent with workspace and command access. This document includes Codex setup for people who need an agent.

Start with [COMPUTERS.md](COMPUTERS.md) for Windows, macOS and Linux routes, dependency differences, and a CLI fallback. Do not assume this person has a Mac or a Unix shell.

If Codex is needed, use the [official desktop download](https://developers.openai.com/codex/app/) for the person's operating system. Current OpenAI documentation routes to the ChatGPT desktop app, which includes a Codex surface. Sign in with ChatGPT, select an appropriate workspace if required, and let the agent retrieve the starter. Don't assume a browser-only chat has local filesystem access.

Use subscription sign-in. API-key authentication is separately billed. If included usage is exhausted, save progress and wait or continue a non-AI task; don't buy credits automatically. See [authentication](https://learn.chatgpt.com/docs/auth) and [plan access](https://learn.chatgpt.com/docs/pricing).

The agent should be able to read `package.json` and create local progress files. If not, explain the folder-access action required. Don't request access to the entire home directory merely to edit this project.

## 2. Check and install dependencies

Inspect the OS and existing commands first. Never install a second copy of a working dependency without a reason.

| Dependency | Needed when | Agent action |
| --- | --- | --- |
| Node.js and npm | Local website preview/build | Verify the package's engine requirement; if absent/incompatible, guide the official Node LTS installation for that OS |
| Project packages | First local preview | Run `npm ci` from the client website folder; use the committed lockfile |
| Git | Recovery checkpoints and GitHub backup | Check availability, guide OS installation if needed, then initialize the learner's own history |
| GitHub CLI | Only if using CLI account/repo actions | Prefer an available GitHub connection; otherwise install `gh` and guide browser login |
| Wrangler | Cloudflare deployment | Already pinned as a project dependency; use `npx wrangler`, not an extra global version |
| Codex CLI | Only if an app setting/plugin cannot handle a needed operation | Check whether it exists; the desktop app is the primary learner interface |

Use [Node's official download](https://nodejs.org/en/download), [Git installation instructions](https://git-scm.com/downloads), and [GitHub CLI installation](https://cli.github.com/). On Windows, check native app/tool support before suggesting WSL. On macOS, Git may trigger Command Line Tools installation. Let the person approve OS installers or administrator access; don't bypass those controls or pipe an unreviewed script into a shell.

This version requires Node >=22.23.4 and npm >=9.6.5. Prefer a current supported LTS release. After installation, reopen the agent's terminal/session if PATH has not refreshed, and verify versions again.

Run `npm ci`, then `npm run doctor`, then `npm run dev`. Keep the server running and open the printed local URL. If the port is occupied, use the URL Astro actually prints. A command that is still installing isn't a failed installation; inspect its result before retrying.

If an installation fails, capture the actual error without credentials. Distinguish missing runtime, wrong folder, network restriction, permission, and package errors. Repair the specific blocker. Never suggest a paid service as the default fix.

## 3. Connect Cloudflare

Guide the person to create/sign in to their [Cloudflare account](https://dash.cloudflare.com/) and complete email verification. Choose Workers Free. A custom domain or paid plan is not needed for the initial `workers.dev` deployment.

Prefer the official Cloudflare plugin in the app's Plugins directory. Guide installation and browser OAuth, then verify a read-only account operation. Cloudflare's [Codex setup guide](https://developers.cloudflare.com/agent-setup/codex/) documents the plugin and MCP connection.

If the plugin is unavailable and Codex CLI is available, the agent can add the official remote server:

```sh
codex mcp add cloudflare --url https://mcp.cloudflare.com/mcp
codex mcp login cloudflare
```

Inspect existing configuration first; don't create duplicates or overwrite unrelated settings. The person completes OAuth. Reconnect the session if needed for new tools to appear. Use [OpenAI's MCP instructions](https://developers.openai.com/codex/mcp/) for the installed client version.

Ask for only the permissions required for this project. A docs-only MCP connection cannot deploy. An installed server is not evidence that authorization succeeded. Record the verified account identity, never the OAuth token.

Wrangler authentication is separate. Before a CLI deploy, run `npx wrangler whoami`; if unauthenticated, run `npx wrangler login` and guide the browser approval. Compare the account with the intended client/learner account. If multiple accounts are present, set the intended `account_id` in the project configuration. That identifier is not a password.

If MCP is temporarily unavailable but authenticated Wrangler can do the job, continue through Wrangler and explain the fallback briefly. Don't require multiple equivalent connections to accomplish the same task.

## 4. Prepare the first site

Use [DESIGN.md](DESIGN.md) to gather materials, establish the message and review a representative design. Update `BRAND.md` and the site's `DESIGN.md`, then implement the agreed facts in `src/site.config.ts`, design values in `src/styles/tokens.css` and reusable patterns in `src/components/`. Review the homepage and local `/design/` route. The sample is fictional and visibly labeled. For a real business, replace the sample identity, supply a working contact address, and set `isDemo: false`.

Choose a unique Worker name in `wrangler.jsonc` after checking the account for a collision. Don't overwrite an existing project. This file is deliberately valid JSON, even though Wrangler permits comments in `.jsonc` files; the readiness script reads it as JSON.

Run tests and build; inspect desktop/mobile views, keyboard focus, links and the contact action. `npm run ready` should fail on the untouched Worker name. Fix readiness errors rather than bypassing the check.

The site is static: the starter does not invoke a custom Worker for every page view. [Cloudflare's static-asset pricing](https://developers.cloudflare.com/workers/static-assets/billing-and-limitations/) distinguishes free static delivery from dynamic Worker execution. If features change that architecture, revisit the [Workers limits and pricing](https://developers.cloudflare.com/workers/platform/pricing/).

## 5. Publish and verify

Show the person the actual preview and target account/project. Establish that publication is authorized for this version, then run `npm run deploy`. Don't create a real deployment while merely maintaining or testing the public starter repository.

Record the returned URL and deployment version. Fetch/open the URL, check a missing route returns the 404 page, and verify the contact action. Ask the person to open the site on their own device. Set `site.url` to the confirmed canonical address and rebuild/redeploy if needed.

Keep a practice site marked as a demo and excluded from indexing. For a real launch, ask whether search indexing should be enabled and follow `GROWTH.md`. A noindex setting is not access control: don't publish confidential drafts just because search indexing is disabled.

## 6. Save and resume

Create a Git checkpoint. When the person is ready, guide a GitHub account/connection and create their own repository, preferably private for a real client's work unless they choose public. Check staged files for private material first. Do not push client work to this public starter's upstream remote.

Record account owner, project name, public URL, last verified version, agreed costs and next action in the private client record. If that workspace is unavailable, provide the information for handoff and preserve local continuity without claiming the agency was updated. Use `HANDOFF.md` for client-owned accounts. Never transfer or rotate existing client access without authorization.

## Free-first boundaries

The learner's existing AI subscription, a free Cloudflare account, static hosting, and a free platform subdomain cover the first path. No card-backed trial is part of the curriculum. If an account-specific screen demands billing, pause that operation, explain it, and keep working locally; don't claim it is required without checking.

D1 and Turnstile have free tiers for the later form stage. A custom domain, outbound email setup, higher usage, hosted CMS, or paid advertising can introduce costs. Make the specific cost and payer clear before adding them. Recheck provider limits at implementation time.
