"use client";

import { useState } from "react";

export function BuilderBadge() {
  const [name, setName] = useState("Ada Builder");
  const [role, setRole] = useState("Product storyteller");

  return (
    <div className="badge-maker">
      <form className="badge-form" onSubmit={(event) => event.preventDefault()}>
        <div>
          <label htmlFor="builder-name">Your name</label>
          <input
            id="builder-name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Ada Builder"
          />
        </div>
        <div>
          <label htmlFor="builder-role">Your builder role</label>
          <input
            id="builder-role"
            value={role}
            onChange={(event) => setRole(event.target.value)}
            placeholder="Product storyteller"
          />
        </div>
        <button
          className="button button-secondary"
          type="button"
          onClick={() => {
            setName("");
            setRole("");
          }}
        >
          Reset badge
        </button>
      </form>

      <div className="badge-preview" aria-live="polite">
        <div className="badge-topline">
          <span>THE NEW BUILDER</span>
          <span>01</span>
        </div>
        <div className="badge-symbol" aria-hidden="true">
          ✦
        </div>
        <div>
          <p className="badge-name">{name.trim() || "Your name"}</p>
          <p className="badge-role">{role.trim() || "Your builder role"}</p>
        </div>
        <div className="badge-footer">
          <span>AI BUILDER</span>
          <span>FRAME · DELEGATE · VERIFY</span>
        </div>
      </div>
    </div>
  );
}
