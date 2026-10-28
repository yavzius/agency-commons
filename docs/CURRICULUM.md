# From a business brief to a live client website

An accelerated agency-building path for non-engineers serving small local businesses. The person works through conversation; the agent handles implementation and operates connected tools. Learning happens through decisions, previews, checks, and real changes. The person owns their accounts and can replace individual services; there is no platform subscription to Agency Commons.

The starting budget is an existing ChatGPT subscription and $0 additional spending. The first useful result is a live static site. The full path adds dependable enquiries, search visibility, measurement, maintenance, and client handoff as needed.

## How to use the path

Start at the first unmet outcome. Stages are a route, not a fixed weekly schedule. A person with existing accounts can skip setup already verified by the agent. A simple brochure site can launch without completing the optional forms, CMS, or advertising stages.

Each stage has two records: what the agent has verified works, and what the person has demonstrated they understand. A successful deployment does not prove understanding. A correct explanation does not prove the deployment works.

The learner doesn't need to memorize commands or framework syntax. The useful skills are describing a business, evaluating a page, controlling access and costs, checking enquiries, interpreting basic evidence, and requesting safe changes.

## The route

| Stage | Outcome | Agent does | Person learns through a small decision or check |
| --- | --- | --- | --- |
| 1. Get ready | A working local project | Checks the app, folder access, Node/npm, dependencies, and preview | Identifies which app/folder contains their project and what a local preview means |
| 2. Shape the brief | A clear audience, offer, and primary action | Asks focused questions and saves a short brief | Chooses an action appropriate to the business and explains what a visitor needs before taking it |
| 2a. Research and position | An original message and page plan informed by relevant competitors | Vets direct/close competitors, records evidence, proposes copy and section order | Distinguishes an observed pattern from proven conversion success; explains why a first-screen message fits the customer |
| 3. Make a first draft | A credible responsive page | Builds copy and layout, applies supplied brand assets, checks mobile | Distinguishes a useful specific claim from invented or vague marketing copy |
| 4. Connect hosting | Verified access to the correct free account | Guides Cloudflare account/plugin/MCP setup; verifies access; prepares a unique Worker | Identifies who owns the account and what permission is being granted |
| 5. Review and launch | A verified public URL | Tests the build, links and primary action, deploys, checks the live version | Distinguishes preview from production and approves the actual page/destination |
| 6. Change and recover | A saved revision and a recoverable update | Introduces Git/GitHub, saves a checkpoint, makes and previews a change, demonstrates recovery | Describes what will change publicly and identifies the previous good version |
| 7. Connect a domain and email | Correct website DNS and preserved or newly verified business mail | Inspects existing records, prepares changes, configures authorized records and verifies resolution/delivery | Distinguishes website hosting, domain ownership, a mailbox and a form notification |
| 8. Receive enquiries | A tested path from submission to the responsible person | Adds form validation, bot checks, storage, retrieval and optional notifications | Distinguishes “button clicked,” “saved enquiry,” and “email received” |
| 9. Be discoverable | Search-ready pages and verified Search Console ownership | Handles metadata, sitemap, crawler access, real structured data, verification | Connects a visitor question to a useful page; knows that submitting a sitemap doesn't guarantee indexing |
| 9a. Answer customer questions | A reviewed blog post with a useful next step | Plans, drafts, previews, checks and publishes Markdown; maintains existing posts | Distinguishes verified facts from generated copy, and local drafts from published articles |
| 10. Measure what matters | One useful measurement setup | Configures the chosen analytics provider, event definitions and consent behavior; verifies events | Distinguishes visits, clicks, saved enquiries, and qualified leads |
| 11. Prepare/manage campaigns | Verified measurement and an approved campaign workflow, if needed | Connects client-owned assets, prepares campaigns, tests tags and reports results; changes live delivery only within approved scope | Chooses a real outcome and budget; distinguishes drafts from live spend and reporting from management access |
| 12. Operate and hand over | A site another person can own and maintain | Records ownership, access, updates, costs, backups, data retention and support | Can request an update, locate an enquiry, and identify the person responsible for a failure |
| 12a. Delegate recurring work | One tested report or draft workflow, if useful | Prepares a narrow task, verifies runtime/tools, tests once and configures an authorized schedule | Distinguishes preparing from publishing/sending; knows where results appear and how to pause |
| 13. Repeat for a second business | A reusable working process | Reuses the right components and adapts the design, copy, forms and checks | Makes decisions on a different brief with fewer prompts and explains why the sites differ |

## First launch: stages 1–5

**Start with an immediate win.** Get the existing page running and show it. Resolve a missing dependency one at a time. Don't teach installation, Git, HTML, hosting, and APIs in one explanation.

**Create a brief through conversation.** Establish the business, customer, offer, main action, factual content, and visual direction. Ask for missing essentials progressively. Use a fictional practice business when real client facts aren't available, and label it clearly. Save agreed facts in local project notes.

**Build from the brief.** The agent can produce a complete first draft. Ask the person to assess a concrete result: for example, whether a first-time visitor can tell what the business offers and how to contact it. Fix the observed problem before adding another feature.

**Research before design.** Use [DISCOVERY.md](DISCOVERY.md) to find direct competitors and useful references, separate facts from assumptions, write credible copy, and choose page structure. Review the above-the-fold message on phone and desktop. A competitor's design is evidence of what they do, not proof that it works. Use [frontend skills and components](FRONTEND.md) to implement the resulting direction.

**Connect only what this launch needs.** The person signs in to Cloudflare and authorizes access. The agent verifies the account rather than assuming an installed plugin is connected. GitHub backup can follow the first preview; Google and Meta accounts can wait until their stages.

**Launch a reviewed version.** The agent checks the site and shows the intended destination. A demo can go live clearly labeled and excluded from indexing. A real-business launch needs accurate content and a working contact action. Custom domains are optional and require a client-funded purchase or an existing domain.

**First-launch evidence:** the public URL loads on a second device, the primary action works, the person knows it is public, and the agent records a recoverable project version. Record any untested feature explicitly.

## Improve the live site: stages 6–11

**Changes and recovery.** Use a small real change, such as business hours or a service description. Show a before/after preview, preserve the previous version, and publish within the agreed workflow. Later ask the person to request a different change and explain how they would recover if it were wrong. Treat website code recovery and database recovery as different operations.

**Domains and email.** Introduce the domain when the client has one or funds it. The agent inspects existing DNS, uses supported tools for changes, and preserves working mail. Add Google Workspace or another business mailbox only when needed and funded. Verify incoming/outgoing mail with authorized recipients. Follow [the domain/email runbook](DOMAINS-AND-EMAIL.md).

**Forms.** Introduce a database when there is something to store. Keep the request small: name, reply address, and message. The person chooses who responds and how quickly. The agent follows [the forms runbook](FORMS.md), verifies storage and access, and adds notifications only after the delivery setup is ready. A practice form uses synthetic data until the real data-handling decisions are agreed.

**SEO and GEO.** Teach search engine optimization and generative engine optimization through customer questions and accurate answers. First verify crawlable HTML, titles, descriptions, headings, links, canonical URLs, mobile quality, sitemap and indexing settings. Add Search Console and relevant business information. Avoid promises of ranking or AI citations. See [search and measurement](GROWTH.md).

**Analytics.** Start with a question such as “Are people visiting our services page?” or “Which campaign produces saved enquiries?” Choose the simplest system that answers it. Cloudflare Web Analytics suits basic traffic/performance; GA4 suits richer campaign/event reporting. Consider open-source alternatives when their hosting and ownership tradeoffs are acceptable.

**Blog management.** Follow [the blog workflow](BLOG.md). Start with one real customer question, ask the owner to verify business-specific claims, preview a Markdown draft, and publish a useful answer within the agreed workflow. Revisit and correct existing articles. Keep a small content plan; avoid turning publishing frequency into the objective. A CMS is optional because the agent can manage files.

**Advertising measurement.** Optional, after the site and lead path work. Set up Google Ads conversion tracking and/or Meta Pixel only for a real campaign requirement. Keep account ownership, consent, event definitions, and duplicate counting explicit. Creating a campaign or spending money is a separate action with a separate budget decision.

## Client delivery: stages 12–13

The person practices a discovery conversation, describes a bounded deliverable, collects factual content, reviews changes with the client, and uses [the handoff template](HANDOFF.md). Track each client's site, owner, next action, domain renewal, contact recipient, and maintenance agreement in a simple private list. A CRM platform is unnecessary at the beginning.

For the second site, change meaningful requirements: different audience, offer, primary action, brand, and lead handling. Recoloring the first template isn't enough. Reuse deployment and quality checks, but require the person to make fresh decisions. Extract a personal starter only after seeing which parts actually repeat.

**Background work.** Add [one report or draft task](AUTOMATIONS.md) after its manual workflow is reliable. Test the intended output and permissions first. A local scheduled agent needs its machine/app available; hosted API work has separate costs. Prepare Gmail drafts only with authorized mailbox access. Teach the difference between a draft and a sent message using actual evidence. Keep publishing, sending and spending within the owner's explicit policy.

Add a CMS when a client needs to edit content independently. Evaluate EmDash or another editor against that client's needs, hosting budget, and maintenance burden; it isn't a prerequisite for the first website. Keep React/Next.js, complex databases, ecommerce, authentication systems, and multi-client dashboards as later branches driven by actual requirements.

## How the agent teaches without slowing the build

Use this loop at meaningful moments:

1. Connect one new idea to something already visible in the project.
2. Show a small worked example and a near-miss that differs in the decisive feature.
3. Ask one short choice or prediction on a different instance. Don't include the answer in the question.
4. Listen to the reason, give specific feedback, and continue the build.
5. Revisit the idea later with a different case, without showing the previous answer first.

For example, when teaching enquiry reliability, contrast a success message displayed immediately with one displayed after a confirmed database write. Later ask what should happen when the database is unavailable. Don't require the learner to code the handler to demonstrate the distinction.

Hold business context and page appearance constant while first contrasting the success condition. Later vary the business, form layout, and failure mode. This separates reasoning about successful storage from memorizing a particular screen.

Progress records use the person's actual words or observable action, the amount of help, and a dated artifact/result. A guess or an answer copied from the agent isn't evidence of independent understanding. Recheck important ideas after a delay; a same-session retry is useful but not durable evidence.

When a check fails, narrow the cause. If the person doesn't understand “server,” teach that representation before asking about server validation. If setup is blocked by a permissions screen, resolve the screen instead of reteaching the whole website. If the agent's question is ambiguous, repair the question. Don't turn repeated misses into a long interrogation.

## Completion evidence

| Claim | Evidence |
| --- | --- |
| “I can get a site live with an agent” | A reviewed live site, correct ownership, and verified main action |
| “I can run it safely” | A demonstrated change/recovery, sound handling of an unfamiliar permission/secret scenario, and known costs |
| “The form works” | A traceable synthetic submission, persisted record, intended recipient access, and visible failure behavior |
| “Measurement works” | Events observed in the correct property with consent behavior and duplicates checked |
| “I can serve another client” | A second brief and site requiring different decisions, plus a usable handoff |

This document is a starting curriculum. Build evidence from real sessions before claiming the teaching workflow is validated. Don't invent learner histories, completed milestones, or deployment results.
