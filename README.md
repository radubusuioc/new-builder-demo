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
2. In RoryPlans Manage Agents, connect Claude Code or Codex through MCP, then restart the agent.
3. In RoryPlans, click New Plan and select Create Empty Canvas plan.
4. Paste the prompt into the RoryPlans chat and ask Rory to create the task in that plan.
5. Assign the task to the connected agent.
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
