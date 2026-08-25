import type { Metadata } from "next";
import Link from "next/link";
import { BuilderBadge } from "@/components/builder-badge";

export const metadata: Metadata = {
  title: "Personal AI Builder Badge",
  description: "Create your declaration of intent as a new AI builder.",
};

export default function BuilderBadgePage() {
  return (
    <main className="subpage-shell">
      <div className="subpage-heading subpage-heading-compact">
        <p className="eyebrow">Build 01 · Example contribution</p>
        <h1>Personal AI Builder Badge</h1>
        <p>
          A tiny interactive page created from one outcome, a few acceptance
          criteria, and a clear route.
        </p>
        <Link className="text-link" href="/builds">
          ← Back to the Build Wall
        </Link>
      </div>
      <BuilderBadge />
    </main>
  );
}
