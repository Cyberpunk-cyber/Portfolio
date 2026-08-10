export const SITE = {
  name: "Ghous Muhammad",
  shortName: "GHOUS",
  title: "Developer & AI Builder",
  tagline: "I build web apps and mess around with AI.",
  description:
    "CS student at UCP. I like building web apps, automating things with AI, and figuring out how to make software that actually works.",
  location: "Pakistan",
  availability: "Open to internships & freelance",
  email: "muhammadghous044@gmail.com",
  socials: {
    github: "https://github.com/Cyberpunk-Cyber",
    linkedin: "https://www.linkedin.com/in/ghous-muhammad00",
  },
  stats: {
    yearsLearning: "1+",
    projects: "6+",
    technologies: "15+",
  },
  about: [
    "I'm a CS student at UCP who got into development because I wanted to build the things I saw on the internet.",
    "Most of what I know came from actually building stuff — starting with HTML and CSS, and somehow ending up writing Python backends and wiring up LLMs.",
    "I don't have a fancy title yet. I just like making things work.",
  ],
  journey: [
    {
      year: "2025",
      title: "Started BS Computer Science",
      description: "University of Central Punjab. Finally learning why my code actually breaks.",
    },
    {
      year: "2025",
      title: "Picked up Web Dev",
      description: "HTML, CSS, JS, then React and Next.js. Built a few things that actually worked, which felt pretty good.",
    },
    {
      year: "2026",
      title: "Started messing with AI",
      description: "Turns out AI isn't magic — it's mostly API calls and hoping the prompt is good enough.",
    },
    {
      year: "2026",
      title: "Full-stack stuff",
      description: "Databases, Docker, deployment — the boring parts that make everything else actually run.",
    },
    {
      year: "2026",
      title: "Building AURA OS (MY-JARVIS)",
      description: "My biggest project so far. An AI agent with a working tool-calling loop against real Postgres data.",
    },
    {
      year: "2026",
      title: "Streamlit experiments",
      description: "Built a slot machine simulator in Streamlit — fun way to learn interactive Python web apps.",
    },
  ],
  education: {
    university: "University of Central Punjab",
    degree: "BS Computer Science",
    period: "2025 — Present",
    areas: [
      "Programming",
      "Data Structures",
      "Digital Logic Design",
      "Web Development",
      "Database Systems",
    ],
  },
  github: {
    username: "Cyberpunk-Cyber",
  },
} as const;

/**
 * Canonical site URL — override with `NEXT_PUBLIC_SITE_URL` (e.g. on Vercel
 * set it to your production domain). Used by metadataBase, sitemap, robots.
 */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ghous-muhammad.dev";

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
] as const;
