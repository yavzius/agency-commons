# Add a dependable enquiry form

This is an agent implementation runbook. The initial site uses an email link for a real business and a visible placeholder for the demo. It does not include a working form backend yet.

Add a form when it solves a real need. Keep the first form small and avoid file uploads, payments, sensitive records, and public accounts.

## Agree the behavior

Establish the fields, who receives/reviews enquiries, expected response time, retention, and what a visitor should see after success or failure. Use synthetic examples while testing. The client approves the privacy notice and data handling before real collection starts.

The success condition is a durable saved enquiry. Notification delivery is a separate status. A front-end animation or HTTP request leaving the browser is not a saved enquiry.

## Free-first implementation

Use a small Cloudflare Worker endpoint, D1 storage, and Turnstile where appropriate. D1's free tier includes daily read/write allowances and storage; Turnstile has a free plan. Recheck [D1 pricing](https://developers.cloudflare.com/d1/platform/pricing/), [D1 limits](https://developers.cloudflare.com/d1/platform/limits/), and [Turnstile plans](https://developers.cloudflare.com/turnstile/plans/) before provisioning.

1. Verify the account and choose a project-specific D1 database. Create a migration for submissions and apply it locally before remotely.
2. Add the backend route and binding. Keep static pages served as assets; review routing so an API request cannot silently receive an HTML page.
3. Validate method, content type, body size, required fields, lengths, and email shape on the server. Use prepared SQL statements. Return controlled errors without exposing internal details.
4. Add honeypot/rate controls appropriate to the deployment and verify Turnstile on the server with the secret stored in Worker secrets. A browser widget alone is insufficient.
5. Save an identifier and timestamp. Handle repeated requests deliberately, so a browser retry doesn't create multiple enquiries or multiple conversion events.
6. Give the owner a private way to retrieve records through authenticated platform access. Do not publish a submissions-list endpoint without an actual authorization design.
7. Add a clear accessible UI: labels, useful errors, pending state, truthful success, and a recovery path. Keep the existing contact alternative available.
8. Update the static-only readiness guard and its tests to reflect the new architecture. Recheck runtime costs and limits. Don't bypass the guard without replacing its checks.

The person can ask the agent to inspect synthetic test enquiries through their authenticated Cloudflare connection. For real operations, agree a recipient/inbox workflow that works without exposing private records in a public transcript.

## Email is a separate step

The free first exercise can demonstrate persistence and private retrieval without email. It must not be described as unattended lead delivery until someone has a dependable way to receive or review enquiries.

Cloudflare supports free sends to verified destination addresses; arbitrary-recipient sending requires Workers Paid under current pricing. Sender/domain configuration still matters. See [email pricing](https://developers.cloudflare.com/email-service/platform/pricing/) and [sending setup](https://developers.cloudflare.com/email-service/get-started/send-emails/). Don't promise autoresponders to arbitrary visitors on the no-spend path.

If notifications are required, use a supported provider and verify both sender and recipient setup. Persist before sending, record delivery attempts/status, and use a durable retry mechanism for transient failure. Never lose the enquiry because email failed. Don't send real test email without authorization to that recipient.

## Evidence before calling the form ready

| Case | Expected result |
| --- | --- |
| Valid synthetic submission | One persisted record with the expected fields; truthful success |
| Missing/invalid fields | Useful error; no record |
| Failed/missing bot verification | Rejected on the server |
| Oversized or unexpected payload | Controlled rejection |
| Repeated submission/retry | Deliberate duplicate handling |
| Storage unavailable | No false success; visible retry option |
| Notification unavailable | Enquiry remains stored; failure is visible and retryable |
| Unauthorized record request | No private data returned |
| Retrieval and deletion | Owner can find a test record and remove it as intended |

Save test evidence without copying private payloads into project logs. If analytics is enabled, emit a lead event only for the agreed confirmed success, and test the negative cases don't count. Follow [measurement guidance](GROWTH.md).
