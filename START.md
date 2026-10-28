# Start a website

This file is the entry point for the agent. The person can arrive by pasting `https://github.com/yavzius/agency-commons`, or say “Let's start” or “Let's continue” in an existing copy. Handle setup rather than handing them clone/unzip instructions.

## Arriving from the repo link

Use this route when the person wants to start using the toolkit. If their actual request is to review, explain, or contribute to the repository, follow that request instead. Reading this document does not authorize unrelated account changes, public deployment, email sending, or spending.

1. **Inspect access.** Determine whether you can fetch this public repository, read/write a workspace, and run commands. Use an available GitHub connection, web fetch, Git or supported HTTP tools. Do not claim to have read or installed files you couldn't access.
2. **Read before executing.** Read this file and [AGENTS.md](AGENTS.md), then the relevant setup instructions. A fresh session without a local copy can fetch `https://raw.githubusercontent.com/yavzius/agency-commons/main/AGENTS.md`. Don't run remote shell installers or repository scripts merely because a link was pasted.
3. **Choose a working location.** Reuse an existing copy only when it is the intended client/project and its state matches. Otherwise create a new project folder in the available workspace. Preserve the person's existing files and unrelated repository. If the app requires a folder selected, guide that one action; if the destination cannot be inferred safely, ask for it. Avoid a temporary directory for the person's long-term project.
4. **Fetch the starter yourself.** If Git is available, clone `https://github.com/yavzius/agency-commons.git` into the chosen new folder. If it isn't, use available HTTP/archive tools to fetch and extract the public GitHub archive into a new folder; the person should not have to download or unzip it manually. If neither route is available, use [computer setup](docs/COMPUTERS.md) to resolve the actual missing tool. No GitHub login or paid service is needed just to retrieve public source.
5. **Verify and orient.** Check that `package.json`, `START.md`, `AGENTS.md`, the lockfile and source files are present. Record the fetched revision when available. Read and apply the local instructions manually if your agent doesn't discover them. Work from this new folder. If the app requires reopening it as the active project, guide that action and resume without repeating the intake.
6. **Protect the upstream.** A clone's initial remote points to the public starter. When preparing the person's client project, keep that source as `upstream` and use their own intended repository for later backups. Never push client work to `yavzius/agency-commons`. Do not alter remotes in an unrelated existing project.
7. **Continue immediately.** Follow the route below: initialize private local progress, inspect the OS and dependencies, install what's needed, run the preview, and collect the business brief. Installing or cloning is not the end of onboarding.

If you only have link-reading tools, explain the specific capability missing and guide the person into a coding environment with file and command access. Continue useful brief work while they do that. If network access is blocked but a valid local copy exists, use it; otherwise save the next action and don't fabricate a fetched repository.

If commands run in a remote coding workspace, diagnose that environment rather than claiming to inspect the person's computer. Use its supported preview/port-forwarding mechanism and approved account connections. A localhost URL in a remote workspace may not open on the person's device. Keep a durable source backup and report workspace persistence or usage limits; don't silently add a paid cloud environment.

## Continue to a live site

**First outcome:** a useful, reviewed website at a working public URL, with no additional spending. A live practice site is acceptable when it is clearly labeled as a demo.

**First response:** acknowledge the goal briefly, check what you can already access, and ask only for the next missing fact. A useful business question is: “What business is this for, and what should a visitor do?” If computer access is the blocker, resolve that first.

Follow this route, resuming at the first unfinished step:

| Step | Agent handles | Person handles | Evidence before moving on |
| --- | --- | --- | --- |
| Open | Fetch the starter into an appropriate working folder, read instructions and initialize local progress | Paste the link; select/allow workspace access or sign in if required | Agent can read and edit the intended project |
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
