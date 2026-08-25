import Link from "next/link";
import { BuilderIdeaRoulette } from "@/components/builder-idea-roulette";
import { CopyButton } from "@/components/copy-button";
import { builds } from "@/lib/builds";

const claudeCodePrompt = `Use the RoryPlans MCP. Load get_next_task, complete_task, and fail_task if needed. Pull one task with get_next_task using {"agentId":"claude-code"}. Execute it in this repository, verify it, then call complete_task with the taskId, changed files, and a short factual summary. If blocked, call fail_task. Handle one task only.`;

const repoUrl = "https://github.com/radubusuioc/new-builder-demo";

const cloneCommand = `git clone ${repoUrl}.git
cd new-builder-demo
pnpm install`;

const codexPrompt = `Use the RoryPlans MCP. Pull one task with get_next_task using {"agentId":"codex"}. Execute it in this repository, verify it, then call complete_task with the taskId, changed files, and a short factual summary. If blocked, call fail_task. Handle one task only.`;

const steps = [
  {
    number: "02",
    id: "create-task",
    title: "Create the work in RoryPlans",
    body: "Paste the Roulette brief into a new task. For the extended hack, create a small plan first and add the task under one goal.",
    action: "Open RoryPlans",
    href: "https://www.roryplans.ai",
  },
  {
    number: "03",
    title: "Connect your coding agent",
    body: "Open Manage Agents, choose Claude Code or Codex, and follow the MCP connection instructions shown there.",
    action: "Open Manage Agents",
    href: "https://www.roryplans.ai/manage-agents",
  },
  {
    number: "04",
    title: "Assign the task",
    body: "Return to your RoryPlans task, assign it to the connected agent, and run it so the work enters that agent’s queue.",
  },
  {
    number: "05",
    id: "pull-task",
    title: "Pull and implement",
    body: "Clone this repository, then start Claude Code or Codex inside it and paste the prompt for the agent you connected. It will pull one task, implement it here, verify the result, and report back to RoryPlans.",
    prompts: true,
  },
  {
    number: "06",
    title: "Review the closed loop",
    body: "Open the new route, check the experience, then return to RoryPlans to see the completed task, summary, and changed files.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">A 5–10 minute building lab</p>
          <h1>
            The role changed.
            <br />
            <span>You are the builder.</span>
          </h1>
          <p className="hero-lede">
            Choose a small outcome, turn it into a clear RoryPlans task, and
            delegate the implementation to Claude Code or Codex.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#roulette-title">
              Start with the Roulette
              <span aria-hidden="true">↓</span>
            </a>
            <Link className="button button-ghost" href="/builds">
              Explore the Build Wall
            </Link>
          </div>
        </div>
        <div className="hero-poster" aria-label="Frame, delegate, verify">
          <div className="poster-grid" aria-hidden="true" />
          <p>THE NEW</p>
          <strong>BUILDER</strong>
          <div className="poster-orbit" aria-hidden="true">
            <span>✦</span>
          </div>
          <div className="poster-footer">
            <span>FRAME</span>
            <span>DELEGATE</span>
            <span>VERIFY</span>
          </div>
        </div>
      </section>

      <section className="mode-strip" aria-label="Choose your demo mode">
        <div>
          <span className="mode-number">A</span>
          <p>
            <strong>Quick build</strong>
            Create one task and ship one page.
          </p>
          <span>5–10 min</span>
        </div>
        <div>
          <span className="mode-number">B</span>
          <p>
            <strong>Extended hack</strong>
            Create a small plan, then ship its first task.
          </p>
          <span>15–30 min</span>
        </div>
      </section>

      <div className="page-shell">
        <BuilderIdeaRoulette />

        <section className="workflow" id="how-it-works" aria-labelledby="workflow-title">
          <div className="section-heading">
            <p className="eyebrow">From idea to working page</p>
            <h2 id="workflow-title">Now run the builder loop</h2>
            <p>
              The Roulette gave you the “what.” RoryPlans holds the intent and
              handoff. Your coding agent handles the “how.”
            </p>
          </div>
          <ol className="steps-list" start={2}>
            {steps.map((step) => (
              <li className="step-card" id={step.id} key={step.number}>
                <span className="step-number" aria-hidden="true">
                  {step.number}
                </span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                  {step.href ? (
                    <a href={step.href} target="_blank" rel="noreferrer">
                      {step.action} ↗
                    </a>
                  ) : null}
                  {step.prompts ? (
                    <>
                      <div className="step-setup">
                        <p className="setup-label">Clone the repository</p>
                        <pre>{cloneCommand}</pre>
                        <CopyButton text={cloneCommand} idleLabel="Copy clone commands" />
                        <p className="setup-note">
                          Then run <code>claude</code> or <code>codex</code> in the{" "}
                          <code>new-builder-demo</code> folder and paste the matching
                          prompt below. Requires Node 24 and pnpm.
                        </p>
                        <a href={repoUrl} target="_blank" rel="noreferrer">
                          View the repository on GitHub ↗
                        </a>
                      </div>
                      <div className="prompt-grid">
                        <article className="agent-card">
                          <div className="agent-card-heading">
                            <span className="agent-monogram claude-monogram">C</span>
                            <div>
                              <p>Anthropic</p>
                              <h4>Claude Code</h4>
                            </div>
                          </div>
                          <pre>{claudeCodePrompt}</pre>
                          <CopyButton text={claudeCodePrompt} idleLabel="Copy Claude Code prompt" />
                        </article>
                        <article className="agent-card">
                          <div className="agent-card-heading">
                            <span className="agent-monogram codex-monogram">O</span>
                            <div>
                              <p>OpenAI</p>
                              <h4>Codex</h4>
                            </div>
                          </div>
                          <pre>{codexPrompt}</pre>
                          <CopyButton text={codexPrompt} idleLabel="Copy Codex prompt" />
                        </article>
                      </div>
                    </>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="build-wall-preview" aria-labelledby="build-wall-title">
          <div className="section-heading inline-heading">
            <div>
              <p className="eyebrow">What builders shipped</p>
              <h2 id="build-wall-title">The Build Wall</h2>
            </div>
            <Link className="text-link" href="/builds">
              See every build →
            </Link>
          </div>
          <div className="build-grid">
            {builds.map((build) => (
              <Link className={`build-card accent-${build.accent}`} href={`/builds/${build.slug}`} key={build.slug}>
                <span className="build-route">/builds/{build.slug}</span>
                <h3>{build.title}</h3>
                <p>{build.description}</p>
                <span className="build-author">Built by {build.builder}</span>
              </Link>
            ))}
            <div className="build-card build-card-empty">
              <span className="empty-plus" aria-hidden="true">+</span>
              <h3>Your page goes here</h3>
              <p>Spin the Roulette, create the task, and add the next contribution.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
