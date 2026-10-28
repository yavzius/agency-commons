# Search, GEO, analytics, and local-business growth

This is a set of optional workflows the agent carries out in the client's own accounts. The starter does not activate third-party tracking or campaigns. Choose a useful next outcome instead of connecting every service at once.

Research checked October 28, 2026. Recheck provider documentation and account access when implementing. A linked integration is not an installed or verified connection.

## Start with the business

Record the service, customer, actual service area, primary action, and what a qualified enquiry looks like. For a local business, an accurate phone number, useful service information, real operating hours, and a working contact path often matter more than another marketing integration.

Use customer questions to plan content. Write service/location pages only where the business genuinely operates and there is useful distinct information. Don't manufacture locations, testimonials, rankings, credentials, or repetitive pages designed only to capture searches.

The starter includes a Markdown blog. Follow [blog management](BLOG.md) for planning, factual review, draft previews, publication and updates. Use [background agents](AUTOMATIONS.md) for optional reports and content drafts after the manual workflow is reliable.

## SEO and local presence

The agent checks rendered HTML, page titles/descriptions, heading structure, internal links, canonical URLs, mobile usability, image size/alt text, and the actual contact action. Add a sitemap when the final public URLs are known. Keep drafts and practice businesses out of indexing; noindex is not a privacy boundary.

The starter includes conditional canonical and social metadata, robots instructions, and a sitemap for its homepage. Extend the sitemap when adding pages. Add Organization/LocalBusiness structured data only using verified facts that match the page, and validate the result. Don't promise a rich result from valid markup.

Guide the client through a Google account and Search Console property when ready. Prefer agent/API operations after initial authorization. A URL-prefix property can use an HTML verification tag; a Domain property uses DNS verification. The agent can add the supplied verification record through Cloudflare and verify the public result. See [Search Console verification](https://support.google.com/webmasters/answer/9008080).

Submit the sitemap, inspect index status, and later read search queries and landing-page performance. A submitted URL is not necessarily indexed. The [Search Console API](https://developers.google.com/webmaster-tools/v1/api_reference_index) supports search analytics, sites, sitemaps, and URL inspection; do not pretend it provides every dashboard action or a general-purpose “force indexing” operation.

For eligible local businesses, help claim or maintain a [Google Business Profile](https://www.google.com/business/). The owner handles verification. Keep name, phone, address/service area, opening hours, and website information consistent. Do not create an ineligible practice listing or invent a storefront.

## GEO: visibility in AI answers

Generative engine optimization is an additional visibility concern, not a guaranteed placement service. Begin with clear, useful, factual content that both people and crawlers can access. Explain services, who they suit, service areas, practical questions, and the evidence behind claims.

Google states that its generative search features don't require a special schema or an `llms.txt` file. Ordinary search fundamentals still apply. Treat speculative tactics as experiments, not requirements. See [Google's AI search guidance](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide).

Crawler controls are provider-specific. OpenAI distinguishes its search crawler from its training crawler, so a client's choice about training need not be the same as their choice about search visibility. Inspect actual robots rules and Cloudflare protections before changing them. See [OpenAI crawler documentation](https://developers.openai.com/api/docs/bots).

Keep an observation log of relevant queries, date, engine, cited sources, and any measurable referrals. Results vary by query and context. A single favorable answer is not a stable ranking or proof of business impact. Never promise citations, universal crawler access, or fabricated “AI visibility” scores.

## Choose one analytics setup

| Option | When it fits | Cost/operation tradeoff | Source |
| --- | --- | --- | --- |
| Cloudflare Web Analytics | Basic traffic and page-performance visibility | Free managed service; a simple starting point, not a full advertising attribution system | [Official documentation](https://developers.cloudflare.com/web-analytics/about/) |
| Google Analytics 4 | Campaign sources, events, and Google Ads reporting | Standard offering is free; needs deliberate event and consent configuration | [Google Analytics](https://marketingplatform.google.com/about/analytics/) |
| Umami | An open-source analytics deployment you control | MIT; self-hosting requires an application server and PostgreSQL, plus maintenance | [Source](https://github.com/umami-software/umami), [installation](https://docs.umami.is/docs/install) |
| Plausible Community Edition | An open-source, focused analytics dashboard | AGPL; self-hosted infrastructure and upkeep remain your responsibility; hosted service is paid | [Self-hosting information](https://plausible.io/self-hosted-web-analytics) |

Default recommendation: Cloudflare Web Analytics for simple visibility, or GA4 when campaign attribution is an actual requirement. Don't run several systems by default. Open-source software doesn't imply zero-cost managed hosting.

The agent records the account owner, property/site ID, purpose, event definitions, and approved data-handling approach. Keep client properties separate. Confirm data arrives in the intended property rather than checking only that a script tag exists.

## Define conversions before installing tags

| Action | What it proves | How to label it |
| --- | --- | --- |
| Page view | A page was viewed under the measurement setup | Traffic |
| Phone/email link click | Someone attempted a contact action | Contact intent; not a completed call or delivered email |
| Form submission persisted | A request reached durable storage | Received enquiry; a possible `generate_lead` event |
| Owner accepts the enquiry as relevant | The request fits the business | Qualified lead, tracked separately |
| Sale confirmed | An actual commercial result | Sale/revenue only when supported by real evidence |

Record the success condition and duplicate behavior before writing event code. Keep personal names, email addresses, phone numbers, and free-text messages out of analytics URLs and event payloads. Don't mark an attempted or failed submission as a lead. See [GA4 events](https://developers.google.com/analytics/devguides/collection/ga4/events) and [recommended events](https://developers.google.com/analytics/devguides/collection/ga4/reference/events).

## Consent and verification

Establish the audience, the client's requirements, and the client-approved privacy/consent approach before activating analytics or advertising tags. Implement that choice rather than promising compliance from a generic banner.

[CookieConsent](https://cookieconsent.orestbida.com/) is an open-source component to evaluate for a consent UI; it needs real integration and testing. It is not a substitute for deciding the applicable requirements or configuring every tag.

Google's basic consent mode blocks Google tags before permission; advanced mode can send cookieless signals. Choose deliberately. Check tag loading and network behavior for initial visit, accept, reject, withdrawal, and repeat visit. Google consent signals do not automatically control unrelated Meta scripts. See [Google consent setup](https://developers.google.com/tag-platform/security/guides/consent).

Use an automated browser where possible. Verify events with the provider's current diagnostic tools, including [GA4 DebugView](https://support.google.com/analytics/answer/7201382). Test a successful action, an invalid attempt, a retry, and a refresh. Check that conversions are neither missing nor duplicated. Update the site's security headers only for the required destinations.

## Google Ads and Meta: optional agency services

Website launch doesn't require an ad account. When the client wants campaigns, define their goal, service area, offer, destination, conversion, and explicitly approved spending limit first. Keep business ownership with the client and use granted access.

The agent can prepare a campaign plan, research relevant demand, draft copy/assets, build a matching landing page, and install/test the required measurement. The person approves factual claims and the concrete campaign before paid delivery. Creating or reviewing a draft does not authorize starting it or increasing its budget.

Use [the tools guide](TOOLS.md) to connect accounts. Google's current official Ads MCP is read-only: use it for reporting and analysis. Writes need an appropriately authorized supported API/tool path. For Meta, verify the current official connector and tools available to the actual account before promising an operation.

For Google Ads, select a deliberate conversion setup and avoid counting the same outcome twice through both direct tracking and imports. For Meta, use current Pixel/Events Manager guidance and verify the event against the intended dataset. Introduce server-side conversion APIs only when their extra credential, consent, and deduplication work is justified.

Keep management practical: review spend, actual leads, lead quality, landing-page behavior, and changes over a meaningful period. Don't automatically increase budget because a single metric improved. Save the before/after state, approved scope, and result of remote mutations.

Useful links:

- [Google Ads MCP guide](https://developers.google.com/google-ads/api/docs/developer-toolkit/mcp-server) and [open-source implementation](https://github.com/googleads/google-ads-mcp).
- [Google Ads API](https://developers.google.com/google-ads/api/docs/start) for supported management operations and access requirements.
- [Google Tag Manager API](https://developers.google.com/tag-platform/tag-manager/api/v2) for managing tag configuration.
- [Meta Ads AI connector documentation](https://developers.facebook.com/documentation/ads-commerce/ads-ai-connectors/ads-mcp-server/ads-mcp-server-overview).
- [Meta Pixel setup](https://developers.facebook.com/docs/meta-pixel/get-started/) and [Marketing API](https://developers.facebook.com/docs/marketing-apis/).

Meta's documentation was inaccessible to the research browser during preparation of this starter. These are implementation references to verify during authenticated setup, not a claim that a Meta connection has been tested here.

Ecommerce, checkout, Stripe, product catalogs, and payment-webhook handling are outside this first version. Add them later as a separate tested workflow.
