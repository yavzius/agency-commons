# Manage a useful blog by talking to the agent

The starter includes a working Markdown blog, local draft previews, publication filtering, page metadata, and sitemap integration. It uses the same static hosting as the website. There is no extra CMS account, database, or publishing subscription. The person describes the article and reviews it; the agent manages the files.

Say: “Help me answer a question our customers keep asking. Draft an article, show me the preview, and tell me which facts you need me to verify.”

## Choose content that earns its place

Start from real customer questions, service decisions, preparation guides, or documented projects. Choose one audience, one useful answer, and a relevant next action. A local accountant might explain what to bring to a first appointment; a gardener might explain how their own site visit works. Ask the owner for their actual process before writing it.

Keep a small plan in local `.agency-commons/CONTENT.md`: topic, customer question, intended page, evidence needed, owner/reviewer, status, next action, and review date. Avoid duplicating an existing service page. A useful update to an existing article can be better than another new post.

Content can help search visibility, but a publishing quota is not a ranking strategy. Follow [the SEO/GEO workflow](GROWTH.md): accurate answers, useful structure, crawlable pages, relevant internal links, and consistent business facts. Don't generate thin city-by-city copies, fictional projects, invented testimonials, credentials, or unsupported claims. AI-answer citations and search rankings are not guaranteed.

## Draft → review → publish → maintain

1. **Brief:** confirm the customer question and intended action. Gather owner notes, verified business facts, authorized photos, and primary references for claims that need sources.
2. **Draft:** create a Markdown file under `src/content/blog/` with `draft: true`. Use a short, stable filename such as `prepare-for-your-first-visit.md`. The filename becomes its URL. Keep confidential notes and customer details out of the article and Git history.
3. **Check:** verify facts, dates, image rights, useful headings, spelling, and internal links. Cite external factual sources where useful. Ask the business owner to verify claims about their business. AI-generated text is a draft, not evidence. Don't invent an expert byline.
4. **Preview:** run `npm run dev`, open `/blog/`, and review the article on mobile and desktop. Local development includes drafts and future posts, labeled as unpublished and marked `noindex`. Keep that server local. A public preview or public source repository is not private merely because a post is marked as a draft.
5. **Publish:** apply the agreed publishing permission to this reviewed version. Set `draft: false` and a publication date that has arrived. Run tests and the production build, inspect the rendered post, then deploy to the correct client site. Verify the live URL, links, canonical URL, and sitemap after deployment.
6. **Maintain:** record the live URL and a useful review date. Correct stale service details, prices, sources, and links. Set `updatedAt` only after a meaningful update. Preserve URLs; add a redirect when a URL genuinely must change.

The sample article stays a draft. It is visible during development but absent from the production site. The homepage shows a Journal link when posts are available. The production blog index is `noindex` while empty. Demo sites and sites with indexing disabled remain `noindex`.

## Article format

The agent writes this metadata, followed by the article in Markdown:

```yaml
---
title: "What to prepare before your first appointment"
description: "A short, specific description of what this article helps a customer do."
publishedAt: 2026-10-28
draft: true
---
```

Optional fields: `author` for a real approved byline and `updatedAt` for a substantive revision. Use `YYYY-MM-DD` dates (UTC), or an explicit timestamp with a time zone. Missing `draft` defaults to true. Invalid metadata fails the build. Future-dated posts remain excluded until a new build happens after their date; **a date alone does not schedule a deployment**. Keep scheduling optional and explicit.

The schema, query, and rendering use [Astro content collections](https://docs.astro.build/en/guides/content-collections/). The starter supports flat `.md` files. The agent can add images, categories, RSS, pagination, or verified article structured data when they serve the business; those features are not preconfigured.

## Reporting and ongoing work

Review which pages attract relevant queries and enquiries, whether customers find the answer, and whether the next step works. Search Console reporting can lag; low-volume local sites may have little measurable data. Report missing data as missing, not zero. Distinguish observations from explanations and proposed experiments.

[Background agents](AUTOMATIONS.md) can propose topics, prepare sourced drafts, flag stale content, and prepare a monthly report. Start with drafts for review. Use one reviewed editorial workflow before adding frequency or autonomous publication.

If the client needs to edit independently in a browser, evaluate a CMS then. [Optional projects](RESOURCES.md) include EmDash; its runtime, storage, user access and maintenance costs must be assessed separately. Markdown plus an agent is the default, not a mandatory constraint forever.
