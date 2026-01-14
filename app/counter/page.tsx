import type { Metadata } from "next";
import { CounterView } from "@/features/counter/views/CounterView";

export const metadata: Metadata = {
  title: "Counter | Next.js Boilerplate",
  description: "Interactive counter demo showcasing React hooks and state management",
  keywords: ["Counter", "React Hooks", "State Management", "Demo"],
};

export default function CounterPage() {
  return <CounterView />;
}
