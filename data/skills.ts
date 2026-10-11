export type SkillCategory = {
  title: string;
  description: string;
  skills: string[];
};

export const SKILLS: SkillCategory[] = [
  {
    title: "AI & Intelligent Systems",
    description: "Designing assistants that can understand, retrieve, and act",
    skills: [
      "LLMs",
      "RAG",
      "Embeddings",
      "Tool Calling",
      "OpenRouter",
      "Ollama",
      "Google Gemini API",
    ],
  },
  {
    title: "Frontend",
    description: "Crafting polished, responsive digital experiences",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    description: "Building reliable APIs and data systems",
    skills: [
      "Python",
      "FastAPI",
      "Node.js",
      "REST APIs",
      "MongoDB",
      "PostgreSQL",
    ],
  },
  {
    title: "Engineering & Delivery",
    description: "Taking projects from local build to working product",
    skills: [
      "Docker",
      "Git",
      "GitHub",
      "Vercel",
      "Railway",
    ],
  },
  {
    title: "Python Ecosystem",
    description: "Data, automation, and interactive applications",
    skills: [
      "Streamlit",
      "Web Scraping",
      "Data Extraction",
      "Data Analysis",
    ],
  },
];
