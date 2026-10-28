# Client website

This website is managed through Agency Commons. Describe your changes to the agent; it follows [AGENTS.md](AGENTS.md).

Site content: src/site.config.ts. Blog posts: src/content/blog/. Hosting: wrangler.jsonc.

The agent runs npm ci, npm run dev, npm run check, npm test, npm run build and npm run ready in this folder. Deployment uses npm run deploy after the intended account and reviewed result are authorized.

This is a separate project with its own history and deployment. Agency-wide briefs, commercial details, approvals and work queues remain in the private agency workspace. Guides and skills copied into this project support independent maintenance and handoff.

Design values live in `src/styles/tokens.css`; shared components live in `src/components/`. Use `BRAND.md` and `DESIGN.md` for approved context and decisions. Open `/design/` during local development to review the actual components; it is excluded from production builds.
