import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Feature-Based Architecture",
    description:
      "Organized codebase with feature folders for scalable development.",
  },
  {
    title: "shadcn/ui Components",
    description:
      "Beautiful, accessible, and customizable UI components.",
  },
  {
    title: "Dark Mode",
    description:
      "Built-in theme support with Light, Dark, and System modes using next-themes.",
  },
  {
    title: "Testing Ready",
    description:
      "Pre-configured Jest unit tests and Playwright E2E tests.",
  },
  {
    title: "TypeScript",
    description:
      "Full TypeScript support for type-safe development.",
  },
];

export function HomeView() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-4 max-w-3xl">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            Next.js Boilerplate
          </h1>
          <p className="text-xl text-muted-foreground">
            A modern, feature-based Next.js starter template with TailwindCSS,
            shadcn/ui, and comprehensive testing setup.
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Button asChild size="lg">
              <Link href="/counter">Try Counter Demo</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 w-full max-w-6xl">
          {features.map((feature) => (
            <Card key={feature.title} className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-semibold">Tech Stack</h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              "Next.js 15",
              "React 19",
              "TypeScript",
              "TailwindCSS v4",
              "shadcn/ui",
              "Jest",
              "Playwright",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
