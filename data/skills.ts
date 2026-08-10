export type SkillCategory = {
  title: string;
  description: string;
  skills: string[];
};

export const SKILLS: SkillCategory[] = [
  {
    title: "Frontend",
    description: "Crafting responsive, accessible interfaces",
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
    description: "Designing APIs and data systems",
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
    title: "AI / Tools",
    description: "Building intelligent, automated workflows",
    skills: [
      "LLMs",
      "OpenRouter",
      "Ollama",
      "Google Gemini API",
      "Docker",
      "Git",
      "GitHub",
      "Vercel",
      "Railway",
    ],
  },
  {
    title: "Python Ecosystem",
    description: "Data, automation & interactive apps",
    skills: [
      "Streamlit",
      "Web Scraping",
      "Data Extraction",
      "Data Analysis",
    ],
  },
];
