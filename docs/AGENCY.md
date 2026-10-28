# Manage the agency through the agent

The public toolkit supplies reusable guidance and blank templates. Your private agency workspace manages client work. Each client's website has its own repository, deployment and handoff history. There is no management platform to run.

## Create the workspace

The agent runs these from the appropriate folder, using fresh destinations with existing parents. Paths with spaces must be quoted for the current shell.

```sh
# From the public toolkit
npm run agency -- init ../my-agency

# From the new agency workspace
npm run agency -- client acme --site ../acme-site
```

The controller has no third-party runtime dependencies. Node/npm are needed to run its commands. The scaffolder copies only toolkit/template files, excludes Git history, installed packages, local notes and environment files, and refuses existing destinations. It does not create accounts, remote repositories or deployments.

The agent should choose sensible folders in the person's persistent workspace and handle commands. Don't ask the person to manage path arguments. If a command fails, inspect the reported error and existing state before retrying. An interrupted creation can leave a lock at `.agency-commons/create.lock`; verify that no creation is running and reconcile the record/site/index before removing a stale lock. Do not recreate or overwrite an existing client as recovery.

Initialize the agency's own Git history. Before pushing actual client records, verify the remote owner and **private** visibility using the connected GitHub tool or CLI. A folder named private is not evidence. Check staged files for secrets/private originals. Initialize each site separately, normally private unless the owner chooses otherwise. The generated site includes an optional manual check workflow. No GitHub Actions run is triggered by pushes or pull requests; run checks locally by default. GitHub's template button copies the entire public toolkit; the scaffolder creates the site-only project.

## Select and resume a client

1. Read `AGENCY.md` and `CLIENTS.md`. Select the client from the request; ask only if ambiguous.
2. Read that client's `CLIENT.md` and `WORK.md`, then the brief, materials or decisions relevant to this task. Recheck recorded access when needed.
3. Resolve the site from `.agency-commons/paths.json` on this machine. If missing or stale, use the durable repository URL in `CLIENT.md` to locate/fetch the correct site, verify `.agency-site.json` and its actual remote, then update the local path. Do not trust the path alone as identity.
4. Read the site's own `AGENTS.md`, `BRAND.md`, `DESIGN.md` and package scripts before editing. Request workspace access if the agent cannot reach the sibling site.
5. Perform the task, verify the result and update `WORK.md`. Record material decisions with the actual decision-maker, scope and reviewed version in `DECISIONS.md`. Update URLs/ownership in `CLIENT.md` and the index when they change.

Client ID and site markers help routing; they do not prove authorization or account ownership. Never switch an account/project solely because an old path or note says to.

## Keep each fact in one place

| Record | Purpose |
| --- | --- |
| `AGENCY.md` | Agency defaults, budget and agreed operating policies |
| `CLIENTS.md` | Directory linking client records and site repositories |
| `clients/<id>/CLIENT.md` | Ownership, resources, scope, renewals and URLs |
| `BRIEF.md`, `MATERIALS.md` | Private business context, sources and unresolved facts |
| `WORK.md` | Authoritative task state, next action and completion evidence |
| `DECISIONS.md` | Actual approvals, limits, expiry and superseded choices |
| `reports/` | Dated reports, created when reporting starts; use `REPORT.md` as a format |
| Site `BRAND.md`, `DESIGN.md` | Approved public-safe context and implemented design direction |
| Ignored `.agency-commons/` | Machine paths and session continuity, not the only durable business record |

Add research, site/content plans or automation records in the client's private folder when needed; don't create a large filing system before there is work. If adopting Issues/Projects later, select one task source and link it rather than maintaining two competing lists.

## Typical requests

“Continue Acme” resumes the next relevant task. “What needs attention this week?” may inspect work/renewal summaries across clients. “Prepare reports” reads only the needed connected properties and saves drafts; unavailable data stays unavailable, not zero. Follow `AUTOMATIONS.md` for background jobs and `GROWTH.md` for ads. A due date never activates a schedule or authorizes spending/sending.

The agent may perform routine local work within the request. Reuse agreed publication/send policies, including their limits; otherwise present the concrete result for the remaining decision. Keep communication, live ad delivery and DNS/account changes within their authorized scopes.

## Handoff and updates

Each generated site includes maintenance instructions, relevant runbooks, skills, its own lockfile and provenance in `.agency-site.json`. It works without the agency workspace. Use `HANDOFF.md` to record ownership and demonstrate recovery. Never put the private client folder into the website just to make handoff convenient.

Starter improvements are opt-in changes per client. Compare the recorded source revision, inspect differences, preserve client-specific work and run that site's checks. Do not merge every upstream change into every client automatically. Back up private operational records separately from code and provider-held enquiry data.
