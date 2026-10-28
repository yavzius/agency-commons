# Agency Commons

Run a small local-business web agency by talking to an agent.

An open-source toolkit for people who understand a business but don't write code. Your agent handles files, dependencies, design, testing, deployment, and connected marketing tools. You own the accounts, choose the services, review the result, and learn how to manage it along the way.

Start with marketing websites for small local businesses. Continue into domains, business email, enquiries, blogs, SEO/GEO, analytics, and optional advertising and background agents. There is no Agency Commons account or hosted platform to subscribe to.

**Start with your existing ChatGPT subscription. Use free hosting. Get a working site live before adding more tools.**

## Start here

1. Follow the [Windows, macOS, or Linux setup path](docs/COMPUTERS.md), install the appropriate app with Codex, and sign in with your ChatGPT account. The current download may be branded ChatGPT; choose Codex and open a local project folder. A CLI fallback is documented when the desktop app isn't available.
2. [Download this repo](https://github.com/yavzius/agency-commons/archive/refs/heads/main.zip), unzip it, and open the folder in the app. You don't need Git or a GitHub account to download it.
3. Send this message:

   > Read START.md and guide me from here to a live website for a small local business. I'm not a developer. Handle the technical work through MCP, CLI, and API tools where possible. Help me with accounts and connections one step at a time, and keep additional spending at $0. Ask me only for decisions or actions you need from me.

That's enough to begin. The agent checks your computer and helps install anything missing. It guides you through Cloudflare sign-in and connection when needed. You complete browser sign-ins and permission screens yourself.

If you already have a project open, make sure this folder is the active project. If the agent cannot read files, tell it which step failed; this workflow needs local file and command access.

## What happens next

| You | Your agent |
| --- | --- |
| Describe the business and desired visitor action | Turns that into a short brief and builds a first draft |
| Share business facts and review the proposed direction | Researches relevant competitors, writes the copy and plans the page structure |
| Review the page on your phone and computer | Fixes the layout, copy, accessibility, and broken links |
| Create or sign in to your Cloudflare account | Connects the tools and prepares free hosting |
| Approve the finished preview and destination | Publishes it, opens the live URL, and checks it |
| Ask for an update in plain language | Makes the change, shows a preview, and publishes within your agreed workflow |

The first launch uses a free `workers.dev` address. A custom domain, business inbox, CMS, and enquiry form can come later when you need them. No API credits, paid editor, paid template, or paid hosting plan is required for the initial path. Subscription usage limits still apply. Domains, mailbox subscriptions, advertising spend, and usage beyond provider free tiers have separate costs; the agent must make those explicit before proceeding.

## Ask for what you need

- “Let's continue.”
- “Make this feel more suitable for a local accountant.”
- “Show me what will change before publishing.”
- “Explain what this permission lets you do.”
- “Add a contact form and prove an enquiry reaches the right place.”
- “Something broke. Help me get the previous version back.”
- “Help me hand this over to my client.”
- “Connect the domain while preserving their existing Google Workspace email.”
- “Help people find this business through search and AI answers.”
- “Connect analytics and show which enquiries come from our campaigns.”
- “Prepare a Google Ads campaign for review without spending anything yet.”
- “Draft a helpful blog post from the questions our customers ask.”
- “Research my competitors and explain which patterns we should adapt before designing.”
- “Prepare a weekly report and draft welcome emails for new clients.”

The agent keeps local notes so a new conversation can pick up where you stopped. These notes are excluded from Git by default.

## Included in this first version

- A working Astro marketing page with responsive styling and a fictional sample business.
- A working Markdown blog with local draft previews, publication checks, metadata and sitemap integration.
- A free Cloudflare deployment configuration and a check that prevents publishing an unfinished real-business setup.
- Agent-guided account, dependency, connection, preview, launch, and recovery instructions.
- An [end-to-end curriculum](docs/CURRICULUM.md) organized around useful outcomes.
- Practical [security habits](docs/SECURITY.md), a [forms implementation guide](docs/FORMS.md), and a [client handoff template](docs/HANDOFF.md).
- Runbooks for [domains and business email](docs/DOMAINS-AND-EMAIL.md), [search and marketing](docs/GROWTH.md), and [MCP/CLI/API connections](docs/TOOLS.md).
- A [blog management workflow](docs/BLOG.md) and [background-agent recipes](docs/AUTOMATIONS.md) for reports, content and Gmail drafts.
- Bundled skills for the build workflow, competitor research, frontend design and quality checks, plus [optional upstream skills](docs/RESOURCES.md).
- Guides for [research, copy and structure](docs/DISCOVERY.md), [frontend component choices](docs/FRONTEND.md), and [Windows/macOS/Linux setup](docs/COMPUTERS.md).

The initial site has a contact section, not a connected lead form. The agent adds and verifies a real backend when you reach that step. Blogging works without a CMS. Automations are documented recipes, not active schedules or preconnected inboxes. There is no shared client dashboard to configure before your first launch.

Use one copy per client project, with a private agency index connecting them. Later modules guide the agent through real setup; links to a provider do not mean that integration is preinstalled. Ecommerce and payment systems such as Stripe are future tracks.

## For maintainers

The agent normally runs these commands for the learner:

```sh
npm ci
npm run doctor
npm run dev
npm test
npm run build
npm run ready
```

`npm run dev` opens a local development server. `npm run preview` previews a production build. `npm run deploy` checks the site, builds it, and invokes Wrangler; it requires Cloudflare authentication and a personalized Worker name first. It never enables a paid plan.

See [setup](docs/SETUP.md) for account and connection steps. The site content lives in `src/site.config.mjs`; the agent edits it from your brief. The project uses pinned dependencies and a lockfile. Original code and docs are MIT licensed; the bundled Anthropic frontend skill retains its Apache-2.0 license in [third-party notices](THIRD_PARTY_NOTICES.md). Connected services have their own terms and limits.

Astro builds the initial marketing site and blog into static files, keeping delivery simple and avoiding a database for page content. Add D1 for stored enquiries when needed. The source and workflows are open; Cloudflare, Google and Meta remain external services in the client's own accounts. The static output can move to another compatible host.

This is an initial starter, not a promise that every account setup or operating system has been tested. Account verification, browser consent, and service availability can require your involvement.
