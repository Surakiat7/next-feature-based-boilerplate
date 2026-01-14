import { CounterCard } from "@/features/counter/components/CounterCard";

export function CounterView() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Counter Demo</h1>
          <p className="text-lg text-muted-foreground max-w-xl">
            A simple counter component demonstrating React hooks, state management,
            and component composition with shadcn/ui.
          </p>
        </div>

        <CounterCard initialValue={0} min={-10} max={10} step={1} />

        <div className="mt-8 p-4 bg-muted rounded-lg max-w-md">
          <h3 className="font-semibold mb-2">Features:</h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Increment/Decrement with configurable step</li>
            <li>• Min/Max value boundaries</li>
            <li>• Reset to initial value</li>
            <li>• Fully tested with Jest and E2E</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
