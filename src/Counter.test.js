import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("increments and decrements the counter", () => {
  render(<Counter />);
  
  const incButton = screen.getByText("Increment");
  const decButton = screen.getByText("Decrement");
  const countDisplay = screen.getByText(/Current Count:/);

  // Increment
  fireEvent.click(incButton);
  expect(countDisplay.textContent).toBe("Current Count: 1");

  // Prevent negative numbers
  fireEvent.click(decButton);
  fireEvent.click(decButton); // extra click
  expect(countDisplay.textContent).toBe("Current Count: 0");
});
