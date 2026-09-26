# Ramilo Jr. Quito — Portfolio

Built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Edit content

Almost everything lives in `app/page.tsx` as plain arrays at the top of the
file — `projects`, `skillGroups`, `experience`. Edit those arrays to update
copy, add a new project, or reorder sections. No other files need to change
for content edits.

- `components/SideNav.tsx` — the left navigation (edit the `routes` array to
  add/remove sections)
- `components/ProjectCard.tsx` — the project card layout
- `app/globals.css` — color tokens (`--paper`, `--ink`, `--muted`, `--line`,
  `--accent`)
- `tailwind.config.ts` — same tokens, exposed as Tailwind color classes

## Deploy to Vercel (free)

1. Push this project to a new GitHub repo.
2. Go to https://vercel.com, sign in with GitHub, click **New Project**.
3. Import the repo. Vercel auto-detects Next.js — no config needed.
4. Click **Deploy**. You'll get a `your-project.vercel.app` URL in about a
   minute.
5. (Optional) Add a custom domain under Project Settings → Domains.

Every push to your main branch will auto-redeploy.

## Adding a project screenshot later

Drop an image into `public/` (e.g. `public/promo-platform.png`) and reference
it with Next's `<Image>` component in `ProjectCard.tsx` — happy to wire that
in once you have images ready.
