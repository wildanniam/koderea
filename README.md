# Koderea Company Profile

Koderea's public company profile and Academy discovery experience. The current release is a
rapid-prototype landing page focused on AI assurance, consulting, practitioner-led education, and
lead generation.

## Project structure

- `web/` - Next.js application.
- `openspec/` - product requirements, interaction decisions, and delivery constraints.

Historical PDFs and rejected visual explorations are intentionally excluded from the production
repository.

## Local development

```bash
cd web
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Verification

```bash
cd web
npm run lint
npx tsc --noEmit --pretty false
npm run build
```

## Deploying to Vercel

Import this repository into Vercel and set **Root Directory** to `web`. Vercel will detect Next.js
and use the committed lockfile. The current prototype does not require environment variables.

The Academy waitlist is intentionally a demo-only interaction. It does not send or persist email
addresses; visitors are directed to `info@koderea.id` for current enquiries.
