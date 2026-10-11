import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faBrain,
  faCode,
  faCubes,
  faServer,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";

export type SkillCategory = {
  title: string;
  description: string;
  icon: IconDefinition;
  skills: string[];
};

export const SKILLS: SkillCategory[] = [
  {
    title: "AI & Intelligent Systems",
    description: "Assistants that understand a request, retrieve real context, and act on it",
    icon: faBrain,
    skills: [
      "Large Language Models",
      "Retrieval-Augmented Generation",
      "Embeddings & Vector Search",
      "Tool Calling",
      "Prompt Engineering",
      "OpenRouter",
      "Ollama",
      "Google Gemini API",
    ],
  },
  {
    title: "Frontend",
    description: "Responsive, accessible interfaces with deliberate motion",
    icon: faCode,
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
    title: "Backend & Data",
    description: "APIs, schemas, and data layers built to hold up under real use",
    icon: faServer,
    skills: [
      "Python",
      "FastAPI",
      "Node.js",
      "REST APIs",
      "PostgreSQL",
      "MongoDB",
      "Authentication & Rate Limiting",
    ],
  },
  {
    title: "Engineering & Delivery",
    description: "Taking a project from a local build to a deployed product",
    icon: faScrewdriverWrench,
    skills: ["Docker", "Git", "GitHub", "Vercel", "Railway", "Automated Testing"],
  },
  {
    title: "Python Ecosystem",
    description: "Automation, data collection, and interactive applications",
    icon: faCubes,
    skills: [
      "Streamlit",
      "Web Scraping",
      "Data Extraction & Normalisation",
      "Data Analysis",
    ],
  },
];
