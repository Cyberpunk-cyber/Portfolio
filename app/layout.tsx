import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SITE, SITE_URL } from "@/data/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ghous Muhammad — Developer & AI Builder",
    template: `%s | ${SITE.name}`,
  },
  description:
    "Portfolio of Ghous Muhammad, a Computer Science student and developer building modern web applications and AI-powered software.",
  keywords: [
    "Ghous Muhammad",
    "developer",
    "AI builder",
    "full-stack developer",
    "web development",
    "Next.js",
    "portfolio",
  ],
  openGraph: {
    title: "Ghous Muhammad — Developer & AI Builder",
    description:
      "Building modern web applications and AI-powered software.",
    url: SITE_URL,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghous Muhammad — Developer & AI Builder",
    description:
      "Building modern web applications and AI-powered software.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfairDisplay.variable} scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
