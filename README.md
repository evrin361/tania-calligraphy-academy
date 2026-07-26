# Tania Calligraphy Academy — Workspace Foundation

Foundation-only workspace for the Frontend Candidate. This repository
contains project scaffolding only — no UI, components, business logic,
or backend integration.

## Stack

- Next.js (App Router, TypeScript)
- Tailwind CSS v4
- ESLint + Prettier

## Structure

```
src/
├── app/                 # Next.js App Router
├── components/
│   ├── shared/
│   ├── layout/
│   └── features/
├── theme/               # Design Tokens (to be implemented later)
├── data/                # Mock data
├── domain/              # Business models
├── services/            # External services / API layer
├── hooks/
├── utils/
├── types/
├── assets/
└── styles/
```

## Scripts

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run typecheck` — TypeScript check (no emit)
- `npm run lint` — ESLint
- `npm run format` — Prettier write
- `npm run format:check` — Prettier check
