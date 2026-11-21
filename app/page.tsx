import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import PortfolioPage from "@/components/PortfolioPage";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function HomePage() {
  return <PortfolioPage />;
}
