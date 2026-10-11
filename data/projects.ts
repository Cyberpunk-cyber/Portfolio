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
  visual: "chatbot" | "jarvis" | "contacts" | "weather" | "scraper" | "gambling" | "techsspire";
};

export const PROJECTS: Project[] = [
  {
    name: "AI Customer Support Platform",
    tagline: "From helpful chat to intelligent business workflows",
    description:
      "A multi-tier customer support platform that grows from conversational assistance into knowledge-grounded answers and action-oriented automation. It brings together full-stack engineering, modern LLM integration, and product thinking in one cohesive system.",
    problem:
      "Most support chatbots stop at conversation. I wanted to design a clearer path from answering questions to understanding business knowledge, taking approved actions, and fitting naturally into a team's workflow.",
    features: [
      "Basic tier for reliable conversational support",
      "Standard tier with document processing, embeddings, PostgreSQL, pgvector, and RAG",
      "Premium architecture for tool execution, appointments, confirmations, CRM, and automation",
      "Tenant isolation, API security, rate limiting, and automated testing",
    ],
    stack: [
      "Python",
      "FastAPI",
      "LLM APIs",
      "PostgreSQL",
      "pgvector",
      "RAG",
      "REST APIs",
    ],
    github: "https://github.com/Cyberpunk-Cyber",
    featured: true,
    visual: "chatbot",
  },
  {
    name: "JARVIS AI Agent",
    tagline: "A personal AI assistant with real tools",
    description:
      "A personal AI assistant that combines weather updates, web search, local file discovery, a party mode, and a JavaScript self-destruct feature behind one interface. It is a hands-on exploration of tool integration and agent-style workflows.",
    problem:
      "I wanted to build something more alive than another chat box: one assistant that can understand a request, choose the right capability, and bring the result back through a focused interface.",
    features: [
      "Weather information with a visual weather card",
      "Local file searching and web searching",
      "Party mode and a JavaScript self-destruct feature",
      "Multiple capabilities unified in one personal assistant",
    ],
    stack: ["Python", "JavaScript", "APIs", "Local File Search", "Web Search"],
    github: "https://github.com/Cyberpunk-Cyber/MY-JARVIS",
    demo: "https://aura-os-gold.vercel.app",
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
