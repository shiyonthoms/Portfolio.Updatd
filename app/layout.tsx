import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.linkedin }],
  creator: siteConfig.name,
  keywords: [
    "Shiyon Thomas",
    "Adobe Campaign",
    "Adobe Campaign Classic",
    "Adobe Campaign Developer",
    "MarTech",
    "Marketing Technology",
    "MarTech Systems Architect",
    "Adobe Campaign v7 to v8 migration",
    "JSSP",
    "Google Cloud Platform",
    "GCP",
    "ETL",
    "Capgemini",
    "Associate Consultant",
    "Portfolio",
  ],
  referrer: "origin-when-cross-origin",
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: "@shiyonthomas",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F7F4EF",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.url,
  image: siteConfig.url + "/icon.svg",
  jobTitle: siteConfig.role,
  description: siteConfig.description,
  email: `mailto:${siteConfig.email}`,
  telephone: siteConfig.phone,
  worksFor: {
    "@type": "Organization",
    name: "Capgemini",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Amrita School of Engineering, Amritapuri, Kollam",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "St. Philomena's College, Mysore",
    },
  ],
  sameAs: [siteConfig.linkedin],
  knowsAbout: [
    "Adobe Campaign Classic",
    "Adobe Campaign v8",
    "JSSP",
    "Marketing Automation",
    "Google Cloud Platform",
    "ETL Pipelines",
    "Data Schemas",
    "MTA Delivery",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`scroll-smooth ${jakarta.variable} ${mono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="grid-bg text-[#111111] font-sans antialiased selection:bg-[#111111]/10 selection:text-[#111111] min-h-screen relative flex flex-col justify-between">
        {children}
      </body>
    </html>
  );
}
