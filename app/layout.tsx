import type { Metadata, Viewport } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "The New Builder Lab",
    template: "%s · The New Builder Lab",
  },
  description:
    "A tiny RoryPlans, Claude Code, and Codex building exercise for turning a clear task into a working page.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f5ef",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <Link className="wordmark" href="/" aria-label="The New Builder Lab home">
            <span className="wordmark-mark" aria-hidden="true">
              NB
            </span>
            <span>The New Builder Lab</span>
          </Link>
          <nav aria-label="Primary navigation">
            <Link href="/#how-it-works">How it works</Link>
            <Link href="/builds">Build Wall</Link>
          </nav>
        </header>
        {children}
        <footer className="site-footer">
          <p>Frame the outcome. Delegate the work. Verify the result.</p>
          <a href="https://www.roryplans.ai" target="_blank" rel="noreferrer">
            Powered by RoryPlans ↗
          </a>
        </footer>
      </body>
    </html>
  );
}
