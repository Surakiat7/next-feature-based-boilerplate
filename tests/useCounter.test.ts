import { renderHook, act } from "@testing-library/react";
import { useCounter } from "@/features/counter/hooks/useCounter";

describe("useCounter", () => {
  it("should initialize with default value of 0", () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
  });

  it("should initialize with custom initial value", () => {
    const { result } = renderHook(() => useCounter({ initialValue: 10 }));
    expect(result.current.count).toBe(10);
  });

  it("should increment the count", () => {
    const { result } = renderHook(() => useCounter());
    
    act(() => {
      result.current.increment();
    });
    
    expect(result.current.count).toBe(1);
  });

  it("should decrement the count", () => {
    const { result } = renderHook(() => useCounter({ initialValue: 5 }));
    
    act(() => {
      result.current.decrement();
    });
    
    expect(result.current.count).toBe(4);
  });

  it("should reset to initial value", () => {
    const { result } = renderHook(() => useCounter({ initialValue: 5 }));
    
    act(() => {
      result.current.increment();
      result.current.increment();
    });
    
    expect(result.current.count).toBe(7);
    
    act(() => {
      result.current.reset();
    });
    
    expect(result.current.count).toBe(5);
  });

  it("should respect max boundary", () => {
    const { result } = renderHook(() => useCounter({ initialValue: 9, max: 10 }));
    
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(10);
    
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(10);
  });

  it("should respect min boundary", () => {
    const { result } = renderHook(() => useCounter({ initialValue: 1, min: 0 }));
    
    act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(0);
    
    act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(0);
  });

  it("should increment by custom step", () => {
    const { result } = renderHook(() => useCounter({ step: 5 }));
    
    act(() => {
      result.current.increment();
    });
    
    expect(result.current.count).toBe(5);
  });

  it("should set count directly", () => {
    const { result } = renderHook(() => useCounter());
    
    act(() => {
      result.current.setCount(50);
    });
    
    expect(result.current.count).toBe(50);
  });

  it("should clamp setCount value to min/max", () => {
    const { result } = renderHook(() => useCounter({ min: 0, max: 100 }));
    
    act(() => {
      result.current.setCount(150);
    });
    expect(result.current.count).toBe(100);
    
    act(() => {
      result.current.setCount(-50);
    });
    expect(result.current.count).toBe(0);
  });
});
