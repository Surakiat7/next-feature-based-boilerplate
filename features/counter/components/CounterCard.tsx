"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCounter } from "@/features/counter/hooks/useCounter";

interface CounterCardProps {
  initialValue?: number;
  min?: number;
  max?: number;
  step?: number;
}

export function CounterCard({
  initialValue = 0,
  min,
  max,
  step = 1,
}: CounterCardProps) {
  const { count, increment, decrement, reset } = useCounter({
    initialValue,
    min,
    max,
    step,
  });

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-center">Counter</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div
          className="text-6xl font-bold text-center tabular-nums"
          data-testid="counter-value"
        >
          {count}
        </div>

        <div className="flex justify-center gap-4">
          <Button
            variant="outline"
            size="lg"
            onClick={decrement}
            data-testid="decrement-button"
            disabled={min !== undefined && count <= min}
          >
            -
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={reset}
            data-testid="reset-button"
          >
            Reset
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={increment}
            data-testid="increment-button"
            disabled={max !== undefined && count >= max}
          >
            +
          </Button>
        </div>

        {(min !== undefined || max !== undefined) && (
          <p className="text-sm text-muted-foreground text-center">
            Range: {min ?? "∞"} to {max ?? "∞"}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
