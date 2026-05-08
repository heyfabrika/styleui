# Contributing

Thanks for helping improve StyleUI. Please read this guide before your first pull request. Check existing issues and pull requests to avoid duplicate work.

## Prerequisites

- [Bun](https://bun.sh/) (used in this repo; Node-compatible tooling works for most commands)
- [PostgreSQL](https://www.postgresql.org/) (required for Prisma migrations against a local database)
- Git

## Quick start

### 1. Fork and clone

Fork the repository, then clone your fork:

```bash
git clone https://github.com/<your-username>/styleui.git
cd styleui
```

### 2. Branch

```bash
git checkout -b your-branch-name
```

### 3. Install and configure

```bash
bun install
cp .env.example .env
```

Set `DATABASE_URL` in `.env` to a PostgreSQL connection string for a local database.

Apply migrations:

```bash
bunx prisma migrate dev
```

The steps above exist only so your local app can run against a database. **Do not open pull requests that change any of the following:** the Prisma schema or migrations (`prisma/`), `prisma.config.ts`, the app’s Prisma client wiring under `lib/`, or anything related to the waitlist (API routes, UI, or data models). That stack is **maintainer-owned** and not part of the public contribution surface; **PRs touching it will be rejected.**

### 4. Run the app

```bash
bun dev
```

Visit [http://localhost:3000](http://localhost:3000).

### 5. Lint

```bash
bun run lint
```

## Repository layout

| Path | Purpose |
|------|---------|
| `app/` | Next.js App Router: marketing, template previews, docs shell |
| `components/` | UI source that consumers receive via the registry |
| `content/docs/` | Fumadocs MDX for guides (`/docs` on the site) |
| `content/components/` | MDX for component pages (`/components`) |
| `registry.json` | shadcn registry manifest (names, files, dependencies) |
| `public/r/` | Built registry JSON artifacts (`shadcn build` output) |
| `prisma/` | Database schema and migrations (not open for contribution; see above) |

## Adding or changing registry items

1. **Implement** under `components/` (and related `lib/`, `hooks/` if needed). Match existing patterns: TypeScript, `@/` path aliases, accessibility and responsive behavior consistent with neighboring code.

2. **Update** [registry.json](registry.json): `name`, `title`, `type`, `description`, `files`, `dependencies`, and `registryDependencies` as appropriate. Follow the [shadcn registry schema](https://ui.shadcn.com/docs/registry/registry-item-json).

3. **Build** registry output:

   ```bash
   bun run registry:build
   ```

   Commit updated files under `public/r/` when they change (e.g. `public/r/<item>.json`, `public/r/registry.json`).

4. **Document** changes in `content/docs/` or `content/components/` so the live site matches what users install.

## Pull requests

- **Do not** include changes to Prisma, database migrations, or waitlist-related code (see the note under **Install and configure** in Quick start); those PRs will be rejected.
- Prefer **small, focused PRs** with a clear description of behavior and motivation.
- For **visual changes**, include before/after screenshots or a short note on what to verify.
- Ensure **`bun run lint`** passes.

## Commit messages

Use [Conventional Commits](https://www.conventionalcommits.org/) when possible:

| Prefix | Use for |
|--------|---------|
| `feat` | New user-facing behavior or registry items |
| `fix` | Bug fixes |
| `docs` | Documentation and copy only |
| `refactor` | Internal changes without behavior change |
| `chore` | Tooling, config, formatting |
| `build` | Dependencies or build pipeline |
| `ci` | CI configuration |

Examples: `feat(registry): add axis block`, `docs: clarify install URL`.

## Ideas and new components

Open a **GitHub issue** with a short proposal (problem, suggested API or scope, screenshots if relevant). Maintainers can triage and align with the roadmap before large implementations.
