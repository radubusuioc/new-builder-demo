import type { Metadata } from "next";
import Link from "next/link";
import { builds } from "@/lib/builds";

export const metadata: Metadata = {
  title: "Build Wall",
  description: "Small pages shipped by participants in The New Builder Lab.",
};

export default function BuildsPage() {
  return (
    <main className="subpage-shell">
      <div className="subpage-heading">
        <p className="eyebrow">Community output</p>
        <h1>The Build Wall</h1>
        <p>
          Every card started as a small, well-framed RoryPlans task and ended as
          a working page implemented by a connected coding agent.
        </p>
        <Link className="text-link" href="/">
          ← Back to the lab
        </Link>
      </div>

      <div className="build-grid build-grid-full">
        {builds.map((build, index) => (
          <Link className={`build-card accent-${build.accent}`} href={`/builds/${build.slug}`} key={build.slug}>
            <span className="build-index">{String(index + 1).padStart(2, "0")}</span>
            <span className="build-route">/builds/{build.slug}</span>
            <h2>{build.title}</h2>
            <p>{build.description}</p>
            <span className="build-author">Built by {build.builder}</span>
          </Link>
        ))}
        <div className="build-card build-card-empty">
          <span className="empty-plus" aria-hidden="true">+</span>
          <h2>Add the next build</h2>
          <p>
            Create a page under <code>app/builds/&lt;slug&gt;/page.tsx</code>, then
            add one entry to <code>lib/builds.ts</code>.
          </p>
        </div>
      </div>
    </main>
  );
}
