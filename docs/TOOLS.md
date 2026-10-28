# Let the agent operate the tools

Use connected tools first, then a CLI or supported API. Use agent-controlled browser automation for gaps and visual verification. Ask the person to take over for account creation, identity checks, OAuth consent, payments, or an action the agent cannot perform.

Install tools when the current task needs them. The first website needs local Node/npm and Cloudflare access. It does not need every connector in this document.

## Capability map

| Work | Preferred route | What to verify |
| --- | --- | --- |
| Local files, preview, build | Codex local tools and project npm scripts | Correct folder, runtime, lockfile and actual build output |
| Cloudflare hosting, DNS and resources | [Official Cloudflare plugin/MCP](https://developers.cloudflare.com/agent-setup/codex/) plus pinned Wrangler | Account, scope, project/zone and actual operation result |
| Source history and GitHub | Local Git plus [GitHub CLI](https://cli.github.com/) or [official GitHub MCP](https://github.com/github/github-mcp-server) | Correct owner, private/public choice, remote and staged files |
| Browser checks | Existing browser tools or [Playwright MCP](https://github.com/microsoft/playwright-mcp) | Real rendering, mobile layout, primary action, network behavior and error states |
| Search reports/sitemaps | [Search Console API](https://developers.google.com/webmaster-tools/v1/api_reference_index) with authorized OAuth | Verified property, scopes and which methods actually exist |
| GA4 reports | [Official Google Analytics MCP](https://developers.google.com/analytics/devguides/MCP) | It is read-only; report access doesn't create properties or install tracking |
| GA4 administration | [Analytics Admin API](https://developers.google.com/analytics/devguides/config/admin/v1) where supported | Explicitly authorized property/settings changes and correct client ownership |
| Tag configuration | [Tag Manager API](https://developers.google.com/tag-platform/tag-manager/api/v2) | Workspace, changes, version and authorization to publish |
| Google Ads reporting | [Official Google Ads MCP](https://developers.google.com/google-ads/api/docs/developer-toolkit/mcp-server) | Current release is read-only; verify API access and OAuth setup |
| Google Ads changes | [Google Ads API](https://developers.google.com/google-ads/api/docs/start) through an authorized client/tool | Mutation support, account, campaign state and approved spend |
| Meta reporting/management | [Meta Ads AI connectors](https://developers.facebook.com/documentation/ads-commerce/ads-ai-connectors/ads-mcp-server/ads-mcp-server-overview), or [Marketing API](https://developers.facebook.com/docs/marketing-apis/) | Availability and operations in the actual account; revalidate official setup before connecting |
| Business email accounts | Existing provider tools or [Google Admin SDK](https://developers.google.com/workspace/admin/directory/reference/rest) where appropriate | Admin role, organization, licensing implications and authorized user/group operations |
| Gmail reading and drafts | Existing connected tools, [Gmail MCP](https://developers.google.com/workspace/gmail/api/guides/configure-mcp-server), [Workspace CLI](https://github.com/googleworkspace/cli), or [Gmail API](https://developers.google.com/workspace/gmail/api/guides/drafts) | MCP Developer Preview eligibility; exact mailbox/scopes; draft creation versus sending. CLI is not an officially supported Google product |
| Blog management | Local Markdown files and Astro build scripts | Reviewed facts; draft/future posts excluded from production; actual deployed URL |
| Recurring work | Existing desktop scheduled tasks or an explicitly chosen runner | [Runtime, schedule, permissions, costs and output](AUTOMATIONS.md); no schedule is enabled by cloning |
| DNS verification | Cloudflare MCP/API, plus `dig`, `nslookup`, or an equivalent resolver | Authoritative records, propagation, TLS and unchanged unrelated services |

Do not advertise a connector as supporting writes merely because its underlying API does. Discover the actual tools. If a feature is unavailable, use the supported API path or explain the specific manual step.

## Connection procedure

1. Inspect existing connected tools/configuration and determine which account is in use.
2. Read the publisher's current setup instructions. Verify provenance before installing a community package.
3. Install the connector's dependencies locally only when needed. Some Google MCP servers require Python and an isolated runner such as pipx; don't add those to first-launch setup preemptively.
4. Prepare configuration without committing credentials. Preserve unrelated MCP settings.
5. Guide the person through browser authorization. Never ask for passwords or recovery codes in chat.
6. Perform a small read operation. Record the observed account/property/project and supported capabilities.
7. For the authorized work, prepare and execute the smallest scoped change, then read back or otherwise verify the result.

The [Google Analytics MCP source](https://github.com/googleanalytics/google-analytics-mcp) and [Google Ads MCP source](https://github.com/googleads/google-ads-mcp) document their own dependencies and authentication. Use their current instructions, not an old copied token recipe. If Google Cloud project/API setup is required, the agent should perform supported configuration and guide the remaining consent step; don't hide the prerequisite.

For an integration without an existing connector, a small local script against the official API can be simpler than installing a broad third-party service. Keep secrets in the OS credential store, environment, or appropriate server-side secret store, and keep scripts narrowly scoped. Never put a raw credential in a shell argument, URL, repository, or transcript.

## Cloudflare connection

Prefer the official app plugin. The official API MCP endpoint is `https://mcp.cloudflare.com/mcp`; see [setup](SETUP.md) for a CLI fallback. Installing a skill alone doesn't authenticate the account. MCP authorization also doesn't automatically log Wrangler in.

After connection, the person can ask: “Connect this site to my domain,” “Show me why deployment failed,” or “Check that my mail records stayed the same.” The agent translates the request into scoped operations and verifies the outcome.

## Keep agency work separated

Use one project copy/repository per client site. Maintain a private agency index pointing to those copies and their owners, live URLs, next actions, renewals and last checks. Don't overwrite one client's configuration to start another.

Reconnect or choose the appropriate client account when needed. Scope every report and mutation to explicit project/property identifiers. Don't send one client's leads, credentials, or private reports into another client's conversation.

## What still needs a person

The person remains responsible for their identity, account consent, ownership verification, client facts, and approved spending. Tool access varies by plan, permissions and provider rollout. The agent should report a missing capability accurately, save the next action, and continue independent work; it should not invent success or replace a blocked connection with a paid gateway without asking.

Meta's official documentation could not be fetched during this starter's research. Verify its current endpoint, terms, permissions and account eligibility directly before installation. Community Meta connectors are optional alternatives, not presumed official or free managed services.
