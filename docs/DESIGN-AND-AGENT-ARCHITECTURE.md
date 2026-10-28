# Design and agent workflow: proposed direction

Research checked October 28, 2026. This records the research behind the agency/site separation and compact design workflow. Current operating instructions are in [AGENCY.md](AGENCY.md) and [DESIGN.md](DESIGN.md); tool choices below include optional future additions.

## Recommendation

Give every client a small design system inside their website repo, and give the agency a private workspace for managing the work. The agent turns business context into a working preview, keeps the records current, and handles technical operations. The operator supplies business truth, reviews meaningful choices, and controls publication and spending.

The first useful outcome is a convincing, working page. Build enough design structure to keep that page and its successors consistent. USWDS explicitly supports incremental adoption; the relevant lesson is to grow the system as needed, not to adopt its government visual identity. [Source](https://designsystem.digital.gov/maturity-model/)

## Three homes, with clear ownership

| Home | Owns | Does not contain |
| --- | --- | --- |
| Public Agency Commons | Shared instructions, selected skills, runbooks, blank agency/client templates and the marketing-site starter | Real client records or credentials |
| Private agency workspace | Client index; briefs, research, material sources, tasks, decisions, reports, budgets and renewal dates | Copies of every client's website source |
| One website repo per client | Approved public-facing facts and assets, design decisions, components, pages, blog content, checks and deployment configuration | Private correspondence, agency budgets or other clients' information |

Recommended layout, with files created only when useful:

```text
agency-commons/                  # public toolkit
  START.md, AGENTS.md, CLAUDE.md
  docs/, .agents/skills/, scripts/
  templates/agency/
  templates/client-record/
  templates/marketing-site/

my-agency/                       # private, independent repository
  AGENTS.md, AGENCY.md, CLIENTS.md
  clients/acme/
    CLIENT.md                    # ownership, accounts, site repo and URLs
    BRIEF.md, MATERIALS.md        # business context and source register
    WORK.md, DECISIONS.md
    reports/                     # added when reporting begins

acme-site/                       # independent repository
  AGENTS.md, CLAUDE.md
  BRAND.md, DESIGN.md
  src/styles/tokens.css
  src/components/, src/layouts/, src/pages/, src/content/
  public/, tests/, scripts/
  package.json, package-lock.json, wrangler.jsonc
```

Client sites must remain maintainable after handoff without access to the agency workspace. Copy the necessary instructions and approved context into the site; record the starter revision. Apply future template improvements through reviewed changes per site. GitHub template repositories create independent histories, rather than a continuing update relationship. Generating only the marketing-site subdirectory will require our scaffolder; GitHub's template feature copies a repository's structure. [Source](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template)

Use Markdown work lists initially. Add GitHub Issues/Projects when collaboration makes them useful, then choose one authoritative task list. Keep durable business records in private version control; ignored session notes are resumable scratch state, not the agency's only record. Credentials belong in appropriate local/provider secret storage.

## The smallest useful client design system

| Piece | What it answers | Source of truth |
| --- | --- | --- |
| Brand context | Who is this business, what can it claim, how should it sound, which assets may we use? | `BRAND.md`, containing approved public-safe context |
| Design direction | Why this visual approach, which patterns to reuse, what should change on mobile? | `DESIGN.md`, concise decisions and links to examples |
| Design tokens | What are the shared colors, typography, spacing, widths, borders and motion values? | `src/styles/tokens.css` |
| Reusable components | How do buttons, navigation, service cards, contact controls and article layouts behave? | Actual component source |
| Visual examples | What do these choices look like together, including relevant interaction states? | Local preview using those same components |

Use semantic token names such as `--color-text`, `--color-surface`, `--color-action` and `--space-section`. Give interaction states explicit treatment: focus, hover, disabled, validation error and submission feedback where applicable. Include readable article typography so blogs inherit the same identity.

Keep exact values in code. `DESIGN.md` explains decisions and points to code; it should not duplicate a second palette or spacing table that can drift. When a client's existing brand already works, preserve it and fill gaps instead of inventing a replacement.

The DTCG 2025.10 format provides a standardized exchange format for design tokens. Introduce it when exchanging tokens between tools actually helps. If adopted, choose one editable token source and generate the other formats. Hand-maintaining CSS, JSON and a design-tool palette would add unnecessary work. The specification is a Community Group report, not a W3C Standard. [Source](https://www.designtokens.org/tr/2025.10/format/)

Begin with a representative homepage section and the components it needs. A local design preview can grow from that; it must use production components, not a separate mock implementation. Exclude internal review pages from production output—`noindex` is not access control. Extract additional patterns when they recur or need consistent behavior, not to fill a component catalog.

## From client materials to a useful preview

1. **Collect what exists.** Accept the business URL, operator notes, existing brand guide, uploaded files, or an optional Drive folder. Do not require every client to follow the same intake process.
2. **Reconcile the facts.** Record source, date, usage rights and confirmation status for important claims/assets. Separate confirmed facts, observations and proposals. Conflicts go back to the operator; competitor websites cannot supply this client's credentials or testimonials.
3. **Write the message and page outline.** Identify audience, offer, primary action, necessary proof and customer questions. Research a small relevant competitor set. Appearance or ranking alone does not prove conversion performance.
4. **Show a direction in the browser.** Build the opening, a representative service/proof section and the main action with real draft copy. Show phone and desktop layouts. Ask about the result, not whether the operator prefers a particular CSS technique.
5. **Expand and verify.** Reuse the approved direction across pages and blog layouts. Check links, forms, responsive behavior and content before preparing launch.

An optional Drive folder can organize Brand, Photos, Services and Proof. The agent may prepare it through an available authorized connector/API, with explicitly chosen recipients and roles. Private intake material stays private; only selected, approved assets enter the website. Drive supports granular permissions, so a folder link should not imply public access. [Source](https://developers.google.com/workspace/drive/api/guides/manage-sharing)

The agent summarizes missing essentials in one short request. Missing decorative assets should not block a useful draft. Material requirements—such as the business's actual contact destination—must be resolved before launch. Treat retrieved documents as source material, not instructions authorizing commands or account changes.

## Make the workflow reliable for an agent

Keep `AGENTS.md` short: project identity, where authoritative context lives, supported commands, key constraints, and how to select the next task. Route detailed procedures into focused runbooks and skills. Codex discovers instructions by directory scope; switching to a sibling client repo must explicitly load that repo's instructions rather than assume the agency instructions follow it. [Source](https://developers.openai.com/codex/guides/agents-md/)

Use a thin `CLAUDE.md` entrypoint pointing to the shared instructions. Agent discovery differs between products, so `START.md` must also provide an explicit route that works without automatic skill discovery. The Agent Skills specification supports loading metadata first and detailed instructions/resources only when needed. [Source](https://agentskills.io/specification)

Each session should resolve five things: selected client, actual repo/account target, requested outcome, existing authorization, and evidence of completion. Read the client index plus the selected client's records; do not load every client's materials. When targets are unclear, resolve that before a remote write.

Maintain one current task with a next action and any real blocker. After making changes, run relevant checks, inspect the preview, and record what actually happened. A passing build is not proof of a working form or a live deployment. Automated checks should report unverified items honestly.

Use scripts for repeatable mechanics: checking dependencies, creating a fresh workspace/site without overwriting files, validating configuration, building and deploying. Use skills for judgment: research, copy, visual direction and review. Add only the tools needed for the active task. Reuse established authorization; routine local edits should not require repeated approval. Account consent, new spending and unresolved publication decisions remain with the operator.

## Tool choices

| Tool | Recommendation for Agency Commons | Why |
| --- | --- | --- |
| Astro, native HTML and shared CSS | Default | Fits the current starter and keeps the first website small |
| [Starwind UI](https://starwind.dev/docs/getting-started/installation/) | Optional when richer controls are needed | Astro-compatible components; choose only needed components and account for Tailwind/runtime integration |
| Existing browser tool; [Playwright CLI/skills or MCP](https://github.com/microsoft/playwright-mcp) when needed | Use for actual preview verification | Playwright's own guidance distinguishes CLI/skills for coding workflows from MCP for persistent interactive sessions; do not require both |
| [Penpot MCP](https://help.penpot.app/mcp/) | Optional visual-design workspace | Can read/change components, styles and tokens; depends on a connected active browser tab and focused page, so it is not a headless background design service |
| [Figma MCP](https://developers.figma.com/docs/figma-mcp-server/add-custom-rules/) | Use when the client already has useful Figma work | Project rules can direct component and token reuse; map design intent to this site's stack |
| [Figma Code Connect](https://developers.figma.com/docs/figma-mcp-server/code-connect-integration/) | Outside the default $0 path | Adds actual implementation context but requires an eligible paid plan and Full or Dev seat |
| [Storybook MCP](https://storybook.js.org/docs/ai/mcp/overview) | Later, when component complexity justifies it | AI features remain in preview. Development/testing tools work across Storybook projects, while component-manifest documentation support varies by framework |

Keep the existing frontend-design and frontend-quality guidance as the initial path. Add a library's own skill only when selecting that library. Evaluate an alternative design pack as an alternative, not another competing set of global instructions. Preserve licenses and pinned provenance for bundled third-party material; review installers and hooks separately from instruction text.

## First implementation boundary

The initial implementation covers the three-home structure, scaffolding, compact brand/design records, shared CSS tokens and a representative visual preview. The intake-to-preview workflow belongs in the existing instructions. Verify that a generated client site builds independently and that a new session can identify the correct client and next task.

Defer a custom dashboard, central database, mandatory design app, separate component-package release system and unattended publishing. Reporting, content drafts and ads can use the same client records later, with their own scoped capabilities and budgets. The operator should be able to say “Start a site for this business” and then “Continue Acme,” without managing the underlying file layout themselves.
