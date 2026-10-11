"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, GitFork, ExternalLink } from "lucide-react";
import { GitHubIcon } from "./BrandIcons";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { SITE } from "@/data/site";

type GitHubStats = { public_repos: number; total_stars: number } | null;

const LEVELS = [0.08, 0.12, 0.18, 0.32, 0.55];

/** Deterministic pseudo-random contribution grid (seeded by cell index). */
function ContributionGrid() {
  const cells = Array.from({ length: 364 }, (_, i) => {
    // deterministic pseudo-random value
    const x = Math.sin(i * 12.9898) * 43758.5453;
    const r = x - Math.floor(x);
    return { i, level: LEVELS[Math.floor(r * LEVELS.length)] };
  });

  return (
    <div className="grid w-full grid-cols-[repeat(13,minmax(0,1fr))] gap-1">
      {cells.map((c) => (
        <motion.span
          key={c.i}
          initial={{ opacity: 0, scale: 0.4 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: c.i * 0.0012, duration: 0.25 }}
          className={`aspect-square w-full rounded-[3px]`}
          style={{ backgroundColor: `rgba(124,58,237,${c.level})` }}
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
        if (!user.ok) throw new Error("user fetch failed");
        const userData = await user.json();
        const publicRepos = userData.public_repos;

        // Sum stars across all repos (paginated).
        let totalStars = 0;
        for (let page = 1; page <= 10; page++) {
          const repos = await fetch(
            `https://api.github.com/users/${SITE.github.username}/repos?per_page=100&page=${page}`
          );
          if (!repos.ok) break;
          const list = await repos.json();
          if (!Array.isArray(list) || list.length === 0) break;
          totalStars += list.reduce(
            (sum: number, r: { stargazers_count?: number }) =>
              sum + (r.stargazers_count ?? 0),
            0
          );
        }

        if (!cancelled) setStats({ public_repos: publicRepos, total_stars: totalStars });
      } catch {
        // Rate-limited or offline — leave stats null and render "—".
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
      description="Explore the repositories, experiments, and systems behind the projects featured here."
    >
      <Reveal>
        <div className="glass rounded-3xl p-6 md:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
            {/* Stats */}
            <div className="shrink-0 lg:w-64">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                  <GitHubIcon className="h-5 w-5 text-foreground" />
                </span>
                <div>
                  <div className="font-display text-sm font-semibold text-foreground">
                    @{SITE.github.username}
                  </div>
                  <div className="text-xs text-muted">Ghous Muhammad</div>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex items-center gap-2 text-2xl font-bold text-foreground">
                    <Star className="h-4 w-4 text-amber-300" />
                    {stats ? stats.public_repos : "—"}
                  </div>
                  <div className="mt-1 text-xs text-muted">Repositories</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex items-center gap-2 text-2xl font-bold text-foreground">
                    <GitFork className="h-4 w-4 text-accent" />
                    {stats ? `${stats.total_stars}` : "—"}
                  </div>
                  <div className="mt-1 text-xs text-muted">Total stars</div>
                </div>
              </div>

              <a
                href={SITE.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-foreground transition-all hover:border-accent/50 hover:bg-accent/10"
              >
                View GitHub
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            {/* Contribution grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between text-xs text-muted">
                <span>Recent activity</span>
                <div className="flex items-center gap-1.5">
                  <span>Less</span>
                  {LEVELS.map((l) => (
                    <span
                      key={l}
                      className="h-3 w-3 rounded-[3px]"
                      style={{ backgroundColor: `rgba(124,58,237,${l})` }}
                    />
                  ))}
                  <span>More</span>
                </div>
              </div>
              <div className="mt-4 overflow-hidden">
                <ContributionGrid />
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
