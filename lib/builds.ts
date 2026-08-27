export type Build = {
  slug: string;
  title: string;
  description: string;
  builder: string;
  accent: string;
};

export const builds: Build[] = [
  {
    slug: "builder-badge",
    title: "Personal AI Builder Badge",
    description:
      "A live badge maker that turns your name and role into a small declaration of builder intent.",
    builder: "The New Builder Lab",
    accent: "lime",
  },
  {
    slug: "prompt-remixer",
    title: "Prompt Remix Button",
    description:
      "Mix a user, a problem, and a constraint into a playful build prompt.",
    builder: "The New Builder Lab",
    accent: "lime",
  },
];
