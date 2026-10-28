# Start a website

This file is the entry point for the agent. The person should be able to say “Let's start” or “Let's continue.”

**First outcome:** a useful, reviewed website at a working public URL, with no additional spending. A live practice site is acceptable when it is clearly labeled as a demo.

**First response:** acknowledge the goal briefly, check what you can already access, and ask only for the next missing fact. A useful business question is: “What business is this for, and what should a visitor do?” If computer access is the blocker, resolve that first.

Follow this route, resuming at the first unfinished step:

| Step | Agent handles | Person handles | Evidence before moving on |
| --- | --- | --- | --- |
| Open | Read the repo and initialize local progress | Install/open the desktop app, sign in, allow access to this folder | Agent can read and edit the project |
| Prepare | Detect dependencies, guide missing installations, run local site | Installer or OS approvals when required | Working local URL and compatible tool versions |
| Understand | Turn a short conversation into a brief | Business facts, audience, desired enquiry/action | A brief the person agrees describes their business |
| Research and structure | Study relevant competitors, propose copy and page/section order | Verify business claims and choose a direction | Dated observations separated from hypotheses, plus a usable message and page plan |
| Build | Copy, layout, code, images supplied by the person, responsive checks | Review content and direction | A coherent local draft with no invented claims |
| Connect | Discover Cloudflare tools, guide plugin/MCP connection, verify account | Create free account, verify email, complete OAuth | An actual successful account/tool check |
| Review | Build, inspect, fix, prepare exact destination | Approve this version and its public destination | Readiness checks plus reviewed preview |
| Publish | Deploy with free static hosting and verify live page | Any outstanding account consent | Reachable live URL and working primary action |
| Continue | Save progress and a recovery checkpoint | Choose next improvement | One clear next action |

Use `docs/SETUP.md` as a runbook and `docs/TOOLS.md` to prefer agent-operated MCP/CLI/API paths. Use `docs/CURRICULUM.md` for the longer path. Use `coach/SESSION.md` to weave learning into the work.

Choose the OS-specific route in `docs/COMPUTERS.md`. Before designing a real-business site, use `docs/DISCOVERY.md` for competitor research, copy and structure, then `docs/FRONTEND.md` for bundled skills and optional components. For a quick fictional practice preview, keep research lightweight and clearly label assumptions.

GitHub is useful for a durable backup and client handoff, but is not required to download the starter or preview locally. Introduce it when saving the learner's own project; guide account creation and authorization then. The public starter is not the learner's deployment target or a shared home for client data.

Don't install a CMS, database, image service, analytics suite, or extra paid agent before the first site needs one. Don't turn an account issue into a programming lesson. If setup is blocked, save the exact non-secret error and continue useful brief/design work.

The person must be able to distinguish a local preview from a public site before publishing. Teach this through the actual URLs. They do not need to explain the framework internals.

After launch, choose the next service the business actually needs: domains/email, enquiries, SEO/GEO, blogs, analytics, client handoff, or advertising. Use [blog management](docs/BLOG.md) for content and [background agents](docs/AUTOMATIONS.md) for optional reports, drafts and follow-ups. Keep everything in the person's chosen accounts. The goal is an inexpensive, flexible agency workflow, not a new hosted platform. Ecommerce and payments are out of scope for this version.
