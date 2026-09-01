"use client";

import { useState } from "react";
import { CopyButton } from "@/components/copy-button";

const audiences = [
  "a sleep-deprived new parent",
  "a solo indie hacker",
  "a small nonprofit's only ops person",
  "a first-year CS student",
  "a burnt-out product manager",
  "a weekend woodworker",
];

const problems = [
  "losing track of half-finished ideas",
  "explaining a decision to a skeptical stakeholder",
  "remembering to follow up on anything",
  "turning a vague ask into a clear next step",
  "keeping a habit going past day three",
  "finding the one file they need in a pile of notes",
];

const constraints = [
  "using only sticky notes and a phone camera",
  "shipping in under an hour",
  "without asking anyone else for help",
  "on a device with no internet connection",
  "using nothing that costs money",
  "explaining it in one sentence to a stranger",
];

type Combo = {
  audience: string;
  problem: string;
  constraint: string;
};

function randomIndex(length: number, exclude: number | null) {
  if (length < 2) return 0;
  let index = Math.floor(Math.random() * length);
  while (index === exclude) {
    index = Math.floor(Math.random() * length);
  }
  return index;
}

function comboToSentence({ audience, problem, constraint }: Combo) {
  return `Build something for ${audience} who struggles with ${problem} — but ${constraint}.`;
}

export function PromptRemixer() {
  const [indices, setIndices] = useState<{
    audience: number;
    problem: number;
    constraint: number;
  } | null>(null);

  function remix() {
    setIndices((current) => ({
      audience: randomIndex(audiences.length, current?.audience ?? null),
      problem: randomIndex(problems.length, current?.problem ?? null),
      constraint: randomIndex(constraints.length, current?.constraint ?? null),
    }));
  }

  const combo: Combo | null = indices
    ? {
        audience: audiences[indices.audience],
        problem: problems[indices.problem],
        constraint: constraints[indices.constraint],
      }
    : null;

  const sentence = combo ? comboToSentence(combo) : null;

  return (
    <div className="remix-card">
      <div className="remix-panel">
        <p className="eyebrow">Three fixed lists, one button</p>
        <h2>Remix a build prompt</h2>
        <p>
          Pull a random audience, problem, and constraint together into one
          playful prompt you can hand to a coding agent.
        </p>
        <button
          className="button button-primary"
          type="button"
          onClick={remix}
        >
          <span aria-hidden="true">⇌</span>
          {combo ? "Remix again" : "Remix a prompt"}
        </button>
      </div>

      <div className="remix-result" aria-live="polite">
        {sentence ? (
          <>
            <p className="result-label">Your remix</p>
            <div className="prompt-preview">
              <pre>{sentence}</pre>
            </div>
            <CopyButton
              text={sentence}
              idleLabel="Copy remix"
              className="button button-dark result-copy"
            />
          </>
        ) : (
          <div className="remix-placeholder">
            <p>Your remixed prompt will land here.</p>
            <span>Press Remix to combine the three lists.</span>
          </div>
        )}
      </div>
    </div>
  );
}
