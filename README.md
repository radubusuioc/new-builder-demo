# The New Builder Lab

A tiny Next.js starter for a 5–10 minute RoryPlans + Claude Code/Codex workshop.

Participants spin the Builder Idea Roulette, connect a coding agent, copy the generated task into RoryPlans, assign it to that agent, and watch it add a small page to the Build Wall.

## Run locally

Use Node 24 and pnpm.

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Participant flow

1. Spin the Builder Idea Roulette on the homepage and copy the generated task prompt.
2. Sign in to RoryPlans, or create a free account — every step below is behind the login.
3. In RoryPlans Manage Agents, connect Claude Code or Codex through MCP, then restart the agent.
4. In RoryPlans, click New Plan and select Create Empty Canvas plan.
5. Paste the prompt into the RoryPlans chat — it creates the task in the plan you have open.
6. Assign the task to the connected agent, then click the green Run button to queue it.
7. Open this repository in the coding agent and use the matching worker prompt from the homepage.
8. Review the new page and the completed RoryPlans task.

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
