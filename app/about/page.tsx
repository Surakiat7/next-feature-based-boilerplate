import type { Metadata } from "next";
import { AboutView } from "@/features/about/views/AboutView";

export const metadata: Metadata = {
  title: "About | Next.js Boilerplate",
  description: "Learn about the project structure and how to use this boilerplate effectively",
  keywords: ["About", "Documentation", "Getting Started"],
};

export default function AboutPage() {
  return <AboutView />;
}
