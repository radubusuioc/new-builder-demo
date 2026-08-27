"use client";

import { useState } from "react";

const feedback = {
  low: {
    message: "You do not need the whole map yet—just a reliable next foothold.",
    action: "Write down the smallest question you can answer in the next 15 minutes.",
    label: "Start small",
  },
  medium: {
    message: "You have enough signal to learn by making the next piece real.",
    action: "Pick one assumption and test it with a rough, shareable version today.",
    label: "Create a test",
  },
  high: {
    message: "Your momentum is real. Turn that clarity into something other people can see.",
    action: "Share your current build with one person and ask for one specific reaction.",
    label: "Invite feedback",
  },
} as const;

function getFeedback(score: number) {
  if (score <= 3) return feedback.low;
  if (score <= 7) return feedback.medium;
  return feedback.high;
}

export function ConfidenceMeter() {
  const [score, setScore] = useState(5);
  const current = getFeedback(score);

  return (
    <section className="confidence-meter" aria-labelledby="confidence-title">
      <div className="confidence-control">
        <p className="eyebrow">Project check-in</p>
        <h2 id="confidence-title">How confident do you feel right now?</h2>
        <p className="confidence-intro">
          There is no wrong number. Use this quick read to choose a useful next move.
        </p>

        <div className="confidence-range-wrap">
          <label htmlFor="confidence-score">Confidence score: {score} out of 10</label>
          <input
            id="confidence-score"
            aria-describedby="confidence-range-help"
            max="10"
            min="1"
            onChange={(event) => setScore(Number(event.target.value))}
            step="1"
            type="range"
            value={score}
          />
          <div className="confidence-scale" aria-hidden="true">
            <span>1 · uncertain</span>
            <span>10 · ready</span>
          </div>
          <p className="sr-only" id="confidence-range-help">
            Use the left and right arrow keys to change your confidence score.
          </p>
        </div>
      </div>

      <div className="confidence-result" aria-live="polite">
        <div className="confidence-score" aria-hidden="true">
          <span>{String(score).padStart(2, "0")}</span>
          <small>/10</small>
        </div>
        <p className="result-label">{current.label}</p>
        <p className="confidence-message">{current.message}</p>
        <div className="confidence-action">
          <span className="confidence-action-mark" aria-hidden="true">→</span>
          <div>
            <p className="result-label">Suggested next action</p>
            <p>{current.action}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
