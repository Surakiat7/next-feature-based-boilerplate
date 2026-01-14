import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { CounterCard } from "@/features/counter/components/CounterCard";

// Mock useCounter hook
jest.mock("@/features/counter/hooks/useCounter", () => ({
  useCounter: ({ initialValue = 0 }: { initialValue?: number }) => {
    const [count, setCount] = React.useState(initialValue);
    return {
      count,
      increment: () => setCount((c: number) => c + 1),
      decrement: () => setCount((c: number) => c - 1),
      reset: () => setCount(initialValue),
      setCount,
    };
  },
}));

describe("CounterCard", () => {
  it("should render the counter with initial value", () => {
    render(<CounterCard initialValue={5} />);
    
    expect(screen.getByTestId("counter-value")).toHaveTextContent("5");
  });

  it("should increment when + button is clicked", () => {
    render(<CounterCard initialValue={0} />);
    
    const incrementButton = screen.getByTestId("increment-button");
    fireEvent.click(incrementButton);
    
    expect(screen.getByTestId("counter-value")).toHaveTextContent("1");
  });

  it("should decrement when - button is clicked", () => {
    render(<CounterCard initialValue={5} />);
    
    const decrementButton = screen.getByTestId("decrement-button");
    fireEvent.click(decrementButton);
    
    expect(screen.getByTestId("counter-value")).toHaveTextContent("4");
  });

  it("should reset when Reset button is clicked", () => {
    render(<CounterCard initialValue={10} />);
    
    const incrementButton = screen.getByTestId("increment-button");
    const resetButton = screen.getByTestId("reset-button");
    
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    expect(screen.getByTestId("counter-value")).toHaveTextContent("12");
    
    fireEvent.click(resetButton);
    expect(screen.getByTestId("counter-value")).toHaveTextContent("10");
  });

  it("should render the Counter title", () => {
    render(<CounterCard />);
    
    expect(screen.getByText("Counter")).toBeInTheDocument();
  });
});
