import type { Metadata } from "next";
import Link from "next/link";
import { IdeaVotingBoard } from "@/components/idea-voting-board";

export const metadata: Metadata = {
  title: "Three-Idea Voting Board",
  description:
    "Vote for the next small community build and watch the leaderboard update locally.",
};

export default function IdeaVotingBoardPage() {
  return (
    <main className="subpage-shell">
      <div className="subpage-heading subpage-heading-compact">
        <p className="eyebrow">Build 04 · Community contribution</p>
        <h1>Three-Idea Voting Board</h1>
        <p>
          Pick the small idea you want the community to build next. Votes stay
          in this browser tab and the lead updates instantly.
        </p>
        <Link className="text-link" href="/builds">
          ← Back to the Build Wall
        </Link>
      </div>
      <IdeaVotingBoard />
    </main>
  );
}
