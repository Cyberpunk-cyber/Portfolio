export type Project = {
  name: string;
  tagline: string;
  description: string;
  problem: string;
  features: string[];
  stack: string[];
  github: string;
  demo?: string;
  featured?: boolean;
  /** Used to render an abstract visual placeholder until a real screenshot exists */
  visual: "jarvis" | "contacts" | "weather" | "scraper" | "gambling" | "techsspire";
};

export const PROJECTS: Project[] = [
  {
    name: "AURA OS",
    tagline: "AI agent that does more than chat",
    description:
      "An AI agent system with a working tool-calling loop that queries real Postgres data. Built with FastAPI backend and planned Next.js frontend. The kind of project you keep building late at night.",
    problem:
      "Every AI tool is just a chat box. I wanted to see how far I could push an agent - having it act, query real data, and chain multiple tool calls together.",
    features: [
      "Tool-calling loop with Google Gemini LLM",
      "Multi-tenant Postgres data access",
      "Dockerized backend with FastAPI",
      "Planned Next.js frontend with glass UI",
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "Docker", "Google Gemini API", "Next.js"],
    github: "https://github.com/Cyberpunk-Cyber/MY-JARVIS",
    demo: "https://aura-os-gold.vercel.app",
    featured: true,
    visual: "jarvis",
  },
  {
    name: "Contact Manager",
    tagline: "A full-stack CRUD application",
    description:
      "A clean, searchable contact manager with full CRUD operations, built to learn the modern Next.js + database workflow end to end.",
    problem:
      "Wanted to internalize the full-stack loop — server components, API routes, and a real database — through a small, complete product.",
    features: [
      "Create, edit & delete contacts",
      "Instant search & filtering",
      "Responsive Tailwind UI",
    ],
    stack: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Cyberpunk-Cyber/Contact_Manager",
    visual: "contacts",
  },
  {
    name: "Weather Application",
    tagline: "Live weather, real API integration",
    description:
      "A weather app that pulls live conditions from a third-party API and renders them in a clean, focused interface.",
    problem:
      "The best way to learn async data fetching is with real, changing data — weather gives you a never-ending stream of it.",
    features: [
      "Live weather by location",
      "Graceful loading & error states",
      "Minimal, readable UI",
    ],
    stack: ["Next.js", "TypeScript", "REST APIs", "Tailwind CSS"],
    github: "https://github.com/Cyberpunk-Cyber/Weather-app",
    visual: "weather",
  },
  {
    name: "Real Estate Scraper",
    tagline: "Data extraction & analysis pipeline",
    description:
      "A Python scraper that extracts real estate listings, normalizes the data, and exposes it in a structured format for analysis.",
    problem:
      "Property data is scattered and unstructured. This pipeline turns raw HTML into clean, queryable records.",
    features: [
      "Automated listing extraction",
      "Data cleaning & normalization",
      "Structured CSV/JSON output",
    ],
    stack: ["Python", "Web Scraping", "Data Extraction", "REST APIs"],
    github: "https://github.com/Cyberpunk-Cyber/Scraper",
    visual: "scraper",
  },
  {
    name: "Gambling Slot Machine",
    tagline: "Interactive slot machine simulator",
    description:
      "A browser-based slot machine game built with Streamlit, featuring virtual wallet management, configurable bets, and random symbol generation.",
    problem:
      "Wanted to build an interactive gambling simulator to understand game mechanics and user interface design for entertainment applications.",
    features: [
      "Virtual wallet with balance management",
      "Configurable bet amounts and line selections",
      "Random symbol generation and payout calculation",
      "Interactive Streamlit web interface",
    ],
    stack: ["Python", "Streamlit", "Game Development"],
    github: "https://github.com/Cyberpunk-Cyber/Gambling-app",
    visual: "gambling",
  },
];
