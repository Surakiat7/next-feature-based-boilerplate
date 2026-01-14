"use client";

import { useState, useCallback } from "react";

export interface UseCounterOptions {
  initialValue?: number;
  min?: number;
  max?: number;
  step?: number;
}

export interface UseCounterReturn {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  setCount: (value: number) => void;
}

export function useCounter(options: UseCounterOptions = {}): UseCounterReturn {
  const { initialValue = 0, min = -Infinity, max = Infinity, step = 1 } = options;

  const [count, setCountState] = useState(initialValue);

  const setCount = useCallback(
    (value: number) => {
      setCountState(Math.min(Math.max(value, min), max));
    },
    [min, max]
  );

  const increment = useCallback(() => {
    setCountState((prev) => Math.min(prev + step, max));
  }, [step, max]);

  const decrement = useCallback(() => {
    setCountState((prev) => Math.max(prev - step, min));
  }, [step, min]);

  const reset = useCallback(() => {
    setCountState(initialValue);
  }, [initialValue]);

  return {
    count,
    increment,
    decrement,
    reset,
    setCount,
  };
}
