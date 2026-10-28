# Optional projects and agent skills

Use this as a small, staged library. The agent selects a resource for the current task, checks its version and license, and installs only what is needed. Skills provide instructions; MCP/CLI tools provide access. Neither proves that a service is configured correctly.

## Included

The local [build-client-site skill](../.agents/skills/build-client-site/SKILL.md) routes work through this repo's setup, launch and agency workflows. `AGENTS.md` provides the same entry point when the agent doesn't discover skills automatically. The website uses Astro with pinned dependencies and Cloudflare deployment configuration.

Also bundled: [research-and-position](../.agents/skills/research-and-position/SKILL.md), [frontend-quality](../.agents/skills/frontend-quality/SKILL.md), and Anthropic's [frontend-design](../.agents/skills/frontend-design/SKILL.md) with its license and [source revision](../THIRD_PARTY_NOTICES.md). These work without installing an external skill pack. See [frontend choices](FRONTEND.md) for the recommended component path and alternatives.

## Add at the relevant stage

| Stage | Project / skills | Use |
| --- | --- | --- |
| Hosting and DNS | [Cloudflare skills](https://github.com/cloudflare/skills) | `cloudflare`, `wrangler`, `workers-best-practices`; add email or Turnstile guidance when needed |
| Brief and copy | [Marketing Skills](https://github.com/coreyhaines31/marketingskills) | Select `product-marketing`, `site-architecture`, `copywriting`, `cro`, `seo-audit`, or `schema` for the current task |
| Competitors and content planning | [Marketing Skills](https://github.com/coreyhaines31/marketingskills) | `competitor-profiling`, `offers`, `copy-editing`, `content-strategy` and `ai-seo`; choose only needed skills and preserve their references |
| Design review | [Impeccable](https://github.com/pbakaus/impeccable) | Design critique, accessibility review and polish; respect the client's actual brand |
| Quality checks | [Web Quality Skills](https://github.com/addyosmani/web-quality-skills) | Accessibility, performance, SEO and evidence-based audits; this is an independent project |
| Browser operation | [Agent Browser](https://github.com/vercel-labs/agent-browser) or [Playwright MCP](https://github.com/microsoft/playwright-mcp) | Use one available browser tool for rendered checks and interactions; install its runtime only when needed |
| More UI components | [Starwind UI](https://github.com/starwind-ui/starwind-ui) and [skills](https://github.com/starwind-ui/skills) | Select free source-owned components; commercial Pro assets are separate |
| A larger static design reference | [AstroWind](https://github.com/arthelokyo/astrowind) | Reusable marketing-site patterns after a brief makes the need clear |
| Client content editing | [EmDash](https://github.com/emdash-cms/emdash), [marketing template](https://github.com/emdash-cms/templates/tree/main/marketing-cloudflare), [skills](https://github.com/emdash-cms/skills) | Evaluate when a client needs a CMS; check rendering, plugin, storage and email requirements before changing the free static architecture |

Don't install overlapping design or marketing packs indiscriminately. Prefer a few relevant skills, reviewed instructions and pinned versions over a large unreviewed bundle. If copying upstream source or skill files, retain their notices and comply with their licenses. This repository links to these projects; it doesn't redistribute their paid assets or claim all of them are integrated/tested together.

For client email operations, [Google Workspace CLI and skills](https://github.com/googleworkspace/cli) is an optional Apache-2.0 project. Select only needed Gmail operations and inspect the current release and scopes. It is not an officially supported Google product.

## Operating references

- [Account/dependency setup](SETUP.md)
- [Windows, macOS and Linux](COMPUTERS.md)
- [Competitors, positioning, copy and site structure](DISCOVERY.md)
- [Frontend skills and component libraries](FRONTEND.md)
- [MCP, CLI and API capability map](TOOLS.md)
- [Domains and business email](DOMAINS-AND-EMAIL.md)
- [Forms](FORMS.md)
- [SEO, GEO, analytics and advertising](GROWTH.md)
- [Blog management](BLOG.md)
- [Background reports, content and email drafts](AUTOMATIONS.md)
- [Security habits](SECURITY.md)
- [Client handoff](HANDOFF.md)

The first version targets marketing sites for small local businesses. Ecommerce, Stripe/payment integrations, customer accounts and complex applications are later tracks, not dependencies of this workflow.
