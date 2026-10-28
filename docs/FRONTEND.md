# Frontend skills and components

Make a page that fits the business and helps its customer act. Start with [research, copy and structure](DISCOVERY.md), then choose the visual direction and components. A library supplies implementation pieces; it does not choose the offer or prove that a page converts.

## Skills available immediately

- [frontend-design](../.agents/skills/frontend-design/SKILL.md): bundled from Anthropic's open-source skill, with its Apache-2.0 license and [pinned source revision](../THIRD_PARTY_NOTICES.md). It is text guidance usable by the agent, not a requirement for a Claude subscription.
- [frontend-quality](../.agents/skills/frontend-quality/SKILL.md): this repo's workflow for applying a business brief, responsive checks, accessibility, performance evidence and working visitor actions.
- [build-client-site](../.agents/skills/build-client-site/SKILL.md): the setup-to-launch and agency workflow.

For a deeper design workflow, evaluate [Impeccable](https://github.com/pbakaus/impeccable). Its current package provides a shared design skill, critique/audit/polish commands and optional browser tooling. Select it as the main design pack when useful rather than layering overlapping instructions. Review its installer, hooks, runtime and OS support before adding it.

For measured technical reviews, [Web Quality Skills](https://github.com/addyosmani/web-quality-skills) provides `web-quality-audit`, `performance`, `core-web-vitals`, `accessibility`, `seo`, and `best-practices`. It is an independent project, not an official Google certification. Browser tooling and measured evidence remain separate requirements.

## Component choices

Research checked October 28, 2026. These recommendations are our judgment for this starter; recheck compatibility and licensing when installing.

| Option | Good fit | Tradeoff / decision |
| --- | --- | --- |
| Existing Astro + CSS + native HTML | First brochure site, navigation, links, service sections, FAQ, blog | Already works. Reuse local components as patterns emerge; no extra UI runtime needed for the initial page |
| [Starwind UI](https://github.com/starwind-ui/starwind-ui) | Preferred optional component source for the Astro path: fields, dialogs, menus, tabs and other richer controls | MIT core, editable component source, Tailwind and a shared interaction runtime. Add only needed components; Pro assets are separate |
| [daisyUI](https://github.com/saadeghi/daisyui) | Quick consistent controls and themes with Tailwind across frameworks | An alternative styling system. Choose it deliberately rather than mixing it with Starwind. Verify each interactive component's semantics and behavior |
| [shadcn/ui](https://github.com/shadcn-ui/ui) | A project already using React, or a feature that justifies React components | MIT source components and a large ecosystem. Its [Astro setup](https://ui.shadcn.com/docs/installation/astro) includes React and Tailwind; interactivity needs correct hydration. Optional, not a reason to convert a static site to Next.js |
| [AstroWind](https://github.com/arthelokyo/astrowind) | A larger marketing-site template/reference | MIT template, not a small component dependency. Adapt selected patterns and notices or choose it as a separate starting point; don't merge an entire starter blindly |

The default is the existing site; **Starwind is the first component-library option to evaluate when a page needs more controls.** The initial repo does not preinstall any of these libraries. This keeps the first launch small while preserving a clear expansion path. A visual form component does not implement storage, spam protection or delivery; follow [FORMS.md](FORMS.md).

## Let the agent add components

The person can say: “Add a useful mobile menu and a quote-request form that matches this business.” The agent identifies the behavior, chooses native HTML or a relevant library, and handles installation.

For Starwind, read [installation](https://starwind.dev/docs/getting-started/installation/), [skills](https://github.com/starwind-ui/skills) and [MCP](https://starwind.dev/docs/getting-started/mcp/). The CLI initializes the project and adds chosen components. Use its Astro path for this repo; preserve existing styles and configuration. Pin the chosen version and commit the resulting lockfile and component source. Do not select paid Pro blocks on the $0 path.

For alternatives, daisyUI has [Astro installation](https://daisyui.com/docs/install/astro/) and [agent skills](https://daisyui.com/skills/); shadcn provides [skills](https://ui.shadcn.com/docs/skills) and [registry MCP](https://ui.shadcn.com/docs/mcp). These are optional routes for the selected library, not a requirement to connect every MCP. Check whether any hosted tooling or premium content has separate access or costs.

Before and after adding a library, inspect the diff, CSS reset/global-style effects, installed packages, generated scripts, browser console, keyboard/focus behavior and narrow-screen layout. Test the specific control, including loading, empty and failure states where relevant. A component advertised as accessible can still be used incorrectly.

Use legitimate visual assets and fonts. Prefer optimized local files with suitable licenses; don't borrow a competitor's photographs, reviews, logo or text. Keep the chosen design consistent across the homepage, service pages and blog. Add motion when it helps explain an interaction, and respect reduced-motion preferences.
