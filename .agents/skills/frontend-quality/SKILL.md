---
name: frontend-quality
description: Build or review the frontend of an Agency Commons marketing site or blog for a real business brief, responsive layout, accessibility, performance, and a working visitor action. Use for page design, redesign, mobile fixes, or pre-launch visual checks in this repository.
---

Read [AGENTS.md](../../../AGENTS.md) and the actual business brief. For new design or a substantial redesign, use the bundled [frontend-design guidance](../frontend-design/SKILL.md). Preserve an established brand and the person's preferences. Do not infer a paying client, past rejection, business facts, or permission to publish from example framing in a skill.

Make the site fit its business. The fictional starter is a runnable example, not the visual identity for every client. Carry real content and the intended visitor action into design decisions. Follow [the design workflow](../../../docs/DESIGN.md). Read the site's `BRAND.md` and `DESIGN.md`. Keep exact values in `src/styles/tokens.css`, component behavior in `src/components/`, and rationale/usage in `DESIGN.md`. Use the local `/design/` preview and actual pages; do not create a second mock implementation. Use approved or clearly labeled demo imagery, preserve image/font licenses, and avoid adding remote assets or services by default.

Use the existing Astro/CSS structure unless the task calls for a change. Prefer static HTML and small progressive enhancements. Do not introduce React, Next.js, a component library, a paid asset subscription or a CMS just to restyle a brochure page.

Review the actual rendered result using available browser tools. Check a narrow phone viewport, a wider desktop viewport, long headings, the blog, and any changed interactive states. Confirm actual viewport dimensions; a cropped desktop screenshot is not a mobile test. Check horizontal overflow, readability, image sizing, keyboard navigation, visible focus, headings, accessible labels, useful alt text and reduced-motion behavior. Exercise the primary action and any form success/failure path; never claim a fake contact interaction works.

Inspect console/network failures and test the production build. If using Lighthouse or similar audits, report the URL, viewport/environment and measured limitations; a local score is not field performance or proof of accessibility. Fix observed issues, then recheck the affected behavior. Don't repeatedly run unrelated audits after a small change passes.

Use [optional skills](../../../docs/RESOURCES.md) for deeper design critique, measured performance, accessibility or SEO when they help the current task. Select a single main design pack; don't stack contradictory visual instructions. Skills guide the work, while browser tools supply evidence.

Finish with what changed for the visitor, what was actually checked, and any remaining decision. A build passing does not prove visual quality. Follow the existing publication scope in AGENTS.md.
