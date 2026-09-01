import Link from "next/link";
import type { Build } from "@/lib/builds";

type BuildCardProps = {
  build: Build;
  index?: number;
  headingLevel?: "h2" | "h3";
};

export function BuildCard({ build, index, headingLevel = "h2" }: BuildCardProps) {
  const Heading = headingLevel;

  return (
    <article className={`build-card accent-${build.accent}`}>
      {index === undefined ? null : (
        <span className="build-index">{String(index + 1).padStart(2, "0")}</span>
      )}
      <span className="build-route">/builds/{build.slug}</span>
      <Heading>
        <Link className="build-card-link" href={`/builds/${build.slug}`}>
          {build.title}
        </Link>
      </Heading>
      <p>{build.description}</p>
      <span className="build-author">
        Built by{" "}
        <a
          className="build-author-link"
          href={`https://github.com/${build.githubUser}`}
          target="_blank"
          rel="noreferrer"
        >
          @{build.githubUser}
        </a>
      </span>
    </article>
  );
}
