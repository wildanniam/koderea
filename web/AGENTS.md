<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Homepage animation guardrails

- Scope GSAP work with `useGSAP` and component refs so ScrollTriggers are reverted on unmount.
- For horizontal ScrollTrigger sections, pin a dedicated viewport wrapper with explicit
  `pinSpacing: true`; animate one inner track and derive both travel and scroll duration from
  `track.scrollWidth - viewport.clientWidth`.
- Keep vertical overflow available around pinned sections. Clip horizontal content at the inner
  track viewport instead of applying `overflow-hidden` to the outer section.
- Use `invalidateOnRefresh` and refresh after responsive layout/font changes when measurements drive
  a ScrollTrigger.
- Scroll-driven motion runs only under `prefers-reduced-motion: no-preference`. Mobile and reduced
  motion must expose the same complete content without pinning.
- For reading/reveal sections, prefer an explicit outer scroll runway with a sticky inner viewport.
  Do not pin a section directly when its parent is a flex container; pin spacing may not push later
  siblings reliably.
- Homepage icons come from the local Lucide Animated registry components in `src/components/ui`.
  Trigger icon motion from the parent card or control when the full surface is interactive, and
  disable hover-triggered icon motion for `prefers-reduced-motion`.
