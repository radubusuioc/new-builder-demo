import type { Metadata } from "next";
import Link from "next/link";
import { PromptRemixer } from "@/components/prompt-remixer";

export const metadata: Metadata = {
  title: "Prompt Remix Button",
  description: "Mix a user, a problem, and a constraint into a playful build prompt.",
};

export default function PromptRemixerPage() {
  return (
    <main className="subpage-shell">
      <div className="subpage-heading subpage-heading-compact">
        <p className="eyebrow">Build 02 · Community contribution</p>
        <h1>Prompt Remix Button</h1>
        <p>
          Three fixed lists, one button, one playful build prompt ready to
          copy.
        </p>
        <Link className="text-link" href="/builds">
          ← Back to the Build Wall
        </Link>
      </div>
      <PromptRemixer />
    </main>
  );
}
