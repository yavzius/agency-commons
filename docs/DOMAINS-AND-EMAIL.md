# Domains, DNS, and business email

The first practice site can use its free `workers.dev` URL. Add a custom domain or business email when the client needs it and owns or funds it. The agent handles supported DNS/API work; the person handles account ownership, purchases and required provider consent.

## Establish ownership and preserve what works

Before any change, identify the domain registrar, authoritative DNS provider, website host, email provider, account owner, existing services, and approved target. These may be different companies.

Inspect and export the current DNS records before a migration. Store a dated snapshot privately. Check nameservers, DNSSEC, website records, MX records, SPF/DKIM/DMARC, and verification records. Cloudflare's automatic DNS scan is not proof that every required record was found.

Show a concise proposed change with its effect and recovery plan. Approval to publish a new website does not authorize replacing working business email or moving an entire DNS zone unnecessarily.

## Connect a website domain

If the domain is already on Cloudflare, use its authenticated API/MCP and the supported Workers custom-domain configuration. Inspect conflicts, choose the intended hostname, and verify HTTPS and the final canonical URL. Keep existing mail and unrelated subdomain records intact.

If moving authoritative DNS to Cloudflare, create the zone first, copy/reconcile records, and follow the provider's DNSSEC migration procedure before changing registrar nameservers. The person may need to approve that registrar action. Verify the assigned nameservers, zone activation, website resolution and existing email afterward. Re-enable DNSSEC correctly once the move is complete. See [Cloudflare full setup](https://developers.cloudflare.com/dns/zone-setups/full-setup/setup/).

Choose a primary hostname and redirect its alternative as appropriate. Update canonical URLs, sitemap and relevant measurement properties. Check both the root and `www` paths that are intended to work. DNS changes can take time; inspect authoritative and recursive results rather than repeatedly rewriting records.

Domain registration and renewal are separate costs. Record who pays, the renewal date, and how access can be recovered. A domain transfer between registrars is usually unnecessary merely to host a website on Cloudflare.

## Choose the right email service

| Need | Appropriate path |
| --- | --- |
| Existing business inboxes work | Preserve the existing provider and mail records |
| A real inbox such as `name@business.com`, with sending and receiving | Client-owned Google Workspace or another mailbox provider; budget separately |
| Forward a custom address to an existing inbox | Evaluate Cloudflare Email Routing; forwarding alone is not a complete business mailbox |
| Website form notifications or transactional messages | Configure the website's email-sending service separately from employee mailboxes |

Cloudflare offers incoming routing and transactional sending with different plan requirements. Do not equate these with hosted employee mailboxes. See [Cloudflare Email Service](https://developers.cloudflare.com/email-service/) and [pricing](https://developers.cloudflare.com/email-service/platform/pricing/).

## Google Workspace setup

1. Confirm whether a Workspace organization already exists. Don't create a replacement or alter working mail delivery just to connect a new website.
2. For a new organization, the client chooses and funds the subscription and retains administrator recovery access. Do not start a trial as a hidden dependency of the free course.
3. Obtain the domain verification value from the actual setup flow and add the required TXT record through Cloudflare. Verify public resolution and Google's verification result.
4. Prepare the actual mailboxes/aliases and confirm the change window before switching MX records. A mailbox migration also requires moving existing mail and accounts; changing DNS alone doesn't migrate those.
5. Use Google's current account-specific instructions for MX. Google supports a newer single-record setup and legacy records; leave a working legacy setup alone. Don't mix providers' MX configurations as a supposed backup.
6. Configure SPF, enable DKIM signing, and establish a reviewed DMARC rollout using current provider guidance. Don't create multiple conflicting SPF records or enforce a restrictive policy before legitimate senders are understood.
7. Verify inbound mail from an independent address, outbound mail, and replies with authorized test recipients. Inspect authentication results. A resolving MX record alone doesn't prove usable email.
8. Record the owner, renewal/billing responsibility, mailbox/alias purpose, and support route without passwords or recovery codes.

Use [Google domain verification](https://knowledge.workspace.google.com/admin/domains/verify-your-domain-for-google-workspace) and [Google's MX instructions](https://knowledge.workspace.google.com/admin/domains/set-up-mx-records-for-google-workspace). [Cloudflare's Workspace guide](https://developers.cloudflare.com/dns/manage-dns-records/how-to/set-up-google-workspace/) explains DNS integration and the conflict between Email Routing and Workspace MX records on the same domain. Where examples differ, follow the mailbox provider's current setup for the actual account.

The [Google Admin SDK](https://developers.google.com/workspace/admin/directory/reference/rest) can handle supported user/group/domain operations after appropriate authorization. It does not eliminate signup, billing decisions, owner verification or all Admin Console tasks. Avoid broad organization-wide delegation just to add a DNS record.

## Teach through the real change

Show the person the website record and the mail-delivery records. Ask which should change when replacing the website while keeping the existing inboxes. Later revisit the idea with a different domain or email provider. The agent performs the edits, while the person learns to recognize the scope of the change.
