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
    slug: "confidence-meter",
    title: "Project Confidence Meter",
    description:
      "A quick confidence check-in that pairs your score with one encouraging, practical next action.",
    builder: "The New Builder Lab",
    accent: "purple",
  },
];
