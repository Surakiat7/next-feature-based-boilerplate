import type { Metadata } from "next";
import { HomeView } from "@/features/home/views/HomeView";

export const metadata: Metadata = {
  title: "Home | Next.js Boilerplate",
  description: "A modern Next.js boilerplate with feature-based architecture, TailwindCSS, and shadcn/ui",
  keywords: ["Next.js", "React", "TypeScript", "TailwindCSS", "Boilerplate"],
};

export default function HomePage() {
  return <HomeView />;
}
