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
  visual: "chatbot" | "jarvis" | "contacts" | "weather" | "scraper" | "gambling";
};

/**
 * Projects are ordered deliberately: the AI customer support platform is the
 * lead project and always renders first.
 */
export const PROJECTS: Project[] = [
  {
    name: "AI Customer Support Platform",
    tagline: "Conversational support, grounded knowledge, and agentic workflows",
    description:
      "A tiered customer support platform that starts as a reliable chatbot and grows into a system that answers from a business's own documents and takes approved actions on its behalf. Built as one product with three clearly scoped tiers rather than three disconnected demos.",
    problem:
      "Most support chatbots stop at conversation. I wanted to design a deliberate path from answering questions to retrieving business knowledge, executing approved actions, and fitting into a team's existing workflow.",
    features: [
      "Basic tier: reliable conversational support behind a REST API",
      "Standard tier: document ingestion, embeddings, PostgreSQL with pgvector, and retrieval-augmented generation",
      "Premium tier: tool execution, appointment booking, and confirmation before sensitive actions",
      "Tenant isolation, API security, rate limiting, and an automated test suite",
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
    name: "JARVIS — Personal AI Assistant",
    tagline: "One assistant, many integrated capabilities",
    description:
      "A personal AI assistant that unifies several capabilities behind a single interface: weather information with a dedicated weather card, web search for current information, local file discovery on the machine it runs on, and a couple of deliberately playful features.",
    problem:
      "I wanted to build something more capable than another chat window — an assistant that routes a request to the right capability and returns the result through a purpose-built interface instead of a wall of terminal output.",
    features: [
      "Weather lookup rendered as a purpose-built weather card",
      "Web search for current information and local file search on the host machine",
      "Multiple capabilities routed through one conversational interface",
      "An interface layer rather than a terminal-only experience",
    ],
    stack: ["Python", "JavaScript", "REST APIs", "File System APIs", "Web Scraping"],
    github: "https://github.com/Cyberpunk-Cyber/MY-JARVIS",
    demo: "https://aura-os-gold.vercel.app",
    visual: "jarvis",
  },
  {
    name: "Real Estate Data Pipeline",
    tagline: "Multi-site scraping and structured dataset export",
    description:
      "A Python pipeline that collects real estate listings across multiple sites, extracts the fields that matter, normalises inconsistencies between sources, and exports a clean dataset for analysis.",
    problem:
      "Property data is scattered across sites that each structure it differently. The pipeline turns that raw, inconsistent HTML into records that can actually be queried and compared.",
    features: [
      "Configurable multi-site listing collection",
      "Field extraction and normalisation across differing page structures",
      "Duplicate handling and resilient error recovery",
      "Excel and CSV export of the cleaned dataset",
    ],
    stack: ["Python", "Web Scraping", "Data Extraction", "Data Normalisation", "OpenPyXL"],
    github: "https://github.com/Cyberpunk-Cyber/Scraper",
    visual: "scraper",
  },
  {
    name: "Contact Manager",
    tagline: "A complete full-stack CRUD application",
    description:
      "A contact management application built end to end on Next.js and MongoDB, covering the full create, read, update, and delete lifecycle with server-side validation and a responsive interface.",
    problem:
      "I wanted to internalise the full-stack loop properly — server components, API routes, schema design, and a real database — by building one small product completely rather than many partially.",
    features: [
      "Full CRUD lifecycle for contact records",
      "Database persistence with MongoDB and schema validation",
      "Instant client-side search and filtering",
      "Responsive Tailwind CSS interface",
    ],
    stack: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS", "REST APIs"],
    github: "https://github.com/Cyberpunk-Cyber/Contact_Manager",
    visual: "contacts",
  },
  {
    name: "Weather Application",
    tagline: "Live conditions from a third-party API",
    description:
      "A focused weather application that fetches live conditions and forecasts from an external API and presents them in a clean, readable interface with deliberate loading and error states.",
    problem:
      "The fastest way to learn async data fetching is with data that actually changes — including all the network failures and empty states that come with it.",
    features: [
      "Location-based live weather and forecast data",
      "Explicit loading, empty, and error states",
      "Minimal single-purpose interface",
    ],
    stack: ["Next.js", "TypeScript", "REST APIs", "Tailwind CSS"],
    github: "https://github.com/Cyberpunk-Cyber/Weather-app",
    visual: "weather",
  },
  {
    name: "Slot Machine Simulator",
    tagline: "State and probability modelling in an interactive app",
    description:
      "A virtual slot machine built with Streamlit, complete with wallet balance management, configurable bets, randomised symbol generation, and payout calculation — no real currency involved.",
    problem:
      "I wanted to model stateful game logic correctly: how a balance changes, how payouts depend on symbol combinations, and how to present all of it interactively.",
    features: [
      "Wallet and balance management across spins",
      "Configurable bet amounts and payline selection",
      "Randomised symbol generation with payout calculation",
      "Interactive Streamlit interface",
    ],
    stack: ["Python", "Streamlit", "Game Logic"],
    github: "https://github.com/Cyberpunk-Cyber/Gambling-app",
    visual: "gambling",
  },
];
