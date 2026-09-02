export type Build = {
  slug: string;
  title: string;
  description: string;
  githubUser: string;
  accent: string;
};

export const builds: Build[] = [
  {
    slug: "builder-badge",
    title: "Personal AI Builder Badge",
    description:
      "A live badge maker that turns your name and role into a small declaration of builder intent.",
    githubUser: "radubusuioc",
    accent: "lime",
  },
  {
    slug: "prompt-remixer",
    title: "Prompt Remix Button",
    description:
      "Mix a user, a problem, and a constraint into a playful build prompt.",
    githubUser: "pithy-name",
    accent: "lime",
  },
  {
    slug: "confidence-meter",
    title: "Project Confidence Meter",
    description:
      "A slider that turns a gut-feel confidence score into an encouraging read and one concrete next action.",
    githubUser: "radubusuioc",
    accent: "purple",
  },
  {
    slug: "idea-voting-board",
    title: "Three-Idea Voting Board",
    description:
      "A local live tally for choosing which small community idea should get built next.",
    githubUser: "radubusuioc",
    accent: "lime",
  },
];
