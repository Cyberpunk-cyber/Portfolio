"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faCode,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { SITE } from "@/data/site";

type GitHubStats = { public_repos: number; total_stars: number } | null;

const LEVELS = [0.1, 0.16, 0.24, 0.42, 0.68];

/** Deterministic pseudo-random contribution grid (seeded by cell index). */
function ContributionGrid() {
  const cells = Array.from({ length: 364 }, (_, index) => {
    const seeded = Math.sin(index * 12.9898) * 43758.5453;
    const random = seeded - Math.floor(seeded);
    return { index, level: LEVELS[Math.floor(random * LEVELS.length)] };
  });

  return (
    <div className="grid w-full grid-cols-[repeat(13,minmax(0,1fr))] gap-1">
      {cells.map((cell) => (
        <span
          key={cell.index}
          className="aspect-square w-full rounded-[4px]"
          style={{ backgroundColor: `rgba(169, 164, 242, ${cell.level})` }}
          aria-hidden
        />
      ))}
    </div>
  );
}

export function GitHub() {
  const [stats, setStats] = useState<GitHubStats>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const user = await fetch(
          `https://api.github.com/users/${SITE.github.username}`
        );
        if (!user.ok) throw new Error("GitHub user request failed");
        const userData = await user.json();
        const publicRepos = userData.public_repos;

        // Sum stars across all repositories (paginated).
        let totalStars = 0;
        for (let page = 1; page <= 10; page++) {
          const repos = await fetch(
            `https://api.github.com/users/${SITE.github.username}/repos?per_page=100&page=${page}`
          );
          if (!repos.ok) break;
          const list = await repos.json();
          if (!Array.isArray(list) || list.length === 0) break;
          totalStars += list.reduce(
            (sum: number, repo: { stargazers_count?: number }) =>
              sum + (repo.stargazers_count ?? 0),
            0
          );
        }

        if (!cancelled) setStats({ public_repos: publicRepos, total_stars: totalStars });
      } catch {
        // Rate-limited or offline — leave stats null and render a dash.
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <Section
      id="github"
      index="05"
      eyebrow="GitHub"
      title={<>The work behind the work.</>}
      description="Every project here started as a repository — browse the commits, experiments, and systems in progress."
    >
      <Reveal>
        <div className="clay rounded-[1.75rem] p-7 md:p-10">
          <div className="flex flex-col gap-9 lg:flex-row lg:items-center">
            {/* Profile + stats */}
            <div className="shrink-0 lg:w-64">
              <div className="flex items-center gap-3">
                <span className="clay-icon flex h-12 w-12 items-center justify-center rounded-2xl">
                  <FontAwesomeIcon icon={faGithub} className="h-5 w-5 text-foreground" />
                </span>
                <div>
                  <div className="font-display text-sm font-extrabold text-foreground">
                    @{SITE.github.username}
                  </div>
                  <div className="text-xs text-muted">{SITE.name}</div>
                </div>
              </div>

              <div className="mt-7 grid grid-cols-2 gap-3">
                <div className="clay-inset rounded-2xl p-4">
                  <div className="flex items-center gap-2 font-display text-xl font-extrabold text-foreground">
                    <FontAwesomeIcon icon={faCode} className="h-3.5 w-3.5 text-accent" />
                    {stats ? stats.public_repos : "—"}
                  </div>
                  <div className="mt-1.5 text-[11px] text-muted">Public repositories</div>
                </div>
                <div className="clay-inset rounded-2xl p-4">
                  <div className="flex items-center gap-2 font-display text-xl font-extrabold text-foreground">
                    <FontAwesomeIcon icon={faStar} className="h-3.5 w-3.5 text-accent-3" />
                    {stats ? stats.total_stars : "—"}
                  </div>
                  <div className="mt-1.5 text-[11px] text-muted">Stars earned</div>
                </div>
              </div>

              <a
                href={SITE.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="clay-pill mt-7 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold"
              >
                View profile
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-3 w-3" />
              </a>
            </div>

            {/* Activity grid */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] text-muted">
                <span className="font-semibold uppercase tracking-[0.2em]">Recent activity</span>
                <div className="flex items-center gap-2">
                  <span>Less</span>
                  {LEVELS.map((level) => (
                    <span
                      key={level}
                      className="h-3 w-3 rounded-[4px]"
                      style={{ backgroundColor: `rgba(169, 164, 242, ${level})` }}
                    />
                  ))}
                  <span>More</span>
                </div>
              </div>
              <div className="clay-inset mt-4 rounded-2xl p-3">
                <ContributionGrid />
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
