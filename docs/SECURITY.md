# Security through everyday decisions

The agent implements the technical protections. The person learns enough to understand access, ownership, customer data, and recovery. Introduce each topic when it first matters.

| When | Habit | Agent handles | A useful check |
| --- | --- | --- | --- |
| Creating accounts | Use your own account and enable MFA; keep recovery methods private | Guides official setup and records the owner, not the credentials | Who can recover this account if the contractor leaves? |
| Connecting MCP or a plugin | Grant access for the actual task | Explains the permissions, verifies the account and available tools | Is this asking to read the site or change something? |
| Installing software | Use official sources and a lockfile | Checks runtime compatibility, installs dependencies, reviews relevant advisories before release | Is this the official installer, and why is it needed? |
| Adding integrations | Know what is public and what is secret | Keeps private keys in server-side secrets and local secrets out of Git | Can someone viewing the page obtain this value? |
| Publishing | Treat every public page/file as public | Checks the build, staged files, destination and preview | Would we be comfortable if a visitor downloaded this? |
| Collecting enquiries | Collect only what the business needs | Validates inputs on the server, verifies bot tokens, restricts retrieval and avoids private payloads in logs | Where is the enquiry stored and who can read it? |
| Adding analytics | Define the purpose and respect the agreed consent behavior | Configures tag blocking, tests rejection/withdrawal, excludes sensitive data | What gets sent if the visitor declines? |
| Maintaining a site | Preserve a known good version | Creates checkpoints, verifies updates and tests restore paths | What exactly can this backup restore? |
| Handing off | Keep client ownership and access clear | Documents accounts, exports and invited roles | Can the client continue without your personal login? |

## Important boundaries

Public website code and browser JavaScript cannot keep a secret. A GA measurement ID, a Search Console verification tag, and a Turnstile site key are designed to appear publicly. A Cloudflare API token, Turnstile secret, email credential, and database password are not.

OAuth authorizes a connection without asking the person to paste a password into the agent. It can still grant powerful access. Read the requested scope and use the correct account. Don't let a setup failure become a reason to disable permission controls globally.

`.gitignore` prevents newly ignored files from being added normally; it does not remove credentials already committed. If a secret was exposed, revoke/rotate it and inspect exposure before cleaning repository history. Deleting the visible line alone is not recovery.

Noindex and robots.txt affect cooperative crawlers; they don't protect confidential content. Use actual access controls for a private preview. Avoid publishing private draft material on a free public subdomain.

Local progress is ignored by Git, but a local disk can still be lost or accessed. Keep logs minimal. Never record passwords, MFA recovery codes, customer messages, or sensitive client documents there.

For forms, stored data and email delivery are separate systems. Back up stored enquiries independently of source code, choose an appropriate retention period with the client, and test restoration without overwriting live data. Use synthetic data for teaching and smoke tests.

A cookie banner or an open-source analytics tool doesn't automatically settle legal requirements. Before collecting visitor data, establish the audience, business requirements, and client-approved privacy/consent approach; implement and verify that approach. The agent should not promise legal compliance from a generic template.

## A small maintenance routine

At an agreed interval, the agent helps check the live page, primary action, form retrieval/delivery, account alerts, usage limits, dependency updates, domain renewal and backups. Use a separate preview for changes and test before publishing. Don't apply a breaking dependency upgrade automatically because a newer version exists.

If something breaks, first identify the affected site and last known good version. Inspect the actual error, choose the smallest repair or rollback, verify the public result, and record the cause and next prevention step. Don't reset unrelated resources or delete customer data to make a test pass.
