# The New Builder Lab

A tiny Next.js starter for a 5–10 minute RoryPlans + Claude Code/Codex workshop.

Participants spin the Builder Idea Roulette, copy the generated task into RoryPlans, assign it to a connected coding agent, and watch that agent add a small page to the Build Wall.

## Run locally

Use Node 24 and pnpm.

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Participant flow

1. Spin the Builder Idea Roulette on the homepage.
2. Copy the generated task brief.
3. Create a RoryPlans task, or create a small plan first for the extended hack.
4. In RoryPlans Manage Agents, connect Claude Code or Codex through MCP.
5. Assign the task to that agent.
6. Open this repository in the coding agent and use the matching worker prompt from the homepage.
7. Review the new page and the completed RoryPlans task.

## Add a page to the Build Wall

Each contribution requires two small changes:

1. Create `app/builds/<slug>/page.tsx`.
2. Add its metadata to the `builds` array in `lib/builds.ts`.

The starter includes `app/builds/builder-badge/page.tsx` as an example.

## Checks

```bash
pnpm lint
pnpm typecheck
pnpm build
```

Keep workshop contributions small: no database, authentication, external APIs, or new dependencies.
