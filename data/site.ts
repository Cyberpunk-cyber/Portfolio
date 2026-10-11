export const SITE = {
  name: "Ghous Muhammad",
  shortName: "GHOUS",
  title: "Full-Stack Developer & AI Engineer",
  tagline: "I design and build AI-powered software that ships.",
  description:
    "Computer Science student and full-stack developer building LLM-powered products — conversational support platforms with retrieval-augmented generation, agent-style assistants, and production-ready web applications.",
  location: "Pakistan",
  availability: "Open to internships & freelance work",
  email: "muhammadghous044@gmail.com",
  socials: {
    github: "https://github.com/Cyberpunk-Cyber",
    linkedin: "https://www.linkedin.com/in/ghous-muhammad00",
  },
  stats: {
    yearsLearning: "1+",
    projects: "6+",
    technologies: "18+",
  },
  about: [
    "I'm a Computer Science student who builds software to understand how it works. That habit turned into a focus on full-stack engineering and applied AI — products that are useful beyond a demo.",
    "My work sits where web engineering meets language models: responsive interfaces, Python and FastAPI backends, relational and vector databases, retrieval pipelines that ground answers in real documents, and tool-calling designs that let an assistant take an action instead of only replying.",
    "I learn by shipping. Each project adds a new system to understand — data modelling, retrieval quality, API security, deployment — and each one raises the bar for the next.",
  ],
  journey: [
    {
      year: "2025",
      title: "Started a BS in Computer Science",
      description:
        "University of Central Punjab. Built the fundamentals — programming, data structures, databases — that everything since has rested on.",
    },
    {
      year: "2025",
      title: "Moved into web development",
      description:
        "Progressed from HTML, CSS and JavaScript to React and Next.js, learning to build the interface and the system behind it.",
    },
    {
      year: "2026",
      title: "Started building with language models",
      description:
        "Went beyond single API calls into prompt design, embeddings, retrieval, and the engineering needed to make an LLM useful in a real product.",
    },
    {
      year: "2026",
      title: "Went full-stack",
      description:
        "Databases, REST APIs, authentication, Docker and deployment — the parts that turn a working prototype into a dependable application.",
    },
    {
      year: "2026",
      title: "Built an AI customer support platform",
      description:
        "Designed tiered conversational support, then extended it with document ingestion, pgvector retrieval, tool execution, and confirmation flows for sensitive actions.",
    },
    {
      year: "2026",
      title: "Built JARVIS, a personal AI assistant",
      description:
        "Unified weather, web search, local file discovery, and other capabilities behind one interface — an exercise in tool integration and assistant design.",
    },
    {
      year: "2026",
      title: "Explored what happens beneath the API",
      description:
        "Trained a small language model from scratch, attempted a larger-scale run, and fine-tuned Llama 3.2 — learning firsthand where hardware and data quality set the ceiling.",
    },
  ],
  education: {
    university: "University of Central Punjab",
    degree: "BS Computer Science",
    period: "2025 — Present",
    areas: [
      "Programming Fundamentals",
      "Data Structures & Algorithms",
      "Database Systems",
      "Web Development",
      "Digital Logic Design",
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
