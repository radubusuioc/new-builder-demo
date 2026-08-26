export type BuilderIdea = {
  title: string;
  shortDescription: string;
  route: string;
  requirements: string[];
};

export const builderIdeas: BuilderIdea[] = [
  {
    title: "Personal AI Builder Badge",
    shortDescription:
      "Turn a name and builder role into a polished, shareable event badge.",
    route: "/builds/builder-badge",
    requirements: [
      "Add inputs for a name and a builder role.",
      "Render a live badge preview with the name, role, and the label “AI Builder”.",
      "Include a reset button and a strong keyboard focus state.",
    ],
  },
  {
    title: "Build / Ship Status Toggle",
    shortDescription:
      "Create a tiny project card that moves visibly from idea to shipped.",
    route: "/builds/build-ship-toggle",
    requirements: [
      "Show a project card with two states: Building and Shipped.",
      "Add a button that toggles the state, label, color, and supporting copy.",
      "Make the current state understandable without relying on color alone.",
    ],
  },
  {
    title: "Three-Idea Voting Board",
    shortDescription:
      "Let visitors vote locally for the next small thing the community should build.",
    route: "/builds/idea-voting-board",
    requirements: [
      "Display three fixed project ideas in cards.",
      "Give each card a vote button and a local in-memory vote count.",
      "Highlight the current leader and handle tied scores clearly.",
    ],
  },
  {
    title: "Project Confidence Meter",
    shortDescription:
      "Turn a confidence slider into encouraging, actionable builder feedback.",
    route: "/builds/confidence-meter",
    requirements: [
      "Add an accessible range input from 1 to 10.",
      "Update a confidence score and short message as the value changes.",
      "Offer one suggested next action for low, medium, and high confidence.",
    ],
  },
  {
    title: "Prompt Remix Button",
    shortDescription:
      "Mix a user, a problem, and a constraint into a playful build prompt.",
    route: "/builds/prompt-remixer",
    requirements: [
      "Start with three small fixed lists: audiences, problems, and constraints.",
      "Add a Remix button that combines one item from each list.",
      "Display the result as a complete sentence with a copy button.",
    ],
  },
  {
    title: "Mini Launch Checklist",
    shortDescription:
      "Make shipping feel achievable with a focused four-item checklist.",
    route: "/builds/launch-checklist",
    requirements: [
      "Show four fixed launch tasks with accessible checkboxes.",
      "Display progress as both a count and a visual progress bar.",
      "Celebrate completion with a short message without using confetti libraries.",
    ],
  },
  {
    title: "Three-Mood Theme Switcher",
    shortDescription:
      "Let visitors restyle one demo card as Focused, Playful, or Bold.",
    route: "/builds/theme-switcher",
    requirements: [
      "Create one content card and three named theme buttons.",
      "Change the card’s colors, type treatment, and supporting message per theme.",
      "Mark the selected theme for screen readers as well as visually.",
    ],
  },
  {
    title: "What Should I Build? Generator",
    shortDescription:
      "Generate a surprising micro-project from a few carefully chosen ingredients.",
    route: "/builds/what-to-build",
    requirements: [
      "Create at least six fixed micro-project suggestions.",
      "Add a button that reveals a new suggestion without repeating the current one.",
      "Show an estimated effort label and one-sentence done criterion.",
    ],
  },
];

export function taskPromptForIdea(idea: BuilderIdea): string {
  const requirements = idea.requirements
    .map((requirement) => `- ${requirement}`)
    .join("\n");

  return `Create a task with the following details:\n\nTitle: Add ${idea.title}\n\nDescription:\nGoal:\n${idea.shortDescription}\n\nImplementation:\nCreate the page at ${idea.route}.\n${requirements}\n- Match the visual language already used in this starter.\n- Add this contribution to lib/builds.ts so it appears on the Build Wall.\n\nDone when:\n- The page works on mobile and desktop.\n- Every control works with a keyboard and has a clear label.\n- No new dependencies, backend, database, or external API are added.\n- Unrelated pages and instructions remain unchanged.\n- pnpm lint and pnpm typecheck pass.\n\nShip it:\n- Commit the work on its own branch with a message describing what changed and why.\n- Push that branch to the remote.\n- Open a pull request against the default branch, with a title that summarises the change and a body covering what was built and how it was verified.\n\nWhen complete, report the route, the changed files, and the pull request URL back to RoryPlans.`;
}
