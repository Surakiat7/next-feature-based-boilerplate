import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AboutView() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center space-y-8 max-w-3xl mx-auto">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">About</h1>
          <p className="text-lg text-muted-foreground">
            Learn more about this boilerplate and how to use it effectively.
          </p>
        </div>

        <Card className="w-full">
          <CardHeader>
            <CardTitle>Project Structure</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
{`├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── counter/page.tsx    # Counter page
│   └── about/page.tsx      # About page
├── components/
│   ├── layout/             # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── MainLayout.tsx
│   └── ui/                 # shadcn/ui components
├── features/               # Feature-based modules
│   ├── counter/
│   │   ├── components/
│   │   ├── hooks/
│   │   └── views/
│   ├── home/
│   └── about/
├── tests/                  # Unit tests
└── e2e/                    # E2E tests`}
            </pre>
          </CardContent>
        </Card>

        <Card className="w-full">
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-medium">Development</h4>
              <pre className="bg-muted p-3 rounded-lg text-sm">
                bun dev
              </pre>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Run Unit Tests</h4>
              <pre className="bg-muted p-3 rounded-lg text-sm">
                bun test
              </pre>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Run E2E Tests</h4>
              <pre className="bg-muted p-3 rounded-lg text-sm">
                bun test:e2e
              </pre>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Build for Production</h4>
              <pre className="bg-muted p-3 rounded-lg text-sm">
                bun run build
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
