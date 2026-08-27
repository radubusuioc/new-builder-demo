"use client";

import { useState } from "react";
import { CopyButton } from "@/components/copy-button";
import { builderIdeas, taskPromptForIdea } from "@/lib/ideas";

export function BuilderIdeaRoulette() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedIdea =
    selectedIndex === null ? null : builderIdeas[selectedIndex];

  function spin() {
    setSelectedIndex((currentIndex) => {
      if (builderIdeas.length < 2) return 0;

      let nextIndex = Math.floor(Math.random() * builderIdeas.length);
      while (nextIndex === currentIndex) {
        nextIndex = Math.floor(Math.random() * builderIdeas.length);
      }
      return nextIndex;
    });
  }

  return (
    <section className="roulette-card" aria-labelledby="roulette-title">
      <div className="roulette-intro">
        <p className="eyebrow">Step 2 · Choose the outcome</p>
        <h2 id="roulette-title">Spin the Builder Idea Roulette</h2>
        <p>
          Get a small page idea and a ready-to-send task prompt. Paste it into
          RoryPlans chat, then decide which coding agent should own the work.
        </p>
        <button className="button button-primary roulette-button" type="button" onClick={spin}>
          <span aria-hidden="true">↻</span>
          {selectedIdea ? "Spin again" : "Give me a build idea"}
        </button>
        <p className="roulette-note">Eight ideas · no dependencies · designed for 5–10 minutes</p>
      </div>

      <div className="roulette-result" aria-live="polite" aria-atomic="true">
        {selectedIdea ? (
          <>
            <div className="result-heading">
              <div>
                <p className="result-label">Your task prompt</p>
                <h3>{selectedIdea.title}</h3>
              </div>
              <span className="route-chip">{selectedIdea.route}</span>
            </div>
            <p className="result-description">{selectedIdea.shortDescription}</p>
            <div className="prompt-preview">
              <pre>{taskPromptForIdea(selectedIdea)}</pre>
            </div>
            <CopyButton
              text={taskPromptForIdea(selectedIdea)}
              idleLabel="Copy prompt for Rory"
              className="button button-dark result-copy"
            />
            <a className="text-link" href="#connect-agent">
              Prompt copied? Continue to RoryPlans ↓
            </a>
          </>
        ) : (
          <div className="roulette-placeholder">
            <span className="placeholder-orbit" aria-hidden="true">
              <span>?</span>
            </span>
            <p>Your build idea will land here.</p>
            <span>Spin when you are ready to choose an outcome.</span>
          </div>
        )}
      </div>
    </section>
  );
}
