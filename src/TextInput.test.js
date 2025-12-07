import { render, screen, fireEvent } from "@testing-library/react";
import TextInput from "./TextInput";

test("updates text on user input", () => {
  render(<TextInput />);
  
  const input = screen.getByPlaceholderText("Enter text here");
  
  fireEvent.change(input, { target: { value: "Hello" } });
  
  expect(screen.getByText("You typed: Hello")).toBeInTheDocument();
});
