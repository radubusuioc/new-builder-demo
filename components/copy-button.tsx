"use client";

import { useState } from "react";

type CopyButtonProps = {
  text: string;
  idleLabel?: string;
  className?: string;
};

export function CopyButton({
  text,
  idleLabel = "Copy prompt",
  className = "button button-secondary",
}: CopyButtonProps) {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");

  async function copyText() {
    try {
      await navigator.clipboard.writeText(text);
      setStatus("copied");
      window.setTimeout(() => setStatus("idle"), 1800);
    } catch {
      setStatus("failed");
    }
  }

  const label =
    status === "copied"
      ? "Copied!"
      : status === "failed"
        ? "Select and copy manually"
        : idleLabel;

  return (
    <button className={className} type="button" onClick={copyText}>
      <span aria-hidden="true">{status === "copied" ? "✓" : "⧉"}</span>
      {label}
    </button>
  );
}
