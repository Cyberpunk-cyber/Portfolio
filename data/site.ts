export const SITE = {
  name: "Ghous Muhammad",
  shortName: "GHOUS",
  title: "Full-stack developer & AI builder",
  tagline: "I turn ambitious ideas into useful software.",
  description:
    "CS student at UCP building polished web applications, AI-powered products, and practical automations that solve real problems.",
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
    "I'm a CS student at UCP who got into development because I wanted to understand how the things I saw on the internet were made — then build better versions of my own.",
    "My work now sits at the intersection of full-stack development and AI: responsive interfaces, Python backends, database systems, RAG pipelines, and assistants that can do more than generate a reply.",
    "I learn by shipping. Every project gives me a new system to understand, a sharper problem to solve, and one more reason to keep building.",
  ],
  journey: [
    {
      year: "2025",
      title: "Started BS Computer Science",
      description: "University of Central Punjab. Finally learning why my code actually breaks.",
    },
    {
      year: "2025",
      title: "Found my way into web development",
      description: "HTML, CSS, JavaScript, then React and Next.js. I started with interfaces and gradually learned how to build the systems behind them.",
    },
    {
      year: "2026",
      title: "Started building with AI",
      description: "Moved from simple API experiments to LLM integrations, structured prompts, retrieval, and the engineering needed to make AI useful.",
    },
    {
      year: "2026",
      title: "Went full-stack",
      description: "Databases, Docker, APIs, and deployment — the essential foundations that turn an impressive idea into a working product.",
    },
    {
      year: "2026",
      title: "Built JARVIS",
      description: "A personal AI assistant with weather, web search, local file discovery, party mode, and multiple capabilities inside one interface.",
    },
    {
      year: "2026",
      title: "Designed an AI support platform",
      description: "Explored the progression from conversational support to RAG-powered knowledge retrieval, tool execution, confirmations, and business automation.",
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
