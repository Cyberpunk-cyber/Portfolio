import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";
import { SITE, SITE_URL } from "@/data/site";

// Font Awesome injects its own CSS at runtime by default, which causes icons to
// flash at full size before hydration. We load the stylesheet above instead.
config.autoAddCss = false;

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

/** Rounded, friendly display face — the typographic half of the clay look. */
const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE.name} — Full-Stack Developer & AI Engineer`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Portfolio of Ghous Muhammad, a full-stack developer and AI engineer building LLM-powered customer support platforms, retrieval-augmented generation pipelines, and production-ready web applications with Python, FastAPI, Next.js, and PostgreSQL.",
  applicationName: `${SITE.name} Portfolio`,
  authors: [{ name: SITE.name, url: SITE.socials.github }],
  creator: SITE.name,
  publisher: SITE.name,
  keywords: [
    "Ghous Muhammad",
    "full-stack developer portfolio",
    "AI engineer portfolio",
    "LLM application developer",
    "retrieval-augmented generation",
    "RAG developer",
    "Python FastAPI developer",
    "Next.js developer",
    "PostgreSQL pgvector",
    "AI customer support platform",
    "tool-calling agents",
    "AI internships",
    "freelance AI developer",
    "Pakistan software developer",
  ],
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: `${SITE.name} — Portfolio`,
    title: `${SITE.name} — Full-Stack Developer & AI Engineer`,
    description:
      "Building LLM-powered products end to end: conversational support platforms with retrieval-augmented generation, agent-style AI assistants, and full-stack web applications.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Full-Stack Developer & AI Engineer`,
    description:
      "LLM-powered products, retrieval-augmented generation, and full-stack web applications built with Python, FastAPI, Next.js, and PostgreSQL.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
  },
};

/**
 * Structured data so search engines can understand who this site is about.
 * Kept in sync with `data/site.ts` and rendered as JSON-LD on every page.
 */
function StructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: SITE.name,
        url: SITE_URL,
        email: `mailto:${SITE.email}`,
        jobTitle: "Full-Stack Developer & AI Engineer",
        description: SITE.description,
        knowsAbout: [
          "Artificial Intelligence",
          "Large Language Models",
          "Retrieval-Augmented Generation",
          "Full-Stack Web Development",
          "Python",
          "FastAPI",
          "Next.js",
          "PostgreSQL",
        ],
        address: {
          "@type": "PostalAddress",
          addressCountry: SITE.location,
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: SITE.education.university,
        },
        sameAs: [SITE.socials.github, SITE.socials.linkedin],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: `${SITE.name} — Portfolio`,
        description: SITE.description,
        inLanguage: "en",
        publisher: { "@id": `${SITE_URL}/#person` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // JSON-LD is static data generated from local constants, not user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${nunito.variable} scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body className="bg-background font-sans text-foreground">
        {children}
        <StructuredData />
      </body>
    </html>
  );
}
