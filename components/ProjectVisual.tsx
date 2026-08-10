import { ArrowUpRight, CloudSun, Database, Globe, User, Zap, Gamepad2 } from "lucide-react";
import type { Project } from "@/data/projects";

/**
 * Abstract, on-brand visuals for each project — used as a placeholder until
 * real screenshots are added. Kept minimal and consistent with the theme.
 */
export function ProjectVisual({ project }: { project: Project }) {
  switch (project.visual) {
    case "jarvis":
      return <JarvisVisual />;
    case "contacts":
      return <ContactsVisual />;
    case "weather":
      return <WeatherVisual />;
    case "scraper":
      return <ScraperVisual />;
    case "gambling":
      return <GamblingVisual />;

  }
}

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.10),transparent_60%),linear-gradient(to_bottom,#0a0a0f,#060608)]">
      {children}
    </div>
  );
}

function JarvisVisual() {
  return (
    <Frame>
      {/* Animated pulse rings */}
      <div className="absolute h-40 w-40 rounded-full border border-accent/30" style={{ animation: "pulse 3s ease-in-out infinite" }} />
      <div className="absolute h-28 w-28 rounded-full border border-accent/20" style={{ animation: "pulse 3s ease-in-out infinite 0.5s" }} />
      <div className="absolute h-16 w-16 rounded-full bg-accent/20 blur-2xl" />
      <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/20 ring-1 ring-accent/40 backdrop-blur">
        <Zap className="h-6 w-6 text-accent" />
      </div>
      {/* Faint code lines */}
      <div className="absolute bottom-6 left-6 right-6 space-y-1.5 opacity-40">
        <div className="h-1 w-2/3 rounded bg-white/15" />
        <div className="h-1 w-1/2 rounded bg-white/10" />
        <div className="h-1 w-3/4 rounded bg-accent/30" />
      </div>
      <style>{`@keyframes pulse { 0%,100% { transform: scale(0.9); opacity: 0.5 } 50% { transform: scale(1.15); opacity: 1 } }`}</style>
    </Frame>
  );
}

function ContactsVisual() {
  return (
    <Frame>
      <div className="relative z-10 grid w-56 grid-cols-2 gap-2.5">
        {[
          ["Ada L.", "Ada"],
          ["Grace H.", "Grace"],
          ["Alan T.", "Alan"],
          ["K. Johnson", "KJ"],
        ].map(([name, initials], i) => (
          <div
            key={name}
            className={`glass flex items-center gap-2 rounded-xl px-3 py-2.5 ${i % 2 ? "translate-y-3" : ""}`}
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent/20 text-[10px] font-semibold text-accent">
              {initials}
            </span>
            <div className="flex-1">
              <div className="h-1.5 w-full rounded bg-white/20" />
              <div className="mt-1 h-1 w-3/4 rounded bg-white/10" />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute right-8 top-8 flex h-9 w-9 items-center justify-center rounded-lg bg-accent/15 ring-1 ring-accent/30">
        <User className="h-4 w-4 text-accent" />
      </div>
    </Frame>
  );
}

function WeatherVisual() {
  return (
    <Frame>
      <div className="relative z-10 flex flex-col items-center">
        <div className="absolute h-24 w-24 rounded-full bg-amber-300/15 blur-3xl" />
        <CloudSun className="h-16 w-16 text-amber-200/80" />
        <div className="mt-3 font-display text-3xl font-bold text-foreground">24°</div>
        <div className="mt-1 text-xs text-muted">Lahore · Clear skies</div>
        <div className="mt-4 flex gap-3">
          {["Mon", "Tue", "Wed"].map((d, i) => (
            <div key={d} className="glass rounded-lg px-2.5 py-1.5 text-center">
              <div className="text-[10px] text-muted">{d}</div>
              <div className={`h-1.5 w-6 rounded ${i === 1 ? "bg-amber-300/60" : "bg-white/15"} mt-1`} />
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

function ScraperVisual() {
  return (
    <Frame>
      <div className="relative z-10 w-60 space-y-2 rounded-xl border border-white/10 bg-white/[0.03] p-3">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-[10px] text-muted">
            <Database className="h-3 w-3 text-accent" /> listings.json
          </span>
          <span className="flex gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
        </div>
        {[
          ["Apartment · $1,200", 80],
          ["House · $2,400", 60],
          ["Studio · $850", 45],
        ].map(([label, w], i) => (
          <div key={i} className="flex items-center justify-between gap-3">
            <span className="truncate text-[10px] text-foreground/80">{label}</span>
            <span className="h-1 rounded-full bg-accent/50" style={{ width: `${w}%` }} />
          </div>
        ))}
      </div>
    </Frame>
  );
}


function GamblingVisual() {
  return (
    <Frame>
      <div className="relative z-10 flex flex-col items-center gap-4">
        <div className="absolute h-24 w-24 rounded-full bg-accent/10 blur-3xl" />
        <Gamepad2 className="h-16 w-16 text-accent/80" />
        <div className="mt-3 font-display text-3xl font-bold text-foreground">$1,250</div>
        <div className="mt-1 text-xs text-muted">Virtual Balance</div>
        <div className="mt-4 flex gap-2">
          {["🍒", "7️⃣", "💎", "🍋", "⭐"].map((s, i) => (
            <div
              key={i}
              className="glass rounded-lg px-3 py-2 text-2xl"
              style={{ animation: `spin-in 0.5s ease-out ${i * 0.1}s both` }}
            >
              {s}
            </div>
          ))}
        </div>
        <style jsx>{`
          @keyframes spin-in {
            0% { transform: rotateX(90deg); opacity: 0; }
            100% { transform: rotateX(0); opacity: 1; }
          }
        `}</style>
      </div>
    </Frame>
  );
}
