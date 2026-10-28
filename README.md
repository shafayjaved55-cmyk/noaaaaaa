# Nova Solution — Marketing Site

Multi-page agency site built with Next.js (App Router), Tailwind CSS v4, Framer Motion and Drizzle ORM.

## Local development

```bash
npm install
npm run dev
```

Create a `.env` file:

```
DATABASE_URL=postgresql://user:password@host:5432/dbname
```

Then push the schema:

```bash
npx drizzle-kit push
```

## Deploying to Netlify

The repo already contains everything Netlify needs:

- **`netlify.toml`** — build command (`npm run build`) and publish directory (`.next`), plus the Next.js plugin.
- **`@netlify/plugin-nextjs`** — installed as a dependency (v5.16.x, which matches Next.js 16.3.x).
- **`next.config.ts`** — `images.unoptimized: true`, so images don't depend on Netlify's image resolver.
- **Self-hosted fonts** — `next/font/local`, so builds never fail on a Google Fonts network error.
- **Lazy database client** — `src/db/index.ts` no longer throws at import time, so builds succeed even without a database.

### Steps

1. Push this repo to GitHub.
2. In Netlify: **Add new site → Import an existing project → GitHub → pick the repo**.
3. Netlify reads `netlify.toml` automatically. Confirm:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 22
4. Deploy.

### Database (optional but recommended)

The site renders fully without a database. Only two endpoints need one:

| Endpoint            | Needs DB | Purpose                    |
| ------------------- | -------- | -------------------------- |
| `POST /api/contact` | yes      | Saves project inquiries    |
| `POST /api/newsletter` | yes   | Saves subscriber emails    |
| `GET /api/health`   | no       | Returns `{ ok: true }` always |

Without `DATABASE_URL` those two forms return a friendly 503 asking visitors to email directly — the site never crashes.

To enable them, create a free Postgres database (Neon, Supabase or Railway) and add it in
**Netlify → Site configuration → Environment variables**:

```
DATABASE_URL=postgresql://user:password@host/db?sslmode=require
```

Then run `npx drizzle-kit push` once against that database to create the `leads` and `subscribers` tables.

### Common deploy errors

| Error | Cause | Fix |
| ----- | ----- | --- |
| `ENOENT ... copyfile '.next/export-detail.json'` | Netlify's adapter (5.16.1) needs Next.js 16.3.8 | Already fixed — `next` is pinned to 16.3.8 |
| `Error: DATABASE_URL is required` during build | DB client threw at import time | Already fixed — client is now lazy |
| `Failed to fetch <font> from Google Fonts` | Build machine had no network access | Already fixed — fonts are self-hosted |
| `publish directory does not contain a Next.js build` | Publish dir set to `build` or `dist` | Set it to `.next` (done in `netlify.toml`) |

## Structure

```
src/
├── app/
│   ├── page.tsx              Home
│   ├── about/                Company story, values, timeline
│   ├── services/             Index + 6 individual service pages
│   ├── work/                 Filterable case studies
│   ├── team/                 Team members with roles
│   ├── life/                 Culture, gallery, open roles
│   ├── contact/              Contact form + offices
│   └── api/                  contact, newsletter, health
├── components/               UI + animation primitives
├── data/                     Services, team, testimonials, case studies
├── db/                       Drizzle client (lazy) + schema
└── fonts/                    Self-hosted woff2 files
```
