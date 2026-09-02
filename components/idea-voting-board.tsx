"use client";

import { useState } from "react";

const ideas = [
  {
    id: "decision-deck",
    number: "01",
    title: "Decision Deck",
    description:
      "Turn a thorny choice into three crisp cards: the bet, the risk, and the next move.",
    accent: "lime",
  },
  {
    id: "tiny-win-radio",
    number: "02",
    title: "Tiny Win Radio",
    description:
      "Collect one-line wins from the community and play them back as a momentum-boosting feed.",
    accent: "purple",
  },
  {
    id: "focus-weather",
    number: "03",
    title: "Focus Weather",
    description:
      "Choose your energy level and get a playful forecast for the kind of task to tackle next.",
    accent: "orange",
  },
] as const;

type IdeaId = (typeof ideas)[number]["id"];
type VoteCounts = Record<IdeaId, number>;

const initialVotes: VoteCounts = {
  "decision-deck": 0,
  "tiny-win-radio": 0,
  "focus-weather": 0,
};

function voteLabel(count: number) {
  return `${count} ${count === 1 ? "vote" : "votes"}`;
}

export function IdeaVotingBoard() {
  const [votes, setVotes] = useState<VoteCounts>(initialVotes);
  const totalVotes = Object.values(votes).reduce((total, count) => total + count, 0);
  const highScore = Math.max(...Object.values(votes));
  const leaders = totalVotes
    ? ideas.filter((idea) => votes[idea.id] === highScore)
    : [];
  const leaderIds = new Set(leaders.map((idea) => idea.id));
  const isTie = leaders.length > 1;

  const boardStatus =
    totalVotes === 0
      ? "No votes yet. Every idea starts even."
      : isTie
        ? `${leaders.map((idea) => idea.title).join(" and ")} are tied at ${voteLabel(highScore)} each.`
        : `${leaders[0].title} leads with ${voteLabel(highScore)}.`;

  function addVote(id: IdeaId) {
    setVotes((current) => ({ ...current, [id]: current[id] + 1 }));
  }

  return (
    <section className="idea-board" aria-labelledby="idea-board-title">
      <div className="idea-board-summary">
        <div>
          <p className="result-label">Live local tally</p>
          <h2 id="idea-board-title">What should we build next?</h2>
        </div>
        <div className="idea-board-status" aria-live="polite" aria-atomic="true">
          <span>{voteLabel(totalVotes)} cast</span>
          <p>{boardStatus}</p>
        </div>
      </div>

      <div className="idea-vote-grid">
        {ideas.map((idea) => {
          const isLeader = leaderIds.has(idea.id);
          const standing =
            totalVotes === 0
              ? "Waiting for the first vote"
              : isLeader
                ? isTie
                  ? "Tied for the lead"
                  : "Current leader"
                : "In the running";
          const countId = `${idea.id}-votes`;

          return (
            <article
              className={`idea-vote-card idea-accent-${idea.accent}${isLeader ? " idea-vote-card-leading" : ""}`}
              key={idea.id}
            >
              <div className="idea-vote-card-topline">
                <span className="idea-number" aria-hidden="true">
                  {idea.number}
                </span>
                <span className="idea-standing">{standing}</span>
              </div>
              <h3>{idea.title}</h3>
              <p className="idea-description">{idea.description}</p>
              <div className="idea-vote-actions">
                <p className="idea-vote-count" id={countId}>
                  <strong>{votes[idea.id]}</strong>
                  <span>{votes[idea.id] === 1 ? "vote" : "votes"}</span>
                </p>
                <button
                  className="button button-dark"
                  type="button"
                  onClick={() => addVote(idea.id)}
                  aria-label={`Vote for ${idea.title}`}
                  aria-describedby={countId}
                >
                  Vote for this idea
                  <span aria-hidden="true">+1</span>
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
