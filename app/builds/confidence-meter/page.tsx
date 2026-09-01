import type { Metadata } from "next";
import Link from "next/link";
import { ConfidenceMeter } from "@/components/confidence-meter";

export const metadata: Metadata = {
  title: "Project Confidence Meter",
  description:
    "Score your confidence in a project and get one encouraging next action.",
};

export default function ConfidenceMeterPage() {
  return (
    <main className="subpage-shell">
      <div className="subpage-heading subpage-heading-compact">
        <p className="eyebrow">Build 03 · Community contribution</p>
        <h1>Project Confidence Meter</h1>
        <p>
          Move the slider to score how confident you feel today. Every score
          gets a short read on where you are and one concrete next action.
        </p>
        <Link className="text-link" href="/builds">
          ← Back to the Build Wall
        </Link>
      </div>
      <ConfidenceMeter />
    </main>
  );
}
