import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faBolt,
  faCloudSun,
  faCommentDots,
  faDatabase,
  faGamepad,
  faGem,
  faLemon,
  faMagnifyingGlass,
  faRobot,
  faShieldHalved,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import type { Project } from "@/data/projects";

/**
 * Abstract, on-brand visuals for each project — used as a placeholder until
 * real screenshots are added. Kept minimal and consistent with the clay theme.
 */
export function ProjectVisual({ project }: { project: Project }) {
  switch (project.visual) {
    case "chatbot":
      return <ChatbotVisual />;
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

/** Shared canvas: a soft clay-tinted gradient behind every visual. */
function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_top,rgba(169,164,242,0.10),transparent_62%),linear-gradient(to_bottom,#1b1d25,#15161c)]">
      {children}
    </div>
  );
}

function ChatbotVisual() {
  return (
    <Frame>
      <div className="relative z-10 w-72 space-y-3">
        <div className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.22em] text-accent">
          <FontAwesomeIcon icon={faRobot} className="h-3.5 w-3.5" />
          support intelligence
        </div>

        <div className="clay-sm ml-auto max-w-[80%] rounded-2xl rounded-br-md px-3.5 py-2.5 text-[10px] leading-relaxed text-foreground/85">
          How can I help your customers today?
        </div>

        <div className="clay-sm flex max-w-[85%] items-start gap-2.5 rounded-2xl rounded-bl-md px-3.5 py-2.5 text-[10px] leading-relaxed text-muted">
          <FontAwesomeIcon icon={faCommentDots} className="mt-0.5 h-3 w-3 shrink-0 text-accent-2" />
          Search the knowledge base, book an appointment, and hand off to a human.
        </div>

        <div className="flex gap-2 pt-1">
          {["RAG", "Tools", "CRM"].map((label) => (
            <span
              key={label}
              className="clay-inset rounded-full px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-accent"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </Frame>
  );
}

function JarvisVisual() {
  return (
    <Frame>
      <div className="animate-clay-pulse absolute h-44 w-44 rounded-full border border-accent/20" />
      <div
        className="animate-clay-pulse absolute h-32 w-32 rounded-full border border-accent/15"
        style={{ animationDelay: "0.6s" }}
      />
      <div className="absolute h-24 w-24 rounded-full bg-accent/15 blur-2xl" />

      <div className="animate-clay-float clay-icon relative z-10 flex h-16 w-16 items-center justify-center rounded-3xl">
        <FontAwesomeIcon icon={faBolt} className="h-6 w-6 text-accent" />
      </div>

      {/* Capability strip */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3">
        {[faCloudSun, faMagnifyingGlass, faShieldHalved].map((icon, index) => (
          <span
            key={index}
            className="clay-inset flex h-8 w-8 items-center justify-center rounded-xl"
          >
            <FontAwesomeIcon icon={icon} className="h-3 w-3 text-muted" />
          </span>
        ))}
      </div>
    </Frame>
  );
}

function ContactsVisual() {
  return (
    <Frame>
      <div className="relative z-10 grid w-64 grid-cols-2 gap-3">
        {[
          ["Ada L.", "AL"],
          ["Grace H.", "GH"],
          ["Alan T.", "AT"],
          ["K. Johnson", "KJ"],
        ].map(([name, initials], index) => (
          <div
            key={name}
            className={`clay-sm flex items-center gap-2.5 rounded-2xl px-3 py-2.5 ${
              index % 2 ? "translate-y-3" : ""
            }`}
          >
            <span className="clay-inset flex h-7 w-7 items-center justify-center rounded-full text-[9px] font-bold text-accent">
              {initials}
            </span>
            <div className="flex-1 space-y-1.5">
              <div className="h-1.5 w-full rounded-full bg-white/15" />
              <div className="h-1.5 w-3/5 rounded-full bg-white/10" />
            </div>
          </div>
        ))}
      </div>

      <span className="clay-icon absolute right-8 top-7 flex h-10 w-10 items-center justify-center rounded-2xl">
        <FontAwesomeIcon icon={faUser} className="h-4 w-4 text-accent" />
      </span>
    </Frame>
  );
}

function WeatherVisual() {
  return (
    <Frame>
      <div className="relative z-10 flex flex-col items-center">
        <div className="absolute h-24 w-24 rounded-full bg-accent-3/15 blur-3xl" />
        <FontAwesomeIcon
          icon={faCloudSun}
          className="animate-clay-float h-14 w-14 text-accent-3"
        />
        <div className="mt-3 font-display text-3xl font-extrabold text-foreground">24°</div>
        <div className="mt-1 text-[11px] text-muted">Lahore · Clear skies</div>

        <div className="mt-5 flex gap-3">
          {["Mon", "Tue", "Wed"].map((day, index) => (
            <div
              key={day}
              className="clay-inset rounded-2xl px-3 py-2 text-center"
            >
              <div className="text-[9px] uppercase tracking-widest text-muted">{day}</div>
              <div
                className={`mt-1.5 h-1.5 w-7 rounded-full ${
                  index === 1 ? "bg-accent-3/70" : "bg-white/15"
                }`}
              />
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
      <div className="clay-sm relative z-10 w-64 space-y-3 rounded-2xl p-4">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-[10px] font-medium text-muted">
            <FontAwesomeIcon icon={faDatabase} className="h-3 w-3 text-accent" />
            listings.xlsx
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-accent-2" />
        </div>

        {[
          ["Apartment · $1,200", 80],
          ["House · $2,400", 62],
          ["Studio · $850", 46],
        ].map(([label, width]) => (
          <div key={label as string} className="flex items-center justify-between gap-3">
            <span className="truncate text-[10px] text-foreground/80">{label}</span>
            <span
              className="h-1.5 rounded-full bg-accent/55"
              style={{ width: `${width}%` }}
            />
          </div>
        ))}
      </div>
    </Frame>
  );
}

function GamblingVisual() {
  /* Font Awesome stand-ins for the classic slot symbols — no emoji. */
  const symbols = [faLemon, faGem, faStar, faBell, faLemon];

  return (
    <Frame>
      <div className="relative z-10 flex flex-col items-center">
        <FontAwesomeIcon icon={faGamepad} className="h-10 w-10 text-accent" />
        <div className="mt-3 font-display text-2xl font-extrabold text-foreground">
          $1,250
        </div>
        <div className="mt-1 text-[11px] text-muted">Virtual balance · demo only</div>

        <div className="mt-5 flex gap-2.5">
          {symbols.map((symbol, index) => (
            <span
              key={index}
              className="clay-inset animate-clay-rise flex h-11 w-11 items-center justify-center rounded-2xl"
              style={{ animationDelay: `${index * 0.09}s` }}
            >
              <FontAwesomeIcon icon={symbol} className="h-4 w-4 text-accent-3" />
            </span>
          ))}
        </div>
      </div>
    </Frame>
  );
}
