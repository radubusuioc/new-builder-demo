"use client";

import { useState } from "react";

type ConfidenceBand = {
  label: string;
  message: string;
  action: string;
};

const bands: ConfidenceBand[] = [
  {
    label: "Finding the thread",
    message:
      "Low confidence usually means the task is still too big to picture. That is information, not a verdict.",
    action:
      "Write the smallest version of the outcome in one sentence, then delegate only that.",
  },
  {
    label: "Building momentum",
    message:
      "You can see the shape of it. The remaining doubt is about details you have not tested yet.",
    action:
      "Ship one thin slice end to end today, then re-score yourself once it runs.",
  },
  {
    label: "Ready to ship",
    message:
      "High confidence is worth spending. The risk now is polishing instead of publishing.",
    action:
      "Set a deadline for the next hour, ship what you have, and collect real feedback.",
  },
];

function bandFor(score: number): ConfidenceBand {
  if (score <= 3) return bands[0];
  if (score <= 7) return bands[1];
  return bands[2];
}

export function ConfidenceMeter() {
  const [score, setScore] = useState(5);
  const band = bandFor(score);

  return (
    <div className="confidence-meter">
      <form className="confidence-form" onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="confidence-score">
          How confident are you in this project right now?
        </label>
        <input
          className="confidence-range"
          id="confidence-score"
          type="range"
          min={1}
          max={10}
          step={1}
          value={score}
          onChange={(event) => setScore(Number(event.target.value))}
          aria-describedby="confidence-scale confidence-readout"
        />
        <p className="confidence-scale" id="confidence-scale">
          <span>1 · Not yet</span>
          <span>10 · Certain</span>
        </p>
        <button
          className="button button-secondary"
          type="button"
          onClick={() => setScore(5)}
        >
          Reset to 5
        </button>
      </form>

      <div className="confidence-readout" id="confidence-readout" aria-live="polite">
        <p className="result-label">Confidence score</p>
        <p className="confidence-number">
          {score}
          <span aria-hidden="true"> / 10</span>
          <span className="visually-hidden"> out of 10</span>
        </p>
        <div className="confidence-track" aria-hidden="true">
          <div className="confidence-fill" style={{ width: `${score * 10}%` }} />
        </div>
        <h2 className="confidence-band">{band.label}</h2>
        <p className="confidence-message">{band.message}</p>
        <div className="confidence-action">
          <p className="result-label">Suggested next action</p>
          <p>{band.action}</p>
        </div>
      </div>
    </div>
  );
}
