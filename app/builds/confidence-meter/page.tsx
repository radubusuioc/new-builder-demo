import type { Metadata } from "next";
import Link from "next/link";
import { ConfidenceMeter } from "@/components/confidence-meter";

export const metadata: Metadata = {
  title: "Project Confidence Meter",
  description: "Turn a project confidence check-in into one practical next step.",
};

export default function ConfidenceMeterPage() {
  return (
    <main className="subpage-shell">
      <div className="subpage-heading subpage-heading-compact">
        <p className="eyebrow">Build 02 · Example contribution</p>
        <h1>Project Confidence Meter</h1>
        <p>
          Check in with your project, name the feeling, and leave with one small
          move that keeps momentum going.
        </p>
        <Link className="text-link" href="/builds">
          ← Back to the Build Wall
        </Link>
      </div>
      <ConfidenceMeter />
    </main>
  );
}
